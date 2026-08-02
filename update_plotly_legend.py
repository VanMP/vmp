import re
import json

file_path = r"public/reports/quantificador-semantico-plot.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

pattern = r'(Plotly\.newPlot\(\s*"[^"]+",\s*\[.*?\]),\s*(\{.*?\}),\s*(\{.*?\})\s*\)'
match = re.search(pattern, html, re.DOTALL)

if match:
    prefix = match.group(1)
    layout_str = match.group(2)
    config_str = match.group(3)
    
    layout_dict = json.loads(layout_str)
    
    # Remove internal Plotly title to avoid overlap with legend
    layout_dict["title"] = ""
    
    # Position legend cleanly at top horizontal without overlapping
    layout_dict["legend"] = {
        "orientation": "h",
        "x": 0.5,
        "xanchor": "center",
        "y": 1.08,
        "yanchor": "bottom",
        "font": { "size": 9, "color": "#212529" },
        "bgcolor": "rgba(255, 255, 255, 0.95)",
        "bordercolor": "#e9ecef",
        "borderwidth": 1
    }
    
    # Margins to give top space for legend and max space for 3D plot
    layout_dict["margin"] = { "l": 5, "r": 5, "t": 45, "b": 5 }
    
    new_layout_str = json.dumps(layout_dict)
    
    new_html = html[:match.start(2)] + new_layout_str + html[match.end(2):]
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_html)
    print("SUCCESS: Removed redundant internal title and refined legend position!")
else:
    print("Error: Could not match Plotly.newPlot layout!")
