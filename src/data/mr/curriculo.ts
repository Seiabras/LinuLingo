import type { UnitSeed } from '../types';

/**
 * Trilha do marata: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1 em diante). Fontes: Wikipedia “Marathi language” (história, número de
 * falantes, literatura) e “Marathi grammar” (posposição dativa, futuro de “असणे”); Omniglot
 * “Marathi phrases” e “Marathi numbers”; Wiktionary (verbetes individuais citados em cada palavra,
 * incluindo पेक्षा, गरज e पैसा com as próprias frases de exemplo).
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
  {
    id: 'mr-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'मला भूक आहे',
    emoji: '➡️',
    card: {
      id: 'mr-c3',
      title: '“-ला”: quem sente, não é sempre quem “é”',
      emoji: '➡️',
      history:
        'Em 1893, o líder nacionalista Lokmanya Tilak usou o jornal que dirigia, o Kesari, para defender e organizar o Ganesh Utsav (um festival já comemorado em casa havia séculos) como uma grande festa pública em Maharashtra. Segundo a Wikipédia, a escolha de Ganesha — um deus reverenciado por brâmanes e não brâmanes — ajudou a construir uma união popular contra o domínio colonial britânico. O Ganesh Chaturthi segue sendo a maior festa pública de Maharashtra até hoje.',
      culture_tip:
        'Para dizer que sente fome, sede ou medo, o marata não usa um sujeito como “eu”: usa a posposição dativa “-ला” (मला, a mim) com o sentimento como sujeito gramatical — “मला भूक आहे” é, ao pé da letra, “a mim fome é”.',
      grammar_why:
        'A posposição “-ला” marca o objeto indireto (मुलाला, ao menino) e também quem sente uma sensação (मला भूक आहे, estou com fome) ou precisa de algo (मला … ची गरज आहे). Para comparar duas coisas, usa-se “पेक्षा” (do que) depois do segundo termo: “गौरव माया पेक्षा उंच आहे” (Gaurav é mais alto do que a Maya).',
      grammar_examples: [
        ['मला भूक आहे.', 'Estou com fome.'],
        ['मला तहान आहे.', 'Estou com sede.'],
        ['मी आनंदी आहे.', 'Estou feliz.'],
        ['गौरव माया पेक्षा उंच आहे.', 'Gaurav é mais alto do que a Maya.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mr-u3-l1',
        title: 'सामान्य भावना',
        kind: 'licao',
        words: ['भूक', 'तहान', 'भीती', 'आनंदी', 'दुःखी', 'थकणे'],
        cloze: [
          { sentence: 'मला ___ आहे.', answer: 'भूक', options: ['भूक', 'तहान', 'भीती'], translation: 'Estou com fome.' },
          { sentence: 'मला ___ आहे.', answer: 'तहान', options: ['तहान', 'भूक', 'आनंदी'], translation: 'Estou com sede.' },
          { sentence: 'मी ___ आहे.', answer: 'आनंदी', options: ['आनंदी', 'दुःखी', 'भूक'], translation: 'Estou feliz.' },
        ],
        voice: {
          bot: 'तुला भूक आहे का?',
          botTranslation: 'Você está com fome?',
          expected: ['होय, मला भूक आहे.', 'मला भूक आहे'],
          hint: 'Responda com “होय, मला भूक आहे.”',
        },
        communityPrompt: 'Escreva três frases sobre como você está, usando “मी … आहे” (आनंदी/दुःखी) ou “मला … आहे” (भूक/तहान/भीती).',
      },
      {
        id: 'mr-u3-l2',
        title: 'शहर मोठे आहे',
        kind: 'licao',
        words: ['शहर', 'रस्ता', 'दुकान', 'शाळा', 'उंच', 'पेक्षा'],
        cloze: [
          { sentence: 'हे ___ मोठे आहे.', answer: 'शहर', options: ['शहर', 'दुकान', 'घर'], translation: 'Esta cidade é grande.' },
          { sentence: 'हा ___ मोठा आहे.', answer: 'रस्ता', options: ['रस्ता', 'दुकान', 'शाळा'], translation: 'Esta rua é grande.' },
          { sentence: 'गौरव माया ___ उंच आहे.', answer: 'पेक्षा', options: ['पेक्षा', 'आणि', 'किंवा'], translation: 'Gaurav é mais alto do que a Maya.' },
        ],
        voice: {
          bot: 'तुझं शहर मोठे आहे का?',
          botTranslation: 'Sua cidade é grande?',
          expected: ['होय, माझं शहर मोठे आहे.', 'मोठे आहे'],
          hint: 'Responda com “होय, माझं शहर मोठे आहे.”',
        },
        communityPrompt: 'Compare duas coisas usando “पेक्षा”, como em “गौरव माया पेक्षा उंच आहे.”, com dois nomes ou duas coisas da sua escolha.',
      },
      {
        id: 'mr-u3-l3',
        title: 'परीक्षा: मला भूक आहे',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'तुला भूक आहे का? आणि तुझं शहर मोठे आहे का?',
          botTranslation: 'Você está com fome? E sua cidade é grande?',
          expected: ['होय, मला भूक आहे. आणि माझं शहर मोठे आहे.', 'मला भूक आहे', 'मोठे आहे'],
          hint: 'Diga se está com fome (“मला भूक आहे”) e descreva a sua cidade (“माझं शहर … आहे”).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando como você está (भूक/तहान/आनंदी) e descrevendo a sua cidade ou rua, usando “पेक्षा” para comparar com outro lugar.',
      },
    ],
  },
  {
    id: 'mr-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'उद्या थंड असेल',
    emoji: '🔮',
    card: {
      id: 'mr-c4',
      title: 'Uma necessidade sempre feminina, e o futuro de “असणे”',
      emoji: '🔮',
      history:
        'Pune, a segunda maior cidade de Maharashtra, é conhecida por um apelido: “a Oxford do Oriente”, por causa do grande número de universidades e faculdades da cidade — entre elas a Universidade de Pune (hoje Universidade Savitribai Phule Pune), uma das mais antigas e maiores da Índia, com centenas de faculdades vinculadas a ela.',
      culture_tip:
        'Para dizer que precisa de algo, o marata usa “गरज” (necessidade, sempre feminina) com a partícula genitiva “-ची” antes dela — por isso é sempre “-ची”, nunca “-चा” ou “-चे”, não importa o que seja necessário: “मला पैशाची गरज आहे” (eu preciso de dinheiro).',
      grammar_why:
        'O futuro de “असणे” (ser/estar/haver) tem uma raiz própria, diferente do presente “आहे”: असेन (eu), असशील (tu), असेल (ele/ela), असू (nós), असाल (vocês), असतील (eles).',
      grammar_examples: [
        ['मला पैशाची गरज आहे.', 'Eu preciso de dinheiro.'],
        ['उद्या थंड असेल.', 'Vai estar frio amanhã.'],
        ['मी उद्या मुंबैत असेन.', 'Eu vou estar em Mumbai amanhã.'],
        ['तो वैद्य आहे.', 'Ele é médico.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mr-u4-l1',
        title: 'माझा व्यवसाय',
        kind: 'licao',
        words: ['वैद्य', 'शिक्षक', 'शेतकरी', 'व्यापारी', 'कपडा', 'गरज'],
        cloze: [
          { sentence: 'तो ___ आहे.', answer: 'वैद्य', options: ['वैद्य', 'शिक्षक', 'शेतकरी'], translation: 'Ele é médico.' },
          { sentence: 'ती ___ आहे.', answer: 'शिक्षिका', options: ['शिक्षिका', 'शेतकरी', 'व्यापारी'], translation: 'Ela é professora.' },
          { sentence: 'मला पैशाची ___ आहे.', answer: 'गरज', options: ['गरज', 'भूक', 'तहान'], translation: 'Eu preciso de dinheiro.' },
        ],
        voice: {
          bot: 'तुझा वडील वैद्य आहे का?',
          botTranslation: 'Seu pai é médico?',
          expected: ['होय, माझा वडील वैद्य आहे.', 'वैद्य आहे'],
          hint: 'Responda com “होय, माझा वडील वैद्य आहे.” ou “नाही”.',
        },
        communityPrompt: 'Escreva sobre a profissão de alguém da sua família, usando “वैद्य”, “शिक्षक”, “शेतकरी” ou “व्यापारी”, e uma frase com “गरज” sobre algo que você precisa.',
      },
      {
        id: 'mr-u4-l2',
        title: 'उद्याचा पाऊस',
        kind: 'licao',
        words: ['पाऊस', 'वारा', 'ढग', 'गरम', 'थंड', 'उद्या'],
        cloze: [
          { sentence: 'उद्या ___ असेल.', answer: 'पाऊस', options: ['पाऊस', 'वारा', 'ढग'], translation: 'Amanhã vai chover.' },
          { sentence: 'उद्या ___ असेल.', answer: 'गरम', options: ['गरम', 'थंड', 'ढग'], translation: 'Amanhã vai estar quente.' },
          { sentence: 'उद्या ___ असेल.', answer: 'थंड', options: ['थंड', 'गरम', 'वारा'], translation: 'Amanhã vai estar frio.' },
        ],
        voice: {
          bot: 'उद्या थंड असेल का?',
          botTranslation: 'Vai estar frio amanhã?',
          expected: ['होय, उद्या थंड असेल.', 'थंड असेल'],
          hint: 'Responda com “होय, उद्या थंड असेल.” ou “नाही, उद्या गरम असेल.”',
        },
        communityPrompt: 'Escreva sobre o tempo de amanhã usando “उद्या … असेल” com “पाऊस”, “वारा”, “ढग”, “गरम” ou “थंड”.',
      },
      {
        id: 'mr-u4-l3',
        title: 'परीक्षा: उद्या थंड असेल',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'तू वैद्य आहेस का? आणि उद्या थंड असेल का?',
          botTranslation: 'Você é médico? E vai estar frio amanhã?',
          expected: ['नाही, मी शिक्षक आहे. आणि होय, उद्या थंड असेल.', 'मी … आहे', 'थंड असेल'],
          hint: 'Diga a sua profissão com “मी … आहे” e o tempo de amanhã com “उद्या … असेल”.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando a profissão de alguém que você conhece e como vai estar o tempo amanhã, usando “गरज” para algo que essa pessoa precisa para o trabalho.',
      },
    ],
  },
];
