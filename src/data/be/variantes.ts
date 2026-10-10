import type { LanguageVariant } from '../types';
import { ROWS } from './vocabulario';
import { beCirilicoParaLacinka, lacinkaSegura } from '@/services/transliteracao';

/**
 * As escritas do bielorrusso (10/10/2026): o cirílico da norma oficial (a “narkamaŭka”, de 1933),
 * padrão do app, e a łacinka, o alfabeto latino bielorrusso, usado desde o século XIX e hoje em
 * placas de Minsk, livros e na internet. Fonte: Wikipédia, «Belarusian Latin alphabet»,
 * «Taraškievica» (consultadas em 10/10/2026). A taraškievica (a norma clássica de 1918, também em
 * cirílico) é dúvida para o dono (docs/duvidas-variedades.md). As palavras com palatalização por
 * assimilação, que o cirílico não marca, ficam fora da amostra (`lacinkaSegura`).
 */
const amostraLacinka: [string, string, string, string?][] = ROWS.map(([palavra, traducao]) => [palavra.normalize('NFD').replace(/́/g, '').normalize('NFC'), traducao] as const)
  .filter(([palavra]) => lacinkaSegura(palavra))
  .slice(0, 30)
  .map(([palavra, traducao]) => [palavra, beCirilicoParaLacinka(palavra), traducao]);

export const VARIANTS_BE: LanguageVariant[] = [
  {
    code: 'be-Cyrl',
    country: 'BLR',
    kind: 'variante',
    name: 'Bielorrusso em cirílico',
    flag: '🇧🇾',
    summary: 'O padrão do app: o alfabeto cirílico bielorrusso, com as letras “ў” e “і”, na norma oficial de hoje.',
  },
  {
    code: 'be-Latn',
    country: 'BLR',
    kind: 'variante',
    name: 'Bielorrusso em łacinka',
    flag: '🔤',
    summary:
      'A mesma língua na łacinka, o alfabeto latino bielorrusso, usado desde o século XIX em jornais como o “Naša Niva” e hoje visto em placas de Minsk, livros e na internet. “Ł” é o “л” duro, “ŭ” é o “ў”, “č” e “š” são “ч” e “ш”. Amostra das primeiras palavras do vocabulário.',
    vocab: amostraLacinka,
  },
];
