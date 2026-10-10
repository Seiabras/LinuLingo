import type { UnitSeed } from '../types';

/**
 * Trilha do alutiiq: por enquanto só as duas unidades do nível A1 (curso incompleto — ver `incomplete`
 * em index.ts). Fontes no cabeçalho de vocabulario.ts: [WIKT], [WIKI], [ANLC].
 *
 * As frases são do [ANLC] (“Cama’i”, “Quyanaa”) e dos exemplos dos verbetes do [WIKT] (“Asikaqa angli”,
 * “Cacaq ang’aqurtau’u? — Ca.”, “Sun’ami enerpak pat’snarluni macartuq”, “Aluuwimi unuarpak maqarluni
 * macartuq”), com a tradução deles. Nenhuma frase com gramática nova foi montada por nós: fora as das
 * fontes, só há palavras soltas lado a lado (“Cama’i! Quyanaa!”).
 */
export const UNITS_EMS: UnitSeed[] = [
  {
    id: 'ems-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cama’i!',
    emoji: '👋',
    card: {
      id: 'ems-c1',
      title: 'Sugpiaq, a pessoa de verdade',
      emoji: '🏔️',
      // [ANLC] (cerca de 400 falantes de 3.000; Sugpiaq = suk 'person' + -piaq 'real'; o nome “Alutiiq”, de
      // uma forma russa de “aleúte”; dois dialetos, koniag e chugach; Jeff Leer, gramática e dicionário do
      // koniag); [WIKI] «Alutiiq language» (o liceu de Kodiak passou a ensinar a língua em 2010, a pedido
      // dos alunos; Afognak, abandonada depois do terremoto de 1964).
      history:
        'O alutiiq é a língua dos sugpiaq, na costa do golfo do Alasca: a ilha Kodiak, a península do Alasca, a península Kenai e o estreito do Príncipe Guilherme. É parente próxima do iúpique central, do mesmo ramo da família esquimó-aleúte, e hoje tem cerca de 400 falantes, de um povo de uns 3.000. O próprio povo se chamava “sugpiaq”, de “suk” (pessoa) e “-piaq” (de verdade); o nome “alutiiq” veio de uma forma russa de “aleúte”, que os russos davam a todos os povos que encontraram de Attu até Kodiak. Em 2010, a pedido dos próprios alunos, o liceu de Kodiak voltou a ensinar a língua.',
      culture_tip:
        'Para cumprimentar, diz-se “Cama’i!”, e para agradecer, “Quyanaa!”. A resposta ao agradecimento é “Canaituq” — de nada, não tem problema.',
      grammar_why:
        'Como as outras línguas iúpiques, o alutiiq monta frases inteiras em poucas palavras. No dicionário, muitos verbos que dizem como alguém ou alguma coisa está aparecem com o final -luni: “asirluni” (estar bem), “qenaluni” (estar doente), “sakaarlluni” (estar cansado). E a partícula -qaa, colada à primeira palavra, transforma a frase numa pergunta de sim ou não.',
      grammar_examples: [
        ['Asikaqa angli.', 'Eu gosto muito dele.'],
        ['Cacaq ang’aqurtau’u? — Ca.', 'O que ela está carregando? — Não sei.'],
      ],
      character_guide: [
        ['c', 'soa “tch”, como em “tchau”', 'Cama’i (olá)'],
        ['e', 'uma vogal neutra, como o “a” do inglês “about”', 'engluq (casa)'],
        ['q', 'um “k” lá do fundo da garganta', 'Quyanaa (obrigado)'],
        ['r', 'um som raspado do fundo da garganta, sem voz', 'arnaq (mulher)'],
        ['ʀ', 'um “r” vibrado, como o de “caro”', 'fanaʀuq (lanterna)'],
        ['ll', 'um “l” soprado, sem voz', 'cillqaq (epilóbio)'],
        ['’', 'o apóstrofo separa sons ou dobra a consoante', 'Cama’i (olá)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u1-l1',
        title: 'Cama’i! Quyanaa!',
        kind: 'licao',
        words: ['Cama’i', 'Quyanaa', 'Canaituq', 'Ca', 'Ai?', 'Awa ai?'],
        cloze: [
          { sentence: '___!', answer: 'Cama’i', options: ['Cama’i', 'Canaituq', 'Ca'], translation: 'Olá!' },
          { sentence: 'Quyanaa! — ___.', answer: 'Canaituq', options: ['Canaituq', 'Cama’i', 'Ai?'], translation: 'Obrigado! — De nada.' },
          { sentence: 'Cacaq ang’aqurtau’u? — ___.', answer: 'Ca', options: ['Ca', 'Quyanaa', 'Cama’i'], translation: 'O que ela está carregando? — Não sei.' },
        ],
        voice: {
          bot: 'Cama’i!',
          botTranslation: 'Olá!',
          expected: ['Cama’i!', 'Cama’i', "cama'i", 'camai'],
          hint: 'Responda o cumprimento: “Cama’i!”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Cama’i!”), um agradecimento (“Quyanaa!”) e a resposta (“Canaituq”).',
      },
      {
        id: 'ems-u1-l2',
        title: 'Arnaq, alqaq, anngaq',
        kind: 'licao',
        words: ['suk', 'arnaq', 'alqaq', 'anngaq', 'acak', 'angli'],
        cloze: [
          { sentence: 'Asikaqa ___.', answer: 'angli', options: ['angli', 'arnaq', 'Ca'], translation: 'Eu gosto muito dele.' },
          { sentence: 'Alqaq, ___.', answer: 'anngaq', options: ['anngaq', 'macaq', 'qulen'], translation: 'A irmã mais velha, o irmão mais velho.' },
          { sentence: '___, anaanaa.', answer: 'Acak', options: ['Acak', 'Cayuq', 'Engluq'], translation: 'A tia (irmã do pai), a tia (irmã da mãe).' },
        ],
        voice: {
          bot: 'Ai?',
          botTranslation: 'Hein? O que você disse?',
          expected: ['Cama’i!', 'Cama’i', "cama'i", 'Quyanaa'],
          hint: 'Repita o cumprimento: “Cama’i!”.',
        },
        communityPrompt: 'Escreva os nomes da família em alutiiq: “alqaq” (irmã mais velha), “anngaq” (irmão mais velho)…',
      },
      {
        id: 'ems-u1-l3',
        title: 'Prova: Cama’i!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Quyanaa!',
          botTranslation: 'Obrigado!',
          expected: ['Canaituq.', 'Canaituq', 'canaituq', 'Quyanaituq'],
          hint: 'Responda ao agradecimento: “Canaituq” (de nada).',
        },
        communityPrompt: 'Escreva um diálogo curto: “Cama’i!”, “Quyanaa!”, “Canaituq.”.',
      },
    ],
  },
  {
    id: 'ems-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Macartuq',
    emoji: '☀️',
    card: {
      id: 'ems-c2',
      title: 'Os meses são luas',
      emoji: '🌙',
      // [WIKI] «Alutiiq language», a tabela dos meses (koniag: “… Iraluq”, “… Iraluat”, “… Iralua”); [WIKT]
      // s.v. “iraluq” (moon; month), “Qanim Iralua” (December), “maqarluni”, “pat’snarluni”, “cayuq” (do
      // russo чай), “kelipaq” (хлеб), “caskaq” (чашка).
      history:
        'Em alutiiq, “iraluq” é a lua e também o mês, e os meses do koniag são luas com nome: dezembro é “Qanim Iralua”, e fevereiro, “Nanicqaaq Iraluq”. Os dois dialetos chamam os meses de jeitos diferentes: o chugach, da península Kenai, tem outros nomes, como “Iqallugciq” para junho. E, como nas outras línguas do Alasca, o russo deixou palavras na mesa: “cayuq” (chá), “kelipaq” (pão), “caskaq” (xícara).',
      culture_tip:
        'Para falar do tempo, o alutiiq diz como o dia está: “Sun’ami enerpak pat’snarluni macartuq” — hoje de manhã, em Kodiak, está frio, mas faz sol.',
      grammar_why:
        'Os verbos de como está o tempo seguem o mesmo molde: “maqarluni” (estar quente) e “pat’snarluni” (estar frio) aparecem antes de “macartuq” (faz sol; “macaq” é o sol). O lugar vem no começo, com o final -mi (em): “Sun’ami”, em Kodiak.',
      grammar_examples: [
        ['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.'],
        ['Aluuwimi unuarpak maqarluni macartuq.', 'Hoje de manhã está quente e faz sol na península do Alasca.'],
      ],
      character_guide: [
        ['-mi', 'em (o lugar)', 'Sun’ami (em Kodiak)'],
        ['-luni', 'como está', 'maqarluni (estar quente)'],
        ['iraluq', 'lua, mês', 'Qanim Iralua (dezembro)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u2-l1',
        title: 'Macaq, iraluq, mit’aq',
        kind: 'licao',
        words: ['macaq', 'iraluq', 'mit’aq', 'naniyaq', 'maqarluni', 'pat’snarluni'],
        cloze: [
          { sentence: 'Sun’ami enerpak ___ macartuq.', answer: 'pat’snarluni', options: ['pat’snarluni', 'macaq', 'iraluq'], translation: 'Hoje de manhã está frio, mas faz sol em Kodiak.' },
          { sentence: 'Aluuwimi unuarpak ___ macartuq.', answer: 'maqarluni', options: ['maqarluni', 'qenaluni', 'mit’aq'], translation: 'Hoje de manhã está quente e faz sol na península do Alasca.' },
          { sentence: 'Qanim ___.', answer: 'Iralua', options: ['Iralua', 'Macaq', 'Ca'], translation: 'Dezembro.' },
        ],
        voice: {
          bot: 'Sun’ami enerpak pat’snarluni macartuq.',
          botTranslation: 'Hoje de manhã está frio, mas faz sol em Kodiak.',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Ca'],
          hint: 'Agradeça a notícia: “Quyanaa!”.',
        },
        communityPrompt: 'Escreva como está o tempo hoje, com “maqarluni” ou “pat’snarluni”.',
      },
      {
        id: 'ems-u2-l2',
        title: 'Cayuq, kelipaq, akagwik',
        kind: 'licao',
        words: ['cayuq', 'kelipaq', 'masla', 'haatkiik', 'akagwik', 'caskaq'],
        cloze: [
          { sentence: '___, quyanaa.', answer: 'Cayuq', options: ['Cayuq', 'Arlluk', 'Engluq'], translation: 'Chá, obrigado.' },
          { sentence: 'Kelipaq, ___.', answer: 'masla', options: ['masla', 'macaq', 'naniyaq'], translation: 'Pão, manteiga.' },
          { sentence: 'Akagwik, ___.', answer: 'alagnaq', options: ['alagnaq', 'qulen', 'gaaleq'], translation: 'Amora-branca, framboesa-do-salmão.' },
        ],
        voice: {
          bot: 'Cayuq?',
          botTranslation: 'Chá?',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Cayuq'],
          hint: 'Aceite e agradeça: “Quyanaa!”.',
        },
        communityPrompt: 'Escreva o que tem na mesa: “cayuq”, “kelipaq”, “masla”, “haatkiik”…',
      },
      {
        id: 'ems-u2-l3',
        title: 'Prova: Macartuq',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Awa ai?',
          botTranslation: 'É só isso?',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Talliman', 'Qulen'],
          hint: 'Agradeça: “Quyanaa!”, ou conte até cinco: “Talliman”.',
        },
        communityPrompt: 'Conte de um a cinco em alutiiq: “allringuq, mal’uk, pingayun, staaman, talliman”.',
      },
    ],
  },
];
