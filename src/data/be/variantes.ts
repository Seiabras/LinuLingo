import type { LanguageVariant } from '../types';
import { ROWS } from './vocabulario';
import { beCirilicoParaLacinka, lacinkaSegura } from '@/services/transliteracao';

/**
 * As escritas do bielorrusso (10/10/2026): o cirílico da norma oficial (a “narkamaŭka”, de 1933),
 * padrão do app, e a łacinka, o alfabeto latino bielorrusso, usado desde o século XIX e hoje em
 * placas de Minsk, livros e na internet. Fonte: Wikipédia, «Belarusian Latin alphabet»,
 * «Taraškievica» (consultadas em 10/10/2026). A taraškievica (a norma clássica de 1918, também em
 * cirílico) é a terceira escrita (decisão do dono, 10/10/2026). As palavras com palatalização por
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
  {
    code: 'be-tarask',
    country: 'BLR',
    kind: 'variante',
    name: 'Bielorrusso na taraškievica',
    flag: '📜',
    summary:
      'A ortografia clássica do bielorrusso, de 1918, em cirílico, trocada pela soviética em 1933 e usada hoje pela imprensa independente, pela diáspora e por parte da oposição. Escreve a palatalização que a norma oficial não escreve: “сьнег” (neve), onde a oficial escreve “снег”.',
    card: {
      id: 'be-tarask-c1',
      title: 'Uma ortografia, duas histórias',
      emoji: '📜',
      history:
        'Em 1918, o linguista Branislaŭ Taraškievič publicou a primeira gramática do bielorrusso moderno, e a ortografia dela passou a se chamar taraškievica. Em 1933, a União Soviética fez uma reforma que aproximou a escrita da do russo: nasceu a “narkamaŭka”, a norma oficial de hoje. A taraškievica continuou viva entre os bielorrussos do exílio e voltou nos anos 1990, depois da independência, com jornais como o “Naša Niva”, a Rádio Svaboda e uma Wikipédia própria. Desde então, a escolha da ortografia é também uma escolha política: a taraškievica é ligada à oposição e à ideia de uma Belarus afastada da Rússia.',
      culture_tip:
        'Em Belarus, a norma oficial é a narkamaŭka, a da escola e do governo. A taraškievica aparece na imprensa independente, nos livros publicados fora do país e na internet. Existem duas Wikipédias em bielorrusso, uma em cada ortografia.',
      grammar_why:
        'As duas ortografias escrevem a mesma língua, com a mesma pronúncia; muda o que se marca na escrita: (1) a taraškievica escreve a palatalização por assimilação com o sinal brando: “сьнег” (neve), “сьвет” (mundo); (2) nas palavras estrangeiras, ela segue a pronúncia bielorrussa e não a russa: “плян” (plano), “клюб” (clube), “лёгіка” (lógica), “газэта” (jornal). Fonte: Wikipédia, «Taraškievica» (consultada em 10/10/2026).',
      grammar_examples: [
        ['сьнег', 'neve (na norma oficial: снег)'],
        ['сьвет', 'mundo, luz (na norma oficial: свет)'],
        ['плян', 'plano (na norma oficial: план)'],
        ['клюб', 'clube (na norma oficial: клуб)'],
        ['газэта', 'jornal (na norma oficial: газета)'],
      ],
      character_guide: null,
    },
    vocab: [
      ['снег', 'сьнег', 'neve'],
      ['свет', 'сьвет', 'mundo, luz'],
      ['план', 'плян', 'plano'],
      ['клуб', 'клюб', 'clube'],
      ['логіка', 'лёгіка', 'lógica'],
      ['газета', 'газэта', 'jornal'],
    ],
  },
];

