import type { UnitSeed } from '../types';

/**
 * Trilha do persa (fārsi do Irã): as quatro unidades do A1 e do A2 (pacote marcado como incompleto
 * até A2.2 — ver `incomplete` em index.ts). De B1 ao C2 chega depois.
 *
 * Fontes das notas culturais e gramaticais:
 * - Wikipedia, «Persian language» (classificação, países, pluricentrismo)
 *   ‹https://en.wikipedia.org/wiki/Persian_language›
 * - Wikipedia, «Persian grammar» (sem gênero, ordem SOV, ezāfe, plural ها-/ان-, comparativo
 *   تر-/ترین-, futuro com خواستن) ‹https://en.wikipedia.org/wiki/Persian_grammar›
 * - Wikipedia, «Ezafe» ‹https://en.wikipedia.org/wiki/Ezafe›
 * - Wikipedia, «Persian alphabet» (پ چ ژ گ) ‹https://en.wikipedia.org/wiki/Persian_alphabet›
 * - Wikipedia, «Taarof» (cortesia de insistir/recusar) ‹https://en.wikipedia.org/wiki/Taarof›
 * - Wikipedia, «Grand Bazaar, Tehran» ‹https://en.wikipedia.org/wiki/Grand_Bazaar,_Tehran›
 */
