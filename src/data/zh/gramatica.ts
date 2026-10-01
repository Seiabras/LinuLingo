import type { GrammarTopic } from '../types';

/** Tópicos de gramática do chinês mandarim — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_ZH: GrammarTopic[] = [
  {
    id: 'zh-g1',
    level: 'A1.1',
    title: 'Os quatro tons e o pinyin',
    emoji: '🎵',
    summary: 'Cada sílaba do mandarim tem um tom, e o tom muda o sentido: mā, má, mǎ e mà são palavras diferentes.',
    sections: [
      {
        text: 'O pinyin escreve os sons com letras latinas e marca o tom sobre a vogal. São quatro tons e um tom neutro, curto e sem marca.',
        table: {
          head: ['Tom', 'Marca', 'Como soa', 'Exemplo'],
          rows: [
            ['1º', 'ā', 'alto e reto', '妈 mā (mãe)'],
            ['2º', 'á', 'sobe', '麻 má (cânhamo)'],
            ['3º', 'ǎ', 'baixo, desce e pode subir no fim', '马 mǎ (cavalo)'],
            ['4º', 'à', 'cai de cima, seco', '骂 mà (xingar)'],
            ['neutro', 'a', 'curto e leve', '吗 ma (pergunta)'],
          ],
        },
        examples: [
          ['妈妈', 'mãe (māma: 1º tom + neutro)'],
          ['谢谢', 'obrigado (xièxie: 4º tom + neutro)'],
        ],
      },
      {
        heading: 'Dois 3º tons seguidos',
        text: 'Quando dois 3º tons se encontram, o primeiro vira 2º tom. O pinyin continua escrevendo o 3º tom.',
        examples: [['你好', 'oi (escrito nǐ hǎo, dito ní hǎo)']],
      },
    ],
    pitfalls: [
      'Ler o pinyin como português: “x” não é o “x” de “xícara”, é parecido com um “ch” com os lábios esticados; “q” soa perto de “tch”.',
      'Achar que o tom é só entonação da frase: em chinês ele faz parte da palavra, como uma letra.',
    ],
    quiz: [
      { question: 'Qual tom cai de cima, seco?', options: ['4º tom', '1º tom', '2º tom'], answer: '4º tom', explanation: 'O 4º tom (à) começa alto e cai rápido, como uma ordem.' },
      { question: 'Como se pronuncia 你好 na fala?', options: ['ní hǎo', 'nǐ hǎo, com dois 3º tons', 'nì hào'], answer: 'ní hǎo', explanation: 'Dois 3º tons seguidos: o primeiro vira 2º tom.' },
    ],
  },
  {
    id: 'zh-g2',
    level: 'A1.1',
    title: 'Pronomes, 是 e a pergunta com 吗',
    emoji: '🙋',
    summary: 'Os verbos não se conjugam: 是 (ser) é igual para todas as pessoas. Para perguntar sim ou não, acrescente 吗.',
    sections: [
      {
        text: 'O plural das pessoas se faz com 们 (men). 他 (ele) e 她 (ela) soam igual, tā: a diferença só aparece na escrita.',
        table: {
          head: ['Pronome', 'Pinyin', 'Tradução', 'com 是'],
          rows: [
            ['我', 'wǒ', 'eu', '我是'],
            ['你 / 您', 'nǐ / nín', 'você / o senhor', '你是'],
            ['他 / 她', 'tā', 'ele / ela', '他是'],
            ['我们', 'wǒmen', 'nós', '我们是'],
            ['你们', 'nǐmen', 'vocês', '你们是'],
            ['他们', 'tāmen', 'eles', '他们是'],
          ],
        },
        examples: [
          ['我是学生。', 'Eu sou estudante. (wǒ shì xuésheng)'],
          ['你是学生吗？', 'Você é estudante? (nǐ shì xuésheng ma?)'],
        ],
      },
      {
        heading: '是 não vai com adjetivo',
        text: 'Para dizer como algo é, o chinês liga o adjetivo direto, normalmente com 很 (hěn, “muito”), que aqui quase não tem força.',
        examples: [
          ['我很好。', 'Eu estou bem. (wǒ hěn hǎo)'],
          ['我家很大。', 'A minha casa é grande. (wǒ jiā hěn dà)'],
        ],
      },
    ],
    pitfalls: ['Dizer “我是好” para “estou bem”: com adjetivo não se usa 是; o certo é “我很好”.', 'Mudar a ordem da frase para perguntar: em chinês a ordem fica igual, só entra o 吗 no fim.'],
    quiz: [
      { question: 'Como se diz “eu estou bem”?', options: ['我很好。', '我是好。', '好我是。'], answer: '我很好。', explanation: 'O adjetivo vem direto depois do sujeito, com 很.' },
      { question: 'Como transformar “你是老师” em pergunta?', options: ['你是老师吗？', '是你老师？', '你吗是老师？'], answer: '你是老师吗？', explanation: 'A ordem fica igual e 吗 vai no fim.' },
    ],
  },
  {
    id: 'zh-g3',
    level: 'A1.2',
    title: 'Números e classificadores',
    emoji: '🔢',
    summary: 'Entre o número e o substantivo entra um classificador: 一个人 (uma pessoa), 一只猫 (um gato).',
    sections: [
      {
        text: 'A ordem é número + classificador + substantivo. O 个 (gè) é o mais comum; 只 (zhī) serve para muitos animais. Antes de classificador, “dois” é 两 (liǎng), e não 二.',
        table: {
          head: ['Número', 'Classificador', 'Substantivo', 'Tradução'],
          rows: [
            ['一 yí', '个 ge', '哥哥', 'um irmão mais velho'],
            ['两 liǎng', '个 ge', '朋友', 'dois amigos'],
            ['三 sān', '个 ge', '人', 'três pessoas'],
            ['一 yì', '只 zhī', '猫', 'um gato'],
          ],
        },
        examples: [
          ['我有两个妹妹。', 'Tenho duas irmãs mais novas. (wǒ yǒu liǎng ge mèimei)'],
          ['你家有几个人？', 'Quantas pessoas há na sua família? (nǐ jiā yǒu jǐ ge rén?)'],
        ],
      },
    ],
    pitfalls: ['Esquecer o classificador: “我有一猫” está errado; o certo é “我有一只猫”.', 'Usar 二 antes do classificador: “二个朋友” está errado; o certo é “两个朋友”.'],
    quiz: [
      { question: 'Como se diz “dois amigos”?', options: ['两个朋友', '二个朋友', '两朋友'], answer: '两个朋友', explanation: 'Antes de classificador, “dois” é 两, e o classificador 个 não pode faltar.' },
      { question: 'Qual classificador vai com 猫 (gato)?', options: ['只', '是', '的'], answer: '只', explanation: '只 (zhī) é o classificador de muitos animais.' },
    ],
  },
  {
    id: 'zh-g4',
    level: 'A1.2',
    title: 'Negação com 不 e 没有; posse com 的',
    emoji: '🚫',
    summary: 'O chinês nega com 不 (bù), mas o verbo 有 (ter) se nega com 没 (méi): 没有. A posse se marca com 的.',
    sections: [
      {
        text: '不 vai antes do verbo ou do adjetivo. Com 有, a negação é sempre 没有.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução da negativa'],
          rows: [
            ['我是老师。', '我不是老师。', 'Não sou professor.'],
            ['我喝咖啡。', '我不喝咖啡。', 'Não bebo café.'],
            ['我有妹妹。', '我没有妹妹。', 'Não tenho irmã mais nova.'],
          ],
        },
      },
      {
        heading: 'O 的 de posse',
        text: '的 (de) liga o dono à coisa, na ordem dono + 的 + coisa. Com família e lugares próximos, o 的 costuma cair.',
        examples: [
          ['这是我的猫。', 'Este é o meu gato. (zhè shì wǒ de māo)'],
          ['我妈妈叫玛丽亚。', 'A minha mãe se chama Maria. (wǒ māma jiào Mǎlìyà)'],
        ],
      },
    ],
    pitfalls: ['Dizer “我不有”: o verbo 有 só se nega com 没, “我没有”.', 'Pôr a coisa antes do dono, como em português (“o gato de mim”): em chinês o dono vem primeiro, “我的猫”.'],
    quiz: [
      { question: 'Como se diz “não tenho cachorro”?', options: ['我没有狗。', '我不有狗。', '我有不狗。'], answer: '我没有狗。', explanation: '有 se nega com 没: 没有.' },
      { question: '“我的朋友” quer dizer…', options: ['o meu amigo', 'eu sou amigo', 'o amigo tem'], answer: 'o meu amigo', explanation: 'Dono (我) + 的 + coisa (朋友).' },
    ],
  },
];
