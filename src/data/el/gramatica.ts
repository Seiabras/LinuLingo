import type { GrammarTopic } from '../types';

/** Tópicos de gramática do grego — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_EL: GrammarTopic[] = [
  {
    id: 'el-g1',
    level: 'A1.1',
    title: 'O alfabeto: as letras que enganam',
    emoji: '🔤',
    summary: 'O alfabeto grego tem 24 letras. Algumas parecem latinas mas soam diferente, e cinco delas soam todas como “i”.',
    sections: [
      {
        text: 'Quase tudo se lê letra por letra. Cuidado com as letras que parecem conhecidas e com as que mudam de som conforme a vogal seguinte.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['Β β', '“v”', 'βράδυ (noite)'],
            ['Δ δ', '“th” sonoro, como em “this”', 'δέκα (dez)'],
            ['Θ θ', '“th” surdo, como em “think”', 'Αθήνα'],
            ['Χ χ', '“h” forte, raspado na garganta', 'έχω'],
            ['Γ γ', '“g” suave (antes de α/ο/υ) ou “y” (antes de ε/ι)', 'γάτα, γιος'],
            ['Φ φ', '“f”', 'φίλος (amigo)'],
            ['Η, Ι, Υ, ΕΙ, ΟΙ', 'todas soam “i”', 'φίλη, φίλοι, είμαι'],
          ],
        },
        examples: [
          ['Γεια σου!', 'Oi!'],
          ['Το γάλα είναι άσπρο.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “χ” como um “k”: na verdade é um som raspado, parecido com o “r” carioca.',
      'Confundir η, ι, υ, ει e οι: todas soam “i” — “φίλη” (amiga) e “φίλοι” (amigos) soam quase iguais.',
      'Esquecer o tonos (´): sem ele, não dá pra saber qual sílaba é a tônica.',
    ],
    quiz: [
      { question: 'Como soa o “χ” de “έχω”?', options: ['um “h” forte e raspado', 'como o “k” de “casa”', 'como o “sh” de “show”'], answer: 'um “h” forte e raspado', explanation: 'No grego, o “χ” é um som raspado na garganta, sem equivalente exato em português.' },
      { question: 'Qual letra soa como “th” sonoro (como em “this”)?', options: ['δ', 'θ', 'χ'], answer: 'δ', explanation: '“Δ” é o “th” sonoro; “θ” é o “th” surdo (como em “think”).' },
    ],
  },
  {
    id: 'el-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo “είμαι” (ser, estar)',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais e um verbo “ser” que quase nunca precisa do pronome junto.',
    sections: [
      {
        text: 'A terminação do verbo já mostra quem fala, então o grego normalmente deixa o pronome de fora — como o português. “εγώ είμαι…” soa tão forçado quanto “EU sou brasileiro” repetido toda hora; serve só para dar ênfase.',
        table: {
          head: ['Pronome', 'Tradução', 'είμαι (ser, estar)'],
          rows: [
            ['εγώ', 'eu', 'είμαι'],
            ['εσύ', 'tu, você', 'είσαι'],
            ['αυτός / αυτή', 'ele / ela', 'είναι'],
            ['εμείς', 'nós', 'είμαστε'],
            ['εσείς', 'vocês; o senhor, a senhora', 'είστε'],
            ['αυτοί', 'eles, elas', 'είναι'],
          ],
        },
        examples: [
          ['Είμαι από το Ρίο ντε Τζανέιρο.', 'Sou do Rio de Janeiro.'],
          ['Είναι από την Αθήνα.', 'Ele é de Atenas.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use “εσείς” com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Από πού είστε;', 'De onde o senhor é?'],
          ['Πώς σας λένε;', 'Como o senhor se chama?'],
        ],
      },
    ],
    pitfalls: [
      'Usar “εγώ”, “εσύ” o tempo todo: soa redundante, como repetir o pronome em português.',
      'Confundir “πού” (onde) com “πώς” (como): são duas palavras diferentes, não a mesma com acento trocado.',
    ],
    quiz: [
      { question: 'Como se diz “Eu sou de Curitiba” do jeito mais natural?', options: ['Είμαι από την Κουρίτιμπα.', 'Εγώ είμαι εγώ από την Κουρίτιμπα.', 'Εσύ είσαι από την Κουρίτιμπα.'], answer: 'Είμαι από την Κουρίτιμπα.', explanation: 'A terminação “-αι” já mostra que é “eu”; o pronome “εγώ” fica de fora, como em português.' },
      { question: 'Complete: “Αυτή ___ από τη Θεσσαλονίκη.” (Ela é de Salônica.)', options: ['είναι', 'είμαι', 'είσαι'], answer: 'είναι', explanation: '“Είναι” é a forma de “αυτός/αυτή” (ele/ela) e também de “αυτοί” (eles).' },
    ],
  },
  {
    id: 'el-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, marcados pelo artigo, e um possessivo (“μου”) que nunca muda.',
    sections: [
      {
        text: 'O artigo mostra o gênero: “ο” (masculino), “η” (feminino), “το” (neutro). Diferente do artigo e do adjetivo, o possessivo não concorda com o gênero — “μου”, “σου”, “του/της”, “μας”, “σας”, “τους” ficam sempre iguais e vêm depois da palavra.',
        table: {
          head: ['Gênero', 'Artigo', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'ο', 'ο αδελφός μου'],
            ['feminino', 'η', 'η αδελφή μου'],
            ['neutro', 'το', 'το σπίτι μου'],
          ],
        },
        examples: [
          ['Το σπίτι μου είναι μικρό.', 'A minha casa é pequena.'],
          ['Η οικογένειά μου είναι μεγάλη.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      'Fazer o possessivo concordar com o gênero: “μου” é sempre “μου”, nunca muda para combinar com o substantivo.',
      'Esquecer que o adjetivo, esse sim, concorda: “σπίτι” é neutro, então é “το σπίτι είναι μικρό”, nunca “μικρή”.',
    ],
    quiz: [
      { question: 'Qual artigo acompanha “σπίτι” (casa, neutro)?', options: ['το', 'η', 'ο'], answer: 'το', explanation: '“Σπίτι” é neutro, e o artigo neutro é “το”.' },
      { question: 'Como se diz “a minha casa”?', options: ['το σπίτι μου', 'το σπίτι μου η', 'η σπίτι μου'], answer: 'το σπίτι μου', explanation: 'O artigo concorda com o gênero (“το”), mas o possessivo “μου” nunca muda.' },
    ],
  },
  {
    id: 'el-g4',
    level: 'A1.2',
    title: '“Έχω” (ter) e a negação com “δεν”',
    emoji: '🚫',
    summary: 'A conjugação do verbo “ter” e como negar uma frase.',
    sections: [
      {
        text: 'Para negar um verbo, basta pôr “δεν” logo antes dele. “Όχι” (não) só nega sozinho, numa resposta curta, ou nega um substantivo isolado — não um verbo.',
        table: {
          head: ['Pronome', 'έχω (ter)'],
          rows: [
            ['εγώ', 'έχω'],
            ['εσύ', 'έχεις'],
            ['αυτός / αυτή', 'έχει'],
            ['εμείς', 'έχουμε'],
            ['εσείς', 'έχετε'],
            ['αυτοί', 'έχουν'],
          ],
        },
        examples: [
          ['Έχω έναν αδελφό.', 'Tenho um irmão.'],
          ['Δεν έχω αδελφή.', 'Não tenho irmã.'],
          ['Δεν ξέρω.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “δεν” depois do verbo: o certo é “δεν ξέρω”, sempre antes.',
      'Deixar o que vem depois de “έχω” no nominativo: “tenho um irmão” é “έχω έναν αδελφό” (acusativo), não “έχω ένας αδελφός”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Δεν ξέρω.', 'Ξέρω δεν.', 'Όχι ξέρω.'], answer: 'Δεν ξέρω.', explanation: '“Δεν” nega o verbo e vem sempre antes dele; “όχι” é para respostas curtas.' },
      { question: 'Complete: “Αυτή ___ μια αδελφή.” (Ela tem uma irmã.)', options: ['έχει', 'έχω', 'έχεις'], answer: 'έχει', explanation: '“Έχει” é a forma de “αυτός/αυτή” (ele/ela).' },
    ],
  },
];
