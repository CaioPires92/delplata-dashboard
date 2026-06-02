import csv
from datetime import datetime

csv_path = r"c:\Users\caiog\Desktop\Delplata-dashboard\vendas_1779825297906.csv"

def parse_date(date_str):
    try:
        parts = date_str.split()
        d_parts = parts[0].split('/')
        return datetime(int(d_parts[2]), int(d_parts[1]), int(d_parts[0]))
    except:
        return None

def parse_float(val_str):
    if not val_str:
        return 0.0
    val_str = val_str.strip()
    if ',' in val_str:
        val_str = val_str.replace('.', '').replace(',', '.')
    try:
        return float(val_str)
    except:
        return 0.0

total_past_revenue = 0.0
total_past_total = 0.0
total_past_diarias = 0.0
total_past_nights = 0
total_past_bookings = 0
total_past_guests = 0
total_past_products = 0.0
total_past_services = 0.0

cutoff_date = datetime(2026, 5, 26)

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        sit = row['Situação'].strip().lower()
        if sit not in ['finalizado', 'reservado']:
            continue
        
        checkin_dt = parse_date(row['Check-in'])
        if not checkin_dt:
            continue
            
        if checkin_dt <= cutoff_date:
            total_past_bookings += 1
            total_past_nights += int(row['Diárias'])
            total_past_diarias += parse_float(row['Total das diárias'])
            total_past_products += parse_float(row['Produtos'])
            total_past_services += parse_float(row['Serviços'])
            total_past_total += parse_float(row['Total'])
            adults = int(row['Nº adultos']) if row['Nº adultos'] else 0
            children = int(row['Nº crianças']) if row['Nº crianças'] else 0
            total_past_guests += adults + children

print("--- PAST SUMMARIES ---")
print(f"Total bookings: {total_past_bookings}")
print(f"Total nights: {total_past_nights}")
print(f"Sum of 'Total das diárias': R$ {total_past_diarias:.2f}")
print(f"Sum of 'Total' column: R$ {total_past_total:.2f}")
print(f"Sum of 'Produtos': R$ {total_past_products:.2f}")
print(f"Sum of 'Serviços': R$ {total_past_services:.2f}")
print(f"Sum of 'Total das diárias' + 'Produtos' + 'Serviços': R$ {total_past_diarias + total_past_products + total_past_services:.2f}")
print(f"Total guests: {total_past_guests}")
