document.addEventListener('DOMContentLoaded', () => {
    // Show loading state
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.style.display = 'flex';

    fetchDashboardData().then(() => {
        if (overlay) overlay.style.display = 'none';
        
        // Populate the top KPIs
        populateDashboard(hospedinData);
        
        // Render simple reservations table
        renderReservationsTable(hospedinData.reservations);
    });
});

let hospedinData = {};

async function fetchDashboardData() {
    try {
        const response = await fetch('/api/hospedin');
        const data = await response.json();
        if (data.success) {
            hospedinData = data.data;
        } else {
            console.warn('API returned success: false, using fallback mock data');
            loadMockData();
        }
    } catch (error) {
        console.error('Error fetching Hospedin API data:', error);
        loadMockData();
    }
}

function loadMockData() {
    hospedinData = {
        occupancy: { rate: 82.5 },
        adr: { value: 379.50 },
        revenue: { value: 105200.00 },
        revpar: { value: 313.08 },
        reservations: [
            { guestName: "Carlos Ivan Carius Pereira", status: "Confirmada", checkin: "Hoje", source: "Booking.com" },
            { guestName: "Fernanda Souza Antonio", status: "Aguardando", checkin: "Hoje", source: "WhatsApp" },
            { guestName: "Mario Lucio Schumaher", status: "Confirmada", checkin: "Amanhã", source: "Site" },
            { guestName: "Robson de Lima", status: "Confirmada", checkin: "Amanhã", source: "Recepção" },
            { guestName: "Ligelison Santos", status: "Aguardando", checkin: "Em 3 dias", source: "Expedia" }
        ]
    };
}

function populateDashboard(data) {
    if (!data) return;
    
    // Occupancy
    const occEl = document.getElementById('kpi-occupancy');
    if (occEl && data.occupancy) {
        occEl.innerText = data.occupancy.rate + '%';
    }
    
    // ADR
    const adrEl = document.getElementById('kpi-adr');
    if (adrEl && data.adr) {
        adrEl.innerText = formatCurrency(data.adr.value);
    }
    
    // Revenue
    const revEl = document.getElementById('kpi-revenue');
    if (revEl && data.revenue) {
        revEl.innerText = formatCurrency(data.revenue.value);
    }
    
    // RevPAR
    const revparEl = document.getElementById('kpi-revpar');
    if (revparEl && data.revpar) {
        revparEl.innerText = formatCurrency(data.revpar.value);
    }
}

function renderReservationsTable(reservations) {
    const tbody = document.getElementById('reservations-tbody');
    if (!tbody || !reservations) return;
    
    tbody.innerHTML = '';
    reservations.forEach(res => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${res.guestName}</td>
            <td><span class="status-badge ${res.status === 'Confirmada' ? 'success' : 'warning'}">${res.status}</span></td>
            <td>${res.checkin}</td>
            <td>${res.source}</td>
        `;
        tbody.appendChild(tr);
    });
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
