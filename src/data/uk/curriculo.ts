import type { UnitSeed } from '../types';

/**
 * Trilha do ucraniano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois. Todo texto ucraniano
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
];