export const UNITS_FA: UnitSeed[] = [
  {
    id: 'fa-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام! اولین قدم‌ها',
    emoji: '👋',
    card: {
      id: 'fa-c1',
      title: 'Uma língua sem gênero gramatical',
      emoji: '🗣️',
      history:
        'O persa (فارسی, fārsi) é uma língua indo-europeia do ramo iraniano ocidental, parente distante do português. É a língua nacional do Irã e, sob outros nomes, também língua oficial no Afeganistão (dari) e no Tajiquistão (tajique, escrito em alfabeto cirílico): os três formam uma única língua pluricêntrica, com variantes faladas que se entendem entre si. O persa médio, entre o persa antigo e o moderno, perdeu o número dual e todo o gênero gramatical que a língua tinha — por isso o persa de hoje é uma das poucas línguas indo-europeias sem gênero gramatical algum, nem mesmo nos pronomes.',
      culture_tip:
        'No Irã existe o “taarof” (تعارف): um jogo de cortesia em que um convite ou uma oferta costuma ser recusado educadamente antes de aceito — às vezes repetindo-se três vezes — e recusar pagamento (um motorista de táxi, por exemplo) também é parte do ritual. Entender o taarof é tão importante quanto o vocabulário pra entender uma conversa real.',
      grammar_why:
        'Em persa, um único pronome, “او” (u), cobre “ele”, “ela” e até “isso” — não existe distinção de gênero gramatical nenhuma. E o verbo “ser/estar” não é uma palavra separada no presente: vira uma terminação grudada na palavra anterior (-am “eu sou”, -i “tu és”, -ast “ele/ela é”).',
      grammar_examples: [
        ['سلام! من خوب هستم.', 'Oi! Eu estou bem.'],
        ['او از ایران است.', 'Ele/ela é do Irã.'],
        ['نامِ شما چیست؟', 'Qual é o seu nome?'],
        ['تو خوب هستی؟', 'Você está bem?'],
      ],
      character_guide: [
        ['پ', 'som de “p”: uma das 4 letras que o árabe não tem', 'پدر (pedar, pai)'],
        ['چ', 'som de “tch”: outra letra que o árabe não tem', 'چای (chây, chá)'],
        ['ژ', 'som do “j” do francês (como em “jamais”): também não existe no árabe', 'ژاله (nome próprio)'],
        ['گ', 'som de “g” duro: a quarta letra extra do persa', 'گربه (gorbe, gato)'],
        ['ا / آ', 'vogal “a”/“â”; a escrita persa corre da direita pra esquerda', 'آب (âb, água)'],
      ],
    },
    lessons: [
      {
        id: 'fa-u1-l1',
        title: 'سلام، لطفاً، ممنون',
        kind: 'licao',
        words: ['سلام', 'خداحافظ', 'لطفاً', 'خیلی ممنون', 'ببخشید', 'بله'],
        cloze: [
          { sentence: '___ ! حالِ شما چطور است؟', answer: 'سلام', options: ['سلام', 'خداحافظ', 'بله'], translation: 'Oi! Como vai (formal)?' },
          { sentence: 'یک چای، ___ .', answer: 'لطفاً', options: ['لطفاً', 'بله', 'ببخشید'], translation: 'Um chá, por favor.' },
          { sentence: '___ ، خداحافظ!', answer: 'خیلی ممنون', options: ['خیلی ممنون', 'ببخشید', 'بله'], translation: 'Muito obrigado, tchau!' },
        ],
        voice: {
          bot: 'سلام! حالِ شما چطور است؟',
          botTranslation: 'Oi! Como você está (formal)?',
          expected: ['من خوب هستم. خیلی ممنون.', 'خوب هستم', 'خیلی ممنون'],
          hint: 'Responda que está bem (“man xub hastam”) e agradeça (“xeyli mamnun”).',
        },
        communityPrompt: 'Escreva três frases em persa: um cumprimento (“سلام”), uma pergunta de como vai (“حالِ شما چطور است؟”) e uma despedida (“خداحافظ”).',
      },
      {
        id: 'fa-u1-l2',
        title: 'من، تو، او',
        kind: 'licao',
        words: ['من', 'تو', 'او', 'نام', 'شما', 'نه'],
        cloze: [
          { sentence: '___ خوب هستم.', answer: 'من', options: ['من', 'تو', 'او'], translation: 'Eu estou bem.' },
          { sentence: 'نامِ ___ چیست؟', answer: 'شما', options: ['شما', 'من', 'او'], translation: 'Qual é o seu nome (formal)?' },
          { sentence: '___ ، خیلی ممنون.', answer: 'نه', options: ['نه', 'بله', 'او'], translation: 'Não, muito obrigado.' },
        ],
        voice: {
          bot: 'نامِ شما چیست؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['نامِ من آنا است.', 'نامِ من', 'است'],
          hint: 'Diga seu nome com “nâm-e man … ast” (“nâm-e man Ana ast”).',
        },
        communityPrompt: 'Apresente-se em persa: diga seu nome com “نامِ من … است” e pergunte o nome de alguém com “نامِ شما چیست؟”.',
      },
      {
        id: 'fa-u1-l3',
        title: 'Test: اولین قدم‌ها',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سلام! نامِ من مریم است. نامِ شما چیست؟',
          botTranslation: 'Oi! Meu nome é Maryam. Qual é o seu nome?',
          expected: ['سلام! نامِ من آنا است.', 'نامِ من', 'سلام'],
          hint: 'Devolva o cumprimento (“سلام”) e diga seu nome com “نامِ من … است”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“سلام”), nome (“نامِ من … است”) e despedida (“خداحافظ”).',
      },
    ],
  },
  {
    id: 'fa-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'خانواده و بازار',
    emoji: '👪',
    card: {
      id: 'fa-c2',
      title: 'A ezāfe: o “-e” que liga as palavras',
      emoji: '🔗',
      history:
        'Quando o persa perdeu seu antigo sistema de casos gramaticais, sobrou um jeito só de ligar um substantivo ao que vem depois dele — pra indicar posse, descrição ou outra relação: a “ezāfe”, um “-e” átono (“-ye” depois de vogal) que quase nunca aparece escrito no alfabeto persa, mas se pronuncia sempre. No Irã, um dos lugares onde se ouve mais ezāfe por minuto é o Grande Bazar de Teerã: um labirinto de corredores com mais de 10 km de extensão ao todo, que já era ponto de comércio desde a conquista muçulmana da Pérsia (séc. 7) e cresceu sobretudo a partir da época safávida.',
      culture_tip:
        'O mesmo “taarof” da primeira unidade vale pro bazar: um convite ou uma oferta de um vendedor conhecido pode vir acompanhada da mesma cortesia de insistir e recusar educadamente antes de fechar negócio.',
      grammar_why:
        'A ezāfe liga um substantivo ao que vem depois: um possuidor (“برادرِ مریم”, o irmão da Maryam), um adjetivo (“خانه‌ی کوچک”, a casa pequena) ou outro substantivo. Depois de consoante ela soa “-e”; depois de vogal, “-ye” — e aí aparece escrita como “ی”, como em “پایِ او” (o pé dele/dela).',
      grammar_examples: [
        ['خانه‌ی من کوچک است.', 'Minha casa é pequena.'],
        ['برادرِ مریم بزرگ است.', 'O irmão da Maryam é grande.'],
        ['پایِ او کوچک است.', 'O pé dele/dela é pequeno.'],
        ['من یک برادر دارم.', 'Eu tenho um irmão.'],
      ],
      character_guide: [
        ['-ِ', 'a ezāfe depois de consoante: quase nunca é escrita, mas sempre se pronuncia “-e”', 'برادرِ (barâdar-e, irmão de)'],
        ['-ی', 'a ezāfe depois de vogal: essa sim aparece escrita, como “-ye”', 'خانه‌ی / پایِ (xâne-ye, pâ-ye)'],
      ],
    },
    lessons: [
      {
        id: 'fa-u2-l1',
        title: 'خانواده‌ی من',
        kind: 'licao',
        words: ['خانواده', 'مادر', 'پدر', 'برادر', 'خواهر', 'داشتن'],
        cloze: [
          { sentence: 'من یک ___ دارم.', answer: 'برادر', options: ['برادر', 'مادر', 'پدر'], translation: 'Eu tenho um irmão.' },
          { sentence: 'او ___ من است.', answer: 'مادر', options: ['مادر', 'پدر', 'خواهر'], translation: 'Ela é minha mãe.' },
          { sentence: 'این ___ بزرگ است.', answer: 'خانواده', options: ['خانواده', 'خانه', 'بازار'], translation: 'Esta família é grande.' },
        ],
        voice: {
          bot: 'شما خواهر یا برادر دارید؟',
          botTranslation: 'Você tem irmã ou irmão (formal)?',
          expected: ['بله، من یک برادر دارم.', 'من یک برادر دارم', 'بله'],
          hint: 'Responda com “بله، من یک … دارم” ou “نه”.',
        },
        communityPrompt: 'Descreva sua família em persa: quantos irmãos (برادر) e irmãs (خواهر) você tem, usando “من … دارم”.',
      },
      {
        id: 'fa-u2-l2',
        title: 'در بازار',
        kind: 'licao',
        words: ['بازار', 'خانه', 'نان', 'چای', 'برنج', 'خوردن'],
        cloze: [
          { sentence: '___ بزرگ است.', answer: 'بازار', options: ['بازار', 'خانه', 'نان'], translation: 'O bazar é grande.' },
          { sentence: 'من ___ می‌خورم.', answer: 'نان', options: ['نان', 'چای', 'برنج'], translation: 'Eu como pão.' },
          { sentence: '___ سفید است.', answer: 'برنج', options: ['برنج', 'نان', 'چای'], translation: 'O arroz é branco.' },
        ],
        voice: {
          bot: 'شما چه می‌خورید؟',
          botTranslation: 'O que você come (formal)?',
          expected: ['من نان می‌خورم.', 'من نان می‌خورم', 'نان'],
          hint: 'Diga o que come com “من … می‌خورم”.',
        },
        communityPrompt: 'Escreva o que você come, usando “من … می‌خورم” com نان، برنج ou outra palavra de comida.',
      },
      {
        id: 'fa-u2-l3',
        title: 'Test: خانواده و بازار',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'شما خواهر یا برادر دارید؟ نامِ او چیست؟',
          botTranslation: 'Você tem irmã ou irmão (formal)? Qual é o nome dele/dela?',
          expected: ['بله، من یک خواهر دارم. نامِ او مریم است.', 'من یک خواهر دارم', 'نامِ او'],
          hint: 'Diga quantos irmãos tem (“من … دارم”) e o nome (“نامِ او … است”).',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e sua casa, usando “من … دارم”, “نامِ …” e “است”.',
      },
    ],
  },
  {
    id: 'fa-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'آب و هوا و لباس',
    emoji: '🌦️',
    card: {
      id: 'fa-c3',
      title: 'Comparando com تر- e ترین-',
      emoji: '📈',
      history:
        'Pra comparar duas coisas — do tempo de hoje com o de ontem, de uma roupa com outra —, o persa não usa uma palavra separada como o “mais” do português: ele gruda um sufixo direto no adjetivo. A Wikipédia em inglês (“Persian grammar”) chama esse sufixo de “-tar” (تَر) pro comparativo e “-tarin” (تَرین) pro superlativo.',
      culture_tip:
        'Falar do تر- e ترین- é mais fácil com exemplos do dia a dia: “امروز سردتر از دیروز است” (hoje está mais frio que ontem) é uma frase comum de conversa de elevador em qualquer lugar do mundo, inclusive no Irã.',
      grammar_why:
        'O comparativo atributivo (“-tar”) vem depois do substantivo que ele descreve; o superlativo (“-tarin”) vem antes: “بزرگ‌تر” (maior) mas “بزرگ‌ترین دوست” (o maior amigo) — ver o tópico de gramática “fa-g6”.',
      grammar_examples: [
        ['امروز سردتر از دیروز است.', 'Hoje está mais frio que ontem.'],
        ['این پیراهن بزرگ‌تر است.', 'Esta camisa é maior.'],
        ['این کفش کوچک‌ترین است.', 'Este sapato é o menor.'],
        ['باد امروز بزرگ‌تر است.', 'O vento hoje está mais forte (lit. “maior”).'],
      ],
      character_guide: [
        ['تر-', 'sufixo do comparativo, grudado no adjetivo', 'سردتر (sard-tar, mais frio)'],
        ['ترین-', 'sufixo do superlativo, grudado no adjetivo', 'سردترین (sard-tarin, o mais frio)'],
      ],
    },
    lessons: [
      {
        id: 'fa-u3-l1',
        title: 'آب و هوای امروز',
        kind: 'licao',
        words: ['آب و هوا', 'گرم', 'سرد', 'باران', 'برف', 'باد'],
        cloze: [
          { sentence: 'امروز ___ است.', answer: 'گرم', options: ['گرم', 'سرد', 'باد'], translation: 'Hoje está quente.' },
          { sentence: 'فردا ___ می‌آید.', answer: 'باران', options: ['باران', 'برف', 'باد'], translation: 'Amanhã vai chover (lit. “vem chuva”).' },
          { sentence: '___ امروز بزرگ است.', answer: 'باد', options: ['باد', 'برف', 'آب و هوا'], translation: 'O vento hoje está forte.' },
        ],
        voice: {
          bot: 'آب و هوای امروز چطور است؟',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['امروز گرم است.', 'گرم', 'سرد'],
          hint: 'Responda com “امروز … است” e “گرم” ou “سرد”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em persa, comparando com ontem: “امروز سردتر/گرم‌تر از دیروز است”.',
      },
      {
        id: 'fa-u3-l2',
        title: 'لباسِ من',
        kind: 'licao',
        words: ['لباس', 'پیراهن', 'کفش', 'کلاه', 'شهر', 'خیابان'],
        cloze: [
          { sentence: '___ من آبی است.', answer: 'پیراهن', options: ['پیراهن', 'کفش', 'کلاه'], translation: 'Minha camisa é azul.' },
          { sentence: 'این ___ بزرگ است.', answer: 'شهر', options: ['شهر', 'خیابان', 'کفش'], translation: 'Esta cidade é grande.' },
          { sentence: '___ بزرگ‌تر از خانه است.', answer: 'خیابان', options: ['خیابان', 'شهر', 'لباس'], translation: 'A rua é maior que a casa.' },
        ],
        voice: {
          bot: 'لباسِ شما چه رنگی است؟',
          botTranslation: 'De que cor é a sua roupa (formal)?',
          expected: ['پیراهنِ من آبی است.', 'آبی', 'قرمز'],
          hint: 'Responda com “پیراهنِ من … است” e uma cor.',
        },
        communityPrompt: 'Descreva a roupa que você está vestindo hoje em persa, usando “پیراهن”، “کفش” ou “کلاه” e uma cor.',
      },
      {
        id: 'fa-u3-l3',
        title: 'Test: آب و هوا و لباس',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'آب و هوای امروز چطور است؟ و چه لباسی می‌پوشید؟',
          botTranslation: 'Como está o tempo hoje? E que roupa você vai vestir?',
          expected: ['امروز سرد است و من پیراهن می‌پوشم.', 'سرد است', 'پیراهن'],
          hint: 'Diga o tempo (“امروز … است”) e a roupa que vai vestir.',
        },
        communityPrompt: 'Escreva cinco frases comparando o tempo e as roupas, usando “تر-” e “ترین-”.',
      },
    ],
  },
  {
    id: 'fa-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'شغل و احساسات',
    emoji: '🩺',
    card: {
      id: 'fa-c4',
      title: 'O futuro com خواستن (quero)',
      emoji: '⏩',
      history:
        'Falar dos planos de trabalho é um jeito natural de usar o futuro em persa: a Wikipédia em inglês (“Persian grammar”) explica que esse tempo se constrói a partir do presente do verbo خواستن (querer), seguido do infinitivo encurtado do verbo principal — خواهد خورد (xâhad xord) é “ele/ela vai comer”.',
      culture_tip:
        'A mesma Wikipédia nota que esse futuro formal é raro na fala cotidiana — no dia a dia, o persa costuma usar o presente pra falar de planos próximos, como “فردا کار می‌کنم” (amanhã eu trabalho, no sentido de “vou trabalhar”).',
      grammar_why:
        'Repare na forma curta do verbo depois do auxiliar: o infinitivo completo de “comer” é خوردن (xordan), mas o futuro usa só خورد (xord), sem o “-an” — ver o tópico de gramática “fa-g7”.',
      grammar_examples: [
        ['من فردا کار خواهم کرد.', 'Eu vou trabalhar amanhã.'],
        ['او نامه خواهد نوشت.', 'Ele/ela vai escrever uma carta.'],
        ['من امروز خوشحال هستم.', 'Eu estou feliz hoje.'],
        ['او خسته است چون زیاد کار می‌کند.', 'Ele/ela está cansado(a) porque trabalha muito.'],
      ],
      character_guide: [
        ['خواهد / خواهم', 'o auxiliar do futuro, conjugado de خواستن (querer)', 'خواهد خورد (xâhad xord, vai comer)'],
        ['خورد (sem ـن)', 'o infinitivo encurtado, usado depois do auxiliar', 'خواهد خورد'],
      ],
    },
    lessons: [
      {
        id: 'fa-u4-l1',
        title: 'شغلِ من چیست؟',
        kind: 'licao',
        words: ['پزشک', 'معلم', 'مهندس', 'کارگر', 'خوشحال', 'ناراحت'],
        cloze: [
          { sentence: 'او ___ است و در بیمارستان کار می‌کند.', answer: 'پزشک', options: ['پزشک', 'معلم', 'کارگر'], translation: 'Ele/ela é médico(a) e trabalha no hospital.' },
          { sentence: 'او ___ است و در مدرسه کار می‌کند.', answer: 'معلم', options: ['معلم', 'مهندس', 'پزشک'], translation: 'Ele/ela é professor(a) e trabalha na escola.' },
          { sentence: 'من امروز ___ هستم.', answer: 'خوشحال', options: ['خوشحال', 'ناراحت', 'مهندس'], translation: 'Eu estou feliz hoje.' },
        ],
        voice: {
          bot: 'شغلِ شما چیست؟',
          botTranslation: 'Qual é a sua profissão (formal)?',
          expected: ['من معلم هستم.', 'من پزشک هستم', 'من مهندس هستم'],
          hint: 'Responda com “من … هستم” e uma profissão.',
        },
        communityPrompt: 'Diga a sua profissão em persa com “من … هستم” e como você está se sentindo hoje.',
      },
      {
        id: 'fa-u4-l2',
        title: 'امروز چطوری؟',
        kind: 'licao',
        words: ['خسته', 'عصبانی', 'نگران', 'نوشتن', 'خواندن', 'دیدن'],
        cloze: [
          { sentence: 'او ___ است چون زیاد کار می‌کند.', answer: 'خسته', options: ['خسته', 'عصبانی', 'نگران'], translation: 'Ele/ela está cansado(a) porque trabalha muito.' },
          { sentence: 'من یک نامه ___.', answer: 'می‌نویسم', options: ['می‌نویسم', 'می‌خوانم', 'می‌بینم'], translation: 'Eu escrevo uma carta.' },
          { sentence: 'من یک کتاب ___.', answer: 'می‌خوانم', options: ['می‌خوانم', 'می‌نویسم', 'می‌بینم'], translation: 'Eu leio um livro.' },
        ],
        voice: {
          bot: 'آیا شما خسته یا نگران هستید؟',
          botTranslation: 'Você está cansado(a) ou preocupado(a) (formal)?',
          expected: ['من کمی خسته هستم.', 'خسته', 'نگران'],
          hint: 'Responda com “من … هستم” e um sentimento.',
        },
        communityPrompt: 'Escreva três frases com “نوشتن”، “خواندن” e “دیدن” sobre o que você fez hoje.',
      },
      {
        id: 'fa-u4-l3',
        title: 'Test: شغل و احساسات',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'شغلِ شما چیست؟ و امروز چطور هستید؟',
          botTranslation: 'Qual é a sua profissão? E como você está hoje?',
          expected: ['من مهندس هستم و امروز خوشحال هستم.', 'من مهندس هستم', 'خوشحال هستم'],
          hint: 'Diga sua profissão (“من … هستم”) e um sentimento.',
        },
        communityPrompt: 'Escreva cinco frases sobre profissões e sentimentos, usando o futuro com خواستن pra falar de planos.',
      },
    ],
  },
];
