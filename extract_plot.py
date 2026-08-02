import os

src_path = r"a:\exemplosportifolio\clusterização exemplo.html"
dst_path = r"a:\exemplosportifolio\vmp\public\reports\quantificador-semantico-plot.html"

with open(src_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = '<div style="height:700px; width:100%;">'
end_marker = '</div>\n        <h2 class="section-title">'

start_idx = content.find(start_marker)
if start_idx == -1:
    start_marker = '<div style="height:700px; width:100%;">'
    start_idx = content.find(start_marker)

print("Start index:", start_idx)

# Find script tags after start_idx
script_plotly_idx = content.find('<script', start_idx)
# Find the next <h2> or end of plot section
end_idx = content.find('<h2>', script_plotly_idx)
if end_idx == -1:
    end_idx = content.find('<table', script_plotly_idx)

plot_chunk = content[script_plotly_idx:end_idx]
# Trim trailing closing divs if any
last_div = plot_chunk.rfind('</div>')
if last_div != -1:
    plot_chunk = plot_chunk[:last_div+6]

html_template = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeção Espacial de Opiniões 3D</title>
    <style>
        * {{
            box-sizing: border-box;
        }}
        html, body {{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #ffffff;
        }}
        .plotly-graph-div {{
            width: 100% !important;
            height: 100vh !important;
        }}
    </style>
</head>
<body>
{plot_chunk}
</body>
</html>"""

os.makedirs(os.path.dirname(dst_path), exist_ok=True)
with open(dst_path, "w", encoding="utf-8") as f:
    f.write(html_template)

print("Saved plot-only HTML to:", dst_path)
