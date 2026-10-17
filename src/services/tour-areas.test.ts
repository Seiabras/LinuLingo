import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { TOUR_MAX_TEXTO, type AreaDoTour } from './tour';
import { passosDaArea } from './tour-areas';
import { AREAS_JOGO } from '../data/outros-jogos';

const SRC = join(__dirname, '..');
const arquivos = (dir: string): string[] =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? arquivos(p) : p.endsWith('.tsx') ? [p] : [];
  });
const codigo = arquivos(SRC).map((f) => readFileSync(f, 'utf8'));
// os alvos marcados nas telas, inclusive os das abas do Lazer (`lazer-${area}`)
const ALVOS = new Set([...codigo.flatMap((c) => [...c.matchAll(/alvoDoTour\('([^']+)'\)/g)].map((m) => m[1])), ...AREAS_JOGO.map((a) => `lazer-${a.id}`)]);
const existeRota = (rota: string) =>
  [join(SRC, 'app', '(tabs)', `${rota.slice(1)}.tsx`), join(SRC, 'app', `${rota.slice(1)}.tsx`)].some((f) => existsSync(f));

for (const area of ['lazer', 'musica', 'biologia', 'psicologia'] as AreaDoTour[]) {
  test(`passeio da área ${area}: balões curtos, páginas e alvos que existem, apoio no penúltimo`, () => {
    const passos = passosDaArea(area);
    assert.equal(new Set(passos.map((p) => p.id)).size, passos.length, 'passo repetido');
    for (const p of passos) {
      assert.ok(p.texto.length <= TOUR_MAX_TEXTO, `${p.id}: ${p.texto.length} caracteres`);
      assert.ok(existeRota(p.rota), `${p.id}: a página ${p.rota} não existe`);
      if (p.alvo) assert.ok(ALVOS.has(p.alvo), `${p.id}: o alvo ${p.alvo} não está em nenhuma tela`);
    }
    assert.equal(passos[passos.length - 2].rota, '/apoiar', 'o penúltimo passo é o apoio');
  });
}
