import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do grego — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts).
 * Os quatro tópicos do A2 (el-g5 a el-g8) seguem a Wikipédia em inglês, "Modern Greek grammar"
 * (seções "Future", "Comparison" e "Case"), e o Wikcionário em inglês (en.wiktionary.org), um
 * verbete por palavra citada.
 */
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
  {
    id: 'el-g5',
    level: 'A2.1',
    title: 'O futuro com “θα”',
    emoji: '🔮',
    summary: 'A partícula “θα” antes do verbo forma o futuro — e o próprio verbo muda de forma para marcar se a ação é vista como um todo (perfectivo) ou repetida/em andamento (imperfectivo).',
    sections: [
      {
        text: '“Θα” vem historicamente de “θέλει να” (quer que). Colocada antes da forma perfectiva do verbo, dá o futuro perfectivo, usado para uma ação pontual; antes da forma imperfectiva (a mesma do presente), dá o futuro imperfectivo, para algo repetido ou em andamento.',
        table: {
          head: ['Construção', 'Exemplo', 'Sentido'],
          rows: [
            ['θα + perfectivo', 'θα αγοράσω', 'vou comprar (uma vez)'],
            ['θα + imperfectivo', 'θα αγοράζω', 'vou (ficar) comprando'],
          ],
        },
        examples: [
          ['Θα αγοράσω ένα μπουφάν.', 'Eu vou comprar uma jaqueta.'],
          ['Αύριο θα βρέχει όλη μέρα.', 'Amanhã vai chover o dia todo.'],
        ],
      },
    ],
    pitfalls: ['Achar que “θα” sozinho já basta: o verbo depois dele também muda de forma (perfectivo/imperfectivo), não é só o presente com “θα” na frente.', 'Confundir o futuro perfectivo (ação pontual) com o imperfectivo (ação repetida/continuada): a escolha muda o sentido da frase.'],
    quiz: [
      { question: 'Como se diz “eu vou comprar uma jaqueta” (uma vez)?', options: ['Θα αγοράσω ένα μπουφάν.', 'Θα αγοράζω ένα μπουφάν.', 'Αγοράζω ένα μπουφάν.'], answer: 'Θα αγοράσω ένα μπουφάν.', explanation: '“Θα” + a forma perfectiva (αγοράσω) marca uma ação pontual no futuro.' },
      { question: '“Θα” vem historicamente de…', options: ['θέλει να (quer que)', 'θα είναι (vai ser)', 'uma palavra latina'], answer: 'θέλει να (quer que)', explanation: '“Θα” é uma contração antiga de “θέλει να”.' },
    ],
  },
  {
    id: 'el-g6',
    level: 'A2.1',
    title: 'Comparativo e superlativo',
    emoji: '📏',
    summary: 'Duas formas de comparar: uma com “πιο” antes do adjetivo, outra com um sufixo direto nele.',
    sections: [
      {
        text: 'O comparativo periférico junta “πιο” (mais) antes do adjetivo, funcionando com qualquer um deles. O comparativo sintético, mais formal, muda a terminação do adjetivo: -ος/-η/-ο vira -ότερος/-ότερη/-ότερο. O superlativo usa o artigo definido antes do comparativo (de qualquer um dos dois tipos).',
        table: {
          head: ['Grau', 'Periférico', 'Sintético'],
          rows: [
            ['comparativo', 'πιο ζεστός', 'ζεστότερος'],
            ['superlativo', 'ο πιο ζεστός', 'ο ζεστότερος'],
          ],
        },
        examples: [
          ['Σήμερα είναι πιο ζεστά από χτες.', 'Hoje está mais quente do que ontem.'],
          ['Αυτό είναι το πιο μεγάλο σπίτι.', 'Essa é a casa mais grande.'],
        ],
      },
    ],
    pitfalls: ['Usar “πιο” e o sufixo “-ότερος” juntos no mesmo adjetivo: são dois jeitos de comparar, nunca os dois ao mesmo tempo.', 'Esquecer o artigo definido no superlativo: sem ele, “πιο ζεστός” é só comparativo (“mais quente”), não superlativo (“o mais quente”).'],
    quiz: [
      { question: 'Como se diz “mais quente” (comparativo periférico)?', options: ['πιο ζεστός', 'ζεστότερος', 'ο πιο ζεστός'], answer: 'πιο ζεστός', explanation: '“Πιο” antes do adjetivo é o comparativo periférico.' },
      { question: 'O que marca o superlativo?', options: ['o artigo definido antes do comparativo', 'só o sufixo “-ότερος”', 'a palavra “πολύ”'], answer: 'o artigo definido antes do comparativo', explanation: '“Ο πιο ζεστός” ou “ο ζεστότερος” — o artigo é o que transforma o comparativo em superlativo.' },
    ],
  },
  {
    id: 'el-g7',
    level: 'A2.2',
    title: 'O genitivo: a posse e o “de alguém”',
    emoji: '🔗',
    summary: 'O grego marca a posse com o caso genitivo, que muda a terminação do substantivo — diferente do possessivo com “μου/σου” (que não concorda com nada).',
    sections: [
      {
        text: 'Para dizer “a casa do Nico”, o nome do possuidor (“Νίκος”) vai para o genitivo (“Νίκου”) e vem depois do substantivo possuído, que leva artigo. É um caso diferente do possessivo “μου/σου/του” já visto no A1.2, usado quando o possuidor é um pronome, não um nome.',
        table: {
          head: ['Nominativo', 'Genitivo', 'Exemplo com posse'],
          rows: [
            ['ο Νίκος', 'του Νίκου', 'το σπίτι του Νίκου (a casa do Nico)'],
            ['η Μαρία', 'της Μαρίας', 'η τσάντα της Μαρίας (a bolsa da Maria)'],
          ],
        },
        examples: [
          ['Το σπίτι του Νίκου είναι μεγάλο.', 'A casa do Nico é grande.'],
          ['Η αδελφή της Μαρίας είναι γιατρός.', 'A irmã da Maria é médica.'],
        ],
      },
    ],
    pitfalls: ['Usar o nominativo depois de “posse de alguém”: o nome do possuidor sempre vai para o genitivo (“του Νίκου”, não “ο Νίκος”).', 'Confundir o genitivo de posse com o possessivo “μου/σου”: este último não muda de forma; o genitivo muda a terminação do próprio nome.'],
    quiz: [
      { question: 'Como se diz “a casa do Nico”?', options: ['το σπίτι του Νίκου', 'το σπίτι ο Νίκος', 'το σπίτι Νίκου'], answer: 'το σπίτι του Νίκου', explanation: '“Νίκος” vai para o genitivo com artigo: “του Νίκου”.' },
      { question: 'O genitivo de “η Μαρία” é…', options: ['της Μαρίας', 'τη Μαρία', 'η Μαρίας'], answer: 'της Μαρίας', explanation: 'Os femininos em -α trocam para “-ας” no genitivo, com o artigo “της”.' },
    ],
  },
  {
    id: 'el-g8',
    level: 'A2.2',
    title: '“Πρέπει να” + subjuntivo (necessidade)',
    emoji: '📌',
    summary: '“Πρέπει” (é preciso) é impessoal — nunca muda de forma — e vem sempre seguido de “να” mais o verbo principal conjugado.',
    sections: [
      {
        text: '“Πρέπει” não concorda com ninguém: é sempre a mesma palavra, qualquer que seja a pessoa que precisa fazer algo. Quem muda é o verbo principal, que vem depois de “να” e se conjuga normalmente pela pessoa.',
        table: {
          head: ['Pessoa', 'Construção', 'Tradução'],
          rows: [
            ['εγώ', 'πρέπει να αγοράσω', 'eu tenho que comprar'],
            ['εσύ', 'πρέπει να αγοράσεις', 'você tem que comprar'],
            ['αυτός / αυτή', 'πρέπει να αγοράσει', 'ele/ela tem que comprar'],
          ],
        },
        examples: [
          ['Πρέπει να αγοράσω ένα μπουφάν.', 'Eu tenho que comprar uma jaqueta.'],
          ['Δεν πρέπει να ξεχάσεις το καπέλο.', 'Você não deve esquecer o chapéu.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar “πρέπει” pela pessoa: ele é sempre impessoal; o que muda é o verbo depois de “να”.', 'Esquecer o “να”: “πρέπει” nunca vem direto com o verbo principal, sempre com “να” no meio.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar um chapéu”?', options: ['Πρέπει να αγοράσω ένα καπέλο.', 'Εγώ πρέπω αγοράσω ένα καπέλο.', 'Πρέπει αγοράσω ένα καπέλο.'], answer: 'Πρέπει να αγοράσω ένα καπέλο.', explanation: '“Πρέπει” é impessoal e pede “να” antes do verbo conjugado.' },
      { question: '“Πρέπει” muda de forma conforme a pessoa?', options: ['Não, é sempre impessoal', 'Sim, como qualquer verbo', 'Só no plural'], answer: 'Não, é sempre impessoal', explanation: 'Quem concorda com a pessoa é o verbo depois de “να”, nunca “πρέπει”.' },
    ],
  },
];
