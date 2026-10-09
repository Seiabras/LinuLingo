import type { AlphabetData } from '../types';

/**
 * Letras do cirílico antigo usadas no vocabulário deste pacote (treino do alfabeto) — não é o
 * alfabeto inteiro (o cirílico antigo tinha cerca de 40 letras, incluindo as iotadas/nasais de uso
 * raro, como as duas variantes de "yus" grande e pequeno), só o subconjunto necessário pra ler as
 * palavras já ensinadas. Fontes: Wikipedia (inglês) "Early Cyrillic alphabet" (nomes, valores
 * numéricos e IPA de cada letra, conferidos um a um via WebFetch) — cirílico (não o glagolítico,
 * o alfabeto ainda mais antigo que Cirilo criou primeiro: ver `gramatica.ts`) porque é dele que
 * vêm os alfabetos do russo, do búlgaro e do sérvio, já no app.
 *
 * Duas letras merecem atenção: «ъ» e «ь» eram vogais bem curtas e REALMENTE pronunciadas nesta
 * época (diferente do russo moderno, onde são só sinais mudos — ver a lição de gramática sobre
 * isso). «falsa» = parece uma letra latina, mas tem outro som (mesma armadilha do russo moderno:
 * В Н Р С Х); «igual» = parece e soa como a letra latina correspondente; «nova» = forma sem
 * equivalente latino.
 */
export const ALPHABET_CU: AlphabetData = {
  letters: [
    { letter: 'А а', ipa: '[a]', short: 'a', sound: '"a" de "casa"', example: ['азъ', 'eu (azъ)'], group: 'igual' },
    { letter: 'Б б', ipa: '[b]', short: 'b', sound: '"b" de "bola"', example: ['братъ', 'irmão (bratъ)'], group: 'nova' },
    { letter: 'В в', ipa: '[v]', short: 'v', sound: '"v" de "vaca". Parece B, mas é V!', example: ['вода', 'água (voda)'], group: 'falsa' },
    { letter: 'Г г', ipa: '[ɡ]', short: 'g', sound: '"g" de "gato", sempre duro', example: ['глаголати', 'falar (glagolati)'], group: 'nova' },
    { letter: 'Д д', ipa: '[d]', short: 'd', sound: '"d" de "dado"', example: ['домъ', 'casa (domъ)'], group: 'nova' },
    { letter: 'Е е', ipa: '[ɛ]', short: 'é', sound: '"é" de "café" (às vezes "iê", como no russo moderno)', example: ['единъ', 'um (jedinъ)'], group: 'igual' },
    { letter: 'З з', ipa: '[z]', short: 'z', sound: '"z" de "zebra"', example: ['зеленъ', 'verde (zelenъ)'], group: 'nova' },
    { letter: 'И и', ipa: '[i]', short: 'i', sound: '"i" de "igreja"', example: ['имѧ', 'nome (imę)'], group: 'nova' },
    { letter: 'К к', ipa: '[k]', short: 'k', sound: '"k" de "kiwi"', example: ['чловѣкъ', 'pessoa (chlověkъ, com o К no fim)'], group: 'igual' },
    { letter: 'Л л', ipa: '[l]', short: 'l', sound: '"l" de "lua"', example: ['глаголати', 'falar (glagolati)'], group: 'nova' },
    { letter: 'М м', ipa: '[m]', short: 'm', sound: '"m" de "mão"', example: ['мати', 'mãe (mati)'], group: 'igual' },
    { letter: 'Н н', ipa: '[n]', short: 'n', sound: '"n" de "navio". Parece H, mas é N!', example: ['не', 'não (ne)'], group: 'falsa' },
    { letter: 'О о', ipa: '[o]', short: 'o', sound: '"ô" de "bolo"', example: ['онъ', 'ele (onъ)'], group: 'igual' },
    { letter: 'П п', ipa: '[p]', short: 'p', sound: '"p" de "pato"', example: ['пѧть', 'cinco (pętь)'], group: 'nova' },
    { letter: 'Р р', ipa: '[r]', short: 'r', sound: '"r" vibrado. Parece P, mas é R!', example: ['братъ', 'irmão (bratъ)'], group: 'falsa' },
    { letter: 'С с', ipa: '[s]', short: 's', sound: '"s" de "sapo". Parece C, mas é S!', example: ['сестра', 'irmã (sestra)'], group: 'falsa' },
    { letter: 'Т т', ipa: '[t]', short: 't', sound: '"t" de "tatu"', example: ['тꙑ', 'tu/você (tꙑ)'], group: 'igual' },
    { letter: 'Х х', ipa: '[x]', short: 'rr', sound: '"r" de "rato" (como no Rio). Parece X, mas não é!', example: ['хлѣбъ', 'pão (chlěbъ)'], group: 'falsa' },
    { letter: 'Ч ч', ipa: '[tʃ]', short: 'tch', sound: '"tch" de "tchau"', example: ['чрьнъ', 'preto (črьnъ)'], group: 'nova' },
    { letter: 'Ш ш', ipa: '[ʃ]', short: 'ch', sound: '"ch" de "chá"', example: ['шесть', 'seis (šestь)'], group: 'nova' },
    { letter: 'Ъ ъ', ipa: '[ŭ]/[ʊ]', short: 'u curtinho', sound: 'uma vogal bem curta, perto de um "u" rápido — PRONUNCIADA de verdade nesta época (não é mudo como no russo moderno)', example: ['домъ', 'casa (domъ, termina com essa vogal curta)'], group: 'nova' },
    { letter: 'Ь ь', ipa: '[ĭ]/[ɪ]', short: 'i curtinho', sound: 'uma vogal bem curta, perto de um "i" rápido — também pronunciada de verdade, não é só sinal', example: ['отьць', 'pai (otьcь, no meio da palavra)'], group: 'nova' },
    { letter: 'Ѣ ѣ', ipa: '[æ]', short: 'é aberto', sound: 'um "e" bem aberto, entre o "e" e o "a"', example: ['хлѣбъ', 'pão (chlěbъ)'], group: 'nova' },
    { letter: 'Ѧ ѧ', ipa: '[ɛ̃]', short: 'en', sound: 'um "e" nasalizado, como o "en" do francês', example: ['имѧ', 'nome (imę)'], group: 'nova' },
    { letter: 'Ꙑ ꙑ', ipa: '[ɯ]', short: 'y', sound: 'um "i" dito com a língua bem recuada — nunca confundir com "и"', example: ['сꙑнъ', 'filho (sꙑnъ)'], group: 'nova' },
  ],
  readingWords: [
    ['азъ', '🙋', 'eu'],
    ['тꙑ', '🫵', 'tu/você'],
    ['мати', '👩', 'mãe'],
    ['братъ', '🧑', 'irmão'],
    ['сестра', '🧑', 'irmã'],
    ['сꙑнъ', '🧒', 'filho'],
    ['домъ', '🏠', 'casa'],
    ['вода', '💧', 'água'],
    ['хлѣбъ', '🍞', 'pão'],
    ['вино', '🍷', 'vinho'],
  ],
};
