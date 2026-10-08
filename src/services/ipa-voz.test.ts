/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GAPS, ipaDaNota, ipaParaVoz, temVozPorIpa } from './ipa-voz';
import { ACCENTS_RO } from '@/data/ro/sotaques';
import { ACCENTS_RU } from '@/data/ru/sotaques';
import { toIpa as toIpaRo } from './ipa-ro';
import { toIpaRu } from './ipa-ru';

// só ASCII (letras, dígitos, espaço) e a pontuação do Kirshenbaum que a função usa: [ ] _ ' , : . ; ^
const SO_KIRSHENBAUM = /^\[\[[\x20-\x7E]*\]\]$/;

test('ipaParaVoz: símbolos do romeno usados de verdade em ro/sotaques.ts', () => {
  // ro/sotaques.ts só documenta ʃ e ʒ como símbolos isolados (nas features, não em exemplos completos)
  assert.equal(ipaParaVoz('ʃ', 'ro'), '[[S]]');
  assert.equal(ipaParaVoz('ʒ', 'ro'), '[[Z]]');
});

test('ipaParaVoz: tabela do romeno — os outros símbolos que o ipa-ro.ts (já usado no app) produz', () => {
  const casos: [string, string][] = [
    ['ə', '[[@]]'], // ă
    ['ɨ', '[[y]]'], // â/î
    ['ʲ', '[[I^]]'], // palatalização («faci» → fat͡ʃʲ)
    ['ɡ', '[[g]]'],
    ['a', '[[a]]'],
    ['e', '[[e]]'],
    ['o', '[[o]]'],
    ['u', '[[u]]'],
    ['j', '[[j]]'],
    ['w', '[[w]]'],
    ['h', '[[h]]'],
    ['t͡ʃ', '[[t_S]]'], // ce/ci
    ['d͡ʒ', '[[d_Z]]'], // ge/gi
    ['t͡s', '[[t_s]]'], // ț
  ];
  for (const [ipa, esperado] of casos) assert.equal(ipaParaVoz(ipa, 'ro'), esperado, ipa);
});

test('ipaParaVoz: frases reais do romeno, geradas pelo ipa-ro.ts a partir dos exemplos de ro/sotaques.ts', () => {
  // ro/sotaques.ts não tem IPA de frase pronta (só comparação com o padrão escrito); usa o transcritor
  // já shipado no app (o mesmo que a tela de pronúncia mostra) para gerar o IPA de frases reais do
  // próprio arquivo de sotaques, e confere que a tradução não perde nenhum símbolo (sem retornar null)
  // e que o resultado só tem texto ASCII (nenhum IPA sobrando sem tradução).
  const frases = ACCENTS_RO.flatMap((a) => a.examples.map(([t]) => t));
  assert.ok(frases.length >= 5);
  for (const frase of frases) {
    const ipa = toIpaRo(frase);
    const kirsh = ipaParaVoz(ipa, 'ro');
    assert.ok(kirsh, `${frase} → ${ipa}: não traduziu`);
    assert.match(kirsh!, SO_KIRSHENBAUM, `${frase} → ${ipa} → ${kirsh}`);
  }
});

test('ipaParaVoz: símbolos do russo usados de verdade em ru/sotaques.ts (pelo menos 10)', () => {
  const casos: [string, string][] = [
    ['ɐ', '[[V]]'], // «А́канье»
    ['ə', '[[@]]'],
    ['ʂ', '[[s.]]'], // ш
    ['ɣ', '[[Q]]'], // г fricativo (sul da Rússia/Belarus)
    ['ɡ', '[[g]]'],
    ['a', '[[a]]'],
    ['o', '[[o]]'],
    ['ɫ', '[[l]]'], // «dark l» usado nas transcrições de Moscou/São Petersburgo
    ['ɵ', '[[8]]'], // pʲjɵt (bebe)
    ['ʲ', '[[I^]]'],
    ['t͡ʂ', '[[t_s.]]'], // variante do «ч» no sotaque de Belarus
  ];
  assert.ok(casos.length >= 10);
  for (const [ipa, esperado] of casos) assert.equal(ipaParaVoz(ipa, 'ru'), esperado, ipa);
});

