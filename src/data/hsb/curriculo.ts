import type { UnitSeed } from '../types';

/**
 * Trilha do alto-sorábio: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
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
];
