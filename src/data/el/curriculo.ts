import type { UnitSeed } from '../types';

/**
 * Trilha do grego: quatro unidades, A1.1 ao A2.2 — ver `incomplete` em index.ts. As de B1 ao C2
 * chegam depois. Fontes das unidades 3 e 4: Wikipédia ("Modern Greek grammar") e Wikcionário em
 * inglês, citadas em vocabulario.ts e gramatica.ts.
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
  {
    id: 'el-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ο καιρός και τα ρούχα',
    emoji: '🧥',
    card: {
      id: 'el-c3',
      title: 'Quatro estações, um só país',
      emoji: '⛅',
      history:
        'A Grécia tem um clima mediterrâneo na maior parte do território — verões secos e quentes, invernos chuvosos e amenos — mas as montanhas do norte e do centro (como o Monte Olimpo) recebem neve no inverno, e o Mar Egeu traz vento forte em certas épocas, como o meltemi do verão. Essa variedade molda o vocabulário do tempo no dia a dia, tão comum quanto em qualquer conversa de elevador.',
      culture_tip:
        'Perguntar “Τι καιρό έχει;” (como está o tempo?) é uma forma neutra e comum de começar uma conversa. Falar do calor do verão grego, às vezes acima de 35°C em Atenas, é quase um clássico entre gregos e turistas.',
      grammar_why:
        'Esta unidade traz o futuro com “θα” (que muda a forma do verbo entre perfectivo e imperfectivo: “θα αγοράσω”, vou comprar uma vez, e “θα αγοράζω”, vou ficar comprando) e o comparativo/superlativo dos adjetivos, com “πιο” ou o sufixo “-ότερος”.',
      grammar_examples: [
        ['Αύριο θα βρέχει.', 'Amanhã vai chover.'],
        ['Θα αγοράσω ένα μπουφάν.', 'Eu vou comprar uma jaqueta.'],
        ['Σήμερα είναι πιο ζεστά από χτες.', 'Hoje está mais quente do que ontem.'],
        ['Πρέπει να αγοράσω ένα καπέλο.', 'Eu tenho que comprar um chapéu.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'el-u3-l1',
        title: 'Τι καιρό έχει;',
        kind: 'licao',
        words: ['βροχή', 'ήλιος', 'αέρας', 'χιόνι', 'ζεστός', 'κρύος'],
        cloze: [
          { sentence: 'Χτες έβρεχε όλη μέρα: πολλή ___.', answer: 'βροχή', options: ['βροχή', 'ήλιος', 'χιόνι'], translation: 'Ontem choveu o dia todo: muita chuva.' },
          { sentence: 'Σήμερα κάνει ___.', answer: 'ζέστη', options: ['ζέστη', 'κρύο', 'χιόνι'], translation: 'Hoje está quente.' },
          { sentence: 'Έχει πολύ ___.', answer: 'αέρα', options: ['αέρα', 'ήλιο', 'βροχή'], translation: 'Está ventando muito.' },
        ],
        voice: {
          bot: 'Τι καιρό έχει σήμερα;',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Σήμερα έχει ήλιο και κάνει ζέστη.', 'ήλιο', 'ζέστη'],
          hint: 'Descreva o tempo com “Σήμερα έχει…” e “κάνει ζέστη/κρύο”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em grego, usando pelo menos duas palavras desta lição (βροχή, ήλιος, αέρας, χιόνι, ζεστός, κρύος).',
      },
      {
        id: 'el-u3-l2',
        title: 'Αγοράζω ρούχα',
        kind: 'licao',
        words: ['μπουφάν', 'παπούτσι', 'φόρεμα', 'καπέλο', 'αγοράζω', 'φοράω'],
        cloze: [
          { sentence: 'Χτες αγόρασα ένα καινούργιο ___.', answer: 'μπουφάν', options: ['μπουφάν', 'παπούτσι', 'φόρεμα'], translation: 'Ontem eu comprei uma jaqueta nova.' },
          { sentence: 'Αυτή φοράει ένα ωραίο ___.', answer: 'φόρεμα', options: ['φόρεμα', 'μπουφάν', 'παπούτσι'], translation: 'Ela está usando um vestido bonito.' },
          { sentence: 'Αύριο θα φορέσω καινούργιο ___.', answer: 'καπέλο', options: ['καπέλο', 'παπούτσι', 'μπουφάν'], translation: 'Amanhã eu vou usar um chapéu novo.' },
        ],
        voice: {
          bot: 'Τι θα φορέσεις αύριο;',
          botTranslation: 'O que você vai usar amanhã?',
          expected: ['Θα φορέσω μπουφάν και παπούτσια.', 'θα φορέσω', 'μπουφάν'],
          hint: 'Diga o que vai usar com “Θα φορέσω…”.',
        },
        communityPrompt: 'Escreva três frases sobre roupas em grego, usando “αγόρασα” (eu comprei) e “θα φορέσω” (eu vou usar).',
      },
      {
        id: 'el-u3-l3',
        title: 'Τεστ: ο καιρός και τα ρούχα',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Χτες έβρεχε. Τι θα φορέσεις αύριο;',
          botTranslation: 'Ontem choveu. O que você vai usar amanhã?',
          expected: ['Αύριο θα φορέσω μπουφάν, γιατί κάνει κρύο.', 'θα φορέσω', 'μπουφάν'],
          hint: 'Diga o que vai usar com “θα φορέσω…” e explique o clima com “κάνει κρύο/ζέστη”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o tempo de ontem e a roupa de amanhã, usando o futuro com “θα” e pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'el-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Το σώμα, τα επαγγέλματα και τα συναισθήματα',
    emoji: '🩺',
    card: {
      id: 'el-c4',
      title: 'A biblioteca de Alexandria, séculos depois',
      emoji: '📚',
      history:
        'A tradição grega de bibliotecas e escolas remonta à Antiguidade (a Biblioteca de Alexandria, fundada por gregos no Egito ptolemaico, foi uma das maiores do mundo antigo). Hoje a Biblioteca Nacional da Grécia, em Atenas, ocupa desde 2018 um prédio moderno no Centro Cultural Fundação Stavros Niarchos, símbolo de como a Grécia moderna segue valorizando educação e conhecimento como parte central da sua identidade.',
      culture_tip:
        'Perguntar pela profissão de alguém (“Τι δουλειά κάνεις;”) é comum numa conversa nova. E, como em português, é normal perguntar como alguém está se sentindo (“Πώς αισθάνεσαι;”) depois de contar uma notícia boa ou má.',
      grammar_why:
        'Esta unidade traz o genitivo de posse (“το σπίτι του Νίκου”, a casa do Nico — diferente do possessivo “μου/σου” já visto) e “πρέπει να” + subjuntivo, para dizer o que é preciso fazer: “πρέπει” nunca muda de forma, só o verbo depois de “να”.',
      grammar_examples: [
        ['Η αδελφή της Μαρίας είναι γιατρός.', 'A irmã da Maria é médica.'],
        ['Πρέπει να δουλέψω αύριο.', 'Eu tenho que trabalhar amanhã.'],
        ['Αισθάνομαι κουρασμένος.', 'Eu me sinto cansado.'],
        ['Πονάει το κεφάλι μου.', 'Minha cabeça está doendo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'el-u4-l1',
        title: 'Σώμα και επαγγέλματα',
        kind: 'licao',
        words: ['κεφάλι', 'χέρι', 'γιατρός', 'δάσκαλος', 'μάγειρας', 'μηχανικός'],
        cloze: [
          { sentence: 'Πονάει το ___ μου.', answer: 'κεφάλι', options: ['κεφάλι', 'χέρι', 'πόδι'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Ο πατέρας μου είναι ___.', answer: 'δάσκαλος', options: ['δάσκαλος', 'γιατρός', 'μάγειρας'], translation: 'Meu pai é professor.' },
          { sentence: 'Αυτή είναι ___.', answer: 'μηχανικός', options: ['μηχανικός', 'μάγειρας', 'γιατρός'], translation: 'Ela é engenheira.' },
        ],
        voice: {
          bot: 'Τι δουλειά κάνεις;',
          botTranslation: 'O que você faz (profissão)?',
          expected: ['Είμαι γιατρός.', 'είμαι', 'γιατρός'],
          hint: 'Diga a sua profissão com “Είμαι…”.',
        },
        communityPrompt: 'Descreva a sua profissão ou a de alguém da sua família em grego, usando “Είμαι…” ou “Ο πατέρας μου/Η μητέρα μου είναι…”.',
      },
      {
        id: 'el-u4-l2',
        title: 'Πώς αισθάνεσαι;',
        kind: 'licao',
        words: ['χαρούμενος', 'λυπημένος', 'κουρασμένος', 'αισθάνομαι', 'πρέπει', 'δουλεύω'],
        cloze: [
          { sentence: 'Σήμερα είμαι ___.', answer: 'χαρούμενος', options: ['χαρούμενος', 'λυπημένος', 'κουρασμένος'], translation: 'Hoje eu estou feliz.' },
          { sentence: 'Αισθάνομαι ___.', answer: 'κουρασμένος', options: ['κουρασμένος', 'χαρούμενος', 'λυπημένος'], translation: 'Eu me sinto cansado.' },
          { sentence: '___ να δουλέψω αύριο.', answer: 'Πρέπει', options: ['Πρέπει', 'Μπορώ', 'Θέλω'], translation: 'Eu tenho que trabalhar amanhã.' },
        ],
        voice: {
          bot: 'Πώς αισθάνεσαι σήμερα;',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Αισθάνομαι χαρούμενος, ευχαριστώ.', 'αισθάνομαι', 'χαρούμενος'],
          hint: 'Diga como se sente com “Αισθάνομαι…”.',
        },
        communityPrompt: 'Escreva três frases sobre como você se sente, usando “αισθάνομαι” e pelo menos dois sentimentos desta unidade (χαρούμενος, λυπημένος, κουρασμένος, θυμωμένος, φοβισμένος, έκπληκτος).',
      },
      {
        id: 'el-u4-l3',
        title: 'Τεστ: σώμα, επαγγέλματα και συναισθήματα',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Τι δουλειά κάνεις, και πώς αισθάνεσαι σήμερα;',
          botTranslation: 'O que você faz, e como você está se sentindo hoje?',
          expected: ['Είμαι δάσκαλος και αισθάνομαι χαρούμενος.', 'είμαι', 'αισθάνομαι'],
          hint: 'Diga a sua profissão com “είμαι…” e o seu sentimento com “αισθάνομαι…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua profissão (ou a que você gostaria de ter) e como você se sente hoje, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
