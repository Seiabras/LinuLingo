import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CORES_CLASSICAS, CORES_EXERCITO, EXERCITOS } from './exercitos-jogos';

/** Razão de contraste da WCAG entre duas cores #RRGGBB. */
function contraste(a: string, b: string): number {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r! + 0.7152 * g! + 0.0722 * bl!;
  };
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
}

test('exércitos: todo exército tem as seis peças e as cores dos dois tons', () => {
  for (const e of EXERCITOS) {
    for (const k of ['k', 'q', 'r', 'b', 'n', 'p'] as const) assert.ok(e.pecas[k].d.length > 50 && e.pecas[k].nome, `${e.id}: peça ${k}`);
    assert.ok(CORES_EXERCITO[e.id], `${e.id}: sem cores próprias`);
  }
});

test('exércitos: cada cor contrasta com o próprio contorno (a figura lê em qualquer casa)', () => {
  for (const [id, c] of Object.entries(CORES_EXERCITO))
    for (const lado of ['w', 'b'] as const) assert.ok(contraste(c[lado].fundo, c[lado].contorno) >= 4.5, `${id}/${lado}: contorno fraco (${contraste(c[lado].fundo, c[lado].contorno).toFixed(2)})`);
  for (const lado of ['w', 'b'] as const)
    for (const c of CORES_CLASSICAS[lado]) assert.ok(contraste(c.fundo, c.contorno) >= 4.5, `clássica ${c.id}: contorno fraco`);
});

test('exércitos: com o mesmo exército dos dois lados, os dois tons se distinguem bem', () => {
  for (const [id, c] of Object.entries(CORES_EXERCITO)) assert.ok(contraste(c.w.fundo, c.b.fundo) >= 2.5, `${id}: os dois tons ficam parecidos (${contraste(c.w.fundo, c.b.fundo).toFixed(2)})`);
});

test('exércitos: qualquer cor clássica do jogador 1 se distingue de qualquer cor do jogador 2', () => {
  for (const w of CORES_CLASSICAS.w) for (const b of CORES_CLASSICAS.b) assert.ok(contraste(w.fundo, b.fundo) >= 3, `${w.id} × ${b.id}`);
});
