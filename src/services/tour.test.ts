/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { encerrarTour, estadoDoTour, iniciarTour, iniciarTourNoApoio, irParaPasso, passosDoTour, sairDoTour, TOUR_MAX_TEXTO } from './tour';
import { findLesson } from './curriculum';
import { PACKS } from '../data/idiomas';

const SRC = join(__dirname, '..');
const arquivos = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? arquivos(p) : p.endsWith('.tsx') ? [p] : [];
  });
const codigo = arquivos(SRC).map((f) => readFileSync(f, 'utf8'));
// os alvos marcados nas telas: `alvoDoTour('mapa')`, e os cartões de prática, `pratica:/rota`
const ALVOS = new Set(codigo.flatMap((c) => [...c.matchAll(/alvoDoTour\('([^']+)'\)/g)].map((m) => m[1])));
const home = readFileSync(join(SRC, 'screens', 'HomeScreen.tsx'), 'utf8');
// além das abas: a página do apoio (os jogos saíram para a área Lazer, que tem as abas dela)
const ROTAS = new Set(['/', '/vocabulario', '/gramatica', '/cultura', '/mapa', '/conversa', '/comunidade', '/perfil', '/apoiar']);

test('tutorial: um balão curto por passo, sempre numa página e num alvo que existem', () => {
  for (const pack of Object.values(PACKS)) {
    for (const web of [true, false]) {
      const passos = passosDoTour(pack, { web });
      assert.equal(new Set(passos.map((p) => p.id)).size, passos.length, `${pack.code}: passo repetido`);
      for (const p of passos) {
        assert.ok(p.texto.length <= TOUR_MAX_TEXTO, `${pack.code}/${p.id}: balão com ${p.texto.length} letras`);
        assert.ok(p.titulo.length <= 40, `${pack.code}/${p.id}: título comprido`);
        assert.ok(ROTAS.has(p.rota), `${pack.code}/${p.id}: rota ${p.rota}`);
        if (!p.alvo) continue;
        if (p.alvo.startsWith('pratica:')) assert.ok(home.includes(`route: '${p.alvo.slice(8)}'`), `${pack.code}/${p.id}: sem o cartão ${p.alvo}`);
        else assert.ok(ALVOS.has(p.alvo), `${pack.code}/${p.id}: alvo ${p.alvo} não está marcado em nenhuma tela`);
      }
      // começa e termina na trilha
      assert.equal(passos[0].rota, '/');
      assert.equal(passos.at(-1)!.rota, '/');
    }
  }
});

test('tutorial: toda "fazer agora" aponta para uma rota real, e a da 1ª lição existe de verdade', () => {
  for (const pack of Object.values(PACKS)) {
    for (const web of [true, false]) {
      for (const p of passosDoTour(pack, { web })) {
        if (!p.acao) continue;
        assert.ok(p.acao.rota.startsWith('/'), `${pack.code}/${p.id}: rota da ação não começa com /`);
        assert.ok(p.acao.rotulo.length > 0 && p.acao.rotulo.length <= 30, `${pack.code}/${p.id}: rótulo da ação`);
        if (p.id === 'etapas') {
          const id = p.acao.rota.replace('/licao/', '');
          assert.ok(findLesson(pack, id), `${pack.code}: a 1ª lição do tutorial (${id}) não existe no pacote`);
        }
      }
    }
  }
});

test('tutorial: os avisos de cada idioma só aparecem onde fazem sentido', () => {
  const ids = (code: string) => passosDoTour(PACKS[code], { web: true }).map((p) => p.id);
  assert.ok(ids('ru').includes('escrita'));
  assert.ok(ids('ja').includes('escrita'));
  assert.ok(!ids('ro').includes('escrita'));
  // espanhol ganhou o alfabeto latino oficial completo (08/10/2026, alfabeto-auto.ts) mesmo tendo só
  // 1 letra extra (ñ) — não é "escrita diferente" nenhuma, continua sendo o nosso alfabeto
  assert.ok(!ids('es').includes('escrita'));
  assert.ok(ids('es').includes('falsos-amigos'));
  assert.ok(!passosDoTour(PACKS.ro, { web: false }).some((p) => p.id === 'app'));
});

test('tutorial: o penúltimo passo é sempre o apoio, e quem pula vê o apoio mesmo assim', () => {
  for (const pack of Object.values(PACKS)) {
    for (const web of [true, false]) {
      const passos = passosDoTour(pack, { web });
      assert.equal(passos.at(-2)!.id, 'apoio', `${pack.code}: o apoio não é o penúltimo`);
      assert.equal(passos.at(-2)!.rota, '/apoiar');
    }
  }
  // a lógica de sair: antes do apoio, pula para ele; do apoio em diante (ou já saindo), encerra
  const total = 20;
  iniciarTour();
  irParaPasso(3);
  sairDoTour(3, total);
  assert.deepEqual(estadoDoTour(), { passo: 18, saindo: true });
  sairDoTour(18, total);
  assert.equal(estadoDoTour(), null);
  irParaPasso(19);
  sairDoTour(19, total);
  assert.equal(estadoDoTour(), null, 'no último passo, sair encerra');
  iniciarTourNoApoio();
  assert.deepEqual(estadoDoTour(), { passo: 0, saindo: true }, 'quem pula a abertura vai para o apoio');
  encerrarTour();
});

test('tutorial: os passos novos apontam para telas que existem', () => {
  assert.ok(statSync(join(SRC, 'app', 'apoiar.tsx')).isFile());
  const ids = passosDoTour(PACKS.es, { web: true }).map((p) => p.id);
  for (const id of ['passaporte', 'areas', 'apoio']) assert.ok(ids.includes(id), `falta o passo ${id}`);
});
