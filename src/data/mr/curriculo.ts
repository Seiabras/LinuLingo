import type { UnitSeed } from '../types';

/**
 * Trilha do marata: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Fontes: Wikipedia “Marathi language” (história, número de falantes, literatura); Omniglot
 * “Marathi phrases” e “Marathi numbers”; Wiktionary (verbetes individuais citados em cada palavra).
 */
export const UNITS_MR: UnitSeed[] = [
  {
    id: 'mr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'नमस्कार, मराठी!',
    emoji: '👋',
    card: {
      id: 'mr-c1',
      title: 'Um idioma indo-ariano que guardou os três gêneros do sânscrito',
      emoji: '🪔',
      history:
        'O marata descende do prácrito marata (maharashtri prácrito), falado na região que hoje é o estado de Maharashtra, no oeste da Índia. É uma das 22 línguas listadas na Constituição indiana, com cerca de 83 milhões de falantes nativos (censo de 2011) e mais de 16 milhões de falantes de segunda língua — uma das línguas indo-arianas com mais falantes do mundo. Ao contrário da maioria das línguas indo-arianas modernas (como o hindi, que já perdeu o neutro), o marata manteve os três gêneros gramaticais do sânscrito: masculino, feminino e neutro. A escrita é o devanágari, a mesma do hindi e do sânscrito, mas com uma letra própria do marata: “ळ”, um “l” retroflexo que não existe no devanágari padrão do hindi.',
      culture_tip:
        'O marata tem três pronomes para “você”, com níveis de educação bem marcados: “तू” só entre pessoas muito próximas (ou com crianças), “तुम्ही” no dia a dia educado, e “आपण” para o maior respeito — que, de quebra, também serve para dizer “nós” quando inclui a pessoa com quem se fala.',
      grammar_why:
        'O marata é uma língua SOV (sujeito-objeto-verbo): o verbo sempre vem por último. “मी मुंबैत राहतो” é, palavra por palavra, “eu em-Mumbai moro” — o “em” de “em Mumbai” vira uma posposição (“-त”) grudada depois do nome da cidade, não uma preposição antes dele.',
      grammar_examples: [
        ['नमस्कार, माझं नाव … आहे.', 'Oi, meu nome é ...'],
        ['तुझं नाव काय आहे?', 'Qual é o seu nome? (informal)'],
        ['मी मुंबैत राहतो.', 'Eu moro em Mumbai.'],
        ['नमस्कार, येतो!', 'Tchau, vou indo! (dito por um homem)'],
      ],
      character_guide: [
        ['अ', 'um “a” curto, como em “cama”', 'असणे (asṇe, “ser, estar”)'],
        ['आ', 'um “a” longo e aberto', 'आई (āī, “mãe”)'],
        ['घ', 'um “g” aspirado, soprado, que existe no marata mas não no português', 'घर (ghar, “casa”)'],
        ['ळ', 'um “l” retroflexo, exclusivo do marata e de poucas outras línguas do sul da Índia — não existe no hindi padrão nem no português', 'वेळ (veḷ, “tempo”; fora do vocabulário desta unidade)'],
      ],
    },
    lessons: [
      {
        id: 'mr-u1-l1',
        title: 'नमस्कार, आभारी आहे',
        kind: 'licao',
        words: ['नमस्कार', 'सुप्रभात', 'कृपया', 'आभारी आहे', 'माफ करा', 'येतो / येते'],
        cloze: [
          { sentence: '___, आई!', answer: 'सुप्रभात', options: ['सुप्रभात', 'नमस्कार', 'माफ करा'], translation: 'Bom dia, mãe!' },
          { sentence: 'एक कप चहा, ___.', answer: 'कृपया', options: ['कृपया', 'आभारी आहे', 'होय'], translation: 'Um copo de chá, por favor.' },
          { sentence: 'मी ___.', answer: 'आभारी आहे', options: ['आभारी आहे', 'माफ करा', 'नाही'], translation: 'Eu sou grato/agradecido.' },
        ],
        voice: {
          bot: 'नमस्कार! तू कसा आहेस?',
          botTranslation: 'Oi! Como você vai?',
          expected: ['मी ठीक आहे, आभारी आहे. आणि तू?', 'ठीक आहे', 'आभारी आहे'],
          hint: 'Responda que vai bem e devolva a pergunta: “मी ठीक आहे, आभारी आहे. आणि तू?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em marata: um de manhã (“सुप्रभात”), um “por favor” (“कृपया”) e um jeito de agradecer (“आभारी आहे”).',
      },
      {
        id: 'mr-u1-l2',
        title: 'मी, तू, आपण',
        kind: 'licao',
        words: ['मी', 'तू', 'तुम्ही', 'आपण', 'नाव', 'असणे'],
        cloze: [
          { sentence: '___ मुंबैत राहतो.', answer: 'मी', options: ['मी', 'तू', 'ते'], translation: 'Eu moro em Mumbai.' },
          { sentence: 'तुझं ___ काय आहे?', answer: 'नाव', options: ['नाव', 'घर', 'भाऊ'], translation: 'Qual é o seu nome? (informal)' },
          { sentence: '___ कोठले आहात?', answer: 'आपण', options: ['आपण', 'मी', 'तू'], translation: 'De onde o(a) senhor(a) é? (formal)' },
        ],
        voice: {
          bot: 'नमस्कार! तुझं नाव काय आहे?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['माझं नाव लीनू आहे. आणि तुझं?', 'माझं नाव', 'आणि तुझं'],
          hint: 'Diga o seu nome com “माझं नाव … आहे” e devolva a pergunta com “आणि तुझं?”.',
        },
        communityPrompt: 'Apresente-se em marata: diga o seu nome com “माझं नाव … आहे” e pergunte o nome de alguém com “तुझं नाव काय आहे?”.',
      },
      {
        id: 'mr-u1-l3',
        title: 'परीक्षा: पहिलं पाऊल',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'नमस्कार, माझं नाव गौरव आहे. तुझं नाव काय आहे?',
          botTranslation: 'Oi, eu me chamo Gaurav. Qual é o seu nome?',
          expected: ['नमस्कार, माझं नाव लूसिया आहे.', 'माझं नाव', 'आहे'],
          hint: 'Devolva o cumprimento (“नमस्कार”) e diga o seu nome com “माझं नाव … आहे”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em marata: cumprimento, nome com “माझं नाव … आहे” e uma despedida (“येतो”/“येते”).',
      },
    ],
  },
  {
    id: 'mr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'कुटुंब आणि घर',
    emoji: '👪',
    card: {
      id: 'mr-c2',
      title: 'Três gêneros vivos: por que “casa” é neutra e “chá” é masculino',
      emoji: '🧭',
      history:
        'O marata é a língua oficial do estado de Maharashtra e também língua oficial adicional em Goa. Tem uma das literaturas mais antigas entre as línguas indo-arianas modernas: no século XIII, o poeta-santo Dnyaneshwar escreveu em marata um comentário sobre o Bhagavad Gita, conhecido como “Dnyaneshwari”; no século XVII, Tukaram compôs mais de três mil “अभंग” (abhang), canções devocionais ainda cantadas hoje em Maharashtra.',
      culture_tip:
        'A família estendida é central na cultura de Maharashtra, e perguntar pela família (“तुला भाऊ किंवा बहीण आहे का?”, “você tem irmão ou irmã?”) é uma forma comum de puxar conversa entre conhecidos.',
      grammar_why:
        'O marata, diferente da maioria das línguas indo-arianas modernas (como o hindi, que só tem masculino e feminino), manteve os três gêneros do sânscrito: masculino, feminino e neutro. “घर” (casa) é neutro, “चहा” (chá) é masculino e “आई” (mãe) é feminino — o gênero não segue o sentido da palavra, e os adjetivos mudam de forma para concordar: “चांगला” (bom) vira “चांगली” com um substantivo feminino e “चांगले” com um neutro.',
      grammar_examples: [
        ['माझे घर लहान आहे.', 'A minha casa é pequena.'],
        ['मला एक भाऊ आहे.', 'Eu tenho um irmão.'],
        ['हे झाड मोठे आहे.', 'Esta árvore é grande.'],
        ['हा कुत्रा काळा आहे.', 'Este cachorro é preto.'],
      ],
      character_guide: [
        ['न', 'como o “n” do português', 'नाव (nāv, “nome”)'],
        ['भ', 'um “b” aspirado, soprado', 'भाऊ (bhāū, “irmão”)'],
        ['प', 'como o “p” do português, sem soprar', 'पाणी (pāṇī, “água”)'],
        ['◌ी', 'sinal de vogal “ī” grudado na consoante anterior', 'बहीण (bahīṇ, “irmã”)'],
      ],
    },
    lessons: [
      {
        id: 'mr-u2-l1',
        title: 'माझं कुटुंब',
        kind: 'licao',
        words: ['भाऊ', 'बहीण', 'आई', 'वडील', 'मुलगा', 'मुलगी'],
        cloze: [
          { sentence: 'मला एक ___ आहे.', answer: 'भाऊ', options: ['भाऊ', 'बहीण', 'आई'], translation: 'Eu tenho um irmão.' },
          { sentence: 'ती माझी ___ आहे.', answer: 'आई', options: ['आई', 'वडील', 'भाऊ'], translation: 'Ela é minha mãe.' },
          { sentence: 'तो ___ पाणी पितो.', answer: 'मुलगा', options: ['मुलगा', 'मुलगी', 'मूल'], translation: 'Aquele menino bebe água.' },
        ],
        voice: {
          bot: 'तुला भाऊ किंवा बहीण आहे का?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['होय, मला एक भाऊ आहे.', 'मला … आहे', 'भाऊ', 'बहीण'],
          hint: 'Responda com “होय, मला … आहे” ou “नाही”.',
        },
        communityPrompt: 'Descreva a sua família em marata: quantos irmãos (भाऊ) e irmãs (बहीण) você tem, e quem são os seus pais (आई, वडील).',
      },
      {
        id: 'mr-u2-l2',
        title: 'घरी',
        kind: 'licao',
        words: ['घर', 'दार', 'कुत्रा', 'मांजर', 'चहा', 'आवडणे'],
        cloze: [
          { sentence: 'हे माझे ___ आहे.', answer: 'घर', options: ['घर', 'दार', 'कुत्रा'], translation: 'Esta é a minha casa.' },
          { sentence: 'मला ___ आवडतो.', answer: 'चहा', options: ['चहा', 'पाणी', 'दूध'], translation: 'Eu gosto de chá.' },
          { sentence: 'हा ___ काळा आहे.', answer: 'कुत्रा', options: ['कुत्रा', 'मांजर', 'गाय'], translation: 'Este cachorro é preto.' },
        ],
        voice: {
          bot: 'तुला कुत्रा आवडतो की मांजर आवडते?',
          botTranslation: 'Você gosta mais de cachorro ou de gato?',
          expected: ['मला कुत्रा आवडतो.', 'मला … आवडतो', 'मला … आवडते'],
          hint: 'Diga do que você gosta com “मला … आवडतो” (para palavras masculinas) ou “मला … आवडते” (femininas e neutras).',
        },
        communityPrompt: 'Escreva o que tem na sua casa e do que você gosta, usando “हे माझे घर आहे” e “मला … आवडतो/आवडते”.',
      },
      {
        id: 'mr-u2-l3',
        title: 'परीक्षा: कुटुंब आणि घर',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'तुला भाऊ किंवा बहीण आहे का? आणि तुझं घर कसं आहे?',
          botTranslation: 'Você tem irmão ou irmã? E como é a sua casa?',
          expected: ['होय, मला एक बहीण आहे. माझं घर लहान आहे.', 'मला … आहे', 'माझं घर'],
          hint: 'Diga se você tem irmãos (“होय, मला … आहे” / “नाही”) e descreva a sua casa (“माझं घर … आहे”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “मला … आहे”, “माझं नाव … आहे” e “माझे/माझी/माझा … आहे”.',
      },
    ],
  },
];
