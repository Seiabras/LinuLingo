import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BUSCA_FANORONA, BUSCA_KALAH, escolherLance, NIVEIS } from './jogos-ia';
import * as Kalah from './kalah-engine';
import * as Fanorona from './fanorona-engine';

// sorteio repetível, para o teste dar sempre o mesmo resultado
const semente = () => {
  let x = 7;
  return () => ((x = (x * 9301 + 49297) % 233280) / 233280);
};

test('Linu no kalah: aproveita a vez extra e a captura, e joga uma partida inteira só com lances que valem', () => {
  // olhando um lance só, ele joga a casa 2 (as 4 sementes terminam no depósito: vez extra)
  assert.equal(escolherLance(Kalah.createInitialState(), 1, BUSCA_KALAH), 2);
  // a casa 1 tem 1 semente, a 2 está vazia e a da frente (10) tem 10: a captura é o melhor lance
  const s = Kalah.createInitialState();
  s.covas[1] = 1;
  s.covas[2] = 0;
  s.covas[10] = 10;
  assert.equal(escolherLance(s, NIVEIS.kalah.medio.prof, BUSCA_KALAH), 1);
  let p = Kalah.createInitialState();
  const r = semente();
  for (let k = 0; k < 200 && p.winner === null; k++) {
    const nivel = p.turn === 0 ? NIVEIS.kalah.facil : NIVEIS.kalah.dificil;
    const m = escolherLance(p, nivel.prof, BUSCA_KALAH, nivel.ruido, r);
    assert.ok(m !== null && Kalah.lancesLegais(p).includes(m));
    p = Kalah.jogar(p, m);
  }
  assert.notEqual(p.winner, null, 'a partida termina');
  assert.equal(p.covas[6]! + p.covas[13]!, 48);
});

test('Linu no fanorona: escolhe a captura maior e pensa rápido no nível difícil', () => {
  const s = Fanorona.createInitialState();
  const t0 = Date.now();
  const m = escolherLance(s, NIVEIS.fanorona.dificil.prof, BUSCA_FANORONA);
  assert.ok(Date.now() - t0 < 3000, `demorou ${Date.now() - t0} ms`);
  assert.ok(m && m !== 'parar' && m.tipo !== null);
});

test('Linu no fanorona: uma partida Linu contra Linu só tem lances que valem', () => {
  let p = Fanorona.createInitialState();
  const r = semente();
  for (let k = 0; k < 400 && p.winner === null; k++) {
    const nivel = NIVEIS.fanorona.facil;
    const m = escolherLance(p, nivel.prof, BUSCA_FANORONA, nivel.ruido, r);
    assert.ok(m !== null);
    const antes = p;
    p = m === 'parar' ? Fanorona.encerrarVez(p) : Fanorona.jogar(p, m);
    assert.notEqual(p, antes, 'o lance mudou a partida');
  }
  assert.ok(Fanorona.contar(p, 'w') + Fanorona.contar(p, 'b') < 44, 'houve capturas');
});
