"""
Gera src/data/biologia/biomas-ibge.ts: os 6 biomas continentais do Brasil, do IBGE (“Biomas e Sistema
Costeiro-Marinho do Brasil”, escala 1:250.000, camada lml_bioma_e250k), simplificados e desenhados na
mesma projeção do mapa-múndi do app (Natural Earth I, ver scripts/projecao.mjs).

Fonte do arquivo: o IBGE (dado público), na cópia sem alteração do repositório
github.com/Mateushrkz/geopronto-base (dados/biomas_BR.geojson.gz), porque o site do IBGE não abria
no ambiente em que o script foi rodado. Licença: dado público do IBGE, uso livre com a citação da fonte.

Uso: python3 -I scripts/gerar-biomas-ibge.py <biomas_BR.geojson.gz>
Precisa de: pip install shapely
"""
import gzip
import json
import math
import sys

from shapely import transform as transformar
from shapely.geometry import Polygon, shape

ARQ = sys.argv[1]
SAIDA = 'src/data/biologia/biomas-ibge.ts'


def project(lon, lat):
    l = lon * math.pi / 180
    p = lat * math.pi / 180
    p2 = p * p
    p4 = p2 * p2
    return (
        l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
        p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
    )


X_MAX = project(180, 0)[0]
Y_MAX = project(0, 84)[1]
S = 1000 / (2 * X_MAX)


def to_svg(lon, lat):
    x, y = project(lon, lat)
    return ((x + X_MAX) * S, (Y_MAX - y) * S)


IDS = {'Amazônia': 'amazonia', 'Caatinga': 'caatinga', 'Cerrado': 'cerrado', 'Mata Atlântica': 'mata-atlantica', 'Pampa': 'pampa', 'Pantanal': 'pantanal'}
g = json.load(gzip.open(ARQ))
saida = {}
area = {}
R = 6371.0088  # raio médio da Terra, km
minx = miny = 1e9
maxx = maxy = -1e9
for f in g['features']:
    nome = f['properties']['NM_BIOMA']
    geo = shape(f['geometry'])
    if not geo.is_valid:
        geo = geo.buffer(0)
    # a área em km², na projeção cilíndrica de áreas iguais de Lambert (x = R·λ, y = R·sen φ)
    area[IDS[nome]] = transformar(geo, lambda c: [[R * math.radians(x), R * math.sin(math.radians(y))] for x, y in c]).area
    geo = geo.simplify(0.02, preserve_topology=True)
    polys = [geo] if isinstance(geo, Polygon) else list(geo.geoms)
    partes = []
    for p in polys:
        if p.area < 0.01:  # ilhas muito pequenas (graus²) não aparecem no desenho
            continue
        for anel in [p.exterior] + [i for i in p.interiors if Polygon(i).area > 0.01]:
            pts = [to_svg(x, y) for x, y in anel.coords]
            for x, y in pts:
                minx, miny, maxx, maxy = min(minx, x), min(miny, y), max(maxx, x), max(maxy, y)
            partes.append('M' + 'L'.join(f'{x:.2f} {y:.2f}' for x, y in pts) + 'Z')
    saida[IDS[nome]] = ''.join(partes)

linhas = [
    '// Gerado por scripts/gerar-biomas-ibge.py — não editar à mão.',
    '// Os 6 biomas continentais do Brasil: IBGE, “Biomas e Sistema Costeiro-Marinho do Brasil”, 1:250.000',
    '// (camada lml_bioma_e250k), simplificados, na projeção do mapa-múndi do app (Natural Earth I).',
    "export type BiomaBrasil = 'amazonia' | 'caatinga' | 'cerrado' | 'mata-atlantica' | 'pampa' | 'pantanal';",
    '/** O contorno SVG de cada bioma, no espaço do mapa-múndi (MAP_W × MAP_H). */',
    'export const CONTORNO_BIOMA_BRASIL: Record<BiomaBrasil, string> = {',
]
for k, d in saida.items():
    linhas.append(f'  {json.dumps(k)}: {json.dumps(d)},')
linhas.append('};')
linhas.append('/** A área de cada bioma em km² (calculada do contorno original, antes de simplificar). */')
linhas.append('export const AREA_BIOMA_BRASIL: Record<BiomaBrasil, number> = ' + json.dumps({k: int(round(v, -3)) for k, v in area.items()}) + ';')
linhas.append('/** O retângulo do Brasil no mapa-múndi (x, y, largura, altura), para o viewBox. */')
linhas.append(f'export const CAIXA_BIOMAS_BRASIL = [{minx - 4:.1f}, {miny - 4:.1f}, {maxx - minx + 8:.1f}, {maxy - miny + 8:.1f}] as const;')
open(SAIDA, 'w').write('\n'.join(linhas) + '\n')
print('ok', {k: len(v) for k, v in saida.items()})
