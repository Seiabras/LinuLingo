import type { UnitSeed } from '../types';

/**
 * Trilha do esperanto: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts) — a primeira língua construída do app com curso de verdade (pedido do Matheus,
 * 08/10/2026). Fontes: L. L. Zamenhof, "Fundamento de Esperanto" (1887); PMEG (lernu.net/pmeg);
 * Wikipedia "Esperanto grammar"/"Esperanto vocabulary"/"Esperanto orthography".
 */
export const UNITS_EO: UnitSeed[] = [
  {
    id: 'eo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Saluton! Unuaj paŝoj',
    emoji: '👋',
    card: {
      id: 'eo-c1',
      title: 'Uma língua inventada para unir, não para dividir',
      emoji: '⭐',
      history:
        'O esperanto nasceu em 1887, em Białystok (hoje na Polônia, então parte do Império Russo), criado pelo oftalmologista judeu L. L. Zamenhof. Ele cresceu numa cidade onde se falavam polonês, russo, iídiche e alemão, e via nas brigas entre essas comunidades um problema de falta de comunicação. Zamenhof publicou a primeira gramática sob o pseudônimo "Doktoro Esperanto" ("Doutor que Espera"), num livreto chamado "Lingvo Internacia" — o pseudônimo pegou tanto que virou o nome da própria língua.',
      culture_tip:
        'A bandeira do esperanto é branca, com uma estrela verde de cinco pontas no canto superior esquerdo: o verde simboliza esperança, e a estrela, os cinco continentes. O dia 15 de dezembro, aniversário de Zamenhof, é celebrado pela comunidade mundial como a Zamenhofa Tago.',
      grammar_why:
        'Como o verbo do esperanto NUNCA muda de forma pela pessoa ("estas" serve pra "eu sou", "você é", "ele é"...), o pronome de sujeito nunca pode ser omitido — diferente do português, em que "sou Ana" já basta sozinho. Sem o pronome, ninguém saberia quem é o sujeito.',
      grammar_examples: [
        ['Mi estas Ana.', 'Eu sou Ana.'],
        ['Ŝi estas mia patrino.', 'Ela é minha mãe.'],
      ],
      character_guide: [
        ['c', 'sempre "ts", como em "tsunami"', 'centro ("TSEN-tro", centro)'],
        ['g', 'sempre "g" duro, mesmo antes de e/i — diferente do "gelo" português', 'granda ("GRAN-da", grande)'],
        ['j', '"i" curto/deslizado, como o "y" do inglês "yes"', 'jes ("iéss", sim)'],
        ['ĵ', 'esse SIM é o som do "j" português, de "já"', 'ĵurnalo ("jur-NA-lo", jornal)'],
      ],
    },
    lessons: [
      {
        id: 'eo-u1-l1',
        title: 'Saluton, dankon!',
        kind: 'licao',
        words: ['saluton', 'adiaŭ', 'dankon', 'jes', 'ne', 'nomo'],
        cloze: [
          { sentence: '___, Petro!', answer: 'Saluton', options: ['Saluton', 'Adiaŭ', 'Dankon'], translation: 'Olá, Petro!' },
          { sentence: '___ pro la pano!', answer: 'Dankon', options: ['Dankon', 'Saluton', 'Ne'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Kio estas via ___?', answer: 'nomo', options: ['nomo', 'saluton', 'jes'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Saluton! Kio estas via nomo?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Mia nomo estas Ana.', 'mia nomo estas', 'mi nomiĝas'],
          hint: 'Diga seu nome com "Mia nomo estas…" ou "Mi nomiĝas…".',
        },
        communityPrompt: 'Apresente-se em esperanto: diga seu nome com "Mia nomo estas…" ou "Mi nomiĝas…".',
      },
      {
        id: 'eo-u1-l2',
        title: 'Mi, vi, li, ŝi',
        kind: 'licao',
        words: ['mi', 'vi', 'li', 'ŝi', 'esti', 'nomiĝi'],
        cloze: [
          { sentence: '___ estas Ana.', answer: 'Mi', options: ['Mi', 'Vi', 'Ŝi'], translation: 'Eu sou Ana.' },
          { sentence: '___ nomiĝas Petro.', answer: 'Li', options: ['Li', 'Mi', 'Ni'], translation: 'Ele se chama Petro.' },
          { sentence: 'Ĉu vi ___ Ana?', answer: 'estas', options: ['estas', 'havas', 'iras'], translation: 'Você é a Ana?' },
        ],
        voice: {
          bot: 'Saluton! Ĉu vi estas Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['Ne, mi estas Petro.', 'ne, mi estas', 'jes, mi estas'],
          hint: 'Responda com "Jes, mi estas…" ou "Ne, mi estas…" e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com "Ĉu vi nomiĝas…?" e responda "Jes" ou "Ne".',
      },
      {
        id: 'eo-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Saluton! Mi estas Petro. Kaj vi, kiu vi estas?',
          botTranslation: 'Olá! Eu sou Petro. E você, quem é você?',
          expected: ['Saluton! Mi estas Ana. Dankon!', 'mi estas', 'dankon'],
          hint: 'Responda a saudação, diga quem você é e agradeça com "Dankon".',
        },
        communityPrompt: 'Escreva uma apresentação curta em esperanto: saudação, seu nome e uma despedida ("Adiaŭ").',
      },
    ],
  },
  {
    id: 'eo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mia familio kaj mia domo',
    emoji: '👪',
    card: {
      id: 'eo-c2',
      title: 'Uma raiz, uma família de palavras',
      emoji: '🏠',
      history:
        'A palavra "familio" usa a mesma raiz internacional que o português, o inglês ("family") e o francês ("famille") — parte da filosofia de Zamenhof de aproveitar raízes já conhecidas por quem fala línguas europeias, pra tornar o aprendizado mais rápido. A comunidade esperantista tem até uma tradição de "denaskuloj": famílias que criam os filhos falando esperanto desde o nascimento, como mais uma língua materna — um grupo pequeno, mas real, estimado em algumas centenas a poucos milhares de pessoas no mundo.',
      culture_tip:
        'O Congresso Mundial de Esperanto (Universala Kongreso) acontece todo ano, num país diferente, desde 1905 — reúne milhares de falantes de dezenas de países, tudo em esperanto, sem precisar de tradutor.',
      grammar_why:
        '"Patro" (pai) e "patrino" (mãe) usam a MESMA raiz ("patr-"), só com o sufixo -ino marcando o feminino — assim pra toda palavra de parentesco e de pessoa: frato/fratino, filo/filino. Não é concordância obrigatória como "bom"/"boa" em português: é um sufixo que se usa quando faz sentido.',
      grammar_examples: [
        ['Mia patro kaj mia patrino.', 'Meu pai e minha mãe.'],
        ['Mi havas unu fraton.', 'Eu tenho um irmão.'],
      ],
      character_guide: [
        ['ĝ', '"dj" dito rápido, o "j" do inglês "job"', 'manĝi ("MAN-dji", comer)'],
        ['ŭ', '"u" bem rápido, quase um "w" — só depois de a/e', 'aŭ ("au", ou)'],
      ],
    },
    lessons: [
      {
        id: 'eo-u2-l1',
        title: 'Mia familio',
        kind: 'licao',
        words: ['patro', 'patrino', 'frato', 'fratino', 'familio', 'havi'],
        cloze: [
          { sentence: 'Mia ___ nomiĝas Johano.', answer: 'patro', options: ['patro', 'patrino', 'frato'], translation: 'Meu pai se chama Johano.' },
          { sentence: 'Mi ___ unu fraton.', answer: 'havas', options: ['havas', 'estas', 'parolas'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mia ___ estas granda.', answer: 'familio', options: ['familio', 'domo', 'nomo'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Ĉu vi havas fratojn?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Jes, mi havas unu fraton kaj unu fratinon.', 'mi havas', 'frato'],
          hint: 'Responda com "Jes, mi havas…" ou "Ne, mi ne havas fratojn."',
        },
        communityPrompt: 'Descreva sua família em esperanto: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'eo-u2-l2',
        title: 'En mia domo',
        kind: 'licao',
        words: ['domo', 'hundo', 'kato', 'akvo', 'pano', 'granda'],
        cloze: [
          { sentence: 'Mia ___ estas malgranda.', answer: 'domo', options: ['domo', 'hundo', 'pano'], translation: 'Minha casa é pequena.' },
          { sentence: 'Mi trinkas ___.', answer: 'akvon', options: ['akvon', 'akvo', 'pano'], translation: 'Eu bebo água.' },
          { sentence: '___ estas bona.', answer: 'Pano', options: ['Pano', 'Hundo', 'Kato'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Ĉu vi havas hundon aŭ katon?',
          botTranslation: 'Você tem um cachorro ou um gato?',
          expected: ['Mi havas hundon.', 'mi havas', 'kaj katon'],
          hint: 'Use "Mi havas…" com -n no final da palavra (o caso acusativo) pra dizer o que você tem.',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: se é grande (granda) ou pequena (malgranda), e o que tem nela.',
      },
      {
        id: 'eo-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nia domo estas granda. Ĉu via domo estas granda aŭ malgranda?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Mia domo estas malgranda, sed mia familio estas granda.', 'mia domo', 'mia familio'],
          hint: 'Diga como é sua casa com "Mia domo estas…" e fale da família com "Mia familio estas…".',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em esperanto, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
