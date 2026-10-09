import type { UnitSeed } from '../types';

/**
 * Trilha do alto-sorábio: as duas unidades do nível A1 e, agora, as duas do nível A2 (o pacote
 * está marcado como incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_HSB: UnitSeed[] = [
  {
    id: 'hsb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Witaj! Prěni kroki',
    emoji: '👋',
    card: {
      id: 'hsb-c1',
      title: 'Uma língua eslava entre os alemães',
      emoji: '🏰',
      history:
        'O alto-sorábio (hornjoserbšćina) é falado na Alta Lusácia, no leste da Alemanha (Saxônia), ao redor da cidade de Budyšin (Bautzen, em alemão). É uma das duas línguas sorábias (a outra é o baixo-sorábio, falado mais ao norte, em Chóśebuz/Cottbus) — os últimos restos de um território eslavo que um dia foi bem maior entre os rios Elba e Oder. Hoje tem alguns milhares de falantes, reconhecida oficialmente como língua minoritária na Alemanha, com escolas, rádio e televisão em sorábio.',
      culture_tip:
        '“Witaj” serve para cumprimentar a qualquer hora. Para agradecer, “dźakuju so”; para se despedir, “na zasowidźenje”. Com desconhecidos e em situações formais usa-se “wy”, com o verbo no plural — como o “vous” francês.',
      grammar_why:
        'O alto-sorábio diz o nome com “mjeno”: “Moje mjeno je Ana” (meu nome é Ana). O verbo ser/estar é “być”: “ja sym” (eu sou/estou), “ty sy” (tu és/estás), “wón/wona je” (ele/ela é/está).',
      grammar_examples: [
        ['Witaj! Moje mjeno je Ana.', 'Oi! Meu nome é Ana.'],
        ['Kak ty rěkaš?', 'Como você se chama?'],
        ['Ja sym z Brazilskeje.', 'Eu sou do Brasil.'],
        ['Kak so tebi dźe?', 'Como você vai?'],
      ],
      character_guide: [
        ['ć', 'um “tch” suave, entre “t” e “tch”', 'dźěćo (criança), swójba (família, sem ć aqui, exemplo de contraste)'],
        ['dź', 'como o “dj” de “adjetivo”', 'dźeń (dia), dźensa (hoje)'],
        ['ě', 'um “ie” rápido depois de certas consoantes', 'wědźeć (saber), lěto (ano)'],
        ['ř', 'uma vibrante palatal, parecida com o “rzh” tcheco', 'dobry wječor (boa noite)'],
        ['š / ž', 'o nosso “x” de “xícara” e o “j” de “já”', 'wšo (tudo), žona (mulher)'],
      ],
    },
    lessons: [
      {
        id: 'hsb-u1-l1',
        title: 'Witaj, dźakuju, na zasowidźenje!',
        kind: 'licao',
        words: ['witaj', 'dobre ranje', 'dobry wječor', 'dobru nóc', 'na zasowidźenje', 'dźakuju so'],
        cloze: [
          { sentence: '___, Ana! Kak so tebi dźe?', answer: 'Witaj', options: ['Witaj', 'Na zasowidźenje', 'Dźakuju so'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'Je nóc: ___!', answer: 'dobru nóc', options: ['dobru nóc', 'dobre ranje', 'dźakuju so'], translation: 'É noite: boa noite!' },
          { sentence: '___ jara!', answer: 'Dźakuju so', options: ['Dźakuju so', 'Witaj', 'Na zasowidźenje'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Witaj! Kak so tebi dźe?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Mi dźe dobre, dźakuju! A tebi?', 'dobre', 'dźakuju'],
          hint: 'Responda que vai bem e devolva a pergunta: “Mi dźe dobre, dźakuju! A tebi?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em alto-sorábio: um de manhã (“dobre ranje…”), um à noite (“dobry wječor…”) e uma despedida (“na zasowidźenje”).',
      },
      {
        id: 'hsb-u1-l2',
        title: 'Ja, ty, wón, wona',
        kind: 'licao',
        words: ['ja', 'ty', 'wón', 'wona', 'mjeno', 'přećel'],
        cloze: [
          { sentence: '___ sym Ana.', answer: 'Ja', options: ['Ja', 'Ty', 'Wón'], translation: 'Eu sou Ana.' },
          { sentence: 'Moje ___ je Linu.', answer: 'mjeno', options: ['mjeno', 'přećel', 'ja'], translation: 'Meu nome é Linu.' },
          { sentence: '___ je z Budyšina.', answer: 'Wón', options: ['Wón', 'Ja', 'Ty'], translation: 'Ele é de Bautzen.' },
        ],
        voice: {
          bot: 'Witaj! Kak ty rěkaš?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Moje mjeno je Ana. A ty?', 'moje mjeno je'],
          hint: 'Diga o seu nome com “Moje mjeno je…” e devolva a pergunta com “A ty?”.',
        },
        communityPrompt: 'Apresente-se em alto-sorábio: diga o seu nome com “Moje mjeno je…” e a sua cidade com “Ja sym z…”.',
      },
      {
        id: 'hsb-u1-l3',
        title: 'Test: prěni kroki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Witaj! Moje mjeno je Michał. Kak ty rěkaš? Z hdźe sy?',
          botTranslation: 'Oi! Meu nome é Michał. Como você se chama? De onde você é?',
          expected: ['Witaj! Moje mjeno je Lucia a ja sym z Brazilskeje.', 'moje mjeno je', 'ja sym z', 'witaj'],
          hint: 'Devolva o cumprimento (“Witaj!”), diga o nome com “Moje mjeno je…” e o país com “Ja sym z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Moje mjeno je…”, país com “Ja sym z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'hsb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Swójba a dom',
    emoji: '👪',
    card: {
      id: 'hsb-c2',
      title: 'O número que só existe para dois',
      emoji: '✌️',
      history:
        'Quase todas as línguas eslavas de hoje só têm singular e plural — mas o protoeslavo, como o grego antigo e o sânscrito, tinha um terceiro número: o dual, usado só para duas coisas ou duas pessoas. O alto-sorábio (e o seu primo, o esloveno, lá nos Alpes) são praticamente as únicas línguas eslavas vivas que guardaram o dual até hoje, bem vivo no dia a dia.',
      culture_tip:
        'Se você tem exatamente dois irmãos, diz “dwaj bratraj” com a forma dual — não a forma de plural, que serviria para três ou mais. É um dos primeiros detalhes que chama atenção de quem já estudou russo, polonês ou tcheco: lá, essa distinção desapareceu séculos atrás.',
      grammar_why:
        'O verbo “měć” (ter) segue o padrão eslavo comum: “ja mam” (eu tenho), “ty maš” (tu tens), “wón/wona ma” (ele/ela tem). O numeral “dois” muda de forma conforme o gênero: “dwaj” para masculino, “dwě” para feminino e neutro — e o substantivo que vem depois também muda de forma (o dual), diferente do plural comum.',
      grammar_examples: [
        ['Mam jedneho bratra a jednu sotru.', 'Tenho um irmão e uma irmã.'],
        ['Mam dwaj bratraj.', 'Tenho dois irmãos (os dois juntos, forma dual).'],
        ['Mój dom je mały.', 'Minha casa é pequena.'],
        ['Ja njewěm.', 'Eu não sei.'],
      ],
      character_guide: [
        ['dwaj / dwě', 'dois: dwaj para masculino, dwě para feminino e neutro', 'dwaj bratraj (dois irmãos), dwě sotry (duas irmãs)'],
        ['moje / mój / moja', 'meu/minha muda com o gênero da coisa possuída', 'mój dom (minha casa, m.), moja mać (minha mãe, f.), moje mjeno (meu nome, n.)'],
      ],
    },
    lessons: [
      {
        id: 'hsb-u2-l1',
        title: 'Moja swójba',
        kind: 'licao',
        words: ['swójba', 'mać', 'nan', 'bratr', 'sotra', 'měć'],
        cloze: [
          { sentence: 'Moja ___ rěka Hanka.', answer: 'mać', options: ['mać', 'nan', 'bratr'], translation: 'Minha mãe se chama Hanka.' },
          { sentence: 'Ja ___ jedneho bratra.', answer: 'mam', options: ['mam', 'sym', 'du'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Moja ___ je wulka.', answer: 'swójba', options: ['swójba', 'sotra', 'mać'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Maš bratra abo sotru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Haj, mam jednu sotru.', 'mam', 'sotra', 'bratr'],
          hint: 'Responda com “Haj, mam…” e diga quantos irmãos (bratraj) e irmãs (sotrě) você tem.',
        },
        communityPrompt: 'Descreva a sua família em alto-sorábio: quantos irmãos (bratraj) e irmãs (sotry) você tem, usando “mam”.',
      },
      {
        id: 'hsb-u2-l2',
        title: 'W domje',
        kind: 'licao',
        words: ['dom', 'woda', 'chlěb', 'mloko', 'kofej', 'jěsć'],
        cloze: [
          { sentence: 'Mój ___ je mały.', answer: 'dom', options: ['dom', 'woda', 'chlěb'], translation: 'Minha casa é pequena.' },
          { sentence: 'Ja piju ___.', answer: 'wodu', options: ['wodu', 'chlěb', 'kofej'], translation: 'Eu bebo água.' },
          { sentence: 'Ja ___ chlěb.', answer: 'jěm', options: ['jěm', 'piju', 'mam'], translation: 'Eu como pão.' },
        ],
        voice: {
          bot: 'Što jěš?',
          botTranslation: 'O que você come?',
          expected: ['Ja jěm chlěb.', 'ja jěm', 'chlěb'],
          hint: 'Diga o que come com “Ja jěm…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ja jěm…” e “Ja piju…”.',
      },
      {
        id: 'hsb-u2-l3',
        title: 'Test: swójba a dom',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Maš bratra abo sotru? Što jěš?',
          botTranslation: 'Você tem irmão ou irmã? O que você come?',
          expected: ['Mam jednu sotru a jěm chlěb.', 'mam', 'jěm'],
          hint: 'Diga quem você tem na família com “mam…” e o que come com “jěm…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mam”, “sym” e “je”.',
      },
    ],
  },
  {
    id: 'hsb-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Swět wokoło nas',
    emoji: '🌳',
    card: {
      id: 'hsb-c3',
      title: 'O casamento dos pássaros',
      emoji: '🐦',
      history:
        'Todo 25 de janeiro, os sorábios celebram o “Ptači kwas” (o casamento dos pássaros): na noite anterior, as crianças deixam um prato vazio na janela, e de manhã ele aparece cheio de doces e biscoitos em forma de pássaro e ninho — um agradecimento imaginário dos pássaros por terem sido alimentados durante o inverno. A festa nasceu na Alta Lusácia e hoje é celebrada em creches e escolas sorábias, com direito a desfile de crianças fantasiadas de pássaros.',
      culture_tip:
        'Em algumas versões da festa, duas crianças representam os noivos: a pega (“žona” do casamento) e o corvo. As outras se fantasiam de pássaros comuns da região.',
      grammar_why:
        'Quando um substantivo é o objeto de “mam” (tenho), ele muda de forma: feminino troca -a por -u (“rybu”), masculino inanimado não muda (“kamjeń”), e masculino animado (pessoas e animais, como “ptak”) usa a mesma forma do genitivo (“ptaka”) — o caso acusativo.',
      grammar_examples: [
        ['Mam wulku rybu.', 'Tenho um peixe grande.'],
        ['Mam wulkeho ptaka.', 'Tenho um pássaro grande.'],
        ['Mam wulki kamjeń.', 'Tenho uma pedra grande.'],
        ['Chcu jěsć chlěb a pić wodu.', 'Quero comer pão e beber água.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hsb-u3-l1',
        title: 'Štom, ptak a rěka',
        kind: 'licao',
        words: ['štom', 'ptak', 'rěka', 'ryba', 'hora', 'kamjeń'],
        cloze: [
          { sentence: 'Mam wulku ___.', answer: 'rybu', options: ['rybu', 'rěku', 'horu'], translation: 'Tenho um peixe grande.' },
          { sentence: 'Mam wulkeho ___.', answer: 'ptaka', options: ['ptaka', 'ptak', 'ptakow'], translation: 'Tenho um pássaro grande.' },
          { sentence: 'Mam wulki ___.', answer: 'kamjeń', options: ['kamjeń', 'štom', 'horu'], translation: 'Tenho uma pedra grande.' },
        ],
        voice: {
          bot: 'Maš rybu?',
          botTranslation: 'Você tem um peixe?',
          expected: ['Haj, mam wulku rybu.', 'mam', 'rybu'],
          hint: 'Responda com “Haj, mam…” usando a forma acusativa “rybu”.',
        },
        communityPrompt: 'Descreva a natureza ao seu redor usando “mam” com os novos substantivos (rěka, hora, štom, ptak, ryba, kamjeń) na forma certa do acusativo.',
      },
      {
        id: 'hsb-u3-l2',
        title: 'Žona, muž a čas',
        kind: 'licao',
        words: ['žona', 'muž', 'dźeń', 'nóc', 'lěto', 'ruka'],
        cloze: [
          { sentence: 'Wona je ___.', answer: 'žona', options: ['žona', 'muž', 'ruka'], translation: 'Ela é uma mulher.' },
          { sentence: 'Wón je ___.', answer: 'muž', options: ['muž', 'žona', 'nóc'], translation: 'Ele é um homem.' },
          { sentence: 'Dźensa je dobry ___.', answer: 'dźeń', options: ['dźeń', 'nóc', 'lěto'], translation: 'Hoje é um bom dia.' },
        ],
        voice: {
          bot: 'Što je dźensa?',
          botTranslation: 'O que é hoje?',
          expected: ['Dźensa je dobry dźeń.', 'dźeń', 'dobry'],
          hint: 'Diga que hoje é um bom dia, usando “Dźensa je…”.',
        },
        communityPrompt: 'Escreva três frases usando “žona”, “muž” e um dos novos substantivos de tempo (dźeń, nóc, lěto).',
      },
      {
        id: 'hsb-u3-l3',
        title: 'Test: swět wokoło nas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Maš ptaka abo rybu? Što je dźensa?',
          botTranslation: 'Você tem um pássaro ou um peixe? O que é hoje?',
          expected: ['Mam wulkeho ptaka. Dźensa je dobry dźeń.', 'mam', 'dźeń'],
          hint: 'Diga o que você tem com “mam…” (lembre do acusativo) e que dia é hoje com “dźensa je…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a natureza e as pessoas ao seu redor, usando o acusativo certo para cada substantivo.',
      },
    ],
  },
  {
    id: 'hsb-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Što sym pisał',
    emoji: '✍️',
    card: {
      id: 'hsb-c4',
      title: 'O único jornal diário em alto-sorábio',
      emoji: '📰',
      history:
        'O “Serbske Nowiny” é o único jornal diário do mundo escrito em alto-sorábio, publicado em Budyšin desde o século XIX. Para uma língua com só alguns milhares de falantes, manter um jornal diário, rádio e televisão é um feito raro — e um motivo de orgulho para a comunidade sorábia, que também escreve cartas, livros e poesia na própria língua.',
      culture_tip:
        'Quem quer praticar o alto-sorábio lendo pode procurar o Serbske Nowiny, impresso todos os dias desde o século XIX.',
      grammar_why:
        'Para contar o que já aconteceu, o alto-sorábio junta o presente de “być” (sym, sy, je, smy, sće, su) com uma forma do verbo principal terminada em -ł, que muda com o gênero: “sym pisał” (eu escrevi, fala um homem) ou “sym pisała” (fala uma mulher).',
      grammar_examples: [
        ['Ja sym pisał list.', 'Eu escrevi uma carta. (fala um homem)'],
        ['Ja sym pisała list.', 'Eu escrevi uma carta. (fala uma mulher)'],
        ['Wčera było ćopłe.', 'Ontem estava quente.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hsb-u4-l1',
        title: 'Sym pisał list',
        kind: 'licao',
        words: ['pisać', 'widźeć', 'list', 'nowy', 'stary', 'puć'],
        cloze: [
          { sentence: 'Ja sym ___ list.', answer: 'pisał', options: ['pisał', 'pisała', 'była'], translation: 'Eu escrevi uma carta. (fala um homem)' },
          { sentence: 'Wona je list ___.', answer: 'pisała', options: ['pisała', 'pisał', 'była'], translation: 'Ela escreveu uma carta.' },
          { sentence: 'To je ___ puć.', answer: 'nowy', options: ['nowy', 'stary', 'pisał'], translation: 'Isto é um caminho novo.' },
        ],
        voice: {
          bot: 'Što sy pisał?',
          botTranslation: 'O que você escreveu?',
          expected: ['Sym pisał list.', 'sym pisał', 'list'],
          hint: 'Responda com “Sym pisał list” (ou “sym pisała”, se você é mulher).',
        },
        communityPrompt: 'Conte o que você escreveu usando “Sym pisał…” (ou “Sym pisała…”, se você é mulher).',
      },
      {
        id: 'hsb-u4-l2',
        title: 'Wčera było ćopłe',
        kind: 'licao',
        words: ['hłowa', 'słónco', 'hwězda', 'woheń', 'ćopły', 'zymny'],
        cloze: [
          { sentence: 'Wčera ___ ćopłe.', answer: 'było', options: ['było', 'był', 'była'], translation: 'Ontem estava quente.' },
          { sentence: 'To je moja ___.', answer: 'hłowa', options: ['hłowa', 'ruka', 'hwězda'], translation: 'Isto é a minha cabeça.' },
          { sentence: 'To je wulke ___.', answer: 'słónco', options: ['słónco', 'hwězda', 'woheń'], translation: 'Isto é um sol grande.' },
        ],
        voice: {
          bot: 'Było ćopłe wčera?',
          botTranslation: 'Estava quente ontem?',
          expected: ['Haj, było ćopłe.', 'było', 'haj'],
          hint: 'Responda com “Haj, było…” ou “Ně, było…”.',
        },
        communityPrompt: 'Descreva como estava o tempo ontem, usando “Wčera było…” e os novos adjetivos (ćopły/zymny).',
      },
      {
        id: 'hsb-u4-l3',
        title: 'Test: što sym pisał',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Što sy pisał? Było ćopłe wčera?',
          botTranslation: 'O que você escreveu? Estava quente ontem?',
          expected: ['Sym pisał list. Haj, było ćopłe.', 'sym pisał', 'było'],
          hint: 'Diga o que escreveu com “sym pisał/pisała…” e como estava o tempo com “było…”.',
        },
        communityPrompt: 'Escreva cinco frases no passado sobre o seu dia de ontem, usando “sym pisał/pisała” e “było”.',
      },
    ],
  },
];
