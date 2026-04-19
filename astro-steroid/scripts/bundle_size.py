from pathlib import Path
base = Path('dist/_worker.js')
items = [(p.relative_to(base), p.stat().st_size) for p in base.rglob('*') if p.is_file()]
items.sort(key=lambda x: x[1], reverse=True)
for rel, size in items[:30]:
    print(f"{size:12d}  {rel}")
