// ==========================================
// 1. DATA DEFINITIONS (CHEMICALS, HISTORICAL, FUTURE)
// ==========================================

const INITIAL_PURCHASES = [
    { id: 1, name: "Hidro Soft Blue 50 LT", price: 524.81, date: "2026-02-03", category: "Amaciante" },
    { id: 2, name: "Hidro Soft Blue 50 LT", price: 524.81, date: "2026-01-27", category: "Amaciante" },
    { id: 3, name: "Hidro TEX ADT 55kg", price: 614.62, date: "2026-01-10", category: "Aditivo" },
    { id: 4, name: "Hidro TEX Acid-lav 50 LT", price: 1073.60, date: "2025-12-22", category: "Neutralizante/Ácido" },
    { id: 5, name: "Hidro Tex Lav 50kg", price: 889.77, date: "2025-12-22", category: "Detergente/Sabão" },
    { id: 6, name: "Hidro Soft Blue 50 LT", price: 524.81, date: "2025-11-04", category: "Amaciante" },
    { id: 7, name: "Hidro TEX Acid-lav 50 LT", price: 1073.60, date: "2025-10-28", category: "Neutralizante/Ácido" },
    { id: 8, name: "Hidro Tex Lav 50kg", price: 889.77, date: "2025-10-14", category: "Detergente/Sabão" }
];

// Commercial metrics parsed from the sales CSV (Jan 1 to May 31, 2026)
const COMMERCIAL_SUMMARY = {
    totalRevenue: 395800.71,
    totalNights: 1043,
    totalBookings: 626,
    totalGuests: 1448,
    totalAdults: 1303,
    totalChildren: 145,
    adr: 379.48, 
    totalProducts: 9272.00,
    totalServices: 332.00,
    daysInPeriod: 152,
    monthsInPeriod: 5.0
};

const CHANNELS_DATA = [
    { channel: "Booking", revenue26: 251293.88, nights26: 658, bookings26: 398, guests26: 907, revenue25: 251937.63, nights25: 752, bookings25: 437, guests25: 987 },
    { channel: "WhatsApp", revenue26: 81314.10, nights26: 201, bookings26: 106, guests26: 261, revenue25: 155182.60, nights25: 459, bookings25: 253, guests25: 595 },
    { channel: "Recepção", revenue26: 19710.00, nights26: 59, bookings26: 41, guests26: 102, revenue25: 8986.33, nights25: 32, bookings25: 26, guests25: 63 },
    { channel: "Expedia", revenue26: 16739.27, nights26: 45, bookings26: 34, guests26: 80, revenue25: 310.00, nights25: 1, bookings25: 1, guests25: 3 },
    { channel: "Site", revenue26: 12137.30, nights26: 35, bookings26: 21, guests26: 44, revenue25: 0.00, nights25: 0, bookings25: 0, guests25: 0 },
    { channel: "Cobrastur", revenue26: 5207.00, nights26: 17, bookings26: 7, guests26: 15, revenue25: 0.00, nights25: 0, bookings25: 0, guests25: 0 },
    { channel: "Email", revenue26: 3553.00, nights26: 9, bookings26: 5, guests26: 11, revenue25: 0.00, nights25: 0, bookings25: 0, guests25: 0 },
    { channel: "Telefone", revenue26: 3438.00, nights26: 12, bookings26: 9, guests26: 17, revenue25: 15005.31, nights25: 50, bookings25: 34, guests25: 83 },
    { channel: "Não Especificado", revenue26: 2408.16, nights26: 7, bookings26: 5, guests26: 11, revenue25: 3830.23, nights25: 9, bookings25: 7, guests25: 17 },
    { channel: "Facebook", revenue26: 0.00, nights26: 0, bookings26: 0, guests26: 0, revenue25: 309.00, nights25: 1, bookings25: 1, guests25: 2 }
];

const MONTHLY_SALES = [
    { month: "Jan", revenue26: 48664.18, revenue25: 61266.20, nights26: 130, nights25: 182 },
    { month: "Fev", revenue26: 71964.19, revenue25: 74580.26, nights26: 183, nights25: 226 },
    { month: "Mar", revenue26: 82813.34, revenue25: 90703.53, nights26: 242, nights25: 267 },
    { month: "Abr", revenue26: 108765.10, revenue25: 113911.79, nights26: 270, nights25: 330 },
    { month: "Mai", revenue26: 75652.50, revenue25: 95099.32, nights26: 203, nights25: 299 }
];

// Future bookings data (Check-ins after May 31, 2026)
const FUTURE_SUMMARY = {
    totalRevenue: 202273.98,
    totalBookings: 255,
    totalNights: 539,
    totalGuests: 592,
    adr: 375.28
};

const FUTURE_CHANNELS = [
    { channel: "Booking", revenue: 137688.65, count: 158, share: 68.1 },
    { channel: "WhatsApp", revenue: 36161.43, count: 61, share: 17.9 },
    { channel: "Cobrastur", revenue: 10800.00, count: 15, share: 5.3 },
    { channel: "Expedia", revenue: 6575.89, count: 10, share: 3.3 },
    { channel: "Site", revenue: 5999.01, count: 8, share: 3.0 },
    { channel: "Recepção", revenue: 4650.00, count: 2, share: 2.3 },
    { channel: "Telefone", revenue: 399.00, count: 1, share: 0.2 }
];

const FUTURE_BOOKINGS_LIST = [
    { guestName: "Willian Álvaro Pacheco", channel: "Site", total: 578.00, nights: 2, guests: 3, checkin: "27/05/2026", checkout: "29/05/2026", category: "Chalés", situation: "reservado" },
    { guestName: "Alexandre Marcon", channel: "WhatsApp", total: 798.00, nights: 2, guests: 2, checkin: "29/05/2026", checkout: "31/05/2026", category: "Aptos Superiores", situation: "reservado" },
    { guestName: "Jhonny Faganelli Ozorio", channel: "Booking", total: 648.82, nights: 2, guests: 2, checkin: "29/05/2026", checkout: "31/05/2026", category: "Chalés", situation: "reservado" },
    { guestName: "MARIA FERNANDA COUTINHO CORDEIRO", channel: "Cobrastur", total: 500.00, nights: 2, guests: 3, checkin: "29/05/2026", checkout: "31/05/2026", category: "Aptos térreos", situation: "reservado" },
    { guestName: "Daniel Menezes Cordeiro", channel: "Cobrastur", total: 500.00, nights: 2, guests: 3, checkin: "29/05/2026", checkout: "31/05/2026", category: "Aptos térreos", situation: "reservado" },
    { guestName: "Mariana Menezes Cordeiro Monterazo", channel: "Cobrastur", total: 500.00, nights: 2, guests: 2, checkin: "29/05/2026", checkout: "31/05/2026", category: "Aptos térreos", situation: "reservado" },
    { guestName: "Carlos Ivan Carius Pereira Carius", channel: "Booking", total: 311.22, nights: 1, guests: 2, checkin: "29/05/2026", checkout: "30/05/2026", category: "Apto Anexo", situation: "reservado" },
    { guestName: "Eunice Eduardo", channel: "Booking", total: 319.60, nights: 1, guests: 2, checkin: "30/05/2026", checkout: "31/05/2026", category: "Apto Anexo", situation: "reservado" },
    { guestName: "Fernanda Souza Antonio", channel: "Booking", total: 561.60, nights: 1, guests: 3, checkin: "30/05/2026", checkout: "31/05/2026", category: "Aptos térreos", situation: "reservado" },
    { guestName: "Mario Lucio Schumaher", channel: "WhatsApp", total: 359.10, nights: 1, guests: 2, checkin: "30/05/2026", checkout: "31/05/2026", category: "Aptos Superiores", situation: "reservado" },
    { guestName: "Ingrid Simões Do Prado", channel: "Booking", total: 270.19, nights: 1, guests: 2, checkin: "30/05/2026", checkout: "31/05/2026", category: "Chalés", situation: "reservado" },
    { guestName: "Gameiro Gustavo", channel: "Booking", total: 284.41, nights: 1, guests: 2, checkin: "30/05/2026", checkout: "31/05/2026", category: "Apto Anexo", situation: "reservado" },
    { guestName: "Robson de Lima", channel: "WhatsApp", total: 350.00, nights: 1, guests: 3, checkin: "30/05/2026", checkout: "31/05/2026", category: "Aptos térreos", situation: "reservado" },
    { guestName: "Monica Fernandes", channel: "Expedia", total: 283.11, nights: 1, guests: 2, checkin: "30/05/2026", checkout: "31/05/2026", category: "Apto Anexo", situation: "reservado" },
    { guestName: "Ligelison Santos", channel: "Booking", total: 763.68, nights: 3, guests: 3, checkin: "01/06/2026", checkout: "04/06/2026", category: "Aptos térreos", situation: "reservado" }
];

