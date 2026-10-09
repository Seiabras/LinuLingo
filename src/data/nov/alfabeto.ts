import type { AlphabetData } from '../types';

/**
 * O alfabeto do novial: as 26 letras do alfabeto latino padrão, SEM nenhum diacrítico — Jespersen
 * chamava o circunflexo do esperanto (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ) de "o maior erro na história das línguas
 * auxiliares" (Otto Jespersen, "An International Language", 1928, capítulo AILsosp — sons e
 * ortografia, archive.org, item AILjespersen). A ortografia é fonêmica: cada palavra se pronuncia
 * como se escreve. Valores sonoros conferidos contra AILsosp.html e a Wikipédia ("Novial").
 */
export const ALPHABET_NOV: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '"a" aberto, como em "casa"', example: ['aque', 'água'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['boni', 'bom'], group: 'igual' },
    // Sem exemplo: o novial evita o "c" suave, preferindo "k" — nenhuma palavra do vocabulário
    // básico usa "c" (confirmado contra o Lexike de 1930, onde a letra C tem poucas entradas).
    { letter: 'C c', ipa: '[k]', short: 'k', sound: 'sempre "k" — o novial evita o "c" suave, preferindo "k" nessas palavras', group: 'internacional' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['die', 'dia'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'e', sound: '"e" fechado, como em "mesa"', example: ['es', 'ser/estar'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '"f" de "faca"', example: ['familie', 'família'], group: 'igual' },
    { letter: 'G g', ipa: '[g]', short: 'g', sound: '"g" duro, como em "gato"', example: ['grandi', 'grande'], group: 'igual' },
    { letter: 'H h', ipa: '[h]', short: 'h', sound: '"h" aspirado, como no inglês "house"', example: ['hause', 'casa'], group: 'nova' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '"i" de "vida"', example: ['libre', 'livro'], group: 'igual' },
    { letter: 'J j', ipa: '[ʒ]', short: 'j', sound: 'o mesmo som do "j" português, de "já"', example: ['jorne', 'dia'], group: 'igual' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '"k" de "casa"', example: ['kape', 'cabeça'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['libre', 'livro'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['matra', 'mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '"n" de "nave"', example: ['nome', 'nome'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '"o" fechado, como em "bolo"', example: ['ok', 'oito'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['pane', 'pão'], group: 'igual' },
    { letter: 'Q q', ipa: '[kw]', short: 'kw', sound: 'só em "qu", sempre "kw"', group: 'internacional' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: '"r" vibrante simples, como o "r" do espanhol em "pero"', example: ['redi', 'vermelho'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: '"s" surdo, como em "sapo"', example: ['sune', 'sol'], group: 'igual' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '"t" de "tatu"', example: ['tere', 'terra'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '"u" de "uva"', example: ['urbe', 'cidade'], group: 'igual' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '"v" de "vaca"', example: ['vada', 'ir'], group: 'igual' },
    { letter: 'W w', ipa: '[w]', short: 'w', sound: 'só em palavras de empréstimo, como o "w" do inglês', group: 'internacional' },
    { letter: 'X x', ipa: '[ks]', short: 'ks', sound: '"ks", como em "táxi"', group: 'internacional' },
    { letter: 'Y y', ipa: '[j]', short: 'y', sound: 'som de "i" rápido antes de vogal, como o "y" do inglês "yes"', example: ['yes', 'sim'], group: 'nova' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '"z" de "zebra"', group: 'internacional' },
  ],
  readingWords: [
    ['me', '🙋', 'eu'],
    ['vu', '🫵', 'você/tu'],
    ['la', '👩', 'ela'],
    ['patro', '👨', 'pai'],
    ['pane', '🍞', 'pão'],
    ['aque', '💧', 'água'],
    ['hause', '🏠', 'casa'],
    ['grandi', '📏', 'grande'],
    ['boni', '👍', 'bom'],
    ['bon jorne', '👋', 'olá/bom dia'],
  ],
};
