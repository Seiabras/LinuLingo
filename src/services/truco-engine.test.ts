import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chave, rngComSemente, type CartaF } from './baralho-frances';
import {
  baralho40,
  cartaDoLinu,
  decidirOnze,
  darMao,
  forca,
  jogarCarta,
  novoJogo,
  pedirTruco,
  podePedir,
  proximaMao,
  recolher,
  responder,
  valorDaManilha,
  vencedorDaMao,
  type EstadoTruco,
} from './truco-engine';

const c = (valor: number, naipe: CartaF['naipe']): CartaF => ({ valor: valor as CartaF['valor'], naipe });

test('truco: 40 cartas, sem 8, 9 e 10', () => {
  const b = baralho40();
  assert.equal(b.length, 40);
  assert.ok(b.every((x) => x.valor < 8 || x.valor > 10));
  assert.equal(new Set(b.map(chave)).size, 40);
});

test('truco: a manilha é a carta seguinte à vira, e o zap ganha de tudo', () => {
  assert.equal(valorDaManilha(c(4, 'copas')), 5);
  assert.equal(valorDaManilha(c(7, 'copas')), 12, 'depois do 7 vem a dama');
  assert.equal(valorDaManilha(c(13, 'copas')), 1, 'depois do rei vem o ás');
  assert.equal(valorDaManilha(c(3, 'copas')), 4, 'depois do 3 volta ao 4');
  const vira = c(4, 'ouros');
  assert.ok(forca(c(5, 'paus'), vira) > forca(c(5, 'copas'), vira), 'zap > copas');
  assert.ok(forca(c(5, 'copas'), vira) > forca(c(5, 'espadas'), vira), 'copas > espadilha');
  assert.ok(forca(c(5, 'espadas'), vira) > forca(c(5, 'ouros'), vira), 'espadilha > ourinho');
  assert.ok(forca(c(5, 'ouros'), vira) > forca(c(3, 'paus'), vira), 'a manilha mais fraca ganha do 3');
  assert.ok(forca(c(3, 'ouros'), vira) > forca(c(2, 'paus'), vira));
  assert.equal(forca(c(3, 'ouros'), vira), forca(c(3, 'paus'), vira), 'nas comuns, o naipe não conta');
  assert.ok(forca(c(12, 'ouros'), vira) < forca(c(11, 'ouros'), vira), 'dama < valete < rei');
  assert.ok(forca(c(11, 'ouros'), vira) < forca(c(13, 'ouros'), vira));
});

test('truco: quem leva a mão pelas rodadas, com os empates', () => {
  assert.equal(vencedorDaMao([0, 0]), 0);
  assert.equal(vencedorDaMao([0, 1]), undefined);
  assert.equal(vencedorDaMao([0, 1, 1]), 1);
  assert.equal(vencedorDaMao(['empate', 1]), 1, 'empatou a primeira: leva quem ganha a segunda');
  assert.equal(vencedorDaMao([0, 'empate']), 0, 'empatou a segunda: leva quem ganhou a primeira');
  assert.equal(vencedorDaMao([0, 1, 'empate']), 0, 'empatou a terceira: leva quem ganhou a primeira');
  assert.equal(vencedorDaMao(['empate', 'empate']), undefined);
  assert.equal(vencedorDaMao(['empate', 'empate', 1]), 1);
  assert.equal(vencedorDaMao(['empate', 'empate', 'empate']), null, 'as três empatadas: ninguém marca');
});

/** uma mão montada à mão: o jogador 0 tem as cartas fortes */
const mao = (extra: Partial<EstadoTruco> = {}): EstadoTruco => ({
  ...darMao([0, 0], 0, rngComSemente(1)),
  vira: c(4, 'ouros'),
  maos: [
    [c(5, 'paus'), c(3, 'copas'), c(2, 'copas')],
    [c(4, 'copas'), c(6, 'espadas'), c(7, 'paus')],
  ],
  ...extra,
});

test('truco: uma mão jogada até o fim dá 1 ponto a quem vence 2 rodadas', () => {
  let s = mao();
  assert.equal(jogarCarta(s, 1, 0), s, 'fora da vez não joga');
  s = jogarCarta(s, 0, 0);
  assert.equal(s.vez, 1);
  s = jogarCarta(s, 1, 0);
  assert.equal(s.fase, 'rodada');
  s = recolher(s);
  assert.deepEqual(s.rodadas, [0]);
  assert.equal(s.vez, 0, 'quem ganhou a rodada abre a próxima');
  s = jogarCarta(jogarCarta(s, 0, 0), 1, 0);
  s = recolher(s);
  assert.equal(s.fase, 'fimMao');
  assert.deepEqual(s.resultado, { vencedor: 0, pontos: 1, motivo: 'rodadas' });
  assert.deepEqual(s.placar, [1, 0]);
  const t = proximaMao(s, rngComSemente(2));
  assert.equal(t.pe, 1, 'a mão seguinte começa com o outro');
  assert.equal(t.maos[0].length, 3);
});