// Booking.com and Competitor Benchmarking data
const BK_COMPETITORS_DATA = [
    { rank: 1, name: "Hotel Pousada Delplata (Sua Propriedade)", score: 8.6, genius: true, preferred: false, isSelf: true },
    { rank: 2, name: "Pousada Della Vegas", score: 8.9, genius: true, preferred: false },
    { rank: 3, name: "Pousada Cachoeira Dos Sonhos", score: 8.6, genius: true, preferred: false },
    { rank: 4, name: "Hotel Pousada Gurupiá", score: 8.6, genius: true, preferred: false },
    { rank: 5, name: "Chalés Vila da Serra", score: 9.0, genius: false, preferred: true },
    { rank: 6, name: "Pousada Villa dos Leais", score: 9.4, genius: false, preferred: true },
    { rank: 7, name: "Hotel Moinho de Pedra", score: 8.0, genius: false, preferred: false },
    { rank: 8, name: "Miragem Chalés", score: 7.9, genius: false, preferred: false },
    { rank: 9, name: "Hotel Montana Serra Negra", score: 6.9, genius: true, preferred: false }
];

const BK_ROOM_BREAKDOWN = [
    { room: "Quarto Standard", nights: 250, revenue: 97071.55, adr: 388.29 },
    { room: "Quarto Duplo Standard - Anexo", nights: 249, revenue: 91396.66, adr: 367.05 },
    { room: "Chalé", nights: 227, revenue: 85820.18, adr: 378.06 },
    { room: "Quarto Superior", nights: 145, revenue: 60733.04, adr: 418.85 }
];

const BK_MONTHLY_PROJECTIONS = [
    { month: "Jun/26", nights: 158, revenue: 62394.30, adr: 394.90 },
    { month: "Jul/26", nights: 104, revenue: 41342.84, adr: 397.53 },
    { month: "Ago/26", nights: 58, revenue: 22506.21, adr: 388.04 },
    { month: "Set/26", nights: 10, revenue: 3805.65, adr: 380.57 },
    { month: "Out/26", nights: 6, revenue: 2595.40, adr: 432.57 },
    { month: "Nov/26", nights: 12, revenue: 4348.28, adr: 362.36 },
    { month: "Dez/26", nights: 10, revenue: 4082.41, adr: 408.24 }
];

const BK_STAYS_VS_RESERVATIONS = [
    { month: "Jan/26", staysRevenue: 101372.27, bookingsRevenue: 161431.52, staysNights: 272, bookingsNights: 419, staysRevenuePrev: 76775.17, bookingsRevenuePrev: 124446.89, staysNightsPrev: 246, bookingsNightsPrev: 373 },
    { month: "Fev/26", staysRevenue: 67209.50, bookingsRevenue: 106780.39, staysNights: 169, bookingsNights: 287, staysRevenuePrev: 43873.66, bookingsRevenuePrev: 113819.89, staysNightsPrev: 149, bookingsNightsPrev: 310 },
    { month: "Mar/26", staysRevenue: 55776.10, bookingsRevenue: 83870.07, staysNights: 161, bookingsNights: 192, staysRevenuePrev: 75999.31, bookingsRevenuePrev: 161085.61, staysNightsPrev: 200, bookingsNightsPrev: 465 },
    { month: "Abr/26", staysRevenue: 54516.66, bookingsRevenue: 167741.10, staysNights: 136, bookingsNights: 422, staysRevenuePrev: 48435.87, bookingsRevenuePrev: 195083.48, staysNightsPrev: 141, bookingsNightsPrev: 575 },
    { month: "Mai/26", staysRevenue: 56146.91, bookingsRevenue: 79750.24, staysNights: 133, bookingsNights: 212, staysRevenuePrev: 59934.94, bookingsRevenuePrev: 136559.47, staysNightsPrev: 187, bookingsNightsPrev: 411 }
];

// Ocupação e Fluxo Financeiro (Jan a Mai 2025 vs 2026)
const OCCUPANCY_2025 = [
    { period: 'Jan/25', occupancy: 37.36, nights_sold: 374, nights_avail: 1001, bookings: 223, guests: 559, adults: 473, children: 86 },
    { period: 'Fev/25', occupancy: 24.81, nights_sold: 229, nights_avail: 923, bookings: 146, guests: 340, adults: 300, children: 40 },
    { period: 'Mar/25', occupancy: 33.70, nights_sold: 336, nights_avail: 997, bookings: 187, guests: 425, adults: 386, children: 39 },
    { period: 'Abr/25', occupancy: 32.65, nights_sold: 319, nights_avail: 977, bookings: 168, guests: 379, adults: 345, children: 34 },
    { period: 'Mai/25', occupancy: 34.58, nights_sold: 343, nights_avail: 992, bookings: 228, guests: 509, adults: 465, children: 44 }
];

const OCCUPANCY_2026 = [
    { period: 'Jan/26', occupancy: 39.21, nights_sold: 389, nights_avail: 992, bookings: 194, guests: 467, adults: 420, children: 47 },
    { period: 'Fev/26', occupancy: 25.33, nights_sold: 227, nights_avail: 896, bookings: 142, guests: 333, adults: 293, children: 40 },
    { period: 'Mar/26', occupancy: 25.91, nights_sold: 242, nights_avail: 934, bookings: 153, guests: 357, adults: 317, children: 40 },
    { period: 'Abr/26', occupancy: 28.97, nights_sold: 261, nights_avail: 901, bookings: 157, guests: 360, adults: 327, children: 33 },
    { period: 'Mai/26', occupancy: 24.69, nights_sold: 239, nights_avail: 968, bookings: 174, guests: 404, adults: 362, children: 42 }
];

