import type { UnitSeed } from '../types';

/**
 * Trilha do cantonês: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: artigos “Cantonese”, “Cantonese grammar” e “Hong Kong Cantonese”
 * da Wikipédia em inglês; Wikcionário em inglês (palavra por palavra); Omniglot (“Cantonese phrases”).
 */
export const UNITS_YUE: UnitSeed[] = [
  {
    id: 'yue-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: '你好！第一次見面',
    emoji: '👋',
    card: {
      id: 'yue-c1',
      title: 'Uma língua, não um dialeto do mandarim',
      emoji: '🇭🇰',
      history:
        'O cantonês nasceu em Guangzhou (Cantão), no delta do Rio das Pérolas, no sul da China, e é hoje a língua do dia a dia de Hong Kong, Macau e da província de Guangdong — cerca de 80 milhões de falantes em 2023. É uma língua sinítica, da família sino-tibetana, do ramo yue, e NÃO é um dialeto do mandarim: as duas têm pouquíssima inteligibilidade mútua, com diferenças grandes de fonologia, gramática e vocabulário (a ordem das palavras na frase muda, por exemplo). Em Hong Kong e Macau, o cantonês é a língua de fato do governo, dos tribunais e do ensino, e, desde a transferência de Hong Kong à China em 1997, tornou-se também um símbolo de identidade local, em contraste com a promoção do mandarim no resto da China.',
      culture_tip:
        'O cantonês distingue dois “obrigados”: 唔該 (m⁴ goi¹) é para favores e serviços — quando alguém te atende numa loja ou te passa o sal —, e 多謝 (do¹ ze⁶) é para presentes e elogios. Confundir os dois não é grave, mas um ouvido cantonês nota a diferença.',
      grammar_why:
        'O cantonês não conjuga verbo por pessoa nem por tempo: “我食” pode ser “eu comi”, “eu como” ou “eu vou comer”, dependendo do contexto — quem marca se a ação já aconteceu, está em curso ou foi repetida são partículas depois do verbo (咗 zo², 緊 gan², 過 gwo³), não terminações. E os pronomes não marcam gênero: 佢 (keoi⁵) serve tanto para “ele” quanto para “ela”.',
      grammar_examples: [
        ['你好！我係Linu。', 'Oi! Eu sou o Linu.'],
        ['你好嗎？', 'Como vai?'],
        ['佢係我朋友。', 'Ele/ela é meu amigo/amiga.'],
        ['多謝！', 'Obrigado! (por um presente ou elogio)'],
      ],
      character_guide: [
        ['tons 1–6', 'o jyutping marca 6 tons com um número depois da sílaba — dois mais que os 4 do mandarim', 'nei⁵ hou² (你好): tom 5 e tom 2'],
        ['z, c, j', 'não existem exatamente em português: z é um “ts” leve, c é “ts” aspirado, j é um “dz”', 'zoi³ (再, de novo), caa⁴ (茶, chá), jat¹ (一, um)'],
        ['eo, oe', 'vogais sem equivalente direto — eo é um “ö” curto, oe um “ö” mais aberto', 'heoi³ (去, ir), soeng² (想, querer)'],
        ['ng', 'pode ser sílaba sozinha, sem vogal nenhuma', 'ng⁵ (五, cinco)'],
      ],
    },
    lessons: [
      {
        id: 'yue-u1-l1',
        title: '你好，唔該，再見',
        kind: 'licao',
        words: ['你好', '早晨', '早抖', '再見', '唔該', '多謝'],
        cloze: [
          { sentence: '___！我係Linu。', answer: '你好', options: ['你好', '再見', '早抖'], translation: 'Oi! Eu sou o Linu.' },
          { sentence: '茶，___。', answer: '唔該', options: ['唔該', '多謝', '早晨'], translation: 'Chá, por favor.' },
          { sentence: '早抖，___！', answer: '再見', options: ['再見', '你好', '早晨'], translation: 'Boa noite, tchau!' },
        ],
        voice: {
          bot: '你好！你好嗎？',
          botTranslation: 'Oi! Como vai?',
          expected: ['你好！我好好，唔該。', '你好', '唔該'],
          hint: 'Devolva o “你好” e agradeça com “唔該” ou “多謝”.',
        },
        communityPrompt: 'Escreva três expressões em cantonês: um cumprimento (你好 ou 早晨), um agradecimento (唔該 ou 多謝) e uma despedida (再見).',
      },
      {
        id: 'yue-u1-l2',
        title: '我、你、佢',
        kind: 'licao',
        words: ['我', '你', '佢', '我哋', '你哋', '佢哋'],
        cloze: [
          { sentence: '___係Linu。', answer: '我', options: ['我', '你', '佢'], translation: 'Eu sou o Linu.' },
          { sentence: '___係我朋友。', answer: '佢', options: ['佢', '我', '你哋'], translation: 'Ele/ela é meu amigo/amiga.' },
          { sentence: '___好嗎？', answer: '你哋', options: ['你哋', '我哋', '佢'], translation: 'Vocês estão bem?' },
        ],
        voice: {
          bot: '你叫咩名呀？',
          botTranslation: 'Qual é o seu nome?',
          expected: ['我係Linu。', '我係', '係'],
          hint: 'Responda com “我係…” e o seu nome.',
        },
        communityPrompt: 'Apresente-se em cantonês com “我係…” e apresente um amigo com “佢係我朋友”.',
      },
      {
        id: 'yue-u1-l3',
        title: 'Test: 你好，我、你、佢',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '你好！你叫咩名呀？你係邊度人呀？',
          botTranslation: 'Oi! Qual é o seu nome? De onde você é?',
          expected: ['你好！我係Linu。我係巴西人。', '我係', '你好'],
          hint: 'Devolva o “你好”, diga o seu nome com “我係…” e de onde você é.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (你好), nome (我係…) e uma despedida (再見).',
      },
    ],
  },
  {
    id: 'yue-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: '我嘅屋企同朋友',
    emoji: '👪',
    card: {
      id: 'yue-c2',
      title: 'Caracteres tradicionais e palavras que só existem em cantonês',
      emoji: '✍️',
      history:
        'O cantonês escrito usa os caracteres tradicionais (繁體字), os mesmos de antes da reforma de simplificação da China continental. Mas tem mais: para escrever exatamente como se fala, o cantonês criou ou reaproveitou caracteres que o mandarim não usa — 佢 (ele/ela), 嘅 (de, posse), 唔 (não), 冇 (não ter) e 哋 (sufixo de plural, como em 我哋, “nós”) aparecem em jornais, legendas e redes sociais de Hong Kong, mas seriam estranhos num texto em mandarim.',
      culture_tip:
        'Antes de quase todo substantivo contável, o cantonês usa um classificador — 個 (go³) é o mais comum, para pessoas e coisas em geral. “Esta cidade” não é só “呢城市”, e sim “呢個城市” (ni¹ go³ sing4si⁵): o classificador liga o “este” ao substantivo.',
      grammar_why:
        'A posse se marca com a partícula 嘅 (ge³), parecida com o “de” do português, mas depois da palavra que possui: “我嘅貓” é, palavra por palavra, “eu de gato” — “o meu gato”. E a negação mais comum é 唔 (m⁴) antes do verbo — mas para negar “ter” (有, jau⁵), o cantonês troca o verbo inteiro por 冇 (mou⁵), não usa “唔有”.',
      grammar_examples: [
        ['我嘅貓係黑色。', 'O meu gato é preto.'],
        ['呢個城市好大。', 'Esta cidade é bem grande.'],
        ['我有狗。我冇貓。', 'Eu tenho cachorro. Eu não tenho gato.'],
        ['我唔係。', 'Eu não sou.'],
      ],
      character_guide: [
        ['佢 / 嘅 / 冇 / 哋', 'caracteres que o cantonês usa e o mandarim não usa para o dia a dia', '佢 (ele/ela), 嘅 (de), 冇 (não ter), 我哋 (nós)'],
        ['繁體字', 'caracteres tradicionais, não os simplificados da China continental', '鍾意 (gostar), não 钟意'],
      ],
    },
    lessons: [
      {
        id: 'yue-u2-l1',
        title: '爸爸、媽媽',
        kind: 'licao',
        words: ['爸爸', '媽媽', '哥哥', '妹妹', '有', '鍾意'],
        cloze: [
          { sentence: '我___一個妹妹。', answer: '有', options: ['有', '冇', '鍾意'], translation: 'Eu tenho uma irmã mais nova.' },
          { sentence: '我___茶。', answer: '鍾意', options: ['鍾意', '有', '媽媽'], translation: 'Eu gosto de chá.' },
          { sentence: '我___好。', answer: '爸爸', options: ['爸爸', '妹妹', '哥哥'], translation: 'Meu pai está bem.' },
        ],
        voice: {
          bot: '你有冇哥哥呀？',
          botTranslation: 'Você tem irmão mais velho?',
          expected: ['有，我有一個哥哥。', '有', '哥哥'],
          hint: 'Responda com “有” (tenho) ou “冇” (não tenho) e o parentesco.',
        },
        communityPrompt: 'Descreva a sua família em cantonês: 爸爸, 媽媽 e quantos irmãos (哥哥/弟弟/家姐/妹妹) você tem.',
      },
      {
        id: 'yue-u2-l2',
        title: '我嘅屋企',
        kind: 'licao',
        words: ['屋企', '朋友', '嘅', '個', '係', '好'],
        cloze: [
          { sentence: '我___屋企好細。', answer: '嘅', options: ['嘅', '個', '哋'], translation: 'A minha casa é pequena.' },
          { sentence: '呢___城市好大。', answer: '個', options: ['個', '嘅', '係'], translation: 'Esta cidade é bem grande.' },
          { sentence: '佢___我朋友。', answer: '係', options: ['係', '有', '好'], translation: 'Ele/ela é meu amigo/amiga.' },
        ],
        voice: {
          bot: '你屋企好唔好呀？',
          botTranslation: 'A sua casa é boa?',
          expected: ['我嘅屋企好好。', '我嘅屋企', '好'],
          hint: 'Descreva a sua casa com “我嘅屋企…”.',
        },
        communityPrompt: 'Descreva a sua casa (屋企) e um amigo (朋友), usando “嘅” para dizer “meu/minha”.',
      },
      {
        id: 'yue-u2-l3',
        title: 'Test: 屋企同朋友',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '講你嘅屋企同你嘅朋友。',
          botTranslation: 'Fale um pouco da sua casa e do seu amigo.',
          expected: ['我嘅屋企好細，我有一個朋友。', '我嘅屋企', '我有'],
          hint: 'Use “我嘅屋企…” para a casa e “我有一個朋友” para o amigo.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa e a sua família, usando “嘅”, “有” e “係”.',
      },
    ],
  },
];
