import re

file_path = r"public/reports/quantificador-semantico-plot.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's inspect where Plotly.newPlot is called
pattern = r'Plotly\.newPlot\(\s*"[^"]+",\s*(\[.*?\]),\s*(\{.*?\}),\s*(\{.*?\})\s*\)'
match = re.search(pattern, html, re.DOTALL)

if match:
    print("Found Plotly.newPlot call!")
    data_str = match.group(1)
    layout_str = match.group(2)
    config_str = match.group(3)
    print("Layout length:", len(layout_str))
    print("Layout snippet:", layout_str[:300])
else:
    print("Pattern match not found, searching alternative...")
    idx = html.find('Plotly.newPlot(')
    print("Plotly.newPlot index:", idx)
