import { test } from 'node:test';
import assert from 'node:assert/strict';
import { avaliarConquistas, CONQUISTAS, TODOS_OS_TEMAS, type DadosConquistas } from './conquistas';
import { ROUPAS_LINU } from './roupas-linu';

const zero: DadosConquistas = {
  melhorSequencia: 0,
  xp: 0,
  licoes: 0,
  idiomasEstudados: 0,
  familiasEstudadas: 0,
  cursosCompletos: 0,
  historias: 0,
  figurinhas: 0,
  vitoriasNosJogos: 0,
  temasVencidos: [],
  cursosDeJogoCompletos: 0,
  pacotesCompletos: 0,
};

test('conquistas: ids únicos, meta positiva e prêmio que existe', () => {
  assert.equal(new Set(CONQUISTAS.map((c) => c.id)).size, CONQUISTAS.length);
  for (const c of CONQUISTAS) {
    assert.ok(c.meta > 0, c.id);
    if (c.premio) assert.ok(ROUPAS_LINU.some((o) => o.id === c.premio && o.conquista === c.id), `${c.id}: prêmio ${c.premio}`);
  }
});

test('conquistas: começando do zero, nenhuma está feita', () => {
  assert.ok(avaliarConquistas(zero).every((e) => !e.feita && e.progresso === 0));
});

test('conquistas: a sequência conta pela melhor já alcançada, e o progresso não passa da meta', () => {
  const e = avaliarConquistas({ ...zero, melhorSequencia: 10 });
  const s7 = e.find((x) => x.conquista.id === 'sequencia-7')!;
  const s30 = e.find((x) => x.conquista.id === 'sequencia-30')!;
  assert.ok(s7.feita);
  assert.equal(s7.progresso, 7);
  assert.ok(!s30.feita);
  assert.equal(s30.progresso, 10);
});

test('conquistas: “Jogador mundial” só com uma vitória em cada tema de tabuleiro', () => {
  const quase = avaliarConquistas({ ...zero, temasVencidos: TODOS_OS_TEMAS.slice(1) }).find((x) => x.conquista.id === 'jogador-mundial')!;
  assert.ok(!quase.feita);
  assert.equal(quase.progresso, TODOS_OS_TEMAS.length - 1);
  const todos = avaliarConquistas({ ...zero, temasVencidos: [...TODOS_OS_TEMAS, 'tema-que-nao-existe'] }).find((x) => x.conquista.id === 'jogador-mundial')!;
  assert.ok(todos.feita);
});
