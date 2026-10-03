import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do hopi (hopílavayi), língua uto-asteca falada na Reserva Hopi, nordeste do Arizona
 * (EUA) — ver a classificação completa e as fontes gerais em `index.ts`.
 *
 * Cada palavra abaixo foi conferida individualmente no Wiktionary em inglês (seção “Hopi”, que reúne
 * as categorias “Hopi lemmas”/“Hopi nouns”/“Hopi verbs”/“Hopi adjectives”/“Hopi pronouns”/“Hopi
 * interjections” — ao todo só 320 lemas estão catalogados lá, e a categoria de verbos tem apenas 11
 * entradas no total: por isso o pacote tem poucos verbos e nenhum vocabulário de cumprimento fixo,
 * ver a nota em `incomplete`), no artigo “Hopi language” da Wikipédia em inglês (que fornece a tabela
 * de pronomes nu'/um/pam/itam/puma com as formas nominativa e oblíqua, e o exemplo “maana wuupa”,
 * “a moça [é] alta”, mostrando que um adjetivo predicativo não precisa de verbo de ligação) e, só para
 * os cinco numerais de 1 a 5, no site Native Languages of the Americas (native-languages.org/hopi_words.htm,
 * © 1998-2020), a única fonte aberta encontrada com esses números. O apóstrofo modificador “ʼ” (U+02BC,
 * uma letra, não um sinal de pontuação) marca a oclusiva glotal, na mesma convenção usada pelo
 * Wiktionary e pelo pacote navajo (nv) deste app.
 *
 * Nenhuma fonte consultada registra um “oi”, um “obrigado” ou um “sim”/“não” fixos em hopi — por isso
 * eles não aparecem aqui (ver a solução adotada para `greeting`/`phrases` em index.ts, que reaproveita
 * palavras reais em vez de inventar uma saudação).
 *
 * As frases de exemplo abaixo são combinações originais, montadas só com palavras confirmadas e com a
 * ordem sujeito-objeto-verbo (SOV) e o padrão substantivo+adjetivo sem verbo de ligação, ambos
 * documentados no artigo da Wikipédia (ver gramática desta unidade) — nunca citações de um texto
 * hopi que não foi conferido.
 */
