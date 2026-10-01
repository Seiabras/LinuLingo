import type { UnitSeed } from '../types';

/**
 * Trilha do chinês mandarim: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_ZH: UnitSeed[] = [
  {
    id: 'zh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: '你好！第一步',
    emoji: '👋',
    card: {
      id: 'zh-c1',
      title: 'O mandarim e os quatro tons',
      emoji: '🀄',
      history:
        'O mandarim é a língua com mais falantes nativos do mundo (as estimativas passam de 900 milhões). A norma ensinada aqui é o 普通话 (pǔtōnghuà, “a fala comum”), definida na década de 1950 com a pronúncia de Pequim e a gramática dos dialetos do norte. É a língua oficial da China continental, e a mesma norma, com pequenas diferenças, é oficial em Taiwan (onde se chama 国语, guóyǔ) e em Singapura. Os caracteres simplificados, usados aqui, foram adotados na China continental a partir de 1956; Taiwan, Hong Kong e Macau continuam com os tradicionais. O pinyin, a escrita dos sons em letras latinas, é oficial desde 1958.',
      culture_tip:
        '“你好” (nǐ hǎo) serve para quase tudo; para professores, pessoas mais velhas e clientes, use “您好” (nín hǎo), mais respeitoso. O nome de família vem primeiro: em “王明”, 王 (Wáng) é o sobrenome. Professores são chamados pelo sobrenome + 老师: “王老师” (professor Wang).',
      grammar_why:
        'O verbo chinês não muda com a pessoa nem com o tempo: 我是, 你是, 他是 (eu sou, você é, ele é) usam sempre o mesmo 是. Para perguntar “sim ou não”, basta pôr 吗 (ma) no fim da frase: 你是学生 (você é estudante) → 你是学生吗？ (você é estudante?).',
      grammar_examples: [
        ['你好！我叫安娜。', 'Oi! Eu me chamo Ana. (nǐ hǎo! wǒ jiào Ānnà)'],
        ['你叫什么名字？', 'Como você se chama? (nǐ jiào shénme míngzi?)'],
        ['我是巴西人。', 'Sou brasileiro. (wǒ shì Bāxīrén)'],
        ['你是老师吗？', 'Você é professor? (nǐ shì lǎoshī ma?)'],
      ],
      character_guide: [
        ['ā (1º tom)', 'alto e reto, como uma nota cantada', '妈 mā (mãe)'],
        ['á (2º tom)', 'sobe, como no nosso “hein?”', '麻 má (cânhamo)'],
        ['ǎ (3º tom)', 'desce e volta a subir (na fala, muitas vezes só desce baixo)', '马 mǎ (cavalo)'],
        ['à (4º tom)', 'cai seco, como uma ordem: “Já!”', '骂 mà (xingar)'],
        ['a (tom neutro)', 'curto e leve, sem marca', '吗 ma (partícula de pergunta)'],
        ['x, q, j', 'x ≈ “ch” de “chá” com um sorriso; q ≈ “tch” com sopro; j ≈ “dj”', '谢谢 xièxie, 七 qī, 九 jiǔ'],
      ],
    },
    lessons: [
      {
        id: 'zh-u1-l1',
        title: '你好，谢谢，再见！',
        kind: 'licao',
        words: ['你好', '早上好', '晚上好', '再见', '谢谢', '对不起'],
        cloze: [
          { sentence: '___！你好吗？', answer: '你好', options: ['你好', '再见', '谢谢'], translation: 'Oi! Como vai? (nǐ hǎo! nǐ hǎo ma?)' },
          { sentence: '现在是晚上：___！', answer: '晚上好', options: ['晚上好', '早上好', '谢谢'], translation: 'Agora é noite: boa noite! (wǎnshang hǎo)' },
          { sentence: '___你！', answer: '谢谢', options: ['谢谢', '再见', '早上好'], translation: 'Obrigado! (xièxie nǐ)' },
        ],
        voice: {
          bot: '你好！你好吗？',
          botTranslation: 'Oi! Como vai? (nǐ hǎo! nǐ hǎo ma?)',
          expected: ['我很好，谢谢！你呢？', '我很好', '谢谢', '你呢'],
          hint: 'Responda que vai bem e devolva a pergunta: “我很好，谢谢！你呢？” (wǒ hěn hǎo, xièxie! nǐ ne?).',
        },
        communityPrompt: 'Escreva três cumprimentos em chinês: um de manhã (早上好), um à noite (晚上好) e uma despedida (再见).',
      },
      {
        id: 'zh-u1-l2',
        title: '我、你、他、她',
        kind: 'licao',
        words: ['我', '你', '他', '她', '叫', '名字'],
        cloze: [
          { sentence: '___叫安娜。', answer: '我', options: ['我', '你', '他'], translation: 'Eu me chamo Ana. (wǒ jiào Ānnà)' },
          { sentence: '你___什么名字？', answer: '叫', options: ['叫', '是', '有'], translation: 'Como você se chama? (nǐ jiào shénme míngzi?)' },
          { sentence: '___是我的朋友，他叫王明。', answer: '他', options: ['他', '我', '你'], translation: 'Ele é meu amigo, ele se chama Wang Ming. (tā shì wǒ de péngyou)' },
        ],
        voice: {
          bot: '你好！你叫什么名字？',
          botTranslation: 'Oi! Como você se chama? (nǐ hǎo! nǐ jiào shénme míngzi?)',
          expected: ['我叫安娜。你呢？', '我叫', '你呢'],
          hint: 'Diga o seu nome com “我叫…” (wǒ jiào…) e devolva a pergunta com “你呢？” (nǐ ne?).',
        },
        communityPrompt: 'Apresente-se em chinês: diga o seu nome com “我叫…” e pergunte o nome de alguém com “你叫什么名字？”.',
      },
      {
        id: 'zh-u1-l3',
        title: '考试：第一步',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '你好！我叫李华。你叫什么名字？你是哪里人？',
          botTranslation: 'Oi! Eu me chamo Li Hua. Como você se chama? De onde você é? (nǐ shì nǎlǐ rén?)',
          expected: ['你好！我叫卢卡斯，我是圣保罗人。', '我叫', '我是'],
          hint: 'Cumprimente (你好), diga o nome com “我叫…” e a cidade com “我是…人”: “我是圣保罗人” (wǒ shì Shèng Bǎoluó rén, sou de São Paulo).',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “我叫…”, cidade com “我是…人” e uma despedida.',
      },
    ],
  },
  {
    id: 'zh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: '我的家',
    emoji: '👪',
    card: {
      id: 'zh-c2',
      title: 'Família, classificadores e o 的',
      emoji: '🧭',
      history:
        'A escrita chinesa é uma das mais antigas em uso: as primeiras inscrições conhecidas, em ossos e cascos de tartaruga usados em adivinhação, são da dinastia Shang, por volta de 1200 a.C. Cada caractere corresponde a uma sílaba com significado. A maioria combina uma parte que dá a pista do sentido (o radical) com outra que dá a pista do som: 妈 (mā, mãe) junta 女 (mulher) com 马 (mǎ, cavalo), escolhido só pelo som.',
      culture_tip:
        'O chinês não tem uma palavra só para “irmão” ou “irmã”: diz se é mais velho ou mais novo. 哥哥 (gēge) é o irmão mais velho, 弟弟 (dìdi) o mais novo; 姐姐 (jiějie) a irmã mais velha, 妹妹 (mèimei) a mais nova. A idade na família conta, e quem é mais novo costuma chamar os mais velhos pelo parentesco, não pelo nome.',
      grammar_why:
        'Entre o número e o substantivo vai um classificador: 一个哥哥 (yí ge gēge, um irmão mais velho), 一只猫 (yì zhī māo, um gato). O 个 serve para pessoas e muitas coisas; 只, para animais. A posse se faz com 的: 我的猫 (o meu gato); com família e pessoas próximas, o 的 costuma cair: 我妈妈 (a minha mãe).',
      grammar_examples: [
        ['我有一个哥哥。', 'Tenho um irmão mais velho. (wǒ yǒu yí ge gēge)'],
        ['我家有一只狗。', 'Na minha casa tem um cachorro. (wǒ jiā yǒu yì zhī gǒu)'],
        ['这是我的猫。', 'Este é o meu gato. (zhè shì wǒ de māo)'],
        ['我没有妹妹。', 'Não tenho irmã mais nova. (wǒ méiyǒu mèimei)'],
      ],
      character_guide: [
        ['女', 'radical “mulher”: aparece em palavras de família e em 好', '妈 (mãe), 姐 (irmã mais velha), 妹 (irmã mais nova), 好 (bom)'],
        ['口', 'radical “boca”: comer, beber, chamar e as partículas faladas', '吃 (comer), 喝 (beber), 叫 (chamar-se), 吗, 呢'],
        ['亻', 'radical “pessoa” (forma estreita de 人)', '你 (você), 他 (ele), 们 (plural de pessoas), 住 (morar)'],
        ['3º + 3º tom', 'quando dois 3º tons se seguem, o primeiro vira 2º', '你好: escreve-se nǐ hǎo, diz-se ní hǎo'],
        ['不 bù → bú', 'antes de um 4º tom, 不 vira 2º tom', '不是 (bú shì, não é), 不客气 (bú kèqi)'],
      ],
    },
    lessons: [
      {
        id: 'zh-u2-l1',
        title: '我的家人',
        kind: 'licao',
        words: ['妈妈', '爸爸', '哥哥', '姐姐', '有', '家人'],
        cloze: [
          { sentence: '我___叫玛丽亚。', answer: '妈妈', options: ['妈妈', '爸爸', '哥哥'], translation: 'A minha mãe se chama Maria. (wǒ māma jiào Mǎlìyà)' },
          { sentence: '我___一个哥哥。', answer: '有', options: ['有', '是', '叫'], translation: 'Eu tenho um irmão mais velho. (wǒ yǒu yí ge gēge)' },
          { sentence: '我___是老师，他叫王明。', answer: '爸爸', options: ['爸爸', '姐姐', '妈妈'], translation: 'O meu pai é professor, ele se chama Wang Ming. (wǒ bàba shì lǎoshī)' },
        ],
        voice: {
          bot: '你有哥哥吗？',
          botTranslation: 'Você tem irmão mais velho? (nǐ yǒu gēge ma?)',
          expected: ['有，我有一个哥哥。', '我有', '哥哥', '没有'],
          hint: 'Responda com “有，我有一个哥哥” (sim, tenho um irmão mais velho) ou “没有” (méiyǒu, não tenho).',
        },
        communityPrompt: 'Descreva a sua família em chinês: quem você tem (我有…) e como se chamam os seus pais (我妈妈叫…, 我爸爸叫…).',
      },
      {
        id: 'zh-u2-l2',
        title: '在家吃饭',
        kind: 'licao',
        words: ['家', '水', '米饭', '面包', '茶', '喝'],
        cloze: [
          { sentence: '我___很小。', answer: '家', options: ['家', '水', '茶'], translation: 'A minha casa é pequena. (wǒ jiā hěn xiǎo)' },
          { sentence: '我喝___。', answer: '水', options: ['水', '米饭', '面包'], translation: 'Eu bebo água. (wǒ hē shuǐ)' },
          { sentence: '我吃___。', answer: '米饭', options: ['米饭', '水', '茶'], translation: 'Eu como arroz. (wǒ chī mǐfàn)' },
        ],
        voice: {
          bot: '你喝什么？',
          botTranslation: 'O que você bebe? (nǐ hē shénme?)',
          expected: ['我喝茶。', '我喝', '茶', '水', '咖啡'],
          hint: 'Diga o que bebe com “我喝…” (wǒ hē…): 茶 (chá), 水 (água), 咖啡 (café).',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “我吃…” e “我喝…”.',
      },
      {
        id: 'zh-u2-l3',
        title: '考试：我的家',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '你家有几个人？',
          botTranslation: 'Quantas pessoas há na sua família? (nǐ jiā yǒu jǐ ge rén?)',
          expected: ['我家有四个人：爸爸、妈妈、姐姐和我。', '我家有', '个人'],
          hint: 'Responda com “我家有…个人” (na minha família há … pessoas) e diga quem são, ligando o último com 和 (e).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “我有”, “叫” e “很”.',
      },
    ],
  },
];
