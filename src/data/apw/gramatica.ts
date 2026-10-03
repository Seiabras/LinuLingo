import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do apache ocidental — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * en.wikipedia.org/wiki/Western_Apache_language (marcação de tom, exemplo "nato sentii"/"nato sen'a"
 * dos verbos classificatórios, dialetos); en.wikipedia.org/wiki/Apachean_languages (os quatro tons
 * segundo Hoijer — alto, baixo, ascendente, descendente — e o tom médio encontrado por De Reuse, 2006,
 * especificamente no apache ocidental; a árvore de classificação do subgrupo ocidental: apache
 * ocidental, navajo, mescalero e chiricauá); en.wikipedia.org/wiki/Na-Den%C3%A9_languages (ordem
 * sujeito-objeto-verbo e a estrutura de prefixos como traço típico das línguas na-dené);
 * en.wikipedia.org/wiki/Navajo_grammar (as onze posições do molde verbal navajo, citadas aqui só como
 * a descrição mais detalhada que existe para uma língua do mesmo subgrupo, não como um fato
 * comprovado especificamente para o apache ocidental); en.wikipedia.org/wiki/Navajo_language (o navajo
 * compartilha mais de 92% do vocabulário e um sistema de tons parecido com o apache ocidental); e o
 * Wiktionary em inglês, verbete por verbete, para "łigai" ("ser branco"), "diłhił" ("ser preto"),
 * "totlʼizh" ("ser azul/verde"), "łibaa" ("ser cinza/marrom") e "hishtłish" ("marrom; ser marrom"),
 * todos descritos ali como substantivo e também como verbo. Nenhuma fonte consultada foi usada para
 * inventar um paradigma de conjugação: onde a fonte não dava a forma conjugada completa, este curso
 * descreve o fenômeno em vez de fabricar um exemplo.
 */
