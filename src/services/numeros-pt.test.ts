import { test } from 'node:test';
import assert from 'node:assert/strict';
import { portugueseNumber, portugueseOrdinal, spellPortugueseNumbers } from '@/services/numeros/pt';

test('números em português: as formas de Portugal, com “e” e o gênero', () => {
  const cases: [number, string][] = [
    [0, 'zero'],
    [1, 'um'],
    [14, 'catorze'],
    [16, 'dezasseis'],
    [17, 'dezassete'],
    [19, 'dezanove'],
    [21, 'vinte e um'],
    [100, 'cem'],
    [101, 'cento e um'],
    [123, 'cento e vinte e três'],
    [200, 'duzentos'],
    [555, 'quinhentos e cinquenta e cinco'],
    [1000, 'mil'],
    [1100, 'mil e cem'],
    [1234, 'mil duzentos e trinta e quatro'],
    [1500, 'mil e quinhentos'],
    [1974, 'mil novecentos e setenta e quatro'],
    [2026, 'dois mil e vinte e seis'],
    [21_000, 'vinte e um mil'],
    [1_000_000, 'um milhão'],
    [1_500_000, 'um milhão e quinhentos mil'],
    [2_000_020, 'dois milhões e vinte'],
  ];
  for (const [n, w] of cases) assert.equal(portugueseNumber(n), w, String(n));
  assert.equal(portugueseNumber(2, 'f'), 'duas');
  assert.equal(portugueseNumber(201, 'f'), 'duzentas e uma');
  assert.equal(portugueseNumber(2000, 'f'), 'duas mil');
  assert.equal(portugueseNumber(2_000_000, 'f'), 'dois milhões');
  assert.equal(portugueseNumber(16, 'm', true), 'dezesseis');
  assert.equal(portugueseNumber(1719, 'm', true), 'mil setecentos e dezenove');
  assert.equal(portugueseOrdinal(1), 'primeiro');
  assert.equal(portugueseOrdinal(12), 'décimo segundo');
  assert.equal(portugueseOrdinal(21, 'f'), 'vigésima primeira');
});

test('números em português: concordam com o substantivo que vem depois', () => {
  assert.equal(spellPortugueseNumbers('Tenho 2 irmãs e 2 irmãos.'), 'Tenho duas irmãs e dois irmãos.');
  assert.equal(spellPortugueseNumbers('Tem 1 casa de banho.'), 'Tem uma casa de banho.');
  assert.equal(spellPortugueseNumbers('Vivem ali 200 pessoas.'), 'Vivem ali duzentas pessoas.');
  assert.equal(spellPortugueseNumbers('Vieram 2 mil pessoas.'), 'Vieram duas mil pessoas.');
  assert.equal(spellPortugueseNumbers('21 cidades'), 'vinte e uma cidades');
  // um adjetivo no meio; palavra fora do vocabulário, pela terminação
  assert.equal(spellPortugueseNumbers('2 grandes casas'), 'duas grandes casas');
  assert.equal(spellPortugueseNumbers('2 cadeiras'), 'duas cadeiras');
  // sem substantivo: o artigo de antes, ou a forma de contar
  assert.equal(spellPortugueseNumbers('Chego às 2.'), 'Chego às duas.');
  assert.equal(spellPortugueseNumbers('O elétrico 28 sobe até ao castelo.'), 'O elétrico vinte e oito sobe até ao castelo.');
  assert.equal(spellPortugueseNumbers('de emergência, liga o 112.'), 'de emergência, liga o cento e doze.');
});

test('números em português: datas, anos, horas, ordinais, decimais, dinheiro', () => {
  assert.equal(spellPortugueseNumbers('A monarquia acabou em 5 de outubro de 1910.'), 'A monarquia acabou em cinco de outubro de mil novecentos e dez.');
  assert.equal(spellPortugueseNumbers('O 1 de maio é feriado.'), 'O primeiro de maio é feriado.');
  assert.equal(spellPortugueseNumbers('Eça (1845–1900)'), 'Eça (mil oitocentos e quarenta e cinco a mil e novecentos)');
  assert.equal(spellPortugueseNumbers('O barco sai às 3h30.'), 'O barco sai às três e trinta.');
  assert.equal(spellPortugueseNumbers('às 8h00'), 'às oito horas');
  assert.equal(spellPortugueseNumbers('à 1h'), 'à uma hora');
  assert.equal(spellPortugueseNumbers('A minha irmã anda no 9.º ano.'), 'A minha irmã anda no nono ano.');
  assert.equal(spellPortugueseNumbers('a 3ª pessoa'), 'a terceira pessoa');
  assert.equal(spellPortugueseNumbers('2,5'), 'dois vírgula cinco');
  assert.equal(spellPortugueseNumbers('A bica custa 0,80 €.'), 'A bica custa oitenta cêntimos.');
  assert.equal(spellPortugueseNumbers('2,50 €'), 'dois euros e cinquenta cêntimos');
  assert.equal(spellPortugueseNumbers('30% da turma faltou.'), 'trinta por cento da turma faltou.');
  assert.equal(spellPortugueseNumbers('1.500 euros'), 'mil e quinhentos euros');
  assert.equal(spellPortugueseNumbers('1 000 000'), 'um milhão');
  // o Brasil
  assert.equal(spellPortugueseNumbers('Tenho 16 anos.', true), 'Tenho dezesseis anos.');
});

test('números em português: o que não é número fica como está', () => {
  for (const s of ['Um T2 em Lisboa', 'mp3', 'Lei n.º 7/99', '10⁹', 'nível A2.1', 'Bom dia!']) assert.equal(spellPortugueseNumbers(s), s);
});
