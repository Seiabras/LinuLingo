import type { UnitSeed } from '../types';

/**
 * Trilha do armênio (oriental): quatro unidades, A1.1 ao A2.2 — ver `incomplete` em index.ts. As
 * de B1 ao C2 chegam depois. Fontes das unidades 3 e 4: Wikcionário em inglês e Wikipédia em
 * inglês ("Eastern Armenian"), citadas em vocabulario.ts e gramatica.ts.
 */
export const UNITS_HY: UnitSeed[] = [
  {
    id: 'hy-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Բարև! Առաջին քայլերը',
    emoji: '👋',
    card: {
      id: 'hy-c1',
      title: 'Um alfabeto só seu, há mais de 1600 anos',
      emoji: '🏔️',
      history:
        'O armênio forma, sozinho, um dos onze ramos da família indo-europeia: não é eslavo, nem românico, nem germânico — é parente distante de todos eles, mas não é igual a nenhum. O alfabeto armênio, com 39 letras, foi criado no ano 405 pelo monge Mesrop Mashtots para traduzir a Bíblia, numa época em que a Armênia, espremida entre o Império Bizantino e a Pérsia, viu na escrita própria uma forma de manter a identidade. O armênio de hoje se divide em dois padrões escritos: o oriental, falado na Armênia e no Irã (o deste curso), e o ocidental, falado na diáspora formada depois do genocídio armênio de 1915.',
      culture_tip:
        '“Բարև” (barev) serve a qualquer hora do dia, como “oi”; de manhã, dá pra trocar por “Բարի լույս” (bari luys, “bom dia”, literalmente “boa luz”). Ao se despedir à noite, “Բարի գիշեր” (bari gišer) é “boa noite”, e “Ցտեսություն” (ts’tesut’yun) é o “até logo” de qualquer hora.',
      grammar_why:
        'O armênio não tem um verbo no infinitivo para “ser”: usa-se direto a forma conjugada, encostada na palavra anterior — “ես Աննա եմ” é, palavra por palavra, “eu Anna sou”. Ou seja: o verbo vem por último.',
      grammar_examples: [
        ['Բարև, ես Աննա եմ:', 'Oi, eu sou a Anna.'],
        ['Իսկ դու, ինչպե՞ս ես կոչվում:', 'E você, como se chama?'],
        ['Նա Երևանից է:', 'Ela é de Erevan.'],
        ['Ցտեսություն, վաղը կտեսնվենք:', 'Até logo, nos vemos amanhã.'],
      ],
      character_guide: [
        ['Ա ա', 'um “a” aberto, como em “Brasil”', 'Ա aparece em Բարև (barev, “olá”)'],
        ['Բ բ', 'como o “b” do português', 'Բարև (barev)'],
        ['Ե ե', '“iê” no começo da palavra, “e” no meio', 'ես (yes, “eu”)'],
        ['Ս ս', 'como o “s” de “sapo”, nunca como “z”', 'ես (yes), Ցտեսություն (ts’tesut’yun)'],
        ['Ր ր', 'um erre batido só uma vez, mais suave que o “rr” do português', 'Բարի (bari, “bom”)'],
      ],
    },
    lessons: [
      {
        id: 'hy-u1-l1',
        title: 'Բարև, շնորհակալություն, ցտեսություն!',
        kind: 'licao',
        words: ['Բարև', 'Բարի լույս', 'Բարի գիշեր', 'Ցտեսություն', 'Շնորհակալություն', 'Խնդրեմ'],
        cloze: [
          { sentence: '___, Աննա: Ինչպե՞ս ես:', answer: 'Բարև', options: ['Բարև', 'Ցտեսություն', 'Խնդրեմ'], translation: 'Oi, Anna. Como vai?' },
          { sentence: 'Արդեն գիշեր է. ___:', answer: 'Բարի գիշեր', options: ['Բարի գիշեր', 'Բարի լույս', 'Խնդրեմ'], translation: 'Já é noite: boa noite!' },
          { sentence: 'Շատ ___:', answer: 'շնորհակալություն', options: ['շնորհակալություն', 'բարև', 'ցտեսություն'], translation: 'Muito obrigado.' },
        ],
        voice: {
          bot: 'Բարև: Ինչպե՞ս ես:',
          botTranslation: 'Oi! Como vai?',
          expected: ['Լավ եմ, շնորհակալություն: Իսկ դու՞:', 'լավ եմ', 'շնորհակալություն'],
          hint: 'Responda que vai bem e devolva a pergunta: “Լավ եմ, շնորհակալություն: Իսկ դու՞:”.',
        },
        communityPrompt: 'Escreva três cumprimentos em armênio: um de manhã (“Բարի լույս”), um à noite ao se despedir (“Բարի գիշեր”) e um “até logo” (“Ցտեսություն”).',
      },
      {
        id: 'hy-u1-l2',
        title: 'Ես, դու, նա',
        kind: 'licao',
        words: ['ես', 'դու', 'նա', 'անուն', 'լինել', 'քաղաք'],
        cloze: [
          { sentence: '___ Աննա եմ:', answer: 'Ես', options: ['Ես', 'Դու', 'Նա'], translation: 'Eu sou a Anna.' },
          { sentence: 'Իսկ ___, ինչպե՞ս ես կոչվում:', answer: 'դու', options: ['դու', 'նա', 'մենք'], translation: 'E você, como se chama?' },
          { sentence: '___ Երևանից է:', answer: 'Նա', options: ['Նա', 'Ես', 'Դու'], translation: 'Ele/ela é de Erevan.' },
        ],
        voice: {
          bot: 'Բարև: Ինչպե՞ս ես կոչվում:',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Իմ անունը Լինուն է: Իսկ դու՞:', 'իմ անունը', 'իսկ դու'],
          hint: 'Diga o seu nome com “Իմ անունը … է” e devolva a pergunta com “Իսկ դու՞:”.',
        },
        communityPrompt: 'Apresente-se em armênio: diga o seu nome com “Իմ անունը … է” e pergunte o nome de alguém com “Ինչպե՞ս ես կոչվում:”.',
      },
      {
        id: 'hy-u1-l3',
        title: 'Թեստ. առաջին քայլերը',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Բարև, իմ անունը Գոռ է: Ինչպե՞ս ես կոչվում, և որտեղի՞ց ես:',
          botTranslation: 'Oi, eu me chamo Gor. Como você se chama e de onde você é?',
          expected: ['Բարև, իմ անունը Լուսիա է, և ես Սան Պաուլուից եմ:', 'իմ անունը', 'ես', 'եմ'],
          hint: 'Devolva o cumprimento (“Բարև”), diga o nome (“Իմ անունը … է”) e a cidade (“Ես … ից եմ”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em armênio: cumprimento, nome com “Իմ անունը … է”, cidade com “Ես … ից եմ” e uma despedida.',
      },
    ],
  },
  {
    id: 'hy-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընտանիքը և տունը',
    emoji: '👪',
    card: {
      id: 'hy-c2',
      title: 'O artigo que vem depois da palavra',
      emoji: '🧭',
      history:
        'O armênio oriental, o da Armênia atual, se formou na região em volta do monte Ararat e do lago Sevan, com Erevan — uma das cidades mais antigas do mundo, fundada em 782 a.C. — como seu centro. A longa vizinhança com o persa e, mais tarde, com o russo (a Armênia foi parte do Império Russo e depois da União Soviética) deixou marcas no vocabulário, mas a gramática armênia seguiu seu próprio caminho dentro da família indo-europeia.',
      culture_tip:
        'A família é central na cultura armênia: é comum três gerações morarem na mesma casa ou no mesmo prédio. Perguntar sobre a “ընտանիք” (ëntanik’, família) de alguém é uma forma comum de puxar conversa.',
      grammar_why:
        'Em vez de um artigo antes da palavra (como “a casa” em português), o armênio gruda um artigo no final dela: “տուն” é “casa”, e “տունը” é “a casa”. É o mesmo mecanismo do romeno e do búlgaro, línguas de regiões vizinhas.',
      grammar_examples: [
        ['Իմ ընտանիքը մեծ է:', 'A minha família é grande.'],
        ['Ես մեկ եղբայր ունեմ:', 'Eu tenho um irmão.'],
        ['Իմ տունը փոքր է:', 'A minha casa é pequena.'],
        ['Ես չգիտեմ:', 'Eu não sei.'],
      ],
      character_guide: [
        ['Ն ն', 'como o “n” do português', 'նա (na, “ele/ela”), տուն (tun, “casa”)'],
        ['Տ տ', 'um “t” seco, sem soprar como em inglês', 'տուն (tun, “casa”)'],
        ['ու', 'esse grupo de duas letras soa só “u”', 'ջուր (jur, “água”)'],
        ['Ղ ղ', 'um “r” gutural e gargantal, parecido com o francês', 'Բարի լույս (bari luys)'],
        ['Ց ց', 'um “ts” seco e expelido com força', 'Ցտեսություն (ts’tesut’yun)'],
      ],
    },
    lessons: [
      {
        id: 'hy-u2-l1',
        title: 'Իմ ընտանիքը',
        kind: 'licao',
        words: ['ընտանիք', 'հայր', 'մայր', 'եղբայր', 'քույր', 'ունենալ'],
        cloze: [
          { sentence: 'Իմ ___ -ը մեծ է:', answer: 'ընտանիք', options: ['ընտանիք', 'հայր', 'մայր'], translation: 'A minha família é grande.' },
          { sentence: 'Ես մեկ ___ ունեմ:', answer: 'եղբայր', options: ['եղբայր', 'քույր', 'հայր'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Իմ ___ -ը Գյումրիից է:', answer: 'հայրը', options: ['հայրը', 'մայրը', 'քույրը'], translation: 'O meu pai é de Gyumri.' },
        ],
        voice: {
          bot: 'Եղբայր կամ քույր ունե՞ս:',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Այո, ես մեկ եղբայր և մեկ քույր ունեմ:', 'ես … ունեմ', 'եղբայր', 'քույր'],
          hint: 'Responda com “Այո, ես … ունեմ” ou “Ոչ, ես չունեմ”.',
        },
        communityPrompt: 'Descreva a sua família em armênio: quantos irmãos (եղբայր) e irmãs (քույր) você tem, e como se chamam os seus pais (հայր, մայր).',
      },
      {
        id: 'hy-u2-l2',
        title: 'Տանը',
        kind: 'licao',
        words: ['տուն', 'ջուր', 'հաց', 'կաթ', 'պանիր', 'ուտել'],
        cloze: [
          { sentence: 'Իմ ___ -ը փոքր է:', answer: 'տունը', options: ['տունը', 'ջուրը', 'հացը'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ես ___ եմ խմում:', answer: 'ջուր', options: ['ջուր', 'հաց', 'պանիր'], translation: 'Eu bebo água.' },
          { sentence: 'Ես ___ և պանիր եմ ուտում:', answer: 'հաց', options: ['հաց', 'կաթ', 'ջուր'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ի՞նչ ես ուտում առավոտյան:',
          botTranslation: 'O que você come de manhã?',
          expected: ['Ես հաց և պանիր եմ ուտում:', 'ես … եմ ուտում', 'հաց', 'պանիր'],
          hint: 'Diga o que come com “Ես … եմ ուտում”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã, usando “ես … եմ ուտում” e “ես … եմ խմում”.',
      },
      {
        id: 'hy-u2-l3',
        title: 'Թեստ. ընտանիք և տուն',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Պատմիր քո ընտանիքի մասին. եղբայր կամ քույր ունե՞ս:',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Այո, ես մեկ քույր ունեմ: Նրա անունը Մարիա է:', 'ես … ունեմ', 'անունը'],
          hint: 'Diga quantos irmãos tem (“ես … ունեմ”) e o nome deles (“նրա անունը … է”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ես … ունեմ”, “անունը … է” e “է”.',
      },
    ],
  },
  {
    id: 'hy-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Եղանակը և հագուստը',
    emoji: '🧥',
    card: {
      id: 'hy-c3',
      title: 'Do monte Ararat ao lago Sevan',
      emoji: '🏔️',
      history:
        'A Armênia tem um relevo montanhoso que marca bem as quatro estações: os invernos no Planalto Armênio são frios, com neve comum em Erevan e nas montanhas ao redor, enquanto os verões podem ser bem quentes e secos. O lago Sevan, um dos maiores lagos de altitude do mundo, e o monte Ararat (hoje do lado turco da fronteira, mas um símbolo nacional armênio) marcam essa paisagem de contrastes de clima.',
      culture_tip:
        'Perguntar “Ինչպիսի՞ եղանակ է այսօր” (como está o tempo hoje?) é uma forma comum de começar uma conversa. Falar do frio do inverno ou do calor do verão é um jeito fácil e neutro de puxar assunto.',
      grammar_why:
        'Esta unidade traz o futuro, formado com o infinitivo numa forma de dativo mais o presente de “ser” (“գնելու եմ”, eu vou comprar — diferente do presente “գնում եմ”, eu compro/estou comprando), e formaliza o plural com “-եր” ou “-ներ”, que já aparecia nos números desde a A1.1.',
      grammar_examples: [
        ['Վաղը ձյուն գալու է:', 'Amanhã vai nevar.'],
        ['Ես նոր բաճկոն գնելու եմ:', 'Eu vou comprar uma jaqueta nova.'],
        ['Երկինքը ամպերով է:', 'O céu está com nuvens.'],
        ['Ես պետք է բաճկոն գնեմ:', 'Eu tenho que comprar uma jaqueta.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hy-u3-l1',
        title: 'Ինչպիսի՞ եղանակ է',
        kind: 'licao',
        words: ['անձրև', 'արև', 'քամի', 'ձյուն', 'տաք', 'ցուրտ'],
        cloze: [
          { sentence: 'Երեկ ___ էր գալիս:', answer: 'անձրև', options: ['անձրև', 'արև', 'ձյուն'], translation: 'Ontem choveu.' },
          { sentence: 'Այսօր ___ է:', answer: 'տաք', options: ['տաք', 'ցուրտ', 'անձրև'], translation: 'Hoje está quente.' },
          { sentence: 'Ուժեղ ___ է:', answer: 'քամի', options: ['քամի', 'արև', 'ձյուն'], translation: 'Está ventando forte.' },
        ],
        voice: {
          bot: 'Ինչպիսի՞ եղանակ է այսօր:',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Այսօր արև է և տաք է:', 'արև', 'տաք'],
          hint: 'Descreva o tempo com “Այսօր … է” e “արև” ou “անձրև”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em armênio, usando pelo menos duas palavras desta lição (անձրև, արև, քամի, ձյուն, տաք, ցուրտ).',
      },
      {
        id: 'hy-u3-l2',
        title: 'Հագուստ եմ գնում',
        kind: 'licao',
        words: ['բաճկոն', 'կոշիկ', 'զգեստ', 'գլխարկ', 'գնել', 'հագնել'],
        cloze: [
          { sentence: 'Երեկ նոր ___ գնեցի:', answer: 'բաճկոն', options: ['բաճկոն', 'կոշիկ', 'զգեստ'], translation: 'Ontem eu comprei uma jaqueta nova.' },
          { sentence: 'Նա գեղեցիկ ___ է հագած:', answer: 'զգեստ', options: ['զգեստ', 'բաճկոն', 'կոշիկ'], translation: 'Ela está usando um vestido bonito.' },
          { sentence: 'Վաղը նոր ___ եմ հագնելու:', answer: 'գլխարկ', options: ['գլխարկ', 'կոշիկ', 'բաճկոն'], translation: 'Amanhã eu vou usar um chapéu novo.' },
        ],
        voice: {
          bot: 'Ի՞նչ ես հագնելու վաղը:',
          botTranslation: 'O que você vai usar amanhã?',
          expected: ['Բաճկոն և կոշիկներ եմ հագնելու:', 'եմ հագնելու', 'բաճկոն'],
          hint: 'Diga o que vai usar com “… եմ հագնելու”.',
        },
        communityPrompt: 'Escreva três frases sobre roupas em armênio, usando “գնեցի” (eu comprei) e “եմ հագնելու” (eu vou usar).',
      },
      {
        id: 'hy-u3-l3',
        title: 'Թեստ. եղանակը և հագուստը',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Երեկ անձրև էր գալիս: Ի՞նչ ես հագնելու վաղը:',
          botTranslation: 'Ontem choveu. O que você vai usar amanhã?',
          expected: ['Վաղը բաճկոն եմ հագնելու, որովհետև ցուրտ է:', 'եմ հագնելու', 'բաճկոն'],
          hint: 'Diga o que vai usar com “եմ հագնելու” e explique o clima com “ցուրտ” ou “տաք”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o tempo de ontem e a roupa de amanhã, usando o futuro (“… եմ գնելու/հագնելու”) e pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'hy-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Մարմինը, մասնագիտությունները և զգացմունքները',
    emoji: '🩺',
    card: {
      id: 'hy-c4',
      title: 'A Biblioteca Matenadaran, guardiã dos manuscritos',
      emoji: '📚',
      history:
        'O Matenadaran, em Erevan, é um dos maiores arquivos de manuscritos antigos do mundo, com mais de 23 mil manuscritos armênios e de outras línguas, alguns do século V. Fundado oficialmente como instituto em 1959 mas com raízes em coleções muito mais antigas, o Matenadaran é um símbolo de como a Armênia, apesar de pequena, preserva séculos de conhecimento escrito — e trabalhar lá, como bibliotecário, pesquisador ou restaurador, é visto como uma profissão de prestígio no país.',
      culture_tip:
        'Perguntar pela profissão de alguém (“Ի՞նչ աշխատանք ունես”, que trabalho você tem?) é comum numa conversa nova. E, como em português, é normal perguntar como alguém está se sentindo (“Ինչպե՞ս ես զգում քեզ”) depois de contar uma notícia boa ou má.',
      grammar_why:
        'Esta unidade traz o ablativo com “-ից” (que já aparecia em “Երևանից”, de Erevan, desde a A1.1, agora formalizado: “դպրոցից”, da escola) e “պետք է” + subjuntivo, para dizer o que é preciso fazer — “պետք է” nunca muda de forma, só o verbo principal depois dele.',
      grammar_examples: [
        ['Ես դպրոցից եմ գալիս:', 'Eu estou vindo da escola.'],
        ['Ես պետք է աշխատեմ վաղը:', 'Eu tenho que trabalhar amanhã.'],
        ['Ես հոգնած եմ զգում:', 'Eu me sinto cansado.'],
        ['Գլուխս ցավում է:', 'Minha cabeça está doendo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hy-u4-l1',
        title: 'Մարմինը և մասնագիտությունները',
        kind: 'licao',
        words: ['գլուխ', 'ձեռք', 'բժիշկ', 'ուսուցիչ', 'խոհարար', 'ինժեներ'],
        cloze: [
          { sentence: '___ ցավում է:', answer: 'Գլուխս', options: ['Գլուխս', 'Ձեռքս', 'Ոտքս'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Իմ հայրը ___ է:', answer: 'ուսուցիչ', options: ['ուսուցիչ', 'բժիշկ', 'խոհարար'], translation: 'Meu pai é professor.' },
          { sentence: 'Նա ___ է:', answer: 'ինժեներ', options: ['ինժեներ', 'խոհարար', 'բժիշկ'], translation: 'Ela é engenheira.' },
        ],
        voice: {
          bot: 'Ի՞նչ աշխատանք ունես:',
          botTranslation: 'Que trabalho você tem (profissão)?',
          expected: ['Ես բժիշկ եմ:', 'ես', 'բժիշկ'],
          hint: 'Diga a sua profissão com “Ես … եմ”.',
        },
        communityPrompt: 'Descreva a sua profissão ou a de alguém da sua família em armênio, usando “Ես … եմ” ou “Իմ հայրս/մայրս … է”.',
      },
      {
        id: 'hy-u4-l2',
        title: 'Ինչպե՞ս ես զգում քեզ',
        kind: 'licao',
        words: ['ուրախ', 'տխուր', 'հոգնած', 'զգալ', 'պետք է', 'աշխատել'],
        cloze: [
          { sentence: 'Այսօր ___ եմ:', answer: 'ուրախ', options: ['ուրախ', 'տխուր', 'հոգնած'], translation: 'Hoje eu estou feliz.' },
          { sentence: 'Ես ___ եմ զգում:', answer: 'հոգնած', options: ['հոգնած', 'ուրախ', 'տխուր'], translation: 'Eu me sinto cansado.' },
          { sentence: 'Ես ___ աշխատեմ վաղը:', answer: 'պետք է', options: ['պետք է', 'կարող եմ', 'ուզում եմ'], translation: 'Eu tenho que trabalhar amanhã.' },
        ],
        voice: {
          bot: 'Ինչպե՞ս ես զգում քեզ այսօր:',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Ուրախ եմ զգում, շնորհակալություն:', 'եմ զգում', 'ուրախ'],
          hint: 'Diga como se sente com “… եմ զգում”.',
        },
        communityPrompt: 'Escreva três frases sobre como você se sente, usando “եմ զգում” e pelo menos dois sentimentos desta unidade (ուրախ, տխուր, հոգնած, բարկացած, վախեցած, զարմացած).',
      },
      {
        id: 'hy-u4-l3',
        title: 'Թեստ. մարմինը, մասնագիտությունները և զգացմունքները',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ի՞նչ աշխատանք ունես, և ինչպե՞ս ես զգում քեզ այսօր:',
          botTranslation: 'Que trabalho você tem, e como você está se sentindo hoje?',
          expected: ['Ուսուցիչ եմ, և ուրախ եմ զգում:', 'եմ', 'եմ զգում'],
          hint: 'Diga a sua profissão com “… եմ” e o seu sentimento com “… եմ զգում”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua profissão (ou a que você gostaria de ter) e como você se sente hoje, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
