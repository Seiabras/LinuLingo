import type { UnitSeed } from '../types';

/**
 * Trilha do kalaallisut: só as duas unidades do nível A1 (pacote incompleto — ver `incomplete` em
 * index.ts). Como o kalaallisut é polissintético (uma palavra pode ser uma frase inteira), as frases
 * das lacunas juntam palavras e frases já prontas encontradas em fontes reais — nunca uma flexão nova
 * inventada pra sessão. Fontes: ver cabeçalho de vocabulario.ts e gramatica.ts; a frase “Andap nanoq
 * takuaa” (Anda vê um urso) vem da Wikipédia em inglês, artigo «Greenlandic language» (exemplo de caso
 * ergativo); “Kalaallit Nunaanni nunaqarpunga” e “Illuga tungujortuuvoq” vêm do English Wiktionary
 * (verbetes “Kalaallit Nunaat” e “illu”); os cumprimentos vêm do Omniglot
 * (omniglot.com/language/phrases/greenlandic.php) e do Wikivoyage, «Greenlandic phrasebook».
 */
export const UNITS_KL: UnitSeed[] = [
  {
    id: 'kl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aluu! Qanoq ippit?',
    emoji: '👋',
    card: {
      id: 'kl-c1',
      title: 'A língua da Groenlândia',
      emoji: '🧊',
      history:
        'O kalaallisut (groenlandês) é a língua da Groenlândia, falada por cerca de 57 mil pessoas — a maioria na própria ilha, e um grupo menor na Dinamarca. Pertence à família esquimó-aleúte, ao grupo inuíte, e é a maior língua dessa família em número de falantes. Desde a Lei do Governo Autônomo de 2009, é o único idioma oficial da Groenlândia (antes dividia o posto com o dinamarquês, que continua muito usado no dia a dia, no comércio e na educação). A ortografia atual vem de uma reforma de 1973, que aproximou a escrita da fala e ajudou a alfabetização a decolar.',
      culture_tip:
        '“Aluu” serve tanto pra “oi” quanto pra “até logo” — é um empréstimo recente, mais informal. Pra agradecer de verdade, “qujanaq” já basta; intensificado, vira “qujanarujussuaq” (muito obrigado mesmo). “Tikilluarit” é o bem-vindo que se ouve ao chegar em qualquer lugar na Groenlândia.',
      grammar_why:
        'O kalaallisut é polissintético: uma única palavra pode carregar o que em português viraria uma frase inteira, com uma raiz e vários sufixos grudados nela. “Ajunngilaq” (está bem) por exemplo nasce de “ajorpoq” (é ruim) mais o sufixo negativo “-nngit-”: literalmente, “não-é-ruim”. Essa estrutura aparece desde a primeira lição — não dá pra inventar palavras novas por conta própria, então aqui só entram formas e frases encontradas de verdade em dicionários e fontes sobre a língua.',
      grammar_examples: [
        ['Aluu! Qanoq ippit?', 'Oi! Como vai?'],
        ['Ajunngilanga, qujanaq. Illimmi qanoq ippit?', 'Estou bem, obrigado(a). E você, como vai?'],
        ['Qanoq ateqarpit?', 'Qual é o seu nome?'],
        ['Suminngaaneerpit?', 'De onde você é?'],
      ],
      character_guide: [
        ['q', 'um “k” dito mais fundo na garganta (uvular); diferente do “k”, que é mais pra frente', 'qanoq, qujanaq'],
        ['ll', 'um “l” surdo, como soprar os dois lados da língua', 'illit, pilluarit'],
        ['a, i, u', 'o groenlandês só tem essas três vogais (sem e nem o na escrita de hoje); perto do q elas soam mais abertas', 'illu, qimmeq'],
        ['vogal dobrada (aa, ii, uu)', 'não é “vogal longa” de verdade: conta como duas sílabas (duas moras)', 'qaqortoq, niaqoq'],
      ],
    },
    lessons: [
      {
        id: 'kl-u1-l1',
        title: 'Aluu, qujanaq, tikilluarit',
        kind: 'licao',
        words: ['aluu', 'qujanaq', 'naamik', 'aap', 'tikilluarit', 'pilluarit'],
        cloze: [
          { sentence: '___! Qanoq ippit?', answer: 'Aluu', options: ['Aluu', 'Qujanaq', 'Tikilluarit'], translation: 'Oi! Como vai?' },
          { sentence: 'Ajunngilanga, ___!', answer: 'qujanaq', options: ['qujanaq', 'naamik', 'pilluarit'], translation: 'Estou bem, obrigado!' },
          { sentence: '___!', answer: 'Tikilluarit', options: ['Tikilluarit', 'Aap', 'Naamik'], translation: 'Bem-vindo(a)!' },
        ],
        voice: {
          bot: 'Aluu! Qanoq ippit?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Ajunngilanga, qujanaq! Illimmi qanoq ippit?', 'ajunngilanga', 'qujanaq'],
          hint: 'Diga que está bem com “Ajunngilanga, qujanaq!” e devolva a pergunta com “Illimmi qanoq ippit?”.',
        },
        communityPrompt: 'Escreva três palavras pra receber alguém na Groenlândia: um “oi” (“Aluu”), um “bem-vindo” (“Tikilluarit”) e um “obrigado” (“Qujanaq”).',
      },
      {
        id: 'kl-u1-l2',
        title: 'Uanga, illit, uagut',
        kind: 'licao',
        words: ['uanga', 'illit', 'uagut', 'kina', 'suna', 'ateq'],
        cloze: [
          { sentence: '___?', answer: 'Kina', options: ['Kina', 'Suna', 'Ateq'], translation: 'Quem?' },
          { sentence: '___?', answer: 'Suna', options: ['Suna', 'Kina', 'Uanga'], translation: 'O quê?' },
          { sentence: 'Uanga, ___ aamma?', answer: 'illit', options: ['illit', 'uagut', 'kina'], translation: 'Eu, e você também?' },
        ],
        voice: {
          bot: 'Qanoq ateqarpit?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Uanga…', 'uanga'],
          hint: 'O groenlandês diz o nome grudando um sufixo nele (“…-mik ateqarpunga”); por enquanto, aponte pra si mesmo e diga “Uanga” (eu).',
        },
        communityPrompt: 'Escreva os três pronomes que você já sabe em kalaallisut: eu (“uanga”), tu/você (“illit”) e nós (“uagut”).',
      },
      {
        id: 'kl-u1-l3',
        title: 'Prova: Aluu, qanoq ippit?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tikilluarit! Aluu! Qanoq ippit? Qanoq ateqarpit?',
          botTranslation: 'Bem-vindo(a)! Oi! Como vai? Qual é o seu nome?',
          expected: ['Ajunngilanga, qujanaq! Uanga...', 'ajunngilanga', 'qujanaq'],
          hint: 'Responda ao cumprimento com “Ajunngilanga, qujanaq!” e aponte pra si mesmo dizendo “Uanga” (eu).',
        },
        communityPrompt: 'Escreva uma troca de cumprimentos completa: “Aluu! Qanoq ippit?” e a resposta “Ajunngilanga, qujanaq. Illimmi qanoq ippit?”.',
      },
    ],
  },
  {
    id: 'kl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ataata, anaana aamma nanoq',
    emoji: '👪',
    card: {
      id: 'kl-c2',
      title: 'Sem gênero, sem artigo — e uma palavra pode ser uma frase',
      emoji: '🐻‍❄️',
      history:
        'O kalaallisut não tem gênero gramatical (nem masculino/feminino, nem “o/a”) e também não tem artigo definido ou indefinido — por isso aqui o campo de gêneros do app fica vazio. Em compensação, o substantivo muda de forma segundo 8 casos gramaticais (absolutivo, ergativo, instrumental, alativo, locativo, ablativo, prossecutivo e equativo), que fazem o trabalho que em português cai nas preposições e na ordem das palavras.',
      culture_tip:
        'Muitas palavras do dia a dia groenlandês vêm da vida no gelo e no mar: “qajaq” (caiaque, a palavra que o mundo todo usa hoje), “puisi” (foca), “nanoq” (urso-polar), “imaq” (o mar salgado) e “imeq” (a água doce de beber) — duas palavras bem diferentes pra “água”, uma pista de como o vocabulário segue de perto o ambiente.',
      grammar_why:
        'Repare como cor e “qualidade” em kalaallisut nascem de um verbo: “qaqortoq” (branco) vem de “qaqorpoq” (é branco) mais o sufixo “-toq” (“o que é”); “tungujortoq” (azul) vem de “tungujorpoq” (é azul). Não existe uma classe separada de adjetivo como em português — quase tudo isso é verbo por baixo dos panos.',
      grammar_examples: [
        ['Ataata aamma anaana.', 'Pai e mãe.'],
        ['Angut aamma arnaq.', 'Homem e mulher.'],
        ['Andap nanoq takuaa.', 'Anda vê um urso. (nanoq no absolutivo, Anda-p no ergativo)'],
        ['Illuga tungujortuuvoq.', 'A minha casa é azul.'],
      ],
      character_guide: [
        ["'", 'marca que uma vogal final foi engolida, numa forma mais falada e curta', "qujan' (forma curta de qujanaq), takuss' (até breve)"],
        ['consoante dobrada', 'dura mais tempo que a simples — e muda o sentido da palavra', 'ajunngilaq (nng), tikilluarit e illu (ll)'],
      ],
    },
    lessons: [
      {
        id: 'kl-u2-l1',
        title: 'Ataata, anaana, meeraq',
        kind: 'licao',
        words: ['ataata', 'anaana', 'meeraq', 'angut', 'arnaq', 'nuliaq'],
        cloze: [
          { sentence: '___ aamma anaana.', answer: 'Ataata', options: ['Ataata', 'Angut', 'Arnaq'], translation: 'Pai e mãe.' },
          { sentence: 'Angut aamma ___.', answer: 'arnaq', options: ['arnaq', 'meeraq', 'nuliaq'], translation: 'Homem e mulher.' },
          { sentence: '___ aamma meeraq.', answer: 'Nuliaq', options: ['Nuliaq', 'Ataata', 'Angut'], translation: 'Esposa e criança.' },
        ],
        voice: {
          bot: 'Ataata, anaana, aamma meeraq?',
          botTranslation: 'Pai, mãe e criança?',
          expected: ['Aap!', 'aap'],
          hint: 'Confirme com “Aap” (sim).',
        },
        communityPrompt: 'Escreva os nomes das pessoas da família que você já sabe: “ataata” (pai), “anaana” (mãe), “meeraq” (criança).',
      },
      {
        id: 'kl-u2-l2',
        title: 'Nanoq, puisi, qimmeq',
        kind: 'licao',
        words: ['nanoq', 'puisi', 'qimmeq', 'ataaseq', 'marluk', 'pingasut'],
        cloze: [
          { sentence: 'Andap ___ takuaa.', answer: 'nanoq', options: ['nanoq', 'puisi', 'qimmeq'], translation: 'Anda vê um urso.' },
          { sentence: '___.', answer: 'Ataaseq', options: ['Ataaseq', 'Marluk', 'Pingasut'], translation: 'Um.' },
          { sentence: '___.', answer: 'Marluk', options: ['Marluk', 'Pingasut', 'Ataaseq'], translation: 'Dois.' },
        ],
        voice: {
          bot: 'Suna? Nanoq? Qimmeq?',
          botTranslation: 'O quê? Urso? Cachorro?',
          expected: ['Qimmeq!', 'qimmeq', 'nanoq'],
          hint: 'Diga qual bicho é: “Qimmeq!” (cachorro) ou “Nanoq!” (urso).',
        },
        communityPrompt: 'Escreva três bichos da Groenlândia em kalaallisut: “nanoq” (urso-polar), “puisi” (foca) e “qimmeq” (cachorro).',
      },
      {
        id: 'kl-u2-l3',
        title: 'Prova: ataata, anaana aamma nanoq',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ataata, anaana, meeraq — aamma nanoq takuaa!',
          botTranslation: 'Pai, mãe, criança — e viu um urso!',
          expected: ['Pilluarit!', 'pilluarit', 'aap'],
          hint: 'Reaja com “Pilluarit!” ou “Aap!”.',
        },
        communityPrompt: 'Escreva cinco palavras desta unidade: duas pessoas da família, dois bichos e um número.',
      },
    ],
  },
];
