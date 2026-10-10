import type { LanguageVariant } from '../types';

/**
 * Dialetos do japonês (decisão do dono, 09/10/2026): o padrão de Tóquio (o do curso), o Kansai, por
 * ser grupo grande (cerca de 20 milhões de pessoas), e o koronia-go, o japonês da colônia no Brasil,
 * exceção decidida por estar em outro país e misturar o português. Os falares regionais do Japão
 * ficam como sotaques dentro do padrão ou do Kansai. Vocabulário no formato [padrão, dialeto,
 * explicação, nota]; nas histórias, o texto está no japonês de lá e a tradução em português.
 *
 * Fontes: Wikipédia em japonês («近畿方言», «日系ブラジル人» na seção «コロニア語», consultadas em
 * 09/10/2026) e os verbetes de sotaque do app (sotaques.ts), que já citam as fontes deles.
 */
export const VARIANTS_JA: LanguageVariant[] = [
  {
    code: 'ja-JP',
    country: 'JPN',
    kind: 'dialeto',
    speechLocale: 'ja-JP',
    name: 'Japonês padrão (hyōjungo)',
    flag: '🇯🇵',
    summary:
      'O padrão do curso: o japonês da escola, da televisão e dos documentos, com base na fala de Tóquio. É entendido no país inteiro, ao lado dos falares de cada região.',
    card: {
      id: 'ja-jp-c1',
      title: 'Por que o japonês de Tóquio?',
      emoji: '🗼',
      history:
        'Até o século XIX, o japonês de prestígio era o da antiga capital, Quioto. Com a restauração Meiji (1868), a capital passou para Tóquio, e o governo precisou de uma língua comum para a escola, o exército e a imprensa de um país onde os falares de cada região mal se entendiam. O “標準語” (hyōjungo, língua padrão) foi construído a partir da fala das pessoas instruídas de Tóquio e se espalhou pela escola e, a partir de 1925, pelo rádio. Hoje se fala também em “共通語” (kyōtsūgo, língua comum): o japonês que todos entendem, ao lado do falar de casa.',
      culture_tip:
        'Quase todo japonês fala duas coisas: o padrão, na escola e no trabalho, e o falar da sua região, em casa e com os amigos. Trocar de um para o outro é natural, e muitas pessoas têm orgulho do seu sotaque. Para quem aprende, o padrão abre todas as portas; os falares regionais aparecem nesta seção para você reconhecer quando ouvir, em especial o de Osaka, muito presente na comédia e nos animes.',
      grammar_why:
        'Três marcas do padrão que mudam nos outros dialetos: a cópula “だ / です” (no Kansai, “や”), a negação em “〜ない” (no Kansai, “〜へん”) e o acento de altura de Tóquio, que distingue palavras como “はし” (pauzinhos, alta-baixa) e “はし” (ponte, baixa-alta). No Kansai, essa altura sai ao contrário.',
      grammar_examples: [
        ['そうだ。', 'É isso.'],
        ['行かない。', 'Não vou.'],
        ['本当においしいね。', 'É gostoso de verdade, né.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── KANSAI ─────────────────────────────
  {
    code: 'ja-kansai',
    country: 'JPN',
    kind: 'dialeto',
    speechLocale: 'ja-JP',
    name: 'Japonês do Kansai (Kansai-ben)',
    flag: '🐙',
    summary:
      'O dialeto de Osaka, Quioto e Kobe, falado por cerca de 20 milhões de pessoas: a cópula “や”, a negação em “〜へん”, o acento de altura ao contrário do de Tóquio e o humor do manzai.',
    card: {
      id: 'ja-kansai-c1',
      title: 'Meccha Kansai',
      emoji: '🐙',
      history:
        'Durante mais de mil anos, de 794 a 1868, a capital do Japão foi Quioto, no Kansai, e a fala da região era o japonês de prestígio. Osaka, ao lado, foi por séculos a cidade dos comerciantes, a “cozinha do país”. Quando a capital passou para Tóquio, o padrão passou a ser o de lá, mas o Kansai nunca abandonou o seu jeito de falar: é o dialeto mais ouvido no Japão depois do padrão, com a força da comédia de Osaka, da televisão e de muitos personagens de anime.',
      culture_tip:
        'No Kansai, conversar é quase um esporte: um faz o bobo (ボケ, boke) e o outro corrige com uma tirada (ツッコミ, tsukkomi), como os comediantes de manzai. “あほ” (bobo) é quase carinhoso, enquanto “ばか” ofende; em Tóquio é o contrário. Os comerciantes de Osaka cumprimentam com “もうかりまっか？” (está ganhando dinheiro?), e a resposta é “ぼちぼちでんな” (vai indo).',
      grammar_why:
        'A cópula é “や” (ya) em vez de “だ”: “そうや”, “ほんまや”. A negação é “〜へん” ou “〜ん”: “行かへん” (não vou), “分からん” (não sei). No fim da frase, “〜で” e “〜ねん” dão ênfase: “めっちゃおいしいで”, “知ってんねん” (eu sei, ora). E muitas palavras do dia a dia mudam: “ほんま” (verdade), “めっちゃ” (muito), “あかん” (não pode), “おおきに” (obrigado).',
      grammar_examples: [
        ['そうや。', 'É isso.'],
        ['今日は行かへん。', 'Hoje eu não vou.'],
        ['ほんまに、めっちゃおいしいで。', 'É gostoso demais, de verdade.'],
        ['あかん、それはちゃうねん。', 'Não, não é isso, não.'],
        ['これ、なおしといて。', 'Guarda isto aqui pra mim.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O acento de altura segue o sistema de Keihan (Quioto–Osaka), e muitas palavras saem ao contrário de Tóquio: “はし” (pauzinhos) é baixa-alta, e “はし” (ponte), alta-baixa.',
      'As vogais soam inteiras, sem ficar mudas como em Tóquio: “です” é mesmo “desu”, e não “dess”.',
      'As palavras de uma sílaba se alongam: “目” (olho) vira “めえ”, “手” (mão) vira “てえ”, “気” vira “きぃ” (“気ぃつけて”, cuidado).',
    ],
    vocab: [
      ['本当', 'ほんま', 'verdade (honma)'],
      ['とても', 'めっちゃ', 'muito (meccha)'],
      ['だめ', 'あかん', 'não pode, não dá (akan)'],
      ['ありがとう', 'おおきに', 'obrigado (ōkini)', 'hoje mais dos comerciantes e dos mais velhos'],
      ['違う', 'ちゃう', 'não é, está errado (chau)'],
      ['疲れた', 'しんどい', 'cansativo, exausto (shindoi)'],
      ['片付ける', 'なおす', 'guardar (naosu)', 'em Tóquio, “なおす” é consertar'],
      ['捨てる', 'ほかす', 'jogar fora (hokasu)'],
      ['面白い', 'おもろい', 'engraçado, interessante (omoroi)'],
      ['〜だ', '〜や', 'cópula (ser)', '“そうや” = “そうだ”'],
      ['〜ない', '〜へん', 'negação', '“行かへん” = “行かない”'],
      ['マック', 'マクド', 'o McDonald’s (makudo)', 'em Tóquio, “マック”'],
    ],
    stories: [
      {
        id: 'ja-kansai-h1',
        variant: 'ja-kansai',
        level: 'A2.2',
        cefr: 'A2',
        title: 'たこ焼きと道頓堀',
        emoji: '🐙',
        summary: 'Em Osaka, a amiga Ayaka leva o Linu ao Dōtonbori para comer takoyaki e ensina o “めっちゃ”, o “ほんま” e o “おおきに”.',
        cultural_context:
          'O Dōtonbori é a rua de Osaka à beira de um canal, cheia de luzes e de letreiros gigantes, como o do corredor da Glico. Osaka é chamada de “cozinha do Japão”, e o takoyaki, bolinho de massa com pedaço de polvo, é a comida de rua mais famosa da cidade. Nesta história, todos falam o Kansai-ben de Osaka.',
        start: 'start',
        glossary: [
          ['めっちゃ', 'muito'],
          ['ほんま', 'verdade'],
          ['おおきに', 'obrigado'],
          ['しんどい', 'cansativo'],
          ['あかん', 'não pode, não dá'],
          ['〜や / 〜で', 'cópula e ênfase do Kansai'],
        ],
        nodes: {
          start: {
            emoji: '🌃',
            text: 'ここは大阪の道頓堀や。川の上に大きい看板がいっぱいあるで。友だちのアヤカが言うた。「リヌ、たこ焼き食べに行こか！めっちゃおいしい店、知ってんねん。」',
            translation: 'Aqui é o Dōtonbori, em Osaka. Em cima do canal tem um monte de letreiros enormes. A amiga Ayaka disse: “Linu, vamos comer takoyaki! Eu conheço uma loja muito boa.”',
            choices: [
              { text: '「行こ、行こ！」', translation: '“Vamos, vamos!”', next: 'mise' },
              {
                text: 'Linu acha que “めっちゃ” é o nome da loja.',
                translation: 'Linu acha que “めっちゃ” é o nome da loja.',
                wrong: 'No Kansai, “めっちゃ” quer dizer “muito”. A Ayaka disse que conhece uma loja muito boa!',
              },
            ],
          },
          mise: {
            emoji: '🧍',
            text: '店の前に長い列があるわ。「並ぶの、しんどいなあ」とリヌが言うた。アヤカは笑た。「大阪の人はな、おいしい店やったら並ぶねん。」',
            translation: 'Na frente da loja tem uma fila comprida. “Que canseira ficar na fila”, disse o Linu. A Ayaka riu: “O povo de Osaka, se a loja é boa, fica na fila.”',
            choices: [
              { text: 'いっしょに並ぶ。', translation: 'Entra na fila com ela.', next: 'takoyaki' },
              { text: 'となりの店に行こうと言う。', translation: 'Sugere ir à loja do lado.', next: 'tonari' },
            ],
          },
          tonari: {
            emoji: '🙅',
            text: 'となりの店は空いてる。でもアヤカは首をふった。「あかん、あかん。あそこはちゃうねん。ここが一番や。」',
            translation: 'A loja do lado está vazia. Mas a Ayaka balançou a cabeça: “Não, não. Lá não é a mesma coisa. Aqui é a melhor.”',
            choices: [{ text: 'やっぱり並ぶ。', translation: 'No fim, entra na fila.', next: 'takoyaki' }],
          },
          takoyaki: {
            emoji: '🐙',
            text: 'やっと、たこ焼きが来た！熱々や。店のおっちゃんが言うた。「気ぃつけてや、めっちゃ熱いで。」',
            translation: 'Enfim chegou o takoyaki! Está pelando. O tiozinho da loja disse: “Cuidado, que está muito quente.”',
            choices: [
              { text: 'ゆっくり、ふうふうして食べる。', translation: 'Come devagar, soprando.', next: 'final_bom' },
              { text: '一口で食べる。', translation: 'Come de uma bocada só.', next: 'final_atsui' },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: '「ほんまにおいしい！」リヌが言うと、おっちゃんが笑た。「おおきに！また来てや！」',
            translation: '“É gostoso de verdade!”, disse o Linu, e o tiozinho riu: “Obrigado! Volte sempre!”',
            ending: {
              tone: 'bom',
              title: 'おおきに！',
              message: 'Você comeu takoyaki no Dōtonbori e aprendeu “めっちゃ”, “ほんま”, “あかん” e “おおきに”, palavras do Kansai.',
            },
          },
          final_atsui: {
            emoji: '🥵',
            text: '「あつっ！」リヌは口の中をやけどしてしもた。アヤカが水をくれた。「せやから言うたやん！」',
            translation: '“Ai, quente!” O Linu queimou a boca. A Ayaka deu água para ele: “Eu não te falei?!”',
            ending: {
              tone: 'neutro',
              title: 'せやから言うたやん',
              message: 'Takoyaki se come devagar. E “せやから言うたやん” é o “eu não te falei?” do Kansai.',
            },
          },
        },
      },
      {
        id: 'ja-kansai-h2',
        variant: 'ja-kansai',
        level: 'B1.2',
        cefr: 'B1',
        title: 'なんでやねん！',
        emoji: '🎤',
        summary: 'Em Osaka, o Linu assiste a um espetáculo de manzai, aprende o que é boke e tsukkomi e cai na pegadinha do “なおす”.',
        cultural_context:
          'O manzai é a comédia em dupla: um faz o bobo (ボケ, boke) e o outro corrige com uma tirada (ツッコミ, tsukkomi), muitas vezes com um “なんでやねん！” (mas como assim?!). Osaka é a capital do manzai, com teatros de comédia no bairro de Namba. No Kansai, “なおす” quer dizer guardar, e não consertar, como em Tóquio.',
        start: 'start',
        glossary: [
          ['なんでやねん', 'mas como assim?! (a tirada do tsukkomi)'],
          ['ボケ / ツッコミ', 'o que faz o bobo / o que corrige'],
          ['なおす', 'guardar (no Kansai)'],
          ['おもろい', 'engraçado'],
          ['あほ', 'bobo (no Kansai, quase carinhoso)'],
        ],
        nodes: {
          start: {
            emoji: '🎭',
            text: '難波の劇場で、リヌとアヤカは漫才を見てる。ステージに二人の芸人が出てきた。背の高い方がボケで、低い方がツッコミや、とアヤカが教えてくれた。',
            translation: 'Num teatro de Namba, o Linu e a Ayaka assistem a um manzai. Dois comediantes entram no palco. A Ayaka explica que o alto é o boke e o baixo é o tsukkomi.',
            choices: [{ text: '漫才を見る。', translation: 'Assiste ao manzai.', next: 'manzai' }],
          },
          manzai: {
            emoji: '🤣',
            text: 'ボケの芸人が言うた。「おれ、昨日ペンギンと一緒にマクド行ってん。」ツッコミがすぐ頭をたたいた。「なんでやねん！大阪にペンギンおらんやろ！」会場のみんなが笑た。アヤカがリヌを見た。「おるやん、ここに。」',
            translation: 'O comediante boke disse: “Ontem eu fui ao McDonald’s com um pinguim.” O tsukkomi bateu na cabeça dele na hora: “Como assim?! Não tem pinguim em Osaka!” A plateia inteira riu. A Ayaka olhou para o Linu: “Tem, sim. Aqui.”',
            choices: [
              { text: 'リヌも笑って、「なんでやねん！」と言う。', translation: 'O Linu também ri e diz: “Como assim?!”', next: 'casa' },
              {
                text: 'Linu acha que o tsukkomi bateu no colega de verdade, por raiva.',
                translation: 'Linu acha que o tsukkomi bateu no colega de verdade, por raiva.',
                wrong: 'É parte do número: o tsukkomi “corrige” o bobo com um tapinha e uma tirada. No manzai, é assim que nasce a piada.',
              },
            ],
          },
          casa: {
            emoji: '🏠',
            text: 'そのあと、アヤカの家に行った。アヤカのお母さんがリヌのかばんを見て言うた。「リヌくん、そのかばん、そこになおしといてな。」',
            translation: 'Depois, foram à casa da Ayaka. A mãe dela viu a mochila do Linu e disse: “Linu, guarda essa mochila ali, tá?”',
            choices: [
              { text: 'かばんを棚にしまう。', translation: 'Guarda a mochila na prateleira.', next: 'final_bom' },
              {
                text: 'Linu procura uma ferramenta para consertar a mochila.',
                translation: 'Linu procura uma ferramenta para consertar a mochila.',
                wrong: 'No Kansai, “なおす” quer dizer guardar. A mãe da Ayaka só pediu para ele guardar a mochila!',
              },
              { text: '「なおす？かばん、こわれてへんで」と言う。', translation: 'Diz: “Consertar? A mochila não está quebrada.”', next: 'confusao' },
            ],
          },
          confusao: {
            emoji: '😂',
            text: 'お母さんとアヤカが大笑いした。「ちゃうちゃう、なおすは片付けるっちゅう意味や。リヌくん、ええボケやったで！」',
            translation: 'A mãe e a Ayaka caíram na risada. “Não, não: ‘なおす’ quer dizer guardar. Linu, foi um ótimo boke!”',
            choices: [{ text: 'かばんを棚にしまう。', translation: 'Guarda a mochila na prateleira.', next: 'final_bom' }],
          },
          final_bom: {
            emoji: '🍵',
            text: 'お母さんがお茶を出してくれた。「おもろい子やなあ。また来てな。」リヌは笑て答えた。「おおきに！」',
            translation: 'A mãe serviu um chá. “Que menino engraçado. Volte sempre, viu.” O Linu respondeu rindo: “Obrigado!”',
            ending: {
              tone: 'bom',
              title: 'ええボケやった',
              message: 'Você viu um manzai, entendeu o boke e o tsukkomi e aprendeu que, no Kansai, “なおす” é guardar.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── KORONIA-GO ─────────────────────────────
  {
    code: 'ja-BR',
    country: 'BRA',
    kind: 'dialeto',
    speechLocale: 'ja-JP',
    name: 'Japonês da colônia no Brasil (koronia-go)',
    flag: '🇧🇷',
    summary:
      'O japonês dos imigrantes e dos seus filhos no Brasil, com palavras portuguesas no meio: “オニブス” (ônibus), “カミニョン” (caminhão), “フェイラ” (feira). Também guardou palavras e nomes que no Japão caíram em desuso.',
    card: {
      id: 'ja-br-c1',
      title: 'Koronia: o japonês que mora no Brasil',
      emoji: '☕',
      history:
        'Em 1908, o navio Kasato Maru chegou a Santos com os primeiros 781 imigrantes japoneses, contratados para as fazendas de café. Vieram muitos outros, de várias províncias, e o Brasil tem hoje a maior comunidade de origem japonesa fora do Japão. Entre os imigrantes (issei), educados em japonês, e os filhos e netos (nissei, sansei), educados em português, nasceu a “コロニア語” (koronia-go), a língua da “colônia”: japonês com palavras portuguesas, encaixadas na gramática japonesa. Desde o fim dos anos 1980, com os “dekasseguis” que foram trabalhar no Japão, ela ganhou palavras novas.',
      culture_tip:
        'Na colônia, “ガイジン” (gaijin, estrangeiro) é o brasileiro sem ascendência japonesa, mesmo no Brasil, e “日本人” muitas vezes é o próprio nikkei. Os lugares do Brasil ganharam nomes em kanji pouco usados no Japão: “伯国” é o Brasil, “聖市” é a cidade de São Paulo e “南大河州” é o Rio Grande do Sul. O bairro da Liberdade, em São Paulo, com o Museu Histórico da Imigração Japonesa, é o coração da comunidade.',
      grammar_why:
        'O traço mais forte do koronia-go é encaixar palavras portuguesas na gramática japonesa, com as partículas e os verbos do japonês: “オニブスで行く” (ir de ônibus), “フェイラに行く” (ir à feira). Muitas vezes entra uma expressão portuguesa inteira como se fosse um substantivo: “ポル・ジア” (por dia, a diária) e “マタ・ビッショ” (mata-bicho, aqui o veneno contra as pragas da lavoura). A pronúncia segue o japonês: “ミル” (mil), “トマテ” (tomate), “ドトール” (doutor), diferentes da pronúncia brasileira.',
      grammar_examples: [
        ['オニブスでフェイラに行こう。', 'Vamos de ônibus para a feira.'],
        ['カミニョンでトマテを運んだ。', 'Levamos os tomates de caminhão.'],
        ['ポル・ジアで働いた。', 'Trabalhei por diária.'],
        ['あのガイジンさん、日本語が上手ね。', 'Aquele brasileiro (não descendente) fala bem japonês, né.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'As palavras portuguesas entram com a pronúncia japonesa, em katakana: “ミル” (mil), “トマテ” (tomate), “カマ” (cama), “ドトール” (doutor), “ジネロ” (dinheiro).',
      'Como os imigrantes vieram de várias províncias, muitas do oeste e do sul (Kumamoto, Fukuoka, Hiroshima, Okinawa…), o japonês da colônia guarda traços desses falares, como o “〜けん” (porque) de Kyūshū e de Hiroshima.',
    ],
    vocab: [
      ['バス', 'オニブス', 'ônibus'],
      ['トラック', 'カミニョン', 'caminhão'],
      ['朝市、市場', 'フェイラ', 'feira livre'],
      ['雇い主、農場主', 'パトロン', 'patrão'],
      ['農場の労働者', 'カマラーダ', 'peão, trabalhador rural', 'de “camarada”'],
      ['日給', 'ポル・ジア', 'diária', 'de “por dia”'],
      ['外国人', 'ガイジン', 'brasileiro não descendente', 'no Japão, qualquer estrangeiro'],
      ['ブラジル', '伯国', 'o Brasil', 'nome em kanji'],
      ['サンパウロ市', '聖市', 'a cidade de São Paulo', 'nome em kanji'],
      ['（移民の）振り分け', 'ハイコー（配耕）', 'a distribuição dos imigrantes pelas fazendas', 'hoje também a dos dekasseguis pelas fábricas'],
    ],
    stories: [
      {
        id: 'ja-br-h1',
        variant: 'ja-BR',
        level: 'A2.2',
        cefr: 'A2',
        title: 'リベルダーデのフェイラ',
        emoji: '🏮',
        summary: 'Em São Paulo, a avó Haruko, imigrante, leva o Linu e o neto Lucas de ônibus à feira da Liberdade e mistura japonês e português o tempo todo.',
        cultural_context:
          'O bairro da Liberdade, em São Paulo, é o centro da comunidade japonesa no Brasil, com lanternas vermelhas nas ruas e uma feira de comidas e artesanato nos fins de semana, na praça da Liberdade. Os imigrantes mais velhos falam o japonês da colônia, com palavras portuguesas no meio, e os netos falam sobretudo português.',
        start: 'start',
        glossary: [
          ['オニブス', 'ônibus'],
          ['フェイラ', 'feira'],
          ['パステル', 'pastel'],
          ['ガイジン', 'brasileiro não descendente'],
          ['〜けん', 'porque (falar do oeste do Japão)'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'はるこおばあちゃんが言った。「今日はリベルダーデのフェイラに行こう。オニブスで行くけん、早う準備しなさい。」孫のルーカスは笑った。「ばあちゃん、オニブスは日本語じゃないよ。」',
            translation: 'A vó Haruko disse: “Hoje vamos à feira da Liberdade. Vamos de ônibus, então se arrumem logo.” O neto, Lucas, riu: “Vó, ‘ônibus’ não é japonês.”',
            choices: [
              { text: 'リヌもいっしょに行く。', translation: 'O Linu vai junto.', next: 'onibus' },
              {
                text: 'Linu acha que “オニブス” é uma palavra japonesa antiga.',
                translation: 'Linu acha que “オニブス” é uma palavra japonesa antiga.',
                wrong: '“オニブス” é o “ônibus” do português, com a pronúncia japonesa. Na colônia, quase ninguém diz “バス”, como no Japão.',
              },
            ],
          },
          onibus: {
            emoji: '🏮',
            text: 'オニブスを降りると、赤い提灯が見えた。フェイラには、焼きそばやパステル、お餅の店がならんでいる。',
            translation: 'Quando descem do ônibus, veem as lanternas vermelhas. Na feira, há barracas de yakisoba, de pastel e de mochi.',
            choices: [
              { text: 'パステルを食べる。', translation: 'Come um pastel.', next: 'pastel' },
              { text: '焼きそばを食べる。', translation: 'Come yakisoba.', next: 'pastel' },
            ],
          },
          pastel: {
            emoji: '🥟',
            text: '店の人はガイジンのお兄さんだった。おばあちゃんはポルトガル語で注文した。「Dois pastéis, por favor.」それから日本語で言った。「わたしのポルトガル語、上手でしょ？」',
            translation: 'Quem atendia na barraca era um rapaz brasileiro, não descendente. A avó pediu em português: “Dois pastéis, por favor.” E depois disse em japonês: “Meu português é bom, né?”',
            choices: [
              { text: '「すごい！」と言う。', translation: 'Diz: “Incrível!”', next: 'final_bom' },
              {
                text: 'Linu acha que a avó chamou o rapaz de estrangeiro por ele não ser do Brasil.',
                translation: 'Linu acha que a avó chamou o rapaz de estrangeiro por ele não ser do Brasil.',
                wrong: 'Na colônia, “ガイジン” é o brasileiro sem ascendência japonesa, mesmo sendo do Brasil. O rapaz é brasileiro!',
              },
            ],
          },
          final_bom: {
            emoji: '😊',
            text: 'おばあちゃんは笑った。「六十年もブラジルにおるけんね。」ルーカスが言った。「ばあちゃんの日本語は、半分ポルトガル語だよ。」みんな笑った。',
            translation: 'A avó riu: “Faz sessenta anos que eu moro no Brasil.” O Lucas disse: “O japonês da vó é metade português.” Todos riram.',
            ending: {
              tone: 'bom',
              title: '半分ポルトガル語',
              message: 'Você ouviu o koronia-go: “オニブス”, “フェイラ” e “ガイジン” no sentido da colônia.',
            },
          },
        },
      },
      {
        id: 'ja-br-h2',
        variant: 'ja-BR',
        level: 'B1.2',
        cefr: 'B1',
        title: '配耕の話',
        emoji: '🚢',
        summary: 'No Museu Histórico da Imigração Japonesa, o avô Kenji conta ao Linu como os imigrantes eram distribuídos pelas fazendas (a “haikō”) e como o japonês ganhou palavras portuguesas.',
        cultural_context:
          'O Museu Histórico da Imigração Japonesa no Brasil fica no bairro da Liberdade, em São Paulo. Os primeiros imigrantes chegaram em 1908 no navio Kasato Maru e foram para as fazendas de café do interior paulista, onde trabalhavam para um patrão, ao lado dos peões brasileiros. A palavra “配耕” (haikō), da colônia, designava essa distribuição dos recém-chegados pelas fazendas.',
        start: 'start',
        glossary: [
          ['配耕（ハイコー）', 'a distribuição dos imigrantes pelas fazendas'],
          ['パトロン', 'patrão'],
          ['カマラーダ', 'peão, trabalhador rural'],
          ['カミニョン', 'caminhão'],
          ['聖市', 'a cidade de São Paulo'],
        ],
        nodes: {
          start: {
            emoji: '🖼️',
            text: '博物館の中に、笠戸丸の写真があった。けんじおじいさんが言った。「わしの父ちゃんは、この船の次の船で伯国に来たんじゃ。」',
            translation: 'Dentro do museu tinha uma foto do Kasato Maru. O avô Kenji disse: “Meu pai veio para o Brasil no navio seguinte a este.”',
            choices: [
              { text: '「伯国って何ですか？」と聞く。', translation: 'Pergunta: “O que é ‘Hakukoku’?”', next: 'hakukoku' },
              { text: '写真をよく見る。', translation: 'Olha a foto com atenção.', next: 'haiko' },
            ],
          },
          hakukoku: {
            emoji: '🇧🇷',
            text: '「伯国はブラジルのことじゃ。コロニアでは、サンパウロ市を聖市と書くんよ。日本の人は、あんまり知らんがね。」',
            translation: '“‘Hakukoku’ é o Brasil. Na colônia, a cidade de São Paulo se escreve ‘聖市’. O pessoal do Japão quase não conhece.”',
            choices: [{ text: '話の続きを聞く。', translation: 'Ouve a continuação da história.', next: 'haiko' }],
          },
          haiko: {
            emoji: '☕',
            text: '「船を降りたら、ハイコーがあった。家族ごとに、どのファゼンダで働くか決められたんじゃ。父ちゃんはカミニョンでコーヒーのファゼンダに運ばれて、パトロンのもとで、カマラーダといっしょに働いた。」',
            translation: '“Quando desceram do navio, veio a ‘haikō’: decidiam em que fazenda cada família ia trabalhar. Meu pai foi levado de caminhão para uma fazenda de café e trabalhou para um patrão, junto com os peões.”',
            choices: [
              { text: '「大変でしたね」と言う。', translation: 'Diz: “Deve ter sido difícil.”', next: 'palavras' },
              {
                text: 'Linu entende que “ハイコー” era uma festa de boas-vindas no porto.',
                translation: 'Linu entende que “ハイコー” era uma festa de boas-vindas no porto.',
                wrong: '“配耕” (haikō) era a distribuição dos imigrantes pelas fazendas. Não tinha nada de festa: cada família era mandada para um lugar.',
              },
            ],
          },
          palavras: {
            emoji: '💬',
            text: '「大変じゃった。言葉もわからんけん、ポルトガル語の言葉を覚えて、日本語の中に入れて使うたんよ。カミニョン、パトロン、フェイラ……それがコロニア語になったんじゃ。」',
            translation: '“Foi difícil. Como ninguém sabia a língua, aprendiam palavras portuguesas e usavam no meio do japonês. Caminhão, patrão, feira… Foi assim que nasceu o koronia-go.”',
            choices: [
              { text: 'おじいさんにお礼を言う。', translation: 'Agradece ao avô.', next: 'final_bom' },
              { text: 'もっと昔の写真を見に行く。', translation: 'Vai ver mais fotos antigas.', next: 'final_fotos' },
            ],
          },
          final_bom: {
            emoji: '🙏',
            text: '「話してくれて、ありがとうございました。」おじいさんは笑った。「若い人が聞いてくれるのが、一番うれしいんじゃ。」',
            translation: '“Obrigado por me contar.” O avô sorriu: “O que mais me alegra é quando um jovem vem ouvir.”',
            ending: {
              tone: 'bom',
              title: 'コロニアの言葉',
              message: 'Você aprendeu a história do koronia-go: a “haikō”, a “パトロン”, a “カマラーダ” e os nomes em kanji do Brasil.',
            },
          },
          final_fotos: {
            emoji: '📷',
            text: 'リヌは古い写真を一枚ずつ見た。コーヒー畑、木の家、日本語の学校。いつか、この話をだれかに伝えたいと思った。',
            translation: 'O Linu olhou as fotos antigas uma por uma: cafezais, casas de madeira, escolas de japonês. Pensou que um dia queria passar essa história adiante.',
            ending: {
              tone: 'bom',
              title: '古い写真',
              message: 'As fotos do museu contam a história de mais de um século de japoneses no Brasil.',
            },
          },
        },
      },
    ],
  },
];
