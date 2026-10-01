import type { UnitSeed } from '../types';

/**
 * Trilha do guarani mbyá: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts e o relatório da tarefa.
 * As frases evitam qualquer morfologia que não tenha sido confirmada nas fontes (não há, nas fontes
 * consultadas, uma partícula de pergunta nem a conjugação completa dos verbos ativos do mbyá): por
 * isso os diálogos giram em torno de saudações, pronomes e frases sem cópula («Kova'e tekoa porã.»,
 * no padrão confirmado para a língua), nunca de perguntas construídas por semelhança com o guarani
 * paraguaio.
 */
export const UNITS_GUN: UnitSeed[] = [
  {
    id: 'gun-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete! Ñepyrũ',
    emoji: '👋',
    card: {
      id: 'gun-c1',
      title: 'Mbya: uma língua viva nas aldeias do Brasil',
      emoji: '🌿',
      history:
        'O guarani mbyá (nhandeayvu, “nossa língua”, ou ayvu, “fala”) é uma língua tupi-guarani viva, falada por cerca de 49 mil pessoas em aldeias (tekoa) do litoral e do sul do Brasil — do Espírito Santo ao Rio Grande do Sul, passando por São Paulo, Paraná e Santa Catarina — além da Argentina (Misiones, Corrientes) e do Paraguai oriental. É cerca de 75% parecida em vocabulário com o guarani paraguaio (avañe\'ẽ, pacote “gn” deste app), já que as duas pertencem ao mesmo subgrupo I da família tupi-guarani — primas próximas, não a mesma língua: o mbyá nunca teve uma academia oficial como a do Paraguai, e foi documentado sobretudo por linguistas como Robert A. Dooley (SIL Brasil), autor do léxico guarani-português de referência sobre o dialeto mbyá. A Unesco classifica o mbyá como língua vulnerável no Atlas Mundial das Línguas em Perigo (2010).',
      culture_tip:
        'Ao chegar numa tekoa, é comum ouvir “Aguyjevete!” dito de mãos erguidas — uma palavra sagrada que funciona como saudação de boas-vindas e, ao mesmo tempo, como agradecimento profundo a Nhanderu. No dia a dia, o agradecimento mais simples é “Ha\'evete”. Entre as tekoa mais conhecidas estão Jaraguá e Tenondé Porã (São Paulo), Piraí e Itaty/Morro dos Cavalos (Santa Catarina) e Tekoa Pindó Mirim, em Itapuã (Viamão, Rio Grande do Sul).',
      grammar_why:
        'O guarani mbyá não tem um verbo “ser” como o português: duas palavras lado a lado já formam uma frase completa. “Xee kunha” já quer dizer “Eu sou mulher” (lit. “eu mulher”), e um exemplo registrado pelos linguistas mostra o mesmo padrão com adjetivo: “kunha ipuku” (lit. “mulher ela-alta”) é como se diz “a mulher é alta”. Os pronomes também marcam uma distinção que o português não tem: “nhande” é o “nós” que inclui quem ouve, e “ore” é o “nós” que não inclui.',
      grammar_examples: [
        ['Aguyjevete, xaryi!', 'Bem-vinda / muito obrigado, avó!'],
        ['Xee kunha.', 'Eu sou mulher.'],
        ['Ndee ava.', 'Você é homem.'],
        ['Ha\'e xamoi.', 'Ele é o ancião.'],
      ],
      character_guide: [
        ['ã, ẽ, ĩ, õ, ũ', 'vogal nasal: sai pelo nariz', 'xee nhandeayvu (minha língua), tekoa'],
        ['\' (puso)', 'uma pausa curta na garganta (oclusiva glotal)', 'ha\'e (ele, ela), tapi\'i (anta)'],
        ['x', 'som parecido com o “ch” do francês ou o “sh” do inglês', 'xee (eu), xamoi (avô), xondaro (guardião)'],
        ['nh', 'som do “nh” de “ninho”', 'nhe\'e (espírito), nhanderu (Deus)'],
        ['y', 'uma vogal só do guarani, entre o “u” e o “i”', 'y (água), yvy (terra)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u1-l1',
        title: 'Aguyjevete, ha\'evete, jurua',
        kind: 'licao',
        words: ['aguyjevete', 'ha\'evete', 'xee', 'ndee', 'ha\'e', 'jurua'],
        cloze: [
          { sentence: '“___, xaryi!” (chegando na tekoa)', answer: 'Aguyjevete', options: ['Aguyjevete', 'Jurua', 'Ndee'], translation: '“Bem-vinda, avó!” (chegando na aldeia)' },
          { sentence: '___ kunha.', answer: 'Ha\'e', options: ['Ha\'e', 'Xee', 'Ndee'], translation: 'Ela é mulher.' },
          { sentence: 'Ha\'e ___.', answer: 'jurua', options: ['jurua', 'xamoi', 'xaryi'], translation: 'Ele é um juruá (não indígena).' },
        ],
        voice: {
          bot: 'Aguyjevete!',
          botTranslation: 'Bem-vindo(a)!',
          expected: ['Aguyjevete! Ha\'evete.', 'aguyjevete', 'ha\'evete'],
          hint: 'Devolva a saudação com “Aguyjevete!” e agradeça com “Ha\'evete”.',
        },
        communityPrompt: 'Escreva uma saudação em guarani mbyá: cumprimente com “Aguyjevete”, diga quem você é com “Xee…” e aponte alguém com “Ha\'e…”.',
      },
      {
        id: 'gun-u1-l2',
        title: 'Nhande, ore, peẽ, ava',
        kind: 'licao',
        words: ['nhande', 'ore', 'peẽ', 'ava', 'kunha', 'mitã'],
        cloze: [
          { sentence: '___ reko.', answer: 'Nhande', options: ['Nhande', 'Ore', 'Peẽ'], translation: 'Nosso jeito de ser (de todos nós, incluindo quem ouve).' },
          { sentence: '___ ava.', answer: 'Peẽ', options: ['Peẽ', 'Ore', 'Nhande'], translation: 'Vocês são homens.' },
          { sentence: 'Ha\'e kuery ___.', answer: 'mitã', options: ['mitã', 'kunha', 'ava'], translation: 'Eles são crianças.' },
        ],
        voice: {
          bot: 'Nhande reko.',
          botTranslation: 'Nosso jeito de ser (de todos nós).',
          expected: ['Ore reko.', 'ore', 'nhande'],
          hint: 'Troque “nhande” (nós incluindo quem ouve) por “ore” (nós sem incluir quem ouve).',
        },
        communityPrompt: 'Escreva frases com “nhande” e “ore”, e descreva pessoas da aldeia com “ava”, “kunha” e “mitã”.',
      },
      {
        id: 'gun-u1-l3',
        title: 'Test: ñepyrũ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Xee xamoi.',
          botTranslation: 'Bem-vindo! Eu sou o ancião.',
          expected: ['Aguyjevete, xamoi! Xee kunha.', 'aguyjevete', 'ha\'evete'],
          hint: 'Devolva a saudação com “Aguyjevete” e diga quem você é com “Xee…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: saudação com “Aguyjevete”, quem você é (“Xee…”) e outra pessoa (“Ha\'e…”).',
      },
    ],
  },
  {
    id: 'gun-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Yvy, kuaray, tata',
    emoji: '🌞',
    card: {
      id: 'gun-c2',
      title: 'Nhe\'e, nhanderu, tekoa: o mundo e o espírito',
      emoji: '✨',
      history:
        'Para o povo mbyá, cada pessoa recebe de Nhanderu (nosso Pai Supremo, Deus Criador) um nhe\'e — espírito ou alma — que só se completa quando a criança recebe seu nome verdadeiro (tery) no ritual do nhemongarai, celebrado na opy\'i (casa de reza) com o petyngua (cachimbo sagrado). O mesmo ritual batiza também o milho e a erva-mate sagrada (ka\'a\'i) antes da colheita. Por trás disso está o nhandereko: o modo de ser mbyá, a relação entre a vida, o território e a espiritualidade — o que o jurua (não indígena) chamaria de “cultura”. A busca histórica por um território sagrado sem sofrimento, a yvy marã e\'ỹ (“terra sem mal”), explica em parte por que os mbyá vivem espalhados em muitas tekoa pequenas, em vez de um território único e contínuo.',
      culture_tip:
        'A contagem mbyá tradicional usa como base o número cinco (os dedos de uma mão) e forma pares dentro de cada grupo de cinco — porque, para os mbyá, várias coisas do mundo vêm aos pares: o sol e a lua, o homem e a mulher, as duas orelhas. Por isso “peteĩ” (um) quer dizer “sem par”, “mokoĩ” (dois) é “um par” e “mboapy” (três) já é o “início de um novo par”.',
      grammar_why:
        'Assim como os pronomes, os substantivos de natureza não precisam de artigo nem de verbo “ser”: “kuaray porã” já é “o sol é bonito” ou “o sol está bom”. Para apontar algo, o mbyá usa o demonstrativo “kova\'e” (este, esta, isto) antes do nome, como no exemplo registrado pelos linguistas “kova\'e oo porã” (esta casa bonita). O adjetivo vem sempre depois do substantivo que descreve, nunca antes.',
      grammar_examples: [
        ['Kova\'e tekoa porã.', 'Esta é uma aldeia bonita. / Esta aldeia é bonita.'],
        ['Yva pytã.', 'O céu é vermelho.'],
        ['Jagua guaxu.', 'O cachorro é grande.'],
        ['Mokoĩ ava.', 'Dois homens.'],
      ],
      character_guide: [
        ['nh', 'som do “nh” de “ninho”, em quase toda palavra sagrada', 'nhe\'e, nhanderu, nhemongarai, nhandereko'],
        ['\' (puso)', 'pausa curta na garganta', 'opy\'i (casa de reza), ka\'i (macaco)'],
        ['x', 'som parecido com “ch”/“sh”', 'tapi\'i tem puso, e xondaro e xamoi usam o x'],
        ['y', 'vogal própria do guarani', 'y (água), yvy (terra), yva (céu)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u2-l1',
        title: 'Tekoa, kuaray, jaxy, y',
        kind: 'licao',
        words: ['tekoa', 'kuaray', 'jaxy', 'ára', 'y', 'yvy'],
        cloze: [
          { sentence: 'Kova\'e ___.', answer: 'kuaray', options: ['kuaray', 'jaxy', 'ára'], translation: 'Isto é o sol.' },
          { sentence: 'Kova\'e ___.', answer: 'y', options: ['y', 'yvy', 'jaxy'], translation: 'Isto é a água.' },
          { sentence: 'Kova\'e ___.', answer: 'tekoa', options: ['tekoa', 'yvy', 'yva'], translation: 'Isto é a aldeia.' },
        ],
        voice: {
          bot: 'Kova\'e tekoa.',
          botTranslation: 'Esta é a aldeia.',
          expected: ['Kova\'e yvy.', 'yvy', 'tekoa'],
          hint: 'Aponte para outra coisa com “Kova\'e…”, como a terra (“yvy”).',
        },
        communityPrompt: 'Aponte coisas da natureza com “Kova\'e…”: o sol (kuaray), a lua (jaxy), a água (y) e a terra (yvy).',
      },
      {
        id: 'gun-u2-l2',
        title: 'Tata, pytũ, jagua, porã',
        kind: 'licao',
        words: ['tata', 'pytũ', 'jagua', 'guyra', 'mboi', 'porã'],
        cloze: [
          { sentence: 'Kova\'e ___.', answer: 'tata', options: ['tata', 'pytũ', 'jagua'], translation: 'Isto é o fogo.' },
          { sentence: 'Kova\'e jagua ___.', answer: 'porã', options: ['porã', 'vaikue', 'guaxu'], translation: 'Este cachorro é bonito.' },
          { sentence: 'Kova\'e ___.', answer: 'guyra', options: ['guyra', 'mboi', 'jagua'], translation: 'Isto é o pássaro.' },
        ],
        voice: {
          bot: 'Kova\'e pytũ.',
          botTranslation: 'Isto é a noite (a escuridão).',
          expected: ['Kova\'e tata.', 'tata', 'pytũ'],
          hint: 'Fale de outra coisa com “Kova\'e…”, como o fogo (“tata”) que ilumina a noite.',
        },
        communityPrompt: 'Descreva os animais da aldeia com “Kova\'e…”: o cachorro (jagua), o pássaro (guyra), a cobra (mboi) — diga se são “porã” (bonitos).',
      },
      {
        id: 'gun-u2-l3',
        title: 'Test: yvy ha\'e tekoa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Kova\'e tekoa, kova\'e kuaray, kova\'e y.',
          botTranslation: 'Bem-vindo! Esta é a aldeia, este é o sol, esta é a água.',
          expected: ['Aguyjevete! Kova\'e tata, kova\'e jagua.', 'kova\'e', 'aguyjevete'],
          hint: 'Responda à saudação e aponte mais coisas da aldeia e da natureza com “Kova\'e…”.',
        },
        communityPrompt: 'Escreva seis frases com “Kova\'e…” sobre a natureza e os animais da tekoa, usando pelo menos quatro palavras desta unidade.',
      },
    ],
  },
];
