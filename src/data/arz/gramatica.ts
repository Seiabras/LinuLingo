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
  // ══════════════════ A2 ══════════════════
  // Fontes (consultadas em 09/10/2026): Wikipédia (inglês) «Egyptian Arabic», seções «Pronouns»
  // (sufixos possessivos) e «Plurals»; Wikcionário (inglês), entradas «ده», «دي», «دول», «كتاب».
  {
    id: 'arz-g5',
    level: 'A2.1',
    title: 'بيتي، بيتك، بيته: a posse grudada no nome',
    emoji: '🏠',
    summary: 'No árabe egípcio, “meu”, “seu”, “dele” não são palavras separadas: são sufixos colados direto no final do nome.',
    sections: [
      {
        text: 'A Wikipédia mostra a posse do árabe egípcio com o nome “بيت” (casa): “béet” é só “casa”, e “béet-i” já é “minha casa” — o sufixo “-ي” (-i) grudado é que carrega o “meu”. O mesmo sufixo serve pra qualquer pessoa, trocando só a terminação.',
        table: {
          head: ['Sufixo', 'Tradução', 'بيت + sufixo'],
          rows: [
            ['-ي (-i)', 'meu', 'بيتي (béeti, “minha casa”)'],
            ['-ك (-ak/-ik)', 'seu, sua (falando com homem/mulher)', 'بيتك (béetak/béetik)'],
            ['-ه / -ها (-u/-ha)', 'dele / dela', 'بيته / بيتها'],
            ['-نا (-na)', 'nosso', 'بيتنا'],
            ['-كو (-ku)', 'de vocês', 'بيتكو'],
            ['-هم (-hum)', 'deles, delas', 'بيتهم'],
          ],
        },
        examples: [['ده بيتي.', 'Esta é a minha casa.']],
      },
      {
        heading: 'Quando o nome muda de forma antes do sufixo (أبويا)',
        text: 'Alguns nomes não grudam o sufixo direto: ganham uma forma própria antes dele, chamada de “construct state” (estado de anexação). A própria Wikipédia dá o exemplo de “اب” (pai): a forma com posse não é “ابي”, e sim “أبويا” (abuuya, “meu pai”) — o nome vira “أبو-” antes de receber o “-يا”. É um caso que se aprende palavra por palavra, não por uma fórmula fixa.',
        examples: [['أبويا كويس.', 'Meu pai está bem.']],
      },
    ],
    pitfalls: [
      'Tentar traduzir “meu”, “seu”, “dele” como palavras soltas antes do nome: no árabe egípcio, elas vêm coladas depois, como sufixo.',
      'Supor que todo nome aceita o sufixo direto: alguns, como “اب” (pai), mudam de forma antes (“أبو-”) — vale conferir palavra por palavra.',
    ],
    quiz: [
      { question: 'Como se diz “minha casa” em árabe egípcio?', options: ['بيتي', 'بيت أنا', 'أنا بيت'], answer: 'بيتي', explanation: 'O sufixo “-ي” (-i) grudado no nome carrega o “meu”: بيت + ي = بيتي.' },
      { question: 'Como se diz “meu pai”?', options: ['أبويا', 'ابي', 'اب أنا'], answer: 'أبويا', explanation: '“اب” (pai) muda pra “أبو-” antes do sufixo “-يا”: أبويا.' },
    ],
  },
  {
    id: 'arz-g6',
    level: 'A2.1',
    title: 'ده، دي، دول: apontando pra alguma coisa',
    emoji: '👉',
    summary: 'O árabe egípcio tem três demonstrativos básicos — um para o masculino, um para o feminino e um para o plural — e todos ficam de pé sozinhos, sem precisar de verbo “ser”.',
    sections: [
      {
        text: 'O Wikcionário em inglês registra “ده” (da) como “this, that” no masculino, “دي” (di) como o feminino de “ده”, e “دول” (dol) como o plural dos dois — “those, these”. Como o árabe egípcio não tem um verbo “ser” no presente, a frase “ده بيت” já quer dizer “isto é uma casa”, sem precisar de mais nada no meio.',
        table: {
          head: ['Forma', 'Quando usar', 'Exemplo'],
          rows: [
            ['ده (da)', 'coisa ou pessoa masculina', 'ده بيت كبير. (Isto é uma casa grande.)'],
            ['دي (di)', 'coisa ou pessoa feminina', 'دي قطة صغيرة. (Isto é uma gata pequena.)'],
            ['دول (dol)', 'plural (coisas ou pessoas)', 'دول كويسين. (Estes estão bem/são bons.)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser” antes de “ده/دي/دول”: a frase já fica completa sem ele.',
      'Usar “ده” para tudo: o feminino pede “دي”, e o plural pede “دول”.',
    ],
    quiz: [
      { question: 'Qual demonstrativo serve para uma coisa feminina, tipo “قطة” (gata)?', options: ['دي', 'ده', 'دول'], answer: 'دي', explanation: '“دي” é o feminino de “ده”: دي قطة صغيرة (esta é uma gata pequena).' },
      { question: 'O que “دول” substitui?', options: ['O plural de ده e دي', 'Só o feminino', 'Só perguntas'], answer: 'O plural de ده e دي', explanation: 'O Wikcionário define “دول” como o plural dos dois: “those, these”.' },
    ],
  },
  {
    id: 'arz-g7',
    level: 'A2.2',
    title: 'O plural: regular e quebrado',
    emoji: '🔢',
    summary: 'Algumas palavras ganham um sufixo simples no plural; outras mudam de forma por dentro — o chamado “plural quebrado”, que se aprende palavra por palavra.',
    sections: [
      {
        text: 'A Wikipédia descreve dois jeitos de formar o plural no árabe egípcio. O “plural são” (sound plural) gruda um sufixo no final — “-ين” (-iin) é comum para pessoas e particípios, como em “كويس” (bom) → “كويسين” (bons), confirmado pelo Wikcionário. Já o “plural quebrado” (broken plural) muda o padrão de vogais por dentro da palavra, sem seguir uma fórmula única — por isso, cada um se aprende de cor.',
        table: {
          head: ['Singular', 'Plural quebrado'],
          rows: [
            ['كتاب (livro)', 'كتب (livros) — confirmado pelo Wikcionário'],
            ['مكتب (escritório, mesa)', 'مكاتب'],
            ['ولد (menino)', 'اولاد'],
            ['مدينة (cidade)', 'مدن'],
          ],
        },
        examples: [['ده كتاب.', 'Isto é um livro.']],
      },
    ],
    pitfalls: [
      'Tentar adivinhar o plural quebrado por uma regra única: ele muda o padrão interno da palavra, sem fórmula fixa — melhor aprender caso a caso.',
      'Usar “-ين” em toda palavra: esse sufixo é comum em pessoas/particípios, mas não serve pra todo plural.',
    ],
    quiz: [
      { question: 'Qual é o plural de “كتاب” (livro)?', options: ['كتب', 'كتابين', 'كتابات'], answer: 'كتب', explanation: 'O Wikcionário confirma: كتاب (livro) tem o plural quebrado كتب (kutub).' },
      { question: 'O plural quebrado muda o quê na palavra?', options: ['O padrão de vogais por dentro', 'Só a última letra', 'Nada, é igual ao singular'], answer: 'O padrão de vogais por dentro', explanation: 'A Wikipédia descreve o plural quebrado como uma mudança interna, sem sufixo fixo.' },
    ],
  },
  {
    id: 'arz-g8',
    level: 'A2.2',
    title: 'O futuro com حـ (ha-)',
    emoji: '⏩',
    summary: 'Pra falar do futuro, o árabe egípcio gruda حـ (ha-) na frente do verbo — um prefixo diferente do بـ (bi-) do presente.',
    sections: [
      {
        text: 'A Wikipédia explica que o futuro “is formed from the subjunctive by addition of ḥa-”, dando o exemplo “حَ-كتب” (ha-ktib, “eu vou escrever”) e “حَاكل” (ha:kul, “eu vou comer”) — o mesmo verbo que no presente leva بـ (بيكتب, “eu escrevo”) troca pra حـ no futuro.',
        examples: [
          ['هو بيكتب.', 'Ele escreve. (presente, com بـ)'],
          ['هو حيكتب.', 'Ele vai escrever. (futuro, com حـ)'],
        ],
      },
      {
        heading: 'Negar o futuro: مش, não ما...ش',
        text: 'A negação do futuro não usa ما...ش como o presente e o passado: a Wikipédia registra que o futuro se nega só com “مش” antes do verbo — “مش حيكتب” (mish ha-yiktib, “ele não vai escrever”).',
        examples: [['مش حيكتب.', 'Ele não vai escrever.']],
      },
    ],
    pitfalls: [
      'Confundir بـ (presente) com حـ (futuro): são dois prefixos diferentes, pra tempos diferentes.',
      'Negar o futuro com ما...ش: o certo é “مش” antes do verbo no futuro.',
    ],
    quiz: [
      { question: 'Qual prefixo marca o futuro no árabe egípcio?', options: ['حـ (ha-)', 'بـ (bi-)', 'سـ (sa-)'], answer: 'حـ (ha-)', explanation: 'A Wikipédia confirma: o futuro se forma com حـ, diferente do بـ do presente.' },
      { question: 'Como se nega “ele vai escrever” (حيكتب)?', options: ['مش حيكتب', 'ما حيكتبش', 'مش بيكتب'], answer: 'مش حيكتب', explanation: 'O futuro nega só com “مش” antes do verbo, não com ما...ش.' },
    ],
  },
];
