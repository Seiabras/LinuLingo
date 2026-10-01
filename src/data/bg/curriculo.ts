import type { UnitSeed } from '../types';

/**
 * Trilha do búlgaro: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois. Todo texto búlgaro
 * leva a sílaba tônica marcada (U+0301), menos os monossílabos.
 */
export const UNITS_BG: UnitSeed[] = [
  {
    id: 'bg-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраве́й! Пъ́рви стъ́пки',
    emoji: '👋',
    card: {
      id: 'bg-c1',
      title: 'Onde o cirílico nasceu',
      emoji: '🇧🇬',
      history:
        'O búlgaro é uma língua eslava meridional, parente próxima do macedônio. Foi no Primeiro Império Búlgaro, no fim do século IX, que discípulos de Cirilo e Metódio montaram o alfabeto cirílico, a partir das letras gregas, para escrever a língua eslava da liturgia — o eslavo eclesiástico antigo, a língua eslava escrita mais antiga que se conhece. Todo 24 de maio a Bulgária comemora, com feriado nacional, o alfabeto e a cultura escrita. Hoje o búlgaro é a língua oficial da Bulgária e, desde 2007, uma das línguas oficiais da União Europeia, a primeira escrita em cirílico.',
      culture_tip:
        'Cuidado com a cabeça: tradicionalmente, na Bulgária, balançar a cabeça de um lado para o outro quer dizer “sim” (да), e acenar para cima e para baixo quer dizer “não” (не). Muita gente acostumada com estrangeiros faz o gesto ao contrário, então confie mais na palavra do que no gesto. “Здраве́й” é o “oi” a uma pessoa; “здраве́йте”, a várias ou com respeito.',
      grammar_why:
        'O búlgaro é diferente dos outros eslavos: os substantivos quase não mudam de forma (não há casos), mas ganham um artigo definido grudado no fim — “къ́ща” (casa) → “къ́щата” (a casa). E não existe infinitivo: o verbo aparece no dicionário na forma “eu” (“и́мам” = eu tenho), e “eu quero aprender” se diz “и́скам да у́ча” (quero que eu aprenda).',
      grammar_examples: [
        ['Здраве́й! Ка́звам се А́нна.', 'Oi! Eu me chamo Anna.'],
        ['Как се ка́зваш?', 'Como você se chama?'],
        ['Той е от Пло́вдив, тя е от Со́фия.', 'Ele é de Plovdiv, ela é de Sófia.'],
        ['Добре́, благодаря́. А ти?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['В, Н, Р, С', 'falsos amigos visuais: В = “v”, Н = “n”, Р = “r”, С = “s”', 'вода́ (água), ни́е (nós)'],
        ['У', '“u” de “uva”', 'у́тре (amanhã)'],
        ['Ъ', 'vogal própria do búlgaro, parecida com o “a” fechado de “cama”', 'съм (sou), къде́ (onde)'],
        ['Щ', '“cht”: no búlgaro, “ch” + “t”', 'нощ (noite), къ́ща (casa)'],
        ['Ж / Ш / Ч / Ц', '“j” de “já” / “ch” de “chá” / “tch” / “ts”', 'живе́я, шест, чай, це́на'],
        ['Х', '“rr” raspado na garganta', 'хляб (pão)'],
        ['Я / Ю', '“iá” / “iú”', 'ям (como), ю́ни (junho)'],
        ['Й', '“i” curto de “pai”', 'той (ele), чай'],
        ['Ь', 'só aparece antes de “о”: “ьо” = “io”', 'си́ньо (azul, neutro)'],
        ['acento', 'a tônica é livre e vem marcada aqui; os nativos não escrevem essa marca', 'благодаря́, мо́ля'],
      ],
    },
    lessons: [
      {
        id: 'bg-u1-l1',
        title: 'Здраве́й, благодаря́, дови́ждане!',
        kind: 'licao',
        words: ['здраве́й', 'до́бър ден', 'до́бър ве́чер', 'ле́ка нощ', 'дови́ждане', 'благодаря́'],
        cloze: [
          { sentence: '___, Мари́я! Как си?', answer: 'Здраве́й', options: ['Здраве́й', 'Ле́ка нощ', 'Благодаря́'], translation: 'Oi, Maria! Como vai?' },
          { sentence: 'Ве́че е къ́сно. ___!', answer: 'Ле́ка нощ', options: ['Ле́ка нощ', 'До́бър ден', 'Здраве́й'], translation: 'Já é tarde. Boa noite!' },
          { sentence: 'Мно́го ___!', answer: 'благодаря́', options: ['благодаря́', 'здраве́й', 'дови́ждане'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Здраве́й! Как си?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Добре́, благодаря́! А ти?', 'добре́', 'благодаря́'],
          hint: 'Responda que vai bem e devolva a pergunta: “Добре́, благодаря́! А ти?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em búlgaro: um de dia (“До́бър ден…”), um à noite (“До́бър ве́чер…”) e uma despedida (“Дови́ждане” ou “Ле́ка нощ”).',
      },
      {
        id: 'bg-u1-l2',
        title: 'Аз, ти, той, тя',
        kind: 'licao',
        words: ['аз', 'ти', 'той', 'тя', 'ка́звам се', 'и́ме'],
        cloze: [
          { sentence: '___ съм Еле́на.', answer: 'Аз', options: ['Аз', 'Ти', 'Той'], translation: 'Eu sou a Elena.' },
          { sentence: 'А ___? Как се ка́зваш?', answer: 'ти', options: ['ти', 'той', 'тя'], translation: 'E você? Como você se chama?' },
          { sentence: '___ е от Пло́вдив. Това́ е брат ми.', answer: 'Той', options: ['Той', 'Тя', 'Аз'], translation: 'Ele é de Plovdiv. É o meu irmão.' },
        ],
        voice: {
          bot: 'Здраве́й! Как се ка́зваш?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ка́звам се А́на. А ти?', 'ка́звам се', 'а ти'],
          hint: 'Diga o seu nome com “Ка́звам се…” e devolva a pergunta com “А ти?”.',
        },
        communityPrompt: 'Apresente-se em búlgaro: diga o seu nome com “Ка́звам се…” e pergunte o nome de alguém com “Как се ка́зваш?”.',
      },
      {
        id: 'bg-u1-l3',
        title: 'Тест: пъ́рви стъ́пки',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здраве́й! Ка́звам се Гео́рги. Как се ка́зваш и откъде́ си?',
          botTranslation: 'Oi! Eu me chamo Gueórgui. Como você se chama e de onde você é?',
          expected: ['Здраве́й! Ка́звам се Лу́сия и съм от Са́о Па́уло.', 'ка́звам се', 'съм от', 'здраве́й'],
          hint: 'Devolva o cumprimento (“Здраве́й!”), diga o nome com “Ка́звам се…” e a cidade com “Аз съм от…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ка́звам се…”, cidade com “Аз съм от…” e uma despedida.',
      },
    ],
  },
  {
    id: 'bg-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Семе́йство и дом',
    emoji: '👪',
    card: {
      id: 'bg-c2',
      title: 'Três gêneros, o artigo no fim e o “ня́мам”',
      emoji: '🧭',
      history:
        'No passado, o búlgaro tinha casos como o russo e o polonês, mas ao longo da Idade Média foi perdendo as terminações e passou a mostrar a função das palavras com preposições e com a ordem da frase, como o português. No mesmo período ganhou o artigo definido depois do substantivo, um traço que divide com o macedônio, o romeno e o albanês, línguas vizinhas dos Bálcãs.',
      culture_tip:
        'O café da manhã búlgaro clássico é a “ба́ница”, uma torta de massa folhada com recheio de “си́рене”, o queijo branco salgado do país, muitas vezes acompanhada de iogurte ou de “бо́за”, uma bebida fermentada de cereais.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros: consoante → masculino (град, брат), -а/-я → feminino (къ́ща, вода́), -о/-е → neutro (мля́ко, ку́че). O artigo definido gruda no fim e muda com o gênero: “хля́бът” (o pão), “къ́щата” (a casa), “мля́кото” (o leite). Com parentes, o possessivo curto vem depois: “ма́йка ми” (minha mãe). Para negar, “не” antes do verbo; “ter” negado vira “ня́мам” (não tenho).',
      grammar_examples: [
        ['Семе́йството ми е голя́мо.', 'A minha família é grande.'],
        ['И́мам брат и сестра́.', 'Tenho um irmão e uma irmã.'],
        ['Мля́кото е бя́ло.', 'O leite é branco.'],
        ['Не зна́я.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-ът / -та / -то', 'o artigo definido gruda no fim: masculino, feminino, neutro', 'хля́бът, къ́щата, мля́кото'],
        ['ма́йка ми', 'o possessivo curto vem depois do nome', 'ба́ща ми (meu pai), брат ми (meu irmão)'],
      ],
    },
    lessons: [
      {
        id: 'bg-u2-l1',
        title: 'Семе́йството ми',
        kind: 'licao',
        words: ['семе́йство', 'ма́йка', 'ба́ща', 'брат', 'сестра́', 'и́мам'],
        cloze: [
          { sentence: '___ ми се ка́зва Еле́на.', answer: 'Ма́йка', options: ['Ма́йка', 'Ба́ща', 'Брат'], translation: 'A minha mãe se chama Elena.' },
          { sentence: 'Аз ___ брат и сестра́.', answer: 'и́мам', options: ['и́мам', 'съм', 'оти́вам'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: '___ ми е от Пло́вдив. Той е учи́тел.', answer: 'Ба́ща', options: ['Ба́ща', 'Сестра́', 'Ма́йка'], translation: 'O meu pai é de Plovdiv. Ele é professor.' },
        ],
        voice: {
          bot: 'И́маш ли брат и́ли сестра́?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Да, и́мам брат и сестра́.', 'и́мам', 'брат', 'сестра́'],
          hint: 'Responda com “Да, и́мам…” ou “Не, ня́мам…”.',
        },
        communityPrompt: 'Descreva a sua família em búlgaro: se você tem irmão (брат) ou irmã (сестра́) e como se chamam os seus pais (“Ма́йка ми се ка́зва…”).',
      },
      {
        id: 'bg-u2-l2',
        title: 'Вкъ́щи',
        kind: 'licao',
        words: ['къ́ща', 'вода́', 'хляб', 'мля́ко', 'си́рене', 'харе́свам'],
        cloze: [
          { sentence: '___ ми е ма́лка.', answer: 'Къ́щата', options: ['Къ́щата', 'Вода́та', 'Мля́кото'], translation: 'A minha casa é pequena.' },
          { sentence: 'Пи́я ___.', answer: 'вода́', options: ['вода́', 'хляб', 'си́рене'], translation: 'Eu bebo água.' },
          { sentence: 'Ям хляб и ___.', answer: 'си́рене', options: ['си́рене', 'вода́', 'мля́ко'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Какво́ яде́ш за заку́ска?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Ям хляб и си́рене.', 'ям', 'хляб', 'си́рене'],
          hint: 'Diga o que come com “Ям…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ям…” e “Пи́я…”.',
      },
      {
        id: 'bg-u2-l3',
        title: 'Тест: семе́йство и дом',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Разка́жи за семе́йството си: и́маш ли брат и́ли сестра́?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Да, и́мам сестра́. Ка́зва се Мари́я.', 'и́мам', 'ка́зва се'],
          hint: 'Diga se tem irmãos (“и́мам…”) e o nome deles (“ка́зва се…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “и́мам”, “ка́зва се” e “е”.',
      },
    ],
  },
];
