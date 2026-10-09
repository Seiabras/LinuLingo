import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do árabe — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: artigos
 * “Arabic alphabet”, “Sun and moon letters” e “Arabic grammar” da Wikipédia em inglês, e os
 * verbetes do Wikcionário em inglês citados em cada tópico.
 */
export const GRAMMAR_AR: GrammarTopic[] = [
  {
    id: 'ar-g1',
    level: 'A1.1',
    title: 'O abjad árabe: 28 letras, sem vogais breves',
    emoji: '📜',
    summary: 'O árabe se escreve da direita para a esquerda com um abjad: um alfabeto que marca sobretudo as consoantes.',
    sections: [
      {
        text:
          'Diferente do nosso alfabeto, o árabe é um “abjad”: suas 28 letras marcam principalmente as consoantes, e as vogais curtas (a, i, u) costumam ficar sem escrever — quem já conhece a palavra completa o texto sozinho. Existem sinais para marcar essas vogais (as “harakat”): a fatḥa (a), a kasra (i), a ḍamma (u) e o sukūn (ausência de vogal), mas o uso comum do dia a dia — jornais, placas, mensagens — quase nunca os escreve; aparecem sobretudo no Alcorão, em livros infantis e em dicionários (fonte: artigo “Arabic alphabet”, Wikipédia em inglês).',
        table: {
          head: ['Sinal', 'Vogal', 'Exemplo'],
          rows: [
            ['fatḥa ( َ )', 'a', 'بَ = “ba”'],
            ['kasra ( ِ )', 'i', 'بِ = “bi”'],
            ['ḍamma ( ُ )', 'u', 'بُ = “bu”'],
            ['sukūn ( ْ )', '(sem vogal)', 'بْ = “b”'],
          ],
        },
        examples: [
          ['بيت', 'casa (lido “bayt”, sem as vogais escritas)'],
          ['كتاب', 'livro (lido “kitāb”)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar ver todas as vogais escritas como no português: no árabe do dia a dia elas ficam “no ar”, e dá pra ler sem elas depois de aprender o vocabulário.',
      'Escrever da esquerda para a direita por hábito: o árabe (como o teclado deste app) vai da direita para a esquerda.',
    ],
    quiz: [
      { question: 'O que é um “abjad”?', options: ['Um alfabeto que marca sobretudo as consoantes', 'Um alfabeto sem consoantes', 'O nome de uma vogal árabe'], answer: 'Um alfabeto que marca sobretudo as consoantes', explanation: 'No abjad árabe, as vogais curtas costumam ficar sem escrever; só as longas (ا, و, ي) aparecem sempre.' },
      { question: 'Quantas letras tem o alfabeto árabe?', options: ['28', '22', '33'], answer: '28', explanation: 'O abjad árabe tem 28 letras (fonte: Wikipédia, “Arabic alphabet”).' },
    ],
  },
  {
    id: 'ar-g2',
    level: 'A1.1',
    title: 'Letras solares e lunares: o artigo “ال”',
    emoji: '☀️',
    summary: 'O artigo definido “ال” (al-) muda de som — mas nunca de escrita — dependendo da letra seguinte.',
    sections: [
      {
        text:
          'O artigo definido árabe é “ال” (al-), e vem sempre grudado na palavra. Diante de 14 letras, chamadas “letras solares” (ت ث د ذ ر ز س ش ص ض ط ظ ل ن), o “ل” do artigo se funde com a primeira letra da palavra, dobrando o som dela — por isso “o sol” se escreve “الشمس” mas se lê “ash-shams”, não “al-shams”. Diante das outras 14 letras, as “letras lunares” (ا ب ج ح خ ع غ ف ق ك م ه و ي), o artigo não muda: “a lua” é “القمر”, lido “al-qamar” (fonte: artigo “Sun and moon letters”, Wikipédia em inglês).',
        table: {
          head: ['Tipo', 'Exemplo escrito', 'Como se lê'],
          rows: [
            ['Solar (ش)', 'الشمس', '“ash-shams” (o sol)'],
            ['Lunar (ق)', 'القمر', '“al-qamar” (a lua)'],
            ['Solar (س)', 'السكر', '“as-sukkar” (o açúcar)'],
            ['Lunar (ب)', 'البيت', '“al-bayt” (a casa)'],
          ],
        },
        examples: [
          ['الشمس كبيرة.', 'O sol é grande.'],
          ['القمر صغير.', 'A lua é pequena.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a escrita muda: “ال” se escreve sempre do mesmo jeito; só a pronúncia muda diante das letras solares.',
      'Esquecer de dobrar o som da consoante solar ao ler em voz alta: “الشمس” tem o som de “sh” dobrado, não um “l” antes dele.',
    ],
    quiz: [
      { question: 'Como se lê “الشمس” (o sol)?', options: ['“ash-shams”', '“al-shams”', '“al-chams”'], answer: '“ash-shams”', explanation: 'ش é uma letra solar: o “ل” do artigo vira o próprio som dela.' },
      { question: '“ق” (de “قمر”, lua) é uma letra…', options: ['lunar (o artigo não muda)', 'solar (o artigo se funde)', 'nem solar nem lunar'], answer: 'lunar (o artigo não muda)', explanation: '“القمر” se lê “al-qamar”, sem fusão — por isso dá nome ao grupo das “letras lunares”.' },
    ],
  },
  {
    id: 'ar-g3',
    level: 'A1.2',
    title: 'A ordem da frase: verbo antes ou depois do sujeito',
    emoji: '🔀',
    summary: 'O árabe clássico prefere Verbo-Sujeito-Objeto; o árabe padrão moderno também usa, bastante, Sujeito-Verbo-Objeto.',
    sections: [
      {
        text:
          'No árabe clássico, a ordem mais comum é VSO (verbo antes do sujeito): o verbo vem primeiro. O árabe padrão moderno de hoje usa bastante também a ordem SVO (sujeito antes do verbo), mais parecida com a do português — as duas ordens são gramaticais, e a SVO tornou-se o padrão mais comum nos textos modernos (fonte: artigos “Arabic” e “Arabic grammar”, Wikipédia em inglês).',
        table: {
          head: ['Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['VSO (clássica)', 'ذهب أحمد.', '“Foi Ahmad” = Ahmad foi.'],
            ['SVO (moderna, comum)', 'أحمد ذهب.', 'Ahmad foi.'],
          ],
        },
        examples: [
          ['هو يذهب.', 'Ele vai. (sujeito “هو” antes do verbo)'],
          ['هو يشرب حليب.', 'Ele bebe leite.'],
        ],
      },
    ],
    pitfalls: ['Achar que só existe uma ordem certa: as duas (verbo primeiro ou sujeito primeiro) são usadas e entendidas no árabe padrão moderno.'],
    quiz: [
      { question: 'Qual ordem o árabe clássico prefere?', options: ['Verbo-Sujeito-Objeto (VSO)', 'Objeto-Sujeito-Verbo', 'Só Sujeito-Verbo-Objeto'], answer: 'Verbo-Sujeito-Objeto (VSO)', explanation: 'No árabe clássico, o verbo costuma vir antes do sujeito.' },
      { question: 'O árabe padrão moderno…', options: ['usa bastante a ordem Sujeito-Verbo-Objeto também', 'proíbe a ordem VSO', 'não tem sujeito'], answer: 'usa bastante a ordem Sujeito-Verbo-Objeto também', explanation: 'As duas ordens convivem; a SVO é muito comum nos textos de hoje.' },
    ],
  },
  {
    id: 'ar-g4',
    level: 'A1.2',
    title: 'Singular, dual e plural: quando são exatamente dois',
    emoji: '✌️',
    summary: 'O árabe tem uma forma gramatical própria para “exatamente dois”, diferente do singular e do plural.',
    sections: [
      {
        text:
          'Além de singular e plural, o árabe tem o número “dual”, usado quando se fala de exatamente duas pessoas ou coisas — em substantivos, adjetivos e verbos. O dual de um substantivo costuma se formar com a terminação “-ān” (ou “-ayn”, dependendo do caso gramatical). “أخ” (irmão) no dual é “أخوان” (akhawān, “dois irmãos”); “عين” (olho) no dual é “عينان” (aynān) ou “عينين” (aynayn, “dois olhos”) (fonte: Wikcionário em inglês, verbetes “أخ” e “عين”; e artigo “Arabic grammar”, Wikipédia em inglês, sobre o pronome dual “أنتما”, antumā, “vocês dois”).',
        table: {
          head: ['Número', 'Exemplo', 'Tradução'],
          rows: [
            ['Singular', 'أخ', 'um irmão'],
            ['Dual', 'أخوان', 'dois irmãos (exatamente dois)'],
            ['Singular', 'عين', 'um olho'],
            ['Dual', 'عينان', 'dois olhos (exatamente dois)'],
          ],
        },
        examples: [
          ['عندي أخوان.', 'Tenho dois irmãos.'],
          ['عندي عينان.', 'Tenho dois olhos.'],
        ],
      },
    ],
    pitfalls: ['Usar o plural para falar de duas coisas: em árabe, “dois irmãos” pede a forma dual (أخوان), não a forma de plural (إخوة, usada para três ou mais).'],
    quiz: [
      { question: 'Como se diz “dois irmãos” em árabe?', options: ['أخوان', 'أخ', 'إخوة'], answer: 'أخوان', explanation: '“أخوان” é a forma dual de “أخ” (irmão), usada só para exatamente dois.' },
      { question: 'O número dual do árabe serve para…', options: ['exatamente duas pessoas ou coisas', 'três ou mais', 'só para pessoas, nunca coisas'], answer: 'exatamente duas pessoas ou coisas', explanation: 'É um terceiro número gramatical, diferente do singular e do plural comum.' },
    ],
  },
  {
    id: 'ar-g5',
    level: 'A2.1',
    title: 'O futuro: سَـ e سَوْفَ antes do presente',
    emoji: '⏩',
    summary: 'Pra falar do futuro, o árabe pega o próprio verbo no presente e gruda o prefixo “سَـ” (sa-) ou acrescenta a palavra separada “سَوْفَ” (sawfa) antes dele.',
    sections: [
      {
        text:
          'O árabe não tem uma conjugação de futuro separada: ele parte do verbo já conjugado no presente e marca o futuro só com um prefixo ou uma palavra extra na frente. O artigo “Arabic verbs” da Wikipédia em inglês explica que o futuro se forma “adicionando o prefixo سَـ sa- ou a palavra separada سَوْفَ sawfa no começo do verbo no presente”, e dá como exemplo سَيَكْتُبُ (sa-yaktubu) e سَوْفَ يَكْتُبُ (sawfa yaktubu), as duas significando “ele vai escrever”.',
        table: {
          head: ['Forma', 'Exemplo', 'Tradução'],
          rows: [
            ['presente', 'يكتب', 'ele escreve'],
            ['futuro com سَـ (prefixo)', 'سيكتب', 'ele vai escrever'],
            ['futuro com سَوْفَ (palavra separada)', 'سوف يكتب', 'ele vai escrever'],
          ],
        },
        examples: [
          ['هو سيكتب رسالة.', 'Ele vai escrever uma carta.'],
          ['هي سوف تقرأ كتابا.', 'Ela vai ler um livro.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma verbal nova pro futuro: o árabe reaproveita exatamente a forma do presente, só grudando “سَـ” ou pondo “سَوْفَ” antes dela.',
      'Separar “سَـ” do verbo com espaço: ele é um prefixo, escrito grudado (سيكتب, não سـ يكتب); já “سَوْفَ” é uma palavra separada, com espaço.',
    ],
    quiz: [
      { question: 'Como se forma o futuro em árabe?', options: ['Com o prefixo سَـ ou a palavra سَوْفَ antes do verbo no presente', 'Com uma conjugação verbal própria, diferente do presente', 'Só com سَوْفَ، nunca com سَـ'], answer: 'Com o prefixo سَـ ou a palavra سَوْفَ antes do verbo no presente', explanation: 'As duas formas, سيكتب e سوف يكتب, significam “ele vai escrever” (fonte: Wikipédia em inglês, “Arabic verbs”).' },
      { question: '“سَـ” se escreve…', options: ['grudado no verbo', 'separado, com espaço', 'depois do verbo'], answer: 'grudado no verbo', explanation: '“سَـ” é um prefixo (سيكتب); já “سَوْفَ” é uma palavra separada, escrita com espaço antes do verbo.' },
    ],
  },
  {
    id: 'ar-g6',
    level: 'A2.1',
    title: 'O elativo: um molde só pra comparativo e superlativo',
    emoji: '📈',
    summary: 'O árabe não tem formas separadas para “mais grande” e “o mais grande”: as duas usam o mesmo molde, أَفْعَل (elativo), e só a construção da frase muda o sentido.',
    sections: [
      {
        text:
          'Em vez de um comparativo e um superlativo diferentes como em português, o árabe tem um único molde para os dois: o elativo (اِسْم التَفْضِيل), na forma أَفْعَل (ʼafʻal). A Wikipédia em inglês (artigo “Arabic nouns”) descreve essa forma como “a forma أَفْعَل ʼafʻal do elativo masculino singular (ou seja, comparativo/superlativo)” e dá o exemplo كبير (kabīr, grande) → أكبر (ʼakbar, maior/o maior).',
        table: {
          head: ['Adjetivo', 'Elativo (أَفْعَل)', 'Tradução'],
          rows: [
            ['كبير (kabīr)', 'أكبر (ʼakbar)', 'maior / o maior'],
            ['صغير (ṣaghīr)', 'أصغر (ʼaṣghar)', 'menor / o menor'],
          ],
        },
        examples: [
          ['البيت أكبر من المدرسة.', 'A casa é maior que a escola. (com مِن, comparativo)'],
          ['هو أكبر طالب.', 'Ele é o maior estudante. (antes de um substantivo, superlativo)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra diferente para “maior” e “o maior”: o árabe usa a mesma forma أكبر para as duas ideias — é a construção da frase que marca a diferença.',
      'Flexionar o elativo em gênero, como um adjetivo comum: no uso comparativo (com مِن), ele fica sempre no masculino singular, mesmo descrevendo algo feminino.',
    ],
    quiz: [
      { question: 'Qual é o elativo (comparativo/superlativo) de “كبير” (grande)?', options: ['أكبر', 'كبيرة', 'كبار'], answer: 'أكبر', explanation: '“أكبر” (ʼakbar) é a forma أَفْعَل do elativo de كبير, usada tanto pra “maior” quanto pra “o maior”.' },
      { question: 'O que diferencia o uso comparativo do superlativo no elativo árabe?', options: ['A construção da frase (com “مِن” ou antes de um substantivo), não a forma da palavra', 'Uma terminação extra só no superlativo', 'O gênero da palavra'], answer: 'A construção da frase (com “مِن” ou antes de um substantivo), não a forma da palavra', explanation: '“أكبر من…” é comparativo; “أكبر طالب” (antes de um substantivo) é superlativo — a forma أكبر não muda.' },
    ],
  },
  {
    id: 'ar-g7',
    level: 'A2.2',
    title: 'O plural quebrado: quando a palavra toda se refaz',
    emoji: '🧩',
    summary: 'Muitos substantivos árabes não ganham só uma terminação no plural: a palavra inteira muda de molde — é o “plural quebrado” (جمع التكسير).',
    sections: [
      {
        text:
          'Além do plural com terminação (como o feminino em ـات), o árabe tem o chamado “plural quebrado”: a palavra toda muda de molde interno, não só o final. A Wikipédia em inglês (artigo “Arabic nouns”) diz que existem “mais de 70 moldes de plural quebrado, dos quais só 31 são comuns”, e que, por serem bastante imprevisíveis, “o plural de cada palavra deve ser memorizado” junto com ela. Os exemplos que o próprio artigo dá: كتاب (kitāb, livro) → كتب (kutub); يوم (yawm, dia) → أيام (ʼayyām); طالب (ṭālib, estudante) → طلاب (ṭullāb).',
        table: {
          head: ['Singular', 'Plural quebrado', 'Tradução'],
          rows: [
            ['كتاب (kitāb)', 'كتب (kutub)', 'livro → livros'],
            ['يوم (yawm)', 'أيام (ʼayyām)', 'dia → dias'],
            ['طالب (ṭālib)', 'طلاب (ṭullāb)', 'estudante → estudantes'],
          ],
        },
        examples: [
          ['عندي ثلاثة كتب.', 'Tenho três livros.'],
          ['هم طلاب.', 'Eles são estudantes.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar prever o plural quebrado só por regra fixa: a Wikipédia lembra que, mesmo com padrões, o plural de cada substantivo acaba precisando ser aprendido com a própria palavra.',
      'Confundir plural quebrado com plural dual: o dual (ver “ar-g4”) é só pra exatamente duas coisas; o plural quebrado vale pra três ou mais.',
    ],
    quiz: [
      { question: 'Qual é o plural quebrado de “كتاب” (livro)?', options: ['كتب', 'كتابان', 'كتابات'], answer: 'كتب', explanation: '“كتب” (kutub) é o plural quebrado de كتاب — a palavra muda de molde, não só de terminação.' },
      { question: 'Segundo a Wikipédia em inglês, quantos moldes de plural quebrado existem no árabe?', options: ['Mais de 70, dos quais só 31 são comuns', 'Só 2', 'Exatamente 10'], answer: 'Mais de 70, dos quais só 31 são comuns', explanation: 'É por isso que o plural quebrado de cada palavra costuma precisar ser memorizado, em vez de deduzido.' },
    ],
  },
];
