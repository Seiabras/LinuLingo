import type { UnitSeed } from '../types';

/**
 * Trilha do huni kuĩ/hãtxa kuĩ: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e para a explicação de
 * como as frases que não são citações diretas da Wikipédia em português foram montadas combinando só
 * palavras e os dois padrões de frase já atestados (demonstrativo “na” + substantivo; pronome+“-ã” +
 * substantivo) — nunca uma palavra nova inventada.
 */
export const UNITS_CBS: UnitSeed[] = [
  {
    id: 'cbs-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ɨ huni kuin',
    emoji: '🏹',
    card: {
      id: 'cbs-c1',
      title: 'Huni kuin, a gente verdadeira',
      emoji: '🏞️',
      history:
        'O huni kuĩ (os próprios falantes se autodenominam “huni kuin”, lit. “homens verdadeiros” ou “gente com costumes conhecidos”) é um povo e uma língua indígena viva da família pano, com cerca de 13 mil pessoas: cerca de 10.818 em terras indígenas do leste do Acre — como as do rio Jordão, do Purus, do Humaitá e do Breu — e cerca de 2.419 no sudeste do Peru, ao longo dos rios Curanja e Purus. O nome “kaxinawá”, ainda muito usado em fontes acadêmicas e no próprio código internacional da língua, é na verdade um exônimo de origem pejorativa — significa literalmente “povo morcego”, “povo canibal” ou “povo que anda à noite” — e não é como o povo se chama. A língua, por sua vez, costuma ser chamada “Hãtxa Kuĩ” (ou “Hantxa Kuin”), nome também usado pelos próprios professores indígenas do Acre.',
      culture_tip:
        'O huni kuĩ é internacionalmente conhecido por seus cantos (entoados sobretudo durante o uso ritual do “nixi pae”, a bebida que o restante do mundo chama de ayahuasca), pelos desenhos gráficos entrelaçados que decoram corpos, cerâmicas e tecidos, e por um movimento ativo de revitalização cultural e de educação escolar indígena bilíngue, em parceria com organizações como a Comissão Pró-Índio do Acre (CPI-AC).',
      grammar_why:
        'O huni kuĩ tem DUAS séries de pronomes pessoais: uma forma livre, citada aqui como vocabulário básico (“ɨ” eu, “mĩ” tu/você, “nũ” nós, “mã” vocês), e uma segunda série que recebe marcas de caso — o sufixo ergativo “-ã” (sujeito/possuidor) e o acusativo “-a” (objeto) — explicada na aba Gramática. É por isso que “minha casa” se diz “ɨ-ã hiwɨ” (ɨ + -ã, não simplesmente “ɨ”).',
      grammar_examples: [
        ['Ɨ-ã hiwɨ hawɨ̃-rua.', 'Minha casa é bonita.'],
        ['Huni kuin.', 'Gente verdadeira (o autônimo do povo).'],
        ['Mĩ huni kuin?', 'Você é huni kuin?'],
        ['Txai!', 'Parceiro!, amigo! (forma de tratamento)'],
      ],
      character_guide: [
        ['ɨ', 'vogal central alta, como um “i” pronunciado com a língua mais recuada', 'ɨ (eu), bɨru (olho)'],
        ['ã, ĩ, ũ, ɨ̃ (til)', 'vogais nasais — a língua tem vogais orais e nasais distintas', 'huni kuĩ, tsamĩ (três), mɨkɨ̃ (mão)'],
        ['tx', 'africada, como o “tch” de “tchau”', 'Hãtxa Kuĩ, txai, txara'],
        ['x', 'como o “x” de “xícara”', 'yuxin (espírito, visão)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u1-l1',
        title: 'Ɨ, mĩ, nũ, mã',
        kind: 'licao',
        words: ['Ɨ', 'Mĩ', 'Nũ', 'Mã', 'Huni', 'Kuin'],
        cloze: [
          { sentence: '___ huni kuin.', answer: 'Nũ', options: ['Nũ', 'Mã', 'Mĩ'], translation: 'Nós somos huni kuin.' },
          { sentence: '___ huni kuin?', answer: 'Mĩ', options: ['Mĩ', 'Ɨ', 'Nũ'], translation: 'Você é huni kuin?' },
          { sentence: 'Huni ___.', answer: 'kuin', options: ['kuin', 'mĩ', 'nũ'], translation: 'Pessoa verdadeira.' },
        ],
        voice: {
          bot: 'Mĩ huni kuin?',
          botTranslation: 'Você é huni kuin?',
          expected: ['Ɨ huni kuin.', 'huni kuin'],
          hint: 'Responda com “Ɨ huni kuin.” — use o pronome “ɨ” (eu) antes do autônimo do povo.',
        },
        communityPrompt: 'Apresente-se em huni kuĩ usando “Ɨ huni kuin.” e pergunte a alguém “Mĩ huni kuin?”.',
      },
      {
        id: 'cbs-u1-l2',
        title: 'Ɨpa, ɨwa, txai',
        kind: 'licao',
        words: ['Ɨpa', 'Ɨwa', 'Aĩ', 'Aĩbu', 'Txai', 'Hiwɨ'],
        cloze: [
          { sentence: 'Ɨ-ã ___.', answer: 'ɨpa', options: ['ɨpa', 'ɨwa', 'aĩ'], translation: 'Meu pai.' },
          { sentence: 'Ɨ-ã ___ hawɨ̃-rua.', answer: 'hiwɨ', options: ['hiwɨ', 'ɨwa', 'aĩbu'], translation: 'Minha casa é bonita.' },
          { sentence: '___!', answer: 'Txai', options: ['Txai', 'Aĩ', 'Hiwɨ'], translation: 'Parceiro!, amigo! (forma de tratamento)' },
        ],
        voice: {
          bot: 'Txai! Mĩ huni kuin?',
          botTranslation: 'Parceiro! Você é huni kuin?',
          expected: ['Txai! Ɨ huni kuin.', 'txai'],
          hint: 'Devolva o cumprimento com “Txai!” antes de confirmar “Ɨ huni kuin.”.',
        },
        communityPrompt: 'Cumprimente alguém com “Txai!” e apresente sua família usando “Ɨ-ã” antes de “ɨpa” (pai) ou “ɨwa” (mãe).',
      },
      {
        id: 'cbs-u1-l3',
        title: 'Test: Ɨ huni kuin',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Txai! Mĩ huni kuin? Mi-ã hiwɨ hawɨ̃-rua?',
          botTranslation: 'Parceiro! Você é huni kuin? Sua casa é bonita?',
          expected: ['Txai! Ɨ huni kuin. Ɨ-ã hiwɨ hawɨ̃-rua.', 'huni kuin'],
          hint: 'Responda ao cumprimento com “Txai!”, confirme com “Ɨ huni kuin.” e descreva sua casa com “Ɨ-ã hiwɨ hawɨ̃-rua.”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Txai!”), identidade (“Ɨ huni kuin.”) e sua família (“Ɨ-ã ɨpa”, “Ɨ-ã ɨwa”).',
      },
    ],
  },
  {
    id: 'cbs-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Bɨsti, rabɨ, tsamĩ',
    emoji: '🌳',
    card: {
      id: 'cbs-c2',
      title: 'Contar e nomear o rio e a mata',
      emoji: '🏞️',
      history:
        'O huni kuĩ tem numerais próprios de 1 a 10, num sistema de base decimal: “bɨsti” é a unidade e “nati” nomeia a dezena, segundo o linguista Eliane Camargo (1991), que descreveu a língua em detalhe. É uma lógica diferente da de outras línguas indígenas já neste app, como o baniwa, que conta pelas mãos a partir de cinco — no huni kuĩ, cada número de 1 a 10 tem sua própria raiz.',
      culture_tip:
        'As aldeias huni kuĩ se organizam à beira de rios como o Jordão, o Purus, o Humaitá e o Breu, no Acre — o rio é a via de deslocamento, de pesca e também o cenário de boa parte dos cantos e histórias contadas pelos mais velhos, como as reunidas no livro bilíngue “Shenipabu Miyui” (Histórias dos Antigos), publicado com professores indígenas pela Comissão Pró-Índio do Acre.',
      grammar_why:
        'O huni kuĩ marca o substantivo que seguinte a uma ação ou a um apontamento com o demonstrativo “na” (este, esta), colocado ANTES do substantivo — como em “na mani” (esta banana). A língua segue a ordem SOV (Sujeito-Objeto-Verbo): em “na mani pi wɨ” (coma esta banana), o objeto “na mani” vem antes do verbo “pi” (comer).',
      grammar_examples: [
        ['Na mani pi wɨ.', 'Coma esta banana.'],
        ['Na ni.', 'Esta árvore.'],
        ['Na kaya.', 'Este rio.'],
        ['Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã…', 'Um, dois, três, quatro, cinco…'],
      ],
      character_guide: [
        ['ş', 'fricativa retroflexa, sem equivalente exato no português', 'kɨtaş (quatro)'],
        ['na', 'demonstrativo “este/esta”, vem antes do substantivo', 'na mani (esta banana), na kaya (este rio)'],
        ['-ã', 'sufixo de caso (ergativo/possessivo) preso ao pronome', 'ɨ-ã (meu/minha)'],
        ['kɨ, kũ, bu, nɨ, u', 'sílabas comuns nos numerais de 6 a 9', 'sĩti (seis), kɨkũ (sete), bunɨ (oito), usũ (nove)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u2-l1',
        title: 'Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã',
        kind: 'licao',
        words: ['Bɨsti', 'Rabɨ', 'Tsamĩ', 'Kɨtaş', 'Mɨtsã', 'Mani'],
        cloze: [
          { sentence: '___, rabɨ, tsamĩ.', answer: 'Bɨsti', options: ['Bɨsti', 'Rabɨ', 'Nati'], translation: 'Um, dois, três.' },
          { sentence: 'Bɨsti, ___, tsamĩ, kɨtaş.', answer: 'rabɨ', options: ['rabɨ', 'mɨtsã', 'sĩti'], translation: 'Um, dois, três, quatro.' },
          { sentence: 'Na ___ pi wɨ.', answer: 'mani', options: ['mani', 'kaya', 'ni'], translation: 'Coma esta banana.' },
        ],
        voice: {
          bot: 'Na mani pi wɨ.',
          botTranslation: 'Coma esta banana.',
          expected: ['Na mani pi wɨ.', 'mani'],
          hint: 'Repita a frase inteira: “Na mani pi wɨ.” — o demonstrativo “na” vem antes de “mani” (banana).',
        },
        communityPrompt: 'Conte de um a cinco em huni kuĩ (“Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã”) e repita “Na mani pi wɨ.”.',
      },
      {
        id: 'cbs-u2-l2',
        title: 'Ni, kaya, ui, bɨru, mɨkɨ̃, taɨ',
        kind: 'licao',
        words: ['Ni', 'Kaya', 'Ui', 'Bɨru', 'Mɨkɨ̃', 'Taɨ'],
        cloze: [
          { sentence: 'Na ___.', answer: 'kaya', options: ['kaya', 'ni', 'ui'], translation: 'Este rio.' },
          { sentence: 'Ɨ-ã ___.', answer: 'bɨru', options: ['bɨru', 'mɨkɨ̃', 'taɨ'], translation: 'Meu olho.' },
          { sentence: 'Ɨ-ã ___.', answer: 'mɨkɨ̃', options: ['mɨkɨ̃', 'taɨ', 'ni'], translation: 'Minha mão.' },
        ],
        voice: {
          bot: 'Na kaya. Na ni.',
          botTranslation: 'Este rio. Esta árvore.',
          expected: ['Na kaya. Na ni.', 'kaya'],
          hint: 'Use o demonstrativo “na” antes de cada substantivo: “Na kaya.” (este rio), “Na ni.” (esta árvore).',
        },
        communityPrompt: 'Descreva o que vê perto de você usando “na” antes do substantivo — “Na ni.” (esta árvore), “Na kaya.” (este rio) ou “Na ui.” (esta chuva).',
      },
      {
        id: 'cbs-u2-l3',
        title: 'Test: na kaya, na ni',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Na kaya. Rabɨ mɨtsã?',
          botTranslation: 'Este rio. Dois? Cinco?',
          expected: ['Na kaya. Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã.', 'kaya'],
          hint: 'Nomeie o rio com “Na kaya.” e depois conte de um a cinco: “Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã.”.',
        },
        communityPrompt: 'Escreva uma descrição curta da mata ou do rio perto de você, usando “na” antes de pelo menos dois substantivos e contando até cinco.',
      },
    ],
  },
];
