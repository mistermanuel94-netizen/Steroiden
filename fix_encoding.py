#!/usr/bin/env python3
"""
Fix mojibake (double-encoded UTF-8) across the entire project.

The issue: files contain UTF-8 bytes that were interpreted as Latin-1/CP1252
and then re-encoded as UTF-8, producing garbled text like:
  â‰¥  instead of  ≥
  Â°  instead of  °
  â˜… instead of  ★
  Ã© instead of  é  (French)
  Ã¼ instead of  ü  (German)
  Ã± instead of  ñ  (Spanish)
  Ð  mojibake instead of Russian Cyrillic

This script detects and fixes all such issues.
"""

import os
import re
import sys

# Project root
PROJECT_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "astro-peptide")

# File extensions to process
EXTENSIONS = {'.ts', '.tsx', '.astro', '.md', '.mjs', '.js', '.json', '.css', '.xsl'}

# Skip directories
SKIP_DIRS = {'node_modules', '.git', 'dist', '.astro', '.vercel'}

# Known mojibake patterns (Latin-1 interpretation of UTF-8 bytes)
# We'll use a targeted approach: detect specific known-broken sequences
MOJIBAKE_PATTERNS = [
    # ≥ (U+2265) encoded as UTF-8 bytes E2 89 A5, misread as Latin-1: â‰¥
    ('â‰¥', '≥'),
    # ° (U+00B0) encoded as UTF-8 bytes C2 B0, misread as Latin-1: Â°
    ('Â°', '°'),
    # ★ (U+2605) encoded as UTF-8 bytes E2 98 85, misread as Latin-1: â˜…
    ('â˜…', '★'),
    # ≤ (U+2264)
    ('â‰¤', '≤'),
    # ± (U+00B1) 
    ('Â±', '±'),
    # × (U+00D7)
    ('Ã—', '×'),
    # µ (U+00B5)
    ('Âµ', 'µ'),
    # € (U+20AC)
    ('â‚¬', '€'),
    # — (U+2014) em dash
    ('â€"', '—'),
    # – (U+2013) en dash
    ('â€"', '–'),
    # ' (U+2019) right single quote
    ('â€™', '''),
    # ' (U+2018) left single quote  
    ('â€˜', '''),
    # " (U+201C) left double quote
    ('â€œ', '"'),
    # " (U+201D) right double quote
    ('â€\x9d', '"'),
    # … (U+2026) ellipsis
    ('â€¦', '…'),
    # • (U+2022) bullet
    ('â€¢', '•'),
    # ™ (U+2122) trademark
    ('â„¢', '™'),
    # © (U+00A9)
    ('Â©', '©'),
    # ® (U+00AE)
    ('Â®', '®'),
    # ½ (U+00BD)
    ('Â½', '½'),
    # ¼ (U+00BC)
    ('Â¼', '¼'),
    # ¾ (U+00BE)
    ('Â¾', '¾'),
    # β (U+03B2) - Greek beta
    ('Î²', 'β'),
    # α (U+03B1) - Greek alpha
    ('Î±', 'α'),
    # arrow (U+2192)
    ('\u00e2\u0086\u0092', '\u2192'),
]

