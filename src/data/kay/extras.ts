import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção — erros típicos de quem fala português: pôr um verbo
 * «ser» onde o kamaiurá não usa (797a ije Kawa), esquecer a troca -t → -r antes do -a (424 jawar-a
 * o-y-'u) e esquecer o i- das cores (1436b moĩ-a i-pitsun).
 */
export const COMMUNITY_KAY: CommunitySeed[] = [
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Awa ene?',
    content: 'Ije ako Linu.',
    reference: 'Ije Linu.',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: "Jawat oy'u?",
    content: "Jawata oy'u.",
    reference: "Jawara oy'u.",
  },
  {
    author_name: 'Marcos 🇧🇷',
    prompt: 'Moĩ: pitsun?',
    content: 'Moĩa pitsun.',
    reference: 'Moĩa ipitsun.',
  },
];

/** Cenário de conversa: frases de (797), (73), (231) e do texto de Arawitará (linhas 16–17). */
export const SCENARIOS_KAY: ScenarioSeed[] = [
  {
    id: 'kay-s1',
    title: "Erejo ko'yt: visita à aldeia",
    emoji: '🏘️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma senhora kamaiurá que recebe quem chega à aldeia, na beira da lagoa Ipavu',
    description:
      'Uma chegada à aldeia, do jeito kamaiurá. Nas fontes consultadas não há um pronome de respeito separado, como “o senhor”: “ene” (você) serve para qualquer pessoa. O que muda conforme quem fala são algumas partículas do fim da frase, que têm uma forma usada por homens e outra por mulheres.',
    turns: [
      {
        bot: "Haaa, erejo ko'yt?",
        botTranslation: 'Ah! Você veio?',
        keywords: ['ajo'],
        suggestions: ["Ajo ko'yt."],
      },
      {
        bot: 'Awa ene?',
        botTranslation: 'Quem é você?',
        keywords: ['ije'],
        suggestions: ['Ije Linu.'],
      },
      {
        bot: 'Ejot ekarum!',
        botTranslation: 'Venha comer!',
        keywords: ['aje'],
        suggestions: ['Aje.'],
      },
    ],
  },
];

/**
 * Etimologias. As quatro primeiras vêm de raízes do proto-tupi-guarani conferidas uma a uma nas páginas
 * de reconstrução do Wiktionary em inglês (*jawar, *jakare, *tatu, *paje), que listam os descendentes
 * em kamaiurá (jawat, tatu, paje), no tupi antigo, no guarani e no nheengatu, e as palavras que o
 * português recebeu pelo tupi antigo (jacaré, tatu, pajé); a forma kamaiurá «jakare» é de Seki (p. 457).
 * «Ka'ahet» é de Seki, p. 404: «ka'a-het, papel, livro — lit. similar a folha», na lista de palavras
 * criadas para coisas novas.
 */
export const ETYMOLOGY_KAY: EtymologySeed[] = [
  {
    word: 'jawat',
    root_word: '*jawar',
    origin_language: 'Protupi-guarani',
    cognates: c(['tpw', 'îagûara'], ['gn', 'jagua'], ['yrl', 'yawara']),
    evolution_note:
      'A onça do kamaiurá, “jawat”, vem da mesma raiz tupi-guarani “*jawar” que deu o tupi antigo “îagûara” — de onde o português tirou “jaguar” — e o guarani “jagua”, que hoje quer dizer “cachorro”. O kamaiurá é uma das poucas línguas da família que guardou a consoante do fim da palavra: o “t” final de “jawat” vira “r” antes de vogal (“jawara kujã”, onça fêmea), quase como na raiz antiga.',
    transparent: false,
  },
  {
    word: 'jakare',
    root_word: '*jakare',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jacaré (via tupi antigo îakaré)'], ['tpw', 'îakaré'], ['gn', 'jakare']),
    evolution_note:
      'O “jakare” kamaiurá e o “jacaré” do português são primos: os dois vêm da raiz tupi-guarani “*jakare”. O português recebeu a palavra do tupi antigo da costa (“îakaré”) no tempo da colonização; o kamaiurá a herdou direto, no interior do Brasil, sem passar pelo português.',
    transparent: true,
  },
  {
    word: 'tatu',
    root_word: '*tatu',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'tatu (via tupi antigo)'], ['tpw', 'tatu'], ['gn', 'tatu'], ['yrl', 'tatú']),
    evolution_note:
      'A palavra quase não mudou de uma língua para outra: é “tatu” em kamaiurá, no tupi antigo, no guarani e no português, que a recebeu do tupi antigo. O kamaiurá também tem “tatupep”, a tatupeba — outro nome que o português herdou da mesma família de línguas.',
    transparent: true,
  },
  {
    word: 'paje',
    root_word: '*paje',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'pajé (via tupi antigo paîé)'], ['tpw', 'paîé'], ['gn', 'paje'], ['yrl', 'payé']),
    evolution_note:
      'O “paje” do kamaiurá e o “pajé” do português vêm da mesma raiz tupi-guarani “*paje”, o especialista em cura e no mundo dos espíritos. O português pegou a palavra do tupi antigo “paîé”; no Alto Xingu, o xamanismo segue sendo uma parte forte da cultura comum aos povos da região.',
    transparent: true,
  },
  {
    word: "ka'ahet",
    root_word: "ka'a + -het",
    origin_language: 'Kamaiurá',
    cognates: c(),
    evolution_note:
      'Quando o papel e os livros chegaram à aldeia, o kamaiurá não copiou a palavra portuguesa: juntou “ka\'a” (folha, mata) e “-het” (parecido com), e o papel virou “ka\'ahet”, a coisa parecida com folha. Do mesmo jeito nasceram “kwara ra\'aŋap” (imagem do sol), o relógio, e “itaju” (pedra amarela), o metal.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KAY: [string, string][] = [
  ['Awa ene?', 'Quem é você? Apresente-se com “Ije…” e conte de onde você é.'],
  ['Jene retama.', 'A nossa aldeia: descreva o lugar onde você mora e quem mora com você.'],
  ["Po ipira a'ep?", 'Lá tem peixe? Escreva sobre um rio, lago ou mar que você conhece e os bichos que vivem lá.'],
  ["Kwara o'at.", 'Passou um ano: o que mudou na sua vida de um ano para cá?'],
];

export const SHADOWING_KAY: [string, string][] = [
  ["Erejo ko'yt? — Ajo ko'yt.", 'Você veio? — Eu vim.'],
  ['Awa ene? — Ije Linu.', 'Quem é você? — Eu sou o Linu.'],
  ["Mojepete, mokõj, mo'apyt, mojo'irũ, jenepomomap.", 'Um, dois, três, quatro, cinco.'],
  ['Moĩa ipitsun.', 'A cobra é preta.'],
];
