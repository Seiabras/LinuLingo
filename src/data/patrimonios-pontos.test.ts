import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PATRIMONIOS_PAISES } from './patrimonios-paises';
import { PATRIMONIOS_PONTOS } from './patrimonios-pontos';
import { MAP_H, WORLD } from './mapa-mundi';
import { lonLatParaMapa } from '@/services/projecao';
import { toSvg, H } from '../../scripts/projecao.mjs';

test('patrimônios: todo patrimônio tem ponto no mapa, e nenhum ponto sobra', () => {
  const chaves = Object.entries(PATRIMONIOS_PAISES).flatMap(([iso, l]) => l.map((p) => `${iso}:${p.name}`));
  for (const k of chaves) assert.ok(PATRIMONIOS_PONTOS[k], `sem ponto: ${k}`);
  assert.deepEqual(Object.keys(PATRIMONIOS_PONTOS).sort(), [...chaves].sort());
});

test('patrimônios: a projeção do app é a mesma dos contornos do mapa', () => {
  assert.equal(H, MAP_H);
  for (const [lon, lat] of [[-9.2, 38.7], [139.7, 35.7], [-70, -33], [37.6, 55.75]]) {
    const { x, y } = lonLatParaMapa(lon, lat);
    const [sx, sy] = toSvg([lon, lat]);
    assert.ok(Math.abs(x - sx) < 1e-9 && Math.abs(y - sy) < 1e-9);
  }
});

/** Os anéis (polígonos) do contorno de um país, a partir do `d` do SVG (só M, L e Z). */
function aneis(d: string): [number, number][][] {
  return d
    .split('M')
    .filter(Boolean)
    .map((r) => r.replace(/Z/g, '').split('L').map((p) => p.trim().split(/\s+/).map(Number) as [number, number]));
}
function dentro(x: number, y: number, anel: [number, number][]): boolean {
  let ok = false;
  for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) {
    const [xi, yi] = anel[i];
    const [xj, yj] = anel[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok;
  }
  return ok;
}
function distBorda(x: number, y: number, anel: [number, number][]): number {
  let best = Infinity;
  for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) {
    const [ax, ay] = anel[j];
    const [bx, by] = anel[i];
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)));
    best = Math.min(best, Math.hypot(x - (ax + t * dx), y - (ay + t * dy)));
  }
  return best;
}

test('patrimônios: cada ponto cai dentro do seu país no mapa (ou colado na costa dele)', () => {
  // folga de 1,5 unidade do mapa (~15 km): ilhas e baías pequenas que o contorno 1:50m simplificou
  // (Surtsey, a baía do Monte Saint-Michel, a lagoa de Veneza) ficam fora do polígono por um triz
  for (const [k, p] of Object.entries(PATRIMONIOS_PONTOS)) {
    const c = WORLD.find((w) => w.iso === k.slice(0, 3))!;
    const { x, y } = lonLatParaMapa(p.lon, p.lat);
    const rs = aneis(c.d);
    const ok = rs.some((r) => dentro(x, y, r)) || Math.min(...rs.map((r) => distBorda(x, y, r))) < 1.5;
    assert.ok(ok, `${k} fora do contorno do país`);
  }
});
