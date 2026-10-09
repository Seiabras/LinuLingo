import type { UnitSeed } from '../types';

/**
 * Trilha do urdu: as quatro unidades do A1 e do A2 (o pacote está marcado como incompleto até
 * A2.2 — ver `incomplete` em index.ts). De B1 ao C2 chega depois. Fontes: a classificação e os
 * fatos de história/cultura em en.wikipedia.org/wiki/Urdu, en.wikipedia.org/wiki/Nastaliq e
 * en.wikipedia.org/wiki/Hindustani_grammar (plural direto/oblíquo, posposição کا/کی/کے, comparação
 * com سے); as palavras, uma a uma, em vocabulario.ts (com as próprias fontes citadas lá).
 */
export const UNITS_UR: UnitSeed[] = [
  {
    id: 'ur-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'السلام علیکم!',
    emoji: '👋',
    card: {
      id: 'ur-c1',
      title: 'A língua nacional do Paquistão, escrita da direita pra esquerda',
      emoji: '🇵🇰',
      history:
        'O urdu é a língua nacional e a língua franca do Paquistão — ainda que só cerca de 9,25% da população a tenha como língua materna, ela é falada e entendida por todo o país — e é também uma das línguas do Oitavo Anexo da Constituição da Índia, com status oficial adicional em estados como Jammu e Caxemira, Délhi, Uttar Pradesh e Telangana (Wikipédia, “Urdu”). O urdu nasceu do mesmo tronco que o hindi, o hindustani falado na planície indo-gangética do norte da Índia, e por isso a gramática e boa parte do vocabulário do dia a dia são praticamente idênticos aos do hindi — a diferença nasceu da escrita e do registro formal, não da fala cotidiana.',
      culture_tip:
        '“السلام علیکم” (as-salāmu ʿalaikum, “que a paz esteja com você”) é a saudação mais comum no mundo muçulmano, e “خدا حافظ” (khudā hāfiz, “que Deus seja o guardião”) é a despedida equivalente. “شکریہ” (shukriya, obrigado) vem do árabe “شُكْر” (gratidão); “برائے مہربانی” (por favor) é de origem persa. Repare que a leitura começa do lado direito da tela.',
      grammar_why:
        'O urdu usa o alfabeto perso-árabe, escrito da direita para a esquerda, na caligrafia Nastaliq — um estilo diferente do Naskh usado para o árabe (Wikipédia, “Nastaliq”). E, ao contrário do árabe (que costuma ser VSO ou SVO), o urdu põe o verbo por último: “میں پاکستان سے ہوں” é, palavra por palavra, “eu Paquistão de sou” (Wikipédia, “Hindustani grammar”).',
      grammar_examples: [
        ['السلام علیکم! آپ کا کیا حال ہے؟', 'Olá! Como você está?'],
        ['میں پاکستان سے ہوں۔', 'Eu sou do Paquistão.'],
        ['بہت شکریہ اور خدا حافظ!', 'Muito obrigado e até logo!'],
        ['آپ کا کیا نام ہے؟', 'Qual é o seu nome?'],
      ],
      character_guide: [
        ['ٹ ڈ ڑ', 'consoantes retroflexas, ditas com a ponta da língua dobrada pra trás no céu da boca — não existem no árabe nem no persa, só no urdu (e em línguas vizinhas como o panjabi)', 'آٹھ (āṭh, oito), بڑا (grande)'],
        ['پ چ گ ژ', 'letras emprestadas do persa, que também não existem no alfabeto árabe', 'پانی (água), چائے (chá), گھر (casa)'],
        ['ھ', 'marca a aspiração da consoante anterior (um sopro de ar a mais)', 'گھر (ghar, casa), بھائی (bhāī, irmão)'],
        ['ں', 'nasaliza a vogal anterior, sem ser pronunciada como “n” cheio', 'میں (ma͠i, eu)'],
      ],
    },
    lessons: [
      {
        id: 'ur-u1-l1',
        title: 'السلام علیکم، شکریہ، خدا حافظ',
        kind: 'licao',
        words: ['السلام علیکم', 'خدا حافظ', 'صبح بخیر', 'شکریہ', 'برائے مہربانی', 'آپ کا کیا حال ہے؟'],
        cloze: [
          { sentence: '___! آپ کا کیا حال ہے؟', answer: 'السلام علیکم', options: ['السلام علیکم', 'خدا حافظ', 'شکریہ'], translation: 'Olá! Como você está?' },
          { sentence: 'ایک پانی، ___۔', answer: 'برائے مہربانی', options: ['برائے مہربانی', 'خدا حافظ', 'صبح بخیر'], translation: 'Uma água, por favor.' },
          { sentence: 'بہت ___!', answer: 'شکریہ', options: ['شکریہ', 'السلام علیکم', 'برائے مہربانی'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'السلام علیکم! آپ کا کیا حال ہے؟',
          botTranslation: 'Olá! Como você está?',
          expected: ['السلام علیکم! میں اچھا ہوں، شکریہ۔', 'شکریہ', 'السلام علیکم'],
          hint: 'Devolva a saudação (“السلام علیکم”) e agradeça com “شکریہ”.',
        },
        communityPrompt: 'Escreva três expressões em urdu: uma saudação (“السلام علیکم”), um agradecimento (“شکریہ”) e uma despedida (“خدا حافظ”).',
      },
      {
        id: 'ur-u1-l2',
        title: 'میں، تم، آپ، نام',
        kind: 'licao',
        words: ['میں', 'تم', 'آپ', 'وہ', 'ہم', 'نام'],
        cloze: [
          { sentence: '___ پاکستان سے ہوں۔', answer: 'میں', options: ['میں', 'تم', 'وہ'], translation: 'Eu sou do Paquistão.' },
          { sentence: 'آپ کا کیا ___ ہے؟', answer: 'نام', options: ['نام', 'میں', 'ہم'], translation: 'Qual é o seu nome?' },
          { sentence: '___ گھر میں ہے۔', answer: 'وہ', options: ['وہ', 'ہم', 'تم'], translation: 'Ele/ela está em casa.' },
        ],
        voice: {
          bot: 'آپ کا کیا نام ہے؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['میرا نام لینو ہے۔', 'میرا نام', 'نام ہے'],
          hint: 'Diga o seu nome com “میرا نام … ہے” (meu nome é …).',
        },
        communityPrompt: 'Apresente-se em urdu: diga “میرا نام … ہے” (meu nome é …) e pergunte o nome de alguém com “آپ کا کیا نام ہے؟”.',
      },
      {
        id: 'ur-u1-l3',
        title: 'Teste: السلام علیکم',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'السلام علیکم! میرا نام علی ہے۔ آپ کا کیا نام ہے اور آپ کہاں سے ہیں؟',
          botTranslation: 'Olá! Meu nome é Ali. Qual é o seu nome e de onde você é?',
          expected: ['السلام علیکم! میرا نام لینو ہے اور میں برازیل سے ہوں۔', 'میرا نام', 'سے ہوں', 'السلام علیکم'],
          hint: 'Devolva a saudação, diga o seu nome com “میرا نام … ہے” e de onde você é com “… سے ہوں”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em urdu: saudação, nome (“میرا نام … ہے”), de onde você é (“… سے ہوں”) e uma despedida (“خدا حافظ”).',
      },
    ],
  },
  {
    id: 'ur-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'خاندان اور گھر',
    emoji: '👪',
    card: {
      id: 'ur-c2',
      title: 'نے: o pequeno sufixo que muda quem concorda com o verbo',
      emoji: '🧩',
      history:
        'A palavra para “família”, خاندان (xāndān), veio do persa clássico, assim como دوست (dost, amigo); já امی (ammī, mamãe) e ابو (abbū, papai) são formas afetuosas de origem árabe e sânscrita que circulam em toda a família do hindustani. O urdu e o hindi continuam, nesse nível, quase a mesma língua falada: um paquistanês e um indiano do norte se entendem perfeitamente conversando sobre a família, mesmo lendo e escrevendo em alfabetos diferentes.',
      culture_tip:
        'Chamar alguém de “بھائی” (bhāī, irmão) ou “بہن” (bahan, irmã) também é uma forma educada e calorosa de se dirigir a uma pessoa que não é parente — comum no dia a dia no Paquistão e no norte da Índia.',
      grammar_why:
        'O urdu marca o gênero gramatical (masculino e feminino, sem neutro) em adjetivos e verbos: “acchā” (bom) vira “acchī” no feminino, “baṛā” (grande) vira “baṛī”. E, numa das pegadinhas mais famosas do hindustani para quem já sabe o presente, o tempo passado dos verbos transitivos (que têm objeto) exige a posposição “نے” (ne) depois do sujeito, e é o objeto — não o sujeito — que passa a concordar com o verbo: “لڑکے نے کتاب خریدی” é, literalmente, “o menino, por (ele), o livro comprou(fem.)” (Wiktionary, “نے”; Wikipédia, “Hindustani grammar”).',
      grammar_examples: [
        ['میرا خاندان بڑا ہے۔', 'A minha família é grande.'],
        ['میرا ایک بھائی اور ایک بہن ہے۔', 'Eu tenho um irmão e uma irmã.'],
        ['دودھ سفید ہے۔', 'O leite é branco.'],
        ['لڑکے نے کتاب خریدی۔', 'O menino comprou um livro.'],
      ],
      character_guide: [
        ['ھ depois de ب، پ، ت، ج، ک...', 'marca a aspiração: a consoante sai com um sopro de ar a mais', 'بھائی (bhāī, irmão), کھانا (khānā, comer)'],
        ['ا / آ', 'o alif simples soa como um “a” curto no meio da palavra; com o acento (آ), um “a” longo', 'امی (ammī), آسمان (āsmān, céu)'],
        ['ی / ے', 'duas letras pro som “i/e” final: ی (choṭī ye) e ے (baṛī ye, só no fim da palavra)', 'بھائی (bhāī) termina em ی; اچھے (acche) pode terminar em ے'],
      ],
    },
    lessons: [
      {
        id: 'ur-u2-l1',
        title: 'میرا خاندان',
        kind: 'licao',
        words: ['امی', 'ابو', 'بھائی', 'بہن', 'دوست', 'خاندان'],
        cloze: [
          { sentence: '___ گھر میں ہے۔', answer: 'امی', options: ['امی', 'ابو', 'دوست'], translation: 'A mamãe está em casa.' },
          { sentence: 'میرا ایک ___ ہے۔', answer: 'بھائی', options: ['بھائی', 'بہن', 'دوست'], translation: 'Eu tenho um irmão.' },
          { sentence: 'میرا ___ بڑا ہے۔', answer: 'خاندان', options: ['خاندان', 'گھر', 'دوست'], translation: 'A minha família é grande.' },
        ],
        voice: {
          bot: 'کیا آپ کے پاس بھائی یا بہن ہے؟',
          botTranslation: 'Você tem algum irmão ou irmã?',
          expected: ['ہاں، میری ایک بہن ہے۔', 'میرا ایک بھائی ہے', 'میری ایک بہن ہے'],
          hint: 'Responda com “ہاں، میرا ایک بھائی ہے” ou “میری ایک بہن ہے”.',
        },
        communityPrompt: 'Descreva a sua família em urdu: quantos irmãos (بھائی) e irmãs (بہن) você tem, e como se chamam a sua امی e o seu ابو.',
      },
      {
        id: 'ur-u2-l2',
        title: 'گھر میں',
        kind: 'licao',
        words: ['گھر', 'پانی', 'روٹی', 'دودھ', 'پنیر', 'چائے'],
        cloze: [
          { sentence: 'میرا ___ چھوٹا ہے۔', answer: 'گھر', options: ['گھر', 'پانی', 'چائے'], translation: 'A minha casa é pequena.' },
          { sentence: 'میں ___ پیتا ہوں۔', answer: 'پانی', options: ['پانی', 'روٹی', 'پنیر'], translation: 'Eu bebo água.' },
          { sentence: 'مجھے ___ پسند ہے۔', answer: 'چائے', options: ['چائے', 'دودھ', 'روٹی'], translation: 'Eu gosto de chá.' },
        ],
        voice: {
          bot: 'آپ کیا کھاتے ہیں؟',
          botTranslation: 'O que você come?',
          expected: ['میں روٹی اور پنیر کھاتا ہوں۔', 'روٹی اور پنیر', 'کھاتا ہوں'],
          hint: 'Diga o que come com “میں … کھاتا ہوں”.',
        },
        communityPrompt: 'Escreva o que você come e bebe em urdu: “میں … کھاتا ہوں” e “میں … پیتا ہوں”.',
      },
      {
        id: 'ur-u2-l3',
        title: 'Teste: خاندان اور گھر',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'السلام علیکم! کیا آپ کے پاس بھائی یا بہن ہے؟',
          botTranslation: 'Conte sobre a sua família: você tem algum irmão ou irmã?',
          expected: ['ہاں، میرا ایک بھائی ہے۔ میرا خاندان بڑا ہے۔', 'میرا ایک بھائی ہے', 'میرا خاندان'],
          hint: 'Diga quantos irmãos/irmãs tem (“میرا ایک بھائی ہے”) e descreva a família (“میرا خاندان بڑا ہے”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “میرا”, “ہے” e “ہیں”.',
      },
    ],
  },
  {
    id: 'ur-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'موسم اور کپڑے',
    emoji: '🌦️',
    card: {
      id: 'ur-c3',
      title: 'کا/کی/کے: o possessivo que concorda com a coisa possuída',
      emoji: '🔗',
      history:
        'Falar do tempo e da roupa é um jeito fácil de ver o possessivo “کا/کی/کے” em ação: “میرا جوتا” (meu sapato, masculino) e “میری ٹوپی” (meu chapéu, feminino) usam formas diferentes da mesma palavra, porque, como explica a Wikipédia em inglês (“Hindustani grammar”), essa posposição “concorda com o gênero, o número e o caso do objeto que mostra posse de” — não com quem fala.',
      culture_tip:
        'No norte do Paquistão e da Índia, o موسم (tempo) muda bastante entre o calor do verão (گرم) e o frio de dezembro a fevereiro (ٹھنڈا), quando برف (neve) cai nas montanhas do norte do Paquistão.',
      grammar_why:
        'Repare: “میرا” (meu) muda pra “میری” antes de um substantivo feminino, mesmo que quem fale seja homem. É o objeto possuído que manda na concordância, nunca o possuidor — ver o tópico de gramática “ur-g6”.',
      grammar_examples: [
        ['میرا جوتا بڑا ہے۔', 'Meu sapato é grande. (جوتا, masculino)'],
        ['میری ٹوپی کالی ہے۔', 'Meu chapéu é preto. (ٹوپی, feminino)'],
        ['آج کا موسم کل سے ٹھنڈا ہے۔', 'O tempo de hoje está mais frio que o de ontem.'],
        ['میرے دو جوتے ہیں۔', 'Eu tenho dois sapatos. (جوتا → جوتے no plural)'],
      ],
      character_guide: [
        ['میرا / میری / میرے', '“meu/minha”, concordando com o que é possuído', 'میرا جوتا, میری ٹوپی'],
        ['جوتا → جوتے', 'plural direto do masculino em “-ا”', 'میرے دو جوتے'],
      ],
    },
    lessons: [
      {
        id: 'ur-u3-l1',
        title: 'آج موسم کیسا ہے؟',
        kind: 'licao',
        words: ['موسم', 'گرم', 'ٹھنڈا', 'بارش', 'برف', 'ہوا'],
        cloze: [
          { sentence: 'آج موسم ___ ہے۔', answer: 'گرم', options: ['گرم', 'ٹھنڈا', 'ہوا'], translation: 'Hoje o tempo está quente.' },
          { sentence: 'کل ___ ہوگی۔', answer: 'بارش', options: ['بارش', 'برف', 'ہوا'], translation: 'Vai chover amanhã.' },
          { sentence: '___ بڑی ہے۔', answer: 'ہوا', options: ['ہوا', 'برف', 'موسم'], translation: 'O vento está forte.' },
        ],
        voice: {
          bot: 'آج موسم کیسا ہے؟',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['آج موسم گرم ہے۔', 'گرم', 'ٹھنڈا'],
          hint: 'Responda com “آج موسم … ہے” e “گرم” ou “ٹھنڈا”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em urdu, comparando com ontem: “آج کا موسم کل سے ٹھنڈا/گرم ہے”.',
      },
      {
        id: 'ur-u3-l2',
        title: 'میرے کپڑے',
        kind: 'licao',
        words: ['کپڑے', 'قمیض', 'جوتا', 'ٹوپی', 'شہر', 'سڑک'],
        cloze: [
          { sentence: 'میری ___ نیلی ہے۔', answer: 'قمیض', options: ['قمیض', 'ٹوپی', 'جوتا'], translation: 'Minha camisa é azul.' },
          { sentence: 'یہ ___ بڑا ہے۔', answer: 'شہر', options: ['شہر', 'سڑک', 'جوتا'], translation: 'Esta cidade é grande.' },
          { sentence: '___ بڑی ہے۔', answer: 'سڑک', options: ['سڑک', 'شہر', 'ٹوپی'], translation: 'A rua é grande.' },
        ],
        voice: {
          bot: 'آپ کے کپڑے کس رنگ کے ہیں؟',
          botTranslation: 'De que cor são as suas roupas (formal)?',
          expected: ['میری قمیض نیلی ہے۔', 'نیلی', 'لال'],
          hint: 'Responda com “میری قمیض … ہے” e uma cor.',
        },
        communityPrompt: 'Descreva a roupa que você está vestindo hoje em urdu, usando “قمیض”، “جوتا” ou “ٹوپی” e uma cor.',
      },
      {
        id: 'ur-u3-l3',
        title: 'Teste: موسم اور کپڑے',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'آج موسم کیسا ہے؟ اور آپ کیا پہنیں گے؟',
          botTranslation: 'Como está o tempo hoje? E o que você vai vestir?',
          expected: ['آج موسم ٹھنڈا ہے اور میں ٹوپی پہنوں گا۔', 'ٹھنڈا ہے', 'ٹوپی'],
          hint: 'Diga o tempo (“موسم … ہے”) e a roupa que vai vestir.',
        },
        communityPrompt: 'Escreva cinco frases comparando o tempo e as roupas, usando “کا/کی/کے” e “سے”.',
      },
    ],
  },
  {
    id: 'ur-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'پیشہ اور احساسات',
    emoji: '🩺',
    card: {
      id: 'ur-c4',
      title: 'Comparando com سے: “مجھ سے بڑا”',
      emoji: '📈',
      history:
        'Perguntar sobre a profissão de alguém é um jeito comum de iniciar conversa, e também de usar a comparação com “سے”: a Wikipédia em inglês (“Hindustani grammar”) dá o exemplo “گیتا گوتم سے لمبی ہے” (Gita é mais alta que Gautam), com a posposição instrumental “سے” fazendo o papel do “que” do português.',
      culture_tip:
        'Chamar um médico de “ڈاکٹر صاحب” (doutor, senhor) é uma forma respeitosa comum no Paquistão, assim como “استاد جی” pra um professor — o sufixo “جی” ou o título “صاحب” marcam respeito, sem mudar o verbo pra uma forma extra de formalidade.',
      grammar_why:
        'Repare na estrutura “X سے Y ہے” pra comparar: “یہ شہر اس شہر سے بڑا ہے” é “esta cidade é maior que essa cidade” — sem precisar de uma palavra própria pra “que”, só a posposição “سے” depois do segundo termo (ver “ur-g7”).',
      grammar_examples: [
        ['وہ ڈاکٹر ہے اور میں استاد ہوں۔', 'Ele/ela é médico(a) e eu sou professor(a).'],
        ['یہ شہر اس شہر سے بڑا ہے۔', 'Esta cidade é maior que essa cidade.'],
        ['میں خوش ہوں، لیکن تھکا ہوا ہوں۔', 'Eu estou feliz, mas cansado.'],
        ['وہ پریشان ہے کیونکہ بہت کام کرتا ہے۔', 'Ele/ela está preocupado(a) porque trabalha muito.'],
      ],
      character_guide: [
        ['X سے Y ہے', 'estrutura da comparação: “X é Y que …”', 'یہ اس سے بڑا ہے (isto é maior que aquilo)'],
        ['تھکا / تھکی', 'o adjetivo composto “cansado” concorda em gênero', 'تھکا ہوا (m.) / تھکی ہوئی (f.)'],
      ],
    },
    lessons: [
      {
        id: 'ur-u4-l1',
        title: 'آپ کا پیشہ کیا ہے؟',
        kind: 'licao',
        words: ['ڈاکٹر', 'استاد', 'انجینئر', 'طالب علم', 'خوش', 'اداس'],
        cloze: [
          { sentence: 'وہ ___ ہے اور ہسپتال میں کام کرتا ہے۔', answer: 'ڈاکٹر', options: ['ڈاکٹر', 'استاد', 'طالب علم'], translation: 'Ele/ela é médico(a) e trabalha no hospital.' },
          { sentence: 'وہ ___ ہے اور اسکول میں کام کرتا ہے۔', answer: 'استاد', options: ['استاد', 'انجینئر', 'ڈاکٹر'], translation: 'Ele/ela é professor(a) e trabalha na escola.' },
          { sentence: 'میں آج ___ ہوں۔', answer: 'خوش', options: ['خوش', 'اداس', 'انجینئر'], translation: 'Eu estou feliz hoje.' },
        ],
        voice: {
          bot: 'آپ کا پیشہ کیا ہے؟',
          botTranslation: 'Qual é a sua profissão (formal)?',
          expected: ['میں طالب علم ہوں۔', 'میں ڈاکٹر ہوں', 'میں استاد ہوں'],
          hint: 'Responda com “میں … ہوں” e uma profissão.',
        },
        communityPrompt: 'Diga a sua profissão em urdu com “میں … ہوں” e como você está se sentindo hoje.',
      },
      {
        id: 'ur-u4-l2',
        title: 'آج آپ کیسا محسوس کر رہے ہیں؟',
        kind: 'licao',
        words: ['پریشان', 'خوفزدہ', 'تھکا ہوا', 'لکھنا', 'پڑھنا', 'دیکھنا'],
        cloze: [
          { sentence: 'وہ ___ ہے کیونکہ بہت کام کرتا ہے۔', answer: 'تھکا ہوا', options: ['تھکا ہوا', 'پریشان', 'خوفزدہ'], translation: 'Ele está cansado porque trabalha muito.' },
          { sentence: 'میں ایک خط ___ ہوں۔', answer: 'لکھتا', options: ['لکھتا', 'پڑھتا', 'دیکھتا'], translation: 'Eu escrevo uma carta.' },
          { sentence: 'میں ایک کتاب ___ ہوں۔', answer: 'پڑھتا', options: ['پڑھتا', 'لکھتا', 'دیکھتا'], translation: 'Eu leio um livro.' },
        ],
        voice: {
          bot: 'کیا آپ پریشان یا خوش ہیں؟',
          botTranslation: 'Você está preocupado(a) ou feliz (formal)?',
          expected: ['میں تھوڑا پریشان ہوں۔', 'پریشان', 'خوش'],
          hint: 'Responda com “میں … ہوں” e um sentimento.',
        },
        communityPrompt: 'Escreva três frases com “لکھنا”، “پڑھنا” e “دیکھنا” sobre o que você fez hoje.',
      },
      {
        id: 'ur-u4-l3',
        title: 'Teste: پیشہ اور احساسات',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'آپ کا پیشہ کیا ہے؟ اور آج آپ کیسا محسوس کر رہے ہیں؟',
          botTranslation: 'Qual é a sua profissão? E como você está se sentindo hoje?',
          expected: ['میں انجینئر ہوں اور آج خوش ہوں۔', 'میں انجینئر ہوں', 'خوش ہوں'],
          hint: 'Diga sua profissão (“میں … ہوں”) e um sentimento.',
        },
        communityPrompt: 'Escreva cinco frases sobre profissões e sentimentos, comparando com “سے”.',
      },
    ],
  },
];
