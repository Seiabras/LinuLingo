import type { UnitSeed } from '../types';

/**
 * Trilha do esperanto: A1.1 ao A2.2 (ver `incomplete` em index.ts) — a primeira língua construída
 * do app com curso de verdade (pedido do Matheus, 08/10/2026). Fontes: L. L. Zamenhof, "Fundamento
 * de Esperanto" (1887); PMEG (lernu.net/pmeg); Wikipedia "Esperanto grammar"/"Esperanto
 * vocabulary"/"Esperanto orthography".
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
  {
    id: 'eo-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'La vetero kaj la vestoj',
    emoji: '🌦️',
    card: {
      id: 'eo-c3',
      title: 'Participios: seis formas feitas de peças que você já conhece',
      emoji: '🎭',
      history:
        'O próprio nome "Esperanto" nasceu de um participio: Zamenhof publicou o primeiro livro da língua em 1887 sob o pseudônimo "Doktoro Esperanto" ("o doutor que espera"), de "esperi" (esperar) + -ant- (participio ativo em curso) + -o (substantivo). O nome do pseudônimo pegou tanto que virou o nome da própria língua.',
      culture_tip:
        'Por não ter um território nem um clima próprio, o esperanto fala do tempo de um jeito "neutro": "pluvas" (chove, verbo impessoal, sem sujeito) funciona em qualquer país — chova, neve ou faça sol, a estrutura da frase não muda.',
      grammar_why:
        'Os participios combinam três aspectos (em curso -ant-/-at-, concluído -int-/-it-, por vir -ont-/-ot-) com a voz (ativo, quem faz; passivo, quem recebe) e a terminação final (-a adjetivo, -o pessoa/coisa, -e advérbio). "Vestita" (vestido, já feito) e "vestanta" (vestindo, em curso) usam a MESMA raiz de "vesti" (vestir).',
      grammar_examples: [
        ['La vestita knabo eliris.', 'O menino (já) vestido saiu.'],
        ['Pluvas, kaj la vento estas forta.', 'Está chovendo, e o vento está forte.'],
        ['Mi surmetas la jakon, ĉar estas malvarme.', 'Eu visto o casaco, porque está frio.'],
      ],
      character_guide: [
        ['ĝ en "preĝejo"', 'como o "dj" de "adjetivo"', 'preĝejo ("pre-DJE-io", igreja)'],
      ],
    },
    lessons: [
      {
        id: 'eo-u3-l1',
        title: 'Kia estas la vetero?',
        kind: 'licao',
        words: ['vetero', 'pluvo', 'vento', 'malvarmo', 'varmo', 'nubo'],
        cloze: [
          { sentence: 'Kia estas la ___ hodiaŭ?', answer: 'vetero', options: ['vetero', 'pluvo', 'nubo'], translation: 'Como está o tempo hoje?' },
          { sentence: 'Hieraŭ ___ falis multe.', answer: 'pluvo', options: ['pluvo', 'vento', 'varmo'], translation: 'Ontem choveu muito. (literalmente: muita chuva caiu)' },
          { sentence: 'Vintre estas granda ___.', answer: 'malvarmo', options: ['malvarmo', 'varmo', 'vento'], translation: 'No inverno há muito frio.' },
        ],
        voice: {
          bot: 'Kia estas la vetero hodiaŭ ĉe vi?',
          botTranslation: 'Como está o tempo hoje aí onde você está?',
          expected: ['Hodiaŭ estas varme, kaj la suno brilas.', 'varme', 'la suno brilas'],
          hint: 'Use "estas varme/malvarme" (está calor/frio) ou "la suno brilas"/"pluvas" (o sol brilha/chove).',
        },
        communityPrompt: 'Descreva o tempo de hoje em esperanto, usando pelo menos duas palavras desta lição.',
      },
      {
        id: 'eo-u3-l2',
        title: 'Kiujn vestojn vi portas?',
        kind: 'licao',
        words: ['ĉemizo', 'pantalono', 'ŝuo', 'jako', 'ĉapelo', 'ganto'],
        cloze: [
          { sentence: 'Mi portas bluan ___.', answer: 'ĉemizon', options: ['ĉemizon', 'jakon', 'ĉapelon'], translation: 'Eu visto uma camisa azul. (acusativo -n)' },
          { sentence: 'Surmetu la ___, estas malvarme.', answer: 'jakon', options: ['jakon', 'ŝuon', 'ganton'], translation: 'Vista o casaco, está frio. (acusativo -n)' },
          { sentence: 'Vintre mi uzas ___ sur la manoj.', answer: 'gantojn', options: ['gantojn', 'ŝuojn', 'ĉapelojn'], translation: 'No inverno eu uso luvas nas mãos. (plural acusativo -ojn)' },
        ],
        voice: {
          bot: 'Kiujn vestojn vi portas hodiaŭ?',
          botTranslation: 'Que roupas você está vestindo hoje?',
          expected: ['Mi portas ĉemizon kaj pantalonon.', 'mi portas', 'ĉemizon'],
          hint: 'Use "mi portas…" (eu visto/uso…) com o acusativo -n da roupa.',
        },
        communityPrompt: 'Descreva a roupa que você está vestindo hoje em esperanto, usando o acusativo -n e pelo menos duas peças.',
      },
      {
        id: 'eo-u3-l3',
        title: 'Ekzameno: la vetero kaj la vestoj',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hieraŭ pluvis multe ĉi tie. Kia estis la vetero ĉe vi, kaj kiujn vestojn vi portis?',
          botTranslation: 'Ontem choveu muito aqui. Como estava o tempo onde você estava, e que roupa você vestiu?',
          expected: ['Hieraŭ estis sune, kaj mi portis ĉemizon kaj ŝuojn.', 'hieraŭ estis', 'mi portis'],
          hint: 'Use o passado (-is) para contar como foi o tempo e o que você vestiu.',
        },
        communityPrompt: 'Escreva duas ou três frases no passado (-is) contando como foi o tempo ontem e que roupa você vestiu.',
      },
    ],
  },
  {
    id: 'eo-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'La korpo, la urbo kaj la laboro',
    emoji: '🏙️',
    card: {
      id: 'eo-c4',
      title: 'Kiu: ligando frases com a peça certa',
      emoji: '🔗',
      history:
        'Palavras como "lernejo" (escola), "preĝejo" (igreja) e "malsanulejo" (hospital) mostram bem o projeto de Zamenhof: em vez de memorizar uma palavra nova para cada lugar, basta aprender o sufixo -ej- ("lugar de") e combiná-lo com uma raiz já conhecida (lerni, preĝi, malsana+ul). Esse mesmo princípio de "poucas peças, muitas combinações" se repete na oração relativa com "kiu", que liga frases sem precisar de uma palavra nova para cada caso.',
      culture_tip:
        'Para descrever profissões, o esperanto usa o sufixo -ist-: "kuiristo" (cozinheiro), "instruisto" (professor), "kuracisto" (médico) — todos formados de um verbo ou substantivo de base mais -ist- (quem trabalha com isso) e -o (pessoa).',
      grammar_why:
        '"Kiu" liga uma oração a um substantivo anterior e concorda em número (kiu/kiuj) e caso (kiu/kiun), mas o caso vem da função de "kiu" DENTRO da própria oração relativa: "La viro, kiun mi vidis en la vendejo, estas kuracisto" ("kiun" é objeto de "vidis", mesmo que "viro" seja sujeito da frase principal).',
      grammar_examples: [
        ['La kuracisto, kiu laboras en la malsanulejo, estas mia amiko.', 'O médico que trabalha no hospital é meu amigo.'],
        ['Mia kapo doloras.', 'Minha cabeça está doendo.'],
        ['Kiam mi estis infano, mi loĝis en malgranda urbo.', 'Quando eu era criança, eu morava numa cidade pequena.'],
      ],
      character_guide: [
        ['ŭ em "ŝuo"', 'não é o caso aqui (ŝuo não tem ŭ) — repare o ŝ: som "sh"', 'ŝuo ("SHU-o", sapato)'],
      ],
    },
    lessons: [
      {
        id: 'eo-u4-l1',
        title: 'Mia korpo',
        kind: 'licao',
        words: ['kapo', 'mano', 'okulo', 'kruro', 'buŝo', 'nazo'],
        cloze: [
          { sentence: 'Mia ___ doloras.', answer: 'kapo', options: ['kapo', 'mano', 'kruro'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Donu al mi vian ___.', answer: 'manon', options: ['manon', 'kapon', 'okulon'], translation: 'Dê-me a sua mão. (acusativo -n)' },
          { sentence: 'Ŝi havas bluajn ___.', answer: 'okulojn', options: ['okulojn', 'manojn', 'krurojn'], translation: 'Ela tem os olhos azuis. (plural acusativo -ojn)' },
        ],
        voice: {
          bot: 'Kio doloras al vi?',
          botTranslation: 'O que está lhe doendo?',
          expected: ['Mia kapo doloras.', 'mia kapo', 'doloras'],
          hint: 'Use "mia… doloras" (minha… está doendo) com uma parte do corpo.',
        },
        communityPrompt: 'Escreva em esperanto o que está lhe doendo, usando "mia… doloras" e pelo menos duas partes do corpo.',
      },
      {
        id: 'eo-u4-l2',
        title: 'En la urbo',
        kind: 'licao',
        words: ['lernejo', 'vendejo', 'malsanulejo', 'strato', 'kuracisto', 'labori'],
        cloze: [
          { sentence: 'La infanoj iras al la ___.', answer: 'lernejo', options: ['lernejo', 'vendejo', 'malsanulejo'], translation: 'As crianças vão à escola.' },
          { sentence: 'La ___ laboras en la malsanulejo.', answer: 'kuracisto', options: ['kuracisto', 'instruisto', 'ŝoforo'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Mia ___ estas trankvila.', answer: 'strato', options: ['strato', 'vendejo', 'lernejo'], translation: 'Minha rua é tranquila.' },
        ],
        voice: {
          bot: 'Kie via patro aŭ patrino laboris, kiam vi estis infano?',
          botTranslation: 'Onde seu pai ou sua mãe trabalhava, quando você era criança?',
          expected: ['Mia patro laboris en la malsanulejo.', 'laboris', 'malsanulejo'],
          hint: 'Use o passado "-is" (laboris) para descrever onde seus pais trabalhavam.',
        },
        communityPrompt: 'Descreva, em esperanto, onde ficam a lernejo, a vendejo e a malsanulejo da sua cidade, usando "kiu" para ligar uma informação extra (ex.: "la lernejo, kiu estas granda…").',
      },
      {
        id: 'eo-u4-l3',
        title: 'Ekzameno: la korpo, la urbo kaj la laboro',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kiam vi estis infano, kie vi loĝis, kaj kie viaj gepatroj laboris?',
          botTranslation: 'Quando você era criança, onde você morava, e onde seus pais trabalhavam?',
          expected: ['Kiam mi estis infano, mi loĝis en malgranda urbo, kaj mia patro laboris en vendejo.', 'kiam mi estis infano', 'laboris'],
          hint: 'Use "kiam mi estis infano…" e o passado (-is) para descrever como era antes.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando onde você morava e onde seus pais trabalhavam quando você era criança, usando "kiam mi estis infano…".',
      },
    ],
  },
];
