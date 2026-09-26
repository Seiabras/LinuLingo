import type { StorySeed } from '../types';

/** Histórias interativas em russo: o Linu viaja de Moscou a Kamtchatka, uma por subnível. */
export const STORIES_RU: StorySeed[] = [
  {
    id: 'ru-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ли́ну в Москве́',
    emoji: '🐧',
    summary: 'O Linu chega à Praça Vermelha e conhece a Macha. Passeio ou metrô?',
    cultural_context:
      'A Catedral de São Basílio, com suas cúpulas coloridas, fica na Praça Vermelha e foi construída entre 1555 e 1561. No russo antigo, a palavra «кра́сный» também queria dizer «bonito».',
    start: 'start',
    glossary: [
      ['Здра́вствуйте!', 'Olá! (formal)'],
      ['До свида́ния!', 'Até logo!'],
      ['э́то', 'isto é / este é'],
      ['пло́щадь', 'praça'],
      ['собо́р', 'catedral'],
      ['краси́вый', 'bonito'],
      ['Что э́то?', 'O que é isto?'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Москва́. Э́то Кра́сная пло́щадь. Вот де́вушка.',
        translation: 'Moscou. Esta é a Praça Vermelha. Ali está uma moça.',
        choices: [
          { text: '«Здра́вствуйте!»', translation: '«Olá!»', next: 'masha' },
          {
            text: '«До свида́ния!»',
            translation: '«Até logo!»',
            wrong: 'O Linu acabou de chegar! «До свида́ния» é para se despedir. Para cumprimentar, diga «Здра́вствуйте» ou «Приве́т».',
          },
        ],
      },
      masha: {
        emoji: '👩',
        text: '«Здра́вствуйте! Я Ма́ша. А вы?»',
        translation: '«Olá! Eu sou a Macha. E você?»',
        choices: [
          { text: '«Я Ли́ну. Я пингви́н.»', translation: '«Eu sou o Linu. Eu sou um pinguim.»', next: 'turist' },
          {
            text: '«Я Ма́ша.»',
            translation: '«Eu sou a Macha.»',
            wrong: 'Ма́ша é o nome DELA. Ela perguntou «А вы?» (E você?). Responda com o seu nome: «Я Ли́ну».',
          },
        ],
      },
      turist: {
        emoji: '🧳',
        text: '«Вы тури́ст?» — «Да, я тури́ст. Я из Брази́лии.»',
        translation: '«Você é turista?» — «Sim, eu sou turista. Eu sou do Brasil.»',
        choices: [
          { text: '«Что э́то?»', translation: '«O que é isto?»', next: 'sobor' },
          { text: '«Где метро́?»', translation: '«Onde fica o metrô?»', next: 'metro' },
        ],
      },
      sobor: {
        emoji: '⛪',
        text: '«Э́то собо́р Васи́лия Блаже́нного. Он о́чень краси́вый!»',
        translation: '«Esta é a Catedral de São Basílio. Ela é muito bonita!»',
        choices: [{ text: '«Да! Спаси́бо, Ма́ша!»', translation: '«Sim! Obrigado, Macha!»', next: 'foto' }],
      },
      foto: {
        emoji: '📸',
        text: 'Ма́ша: «Фо́то? Раз, два, три!» Тут и го́луби: оди́н, два, три, четы́ре, пять!',
        translation: 'Macha: «Foto? Um, dois, três!» Aqui também há pombos: um, dois, três, quatro, cinco!',
        choices: [{ text: '«Спаси́бо! До свида́ния, Ма́ша!»', translation: '«Obrigado! Até logo, Macha!»', next: 'final_foto' }],
      },
      final_foto: {
        emoji: '🎉',
        text: '«До свида́ния, Ли́ну!» Вот фо́то: Ли́ну, Ма́ша и пять голубе́й.',
        translation: '«Até logo, Linu!» Aqui está a foto: Linu, Macha e cinco pombos.',
        ending: { tone: 'bom', title: 'Foto na Praça Vermelha!', message: 'O Linu fez uma amiga e ganhou uma foto com a Catedral de São Basílio ao fundo.' },
      },
      metro: {
        emoji: '🚇',
        text: '«Метро́ там. Э́то ста́нция „Охо́тный Ряд“.» Ли́ну в метро́. А где Ма́ша?',
        translation: '«O metrô é ali. É a estação Okhótny Riad.» O Linu está no metrô. E cadê a Macha?',
        ending: { tone: 'neutro', title: 'Sozinho no metrô', message: 'O metrô de Moscou é lindo, mas o Linu nem se despediu da Macha. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Бе́лые но́чи',
    emoji: '🌉',
    summary: 'Meia-noite em São Petersburgo e o céu ainda está claro. O Linu vai dormir ou passear?',
    cultural_context:
      'Em São Petersburgo, de fim de maio a meados de julho, acontecem as «noites brancas»: o céu quase não escurece. Na temporada de navegação, as pontes levadiças sobre o rio Neva se abrem de madrugada para os navios passarem.',
    start: 'start',
    glossary: [
      ['бе́лые но́чи', 'noites brancas'],
      ['чита́ть', 'ler'],
      ['говори́ть', 'falar'],
      ['стихи́', 'poemas, versos'],
      ['мост / мосты́', 'ponte / pontes'],
      ['у меня́ есть', 'eu tenho'],
      ['гости́ница', 'hotel'],
    ],
    nodes: {
      start: {
        emoji: '🌇',
        text: 'Санкт-Петербу́рг, ию́нь. Уже́ по́лночь, но на у́лице светло́!',
        translation: 'São Petersburgo, junho. Já é meia-noite, mas lá fora está claro!',
        choices: [
          { text: 'Ли́ну гуля́ет у Невы́.', translation: 'O Linu passeia à beira do Neva.', next: 'neva' },
          { text: 'Ли́ну идёт в гости́ницу спать.', translation: 'O Linu vai para o hotel dormir.', next: 'son' },
        ],
      },
      son: {
        emoji: '😴',
        text: 'Ли́ну спит. А на у́лице бе́лая ночь и разведённые мосты́.',
        translation: 'O Linu dorme. E lá fora há uma noite branca e as pontes levantadas.',
        ending: { tone: 'neutro', title: 'Soninho', message: 'O Linu descansou, mas perdeu as noites brancas. Que tal passear da próxima vez?' },
      },
      neva: {
        emoji: '📖',
        text: 'На на́бережной сиди́т де́вушка. Она́ чита́ет кни́гу.',
        translation: 'No cais está sentada uma moça. Ela está lendo um livro.',
        choices: [{ text: '«Приве́т! Что ты чита́ешь?»', translation: '«Oi! O que você está lendo?»', next: 'kniga' }],
      },
      kniga: {
        emoji: '📜',
        text: '«Приве́т! Я чита́ю стихи́ Пу́шкина. А ты говори́шь по-ру́сски?»',
        translation: '«Oi! Estou lendo poemas de Púchkin. E você fala russo?»',
        choices: [
          { text: '«Да, немно́го. Я говорю́ по-ру́сски и по-португа́льски.»', translation: '«Sim, um pouco. Eu falo russo e português.»', next: 'most' },
          {
            text: '«Нет, я не пишу́ пи́сьма.»',
            translation: '«Não, eu não escrevo cartas.»',
            wrong: 'Ela perguntou «ты говори́шь по-ру́сски?» (você fala russo?), com o verbo говори́ть (falar), e não писа́ть (escrever).',
          },
        ],
      },
      most: {
        emoji: '🌉',
        text: '«Меня́ зову́т Ве́ра. Смотри́, Дворцо́вый мост разво́дят!» Ли́ну говори́т: «Ой! Моя́ гости́ница на том берегу́!»',
        translation: '«Meu nome é Vera. Olha, estão abrindo a Ponte do Palácio!» O Linu diz: «Ai! Meu hotel fica na outra margem!»',
        choices: [
          { text: '«Ничего́. У меня́ есть вре́мя.»', translation: '«Tudo bem. Eu tenho tempo.»', next: 'chai' },
          { text: '«Не пробле́ма. Я хорошо́ пла́ваю!»', translation: '«Sem problema. Eu nado bem!»', next: 'plavat' },
        ],
      },
      chai: {
        emoji: '🫖',
        text: 'Ве́ра говори́т: «У меня́ есть те́рмос и чай. Ты хо́чешь?»',
        translation: 'Vera diz: «Eu tenho uma garrafa térmica e chá. Você quer?»',
        choices: [{ text: '«Да, спаси́бо!»', translation: '«Sim, obrigado!»', next: 'final_chai' }],
      },
      final_chai: {
        emoji: '🎉',
        text: 'Они́ пьют чай и смо́трят на мосты́ и корабли́. Бе́лые но́чи о́чень краси́вые!',
        translation: 'Eles tomam chá e olham as pontes e os navios. As noites brancas são muito bonitas!',
        ending: { tone: 'bom', title: 'Noite branca com amiga', message: 'O Linu viu as pontes do Neva se abrirem e fez uma amiga em São Petersburgo.' },
      },
      plavat: {
        emoji: '🌊',
        text: 'Ли́ну пры́гает в Неву́. Вода́ холо́дная, но пингви́ны лю́бят холо́дную во́ду!',
        translation: 'O Linu pula no Neva. A água está fria, mas pinguins adoram água fria!',
        ending: { tone: 'neutro', title: 'Atalho gelado', message: 'O Linu chegou ao hotel molhado e sem se despedir da Vera. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Дере́вня на Во́лге',
    emoji: '🎣',
    summary: 'O Linu passa uns dias na casa da vovó Nina, numa aldeia à beira do Volga. Pescar ou colher cogumelos?',
    cultural_context:
      'O Volga é o rio mais longo da Europa, com cerca de 3.500 km, e deságua no mar Cáspio. Os russos o chamam carinhosamente de «Во́лга-ма́тушка» (mãezinha Volga).',
    start: 'start',
    glossary: [
      ['в дере́вне', 'na aldeia'],
      ['на Во́лге', 'no Volga, à beira do Volga'],
      ['у́дочка', 'vara de pescar'],
      ['корзи́на', 'cesta'],
      ['сара́й', 'galpão, depósito'],
      ['крыльцо́', 'alpendre, varanda da entrada'],
      ['гриб', 'cogumelo'],
      ['мой / моя́ / моё', 'meu / minha'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Ли́ну в гостя́х у ба́бушки Ни́ны. Её дом стои́т в дере́вне на Во́лге.',
        translation: 'O Linu está hospedado na casa da vovó Nina. A casa dela fica numa aldeia à beira do Volga.',
        choices: [{ text: '«До́брое у́тро, ба́бушка!»', translation: '«Bom dia, vovó!»', next: 'utro' }],
      },
      utro: {
        emoji: '☀️',
        text: 'Ба́бушка говори́т: «Моя́ у́дочка в сара́е, а моя́ корзи́на на крыльце́. Мо́жешь лови́ть ры́бу и́ли собира́ть грибы́. То́лько кра́сные мухомо́ры не бери́: они́ ядови́тые!»',
        translation:
          'A vovó diz: «Minha vara de pescar está no galpão, e minha cesta está na varanda. Você pode pescar ou colher cogumelos. Só não pegue os amanitas vermelhos: são venenosos!»',
        choices: [
          { text: 'Ли́ну берёт у́дочку в сара́е и идёт к реке́.', translation: 'O Linu pega a vara no galpão e vai até o rio.', next: 'reka' },
          { text: 'Ли́ну берёт корзи́ну на крыльце́ и идёт в лес.', translation: 'O Linu pega a cesta na varanda e vai para o bosque.', next: 'les' },
          {
            text: 'Ли́ну и́щет у́дочку на крыльце́.',
            translation: 'O Linu procura a vara de pescar na varanda.',
            wrong: 'A vovó disse que a vara está «в сара́е» (no galpão). Na varanda («на крыльце́») está a cesta.',
          },
        ],
      },
      reka: {
        emoji: '🏞️',
        text: 'Ли́ну сиди́т на берегу́. Во́лга здесь широ́кая и споко́йная. Вдруг он ви́дит в воде́ большу́ю ры́бу!',
        translation: 'O Linu está sentado na margem. Aqui o Volga é largo e calmo. De repente ele vê um peixe grande na água!',
        choices: [
          { text: 'Ли́ну ти́хо ждёт с у́дочкой.', translation: 'O Linu espera em silêncio com a vara.', next: 'ryba' },
          { text: 'Ли́ну пры́гает в во́ду.', translation: 'O Linu pula na água.', next: 'nyrok' },
        ],
      },
      ryba: {
        emoji: '🐟',
        text: 'Ры́ба клюёт! Ли́ну ло́вит большо́го леща́. Тепе́рь у него́ есть у́жин для ба́бушки.',
        translation: 'O peixe morde a isca! O Linu pesca uma brema grande. Agora ele tem o jantar para a vovó.',
        choices: [{ text: 'Ли́ну несёт ры́бу домо́й.', translation: 'O Linu leva o peixe para casa.', next: 'final_ryba' }],
      },
      final_ryba: {
        emoji: '🎉',
        text: 'Ба́бушка жа́рит ры́бу на сковороде́. «Молоде́ц, Ли́ну! Ты настоя́щий рыба́к!» — говори́т она́.',
        translation: 'A vovó frita o peixe na frigideira. «Muito bem, Linu! Você é um pescador de verdade!» — diz ela.',
        ending: { tone: 'bom', title: 'Pescador do Volga!', message: 'O Linu pescou o jantar no Volga e deixou a vovó Nina orgulhosa.' },
      },
      nyrok: {
        emoji: '💦',
        text: 'Ли́ну пла́вает в Во́лге, как в мо́ре. Но ры́ба уплыва́ет, а ба́бушкину у́дочку уно́сит тече́ние.',
        translation: 'O Linu nada no Volga como se fosse o mar. Mas o peixe foge, e a correnteza leva a vara da vovó.',
        ending: { tone: 'neutro', title: 'Mergulho sem peixe', message: 'Pinguim nada bem, mas pescar pede paciência. Tente de novo!' },
      },
      les: {
        emoji: '🌲',
        text: 'В лесу́ ти́хо. Под большо́й берёзой Ли́ну ви́дит бе́лый гриб и кра́сный мухомо́р.',
        translation: 'No bosque está tudo quieto. Debaixo de uma bétula grande, o Linu vê um boleto e um amanita vermelho.',
        choices: [
          { text: 'Ли́ну кладёт бе́лый гриб в корзи́ну.', translation: 'O Linu põe o boleto na cesta.', next: 'final_grib' },
          {
            text: 'Ли́ну кладёт мухомо́р в корзи́ну.',
            translation: 'O Linu põe o amanita na cesta.',
            wrong:
              'A vovó avisou: «кра́сные мухомо́ры не бери́: они́ ядови́тые» (não pegue os amanitas vermelhos: são venenosos). O «бе́лый гриб» (boleto) é o que se come.',
          },
        ],
      },
      final_grib: {
        emoji: '🍲',
        text: 'Ве́чером ба́бушка ва́рит грибно́й суп. Ли́ну ест суп и смо́трит в окно́ на Во́лгу.',
        translation: 'À noite, a vovó faz sopa de cogumelos. O Linu toma a sopa e olha o Volga pela janela.',
        ending: { tone: 'bom', title: 'Sopa da vovó', message: 'O Linu achou um boleto, o cogumelo mais querido dos russos, e ganhou uma sopa quentinha.' },
      },
    },
  },
  {
    id: 'ru-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Пода́рки из Каза́ни',
    emoji: '🍯',
    summary: 'Último dia em Cazã: o Linu precisa comprar presentes para os amigos. Mercado ou casa de chá?',
    cultural_context:
      'Cazã é a capital do Tartaristão; no seu Kremlin, Patrimônio Mundial da UNESCO, uma mesquita e uma catedral ortodoxa ficam lado a lado. O чак-чак, massa frita com mel, é o doce típico tártaro, e o chá com leite é tradição local.',
    start: 'start',
    glossary: [
      ['пода́рок', 'presente'],
      ['ры́нок', 'mercado'],
      ['коро́бка', 'caixa'],
      ['нет + genitivo', 'não há…'],
      ['про́бовать / попро́бовать', 'provar'],
      ['чак-чак', 'doce tártaro de massa frita com mel'],
      ['эчпочма́к', 'pastel triangular tártaro'],
    ],
    nodes: {
      start: {
        emoji: '🕌',
        text: 'Вчера́ Ли́ну прие́хал в Каза́нь. Он гуля́л по Кремлю́ и ви́дел мече́ть и собо́р. За́втра он пое́дет домо́й, поэ́тому сего́дня он ку́пит пода́рки для друзе́й.',
        translation:
          'Ontem o Linu chegou a Cazã. Ele passeou pelo Kremlin e viu a mesquita e a catedral. Amanhã ele vai voltar para casa, por isso hoje vai comprar presentes para os amigos.',
        choices: [
          { text: '«Я пойду́ на ры́нок!»', translation: '«Vou ao mercado!»', next: 'rynok' },
          { text: '«Снача́ла я вы́пью ча́ю в кафе́.»', translation: '«Primeiro vou tomar um chá no café.»', next: 'kafe' },
        ],
      },
      rynok: {
        emoji: '🛒',
        text: 'На ры́нке мно́го люде́й и мно́го сла́дкого. Продаве́ц улыба́ется: «Возьми́те чак-чак! Большо́й коро́бки уже́ нет, оста́лись то́лько ма́ленькие.»',
        translation: 'No mercado há muita gente e muito doce. O vendedor sorri: «Leve chak-chak! Caixa grande já não tem, sobraram só as pequenas.»',
        choices: [
          { text: '«Да́йте, пожа́луйста, три ма́ленькие коро́бки.»', translation: '«Me dê três caixas pequenas, por favor.»', next: 'pokupka' },
          {
            text: '«Да́йте, пожа́луйста, большу́ю коро́бку.»',
            translation: '«Me dê uma caixa grande, por favor.»',
            wrong: 'O vendedor disse «большо́й коро́бки уже́ нет»: нет + genitivo quer dizer que algo não existe ou acabou. Só sobraram as pequenas.',
          },
        ],
      },
      pokupka: {
        emoji: '🥟',
        text: 'Продаве́ц кладёт коро́бки в паке́т и спра́шивает: «А вы уже́ про́бовали эчпочма́к? Сего́дня у́тром моя́ жена́ напекла́ мно́го.»',
        translation: 'O vendedor põe as caixas numa sacola e pergunta: «E o senhor já provou echpochmak? Hoje de manhã minha esposa assou um monte.»',
        choices: [
          { text: '«Нет, ещё не про́бовал. Попро́бую!»', translation: '«Não, ainda não provei. Vou provar!»', next: 'echpochmak' },
          { text: '«Нет, спаси́бо. Я бу́ду у́жинать в гости́нице.»', translation: '«Não, obrigado. Vou jantar no hotel.»', next: 'final_simples' },
        ],
      },
      echpochmak: {
        emoji: '😋',
        text: 'Эчпочма́к — э́то треуго́льный пирожо́к с мя́сом, лу́ком и карто́шкой. Ли́ну съел оди́н, пото́м ещё оди́н. «Я возьму́ пять штук для друзе́й!» — сказа́л он.',
        translation:
          'O echpochmak é um pastel triangular com carne, cebola e batata. O Linu comeu um, depois mais um. «Vou levar cinco para os amigos!» — disse ele.',
        choices: [{ text: 'Ли́ну заплати́л и поблагодари́л продавца́.', translation: 'O Linu pagou e agradeceu ao vendedor.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Ве́чером Ли́ну собра́л чемода́н. Там три коро́бки сла́достей и пять пирожко́в. За́втра его́ друзья́ бу́дут пить чай и вспомина́ть Каза́нь вме́сте с ним.',
        translation:
          'À noite, o Linu fez a mala. Nela há três caixas de doces e cinco pastéis. Amanhã os amigos dele vão tomar chá e relembrar Cazã junto com ele.',
        ending: { tone: 'bom', title: 'Mala cheia de Cazã!', message: 'O Linu levou chak-chak e echpochmak, os sabores mais famosos da cozinha tártara.' },
      },
      final_simples: {
        emoji: '🛍️',
        text: 'Ли́ну верну́лся в гости́ницу с тремя́ коро́бками сла́достей. Пода́рки есть, но эчпочма́к он так и не попро́бовал.',
        translation: 'O Linu voltou ao hotel com três caixas de doces. Os presentes estão garantidos, mas o echpochmak ele nem chegou a provar.',
        ending: { tone: 'neutro', title: 'Faltou provar', message: 'Presentes comprados, mas o Linu perdeu um clássico tártaro. Da próxima vez, prove!' },
      },
      kafe: {
        emoji: '🍵',
        text: 'В кафе́ Ли́ну пил чай с молоко́м, как пьют в Татарста́не. Чай был о́чень вку́сный, и он заказа́л ещё оди́н ча́йник. Пото́м ещё оди́н…',
        translation: 'No café, o Linu tomou chá com leite, como se bebe no Tartaristão. O chá estava muito gostoso, e ele pediu mais um bule. Depois mais um…',
        choices: [
          { text: 'Ли́ну посмотре́л на часы́.', translation: 'O Linu olhou o relógio.', next: 'pozdno' },
          {
            text: '«Я ещё не пил чай.»',
            translation: '«Eu ainda não tomei chá.»',
            wrong: 'O texto diz «Ли́ну пил чай»: é passado, ele já bebeu (e bebeu muito!). Ele pediu até mais bules.',
          },
        ],
      },
      pozdno: {
        emoji: '🕖',
        text: 'Бы́ло уже́ семь часо́в ве́чера. Ли́ну побежа́л на ры́нок, но ры́нок уже́ закры́лся. «Ничего́, за́втра у́тром я куплю́ пода́рки в аэропорту́», — поду́мал он.',
        translation:
          'Já eram sete da noite. O Linu correu para o mercado, mas o mercado já tinha fechado. «Tudo bem, amanhã de manhã compro os presentes no aeroporto», pensou ele.',
        ending: { tone: 'neutro', title: 'Chá demais', message: 'O chá com leite tártaro é ótimo, mas o mercado não espera. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Я́блоки Алматы́',
    emoji: '🍎',
    summary: 'No Bazar Verde de Almaty, o Linu procura um presente de aniversário para a amiga Aigul.',
    cultural_context:
      'Almaty foi a capital do Cazaquistão até 1997, e seu nome está ligado a «алма», maçã em cazaque. As montanhas Tian Shan, em volta da cidade, são o berço da maçã selvagem que deu origem às maçãs que comemos hoje; no Cazaquistão, o russo é falado ao lado do cazaque.',
    start: 'start',
    glossary: [
      ['база́р', 'mercado, feira'],
      ['ей исполня́ется два́дцать пять лет', 'ela faz vinte e cinco anos'],
      ['мне нра́вится', 'eu gosto'],
      ['взве́шивать / взве́сить', 'pesar'],
      ['Попро́буйте!', 'Prove! (formal)'],
      ['Подожди́те!', 'Espere! (formal)'],
      ['до́мбра', 'dombra, alaúde cazaque de duas cordas'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Ли́ну в Алматы́, на Зелёном база́ре. Сего́дня его́ подру́ге Айгу́ль исполня́ется два́дцать пять лет, и ве́чером он идёт к ней на день рожде́ния. Ли́ну хо́чет купи́ть ей пода́рок, но ещё не реши́л како́й.',
        translation:
          'O Linu está em Almaty, no Bazar Verde. Hoje a amiga dele, Aigul, faz vinte e cinco anos, e à noite ele vai à festa de aniversário dela. O Linu quer comprar um presente para ela, mas ainda não decidiu qual.',
        choices: [
          { text: '«Пойду́ в ряд с фру́ктами.»', translation: '«Vou para a fileira das frutas.»', next: 'frukty' },
          { text: '«Посмотрю́ сувени́ры.»', translation: '«Vou dar uma olhada nos suvenires.»', next: 'suveniry' },
          {
            text: '«Ура́! Мне сего́дня два́дцать пять лет!»',
            translation: '«Oba! Hoje eu faço vinte e cinco anos!»',
            wrong: 'Quem faz aniversário é a Айгу́ль: «его́ подру́ге… исполня́ется два́дцать пять лет». O dativo (подру́ге, ей) mostra de quem é a idade.',
          },
        ],
      },
      frukty: {
        emoji: '🍎',
        text: 'Продаве́ц протя́гивает Ли́ну большо́е кра́сное я́блоко: «Попро́буйте! Э́то апо́рт, знамени́тый алмати́нский сорт.» Ли́ну про́бует, и я́блоко ему́ о́чень нра́вится.',
        translation:
          'O vendedor estende ao Linu uma maçã grande e vermelha: «Prove! É a aport, a famosa variedade de Almaty.» O Linu prova, e gosta muito da maçã.',
        choices: [
          {
            text: '«Како́е вку́сное! Ду́маю, Айгу́ль то́же понра́вится. Да́йте, пожа́луйста, два килогра́мма.»',
            translation: '«Que gostosa! Acho que a Aigul também vai gostar. Me dê dois quilos, por favor.»',
            next: 'vesy',
          },
        ],
      },
      vesy: {
        emoji: '⚖️',
        text: 'Продаве́ц кладёт я́блоки на весы́. «Подожди́те мину́тку, я ещё взве́шиваю, — говори́т он. — А пока́ возьми́те паке́т.»',
        translation: 'O vendedor coloca as maçãs na balança. «Espere um minutinho, ainda estou pesando — diz ele. — Enquanto isso, pegue uma sacola.»',
        choices: [
          { text: 'Ли́ну берёт паке́т и ждёт.', translation: 'O Linu pega a sacola e espera.', next: 'vzvesil' },
          {
            text: 'Ли́ну сра́зу пла́тит и ухо́дит без я́блок.',
            translation: 'O Linu paga na hora e vai embora sem as maçãs.',
            wrong: 'O vendedor disse «я ещё взве́шиваю»: o imperfectivo mostra uma ação em andamento. Ele ainda não terminou de pesar; é só esperar um pouco.',
          },
        ],
      },
      vzvesil: {
        emoji: '🛍️',
        text: '«Всё, взве́сил: ро́вно два килогра́мма!» Ли́ну пла́тит, и продаве́ц даёт ему́ ещё одно́ я́блоко. «А э́то вам, за улы́бку!»',
        translation: '«Pronto, pesei: dois quilos certinhos!» O Linu paga, e o vendedor lhe dá mais uma maçã. «E esta é para o senhor, pelo sorriso!»',
        choices: [{ text: '«Большо́е спаси́бо!» Ли́ну идёт к Айгу́ль.', translation: '«Muito obrigado!» O Linu vai para a casa da Aigul.', next: 'po_doroge' }],
      },
      po_doroge: {
        emoji: '🧒',
        text: 'По доро́ге, в па́рке, Ли́ну встреча́ет дете́й. Они́ ви́дят я́блоки и про́сят: «Да́йте нам, пожа́луйста, я́блоко!» Ли́ну ду́мает, что де́лать.',
        translation:
          'No caminho, no parque, o Linu encontra umas crianças. Elas veem as maçãs e pedem: «Dê uma maçã para a gente, por favor!» O Linu pensa no que fazer.',
        choices: [
          {
            text: 'Ли́ну даёт де́тям то я́блоко, кото́рое ему́ подари́л продаве́ц.',
            translation: 'O Linu dá às crianças a maçã que o vendedor lhe deu de presente.',
            next: 'final_yabloki',
          },
          { text: 'Ли́ну даёт ка́ждому ребёнку по я́блоку.', translation: 'O Linu dá uma maçã para cada criança.', next: 'final_pusto' },
        ],
      },
      final_yabloki: {
        emoji: '🎂',
        text: 'Айгу́ль открыва́ет паке́т и смеётся: «Апо́рт! Мой люби́мый сорт!» Ли́ну расска́зывает ей о база́ре, и они́ вме́сте едя́т я́блоки. «Спаси́бо тебе́ за пода́рок!» — говори́т Айгу́ль.',
        translation:
          'Aigul abre a sacola e ri: «Aport! Minha variedade favorita!» O Linu conta a ela sobre o bazar, e os dois comem maçãs juntos. «Obrigada pelo presente!» — diz Aigul.',
        ending: {
          tone: 'bom',
          title: 'Presente com gosto de Almaty',
          message: 'O Linu levou a maçã mais famosa de Almaty e ainda alegrou as crianças do parque.',
        },
      },
      final_pusto: {
        emoji: '🧺',
        text: 'Де́ти ра́дуются, но в паке́те остаю́тся то́лько два я́блока. Айгу́ль смо́трит в паке́т и смеётся. «Ничего́, Ли́ну! Гла́вное, что ты пришёл.»',
        translation:
          'As crianças ficam felizes, mas na sacola sobram só duas maçãs. Aigul olha dentro da sacola e ri. «Não tem problema, Linu! O importante é que você veio.»',
        ending: { tone: 'neutro', title: 'Sacola quase vazia', message: 'Generosidade é bonito, mas o presente da Aigul ficou pequenininho. Tente de novo!' },
      },
      suveniry: {
        emoji: '🪕',
        text: 'В сувени́рном ряду́ Ли́ну ви́дит до́мбру, каза́хский инструме́нт с двумя́ стру́нами. «Возьми́те, сыгра́йте!» — предлага́ет продаве́ц. Ли́ну до́лго игра́ет, и звук ему́ о́чень нра́вится.',
        translation:
          'Na fileira de suvenires, o Linu vê uma dombra, instrumento cazaque de duas cordas. «Pegue, toque!» — oferece o vendedor. O Linu toca por um bom tempo e adora o som.',
        choices: [
          { text: 'Ли́ну покупа́ет до́мбру для Айгу́ль.', translation: 'O Linu compra a dombra para a Aigul.', next: 'final_dombra' },
          {
            text: '«Мо́жет быть, лу́чше фру́кты…» Ли́ну идёт в ряд с фру́ктами.',
            translation: '«Talvez frutas sejam melhor…» O Linu vai para a fileira das frutas.',
            next: 'frukty',
          },
        ],
      },
      final_dombra: {
        emoji: '🎶',
        text: 'Айгу́ль берёт до́мбру и сра́зу начина́ет игра́ть: оказа́лось, в де́тстве она́ учи́лась в музыка́льной шко́ле! Все го́сти пою́т и танцу́ют. «Тако́го пода́рка мне ещё никто́ не дари́л!» — говори́т она́ Ли́ну.',
        translation:
          'Aigul pega a dombra e começa a tocar na hora: descobriu-se que na infância ela estudou numa escola de música! Todos os convidados cantam e dançam. «Ninguém nunca me deu um presente assim!» — diz ela ao Linu.',
        ending: { tone: 'bom', title: 'Festa com dombra', message: 'O Linu deu à Aigul o instrumento mais tradicional do Cazaquistão, e a festa virou show.' },
      },
    },
  },
  {
    id: 'ru-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'По́езд до Ирку́тска',
    emoji: '🚂',
    summary: 'O Linu atravessa a Rússia pela Transiberiana, de Moscou até Irkutsk, perto do lago Baikal.',
    cultural_context:
      'A Transiberiana, de Moscou a Vladivostok, tem cerca de 9.300 km e é a ferrovia mais longa do mundo. O Baikal, perto de Irkutsk, é o lago mais profundo do planeta (mais de 1.600 m).',
    start: 'start',
    glossary: [
      ['по́езд', 'trem'],
      ['ваго́н', 'vagão'],
      ['проводни́ца', 'comissária do vagão'],
      ['е́хать / е́здить', 'ir de veículo: agora, numa direção / habitualmente, ida e volta'],
      ['кипято́к', 'água fervente'],
      ['перро́н', 'plataforma'],
      ['посёлок', 'vila, povoado'],
      ['прозра́чный', 'transparente'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'Ли́ну прие́хал на Яросла́вский вокза́л в Москве́. Отсю́да по́езд идёт до Ирку́тска бо́льше трёх дней. Ли́ну никогда́ ещё не е́здил на по́езде так далеко́.',
        translation:
          'Linu chegou à estação Iaroslavski, em Moscou. Daqui o trem leva mais de três dias até Irkutsk. Linu nunca tinha viajado de trem para tão longe.',
        choices: [
          { text: 'Сра́зу войти́ в ваго́н.', translation: 'Entrar logo no vagão.', next: 'vagon' },
          { text: 'Сходи́ть в магази́н за едо́й.', translation: 'Dar um pulo na loja para comprar comida.', next: 'eda' },
        ],
      },
      eda: {
        emoji: '🛒',
        text: 'Ли́ну покупа́ет хлеб, сыр и я́блоки. Пото́м он смо́трит на часы́: до отправле́ния оста́лось пять мину́т! Ря́дом есть кафе́, где па́хнет ко́фе.',
        translation: 'Linu compra pão, queijo e maçãs. Depois olha o relógio: faltam cinco minutos para a partida! Ao lado há um café com cheiro de café.',
        choices: [
          { text: 'Бежа́ть обра́тно на платфо́рму.', translation: 'Correr de volta para a plataforma.', next: 'vagon' },
          { text: 'Зайти́ в кафе́ за ко́фе.', translation: 'Entrar no café para tomar um café.', next: 'final_opozdal' },
        ],
      },
      final_opozdal: {
        emoji: '⏰',
        text: 'Когда́ Ли́ну выхо́дит из кафе́, по́езд уже́ ушёл. Он идёт в ка́ссу и меня́ет биле́т на за́втра. Ну что ж, тепе́рь у него́ есть ещё оди́н день в Москве́!',
        translation:
          'Quando Linu sai do café, o trem já partiu. Ele vai à bilheteria e troca a passagem para amanhã. Bom, agora ele tem mais um dia em Moscou!',
        ending: { tone: 'neutro', title: 'Trem perdido', message: 'Um café custou uma viagem. Amanhã o Linu tenta de novo — e desta vez chega cedo.' },
      },
      vagon: {
        emoji: '🛏️',
        text: 'В ваго́не Ли́ну встреча́ет проводни́ца. «Я рабо́таю проводни́цей уже́ два́дцать лет, — говори́т она́. — Кипято́к в ваго́не есть всегда́, так что чай мо́жно пить хоть це́лый день!»',
        translation:
          'No vagão, a comissária recebe o Linu. «Trabalho como comissária há vinte anos — diz ela. — Sempre há água fervente no vagão, então dá para tomar chá o dia inteiro!»',
        choices: [
          { text: 'Пойти́ в купе́ и познако́миться с сосе́дями.', translation: 'Ir para a cabine e conhecer os vizinhos.', next: 'kupe' },
          {
            text: 'Спроси́ть, где на ста́нции мо́жно купи́ть горя́чую во́ду.',
            translation: 'Perguntar onde comprar água quente na estação.',
            wrong: 'A comissária acabou de dizer que há água fervente (кипято́к) sempre no próprio vagão. Não é preciso procurar na estação.',
          },
        ],
      },
      kupe: {
        emoji: '👵',
        text: 'В купе́ Ли́ну е́дет с ба́бушкой и её вну́ком Ми́шей. Ба́бушка ка́ждое ле́то е́здит к сестре́ в Ирку́тск, а Ми́ша е́дет туда́ в пе́рвый раз. Он хо́чет стать гео́логом, как его́ де́душка.',
        translation:
          'Na cabine, Linu viaja com uma avó e o neto dela, Micha. Todo verão a avó vai visitar a irmã em Irkutsk, e o Micha vai para lá pela primeira vez. Ele quer ser geólogo, como o avô.',
        choices: [
          { text: 'Пить чай с сосе́дями и смотре́ть в окно́.', translation: 'Tomar chá com os vizinhos e olhar pela janela.', next: 'noch' },
          {
            text: 'Сказа́ть ба́бушке: «Вы, наве́рное, е́дете в Сиби́рь в пе́рвый раз?»',
            translation: 'Dizer à avó: «A senhora deve estar indo à Sibéria pela primeira vez?»',
            wrong: 'A avó «е́здит» a Irkutsk todo verão: o verbo е́здить indica uma viagem habitual. Quem vai (е́дет) pela primeira vez é o Micha.',
          },
        ],
      },
      noch: {
        emoji: '🌲',
        text: 'Ночь. По́езд е́дет че́рез тайгу́, и на ста́нциях лю́ди выхо́дят на перро́н. На большо́й ста́нции по́езд стои́т два́дцать мину́т. Проводни́ца предупрежда́ет: «Мо́жно вы́йти, но далеко́ не уходи́те!»',
        translation:
          'Noite. O trem atravessa a taiga, e nas estações as pessoas descem para a plataforma. Numa estação grande o trem para vinte minutos. A comissária avisa: «Podem descer, mas não se afastem!»',
        choices: [
          { text: 'Вы́йти на перро́н и купи́ть пирожки́.', translation: 'Descer na plataforma e comprar pastéis.', next: 'peron' },
          { text: 'Оста́ться в ваго́не и лечь спать.', translation: 'Ficar no vagão e ir dormir.', next: 'irkutsk' },
          {
            text: 'Уйти́ на час погуля́ть по го́роду.',
            translation: 'Sair para passear uma hora pela cidade.',
            wrong:
              'O trem para só vinte minutos, e a comissária disse «далеко́ не уходи́те»: não se afastem. Com o prefixo у-, уйти́ é ir embora — e o trem partiria sem o Linu.',
          },
        ],
      },
      peron: {
        emoji: '🥟',
        text: 'На перро́не ме́стные жи́тели продаю́т пирожки́ с капу́стой и варёную карто́шку. Ли́ну покупа́ет пирожки́ для всего́ купе́. Вдруг он слы́шит гудо́к и бы́стро вхо́дит в ваго́н. Ми́ша смеётся: «Успе́л!»',
        translation:
          'Na plataforma, moradores vendem pastéis de repolho e batata cozida. Linu compra pastéis para a cabine inteira. De repente ouve o apito e entra depressa no vagão. Micha ri: «Chegou a tempo!»',
        choices: [{ text: 'Угости́ть сосе́дей пирожка́ми.', translation: 'Oferecer os pastéis aos vizinhos.', next: 'irkutsk' }],
      },
      irkutsk: {
        emoji: '🏙️',
        text: 'Наконе́ц по́езд прихо́дит в Ирку́тск. Ли́ну выхо́дит из ваго́на вме́сте с Ми́шей и ба́бушкой. Ми́ша говори́т: «Мы е́дем на Байка́л, в посёлок Листвя́нка. Пое́хали с на́ми!»',
        translation:
          'Finalmente o trem chega a Irkutsk. Linu desce do vagão junto com o Micha e a avó. Micha diz: «Nós vamos ao Baikal, à vila de Listvianka. Vem com a gente!»',
        choices: [
          { text: 'Пое́хать с ни́ми на Байка́л.', translation: 'Ir com eles ao Baikal.', next: 'final_baikal' },
          { text: 'Поблагодари́ть и пойти́ гуля́ть по Ирку́тску.', translation: 'Agradecer e ir passear por Irkutsk.', next: 'final_gorod' },
        ],
      },
      final_baikal: {
        emoji: '🏞️',
        text: 'Че́рез час они́ приезжа́ют в Листвя́нку. Вода́ в Байка́ле така́я прозра́чная, что ви́дно ка́мни на дне. Ли́ну про́бует копчёного о́муля — ры́бу, кото́рая живёт то́лько в Байка́ле.',
        translation:
          'Uma hora depois eles chegam a Listvianka. A água do Baikal é tão transparente que dá para ver as pedras no fundo. Linu prova omul defumado, um peixe que só vive no Baikal.',
        ending: {
          tone: 'bom',
          title: 'À beira do Baikal',
          message: 'Mais de cinco mil quilômetros de trilhos, novos amigos e o lago mais profundo do mundo. Que viagem!',
        },
      },
      final_gorod: {
        emoji: '🏘️',
        text: 'Ли́ну гуля́ет по ста́рому це́нтру Ирку́тска. Он хо́дит от до́ма к до́му и смо́трит на деревя́нные дома́ с резны́ми о́кнами. Байка́л подождёт до сле́дующего ра́за.',
        translation:
          'Linu passeia pelo centro antigo de Irkutsk. Ele anda de casa em casa olhando as casas de madeira com janelas entalhadas. O Baikal fica para a próxima vez.',
        ending: {
          tone: 'neutro',
          title: 'A Irkutsk de madeira',
          message: 'As casas entalhadas são lindas, mas o Baikal ficou a uma hora dali. Quem sabe na próxima viagem?',
        },
      },
    },
  },
  {
    id: 'ru-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Оди́н день во Владивосто́ке',
    emoji: '🌉',
    summary: 'No fim da Transiberiana, o Linu tem um só dia para conhecer Vladivostok.',
    cultural_context:
      'Vladivostok, à beira do Mar do Japão, é o ponto final da Transiberiana. A Ponte Russki, inaugurada em 2012, tinha na época o maior vão estaiado do mundo: 1.104 m.',
    start: 'start',
    glossary: [
      ['бу́хта', 'baía'],
      ['на́бережная', 'orla, calçadão'],
      ['е́сли бы…, я бы…', 'se…, eu (faria)…'],
      ['не могли́ бы вы…', 'o senhor poderia…'],
      ['спра́шивать, ли…', 'perguntar se…'],
      ['гребешки́', 'vieiras'],
      ['о́стров', 'ilha'],
      ['мост', 'ponte'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Ли́ну во Владивосто́ке. Здесь, на берегу́ Япо́нского мо́ря, конча́ется Транссиби́рская магистра́ль. Го́род стои́т на холма́х вокру́г бу́хты. Ли́ну ду́мает: «Е́сли бы у меня́ бы́ло бо́льше вре́мени, я бы оста́лся здесь на ме́сяц!»',
        translation:
          'Linu está em Vladivostok. Aqui, à beira do Mar do Japão, termina a Transiberiana. A cidade fica sobre morros em volta de uma baía. Linu pensa: «Se eu tivesse mais tempo, ficaria aqui um mês!»',
        choices: [
          { text: 'Спроси́ть сове́та в гости́нице.', translation: 'Pedir conselho no hotel.', next: 'gostinica' },
          { text: 'Сра́зу пойти́ на на́бережную.', translation: 'Ir direto para a orla.', next: 'naberezhnaya' },
        ],
      },
      gostinica: {
        emoji: '🛎️',
        text: 'Ли́ну подхо́дит к администра́тору: «Извини́те, не могли́ бы вы посове́товать, что посмотре́ть за оди́н день?» Же́нщина отвеча́ет, что обяза́тельно на́до уви́деть Ру́сский мост. Ещё она́ говори́т, что океана́риум нахо́дится на о́строве Ру́сский, за мосто́м.',
        translation:
          'Linu se aproxima da recepcionista: «Com licença, a senhora poderia me aconselhar o que ver em um dia?» A mulher responde que é preciso ver a Ponte Russki sem falta. Ela diz também que o oceanário fica na ilha Russki, do outro lado da ponte.',
        choices: [
          { text: 'Пое́хать на о́стров Ру́сский.', translation: 'Ir para a ilha Russki.', next: 'most' },
          {
            text: 'Иска́ть океана́риум в це́нтре го́рода.',
            translation: 'Procurar o oceanário no centro da cidade.',
            wrong: 'A recepcionista disse que o oceanário fica na ilha Russki, do outro lado da ponte (за мосто́м), e não no centro.',
          },
        ],
      },
      naberezhnaya: {
        emoji: '🦪',
        text: 'На на́бережной ду́ет све́жий ве́тер. Рыба́к, кото́рый продаёт морепроду́кты, спра́шивает Ли́ну, не хо́чет ли он попро́бовать гребешко́в. Ли́ну ещё никогда́ их не про́бовал.',
        translation: 'Na orla sopra um vento fresco. Um pescador que vende frutos do mar pergunta ao Linu se ele não quer provar vieiras. Linu nunca provou.',
        choices: [
          { text: 'Отве́тить: «С удово́льствием! Я бы попро́бовал».', translation: 'Responder: «Com prazer! Eu provaria».', next: 'grebeshki' },
          {
            text: 'Отве́тить: «Нет, спаси́бо, я не уме́ю лови́ть ры́бу».',
            translation: 'Responder: «Não, obrigado, eu não sei pescar».',
            wrong:
              'O pescador não convidou o Linu para pescar. Ele perguntou se o Linu queria provar vieiras: «не хо́чет ли он попро́бовать» (se ele não quer provar).',
          },
        ],
      },
      grebeshki: {
        emoji: '🎣',
        text: 'Гребешки́ о́чень вку́сные. Рыба́к расска́зывает, что зимо́й лю́ди выхо́дят на лёд зали́ва и ло́вят ры́бу пря́мо там. Пото́м он спра́шивает, ви́дел ли Ли́ну Ру́сский мост.',
        translation:
          'As vieiras são muito gostosas. O pescador conta que, no inverno, as pessoas andam sobre o gelo do golfo e pescam ali mesmo. Depois ele pergunta se o Linu já viu a Ponte Russki.',
        choices: [
          {
            text: 'Сказа́ть, что ещё не ви́дел, и попроси́ть показа́ть доро́гу.',
            translation: 'Dizer que ainda não viu e pedir que mostre o caminho.',
            next: 'most',
          },
        ],
      },
      most: {
        emoji: '🌉',
        text: 'Ли́ну е́дет на авто́бусе по Ру́сскому мосту́. Мост тако́й дли́нный и высо́кий, что у Ли́ну кру́жится голова́. Сосе́дка говори́т, что, когда́ мост постро́или, его́ пролёт был са́мым дли́нным в ми́ре среди́ ва́нтовых мосто́в.',
        translation:
          'Linu atravessa a Ponte Russki de ônibus. A ponte é tão longa e alta que o Linu fica tonto. A vizinha de banco diz que, quando a ponte foi construída, o vão dela era o maior do mundo entre as pontes estaiadas.',
        choices: [
          { text: 'Пойти́ в океана́риум.', translation: 'Ir ao oceanário.', next: 'okeanarium' },
          { text: 'Погуля́ть по бе́регу о́строва.', translation: 'Passear pela costa da ilha.', next: 'final_bereg' },
        ],
      },
      okeanarium: {
        emoji: '🦭',
        text: 'В океана́риуме Ли́ну смо́трит на тюле́ней, ска́тов и меду́з. Вдруг к нему́ подхо́дит сотру́дница и ти́хо спра́шивает, не мог бы он помо́чь. Де́ти из шко́льной гру́ппы хотя́т сфотографи́роваться с настоя́щим пингви́ном!',
        translation:
          'No oceanário, Linu observa focas, raias e águas-vivas. De repente uma funcionária se aproxima e pergunta baixinho se ele poderia ajudar. As crianças de uma turma da escola querem tirar foto com um pinguim de verdade!',
        choices: [
          { text: 'Согласи́ться и улыбну́ться для фо́то.', translation: 'Aceitar e sorrir para a foto.', next: 'final_foto' },
          {
            text: 'Отказа́ться, потому́ что он не уме́ет фотографи́ровать.',
            translation: 'Recusar, porque ele não sabe fotografar.',
            wrong: 'Ninguém pediu que o Linu tirasse fotos. As crianças querem sair na foto COM ele: «сфотографи́роваться с пингви́ном».',
          },
        ],
      },
      final_foto: {
        emoji: '📸',
        text: 'Де́ти по о́череди фотографи́руются с Ли́ну, а сотру́дница да́рит ему́ пиро́жное. Ве́чером Ли́ну пи́шет дру́гу, что Владивосто́к — оди́н из са́мых краси́вых городо́в, кото́рые он ви́дел. Он добавля́ет, что хоте́л бы верну́ться сюда́ ле́том.',
        translation:
          'As crianças tiram foto com o Linu, uma de cada vez, e a funcionária lhe dá um doce. À noite, Linu escreve a um amigo que Vladivostok é uma das cidades mais bonitas que já viu. Ele acrescenta que gostaria de voltar no verão.',
        ending: {
          tone: 'bom',
          title: 'Estrela do oceanário',
          message: 'Pedidos educados, respostas educadas e um pinguim famoso no fim do mundo. Vladivostok conquistou o Linu.',
        },
      },
      final_bereg: {
        emoji: '🪨',
        text: 'На берегу́ о́строва ти́хо. Ли́ну сиди́т на камня́х и смо́трит на Япо́нское мо́ре. Он ду́мает: «Е́сли бы я жил здесь, я бы приходи́л сюда́ ка́ждый ве́чер».',
        translation:
          'Na costa da ilha está tudo em silêncio. Linu se senta nas pedras e olha o Mar do Japão. Ele pensa: «Se eu morasse aqui, viria para cá toda noite».',
        ending: {
          tone: 'neutro',
          title: 'Silêncio no fim da linha',
          message: 'O oceanário ficou para outro dia, mas o Linu ganhou um fim de tarde tranquilo à beira do Pacífico.',
        },
      },
    },
  },
  {
    id: 'ru-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Се́верное сия́ние над Му́рманском',
    emoji: '🌌',
    summary: 'Em plena noite polar, o Linu vai a Murmansk atrás da aurora boreal.',
    cultural_context:
      'Murmansk é a maior cidade do mundo ao norte do Círculo Polar Ártico; ali a noite polar dura cerca de 40 dias. No porto fica o quebra-gelo Lenin (1959), primeiro navio de superfície com propulsão nuclear, hoje museu.',
    start: 'start',
    glossary: [
      ['се́верное сия́ние', 'aurora boreal'],
      ['поля́рная ночь', 'noite polar'],
      ['ледоко́л', 'quebra-gelo'],
      ['кото́рый', 'que, o qual'],
      ['пять откры́ток', 'cinco cartões-postais'],
      ['два значка́', 'dois bottons'],
      ['ту́ндра', 'tundra'],
      ['звёзды', 'estrelas'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Ли́ну прие́хал в Му́рманск — са́мый большо́й го́род ми́ра за Поля́рным кру́гом. Зимо́й здесь о́коло сорока́ дней не восхо́дит со́лнце: э́то поля́рная ночь. Ли́ну мечта́ет уви́деть се́верное сия́ние.',
        translation:
          'Linu chegou a Murmansk, a maior cidade do mundo além do Círculo Polar Ártico. No inverno, o sol não nasce aqui por cerca de quarenta dias: é a noite polar. Linu sonha ver a aurora boreal.',
        choices: [
          { text: 'Снача́ла посмотре́ть го́род.', translation: 'Primeiro conhecer a cidade.', next: 'gorod' },
          { text: 'Сра́зу пойти́ в тураге́нтство.', translation: 'Ir direto à agência de turismo.', next: 'ekskursia' },
        ],
      },
      gorod: {
        emoji: '🚢',
        text: 'В порту́ стои́т ледоко́л «Ле́нин» — пе́рвое в ми́ре надво́дное су́дно с а́томной устано́вкой. Сейча́с э́то музе́й, кото́рый ка́ждый год посеща́ют ты́сячи тури́стов. Гид расска́зывает, что ледоко́л рабо́тал в А́рктике три́дцать лет.',
        translation:
          'No porto está o quebra-gelo Lenin, o primeiro navio de superfície do mundo com propulsão nuclear. Hoje é um museu que milhares de turistas visitam todo ano. O guia conta que o quebra-gelo trabalhou no Ártico por trinta anos.',
        choices: [
          { text: 'Пройти́ по кораблю́ с ги́дом.', translation: 'Percorrer o navio com o guia.', next: 'muzej' },
          {
            text: 'Купи́ть биле́т, что́бы отпра́виться на ледоко́ле в А́рктику.',
            translation: 'Comprar passagem para ir ao Ártico no quebra-gelo.',
            wrong: 'O quebra-gelo hoje é um museu (музе́й, кото́рый посеща́ют тури́сты) e trabalhou no Ártico no passado. Ele não navega mais.',
          },
        ],
      },
      muzej: {
        emoji: '🧭',
        text: 'Гид пока́зывает ка́юты, в кото́рых жи́ли моряки́, и ру́бку, из кото́рой капита́н управля́л корабле́м. На стена́х вися́т фотогра́фии льдов и бе́лых медве́дей. В магази́не музе́я Ли́ну покупа́ет пять откры́ток и два значка́ для друзе́й.',
        translation:
          'O guia mostra as cabines em que os marinheiros moravam e a ponte de comando, de onde o capitão dirigia o navio. Nas paredes há fotos de gelo e de ursos-polares. Na loja do museu, Linu compra cinco cartões-postais e dois bottons para os amigos.',
        choices: [{ text: 'Пойти́ в тураге́нтство.', translation: 'Ir à agência de turismo.', next: 'ekskursia' }],
      },
      ekskursia: {
        emoji: '🚌',
        text: 'В тураге́нтстве Ли́ну объясня́ют: «Авто́бус отправля́ется в де́вять часо́в ве́чера. В гру́ппе бу́дет двена́дцать тури́стов». Гид предупрежда́ет, что сия́ние мо́жно и не уви́деть: всё зави́сит от пого́ды.',
        translation:
          'Na agência explicam ao Linu: «O ônibus sai às nove da noite. O grupo terá doze turistas». O guia avisa que é possível não ver a aurora: tudo depende do tempo.',
        choices: [
          { text: 'Наде́ть две па́ры тёплых носко́в и пое́хать.', translation: 'Calçar dois pares de meias quentes e ir.', next: 'tundra' },
          {
            text: 'Прийти́ к авто́бусу в де́вять утра́.',
            translation: 'Chegar ao ônibus às nove da manhã.',
            wrong: 'O ônibus sai às nove da NOITE: «в де́вять часо́в ве́чера». E a aurora só se vê no escuro!',
          },
        ],
      },
      tundra: {
        emoji: '🌠',
        text: 'Авто́бус е́дет два часа́ по тёмной доро́ге. Тури́сты выхо́дят в ту́ндре, где нет ни фонаре́й, ни домо́в. Не́бо чи́стое, и на нём ты́сячи звёзд.',
        translation:
          'O ônibus segue duas horas por uma estrada escura. Os turistas descem na tundra, onde não há postes nem casas. O céu está limpo, com milhares de estrelas.',
        choices: [
          { text: 'Ждать сия́ния вме́сте с други́ми тури́стами.', translation: 'Esperar a aurora junto com os outros turistas.', next: 'zhdat' },
          { text: 'Верну́ться в тёплый авто́бус.', translation: 'Voltar para o ônibus quentinho.', next: 'final_avtobus' },
        ],
      },
      zhdat: {
        emoji: '🍵',
        text: 'Прохо́дит час. Моро́з — два́дцать гра́дусов, и гид раздаёт всем горя́чий чай. Вдруг над ту́ндрой появля́ется то́нкая зелёная полоса́, пото́м ещё две.',
        translation:
          'Passa uma hora. Faz vinte graus abaixo de zero, e o guia distribui chá quente para todos. De repente surge sobre a tundra uma faixa verde fina, depois mais duas.',
        choices: [{ text: 'Смотре́ть на не́бо и молча́ть.', translation: 'Olhar o céu em silêncio.', next: 'final_siyanie' }],
      },
      final_siyanie: {
        emoji: '🌌',
        text: 'Зелёные и фиоле́товые по́лосы танцу́ют над ту́ндрой. Тури́сты молча́т, никто́ не хо́чет говори́ть. Ли́ну ду́мает, что э́то са́мая краси́вая ночь, кото́рую он когда́-ли́бо ви́дел.',
        translation:
          'Faixas verdes e roxas dançam sobre a tundra. Os turistas ficam calados, ninguém quer falar. Linu pensa que esta é a noite mais bonita que ele já viu.',
        ending: { tone: 'bom', title: 'O céu dançou', message: 'Paciência, meias quentes e um céu limpo: o Linu viu a aurora boreal!' },
      },
      final_avtobus: {
        emoji: '😴',
        text: 'В авто́бусе тепло́, и Ли́ну засыпа́ет. Когда́ он просыпа́ется, тури́сты пока́зывают ему́ деся́тки фотогра́фий зелёного не́ба. Ли́ну всё проспа́л, но реша́ет прие́хать сюда́ ещё раз.',
        translation:
          'No ônibus está quentinho, e o Linu adormece. Quando acorda, os turistas lhe mostram dezenas de fotos do céu verde. Linu perdeu tudo dormindo, mas decide voltar outra vez.',
        ending: {
          tone: 'neutro',
          title: 'A aurora das fotos',
          message: 'O Linu viu a aurora… só no celular dos outros. Na próxima, ele fica lá fora com o chá quente.',
        },
      },
    },
  },
  {
    id: 'ru-h9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Го́род учёных',
    emoji: '🔬',
    summary: 'Em Novosibirsk, o Linu visita uma amiga cientista no Akademgorodok, a cidade da ciência no meio da floresta.',
    cultural_context:
      'O Akademgorodok, perto de Novosibirsk, foi fundado em 1957 como cidade científica da Seção Siberiana da Academia de Ciências. Ali há um famoso monumento ao camundongo de laboratório tricotando o DNA, inaugurado em 2013.',
    start: 'start',
    glossary: [
      ['учёный', 'cientista'],
      ['постро́енный', 'construído'],
      ['рабо́тающий', 'que trabalha'],
      ['одна́ко', 'porém'],
      ['поэ́тому', 'por isso'],
      ['хотя́', 'embora'],
      ['ручно́й', 'manso'],
      ['водохрани́лище', 'represa, reservatório'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Ли́ну прие́хал в Новосиби́рск, тре́тий по величине́ го́род Росси́и. Одна́ко бо́льше всего́ его́ интересу́ет Академгородо́к — го́род учёных, постро́енный в конце́ пятидеся́тых годо́в пря́мо в лесу́. Там его́ ждёт подру́га Ве́ра, рабо́тающая в нау́чном институ́те.',
        translation:
          'Linu chegou a Novosibirsk, a terceira maior cidade da Rússia. Porém, o que mais lhe interessa é o Akademgorodok, uma cidade de cientistas construída no fim dos anos cinquenta bem no meio da floresta. Lá o espera sua amiga Vera, que trabalha num instituto científico.',
        choices: [
          { text: 'Сра́зу пое́хать к Ве́ре на авто́бусе.', translation: 'Ir direto de ônibus até a Vera.', next: 'les' },
          { text: 'Снача́ла посмотре́ть теа́тр о́перы и бале́та.', translation: 'Primeiro ver o teatro de ópera e balé.', next: 'teatr' },
        ],
      },
      teatr: {
        emoji: '🎭',
        text: 'Новосиби́рский теа́тр о́перы и бале́та — са́мое большо́е театра́льное зда́ние в Росси́и, поэ́тому Ли́ну хоте́л его́ уви́деть. Хотя́ биле́тов на вече́рний спекта́кль уже́ нет, он попада́ет на экску́рсию по зда́нию. Под огро́мным ку́полом Ли́ну чу́вствует себя́ совсе́м ма́леньким.',
        translation:
          'O Teatro de Ópera e Balé de Novosibirsk é o maior edifício teatral da Rússia, por isso o Linu queria vê-lo. Embora não haja mais ingressos para o espetáculo da noite, ele consegue entrar numa visita guiada pelo prédio. Sob a enorme cúpula, o Linu se sente bem pequenininho.',
        choices: [{ text: 'На сле́дующее у́тро пое́хать в Академгородо́к.', translation: 'Na manhã seguinte, ir ao Akademgorodok.', next: 'les' }],
      },
      les: {
        emoji: '🐿️',
        text: 'Ве́ра встреча́ет Ли́ну на остано́вке, и они́ иду́т по ле́су. К ним сра́зу подбега́ют бе́лки, совсе́м не боя́щиеся люде́й. Ве́ра объясня́ет, что бе́лки здесь ручны́е, поэ́тому гуля́ющие ча́сто но́сят с собо́й оре́хи.',
        translation:
          'Vera encontra o Linu no ponto, e eles caminham pela floresta. Logo chegam correndo esquilos que não têm nenhum medo de gente. Vera explica que os esquilos aqui são mansos; por isso, quem passeia costuma levar nozes.',
        choices: [
          { text: 'Угости́ть бе́лку оре́хом.', translation: 'Dar uma noz a um esquilo.', next: 'belka' },
          { text: 'Сра́зу пойти́ в институ́т.', translation: 'Ir direto ao instituto.', next: 'institut' },
          {
            text: 'Убежа́ть: бе́лки здесь ди́кие и опа́сные.',
            translation: 'Fugir: os esquilos aqui são selvagens e perigosos.',
            wrong: 'Vera disse o contrário: os esquilos são mansos (ручны́е) e «не боя́щиеся люде́й», isto é, não têm medo das pessoas.',
          },
        ],
      },
      belka: {
        emoji: '🌰',
        text: 'Бе́лка берёт оре́х пря́мо из ла́пы Ли́ну и убега́ет на сосну́. Ве́ра смеётся: «Тепе́рь ты настоя́щий жи́тель Академгородка́!» Пото́м она́ ведёт его́ к па́мятнику, о кото́ром Ли́ну давно́ слы́шал.',
        translation:
          'O esquilo pega a noz direto da nadadeira do Linu e sobe correndo num pinheiro. Vera ri: «Agora você é um verdadeiro morador do Akademgorodok!» Depois ela o leva a um monumento de que o Linu ouvia falar havia tempos.',
        choices: [{ text: 'Пойти́ к па́мятнику.', translation: 'Ir até o monumento.', next: 'mysh' }],
      },
      mysh: {
        emoji: '🐭',
        text: 'Э́то па́мятник лабора́торной мы́ши, вя́жущей двойну́ю спира́ль ДНК. Ве́ра расска́зывает, что па́мятник, откры́тый в 2013 году́, посвящён мыша́м, по́мощь кото́рых так важна́ для нау́ки. Мышь в пенсне́, сидя́щая на ка́мне, вы́глядит о́чень у́мной.',
        translation:
          'É o monumento ao camundongo de laboratório tricotando a dupla hélice do DNA. Vera conta que o monumento, inaugurado em 2013, é dedicado aos camundongos, cuja ajuda é tão importante para a ciência. O camundongo de pincenê, sentado sobre uma pedra, parece muito inteligente.',
        choices: [{ text: 'Пойти́ с Ве́рой в её лаборато́рию.', translation: 'Ir com a Vera ao laboratório dela.', next: 'institut' }],
      },
      institut: {
        emoji: '🌾',
        text: 'В лаборато́рии, где рабо́тает Ве́ра, изуча́ют расте́ния, расту́щие в Сиби́ри. Она́ пока́зывает Ли́ну пшени́цу, вы́веденную специа́льно для холо́дного кли́мата. Ве́чером в институ́те бу́дет семина́р, одна́ко Ве́ра предлага́ет пойти́ на О́бское мо́ре.',
        translation:
          'No laboratório onde a Vera trabalha, estudam-se plantas que crescem na Sibéria. Ela mostra ao Linu um trigo desenvolvido especialmente para o clima frio. À noite haverá um seminário no instituto; porém, a Vera sugere ir ao Mar de Ob.',
        choices: [
          {
            text: 'Оста́ться на семина́р, хотя́ он бу́дет о́чень сло́жным.',
            translation: 'Ficar para o seminário, embora vá ser muito difícil.',
            next: 'final_seminar',
          },
          { text: 'Пойти́ с Ве́рой на мо́ре смотре́ть зака́т.', translation: 'Ir com a Vera ver o pôr do sol no mar.', next: 'final_more' },
          {
            text: 'Спроси́ть, почему́ здесь изуча́ют то́лько тропи́ческие расте́ния.',
            translation: 'Perguntar por que aqui só se estudam plantas tropicais.',
            wrong: 'O texto diz que estudam plantas «расту́щие в Сиби́ри» (que crescem na Sibéria) e um trigo para clima frio, não plantas tropicais.',
          },
        ],
      },
      final_seminar: {
        emoji: '🧬',
        text: 'Семина́р дли́тся три часа́. Ли́ну понима́ет не всё, одна́ко запомина́ет мно́го но́вых слов. Осо́бенно его́ удивля́ет сло́во «бело́к»: здесь э́то не бе́лка, а протеи́н!',
        translation:
          'O seminário dura três horas. Linu não entende tudo, porém guarda muitas palavras novas. O que mais o surpreende é a palavra «бело́к»: aqui não é esquilo, e sim proteína!',
        ending: {
          tone: 'neutro',
          title: 'Esquilo ou proteína?',
          message: 'Três horas de ciência em russo cansam, mas o Linu saiu com vocabulário novo — e uma boa piada sobre esquilos.',
        },
      },
      final_more: {
        emoji: '🌅',
        text: 'О́бское мо́ре — на са́мом де́ле э́то огро́мное водохрани́лище, со́зданное на реке́ Обь. Ли́ну и Ве́ра сидя́т на песке́ и смо́трят на со́лнце, садя́щееся в во́ду. Ли́ну ду́мает, что го́род, постро́енный для нау́ки, оказа́лся ещё и о́чень краси́вым.',
        translation:
          'O Mar de Ob é, na verdade, uma enorme represa criada no rio Ob. Linu e Vera se sentam na areia e olham o sol se pondo na água. Linu pensa que a cidade construída para a ciência acabou sendo também muito bonita.',
        ending: {
          tone: 'bom',
          title: 'Pôr do sol na Sibéria',
          message: 'Esquilos mansos, um camundongo tricoteiro e um pôr do sol à beira do Mar de Ob. A cidade da ciência encantou o Linu.',
        },
      },
    },
  },
  {
    id: 'ru-h10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Письмо́ из Со́чи',
    emoji: '🌴',
    summary: 'Em Sochi, entre palmeiras e montanhas nevadas, o Linu se candidata a voluntário num arboreto.',
    cultural_context:
      'Sochi, à beira do Mar Negro, sediou os Jogos Olímpicos de Inverno de 2014. Nos arredores cultiva-se chá há mais de cem anos, numa das plantações de chá mais ao norte do mundo.',
    start: 'start',
    glossary: [
      ['вы́йдя', 'tendo saído'],
      ['гуля́я', 'passeando'],
      ['заявле́ние', 'requerimento, inscrição'],
      ['принима́ются', 'são aceitos'],
      ['рассмо́трено', 'foi analisado'],
      ['уважа́емый', 'prezado'],
      ['име́я при себе́', 'levando consigo'],
      ['дендра́рий', 'arboreto'],
    ],
    nodes: {
      start: {
        emoji: '✈️',
        text: 'Ли́ну прилете́л в Со́чи, где в 2014 году́ проходи́ли зи́мние Олимпи́йские и́гры. Вы́йдя из аэропо́рта, он сра́зу почу́вствовал тёплый вла́жный во́здух. Со́чи — оди́н из немно́гих городо́в Росси́и с субтропи́ческим кли́матом: здесь расту́т па́льмы, а в гора́х зимо́й лежи́т снег.',
        translation:
          'Linu chegou de avião a Sochi, onde foram realizados os Jogos Olímpicos de Inverno de 2014. Ao sair do aeroporto, logo sentiu o ar quente e úmido. Sochi é uma das poucas cidades da Rússia com clima subtropical: aqui crescem palmeiras, e nas montanhas há neve no inverno.',
        choices: [
          { text: 'Пойти́ в дендра́рий.', translation: 'Ir ao arboreto.', next: 'dendrarij' },
          { text: 'Пое́хать в го́ры, в Кра́сную Поля́ну.', translation: 'Ir para as montanhas, em Krasnaia Poliana.', next: 'gory' },
        ],
      },
      gory: {
        emoji: '🏔️',
        text: 'Подня́вшись по кана́тной доро́ге, Ли́ну ви́дит вокру́г снег, хотя́ внизу́, у мо́ря, расту́т па́льмы. И́менно здесь проводи́лись олимпи́йские соревнова́ния по го́рным лы́жам. Ли́ну смо́трит на лы́жников, спуска́ющихся с горы́.',
        translation:
          'Depois de subir pelo teleférico, o Linu vê neve ao redor, embora lá embaixo, à beira-mar, cresçam palmeiras. Foi justamente aqui que se realizaram as provas olímpicas de esqui alpino. Linu observa os esquiadores descendo a montanha.',
        choices: [
          { text: 'Попро́бовать поката́ться на лы́жах.', translation: 'Tentar esquiar.', next: 'final_lyzhi' },
          { text: 'Верну́ться в го́род и пойти́ в дендра́рий.', translation: 'Voltar à cidade e ir ao arboreto.', next: 'dendrarij' },
        ],
      },
      final_lyzhi: {
        emoji: '⛷️',
        text: 'Ли́ну берёт лы́жи напрока́т. Упа́в три ра́за, он реша́ет, что пингви́ну удо́бнее ката́ться на животе́. Лы́жники смею́тся, но Ли́ну дово́лен: так он спуска́ется быстре́е всех!',
        translation:
          'Linu aluga esquis. Depois de cair três vezes, ele decide que para um pinguim é mais cômodo deslizar de barriga. Os esquiadores riem, mas o Linu está satisfeito: assim ele desce mais rápido que todos!',
        ending: { tone: 'neutro', title: 'Esqui de barriga', message: 'Os esquis não deram certo, mas o Linu inventou um estilo olímpico só dele.' },
      },
      dendrarij: {
        emoji: '🌳',
        text: 'Сочи́нский дендра́рий был со́здан бо́лее ста лет наза́д. Гуля́я по его́ алле́ям, Ли́ну ви́дит расте́ния, привезённые со всего́ ми́ра. У вхо́да виси́т объявле́ние: «Приглаша́ются волонтёры. Заявле́ния принима́ются по электро́нной по́чте».',
        translation:
          'O arboreto de Sochi foi criado há mais de cem anos. Passeando pelas alamedas, o Linu vê plantas trazidas do mundo inteiro. Na entrada há um aviso: «Procuram-se voluntários. Inscrições são aceitas por e-mail».',
        choices: [
          { text: 'Написа́ть официа́льное письмо́.', translation: 'Escrever uma carta formal.', next: 'pismo' },
          { text: 'Про́сто погуля́ть да́льше.', translation: 'Simplesmente continuar passeando.', next: 'final_progulka' },
        ],
      },
      final_progulka: {
        emoji: '🌿',
        text: 'Ли́ну гуля́ет до ве́чера, любу́ясь па́льмами и кипари́сами. Об объявле́нии он совсе́м забыва́ет. Что ж, мо́жет быть, в сле́дующий раз!',
        translation: 'Linu passeia até a noite, admirando as palmeiras e os ciprestes. Ele se esquece completamente do aviso. Bom, talvez na próxima vez!',
        ending: { tone: 'neutro', title: 'Só um passeio', message: 'Um dia bonito entre palmeiras, mas a vaga de voluntário ficou para outro pinguim.' },
      },
      pismo: {
        emoji: '✉️',
        text: 'Ли́ну сади́тся на скамью́ и открыва́ет ноутбу́к. Он по́мнит, что в официа́льном письме́ к незнако́мым лю́дям обраща́ются на «вы», а «Вы» пи́шут с большо́й бу́квы. Как ему́ нача́ть письмо́?',
        translation:
          'Linu se senta num banco e abre o notebook. Ele lembra que, numa carta formal, trata-se desconhecidos por «вы», e esse «Вы» se escreve com maiúscula. Como começar a carta?',
        choices: [
          {
            text: '«Уважа́емая администра́ция! Прошу́ рассмотре́ть мою́ кандидату́ру в ка́честве волонтёра».',
            translation: '«Prezada administração! Solicito que considerem minha candidatura como voluntário».',
            next: 'otvet',
          },
          {
            text: '«Приве́т! Как дела́? Хочу́ у вас порабо́тать!»',
            translation: '«Oi! Tudo bem? Quero trabalhar aí com vocês!»',
            wrong:
              'Esse começo é informal demais para uma instituição. Numa carta oficial usa-se «Уважа́емые…» / «Уважа́емая…», o tratamento «Вы» e fórmulas como «Прошу́ рассмотре́ть…».',
          },
        ],
      },
      otvet: {
        emoji: '📨',
        text: 'Че́рез два дня прихо́дит отве́т: «Ва́ше заявле́ние рассмо́трено. Вы при́няты в програ́мму волонтёров. Про́сим Вас яви́ться в понеде́льник в 9:00, име́я при себе́ па́спорт».',
        translation:
          'Dois dias depois chega a resposta: «Sua inscrição foi analisada. O senhor foi aceito no programa de voluntários. Pedimos que compareça na segunda-feira às 9h, levando consigo o passaporte».',
        choices: [
          { text: 'Прийти́ в понеде́льник у́тром с па́спортом.', translation: 'Chegar na segunda de manhã com o passaporte.', next: 'rabota' },
          {
            text: 'Прийти́ во вто́рник без докуме́нтов.',
            translation: 'Chegar na terça sem documentos.',
            wrong: 'A carta pede segunda-feira (понеде́льник) às 9h, «име́я при себе́ па́спорт», isto é, levando o passaporte.',
          },
        ],
      },
      rabota: {
        emoji: '🧑‍🌾',
        text: 'Рабо́тая в дендра́рии, Ли́ну помога́ет садо́вникам и расска́зывает тури́стам о расте́ниях. Одна́жды тури́стка спра́шивает его́, где мо́жно попро́бовать ме́стный чай. Ли́ну зна́ет, что чай выра́щивается о́коло Со́чи уже́ бо́льше ста лет.',
        translation:
          'Trabalhando no arboreto, o Linu ajuda os jardineiros e fala aos turistas sobre as plantas. Um dia uma turista lhe pergunta onde provar o chá local. Linu sabe que o chá é cultivado perto de Sochi há mais de cem anos.',
        choices: [
          { text: 'Рассказа́ть ей о ча́йных планта́циях в гора́х.', translation: 'Contar a ela sobre as plantações de chá nas montanhas.', next: 'final_chai' },
        ],
      },
      final_chai: {
        emoji: '🍵',
        text: 'Ли́ну объясня́ет, как дое́хать до планта́ции, а в выходны́е е́дет туда́ сам. Попро́бовав чай, со́бранный на склона́х гор, он понима́ет, что лу́чшего ча́я никогда́ не пил. В конце́ ме́сяца дире́кция дендра́рия вруча́ет ему́ благода́рственное письмо́.',
        translation:
          'Linu explica como chegar à plantação e, no fim de semana, vai lá ele mesmo. Depois de provar o chá colhido nas encostas das montanhas, ele percebe que nunca tomou chá melhor. No fim do mês, a direção do arboreto lhe entrega uma carta de agradecimento.',
        ending: {
          tone: 'bom',
          title: 'Voluntário exemplar',
          message: 'Uma carta bem escrita abriu as portas do arboreto — e terminou com outra carta, de agradecimento. E com chá!',
        },
      },
    },
  },
  {
    id: 'ru-h11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Вулка́ны Камча́тки',
    emoji: '🌋',
    summary: 'Na Kamtchatka, o Linu escolhe entre subir um vulcão e voar até o Vale dos Gêiseres.',
    cultural_context:
      'A Península de Kamtchatka tem cerca de 30 vulcões ativos, e seus vulcões são Patrimônio Mundial da UNESCO desde 1996. O Vale dos Gêiseres, descoberto em 1941 pela geóloga Tatiana Ustinova, fica numa reserva natural e só se chega lá de helicóptero.',
    start: 'start',
    glossary: [
      ['подно́жие', 'pé (base) da montanha'],
      ['обойти́', 'contornar, dar a volta'],
      ['перейти́', 'atravessar'],
      ['сойти́ с доро́жки', 'sair da passarela'],
      ['тяну́ть кота́ за хвост', 'enrolar, demorar para decidir'],
      ['душа́ ухо́дит в пя́тки', 'morrer de medo'],
      ['не ве́шай нос', 'não desanime'],
      ['как по ма́слу', 'sem nenhum problema, às mil maravilhas'],
    ],
    nodes: {
      start: {
        emoji: '🌋',
        text: 'Ли́ну прилете́л в Петропа́вловск-Камча́тский. Из окна́ гости́ницы ви́дно сра́зу три вулка́на. Гид Ната́ша предлага́ет два маршру́та: подня́ться на Ава́чинский вулка́н и́ли слета́ть на вертолёте в Доли́ну ге́йзеров. «Реша́й сам, — улыба́ется она́, — то́лько не тяни́ кота́ за хвост!»',
        translation:
          'Linu chegou de avião a Petropávlovsk-Kamtchátski. Da janela do hotel dá para ver três vulcões de uma vez. A guia Natacha propõe dois roteiros: subir o vulcão Avatchinski ou ir de helicóptero ao Vale dos Gêiseres. «Decida você — ela sorri —, só não fique enrolando!»',
        choices: [
          { text: 'Подня́ться на Ава́чинский вулка́н.', translation: 'Subir o vulcão Avatchinski.', next: 'avacha' },
          { text: 'Слета́ть в Доли́ну ге́йзеров.', translation: 'Ir de helicóptero ao Vale dos Gêiseres.', next: 'geysers' },
        ],
      },
      avacha: {
        emoji: '🥾',
        text: 'Они́ выхо́дят в пять утра́ и к обе́ду дохо́дят до ла́геря у подно́жия. Да́льше тропа́ идёт вверх по ка́мням и сне́гу. Ната́ша предупрежда́ет: «Наверху́ мы не перейдём кра́тер, а обойдём его́ по кра́ю: внутри́ ядови́тые га́зы». Ли́ну кива́ет и идёт сле́дом.',
        translation:
          'Eles saem às cinco da manhã e na hora do almoço chegam ao acampamento no pé do vulcão. Dali a trilha sobe por pedras e neve. Natacha avisa: «Lá em cima não vamos atravessar a cratera, vamos contorná-la pela borda: lá dentro há gases tóxicos». Linu concorda com a cabeça e vai atrás dela.',
        choices: [
          { text: 'Обойти́ кра́тер по кра́ю вме́сте с Ната́шей.', translation: 'Contornar a cratera pela borda junto com a Natacha.', next: 'top' },
          {
            text: 'Перейти́ кра́тер посереди́не, так бы́стрее.',
            translation: 'Atravessar a cratera pelo meio, assim é mais rápido.',
            wrong:
              'Natacha disse o contrário: «перейти́» é atravessar, «обойти́» é contornar. Eles vão contornar a cratera pela borda («обойдём по кра́ю»), porque lá dentro há gases tóxicos.',
          },
        ],
      },
      top: {
        emoji: '🏔️',
        text: 'На верши́не па́хнет се́рой, из тре́щин идёт дым. Вдруг под нога́ми что-то гуди́т, и у Ли́ну душа́ ухо́дит в пя́тки. «Не ве́шай нос! — смеётся Ната́ша. — Э́то обы́чное дыха́ние вулка́на». Вокру́г видны́ Ти́хий океа́н и сосе́дний Коря́кский вулка́н.',
        translation:
          'No topo tem cheiro de enxofre, e sai fumaça das fendas. De repente algo ronca sob os pés, e Linu morre de medo. «Não desanime! — ri Natacha. — É a respiração normal do vulcão». Em volta se veem o Oceano Pacífico e o vizinho vulcão Koriakski.',
        choices: [
          {
            text: 'Сфотографи́ровать вид и спусти́ться, пока́ пого́да хоро́шая.',
            translation: 'Fotografar a vista e descer enquanto o tempo está bom.',
            next: 'final_bom',
          },
          { text: 'Оста́ться наверху́ подо́льше.', translation: 'Ficar lá em cima mais um pouco.', next: 'final_tuman' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ли́ну де́лает не́сколько сни́мков, и они́ начина́ют спуск. По сне́жному скло́ну мо́жно съе́хать вниз, как с го́рки. К ве́черу они́ дохо́дят до ла́геря, уста́лые, но счастли́вые. Всё прошло́ как по ма́слу!',
        translation:
          'Linu tira algumas fotos, e eles começam a descida. Pela encosta nevada dá para escorregar para baixo, como num tobogã. À noitinha chegam ao acampamento, cansados, mas felizes. Tudo correu às mil maravilhas!',
        ending: { tone: 'bom', title: 'No topo do Avatchinski', message: 'Você entendeu o «обойти́» e subiu e desceu o vulcão em segurança.' },
      },
      final_tuman: {
        emoji: '🌫️',
        text: 'Ли́ну не хо́чется уходи́ть, и он сиди́т на верши́не ещё час. Но с океа́на прихо́дит густо́й тума́н, и тропу́ почти́ не ви́дно. Ната́ша ведёт его́ вниз шаг за ша́гом. До ла́геря они́ дохо́дят то́лько но́чью.',
        translation:
          'Linu não quer ir embora e fica no topo mais uma hora. Mas do oceano chega uma neblina densa, e quase não se vê a trilha. Natacha o leva para baixo passo a passo. Só chegam ao acampamento de noite.',
        ending: {
          tone: 'neutro',
          title: 'Descida na neblina',
          message: 'Deu tudo certo, mas nas montanhas o tempo muda rápido: melhor descer enquanto está bom.',
        },
      },
      geysers: {
        emoji: '🚁',
        text: 'Вертолёт лети́т над леса́ми и вулка́нами почти́ час. В Доли́не ге́йзеров инспе́ктор запове́дника объясня́ет пра́вила. С деревя́нных доро́жек сходи́ть нельзя́: земля́ вокру́г горя́чая, а под ней кипя́ток. «Кто сойдёт с доро́жки, тот мо́жет провали́ться», — стро́го говори́т он.',
        translation:
          'O helicóptero voa quase uma hora sobre florestas e vulcões. No Vale dos Gêiseres, o fiscal da reserva explica as regras. É proibido sair das passarelas de madeira: a terra em volta é quente, e embaixo dela há água fervendo. «Quem sair da passarela pode afundar», diz ele, sério.',
        choices: [
          { text: 'Идти́ то́лько по доро́жкам.', translation: 'Andar só pelas passarelas.', next: 'bear' },
          {
            text: 'Сойти́ с доро́жки, что́бы потро́гать во́ду.',
            translation: 'Sair da passarela para tocar na água.',
            wrong: 'O fiscal avisou que é proibido sair das passarelas («с доро́жек сходи́ть нельзя́»): a terra é quente e dá para afundar em água fervente.',
          },
        ],
      },
      bear: {
        emoji: '🐻',
        text: 'На друго́й стороне́ ре́чки Ли́ну замеча́ет бу́рого медве́дя. Медве́дь споко́йно ло́вит ры́бу и на люде́й не смо́трит. Инспе́ктор ти́хо говори́т: «Не бу́дем к нему́ подходи́ть. Обойдём э́то ме́сто и подойдём к большо́му ге́йзеру с друго́й стороны́».',
        translation:
          'Do outro lado do riacho, Linu nota um urso-pardo. O urso pesca tranquilamente e nem olha para as pessoas. O fiscal diz baixinho: «Não vamos nos aproximar dele. Vamos contornar este lugar e chegar ao gêiser grande pelo outro lado».',
        choices: [
          { text: 'Обойти́ медве́дя стороно́й.', translation: 'Passar longe do urso.', next: 'final_geyser' },
          { text: 'Подойти́ побли́же ра́ди хоро́шего сни́мка.', translation: 'Chegar mais perto para tirar uma boa foto.', next: 'final_bear' },
        ],
      },
      final_geyser: {
        emoji: '💨',
        text: 'Они́ обхо́дят медве́дя стороно́й и захо́дят на смотрову́ю площа́дку как раз во́время. Ге́йзер Велика́н выбра́сывает высоко́ в не́бо столб воды́ и па́ра. «Тебе́ повезло́, — говори́т инспе́ктор. — Он просыпа́ется раз в не́сколько часо́в». Ли́ну забыва́ет про всё на све́те.',
        translation:
          'Eles passam longe do urso e chegam ao mirante bem na hora. O gêiser Velikan lança bem alto no céu uma coluna de água e vapor. «Você teve sorte — diz o fiscal. — Ele só desperta a cada tantas horas». Linu esquece tudo o mais no mundo.',
        ending: { tone: 'bom', title: 'O gigante acordou', message: 'Você respeitou as regras da reserva e viu o gêiser Velikan em ação.' },
      },
      final_bear: {
        emoji: '🐻',
        text: 'Ли́ну де́лает шаг к ре́чке, но инспе́ктор сра́зу его́ остана́вливает. «Ты что, с ума́ сошёл? Э́то ди́кий зверь, а не игру́шка!» Пришло́сь верну́ться к вертолёту ра́ньше вре́мени. Так Ли́ну и не уви́дел ге́йзер Велика́н.',
        translation:
          'Linu dá um passo em direção ao riacho, mas o fiscal o detém na hora. «Ficou maluco? É um animal selvagem, não um brinquedo!» Tiveram de voltar ao helicóptero antes da hora. E assim Linu acabou não vendo o gêiser Velikan.',
        ending: {
          tone: 'neutro',
          title: 'Volta antes da hora',
          message: 'Na Kamtchatka os ursos são donos da casa: o certo era «обойти́ стороно́й», passar longe.',
        },
      },
    },
  },
  {
    id: 'ru-h12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Спор в прямо́м эфи́ре',
    emoji: '📻',
    summary: 'Numa rádio de Ecaterimburgo, o Linu entra num debate: livro de papel ou livro eletrônico?',
    cultural_context:
      'Ecaterimburgo foi fundada em 1723 às margens do rio Isset, nos Urais. Perto da cidade há um obelisco que marca a fronteira convencional entre a Europa e a Ásia.',
    start: 'start',
    glossary: [
      ['по-мо́ему', 'na minha opinião'],
      ['я счита́ю, что…', 'eu acho que…, considero que…'],
      ['с одно́й стороны́… с друго́й стороны́…', 'por um lado… por outro lado…'],
      ['во-пе́рвых, во-вторы́х', 'em primeiro lugar, em segundo lugar'],
      ['тем не ме́нее', 'mesmo assim, no entanto'],
      ['прямо́й эфи́р', 'transmissão ao vivo'],
      ['веду́щий', 'apresentador'],
      ['слу́шатель', 'ouvinte'],
    ],
    nodes: {
      start: {
        emoji: '📻',
        text: 'Ли́ну пригласи́ли на ра́дио в Екатеринбу́рге. Сего́дня в прямо́м эфи́ре спор: бума́жная кни́га и́ли электро́нная? Веду́щий, Оле́г Петро́вич, представля́ет госте́й: библиоте́каря Ве́ру и программи́ста Артёма. «А наш тре́тий гость, Ли́ну, чита́ет всё подря́д, — говори́т он. — Ли́ну, с кем вы согла́сны?»',
        translation:
          'Linu foi convidado para um programa de rádio em Ecaterimburgo. Hoje, ao vivo, o debate é: livro de papel ou eletrônico? O apresentador, Oleg Petróvitch, apresenta os convidados: a bibliotecária Vera e o programador Artiom. «E o nosso terceiro convidado, Linu, lê de tudo — diz ele. — Linu, com quem o senhor concorda?»',
        choices: [
          { text: 'Снача́ла послу́шать аргуме́нты Ве́ры.', translation: 'Primeiro ouvir os argumentos da Vera.', next: 'vera' },
          { text: 'Снача́ла послу́шать аргуме́нты Артёма.', translation: 'Primeiro ouvir os argumentos do Artiom.', next: 'artem' },
        ],
      },
      vera: {
        emoji: '📚',
        text: 'Ве́ра говори́т споко́йно, но уве́ренно: «Я счита́ю, что бума́жная кни́га лу́чше для па́мяти. Во-пе́рвых, мы запомина́ем, где на страни́це стоя́ла фра́за. Во-вторы́х, кни́га не присыла́ет уведомле́ний и не отвлека́ет. Кро́ме того́, у неё никогда́ не садя́тся батаре́йки!»',
        translation:
          'Vera fala com calma, mas com firmeza: «Eu acho que o livro de papel é melhor para a memória. Em primeiro lugar, a gente lembra onde a frase estava na página. Em segundo lugar, o livro não manda notificações e não distrai. Além disso, a bateria dele nunca acaba!»',
        choices: [
          { text: 'Тепе́рь послу́шать Артёма.', translation: 'Agora ouvir o Artiom.', next: 'artem' },
          {
            text: 'Сказа́ть, что Ве́ра защища́ет электро́нные кни́ги.',
            translation: 'Dizer que a Vera defende os livros eletrônicos.',
            wrong: 'Vera defende o livro de papel: «я счита́ю, что бума́жная кни́га лу́чше» — eu acho que o livro de papel é melhor.',
          },
        ],
      },
      artem: {
        emoji: '📱',
        text: 'Артём не согла́сен: «По-мо́ему, спор вообще́ не о том. Электро́нная кни́га ве́сит две́сти гра́ммов, а в ней ты́сячи книг. С её по́мощью мо́жно чита́ть в метро́, в по́езде, но́чью без ла́мпы. Тем не ме́нее я не спо́рю: па́хнет она́ ху́же», — смеётся он.',
        translation:
          'Artiom discorda: «Na minha opinião, o debate nem é sobre isso. Um leitor eletrônico pesa duzentos gramas e tem milhares de livros. Com ele dá para ler no metrô, no trem, à noite sem lâmpada. Mesmo assim, não discuto: o cheiro dele é pior», ri ele.',
        choices: [{ text: 'Отве́тить веду́щему.', translation: 'Responder ao apresentador.', next: 'question' }],
      },
      question: {
        emoji: '🎙️',
        text: 'Веду́щий повора́чивается к Ли́ну: «Ита́к, ва́ше мне́ние? Слу́шатели ждут». Ли́ну поправля́ет микрофо́н. Он зна́ет, что в эфи́ре на́до говори́ть я́сно и аргументи́рованно. Как он отве́тит?',
        translation:
          'O apresentador se vira para Linu: «Então, qual é a sua opinião? Os ouvintes estão esperando». Linu ajeita o microfone. Ele sabe que no ar é preciso falar com clareza e com argumentos. Como ele vai responder?',
        choices: [
          {
            text: 'С одно́й стороны́, я люблю́ бума́гу; с друго́й — электро́нная кни́га всегда́ со мной.',
            translation: 'Por um lado, eu amo o papel; por outro, o livro eletrônico está sempre comigo.',
            next: 'balance',
          },
          { text: 'По-мо́ему, пра́вы о́ба, но я выбира́ю бума́гу.', translation: 'Na minha opinião, os dois têm razão, mas eu escolho o papel.', next: 'paper' },
        ],
      },
      balance: {
        emoji: '⚖️',
        text: 'Ли́ну говори́т: «С одно́й стороны́, я люблю́ писа́ть на поля́х и дари́ть кни́ги друзья́м. С друго́й стороны́, в доро́гу я беру́ то́лько электро́нную кни́гу. Поэ́тому я счита́ю, что выбира́ть вообще́ не обяза́тельно». Веду́щий дово́лен: «Вот э́то аргуме́нт!»',
        translation:
          'Linu diz: «Por um lado, eu adoro escrever nas margens e dar livros de presente aos amigos. Por outro lado, em viagem eu levo só o livro eletrônico. Por isso acho que nem é preciso escolher». O apresentador fica satisfeito: «Isso sim é um argumento!»',
        choices: [{ text: 'Приня́ть звоно́к слу́шательницы.', translation: 'Atender a ligação de uma ouvinte.', next: 'call' }],
      },
      paper: {
        emoji: '📖',
        text: 'Ли́ну говори́т: «По-мо́ему, пра́вы о́ба. Тем не ме́нее я выбира́ю бума́гу: кни́га для меня́ — э́то ещё и пода́рок, и па́мять». Ве́ра улыба́ется, а Артём поднима́ет бро́ви. «Зна́чит, два про́тив одного́», — шу́тит веду́щий.',
        translation:
          'Linu diz: «Na minha opinião, os dois têm razão. Mesmo assim, eu escolho o papel: para mim, um livro também é presente e lembrança». Vera sorri, e Artiom levanta as sobrancelhas. «Então são dois contra um», brinca o apresentador.',
        choices: [{ text: 'Приня́ть звоно́к слу́шательницы.', translation: 'Atender a ligação de uma ouvinte.', next: 'call' }],
      },
      call: {
        emoji: '☎️',
        text: 'В студи́ю звони́т учи́тельница из Ни́жнего Таги́ла. «Я счита́ю, что гла́вное — не фо́рмат, а привы́чка, — говори́т она́. — Мои́ ученики́ чита́ют ма́ло, и им всё равно́, с бума́ги и́ли с экра́на. Как, по-ва́шему, привле́чь дете́й к чте́нию?»',
        translation:
          'Uma professora de Níjni Taguil liga para o estúdio. «Eu acho que o principal não é o formato, e sim o hábito — diz ela. — Meus alunos leem pouco, e tanto faz para eles se é no papel ou na tela. Na opinião de vocês, como atrair as crianças para a leitura?»',
        choices: [
          { text: 'Предложи́ть кни́жный клуб для подро́стков.', translation: 'Sugerir um clube do livro para adolescentes.', next: 'final_club' },
          {
            text: 'Сказа́ть, что де́ти са́ми когда́-нибудь начну́т чита́ть.',
            translation: 'Dizer que as crianças um dia vão começar a ler sozinhas.',
            next: 'final_meh',
          },
          {
            text: 'Отве́тить, что её ученики́ и так чита́ют о́чень мно́го.',
            translation: 'Responder que os alunos dela já leem muito.',
            wrong: 'A professora disse o contrário: «мои́ ученики́ чита́ют ма́ло» — meus alunos leem pouco. Ela quer ideias para atraí-los à leitura.',
          },
        ],
      },
      final_club: {
        emoji: '🎉',
        text: 'Ли́ну отвеча́ет: «Во-пе́рвых, чита́ть ну́жно вме́сте, а не в одино́чку. Во-вторы́х, пусть де́ти са́ми выбира́ют кни́ги — хоть ко́миксы». Ве́ра тут же приглаша́ет всех в кни́жный клуб свое́й библиоте́ки, а Артём обеща́ет сде́лать для него́ сайт. По́сле эфи́ра веду́щий зовёт Ли́ну на переда́чу ещё раз.',
        translation:
          'Linu responde: «Em primeiro lugar, é preciso ler juntos, e não sozinho. Em segundo lugar, deixem as crianças escolherem os livros — nem que sejam quadrinhos». Vera na hora convida todos para o clube do livro da sua biblioteca, e Artiom promete fazer um site para ele. Depois do programa, o apresentador chama Linu para voltar outra vez.',
        ending: { tone: 'bom', title: 'Convidado de novo', message: 'Argumentos em ordem, com «во-пе́рвых» e «во-вторы́х»: você convenceu os ouvintes.' },
      },
      final_meh: {
        emoji: '🤷',
        text: 'Ли́ну отвеча́ет: «Мне ка́жется, де́ти са́ми когда́-нибудь начну́т чита́ть». Слу́шательница вздыха́ет: «Я жду уже́ два́дцать лет». Веду́щий бы́стро перехо́дит к рекла́ме. Ли́ну понима́ет, что его́ отве́т был сла́бым, без аргуме́нтов.',
        translation:
          'Linu responde: «Acho que as crianças um dia vão começar a ler sozinhas». A ouvinte suspira: «Estou esperando há vinte anos». O apresentador passa rápido para os comerciais. Linu percebe que sua resposta foi fraca, sem argumentos.',
        ending: { tone: 'neutro', title: 'Resposta fraca', message: 'Num debate, opinião precisa de argumento: «я счита́ю, что…, потому́ что…».' },
      },
    },
  },
  {
    id: 'ru-h13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Анекдо́ты на ку́хне',
    emoji: '🫖',
    summary: 'Numa cozinha de Níjni Nóvgorod, o Linu passa uma noite de anedotas e aprende que o tom importa.',
    cultural_context:
      'Em russo, «анекдо́т» não é um caso curioso, e sim uma piada curta com final de efeito; contar anedotas à mesa da cozinha é uma tradição forte. Níjni Nóvgorod fica na confluência dos rios Oka e Volga e foi fundada em 1221.',
    start: 'start',
    glossary: [
      ['анекдо́т', 'piada curta'],
      ['Ли́нушка', 'Linuzinho (diminutivo carinhoso)'],
      ['да нет, наве́рное', 'acho que não'],
      ['ведь', 'afinal, pois (partícula)'],
      ['же', 'mas, afinal (partícula de ênfase)'],
      ['уважи́л', 'que respeito, hein (muitas vezes irônico)'],
      ['Ну ты даёшь!', 'Essa foi boa! / Você é demais!'],
      ['свой челове́к', 'um de nós, gente da casa'],
    ],
    nodes: {
      start: {
        emoji: '🍲',
        text: 'Суббо́тний ве́чер, Ни́жний Но́вгород, ма́ленькая ку́хня на ве́рхнем этаже́. Тётя Га́ля ста́вит на стол пирожки́ и чай с варе́ньем: «Ешь, Ли́нушка, ешь, ты же с доро́ги!» За столо́м сидя́т её сын Серёжа и сосе́д, пожило́й профе́ссор Михаи́л Семёнович. «Ну что, — потира́ет ру́ки Серёжа, — анекдо́ты расска́зывать бу́дем и́ли как?»',
        translation:
          'Sábado à noite, Níjni Nóvgorod, uma cozinha pequena no último andar. Tia Gália põe na mesa pastéis e chá com geleia: «Come, Linuzinho, come, você acabou de chegar de viagem!» À mesa estão o filho dela, Serioja, e o vizinho, o professor idoso Mikhail Semiónovitch. «E aí — Serioja esfrega as mãos —, vamos contar piada ou não?»',
        choices: [
          { text: 'Попроси́ть Серёжу нача́ть пе́рвым.', translation: 'Pedir que o Serioja comece.', next: 'serezha' },
          {
            text: 'Обрати́ться к сосе́ду: «Михаи́л Семёнович, расскажи́те вы!»',
            translation: 'Dirigir-se ao vizinho: «Mikhail Semiónovitch, conte o senhor!»',
            next: 'professor',
          },
          {
            text: 'Обрати́ться к сосе́ду: «Слу́шай, дед, расскажи́ что-нибудь!»',
            translation: 'Dirigir-se ao vizinho: «Escuta, vovô, conta alguma coisa!»',
            next: 'oops',
          },
        ],
      },
      serezha: {
        emoji: '😂',
        text: 'Серёжа начина́ет: «Иностра́нец спра́шивает ру́сского: „Вы бу́дете чай?“ А тот отвеча́ет: „Да нет, наве́рное“. Иностра́нец пото́м неде́лю не спал: так да и́ли нет?» Все смею́тся, а Серёжа хи́тро смо́трит на Ли́ну. «Ну, а ты-то по́нял?»',
        translation:
          'Serioja começa: «Um estrangeiro pergunta a um russo: „Aceita um chá?“ E ele responde: „Да нет, наве́рное“ (literalmente: sim, não, provavelmente). O estrangeiro passou uma semana sem dormir: afinal, é sim ou não?» Todos riem, e Serioja olha para Linu com malícia. «E você, entendeu?»',
        choices: [
          { text: 'Отве́тить: «Коне́чно! Э́то зна́чит „нет“».', translation: 'Responder: «Claro! Quer dizer „não“».', next: 'professor' },
          {
            text: 'Отве́тить: «Э́то зна́чит „да“, он хо́чет ча́ю».',
            translation: 'Responder: «Quer dizer „sim“, ele quer chá».',
            wrong: 'Em «да нет, наве́рное» quem manda é o «нет», suavizado pelo «наве́рное»: a resposta é «acho que não». É justamente essa a graça da piada.',
          },
        ],
      },
      oops: {
        emoji: '😬',
        text: 'Наступа́ет нело́вкая па́уза. Михаи́л Семёнович поднима́ет бровь: «Дед? Ну спаси́бо, молодо́й челове́к, уважи́л». Тётя Га́ля ти́хо ше́пчет: «Ли́нушка, он ведь профе́ссор, ему́ во́семьдесят лет, к нему́ на „вы“ на́до». Серёжа пря́чет улы́бку в ча́шку.',
        translation:
          'Vem um silêncio constrangedor. Mikhail Semiónovitch levanta a sobrancelha: «Vovô? Ora, muito obrigado, meu jovem, que respeito». Tia Gália sussurra: «Linuzinho, ele é professor, tem oitenta anos, com ele é de „senhor“». Serioja esconde o sorriso atrás da xícara.',
        choices: [
          {
            text: 'Извини́ться: «Прости́те, Михаи́л Семёнович, я не хоте́л вас оби́деть».',
            translation: 'Pedir desculpas: «Desculpe, Mikhail Semiónovitch, não quis ofendê-lo».',
            next: 'professor',
          },
          {
            text: 'Поблагодари́ть его́: профе́ссору ведь понра́вилось.',
            translation: 'Agradecer a ele: afinal, o professor gostou.',
            wrong:
              '«Ну спаси́бо, уважи́л» é ironia: o professor se ofendeu por ser chamado de «дед» (vovô) e tratado por «ты». O certo é pedir desculpas e passar para «вы».',
          },
        ],
      },
      professor: {
        emoji: '🎓',
        text: 'Михаи́л Семёнович поправля́ет очки́: «Ну что ж, расскажу́ вам ста́рый студе́нческий анекдо́т. Профе́ссор спра́шивает на экза́мене: „Ско́лько вы гото́вились?“ — „Всю ночь!“ — „Ви́жу, что ночь, а не год“». Тётя Га́ля хохо́чет, а Серёжа вздыха́ет: «Вот-вот, э́то про меня́». Все смо́трят на Ли́ну: тепе́рь его́ о́чередь.',
        translation:
          'Mikhail Semiónovitch ajeita os óculos: «Pois bem, vou contar uma velha piada de estudante. O professor pergunta no exame: „Quanto tempo o senhor estudou?“ — „A noite toda!“ — „Estou vendo que foi uma noite, e não um ano“». Tia Gália gargalha, e Serioja suspira: «Pois é, essa é sobre mim». Todos olham para Linu: agora é a vez dele.',
        choices: [
          { text: 'Рассказа́ть свой анекдо́т про пингви́на.', translation: 'Contar a sua piada de pinguim.', next: 'linu_joke' },
          { text: 'Спроси́ть, почему́ ру́сские так лю́бят анекдо́ты.', translation: 'Perguntar por que os russos gostam tanto de anedotas.', next: 'why' },
        ],
      },
      why: {
        emoji: '🤔',
        text: 'Михаи́л Семёнович заду́мывается: «Ви́дите ли, анекдо́т у нас — э́то це́лый жанр. Ра́ньше лю́ди собира́лись на ку́хне, потому́ что там мо́жно бы́ло поговори́ть по душа́м, вот и расска́зывали до утра́. Ну а сейча́с — привы́чка, да и про́сто ве́село». Тётя Га́ля добавля́ет: «Ку́хня же у нас — са́мое гла́вное ме́сто в до́ме!» Серёжа подми́гивает Ли́ну: «Ну, тепе́рь-то расска́жешь?»',
        translation:
          'Mikhail Semiónovitch fica pensativo: «Veja bem, a anedota para nós é um gênero inteiro. Antigamente as pessoas se reuniam na cozinha, porque ali se podia conversar de coração aberto, e então contavam piadas até de manhã. E hoje é costume, e também é simplesmente divertido». Tia Gália acrescenta: «A cozinha é o lugar mais importante da casa, ora!» Serioja pisca para Linu: «E aí, agora vai contar?»',
        choices: [
          { text: 'Набра́ться хра́брости и рассказа́ть анекдо́т.', translation: 'Criar coragem e contar uma piada.', next: 'linu_joke' },
          { text: 'Сказа́ть, что уже́ по́здно, и попроща́ться.', translation: 'Dizer que já está tarde e se despedir.', next: 'final_leave' },
        ],
      },
      linu_joke: {
        emoji: '🐧',
        text: 'Ли́ну набира́ется хра́брости: «Пингви́н захо́дит в кафе́ и спра́шивает: „У вас есть ры́ба?“ — „Нет“. На сле́дующий день опя́ть: „Ры́ба есть?“ — „Нет!“ На тре́тий день официа́нт не выде́рживает: „Ещё раз спро́сишь — прибью́ твои́ ла́пы к по́лу!“ На четвёртый день пингви́н спра́шивает: „Гво́зди есть?“ — „Нет“. — „А ры́ба?“»',
        translation:
          'Linu cria coragem: «Um pinguim entra num café e pergunta: „Vocês têm peixe?“ — „Não“. No dia seguinte, de novo: „Tem peixe?“ — „Não!“ No terceiro dia, o garçom perde a paciência: „Se perguntar mais uma vez, prego suas patas no chão!“ No quarto dia, o pinguim pergunta: „Tem pregos?“ — „Não“. — „E peixe?“»',
        choices: [{ text: 'Подожда́ть реа́кции.', translation: 'Esperar a reação.', next: 'final_laugh' }],
      },
      final_laugh: {
        emoji: '🎉',
        text: 'Секу́нду все молча́т, а пото́м ку́хня взрыва́ется сме́хом. Серёжа хло́пает Ли́ну по плечу́: «Ну ты даёшь! Свой челове́к!» Михаи́л Семёнович вытира́ет слёзы: «Вот э́то, молодо́й челове́к, настоя́щий анекдо́т». А тётя Га́ля кладёт Ли́ну ещё три пирожка́: за ю́мор поло́жено.',
        translation:
          'Por um segundo todos ficam calados, e depois a cozinha explode em risadas. Serioja dá um tapinha no ombro de Linu: «Essa foi boa! Você é dos nossos!» Mikhail Semiónovitch enxuga as lágrimas: «Isso, meu jovem, é uma anedota de verdade». E tia Gália põe para Linu mais três pastéis: humor merece recompensa.',
        ending: { tone: 'bom', title: 'Um de nós', message: 'Você acertou o tom, entendeu a ironia e ainda fez a cozinha inteira rir.' },
      },
      final_leave: {
        emoji: '🌙',
        text: 'Ли́ну благодари́т хозя́йку и встаёт из-за стола́. «Куда́ же ты? — всплёскивает рука́ми тётя Га́ля. — Мы ведь ещё чай не вы́пили!» Но Ли́ну уже́ в прихо́жей. Свой анекдо́т он так и не рассказа́л — мо́жет, в сле́дующий раз.',
        translation:
          'Linu agradece à dona da casa e se levanta da mesa. «Mas aonde você vai? — tia Gália ergue as mãos. — A gente nem terminou o chá!» Mas Linu já está no hall de entrada. A piada dele acabou ficando sem contar — quem sabe da próxima vez.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Foi uma noite simpática, mas na cozinha russa quem sai cedo perde a melhor parte.' },
      },
    },
  },
  {
    id: 'ru-h14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Язы́к нау́ки',
    emoji: '🔬',
    summary: 'No Museu Politécnico de Moscou, o Linu precisa transformar textos científicos pesados em legendas claras.',
    cultural_context:
      'O Museu Politécnico de Moscou foi fundado em 1872 e é um dos museus de ciência e tecnologia mais antigos do mundo. O Sputnik 1, lançado em 4 de outubro de 1957, pesava cerca de 83,6 kg, e seus sinais de rádio foram captados por radioamadores do mundo inteiro.',
    start: 'start',
    glossary: [
      ['осуществле́ние', 'realização, execução'],
      ['за́пуск', 'lançamento'],
      ['расположе́ние', 'disposição, arranjo'],
      ['возраста́ние', 'aumento; ordem crescente'],
      ['иску́сственный спу́тник', 'satélite artificial'],
      ['ознаменова́ть', 'marcar (o início de algo)'],
      ['предсказа́ть', 'prever'],
      ['этике́тка', 'etiqueta; legenda de museu'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Ли́ну прохо́дит пра́ктику в Политехни́ческом музе́е в Москве́, одно́м из старе́йших нау́чно-техни́ческих музе́ев ми́ра: он осно́ван в 1872 году́. Нау́чный сотру́дник Ири́на Ви́кторовна даёт ему́ зада́ние. «Для но́вой экспози́ции нам нужны́ те́ксты этике́ток, — объясня́ет она́. — Язы́к до́лжен быть то́чным, но поня́тным. Вы́берите те́му: исто́рия периоди́ческой систе́мы и́ли пе́рвый иску́сственный спу́тник Земли́».',
        translation:
          'Linu faz estágio no Museu Politécnico de Moscou, um dos mais antigos museus de ciência e tecnologia do mundo: foi fundado em 1872. A pesquisadora Irina Víktorovna lhe dá uma tarefa. «Para a nova exposição precisamos dos textos das legendas — explica ela. — A linguagem deve ser precisa, mas compreensível. Escolha o tema: a história da tabela periódica ou o primeiro satélite artificial da Terra».',
        choices: [
          { text: 'Взять те́му о периоди́ческой систе́ме.', translation: 'Pegar o tema da tabela periódica.', next: 'mendeleev' },
          { text: 'Взять те́му о спу́тнике.', translation: 'Pegar o tema do satélite.', next: 'sputnik' },
        ],
      },
      mendeleev: {
        emoji: '⚗️',
        text: 'В архи́ве Ли́ну нахо́дит черново́й текст: «Откры́тие Дми́трием Ива́новичем Менделе́евым периоди́ческого зако́на в 1869 году́ ста́ло результа́том систематиза́ции изве́стных к тому́ вре́мени хими́ческих элеме́нтов. Расположе́ние элеме́нтов в поря́дке возраста́ния а́томного ве́са позво́лило вы́явить периоди́чность их свойств. Бо́лее того́, Менделе́ев предсказа́л существова́ние ещё не откры́тых элеме́нтов». Ли́ну перечи́тывает пе́рвую фра́зу три ра́за: одни́ существи́тельные!',
        translation:
          'No arquivo, Linu encontra um rascunho: «A descoberta da lei periódica por Dmitri Ivánovitch Mendeleiev em 1869 foi resultado da sistematização dos elementos químicos conhecidos até então. A disposição dos elementos em ordem crescente de peso atômico permitiu revelar a periodicidade de suas propriedades. Mais do que isso, Mendeleiev previu a existência de elementos ainda não descobertos». Linu relê a primeira frase três vezes: só substantivos!',
        choices: [
          { text: 'Упрости́ть текст, но сохрани́ть все фа́кты.', translation: 'Simplificar o texto, mas manter todos os fatos.', next: 'simplify' },
          {
            text: 'Написа́ть, что Менделе́ев откры́л все хими́ческие элеме́нты.',
            translation: 'Escrever que Mendeleiev descobriu todos os elementos químicos.',
            wrong:
              'O texto diz que ele organizou os elementos já conhecidos («изве́стных к тому́ вре́мени») e previu os que ainda não tinham sido descobertos («ещё не откры́тых»). Ele não descobriu todos.',
          },
        ],
      },
      simplify: {
        emoji: '✏️',
        text: 'Ли́ну разбива́ет дли́нную фра́зу на две: «В 1869 году́ Менделе́ев откры́л периоди́ческий зако́н. Он расположи́л изве́стные элеме́нты по а́томному ве́су и уви́дел, что их сво́йства повторя́ются». Ири́на Ви́кторовна чита́ет и одобри́тельно кива́ет. «Хорошо́. Но не забу́дьте са́мое интере́сное: пусты́е кле́тки в табли́це», — говори́т она́.',
        translation:
          'Linu divide a frase longa em duas: «Em 1869, Mendeleiev descobriu a lei periódica. Ele organizou os elementos conhecidos por peso atômico e viu que suas propriedades se repetem». Irina Víktorovna lê e acena com aprovação. «Bom. Mas não se esqueça do mais interessante: as casas vazias na tabela», diz ela.',
        choices: [
          { text: 'Доба́вить фра́зу о предска́занных элеме́нтах.', translation: 'Acrescentar uma frase sobre os elementos previstos.', next: 'final_table' },
          { text: 'Оста́вить так: коро́че — зна́чит лу́чше.', translation: 'Deixar assim: mais curto é melhor.', next: 'final_dry' },
        ],
      },
      sputnik: {
        emoji: '🛰️',
        text: 'Ли́ну открыва́ет па́пку с материа́лами. Пе́рвая фра́за звучи́т так: «Осуществле́ние за́пуска пе́рвого иску́сственного спу́тника Земли́ 4 октября́ 1957 го́да ознаменова́ло нача́ло косми́ческой э́ры». Да́лее сле́дуют техни́ческие да́нные: ма́сса о́коло восьми́десяти трёх килогра́ммов, четы́ре анте́нны, два радиопереда́тчика. Сигна́лы спу́тника принима́ли радиолюби́тели всего́ ми́ра.',
        translation:
          'Linu abre a pasta com os materiais. A primeira frase diz assim: «A realização do lançamento do primeiro satélite artificial da Terra em 4 de outubro de 1957 marcou o início da era espacial». Em seguida vêm os dados técnicos: massa de cerca de oitenta e três quilos, quatro antenas, dois radiotransmissores. Os sinais do satélite eram captados por radioamadores do mundo inteiro.',
        choices: [
          { text: 'Переписа́ть пе́рвую фра́зу поня́тнее.', translation: 'Reescrever a primeira frase de forma mais clara.', next: 'rewrite' },
          {
            text: 'Написа́ть, что спу́тник ве́сил во́семьдесят три то́нны.',
            translation: 'Escrever que o satélite pesava oitenta e três toneladas.',
            wrong: 'Releia os dados: «о́коло восьми́десяти трёх килогра́ммов» — cerca de 83 quilos, não toneladas. O Sputnik 1 era uma esfera pequena.',
          },
        ],
      },
      rewrite: {
        emoji: '📝',
        text: 'Ли́ну пи́шет: «4 октября́ 1957 го́да в ко́смос запусти́ли пе́рвый иску́сственный спу́тник Земли́. С э́того дня начала́сь косми́ческая э́ра». Ири́на Ви́кторовна дово́льна, но задаёт вопро́с: «А что посети́тель услы́шит, е́сли нажмёт на кно́пку у витри́ны?» Ли́ну вспомина́ет, что спу́тник передава́л просты́е радиосигна́лы — знамени́тое «бип-бип».',
        translation:
          'Linu escreve: «Em 4 de outubro de 1957, lançaram ao espaço o primeiro satélite artificial da Terra. Nesse dia começou a era espacial». Irina Víktorovna fica satisfeita, mas faz uma pergunta: «E o que o visitante vai ouvir se apertar o botão junto à vitrine?» Linu lembra que o satélite transmitia sinais de rádio simples — o famoso «bip-bip».',
        choices: [
          { text: 'Предложи́ть за́пись сигна́ла и по́дпись к ней.', translation: 'Propor uma gravação do sinal com uma legenda.', next: 'final_sound' },
          { text: 'Сказа́ть, что звук не ну́жен: гла́вное — текст.', translation: 'Dizer que o som não é necessário: o principal é o texto.', next: 'final_dry' },
        ],
      },
      final_table: {
        emoji: '🎉',
        text: 'Ли́ну добавля́ет: «Менделе́ев оста́вил в табли́це пусты́е кле́тки и предсказа́л сво́йства ещё не откры́тых элеме́нтов. В сле́дующие го́ды бы́ли откры́ты га́ллий, ска́ндий и герма́ний, и прогно́з подтверди́лся». Ири́на Ви́кторовна улыба́ется: «Вот тепе́рь посети́тель остано́вится». Его́ этике́тка ви́сит в за́ле ря́дом с портре́том учёного.',
        translation:
          'Linu acrescenta: «Mendeleiev deixou casas vazias na tabela e previu as propriedades de elementos ainda não descobertos. Nos anos seguintes foram descobertos o gálio, o escândio e o germânio, e a previsão se confirmou». Irina Víktorovna sorri: «Agora sim o visitante vai parar para ler». A legenda dele fica pendurada na sala ao lado do retrato do cientista.',
        ending: {
          tone: 'bom',
          title: 'Precisa e interessante',
          message: 'Você desmontou as nominalizações sem perder nenhum fato — e ainda contou a melhor parte.',
        },
      },
      final_sound: {
        emoji: '🔊',
        text: 'Ли́ну предлага́ет: «Пусть у витри́ны звучи́т за́пись сигна́ла, а ря́дом бу́дет по́дпись: „Так звуча́л пе́рвый спу́тник“». Ири́на Ви́кторовна одобря́ет иде́ю. Че́рез ме́сяц де́ти толпя́тся у витри́ны и нажима́ют на кно́пку сно́ва и сно́ва. А Ли́ну слы́шит «бип-бип» да́же во сне.',
        translation:
          'Linu propõe: «Que junto à vitrine toque a gravação do sinal, e ao lado haja a legenda: „Assim soava o primeiro satélite“». Irina Víktorovna aprova a ideia. Um mês depois, as crianças se aglomeram na vitrine e apertam o botão sem parar. E Linu ouve «bip-bip» até em sonho.',
        ending: { tone: 'bom', title: 'Bip-bip', message: 'Texto claro e uma ideia viva: a ciência chegou ao público.' },
      },
      final_dry: {
        emoji: '📄',
        text: 'Ири́на Ви́кторовна вздыха́ет: «Текст пра́вильный, но сухо́й. Посети́тель прочита́ет и пойдёт да́льше». Она́ всё же вно́сит этике́тку в о́бщий спи́сок, но про́сит в сле́дующий раз ду́мать о зри́теле. Ли́ну понима́ет: нау́чный стиль — э́то не то́лько то́чность, но и интере́с.',
        translation:
          'Irina Víktorovna suspira: «O texto está correto, mas seco. O visitante vai ler e seguir adiante». Mesmo assim ela põe a legenda na lista geral, mas pede que da próxima vez ele pense no público. Linu entende: estilo científico não é só precisão, é também despertar interesse.',
        ending: { tone: 'neutro', title: 'Correto, mas seco', message: 'Os fatos estão certos; faltou o detalhe que faz o visitante parar.' },
      },
    },
  },
  {
    id: 'ru-h15',
    level: 'C2',
    cefr: 'C2',
    title: 'Я́сная Поля́на',
    emoji: '🍂',
    summary: 'Em Iásnaia Poliana, a propriedade de Tolstói, o Linu ouve provérbios de um velho zelador e descobre o túmulo mais simples da literatura russa.',
    cultural_context:
      'Liev Tolstói nasceu em 1828 em Iásnaia Poliana, perto de Tula, e lá escreveu «Guerra e Paz» e «Anna Kariênina»; em 1859 abriu na propriedade uma escola para crianças camponesas. Foi enterrado no bosque, num túmulo sem cruz nem lápide, no lugar onde, segundo uma brincadeira de infância, seu irmão Nikolai tinha escondido a «varinha verde» com o segredo da felicidade de todos.',
    start: 'start',
    glossary: [
      ['уса́дьба', 'propriedade rural, casa senhorial'],
      ['смотри́тель', 'zelador, guardião'],
      ['Ти́ше е́дешь — да́льше бу́дешь', 'devagar se vai ao longe'],
      ['Век живи́ — век учи́сь', 'vivendo e aprendendo'],
      ['Поспеши́шь — люде́й насмеши́шь', 'a pressa é inimiga da perfeição'],
      ['сей', 'este (arcaico, literário)'],
      ['ви́димо-неви́димо', 'uma infinidade'],
      ['завеща́ть', 'deixar como última vontade'],
    ],
    nodes: {
      start: {
        emoji: '🍂',
        text: 'Ра́нней о́сенью, когда́ берёзы уже́ тро́нуты зо́лотом, Ли́ну приезжа́ет в Я́сную Поля́ну. Здесь, в уса́дьбе под Ту́лой, роди́лся и провёл бо́льшую часть жи́зни Лев Никола́евич Толсто́й. Тиха́ берёзовая алле́я, веду́щая к до́му; неслы́шно ступа́ет по ней пингви́н. Старичо́к-смотри́тель Па́вел Ильи́ч встреча́ет его́ у воро́т. «Ти́ше е́дешь — да́льше бу́дешь, — говори́т он, — а у нас и во́все спеши́ть не при́нято».',
        translation:
          'No começo do outono, quando as bétulas já estão tocadas de ouro, Linu chega a Iásnaia Poliana. Aqui, nesta propriedade perto de Tula, nasceu e passou a maior parte da vida Liev Nikoláievitch Tolstói. Silenciosa é a alameda de bétulas que leva à casa; sem ruído caminha por ela um pinguim. O velho zelador Pável Ilitch o recebe no portão. «Devagar se vai ao longe — diz ele —, e aqui, então, ninguém tem pressa».',
        choices: [
          { text: 'Пойти́ пря́мо в дом-музе́й.', translation: 'Ir direto à casa-museu.', next: 'house' },
          { text: 'Снача́ла прогуля́ться по уса́дьбе.', translation: 'Primeiro passear pela propriedade.', next: 'walk' },
        ],
      },
      walk: {
        emoji: '🍎',
        text: 'Ли́ну бредёт ми́мо пруда́, где пла́вают опа́вшие ли́стья, и выхо́дит к я́блоневому са́ду. Я́блок в э́том году́ уроди́лось ви́димо-неви́димо, и ве́тки гну́тся к само́й земле́. Па́вел Ильи́ч, нагна́в его́, поднима́ет с травы́ я́блоко и протя́гивает го́стю: «Угоща́йтесь. Сам граф, быва́ло, сады́ сажа́л». Пингви́н надку́сывает я́блоко — ки́слое, души́стое, осе́ннее. «Куда́ же тепе́рь, — спра́шивает стари́к, — в дом и́ли в лес?»',
        translation:
          'Linu caminha sem pressa junto ao lago, onde boiam folhas caídas, e chega ao pomar de macieiras. Neste ano as maçãs vieram em quantidade sem fim, e os galhos se curvam até o chão. Pável Ilitch o alcança, apanha uma maçã da grama e a estende ao visitante: «Sirva-se. O próprio conde, naquele tempo, plantava pomares». O pinguim dá uma mordida na maçã — azeda, perfumada, outonal. «E agora, para onde — pergunta o velho —, para a casa ou para o bosque?»',
        choices: [
          { text: 'В дом.', translation: 'Para a casa.', next: 'house' },
          { text: 'В лес, к моги́ле Толсто́го.', translation: 'Para o bosque, ao túmulo de Tolstói.', next: 'forest' },
        ],
      },
      house: {
        emoji: '🏛️',
        text: 'В до́ме всё сохрани́лось так, как бы́ло при хозя́ине: кни́ги, часы́, ла́мпа на пи́сьменном столе́. Здесь напи́саны «Война́ и мир» и «А́нна Каре́нина». Па́вел Ильи́ч понижа́ет го́лос: «По́мните, как начина́ется „А́нна Каре́нина“? Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́ несчастли́ва по-сво́ему». Пото́м он подво́дит Ли́ну к окну́: «А вон — де́рево бе́дных. Под ним, быва́ло, жда́ли гра́фа крестья́не с про́сьбами».',
        translation:
          'Na casa tudo ficou como era no tempo do dono: os livros, o relógio, a lâmpada sobre a escrivaninha. Aqui foram escritos «Guerra e Paz» e «Anna Kariênina». Pável Ilitch baixa a voz: «Lembra como começa „Anna Kariênina“? Todas as famílias felizes se parecem entre si, cada família infeliz é infeliz à sua maneira». Depois ele leva Linu até a janela: «E ali — a árvore dos pobres. Debaixo dela, naquele tempo, os camponeses esperavam o conde com seus pedidos».',
        choices: [
          { text: 'Спроси́ть, заче́м крестья́не приходи́ли к гра́фу.', translation: 'Perguntar por que os camponeses vinham ao conde.', next: 'tree' },
          {
            text: 'Сказа́ть, что счастли́вые се́мьи, по Толсто́му, все ра́зные.',
            translation: 'Dizer que, segundo Tolstói, as famílias felizes são todas diferentes.',
            wrong:
              'A frase diz o contrário: as famílias felizes se parecem entre si («похо́жи друг на дру́га»); é cada família infeliz que é infeliz à sua maneira («по-сво́ему»).',
          },
        ],
      },
      tree: {
        emoji: '🌳',
        text: 'Па́вел Ильи́ч отвеча́ет не спеша́: «Шли к нему́ со всей окру́ги — кто за сове́том, кто за по́мощью, кто с бедо́ю. Граф выходи́л, выслу́шивал, а уж там — чем мог, тем и помога́л. Он ведь и шко́лу для крестья́нских дете́й здесь откры́л, и сам в ней учи́л». Помолча́в, стари́к добавля́ет: «Век живи́ — век учи́сь, говори́т наро́д, а Лев Никола́евич по сей посло́вице и жил». Ли́ну смо́трит на ста́рый вяз, и ка́жется ему́, что де́рево по́мнит всё.',
        translation:
          'Pável Ilitch responde sem pressa: «Vinham de toda a redondeza — uns por conselho, outros por ajuda, outros com sua desgraça. O conde saía, escutava, e daí — no que podia, ajudava. Pois ele até abriu aqui uma escola para os filhos dos camponeses, e ensinava nela pessoalmente». Depois de um silêncio, o velho acrescenta: «Vivendo e aprendendo, diz o povo, e Liev Nikoláievitch vivia segundo esse provérbio». Linu olha para o velho olmo, e lhe parece que a árvore se lembra de tudo.',
        choices: [
          { text: 'Пойти́ в лес, к моги́ле Толсто́го.', translation: 'Ir ao bosque, ao túmulo de Tolstói.', next: 'forest' },
          { text: 'Взгляну́ть на часы́ и поспеши́ть на авто́бус.', translation: 'Olhar o relógio e correr para o ônibus.', next: 'final_hurry' },
        ],
      },
      forest: {
        emoji: '🌲',
        text: 'Доро́га ухо́дит в лес, что зову́т Ста́рый Зака́з. Ли́ну ожида́ет уви́деть па́мятник, но ви́дит лишь невысо́кий зелёный хо́лмик — ни креста́, ни ка́мня, ни на́дписи. Смотри́тель, иду́щий ря́дом, объясня́ет: «Так он сам завеща́л. А похорони́ли его́ на том ме́сте, где, по де́тской леге́нде, брат Никола́й зары́л зелёную па́лочку». Ли́ну спра́шивает, что же бы́ло напи́сано на той па́лочке. Стари́к улыба́ется в усы́: «Та́йна всео́бщего сча́стья, не ме́ньше».',
        translation:
          'O caminho entra no bosque que chamam de Stari Zakaz. Linu espera ver um monumento, mas vê apenas um montinho verde e baixo — sem cruz, sem pedra, sem inscrição. O zelador, que caminha ao lado, explica: «Assim ele mesmo pediu. E o enterraram no lugar onde, segundo uma lenda de infância, o irmão Nikolai enterrou a varinha verde». Linu pergunta o que estava escrito naquela varinha. O velho sorri por baixo do bigode: «O segredo da felicidade de todos, nada menos».',
        choices: [
          { text: 'Постоя́ть мину́ту в тишине́.', translation: 'Ficar um minuto em silêncio.', next: 'silence' },
          {
            text: 'Поиска́ть на моги́ле на́дпись с и́менем писа́теля.',
            translation: 'Procurar no túmulo uma inscrição com o nome do escritor.',
            wrong: 'O texto diz que no túmulo não há cruz, nem pedra, nem inscrição («ни креста́, ни ка́мня, ни на́дписи») — foi o desejo do próprio Tolstói.',
          },
        ],
      },
      silence: {
        emoji: '🕯️',
        text: 'Ли́ну стои́т у хо́лмика, и лишь ли́стья шурша́т под ве́тром. Нет здесь ни пы́шных па́мятников, ни золочёных огра́д — одна́ тишина́, како́й ищу́т и не нахо́дят в города́х. Ду́мает Ли́ну о зелёной па́лочке: а вдруг та́йна и впрямь лежи́т в земле́, у сами́х корне́й? Па́вел Ильи́ч тро́гает его́ за крыло́: «Смерка́ется, пора́». Ли́ну ещё раз огля́дывается на лес.',
        translation:
          'Linu fica junto ao montinho, e só as folhas farfalham ao vento. Não há aqui monumentos pomposos nem grades douradas — apenas um silêncio daqueles que se procuram e não se acham nas cidades. Linu pensa na varinha verde: e se o segredo estiver mesmo na terra, junto às próprias raízes? Pável Ilitch toca-lhe a asa: «Está escurecendo, é hora». Linu olha mais uma vez para o bosque.',
        choices: [
          {
            text: 'Поблагодари́ть смотри́теля и попроси́ть посове́товать кни́гу.',
            translation: 'Agradecer ao zelador e pedir que indique um livro.',
            next: 'final_book',
          },
          { text: 'Поспеши́ть на после́дний авто́бус до Ту́лы.', translation: 'Correr para o último ônibus para Tula.', next: 'final_hurry' },
        ],
      },
      final_book: {
        emoji: '📖',
        text: 'Смотри́тель до́лго ду́мает, а пото́м говори́т: «Начни́те с „Де́тства“. Кни́га ма́ленькая, а сло́во в ней — зо́лото». Он вынима́ет из карма́на потёртый томи́к и протя́гивает Ли́ну: «Бери́те, бери́те, не оби́жайте старика́». Ли́ну уезжа́ет в су́мерках, прижима́я томи́к к груди́. Не зря, ду́мает он, в наро́де говоря́т: уче́нье — свет, а неуче́нье — тьма.',
        translation:
          'O zelador pensa um bom tempo e depois diz: «Comece por „Infância“. O livro é pequeno, mas cada palavra nele vale ouro». Ele tira do bolso um volume gasto e o estende a Linu: «Pegue, pegue, não faça essa desfeita a um velho». Linu parte ao anoitecer, apertando o livrinho contra o peito. Não é à toa, pensa ele, que o povo diz: o estudo é luz, e a ignorância, escuridão.',
        ending: {
          tone: 'bom',
          title: 'Um livro de presente',
          message: 'Você foi devagar, como manda o provérbio, e saiu de Iásnaia Poliana com o primeiro livro de Tolstói nas mãos.',
        },
      },
      final_hurry: {
        emoji: '🚌',
        text: 'Ли́ну спохвати́лся: авто́бус до Ту́лы ждать не ста́нет. На́скоро попроща́вшись, он спеши́т к воро́там, а смотри́тель гляди́т ему́ вслед, кача́я голово́й. «Поспеши́шь — люде́й насмеши́шь», — бормо́чет стари́к. Уже́ в авто́бусе Ли́ну понима́ет, как мно́го он не успе́л уви́деть. Что ж, ве́рно говоря́т: ти́ше е́дешь — да́льше бу́дешь.',
        translation:
          'Linu se deu conta: o ônibus para Tula não vai esperar. Despedindo-se às pressas, ele corre para o portão, e o zelador o acompanha com o olhar, balançando a cabeça. «Quem tem pressa vira motivo de riso», resmunga o velho. Já no ônibus, Linu percebe quanta coisa não conseguiu ver. Pois é, com razão se diz: devagar se vai ao longe.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Iásnaia Poliana pede tempo: o provérbio do zelador valia desde o portão.' },
      },
    },
  },
];
