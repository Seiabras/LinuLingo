import type { UnitSeed } from '../types';

/**
 * Trilha do grego: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_EL: UnitSeed[] = [
  {
    id: 'el-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Γεια σου! Τα πρώτα βήματα',
    emoji: '👋',
    card: {
      id: 'el-c1',
      title: 'O alfabeto grego e o pronome que some',
      emoji: '🇬🇷',
      history:
        'O grego é o único membro vivo do ramo helênico do indo-europeu: não tem “primos” próximos como o português tem o espanhol e o italiano. É também a língua com o registro escrito mais longo do mundo, de mais de 3.400 anos — do micênico gravado em tabuinhas de argila (Linear B) até o grego de hoje, passando pelos poemas de Homero e pelo grego koiné do Novo Testamento. O grego moderno é a língua oficial da Grécia e de Chipre. O Brasil tem uma pequena comunidade de origem grega, mais presente em São Paulo.',
      culture_tip:
        '“Γεια σου” é o “oi”/“tchau” entre amigos; com desconhecidos e mais velhos, diga “Γεια σας” e trate a pessoa por “εσείς” (com o verbo no plural, mesmo falando com uma pessoa só).',
      grammar_why:
        'Assim como o português, o grego quase sempre deixa o pronome de fora: a terminação do verbo já mostra quem fala. Dizer “εγώ είμαι...” toda hora soa tão estranho quanto repetir “EU sou brasileiro” em todas as frases — só se usa para dar ênfase.',
      grammar_examples: [
        ['Γεια σου! Με λένε Άννα.', 'Oi! Eu me chamo Anna.'],
        ['Πώς σε λένε;', 'Como você se chama?'],
        ['Είναι από την Αθήνα, είναι από τη Θεσσαλονίκη.', 'Ele é de Atenas, ela é de Salônica.'],
        ['Καλά, ευχαριστώ. Κι εσύ;', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['γ', 'antes de α/ο/υ, um “g” suave e quase sumindo; antes de ε/ι, um “y” de “iogurte”', 'γάτα (gato), γιος (filho)'],
        ['δ', '“th” sonoro, como o “th” de “this” em inglês', 'δέκα (dez)'],
        ['θ', '“th” surdo, como o “th” de “think” em inglês', 'Αθήνα'],
        ['χ', '“h” forte, raspado na garganta', 'έχω'],
        ['β', '“v”', 'βράδυ (noite)'],
        ['φ', '“f”', 'φίλος (amigo)'],
        ['η, ι, υ, ει', 'todas soam “i”', 'φίλη, φίλοι, είμαι'],
        ['ευ / αυ', '“ef/ev” ou “af/av”, depende da consoante seguinte', 'ευχαριστώ (ef), αύριο (av)'],
        ['tonos (´)', 'marca a sílaba tônica em palavras de duas ou mais sílabas', 'ελληνικά, καλημέρα'],
      ],
    },
    lessons: [
      {
        id: 'el-u1-l1',
        title: 'Γεια σου, ευχαριστώ, αντίο!',
        kind: 'licao',
        words: ['γεια σου', 'καλημέρα', 'καλησπέρα', 'καληνύχτα', 'αντίο', 'ευχαριστώ'],
        cloze: [
          { sentence: '___! Τι κάνεις;', answer: 'Γεια σου', options: ['Γεια σου', 'Καληνύχτα', 'Ευχαριστώ'], translation: 'Oi! Como vai?' },
          { sentence: 'Είναι αργά. ___!', answer: 'Καληνύχτα', options: ['Καληνύχτα', 'Καλημέρα', 'Γεια σου'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ πολύ!', answer: 'Ευχαριστώ', options: ['Ευχαριστώ', 'Γεια σου', 'Αντίο'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Γεια σου! Τι κάνεις;',
          botTranslation: 'Oi! Como vai?',
          expected: ['Καλά, ευχαριστώ! Κι εσύ;', 'καλά', 'ευχαριστώ'],
          hint: 'Responda que vai bem e devolva a pergunta: “Καλά, ευχαριστώ! Κι εσύ;”.',
        },
        communityPrompt: 'Escreva três cumprimentos em grego: um de manhã (“Καλημέρα…”), um à noite (“Καλησπέρα…”) e uma despedida (“Αντίο” ou “Καληνύχτα”).',
      },
      {
        id: 'el-u1-l2',
        title: 'Εγώ, εσύ, αυτός, αυτή',
        kind: 'licao',
        words: ['εγώ', 'εσύ', 'αυτός', 'αυτή', 'με λένε', 'όνομα'],
        cloze: [
          { sentence: '___ έχω έναν αδελφό.', answer: 'Εγώ', options: ['Εγώ', 'Εσύ', 'Αυτή'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Κι ___; Πώς σε λένε;', answer: 'εσύ', options: ['εσύ', 'αυτός', 'αυτή'], translation: 'E você? Como você se chama?' },
          { sentence: '___ ___ Μαρία. Αυτή είναι η αδελφή μου.', answer: 'Με λένε', options: ['Με λένε', 'Αυτός είναι', 'Το όνομα'], translation: 'Eu me chamo Maria. Essa é a minha irmã.' },
        ],
        voice: {
          bot: 'Γεια σου! Πώς σε λένε;',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Με λένε Άννα. Κι εσένα;', 'με λένε', 'κι εσένα'],
          hint: 'Diga o seu nome com “Με λένε…” e devolva a pergunta com “Κι εσένα;”.',
        },
        communityPrompt: 'Apresente-se em grego: diga o seu nome com “Με λένε…” e pergunte o nome de alguém com “Πώς σε λένε;”.',
      },
      {
        id: 'el-u1-l3',
        title: 'Τεστ: τα πρώτα βήματα',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Γεια σου! Με λένε Γιώργος. Πώς σε λένε και από πού είσαι;',
          botTranslation: 'Oi! Eu me chamo Giorgos. Como você se chama e de onde você é?',
          expected: ['Γεια σου! Με λένε Άννα, είμαι από την Κουρίτιμπα.', 'με λένε', 'είμαι από', 'γεια σου'],
          hint: 'Devolva o cumprimento (“Γεια σου!”), diga o nome com “Με λένε…” e a cidade com “Είμαι από…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Με λένε…”, cidade com “Είμαι από…” e uma despedida.',
      },
    ],
  },
  {
    id: 'el-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Οικογένεια και σπίτι',
    emoji: '👪',
    card: {
      id: 'el-c2',
      title: 'Três gêneros, “ο / η / το” e o possessivo que nunca muda',
      emoji: '🧭',
      history:
        'O grego tem quatro casos (nominativo, genitivo, acusativo e vocativo): a terminação do substantivo muda conforme a função na frase — “ο αδελφός” (o irmão) vira “τον αδελφό” depois de um verbo como “έχω”. Em 1982, a Grécia trocou o sistema antigo de acentos (politônico, com vários sinais) pelo monotônico, de hoje, com um só acento, o tonos.',
      culture_tip:
        'Um domingo em família na Grécia costuma terminar à mesa, com pratos para repartir no meio — mezedes como taramá, tzatziki e dolmádes — e muita conversa em volta deles.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e o artigo mostra qual: “ο” (masculino), “η” (feminino), “το” (neutro). O possessivo, porém, não concorda com o gênero: “μου” (meu/minha) é sempre o mesmo e vem depois da palavra — “το σπίτι μου”, “η αδελφή μου”, “ο πατέρας μου”.',
      grammar_examples: [
        ['Η οικογένειά μου είναι μεγάλη.', 'A minha família é grande.'],
        ['Έχω έναν αδελφό και μια αδελφή.', 'Tenho um irmão e uma irmã.'],
        ['Το γάλα είναι άσπρο.', 'O leite é branco.'],
        ['Δεν ξέρω.', 'Eu não sei.'],
      ],
      character_guide: [
        ['ο / η / το', 'artigo masculino / feminino / neutro', 'ο αδελφός, η αδελφή, το σπίτι'],
        ['μου', 'meu, minha — depois da palavra, sem mudar nunca', 'το σπίτι μου, η μαμά μου'],
      ],
    },
    lessons: [
      {
        id: 'el-u2-l1',
        title: 'Η οικογένειά μου',
        kind: 'licao',
        words: ['οικογένεια', 'μαμά', 'μπαμπάς', 'αδελφός', 'αδελφή', 'έχω'],
        cloze: [
          { sentence: 'Η ___ μου είναι από τη Θεσσαλονίκη.', answer: 'μαμά', options: ['μαμά', 'μπαμπάς', 'αδελφός'], translation: 'A minha mãe é de Salônica.' },
          { sentence: '___ έναν αδελφό και μια αδελφή.', answer: 'Έχω', options: ['Έχω', 'Πηγαίνω', 'Μένω'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Ο ___ μου είναι από την Αθήνα.', answer: 'μπαμπάς', options: ['μπαμπάς', 'αδελφή', 'μαμά'], translation: 'O meu pai é de Atenas.' },
        ],
        voice: {
          bot: 'Έχεις αδελφό ή αδελφή;',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Ναι, έχω έναν αδελφό και μια αδελφή.', 'έχω', 'αδελφό', 'αδελφή'],
          hint: 'Responda com “Ναι, έχω…” ou “Όχι, δεν έχω…”.',
        },
        communityPrompt: 'Descreva a sua família em grego: se você tem irmão (αδελφός) ou irmã (αδελφή) e como se chamam os seus pais (“Τη μαμά μου τη λένε…”).',
      },
      {
        id: 'el-u2-l2',
        title: 'Στο σπίτι',
        kind: 'licao',
        words: ['σπίτι', 'νερό', 'ψωμί', 'τυρί', 'γάλα', 'μου αρέσει'],
        cloze: [
          { sentence: 'Το ___ μου είναι μικρό.', answer: 'σπίτι', options: ['σπίτι', 'νερό', 'γάλα'], translation: 'A minha casa é pequena.' },
          { sentence: 'Πίνω ___.', answer: 'νερό', options: ['νερό', 'ψωμί', 'τυρί'], translation: 'Eu bebo água.' },
          { sentence: 'Τρώω ψωμί και ___.', answer: 'τυρί', options: ['τυρί', 'νερό', 'γάλα'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Τι τρως το πρωί;',
          botTranslation: 'O que você come de manhã?',
          expected: ['Τρώω ψωμί και τυρί.', 'τρώω', 'ψωμί', 'τυρί'],
          hint: 'Diga o que come com “Τρώω…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Τρώω…” e “Πίνω…”.',
      },
      {
        id: 'el-u2-l3',
        title: 'Τεστ: οικογένεια και σπίτι',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Πες μου για την οικογένειά σου: έχεις αδελφό ή αδελφή;',
          botTranslation: 'Me conta da sua família: você tem irmão ou irmã?',
          expected: ['Ναι, έχω μια αδελφή. Τη λένε Μαρία.', 'έχω', 'τη λένε'],
          hint: 'Diga se tem irmãos (“έχω…”) e o nome deles (“τον/τη λένε…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “έχω”, “με λένε” e “μου”.',
      },
    ],
  },
];
