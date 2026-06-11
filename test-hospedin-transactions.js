const fs = require('fs');

async function test() {
  try {
    const env = fs.readFileSync('.env', 'utf-8');
    const email = env.match(/HOSPEDIN_EMAIL=(.*)/)[1].trim();
    const password = env.match(/HOSPEDIN_PASSWORD=(.*)/)[1].trim();
    const accountId = env.match(/HOSPEDIN_ACCOUNT_ID=(.*)/)[1].trim();
    const baseUrl = (env.match(/BASE_URL=(.*)/)?.[1] || 'https://pms-api.hospedin.com/api/v2').trim();

    const authRes = await fetch(`${baseUrl}/authentication/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const authData = await authRes.json();
    const token = authData.data?.access_token || authData.access_token || authData.token;
    
    // Fetch transactions (Contas a pagar/receber)
    const targetPath = `/${accountId}/account_transactions?page=1`;
    const targetRes = await fetch(`${baseUrl}${targetPath}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Account-Id': accountId
      }
    });
    const data = await targetRes.json();
    
    console.log('Sample Transaction:', JSON.stringify(data.data && data.data[0] ? data.data[0] : data, null, 2));
  } catch (e) {
    console.error(e);
  }
}
test();
