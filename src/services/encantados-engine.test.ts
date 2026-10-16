import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BARALHO,
  META,
  TIPOS,
  aplicar,
  idsDe,
  jogadaDoLinu,
  novaPartida,
  pontosDaMao,
  grupoTravado,
  pontosDe,
  pontosDoJardim,
  proximaRodada,
  quemAge,
  quemComecaProxima,
  tipoDe,
  validar,
  type Estado,
  type NoJardim,
  type Raca,
  type Tipo,
} from './encantados-engine';

/** gerador fixo (mulberry32) */
function semente(s: number) {
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Um estado montado à mão: as cartas de cada tipo saem em ordem de `idsDe`. */
function montar(opts: { maos: Tipo[][]; jardins?: [Raca | string, Tipo][][]; baralho?: Tipo[]; descBusca?: Tipo[]; descFim?: Tipo[]; fase?: Estado['fase'] }): Estado {
  const usados = new Set<number>();
  const pega = (t: Tipo) => {
    const id = idsDe(t).find((x) => !usados.has(x));
    if (id === undefined) throw new Error(`acabaram as cartas de ${t}`);
    usados.add(id);
    return id;
  };
  const maos = opts.maos.map((m) => m.map(pega));
  const jardins = (opts.jardins ?? opts.maos.map(() => [])).map((jd) => jd.map(([grupo, t]) => ({ id: pega(t), grupo }) as NoJardim));
  const e = novaPartida(semente(1));
  return {
    ...e,
    maos,
    jardins,
    baralho: (opts.baralho ?? []).map(pega),
    descBusca: (opts.descBusca ?? []).map(pega),
    descFim: (opts.descFim ?? []).map(pega),
    fase: opts.fase ?? 'baixar',
  };
}

test('baralho: 60 cartas, com as quantidades e os pontos da 3ª edição', () => {
  assert.equal(BARALHO.length, 60);
  const conta = (t: Tipo) => idsDe(t).length;
  for (const t of ['anoes', 'elfos', 'fadas', 'faunos', 'fogos', 'gnomos', 'leprechauns', 'mimicos'] as Tipo[]) assert.equal(conta(t), 5, t);
  for (const t of ['trolls', 'goblins', 'kobolds'] as Tipo[]) assert.equal(conta(t), 4, t);
  assert.deepEqual([conta('verao'), conta('outono'), conta('inverno'), conta('primavera')], [1, 2, 2, 3]);
  assert.equal(TIPOS.leprechauns.valor, -4);
  assert.equal(TIPOS.mimicos.valor, -3);
  assert.equal(TIPOS.verao.valor, -3);
  assert.equal(TIPOS.elfos.valor, 3);
});

test('distribuição: 10 cartas cada com 2 jogadores, 9 com 3; pilhas de descarte vazias', () => {
  const e = novaPartida(semente(7));
  assert.deepEqual(e.maos.map((m) => m.length), [10, 10]);
  assert.equal(e.baralho.length, 40);
  assert.equal(e.descBusca.length + e.descFim.length, 0);
  const todas = [...e.baralho, ...e.maos.flat()].sort((a, b) => a - b);
  assert.deepEqual(todas, BARALHO.map((c) => c.id));
  const e3 = novaPartida(semente(7), 3);
  assert.deepEqual(e3.maos.map((m) => m.length), [9, 9, 9]);
  assert.equal(e3.baralho.length, 33);
  // a sorte é injetável: a mesma semente dá a mesma distribuição
  assert.deepEqual(novaPartida(semente(7)).maos, e.maos);
});

test('compra: não dá para pegar de pilha vazia; a busca olha 2, fica com 1 e a outra vai ao descarte de busca', () => {
  let e = montar({ maos: [['anoes'], ['fadas']], baralho: ['elfos', 'gnomos', 'trolls'], fase: 'comprar' });
  assert.match(validar(e, { t: 'comprarDescarte', pilha: 'fim' })!, /vazia/);
  e = aplicar(e, { t: 'buscar' });
  assert.equal(e.pendente?.t, 'busca');
  const rev = (e.pendente as { reveladas: number[] }).reveladas;
  assert.deepEqual(rev.map(tipoDe), ['trolls', 'gnomos']);
  e = aplicar(e, { t: 'ficar', carta: rev[1]! });
  assert.deepEqual(e.maos[0]!.map(tipoDe), ['anoes', 'gnomos']);
  assert.deepEqual(e.descBusca.map(tipoDe), ['trolls']);
  assert.equal(e.fase, 'baixar');
});

test('compra do descarte: só a de cima; com 2 anões, qualquer carta da pilha', () => {
  const base = { maos: [['fadas', 'fadas'], ['elfos']] as Tipo[][], descFim: ['trolls', 'goblins'] as Tipo[], fase: 'comprar' as const };
  const e = montar(base);
  const trolls = e.descFim[0]!;
  assert.match(validar(e, { t: 'comprarDescarte', pilha: 'fim', carta: trolls })!, /anões/);
  const topo = aplicar(e, { t: 'comprarDescarte', pilha: 'fim' });
  assert.equal(tipoDe(topo.maos[0]!.at(-1)!), 'goblins');
  const comAnoes = montar({ ...base, jardins: [[['anoes', 'anoes'], ['anoes', 'anoes']], []] });
  const id = comAnoes.descFim[0]!;
  const d = aplicar(comAnoes, { t: 'comprarDescarte', pilha: 'fim', carta: id });
  assert.ok(d.maos[0]!.includes(id));
});

test('elfos: a busca olha 3 só com 3 elfos, ou 2 com fogos-fátuos, ou 2 com um mímico de elfo', () => {
  const olha = (jardim: [string, Tipo][]) => {
    const e = aplicar(montar({ maos: [['fadas'], ['fadas']], jardins: [jardim, []], baralho: ['trolls', 'gnomos', 'goblins', 'anoes'], fase: 'comprar' }), { t: 'buscar' });
    return (e.pendente as { reveladas: number[] }).reveladas.length;
  };
  assert.equal(olha([['elfos', 'elfos'], ['elfos', 'elfos']]), 2, 'dois elfos sozinhos não bastam');
  assert.equal(olha([['elfos', 'elfos'], ['elfos', 'elfos'], ['elfos', 'elfos']]), 3);
  assert.equal(olha([['elfos', 'elfos'], ['elfos', 'elfos'], ['fogos', 'fogos'], ['fogos', 'fogos']]), 3);
  assert.equal(olha([['elfos', 'elfos'], ['elfos', 'elfos'], ['elfos', 'mimicos']]), 3);
  let e = aplicar(montar({ maos: [['fadas'], ['fadas']], jardins: [[['elfos', 'elfos'], ['elfos', 'elfos'], ['elfos', 'elfos']], []], baralho: ['trolls', 'gnomos', 'goblins'], fase: 'comprar' }), { t: 'buscar' });
  e = aplicar(e, { t: 'ficar', carta: (e.pendente as { reveladas: number[] }).reveladas[0]! });
  assert.equal(e.descBusca.length, 2);
});

test('gnomos com a busca dos elfos: pega as 3 e descarta 2, escolhidas na mão toda', () => {
  let e = montar({
    maos: [['fadas', 'mimicos'], ['fadas']],
    jardins: [[['gnomos', 'gnomos'], ['gnomos', 'gnomos'], ['elfos', 'elfos'], ['elfos', 'elfos'], ['elfos', 'elfos']], []],
    baralho: ['trolls', 'goblins', 'anoes'],
    fase: 'comprar',
  });
  e = aplicar(e, { t: 'buscar' });
  assert.equal(e.maos[0]!.length, 5);
  assert.deepEqual(e.pendente, { t: 'descartarBusca', jogador: 0, quantas: 2, origem: 'turno' });
  // descarta uma da mão antiga e uma das novas
  const mim = e.maos[0]!.find((id) => tipoDe(id) === 'mimicos')!;
  const troll = e.maos[0]!.find((id) => tipoDe(id) === 'trolls')!;
  e = aplicar(e, { t: 'descartarBusca', cartas: [mim, troll] });
  assert.equal(e.maos[0]!.length, 3);
});

test('gnomos: as cartas da busca vão para a mão e depois se descarta qualquer carta', () => {
  let e = montar({ maos: [['fadas', 'mimicos'], ['fadas']], jardins: [[['gnomos', 'gnomos'], ['gnomos', 'gnomos']], []], baralho: ['trolls', 'goblins'], fase: 'comprar' });
  e = aplicar(e, { t: 'buscar' });
  assert.equal(e.maos[0]!.length, 4);
  assert.deepEqual(e.pendente, { t: 'descartarBusca', jogador: 0, quantas: 1, origem: 'turno' });
  const mim = e.maos[0]!.find((id) => tipoDe(id) === 'mimicos')!;
  e = aplicar(e, { t: 'descartarBusca', cartas: [mim] });
  assert.deepEqual(e.descBusca, [mim]);
  assert.equal(e.maos[0]!.length, 3);
});

test('raça nova: 3 iguais, uma por turno; o mímico vale por uma, mas nunca dois, nem com leprechaun', () => {
  const e = montar({ maos: [['elfos', 'elfos', 'elfos', 'fadas', 'fadas', 'mimicos', 'mimicos', 'leprechauns', 'leprechauns', 'anoes'], []] });
  const ids = (t: Tipo) => e.maos[0]!.filter((id) => tipoDe(id) === t);
  assert.match(validar(e, { t: 'baixar', cartas: ids('elfos').slice(0, 2) })!, /3 cartas/);
  const e2 = aplicar(e, { t: 'baixar', cartas: ids('elfos') });
  assert.equal(e2.jardins[0]!.length, 3);
  assert.match(validar(e2, { t: 'baixar', cartas: [...ids('fadas'), ids('mimicos')[0]!] })!, /uma raça nova por turno/);
  assert.equal(validar(e, { t: 'baixar', cartas: [...ids('fadas'), ids('mimicos')[0]!] }), null);
  assert.match(validar(e, { t: 'baixar', cartas: [ids('fadas')[0]!, ...ids('mimicos')] })!, /Só um mímico/);
  assert.match(validar(e, { t: 'baixar', cartas: [...ids('leprechauns'), ids('mimicos')[0]!] })!, /leprechaun/);
  assert.match(validar(e, { t: 'baixar', cartas: [ids('fadas')[0]!, ids('elfos')[0]!, ids('anoes')[0]!] })!, /uma raça de cada vez/);
});

test('fogos-fátuos: com 2 no jardim, raça nova entra com 2 cartas', () => {
  const e = montar({ maos: [['elfos', 'elfos', 'fadas'], []], jardins: [[['fogos', 'fogos'], ['fogos', 'fogos']], []] });
  const elfos = e.maos[0]!.filter((id) => tipoDe(id) === 'elfos');
  assert.equal(validar(e, { t: 'baixar', cartas: elfos }), null);
});

test('raça nova é a que você não tem, mesmo que o outro tenha; expandir vale no seu jardim e no do outro', () => {
  const e = montar({
    maos: [['elfos', 'anoes', 'mimicos', 'fadas'], []],
    jardins: [[['anoes', 'anoes'], ['anoes', 'anoes'], ['anoes', 'anoes']], [['elfos', 'elfos'], ['elfos', 'elfos'], ['elfos', 'elfos']]],
  });
  const [elfo, anao, mim] = e.maos[0]!;
  // os elfos só estão no jardim do outro: no seu, seriam raça nova (precisa de 3)
  assert.match(validar(e, { t: 'baixar', cartas: [elfo!] })!, /3 cartas/);
  // mas dá para expandir os elfos no jardim do outro
  let x = aplicar(e, { t: 'baixar', cartas: [elfo!], dono: 1 });
  assert.equal(x.jardins[1]!.length, 4);
  x = aplicar(x, { t: 'baixar', cartas: [anao!] });
  x = aplicar(x, { t: 'baixar', cartas: [mim!], raca: 'anoes' }); // mímico entra num grupo seu com anões
  assert.equal(x.jardins[0]!.length, 5);
  assert.match(validar(x, { t: 'baixar', cartas: [x.maos[0]![0]!] })!, /última carta/);
  // no jardim do outro, só raça que já está lá
  assert.match(validar(e, { t: 'baixar', cartas: [anao!], dono: 1 })!, /já está lá/);
  // expandir no jardim do outro não liga poder nem gasta a raça nova do turno
  assert.equal(x.racaNovaNoTurno, false);
});

test('canções: uma por turno; primavera faz alguém buscar; outono pega 4 de uma pilha; inverno pega 1 e busca', () => {
  let e = montar({ maos: [['primavera', 'outono', 'fadas'], ['fadas']], baralho: ['trolls', 'gnomos', 'goblins'], descFim: ['anoes', 'elfos', 'elfos', 'elfos', 'elfos'] });
  const [prim, out] = e.maos[0]!;
  e = aplicar(e, { t: 'cancao', carta: prim! });
  assert.match(validar(e, { t: 'jogador', alvo: 1 }) ?? '', /^$/);
  e = aplicar(e, { t: 'jogador', alvo: 1 }); // o outro faz a busca e escolhe
  assert.equal(quemAge(e), 1);
  const rev = (e.pendente as { reveladas: number[] }).reveladas;
  e = aplicar(e, { t: 'ficar', carta: rev[0]! });
  assert.equal(e.maos[1]!.length, 2);
  assert.equal(quemAge(e), 0);
  assert.match(validar(e, { t: 'cancao', carta: out! })!, /uma canção por turno/);

  let o = montar({ maos: [['outono', 'fadas'], ['fadas']], descFim: ['anoes', 'elfos', 'elfos', 'elfos', 'elfos'] });
  o = aplicar(o, { t: 'cancao', carta: o.maos[0]![0]! });
  o = aplicar(o, { t: 'jogador', alvo: 0 });
  o = aplicar(o, { t: 'pilha', pilha: 'fim' });
  assert.equal(o.maos[0]!.length, 5);
  assert.deepEqual(o.descFim.map(tipoDe), ['anoes']);

  let i = montar({ maos: [['inverno', 'fadas'], ['fadas']], baralho: ['trolls', 'gnomos'], descBusca: ['goblins'] });
  i = aplicar(i, { t: 'cancao', carta: i.maos[0]![0]! });
  assert.match(validar(i, { t: 'pilha', pilha: 'fim' })!, /vazia/);
  i = aplicar(i, { t: 'pilha', pilha: 'busca' });
  assert.equal(i.pendente?.t, 'busca');
  i = aplicar(i, { t: 'ficar', carta: (i.pendente as { reveladas: number[] }).reveladas[0]! });
  assert.equal(i.maos[0]!.length, 3);
});

test('goblins: o primeiro faz um jogador comprar 2; o segundo, não', () => {
  let e = montar({ maos: [['goblins', 'goblins', 'goblins', 'goblins', 'fadas'], ['fadas']], baralho: ['trolls', 'gnomos', 'elfos'] });
  const gob = e.maos[0]!.filter((id) => tipoDe(id) === 'goblins');
  e = aplicar(e, { t: 'baixar', cartas: gob.slice(0, 3) });
  assert.deepEqual(e.pendente, { t: 'jogador', jogador: 0, motivo: 'goblins' });
  e = aplicar(e, { t: 'jogador', alvo: 1 });
  assert.equal(e.maos[1]!.length, 3);
  e = aplicar(e, { t: 'baixar', cartas: [gob[3]!] });
  assert.equal(e.pendente, null);
  // se os goblins saírem do jardim e entrarem de novo, o poder vale outra vez
  const f = montar({ maos: [['goblins', 'goblins', 'goblins', 'fadas'], ['fadas']], baralho: ['trolls', 'gnomos', 'elfos'] });
  const sem = aplicar(f, { t: 'baixar', cartas: f.maos[0]!.slice(0, 3) });
  assert.equal(sem.pendente?.t, 'jogador');
});

test('kobolds: uma carta de qualquer jardim vai para o fundo do monte', () => {
  let e = montar({ maos: [['kobolds', 'kobolds', 'kobolds', 'fadas'], []], jardins: [[], [['elfos', 'elfos']]], baralho: ['trolls'] });
  e = aplicar(e, { t: 'baixar', cartas: e.maos[0]!.slice(0, 3) });
  assert.equal(e.pendente?.t, 'kobold');
  const elfo = e.jardins[1]![0]!.id;
  e = aplicar(e, { t: 'cartaEmJogo', dono: 1, carta: elfo });
  assert.equal(e.jardins[1]!.length, 0);
  assert.equal(e.baralho[0], elfo); // o fundo é o começo do array
});

test('trolls: qualquer carta em jogo vai para qualquer jardim; o mímico só em cima de outra raça', () => {
  let e = montar({ maos: [['trolls', 'trolls', 'trolls', 'fadas'], []], jardins: [[], [['verao', 'verao'], ['elfos', 'elfos'], ['elfos', 'mimicos']]] });
  e = aplicar(e, { t: 'baixar', cartas: e.maos[0]!.slice(0, 3) });
  assert.equal(e.pendente?.t, 'troll');
  const verao = e.jardins[1]![0]!.id;
  const mim = e.jardins[1]![2]!.id;
  // o mímico pode ser escolhido
  const m = aplicar(e, { t: 'cartaEmJogo', dono: 1, carta: mim });
  assert.equal(m.pendente?.t, 'trollDestino');
  // mas não fica sozinho: precisa de uma raça embaixo
  assert.match(validar(m, { t: 'jardim', dono: 0 })!, /outra raça/);
  const m2 = aplicar(m, { t: 'jardim', dono: 0, raca: 'trolls' });
  assert.deepEqual(m2.jardins[0]!.find((c) => c.id === mim), { id: mim, grupo: 'trolls' });
  // uma carta comum muda de jardim
  e = aplicar(e, { t: 'cartaEmJogo', dono: 1, carta: verao });
  e = aplicar(e, { t: 'jardim', dono: 0 });
  assert.ok(e.jardins[0]!.some((c) => c.id === verao));
  assert.equal(e.jardins[1]!.length, 2);
});

test('kobolds: qualquer carta em jogo vai para o fundo do monte, também um mímico', () => {
  let e = montar({ maos: [['kobolds', 'kobolds', 'kobolds', 'fadas'], []], jardins: [[], [['elfos', 'elfos'], ['elfos', 'mimicos']]], baralho: ['trolls'] });
  e = aplicar(e, { t: 'baixar', cartas: e.maos[0]!.slice(0, 3) });
  const mim = e.jardins[1]![1]!.id;
  e = aplicar(e, { t: 'cartaEmJogo', dono: 1, carta: mim });
  assert.equal(e.baralho[0], mim);
  assert.equal(e.jardins[1]!.length, 1);
});

test('mímico sozinho: quando a última carta de verdade sai, o grupo trava e nada mais entra', () => {
  // o kobold do jogador 0 tira o último elfo do jardim do 1, onde havia um mímico
  let e = montar({ maos: [['kobolds', 'kobolds', 'kobolds', 'elfos', 'mimicos', 'trolls', 'fadas'], ['elfos', 'fadas']], jardins: [[['goblins', 'goblins']], [['elfos', 'elfos'], ['elfos', 'mimicos']]], baralho: ['trolls'] });
  e = aplicar(e, { t: 'baixar', cartas: e.maos[0]!.slice(0, 3) });
  const elfo = e.jardins[1]![0]!.id;
  e = aplicar(e, { t: 'cartaEmJogo', dono: 1, carta: elfo });
  assert.ok(grupoTravado(e.jardins[1]!, 'elfos'));
  const [elfoMao, mimMao] = e.maos[0]!;
  // ninguém expande o grupo travado: nem carta da raça, nem outro mímico
  assert.match(validar(e, { t: 'baixar', cartas: [elfoMao!], dono: 1 })!, /nada mais entra|já está lá/);
  assert.match(validar(e, { t: 'baixar', cartas: [mimMao!], raca: 'elfos', dono: 1 })!, /nada mais entra|junto/);
  // nem o dono do jardim: na vez dele, os elfos também não entram ali
  const dele: Estado = { ...e, vez: 1, pendente: null, fase: 'baixar' };
  assert.match(validar(dele, { t: 'baixar', cartas: [dele.maos[1]![0]!] })!, /nada mais entra/);
});

test('mímico no jardim do adversário vale, para você e para o Linu', () => {
  const e = montar({ maos: [['mimicos', 'fadas'], []], jardins: [[], [['elfos', 'elfos']]] });
  const x = aplicar(e, { t: 'baixar', cartas: [e.maos[0]![0]!], raca: 'elfos', dono: 1 });
  assert.equal(x.jardins[1]!.length, 2);
});

test('o Linu escolhe bem o alvo do kobold e do troll', () => {
  // o kobold tira do outro a carta que mais vale: o 2º leprechaun (que fazia os dois valerem +4)
  let k = montar({ maos: [['fadas'], ['kobolds', 'kobolds', 'kobolds', 'fadas']], jardins: [[['leprechauns', 'leprechauns'], ['leprechauns', 'leprechauns'], ['fadas', 'fadas']], []] });
  k = { ...k, vez: 1 };
  k = aplicar(k, { t: 'baixar', cartas: k.maos[1]!.slice(0, 3) });
  const lk = jogadaDoLinu(k, 'dificil', () => 0.5);
  assert.ok(lk.t === 'cartaEmJogo' && tipoDe(lk.carta) === 'leprechauns');
  // o troll traz para o jardim do Linu uma carta boa do outro
  let t = montar({ maos: [['fadas'], ['trolls', 'trolls', 'trolls', 'fadas']], jardins: [[['elfos', 'elfos'], ['goblins', 'goblins']], []] });
  t = { ...t, vez: 1 };
  t = aplicar(t, { t: 'baixar', cartas: t.maos[1]!.slice(0, 3) });
  const lt = jogadaDoLinu(t, 'dificil', () => 0.5);
  assert.ok(lt.t === 'cartaEmJogo' && lt.dono === 0, 'o troll devia pegar uma carta do outro');
  const t2 = aplicar(t, lt);
  const dest = jogadaDoLinu(t2, 'dificil', () => 0.5);
  assert.deepEqual(dest, { t: 'jardim', dono: 1 });
});

test('pontos: jardim positivo, mão negativa; leprechauns, fadas, faunos e verão', () => {
  const jd = (xs: [string, Tipo][]) => montar({ maos: [[], []], jardins: [xs, []] }).jardins[0]!;
  assert.equal(pontosDoJardim(jd([['leprechauns', 'leprechauns']])), -4);
  assert.equal(pontosDoJardim(jd([['leprechauns', 'leprechauns'], ['leprechauns', 'leprechauns']])), 8);
  assert.equal(pontosDoJardim(jd([['elfos', 'elfos'], ['elfos', 'mimicos']])), 0);
  assert.equal(pontosDoJardim(jd([['fadas', 'fadas'], ['fadas', 'fadas'], ['fadas', 'mimicos']])), 2);
  assert.equal(pontosDoJardim(jd([['faunos', 'faunos'], ['faunos', 'faunos'], ['primavera', 'primavera'], ['outono', 'outono']])), 4);
  const cinco: [string, Tipo][] = [['elfos', 'elfos'], ['fadas', 'fadas'], ['anoes', 'anoes'], ['trolls', 'trolls'], ['faunos', 'faunos']];
  assert.equal(pontosDoJardim(jd([...cinco, ['verao', 'verao']])), 3 + 1 + 2 + 0 + 0 + 8);
  assert.equal(pontosDoJardim(jd([...cinco.slice(0, 4), ['elfos', 'mimicos'], ['verao', 'verao']])), 3 + 1 + 2 + 0 - 3 - 3);
  const m = montar({ maos: [['elfos', 'leprechauns', 'mimicos', 'verao', 'primavera'], []] });
  assert.equal(pontosDaMao(m.maos[0]!), -3 - 4 - 3 - 3 - 0);
});

test('cartas negativas na mão continuam negativas: −3 fica −3, nunca +3', () => {
  const m = montar({ maos: [['mimicos'], ['leprechauns', 'verao']] });
  assert.equal(pontosDaMao(m.maos[0]!), -3);
  assert.equal(pontosDaMao(m.maos[1]!), -7);
  let e = montar({ maos: [['fadas'], ['mimicos', 'leprechauns']], baralho: ['trolls'] });
  e = aplicar(e, { t: 'descartar', carta: e.maos[0]![0]! });
  assert.deepEqual(e.pontosRodada, [0, -7]);
});

test('fim da rodada: quando alguém descarta a última carta; placar soma e quem tem menos começa a próxima', () => {
  let e = montar({ maos: [['fadas'], ['elfos', 'elfos']], jardins: [[['anoes', 'anoes']], []], baralho: ['trolls', 'trolls'] });
  e = aplicar(e, { t: 'descartar', carta: e.maos[0]![0]! });
  assert.equal(e.fase, 'fimRodada');
  assert.deepEqual(e.pontosRodada, [2, -6]);
  assert.deepEqual(e.placar, [2, -6]);
  assert.equal(quemComecaProxima(e), 1);
  const nova = proximaRodada(e, semente(3));
  assert.equal(nova.vez, 1);
  assert.equal(nova.rodada, 2);
  assert.deepEqual(nova.placar, [2, -6]);
});

test('fim da rodada quando o monte acaba; fim do jogo a partir de 100, e empate joga mais uma', () => {
  let e = montar({ maos: [['fadas', 'fadas'], ['elfos']], baralho: [] });
  e = aplicar(e, { t: 'descartar', carta: e.maos[0]![0]! });
  assert.equal(e.fase, 'fimRodada');

  let f = montar({ maos: [['fadas'], ['elfos']], jardins: [[['elfos', 'elfos']], []], baralho: ['trolls'] });
  f = { ...f, placar: [META - 1, 50] };
  f = aplicar(f, { t: 'descartar', carta: f.maos[0]![0]! });
  assert.equal(f.fase, 'fimJogo');
  assert.equal(f.vencedor, 0);

  let g = montar({ maos: [['fadas'], []], baralho: ['trolls'] });
  g = { ...g, placar: [100, 100] };
  g = aplicar(g, { t: 'descartar', carta: g.maos[0]![0]! });
  assert.equal(g.fase, 'fimRodada'); // 100 × 100: mais uma rodada
});

test('o Linu, nos três níveis, joga partidas inteiras sem jogada inválida', () => {
  for (const nivel of ['facil', 'medio', 'dificil'] as const) {
    for (const s of [1, 2, 3]) {
      const rng = semente(s * 31 + nivel.length);
      let e = novaPartida(rng);
      let passos = 0;
      while (e.fase !== 'fimJogo' && passos < 20000) {
        if (e.fase === 'fimRodada') e = proximaRodada(e, rng);
        else e = aplicar(e, jogadaDoLinu(e, nivel, rng));
        passos++;
      }
      assert.equal(e.fase, 'fimJogo', `${nivel}/${s}: a partida não terminou`);
      assert.ok(Math.max(...e.placar) >= META);
      assert.ok(e.vencedor !== null);
      for (let j = 0; j < 2; j++) assert.equal(typeof pontosDe(e, j), 'number');
    }
  }
});

test('o Linu difícil ganha do fácil na maioria das partidas', () => {
  let vitorias = 0;
  const partidas = 12;
  for (let s = 0; s < partidas; s++) {
    const rng = semente(1000 + s);
    let e = novaPartida(rng, 2, s % 2);
    let passos = 0;
    while (e.fase !== 'fimJogo' && passos < 20000) {
      if (e.fase === 'fimRodada') e = proximaRodada(e, rng);
      else e = aplicar(e, jogadaDoLinu(e, quemAge(e) === 0 ? 'dificil' : 'facil', rng));
      passos++;
    }
    if (e.vencedor === 0) vitorias++;
  }
  assert.ok(vitorias > partidas / 2, `difícil ganhou só ${vitorias} de ${partidas}`);
});
