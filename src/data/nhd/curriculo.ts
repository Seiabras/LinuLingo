import type { UnitSeed } from '../types';

/**
 * Trilha do guarani ñandeva: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (sobretudo Edson Amaurílio,
 * «Elementos para uma Sociolinguística do Guarani: o Ñandeva falado na Reserva Indígena de Porto
 * Lindo-Japorã-MS», dissertação de mestrado, UFGD, 2019, e Consuelo de Paiva Godinho Costa, «Nhandewa
 * Aywu», dissertação de mestrado, Unicamp, 2003) e o relatório da tarefa. As frases combinam só
 * palavras confirmadas, com a ordem documentada nas fontes (numeral antes do substantivo; pronome ou
 * substantivo diretamente antes de outro substantivo marcando posse, sem verbo “ser”; adjetivo
 * depois do substantivo) — nunca uma conjugação inventada por semelhança com o guarani paraguaio, o
 * mbyá ou o kaiowá.
 */
export const UNITS_NHD: UnitSeed[] = [
  {
    id: 'nhd-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Xe, nde, nhande: quem é quem',
    emoji: '👋',
    card: {
      id: 'nhd-c1',
      title: 'Ñandeva: “nós”, o povo de Porto Lindo',
      emoji: '🌿',
      history:
        'O ñandeva (também chamado avá guarani ou avá chiripá — o código ISO 639-3 “nhd” reúne os três nomes como uma só língua) é uma língua tupi-guarani viva. No Brasil, é um dos três subgrupos guarani reconhecidos pelo Instituto Socioambiental (ISA), ao lado do kaiowá e do mbyá, vivendo sobretudo no Mato Grosso do Sul (onde soma cerca de 13 mil pessoas, segundo Funasa/Funai 2008) e também em São Paulo, Paraná, Santa Catarina e Rio Grande do Sul, além do leste do Paraguai e da província de Misiones, na Argentina. A dissertação de mestrado de Edson Amaurílio (UFGD, 2019) descreve de perto o ñandeva falado na Terra Indígena Porto Lindo, no município de Japorã (MS), às margens do rio Iguatemi — um ambiente onde convivem o ñandeva, o kaiowá, o avañe’ẽ (guarani paraguaio/jopará) e o espanhol. A própria palavra “ñandeva” quer dizer “nós”, “todos nós” ou “o que é nosso”: é como o povo se autodenomina.',
      culture_tip:
        'Segundo Amaurílio (2019), o ñandeva de Porto Lindo tem um “léxico conservador”, mantido pelos falantes mais velhos, e um “léxico inovador”, dos mais novos: por exemplo, os mais velhos usam “ayvu” para “falar”, enquanto os mais novos preferem “ñe’ẽ” — a mesma palavra que também quer dizer “língua” e, num sentido mais antigo, “alma”.',
      grammar_why:
        'Os pronomes do ñandeva de Porto Lindo não duplicam a vogal das palavras de uma sílaba só: diz-se “xe” (eu) e “nde” (você), sem alongar o som — diferente do ñandeva (nhandewa) falado em São Paulo e no Paraná, que duplica essas mesmas palavras (“txe’e”, “nde’e”). Para descrever ou apresentar alguém, duas palavras lado a lado já formam uma frase completa, sem precisar de um verbo “ser”: “nhande tamõi” já é “nosso avô”, sem nenhuma palavra a mais.',
      grammar_examples: [
        ['Xe ava.', 'Eu sou gente (indígena).'],
        ['Nde ava.', 'Você é gente (indígena).'],
        ['Nhande tamõi.', 'Nosso avô.'],
        ['Nhande jari.', 'Nossa avó.'],
      ],
      character_guide: [
        ['\' (apóstrofo)', 'uma pausa curta na garganta, como em “mba\'e”', 'mba\'e (o que, coisa), araka\'e (quando)'],
        ['ñ', 'som do “nh” de “ninho”', 'ñandeva, ñe\'ẽ'],
        ['x', 'som parecido com o “ch” do francês ou o “sh” do inglês', 'xe (eu)'],
        ['ã, ẽ, ĩ, õ, ũ', 'vogal nasal: sai pelo nariz', 'tamõi, ñe\'ẽ'],
        ['y', 'uma vogal própria do guarani, entre o “i” e o “u”', 'y (água), ywy (terra)'],
      ],
    },
    lessons: [
      {
        id: 'nhd-u1-l1',
        title: 'Xe, nde, nhande, ava, ñandeva',
        kind: 'licao',
        words: ['xe', 'nde', 'nhande', 'ava', 'ñandeva', 'mba\'echa'],
        cloze: [
          { sentence: '___ ava.', answer: 'Xe', options: ['Xe', 'Nde', 'Nhande'], translation: 'Eu sou gente (indígena).' },
          { sentence: '___ ava.', answer: 'Nde', options: ['Nde', 'Xe', 'Nhande'], translation: 'Você é gente (indígena).' },
          { sentence: 'Xe ___.', answer: 'ñandeva', options: ['ñandeva', 'ava', 'nde'], translation: 'Eu sou ñandeva (dos nossos).' },
        ],
        voice: {
          bot: 'Mba\'echa nde?',
          botTranslation: 'Como você (está)?',
          expected: ['Xe ava.', 'xe', 'nhande'],
          hint: 'Responda dizendo quem você é, começando com “Xe…”.',
        },
        communityPrompt: 'Escreva frases curtas com “xe” (eu), “nde” (você) e “nhande” (nós, incluindo quem ouve), e diga que é “ñandeva”.',
      },
      {
        id: 'nhd-u1-l2',
        title: 'Kuña, kuñatai, mitã, tamõi, jari, machu',
        kind: 'licao',
        words: ['kuña', 'kuñatai', 'mitã', 'tamõi', 'jari', 'machu'],
        cloze: [
          { sentence: 'Petei ___.', answer: 'kuña', options: ['kuña', 'kuñatai', 'mitã'], translation: 'Uma mulher.' },
          { sentence: 'Mbohapy ___.', answer: 'mitã', options: ['mitã', 'kuñatai', 'machu'], translation: 'Três crianças.' },
          { sentence: 'Nhande ___.', answer: 'tamõi', options: ['tamõi', 'jari', 'machu'], translation: 'Nosso avô.' },
        ],
        voice: {
          bot: 'Nhande tamõi.',
          botTranslation: 'Nosso avô.',
          expected: ['Nhande jari.', 'nhande', 'jari'],
          hint: 'Troque “tamõi” (avô) por “jari” (avó), mantendo “nhande” (nosso/nossa).',
        },
        communityPrompt: 'Apresente a família com “nhande” (nosso/nossa): avô (tamõi), avó (jari) e bisavó (machu), e conte pessoas com “petei” e “mbohapy”: kuña, kuñatai, mitã.',
      },
      {
        id: 'nhd-u1-l3',
        title: 'Test: xe, nhande, família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Xe ava. Nhande tamõi.',
          botTranslation: 'Eu sou gente. Nosso avô.',
          expected: ['Nde ava. Nhande jari.', 'nde', 'jari'],
          hint: 'Apresente outra pessoa com “Nde…” e fale da avó com “Nhande jari”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: quem você é (“Xe…”), quem é a outra pessoa (“Nde…”) e duas pessoas da família com “Nhande…” (tamõi, jari ou machu).',
      },
    ],
  },
  {
    id: 'nhd-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Y, ywy, ka\'aguy: a terra de Porto Lindo',
    emoji: '🏞️',
    card: {
      id: 'nhd-c2',
      title: 'Entre o rio Iguatemi e o rio Paraná',
      emoji: '🌊',
      history:
        'A Terra Indígena Porto Lindo, no município de Japorã (MS), estudada por Amaurílio (2019), fica cercada pelo rio Iguatemi (ysyry Iguatemi), que deságua no rio Paraná (ysyry Paraná) — exatamente a região descrita no resumo da própria dissertação, escrito também em guarani. É uma área de mata (ka\'aguy) na fronteira entre o Brasil e o Paraguai, onde o ñandeva convive, no dia a dia, com o kaiowá e o avañe\'ẽ. A fonóloga Consuelo de Paiva Godinho Costa (Unicamp, 2003) documentou a mesma língua — chamada por ela de nhandewa — em comunidades de São Paulo e do norte do Paraná, descendentes de famílias que migraram dessa região de origem há quase dois séculos.',
      culture_tip:
        'O jaguaretê (onça) e o jagua (cachorro) aparecem lado a lado no vocabulário comparativo de Amaurílio (2019): são palavras muito parecidas entre as variedades guarani, mas o ñandeva de Porto Lindo usa “jagua” para cachorro, enquanto o nhandewa de São Paulo e do Paraná usa “katsuru” — um bom exemplo de como a mesma língua muda de uma região para outra.',
      grammar_why:
        'Para contar, o numeral vem sempre antes do substantivo, como em “mbohapy ava” (três pessoas) — a própria Amaurílio (2019) escreve, no resumo da sua dissertação, “mbohapy ambue ñe\'e” (“três outras línguas”). O adjetivo, ao contrário, vem sempre depois: “ywy porã” é “a terra é boa”, nunca “porã ywy”.',
      grammar_examples: [
        ['Ywy porã.', 'A terra é boa.'],
        ['Petei y.', 'Uma (porção de) água.'],
        ['Mbohapy ava.', 'Três pessoas.'],
        ['Jaguaretê pytã.', 'Onça vermelha (cor usada para descrever).'],
      ],
      character_guide: [
        ['j', 'som parecido com o “dj” do inglês “juice”', 'jagua (cachorro), jaguaretê (onça)'],
        ['h', 'som do “r” de “rato”', '(em palavras como “ha\'e”, não neste grupo de palavras)'],
        ['\'', 'pausa curta na garganta', 'ka\'aguy (mata, floresta)'],
        ['y', 'vogal própria do guarani, entre “i” e “u”', 'ywyra (árvore), ysyry (rio)'],
      ],
    },
    lessons: [
      {
        id: 'nhd-u2-l1',
        title: 'Y, ywy, ywyra, oky, ka\'aguy, ysyry',
        kind: 'licao',
        words: ['y', 'ywy', 'ywyra', 'oky', 'ka\'aguy', 'ysyry'],
        cloze: [
          { sentence: '___ porã.', answer: 'Ywy', options: ['Ywy', 'Y', 'Oky'], translation: 'A terra é boa.' },
          { sentence: 'Petei ___.', answer: 'ywyra', options: ['ywyra', 'ysyry', 'y'], translation: 'Uma árvore.' },
          { sentence: '___ porã.', answer: 'Ka\'aguy', options: ['Ka\'aguy', 'Oky', 'Ywyra'], translation: 'A mata é boa.' },
        ],
        voice: {
          bot: 'Petei y.',
          botTranslation: 'Uma (porção de) água.',
          expected: ['Petei ysyry.', 'ysyry', 'ywy'],
          hint: 'Troque “y” (água) por “ysyry” (rio), mantendo “petei” (um/uma).',
        },
        communityPrompt: 'Descreva a natureza perto de Porto Lindo com “___ porã” (terra, mata) e conte com “petei”: água, árvore, rio.',
      },
      {
        id: 'nhd-u2-l2',
        title: 'Jagua, jaguaretê, mbarakaja, porã, pytã, petei',
        kind: 'licao',
        words: ['jagua', 'jaguaretê', 'mbarakaja', 'porã', 'pytã', 'petei'],
        cloze: [
          { sentence: 'Petei ___.', answer: 'jagua', options: ['jagua', 'jaguaretê', 'mbarakaja'], translation: 'Um cachorro.' },
          { sentence: 'Jaguaretê ___.', answer: 'pytã', options: ['pytã', 'porã', 'petei'], translation: 'Onça vermelha.' },
          { sentence: 'Mbarakaja ___.', answer: 'porã', options: ['porã', 'pytã', 'petei'], translation: 'Um gato bonito.' },
        ],
        voice: {
          bot: 'Petei jagua.',
          botTranslation: 'Um cachorro.',
          expected: ['Petei mbarakaja.', 'petei', 'mbarakaja'],
          hint: 'Troque “jagua” (cachorro) por “mbarakaja” (gato), mantendo “petei” (um).',
        },
        communityPrompt: 'Descreva animais com “porã” (bom, bonito) e “pytã” (vermelho), e conte-os com “petei”: jagua, jaguaretê, mbarakaja.',
      },
      {
        id: 'nhd-u2-l3',
        title: 'Test: natureza e animais',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ywy porã. Petei ysyry.',
          botTranslation: 'A terra é boa. Um rio.',
          expected: ['Ka\'aguy porã. Petei jaguaretê.', 'ka\'aguy', 'jaguaretê'],
          hint: 'Descreva a mata com “porã” e conte um animal com “petei”.',
        },
        communityPrompt: 'Escreva seis frases sobre a natureza (ywy, ka\'aguy, ysyry, ywyra) e os animais (jagua, jaguaretê, mbarakaja) perto de Porto Lindo, usando “porã”, “pytã” e os numerais “petei”/“mbohapy”.',
      },
    ],
  },
];
