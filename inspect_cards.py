import re

file_path = r"public/reports/quantificador-semantico.html"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

print("Searching for theme cards and cluster badges...")
cards = re.findall(r'<div class="card">.*?</div>\s*</div>', text, re.DOTALL)
print("Found cards:", len(cards))

for idx, card in enumerate(cards):
    print(f"--- CARD {idx+1} ---")
    print(card[:250])
