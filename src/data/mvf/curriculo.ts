import type { UnitSeed } from '../types';

/**
 * Trilha do mongol na escrita tradicional (mvf): as duas unidades do nível A1, com as mesmas palavras e
 * os mesmos padrões de frase do pacote em cirílico (mn), escritos na escrita vertical. Toda grafia vem
 * do vocabulário (vocabulario.ts, com a fonte de cada palavra). As respostas de voz aceitam a frase na
 * escrita, a romanização e também o cirílico: o reconhecimento de voz devolve texto em cirílico, nunca
 * na escrita tradicional.
 */
export const UNITS_MVF: UnitSeed[] = [
  {
    id: 'mvf-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
    emoji: '👋',
    card: {
      id: 'mvf-c1',
      title: 'Uma escrita de cima pra baixo',
      emoji: '📜',
      history: 'A escrita mongol foi adaptada do alfabeto uigur antigo por volta de 1204: segundo a Wikipédia em inglês, quem a levou para os mongóis foi Tata-tonga, um escriba uigur capturado por Gengis Khan. A inscrição mais antiga que se conhece nela é a Estela de Yisüngge, do século XIII. Ela se escreve de cima pra baixo, em colunas que avançam da esquerda pra direita — segundo a Wikipédia em inglês, ela e as escritas que nasceram dela (como a manchu) são as únicas escritas verticais conhecidas que andam da esquerda pra direita. Na Mongólia, foi trocada pelo cirílico a partir de 1941, mas continuou sendo a escrita do dia a dia na Mongólia Interior, na China. Em março de 2020, o governo da Mongólia anunciou o plano de usar as duas escritas, a cirílica e a tradicional, nos documentos oficiais a partir de 2025.',
      culture_tip: 'As letras se ligam por uma linha vertical que desce pela palavra toda, e cada letra muda de forma conforme a posição: no começo, no meio ou no fim da palavra. Por isso a mesma letra pode parecer diferente em duas palavras — o app desenha a forma certa sozinho, você não precisa escolher.',
      grammar_why: 'A língua é a mesma do pacote em cirílico: sem gênero, sem artigos e com o verbo no fim da frase. O que muda é a escrita, que guarda a ortografia do mongol clássico. Por isso a grafia muitas vezes tem letras que não se pronunciam mais: “ᠮᠣᠷᠢ” (mori) é o “морь” do cirílico, e “ᠤᠰᠤ” (usu) é o “ус”.',
      grammar_examples: [
        ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Olá (lit. “você está bem?”).'],
        ['ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃', 'Esta pessoa é meu amigo/minha amiga.'],
      ],
      character_guide: [
        ['ᠠᠪᠤ', 'a e b soam como em português', 'ᠠᠪᠤ (abu, pai)'],
        ['ᠮᠣᠷᠢ', 'o e u têm o mesmo desenho (a Wikipédia lista essa ambiguidade entre as que a escrita herdou do uigur) — quem sabe a palavra sabe qual é', 'ᠮᠣᠷᠢ (mori, cavalo), ᠤᠰᠤ (usu, água)'],
        ['ᠰᠦᠨ', 'ö e ü também têm o mesmo desenho entre si', 'ᠰᠦᠨ (sün, leite), ᠳᠥᠷᠪᠡ (dörbe, quatro)'],
        ['ᠴᠢ', 'č soa como o “tch” de “tchau”', 'ᠴᠢ (či, você), ᠴᠠᠢ (čai, chá)'],
      ],
    },
    lessons: [
      {
        id: 'mvf-u1-l1',
        title: 'Saudações',
        kind: 'licao',
        words: ['ᠪᠢ', 'ᠴᠢ', 'ᠲᠠ', 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ', 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', 'ᠪᠠᠶᠠᠷᠲᠠᠢ'],
        cloze: [
          { sentence: '___ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', answer: 'ᠰᠠᠶ᠋ᠢᠨ', options: ['ᠰᠠᠶ᠋ᠢᠨ', 'ᠮᠠᠭᠤ', 'ᠲᠣᠮᠤ'], translation: 'Olá? (lit. “está bem?”)' },
          { sentence: 'ᠰᠠᠶ᠋ᠢᠨ᠂ ___ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', answer: 'ᠲᠠ', options: ['ᠲᠠ', 'ᠪᠢ', 'ᠲᠡᠷᠡ'], translation: 'Bem, e você?' },
          { sentence: 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ___ ᠪᠤᠢ?', answer: 'ᠬᠡᠨ', options: ['ᠬᠡᠨ', 'ᠶᠠᠭᠤ', 'ᠬᠠᠮᠢᠭ᠎ᠠ'], translation: 'Qual é o seu nome? (lit. “seu nome quem é?”)' },
        ],
        voice: {
          bot: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
          botTranslation: 'Olá! (lit. “você está bem?”)',
          expected: ['ᠰᠠᠶ᠋ᠢᠨ᠂ ᠲᠠ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'sayin, ta sayin bayin-a uu?', 'ᠰᠠᠶ᠋ᠢᠨ', 'sayin', 'Сайн, та сайн байна уу?', 'сайн'],
          hint: 'Responda com ᠰᠠᠶ᠋ᠢᠨ᠂ ᠲᠠ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ? (bem, e você?).',
        },
        communityPrompt: 'Cumprimente alguém e agradeça usando ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ? (olá) e ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ (obrigado).',
      },
      {
        id: 'mvf-u1-l2',
        title: 'Família',
        kind: 'licao',
        words: ['ᠲᠡᠷᠡ', 'ᠡᠵᠢ', 'ᠠᠪᠤ', 'ᠨᠠᠶ᠋ᠢᠵᠠ', 'ᠡᠨᠡ', 'ᠬᠡᠨ'],
        cloze: [
          { sentence: 'ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ___᠃', answer: 'ᠨᠠᠶ᠋ᠢᠵᠠ', options: ['ᠨᠠᠶ᠋ᠢᠵᠠ', 'ᠡᠵᠢ', 'ᠠᠪᠤ'], translation: 'Esta pessoa é meu amigo/minha amiga.' },
          { sentence: '___ ᠡᠵᠢ᠃', answer: 'ᠡᠨᠡ', options: ['ᠡᠨᠡ', 'ᠬᠡᠨ', 'ᠲᠠ'], translation: 'Esta é a mãe.' },
          { sentence: 'ᠡᠨᠡ ___᠃', answer: 'ᠠᠪᠤ', options: ['ᠠᠪᠤ', 'ᠮᠣᠷᠢ', 'ᠴᠠᠢ'], translation: 'Este é o pai.' },
        ],
        voice: {
          bot: 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ', 'minu ner-e', 'ᠨᠡᠷ᠎ᠡ', 'ner-e', 'Миний нэр', 'нэр'],
          hint: 'Diga seu nome com ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ (meu nome é …) e o seu nome.',
        },
        communityPrompt: 'Apresente sua família usando ᠡᠵᠢ (mãe), ᠠᠪᠤ (pai) e ᠨᠠᠶ᠋ᠢᠵᠠ (amigo/amiga).',
      },
      {
        id: 'mvf-u1-l3',
        title: 'Prova: saudações e família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ? ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ', 'minu ner-e', 'ᠰᠠᠶ᠋ᠢᠨ', 'sayin', 'Миний нэр', 'сайн'],
          hint: 'Responda com ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ (meu nome é …) e o seu nome.',
        },
        communityPrompt: 'Escreva cinco frases curtas se apresentando: seu nome, sua família e um amigo.',
      },
    ],
  },
  {
    id: 'mvf-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᠭᠡᠷ',
    emoji: '⛺',
    card: {
      id: 'mvf-c2',
      title: 'A guer e o gado da estepe',
      emoji: '🐴',
      history: 'A pecuária nômade é o centro da vida tradicional mongol, e as palavras do gado estão entre as mais antigas da língua: “ᠮᠣᠷᠢ” (mori), cavalo; “ᠬᠣᠨᠢ” (qoni), ovelha; “ᠢᠮᠠᠭ᠎ᠠ” (imaɣ-a), cabra; “ᠲᠡᠮᠡᠭᠡ” (temege), camelo. A “ᠭᠡᠷ” (ger) é a tenda redonda levada de um pasto a outro, que em português também se chama “iurta”.',
      culture_tip: 'O “ᠠᠶᠢᠷᠠᠭ” (ayiraɣ) é o leite de égua fermentado, bebida tradicional do verão. O Wiktionary registra que a palavra vem do protomongólico, que por sua vez a tomou emprestada de uma língua turcomana — a mesma origem do “ayran” do turco.',
      grammar_why: 'Os numerais e os adjetivos vêm ANTES do substantivo, e numa frase como “o camelo é grande” o adjetivo vem antes da cópula “ᠪᠠᠢᠨ᠎ᠠ” (bayin-a), que fecha a frase.',
      grammar_examples: [
        ['ᠬᠣᠶᠠᠷ ᠮᠣᠷᠢ᠃', 'Dois cavalos.'],
        ['ᠨᠠᠷᠠ ᠤᠯᠠᠭᠠᠨ ᠪᠠᠢᠨ᠎ᠠ᠃', 'O sol está vermelho.'],
      ],
      character_guide: [
        ['ᠬᠣᠨᠢ', 'q (k): som raspado na garganta, como o “rr” carioca', 'ᠬᠣᠨᠢ (qoni, ovelha)'],
        ['ᠭᠠᠷ', 'ɣ (g): em palavras com a, o, u, é escrito com dois pontos ao lado (o ɣ é uma das letras “com pontos” da escrita clássica), o que o separa do q', 'ᠭᠠᠷ (ɣar, mão)'],
        ['ᠢᠮᠠᠭ᠎ᠠ', 'separador de vogal: a última vogal fica solta, com um espacinho antes, mas continua sendo parte da palavra', 'ᠢᠮᠠᠭ᠎ᠠ (imaɣ-a, cabra)'],
      ],
    },
    lessons: [
      {
        id: 'mvf-u2-l1',
        title: 'Animais',
        kind: 'licao',
        words: ['ᠮᠣᠷᠢ', 'ᠬᠣᠨᠢ', 'ᠢᠮᠠᠭ᠎ᠠ', 'ᠲᠡᠮᠡᠭᠡ', 'ᠤᠰᠤ', 'ᠬᠣᠶᠠᠷ'],
        cloze: [
          { sentence: 'ᠡᠨᠡ ___᠃', answer: 'ᠮᠣᠷᠢ', options: ['ᠮᠣᠷᠢ', 'ᠬᠣᠨᠢ', 'ᠢᠮᠠᠭ᠎ᠠ'], translation: 'Isto é um cavalo.' },
          { sentence: '___ ᠬᠣᠨᠢ᠃', answer: 'ᠬᠣᠶᠠᠷ', options: ['ᠬᠣᠶᠠᠷ', 'ᠨᠢᠭᠡ', 'ᠭᠤᠷᠪᠠ'], translation: 'Duas ovelhas.' },
          { sentence: 'ᠡᠨᠡ ___᠃', answer: 'ᠤᠰᠤ', options: ['ᠤᠰᠤ', 'ᠠᠭᠤᠯᠠ', 'ᠴᠠᠰᠤ'], translation: 'Isto é água.' },
        ],
        voice: {
          bot: 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?',
          botTranslation: 'O que é isto?',
          expected: ['ᠡᠨᠡ ᠮᠣᠷᠢ᠃', 'ene mori.', 'ᠮᠣᠷᠢ', 'mori', 'Энэ морь.', 'морь'],
          hint: 'Diga o que é com ᠡᠨᠡ ___᠃ (isto é ___), por exemplo ᠡᠨᠡ ᠮᠣᠷᠢ᠃ (isto é um cavalo).',
        },
        communityPrompt: 'Escreva sobre os animais da estepe usando ᠮᠣᠷᠢ (cavalo), ᠬᠣᠨᠢ (ovelha), ᠢᠮᠠᠭ᠎ᠠ (cabra) e ᠲᠡᠮᠡᠭᠡ (camelo).',
      },
      {
        id: 'mvf-u2-l2',
        title: 'Casa e comida',
        kind: 'licao',
        words: ['ᠴᠠᠢ', 'ᠠᠶᠢᠷᠠᠭ', 'ᠭᠡᠷ', 'ᠲᠣᠮᠤ', 'ᠰᠠᠶ᠋ᠢᠨ', 'ᠤᠯᠠᠭᠠᠨ'],
        cloze: [
          { sentence: 'ᠡᠨᠡ ___᠃', answer: 'ᠭᠡᠷ', options: ['ᠭᠡᠷ', 'ᠴᠠᠢ', 'ᠰᠦᠨ'], translation: 'Isto é uma casa/guer.' },
          { sentence: 'ᠲᠡᠮᠡᠭᠡ ___ ᠪᠠᠢᠨ᠎ᠠ᠃', answer: 'ᠲᠣᠮᠤ', options: ['ᠲᠣᠮᠤ', 'ᠰᠠᠶ᠋ᠢᠨ', 'ᠤᠯᠠᠭᠠᠨ'], translation: 'O camelo é grande.' },
          { sentence: 'ᠨᠠᠷᠠ ___ ᠪᠠᠢᠨ᠎ᠠ᠃', answer: 'ᠤᠯᠠᠭᠠᠨ', options: ['ᠤᠯᠠᠭᠠᠨ', 'ᠴᠠᠭᠠᠨ', 'ᠰᠠᠶ᠋ᠢᠨ'], translation: 'O sol está vermelho.' },
        ],
        voice: {
          bot: 'ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?',
          botTranslation: 'Quer beber chá?',
          expected: ['ᠲᠡᠢᠮᠦ᠂ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ᠃', 'teyimü, sayin bayin-a.', 'ᠲᠡᠢᠮᠦ', 'teyimü', 'Тийм, сайн байна.', 'тийм'],
          hint: 'Responda ᠲᠡᠢᠮᠦ᠂ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ᠃ (sim, está bom), usando “ᠲᠡᠢᠮᠦ” (teyimü), sim.',
        },
        communityPrompt: 'Escreva sobre a comida da estepe usando ᠴᠠᠢ (chá) e ᠠᠶᠢᠷᠠᠭ (airag).',
      },
      {
        id: 'mvf-u2-l3',
        title: 'Prova: a guer e a estepe',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?',
          botTranslation: 'O que é isto?',
          expected: ['ᠡᠨᠡ ᠭᠡᠷ᠃', 'ene ger.', 'ᠭᠡᠷ', 'ger', 'Энэ гэр.', 'гэр'],
          hint: 'Diga o que é usando ᠡᠨᠡ ___᠃.',
        },
        communityPrompt: 'Escreva cinco frases curtas sobre a vida na estepe (animais, comida, a guer), usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
