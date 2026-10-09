import type { UnitSeed } from '../types';

/**
 * Trilha do ucraniano: as quatro unidades dos níveis A1 e A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Da B1 ao C2 chega depois. Todo texto ucraniano
 * leva a sílaba tônica marcada (U+0301), menos os monossílabos.
 */
export const UNITS_UK: UnitSeed[] = [
  {
    id: 'uk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Приві́т! Пе́рші кро́ки',
    emoji: '👋',
    card: {
      id: 'uk-c1',
      title: 'O cirílico do ucraniano',
      emoji: '🇺🇦',
      history:
        'O ucraniano é uma língua eslava oriental, como o russo e o bielorrusso: as três descendem da língua falada na Rus de Kiev, na Idade Média. O ucraniano literário moderno costuma ser contado a partir de 1798, quando Ivan Kotliarévski publicou a “Eneida”, uma paródia de Virgílio escrita na língua do povo, e se firmou com a obra do poeta Taras Chevtchenko (1814–1861). Hoje é a única língua oficial da Ucrânia. O Brasil tem uma das maiores comunidades de origem ucraniana fora da Europa, sobretudo no Paraná: em Prudentópolis, muitas famílias descendem de imigrantes que chegaram no fim do século XIX.',
      culture_tip:
        '“Приві́т” é o “oi” entre amigos; com desconhecidos e mais velhos, diga “До́брий день” e trate a pessoa por “ви” (o senhor / a senhora). Ao chamar alguém, o nome muda de forma (é o caso vocativo): “О́ля” vira “О́лю!”, “ма́ма” vira “ма́мо!”.',
      grammar_why:
        'No presente, o ucraniano quase nunca diz o verbo “ser”: “Я студе́нтка” é, palavra por palavra, “eu estudante”. Também não há artigos. E o nome se diz com “мене́ зву́ть”, literalmente “me chamam”: “Мене́ зву́ть А́нна”.',
      grammar_examples: [
        ['Приві́т! Мене́ зву́ть А́нна.', 'Oi! Eu me chamo Anna.'],
        ['Як тебе́ зва́ти?', 'Como você se chama?'],
        ['Він зі Льво́ва, вона́ з Оде́си.', 'Ele é de Lviv, ela é de Odessa.'],
        ['До́бре, дя́кую. А в те́бе?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['г', '“h” com voz, um sopro sonoro na garganta — nunca “g”', 'годи́на (hora)'],
        ['ґ', '“g” de “gato”', 'ґа́нок (varanda)'],
        ['и', '“i” curto e mais aberto, perto de um “ê” fechado', 'син (filho), ти'],
        ['і', '“i” de “ilha”', 'ні (não), кіт (gato)'],
        ['ї', '“ii”: um “i” com outro “i” na frente', 'украї́нська'],
        ['є / е', '“ié” / “é”', 'є (há), де (onde)'],
        ['я / ю', '“iá” / “iú”', 'я (eu), люблю́'],
        ['х', '“rr” raspado na garganta', 'хліб (pão)'],
        ['ж / ш / ч / щ', '“j” de “já” / “ch” de “chá” / “tch” / “chtch”', 'живу́, шість, четве́р, що'],
        ['ц', '“ts” de “tsunami”', 'це (isto)'],
        ['ь', 'sinal brando: sem som, deixa a consoante anterior macia', 'п’ять (cinco)'],
        ['’', 'apóstrofo: separa a consoante do som “i” seguinte', 'сім’я́ (família)'],
        ['acento', 'a tônica é livre e vem marcada aqui; os nativos não escrevem essa marca', 'дя́кую, молоко́'],
      ],
    },
    lessons: [
      {
        id: 'uk-u1-l1',
        title: 'Приві́т, дя́кую, до поба́чення!',
        kind: 'licao',
        words: ['приві́т', 'до́брий день', 'до́брий ве́чір', 'на добра́ніч', 'до поба́чення', 'дя́кую'],
        cloze: [
          { sentence: '___, О́лю! Як спра́ви?', answer: 'Приві́т', options: ['Приві́т', 'На добра́ніч', 'Дя́кую'], translation: 'Oi, Olia! Como vai?' },
          { sentence: 'Вже пі́зно. ___!', answer: 'На добра́ніч', options: ['На добра́ніч', 'До́брий день', 'Приві́т'], translation: 'Já é tarde. Boa noite!' },
          { sentence: 'Ду́же ___!', answer: 'дя́кую', options: ['дя́кую', 'приві́т', 'до поба́чення'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Приві́т! Як спра́ви?',
          botTranslation: 'Oi! Como vai?',
          expected: ['До́бре, дя́кую! А в те́бе?', 'до́бре', 'дя́кую'],
          hint: 'Responda que vai bem e devolva a pergunta: “До́бре, дя́кую! А в те́бе?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em ucraniano: um de dia (“До́брий день…”), um à noite (“До́брий ве́чір…”) e uma despedida (“До поба́чення” ou “На добра́ніч”).',
      },
      {
        id: 'uk-u1-l2',
        title: 'Я, ти, він, вона́',
        kind: 'licao',
        words: ['я', 'ти', 'він', 'вона́', 'мене́ зву́ть', 'ім’я́'],
        cloze: [
          { sentence: '___ ма́ю бра́та.', answer: 'Я', options: ['Я', 'Ти', 'Вона́'], translation: 'Eu tenho um irmão.' },
          { sentence: 'А ___? Як тебе́ зва́ти?', answer: 'ти', options: ['ти', 'він', 'вона́'], translation: 'E você? Como você se chama?' },
          { sentence: '___ зі Льво́ва. Це мій брат.', answer: 'Він', options: ['Він', 'Вона́', 'Я'], translation: 'Ele é de Lviv. É o meu irmão.' },
        ],
        voice: {
          bot: 'Приві́т! Як тебе́ зва́ти?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Мене́ зву́ть А́на. А тебе́?', 'мене́ зву́ть', 'а тебе́'],
          hint: 'Diga o seu nome com “Мене́ зву́ть…” e devolva a pergunta com “А тебе́?”.',
        },
        communityPrompt: 'Apresente-se em ucraniano: diga o seu nome com “Мене́ зву́ть…” e pergunte o nome de alguém com “Як тебе́ зва́ти?”.',
      },
      {
        id: 'uk-u1-l3',
        title: 'Тест: пе́рші кро́ки',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Приві́т! Мене́ зву́ть Тара́с. Як тебе́ зва́ти і зві́дки ти?',
          botTranslation: 'Oi! Eu me chamo Taras. Como você se chama e de onde você é?',
          expected: ['Приві́т! Мене́ зву́ть А́на, я з Курити́би.', 'мене́ зву́ть', 'я з', 'приві́т'],
          hint: 'Devolva o cumprimento (“Приві́т!”), diga o nome com “Мене́ зву́ть…” e a cidade com “Я з…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Мене́ зву́ть…”, cidade com “Я з…” e uma despedida.',
      },
    ],
  },
  {
    id: 'uk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Сім’я́ і дім',
    emoji: '👪',
    card: {
      id: 'uk-c2',
      title: 'Três gêneros, “мій / моя́ / моє́” e o “у ме́не є”',
      emoji: '🧭',
      history:
        'O ucraniano tem sete casos, um deles o vocativo, usado para chamar alguém — um traço que o russo perdeu. A terminação do substantivo muda conforme a função na frase: “Льві́в” (Lviv) vira “зі Льво́ва” (de Lviv), e “ка́ва” vira “ка́ву, будь ла́ска” (um café, por favor).',
      culture_tip:
        'Um dos pratos mais conhecidos da cozinha ucraniana são os “варе́ники”: pasteizinhos de massa cozidos, recheados de batata, queijo fresco ou frutas, que não costumam faltar nas festas de família.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (дім, брат), -а/-я → feminino (ма́ма, вода́), -о/-е → neutro (молоко́, мі́сто). O possessivo concorda: “мій брат”, “моя́ сестра́”, “моє́ мі́сто”. Para dizer que tem algo, o ucraniano usa “я ма́ю” (eu tenho) ou, muito comum, “у ме́не є” (junto de mim há).',
      grammar_examples: [
        ['Моя́ сім’я́ вели́ка.', 'A minha família é grande.'],
        ['У ме́не є брат і сестра́.', 'Tenho um irmão e uma irmã.'],
        ['Молоко́ бі́ле.', 'O leite é branco.'],
        ['Я не зна́ю.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-а → -у', 'depois de “ма́ю” (tenho), a palavra feminina muda: é o acusativo', 'сестра́ → я ма́ю сестру́'],
        ['мій / моя́ / моє́', 'meu / minha / meu (neutro)', 'мій дім, моя́ ма́ма, моє́ мі́сто'],
      ],
    },
    lessons: [
      {
        id: 'uk-u2-l1',
        title: 'Моя́ сім’я́',
        kind: 'licao',
        words: ['сім’я́', 'ма́ма', 'та́то', 'брат', 'сестра́', 'ма́ти'],
        cloze: [
          { sentence: 'Моя́ ___ з Оде́си.', answer: 'ма́ма', options: ['ма́ма', 'та́то', 'брат'], translation: 'A minha mãe é de Odessa.' },
          { sentence: 'Я ___ бра́та і сестру́.', answer: 'ма́ю', options: ['ма́ю', 'йду', 'живу́'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Мій ___ зі Льво́ва.', answer: 'та́то', options: ['та́то', 'сестра́', 'ма́ма'], translation: 'O meu pai é de Lviv.' },
        ],
        voice: {
          bot: 'У те́бе є брат або́ сестра́?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Так, у ме́не є брат і сестра́.', 'у ме́не є', 'брат', 'сестра́'],
          hint: 'Responda com “Так, у ме́не є…” ou “Так, я ма́ю…”.',
        },
        communityPrompt: 'Descreva a sua família em ucraniano: se você tem irmão (брат) ou irmã (сестра́) e como se chamam os seus pais (“Мою́ ма́му зву́ть…”).',
      },
      {
        id: 'uk-u2-l2',
        title: 'Удо́ма',
        kind: 'licao',
        words: ['дім', 'вода́', 'хліб', 'молоко́', 'сир', 'люби́ти'],
        cloze: [
          { sentence: 'Мій ___ мали́й.', answer: 'дім', options: ['дім', 'вода́', 'молоко́'], translation: 'A minha casa é pequena.' },
          { sentence: 'Я п’ю ___.', answer: 'во́ду', options: ['во́ду', 'хліб', 'сир'], translation: 'Eu bebo água.' },
          { sentence: 'Я їм хліб і ___.', answer: 'сир', options: ['сир', 'во́ду', 'молоко́'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Що ти їси́ на сніда́нок?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Я їм хліб і сир.', 'їм', 'хліб', 'сир'],
          hint: 'Diga o que come com “Я їм…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Я їм…” e “Я п’ю…”.',
      },
      {
        id: 'uk-u2-l3',
        title: 'Тест: сім’я́ і дім',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Розкажи́ про свою́ сім’ю́: у те́бе є брат або́ сестра́?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Так, у ме́не є сестра́. Її́ зву́ть Марі́я.', 'у ме́не є', 'зву́ть'],
          hint: 'Diga se tem irmãos (“у ме́не є…”) e o nome deles (“його́ / її́ зву́ть…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “у ме́не є”, “зву́ть” e “мій / моя́”.',
      },
    ],
  },
  {
    id: 'uk-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Мі́сто, магази́ни й о́дяг',
    emoji: '🏙️',
    card: {
      id: 'uk-c3',
      title: 'O genitivo e o locativo: бра́та, у шко́лі',
      emoji: '🧭',
      history:
        'A Ucrânia tem um clima continental temperado, com verões quentes e invernos frios; nos Cárpatos ucranianos, no oeste do país, as temperaturas são mais baixas e a neve é comum no inverno. O ucraniano tem sete casos; nesta unidade você conhece dois deles de verdade: o genitivo, usado depois de “нема́є” (não há) e com números grandes, e o locativo, para dizer onde algo está, sempre com uma preposição como “у/в” (em) ou “на” (em, sobre).',
      culture_tip:
        'Perguntar onde fica a escola, o hospital ou a loja mais próxima é uma das primeiras coisas úteis numa cidade nova: “Де шко́ла?”, “Де ліка́рня?”. A resposta normalmente já vem com o locativo: “Шко́ла у мі́сті” (a escola fica na cidade).',
      grammar_why:
        'O genitivo marca a falta de algo (“у ме́не нема́є бра́та”, não tenho irmão) e aparece depois de números a partir de cinco, com formas às vezes irregulares (“сесте́р”, não “сестр”). O locativo, usado com “у/в” e “на”, troca a terminação “-а”/“-я” do feminino por “-і” (шко́ла → у шко́лі, ву́лиця → на ву́лиці) e muda a raiz de alguns nomes de cidade (Ки́їв → у Ки́єві).',
      grammar_examples: [
        ['Іду́ до шко́ли, а пото́м до магази́ну.', 'Eu vou para a escola e depois para a loja.'],
        ['Працю́ю в ліка́рні.', 'Eu trabalho num hospital.'],
        ['Живу́ на цій ву́лиці.', 'Eu moro nesta rua.'],
        ['Ма́ю нову́ соро́чку.', 'Eu tenho uma camisa nova.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uk-u3-l1',
        title: 'У мі́сті',
        kind: 'licao',
        words: ['шко́ла', 'ліка́рня', 'магази́н', 'ву́лиця', 'рестора́н', 'дім'],
        cloze: [
          { sentence: 'Працю́ю в ___.', answer: 'ліка́рні', options: ['ліка́рні', 'ліка́рня', 'ліка́рню'], translation: 'Eu trabalho num hospital.' },
          { sentence: 'Живу́ на цій ___.', answer: 'ву́лиці', options: ['ву́лиці', 'ву́лиця', 'ву́лицю'], translation: 'Eu moro nesta rua.' },
          { sentence: 'Мій ___ мали́й.', answer: 'дім', options: ['дім', 'шко́ла', 'магази́н'], translation: 'A minha casa é pequena.' },
        ],
        voice: {
          bot: 'Де шко́ла?',
          botTranslation: 'Onde fica a escola?',
          expected: ['Шко́ла у мі́сті, на цій ву́лиці.', 'шко́ла', 'ву́лиці'],
          hint: 'Diga onde é a escola com “Шко́ла у мі́сті…” e use o locativo “на… ву́лиці”.',
        },
        communityPrompt: 'Descreva o seu bairro em ucraniano: a escola, a loja ou o hospital mais próximo, usando “у” ou “на” com o locativo.',
      },
      {
        id: 'uk-u3-l2',
        title: 'О́дяг',
        kind: 'licao',
        words: ['соро́чка', 'штани́', 'череви́к', 'ку́ртка', 'черво́ний', 'си́ній'],
        cloze: [
          { sentence: 'Ма́ю нову́ ___.', answer: 'соро́чку', options: ['соро́чку', 'соро́чка', 'соро́чки'], translation: 'Eu tenho uma camisa nova.' },
          { sentence: 'Мої́ ___ чо́рні.', answer: 'штани́', options: ['штани́', 'череви́ки', 'ку́ртка'], translation: 'As minhas calças são pretas.' },
          { sentence: 'Моя́ ___ си́ня.', answer: 'ку́ртка', options: ['ку́ртка', 'соро́чка', 'череви́к'], translation: 'O meu casaco é azul.' },
        ],
        voice: {
          bot: 'Які́ в те́бе череви́ки?',
          botTranslation: 'Que sapatos você tem?',
          expected: ['Ма́ю черво́ні череви́ки.', 'ма́ю', 'череви́ки'],
          hint: 'Descreva os seus sapatos com “Ма́ю… череви́ки” e uma cor.',
        },
        communityPrompt: 'Descreva três peças de roupa que você está usando hoje, com a cor de cada uma: “Ма́ю… соро́чку/штани́/череви́ки.”.',
      },
      {
        id: 'uk-u3-l3',
        title: 'Тест: мі́сто і о́дяг',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Де ти працю́єш і що в те́бе на собі́ сього́дні?',
          botTranslation: 'Onde você trabalha e o que você está vestindo hoje?',
          expected: ['Працю́ю в шко́лі. Ма́ю си́ню соро́чку і чо́рні штани́.', 'працю́ю в', 'ма́ю'],
          hint: 'Diga onde trabalha com “Працю́ю в/на…” e descreva a roupa com “Ма́ю…”.',
        },
        communityPrompt: 'Escreva cinco frases misturando lugares da cidade e roupas, usando “у”, “на” e “ма́ю”.',
      },
    ],
  },
  {
    id: 'uk-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Робо́та, почуття́ і мину́ле',
    emoji: '💼',
    card: {
      id: 'uk-c4',
      title: 'O passado sem auxiliar: був, була́, було́, були́',
      emoji: '🕰️',
      history:
        'O passado ucraniano também vem do antigo particípio ativo em “-l” das línguas eslavas, mas o ucraniano deu um passo além do eslovaco e do tcheco: perdeu o verbo auxiliar “бу́ти” em TODAS as pessoas, não só na 3ª. Por isso “я був” (eu fui/estive) já basta sozinho, sem precisar de nenhum “є” extra — diferente de línguas eslavas vizinhas, que ainda guardam um pedacinho desse auxiliar na 1ª e na 2ª pessoa.',
      culture_tip:
        'Perguntar “Що ти роби́в?” (o que você fez/estava fazendo) é uma forma comum de abrir uma conversa sobre o trabalho ou o dia de alguém.',
      grammar_why:
        'O passado troca o “-ти” do infinitivo por um sufixo que concorda em gênero e número com o sujeito: “-в” (masculino), “-ла” (feminino), “-ло” (neutro), “-ли” (plural) — sem nenhum auxiliar. O futuro de verbos imperfectivos tem duas formas equivalentes: composta (“бу́ду вчи́ти”) e sintética (“вчи́тиму”, sufixo grudado no infinitivo); verbos perfectivos, como “ви́вчити”, já usam a conjugação do presente para falar do futuro.',
      grammar_examples: [
        ['Я був у шко́лі.', 'Eu estive na escola. (quem fala é homem)'],
        ['Вона́ мала́ кота́.', 'Ela tinha um gato.'],
        ['Я бу́ду вчи́ти украї́нську.', 'Eu vou estudar ucraniano.'],
        ['Я вчи́тиму украї́нську.', 'Eu vou estudar ucraniano. (forma sintética, mesmo sentido)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uk-u4-l1',
        title: 'Профе́сії і почуття́',
        kind: 'licao',
        words: ['лі́кар', 'студе́нт', 'ку́хар', 'щасли́вий', 'сумни́й', 'вто́млений'],
        cloze: [
          { sentence: 'Мій та́то — ___.', answer: 'лі́кар', options: ['лі́кар', 'студе́нт', 'ку́хар'], translation: 'O meu pai é médico.' },
          { sentence: 'Я ду́же ___.', answer: 'вто́млений', options: ['вто́млений', 'щасли́вий', 'студе́нт'], translation: 'Eu estou muito cansado. (quem fala é homem)' },
          { sentence: 'Моя́ сестра́ — ___.', answer: 'студе́нтка', options: ['студе́нтка', 'ку́хар', 'лі́кар'], translation: 'A minha irmã é estudante.' },
        ],
        voice: {
          bot: 'Яка́ твоя́ робо́та?',
          botTranslation: 'Qual é o seu trabalho?',
          expected: ['Я студе́нт і я щасли́вий.', 'я', 'щасли́вий'],
          hint: 'Diga a sua profissão com “Я…” e como você se sente.',
        },
        communityPrompt: 'Conte a sua profissão (ou a de alguém da família) e como você está hoje, usando uma palavra de profissão e de sentimento.',
      },
      {
        id: 'uk-u4-l2',
        title: 'Що ти роби́в учо́ра?',
        kind: 'licao',
        words: ['голо́дний', 'два́дцять', 'три́дцять', 'сто', 'бу́ти', 'ма́ти'],
        cloze: [
          { sentence: 'Учо́ра я ___ у шко́лі.', answer: 'був', options: ['був', 'була́', 'є'], translation: 'Ontem eu estive na escola. (quem fala é homem)' },
          { sentence: 'Вона́ ___ кота́.', answer: 'мала́', options: ['мала́', 'мав', 'ма́є'], translation: 'Ela tinha um gato.' },
          { sentence: 'Мені́ ___ ро́ків.', answer: 'два́дцять', options: ['два́дцять', 'три́дцять', 'сто'], translation: 'Eu tenho vinte anos.' },
        ],
        voice: {
          bot: 'Що ти роби́в учо́ра?',
          botTranslation: 'O que você fez ontem?',
          expected: ['Я працюва́в, а пото́м був голо́дний.', 'працюва́в', 'голо́дний'],
          hint: 'Conte o que fez ontem com o passado: “Я працюва́в/працюва́ла…”.',
        },
        communityPrompt: 'Escreva três frases no passado sobre ontem, usando “був/була́” ou “мав/мала́”.',
      },
      {
        id: 'uk-u4-l3',
        title: 'Тест: робо́та, почуття́ і мину́ле',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Що ти роби́в мину́лого ти́жня і яка́ твоя́ робо́та?',
          botTranslation: 'O que você fez na semana passada e qual é o seu trabalho?',
          expected: ['Я працюва́в у ліка́рні. Я лі́кар.', 'працюва́в', 'лі́кар'],
          hint: 'Use o passado (“я працюва́в/працюва́ла…”) e diga a sua profissão (“я…”).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando a sua profissão, como você está e o que você fez ontem, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