export const GRAMMAR_APW: GrammarTopic[] = [
  {
    id: 'apw-g1',
    level: 'A1.1',
    title: 'Tom alto, tom baixo (e até um tom médio)',
    emoji: '🎵',
    summary:
      'O apache ocidental é uma língua tonal: a mesma sequência de letras pode mudar de sentido só pelo tom com que é pronunciada. O acento agudo marca o tom alto; a ausência de acento marca o tom baixo.',
    sections: [
      {
        text:
          'Segundo o artigo “Western Apache language” da Wikipédia em inglês, um acento agudo (á) representa uma vogal de tom alto, enquanto vogais de tom baixo não recebem nenhuma marca. Isso já é informação suficiente para começar a ler em voz alta, mas a história completa é um pouco mais rica.',
        table: {
          head: ['Marca', 'O que marca', 'Exemplo'],
          rows: [
            ['acento agudo (á, í, ú, ...)', 'tom alto', 'áho (obrigado)'],
            ['sem acento', 'tom baixo', 'dawa (tudo)'],
            ['mácron sobre a vogal (ī, ē, ...)', 'tom médio — achado específico de De Reuse (2006) para o apache ocidental', 'tsebīī (oito)'],
          ],
        },
      },
      {
        heading: 'Quatro tons, segundo a análise clássica',
        text:
          'O artigo “Apachean languages” da Wikipédia em inglês registra que Harry Hoijer e outros linguistas analisam as línguas atabascanas meridionais (o grupo do apache ocidental) com quatro tons — alto, baixo, ascendente e descendente, na tradição de transcrição americanista — mesmo que a ortografia prática usada neste curso só marque, na maioria das vezes, a diferença entre alto e baixo.',
      },
    ],
    pitfalls: [
      'Ignorar o acento agudo ao ler em voz alta: ele marca o tom alto, uma informação que pode distinguir palavras diferentes, não só uma força de voz extra como o acento do português.',
      'Achar que a ausência de acento significa “sem pronúncia especial”: no apache ocidental, a ausência de marca é ela mesma uma informação — o tom baixo.',
    ],
    quiz: [
      {
        question: 'Segundo o Wiktionary e a Wikipédia em inglês, o que o acento agudo (á) marca numa palavra do apache ocidental?',
        options: ['O tom alto da vogal', 'Só a sílaba tônica, como no português', 'O plural do substantivo'],
        answer: 'O tom alto da vogal',
        explanation: 'O artigo “Western Apache language” da Wikipédia em inglês explica que o acento agudo marca uma vogal de tom alto; vogais de tom baixo ficam sem marca.',
      },
    ],
  },
  {
    id: 'apw-g2',
    level: 'A1.1',
    title: 'Sujeito-objeto-verbo e prefixos em cadeia',
    emoji: '🧩',
    summary:
      'O apache ocidental pertence à família na-dené, cujas línguas colocam o verbo por último na frase (sujeito-objeto-verbo) mas, ao mesmo tempo, concentram informação gramatical em prefixos — uma combinação rara entre as línguas do mundo.',
    sections: [
      {
        text:
          'O artigo “Na-Dené languages” da Wikipédia em inglês chama essa combinação de “tipologicamente incomum”: línguas que usam muitos prefixos (não sufixos) e, ainda assim, colocam o verbo no final da frase (sujeito-objeto-verbo) e usam posposições em vez de preposições — um padrão que normalmente se espera só de línguas que marcam tudo com sufixos.',
      },
      {
        heading: 'Um verbo cheio de informação',
        text:
          'O mesmo artigo descreve as línguas na-dené como compartilhando “uma estrutura verbal de prefixos altamente complexa, em que marcadores de modo e tempo ficam intercalados entre os marcadores de concordância de sujeito e de objeto”. A descrição mais detalhada desse molde de prefixos que esta pesquisa encontrou não é do apache ocidental especificamente, e sim do navajo — língua do mesmo subgrupo —, cujo artigo “Navajo grammar” da Wikipédia em inglês descreve até onze posições de prefixo num único verbo. Como o apache ocidental compartilha a mesma família e um sistema de verbos comparável (ver o próximo tópico), é razoável esperar uma complexidade parecida — mas, sem uma fonte específica sobre o apache ocidental para confirmar o número exato de posições, este curso não afirma esse número para o apache ocidental, só para o navajo.',
      },
    ],
    pitfalls: [
      'Esperar que o apache ocidental organize a frase como o português (sujeito-verbo-objeto): a ordem mais comum nas línguas na-dené é sujeito-objeto-verbo.',
      'Confundir “muitos prefixos” com “língua simples”: embora o apache ocidental não use muitos sufixos, cada verbo pode carregar uma quantidade grande de informação gramatical em prefixos — o oposto de simples.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês, qual é a ordem básica das línguas na-dené (como o apache ocidental)?',
        options: ['Sujeito-objeto-verbo (SOV)', 'Sujeito-verbo-objeto (SVO), como o português', 'Verbo-sujeito-objeto (VSO)'],
        answer: 'Sujeito-objeto-verbo (SOV)',
        explanation: 'O artigo “Na-Dené languages” descreve essas línguas como SOV e posposicionais, uma combinação pouco comum com a prefixação extensa que também as caracteriza.',
      },
    ],
  },
  {
    id: 'apw-g3',
    level: 'A1.2',
    title: 'Verbos que mudam com o objeto, e cor que é verbo',
    emoji: '🎨',
    summary:
      'O apache ocidental tem um sistema de “verbos classificatórios”: a forma do verbo muda de acordo com o tipo do objeto de que se fala. E palavras de cor, como “ser branco” ou “ser preto”, são tecnicamente verbos, não adjetivos separados.',
    sections: [
      {
        text:
          'Segundo o artigo “Western Apache language” da Wikipédia em inglês, o apache ocidental usa um sistema de verbos classificatórios comparável ao do jicarila e do mescalero: o verbo muda de forma segundo o tipo de objeto envolvido. O próprio artigo dá um exemplo real, com a palavra “nato” (tabaco) deste curso: as frases “nato sentii” e “nato sen’a” podem ambas ser traduzidas, a grosso modo, como “me entregue o tabaco” — mas usam temas verbais diferentes (“-tii” e “-’a”) para o mesmo pedido. A fonte não detalha exatamente qual diferença no objeto escolhe um tema ou outro, então este curso registra o fenômeno sem inventar essa regra.',
      },
      {
        heading: 'Branco, preto, azul: tudo verbo',
        text:
          'O Wiktionary mostra, verbete por verbete, que várias palavras de cor do apache ocidental funcionam também como verbos: “łigai” (branco) é descrito ali tanto como substantivo quanto como o verbo “ser branco”; o mesmo vale para “diłhił” (“ser preto”) e “hishtłish” (“ser marrom”). Já “totlʼizh” (“ser azul, ser verde”) e “łibaa” (“ser cinza, ser marrom — qualquer cor sem brilho”) aparecem no Wiktionary só como verbo, sem uma forma de substantivo separada.',
        table: {
          head: ['Palavra', 'Substantivo (Wiktionary)', 'Verbo (Wiktionary)'],
          rows: [
            ['łigai', 'branco', 'ser branco'],
            ['diłhił', 'preto', 'ser preto'],
            ['hishtłish', 'marrom', 'ser marrom'],
            ['totlʼizh', '—', 'ser azul, ser verde'],
            ['łibaa', '—', 'ser cinza, ser marrom'],
          ],
        },
      },
    ],
    pitfalls: [
      'Tratar “łigai”, “diłhił” e as outras cores como simples adjetivos soltos, do jeito que o português trata “branco” ou “preto”: o Wiktionary as descreve também como verbos (“ser branco”, “ser preto”).',
      'Tentar combinar livremente substantivo e verbo, como em português: num verbo classificatório, trocar o tema verbal pode ser obrigatório dependendo do objeto, algo que o português não tem.',
    ],
    quiz: [
      {
        question: 'Segundo o Wiktionary, o que “łigai” e “diłhił” têm em comum com “totlʼizh” e “łibaa”?',
        options: [
          'Todos são descritos também como verbos (“ser branco”, “ser preto”, “ser azul/verde”, “ser cinza/marrom”)',
          'Todos são pronomes pessoais',
          'Todos são numerais',
        ],
        answer: 'Todos são descritos também como verbos (“ser branco”, “ser preto”, “ser azul/verde”, “ser cinza/marrom”)',
        explanation: 'O Wiktionary registra essas palavras de cor como substantivo e verbo ao mesmo tempo (ou só como verbo, no caso de “totlʼizh” e “łibaa”) — um padrão parecido com o de outras línguas atabascanas.',
      },
    ],
  },
  {
    id: 'apw-g4',
    level: 'A1.2',
    title: 'O parentesco com o navajo',
    emoji: '🤝',
    summary:
      'O apache ocidental e o navajo são as duas línguas mais próximas dentro do subgrupo ocidental das línguas apachianas: segundo a Wikipédia em inglês, compartilham um sistema de tons parecido e mais de 92% do vocabulário.',
    sections: [
      {
        text:
          'O artigo “Navajo language” da Wikipédia em inglês afirma que “o navajo é mais proximamente relacionado ao apache ocidental, com o qual compartilha um esquema tonal parecido e mais de 92% do seu vocabulário, e ao apache mescalero-chiricauá”. O artigo “Apachean languages” detalha a árvore: o subgrupo ocidental reúne apache ocidental, navajo, mescalero e chiricauá, enquanto o subgrupo oriental reúne jicarila, lipã e apache das planícies — e, dentro do subgrupo ocidental, o apache ocidental (sobretudo a variedade dilzhé’e) e o navajo são os dois mais próximos entre si.',
      },
      {
        heading: 'Palavras-irmãs, não emprestadas',
        text:
          'O Wiktionary confirma esse parentesco palavra por palavra: “kįh” (casa, apache ocidental) é cognato do navajo “kin” (casa) — a mesma raiz atabascana herdada de forma independente pelas duas línguas, não um empréstimo recente. O mesmo vale para “isdzán” (mulher, cognato do navajo “asdzáán”), “ishkiin” (menino, cognato de “ashkii”), “łitsog” (amarelo, cognato de “łitso”) e “łóg” (peixe, cognato de “łóóʼ”) — ver a aba de etimologia para mais exemplos.',
      },
    ],
    pitfalls: [
      'Achar que o apache ocidental é “um dialeto do navajo” ou vice-versa: são duas línguas distintas, ainda que muito próximas — cada uma com sua própria gramática e seus próprios falantes.',
      'Esperar que todo navajo entenda apache ocidental sem esforço só por causa do parentesco: compartilhar mais de 92% do vocabulário e um sistema de tons parecido não é o mesmo que ser a mesma língua.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês, qual porcentagem do vocabulário o navajo compartilha com o apache ocidental?',
        options: ['Mais de 92%', 'Cerca de 10%', 'Exatamente 50%'],
        answer: 'Mais de 92%',
        explanation: 'O artigo “Navajo language” da Wikipédia em inglês registra esse número exato, junto com um sistema de tons parecido entre as duas línguas.',
      },
      {
        question: 'Dentro do subgrupo ocidental das línguas apachianas, quais quatro línguas a Wikipédia em inglês lista?',
        options: [
          'Apache ocidental, navajo, mescalero e chiricauá',
          'Apache ocidental, jicarila, lipã e apache das planícies',
          'Navajo, chipewyan, dogrib e tsuutʼina',
        ],
        answer: 'Apache ocidental, navajo, mescalero e chiricauá',
        explanation: 'O artigo “Apachean languages” descreve essas quatro línguas como o subgrupo ocidental, em oposição ao subgrupo oriental (jicarila, lipã e apache das planícies).',
      },
    ],
  },
];
