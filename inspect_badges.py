import re

with open(r"public/reports/quantificador-semantico.html", "r", encoding="utf-8") as f:
    text = f.read()

matches = list(re.finditer(r'<span class="badge"[^>]*>(.*?)</span>', text))
print("Found badges count:", len(matches))
for m in matches:
    start = max(0, m.start() - 40)
    end = min(len(text), m.end() + 60)
    print(text[start:end])
    print("-" * 50)
