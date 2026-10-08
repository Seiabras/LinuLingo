import type { AlphabetData } from '../types';

/**
 * O alfabeto da interlíngua: as 26 letras do alfabeto latino padrão, SEM nenhum diacrítico — a
 * própria União Mundial pro Interlingua descreve a ortografia como "baseada nas 26 letras do
 * alfabeto romano, sem nenhum sinal diacrítico ou de acento" (confirmado contra Omniglot,
 * "Interlingua language, alphabet and pronunciation"). A pronúncia é mais "fluida" que a do
 * esperanto: a própria gramática oficial reconhece variação entre falantes em vez de travar um som
 * único por letra (diferente da "regra 1" do esperanto). Valores sonoros conferidos contra a
 * "Grammar of Interlingua" (Gode & Blair, 1951, capítulo de ortografia/pronúncia, via
 * adoneilson.com/int/gi/spell) e a Wikipédia ("Interlingua phonology", "Interlingua grammar").
 */
export const ALPHABET_IA: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['aqua', 'água'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['bon', 'bom'], group: 'igual' },
    { letter: 'C c', ipa: '[ts]/[k]', short: 'ts/k', sound: '"ts" antes de e/i/y ("centro" = TSEN-tro); "k" nos outros casos', example: ['centro', 'centro'], group: 'falsa' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['domo', 'casa'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'e', sound: '"e" fechado, como em "mesa"', example: ['esser', 'ser/estar'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '"f" de "faca"', example: ['familia', 'família'], group: 'igual' },
    { letter: 'G g', ipa: '[g]/[dʒ]', short: 'g/dj', sound: 'sempre "g" duro — MESMO antes de e/i (diferente do português "gelo"); só vira "dj" nas terminações -age/-agi-/-egi-', example: ['grande', 'grande'], group: 'falsa' },
    { letter: 'H h', ipa: '[h]/mudo', sound: 'quase sempre muda, como em português; a própria gramática oficial admite variação entre falantes', short: 'h/muda', example: ['haber', 'ter'], group: 'falsa' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['io', 'eu'], group: 'igual' },
    { letter: 'J j', ipa: '[ʒ]', short: 'j', sound: 'o mesmo som do "j" português, de "já"', example: ['jalne', 'amarelo'], group: 'igual' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa" — rara, sobretudo em palavras de empréstimo', example: ['kilometro', 'quilômetro'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['libro', 'livro'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['matre', 'mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"', example: ['nomine', 'nome'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '"o" fechado, como em "bolo"', example: ['octo', 'oito'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pan', 'pão'], group: 'igual' },
    { letter: 'Q q', ipa: '[kw]', short: 'kw', sound: 'só aparece em "qu", sempre "kw" — diferente do português, onde "que"/"qui" costumam ter o "u" mudo', example: ['qui', 'quem'], group: 'falsa' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: '"r" vibrante simples, como o "r" do espanhol em "pero" — nunca o "r" gutural do português em início de palavra (de "rato")', example: ['rubie', 'vermelho'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: 'quase sempre "s" surdo, como em "sapo"; pode virar "z" entre vogais, como em português', example: ['soror', 'irmã'], group: 'igual' },
    { letter: 'T t', ipa: '[t]/[ts]', short: 't/ts', sound: '"t" normal, mas vira "ts" antes de "ia/ie/io/ion" (como "nation" = na-TSI-on) — padrão parecido com o "-tion" do inglês', example: ['tu', 'você/tu'], group: 'falsa' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['un', 'um'], group: 'igual' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '"v" de "vaca"', example: ['vino', 'vinho'], group: 'igual' },
    { letter: 'W w', ipa: '[w]', short: 'w', sound: 'só em palavras de empréstimo, como o "w" do inglês', example: ['whisky', 'uísque'], group: 'nova' },
    { letter: 'X x', ipa: '[ks]', short: 'ks', sound: '"ks", como em "táxi"', example: ['taxi', 'táxi'], group: 'igual' },
    { letter: 'Y y', ipa: '[i]', short: 'i', sound: 'só em palavras de empréstimo, soa como "i"', example: ['yoga', 'ioga'], group: 'nova' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '"z" de "zebra"', example: ['zero', 'zero'], group: 'igual' },
  ],
  readingWords: [
    ['io', '🙋', 'eu'],
    ['tu', '🫵', 'você/tu'],
    ['illa', '👩', 'ela'],
    ['patre', '👨', 'pai'],
    ['can', '🐕', 'cachorro'],
    ['catto', '🐈', 'gato'],
    ['pan', '🍞', 'pão'],
    ['aqua', '💧', 'água'],
    ['domo', '🏠', 'casa'],
    ['grande', '📏', 'grande'],
  ],
};
