import type { AlphabetData } from '../types';

/**
 * Letras do alfabeto copta usadas no vocabulário deste pacote (treino do alfabeto) — não é o
 * alfabeto inteiro (24 letras gregas + 7 egípcias, ver gramatica.ts, tópico cop-g3), só o subconjunto
 * necessário pra ler as palavras já ensinadas. Fontes: Wikipedia (inglês) "Coptic alphabet" (origem
 * e valor fonético de cada letra, conferidos um a um via WebFetch) e Wiktionary (pronúncia das
 * palavras de exemplo, já conferidas em vocabulario.ts). «falsa» = parece uma letra latina, mas tem
 * outro som — o grego (e por tabela o copta, que herdou 24 das suas 31/32 letras do grego) tem várias
 * dessas armadilhas: Ⲣ (parece P, é R), Ⲥ (parece C, é S — o copta usa a forma "lunar" do sigma, Ⲥ,
 * não a forma Σ/ς do grego moderno), Ⲏ (parece H, soa "ê"), Ⲭ (parece X, soa "kh"). «nova» = sem
 * equivalente latino — inclui as sete letras emprestadas do demótico egípcio (ϣ, ϩ aqui; as outras
 * cinco, ϥ/ϧ/ϫ/ϭ/ϯ, não aparecem no vocabulário deste nível).
 */
export const ALPHABET_COP: AlphabetData = {
  letters: [
    { letter: 'Ⲁ ⲁ', ipa: '[a]', short: 'a', sound: '"a" de "casa"', example: ['ⲣⲁⲛ', 'nome (ran)'], group: 'igual' },
    { letter: 'Ⲉ ⲉ', ipa: '[ɛ]', short: 'é', sound: '"é" de "café"', example: ['ⲉⲓⲱⲧ', 'pai (eiōt)'], group: 'igual' },
    { letter: 'Ⲏ ⲏ', ipa: '[eː]', short: 'ê', sound: '"ê" bem longo, de "mês". Parece H, mas soa "ê"!', example: ['ⲏⲓ', 'casa (ēi)'], group: 'falsa' },
    { letter: 'Ⲓ ⲓ', ipa: '[i]', short: 'i', sound: '"i" de "igreja"', example: ['ⲉⲓⲱⲧ', 'pai (eiōt, com o I no meio)'], group: 'igual' },
    { letter: 'Ⲕ ⲕ', ipa: '[k]', short: 'k', sound: '"k" de "kiwi"', example: ['ⲕⲟⲩⲓ', 'pequeno (koui)'], group: 'igual' },
    { letter: 'Ⲙ ⲙ', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['ⲙⲁⲁⲩ', 'mãe (maau)'], group: 'igual' },
    { letter: 'Ⲛ ⲛ', ipa: '[n]', short: 'n', sound: '"n" de "navio"', example: ['ⲛⲟⲩⲧⲉ', 'deus (noute)'], group: 'igual' },
    { letter: 'Ⲟ ⲟ', ipa: '[ɔ]', short: 'ó', sound: '"ó" de "bola"', example: ['ⲛⲟⲩⲧⲉ', 'deus (noute)'], group: 'igual' },
    { letter: 'Ⲣ ⲣ', ipa: '[ɾ]', short: 'r', sound: '"r" fraco, batido. Parece P, mas é R!', example: ['ⲣⲱⲙⲉ', 'pessoa (rōme)'], group: 'falsa' },
    { letter: 'Ⲥ ⲥ', ipa: '[s]', short: 's', sound: '"s" de "sapo". Parece C, mas é S!', example: ['ⲥⲟⲛ', 'irmão (son)'], group: 'falsa' },
    { letter: 'Ⲧ ⲧ', ipa: '[t]', short: 't', sound: '"t" de "tatu"', example: ['ϣⲟⲙⲛ̄ⲧ', 'três (šomn̄t, termina com T)'], group: 'igual' },
    { letter: 'Ⲱ ⲱ', ipa: '[oː]', short: 'ô', sound: '"ô" bem longo e fechado', example: ['ⲣⲱⲙⲉ', 'pessoa (rōme)'], group: 'igual' },
    { letter: 'Ⲭ ⲭ', ipa: '[kʰ]', short: 'kh', sound: 'um "k" bem aspirado, soprado. Parece X, mas soa "kh"!', example: ['ⲭⲉⲣⲉ', 'oi (khere)'], group: 'falsa' },
    { letter: 'Ϣ ϣ', ipa: '[ʃ]', short: 'ch', sound: '"ch" de "chá" — não existe no grego, vem do demótico egípcio', example: ['ϣⲏⲣⲉ', 'filho (šēre)'], group: 'nova' },
    { letter: 'Ϩ ϩ', ipa: '[h]', short: 'h', sound: '"h" bem aspirado, como o H do inglês — também vem do demótico', example: ['ⲥϩⲓⲙⲉ', 'mulher (shime, com o Ϩ no meio)'], group: 'nova' },
  ],
  readingWords: [
    ['ⲁⲛⲟⲕ', '🙋', 'eu'],
    ['ⲉⲓⲱⲧ', '👨', 'pai'],
    ['ⲙⲁⲁⲩ', '👩', 'mãe'],
    ['ⲥⲟⲛ', '🧑', 'irmão'],
    ['ⲣⲱⲙⲉ', '🧑', 'pessoa'],
    ['ⲏⲓ', '🏠', 'casa'],
    ['ⲙⲟⲟⲩ', '💧', 'água'],
    ['ⲟⲉⲓⲕ', '🍞', 'pão'],
  ],
};
