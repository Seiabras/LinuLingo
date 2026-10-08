import type { AlphabetData } from '../types';

/**
 * O alfabeto do toki pona: só 14 letras latinas — a, e, i, j, k, l, m, n, o, p, s, t, u, w — sem b,
 * c, d, f, g, h, q, r, v, x, y, z. 9 consoantes (p, t, k, s, m, n, l, j, w) e 5 vogais (a, e, i, o,
 * u), nenhuma com acento. A sílaba segue sempre (C)V(N): consoante opcional, vogal, e só no fim da
 * sílaba uma nasal (n) opcional — nunca dois sons de vogal colados (ditongo) nem duas consoantes
 * juntas, a não ser essa nasal antes de outra consoante ("tenpo", "insa"). O acento tônico é SEMPRE
 * na primeira sílaba da palavra, sem exceção. Valores sonoros conferidos contra a Wikipédia ("Toki
 * Pona", seção de fonologia) e o site oficial (tokipona.org).
 */
export const ALPHABET_TOK: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['ale', 'tudo/todos'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'é', sound: '"e" aberto, como o "é" de "pé" — nunca reduz pra "i" no fim da palavra', example: ['esun', 'mercado'], group: 'igual' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['ijo', 'coisa'], group: 'igual' },
    { letter: 'J j', ipa: '[j]', short: 'i curto', sound: '"i" bem curto e deslizado, o "y" do inglês "yes" — NUNCA o "j" (que soa "x"/"ch") do português', example: ['jan', 'pessoa'], group: 'falsa' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa" (nunca "s")', example: ['kala', 'peixe'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['lipu', 'papel/documento'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['mama', 'pai/mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"; no fim de sílaba (antes de consoante ou no fim da palavra) nasaliza a vogal anterior, igual o português já faz em "tempo"', example: ['nasin', 'caminho/jeito'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'ó', sound: '"o" aberto, como o "ó" de "nó"', example: ['olin', 'amor'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pona', 'bom/simples'], group: 'igual' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: 'sempre "s" surdo, como em "sapo" — nunca o "z" que o português faz entre vogais (em "casa")', example: ['suno', 'sol'], group: 'falsa' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '"t" de "touro"', example: ['toki', 'falar/língua'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['uta', 'boca'], group: 'igual' },
    { letter: 'W w', ipa: '[w]', short: 'u curto', sound: 'deslize rápido, o "w" do inglês "water" — nunca uma vogal "u" cheia', example: ['waso', 'pássaro'], group: 'igual' },
  ],
  readingWords: [
    ['mi', '🙋', 'eu'],
    ['jan', '🧑', 'pessoa'],
    ['kala', '🐟', 'peixe'],
    ['waso', '🐦', 'pássaro'],
    ['suno', '☀️', 'sol'],
    ['mun', '🌙', 'lua'],
    ['telo', '💧', 'água'],
    ['tomo', '🏠', 'casa'],
    ['pona', '👍', 'bom'],
    ['moku', '🍽️', 'comer/comida'],
  ],
};
