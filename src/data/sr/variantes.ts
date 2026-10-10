import type { LanguageVariant } from '../types';
import { ROWS } from './vocabulario';
import { srCirilicoParaLatino } from '@/services/transliteracao';

/**
 * As duas escritas do sérvio (10/10/2026): o cirílico de Vuk Karadžić, padrão do app e escrita oficial
 * da Sérvia pela Constituição de 2006, e o alfabeto latino de Ljudevit Gaj, de uso igual no dia a dia.
 * As duas se correspondem letra a letra (fonte: Wikipédia, «Serbian Cyrillic alphabet», «Gaj's Latin
 * alphabet», «Digraphia», consultadas em 10/10/2026).
 */
const amostraLatina: [string, string, string, string?][] = ROWS.slice(0, 30).map(([palavra, traducao]) => [palavra, srCirilicoParaLatino(palavra), traducao]);

export const VARIANTS_SR: LanguageVariant[] = [
  {
    code: 'sr-Cyrl',
    country: 'SRB',
    kind: 'variante',
    name: 'Sérvio em cirílico',
    flag: '🇷🇸',
    summary:
      'O padrão do app: o alfabeto cirílico reformado por Vuk Karadžić no século XIX, com uma letra para cada som (“escreva como fala”). É a escrita oficial da Sérvia pela Constituição de 2006.',
  },
  {
    code: 'sr-Latn',
    country: 'SRB',
    kind: 'variante',
    name: 'Sérvio em alfabeto latino',
    flag: '🔤',
    summary:
      'A mesma língua no alfabeto latino de Ljudevit Gaj, o dos croatas e bósnios, muito usado nas ruas, na internet e nas propagandas da Sérvia. As duas escritas se correspondem letra a letra: “љ” é “lj”, “њ” é “nj”, “џ” é “dž”. Amostra das primeiras palavras do vocabulário.',
    vocab: amostraLatina,
  },
];
