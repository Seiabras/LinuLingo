import type { UnitSeed } from '../types';

/**
 * Trilha do quimbundo: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Toda frase de exemplo combina só palavras e formas verbais atestadas
 * nas fontes citadas em vocabulario.ts e gramatica.ts — por isso as frases são simples e repetem
 * bastante o padrão “eme ngala ni…” (eu tenho…): é o único verbo com a conjugação toda confirmada.
 */
export const UNITS_KMB: UnitSeed[] = [
  {
    id: 'kmb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Eme, eye, mwene',
    emoji: '🙋',
    card: {
      id: 'kmb-c1',
      title: 'O quimbundo e o povo ambundu',
      emoji: '🇦🇴',
      history:
        'O quimbundo (kimbundu) é uma língua banta falada por cerca de 3,7 milhões de pessoas no noroeste de Angola — nas províncias de Luanda, Bengo, Icolo e Bengo, Cuanza Norte, Cuanza Sul e Malanje —, principalmente pelo povo ambundu (em quimbundo, “akwa mbundu”, “os de Mbundu”). É a segunda língua banta mais falada do país, atrás só do umbundo, uma língua diferente, do centro-sul de Angola: as duas são aparentadas, mas não são a mesma língua. A primeira gramática do quimbundo foi publicada entre 1888 e 1889 pelo missionário suíço Héli Chatelain, que também reuniu contos tradicionais em quimbundo com tradução.',
      culture_tip:
        'O próprio nome “Angola” vem do quimbundo: os portugueses adaptaram “ngola”, o título dos reis do Ndongo e de Matamba, dois reinos de língua quimbundo, para nomear a colônia a partir de 1571. E o quimbundo também deixou marca no português falado hoje: a gíria “bué” (muito, bastante), comum em Portugal e Angola, vem do quimbundo “mbuwe” (fartura, abundância).',
      grammar_why:
        'O quimbundo não conjuga o verbo “ser/estar” como o português: o verbo “kuala” muda só um pedacinho (um prefixo) para cada pessoa, e o pronome quase sempre aparece também. “Eme ngala” é “eu sou/estou”, com o “ng-” marcando a primeira pessoa; “eye uala” é “tu és/estás” ou “você é/está”.',
      grammar_examples: [
        ['Eme ngala.', 'Eu sou/estou.'],
        ['Eye uala.', 'Tu és/estás.'],
        ['Etu tuala.', 'Nós somos/estamos.'],
        ['Ene ala.', 'Eles são/estão.'],
      ],
      character_guide: [
        ['mb, nd, ng, nz', 'consoantes pré-nasalizadas: soam como um “m” ou “n” bem grudado na consoante seguinte, quase num só golpe de voz', 'mbunda (bunda), ndenge (criança), ngulu (porco), nzumbi (espírito)'],
        ['x', 'como o “ch” de “chuva” ou o “x” de “xadrez”', 'muxima (coração), kuxinga (insultar)'],
        ['sem c, q, r', 'o alfabeto do quimbundo não usa essas três letras', '—'],
        ['á / à (só em dicionário)', 'tom alto e tom baixo — a escrita do dia a dia quase nunca marca o tom', 'kalúnga (mar), ngímbi (cantor)'],
      ],
    },
    lessons: [
      {
        id: 'kmb-u1-l1',
        title: 'Eme ngala, eye uala',
        kind: 'licao',
        words: ['eme', 'eye', 'mwene', 'etu', 'mutu', 'kuala'],
        cloze: [
          { sentence: '___ ngala.', answer: 'Eme', options: ['Eme', 'Eye', 'Etu'], translation: 'Eu sou/estou.' },
          { sentence: '___ uala.', answer: 'Eye', options: ['Eye', 'Eme', 'Ene'], translation: 'Tu és/estás.' },
          { sentence: 'Etu ___.', answer: 'tuala', options: ['tuala', 'ngala', 'uala'], translation: 'Nós somos/estamos.' },
        ],
        voice: {
          bot: 'Eme ngala. Ni eye?',
          botTranslation: 'Eu sou/estou. E você?',
          expected: ['Eme ngala.', 'ngala', 'eme ngala'],
          hint: 'Diga “Eme ngala” (eu sou/estou) devolvendo a pergunta: “Ni eye?” é “e você?”.',
        },
        communityPrompt: 'Escreva os seis pronomes do quimbundo (eme, eye, mwene, etu, enu, ene) e, para cada um, a forma de “kuala” (ser/estar): ngala, uala, uala, tuala, nuala, ala.',
      },
      {
        id: 'kmb-u1-l2',
        title: 'Eme ngala ni dikamba',
        kind: 'licao',
        words: ['muleke', 'ndenge', 'dikamba', 'imbwa', 'hoji', 'kudya'],
        cloze: [
          { sentence: 'Eme ngala ni ___.', answer: 'dikamba', options: ['dikamba', 'imbwa', 'hoji'], translation: 'Eu tenho um amigo.' },
          { sentence: 'Eme ngala ni ___.', answer: 'imbwa', options: ['imbwa', 'dikamba', 'muleke'], translation: 'Eu tenho um cachorro.' },
          { sentence: 'Etu tuala ni ___.', answer: 'kudya', options: ['kudya', 'hoji', 'ndenge'], translation: 'Nós temos comida.' },
        ],
        voice: {
          bot: 'Eye uala ni imbwa?',
          botTranslation: 'Você tem um cachorro?',
          expected: ['Eme ngala ni imbwa.', 'ngala ni imbwa', 'eme ngala ni hoji'],
          hint: 'Responda “Eme ngala ni…” (eu tenho…) com um bicho: imbwa (cachorro) ou hoji (leão).',
        },
        communityPrompt: 'Escreva duas frases com “Eme ngala ni…” contando o que você tem: um amigo (dikamba), um cachorro (imbwa) ou outra palavra da lição.',
      },
      {
        id: 'kmb-u1-l3',
        title: 'Teste: eme, eye, mwene',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Eye uala ni dikamba ni imbwa?',
          botTranslation: 'Você tem um amigo e um cachorro?',
          expected: ['Eme ngala ni dikamba ni imbwa.', 'ngala ni dikamba ni imbwa'],
          hint: 'Junte duas coisas com “ni” (e): “Eme ngala ni… ni…”.',
        },
        communityPrompt: 'Escreva três frases com “Eme ngala ni…”, cada uma juntando duas palavras com “ni” (e): por exemplo, “Eme ngala ni dikamba ni imbwa.”',
      },
    ],
  },
  {
    id: 'kmb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Etu tuala ni…',
    emoji: '🤲',
    card: {
      id: 'kmb-c2',
      title: 'Njinga Mbande e o reino do Ndongo',
      emoji: '👑',
      history:
        'Njinga Mbande (também escrita Nzinga), do povo ambundu e falante nativa de quimbundo, governou o reino do Ndongo de 1624 a 1663 e o de Matamba de 1631 a 1663, no norte de Angola. Alfabetizada em português por missionários, negociou como embaixadora com Portugal em 1621 e, ao ser batizada, adotou o nome Dona Ana de Sousa — usando a diplomacia portuguesa sem abrir mão da independência política do seu povo. Depois que Portugal declarou guerra ao Ndongo em 1626, ela resistiu por décadas, aliou-se à Companhia Holandesa das Índias Ocidentais em 1641 e só assinou um tratado de paz com os portugueses em 1656.',
      culture_tip:
        'A história de Njinga mostra algo comum entre os povos de língua quimbundo da época: viver entre duas línguas e dois mundos, o africano e o português, sem deixar de ser quem eram. Hoje, falar quimbundo em Angola é também lembrar dessa resistência.',
      grammar_why:
        '“Kuala ni” (lit. “estar com”) é como o quimbundo diz “ter”: o “ni” depois do verbo “kuala” mostra o que a pessoa tem. “Eme ngala ni menya” é “eu tenho água”, palavra por palavra “eu estou com água”.',
      grammar_examples: [
        ['Eme ngala ni menya.', 'Eu tenho água.'],
        ['Etu tuala ni tubia.', 'Nós temos fogo.'],
        ['Mwene uala ni mbunda.', 'Ele/ela tem bunda.'],
        ['Ene ala ni kilombo.', 'Eles têm um quilombo.'],
      ],
      character_guide: [
        ['mu-/a-', 'classe das pessoas: o “mu-” do singular vira “a-” no plural', 'muleke (menino) → aleke (meninos)'],
        ['ki-/i-', 'outra classe comum: o “ki-” vira “i-”', 'kilombo (quilombo) → ilombo (quilombos)'],
        ['N-/ji-', 'bichos e muitas outras palavras: ganha “ji-” no plural', 'mbunda (bunda) → jimbunda; imbwa (cachorro) → jiimbwa'],
        ['di-/ma-', 'mais uma classe: o “di-” vira “ma-”', 'dikamba (amigo) → makamba (amigos)'],
      ],
    },
    lessons: [
      {
        id: 'kmb-u2-l1',
        title: 'Menya ni tubia',
        kind: 'licao',
        words: ['riulu', 'tubia', 'menya', 'kalunga', 'moxi', 'yadi'],
        cloze: [
          { sentence: 'Eme ngala ni ___.', answer: 'menya', options: ['menya', 'tubia', 'riulu'], translation: 'Eu tenho água.' },
          { sentence: 'Moxi, ___, tatu, wana.', answer: 'yadi', options: ['yadi', 'tatu', 'wana'], translation: 'Um, dois, três, quatro.' },
          { sentence: 'Etu tuala ni ___.', answer: 'tubia', options: ['tubia', 'menya', 'kalunga'], translation: 'Nós temos fogo.' },
        ],
        voice: {
          bot: 'Eye uala ni menya?',
          botTranslation: 'Você tem água?',
          expected: ['Eme ngala ni menya.', 'ngala ni menya', 'eme ngala ni tubia'],
          hint: 'Responda “Eme ngala ni…” com água (menya) ou fogo (tubia).',
        },
        communityPrompt: 'Escreva uma frase com “Etu tuala ni…” sobre a natureza (menya, tubia, riulu ou kalunga) e conte até quatro em quimbundo: moxi, yadi, tatu, wana.',
      },
      {
        id: 'kmb-u2-l2',
        title: 'Muxima ni mbunda',
        kind: 'licao',
        words: ['muxima', 'mbunda', 'kitanda', 'kilombo', 'kwenda', 'kuala ni'],
        cloze: [
          { sentence: 'Eme ngala ni ___.', answer: 'muxima', options: ['muxima', 'mbunda', 'mutwe'], translation: 'Eu tenho coração.' },
          { sentence: 'Mwene uala ni ___.', answer: 'mbunda', options: ['mbunda', 'kitanda', 'kilombo'], translation: 'Ele/ela tem bunda.' },
          { sentence: 'Etu ___ ni kilombo.', answer: 'tuala', options: ['tuala', 'ngala', 'uala'], translation: 'Nós temos um quilombo.' },
        ],
        voice: {
          bot: 'Eye uala ni mbunda?',
          botTranslation: 'Você tem bunda?',
          expected: ['Eme ngala ni mbunda.', 'ngala ni mbunda'],
          hint: 'Todo mundo tem: responda “Eme ngala ni mbunda.” — a mesma palavra que deu “bunda” em português!',
        },
        communityPrompt: 'Escreva três frases com “Eme ngala ni…” ou “Mwene uala ni…” usando palavras do corpo e do lugar: muxima, mutwe, mbunda, kitanda, kilombo.',
      },
      {
        id: 'kmb-u2-l3',
        title: 'Teste: etu tuala ni…',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Eye uala ni menya ni tubia?',
          botTranslation: 'Você tem água e fogo?',
          expected: ['Eme ngala ni menya ni tubia.', 'ngala ni menya ni tubia'],
          hint: 'Junte duas coisas com “ni”: “Eme ngala ni… ni…”.',
        },
        communityPrompt: 'Escreva três frases juntando, com “ni”, uma palavra da natureza e uma do corpo ou do lugar: por exemplo, “Eme ngala ni menya ni mbunda.”',
      },
    ],
  },
];
