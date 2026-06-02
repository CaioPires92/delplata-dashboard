import csv
from datetime import datetime

csv_path = r"c:\Users\caiog\Desktop\Delplata-dashboard\vendas_1779825297906.csv"

past_bookings = []
future_bookings = []

# Date of division: May 26, 2026
cutoff_date = datetime(2026, 5, 26)

def parse_date(date_str):
    try:
        parts = date_str.split()
        d_parts = parts[0].split('/')
        return datetime(int(d_parts[2]), int(d_parts[1]), int(d_parts[0]))
    except Exception as e:
        return None

def parse_float(val_str):
    if not val_str:
        return 0.0
    val_str = val_str.strip()
    if ',' in val_str:
        # Brazilian format (e.g. "1.234,56" or "404,19")
        val_str = val_str.replace('.', '').replace(',', '.')
    try:
        return float(val_str)
    except:
        return 0.0

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        sit = row['Situação'].strip().lower()
        if sit not in ['finalizado', 'reservado']:
            continue
        
        checkin_dt = parse_date(row['Check-in'])
        if not checkin_dt:
            continue
            
        nights = int(row['Diárias'])
        total_diarias = parse_float(row['Total das diárias'])
        total = parse_float(row['Total'])
        adr = parse_float(row['Diária Média'])
        products = parse_float(row['Produtos'])
        services = parse_float(row['Serviços'])
        channel = row['Canal de venda'].strip()
        category = row['Categoria'].strip()
        adults = int(row['Nº adultos']) if row['Nº adultos'] else 0
        children = int(row['Nº crianças']) if row['Nº crianças'] else 0
        
        booking_data = {
            'no': row['Nº'],
            'guest': row['Hóspede'],
            'checkin': checkin_dt,
            'nights': nights,
            'channel': channel,
            'category': category,
            'total_diarias': total_diarias,
            'total': total,
            'adr': adr,
            'products': products,
            'services': services,
            'adults': adults,
            'children': children,
            'situation': sit
        }
        
        # If check-in is before or on cutoff date AND situation is finished or reserved
        if checkin_dt <= cutoff_date:
            past_bookings.append(booking_data)
        else:
            future_bookings.append(booking_data)

print(f"Total past bookings (stay <= May 26): {len(past_bookings)}")
print(f"Total future bookings (stay > May 26): {len(future_bookings)}")

# Past metrics
past_revenue = sum(b['total_diarias'] for b in past_bookings)
past_nights = sum(b['nights'] for b in past_bookings)
past_guests = sum(b['adults'] + b['children'] for b in past_bookings)
past_adults = sum(b['adults'] for b in past_bookings)
past_children = sum(b['children'] for b in past_bookings)
past_products = sum(b['products'] for b in past_bookings)
past_services = sum(b['services'] for b in past_bookings)
past_adr = past_revenue / past_nights if past_nights > 0 else 0

print("\n--- PAST SUMMARY (01/01/2026 - 26/05/2026) ---")
print(f"Revenue: R$ {past_revenue:.2f}")
print(f"Nights: {past_nights}")
print(f"Bookings count: {len(past_bookings)}")
print(f"Guests: {past_guests} (Adults: {past_adults}, Children: {past_children})")
print(f"ADR: R$ {past_adr:.2f}")
print(f"Products: R$ {past_products:.2f}")
print(f"Services: R$ {past_services:.2f}")

# Future metrics
future_revenue = sum(b['total_diarias'] for b in future_bookings)
future_nights = sum(b['nights'] for b in future_bookings)
future_guests = sum(b['adults'] + b['children'] for b in future_bookings)
future_bookings_count = len(future_bookings)
future_adr = future_revenue / future_nights if future_nights > 0 else 0

print("\n--- FUTURE SUMMARY (after 26/05/2026) ---")
print(f"Revenue: R$ {future_revenue:.2f}")
print(f"Nights: {future_nights}")
print(f"Bookings count: {future_bookings_count}")
print(f"Guests: {future_guests}")
print(f"ADR: R$ {future_adr:.2f}")

# Past Channels breakdown
print("\n--- PAST CHANNELS BREAKDOWN ---")
channels = {}
for b in past_bookings:
    ch = b['channel'] if b['channel'] else "Não Especificado"
    if ch not in channels:
        channels[ch] = {'revenue': 0.0, 'nights': 0, 'bookings': 0, 'guests': 0}
    channels[ch]['revenue'] += b['total_diarias']
    channels[ch]['nights'] += b['nights']
    channels[ch]['bookings'] += 1
    channels[ch]['guests'] += b['adults'] + b['children']

total_past_revenue = sum(c['revenue'] for c in channels.values())
for ch, metrics in sorted(channels.items(), key=lambda x: x[1]['revenue'], reverse=True):
    share = (metrics['revenue'] / total_past_revenue) * 100 if total_past_revenue > 0 else 0
    print(f"Channel: {ch}")
    print(f"  Revenue: R$ {metrics['revenue']:.2f} ({share:.1f}%)")
    print(f"  Bookings: {metrics['bookings']}")
    print(f"  Nights: {metrics['nights']}")
    print(f"  Guests: {metrics['guests']}")
    print(f"  Ticket Médio: R$ {metrics['revenue']/metrics['bookings']:.2f}")

# Future Channels breakdown
print("\n--- FUTURE CHANNELS BREAKDOWN ---")
fut_channels = {}
for b in future_bookings:
    ch = b['channel'] if b['channel'] else "Não Especificado"
    if ch not in fut_channels:
        fut_channels[ch] = {'revenue': 0.0, 'count': 0}
    fut_channels[ch]['revenue'] += b['total_diarias']
    fut_channels[ch]['count'] += 1

total_fut_revenue = sum(c['revenue'] for c in fut_channels.values())
for ch, metrics in sorted(fut_channels.items(), key=lambda x: x[1]['revenue'], reverse=True):
    share = (metrics['revenue'] / total_fut_revenue) * 100 if total_fut_revenue > 0 else 0
    print(f"Channel: {ch}")
    print(f"  Revenue: R$ {metrics['revenue']:.2f} ({share:.1f}%)")
    print(f"  Bookings: {metrics['count']}")
