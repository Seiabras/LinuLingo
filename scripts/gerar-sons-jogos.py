#!/usr/bin/env python3
"""
Gera os sons curtos dos tabuleiros dos jogos do conhecimento (assets/sons/jogos/*.wav).

Os sons são sintetizados aqui mesmo (somas de senoides amortecidas e ruído filtrado), sem gravação
de ninguém: não têm autor nem licença a creditar. Cada tema de tabuleiro usa um deles ao mover a
peça (ver `SOM_DO_TEMA` em src/data/temas-jogos.ts). Rodar de novo regera os arquivos iguais
(o ruído usa semente fixa).
"""
import math, random, struct, wave, os

TAXA = 22050
random.seed(7)
SAIDA = os.path.join(os.path.dirname(__file__), '..', 'assets', 'sons', 'jogos')


def parciais(dur, ps):
    """ps: lista de (freq, amplitude, decaimento em s)."""
    n = int(TAXA * dur)
    return [sum(a * math.exp(-t / TAXA / d) * math.sin(2 * math.pi * f * t / TAXA) for f, a, d in ps) for t in range(n)]


def ruido(dur, amp, decai, suave=1, atraso=0.0, envelope=None):
    n = int(TAXA * dur)
    out, ultimo = [], 0.0
    for t in range(n):
        x = random.uniform(-1, 1)
        ultimo = ultimo + (x - ultimo) / suave  # passa-baixa simples
        s = t / TAXA - atraso
        if s < 0:
            out.append(0.0)
            continue
        env = envelope(s) if envelope else math.exp(-s / decai)
        out.append(amp * ultimo * env)
    return out


def varrida(dur, f0, f1, amp, inicio):
    n = int(TAXA * dur)
    out, fase = [], 0.0
    for t in range(n):
        s = t / TAXA - inicio
        if s < 0 or s > 0.09:
            out.append(0.0)
            continue
        f = f0 + (f1 - f0) * s / 0.09
        fase += 2 * math.pi * f / TAXA
        out.append(amp * math.sin(math.pi * s / 0.09) * math.sin(fase))
    return out


def soma(*ss):
    n = max(len(s) for s in ss)
    return [sum(s[i] if i < len(s) else 0 for s in ss) for i in range(n)]


def gravar(nome, amostras):
    pico = max(1e-9, max(abs(x) for x in amostras))
    amostras = [x / pico * 0.8 for x in amostras]
    # 4 ms de rampa no começo e no fim, para não estalar
    r = int(TAXA * 0.004)
    for i in range(r):
        amostras[i] *= i / r
        amostras[-1 - i] *= i / r
    with wave.open(os.path.join(SAIDA, f'{nome}.wav'), 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(TAXA)
        w.writeframes(b''.join(struct.pack('<h', int(x * 32767)) for x in amostras))


os.makedirs(SAIDA, exist_ok=True)
gravar('madeira', soma(parciais(0.18, [(820, 1, 0.03), (1730, 0.5, 0.018), (2900, 0.2, 0.008)]), ruido(0.18, 0.4, 0.006, 2)))
gravar('madeira-grave', soma(parciais(0.22, [(430, 1, 0.045), (980, 0.5, 0.025), (1650, 0.2, 0.012)]), ruido(0.22, 0.35, 0.008, 3)))
gravar('pedra', soma(parciais(0.15, [(2500, 1, 0.014), (4100, 0.6, 0.01), (6100, 0.3, 0.006)]), ruido(0.15, 0.6, 0.004, 1)))
gravar('areia', soma(parciais(0.3, [(150, 1, 0.05)]), ruido(0.3, 0.5, 0.11, 6)))
gravar('onda', ruido(0.75, 1, 0, 9, envelope=lambda s: math.sin(math.pi * min(1, s / 0.75)) ** 2))
gravar('mata', soma(parciais(0.25, [(700, 1, 0.03), (1500, 0.45, 0.018)]), ruido(0.25, 0.3, 0.006, 2), varrida(0.25, 2600, 3900, 0.45, 0.07)))
gravar('moeda', parciais(0.35, [(2093, 1, 0.12), (3520, 0.7, 0.09), (5400, 0.4, 0.06), (7020, 0.2, 0.04)]))
gravar('sino', parciais(0.6, [(1320, 1, 0.25), (2648, 0.5, 0.18), (3960, 0.3, 0.12), (5280, 0.15, 0.08)]))
gravar('gelo', soma(parciais(0.3, [(3000, 1, 0.06), (4520, 0.7, 0.05), (6200, 0.3, 0.03)]), ruido(0.3, 0.15, 0.02, 1)))
gravar('ceramica', soma(parciais(0.2, [(1100, 1, 0.035), (2900, 0.7, 0.025), (4600, 0.3, 0.012)]), ruido(0.2, 0.4, 0.005, 1)))
gravar('tecido', soma(parciais(0.2, [(210, 1, 0.035)]), ruido(0.2, 0.5, 0.03, 8)))
gravar('papel', ruido(0.2, 1, 0.05, 1))
# chuva: chiado suave com pingos (Londres)
gravar('chuva', soma(ruido(0.45, 0.5, 0, 2, envelope=lambda s: math.sin(math.pi * min(1, s / 0.45))), *[parciais(0.45, [(1800 + 400 * k, 0.25, 0.01)]) [:int(TAXA * 0.45)] for k in range(1)]))
# captura: um golpe mais forte; vitória: um arpejo curto (dó, mi, sol, dó)
gravar('captura', soma(parciais(0.3, [(520, 1, 0.06), (1210, 0.6, 0.04), (2400, 0.3, 0.02)]), ruido(0.3, 0.7, 0.02, 2)))
arpejo = []
for k, f in enumerate([523.25, 659.25, 783.99, 1046.5]):
    nota = parciais(0.4 if k == 3 else 0.12, [(f, 1, 0.15), (f * 2, 0.3, 0.08)])
    arpejo += nota
gravar('vitoria', arpejo)
print('ok', sorted(os.listdir(SAIDA)))
