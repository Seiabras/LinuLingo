import type { LanguageVariant } from '../types';

/**
 * Os dialetos do mandarim (decisão do dono, 10/10/2026): a China continental (o padrão do curso, o
 * putonghua, em caracteres simplificados), Taiwan (o guoyu, em caracteres tradicionais), Singapura (o
 * huayu) e o mandarim de Sichuan, que o dono decidiu tratar como dialeto por ter gramática, vocabulário
 * e pronúncia próprios. As escritas (tradicional e pinyin) continuam como variantes, em variantes.ts.
 * Vocabulário no formato [China, dialeto, explicação, nota]; nas histórias, o pinyin vem na tradução,
 * como no resto do curso, e as de Taiwan usam os caracteres tradicionais. Como o curso ainda vai até o
 * A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em inglês e em chinês («Standard Chinese», «Taiwanese Mandarin» / «臺灣華語»,
 * «Singaporean Mandarin» / «新加坡华语», «Speak Mandarin Campaign», «Sichuanese dialects» / «四川话»,
 * «Cross-Strait vocabulary differences», consultadas em 10/10/2026).
 */
export const DIALETOS_ZH: LanguageVariant[] = [
  {
    code: 'zh-CN',
    country: 'CHN',
    kind: 'dialeto',
    speechLocale: 'zh-CN',
    name: 'Mandarim da China (putonghua)',
    flag: '🇨🇳',
    summary:
      'O padrão do curso: o putonghua (普通话, “a fala comum”), com a pronúncia de Pequim, os caracteres simplificados e o pinyin.',
    card: {
      id: 'zh-cn-c1',
      title: 'Por que o putonghua?',
      emoji: '🇨🇳',
      history:
        'A China tem centenas de falares, muitos tão diferentes entre si quanto o português e o romeno. Nos anos 1950, o governo definiu o putonghua (普通话), a “fala comum”: a pronúncia de Pequim, a gramática dos falares do norte e o vocabulário da literatura moderna. Em 1956 vieram os caracteres simplificados, e em 1958, o pinyin, a romanização oficial. Hoje o putonghua é a língua da escola, da TV e do governo em toda a China, ao lado dos falares de cada região, que a maioria fala em casa.',
      culture_tip:
        'Na China, o sobrenome vem antes do nome (王明: Wang é o sobrenome). Ao cumprimentar alguém mais velho ou de posição mais alta, usa-se 您 (nín), o “você” respeitoso. Os cartões de visita e os presentes se entregam e se recebem com as duas mãos. E o pagamento é quase todo pelo celular, com QR code.',
      grammar_why:
        'O padrão do curso: a pronúncia de Pequim, com o “儿化” (érhuà, o “r” no fim de algumas palavras: 一点儿 yìdiǎnr), as consoantes retroflexas zh, ch, sh bem marcadas, o tom neutro em muitas sílabas, e o vocabulário da China continental: 出租车 (táxi), 地铁 (metrô), 软件 (software), 视频 (vídeo).',
      grammar_examples: [
        ['我们坐地铁去吧。', 'Vamos de metrô. (wǒmen zuò dìtiě qù ba)'],
        ['您好，请问您贵姓？', 'Olá, qual é o seu sobrenome? (nín hǎo, qǐngwèn nín guìxìng?)'],
        ['我会说一点儿中文。', 'Eu falo um pouco de chinês. (wǒ huì shuō yìdiǎnr Zhōngwén)'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── TAIWAN ─────────────────────────────
  {
    code: 'zh-TW',
    country: 'TWN',
    kind: 'dialeto',
    speechLocale: 'zh-TW',
    name: 'Mandarim de Taiwan (guoyu)',
    flag: '🇹🇼',
    summary:
      'O mandarim de Taiwan, o 國語 (guóyǔ, “língua nacional”), escrito com os caracteres tradicionais e o zhuyin (ㄅㄆㄇㄈ) no lugar do pinyin. Tem pronúncia mais suave, palavras próprias e muita influência do taiwanês (hokkien).',
    card: {
      id: 'zh-tw-c1',
      title: '國語: o mandarim de Taiwan',
      emoji: '🧋',
      history:
        'O mandarim chegou a Taiwan como língua oficial depois de 1945, com o governo da República da China, que se mudou para a ilha em 1949. Por décadas, as escolas proibiram o taiwanês (hokkien), o hakka e as línguas indígenas, e o mandarim virou a língua comum. Mas ele ganhou um jeito próprio: a pronúncia de quem tinha o hokkien como primeira língua, palavras novas criadas separadamente das da China continental, a escrita com os caracteres tradicionais e o zhuyin (注音, também chamado bopomofo) para ensinar a pronúncia. Desde 2019, uma lei protege também o hokkien, o hakka e as línguas indígenas como línguas nacionais.',
      culture_tip:
        'Taiwan é a terra do chá com bolinhas de tapioca, o 珍珠奶茶 (zhēnzhū nǎichá), inventado na ilha nos anos 1980, e dos mercados noturnos (夜市, yèshì), cheios de barracas de comida. As lojas de conveniência estão em toda esquina e servem para tudo, de pagar contas a mandar encomendas. E o “不好意思” (bù hǎoyìsi, desculpe, com licença) é dito o tempo todo, com o sorriso típico da gentileza taiwanesa.',
      grammar_why:
        'A gramática é a mesma; mudam a escrita, a pronúncia e o vocabulário: (1) os caracteres tradicionais: 謝謝, 學校, 臺灣; (2) o zhuyin (ㄅㄆㄇㄈ) no lugar do pinyin nas escolas; (3) o “有” antes do verbo para dizer que algo aconteceu: “我有吃” (eu comi), por influência do hokkien; (4) palavras próprias: 計程車 (táxi), 捷運 (metrô), 機車 (moto), 軟體 (software), 影片 (vídeo); (5) falsos amigos com a China: 土豆 é amendoim em Taiwan e batata na China.',
      grammar_examples: [
        ['我們坐捷運去吧。', 'Vamos de metrô. (wǒmen zuò jiéyùn qù ba) (China: 地铁)'],
        ['你有吃早餐嗎？', 'Você tomou café da manhã? (nǐ yǒu chī zǎocān ma?) (China: 你吃早饭了吗？)'],
        ['我騎機車上班。', 'Vou de moto para o trabalho. (wǒ qí jīchē shàngbān) (China: 摩托车)'],
        ['不好意思，請問捷運站在哪裡？', 'Com licença, onde fica a estação de metrô? (bù hǎoyìsi, qǐngwèn jiéyùn zhàn zài nǎlǐ?)'],
      ],
      character_guide: [
        ['ㄅㄆㄇㄈ', 'o zhuyin (bopomofo): os sinais de pronúncia usados em Taiwan no lugar do pinyin', 'ㄋㄧˇ ㄏㄠˇ = nǐ hǎo'],
        ['臺 / 台', 'o “tai” de Taiwan nas duas formas tradicionais', '臺灣, 台北'],
      ],
    },
    pronunciation: [
      'As retroflexas zh, ch, sh muitas vezes soam como z, c, s: “是” (shì) soa perto de “sì”.',
      'Quase não há o “儿化” (érhuà) de Pequim: “一点儿” vira “一點” (yìdiǎn).',
      'O tom neutro é menos usado: muitas sílabas mantêm o tom cheio (“東西” é dōngxī, não dōngxi).',
      'Algumas palavras têm outro tom: “垃圾” (lixo) é lèsè em Taiwan e lājī na China; “星期” é xīngqí, e não xīngqī.',
      'A melodia é mais suave, influenciada pelo taiwanês (hokkien).',
    ],
    vocab: [
      ['出租车', '計程車', 'táxi', 'jìchéngchē'],
      ['地铁', '捷運', 'metrô', 'jiéyùn'],
      ['摩托车', '機車', 'moto', 'jīchē; na China, 机车 é locomotiva'],
      ['自行车', '腳踏車', 'bicicleta', 'jiǎotàchē'],
      ['公交车', '公車', 'ônibus', 'gōngchē'],
      ['软件', '軟體', 'software, aplicativo', 'ruǎntǐ'],
      ['网络', '網路', 'internet, rede', 'wǎnglù'],
      ['视频', '影片', 'vídeo', 'yǐngpiàn'],
      ['信息', '資訊', 'informação', 'zīxùn'],
      ['土豆', '馬鈴薯', 'batata', 'cuidado: em Taiwan, 土豆 é amendoim'],
      ['西红柿', '番茄', 'tomate', 'fānqié'],
      ['酸奶', '優格', 'iogurte', 'yōugé'],
      ['质量', '品質', 'qualidade', 'pǐnzhí'],
    ],
    stories: [
      {
        id: 'zh-h5',
        variant: 'zh-TW',
        level: 'A2.1',
        cefr: 'A2',
        title: '台北的夜市',
        emoji: '🏮',
        summary: 'Em Taipé, a amiga Yating leva Linu a um mercado noturno; ele aprende as palavras de Taiwan e prova o chá com bolinhas.',
        cultural_context:
          'Os mercados noturnos (夜市) de Taipé, como o de Shilin, são cheios de barracas de comida. Em Taiwan, o mandarim se escreve com os caracteres tradicionais, o metrô é o 捷運 (jiéyùn) e o chá com bolinhas de tapioca, o 珍珠奶茶, nasceu na ilha nos anos 1980.',
        start: 'start',
        glossary: [
          ['夜市', 'mercado noturno (yèshì)'],
          ['捷運', 'metrô, em Taiwan (jiéyùn)'],
          ['珍珠奶茶', 'chá com leite e bolinhas de tapioca (zhēnzhū nǎichá)'],
          ['不好意思', 'com licença, desculpe (bù hǎoyìsi)'],
          ['好吃', 'gostoso (hǎochī)'],
        ],
        nodes: {
          start: {
            emoji: '🚇',
            text: '雅婷說：「我們坐捷運去士林夜市吧！」',
            translation: 'Yating diz: “Vamos de metrô ao mercado noturno de Shilin!” (Yǎtíng shuō: “wǒmen zuò jiéyùn qù Shìlín yèshì ba!”)',
            choices: [
              { text: '「捷運是地鐵嗎？」', translation: '“Jieyun é o metrô?” (jiéyùn shì dìtiě ma?)', next: 'jieyun' },
              {
                text: '「好，我們坐計程車去。」',
                translation: '“Tá bom, vamos de táxi.” (hǎo, wǒmen zuò jìchéngchē qù)',
                wrong: 'A Yating disse “捷運” (jiéyùn), o metrô de Taiwan, e não “計程車” (táxi).',
              },
            ],
          },
          jieyun: {
            emoji: '😄',
            text: '雅婷笑了：「對！在台灣我們說捷運。」夜市人很多，有很多好吃的東西。',
            translation: 'Yating ri: “Isso! Em Taiwan a gente diz jieyun.” O mercado noturno está cheio de gente e de comidas gostosas. (Yǎtíng xiào le: “duì! zài Táiwān wǒmen shuō jiéyùn.” yèshì rén hěn duō, yǒu hěn duō hǎochī de dōngxī)',
            choices: [
              { text: '「我想喝珍珠奶茶！」', translation: '“Quero tomar chá com bolinhas!” (wǒ xiǎng hē zhēnzhū nǎichá!)', next: 'cha' },
            ],
          },
          cha: {
            emoji: '🧋',
            text: '老闆問：「要大杯還是中杯？」李努說：「不好意思，大杯，謝謝！」',
            translation: 'O dono da barraca pergunta: “Copo grande ou médio?” Linu diz: “Com licença, o grande, obrigado!” (lǎobǎn wèn: “yào dà bēi háishì zhōng bēi?” Lǐnǔ shuō: “bù hǎoyìsi, dà bēi, xièxie!”)',
            choices: [
              { text: '李努喝了一口：「好好喝！」', translation: 'Linu toma um gole: “Que delícia!” (Lǐnǔ hē le yì kǒu: “hǎo hǎohē!”)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🏮',
            text: '雅婷說：「你的國語越來越好了！」他們一起逛夜市，吃了很多東西。',
            translation: 'Yating diz: “O seu mandarim está cada vez melhor!” Eles passeiam juntos pelo mercado e comem muita coisa. (Yǎtíng shuō: “nǐ de guóyǔ yuè lái yuè hǎo le!” tāmen yìqǐ guàng yèshì, chī le hěn duō dōngxī)',
            ending: {
              tone: 'bom',
              title: '夜市好好玩！',
              message: 'Você leu os caracteres tradicionais de Taiwan e aprendeu 捷運 (metrô), 夜市 (mercado noturno), 珍珠奶茶 e 不好意思.',
            },
          },
        },
      },
      {
        id: 'zh-h6',
        variant: 'zh-TW',
        level: 'A2.2',
        cefr: 'A2',
        title: '土豆不是馬鈴薯',
        emoji: '🥜',
        summary: 'Num restaurante de Taipé, Linu pede “土豆” achando que vai comer batata e descobre o falso amigo mais famoso entre Taiwan e a China.',
        cultural_context:
          'Taiwan e a China continental usam o mesmo mandarim, mas algumas palavras mudaram de sentido: 土豆 (tǔdòu) é batata na China e amendoim em Taiwan, onde a batata é 馬鈴薯 (mǎlíngshǔ). Em Taiwan também se usa “有” antes do verbo para dizer que algo aconteceu: “你有吃嗎？” (você comeu?).',
        start: 'start',
        glossary: [
          ['土豆', 'amendoim em Taiwan; batata na China (tǔdòu)'],
          ['馬鈴薯', 'batata, em Taiwan (mǎlíngshǔ)'],
          ['有 + verbo', 'fez, aconteceu (“有吃” = comeu)'],
          ['菜單', 'cardápio (càidān)'],
        ],
        nodes: {
          start: {
            emoji: '📋',
            text: '李努和朋友志明在餐廳。李努看菜單：「我要土豆，謝謝。」',
            translation: 'Linu e o amigo Zhiming estão num restaurante. Linu olha o cardápio: “Quero 土豆, por favor.” (Lǐnǔ hé péngyǒu Zhìmíng zài cāntīng. Lǐnǔ kàn càidān: “wǒ yào tǔdòu, xièxie”)',
            choices: [
              { text: '服務生拿來一盤花生。', translation: 'O garçom traz um prato de amendoim. (fúwùshēng nálái yì pán huāshēng)', next: 'amendoim' },
            ],
          },
          amendoim: {
            emoji: '🥜',
            text: '李努很奇怪：「這不是土豆！」志明笑了：「在台灣，土豆就是花生。你要的是馬鈴薯！」',
            translation: 'Linu estranha: “Isso não é batata!” Zhiming ri: “Em Taiwan, 土豆 é amendoim. O que você quer é 馬鈴薯!” (Lǐnǔ hěn qíguài: “zhè bú shì tǔdòu!” Zhìmíng xiào le: “zài Táiwān, tǔdòu jiù shì huāshēng. nǐ yào de shì mǎlíngshǔ!”)',
            choices: [
              {
                text: '「所以在台灣，馬鈴薯是土豆，土豆是花生！」',
                translation: '“Então em Taiwan a batata é 馬鈴薯, e 土豆 é amendoim!” (suǒyǐ zài Táiwān…)',
                next: 'batata',
              },
              {
                text: '「所以服務生錯了。」',
                translation: '“Então o garçom errou.” (suǒyǐ fúwùshēng cuò le)',
                wrong: 'O garçom acertou: em Taiwan, 土豆 é amendoim. Na China é que 土豆 é batata.',
              },
            ],
          },
          batata: {
            emoji: '🥔',
            text: '志明說：「對！再點一個馬鈴薯吧。你有吃過台灣的滷肉飯嗎？」',
            translation: 'Zhiming diz: “Isso! Peça uma batata também. Você já comeu o arroz com carne de porco de Taiwan?” (duì! zài diǎn yí ge mǎlíngshǔ ba. nǐ yǒu chī guò Táiwān de lǔròufàn ma?)',
            choices: [
              { text: '「沒有！我想吃！」', translation: '“Não! Quero comer!” (méiyǒu! wǒ xiǎng chī!)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🍚',
            text: '他們吃了滷肉飯、馬鈴薯和土豆。李努說：「我學會了：在台灣，土豆是花生！」',
            translation: 'Eles comem o arroz com carne de porco, a batata e o amendoim. Linu diz: “Aprendi: em Taiwan, 土豆 é amendoim!” (tāmen chī le lǔròufàn, mǎlíngshǔ hé tǔdòu…)',
            ending: {
              tone: 'bom',
              title: '土豆 = 花生',
              message: 'Você descobriu o falso amigo 土豆 (amendoim em Taiwan, batata na China), aprendeu 馬鈴薯 e o “有” antes do verbo (你有吃過…嗎？).',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── SINGAPURA ─────────────────────────────
  {
    code: 'zh-SG',
    country: 'SGP',
    kind: 'dialeto',
    speechLocale: 'zh-CN',
    name: 'Mandarim de Singapura (huayu)',
    flag: '🇸🇬',
    summary:
      'O mandarim de Singapura, o 华语 (huáyǔ), uma das quatro línguas oficiais do país. Usa os caracteres simplificados, mas tem palavras do malaio e do inglês (巴刹, 德士, 组屋) e as partículas “啦” (lah) e “咯” (lor) do singlish.',
    card: {
      id: 'zh-sg-c1',
      title: '华语 em Singapura',
      emoji: '🦁',
      history:
        'Singapura tem quatro línguas oficiais: inglês, mandarim, malaio e tâmil. Os chineses de Singapura descendem de imigrantes do sul da China que falavam hokkien, teochew, cantonês, hakka e hainanês, e não mandarim. Em 1979, o governo lançou a campanha “Speak Mandarin” (讲华语运动) para que todos os chineses passassem a usar o mandarim como língua comum. O país adotou os caracteres simplificados nos anos 1970, como a China. Hoje o inglês é a língua do trabalho e da escola, e o mandarim é a “língua materna” estudada pelos chineses, com palavras e partículas próprias.',
      culture_tip:
        'A comida de rua de Singapura se come nos 小贩中心 (xiǎofàn zhōngxīn), os centros de barracas (hawker centres), que são Patrimônio Imaterial da Humanidade desde 2020. Para guardar o lugar na mesa, deixa-se um pacote de lenços de papel em cima: é o “chope”. Os mais velhos são chamados de 安娣 (āndì, “auntie”) e 安哥 (āngē, “uncle”), e a maioria mora nos 组屋 (zǔwū), os prédios de habitação pública.',
      grammar_why:
        'A gramática é a do mandarim, com marcas do inglês, do malaio e dos dialetos do sul da China: (1) palavras do malaio e do inglês: 巴刹 (bāshā, mercado, do malaio “pasar”), 德士 (déshì, táxi), 罗厘 (luólí, caminhão, do inglês “lorry”); (2) palavras locais: 组屋 (habitação pública), 小贩中心 (centro de comida de rua); (3) as partículas do singlish no fim da frase: “好啦” (hǎo lah, tá bom!), “这样咯” (zhèyàng lor, é assim mesmo); (4) a troca de língua no meio da frase, entre o mandarim, o inglês e o hokkien.',
      grammar_examples: [
        ['我们去巴刹买菜。', 'Vamos ao mercado comprar verdura. (wǒmen qù bāshā mǎi cài) (China: 菜市场)'],
        ['坐德士比较快。', 'De táxi é mais rápido. (zuò déshì bǐjiào kuài) (China: 出租车)'],
        ['他住在组屋。', 'Ele mora num prédio de habitação pública. (tā zhù zài zǔwū)'],
        ['好啦，明天见！', 'Tá bom, até amanhã! (hǎo lah, míngtiān jiàn!)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'As retroflexas zh, ch, sh muitas vezes soam como z, c, s, como no sul da China.',
      'Quase não há o “儿化” (érhuà) de Pequim.',
      'O ritmo e a melodia lembram os do hokkien e do inglês de Singapura.',
      'As partículas “lah”, “lor” e “meh” no fim da frase mudam o tom: “lah” suaviza ou dá ênfase.',
    ],
    vocab: [
      ['菜市场', '巴刹', 'mercado', 'bāshā, do malaio “pasar”'],
      ['出租车', '德士', 'táxi', 'déshì, do inglês “taxi”'],
      ['卡车', '罗厘', 'caminhão', 'luólí, do inglês “lorry”'],
      ['公共住房', '组屋', 'prédio de habitação pública', 'zǔwū; a maioria dos singapurianos mora num'],
      ['美食街', '小贩中心', 'centro de comida de rua', 'xiǎofàn zhōngxīn, os “hawker centres”'],
      ['阿姨', '安娣', 'tia, senhora', 'āndì, do inglês “auntie”'],
      ['烤肉串', '沙爹', 'espetinho com molho de amendoim', 'shādiē, o “satay” malaio'],
    ],
    stories: [
      {
        id: 'zh-h7',
        variant: 'zh-SG',
        level: 'A2.1',
        cefr: 'A2',
        title: '小贩中心的午餐',
        emoji: '🍜',
        summary: 'Em Singapura, o amigo Wei Jie leva Linu para almoçar num hawker centre, e Linu aprende a guardar a mesa com um pacote de lenços.',
        cultural_context:
          'Os 小贩中心 (hawker centres) de Singapura são praças de alimentação com dezenas de barracas, Patrimônio Imaterial da Humanidade desde 2020. Para guardar a mesa, deixa-se um pacote de lenços em cima: o “chope”.',
        start: 'start',
        glossary: [
          ['小贩中心', 'centro de comida de rua (xiǎofàn zhōngxīn)'],
          ['安娣', 'tia, senhora (āndì, “auntie”)'],
          ['沙爹', 'espetinho satay (shādiē)'],
          ['啦', 'lah, partícula que suaviza ou enfatiza'],
          ['纸巾', 'lenço de papel (zhǐjīn)'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: '伟杰说：「我们去小贩中心吃午饭啦！」小贩中心人很多，桌子上都有纸巾。',
            translation: 'Wei Jie diz: “Vamos almoçar no hawker centre, lah!” O lugar está cheio, e todas as mesas têm um pacote de lenços. (Wěijié shuō: “wǒmen qù xiǎofàn zhōngxīn chī wǔfàn lah!” …)',
            choices: [
              { text: '「为什么桌子上有纸巾？」', translation: '“Por que tem lenço nas mesas?” (wèishénme zhuōzi shàng yǒu zhǐjīn?)', next: 'chope' },
              {
                text: '李努拿走一包纸巾，坐下来。',
                translation: 'Linu pega um pacote de lenços e se senta. (Lǐnǔ názǒu yì bāo zhǐjīn, zuò xiàlái)',
                wrong: 'Os lenços estão guardando a mesa para alguém! Em Singapura, um pacote de lenços em cima da mesa quer dizer “ocupado”.',
              },
            ],
          },
          chope: {
            emoji: '🧻',
            text: '伟杰笑了：「纸巾的意思是：这张桌子有人了。」他也放了一包纸巾在空桌子上。',
            translation: 'Wei Jie ri: “O lenço quer dizer: esta mesa está ocupada.” Ele também deixa um pacote de lenços numa mesa vazia. (zhǐjīn de yìsi shì: zhè zhāng zhuōzi yǒu rén le…)',
            choices: [
              { text: '他们去买沙爹。', translation: 'Eles vão comprar satay. (tāmen qù mǎi shādiē)', next: 'satay' },
            ],
          },
          satay: {
            emoji: '🍢',
            text: '卖沙爹的安娣问：「要几支？」李努说：「十支，谢谢安娣！」',
            translation: 'A senhora do satay pergunta: “Quantos espetinhos?” Linu diz: “Dez, obrigado, auntie!” (mài shādiē de āndì wèn: “yào jǐ zhī?” Lǐnǔ shuō: “shí zhī, xièxie āndì!”)',
            choices: [
              { text: '他们回到桌子，一起吃。', translation: 'Eles voltam à mesa e comem juntos. (tāmen huídào zhuōzi, yìqǐ chī)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: '伟杰说：「好吃吗？」李努说：「好吃啦！」伟杰笑：「你会说新加坡华语了！」',
            translation: 'Wei Jie pergunta: “Está gostoso?” Linu diz: “Gostoso, lah!” Wei Jie ri: “Você já fala o mandarim de Singapura!” (hǎochī ma? hǎochī lah!…)',
            ending: {
              tone: 'bom',
              title: '好吃啦！',
              message: 'Você almoçou num hawker centre e aprendeu 小贩中心, 安娣, 沙爹, o “chope” com lenços e a partícula 啦 (lah).',
            },
          },
        },
      },
      {
        id: 'zh-h8',
        variant: 'zh-SG',
        level: 'A2.2',
        cefr: 'A2',
        title: '坐德士去巴刹',
        emoji: '🚕',
        summary: 'Linu acompanha a avó do amigo Wei Jie ao mercado e aprende as palavras do malaio e do inglês no mandarim de Singapura: 德士, 巴刹, 组屋.',
        cultural_context:
          'O mandarim de Singapura pegou palavras do malaio e do inglês: o mercado é o 巴刹 (bāshā, do malaio “pasar”), o táxi é o 德士 (déshì) e os prédios de habitação pública, onde mora a maioria da população, são os 组屋 (zǔwū).',
        start: 'start',
        glossary: [
          ['巴刹', 'mercado (bāshā)'],
          ['德士', 'táxi (déshì)'],
          ['组屋', 'prédio de habitação pública (zǔwū)'],
          ['咯', 'lor, partícula de “é assim mesmo”'],
        ],
        nodes: {
          start: {
            emoji: '🏢',
            text: '伟杰的奶奶住在组屋。她说：「李努，我们坐德士去巴刹，好吗？」',
            translation: 'A avó de Wei Jie mora num prédio de habitação pública. Ela diz: “Linu, vamos de táxi ao mercado?” (Wěijié de nǎinai zhù zài zǔwū…)',
            choices: [
              { text: '「巴刹是什么？」', translation: '“O que é 巴刹?” (bāshā shì shénme?)', next: 'basha' },
            ],
          },
          basha: {
            emoji: '🥬',
            text: '奶奶说：「巴刹就是菜市场。这个词是马来话。」德士来了，他们坐德士去巴刹。',
            translation: 'A avó diz: “巴刹 é o mercado. Essa palavra é do malaio.” O táxi chega, e eles vão de táxi ao mercado. (bāshā jiù shì càishìchǎng. zhè ge cí shì Mǎláihuà…)',
            choices: [
              {
                text: '「所以德士就是出租车！」',
                translation: '“Então 德士 é o táxi!” (suǒyǐ déshì jiù shì chūzūchē!)',
                next: 'mercado',
              },
              {
                text: '「德士是巴士吗？」',
                translation: '“德士 é ônibus?” (déshì shì bāshì ma?)',
                wrong: '德士 (déshì) vem do inglês “taxi”: é o táxi. O ônibus é 巴士 (bāshì).',
              },
            ],
          },
          mercado: {
            emoji: '🐟',
            text: '在巴刹，奶奶买鱼、菜和水果。她说：「巴刹的东西比较新鲜咯。」',
            translation: 'No mercado, a avó compra peixe, verdura e fruta. Ela diz: “No mercado as coisas são mais frescas, lor.” (zài bāshā, nǎinai mǎi yú, cài hé shuǐguǒ…)',
            choices: [
              { text: '李努帮奶奶拿东西。', translation: 'Linu ajuda a avó a carregar as compras. (Lǐnǔ bāng nǎinai ná dōngxī)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '👵',
            text: '奶奶很高兴：「你真乖啦！下次再一起来巴刹。」',
            translation: 'A avó fica contente: “Você é um bom menino, lah! Da próxima vez a gente vem junto ao mercado de novo.” (nǐ zhēn guāi lah! xià cì zài yìqǐ lái bāshā)',
            ending: {
              tone: 'bom',
              title: '巴刹 com a vovó',
              message: 'Você aprendeu as palavras do malaio e do inglês no mandarim de Singapura: 巴刹, 德士, 组屋, e as partículas 啦 e 咯.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── SICHUAN ─────────────────────────────
  // Decisão do dono (10/10/2026): o mandarim de Sichuan é dialeto, por ter gramática própria.
  {
    code: 'zh-sichuan',
    country: 'CHN',
    kind: 'dialeto',
    speechLocale: 'zh-CN',
    name: 'Mandarim de Sichuan (四川话)',
    flag: '🌶️',
    summary:
      'O sichuanês (四川话), o mandarim do sudoeste falado em Sichuan e Chongqing por dezenas de milhões de pessoas, parte do grupo do sudoeste, de uns 260 milhões. Tem tons, consoantes e palavras próprias: 巴适 (ótimo), 要得 (tá bom), 啥子 (o quê).',
    card: {
      id: 'zh-sichuan-c1',
      title: '巴适得很！',
      emoji: '🌶️',
      history:
        'O mandarim do sudoeste (西南官话) é um dos maiores grupos de falares da China, com cerca de 260 milhões de falantes, de Sichuan e Chongqing a Yunnan e Guizhou. O sichuanês se formou em boa parte depois do século XVII, quando a província, despovoada pelas guerras do fim da dinastia Ming, recebeu milhões de migrantes de outras regiões. Ele é mandarim, e quem fala putonghua o entende em parte, mas tem tons diferentes, não tem as consoantes retroflexas e usa muitas palavras e partículas próprias. Em Chengdu, a capital de Sichuan, o dialeto é a língua das casas de chá, do mahjong e da ópera.',
      culture_tip:
        'Sichuan é famosa pela comida apimentada e “anestesiante” (麻辣, málà), com a pimenta de Sichuan que deixa a boca formigando, e pelo 火锅 (huǒguō), o fondue de caldo picante. Em Chengdu, as casas de chá ao ar livre ficam cheias o dia inteiro, e a vida é “慢” (lenta). A ópera de Sichuan tem o 变脸 (biànliǎn), a troca de máscaras num piscar de olhos. E os pandas gigantes vivem nas montanhas da província.',
      grammar_why:
        'O sichuanês tem gramática e vocabulário próprios: (1) partículas e perguntas próprias: “啥子” (sházi, o quê), “要得不？” (está bom?); (2) palavras do dia a dia: 巴适 (bāshì, ótimo, confortável), 要得 (yào de, tá bom), 晓得 (xiǎode, saber), 莫得 (mò de, não tem), 耍 (shuǎ, passear, se divertir); (3) “得很” depois do adjetivo para dizer “muito”: “巴适得很” (ótimo demais); (4) as reduplicações para coisas pequenas e queridas: 豆豆 (feijãozinho), 包包 (bolsinha).',
      grammar_examples: [
        ['你在做啥子？', 'O que você está fazendo? (nǐ zài zuò sházi?) (padrão: 你在做什么？)'],
        ['这个火锅巴适得很！', 'Este hotpot está ótimo demais! (zhège huǒguō bāshì de hěn!) (padrão: 非常好)'],
        ['要得，我们走嘛。', 'Tá bom, vamos. (yào de, wǒmen zǒu ma) (padrão: 好的)'],
        ['我晓得了。', 'Entendi, já sei. (wǒ xiǎode le) (padrão: 我知道了)'],
        ['莫得问题！', 'Sem problema! (mò de wèntí!) (padrão: 没有问题)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Não há consoantes retroflexas: zh, ch, sh soam z, c, s (“是” soa “sì”).',
      'Em muitos lugares, o “n” e o “l” se confundem: “男” e “蓝” soam parecidos.',
      'Os quatro tons existem, mas com contornos diferentes dos de Pequim: o primeiro tom, por exemplo, é mais baixo.',
      'O “-ng” do fim de algumas sílabas vira “-n”: “风” (fēng) soa perto de “fēn”.',
      'A voz do app é a do putonghua: as frases vão soar com a pronúncia padrão.',
    ],
    vocab: [
      ['什么', '啥子', 'o quê', 'sházi'],
      ['很好、舒服', '巴适', 'ótimo, confortável', 'bāshì; “巴适得很” = ótimo demais'],
      ['好的', '要得', 'tá bom, combinado', 'yào de'],
      ['知道', '晓得', 'saber', 'xiǎode'],
      ['没有', '莫得', 'não ter, não há', 'mò de'],
      ['玩', '耍', 'passear, se divertir', 'shuǎ; “出去耍” = sair para passear'],
      ['非常…', '…得很', 'muito', 'depois do adjetivo: 好得很'],
      ['加油', '雄起', 'força! vai!', 'xióngqǐ, o grito das torcidas de Sichuan'],
    ],
    stories: [
      {
        id: 'zh-h9',
        variant: 'zh-sichuan',
        level: 'A2.1',
        cefr: 'A2',
        title: '成都的茶馆',
        emoji: '🍵',
        summary: 'Em Chengdu, a amiga Xiaoyu leva Linu a uma casa de chá ao ar livre, onde os velhinhos jogam mahjong e falam sichuanês.',
        cultural_context:
          'As casas de chá (茶馆) de Chengdu são o centro da vida da cidade: ali se toma chá, se joga mahjong, se conversa e até se limpa o ouvido com um profissional. Fala-se sichuanês, com o “巴适” (ótimo) e o “要得” (tá bom).',
        start: 'start',
        glossary: [
          ['茶馆', 'casa de chá (cháguǎn)'],
          ['巴适', 'ótimo, confortável (bāshì)'],
          ['要得', 'tá bom (yào de)'],
          ['啥子', 'o quê (sházi)'],
          ['麻将', 'mahjong (májiàng)'],
        ],
        nodes: {
          start: {
            emoji: '🍵',
            text: '小雨说：「我们去人民公园的茶馆喝茶，要得不？」',
            translation: 'Xiaoyu diz: “Vamos tomar chá na casa de chá do Parque do Povo, pode ser?” (Xiǎoyǔ shuō: “wǒmen qù Rénmín Gōngyuán de cháguǎn hē chá, yào de bù?”)',
            choices: [
              { text: '「要得！」', translation: '“Pode ser!” (yào de!)', next: 'chaguan' },
              {
                text: '「我不要得。」',
                translation: '“Eu não quero 得.” (wǒ bú yào de)',
                wrong: '“要得不？” é o “pode ser?” de Sichuan, e a resposta é “要得！” (tá bom!). Não tem nada a ver com querer alguma coisa.',
              },
            ],
          },
          chaguan: {
            emoji: '🀄',
            text: '茶馆里，几个老人在打麻将。一个爷爷问李努：「你在看啥子？」',
            translation: 'Na casa de chá, alguns velhinhos jogam mahjong. Um senhor pergunta ao Linu: “O que você está olhando?” (cháguǎn lǐ, jǐ ge lǎorén zài dǎ májiàng. yí ge yéye wèn Lǐnǔ: “nǐ zài kàn sházi?”)',
            choices: [
              { text: '「我在看你们打麻将。」', translation: '“Estou vendo vocês jogarem mahjong.” (wǒ zài kàn nǐmen dǎ májiàng)', next: 'mahjong' },
            ],
          },
          mahjong: {
            emoji: '😄',
            text: '爷爷笑了：「来嘛，我教你！」李努坐下来，喝茶，学打麻将。',
            translation: 'O senhor ri: “Vem, eu te ensino!” Linu se senta, toma chá e aprende a jogar mahjong. (yéye xiào le: “lái ma, wǒ jiāo nǐ!”…)',
            choices: [
              { text: '「这里好巴适哦！」', translation: '“Aqui é ótimo!” (zhèlǐ hǎo bāshì o!)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🍵',
            text: '小雨和爷爷都笑了：「巴适得很！你是半个成都人了！」',
            translation: 'Xiaoyu e o senhor riem: “Ótimo demais! Você já é meio chengduense!” (bāshì de hěn! nǐ shì bàn ge Chéngdū rén le!)',
            ending: {
              tone: 'bom',
              title: '巴适得很！',
              message: 'Você passou a tarde numa casa de chá de Chengdu e aprendeu o sichuanês: 要得, 啥子, 巴适 e 得很.',
            },
          },
        },
      },
      {
        id: 'zh-h10',
        variant: 'zh-sichuan',
        level: 'A2.2',
        cefr: 'A2',
        title: '火锅莫得问题',
        emoji: '🍲',
        summary: 'Num restaurante de hotpot em Chongqing, o amigo Haoran pergunta se Linu aguenta pimenta, e Linu aprende a pedir em sichuanês.',
        cultural_context:
          'O hotpot (火锅) de Chongqing e de Sichuan é um caldo fervente cheio de pimenta e de pimenta de Sichuan, que deixa a boca anestesiada (麻辣). Cada um cozinha a sua carne e os seus legumes na panela no meio da mesa.',
        start: 'start',
        glossary: [
          ['火锅', 'hotpot, o fondue de caldo picante (huǒguō)'],
          ['麻辣', 'apimentado e anestesiante (málà)'],
          ['莫得', 'não tem (mò de)'],
          ['晓得', 'saber (xiǎode)'],
          ['微辣', 'pouco apimentado (wēilà)'],
        ],
        nodes: {
          start: {
            emoji: '🔥',
            text: '浩然问：「你吃得辣不？我们的火锅辣得很哦！」',
            translation: 'Haoran pergunta: “Você aguenta pimenta? O nosso hotpot é apimentado demais!” (Hàorán wèn: “nǐ chī de là bù? wǒmen de huǒguō là de hěn o!”)',
            choices: [
              { text: '「我晓得。要微辣，谢谢！」', translation: '“Eu sei. Quero pouco apimentado, obrigado!” (wǒ xiǎode. yào wēilà, xièxie!)', next: 'pedido' },
              { text: '「莫得问题！要特辣！」', translation: '“Sem problema! Quero extra apimentado!” (mò de wèntí! yào tèlà!)', next: 'picante' },
            ],
          },
          pedido: {
            emoji: '🍲',
            text: '浩然说：「要得！」火锅来了，有很多肉和菜。李努吃了一口：「好吃！」',
            translation: 'Haoran diz: “Combinado!” O hotpot chega, com muita carne e verdura. Linu prova: “Que gostoso!” (yào de! huǒguō lái le…)',
            choices: [
              { text: '「这个火锅巴适得很！」', translation: '“Este hotpot está ótimo demais!” (zhège huǒguō bāshì de hěn!)', next: 'final_bom' },
            ],
          },
          picante: {
            emoji: '🥵',
            text: '火锅来了，红红的。李努吃了一口，嘴巴又麻又辣！浩然大笑：「你说莫得问题嘛！」',
            translation: 'O hotpot chega, todo vermelho. Linu prova, e a boca fica anestesiada e ardendo! Haoran gargalha: “Você disse que não tinha problema!” (huǒguō lái le, hónghóng de…)',
            choices: [
              { text: '「我要喝水！」', translation: '“Quero água!” (wǒ yào hē shuǐ!)', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: '浩然说：「你会说四川话了！下次我们去吃特辣的，雄起！」',
            translation: 'Haoran diz: “Você já fala sichuanês! Da próxima vez a gente come o extra apimentado. Força!” (nǐ huì shuō Sìchuānhuà le! xià cì wǒmen qù chī tèlà de, xióngqǐ!)',
            ending: {
              tone: 'bom',
              title: '雄起！',
              message: 'Você pediu hotpot em sichuanês: 晓得, 要得, 巴适得很, 莫得问题 e 雄起.',
            },
          },
          final_neutro: {
            emoji: '💧',
            text: '浩然给李努一杯水：「慢慢来嘛。下次要微辣！」',
            translation: 'Haoran dá ao Linu um copo de água: “Vai com calma. Da próxima vez, peça pouco apimentado!” (mànmàn lái ma. xià cì yào wēilà!)',
            ending: {
              tone: 'neutro',
              title: 'Boca anestesiada',
              message: 'O 麻辣 de Sichuan não perdoa. Da próxima vez, comece pelo 微辣 (pouco apimentado)!',
            },
          },
        },
      },
    ],
  },
];
