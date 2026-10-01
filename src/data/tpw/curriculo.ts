import type { UnitSeed } from '../types';

/**
 * Trilha do tupi antigo: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Os exemplos descrevem a vida numa aldeia tupinambá do litoral, já que a
 * língua não tem mais falantes nativos vivos para perguntar "de onde você é" no sentido moderno.
 */
export const UNITS_TPW: UnitSeed[] = [
  {
    id: 'tpw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ereîúrype? Os primeiros cumprimentos',
    emoji: '👋',
    card: {
      id: 'tpw-c1',
      title: 'A língua que batizou o Brasil',
      emoji: '🌴',
      history:
        'O tupi antigo (também chamado tupinambá, ou “língua brasílica” pelos próprios jesuítas) foi falado ao longo de boa parte do litoral do Brasil entre os séculos XVI e XVIII. Os padres da Companhia de Jesus — principalmente José de Anchieta — aprenderam a língua, escreveram a sua primeira gramática (1595) e a usaram para catequizar e para se comunicar entre as diferentes nações indígenas da costa, o que a espalhou ainda mais. A língua deixou de ser falada por volta do fim do século XVIII, mas sobreviveu transformada na língua geral amazônica e no nheengatu, ainda falado hoje no noroeste da Amazônia. Hoje o tupi antigo se estuda nos textos que restaram — cartas, catecismos, autos de Anchieta — e no “Dicionário de Tupi Antigo” (2013) do filólogo Eduardo de Almeida Navarro, da USP, que também criou a ortografia moderna usada neste curso.',
      culture_tip:
        'O cumprimento mais documentado em tupi antigo não é uma palavra fixa como “oi”: é a pergunta “Ereîúrype?” (“você veio?”), respondida com “Pa, aîur” (“sim, eu vim”) — chegar à casa de alguém já era, em si, o assunto da conversa. Os cronistas também registraram uma forma de chamar a atenção de alguém que muda conforme quem fala: os homens diziam “Abá gûé!” e as mulheres “Abá îú!” (algo como “ei, gente!”) — um traço de fala diferenciada por gênero do locutor, real e documentado, que aparece em outras línguas tupi-guarani até hoje.',
      grammar_why:
        'Repare que “Ixé, xe rera Linu” (“eu, meu nome é Linu”) não tem nenhuma palavra para “é”: o tupi antigo não tem um verbo equivalente a “ser”. Para descrever ou identificar algo, basta encostar duas palavras uma na outra — o próprio adjetivo funciona como um verbo (“Pirá katu” é ao mesmo tempo “peixe bom” e “o peixe é bom”). Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Ereîúrype? — Pa, aîur.', '“Você veio?” — “Sim, eu vim.” (o cumprimento mais comum)'],
        ['Marãpe nde rera? — Xe rera Linu.', '“Qual é o seu nome?” — “Meu nome é Linu.”'],
        ['Ixé, xe rera Linu.', '“Eu, meu nome é Linu” — sem verbo “ser”: o tupi antigo só junta as palavras.'],
        ['Tupã irumo!', '“Adeus!” (lit. “com Tupã”, já do tempo do contato com os jesuítas)'],
      ],
      character_guide: [
        ["'", 'oclusiva glotal: uma pequena parada no ar, como a pausa de “uh-oh” em inglês', "ta'yra (“TA-ü-ra”, filho, dito pelo pai)"],
        ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasalada, como no português “mãe” ou “irmã”', 'kûarahy (“kua-ra-HÜ”, sol)'],
        ['gû, kû', 'g/k seguido de um “u” bem curto e grudado, quase um “gw”/“kw”', 'gûasu (“GUA-su”, grande)'],
        ['x', 'sempre o som de “ch” do português de Portugal, nunca de “cs” ou “z”', 'xe (“che”, meu/eu)'],
        ['y', 'vogal própria do tupi, entre o “i” e o “u”, feita com a língua bem atrás', "'y (“ü”, água)"],
      ],
    },
    lessons: [
      {
        id: 'tpw-u1-l1',
        title: 'Ereîúrype? Pa, aîur!',
        kind: 'licao',
        words: ['Ereîúrype?', 'Pa, aîur', 'Eẽ', 'Aani', 'Tupã irumo', 'Marãpe nde rera?'],
        cloze: [
          { sentence: '“___?” “Pa, aîur.”', answer: 'Ereîúrype', options: ['Ereîúrype', 'Marãpe nde rera', 'Tupã irumo'], translation: '“Você veio?” “Sim, eu vim.”' },
          { sentence: '“___?” “Xe rera Îara.”', answer: 'Marãpe nde rera', options: ['Marãpe nde rera', 'Ereîúrype', 'Aani'], translation: '“Qual é o seu nome?” “Meu nome é Îara.”' },
          { sentence: '___, xe aîkó óka pupé.', answer: 'Aani', options: ['Aani', 'Eẽ', 'Pa, aîur'], translation: '“Não”, eu estou em casa.' },
        ],
        voice: {
          bot: 'Ereîúrype?',
          botTranslation: 'Você veio?',
          expected: ['Pa, aîur', 'pa aîur', 'eẽ, aîur'],
          hint: 'Responda com “Pa, aîur” (sim, eu vim) — é a resposta tradicional a esse cumprimento.',
        },
        communityPrompt: 'Escreva o cumprimento mais comum do tupi antigo e a resposta dele: “Ereîúrype?” e “Pa, aîur”.',
      },
      {
        id: 'tpw-u1-l2',
        title: 'Ixé, endé, a\'e: as pessoas',
        kind: 'licao',
        words: ['ixé', 'endé', "a'e", 'oré', 'îandé', 'peẽ'],
        cloze: [
          { sentence: '___, xe rera Linu.', answer: 'Ixé', options: ['Ixé', 'Endé', "A'e"], translation: 'Eu, meu nome é Linu.' },
          { sentence: 'Marãpe nde rera, ___?', answer: 'endé', options: ['endé', 'ixé', 'oré'], translation: 'Qual é o seu nome, você?' },
          { sentence: '___ oroîkó óka pupé.', answer: 'Oré', options: ['Oré', 'Îandé', 'Peẽ'], translation: 'Nós (sem você) estamos em casa.' },
        ],
        voice: {
          bot: 'Marãpe nde rera?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Xe rera…', 'ixé, xe rera', 'xe rera'],
          hint: 'Responda com “Xe rera…” (meu nome é…) e diga o seu nome.',
        },
        communityPrompt: 'Apresente-se em tupi antigo: diga “Xe rera…” (meu nome é…) e pergunte o nome de outra pessoa com “Marãpe nde rera?”.',
      },
      {
        id: 'tpw-u1-l3',
        title: 'Prova: primeiros cumprimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ereîúrype? Marãpe nde rera?',
          botTranslation: 'Você veio? Qual é o seu nome?',
          expected: ['Pa, aîur. Xe rera…', 'pa aîur xe rera', 'xe rera'],
          hint: 'Responda às duas perguntas: confirme que veio (“Pa, aîur”) e diga o seu nome (“Xe rera…”).',
        },
        communityPrompt: 'Escreva uma pequena apresentação em tupi antigo: cumprimento, confirmação e o seu nome.',
      },
    ],
  },
  {
    id: 'tpw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família, a casa e a comida',
    emoji: '👪',
    card: {
      id: 'tpw-c2',
      title: 'Quando tuba vira ruba',
      emoji: '🏡',
      history:
        'A aldeia tupinambá se organizava em grandes casas compridas (ocas), cada uma abrigando várias famílias aparentadas, viradas para um pátio central onde aconteciam os rituais e as decisões do grupo. O parentesco também funcionava de um jeito diferente do português: “sy” (mãe) valia tanto para a mãe quanto para as irmãs dela, e “tuba” (pai) tanto para o pai quanto para os irmãos dele — por isso um mesmo tio podia ser chamado exatamente como se chamaria o próprio pai.',
      culture_tip:
        'Repare que a palavra para “filho” muda conforme quem fala: um pai chama o filho de “ta\'yra”, mas uma mãe chama o mesmo filho de “membyra”. Não é uma questão do sexo da criança, e sim do sexo de quem fala — outro traço de fala diferenciada por gênero, como os cumprimentos “gûé”/“îú” da unidade passada.',
      grammar_why:
        'Alguns substantivos do tupi antigo mudam a consoante inicial quando aparecem possuídos: “tuba” (pai) sozinho começa com t-, mas “meu pai” se diz “xe ruba”, com r- no lugar do t-. É a chamada alternância t/r, uma marca bem conhecida das línguas da família tupi-guarani (o mesmo padrão aparece, por exemplo, no guarani). A gramática desta unidade mostra mais exemplos.',
      grammar_examples: [
        ['Xe ruba gûasu.', 'Meu pai é grande. (“tuba” vira “ruba” quando possuído)'],
        ['Xe sy katu.', 'Minha mãe é boa.'],
        ['Mokõî membyra.', 'Dois filhos (ditos pela mãe).'],
        ['Oka gûasu.', 'A casa é grande.'],
      ],
      character_guide: [
        ['nh', 'som de “nh” do português, como em “ninho”', "nhe'eng (“nheENG”, falar)"],
        ['û', 'um “u” bem curto, quase uma semivogal, grudado na consoante anterior', 'gûasu (“GUA-su”, grande)'],
        ['k', 'sempre [k], como em “casa”, nunca como “s” ou “ss”', 'kamby (“KAM-bü”, leite)'],
      ],
    },
    lessons: [
      {
        id: 'tpw-u2-l1',
        title: 'A família (abá nheenga)',
        kind: 'licao',
        words: ['sy', 'tuba', "ta'yra", 'membyra', 'kunhã', 'abá'],
        cloze: [
          { sentence: 'Xe ___ katu.', answer: 'sy', options: ['sy', 'tuba', 'kunhã'], translation: 'Minha mãe é boa.' },
          { sentence: 'Xe ___ gûasu.', answer: 'ruba', options: ['ruba', 'sy', 'mena'], translation: 'Meu pai é grande. (tuba → ruba, possuído)' },
          { sentence: 'Xe ___ porang.', answer: 'membyra', options: ['membyra', 'kunhã', "ta'yra"], translation: 'Meu filho (ou minha filha) é bonito(a). (dito pela mãe)' },
        ],
        voice: {
          bot: 'Erekó membyra?',
          botTranslation: 'Você tem filhos?',
          expected: ['Eẽ, arekó membyra', 'arekó membyra', 'aani'],
          hint: 'Responda com “Eẽ, arekó membyra…” (sim, eu tenho filho(s)) ou simplesmente “Aani” (não).',
        },
        communityPrompt: 'Fale da sua família em tupi antigo: cite a mãe (sy), o pai (xe ruba) e, se tiver, o filho ou a filha (ta\'yra/membyra).',
      },
      {
        id: 'tpw-u2-l2',
        title: 'Comida e natureza',
        kind: 'licao',
        words: ["'y", 'pirá', 'abati', 'oka', 'tatá', 'yby'],
        cloze: [
          { sentence: "A'u ___.", answer: 'pirá', options: ['pirá', 'abati', "'y"], translation: 'Eu como peixe.' },
          { sentence: '___ pupé aîkó.', answer: "'Y", options: ["'Y", 'Oka', 'Yby'], translation: 'Eu estou na água (lit. “na água eu estou”).' },
          { sentence: '___ gûasu.', answer: 'Oka', options: ['Oka', 'Tatá', 'Yby'], translation: 'A casa é grande.' },
        ],
        voice: {
          bot: "Ere'u abati?",
          botTranslation: 'Você come milho?',
          expected: ["Eẽ, a'u abati", "a'u abati", 'aani'],
          hint: 'Responda com “Eẽ, a’u…” (sim, eu como…) e o nome da comida, ou “Aani” (não).',
        },
        communityPrompt: 'Descreva o que você come e onde você mora, usando pelo menos três palavras desta lição.',
      },
      {
        id: 'tpw-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Marãpe nde rera? Erekó membyra?',
          botTranslation: 'Qual é o seu nome? Você tem filhos?',
          expected: ['Xe rera…', 'xe rera, arekó membyra', 'aani'],
          hint: 'Diga o seu nome com “Xe rera…” e responda sobre filhos com “Arekó…” ou “Aani”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em tupi antigo contando sobre a sua família, a sua casa e o que você come, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
