import type { AlphabetData } from '../types';

/**
 * As 16 runas do Futhark Mais Recente (Younger Futhark) — o alfabeto rúnico da era viking
 * (séc. VIII–XII), usado para o nórdico antigo antes (e durante) a escrita em alfabeto latino
 * das sagas e Eddas. Nomes, ordem e valores sonoros conferidos contra Wikipedia "Younger Futhark"
 * e openl.io/alphabets/younger-futhark. «falsa» = parece uma letra latina mas tem outro som;
 * «igual» = parece e soa como a letra latina correspondente; «nova» = forma sem equivalente.
 * Os exemplos mostram palavras já atestadas (ver `vocabulario.ts`, fonte Zoëga 1910) transliteradas
 * para as runas pela correspondência sonora confirmada — a grafia rúnica de palavras isoladas não é
 * um padrão fixo (inscrições reais variam), então isto é um exercício de leitura, não uma citação
 * de inscrição específica.
 */
export const ALPHABET_NON: AlphabetData = {
  letters: [
    { letter: 'ᚠ', ipa: '[f]', short: 'fé', sound: '"f" de "faca"', example: ['ᚠᛅᚦᛁᚱ', 'pai (faðir)'], group: 'nova' },
    { letter: 'ᚢ', ipa: '[u]/[v]/[w]/[y]/[ø]', short: 'úr', sound: 'vale pra vários sons parecidos: "u", "v", "w", "y" ou "ø"', example: ['ᚢᛅᛏᚾ', 'água (vatn)'], group: 'nova' },
    { letter: 'ᚦ', ipa: '[θ]/[ð]', short: 'þurs', sound: '"th" surdo ou sonoro (os mesmos sons de þ/ð na escrita latina)', example: ['ᛒᚱᛅᚢᚦ', 'pão (brauð)'], group: 'igual' },
    { letter: 'ᚬ', ipa: '[o]/[ɔ]', short: 'óss', sound: '"o" aberto ou fechado', example: ['ᛋᚬᚾᚱ', 'filho (sonr)'], group: 'nova' },
    { letter: 'ᚱ', ipa: '[r]', short: 'reið', sound: '"r" vibrado', example: ['ᚢᛁᚾᚱ', 'amigo (vinr)'], group: 'igual' },
    { letter: 'ᚴ', ipa: '[k]/[g]/[ŋ]', short: 'kaun', sound: 'vale pra "k", "g" ou "ng", sem distinguir', example: ['ᚴᚬᛏᛏᚱ', 'gato (köttr)'], group: 'nova' },
    { letter: 'ᚼ', ipa: '[h]', short: 'hagall', sound: '"h" aspirado', example: ['ᚼᚢᛋ', 'casa (hús)'], group: 'igual' },
    { letter: 'ᚾ', ipa: '[n]', short: 'nauðr', sound: '"n" de "nave"', example: ['ᚼᚢᚾᛏᚱ', 'cachorro (hundr)'], group: 'igual' },
    { letter: 'ᛁ', ipa: '[i]/[e]', short: 'íss', sound: '"i" ou "e" fechado', example: ['ᛁᚴ', 'eu (ek)'], group: 'igual' },
    { letter: 'ᛅ', ipa: '[a]', short: 'ár', sound: '"a" de "casa"', example: ['ᚢᛅᛏᚾ', 'água (vatn)'], group: 'nova' },
    { letter: 'ᛋ', ipa: '[s]', short: 'sól', sound: '"s" de "sapo"', example: ['ᛋᚬᚾᚱ', 'filho (sonr)'], group: 'igual' },
    { letter: 'ᛏ', ipa: '[t]/[d]', short: 'týr', sound: '"t" ou "d", sem distinguir', example: ['ᚼᚢᚾᛏᚱ', 'cachorro (hundr)'], group: 'igual' },
    { letter: 'ᛒ', ipa: '[b]/[p]', short: 'bjarkan', sound: '"b" ou "p". Parece um P ou R, mas é B!', example: ['ᛒᚱᛅᚢᚦ', 'pão (brauð)'], group: 'falsa' },
    { letter: 'ᛘ', ipa: '[m]', short: 'maðr', sound: '"m" de "mão"', example: ['ᛘᚬᚦᛁᚱ', 'mãe (móðir)'], group: 'igual' },
    { letter: 'ᛚ', ipa: '[l]', short: 'lögr', sound: '"l" de "lua"', example: ['ᛚᛁᛏᛁᛚᛚ', 'pequeno (lítill)'], group: 'igual' },
    { letter: 'ᛦ', ipa: '[ʀ]', short: 'ýr', sound: 'um "r" diferente do de reið (vem de um som antigo "z"). Parece um Y, mas não tem nada a ver!', example: ['ýr', 'teixo (o próprio nome da runa)'], group: 'falsa' },
  ],
  readingWords: [
    ['ᛁᚴ', '🙋', 'eu'],
    ['ᚢᛁᚾᚱ', '🧑‍🤝‍🧑', 'amigo'],
    ['ᛋᚬᚾᚱ', '🧒', 'filho'],
    ['ᚼᚢᚾᛏᚱ', '🐕', 'cachorro'],
    ['ᚴᚬᛏᛏᚱ', '🐈', 'gato'],
    ['ᛒᚱᛅᚢᚦ', '🍞', 'pão'],
    ['ᚢᛅᛏᚾ', '💧', 'água'],
    ['ᚼᚢᛋ', '🏠', 'casa'],
    ['ᚠᛅᚦᛁᚱ', '👨', 'pai'],
    ['ᛘᚬᚦᛁᚱ', '👩', 'mãe'],
  ],
};
