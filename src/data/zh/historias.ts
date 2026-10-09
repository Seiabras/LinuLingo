import type { StorySeed } from '../types';

/** Histórias interativas do chinês mandarim — uma por nível, de A1.1 a A2.2 (pacote incompleto). */
export const STORIES_ZH: StorySeed[] = [
  {
    id: 'zh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: '你好，王明！',
    emoji: '👋',
    summary: 'Você conhece Wang Ming (王明) na escola e faz a sua primeira conversa em chinês.',
    cultural_context: 'Na China, o sobrenome vem antes do nome próprio: em 王明 (Wáng Míng), 王 é o sobrenome e 明 é o nome.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！我叫王明。你好吗？',
        translation: 'Oi! Eu me chamo Wang Ming. Como vai? (nǐ hǎo! wǒ jiào Wáng Míng. nǐ hǎo ma?)',
        emoji: '🙋‍♂️',
        choices: [
          { text: '我很好，谢谢！你呢？', translation: 'Eu vou bem, obrigado! E você? (wǒ hěn hǎo, xièxie! nǐ ne?)', next: 'hen_hao' },
          { text: '再见！', translation: 'Tchau! (zàijiàn!)', wrong: 'Wang Ming acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      hen_hao: {
        text: '我也很好！你叫什么名字？',
        translation: 'Eu também vou bem! Como você se chama? (wǒ yě hěn hǎo! nǐ jiào shénme míngzi?)',
        emoji: '😊',
        choices: [
          { text: '我叫安娜。', translation: 'Eu me chamo Ana. (wǒ jiào Ānnà)', next: 'nome' },
          { text: '我喝水。', translation: 'Eu bebo água. (wǒ hē shuǐ)', wrong: 'Isso não responde ao seu nome. Use “我叫…” (wǒ jiào…).' },
        ],
      },
      nome: {
        text: '认识你很高兴，安娜！你是哪里人？',
        translation: 'Muito prazer, Ana! De onde você é? (rènshi nǐ hěn gāoxìng, Ānnà! nǐ shì nǎlǐ rén?)',
        emoji: '🤝',
        choices: [
          { text: '我是巴西人。', translation: 'Eu sou brasileira. (wǒ shì Bāxīrén)', next: 'final_bom' },
          { text: '我是学生。', translation: 'Eu sou estudante. (wǒ shì xuésheng)', wrong: 'Isso não diz de onde você é. Use “我是…人” (wǒ shì…rén).' },
        ],
      },
      final_bom: {
        text: '太好了！欢迎你！',
        translation: 'Que ótimo! Seja bem-vinda! (tài hǎo le! huānyíng nǐ!)',
        emoji: '🎉',
        ending: { tone: 'bom', title: '第一次用中文聊天！', message: 'Wang Ming sorri: você acabou de ter a sua primeira conversa em chinês.' },
      },
    },
    glossary: [
      ['你好', 'oi, olá (nǐ hǎo)'],
      ['我叫…', 'eu me chamo… (wǒ jiào…)'],
      ['我是…人', 'eu sou … (nacionalidade: wǒ shì…rén)'],
      ['认识你很高兴', 'muito prazer (rènshi nǐ hěn gāoxìng)'],
    ],
  },
  {
    id: 'zh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: '我的家人',
    emoji: '👪',
    summary: 'Li Hua (李华), uma colega de escola, pergunta sobre a sua família e convida você para comer na casa dela.',
    cultural_context: 'Convidar alguém para comer em casa é um gesto importante de amizade na cultura chinesa; é comum o convidado levar um pequeno presente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！你家有几个人？',
        translation: 'Oi! Quantas pessoas há na sua família? (nǐ hǎo! nǐ jiā yǒu jǐ ge rén?)',
        emoji: '📱',
        choices: [
          { text: '我家有四个人：爸爸、妈妈、哥哥和我。', translation: 'Na minha família há quatro pessoas: pai, mãe, irmão mais velho e eu. (wǒ jiā yǒu sì ge rén)', next: 'jiaren' },
          { text: '我家很大。', translation: 'A minha casa é grande. (wǒ jiā hěn dà)', wrong: 'Isso não diz quantas pessoas há na família. Use “我家有…个人”.' },
        ],
      },
      jiaren: {
        text: '你喜欢吃什么？',
        translation: 'O que você gosta de comer? (nǐ xǐhuan chī shénme?)',
        emoji: '🍽️',
        choices: [
          { text: '我喜欢吃米饭和面包。', translation: 'Eu gosto de comer arroz e pão. (wǒ xǐhuan chī mǐfàn hé miànbāo)', next: 'final_bom' },
          { text: '我是学生。', translation: 'Eu sou estudante. (wǒ shì xuésheng)', wrong: 'Isso não responde o que você gosta de comer. Use “我喜欢吃…”.' },
        ],
      },
      final_bom: {
        text: '太好了！明天来我家吃饭吧！',
        translation: 'Que ótimo! Venha comer na minha casa amanhã! (tài hǎo le! míngtiān lái wǒ jiā chī fàn ba!)',
        emoji: '🏠',
        ending: { tone: 'bom', title: '一个邀请！', message: 'Você foi convidado para comer na casa de Li Hua.' },
      },
    },
    glossary: [
      ['我家有…个人', 'na minha família há … pessoas (wǒ jiā yǒu…ge rén)'],
      ['喜欢', 'gostar (xǐhuan)'],
      ['吃', 'comer (chī)'],
      ['来…吃饭', 'vir comer em… (lái…chī fàn)'],
    ],
  },
  {
    id: 'zh-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: '大寒的一天',
    emoji: '🌨️',
    summary: 'Numa manhã de 大寒 (o termo solar mais frio do ano), você encontra Wang Ming no caminho da escola e fala sobre o tempo e como estão se sentindo.',
    cultural_context: '大寒 (dàhán, “o grande frio”) é o último dos 24 Termos Solares chineses, por volta de 20 de janeiro; marca os dias mais frios do inverno no calendário tradicional chinês, reconhecido pela UNESCO em 2016.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！今天很冷，是大寒。你感觉怎么样？',
        translation: 'Oi! Hoje está muito frio, é o Dahan. Como você está se sentindo? (nǐ hǎo! jīntiān hěn lěng, shì dàhán. nǐ gǎnjué zěnmeyàng?)',
        emoji: '🥶',
        choices: [
          { text: '我很冷，也很高兴。', translation: 'Estou com frio, mas também muito feliz. (wǒ hěn lěng, yě hěn gāoxìng)', next: 'gaoxing' },
          { text: '机场很远。', translation: 'O aeroporto é longe. (jīchǎng hěn yuǎn)', wrong: 'Isso não responde como você está se sentindo. Use “我很…” (wǒ hěn…).' },
        ],
      },
      gaoxing: {
        text: '我也很高兴！',
        translation: 'Eu também estou feliz! (wǒ yě hěn gāoxìng!)',
        emoji: '😊',
        choices: [
          { text: '今天比昨天冷。', translation: 'Hoje está mais frio do que ontem. (jīntiān bǐ zuótiān lěng)', next: 'final_bom' },
          { text: '我买面包。', translation: 'Eu compro pão. (wǒ mǎi miànbāo)', wrong: 'Isso não tem nada a ver com o tempo. Compare hoje com ontem, usando “比”.' },
        ],
      },
      final_bom: {
        text: '对！再见！',
        translation: 'Isso! Tchau! (duì! zàijiàn!)',
        emoji: '👋',
        ending: { tone: 'bom', title: '大寒快乐！', message: 'Você conversou sobre o dia mais frio do ano com Wang Ming.' },
      },
    },
    glossary: [
      ['大寒', 'o último e mais frio dos 24 Termos Solares'],
      ['冷', 'frio (lěng)'],
      ['高兴', 'feliz (gāoxìng)'],
      ['比', 'mais … do que (bǐ)'],
    ],
  },
  {
    id: 'zh-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: '在大栅栏',
    emoji: '🏪',
    summary: 'Na rua de Dashilan, em Pequim, você conhece Li Hua trabalhando numa farmácia tradicional e fala sobre a cidade e profissões.',
    cultural_context: 'A farmácia Tongrentang, na rua de Dashilan, existe desde 1702 e já foi fornecedora oficial da corte imperial Qing, a partir de 1723.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！你是医生吗？',
        translation: 'Oi! Você é médico? (nǐ hǎo! nǐ shì yīshēng ma?)',
        emoji: '🏪',
        choices: [
          { text: '不是，我是厨师。', translation: 'Não, eu sou cozinheiro. (bú shì, wǒ shì chúshī)', next: 'zhiye' },
          { text: '机场很远。', translation: 'O aeroporto é longe. (jīchǎng hěn yuǎn)', wrong: 'Isso não responde à profissão. Use “不是，我是…” (bú shì, wǒ shì…).' },
        ],
      },
      zhiye: {
        text: '我在同仁堂工作，这家药店很老。',
        translation: 'Eu trabalho na Tongrentang, esta farmácia é muito antiga. (wǒ zài Tóngréntáng gōngzuò, zhè jiā yàodiàn hěn lǎo)',
        emoji: '💊',
        choices: [
          { text: '北京比上海大吗？', translation: 'Pequim é maior do que Shanghai? (Běijīng bǐ Shànghǎi dà ma?)', next: 'final_bom' },
          { text: '今天下雪。', translation: 'Hoje neva. (jīntiān xiàxuě)', wrong: 'Isso não tem nada a ver com a cidade. Pergunte sobre Pequim e Shanghai, usando “比”.' },
        ],
      },
      final_bom: {
        text: '北京比上海大！欢迎你来大栅栏！',
        translation: 'Pequim é maior do que Shanghai! Seja bem-vindo a Dashilan! (Běijīng bǐ Shànghǎi dà! huānyíng nǐ lái Dàshílànr!)',
        emoji: '🎉',
        ending: { tone: 'bom', title: '在老字号！', message: 'Você conheceu Li Hua na farmácia Tongrentang, na rua de Dashilan.' },
      },
    },
    glossary: [
      ['药店', 'farmácia (yàodiàn)'],
      ['老', 'antigo, velho (lǎo)'],
      ['比', 'mais … do que (bǐ)'],
      ['欢迎', 'bem-vindo (huānyíng)'],
    ],
  },
];