test('truco: pedir, aumentar, aceitar e correr', () => {
  let s = mao();
  assert.ok(podePedir(s, 0));
  assert.ok(!podePedir(s, 1), 'só na sua vez');
  s = pedirTruco(s, 0);
  assert.equal(s.fase, 'pedido');
  assert.deepEqual(s.pedido, { de: 0, valor: 3 });
  assert.equal(responder(s, 0, 'aceitar'), s, 'quem pediu não responde o próprio pedido');
  const aceito = responder(s, 1, 'aceitar');
  assert.equal(aceito.valor, 3);
  assert.equal(aceito.fase, 'jogando');
  assert.ok(!podePedir(aceito, 0), 'quem pediu não pede de novo em seguida');

  const seis = responder(s, 1, 'aumentar');
  assert.deepEqual(seis.pedido, { de: 1, valor: 6 });
  assert.equal(seis.valor, 3, 'aumentar já aceita o truco');
  const correu = responder(seis, 0, 'correr');
  assert.equal(correu.fase, 'fimMao');
  assert.deepEqual(correu.resultado, { vencedor: 1, pontos: 3, motivo: 'correu' });

  const fugiu = responder(s, 1, 'correr');
  assert.deepEqual(fugiu.placar, [1, 0], 'correr do truco dá o valor de antes (1)');
});

test('truco: mão de onze vale 3 ou dá 1 ao outro, sem truco; de ferro, ninguém decide', () => {
  const s = darMao([11, 5], 1, rngComSemente(4));
  assert.equal(s.fase, 'onze');
  assert.equal(s.onze, 0);
  const jogou = decidirOnze(s, true);
  assert.equal(jogou.valor, 3);
  assert.ok(!podePedir({ ...jogou, vez: 1 }, 1), 'na mão de onze ninguém truca');
  assert.deepEqual(decidirOnze(s, false).placar, [11, 6]);
  const ferro = darMao([11, 11], 0, rngComSemente(4));
  assert.equal(ferro.onze, 'ferro');
  assert.equal(ferro.fase, 'jogando');
});

test('truco: a partida acaba em 12', () => {
  let s = mao({ placar: [10, 3], valor: 3 });
  s = jogarCarta(jogarCarta(s, 0, 0), 1, 0);
  s = recolher(s);
  s = jogarCarta(jogarCarta(s, 0, 0), 1, 0);
  s = recolher(s);
  assert.equal(s.fase, 'fimJogo');
  assert.equal(s.vencedor, 0);
  assert.equal(s.placar[0], 12);
});

test('truco: o Linu responde com a carta mais fraca que ganha', () => {
  let s = mao({ vez: 1, pe: 1 });
  s = { ...s, mesa: [{ j: 0, carta: c(2, 'ouros') }], vez: 1 };
  // o Linu (1) tem 4♥ (fraca), 6♠ e 7♣: nenhuma ganha do 2; joga a mais fraca
  assert.equal(chave(s.maos[1][cartaDoLinu(s, 1)]!), chave(c(4, 'copas')));
  s = { ...s, mesa: [{ j: 0, carta: c(5, 'ouros') }] };
  assert.equal(chave(s.maos[1][cartaDoLinu(s, 1)]!), chave(c(4, 'copas')), 'manilha na mesa: entrega a mais fraca');
  s = { ...s, mesa: [{ j: 0, carta: c(6, 'ouros') }] };
  assert.equal(chave(s.maos[1][cartaDoLinu(s, 1)]!), chave(c(7, 'paus')), 'ganha com a menor que ganha');
});

test('truco: partidas inteiras do Linu contra o Linu terminam sempre com alguém em 12', () => {
  for (let semente = 1; semente <= 20; semente++) {
    const rng = rngComSemente(semente);
    let s = novoJogo(0, rng);
    for (let passos = 0; passos < 5000 && s.fase !== 'fimJogo'; passos++) {
      if (s.fase === 'onze') s = decidirOnze(s, rng() < 0.7);
      else if (s.fase === 'pedido') s = responder(s, s.pedido!.de === 0 ? 1 : 0, rng() < 0.6 ? 'aceitar' : 'correr');
      else if (s.fase === 'rodada') s = recolher(s);
      else if (s.fase === 'fimMao') s = proximaMao(s, rng);
      else if (podePedir(s, s.vez) && rng() < 0.1) s = pedirTruco(s, s.vez);
      else s = jogarCarta(s, s.vez, cartaDoLinu(s, s.vez));
    }
    assert.equal(s.fase, 'fimJogo', `semente ${semente}`);
    assert.ok(s.placar.includes(12));
  }
});