def try_fix_mojibake(text):
    """
    Try to fix double-encoded UTF-8 text.
    Strategy: for each line, try to encode as Latin-1 and decode as UTF-8.
    If that succeeds and produces valid text, use the fixed version.
    Otherwise keep the original.
    """
    fixed = text
    changes = 0
    
    # First, apply known pattern replacements
    for broken, correct in MOJIBAKE_PATTERNS:
        if broken in fixed:
            count = fixed.count(broken)
            fixed = fixed.replace(broken, correct)
            changes += count
    
    # Now handle the systematic Latin-1 → UTF-8 double-encoding for accented chars
    # These are all characters in the range U+00C0 to U+00FF that when UTF-8 encoded
    # produce 2-byte sequences C3 xx, which read as Latin-1 become Ã + something
    
    # Build a mapping for all Latin-1 double-encoded characters
    latin1_fixes = {}
    for codepoint in range(0x80, 0x100):
        char = chr(codepoint)
        try:
            utf8_bytes = char.encode('utf-8')
            if len(utf8_bytes) == 2:
                # This char encodes as 2 UTF-8 bytes
                # When misread as Latin-1, these bytes become two Latin-1 chars
                broken_str = utf8_bytes.decode('latin-1')
                latin1_fixes[broken_str] = char
        except:
            pass
    
    # Sort by length (longest first) to avoid partial matches
    for broken_str in sorted(latin1_fixes.keys(), key=len, reverse=True):
        correct_char = latin1_fixes[broken_str]
        if broken_str in fixed:
            count = fixed.count(broken_str)
            fixed = fixed.replace(broken_str, correct_char)
            changes += count
    
    # Handle 3-byte UTF-8 sequences (Cyrillic U+0400-U+04FF, etc.)
    # These produce 3-byte sequences that when misread as Latin-1 give 3 garbled chars
    # Pattern: Ð followed by various Latin-1 chars for Cyrillic
    # We need to handle these more carefully
    
    # Try a different approach for Cyrillic: attempt to fix remaining mojibake
    # by trying to re-encode sections as latin-1 and decode as utf-8
    result = []
    i = 0
    chars = list(fixed)
    while i < len(fixed):
        # Try to find sequences that look like mojibake
        # Cyrillic UTF-8 uses bytes D0-D1 followed by 80-BF
        # In Latin-1, D0 = Ð, D1 = Ñ
        if fixed[i] in ('Ð', 'Ñ') and i + 1 < len(fixed):
            # Try to decode a sequence starting here
            best_len = 0
            best_decoded = ''
            # Try increasingly longer sequences
            for end in range(i + 2, min(i + 60, len(fixed)) + 1):
                chunk = fixed[i:end]
                try:
                    encoded = chunk.encode('latin-1')
                    decoded = encoded.decode('utf-8')
                    # Check if the decoded text looks like valid Cyrillic or mixed
                    if all(ord(c) > 127 or c.isascii() for c in decoded):
                        best_len = end - i
                        best_decoded = decoded
                except (UnicodeDecodeError, UnicodeEncodeError):
                    # If we had a good match before, stop here
                    if best_len > 0:
                        break
            
            if best_len > 0:
                result.append(best_decoded)
                changes += 1
                i += best_len
                continue
        
        result.append(fixed[i])
        i += 1
    
    fixed = ''.join(result)
    
    return fixed, changes


def process_file(filepath):
    """Process a single file and fix encoding issues."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        try:
            with open(filepath, 'r', encoding='latin-1') as f:
                content = f.read()
        except:
            print(f"  SKIP (unreadable): {filepath}")
            return 0
    
    fixed_content, changes = try_fix_mojibake(content)
    
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8', newline='') as f:
            f.write(fixed_content)
        print(f"  FIXED ({changes} replacements): {os.path.relpath(filepath, PROJECT_ROOT)}")
    
    return changes


def main():
    total_files = 0
    total_changes = 0
    fixed_files = 0
    
    print(f"Scanning {PROJECT_ROOT} for encoding issues...\n")
    
    for root, dirs, files in os.walk(PROJECT_ROOT):
        # Skip unwanted directories
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        
        for filename in files:
            ext = os.path.splitext(filename)[1].lower()
            if ext not in EXTENSIONS:
                continue
            
            filepath = os.path.join(root, filename)
            total_files += 1
            changes = process_file(filepath)
            if changes > 0:
                fixed_files += 1
                total_changes += changes
    
    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Files scanned:  {total_files}")
    print(f"  Files fixed:    {fixed_files}")
    print(f"  Total changes:  {total_changes}")
    print(f"{'='*60}")


if __name__ == '__main__':
    main()
