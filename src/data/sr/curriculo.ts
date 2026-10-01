import type { UnitSeed } from '../types';

/**
 * Trilha do sérvio: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois. Texto em cirílico,
 * pronúncia ekaviana.
 */
export const UNITS_SR: UnitSeed[] = [
  {
    id: 'sr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво! Први кораци',
    emoji: '👋',
    card: {
      id: 'sr-c1',
      title: '“Escreva como fala”: o alfabeto de Vuk',
      emoji: '🇷🇸',
      history:
        'O sérvio é uma língua eslava meridional. O sérvio, o croata, o bósnio e o montenegrino padrão se baseiam no mesmo grupo de dialetos (o chtokaviano) e se entendem sem dificuldade; cada país tem a sua norma e o seu nome para a língua. No século XIX, o linguista Vuk Stefanović Karadžić reformou o cirílico sérvio com o lema “escreva como fala”: 30 letras, cada uma com um som só. A Constituição da Sérvia põe o cirílico como escrita oficial, mas o alfabeto latino, de mesmas 30 letras (хвала = hvala), também é muito usado; aqui o texto vem em cirílico.',
      culture_tip:
        '“Здраво” é o oi e o tchau entre amigos. Com desconhecidos e mais velhos, diga “Добар дан” e trate a pessoa por “ви”, com o verbo no plural. “Хвала лепо” (obrigado, lit. “obrigado bonito”) é o jeito caloroso de agradecer.',
      grammar_why:
        'O sérvio não tem artigos: “пас” é “o cachorro” ou “um cachorro”. A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair. O “sou” é uma palavrinha átona, “сам”, que não pode abrir a frase: diz-se “Ја сам Ана” ou “Из Београда сам”. O nome se diz com um verbo reflexivo: “зовем се Ана” (eu me chamo Ana).',
      grammar_examples: [
        ['Здраво! Зовем се Ана.', 'Oi! Eu me chamo Ana.'],
        ['Како се зовеш?', 'Como você se chama?'],
        ['Он је из Новог Сада, она је из Београда.', 'Ele é de Novi Sad, ela é de Belgrado.'],
        ['Добро, хвала. А ти?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['В, Н, Р, С', 'falsos amigos visuais: В = “v”, Н = “n”, Р = “r”, С = “s” (latino: v, n, r, s)', 'вода (água), не'],
        ['Ј', '“i” curto de “pai” (latino: j)', 'ја (eu), мајка'],
        ['Љ / Њ', '“lh” / “nh” (latino: lj / nj)', 'пријатељ, њихов'],
        ['Ч / Ћ', '“tch” duro / “tch” macio, quase “ti” (latino: č / ć)', 'четири, ноћ'],
        ['Џ / Ђ', '“dj” duro / “dj” macio (latino: dž / đ)', 'довиђења'],
        ['Ж / Ш', '“j” de “já” / “ch” de “chá” (latino: ž / š)', 'живим, шест'],
        ['Ц', '“ts” de “tsunami” (latino: c)', 'отац (pai)'],
        ['Х', '“rr” aspirado (latino: h)', 'хвала, хлеб'],
        ['Р entre consoantes', 'o “r” pode ser a vogal da sílaba', 'црн (preto), четвртак'],
      ],
    },
    lessons: [
      {
        id: 'sr-u1-l1',
        title: 'Здраво, хвала, довиђења!',
        kind: 'licao',
        words: ['здраво', 'добар дан', 'добро вече', 'лаку ноћ', 'довиђења', 'хвала'],
        cloze: [
          { sentence: '___, Јелена! Како си?', answer: 'Здраво', options: ['Здраво', 'Лаку ноћ', 'Хвала'], translation: 'Oi, Jelena! Como vai?' },
          { sentence: 'Већ је касно. ___!', answer: 'Лаку ноћ', options: ['Лаку ноћ', 'Добар дан', 'Здраво'], translation: 'Já é tarde. Boa noite!' },
          { sentence: 'Много ___!', answer: 'хвала', options: ['хвала', 'здраво', 'довиђења'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Здраво! Како си?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Добро, хвала! А ти?', 'добро', 'хвала'],
          hint: 'Responda que vai bem e devolva a pergunta: “Добро, хвала! А ти?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em sérvio: um de dia (“Добар дан…”), um à noite (“Добро вече…”) e uma despedida (“Довиђења” ou “Лаку ноћ”).',
      },
      {
        id: 'sr-u1-l2',
        title: 'Ја, ти, он, она',
        kind: 'licao',
        words: ['ја', 'ти', 'он', 'она', 'звати се', 'име'],
        cloze: [
          { sentence: '___ сам Јелена.', answer: 'Ја', options: ['Ја', 'Ти', 'Он'], translation: 'Eu sou a Jelena.' },
          { sentence: 'А ___? Како се зовеш?', answer: 'ти', options: ['ти', 'он', 'она'], translation: 'E você? Como você se chama?' },
          { sentence: '___ је из Новог Сада. То је мој брат.', answer: 'Он', options: ['Он', 'Она', 'Ја'], translation: 'Ele é de Novi Sad. É o meu irmão.' },
        ],
        voice: {
          bot: 'Здраво! Како се зовеш?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Зовем се Ана. А ти?', 'зовем се', 'а ти'],
          hint: 'Diga o seu nome com “Зовем се…” e devolva a pergunta com “А ти?”.',
        },
        communityPrompt: 'Apresente-se em sérvio: diga o seu nome com “Зовем се…” e pergunte o nome de alguém com “Како се зовеш?”.',
      },
      {
        id: 'sr-u1-l3',
        title: 'Тест: први кораци',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здраво! Зовем се Марко. Како се зовеш и одакле си?',
          botTranslation: 'Oi! Eu me chamo Marko. Como você se chama e de onde você é?',
          expected: ['Здраво! Зовем се Лусија и ја сам из Сао Паула.', 'зовем се', 'из', 'здраво'],
          hint: 'Devolva o cumprimento (“Здраво!”), diga o nome com “Зовем се…” e a cidade com “Ја сам из…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Зовем се…”, cidade com “Ја сам из…” e uma despedida.',
      },
    ],
  },
  {
    id: 'sr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Породица и кућа',
    emoji: '👪',
    card: {
      id: 'sr-c2',
      title: 'Três gêneros, “мој / моја / моје” e o “немам”',
      emoji: '🧭',
      history:
        'O sérvio tem sete casos, um deles o vocativo, usado para chamar alguém. A terminação muda conforme a função na frase: “Београд” vira “из Београда” (de Belgrado) e “у Београду” (em Belgrado); “кафа” vira “једну кафу, молим” (um café, por favor).',
      culture_tip:
        'Muitas famílias sérvias ortodoxas celebram a “слава”, a festa do santo protetor da família, herdada de pai para filho: a casa se abre para parentes e amigos, com pão ritual e trigo cozido. A tradição está na lista do patrimônio imaterial da UNESCO.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (град, брат), -а → feminino (кућа, вода), -о/-е → neutro (млеко, име). O possessivo concorda: “мој брат”, “моја сестра”, “моје име”. Para negar, “не” vem antes do verbo, mas alguns verbos grudam a negação: “немам” (não tenho), “нисам” (não sou), “нећу” (não quero).',
      grammar_examples: [
        ['Моја породица је велика.', 'A minha família é grande.'],
        ['Имам брата и сестру.', 'Tenho um irmão e uma irmã.'],
        ['Млеко је бело.', 'O leite é branco.'],
        ['Не знам.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-а → -у', 'depois de “имам” (tenho), a palavra feminina muda: é o acusativo', 'сестра → имам сестру'],
        ['не + сам = нисам', 'algumas negações viram uma palavra só', 'немам, нисам, нећу'],
      ],
    },
    lessons: [
      {
        id: 'sr-u2-l1',
        title: 'Моја породица',
        kind: 'licao',
        words: ['породица', 'мајка', 'отац', 'брат', 'сестра', 'имати'],
        cloze: [
          { sentence: 'Моја ___ се зове Јелена.', answer: 'мајка', options: ['мајка', 'отац', 'брат'], translation: 'A minha mãe se chama Jelena.' },
          { sentence: 'Ја ___ брата и сестру.', answer: 'имам', options: ['имам', 'сам', 'идем'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Мој ___ је из Новог Сада.', answer: 'отац', options: ['отац', 'сестра', 'мајка'], translation: 'O meu pai é de Novi Sad.' },
        ],
        voice: {
          bot: 'Имаш ли брата или сестру?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Да, имам брата и сестру.', 'имам', 'брата', 'сестру'],
          hint: 'Responda com “Да, имам…” ou “Не, немам…”.',
        },
        communityPrompt: 'Descreva a sua família em sérvio: se você tem irmão (брат) ou irmã (сестра) e como se chamam os seus pais (“Моја мајка се зове…”).',
      },
      {
        id: 'sr-u2-l2',
        title: 'Код куће',
        kind: 'licao',
        words: ['кућа', 'вода', 'хлеб', 'млеко', 'сир', 'волети'],
        cloze: [
          { sentence: 'Моја ___ је мала.', answer: 'кућа', options: ['кућа', 'вода', 'млеко'], translation: 'A minha casa é pequena.' },
          { sentence: 'Пијем ___.', answer: 'воду', options: ['воду', 'хлеб', 'сир'], translation: 'Eu bebo água.' },
          { sentence: 'Једем хлеб и ___.', answer: 'сир', options: ['сир', 'воду', 'млеко'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Шта једеш за доручак?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Једем хлеб и сир.', 'једем', 'хлеб', 'сир'],
          hint: 'Diga o que come com “Једем…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Једем…” e “Пијем…”.',
      },
      {
        id: 'sr-u2-l3',
        title: 'Тест: породица и кућа',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Причај о породици: имаш ли брата или сестру?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Да, имам сестру. Зове се Марија.', 'имам', 'зове се'],
          hint: 'Diga se tem irmãos (“имам…”) e o nome deles (“зове се…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “имам”, “зове се” e “је”.',
      },
    ],
  },
];
