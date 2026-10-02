import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do árabe egípcio — por enquanto só A1.1 e A1.2 (pacote incompleto). Os
 * quatro tópicos cobrem traços que realmente diferenciam o árabe egípcio falado do árabe padrão
 * (MSA): nenhum deles foi copiado do MSA com um rótulo trocado.
 *
 * Fontes (consultadas em 02/10/2026):
 * - Wikipédia (inglês), «Egyptian Arabic», seções Morphology/Verbs, Negation e trecho sobre nomes:
 *   https://en.wikipedia.org/wiki/Egyptian_Arabic
 * - Wikcionário (inglês): entradas «مش» e «فهم» (en.wiktionary.org/wiki/مش, /wiki/فهم)
 */
export const GRAMMAR_ARZ: GrammarTopic[] = [
  {
    id: 'arz-g1',
    level: 'A1.1',
    title: 'O prefixo بـ (bi-): o presente do dia a dia',
    emoji: '🔁',
    summary: 'No árabe egípcio, quase todo verbo no presente leva o prefixo بـ (bi-) — um traço que o árabe padrão (MSA) não tem.',
    sections: [
      {
        text: 'A Wikipédia descreve a formação assim: “the present indicative is formed from the subjunctive by the addition of bi- (bi-a- is elided to ba-)”. Ou seja: o egípcio pega a forma básica do verbo e gruda بـ na frente para marcar o presente ou o hábito — algo que o árabe padrão simplesmente não faz do mesmo jeito.',
        examples: [
          ['هو بيكتب.', 'Ele escreve. (بـ + يكتب, “ele escreve”)'],
          ['إنتي بتفهمي؟', 'Você entende? (falando com uma mulher — exemplo do próprio Wikcionário: “بتفهمي؟”)'],
        ],
      },
      {
        heading: 'Sem بـ, muda o sentido',
        text: 'Tirar o بـ não deixa a frase “mais formal”: no egípcio falado, o verbo sem بـ costuma soar como subjuntivo ou futuro próximo (“que eu escreva”, “vou escrever”), não como o presente comum do dia a dia.',
      },
    ],
    pitfalls: [
      'Achar que o بـ é gíria ou opcional: sem ele, a frase deixa de soar como o presente do dia a dia.',
      'Copiar a conjugação do árabe padrão (sem بـ) achando que serve igual no egípcio falado.',
    ],
    quiz: [
      {
        question: 'Qual prefixo marca o presente do dia a dia no árabe egípcio?',
        options: ['بـ (bi-)', 'سـ (sa-)', 'لا'],
        answer: 'بـ (bi-)',
        explanation: 'O árabe egípcio forma o presente comum grudando بـ no verbo: بيكتب (ele escreve).',
      },
      {
        question: '“إنتي بتفهمي؟” quer dizer…',
        options: ['Você entende? (falando com uma mulher)', 'Você entendeu? (falando com um homem)', 'Eu não entendo.'],
        answer: 'Você entende? (falando com uma mulher)',
        explanation: 'بـ + تفهمي (a forma de “entender” para “você”, feminino) = “você entende?”.',
      },
    ],
  },
  {
    id: 'arz-g2',
    level: 'A1.1',
    title: 'Duas negações: مش e ما...ش',
    emoji: '🚫',
    summary: 'O egípcio nega de dois jeitos diferentes: مش antes de adjetivos e nomes, e ما...ش em volta do verbo — nenhum dos dois é como o árabe padrão nega.',
    sections: [
      {
        text: 'Para negar um adjetivo, um nome ou uma frase sem verbo, o egípcio usa مش sozinho antes da palavra. O Wikcionário cita exatamente este exemplo: “أنا مش مصري” (“eu não sou egípcio”), explicando que مش vem de uma contração de “ما هو شيء” (algo como “[isso] não é nada”).',
        examples: [
          ['أنا مش مصري.', 'Eu não sou egípcio.'],
          ['ده مش وحش.', 'Isso não é ruim.'],
        ],
      },
      {
        heading: 'Com verbo: ما...ش em volta',
        text: 'Quando existe um verbo, o egípcio não usa مش: ele “abraça” o verbo com ما antes e ش depois. A Wikipédia registra exatamente esses dois exemplos (em transcrição): “ma-katab-š” (“ele não escreveu”) e “ma-bi-yiktib-š” (“ele não escreve”).',
        table: {
          head: ['Afirmativa', 'Negativa'],
          rows: [
            ['هو كتب. (ele escreveu)', 'ما كتبش. (ele não escreveu)'],
            ['هو بيكتب. (ele escreve)', 'ما بيكتبش. (ele não escreve)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Usar مش com um verbo (“مش كتب” soa estranho): com verbo, o certo é ما...ش em volta dele.',
      'Usar ما...ش com um adjetivo sozinho: para “não é bom”, o egípcio usa مش كويس, não “ما كويسش”.',
    ],
    quiz: [
      {
        question: 'Como se nega um adjetivo sozinho, tipo “não é bom”?',
        options: ['مش كويس', 'ما كويسش', 'لا كويس'],
        answer: 'مش كويس',
        explanation: 'Sem verbo, o egípcio nega só com مش antes da palavra.',
      },
      {
        question: '“ما بيكتبش” quer dizer…',
        options: ['Ele não escreve.', 'Ele não é escritor.', 'Ele escreveu.'],
        answer: 'Ele não escreve.',
        explanation: 'ما...ش em volta do verbo بيكتب (ele escreve) nega a ação: “ele não escreve”.',
      },
    ],
  },
  {
    id: 'arz-g3',
    level: 'A1.2',
    title: 'Sem terminações de caso: a fala fica mais simples',
    emoji: '📐',
    summary: 'O árabe padrão marca o fim das palavras com terminações de caso (i‘rāb); o árabe egípcio falado simplesmente não tem isso.',
    sections: [
      {
        text: 'A Wikipédia é direta: “In contrast to CA and MSA, but like all modern colloquial varieties of Arabic, Egyptian Arabic nouns are not inflected for case and lack nunation.” Em bom português: no árabe clássico e no árabe padrão moderno, um nome muda de terminação conforme a função na frase (sujeito, objeto etc.) e ainda pode levar “nunação” (um -n extra no final). O egípcio falado — como todo árabe coloquial — abandonou tudo isso: a palavra fica igual, não importa a função dela na frase.',
        examples: [['البيت كبير.', 'A casa é grande. (sem nenhuma marca extra no final de “بيت” ou de “كبير”)']],
      },
    ],
    pitfalls: [
      'Tentar “aprender as terminações de caso” pra falar egípcio: elas simplesmente não existem na fala — só no árabe padrão escrito ou muito formal.',
      'Estranhar que uma palavra “parece incompleta” perto do árabe padrão: no egípcio falado, essa é a forma certa.',
    ],
    quiz: [
      {
        question: 'O árabe egípcio falado tem terminações de caso (i‘rāb) como o árabe padrão?',
        options: ['Não — elas caíram, como em todo árabe falado', 'Sim, exatamente iguais', 'Só nos nomes femininos'],
        answer: 'Não — elas caíram, como em todo árabe falado',
        explanation: 'A Wikipédia confirma: o egípcio (como as outras variedades faladas) não flexiona nomes por caso e não tem nunação.',
      },
    ],
  },
  {
    id: 'arz-g4',
    level: 'A1.2',
    title: 'Palavras que separam o egípcio do árabe padrão',
    emoji: '🗣️',
    summary: 'Várias palavras do dia a dia em egípcio não são “a mesma coisa só com sotaque”: mudam de sentido, ou simplesmente não existem assim no árabe padrão.',
    sections: [
      {
        text: 'O cumprimento mais comum do Egito, “إزيك؟” (perguntando a um homem ou, com outra pronúncia, a uma mulher), nem existe assim no árabe padrão — que usa outras expressões para “como vai”.',
        examples: [['إزيك؟', 'Como você está? (falando com um homem)']],
      },
      {
        heading: 'A mesma palavra, sentido diferente',
        text: 'O Wikcionário mostra que عيش, que no árabe padrão quer dizer “vida” (do verbo عاش, “viver”), virou a palavra comum para “pão” no egípcio — provavelmente porque o pão é essencial pra sobreviver. Da mesma forma, عربية no árabe padrão lembra antes “mulher árabe” ou “a língua árabe”; no egípcio, é a palavra do dia a dia pra “carro”. E وحش, que no árabe padrão é “fera, monstro”, virou o jeito comum de dizer “ruim, feio” no egípcio.',
        table: {
          head: ['Palavra', 'Árabe padrão (MSA)', 'Árabe egípcio'],
          rows: [
            ['عيش', 'vida', 'pão'],
            ['عربية', 'mulher árabe / a língua árabe', 'carro'],
            ['وحش', 'fera, monstro', 'ruim, feio'],
          ],
        },
      },
    ],
    pitfalls: [
      'Achar que um dicionário de árabe padrão sempre dá a palavra certa pra usar no Egito: às vezes dá uma palavra que existe, mas quer dizer outra coisa.',
      'Supor que o árabe egípcio é só “o árabe padrão falado de um jeito relaxado”: o vocabulário do dia a dia realmente diverge.',
    ],
    quiz: [
      {
        question: 'No árabe egípcio, عيش quer dizer…',
        options: ['pão', 'vida', 'carro'],
        answer: 'pão',
        explanation: 'No árabe padrão, عيش é “vida”; no egípcio, virou a palavra comum pra “pão”.',
      },
      {
        question: 'Qual é a palavra egípcia do dia a dia pra “carro”?',
        options: ['عربية', 'جمل', 'عيش'],
        answer: 'عربية',
        explanation: 'No árabe padrão, عربية lembra antes “mulher árabe” ou “a língua árabe”; no egípcio virou “carro”.',
      },
    ],
  },
];
