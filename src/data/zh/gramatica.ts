import type { GrammarTopic } from '../types';

/** Tópicos de gramática do chinês mandarim — A1.1 até A2.2 (pacote incompleto; B1 em diante chega depois). */
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
  {
    id: 'zh-g5',
    level: 'A2.1',
    title: 'Comparação com 比 (bǐ)',
    emoji: '📏',
    summary: 'Para comparar, basta o padrão A 比 B + adjetivo: o adjetivo sozinho já carrega o sentido de “mais”.',
    sections: [
      {
        text: 'Não se usa uma palavra separada para “mais”: o adjetivo depois de 比 já é comparativo. E não se põe 很 antes do adjetivo numa frase com 比.',
        table: {
          head: ['Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['A 比 B + adjetivo', '他比我高。', 'Ele é mais alto do que eu. (tā bǐ wǒ gāo)'],
            ['A 比 B + adjetivo + quantidade', '他比我高五厘米。', 'Ele é cinco centímetros mais alto do que eu.'],
          ],
        },
        examples: [
          ['中国比美国大。', 'A China é maior do que os EUA. (zhōngguó bǐ měiguó dà)'],
          ['今天比昨天冷。', 'Hoje está mais frio do que ontem. (jīntiān bǐ zuótiān lěng)'],
        ],
      },
      {
        heading: 'Para dizer “não é tão… quanto”',
        text: 'Em vez de 不比, que soa como “discordar” de uma comparação, o jeito simples de dizer que A não é tanto quanto B usa 没有.',
        examples: [['我没有他高。', 'Eu não sou tão alto quanto ele. (wǒ méiyǒu tā gāo)']],
      },
    ],
    pitfalls: ['Pôr 很 antes do adjetivo numa frase com 比: “他比我很高” está errado; o certo é “他比我高”.', 'Usar 不比 para dizer “não é tão…”: isso implica discordar de alguém; o jeito simples é 没有.'],
    quiz: [
      { question: 'Como se diz “a China é maior do que o Brasil”?', options: ['中国比巴西大。', '中国很比巴西大。', '中国大比巴西。'], answer: '中国比巴西大。', explanation: 'A estrutura é A 比 B + adjetivo, sem 很.' },
      { question: 'Qual frase está errada?', options: ['他比我很高。', '他比我高。', '他比我高五厘米。'], answer: '他比我很高。', explanation: 'Não se usa 很 antes do adjetivo numa frase com 比.' },
    ],
  },
  {
    id: 'zh-g6',
    level: 'A2.1',
    title: 'A partícula 了 (le): ação completa',
    emoji: '✅',
    summary: '了 depois do verbo mostra que a ação terminou, foi vista como um todo.',
    sections: [
      {
        text: '了 vai logo depois do verbo (ou depois do objeto, em frases mais simples) e marca que a ação já aconteceu por completo, não que está no passado em geral.',
        examples: [
          ['我买了面包。', 'Eu comprei pão. (wǒ mǎi le miànbāo)'],
          ['他看了三场球赛。', 'Ele assistiu a três jogos. (tā kàn le sān chǎng qiúsài)'],
        ],
      },
      {
        heading: 'Negação: 没 (méi), sem 了',
        text: 'Para negar uma ação que não aconteceu, usa-se 没 antes do verbo, e o 了 desaparece.',
        examples: [['我没买面包。', 'Eu não comprei pão. (wǒ méi mǎi miànbāo)']],
      },
    ],
    pitfalls: ['Usar 了 para todo passado: ele marca uma ação terminada e vista como um todo, não qualquer fato passado.', 'Manter o 了 na negação: “我没买了面包” está errado; o certo é “我没买面包”, sem 了.'],
    quiz: [
      { question: 'Como se diz “eu comprei pão”?', options: ['我买了面包。', '我了买面包。', '我买面包了没。'], answer: '我买了面包。', explanation: '了 vai logo depois do verbo.' },
      { question: 'Como se nega “我买了面包”?', options: ['我没买面包。', '我没买了面包。', '我不买了面包。'], answer: '我没买面包。', explanation: 'A negação usa 没, e o 了 desaparece.' },
    ],
  },
  {
    id: 'zh-g7',
    level: 'A2.2',
    title: 'Dezenas com 二 (não 两), idade e dinheiro',
    emoji: '🔢',
    summary: 'Nas dezenas (20, 200…) usa-se sempre 二, nunca 两 — mesmo que 两 substitua 二 antes de classificador.',
    sections: [
      {
        text: '两 só troca 二 quando vem logo antes de um classificador (两个, 两只). Nas dezenas, centenas e em números como 20, 200, usa-se sempre 二: 二十 (20), não “两十”.',
        table: {
          head: ['Contexto', 'Forma certa', 'Forma errada'],
          rows: [
            ['dezena', '二十 (20)', '两十'],
            ['com classificador', '两个朋友 (dois amigos)', '二个朋友'],
            ['número solto', '二 (o número 2)', '—'],
          ],
        },
        examples: [
          ['他二十岁。', 'Ele tem vinte anos. (tā èrshí suì)'],
          ['老师六十岁。', 'O professor tem sessenta anos. (lǎoshī liùshí suì)'],
        ],
      },
      {
        heading: 'Idade e dinheiro sem verbo “ser”',
        text: 'Para dizer a idade, o chinês não usa 是: o número de anos vem direto depois da pessoa, com 岁 (suì, “anos de idade”).',
        examples: [['她三十岁。', 'Ela tem trinta anos. (tā sānshí suì)']],
      },
    ],
    pitfalls: ['Usar 两 nas dezenas: “两十” está errado; o certo é sempre 二十.', 'Pôr 是 na idade: “她是三十岁” soa estranho; o natural é “她三十岁”, sem verbo.'],
    quiz: [
      { question: 'Como se diz “vinte”?', options: ['二十', '两十', '二个十'], answer: '二十', explanation: 'Nas dezenas usa-se sempre 二, nunca 两.' },
      { question: 'Como se diz “ele tem vinte anos”?', options: ['他二十岁。', '他是二十岁。', '他两十岁。'], answer: '他二十岁。', explanation: 'A idade vem direto depois da pessoa, com 岁, sem 是.' },
    ],
  },
];
