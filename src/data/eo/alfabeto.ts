import type { AlphabetData } from '../types';

/**
 * O alfabeto do esperanto: 28 letras, cada uma com UM som fixo, sem excepção (é a "regra 1" do
 * Fundamento de Esperanto, de L. L. Zamenhof, 1887) — nunca duas letras pro mesmo som, nunca uma
 * letra com dois sons. Tem 22 letras iguais na forma às do alfabeto latino, mas SEM q, w, x, y; e 6
 * letras próprias, com acento circunflexo (ĉ, ĝ, ĥ, ĵ, ŝ) ou breve (ŭ) — nenhuma inventada aqui:
 * valores sonoros conferidos contra Wikipedia "Esperanto orthography" e "Esperanto phonology", e o
 * PMEG (lernu.net/pmeg, capítulo da pronúncia).
 */
export const ALPHABET_EO: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['patro', 'pai'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['bona', 'bom'], group: 'igual' },
    { letter: 'C c', ipa: '[ts]', short: 'ts', sound: 'sempre "ts", como em "tsunami" — NUNCA "k" nem "s" sozinho', example: ['cent', 'cem'], group: 'falsa' },
    { letter: 'Ĉ ĉ', ipa: '[tʃ]', short: 'tch', sound: '"tch" de "tchau"', example: ['ĉielo', 'céu'], group: 'nova' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['domo', 'casa'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'e', sound: '"e" fechado, como em "mesa"', example: ['esti', 'ser/estar'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '"f" de "faca"', example: ['frato', 'irmão'], group: 'igual' },
    { letter: 'G g', ipa: '[g]', short: 'g', sound: 'sempre "g" duro (de "gato"), MESMO antes de e/i — nunca o "j" que o português faz em "gelo"', example: ['granda', 'grande'], group: 'falsa' },
    { letter: 'Ĝ ĝ', ipa: '[dʒ]', short: 'dj', sound: '"dj" dito rápido, o "j" do inglês "job"', example: ['manĝi', 'comer'], group: 'nova' },
    { letter: 'H h', ipa: '[h]', short: 'h', sound: '"h" aspirado, pronunciado de verdade — nunca mudo como no português', example: ['havi', 'ter'], group: 'falsa' },
    { letter: 'Ĥ ĥ', ipa: '[x]', short: 'rr', sound: 'som raspado na garganta, como o "j" espanhol ou o "ch" alemão de "Bach" — raro, só em palavras de origem grega', example: ['ĥoro', 'coro (de canto)'], group: 'nova' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['mi', 'eu'], group: 'igual' },
    { letter: 'J j', ipa: '[j]', short: 'i curto', sound: '"i" bem curto, um deslize — o "y" do inglês "yes" — nunca o "j" (que soa "x"/"ch") do português', example: ['jes', 'sim'], group: 'falsa' },
    { letter: 'Ĵ ĵ', ipa: '[ʒ]', short: 'j', sound: 'esse SIM é o som do "j" português, de "já"', example: ['ĵurnalo', 'jornal'], group: 'nova' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa" (nunca "s")', example: ['kaj', 'e'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['li', 'ele'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['nomo', 'nome'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"', example: ['ni', 'nós'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '"o" fechado, como em "bolo"', example: ['bona', 'bom'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pano', 'pão'], group: 'igual' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: '"r" batido/vibrado simples, como o "r" do espanhol em "pero" — NUNCA o "r" gutural do português (de "carro")', example: ['patro', 'pai'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: 'sempre "s" surdo, como em "sapo" — nunca o "z" que o português faz entre vogais (em "casa")', example: ['esti', 'ser/estar'], group: 'falsa' },
    { letter: 'Ŝ ŝ', ipa: '[ʃ]', short: 'x', sound: '"x"/"ch" de "xícara"/"chá"', example: ['ŝi', 'ela'], group: 'nova' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '"t" de "touro"', example: ['tri', 'três'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['urbo', 'cidade'], group: 'igual' },
    { letter: 'Ŭ ŭ', ipa: '[u̯]', short: 'u curto', sound: '"u" bem rápido, quase um "w" — só aparece depois de a/e (au/eu), nunca sozinho', example: ['aŭ', 'ou'], group: 'nova' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '"v" de "vaca"', example: ['vi', 'você'], group: 'igual' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '"z" de "zebra"', example: ['zebro', 'zebra'], group: 'igual' },
  ],
  readingWords: [
    ['mi', '🙋', 'eu'],
    ['vi', '🫵', 'você'],
    ['ŝi', '👩', 'ela'],
    ['patro', '👨', 'pai'],
    ['hundo', '🐕', 'cachorro'],
    ['kato', '🐈', 'gato'],
    ['pano', '🍞', 'pão'],
    ['akvo', '💧', 'água'],
    ['domo', '🏠', 'casa'],
    ['granda', '📏', 'grande'],
  ],
};
