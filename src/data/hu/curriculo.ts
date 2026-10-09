import type { UnitSeed } from '../types';

/**
 * Trilha do húngaro: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1 em diante). Fatos verificados na Wikipédia («Hungarian language», «Hungarian
 * grammar», «Hungarian phonology», «Hungarian names», «Great Market Hall», «Hungarian verbs»,
 * «Hungarian forint», «Academic grading in Hungary», «Széchenyi thermal bath») e no Wiktionary
 * (verbete de cada palavra e forma citada, incluindo as tabelas de conjugação do passado e os
 * verbetes de «mit», «mint», «milyen», «lesz», «volt», «fog», «kell», «nagyobb», «legnagyobb» e
 * «jobb»).
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
  {
    id: 'hu-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Tegnap dolgoztam',
    emoji: '⏪',
    card: {
      id: 'hu-c3',
      title: 'O passado húngaro: um tempo só',
      emoji: '⏪',
      history:
        'O húngaro moderno tem um único tempo verbal para o passado, formado com o sufixo “-t”/“-tt” (às vezes com uma vogal de ligação): essa mesma forma cobre o que em português seriam vários tempos diferentes — “eu trabalhei”, “eu estava trabalhando”, “eu tinha trabalhado”. O húngaro também não tem um verbo “ter” separado nem gênero gramatical, mas tem algo que falta ao português: uma moeda cujo nome atravessou sete séculos. O forint nasceu oficialmente em 1º de agosto de 1946, para estabilizar a economia depois da pior hiperinflação já registrada no mundo (a da moeda anterior, o pengő) — mas o nome “forint” já existia desde 1325, vindo da moeda de ouro florentina “fiorino d’oro”, cunhada em Florença desde 1252.',
      culture_tip:
        'Nas escolas húngaras, as notas vão de 1 a 5, mas ao contrário do Brasil: 5 (“jeles”) é a nota máxima, excelente; 4 (“jó”) é bom; 3 (“közepes”) é médio; 2 (“elégséges”) é suficiente; e 1 (“elégtelen”) é insuficiente, a nota mais baixa.',
      grammar_why:
        'Verbos terminados em consoante “mole” (como “l” em “tanul” ou “r” em “ír”) não levam vogal de ligação em nenhuma pessoa no passado: tanultam, írtam. Verbos terminados em sibilante (como “z” em “dolgozik” ou “s” em “olvas”) só levam a vogal de ligação na 3ª pessoa do singular: dolgozott, olvasott — mas não em “dolgoztam” ou “olvastam”.',
      grammar_examples: [
        ['Tegnap dolgoztam.', 'Eu trabalhei ontem.'],
        ['Tanultál tegnap?', 'Você estudou ontem?'],
        ['Mit olvastál?', 'O que você leu?'],
        ['Hány kenyeret vásároltál?', 'Quantos pães você comprou?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hu-u3-l1',
        title: 'Tegnap és a múlt idő',
        kind: 'licao',
        words: ['tegnap', 'dolgozni', 'tanulni', 'írni', 'olvasni', 'aludni'],
        cloze: [
          { sentence: 'Tegnap ___.', answer: 'dolgoztam', options: ['dolgoztam', 'tanultam', 'írtam'], translation: 'Ontem eu trabalhei.' },
          { sentence: 'Tegnap ___.', answer: 'olvastam', options: ['olvastam', 'aludtam', 'dolgoztam'], translation: 'Ontem eu li.' },
          { sentence: 'Tegnap ___.', answer: 'aludtam', options: ['aludtam', 'tanultam', 'olvastam'], translation: 'Ontem eu dormi.' },
        ],
        voice: {
          bot: 'Dolgoztál tegnap?',
          botTranslation: 'Você trabalhou ontem?',
          expected: ['Igen, dolgoztam tegnap.', 'dolgoztam'],
          hint: 'Diga que sim, que trabalhou: “Igen, dolgoztam tegnap.”',
        },
        communityPrompt: 'Escreva três frases sobre o que você fez ontem, usando pelo menos dois verbos no passado (“dolgoztam”, “tanultam”, “olvastam”, “írtam” ou “aludtam”).',
      },
      {
        id: 'hu-u3-l2',
        title: 'Harminc, negyven, ötven…',
        kind: 'licao',
        words: ['harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan'],
        cloze: [
          { sentence: 'Harminc kenyeret ___.', answer: 'kérek', options: ['kérek', 'kérem', 'köszönöm'], translation: 'Eu queria trinta pães.' },
          { sentence: 'Negyven almát ___.', answer: 'eszem', options: ['eszem', 'eszek', 'iszom'], translation: 'Eu como quarenta maçãs.' },
          { sentence: 'Ötven halat ___.', answer: 'látok', options: ['látok', 'látom', 'eszem'], translation: 'Eu vejo cinquenta peixes.' },
        ],
        voice: {
          bot: 'Hány almát eszel?',
          botTranslation: 'Quantas maçãs você come?',
          expected: ['Negyven almát eszem.', 'negyven'],
          hint: 'Responda com um número: “Negyven almát eszem.”',
        },
        communityPrompt: 'Escreva cinco frases contando de 30 a 80 de dez em dez (“harminc”, “negyven”, “ötven”, “hatvan”, “hetven”, “nyolcvan”), cada uma com uma coisa diferente (maçã, peixe, pão, pássaro, estrela).',
      },
      {
        id: 'hu-u3-l3',
        title: 'Prova: tegnap dolgoztam',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dolgoztál tegnap? Hány kenyeret vásároltál?',
          botTranslation: 'Você trabalhou ontem? Quantos pães você comprou?',
          expected: ['Igen, dolgoztam. Harminc kenyeret vásároltam.', 'dolgoztam', 'vásároltam'],
          hint: 'Diga que trabalhou com “dolgoztam” e quantos pães comprou com um número e “vásároltam”.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando o que você fez ontem (com pelo menos dois verbos no passado) e quantas coisas você comprou ou viu, usando um número de 30 a 100.',
      },
    ],
  },
  {
    id: 'hu-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Holnap hideg lesz',
    emoji: '🔮',
    card: {
      id: 'hu-c4',
      title: 'O futuro húngaro, o “kell” e o comparativo',
      emoji: '📈',
      history:
        'O húngaro não tem um sufixo só para o futuro: para o próprio verbo “ser/estar/haver” (van), o futuro é a forma “lesz” (“vai ser”, “vai haver”); para qualquer outro verbo, o futuro se forma com o infinitivo mais o auxiliar “fog”, conjugado (dolgozni fogok, eu vou trabalhar). Já “kell” (precisar, ter que) não se conjuga por pessoa: quem precisa fazer algo aparece no próprio infinitivo, com um sufixo de pessoa — “mennem kell” é, ao pé da letra, “o meu ir é preciso”, ou seja, “eu tenho que ir”.',
      culture_tip:
        'O balneário termal Széchenyi, em Budapeste, abriu em 13 de junho de 1913 no Parque da Cidade (Városliget) e recebe água de duas fontes termais, a 74°C e a 77°C: por isso as piscinas ao ar livre funcionam bem mesmo no frio do inverno húngaro.',
      grammar_why:
        'O comparativo gruda o sufixo “-bb” no adjetivo (nagy → nagyobb, maior); o superlativo acrescenta “leg-” na frente do comparativo (legnagyobb, o maior). “Mint” é a palavra para “do que”. “Jó” (bom) é irregular: o comparativo é “jobb”, não “jóbb”.',
      grammar_examples: [
        ['Holnap hideg lesz.', 'Vai estar frio amanhã.'],
        ['A ház nagyobb, mint a bolt.', 'A casa é maior do que a loja.'],
        ['Fáradt vagyok: aludnom kell.', 'Estou cansado: eu preciso dormir.'],
        ['Holnap dolgozni fogok.', 'Eu vou trabalhar amanhã.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hu-u4-l1',
        title: 'Fáradt vagyok, aludnom kell',
        kind: 'licao',
        words: ['boldog', 'szomorú', 'fáradt', 'éhes', 'szomjas', 'mérges'],
        cloze: [
          { sentence: '___ vagyok: aludnom kell.', answer: 'Fáradt', options: ['Fáradt', 'Boldog', 'Mérges'], translation: 'Estou cansado: preciso dormir.' },
          { sentence: '___ vagyok: ennem kell.', answer: 'Éhes', options: ['Éhes', 'Szomjas', 'Szomorú'], translation: 'Estou com fome: preciso comer.' },
          { sentence: '___ vagyok: innom kell.', answer: 'Szomjas', options: ['Szomjas', 'Éhes', 'Fáradt'], translation: 'Estou com sede: preciso beber.' },
        ],
        voice: {
          bot: 'Miért vagy mérges?',
          botTranslation: 'Por que você está com raiva?',
          expected: ['Mérges vagyok, mert fáradt vagyok.', 'mérges vagyok'],
          hint: 'Diga que está com raiva, usando “mérges vagyok”.',
        },
        communityPrompt: 'Escreva três frases sobre como você está hoje, usando “vagyok” com um sentimento (“boldog”, “szomorú”, “fáradt”, “éhes”, “szomjas” ou “mérges”).',
      },
      {
        id: 'hu-u4-l2',
        title: 'Nagyobb kabát kell',
        kind: 'licao',
        words: ['ruha', 'cipő', 'kabát', 'nadrág', 'sapka', 'holnap'],
        cloze: [
          { sentence: 'Holnap hideg ___.', answer: 'lesz', options: ['lesz', 'van', 'volt'], translation: 'Vai estar frio amanhã.' },
          { sentence: 'Nagyobb ___ kell.', answer: 'kabát', options: ['kabát', 'cipő', 'sapka'], translation: 'Preciso de um casaco maior.' },
          { sentence: 'A ház nagyobb, ___ a bolt.', answer: 'mint', options: ['mint', 'és', 'nem'], translation: 'A casa é maior do que a loja.' },
        ],
        voice: {
          bot: 'Milyen lesz az idő holnap?',
          botTranslation: 'Como vai estar o tempo amanhã?',
          expected: ['Holnap hideg lesz.', 'hideg lesz'],
          hint: 'Diga que vai fazer frio: “Holnap hideg lesz.”',
        },
        communityPrompt: 'Escreva sobre o que você vai vestir (“ruha”, “cipő”, “kabát”, “nadrág” ou “sapka”) se holnap for frio ou quente.',
      },
      {
        id: 'hu-u4-l3',
        title: 'Prova: holnap hideg lesz',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fáradt vagy? Milyen lesz az idő holnap?',
          botTranslation: 'Você está cansado? Como vai estar o tempo amanhã?',
          expected: ['Fáradt vagyok, és holnap hideg lesz.', 'fáradt vagyok', 'hideg lesz'],
          hint: 'Diga como está com “vagyok” e o tempo de amanhã com “lesz”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre como você está se sentindo hoje e o que vai vestir amanhã, usando pelo menos um sentimento e “kell” ou “lesz”.',
      },
    ],
  },
];
