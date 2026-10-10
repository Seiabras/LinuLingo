import type { LanguageVariant } from '../types';
import { ACCENTS_ALE } from './sotaques';
import { ROWS } from './vocabulario';
import { dialetoDe } from '../dialeto-de-sotaque';
import { aleLatinoParaCirilico } from '@/services/transliteracao';

/**
 * Os dialetos do aleúte (Atka, o grupo ocidental, padrão do curso; e o oriental) e as duas escritas: a
 * latina escolar de 1972, padrão do curso, e a cirílica, a de Veniaminov (1824) e a de hoje, na ilha de
 * Bering. Sem histórias nos dialetos, por falta de fonte.
 *
 * Fontes: [ANLC] (os dois dialetos, divididos na ilha de Atka); Wikipédia em inglês, «Aleut language»
 * (Dialects; Orthography: a escrita latina de 1972 e a tabela «Comparison» atkan × Bering, usada na
 * amostra em cirílico, src/services/transliteracao.ts; Numerals: as formas do leste); [WIKT] (os pares de
 * verbetes marcados “Eastern” e “Western” ou “Atkan”).
 */
const amostraCirilica: [string, string, string, string?][] = ROWS.slice(23, 53).map(([palavra, traducao]) => [palavra, aleLatinoParaCirilico(palavra), traducao]);

export const VARIANTS_ALE: LanguageVariant[] = [
  dialetoDe(ACCENTS_ALE, 'ale-atka', 'ale-A', 'Aleúte de Atka (ocidental)', '🇺🇸', {
    summary: 'O padrão do curso: o aleúte de Atka, o grupo ocidental, que também incluía o falar da ilha de Bering, na Rússia, e (já extinto) o de Attu.',
  }),
  {
    code: 'ale-E',
    country: 'USA',
    kind: 'dialeto',
    name: 'Aleúte oriental',
    flag: '🇺🇸',
    summary: 'O aleúte do leste: Unalaska, Akutan, Nikolski, a península do Alasca e as ilhas Pribilof, que têm hoje o maior número de falantes.',
    pronunciation: [
      '“Eu” no presente termina em -kuqing (em Atka, -kuq), e o plural, em -n (em Atka, -s): Unangan × Unangas.',
      'Números diferentes de Atka: “aalax” (dois), “qaankun” (três), “sichin” (quatro).',
    ],
    vocab: [
      ['alax', 'aalax', 'dois'],
      ['qankus', 'qaankun', 'três'],
      ['siching', 'sichin', 'quatro'],
      ['Qaĝaasakung', 'Qaĝaalakux̂', 'obrigado(a)'],
      ['qalgadax̂', 'qaqax̂', 'comida'],
      ['chaasxix̂', 'chaaskax̂', 'xícara'],
      ['kuusxix̂', 'kuuskax̂', 'gato'],
      ['hmiichix̂', 'miichix̂', 'bola'],
      ['hwaĝix̂', 'waĝix̂', 'fumaça'],
      ['qangul', 'qahqul', 'entrar'],
      ['Unangas', 'Unangan', 'os aleútes'],
    ],
  },
  {
    code: 'ale-Cyrl',
    country: 'RUS',
    kind: 'variante',
    name: 'Aleúte em letras cirílicas',
    flag: '🔤',
    summary: 'A outra escrita do aleúte. A primeira escrita da língua foi cirílica, criada a partir de 1824 pelo padre Ioann Veniaminov, em Unalaska, e usada nos livros da igreja ortodoxa; a de hoje é a da ilha de Bering, na Rússia, com letras próprias (ӄ, ӷ, ӽ, ӈ) e as vogais longas com um traço em cima (а̄, ӣ, ӯ). Amostra de palavras do vocabulário, convertidas letra a letra pela tabela da Wikipédia.',
    vocab: amostraCirilica,
  },
];
