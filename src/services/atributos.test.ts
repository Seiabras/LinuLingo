import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { awardXp, completeLesson, reviewWord, saveJournal, saveShadowing, setMeta, submitToCommunity } from '@/database/queries';
import { ROMENO } from '@/data/ro';
import { calcularAtributos, DADOS_VAZIOS, lerDadosAtributos, limiarDoNivel, nivelDosPontos, pontoFraco, quizMelhorKey } from './atributos';

test('atributos: níveis em 5, 15, 30, 50… com a barra até o próximo', () => {
  assert.deepEqual([1, 2, 3, 4, 5].map(limiarDoNivel), [5, 15, 30, 50, 75]);
  assert.deepEqual(nivelDosPontos(0), { nivel: 0, progresso: 0, faltam: 5 });
  assert.equal(nivelDosPontos(4).nivel, 0);
  assert.equal(nivelDosPontos(5).nivel, 1);
  assert.deepEqual(nivelDosPontos(10), { nivel: 1, progresso: 0.5, faltam: 5 });
  assert.equal(nivelDosPontos(15).nivel, 2);
  assert.equal(nivelDosPontos(-3).nivel, 0, 'nunca negativo');
});

test('atributos: sem nada feito, tudo no zero e com a dica de por onde começar', () => {
  const a = calcularAtributos(DADOS_VAZIOS);
  assert.deepEqual(
    a.map((x) => x.id),
    ['vocabulario', 'escuta', 'fala', 'escrita', 'gramatica'],
  );
  for (const x of a) {
    assert.equal(x.pontos, 0);
    assert.equal(x.nivel, 0);
    assert.ok(x.origem.length > 10, `${x.nome} explica de onde vem`);
  }
  assert.equal(pontoFraco(a)?.id, 'vocabulario', 'no empate, o primeiro');
});

test('atributos: os pontos saem só dos números de verdade', () => {
  const a = calcularAtributos({
    ...DADOS_VAZIOS,
    palavrasVistas: 41,
    palavrasDominadas: 10,
    escutaAcertadas: 6,
    escutaDominadas: 2,
    paresAcertos: 7,
    licoesVoz: 2,
    conversas: 1,
    frasesShadowing: 3,
    diasDiario: 1,
    quizAcertos: 5,
    topicosGramatica: 2,
    licoes: 4,
  });
  const by = Object.fromEntries(a.map((x) => [x.id, x]));
  assert.equal(by.vocabulario.pontos, 20 + 10);
  assert.equal(by.vocabulario.nivel, 3);
  assert.match(by.vocabulario.origem, /41 palavras vistas · 10 dominadas/);
  assert.equal(by.escuta.pontos, 6 + 4 + 3);
  assert.match(by.escuta.origem, /7 acertos nos pares mínimos/);
  assert.equal(by.fala.pontos, 6 + 4 + 6);
  assert.match(by.fala.origem, /1 conversa no rádio/);
  assert.equal(by.escrita.pontos, 4);
  assert.match(by.escrita.origem, /^1 dia de diário$/);
  assert.equal(by.gramatica.pontos, 10 + 4);
  assert.match(by.gramatica.origem, /2 mini-quizzes \(5 acertos\)/);
  assert.equal(pontoFraco(a)?.id, 'escrita');
});

