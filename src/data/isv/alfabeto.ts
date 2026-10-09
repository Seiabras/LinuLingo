import type { AlphabetData } from '../types';

/**
 * O alfabeto latino do interslavo: 27 letras — as 23 do alfabeto latino comum (todas menos q, w e
 * x) mais quatro consoantes com haček (č, ě, š, ž) e três dígrafos (dž, lj, nj). Fonte:
 * `steen.free.fr/interslavic/orthography.html` (seção “Standard alphabet”), conferida de novo nesta
 * sessão via HTTP direto. O interslavo tem também um alfabeto cirílico “oficialmente igual” (29
 * letras) — este curso usa só o latino, como o app já faz com outras línguas birracionais. Valores
 * sonoros: convenção eslava padrão (compartilhada por tcheco, eslovaco, croata, esloveno — línguas
 * já no app que usam as mesmas letras č/š/ž/ě).
 */
export const ALPHABET_ISV: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '“a” aberto, como em “casa”', example: ['ale', 'mas'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '“b” de “bola”', example: ['brat', 'irmão'], group: 'igual' },
    { letter: 'C c', ipa: '[ts]', short: 'ts', sound: '“ts”, como em “pizza”', example: ['časina', 'hora'], group: 'falsa' },
    { letter: 'Č č', ipa: '[tʃ]', short: 'tch', sound: '“tch”, como em “tchau”', example: ['črveny', 'vermelho'], group: 'nova' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '“d” de “dado”', example: ['denj', 'dia'], group: 'igual' },
    { letter: 'DŽ dž', ipa: '[dʒ]', short: 'dj', sound: '“d”+“j” português ligados, como em “adjetivo”', group: 'nova' },
    { letter: 'E e', ipa: '[ɛ]', short: 'e', sound: '“e” aberto, como em “ela”', example: ['on', 'ele'], group: 'igual' },
    { letter: 'Ě ě', ipa: '[ʲɛ]', short: 'ie', sound: 'o “yat”: amolece a consoante antes dele', example: ['hlěb', 'pão'], group: 'nova' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '“f” de “faca”', group: 'internacional' },
    { letter: 'G g', ipa: '[g]', short: 'g', sound: '“g” duro, como em “gato”', example: ['grad', 'cidade'], group: 'igual' },
    { letter: 'H h', ipa: '[ɦ]', short: 'r', sound: '“h” sonoro, parecido com o “r” carioca de “porta”', group: 'nova' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '“i” de “vida”', example: ['ime', 'nome'], group: 'igual' },
    { letter: 'J j', ipa: '[j]', short: 'i', sound: '“i” rápido antes de vogal, como o “y” do inglês “yes”', example: ['jedin', 'um'], group: 'nova' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '“k” de “casa”', example: ['kniga', 'livro'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '“l” de “lua”', example: ['luna', 'lua'], group: 'igual' },
    { letter: 'LJ lj', ipa: '[ʎ]', short: 'lh', sound: '“lh” português, como em “filho”', group: 'nova' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '“m” de “mão”', example: ['mati', 'mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '“n” de “nave”', group: 'igual' },
    { letter: 'NJ nj', ipa: '[ɲ]', short: 'nh', sound: '“nh” português, como em “banho”', group: 'nova' },
    { letter: 'O o', ipa: '[ɔ]', short: 'o', sound: '“o” aberto, como em “bola”', example: ['otec', 'pai'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '“p” de “pato”', group: 'igual' },
    { letter: 'R r', ipa: '[r]', short: 'r', sound: '“r” vibrante simples, como o “r” do espanhol em “pero”', example: ['ruka', 'mão'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: '“s” surdo, como em “sapo”', example: ['solnce', 'sol'], group: 'igual' },
    { letter: 'Š š', ipa: '[ʃ]', short: 'x', sound: '“x” português, como em “xadrez”', example: ['šest', 'seis'], group: 'nova' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '“t” de “tatu”', example: ['tri', 'três'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '“u” de “uva”', group: 'igual' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '“v” de “vaca”', example: ['voda', 'água'], group: 'igual' },
    { letter: 'Y y', ipa: '[ɨ]', short: 'i', sound: 'um “i” mais “fechado”/gutural — na dúvida, pronuncie como “i”', example: ['ty', 'você'], group: 'nova' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '“z” de “zebra”', example: ['zemja', 'terra'], group: 'igual' },
    { letter: 'Ž ž', ipa: '[ʒ]', short: 'j', sound: '“j” português, como em “já”', example: ['žena', 'mulher'], group: 'nova' },
  ],
  readingWords: [
    ['ja', '🙋', 'eu'],
    ['ty', '🫵', 'você/tu'],
    ['ona', '👩', 'ela'],
    ['otec', '👨', 'pai'],
    ['hlěb', '🍞', 'pão'],
    ['voda', '💧', 'água'],
    ['dom', '🏠', 'casa'],
    ['veliky', '📏', 'grande'],
    ['dobry', '👍', 'bom'],
    ['Dobry denj', '👋', 'olá/bom dia'],
  ],
};