test('ipaParaVoz: frases inteiras documentadas em ru/sotaques.ts (features e examples)', () => {
  const frases = [
    ...ACCENTS_RU.flatMap((a) => a.features.flatMap((f) => [...f.matchAll(/\[([^[\]]+)\]/g)].map((m) => m[1]))),
    ...ACCENTS_RU.flatMap((a) => a.examples.map(([, , nota]) => ipaDaNota(nota)).filter((x): x is string => !!x)),
  ];
  assert.ok(frases.length >= 10, `só achou ${frases.length} transcrições`);
  for (const ipa of frases) {
    const kirsh = ipaParaVoz(ipa, 'ru');
    if (kirsh) assert.match(kirsh, SO_KIRSHENBAUM, `${ipa} → ${kirsh}`);
    // qualquer falha tem que ser por um símbolo do GAPS.ru — documentado, não é falha do teste
    else assert.ok(GAPS.ru.some((g) => ipa.includes(g)), `${ipa}: sem tradução e sem símbolo do GAPS`);
  }
});

test('ipaParaVoz: uma frase real completa, símbolo por símbolo (coné́chno)', () => {
  // «Коне́чно, приходи́!» (features de ru-moscou): [kɐˈnʲeʂnə prʲɪxɐˈdʲi]
  assert.equal(ipaParaVoz('[kɐˈnʲeʂnə prʲɪxɐˈdʲi]', 'ru'), "[[k_V_'_nI^_e_s._n_@ p_rI^_I_x_V_'_dI^_i]]");
});

test('ipaParaVoz: tira a notação [...] e /.../ antes de traduzir', () => {
  assert.equal(ipaParaVoz('[ʃ]', 'ro'), ipaParaVoz('ʃ', 'ro'));
  assert.equal(ipaParaVoz('/ʃ/', 'ro'), ipaParaVoz('ʃ', 'ro'));
});

test('ipaParaVoz: devolve null para símbolo sem tradução conhecida (não arrisca fonema inventado)', () => {
  assert.equal(ipaParaVoz(GAPS.ru[0], 'ru'), null); // ʊ: candidato conhecido trava o leitor do espeak-ng
  assert.equal(ipaParaVoz('ñ', 'ro'), null); // símbolo que não é do romeno nem do russo
  assert.equal(ipaParaVoz('ñ', 'ru'), null);
});

test('ipaParaVoz: ipa-ru.ts (já usado no app) — frases reais também não perdem símbolo', () => {
  const frases = ACCENTS_RU.flatMap((a) => a.examples.map(([t]) => t)).filter((t) => /[а-яё]/i.test(t));
  assert.ok(frases.length >= 5);
  for (const frase of frases) {
    const ipa = toIpaRu(frase);
    const kirsh = ipaParaVoz(ipa, 'ru');
    if (kirsh) {
      assert.match(kirsh, SO_KIRSHENBAUM, `${frase} → ${ipa} → ${kirsh}`);
    } else {
      // só pode falhar por um símbolo do GAPS.ru (ex.: ʊ, o у/ю átono) — qualquer outra falha é cobertura ruim
      assert.ok(GAPS.ru.some((g) => ipa.includes(g)), `${frase} → ${ipa}: sem tradução e sem símbolo do GAPS`);
    }
  }
});

test('ipaDaNota: separa a nota que é IPA da que é comentário em português', () => {
  assert.equal(ipaDaNota('[kɐˈnʲeʂnə]'), 'kɐˈnʲeʂnə');
  assert.equal(ipaDaNota('no padrão: “De ce nu vii?”'), null);
  assert.equal(ipaDaNota(undefined), null);
  // nota real de ro/sotaques.ts (comparação com o padrão, não é IPA)
  const notaRo = ACCENTS_RO[0].examples[0][2];
  assert.equal(ipaDaNota(notaRo), null);
  // nota real de ru/sotaques.ts (é IPA)
  const notaRu = ACCENTS_RU[0].examples[0][2];
  assert.ok(ipaDaNota(notaRu));
});

test('temVozPorIpa: só romeno e russo no piloto', () => {
  assert.equal(temVozPorIpa('ro'), true);
  assert.equal(temVozPorIpa('ru'), true);
  assert.equal(temVozPorIpa('pt'), false);
  assert.equal(temVozPorIpa('es'), false);
});
