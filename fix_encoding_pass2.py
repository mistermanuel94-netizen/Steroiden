#!/usr/bin/env python3
"""
Second pass: fix remaining mojibake that wasn't caught by the first script.
This handles:
1. Emoji flags (4-byte UTF-8 sequences) 
2. Remaining partially-fixed Cyrillic/other text
3. Any other double-encoded remnants
"""

import os
import re

PROJECT_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "astro-peptide")
EXTENSIONS = {'.ts', '.tsx', '.astro', '.md', '.mjs', '.js', '.css', '.xsl'}
SKIP_DIRS = {'node_modules', '.git', 'dist', '.astro', '.vercel'}


def fix_remaining_mojibake(text):
    """
    Attempt to fix remaining double-encoded UTF-8 by trying to encode
    suspicious byte sequences as latin-1 and decode as utf-8.
    """
    changes = 0
    
    # Strategy: process the text character by character looking for 
    # Latin-1 high-byte characters that signal mojibake
    # Characters in range 0x80-0xFF that aren't normal in context
    
    result = []
    i = 0
    while i < len(text):
        c = text[i]
        cp = ord(c)
        
        # Check for mojibake starting characters
        # UTF-8 lead bytes when misread as Latin-1:
        # C2-DF -> 2-byte sequences (already handled by pass 1 mostly)
        # E0-EF -> 3-byte sequences  
        # F0-F4 -> 4-byte sequences (emojis, supplementary chars)
        
        if 0xC0 <= cp <= 0xF4:
            # Try to find the longest valid UTF-8 sequence
            best_len = 0
            best_decoded = ''
            
            # Determine max continuation bytes based on lead byte
            if 0xC0 <= cp <= 0xDF:
                max_extra = 1
            elif 0xE0 <= cp <= 0xEF:
                max_extra = 2
            elif 0xF0 <= cp <= 0xF4:
                max_extra = 3
            else:
                max_extra = 0
            
            # Try to grab the sequence
            end = i + 1 + max_extra
            if end <= len(text):
                chunk = text[i:end]
                try:
                    encoded = chunk.encode('latin-1')
                    decoded = encoded.decode('utf-8')
                    # Verify it's a reasonable character
                    if len(decoded) >= 1 and all(ord(ch) >= 0x80 for ch in decoded):
                        best_len = end - i
                        best_decoded = decoded
                except (UnicodeDecodeError, UnicodeEncodeError):
                    pass
            
            if best_len > 0:
                result.append(best_decoded)
                changes += 1
                i += best_len
                continue
        
        # Handle Ð and Ñ for Cyrillic that was partially fixed 
        # (some chars fixed, others not in the same word)
        if c in ('Ð', 'Ñ') and i + 1 < len(text):
            next_c = text[i + 1]
            next_cp = ord(next_c)
            # Check if next char is a valid UTF-8 continuation byte equivalent
            if 0x80 <= next_cp <= 0xBF:
                try:
                    encoded = text[i:i+2].encode('latin-1')
                    decoded = encoded.decode('utf-8')
                    result.append(decoded)
                    changes += 1
                    i += 2
                    continue
                except (UnicodeDecodeError, UnicodeEncodeError):
                    pass
        
        result.append(c)
        i += 1
    
    return ''.join(result), changes


def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        return 0
    
    fixed, changes = fix_remaining_mojibake(content)
    
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8', newline='') as f:
            f.write(fixed)
        print(f"  FIXED ({changes}): {os.path.relpath(filepath, PROJECT_ROOT)}")
    
    return changes


def main():
    total_files = 0
    total_changes = 0
    fixed_files = 0
    
    print(f"Pass 2: Scanning {PROJECT_ROOT} for remaining encoding issues...\n")
    
    for root, dirs, files in os.walk(PROJECT_ROOT):
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
    
    print(f"\nPass 2 Summary: {fixed_files} files, {total_changes} changes across {total_files} files scanned")


if __name__ == '__main__':
    main()
