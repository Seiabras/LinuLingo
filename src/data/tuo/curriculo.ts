import type { UnitSeed } from '../types';

/**
 * Trilha do tukano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e
 * para a explicação de como as frases de exemplo que não são citações diretas foram montadas
 * (combinando palavras e sufixos atestados, nunca inventados).
 *
 * Os textos longos (history, culture_tip, grammar_why) usam crase (template string) em vez de aspas
 * simples só por causa do apóstrofo do tukano (oclusiva glotal), que aparece dentro de várias palavras
 * citadas (ye'pâ-masa, te'á, yɨ'ɨ…) — não é parte da convenção de aspas do projeto, que continua “ ” ‘ ’.
 */
export const UNITS_TUO: UnitSeed[] = [
  {
    id: 'tuo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Anuáto!',
    emoji: '👋',
    card: {
      id: 'tuo-c1',
      title: 'A língua franca do Alto Rio Negro',
      emoji: '🇧🇷',
      history: `O tukano (os próprios falantes se chamam “Ye'pâ-masa”, lit. “gente da nossa terra”, também grafado “Dahseyé”) é uma língua indígena viva da família Tukano (Tukanoana), falada às margens do rio Uaupés e de afluentes como o Tiquié e o Papuri, no noroeste do Amazonas, e também na Colômbia. As estimativas de falantes variam entre as fontes — cerca de 5 mil no Brasil e mais de 7 mil na Colômbia, somando mais de 10 mil ao todo. Desde 2002 (Lei Municipal 145) o tukano é cooficial em São Gabriel da Cachoeira (AM), ao lado do português, do nheengatu e do baniwa. Mas o mais marcante é o seu papel de língua franca: o Alto Rio Negro é organizado por uma regra de exogamia linguística — cada pessoa nasce falando a língua do pai e deve se casar com alguém de outro grupo, idealmente falante de outra língua — e por isso quase todo mundo ali fala várias línguas indígenas, com o tukano servindo de ponte entre elas.`,
      culture_tip: `Os próprios Ye'pâ-masa também se chamam “Dásea” (tucano, a ave) — é daí que vem o nome “tukano”/“tucano” usado em português para o povo e para a língua. São Gabriel da Cachoeira e Iauaretê, às margens do Uaupés, são os principais centros da região onde se fala tukano no dia a dia.`,
      grammar_why: `O tukano é uma língua tonal: a altura da voz (um tom ascendente, um tom alto e um tom baixo, sem marca) muda o sentido da palavra — não é só uma questão de emoção ou ênfase, como em português. A escrita marca o tom ascendente com acento agudo (á) e o tom alto com circunflexo (â, ô): “anuáto” tem tom ascendente na última sílaba, e “koô” (ela) tem tom alto.`,
      grammar_examples: [
        ["Anuáto! Yɨ'ɨ ye'pâ-masɨ nii-'.", "Olá! Eu sou ye'pâ-masɨ (gente da nossa terra)."],
        ["Anutí? — Anú'u.", 'Como você está? — Eu estou bem.'],
        ["Te'á! — Aɨ!", 'Vamos! — Tá bom!'],
        ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.'],
      ],
      character_guide: [
        ['ɨ', 'vogal central, entre o “u” e o “i” do português', "yɨ'ɨ (eu), mɨ'ɨ (tu/você)"],
        ["'", 'oclusiva glotal: uma parada curta na garganta, como a pausa de “uh-oh” em inglês', "te'á (vamos!), a'tiá (vem cá!)"],
        ['á, í, ú (acento agudo)', 'marca o tom ascendente — a voz sobe nessa sílaba', 'anuáto (olá), anutí (como está?)'],
        ['â, ô (circunflexo)', 'marca o tom alto — a sílaba sai numa altura mais alta, sem subir nem descer', 'koô (ela), ɨ̃sâ (nós, exclusivo)'],
        ['ã, ĩ, ɨ̃ (til)', 'vogal nasalizada: o ar sai também pelo nariz', 'kɨ̃ɨ (ele), ɨ̃sâ (nós, exclusivo)'],
      ],
    },
    lessons: [
      {
        id: 'tuo-u1-l1',
        title: 'Anuáto, anutí, aɨ',
        kind: 'licao',
        words: ['Anuáto', 'Anutí', "Anú'u", 'Aɨ', "Masîtisa'", "Te'á"],
        cloze: [
          { sentence: '___! Anutí?', answer: 'Anuáto', options: ['Anuáto', "Te'á", 'Aɨ'], translation: 'Olá! Como você está?' },
          { sentence: '___? — Anú\'u.', answer: 'Anutí', options: ['Anutí', "Masîtisa'", 'Aɨ'], translation: 'Como você está? — Eu estou bem.' },
          { sentence: "Te'á! — ___!", answer: 'Aɨ', options: ['Aɨ', 'Anuáto', "Masîtisa'"], translation: 'Vamos! — Tá bom!' },
        ],
        voice: {
          bot: 'Anuáto! Anutí?',
          botTranslation: 'Olá! Como você está?',
          expected: ["Anuáto! Anú'u.", "anú'u", 'aɨ'],
          hint: 'Devolva a saudação com “Anuáto!” e diga que está bem com “Anú\'u”.',
        },
        communityPrompt: 'Escreva uma saudação em tukano: “Anuáto!”, a pergunta “Anutí?” e a resposta “Anú\'u”.',
      },
      {
        id: 'tuo-u1-l2',
        title: "Yɨ'ɨ, mɨ'ɨ, kɨ̃ɨ, koô",
        kind: 'licao',
        words: ["yɨ'ɨ", "mɨ'ɨ", 'kɨ̃ɨ', 'koô', 'marî', 'naâ'],
        cloze: [
          { sentence: "___ ke'ra ye'pâ-masɨ nii-'.", answer: "Yɨ'ɨ", options: ["Yɨ'ɨ", "Mɨ'ɨ", 'Kɨ̃ɨ'], translation: "Eu também sou ye'pâ-masɨ (gente da nossa terra)." },
          { sentence: "Péduru ___ tɨ'sâ-mi.", answer: 'koô-re', options: ['koô-re', 'kɨ̃ɨ-re', 'naâ-re'], translation: 'Pedro gosta dela.' },
          { sentence: "Too pũríkã, ___ i'tiárã ye'pâ-masa nii-'.", answer: 'Marî', options: ['Marî', 'Naâ', 'Mɨsâ'], translation: "Então, nós três somos ye'pâ-masa." },
        ],
        voice: {
          bot: "Mɨ'ɨ ye'pâ-masɨ nii-á-ti?",
          botTranslation: "Você é ye'pâ-masɨ?",
          expected: ["Yɨ'ɨ ye'pâ-masɨ nii-'.", "yɨ'ɨ", "nii-'"],
          hint: 'Responda com “Yɨ\'ɨ … nii-\'.” (eu sou…), usando o pronome “yɨ\'ɨ” (eu).',
        },
        communityPrompt: 'Apresente-se em tukano usando “Yɨ\'ɨ … nii-\'.” (eu sou…) e diga “ele” com “kɨ̃ɨ” e “ela” com “koô”.',
      },
      {
        id: 'tuo-u1-l3',
        title: 'Test: anuáto',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Anuáto! Mɨ'ɨ ye'pâ-masɨ nii-á-ti?",
          botTranslation: "Olá! Você é ye'pâ-masɨ?",
          expected: ["Anuáto! Yɨ'ɨ ye'pâ-masɨ nii-'. Anú'u!", "yɨ'ɨ", "nii-'"],
          hint: 'Devolva a saudação, diga que é ye\'pâ-masɨ com “Yɨ\'ɨ … nii-\'.” e que está bem com “Anú\'u”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (“Anuáto!”), quem você é (“Yɨ\'ɨ … nii-\'.”) e como está (“Anú\'u”).',
      },
    ],
  },
  {
    id: 'tuo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Ye'pâ-masa",
    emoji: '🏞️',
    card: {
      id: 'tuo-c2',
      title: 'Quem somos, e como se sabe',
      emoji: '🧑',
      history: `Nos diálogos de exemplo documentados para o tukano, apresentar-se é falar do próprio grupo: “De qual grupo ela é?” — “Ela é ye'pâ-maso. Eu também sou ye'pâ-masɨ. Somos ye'pâ-masa, nós dois.” Repare que a palavra muda de forma (“ye'pâ-maso”, “ye'pâ-masɨ”, “ye'pâ-masa”): o tukano marca, na própria palavra, se quem fala é mulher, não-mulher, ou mais de uma pessoa — veja a aba Gramática.`,
      culture_tip: `A palavra “masa” (gente, pessoa) está no coração da autodesignação “Ye'pâ-masa”. É um conceito que os Ye'pâ-masa aplicam de forma relativa, segundo o Instituto Socioambiental (ISA): cada povo do Alto Rio Negro pode se ver como “masa” (gente) a partir do seu próprio ponto de vista.`,
      grammar_why: `O verbo do tukano quase sempre carrega um sufixo que diz COMO o falante sabe o que está dizendo: se viu com os próprios olhos, se sentiu, se alguém contou, ou se deduziu. No modo “visto” (evidência direta), a 3ª pessoa do singular muda de sufixo conforme o gênero: “-mi” para não-feminino (“Péduru … tɨ'sâ-mi”, Pedro gosta) e “-mo” para feminino (“ye'pâ-maso nii-á-mo”, ela é ye'pâ-maso). Já a 1ª e a 2ª pessoa (eu, tu, nós) usam o mesmo sufixo “-'”, sem distinguir gênero: “Yɨ'ɨ … nii-'.” (eu sou…).`,
      grammar_examples: [
        ["Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?", 'O que a sua mãe está fazendo?'],
        ["Da'rê ba'a-go' wee-á-mo, ɨ̃sa yaá wi'i-pɨ.", 'Ela está preparando mandioca, na nossa casa.'],
        ["Ye'pâ-masa nii-', ɨ̃sâ pɨɨárã.", "Somos ye'pâ-masa, nós dois."],
        ["Mɨsâ ye'pâ-masa nii-ti?", "Vocês são ye'pâ-masa?"],
      ],
      character_guide: [
        ['-mi / -mo', 'sufixo do verbo no modo “visto”, 3ª pessoa do singular: não-feminino / feminino', "tɨ'sâ-mi (ele gosta, visto), nii-á-mo (ela é, visto)"],
        ["-'", 'sufixo do verbo no modo “visto” para as outras pessoas (eu, tu, nós, vocês)', "nii-' (sou/somos/és, visto)"],
        ['-ti', 'sufixo que marca pergunta', 'nii-ti? (é…?), wee-á-ti? (está fazendo…?)'],
        ['-re', 'marca o objeto da frase; obrigatório quando o objeto é pessoa ou pronome pessoal', 'koô-re (ela, como objeto: “…-la”)'],
      ],
    },
    lessons: [
      {
        id: 'tuo-u2-l1',
        title: 'Pacó, númíó, masa',
        kind: 'licao',
        words: ['pacó', 'númíó', 'masa', "Ye'pâ-masa", 'Dásea', 'pɨɨárã'],
        cloze: [
          { sentence: "Mɨ'ɨ ___, de'ró weé-go' wee-á-ti?", answer: 'pacó', options: ['pacó', 'númíó', 'masa'], translation: 'O que a sua mãe está fazendo?' },
          { sentence: '___ nii-mo.', answer: 'Númíó', options: ['Númíó', 'Masa', 'Dásea'], translation: 'É mulher. / Ela é mulher.' },
          { sentence: "Ye'pâ-masa nii-', ɨ̃sâ ___.", answer: 'pɨɨárã', options: ['pɨɨárã', "i'tiárã", 'naâ'], translation: "Somos ye'pâ-masa, nós dois." },
        ],
        voice: {
          bot: "Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?",
          botTranslation: 'O que a sua mãe está fazendo?',
          expected: ["Da'rê ba'a-go' wee-á-mo.", 'pacó', 'wee-á-mo'],
          hint: 'Diga que ela (sua mãe) está fazendo algo, terminando o verbo com “-á-mo” (visto, feminino).',
        },
        communityPrompt: 'Escreva sobre sua família usando “pacó” (mãe) e sobre sua identidade usando “masa” e “Ye\'pâ-masa”.',
      },
      {
        id: 'tuo-u2-l2',
        title: 'Ɨ̃sâ, mɨsâ, yamiákã',
        kind: 'licao',
        words: ['ɨ̃sâ', 'mɨsâ', 'Yamiákã', "Ni'kaá", "A'tiá", "i'tiárã"],
        cloze: [
          { sentence: "___ pɨɨárã, ye'pâ-masa nii-'.", answer: 'Ɨ̃sâ', options: ['Ɨ̃sâ', 'Mɨsâ', 'Marî'], translation: "Nós dois somos ye'pâ-masa." },
          { sentence: "___ ye'pâ-masa nii-ti?", answer: 'Mɨsâ', options: ['Mɨsâ', 'Naâ', 'Ɨ̃sâ'], translation: "Vocês são ye'pâ-masa?" },
          { sentence: "___, te'á!", answer: 'Yamiákã', options: ['Yamiákã', "Ni'kaá", "A'tiá"], translation: 'Amanhã, vamos!' },
        ],
        voice: {
          bot: "Yamiákã, mɨsâ ye'pâ-masa nii-ti?",
          botTranslation: "Amanhã, vocês são ye'pâ-masa?",
          expected: ["Aɨ! Ɨ̃sâ ye'pâ-masa nii-'.", 'ɨ̃sâ', "nii-'"],
          hint: 'Confirme com “Aɨ!” (tá bom) e diga “Ɨ̃sâ … nii-\'.” (nós somos…).',
        },
        communityPrompt: 'Combine um encontro para amanhã (“Yamiákã”) e diga “nós” com “ɨ̃sâ” e “vocês” com “mɨsâ”.',
      },
      {
        id: 'tuo-u2-l3',
        title: "Test: ye'pâ-masa",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Ni'kaá, mɨ'ɨ pacó de'ró weé-go' wee-á-ti? Mɨsâ ye'pâ-masa nii-ti?",
          botTranslation: 'Hoje, o que a sua mãe está fazendo? Vocês são ye\'pâ-masa?',
          expected: ["Da'rê ba'a-go' wee-á-mo. Aɨ, ɨ̃sâ ye'pâ-masa nii-'.", 'wee-á-mo', "nii-'"],
          hint: 'Fale da sua mãe terminando o verbo com “-á-mo” e confirme a identidade com “Aɨ, ɨ̃sâ … nii-\'.”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e sobre quem vocês são, usando “pacó”, “masa”, “Ye\'pâ-masa”, “ɨ̃sâ” e “mɨsâ”.',
      },
    ],
  },
];
