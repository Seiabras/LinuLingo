import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chave, rngComSemente, type CartaF } from './baralho-frances';
import {
  cartaDoComputador,
  darMao,
  escolhaParaPassar,
  ganhadorDaVaza,
  jogar,
  jogaveis,
  novoJogo,
  passagemDaMao,
  passar,
  proximaMao,
  recolher,
  type EstadoCopas,
  type Lugar,
} from './copas-engine';

const c = (valor: number, naipe: CartaF['naipe']): CartaF => ({ valor: valor as CartaF['valor'], naipe });

test('copas: 13 cartas para cada um e a passagem esquerda, direita, frente, sem passar', () => {
  const s = novoJogo(rngComSemente(1));
  assert.deepEqual(s.maos.map((m) => m.length), [13, 13, 13, 13]);
  assert.equal(new Set(s.maos.flat().map(chave)).size, 52);
  assert.deepEqual([0, 1, 2, 3, 4].map(passagemDaMao), [1, 3, 2, 0, 1]);
  assert.equal(s.fase, 'passar');
  assert.equal(darMao([0, 0, 0, 0], 3, rngComSemente(1)).fase, 'jogando', 'a quarta mão não passa');
});

test('copas: passar 3 para a esquerda, e o 2 de paus abre', () => {
  const s = novoJogo(rngComSemente(2));
  const escolhas = s.maos.map((m) => m.slice(0, 3)) as EstadoCopas['maos'];
  const t = passar(s, escolhas);
  assert.equal(t.fase, 'jogando');
  // o lugar 1 (à esquerda do 0) recebeu as 3 do 0
  for (const x of escolhas[0]) assert.ok(t.maos[1].some((y) => chave(y) === chave(x)));
  assert.deepEqual(jogaveis(t, t.vez).map(chave), ['2-paus']);
  assert.equal(passar(s, [escolhas[0].slice(0, 2), escolhas[1], escolhas[2], escolhas[3]] as EstadoCopas['maos']), s, 'precisa de 3 cartas');
});

const montar = (maos: CartaF[][], extra: Partial<EstadoCopas> = {}): EstadoCopas => ({
  ...darMao([0, 0, 0, 0], 3, rngComSemente(9)),
  maos: maos as EstadoCopas['maos'],
  fase: 'jogando',
  vazas: 1,
  mesa: [],
  vez: 0,
  ...extra,
});

test('copas: seguir o naipe, copas só abre depois de quebrada', () => {
  const s = montar([[c(5, 'copas'), c(9, 'paus')], [c(3, 'paus'), c(4, 'copas')], [c(10, 'ouros')], [c(12, 'espadas')]]);
  assert.deepEqual(jogaveis(s, 0).map(chave), ['9-paus'], 'copas ainda não quebrada');
  assert.deepEqual(jogaveis({ ...s, quebrada: true }, 0).length, 2);
  assert.deepEqual(jogaveis(montar([[c(5, 'copas'), c(7, 'copas')], [], [], []]), 0).length, 2, 'só copas na mão: pode abrir com copas');
  const t = jogar(s, 0, c(9, 'paus'));
  assert.deepEqual(jogaveis(t, 1).map(chave), ['3-paus'], 'tem paus: segue paus');
});

test('copas: quem leva a vaza, os pontos e fazer a lua', () => {
  assert.equal(ganhadorDaVaza([{ l: 0, carta: c(5, 'paus') }, { l: 1, carta: c(1, 'copas') }, { l: 2, carta: c(1, 'paus') }, { l: 3, carta: c(13, 'paus') }]), 2, 'o ás é a mais alta, e copas não corta');
  // última vaza: o lugar 2 leva tudo o que faltava; com as levadas, fez a lua
  const levadas: EstadoCopas['levadas'] = [[], [], [...Array.from({ length: 12 }, (_, i) => c(i + 2, 'copas'))], []];
  let s = montar([[c(3, 'paus')], [c(12, 'espadas')], [c(1, 'paus')], [c(1, 'copas')]], { levadas, vazas: 12, quebrada: true, vez: 0 });
  s = jogar(jogar(jogar(jogar(s, 0, c(3, 'paus')), 1, c(12, 'espadas')), 2, c(1, 'paus')), 3, c(1, 'copas'));
  s = recolher(s);
  assert.deepEqual(s.resultado, { pontos: [26, 26, 0, 26], lua: 2 });
  assert.equal(s.fase, 'fimMao');
});

test('copas: a partida acaba em 100 e ganha o menor placar', () => {
  let s = montar([[c(3, 'paus')], [c(12, 'espadas')], [c(1, 'paus')], [c(5, 'paus')]], { placar: [10, 90, 50, 40], vazas: 12, vez: 0 });
  s = jogar(jogar(jogar(jogar(s, 0, c(3, 'paus')), 1, c(12, 'espadas')), 2, c(1, 'paus')), 3, c(5, 'paus'));
  s = recolher(s);
  // o lugar 2 levou a dama (13): 63; ninguém passou de 100
  assert.equal(s.placar[2], 63);
  assert.equal(s.fase, 'fimMao');
});

test('copas: o computador passa a dama de espadas e se livra dela quando não tem o naipe', () => {
  assert.ok(escolhaParaPassar([c(12, 'espadas'), c(3, 'paus'), c(4, 'paus'), c(5, 'ouros'), c(2, 'copas')]).some((x) => chave(x) === '12-espadas'));
  const s = montar([[c(9, 'paus')], [c(12, 'espadas'), c(2, 'copas')], [], []], { mesa: [{ l: 0, carta: c(9, 'paus') }], vez: 1 });
  assert.equal(chave(cartaDoComputador(s, 1)), '12-espadas');
});

test('copas: partidas inteiras do computador terminam com alguém em 100 e as 52 cartas contadas', () => {
  for (let semente = 1; semente <= 10; semente++) {
    const rng = rngComSemente(semente);
    let s = novoJogo(rng);
    for (let passos = 0; passos < 20000 && s.fase !== 'fimJogo'; passos++) {
      if (s.fase === 'passar') s = passar(s, s.maos.map(escolhaParaPassar) as EstadoCopas['maos']);
      else if (s.fase === 'vaza') s = recolher(s);
      else if (s.fase === 'fimMao') s = proximaMao(s, rng);
      else {
        const antes = s;
        s = jogar(s, s.vez, cartaDoComputador(s, s.vez as Lugar));
        assert.notEqual(s, antes, 'jogada inválida do computador');
        const total = s.maos.flat().length + s.levadas.flat().length + s.mesa.length;
        assert.equal(total, 52);
      }
    }
    assert.equal(s.fase, 'fimJogo', `semente ${semente}`);
    assert.ok(s.placar.some((p) => p >= 100));
  }
});
