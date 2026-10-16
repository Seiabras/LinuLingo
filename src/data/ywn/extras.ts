import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. Siglas como em vocabulario. Frases: “Ē mia kuxa.” (CT13 94,
 * SD24 ex. 56); “Tikan yawa retea.” (CT13 97); “Atsa shuy.” (CTY 80). Os erros dos alunos são os que a
 * aba Gramática avisa: pronome de quem faz no lugar de quem recebe, verbo no meio, adjetivo antes.
 */
export const COMMUNITY_YWN: CommunitySeed[] = [
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Escreva “Eu bati em você” em yawanawá.',
    content: 'Ē mĩ kuxa.',
    reference: 'Ē mia kuxa. Quando “você” recebe a ação, a forma é “mia”; “mĩ” é para quem faz.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Diga “Tika matou o queixada”.',
    content: 'Tika retea yawa.',
    reference: 'Tikan yawa retea. O verbo vem no fim, e quem faz a ação ganha o “-n”.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Como se diz “macaxeira assada”?',
    content: 'Shuy atsa.',
    reference: 'Atsa shuy. Em yawanawá o adjetivo vem depois do nome.',
  },
];

/**
 * Cenário informal (as fontes não descrevem tratamento formal). Falas: “Txai!” (VAK 21; GIL99 60);
 * “Ē nukua.” (CT13 95); “Ewan peshe.” MONTADA (ewan + substantivo, regra de “e-wan vene”, PAU08 ex. 13);
 * “Peshe vena.” MONTADA (substantivo + adjetivo, regra de “mapu turu”, PAU03 ex. 09); “Atsa shuy.” e
 * “Yuma pitxã.” (CTY 75 e 80).
 */
export const SCENARIOS_YWN: ScenarioSeed[] = [
  {
    id: 'ywn-s1',
    title: 'Chegada numa aldeia do rio Gregório',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador yawanawá que recebe você na aldeia, às margens do rio Gregório (Acre)',
    description: 'Você chega de canoa. Responda ao “txai”, elogie a casa e aceite a comida.',
    turns: [
      {
        bot: 'Txai!',
        botTranslation: 'Primo!',
        keywords: ['txai', 'nukua'],
        suggestions: ['Txai! Ē nukua.'],
      },
      {
        bot: 'Ewan peshe.',
        botTranslation: 'Minha casa.',
        keywords: ['peshe', 'vena'],
        suggestions: ['Peshe vena.'],
      },
      {
        bot: 'Atsa shuy.',
        botTranslation: 'Macaxeira assada.',
        keywords: ['yuma', 'pitxã', 'atsa'],
        suggestions: ['Yuma pitxã.'],
      },
    ],
  },
];

/**
 * Etimologia: o yawanawá não é parente do português. As notas mostram como a língua forma palavras e
 * comparam com o marúbo e o huni kuĩ, línguas pano que também estão no app (as formas do marúbo vêm do
 * pacote mzr, com as fontes lá citadas; as do huni kuĩ, do pacote cbs).
 */