export const ROWS: VocabRow[] = [
  // Natureza
  ['Taawa', 'sol', 'substantivo', 'Natureza', '☀️', 'Nuʼ taawa tuwa.'],
  ['Muuyaw', 'lua', 'substantivo', 'Natureza', '🌙', 'Pam muuyaw tuwa.'],
  ['Soohu', 'estrela', 'substantivo', 'Natureza', '⭐', 'Itam soohu tuwa.'],
  ['Nuva', 'neve', 'substantivo', 'Natureza', '❄️', 'Nuva qöötsa.'],
  ['Owa', 'pedra, rocha', 'substantivo', 'Natureza', '🪨', 'Owa qömvi.'],
  ['Tuukwi', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Nuʼ tuukwi tuwa.'],
  ['Paahu', 'água (da natureza, de nascente)', 'substantivo', 'Natureza', '💧', 'Paahu sakwa.'],
  ['Tuuva', 'areia', 'substantivo', 'Natureza', '🏖️', 'Tuuva qöötsa.'],
  ['Qöötsa', 'branco', 'adjetivo', 'Natureza', '⚪', 'Nuva qöötsa.'],
  ['Sakwa', 'azul', 'adjetivo', 'Natureza', '🔵', 'Paahu sakwa.'],
  ['Qömvi', 'preto', 'adjetivo', 'Natureza', '⚫', 'Owa qömvi.'],
  // Animais
  ['Hoonaw', 'urso', 'substantivo', 'Animais', '🐻', 'Nuʼ hoonaw tuwa.'],
  ['Kwewu', 'lobo', 'substantivo', 'Animais', '🐺', 'Um kwewu tuwa.'],
  ['Iisaw', 'coiote', 'substantivo', 'Animais', '🐾', 'Pam iisaw tuwa.'],
  ['Tsiro', 'pássaro', 'substantivo', 'Animais', '🐦', 'Itam tsiro tuwa.'],
  ['Mongwu', 'coruja-grande (coruja-orelhuda)', 'substantivo', 'Animais', '🦉', 'Puma mongwu tuwa.'],
  ['Koyongo', 'peru', 'substantivo', 'Animais', '🦃', 'Maana koyongo tuwa.'],
  ['Sowi', 'lebre americana (jackrabbit)', 'substantivo', 'Animais', '🐇', 'Taaqa sowi tuwa.'],
  ['Angwusi', 'corvo', 'substantivo', 'Animais', '🐦‍⬛', 'Wùuti angwusi tuwa.'],
  // Pessoas (inclui os pronomes documentados no artigo “Hopi language” da Wikipédia)
  ['Taaqa', 'homem (adulto)', 'substantivo', 'Pessoas', '🧑', 'Taaqa nöösa.'],
  ['Wùuti', 'mulher (adulta)', 'substantivo', 'Pessoas', '👩', 'Wùuti qaaʼö nöösa.'],
  ['Maana', 'moça, menina (jovem solteira; também “filha”)', 'substantivo', 'Pessoas', '👧', 'Maana sikwi nöösa.'],
  ['Nuʼ', 'eu', 'pronome', 'Pessoas', '🙋', 'Nuʼ taawa tuwa.'],
  ['Um', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Um hoonaw tuwa.'],
  ['Pam', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'Pam tsiro tuwa.'],
  ['Itam', 'nós', 'pronome', 'Pessoas', '🫂', 'Itam momori.'],
  ['Puma', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Puma qaaʼö nöösa.'],
  // Alimentação
  ['Qaaʼö', 'milho (espiga seca)', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Wùuti qaaʼö nöösa.'],
  ['Kuuyi', 'água (engarrafada, guardada dentro de casa)', 'substantivo', 'Alimentação e Restaurantes', '🥤', 'Kuuyi kwala.'],
  ['Sikwi', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Taaqa sikwi nöösa.'],
  // Corpo
  ['Poosi', 'olho (também “semente”, “caroço”)', 'substantivo', 'Corpo', '👁️', 'Nuʼ poosi tuwa.'],
  ['Qötö', 'cabeça', 'substantivo', 'Corpo', '👤', 'Um qötö tuwa.'],
  ['Naqvu', 'orelha', 'substantivo', 'Corpo', '👂', 'Pam naqvu tuwa.'],
  ['Yaqa', 'nariz', 'substantivo', 'Corpo', '👃', 'Itam yaqa tuwa.'],
  ['Tama', 'dente', 'substantivo', 'Corpo', '🦷', 'Puma tama tuwa.'],
  // Casa
  ['Kiihu', 'casa, lar (também “aldeia”)', 'substantivo', 'Casa', '🏠', 'Kiihu qöötsa.'],
  // Números (única fonte aberta encontrada para os numerais: native-languages.org/hopi_words.htm)
  ['Suukyaʼ', 'um', 'numeral', 'Números', '1️⃣', 'Suukyaʼ kwewu.'],
  ['Lööyöʼ', 'dois', 'numeral', 'Números', '2️⃣', 'Lööyöʼ hoonaw.'],
  ['Pàayoʼ', 'três', 'numeral', 'Números', '3️⃣', 'Pàayoʼ tsiro.'],
  ['Naalöyöʼ', 'quatro', 'numeral', 'Números', '4️⃣', 'Naalöyöʼ angwusi.'],
  ['Tsivot', 'cinco', 'numeral', 'Números', '5️⃣', 'Tsivot mongwu.'],
  // Essenciais
  ['Lavayi', 'palavra, língua', 'substantivo', 'Essenciais', '💬', 'Hopi lavayi.'],
  ['Qatsi', 'vida', 'substantivo', 'Essenciais', '🌱', 'Qatsi qöötsa.'],
  ['Hopi', 'pessoa hopi, civilizada, pacífica (dá nome ao povo e à própria língua)', 'substantivo', 'Essenciais', '🕊️', 'Taaqa hopi.'],
  ['Himu', 'algo, alguma coisa', 'pronome', 'Essenciais', '❓', 'Nuʼ himu tuwa.'],
  // Expressões
  ['Ohi', 'ah, que pena!, droga! (interjeição usada por homens)', 'interjeição', 'Expressões', '😣', 'Ohi!'],
  [
    'Koyaanisqatsi',
    'vida corrompida, fora do equilíbrio (palavra composta que deu nome ao filme de Godfrey Reggio, 1982)',
    'substantivo',
    'Expressões',
    '🌀',
    'Pam koyaanisqatsi navota.',
  ],
  // Verbos-chave (os únicos 11 verbos catalogados na categoria “Hopi verbs” do Wiktionary dão 8 deles)
  ['Nöösa', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Taaqa nöösa.'],
  ['Tuwa', 'ver, enxergar, encontrar', 'verbo', 'Verbos-chave', '👀', 'Wùuti tuukwi tuwa.'],
  ['Navota', 'ouvir, perceber', 'verbo', 'Verbos-chave', '👂', 'Pam tsiro navota.'],
  ['Kwala', 'ferver', 'verbo', 'Verbos-chave', '♨️', 'Kuuyi kwala.'],
  ['Momori', 'nadar', 'verbo', 'Verbos-chave', '🏊', 'Itam momori.'],
  ['Naani', 'rir baixinho, dar risadinha', 'verbo', 'Verbos-chave', '😄', 'Maana naani.'],
  ['Ööyi', 'ficar satisfeito, ficar cheio', 'verbo', 'Verbos-chave', '😌', 'Nuʼ ööyi.'],
  ['Takta', 'construir ninho', 'verbo', 'Verbos-chave', '🪺', 'Tsiro takta.'],
];

export const VOCAB_HOP = buildVocab('hop', ROWS);
