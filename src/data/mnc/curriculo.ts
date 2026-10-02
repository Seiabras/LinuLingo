import type { UnitSeed } from '../types';

/**
 * Trilha do manchu (mnc): as duas unidades do nível A1. Fontes de cada palavra e frase: ver
 * vocabulario.ts. As respostas aceitam a frase na escrita manchu e na romanização (o reconhecimento de
 * voz não tem manchu, então a resposta costuma ser digitada).
 */
export const UNITS_MNC: UnitSeed[] = [
  {
    id: 'mnc-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?',
    emoji: '👋',
    card: {
      id: 'mnc-c1',
      title: 'A língua dos imperadores Qing',
      emoji: '🏯',
      history: 'O manchu foi a língua da dinastia Qing, que governou a China de 1644 a 1912, e por isso aparece até hoje, ao lado do chinês, em placas da Cidade Proibida, em Pequim. A escrita manchu nasceu em 1599, quando o líder jurchen Nurhaci mandou adaptar a escrita mongol à língua do seu povo; em 1632, Dahai acrescentou pontos e círculos para separar sons que a escrita mongol confundia. Hoje o manchu está criticamente ameaçado: o censo chinês de 1990 contou quase 10 milhões de manchus, mas menos de 100 falantes nativos, todos idosos. Há um movimento de resgate, com milhares de pessoas aprendendo a língua.',
      culture_tip: 'O xibe, falado no noroeste da China por descendentes de soldados manchus mandados para lá no século XVIII, é tão próximo do manchu que os dois se entendem. A escrita manchu também é a dos documentos da corte Qing, e muitos historiadores aprendem a língua só para ler esses arquivos.',
      grammar_why: 'Como o mongol, o manchu põe o verbo no fim da frase e marca a função das palavras com partículas depois delas: “ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉” (i boo be weilembi) é “ele constrói uma casa”, com “be” marcando o objeto. Não há artigos nem gênero gramatical.',
      grammar_examples: [
        ['ᠰᡳ ᠰᠠᡳᠶᡡᠨ?', 'Como vai você?'],
        ['ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉', 'Bem, obrigado(a).'],
      ],
      character_guide: [
        ['ᡴᠠ', 'k: sem marca nenhuma', 'ᠠᠪᡴᠠ (abka, céu)'],
        ['ᡤᠠ', 'g: o mesmo desenho, com um ponto ao lado (marca acrescentada por Dahai em 1632)', 'ᡤᠠᠰᡥᠠ (gasha, pássaro)'],
        ['ᡥᠠ', 'h: o mesmo desenho, com um círculo ao lado; soa como o “rr” carioca', 'ᡥᠣᠨᡳᠨ (honin, ovelha)'],
        ['ᡡ', 'ū: outra vogal parecida com o u, mais relaxada (como o “oo” do inglês “foot”, segundo o guia do Wikivoyage), escrita com letra própria', 'ᡳᠨᡩᠠᡥᡡᠨ (indahūn, cão)'],
      ],
    },
    lessons: [
      {
        id: 'mnc-u1-l1',
        title: 'Saudações',
        kind: 'licao',
        words: ['ᠪᡳ', 'ᠰᡳ', 'ᡳ', 'ᠰᠠᡳᠶᡡᠨ', 'ᠪᠠᠨᡳᡥᠠ', 'ᡳᠨᡠ'],
        cloze: [
          { sentence: 'ᠰᡳ ___?', answer: 'ᠰᠠᡳᠶᡡᠨ', options: ['ᠰᠠᡳᠶᡡᠨ', 'ᠪᠠᠨᡳᡥᠠ', 'ᠸᠠᡴᠠ'], translation: 'Como vai você?' },
          { sentence: '___᠈ ᠪᠠᠨᡳᡥᠠ᠉', answer: 'ᠰᠠᡳᠨ', options: ['ᠰᠠᡳᠨ', 'ᡝᡥᡝ', 'ᠠᠮᠪᠠ'], translation: 'Bem, obrigado(a).' },
          { sentence: 'ᠰᡳᠨᡳ ᡤᡝᠪᡠ ___ ᠰᡝᠮᠪᡳ?', answer: 'ᠠᡳ', options: ['ᠠᡳ', 'ᠸᡝ', 'ᠠᡳᠪᡳᡩᡝ'], translation: 'Como você se chama? (lit. “seu nome, o que diz?”)' },
        ],
        voice: {
          bot: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?',
          botTranslation: 'Como vai você?',
          expected: ['ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉', 'sain, baniha.', 'ᠰᠠᡳᠨ', 'sain'],
          hint: 'Responda ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉ (sain, baniha: bem, obrigado).',
        },
        communityPrompt: 'Cumprimente alguém e agradeça usando ᠰᠠᡳᠶᡡᠨ (olá) e ᠪᠠᠨᡳᡥᠠ (obrigado).',
      },
      {
        id: 'mnc-u1-l2',
        title: 'Pessoas e família',
        kind: 'licao',
        words: ['ᡝᠮᡝ', 'ᠠᠮᠠ', 'ᡤᡠᠴᡠ', 'ᠨᡳᠶᠠᠯᠮᠠ', 'ᡝᡵᡝ', 'ᠸᡝ'],
        cloze: [
          { sentence: '___ ᠰᠠᡳᠨ᠉', answer: 'ᠨᡳᠶᠠᠯᠮᠠ', options: ['ᠨᡳᠶᠠᠯᠮᠠ', 'ᡝᡵᡝ', 'ᠸᡝ'], translation: 'A pessoa é boa.' },
          { sentence: 'ᠰᠠᡳᠨ ___᠉', answer: 'ᡤᡠᠴᡠ', options: ['ᡤᡠᠴᡠ', 'ᡝᠮᡝ', 'ᠠᠮᠠ'], translation: 'Um bom amigo.' },
          { sentence: 'ᡝᡵᡝ ᡠᡨᡥᠠᡳ ___ᡳ ᠵᠠᡴᠠ?', answer: 'ᠸᡝ', options: ['ᠸᡝ', 'ᠠᡳ', 'ᡝᡵᡝ'], translation: 'De quem é isto?' },
        ],
        voice: {
          bot: 'ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?',
          botTranslation: 'Como você se chama?',
          expected: ['ᠮᡳᠨᡳ ᡤᡝᠪᡠ', 'mini gebu', 'ᡤᡝᠪᡠ', 'gebu'],
          hint: 'Diga seu nome com ᠮᡳᠨᡳ ᡤᡝᠪᡠ (mini gebu: meu nome é …) e o seu nome.',
        },
        communityPrompt: 'Fale da sua família usando ᡝᠮᡝ (mãe), ᠠᠮᠠ (pai) e ᡤᡠᠴᡠ (amigo).',
      },
      {
        id: 'mnc-u1-l3',
        title: 'Prova: saudações e pessoas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ? ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?',
          botTranslation: 'Como vai? Como você se chama?',
          expected: ['ᠮᡳᠨᡳ ᡤᡝᠪᡠ', 'mini gebu', 'ᠰᠠᡳᠨ', 'sain'],
          hint: 'Responda ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉ e diga seu nome com ᠮᡳᠨᡳ ᡤᡝᠪᡠ.',
        },
        communityPrompt: 'Escreva cinco frases curtas se apresentando: como vai, seu nome e alguém da família.',
      },
    ],
  },
  {
    id: 'mnc-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ',
    emoji: '🐴',
    card: {
      id: 'mnc-c2',
      title: 'Cavalos, caça e as florestas da Manchúria',
      emoji: '🌲',
      history: 'Os manchus descendem dos jurchens, povo das florestas e dos rios do nordeste da Ásia, e eram cavaleiros e caçadores antes de conquistarem a China. A palavra “ᠮᠣᡵᡳᠨ” (morin) (cavalo) vem do jurchen “muri” e tem parentes em outras línguas tungúsicas da Sibéria, como o evenki “мурин”. Já “ᠴᠠᡳ” (cai) (chá) é emprestada do chinês 茶, sinal de séculos de convivência.',
      culture_tip: 'Um exemplo da gramática manchu: “ᡳᠨᡩᠠᡥᡡᠨ ᡩᠣᠪᠣᡵᡳ ᡨᡠᠸᠠᡥᡳᠶᠠᠮᠪᡳ᠉” (indahūn dobori tuwahiyambi), “o cão vigia à noite”.',
      grammar_why: 'Para comparar, o manchu põe a partícula “ci” (de, a partir de) depois do termo de comparação: “ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉” (morin indahūn ci amba) quer dizer “o cavalo é maior que o cão” — literalmente, “cavalo, a partir do cão, grande”.',
      grammar_examples: [
        ['ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉', 'O cavalo é maior que o cão.'],
        ['ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉', 'Ele constrói uma casa.'],
      ],
      character_guide: [
        ['ᠩ', 'ng: o som do “ng” de “bingo”, escrito com uma letra só', 'ᠨᡳᠩᡤᡠᠨ (ninggun, seis)'],
        ['ᡧ', 'š: o “x” de “xícara”', 'ᡧᡠᠨ (šun, sol)'],
        ['ᠴ', 'c: o “tch” de “tchau”', 'ᠴᠠᡳ (cai, chá)'],
      ],
    },
    lessons: [
      {
        id: 'mnc-u2-l1',
        title: 'Animais',
        kind: 'licao',
        words: ['ᠮᠣᡵᡳᠨ', 'ᡥᠣᠨᡳᠨ', 'ᡳᠨᡩᠠᡥᡡᠨ', 'ᡤᠠᠰᡥᠠ', 'ᠮᡠᡴᡝ', 'ᠵᡠᠸᡝ'],
        cloze: [
          { sentence: 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ___᠉', answer: 'ᠠᠮᠪᠠ', options: ['ᠠᠮᠪᠠ', 'ᠠᠵᡳᡤᡝ', 'ᡝᡥᡝ'], translation: 'O cavalo é maior que o cão.' },
          { sentence: '___ ᠮᠣᡵᡳᠨ᠉', answer: 'ᠵᡠᠸᡝ', options: ['ᠵᡠᠸᡝ', 'ᡳᠯᠠᠨ', 'ᡝᠮᡠ'], translation: 'Dois cavalos.' },
          { sentence: 'ᡝᡵᡝ ___᠉', answer: 'ᠮᡠᡴᡝ', options: ['ᠮᡠᡴᡝ', 'ᠮᠣᡵᡳᠨ', 'ᡤᠠᠰᡥᠠ'], translation: 'Esta água.' },
        ],
        voice: {
          bot: 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉',
          botTranslation: 'O cavalo é maior que o cão.',
          expected: ['ᡳᠨᡠ᠉', 'inu.', 'ᡳᠨᡠ', 'inu'],
          hint: 'Concorde com ᡳᠨᡠ᠉ (inu: sim, é isso).',
        },
        communityPrompt: 'Escreva sobre animais usando ᠮᠣᡵᡳᠨ (cavalo), ᡥᠣᠨᡳᠨ (ovelha), ᡳᠨᡩᠠᡥᡡᠨ (cão) e ᡤᠠᠰᡥᠠ (pássaro).',
      },
      {
        id: 'mnc-u2-l2',
        title: 'Casa e comida',
        kind: 'licao',
        words: ['ᠴᠠᡳ', 'ᠰᡠᠨ', 'ᠶᠠᠯᡳ', 'ᠪᠣᠣ', 'ᠠᠮᠪᠠ', 'ᠰᠠᡳᠨ'],
        cloze: [
          { sentence: 'ᡳ ___ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉', answer: 'ᠪᠣᠣ', options: ['ᠪᠣᠣ', 'ᠴᠠᡳ', 'ᠶᠠᠯᡳ'], translation: 'Ele constrói uma casa.' },
          { sentence: 'ᠨᡳᠶᠠᠯᠮᠠ ___᠉', answer: 'ᠰᠠᡳᠨ', options: ['ᠰᠠᡳᠨ', 'ᠴᠠᡳ', 'ᠪᠣᠣ'], translation: 'A pessoa é boa.' },
          { sentence: 'ᡝᡵᡝ ___᠉', answer: 'ᠴᠠᡳ', options: ['ᠴᠠᡳ', 'ᠶᠠᠰᠠ', 'ᡤᠠᠯᠠ'], translation: 'Este chá.' },
        ],
        voice: {
          bot: 'ᠰᡳ ᠴᠠᡳ ᠣᠮᡳᠮᠪᡳᠣ?',
          botTranslation: 'Você bebe chá?',
          expected: ['ᡳᠨᡠ᠈ ᠪᠠᠨᡳᡥᠠ᠉', 'inu, baniha.', 'ᡳᠨᡠ', 'inu'],
          hint: 'Responda ᡳᠨᡠ᠈ ᠪᠠᠨᡳᡥᠠ᠉ (inu, baniha: sim, obrigado).',
        },
        communityPrompt: 'Escreva sobre comida usando ᠴᠠᡳ (chá), ᠰᡠᠨ (leite) e ᠶᠠᠯᡳ (carne).',
      },
      {
        id: 'mnc-u2-l3',
        title: 'Prova: animais e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᠰᡳ ᠠᡳᠪᡳᡩᡝ ᡤᡝᠨᡝᠮᠪᡳ?',
          botTranslation: 'Aonde você vai?',
          expected: ['ᠪᠣᠣ', 'boo', 'ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉', 'jai acaki.'],
          hint: 'Diga que vai pra casa, ᠪᠣᠣ (boo), ou se despeça com ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉ (jai acaki: até logo).',
        },
        communityPrompt: 'Escreva cinco frases curtas sobre animais, comida e casa, usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
