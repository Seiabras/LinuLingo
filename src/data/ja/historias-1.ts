import type { StorySeed } from '../types';

/** Histórias do A1.1 ao B1.3. */
export const STORIES_JA_1: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'ja-h01',
    level: 'A1.1',
    cefr: 'A1',
    title: 'よるのコンビニ',
    emoji: '🏪',
    summary: 'Em Tóquio, já é noite e o Linu está com fome: ele entra numa konbini, escolhe o jantar e responde às perguntas do caixa.',
    cultural_context:
      'As konbini (lojas de conveniência) ficam abertas vinte e quatro horas e estão em quase toda esquina do Japão: são mais de cinquenta mil no país. Além de onigiri, bentô e bebidas, nelas se pagam contas, se imprimem documentos e se compram ingressos. No caixa, o atendente pergunta se você quer o bentô esquentado no micro-ondas («あたためますか？») e se precisa de hashi; a sacola plástica é cobrada desde 2020.',
    start: 'start',
    glossary: [
      ['いらっしゃいませ', 'Seja bem-vindo! (o que os atendentes dizem quando você entra; não precisa responder)'],
      ['おなかがすいています', 'estou com fome (literalmente, «a barriga está vazia»)'],
      ['おべんとう', 'bentô, marmita pronta numa caixinha'],
      ['五百五十円', 'quinhentos e cinquenta ienes (五 go = cinco, 百 hyaku = cem, 十 jū = dez)'],
      ['あたためますか？', 'Quer que eu esquente? (atatamemasu ka: o «ka» no fim faz a pergunta, como o nosso ponto de interrogação)'],
      ['おねがいします', 'por favor (ao aceitar ou pedir algo)'],
      ['おはし', 'hashi, os pauzinhos (o «o» na frente deixa a palavra mais educada)'],
      ['いります・いりません', 'preciso / não preciso'],
    ],
    nodes: {
      start: {
        emoji: '🌃',
        text: 'ここは東京です。いまはよるです。リヌはおなかがすいています。',
        translation: 'Aqui é Tóquio. Agora é noite. O Linu está com fome.',
        choices: [
          { text: 'コンビニにいきます。', translation: 'Vai à konbini.', next: 'konbini' },
          { text: 'ラーメンやさんにいきます。', translation: 'Vai a uma casa de ramen.', next: 'ramen' },
        ],
      },
      ramen: {
        emoji: '🍜',
        text: 'ラーメンやさんは、もうしまっています。ざんねん！でも、あそこにコンビニがあります。',
        translation: 'A casa de ramen já está fechada. Que pena! Mas ali tem uma konbini.',
        choices: [{ text: 'コンビニにいきます。', translation: 'Vai à konbini.', next: 'konbini' }],
      },
      konbini: {
        emoji: '🏪',
        text: '「いらっしゃいませ！」おにぎり、おべんとう、パン、アイス……いろいろあります。',
        translation: '«Seja bem-vindo!» Onigiri, bentô, pão, sorvete… tem de tudo.',
        choices: [
          { text: 'からあげべんとうをとります。', translation: 'Pega um bentô de frango frito.', next: 'reji' },
          { text: 'アイスをとります。', translation: 'Pega um sorvete.', next: 'aisu' },
        ],
      },
      aisu: {
        emoji: '🍦',
        text: 'アイスはつめたいです。リヌはアイスがだいすきです。でも、ばんごはんは？',
        translation: 'O sorvete é gelado. O Linu adora sorvete. Mas e o jantar?',
        choices: [{ text: 'アイスをもどして、からあげべんとうをとります。', translation: 'Devolve o sorvete e pega um bentô de frango frito.', next: 'reji' }],
      },
      reji: {
        emoji: '🧑‍💼',
        text: '「からあげべんとうですね。五百五十円です。あたためますか？」',
        translation: '«Um bentô de frango frito, certo? São quinhentos e cinquenta ienes. Quer que eu esquente?»',
        choices: [
          { text: '「はい、おねがいします。」', translation: '«Sim, por favor.»', next: 'hashi' },
          {
            text: 'リヌは五十円をだします。',
            translation: 'O Linu entrega cinquenta ienes.',
            wrong:
              'O caixa disse «五百五十円» (gohyaku gojū en): QUINHENTOS e cinquenta ienes. 五十 (gojū) sozinho é só cinquenta; 五百 (gohyaku) é quinhentos.',
          },
        ],
      },
      hashi: {
        emoji: '🥢',
        text: 'チン！おべんとうはあたたかいです。「おはしはいりますか？」',
        translation: 'Plim! O bentô está quentinho. «Precisa de hashi?»',
        choices: [
          { text: '「はい、おねがいします！」', translation: '«Sim, por favor!»', next: 'final_bom' },
          { text: '「いいえ、いりません。」', translation: '«Não, não preciso.»', next: 'final_sem' },
        ],
      },
      final_bom: {
        emoji: '🍱',
        text: 'リヌはホテルでおべんとうをたべます。からあげはあたたかいです。とてもおいしいです！',
        translation: 'O Linu come o bentô no hotel. O frango frito está quentinho. Muito gostoso!',
        ending: { tone: 'bom', title: 'Jantar quentinho', message: 'O Linu jantou um bentô de konbini quentinho, com hashi e tudo.' },
      },
      final_sem: {
        emoji: '😅',
        text: 'ホテルで……あれ？おはしがありません！リヌはペンギンです。手がありません。こまりました！',
        translation: 'No hotel… Ué? Não tem hashi! O Linu é um pinguim. Não tem mãos. E agora?',
        ending: {
          tone: 'neutro',
          title: 'Bentô sem hashi',
          message: 'Quando o caixa perguntar «おはしはいりますか？» (precisa de hashi?), responda «はい»: sem eles, fica difícil comer!',
        },
      },
    },
  },
  {
    id: 'ja-h02',
    level: 'A1.1',
    cefr: 'A1',
    title: 'おじぎのじょうずなしか',
    emoji: '🦌',
    summary: 'No parque de Nara, o Linu compra biscoitos para os cervos e descobre que eles sabem fazer reverência.',
    cultural_context:
      'No Parque de Nara vivem mais de mil cervos soltos. Pela tradição do santuário Kasuga-taisha, eles são mensageiros dos deuses, e hoje são protegidos por lei como monumento natural. Nas barracas se vendem os «shika senbei», biscoitos de farinha e farelo de arroz feitos só para eles; muitos cervos aprenderam a abaixar a cabeça, como numa reverência, para ganhar um.',
    start: 'start',
    glossary: [
      ['しか', 'cervo (os de Nara são mensageiros dos deuses)'],
      ['しかせんべい', 'biscoito para os cervos (senbei é biscoito; o dos cervos não é para gente!)'],
      ['の', 'de (liga as palavras: しかのおやつ = lanche de cervo)'],
      ['一つください', 'um, por favor (ください = me dê, por favor)'],
      ['大きい・小さい', 'grande / pequeno (ōkii, chiisai)'],
      ['あたまをさげます', 'abaixa a cabeça'],
      ['おじぎ', 'reverência: curvar-se para cumprimentar ou agradecer'],
      ['どうぞ', 'pode pegar, fique à vontade (ao oferecer algo)'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'ここは日本の奈良です。大きいこうえんです。しかがたくさんいます！',
        translation: 'Aqui é Nara, no Japão. É um parque grande. Há muitos cervos!',
        choices: [
          { text: 'しかをかぞえます。', translation: 'Conta os cervos.', next: 'contar' },
          { text: 'しかせんべいのみせにいきます。', translation: 'Vai à barraca de biscoito para cervos.', next: 'mise' },
        ],
      },
      contar: {
        emoji: '🔢',
        text: '一、二、三、四、五、六、七、八、九、十……しかがいっぱいです！',
        translation: 'Um, dois, três, quatro, cinco, seis, sete, oito, nove, dez… É cervo que não acaba mais!',
        choices: [{ text: 'しかせんべいのみせにいきます。', translation: 'Vai à barraca de biscoito para cervos.', next: 'mise' }],
      },
      mise: {
        emoji: '👵',
        text: 'おばあさんがいます。「いらっしゃい！しかせんべいです。しかのおやつですよ。」',
        translation: 'Tem uma senhora. «Olá, freguês! É shika senbei. É o lanchinho dos cervos.»',
        choices: [
          { text: '「一つください。」', translation: '«Um, por favor.»', next: 'senbei' },
          {
            text: 'リヌはせんべいをたべます。',
            translation: 'O Linu come o biscoito.',
            wrong:
              'A senhora disse «しかのおやつ» (shika no oyatsu): é o lanche DOS CERVOS, não de pinguins! O «の» (no) liga as palavras como o nosso «de»: しかのおやつ = lanche de cervo.',
          },
        ],
      },
      senbei: {
        emoji: '🦌',
        text: 'しかがきます。大きいしかと小さいしかです。しかはあたまをさげます。おじぎです！',
        translation: 'Vêm uns cervos: um grande e um pequeno. Eles abaixam a cabeça. É uma reverência!',
        choices: [
          { text: 'リヌもおじぎをします。', translation: 'O Linu também faz uma reverência.', next: 'ojigi' },
          { text: 'リヌははしります。', translation: 'O Linu sai correndo.', next: 'correr' },
        ],
      },
      correr: {
        emoji: '💨',
        text: 'しかたちも、はしってきます！しかたちは、せんべいがほしいです。',
        translation: 'Os cervos também vêm correndo! Eles querem o biscoito.',
        choices: [{ text: 'リヌはとまって、おじぎをします。', translation: 'O Linu para e faz uma reverência.', next: 'ojigi' }],
      },
      ojigi: {
        emoji: '🙇',
        text: 'リヌはあたまをさげます。「どうぞ！」大きいしかはせんべいをたべます。小さいしかはリヌを見ます。',
        translation: 'O Linu abaixa a cabeça. «Pode pegar!» O cervo grande come o biscoito. O cervo pequeno olha para o Linu.',
        choices: [
          { text: '小さいしかにもせんべいをあげます。', translation: 'Dá biscoito também para o cervo pequeno.', next: 'final_bom' },
          { text: 'せんべいをぜんぶ大きいしかにあげます。', translation: 'Dá todos os biscoitos para o cervo grande.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'こんどは、小さいしかがおじぎをします。しかたちはうれしいです。リヌもうれしいです！',
        translation: 'Agora é o cervo pequeno que faz reverência. Os cervos estão felizes. O Linu também!',
        ending: {
          tone: 'bom',
          title: 'Amigo dos cervos',
          message: 'O Linu dividiu os biscoitos e aprendeu a cumprimentar como os cervos de Nara: com uma reverência.',
        },
      },
      final_neutro: {
        emoji: '🥺',
        text: '大きいしかはうれしいです。でも、小さいしかはかなしいです。せんべいは、もうありません。',
        translation: 'O cervo grande está feliz. Mas o pequeno está triste. Os biscoitos acabaram.',
        ending: {
          tone: 'neutro',
          title: 'Faltou para o pequeno',
          message: 'O cervo pequeno também fez fila! Da próxima vez, divida: um biscoito para cada um.',
        },
      },
    },
  },
  {
    id: 'ja-h03',
    level: 'A1.1',
    cefr: 'A1',
    title: '鎌倉のだいぶつ',
    emoji: '🗿',
    summary: 'Em Kamakura, o Linu visita o Grande Buda de bronze, descobre a altura dele e fica sabendo que dá para entrar dentro da estátua.',
    cultural_context:
      'Kamakura foi a sede do governo dos samurais no século XIII e fica a uma hora de trem de Tóquio. O Grande Buda (大仏, daibutsu) do templo Kōtoku-in é de bronze, tem cerca de onze metros e está ao ar livre há mais de quinhentos anos, desde que o salão que o cobria foi destruído por tempestades e por um tsunami. Por uns poucos ienes, dá para entrar na estátua e ver o bronze por dentro.',
    start: 'start',
    glossary: [
      ['おてら', 'templo budista'],
      ['だいぶつ', 'Grande Buda, estátua gigante do Buda (大 dai = grande, 仏 butsu = Buda)'],
      ['とても大きい', 'muito grande'],
      ['すごいですね', 'Que incrível, né! (o «ね» no fim pede concordância, como o nosso «né?»)'],
      ['なか・そと', 'dentro / fora'],
      ['はいります', 'entrar'],
      ['しゃしんをとります', 'tirar foto'],
      ['くらい・あつい', 'escuro / quente'],
      ['おきてください', 'acorde, por favor'],
      ['五時', 'cinco horas (時 ji = hora)'],
    ],
    nodes: {
      start: {
        emoji: '⛩️',
        text: 'ここは鎌倉です。リヌはおてらにいます。あっ！だいぶつです！',
        translation: 'Aqui é Kamakura. O Linu está num templo. Ah! É o Grande Buda!',
        choices: [
          { text: 'だいぶつを見ます。', translation: 'Vai ver o Grande Buda.', next: 'miru' },
          { text: 'おみやげやさんにいきます。', translation: 'Vai à loja de lembrancinhas.', next: 'omiyage' },
        ],
      },
      omiyage: {
        emoji: '🎁',
        text: 'おみやげやさんに、小さいだいぶつがあります。かわいいです！でも、いまは大きいだいぶつです。',
        translation: 'Na loja de lembrancinhas tem um Grande Buda pequenininho. Que fofo! Mas agora é a vez do Buda grande.',
        choices: [{ text: 'だいぶつを見ます。', translation: 'Vai ver o Grande Buda.', next: 'miru' }],
      },
      miru: {
        emoji: '🗿',
        text: 'だいぶつはとても大きいです。おじさんがいます。「こんにちは。だいぶつは十一メートルですよ。」',
        translation: 'O Grande Buda é enorme. Tem um senhor ali. «Boa tarde. O Buda tem onze metros.»',
        choices: [
          { text: '「えっ、十一メートル！すごいですね。」', translation: '«O quê, onze metros! Que incrível!»', next: 'naka' },
          {
            text: '「だいぶつは小さいですね。」',
            translation: '«O Buda é pequeno, né?»',
            wrong:
              'O senhor disse que o Buda tem «十一メートル» (jūichi mētoru), onze metros! E o texto já dizia «とても大きいです»: é muito GRANDE. 小さい (chiisai) é pequeno.',
          },
        ],
      },
      naka: {
        emoji: '🚪',
        text: '「だいぶつのなかに、はいりますか？」',
        translation: '«Quer entrar dentro do Buda?»',
        choices: [
          { text: '「はい、はいります！」', translation: '«Sim, quero entrar!»', next: 'dentro' },
          { text: '「さきに、しゃしんをとります。」', translation: '«Primeiro vou tirar uma foto.»', next: 'foto' },
        ],
      },
      foto: {
        emoji: '📷',
        text: 'おじさんがしゃしんをとります。「はい、チーズ！」だいぶつとリヌのしゃしんです。',
        translation: 'O senhor tira a foto. «Diga xis!» É uma foto do Buda com o Linu.',
        choices: [{ text: 'だいぶつのなかにはいります。', translation: 'Entra dentro do Buda.', next: 'dentro' }],
      },
      dentro: {
        emoji: '🔦',
        text: 'だいぶつのなかはくらいです。そして、あついです。でも、おもしろいです！',
        translation: 'Dentro do Buda é escuro. E quente. Mas é interessante!',
        choices: [
          { text: 'そとにでて、おじさんに「ありがとうございます」といいます。', translation: 'Sai e diz «muito obrigado» ao senhor.', next: 'final_bom' },
          { text: 'なかでねます。', translation: 'Dorme lá dentro.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '「どういたしまして。またきてくださいね。」リヌは鎌倉のだいぶつがだいすきです。',
        translation: '«De nada. Volte outra vez, viu?» O Linu adorou o Grande Buda de Kamakura.',
        ending: { tone: 'bom', title: 'Por dentro do Buda', message: 'O Linu viu o Grande Buda por fora e por dentro e ainda fez um amigo em Kamakura.' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'リヌはなかでねます。ぐうぐう……「おきてください！もう五時ですよ！」',
        translation: 'O Linu dorme lá dentro. Zzz… «Acorde, por favor! Já são cinco horas!»',
        ending: {
          tone: 'neutro',
          title: 'Soneca de bronze',
          message: 'Dentro do Buda é escuro e quentinho, mas não é lugar de dormir! No fim da tarde, o templo fecha.',
        },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'ja-h04',
    level: 'A1.2',
    cefr: 'A1',
    title: '千本のとりい',
    emoji: '⛩️',
    summary: 'No santuário Fushimi Inari, em Quioto, o Linu tenta contar os portões vermelhos, conhece as raposas de pedra e decide se sobe o monte.',
    cultural_context:
      'O Fushimi Inari-taisha, no sul de Quioto, é o principal dos cerca de trinta mil santuários dedicados a Inari, divindade do arroz, da colheita e dos negócios. Uns dez mil portões torii vermelhos, doados por empresas e famílias, formam túneis que sobem o monte Inari. As raposas (kitsune) de pedra são as mensageiras da divindade, muitas com uma chave de celeiro na boca; e o inari-zushi, arroz dentro de tofu frito adocicado, leva o nome do santuário porque, diz a tradição, é o petisco preferido delas.',
    start: 'start',
    glossary: [
      ['じんじゃ', 'santuário xintoísta (templo budista é おてら)'],
      ['とりい', 'torii, o portão dos santuários xintoístas'],
      ['きつね', 'raposa (a mensageira de Inari)'],
      ['何本', 'quantos (para coisas compridas, como torii, garrafas e lápis: 本 hon)'],
      ['千・一万', 'mil / dez mil (o japonês conta de dez mil em dez mil: 一万 ichiman)'],
      ['〜じゃありません', 'não é… (a negação de です)'],
      ['二時間ぐらい', 'umas duas horas (ぐらい = mais ou menos)'],
      ['見えます', 'dá para ver, aparece'],
      ['いなりずし', 'inari-zushi: arroz de sushi dentro de tofu frito adocicado'],
    ],
    nodes: {
      start: {
        emoji: '⛩️',
        text: '京都の伏見稲荷です。大きいじんじゃです。あかいとりいが、たくさんならんでいます。「千本とりい」です。',
        translation: 'Estamos no Fushimi Inari, em Quioto. É um santuário grande. Muitos portões torii vermelhos estão enfileirados. São os «mil torii».',
        choices: [
          { text: 'とりいをかぞえます。', translation: 'Conta os torii.', next: 'contar' },
          { text: 'きつねを見ます。', translation: 'Vai ver as raposas.', next: 'kitsune' },
        ],
      },
      kitsune: {
        emoji: '🦊',
        text: 'いしのきつねがいます。口に、かぎがあります。きつねは、かみさまのつかいです。',
        translation: 'Há uma raposa de pedra. Ela tem uma chave na boca. As raposas são mensageiras da divindade.',
        choices: [{ text: 'とりいをかぞえます。', translation: 'Conta os torii.', next: 'contar' }],
      },
      contar: {
        emoji: '🔢',
        text: '一、二、三……百……二百……。リヌはちょっとつかれました。そこに、おじいさんがいます。',
        translation: 'Um, dois, três… cem… duzentos… O Linu ficou meio cansado. Ali tem um senhor.',
        choices: [
          { text: '「すみません、とりいは何本ありますか？」', translation: '«Com licença, quantos torii tem aqui?»', next: 'ojiisan' },
          { text: 'おみせで、いなりずしを食べます。', translation: 'Vai comer inari-zushi numa lojinha.', next: 'inari' },
        ],
      },
      ojiisan: {
        emoji: '👴',
        text: '「千本じゃありませんよ。山ぜんぶで、一万ぐらいあります。」',
        translation: '«Não são mil, não. No monte inteiro, há uns dez mil.»',
        choices: [
          { text: '「一万！すごいですね。」', translation: '«Dez mil! Que incrível!»', next: 'yama' },
          {
            text: '「そうですか。千本ですね。」',
            translation: '«Ah, é? Então são mil.»',
            wrong:
              'O senhor disse «千本じゃありませんよ» (senbon ja arimasen yo): NÃO são mil! No monte inteiro há «一万ぐらい» (ichiman gurai), uns dez mil. «じゃありません» é a negação de «です».',
          },
        ],
      },
      yama: {
        emoji: '⛰️',
        text: '「山の上まで、二時間ぐらいです。上から京都の町が見えますよ。」',
        translation: '«Até o alto do monte são umas duas horas. Lá de cima dá para ver a cidade de Quioto.»',
        choices: [
          { text: '「行きます！」', translation: '«Eu vou!»', next: 'subida' },
          { text: '「さきに、何か食べます。」', translation: '«Antes, vou comer alguma coisa.»', next: 'inari' },
        ],
      },
      inari: {
        emoji: '🍣',
        text: 'おみせで、いなりずしを食べます。いなりずしは、きつねの大すきなたべものです。あまくて、おいしいです！',
        translation: 'Na lojinha, o Linu come inari-zushi. É a comida preferida das raposas. Docinho e gostoso!',
        choices: [
          { text: '山にのぼります。', translation: 'Sobe o monte.', next: 'subida' },
          { text: 'ホテルにかえって、ねます。', translation: 'Volta para o hotel e dorme.', next: 'final_neutro' },
        ],
      },
      subida: {
        emoji: '🌄',
        text: 'とりい、とりい、とりい……。二時間後、リヌは山の上にいます。京都の町が見えます。きれいです！',
        translation: 'Torii, torii, torii… Duas horas depois, o Linu está no alto do monte. Dá para ver a cidade de Quioto. Que lindo!',
        ending: { tone: 'bom', title: 'No alto do Inari', message: 'O Linu subiu o monte inteiro pelos túneis de torii e viu Quioto lá de cima.' },
      },
      final_neutro: {
        emoji: '🛏️',
        text: 'リヌはホテルでねます。山の上は……またこんど！',
        translation: 'O Linu dorme no hotel. O alto do monte… fica para a próxima!',
        ending: {
          tone: 'neutro',
          title: 'Fica para a próxima',
          message: 'O Linu comeu inari-zushi, mas não subiu o monte. Dizem que a vista de Quioto lá de cima vale as duas horas de subida!',
        },
      },
    },
  },
  {
    id: 'ja-h05',
    level: 'A1.2',
    cefr: 'A1',
    title: 'どのボタン？',
    emoji: '🍜',
    summary: 'Em Fukuoka, o Linu precisa pedir o ramen numa máquina de tíquetes cheia de botões e descobre o «kaedama», a porção extra de macarrão.',
    cultural_context:
      'Fukuoka é a terra do Hakata ramen: caldo tonkotsu, branco e cremoso, de osso de porco, com macarrão fino. Em muitas casas de ramen do Japão, não se pede ao garçom: compra-se um tíquete numa máquina (券売機, kenbaiki) na entrada e entrega-se no balcão. Em Hakata, quem ainda está com fome pede um «kaedama», uma porção extra de macarrão para pôr no caldo que sobrou. Curiosidade: a palavra ボタン (botan), dos botões da máquina, veio do português «botão».',
    start: 'start',
    glossary: [
      ['しょっけん', 'tíquete de refeição, comprado na máquina'],
      ['けんばいき', 'máquina de tíquetes'],
      ['先に', 'primeiro, antes'],
      ['ボタンをおします', 'aperta o botão (ボタン veio do português «botão»!)'],
      ['千円・七百円', 'mil ienes / setecentos ienes'],
      ['おつり', 'troco'],
      ['かため・ふつう・やわらかめ', 'mais firme / normal / mais mole (o ponto do macarrão)'],
      ['とんこつ', 'caldo de osso de porco, a marca do ramen de Hakata'],
      ['かえだま', 'porção extra de macarrão para o caldo que sobrou'],
      ['ごちそうさまでした', 'obrigado pela refeição (dito ao terminar de comer)'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '福岡の博多です。リヌはラーメンやに入ります。「いらっしゃいませ！先に、しょっけんを買ってください。」',
        translation: 'Hakata, em Fukuoka. O Linu entra numa casa de ramen. «Seja bem-vindo! Primeiro, compre o tíquete, por favor.»',
        choices: [
          { text: 'いりぐちのけんばいきを見ます。', translation: 'Vai olhar a máquina de tíquetes da entrada.', next: 'kikai' },
          {
            text: 'すぐにせきにすわって、まちます。',
            translation: 'Senta logo num lugar e espera.',
            wrong:
              'O atendente disse «先に、しょっけんを買ってください» (saki ni shokken o katte kudasai): PRIMEIRO compre o tíquete. Nas casas com máquina, primeiro se compra o tíquete; só depois se senta.',
          },
        ],
      },
      kikai: {
        emoji: '🎫',
        text: 'けんばいきに、ボタンがたくさんあります。ラーメンは七百円、チャーシューメンは千百円、ギョーザは四百円です。リヌのおさいふには、千円あります。',
        translation:
          'A máquina tem muitos botões. O ramen custa setecentos ienes, o chāshū-men custa mil e cem, e o guioza, quatrocentos. Na carteira do Linu há mil ienes.',
        choices: [
          { text: 'ラーメンのボタンをおします。', translation: 'Aperta o botão do ramen.', next: 'ticket' },
          {
            text: 'チャーシューメンのボタンをおします。',
            translation: 'Aperta o botão do chāshū-men.',
            wrong:
              'O chāshū-men custa «千百円» (sen hyaku en), mil e cem ienes, e o Linu só tem «千円» (sen en), mil. Não dá! 千 (sen) = mil, 百 (hyaku) = cem.',
          },
        ],
      },
      ticket: {
        emoji: '🪑',
        text: 'しょっけんが出ます。おつりは三百円です。リヌはカウンターにすわります。「めんのかたさは、どうしますか？かため、ふつう、やわらかめがあります。」',
        translation: 'Sai o tíquete. O troco é de trezentos ienes. O Linu senta no balcão. «Como quer o macarrão? Tem mais firme, normal e mais mole.»',
        choices: [
          { text: '「かためでおねがいします。」', translation: '«Mais firme, por favor.»', next: 'ramen' },
          { text: '「ふつうでおねがいします。」', translation: '«Normal, por favor.»', next: 'ramen' },
        ],
      },
      ramen: {
        emoji: '🍜',
        text: 'ラーメンが来ました！スープは白いです。とんこつです。とてもおいしい！すぐに、めんがなくなりました。でも、スープはまだあります。',
        translation: 'Chegou o ramen! O caldo é branco. É tonkotsu. Muito gostoso! Rapidinho, o macarrão acabou. Mas ainda tem caldo.',
        choices: [
          { text: '「すみません、かえだまをおねがいします！」', translation: '«Com licença, um kaedama, por favor!»', next: 'kaedama' },
          { text: 'スープをぜんぶ飲みます。', translation: 'Bebe todo o caldo.', next: 'final_neutro' },
        ],
      },
      kaedama: {
        emoji: '🍥',
        text: '「かえだまは百五十円です。けんばいきで買ってくださいね。」',
        translation: '«O kaedama custa cento e cinquenta ienes. Compre na máquina, tá?»',
        choices: [
          { text: 'けんばいきで、かえだまのしょっけんを買います。', translation: 'Compra o tíquete do kaedama na máquina.', next: 'final_bom' },
          {
            text: 'リヌは千五百円を出します。',
            translation: 'O Linu entrega mil e quinhentos ienes.',
            wrong:
              'O kaedama custa «百五十円» (hyaku gojū en), cento e cinquenta ienes, e não mil e quinhentos (千五百円, sen gohyaku en). E o Linu só tem 三百円 (sanbyaku en) de troco!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'あたらしいめんが、スープに入ります。リヌはぜんぶ食べました。「ごちそうさまでした！」',
        translation: 'O macarrão novo vai para o caldo. O Linu comeu tudo. «Obrigado pela refeição!»',
        ending: {
          tone: 'bom',
          title: 'Kaedama!',
          message: 'O Linu dominou a máquina de tíquetes e ainda pediu kaedama, como um verdadeiro morador de Hakata.',
        },
      },
      final_neutro: {
        emoji: '🥣',
        text: 'スープはおいしいです。でも、リヌはまだおなかがすいています……。',
        translation: 'O caldo é gostoso. Mas o Linu ainda está com fome…',
        ending: {
          tone: 'neutro',
          title: 'Ainda com fome',
          message: 'Em Hakata, quando o macarrão acaba e o caldo não, peça «かえだま» (kaedama): uma porção extra de macarrão por uns cento e poucos ienes.',
        },
      },
    },
  },
  {
    id: 'ja-h06',
    level: 'A1.2',
    cefr: 'A1',
    title: 'さくらの下で',
    emoji: '🌸',
    summary: 'No parque do castelo de Hirosaki, no norte do Japão, o Linu é convidado para o piquenique de uma família debaixo das cerejeiras.',
    cultural_context:
      'O hanami (花見, «ver as flores») é o costume de fazer piquenique debaixo das cerejeiras em flor, na primavera. O Parque de Hirosaki, na província de Aomori, tem cerca de duas mil e seiscentas cerejeiras em volta de um castelo do começo do século XVII e floresce no fim de abril, semanas depois de Tóquio. Quando as pétalas caem no fosso e cobrem a água de rosa, os japoneses chamam isso de «hana-ikada», a «jangada de flores».',
    start: 'start',
    glossary: [
      ['花見', 'hanami: piquenique para ver as cerejeiras (花 hana = flor, 見 mi = ver)'],
      ['さくら', 'cerejeira, flor de cerejeira'],
      ['おしろ', 'castelo'],
      ['いっしょに食べませんか？', 'Não quer comer com a gente? (o «-masen ka» negativo é um convite gentil)'],
      ['いただきます', 'dito antes de comer (literalmente, «recebo com humildade»)'],
      ['花見だんご', 'espetinho de três bolinhos de arroz: rosa, branco e verde'],
      ['花びら', 'pétala'],
      ['花いかだ', '«jangada de flores»: as pétalas boiando juntas na água'],
      ['来年', 'o ano que vem (rainen)'],
    ],
    nodes: {
      start: {
        emoji: '🏯',
        text: '四月です。リヌは青森の弘前にいます。おしろのこうえんに、さくらがたくさんさいています。とてもきれいです！',
        translation: 'É abril. O Linu está em Hirosaki, em Aomori. No parque do castelo há muitas cerejeiras em flor. Que lindo!',
        choices: [
          { text: 'おしろを見ます。', translation: 'Vai ver o castelo.', next: 'shiro' },
          { text: 'さくらの下をあるきます。', translation: 'Passeia debaixo das cerejeiras.', next: 'sakura' },
        ],
      },
      shiro: {
        emoji: '🏯',
        text: '白いおしろです。小さいですが、とても古いです。おしろのまわりには、水があります。',
        translation: 'É um castelo branco. É pequeno, mas muito antigo. Em volta do castelo há água.',
        choices: [{ text: 'さくらの下をあるきます。', translation: 'Passeia debaixo das cerejeiras.', next: 'sakura' }],
      },
      sakura: {
        emoji: '👨‍👩‍👧',
        text: 'さくらの下に、かぞくがいます。お母さんと、お父さんと、女の子です。女の子が言います。「こんにちは！ペンギンさん、いっしょに食べませんか？」',
        translation: 'Debaixo das cerejeiras há uma família: a mãe, o pai e uma menina. A menina diz: «Oi! Senhor pinguim, não quer comer com a gente?»',
        choices: [
          { text: '「はい、ありがとうございます！」', translation: '«Quero, muito obrigado!»', next: 'piquenique' },
          {
            text: '「はい、食べません。」',
            translation: '«Sim, não como.»',
            wrong:
              '«食べませんか？» (tabemasen ka) parece negativo, mas é um CONVITE: «Não quer comer com a gente?», como o nosso «Bora comer?». «はい、食べません» seria «Sim, não como»: não faz sentido! Para aceitar, diga «はい、ありがとうございます！».',
          },
        ],
      },
      piquenique: {
        emoji: '🍡',
        text: 'おべんとうがあります。おにぎり、たまごやき、からあげ……。お父さんが言います。「これは花見だんごですよ。」ピンクと白とみどりの、おだんごです。',
        translation: 'Tem bentô: onigiri, omelete enrolada, frango frito… O pai diz: «Isto é o dango de hanami.» São bolinhos rosa, brancos e verdes.',
        choices: [
          { text: '「いただきます！」', translation: '«Itadakimasu!» (vamos comer!)', next: 'comer' },
          { text: '「さきに、みんなで写真をとりませんか？」', translation: '«Antes, que tal tirarmos uma foto todos juntos?»', next: 'foto' },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'お父さんが写真をとります。「はい、チーズ！」みんなでわらいます。',
        translation: 'O pai tira a foto. «Diga xis!» Todo mundo ri.',
        choices: [{ text: '「いただきます！」', translation: '«Itadakimasu!» (vamos comer!)', next: 'comer' }],
      },
      comer: {
        emoji: '🌬️',
        text: 'おだんごはあまくて、おいしいです。そのとき、かぜがふきます。さくらの花びらが、おしろの水の上におちます。',
        translation: 'O dango é docinho e gostoso. Nesse momento, bate um vento. As pétalas de cerejeira caem na água em volta do castelo.',
        choices: [
          { text: '「わあ、水がピンクですね！」', translation: '«Uau, a água ficou rosa!»', next: 'final_bom' },
          { text: 'リヌは水にとびこみます！', translation: 'O Linu mergulha na água!', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌸',
        text: 'お母さんが言います。「あれは『花いかだ』です。」「きれいですね。来年もまた来たいです！」とリヌは言います。',
        translation: 'A mãe diz: «Aquilo é a «hana-ikada», a jangada de flores.» «Que lindo! Quero voltar no ano que vem!», diz o Linu.',
        ending: {
          tone: 'bom',
          title: 'Jangada de flores',
          message: 'O Linu fez hanami com uma família de Aomori, comeu dango e viu as pétalas cobrirem o fosso do castelo.',
        },
      },
      final_neutro: {
        emoji: '💦',
        text: 'ペンギンは水がすきです！でも、おしろの水は、およぐところじゃありません。女の子はわらっています。お父さんはこまっています。',
        translation: 'Pinguim adora água! Mas o fosso do castelo não é lugar de nadar. A menina está rindo. O pai não sabe o que fazer.',
        ending: {
          tone: 'neutro',
          title: 'Mergulho no fosso',
          message: 'Pinguim adora água, mas o fosso do castelo não é piscina! As pétalas se admiram da margem.',
        },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'ja-h07',
    level: 'A2.1',
    cefr: 'A2',
    title: '右がわの富士山',
    emoji: '🚄',
    summary: 'No trem-bala de Tóquio para Quioto, o Linu procura o lugar reservado, compra um ekiben e tenta não perder a vista do monte Fuji.',
    cultural_context:
      'O Shinkansen, o trem-bala japonês, começou a rodar em 1964, entre Tóquio e Osaka, poucos dias antes das Olimpíadas de Tóquio. Na linha Tōkaidō, os trens saem a cada poucos minutos, chegam a 285 km/h e o atraso médio fica em torno de um minuto. Indo para Quioto, o monte Fuji aparece do lado direito (os assentos E), uns quarenta minutos depois de Tóquio, se o dia estiver limpo. E muita gente compra um «ekiben», a marmita vendida nas estações, para comer no caminho.',
    start: 'start',
    glossary: [
      ['新幹線', 'Shinkansen, o trem-bala (literalmente, «nova linha-tronco»)'],
      ['〜号車・〜番', 'vagão número… / lugar número… (七号車 nana-gōsha = vagão sete)'],
      ['駅弁', 'ekiben, marmita vendida nas estações (駅 eki = estação + 弁当 bentō)'],
      ['まどがわのせき', 'lugar na janela'],
      ['〜と思います', 'acho que… (deixa a frase mais suave e educada)'],
      ['右がわ・左がわ', 'lado direito / lado esquerdo'],
      ['見えます', 'dá para ver, aparece'],
      ['ねむくなりました', 'ficou com sono (〜くなる = ficar…)'],
      ['着きました', 'chegou'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: '東京駅です。リヌは新幹線で京都まで行きます。リヌのせきは、七号車の十二番です。まどがわのせきです。',
        translation: 'Estação de Tóquio. O Linu vai de Shinkansen até Quioto. O lugar dele é no vagão sete, fileira doze. É na janela.',
        choices: [
          { text: 'すぐにホームへ行きます。', translation: 'Vai direto para a plataforma.', next: 'home' },
          { text: '駅のお店で駅弁を買います。', translation: 'Compra um ekiben na loja da estação.', next: 'ekiben' },
        ],
      },
      ekiben: {
        emoji: '🍱',
        text: '駅弁のお店には、いろいろなお弁当がたくさんあります。牛肉、とり肉、すし……。ペンギンですから、もちろん魚のお弁当をえらびました！',
        translation: 'Na loja de ekiben há muitos tipos de marmita: carne, frango, sushi… Como ele é pinguim, é claro que escolheu a de peixe!',
        choices: [{ text: 'ホームへ行きます。', translation: 'Vai para a plataforma.', next: 'home' }],
      },
      home: {
        emoji: '🚄',
        text: '白くて長い新幹線が来ました。リヌは七号車に乗りました。でも、十二番のせきに、男の人がすわっています。',
        translation: 'Chegou um Shinkansen branco e comprido. O Linu entrou no vagão sete. Mas tem um homem sentado no lugar doze.',
        choices: [
          { text: '「すみません、そこはわたしのせきだと思います。」', translation: '«Com licença, acho que esse lugar é o meu.»', next: 'seat' },
          { text: 'だまって、きっぷを男の人に見せます。', translation: 'Mostra o bilhete ao homem, sem dizer nada.', next: 'seat' },
        ],
      },
      seat: {
        emoji: '🎫',
        text: '男の人はきっぷを見て、言いました。「あっ、すみません！わたしのせきは十三番でした。」男の人はうしろのせきにうつりました。そして、新幹線が出発しました。',
        translation: 'O homem olhou o bilhete e disse: «Ah, desculpe! O meu lugar era o treze.» Ele passou para o assento de trás. E o Shinkansen partiu.',
        choices: [{ text: 'まどがわのせきにすわります。', translation: 'Senta no lugar da janela.', next: 'partida' }],
      },
      partida: {
        emoji: '👩',
        text: 'となりのせきの女の人が言いました。「今日は天気がいいですね。四十分ぐらいで、右がわに富士山が見えますよ。」',
        translation: 'A mulher do assento ao lado disse: «Hoje o tempo está bom, né? Daqui a uns quarenta minutos, o monte Fuji vai aparecer do lado direito.»',
        choices: [
          { text: '「ありがとうございます！右がわですね。」', translation: '«Muito obrigado! Do lado direito, né?»', next: 'espera' },
          {
            text: 'リヌは左がわのまどを見ます。',
            translation: 'O Linu olha pela janela do lado esquerdo.',
            wrong: 'A mulher disse «右がわに» (migigawa ni): do lado DIREITO. 右 (migi) é direita; esquerda é 左 (hidari).',
          },
        ],
      },
      espera: {
        emoji: '😪',
        text: 'リヌは駅弁を食べました。魚はとてもおいしかったです。でも、おなかがいっぱいになって、ねむくなりました……。',
        translation: 'O Linu comeu o ekiben. O peixe estava delicioso. Mas a barriga ficou cheia, e ele ficou com sono…',
        choices: [
          { text: '「ねません！富士山を見ます！」', translation: '«Não vou dormir! Vou ver o Fuji!»', next: 'fuji' },
          { text: 'ちょっとだけねます。', translation: 'Dorme só um pouquinho.', next: 'final_neutro' },
        ],
      },
      fuji: {
        emoji: '🗻',
        text: '三十分後、右のまどに大きな山が見えました。上のほうは雪で白いです。「富士山だ！」リヌは写真をとりました。',
        translation: 'Meia hora depois, apareceu uma montanha enorme na janela da direita. O topo está branco de neve. «É o Fuji!» O Linu tirou uma foto.',
        choices: [{ text: 'となりの女の人に「きれいですね！」と言います。', translation: 'Diz à mulher do lado: «Que lindo!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '「本当に。今日はラッキーですね。」女の人もわらいました。そして一時間半後、新幹線は京都に着きました。',
        translation: '«É mesmo. Hoje você teve sorte.» A mulher também sorriu. E uma hora e meia depois, o Shinkansen chegou a Quioto.',
        ending: {
          tone: 'bom',
          title: 'O Fuji pela janela',
          message: 'O Linu achou o lugar, comeu um ekiben de peixe e viu o monte Fuji pela janela, como todo viajante sonha.',
        },
      },
      final_neutro: {
        emoji: '😴',
        text: '「まもなく、京都です。」アナウンスで、リヌは目をあけました。もう京都です！富士山は……？',
        translation: '«Em instantes, Quioto.» Com o aviso do alto-falante, o Linu abriu os olhos. Já é Quioto! E o Fuji…?',
        ending: {
          tone: 'neutro',
          title: 'Dormi e perdi o Fuji',
          message: 'Barriga cheia dá sono! Na volta para Tóquio, o Fuji fica do lado esquerdo: sente na janela e fique de olho.',
        },
      },
    },
  },
  {
    id: 'ja-h08',
    level: 'A2.1',
    cefr: 'A2',
    title: 'たんざくのねがい',
    emoji: '🎋',
    summary:
      'No Tanabata de Sendai, o Linu escreve um desejo numa tira de papel e conta a uma nova amiga que São Paulo também tem essa festa, no bairro da Liberdade.',
    cultural_context:
      'O Tanabata (七夕, «a noite do sete») lembra a lenda da tecelã Orihime e do pastor Hikoboshi, as estrelas Vega e Altair, separadas pela Via Láctea e que só se encontram uma vez por ano. Em Sendai, a festa é de 6 a 8 de agosto, pelo calendário antigo, e as galerias do centro se enchem de enfeites enormes de papel. Escreve-se um desejo num tanzaku, tira de papel colorido, e pendura-se num bambu. Em São Paulo, a Liberdade, o bairro que recebeu tantos imigrantes japoneses, faz o seu Tanabata Matsuri todo mês de julho desde 1979, em pleno inverno brasileiro.',
    start: 'start',
    glossary: [
      ['七夕', 'Tanabata, a festa das estrelas (literalmente, «a noite do sete»)'],
      ['かざり', 'enfeite'],
      ['たんざく', 'tira de papel colorido onde se escreve o desejo'],
      ['ねがい', 'desejo, pedido'],
      ['〜ますように', 'tomara que… (o jeito de escrever um desejo)'],
      ['ささ', 'bambu fininho, onde se penduram os tanzaku'],
      ['天の川', 'a Via Láctea (literalmente, «o rio do céu»)'],
      ['一年に一回だけ', 'só uma vez por ano (だけ = só)'],
      ['いみん', 'imigrante, imigração'],
      ['ずんだもち', 'bolinho de arroz com pasta doce de edamame, doce típico de Sendai'],
    ],
    nodes: {
      start: {
        emoji: '🎏',
        text: '八月の仙台です。町のアーケードに、大きくて長いかざりがたくさんあります。赤、青、黄色、ピンク……。今日は七夕まつりです。',
        translation:
          'Sendai, agosto. Nas galerias cobertas da cidade há muitos enfeites grandes e compridos: vermelhos, azuis, amarelos, cor-de-rosa… Hoje é o festival de Tanabata.',
        choices: [
          { text: 'かざりを見ながら歩きます。', translation: 'Passeia olhando os enfeites.', next: 'kazari' },
          { text: 'まず、やたいに行きます。', translation: 'Primeiro, vai a uma barraquinha de comida.', next: 'yatai' },
        ],
      },
      yatai: {
        emoji: '🍡',
        text: 'やたいで、みどりのおもちを売っています。「ずんだもちですよ。えだまめの、あまいおもちです。」',
        translation: 'Numa barraquinha, vendem bolinhos de arroz verdes. «É zunda-mochi. Bolinho doce de edamame.»',
        choices: [{ text: 'ずんだもちを食べてから、かざりを見に行きます。', translation: 'Come um zunda-mochi e depois vai ver os enfeites.', next: 'kazari' }],
      },
      kazari: {
        emoji: '👧',
        text: 'かざりの前で、女の子が小さな紙に何か書いています。「こんにちは。わたしはあかりです。これは『たんざく』。ねがいを書くんですよ。」',
        translation:
          'Na frente de um enfeite, uma menina está escrevendo alguma coisa num papelzinho. «Oi. Eu sou a Akari. Isto é um tanzaku. A gente escreve um desejo nele.»',
        choices: [
          { text: '「ぼくもねがいを書きたいです！」', translation: '«Eu também quero escrever um desejo!»', next: 'escrever' },
          { text: '「ねがいを書いて、どうするんですか？」', translation: '«E depois de escrever o desejo, o que se faz?»', next: 'escrever' },
        ],
      },
      escrever: {
        emoji: '✍️',
        text: 'あかりちゃんは、ペンと青いたんざくをくれました。「書いたら、あのささにかざるんです。リヌくんは、何をおねがいしますか？」',
        translation: 'A Akari deu ao Linu uma caneta e um tanzaku azul. «Depois de escrever, a gente pendura naquele bambu. O que você vai pedir, Linu?»',
        choices: [
          { text: '「日本語がじょうずになりますように。」と書きます。', translation: 'Escreve: «Que eu fique bom em japonês.»', next: 'legend' },
          {
            text: '「おいしい魚をたくさん食べられますように。」と書きます。',
            translation: 'Escreve: «Que eu possa comer muito peixe gostoso.»',
            next: 'legend',
          },
        ],
      },
      legend: {
        emoji: '🌌',
        text: 'あかりちゃんが、七夕の話をしてくれました。「おりひめとひこぼしは、天の川のりょうがわにいます。ふたりは、一年に一回だけ、七夕の夜に会えるんです。」',
        translation:
          'A Akari contou a história do Tanabata. «A Orihime e o Hikoboshi ficam um de cada lado da Via Láctea. Os dois só podem se encontrar uma vez por ano, na noite do Tanabata.»',
        choices: [
          { text: '「一年に一回だけですか。さびしいですね。」', translation: '«Só uma vez por ano? Que triste.»', next: 'brasil' },
          {
            text: '「毎日会えるんですね。いいですね！」',
            translation: '«Então eles se encontram todo dia. Que bom!»',
            wrong:
              'A Akari disse «一年に一回だけ» (ichinen ni ikkai dake): SÓ uma vez por ano! Todo dia seria «毎日» (mainichi). だけ (dake) quer dizer «só, apenas».',
          },
        ],
      },
      brasil: {
        emoji: '🇧🇷',
        text: '「リヌくんは、どこから来ましたか？」「ブラジルのサンパウロです。サンパウロにも七夕まつりがありますよ！」あかりちゃんはびっくりしました。「えっ、本当？」',
        translation: '«De onde você é, Linu?» «De São Paulo, no Brasil. Em São Paulo também tem festival de Tanabata!» A Akari ficou surpresa. «Sério?»',
        choices: [
          { text: '「リベルダージという町で、毎年七月にあります。」', translation: '«É num bairro chamado Liberdade, todo ano em julho.»', next: 'liberdade' },
          { text: 'スマホで、リベルダージの写真を見せます。', translation: 'Mostra fotos da Liberdade no celular.', next: 'liberdade' },
        ],
      },
      liberdade: {
        emoji: '🏮',
        text: '「リベルダージには、日本からのいみんがたくさん住んでいました。大きな赤いとりいもあります。でも、ブラジルの七月は冬なんです。」「冬の七夕？おもしろい！」とあかりちゃんはわらいました。',
        translation:
          '«Na Liberdade moravam muitos imigrantes japoneses. Tem até um grande torii vermelho. Mas, no Brasil, julho é inverno.» «Tanabata no inverno? Que legal!», riu a Akari.',
        choices: [
          {
            text: '「いつか、いっしょにサンパウロの七夕に行きましょう！」',
            translation: '«Um dia, vamos juntos ao Tanabata de São Paulo!»',
            next: 'final_bom',
          },
          { text: 'たんざくをかばんに入れて、ホテルに帰ります。', translation: 'Põe o tanzaku na mochila e volta para o hotel.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎋',
        text: 'ふたりはたんざくをささにかざりました。風で、たくさんのたんざくがゆれています。「リヌくんのねがい、かなうといいね！」とあかりちゃんが言いました。',
        translation: 'Os dois penduraram os tanzaku no bambu. Com o vento, os papéis balançam. «Tomara que o seu desejo se realize, Linu!», disse a Akari.',
        ending: {
          tone: 'bom',
          title: 'Desejo pendurado',
          message: 'O Linu pendurou o desejo no bambu e ganhou uma amiga em Sendai, que agora sonha com o Tanabata de inverno da Liberdade.',
        },
      },
      final_neutro: {
        emoji: '🎒',
        text: 'ホテルで、かばんからたんざくが出てきました。あっ、ねがいをかざっていません！',
        translation: 'No hotel, o tanzaku aparece dentro da mochila. Opa, o desejo não foi pendurado!',
        ending: {
          tone: 'neutro',
          title: 'Desejo na mochila',
          message: 'Desejo de tanzaku tem que ficar pendurado no bambu, para as estrelas lerem! Da próxima vez, pendure antes de ir embora.',
        },
      },
    },
  },
  {
    id: 'ja-h09',
    level: 'A2.1',
    cefr: 'A2',
    title: 'つるつるの札幌',
    emoji: '⛄',
    summary:
      'No Festival da Neve de Sapporo, o Linu vê esculturas gigantes de neve, se atrapalha no gelo da calçada e aprende um jeito de andar muito familiar.',
    cultural_context:
      'O Festival da Neve de Sapporo (さっぽろ雪まつり) começou em 1950, quando estudantes fizeram seis estátuas de neve no Parque Ōdori. Hoje, todo início de fevereiro, o parque recebe esculturas de neve e gelo do tamanho de prédios, e o festival passa de dois milhões de visitantes. As calçadas congeladas são tão escorregadias que a cidade deixa caixas de areia nas esquinas, e os moradores recomendam a «ペンギン歩き» (andar de pinguim): passos curtinhos, com a sola inteira no chão.',
    start: 'start',
    glossary: [
      ['雪まつり', 'festival da neve'],
      ['寒い', 'frio (o clima; para coisas frias ao toque, つめたい)'],
      ['じどうはんばいき', 'máquina automática de bebidas (tem até bebida quente!)'],
      ['つるつる', 'escorregadio, liso (palavra que imita a sensação)'],
      ['ころびます', 'cair, levar um tombo'],
      ['どうやって', 'como, de que jeito'],
      ['ペンギン歩き', '«andar de pinguim»: passos curtos, com a sola toda no chão'],
      ['小さく、ゆっくり', 'com passos pequenos, devagar (小さい → 小さく: vira advérbio)'],
      ['スープカレー', 'sopa de curry, prato típico de Sapporo'],
      ['いっしょに行きませんか？', 'Não quer ir junto? (convite)'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: '二月の札幌です。とても寒いです。おおどおり公園には、雪で作った大きなおしろがあります。',
        translation: 'Sapporo, fevereiro. Está muito frio. No Parque Ōdori há um castelo enorme feito de neve.',
        choices: [
          { text: 'すぐに雪のおしろを見に行きます。', translation: 'Vai direto ver o castelo de neve.', next: 'oshiro' },
          { text: 'まず、あたたかい飲み物を買います。', translation: 'Primeiro, compra uma bebida quente.', next: 'nomimono' },
        ],
      },
      nomimono: {
        emoji: '🥫',
        text: '道に、じどうはんばいきがあります。リヌはあたたかいコーンスープを買いました。日本のじどうはんばいきには、つめたい飲み物も、あたたかい飲み物もあります。',
        translation:
          'Na rua tem uma máquina de bebidas. O Linu comprou uma sopa de milho quentinha. As máquinas do Japão têm bebidas geladas e também quentes.',
        choices: [{ text: '雪のおしろを見に行きます。', translation: 'Vai ver o castelo de neve.', next: 'oshiro' }],
      },
      oshiro: {
        emoji: '🏰',
        text: '雪のおしろは、高さが十五メートルぐらいあります。夜になると、ライトで色がかわります。となりのおじいさんが言いました。「一か月ぐらいかけて、たくさんの人が作ったんですよ。」',
        translation:
          'O castelo de neve tem uns quinze metros de altura. À noite, as luzes mudam a cor dele. Um senhor ao lado disse: «Muita gente trabalhou quase um mês para fazer isto.»',
        choices: [{ text: '「すごいですね！」と言って、写真をとります。', translation: 'Diz «Que incrível!» e tira uma foto.', next: 'michi' }],
      },
      michi: {
        emoji: '🧊',
        text: '写真をとったあと、リヌは歩き始めました。でも、道がこおっていて、つるつるです。たくさんの人がころんでいます。',
        translation: 'Depois de tirar a foto, o Linu começou a andar. Mas a rua está congelada e escorregadia. Muita gente está levando tombo.',
        choices: [
          { text: 'おじいさんに、どうやって歩けばいいか聞きます。', translation: 'Pergunta ao senhor como é que se anda ali.', next: 'pinguin' },
          { text: '気にしないで、走ります！', translation: 'Nem liga e sai correndo!', next: 'queda' },
        ],
      },
      queda: {
        emoji: '💥',
        text: 'ツルッ！ドン！リヌはころびました。いたい……。おじいさんが来てくれました。「だいじょうぶですか？」',
        translation: 'Escorregou! Pum! O Linu caiu. Ai… O senhor veio ajudar. «Está tudo bem?»',
        choices: [
          { text: '「だいじょうぶです。でも、どうやって歩けばいいですか？」', translation: '«Estou bem. Mas como é que se anda aqui?»', next: 'pinguin' },
        ],
      },
      pinguin: {
        emoji: '🐧',
        text: '「つるつるの道は、ペンギンみたいに歩くんですよ。小さく、ゆっくり、足のうらぜんぶで。」リヌはわらいました。「ぼく、ペンギンです！」',
        translation: '«Na rua escorregadia, a gente anda que nem pinguim. Passos pequenos, devagar, com a sola inteira do pé.» O Linu riu. «Eu sou pinguim!»',
        choices: [
          { text: 'ペンギン歩きで、ゆっくり歩きます。', translation: 'Anda devagar, no andar de pinguim.', next: 'caminho' },
          {
            text: '大きく、はやく歩きます。',
            translation: 'Anda com passos grandes e rápidos.',
            wrong:
              'O senhor disse «小さく、ゆっくり» (chiisaku, yukkuri): passos PEQUENOS e DEVAGAR, com a sola inteira no chão. Passo grande e rápido no gelo é tombo na certa!',
          },
        ],
      },
      caminho: {
        emoji: '👣',
        text: 'ペンギン歩きは、かんたんです！リヌは一回もころびませんでした。おじいさんが言いました。「おなかがすきましたね。近くに、おいしいスープカレーの店がありますよ。いっしょに行きませんか？」',
        translation:
          'O andar de pinguim é fácil! O Linu não caiu nenhuma vez. O senhor disse: «Deu fome, né? Aqui perto tem uma casa de sopa de curry muito boa. Não quer ir junto?»',
        choices: [
          { text: '「はい、ぜひ！」', translation: '«Quero, com certeza!»', next: 'final_bom' },
          { text: '「いいえ、もう一度おしろを見に行きます。」', translation: '«Não, vou ver o castelo mais uma vez.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍛',
        text: 'スープカレーはからくて、あたたかいです。やさいも大きくて、おいしいです。まどの外では、雪がしずかにふっています。',
        translation: 'A sopa de curry é apimentada e quentinha. Os legumes são grandes e gostosos. Lá fora, a neve cai devagarinho.',
        ending: {
          tone: 'bom',
          title: 'Andar de pinguim',
          message: 'O Linu aprendeu o «andar de pinguim» que os moradores de Sapporo usam no gelo e terminou a noite com uma sopa de curry fumegante.',
        },
      },
      final_neutro: {
        emoji: '🥶',
        text: '夜のおしろは、とてもきれいです。でも、寒い！リヌのおなかが「グー」となりました。',
        translation: 'O castelo à noite é lindo. Mas que frio! A barriga do Linu roncou.',
        ending: {
          tone: 'neutro',
          title: 'Barriga roncando',
          message: 'O castelo de neve é lindo à noite, mas com fome e frio não dá! Em Sapporo, depois do passeio, uma sopa de curry quentinha é tradição.',
        },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'ja-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: '地獄のあとは温泉',
    emoji: '♨️',
    summary: 'Em Beppu, a cidade das fontes termais, o Linu visita os «infernos» de água fervente com a amiga Yumi e aprende as regras do banho de onsen.',
    cultural_context:
      'Beppu, na ilha de Kyūshū, é a cidade com mais fontes termais do Japão: mais de dois mil pontos de onde brota água quente. Os «jigoku» (infernos) são fontes quentes demais para o banho e de cores impressionantes, como o Umi Jigoku, azul como o mar, e o Chi-no-ike Jigoku, vermelho como sangue; no vapor delas se cozinham ovos e legumes. Para entrar num onsen, a regra vale no país inteiro: lavar o corpo antes, entrar sem roupa e não pôr a toalha na água. Muita gente a dobra em cima da cabeça.',
    start: 'start',
    glossary: [
      ['温泉', 'onsen, fonte termal'],
      ['ゆげ', 'vapor (da água quente)'],
      ['地獄', 'inferno; em Beppu, as fontes quentes demais para o banho'],
      ['見るだけ', 'só olhar (だけ = só)'],
      ['〜んだって', 'dizem que… (para contar o que ouviu, na fala informal)'],
      ['男湯・女湯', 'banho masculino / banho feminino'],
      ['体をあらう', 'lavar o corpo'],
      ['〜ちゃだめ', 'não pode… (forma falada de 〜てはだめ)'],
      ['気持ちいい', 'que delícia (a sensação boa no corpo)'],
      ['のぼせる', 'ficar tonto com o calor do banho'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: 'リヌは友だちのゆみと、九州の別府に来た。町のあちこちから、白いゆげが出ている。「別府は温泉の町なんだよ。」とゆみが言った。',
        translation:
          'O Linu veio a Beppu, em Kyūshū, com a amiga Yumi. Por toda parte da cidade sai um vapor branco. «Beppu é a cidade dos onsen», disse a Yumi.',
        choices: [
          { text: '「あのゆげは何？」と聞く。', translation: 'Pergunta: «O que é aquele vapor?»', next: 'jigoku' },
          { text: '「じゃあ、すぐ温泉に行こう！」と言う。', translation: 'Diz: «Então vamos logo para o onsen!»', next: 'pressa' },
        ],
      },
      pressa: {
        emoji: '✋',
        text: '「まだだめ！先に『地獄』を見に行こうよ。」リヌはびっくりした。「じ、地獄？」',
        translation: '«Ainda não! Primeiro vamos ver os «infernos».» O Linu levou um susto. «In-infernos?»',
        choices: [{ text: '「地獄って、何？」と聞く。', translation: 'Pergunta: «Que história é essa de inferno?»', next: 'jigoku' }],
      },
      jigoku: {
        emoji: '🌊',
        text: '「別府の『地獄』は、すごく熱い温泉のこと。百度近いから、入れないよ。見るだけ。」ふたりは「海地獄」に行った。お湯は、海みたいに青かった。',
        translation:
          '«Os «infernos» de Beppu são fontes quentíssimas. Chegam perto de cem graus, então não dá para entrar. É só para olhar.» Os dois foram ao Umi Jigoku, o «inferno do mar». A água era azul como o mar.',
        choices: [
          { text: '「きれい！ほかの地獄も見たい。」', translation: '«Que lindo! Quero ver os outros infernos também.»', next: 'tamago' },
          {
            text: '青いお湯で、およごうとする。',
            translation: 'Tenta nadar na água azul.',
            wrong:
              'A Yumi acabou de dizer «入れないよ。見るだけ» (hairenai yo, miru dake): não dá para entrar, é SÓ PARA OLHAR! A água chega perto de 百度 (hyaku-do), cem graus. Pinguim cozido, não!',
          },
        ],
      },
      tamago: {
        emoji: '🥚',
        text: '次は「血の池地獄」。お湯が赤くて、ちょっとこわかった。店の前で、ゆみが温泉たまごを二つ買った。「地獄のゆげで作ったんだって。」',
        translation:
          'Depois, o Chi-no-ike Jigoku, o «inferno do lago de sangue». A água era vermelha e dava um pouco de medo. Na frente de uma loja, a Yumi comprou dois ovos de onsen. «Dizem que são feitos no vapor do inferno.»',
        choices: [{ text: '「おいしい！じゃあ、そろそろ温泉に行こう。」', translation: '«Que gostoso! Então, agora vamos para o onsen.»', next: 'vestiario' }],
      },
      vestiario: {
        emoji: '🚪',
        text: '温泉の入口で、ゆみが言った。「わたしは女湯、リヌは男湯ね。お湯に入る前に、体をあらってね。それから、タオルはお湯に入れちゃだめだよ。」',
        translation:
          'Na entrada do onsen, a Yumi disse: «Eu vou para o banho feminino, e você, para o masculino. Antes de entrar na água, lave o corpo, tá? E a toalha não pode entrar na água.»',
        choices: [
          { text: 'まず体をあらって、それからお湯に入る。', translation: 'Primeiro lava o corpo e depois entra na água.', next: 'banho' },
          {
            text: 'タオルといっしょに、お湯に入る。',
            translation: 'Entra na água com a toalha.',
            wrong:
              'A Yumi avisou «タオルはお湯に入れちゃだめだよ» (taoru wa oyu ni irecha dame da yo): a toalha NÃO pode entrar na água. 〜ちゃだめ quer dizer «não pode…» e é a forma falada de 〜てはだめ.',
          },
        ],
      },
      banho: {
        emoji: '♨️',
        text: 'リヌはタオルを頭の上にのせて、お湯に入った。となりのおじいさんが「おっ、上手だね。」とわらった。お湯はあつくて、気持ちいい。',
        translation:
          'O Linu pôs a toalha em cima da cabeça e entrou na água. O senhor do lado riu: «Olha só, sabe direitinho!» A água está quente e deliciosa.',
        choices: [
          { text: '「気持ちいいですね。」とおじいさんに話しかける。', translation: 'Puxa conversa com o senhor: «Que delícia, né?»', next: 'conversa' },
          { text: 'ずっとお湯の中にいる。', translation: 'Fica na água sem parar.', next: 'final_neutro' },
        ],
      },
      conversa: {
        emoji: '👴',
        text: '「どこから来たの？」「ブラジルから来ました。」「ブラジル！遠いねえ。別府の温泉は、つかれた体に一番いいよ。」おじいさんはうれしそうに言った。',
        translation:
          '«De onde você veio?» «Vim do Brasil.» «Do Brasil! Que longe! O onsen de Beppu é o melhor remédio para corpo cansado», disse o senhor, todo contente.',
        choices: [
          { text: '「ありがとうございます。」と言って、お湯から出る。', translation: 'Diz «muito obrigado» e sai da água.', next: 'final_bom' },
          { text: '話が楽しくて、一時間もお湯に入っている。', translation: 'A conversa está tão boa que ele fica uma hora na água.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🥛',
        text: '外で、ゆみが待っていた。「どうだった？」「最高！」ふたりは、つめたいコーヒー牛乳を飲んだ。',
        translation: 'Lá fora, a Yumi estava esperando. «E aí?» «Demais!» Os dois tomaram um leite com café geladinho.',
        ending: {
          tone: 'bom',
          title: 'Banho de verdade',
          message:
            'O Linu viu os «infernos» de Beppu e tomou banho de onsen seguindo todas as regras: corpo lavado, toalha na cabeça e um leite com café no final.',
        },
      },
      final_neutro: {
        emoji: '🥴',
        text: 'リヌはずっとお湯に入っていた。三十分……四十分……。頭がくらくらしてきた。「のぼせちゃった……。」',
        translation: 'O Linu ficou na água um tempão. Trinta minutos… quarenta… A cabeça começou a girar. «Fiquei tonto de calor…»',
        ending: {
          tone: 'neutro',
          title: 'Pinguim cozido',
          message: 'Ficar tempo demais na água quente dá tontura: é o «のぼせる» (noboseru). No onsen, entre e saia, beba água e descanse.',
        },
      },
    },
  },
  {
    id: 'ja-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: '竹富島の水牛車',
    emoji: '🐃',
    summary:
      'Na pequena ilha de Taketomi, em Okinawa, o Linu passeia numa carroça puxada por um búfalo, experimenta o sanshin e procura a areia em forma de estrela.',
    cultural_context:
      "Okinawa foi o Reino de Ryūkyū até 1879 e tem língua, música e comida próprias. Taketomi, ilhota a uns quinze minutos de barco de Ishigaki, conserva a vila tradicional: casas de telhado vermelho com um shīsā, leão de cerâmica protetor, no alto, muros de pedra de coral e ruas de areia branca, que os turistas percorrem em carroças puxadas por búfalos-d'água, ao som do sanshin, o instrumento de três cordas coberto de pele de cobra. Na praia de Kaiji, a «areia-estrela» é, na verdade, a casca de minúsculos seres marinhos, e os moradores pedem que ninguém a leve embora.",
    start: 'start',
    glossary: [
      ['メンソーレ', 'bem-vindo! (na língua de Okinawa; em japonês padrão, ようこそ)'],
      ['シーサー', 'shīsā, leão de cerâmica que protege as casas de Okinawa'],
      ['水牛車', "carroça puxada por búfalo-d'água"],
      ['さんしん', 'sanshin (三線, «três fios»), instrumento de três cordas de Okinawa'],
      ['〜ながら', 'enquanto… (duas ações ao mesmo tempo: ひきながら歌う = canta tocando)'],
      ['三本だけ', 'só três (本 conta coisas compridas, como cordas)'],
      ['やってみる？', 'quer tentar? (〜てみる = experimentar fazer)'],
      ['星のすな', 'areia-estrela'],
      ['持って帰らないで', 'não leve para casa (〜ないで = não…, por favor)'],
      ['〜さ', 'terminação típica da fala de Okinawa (行けるさ = dá para ir, sim)'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: '石垣島から船で十五分。リヌは竹富島に着いた。赤いやねの家が多くて、道は白いすなだ。やねの上には、シーサーがいる。「メンソーレ！」と、おじさんが大きな声で言った。',
        translation:
          'Quinze minutos de barco a partir de Ishigaki. O Linu chegou à ilha de Taketomi. Há muitas casas de telhado vermelho, e as ruas são de areia branca. Em cima dos telhados há shīsās. «Mensōre!», disse um senhor em voz alta.',
        choices: [
          { text: '「メンソーレって、何ですか？」と聞く。', translation: 'Pergunta: «O que quer dizer mensōre?»', next: 'mensore' },
          { text: 'やねの上のシーサーを見る。', translation: 'Olha o shīsā em cima do telhado.', next: 'shisa' },
        ],
      },
      shisa: {
        emoji: '🦁',
        text: 'シーサーはライオンみたいな顔で、口を大きく開けている。悪いものから家を守っているのだ。おじさんがまた言った。「メンソーレ！」',
        translation: 'O shīsā tem cara de leão e está com a boca bem aberta. Ele protege a casa contra as coisas ruins. O senhor repetiu: «Mensōre!»',
        choices: [{ text: '「メンソーレって、何ですか？」と聞く。', translation: 'Pergunta: «O que quer dizer mensōre?»', next: 'mensore' }],
      },
      mensore: {
        emoji: '🧔',
        text: 'おじさんはわらった。「沖縄の言葉で『ようこそ』っていう意味だよ。おじさんは水牛車の運転手なんだ。乗っていく？」',
        translation: 'O senhor riu. «Quer dizer «bem-vindo» na língua de Okinawa. Eu conduzo a carroça de búfalo. Quer dar uma volta?»',
        choices: [{ text: '「はい、乗ります！」', translation: '«Quero, sim!»', next: 'suigyu' }],
      },
      suigyu: {
        emoji: '🐃',
        text: '水牛の名前はハナコ。とてもゆっくり歩く。おじさんはさんしんをひきながら、島の歌を歌った。',
        translation: 'A búfala se chama Hanako. Ela anda bem devagar. O senhor cantou uma música da ilha, tocando sanshin.',
        choices: [{ text: '「その楽器は何ですか？」と聞く。', translation: 'Pergunta: «Que instrumento é esse?»', next: 'sanshin' }],
      },
      sanshin: {
        emoji: '🪕',
        text: '「さんしんだよ。へびの皮がはってあるんだ。糸は三本だけ。やってみる？」',
        translation: '«É o sanshin. Tem pele de cobra esticada. São só três cordas. Quer tentar?»',
        choices: [
          { text: 'さんしんをひいてみる。', translation: 'Experimenta tocar o sanshin.', next: 'tocar' },
          {
            text: '「四本の糸を、ぜんぶひいてみます。」',
            translation: '«Vou tocar as quatro cordas.»',
            wrong:
              'O senhor disse «糸は三本だけ» (ito wa sanbon dake): são só TRÊS cordas. O próprio nome, 三線 (sanshin), quer dizer «três fios». Quatro seria 四本 (yonhon).',
          },
        ],
      },
      tocar: {
        emoji: '🎶',
        text: 'リヌがひくと、ハナコが「モー」とないた。おじさんは、おなかをかかえてわらった。「ハナコも歌ってるよ！」そして、水牛車の旅は終わった。',
        translation: 'Quando o Linu tocou, a Hanako fez «Muuu». O senhor caiu na risada. «A Hanako está cantando também!» E o passeio de carroça terminou.',
        choices: [{ text: '「星のすなは、どこにありますか？」と聞く。', translation: 'Pergunta: «Onde fica a areia-estrela?»', next: 'hoshi' }],
      },
      hoshi: {
        emoji: '🚲',
        text: '「カイジ浜にあるよ。自転車で行けるさ。でも、すなは持って帰らないでね。星のすなは、少しずつへっているんだ。」',
        translation: '«Fica na praia de Kaiji. Dá para ir de bicicleta. Mas não leve a areia para casa, tá? A areia-estrela está diminuindo aos poucos.»',
        choices: [{ text: '自転車を借りて、カイジ浜に行く。', translation: 'Aluga uma bicicleta e vai à praia de Kaiji.', next: 'praia' }],
      },
      praia: {
        emoji: '⭐',
        text: '手のひらにすなをのせると、小さい星がたくさんあった。本当に星の形だ！',
        translation: 'Quando o Linu pôs areia na palma da mão, viu um monte de estrelinhas. Têm mesmo forma de estrela!',
        choices: [
          { text: '写真をとって、すなをはまにもどす。', translation: 'Tira uma foto e devolve a areia à praia.', next: 'final_bom' },
          { text: 'ポケットにすなをいっぱい入れる。', translation: 'Enche o bolso de areia.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: '夕方、リヌは島の西の古いさんばしで、夕日を見た。空も海も、赤くそまっている。帰りの船で、リヌはおじさんの歌を思い出していた。',
        translation:
          'No fim da tarde, o Linu viu o pôr do sol num píer antigo, no oeste da ilha. O céu e o mar estavam tingidos de vermelho. No barco de volta, ele lembrava da música do senhor.',
        ending: {
          tone: 'bom',
          title: 'Ilha das estrelas',
          message: 'O Linu andou de carroça de búfalo, tocou sanshin e viu a areia-estrela, e a deixou na praia, como pedem os moradores.',
        },
      },
      final_neutro: {
        emoji: '🏖️',
        text: 'ホテルで、ポケットからすながこぼれた。「すなは持って帰らないでね。」おじさんの言葉を思い出して、リヌは少しはずかしくなった。',
        translation: 'No hotel, a areia escorreu do bolso. «Não leve a areia para casa, tá?» O Linu lembrou das palavras do senhor e ficou meio envergonhado.',
        ending: {
          tone: 'neutro',
          title: 'Areia no bolso',
          message: 'A areia-estrela de Taketomi está diminuindo, e os moradores pedem que ela fique na praia. Olhe, fotografe e deixe lá.',
        },
      },
    },
  },
  {
    id: 'ja-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: '水泳部へようこそ',
    emoji: '🏊',
    summary: 'Numa escola de ensino médio de Kanazawa, o Linu entra para o clube de natação e descobre que o primeiro treino da temporada é… limpar a piscina.',
    cultural_context:
      'No Japão, quase todo aluno do fundamental II e do ensino médio participa de um «bukatsu», clube esportivo ou cultural que treina depois da aula e, muitas vezes, nos fins de semana. O clube ensina também a relação entre «senpai» (veteranos) e «kōhai» (calouros): o calouro cumprimenta primeiro, com um «Otsukaresama desu!», fala com os veteranos em linguagem polida e ajuda na arrumação. No começo do verão, a limpeza da piscina, verde de algas e cheia de folhas depois do inverno, é tarefa tradicional dos alunos.',
    start: 'start',
    glossary: [
      ['部活', 'atividades do clube escolar'],
      ['水泳部', 'clube de natação'],
      ['先輩', 'veterano, colega mais antigo (o calouro é o 後輩, kōhai)'],
      ['おつかれさまです', 'cumprimento entre colegas de clube ou de trabalho (literalmente, «você deve estar cansado»)'],
      ['およがない', 'não nadar (forma simples negativa de およぐ)'],
      ['何をすればいいですか？', 'O que eu devo fazer?'],
      ['一年生', 'aluno do primeiro ano'],
      ['ぴかぴか', 'brilhando de limpo'],
      ['練習', 'treino'],
      ['がんばります', 'vou me esforçar, vou dar o meu melhor'],
      ['さすが', 'como era de se esperar (elogio: さすがペンギン = pinguim é pinguim!)'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: '金沢の高校に来て、一週間。リヌは水泳部に入った。今日は、はじめての部活だ。プールに行くと、先輩たちがもう集まっていた。',
        translation:
          'Uma semana depois de chegar a uma escola de ensino médio em Kanazawa, o Linu entrou para o clube de natação. Hoje é o primeiro dia de clube. Quando ele chegou à piscina, os veteranos já estavam reunidos.',
        choices: [
          { text: '「おつかれさまです！」と大きい声であいさつする。', translation: 'Cumprimenta em voz alta: «Otsukaresama desu!»', next: 'senpai' },
          { text: '何も言わないで、プールを見る。', translation: 'Não diz nada e fica olhando a piscina.', next: 'silencio' },
        ],
      },
      silencio: {
        emoji: '🤨',
        text: 'キャプテンのたくみ先輩が、リヌを見た。「リヌくん、部活では、来たらまずあいさつだよ。」',
        translation: 'O capitão, o veterano Takumi, olhou para o Linu. «Linu, no clube, chegou, cumprimentou. Isso vem primeiro.»',
        choices: [{ text: '「すみません！おつかれさまです！」', translation: '«Desculpe! Otsukaresama desu!»', next: 'senpai' }],
      },
      senpai: {
        emoji: '🍂',
        text: '「おつかれ！リヌくん、今日はおよがないよ。プールそうじの日なんだ。」プールの水はみどりで、葉っぱがたくさんういている。',
        translation: '«E aí! Linu, hoje a gente não vai nadar. É o dia de limpar a piscina.» A água da piscina está verde, cheia de folhas boiando.',
        choices: [
          { text: '「わかりました。何をすればいいですか？」', translation: '«Entendi. O que eu devo fazer?»', next: 'trabalho' },
          {
            text: 'すぐに、みどりの水にとびこむ。',
            translation: 'Pula logo na água verde.',
            wrong:
              'O Takumi disse «今日はおよがないよ» (kyō wa oyoganai yo): hoje NÃO vamos nadar, é dia de limpar a piscina. «およがない» é a forma simples negativa de «およぐ» (nadar). E a água está verde de algas!',
          },
        ],
      },
      trabalho: {
        emoji: '🧽',
        text: '「一年生は、ブラシでかべをあらって。水をぬいたら、下もみんなであらうよ。」',
        translation: '«O pessoal do primeiro ano esfrega as paredes com escova. Depois que tirarmos a água, todo mundo lava o fundo também.»',
        choices: [{ text: 'ブラシを持って、一生けんめいあらう。', translation: 'Pega a escova e esfrega com toda a força.', next: 'limpeza' }],
      },
      limpeza: {
        emoji: '✨',
        text: '三時間後、プールはぴかぴかになった。みんなつかれたけど、楽しかった。たくみ先輩がホースで水をまいて、みんなわらっている。',
        translation:
          'Três horas depois, a piscina estava brilhando. Todo mundo ficou cansado, mas foi divertido. O Takumi está jogando água com a mangueira, e todos riem.',
        choices: [
          { text: '「先輩、明日はおよげますか？」と聞く。', translation: 'Pergunta: «Veterano, amanhã a gente pode nadar?»', next: 'amanha' },
          { text: 'ホースをとって、先輩に水をかける。', translation: 'Pega a mangueira e joga água no veterano.', next: 'final_neutro' },
        ],
      },
      amanha: {
        emoji: '🏊',
        text: '「うん。明日は水を入れて、夏の練習が始まる。リヌくん、一年生だけど、一番に入っていいよ。」',
        translation: '«Sim. Amanhã a gente enche a piscina e começa o treino de verão. Linu, você é do primeiro ano, mas pode ser o primeiro a entrar.»',
        choices: [
          { text: '「ありがとうございます！がんばります！」', translation: '«Muito obrigado! Vou dar o meu melhor!»', next: 'final_bom' },
          {
            text: '「明日もそうじですね。わかりました。」',
            translation: '«Amanhã também é limpeza, né? Entendi.»',
            wrong:
              'O Takumi disse que amanhã «夏の練習が始まる» (natsu no renshū ga hajimaru): começa o TREINO de verão, com a piscina cheia. A limpeza foi hoje!',
          },
        ],
      },
      final_bom: {
        emoji: '🥇',
        text: '次の日、きれいな水のプールに、リヌは一番にとびこんだ。先輩たちは目を丸くした。「はやい！」「さすがペンギン！」',
        translation:
          'No dia seguinte, o Linu foi o primeiro a pular na piscina de água limpinha. Os veteranos arregalaram os olhos. «Que rápido!» «Pinguim é pinguim!»',
        ending: {
          tone: 'bom',
          title: 'Estrela do clube',
          message: 'O Linu cumprimentou os veteranos, limpou a piscina com o time e estreou no treino de verão como o nadador mais rápido do clube.',
        },
      },
      final_neutro: {
        emoji: '💦',
        text: 'たくみ先輩は、びしょびしょになった。「……リヌくん。明日、プールのまわりを十回走ってね。」ほかの先輩たちは、下を向いてわらっている。',
        translation:
          'O Takumi ficou encharcado. «…Linu. Amanhã, dez voltas correndo em volta da piscina, tá?» Os outros veteranos olham para o chão, segurando o riso.',
        ending: {
          tone: 'neutro',
          title: 'Dez voltas',
          message: 'Brincadeira com veterano tem limite! No clube japonês, o calouro espera o senpai começar a bagunça, e não o contrário.',
        },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'ja-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: '富士山のご来光',
    emoji: '🗻',
    summary: 'O Linu sobe o monte Fuji com o amigo Kenji para ver o sol nascer lá de cima, mas o ar rarefeito e a pressa podem estragar tudo.',
    cultural_context:
      'Com 3.776 metros, o monte Fuji é a montanha mais alta do Japão e, desde 2013, Patrimônio Mundial como «lugar sagrado e fonte de inspiração artística». A temporada de escalada vai só de julho ao começo de setembro. Muita gente sobe à tarde, descansa num abrigo de montanha (山小屋, yamagoya) e sai de madrugada para ver o «goraikō», o nascer do sol visto do alto, que antigamente se acreditava ser a aparição de um buda. Por causa do excesso de gente, desde 2024 as trilhas cobram uma taxa e controlam o número de alpinistas.',
    start: 'start',
    glossary: [
      ['頂上', 'topo, cume'],
      ['〜合目', 'posto da subida (a trilha do Fuji é dividida em dez: 五合目 = quinto posto)'],
      ['山小屋', 'abrigo de montanha, onde se come e dorme'],
      ['ご来光', 'o nascer do sol visto do alto de uma montanha'],
      ['高山病', 'mal da altitude'],
      ['急いで', 'com pressa'],
      ['〜と思ったら', 'mal… (e logo algo aconteceu): 眠ったと思ったら = mal peguei no sono'],
      ['起こされた', 'fui acordado (forma passiva de 起こす)'],
      ['少しずつ', 'pouco a pouco'],
      ['東・西', 'leste / oeste'],
      ['来てよかった', 'que bom que eu vim'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: '七月の終わり、リヌは友だちのけんじと、富士山の五合目に立っていた。山が大好きなけんじが言った。「今日は八合目の山小屋まで登って、少し寝る。真夜中に出発して、頂上でご来光を見るんだ。」',
        translation:
          'Fim de julho. O Linu estava no quinto posto do monte Fuji com o amigo Kenji. O Kenji, que adora montanha, disse: «Hoje a gente sobe até o abrigo do oitavo posto e dorme um pouco. Sai no meio da noite e vê o goraikō, o nascer do sol, lá do topo.»',
        choices: [
          { text: 'けんじのペースで、ゆっくり登り始める。', translation: 'Começa a subir devagar, no ritmo do Kenji.', next: 'subida' },
          { text: '「ぼくは寒さに強いから、先に行くよ！」と走り出す。', translation: '«Eu aguento frio, vou na frente!», e sai correndo.', next: 'pressa' },
        ],
      },
      pressa: {
        emoji: '🤢',
        text: '三十分後、リヌは道のわきに座りこんでいた。頭が痛くて、気持ちが悪い。追いついたけんじが言った。「高山病だよ。急いで登ると、体が空気のうすさになれないんだ。」',
        translation:
          'Meia hora depois, o Linu estava sentado na beira da trilha. A cabeça doía e ele estava enjoado. O Kenji o alcançou e disse: «É mal da altitude. Quando se sobe com pressa, o corpo não se acostuma com o ar rarefeito.»',
        choices: [
          { text: '「ごめん……。水を飲んで、少し休むよ。」', translation: '«Desculpa… Vou beber água e descansar um pouco.»', next: 'subida' },
          {
            text: '「じゃあ、もっと急いで登れば、早く治るね。」',
            translation: '«Então, se eu subir ainda mais rápido, passa logo.»',
            wrong:
              'O Kenji explicou que o mal da altitude (高山病, kōzanbyō) vem justamente da pressa: «急いで登ると、体が空気のうすさになれない», subindo com pressa, o corpo não se acostuma ao ar rarefeito. A saída é descansar, beber água e ir devagar.',
          },
        ],
      },
      subida: {
        emoji: '☁️',
        text: 'ゆっくり歩くと、まわりを見るよゆうができた。下には、雲の海が広がっている。夕方、ふたりは八合目の山小屋に着いた。',
        translation:
          'Andando devagar, deu até para apreciar a paisagem. Lá embaixo, um mar de nuvens se estendia. No fim da tarde, os dois chegaram ao abrigo do oitavo posto.',
        choices: [{ text: '山小屋でカレーを食べて、早めに寝る。', translation: 'Come curry no abrigo e vai dormir cedo.', next: 'yamagoya' }],
      },
      yamagoya: {
        emoji: '🛖',
        text: '山小屋はせまくて、知らない人たちとならんで寝る。夜の十時にやっと眠ったと思ったら、けんじに起こされた。「リヌ、一時だよ。出発しよう。」',
        translation:
          'O abrigo é apertado, e se dorme lado a lado com desconhecidos. Mal o Linu pegou no sono, às dez da noite, e o Kenji já o acordou. «Linu, é uma hora. Vamos sair.»',
        choices: [
          { text: '起きて、ヘッドライトをつける。', translation: 'Levanta e acende a lanterna de cabeça.', next: 'noite' },
          { text: '「あと五分だけ……。」と、また目をとじる。', translation: '«Só mais cinco minutinhos…», e fecha os olhos de novo.', next: 'final_neutro' },
        ],
      },
      noite: {
        emoji: '🔦',
        text: '外は真っ暗で、とても寒い。でも、上を見ると、ヘッドライトの光が山の上まで長い列を作っていた。「光の川みたいだね。」とけんじが言った。',
        translation:
          'Lá fora está um breu e muito frio. Mas, olhando para cima, as lanternas formavam uma longa fila até o alto da montanha. «Parece um rio de luz», disse o Kenji.',
        choices: [
          {
            text: '「うん。ぼくたちも、あの川の一部だ。」と言って、列に入る。',
            translation: '«É. A gente também faz parte desse rio», diz o Linu, entrando na fila.',
            next: 'cume',
          },
        ],
      },
      cume: {
        emoji: '🌄',
        text: '夜明けの少し前、ふたりはついに頂上に着いた。気温は五度ぐらい。東の空が、少しずつオレンジに変わっていく。まわりの人たちは、静かにその時を待っている。',
        translation:
          'Pouco antes do amanhecer, os dois finalmente chegaram ao topo. A temperatura estava em uns cinco graus. O céu a leste foi ficando laranja, pouco a pouco. As pessoas em volta esperavam o momento em silêncio.',
        choices: [
          { text: 'けんじとならんで、東の空を見る。', translation: 'Fica ao lado do Kenji, olhando para o leste.', next: 'sol' },
          {
            text: '西の空に向かって、カメラをかまえる。',
            translation: 'Vira para o oeste e prepara a câmera.',
            wrong:
              'O texto diz que é «東の空» (higashi no sora), o céu a LESTE, que está ficando laranja: o sol nasce a leste. 西 (nishi) é oeste, onde ele se põe!',
          },
        ],
      },
      sol: {
        emoji: '☀️',
        text: '雲の海の向こうから、太陽が顔を出した。だれかが「万歳！」と声を上げ、みんなが拍手した。けんじが言った。「これがご来光。昔の人は、ここで仏様に会えると信じていたんだって。」',
        translation:
          'Do outro lado do mar de nuvens, o sol apareceu. Alguém gritou «Banzai!», e todo mundo aplaudiu. O Kenji disse: «Isto é o goraikō. Dizem que antigamente o povo acreditava que aqui se encontrava um buda.»',
        choices: [{ text: '「来てよかった。ありがとう、けんじ。」', translation: '«Que bom que eu vim. Obrigado, Kenji.»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'リヌはしばらく何も言わずに、金色に光る雲の海を見ていた。日本で一番高い場所から見たこの朝を、リヌは一生忘れないだろう。',
        translation:
          'O Linu ficou um tempo sem dizer nada, olhando o mar de nuvens brilhando dourado. Aquela manhã vista do lugar mais alto do Japão, ele nunca mais vai esquecer.',
        ending: {
          tone: 'bom',
          title: 'Goraikō',
          message: 'O Linu subiu devagar, respeitou a altitude e viu o sol nascer sobre um mar de nuvens, do alto do Japão.',
        },
      },
      final_neutro: {
        emoji: '🛌',
        text: '目が覚めると、外はもう明るくなり始めていた。山小屋の前で、けんじが空を指さしている。雲の上から、太陽が出てきた。「頂上じゃないけど、ここからでもきれいだね。」とけんじは笑った。',
        translation:
          'Quando o Linu acordou, lá fora já estava clareando. Na frente do abrigo, o Kenji apontava para o céu. O sol saiu por cima das nuvens. «Não é o topo, mas daqui também é bonito, né?», riu o Kenji.',
        ending: {
          tone: 'neutro',
          title: 'Sol do oitavo posto',
          message: 'O sol nasceu lindo mesmo visto do abrigo, mas o topo ficou para a próxima. No Fuji, quem quer o goraikō lá em cima levanta à uma da manhã!',
        },
      },
    },
  },
  {
    id: 'ja-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: '神戸からサントスへ',
    emoji: '🚢',
    summary: 'Em Kobe, no antigo centro de emigração, o Linu conhece a Maria, bisneta de um imigrante do Kasato Maru, e refaz com ela o caminho até o porto.',
    cultural_context:
      'Em 28 de abril de 1908, o navio Kasato Maru saiu do porto de Kobe com 781 imigrantes japoneses, a maioria de Okinawa e Kagoshima, e chegou a Santos em 18 de junho, hoje Dia da Imigração Japonesa no Brasil. Muitos fugiram das fazendas de café, onde o trabalho era duro e o pagamento, bem menor que o prometido, e fundaram colônias pelo interior, como Registro, que ficou conhecida pelo chá, e Bastos, a «capital do ovo». Em Kobe, o prédio do antigo centro de emigração, aberto em 1928, hospedava os emigrantes nos dias antes do embarque e hoje é um museu; a ladeira que desce dele até o porto ficou conhecida como «Ladeira dos Emigrantes», e no parque Meriken, à beira do cais, há uma estátua em homenagem a eles.',
    start: 'start',
    glossary: [
      ['移住', 'mudança definitiva para outro país'],
      ['移民', 'imigrante, emigrante; imigração'],
      ['日系四世', 'descendente de japoneses da quarta geração (一世 issei é o próprio imigrante)'],
      ['笠戸丸', 'Kasato Maru, o primeiro navio de imigrantes japoneses para o Brasil'],
      ['ひいおじいちゃん', 'bisavô (em família, com carinho; o bisavô dos outros é ひいおじいさん)'],
      ['千九百八年', 'o ano de 1908 (sen kyūhyaku hachi-nen)'],
      ['渡る', 'atravessar; ir para o outro lado do mar'],
      ['〜そうです', 'dizem que… (o que se ouviu contar)'],
      ['坂を下りる', 'descer a ladeira'],
      ['かもしれません', 'talvez, pode ser que'],
      ['希望', 'esperança'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: '神戸の港を見下ろす坂の上に、古い建物がある。昔、南米へ向かう人たちが、船に乗る前の日々を過ごした場所だ。今は「海外移住と文化の交流センター」になっている。リヌは入口で深呼吸した。',
        translation:
          'No alto de uma ladeira com vista para o porto de Kobe há um prédio antigo. Era ali que as pessoas que partiam para a América do Sul passavam os últimos dias antes de embarcar. Hoje é o «Centro de Emigração e Intercâmbio Cultural». Na entrada, o Linu respirou fundo.',
        choices: [
          { text: '展示室に入る。', translation: 'Entra na sala de exposição.', next: 'exposicao' },
          { text: '受付の人に、この建物について聞く。', translation: 'Pergunta sobre o prédio na recepção.', next: 'recepcao' },
        ],
      },
      recepcao: {
        emoji: '💁',
        text: '受付の女の人が教えてくれた。「この建物は千九百二十八年にできました。移住する人たちはここに泊まって、健康診断を受けたり、ポルトガル語や向こうの生活について勉強したりしたんですよ。」',
        translation:
          'A moça da recepção explicou: «Este prédio foi inaugurado em 1928. Quem ia emigrar se hospedava aqui, fazia exames médicos e estudava português e a vida do outro lado do mundo.»',
        choices: [{ text: 'お礼を言って、展示室に入る。', translation: 'Agradece e entra na sala de exposição.', next: 'exposicao' }],
      },
      exposicao: {
        emoji: '🛏️',
        text: '二階には、当時の部屋が再現されていた。せまい二段ベッドが並んでいる。ベッドの前で写真をとっていた女の人が、リヌに話しかけてきた。「もしかして、ブラジルから来たんですか？かばんにブラジルの旗がついていたので。」',
        translation:
          'No segundo andar, um quarto da época foi reconstituído. Há beliches estreitos enfileirados. Uma moça que fotografava as camas puxou conversa com o Linu. «Por acaso você veio do Brasil? É que tem uma bandeira do Brasil na sua mochila.»',
        choices: [
          { text: '「はい、サンパウロから来ました！」と答える。', translation: 'Responde: «Sim, vim de São Paulo!»', next: 'maria' },
          {
            text: '「すみません、急いでいるので。」と言って、先に進む。',
            translation: 'Diz «Desculpe, estou com pressa» e segue adiante.',
            next: 'final_neutro',
          },
        ],
      },
      maria: {
        emoji: '👩',
        text: '女の人の名前はマリア。サンパウロ生まれの日系四世で、今は大阪の大学に留学している。「わたしのひいおじいちゃんは、千九百八年に『笠戸丸』でブラジルに渡ったんです。十九さいでした。」',
        translation:
          'A moça se chama Maria. É nipo-brasileira de quarta geração, nascida em São Paulo, e faz intercâmbio numa universidade de Osaka. «Meu bisavô foi para o Brasil em 1908, no Kasato Maru. Tinha dezenove anos.»',
        choices: [
          { text: '「笠戸丸って、最初の移民船ですよね！」', translation: '«O Kasato Maru foi o primeiro navio de imigrantes, né?»', next: 'kasato' },
          {
            text: '「じゃあ、ひいおじいさんは千九百八十年にブラジルに行ったんですね。」',
            translation: '«Então seu bisavô foi para o Brasil em 1980.»',
            wrong:
              'A Maria disse «千九百八年» (sen kyūhyaku hachi-nen): 1908, não 1980, que seria 千九百八十年 (sen kyūhyaku hachijū-nen). O Kasato Maru chegou a Santos em 18 de junho de 1908.',
          },
        ],
      },
      kasato: {
        emoji: '⚓',
        text: '「そうです。七百八十一人が乗って、五十日以上かけてサントスの港に着きました。でも、コーヒー農園の仕事はとても大変で、給料も約束よりずっと少なかったそうです。」',
        translation:
          '«Isso. Embarcaram setecentas e oitenta e uma pessoas, e a viagem até o porto de Santos levou mais de cinquenta dias. Mas o trabalho nas fazendas de café era duríssimo, e dizem que o salário era muito menor do que o prometido.»',
        choices: [{ text: '「それで、ひいおじいさんはどうしたんですか？」', translation: '«E o que o seu bisavô fez?»', next: 'registro' }],
      },
      registro: {
        emoji: '🍵',
        text: '「何年か後に、サンパウロ州の南にあるレジストロという町に移りました。そこで日本人たちはお茶を育てて、ブラジルの紅茶を作ったんです。それで、レジストロは『お茶の町』と呼ばれるようになりました。」',
        translation:
          '«Alguns anos depois, ele se mudou para uma cidade chamada Registro, no sul do estado de São Paulo. Lá, os japoneses plantaram chá e fizeram chá-preto brasileiro. Foi assim que Registro passou a ser chamada de «cidade do chá».»',
        choices: [
          {
            text: '「ブラジルのお茶のはじまりに、日本人がいたんですね。」',
            translation: '«Então os japoneses estão no começo da história do chá no Brasil.»',
            next: 'saka',
          },
          { text: '「ぼく、レジストロの紅茶を飲んだことがあります！」', translation: '«Eu já tomei chá-preto de Registro!»', next: 'saka' },
        ],
      },
      saka: {
        emoji: '⛰️',
        text: 'マリアは窓の外を指さした。「このセンターから港へ下りていく坂は、『移民坂』と呼ばれています。移住する人たちは、この坂を下りて、船が待つ港まで歩いていったんです。」',
        translation:
          'A Maria apontou para fora da janela. «A ladeira que desce deste centro até o porto é chamada de «Ladeira dos Emigrantes». Quem ia emigrar descia por ela, a pé, até o porto onde o navio esperava.»',
        choices: [
          { text: '「いっしょに歩いてみませんか？」', translation: '«Vamos descer juntos?»', next: 'ladeira' },
          {
            text: '「じゃあ、その坂を上って、山のほうに行ったんですね。」',
            translation: '«Então eles subiam a ladeira, em direção à montanha.»',
            wrong:
              'A Maria disse «坂を下りて» (saka o orite): DESCIAM a ladeira, até o porto onde o navio esperava. 下りる (oriru) é descer; subir seria 上る (noboru).',
          },
        ],
      },
      ladeira: {
        emoji: '🌊',
        text: 'ふたりは移民坂をゆっくり下りていった。坂の向こうに、青い海と港が見える。マリアが静かに言った。「ひいおじいちゃんが船の上から最後に見た日本も、こんな景色だったのかもしれません。」',
        translation:
          'Os dois desceram devagar a Ladeira dos Emigrantes. Lá embaixo, dava para ver o mar azul e o porto. A Maria disse baixinho: «Talvez o último Japão que meu bisavô viu, do navio, tenha sido esta paisagem.»',
        choices: [{ text: '港の近くの公園まで歩く。', translation: 'Caminham até o parque perto do porto.', next: 'porto' }],
      },
      porto: {
        emoji: '🗽',
        text: 'メリケンパークに、家族の像が立っていた。父親が海の向こうを指さし、母親と子どもがその先を見つめている。像の名前は「希望の船出」。マリアはスマホを出して、サンパウロのおばあちゃんにビデオ電話をかけた。',
        translation:
          'No parque Meriken havia a estátua de uma família. O pai aponta para o outro lado do mar, e a mãe e o filho olham na mesma direção. A estátua se chama «Partida da esperança». A Maria pegou o celular e fez uma chamada de vídeo para a avó, em São Paulo.',
        choices: [
          {
            text: 'リヌもポルトガル語で、マリアのおばあちゃんにあいさつする。',
            translation: 'O Linu também cumprimenta a avó da Maria, em português.',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '🇯🇵',
        text: '画面の向こうで、マリアのおばあちゃんが笑いながら手をふった。リヌは、神戸の海とサンパウロの町が、一本の長い道でつながっているような気がした。',
        translation:
          'Do outro lado da tela, a avó da Maria sorria e acenava. O Linu sentiu como se o mar de Kobe e a cidade de São Paulo estivessem ligados por um único e longo caminho.',
        ending: {
          tone: 'bom',
          title: 'De Kobe a Santos',
          message: 'O Linu refez com a Maria o caminho dos emigrantes até o porto de Kobe e viu como o Japão e o Brasil estão ligados desde 1908.',
        },
      },
      final_neutro: {
        emoji: '🚃',
        text: 'リヌはひとりで展示を見て回った。古い写真や船のきっぷはおもしろかったが、帰りの電車の中で、あの女の人の話を聞けばよかったと思った。',
        translation:
          'O Linu percorreu a exposição sozinho. As fotos antigas e as passagens de navio eram interessantes, mas, no trem de volta, ele pensou que devia ter ouvido o que aquela moça tinha a dizer.',
        ending: {
          tone: 'neutro',
          title: 'A história que ficou por ouvir',
          message: 'O museu é bonito, mas a melhor parte da história estava na conversa que o Linu recusou. Às vezes, vale parar e escutar.',
        },
      },
    },
  },
  {
    id: 'ja-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: '合掌造りの冬',
    emoji: '🏘️',
    summary:
      'Em Shirakawa-gō, vila de casas de telhado de palha nas montanhas, o Linu passa uma noite de neve numa pousada e descobre o «yui», o mutirão japonês.',
    cultural_context:
      'Shirakawa-gō, na província de Gifu, é famosa pelas casas «gasshō-zukuri», de telhados de palha íngremes como mãos postas em oração (gasshō), feitos para aguentar a neve pesada das montanhas. A vila é Patrimônio Mundial desde 1995, junto com Gokayama. Os telhados são refeitos a cada trinta ou quarenta anos pelo «yui», o trabalho coletivo em que os vizinhos se ajudam sem cobrar nada, como num mutirão; e a fumaça da lareira no chão (irori) protege a palha e a madeira dos insetos. Como as casas são moradias de verdade, a vila pede aos turistas que não entrem nos quintais.',
    start: 'start',
    glossary: [
      ['合掌造り', 'gasshō-zukuri: casa de telhado íngreme, «como mãos em oração»'],
      ['かやぶき屋根', 'telhado de palha (かや = capim)'],
      ['民宿', 'pousada familiar'],
      ['入らないでください', 'por favor, não entre (〜ないでください = por favor, não…)'],
      ['いろり', 'lareira quadrada no chão da casa tradicional'],
      ['けむり', 'fumaça'],
      ['守る', 'proteger'],
      ['結', 'yui: ajuda mútua entre vizinhos, como o nosso mutirão'],
      ['手伝う', 'ajudar'],
      ['雪かき', 'tirar a neve com pá'],
      ['〜気がした', 'teve a impressão de que…, sentiu que…'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: '一月、リヌはバスで白川郷に着いた。山にかこまれた村に、雪をかぶった大きなかやぶき屋根の家が並んでいる。まるで絵本の中の世界だ。',
        translation:
          'Em janeiro, o Linu chegou de ônibus a Shirakawa-gō. Na vila cercada de montanhas, enfileiram-se casas enormes de telhado de palha cobertas de neve. Parece um mundo de livro ilustrado.',
        choices: [
          { text: '予約した民宿へ向かう。', translation: 'Vai para a pousada que reservou.', next: 'minshuku' },
          { text: '村を歩いて、写真をとる。', translation: 'Passeia pela vila tirando fotos.', next: 'foto' },
        ],
      },
      foto: {
        emoji: '📸',
        text: '田んぼも道も真っ白だ。写真に夢中になって、リヌはある家の庭に入ってしまった。すると、家の人が出てきて言った。「すみません、ここは私たちの家なので、入らないでください。」',
        translation:
          'Os arrozais e as ruas estão todos brancos. Empolgado com as fotos, o Linu acabou entrando no quintal de uma casa. Então uma moradora saiu e disse: «Com licença, aqui é a nossa casa. Por favor, não entre.»',
        choices: [
          { text: '「失礼しました！」と頭を下げて、道にもどる。', translation: 'Diz «Desculpe!», faz uma reverência e volta para a rua.', next: 'minshuku' },
          {
            text: '「ありがとうございます！」と言って、家の中に入る。',
            translation: 'Diz «Muito obrigado!» e entra na casa.',
            wrong:
              'A moradora disse «入らないでください» (hairanaide kudasai): «por favor, NÃO entre». 〜ないでください é o pedido negativo. As casas de Shirakawa-gō são casas de verdade, com gente morando!',
          },
        ],
      },
      minshuku: {
        emoji: '🔥',
        text: '民宿では、おばあさんがいろりの前で待っていた。「いらっしゃい。寒かったでしょう。」いろりでは火が燃えていて、天井は真っ黒だ。',
        translation:
          'Na pousada, uma senhora esperava na frente da lareira. «Seja bem-vindo. Deve estar com frio, né?» O fogo ardia na lareira, e o teto estava todo preto.',
        choices: [
          { text: '「天井は、どうして黒いんですか？」と聞く。', translation: 'Pergunta: «Por que o teto é preto?»', next: 'irori' },
          { text: 'いろりのそばで、夕ご飯を待つ。', translation: 'Espera o jantar ao lado da lareira.', next: 'jantar' },
        ],
      },
      irori: {
        emoji: '💨',
        text: '「いろりのけむりが、屋根のかやと木を守るんだよ。虫がつかないし、長持ちするの。」とおばあさんは言った。',
        translation: '«A fumaça da lareira protege a palha e a madeira do telhado. Não dá bicho, e dura muito mais», disse a senhora.',
        choices: [
          { text: '「けむりが屋根を守っているんですね。」', translation: '«Então é a fumaça que protege o telhado.»', next: 'jantar' },
          {
            text: '「じゃあ、けむりは屋根に悪いんですね。」',
            translation: '«Então a fumaça faz mal para o telhado.»',
            wrong:
              'A senhora disse o contrário: a fumaça «屋根のかやと木を守る» (yane no kaya to ki o mamoru), PROTEGE a palha e a madeira. Afasta os insetos (虫がつかない) e faz o telhado durar mais (長持ちする).',
          },
        ],
      },
      jantar: {
        emoji: '🍲',
        text: '夕ご飯は、山菜と川の魚、それに「ほおばみそ」。大きなほおの葉の上で、みそを焼いて食べる料理だ。食べながら、おばあさんが屋根の話をしてくれた。「屋根は三十年に一回ぐらい、ふきかえるの。村の人が百人以上集まって、みんなでいっぺんにやるんだよ。これを『結』と言うの。」',
        translation:
          'O jantar foi verduras da montanha, peixe de rio e «hoba-miso», missô tostado em cima de uma folha grande de magnólia. Enquanto comiam, a senhora falou do telhado. «O telhado é refeito mais ou menos a cada trinta anos. Mais de cem pessoas da vila se juntam e fazem tudo de uma vez. Isso se chama «yui».»',
        choices: [
          { text: '「手伝った人は、お金をもらえるんですか？」と聞く。', translation: 'Pergunta: «Quem ajuda recebe dinheiro?»', next: 'pagamento' },
          { text: '「ブラジルにも、にていることばがあります！」と言う。', translation: 'Diz: «No Brasil também tem uma palavra parecida!»', next: 'mutirao' },
        ],
      },
      pagamento: {
        emoji: '🤝',
        text: 'おばあさんは笑った。「お金はもらわないよ。今年はうちを手伝ってもらって、来年はとなりの家を手伝う。お金じゃなくて、手でかえすの。」',
        translation:
          'A senhora riu. «Ninguém recebe dinheiro. Este ano os vizinhos ajudam a nossa casa, e no ano que vem a gente ajuda a casa do lado. Não se paga com dinheiro: se paga com as mãos.»',
        choices: [{ text: '「ブラジルの『ムチロン』みたいですね！」', translation: '«Parece o mutirão do Brasil!»', next: 'mutirao' }],
      },
      mutirao: {
        emoji: '🇧🇷',
        text: 'リヌは、ブラジルの「ムチロン」の話をした。近所の人が集まって、いっしょに家を建てたり、道を直したりすることだ。おばあさんは目をかがやかせた。「遠い国にも、結があるんだねえ。」',
        translation:
          'O Linu contou sobre o «mutirão» brasileiro: vizinhos que se juntam para construir uma casa ou consertar uma rua. Os olhos da senhora brilharam. «Até num país tão longe existe o yui, olha só.»',
        choices: [{ text: '夜の村を見に、外に出る。', translation: 'Sai para ver a vila à noite.', next: 'noite' }],
      },
      noite: {
        emoji: '🌨️',
        text: '外に出ると、雪がしんしんとふっていた。家々の窓から、あたたかい光がもれている。もどると、おばあさんが言った。「明日の朝、家のまわりの雪かきをするけど、手伝ってくれる？」',
        translation:
          'Lá fora, a neve caía silenciosa. Uma luz quentinha escapava das janelas das casas. Quando ele voltou, a senhora disse: «Amanhã cedo vamos tirar a neve em volta da casa. Você ajuda?»',
        choices: [
          { text: '「はい、もちろんです！」', translation: '«Claro que sim!»', next: 'final_bom' },
          { text: '「寒さは平気ですけど、朝は苦手で……。」', translation: '«Frio não é problema, mas acordar cedo…»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '⛏️',
        text: '次の朝、リヌは村の人たちといっしょに雪かきをした。ペンギンの足は雪に強い。「助かったよ！」とみんなが笑った。リヌは、自分も少しだけ「結」の仲間になれた気がした。',
        translation:
          'Na manhã seguinte, o Linu tirou neve junto com o pessoal da vila. Pé de pinguim é feito para a neve. «Ajudou muito!», disseram todos, rindo. O Linu sentiu que, um pouquinho, também tinha entrado para o yui.',
        ending: {
          tone: 'bom',
          title: 'Parte do yui',
          message: 'O Linu respeitou as casas dos moradores, aprendeu o segredo da fumaça da lareira e entrou no mutirão de neve de Shirakawa-gō.',
        },
      },
      final_neutro: {
        emoji: '😴',
        text: 'リヌが起きたのは、十時だった。雪かきは、もうとっくに終わっていた。「よく寝たねえ。」とおばあさんに言われて、リヌは少しはずかしくなった。',
        translation: 'O Linu acordou às dez. A neve já tinha sido tirada fazia tempo. «Dormiu bem, hein?», disse a senhora, e o Linu ficou meio sem graça.',
        ending: {
          tone: 'neutro',
          title: 'Dorminhoco na neve',
          message: 'No interior do Japão, o dia começa cedo, e o trabalho coletivo não espera. Da próxima vez, ponha o despertador!',
        },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'ja-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'ゴールデンウィークのたこ合戦',
    emoji: '🪁',
    summary: 'Na Golden Week, o Linu visita os Nakamura, família nipo-brasileira que vive em Hamamatsu, e entra na batalha de pipas gigantes das dunas.',
    cultural_context:
      'A Golden Week junta quatro feriados do fim de abril ao começo de maio, e meio Japão viaja ao mesmo tempo. Em Hamamatsu, na província de Shizuoka, é a época do Festival de Hamamatsu: de 3 a 5 de maio, nas dunas de Nakatajima, cada bairro solta pipas enormes para celebrar os bebês nascidos no ano e trava «batalhas», tentando cortar a linha das pipas rivais, ao som de cornetas. Desde 1990, quando o Japão abriu vistos de trabalho para descendentes de japoneses, milhares de nipo-brasileiros foram trabalhar nas fábricas da região, os «dekasseguis», e Hamamatsu tem hoje uma das maiores comunidades brasileiras do Japão, com escolas, igrejas e mercados brasileiros. Muitos filhos dessas famílias nasceram no Japão e crescem entre as duas línguas.',
    start: 'start',
    glossary: [
      ['ゴールデンウィーク', 'Golden Week, a sequência de feriados do fim de abril ao começo de maio'],
      ['日系人', 'descendente de japoneses nascido fora do Japão (nikkeijin)'],
      ['おじゃまします', 'com licença (ao entrar na casa de alguém; literalmente, «vou incomodar»)'],
      ['ポルトガル語より日本語のほうが上手', 'fala melhor japonês do que português (na comparação «〜より〜のほうが», quem «ganha» vem com のほうが)'],
      ['〜って言われる', 'ser chamado de…, ouvir que é… (passiva de 言う)'],
      ['たこあげ', 'soltar pipa (たこ também é polvo; aqui é pipa)'],
      ['糸', 'linha'],
      ['〜ないように', 'para não… (切られないように = para não ser cortada)'],
      ['合戦', 'batalha'],
      ['両方', 'os dois, ambos'],
      ['ドンマイ', "não esquenta! (do inglês «don't mind», gíria de esporte)"],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'ゴールデンウィーク。リヌは、浜松に住むなかむらさんの家に遊びに来た。なかむらさん一家はブラジル出身の日系人で、お父さんのマルコスさんは三十年前に、工場で働くために日本に来た。玄関を開けると、パステルのいいにおいがした。',
        translation:
          'Golden Week. O Linu foi visitar a casa dos Nakamura, que moram em Hamamatsu. Os Nakamura são uma família nipo-brasileira, e o pai, o Marcos, veio para o Japão há trinta anos para trabalhar numa fábrica. Quando a porta se abriu, veio um cheirinho bom de pastel.',
        choices: [
          { text: '「おじゃまします！」と日本語であいさつする。', translation: 'Cumprimenta em japonês: «Com licença!»', next: 'casa' },
          { text: '「ボア・タルジ！」とポルトガル語であいさつする。', translation: 'Cumprimenta em português: «Boa tarde!»', next: 'portugues' },
        ],
      },
      portugues: {
        emoji: '😄',
        text: 'マルコスさんが大笑いした。「ボア・タルジ！ようこそ！うちでは、日本語とポルトガル語がまざってるんだ。」',
        translation: 'O Marcos caiu na risada. «Boa tarde! Seja bem-vindo! Aqui em casa, japonês e português andam misturados.»',
        choices: [{ text: 'くつをぬいで、リビングに入る。', translation: 'Tira os sapatos e entra na sala.', next: 'casa' }],
      },
      casa: {
        emoji: '🎮',
        text: 'リビングでは、高校生のルーカスがゲームをしていた。マルコスさんが言った。「ルーカスは浜松生まれなんだ。ポルトガル語より日本語のほうが上手なんだよ。」ルーカスは少し困った顔で笑った。',
        translation:
          'Na sala, o Lucas, que está no ensino médio, jogava videogame. O Marcos disse: «O Lucas nasceu em Hamamatsu. Ele fala japonês melhor do que português.» O Lucas deu um sorriso meio sem jeito.',
        choices: [
          { text: '「ルーカス、ブラジルに行ったことある？」と聞く。', translation: 'Pergunta: «Lucas, você já foi ao Brasil?»', next: 'lucas' },
          { text: '「明日は何をするんですか？」とマルコスさんに聞く。', translation: 'Pergunta ao Marcos: «O que vamos fazer amanhã?»', next: 'plano' },
          {
            text: '「じゃあ、ルーカスはポルトガル語のほうが得意なんだね。」',
            translation: '«Então o Lucas é melhor em português.»',
            wrong:
              'O Marcos disse o contrário: «ポルトガル語より日本語のほうが上手» (porutogarugo yori nihongo no hō ga jōzu), o Lucas fala MELHOR japonês do que português. Na comparação «AよりBのほうが», quem ganha é o B, o que vem com のほうが.',
          },
        ],
      },
      lucas: {
        emoji: '🧑',
        text: 'ルーカスは少し考えてから答えた。「小さいとき、一回だけ。おばあちゃんはサンパウロにいるけど、ポルトガル語で話すのがちょっと難しくて……。学校では『ブラジル人』って言われるし、ブラジルに行くと『日本人』って言われるんだ。」',
        translation:
          'O Lucas pensou um pouco e respondeu: «Uma vez só, quando era pequeno. Minha avó mora em São Paulo, mas falar com ela em português é meio difícil… Na escola me chamam de «brasileiro», e quando vou ao Brasil me chamam de «japonês».»',
        choices: [{ text: '「両方の言葉ができるのは、すごいことだと思うよ。」', translation: '«Eu acho incrível você saber as duas línguas.»', next: 'plano' }],
      },
      plano: {
        emoji: '📅',
        text: 'マルコスさんが言った。「明日から浜松まつりだよ。中田島の砂丘で、大きなたこをあげるんだ。今年、うちの町内で赤ちゃんが生まれたから、その子の名前を書いたたこをあげて、お祝いするんだよ。」',
        translation:
          'O Marcos disse: «Amanhã começa o Festival de Hamamatsu. A gente solta pipas enormes nas dunas de Nakatajima. Este ano nasceu um bebê aqui no bairro, então vamos soltar uma pipa com o nome dele, para comemorar.»',
        choices: [{ text: '「ぼくも行きたいです！」', translation: '«Eu também quero ir!»', next: 'duna' }],
      },
      duna: {
        emoji: '🏜️',
        text: '次の日、中田島の砂丘は人でいっぱいだった。空には、何十ものたこがあがっている。ルーカスの町のたこは、たたみ四まいぐらいの大きさだ。チームの人がさけんだ。「糸を切られないように、しっかり持って！」',
        translation:
          'No dia seguinte, as dunas de Nakatajima estavam lotadas. No céu, dezenas de pipas. A pipa do bairro do Lucas é do tamanho de uns quatro tatames. Alguém da equipe gritou: «Segurem firme, para não cortarem a nossa linha!»',
        choices: [
          { text: 'ルーカスといっしょに、糸をしっかり持つ。', translation: 'Segura a linha com força, junto com o Lucas.', next: 'batalha' },
          {
            text: '糸をはなして、写真をとりに行く。',
            translation: 'Solta a linha e vai tirar fotos.',
            wrong:
              'Gritaram «しっかり持って!» (shikkari motte): SEGUREM FIRME a linha, «切られないように», para ela não ser cortada. Soltar a linha para tirar foto é justamente o contrário!',
          },
        ],
      },
      batalha: {
        emoji: '⚔️',
        text: 'となりの町のたこが近づいてきた。二本の糸がこすれ合って、熱くなる。これが「たこあげ合戦」だ。ルーカスがさけんだ。「リヌ、今だ！引いて！」',
        translation:
          'A pipa do bairro vizinho foi chegando perto. As duas linhas se roçam e esquentam. É a «batalha de pipas». O Lucas gritou: «Linu, agora! Puxa!»',
        choices: [
          { text: '力いっぱい糸を引く。', translation: 'Puxa a linha com toda a força.', next: 'vitoria' },
          { text: 'こわくなって、手をはなす。', translation: 'Fica com medo e solta a linha.', next: 'final_neutro' },
        ],
      },
      vitoria: {
        emoji: '🎺',
        text: 'プツン！切れたのは、となりの町の糸だった。チームのみんながラッパをふいて、「オイショ、オイショ！」と声を上げた。ルーカスがリヌの手をにぎった。「やった！」',
        translation:
          'Tec! A linha que arrebentou foi a do bairro vizinho. O time inteiro tocou as cornetas e gritou: «Oishō, oishō!» O Lucas agarrou a mão do Linu. «Conseguimos!»',
        choices: [{ text: 'ルーカスとハイタッチする。', translation: 'Bate a mão na do Lucas, comemorando.', next: 'noite' }],
      },
      noite: {
        emoji: '🍽️',
        text: 'その夜、家に帰ると、エリカさんがフェイジョアーダとパステルを作ってくれていた。テーブルには、おにぎりとみそしるもある。ルーカスが言った。「今日、はじめて思ったんだ。日本とブラジル、両方あるのがぼくなんだって。」',
        translation:
          'Naquela noite, quando voltaram para casa, a Érica, a mãe, tinha feito feijoada e pastel. Na mesa também havia onigiri e missoshiru. O Lucas disse: «Hoje eu pensei pela primeira vez: ter o Japão e o Brasil, os dois, é isso que eu sou.»',
        choices: [
          {
            text: '「そうだよ。両方あるから、ルーカスはルーカスなんだよ。」',
            translation: '«É isso aí. É por ter os dois que o Lucas é o Lucas.»',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '🥂',
        text: 'みんなで「いただきます！」と言ってから、グラスを上げて「サウージ！」とかんぱいした。マルコスさんの目が、少しうるんでいた。',
        translation: 'Todos disseram «Itadakimasu!» e depois ergueram os copos num brinde: «Saúde!» Os olhos do Marcos estavam um pouco marejados.',
        ending: {
          tone: 'bom',
          title: 'Pipa, pastel e onigiri',
          message: 'O Linu venceu uma batalha de pipas em Hamamatsu e passou a Golden Week com uma família que é japonesa e brasileira ao mesmo tempo.',
        },
      },
      final_neutro: {
        emoji: '🍃',
        text: '手をはなしたとたん、たこは風に流されて、あっという間に糸を切られてしまった。「ドンマイ！」とルーカスは笑ったが、リヌはくやしくてたまらなかった。',
        translation:
          'Assim que ele soltou, o vento levou a pipa, e num instante cortaram a linha. «Não esquenta!», riu o Lucas, mas o Linu ficou morrendo de raiva de si mesmo.',
        ending: { tone: 'neutro', title: 'Pipa perdida', message: 'Na batalha de pipas de Hamamatsu, quem solta a linha perde. Segure firme até o fim!' },
      },
    },
  },
  {
    id: 'ja-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: '富士山のペンキ絵',
    emoji: '🛁',
    summary:
      'Num sentō, a casa de banho de bairro de Tóquio, o Linu aprende as regras com um frequentador de sessenta anos de casa e descobre por que tantos sentō estão fechando.',
    cultural_context:
      'O sentō (銭湯) é a casa de banho pública de bairro, do tempo em que poucas casas tinham banheira. Em Tóquio, eram mais de dois mil e quinhentos nos anos 1960; hoje são bem menos de quinhentos, e muitos fecham quando o dono se aposenta sem ter quem continue. O preço é tabelado pela prefeitura, e na parede do banho costuma haver uma pintura gigante do monte Fuji, feita à mão por um dos pouquíssimos pintores desse ofício que restam no país. Depois do banho, a tradição é beber um leite com café gelado, de garrafinha de vidro, com a mão na cintura.',
    start: 'start',
    glossary: [
      ['銭湯', 'sentō, casa de banho pública do bairro'],
      ['のれん', 'cortina curta de pano na entrada (a do sentō tem escrito ゆ, «água quente»)'],
      ['番台', 'o balcão alto da entrada, onde se paga'],
      ['貸す・借りる', 'emprestar / pegar emprestado'],
      ['湯船', 'a banheira, o tanque de água quente'],
      ['〜前に', 'antes de… (湯船に入る前に = antes de entrar na banheira)'],
      ['ペンキ絵', 'pintura mural (em geral, o monte Fuji) na parede do banho'],
      ['〜しかいない', 'só há… (しか + verbo negativo = só, apenas)'],
      ['職人', 'artesão, mestre de ofício'],
      ['あとをつぐ', 'dar continuidade (ao negócio da família)'],
      ['コーヒー牛乳', 'leite com café, a bebida clássica depois do banho'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '東京の下町、夕方。リヌはせまい路地のおくで、古い銭湯を見つけた。屋根はお寺みたいな形で、入口には「ゆ」と書かれたのれんがかかっている。',
        translation:
          'Num bairro antigo de Tóquio, no fim da tarde. No fundo de uma viela estreita, o Linu encontrou um sentō antigo. O telhado tem formato de templo, e na entrada há uma cortininha com a palavra «ゆ» (yu, água quente).',
        choices: [
          { text: 'のれんをくぐって、中に入る。', translation: 'Passa pela cortininha e entra.', next: 'bandai' },
          { text: '高いえんとつを見上げる。', translation: 'Olha para a chaminé alta.', next: 'entotsu' },
        ],
      },
      entotsu: {
        emoji: '🏭',
        text: '高いえんとつから、白いけむりが出ている。通りかかったおばあさんが教えてくれた。「ここは今でも、まきでお湯をわかしているのよ。」',
        translation: 'Da chaminé alta sai uma fumaça branca. Uma senhora que passava explicou: «Aqui eles ainda esquentam a água com lenha.»',
        choices: [{ text: 'のれんをくぐって、中に入る。', translation: 'Passa pela cortininha e entra.', next: 'bandai' }],
      },
      bandai: {
        emoji: '👵',
        text: '番台には、年配の女の人が座っていた。「いらっしゃい。タオルとせっけん、持ってる？」リヌが首をふると、女の人は言った。「じゃあ、タオルは貸してあげる。せっけんは、そこの自動販売機で買ってね。」',
        translation:
          'No balcão alto estava sentada uma senhora. «Boa noite. Trouxe toalha e sabonete?» Quando o Linu fez que não com a cabeça, ela disse: «Então eu te empresto uma toalha. O sabonete você compra naquela máquina ali.»',
        choices: [
          { text: 'タオルを借りて、せっけんを買う。', translation: 'Pega a toalha emprestada e compra o sabonete.', next: 'vestiario' },
          {
            text: '「タオルもせっけんも、ここで買います。」とお金を出す。',
            translation: 'Diz «Vou comprar a toalha e o sabonete aqui» e tira o dinheiro.',
            wrong:
              'A senhora disse que a toalha «貸してあげる» (kashite ageru): ela EMPRESTA a toalha. Só o sabonete se compra, e na máquina (自動販売機). 貸す (kasu) é emprestar; 借りる (kariru), pegar emprestado.',
          },
        ],
      },
      vestiario: {
        emoji: '🗻',
        text: '服をぬいで中に入ると、正面のかべいっぱいに、大きな富士山の絵がかかれていた。青い空、白い雪、そして湖。湯船には、おじいさんがひとりだけ入っている。',
        translation:
          'Ele tirou a roupa e entrou: a parede da frente inteira tinha um monte Fuji enorme pintado. Céu azul, neve branca e um lago. Na banheira, só havia um senhor.',
        choices: [
          { text: 'すぐに湯船に入る。', translation: 'Entra direto na banheira.', next: 'bronca' },
          { text: 'カランの前に座って、まず体を洗う。', translation: 'Senta diante de uma torneira e primeiro lava o corpo.', next: 'lavar' },
        ],
      },
      bronca: {
        emoji: '😠',
        text: 'おじいさんの大きな声がひびいた。「おいおい、湯船に入る前に、体を洗うんだよ！」まわりで体を洗っていた人たちも、こっちを見ている。',
        translation: 'A voz alta do senhor ecoou: «Ei, ei! Antes de entrar na banheira, lava-se o corpo!» Quem estava se lavando também olhou para ele.',
        choices: [
          { text: '「すみません！」とあやまって、体を洗いに行く。', translation: 'Pede desculpas e vai se lavar.', next: 'lavar' },
          { text: 'はずかしくなって、すぐに銭湯を出る。', translation: 'Fica com vergonha e sai do sentō na hora.', next: 'final_neutro' },
        ],
      },
      lavar: {
        emoji: '🪣',
        text: 'リヌが体を洗っていると、おじいさんが黄色いおけを持ってきてくれた。「これ、使いなよ。おれはこの銭湯に、六十年通ってるんだ。」',
        translation: 'Enquanto o Linu se lavava, o senhor trouxe um balde amarelo. «Toma, usa este. Eu frequento este sentō há sessenta anos.»',
        choices: [
          { text: '「六十年も！この絵は、ずっと同じなんですか？」', translation: '«Sessenta anos! E esta pintura é sempre a mesma?»', next: 'pintura' },
        ],
      },
      pintura: {
        emoji: '🎨',
        text: 'おじいさんは湯船の中で答えた。「いや、ペンキ絵は何年かに一回、かき直すんだ。職人さんが一日でかいちゃうんだよ。でも、そういう職人は、今は日本に数人しかいないけどね。」',
        translation:
          'O senhor respondeu de dentro da banheira: «Não, a pintura é refeita a cada tantos anos. O pintor faz tudo em um dia. Mas hoje só restam uns poucos pintores assim no Japão inteiro.»',
        choices: [
          { text: '「一日で！見てみたいです。」', translation: '«Em um dia! Eu queria ver isso.»', next: 'fechamento' },
          {
            text: '「職人さんがたくさんいて、いいですね。」',
            translation: '«Que bom que tem muitos pintores.»',
            wrong:
              'O senhor disse «数人しかいない» (sūnin shika inai): SÓ restam uns poucos. «〜しか…ない» quer dizer «só, apenas» e vem sempre com o verbo na negativa. Não são muitos: são quase nenhum!',
          },
        ],
      },
      fechamento: {
        emoji: '🍂',
        text: '湯船につかりながら、おじいさんは少しさびしそうに言った。「でもな、この銭湯も来年の春で終わりなんだ。主人がもう八十だし、あとをつぐ人がいなくてね。」',
        translation:
          'Mergulhado na banheira, o senhor disse, meio triste: «Mas sabe, este sentō também fecha na primavera do ano que vem. O dono já tem oitenta anos, e não tem ninguém para continuar.»',
        choices: [
          { text: '「そんな……。ぼくにできることはありませんか？」', translation: '«Que pena… Tem alguma coisa que eu possa fazer?»', next: 'ajuda' },
          { text: '「それなら、閉まるまで何回も来ます！」', translation: '«Então vou vir muitas vezes até fechar!»', next: 'ajuda' },
        ],
      },
      ajuda: {
        emoji: '🥛',
        text: '「若い人が来てくれるのが、一番うれしいんだよ。」風呂から上がると、おじいさんは冷蔵庫から、びんのコーヒー牛乳を二本出した。「銭湯のあとは、これだ。」',
        translation:
          '«O que mais alegra a gente é ver jovens vindo aqui.» Quando saíram do banho, o senhor tirou da geladeira duas garrafinhas de leite com café. «Depois do sentō, é isto.»',
        choices: [{ text: 'こしに手を当てて、一気に飲む。', translation: 'Põe a mão na cintura e bebe de um gole só.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '♨️',
        text: '冷たくて、あまい。おじいさんとならんで飲んでいると、番台の女の人が笑った。「また来てね、ペンギンさん。」次の週、リヌは留学生の友だちを五人連れて、またのれんをくぐった。',
        translation:
          'Gelado e docinho. Enquanto bebiam lado a lado, a senhora do balcão riu: «Volte sempre, senhor pinguim.» Na semana seguinte, o Linu levou cinco amigos intercambistas e passou de novo pela cortininha.',
        ending: {
          tone: 'bom',
          title: 'Freguês do sentō',
          message:
            'O Linu aprendeu as regras do sentō com um veterano de sessenta anos de casa e voltou com amigos, que é o que mais alegra um sentō de bairro.',
        },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'リヌは急いで服を着て、外に出た。体はまだ冷たいままだ。のれんの向こうから、楽しそうな笑い声が聞こえてきた。',
        translation: 'O Linu se vestiu às pressas e saiu. O corpo continuava frio. Do outro lado da cortininha, vinham risadas animadas.',
        ending: {
          tone: 'neutro',
          title: 'Banho interrompido',
          message: 'No sentō, primeiro se lava o corpo nas torneiras e só depois se entra na banheira. Com um pedido de desculpas, o banho teria continuado!',
        },
      },
    },
  },
  {
    id: 'ja-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: '千羽づるの願い',
    emoji: '🕊️',
    summary:
      'Em Hiroshima, o Linu visita o Parque Memorial da Paz com a amiga Aoi, ouve a história de Sadako e dos mil tsurus de papel e termina o dia numa casa de okonomiyaki.',
    cultural_context:
      'Em 6 de agosto de 1945, às 8h15, a primeira bomba atômica usada numa guerra explodiu sobre Hiroshima; até o fim daquele ano, cerca de cento e quarenta mil pessoas tinham morrido. A Cúpula da Bomba Atômica, um dos poucos prédios que ficaram de pé perto do ponto da explosão, é Patrimônio Mundial desde 1996. Sadako Sasaki tinha dois anos na explosão e adoeceu de leucemia aos doze; no hospital, dobrou mais de mil tsurus de papel desejando se curar e morreu em outubro de 1955. Hoje, crianças do mundo inteiro mandam tsurus ao Monumento da Paz das Crianças, que tem a estátua dela. A cidade reconstruída também é a terra do okonomiyaki em camadas, com macarrão, comida barata e farta que ajudou muita gente a recomeçar depois da guerra.',
    start: 'start',
    glossary: [
      ['平和', 'paz'],
      ['原爆ドーム', 'Cúpula da Bomba Atômica (原爆 genbaku = bomba atômica)'],
      ['資料館', 'museu de documentos e objetos históricos'],
      ['亡くなる', 'falecer (mais respeitoso que 死ぬ)'],
      ['千羽づる', 'mil tsurus de papel presos em fios (羽 wa conta aves)'],
      ['折る', 'dobrar (papel)'],
      ['願いがかなう', 'o desejo se realiza'],
      ['〜つづける', 'continuar a… (折りつづけた = continuou dobrando)'],
      ['大事なのは、気持ち', 'o que importa é a intenção'],
      ['お好み焼き', 'okonomiyaki; em Hiroshima, em camadas, com macarrão'],
      ['立ち上がる', 'levantar-se, reerguer-se'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: '広島に着いた日の朝、リヌは大学生の友だち、あおいと平和記念公園を歩いていた。川の向こうに、屋根の骨組みだけが残った建物が見える。あおいが静かに言った。「あれが原爆ドーム。」',
        translation:
          'Na manhã em que chegou a Hiroshima, o Linu caminhava pelo Parque Memorial da Paz com a amiga Aoi, estudante universitária. Do outro lado do rio, via-se um prédio do qual só restava a estrutura do telhado. A Aoi disse baixinho: «Aquela é a Cúpula da Bomba Atômica.»',
        choices: [
          { text: '「どうして、あの建物だけ残ったの？」と聞く。', translation: 'Pergunta: «Por que só aquele prédio ficou de pé?»', next: 'domo' },
          { text: '先に、平和記念資料館に入る。', translation: 'Entra primeiro no Museu Memorial da Paz.', next: 'museu' },
        ],
      },
      domo: {
        emoji: '🏚️',
        text: '「爆発は、ほとんど真上だったの。だから、かべの一部がたおれずに残ったんだって。千九百四十五年の八月のある朝、八時十五分。この町の多くの人が、一瞬で亡くなった。」',
        translation:
          '«A explosão foi quase bem em cima dele. Por isso, dizem, parte das paredes não caiu. Numa manhã de agosto de 1945, às oito e quinze. Muita gente desta cidade morreu num instante.»',
        choices: [
          { text: 'だまって、ドームに向かって手を合わせる。', translation: 'Em silêncio, junta as mãos em oração diante da cúpula.', next: 'museu' },
          {
            text: '「夜の八時十五分だったんだね。」',
            translation: '«Foi às oito e quinze da noite, então.»',
            wrong:
              'A Aoi disse «ある朝、八時十五分»: às 8h15 da MANHÃ (朝, asa), no dia 6 de agosto. A bomba explodiu no começo do dia, quando muita gente ia para o trabalho e as crianças, para a escola.',
          },
        ],
      },
      museu: {
        emoji: '🕰️',
        text: '資料館には、焼けてまがった三輪車や、八時十五分で止まった時計があった。リヌは長い時間、何も言えなかった。出口で、あおいが言った。「次は、禎子さんの像を見に行こう。」',
        translation:
          'No museu havia um triciclo queimado e retorcido e um relógio parado às oito e quinze. O Linu ficou muito tempo sem conseguir dizer nada. Na saída, a Aoi disse: «Agora, vamos ver a estátua da Sadako.»',
        choices: [{ text: '「禎子さんって、だれ？」と聞く。', translation: 'Pergunta: «Quem é a Sadako?»', next: 'sadako' }],
      },
      sadako: {
        emoji: '🦢',
        text: '「佐々木禎子さん。二さいのときに原爆にあって、十二さいで白血病になったの。『つるを千羽折ると、願いがかなう』と聞いて、病院で、薬を包んでいた紙でもつるを折った。千羽をこえても折りつづけたけど、その年の十月に亡くなったの。」',
        translation:
          '«Sadako Sasaki. Ela tinha dois anos quando a bomba caiu e, aos doze, ficou doente de leucemia. Ouviu dizer que, «se dobrar mil tsurus, o desejo se realiza», e no hospital dobrava tsurus até com o papel que embrulhava os remédios. Passou de mil e continuou dobrando, mas faleceu em outubro daquele ano.»',
        choices: [
          { text: '「千羽をこえても、折りつづけたんだね……。」', translation: '«Ela passou de mil e continuou dobrando…»', next: 'monumento' },
          {
            text: '「千羽折って、病気が治ったんだね。よかった。」',
            translation: '«Então ela dobrou mil e sarou. Que bom.»',
            wrong:
              'A Aoi disse que a Sadako dobrou mais de mil (千羽をこえても折りつづけた), mas «その年の十月に亡くなった»: faleceu em outubro daquele ano. 亡くなる (nakunaru) é o jeito respeitoso de dizer «morrer».',
          },
        ],
      },
      monumento: {
        emoji: '🗼',
        text: '「原爆の子の像」の上で、少女が金色のつるを高く持ち上げている。像のまわりには、世界中から送られた千羽づるがかざられていた。その中に、ブラジルの小学校から来たつるもあった。',
        translation:
          'No alto do Monumento da Paz das Crianças, uma menina ergue bem alto um tsuru dourado. Em volta da estátua estavam pendurados fios de mil tsurus enviados do mundo inteiro. Entre eles, havia também tsurus de uma escola primária do Brasil.',
        choices: [{ text: '「ぼくも一羽折りたい。教えて。」', translation: '«Eu também quero dobrar um. Me ensina?»', next: 'dobrar' }],
      },
      dobrar: {
        emoji: '📄',
        text: 'あおいに教えてもらって、リヌは赤い紙でつるを折った。ペンギンの手ではむずかしくて、少しゆがんだつるになった。「形は関係ないよ。大事なのは、気持ち。」リヌは、つるを像の前にそっと置いた。',
        translation:
          'Com a ajuda da Aoi, o Linu dobrou um tsuru de papel vermelho. Com mão de pinguim é difícil, e o tsuru saiu um pouco torto. «A forma não importa. O que importa é a intenção.» O Linu deixou o tsuru com cuidado diante da estátua.',
        choices: [
          { text: '夕方、あおいとお好み焼きの店に行く。', translation: 'No fim da tarde, vai com a Aoi a uma casa de okonomiyaki.', next: 'okonomi' },
          { text: 'つかれたので、ひとりでホテルに帰る。', translation: 'Está cansado e volta sozinho para o hotel.', next: 'final_neutro' },
        ],
      },
      okonomi: {
        emoji: '🥞',
        text: 'お好み焼きの店は、鉄板の前にカウンターがあるだけの小さな店だった。店のおばさんが、うすい生地の上に、キャベツ、そば、ぶた肉をどんどん重ねていく。',
        translation:
          'A casa de okonomiyaki era pequena: só um balcão diante da chapa. A dona foi empilhando repolho, macarrão e carne de porco em cima de uma massa fininha.',
        choices: [
          { text: '「これが広島焼きですか？」と聞く。', translation: 'Pergunta: «Isto é o «Hiroshima-yaki»?»', next: 'hiroshimayaki' },
          { text: '「このお店は、いつからあるんですか？」と聞く。', translation: 'Pergunta: «Desde quando existe esta casa?»', next: 'historia' },
        ],
      },
      hiroshimayaki: {
        emoji: '🤨',
        text: 'おばさんは笑いながら、少しだけまゆを上げた。「広島では、ただの『お好み焼き』よ。『広島焼き』って言うのは、県の外の人だけ。」あおいもくすっと笑った。',
        translation:
          'A dona riu, levantando um pouquinho a sobrancelha. «Em Hiroshima é só «okonomiyaki». Quem fala «Hiroshima-yaki» é gente de fora.» A Aoi também deu uma risadinha.',
        choices: [{ text: '「すみません。広島のお好み焼き、ですね！」', translation: '«Desculpe. O okonomiyaki de Hiroshima, então!»', next: 'historia' }],
      },
      historia: {
        emoji: '👩‍🍳',
        text: 'おばさんは手を止めずに話してくれた。「この店は、わたしの母が戦争のあとに始めたの。何もない時代に、安くておなかいっぱいになるのが、お好み焼きだったのよ。」焼きあがったお好み焼きに、おばさんがソースをたっぷりぬった。',
        translation:
          'Sem parar de trabalhar, a dona contou: «Esta casa foi aberta pela minha mãe depois da guerra. Num tempo em que não havia nada, o okonomiyaki era barato e enchia a barriga.» Quando ficou pronto, ela passou bastante molho por cima.',
        choices: [
          { text: '「いただきます。」と言って、へらで切って食べる。', translation: 'Diz «itadakimasu», corta com a espátula e come.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌆',
        text: '熱くて、あまからいソースの味が口に広がった。あおいが言った。「広島は、あの日からちゃんと立ち上がった町なんだよ。」リヌはうなずいて、もう一口食べた。',
        translation:
          'Quente, e o gosto agridoce do molho se espalhou pela boca. A Aoi disse: «Hiroshima é uma cidade que se reergueu depois daquele dia.» O Linu concordou com a cabeça e comeu mais um pedaço.',
        ending: {
          tone: 'bom',
          title: 'A cidade que se reergueu',
          message:
            'O Linu ouviu a história de Sadako, deixou seu tsuru no Monumento das Crianças e entendeu, diante de uma chapa de okonomiyaki, como Hiroshima se reconstruiu.',
        },
      },
      final_neutro: {
        emoji: '🌙',
        text: 'ホテルの部屋は静かだった。リヌは今日見たものを思い出して、なかなか眠れなかった。夜おそく、あおいからメッセージが来た。「明日は、いっしょにお好み焼き食べようね。」',
        translation:
          'O quarto do hotel estava silencioso. O Linu lembrava de tudo o que tinha visto e demorou a dormir. Tarde da noite, chegou uma mensagem da Aoi: «Amanhã a gente come okonomiyaki juntos, tá?»',
        ending: {
          tone: 'neutro',
          title: 'Um dia pesado',
          message:
            'O dia no Parque da Paz foi pesado, e tudo bem descansar. Mas, em Hiroshima, comer okonomiyaki com os amigos também é parte da visita à cidade que se reergueu.',
        },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'ja-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: '朝までおどる町',
    emoji: '🏮',
    summary:
      'Em Gujō, cidade das águas limpas nas montanhas de Gifu, o Linu passa o Obon com a família da amiga Natsuki: recebe os antepassados em casa e dança o bon-odori até o dia amanhecer.',
    cultural_context:
      'O Obon, em meados de agosto, é quando, pela tradição budista, os espíritos dos antepassados voltam para visitar a família. Muita gente viaja à cidade natal, limpa os túmulos, acende um pequeno fogo na porta para guiar os espíritos (mukaebi) e monta um altar com cavalinhos de pepino, para que eles cheguem depressa, e vaquinhas de berinjela, para que voltem devagar. Em Gujō Hachiman, na província de Gifu, o Gujō Odori dura mais de trinta noites de verão, e nas quatro noites do Obon a dança vai até o amanhecer; qualquer um pode entrar na roda, de tamancos de madeira batendo no chão. Em 2022, essas danças entraram na lista do Patrimônio Imaterial da UNESCO.',
    start: 'start',
    glossary: [
      ['お盆', 'Obon, os dias em que os antepassados voltam para visitar a família'],
      ['ご先祖さま', 'os antepassados (com respeito)'],
      ['しょうりょううま', 'cavalinho de pepino e vaquinha de berinjela, montarias dos espíritos'],
      ['名残をおしむ', 'ter pena de se despedir'],
      ['迎え火・送り火', 'fogo de boas-vindas / fogo de despedida'],
      ['手を合わせる', 'juntar as mãos em oração'],
      ['徹夜おどり', 'dança que vai a noite inteira'],
      ['ゆかた・げた', 'quimono leve de algodão, de verão / tamanco de madeira'],
      ['〜じゃなくて', 'não é…, e sim… (見るおどりじゃなくて、おどるおどり)'],
      ['見よう見まね', 'aprender imitando, «olhando e copiando»'],
      ['〜うちに', 'enquanto… (e, sem perceber, algo muda)'],
    ],
    nodes: {
      start: {
        emoji: '🥒',
        text: '八月十三日。リヌは友だちのなつきと、郡上という町に来た。岐阜県の山の中にある、水のきれいな町だ。なつきのおばあちゃんの家は、町の中を流れる水路のそばにある。家に着くと、おばあちゃんが、きゅうりやなすに、わりばしをさしていた。',
        translation:
          'Treze de agosto. O Linu veio com a amiga Natsuki a uma cidade chamada Gujō, nas montanhas da província de Gifu, uma cidade de águas limpíssimas. A casa da avó da Natsuki fica ao lado de um canal que corre pelo meio da cidade. Quando chegaram, a avó estava espetando palitinhos em pepinos e berinjelas.',
        choices: [
          { text: '「それ、何を作ってるんですか？」と聞く。', translation: 'Pergunta: «O que a senhora está fazendo?»', next: 'uma' },
          { text: '荷物を置いて、なつきと川を見に行く。', translation: 'Deixa as malas e vai ver o rio com a Natsuki.', next: 'rio' },
        ],
      },
      rio: {
        emoji: '🌉',
        text: '町の真ん中を流れる吉田川では、子どもたちが高い橋から次々に川へ飛びこんでいた。「これが郡上の夏の名物だよ。」となつきが言った。水はすきとおっていて、とても冷たそうだ。',
        translation:
          'No rio Yoshida, que corta o centro da cidade, as crianças pulavam de uma ponte alta, uma atrás da outra. «Isto é a marca registrada do verão de Gujō», disse a Natsuki. A água era transparente e parecia geladíssima.',
        choices: [{ text: 'おばあちゃんの家にもどる。', translation: 'Volta para a casa da avó.', next: 'uma' }],
      },
      uma: {
        emoji: '🍆',
        text: 'おばあちゃんは笑って教えてくれた。「これは、しょうりょううま。お盆に、ご先祖さまが乗ってくるの。きゅうりの馬は足が速いから、早く帰ってこられるように。なすの牛はゆっくりだから、帰りは名残をおしみながら、のんびり帰れるようにね。」',
        translation:
          'A avó explicou, sorrindo: «Isto é a montaria dos espíritos. No Obon, os antepassados vêm montados nela. O cavalo de pepino é rápido, para eles chegarem logo. A vaca de berinjela é lenta, para na volta eles irem sem pressa, aproveitando até o fim.»',
        choices: [
          {
            text: '「こっちに来るときは早く、帰るときはゆっくり、なんですね。」',
            translation: '«Para vir, rápido; para voltar, devagar, então.»',
            next: 'mukaebi',
          },
          {
            text: '「じゃあ、帰るときは、きゅうりの馬で急いで帰るんですね。」',
            translation: '«Então, na volta, eles vão depressa no cavalo de pepino.»',
            wrong:
              'É o contrário: o cavalo de pepino (きゅうりの馬) é para os antepassados CHEGAREM depressa (早く帰ってこられるように). Na volta, eles vão na vaca de berinjela (なすの牛), devagar, «名残をおしみながら», com pena de se despedir.',
          },
        ],
      },
      mukaebi: {
        emoji: '🔥',
        text: '夕方、家の前で小さな火をたいた。「迎え火」だ。おばあちゃんは手を合わせて、「おじいちゃん、おかえり。」と小さな声で言った。けむりが、ゆっくり空へのぼっていく。',
        translation:
          'No fim da tarde, acenderam um pequeno fogo na frente da casa: é o «mukaebi», o fogo de boas-vindas. A avó juntou as mãos e disse baixinho: «Bem-vindo de volta, querido.» A fumaça subiu devagar para o céu.',
        choices: [{ text: 'リヌも、だまって手を合わせる。', translation: 'O Linu também junta as mãos, em silêncio.', next: 'convite' }],
      },
      convite: {
        emoji: '👘',
        text: '夕ご飯のあと、なつきが言った。「さあ、今夜は徹夜おどりだよ。朝までおどるんだ。」おばあちゃんが、リヌにゆかたを着せてくれた。「げたで、カランコロンと音を鳴らしておどるのが、郡上のおどり方だからね。」',
        translation:
          'Depois do jantar, a Natsuki disse: «Hoje é a dança da noite inteira. A gente dança até de manhã.» A avó vestiu o Linu com uma yukata. «Em Gujō, se dança batendo os tamancos, fazendo clac-cloc, viu?»',
        choices: [{ text: 'げたをはいて、町に出る。', translation: 'Calça os tamancos e sai para a rua.', next: 'praca' }],
      },
      praca: {
        emoji: '🥁',
        text: '夜十時、通りは人でいっぱいだった。屋形の上で三味線と太鼓と歌が鳴りひびき、みんなが大きな輪になっておどっている。地元の人も観光客も、同じ輪の中だ。',
        translation:
          'Às dez da noite, a rua estava lotada. Em cima do palanque de madeira, soavam o shamisen, os tambores e o canto, e todo mundo dançava numa grande roda. Moradores e turistas, todos na mesma roda.',
        choices: [
          { text: '見よう見まねで、輪に入る。', translation: 'Entra na roda, imitando os outros.', next: 'danca' },
          {
            text: '「ぼくは観光客だから、見ているだけのほうがいいよね？」となつきに聞く。',
            translation: 'Pergunta à Natsuki: «Como sou turista, é melhor só assistir, né?»',
            next: 'pergunta',
          },
        ],
      },
      pergunta: {
        emoji: '🙅',
        text: 'なつきは首をふった。「そんなことないよ。郡上おどりは、見るおどりじゃなくて、おどるおどりなの。だれでも入っていいんだよ。」',
        translation: 'A Natsuki balançou a cabeça. «Nada disso! O Gujō Odori não é dança para assistir, é dança para dançar. Qualquer um pode entrar.»',
        choices: [
          { text: '「じゃあ、ぼくも！」と輪に入る。', translation: '«Então eu também!», e entra na roda.', next: 'danca' },
          {
            text: '「そうか、見るためのおどりなんだね。」と、道のはしで見ている。',
            translation: '«Ah, então é uma dança para assistir», e fica olhando da beira da rua.',
            wrong:
              'A Natsuki disse «見るおどりじゃなくて、おどるおどり» (miru odori ja nakute, odoru odori): NÃO é dança para assistir, é dança para DANÇAR, e «だれでも入っていい», qualquer um pode entrar. 「〜じゃなくて」 = não é…, e sim….',
          },
        ],
      },
      danca: {
        emoji: '💃',
        text: '「かわさき」という曲が始まると、みんなの手が、同じ方向に動いた。前のおじいさんのまねをしているうちに、リヌの足も自然に動くようになった。げたの音が、夜の町にひびく。',
        translation:
          'Quando começou a música «Kawasaki», as mãos de todos se moveram para o mesmo lado. De tanto imitar o senhor da frente, sem perceber, os pés do Linu também começaram a se mexer sozinhos. O som dos tamancos ecoava pela cidade à noite.',
        choices: [
          { text: '朝まで、おどりつづける。', translation: 'Continua dançando até de manhã.', next: 'amanhecer' },
          { text: '真夜中の二時ごろ、ねむくなって、家に帰る。', translation: 'Lá pelas duas da manhã, fica com sono e volta para casa.', next: 'final_neutro' },
        ],
      },
      amanhecer: {
        emoji: '🌅',
        text: '空が少しずつ白くなってきた。最後の曲が終わると、みんなが大きな拍手をした。なつきのおでこには、あせが光っている。「おばあちゃんが言ってた。おじいちゃんも毎年、朝までおどってたって。」',
        translation:
          'O céu foi clareando aos poucos. Quando a última música terminou, todos aplaudiram forte. O suor brilhava na testa da Natsuki. «A vovó me contou que o vovô também dançava até de manhã, todo ano.»',
        choices: [
          {
            text: '「じゃあ、今夜は、おじいちゃんもいっしょに、おどってたかもね。」',
            translation: '«Então, talvez hoje o seu avô tenha dançado com a gente.»',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '✨',
        text: 'なつきは少しだまってから、笑った。「うん。きっとね。」おばあちゃんの家に帰ると、おにぎりが作ってあった。お盆の最後の日、みんなで送り火をたいて、なすの牛に乗ったご先祖さまを、ゆっくり見送った。',
        translation:
          'A Natsuki ficou quieta um instante e sorriu. «É. Com certeza.» Na casa da avó, havia onigiri prontos esperando por eles. No último dia do Obon, todos acenderam o fogo de despedida e se despediram, sem pressa, dos antepassados montados na vaca de berinjela.',
        ending: {
          tone: 'bom',
          title: 'Até o amanhecer',
          message: 'O Linu recebeu os antepassados da família da Natsuki, entrou na roda do Gujō Odori e dançou até o dia nascer, como o avô dela fazia.',
        },
      },
      final_neutro: {
        emoji: '🛌',
        text: 'リヌはおばあちゃんの家のふとんに入った。遠くから、げたの音と歌が、いつまでも聞こえていた。朝、帰ってきたなつきは「最後まで最高だったよ！」と言って、そのまま寝てしまった。',
        translation:
          'O Linu se deitou no futon da casa da avó. De longe, o som dos tamancos e o canto não paravam. De manhã, a Natsuki chegou dizendo «Foi incrível até o fim!» e dormiu ali mesmo.',
        ending: {
          tone: 'neutro',
          title: 'Metade da noite',
          message: 'Duas da manhã é cedo para o Gujō Odori! Nas noites do Obon, a roda só termina quando o sol nasce.',
        },
      },
    },
  },
  {
    id: 'ja-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'ひと月に三十五日の雨',
    emoji: '🌲',
    summary:
      'Em Yakushima, ilha de florestas antigas no sul do Japão, o Linu faz a trilha de dez horas até o Jōmon Sugi, um cedro de milhares de anos, com o guia Takeshi.',
    cultural_context:
      'Yakushima, ao sul de Kyūshū, foi um dos primeiros Patrimônios Mundiais do Japão, em 1993. Chove tanto que a escritora Fumiko Hayashi escreveu, num romance, que ali chove «trinta e cinco dias por mês». Os cedros com mais de mil anos são chamados de «yakusugi», e o mais famoso, o Jōmon Sugi, pode ter de dois a sete mil anos, dependendo da estimativa. A trilha de ida e volta leva umas dez horas, parte dela sobre os trilhos de uma antiga ferrovia madeireira; no caminho está o toco de Wilson, um cedro cortado há uns quatrocentos anos, e as florestas de musgo da ilha são apontadas como inspiração para «Princesa Mononoke», de Hayao Miyazaki.',
    start: 'start',
    glossary: [
      ['登山口', 'começo da trilha'],
      ['往復', 'ida e volta'],
      ['屋久杉', 'cedro de Yakushima com mais de mil anos'],
      ['いつものこと', 'coisa de sempre, o normal'],
      ['トロッコ', 'vagonete (da antiga ferrovia madeireira)'],
      ['こけ', 'musgo'],
      ['切り株', 'toco de árvore cortada'],
      ['見てごらん', 'olhe só (convite gentil para olhar)'],
      ['無理はしないで', 'não force, não exagere'],
      ['引き返す', 'dar meia-volta, voltar'],
      ['〜とも〜とも言われている', 'uns dizem…, outros dizem…'],
      ['〜ほど', 'tão… que… (囲めないほど太い = tão grosso que não dá para abraçar)'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: '朝まだ暗いうちに、リヌはガイドのたけしさんと、屋久島の登山口に立っていた。空には雲がひくくたれこめ、小雨がふっている。たけしさんが言った。「縄文杉まで、往復で十時間。今日は長い一日になるよ。」',
        translation:
          'Ainda de madrugada, o Linu estava no começo da trilha de Yakushima com o guia Takeshi. Nuvens baixas cobriam o céu, e caía uma garoa. O Takeshi disse: «Até o Jōmon Sugi, são dez horas, ida e volta. Hoje o dia vai ser longo.»',
        choices: [
          { text: '「雨なのに、行くんですか？」', translation: '«Mesmo com chuva, a gente vai?»', next: 'chuva' },
          { text: '「よろしくお願いします！」と歩き始める。', translation: 'Diz «Conto com você!» e começa a andar.', next: 'trilhos' },
        ],
      },
      chuva: {
        emoji: '☔',
        text: 'たけしさんは笑った。「屋久島では、雨はいつものこと。林芙美子という作家が、この島では『ひと月に三十五日、雨がふる』と書いたくらいだからね。」',
        translation:
          'O Takeshi riu. «Em Yakushima, chuva é coisa de todo dia. Tanto que uma escritora, a Fumiko Hayashi, escreveu que nesta ilha «chove trinta e cinco dias por mês».»',
        choices: [
          {
            text: '「ひと月に三十五日？一か月は三十日ぐらいしかないのに！」',
            translation: '«Trinta e cinco dias por mês? Mas um mês só tem uns trinta dias!»',
            next: 'trilhos',
          },
          {
            text: '「じゃあ、屋久島では、雨はめずらしいんですね。」',
            translation: '«Então em Yakushima a chuva é rara.»',
            wrong:
              'É o contrário: «雨はいつものこと» (ame wa itsumo no koto), a chuva é coisa de SEMPRE. Os «trinta e cinco dias de chuva por mês» são um exagero de propósito, para dizer que chove o tempo todo.',
          },
        ],
      },
      trilhos: {
        emoji: '🛤️',
        text: '最初の三時間は、古いトロッコの線路の上を歩く。昔、屋久杉を切って運ぶために作られた線路だ。「昔の人は、たくさんの屋久杉を切った。でも、森を守ろうとした人たちもいたんだ。だから、今もこの森が残っている。」とたけしさんが言った。',
        translation:
          'As primeiras três horas são em cima dos trilhos de uma velha ferrovia de vagonetes, feita antigamente para levar os yakusugi cortados. «Antigamente cortaram muitos yakusugi. Mas também houve quem lutasse para proteger a floresta. Por isso ela ainda existe», contou o Takeshi.',
        choices: [{ text: '線路の上を、もくもくと歩きつづける。', translation: 'Continua caminhando pelos trilhos, em silêncio.', next: 'musgo' }],
      },
      musgo: {
        emoji: '🌿',
        text: '線路が終わると、道は急な上り坂に変わった。木の根も岩も、すべて緑のこけにおおわれている。やわらかい緑の光の中で、リヌは思わず足を止めた。「アニメの中の森みたいだ……。」たけしさんがうなずいた。「このあたりのこけの森は、有名なアニメ映画のモデルになったとも言われているんだ。」',
        translation:
          'Quando os trilhos acabaram, o caminho virou uma subida íngreme. As raízes e as pedras estavam todas cobertas de musgo verde. No meio daquela luz verde e suave, o Linu parou sem querer. «Parece uma floresta de anime…» O Takeshi concordou. «Dizem que as florestas de musgo daqui serviram de modelo para um filme de animação famoso.»',
        choices: [{ text: '写真を一枚だけとって、先に進む。', translation: 'Tira uma foto só e segue em frente.', next: 'wilson' }],
      },
      wilson: {
        emoji: '💚',
        text: '少し登ると、大きな切り株があった。中に入れるほど大きい。「ウィルソン株。四百年ぐらい前に切られた杉だよ。中から上を見てごらん。」見上げると、切り口から見える空が、ハートの形になっていた。',
        translation:
          'Mais um pouco de subida, e apareceu um toco enorme, tão grande que dava para entrar nele. «É o toco de Wilson. Um cedro cortado uns quatrocentos anos atrás. Olhe para cima, de dentro.» Olhando para o alto, o pedaço de céu que aparecia pela abertura tinha forma de coração.',
        choices: [
          { text: '「ハートだ！」と写真をとって、また歩き出す。', translation: 'Diz «Um coração!», tira uma foto e volta a caminhar.', next: 'cansaco' },
        ],
      },
      cansaco: {
        emoji: '🥵',
        text: '歩き始めてから四時間。リヌの足は、だんだん重くなってきた。たけしさんが言った。「縄文杉まで、あと一時間ぐらい。でも、帰りも同じぐらいかかるから、つらかったら、ここで引き返そう。無理はしないで。」',
        translation:
          'Quatro horas de caminhada. As pernas do Linu foram ficando pesadas. O Takeshi disse: «Até o Jōmon Sugi falta mais ou menos uma hora. Mas a volta leva quase o mesmo tanto; se estiver difícil, a gente dá meia-volta aqui. Não force.»',
        choices: [
          { text: '「水を飲んで少し休めば、大丈夫です。」', translation: '«Se eu beber água e descansar um pouco, dá.»', next: 'jomon' },
          { text: '「足がもう限界です。引き返します。」', translation: '«Minhas pernas não aguentam mais. Vamos voltar.»', next: 'final_neutro' },
          {
            text: '「あと一時間で、帰り道も終わりですね。」',
            translation: '«Mais uma hora e a volta também já termina, né?»',
            wrong:
              'O Takeshi disse «あと一時間ぐらい» só até o cedro, e avisou: «帰りも同じぐらいかかる», a VOLTA também leva quase o mesmo tanto. Chegar ao Jōmon Sugi é só a metade do caminho!',
          },
        ],
      },
      jomon: {
        emoji: '🌳',
        text: 'そして、ついに縄文杉が目の前に現れた。みきはごつごつしていて、何人かで手をつないでも、囲めないほど太い。「二千年とも七千年とも言われている。本当の年は、だれにもわからないんだ。」とたけしさんが小さな声で言った。',
        translation:
          'E, finalmente, o Jōmon Sugi apareceu diante deles. O tronco é todo nodoso e tão grosso que nem várias pessoas de mãos dadas conseguiriam abraçá-lo. «Uns dizem dois mil anos, outros, sete mil. A idade de verdade, ninguém sabe», disse o Takeshi em voz baixa.',
        choices: [
          { text: 'だまって、長い時間、木を見上げる。', translation: 'Fica um bom tempo olhando a árvore, em silêncio.', next: 'final_bom' },
          { text: '「さわってみたい！」と、木のほうへ近づく。', translation: '«Quero tocar nela!», e vai chegando perto da árvore.', next: 'saku' },
        ],
      },
      saku: {
        emoji: '✋',
        text: 'たけしさんがリヌのうでをつかんだ。「ちょっと待って。根をふむと、木が弱ってしまうんだ。だから、みんなここのデッキから見るだけにしているんだよ。」',
        translation:
          'O Takeshi segurou o braço do Linu. «Espera aí. Se a gente pisa nas raízes, a árvore enfraquece. Por isso, todo mundo olha só daqui do deque.»',
        choices: [{ text: '「わかりました。ここから見ます。」', translation: '«Entendi. Vou olhar daqui.»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: '雨の音と、鳥の声だけが聞こえる。何千年もここに立って、この雨を受けてきた木。リヌは自分がとても小さく感じたが、なぜかそれが気持ちよかった。帰り道、たけしさんが言った。「この島の雨がなければ、この森もないんだよ。」',
        translation:
          'Só se ouviam a chuva e os pássaros. Uma árvore que estava ali havia milhares de anos, recebendo aquela mesma chuva. O Linu se sentiu muito pequeno, mas, sem saber por quê, isso era bom. Na volta, o Takeshi disse: «Sem a chuva desta ilha, esta floresta não existiria.»',
        ending: {
          tone: 'bom',
          title: 'Diante do Jōmon Sugi',
          message: 'O Linu caminhou horas na chuva, viu o coração do toco de Wilson e ficou frente a frente com uma árvore de milhares de anos.',
        },
      },
      final_neutro: {
        emoji: '🥾',
        text: 'たけしさんとリヌは、ゆっくり山を下りた。縄文杉は見られなかったが、帰り道のこけの森は、行きよりもっと美しく見えた。「縄文杉はにげないよ。また来ればいい。」とたけしさんは笑った。',
        translation:
          'O Takeshi e o Linu desceram a montanha devagar. Não viram o Jōmon Sugi, mas a floresta de musgo da volta pareceu ainda mais bonita que na ida. «O Jōmon Sugi não vai fugir. É só voltar outro dia», riu o Takeshi.',
        ending: {
          tone: 'neutro',
          title: 'O cedro espera',
          message: 'Saber a hora de voltar é a regra de ouro na montanha. O Jōmon Sugi está ali há milênios: pode esperar a próxima visita do Linu.',
        },
      },
    },
  },
  {
    id: 'ja-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: '十円玉のお寺と一ぱいのお茶',
    emoji: '🍵',
    summary: 'Em Uji, terra do chá verde, o Linu descobre que o templo da moeda de dez ienes existe de verdade e participa da sua primeira cerimônia do chá.',
    cultural_context:
      'Uji, entre Quioto e Nara, cultiva chá há uns oitocentos anos e é famosa pelo matchá, o chá verde em pó. Ali fica o Byōdō-in, templo cujo Salão da Fênix, de 1053, está gravado na moeda de dez ienes; a fênix do telhado também estampava a nota antiga de dez mil ienes. Na cerimônia do chá (茶道, sadō), cada gesto tem sentido: todos entram pela portinha baixa, de cabeça abaixada, porque diante do chá ninguém é mais importante que ninguém; come-se um docinho antes do chá amargo; gira-se a tigela para não beber pela «frente» dela; e, no fim, elogia-se a tigela. O lema «ichigo ichie» (um encontro, uma vez) lembra que cada encontro é único.',
    start: 'start',
    glossary: [
      ['十円玉', 'moeda de dez ienes'],
      ['鳳凰', 'fênix (a ave lendária do telhado do Byōdō-in)'],
      ['茶室', 'casa ou sala da cerimônia do chá'],
      ['にじり口', 'a portinha baixa da casa de chá'],
      ['どんなに〜も', 'por mais… que seja (どんなにえらい人も = por mais importante que seja)'],
      ['一期一会', 'ichigo ichie: cada encontro acontece uma só vez na vida'],
      ['和菓子', 'doce tradicional japonês'],
      ['茶わん', 'tigela de chá'],
      ['正面', 'a frente (da tigela)'],
      ['〜たまま', 'do jeito que está, sem mudar (向けたまま = deixando virado)'],
      ['苦い', 'amargo'],
      ['ほめる', 'elogiar'],
    ],
    nodes: {
      start: {
        emoji: '🚃',
        text: '京都駅から電車で二十分ほど。リヌは友だちのはるかと、宇治の駅におりた。町じゅうに、お茶のいいかおりがただよっている。はるかがポケットから十円玉を出した。「この十円玉の建物、どこにあると思う？」',
        translation:
          'Uns vinte minutos de trem desde a estação de Quioto. O Linu desceu na estação de Uji com a amiga Haruka. A cidade inteira tem um cheirinho bom de chá. A Haruka tirou uma moeda de dez ienes do bolso. «Onde você acha que fica o prédio desenhado nesta moeda?»',
        choices: [
          { text: '「え、本当にある建物なの？」', translation: '«Ué, é um prédio que existe de verdade?»', next: 'byodoin' },
          { text: '「わからない。それより、先にお茶を飲もうよ！」', translation: '«Não sei. Em vez disso, vamos tomar chá primeiro!»', next: 'chaya' },
        ],
      },
      chaya: {
        emoji: '⏰',
        text: 'はるかは笑った。「お茶会は午後の予約だよ。その前に、平等院を見よう。十円玉の建物は、すぐそこなんだから。」',
        translation: 'A Haruka riu. «A cerimônia do chá está reservada para a tarde. Antes, vamos ver o Byōdō-in. O prédio da moeda de dez ienes é logo ali.»',
        choices: [
          { text: 'はるかについて行く。', translation: 'Vai atrás da Haruka.', next: 'byodoin' },
          {
            text: '「じゃあ、今からお茶会に行こう。」',
            translation: '«Então vamos agora para a cerimônia do chá.»',
            wrong:
              'A Haruka disse «お茶会は午後の予約» (ochakai wa gogo no yoyaku): a cerimônia do chá está reservada para a TARDE. Antes (その前に), eles vão ao Byōdō-in, que fica «すぐそこ», logo ali.',
          },
        ],
      },
      byodoin: {
        emoji: '🏯',
        text: '池の向こうに、赤い建物が、つばさを広げた鳥のように立っていた。屋根の上には、金色の鳥が二羽いる。リヌは十円玉を出して、見くらべた。「同じだ！」「平等院鳳凰堂。千年近く前に建てられたんだよ。」とはるかが言った。',
        translation:
          'Do outro lado do lago, um prédio vermelho se erguia como um pássaro de asas abertas. No telhado, havia dois pássaros dourados. O Linu tirou a moeda de dez ienes e comparou. «É igualzinho!» «É o Salão da Fênix do Byōdō-in. Foi construído há quase mil anos», disse a Haruka.',
        choices: [
          { text: '「屋根の上の鳥は何？」と聞く。', translation: 'Pergunta: «Que pássaro é aquele no telhado?»', next: 'houou' },
          { text: '茶室へ向かう。', translation: 'Vai para a casa de chá.', next: 'chashitsu' },
        ],
      },
      houou: {
        emoji: '🐦‍🔥',
        text: '「鳳凰っていう、伝説の鳥。前の一万円札のうらにも、この鳥がいたんだよ。」リヌはあわててさいふを見たが、中には十円玉しか入っていなかった。',
        translation:
          '«É a fênix, uma ave lendária. Ela também aparecia no verso da nota antiga de dez mil ienes.» O Linu olhou a carteira correndo, mas lá dentro só tinha moedas de dez ienes.',
        choices: [{ text: '笑いながら、茶室へ向かう。', translation: 'Rindo, vai para a casa de chá.', next: 'chashitsu' }],
      },
      chashitsu: {
        emoji: '🚪',
        text: '午後、ふたりは小さな茶室の前にいた。入口はとても低く、頭を下げないと入れない。お茶の先生が言った。「この入口は『にじり口』といいます。どんなにえらい人も、頭を下げて入るんですよ。お茶の前では、みんな同じですから。」',
        translation:
          'À tarde, os dois estavam diante de uma pequena casa de chá. A entrada é tão baixa que só se entra de cabeça abaixada. A mestra de chá disse: «Esta entrada se chama «nijiriguchi». Por mais importante que a pessoa seja, entra de cabeça baixa. Diante do chá, todos são iguais.»',
        choices: [
          { text: '頭を下げて、にじり口から入る。', translation: 'Abaixa a cabeça e entra pela portinha.', next: 'dentro' },
          {
            text: '「ぼくはえらくないから、頭を下げなくてもいいですね。」',
            translation: '«Eu não sou importante, então não preciso abaixar a cabeça, né?»',
            wrong:
              'A mestra disse «どんなにえらい人も、頭を下げて入る» (donna ni erai hito mo): TODO MUNDO, por mais importante que seja, entra de cabeça baixa. A regra vale para todos, porque «お茶の前では、みんな同じ», diante do chá, todos são iguais.',
          },
        ],
      },
      dentro: {
        emoji: '🍡',
        text: '茶室の中は、たたみ四まい半。かべには「一期一会」と書かれたかけじくがかかっている。先生は、まず季節の和菓子を出してから、静かにお茶をたて始めた。シャカシャカという茶せんの音だけが聞こえる。',
        translation:
          'Dentro, a casa de chá tem quatro tatames e meio. Na parede, há um rolo pendurado com os dizeres «ichigo ichie». A mestra primeiro serviu um docinho da estação e depois começou, em silêncio, a preparar o chá. Só se ouve o chac-chac do batedor de bambu.',
        choices: [
          { text: '「一期一会って、どういう意味ですか？」と聞く。', translation: 'Pergunta: «O que quer dizer ichigo ichie?»', next: 'ichigo' },
          { text: 'だまって、先生の手の動きを見る。', translation: 'Observa em silêncio os movimentos das mãos da mestra.', next: 'tigela' },
        ],
      },
      ichigo: {
        emoji: '📜',
        text: '先生は手を止めずに答えた。「一回の出会いは、一生に一回だけ。今日のこのお茶も、二度と同じにはなりません。だから、心をこめる、という意味です。」',
        translation:
          'A mestra respondeu sem parar as mãos: «Cada encontro acontece uma única vez na vida. Este chá de hoje também nunca vai se repetir igual. Por isso, é preciso pôr o coração em tudo. É isso que quer dizer.»',
        choices: [{ text: '「今日のお茶は、今日だけなんですね。」', translation: '«O chá de hoje é só de hoje, então.»', next: 'tigela' }],
      },
      tigela: {
        emoji: '🍵',
        text: '先生がリヌの前に茶わんを置いた。「茶わんの正面は、お客さんのほうに向けてあります。飲む前に、茶わんを二回まわして、正面をよけてから飲んでくださいね。」',
        translation:
          'A mestra pôs a tigela diante do Linu. «A frente da tigela está virada para o convidado. Antes de beber, gire a tigela duas vezes, para tirar a frente da sua direção, e só então beba, está bem?»',
        choices: [
          {
            text: '「いただきます。」と言って、茶わんを二回まわしてから飲む。',
            translation: 'Diz «itadakimasu», gira a tigela duas vezes e bebe.',
            next: 'beber',
          },
          {
            text: '正面をこちらに向けたまま、すぐに飲む。',
            translation: 'Bebe logo, com a frente da tigela ainda virada para si.',
            wrong:
              'A mestra pediu «二回まわして、正面をよけてから飲んで»: girar a tigela duas vezes e beber só DEPOIS de tirar a frente da sua direção. A frente foi virada para o convidado por respeito, e ele, por modéstia, não bebe por ela.',
          },
        ],
      },
      beber: {
        emoji: '😌',
        text: 'お茶は少し苦くて、そのあと、ふしぎなあまさが口に残った。和菓子のあまさとよく合う。はるかが小さな声で言った。「最後に、茶わんをほめるんだよ。」',
        translation:
          'O chá era um pouco amargo e, depois, deixou na boca uma doçura curiosa, que combinava bem com o docinho. A Haruka cochichou: «No final, a gente elogia a tigela.»',
        choices: [
          { text: '「きれいな茶わんですね。」と、茶わんをほめる。', translation: 'Elogia a tigela: «Que tigela bonita!»', next: 'final_bom' },
          { text: '「ちょっと苦いので、さとうをください。」', translation: '«Está meio amargo; pode me dar açúcar?»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌸',
        text: '先生はうれしそうにほほえんだ。「ありがとうございます。この茶わんは、わたしの先生からいただいたものなんです。」リヌは帰りの電車の中で、十円玉を大事にポケットにしまった。今日のお茶も、きっと一期一会だ。',
        translation:
          'A mestra sorriu, contente. «Muito obrigada. Esta tigela eu ganhei da minha própria mestra.» No trem de volta, o Linu guardou a moeda de dez ienes no bolso com todo o cuidado. O chá daquele dia também tinha sido, com certeza, ichigo ichie.',
        ending: {
          tone: 'bom',
          title: 'Ichigo ichie',
          message:
            'O Linu achou o templo da moeda de dez ienes, entrou de cabeça baixa na casa de chá e seguiu cada gesto da cerimônia, até o elogio final à tigela.',
        },
      },
      final_neutro: {
        emoji: '🍦',
        text: '一瞬、茶室がしんとした。先生は笑って言った。「抹茶に、おさとうは入れないんですよ。だから、先にお菓子を食べるんです。でも、あとで町の抹茶ソフトクリームを食べてみてください。とてもあまいですから。」',
        translation:
          'Por um instante, a casa de chá ficou em silêncio. A mestra riu e disse: «No matchá não se põe açúcar. É por isso que se come o docinho antes. Mas depois experimente o sorvete de matchá da cidade. Esse é bem docinho.»',
        ending: {
          tone: 'neutro',
          title: 'Açúcar no matchá?',
          message: 'Na cerimônia do chá, o amargo faz parte, e o doce vem antes, no wagashi. Para matchá adoçado, a pedida em Uji é o sorvete!',
        },
      },
    },
  },
];
