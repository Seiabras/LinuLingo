import type { AlphabetData } from '../types';

/**
 * O alfabeto do lojban: uma variante do alfabeto latino com 23 letras — todo o latino, exceto h, q
 * e w —, mais o apóstrofo, tratado como um símbolo próprio (nem vogal nem consoante "de verdade",
 * mas com valor sonoro fixo). Cada letra tem exatamente UM som, sempre, igual à "regra 1" do
 * esperanto — não é coincidência: as duas línguas foram desenhadas de propósito pra não ter as
 * irregularidades de pronúncia do português, do inglês ou do francês.
 * Fonte: "The Complete Lojban Language" (CLL), John Woldemar Cowan, 1997, capítulo de fonologia
 * (lojban.org/publications/cll/cll_v1.1_xhtml-chapter-chunks/chapter-phonology.html) — a lista exata
 * de letras e os valores em IPA vêm de lá.
 */
export const ALPHABET_JBO: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['mamta', 'mãe'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['barda', 'grande'], group: 'igual' },
    { letter: 'C c', ipa: '[ʃ]', short: 'x', sound: 'sempre "x"/"ch" de "xícara" — NUNCA "k" nem "s" como em português', example: ['cukta', 'livro'], group: 'falsa' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['djacu', 'água'], group: 'igual' },
    { letter: 'E e', ipa: '[ɛ]', short: 'é', sound: '"é" aberto, como em "pé"', example: ['mensi', 'irmã'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '"f" de "faca"', example: ['patfu', 'pai'], group: 'igual' },
    { letter: 'G g', ipa: '[ɡ]', short: 'g', sound: 'sempre "g" duro (de "gato"), MESMO antes de e/i — nunca o "j" que o português faz em "gelo"', example: ['gleki', 'feliz'], group: 'falsa' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['mi', 'eu'], group: 'igual' },
    { letter: 'J j', ipa: '[ʒ]', short: 'j', sound: '"j" de "já" — igual ao português', example: ['djuno', 'saber'], group: 'igual' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa" (nunca "s")', example: ['klama', 'ir'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['le', 'o/a'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['mi', 'eu'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"', example: ['nanba', 'pão'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '"o" fechado, como em "bolo"', example: ['coi', 'olá'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pendo', 'amigo'], group: 'igual' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: 'vibrado — aceita vários jeitos (vibrante, retroflexo, batido), mas NUNCA mudo nem o som gutural do "rr" em "carro"', example: ['barda', 'grande'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: 'sempre "s" surdo, como em "sapo" — nunca o "z" que o português faz entre vogais', example: ['sidju', 'ajudar'], group: 'falsa' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '"t" de "touro"', example: ['tsani', 'céu'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['do', 'você'], group: 'igual' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '"v" de "vaca"', example: ['vanju', 'vinho'], group: 'igual' },
    { letter: 'X x', ipa: '[x]', short: 'rr', sound: 'fricativa raspada na garganta, como o "ch" alemão de "Bach" ou o "j" espanhol — não existe em português', example: ['xamgu', 'bom'], group: 'nova' },
    { letter: 'Y y', ipa: '[ə]', short: 'â', sound: 'vogal neutra e indistinta ("schwa"), parecida com o "a" bem fraco do fim de "casa" dito rápido — nunca um "i" ou "u" claros', example: ['y', 'som de hesitação, tipo o nosso "é..." quando paramos pra pensar'], group: 'nova' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '"z" de "zebra"', example: ['zasti', 'existir'], group: 'igual' },
    {
      letter: "' '",
      ipa: '[h]',
      short: 'h',
      sound: '"h" soprado (como o "h" do inglês "hat"), só entre vogais, pra separá-las sem elas se colarem',
      example: ["ki'e", 'obrigado'],
      group: 'nova',
    },
  ],
  readingWords: [
    ['mi', '🙋', 'eu'],
    ['do', '🫵', 'você'],
    ['pendo', '🧑‍🤝‍🧑', 'amigo'],
    ['gerku', '🐕', 'cachorro'],
    ['mlatu', '🐈', 'gato'],
    ['zdani', '🏠', 'casa'],
    ['djacu', '💧', 'água'],
    ['nanba', '🍞', 'pão'],
    ['barda', '📏', 'grande'],
    ['coi', '👋', 'olá'],
  ],
};
