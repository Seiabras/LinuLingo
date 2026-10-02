import type { UnitSeed } from '../types';

/**
 * Trilha do mongol khalkha (mn): as duas unidades do nível A1 (pacote marcado como incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para a lista completa de fontes de cada palavra e para a
 * explicação de como as frases que não são citações diretas foram montadas (padrão demonstrativo “Энэ
 * ___.” para substantivos, “___ байна.” para adjetivos, sem frase conjugada inventada para verbos).
 *
 * “Тийм” (sim) é usado numa fala do Linu na unidade 2 — confirmado em
 * omniglot.com/language/phrases/mongolian.php, na frase “Тийм, би монгол хэл жаахан мэднэ” (sim, eu sei
 * um pouco de mongol) — embora não seja uma palavra do vocabulário principal (vocabulario.ts).
 */
export const UNITS_MN: UnitSeed[] = [
  {
    id: 'mn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Сайн байна уу',
    emoji: '👋',
    card: {
      id: 'mn-c1',
      title: 'Cirílico mongol: 1941 até hoje',
      emoji: '🇲🇳',
      history: 'O mongol khalkha é a língua oficial da Mongólia, falada por cerca de 3,6 milhões de pessoas no país (a maior parte dos 5–6 milhões de falantes de mongol no mundo, segundo a Wikipédia em inglês), além de comunidades na Mongólia Interior (China) e na Sibéria meridional. Este pacote usa a escrita cirílica mongol, oficialmente adotada por decreto em 1941 e confirmada em 1946: segundo a Wikipédia, ela ajudou a elevar a alfabetização da Mongólia de 17,3% para 73,5% entre 1941 e 1950. É DIFERENTE da escrita mongol vertical tradicional, ainda usada na Mongólia Interior, que não entra neste pacote.',
      culture_tip: 'O cirílico mongol usa as mesmas 33 letras do alfabeto russo, mais duas letras próprias: Өө (um som parecido com o “ö” do alemão) e Үү (parecido com o “ü” do alemão) — ver o guia de caracteres abaixo.',
      grammar_why: 'O mongol não tem gênero gramatical nem artigos (“o”, “a”, “um”, “uma”), e o verbo normalmente fica no FINAL da frase (ordem sujeito-objeto-verbo). Frases simples do tipo “isto é ___” muitas vezes não precisam de um verbo “ser” explícito, como mostra a frase atestada “Энэ хүн миний найз” (esta pessoa [é] meu amigo).',
      grammar_examples: [
        ['Сайн байна уу?', 'Olá (lit. “você está bem?”).'],
        ['Энэ хүн миний найз.', 'Esta pessoa é meu amigo/minha amiga.'],
      ],
      character_guide: [
        ['Өө', 'som entre o “o” e o “e”, como o “ö” do alemão (lábios arredondados, língua na frente)', 'дөрөв (quatro)'],
        ['Үү', 'som parecido com o “ü” do alemão ou o “u” do francês “tu”', 'сүү (leite), үзэх (ver)'],
        ['Ь (sinal suave, sem som próprio)', 'suaviza a consoante anterior, sem formar sílaba própria', 'морь (cavalo)'],
        ['Я, Ю, Э', 'vogais iotizadas/frontais: “я” soa “ia”, “ю” soa “iu”, “э” é um “e” aberto', 'ямаа (cabra), юу (o quê), ээж (mãe)'],
      ],
    },
    lessons: [
      {
        id: 'mn-u1-l1',
        title: 'Би, чи, та — saudações',
        kind: 'licao',
        words: ['би', 'чи', 'та', 'сайн байна уу', 'баярлалаа', 'баяртай'],
        cloze: [
          { sentence: '___ байна уу?', answer: 'Сайн', options: ['Сайн', 'Муу', 'Том'], translation: 'Olá? (lit. “está bem?”)' },
          { sentence: '___ монгол хэл мэдэх үү?', answer: 'Чи', options: ['Чи', 'Та', 'Би'], translation: 'Você fala mongol? (informal)' },
          { sentence: 'Танд их ___.', answer: 'баярлалаа', options: ['баярлалаа', 'баяртай', 'сайн'], translation: 'Muito obrigado(a) a você.' },
        ],
        voice: {
          bot: 'Сайн байна уу?',
          botTranslation: 'Olá! (lit. “você está bem?”)',
          expected: ['Сайн, та сайн байна уу?', 'сайн'],
          hint: 'Responda com “Сайн, та сайн байна уу?” (bem, e você?).',
        },
        communityPrompt: 'Cumprimente alguém e agradeça em mongol, usando “Сайн байна уу?” (olá) e “Баярлалаа” (obrigado).',
      },
      {
        id: 'mn-u1-l2',
        title: 'Ээж, аав, найз — família',
        kind: 'licao',
        words: ['тэр', 'ээж', 'аав', 'найз', 'энэ', 'хэн'],
        cloze: [
          { sentence: 'Таны нэр ___ бэ?', answer: 'хэн', options: ['хэн', 'юу', 'хаана'], translation: 'Qual é o seu nome? (lit. “seu nome quem é?”)' },
          { sentence: 'Энэ хүн миний ___.', answer: 'найз', options: ['найз', 'ээж', 'аав'], translation: 'Esta pessoa é meu amigo/minha amiga.' },
          { sentence: '___ хаанаас ирсэн бэ?', answer: 'Та', options: ['Та', 'Чи', 'Би'], translation: 'De onde você é? (formal)' },
        ],
        voice: {
          bot: 'Та хаанаас ирсэн бэ?',
          botTranslation: 'De onde você é?',
          expected: ['Би Бразилээс ирсэн.', 'ирсэн'],
          hint: 'Diga de onde você é com “Би …ээс ирсэн” (eu sou de …), por exemplo “Би Бразилээс ирсэн.”.',
        },
        communityPrompt: 'Apresente sua família em mongol usando “ээж” (mãe), “аав” (pai) e “найз” (amigo/amiga).',
      },
      {
        id: 'mn-u1-l3',
        title: 'Test: Сайн байна уу',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Сайн байна уу? Таны нэр хэн бэ?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Сайн, та сайн байна уу?', 'сайн'],
          hint: 'Confirme que está bem com “Сайн, та сайн байна уу?” (bem, e você?).',
        },
        communityPrompt: 'Escreva cinco frases curtas se apresentando: nome, família e de onde você é.',
      },
    ],
  },
  {
    id: 'mn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Гэр, мал, тоо',
    emoji: '⛺',
    card: {
      id: 'mn-c2',
      title: 'A guer e o gado da estepe',
      emoji: '🐴',
      history: 'A pecuária nômade é central na vida tradicional mongol: a maioria das palavras mais antigas e bem documentadas do mongol está ligada aos “cinco focinhos” do gado da estepe — cavalo (“морь”), ovelha (“хонь”), cabra (“ямаа”), camelo (“тэмээ”) e boi/vaca. A “гэр” (também chamada “yurt”, palavra que entrou no português vindo do turco/russo) é a tenda redonda tradicional, levada de um pasto a outro.',
      culture_tip: 'O “айраг” (koumiss), leite de égua fermentado, é uma bebida tradicional de verão na Mongólia — o Wiktionary o descreve como “uma bebida mongol popular feita de leite de égua fermentado”.',
      grammar_why: 'Os numerais e os adjetivos vêm ANTES do substantivo no mongol, não depois como às vezes acontece em português: os compostos atestados pelo Wiktionary com “улаан” (vermelho), como “улаан лооль” (tomate vermelho), mostram o adjetivo antes do substantivo — o mesmo padrão usado aqui para numeral+substantivo (“Хоёр морь”, dois cavalos).',
      grammar_examples: [
        ['Хоёр морь.', 'Dois cavalos.'],
        ['Нар улаан байна.', 'O sol está vermelho.'],
      ],
      character_guide: [
        ['Ц, Ч', '“ц” soa como o “ts” de “tsunami”; “ч” soa como o “tch” de “tchau”', 'цай (chá), чи (tu/você)'],
        ['Ж, Ш', '“ж” soa como o “j” de “jardim” (em certos empréstimos) ou “dz”; “ш” soa como o “x” de “xícara”', 'жижиг (pequeno), шувуу (pássaro)'],
        ['Х', 'som de fricativa, mais “raspado” na garganta do que o “r” do português', 'хонь (ovelha), хэн (quem)'],
      ],
    },
    lessons: [
      {
        id: 'mn-u2-l1',
        title: 'Морь, хонь, ямаа — animais',
        kind: 'licao',
        words: ['морь', 'хонь', 'ямаа', 'тэмээ', 'ус', 'хоёр'],
        cloze: [
          { sentence: 'Энэ ___.', answer: 'морь', options: ['морь', 'хонь', 'ямаа'], translation: 'Isto é um cavalo.' },
          { sentence: '___ хонь.', answer: 'Хоёр', options: ['Хоёр', 'Нэг', 'Гурав'], translation: 'Duas ovelhas.' },
          { sentence: 'Энэ ___.', answer: 'ус', options: ['ус', 'уул', 'цас'], translation: 'Isto é água.' },
        ],
        voice: {
          bot: 'Энэ юу вэ?',
          botTranslation: 'O que é isto?',
          expected: ['Энэ морь.', 'морь'],
          hint: 'Diga o que é com “Энэ ___.” (isto é ___), por exemplo “Энэ морь.” (isto é um cavalo).',
        },
        communityPrompt: 'Escreva sobre os animais da estepe mongol usando “морь” (cavalo), “хонь” (ovelha), “ямаа” (cabra) e “тэмээ” (camelo).',
      },
      {
        id: 'mn-u2-l2',
        title: 'Гэр, цай, айраг — casa e comida',
        kind: 'licao',
        words: ['цай', 'айраг', 'гэр', 'том', 'сайн', 'улаан'],
        cloze: [
          { sentence: 'Энэ ___.', answer: 'гэр', options: ['гэр', 'цай', 'сүү'], translation: 'Isto é uma casa/guer.' },
          { sentence: 'Тэмээ ___ байна.', answer: 'том', options: ['том', 'сайн', 'улаан'], translation: 'O camelo é grande.' },
          { sentence: 'Нар ___ байна.', answer: 'улаан', options: ['улаан', 'цагаан', 'сайн'], translation: 'O sol está vermelho.' },
        ],
        voice: {
          bot: 'Айраг сайн байна уу?',
          botTranslation: 'O airag está bom?',
          expected: ['Тийм, сайн байна.', 'сайн'],
          hint: 'Responda “Тийм, сайн байна.” (sim, está bom), usando “тийм” (sim).',
        },
        communityPrompt: 'Escreva sobre a comida mongol usando “цай” (chá) e “айраг” (airag).',
      },
      {
        id: 'mn-u2-l3',
        title: 'Test: Гэр, мал, тоо',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Энэ юу вэ?',
          botTranslation: 'O que é isto?',
          expected: ['Энэ гэр.', 'гэр'],
          hint: 'Diga o que é usando “Энэ ___.”.',
        },
        communityPrompt: 'Escreva cinco frases curtas sobre a vida na estepe (animais, comida, a guer), usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
