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
      'A Catedral de São Basílio, com suas cúpulas coloridas, fica na Praça Vermelha e foi construída entre 1555 e 1561. No russo antigo, a palavra “кра́сный” também queria dizer “bonito”.',
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
          { text: '“Здра́вствуйте!”', translation: '“Olá!”', next: 'masha' },
          {
            text: '“До свида́ния!”',
            translation: '“Até logo!”',
            wrong: 'O Linu acabou de chegar! “До свида́ния” é para se despedir. Para cumprimentar, diga “Здра́вствуйте” ou “Приве́т”.',
          },
        ],
      },
      masha: {
        emoji: '👩',
        text: '“Здра́вствуйте! Я Ма́ша. А вы?”',
        translation: '“Olá! Eu sou a Macha. E você?”',
        choices: [
          { text: '“Я Ли́ну. Я пингви́н.”', translation: '“Eu sou o Linu. Eu sou um pinguim.”', next: 'turist' },
          {
            text: '“Я Ма́ша.”',
            translation: '“Eu sou a Macha.”',
            wrong: 'Ма́ша é o nome DELA. Ela perguntou “А вы?” (E você?). Responda com o seu nome: “Я Ли́ну”.',
          },
        ],
      },
      turist: {
        emoji: '🧳',
        text: '“Вы тури́ст?” — “Да, я тури́ст. Я из Брази́лии.”',
        translation: '“Você é turista?” — “Sim, eu sou turista. Eu sou do Brasil.”',
        choices: [
          { text: '“Что э́то?”', translation: '“O que é isto?”', next: 'sobor' },
          { text: '“Где метро́?”', translation: '“Onde fica o metrô?”', next: 'metro' },
        ],
      },
      sobor: {
        emoji: '⛪',
        text: '“Э́то собо́р Васи́лия Блаже́нного. Он о́чень краси́вый!”',
        translation: '“Esta é a Catedral de São Basílio. Ela é muito bonita!”',
        choices: [{ text: '“Да! Спаси́бо, Ма́ша!”', translation: '“Sim! Obrigado, Macha!”', next: 'foto' }],
      },
      foto: {
        emoji: '📸',
        text: 'Ма́ша: “Фо́то? Раз, два, три!” Тут и го́луби: оди́н, два, три, четы́ре, пять!',
        translation: 'Macha: “Foto? Um, dois, três!” Aqui também há pombos: um, dois, três, quatro, cinco!',
        choices: [{ text: '“Спаси́бо! До свида́ния, Ма́ша!”', translation: '“Obrigado! Até logo, Macha!”', next: 'final_foto' }],
      },
      final_foto: {
        emoji: '🎉',
        text: '“До свида́ния, Ли́ну!” Вот фо́то: Ли́ну, Ма́ша и пять голубе́й.',
        translation: '“Até logo, Linu!” Aqui está a foto: Linu, Macha e cinco pombos.',
        ending: { tone: 'bom', title: 'Foto na Praça Vermelha!', message: 'O Linu fez uma amiga e ganhou uma foto com a Catedral de São Basílio ao fundo.' },
      },
      metro: {
        emoji: '🚇',
        text: '“Метро́ там. Э́то ста́нция „Охо́тный Ряд‘.’ Ли́ну в метро́. А где Ма́ша?',
        translation: '“O metrô é ali. É a estação Okhótny Riad.” O Linu está no metrô. E cadê a Macha?',
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
      'Em São Petersburgo, de fim de maio a meados de julho, acontecem as “noites brancas”: o céu quase não escurece. Na temporada de navegação, as pontes levadiças sobre o rio Neva se abrem de madrugada para os navios passarem.',
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
        choices: [{ text: '“Приве́т! Что ты чита́ешь?”', translation: '“Oi! O que você está lendo?”', next: 'kniga' }],
      },
      kniga: {
        emoji: '📜',
        text: '“Приве́т! Я чита́ю стихи́ Пу́шкина. А ты говори́шь по-ру́сски?”',
        translation: '“Oi! Estou lendo poemas de Púchkin. E você fala russo?”',
        choices: [
          { text: '“Да, немно́го. Я говорю́ по-ру́сски и по-португа́льски.”', translation: '“Sim, um pouco. Eu falo russo e português.”', next: 'most' },
          {
            text: '“Нет, я не пишу́ пи́сьма.”',
            translation: '“Não, eu não escrevo cartas.”',
            wrong: 'Ela perguntou “ты говори́шь по-ру́сски?” (você fala russo?), com o verbo говори́ть (falar), e não писа́ть (escrever).',
          },
        ],
      },
      most: {
        emoji: '🌉',
        text: '“Меня́ зову́т Ве́ра. Смотри́, Дворцо́вый мост разво́дят!” Ли́ну говори́т: “Ой! Моя́ гости́ница на том берегу́!”',
        translation: '“Meu nome é Vera. Olha, estão abrindo a Ponte do Palácio!” O Linu diz: “Ai! Meu hotel fica na outra margem!”',
        choices: [
          { text: '“Ничего́. У меня́ есть вре́мя.”', translation: '“Tudo bem. Eu tenho tempo.”', next: 'chai' },
          { text: '“Не пробле́ма. Я хорошо́ пла́ваю!”', translation: '“Sem problema. Eu nado bem!”', next: 'plavat' },
        ],
      },
      chai: {
        emoji: '🫖',
        text: 'Ве́ра говори́т: “У меня́ есть те́рмос и чай. Ты хо́чешь?”',
        translation: 'Vera diz: “Eu tenho uma garrafa térmica e chá. Você quer?”',
        choices: [{ text: '“Да, спаси́бо!”', translation: '“Sim, obrigado!”', next: 'final_chai' }],
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
      'O Volga é o rio mais longo da Europa, com cerca de 3.500 km, e deságua no mar Cáspio. Os russos o chamam carinhosamente de “Во́лга-ма́тушка” (mãezinha Volga).',
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
        choices: [{ text: '“До́брое у́тро, ба́бушка!”', translation: '“Bom dia, vovó!”', next: 'utro' }],
      },
      utro: {
        emoji: '☀️',
        text: 'Ба́бушка говори́т: “Моя́ у́дочка в сара́е, а моя́ корзи́на на крыльце́. Мо́жешь лови́ть ры́бу и́ли собира́ть грибы́. То́лько кра́сные мухомо́ры не бери́: они́ ядови́тые!”',
        translation:
          'A vovó diz: “Minha vara de pescar está no galpão, e minha cesta está na varanda. Você pode pescar ou colher cogumelos. Só não pegue os amanitas vermelhos: são venenosos!”',
        choices: [
          { text: 'Ли́ну берёт у́дочку в сара́е и идёт к реке́.', translation: 'O Linu pega a vara no galpão e vai até o rio.', next: 'reka' },
          { text: 'Ли́ну берёт корзи́ну на крыльце́ и идёт в лес.', translation: 'O Linu pega a cesta na varanda e vai para o bosque.', next: 'les' },
          {
            text: 'Ли́ну и́щет у́дочку на крыльце́.',
            translation: 'O Linu procura a vara de pescar na varanda.',
            wrong: 'A vovó disse que a vara está “в сара́е” (no galpão). Na varanda (“на крыльце́”) está a cesta.',
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
        text: 'Ба́бушка жа́рит ры́бу на сковороде́. “Молоде́ц, Ли́ну! Ты настоя́щий рыба́к!” — говори́т она́.',
        translation: 'A vovó frita o peixe na frigideira. “Muito bem, Linu! Você é um pescador de verdade!” — diz ela.',
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
              'A vovó avisou: “кра́сные мухомо́ры не бери́: они́ ядови́тые” (não pegue os amanitas vermelhos: são venenosos). O “бе́лый гриб” (boleto) é o que se come.',
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
          { text: '“Я пойду́ на ры́нок!”', translation: '“Vou ao mercado!”', next: 'rynok' },
          { text: '“Снача́ла я вы́пью ча́ю в кафе́.”', translation: '“Primeiro vou tomar um chá no café.”', next: 'kafe' },
        ],
      },
      rynok: {
        emoji: '🛒',
        text: 'На ры́нке мно́го люде́й и мно́го сла́дкого. Продаве́ц улыба́ется: “Возьми́те чак-чак! Большо́й коро́бки уже́ нет, оста́лись то́лько ма́ленькие.”',
        translation: 'No mercado há muita gente e muito doce. O vendedor sorri: “Leve chak-chak! Caixa grande já não tem, sobraram só as pequenas.”',
        choices: [
          { text: '“Да́йте, пожа́луйста, три ма́ленькие коро́бки.”', translation: '“Me dê três caixas pequenas, por favor.”', next: 'pokupka' },
          {
            text: '“Да́йте, пожа́луйста, большу́ю коро́бку.”',
            translation: '“Me dê uma caixa grande, por favor.”',
            wrong: 'O vendedor disse “большо́й коро́бки уже́ нет”: нет + genitivo quer dizer que algo não existe ou acabou. Só sobraram as pequenas.',
          },
        ],
      },
      pokupka: {
        emoji: '🥟',
        text: 'Продаве́ц кладёт коро́бки в паке́т и спра́шивает: “А вы уже́ про́бовали эчпочма́к? Сего́дня у́тром моя́ жена́ напекла́ мно́го.”',
        translation: 'O vendedor põe as caixas numa sacola e pergunta: “E o senhor já provou echpochmak? Hoje de manhã minha esposa assou um monte.”',
        choices: [
          { text: '“Нет, ещё не про́бовал. Попро́бую!”', translation: '“Não, ainda não provei. Vou provar!”', next: 'echpochmak' },
          { text: '“Нет, спаси́бо. Я бу́ду у́жинать в гости́нице.”', translation: '“Não, obrigado. Vou jantar no hotel.”', next: 'final_simples' },
        ],
      },
      echpochmak: {
        emoji: '😋',
        text: 'Эчпочма́к — э́то треуго́льный пирожо́к с мя́сом, лу́ком и карто́шкой. Ли́ну съел оди́н, пото́м ещё оди́н. “Я возьму́ пять штук для друзе́й!” — сказа́л он.',
        translation:
          'O echpochmak é um pastel triangular com carne, cebola e batata. O Linu comeu um, depois mais um. “Vou levar cinco para os amigos!” — disse ele.',
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
            text: '“Я ещё не пил чай.”',
            translation: '“Eu ainda não tomei chá.”',
            wrong: 'O texto diz “Ли́ну пил чай”: é passado, ele já bebeu (e bebeu muito!). Ele pediu até mais bules.',
          },
        ],
      },
      pozdno: {
        emoji: '🕖',
        text: 'Бы́ло уже́ семь часо́в ве́чера. Ли́ну побежа́л на ры́нок, но ры́нок уже́ закры́лся. “Ничего́, за́втра у́тром я куплю́ пода́рки в аэропорту́”, — поду́мал он.',
        translation:
          'Já eram sete da noite. O Linu correu para o mercado, mas o mercado já tinha fechado. “Tudo bem, amanhã de manhã compro os presentes no aeroporto”, pensou ele.',
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
      'Almaty foi a capital do Cazaquistão até 1997, e seu nome está ligado a “алма”, maçã em cazaque. As montanhas Tian Shan, em volta da cidade, são o berço da maçã selvagem que deu origem às maçãs que comemos hoje; no Cazaquistão, o russo é falado ao lado do cazaque.',
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
          { text: '“Пойду́ в ряд с фру́ктами.”', translation: '“Vou para a fileira das frutas.”', next: 'frukty' },
          { text: '“Посмотрю́ сувени́ры.”', translation: '“Vou dar uma olhada nos suvenires.”', next: 'suveniry' },
          {
            text: '“Ура́! Мне сего́дня два́дцать пять лет!”',
            translation: '“Oba! Hoje eu faço vinte e cinco anos!”',
            wrong: 'Quem faz aniversário é a Айгу́ль: “его́ подру́ге… исполня́ется два́дцать пять лет”. O dativo (подру́ге, ей) mostra de quem é a idade.',
          },
        ],
      },
      frukty: {
        emoji: '🍎',
        text: 'Продаве́ц протя́гивает Ли́ну большо́е кра́сное я́блоко: “Попро́буйте! Э́то апо́рт, знамени́тый алмати́нский сорт.” Ли́ну про́бует, и я́блоко ему́ о́чень нра́вится.',
        translation:
          'O vendedor estende ao Linu uma maçã grande e vermelha: “Prove! É a aport, a famosa variedade de Almaty.” O Linu prova, e gosta muito da maçã.',
        choices: [
          {
            text: '“Како́е вку́сное! Ду́маю, Айгу́ль то́же понра́вится. Да́йте, пожа́луйста, два килогра́мма.”',
            translation: '“Que gostosa! Acho que a Aigul também vai gostar. Me dê dois quilos, por favor.”',
            next: 'vesy',
          },
        ],
      },
      vesy: {
        emoji: '⚖️',
        text: 'Продаве́ц кладёт я́блоки на весы́. “Подожди́те мину́тку, я ещё взве́шиваю, — говори́т он. — А пока́ возьми́те паке́т.”',
        translation: 'O vendedor coloca as maçãs na balança. “Espere um minutinho, ainda estou pesando — diz ele. — Enquanto isso, pegue uma sacola.”',
        choices: [
          { text: 'Ли́ну берёт паке́т и ждёт.', translation: 'O Linu pega a sacola e espera.', next: 'vzvesil' },
          {
            text: 'Ли́ну сра́зу пла́тит и ухо́дит без я́блок.',
            translation: 'O Linu paga na hora e vai embora sem as maçãs.',
            wrong: 'O vendedor disse “я ещё взве́шиваю”: o imperfectivo mostra uma ação em andamento. Ele ainda não terminou de pesar; é só esperar um pouco.',
          },
        ],
      },
      vzvesil: {
        emoji: '🛍️',
        text: '“Всё, взве́сил: ро́вно два килогра́мма!” Ли́ну пла́тит, и продаве́ц даёт ему́ ещё одно́ я́блоко. “А э́то вам, за улы́бку!”',
        translation: '“Pronto, pesei: dois quilos certinhos!” O Linu paga, e o vendedor lhe dá mais uma maçã. “E esta é para o senhor, pelo sorriso!”',
        choices: [{ text: '“Большо́е спаси́бо!” Ли́ну идёт к Айгу́ль.', translation: '“Muito obrigado!” O Linu vai para a casa da Aigul.', next: 'po_doroge' }],
      },
      po_doroge: {
        emoji: '🧒',
        text: 'По доро́ге, в па́рке, Ли́ну встреча́ет дете́й. Они́ ви́дят я́блоки и про́сят: “Да́йте нам, пожа́луйста, я́блоко!” Ли́ну ду́мает, что де́лать.',
        translation:
          'No caminho, no parque, o Linu encontra umas crianças. Elas veem as maçãs e pedem: “Dê uma maçã para a gente, por favor!” O Linu pensa no que fazer.',
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
        text: 'Айгу́ль открыва́ет паке́т и смеётся: “Апо́рт! Мой люби́мый сорт!” Ли́ну расска́зывает ей о база́ре, и они́ вме́сте едя́т я́блоки. “Спаси́бо тебе́ за пода́рок!” — говори́т Айгу́ль.',
        translation:
          'Aigul abre a sacola e ri: “Aport! Minha variedade favorita!” O Linu conta a ela sobre o bazar, e os dois comem maçãs juntos. “Obrigada pelo presente!” — diz Aigul.',
        ending: {
          tone: 'bom',
          title: 'Presente com gosto de Almaty',
          message: 'O Linu levou a maçã mais famosa de Almaty e ainda alegrou as crianças do parque.',
        },
      },
      final_pusto: {
        emoji: '🧺',
        text: 'Де́ти ра́дуются, но в паке́те остаю́тся то́лько два я́блока. Айгу́ль смо́трит в паке́т и смеётся. “Ничего́, Ли́ну! Гла́вное, что ты пришёл.”',
        translation:
          'As crianças ficam felizes, mas na sacola sobram só duas maçãs. Aigul olha dentro da sacola e ri. “Não tem problema, Linu! O importante é que você veio.”',
        ending: { tone: 'neutro', title: 'Sacola quase vazia', message: 'Generosidade é bonito, mas o presente da Aigul ficou pequenininho. Tente de novo!' },
      },
      suveniry: {
        emoji: '🪕',
        text: 'В сувени́рном ряду́ Ли́ну ви́дит до́мбру, каза́хский инструме́нт с двумя́ стру́нами. “Возьми́те, сыгра́йте!” — предлага́ет продаве́ц. Ли́ну до́лго игра́ет, и звук ему́ о́чень нра́вится.',
        translation:
          'Na fileira de suvenires, o Linu vê uma dombra, instrumento cazaque de duas cordas. “Pegue, toque!” — oferece o vendedor. O Linu toca por um bom tempo e adora o som.',
        choices: [
          { text: 'Ли́ну покупа́ет до́мбру для Айгу́ль.', translation: 'O Linu compra a dombra para a Aigul.', next: 'final_dombra' },
          {
            text: '“Мо́жет быть, лу́чше фру́кты…” Ли́ну идёт в ряд с фру́ктами.',
            translation: '“Talvez frutas sejam melhor…” O Linu vai para a fileira das frutas.',
            next: 'frukty',
          },
        ],
      },
      final_dombra: {
        emoji: '🎶',
        text: 'Айгу́ль берёт до́мбру и сра́зу начина́ет игра́ть: оказа́лось, в де́тстве она́ учи́лась в музыка́льной шко́ле! Все го́сти пою́т и танцу́ют. “Тако́го пода́рка мне ещё никто́ не дари́л!” — говори́т она́ Ли́ну.',
        translation:
          'Aigul pega a dombra e começa a tocar na hora: descobriu-se que na infância ela estudou numa escola de música! Todos os convidados cantam e dançam. “Ninguém nunca me deu um presente assim!” — diz ela ao Linu.',
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
        text: 'В ваго́не Ли́ну встреча́ет проводни́ца. “Я рабо́таю проводни́цей уже́ два́дцать лет, — говори́т она́. — Кипято́к в ваго́не есть всегда́, так что чай мо́жно пить хоть це́лый день!”',
        translation:
          'No vagão, a comissária recebe o Linu. “Trabalho como comissária há vinte anos — diz ela. — Sempre há água fervente no vagão, então dá para tomar chá o dia inteiro!”',
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
            text: 'Сказа́ть ба́бушке: “Вы, наве́рное, е́дете в Сиби́рь в пе́рвый раз?”',
            translation: 'Dizer à avó: “A senhora deve estar indo à Sibéria pela primeira vez?”',
            wrong: 'A avó “е́здит” a Irkutsk todo verão: o verbo е́здить indica uma viagem habitual. Quem vai (е́дет) pela primeira vez é o Micha.',
          },
        ],
      },
      noch: {
        emoji: '🌲',
        text: 'Ночь. По́езд е́дет че́рез тайгу́, и на ста́нциях лю́ди выхо́дят на перро́н. На большо́й ста́нции по́езд стои́т два́дцать мину́т. Проводни́ца предупрежда́ет: “Мо́жно вы́йти, но далеко́ не уходи́те!”',
        translation:
          'Noite. O trem atravessa a taiga, e nas estações as pessoas descem para a plataforma. Numa estação grande o trem para vinte minutos. A comissária avisa: “Podem descer, mas não se afastem!”',
        choices: [
          { text: 'Вы́йти на перро́н и купи́ть пирожки́.', translation: 'Descer na plataforma e comprar pastéis.', next: 'peron' },
          { text: 'Оста́ться в ваго́не и лечь спать.', translation: 'Ficar no vagão e ir dormir.', next: 'irkutsk' },
          {
            text: 'Уйти́ на час погуля́ть по го́роду.',
            translation: 'Sair para passear uma hora pela cidade.',
            wrong:
              'O trem para só vinte minutos, e a comissária disse “далеко́ не уходи́те”: não se afastem. Com o prefixo у-, уйти́ é ir embora — e o trem partiria sem o Linu.',
          },
        ],
      },
      peron: {
        emoji: '🥟',
        text: 'На перро́не ме́стные жи́тели продаю́т пирожки́ с капу́стой и варёную карто́шку. Ли́ну покупа́ет пирожки́ для всего́ купе́. Вдруг он слы́шит гудо́к и бы́стро вхо́дит в ваго́н. Ми́ша смеётся: “Успе́л!”',
        translation:
          'Na plataforma, moradores vendem pastéis de repolho e batata cozida. Linu compra pastéis para a cabine inteira. De repente ouve o apito e entra depressa no vagão. Micha ri: “Chegou a tempo!”',
        choices: [{ text: 'Угости́ть сосе́дей пирожка́ми.', translation: 'Oferecer os pastéis aos vizinhos.', next: 'irkutsk' }],
      },
      irkutsk: {
        emoji: '🏙️',
        text: 'Наконе́ц по́езд прихо́дит в Ирку́тск. Ли́ну выхо́дит из ваго́на вме́сте с Ми́шей и ба́бушкой. Ми́ша говори́т: “Мы е́дем на Байка́л, в посёлок Листвя́нка. Пое́хали с на́ми!”',
        translation:
          'Finalmente o trem chega a Irkutsk. Linu desce do vagão junto com o Micha e a avó. Micha diz: “Nós vamos ao Baikal, à vila de Listvianka. Vem com a gente!”',
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
        text: 'Ли́ну во Владивосто́ке. Здесь, на берегу́ Япо́нского мо́ря, конча́ется Транссиби́рская магистра́ль. Го́род стои́т на холма́х вокру́г бу́хты. Ли́ну ду́мает: “Е́сли бы у меня́ бы́ло бо́льше вре́мени, я бы оста́лся здесь на ме́сяц!”',
        translation:
          'Linu está em Vladivostok. Aqui, à beira do Mar do Japão, termina a Transiberiana. A cidade fica sobre morros em volta de uma baía. Linu pensa: “Se eu tivesse mais tempo, ficaria aqui um mês!”',
        choices: [
          { text: 'Спроси́ть сове́та в гости́нице.', translation: 'Pedir conselho no hotel.', next: 'gostinica' },
          { text: 'Сра́зу пойти́ на на́бережную.', translation: 'Ir direto para a orla.', next: 'naberezhnaya' },
        ],
      },
      gostinica: {
        emoji: '🛎️',
        text: 'Ли́ну подхо́дит к администра́тору: “Извини́те, не могли́ бы вы посове́товать, что посмотре́ть за оди́н день?” Же́нщина отвеча́ет, что обяза́тельно на́до уви́деть Ру́сский мост. Ещё она́ говори́т, что океана́риум нахо́дится на о́строве Ру́сский, за мосто́м.',
        translation:
          'Linu se aproxima da recepcionista: “Com licença, a senhora poderia me aconselhar o que ver em um dia?” A mulher responde que é preciso ver a Ponte Russki sem falta. Ela diz também que o oceanário fica na ilha Russki, do outro lado da ponte.',
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
          { text: 'Отве́тить: “С удово́льствием! Я бы попро́бовал”.', translation: 'Responder: “Com prazer! Eu provaria”.', next: 'grebeshki' },
          {
            text: 'Отве́тить: “Нет, спаси́бо, я не уме́ю лови́ть ры́бу”.',
            translation: 'Responder: “Não, obrigado, eu não sei pescar”.',
            wrong:
              'O pescador não convidou o Linu para pescar. Ele perguntou se o Linu queria provar vieiras: “не хо́чет ли он попро́бовать” (se ele não quer provar).',
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
            wrong: 'Ninguém pediu que o Linu tirasse fotos. As crianças querem sair na foto COM ele: “сфотографи́роваться с пингви́ном”.',
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
        text: 'На берегу́ о́строва ти́хо. Ли́ну сиди́т на камня́х и смо́трит на Япо́нское мо́ре. Он ду́мает: “Е́сли бы я жил здесь, я бы приходи́л сюда́ ка́ждый ве́чер”.',
        translation:
          'Na costa da ilha está tudo em silêncio. Linu se senta nas pedras e olha o Mar do Japão. Ele pensa: “Se eu morasse aqui, viria para cá toda noite”.',
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
        text: 'В порту́ стои́т ледоко́л “Ле́нин” — пе́рвое в ми́ре надво́дное су́дно с а́томной устано́вкой. Сейча́с э́то музе́й, кото́рый ка́ждый год посеща́ют ты́сячи тури́стов. Гид расска́зывает, что ледоко́л рабо́тал в А́рктике три́дцать лет.',
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
        text: 'В тураге́нтстве Ли́ну объясня́ют: “Авто́бус отправля́ется в де́вять часо́в ве́чера. В гру́ппе бу́дет двена́дцать тури́стов”. Гид предупрежда́ет, что сия́ние мо́жно и не уви́деть: всё зави́сит от пого́ды.',
        translation:
          'Na agência explicam ao Linu: “O ônibus sai às nove da noite. O grupo terá doze turistas”. O guia avisa que é possível não ver a aurora: tudo depende do tempo.',
        choices: [
          { text: 'Наде́ть две па́ры тёплых носко́в и пое́хать.', translation: 'Calçar dois pares de meias quentes e ir.', next: 'tundra' },
          {
            text: 'Прийти́ к авто́бусу в де́вять утра́.',
            translation: 'Chegar ao ônibus às nove da manhã.',
            wrong: 'O ônibus sai às nove da NOITE: “в де́вять часо́в ве́чера”. E a aurora só se vê no escuro!',
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
            wrong: 'Vera disse o contrário: os esquilos são mansos (ручны́е) e “не боя́щиеся люде́й”, isto é, não têm medo das pessoas.',
          },
        ],
      },
      belka: {
        emoji: '🌰',
        text: 'Бе́лка берёт оре́х пря́мо из ла́пы Ли́ну и убега́ет на сосну́. Ве́ра смеётся: “Тепе́рь ты настоя́щий жи́тель Академгородка́!” Пото́м она́ ведёт его́ к па́мятнику, о кото́ром Ли́ну давно́ слы́шал.',
        translation:
          'O esquilo pega a noz direto da nadadeira do Linu e sobe correndo num pinheiro. Vera ri: “Agora você é um verdadeiro morador do Akademgorodok!” Depois ela o leva a um monumento de que o Linu ouvia falar havia tempos.',
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
            wrong: 'O texto diz que estudam plantas “расту́щие в Сиби́ри” (que crescem na Sibéria) e um trigo para clima frio, não plantas tropicais.',
          },
        ],
      },
      final_seminar: {
        emoji: '🧬',
        text: 'Семина́р дли́тся три часа́. Ли́ну понима́ет не всё, одна́ко запомина́ет мно́го но́вых слов. Осо́бенно его́ удивля́ет сло́во “бело́к”: здесь э́то не бе́лка, а протеи́н!',
        translation:
          'O seminário dura três horas. Linu não entende tudo, porém guarda muitas palavras novas. O que mais o surpreende é a palavra “бело́к”: aqui não é esquilo, e sim proteína!',
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
        text: 'Сочи́нский дендра́рий был со́здан бо́лее ста лет наза́д. Гуля́я по его́ алле́ям, Ли́ну ви́дит расте́ния, привезённые со всего́ ми́ра. У вхо́да виси́т объявле́ние: “Приглаша́ются волонтёры. Заявле́ния принима́ются по электро́нной по́чте”.',
        translation:
          'O arboreto de Sochi foi criado há mais de cem anos. Passeando pelas alamedas, o Linu vê plantas trazidas do mundo inteiro. Na entrada há um aviso: “Procuram-se voluntários. Inscrições são aceitas por e-mail”.',
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
        text: 'Ли́ну сади́тся на скамью́ и открыва́ет ноутбу́к. Он по́мнит, что в официа́льном письме́ к незнако́мым лю́дям обраща́ются на “вы”, а “Вы” пи́шут с большо́й бу́квы. Как ему́ нача́ть письмо́?',
        translation:
          'Linu se senta num banco e abre o notebook. Ele lembra que, numa carta formal, trata-se desconhecidos por “вы”, e esse “Вы” se escreve com maiúscula. Como começar a carta?',
        choices: [
          {
            text: '“Уважа́емая администра́ция! Прошу́ рассмотре́ть мою́ кандидату́ру в ка́честве волонтёра”.',
            translation: '“Prezada administração! Solicito que considerem minha candidatura como voluntário”.',
            next: 'otvet',
          },
          {
            text: '“Приве́т! Как дела́? Хочу́ у вас порабо́тать!”',
            translation: '“Oi! Tudo bem? Quero trabalhar aí com vocês!”',
            wrong:
              'Esse começo é informal demais para uma instituição. Numa carta oficial usa-se “Уважа́емые…” / “Уважа́емая…”, o tratamento “Вы” e fórmulas como “Прошу́ рассмотре́ть…”.',
          },
        ],
      },
      otvet: {
        emoji: '📨',
        text: 'Че́рез два дня прихо́дит отве́т: “Ва́ше заявле́ние рассмо́трено. Вы при́няты в програ́мму волонтёров. Про́сим Вас яви́ться в понеде́льник в 9:00, име́я при себе́ па́спорт”.',
        translation:
          'Dois dias depois chega a resposta: “Sua inscrição foi analisada. O senhor foi aceito no programa de voluntários. Pedimos que compareça na segunda-feira às 9h, levando consigo o passaporte”.',
        choices: [
          { text: 'Прийти́ в понеде́льник у́тром с па́спортом.', translation: 'Chegar na segunda de manhã com o passaporte.', next: 'rabota' },
          {
            text: 'Прийти́ во вто́рник без докуме́нтов.',
            translation: 'Chegar na terça sem documentos.',
            wrong: 'A carta pede segunda-feira (понеде́льник) às 9h, “име́я при себе́ па́спорт”, isto é, levando o passaporte.',
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
        text: 'Ли́ну прилете́л в Петропа́вловск-Камча́тский. Из окна́ гости́ницы ви́дно сра́зу три вулка́на. Гид Ната́ша предлага́ет два маршру́та: подня́ться на Ава́чинский вулка́н и́ли слета́ть на вертолёте в Доли́ну ге́йзеров. “Реша́й сам, — улыба́ется она́, — то́лько не тяни́ кота́ за хвост!”',
        translation:
          'Linu chegou de avião a Petropávlovsk-Kamtchátski. Da janela do hotel dá para ver três vulcões de uma vez. A guia Natacha propõe dois roteiros: subir o vulcão Avatchinski ou ir de helicóptero ao Vale dos Gêiseres. “Decida você — ela sorri —, só não fique enrolando!”',
        choices: [
          { text: 'Подня́ться на Ава́чинский вулка́н.', translation: 'Subir o vulcão Avatchinski.', next: 'avacha' },
          { text: 'Слета́ть в Доли́ну ге́йзеров.', translation: 'Ir de helicóptero ao Vale dos Gêiseres.', next: 'geysers' },
        ],
      },
      avacha: {
        emoji: '🥾',
        text: 'Они́ выхо́дят в пять утра́ и к обе́ду дохо́дят до ла́геря у подно́жия. Да́льше тропа́ идёт вверх по ка́мням и сне́гу. Ната́ша предупрежда́ет: “Наверху́ мы не перейдём кра́тер, а обойдём его́ по кра́ю: внутри́ ядови́тые га́зы”. Ли́ну кива́ет и идёт сле́дом.',
        translation:
          'Eles saem às cinco da manhã e na hora do almoço chegam ao acampamento no pé do vulcão. Dali a trilha sobe por pedras e neve. Natacha avisa: “Lá em cima não vamos atravessar a cratera, vamos contorná-la pela borda: lá dentro há gases tóxicos”. Linu concorda com a cabeça e vai atrás dela.',
        choices: [
          { text: 'Обойти́ кра́тер по кра́ю вме́сте с Ната́шей.', translation: 'Contornar a cratera pela borda junto com a Natacha.', next: 'top' },
          {
            text: 'Перейти́ кра́тер посереди́не, так бы́стрее.',
            translation: 'Atravessar a cratera pelo meio, assim é mais rápido.',
            wrong:
              'Natacha disse o contrário: “перейти́” é atravessar, “обойти́” é contornar. Eles vão contornar a cratera pela borda (“обойдём по кра́ю”), porque lá dentro há gases tóxicos.',
          },
        ],
      },
      top: {
        emoji: '🏔️',
        text: 'На верши́не па́хнет се́рой, из тре́щин идёт дым. Вдруг под нога́ми что-то гуди́т, и у Ли́ну душа́ ухо́дит в пя́тки. “Не ве́шай нос! — смеётся Ната́ша. — Э́то обы́чное дыха́ние вулка́на”. Вокру́г видны́ Ти́хий океа́н и сосе́дний Коря́кский вулка́н.',
        translation:
          'No topo tem cheiro de enxofre, e sai fumaça das fendas. De repente algo ronca sob os pés, e Linu morre de medo. “Não desanime! — ri Natacha. — É a respiração normal do vulcão”. Em volta se veem o Oceano Pacífico e o vizinho vulcão Koriakski.',
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
        ending: { tone: 'bom', title: 'No topo do Avatchinski', message: 'Você entendeu o “обойти́” e subiu e desceu o vulcão em segurança.' },
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
        text: 'Вертолёт лети́т над леса́ми и вулка́нами почти́ час. В Доли́не ге́йзеров инспе́ктор запове́дника объясня́ет пра́вила. С деревя́нных доро́жек сходи́ть нельзя́: земля́ вокру́г горя́чая, а под ней кипя́ток. “Кто сойдёт с доро́жки, тот мо́жет провали́ться”, — стро́го говори́т он.',
        translation:
          'O helicóptero voa quase uma hora sobre florestas e vulcões. No Vale dos Gêiseres, o fiscal da reserva explica as regras. É proibido sair das passarelas de madeira: a terra em volta é quente, e embaixo dela há água fervendo. “Quem sair da passarela pode afundar”, diz ele, sério.',
        choices: [
          { text: 'Идти́ то́лько по доро́жкам.', translation: 'Andar só pelas passarelas.', next: 'bear' },
          {
            text: 'Сойти́ с доро́жки, что́бы потро́гать во́ду.',
            translation: 'Sair da passarela para tocar na água.',
            wrong: 'O fiscal avisou que é proibido sair das passarelas (“с доро́жек сходи́ть нельзя́”): a terra é quente e dá para afundar em água fervente.',
          },
        ],
      },
      bear: {
        emoji: '🐻',
        text: 'На друго́й стороне́ ре́чки Ли́ну замеча́ет бу́рого медве́дя. Медве́дь споко́йно ло́вит ры́бу и на люде́й не смо́трит. Инспе́ктор ти́хо говори́т: “Не бу́дем к нему́ подходи́ть. Обойдём э́то ме́сто и подойдём к большо́му ге́йзеру с друго́й стороны́”.',
        translation:
          'Do outro lado do riacho, Linu nota um urso-pardo. O urso pesca tranquilamente e nem olha para as pessoas. O fiscal diz baixinho: “Não vamos nos aproximar dele. Vamos contornar este lugar e chegar ao gêiser grande pelo outro lado”.',
        choices: [
          { text: 'Обойти́ медве́дя стороно́й.', translation: 'Passar longe do urso.', next: 'final_geyser' },
          { text: 'Подойти́ побли́же ра́ди хоро́шего сни́мка.', translation: 'Chegar mais perto para tirar uma boa foto.', next: 'final_bear' },
        ],
      },
      final_geyser: {
        emoji: '💨',
        text: 'Они́ обхо́дят медве́дя стороно́й и захо́дят на смотрову́ю площа́дку как раз во́время. Ге́йзер Велика́н выбра́сывает высоко́ в не́бо столб воды́ и па́ра. “Тебе́ повезло́, — говори́т инспе́ктор. — Он просыпа́ется раз в не́сколько часо́в”. Ли́ну забыва́ет про всё на све́те.',
        translation:
          'Eles passam longe do urso e chegam ao mirante bem na hora. O gêiser Velikan lança bem alto no céu uma coluna de água e vapor. “Você teve sorte — diz o fiscal. — Ele só desperta a cada tantas horas”. Linu esquece tudo o mais no mundo.',
        ending: { tone: 'bom', title: 'O gigante acordou', message: 'Você respeitou as regras da reserva e viu o gêiser Velikan em ação.' },
      },
      final_bear: {
        emoji: '🐻',
        text: 'Ли́ну де́лает шаг к ре́чке, но инспе́ктор сра́зу его́ остана́вливает. “Ты что, с ума́ сошёл? Э́то ди́кий зверь, а не игру́шка!” Пришло́сь верну́ться к вертолёту ра́ньше вре́мени. Так Ли́ну и не уви́дел ге́йзер Велика́н.',
        translation:
          'Linu dá um passo em direção ao riacho, mas o fiscal o detém na hora. “Ficou maluco? É um animal selvagem, não um brinquedo!” Tiveram de voltar ao helicóptero antes da hora. E assim Linu acabou não vendo o gêiser Velikan.',
        ending: {
          tone: 'neutro',
          title: 'Volta antes da hora',
          message: 'Na Kamtchatka os ursos são donos da casa: o certo era “обойти́ стороно́й”, passar longe.',
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
        text: 'Ли́ну пригласи́ли на ра́дио в Екатеринбу́рге. Сего́дня в прямо́м эфи́ре спор: бума́жная кни́га и́ли электро́нная? Веду́щий, Оле́г Петро́вич, представля́ет госте́й: библиоте́каря Ве́ру и программи́ста Артёма. “А наш тре́тий гость, Ли́ну, чита́ет всё подря́д, — говори́т он. — Ли́ну, с кем вы согла́сны?”',
        translation:
          'Linu foi convidado para um programa de rádio em Ecaterimburgo. Hoje, ao vivo, o debate é: livro de papel ou eletrônico? O apresentador, Oleg Petróvitch, apresenta os convidados: a bibliotecária Vera e o programador Artiom. “E o nosso terceiro convidado, Linu, lê de tudo — diz ele. — Linu, com quem o senhor concorda?”',
        choices: [
          { text: 'Снача́ла послу́шать аргуме́нты Ве́ры.', translation: 'Primeiro ouvir os argumentos da Vera.', next: 'vera' },
          { text: 'Снача́ла послу́шать аргуме́нты Артёма.', translation: 'Primeiro ouvir os argumentos do Artiom.', next: 'artem' },
        ],
      },
      vera: {
        emoji: '📚',
        text: 'Ве́ра говори́т споко́йно, но уве́ренно: “Я счита́ю, что бума́жная кни́га лу́чше для па́мяти. Во-пе́рвых, мы запомина́ем, где на страни́це стоя́ла фра́за. Во-вторы́х, кни́га не присыла́ет уведомле́ний и не отвлека́ет. Кро́ме того́, у неё никогда́ не садя́тся батаре́йки!”',
        translation:
          'Vera fala com calma, mas com firmeza: “Eu acho que o livro de papel é melhor para a memória. Em primeiro lugar, a gente lembra onde a frase estava na página. Em segundo lugar, o livro não manda notificações e não distrai. Além disso, a bateria dele nunca acaba!”',
        choices: [
          { text: 'Тепе́рь послу́шать Артёма.', translation: 'Agora ouvir o Artiom.', next: 'artem' },
          {
            text: 'Сказа́ть, что Ве́ра защища́ет электро́нные кни́ги.',
            translation: 'Dizer que a Vera defende os livros eletrônicos.',
            wrong: 'Vera defende o livro de papel: “я счита́ю, что бума́жная кни́га лу́чше” — eu acho que o livro de papel é melhor.',
          },
        ],
      },
      artem: {
        emoji: '📱',
        text: 'Артём не согла́сен: “По-мо́ему, спор вообще́ не о том. Электро́нная кни́га ве́сит две́сти гра́ммов, а в ней ты́сячи книг. С её по́мощью мо́жно чита́ть в метро́, в по́езде, но́чью без ла́мпы. Тем не ме́нее я не спо́рю: па́хнет она́ ху́же”, — смеётся он.',
        translation:
          'Artiom discorda: “Na minha opinião, o debate nem é sobre isso. Um leitor eletrônico pesa duzentos gramas e tem milhares de livros. Com ele dá para ler no metrô, no trem, à noite sem lâmpada. Mesmo assim, não discuto: o cheiro dele é pior”, ri ele.',
        choices: [{ text: 'Отве́тить веду́щему.', translation: 'Responder ao apresentador.', next: 'question' }],
      },
      question: {
        emoji: '🎙️',
        text: 'Веду́щий повора́чивается к Ли́ну: “Ита́к, ва́ше мне́ние? Слу́шатели ждут”. Ли́ну поправля́ет микрофо́н. Он зна́ет, что в эфи́ре на́до говори́ть я́сно и аргументи́рованно. Как он отве́тит?',
        translation:
          'O apresentador se vira para Linu: “Então, qual é a sua opinião? Os ouvintes estão esperando”. Linu ajeita o microfone. Ele sabe que no ar é preciso falar com clareza e com argumentos. Como ele vai responder?',
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
        text: 'Ли́ну говори́т: “С одно́й стороны́, я люблю́ писа́ть на поля́х и дари́ть кни́ги друзья́м. С друго́й стороны́, в доро́гу я беру́ то́лько электро́нную кни́гу. Поэ́тому я счита́ю, что выбира́ть вообще́ не обяза́тельно”. Веду́щий дово́лен: “Вот э́то аргуме́нт!”',
        translation:
          'Linu diz: “Por um lado, eu adoro escrever nas margens e dar livros de presente aos amigos. Por outro lado, em viagem eu levo só o livro eletrônico. Por isso acho que nem é preciso escolher”. O apresentador fica satisfeito: “Isso sim é um argumento!”',
        choices: [{ text: 'Приня́ть звоно́к слу́шательницы.', translation: 'Atender a ligação de uma ouvinte.', next: 'call' }],
      },
      paper: {
        emoji: '📖',
        text: 'Ли́ну говори́т: “По-мо́ему, пра́вы о́ба. Тем не ме́нее я выбира́ю бума́гу: кни́га для меня́ — э́то ещё и пода́рок, и па́мять”. Ве́ра улыба́ется, а Артём поднима́ет бро́ви. “Зна́чит, два про́тив одного́”, — шу́тит веду́щий.',
        translation:
          'Linu diz: “Na minha opinião, os dois têm razão. Mesmo assim, eu escolho o papel: para mim, um livro também é presente e lembrança”. Vera sorri, e Artiom levanta as sobrancelhas. “Então são dois contra um”, brinca o apresentador.',
        choices: [{ text: 'Приня́ть звоно́к слу́шательницы.', translation: 'Atender a ligação de uma ouvinte.', next: 'call' }],
      },
      call: {
        emoji: '☎️',
        text: 'В студи́ю звони́т учи́тельница из Ни́жнего Таги́ла. “Я счита́ю, что гла́вное — не фо́рмат, а привы́чка, — говори́т она́. — Мои́ ученики́ чита́ют ма́ло, и им всё равно́, с бума́ги и́ли с экра́на. Как, по-ва́шему, привле́чь дете́й к чте́нию?”',
        translation:
          'Uma professora de Níjni Taguil liga para o estúdio. “Eu acho que o principal não é o formato, e sim o hábito — diz ela. — Meus alunos leem pouco, e tanto faz para eles se é no papel ou na tela. Na opinião de vocês, como atrair as crianças para a leitura?”',
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
            wrong: 'A professora disse o contrário: “мои́ ученики́ чита́ют ма́ло” — meus alunos leem pouco. Ela quer ideias para atraí-los à leitura.',
          },
        ],
      },
      final_club: {
        emoji: '🎉',
        text: 'Ли́ну отвеча́ет: “Во-пе́рвых, чита́ть ну́жно вме́сте, а не в одино́чку. Во-вторы́х, пусть де́ти са́ми выбира́ют кни́ги — хоть ко́миксы”. Ве́ра тут же приглаша́ет всех в кни́жный клуб свое́й библиоте́ки, а Артём обеща́ет сде́лать для него́ сайт. По́сле эфи́ра веду́щий зовёт Ли́ну на переда́чу ещё раз.',
        translation:
          'Linu responde: “Em primeiro lugar, é preciso ler juntos, e não sozinho. Em segundo lugar, deixem as crianças escolherem os livros — nem que sejam quadrinhos”. Vera na hora convida todos para o clube do livro da sua biblioteca, e Artiom promete fazer um site para ele. Depois do programa, o apresentador chama Linu para voltar outra vez.',
        ending: { tone: 'bom', title: 'Convidado de novo', message: 'Argumentos em ordem, com “во-пе́рвых” e “во-вторы́х”: você convenceu os ouvintes.' },
      },
      final_meh: {
        emoji: '🤷',
        text: 'Ли́ну отвеча́ет: “Мне ка́жется, де́ти са́ми когда́-нибудь начну́т чита́ть”. Слу́шательница вздыха́ет: “Я жду уже́ два́дцать лет”. Веду́щий бы́стро перехо́дит к рекла́ме. Ли́ну понима́ет, что его́ отве́т был сла́бым, без аргуме́нтов.',
        translation:
          'Linu responde: “Acho que as crianças um dia vão começar a ler sozinhas”. A ouvinte suspira: “Estou esperando há vinte anos”. O apresentador passa rápido para os comerciais. Linu percebe que sua resposta foi fraca, sem argumentos.',
        ending: { tone: 'neutro', title: 'Resposta fraca', message: 'Num debate, opinião precisa de argumento: “я счита́ю, что…, потому́ что…”.' },
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
      'Em russo, “анекдо́т” não é um caso curioso, e sim uma piada curta com final de efeito; contar anedotas à mesa da cozinha é uma tradição forte. Níjni Nóvgorod fica na confluência dos rios Oka e Volga e foi fundada em 1221.',
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
        text: 'Суббо́тний ве́чер, Ни́жний Но́вгород, ма́ленькая ку́хня на ве́рхнем этаже́. Тётя Га́ля ста́вит на стол пирожки́ и чай с варе́ньем: “Ешь, Ли́нушка, ешь, ты же с доро́ги!” За столо́м сидя́т её сын Серёжа и сосе́д, пожило́й профе́ссор Михаи́л Семёнович. “Ну что, — потира́ет ру́ки Серёжа, — анекдо́ты расска́зывать бу́дем и́ли как?”',
        translation:
          'Sábado à noite, Níjni Nóvgorod, uma cozinha pequena no último andar. Tia Gália põe na mesa pastéis e chá com geleia: “Come, Linuzinho, come, você acabou de chegar de viagem!” À mesa estão o filho dela, Serioja, e o vizinho, o professor idoso Mikhail Semiónovitch. “E aí — Serioja esfrega as mãos —, vamos contar piada ou não?”',
        choices: [
          { text: 'Попроси́ть Серёжу нача́ть пе́рвым.', translation: 'Pedir que o Serioja comece.', next: 'serezha' },
          {
            text: 'Обрати́ться к сосе́ду: “Михаи́л Семёнович, расскажи́те вы!”',
            translation: 'Dirigir-se ao vizinho: “Mikhail Semiónovitch, conte o senhor!”',
            next: 'professor',
          },
          {
            text: 'Обрати́ться к сосе́ду: “Слу́шай, дед, расскажи́ что-нибудь!”',
            translation: 'Dirigir-se ao vizinho: “Escuta, vovô, conta alguma coisa!”',
            next: 'oops',
          },
        ],
      },
      serezha: {
        emoji: '😂',
        text: 'Серёжа начина́ет: “Иностра́нец спра́шивает ру́сского: „Вы бу́дете чай?‘ А тот отвеча́ет: „Да нет, наве́рное‘. Иностра́нец пото́м неде́лю не спал: так да и́ли нет?’ Все смею́тся, а Серёжа хи́тро смо́трит на Ли́ну. ‘Ну, а ты-то по́нял?’',
        translation:
          'Serioja começa: “Um estrangeiro pergunta a um russo: „Aceita um chá?‘ E ele responde: „Да нет, наве́рное‘ (literalmente: sim, não, provavelmente). O estrangeiro passou uma semana sem dormir: afinal, é sim ou não?’ Todos riem, e Serioja olha para Linu com malícia. ‘E você, entendeu?’',
        choices: [
          { text: 'Отве́тить: “Коне́чно! Э́то зна́чит „нет‘’.', translation: 'Responder: ‘Claro! Quer dizer „não‘’.', next: 'professor' },
          {
            text: 'Отве́тить: “Э́то зна́чит „да‘, он хо́чет ча́ю’.',
            translation: 'Responder: “Quer dizer „sim‘, ele quer chá’.',
            wrong: 'Em “да нет, наве́рное” quem manda é o “нет”, suavizado pelo “наве́рное”: a resposta é “acho que não”. É justamente essa a graça da piada.',
          },
        ],
      },
      oops: {
        emoji: '😬',
        text: 'Наступа́ет нело́вкая па́уза. Михаи́л Семёнович поднима́ет бровь: “Дед? Ну спаси́бо, молодо́й челове́к, уважи́л”. Тётя Га́ля ти́хо ше́пчет: “Ли́нушка, он ведь профе́ссор, ему́ во́семьдесят лет, к нему́ на „вы‘ на́до’. Серёжа пря́чет улы́бку в ча́шку.',
        translation:
          'Vem um silêncio constrangedor. Mikhail Semiónovitch levanta a sobrancelha: “Vovô? Ora, muito obrigado, meu jovem, que respeito”. Tia Gália sussurra: “Linuzinho, ele é professor, tem oitenta anos, com ele é de „senhor‘’. Serioja esconde o sorriso atrás da xícara.',
        choices: [
          {
            text: 'Извини́ться: “Прости́те, Михаи́л Семёнович, я не хоте́л вас оби́деть”.',
            translation: 'Pedir desculpas: “Desculpe, Mikhail Semiónovitch, não quis ofendê-lo”.',
            next: 'professor',
          },
          {
            text: 'Поблагодари́ть его́: профе́ссору ведь понра́вилось.',
            translation: 'Agradecer a ele: afinal, o professor gostou.',
            wrong:
              '“Ну спаси́бо, уважи́л” é ironia: o professor se ofendeu por ser chamado de “дед” (vovô) e tratado por “ты”. O certo é pedir desculpas e passar para “вы”.',
          },
        ],
      },
      professor: {
        emoji: '🎓',
        text: 'Михаи́л Семёнович поправля́ет очки́: “Ну что ж, расскажу́ вам ста́рый студе́нческий анекдо́т. Профе́ссор спра́шивает на экза́мене: „Ско́лько вы гото́вились?‘ — „Всю ночь!‘ — „Ви́жу, что ночь, а не год‘’. Тётя Га́ля хохо́чет, а Серёжа вздыха́ет: ‘Вот-вот, э́то про меня́’. Все смо́трят на Ли́ну: тепе́рь его́ о́чередь.',
        translation:
          'Mikhail Semiónovitch ajeita os óculos: “Pois bem, vou contar uma velha piada de estudante. O professor pergunta no exame: „Quanto tempo o senhor estudou?‘ — „A noite toda!‘ — „Estou vendo que foi uma noite, e não um ano‘’. Tia Gália gargalha, e Serioja suspira: ‘Pois é, essa é sobre mim’. Todos olham para Linu: agora é a vez dele.',
        choices: [
          { text: 'Рассказа́ть свой анекдо́т про пингви́на.', translation: 'Contar a sua piada de pinguim.', next: 'linu_joke' },
          { text: 'Спроси́ть, почему́ ру́сские так лю́бят анекдо́ты.', translation: 'Perguntar por que os russos gostam tanto de anedotas.', next: 'why' },
        ],
      },
      why: {
        emoji: '🤔',
        text: 'Михаи́л Семёнович заду́мывается: “Ви́дите ли, анекдо́т у нас — э́то це́лый жанр. Ра́ньше лю́ди собира́лись на ку́хне, потому́ что там мо́жно бы́ло поговори́ть по душа́м, вот и расска́зывали до утра́. Ну а сейча́с — привы́чка, да и про́сто ве́село”. Тётя Га́ля добавля́ет: “Ку́хня же у нас — са́мое гла́вное ме́сто в до́ме!” Серёжа подми́гивает Ли́ну: “Ну, тепе́рь-то расска́жешь?”',
        translation:
          'Mikhail Semiónovitch fica pensativo: “Veja bem, a anedota para nós é um gênero inteiro. Antigamente as pessoas se reuniam na cozinha, porque ali se podia conversar de coração aberto, e então contavam piadas até de manhã. E hoje é costume, e também é simplesmente divertido”. Tia Gália acrescenta: “A cozinha é o lugar mais importante da casa, ora!” Serioja pisca para Linu: “E aí, agora vai contar?”',
        choices: [
          { text: 'Набра́ться хра́брости и рассказа́ть анекдо́т.', translation: 'Criar coragem e contar uma piada.', next: 'linu_joke' },
          { text: 'Сказа́ть, что уже́ по́здно, и попроща́ться.', translation: 'Dizer que já está tarde e se despedir.', next: 'final_leave' },
        ],
      },
      linu_joke: {
        emoji: '🐧',
        text: 'Ли́ну набира́ется хра́брости: “Пингви́н захо́дит в кафе́ и спра́шивает: „У вас есть ры́ба?‘ — „Нет‘. На сле́дующий день опя́ть: „Ры́ба есть?‘ — „Нет!‘ На тре́тий день официа́нт не выде́рживает: „Ещё раз спро́сишь — прибью́ твои́ ла́пы к по́лу!‘ На четвёртый день пингви́н спра́шивает: „Гво́зди есть?‘ — „Нет‘. — „А ры́ба?‘’',
        translation:
          'Linu cria coragem: “Um pinguim entra num café e pergunta: „Vocês têm peixe?‘ — „Não‘. No dia seguinte, de novo: „Tem peixe?‘ — „Não!‘ No terceiro dia, o garçom perde a paciência: „Se perguntar mais uma vez, prego suas patas no chão!‘ No quarto dia, o pinguim pergunta: „Tem pregos?‘ — „Não‘. — „E peixe?‘’',
        choices: [{ text: 'Подожда́ть реа́кции.', translation: 'Esperar a reação.', next: 'final_laugh' }],
      },
      final_laugh: {
        emoji: '🎉',
        text: 'Секу́нду все молча́т, а пото́м ку́хня взрыва́ется сме́хом. Серёжа хло́пает Ли́ну по плечу́: “Ну ты даёшь! Свой челове́к!” Михаи́л Семёнович вытира́ет слёзы: “Вот э́то, молодо́й челове́к, настоя́щий анекдо́т”. А тётя Га́ля кладёт Ли́ну ещё три пирожка́: за ю́мор поло́жено.',
        translation:
          'Por um segundo todos ficam calados, e depois a cozinha explode em risadas. Serioja dá um tapinha no ombro de Linu: “Essa foi boa! Você é dos nossos!” Mikhail Semiónovitch enxuga as lágrimas: “Isso, meu jovem, é uma anedota de verdade”. E tia Gália põe para Linu mais três pastéis: humor merece recompensa.',
        ending: { tone: 'bom', title: 'Um de nós', message: 'Você acertou o tom, entendeu a ironia e ainda fez a cozinha inteira rir.' },
      },
      final_leave: {
        emoji: '🌙',
        text: 'Ли́ну благодари́т хозя́йку и встаёт из-за стола́. “Куда́ же ты? — всплёскивает рука́ми тётя Га́ля. — Мы ведь ещё чай не вы́пили!” Но Ли́ну уже́ в прихо́жей. Свой анекдо́т он так и не рассказа́л — мо́жет, в сле́дующий раз.',
        translation:
          'Linu agradece à dona da casa e se levanta da mesa. “Mas aonde você vai? — tia Gália ergue as mãos. — A gente nem terminou o chá!” Mas Linu já está no hall de entrada. A piada dele acabou ficando sem contar — quem sabe da próxima vez.',
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
        text: 'Ли́ну прохо́дит пра́ктику в Политехни́ческом музе́е в Москве́, одно́м из старе́йших нау́чно-техни́ческих музе́ев ми́ра: он осно́ван в 1872 году́. Нау́чный сотру́дник Ири́на Ви́кторовна даёт ему́ зада́ние. “Для но́вой экспози́ции нам нужны́ те́ксты этике́ток, — объясня́ет она́. — Язы́к до́лжен быть то́чным, но поня́тным. Вы́берите те́му: исто́рия периоди́ческой систе́мы и́ли пе́рвый иску́сственный спу́тник Земли́”.',
        translation:
          'Linu faz estágio no Museu Politécnico de Moscou, um dos mais antigos museus de ciência e tecnologia do mundo: foi fundado em 1872. A pesquisadora Irina Víktorovna lhe dá uma tarefa. “Para a nova exposição precisamos dos textos das legendas — explica ela. — A linguagem deve ser precisa, mas compreensível. Escolha o tema: a história da tabela periódica ou o primeiro satélite artificial da Terra”.',
        choices: [
          { text: 'Взять те́му о периоди́ческой систе́ме.', translation: 'Pegar o tema da tabela periódica.', next: 'mendeleev' },
          { text: 'Взять те́му о спу́тнике.', translation: 'Pegar o tema do satélite.', next: 'sputnik' },
        ],
      },
      mendeleev: {
        emoji: '⚗️',
        text: 'В архи́ве Ли́ну нахо́дит черново́й текст: “Откры́тие Дми́трием Ива́новичем Менделе́евым периоди́ческого зако́на в 1869 году́ ста́ло результа́том систематиза́ции изве́стных к тому́ вре́мени хими́ческих элеме́нтов. Расположе́ние элеме́нтов в поря́дке возраста́ния а́томного ве́са позво́лило вы́явить периоди́чность их свойств. Бо́лее того́, Менделе́ев предсказа́л существова́ние ещё не откры́тых элеме́нтов”. Ли́ну перечи́тывает пе́рвую фра́зу три ра́за: одни́ существи́тельные!',
        translation:
          'No arquivo, Linu encontra um rascunho: “A descoberta da lei periódica por Dmitri Ivánovitch Mendeleiev em 1869 foi resultado da sistematização dos elementos químicos conhecidos até então. A disposição dos elementos em ordem crescente de peso atômico permitiu revelar a periodicidade de suas propriedades. Mais do que isso, Mendeleiev previu a existência de elementos ainda não descobertos”. Linu relê a primeira frase três vezes: só substantivos!',
        choices: [
          { text: 'Упрости́ть текст, но сохрани́ть все фа́кты.', translation: 'Simplificar o texto, mas manter todos os fatos.', next: 'simplify' },
          {
            text: 'Написа́ть, что Менделе́ев откры́л все хими́ческие элеме́нты.',
            translation: 'Escrever que Mendeleiev descobriu todos os elementos químicos.',
            wrong:
              'O texto diz que ele organizou os elementos já conhecidos (“изве́стных к тому́ вре́мени”) e previu os que ainda não tinham sido descobertos (“ещё не откры́тых”). Ele não descobriu todos.',
          },
        ],
      },
      simplify: {
        emoji: '✏️',
        text: 'Ли́ну разбива́ет дли́нную фра́зу на две: “В 1869 году́ Менделе́ев откры́л периоди́ческий зако́н. Он расположи́л изве́стные элеме́нты по а́томному ве́су и уви́дел, что их сво́йства повторя́ются”. Ири́на Ви́кторовна чита́ет и одобри́тельно кива́ет. “Хорошо́. Но не забу́дьте са́мое интере́сное: пусты́е кле́тки в табли́це”, — говори́т она́.',
        translation:
          'Linu divide a frase longa em duas: “Em 1869, Mendeleiev descobriu a lei periódica. Ele organizou os elementos conhecidos por peso atômico e viu que suas propriedades se repetem”. Irina Víktorovna lê e acena com aprovação. “Bom. Mas não se esqueça do mais interessante: as casas vazias na tabela”, diz ela.',
        choices: [
          { text: 'Доба́вить фра́зу о предска́занных элеме́нтах.', translation: 'Acrescentar uma frase sobre os elementos previstos.', next: 'final_table' },
          { text: 'Оста́вить так: коро́че — зна́чит лу́чше.', translation: 'Deixar assim: mais curto é melhor.', next: 'final_dry' },
        ],
      },
      sputnik: {
        emoji: '🛰️',
        text: 'Ли́ну открыва́ет па́пку с материа́лами. Пе́рвая фра́за звучи́т так: “Осуществле́ние за́пуска пе́рвого иску́сственного спу́тника Земли́ 4 октября́ 1957 го́да ознаменова́ло нача́ло косми́ческой э́ры”. Да́лее сле́дуют техни́ческие да́нные: ма́сса о́коло восьми́десяти трёх килогра́ммов, четы́ре анте́нны, два радиопереда́тчика. Сигна́лы спу́тника принима́ли радиолюби́тели всего́ ми́ра.',
        translation:
          'Linu abre a pasta com os materiais. A primeira frase diz assim: “A realização do lançamento do primeiro satélite artificial da Terra em 4 de outubro de 1957 marcou o início da era espacial”. Em seguida vêm os dados técnicos: massa de cerca de oitenta e três quilos, quatro antenas, dois radiotransmissores. Os sinais do satélite eram captados por radioamadores do mundo inteiro.',
        choices: [
          { text: 'Переписа́ть пе́рвую фра́зу поня́тнее.', translation: 'Reescrever a primeira frase de forma mais clara.', next: 'rewrite' },
          {
            text: 'Написа́ть, что спу́тник ве́сил во́семьдесят три то́нны.',
            translation: 'Escrever que o satélite pesava oitenta e três toneladas.',
            wrong: 'Releia os dados: “о́коло восьми́десяти трёх килогра́ммов” — cerca de 83 quilos, não toneladas. O Sputnik 1 era uma esfera pequena.',
          },
        ],
      },
      rewrite: {
        emoji: '📝',
        text: 'Ли́ну пи́шет: “4 октября́ 1957 го́да в ко́смос запусти́ли пе́рвый иску́сственный спу́тник Земли́. С э́того дня начала́сь косми́ческая э́ра”. Ири́на Ви́кторовна дово́льна, но задаёт вопро́с: “А что посети́тель услы́шит, е́сли нажмёт на кно́пку у витри́ны?” Ли́ну вспомина́ет, что спу́тник передава́л просты́е радиосигна́лы — знамени́тое “бип-бип”.',
        translation:
          'Linu escreve: “Em 4 de outubro de 1957, lançaram ao espaço o primeiro satélite artificial da Terra. Nesse dia começou a era espacial”. Irina Víktorovna fica satisfeita, mas faz uma pergunta: “E o que o visitante vai ouvir se apertar o botão junto à vitrine?” Linu lembra que o satélite transmitia sinais de rádio simples — o famoso “bip-bip”.',
        choices: [
          { text: 'Предложи́ть за́пись сигна́ла и по́дпись к ней.', translation: 'Propor uma gravação do sinal com uma legenda.', next: 'final_sound' },
          { text: 'Сказа́ть, что звук не ну́жен: гла́вное — текст.', translation: 'Dizer que o som não é necessário: o principal é o texto.', next: 'final_dry' },
        ],
      },
      final_table: {
        emoji: '🎉',
        text: 'Ли́ну добавля́ет: “Менделе́ев оста́вил в табли́це пусты́е кле́тки и предсказа́л сво́йства ещё не откры́тых элеме́нтов. В сле́дующие го́ды бы́ли откры́ты га́ллий, ска́ндий и герма́ний, и прогно́з подтверди́лся”. Ири́на Ви́кторовна улыба́ется: “Вот тепе́рь посети́тель остано́вится”. Его́ этике́тка ви́сит в за́ле ря́дом с портре́том учёного.',
        translation:
          'Linu acrescenta: “Mendeleiev deixou casas vazias na tabela e previu as propriedades de elementos ainda não descobertos. Nos anos seguintes foram descobertos o gálio, o escândio e o germânio, e a previsão se confirmou”. Irina Víktorovna sorri: “Agora sim o visitante vai parar para ler”. A legenda dele fica pendurada na sala ao lado do retrato do cientista.',
        ending: {
          tone: 'bom',
          title: 'Precisa e interessante',
          message: 'Você desmontou as nominalizações sem perder nenhum fato — e ainda contou a melhor parte.',
        },
      },
      final_sound: {
        emoji: '🔊',
        text: 'Ли́ну предлага́ет: “Пусть у витри́ны звучи́т за́пись сигна́ла, а ря́дом бу́дет по́дпись: „Так звуча́л пе́рвый спу́тник‘’. Ири́на Ви́кторовна одобря́ет иде́ю. Че́рез ме́сяц де́ти толпя́тся у витри́ны и нажима́ют на кно́пку сно́ва и сно́ва. А Ли́ну слы́шит ‘бип-бип’ да́же во сне.',
        translation:
          'Linu propõe: “Que junto à vitrine toque a gravação do sinal, e ao lado haja a legenda: „Assim soava o primeiro satélite‘’. Irina Víktorovna aprova a ideia. Um mês depois, as crianças se aglomeram na vitrine e apertam o botão sem parar. E Linu ouve ‘bip-bip’ até em sonho.',
        ending: { tone: 'bom', title: 'Bip-bip', message: 'Texto claro e uma ideia viva: a ciência chegou ao público.' },
      },
      final_dry: {
        emoji: '📄',
        text: 'Ири́на Ви́кторовна вздыха́ет: “Текст пра́вильный, но сухо́й. Посети́тель прочита́ет и пойдёт да́льше”. Она́ всё же вно́сит этике́тку в о́бщий спи́сок, но про́сит в сле́дующий раз ду́мать о зри́теле. Ли́ну понима́ет: нау́чный стиль — э́то не то́лько то́чность, но и интере́с.',
        translation:
          'Irina Víktorovna suspira: “O texto está correto, mas seco. O visitante vai ler e seguir adiante”. Mesmo assim ela põe a legenda na lista geral, mas pede que da próxima vez ele pense no público. Linu entende: estilo científico não é só precisão, é também despertar interesse.',
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
      'Liev Tolstói nasceu em 1828 em Iásnaia Poliana, perto de Tula, e lá escreveu “Guerra e Paz” e “Anna Kariênina”; em 1859 abriu na propriedade uma escola para crianças camponesas. Foi enterrado no bosque, num túmulo sem cruz nem lápide, no lugar onde, segundo uma brincadeira de infância, seu irmão Nikolai tinha escondido a “varinha verde” com o segredo da felicidade de todos.',
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
        text: 'Ра́нней о́сенью, когда́ берёзы уже́ тро́нуты зо́лотом, Ли́ну приезжа́ет в Я́сную Поля́ну. Здесь, в уса́дьбе под Ту́лой, роди́лся и провёл бо́льшую часть жи́зни Лев Никола́евич Толсто́й. Тиха́ берёзовая алле́я, веду́щая к до́му; неслы́шно ступа́ет по ней пингви́н. Старичо́к-смотри́тель Па́вел Ильи́ч встреча́ет его́ у воро́т. “Ти́ше е́дешь — да́льше бу́дешь, — говори́т он, — а у нас и во́все спеши́ть не при́нято”.',
        translation:
          'No começo do outono, quando as bétulas já estão tocadas de ouro, Linu chega a Iásnaia Poliana. Aqui, nesta propriedade perto de Tula, nasceu e passou a maior parte da vida Liev Nikoláievitch Tolstói. Silenciosa é a alameda de bétulas que leva à casa; sem ruído caminha por ela um pinguim. O velho zelador Pável Ilitch o recebe no portão. “Devagar se vai ao longe — diz ele —, e aqui, então, ninguém tem pressa”.',
        choices: [
          { text: 'Пойти́ пря́мо в дом-музе́й.', translation: 'Ir direto à casa-museu.', next: 'house' },
          { text: 'Снача́ла прогуля́ться по уса́дьбе.', translation: 'Primeiro passear pela propriedade.', next: 'walk' },
        ],
      },
      walk: {
        emoji: '🍎',
        text: 'Ли́ну бредёт ми́мо пруда́, где пла́вают опа́вшие ли́стья, и выхо́дит к я́блоневому са́ду. Я́блок в э́том году́ уроди́лось ви́димо-неви́димо, и ве́тки гну́тся к само́й земле́. Па́вел Ильи́ч, нагна́в его́, поднима́ет с травы́ я́блоко и протя́гивает го́стю: “Угоща́йтесь. Сам граф, быва́ло, сады́ сажа́л”. Пингви́н надку́сывает я́блоко — ки́слое, души́стое, осе́ннее. “Куда́ же тепе́рь, — спра́шивает стари́к, — в дом и́ли в лес?”',
        translation:
          'Linu caminha sem pressa junto ao lago, onde boiam folhas caídas, e chega ao pomar de macieiras. Neste ano as maçãs vieram em quantidade sem fim, e os galhos se curvam até o chão. Pável Ilitch o alcança, apanha uma maçã da grama e a estende ao visitante: “Sirva-se. O próprio conde, naquele tempo, plantava pomares”. O pinguim dá uma mordida na maçã — azeda, perfumada, outonal. “E agora, para onde — pergunta o velho —, para a casa ou para o bosque?”',
        choices: [
          { text: 'В дом.', translation: 'Para a casa.', next: 'house' },
          { text: 'В лес, к моги́ле Толсто́го.', translation: 'Para o bosque, ao túmulo de Tolstói.', next: 'forest' },
        ],
      },
      house: {
        emoji: '🏛️',
        text: 'В до́ме всё сохрани́лось так, как бы́ло при хозя́ине: кни́ги, часы́, ла́мпа на пи́сьменном столе́. Здесь напи́саны “Война́ и мир” и “А́нна Каре́нина”. Па́вел Ильи́ч понижа́ет го́лос: “По́мните, как начина́ется „А́нна Каре́нина‘? Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́ несчастли́ва по-сво́ему’. Пото́м он подво́дит Ли́ну к окну́: ‘А вон — де́рево бе́дных. Под ним, быва́ло, жда́ли гра́фа крестья́не с про́сьбами’.',
        translation:
          'Na casa tudo ficou como era no tempo do dono: os livros, o relógio, a lâmpada sobre a escrivaninha. Aqui foram escritos “Guerra e Paz” e “Anna Kariênina”. Pável Ilitch baixa a voz: “Lembra como começa „Anna Kariênina‘? Todas as famílias felizes se parecem entre si, cada família infeliz é infeliz à sua maneira’. Depois ele leva Linu até a janela: ‘E ali — a árvore dos pobres. Debaixo dela, naquele tempo, os camponeses esperavam o conde com seus pedidos’.',
        choices: [
          { text: 'Спроси́ть, заче́м крестья́не приходи́ли к гра́фу.', translation: 'Perguntar por que os camponeses vinham ao conde.', next: 'tree' },
          {
            text: 'Сказа́ть, что счастли́вые се́мьи, по Толсто́му, все ра́зные.',
            translation: 'Dizer que, segundo Tolstói, as famílias felizes são todas diferentes.',
            wrong:
              'A frase diz o contrário: as famílias felizes se parecem entre si (“похо́жи друг на дру́га”); é cada família infeliz que é infeliz à sua maneira (“по-сво́ему”).',
          },
        ],
      },
      tree: {
        emoji: '🌳',
        text: 'Па́вел Ильи́ч отвеча́ет не спеша́: “Шли к нему́ со всей окру́ги — кто за сове́том, кто за по́мощью, кто с бедо́ю. Граф выходи́л, выслу́шивал, а уж там — чем мог, тем и помога́л. Он ведь и шко́лу для крестья́нских дете́й здесь откры́л, и сам в ней учи́л”. Помолча́в, стари́к добавля́ет: “Век живи́ — век учи́сь, говори́т наро́д, а Лев Никола́евич по сей посло́вице и жил”. Ли́ну смо́трит на ста́рый вяз, и ка́жется ему́, что де́рево по́мнит всё.',
        translation:
          'Pável Ilitch responde sem pressa: “Vinham de toda a redondeza — uns por conselho, outros por ajuda, outros com sua desgraça. O conde saía, escutava, e daí — no que podia, ajudava. Pois ele até abriu aqui uma escola para os filhos dos camponeses, e ensinava nela pessoalmente”. Depois de um silêncio, o velho acrescenta: “Vivendo e aprendendo, diz o povo, e Liev Nikoláievitch vivia segundo esse provérbio”. Linu olha para o velho olmo, e lhe parece que a árvore se lembra de tudo.',
        choices: [
          { text: 'Пойти́ в лес, к моги́ле Толсто́го.', translation: 'Ir ao bosque, ao túmulo de Tolstói.', next: 'forest' },
          { text: 'Взгляну́ть на часы́ и поспеши́ть на авто́бус.', translation: 'Olhar o relógio e correr para o ônibus.', next: 'final_hurry' },
        ],
      },
      forest: {
        emoji: '🌲',
        text: 'Доро́га ухо́дит в лес, что зову́т Ста́рый Зака́з. Ли́ну ожида́ет уви́деть па́мятник, но ви́дит лишь невысо́кий зелёный хо́лмик — ни креста́, ни ка́мня, ни на́дписи. Смотри́тель, иду́щий ря́дом, объясня́ет: “Так он сам завеща́л. А похорони́ли его́ на том ме́сте, где, по де́тской леге́нде, брат Никола́й зары́л зелёную па́лочку”. Ли́ну спра́шивает, что же бы́ло напи́сано на той па́лочке. Стари́к улыба́ется в усы́: “Та́йна всео́бщего сча́стья, не ме́ньше”.',
        translation:
          'O caminho entra no bosque que chamam de Stari Zakaz. Linu espera ver um monumento, mas vê apenas um montinho verde e baixo — sem cruz, sem pedra, sem inscrição. O zelador, que caminha ao lado, explica: “Assim ele mesmo pediu. E o enterraram no lugar onde, segundo uma lenda de infância, o irmão Nikolai enterrou a varinha verde”. Linu pergunta o que estava escrito naquela varinha. O velho sorri por baixo do bigode: “O segredo da felicidade de todos, nada menos”.',
        choices: [
          { text: 'Постоя́ть мину́ту в тишине́.', translation: 'Ficar um minuto em silêncio.', next: 'silence' },
          {
            text: 'Поиска́ть на моги́ле на́дпись с и́менем писа́теля.',
            translation: 'Procurar no túmulo uma inscrição com o nome do escritor.',
            wrong: 'O texto diz que no túmulo não há cruz, nem pedra, nem inscrição (“ни креста́, ни ка́мня, ни на́дписи”) — foi o desejo do próprio Tolstói.',
          },
        ],
      },
      silence: {
        emoji: '🕯️',
        text: 'Ли́ну стои́т у хо́лмика, и лишь ли́стья шурша́т под ве́тром. Нет здесь ни пы́шных па́мятников, ни золочёных огра́д — одна́ тишина́, како́й ищу́т и не нахо́дят в города́х. Ду́мает Ли́ну о зелёной па́лочке: а вдруг та́йна и впрямь лежи́т в земле́, у сами́х корне́й? Па́вел Ильи́ч тро́гает его́ за крыло́: “Смерка́ется, пора́”. Ли́ну ещё раз огля́дывается на лес.',
        translation:
          'Linu fica junto ao montinho, e só as folhas farfalham ao vento. Não há aqui monumentos pomposos nem grades douradas — apenas um silêncio daqueles que se procuram e não se acham nas cidades. Linu pensa na varinha verde: e se o segredo estiver mesmo na terra, junto às próprias raízes? Pável Ilitch toca-lhe a asa: “Está escurecendo, é hora”. Linu olha mais uma vez para o bosque.',
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
        text: 'Смотри́тель до́лго ду́мает, а пото́м говори́т: “Начни́те с „Де́тства‘. Кни́га ма́ленькая, а сло́во в ней — зо́лото’. Он вынима́ет из карма́на потёртый томи́к и протя́гивает Ли́ну: ‘Бери́те, бери́те, не оби́жайте старика́’. Ли́ну уезжа́ет в су́мерках, прижима́я томи́к к груди́. Не зря, ду́мает он, в наро́де говоря́т: уче́нье — свет, а неуче́нье — тьма.',
        translation:
          'O zelador pensa um bom tempo e depois diz: “Comece por „Infância‘. O livro é pequeno, mas cada palavra nele vale ouro’. Ele tira do bolso um volume gasto e o estende a Linu: ‘Pegue, pegue, não faça essa desfeita a um velho’. Linu parte ao anoitecer, apertando o livrinho contra o peito. Não é à toa, pensa ele, que o povo diz: o estudo é luz, e a ignorância, escuridão.',
        ending: {
          tone: 'bom',
          title: 'Um livro de presente',
          message: 'Você foi devagar, como manda o provérbio, e saiu de Iásnaia Poliana com o primeiro livro de Tolstói nas mãos.',
        },
      },
      final_hurry: {
        emoji: '🚌',
        text: 'Ли́ну спохвати́лся: авто́бус до Ту́лы ждать не ста́нет. На́скоро попроща́вшись, он спеши́т к воро́там, а смотри́тель гляди́т ему́ вслед, кача́я голово́й. “Поспеши́шь — люде́й насмеши́шь”, — бормо́чет стари́к. Уже́ в авто́бусе Ли́ну понима́ет, как мно́го он не успе́л уви́деть. Что ж, ве́рно говоря́т: ти́ше е́дешь — да́льше бу́дешь.',
        translation:
          'Linu se deu conta: o ônibus para Tula não vai esperar. Despedindo-se às pressas, ele corre para o portão, e o zelador o acompanha com o olhar, balançando a cabeça. “Quem tem pressa vira motivo de riso”, resmunga o velho. Já no ônibus, Linu percebe quanta coisa não conseguiu ver. Pois é, com razão se diz: devagar se vai ao longe.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Iásnaia Poliana pede tempo: o provérbio do zelador valia desde o portão.' },
      },
    },
  },
  // --- 2ª leva (bloco D2) ---
  {
    id: 'ru-h16',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Пра́здник огурца́',
    emoji: '🥒',
    summary: 'Em Súzdal, o Linu cai no meio do Dia do Pepino e conhece a vovó Gália.',
    cultural_context:
      'Súzdal, cidade do Anel de Ouro a nordeste de Moscou, tem igrejas e mosteiros brancos na lista do Patrimônio Mundial da UNESCO. Todo mês de julho a cidade faz o Dia do Pepino (День огурца́), com feira, música e pepino de todo jeito.',
    start: 'start',
    glossary: [
      ['огуре́ц / огурцы́', 'pepino / pepinos'],
      ['пра́здник', 'festa, feriado'],
      ['Здра́вствуй!', 'Olá! (informal)'],
      ['Вот…', 'Aqui está… / Eis…'],
      ['пода́рок', 'presente'],
      ['вку́сно', 'gostoso'],
      ['мёд', 'mel'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'Су́здаль. Ию́ль. Э́то пра́здник огурца́!',
        translation: 'Súzdal. Julho. É a festa do pepino!',
        choices: [
          { text: 'Ли́ну идёт на пра́здник.', translation: 'O Linu vai à festa.', next: 'galia' },
          { text: 'Ли́ну спит в гости́нице.', translation: 'O Linu dorme no hotel.', next: 'son' },
        ],
      },
      galia: {
        emoji: '👵',
        text: '“Здра́вствуй! Я ба́бушка Га́ля. Вот огурцы́!”',
        translation: '“Olá! Eu sou a vovó Gália. Aqui estão os pepinos!”',
        choices: [
          { text: '“Здра́вствуйте! Я Ли́ну.”', translation: '“Olá! Eu sou o Linu.”', next: 'schet' },
          {
            text: '“Э́то помидо́ры?”',
            translation: '“Isso são tomates?”',
            wrong: 'A vovó disse “Вот огурцы́!”: são pepinos (огурцы́), não tomates (помидо́ры). É a festa do pepino!',
          },
        ],
      },
      schet: {
        emoji: '🥒',
        text: '“Раз, два, три, четы́ре, пять. Пять огурцо́в! Э́то пода́рок.”',
        translation: '“Um, dois, três, quatro, cinco. Cinco pepinos! É um presente.”',
        choices: [
          { text: '“Пять? Спаси́бо!”', translation: '“Cinco? Obrigado!”', next: 'vkus' },
          {
            text: '“Де́сять? Спаси́бо!”',
            translation: '“Dez? Obrigado!”',
            wrong: 'A vovó contou até пять (cinco), não até де́сять (dez). São cinco pepinos.',
          },
        ],
      },
      vkus: {
        emoji: '😋',
        text: 'Ли́ну ест огуре́ц. Хрум! “Вку́сно?”',
        translation: 'O Linu come um pepino. Crec! “Está gostoso?”',
        choices: [
          { text: '“О́чень вку́сно!”', translation: '“Muito gostoso!”', next: 'final_tancy' },
          { text: '“Мо́жно с мёдом?”', translation: '“Pode ser com mel?”', next: 'final_med' },
        ],
      },
      final_tancy: {
        emoji: '🎉',
        text: 'Вот му́зыка и та́нцы. Ли́ну и Га́ля танцу́ют!',
        translation: 'Aí vêm a música e as danças. O Linu e a Gália dançam!',
        ending: { tone: 'bom', title: 'Rei do pepino!', message: 'O Linu ganhou cinco pepinos e uma parceira de dança em Súzdal.' },
      },
      final_med: {
        emoji: '🍯',
        text: '“С мёдом? Вот!” Огуре́ц и мёд. Ли́ну: “Стра́нно, но вку́сно!”',
        translation: '“Com mel? Aqui está!” Pepino e mel. O Linu: “Estranho, mas gostoso!”',
        ending: { tone: 'bom', title: 'Combinação ousada', message: 'Pepino com mel? Na festa de Súzdal, vale tudo!' },
      },
      son: {
        emoji: '😴',
        text: 'Ли́ну спит. А в Су́здале пра́здник, му́зыка и огурцы́.',
        translation: 'O Linu dorme. E em Súzdal tem festa, música e pepinos.',
        ending: { tone: 'neutro', title: 'Soneca na festa', message: 'O Linu perdeu o Dia do Pepino. Que tal ir à festa da próxima vez?' },
      },
    },
  },
  {
    id: 'ru-h17',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Медве́дь в Яросла́вле',
    emoji: '🐻',
    summary: 'À beira do Volga, em Iaroslavl, o Linu conhece o Micha, um menino com nome de urso.',
    cultural_context:
      'Iaroslavl, às margens do Volga, foi fundada por volta de 1010, e seu centro histórico é Patrimônio Mundial da UNESCO. O urso é o símbolo da cidade e está no brasão; e “Ми́ша”, apelido de Mikhail, é também o jeito carinhoso de chamar o urso em russo.',
    start: 'start',
    glossary: [
      ['ма́льчик', 'menino'],
      ['пти́ца', 'ave, pássaro'],
      ['медве́дь', 'urso'],
      ['ло́дка / ло́дки', 'barco / barcos'],
      ['Ско́лько?', 'Quantos?'],
      ['моро́женое', 'sorvete'],
      ['Пока́!', 'Tchau!'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Яросла́вль. Вот Во́лга. А вот ма́льчик.',
        translation: 'Iaroslavl. Aqui está o Volga. E ali está um menino.',
        choices: [{ text: '“Приве́т!”', translation: '“Oi!”', next: 'ptica' }],
      },
      ptica: {
        emoji: '👦',
        text: '“Приве́т! Ты кто? Ты пти́ца?”',
        translation: '“Oi! Quem é você? Você é um pássaro?”',
        choices: [
          { text: '“Да, я пингви́н. А ты?”', translation: '“Sim, eu sou um pinguim. E você?”', next: 'misha' },
          {
            text: '“Нет, я кот.”',
            translation: '“Não, eu sou um gato.”',
            wrong: 'O menino perguntou “Ты пти́ца?” (você é um pássaro?). Pinguim é ave, sim! E кот quer dizer gato.',
          },
        ],
      },
      misha: {
        emoji: '🐻',
        text: '“Я Ми́ша. Ми́ша — э́то как медве́дь!” Вот медве́дь. Он си́мвол Яросла́вля.',
        translation: '“Eu sou o Micha. Micha é como urso!” Ali está um urso. Ele é o símbolo de Iaroslavl.',
        choices: [{ text: '“Большо́й медве́дь! А что там?”', translation: '“Que urso grande! E o que tem ali?”', next: 'lodki' }],
      },
      lodki: {
        emoji: '⛵',
        text: 'Там ло́дки: одна́, две, три, четы́ре. “Ско́лько ло́док?”',
        translation: 'Ali há barcos: um, dois, três, quatro. “Quantos barcos?”',
        choices: [
          { text: '“Четы́ре!”', translation: '“Quatro!”', next: 'morozhenoe' },
          {
            text: '“Две!”',
            translation: '“Dois!”',
            wrong: 'Conte de novo: одна́, две, три, четы́ре. São quatro (четы́ре) barcos.',
          },
        ],
      },
      morozhenoe: {
        emoji: '🍦',
        text: '“Молоде́ц! Моро́женое?”',
        translation: '“Muito bem! Um sorvete?”',
        choices: [
          { text: '“Да, спаси́бо!”', translation: '“Sim, obrigado!”', next: 'final_druzya' },
          { text: '“Нет, спаси́бо. Пока́, Ми́ша!”', translation: '“Não, obrigado. Tchau, Micha!”', next: 'final_poka' },
        ],
      },
      final_druzya: {
        emoji: '🎉',
        text: 'Ли́ну и Ми́ша едя́т моро́женое. Тут Во́лга, медве́дь и два дру́га.',
        translation: 'O Linu e o Micha tomam sorvete. Aqui estão o Volga, o urso e dois amigos.',
        ending: { tone: 'bom', title: 'Dois amigos e um urso', message: 'O Linu fez amizade com o Micha e conheceu o urso de Iaroslavl.' },
      },
      final_poka: {
        emoji: '🚶',
        text: 'Ли́ну в гости́нице. Он оди́н. А Ми́ша и моро́женое там.',
        translation: 'O Linu está no hotel. Ele está sozinho. E o Micha e o sorvete ficaram lá.',
        ending: { tone: 'neutro', title: 'Sem sorvete', message: 'O Linu foi embora cedo demais. Da próxima vez, aceite o sorvete!' },
      },
    },
  },
  {
    id: 'ru-h18',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Дра́ники в Ми́нске',
    emoji: '🥔',
    summary: 'Em Minsk, a amiga Iana ensina o Linu a fazer o prato mais famoso de Belarus.',
    cultural_context:
      'Em Belarus, o russo e o bielorrusso são línguas oficiais, e nas ruas de Minsk se ouve muito russo. Os дра́ники, panquecas de batata ralada, são o prato nacional bielorrusso e costumam vir com смета́на (creme azedo).',
    start: 'start',
    glossary: [
      ['гото́вить', 'cozinhar, preparar'],
      ['дра́ники', 'panquecas de batata'],
      ['карто́шка', 'batata'],
      ['лук', 'cebola'],
      ['тере́ть: я тру, ты трёшь', 'ralar: eu ralo, você rala'],
      ['ре́зать: я ре́жу, ты ре́жешь', 'cortar: eu corto, você corta'],
      ['смета́на', 'creme azedo'],
      ['у меня́ есть', 'eu tenho'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Минск, суббо́та. Ли́ну в гостя́х у Я́ны. Она́ говори́т: “Сего́дня мы гото́вим дра́ники!”',
        translation: 'Minsk, sábado. O Linu está na casa da Iana. Ela diz: “Hoje vamos fazer draniki!”',
        choices: [
          { text: '“Ура́! А что тако́е дра́ники?”', translation: '“Oba! E o que são draniki?”', next: 'draniki' },
          { text: '“Я не люблю́ гото́вить. Я смотрю́ телеви́зор.”', translation: '“Eu não gosto de cozinhar. Vou ver televisão.”', next: 'tv' },
        ],
      },
      draniki: {
        emoji: '🥔',
        text: '“Э́то блины́ из карто́шки. У меня́ есть карто́шка, лук и я́йца.”',
        translation: '“São panquecas de batata. Eu tenho batata, cebola e ovos.”',
        choices: [
          { text: '“Я помога́ю! Что мне де́лать?”', translation: '“Eu ajudo! O que eu faço?”', next: 'kukhnia' },
          {
            text: '“Блины́ из я́блок? Я люблю́ я́блоки!”',
            translation: '“Panquecas de maçã? Eu adoro maçã!”',
            wrong: 'A Iana disse “из карто́шки”: de batata. Os дра́ники são panquecas de batata, não de maçã (я́блоки).',
          },
        ],
      },
      kukhnia: {
        emoji: '🔪',
        text: 'Я́на говори́т: “Ты трёшь карто́шку, а я ре́жу лук. Лук — э́то моя́ рабо́та!”',
        translation: 'A Iana diz: “Você rala a batata, e eu corto a cebola. A cebola é tarefa minha!”',
        choices: [
          { text: 'Ли́ну трёт карто́шку.', translation: 'O Linu rala a batata.', next: 'skovoroda' },
          {
            text: 'Ли́ну ре́жет лук.',
            translation: 'O Linu corta a cebola.',
            wrong: 'A Iana disse “ты трёшь карто́шку” (você rala a batata) e “я ре́жу лук” (eu corto a cebola). A cebola fica com ela!',
          },
        ],
      },
      skovoroda: {
        emoji: '🍳',
        text: 'Дра́ники жа́рятся на сковороде́. Я́на спра́шивает: “Ты лю́бишь смета́ну?”',
        translation: 'Os draniki fritam na frigideira. A Iana pergunta: “Você gosta de creme azedo?”',
        choices: [
          { text: '“Да! Смета́ну, пожа́луйста!”', translation: '“Sim! Creme azedo, por favor!”', next: 'final_smetana' },
          { text: '“Не зна́ю. Я люблю́ ке́тчуп!”', translation: '“Não sei. Eu gosto de ketchup!”', next: 'final_ketchup' },
        ],
      },
      final_smetana: {
        emoji: '🎉',
        text: 'Ли́ну ест дра́ники со смета́ной. Он говори́т: “О́чень вку́сно! Тепе́рь я зна́ю реце́пт!”',
        translation: 'O Linu come draniki com creme azedo. Ele diz: “Muito gostoso! Agora eu sei a receita!”',
        ending: {
          tone: 'bom',
          title: 'Chef bielorrusso',
          message: 'O Linu ralou a batata, provou os draniki do jeito tradicional e levou a receita de Minsk.',
        },
      },
      final_ketchup: {
        emoji: '🍅',
        text: 'Я́на смеётся: “Ке́тчуп? В Белару́си дра́ники едя́т со смета́ной!” Ли́ну ест дра́ники с ке́тчупом.',
        translation: 'A Iana ri: “Ketchup? Em Belarus, draniki se comem com creme azedo!” O Linu come os draniki com ketchup.',
        ending: { tone: 'neutro', title: 'Ketchup em Minsk', message: 'Gostoso também, mas o Linu não provou os draniki do jeito bielorrusso. Tente de novo!' },
      },
      tv: {
        emoji: '📺',
        text: 'Ли́ну смо́трит телеви́зор. А на ку́хне Я́на и её брат едя́т все дра́ники!',
        translation: 'O Linu vê televisão. E na cozinha a Iana e o irmão dela comem todos os draniki!',
        ending: { tone: 'neutro', title: 'Prato vazio', message: 'Quem não ajuda na cozinha às vezes fica sem draniki. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h19',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ёжик на да́че',
    emoji: '🦔',
    summary: 'Numa dacha perto de Tver, um barulho na grama traz uma visita espinhosa para o Linu.',
    cultural_context:
      'Tver fica às margens do Volga, entre Moscou e São Petersburgo. Muitas famílias russas têm uma да́ча, casa de campo com horta onde passam os fins de semana de verão. Ouriços são comuns nesses jardins: comem insetos e minhocas, e leite faz mal a eles.',
    start: 'start',
    glossary: [
      ['да́ча', 'casa de campo'],
      ['ёжик', 'ouriço'],
      ['трава́', 'grama'],
      ['иго́лки', 'espinhos'],
      ['жук / жуки́', 'besouro / besouros'],
      ['нельзя́', 'não pode'],
      ['У тебя́ есть…?', 'Você tem…?'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Да́ча под Тве́рью. Ве́чер. Дя́дя Ко́ля и Ли́ну пьют чай в саду́. Вдруг в траве́ что-то шурши́т: “Фыр-фыр!”',
        translation: 'Uma dacha perto de Tver. Fim de tarde. O tio Kólia e o Linu tomam chá no jardim. De repente, algo farfalha na grama: “Fyr-fyr!”',
        choices: [
          { text: 'Ли́ну смо́трит в траву́.', translation: 'O Linu olha para a grama.', next: 'ezhik' },
          { text: 'Ли́ну бежи́т в дом. Он бои́тся!', translation: 'O Linu corre para dentro de casa. Ele está com medo!', next: 'strakh' },
          {
            text: 'Ли́ну смо́трит на не́бо.',
            translation: 'O Linu olha para o céu.',
            wrong: 'O barulho vem da grama: “в траве́ что-то шурши́т” (algo farfalha na grama). Olhe para baixo!',
          },
        ],
      },
      ezhik: {
        emoji: '🦔',
        text: 'В траве́ сиди́т ёжик. У него́ ма́ленький нос и мно́го иго́лок.',
        translation: 'Na grama está um ouriço. Ele tem um narizinho e muitos espinhos.',
        choices: [{ text: '“Дя́дя Ко́ля, что он ест?”', translation: '“Tio Kólia, o que ele come?”', next: 'eda' }],
      },
      eda: {
        emoji: '🐞',
        text: 'Дя́дя Ко́ля говори́т: “Ёжики едя́т жуко́в и черве́й. А молоко́ им нельзя́!”',
        translation: 'O tio Kólia diz: “Ouriços comem besouros e minhocas. Mas leite eles não podem tomar!”',
        choices: [
          { text: 'Ли́ну несёт ёжику во́ду.', translation: 'O Linu leva água para o ouriço.', next: 'voda' },
          {
            text: 'Ли́ну несёт ёжику молоко́.',
            translation: 'O Linu leva leite para o ouriço.',
            wrong: 'O tio Kólia avisou: “молоко́ им нельзя́” (leite eles não podem). Leite faz mal aos ouriços; água pode.',
          },
        ],
      },
      voda: {
        emoji: '💧',
        text: 'Ёжик пьёт во́ду. Пото́м он ест жука́ и смо́трит на Ли́ну.',
        translation: 'O ouriço bebe a água. Depois ele come um besouro e olha para o Linu.',
        choices: [
          { text: '“Дя́дя Ко́ля, у тебя́ есть фотоаппара́т?”', translation: '“Tio Kólia, você tem uma câmera?”', next: 'final_foto' },
          { text: '“Ёжик, ты мой друг!”', translation: '“Ouriço, você é meu amigo!”', next: 'final_drug' },
        ],
      },
      final_foto: {
        emoji: '📸',
        text: 'У дя́ди Ко́ли есть ста́рый фотоаппара́т. Щёлк! Тепе́рь у Ли́ну есть фо́то: пингви́н и ёжик.',
        translation: 'O tio Kólia tem uma câmera velha. Clique! Agora o Linu tem uma foto: o pinguim e o ouriço.',
        ending: { tone: 'bom', title: 'Foto rara', message: 'Um pinguim e um ouriço na mesma foto: a lembrança mais bonita da dacha.' },
      },
      final_drug: {
        emoji: '🎉',
        text: 'Ка́ждый ве́чер ёжик прихо́дит в сад. Ли́ну ждёт его́ и говори́т: “Приве́т, друг!”',
        translation: 'Todo fim de tarde o ouriço vem ao jardim. O Linu espera por ele e diz: “Oi, amigo!”',
        ending: { tone: 'bom', title: 'Amigo espinhoso', message: 'O Linu ganhou um visitante fiel na dacha e aprendeu o que os ouriços comem.' },
      },
      strakh: {
        emoji: '🚪',
        text: 'Ли́ну бежи́т в дом и закрыва́ет дверь. Дя́дя Ко́ля смеётся: “Э́то про́сто ёжик!”',
        translation: 'O Linu corre para dentro e fecha a porta. O tio Kólia ri: “É só um ouriço!”',
        ending: { tone: 'neutro', title: 'Susto à toa', message: 'Era só um ouriço! Da próxima vez, o Linu pode olhar a grama com calma.' },
      },
    },
  },
  {
    id: 'ru-h20',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Берестяна́я гра́мота',
    emoji: '📜',
    summary: 'Voluntário numa escavação em Velíki Nóvgorod, o Linu encontra um pedaço de casca de bétula com letras.',
    cultural_context:
      'A primeira carta em casca de bétula (берестяна́я гра́мота) foi achada em Velíki Nóvgorod em 1951; hoje já são mais de mil, a maioria dos séculos XI a XV. Entre elas estão as lições do menino Onfim, do século XIII, que rabiscou letras e cavaleiros ao lado do alfabeto.',
    start: 'start',
    glossary: [
      ['раско́пки', 'escavações'],
      ['архео́лог', 'arqueólogo(a)'],
      ['берёста', 'casca de bétula'],
      ['гра́мота', 'carta, documento antigo'],
      ['лопа́тка', 'pazinha'],
      ['в воде́ / в во́ду', 'na água / para a água'],
      ['на коне́', 'a cavalo'],
      ['мой / твой / свой', 'meu / teu / seu próprio'],
    ],
    nodes: {
      start: {
        emoji: '⛏️',
        text: 'Ли́ну в Вели́ком Но́вгороде. Он волонтёр на раско́пках в це́нтре го́рода, и сего́дня его́ пе́рвый день.',
        translation: 'O Linu está em Velíki Nóvgorod. Ele é voluntário nas escavações no centro da cidade, e hoje é o primeiro dia dele.',
        choices: [{ text: 'Ли́ну берёт свою́ лопа́тку и идёт в раско́п.', translation: 'O Linu pega a sua pazinha e vai para a escavação.', next: 'raskop' }],
      },
      raskop: {
        emoji: '🟫',
        text: 'Земля́ здесь мо́края и тёмная. Вдруг Ли́ну ви́дит в земле́ кусо́к берёсты. На нём бу́квы!',
        translation: 'A terra aqui é úmida e escura. De repente, o Linu vê na terra um pedaço de casca de bétula. Tem letras nele!',
        choices: [
          { text: 'Ли́ну зовёт архео́лога А́нну.', translation: 'O Linu chama a arqueóloga Anna.', next: 'anna' },
          { text: 'Ли́ну бы́стро тя́нет берёсту из земли́.', translation: 'O Linu puxa depressa a casca da terra.', next: 'rvyotsya' },
        ],
      },
      anna: {
        emoji: '👩‍🔬',
        text: 'А́нна смо́трит на берёсту и улыба́ется: “Э́то берестяна́я гра́мота! Кладём её в во́ду, а не на со́лнце: суха́я берёста лома́ется.”',
        translation: 'Anna olha a casca e sorri: “É uma carta em casca de bétula! Vamos pôr na água, e não no sol: casca seca quebra.”',
        choices: [
          { text: 'Ли́ну кладёт гра́моту в во́ду.', translation: 'O Linu põe a carta na água.', next: 'laboratoriya' },
          {
            text: 'Ли́ну кладёт гра́моту на со́лнце.',
            translation: 'O Linu põe a carta no sol.',
            wrong: 'A Anna disse “в во́ду, а не на со́лнце” (na água, e não no sol): seca, a casca quebra.',
          },
        ],
      },
      laboratoriya: {
        emoji: '🔍',
        text: 'В лаборато́рии А́нна мо́ет гра́моту в тёплой воде́. На берёсте рису́нок: ма́льчик на коне́ и бу́квы.',
        translation: 'No laboratório, Anna lava a carta em água morna. Na casca há um desenho: um menino a cavalo e letras.',
        choices: [
          { text: '“Како́й краси́вый конь!”', translation: '“Que cavalo bonito!”', next: 'shkola' },
          {
            text: '“Кака́я краси́вая ко́шка!”',
            translation: '“Que gata bonita!”',
            wrong: 'No desenho há “ма́льчик на коне́”: um menino a cavalo (конь). Não tem gato nenhum!',
          },
        ],
      },
      shkola: {
        emoji: '✏️',
        text: '“Здесь ма́льчик у́чит а́збуку. Смотри́: вот его́ бу́квы, а вот его́ конь!” Ли́ну чита́ет: “А, Б, В…”',
        translation: '“Aqui um menino está aprendendo o alfabeto. Olha: aqui estão as letras dele, e aqui o cavalo dele!” O Linu lê: “A, B, V…”',
        choices: [
          { text: 'Ли́ну пи́шет своё и́мя на бума́ге.', translation: 'O Linu escreve o seu nome num papel.', next: 'final_imya' },
          { text: '“А где все гра́моты?”', translation: '“E onde ficam todas as cartas?”', next: 'final_muzey' },
        ],
      },
      final_imya: {
        emoji: '🎉',
        text: 'Ли́ну пи́шет на бума́ге: “ЛИ́НУ”. А́нна смеётся: “Тепе́рь у нас есть и твоя́ гра́мота!”',
        translation: 'O Linu escreve no papel: “LINU”. Anna ri: “Agora temos também a sua carta!”',
        ending: {
          tone: 'bom',
          title: 'Escriba de Nóvgorod',
          message: 'O Linu achou uma carta de séculos atrás e deixou a sua própria assinatura na escavação.',
        },
      },
      final_muzey: {
        emoji: '🏛️',
        text: 'А́нна ведёт Ли́ну в музе́й в Кремле́. Там в витри́нах лежа́т ста́рые гра́моты. Ли́ну ду́мает о свое́й гра́моте.',
        translation: 'Anna leva o Linu ao museu no Kremlin. Lá, nas vitrines, estão cartas antigas. O Linu pensa na sua carta.',
        ending: { tone: 'bom', title: 'Carta no museu', message: 'O Linu viu de perto a escrita do dia a dia da Nóvgorod medieval.' },
      },
      rvyotsya: {
        emoji: '💔',
        text: 'Ли́ну тя́нет берёсту, и она́ рвётся. А́нна вздыха́ет: “Архео́лог рабо́тает ме́дленно, Ли́ну!”',
        translation: 'O Linu puxa a casca, e ela rasga. Anna suspira: “Arqueólogo trabalha devagar, Linu!”',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'A carta rasgou. Em arqueologia, paciência vale ouro. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h21',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Янта́рь по́сле што́рма',
    emoji: '🟠',
    summary: 'Em Kaliningrado, a amiga Olia mostra ao Linu o Museu do Âmbar. Presentes na loja ou caça ao âmbar na praia?',
    cultural_context:
      'A região de Kaliningrado guarda a maior parte das reservas de âmbar conhecidas do mundo. O âmbar não é pedra: é resina de árvores muito antigas, e às vezes traz insetos presos dentro dele há milhões de anos.',
    start: 'start',
    glossary: [
      ['янта́рь', 'âmbar'],
      ['в янтаре́', 'no âmbar, dentro do âmbar'],
      ['смола́', 'resina'],
      ['бу́сы', 'colar de contas'],
      ['в песке́', 'na areia'],
      ['во́доросли', 'algas'],
      ['стекло́', 'vidro'],
      ['мой / моя́ / моё', 'meu / minha / meu (neutro)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Ли́ну в Калинингра́де, на за́паде Росси́и. Его́ подру́га О́ля рабо́тает в Музе́е янтаря́. Сего́дня у неё выходно́й, и она́ спра́шивает: “Куда́ ты хо́чешь: в музе́й и́ли на мо́ре?”',
        translation:
          'O Linu está em Kaliningrado, no oeste da Rússia. A amiga dele, Olia, trabalha no Museu do Âmbar. Hoje ela está de folga e pergunta: “Aonde você quer ir: ao museu ou ao mar?”',
        choices: [
          { text: '“В музе́й! Я люблю́ янта́рь.”', translation: '“Ao museu! Eu adoro âmbar.”', next: 'muzei' },
          { text: '“На мо́ре! Я люблю́ во́ду.”', translation: '“Ao mar! Eu adoro água.”', next: 'more' },
        ],
      },
      muzei: {
        emoji: '🦟',
        text: 'Музе́й нахо́дится в ста́рой ба́шне. В витри́не лежи́т жёлтый янта́рь, а в янтаре́ — ма́ленький кома́р! О́ля говори́т: “Янта́рь — э́то не ка́мень, а о́чень ста́рая смола́.”',
        translation:
          'O museu fica numa torre antiga. Na vitrine há um âmbar amarelo, e dentro do âmbar, um mosquitinho! Olia diz: “O âmbar não é pedra, é uma resina muito antiga.”',
        choices: [
          {
            text: '“Как интере́сно! А где магази́н? Я хочу́ купи́ть пода́рок.”',
            translation: '“Que interessante! E onde fica a loja? Quero comprar um presente.”',
            next: 'magazin',
          },
          {
            text: '“Кома́р в ка́мне? Как стра́нно!”',
            translation: '“Um mosquito dentro de uma pedra? Que estranho!”',
            wrong:
              'A Olia acabou de explicar: “Янта́рь — э́то не ка́мень, а о́чень ста́рая смола́”. O âmbar não é pedra, é resina antiga; por isso o mosquito ficou preso dentro dele.',
          },
        ],
      },
      magazin: {
        emoji: '📿',
        text: 'В магази́не есть бу́сы, се́рьги и брасле́ты из янтаря́. Ли́ну ду́мает: моя́ ма́ма лю́бит бу́сы, а моя́ сестра́ лю́бит брасле́ты.',
        translation: 'Na loja há colares, brincos e pulseiras de âmbar. O Linu pensa: minha mãe adora colares, e minha irmã adora pulseiras.',
        choices: [
          {
            text: 'Ли́ну покупа́ет бу́сы для ма́мы и брасле́т для сестры́.',
            translation: 'O Linu compra um colar para a mãe e uma pulseira para a irmã.',
            next: 'final_podarki',
          },
          { text: '“Нет, я хочу́ найти́ свой янта́рь. Идём на мо́ре!”', translation: '“Não, eu quero achar o meu âmbar. Vamos para o mar!”', next: 'more' },
        ],
      },
      final_podarki: {
        emoji: '🎁',
        text: 'До́ма ма́ма надева́ет бу́сы, а сестра́ — брасле́т. “Спаси́бо, Ли́ну! Э́то наш люби́мый пода́рок!”',
        translation: 'Em casa, a mãe põe o colar, e a irmã, a pulseira. “Obrigada, Linu! É o nosso presente favorito!”',
        ending: { tone: 'bom', title: 'Presentes de âmbar', message: 'O Linu levou para casa um pedacinho do Báltico, e a família adorou.' },
      },
      more: {
        emoji: '🌊',
        text: 'На мо́ре си́льный ве́тер и больши́е во́лны. О́ля говори́т: “По́сле што́рма мо́ре выбра́сывает янта́рь. Ищи́ его́ не в воде́, а в песке́ и в во́дорослях.”',
        translation:
          'No mar há vento forte e ondas grandes. Olia diz: “Depois da tempestade, o mar joga âmbar na praia. Procure não na água, mas na areia e nas algas.”',
        choices: [
          { text: 'Ли́ну и́щет янта́рь в песке́ и в во́дорослях.', translation: 'O Linu procura âmbar na areia e nas algas.', next: 'poisk' },
          {
            text: 'Ли́ну пры́гает в во́ду и и́щет янта́рь на дне.',
            translation: 'O Linu pula na água e procura âmbar no fundo.',
            wrong:
              'A Olia disse “не в воде́, а в песке́ и в во́дорослях”: não na água, mas na areia e nas algas. E com ondas grandes, entrar no mar é perigoso até para pinguim!',
          },
        ],
      },
      poisk: {
        emoji: '🔍',
        text: 'Ли́ну и́щет це́лый час. Вот! В во́дорослях лежи́т ма́ленький жёлтый ка́мешек.',
        translation: 'O Linu procura por uma hora inteira. Olha lá! Nas algas há uma pedrinha amarela.',
        choices: [{ text: '“О́ля, смотри́! Э́то мой пе́рвый янта́рь?”', translation: '“Olia, olha! É o meu primeiro âmbar?”', next: 'proverka' }],
      },
      proverka: {
        emoji: '🤔',
        text: 'О́ля берёт ка́мешек в ру́ку. “Нет, э́то стекло́. Настоя́щий янта́рь лёгкий и тёплый.”',
        translation: 'Olia pega a pedrinha na mão. “Não, isso é vidro. Âmbar de verdade é leve e morno.”',
        choices: [
          { text: 'Ли́ну не спо́рит и и́щет ещё.', translation: 'O Linu não discute e procura mais.', next: 'final_nashel' },
          { text: '“Всё, хва́тит! Я хочу́ в кафе́.”', translation: '“Chega! Eu quero ir a um café.”', next: 'final_kafe' },
        ],
      },
      final_nashel: {
        emoji: '🎉',
        text: 'Ещё полчаса́, и Ли́ну нахо́дит ма́ленький лёгкий ка́мешек. О́ля улыба́ется: “Да, э́то янта́рь! Тепе́рь э́то твой сувени́р.”',
        translation: 'Mais meia hora, e o Linu acha uma pedrinha pequena e leve. Olia sorri: “Sim, isso é âmbar! Agora é o seu suvenir.”',
        ending: { tone: 'bom', title: 'Âmbar de verdade!', message: 'Com paciência, o Linu achou seu próprio âmbar na praia do Báltico.' },
      },
      final_kafe: {
        emoji: '☕',
        text: 'В кафе́ Ли́ну пьёт чай и ест ры́бу. Но в карма́не у него́ то́лько стекло́.',
        translation: 'No café, o Linu toma chá e come peixe. Mas no bolso ele tem só um caco de vidro.',
        ending: { tone: 'neutro', title: 'Suvenir de vidro', message: 'O Linu desistiu cedo demais. Tente de novo e procure com calma!' },
      },
    },
  },
  {
    id: 'ru-h22',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Кому́з без струны́',
    emoji: '🪕',
    summary: 'Em Bishkek, o Linu comprou um komuz no bazar, mas descobre que falta uma corda. O avô do amigo Azamat vai ajudar.',
    cultural_context:
      'O komuz, instrumento de três cordas, é o símbolo musical do Quirguistão. No país, o russo é língua oficial ao lado do quirguiz, e muita gente em Bishkek usa as duas línguas no dia a dia.',
    start: 'start',
    glossary: [
      ['кому́з', 'komuz, instrumento quirguiz de três cordas'],
      ['струна́', 'corda (de instrumento)'],
      ['нет одно́й струны́', 'falta uma corda'],
      ['купи́л', 'comprou'],
      ['пое́дем', 'vamos (de condução)'],
      ['маршру́тка', 'lotação, micro-ônibus'],
      ['бу́ду игра́ть', 'vou tocar'],
      ['забы́л', 'esqueceu'],
    ],
    nodes: {
      start: {
        emoji: '🛍️',
        text: 'Вчера́ Ли́ну был на О́шском база́ре в Бишке́ке и купи́л кому́з, кирги́зский инструме́нт. У кому́за три струны́. Сего́дня друг Азама́т спроси́л его́: “Ты уже́ игра́л на нём?”',
        translation:
          'Ontem o Linu foi ao Bazar de Osh, em Bishkek, e comprou um komuz, um instrumento quirguiz. O komuz tem três cordas. Hoje o amigo Azamat perguntou a ele: “Você já tocou nele?”',
        choices: [
          { text: '“Нет, ещё не игра́л. Ты мне помо́жешь?”', translation: '“Não, ainda não toquei. Você me ajuda?”', next: 'azamat' },
          {
            text: '“Нет, но за́втра я куплю́ кому́з на база́ре!”',
            translation: '“Não, mas amanhã eu vou comprar um komuz no bazar!”',
            wrong: 'Ele já comprou: “Вчера́… купи́л кому́з” (passado). O komuz já é do Linu; agora falta aprender a tocar.',
          },
        ],
      },
      azamat: {
        emoji: '👴',
        text: '“Я игра́ть не уме́ю, — сказа́л Азама́т, — но мой де́душка игра́ет уже́ шестьдеся́т лет. Он живёт недалеко́ от го́рода. Сейча́с мы к нему́ пое́дем!”',
        translation: '“Eu não sei tocar — disse Azamat —, mas meu avô toca há sessenta anos. Ele mora perto da cidade. Agora mesmo vamos até ele!”',
        choices: [{ text: '“Отли́чно! Пое́хали!”', translation: '“Ótimo! Vamos!”', next: 'marshrutka' }],
      },
      marshrutka: {
        emoji: '🏔️',
        text: 'Они́ е́хали на маршру́тке со́рок мину́т. В окне́ Ли́ну ви́дел высо́кие го́ры со сне́гом, хотя́ бы́ло ле́то. Азама́т сказа́л: “Э́то Кирги́зский хребе́т. Зимо́й мы бу́дем там ката́ться на лы́жах!”',
        translation:
          'Eles foram de lotação por quarenta minutos. Pela janela o Linu via montanhas altas com neve, embora fosse verão. Azamat disse: “Esta é a cordilheira do Quirguistão. No inverno vamos esquiar lá!”',
        choices: [{ text: 'Друзья́ вы́шли из маршру́тки и пошли́ к до́му.', translation: 'Os amigos desceram da lotação e foram até a casa.', next: 'dedushka' }],
      },
      dedushka: {
        emoji: '🪕',
        text: 'Де́душка встре́тил их у до́ма. Он взял кому́з, посмотре́л на него́ и сказа́л: “Хоро́ший инструме́нт! Но здесь нет одно́й струны́.”',
        translation: 'O avô os recebeu na porta de casa. Ele pegou o komuz, olhou para ele e disse: “Bom instrumento! Mas aqui está faltando uma corda.”',
        choices: [
          { text: '“Ой! Где я её потеря́л?”', translation: '“Ai! Onde foi que eu a perdi?”', next: 'struna' },
          {
            text: '“Да, у него́ три струны́. Всё в поря́дке!”',
            translation: '“Sim, ele tem três cordas. Está tudo certo!”',
            wrong: 'O avô disse “нет одно́й струны́”: falta uma corda (нет + genitivo). O komuz está só com duas, então algo não está certo.',
          },
        ],
      },
      struna: {
        emoji: '🧰',
        text: 'Ли́ну откры́л су́мку, но струны́ в ней не оказа́лось. Де́душка засмея́лся: “Не волну́йся! У меня́ есть но́вая струна́. Сейча́с я её поста́влю, и пото́м бу́дем игра́ть.”',
        translation:
          'O Linu abriu a bolsa, mas a corda não estava lá. O avô riu: “Não se preocupe! Eu tenho uma corda nova. Agora vou colocá-la, e depois vamos tocar.”',
        choices: [{ text: '“Большо́е спаси́бо!”', translation: '“Muito obrigado!”', next: 'urok' }],
      },
      urok: {
        emoji: '🎶',
        text: 'Це́лый час Ли́ну игра́л одну́ и ту же мело́дию. Снача́ла бы́ло тру́дно, но пото́м всё получи́лось! Де́душка улыбну́лся: “Молоде́ц! А что ты бу́дешь де́лать ве́чером?”',
        translation:
          'Por uma hora inteira o Linu tocou a mesma melodia. No começo foi difícil, mas depois deu tudo certo! O avô sorriu: “Muito bem! E o que você vai fazer à noite?”',
        choices: [
          { text: '“Я сыгра́ю для всей ва́шей семьи́!”', translation: '“Vou tocar para toda a sua família!”', next: 'final_koncert' },
          { text: '“Я пое́ду в гости́ницу и бу́ду спать.”', translation: '“Vou para o hotel dormir.”', next: 'final_son' },
        ],
      },
      final_koncert: {
        emoji: '🎉',
        text: 'Ве́чером вся семья́ собрала́сь за столо́м. Ли́ну сыгра́л свою́ пе́рвую мело́дию, а де́душка пел. Пото́м все е́ли бешбарма́к и пи́ли чай.',
        translation:
          'À noite a família toda se reuniu à mesa. O Linu tocou sua primeira melodia, e o avô cantou. Depois todos comeram beshbarmak e tomaram chá.',
        ending: {
          tone: 'bom',
          title: 'Primeiro show no Quirguistão',
          message: 'O Linu consertou o komuz, aprendeu uma melodia e tocou para uma família inteira.',
        },
      },
      final_son: {
        emoji: '😴',
        text: 'Ли́ну уе́хал в гости́ницу и спал до утра́. У́тром он взял кому́з, но мело́дию уже́ забы́л.',
        translation: 'O Linu foi para o hotel e dormiu até de manhã. De manhã ele pegou o komuz, mas já tinha esquecido a melodia.',
        ending: {
          tone: 'neutro',
          title: 'Melodia esquecida',
          message: 'Música se aprende tocando! Da próxima vez, aproveite a noite com a família do Azamat.',
        },
      },
    },
  },
  {
    id: 'ru-h23',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Раке́та на Во́лге',
    emoji: '🚀',
    summary: 'Em Samara, o amigo Dima promete mostrar ao Linu um foguete de verdade. Museu, comida de cosmonauta e um passeio pelo Volga.',
    cultural_context:
      'Em Samara, à beira do Volga, são fabricados os foguetes da família Soyuz, que levam cosmonautas ao espaço. Na frente do museu “Samara Cósmica”, um foguete Soyuz de verdade fica em pé, apontado para o céu.',
    start: 'start',
    glossary: [
      ['раке́та', 'foguete'],
      ['за́втра я покажу́', 'amanhã eu vou mostrar'],
      ['биле́тов нет', 'não há ingressos'],
      ['мно́го люде́й', 'muita gente'],
      ['скафа́ндр', 'traje espacial'],
      ['на́бережная', 'orla, calçadão à beira do rio'],
      ['друго́й бе́рег', 'a outra margem'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Ли́ну прие́хал в Сама́ру на три дня. Его́ друг Ди́ма сказа́л: “За́втра я покажу́ тебе́ настоя́щую раке́ту!” Ли́ну о́чень удиви́лся.',
        translation:
          'O Linu chegou a Samara para passar três dias. O amigo dele, Dima, disse: “Amanhã eu vou te mostrar um foguete de verdade!” O Linu ficou muito surpreso.',
        choices: [
          { text: 'Ли́ну ждёт до за́втра.', translation: 'O Linu espera até amanhã.', next: 'raketa' },
          {
            text: 'Ли́ну сра́зу бежи́т на у́лицу смотре́ть раке́ту.',
            translation: 'O Linu corre na hora para a rua ver o foguete.',
            wrong: 'O Dima disse “за́втра я покажу́”: futuro. Ele vai mostrar o foguete amanhã, não agora.',
          },
        ],
      },
      raketa: {
        emoji: '🚀',
        text: 'На сле́дующий день друзья́ пришли́ к музе́ю “Сама́ра косми́ческая”. Пе́ред музе́ем стои́т настоя́щая раке́та “Сою́з”. Ди́ма объясни́л: “Таки́е раке́ты де́лают здесь, в Сама́ре.”',
        translation:
          'No dia seguinte, os amigos chegaram ao museu “Samara Cósmica”. Na frente do museu há um foguete Soyuz de verdade. Dima explicou: “Foguetes assim são feitos aqui, em Samara.”',
        choices: [{ text: '“Пойдём в музе́й! Я куплю́ биле́ты.”', translation: '“Vamos entrar no museu! Eu compro os ingressos.”', next: 'kassa' }],
      },
      kassa: {
        emoji: '🎟️',
        text: 'В ка́ссе де́вушка сказа́ла: “Биле́тов на экску́рсию уже́ нет. Но вы мо́жете посмотре́ть музе́й са́ми.”',
        translation: 'Na bilheteria, a moça disse: “Já não há ingressos para a visita guiada. Mas vocês podem ver o museu por conta própria.”',
        choices: [
          { text: '“Хорошо́, тогда́ два биле́та без экску́рсии.”', translation: '“Tudo bem, então dois ingressos sem visita guiada.”', next: 'vnutri' },
          {
            text: '“Отли́чно! Два биле́та на экску́рсию, пожа́луйста.”',
            translation: '“Ótimo! Dois ingressos para a visita guiada, por favor.”',
            wrong: 'A moça disse “биле́тов на экску́рсию уже́ нет”: não há mais ingressos para a visita guiada (нет + genitivo plural).',
          },
        ],
      },
      vnutri: {
        emoji: '👨‍🚀',
        text: 'В музе́е бы́ло мно́го люде́й и мно́го интере́сного: скафа́ндры, моде́ли спу́тников, фотогра́фии космона́втов. В магази́не Ли́ну уви́дел еду́ космона́втов в ту́бах. “Хо́чешь попро́бовать?” — спроси́л Ди́ма.',
        translation:
          'No museu havia muita gente e muita coisa interessante: trajes espaciais, maquetes de satélites, fotos de cosmonautas. Na loja o Linu viu comida de cosmonauta em tubos. “Quer provar?” — perguntou Dima.',
        choices: [
          { text: '“Коне́чно! Я куплю́ борщ.”', translation: '“Claro! Vou comprar um borsch.”', next: 'tuba' },
          { text: '“Нет, я пое́м пото́м, на Во́лге.”', translation: '“Não, vou comer depois, à beira do Volga.”', next: 'naberezhnaya' },
        ],
      },
      tuba: {
        emoji: '🥫',
        text: 'Ли́ну откры́л ту́бу и попро́бовал борщ. Он был холо́дный, но вку́сный! “Когда́ я бу́ду космона́втом, я бу́ду есть э́то ка́ждый день”, — сказа́л Ли́ну.',
        translation: 'O Linu abriu o tubo e provou o borsch. Estava frio, mas gostoso! “Quando eu for cosmonauta, vou comer isso todo dia” — disse o Linu.',
        choices: [{ text: 'Друзья́ иду́т на на́бережную.', translation: 'Os amigos vão para a orla.', next: 'naberezhnaya' }],
      },
      naberezhnaya: {
        emoji: '🌅',
        text: 'Пото́м друзья́ пошли́ на на́бережную Во́лги. Она́ о́чень дли́нная, и по ней мо́жно гуля́ть часа́ми. Ди́ма спроси́л: “Что бу́дем де́лать? Пойдём на пляж и́ли поката́емся на ло́дке?”',
        translation:
          'Depois os amigos foram para a orla do Volga. Ela é muito comprida, dá para passear por horas. Dima perguntou: “O que vamos fazer? Vamos à praia ou dar uma volta de barco?”',
        choices: [
          { text: '“Дава́й пое́дем на ло́дке на друго́й бе́рег!”', translation: '“Vamos de barco até a outra margem!”', next: 'final_zhiguli' },
          { text: '“Пойдём на пляж! Я бу́ду пла́вать.”', translation: '“Vamos à praia! Eu vou nadar.”', next: 'final_plyazh' },
        ],
      },
      final_zhiguli: {
        emoji: '⛰️',
        text: 'Ло́дка плыла́ полчаса́. На друго́м берегу́ Ли́ну уви́дел зелёные Жигулёвские го́ры. “За́втра я обяза́тельно сюда́ верну́сь!” — сказа́л он.',
        translation: 'O barco navegou meia hora. Na outra margem, o Linu viu os verdes montes Jigulí. “Amanhã eu volto aqui sem falta!” — disse ele.',
        ending: {
          tone: 'bom',
          title: 'Do foguete às montanhas',
          message: 'Num só dia, o Linu viu um foguete de verdade, provou borsch de cosmonauta e descobriu os montes Jigulí.',
        },
      },
      final_plyazh: {
        emoji: '🌧️',
        text: 'На пля́же бы́ло мно́го люде́й и ма́ло ме́ста. Ли́ну попла́вал пять мину́т, а пото́м пошёл си́льный дождь. Друзья́ побежа́ли домо́й мо́крые.',
        translation:
          'Na praia havia muita gente e pouco espaço. O Linu nadou cinco minutos, e depois caiu uma chuva forte. Os amigos correram para casa encharcados.',
        ending: { tone: 'neutro', title: 'Praia cheia, chuva forte', message: 'O dia terminou molhado. Que tal atravessar o Volga de barco da próxima vez?' },
      },
    },
  },
  {
    id: 'ru-h24',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Ца́пля и лото́сы',
    emoji: '🪷',
    summary: 'No delta do Volga, perto de Astracã, o Linu sai de barco com uma guia para ver aves e campos de lótus.',
    cultural_context:
      'A Reserva de Astracã, no delta do Volga, foi criada em 1919 e é uma das reservas naturais mais antigas da Rússia. No verão, campos de lótus cor-de-rosa cobrem as águas rasas do delta.',
    start: 'start',
    glossary: [
      ['де́льта', 'delta'],
      ['спаса́тельный жиле́т', 'colete salva-vidas'],
      ['Наде́ньте! / Сади́тесь!', 'Vista! / Sente-se! (formal)'],
      ['Не шуми́те!', 'Não faça barulho!'],
      ['ца́пля', 'garça'],
      ['лото́с', 'lótus'],
      ['ему́ нра́вится', 'ele gosta'],
      ['фотографи́ровать / сфотографи́ровать', 'fotografar'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Ли́ну прие́хал в А́страхань, в де́льту Во́лги. Ра́но у́тром его́ ждёт ло́дка: сего́дня он пое́дет смотре́ть лото́сы. Гид Ни́на Ива́новна говори́т: “Наде́ньте спаса́тельный жиле́т и сади́тесь, пожа́луйста!”',
        translation:
          'O Linu chegou a Astracã, no delta do Volga. De manhã cedo um barco o espera: hoje ele vai ver os lótus. A guia Nina Ivánovna diz: “Vista o colete salva-vidas e sente-se, por favor!”',
        choices: [
          { text: 'Ли́ну надева́ет жиле́т и сади́тся в ло́дку.', translation: 'O Linu veste o colete e se senta no barco.', next: 'lodka' },
          {
            text: 'Ли́ну сра́зу сади́тся в ло́дку без жиле́та.',
            translation: 'O Linu senta no barco logo, sem colete.',
            wrong: 'A guia usou o imperativo “Наде́ньте спаса́тельный жиле́т”: primeiro o colete, depois “сади́тесь”. Sem colete, nada de passeio!',
          },
        ],
      },
      lodka: {
        emoji: '🌾',
        text: 'Ло́дка ме́дленно плывёт по у́зкой прото́ке. Ни́на Ива́новна ти́хо говори́т: “Смотри́те, вон там, в камыша́х, стои́т ца́пля.” Ли́ну молчи́т: ему́ о́чень нра́вится тишина́ де́льты.',
        translation:
          'O barco avança devagar por um canal estreito. Nina Ivánovna diz baixinho: “Olhe, ali, no meio dos juncos, tem uma garça.” O Linu fica calado: ele está adorando o silêncio do delta.',
        choices: [
          { text: 'Ли́ну хо́чет сфотографи́ровать ца́плю.', translation: 'O Linu quer fotografar a garça.', next: 'caplya' },
          { text: '“А где пелика́ны? Я хочу́ их уви́деть!”', translation: '“E os pelicanos? Eu quero vê-los!”', next: 'pelikany' },
        ],
      },
      caplya: {
        emoji: '📷',
        text: 'Ли́ну гото́вит фотоаппара́т: он хо́чет сня́ть ца́плю в полёте, но она́ стои́т и не дви́гается. Гид шёпотом говори́т ему́: “Не шуми́те и не встава́йте. Подожди́те немно́го, сейча́с она́ полети́т.”',
        translation:
          'O Linu prepara a câmera: quer fotografar a garça voando, mas ela fica parada, sem se mexer. A guia sussurra para ele: “Não faça barulho e não se levante. Espere um pouco, ela já vai voar.”',
        choices: [
          { text: 'Ли́ну сиди́т ти́хо и ждёт.', translation: 'O Linu fica sentado em silêncio e espera.', next: 'snimok' },
          {
            text: 'Ли́ну встаёт в ло́дке и ма́шет ца́пле.',
            translation: 'O Linu se levanta no barco e acena para a garça.',
            wrong:
              'A guia pediu “не шуми́те и не встава́йте”: não faça barulho e não se levante. Com o imperativo negativo, o russo usa o imperfectivo (встава́ть).',
          },
        ],
      },
      snimok: {
        emoji: '🐦',
        text: 'Вдруг ца́пля взлета́ет, и Ли́ну успева́ет нажа́ть на кно́пку. “Сфотографи́ровал!” — ра́дуется он. “Отли́чно, — говори́т гид. — А тепе́рь пое́дем к лото́сам.”',
        translation:
          'De repente a garça levanta voo, e o Linu consegue apertar o botão a tempo. “Fotografei!” — comemora ele. “Ótimo — diz a guia. — E agora vamos aos lótus.”',
        choices: [{ text: '“Пое́хали!”', translation: '“Vamos!”', next: 'lotosy' }],
      },
      pelikany: {
        emoji: '🧭',
        text: 'Гид отвеча́ет: “Пелика́ны живу́т далеко́, плыть туда́ два часа́. Е́сли мы поплывём к ним, то не успе́ем к лото́сам.” Ли́ну ду́мает, что вы́брать.',
        translation:
          'A guia responde: “Os pelicanos vivem longe, são duas horas de barco até lá. Se formos até eles, não vamos chegar a tempo aos lótus.” O Linu pensa no que escolher.',
        choices: [
          { text: '“Всё равно́ плывём к пелика́нам!”', translation: '“Mesmo assim, vamos até os pelicanos!”', next: 'final_pelikany' },
          { text: '“Хорошо́, тогда́ к лото́сам!”', translation: '“Tudo bem, então vamos aos lótus!”', next: 'lotosy' },
        ],
      },
      lotosy: {
        emoji: '🪷',
        text: 'За поворо́том Ли́ну ви́дит огро́мное по́ле лото́сов: ро́зовые цветы́ и больши́е зелёные ли́стья. Гид говори́т: “Лото́сы здесь цвету́т в ию́ле и в а́вгусте. Рвать их нельзя́, но фотографи́ровать мо́жно.”',
        translation:
          'Depois da curva, o Linu vê um campo enorme de lótus: flores cor-de-rosa e grandes folhas verdes. A guia diz: “Aqui os lótus florescem em julho e agosto. Não pode arrancá-los, mas pode fotografar.”',
        choices: [
          { text: 'Ли́ну фотографи́рует лото́сы с ло́дки.', translation: 'O Linu fotografa os lótus do barco.', next: 'final_lotosy' },
          {
            text: 'Ли́ну срыва́ет са́мый большо́й цвето́к для ма́мы.',
            translation: 'O Linu arranca a maior flor para a mãe.',
            wrong: 'A guia avisou: “Рвать их нельзя́” (não se pode arrancá-los). Na reserva, só é permitido fotografar.',
          },
        ],
      },
      final_lotosy: {
        emoji: '🍉',
        text: 'Ли́ну де́лает сто сни́мков лото́сов. Ве́чером на при́стани гид да́рит ему́ большо́й арбу́з: “Э́то вам на па́мять об А́страхани!” Ли́ну счастли́в: э́то лу́чший день его́ путеше́ствия.',
        translation:
          'O Linu tira cem fotos dos lótus. À noite, no cais, a guia lhe dá de presente uma melancia grande: “É para o senhor se lembrar de Astracã!” O Linu está feliz: é o melhor dia da viagem dele.',
        ending: { tone: 'bom', title: 'Mar de lótus', message: 'O Linu fotografou a garça, viu os lótus em flor e ainda ganhou uma melancia de Astracã.' },
      },
      final_pelikany: {
        emoji: '☀️',
        text: 'Два часа́ Ли́ну сиди́т на со́лнце. Пелика́нов он ви́дит, но то́лько издалека́, а на лото́сы вре́мени уже́ не остаётся. “Ничего́, — говори́т Ни́на Ива́новна, — приезжа́йте к нам ещё!”',
        translation:
          'Por duas horas o Linu fica sentado no sol. Ele vê os pelicanos, mas só de longe, e já não sobra tempo para os lótus. “Não tem problema — diz Nina Ivánovna —, venha nos visitar de novo!”',
        ending: { tone: 'neutro', title: 'Pelicanos de longe', message: 'O Linu viu os pelicanos só de longe e perdeu os lótus. Ouça a guia da próxima vez!' },
      },
    },
  },
  {
    id: 'ru-h25',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Ба́бушкин пиро́г',
    emoji: '🥧',
    summary: 'Em Pskov, a avó da amiga Vária ensina o Linu a fazer uma torta de repolho. Ajudar na cozinha ou passear pelo Krom?',
    cultural_context:
      'Pskov é uma das cidades mais antigas da Rússia: aparece nas crônicas já no ano de 903. O seu kremlin, chamado Krom, fica no ponto onde o rio Pskova deságua no rio Velikaia.',
    start: 'start',
    glossary: [
      ['пиро́г с капу́стой', 'torta de repolho'],
      ['те́сто', 'massa'],
      ['духо́вка', 'forno'],
      ['Вы́мой ру́ки! / Раската́й те́сто!', 'Lave as mãos! / Abra a massa!'],
      ['Не открыва́й!', 'Não abra!'],
      ['помо́чь ба́бушке', 'ajudar a avó'],
      ['го́роду бо́льше ты́сячи лет', 'a cidade tem mais de mil anos'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Ли́ну в Пско́ве, в гостя́х у подру́ги Ва́ри. Ве́чером к ним приду́т го́сти, и ба́бушка Ва́ри печёт пиро́г с капу́стой. “Ли́ну, помоги́ мне, пожа́луйста!” — про́сит она́.',
        translation:
          'O Linu está em Pskov, hospedado na casa da amiga Vária. À noite vão chegar visitas, e a avó da Vária está fazendo uma torta de repolho. “Linu, me ajude, por favor!” — pede ela.',
        choices: [
          { text: '“Коне́чно! Что мне де́лать?”', translation: '“Claro! O que eu faço?”', next: 'testo' },
          { text: '“Извини́те, я лу́чше пойду́ гуля́ть с Ва́рей.”', translation: '“Desculpe, prefiro ir passear com a Vária.”', next: 'progulka' },
        ],
      },
      progulka: {
        emoji: '🚶',
        text: 'Ли́ну и Ва́ря це́лый день гуля́ют по го́роду. Когда́ они́ возвраща́ются, го́сти уже́ ушли́, а от пирога́ оста́лся то́лько ма́ленький кусо́чек. “В сле́дующий раз помоги́ мне!” — смеётся ба́бушка.',
        translation:
          'O Linu e a Vária passeiam pela cidade o dia inteiro. Quando voltam, as visitas já foram embora, e da torta sobrou só um pedacinho. “Da próxima vez, me ajude!” — ri a avó.',
        ending: {
          tone: 'neutro',
          title: 'Só um pedacinho',
          message: 'O passeio foi bom, mas o Linu perdeu a aula de culinária e quase toda a torta. Tente de novo!',
        },
      },
      testo: {
        emoji: '🧑‍🍳',
        text: 'Ба́бушка даёт ему́ фа́ртук и говори́т: “Вы́мой ру́ки и раската́й те́сто. Не торопи́сь: те́сто должно́ быть то́нким.” Ли́ну ду́мает, что э́то о́чень интере́сно.',
        translation:
          'A avó lhe dá um avental e diz: “Lave as mãos e abra a massa. Não tenha pressa: a massa tem que ficar fina.” O Linu acha isso muito interessante.',
        choices: [
          { text: 'Ли́ну мо́ет ру́ки и ме́дленно раска́тывает те́сто.', translation: 'O Linu lava as mãos e abre a massa devagar.', next: 'kapusta' },
          {
            text: '“Хорошо́! Ру́ки я мыть не бу́ду.”',
            translation: '“Certo! Não vou lavar as mãos.”',
            wrong: 'A avó disse “Вы́мой ру́ки”: é um imperativo, lave as mãos. Na cozinha, primeiro as mãos limpas!',
          },
        ],
      },
      kapusta: {
        emoji: '🥬',
        text: 'Ба́бушка кладёт на те́сто капу́сту с яйцо́м. “Тепе́рь закро́й пиро́г и поста́вь его́ в духо́вку. То́лько не открыва́й духо́вку полчаса́, ина́че пиро́г ося́дет!”',
        translation:
          'A avó põe sobre a massa o repolho com ovo. “Agora feche a torta e ponha no forno. Só não abra o forno durante meia hora, senão a torta murcha!”',
        choices: [
          { text: 'Ли́ну ста́вит пиро́г в духо́вку и не открыва́ет её.', translation: 'O Linu põe a torta no forno e não o abre.', next: 'pirog' },
          {
            text: 'Ка́ждые пять мину́т Ли́ну открыва́ет духо́вку и смо́трит на пиро́г.',
            translation: 'A cada cinco minutos, o Linu abre o forno e olha a torta.',
            wrong:
              'A avó pediu “не открыва́й духо́вку полчаса́”: não abrir o forno nenhuma vez por meia hora. O imperativo negativo com imperfectivo proíbe a ação.',
          },
        ],
      },
      pirog: {
        emoji: '⏲️',
        text: 'Пока́ пиро́г печётся, Ва́ря зовёт Ли́ну: “Пойдём на полчаса́ в Кремль! Отту́да ви́дно, как Пско́ва впада́ет в Вели́кую.” Ба́бушка говори́т, что сама́ доста́нет пиро́г.',
        translation:
          'Enquanto a torta assa, a Vária chama o Linu: “Vamos ao Kremlin por meia hora! De lá dá para ver o Pskova desaguar no Velikaia.” A avó diz que ela mesma tira a torta do forno.',
        choices: [
          { text: 'Ли́ну идёт с Ва́рей в Кремль.', translation: 'O Linu vai com a Vária ao Kremlin.', next: 'krom' },
          { text: 'Ли́ну остаётся на ку́хне и ждёт пиро́г.', translation: 'O Linu fica na cozinha esperando a torta.', next: 'kuhnya' },
        ],
      },
      krom: {
        emoji: '🏰',
        text: 'Пско́вский кремль стои́т на мысу́, там, где встреча́ются две реки́. Ва́ря расска́зывает Ли́ну, что го́роду бо́льше ты́сячи лет. Ему́ так нра́вится вид, что он забыва́ет о вре́мени.',
        translation:
          'O kremlin de Pskov fica num promontório, onde dois rios se encontram. A Vária conta ao Linu que a cidade tem mais de mil anos. Ele gosta tanto da vista que esquece da hora.',
        choices: [
          {
            text: '“Ва́ря, пора́ домо́й! Ба́бушка нас ждёт.”',
            translation: '“Vária, está na hora de ir para casa! A vovó está nos esperando.”',
            next: 'final_vmeste',
          },
          { text: '“Дава́й погуля́ем ещё час!”', translation: '“Vamos passear mais uma hora!”', next: 'final_pozdno' },
        ],
      },
      kuhnya: {
        emoji: '🥧',
        text: 'Ли́ну сиди́т на ку́хне и смо́трит на часы́. Че́рез полчаса́ ба́бушка открыва́ет духо́вку: пиро́г получи́лся высо́кий и румя́ный! “Отнеси́ его́ на стол и позови́ госте́й”, — про́сит она́.',
        translation:
          'O Linu fica sentado na cozinha olhando o relógio. Meia hora depois, a avó abre o forno: a torta ficou alta e dourada! “Leve para a mesa e chame as visitas” — pede ela.',
        choices: [{ text: 'Ли́ну несёт пиро́г на стол.', translation: 'O Linu leva a torta para a mesa.', next: 'final_pirog' }],
      },
      final_pirog: {
        emoji: '🎉',
        text: 'Го́сти про́буют пиро́г и хва́лят его́. Ба́бушка говори́т: “Мне помога́л Ли́ну!” Ему́ о́чень прия́тно, и он про́сит ба́бушку записа́ть ему́ реце́пт.',
        translation: 'As visitas provam a torta e a elogiam. A avó diz: “O Linu me ajudou!” Ele fica muito contente e pede à avó que anote a receita para ele.',
        ending: { tone: 'bom', title: 'Receita de família', message: 'O Linu seguiu cada instrução da avó e levou para casa a receita da torta de repolho.' },
      },
      final_vmeste: {
        emoji: '🎉',
        text: 'Когда́ они́ возвраща́ются, пиро́г уже́ стои́т на столе́. Ба́бушка говори́т гостя́м: “Те́сто раската́л Ли́ну!” Всем о́чень нра́вится пиро́г, а Ли́ну обеща́ет ба́бушке испе́чь тако́й же в Брази́лии.',
        translation:
          'Quando eles voltam, a torta já está na mesa. A avó diz às visitas: “Foi o Linu que abriu a massa!” Todos adoram a torta, e o Linu promete à avó fazer uma igual no Brasil.',
        ending: { tone: 'bom', title: 'Torta e kremlin', message: 'O Linu ajudou na cozinha, viu o Krom de Pskov e voltou a tempo para a festa.' },
      },
      final_pozdno: {
        emoji: '🕰️',
        text: 'Они́ гуля́ют ещё час. Когда́ они́ возвраща́ются, пиро́г уже́ холо́дный, а го́сти почти́ всё съе́ли. “Ничего́, — говори́т ба́бушка, — зато́ тебе́ понра́вился наш Кремль!”',
        translation:
          'Eles passeiam mais uma hora. Quando voltam, a torta já está fria e as visitas comeram quase tudo. “Não tem problema — diz a avó —, pelo menos você gostou do nosso Kremlin!”',
        ending: { tone: 'neutro', title: 'Torta fria', message: 'O Linu se distraiu com a vista e chegou tarde. Da próxima vez, fique de olho no relógio!' },
      },
    },
  },
  {
    id: 'ru-h26',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Два́дцать два ку́пола',
    emoji: '⛪',
    summary: 'De Petrozavodsk, o Linu pega um barco rápido no lago Onega até a ilha de Kiji e sua igreja de madeira.',
    cultural_context:
      'Petrozavodsk, capital da Carélia, fica às margens do lago Onega, o segundo maior da Europa. Na ilha de Kiji, Patrimônio Mundial da UNESCO, a Igreja da Transfiguração (1714) tem 22 cúpulas de madeira; segundo a lenda, foi erguida sem nenhum prego.',
    start: 'start',
    glossary: [
      ['е́хать / пое́хать', 'ir (de veículo)'],
      ['приплы́ть / уплы́ть', 'chegar / partir (navegando)'],
      ['при́стань', 'cais, atracadouro'],
      ['па́луба', 'convés'],
      ['ку́пол / купола́', 'cúpula / cúpulas'],
      ['кали́тка', 'pastelzinho aberto da Carélia'],
      ['рабо́тать экскурсово́дом', 'trabalhar como guia'],
      ['с карто́шкой', 'com batata'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Ра́но у́тром Ли́ну прие́хал на по́езде в Петрозаво́дск. Он вы́шел из гости́ницы и пошёл на на́бережную Оне́жского о́зера. Там его́ ждала́ подру́га О́ля, кото́рая рабо́тает экскурсово́дом.',
        translation:
          'De manhã cedo, o Linu chegou de trem a Petrozavodsk. Ele saiu do hotel e foi até a orla do lago Onega. Lá esperava por ele a amiga Olia, que trabalha como guia.',
        choices: [
          { text: 'Сра́зу пое́хать с О́лей на о́стров Ки́жи.', translation: 'Ir direto com a Olia para a ilha de Kiji.', next: 'pristan' },
          { text: 'Снача́ла погуля́ть по на́бережной.', translation: 'Primeiro passear pela orla.', next: 'naberezhnaya' },
        ],
      },
      naberezhnaya: {
        emoji: '🗿',
        text: 'Ли́ну и О́ля гуля́ют вдоль о́зера. На на́бережной стоя́т совреме́нные скульпту́ры, и Ли́ну фотографи́руется с ка́ждой из них. Вдруг О́ля смо́трит на часы́: “Ско́рее! Наш теплохо́д ухо́дит че́рез пятна́дцать мину́т!”',
        translation:
          'O Linu e a Olia passeiam ao longo do lago. Na orla há esculturas modernas, e o Linu tira foto com cada uma delas. De repente a Olia olha o relógio: “Rápido! Nosso barco sai daqui a quinze minutos!”',
        choices: [
          { text: 'Бежа́ть с О́лей на при́стань.', translation: 'Correr com a Olia até o cais.', next: 'pristan' },
          {
            text: '“Отли́чно, у нас ещё це́лый час!”',
            translation: '“Ótimo, ainda temos uma hora inteira!”',
            wrong: 'A Olia disse que o barco sai daqui a quinze minutos (“ухо́дит че́рез пятна́дцать мину́т”). Não dá tempo para passear mais!',
          },
        ],
      },
      pristan: {
        emoji: '🚤',
        text: 'У при́стани стои́т “Метео́р” — бы́стрый теплохо́д на подво́дных кры́льях. Ли́ну и О́ля захо́дят на борт, и теплохо́д отхо́дит от бе́рега. О́ля говори́т: “Мо́жно сиде́ть в са́лоне, но с па́лубы ви́дно всё о́зеро.”',
        translation:
          'No cais está o Meteor, um barco rápido de hidrofólio. O Linu e a Olia sobem a bordo, e o barco se afasta da margem. A Olia diz: “Dá para ficar sentado na cabine, mas do convés se vê o lago inteiro.”',
        choices: [
          { text: 'Вы́йти с О́лей на па́лубу.', translation: 'Sair com a Olia para o convés.', next: 'paluba' },
          { text: 'Оста́ться в тёплом са́лоне.', translation: 'Ficar na cabine quentinha.', next: 'salon' },
        ],
      },
      paluba: {
        emoji: '🌬️',
        text: 'На па́лубе ду́ет холо́дный ве́тер, но Ли́ну — пингви́н, ему́ не хо́лодно. Теплохо́д плывёт ми́мо ма́леньких лесны́х острово́в. Наконе́ц впереди́ появля́ются деревя́нные купола́!',
        translation:
          'No convés sopra um vento frio, mas o Linu é pinguim, ele não sente frio. O barco passa por ilhotas cobertas de floresta. Finalmente, lá na frente, aparecem cúpulas de madeira!',
        choices: [{ text: '“Смотри́, О́ля! Мы приплы́ли!”', translation: '“Olha, Olia! Chegamos!”', next: 'ostrov' }],
      },
      salon: {
        emoji: '😴',
        text: 'В са́лоне тепло́, и Ли́ну бы́стро засыпа́ет. Он спит всю доро́гу и не ви́дит ни о́зера, ни острово́в. Вдруг О́ля бу́дит его́: “Встава́й, мы уже́ приплы́ли!”',
        translation:
          'Na cabine está quentinho, e o Linu adormece rápido. Ele dorme a viagem inteira e não vê nem o lago nem as ilhas. De repente a Olia o acorda: “Levanta, já chegamos!”',
        choices: [{ text: 'Вы́йти с О́лей на бе́рег.', translation: 'Descer com a Olia para a margem.', next: 'ostrov' }],
      },
      ostrov: {
        emoji: '⛪',
        text: 'На о́строве Ли́ну ви́дит деревя́нную це́рковь с двадцатью́ двумя́ купола́ми. О́ля расска́зывает: “Э́то Преображе́нская це́рковь. По леге́нде, пло́тники постро́или её без еди́ного гвоздя́.” Ли́ну открыва́ет рот от удивле́ния.',
        translation:
          'Na ilha, o Linu vê uma igreja de madeira com vinte e duas cúpulas. A Olia conta: “Esta é a Igreja da Transfiguração. Segundo a lenda, os carpinteiros a construíram sem um único prego.” O Linu fica de boca aberta.',
        choices: [
          { text: 'Обойти́ це́рковь и сосчита́ть все купола́.', translation: 'Dar a volta na igreja e contar todas as cúpulas.', next: 'kupola' },
          {
            text: 'Пойти́ к ста́рому крестья́нскому до́му, где па́хнет пирога́ми.',
            translation: 'Ir até a velha casa camponesa, onde há cheiro de tortas.',
            next: 'dom',
          },
          {
            text: 'Спроси́ть: “А ско́лько гвозде́й в э́той це́ркви?”',
            translation: 'Perguntar: “E quantos pregos há nesta igreja?”',
            wrong: 'A Olia acabou de contar a lenda: a igreja foi construída “без еди́ного гвоздя́”, sem um único prego!',
          },
        ],
      },
      kupola: {
        emoji: '🔢',
        text: 'Ли́ну хо́дит вокру́г це́ркви и счита́ет купола́: “Оди́н, два, три…” Он три ра́за сбива́ется, и О́ля смеётся. Наконе́ц он досчита́л до двадцати́ двух!',
        translation:
          'O Linu anda em volta da igreja contando as cúpulas: “Uma, duas, três…” Ele se perde três vezes, e a Olia ri. Finalmente ele chegou até vinte e duas!',
        choices: [{ text: 'Пойти́ с О́лей к крестья́нскому до́му.', translation: 'Ir com a Olia até a casa camponesa.', next: 'dom' }],
      },
      dom: {
        emoji: '🥧',
        text: 'В ста́ром крестья́нском до́ме хозя́йка печёт кали́тки — ма́ленькие откры́тые пирожки́ из ржано́го те́ста. Она́ спра́шивает: “Вам кали́тку с карто́шкой и́ли с пшённой ка́шей?” Ли́ну не мо́жет вы́брать.',
        translation:
          'Na velha casa camponesa, a dona da casa assa kalitki, pasteizinhos abertos de massa de centeio. Ela pergunta: “Quer uma kalitka de batata ou de mingau de painço?” O Linu não consegue escolher.',
        choices: [
          { text: 'Взять одну́ с карто́шкой и одну́ с ка́шей.', translation: 'Pegar uma de batata e uma de mingau.', next: 'final_bom' },
          {
            text: 'Сказа́ть, что он не голо́ден, и уйти́ гуля́ть по о́строву.',
            translation: 'Dizer que não está com fome e sair para passear pela ilha.',
            next: 'final_ushel',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ли́ну съел две кали́тки и вы́пил ча́ю с хозя́йкой. Пото́м они́ с О́лей пошли́ на при́стань и верну́лись в Петрозаво́дск на “Метео́ре”. Ве́чером он написа́л ма́ме: “Я ви́дел це́рковь с двадцатью́ двумя́ купола́ми!”',
        translation:
          'O Linu comeu duas kalitki e tomou chá com a dona da casa. Depois ele e a Olia foram para o cais e voltaram a Petrozavodsk no Meteor. À noite, ele escreveu para a mãe: “Eu vi uma igreja com vinte e duas cúpulas!”',
        ending: {
          tone: 'bom',
          title: 'Kiji de barriga cheia!',
          message: 'O Linu viu a igreja das 22 cúpulas e provou as kalitki, o pastelzinho típico da Carélia.',
        },
      },
      final_ushel: {
        emoji: '⛴️',
        text: 'Ли́ну ухо́дит далеко́ на се́вер о́строва, к ста́рой ме́льнице. Когда́ он прихо́дит на при́стань, “Метео́р” уже́ уплы́л. Сле́дующий теплохо́д бу́дет то́лько ве́чером!',
        translation:
          'O Linu vai longe, até o norte da ilha, onde há um velho moinho. Quando ele chega ao cais, o Meteor já partiu. O próximo barco é só à noite!',
        ending: { tone: 'neutro', title: 'O barco partiu', message: 'Passear é bom, mas o Linu perdeu o barco e as kalitki. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h27',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Пря́ничный пингви́н',
    emoji: '🦌',
    summary: 'Em pleno inverno em Arkhángelsk, o Linu aprende a fazer as kozuli, biscoitos de mel e especiarias típicos do Norte.',
    cultural_context:
      'Arkhángelsk, fundada em 1584 às margens do Dvina do Norte, perto do mar Branco, foi durante mais de um século o principal porto marítimo da Rússia. As “козу́ли”, pryaniki (biscoitos de mel e especiarias) em forma de renas, pássaros e peixes decorados com glacê branco, são o presente típico do Natal e do Ano-Novo na região.',
    start: 'start',
    glossary: [
      ['пека́рня', 'padaria'],
      ['пря́ник', 'biscoito de mel e especiarias, pão de mel'],
      ['козу́ли', 'biscoitos decorados típicos de Arkhángelsk'],
      ['глазу́рь', 'glacê'],
      ['противе́нь', 'assadeira'],
      ['рабо́тать конди́тером', 'trabalhar como confeiteiro(a)'],
      ['вы́йти / уйти́', 'sair / ir embora'],
      ['замёрзнуть', 'congelar, ficar com muito frio'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Зимо́й Ли́ну прие́хал в Арха́нгельск к дру́гу Артёму. Го́род стои́т на Се́верной Двине́, недалеко́ от Бе́лого мо́ря. Артём говори́т: “Моя́ тётя рабо́тает конди́тером. Хо́чешь пойти́ к ней в пека́рню, и́ли пое́дем в музе́й „Ма́лые Коре́лы‘?’',
        translation:
          'No inverno, o Linu foi a Arkhángelsk visitar o amigo Artiom. A cidade fica às margens do Dvina do Norte, perto do mar Branco. O Artiom diz: “Minha tia trabalha como confeiteira. Quer ir à padaria dela, ou vamos ao museu Málye Koriély?”',
        choices: [
          { text: 'Пойти́ с Артёмом в пека́рню.', translation: 'Ir com o Artiom à padaria.', next: 'pekarnya' },
          { text: 'Пое́хать с Артёмом в музе́й.', translation: 'Ir com o Artiom ao museu.', next: 'korely' },
        ],
      },
      korely: {
        emoji: '🏚️',
        text: 'Ли́ну и Артём е́дут на авто́бусе далеко́ от це́нтра. В музе́е под откры́тым не́бом стоя́т ста́рые деревя́нные дома́, це́ркви и ме́льницы. На у́лице ми́нус два́дцать пять: Ли́ну дово́лен, а Артём уже́ замёрз.',
        translation:
          'O Linu e o Artiom vão de ônibus para longe do centro. No museu a céu aberto há velhas casas de madeira, igrejas e moinhos. Lá fora faz vinte e cinco graus negativos: o Linu está contente, mas o Artiom já está congelando.',
        choices: [
          { text: 'Пое́хать обра́тно в го́род, в пека́рню к тёте.', translation: 'Voltar para a cidade, para a padaria da tia.', next: 'pekarnya' },
          { text: 'Ходи́ть по музе́ю до ве́чера.', translation: 'Andar pelo museu até a noite.', next: 'final_moroz' },
          {
            text: 'Сказа́ть Артёму: “Я замёрз, пое́дем домо́й!”',
            translation: 'Dizer ao Artiom: “Estou congelando, vamos para casa!”',
            wrong: 'Quem está congelando é o Artiom (“Артём уже́ замёрз”). O Linu é pinguim e está contente (дово́лен) com o frio!',
          },
        ],
      },
      final_moroz: {
        emoji: '🤧',
        text: 'Ли́ну с удово́льствием хо́дит от до́ма к до́му до са́мого ве́чера. А Артём на сле́дующий день лежи́т в посте́ли с температу́рой. Ли́ну гото́вит ему́ чай с мёдом.',
        translation:
          'O Linu anda de casa em casa com prazer até a noite. Mas no dia seguinte o Artiom está de cama com febre. O Linu prepara para ele um chá com mel.',
        ending: { tone: 'neutro', title: 'Amigo resfriado', message: 'Pinguim aguenta o frio do Norte, mas o amigo dele não. Tente de novo!' },
      },
      pekarnya: {
        emoji: '🍪',
        text: 'В пека́рне па́хнет мёдом и пря́ностями. Тётя Га́ля выно́сит противе́нь с пря́никами: здесь оле́ни, ры́бы, пти́цы и да́же тюле́ни. “Э́то козу́ли, — объясня́ет она́. — Их у нас пеку́т на Рождество́ и Но́вый год.”',
        translation:
          'Na padaria há cheiro de mel e especiarias. A tia Gália traz uma assadeira com pryaniki: há renas, peixes, pássaros e até focas. “São as kozuli — explica ela. — Aqui a gente faz no Natal e no Ano-Novo.”',
        choices: [
          { text: 'Попроси́ть тётю Га́лю научи́ть его́ де́лать козу́ли.', translation: 'Pedir à tia Gália que o ensine a fazer kozuli.', next: 'urok' },
          {
            text: '“Как жаль, что их пеку́т то́лько ле́том!”',
            translation: '“Que pena que só fazem no verão!”',
            wrong: 'A tia Gália disse que as kozuli são feitas no Natal e no Ano-Novo (“на Рождество́ и Но́вый год”), ou seja, no inverno.',
          },
        ],
      },
      urok: {
        emoji: '🎨',
        text: 'Тётя Га́ля даёт Ли́ну мешо́чек с бе́лой глазу́рью. “Рису́й ме́дленно, то́нкой ли́нией”, — говори́т она́. Ли́ну мо́жет расписа́ть гото́вого оле́ня и́ли сде́лать свою́ козу́лю из те́ста.',
        translation:
          'A tia Gália dá ao Linu um saquinho com glacê branco. “Desenhe devagar, com uma linha fina”, diz ela. O Linu pode decorar uma rena pronta ou fazer a própria kozulia com a massa.',
        choices: [
          { text: 'Расписа́ть оле́ня.', translation: 'Decorar a rena.', next: 'olen' },
          { text: 'Вы́резать из те́ста пингви́на!', translation: 'Recortar um pinguim da massa!', next: 'pingvin' },
        ],
      },
      olen: {
        emoji: '🦌',
        text: 'Ли́ну рису́ет на оле́не бе́лые то́чки и ли́нии. Снача́ла ли́нии получа́ются кривы́ми, но пото́м всё лу́чше и лу́чше. Тётя Га́ля хва́лит его́ и да́рит ему́ коро́бку козу́ль.',
        translation:
          'O Linu desenha pontinhos e linhas brancas na rena. No começo as linhas saem tortas, mas depois ficam cada vez melhores. A tia Gália o elogia e dá a ele uma caixa de kozuli.',
        ending: { tone: 'bom', title: 'Aprendiz de confeiteiro', message: 'O Linu decorou sua primeira kozulia e levou uma caixa de presente de Arkhángelsk.' },
      },
      pingvin: {
        emoji: '🐧',
        text: 'Ли́ну сам выреза́ет из те́ста пингви́на. Тётя Га́ля ста́вит противе́нь в печь и предупрежда́ет: “Не уходи́ далеко́: че́рез де́сять мину́т пря́ник на́до вы́нуть!” А Артём зовёт Ли́ну вы́йти на у́лицу и посмотре́ть на замёрзшую Двину́.',
        translation:
          'O próprio Linu recorta um pinguim da massa. A tia Gália põe a assadeira no forno e avisa: “Não vá longe: daqui a dez minutos tem que tirar o biscoito!” E o Artiom chama o Linu para sair e ver o Dvina congelado.',
        choices: [
          { text: 'Оста́ться у пе́чи и подожда́ть.', translation: 'Ficar perto do forno e esperar.', next: 'final_bom' },
          { text: 'Вы́йти с Артёмом на полчаса́.', translation: 'Sair com o Artiom por meia hora.', next: 'final_sgorel' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Че́рез де́сять мину́т Ли́ну вынима́ет из пе́чи золоти́стого пингви́на. Он рису́ет глазу́рью глаза́, кры́лья и бе́лый живо́т. Тётя Га́ля смеётся: “Тако́й козу́ли в Арха́нгельске ещё никто́ не пёк!”',
        translation:
          'Dez minutos depois, o Linu tira do forno um pinguim dourado. Ele desenha com glacê os olhos, as asas e a barriga branca. A tia Gália ri: “Uma kozulia assim ninguém em Arkhángelsk tinha feito ainda!”',
        ending: { tone: 'bom', title: 'Pinguim de pryanik!', message: 'O Linu inventou uma kozulia nova e aprendeu uma tradição de Natal do Norte russo.' },
      },
      final_sgorel: {
        emoji: '🔥',
        text: 'Ли́ну и Артём гуля́ют по на́бережной и смо́трят, как лю́ди хо́дят по льду Двины́. Когда́ они́ возвраща́ются, в пека́рне па́хнет ды́мом. Пря́ничный пингви́н стал совсе́м чёрным!',
        translation:
          'O Linu e o Artiom passeiam pela orla e veem as pessoas andando sobre o gelo do Dvina. Quando voltam, a padaria está cheirando a fumaça. O pinguim de massa ficou todo preto!',
        ending: { tone: 'neutro', title: 'Pinguim torrado', message: 'A tia Gália avisou: dez minutos! Tente de novo e fique perto do forno.' },
      },
    },
  },
  {
    id: 'ru-h28',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Деревя́нное кру́жево',
    emoji: '🪟',
    summary: 'Em Tomsk, o Linu ajuda a amiga Dacha a fotografar as janelas entalhadas das casas de madeira.',
    cultural_context:
      'Tomsk, fundada em 1604, abriga a primeira universidade da Sibéria, fundada em 1878, e por isso é chamada de “Atenas siberiana”. A cidade conserva muitas casas de madeira com molduras de janela entalhadas, a chamada “renda de madeira”.',
    start: 'start',
    glossary: [
      ['нали́чник', 'moldura entalhada de janela'],
      ['кру́жево', 'renda'],
      ['пло́тник', 'carpinteiro'],
      ['Не могли́ бы вы…?', 'O(a) senhor(a) poderia…?'],
      ['е́сли бы…, то бы…', 'se…, então… (condicional)'],
      ['спроси́ть, не хо́чет ли…', 'perguntar se (não) quer…'],
      ['курсова́я рабо́та', 'trabalho de fim de semestre'],
      ['ста́вни', 'venezianas, postigos'],
    ],
    nodes: {
      start: {
        emoji: '🎓',
        text: 'Ли́ну прие́хал в Томск к подру́ге Да́ше, кото́рая у́чится в университе́те. Да́ша пи́шет курсову́ю рабо́ту о деревя́нных дома́х го́рода. Она́ спра́шивает: “Ли́ну, не мог бы ты мне помо́чь? Мне ну́жно сфотографи́ровать ста́рые нали́чники.”',
        translation:
          'O Linu foi a Tomsk visitar a amiga Dacha, que estuda na universidade. A Dacha está escrevendo um trabalho sobre as casas de madeira da cidade. Ela pergunta: “Linu, você poderia me ajudar? Preciso fotografar as molduras antigas das janelas.”',
        choices: [
          { text: '“С удово́льствием! Пойдём пря́мо сейча́с?”', translation: '“Com prazer! Vamos agora mesmo?”', next: 'ulica' },
          {
            text: '“Я бы с ра́достью, но снача́ла хоте́л бы посмотре́ть университе́т.”',
            translation: '“Eu adoraria, mas antes queria ver a universidade.”',
            next: 'universitet',
          },
          {
            text: '“Хорошо́, я напишу́ за тебя́ всю рабо́ту!”',
            translation: '“Tudo bem, eu escrevo o trabalho inteiro por você!”',
            wrong:
              'A Dacha não pediu que o Linu escrevesse o trabalho. Ela perguntou se ele poderia ajudar a fotografar as molduras das janelas (“сфотографи́ровать нали́чники”).',
          },
        ],
      },
      universitet: {
        emoji: '🏛️',
        text: 'Гла́вный ко́рпус университе́та стои́т в большо́м ста́ром па́рке. Да́ша расска́зывает, что э́то пе́рвый университе́т в Сиби́ри и что его́ основа́ли в ты́сяча восемьсо́т се́мьдесят восьмо́м году́. “Е́сли бы у нас бы́ло бо́льше вре́мени, я бы показа́ла тебе́ библиоте́ку”, — вздыха́ет она́.',
        translation:
          'O prédio principal da universidade fica num parque grande e antigo. A Dacha conta que esta é a primeira universidade da Sibéria e que ela foi fundada em 1878. “Se tivéssemos mais tempo, eu te mostraria a biblioteca”, suspira ela.',
        choices: [
          {
            text: '“Дава́й пойдём фотографи́ровать, а библиоте́ку посмо́трим за́втра.”',
            translation: '“Vamos fotografar, e a biblioteca a gente vê amanhã.”',
            next: 'ulica',
          },
          { text: '“Я бы лу́чше оста́лся здесь и почита́л в па́рке.”', translation: '“Eu preferiria ficar aqui e ler um pouco no parque.”', next: 'final_park' },
        ],
      },
      ulica: {
        emoji: '🏡',
        text: 'На ста́рой у́лице стоя́т деревя́нные дома́ с резны́ми нали́чниками. Они́ похо́жи на кру́жево: здесь пти́цы, цветы́, со́лнце и да́же драко́ны. Ли́ну хо́чет подойти́ побли́же, но у кали́тки одного́ до́ма стои́т пожила́я же́нщина и внима́тельно смо́трит на него́.',
        translation:
          'Numa rua antiga há casas de madeira com molduras entalhadas. Parecem renda: há pássaros, flores, o sol e até dragões. O Linu quer chegar mais perto, mas no portão de uma das casas está uma senhora idosa olhando atentamente para ele.',
        choices: [
          {
            text: '“Извини́те, вы не могли́ бы разреши́ть мне сфотографи́ровать ваш дом?”',
            translation: '“Com licença, a senhora poderia me permitir fotografar sua casa?”',
            next: 'hozyaika',
          },
          { text: '“Отойди́те, пожа́луйста, вы мне меша́ете!”', translation: '“Saia daí, por favor, a senhora está atrapalhando!”', next: 'final_grubo' },
        ],
      },
      hozyaika: {
        emoji: '👵',
        text: 'Же́нщина улыба́ется: “Снима́йте, коне́чно! Э́ти нали́чники вы́резал мой дед.” Пото́м она́ спра́шивает Да́шу, не хо́чет ли та записа́ть исто́рию до́ма. Да́ша отвеча́ет, что была́ бы о́чень ра́да.',
        translation:
          'A senhora sorri: “Pode fotografar, claro! Foi meu avô que entalhou essas molduras.” Depois ela pergunta à Dacha se ela não quer registrar a história da casa. A Dacha responde que ficaria muito feliz.',
        choices: [
          { text: 'Сесть с ни́ми на скаме́йку и послу́шать.', translation: 'Sentar com elas no banco e ouvir.', next: 'istoria' },
          {
            text: 'Шепну́ть Да́ше: “Она́ спроси́ла, есть ли у нас вре́мя на чай.”',
            translation: 'Cochichar para a Dacha: “Ela perguntou se temos tempo para um chá.”',
            wrong:
              'No discurso indireto, a senhora perguntou se a Dacha queria registrar a história da casa (“не хо́чет ли та записа́ть исто́рию до́ма”). Ninguém falou de chá.',
          },
        ],
      },
      istoria: {
        emoji: '🪚',
        text: 'Же́нщина расска́зывает, что её дед был пло́тником и что зимо́й он по вечера́м выреза́л узо́ры для о́кон. “Е́сли бы он знал, что студе́нты бу́дут изуча́ть его́ рабо́ту, он бы о́чень горди́лся”, — говори́т она́. Да́ша запи́сывает ка́ждое сло́во, а Ли́ну де́лает фотогра́фии.',
        translation:
          'A senhora conta que o avô dela era carpinteiro e que, no inverno, ele entalhava à noite os enfeites das janelas. “Se ele soubesse que estudantes iam estudar o trabalho dele, ficaria muito orgulhoso”, diz ela. A Dacha anota cada palavra, e o Linu tira fotos.',
        choices: [
          {
            text: '“Не могли́ бы вы встать у окна́? Бы́ло бы здо́рово сфотографи́ровать вас с нали́чником.”',
            translation: '“A senhora poderia ficar junto à janela? Seria ótimo fotografá-la com a moldura.”',
            next: 'final_bom',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Же́нщина встаёт у окна́, и Ли́ну де́лает свою́ лу́чшую фотогра́фию. Че́рез ме́сяц Да́ша пи́шет ему́, что получи́ла за рабо́ту “отли́чно” и что его́ фотогра́фия — на пе́рвой страни́це. “Е́сли бы не ты, я бы не услы́шала тако́й исто́рии!”',
        translation:
          'A senhora fica junto à janela, e o Linu tira sua melhor foto. Um mês depois, a Dacha escreve para ele que tirou nota máxima no trabalho e que a foto dele está na primeira página. “Se não fosse você, eu não teria ouvido uma história dessas!”',
        ending: {
          tone: 'bom',
          title: 'Renda de madeira',
          message: 'Com gentileza, o Linu ganhou uma história de família e ajudou a Dacha a tirar nota máxima.',
        },
      },
      final_grubo: {
        emoji: '🚪',
        text: 'Же́нщина обижа́ется и ухо́дит в дом. Она́ закрыва́ет ста́вни, и нали́чников бо́льше не ви́дно. Да́ша ти́хо говори́т, что е́сли бы Ли́ну спроси́л ве́жливо, всё бы́ло бы ина́че.',
        translation:
          'A senhora fica ofendida e entra em casa. Ela fecha as venezianas, e as molduras já não aparecem. A Dacha diz baixinho que, se o Linu tivesse pedido com educação, tudo teria sido diferente.',
        ending: { tone: 'neutro', title: 'Janelas fechadas', message: 'Um pedido educado (“Не могли́ бы вы…?”) abre portas e janelas. Tente de novo!' },
      },
      final_park: {
        emoji: '📖',
        text: 'Ли́ну сиди́т на скаме́йке и чита́ет кни́гу, а Да́ша ухо́дит фотографи́ровать одна́. Ве́чером она́ пока́зывает ему́ сни́мки и говори́т, что без него́ бы́ло ску́чно. Ли́ну жале́ет, что не пошёл с ней.',
        translation:
          'O Linu fica sentado no banco lendo um livro, e a Dacha vai fotografar sozinha. À noite, ela mostra as fotos para ele e diz que sem ele foi chato. O Linu se arrepende de não ter ido com ela.',
        ending: { tone: 'neutro', title: 'Leitura no parque', message: 'O parque é lindo, mas a amiga precisava de ajuda. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h29',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Си́няя па́пка',
    emoji: '🎻',
    summary: 'Em Omsk, a amiga violinista do Linu esquece as partituras em casa, e ele tem uma hora para levá-las ao concerto.',
    cultural_context:
      'Omsk foi fundada em 1716 como fortaleza na confluência dos rios Om e Irtych. O Irtych nasce na China, atravessa o Cazaquistão e deságua no rio Ob, já na Rússia.',
    start: 'start',
    glossary: [
      ['скри́пка / скрипа́чка', 'violino / violinista'],
      ['но́ты', 'partitura'],
      ['па́пка', 'pasta'],
      ['про́бка', 'engarrafamento'],
      ['Не мог бы ты…?', 'Você poderia…?'],
      ['е́сли бы мы вы́ехали ра́ньше', 'se tivéssemos saído antes'],
      ['впада́ть в', 'desaguar em'],
      ['охра́нник', 'segurança, vigia'],
    ],
    nodes: {
      start: {
        emoji: '📞',
        text: 'Ли́ну гости́т у подру́ги Ки́ры в О́мске. Ве́чером она́ игра́ет на скри́пке в конце́рте, а он пока́ отдыха́ет до́ма. За час до нача́ла Ки́ра звони́т: “Ли́ну, не мог бы ты привезти́ мои́ но́ты? Они́ в си́ней па́пке на столе́!”',
        translation:
          'O Linu está hospedado na casa da amiga Kira, em Omsk. À noite ela toca violino num concerto, e ele por enquanto descansa em casa. Uma hora antes do início, a Kira liga: “Linu, você poderia trazer minhas partituras? Estão na pasta azul em cima da mesa!”',
        choices: [
          { text: 'Взять си́нюю па́пку и вы́звать такси́.', translation: 'Pegar a pasta azul e chamar um táxi.', next: 'taksi' },
          { text: 'Взять си́нюю па́пку и пойти́ пешко́м по на́бережной.', translation: 'Pegar a pasta azul e ir a pé pela orla.', next: 'peshkom' },
          {
            text: 'Взять кра́сную па́пку с по́лки.',
            translation: 'Pegar a pasta vermelha da estante.',
            wrong: 'A Kira disse que as partituras estão na pasta azul em cima da mesa (“в си́ней па́пке на столе́”), não numa pasta vermelha da estante.',
          },
        ],
      },
      taksi: {
        emoji: '🚕',
        text: 'Такси́ бы́стро е́дет по го́роду, но на мосту́ че́рез Ирты́ш стои́т про́бка. Води́тель говори́т, что е́сли бы они́ вы́ехали на полчаса́ ра́ньше, то бы́ли бы уже́ на ме́сте. Ли́ну ви́дит, что конце́ртный зал совсе́м бли́зко, на друго́м берегу́.',
        translation:
          'O táxi corre pela cidade, mas na ponte sobre o Irtych há um engarrafamento. O motorista diz que, se tivessem saído meia hora antes, já estariam lá. O Linu vê que a sala de concertos está bem perto, na outra margem.',
        choices: [
          { text: '“Не могли́ бы вы останови́ться здесь? Я добегу́ сам.”', translation: '“O senhor poderia parar aqui? Eu vou correndo.”', next: 'beg' },
          { text: 'Сиде́ть в такси́ и ждать.', translation: 'Ficar sentado no táxi esperando.', next: 'final_pozdno' },
        ],
      },
      peshkom: {
        emoji: '🌅',
        text: 'Ли́ну идёт по на́бережной, туда́, где Омь впада́ет в Ирты́ш. Ве́чер тёплый, над реко́й сади́тся со́лнце, и вокру́г гуля́ет мно́го люде́й. Ли́ну так нра́вится вид, что он остана́вливается и достаёт телефо́н.',
        translation:
          'O Linu vai pela orla até onde o Om deságua no Irtych. A tarde está quente, o sol está se pondo sobre o rio, e há muita gente passeando. O Linu gosta tanto da vista que para e pega o celular.',
        choices: [
          { text: 'Сфотографи́ровать ре́ки и побежа́ть да́льше.', translation: 'Fotografar os rios e seguir correndo.', next: 'beg' },
          { text: 'Сесть на скаме́йку и полюбова́ться зака́том.', translation: 'Sentar num banco e admirar o pôr do sol.', next: 'final_zakat' },
        ],
      },
      beg: {
        emoji: '🏃',
        text: 'Ли́ну прибега́ет к конце́ртному за́лу, но у вхо́да стои́т охра́нник. Он стро́го говори́т, что без биле́та входи́ть нельзя́. Ли́ну объясня́ет, что принёс но́ты для скрипа́чки.',
        translation:
          'O Linu chega correndo à sala de concertos, mas na entrada há um segurança. Ele diz, sério, que sem ingresso não se pode entrar. O Linu explica que trouxe a partitura de uma violinista.',
        choices: [
          {
            text: '“Извини́те, не могли́ бы вы переда́ть э́ту па́пку Ки́ре? Она́ сего́дня игра́ет.”',
            translation: '“Com licença, o senhor poderia entregar esta pasta à Kira? Ela toca hoje.”',
            next: 'kira',
          },
        ],
      },
      kira: {
        emoji: '🤗',
        text: 'Охра́нник звони́т кому́-то и спра́шивает, мо́жно ли пусти́ть пингви́на с но́тами. Че́рез мину́ту из за́ла выбега́ет Ки́ра и обнима́ет Ли́ну. Она́ спра́шивает, не хо́чет ли он оста́ться на конце́рт: у неё есть ли́шний биле́т.',
        translation:
          'O segurança liga para alguém e pergunta se pode deixar entrar um pinguim com uma partitura. Um minuto depois, a Kira sai correndo da sala e abraça o Linu. Ela pergunta se ele não quer ficar para o concerto: ela tem um ingresso sobrando.',
        choices: [
          { text: '“Я бы о́чень хоте́л!”', translation: '“Eu adoraria!”', next: 'final_bom' },
          {
            text: '“Нет, спаси́бо, я уже́ поу́жинал.”',
            translation: '“Não, obrigado, eu já jantei.”',
            wrong:
              'A Kira perguntou se ele queria ficar para o concerto (“не хо́чет ли он оста́ться на конце́рт”), porque tem um ingresso sobrando. Ninguém falou de jantar.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ли́ну сиди́т в пе́рвом ряду́. Ки́ра игра́ет так краси́во, что зал до́лго аплоди́рует ей сто́я. По́сле конце́рта она́ говори́т, что е́сли бы не Ли́ну, конце́рт бы не состоя́лся.',
        translation:
          'O Linu está sentado na primeira fila. A Kira toca tão bonito que a plateia a aplaude de pé por muito tempo. Depois do concerto, ela diz que, se não fosse o Linu, o concerto não teria acontecido.',
        ending: {
          tone: 'bom',
          title: 'Salvou o concerto!',
          message: 'O Linu levou as partituras a tempo, pediu com educação e ganhou um lugar na primeira fila.',
        },
      },
      final_pozdno: {
        emoji: '⏰',
        text: 'Про́бка стои́т ещё два́дцать мину́т. Когда́ Ли́ну наконе́ц приезжа́ет, конце́рт уже́ идёт, и Ки́ра игра́ет по па́мяти. Пото́м она́ говори́т, что всё прошло́ хорошо́, но она́ о́чень волнова́лась.',
        translation:
          'O engarrafamento dura mais vinte minutos. Quando o Linu finalmente chega, o concerto já começou, e a Kira está tocando de memória. Depois ela diz que deu tudo certo, mas que ficou muito nervosa.',
        ending: { tone: 'neutro', title: 'Preso na ponte', message: 'A Kira se virou sem a partitura, mas o Linu chegou tarde demais. Tente de novo!' },
      },
      final_zakat: {
        emoji: '🌇',
        text: 'Со́лнце сади́тся над Ирты́шом, и Ли́ну совсе́м забыва́ет о но́тах. Вдруг звони́т телефо́н: Ки́ра спра́шивает, где её но́ты. Ли́ну смо́трит на часы́ и понима́ет, что конце́рт уже́ начался́.',
        translation:
          'O sol se põe sobre o Irtych, e o Linu esquece completamente a partitura. De repente o celular toca: a Kira pergunta onde está a partitura dela. O Linu olha o relógio e percebe que o concerto já começou.',
        ending: { tone: 'neutro', title: 'Pôr do sol caro', message: 'O pôr do sol no Irtych é lindo, mas a Kira contava com o Linu. Tente de novo!' },
      },
    },
  },
  {
    id: 'ru-h30',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Юбиле́й на Дону́',
    emoji: '🍉',
    summary: 'Em Rostov do Don, o Linu vai ao mercado com uma lista de compras para os 80 anos da avó do amigo Serioja.',
    cultural_context:
      'Rostov do Don, fundada em 1749 às margens do rio Don, perto do mar de Azov, é chamada de “portão do Cáucaso”. O peixe seco, sobretudo a “тара́нь”, é um petisco tradicional da região do Don.',
    start: 'start',
    glossary: [
      ['юбиле́й', 'aniversário redondo'],
      ['кото́рый / кото́рого', 'que, o qual (relativo)'],
      ['два арбу́за', 'duas melancias'],
      ['пять килогра́ммов', 'cinco quilos'],
      ['два́дцать два го́стя', 'vinte e dois convidados'],
      ['суда́к', 'lúcio-perca, zander'],
      ['вя́леная ры́ба', 'peixe seco'],
      ['прила́вок', 'balcão (de feira)'],
    ],
    nodes: {
      start: {
        emoji: '🎂',
        text: 'В Росто́ве-на-Дону́ Ли́ну живёт у дру́га Серёжи. В суббо́ту Серёжиной ба́бушке исполня́ется во́семьдесят лет, и к ней прие́дут два́дцать два го́стя. Ба́бушка даёт ребя́там спи́сок проду́ктов, кото́рые на́до купи́ть на Центра́льном ры́нке.',
        translation:
          'Em Rostov do Don, o Linu está morando na casa do amigo Serioja. No sábado a avó do Serioja faz oitenta anos, e vêm vinte e dois convidados. A avó dá aos rapazes uma lista de produtos que precisam ser comprados no Mercado Central.',
        choices: [{ text: 'Прочита́ть спи́сок.', translation: 'Ler a lista.', next: 'spisok' }],
      },
      spisok: {
        emoji: '📝',
        text: 'В спи́ске напи́сано: “Два арбу́за, пять килогра́ммов помидо́ров, три ба́нки мёда и большо́й лещ.” Внизу́ ба́бушка доба́вила: “Ры́бу купи́те у Ива́на Петро́вича, кото́рый стои́т у вхо́да.” На ры́нке шу́мно, и продавцы́ зову́т покупа́телей со всех сторо́н.',
        translation:
          'Na lista está escrito: “Duas melancias, cinco quilos de tomate, três potes de mel e uma brema grande.” Embaixo a avó acrescentou: “Comprem o peixe com o Ivan Petrovitch, que fica na entrada.” O mercado é barulhento, e os vendedores chamam os fregueses de todos os lados.',
        choices: [
          { text: 'Пойти́ снача́ла в овощно́й ряд.', translation: 'Ir primeiro à fileira de verduras.', next: 'ovoshchi' },
          {
            text: 'Купи́ть пять арбу́зов и два килогра́мма помидо́ров.',
            translation: 'Comprar cinco melancias e dois quilos de tomate.',
            wrong:
              'Os números foram trocados! A lista pede “два арбу́за” (2 + genitivo singular: duas melancias) e “пять килогра́ммов помидо́ров” (5 + genitivo plural: cinco quilos de tomate).',
          },
        ],
      },
      ovoshchi: {
        emoji: '🍅',
        text: 'В овощно́м ряду́ продаю́т помидо́ры, огурцы́ и арбу́зы, кото́рые привезли́ с ю́га о́бласти. Продаве́ц пока́зывает два огро́мных арбу́за: “Вот э́ти са́мые сла́дкие, руча́юсь!” Серёжа стучи́т по ним и слу́шает, как они́ звеня́т.',
        translation:
          'Na fileira de verduras vendem tomates, pepinos e melancias trazidos do sul da região. O vendedor mostra duas melancias enormes: “Estas são as mais doces, garanto!” O Serioja dá umas batidinhas nelas e escuta como ressoam.',
        choices: [
          {
            text: 'Купи́ть арбу́зы, помидо́ры и мёд и пойти́ за ры́бой.',
            translation: 'Comprar as melancias, os tomates e o mel e ir buscar o peixe.',
            next: 'ryba',
          },
        ],
      },
      ryba: {
        emoji: '🐟',
        text: 'Ива́н Петро́вич, у кото́рого на прила́вке лежа́т деся́тки рыб, разво́дит рука́ми. Лещи́, кото́рых рыбаки́ пойма́ли в Дону́ сего́дня у́тром, уже́ ко́нчились. Оста́лись то́лько два судака́ и вя́леная тара́нь.',
        translation:
          'O Ivan Petrovitch, que tem dezenas de peixes no balcão, abre os braços. As bremas que os pescadores pegaram no Don hoje de manhã já acabaram. Só sobraram dois zanders e taran seca.',
        choices: [
          { text: 'Позвони́ть ба́бушке и спроси́ть сове́та.', translation: 'Ligar para a avó e pedir conselho.', next: 'zvonok' },
          { text: 'Реши́ть, что ры́ба не так важна́, и пойти́ домо́й.', translation: 'Decidir que o peixe não é tão importante e ir para casa.', next: 'final_bez' },
        ],
      },
      zvonok: {
        emoji: '📱',
        text: 'Ба́бушка говори́т, что суда́к да́же лу́чше: она́ запечёт его́ с овоща́ми. Ещё она́ про́сит купи́ть две тара́ни для де́душки, кото́рый о́чень лю́бит вя́леную ры́бу. Ли́ну и Серёжа перегля́дываются и улыба́ются.',
        translation:
          'A avó diz que o zander é até melhor: ela vai assá-lo com legumes. Ela também pede para comprarem duas taranis para o avô, que adora peixe seco. O Linu e o Serioja se entreolham e sorriem.',
        choices: [
          { text: 'Купи́ть большо́го судака́ и две тара́ни.', translation: 'Comprar um zander grande e duas taranis.', next: 'prazdnik' },
          {
            text: 'Купи́ть две тара́ни для ба́бушки.',
            translation: 'Comprar duas taranis para a avó.',
            wrong: 'As taranis são para o avô: “для де́душки, кото́рый о́чень лю́бит вя́леную ры́бу”. A avó vai assar o zander.',
          },
        ],
      },
      prazdnik: {
        emoji: '🥂',
        text: 'В суббо́ту за больши́м столо́м сидя́т два́дцать два го́стя. На таре́лках — помидо́ры, арбу́зы и суда́к, кото́рого ба́бушка запекла́ с овоща́ми. Го́сти поздравля́ют ба́бушку, а пото́м все вме́сте пою́т ста́рые донски́е пе́сни.',
        translation:
          'No sábado, vinte e dois convidados estão sentados à mesa grande. Nos pratos há tomates, melancia e o zander que a avó assou com legumes. Os convidados dão parabéns à avó, e depois todos cantam juntos velhas canções do Don.',
        choices: [{ text: 'Подпева́ть вме́сте с гостя́ми.', translation: 'Cantar junto com os convidados.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ба́бушка говори́т, что э́то лу́чший день рожде́ния за все её во́семьдесят лет. Де́душка ест тара́нь и расска́зывает Ли́ну о ры́бах, кото́рых он лови́л в Дону́ в мо́лодости. Серёжа обеща́ет, что ле́том они́ втроём пое́дут на рыба́лку.',
        translation:
          'A avó diz que este foi o melhor aniversário de todos os seus oitenta anos. O avô come taran e conta ao Linu sobre os peixes que pescava no Don quando era jovem. O Serioja promete que no verão os três vão pescar juntos.',
        ending: {
          tone: 'bom',
          title: 'Festa à beira do Don!',
          message: 'O Linu fez as compras certinhas, contou direito os números e ganhou um convite para pescar no Don.',
        },
      },
      final_bez: {
        emoji: '🍗',
        text: 'Ли́ну и Серёжа прихо́дят домо́й с арбу́зами и помидо́рами, но без ры́бы. Ба́бушка вздыха́ет и достаёт из морози́лки ку́рицу. “Суда́к был бы лу́чше”, — ворчи́т де́душка.',
        translation:
          'O Linu e o Serioja chegam em casa com as melancias e os tomates, mas sem peixe. A avó suspira e tira um frango do congelador. “Um zander seria melhor”, resmunga o avô.',
        ending: { tone: 'neutro', title: 'Festa sem peixe', message: 'Às margens do Don, festa sem peixe não é festa! Tente de novo e peça conselho à avó.' },
      },
    },
  },
  {
    id: 'ru-h31',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Самова́ры и пря́ники',
    emoji: '🫖',
    summary: 'Em Tula, o Linu e o amigo Serguei passam um dia entre samovares e o famoso pão de mel da cidade.',
    cultural_context:
      'Tula, ao sul de Moscou, é famosa desde o século XVIII pelos samovares e há séculos pelo pryanik de Tula, um pão de mel com recheio prensado em formas de madeira. Daí o ditado “В Ту́лу со свои́м самова́ром не е́здят”: não se leva o próprio samovar a Tula.',
    start: 'start',
    glossary: [
      ['самова́р', 'samovar'],
      ['пря́ник', 'pryanik, pão de mel'],
      ['кото́рый', 'que, o qual'],
      ['начи́нка', 'recheio'],
      ['доска́', 'tábua'],
      ['ба́шня', 'torre'],
      ['вручну́ю', 'à mão'],
      ['мастери́ца', 'artesã, mestra'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Ли́ну прие́хал на по́езде в Ту́лу — го́род, кото́рый изве́стен свои́ми самова́рами и пря́никами. На вокза́ле его́ встреча́ет друг Серге́й, кото́рый вы́рос в Ту́ле. Серге́й говори́т, что сего́дня они́ успе́ют посети́ть два музе́я.',
        translation:
          'Linu chegou de trem a Tula, uma cidade famosa por seus samovares e pães de mel. Na estação, quem o recebe é o amigo Serguei, que cresceu em Tula. Serguei diz que hoje eles vão conseguir visitar dois museus.',
        choices: [
          { text: 'Снача́ла погуля́ть по Ту́льскому кремлю́.', translation: 'Primeiro passear pelo Kremlin de Tula.', next: 'kreml' },
          { text: 'Сра́зу пойти́ в музе́й самова́ров.', translation: 'Ir direto ao museu dos samovares.', next: 'muzei' },
        ],
      },
      kreml: {
        emoji: '🏰',
        text: 'Ту́льский кремль постро́или в нача́ле шестна́дцатого ве́ка. Друзья́ иду́т вдоль его́ стен и счита́ют ба́шни: их де́вять. Ли́ну ка́жется, что ба́шни, кото́рые стоя́т над кра́сными сте́нами, похо́жи на огро́мные ша́хматные фигу́ры.',
        translation:
          'O Kremlin de Tula foi construído no começo do século XVI. Os amigos caminham ao longo das muralhas e contam as torres: são nove. O Linu acha que as torres, que se erguem sobre as muralhas vermelhas, parecem enormes peças de xadrez.',
        choices: [
          { text: 'Пойти́ да́льше, в музе́й самова́ров.', translation: 'Seguir para o museu dos samovares.', next: 'muzei' },
          {
            text: 'Сказа́ть Серге́ю: “Как жаль, что здесь то́лько три ба́шни!”',
            translation: 'Dizer ao Serguei: “Que pena que aqui só tem três torres!”',
            wrong: 'Os amigos contaram nove torres: “их де́вять”. O texto não fala em três.',
          },
        ],
      },
      muzei: {
        emoji: '🫖',
        text: 'В музе́е “Ту́льские самова́ры” стоя́т деся́тки самова́ров ра́зных форм и разме́ров. Экскурсово́д расска́зывает о мастера́х, кото́рые де́лали их из ме́ди и лату́ни. Серге́й ти́хо говори́т, что у его́ ба́бушки до сих пор есть три ста́рых самова́ра.',
        translation:
          'No museu “Samovares de Tula” há dezenas de samovares de todas as formas e tamanhos. O guia fala dos mestres que os faziam de cobre e latão. Serguei conta baixinho que a avó dele ainda tem três samovares antigos.',
        choices: [
          {
            text: 'Показа́ть Серге́ю пода́рок, кото́рый Ли́ну привёз из Москвы́.',
            translation: 'Mostrar ao Serguei o presente que o Linu trouxe de Moscou.',
            next: 'pogovorka',
          },
          { text: 'Пойти́ в музе́й пря́ника.', translation: 'Ir ao museu do pryanik.', next: 'pryanik' },
        ],
      },
      pogovorka: {
        emoji: '😄',
        text: 'Ли́ну достаёт из рюкзака́ ма́ленький самова́р, кото́рый он купи́л в Москве́. Серге́й смеётся: “В Ту́лу со свои́м самова́ром не е́здят!” Так говоря́т, когда́ челове́к везёт с собо́й то, чего́ и так мно́го там, куда́ он е́дет. Но пода́рок Серге́ю всё равно́ нра́вится: тепе́рь у их семьи́ четы́ре самова́ра.',
        translation:
          'Linu tira da mochila um samovar pequenininho que comprou em Moscou. Serguei ri: “Ninguém vai a Tula com o próprio samovar!” É o que se diz quando alguém leva consigo algo que já existe de sobra no lugar para onde vai. Mas o Serguei gosta do presente mesmo assim: agora a família dele tem quatro samovares.',
        choices: [
          { text: 'Пойти́ вме́сте в музе́й пря́ника.', translation: 'Ir juntos ao museu do pryanik.', next: 'pryanik' },
          {
            text: 'Поду́мать, что в Ту́ле ма́ло самова́ров.',
            translation: 'Pensar que em Tula há poucos samovares.',
            wrong: 'É o contrário: o ditado diz que não se leva samovar a Tula porque lá já há muitos (мно́го).',
          },
        ],
      },
      pryanik: {
        emoji: '🍪',
        text: 'Ту́льский пря́ник — э́то пло́ский пря́ник с начи́нкой, на кото́ром ви́ден узо́р и́ли на́дпись. Ра́ньше их печа́тали с по́мощью деревя́нных досо́к, кото́рые мастера́ выреза́ли вручну́ю. В музе́е мо́жно купи́ть пря́ники и́ли сде́лать свой.',
        translation:
          'O pryanik de Tula é um pão de mel achatado, com recheio, que traz um desenho ou uma inscrição. Antigamente eles eram estampados com tábuas de madeira que os mestres entalhavam à mão. No museu dá para comprar pryaniki ou fazer o seu.',
        choices: [
          { text: 'Записа́ться на ма́стер-кла́сс.', translation: 'Inscrever-se na oficina.', next: 'master' },
          { text: 'Пойти́ в магази́н при музе́е.', translation: 'Ir à loja do museu.', next: 'magazin' },
        ],
      },
      magazin: {
        emoji: '🛍️',
        text: 'Ли́ну хо́чет купи́ть пря́ники для всех свои́х друзе́й. У него́ пять друзе́й в Москве́ и два дру́га в Каза́ни. Продавщи́ца улыба́ется и спра́шивает: “Ско́лько пря́ников вам ну́жно?”',
        translation:
          'Linu quer comprar pryaniki para todos os seus amigos. Ele tem cinco amigos em Moscou e dois em Cazã. A vendedora sorri e pergunta: “Quantos pryaniki o senhor precisa?”',
        choices: [
          { text: 'Семь пря́ников, пожа́луйста.', translation: 'Sete pryaniki, por favor.', next: 'final_pokupka' },
          {
            text: 'Мне ну́жно три пря́ника.',
            translation: 'Preciso de três pryaniki.',
            wrong: 'Linu tem cinco amigos em Moscou (пять друзе́й) e dois em Cazã (два дру́га): são sete ao todo, não três.',
          },
        ],
      },
      final_pokupka: {
        emoji: '🎁',
        text: 'Продавщи́ца кладёт в коро́бку семь пря́ников с ра́зными начи́нками: с варе́ньем и со сгущёнкой. Ли́ну покупа́ет ещё оди́н, восьмо́й, для себя́. Но в по́езде он съеда́ет его́ ещё до Москвы́.',
        translation:
          'A vendedora põe numa caixa sete pryaniki com recheios diferentes: de geleia e de leite condensado. Linu compra mais um, o oitavo, para si. Mas no trem ele o come antes mesmo de chegar a Moscou.',
        ending: {
          tone: 'bom',
          title: 'Presentes para todos',
          message: 'Sete pryaniki para os amigos e um oitavo que não chegou a Moscou. Ninguém ficou sem uma lembrança de Tula.',
        },
      },
      master: {
        emoji: '👩‍🍳',
        text: 'Мастери́ца даёт Ли́ну деревя́нную до́ску с узо́ром — на ней вы́резан Ту́льский кремль. Ли́ну кладёт на до́ску те́сто, начи́нку и ещё оди́н слой те́ста, а пото́м си́льно прижима́ет. Пока́ пря́ник печётся, мастери́ца расска́зывает о пра́здниках, на кото́рые ра́ньше дари́ли пря́ники.',
        translation:
          'A artesã dá ao Linu uma tábua de madeira com um desenho: nela está entalhado o Kremlin de Tula. Linu põe na tábua a massa, o recheio e mais uma camada de massa, e depois aperta com força. Enquanto o pryanik assa, a artesã fala das festas em que antigamente se davam pryaniki de presente.',
        choices: [
          { text: 'Подожда́ть, пока́ пря́ник осты́нет.', translation: 'Esperar o pryanik esfriar.', next: 'final_master' },
          { text: 'Сра́зу откуси́ть от горя́чего пря́ника.', translation: 'Dar uma mordida no pryanik quente na hora.', next: 'final_goryachiy' },
        ],
      },
      final_master: {
        emoji: '🏆',
        text: 'Когда́ пря́ник осты́л, на нём хорошо́ ви́ден кремль с ба́шнями. Мастери́ца налива́ет друзья́м два стака́на ча́я из большо́го самова́ра. Ли́ну про́бует свой пря́ник и реша́ет, что э́то са́мый вку́сный из всех пря́ников, кото́рые он про́бовал.',
        translation:
          'Quando o pryanik esfriou, dá para ver bem o Kremlin com suas torres. A artesã serve aos amigos dois copos de chá de um grande samovar. Linu prova o seu pryanik e decide que é o mais gostoso de todos os que já provou.',
        ending: {
          tone: 'bom',
          title: 'Mestre do pryanik',
          message: 'Um pryanik feito com as próprias nadadeiras, com o Kremlin estampado, e chá de samovar. Tula em um só dia!',
        },
      },
      final_goryachiy: {
        emoji: '🔥',
        text: 'Ли́ну не хо́чет ждать и куса́ет горя́чий пря́ник. Начи́нка внутри́ ещё о́чень горя́чая, и он до́лго пьёт холо́дную во́ду. Мастери́ца смеётся: “Пря́ники, как и го́сти, лю́бят терпе́ние”.',
        translation:
          'Linu não quer esperar e morde o pryanik quente. O recheio lá dentro ainda está muito quente, e ele passa um tempão bebendo água gelada. A artesã ri: “Os pryaniki, como as visitas, gostam de paciência”.',
        ending: {
          tone: 'neutro',
          title: 'Língua queimada',
          message: 'O pryanik ficou lindo, mas a pressa custou caro. Da próxima vez, o Linu vai esperar esfriar.',
        },
      },
    },
  },
  {
    id: 'ru-h32',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Столбы́',
    emoji: '🪨',
    summary: 'Em Krasnoiarsk, o Linu e a amiga Dacha sobem pela taiga até os Stolby, enormes pilares de rocha.',
    cultural_context:
      'A reserva natural Stolby, junto a Krasnoiarsk, foi criada em 1925 para proteger rochedos de sienito que se erguem sobre a taiga. Escalar essas rochas sem equipamento virou uma tradição local, o “столби́зм”.',
    start: 'start',
    glossary: [
      ['столб', 'pilar, poste'],
      ['скала́', 'rocha, penhasco'],
      ['запове́дник', 'reserva natural'],
      ['возвыша́ющийся', 'que se ergue'],
      ['одна́ко', 'porém'],
      ['поэ́тому', 'por isso'],
      ['хотя́', 'embora'],
      ['бурунду́к', 'tâmia (esquilo listrado)'],
    ],
    nodes: {
      start: {
        emoji: '✈️',
        text: 'Ли́ну прилете́л в Красноя́рск, го́род, стоя́щий на берега́х Енисе́я. Одна́ко прие́хал он сюда́ не ра́ди го́рода, а ра́ди Столбо́в — запове́дника, находя́щегося совсе́м ря́дом. Его́ подру́га Да́ша, вы́росшая в Красноя́рске, обеща́ла показа́ть ему́ знамени́тые ска́лы.',
        translation:
          'Linu chegou de avião a Krasnoiarsk, uma cidade situada às margens do Ienissei. Porém, ele não veio pela cidade, e sim pelos Stolby, uma reserva que fica bem perto. Sua amiga Dacha, que cresceu em Krasnoiarsk, prometeu lhe mostrar as famosas rochas.',
        choices: [
          { text: 'Сра́зу пойти́ по тропе́ в тайгу́.', translation: 'Ir direto pela trilha rumo à taiga.', next: 'tropa' },
          { text: 'Снача́ла зайти́ в визи́т-центр запове́дника.', translation: 'Primeiro passar no centro de visitantes da reserva.', next: 'centr' },
        ],
      },
      centr: {
        emoji: '🗺️',
        text: 'В визи́т-це́нтре Ли́ну ви́дит ка́рту с назва́ниями скал: “Дед”, “Пе́рья”, “Льви́ные воро́та”. Сотру́дница расска́зывает, что запове́дник, со́зданный в 1925 году́, охраня́ет ска́лы, образова́вшиеся миллио́ны лет наза́д. Хотя́ не́которые из них похо́жи на ба́шни, постро́енные людьми́, их со́здала приро́да.',
        translation:
          'No centro de visitantes, o Linu vê um mapa com os nomes das rochas: “Avô”, “Penas”, “Portão dos Leões”. A funcionária conta que a reserva, criada em 1925, protege rochas que se formaram há milhões de anos. Embora algumas pareçam torres construídas por pessoas, quem as criou foi a natureza.',
        choices: [
          { text: 'Пойти́ к Столба́м по тропе́.', translation: 'Ir aos Stolby pela trilha.', next: 'tropa' },
          {
            text: 'Спроси́ть, кто и когда́ постро́ил э́ти ба́шни.',
            translation: 'Perguntar quem construiu essas torres e quando.',
            wrong:
              'Ninguém as construiu: as rochas só parecem torres construídas por pessoas (похо́жи на ба́шни, постро́енные людьми́), mas foram criadas pela natureza.',
          },
        ],
      },
      tropa: {
        emoji: '🐿️',
        text: 'Тропа́ идёт вверх че́рез тайгу́, па́хнущую хво́ей. Вдруг на доро́гу выбега́ет бурунду́к, совсе́м не боя́щийся люде́й. Да́ша говори́т, что бурундуки́ здесь привы́кли к тури́стам, одна́ко корми́ть их не сто́ит: в запове́днике э́то запрещено́.',
        translation:
          'A trilha sobe pela taiga, que cheira a pinheiro. De repente, um tâmia que não tem nenhum medo de gente sai correndo para o caminho. Dacha diz que os tâmias daqui estão acostumados com turistas; porém, não se deve alimentá-los: na reserva isso é proibido.',
        choices: [
          { text: 'Сфотографи́ровать бурундука́ и идти́ да́льше.', translation: 'Fotografar o tâmia e seguir em frente.', next: 'skaly' },
          {
            text: 'Угости́ть бурундука́ пече́ньем.',
            translation: 'Oferecer um biscoito ao tâmia.',
            wrong: 'Dacha avisou que não se deve alimentá-los: “одна́ко корми́ть их не сто́ит”, porque na reserva é proibido.',
          },
        ],
      },
      skaly: {
        emoji: '⛰️',
        text: 'Наконе́ц пе́ред ни́ми появля́ются Столбы́ — огро́мные ска́лы, возвыша́ющиеся над тайго́й. На скале́ “Пе́рья” Ли́ну замеча́ет люде́й, поднима́ющихся без верёвок. Да́ша объясня́ет, что э́то столби́сты: по ска́лам без снаряже́ния здесь ла́зят уже́ бо́льше ста лет.',
        translation:
          'Finalmente surgem diante deles os Stolby, enormes rochas que se erguem sobre a taiga. Na rocha “Penas”, o Linu nota pessoas subindo sem cordas. Dacha explica que são os “stolbistas”: aqui se escala sem equipamento há mais de cem anos.',
        choices: [
          {
            text: 'Попроси́ть Да́шу научи́ть его́ ла́зить по камня́м.',
            translation: 'Pedir à Dacha que o ensine a escalar pedras.',
            next: 'skalolaz',
          },
          { text: 'Подня́ться на смотрову́ю площа́дку по обы́чной тропе́.', translation: 'Subir ao mirante pela trilha comum.', next: 'vid' },
        ],
      },
      skalolaz: {
        emoji: '🧗',
        text: 'Да́ша ведёт его́ к невысо́кому ка́мню, на кото́ром трениру́ются начина́ющие столби́сты. Хотя́ Ли́ну о́чень стара́ется, его́ ла́пы соска́льзывают с ка́мня. Да́ша смеётся: пингви́ны, наве́рное, пла́вают лу́чше, чем ла́зят.',
        translation:
          'Dacha o leva a uma pedra baixa onde treinam os escaladores iniciantes. Embora o Linu se esforce muito, suas patas escorregam da pedra. Dacha ri: os pinguins, pelo jeito, nadam melhor do que escalam.',
        choices: [
          { text: 'Попро́бовать ещё раз.', translation: 'Tentar mais uma vez.', next: 'final_kamen' },
          { text: 'Пойти́ на смотрову́ю площа́дку.', translation: 'Ir ao mirante.', next: 'vid' },
        ],
      },
      vid: {
        emoji: '🌄',
        text: 'С площа́дки видна́ тайга́, простира́ющаяся до са́мого горизо́нта. Да́ша достаёт те́рмос с ча́ем, зава́ренным с тра́вами. Одна́ко с за́пада иду́т тёмные ту́чи, поэ́тому на́до реши́ть, что де́лать.',
        translation:
          'Do mirante se vê a taiga, que se estende até o horizonte. Dacha tira uma garrafa térmica com chá feito com ervas. Porém, nuvens escuras vêm do oeste, por isso é preciso decidir o que fazer.',
        choices: [
          { text: 'Бы́стро спусти́ться, пока́ не на́чался дождь.', translation: 'Descer rápido antes que a chuva comece.', next: 'final_dozhd' },
          { text: 'Оста́ться и споко́йно допи́ть чай.', translation: 'Ficar e terminar o chá com calma.', next: 'final_vid' },
        ],
      },
      final_kamen: {
        emoji: '🏅',
        text: 'Со второ́й попы́тки Ли́ну поднима́ется на ка́мень высото́й два ме́тра. Да́ша аплоди́рует, а проходя́щие ми́мо столби́сты крича́т ему́: “Молоде́ц!” Хотя́ э́то совсе́м ма́ленький ка́мень, Ли́ну чу́вствует себя́ настоя́щим альпини́стом.',
        translation:
          'Na segunda tentativa, o Linu sobe numa pedra de dois metros de altura. Dacha aplaude, e os escaladores que passam gritam para ele: “Muito bem!” Embora seja uma pedra bem pequena, o Linu se sente um verdadeiro alpinista.',
        ending: {
          tone: 'bom',
          title: 'Pequeno alpinista',
          message: 'Dois metros de rocha e aplausos de stolbistas de verdade. Para um pinguim, é quase um Everest!',
        },
      },
      final_dozhd: {
        emoji: '🌧️',
        text: 'Они́ бы́стро спуска́ются по тропе́, одна́ко дождь всё равно́ догоня́ет их. Промо́кшие, но весёлые, друзья́ сидя́т в авто́бусе и пьют оста́вшийся чай. Ли́ну обеща́ет себе́ верну́ться сюда́ в со́лнечный день.',
        translation:
          'Eles descem a trilha depressa, mas a chuva os alcança mesmo assim. Encharcados, mas alegres, os amigos se sentam no ônibus e bebem o chá que sobrou. O Linu promete a si mesmo voltar num dia de sol.',
        ending: {
          tone: 'neutro',
          title: 'Molhados, mas felizes',
          message: 'A chuva ganhou a corrida, mas o chá ainda estava quente. Os Stolby ficam esperando o Linu num dia de sol.',
        },
      },
      final_vid: {
        emoji: '🌈',
        text: 'Ту́чи прохо́дят стороно́й, и над тайго́й появля́ется ра́дуга. Ли́ну пьёт горя́чий чай и смо́трит на ска́лы, освещённые вече́рним со́лнцем. Тепе́рь он понима́ет, почему́ красноя́рцы так лю́бят свои́ Столбы́.',
        translation:
          'As nuvens passam ao largo, e sobre a taiga aparece um arco-íris. Linu bebe chá quente e olha as rochas iluminadas pelo sol da tarde. Agora ele entende por que os moradores de Krasnoiarsk amam tanto os seus Stolby.',
        ending: {
          tone: 'bom',
          title: 'Arco-íris sobre a taiga',
          message: 'A paciência compensou: chá de ervas, rochas douradas e um arco-íris. Um dia perfeito na Sibéria.',
        },
      },
    },
  },
  {
    id: 'ru-h33',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Кре́ндель из Вы́борга',
    emoji: '🥨',
    summary: 'Em Víborg, o Linu precisa levar um kringel de verdade para o aniversário da amiga Kátia, mas a cidade tem muito a mostrar.',
    cultural_context:
      'Víborg, perto da fronteira com a Finlândia, cresceu em torno de um castelo fundado pelos suecos em 1293 numa pequena ilha. A cidade é conhecida também pelo parque de rochedos Monrepos e pelo kringel de Víborg (вы́боргский кре́ндель), um pão doce tradicional em forma de laço.',
    start: 'start',
    glossary: [
      ['кре́ндель', 'kringel, rosca em forma de laço'],
      ['за́мок', 'castelo'],
      ['осно́ванный', 'fundado'],
      ['испечённый', 'assado'],
      ['пека́рня', 'padaria'],
      ['при́лавок', 'balcão'],
      ['одна́ко', 'porém'],
      ['хотя́', 'embora'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Ли́ну прие́хал на оди́н день в Вы́борг — ста́рый го́род, стоя́щий на берегу́ Вы́боргского зали́ва. Ве́чером его́ ждёт на дне рожде́ния подру́га Ка́тя, живу́щая в Петербу́рге. Ка́тя попроси́ла привезти́ ей то́лько одно́: настоя́щий вы́боргский кре́ндель.',
        translation:
          'Linu veio passar um dia em Víborg, uma cidade antiga à beira da baía de Víborg. À noite, a amiga Kátia, que mora em São Petersburgo, o espera na sua festa de aniversário. Kátia pediu que ele trouxesse só uma coisa: um verdadeiro kringel de Víborg.',
        choices: [
          { text: 'Сра́зу найти́ пека́рню и купи́ть кре́ндель.', translation: 'Achar logo uma padaria e comprar o kringel.', next: 'pekarnya' },
          {
            text: 'Снача́ла посмотре́ть за́мок, а кре́ндель купи́ть пото́м.',
            translation: 'Primeiro ver o castelo e comprar o kringel depois.',
            next: 'zamok',
          },
        ],
      },
      zamok: {
        emoji: '🏰',
        text: 'Вы́боргский за́мок, осно́ванный шве́дами в 1293 году́, стои́т на ма́леньком о́строве. Над ним возвыша́ется ба́шня Свято́го О́лафа, с кото́рой ви́ден весь го́род. Хотя́ ле́стница там у́зкая и крута́я, Ли́ну реша́ет подня́ться.',
        translation:
          'O castelo de Víborg, fundado pelos suecos em 1293, fica numa ilhazinha. Acima dele se ergue a torre de Santo Olavo, de onde se vê a cidade inteira. Embora a escada lá seja estreita e íngreme, o Linu resolve subir.',
        choices: [
          { text: 'Подня́ться на ба́шню.', translation: 'Subir na torre.', next: 'bashnya' },
          {
            text: 'Сказа́ть, что за́мок, наве́рное, постро́или в про́шлом ве́ке.',
            translation: 'Dizer que o castelo provavelmente foi construído no século passado.',
            wrong: 'O texto diz que o castelo foi fundado pelos suecos em 1293 (осно́ванный шве́дами в 1293 году́): tem mais de setecentos anos.',
          },
        ],
      },
      bashnya: {
        emoji: '🔭',
        text: 'Све́рху Ли́ну ви́дит кра́сные кры́ши, у́зкие у́лицы и во́ду, окружа́ющую за́мок со всех сторо́н. Смотри́тель ба́шни, услы́шавший, что Ли́ну и́щет кре́ндель, сове́тует ему́ пека́рню в ста́ром го́роде. Одна́ко он предупрежда́ет, что кре́ндели, испечённые у́тром, там бы́стро раскупа́ют.',
        translation:
          'Lá de cima, o Linu vê telhados vermelhos, ruas estreitas e a água que cerca o castelo por todos os lados. O zelador da torre, que ouviu que o Linu procura um kringel, lhe recomenda uma padaria na cidade velha. Porém, ele avisa que os kringels assados de manhã acabam rápido.',
        choices: [
          { text: 'Сра́зу пойти́ в пека́рню.', translation: 'Ir já para a padaria.', next: 'pekarnya' },
          { text: 'Снача́ла погуля́ть по па́рку Монрепо́.', translation: 'Primeiro passear pelo parque Monrepos.', next: 'monrepo' },
          {
            text: 'Реши́ть, что кре́ндели продаю́тся там до са́мого ве́чера.',
            translation: 'Concluir que os kringels ficam à venda até o fim do dia.',
            wrong: 'O zelador avisou o contrário: os kringels assados de manhã acabam rápido (одна́ко… бы́стро раскупа́ют).',
          },
        ],
      },
      monrepo: {
        emoji: '🌲',
        text: 'Парк Монрепо́, со́зданный бо́лее двухсо́т лет наза́д, нахо́дится на скали́стом берегу́ зали́ва. Огро́мные валу́ны, покры́тые мхом, лежа́т ме́жду высо́кими со́снами. Ли́ну так нра́вится гуля́ть там, что он соверше́нно забыва́ет о вре́мени.',
        translation:
          'O parque Monrepos, criado há mais de duzentos anos, fica na margem rochosa da baía. Enormes pedregulhos cobertos de musgo ficam entre pinheiros altos. O Linu gosta tanto de passear ali que esquece completamente da hora.',
        choices: [{ text: 'Вспо́мнить о кре́нделе и побежа́ть в пека́рню.', translation: 'Lembrar do kringel e correr para a padaria.', next: 'pekarnya_pozdno' }],
      },
      pekarnya: {
        emoji: '🥐',
        text: 'В ма́ленькой пека́рне па́хнет све́жей сдо́бой. На при́лавке лежа́т золоти́стые кре́ндели, то́лько что вы́нутые из печи́. Продаве́ц говори́т, что вы́боргский кре́ндель пеку́т здесь по ста́рому реце́пту, поэ́тому за ним приезжа́ют да́же из Петербу́рга.',
        translation:
          'A padariazinha cheira a massa doce fresca. No balcão há kringels dourados, recém-tirados do forno. O vendedor diz que ali o kringel de Víborg é feito com uma receita antiga, por isso vem gente buscá-lo até de São Petersburgo.',
        choices: [
          { text: 'Купи́ть оди́н большо́й кре́ндель для Ка́ти.', translation: 'Comprar um kringel grande para a Kátia.', next: 'final_katya' },
          {
            text: 'Купи́ть два кре́нделя: оди́н для Ка́ти, друго́й для себя́.',
            translation: 'Comprar dois kringels: um para a Kátia e outro para si.',
            next: 'final_dva',
          },
        ],
      },
      pekarnya_pozdno: {
        emoji: '😟',
        text: 'Когда́ запыха́вшийся Ли́ну прибега́ет в пека́рню, при́лавок уже́ пуст: все кре́ндели раскупи́ли. Одна́ко продаве́ц, заме́тивший его́ расстро́енное лицо́, достаёт из-под при́лавка после́дний кре́ндель. Он отложи́л его́ для себя́, но гото́в отда́ть го́стю, прие́хавшему так издалека́.',
        translation:
          'Quando o Linu chega à padaria sem fôlego, o balcão já está vazio: venderam todos os kringels. Porém, o vendedor, que notou a cara desapontada dele, tira de baixo do balcão o último kringel. Ele o tinha guardado para si, mas está disposto a dá-lo a um visitante que veio de tão longe.',
        choices: [
          { text: 'С благода́рностью взять кре́ндель.', translation: 'Aceitar o kringel, agradecido.', next: 'final_posledniy' },
          { text: 'Отказа́ться и купи́ть Ка́те магни́т с за́мком.', translation: 'Recusar e comprar para a Kátia um ímã com o castelo.', next: 'final_magnit' },
        ],
      },
      final_katya: {
        emoji: '🎂',
        text: 'Ве́чером Ка́тя открыва́ет коро́бку и а́хает: кре́ндель, привезённый из Вы́борга, ещё па́хнет пека́рней. Го́сти съеда́ют его́ за пять мину́т, хотя́ на столе́ стои́т и большо́й торт. Ка́тя говори́т, что э́то лу́чший пода́рок за весь день.',
        translation:
          'À noite, Kátia abre a caixa e solta um “ah!”: o kringel trazido de Víborg ainda cheira a padaria. Os convidados o devoram em cinco minutos, embora haja também um bolo grande na mesa. Kátia diz que foi o melhor presente do dia.',
        ending: {
          tone: 'bom',
          title: 'Presente certeiro',
          message: 'O kringel chegou fresquinho e fez mais sucesso que o bolo. Missão cumprida!',
        },
      },
      final_dva: {
        emoji: '🚆',
        text: 'В электри́чке Ли́ну смо́трит на свой кре́ндель, па́хнущий так вку́сно. Хотя́ он обеща́л себе́ подожда́ть до ве́чера, к Петербу́ргу от кре́нделя остаю́тся то́лько кро́шки. Зато́ Ка́тин кре́ндель доезжа́ет це́лым, и Ка́тя о́чень ра́да.',
        translation:
          'No trem, o Linu olha para o seu kringel, que cheira tão bem. Embora tivesse prometido a si mesmo esperar até a noite, quando chega a São Petersburgo só sobram migalhas. Em compensação, o kringel da Kátia chega inteiro, e ela fica muito contente.',
        ending: {
          tone: 'bom',
          title: 'Um para cada',
          message: 'Comprar dois foi a decisão mais sábia do dia: o da Kátia chegou intacto, e o do Linu... virou lanche de viagem.',
        },
      },
      final_posledniy: {
        emoji: '🤝',
        text: 'Ли́ну горячо́ благодари́т продавца́ и обеща́ет прие́хать ещё раз. Ве́чером Ка́тя, узна́вшая э́ту исто́рию, говори́т, что э́тот кре́ндель — са́мый це́нный пода́рок. Ведь его́ пода́рили два до́брых челове́ка.',
        translation:
          'O Linu agradece calorosamente ao vendedor e promete voltar. À noite, Kátia, que ficou sabendo da história, diz que esse kringel é o presente mais valioso. Afinal, foram duas pessoas bondosas que o deram.',
        ending: {
          tone: 'bom',
          title: 'O último kringel',
          message: 'O Linu se atrasou, mas encontrou em Víborg um presente ainda melhor: a gentileza de um desconhecido.',
        },
      },
      final_magnit: {
        emoji: '🧲',
        text: 'Ли́ну не хо́чет забира́ть у продавца́ его́ кре́ндель и покупа́ет Ка́те магни́т с Вы́боргским за́мком. Ка́тя благодари́т его́, одна́ко немно́го гру́стно вздыха́ет: о кре́нделе она́ мечта́ла це́лую неде́лю. В сле́дующий раз Ли́ну обеща́ет не опа́здывать.',
        translation:
          'O Linu não quer tirar o kringel do vendedor e compra para a Kátia um ímã com o castelo de Víborg. Kátia agradece, porém dá um suspiro meio triste: ela sonhava com o kringel a semana inteira. Da próxima vez, o Linu promete não se atrasar.',
        ending: {
          tone: 'neutro',
          title: 'Só um ímã',
          message: 'Gesto educado, mas o kringel ficou na vontade. Em Víborg, as padarias não esperam ninguém!',
        },
      },
    },
  },
  {
    id: 'ru-h34',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Го́лос Алта́я',
    emoji: '🏔️',
    summary: 'No lago Teletskoie, nos montes Altai, o Linu lê um aviso oficial e escolhe entre uma cachoeira e um concerto de canto gutural.',
    cultural_context:
      'O lago Teletskoie, o maior da República de Altai, faz parte do sítio “Montanhas Douradas do Altai”, Patrimônio Mundial da UNESCO desde 1998. No Altai se pratica o кай, um canto gutural tradicional que acompanhava longas narrativas épicas, muitas vezes ao som do topshur, um alaúde de duas cordas.',
    start: 'start',
    glossary: [
      ['прочита́в', 'depois de ler'],
      ['слу́шая', 'ouvindo'],
      ['объявле́ние', 'aviso'],
      ['запове́дник', 'reserva natural'],
      ['горлово́е пе́ние', 'canto gutural'],
      ['разреша́ется', 'é permitido'],
      ['теплохо́д', 'barco a motor'],
      ['выража́ть благода́рность', 'expressar gratidão'],
    ],
    nodes: {
      start: {
        emoji: '🚐',
        text: 'Проведя́ це́лый день в доро́ге, Ли́ну наконе́ц прие́хал к Теле́цкому о́зеру. Хозя́йка гостево́го до́ма Мари́на, встре́тив его́ у воро́т, даёт ему́ ключ. Уходя́, она́ пока́зывает на объявле́ние, вися́щее у вхо́да: “Прочита́йте, там всё про за́втра”.',
        translation:
          'Depois de passar o dia inteiro na estrada, o Linu finalmente chegou ao lago Teletskoie. A dona da pousada, Marina, o recebe no portão e lhe entrega a chave. Ao sair, ela aponta para um aviso pendurado na entrada: “Leia, ali está tudo sobre amanhã”.',
        choices: [
          { text: 'Внима́тельно прочита́ть объявле́ние.', translation: 'Ler o aviso com atenção.', next: 'obyavlenie' },
          { text: 'Не чита́я, пойти́ спать.', translation: 'Ir dormir sem ler.', next: 'son' },
        ],
      },
      son: {
        emoji: '😴',
        text: 'Уста́в по́сле доро́ги, Ли́ну засыпа́ет, так и не прочита́в объявле́ния. У́тром, вы́йдя к о́зеру, он ви́дит теплохо́д, уже́ отплыва́ющий от при́стани. Мари́на, пожа́в плеча́ми, говори́т, что ве́чером в клу́бе бу́дет ещё конце́рт.',
        translation:
          'Cansado da viagem, o Linu adormece sem ler o aviso. De manhã, ao sair para o lago, ele vê um barco que já está se afastando do cais. Marina dá de ombros e diz que à noite ainda haverá um concerto no clube.',
        choices: [{ text: 'Пойти́ ве́чером на конце́рт.', translation: 'Ir ao concerto à noite.', next: 'koncert' }],
      },
      obyavlenie: {
        emoji: '📋',
        text: '“Уважа́емые го́сти! За́втра в 9:00 от при́стани отправля́ется теплохо́д к водопа́ду на восто́чном берегу́ о́зера. Посеще́ние запове́дника разреша́ется то́лько по тропе́ и в сопровожде́нии инспе́ктора. Ве́чером в клу́бе посёлка состои́тся конце́рт горлово́го пе́ния. Администра́ция”.',
        translation:
          '“Prezados hóspedes! Amanhã, às 9h, sai do cais um barco para a cachoeira na margem leste do lago. A visita à reserva é permitida somente pela trilha e acompanhada de um guarda-parque. À noite, no clube do vilarejo, será realizado um concerto de canto gutural. A Administração”.',
        choices: [
          { text: 'Записа́ться на теплохо́д.', translation: 'Inscrever-se no passeio de barco.', next: 'teplohod' },
          { text: 'Отдохну́ть днём и пойти́ ве́чером на конце́рт.', translation: 'Descansar de dia e ir ao concerto à noite.', next: 'koncert' },
          {
            text: 'Реши́ть пойти́ в запове́дник одному́, куда́ захо́чется.',
            translation: 'Decidir ir sozinho à reserva, para onde der vontade.',
            wrong:
              'O aviso diz que a visita à reserva “разреша́ется то́лько по тропе́ и в сопровожде́нии инспе́ктора”: só pela trilha e acompanhado de um guarda-parque.',
          },
        ],
      },
      teplohod: {
        emoji: '⛴️',
        text: 'Теплохо́д идёт вдоль берего́в, покры́тых кедро́вой тайго́й. Капита́н расска́зывает, что о́зеро, длина́ кото́рого почти́ во́семьдесят киломе́тров, называ́ют мла́дшим бра́том Байка́ла. Сто́я на па́лубе, Ли́ну смо́трит в во́ду, насто́лько прозра́чную, что у бе́рега видны́ ка́мни на дне.',
        translation:
          'O barco segue ao longo das margens cobertas de taiga de cedros. O capitão conta que o lago, com quase oitenta quilômetros de comprimento, é chamado de irmão caçula do Baikal. De pé no convés, o Linu olha a água, tão transparente que perto da margem dá para ver as pedras no fundo.',
        choices: [{ text: 'Сойти́ на бе́рег у водопа́да.', translation: 'Desembarcar junto à cachoeira.', next: 'vodopad' }],
      },
      vodopad: {
        emoji: '💦',
        text: 'Пройдя́ по деревя́нной тропе́, Ли́ну ока́зывается пе́ред водопа́дом. Вода́ с шу́мом па́дает с ка́мней, и в во́здухе виси́т холо́дная водяна́я пыль. Инспе́ктор напомина́ет, что сходи́ть с тропы́ запрещено́: вся приро́да здесь охраня́ется зако́ном.',
        translation:
          'Depois de percorrer uma trilha de madeira, o Linu se vê diante da cachoeira. A água cai ruidosamente das pedras, e no ar paira uma névoa fria. O guarda-parque lembra que é proibido sair da trilha: toda a natureza ali é protegida por lei.',
        choices: [
          {
            text: 'Сфотографи́ровать водопа́д с тропы́ и верну́ться к ве́черу на конце́рт.',
            translation: 'Fotografar a cachoeira da trilha e voltar a tempo do concerto.',
            next: 'koncert',
          },
          {
            text: 'Сойти́ с тропы́, что́бы подойти́ бли́же к воде́.',
            translation: 'Sair da trilha para chegar mais perto da água.',
            wrong: 'O guarda acabou de lembrar que é proibido sair da trilha (сходи́ть с тропы́ запрещено́): a natureza ali é protegida por lei.',
          },
        ],
      },
      koncert: {
        emoji: '🎶',
        text: 'Клуб посёлка по́лон люде́й. На сце́ну выхо́дит музыка́нт с двухстру́нным инструме́нтом и начина́ет петь, почти́ не открыва́я рта. Его́ го́лос звучи́т сра́зу как два зву́ка: ни́зкий, похо́жий на гул ве́тра, и высо́кий, похо́жий на свист.',
        translation:
          'O clube do vilarejo está lotado. Um músico entra no palco com um instrumento de duas cordas e começa a cantar quase sem abrir a boca. Sua voz soa como dois sons ao mesmo tempo: um grave, parecido com o zumbido do vento, e um agudo, parecido com um assobio.',
        choices: [
          { text: 'По́сле конце́рта подойти́ к музыка́нту.', translation: 'Depois do concerto, ir falar com o músico.', next: 'muzykant' },
          { text: 'Вы́йти к о́зеру посмотре́ть на звёзды.', translation: 'Sair até o lago para ver as estrelas.', next: 'final_zvezdy' },
        ],
      },
      muzykant: {
        emoji: '🪕',
        text: 'Музыка́нт, улыба́ясь, объясня́ет, что горлово́му пе́нию у́чатся мно́го лет. Ра́ньше так исполня́лись дли́нные герои́ческие сказа́ния, кото́рые могли́ звуча́ть всю ночь. Уви́дев, как внима́тельно Ли́ну слу́шает, он предлага́ет ему́ попро́бовать.',
        translation:
          'O músico, sorrindo, explica que o canto gutural leva muitos anos para ser aprendido. Antigamente, assim eram cantadas longas narrativas heroicas, que podiam durar a noite inteira. Vendo como o Linu escuta com atenção, ele o convida a experimentar.',
        choices: [
          { text: 'Попро́бовать спеть са́мому.', translation: 'Tentar cantar ele mesmo.', next: 'final_pesnya' },
          { text: 'Поблагодари́ть и вы́йти к о́зеру.', translation: 'Agradecer e sair até o lago.', next: 'final_zvezdy' },
        ],
      },
      final_pesnya: {
        emoji: '🐧',
        text: 'Ли́ну набира́ет во́здух и пыта́ется повтори́ть ни́зкий звук, одна́ко у него́ получа́ется что́-то вро́де ка́шля. Зал взрыва́ется до́брым сме́хом. Музыка́нт, похлопа́в его́ по плечу́, говори́т, что пе́рвые де́сять лет всегда́ са́мые тру́дные.',
        translation:
          'O Linu enche o peito e tenta repetir o som grave, porém sai algo parecido com uma tosse. O salão explode numa risada simpática. O músico, dando-lhe um tapinha no ombro, diz que os primeiros dez anos são sempre os mais difíceis.',
        ending: {
          tone: 'neutro',
          title: 'Aprendiz de cantor',
          message: 'O canto gutural não saiu, mas a risada foi coletiva. Faltam só uns dez anos de treino!',
        },
      },
      final_zvezdy: {
        emoji: '🌌',
        text: 'Вы́йдя на бе́рег, Ли́ну поднима́ет го́лову: не́бо, не освещённое огня́ми городо́в, усы́пано звёздами. Он до́лго сиди́т у воды́, слу́шая тишину́. У́тром, уезжа́я, он пи́шет в кни́ге о́тзывов: “Выража́ю глубо́кую благода́рность хозя́йке до́ма и всем жи́телям посёлка”.',
        translation:
          'Ao chegar à margem, o Linu levanta a cabeça: o céu, sem as luzes das cidades, está salpicado de estrelas. Ele fica muito tempo sentado junto à água, ouvindo o silêncio. De manhã, ao partir, escreve no livro de visitas: “Expresso minha profunda gratidão à dona da casa e a todos os moradores do vilarejo”.',
        ending: {
          tone: 'bom',
          title: 'Céu do Altai',
          message: 'Um lago transparente, um canto de dois sons e um céu cheio de estrelas. O Altai deixou o Linu sem palavras, menos as da despedida formal.',
        },
      },
    },
  },
  {
    id: 'ru-h35',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Ве́чная мерзлота́',
    emoji: '🥶',
    summary: 'Em pleno janeiro, o Linu visita Iakutsk, uma das cidades mais frias do mundo, construída sobre o permafrost.',
    cultural_context:
      'Iakutsk, na Sibéria oriental, é uma das cidades grandes mais frias do mundo: em janeiro a temperatura muitas vezes cai abaixo de −40 °C. Como o solo é permafrost (ве́чная мерзлота́), muitos prédios são erguidos sobre estacas, para que o calor das casas não derreta o chão.',
    start: 'start',
    glossary: [
      ['ве́чная мерзлота́', 'permafrost'],
      ['моро́з', 'frio intenso abaixo de zero'],
      ['сва́я', 'estaca'],
      ['постро́ен', 'construído'],
      ['строга́нина', 'stroganina (peixe congelado em lascas)'],
      ['не дава́я', 'sem deixar'],
      ['спусти́вшись', 'depois de descer'],
      ['хра́нятся', 'são guardados'],
    ],
    nodes: {
      start: {
        emoji: '✈️',
        text: 'Ли́ну прилете́л в Яку́тск в середи́не января́. Вы́йдя из аэропо́рта, он сра́зу по́нял, что моро́з здесь совсе́м друго́й: на табло́ со́рок пять гра́дусов ни́же нуля́. Да́же пингви́ну, привы́кшему к хо́лоду, ста́ло не по себе́. Его́ встреча́ет подру́га Са́ша в огро́мной шу́бе.',
        translation:
          'Linu chegou de avião a Iakutsk em meados de janeiro. Ao sair do aeroporto, logo entendeu que o frio aqui é outra coisa: o painel marca quarenta e cinco graus abaixo de zero. Até um pinguim acostumado ao frio ficou desconfortável. Quem o recebe é a amiga Sacha, num casaco de pele enorme.',
        choices: [
          { text: 'Сра́зу пое́хать в Институ́т мерзлотове́дения.', translation: 'Ir direto ao Instituto do Permafrost.', next: 'institut' },
          { text: 'Снача́ла согре́ться и пообе́дать в кафе́.', translation: 'Primeiro se aquecer e almoçar num café.', next: 'kafe' },
        ],
      },
      kafe: {
        emoji: '🐟',
        text: 'В кафе́ Са́ша зака́зывает строга́нину — моро́женую ры́бу, наре́занную то́нкими стру́жками. Её едя́т сра́зу, не дава́я ей отта́ять, и мака́я в соль с пе́рцем. Ли́ну про́бует и удивля́ется: ры́ба та́ет во рту, как моро́женое.',
        translation:
          'No café, Sacha pede stroganina: peixe congelado cortado em lascas finas. Ela é comida na hora, sem deixar descongelar, e mergulhada em sal com pimenta. O Linu prova e se surpreende: o peixe derrete na boca como sorvete.',
        choices: [
          { text: 'Пое́хать с Са́шей в институ́т.', translation: 'Ir com a Sacha ao instituto.', next: 'institut' },
          {
            text: 'Попроси́ть официа́нта подогре́ть ры́бу.',
            translation: 'Pedir ao garçom para esquentar o peixe.',
            wrong: 'A stroganina se come congelada: “не дава́я ей отта́ять”, sem deixar descongelar. Esquentar estragaria o prato.',
          },
        ],
      },
      institut: {
        emoji: '🏢',
        text: 'Са́ша рабо́тает в Институ́те мерзлотове́дения, и э́то не случа́йно: почти́ весь Яку́тск постро́ен на ве́чной мерзлоте́. Она́ пока́зывает Ли́ну дома́, стоя́щие на сва́ях. Е́сли поста́вить дом пря́мо на грунт, тепло́ растопи́т мерзлоту́, и зда́ние начнёт тре́скаться.',
        translation:
          'Sacha trabalha no Instituto do Permafrost, e não por acaso: quase toda Iakutsk é construída sobre o permafrost. Ela mostra ao Linu prédios apoiados sobre estacas. Se a casa for posta direto no chão, o calor derrete o permafrost, e o prédio começa a rachar.',
        choices: [
          { text: 'Спусти́ться в подзе́мную лаборато́рию институ́та.', translation: 'Descer ao laboratório subterrâneo do instituto.', next: 'podzemka' },
          { text: 'Пое́хать в Музе́й ма́монта.', translation: 'Ir ao Museu do Mamute.', next: 'mamont' },
          {
            text: 'Спроси́ть, почему́ в Яку́тске дома́ стро́ят пря́мо на земле́.',
            translation: 'Perguntar por que em Iakutsk as casas são construídas direto no chão.',
            wrong: 'O texto diz o contrário: as casas ficam sobre estacas (стоя́щие на сва́ях), justamente para que o calor não derreta o permafrost.',
          },
        ],
      },
      podzemka: {
        emoji: '🧊',
        text: 'Спусти́вшись по дли́нной ле́стнице глубоко́ вниз, Ли́ну ока́зывается в холо́дном коридо́ре, вы́копанном пря́мо в мерзлоте́. Сте́ны покры́ты и́неем, а температу́ра здесь кру́глый год ни́же нуля́. Са́ша смеётся: “Зимо́й здесь тепле́е, чем на у́лице!”',
        translation:
          'Depois de descer uma longa escada até bem fundo, o Linu se vê num corredor frio, escavado direto no permafrost. As paredes estão cobertas de geada, e a temperatura ali fica abaixo de zero o ano todo. Sacha ri: “No inverno aqui é mais quente do que lá fora!”',
        choices: [
          { text: 'Рассмотре́ть слои́ дре́внего льда в стене́.', translation: 'Examinar as camadas de gelo antigo na parede.', next: 'final_led' },
          { text: 'Подня́ться и пое́хать в Музе́й ма́монта.', translation: 'Subir e ir ao Museu do Mamute.', next: 'mamont' },
        ],
      },
      mamont: {
        emoji: '🦣',
        text: 'В Музе́е ма́монта хра́нятся ко́сти и шерсть живо́тных, на́йденных в ве́чной мерзлоте́. Экскурсово́д объясня́ет, что мерзлота́, как огро́мный холоди́льник, сохраня́ет их ты́сячи лет. Уходя́, Ли́ну замеча́ет на сте́нде официа́льное объявле́ние.',
        translation:
          'No Museu do Mamute são guardados ossos e pelos de animais encontrados no permafrost. O guia explica que o permafrost, como uma geladeira gigante, os conserva por milhares de anos. Ao sair, o Linu nota um aviso oficial no mural.',
        choices: [{ text: 'Прочита́ть объявле́ние.', translation: 'Ler o aviso.', next: 'priglashenie' }],
      },
      priglashenie: {
        emoji: '📜',
        text: '“Уважа́емые посети́тели! В суббо́ту в 15:00 в за́ле музе́я состои́тся откры́тая ле́кция о ма́монтах. Вход свобо́дный, регистра́ция прово́дится у администра́тора. Про́сим вас не опа́здывать”. Ли́ну вспомина́ет, что суббо́та — э́то за́втра.',
        translation:
          '“Prezados visitantes! No sábado, às 15h, será realizada no salão do museu uma palestra aberta sobre os mamutes. Entrada gratuita; a inscrição é feita com o administrador. Pedimos que não se atrasem”. O Linu lembra que sábado é amanhã.',
        choices: [
          { text: 'Зарегистри́роваться на ле́кцию.', translation: 'Inscrever-se na palestra.', next: 'final_lekciya' },
          {
            text: 'Реши́ть, что нау́ки на сего́дня хва́тит, и пойти́ гуля́ть по моро́зу.',
            translation: 'Decidir que já chega de ciência por hoje e sair para passear no frio.',
            next: 'final_moroz',
          },
        ],
      },
      final_led: {
        emoji: '🔬',
        text: 'Са́ша подно́сит фона́рик к стене́, и Ли́ну ви́дит поло́сы прозра́чного льда ме́жду слоя́ми земли́. Э́тот лёд, образова́вшийся ещё в дре́вние времена́, храни́т информа́цию о кли́мате про́шлого. Ли́ну понима́ет, что под Яку́тском спря́тана це́лая ледяна́я библиоте́ка.',
        translation:
          'Sacha aproxima a lanterna da parede, e o Linu vê faixas de gelo transparente entre as camadas de terra. Esse gelo, formado ainda em tempos antigos, guarda informações sobre o clima do passado. O Linu entende que debaixo de Iakutsk está escondida uma verdadeira biblioteca de gelo.',
        ending: {
          tone: 'bom',
          title: 'Biblioteca de gelo',
          message: 'Debaixo da cidade mais fria, o Linu descobriu que o gelo também conta histórias. Ciência de verdade!',
        },
      },
      final_lekciya: {
        emoji: '🎓',
        text: 'На ле́кции учёный расска́зывает, как в мерзлоте́ нахо́дят ма́монтов с сохрани́вшейся ше́рстью. Слу́шая его́, Ли́ну забыва́ет и о хо́лоде, и о вре́мени. Уходя́, он пи́шет в кни́ге о́тзывов: “Благодарю́ сотру́дников музе́я за интере́снейшую ле́кцию”.',
        translation:
          'Na palestra, um cientista conta como se encontram no permafrost mamutes com o pelo conservado. Ouvindo-o, o Linu esquece o frio e a hora. Ao sair, escreve no livro de visitas: “Agradeço aos funcionários do museu pela interessantíssima palestra”.',
        ending: {
          tone: 'bom',
          title: 'Amigo dos mamutes',
          message: 'Stroganina, casas sobre estacas e mamutes congelados: Iakutsk esquentou a curiosidade do Linu.',
        },
      },
      final_moroz: {
        emoji: '❄️',
        text: 'Ли́ну выхо́дит на у́лицу и уже́ че́рез де́сять мину́т не чу́вствует лап. Его́ дыха́ние сра́зу превраща́ется в о́блако па́ра, а клюв покрыва́ется и́неем. Верну́вшись в тёплый музе́й, он признаётся: да́же пингви́нам нужна́ тёплая шу́ба.',
        translation:
          'O Linu sai para a rua e em dez minutos já não sente as patas. Sua respiração vira na hora uma nuvem de vapor, e o bico se cobre de geada. De volta ao museu quentinho, ele confessa: até os pinguins precisam de um casaco de pele.',
        ending: {
          tone: 'neutro',
          title: 'Frio de verdade',
          message: 'Menos 45 não é brincadeira, nem para um pinguim. Amanhã, palestra e casaco!',
        },
      },
    },
  },
  {
    id: 'ru-h36',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Колыбе́ль ра́зума',
    emoji: '🚀',
    summary: 'Em Kaluga, o Linu visita o museu da cosmonáutica e a casa de Tsiolkóvski, o professor que sonhava com o espaço.',
    cultural_context:
      'Konstantin Tsiolkóvski, pioneiro da teoria dos foguetes, viveu e deu aulas em Kaluga de 1892 até morrer, em 1935. Em 1967 abriu na cidade o Museu Estatal de História da Cosmonáutica, que leva o nome dele, e a casa onde ele morava também virou museu.',
    start: 'start',
    glossary: [
      ['колыбе́ль', 'berço'],
      ['обойти́ зал', 'percorrer a sala inteira'],
      ['перейти́ в друго́й зал', 'passar para outra sala'],
      ['дойти́ до', 'chegar (a pé) até'],
      ['загляну́ть', 'dar uma espiada'],
      ['глаза́ разбега́ются', 'não saber para onde olhar (de tanta coisa)'],
      ['вита́ть в облака́х', 'viver no mundo da lua'],
      ['руко́й пода́ть', 'fica a dois passos'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Ли́ну прие́хал в Калу́гу на электри́чке из Москвы́. На вокза́ле его́ встреча́ет Ве́ра, кото́рая рабо́тает в музе́е исто́рии космона́втики. “Мо́жем сра́зу пойти́ в музе́й, — предлага́ет она́, — а мо́жем снача́ла дойти́ до до́ма, где жил Циолко́вский”. Ли́ну не зна́ет, что вы́брать: хо́чется всё и сра́зу.',
        translation:
          'Linu chegou a Kaluga de trem suburbano, vindo de Moscou. Na estação quem o recebe é Vera, que trabalha no museu de história da cosmonáutica. “Podemos ir direto ao museu — ela propõe — ou podemos primeiro ir a pé até a casa onde Tsiolkóvski morava”. Linu não sabe o que escolher: quer tudo de uma vez.',
        choices: [
          { text: 'Сра́зу пойти́ в музе́й.', translation: 'Ir direto ao museu.', next: 'museum' },
          { text: 'Снача́ла дойти́ до до́ма Циолко́вского.', translation: 'Primeiro ir a pé até a casa de Tsiolkóvski.', next: 'walk' },
        ],
      },
      museum: {
        emoji: '🛰️',
        text: 'У вхо́да в музе́й стои́т настоя́щая раке́та, и Ли́ну до́лго смо́трит на неё сни́зу вверх. Внутри́ у него́ глаза́ разбега́ются: спу́тники, скафа́ндры, моде́ли косми́ческих корабле́й. “Не спеши́, — говори́т Ве́ра. — Снача́ла обойдём э́тот зал, а пото́м перейдём в сле́дующий”. Ли́ну с трудо́м стои́т на ме́сте.',
        translation:
          'Na entrada do museu há um foguete de verdade, e Linu fica um tempão olhando para ele de baixo para cima. Lá dentro, ele não sabe para onde olhar: satélites, trajes espaciais, maquetes de naves. “Sem pressa — diz Vera. — Primeiro vamos percorrer esta sala inteira, depois passamos para a seguinte”. Linu mal consegue ficar parado.',
        choices: [
          { text: 'Обойти́ зал вме́сте с Ве́рой.', translation: 'Percorrer a sala junto com a Vera.', next: 'hall' },
          {
            text: 'Сра́зу перебежа́ть в сле́дующий зал.',
            translation: 'Correr direto para a sala seguinte.',
            wrong:
              'Vera pediu calma: primeiro “обойдём э́тот зал” (vamos percorrer esta sala toda) e só depois “перейдём в сле́дующий” (passamos para a seguinte).',
          },
        ],
      },
      hall: {
        emoji: '📐',
        text: 'Они́ ме́дленно обхо́дят зал, и Ве́ра расска́зывает о Циолко́вском. В де́тстве он почти́ потеря́л слух и мно́гому научи́лся сам, по кни́гам. “Сосе́ди ду́мали, что он вита́ет в облака́х, — смеётся Ве́ра, — а он в э́то вре́мя писа́л фо́рмулы полёта раке́ты”. Тепе́рь Ли́ну о́чень хо́чется уви́деть его́ дом.',
        translation:
          'Eles percorrem a sala devagar, e Vera fala de Tsiolkóvski. Na infância ele quase perdeu a audição e aprendeu muita coisa sozinho, pelos livros. “Os vizinhos achavam que ele vivia no mundo da lua — ri Vera —, e ele, enquanto isso, escrevia as fórmulas do voo do foguete”. Agora Linu quer muito ver a casa dele.',
        choices: [
          { text: 'Дойти́ пешко́м до его́ до́ма.', translation: 'Ir a pé até a casa dele.', next: 'walk' },
          { text: 'Оста́ться в музе́е и пойти́ в планета́рий.', translation: 'Ficar no museu e ir ao planetário.', next: 'final_museum' },
        ],
      },
      walk: {
        emoji: '🚶',
        text: 'Ве́ра и Ли́ну иду́т по ти́хим у́лицам ста́рой Калу́ги. “До до́ма руко́й пода́ть, — говори́т Ве́ра, — но сего́дня он закрыва́ется ра́но”. По доро́ге они́ прохо́дят ми́мо кафе́, где продаю́т моро́женое. Ли́ну замедля́ет шаг.',
        translation:
          'Vera e Linu andam pelas ruas tranquilas da velha Kaluga. “A casa fica a dois passos — diz Vera —, mas hoje ela fecha cedo”. No caminho eles passam por um café que vende sorvete. Linu diminui o passo.',
        choices: [
          { text: 'Пройти́ ми́мо и дойти́ до до́ма во́время.', translation: 'Passar direto e chegar à casa a tempo.', next: 'house' },
          { text: 'Зайти́ в кафе́ на полчаса́.', translation: 'Entrar no café por meia hora.', next: 'final_late' },
        ],
      },
      house: {
        emoji: '🏠',
        text: 'Дом Циолко́вского — просто́й деревя́нный дом с ма́ленькими о́кнами. Смотри́тельница ведёт их наве́рх, в мастерску́ю, где он сам де́лал моде́ли и прибо́ры. “Заходи́ть внутрь нельзя́, — предупрежда́ет она́, — но загляну́ть с поро́га мо́жно”. На столе́ лежа́т инструме́нты, как бу́дто хозя́ин то́лько что вы́шел.',
        translation:
          'A casa de Tsiolkóvski é uma casa simples de madeira, com janelas pequenas. A monitora os leva para o andar de cima, à oficina onde ele mesmo fazia maquetes e instrumentos. “Não se pode entrar — ela avisa —, mas dá para espiar da porta”. Sobre a mesa estão as ferramentas, como se o dono tivesse acabado de sair.',
        choices: [
          { text: 'Загляну́ть в мастерску́ю с поро́га.', translation: 'Espiar a oficina da porta.', next: 'final_bom' },
          {
            text: 'Зайти́ в мастерску́ю и взять моде́ль в ру́ки.',
            translation: 'Entrar na oficina e pegar uma maquete na mão.',
            wrong:
              'A monitora avisou que não se pode entrar (“заходи́ть внутрь нельзя́”); só dá para espiar da porta (“загляну́ть с поро́га”). O verbo faz toda a diferença: зайти́ é entrar; загляну́ть é só dar uma olhada para dentro.',
          },
        ],
      },
      final_bom: {
        emoji: '🌌',
        text: 'Ли́ну загля́дывает в мастерску́ю и замира́ет. Ве́ра ти́хо произно́сит са́мые изве́стные слова́ Циолко́вского: “Плане́та есть колыбе́ль ра́зума, но нельзя́ ве́чно жить в колыбе́ли”. Ли́ну до́лго смо́трит на ста́рые прибо́ры. Домо́й он уезжа́ет с чу́вством, что сам немно́го побыва́л в ко́смосе.',
        translation:
          'Linu espia a oficina e fica imóvel. Vera diz baixinho as palavras mais famosas de Tsiolkóvski: “O planeta é o berço da razão, mas não se pode viver para sempre no berço”. Linu fica muito tempo olhando os instrumentos antigos. Ele volta para casa com a sensação de que também esteve um pouco no espaço.',
        ending: {
          tone: 'bom',
          title: 'A casa do sonhador',
          message: 'Você entendeu a diferença entre “загляну́ть” e “зайти́” e viu a oficina de Tsiolkóvski.',
        },
      },
      final_museum: {
        emoji: '🪐',
        text: 'Ли́ну остаётся в музе́е и идёт в планета́рий. Над голово́й ме́дленно плыву́т звёзды и плане́ты, и он чуть не засыпа́ет в мя́гком кре́сле. Когда́ сеа́нс зака́нчивается, дом Циолко́вского уже́ закры́т. “Ничего́, — говори́т Ве́ра, — придёшь в сле́дующий раз”.',
        translation:
          'Linu fica no museu e vai ao planetário. Sobre sua cabeça passam devagar estrelas e planetas, e ele quase adormece na poltrona macia. Quando a sessão termina, a casa de Tsiolkóvski já está fechada. “Não tem problema — diz Vera —, você vem da próxima vez”.',
        ending: {
          tone: 'neutro',
          title: 'Estrelas no teto',
          message: 'O planetário é lindo, mas a casa de Tsiolkóvski ficou para a próxima.',
        },
      },
      final_late: {
        emoji: '🍦',
        text: 'В кафе́ Ли́ну ест моро́женое и забыва́ет про вре́мя. Когда́ они́ наконе́ц дохо́дят до до́ма, дверь уже́ закры́та. Ли́ну загля́дывает в окно́, но ви́дит то́лько своё отраже́ние. “Ну вот, опозда́ли, — вздыха́ет Ве́ра. — Ничего́, прие́дешь ещё раз”.',
        translation:
          'No café Linu toma sorvete e esquece da hora. Quando eles finalmente chegam à casa, a porta já está fechada. Linu espia pela janela, mas só vê o próprio reflexo. “Pronto, chegamos tarde — suspira Vera. — Tudo bem, você vem de novo”.',
        ending: {
          tone: 'neutro',
          title: 'A porta fechada',
          message: 'O sorvete estava bom, mas “руко́й пода́ть” não quer dizer que dá para enrolar.',
        },
      },
    },
  },
  {
    id: 'ru-h37',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ни пу́ха ни пера́!',
    emoji: '🏔️',
    summary: 'No Elbrus, o Linu sobe de teleférico até as neves eternas e aprende a respeitar a altitude.',
    cultural_context:
      'O Elbrus, no Cáucaso, é a montanha mais alta da Rússia e da Europa: o cume oeste tem 5.642 metros. É um vulcão adormecido de dois cumes, coberto de geleiras, e um teleférico leva os visitantes do vale até cerca de 3.800 metros.',
    start: 'start',
    glossary: [
      ['подно́жие', 'pé (base) da montanha'],
      ['отойти́ от гру́ппы', 'afastar-se do grupo'],
      ['зайти́ за флажки́', 'passar das bandeirinhas'],
      ['дойти́ до', 'chegar (a pé) até'],
      ['ни пу́ха ни пера́! — к чёрту!', 'boa sorte! — (resposta tradicional)'],
      ['захва́тывает дух', 'fica-se sem fôlego (de emoção)'],
      ['спать без за́дних ног', 'dormir como uma pedra'],
      ['на седьмо́м не́бе', 'no sétimo céu, felicíssimo'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Ра́но у́тром Ли́ну прие́хал на поля́ну у подно́жия Эльбру́са. Инстру́ктор Ру́слан объясня́ет план: сего́дня они́ подни́мутся на кана́тной доро́ге и переночу́ют в прию́те наверху́, а за́втра пойду́т вы́ше. Пе́ред поса́дкой в каби́ну Ру́слан хло́пает Ли́ну по плечу́: “Ну, ни пу́ха ни пера́!” Ли́ну зна́ет, что на э́то есть осо́бый отве́т.',
        translation:
          'De manhã cedo Linu chegou a uma clareira ao pé do Elbrus. O instrutor Ruslan explica o plano: hoje vão subir de teleférico e dormir no abrigo lá em cima, e amanhã vão mais alto. Antes de entrar na cabine, Ruslan dá um tapinha no ombro do Linu: “Então, boa sorte!” Linu sabe que para isso existe uma resposta especial.',
        choices: [
          { text: '“К чёрту!”', translation: '“Vá para o diabo!” (a resposta tradicional)', next: 'cable' },
          {
            text: '“Спаси́бо большо́е!”',
            translation: '“Muito obrigado!”',
            wrong: 'Pela tradição, quem ouve “ни пу́ха ни пера́” não agradece: responde “к чёрту!”. Agradecer, dizem, dá azar.',
          },
        ],
      },
      cable: {
        emoji: '🚡',
        text: 'Каби́на плывёт над ска́лами, а пото́м над ледника́ми. За окно́м видны́ две бе́лые верши́ны Эльбру́са, и у Ли́ну захва́тывает дух. Ру́слан стро́го предупрежда́ет: “Наверху́ не отходи́ от гру́ппы и не заходи́ за флажки́: там под сне́гом тре́щины”. Каби́на ме́дленно подхо́дит к ве́рхней ста́нции.',
        translation:
          'A cabine desliza sobre as rochas e depois sobre as geleiras. Pela janela se veem os dois cumes brancos do Elbrus, e Linu fica sem fôlego. Ruslan avisa, sério: “Lá em cima não se afaste do grupo e não passe das bandeirinhas: ali, debaixo da neve, há fendas”. A cabine se aproxima devagar da estação de cima.',
        choices: [
          { text: 'Держа́ться ря́дом с гру́ппой.', translation: 'Ficar junto do grupo.', next: 'station' },
          {
            text: 'Зайти́ за флажки́ ра́ди краси́вого сни́мка.',
            translation: 'Ir para além das bandeirinhas por uma foto bonita.',
            wrong:
              'Ruslan avisou: “не отходи́ от гру́ппы” (não se afaste do grupo) e “не заходи́ за флажки́” (não passe das bandeirinhas), porque debaixo da neve há fendas.',
          },
        ],
      },
      station: {
        emoji: '❄️',
        text: 'На ве́рхней ста́нции хо́лодно и ве́трено, а во́здух тако́й ре́дкий, что ка́ждый шаг даётся с трудо́м. “Сейча́с мы подни́мемся пешко́м ещё ме́тров на сто и спу́стимся обра́тно, — говори́т Ру́слан. — Так органи́зм привыка́ет к высоте́”. Ря́дом стои́т ратра́к, кото́рый за де́ньги довози́т тури́стов до ска́л Пасту́хова. Ли́ну заду́мывается: заче́м идти́ пешко́м, е́сли мо́жно дое́хать?',
        translation:
          'Na estação de cima faz frio e venta, e o ar é tão rarefeito que cada passo custa. “Agora vamos subir a pé mais uns cem metros e descer de volta — diz Ruslan. — Assim o corpo se acostuma à altitude”. Ali perto há um trator de neve que, pagando, leva os turistas até as rochas de Pastukhov. Linu fica pensando: para que ir a pé, se dá para subir de trator?',
        choices: [
          { text: 'Подня́ться пешко́м вме́сте с Ру́сланом.', translation: 'Subir a pé junto com o Ruslan.', next: 'acclim' },
          { text: 'Сесть в ратра́к и сра́зу дое́хать до ска́л.', translation: 'Pegar o trator de neve e ir direto até as rochas.', next: 'snowcat' },
        ],
      },
      acclim: {
        emoji: '🥾',
        text: 'Они́ ме́дленно поднима́ются по сне́жному скло́ну и так же ме́дленно спуска́ются. Ли́ну ды́шит тяжело́, но голова́ у него́ не боли́т. Ве́чером в прию́те Ру́слан дово́лен: “Молоде́ц, за́втра дойдём до ска́л Пасту́хова”. По́сле тако́го дня Ли́ну спит без за́дних ног.',
        translation:
          'Eles sobem devagar pela encosta nevada e descem igualmente devagar. Linu respira com dificuldade, mas não tem dor de cabeça. À noite, no abrigo, Ruslan está satisfeito: “Muito bem, amanhã chegamos às rochas de Pastukhov”. Depois de um dia desses, Linu dorme como uma pedra.',
        choices: [
          { text: 'Ра́но у́тром пойти́ к ска́лам.', translation: 'Sair cedo de manhã rumo às rochas.', next: 'final_rocks' },
          { text: 'Лу́чше спусти́ться и поката́ться на лы́жах.', translation: 'Melhor descer e esquiar.', next: 'final_ski' },
        ],
      },
      final_rocks: {
        emoji: '⛰️',
        text: 'Они́ выхо́дят на рассве́те, пока́ снег твёрдый. Шаг за ша́гом Ли́ну дохо́дит до ска́л Пасту́хова, и голова́ у него́ не кру́жится. Внизу́ лежа́т облака́, а над ни́ми — верши́ны Кавка́за. “Ну что, на седьмо́м не́бе?” — смеётся Ру́слан, и Ли́ну то́лько кива́ет.',
        translation:
          'Eles saem ao amanhecer, enquanto a neve está firme. Passo a passo, Linu chega às rochas de Pastukhov, sem nenhuma tontura. Lá embaixo estão as nuvens e, acima delas, os picos do Cáucaso. “E aí, no sétimo céu?” — ri Ruslan, e Linu só faz que sim com a cabeça.',
        ending: {
          tone: 'bom',
          title: 'No sétimo céu',
          message: 'Você subiu devagar, como a montanha exige, e chegou às rochas de Pastukhov sem mal-estar.',
        },
      },
      final_ski: {
        emoji: '⛷️',
        text: 'Ли́ну спуска́ется на ста́нцию пони́же и берёт лы́жи напрока́т. Весь день он ката́ется по широ́ким скло́нам, а Эльбру́с смо́трит на него́ све́рху. Ве́чером Ру́слан говори́т: “До ска́л мы не дошли́, но гора́ никуда́ не уйдёт”. Ли́ну обеща́ет верну́ться сюда́ на сле́дующий год.',
        translation:
          'Linu desce até uma estação mais baixa e aluga esquis. O dia inteiro ele esquia pelas encostas largas, e o Elbrus o observa lá de cima. À noite Ruslan diz: “Não chegamos às rochas, mas a montanha não vai fugir”. Linu promete voltar no ano que vem.',
        ending: { tone: 'bom', title: 'Dia de esqui', message: 'Um dia tranquilo nas encostas: a montanha continua lá esperando por você.' },
      },
      snowcat: {
        emoji: '🤕',
        text: 'Ратра́к бы́стро довози́т Ли́ну до ска́л Пасту́хова, и Ру́слан е́дет вме́сте с ним. Но уже́ че́рез полчаса́ у Ли́ну си́льно боли́т голова́, и его́ немно́го тошни́т. “Э́то го́рная боле́знь, — говори́т Ру́слан. — Лека́рство от неё одно́: сра́зу спуска́ться вниз”. А Ли́ну так хо́чется ещё посиде́ть и полюбова́ться ви́дом.',
        translation:
          'O trator de neve leva Linu rapidinho às rochas de Pastukhov, e Ruslan vai junto. Mas meia hora depois Linu está com muita dor de cabeça e um pouco enjoado. “É o mal da montanha — diz Ruslan. — Só há um remédio: descer imediatamente”. E Linu queria tanto ficar mais um pouco admirando a vista.',
        choices: [
          { text: 'Сра́зу спусти́ться вниз.', translation: 'Descer imediatamente.', next: 'final_down' },
          {
            text: 'Посиде́ть наверху́, пока́ всё само́ не пройдёт.',
            translation: 'Ficar sentado lá em cima até passar sozinho.',
            wrong: 'Ruslan disse que o único remédio para o mal da montanha é descer na hora (“сра́зу спуска́ться вниз”). Ficar lá em cima só piora.',
          },
        ],
      },
      final_down: {
        emoji: '🌫️',
        text: 'Они́ спуска́ются, и уже́ на ста́нции Ли́ну стано́вится лу́чше. Ру́слан объясня́ет: на высоту́ на́до поднима́ться постепе́нно, ина́че органи́зм не успева́ет привы́кнуть. “Ти́ше е́дешь — да́льше бу́дешь”, — повторя́ет он посло́вицу. Ли́ну по́нял уро́к, но до ска́л пешко́м он так и не дошёл.',
        translation:
          'Eles descem, e já na estação Linu se sente melhor. Ruslan explica: é preciso ganhar altitude aos poucos, senão o corpo não tem tempo de se acostumar. “Devagar se vai ao longe”, repete ele o provérbio. Linu aprendeu a lição, mas acabou não chegando às rochas a pé.',
        ending: {
          tone: 'neutro',
          title: 'Lição de altitude',
          message: 'Você desceu na hora certa, mas o atalho de trator custou a subida: na montanha, devagar se vai ao longe.',
        },
      },
    },
  },
  {
    id: 'ru-h38',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Корми́ть ли лис?',
    emoji: '🦊',
    summary: 'Em Iujno-Sakhalinsk, o Linu participa do debate de um clube de ecologia: é certo dar comida às raposas da ilha?',
    cultural_context:
      'Sacalina é a maior ilha da Rússia, separada do continente pelo estreito da Tartária; a capital é Iujno-Sakhalinsk. Em 1890, Anton Tchékhov atravessou o país até lá e depois escreveu o livro “A ilha de Sacalina”.',
    start: 'start',
    glossary: [
      ['я счита́ю, что…', 'eu acho (considero) que…'],
      ['по-мо́ему', 'na minha opinião'],
      ['во-пе́рвых… во-вторы́х…', 'em primeiro lugar… em segundo…'],
      ['с одно́й стороны́… с друго́й стороны́…', 'por um lado… por outro…'],
      ['поэ́тому', 'por isso'],
      ['возража́ть', 'objetar, contestar'],
      ['аргуме́нт', 'argumento'],
      ['стоя́ть на своём', 'manter a sua posição, teimar'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Ли́ну гости́т у дру́га Ди́мы в Ю́жно-Сахали́нске. Ди́ма хо́дит в шко́льный экологи́ческий клуб, и сего́дня там деба́ты: “Мо́жно ли корми́ть ди́ких лис?” Ле́том тури́сты ча́сто ви́дят лис у доро́г и броса́ют им хлеб и колбасу́. “Приходи́, — говори́т Ди́ма. — Ты гость, тебя́ то́же спро́сят, что ты ду́маешь”.',
        translation:
          'Linu está hospedado na casa do amigo Dima, em Iujno-Sakhalinsk. Dima frequenta o clube de ecologia da escola, e hoje lá tem debate: “Pode-se alimentar raposas selvagens?” No verão, os turistas veem muitas raposas à beira das estradas e jogam pão e salsicha para elas. “Venha — diz Dima. — Você é convidado, vão perguntar o que você acha também”.',
        choices: [
          { text: 'Пойти́ на деба́ты вме́сте с Ди́мой.', translation: 'Ir ao debate com o Dima.', next: 'debate1' },
          { text: 'Пойти́, но снача́ла то́лько слу́шать.', translation: 'Ir, mas primeiro só ouvir.', next: 'debate1' },
        ],
      },
      debate1: {
        emoji: '🎤',
        text: 'Пе́рвым выступа́ет Макси́м. “Я счита́ю, что лис корми́ть мо́жно, — говори́т он. — Во-пе́рвых, лисе́ тру́дно найти́ еду́, осо́бенно зимо́й. Во-вторы́х, лю́ди ра́ды помо́чь, и им не жа́лко ку́ска хле́ба”. Не́которые ребя́та в за́ле кива́ют.',
        translation:
          'O primeiro a falar é Maksim. “Eu acho que se pode alimentar as raposas — diz ele. — Em primeiro lugar, é difícil para a raposa achar comida, principalmente no inverno. Em segundo lugar, as pessoas gostam de ajudar, e não lhes custa nada um pedaço de pão”. Alguns alunos na plateia concordam com a cabeça.',
        choices: [
          { text: 'Слу́шать да́льше.', translation: 'Continuar ouvindo.', next: 'debate2' },
          {
            text: 'Записа́ть в блокно́т: “Макси́м — про́тив”.',
            translation: 'Anotar no caderninho: “Maksim — contra”.',
            wrong: 'Ao contrário: Maksim disse “я счита́ю, что лис корми́ть мо́жно”, ou seja, ele é a favor, e deu dois argumentos (“во-пе́рвых… во-вторы́х…”).',
          },
        ],
      },
      debate2: {
        emoji: '🗣️',
        text: 'Пото́м сло́во берёт Али́на. “С одно́й стороны́, Макси́м прав: лис жа́лко, — начина́ет она́. — С друго́й стороны́, хлеб и колбаса́ для них вре́дны, а лиса́, кото́рая привы́кла к лю́дям, выхо́дит на доро́гу и попада́ет под маши́ны. Поэ́тому я уве́рена, что лу́чше их не корми́ть”. В за́ле начина́ется шум.',
        translation:
          'Depois quem pega a palavra é Alina. “Por um lado, o Maksim tem razão: dá dó das raposas — começa ela. — Por outro lado, pão e salsicha fazem mal a elas, e uma raposa acostumada com gente vai para a estrada e é atropelada. Por isso tenho certeza de que é melhor não alimentá-las”. Começa um burburinho na sala.',
        choices: [
          { text: 'Подня́ть ру́ку и попроси́ть сло́во.', translation: 'Levantar a mão e pedir a palavra.', next: 'linu_turn' },
          {
            text: 'Записа́ть: “Али́на во всём согла́сна с Макси́мом”.',
            translation: 'Anotar: “Alina concorda com o Maksim em tudo”.',
            wrong:
              'Alina só concorda em parte (“с одно́й стороны́, Макси́м прав”). Depois de “с друго́й стороны́” vem a objeção, e a conclusão dela (“поэ́тому…”) é que é melhor não alimentar as raposas.',
          },
        ],
      },
      linu_turn: {
        emoji: '🐧',
        text: 'Веду́щая Та́ня повора́чивается к Ли́ну: “У нас в гостя́х пингви́н, а пингви́ны то́же ди́кие живо́тные. Как ты счита́ешь?” Все смо́трят на Ли́ну, и ему́ стано́вится немно́го стра́шно. Он вспомина́ет, что хоро́ший отве́т — э́то не про́сто “да” и́ли “нет”, а мне́ние с аргуме́нтами.',
        translation:
          'A mediadora Tânia se vira para o Linu: “Temos um pinguim de visita, e pinguins também são animais selvagens. O que você acha?” Todos olham para o Linu, e ele fica um pouco nervoso. Ele se lembra de que uma boa resposta não é só “sim” ou “não”, mas uma opinião com argumentos.',
        choices: [
          {
            text: '“По-мо́ему, пра́вы о́ба. Лиса́м тру́дно, но на́ша еда́ им вреди́т. Поэ́тому я счита́ю, что помога́ть на́до по-друго́му”.',
            translation:
              '“Na minha opinião, os dois têm razão. É difícil para as raposas, mas a nossa comida faz mal a elas. Por isso acho que é preciso ajudar de outro jeito”.',
            next: 'plan',
          },
          {
            text: '“Я согла́сен с Макси́мом: лису́ жа́лко, зна́чит, на́до корми́ть”.',
            translation: '“Concordo com o Maksim: dá dó da raposa, então tem que alimentar”.',
            next: 'counter',
          },
          { text: '“Не зна́ю… Мне всё равно́”.', translation: '“Não sei… Para mim tanto faz”.', next: 'final_quiet' },
        ],
      },
      counter: {
        emoji: '🤔',
        text: 'Али́на сра́зу возража́ет: “Жа́лость — э́то не аргуме́нт. Ты мо́жешь доказа́ть, что колбаса́ поле́зна для лисы́?” Ли́ну понима́ет, что доказа́ть э́то он не мо́жет. Макси́м ти́хо говори́т: “Хотя́ я и за, в э́том она́ права́”. Та́ня предлага́ет Ли́ну ещё раз поду́мать.',
        translation:
          'Alina contesta na hora: “Dó não é argumento. Você consegue provar que salsicha faz bem para a raposa?” Linu percebe que não consegue provar isso. Maksim diz baixinho: “Embora eu seja a favor, nisso ela tem razão”. Tânia sugere que o Linu pense mais uma vez.',
        choices: [
          {
            text: 'Призна́ть, что Али́на права́, и предложи́ть друго́е реше́ние.',
            translation: 'Admitir que a Alina tem razão e propor outra solução.',
            next: 'plan',
          },
          { text: 'Стоя́ть на своём, без но́вых аргуме́нтов.', translation: 'Manter a posição, sem argumentos novos.', next: 'final_draw' },
        ],
      },
      plan: {
        emoji: '💡',
        text: '“Я счита́ю, что лиса́м лу́чше помога́ть без колбасы́, — говори́т Ли́ну. — Мо́жно поста́вить у доро́г табли́чки для тури́стов и объясни́ть, почему́ корми́ть лис опа́сно”. Та́ня улыба́ется: “Отли́чная иде́я! Кто за?” Почти́ все поднима́ют ру́ки, да́же Макси́м.',
        translation:
          '“Eu acho que é melhor ajudar as raposas sem salsicha — diz Linu. — Dá para colocar plaquinhas para os turistas à beira das estradas e explicar por que alimentar raposas é perigoso”. Tânia sorri: “Ótima ideia! Quem é a favor?” Quase todos levantam a mão, até o Maksim.',
        choices: [{ text: 'Предложи́ть самому́ нарисова́ть пе́рвую табли́чку.', translation: 'Oferecer-se para desenhar a primeira plaquinha.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🪧',
        text: 'В суббо́ту клуб рису́ет табли́чки: на ка́ждой — ры́жая лиса́ и на́дпись “Не корми́те меня́, я ди́кая!”. Ли́ну рису́ет лису́, но она́ получа́ется немно́го похо́жей на пингви́на. Ди́ма смеётся: “Зато́ все запо́мнят”. Ле́том табли́чки поста́вят у доро́г к мо́рю.',
        translation:
          'No sábado o clube pinta as plaquinhas: em cada uma, uma raposa ruiva e a frase “Não me alimentem, sou selvagem!”. Linu desenha uma raposa, mas ela fica um pouco parecida com um pinguim. Dima ri: “Em compensação, todo mundo vai lembrar”. No verão, as placas vão ser colocadas nas estradas que levam ao mar.',
        ending: {
          tone: 'bom',
          title: 'Raposas bem informadas',
          message: 'Você pesou os dois lados (“с одно́й стороны́… с друго́й…”) e convenceu o clube com argumentos.',
        },
      },
      final_draw: {
        emoji: '🗳️',
        text: 'Ли́ну повторя́ет, что лис жа́лко, но но́вых аргуме́нтов у него́ нет. Та́ня предлага́ет голосова́ть, и большинство́ поднима́ет ру́ки за Али́ну. По́сле деба́тов Ди́ма говори́т: “Мне́ние у тебя́ бы́ло, а аргуме́нтов не хвати́ло”. Ли́ну реша́ет в сле́дующий раз гото́виться лу́чше.',
        translation:
          'Linu repete que dá dó das raposas, mas não tem argumentos novos. Tânia propõe uma votação, e a maioria levanta a mão pela Alina. Depois do debate, Dima diz: “Opinião você tinha, faltaram os argumentos”. Linu decide se preparar melhor da próxima vez.',
        ending: { tone: 'neutro', title: 'Opinião sem argumentos', message: 'Num debate, “я счита́ю” precisa vir acompanhado de um porquê.' },
      },
      final_quiet: {
        emoji: '😶',
        text: 'Ли́ну пожима́ет плеча́ми и молчи́т. Та́ня ве́жливо кива́ет и даёт сло́во сле́дующему. По́сле деба́тов Ди́ма говори́т: “Ну ты даёшь! Тебя́ спроси́ли, а ты ничего́ не сказа́л”. Ли́ну оби́дно: ведь мне́ние у него́ бы́ло, про́сто он побоя́лся его́ вы́сказать.',
        translation:
          'Linu dá de ombros e fica calado. Tânia acena educadamente e passa a palavra ao próximo. Depois do debate, Dima diz: “Francamente, hein! Te perguntaram e você não disse nada”. Linu fica chateado: afinal, ele tinha opinião, só teve medo de dizê-la.',
        ending: { tone: 'neutro', title: 'Ficou calado', message: 'Da próxima vez, arrisque um “по-мо́ему…”: sua opinião também conta.' },
      },
    },
  },
  {
    id: 'ru-h39',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Учи́ть стихи́ наизу́сть?',
    emoji: '📜',
    summary: 'A caminho de Konstantínovo, a aldeia de Iessiênin perto de Riazan, o Linu entra numa discussão: vale a pena decorar poemas?',
    cultural_context:
      'Serguei Iessiênin, um dos poetas russos mais amados, nasceu em 1895 na aldeia de Konstantínovo, na região de Riazan, à beira do rio Oka. Hoje a aldeia é um museu-reserva com a casa dos pais do poeta, e muitos russos sabem de cor versos dele, como “Бе́лая берёза под мои́м окно́м”.',
    start: 'start',
    glossary: [
      ['наизу́сть', 'de cor'],
      ['по-мо́ему', 'na minha opinião'],
      ['я счита́ю, что…', 'eu acho (considero) que…'],
      ['одна́ко', 'no entanto'],
      ['к тому́ же', 'além disso'],
      ['с одно́й стороны́… с друго́й стороны́…', 'por um lado… por outro…'],
      ['зубри́ть', 'decorar sem entender, “decoreba”'],
      ['рассуди́ть', 'arbitrar (uma discussão)'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Ли́ну е́дет на экскурсио́нном авто́бусе из Ряза́ни в село́ Константи́ново, где роди́лся Есе́нин. Ря́дом сидя́т студе́нтка Ка́тя и её мла́дший брат Лёша, и они́ спо́рят. “По-мо́ему, учи́ть стихи́ наизу́сть — пуста́я тра́та вре́мени”, — говори́т Лёша. “А я счита́ю, что э́то ну́жно”, — отвеча́ет Ка́тя и повора́чивается к Ли́ну: “Рассуди́ нас!”',
        translation:
          'Linu vai num ônibus de excursão de Riazan para a aldeia de Konstantínovo, onde Iessiênin nasceu. Ao lado estão sentados a universitária Kátia e o irmão mais novo dela, Liocha, e os dois estão discutindo. “Na minha opinião, decorar poemas é pura perda de tempo”, diz Liocha. “Pois eu acho que é necessário”, responde Kátia, e se vira para o Linu: “Seja o juiz!”',
        choices: [
          { text: 'Попроси́ть обо́их привести́ аргуме́нты.', translation: 'Pedir aos dois que apresentem argumentos.', next: 'args' },
          { text: 'Сра́зу сказа́ть, что прав Лёша.', translation: 'Dizer logo que o Liocha tem razão.', next: 'lyosha_side' },
        ],
      },
      lyosha_side: {
        emoji: '😅',
        text: '“Пра́вильно! — ра́дуется Лёша. — Вот и Ли́ну так ду́мает”. Но Ка́тя споко́йно спра́шивает: “А почему́ ты так счита́ешь? Како́й у тебя́ аргуме́нт?” Ли́ну понима́ет, что отве́тил, не поду́мав. Он признаётся, что снача́ла хоте́л бы послу́шать о́бе стороны́.',
        translation:
          '“Isso aí! — comemora Liocha. — Até o Linu pensa assim”. Mas Kátia pergunta com calma: “E por que você acha isso? Qual é o seu argumento?” Linu percebe que respondeu sem pensar. Ele admite que antes gostaria de ouvir os dois lados.',
        choices: [{ text: 'Послу́шать аргуме́нты обо́их.', translation: 'Ouvir os argumentos dos dois.', next: 'args' }],
      },
      args: {
        emoji: '⚖️',
        text: 'Лёша начина́ет: “Во-пе́рвых, любо́е стихотворе́ние мо́жно за секу́нду найти́ в телефо́не. Во-вторы́х, стихи́ зу́брят без понима́ния, а пото́м всё забыва́ют”. Ка́тя возража́ет: “Одна́ко когда́ стихи́ зна́ешь наизу́сть, они́ всегда́ с тобо́й, да́же без интерне́та. К тому́ же па́мять — как мы́шца: её ну́жно тренирова́ть”. Ли́ну слу́шает и ду́мает, кто из них убеди́тельнее.',
        translation:
          'Liocha começa: “Em primeiro lugar, qualquer poema se acha em um segundo no celular. Em segundo lugar, a gente decora poema sem entender e depois esquece tudo”. Kátia contesta: “No entanto, quando você sabe poemas de cor, eles estão sempre com você, até sem internet. Além disso, a memória é como um músculo: precisa ser treinada”. Linu escuta e pensa em qual dos dois é mais convincente.',
        choices: [
          {
            text: 'Сказа́ть, что у ка́ждого есть хоро́ший аргуме́нт, и подожда́ть экску́рсии.',
            translation: 'Dizer que cada um tem um bom argumento e esperar a excursão.',
            next: 'village',
          },
          {
            text: 'Сказа́ть Лёше: “Ты ведь то́же счита́ешь, что па́мять на́до тренирова́ть”.',
            translation: 'Dizer ao Liocha: “Você também acha que a memória precisa ser treinada, né?”',
            wrong:
              'Quem comparou a memória a um músculo que precisa de treino foi a Kátia, não o Liocha. Os argumentos dele eram outros: tudo se acha no celular, e o que se decora sem entender acaba esquecido.',
          },
        ],
      },
      village: {
        emoji: '🌳',
        text: 'В Константи́нове Ли́ну ви́дит ма́ленький деревя́нный дом роди́телей поэ́та, а с высо́кого бе́рега открыва́ется вид на Оку́ и заливны́е луга́. Экскурсово́д спра́шивает: “Кто зна́ет стихи́ Есе́нина наизу́сть?” К удивле́нию Ли́ну, пе́рвым выхо́дит Лёша и чита́ет “Берёзу” без еди́ной оши́бки. Ка́тя смо́трит на бра́та с хи́трой улы́бкой.',
        translation:
          'Em Konstantínovo, Linu vê a pequena casa de madeira dos pais do poeta, e da margem alta se abre a vista para o Oka e os prados de várzea. A guia pergunta: “Quem sabe poemas de Iessiênin de cor?” Para surpresa do Linu, o primeiro a se apresentar é o Liocha, que recita “A bétula” sem um único erro. Kátia olha para o irmão com um sorriso maroto.',
        choices: [
          { text: 'Спроси́ть Лёшу, не измени́л ли он своё мне́ние.', translation: 'Perguntar ao Liocha se ele não mudou de opinião.', next: 'debate_end' },
          { text: 'Промолча́ть, что́бы не смуща́ть Лёшу.', translation: 'Ficar quieto, para o Liocha não ficar sem graça.', next: 'final_quiet' },
        ],
      },
      debate_end: {
        emoji: '💬',
        text: 'Лёша красне́ет: “Ну, э́то друго́е. Э́то стихотворе́ние мне про́сто нра́вится, поэ́тому оно́ само́ запо́мнилось”. Ка́тя тут же подхва́тывает: “Зна́чит, де́ло не в том, учи́ть и́ли не учи́ть, а в том, как учи́ть!” О́ба смо́трят на Ли́ну: тепе́рь его́ о́чередь сказа́ть, что он ду́мает.',
        translation:
          'Liocha fica vermelho: “Bom, aí é diferente. Eu simplesmente gosto desse poema, por isso ele ficou na cabeça sozinho”. Kátia emenda na hora: “Então a questão não é decorar ou não decorar, e sim como decorar!” Os dois olham para o Linu: agora é a vez dele dizer o que pensa.',
        choices: [
          {
            text: '“С одно́й стороны́, в телефо́не мо́жно найти́ всё. С друго́й стороны́, люби́мые стихи́ хорошо́ знать наизу́сть. Я счита́ю, что ка́ждый мо́жет сам вы́брать, что учи́ть”.',
            translation:
              '“Por um lado, no celular dá para achar tudo. Por outro lado, é bom saber de cor os poemas favoritos. Eu acho que cada um pode escolher o que decorar”.',
            next: 'final_bom',
          },
          {
            text: '“По-мо́ему, всё про́сто: учи́ть ничего́ не на́до, ведь есть телефо́н”.',
            translation: '“Na minha opinião, é simples: não precisa decorar nada, afinal existe o celular”.',
            next: 'final_phone',
          },
          {
            text: '“Я согла́сен с Ка́тей: учи́ть стихи́ — пуста́я тра́та вре́мени”.',
            translation: '“Concordo com a Kátia: decorar poemas é perda de tempo”.',
            wrong: 'Quem disse que decorar poemas é “пуста́я тра́та вре́мени” foi o Liocha, no começo da viagem; a Kátia defendia justamente o contrário.',
          },
        ],
      },
      final_bom: {
        emoji: '🌿',
        text: 'Ка́тя и Лёша перегля́дываются и смею́тся: тако́й компроми́сс устра́ивает обо́их. На обра́тном пути́ Лёша у́чит Ли́ну пе́рвые стро́чки “Берёзы”. К Ряза́ни Ли́ну уже́ чита́ет их почти́ без подска́зок. “Вот ви́дишь, — говори́т Ка́тя, — когда́ нра́вится, запомина́ется само́”.',
        translation:
          'Kátia e Liocha se entreolham e riem: esse meio-termo agrada aos dois. Na volta, Liocha ensina ao Linu os primeiros versos de “A bétula”. Chegando a Riazan, Linu já os recita quase sem ajuda. “Viu só? — diz Kátia. — Quando a gente gosta, decora sozinho”.',
        ending: {
          tone: 'bom',
          title: 'A bétula de cor',
          message: 'Você pesou os dois lados (“с одно́й стороны́… с друго́й…”) e propôs uma saída que agradou a todos.',
        },
      },
      final_phone: {
        emoji: '📵',
        text: 'Ка́тя поднима́ет бровь: “Хорошо́. Тогда́ прочита́й нам Есе́нина — из телефо́на”. Ли́ну достаёт телефо́н, но здесь, на берегу́ Оки́, он не мо́жет пойма́ть сеть. Лёша хохо́чет, а Ка́тя пожима́ет плеча́ми: “Вот тебе́ и аргуме́нт”. Ли́ну прихо́дится призна́ть, что спор он проигра́л.',
        translation:
          'Kátia levanta a sobrancelha: “Tudo bem. Então leia Iessiênin para nós — pelo celular”. Linu pega o celular, mas ali, na margem do Oka, não consegue sinal. Liocha gargalha, e Kátia dá de ombros: “Taí o seu argumento”. Linu tem de admitir que perdeu a discussão.',
        ending: { tone: 'neutro', title: 'Sem sinal', message: 'Uma opinião sem nuances é fácil de derrubar: vale considerar o outro lado.' },
      },
      final_quiet: {
        emoji: '🤫',
        text: 'Ли́ну ничего́ не говори́т, и Лёша благода́рно ему́ подми́гивает. На обра́тном пути́ они́ бо́льше не говоря́т о спо́ре и про́сто смо́трят в окно́ на поля́ и берёзы. Но Ка́тя в конце́ концо́в не выде́рживает: “А всё-таки кто из нас был прав?” Ли́ну так и не зна́ет, что отве́тить.',
        translation:
          'Linu não diz nada, e Liocha lhe dá uma piscadela agradecida. Na volta eles não falam mais da discussão e só olham pela janela os campos e as bétulas. Mas Kátia acaba não se aguentando: “Mas afinal, qual de nós tinha razão?” Linu continua sem saber o que responder.',
        ending: { tone: 'neutro', title: 'Diplomacia silenciosa', message: 'Foi gentil com o Liocha, mas numa discussão também vale dar a sua opinião.' },
      },
    },
  },
  {
    id: 'ru-h40',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ба́ночка мёда',
    emoji: '🍯',
    summary: 'Numa feira de mel em Ufá, o Linu aprende que diminutivos, partículas e um “вы” fora de hora dizem muito.',
    cultural_context:
      'Ufá, capital do Bascortostão, fica às margens do rio Belaia. A região é famosa pelo mel, sobretudo o de tília, e pelo чак-чак, doce de massa frita com mel típico de bashkires e tártaros.',
    start: 'start',
    glossary: [
      ['медо́к, ба́ночка', 'melzinho, potinho (diminutivos carinhosos)'],
      ['па́сечник', 'apicultor'],
      ['поторгова́ться', 'pechinchar'],
      ['усту́пить', 'fazer um desconto'],
      ['перейти́ на “вы”', 'passar a tratar por “вы” (aqui, sinal de frieza)'],
      ['молодо́й челове́к', 'rapaz (dito assim, em tom frio)'],
      ['вам видне́е', 'o senhor é que sabe (muitas vezes irônico)'],
      ['же, ведь, -то', 'partículas de ênfase'],
    ],
    nodes: {
      start: {
        emoji: '🐝',
        text: 'В Уфе́ на я́рмарке мёда Ли́ну с дру́гом Ри́натом хо́дят ме́жду ряда́ми: везде́ ба́нки и ба́ночки, све́тлый мёд и тёмный. За одни́м прила́вком сиди́т седо́й па́сечник дя́дя Ильда́р. “Попро́буй-ка медку́, сыно́к! — зовёт он. — Ба́ночку-то возьмёшь?” Ри́нат ти́хо объясня́ет: “Медо́к, ба́ночка — э́то он ла́сково. А ты с ним поосторо́жнее, он челове́к ста́рой шко́лы”.',
        translation:
          'Em Ufá, na feira do mel, Linu e o amigo Rinat andam entre as fileiras de barracas: por toda parte potes e potinhos, mel claro e escuro. Atrás de um balcão está sentado um apicultor grisalho, o seu Ildar. “Prove um melzinho, filho! — chama ele. — Vai levar um potinho?” Rinat explica baixinho: “Melzinho, potinho: é carinho da parte dele. Mas vá com cuidado, ele é da velha guarda”.',
        choices: [
          { text: '“Здра́вствуйте! С удово́льствием попро́бую”.', translation: '“Bom dia! Provo com prazer”.', next: 'tasting' },
          { text: '“Приве́т, дед! Ну, дава́й, пока́зывай свой мёд”.', translation: '“Oi, vovô! Vamos lá, mostra teu mel”.', next: 'too_familiar' },
        ],
      },
      too_familiar: {
        emoji: '🤨',
        text: 'Дя́дя Ильда́р поднима́ет бро́ви: “Дед, зна́чит? Ну-ну. Я тебе́, сыно́к, не дед, а дя́дя Ильда́р”. Ри́нат незаме́тно толка́ет Ли́ну ло́ктем: с незнако́мым пожилы́м челове́ком лу́чше говори́ть на “вы”. Ли́ну красне́ет до ко́нчика клю́ва. Па́сечник, впро́чем, уже́ улыба́ется: серди́ться на пингви́на он, ви́димо, не уме́ет.',
        translation:
          'Seu Ildar levanta as sobrancelhas: “Vovô, é? Sei. Para você, filho, não sou vovô, sou o seu Ildar”. Rinat cutuca o Linu discretamente com o cotovelo: com um desconhecido mais velho é melhor falar de “вы”. Linu fica vermelho até a ponta do bico. O apicultor, aliás, já está sorrindo: pelo jeito, ele não consegue ficar bravo com um pinguim.',
        choices: [
          { text: '“Извини́те, дя́дя Ильда́р! Мо́жно попро́бовать ваш мёд?”', translation: '“Desculpe, seu Ildar! Posso provar o seu mel?”', next: 'tasting' },
        ],
      },
      tasting: {
        emoji: '🥄',
        text: 'Дя́дя Ильда́р протя́гивает Ли́ну ло́жечку све́тлого мёда. “Э́то ли́повый, наш, башки́рский, — говори́т он с го́рдостью. — Ну как? Хотя́ что я спра́шиваю, мой-то мёд, коне́чно, ху́же всех на я́рмарке!” Он хи́тро прищу́ривается и ждёт отве́та. Ри́нат е́ле сде́рживает смех.',
        translation:
          'Seu Ildar estende ao Linu uma colherzinha de mel claro. “Este é de tília, nosso, bashkir — diz ele com orgulho. — E aí? Se bem que nem sei por que pergunto: o meu mel, claro, é o pior da feira!” Ele aperta os olhos, maroto, e espera a resposta. Rinat mal segura o riso.',
        choices: [
          {
            text: '“Ну да, ху́же всех! Лу́чше я в жи́зни не про́бовал”.',
            translation: '“Pois é, o pior de todos! Nunca provei nada melhor na vida”.',
            next: 'price',
          },
          {
            text: '“Не расстра́ивайтесь, мо́жет, в сле́дующем году́ мёд полу́чится лу́чше”.',
            translation: '“Não fique triste, talvez no ano que vem o mel saia melhor”.',
            wrong:
              'O apicultor estava sendo irônico: o olhar maroto e o “мой-то мёд, коне́чно…” mostram que ele acha o mel dele o melhor da feira. Consolá-lo seria levar a sério uma piada.',
          },
        ],
      },
      price: {
        emoji: '💰',
        text: 'Па́сечник дово́льно смеётся: “Вот э́то я понима́ю, знато́к!” Ли́ну хо́чет купи́ть ба́ночку для друзе́й в Брази́лии, но цена́ ему́ ка́жется высо́кой. Ри́нат ше́пчет: “На я́рмарке мо́жно немно́жко поторгова́ться, то́лько ве́жливо, с улы́бкой”. Дя́дя Ильда́р де́лает вид, что ничего́ не слы́шит.',
        translation:
          'O apicultor ri, satisfeito: “Isso é que é entendido!” Linu quer comprar um potinho para os amigos no Brasil, mas o preço lhe parece alto. Rinat cochicha: “Na feira dá para pechinchar um pouquinho, só que com educação, sorrindo”. Seu Ildar finge que não está ouvindo nada.',
        choices: [
          {
            text: '“Дя́дя Ильда́р, а е́сли я возьму́ две ба́ночки, чуть-чуть усту́пите?”',
            translation: '“Seu Ildar, e se eu levar dois potinhos, o senhor faz um descontinho?”',
            next: 'deal',
          },
          {
            text: '“Ско́лько-ско́лько? Да у вас же не мёд, а зо́лото!”',
            translation: '“Quanto?! Mas o que o senhor tem aqui não é mel, é ouro!”',
            next: 'deal',
          },
        ],
      },
      deal: {
        emoji: '🎁',
        text: 'Дя́дя Ильда́р маха́ет руко́й: “Ну что с тобо́й де́лать! Бери́ две за це́ну полу́тора”. Пото́м он достаёт из-под прила́вка коро́бочку чак-чака́ и кладёт её Ли́ну в паке́т: “А э́то тебе́ к чайку́, пода́рок”. Ри́нат ти́хо говори́т: “Ви́дишь, ты ему́ понра́вился. Отка́зываться от тако́го пода́рка не при́нято”. Но Ли́ну вспомина́ет, что он на дие́те и сла́дкое сейча́с не ест.',
        translation:
          'Seu Ildar faz um gesto com a mão: “Fazer o quê com você! Leve dois pelo preço de um e meio”. Depois ele tira de debaixo do balcão uma caixinha de chak-chak e põe na sacola do Linu: “E isto é para o seu chazinho, presente”. Rinat diz baixinho: “Viu? Ele foi com a sua cara. Recusar um presente desses não se faz”. Mas Linu lembra que está de dieta e não está comendo doce.',
        choices: [
          { text: '“Ой, спаси́бо огро́мное! Вы о́чень до́брый”.', translation: '“Ai, muitíssimo obrigado! O senhor é muito gentil”.', next: 'final_bom' },
          { text: '“Нет, спаси́бо, сла́дкое я не ем”.', translation: '“Não, obrigado, eu não como doce”.', next: 'offended' },
        ],
      },
      offended: {
        emoji: '🥶',
        text: 'Улы́бка с лица́ па́сечника исчеза́ет. “Ну что ж, — су́хо говори́т он и убира́ет коро́бочку. — Как ска́жете, молодо́й челове́к. Вам, коне́чно, видне́е”. Ри́нат хвата́ется за го́лову: “Слы́шал? Он перешёл на „вы‘ и назва́л тебя́ молоды́м челове́ком. Э́то не уваже́ние, э́то он оби́делся!’',
        translation:
          'O sorriso some do rosto do apicultor. “Pois bem — diz ele secamente, e guarda a caixinha. — Como o senhor quiser, meu rapaz. O senhor, claro, é que sabe”. Rinat põe as mãos na cabeça: “Ouviu? Ele passou a te tratar por „вы‘ e te chamou de „молодо́й челове́к‘. Isso não é respeito, é que ele ficou ofendido!’',
        choices: [
          { text: 'Извини́ться и с благода́рностью взять пода́рок.', translation: 'Pedir desculpas e aceitar o presente agradecido.', next: 'final_fixed' },
          { text: 'Пожа́ть плеча́ми и пойти́ к друго́му прила́вку.', translation: 'Dar de ombros e ir a outra barraca.', next: 'final_cold' },
          {
            text: 'Обра́доваться: па́сечник тепе́рь уважа́ет Ли́ну ещё бо́льше.',
            translation: 'Ficar contente: agora o apicultor respeita o Linu ainda mais.',
            wrong:
              'Aqui o “вы” não é respeito: depois de tratar o Linu por “ты” e “сыно́к”, a troca repentina para “вы”, o “молодо́й челове́к” e o irônico “вам, коне́чно, видне́е” mostram frieza. Ele ficou ofendido com a recusa do presente.',
          },
        ],
      },
      final_bom: {
        emoji: '🫖',
        text: 'Дя́дя Ильда́р сия́ет: “Вот, сра́зу ви́дно — хоро́ший па́рень, хоть и пингви́н”. Он зовёт Ли́ну с Ри́натом за прила́вок и налива́ет им ча́ю из те́рмоса. Чак-ча́к та́ет во рту, и о дие́те Ли́ну реша́ет поду́мать за́втра. Уходя́, он слы́шит: “Приезжа́й ещё, сыно́к! Медо́к тебя́ ждёт”.',
        translation:
          'Seu Ildar se ilumina: “Olha aí, logo se vê: bom rapaz, mesmo sendo pinguim”. Ele chama Linu e Rinat para trás do balcão e serve chá da garrafa térmica. O chak-chak derrete na boca, e Linu decide pensar na dieta amanhã. Ao ir embora, ele ouve: “Volte sempre, filho! O melzinho te espera”.',
        ending: {
          tone: 'bom',
          title: 'Chá com o apicultor',
          message: 'Você pegou a ironia, respeitou o tom e aceitou o presente como manda a boa educação.',
        },
      },
      final_fixed: {
        emoji: '🤝',
        text: 'Ли́ну торопли́во извиня́ется: “Прости́те, я не хоте́л вас оби́деть! Мне бу́дет о́чень прия́тно”. Па́сечник немно́го молчи́т, пото́м хмы́кает и возвраща́ет коро́бочку в паке́т. “Ну ла́дно, сыно́к, — говори́т он уже́ мя́гче. — Сла́дкое-то оно́ для души́, а не для фигу́ры”. Ри́нат облегчённо вздыха́ет: мир восстано́влен.',
        translation:
          'Linu se desculpa às pressas: “Perdão, não quis ofender o senhor! Vou ficar muito contente”. O apicultor fica um pouco calado, depois solta um “hum” e devolve a caixinha à sacola. “Está bem, filho — diz ele, já mais suave. — Doce é para a alma, não para a silhueta”. Rinat suspira aliviado: a paz foi restabelecida.',
        ending: { tone: 'bom', title: 'Paz selada', message: 'Você percebeu a frieza do “вы” a tempo e consertou a situação.' },
      },
      final_cold: {
        emoji: '🧊',
        text: 'Ли́ну пожима́ет плеча́ми и идёт к сосе́днему прила́вку. Там мёд деше́вле, но продаве́ц да́же не смо́трит на покупа́телей. Ри́нат вздыха́ет: “Ну ты и диплома́т! Мёд-то ты купи́л, а дя́дю Ильда́ра оби́дел”. По доро́ге домо́й Ли́ну ду́мает, что сла́дкое иногда́ не так опа́сно, как холо́дное “вы”.',
        translation:
          'Linu dá de ombros e vai à barraca vizinha. Lá o mel é mais barato, mas o vendedor nem olha para os fregueses. Rinat suspira: “Que diplomata, hein! O mel você comprou, mas ofendeu o seu Ildar”. No caminho de casa, Linu pensa que às vezes o doce é menos perigoso do que um “вы” gelado.',
        ending: {
          tone: 'neutro',
          title: 'O “вы” gelado',
          message: 'Você levou o mel, mas perdeu o amigo: a troca de “ты” para “вы” era um sinal de ofensa.',
        },
      },
    },
  },
  {
    id: 'ru-h41',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Бычки́ по-таганро́гски',
    emoji: '🐟',
    summary: 'Em Taganrog, cidade natal de Tchekhov, o Linu passa o dia com uma avó falante que mistura carinho, ironia e peixe frito.',
    cultural_context:
      'Anton Tchekhov nasceu em Taganrog, às margens do mar de Azov, em 1860; a casinha onde ele nasceu e a loja do pai dele hoje são museus, e o escritor mandou muitos livros para a biblioteca da cidade. Taganrog foi fundada por Pedro, o Grande, em 1698, e os “бычки́”, pequenos gobiões do mar de Azov, são o petisco mais típico da região.',
    start: 'start',
    glossary: [
      ['бычо́к', 'gobião (peixinho do mar de Azov)'],
      ['соколи́к', 'meu falcãozinho (tratamento carinhoso)'],
      ['све́женький', 'fresquinho'],
      ['-то', 'partícula de ênfase (жа́рить-то = e fritar, hein?)'],
      ['ведь', 'afinal, pois (partícula)'],
      ['на брудерша́фт не пи́ли', 'não temos intimidade (irônico, sobre “ты”)'],
      ['Ну ты даёшь!', 'Essa é boa! / Francamente!'],
      ['свой', 'um de nós, gente da casa'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Ти́хое у́тро в Таганро́ге, с мо́ря ду́ет тёплый ветеро́к. На ры́нке Ли́ну остана́вливается у прила́вка, где пожила́я же́нщина продаёт ры́бу. “Ну что, соколи́к, бычко́в возьмёшь? — улыба́ется она́. — Све́женькие, у́тренние, сама́ у рыбако́в брала́!” Её зову́т Валенти́на Петро́вна, но она́ сра́зу предупрежда́ет: “Зови́ меня́ про́сто ба́ба Ва́ля”. Молча́ть она́, похо́же, не уме́ет вообще́.',
        translation:
          'Manhã tranquila em Taganrog, sopra do mar uma brisa morna. No mercado, Linu para diante de uma banca onde uma senhora idosa vende peixe. “E aí, meu falcãozinho, vai levar uns gobiões? — ela sorri. — Fresquinhos, da manhã, eu mesma peguei com os pescadores!” O nome dela é Valentina Petrovna, mas ela logo avisa: “Me chama só de vó Vália”. Pelo jeito, ficar calada ela não sabe mesmo.',
        choices: [
          { text: 'Купи́ть килогра́мм бычко́в.', translation: 'Comprar um quilo de gobiões.', next: 'buy' },
          { text: 'Спроси́ть, где тут дом Че́хова.', translation: 'Perguntar onde fica a casa de Tchekhov.', next: 'chekhov' },
        ],
      },
      buy: {
        emoji: '⚖️',
        text: 'Ба́ба Ва́ля взве́шивает ры́бу и вдруг хму́рится: “Погоди́-ка, а жа́рить-то ты уме́ешь? Бычо́к ведь не карп, пережа́ришь — и всё, одни́ ко́сточки”. Не дожида́ясь отве́та, она́ сама́ же и реша́ет: “Ну вот что. Пойдём ко мне, я тебя́ научу́, а то пропадёт ры́бка”. Ли́ну растеря́нно огля́дывается, но ба́ба Ва́ля уже́ снима́ет фа́ртук.',
        translation:
          'Vó Vália pesa o peixe e de repente franze a testa: “Espera aí, e fritar, você sabe? Gobião não é carpa, passou do ponto e pronto, só sobram as espinhas”. Sem esperar resposta, ela mesma decide: “Então é o seguinte. Vamos lá em casa que eu te ensino, senão o peixinho se perde”. Linu olha em volta, desconcertado, mas vó Vália já está tirando o avental.',
        choices: [
          { text: 'Согласи́ться: “С удово́льствием, ба́ба Ва́ля!”', translation: 'Aceitar: “Com prazer, vó Vália!”', next: 'kitchen' },
          {
            text: 'Отказа́ться: ба́ба Ва́ля ведь про́сто шу́тит.',
            translation: 'Recusar: afinal, a vó Vália está só brincando.',
            wrong:
              'Ela está falando sério: “Ну вот что” anuncia uma decisão, e ela já está tirando o avental (“снима́ет фа́ртук”). O “ведь” em “бычо́к ведь не карп” só reforça o argumento de que ele precisa aprender.',
          },
        ],
      },
      chekhov: {
        emoji: '🏠',
        text: 'Ба́ба Ва́ля всплёскивает рука́ми: “Да ты что, како́й же тут дом? До́мик! Ма́ленький-ма́ленький, а в нём сам Анто́н Па́влович роди́лся”. Она́ подро́бно объясня́ет доро́гу, а пото́м хи́тро прищу́ривается. “Ты сходи́, сходи́. А бычко́в-то я тебе́ отложу́, на обра́тном пути́ заберёшь”. Ли́ну понима́ет, что без ры́бы ему́ отсю́да не уйти́.',
        translation:
          'Vó Vália ergue as mãos: “Que nada, que casa o quê? Casinha! Pequenininha, e foi nela que nasceu o próprio Anton Pávlovitch”. Ela explica o caminho em detalhes e depois aperta os olhos, maliciosa. “Pode ir, pode ir. E os gobiões eu separo para você, pega na volta”. Linu entende que dali ele não sai sem peixe.',
        choices: [
          { text: 'Пойти́ в до́мик Че́хова.', translation: 'Ir à casinha de Tchekhov.', next: 'museum' },
          {
            text: 'Реши́ть, что ба́ба Ва́ля продала́ бычко́в кому́-то друго́му.',
            translation: 'Concluir que a vó Vália vendeu os gobiões para outra pessoa.',
            wrong:
              '“Бычко́в-то я тебе́ отложу́” quer dizer que ela vai separar e guardar os peixes para ele (“на обра́тном пути́ заберёшь” — pega na volta), e não que vendeu a outra pessoa.',
          },
        ],
      },
      museum: {
        emoji: '🖋️',
        text: 'В до́мике Че́хова ти́хо и прохла́дно. Смотри́тельница, стро́гая да́ма в очка́х, расска́зывает, что здесь в 1860 году́ роди́лся Анто́н Па́влович. Ли́ну, забы́вшись, спра́шивает: “А ты сама́ тут давно́ рабо́таешь?” Да́ма поднима́ет бровь: “Ты? Мы с ва́ми, молодо́й челове́к, на брудерша́фт не пи́ли”. В ко́мнате повиса́ет нело́вкая тишина́.',
        translation:
          'Na casinha de Tchekhov está silencioso e fresco. A zeladora, uma senhora severa de óculos, conta que ali, em 1860, nasceu Anton Pávlovitch. Linu, distraído, pergunta: “E você trabalha aqui faz tempo?” A senhora levanta a sobrancelha: “Você? Que eu saiba, meu jovem, nós não temos essa intimidade”. Um silêncio constrangedor fica no ar.',
        choices: [
          { text: 'Извини́ться и перейти́ на “вы”.', translation: 'Pedir desculpas e passar a usar “вы”.', next: 'museum2' },
          {
            text: 'Отве́тить, что он то́же не лю́бит пить.',
            translation: 'Responder que ele também não gosta de beber.',
            wrong:
              '“На брудерша́фт не пи́ли” não é sobre bebida: é um jeito irônico de dizer “não temos intimidade para você me tratar por „ты‘’. O certo é pedir desculpas e usar ‘вы’.',
          },
        ],
      },
      museum2: {
        emoji: '📚',
        text: 'Ли́ну красне́ет: “Прости́те, пожа́луйста, я ещё пу́таю „ты‘ и „вы‘’. Смотри́тельница сра́зу смягча́ется: ‘Ну что вы, быва́ет. Анто́н Па́влович, ме́жду про́чим, и сам люби́л пошути́ть’. Она́ пока́зывает ему́ ста́рые фотогра́фии и расска́зывает, что Че́хов, уже́ бу́дучи изве́стным писа́телем, присыла́л кни́ги для городско́й библиоте́ки. На проща́нье она́ да́же улыба́ется, а Ли́ну вдруг вспомина́ет про бычко́в.',
        translation:
          'Linu fica vermelho: “Desculpe, por favor, eu ainda confundo „ты‘ e „вы‘’. A zeladora amolece na hora: ‘Imagine, acontece. Anton Pávlovitch, aliás, também gostava de uma brincadeira’. Ela mostra a ele fotografias antigas e conta que Tchekhov, já sendo um escritor famoso, mandava livros para a biblioteca da cidade. Na despedida ela até sorri, e Linu de repente se lembra dos gobiões.',
        choices: [
          { text: 'Верну́ться на ры́нок к ба́бе Ва́ле.', translation: 'Voltar ao mercado, até a vó Vália.', next: 'kitchen' },
          { text: 'Пое́сть в кафе́ на на́бережной.', translation: 'Comer num café na orla.', next: 'final_alone' },
        ],
      },
      kitchen: {
        emoji: '🍳',
        text: 'Ба́ба Ва́ля живёт в двух шага́х от ры́нка, в ста́ром до́мике с виногра́дом над крыльцо́м. Она́ ло́вко обва́ливает бычко́в в муке́ и броса́ет их на сковоро́дку: “Смотри́, гла́вное, чтоб ма́сло шкварча́ло. А ты чего́ стои́шь-то? Хлеб режь!” На шум загля́дывает её внук Ди́ма и хмы́кает: “Ну, ба, ты даёшь. Опя́ть тури́ста привела́?”',
        translation:
          'Vó Vália mora a dois passos do mercado, numa casinha velha com uma parreira sobre a varanda. Ela passa os gobiões na farinha com habilidade e os joga na frigideira: “Olha, o principal é o óleo chiar. E você, está parado aí por quê? Corta o pão!” Com o barulho, o neto dela, Dima, dá uma espiada e solta um risinho: “Ô vó, essa é boa. Trouxe turista de novo?”',
        choices: [
          { text: 'Поддержа́ть шу́тку: “Не тури́ста, а ученика́!”', translation: 'Entrar na brincadeira: “Turista não, aprendiz!”', next: 'final_good' },
          { text: 'Серьёзно объясни́ть, что он не тури́ст, а гость.', translation: 'Explicar, sério, que não é turista, e sim convidado.', next: 'dima' },
        ],
      },
      dima: {
        emoji: '😄',
        text: 'Ди́ма смеётся: “Да ла́дно тебе́, я же шучу́! Раз ба́бушка тебя́ к плите́ пусти́ла, зна́чит, ты уже́ свой”. Ба́ба Ва́ля ма́шет на вну́ка полоте́нцем: “А ты-то сам когда́ в после́дний раз к плите́ подходи́л?” Ди́ма де́лает вид, что не слы́шит, и та́щит со сковоро́дки са́мый румя́ный бычо́к. Ли́ну понима́ет: здесь подшу́чивают друг над дру́гом с любо́вью.',
        translation:
          'Dima ri: “Relaxa, eu estou brincando! Se a vó te deixou chegar no fogão, então você já é de casa”. Vó Vália abana o pano de prato para o neto: “E você, quando foi a última vez que chegou perto do fogão?” Dima finge que não ouve e rouba da frigideira o gobião mais douradinho. Linu entende: aqui as pessoas implicam umas com as outras com carinho.',
        choices: [
          { text: 'Взять бычо́к и то́же пошути́ть.', translation: 'Pegar um gobião e brincar também.', next: 'final_good' },
          { text: 'Ве́жливо отказа́ться от еды́ и уйти́.', translation: 'Recusar a comida educadamente e ir embora.', next: 'final_alone' },
        ],
      },
      final_good: {
        emoji: '🎉',
        text: 'Ба́ба Ва́ля ста́вит на стол блю́до с золоти́стыми бычка́ми, помидо́ры и хлеб. “Ешь, соколи́к, ешь, а то вон како́й худю́щий”, — говори́т она́ пингви́ну, кото́рого худы́м ника́к не назовёшь. Ди́ма подми́гивает: “Э́то у неё вы́сшая сте́пень любви́, привыка́й”. К ве́черу Ли́ну уже́ зна́ет, как жа́рить бычко́в, и уно́сит с собо́й ба́нку дома́шнего варе́нья. “Приезжа́й ещё, — говори́т на проща́нье ба́ба Ва́ля. — Ты ведь тепе́рь свой”.',
        translation:
          'Vó Vália põe na mesa uma travessa de gobiões dourados, tomates e pão. “Come, meu falcãozinho, come, olha só como você está magrinho”, diz ela a um pinguim que de magro não tem nada. Dima pisca: “Isso é o grau máximo de amor dela, vai se acostumando”. À noite Linu já sabe fritar gobiões e leva consigo um pote de geleia caseira. “Volta sempre — diz vó Vália na despedida. — Agora você é de casa”.',
        ending: {
          tone: 'bom',
          title: 'De casa',
          message: 'Você entendeu o carinho escondido nos diminutivos, a ironia nas partículas e o momento certo de usar “вы”.',
        },
      },
      final_alone: {
        emoji: '🌅',
        text: 'Ве́чером Ли́ну сиди́т оди́н в кафе́ на на́бережной. Бычко́в здесь то́же жа́рят, но почему́-то они́ совсе́м не таки́е вку́сные. Над Азо́вским мо́рем сади́тся со́лнце, и Ли́ну вспомина́ет ба́бу Ва́лю с её “соколи́ком” и “све́женькими”. Ка́жется, он упусти́л са́мое гла́вное.',
        translation:
          'À noite, Linu está sozinho num café na orla. Aqui também fritam gobiões, mas por algum motivo eles não têm o mesmo sabor. O sol se põe sobre o mar de Azov, e Linu se lembra da vó Vália com o seu “falcãozinho” e os seus “fresquinhos”. Parece que ele deixou escapar o principal.',
        ending: { tone: 'neutro', title: 'Jantar sozinho', message: 'No sul da Rússia, um convite à cozinha vale mais que qualquer restaurante.' },
      },
    },
  },
  {
    id: 'ru-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Ко́нкурс чтецо́в в Миха́йловском',
    emoji: '📜',
    summary:
      'Em Mikháilovskoie, a propriedade de Púchkin, o Linu quer participar de um concurso de declamação, mas antes precisa decifrar o regulamento oficial.',
    cultural_context:
      'Púchkin viveu em Mikháilovskoie, na região de Pskov, de 1824 a 1826, e ali terminou a tragédia “Boris Godunov”; anos depois, no poema “…Вновь я посети́л”, lembrou os três pinheiros à beira da estrada. Hoje a propriedade faz parte do museu-reserva Púchkinskie Gory, onde todo começo de junho, perto do aniversário do poeta (6 de junho), acontece uma festa de poesia.',
    start: 'start',
    glossary: [
      ['положе́ние о ко́нкурсе', 'regulamento do concurso'],
      ['чтец', 'declamador'],
      ['в ра́мках', 'no âmbito de'],
      ['допуска́ться', 'ser admitido, ser permitido'],
      ['произведе́ние со́бственного сочине́ния', 'obra de autoria própria'],
      ['продолжи́тельность', 'duração'],
      ['превыша́ть', 'exceder, ultrapassar'],
      ['приём зая́вок', 'recebimento de inscrições'],
    ],
    nodes: {
      start: {
        emoji: '🌿',
        text: 'Нача́ло ию́ня, Миха́йловское. Над реко́й Со́ротью стели́тся тума́н, в па́рке пою́т соловьи́, а у до́ма-музе́я Пу́шкина уже́ собира́ются го́сти пра́здника поэ́зии. На доске́ объявле́ний Ли́ну замеча́ет афи́шу: “Ко́нкурс чтецо́в. Приглаша́ются все жела́ющие”. Ря́дом виси́т дли́нный докуме́нт ме́лким шри́фтом — положе́ние о ко́нкурсе. Сотру́дница музе́я Ве́ра улыба́ется: “Хоти́те уча́ствовать? То́лько внима́тельно прочита́йте пра́вила”.',
        translation:
          'Começo de junho, Mikháilovskoie. Sobre o rio Sorot a neblina se espalha, no parque cantam os rouxinóis, e junto à casa-museu de Púchkin já se reúnem os convidados da festa de poesia. No quadro de avisos, Linu nota um cartaz: “Concurso de declamação. Todos os interessados estão convidados”. Ao lado está pendurado um documento comprido em letra miúda — o regulamento do concurso. A funcionária do museu, Vera, sorri: “Quer participar? Só leia as regras com atenção”.',
        choices: [
          { text: 'Прочита́ть положе́ние.', translation: 'Ler o regulamento.', next: 'rules' },
          { text: 'Спроси́ть Ве́ру, что обы́чно чита́ют на ко́нкурсе.', translation: 'Perguntar à Vera o que costumam declamar no concurso.', next: 'vera' },
        ],
      },
      rules: {
        emoji: '📄',
        text: 'Ли́ну чита́ет: “1. Ко́нкурс прово́дится в ра́мках пра́здника поэ́зии с це́лью популяриза́ции тво́рчества А. С. Пу́шкина. 2. К уча́стию допуска́ются чтецы́ всех во́зрастов незави́симо от гражда́нства и родно́го языка́. 3. К исполне́нию принима́ются то́лько произведе́ния А. С. Пу́шкина; исполне́ние произведе́ний со́бственного сочине́ния не допуска́ется. 4. Продолжи́тельность выступле́ния не должна́ превыша́ть трёх мину́т”. Тре́тий пункт Ли́ну перечи́тывает два́жды: фо́рма непроста́я, но смысл, ка́жется, я́сен.',
        translation:
          'Linu lê: “1. O concurso é realizado no âmbito da festa de poesia, com o objetivo de divulgar a obra de A. S. Púchkin. 2. Admitem-se declamadores de todas as idades, independentemente da cidadania e da língua materna. 3. Aceitam-se para apresentação somente obras de A. S. Púchkin; não é permitida a apresentação de obras de autoria própria. 4. A duração da apresentação não deve exceder três minutos”. Linu relê o terceiro item duas vezes: a forma é difícil, mas o sentido, parece, está claro.',
        choices: [
          { text: 'Вы́брать стихотворе́ние Пу́шкина.', translation: 'Escolher um poema de Púchkin.', next: 'choose' },
          {
            text: 'Записа́ться со свои́м стихотворе́нием о пингви́нах.',
            translation: 'Inscrever-se com o seu próprio poema sobre pinguins.',
            wrong:
              'O item 3 diz que só se aceitam obras de Púchkin (“то́лько произведе́ния А. С. Пу́шкина”) e que “исполне́ние произведе́ний со́бственного сочине́ния не допуска́ется”: poemas de autoria própria não são permitidos.',
          },
        ],
      },
      vera: {
        emoji: '🌲',
        text: 'Ве́ра заду́мывается: “Чита́ют, коне́чно, ра́зное. Де́ти ча́ще всего́ выбира́ют стихи́ о приро́де, взро́слые — отры́вки из „Евге́ния Оне́гина‘’. Пото́м она́ добавля́ет, что здесь осо́бенно лю́бят ‘…Вновь я посети́л’: э́то стихотворе́ние Пу́шкин написа́л об э́тих места́х. ‘Вон там, у доро́ги, росли́ те са́мые три сосны́’, — пока́зывает она́ вдаль. Ли́ну понима́ет, что без положе́ния всё равно́ не обойти́сь.',
        translation:
          'Vera pensa um pouco: “Declamam de tudo, claro. As crianças costumam escolher poemas sobre a natureza; os adultos, trechos de „Evguêni Oniéguin‘’. Depois ela acrescenta que aqui gostam especialmente de ‘…Вновь я посети́л’ (De novo visitei): Púchkin escreveu esse poema sobre estes lugares. ‘Ali, junto à estrada, cresciam aqueles mesmos três pinheiros’, diz, apontando ao longe. Linu entende que, de qualquer jeito, não vai dar para escapar do regulamento.',
        choices: [
          { text: 'Прочита́ть положе́ние.', translation: 'Ler o regulamento.', next: 'rules' },
          { text: 'Реши́ть не уча́ствовать, а про́сто послу́шать.', translation: 'Decidir não participar e só assistir.', next: 'final_listen' },
        ],
      },
      choose: {
        emoji: '⏰',
        text: 'Ли́ну выбира́ет “…Вновь я посети́л” и перепи́сывает текст в блокно́т. Но тут он замеча́ет в са́мом низу́ ещё оди́н пункт: “5. Приём зая́вок на уча́стие в ко́нкурсе прекраща́ется в 12:00 в день его́ проведе́ния”. Он смо́трит на часы́: без че́тверти двена́дцать. Ве́ра ука́зывает на пала́тку оргкомите́та у вхо́да в парк.',
        translation:
          'Linu escolhe “…Вновь я посети́л” e copia o texto no caderno. Mas então ele nota bem embaixo mais um item: “5. O recebimento de inscrições para o concurso se encerra às 12h00 do dia de sua realização”. Ele olha o relógio: quinze para o meio-dia. Vera aponta a tenda da comissão organizadora na entrada do parque.',
        choices: [
          { text: 'Бежа́ть в пала́тку и пода́ть зая́вку.', translation: 'Correr até a tenda e fazer a inscrição.', next: 'apply' },
          {
            text: 'Реши́ть, что зая́вки мо́жно подава́ть до ве́чера.',
            translation: 'Concluir que dá para se inscrever até a noite.',
            wrong:
              'O item 5 diz “приём зая́вок… прекраща́ется в 12:00”: as inscrições se encerram ao meio-dia do dia do concurso, e já são quinze para o meio-dia (“без че́тверти двена́дцать”).',
          },
        ],
      },
      apply: {
        emoji: '📝',
        text: 'В пала́тке оргкомите́та Ли́ну протя́гивают бланк. Графа́ “Ф. И. О. уча́стника” его́ озада́чивает, но Ве́ра, подоше́дшая сле́дом, объясня́ет: “Фами́лия, и́мя, о́тчество. О́тчества у пингви́нов, я полага́ю, нет, так что пиши́те про́сто „Ли́ну‘’. Член жюри́, седо́й челове́к в льняно́м пиджаке́, принима́ет зая́вку и напомина́ет: ‘Три мину́ты, не бо́льше. Оце́нка выставля́ется по трём крите́риям: зна́ние те́кста, вырази́тельность и понима́ние’. Ли́ну — деся́тый в спи́ске.',
        translation:
          'Na tenda da comissão organizadora, entregam a Linu um formulário. O campo “Nome completo do participante” (sobrenome, nome, patronímico) o deixa confuso, mas Vera, que veio logo atrás, explica: “Sobrenome, nome e patronímico. Pinguins, suponho, não têm patronímico, então escreva só „Linu‘’. Um membro do júri, um homem grisalho de paletó de linho, recebe a inscrição e lembra: ‘Três minutos, não mais. A nota é dada por três critérios: domínio do texto, expressividade e compreensão’. Linu é o décimo da lista.',
        choices: [
          { text: 'Порепети́ровать на берегу́ Со́роти.', translation: 'Ensaiar à beira do Sorot.', next: 'stage' },
          { text: 'Послу́шать выступле́ния други́х чтецо́в.', translation: 'Ouvir as apresentações dos outros declamadores.', next: 'stage' },
        ],
      },
      stage: {
        emoji: '🎤',
        text: 'Наконе́ц объявля́ют: “Уча́стник но́мер де́сять — Ли́ну!” Пингви́н выхо́дит на поля́ну пе́ред до́мом; зри́тели сидя́т пря́мо на траве́. Он начина́ет: “…Вновь я посети́л / Тот уголо́к земли́, где я провёл / Изгна́нником два го́да незаме́тных”. Го́лос дрожи́т, а в голове́ стучи́т: три мину́ты, всего́ три мину́ты.',
        translation:
          'Finalmente anunciam: “Participante número dez — Linu!” O pinguim sai para a clareira em frente à casa; o público está sentado direto na grama. Ele começa: “…De novo visitei / aquele cantinho da terra onde passei, / como exilado, dois anos despercebidos”. A voz treme, e na cabeça martela: três minutos, só três minutos.',
        choices: [
          { text: 'Не спеши́ть и чита́ть, ду́мая о смы́сле.', translation: 'Não se apressar e declamar pensando no sentido.', next: 'final_good' },
          { text: 'Затарато́рить, что́бы то́чно уложи́ться во вре́мя.', translation: 'Disparar a falar para caber no tempo com certeza.', next: 'final_fast' },
        ],
      },
      final_good: {
        emoji: '🏆',
        text: 'Ли́ну замедля́ет речь и смо́трит вдаль, туда́, где когда́-то росли́ три сосны́. Зри́тели слу́шают, не шелохну́вшись. Когда́ он зака́нчивает, седо́й член жюри́ одобри́тельно кива́ет: “Две мину́ты со́рок секу́нд, и ни одно́й оши́бки в ударе́ниях”. Ли́ну получа́ет дипло́м “За проникнове́нное исполне́ние” и то́мик Пу́шкина. Ве́ра шути́т: “Вот что зна́чит внима́тельно чита́ть положе́ния!”',
        translation:
          'Linu desacelera a fala e olha ao longe, para onde um dia cresceram os três pinheiros. O público escuta sem se mexer. Quando ele termina, o membro grisalho do júri acena com aprovação: “Dois minutos e quarenta segundos, e nenhum erro de tonicidade”. Linu recebe um diploma “Pela interpretação comovente” e um volume de Púchkin. Vera brinca: “Isso é o que dá ler regulamentos com atenção!”',
        ending: { tone: 'bom', title: 'Diploma de declamador', message: 'Você decifrou o estilo oficial, cumpriu o prazo e ainda leu Púchkin com calma.' },
      },
      final_fast: {
        emoji: '⏱️',
        text: 'Ли́ну чита́ет так бы́стро, что зри́тели не успева́ют ничего́ разобра́ть. Он укла́дывается в мину́ту с небольши́м. Член жюри́ вздыха́ет: “Регла́мент вы соблюли́, но оце́нку за понима́ние поста́вить тру́дно: стихи́ — не прогно́з пого́ды”. Ли́ну получа́ет сертифика́т уча́стника и обеща́ет себе́ в сле́дующем году́ чита́ть ме́дленнее.',
        translation:
          'Linu declama tão rápido que o público não consegue entender nada. Ele termina em pouco mais de um minuto. O membro do júri suspira: “O senhor respeitou o regulamento, mas é difícil dar nota de compreensão: poesia não é previsão do tempo”. Linu recebe um certificado de participação e promete a si mesmo que no ano que vem vai ler mais devagar.',
        ending: { tone: 'neutro', title: 'Dentro do tempo', message: 'O regulamento pedia no máximo três minutos, não o mínimo possível.' },
      },
      final_listen: {
        emoji: '🌾',
        text: 'Ли́ну реша́ет не рискова́ть и сади́тся на траву́ среди́ зри́телей. Чтецы́ сменя́ют друг дру́га: де́вочка чита́ет “Зи́мнее у́тро”, стари́к — отры́вок из “Бори́са Годуно́ва”. Ли́ну слу́шает и шевели́т клю́вом, повторя́я знако́мые стро́чки. “В сле́дующем году́ — обяза́тельно”, — говори́т он Ве́ре на проща́нье.',
        translation:
          'Linu decide não arriscar e se senta na grama no meio do público. Os declamadores se revezam: uma menina declama “Manhã de inverno”, um velho, um trecho de “Boris Godunov”. Linu escuta e mexe o bico, repetindo os versos que conhece. “No ano que vem, com certeza”, diz ele à Vera na despedida.',
        ending: { tone: 'neutro', title: 'Da plateia', message: 'Foi uma bela tarde de poesia, mas o palco ficou para o ano que vem.' },
      },
    },
  },
  {
    id: 'ru-h43',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Ле́топись приро́ды',
    emoji: '🌳',
    summary:
      'Em Spásskoie-Lutovínovo, a propriedade de Turguêniev, o Linu ajuda uma cientista a registrar as observações da primavera no diário da natureza do parque.',
    cultural_context:
      'Spásskoie-Lutovínovo, na região de Oriol, era a propriedade da família de Ivan Turguêniev: ali ele passou a infância e voltou muitas vezes, e a natureza da região aparece em contos como “O prado de Bejin”, das “Memórias de um caçador”. Nas reservas russas, a “летопись природы” é um registro científico anual: quando florescem as plantas, quando chegam as aves, como muda o tempo.',
    start: 'start',
    glossary: [
      ['ле́топись приро́ды', 'crônica (registro anual) da natureza'],
      ['зацвета́ние', 'início da floração'],
      ['среднемноголе́тний', 'médio de muitos anos'],
      ['отклоне́ние', 'desvio'],
      ['среднесу́точная температу́ра', 'temperatura média diária'],
      ['осо́бь', 'indivíduo, exemplar (de uma espécie)'],
      ['саме́ц', 'macho'],
      ['сире́нь', 'lilás'],
    ],
    nodes: {
      start: {
        emoji: '🌤️',
        text: 'Ма́йское у́тро в Спа́сском-Лутови́нове. В ста́ром па́рке, кото́рый так люби́л Ива́н Серге́евич Турге́нев, ещё свежо́, над пруда́ми стели́тся тума́н. Ли́ну прие́хал сюда́ волонтёром: ему́ предстои́т помога́ть нау́чному сотру́днику Ната́лье Бори́совне вести́ ле́топись приро́ды. “У нас две зада́чи на сего́дня, — говори́т она́, протя́гивая ему́ тетра́дь. — Мо́жно нача́ть с расте́ний, а мо́жно с птиц”.',
        translation:
          'Manhã de maio em Spásskoie-Lutovínovo. No velho parque que Ivan Serguéievitch Turguêniev tanto amava ainda está fresco, e sobre os lagos se espalha a neblina. Linu veio como voluntário: ele vai ajudar a pesquisadora Natália Boríssovna a manter a crônica da natureza. “Temos duas tarefas para hoje — diz ela, entregando-lhe um caderno. — Podemos começar pelas plantas ou pelas aves”.',
        choices: [
          { text: 'Нача́ть с расте́ний.', translation: 'Começar pelas plantas.', next: 'plants' },
          { text: 'Нача́ть с птиц.', translation: 'Começar pelas aves.', next: 'birds' },
        ],
      },
      plants: {
        emoji: '📖',
        text: 'Ната́лья Бори́совна открыва́ет прошлого́днюю за́пись и чита́ет вслух: “Зацвета́ние сире́ни обыкнове́нной в па́рке уса́дьбы отме́чено 14 ма́я, что на пять дней ра́ньше среднемноголе́тней да́ты. Причи́ной отклоне́ния явля́ется повыше́ние среднесу́точной температу́ры во́здуха в пе́рвой дека́де ма́я”. Она́ смо́трит на Ли́ну пове́рх очко́в: “По́няли, что тут ска́зано?” Сире́ни в па́рке мно́го, и она́ как раз начина́ет распуска́ться.',
        translation:
          'Natália Boríssovna abre o registro do ano passado e lê em voz alta: “O início da floração do lilás-comum no parque da propriedade foi registrado em 14 de maio, cinco dias antes da data média de muitos anos. A causa do desvio é o aumento da temperatura média diária do ar no primeiro decêndio de maio”. Ela olha para Linu por cima dos óculos: “Entendeu o que está escrito?” Há muito lilás no parque, e ele está justamente começando a desabrochar.',
        choices: [
          {
            text: 'Отве́тить: “В про́шлом году́ сире́нь зацвела́ ра́ньше обы́чного, потому́ что бы́ло тепло́”.',
            translation: 'Responder: “No ano passado o lilás floresceu antes do normal, porque fez calor”.',
            next: 'lilac',
          },
          {
            text: 'Отве́тить: “Сире́нь зацвела́ на пять дней по́зже, потому́ что бы́ло хо́лодно”.',
            translation: 'Responder: “O lilás floresceu cinco dias mais tarde, porque fez frio”.',
            wrong:
              'O registro diz “на пять дней ра́ньше среднемноголе́тней да́ты” — cinco dias ANTES da média —, e a causa foi o aumento (“повыше́ние”) da temperatura média diária, não o frio.',
          },
        ],
      },
      lilac: {
        emoji: '💜',
        text: 'Они́ обхо́дят кусты́ сире́ни у до́ма. Ли́ну счита́ет: на трёх куста́х из десяти́ уже́ раскры́лись пе́рвые цветки́. “Зна́чит, пи́шем: нача́ло зацвета́ния, — дикту́ет Ната́лья Бори́совна. — А по́лное цвете́ние — когда́ раскро́ется бо́льше полови́ны кисте́й”. Ли́ну аккура́тно запи́сывает да́ту и вдруг заду́мывается: наве́рное, и полтора́ ве́ка наза́д здесь так же цвела́ сире́нь, а на неё смотре́л Турге́нев.',
        translation:
          'Eles percorrem as moitas de lilás junto à casa. Linu conta: em três moitas de dez já se abriram as primeiras flores. “Então escrevemos: início da floração — dita Natália Boríssovna. — Já a floração plena é quando mais da metade dos cachos se abrir”. Linu anota a data com capricho e de repente fica pensativo: provavelmente, um século e meio atrás, o lilás florescia aqui do mesmo jeito, e Turguêniev olhava para ele.',
        choices: [
          { text: 'Предложи́ть тепе́рь послу́шать птиц.', translation: 'Propor ouvir as aves agora.', next: 'birds' },
          { text: 'Спроси́ть, что Турге́нев писа́л о приро́де.', translation: 'Perguntar o que Turguêniev escrevia sobre a natureza.', next: 'turgenev' },
        ],
      },
      birds: {
        emoji: '🐦',
        text: 'У пруда́ Ната́лья Бори́совна достаёт бино́кль и ещё одну́ за́пись: “Пе́рвое появле́ние соловья́ обыкнове́нного на террито́рии музе́я-запове́дника регистри́руется по пе́нию самца́. Учёт пою́щих самцо́в прово́дится в ти́хую пого́ду, в ра́нние у́тренние и вече́рние часы́”. Ли́ну прислу́шивается: из кусто́в у воды́ доно́сится зво́нкая трель. “Ну, колле́га, — улыба́ется Ната́лья Бори́совна, — как запи́шем?”',
        translation:
          'Junto ao lago, Natália Boríssovna tira o binóculo e mais um registro: “O primeiro aparecimento do rouxinol-comum no território do museu-reserva é registrado pelo canto do macho. A contagem dos machos cantores é feita com tempo calmo, nas primeiras horas da manhã e à tardinha”. Linu apura o ouvido: das moitas junto à água vem um trinado sonoro. “E então, colega — sorri Natália Boríssovna —, como vamos anotar?”',
        choices: [
          { text: 'Записа́ть: пою́щий саме́ц, у пруда́, ра́ннее у́тро.', translation: 'Anotar: macho cantando, junto ao lago, início da manhã.', next: 'counting' },
          {
            text: 'Записа́ть, что поёт са́мка соловья́.',
            translation: 'Anotar que quem está cantando é a fêmea do rouxinol.',
            wrong:
              'O registro fala em “пою́щих самцо́в” (machos cantores): quem canta é o macho, e é pelo canto dele (“по пе́нию самца́”) que se registra a chegada da espécie.',
          },
        ],
      },
      counting: {
        emoji: '🔭',
        text: 'Они́ ме́дленно обхо́дят пруд, остана́вливаясь ка́ждые сто шаго́в. Ли́ну слы́шит одного́ соловья́ в ивняке́, пото́м второ́го — за мостко́м. “Два пою́щих самца́, — подтвержда́ет Ната́лья Бори́совна. — Сте́пень достове́рности высо́кая: голоса́ звуча́т одновре́менно, зна́чит, э́то ра́зные осо́би”. Ли́ну восхищённо ка́чает голово́й: да́же у соловьи́ного пе́ния есть свой нау́чный язы́к.',
        translation:
          'Eles contornam o lago devagar, parando a cada cem passos. Linu ouve um rouxinol no salgueiral, depois um segundo, atrás da pontezinha. “Dois machos cantores — confirma Natália Boríssovna. — O grau de confiabilidade é alto: as vozes soam ao mesmo tempo, então são indivíduos diferentes”. Linu balança a cabeça, admirado: até o canto do rouxinol tem sua linguagem científica.',
        choices: [{ text: 'Пойти́ к до́му писа́теля.', translation: 'Ir até a casa do escritor.', next: 'turgenev' }],
      },
      turgenev: {
        emoji: '🏡',
        text: 'Пока́ они́ иду́т по алле́е, Ната́лья Бори́совна расска́зывает, что Турге́нев провёл здесь де́тство и пото́м не раз возвраща́лся в Спа́сское. Приро́да у него́ — не фон, а почти́ геро́й: вспо́мните “Бе́жин луг” и други́е расска́зы из “Запи́сок охо́тника”. “Но в ле́тописи, — стро́го добавля́ет она́, — ме́сто то́лько фа́ктам: да́та, вре́мя, ме́сто, число́ осо́бей”. Совсе́м ря́дом в куста́х щёлкает солове́й, и Ли́ну открыва́ет тетра́дь: пора́ сде́лать сего́дняшнюю за́пись.',
        translation:
          'Enquanto caminham pela alameda, Natália Boríssovna conta que Turguêniev passou a infância aqui e depois voltou muitas vezes a Spásskoie. Nele a natureza não é pano de fundo, é quase uma personagem: lembre-se de “O prado de Bejin” e dos outros contos das “Memórias de um caçador”. “Mas na crônica — acrescenta ela, séria — só há lugar para fatos: data, hora, local, número de indivíduos”. Bem perto, nas moitas, um rouxinol estala o canto, e Linu abre o caderno: é hora de fazer o registro de hoje.',
        choices: [
          {
            text: 'Записа́ть ко́ротко и то́чно: да́та, вре́мя, ме́сто, число́ осо́бей.',
            translation: 'Anotar de forma curta e precisa: data, hora, local, número de indivíduos.',
            next: 'final_good',
          },
          {
            text: 'Написа́ть о соловье́ краси́во, как в расска́зе Турге́нева.',
            translation: 'Escrever sobre o rouxinol de forma bonita, como num conto de Turguêniev.',
            next: 'final_poetic',
          },
        ],
      },
      final_good: {
        emoji: '✅',
        text: 'Ли́ну пи́шет чёткими бу́квами да́ту, вре́мя и ме́сто, а пото́м то, что ви́дел и слы́шал сего́дня, — без еди́ного ли́шнего сло́ва. Ната́лья Бори́совна перечи́тывает и кива́ет: “Кра́тко, то́чно, без эмо́ций. Так и пи́шутся нау́чные те́ксты”. Она́ ста́вит под за́писью свою́ по́дпись и про́сит Ли́ну расписа́ться ря́дом. Ве́чером, уже́ без тетра́ди, Ли́ну сиди́т у пруда́ и про́сто слу́шает соловья́.',
        translation:
          'Linu escreve em letra clara a data, a hora e o local, e depois o que viu e ouviu hoje, sem uma única palavra a mais. Natália Boríssovna relê e acena com a cabeça: “Curto, preciso, sem emoções. É assim que se escrevem textos científicos”. Ela assina embaixo do registro e pede ao Linu que assine ao lado. À noite, já sem o caderno, Linu se senta junto ao lago e simplesmente escuta o rouxinol.',
        ending: {
          tone: 'bom',
          title: 'Registro de cientista',
          message: 'Você decifrou as nominalizações e escreveu como a ciência pede: só fatos. A poesia ficou para a noite.',
        },
      },
      final_poetic: {
        emoji: '🎶',
        text: 'Ли́ну вдохновля́ется и пи́шет: “Солове́й пел так, что замира́ло се́рдце, а сире́нь благоуха́ла, как в рома́не”. Ната́лья Бори́совна смеётся: “Краси́во! Турге́нев бы оцени́л. Но нау́чный сотру́дник че́рез сто лет не поймёт, ско́лько бы́ло птиц и где и́менно они́ пе́ли”. Она́ про́сит переписа́ть за́пись по пра́вилам, а поэти́ческую фра́зу разреша́ет оста́вить на поля́х.',
        translation:
          'Linu se inspira e escreve: “O rouxinol cantava de parar o coração, e o lilás perfumava tudo como num romance”. Natália Boríssovna ri: “Lindo! Turguêniev aprovaria. Mas um pesquisador daqui a cem anos não vai entender quantas aves havia e onde exatamente cantavam”. Ela pede que ele reescreva o registro seguindo as regras e deixa a frase poética ficar na margem.',
        ending: {
          tone: 'neutro',
          title: 'Poesia na margem',
          message: 'Bonito, mas a crônica da natureza pede estilo científico: data, hora, local e números.',
        },
      },
    },
  },
  {
    id: 'ru-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Кто написа́л медве́дей?',
    emoji: '🐻',
    summary: 'Na Galeria Tretiakov, em Moscou, uma velha guia que fala por provérbios mostra ao Linu que nem tudo num quadro famoso é o que parece.',
    cultural_context:
      'O comerciante Pável Tretiakov colecionou pintura russa durante décadas e em 1892 doou sua galeria à cidade de Moscou; a fachada em estilo de conto russo foi desenhada por Víktor Vasnetsov. No quadro “Manhã num bosque de pinheiros” (1889), de Ivan Chichkin, os ursos foram pintados por Konstantin Savítski, mas só a assinatura de Chichkin ficou na tela.',
    start: 'start',
    glossary: [
      ['полотно́', 'tela, quadro'],
      ['мецена́т', 'mecenas'],
      ['ска́зывать', 'contar (arcaico, popular)'],
      ['кажи́сь', 'parece que (popular)'],
      ['меж тем', 'enquanto isso (literário)'],
      ['о́чи', 'olhos (poético)'],
      ['Не всё то зо́лото, что блести́т', 'nem tudo que reluz é ouro'],
      ['Лу́чше оди́н раз уви́деть, чем сто раз услы́шать', 'ver uma vez vale mais que ouvir cem vezes'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Моро́зным янва́рским у́тром стои́т Ли́ну в Лавру́шинском переу́лке, пе́ред фаса́дом, сло́вно соше́дшим со страни́ц ска́зки. Фаса́д э́тот, как поясня́ет табли́чка, приду́мал худо́жник Ви́ктор Васнецо́в. У вхо́да пингви́на поджида́ет экскурсово́д Серафи́ма Ильи́нична — ма́ленькая, седа́я и бо́драя, как воробе́й. “Лу́чше оди́н раз уви́деть, чем сто раз услы́шать, — говори́т она́ вме́сто приве́тствия. — Куда́ пойдём, голу́бчик: к пейза́жам и́ли к богатыря́м?”',
        translation:
          'Numa manhã gelada de janeiro, está Linu na travessa Lavruchinski, diante de uma fachada que parece saída das páginas de um conto de fadas. Essa fachada, como explica uma plaquinha, foi criada pelo pintor Víktor Vasnetsov. Na entrada, espera pelo pinguim a guia Serafima Ilínitchna — pequena, grisalha e disposta como um pardal. “Ver uma vez vale mais que ouvir cem — diz ela em vez de cumprimentar. — Para onde vamos, meu querido: para as paisagens ou para os bogatires?”',
        choices: [
          { text: 'К пейза́жам.', translation: 'Para as paisagens.', next: 'landscapes' },
          { text: 'К богатыря́м.', translation: 'Para os bogatires.', next: 'bogatyri' },
        ],
      },
      landscapes: {
        emoji: '🐦‍⬛',
        text: 'Пе́рвым де́лом ведёт она́ его́ к небольшо́му полотну́ Савра́сова “Грачи́ прилете́ли”. Ничего́ осо́бенного на нём, ка́жется, нет: берёзы, це́рковь, та́лый снег да чёрные пти́цы на ветвя́х. А меж тем ве́ет от карти́ны тако́й ра́нней, тако́й ро́бкой весно́й, что Ли́ну поёживается, бу́дто от сквозняка́. “Вот и́менно, — ше́пчет Серафи́ма Ильи́нична. — Не всё то зо́лото, что блести́т, а ино́е зо́лото и не блести́т во́все”. Помолча́в, она́ ма́нит его́ в сосе́дний зал: “А тепе́рь — к медве́дям”.',
        translation:
          'Antes de tudo, ela o leva até uma tela pequena de Savrássov, “As gralhas chegaram”. Nada de especial nela, parece: bétulas, uma igreja, neve derretendo e pássaros pretos nos galhos. E no entanto sopra do quadro uma primavera tão precoce, tão tímida, que Linu se encolhe como se fosse uma corrente de ar. “Exatamente — sussurra Serafima Ilínitchna. — Nem tudo que reluz é ouro, e há ouro que nem reluz”. Depois de um silêncio, ela o chama para a sala ao lado: “E agora, aos ursos”.',
        choices: [
          { text: 'Пойти́ за ней к медве́дям.', translation: 'Segui-la até os ursos.', next: 'bears' },
          {
            text: 'Поду́мать, что Серафи́ма Ильи́нична счита́ет карти́ну неуда́чной.',
            translation: 'Achar que Serafima Ilínitchna considera o quadro malsucedido.',
            wrong:
              'É o contrário: “ино́е зо́лото и не блести́т во́все” quer dizer que há ouro que nem brilha. Ela vira o provérbio do avesso para dizer que esse quadro modesto é um tesouro.',
          },
        ],
      },
      bogatyri: {
        emoji: '🐎',
        text: 'В огро́мном за́ле, во всю сте́ну, несу́т дозо́р три богатыря́ — Илья́ Му́ромец, Добры́ня Ники́тич да Алёша Попо́вич. Ко́ни под ни́ми могу́чие, взгляд у ка́ждого свой: Илья́ смо́трит из-под ладо́ни вдаль, Добры́ня вынима́ет меч из ножо́н, а Алёша, хитре́ц, прищу́рился. “Мно́го лет писа́л их Васнецо́в, — ска́зывает Серафи́ма Ильи́нична, — да не торопи́лся: терпе́нье и труд всё перетру́т”. Ли́ну нево́льно выпрямля́ется пе́ред богатыря́ми, как шко́льник у доски́. Стару́шка ти́хо смеётся и зовёт его́ да́льше.',
        translation:
          'Numa sala enorme, ocupando a parede inteira, montam guarda três bogatires — Iliá Múromets, Dobrínia Nikítitch e Aliócha Popóvitch. Os cavalos debaixo deles são possantes, e cada um tem seu olhar: Iliá mira ao longe com a mão sobre os olhos, Dobrínia tira a espada da bainha, e Aliócha, o espertalhão, aperta os olhos. “Muitos anos Vasnetsov passou pintando-os — conta Serafima Ilínitchna —, e sem pressa: paciência e trabalho vencem tudo”. Linu, sem querer, se endireita diante dos bogatires, como um aluno diante do quadro-negro. A velhinha ri baixinho e o chama para seguir adiante.',
        choices: [
          { text: 'Попроси́ть показа́ть “У́тро в сосно́вом лесу́”.', translation: 'Pedir para ver “Manhã num bosque de pinheiros”.', next: 'bears' },
          { text: 'Сказа́ть, что уста́л, и пойти́ к вы́ходу.', translation: 'Dizer que está cansado e ir para a saída.', next: 'final_rush' },
        ],
      },
      bears: {
        emoji: '🌲',
        text: 'Пе́ред карти́ной “У́тро в сосно́вом лесу́” толпя́тся де́ти: всем охо́та погляде́ть на медвежа́т. Серафи́ма Ильи́нична, дожда́вшись тишины́, начина́ет: “Лес писа́л Ива́н Ива́нович Ши́шкин, а медве́дей — прия́тель его́, Константи́н Сави́цкий. Подписа́лись о́ба, да то́лько Па́вел Миха́йлович Третьяко́в, купи́в карти́ну, по́дпись Сави́цкого, говоря́т, веле́л смыть: мол, всё здесь, от за́мысла до мазка́, ши́шкинское”. Ли́ну гляди́т на полотно́ во все глаза́ — и ведь не отличи́шь, где конча́ется оди́н худо́жник и начина́ется друго́й. Стару́шка лука́во спра́шивает: “Ну-ка, голу́бчик, кто медве́дей-то написа́л?”',
        translation:
          'Diante do quadro “Manhã num bosque de pinheiros” as crianças se aglomeram: todas querem ver os filhotes de urso. Serafima Ilínitchna espera o silêncio e começa: “A floresta pintou Ivan Ivánovitch Chichkin, e os ursos, o amigo dele, Konstantin Savítski. Os dois assinaram, só que Pável Mikháilovitch Tretiakov, ao comprar o quadro, dizem que mandou apagar a assinatura de Savítski: afinal, tudo aqui, da ideia à pincelada, é de Chichkin”. Linu olha para a tela com olhos arregalados — e não é que não dá para distinguir onde termina um pintor e começa o outro? A velhinha pergunta, marota: “E então, meu querido, quem pintou os ursos, hein?”',
        choices: [
          {
            text: 'Отве́тить: “Сави́цкий, хоть по́дпись и ши́шкинская”.',
            translation: 'Responder: “Savítski, embora a assinatura seja de Chichkin”.',
            next: 'cheer',
          },
          {
            text: 'Отве́тить: “Ши́шкин, ведь по́дпись-то его́”.',
            translation: 'Responder: “Chichkin, afinal a assinatura é dele”.',
            wrong:
              'Serafima contou que os ursos são de Savítski (“медве́дей — прия́тель его́, Константи́н Сави́цкий”); a assinatura dele é que foi apagada. Nem tudo que reluz é ouro — e nem toda assinatura conta a história inteira.',
          },
        ],
      },
      cheer: {
        emoji: '👏',
        text: 'Серафи́ма Ильи́нична всплёскивает рука́ми: “Ай да пингви́н! Глаз-то у тебя́, голу́бчик, зо́ркий”. Де́ти, подслу́шавшие разгово́р, обступа́ют Ли́ну и наперебо́й спра́шивают, пра́вда ли, что медве́дей рисова́л друго́й дя́дя. Стару́шка терпели́во им всё растолко́вывает, и глаза́ её, я́сные, молоды́е, сия́ют под седы́ми бровя́ми. “Вот тебе́ и пе́рвый блин, — смеётся она́, — а вы́шел не ко́мом”. Пото́м, спохвати́вшись, берёт Ли́ну под крыло́: “Пойдём, покажу́ тебе́ моё люби́мое”.',
        translation:
          'Serafima Ilínitchna ergue as mãos: “Mas que pinguim! Que olho afiado você tem, meu querido”. As crianças, que ouviram a conversa, cercam Linu e perguntam, atropelando-se, se é verdade que os ursos foram pintados por outro moço. A velhinha explica tudo a elas com paciência, e seus olhos, claros e jovens, brilham sob as sobrancelhas grisalhas. “Olha só, primeira tentativa — ri ela — e não saiu torta”. Depois, lembrando-se de algo, pega Linu pela asa: “Vem, vou te mostrar o meu preferido”.',
        choices: [{ text: 'Пойти́ за Серафи́мой Ильи́ничной.', translation: 'Seguir Serafima Ilínitchna.', next: 'serov' }],
      },
      serov: {
        emoji: '🍑',
        text: 'Люби́мое у Серафи́мы Ильи́ничны — “Де́вочка с пе́рсиками” Серо́ва. Писа́л её худо́жник ле́том в Абра́мцеве, в уса́дьбе мецена́та Са́ввы Ма́монтова, а позирова́ла ему́ Ве́ра, до́чка хозя́ина. “Ты погляди́, голу́бчик, каки́е о́чи, — ти́хо говори́т стару́шка. — Кажи́сь, вот-во́т вста́нет да убежи́т в сад”. До́лго сидя́т они́ пе́ред карти́ной, и никто́ из них не торо́пится уходи́ть. А за о́кнами меж тем смерка́ется, и в за́лах зажига́ют свет.',
        translation:
          'O preferido de Serafima Ilínitchna é “Menina com pêssegos”, de Serov. O pintor o fez no verão em Abrámtsevo, na propriedade do mecenas Savva Mámontov, e quem posou para ele foi Vera, a filha do dono da casa. “Olhe só, meu querido, que olhos — diz a velhinha baixinho. — Parece que ela vai se levantar a qualquer momento e sair correndo para o jardim”. Por muito tempo os dois ficam sentados diante do quadro, e nenhum deles tem pressa de ir embora. Lá fora, enquanto isso, escurece, e nas salas acendem as luzes.',
        choices: [
          {
            text: 'Поблагодари́ть Серафи́му Ильи́ничну и пообеща́ть верну́ться.',
            translation: 'Agradecer a Serafima Ilínitchna e prometer voltar.',
            next: 'final_good',
          },
          { text: 'Взгляну́ть на часы́ и заторопи́ться к вы́ходу.', translation: 'Olhar o relógio e correr para a saída.', next: 'final_rush' },
        ],
      },
      final_good: {
        emoji: '🖼️',
        text: 'Серафи́ма Ильи́нична провожа́ет его́ до са́мых двере́й и на проща́нье суёт ему́ в крыло́ откры́тку с медве́дями. “Приходи́, голу́бчик, весно́й, когда́ грачи́ прилетя́т, — говори́т она́. — Карти́ны, они́ ведь как лю́ди: с пе́рвого ра́за ду́шу не откро́ют”. Выхо́дит Ли́ну в сне́жные су́мерки Замоскворе́чья, и чу́дится ему́, что где́-то за дома́ми, в сосно́вом лесу́, во́зятся медвежа́та. Не зря, ду́мает он, говоря́т: лу́чше оди́н раз уви́деть. А уж е́сли с хоро́шим провожа́тым — то и пода́вно.',
        translation:
          'Serafima Ilínitchna o acompanha até a porta e, na despedida, enfia na asa dele um cartão-postal com os ursos. “Volte na primavera, meu querido, quando as gralhas chegarem — diz ela. — Os quadros são como as pessoas: não abrem a alma na primeira vez”. Sai Linu para o crepúsculo nevado de Zamoskvorétchie, e lhe parece que em algum lugar atrás das casas, num bosque de pinheiros, os filhotes de urso brincam. Não é à toa, pensa ele, que se diz: melhor ver uma vez. E com uma boa guia, então, nem se fala.',
        ending: {
          tone: 'bom',
          title: 'Olhos de ver',
          message: 'Você acompanhou os provérbios, as inversões e os arcaísmos da guia e viu o que nem todo visitante vê.',
        },
      },
      final_rush: {
        emoji: '🚪',
        text: 'Ли́ну на́скоро проща́ется и спеши́т к вы́ходу: дела́, дела́. Серафи́ма Ильи́нична гляди́т ему́ вслед без оби́ды, лишь кача́ет голово́й. “Москва́ не сра́зу стро́илась, голу́бчик, и галере́ю за оди́н час не обойдёшь”, — говори́т она́ ему́ на проща́нье. Уже́ на у́лице Ли́ну понима́ет, что со́тни карти́н оста́лись неуви́денными. Что ж, галере́я никуда́ не де́нется: приходи́ и смотри́, ско́лько душе́ уго́дно.',
        translation:
          'Linu se despede às pressas e corre para a saída: compromissos, compromissos. Serafima Ilínitchna o acompanha com o olhar, sem mágoa, só balançando a cabeça. “Moscou não foi construída de uma vez, meu querido, e a galeria não se percorre numa hora”, diz ela na despedida. Já na rua, Linu percebe que centenas de quadros ficaram sem ser vistos. Pois bem, a galeria não vai sair do lugar: é só voltar e ver quanto a alma quiser.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'A Tretiakov pede tempo: Moscou não se fez num dia, nem a galeria se vê numa hora.' },
      },
    },
  },
  {
    id: 'ru-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Фонта́ны-шути́хи',
    emoji: '⛲',
    summary: 'Em Peterhof, o Linu vai ver a abertura dos chafarizes e descobre, encharcado, que alguns deles foram feitos para pregar peças.',
    cultural_context:
      'Peterhof, às margens do golfo da Finlândia, perto de São Petersburgo, foi erguido por ordem de Pedro, o Grande, no começo do século XVIII. Seus chafarizes funcionam sem bombas: a água desce por gravidade das nascentes das colinas de Ropcha por um canal de mais de 20 km; no Parque Inferior há também as “шути́хи”, chafarizes-pegadinha, como o “Guarda-chuva” e o “Carvalhinho”, que molham os visitantes de surpresa.',
    start: 'start',
    glossary: [
      ['шути́ха', 'chafariz-pegadinha'],
      ['фонта́нщик', 'fontaneiro, cuidador dos chafarizes'],
      ['как по манове́нию волше́бной па́лочки', 'como num passe de mágica'],
      ['отродя́сь', 'nunca na vida (popular)'],
      ['В ти́хом о́муте че́рти во́дятся', 'nas águas paradas moram os diabos (quem vê cara não vê coração)'],
      ['Не зна́я бро́ду, не су́йся в во́ду', 'sem conhecer o vau, não entre na água'],
      ['вы́йти сухи́м из воды́', 'sair ileso (lit.: sair seco da água)'],
      ['На серди́тых во́ду во́зят', 'quem se zanga sai perdendo'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Ти́хо над Фи́нским зали́вом, и Ни́жний парк Петерго́фа за́мер в ожида́нии: сего́дня весе́нний пра́здник фонта́нов. Толпа́ тесни́тся у Большо́го каска́да, где золоты́е ста́туи блестя́т на со́лнце, а воды́ всё нет. Ли́ну, приподня́вшись на цы́почки, ви́дит лишь спи́ны да шля́пы. Но вот гря́нула му́зыка, и из со́тен труб, как по манове́нию волше́бной па́лочки, взмыва́ют ввысь сере́бряные стру́и. Стои́т ря́дом стари́к-фонта́нщик Степа́н Кузьми́ч и говори́т, ни к кому́ осо́бо не обраща́ясь: “Мой праде́д за ни́ми ещё гляде́л. Хо́чешь, ми́лый друг, — покажу́, отку́да вода́ берётся, а хо́чешь — сведу́ к на́шим шалуна́м”.',
        translation:
          'Silêncio sobre o golfo da Finlândia, e o Parque Inferior de Peterhof está parado, à espera: hoje é a festa de primavera dos chafarizes. A multidão se aperta junto à Grande Cascata, onde as estátuas douradas brilham ao sol, mas a água não vem. Linu, na ponta dos pés, só vê costas e chapéus. Mas eis que a música ressoa e de centenas de canos, como num passe de mágica, jatos prateados disparam para o alto. Ao lado está um velho fontaneiro, Stepan Kuzmitch, que diz, sem se dirigir a ninguém em especial: “Meu bisavô já cuidava deles. Se quiser, meu caro, te mostro de onde vem a água, ou, se preferir, te levo aos nossos travessos”.',
        choices: [
          { text: 'Узна́ть, отку́да берётся вода́.', translation: 'Descobrir de onde vem a água.', next: 'water' },
          { text: 'Пойти́ к “шалуна́м”.', translation: 'Ir até os “travessos”.', next: 'tricks' },
        ],
      },
      water: {
        emoji: '💧',
        text: 'Степа́н Кузьми́ч, не спеша́, ведёт Ли́ну в Ве́рхний сад, к пруда́м, и по доро́ге ска́зывает. “Насо́сов здесь отродя́сь не быва́ло. Вода́ с Ро́пшинских высо́т сама́ бежи́т по кана́лу, вёрст два́дцать с ли́шком, а там уж — в пруды́, в тру́бы да в фонта́ны”. Ли́ну изумлён: выхо́дит, всё де́ло в том, что пруды́ лежа́т вы́ше фонта́нов? “Вот и́менно, — кива́ет стари́к. — Вода́ — она́ своё ме́сто зна́ет: све́рху вниз, и ника́к ина́че. Пётр-то Алексе́евич не дура́к был, всё рассчита́л”.',
        translation:
          'Stepan Kuzmitch, sem pressa, leva Linu ao Jardim Superior, até os lagos, e vai contando pelo caminho. “Bomba aqui nunca teve. A água desce sozinha das colinas de Ropcha por um canal, umas vinte e poucas verstas, e dali — para os lagos, para os canos e para os chafarizes”. Linu fica pasmo: então todo o segredo é que os lagos ficam mais alto que os chafarizes? “Exatamente — confirma o velho. — A água conhece o seu lugar: de cima para baixo, e de nenhum outro jeito. Piotr Alexéievitch não era bobo, calculou tudo”.',
        choices: [
          {
            text: 'Сказа́ть: “Зна́чит, фонта́ны рабо́тают без насо́сов, на одно́м перепа́де высо́т”.',
            translation: 'Dizer: “Então os chafarizes funcionam sem bombas, só com o desnível”.',
            next: 'tricks',
          },
          {
            text: 'Сказа́ть: “Зна́чит, где́-то под па́рком стоя́т огро́мные насо́сы”.',
            translation: 'Dizer: “Então em algum lugar debaixo do parque há bombas enormes”.',
            wrong: 'O fontaneiro disse “насо́сов здесь отродя́сь не быва́ло”: ali nunca houve bombas. A água desce sozinha das colinas de Ropcha, por gravidade.',
          },
        ],
      },
      tricks: {
        emoji: '☂️',
        text: 'Ведёт стари́к Ли́ну к мо́рю, где неподалёку от Монплези́ра пря́чутся в зе́лени фонта́ны-шути́хи. Посреди́ поля́ны стои́т неви́нный с ви́ду зо́нтик с кру́глой скаме́йкой, а побли́зости — дубо́к с металли́ческими ли́стьями. “В ти́хом о́муте че́рти во́дятся, — хи́тро щу́рится Степа́н Кузьми́ч. — Ты, ми́лый друг, не зна́я бро́ду, не су́йся в во́ду”. Ребяти́шки вокру́г хихи́кают и почему́-то держа́тся от зо́нтика пода́льше. Ли́ну, одна́ко, до́лгая прогу́лка утоми́ла, а скаме́йка так и ма́нит.',
        translation:
          'O velho leva Linu para perto do mar, onde, não longe de Monplaisir, os chafarizes-pegadinha se escondem no verde. No meio de uma clareira há um guarda-chuva de aparência inocente com um banco redondo, e ali perto um carvalhinho de folhas de metal. “Nas águas paradas moram os diabos — o velho aperta os olhos, malicioso. — Você, meu caro, sem conhecer o vau, não entre na água”. As crianças em volta dão risadinhas e, por algum motivo, ficam longe do guarda-chuva. Linu, porém, está cansado da longa caminhada, e o banco é um convite.',
        choices: [
          { text: 'Присе́сть отдохну́ть под зо́нтиком.', translation: 'Sentar para descansar debaixo do guarda-chuva.', next: 'umbrella' },
          { text: 'Внима́тельно пригляде́ться к де́тям и скаме́йке.', translation: 'Observar com atenção as crianças e o banco.', next: 'watch' },
          {
            text: 'Реши́ть, что стари́к сове́тует искупа́ться в мо́ре.',
            translation: 'Concluir que o velho está aconselhando um banho de mar.',
            wrong:
              '“Не зна́я бро́ду, не су́йся в во́ду” é um provérbio: não se meta onde não conhece o terreno. Junto com “в ти́хом о́муте че́рти во́дятся”, o velho avisa, com ironia, que aquele guarda-chuva inocente esconde uma surpresa.',
          },
        ],
      },
      umbrella: {
        emoji: '💦',
        text: 'Ли́ну уса́живается под зо́нтиком, блаже́нно вытя́гивает ла́пы — и в тот же миг с краёв зо́нтика обру́шивается сплошна́я стена́ воды́. Вы́скочить нельзя́: куда́ ни су́нься, всю́ду вода́. Ребяти́шки визжа́т от восто́рга, а Степа́н Кузьми́ч хохо́чет, утира́я слёзы. “Вот тебе́, ми́лый друг, и вы́шел сухи́м из воды́!” — кричи́т он. Впро́чем, пингви́ну ли боя́ться воды́?',
        translation:
          'Linu se acomoda sob o guarda-chuva, estica as patas, feliz da vida — e no mesmo instante despenca das bordas do guarda-chuva uma parede inteira de água. Não dá para escapar: para onde quer que ele vá, é água por todo lado. As crianças gritam de alegria, e Stepan Kuzmitch gargalha, enxugando as lágrimas. “Pois é, meu caro, saiu sequinho da água, hein!” — grita ele. Se bem que… um pinguim lá tem medo de água?',
        choices: [
          { text: 'Рассмея́ться вме́сте со все́ми и отряхну́ться.', translation: 'Rir junto com todo mundo e se sacudir.', next: 'final_good' },
          { text: 'Оби́деться на старика́ и уйти́.', translation: 'Ficar ofendido com o velho e ir embora.', next: 'final_sulk' },
        ],
      },
      watch: {
        emoji: '👀',
        text: 'Ли́ну, прищу́рившись, следи́т за детьми́ и вдруг замеча́ет: сто́ит кому́-нибудь присе́сть под зо́нтиком, как спря́тавшийся в куста́х фонта́нщик открыва́ет кран — и с краёв зо́нтика обру́шивается водопа́д. Та́йна раскры́та! Он отхо́дит в сто́рону и с дово́льным ви́дом наблюда́ет, как очередно́й тури́ст с ви́згом выска́кивает из-под водяно́й заве́сы. Степа́н Кузьми́ч одобри́тельно хлопа́ет его́ по плечу́: “Ишь ты, глаза́стый! Вы́шел-таки сухи́м из воды́”. А пото́м, пони́зив го́лос, добавля́ет: “Хо́чешь, и тебя́ к кра́ну пущу́?”',
        translation:
          'Linu, apertando os olhos, observa as crianças e de repente percebe: basta alguém se sentar sob o guarda-chuva para um fontaneiro escondido nas moitas abrir o registro — e das bordas do guarda-chuva despenca uma cascata. Segredo revelado! Ele se afasta e observa, satisfeito, mais um turista pular aos gritos de debaixo da cortina de água. Stepan Kuzmitch lhe dá um tapinha de aprovação no ombro: “Olha só, que olho vivo! Saiu sequinho da água, afinal”. E depois, baixando a voz, acrescenta: “Quer que eu te deixe mexer no registro também?”',
        choices: [
          { text: 'Согласи́ться и пойти́ за стари́ком в кусты́.', translation: 'Aceitar e seguir o velho até as moitas.', next: 'final_dry' },
          { text: 'Сесть под зо́нтик наро́чно, ра́ди ве́селья.', translation: 'Sentar sob o guarda-chuva de propósito, pela diversão.', next: 'umbrella' },
        ],
      },
      final_good: {
        emoji: '🎉',
        text: 'Ли́ну отря́хивается, как и поло́жено прирождённому пловцу́, и хохо́чет гро́мче всех. Ребяти́шки тут же принима́ют его́ в свою́ компа́нию, и до са́мого ве́чера но́сятся они́ от “Дубка́” к “Ёлочкам”, от “Ёлочек” к “Зо́нтику”. Степа́н Кузьми́ч, провожа́я его́ до воро́т, говори́т: “Кто над собо́й смея́ться уме́ет, тот нигде́ не пропадёт”. Над зали́вом сади́тся со́лнце, и мо́крый, счастли́вый пингви́н ду́мает, что пра́здника лу́чше не приду́маешь. Не зря ведь говоря́т: вода́ ка́мень то́чит — а уж плохо́е настрое́ние и пода́вно.',
        translation:
          'Linu se sacode, como convém a um nadador nato, e ri mais alto que todos. As crianças logo o aceitam no grupo, e até o fim da tarde eles correm do “Carvalhinho” para os “Pinheirinhos”, dos “Pinheirinhos” para o “Guarda-chuva”. Stepan Kuzmitch, acompanhando-o até o portão, diz: “Quem sabe rir de si mesmo não se perde em lugar nenhum”. O sol se põe sobre o golfo, e o pinguim, molhado e feliz, pensa que não existe festa melhor. Não é à toa que se diz: água mole em pedra dura tanto bate até que fura — e o mau humor, então, nem se fala.',
        ending: {
          tone: 'bom',
          title: 'Molhado e feliz',
          message: 'Você entendeu a ironia do fontaneiro e riu da peça junto com todos: esse é o espírito das шути́хи.',
        },
      },
      final_dry: {
        emoji: '🔧',
        text: 'За куста́ми, в укро́мной ни́ше, спря́тан заве́тный кран. “Ну-ка, глаза́стый, тепе́рь твой черёд”, — подми́гивает Степа́н Кузьми́ч. Весь день Ли́ну помога́ет фонта́нщику и пе́рвым смеётся, когда́ очередно́й гость выска́кивает из-под зо́нтика. Ве́чером стари́к жмёт ему́ крыло́: “Приходи́ ещё, сме́на мне растёт”. Так Ли́ну и вы́шел сухи́м из воды́ — в са́мом бу́квальном смы́сле.',
        translation:
          'Atrás das moitas, num nicho escondido, está o precioso registro. “Vamos lá, olho vivo, agora é a sua vez”, pisca Stepan Kuzmitch. O dia inteiro Linu ajuda o fontaneiro e é o primeiro a rir quando mais um visitante pula de debaixo do guarda-chuva. À noite, o velho aperta a asa dele: “Volte mais vezes, estou vendo que tenho sucessor”. E assim Linu saiu seco da água — no sentido mais literal.',
        ending: {
          tone: 'bom',
          title: 'Aprendiz de fontaneiro',
          message: 'Você leu os provérbios como aviso, descobriu o truque e ainda ganhou o posto de ajudante.',
        },
      },
      final_sulk: {
        emoji: '😤',
        text: 'Ли́ну, фы́ркая, отря́хивается и, наду́вшись, ухо́дит по алле́е, не огля́дываясь. Смех за спино́й ка́жется ему́ оби́дным, хотя́ смею́тся здесь над все́ми без разбо́ру. “Эх, ми́лый друг, — вздыха́ет вслед ему́ Степа́н Кузьми́ч, — на серди́тых во́ду во́зят”. Лишь в электри́чке, гля́дя на мо́крые пе́рья, Ли́ну вдруг прыска́ет со сме́ху: а ведь и впрямь бы́ло сме́шно. Жаль то́лько, что до “Дубка́” он так и не дошёл.',
        translation:
          'Linu, bufando, se sacode e, emburrado, vai embora pela alameda sem olhar para trás. As risadas às suas costas lhe parecem ofensivas, embora ali riam de todo mundo, sem distinção. “Ai, meu caro — suspira Stepan Kuzmitch enquanto ele se afasta —, quem se zanga sai perdendo”. Só no trem, olhando para as penas molhadas, Linu de repente cai na risada: pois é, tinha mesmo sido engraçado. Pena só que ele não chegou até o “Carvalhinho”.',
        ending: {
          tone: 'neutro',
          title: 'Zangado e molhado',
          message: 'Nas шути́хи ninguém sai seco: quem ri junto aproveita a festa, quem se zanga perde a graça.',
        },
      },
    },
  },
];
