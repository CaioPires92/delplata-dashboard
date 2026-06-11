export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // ou '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { email, password, accountId, baseUrl } = {
    email: process.env.HOSPEDIN_EMAIL,
    password: process.env.HOSPEDIN_PASSWORD,
    accountId: process.env.HOSPEDIN_ACCOUNT_ID,
    baseUrl: process.env.BASE_URL || 'https://pms-api.hospedin.com/api/v2'
  };

  if (!email || !password || !accountId) {
    return res.status(500).json({ error: 'Missing Hospedin credentials in Vercel Env Vars' });
  }

  // The client will pass which endpoint they want to hit via query param, e.g. ?path=/reservas
  // or it could be passed in the body. Let's support query.path for GET, and body.path for POST
  let targetPath = '';
  let requestMethod = req.method;
  let requestBody = null;

  if (req.method === 'GET') {
    targetPath = req.query.path;
    if (!targetPath) return res.status(400).json({ error: 'Missing path query parameter' });
  } else {
    targetPath = req.body.path;
    requestBody = req.body.data;
    if (!targetPath) return res.status(400).json({ error: 'Missing path in request body' });
  }

  // 1. Authenticate to get the token
  try {
    const authRes = await fetch(`${baseUrl}/authentication/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!authRes.ok) {
      const err = await authRes.text();
      return res.status(401).json({ error: 'Failed to authenticate with Hospedin', details: err });
    }

    const authData = await authRes.json();
    const token = authData.data?.access_token || authData.access_token; // Adjust based on Hospedin API structure

    if (!token) {
       return res.status(500).json({ error: 'Authentication succeeded but token was not found in response', data: authData });
    }

    // 2. Make the requested call
    // Ensure the targetPath starts with a slash
    if (!targetPath.startsWith('/')) targetPath = '/' + targetPath;

    // Most v2 endpoints require the account_id in the URL path
    // If the path doesn't already include the accountId, add it
    if (!targetPath.includes(`/${accountId}`)) {
       targetPath = `/${accountId}${targetPath}`;
    }

    // Remove path from query to construct the rest of the query string for GET
    const queryParams = { ...req.query };
    delete queryParams.path;
    
    let urlString = `${baseUrl}${targetPath}`;
    const qs = new URLSearchParams(queryParams).toString();
    if (qs && req.method === 'GET') {
      urlString += (targetPath.includes('?') ? '&' : '?') + qs;
    }

    const fetchOptions = {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Account-Id': accountId
      }
    };

    if (requestBody && requestMethod !== 'GET' && requestMethod !== 'HEAD') {
      fetchOptions.body = JSON.stringify(requestBody);
    }

    const targetRes = await fetch(urlString, fetchOptions);
    
    let targetData;
    const contentType = targetRes.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      targetData = await targetRes.json();
    } else {
      targetData = await targetRes.text();
    }

    res.status(targetRes.status).json(targetData);

  } catch (error) {
    console.error('Hospedin API Error:', error);
    res.status(500).json({ error: 'Internal server error while calling Hospedin API', message: error.message });
  }
}
