import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONTRASTE_MESMO_EXERCITO, CORES_CLASSICAS, CORES_EXERCITO, CORES_PARA_EXERCITO, corBloqueada, coresDosLados, EXERCITOS, type EscolhaDeCores } from './exercitos-jogos';

/** Razão de contraste da WCAG entre duas cores #RRGGBB. */
function contraste(a: string, b: string): number {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r! + 0.7152 * g! + 0.0722 * bl!;
  };
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
}

test('exércitos: todo exército tem as seis peças e as cores dos dois tons', () => {
  for (const e of EXERCITOS) {
    for (const k of ['k', 'q', 'r', 'b', 'n', 'p'] as const) assert.ok((e.pecas[k].d.length > 50 || e.pecas[k].amigo) && e.pecas[k].nome, `${e.id}: peça ${k}`);
    assert.ok(CORES_EXERCITO[e.id], `${e.id}: sem cores próprias`);
  }
});

test('exércitos: cada cor contrasta com o próprio contorno (a figura lê em qualquer casa)', () => {
  for (const [id, c] of Object.entries(CORES_EXERCITO))
    for (const lado of ['w', 'b'] as const) assert.ok(contraste(c[lado].fundo, c[lado].contorno) >= 4.5, `${id}/${lado}: contorno fraco (${contraste(c[lado].fundo, c[lado].contorno).toFixed(2)})`);
  for (const lado of ['w', 'b'] as const)
    for (const c of CORES_CLASSICAS[lado]) assert.ok(contraste(c.fundo, c.contorno) >= 4.5, `clássica ${c.id}: contorno fraco`);
});

test('exércitos: com o mesmo exército dos dois lados, os dois tons se distinguem bem', () => {
  for (const [id, c] of Object.entries(CORES_EXERCITO)) assert.ok(contraste(c.w.fundo, c.b.fundo) >= 2.5, `${id}: os dois tons ficam parecidos (${contraste(c.w.fundo, c.b.fundo).toFixed(2)})`);
});

test('exércitos: qualquer cor clássica do jogador 1 se distingue de qualquer cor do jogador 2', () => {
  for (const w of CORES_CLASSICAS.w) for (const b of CORES_CLASSICAS.b) assert.ok(contraste(w.fundo, b.fundo) >= 3, `${w.id} × ${b.id}`);
});

const escolha = (x: Partial<EscolhaDeCores>): EscolhaDeCores => ({ exercito1: 'classico', exercito2: 'classico', cor1: 'branco', cor2: 'preto', corEx1: 'natural', corEx2: 'natural', ...x });

test('cores dos exércitos: o padrão é a cor natural de cada exército', () => {
  const dif = coresDosLados(escolha({ exercito1: 'fauna-br', exercito2: 'flora-br' }));
  assert.equal(dif.w.fundo, CORES_EXERCITO['fauna-br']!.w.fundo);
  assert.equal(dif.b.fundo, CORES_EXERCITO['flora-br']!.w.fundo);
  const igual = coresDosLados(escolha({ exercito1: 'cactos', exercito2: 'cactos' }));
  assert.equal(igual.w.fundo, CORES_EXERCITO.cactos!.w.fundo);
  assert.equal(igual.b.fundo, CORES_EXERCITO.cactos!.b.fundo);
  const classico = coresDosLados(escolha({}));
  assert.equal(classico.w.fundo, CORES_CLASSICAS.w[0]!.fundo);
});

test('cores dos exércitos: dá para trocar a cor, e com o mesmo exército nunca ficam parecidas', () => {
  const rosa = coresDosLados(escolha({ exercito1: 'piratas', exercito2: 'vikings', corEx1: 'rosa' }));
  assert.equal(rosa.w.fundo, CORES_PARA_EXERCITO.find((c) => c.id === 'rosa')!.fundo);
  for (const e of Object.keys(CORES_EXERCITO))
    for (const c1 of ['natural', ...CORES_PARA_EXERCITO.map((c) => c.id)])
      for (const c2 of ['natural', ...CORES_PARA_EXERCITO.map((c) => c.id)]) {
        const p = escolha({ exercito1: e, exercito2: e, corEx1: c1, corEx2: c2 });
        const r = coresDosLados(p);
        assert.ok(contraste(r.w.fundo, r.b.fundo) >= CONTRASTE_MESMO_EXERCITO, `${e}: ${c1} × ${c2}`);
      }
});

test('cores dos exércitos: com o mesmo exército, a cor do outro jogador fica bloqueada', () => {
  const p = escolha({ exercito1: 'japao', exercito2: 'japao', corEx1: 'celeste' });
  assert.ok(corBloqueada(p, 'b', 'celeste'), 'a mesma cor do jogador 1');
  assert.ok(!corBloqueada(p, 'b', 'preto'));
  assert.ok(!corBloqueada(escolha({ exercito1: 'japao', exercito2: 'piratas', corEx1: 'celeste' }), 'b', 'celeste'), 'exércitos diferentes podem repetir a cor');
  for (const e of Object.keys(CORES_EXERCITO)) assert.ok(!corBloqueada(escolha({ exercito1: e, exercito2: e }), 'b', 'natural'), `${e}: a cor natural não pode vir bloqueada`);
});

test('exército da Antártida: cada peça é o Linu ou um amigo dele que tem desenho', async () => {
  const { AMIGOS_LINU } = await import('./amigos-linu');
  const ant = EXERCITOS.find((e) => e.id === 'antartida')!;
  assert.equal(ant.preco, 0, 'é grátis');
  for (const p of Object.values(ant.pecas)) assert.ok(p.amigo === 'linu' || AMIGOS_LINU.some((a) => a.id === p.amigo), `${p.nome}: ${p.amigo}`);
});
