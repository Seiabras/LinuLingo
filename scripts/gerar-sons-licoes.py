#!/usr/bin/env python3
"""
Gera os sons de acerto e erro das lições (assets/sons/licoes/<estilo>-acerto.wav e -erro.wav), item 19
do PENDENTES.md (16/10/2026): a pessoa escolhe o estilo no Perfil. Sintetizados aqui mesmo (senoides
amortecidas, onda quadrada suave), sem gravação de ninguém: não têm autor nem licença a creditar.
Rodar de novo regera os arquivos iguais.
"""
import math, struct, wave, os

TAXA = 22050
SAIDA = os.path.join(os.path.dirname(__file__), '..', 'assets', 'sons', 'licoes')


def nota(f, dur, decai, amp=1.0, inicio=0.0, harm=((1, 1.0),), quadrada=False):
    n = int(TAXA * (inicio + dur))
    out = [0.0] * n
    for t in range(int(TAXA * inicio), n):
        s = t / TAXA - inicio
        env = math.exp(-s / decai) * min(1.0, s / 0.004)
        v = 0.0
        for k, a in harm:
            x = math.sin(2 * math.pi * f * k * s)
            if quadrada:
                x = math.tanh(4 * x)  # quadrada arredondada, sem chiado
            v += a * x
        out[t] = amp * env * v
    return out


def soma(*ss):
    n = max(len(s) for s in ss)
    return [sum(s[i] if i < len(s) else 0 for s in ss) for i in range(n)]


def gravar(nome, amostras):
    pico = max(1e-9, max(abs(x) for x in amostras))
    amostras = [x / pico * 0.7 for x in amostras]
    r = int(TAXA * 0.004)
    for i in range(min(r, len(amostras))):
        amostras[-1 - i] *= i / r
    os.makedirs(SAIDA, exist_ok=True)
    with wave.open(os.path.join(SAIDA, nome + '.wav'), 'w') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(TAXA)
        w.writeframes(b''.join(struct.pack('<h', int(x * 32767)) for x in amostras))


SINO = ((1, 1.0), (2.76, 0.35), (5.4, 0.12))
MADEIRA = ((1, 1.0), (3.9, 0.25))

# sino: duas notas subindo (dó e mi agudos); erro: duas graves descendo
gravar('sino-acerto', soma(nota(1046.5, 0.5, 0.25, harm=SINO), nota(1318.5, 0.6, 0.3, inicio=0.09, harm=SINO)))
gravar('sino-erro', soma(nota(311.1, 0.35, 0.15, harm=SINO), nota(261.6, 0.45, 0.2, inicio=0.12, harm=SINO)))
# xilofone: três notas rápidas subindo; erro: uma nota grave abafada
gravar('xilofone-acerto', soma(*[nota(f, 0.25, 0.08, inicio=i * 0.07, harm=MADEIRA) for i, f in enumerate((784, 988, 1318.5))]))
gravar('xilofone-erro', soma(nota(196, 0.3, 0.07, harm=MADEIRA), nota(185, 0.3, 0.07, inicio=0.1, harm=MADEIRA)))
# moeda: o “plim” de duas notas; erro: um zumbido curto e baixo
gravar('moeda-acerto', soma(nota(987.8, 0.12, 0.06, harm=((1, 1), (2, 0.3))), nota(1318.5, 0.45, 0.18, inicio=0.08, harm=((1, 1), (2, 0.3)))))
gravar('moeda-erro', nota(110, 0.3, 0.25, harm=((1, 1), (2, 0.5), (3, 0.3)), quadrada=True))
# suave: uma nota redonda; erro: uma nota grave redonda
gravar('suave-acerto', nota(659.3, 0.45, 0.22))
gravar('suave-erro', nota(220, 0.45, 0.22))
# fliperama: arpejo de onda quadrada subindo; erro: descendo
gravar('fliperama-acerto', soma(*[nota(f, 0.09, 0.2, inicio=i * 0.06, amp=0.6, quadrada=True) for i, f in enumerate((523.3, 659.3, 784, 1046.5))]))
gravar('fliperama-erro', soma(*[nota(f, 0.1, 0.25, inicio=i * 0.08, amp=0.6, quadrada=True) for i, f in enumerate((392, 311.1, 233.1))]))
print('ok')
