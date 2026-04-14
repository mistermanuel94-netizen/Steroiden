"""
Add EUR pricing and Minimum Order Quantity (MOQ ≥ €100) to all products in top200products.md
GBP to EUR rate: 1.18
"""
import re
import math

filepath = r'c:\Users\CTech Electronics\Desktop\Steroid\Steroiden\top200products.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

RATE = 1.18  # GBP to EUR conversion rate
count = 0

def process_price(match):
    global count
    count += 1
    gbp_str = match.group(1)
    rest = match.group(2)
    gbp = float(gbp_str)
    eur = round(gbp * RATE, 2)
    moq = max(1, math.ceil(100.0 / eur))
    moq_total = round(moq * eur, 2)
    
    # Build new price line with EUR
    price_line = f'**Price:** £{gbp_str} / €{eur:.2f} |{rest}'
    moq_line = f'**Minimum Order:** {moq} {"unit" if moq == 1 else "units"} (€{moq_total:.2f}) | Free EU shipping on orders over €150'
    
    return price_line + '\n' + moq_line

# Pattern: **Price:** £XX.XX | rest-of-line
pattern = r'\*\*Price:\*\*\s*£([\d.]+)\s*\|([^\n]+)'
new_content = re.sub(pattern, process_price, content)

# Update the header to mention EUR pricing
new_content = new_content.replace(
    '> For use in: Steroiden project product creation',
    '> For use in: Steroiden project product creation\n> All prices shown in GBP/EUR | Minimum order: €100 per product'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✓ Processed {count} products with EUR pricing and MOQ (≥€100)")
