import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONLANGS } from './tipos-de-linguas';
import { WORLD } from './mapa-mundi';
import { MAPAS_CONLANGS, mapaDoConlang, type ParadaCongresso, type ParadaFiccao } from './mapa-conlangs';

// Os nomes de `PIXEL_ART` (src/components/PixelIcon.tsx); não importamos o módulo aqui porque ele
// carrega react-native/react-native-svg, que o runner de testes (node:test, sem bundler de app) não
// sabe transformar.
const ICONES_CONHECIDOS = ['pinguim', 'estacao', 'vulcao', 'correio', 'canal', 'iceberg', 'onda', 'baleia', 'ancora', 'cidade', 'torre', 'casas', 'obra', 'chave'];

test('mapa dos conlangs: toda entrada aponta para um id real de CONLANGS, com evento/mundo e fonte preenchidos', () => {
  const ids = new Set(CONLANGS.map((c) => c.id));
  for (const [key, mapa] of Object.entries(MAPAS_CONLANGS)) {
    assert.equal(mapa.idConlang, key, `a chave ${key} devia ser igual a idConlang`);
    assert.ok(ids.has(mapa.idConlang), `${key}: não existe em CONLANGS`);
    assert.ok(mapa.fonte.trim().length > 0, `${key}: fonte vazia`);
    if (mapa.tipo === 'congresso') assert.ok(mapa.evento.trim().length > 0, `${key}: evento vazio`);
    if (mapa.tipo === 'ficcao') assert.ok(mapa.mundo.trim().length > 0, `${key}: mundo vazio`);
  }
});

test('mapa dos conlangs: toda entrada tem pelo menos uma parada, sem campo vazio', () => {
  for (const [key, mapa] of Object.entries(MAPAS_CONLANGS)) {
    assert.ok(mapa.paradas.length > 0, `${key}: sem nenhuma parada`);
    if (mapa.tipo === 'congresso') {
      for (const p of mapa.paradas as ParadaCongresso[]) {
        assert.ok(p.cidade.trim().length > 0, `${key}: cidade vazia`);
        assert.ok(p.iso.trim().length > 0, `${key}: iso vazio`);
        assert.ok(Number.isFinite(p.ano) && p.ano > 1800, `${key}/${p.cidade}: ano inválido`);
        assert.ok(Number.isFinite(p.lat) && p.lat >= -90 && p.lat <= 90, `${key}/${p.cidade}: lat inválida`);
        assert.ok(Number.isFinite(p.lon) && p.lon >= -180 && p.lon <= 180, `${key}/${p.cidade}: lon inválida`);
      }
    } else {
      for (const p of mapa.paradas as ParadaFiccao[]) {
        assert.ok(p.nome.trim().length > 0, `${key}: nome de parada vazio`);
        assert.ok(p.nota.trim().length > 0, `${key}/${p.nome}: nota vazia`);
        assert.ok(ICONES_CONHECIDOS.includes(p.icone), `${key}/${p.nome}: ícone "${p.icone}" não está na lista conhecida de PixelIcon`);
      }
    }
  }
});

test('mapa dos conlangs: o congresso só usa países que existem no mapa-múndi (WORLD)', () => {
  for (const [key, mapa] of Object.entries(MAPAS_CONLANGS)) {
    if (mapa.tipo !== 'congresso') continue;
    for (const p of mapa.paradas) {
      assert.ok(WORLD.some((w) => w.iso === p.iso), `${key}/${p.cidade}: país "${p.iso}" não existe em WORLD`);
    }
  }
});

test('mapa dos conlangs: as paradas de congresso vêm em ordem cronológica', () => {
  for (const [key, mapa] of Object.entries(MAPAS_CONLANGS)) {
    if (mapa.tipo !== 'congresso') continue;
    const anos = mapa.paradas.map((p) => p.ano);
    const ordenado = [...anos].sort((a, b) => a - b);
    assert.deepEqual(anos, ordenado, `${key}: as sedes não estão em ordem cronológica`);
  }
});

test('mapaDoConlang: acha o mapa pelo id, ou undefined se não existe', () => {
  assert.equal(mapaDoConlang('esperanto')?.tipo, 'congresso');
  assert.equal(mapaDoConlang('klingon')?.tipo, 'ficcao');
  assert.equal(mapaDoConlang('quenya')?.tipo, 'ficcao');
  assert.equal(mapaDoConlang('navi')?.tipo, 'ficcao');
  assert.equal(mapaDoConlang('sindarin'), undefined);
});