test('atributos: lidos do banco, só do idioma estudado', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const pack = ROMENO;
  const vazio = await lerDadosAtributos(db, pack);
  assert.deepEqual(vazio, DADOS_VAZIOS);

  // vocabulário: 3 palavras vistas, 1 dominada (3 revisões certas)
  const words = await db.getAllAsync<{ id: string }>(`SELECT id FROM Vocabulary WHERE language = 'ro' ORDER BY frequency_rank LIMIT 3`);
  for (const w of words) await reviewWord(db, w.id, 5);
  await reviewWord(db, words[0].id, 5);
  await reviewWord(db, words[0].id, 5);
  // lições: uma comum e uma de conversa; a prova não conta aqui (é o cachecol)
  const [u1] = pack.units;
  const licao = u1.lessons.find((l) => l.kind === 'licao')!;
  const voz = u1.lessons.find((l) => l.kind === 'voz')!;
  const prova = u1.lessons.find((l) => l.kind === 'prova')!;
  await completeLesson(db, licao.id, 0.9);
  await completeLesson(db, voz.id, 1);
  await completeLesson(db, prova.id, 1);
  // escuta: uma palavra acertada, uma dominada, uma errada; pares: 3 acertos
  await setMeta(db, 'escuta_prog_ro', JSON.stringify({ casă: 1, apă: 4, pâine: -2 }));
  await setMeta(db, 'pares_prog_ro', JSON.stringify({ 'ă-a': [2, 3], 'î-i': [1, 1] }));
  // de outro idioma: não entra
  await setMeta(db, 'escuta_prog_es', JSON.stringify({ casa: 9 }));
  // conversa do rádio (duas vezes a mesma) e mini-quiz (o melhor resultado vale)
  await awardXp(db, 12, `conversa:${pack.scenarios[0].id}`);
  await awardXp(db, 8, `conversa:${pack.scenarios[0].id}`);
  await awardXp(db, 12, 'conversa:es-s1');
  const topic = pack.grammar.find((g) => g.quiz.length >= 3)!;
  // (o melhor resultado vale, mesmo com o XP da repetição pela metade)
  await setMeta(db, quizMelhorKey(topic.id), '1');
  await awardXp(db, 2, `gramatica:${topic.id}`);
  await setMeta(db, quizMelhorKey(topic.id), '3');
  await awardXp(db, 6, `gramatica:${topic.id}`);
  // shadowing: uma frase boa do romeno, uma ruim e uma de outro idioma
  await saveShadowing(db, pack.shadowing[0][0], 80, true);
  await saveShadowing(db, pack.shadowing[0][0], 90, null);
  await saveShadowing(db, pack.shadowing[1][0], 40, true);
  await saveShadowing(db, '¡Hola! ¿Qué tal?', 95, true);
  // diário: duas entradas no mesmo dia contam um dia
  // (direto no banco: o id da entrada é a hora em ms, e três seguidas no teste caem no mesmo ms)
  const diario = (id: string, lang: string, day: string) =>
    db.runAsync(`INSERT INTO User_Journal_Logs (id, user_id, language, created_at, day, raw_user_input) VALUES (?, 'local', ?, ?, ?, 'x')`, id, lang, `${day}T10:00:00Z`, day);
  await saveJournal(db, 'ro', '2026-10-01', 'p', 'Eu scriu.', 'Eu scriu.');
  await diario('j-2', 'ro', '2026-10-01');
  await diario('j-3', 'es', '2026-10-02');
  await submitToCommunity(db, 'ro', null, 'p', 'Un text.');

  const d = await lerDadosAtributos(db, pack);
  assert.equal(d.palavrasVistas, 3);
  assert.equal(d.palavrasDominadas, 1);
  assert.equal(d.licoes, 1);
  assert.equal(d.licoesVoz, 1);
  assert.equal(d.escutaAcertadas, 2);
  assert.equal(d.escutaDominadas, 1);
  assert.equal(d.paresAcertos, 3);
  assert.equal(d.conversas, 1);
  assert.equal(d.topicosGramatica, 1);
  assert.equal(d.quizAcertos, 3);
  assert.equal(d.frasesShadowing, 1);
  assert.equal(d.diasDiario, 1);
  assert.equal(d.textosComunidade, 1);
  assert.equal(d.audiosComunidade, 0);
});

test('atributos: progresso guardado estragado não quebra a ficha', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await setMeta(db, 'escuta_prog_ro', '{nada');
  await setMeta(db, 'pares_prog_ro', '"texto"');
  const d = await lerDadosAtributos(db, ROMENO);
  assert.equal(d.escutaAcertadas, 0);
  assert.equal(d.paresAcertos, 0);
});
