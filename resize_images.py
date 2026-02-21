"""Resize all product images to 1024x1024 and compress."""
import os
import sys
from PIL import Image

IMG_DIR = r"c:\Users\CTech Electronics\Desktop\peptide\Peptide\astro-peptide\public\images\products"
TARGET_SIZE = (1024, 1024)

count = 0
total_before = 0
total_after = 0
errors = []

files = sorted([f for f in os.listdir(IMG_DIR) if f.lower().endswith('.png')])
print(f"Found {len(files)} PNG files to process", flush=True)

for fname in files:
    fpath = os.path.join(IMG_DIR, fname)
    before_size = os.path.getsize(fpath)
    total_before += before_size
    
    try:
        img = Image.open(fpath)
        # Convert to RGB if RGBA
        if img.mode == 'RGBA':
            bg = Image.new('RGB', img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[3])
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize with high-quality resampling
        img_resized = img.resize(TARGET_SIZE, Image.LANCZOS)
        
        # Save as optimized PNG
        img_resized.save(fpath, 'PNG', optimize=True)
        img.close()
        
        after_size = os.path.getsize(fpath)
        total_after += after_size
        reduction = (1 - after_size / before_size) * 100
        count += 1
        print(f"  [{count}/{len(files)}] {fname}: {before_size//1024}KB -> {after_size//1024}KB ({reduction:.0f}%)", flush=True)
    except Exception as e:
        errors.append(fname)
        print(f"  ERROR {fname}: {e}", flush=True)

print(f"\nProcessed: {count} images", flush=True)
print(f"Before: {total_before/1024/1024:.1f} MB", flush=True)
print(f"After:  {total_after/1024/1024:.1f} MB", flush=True)
if total_before > 0:
    print(f"Saved:  {(total_before-total_after)/1024/1024:.1f} MB ({(1-total_after/total_before)*100:.0f}%)", flush=True)
if errors:
    print(f"Errors: {errors}", flush=True)
