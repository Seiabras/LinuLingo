"""Transforma as camadas do Linu vetorial (fotografadas por scripts/linu-pixel.mjs) em pixel art.

Uso: python3 scripts/linu-pixel.py <pasta-das-capturas>

Para cada camada há duas fotos, em fundo preto e em fundo branco: a diferença entre elas dá a
transparência exata de cada pixel. Depois a camada é reduzida para a grade do Linu (52 × 61, a mesma
densidade de pixels das cenas do abrigo), com transparência só cheia ou vazia, poucas cores e um
contorno escuro de 1 pixel. Gera também o Linu de costas (a partir do corpo de frente) e o índice
src/data/linu-pixel.ts com os `require` de cada imagem.
"""
import os, re, sys, glob
from PIL import Image, ImageOps

SRC = sys.argv[1]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'pixel', 'linu')
W, H = 52, 61
INK = (31, 42, 68, 255)
os.makedirs(OUT, exist_ok=True)


def un_premultiply(black, white):
    """Cor e transparência reais a partir da mesma camada em fundo preto e em fundo branco."""
    b, w = black.convert('RGB').load(), white.convert('RGB').load()
    out = Image.new('RGBA', black.size)
    o = out.load()
    for y in range(black.size[1]):
        for x in range(black.size[0]):
            kb, kw = b[x, y], w[x, y]
            a = 1 - sum(kw[i] - kb[i] for i in range(3)) / (3 * 255)
            a = max(0.0, min(1.0, a))
            if a < 0.02:
                o[x, y] = (0, 0, 0, 0)
            else:
                o[x, y] = tuple(max(0, min(255, round(kb[i] / a))) for i in range(3)) + (round(a * 255),)
    return out


def pixelate(im, colors=20, outline=True):
    # reduz com média ponderada pela transparência (cor pré-multiplicada)
    pre = Image.new('RGBA', im.size)
    p, s = pre.load(), im.load()
    for y in range(im.size[1]):
        for x in range(im.size[0]):
            r, g, b, a = s[x, y]
            p[x, y] = (r * a // 255, g * a // 255, b * a // 255, a)
    small = pre.resize((W, H), Image.BOX)
    sp = small.load()
    alpha = Image.new('L', (W, H))
    rgb = Image.new('RGB', (W, H))
    al, rg = alpha.load(), rgb.load()
    for y in range(H):
        for x in range(W):
            r, g, b, a = sp[x, y]
            al[x, y] = 255 if a >= 110 else 0
            rg[x, y] = (min(255, r * 255 // a), min(255, g * 255 // a), min(255, b * 255 // a)) if a else (0, 0, 0)
    q = rgb.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).convert('RGBA')
    q.putalpha(alpha)
    if outline:
        qp = q.load()
        solid = {(x, y) for y in range(H) for x in range(W) if qp[x, y][3]}
        for y in range(H):
            for x in range(W):
                if (x, y) in solid:
                    continue
                if any((x + dx, y + dy) in solid for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))):
                    qp[x, y] = INK
    return q


def cores_do_corpo():
    """As três cores do corpo de cada cor do Linu (claro, meio, escuro), lidas de src/data/cores-linu.ts."""
    src = open(os.path.join(ROOT, 'src', 'data', 'cores-linu.ts')).read()
    hexrgb = lambda h: tuple(int(h[i:i + 2], 16) for i in (1, 3, 5)) + (255,)
    return {m[0]: [hexrgb(c) for c in m[1:]] for m in re.findall(r"id: '([^']+)'.*?corpo: \['(#[0-9A-Fa-f]{6})', '(#[0-9A-Fa-f]{6})', '(#[0-9A-Fa-f]{6})'\]", src)}


CORPO = None


def costas(fundo, cor):
    """O Linu de costas: o mesmo contorno, tudo preto-azulado (a barriga branca some), com luz do lado
    esquerdo e sombra do direito; os pés rosados continuam à vista embaixo."""
    # a nadadeira levantada fica do outro lado, visto de trás
    im = ImageOps.mirror(fundo)
    px = im.load()
    for y in range(H):
        linha = [x for x in range(W) if px[x, y][3] and px[x, y] != INK]
        if not linha:
            continue
        x0, x1 = min(linha), max(linha)
        for x in linha:
            r, g, b, a = px[x, y]
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            if y >= H - 8 and lum > 140:  # os pés
                continue
            t = (x - x0) / max(1, x1 - x0)  # 0 = borda esquerda, 1 = direita
            claro, meio, escuro = CORPO.get(cor, CORPO['padrao'])
            px[x, y] = claro if t < 0.18 else meio if t < 0.72 else escuro
    return im


