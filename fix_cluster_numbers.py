import re

file_path = r"public/reports/quantificador-semantico.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Mappings of theme titles to cluster ranking numbers 1 through 7
cluster_ranks = [
    ("Elogios ao prefeito", "1"),
    ("Reclamações sobre infraestrutura", "2"),
    ("Ruído - Comentários não relacionados", "3"),
    ("Críticas a corrupção e ineficiência", "4"),
    ("Atendimento na UBS Insatisfatório", "5"),
    ("Falhas na Educação Pública", "6"),
    ("Iluminação Pública Inadequada", "7")
]

for theme_name, new_rank in cluster_ranks:
    # Match badge right before the theme name in <td> or <h3>
    # Table cell pattern: <span class="badge" style="...">#\d+</span>\s*</td>\s*<td style="font-weight: 600;">THEME
    pattern_td = rf'(<span class="badge"[^>]*>#)\d+(</span>\s*</td>\s*<td style="font-weight: 600;">\s*{re.escape(theme_name)})'
    html = re.sub(pattern_td, rf'\g<1>{new_rank}\2', html)
    
    # Header pattern: <span class="badge" style="...">#\d+</span>\s*<h3>THEME
    pattern_h3 = rf'(<span class="badge"[^>]*>#)\d+(</span>\s*<h3>\s*{re.escape(theme_name)})'
    html = re.sub(pattern_h3, rf'\g<1>{new_rank}\2', html)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("SUCCESS: Regex cluster badge update complete!")
