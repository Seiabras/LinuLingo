import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  arremessar,
  arremessoIdeal,
  arremessoLinu,
  casaNoPonto,
  jogarPedra,
  novoJogo,
  ondeEsta,
  passoAtual,
  pular,
  puloLinu,
  roteiro,
  TOTAL_CASAS,
  type Estado,
} from './amarelinha-engine';

test('amarelinha: o arremesso ideal cai no meio de cada casa, de 1 a 10', () => {
  for (let c = 1; c <= TOTAL_CASAS; c++) {
    const a = arremessoIdeal(c);
    assert.deepEqual(arremessar(a.direcao, a.forca), { tipo: 'casa', casa: c }, `casa ${c}`);
  }
});

test('amarelinha: cair na linha de giz, no céu ou fora do desenho não vale', () => {
  assert.equal(casaNoPonto(0, 3).tipo, 'linha'); // divisa entre a fileira 2 e a 3
  assert.equal(casaNoPonto(0, 1.5).tipo, 'linha'); // no meio da casa dupla (2|3)
  assert.equal(casaNoPonto(0.5, 2.5).tipo, 'linha'); // borda da casa simples 4
  assert.equal(casaNoPonto(0.8, 2.5).tipo, 'fora'); // ao lado da casa simples
  assert.equal(casaNoPonto(0, 7.5).tipo, 'fora'); // no céu
  assert.deepEqual(casaNoPonto(-0.5, 1.5), { tipo: 'casa', casa: 2 });
  assert.deepEqual(casaNoPonto(0.5, 1.5), { tipo: 'casa', casa: 3 });
});

test('amarelinha: o roteiro pula a casa simples da pedra e pisa com um pé na dupla', () => {
  const r4 = roteiro(4);
  const ida = r4.filter((p) => p.tipo === 'pular' && !p.volta);
  assert.ok(!ida.some((p) => p.tipo === 'pular' && p.casas.includes(4)), 'não pisa na casa 4 na ida');
  const r2 = roteiro(2);
  const f1 = r2.find((p) => p.tipo === 'pular' && p.fileira === 1 && !p.volta);
  assert.deepEqual(f1, { tipo: 'pular', fileira: 1, casas: [3], pes: 'um', volta: false });
  // casas duplas sem pedra: dois pés
  const f3 = r2.find((p) => p.tipo === 'pular' && p.fileira === 3);
  assert.equal(f3 && f3.tipo === 'pular' ? f3.pes : null, 'dois');
});

test('amarelinha: na volta, pega a pedra antes de pisar na casa dela, e sai no fim', () => {
  const r = roteiro(5);
  const iCeu = r.findIndex((p) => p.tipo === 'ceu');
  const iPegar = r.findIndex((p) => p.tipo === 'pegar');
  assert.ok(iPegar > iCeu);
  // depois de pegar, a fileira da pedra (5|6) é pisada inteira, com dois pés
  assert.deepEqual(r[iPegar + 1], { tipo: 'pular', fileira: 3, casas: [5, 6], pes: 'dois', volta: true });
  assert.equal(r[r.length - 1].tipo, 'sair');
  // pedra na 10: pula direto para o céu e pega a pedra de lá
  const r10 = roteiro(10);
  const i = r10.findIndex((p) => p.tipo === 'ceu');
  assert.equal(r10[i + 1].tipo, 'pegar');
});

function completa(s: Estado): Estado {
  const a = arremessoIdeal(s.casa[s.vez]);
  s = jogarPedra(s, a.direcao, a.forca);
  assert.equal(s.fase, 'pulando');
  while (s.fase === 'pulando' && s.ultimo?.tipo !== 'completou') {
    const p = passoAtual(s)!;
    s = pular(s, p.tipo === 'pular' ? p.pes : null, 0);
  }
  return s;
}

test('amarelinha: acertar tudo avança uma casa e passa a vez', () => {
  const s = completa(novoJogo());
  assert.deepEqual(s.casa, [2, 1]);
  assert.equal(s.vez, 1);
  assert.equal(s.fase, 'arremesso');
});

test('amarelinha: errar a casa, pisar com os pés errados ou na linha passa a vez sem avançar', () => {
  let s = novoJogo();
  const a = arremessoIdeal(3);
  s = jogarPedra(s, a.direcao, a.forca);
  assert.deepEqual(s.ultimo, { tipo: 'erro', motivo: 'casa-errada' });
  assert.equal(s.vez, 1);
  const b = arremessoIdeal(1);
  s = jogarPedra(s, b.direcao, b.forca);
  // a pedra está na 1: o primeiro salto é na casa dupla 2|3, com dois pés
  s = pular(s, 'um', 0);
  assert.deepEqual(s.ultimo, { tipo: 'erro', motivo: 'pes-errados' });
  assert.equal(s.vez, 0);
  s = jogarPedra(s, b.direcao, b.forca);
  s = pular(s, 'dois', 0.95);
  assert.deepEqual(s.ultimo, { tipo: 'erro', motivo: 'pisou-linha' });
  assert.deepEqual(s.casa, [1, 1]);
});

test('amarelinha: os pés aparecem nas casas do último salto', () => {
  let s = novoJogo();
  const a = arremessoIdeal(1);
  s = jogarPedra(s, a.direcao, a.forca);
  s = pular(s, 'dois', 0);
  assert.deepEqual(ondeEsta(s), { casas: [2, 3], ceu: false });
});

test('amarelinha: quem completa a casa 10 primeiro vence', () => {
  let s: Estado = { ...novoJogo(), casa: [10, 4] };
  s = completa(s);
  assert.equal(s.vencedor, 0);
  assert.equal(s.fase, 'fim');
  // partida curta: até a casa 3
  let c: Estado = { ...novoJogo(3), casa: [3, 1] };
  c = completa(c);
  assert.equal(c.vencedor, 0);
});

test('amarelinha: o Linu difícil acerta quase sempre; o fácil erra mais', () => {
  let semente = 7;
  const rand = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  const acertos = (nivel: 'facil' | 'dificil') => {
    let n = 0;
    for (let i = 0; i < 400; i++) {
      const casa = (i % 10) + 1;
      const t = arremessoLinu(casa, nivel, rand);
      const q = arremessar(t.direcao, t.forca);
      if (q.tipo === 'casa' && q.casa === casa) n++;
    }
    return n;
  };
  const dificil = acertos('dificil');
  const facil = acertos('facil');
  assert.ok(dificil > facil, `${dificil} > ${facil}`);
  assert.ok(dificil > 300);
  const s = jogarPedra(novoJogo(), arremessoIdeal(1).direcao, arremessoIdeal(1).forca);
  assert.equal(puloLinu(s, 'dificil', () => 0).pes, 'dois');
});
