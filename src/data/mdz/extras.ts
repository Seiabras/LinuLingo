import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo aikewára).
 * Gabaritos: “aker” (s.v. “uker”), “ereker pa'e?” ([L14] ex. 080), “eho puhi” ([L14] ex. 140-141 e
 * [L15] 1.3.2.4: “ɛhɔ puhi ‘não vá’”).
 */
export const COMMUNITY_MDZ: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Dizer “eu dormi”.',
    content: 'Ereker.',
    reference: 'Aker.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Perguntar “você dormiu?”.',
    content: "Pa'e ereker?",
    reference: "Ereker pa'e?",
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Dizer “não vá!”.',
    content: 'Nawi eho.',
    reference: 'Eho puhi.',
  },
];

/**
 * Cenário de conversa. As fontes não registram uma forma de tratamento “formal” separada (os
 * pronomes de [L15] Quadro 5 não têm forma de respeito), então o cenário é informal, como nos outros
 * pacotes de língua indígena. Falas: ver historias.ts; “Nawi. Aha puta.” junta duas falas
 * atestadas (s.v. “nawi” e s.v. “oho”: “aha puta eu vou embora”).
 */
export const SCENARIOS_MDZ: ScenarioSeed[] = [
  {
    id: 'mdz-s1',
    title: 'Visita a uma aldeia aikewara',
    emoji: '🏡',
    cefr: 'A1',
    register: 'informal',
    persona: 'O dono de uma casa numa aldeia aikewara da Terra Indígena Sororó, no Pará',
    description:
      'As fontes consultadas não registram um jeito “formal” separado do informal no aikewára: o mesmo “ene” (você) serve para qualquer pessoa.',
    turns: [
      {
        bot: "Mo wi pa'e eresor?",
        botTranslation: 'De onde você veio?',
        keywords: ['asor'],
        suggestions: ["Ka'a wi asor."],
      },
      {
        bot: "Ne ma'euej pa'e?",
        botTranslation: 'Você está com fome?',
        keywords: ["ma'euej"],
        suggestions: ["Ti ma'euej."],
      },
      {
        bot: 'Kopesor, sakaru.',
        botTranslation: 'Vem aqui, vamos comer.',
        keywords: ['katuete', 'episepise'],
        suggestions: ['Katuete!', "Temi'u episepise."],
      },
      {
        bot: "Aj'aw pa'e reko?",
        botTranslation: 'Você está morando aqui?',
        keywords: ['nawi'],
        suggestions: ['Nawi. Aha puta.'],
      },
    ],
  },
];

/**
 * Etimologias. Fontes:
 *  - “misakatirona” (boi, vaca): [L15] 1.2.2.4, composição mista: misaɾa ‘veado’ + katiŋ
 *    ‘fedorento’ → misakatiŋ ‘burro’ + -ɾɔna ‘parecido’ → ‘vaca, boi’; [L14] s.v. “misakatinga”
 *    (cavalo, burro, jumento), “misakatirona” (boi, vaca). O tapi'iruhu do ka'apor (“anta grande”) é
 *    a comparação, do pacote urb.
 *  - “ipiroj” (piranha): [L15] 1.2.2.2, composição atributiva: ipiɾa ‘peixe’ + ɔs ‘dente’ → ipiɾɔs
 *    ‘peixe dentudo → piranha’. Tupi antigo pirãîa = pirá (peixe) + ãî (dentado) + -a, de onde vem o
 *    português “piranha” (Wikcionário em inglês, verbetes “pirãîa” e “piranha”, que citam Navarro 2013).
 *  - “kwarahy” (sol): [L15] Quadro 2 e [L14] s.v. “kwarahy”; o mito de Mahyra, “pai dos gêmeos
 *    Korahi e Sahi (o sol e a lua)”, que roubou o fogo do urubu: [ISA], verbete de Roque de Barros
 *    Laraia. Cognatos nos pacotes irmãos: tpw kûarahy, gn kuarahy, urb warahy (kwarahy dos mais velhos).
 *  - “muruwisawa” (chefe): [L14] s.v. “muruwisawa” (chefe, liderança) e os exemplos “ita
 *    muruwisawete” (pedra enorme), “'oga muruwisawete” (casa grande); [ISA]: “morobixawa”, chefe,
 *    “pode ser traduzida como ‘grande’” e está em “sahi morobixawa”, a lua cheia. Tupi antigo
 *    morubixaba (chefe), daí o português “morubixaba” (Wikcionário em inglês, “morubixaba”).
 *  - “ma'e kytykawa” (liquidificador): [L14] s.v. “ma'e kytykawa” e “so kytykawa” (ralador de
 *    castanha), e [L15] p. 146 e nota 7: a paxiúba era o ralador de castanha-do-pará; o
 *    liquidificador, que passou a fazer esse trabalho, recebeu o mesmo nome. -aw ‘nome de
 *    circunstância/instrumento’: [L15] 1.1.2.2.
 */
