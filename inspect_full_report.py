import re

with open(r"public/reports/quantificador-semantico.html", "r", encoding="utf-8") as f:
    text = f.read()

print("HTML size:", len(text))

# Let's find table rows or cluster cards or headers
table_idx = text.find('<table')
if table_idx != -1:
    end_table = text.find('</table>', table_idx)
    print("=== TABLE ===")
    print(text[table_idx:end_table+8])

cards_idx = text.find('Cluster')
print("=== CLUSTER REFERENCES ===")
for m in re.finditer(r'Cluster\s*\d+|Cluster\s*-\d+|Cluster\s*#?\d+', text, re.IGNORECASE):
    start = max(0, m.start() - 30)
    end = min(len(text), m.end() + 100)
    print(text[start:end])
    print("-" * 40)