const FINANCIAL_MONTHLY_2026 = [
    { month: 'Jan', revenue: 137106.22, expense: 99918.54 },
    { month: 'Fev', revenue: 73170.09, expense: 110244.70 },
    { month: 'Mar', revenue: 81631.02, expense: 74172.20 },
    { month: 'Abr', revenue: 94897.71, expense: 64541.21 },
    { month: 'Mai', revenue: 105914.23, expense: 83799.58 }
];

const DRE_REVENUES = [
    { category: 'Hospedagem', value26: 412107.22, value25: 467477.59 },
    { category: 'Reserva', value26: 67833.21, value25: 88858.66 },
    { category: 'Consumos do Bar', value26: 12778.84, value25: 15868.15 }
];

const DRE_EXPENSES = [
    { category: 'Impostos e taxas', value26: 109512.73, value25: 72390.04 },
    { category: 'Salários', value26: 105412.47, value25: 93778.00 },
    { category: 'Alimentos', value26: 76020.48, value25: 88412.47 },
    { category: 'Comissão reservas', value26: 37847.02, value25: 48027.78 },
    { category: 'Manutenção', value26: 27107.48, value25: 40492.58 },
    { category: 'Produtos de limpeza', value26: 20986.14, value25: 15513.28 },
    { category: 'sabesp (Água)', value26: 20158.46, value25: 20657.83 },
    { category: 'Luz (Energia)', value26: 17283.29, value25: 17120.25 },
    { category: 'Obras', value26: 13400.00, value25: 95362.65 },
    { category: 'Internet', value26: 1724.80, value25: 2961.91 },
    { category: 'Telefone', value26: 426.70, value25: 390.00 },
    { category: 'Papelaria', value26: 128.00, value25: 126.00 },
    { category: 'Outros', value26: 2668.66, value25: 11365.87 }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================

let purchases = JSON.parse(localStorage.getItem('dashboard_purchases')) || INITIAL_PURCHASES;

// Chart references
let expensesChart = null;
let categoryChart = null;
let commMonthlyChart = null;
let commChannelChart = null;
let futureChannelChart = null;
let bkRevenueComparisonChart = null;
let bkNightsComparisonChart = null;
let bkProjectionsChart = null;
let finMonthlyChart = null;
let occMonthlyChart = null;
let finChannelChart = null;

// ==========================================
// 3. TAB CONTROLLER
// ==========================================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
        
        // Trigger specific tab loading logic
        if (targetTab === 'tab-laundry') {
            updateLaundryTab();
        } else if (targetTab === 'tab-commercial') {
            updateCommercialTab();
        } else if (targetTab === 'tab-future') {
            updateFutureTab();
        } else if (targetTab === 'tab-costs') {
            updateCostsTab();
        } else if (targetTab === 'tab-booking') {
            updateBookingTab();
        } else if (targetTab === 'tab-finance-occupancy') {
            updateFinanceOccupancyTab();
        }
    });
});

// ==========================================
// 4. GENERAL HELPERS
// ==========================================

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
}

// ==========================================
// 5. TAB 1: LAUNDRY LOGIC
// ==========================================

function updateLaundryTab() {
    updateLaundryKPIs();
    renderLaundryTable();
    renderLaundryCharts();
}

function updateLaundryKPIs() {
    if (purchases.length === 0) {
        document.getElementById('kpi-total-spent').innerText = formatCurrency(0);
        document.getElementById('kpi-monthly-avg').innerText = formatCurrency(0);
        document.getElementById('kpi-daily-cost').innerText = formatCurrency(0);
        document.getElementById('kpi-annual-proj').innerText = formatCurrency(0);
        return;
    }

    const totalSpent = purchases.reduce((sum, p) => sum + p.price, 0);
    
    // Calculate time span
    const dates = purchases.map(p => new Date(p.date)).sort((a, b) => a - b);
    const earliest = dates[0];
    const latest = dates[dates.length - 1];
    
    // Add 30 days buffer to the end of the last purchase to cover its consumption cycle
    const endDate = new Date(latest.getTime() + 30 * 24 * 60 * 60 * 1000);
    const diffTime = Math.abs(endDate - earliest);
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    
    const dailyCost = totalSpent / diffDays;
    const monthlyAvg = dailyCost * 30.41;
    const annualProj = dailyCost * 365;

    document.getElementById('kpi-total-spent').innerText = formatCurrency(totalSpent);
    document.getElementById('kpi-monthly-avg').innerText = formatCurrency(monthlyAvg);
    document.getElementById('kpi-daily-cost').innerText = formatCurrency(dailyCost);
    document.getElementById('kpi-annual-proj').innerText = formatCurrency(annualProj);

    window.currentMonthlyChemicalCost = monthlyAvg;
    
    updateOutsourceSimulator();
}

function renderLaundryTable() {
    const tableBody = document.getElementById('purchases-table-body');
    tableBody.innerHTML = '';
    
    const sorted = [...purchases].sort((a,b) => new Date(b.date) - new Date(a.date));
    
    sorted.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${formatDate(p.date)}</td>
            <td><div style="font-weight: 600;">${p.name}</div></td>
            <td><span class="product-tag ${getCategoryClass(p.category)}">${p.category}</span></td>
            <td class="price-col">${formatCurrency(p.price)}</td>
            <td style="text-align: right;">
                <button class="btn btn-secondary btn-sm" onclick="deletePurchase(${p.id})" title="Excluir">
                    <i class="lucide-trash-2" style="font-size: 14px; color: var(--color-red);"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

function deletePurchase(id) {
    if (confirm('Tem certeza de que deseja excluir esta compra?')) {
        purchases = purchases.filter(p => p.id !== id);
        localStorage.setItem('dashboard_purchases', JSON.stringify(purchases));
        updateLaundryTab();
    }
}
window.deletePurchase = deletePurchase;

function getCategoryClass(category) {
    switch (category) {
        case 'Amaciante': return 'product-tag-blue';
        case 'Neutralizante/Ácido': return 'product-tag-purple';
        case 'Detergente/Sabão': return 'product-tag-emerald';
        case 'Aditivo': return 'product-tag-cyan';
        default: return 'product-tag-blue';
    }
}

function renderLaundryCharts() {
    const ctxExpenses = document.getElementById('expensesChart').getContext('2d');
    const ctxCategory = document.getElementById('categoryChart').getContext('2d');

    const monthlyData = {};
    purchases.forEach(p => {
        const date = new Date(p.date);
        const monthYear = date.toLocaleString('pt-BR', { month: 'short', year: '2-digit' }).replace('.', '');
        const sortKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
        if (!monthlyData[sortKey]) {
            monthlyData[sortKey] = { label: monthYear, total: 0 };
        }
        monthlyData[sortKey].total += p.price;
    });

    const sortedMonthsKeys = Object.keys(monthlyData).sort();
    const chartLabels = sortedMonthsKeys.map(k => monthlyData[k].label);
    const chartValues = sortedMonthsKeys.map(k => monthlyData[k].total);

    if (expensesChart) expensesChart.destroy();
    
    expensesChart = new Chart(ctxExpenses, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Gastos Insumos (R$)',
                data: chartValues,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#fff',
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    const categories = {};
    purchases.forEach(p => {
        const cat = p.category || 'Outros';
        categories[cat] = (categories[cat] || 0) + p.price;
    });

    const catLabels = Object.keys(categories);
    const catValues = Object.values(categories);
    const catColors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

    if (categoryChart) categoryChart.destroy();

    categoryChart = new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: catLabels,
            datasets: [{
                data: catValues,
                backgroundColor: catColors.slice(0, catLabels.length),
                borderWidth: 1,
                borderColor: 'rgba(15, 23, 42, 0.8)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#94a3b8', font: { size: 11 } }
                }
            },
            cutout: '70%'
        }
    });
}

