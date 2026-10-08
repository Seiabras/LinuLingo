import type { AlphabetData } from '../types';

/**
 * O alfabeto do volapük (forma reformada de Arie de Jong, 1931, "Volapük nulik" — ver index.ts):
 * script latino com 3 vogais próprias (ä, ö, ü, como no alemão) e SEM q, w, x, y (x só aparece em
 * raríssimos empréstimos, pro som /ks/). O acento tônico, diferente do esperanto, cai SEMPRE na
 * ÚLTIMA sílaba (nunca na penúltima). Valores sonoros (IPA) conferidos contra Wikipédia em inglês,
 * artigo "Volapük" (secção de fonologia): https://en.wikipedia.org/wiki/Volap%C3%BCk — "Polysyllabic
 * words are always stressed on the final vowel."
 */
export const ALPHABET_VO: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['fat', 'pai'], group: 'igual' },
    { letter: 'Ä ä', ipa: '[ɛ]', short: 'é', sound: 'som novo: entre o "a" e o "é", como o ä alemão — NUNCA o "ã" nasal do português', example: ['äbinom', 'ele era (passado de "ser")'], group: 'nova' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['bod', 'pão'], group: 'igual' },
    { letter: 'C c', ipa: '[tʃ]', short: 'tch', sound: '"tch" de "tchau" (às vezes "dj", perto de som sonoro) — NUNCA "k" nem "s"', example: ['cil', 'criança'], group: 'falsa' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['dom', 'casa'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'e', sound: '"e" fechado, como em "mesa"', example: ['del', 'dia'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '"f" de "faca"', example: ['flen', 'amigo'], group: 'igual' },
    { letter: 'G g', ipa: '[g]', short: 'g', sound: 'sempre "g" duro (de "gato")', example: ['gudik', 'bom'], group: 'igual' },
    { letter: 'H h', ipa: '[h]', short: 'h', sound: '"h" aspirado, pronunciado de verdade — nunca mudo como no português', example: ['hiel', 'artigo (só pra nomes próprios estrangeiros)'], group: 'falsa' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['sil', 'céu'], group: 'igual' },
    { letter: 'J j', ipa: '[ʒ]', short: 'j', sound: '"j"/"x", conforme o som vizinho (perto do "j" de "já" ou do "x" de "xícara")', example: ['jöl', 'oito'], group: 'falsa' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa" (nunca "s")', example: ['kat', 'gato'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['lul', 'cinco'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['mot', 'mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"', example: ['nem', 'nome'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '"o" fechado, como em "bolo"', example: ['logön', 'ver'], group: 'igual' },
    { letter: 'Ö ö', ipa: '[ø]', short: 'eu', sound: 'som novo: como o "eu" do francês ou o "ö" alemão, boca em "o" dizendo "e"', example: ['löfön', 'amar'], group: 'nova' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pardö', 'desculpe'], group: 'igual' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: '"r" vibrado simples — Schleyer tinha abolido o "r" em 1879/1880, e Arie de Jong o reabilitou em 1931; NUNCA o "r" gutural do português (de "carro")', example: ['rein', 'chuva (antes "lömib": o "r" entrou com a reforma de 1931)'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: '"s" surdo (de "sapo") ou sonoro "z", conforme o som vizinho', example: ['sör', 'irmã'], group: 'falsa' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '"t" de "touro"', example: ['tel', 'dois'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['buk', 'livro'], group: 'igual' },
    { letter: 'Ü ü', ipa: '[y]', short: 'ü', sound: 'som novo: "i" dito com os lábios arredondados, como no alemão', example: ['Volapük', 'língua do mundo — o próprio nome da língua'], group: 'nova' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '"v" de "vaca"', example: ['vat', 'água'], group: 'igual' },
    { letter: 'Z z', ipa: '[ts]', short: 'ts', sound: 'sempre "ts", como em "tsunami" — NUNCA o "z" de "zebra"', example: ['zül', 'nove'], group: 'falsa' },
  ],
  readingWords: [
    ['fat', '👨', 'pai'],
    ['mot', '👩', 'mãe'],
    ['dom', '🏠', 'casa'],
    ['bod', '🍞', 'pão'],
    ['vat', '💧', 'água'],
    ['kat', '🐈', 'gato'],
    ['dog', '🐕', 'cachorro'],
    ['buk', '📖', 'livro'],
    ['gudik', '👍', 'bom'],
    ['gretik', '📏', 'grande'],
  ],
};
