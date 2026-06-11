document.addEventListener('DOMContentLoaded', () => {
    // Global Chart.js defaults for a clean, premium look
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#6b7280';
    Chart.defaults.scale.grid.color = '#f3f4f6';
    Chart.defaults.scale.grid.borderColor = 'transparent';
    Chart.defaults.plugins.tooltip.backgroundColor = '#111827';
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.titleFont = { size: 13, weight: '600' };
    Chart.defaults.plugins.tooltip.bodyFont = { size: 13 };

    const labels = ['2023', '2024', '2025', '2026'];

    // 1. Evolução das Reservas
    new Chart(document.getElementById('reservationsChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Reservas',
                data: [618, 881, 1069, 1009],
                borderColor: '#2563eb', // blue
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#2563eb',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [4, 4] } }
            }
        }
    });

    // 2. Evolução das Vendas
    new Chart(document.getElementById('salesChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vendas Totais (R$)',
                data: [302611, 445833, 652071, 685112],
                borderColor: '#10b981', // green
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#10b981',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4] },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });

    // 3. Evolução do Ticket Médio
    new Chart(document.getElementById('adrChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Ticket Médio (R$)',
                data: [489, 506, 610, 679],
                borderColor: '#8b5cf6', // purple
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#8b5cf6',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4] },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value;
                        }
                    }
                }
            }
        }
    });

    // 4. Receita x Despesa
    new Chart(document.getElementById('dreChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Receita',
                    data: [310333, 368968, 600626, 599314],
                    backgroundColor: '#2563eb', // blue
                    borderRadius: 4
                },
                {
                    label: 'Despesa',
                    data: [249314, 309076, 543289, 493602],
                    backgroundColor: '#ef4444', // red
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
                    labels: { usePointStyle: true, boxWidth: 8 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4] },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });

    // 5. Resultado Financeiro
    new Chart(document.getElementById('resultChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Resultado (Lucro)',
                data: [61020, 59892, 47336, 80712],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.5)',
                    'rgba(16, 185, 129, 0.5)',
                    'rgba(16, 185, 129, 0.5)',
                    '#10b981' // 2026 solid highlight
                ],
                borderColor: '#10b981',
                borderWidth: 2,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.raw);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4] },
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });

    // 6. Evolução de Canais de Venda (Stacked Bar)
    new Chart(document.getElementById('channelsChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Booking.com',
                    data: [243, 385, 568, 520],
                    backgroundColor: '#003580', // Booking blue
                    borderRadius: 4
                },
                {
                    label: 'WhatsApp',
                    data: [222, 233, 295, 146],
                    backgroundColor: '#25D366', // WhatsApp green
                    borderRadius: 4
                },
                {
                    label: 'Balcão / Telefone',
                    data: [81, 71, 77, 57],
                    backgroundColor: '#f59e0b', // amber
                    borderRadius: 4
                },
                {
                    label: 'Site / Expedia / Outros',
                    data: [0, 6, 9, 86],
                    backgroundColor: '#8b5cf6', // purple
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
                    labels: { usePointStyle: true, boxWidth: 8 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + ' reservas';
                        }
                    }
                }
            },
            scales: {
                x: { stacked: true },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: { borderDash: [4, 4] }
                }
            }
        }
    });
});
