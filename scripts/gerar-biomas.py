"""
Gera src/data/biologia/biomas-mapa.ts: os 14 biomas terrestres do mundo, desenhados na mesma
projeção do mapa-múndi do app (Natural Earth I, ver scripts/projecao.mjs), para a área Biologia.

Fonte: Ecoregions 2017 (Resolve), de Dinerstein et al. 2017, “An Ecoregion-Based Approach to
Protecting Half the Terrestrial Realm”, BioScience 67(6): 534–545. Licença CC BY 4.0 (declarada no
próprio arquivo, campo LICENSE). Download: https://storage.googleapis.com/teow2016/Ecoregions2017.zip
(página do projeto: https://ecoregions.appspot.com/).

Uso: python3 -I scripts/gerar-biomas.py <pasta com Ecoregions2017.shp>
Precisa de: pip install pyshp shapely
"""
import json
import math
import sys

import shapefile
from shapely.geometry import shape, box, MultiPolygon, Polygon
from shapely.ops import unary_union

PASTA = sys.argv[1]
SAIDA = 'src/data/biologia/biomas-mapa.ts'

# a mesma projeção de scripts/projecao.mjs
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
W = 1000
S = W / (2 * X_MAX)

def to_svg(lon, lat):
    x, y = project(lon, lat)
    return ((x + X_MAX) * S, (Y_MAX - y) * S)

r = shapefile.Reader(f'{PASTA}/Ecoregions2017', encoding='latin-1')
por_bioma: dict[int, list] = {}
# as maiores ecorregiões de cada bioma (exemplos reais, com o nome do Ecoregions 2017) e a cor oficial
ecos: dict[int, list] = {}
cor: dict[int, str] = {}
for sr in r.iterShapeRecords():
    num = int(sr.record['BIOME_NUM'])
    if num < 1 or num > 14:
        continue
    cor[num] = sr.record['COLOR_BIO']
    nome = sr.record['ECO_NAME'].strip()
    if nome and nome != 'Rock and Ice':
        ecos.setdefault(num, []).append((float(sr.record['SHAPE_AREA']), nome))
    g = shape(sr.shape.__geo_interface__)
    if not g.is_valid:
        g = g.buffer(0)
    por_bioma.setdefault(num, []).append(g.simplify(0.08, preserve_topology=True))

recorte = box(-180, -58, 180, 84)
saida = {}
for num, gs in sorted(por_bioma.items()):
    u = unary_union(gs).intersection(recorte).simplify(0.05, preserve_topology=True)
    polys = [u] if isinstance(u, Polygon) else [p for p in getattr(u, 'geoms', []) if isinstance(p, Polygon)]
    partes = []
    for p in polys:
        if p.area < 0.6:  # tira ilhotas minúsculas, que não aparecem no mapa
            continue
        aneis = [p.exterior] + [i for i in p.interiors if Polygon(i).area > 0.6]
        for anel in aneis:
            pts = [to_svg(x, y) for x, y in anel.coords]
            d = 'M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in pts) + 'Z'
            partes.append(d)
    saida[num] = ''.join(partes)

# os países de cada bioma: o contorno do país (src/data/mapa-mundi.ts, já projetado) cruzado com o
# contorno do bioma; entra o país em que o bioma cobre pelo menos 15% da área ou 2% do bioma inteiro
import re
mundo = open('src/data/mapa-mundi.ts').read()
paises = json.loads(mundo[mundo.index('export const WORLD: MapCountry[] = ') + len('export const WORLD: MapCountry[] = '):].split(';\n')[0])

def poligono_svg(d):
    aneis = []
    for parte in re.findall(r'M[^MZ]*Z?', d):
        nums = [float(x) for x in re.findall(r'-?\d+(?:\.\d+)?', parte)]
        pts = list(zip(nums[0::2], nums[1::2]))
        if len(pts) >= 3:
            pg = Polygon(pts)
            aneis.append(pg if pg.is_valid else pg.buffer(0))
    return unary_union(aneis) if aneis else None

bioma_px = {num: poligono_svg(d) for num, d in saida.items()}
paises_do_bioma = {}
for num, bg in bioma_px.items():
    if bg is None or bg.is_empty:
        continue
    lista = []
    for c in paises:
        if not c.get('d'):
            continue
        pg = poligono_svg(c['d'])
        if pg is None or pg.is_empty or not pg.intersects(bg):
            continue
        comum = pg.intersection(bg).area
        if comum >= 0.15 * pg.area or comum >= 0.02 * bg.area:
            lista.append((comum, c['iso']))
    paises_do_bioma[num] = [iso for _, iso in sorted(lista, reverse=True)]

linhas = [
    '// Gerado por scripts/gerar-biomas.py — não editar à mão.',
    '// Os 14 biomas terrestres do Ecoregions 2017 (Resolve; Dinerstein et al. 2017, BioScience 67(6)), licença',
    '// CC BY 4.0, juntados por bioma e simplificados, na projeção do mapa-múndi do app (Natural Earth I).',
    '/** O contorno SVG de cada bioma (número do bioma no Ecoregions 2017 → caminho), no espaço do MAP_W × MAP_H. */',
    'export const CONTORNO_BIOMA: Record<number, string> = {',
]
for num, d in saida.items():
    linhas.append(f'  {num}: {json.dumps(d)},')
linhas.append('};')
linhas.append('/** A cor oficial de cada bioma no Ecoregions 2017. */')
linhas.append('export const COR_BIOMA: Record<number, string> = ' + json.dumps({k: cor[k] for k in sorted(cor)}) + ';')
linhas.append('/** As 6 maiores ecorregiões de cada bioma, com o nome original (em inglês) do Ecoregions 2017. */')
linhas.append('export const ECORREGIOES_DO_BIOMA: Record<number, string[]> = {')
for num in sorted(ecos):
    linhas.append(f'  {num}: {json.dumps([n for _, n in sorted(ecos[num], reverse=True)[:6]], ensure_ascii=False)},')
linhas.append('};')
linhas.append('/** Os países de cada bioma (ISO alfa-3), do que mais tem o bioma para o que menos tem. */')
linhas.append('export const PAISES_DO_BIOMA: Record<number, string[]> = {')
for num, isos in paises_do_bioma.items():
    linhas.append(f'  {num}: {json.dumps(isos)},')
linhas.append('};')
open(SAIDA, 'w').write('\n'.join(linhas) + '\n')
print('ok', {k: len(v) for k, v in saida.items()})
