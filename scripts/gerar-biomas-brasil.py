"""
Gera src/data/biologia/biomas-brasil.ts: as ecorregiões do Ecoregions 2017 (Resolve; Dinerstein et
al. 2017, BioScience 67(6), CC BY 4.0) recortadas pelo contorno do Brasil do mapa-múndi do app, na
mesma projeção (Natural Earth I). Cada ecorregião leva o número do bioma, para a cor.

Não é o mapa de biomas do IBGE (que usa outra divisão); são as ecorregiões do mesmo conjunto de
dados do mapa-múndi de biomas, com o nome original em inglês.

Uso: python3 -I scripts/gerar-biomas-brasil.py <pasta com Ecoregions2017.shp>
Precisa de: pip install pyshp shapely
"""
import json
import math
import re
import sys

import shapefile
from shapely.geometry import Polygon, shape
from shapely.ops import transform, unary_union

PASTA = sys.argv[1]
SAIDA = 'src/data/biologia/biomas-brasil.ts'


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


def to_svg(lon, lat, z=None):
    x, y = project(lon, lat)
    return ((x + X_MAX) * S, (Y_MAX - y) * S)


mundo = open('src/data/mapa-mundi.ts').read()
ini = 'export const WORLD: MapCountry[] = '
paises = json.loads(mundo[mundo.index(ini) + len(ini):].split(';\n')[0])
bra = next(c for c in paises if c['iso'] == 'BRA')


def poligono_svg(d):
    aneis = []
    for parte in re.findall(r'M[^MZ]*Z?', d):
        nums = [float(x) for x in re.findall(r'-?\d+(?:\.\d+)?', parte)]
        pts = list(zip(nums[0::2], nums[1::2]))
        if len(pts) >= 3:
            pg = Polygon(pts)
            aneis.append(pg if pg.is_valid else pg.buffer(0))
    return unary_union(aneis)


brasil = poligono_svg(bra['d'])
minx, miny, maxx, maxy = brasil.bounds

r = shapefile.Reader(f'{PASTA}/Ecoregions2017', encoding='latin-1')
ecos = []
for sr in r.iterShapeRecords():
    num = int(sr.record['BIOME_NUM'])
    if num < 1 or num > 14:
        continue
    lon0, lat0, lon1, lat1 = sr.shape.bbox
    if lon1 < -75 or lon0 > -28 or lat1 < -35 or lat0 > 7:
        continue
    g = shape(sr.shape.__geo_interface__)
    if not g.is_valid:
        g = g.buffer(0)
    g = transform(to_svg, g.simplify(0.03, preserve_topology=True))
    if not g.intersects(brasil):
        continue
    dentro = g.intersection(brasil)
    if dentro.area < 0.4:  # menos de ~0,4 px² no mapa-múndi: some no desenho
        continue
    polys = [dentro] if isinstance(dentro, Polygon) else [p for p in getattr(dentro, 'geoms', []) if isinstance(p, Polygon)]
    partes = []
    for p in polys:
        if p.area < 0.02:
            continue
        for anel in [p.exterior] + list(p.interiors):
            partes.append('M' + 'L'.join(f'{x:.2f} {y:.2f}' for x, y in anel.coords) + 'Z')
    if partes:
        ecos.append({'nome': sr.record['ECO_NAME'].strip(), 'bioma': num, 'd': ''.join(partes), 'area': round(dentro.area, 2)})

ecos.sort(key=lambda e: -e['area'])
linhas = [
    '// Gerado por scripts/gerar-biomas-brasil.py — não editar à mão.',
    '// Ecorregiões do Ecoregions 2017 (Resolve; Dinerstein et al. 2017, BioScience 67(6)), licença CC BY 4.0,',
    '// recortadas pelo contorno do Brasil do mapa-múndi (Natural Earth, domínio público), na mesma projeção.',
    'export interface EcorregiaoBrasil {',
    '  /** o nome original do Ecoregions 2017 */',
    '  nome: string;',
    '  /** o número do bioma (para a cor e o nome do bioma) */',
    '  bioma: number;',
    '  d: string;',
    '  /** a área no desenho, para ordenar */',
    '  area: number;',
    '}',
    f'/** O retângulo do Brasil no mapa-múndi (x, y, largura, altura), para o viewBox. */',
    f'export const CAIXA_BRASIL = [{minx - 4:.1f}, {miny - 4:.1f}, {maxx - minx + 8:.1f}, {maxy - miny + 8:.1f}] as const;',
    f'export const CONTORNO_BRASIL = {json.dumps(bra["d"])};',
    'export const ECORREGIOES_BRASIL: EcorregiaoBrasil[] = ' + json.dumps(ecos, ensure_ascii=False) + ';',
]
open(SAIDA, 'w').write('\n'.join(linhas) + '\n')
print(len(ecos), [e['nome'] for e in ecos[:25]])