export const ETYMOLOGY_YWN: EtymologySeed[] = [
  {
    word: 'wisti',
    root_word: 'wisti',
    origin_language: 'Pano',
    cognates: c(['cbs', 'bɨsti (um)']),
    evolution_note:
      '“Wisti” (um) aparece igual na lista de native-languages.org e na lista do banco de dados ASJP feita a partir da tese de Paula (2004). A tabela de native-languages.org mostra a mesma raiz em outras línguas pano: “huestí” no capanahua, “wɨstisɨ” no marúbo e “besti” no cashinahua, que é o huni kuĩ (no pacote “cbs” deste app, “bɨsti”). O livro “Vakehu Shenipahu” usa “westi” no sentido de “sozinho”.',
    transparent: false,
  },
  {
    word: 'rave',
    root_word: 'rave',
    origin_language: 'Pano',
    cognates: c(['cbs', 'rabɨ (dois)']),
    evolution_note:
      '“Rave” (dois) é “rab3” na lista do ASJP, que escreve com “b” o mesmo som que a grafia prática escreve com “v”, e com “3” a vogal que se escreve “e”. No huni kuĩ é “rabɨ”; no shipibo, “rabé”, segundo native-languages.org.',
    transparent: false,
  },
  {
    word: 'nawa',
    root_word: 'nawa',
    origin_language: 'Pano',
    cognates: c(['ywn', 'Rununawa (povo da cobra)'], ['ywn', 'Kãmãnawa (povo da onça)'], ['mzr', 'nawa (estrangeiro; povo)']),
    evolution_note:
      '“Nawa” é povo, gente. Fecha o nome “Yawanawá” (yawa, queixada + nawa) e o das famílias que vivem com os Yawanawá: Rununawa (povo da cobra), Kãmãnawa (povo da onça), Iskunawa (povo do japó), segundo o livro “Costumes e tradições do povo Yawanawá”. O mesmo livro diz que os brancos são os “nawá”. No marúbo, “nawa” também quer dizer estrangeiro e aparece em nomes de povos.',
    transparent: true,
  },
  {
    word: 'tsãi',
    root_word: 'tsãi',
    origin_language: 'Yawanawá',
    cognates: c(['ywn', 'nuke (nosso)']),
    evolution_note:
      'O Plano de Vida Yawanawa (2016) chama a língua do povo de “Nuke Tsãi”: “nuke” é nosso e “tsãi” é fala, língua. No livro “Vakehu Shenipahu”, o texto de abertura do pajé Tata, que fica sem tradução, fala de “Nukē tsãi”, a nossa fala.',
    transparent: true,
  },
  {
    word: 'vake',
    root_word: 'vake',
    origin_language: 'Yawanawá',
    cognates: c(['ywn', 'vakehu (crianças)']),
    evolution_note:
      '“Vake” é criança e filho. Com o plural “-hu” vira “vakehu”, as crianças, como no título do livro de contos “Vakehu Shenipahu”. Paula mostra outras palavras feitas com ela: “takaravake” (galinha + filho, o pinto, em 2003) e “auin-vake” (mulher + criança, a filha, na tese de 2004).',
    transparent: true,
  },
  {
    word: 'imi',
    root_word: 'imi',
    origin_language: 'Pano',
    cognates: c(['mzr', 'imi (sangue)'], ['mzr', 'txi (fogo)'], ['mzr', 'yame (noite)']),
    evolution_note:
      'Várias palavras do yawanawá são iguais às do marúbo, outra língua pano do app: “imi” (sangue), “txi” (fogo), “yame” (noite), “ane” (nome), “nami” (carne) e “txai” (primo cruzado). As formas do yawanawá vêm da lista do ASJP feita a partir de Paula (2004) e dos livros da comunidade.',
    transparent: false,
  },
  {
    word: 'yawa',
    root_word: 'yawa',
    origin_language: 'Yawanawá',
    cognates: [],
    evolution_note:
      '“Yawa” é o queixada, um porco-do-mato, e a primeira metade do nome do povo. Paula (2003) mostra a palavra composta: yawa + nawa + o plural “-hu”, “os Yawanawá”, com a sílaba forte passando para o fim da palavra.',
    transparent: false,
  },
];

/** Temas do diário: frases citadas (CTY 80; PAU08 ex. 13; VAK 8; PV16) como ponto de partida. */
export const JOURNAL_PROMPTS_YWN: [string, string][] = [
  ['Atsa shuy.', 'Macaxeira assada. Qual é a comida da sua casa de que você mais gosta? Como ela é feita?'],
  ['Ewan vene.', 'Meu marido. Apresente uma pessoa da sua família começando com “ewan” (meu).'],
  ['Ē nika.', 'Assim eu escutei. Conte uma história que você ouviu de alguém mais velho.'],
  ['Nuke tsãi.', 'Nossa língua. Que língua se falava na casa dos seus avós?'],
];

/** Frases para repetir em voz alta: CT13 95 e 116; PAU08 ex. 13; CTY 75 e 80; VAK 8 e 13. */
export const SHADOWING_YWN: [string, string][] = [
  ['Txai! Ē nukua.', 'Primo! Eu cheguei.'],
  ['Mĩ yawa retea.', 'Você matou o queixada.'],
  ['Ewan vene.', 'Meu marido.'],
  ['Atsa shuy, yuma pitxã.', 'Macaxeira assada, peixe cozido.'],
  ['Ē nika.', 'Assim eu escutei.'],
  ['Mã awea waĩ?', 'O que vocês estão fazendo?'],
];
