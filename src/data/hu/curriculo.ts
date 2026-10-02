import type { UnitSeed } from '../types';

/**
 * Trilha do húngaro: idioma novo, por enquanto só as duas unidades do nível A1 (ver `incomplete` em
 * index.ts). Fatos verificados na Wikipédia («Hungarian language», «Hungarian grammar», «Hungarian
 * phonology», «Hungarian names», «Great Market Hall») e no Wiktionary (verbete de cada palavra).
 */
export const UNITS_HU: UnitSeed[] = [
  {
    id: 'hu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Szia! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'hu-c1',
      title: 'Uma língua sozinha no seu próprio ramo',
      emoji: '🗺️',
      history:
        'O húngaro (magyar nyelv) é urálico, mas de um ramo diferente do finlandês e do estoniano: o ramo úgrico, que reúne só o húngaro, o khanti e o mânsi (línguas pequenas faladas do outro lado dos Urais, na Sibéria ocidental). Por isso o húngaro soa muito diferente do finlandês, apesar do parentesco distante. É a língua oficial da Hungria, com cerca de 12 a 14 milhões de falantes nativos, e também língua minoritária na Romênia (Transilvânia), na Eslováquia, na Sérvia (Voivodina) e na Ucrânia (Zacarpácia). Escreve-se com o alfabeto latino, mas com vogais acentuadas (á, é, í, ó, ö, ő, ú, ü, ű) e dígrafos que valem uma letra só: cs, dz, dzs, gy, ly, ny, sz, ty, zs.',
      culture_tip:
        '“Szia” serve tanto para “oi” quanto para “tchau” entre pessoas que se tratam por “te” (informal); num cumprimento formal usa-se “Jó napot kívánok” (bom dia, ao pé da letra “desejo um bom dia”). O húngaro também tem um tratamento formal, “Ön”, parecido com o “o senhor / a senhora” do português.',
      grammar_why:
        'O húngaro é aglutinante: em vez de várias palavras separadas, ele gruda sufixo atrás de sufixo numa mesma palavra, e cada sufixo tem a vogal ajustada por harmonia vocálica (as vogais do sufixo “combinam” com as vogais da palavra). O húngaro também não marca gênero gramatical nenhum: “ő” serve para “ele” e “ela”, e não há “o/a” que mude com o substantivo.',
      grammar_examples: [
        ['Szia! Hogy vagy?', 'Oi! Como você está?'],
        ['A nevem Éva.', 'O meu nome é Éva.'],
        ['Ki ő?', 'Quem é ele/ela? (“ő” não diz se é homem ou mulher)'],
      ],
      character_guide: [
        ['s', 'como o “ch” do inglês “shoe”: nunca como o s do português', 'Pest [ˈpɛʃt] (a parte plana de Budapeste)'],
        ['sz', 'como o nosso s de “sapo”', 'szia [ˈsiɒ] (oi)'],
        ['cs', 'como o “tch” de “tchau”', 'csillag (estrela)'],
        ['gy', 'um “d” bem palatalizado, perto de um “di” rápido', 'nagy (grande)'],
        ['ny', 'n palatalizado, como o “nh” de “ninho”', 'anya (mãe)'],
        ['ty', 't palatalizado, uma versão mais suave do “tch”', 'kutya (cachorro)'],
        ['ö / ő', '“ö” é curto (como o “eu” do francês); “ő” é a mesma vogal, só mais longa', 'öt (cinco) / ő (ele, ela)'],
        ['ü / ű', '“ü” curto, “ű” longo (como o “u” do francês, lábios arredondados)', 'gyümölcs (fruta) / tűz (fogo)'],
      ],
    },
    lessons: [
      {
        id: 'hu-u1-l1',
        title: 'Szia, köszönöm, viszlát!',
        kind: 'licao',
        words: ['szia', 'jó reggelt', 'jó éjszakát', 'köszönöm', 'kérem', 'viszlát'],
        cloze: [
          { sentence: '___! Hogy vagy?', answer: 'Szia', options: ['Szia', 'Viszlát', 'Köszönöm'], translation: 'Oi! Como você está?' },
          { sentence: 'Egy kenyeret ___.', answer: 'kérek', options: ['kérek', 'köszönöm', 'szia'], translation: 'Eu queria (peço) um pão.' },
          { sentence: 'Köszönöm, és ___!', answer: 'viszlát', options: ['viszlát', 'jó reggelt', 'kérem'], translation: 'Obrigado, e até logo!' },
        ],
        voice: {
          bot: 'Szia! Hogy vagy?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Jól vagyok, köszönöm!', 'köszönöm', 'jó'],
          hint: 'Responda com “köszönöm” (obrigado) depois de dizer como está.',
        },
        communityPrompt: 'Escreva três cumprimentos em húngaro: um pela manhã (“Jó reggelt…”), um à noite (“Jó éjszakát…”) e uma despedida com “Viszlát”.',
      },
      {
        id: 'hu-u1-l2',
        title: 'Én, te, ő',
        kind: 'licao',
        words: ['én', 'te', 'ő', 'név', 'ki', 'mi'],
        cloze: [
          { sentence: '___ vagyok Éva.', answer: 'Én', options: ['Én', 'Te', 'Ő'], translation: 'Eu sou a Éva.' },
          { sentence: 'A ___ Éva.', answer: 'nevem', options: ['nevem', 'nevem?', 'ki'], translation: 'O meu nome é Éva.' },
          { sentence: '___ ő?', answer: 'Ki', options: ['Ki', 'Mi', 'Hol'], translation: 'Quem é ele/ela?' },
        ],
        voice: {
          bot: 'Szia! Mi a neved?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['A nevem Ana.', 'nevem'],
          hint: 'Diga o seu nome com “A nevem…”.',
        },
        communityPrompt: 'Apresente-se em húngaro: diga o seu nome com “A nevem…” e pergunte “Ki ő?” (quem é ele/ela) apontando para alguém.',
      },
      {
        id: 'hu-u1-l3',
        title: 'Prova: os primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Szia! A nevem Péter. Hogy vagy? Mi a neved?',
          botTranslation: 'Oi! Meu nome é Péter. Como você está? Qual é o seu nome?',
          expected: ['Szia, Péter! Jól vagyok, köszönöm! A nevem Lucia.', 'szia', 'köszönöm', 'nevem'],
          hint: 'Devolva o cumprimento (“Szia!”), diga como está e feche com “A nevem…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: cumprimento, como você está, e o seu nome com “A nevem…”.',
      },
    ],
  },
  {
    id: 'hu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A család és az otthon',
    emoji: '👪',
    card: {
      id: 'hu-c2',
      title: '“Van”: um jeito só para “existir” e para “ter”',
      emoji: '🧭',
      history:
        'O húngaro não tem um verbo separado para “ter”: usa “van” (existe, há) depois da coisa possuída, marcada com um sufixo possessivo. “Van egy kutyám” é, ao pé da letra, “existe um cachorro-meu” — bem diferente da estrutura do português. Os húngaros também escrevem o nome de família antes do nome próprio (“Molnár Ferenc”, não “Ferenc Molnár”): é a chamada ordem oriental de nomes, rara na Europa (como no japonês e no coreano) e um sinal da história distinta do húngaro entre as línguas vizinhas, todas indo-europeias.',
      culture_tip:
        'A Nagyvásárcsarnok (Grande Mercado Coberto) de Budapeste abriu em 1897, projetada por Samu Pecz, com um telhado de telhas coloridas Zsolnay (de Pécs). No térreo se vende páprica, salame, embutidos e vinho de Tokaj — uma boa primeira visita para praticar números e comida.',
      grammar_why:
        'Para dizer que alguém tem algo, o húngaro marca o dono com um sufixo possessivo no substantivo e, se for preciso, acrescenta “van” (há) ou “vannak” (há, plural) no fim. Depois de um numeral, o substantivo fica no singular: “két ember” (duas pessoas), não “két emberek”.',
      grammar_examples: [
        ['Van egy kutyám.', 'Eu tenho um cachorro. (ao pé da letra: “existe um cachorro-meu”)'],
        ['Négy lányom van.', 'Eu tenho quatro filhas.'],
        ['Tíz kutya van a házban.', 'Há dez cachorros na casa.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hu-u2-l1',
        title: 'A családom',
        kind: 'licao',
        words: ['anya', 'apa', 'testvér', 'lány', 'nagy', 'kicsi'],
        cloze: [
          { sentence: '___ jó.', answer: 'Anyám', options: ['Anyám', 'Apám', 'Nevem'], translation: 'A minha mãe é boa (gentil).' },
          { sentence: 'Van egy ___.', answer: 'testvérem', options: ['testvérem', 'nevem', 'vizem'], translation: 'Eu tenho um irmão (uma irmã).' },
          { sentence: 'A lány ___.', answer: 'kicsi', options: ['kicsi', 'nagy', 'jó'], translation: 'A menina é pequena.' },
        ],
        voice: {
          bot: 'Van testvéred?',
          botTranslation: 'Você tem irmão(s)?',
          expected: ['Igen, van egy testvérem.', 'van', 'testvérem'],
          hint: 'Responda com “Van…” para dizer que tem, ou “Nincs…” se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em húngaro: fale da sua mãe e do seu pai com “Anyám…” e “Apám…”, e diga se você tem irmãos com “Van…”.',
      },
      {
        id: 'hu-u2-l2',
        title: 'Otthon',
        kind: 'licao',
        words: ['ház', 'asztal', 'kenyér', 'tej', 'szeretni', 'enni'],
        cloze: [
          { sentence: 'A ___ nagy.', answer: 'ház', options: ['ház', 'asztal', 'tej'], translation: 'A casa é grande.' },
          { sentence: 'Szeretek ___.', answer: 'enni', options: ['enni', 'inni', 'menni'], translation: 'Eu gosto de comer.' },
          { sentence: 'Eszem ___.', answer: 'kenyeret', options: ['kenyeret', 'tejet', 'vizet'], translation: 'Eu estou comendo pão.' },
        ],
        voice: {
          bot: 'Szereted a kenyeret?',
          botTranslation: 'Você gosta de pão?',
          expected: ['Igen, nagyon szeretem!', 'szeretem'],
          hint: 'Use “szeretem” (eu gosto dele/dela, forma definida) para responder sobre o pão.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'hu-u2-l3',
        title: 'Prova: a család és az otthon',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hány testvéred van? Nagy a házad?',
          botTranslation: 'Quantos irmãos você tem? A sua casa é grande?',
          expected: ['Egy testvérem van. A házam nagy.', 'testvérem', 'házam'],
          hint: 'Diga quantos irmãos tem com “…van” e descreva a sua casa com “A házam…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