// Outsource Simulator Logic
const simType = document.getElementById('sim-type');
const simValueInput = document.getElementById('sim-value');
const simVolumeInput = document.getElementById('sim-volume');
const simUtilitySavingsInput = document.getElementById('sim-utility-savings');

function updateOutsourceSimulator() {
    const type = simType.value;
    const value = parseFloat(simValueInput.value) || 0;
    const volume = parseFloat(simVolumeInput.value) || 0;
    const utilitySavings = parseFloat(simUtilitySavingsInput.value) || 0;

    const chemicalCost = window.currentMonthlyChemicalCost || 0;
    const internalTotal = chemicalCost + utilitySavings;

    let outsourcedTotal = type === 'kg' ? value * volume : value;
    const netSavings = internalTotal - outsourcedTotal;

    document.getElementById('sim-result-internal').innerText = formatCurrency(internalTotal);
    document.getElementById('sim-result-external').innerText = formatCurrency(outsourcedTotal);
    
    const savingsEl = document.getElementById('sim-result-savings');
    const labelEl = document.getElementById('sim-savings-label');
    
    savingsEl.innerText = formatCurrency(Math.abs(netSavings));

    if (netSavings >= 0) {
        labelEl.innerText = "Economia Estimada:";
        savingsEl.className = "sim-result-value sim-result-total savings-positive";
    } else {
        labelEl.innerText = "Custo Adicional:";
        savingsEl.className = "sim-result-value sim-result-total savings-negative";
    }

    window.simulatedMonthlyOutsourceCost = outsourcedTotal;
    window.simulatedOutsourceActive = (netSavings >= 0 && outsourcedTotal > 0);

    const totalComp = internalTotal + outsourcedTotal;
    const barInternal = document.getElementById('bar-internal');
    const barExternal = document.getElementById('bar-external');
    if (totalComp > 0) {
        barInternal.style.width = `${(internalTotal / totalComp) * 100}%`;
        barExternal.style.width = `${(outsourcedTotal / totalComp) * 100}%`;
    } else {
        barInternal.style.width = `50%`;
        barExternal.style.width = `50%`;
    }
}

simType.addEventListener('change', () => {
    const valueLabel = document.getElementById('sim-value-label');
    const volumeGroup = document.getElementById('sim-volume-group');
    if (simType.value === 'kg') {
        valueLabel.innerText = "Preço por kg Terceirizado (R$)";
        volumeGroup.style.display = "flex";
        simValueInput.value = "7.50";
    } else {
        valueLabel.innerText = "Mensalidade Fixa Cobrada (R$)";
        volumeGroup.style.display = "none";
        simValueInput.value = "1500.00";
    }
    updateOutsourceSimulator();
    if (document.getElementById('tab-costs').classList.contains('active')) {
        updateCostsTab();
    }
});

[simValueInput, simVolumeInput, simUtilitySavingsInput].forEach(inp => {
    inp.addEventListener('input', () => {
        updateOutsourceSimulator();
        if (document.getElementById('tab-costs').classList.contains('active')) {
            updateCostsTab();
        }
    });
});

// ==========================================
// 6. TAB 2: COMMERCIAL PERFORMANCE
// ==========================================

function updateCommercialTab() {
    document.getElementById('kpi-comm-revenue').innerText = formatCurrency(COMMERCIAL_SUMMARY.totalRevenue);
    document.getElementById('kpi-comm-nights').innerText = COMMERCIAL_SUMMARY.totalNights;
    document.getElementById('kpi-comm-guests').innerText = COMMERCIAL_SUMMARY.totalGuests;
    document.getElementById('kpi-comm-adr').innerText = formatCurrency(COMMERCIAL_SUMMARY.adr);

    renderCommercialTable();
    renderCommercialCharts();
}

