import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { animacoesDoJogo, DEFAULT_ACCESS_PREFS, loadAccessPrefs, movimentoReduzido, saveAccessPrefs, segundosDoSprint, VOZ_FATOR } from './acessibilidade-prefs';

test('acessibilidade: o tempo do Sprint segue a preferência', () => {
  assert.equal(segundosDoSprint(300, 'normal'), 300);
  assert.equal(segundosDoSprint(300, 'dobro'), 600);
  assert.equal(segundosDoSprint(300, 'livre'), null);
});

test('acessibilidade: a velocidade da voz vira um fator para toda fala', () => {
  assert.equal(VOZ_FATOR.normal, 1);
  assert.ok(VOZ_FATOR.devagar < 1 && VOZ_FATOR['bem-devagar'] < VOZ_FATOR.devagar);
  // as gravações não tocam abaixo de 0,5×
  assert.ok(VOZ_FATOR['bem-devagar'] >= 0.5);
});

test('acessibilidade: preferências salvas antes das opções novas ganham os padrões', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await db.runAsync(`INSERT OR REPLACE INTO Meta (key, value) VALUES ('access', ?)`, JSON.stringify({ reduceMotion: true, textScale: 'grande' }));
  // o interruptor antigo “Reduzir movimento” ligado vira 'reduzir'
  assert.deepEqual(await loadAccessPrefs(db), { ...DEFAULT_ACCESS_PREFS, movimento: 'reduzir', textScale: 'grande' });
  const novas = { ...DEFAULT_ACCESS_PREFS, altoContraste: true, tempoSprint: 'livre' as const };
  await saveAccessPrefs(db, novas);
  assert.deepEqual(await loadAccessPrefs(db), novas);
});

test('acessibilidade: “Sempre animar” e “Reduzir” valem por cima do aparelho; o padrão segue o aparelho', () => {
  assert.equal(DEFAULT_ACCESS_PREFS.movimento, 'aparelho');
  assert.equal(movimentoReduzido('aparelho', true), true);
  assert.equal(movimentoReduzido('aparelho', false), false);
  assert.equal(movimentoReduzido('animar', true), false);
  assert.equal(movimentoReduzido('reduzir', false), true);
});

test('jogos: “Animações” segue o aparelho até a pessoa escolher; escolhida, vale por cima dele, menos do “Reduzir”', () => {
  // ainda sem escolha: segue o aparelho
  assert.deepEqual(animacoesDoJogo({ animacoes: true }, 'aparelho', true), { ligadas: false, porCima: false });
  assert.deepEqual(animacoesDoJogo({ animacoes: true }, 'aparelho', false), { ligadas: true, porCima: false });
  // escolhida e ligada: anima mesmo com o aparelho pedindo menos movimento
  assert.deepEqual(animacoesDoJogo({ animacoes: true, animacoesEscolhida: true }, 'aparelho', true), { ligadas: true, porCima: true });
  // quem desligou antes desta opção conta como quem escolheu
  assert.deepEqual(animacoesDoJogo({ animacoes: false }, 'aparelho', false), { ligadas: false, porCima: false });
  // o “Reduzir” do Perfil vale por cima de tudo
  assert.deepEqual(animacoesDoJogo({ animacoes: true, animacoesEscolhida: true }, 'reduzir', false), { ligadas: false, porCima: false });
  // “Sempre animar” no Perfil: o aparelho não conta
  assert.deepEqual(animacoesDoJogo({ animacoes: true }, 'animar', true), { ligadas: true, porCima: false });
});