def lado():
    """O Linu de lado (andando): o pinguim do PixelLab (assets/pixel/linu-pixel.png, fundo cinza liso),
    recortado e reduzido do mesmo jeito que as outras camadas — pixels cheios, poucas cores e contorno —,
    para não parecer borrado ao lado da cena."""
    from collections import deque
    src = Image.open(os.path.join(ROOT, 'assets', 'pixel', 'linu-pixel.png')).convert('RGBA')
    w0, h0 = src.size
    px = src.load()
    fundo, sombra = px[0, 0], (99, 109, 117, 255)
    vistos, fila = set(), deque([(x, y) for x in range(w0) for y in (0, h0 - 1)] + [(x, y) for y in range(h0) for x in (0, w0 - 1)])
    while fila:
        x, y = fila.popleft()
        if (x, y) in vistos or not (0 <= x < w0 and 0 <= y < h0) or px[x, y] not in (fundo, sombra):
            continue
        vistos.add((x, y))
        px[x, y] = (0, 0, 0, 0)
        fila.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])
    corte = src.crop(src.getbbox())
    global W, H
    W0, H0 = W, H
    W, H = 44, 60
    try:
        esq = pixelate(corte, colors=14)
    finally:
        W, H = W0, H0
    esq.save(os.path.join(ROOT, 'assets', 'pixel', 'linu-sprite-esquerda.png'))
    ImageOps.mirror(esq).save(os.path.join(ROOT, 'assets', 'pixel', 'linu-sprite-direita.png'))


def main():
    lado()
    global CORPO
    CORPO = cores_do_corpo()
    pares = {}
    for f in glob.glob(os.path.join(SRC, 'camada-*__*.png')):
        nome, fundo = os.path.basename(f)[:-4].split('__')
        pares.setdefault(nome, {})[fundo] = f
    sprites = {'fundo': {}, 'frente': {}, 'costas': {}, 'roupa': {}}
    for nome, fs in sorted(pares.items()):
        if '000000' not in fs or 'ffffff' not in fs:
            continue
        camada = un_premultiply(Image.open(fs['000000']), Image.open(fs['ffffff']))
        _, tipo, ident = nome.split('-', 2)
        if tipo == 'fundo':
            px = pixelate(camada, colors=24)
            px.save(os.path.join(OUT, f'fundo-{ident}.png'))
            costas(px, ident).save(os.path.join(OUT, f'costas-{ident}.png'))
            sprites['fundo'][ident] = f'fundo-{ident}.png'
            sprites['costas'][ident] = f'costas-{ident}.png'
        elif tipo == 'frente':
            pixelate(camada, colors=8, outline=False).save(os.path.join(OUT, f'frente-{ident}.png'))
            sprites['frente'][ident] = f'frente-{ident}.png'
        else:
            pixelate(camada, colors=16).save(os.path.join(OUT, f'roupa-{ident}.png'))
            sprites['roupa'][ident] = f'roupa-{ident}.png'
    linhas = [
        '// Gerado por scripts/linu-pixel.py — não editar à mão.',
        '// O Linu em pixel art (52 × 61), em camadas: o corpo e os olhos/bico de cada cor, o corpo de costas',
        '// e cada roupinha da loja, feitos a partir do desenho vetorial (src/components/Linu.tsx).',
        'export const LINU_PIXEL_W = %d;' % W,
        'export const LINU_PIXEL_H = %d;' % H,
    ]
    for chave in ('fundo', 'frente', 'costas', 'roupa'):
        linhas.append(f'export const LINU_PIXEL_{chave.upper()}: Record<string, number> = {{')
        for ident, arq in sorted(sprites[chave].items()):
            linhas.append(f"  '{ident}': require('../../assets/pixel/linu/{arq}'),")
        linhas.append('};')
    open(os.path.join(ROOT, 'src', 'data', 'linu-pixel.ts'), 'w').write('\n'.join(linhas) + '\n')
    print({k: len(v) for k, v in sprites.items()})


main()