function renderCommercialTable() {
    const tbody = document.getElementById('channels-table-body');
    tbody.innerHTML = '';

    // Sort by 2026 revenue descending
    const sorted = [...CHANNELS_DATA].sort((a, b) => b.revenue26 - a.revenue26);

    sorted.forEach(c => {
        // Skip channels with zero in both years
        if (c.revenue26 === 0 && c.revenue25 === 0) return;

        const ticket26 = c.bookings26 > 0 ? c.revenue26 / c.bookings26 : 0;
        const ticket25 = c.bookings25 > 0 ? c.revenue25 / c.bookings25 : 0;
        
        const diff = c.revenue26 - c.revenue25;
        const pct = c.revenue25 > 0 ? (diff / c.revenue25) * 100 : 0.0;
        const pctText = c.revenue25 > 0 ? `${pct > 0 ? '+' : ''}${pct.toFixed(1)}%` : 'Novo';
        const pctClass = diff > 0 ? 'savings-positive' : (diff < 0 ? 'savings-negative' : '');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${c.channel}</strong></td>
            <td class="price-col" style="color: var(--color-blue);">${formatCurrency(c.revenue26)}</td>
            <td class="price-col" style="color: var(--text-secondary);">${formatCurrency(c.revenue25)}</td>
            <td style="font-weight:600;" class="${pctClass}">${pctText}</td>
            <td style="text-align:center;">${c.nights26}</td>
            <td style="text-align:center; color: var(--text-secondary);">${c.nights25}</td>
            <td class="price-col">${formatCurrency(ticket26)}</td>
            <td class="price-col" style="color: var(--text-secondary);">${formatCurrency(ticket25)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderCommercialCharts() {
    const ctxMonthly = document.getElementById('commMonthlyChart').getContext('2d');
    const ctxChannel = document.getElementById('commChannelChart').getContext('2d');

    if (commMonthlyChart) commMonthlyChart.destroy();

    const labels = MONTHLY_SALES.map(s => s.month);
    const data26 = MONTHLY_SALES.map(s => s.revenue26);
    const data25 = MONTHLY_SALES.map(s => s.revenue25);

    commMonthlyChart = new Chart(ctxMonthly, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Faturamento 2026',
                    data: data26,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: '#3b82f6',
                    borderWidth: 1.5,
                    borderRadius: 4
                },
                {
                    label: 'Faturamento 2025',
                    data: data25,
                    backgroundColor: 'rgba(148, 163, 184, 0.4)',
                    borderColor: '#94a3b8',
                    borderWidth: 1.5,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // Horizontal grouped bar chart for top channels compared to 2025
    const sortedChannels = [...CHANNELS_DATA]
        .filter(c => c.revenue26 > 0 || c.revenue25 > 0)
        .sort((a, b) => b.revenue26 - a.revenue26);
        
    const barLabels = sortedChannels.map(c => c.channel);
    const barData26 = sortedChannels.map(c => c.revenue26);
    const barData25 = sortedChannels.map(c => c.revenue25);

    if (commChannelChart) commChannelChart.destroy();

    commChannelChart = new Chart(ctxChannel, {
        type: 'bar',
        data: {
            labels: barLabels,
            datasets: [
                {
                    label: 'Faturamento 2026',
                    data: barData26,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: '#3b82f6',
                    borderWidth: 1.5,
                    borderRadius: 4
                },
                {
                    label: 'Faturamento 2025',
                    data: barData25,
                    backgroundColor: 'rgba(148, 163, 184, 0.4)',
                    borderColor: '#94a3b8',
                    borderWidth: 1.5,
                    borderRadius: 4
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                y: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            }
        }
    });
}

// ==========================================
// 7. TAB 3: FUTURE RESERVATIONS LOGIC (NEW)
// ==========================================

function updateFutureTab() {
    // Populate KPIs
    document.getElementById('kpi-future-revenue').innerText = formatCurrency(FUTURE_SUMMARY.totalRevenue);
    document.getElementById('kpi-future-bookings').innerText = FUTURE_SUMMARY.totalBookings;
    document.getElementById('kpi-future-nights').innerText = FUTURE_SUMMARY.totalNights;
    document.getElementById('kpi-future-adr').innerText = formatCurrency(FUTURE_SUMMARY.adr);

    renderFutureTable();
    renderFutureChannelsTable();
    renderFutureCharts();
}

function renderFutureChannelsTable() {
    const tbody = document.getElementById('future-channels-table-body');
    tbody.innerHTML = '';

    // Sort by revenue descending
    const sorted = [...FUTURE_CHANNELS].sort((a, b) => b.revenue - a.revenue);

    sorted.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${c.channel}</strong></td>
            <td class="price-col">${formatCurrency(c.revenue)}</td>
            <td>${c.count}</td>
            <td class="price-col">${formatCurrency(c.revenue / c.count)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderFutureTable() {
    const tbody = document.getElementById('future-table-body');
    tbody.innerHTML = '';

    FUTURE_BOOKINGS_LIST.forEach(b => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${b.checkin}</td>
            <td>${b.checkout}</td>
            <td><strong>${b.guestName}</strong></td>
            <td>${b.category}</td>
            <td>${b.nights}</td>
            <td><span class="product-tag product-tag-blue">${b.channel}</span></td>
            <td class="price-col">${formatCurrency(b.total)}</td>
            <td><span class="product-tag product-tag-amber">Reservado</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderFutureCharts() {
    const ctxFuture = document.getElementById('futureChannelChart').getContext('2d');

    const labels = FUTURE_CHANNELS.map(c => c.channel);
    const data = FUTURE_CHANNELS.map(c => c.revenue);

    if (futureChannelChart) futureChannelChart.destroy();

    futureChannelChart = new Chart(ctxFuture, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#06b6d4', '#f59e0b', '#6d28d9', '#64748b'],
                borderWidth: 1,
                borderColor: 'rgba(15, 23, 42, 0.8)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#94a3b8', boxWidth: 10, padding: 8, font: { size: 9 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const val = context.raw;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const pct = ((val / total) * 100).toFixed(1);
                            return ` ${context.label}: ${formatCurrency(val)} (${pct}%)`;
                        }
                    }
                }
            },
            cutout: '65%'
        }
    });
}

// ==========================================
// 8. TAB 4: UNIT COSTS & MARGIN CALCULATOR
// ==========================================

const inputBreakfast = document.getElementById('input-breakfast');
const inputCleaning = document.getElementById('input-cleaning');
const inputFixedCosts = document.getElementById('input-fixed-costs');
const inputCommission = document.getElementById('input-commission');

const valBreakfast = document.getElementById('val-breakfast');
const valCleaning = document.getElementById('val-cleaning');
const valCommission = document.getElementById('val-commission');

function updateCostsTab() {
    const breakfastDaily = parseFloat(inputBreakfast.value);
    const cleaningRoom = parseFloat(inputCleaning.value);
    const fixedCostsMonthly = parseFloat(inputFixedCosts.value);
    const commissionPct = parseFloat(inputCommission.value);

    valBreakfast.innerText = formatCurrency(breakfastDaily);
    valCleaning.innerText = formatCurrency(cleaningRoom);
    valCommission.innerText = `${commissionPct}%`;

    const totalGuests = COMMERCIAL_SUMMARY.totalGuests; 
    const totalNights = COMMERCIAL_SUMMARY.totalNights; 
    const totalBookings = COMMERCIAL_SUMMARY.totalBookings; 
    
    const guestsPerNight = totalGuests / totalNights; 
    const nightsPerBooking = totalNights / totalBookings; 
    const guestsPerBooking = totalGuests / totalBookings; 

    let laundryCostPerGuest = 4.49; 
    let laundryCostPerNight = 6.24;

    if (window.simulatedMonthlyOutsourceCost > 0) {
        const simulatedMonthlyCost = window.simulatedMonthlyOutsourceCost;
        const guestsPerMonth = totalGuests / COMMERCIAL_SUMMARY.monthsInPeriod;
        const nightsPerMonth = totalNights / COMMERCIAL_SUMMARY.monthsInPeriod;
        
        laundryCostPerGuest = simulatedMonthlyCost / guestsPerMonth;
        laundryCostPerNight = simulatedMonthlyCost / nightsPerMonth;
    }

    const breakfastCostPerGuest = breakfastDaily;
    const breakfastCostPerNight = breakfastDaily * guestsPerNight; 

    const cleaningCostPerNight = cleaningRoom;
    const cleaningCostPerGuest = cleaningRoom / guestsPerNight; 

    const roomNightsPerMonth = totalNights / COMMERCIAL_SUMMARY.monthsInPeriod;
    const guestsPerMonth = totalGuests / COMMERCIAL_SUMMARY.monthsInPeriod;
    
    const fixedCostPerGuest = fixedCostsMonthly / guestsPerMonth;
    const fixedCostPerNight = fixedCostsMonthly / roomNightsPerMonth;

    const totalOperatingCostPerGuest = laundryCostPerGuest + breakfastCostPerGuest + (cleaningRoom / guestsPerBooking) + fixedCostPerGuest;

    const commissionCostPerNight = COMMERCIAL_SUMMARY.adr * (commissionPct / 100);
    const operatingCostPerNight = laundryCostPerNight + breakfastCostPerNight + cleaningCostPerNight + fixedCostPerNight;
    const totalCostPerNight = commissionCostPerNight + operatingCostPerNight;

    const netProfitPerNight = COMMERCIAL_SUMMARY.adr - totalCostPerNight;
    const profitMarginPct = Math.max(0, (netProfitPerNight / COMMERCIAL_SUMMARY.adr) * 100);

    document.getElementById('kpi-cost-breakfast').innerText = formatCurrency(breakfastCostPerGuest);
    document.getElementById('kpi-cost-fixed').innerText = formatCurrency(fixedCostPerGuest);
    document.getElementById('kpi-cost-total-guest').innerText = formatCurrency(totalOperatingCostPerGuest);

    document.getElementById('profit-adr').innerText = formatCurrency(COMMERCIAL_SUMMARY.adr);
    document.getElementById('profit-commission').innerText = `-${formatCurrency(commissionCostPerNight)}`;
    document.getElementById('profit-operating-cost').innerText = `-${formatCurrency(operatingCostPerNight)}`;
    
    const netValEl = document.getElementById('profit-net-value');
    netValEl.innerText = formatCurrency(netProfitPerNight);
    
    if (netProfitPerNight >= 0) {
        netValEl.className = "profit-val-highlight savings-positive";
    } else {
        netValEl.className = "profit-val-highlight savings-negative";
    }

    document.getElementById('gauge-margin-pct').innerText = `${Math.round(profitMarginPct)}%`;
    
    const circle = document.getElementById('gauge-fill-circle');
    const offset = 440 - (440 * profitMarginPct) / 100;
    circle.style.strokeDashoffset = offset;
}

if (inputBreakfast) {
    [inputBreakfast, inputCleaning, inputFixedCosts, inputCommission].forEach(ctrl => {
        ctrl.addEventListener('input', updateCostsTab);
    });
}

// ==========================================
// 8b. TAB 5: BOOKING & COMPETITION LOGIC (NEW)
// ==========================================

function updateBookingTab() {
    renderBookingCompetitorsTable();
    renderBookingRoomsTable();
    renderBookingCharts();
}

function renderBookingCompetitorsTable() {
    const tbody = document.getElementById('bk-competitors-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    BK_COMPETITORS_DATA.forEach(c => {
        const tr = document.createElement('tr');
        if (c.isSelf) {
            tr.style.background = 'rgba(59, 130, 246, 0.12)';
            tr.style.borderLeft = '4px solid var(--color-blue)';
        }
        
        const geniusBadge = c.genius ? `<span class="product-tag product-tag-blue">Genius</span>` : '-';
        const preferredBadge = c.preferred ? `<span class="product-tag product-tag-amber"><i class="lucide-thumbs-up" style="width: 12px; height: 12px; margin-right: 2px; display: inline-block; vertical-align: middle;"></i>Preferencial</span>` : '-';

        tr.innerHTML = `
            <td style="text-align: center; font-weight: 700;">${c.rank}º</td>
            <td><strong style="${c.isSelf ? 'color: var(--color-blue);' : ''}">${c.name}</strong></td>
            <td style="text-align: center; font-weight: 600;" class="${c.score >= 8.5 ? 'savings-positive' : ''}">${c.score.toFixed(1)}</td>
            <td style="text-align: center;">${geniusBadge}</td>
            <td style="text-align: center;">${preferredBadge}</td>
        `;
        tbody.appendChild(tr);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderBookingRoomsTable() {
    const tbody = document.getElementById('bk-rooms-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let totalNights = 0;
    let totalRevenue = 0;

    BK_ROOM_BREAKDOWN.forEach(r => {
        totalNights += r.nights;
        totalRevenue += r.revenue;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${r.room}</strong></td>
            <td style="text-align: center;">${r.nights}</td>
            <td class="price-col" style="text-align: right;">${formatCurrency(r.revenue)}</td>
            <td class="price-col" style="text-align: right;">${formatCurrency(r.adr)}</td>
        `;
        tbody.appendChild(tr);
    });

    // Add total row
    const trTotal = document.createElement('tr');
    trTotal.style.borderTop = '2px solid var(--border-color)';
    trTotal.style.fontWeight = '700';
    trTotal.innerHTML = `
        <td>Total Geral</td>
        <td style="text-align: center;">${totalNights}</td>
        <td class="price-col" style="text-align: right; color: var(--color-cyan);">${formatCurrency(totalRevenue)}</td>
        <td class="price-col" style="text-align: right;">${formatCurrency(totalRevenue / totalNights)}</td>
    `;
    tbody.appendChild(trTotal);
}

function renderBookingCharts() {
    const ctxRevenueComparison = document.getElementById('bkRevenueComparisonChart');
    const ctxNightsComparison = document.getElementById('bkNightsComparisonChart');
    const ctxProjections = document.getElementById('bkProjectionsChart');

    if (!ctxRevenueComparison || !ctxNightsComparison || !ctxProjections) return;

    const labelsStays = BK_STAYS_VS_RESERVATIONS.map(item => item.month.split('/')[0]); // "Jan", "Fev" etc
    
    // Chart 1: Revenue Comparison (2026 vs 2025)
    const dataRevenue2026 = BK_STAYS_VS_RESERVATIONS.map(item => item.staysRevenue);
    const dataRevenue2025 = BK_STAYS_VS_RESERVATIONS.map(item => item.staysRevenuePrev);

    if (bkRevenueComparisonChart) bkRevenueComparisonChart.destroy();

    bkRevenueComparisonChart = new Chart(ctxRevenueComparison.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labelsStays,
            datasets: [
                {
                    label: 'Faturamento 2026',
                    data: dataRevenue2026,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: '#3b82f6',
                    borderWidth: 1.5,
                    borderRadius: 4
                },
                {
                    label: 'Faturamento 2025 (Ano Anterior)',
                    data: dataRevenue2025,
                    backgroundColor: 'rgba(148, 163, 184, 0.4)',
                    borderColor: '#94a3b8',
                    borderWidth: 1.5,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // Chart 2: Nights Comparison (2026 vs 2025)
    const dataNights2026 = BK_STAYS_VS_RESERVATIONS.map(item => item.staysNights);
    const dataNights2025 = BK_STAYS_VS_RESERVATIONS.map(item => item.staysNightsPrev);

    if (bkNightsComparisonChart) bkNightsComparisonChart.destroy();

    bkNightsComparisonChart = new Chart(ctxNightsComparison.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labelsStays,
            datasets: [
                {
                    label: 'Diárias Ocupadas 2026',
                    data: dataNights2026,
                    backgroundColor: 'rgba(139, 92, 246, 0.8)',
                    borderColor: '#8b5cf6',
                    borderWidth: 1.5,
                    borderRadius: 4
                },
                {
                    label: 'Diárias Ocupadas 2025',
                    data: dataNights2025,
                    backgroundColor: 'rgba(148, 163, 184, 0.4)',
                    borderColor: '#94a3b8',
                    borderWidth: 1.5,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // Chart 3: Future Projections (Line / Area chart)
    const labelsProj = BK_MONTHLY_PROJECTIONS.map(item => item.month);
    const dataProjRevenue = BK_MONTHLY_PROJECTIONS.map(item => item.revenue);

    if (bkProjectionsChart) bkProjectionsChart.destroy();

    bkProjectionsChart = new Chart(ctxProjections.getContext('2d'), {
        type: 'line',
        data: {
            labels: labelsProj,
            datasets: [{
                label: 'Faturamento Projetado (R$)',
                data: dataProjRevenue,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.35,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#fff',
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });
}

// ==========================================
// 8c. TAB 6: FINANCE & OCCUPANCY LOGIC (NEW)
// ==========================================

function updateFinanceOccupancyTab() {
    renderDreTable();
    renderOccupancyTable();
    renderFinChannelsTable();
    renderFinanceCharts();
}

function renderFinChannelsTable() {
    const tbody = document.getElementById('fin-channels-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Sort by 2026 revenue descending
    const sorted = [...CHANNELS_DATA]
        .filter(c => c.revenue26 > 0)
        .sort((a, b) => b.revenue26 - a.revenue26);

    sorted.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${c.channel}</strong></td>
            <td class="price-col">${formatCurrency(c.revenue26)}</td>
            <td>${c.bookings26}</td>
            <td class="price-col">${formatCurrency(c.revenue26 / c.bookings26)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderDreTable() {
    const tbody = document.getElementById('dre-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Add Section Header for Revenues
    const trHeaderRev = document.createElement('tr');
    trHeaderRev.style.background = 'rgba(255, 255, 255, 0.03)';
    trHeaderRev.style.fontWeight = '700';
    trHeaderRev.innerHTML = `
        <td style="color: var(--color-blue);">RECEITAS OPERACIONAIS (ENTRADAS)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    tbody.appendChild(trHeaderRev);

    let totalRev26 = 0;
    let totalRev25 = 0;

    DRE_REVENUES.forEach(r => {
        totalRev26 += r.value26;
        totalRev25 += r.value25;

        const diff = r.value26 - r.value25;
        const pct = r.value25 > 0 ? (diff / r.value25) * 100 : 0.0;
        const pctText = r.value25 > 0 ? `${pct > 0 ? '+' : ''}${pct.toFixed(1)}%` : 'Novo';
        const pctClass = diff > 0 ? 'savings-positive' : (diff < 0 ? 'savings-negative' : '');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding-left: 20px;">${r.category}</td>
            <td class="price-col" style="text-align: right;">${formatCurrency(r.value26)}</td>
            <td class="price-col" style="text-align: right; color: var(--text-secondary);">${formatCurrency(r.value25)}</td>
            <td class="price-col ${pctClass}" style="text-align: right;">${formatCurrency(diff)}</td>
            <td style="text-align: center; font-weight: 600;" class="${pctClass}">${pctText}</td>
        `;
        tbody.appendChild(tr);
    });

    // Total Revenues Row
    const trTotalRev = document.createElement('tr');
    trTotalRev.style.fontWeight = '700';
    trTotalRev.style.borderBottom = '2px solid var(--border-color)';
    const revDiff = totalRev26 - totalRev25;
    const revPct = totalRev25 > 0 ? (revDiff / totalRev25) * 100 : 0.0;
    const revPctClass = revDiff > 0 ? 'savings-positive' : (revDiff < 0 ? 'savings-negative' : '');
    trTotalRev.innerHTML = `
        <td style="color: var(--color-blue);">(=) FATURAMENTO OPERACIONAL BRUTO</td>
        <td class="price-col" style="text-align: right; color: var(--color-blue);">${formatCurrency(totalRev26)}</td>
        <td class="price-col" style="text-align: right; color: var(--text-secondary);">${formatCurrency(totalRev25)}</td>
        <td class="price-col ${revPctClass}" style="text-align: right;">${formatCurrency(revDiff)}</td>
        <td style="text-align: center; font-weight: 700;" class="${revPctClass}">${revPct > 0 ? '+' : ''}${revPct.toFixed(1)}%</td>
    `;
    tbody.appendChild(trTotalRev);

    // Spacer
    const trSpacer = document.createElement('tr');
    trSpacer.innerHTML = `<td colspan="5" style="height: 10px;"></td>`;
    tbody.appendChild(trSpacer);

    // Add Section Header for Expenses
    const trHeaderExp = document.createElement('tr');
    trHeaderExp.style.background = 'rgba(255, 255, 255, 0.03)';
    trHeaderExp.style.fontWeight = '700';
    trHeaderExp.innerHTML = `
        <td style="color: var(--color-purple);">DESPESAS OPERACIONAIS (SAÍDAS)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    tbody.appendChild(trHeaderExp);

    let totalExp26 = 0;
    let totalExp25 = 0;

    DRE_EXPENSES.forEach(e => {
        totalExp26 += e.value26;
        totalExp25 += e.value25;

        const diff = e.value26 - e.value25;
        const pct = e.value25 > 0 ? (diff / e.value25) * 100 : 0.0;
        const pctText = e.value25 > 0 ? `${pct > 0 ? '+' : ''}${pct.toFixed(1)}%` : 'Novo';
        const pctClass = diff < 0 ? 'savings-positive' : (diff > 0 ? 'savings-negative' : '');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding-left: 20px;">${e.category}</td>
            <td class="price-col" style="text-align: right;">${formatCurrency(e.value26)}</td>
            <td class="price-col" style="text-align: right; color: var(--text-secondary);">${formatCurrency(e.value25)}</td>
            <td class="price-col ${pctClass}" style="text-align: right;">${formatCurrency(diff)}</td>
            <td style="text-align: center; font-weight: 600;" class="${pctClass}">${pctText}</td>
        `;
        tbody.appendChild(tr);
    });

    // Total Expenses Row
    const trTotalExp = document.createElement('tr');
    trTotalExp.style.fontWeight = '700';
    trTotalExp.style.borderBottom = '2px solid var(--border-color)';
    const expDiff = totalExp26 - totalExp25;
    const expPct = totalExp25 > 0 ? (expDiff / totalExp25) * 100 : 0.0;
    const expPctClass = expDiff < 0 ? 'savings-positive' : (expDiff > 0 ? 'savings-negative' : '');
    trTotalExp.innerHTML = `
        <td style="color: var(--color-purple);">(=) TOTAL DE DESPESAS OPERACIONAIS</td>
        <td class="price-col" style="text-align: right; color: var(--color-purple);">${formatCurrency(totalExp26)}</td>
        <td class="price-col" style="text-align: right; color: var(--text-secondary);">${formatCurrency(totalExp25)}</td>
        <td class="price-col ${expPctClass}" style="text-align: right;">${formatCurrency(expDiff)}</td>
        <td style="text-align: center; font-weight: 700;" class="${expPctClass}">${expPct > 0 ? '+' : ''}${expPct.toFixed(1)}%</td>
    `;
    tbody.appendChild(trTotalExp);

    // Spacer
    tbody.appendChild(trSpacer.cloneNode(true));

    // Lucro Liquido Row
    const profit26 = totalRev26 - totalExp26;
    const profit25 = totalRev25 - totalExp25;
    const profitDiff = profit26 - profit25;
    const profitPct = profit25 > 0 ? (profitDiff / profit25) * 100 : 0.0;
    const profitClass = profitDiff > 0 ? 'savings-positive' : (profitDiff < 0 ? 'savings-negative' : '');

    const trNetProfit = document.createElement('tr');
    trNetProfit.style.fontWeight = '800';
    trNetProfit.style.background = 'rgba(16, 185, 129, 0.08)';
    trNetProfit.style.borderTop = '2px solid var(--color-green)';
    trNetProfit.style.borderBottom = '2px solid var(--color-green)';
    trNetProfit.innerHTML = `
        <td style="color: var(--color-green); font-size: 0.95rem;">(=) RESULTADO OPERACIONAL LÍQUIDO (LUCRO)</td>
        <td class="price-col" style="text-align: right; color: var(--color-green); font-size: 0.95rem;">${formatCurrency(profit26)}</td>
        <td class="price-col" style="text-align: right; color: var(--text-secondary); font-size: 0.95rem;">${formatCurrency(profit25)}</td>
        <td class="price-col ${profitClass}" style="text-align: right; font-size: 0.95rem;">${formatCurrency(profitDiff)}</td>
        <td style="text-align: center; font-size: 0.95rem;" class="${profitClass}">${profitPct > 0 ? '+' : ''}${profitPct.toFixed(1)}%</td>
    `;
    tbody.appendChild(trNetProfit);
}

function renderOccupancyTable() {
    const tbody = document.getElementById('occ-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    let totalSold26 = 0;
    let totalAvail26 = 0;
    let totalSold25 = 0;
    let totalAvail25 = 0;

    for (let i = 0; i < OCCUPANCY_2026.length; i++) {
        const o26 = OCCUPANCY_2026[i];
        const o25 = OCCUPANCY_2025[i];

        totalSold26 += o26.nights_sold;
        totalAvail26 += o26.nights_avail;
        totalSold25 += o25.nights_sold;
        totalAvail25 += o25.nights_avail;

        const diffNights = o26.nights_sold - o25.nights_sold;
        const diffClass = diffNights > 0 ? 'savings-positive' : (diffNights < 0 ? 'savings-negative' : '');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${o26.period.split('/')[0]} (Jan-Mai)</strong></td>
            <td style="text-align: center; font-weight: 600; color: var(--color-green);">${o26.occupancy.toFixed(2)}%</td>
            <td style="text-align: center;">${o26.nights_sold}</td>
            <td style="text-align: center; color: var(--text-muted);">${o26.nights_avail}</td>
            <td style="text-align: center; font-weight: 500; color: var(--text-secondary);">${o25.occupancy.toFixed(2)}%</td>
            <td style="text-align: center; color: var(--text-secondary);">${o25.nights_sold}</td>
            <td style="text-align: center; color: var(--text-muted);">${o25.nights_avail}</td>
            <td style="text-align: center; font-weight: 600;" class="${diffClass}">${diffNights > 0 ? '+' : ''}${diffNights}</td>
        `;
        tbody.appendChild(tr);
    }

    // Add totals row
    const avgOcc26 = (totalSold26 / totalAvail26) * 100;
    const avgOcc25 = (totalSold25 / totalAvail25) * 100;
    const diffTotalNights = totalSold26 - totalSold25;
    const diffTotalClass = diffTotalNights > 0 ? 'savings-positive' : (diffTotalNights < 0 ? 'savings-negative' : '');

    const trTotal = document.createElement('tr');
    trTotal.style.fontWeight = '700';
    trTotal.style.borderTop = '2px solid var(--border-color)';
    trTotal.style.background = 'rgba(255,255,255,0.02)';
    trTotal.innerHTML = `
        <td>Total Geral Acumulado</td>
        <td style="text-align: center; color: var(--color-green);">${avgOcc26.toFixed(2)}%</td>
        <td style="text-align: center; color: var(--color-cyan);">${totalSold26}</td>
        <td style="text-align: center; color: var(--text-muted);">${totalAvail26}</td>
        <td style="text-align: center; color: var(--text-secondary);">${avgOcc25.toFixed(2)}%</td>
        <td style="text-align: center; color: var(--text-secondary);">${totalSold25}</td>
        <td style="text-align: center; color: var(--text-muted);">${totalAvail25}</td>
        <td style="text-align: center; color: var(--color-cyan);" class="${diffTotalClass}">${diffTotalNights > 0 ? '+' : ''}${diffTotalNights}</td>
    `;
    tbody.appendChild(trTotal);
}

function renderFinanceCharts() {
    const ctxFin = document.getElementById('finMonthlyChart');
    const ctxOcc = document.getElementById('occMonthlyChart');

    if (!ctxFin || !ctxOcc) return;

    const labels = FINANCIAL_MONTHLY_2026.map(item => item.month);
    const revs = FINANCIAL_MONTHLY_2026.map(item => item.revenue);
    const exps = FINANCIAL_MONTHLY_2026.map(item => item.expense);

    if (finMonthlyChart) finMonthlyChart.destroy();

    finMonthlyChart = new Chart(ctxFin.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Receitas Realizadas',
                    data: revs,
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderColor: '#10b981',
                    borderWidth: 1.5,
                    borderRadius: 4
                },
                {
                    label: 'Despesas Realizadas',
                    data: exps,
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: '#ef4444',
                    borderWidth: 1.5,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    const labelsOcc = OCCUPANCY_2026.map(item => item.period.split('/')[0]);
    const dataOcc26 = OCCUPANCY_2026.map(item => item.occupancy);
    const dataOcc25 = OCCUPANCY_2025.map(item => item.occupancy);

    if (occMonthlyChart) occMonthlyChart.destroy();

    occMonthlyChart = new Chart(ctxOcc.getContext('2d'), {
        type: 'line',
        data: {
            labels: labelsOcc,
            datasets: [
                {
                    label: 'Ocupação 2026 (%)',
                    data: dataOcc26,
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#06b6d4',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 6
                },
                {
                    label: 'Ocupação 2025 (%)',
                    data: dataOcc25,
                    borderColor: '#94a3b8',
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#94a3b8',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#94a3b8', boxWidth: 15, font: { size: 11 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${context.raw.toFixed(2)}%`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { 
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }, 
                    ticks: { color: '#94a3b8', callback: function(value) { return value + '%'; } } 
                }
            }
        }
    });

    // Doughnut chart for historical channels
    const ctxFinChannel = document.getElementById('finChannelChart');
    if (ctxFinChannel) {
        const sortedChannels = [...CHANNELS_DATA]
            .filter(c => c.revenue26 > 0)
            .sort((a, b) => b.revenue26 - a.revenue26);

        const labels = sortedChannels.map(c => c.channel);
        const data = sortedChannels.map(c => c.revenue26);

        if (finChannelChart) finChannelChart.destroy();

        finChannelChart = new Chart(ctxFinChannel.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#06b6d4', '#f59e0b', '#6d28d9', '#64748b', '#475569', '#334155'],
                    borderWidth: 1,
                    borderColor: 'rgba(15, 23, 42, 0.8)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#94a3b8', boxWidth: 10, padding: 8, font: { size: 9 } }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const val = context.raw;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const pct = ((val / total) * 100).toFixed(1);
                                return ` ${context.label}: ${formatCurrency(val)} (${pct}%)`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }
}

// ==========================================
// 9. ADD PURCHASE MODAL LOGIC
// ==========================================

const modalOverlay = document.getElementById('modal-overlay');
const addPurchaseBtn = document.getElementById('btn-add-purchase');
const closeModalBtn = document.getElementById('btn-close-modal');
const cancelModalBtn = document.getElementById('btn-cancel-modal');
const purchaseForm = document.getElementById('purchase-form');

if (addPurchaseBtn) {
    addPurchaseBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        document.getElementById('p-date').value = new Date().toISOString().split('T')[0];
    });
}

const closeModal = () => {
    modalOverlay.classList.remove('active');
    purchaseForm.reset();
};

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

if (purchaseForm) {
    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('p-name').value;
        const price = parseFloat(document.getElementById('p-price').value);
        const date = document.getElementById('p-date').value;
        const category = document.getElementById('p-category').value;

        if (!name || isNaN(price) || !date || !category) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const newPurchase = {
            id: Date.now(),
            name,
            price,
            date,
            category
        };

        purchases.push(newPurchase);
        localStorage.setItem('dashboard_purchases', JSON.stringify(purchases));
        
        closeModal();
        updateLaundryTab();
    });
}

window.resetDatabase = function() {
    if (confirm('Deseja redefinir os dados para o estado inicial padrão?')) {
        purchases = [...INITIAL_PURCHASES];
        localStorage.setItem('dashboard_purchases', JSON.stringify(purchases));
        updateLaundryTab();
        if (document.getElementById('tab-costs').classList.contains('active')) {
            updateCostsTab();
        }
    }
};

// ==========================================
// 10. INITIALIZATION
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    updateLaundryTab();
    simType.dispatchEvent(new Event('change'));
});