export const ETYMOLOGY_MDZ: EtymologySeed[] = [
  {
    word: 'misakatirona',
    root_word: 'misara (veado) + katiŋ (fedorento) + -rona (parecido)',
    origin_language: 'Aikewára',
    cognates: c(['mdz', 'misakatinga (cavalo, burro)'], ['urb', "tapi'iruhu (boi: “anta grande”)"]),
    evolution_note:
      'Quando chegaram os bichos dos brancos, o aikewára fez nomes com as próprias raízes. O burro e o cavalo viraram “misakatinga”, o “veado fedorento” (misara, veado + katiŋ, fedorento). E o boi e a vaca, “misakatirona”: o “parecido com o veado fedorento”, com o final -rona, “parecido”. O ka’apor, primo do aikewára, fez a mesma coisa de outro jeito: lá o boi é a “anta grande”.',
    transparent: true,
  },
  {
    word: 'ipiroj',
    root_word: 'ipira (peixe) + oj (dente)',
    origin_language: 'Aikewára',
    cognates: c(['tpw', 'pirãîa (piranha)'], ['pt', 'piranha']),
    evolution_note:
      'A piranha é o “peixe dentudo”: “ipira” (peixe) + “oj” (dente). O tupi antigo fez a mesma conta — “pirãîa”, de “pirá” (peixe) e “ãî” (dentado) —, e é dele que vem a palavra portuguesa “piranha”.',
    transparent: true,
  },
  {
    word: 'kwarahy',
    root_word: 'kwarahy (sol), da família tupi-guarani',
    origin_language: 'Aikewára',
    cognates: c(['tpw', 'kûarahy'], ['gn', 'kuarahy'], ['urb', 'warahy']),
    evolution_note:
      'O sol, “kwarahy”, tem irmãos em toda a família: “kûarahy” no tupi antigo, “kuarahy” no guarani, “warahy” no ka’apor. Nas histórias dos Aikewara, o herói Mahyra — que roubou o fogo do urubu e o deu às pessoas — é o pai dos gêmeos Korahi e Sahi, o sol e a lua. Em aikewára, a lua é “sahy”.',
    transparent: false,
  },
  {
    word: 'muruwisawa',
    root_word: 'muruwisawa (chefe; também “grande”)',
    origin_language: 'Aikewára',
    cognates: c(['tpw', 'morubixaba (chefe)'], ['pt', 'morubixaba']),
    evolution_note:
      'O chefe, a liderança, é “muruwisawa”. A palavra também quer dizer “grande”: “ita muruwisawete” é uma pedra enorme, e a lua cheia já foi registrada como “sahi morobixawa”, a lua grande. É a mesma palavra do tupi antigo “morubixaba” (chefe), que o português do Brasil guardou.',
    transparent: false,
  },
  {
    word: "ma'e kytykawa",
    root_word: "ma'e (coisa) + kytyk (ralar) + -aw (instrumento)",
    origin_language: 'Aikewára',
    cognates: c(['mdz', 'so kytykawa (ralador de castanha)']),
    evolution_note:
      'Para ralar castanha-do-pará, os Aikewara usavam um ralador de paxiúba, o “so kytykawa” (ralador de castanha). Quando chegou o liquidificador, que passou a fazer esse trabalho, ele ganhou o mesmo tipo de nome: “ma’e kytykawa”, o “ralador de coisas”. É um jeito de a língua criar palavras para o que é novo sem pedir emprestado ao português.',
    transparent: true,
  },
];

// Temas do diário: “Mo wi pa'e eresor?” (s.v. “mo”), “Ereker pa'e?” ([L14] ex. 080), “Ne ma'euej
// pa'e?” (s.v. “ima'euej”), “Mume pa'e rekerehe?” (s.v. “mume”, “onde você dormiu?”).
export const JOURNAL_PROMPTS_MDZ: [string, string][] = [
  ["Mo wi pa'e eresor?", 'De onde você veio?'],
  ["Ereker pa'e?", 'Você dormiu?'],
  ["Ne ma'euej pa'e?", 'Você está com fome?'],
  ["Mume pa'e rekerehe?", 'Onde você dormiu?'],
];

// Shadowing: s.v. “ukojte”, “oho”, “ipise”, “aiko re wehe” (“aiko re wehe ikyr choveu ontem”).
export const SHADOWING_MDZ: [string, string][] = [
  ['Akojte ne rehe.', 'Eu gosto de você.'],
  ['Aha puta.', 'Eu vou embora.'],
  ["Temi'u episepise.", 'A comida está muito gostosa.'],
  ['Aiko re wehe ikyr.', 'Choveu ontem.'],
];
