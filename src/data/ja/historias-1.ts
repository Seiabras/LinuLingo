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
        choices: [{ text: 'からあげべんとうもとります。', translation: 'Pega também um bentô de frango frito.', next: 'reji' }],
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
            wrong: 'O caixa disse «五百五十円» (gohyaku gojū en): QUINHENTOS e cinquenta ienes. 五十 (gojū) sozinho é só cinquenta; 五百 (gohyaku) é quinhentos.',
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
            wrong: 'A senhora disse «しかのおやつ» (shika no oyatsu): é o lanche DOS CERVOS, não de pinguins! O «の» (no) liga as palavras como o nosso «de»: しかのおやつ = lanche de cervo.',
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
        text: 'しかもはしります！しかはせんべいがほしいです。',
        translation: 'Os cervos também correm! Eles querem o biscoito.',
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
        text: '小さいしかもおじぎをします。しかはうれしいです。リヌもうれしいです！',
        translation: 'O cervo pequeno também faz reverência. Os cervos estão felizes. O Linu também!',
        ending: { tone: 'bom', title: 'Amigo dos cervos', message: 'O Linu dividiu os biscoitos e aprendeu a cumprimentar como os cervos de Nara: com uma reverência.' },
      },
      final_neutro: {
        emoji: '🥺',
        text: '大きいしかはうれしいです。でも、小さいしかはかなしいです。せんべいは、もうありません。',
        translation: 'O cervo grande está feliz. Mas o pequeno está triste. Os biscoitos acabaram.',
        ending: { tone: 'neutro', title: 'Faltou para o pequeno', message: 'O cervo pequeno também fez fila! Da próxima vez, divida: um biscoito para cada um.' },
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
            wrong: 'O senhor disse que o Buda tem «十一メートル» (jūichi mētoru), onze metros! E o texto já dizia «とても大きいです»: é muito GRANDE. 小さい (chiisai) é pequeno.',
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
        ending: { tone: 'neutro', title: 'Soneca de bronze', message: 'Dentro do Buda é escuro e quentinho, mas não é lugar de dormir! No fim da tarde, o templo fecha.' },
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
            wrong: 'O senhor disse «千本じゃありませんよ» (senbon ja arimasen yo): NÃO são mil! No monte inteiro há «一万ぐらい» (ichiman gurai), uns dez mil. «じゃありません» é a negação de «です».',
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
            wrong: 'O atendente disse «先に、しょっけんを買ってください» (saki ni shokken o katte kudasai): PRIMEIRO compre o tíquete. Nas casas com máquina, primeiro se compra o tíquete; só depois se senta.',
          },
        ],
      },
      kikai: {
        emoji: '🎫',
        text: 'けんばいきに、ボタンがたくさんあります。ラーメンは七百円、チャーシューメンは千百円、ぎょうざは四百円です。リヌのおさいふには、千円あります。',
        translation: 'A máquina tem muitos botões. O ramen custa setecentos ienes, o chāshū-men custa mil e cem, e o guioza, quatrocentos. Na carteira do Linu há mil ienes.',
        choices: [
          { text: 'ラーメンのボタンをおします。', translation: 'Aperta o botão do ramen.', next: 'ticket' },
          {
            text: 'チャーシューメンのボタンをおします。',
            translation: 'Aperta o botão do chāshū-men.',
            wrong: 'O chāshū-men custa «千百円» (sen hyaku en), mil e cem ienes, e o Linu só tem «千円» (sen en), mil. Não dá! 千 (sen) = mil, 百 (hyaku) = cem.',
          },
        ],
      },
      ticket: {
        emoji: '🪑',
        text: 'しょっけんとおつりが出ます。おつりは三百円です。リヌはカウンターにすわります。「めんのかたさは、どうしますか？かため、ふつう、やわらかめがあります。」',
        translation: 'Saem o tíquete e o troco. O troco é de trezentos ienes. O Linu senta no balcão. «Como quer o macarrão? Tem mais firme, normal e mais mole.»',
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
            wrong: 'O kaedama custa «百五十円» (hyaku gojū en), cento e cinquenta ienes, e não mil e quinhentos (千五百円, sen gohyaku en). E o Linu só tem 三百円 (sanbyaku en) de troco!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'あたらしいめんが、スープに入ります。リヌはぜんぶ食べました。「ごちそうさまでした！」',
        translation: 'O macarrão novo vai para o caldo. O Linu comeu tudo. «Obrigado pela refeição!»',
        ending: { tone: 'bom', title: 'Kaedama!', message: 'O Linu dominou a máquina de tíquetes e ainda pediu kaedama, como um verdadeiro morador de Hakata.' },
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
            wrong: '«食べませんか？» (tabemasen ka) parece negativo, mas é um CONVITE: «Não quer comer com a gente?», como o nosso «Bora comer?». «はい、食べません» seria «Sim, não como»: não faz sentido! Para aceitar, diga «はい、ありがとうございます！».',
          },
        ],
      },
      piquenique: {
        emoji: '🍡',
        text: 'おべんとうがあります。おにぎり、たまごやき、からあげ……。お父さんが言います。「これは花見だんごですよ。」ピンクと白とみどりの、おだんごです。',
        translation: 'Tem bentô: onigiri, omelete enrolada, frango frito… O pai diz: «Isto é o dango de hanami.» São bolinhos rosa, brancos e verdes.',
        choices: [
          { text: '「いただきます！」', translation: '«Itadakimasu!» (vamos comer!)', next: 'comer' },
          { text: '「さきに、みんなでしゃしんをとりませんか？」', translation: '«Antes, que tal tirarmos uma foto todos juntos?»', next: 'foto' },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'お父さんがしゃしんをとります。「はい、チーズ！」みんなでわらいます。',
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
        ending: { tone: 'bom', title: 'Jangada de flores', message: 'O Linu fez hanami com uma família de Aomori, comeu dango e viu as pétalas cobrirem o fosso do castelo.' },
      },
      final_neutro: {
        emoji: '💦',
        text: 'ペンギンは水がすきです！でも、おしろの水は、およぐところじゃありません。女の子はわらっています。お父さんはこまっています。',
        translation: 'Pinguim adora água! Mas o fosso do castelo não é lugar de nadar. A menina está rindo. O pai não sabe o que fazer.',
        ending: { tone: 'neutro', title: 'Mergulho no fosso', message: 'Pinguim adora água, mas o fosso do castelo não é piscina! As pétalas se admiram da margem.' },
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
        text: '三十分後、右のまどに大きな山が見えました。上のほうは雪で白いです。「富士山だ！」リヌはしゃしんをとりました。',
        translation: 'Meia hora depois, apareceu uma montanha enorme na janela da direita. O topo está branco de neve. «É o Fuji!» O Linu tirou uma foto.',
        choices: [{ text: 'となりの女の人に「きれいですね！」と言います。', translation: 'Diz à mulher do lado: «Que lindo!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '「本当に。今日はラッキーですね。」女の人もわらいました。そして一時間半後、新幹線は京都に着きました。',
        translation: '«É mesmo. Hoje você teve sorte.» A mulher também sorriu. E uma hora e meia depois, o Shinkansen chegou a Quioto.',
        ending: { tone: 'bom', title: 'O Fuji pela janela', message: 'O Linu achou o lugar, comeu um ekiben de peixe e viu o monte Fuji pela janela, como todo viajante sonha.' },
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
    summary: 'No Tanabata de Sendai, o Linu escreve um desejo numa tira de papel e conta a uma nova amiga que São Paulo também tem essa festa, no bairro da Liberdade.',
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
        translation: 'Sendai, agosto. Nas galerias cobertas da cidade há muitos enfeites grandes e compridos: vermelhos, azuis, amarelos, cor-de-rosa… Hoje é o festival de Tanabata.',
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
        translation: 'Na frente de um enfeite, uma menina está escrevendo alguma coisa num papelzinho. «Oi. Eu sou a Akari. Isto é um tanzaku. A gente escreve um desejo nele.»',
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
          { text: '「おいしい魚をたくさん食べられますように。」と書きます。', translation: 'Escreve: «Que eu possa comer muito peixe gostoso.»', next: 'legend' },
        ],
      },
      legend: {
        emoji: '🌌',
        text: 'あかりちゃんが、七夕の話をしてくれました。「おりひめとひこぼしは、天の川のりょうがわにいます。ふたりは、一年に一回だけ、七夕の夜に会えるんです。」',
        translation: 'A Akari contou a história do Tanabata. «A Orihime e o Hikoboshi ficam um de cada lado da Via Láctea. Os dois só podem se encontrar uma vez por ano, na noite do Tanabata.»',
        choices: [
          { text: '「一年に一回だけですか。さびしいですね。」', translation: '«Só uma vez por ano? Que triste.»', next: 'brasil' },
          {
            text: '「毎日会えるんですね。いいですね！」',
            translation: '«Então eles se encontram todo dia. Que bom!»',
            wrong: 'A Akari disse «一年に一回だけ» (ichinen ni ikkai dake): SÓ uma vez por ano! Todo dia seria «毎日» (mainichi). だけ (dake) quer dizer «só, apenas».',
          },
        ],
      },
      brasil: {
        emoji: '🇧🇷',
        text: '「リヌくんは、どこから来ましたか？」「ブラジルのサンパウロです。サンパウロにも七夕まつりがありますよ！」あかりちゃんはびっくりしました。「えっ、本当？」',
        translation: '«De onde você é, Linu?» «De São Paulo, no Brasil. Em São Paulo também tem festival de Tanabata!» A Akari ficou surpresa. «Sério?»',
        choices: [
          { text: '「リベルダージという町で、毎年七月にあります。」', translation: '«É num bairro chamado Liberdade, todo ano em julho.»', next: 'liberdade' },
          { text: 'スマホで、リベルダージのしゃしんを見せます。', translation: 'Mostra fotos da Liberdade no celular.', next: 'liberdade' },
        ],
      },
      liberdade: {
        emoji: '🏮',
        text: '「リベルダージには、日本からのいみんがたくさん住んでいました。大きな赤いとりいもあります。でも、ブラジルの七月は冬なんです。」「冬の七夕？おもしろい！」とあかりちゃんはわらいました。',
        translation: '«Na Liberdade moravam muitos imigrantes japoneses. Tem até um grande torii vermelho. Mas, no Brasil, julho é inverno.» «Tanabata no inverno? Que legal!», riu a Akari.',
        choices: [
          { text: '「いつか、いっしょにサンパウロの七夕に行きましょう！」', translation: '«Um dia, vamos juntos ao Tanabata de São Paulo!»', next: 'final_bom' },
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
    summary: 'No Festival da Neve de Sapporo, o Linu vê esculturas gigantes de neve, se atrapalha no gelo da calçada e aprende um jeito de andar muito familiar.',
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
        translation: 'Na rua tem uma máquina de bebidas. O Linu comprou uma sopa de milho quentinha. As máquinas do Japão têm bebidas geladas e também quentes.',
        choices: [{ text: '雪のおしろを見に行きます。', translation: 'Vai ver o castelo de neve.', next: 'oshiro' }],
      },
      oshiro: {
        emoji: '🏰',
        text: '雪のおしろは、高さが十五メートルぐらいあります。夜になると、ライトで色がかわります。となりのおじいさんが言いました。「一か月ぐらいかけて、たくさんの人が作ったんですよ。」',
        translation: 'O castelo de neve tem uns quinze metros de altura. À noite, as luzes mudam a cor dele. Um senhor ao lado disse: «Muita gente trabalhou quase um mês para fazer isto.»',
        choices: [{ text: '「すごいですね！」と言って、しゃしんをとります。', translation: 'Diz «Que incrível!» e tira uma foto.', next: 'michi' }],
      },
      michi: {
        emoji: '🧊',
        text: 'しゃしんをとったあと、リヌは歩き始めました。でも、道がこおっていて、つるつるです。たくさんの人がころんでいます。',
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
        choices: [{ text: '「だいじょうぶです。でも、どうやって歩けばいいですか？」', translation: '«Estou bem. Mas como é que se anda aqui?»', next: 'pinguin' }],
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
            wrong: 'O senhor disse «小さく、ゆっくり» (chiisaku, yukkuri): passos PEQUENOS e DEVAGAR, com a sola inteira no chão. Passo grande e rápido no gelo é tombo na certa!',
          },
        ],
      },
      caminho: {
        emoji: '👣',
        text: 'ペンギン歩きは、かんたんです！リヌは一回もころびませんでした。おじいさんが言いました。「おなかがすきましたね。近くに、おいしいスープカレーの店がありますよ。いっしょに行きませんか？」',
        translation: 'O andar de pinguim é fácil! O Linu não caiu nenhuma vez. O senhor disse: «Deu fome, né? Aqui perto tem uma casa de sopa de curry muito boa. Não quer ir junto?»',
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
    summary: 'Em Beppu, a cidade das fontes termais, o Linu visita os «infernos» de água fervente com a amiga Mio e aprende as regras do banho de onsen.',
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
        text: 'リヌは友だちのみおと、九州の別府に来た。町のあちこちから、白いゆげが出ている。「別府は温泉の町なんだよ。」とみおが言った。',
        translation: 'O Linu veio a Beppu, em Kyūshū, com a amiga Mio. Por toda parte da cidade sai um vapor branco. «Beppu é a cidade dos onsen», disse a Mio.',
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
        translation: '«Os «infernos» de Beppu são fontes quentíssimas. Chegam perto de cem graus, então não dá para entrar. É só para olhar.» Os dois foram ao Umi Jigoku, o «inferno do mar». A água era azul como o mar.',
        choices: [
          { text: '「きれい！ほかの地獄も見たい。」', translation: '«Que lindo! Quero ver os outros infernos também.»', next: 'tamago' },
          {
            text: '青いお湯で、およごうとする。',
            translation: 'Tenta nadar na água azul.',
            wrong: 'A Mio acabou de dizer «入れないよ。見るだけ» (hairenai yo, miru dake): não dá para entrar, é SÓ PARA OLHAR! A água chega perto de 百度 (hyaku-do), cem graus. Pinguim cozido, não!',
          },
        ],
      },
      tamago: {
        emoji: '🥚',
        text: '次は「血の池地獄」。お湯が赤くて、ちょっとこわかった。店の前で、みおが温泉たまごを二つ買った。「地獄のゆげで作ったんだって。」',
        translation: 'Depois, o Chi-no-ike Jigoku, o «inferno do lago de sangue». A água era vermelha e dava um pouco de medo. Na frente de uma loja, a Mio comprou dois ovos de onsen. «Dizem que são feitos no vapor do inferno.»',
        choices: [{ text: '「おいしい！じゃあ、そろそろ温泉に行こう。」', translation: '«Que gostoso! Então, agora vamos para o onsen.»', next: 'vestiario' }],
      },
      vestiario: {
        emoji: '🚪',
        text: '温泉の入口で、みおが言った。「わたしは女湯、リヌは男湯ね。お湯に入る前に、体をあらってね。それから、タオルはお湯に入れちゃだめだよ。」',
        translation: 'Na entrada do onsen, a Mio disse: «Eu vou para o banho feminino, e você, para o masculino. Antes de entrar na água, lave o corpo, tá? E a toalha não pode entrar na água.»',
        choices: [
          { text: 'まず体をあらって、それからお湯に入る。', translation: 'Primeiro lava o corpo e depois entra na água.', next: 'banho' },
          {
            text: 'タオルといっしょに、お湯に入る。',
            translation: 'Entra na água com a toalha.',
            wrong: 'A Mio avisou «タオルはお湯に入れちゃだめだよ» (taoru wa oyu ni irecha dame da yo): a toalha NÃO pode entrar na água. 〜ちゃだめ quer dizer «não pode…» e é a forma falada de 〜てはだめ.',
          },
        ],
      },
      banho: {
        emoji: '♨️',
        text: 'リヌはタオルを頭の上にのせて、お湯に入った。となりのおじいさんが「おっ、上手だね。」とわらった。お湯はあつくて、気持ちいい。',
        translation: 'O Linu pôs a toalha em cima da cabeça e entrou na água. O senhor do lado riu: «Olha só, sabe direitinho!» A água está quente e deliciosa.',
        choices: [
          { text: '「気持ちいいですね。」とおじいさんに話しかける。', translation: 'Puxa conversa com o senhor: «Que delícia, né?»', next: 'conversa' },
          { text: 'ずっとお湯の中にいる。', translation: 'Fica na água sem parar.', next: 'final_neutro' },
        ],
      },
      conversa: {
        emoji: '👴',
        text: '「どこから来たの？」「ブラジルから来ました。」「ブラジル！遠いねえ。別府の温泉は、つかれた体に一番いいよ。」おじいさんはうれしそうに言った。',
        translation: '«De onde você veio?» «Vim do Brasil.» «Do Brasil! Que longe! O onsen de Beppu é o melhor remédio para corpo cansado», disse o senhor, todo contente.',
        choices: [
          { text: '「ありがとうございます。」と言って、お湯から出る。', translation: 'Diz «muito obrigado» e sai da água.', next: 'final_bom' },
          { text: '話が楽しくて、一時間もお湯に入っている。', translation: 'A conversa está tão boa que ele fica uma hora na água.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🥛',
        text: '外で、みおが待っていた。「どうだった？」「最高！」ふたりは、つめたいコーヒー牛乳を飲んだ。',
        translation: 'Lá fora, a Mio estava esperando. «E aí?» «Demais!» Os dois tomaram um leite com café geladinho.',
        ending: {
          tone: 'bom',
          title: 'Banho de verdade',
          message: 'O Linu viu os «infernos» de Beppu e tomou banho de onsen seguindo todas as regras: corpo lavado, toalha na cabeça e um leite com café no final.',
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
    summary: 'Na pequena ilha de Taketomi, em Okinawa, o Linu passeia numa carroça puxada por um búfalo, experimenta o sanshin e procura a areia em forma de estrela.',
    cultural_context:
      'Okinawa foi o Reino de Ryūkyū até 1879 e tem língua, música e comida próprias. Taketomi, ilhota a uns quinze minutos de barco de Ishigaki, conserva a vila tradicional: casas de telhado vermelho com um shīsā, leão de cerâmica protetor, no alto, muros de pedra de coral e ruas de areia branca, que os turistas percorrem em carroças puxadas por búfalos-d\'água, ao som do sanshin, o instrumento de três cordas coberto de pele de cobra. Na praia de Kaiji, a «areia-estrela» é, na verdade, a casca de minúsculos seres marinhos, e os moradores pedem que ninguém a leve embora.',
    start: 'start',
    glossary: [
      ['めんそーれ', 'bem-vindo! (na língua de Okinawa; em japonês padrão, ようこそ)'],
      ['シーサー', 'shīsā, leão de cerâmica que protege as casas de Okinawa'],
      ['水牛車', 'carroça puxada por búfalo-d\'água'],
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
        text: '石垣島から船で十五分。リヌは竹富島に着いた。赤いやねの家が多くて、道は白いすなだ。やねの上には、シーサーがいる。「めんそーれ！」と、おじさんが大きな声で言った。',
        translation: 'Quinze minutos de barco a partir de Ishigaki. O Linu chegou à ilha de Taketomi. Há muitas casas de telhado vermelho, e as ruas são de areia branca. Em cima dos telhados há shīsās. «Mensōre!», disse um senhor em voz alta.',
        choices: [
          { text: '「めんそーれって、何ですか？」と聞く。', translation: 'Pergunta: «O que quer dizer mensōre?»', next: 'mensore' },
          { text: 'やねの上のシーサーを見る。', translation: 'Olha o shīsā em cima do telhado.', next: 'shisa' },
        ],
      },
      shisa: {
        emoji: '🦁',
        text: 'シーサーはライオンみたいな顔で、口を大きく開けている。家を守る神様だ。おじさんがまた言った。「めんそーれ！」',
        translation: 'O shīsā tem cara de leão e está com a boca bem aberta. É uma divindade que protege a casa. O senhor repetiu: «Mensōre!»',
        choices: [{ text: '「めんそーれって、何ですか？」と聞く。', translation: 'Pergunta: «O que quer dizer mensōre?»', next: 'mensore' }],
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
            wrong: 'O senhor disse «糸は三本だけ» (ito wa sanbon dake): são só TRÊS cordas. O próprio nome, 三線 (sanshin), quer dizer «três fios». Quatro seria 四本 (yonhon).',
          },
        ],
      },
      tocar: {
        emoji: '🎶',
        text: 'リヌがひくと、ハナコが「モー」とないた。おじさんは大わらい。「ハナコも歌ってるよ！」そして、水牛車の旅は終わった。',
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
        translation: 'No fim da tarde, o Linu viu o pôr do sol num píer antigo, no oeste da ilha. O céu e o mar estavam tingidos de vermelho. No barco de volta, ele lembrava da música do senhor.',
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
      ['先ぱい', 'veterano, colega mais antigo (o calouro é o 後はい, kōhai)'],
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
        text: '金沢の高校に来て、一週間。リヌは水泳部に入った。今日は、はじめての部活だ。プールに行くと、先ぱいたちがもう集まっていた。',
        translation: 'Uma semana depois de chegar a uma escola de ensino médio em Kanazawa, o Linu entrou para o clube de natação. Hoje é o primeiro dia de clube. Quando ele chegou à piscina, os veteranos já estavam reunidos.',
        choices: [
          { text: '「おつかれさまです！」と大きい声であいさつする。', translation: 'Cumprimenta em voz alta: «Otsukaresama desu!»', next: 'senpai' },
          { text: '何も言わないで、プールを見る。', translation: 'Não diz nada e fica olhando a piscina.', next: 'silencio' },
        ],
      },
      silencio: {
        emoji: '🤨',
        text: 'キャプテンのゆうと先ぱいが、リヌを見た。「リヌくん、部活では、来たらまずあいさつだよ。」',
        translation: 'O capitão, o veterano Yūto, olhou para o Linu. «Linu, no clube, chegou, cumprimentou. Isso vem primeiro.»',
        choices: [{ text: '「すみません！おつかれさまです！」', translation: '«Desculpe! Otsukaresama desu!»', next: 'senpai' }],
      },
      senpai: {
        emoji: '🍂',
        text: '「おつかれ！リヌくん、今日はおよがないよ。プールそうじの日なんだ。」プールの水はみどりで、はっぱがたくさんういている。',
        translation: '«E aí! Linu, hoje a gente não vai nadar. É o dia de limpar a piscina.» A água da piscina está verde, cheia de folhas boiando.',
        choices: [
          { text: '「わかりました。何をすればいいですか？」', translation: '«Entendi. O que eu devo fazer?»', next: 'trabalho' },
          {
            text: 'すぐに、みどりの水にとびこむ。',
            translation: 'Pula logo na água verde.',
            wrong: 'O Yūto disse «今日はおよがないよ» (kyō wa oyoganai yo): hoje NÃO vamos nadar, é dia de limpar a piscina. «およがない» é a forma simples negativa de «およぐ» (nadar). E a água está verde de algas!',
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
        text: '三時間後、プールはぴかぴかになった。みんなつかれたけど、楽しかった。ゆうと先ぱいがホースで水をまいて、みんなわらっている。',
        translation: 'Três horas depois, a piscina estava brilhando. Todo mundo ficou cansado, mas foi divertido. O Yūto está jogando água com a mangueira, e todos riem.',
        choices: [
          { text: '「先ぱい、明日はおよげますか？」と聞く。', translation: 'Pergunta: «Veterano, amanhã a gente pode nadar?»', next: 'amanha' },
          { text: 'ホースをとって、先ぱいに水をかける。', translation: 'Pega a mangueira e joga água no veterano.', next: 'final_neutro' },
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
            wrong: 'O Yūto disse que amanhã «夏の練習が始まる» (natsu no renshū ga hajimaru): começa o TREINO de verão, com a piscina cheia. A limpeza foi hoje!',
          },
        ],
      },
      final_bom: {
        emoji: '🥇',
        text: '次の日、きれいな水のプールに、リヌは一番にとびこんだ。先ぱいたちは目を丸くした。「はやい！」「さすがペンギン！」',
        translation: 'No dia seguinte, o Linu foi o primeiro a pular na piscina de água limpinha. Os veteranos arregalaram os olhos. «Que rápido!» «Pinguim é pinguim!»',
        ending: {
          tone: 'bom',
          title: 'Estrela do clube',
          message: 'O Linu cumprimentou os veteranos, limpou a piscina com o time e estreou no treino de verão como o nadador mais rápido do clube.',
        },
      },
      final_neutro: {
        emoji: '💦',
        text: 'ゆうと先ぱいは、びしょびしょになった。「……リヌくん。明日、プールのまわりを十回走ってね。」ほかの先ぱいたちは、下を向いてわらっている。',
        translation: 'O Yūto ficou encharcado. «…Linu. Amanhã, dez voltas correndo em volta da piscina, tá?» Os outros veteranos olham para o chão, segurando o riso.',
        ending: {
          tone: 'neutro',
          title: 'Dez voltas',
          message: 'Brincadeira com veterano tem limite! No clube japonês, o calouro espera o senpai começar a bagunça, e não o contrário.',
        },
      },
    },
  },
];
