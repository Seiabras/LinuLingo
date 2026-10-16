import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do apache ocidental, do A1.1 ao A2.2 (os do A2 têm o próprio comentário de
 * fontes, mais abaixo). Fontes do A1:
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
  // ══ A2.1 e A2.2 (16/10/2026) ══
  // Fonte: Willem J. de Reuse, com Phillip Goode, “A Practical Grammar of the San Carlos Apache
  // Language” (Lincom Europa, 2006), citada como DR06 com a página impressa. Os paradigmas são os do
  // livro, forma por forma; as frases de exemplo são todas do livro (nenhuma montada).
  {
    id: 'apw-g5',
    level: 'A2.1',
    title: 'Ir e “andar por aí”: um verbo para um, dois e três ou mais',
    emoji: '🚶',
    summary:
      'Os verbos de movimento mudam de radical conforme quantas pessoas se movem: um radical para uma, outro para duas e outro para três ou mais.',
    sections: [
      {
        // DR06 p. 65 (T1)
        heading: '“Ir”: díyāā, dínyāā, diyāā',
        text:
          'Segundo De Reuse, o radical de uma pessoa é “-yāā”, o de duas é “-\'āāzh” e o de três ou mais é “-kai”. Os três não têm nada em comum, mas formam um verbo só. Por isso esse verbo distingue “eles dois” de “eles todos”, coisa que a maioria dos verbos não faz.',
        table: {
          head: ['Pessoa', 'Um', 'Dois', 'Três ou mais'],
          rows: [
            ['eu / nós', 'díyāā', "dit'āāzh", 'dikai'],
            ['você / vocês', 'dínyāā', "dishoł'āāzh", 'disołkai'],
            ['ele, ela / eles', 'diyāā ou dizyāā', "dizh'āāzh", 'diskai'],
          ],
        },
      },
      {
        // DR06 p. 66 (T2), (5a–b), (8a–b)
        heading: '“Andar por aí, ser de”: nashāā, naṉāā, naghāā',
        text:
          'Para gente e bichos, o apache não diz só “estar” num lugar: diz que a pessoa está em movimento por ali, porque tudo o que é vivo se mexe. O mesmo verbo serve para dizer de onde a pessoa é: “Sengaadí\' nashāā” é “eu sou de San Carlos”.',
        table: {
          head: ['Pessoa', 'Um', 'Dois', 'Três ou mais'],
          rows: [
            ['eu / nós', 'nashāā', "nahit'aash", 'nahikai'],
            ['você / vocês', 'naṉāā', "nał'aash", 'nałkai'],
            ['ele, ela / eles', 'naghāā', "na'aash", 'nakai'],
          ],
        },
      },
      {
        // DR06 p. 67 (12–13), p. 77 (T1)
        heading: 'Para onde, de onde',
        text:
          'O lugar ganha um final colado: “-yú” quer dizer “para” e “-dí\'” quer dizer “de”. Daí vêm as perguntas “hayú?” (para onde?) e “hadí\'?” (de onde?), e também “kū” (aqui) e “ákū” (lá).',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ['Hayú dínyāā?', 'Para onde você vai?'],
            ['Fiinigisyú díyāā.', 'Eu vou para Phoenix.'],
            ["Hadí' naṉāā?", 'De onde você é?'],
            ["Sengaadí' nashāā.", 'Eu sou de San Carlos.'],
            ['Kū nashāā.', 'Eu estou aqui.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Usar “díyāā” para um grupo: para duas pessoas o verbo vira “dit\'āāzh”, e para três ou mais, “dikai” (De Reuse, p. 65).',
      'Usar “nashāā” para coisas: esse verbo é só para gente e bichos; coisas paradas usam outros verbos (De Reuse, p. 66).',
      'Estranhar “shidoł\'āāzh” no lugar de “dishoł\'āāzh”: De Reuse avisa que nas formas de “vocês” as duas primeiras consoantes costumam trocar de lugar, e as duas formas estão certas (p. 65).',
    ],
    quiz: [
      {
        question: 'Como se diz “nós (três ou mais) vamos”?',
        options: ['dikai', "dit'āāzh", 'díyāā'],
        answer: 'dikai',
        explanation: '“Dikai” usa o radical “-kai”, de três ou mais; “dit\'āāzh” é “nós dois vamos” e “díyāā” é “eu vou” (De Reuse, p. 65).',
      },
      {
        question: 'O que quer dizer “Sengaadí\' nashāā”?',
        options: ['Eu sou de San Carlos.', 'Eu vou para San Carlos.', 'Ele está em San Carlos.'],
        answer: 'Eu sou de San Carlos.',
        explanation: '“-dí\'” é “de”, e “nashāā” é “eu ando por aí, eu sou de” (De Reuse, p. 66–67).',
      },
    ],
  },
  {
    id: 'apw-g6',
    level: 'A2.1',
    title: 'Perguntar e negar: ya’, né e doo … da',
    emoji: '❓',
    summary:
      'Para fazer uma pergunta de sim ou não, põe-se “ya\'” no começo, “né” no fim, ou os dois. Para negar, “doo” vai antes do que se nega e “da” fecha a frase.',
    sections: [
      {
        // DR06 p. 57 (T4), p. 58 (T5, T6)
        heading: 'Três jeitos de perguntar',
        text:
          'De Reuse mostra três jeitos de transformar uma frase em pergunta. O mais neutro é com “ya\'” no começo. Com “né” no fim, a pergunta fica um pouco mais insistente. Com os dois, fica bem formal.',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ['Fiinigisyú dínyāā.', 'Você vai para Phoenix.'],
            ["Ya' Fiinigisyú dínyāā?", 'Você vai para Phoenix? (neutro)'],
            ['Fiinigisyú dínyāā né?', 'Você vai para Phoenix? (mais insistente)'],
            ["Ya' Fiinigisyú dínyāā né?", 'Você vai para Phoenix? (formal)'],
          ],
        },
      },
      {
        // DR06 p. 58 (T5)
        heading: 'Sim e não',
        text:
          '“Ha\'oh” é “sim” e é mais dito por homens; “ha\'ah” é mais dito por mulheres. “Dah” é “não”. Também é comum responder “sim” só com a cabeça, sobretudo entre os homens.',
      },
      {
        // DR06 p. 59 (2a–b, 5a–b), p. 61 (T10)
        heading: 'doo … da',
        text:
          'Para negar, “doo” vem antes da palavra negada e “da” fecha a frase. Numa pergunta negativa, “ha\'oh” quer dizer “isso mesmo” e “dah” quer dizer “não é isso”: a resposta concorda ou discorda da pergunta, como em navajo e japonês.',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ['Hastiin dázhǫ́ nłdzil.', 'O velho é muito forte.'],
            ['Hastiin doo dázhǫ nłdzil da.', 'O velho não é muito forte.'],
            ["Dah, doo ádí' naghāā da.", 'Não, ele não é de lá.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esquecer o “da” no fim: a negação tem duas partes, “doo” antes e “da” no fim da frase (De Reuse, p. 59).',
      'Responder a uma pergunta negativa como em português: em apache, “ha\'oh” confirma a frase negativa (“isso mesmo, não tenho”), e “dah” a contraria (De Reuse, p. 61).',
    ],
    quiz: [
      {
        question: 'Qual é o jeito mais neutro de perguntar “Você vai para Phoenix?”',
        options: ["Ya' Fiinigisyú dínyāā?", "Ya' Fiinigisyú dínyāā né?", 'Fiinigisyú dínyāā.'],
        answer: "Ya' Fiinigisyú dínyāā?",
        explanation: 'Segundo De Reuse, “ya\'” no começo é o jeito mais neutro; com “ya\'” e “né” juntos a pergunta fica formal (p. 57).',
      },
      {
        question: 'Como fica “O velho não é muito forte”?',
        options: ['Hastiin doo dázhǫ nłdzil da.', 'Hastiin dázhǫ́ nłdzil da.', 'Doo hastiin dázhǫ́ nłdzil.'],
        answer: 'Hastiin doo dázhǫ nłdzil da.',
        explanation: '“Doo” vem antes do que se nega e “da” fecha a frase (De Reuse, p. 59).',
      },
    ],
  },
  {
    id: 'apw-g7',
    level: 'A2.2',
    title: 'Meu, seu, dele: shi-, ni-, bi-',
    emoji: '👨‍👩‍👧',
    summary:
      'O dono vem como prefixo no começo da palavra. Partes do corpo e parentes sempre levam um dono: não se diz “mãe” solta, e sim “minha mãe”, “a mãe dele”.',
    sections: [
      {
        // DR06 p. 78 (11b–14b, T2, T3), p. 78–79 (nohwi-/danohwi-, bi-/dabi-: da- só realça o plural)
        heading: 'Os prefixos de dono',
        text: 'De Reuse chama esses prefixos de “prefixos pessoais”. Os mesmos servem para dono (meu, seu) e para o objeto de uma posposição (a mim, a você). Para quem começa, o livro recomenda “bi-” também para “deles” e “nohwi-” para “nosso” e “de vocês”: as formas com “da-” na frente (“dabi-”, “danohwi-”) só realçam que os donos são muitos.',
        table: {
          head: ['Prefixo', 'Como dono', 'Exemplo'],
          rows: [
            ['shi-', 'meu, minha', 'shinałtsoos (meu papel)'],
            ['ni-', 'seu, sua (de uma pessoa)', "ni'idán (sua comida)"],
            ['bi-', 'dele, dela (também “deles”)', "bi'īī (a camisa dele)"],
            ['nohwi-', 'nosso; de vocês (mais de uma pessoa)', 'nohwiwóyé (nossa avó)'],
            ['dabi-', 'deles (realça que os donos são vários)', "dabimę́' (o bebê deles)"],
          ],
        },
      },
      {
        // DR06 p. 79 (T6), p. 80
        heading: 'Parentes sempre têm dono',
        text: 'Nomes de parentes e de partes do corpo nunca aparecem sozinhos. No glossário do livro, eles vêm com um hífen na frente para lembrar disso: “-māā” (mãe), “-taa” (pai).',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ['shimāā', 'minha mãe'],
            ['nimāā', 'sua mãe'],
            ['bimāā', 'a mãe dele, a mãe dela'],
          ],
        },
      },
      {
        // DR06 p. 89 (3, 5), p. 90 (6), p. 92 (28)
        heading: 'Quem é? É meu pai',
        text: 'Para apresentar alguém da família, usa-se “át\'ēē” (é); para dizer quem é alguém que o outro já conhece mas não reconheceu, usa-se “át\'į̄į̄”.',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ["Dīī shimāā át'ēē.", 'Esta é minha mãe.'],
            ["Dīī shidizhé ádat'ēē.", 'Estes são meus irmãos mais novos.'],
            ["Dīī hadín át'į̄į̄? — Shitaa át'į̄į̄.", 'Quem é este? — É meu pai.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Dizer “māā” sozinho para “mãe”: o livro marca isso como errado; a palavra precisa de um dono, como “shimāā” (De Reuse, p. 80).',
      'Usar o mesmo nome para as duas avós: a avó materna é “-wóyé” e a paterna é “-ch\'iné” (De Reuse, p. 183).',
    ],
    quiz: [
      {
        question: 'Como se diz “sua mãe” (de uma pessoa)?',
        options: ['nimāā', 'shimāā', 'bimāā'],
        answer: 'nimāā',
        explanation: '“Ni-” é “seu, sua”; “shi-” é “meu” e “bi-” é “dele, dela” (De Reuse, p. 78–79).',
      },
      {
        question: 'O que quer dizer “Dīī shidizhé ádat\'ēē”?',
        options: ['Estes são meus irmãos mais novos.', 'Esta é minha avó.', 'Este é meu pai.'],
        answer: 'Estes são meus irmãos mais novos.',
        explanation: '“Shidizhé” é “meu irmão mais novo” ou “minha irmã mais nova”, e “ádat\'ēē” é “eles são” (De Reuse, p. 89).',
      },
    ],
  },
  {
    id: 'apw-g8',
    level: 'A2.2',
    title: 'Foi, será: ni’ e doleeł',
    emoji: '⏳',
    summary:
      'Para falar de passado ou de futuro, muitas frases só ganham uma palavrinha no fim: “ni\'” para o passado e “doleeł” para o futuro.',
    sections: [
      {
        // DR06 p. 96 (58–62)
        text:
          'De Reuse chama essas palavrinhas de “partículas de tempo”. Elas vão no fim da frase e servem com verbos de qualidade (“é bom”), com verbos de ser e com frases sem verbo.',
        table: {
          head: ['Presente', 'Passado', 'Futuro'],
          rows: [
            ["Nłt'ēē. (É bom.)", "Nłt'ēē ni'. (Foi bom.)", "Nłt'ēē doleeł. (Vai ser bom.)"],
            ["Shibéstsoh át'ēē. (É meu dinheiro.)", "Shibéstsoh át'ēē ni'. (Era meu dinheiro.)", "Shibéstsoh át'ēē doleeł. (Vai ser meu dinheiro.)"],
            ["Intin biká' sáí. (Tem areia na estrada.)", "Intin biká' sáí ni'. (Tinha areia na estrada.)", "Intin biká' sáí doleeł. (Vai ter areia na estrada.)"],
          ],
        },
      },
      {
        // DR06 p. 97; “gozhǫǫ doleeł” é a saudação do A1 (Wiktionary)
        heading: 'Certeza, não só tempo',
        text:
          'O livro avisa que “ni\'” também diz que quem fala tem certeza do que passou (e em geral viu). E “doleeł” diz que quem fala tem confiança de que vai acontecer. Por isso essas partículas aparecem menos do que o passado e o futuro do português. A saudação “gozhǫǫ doleeł”, do começo do curso, termina com essa mesma palavra do futuro.',
      },
      {
        // DR06 p. 265 (2), p. 316 (11)
        heading: 'Com ontem e amanhã',
        table: {
          head: ['Apache', 'Português'],
          rows: [
            ["Adą̄ą̄dą́' zhāāli nashné' ni'.", 'Ontem eu tinha dinheiro.'],
            ['Nakih iską̄ą̄go Cindy Show Lowyú diyāā doleeł.', 'Daqui a dois dias, a Cindy vai a Show Low.'],
          ],
        },
        text: 'As palavras de tempo, como “adą̄ą̄dą́\'” (ontem) e “iską̄ą̄” (amanhã), costumam vir no começo da frase, e a partícula fecha a frase.',
      },
    ],
    pitfalls: [
      'Pôr “ni\'” ou “doleeł” no começo: as duas vão no fim da frase (De Reuse, p. 96).',
      'Usar “ni\'” para algo de que você não tem certeza: a partícula também diz que quem fala tem certeza do que aconteceu (De Reuse, p. 97).',
    ],
    quiz: [
      {
        question: 'Como se diz “Vai ser bom”?',
        options: ["Nłt'ēē doleeł.", "Nłt'ēē ni'.", "Nłt'ēē."],
        answer: "Nłt'ēē doleeł.",
        explanation: '“Doleeł” no fim marca o futuro; “ni\'” marca o passado (De Reuse, p. 96).',
      },
      {
        question: 'Além do passado, o que “ni\'” mostra, segundo De Reuse?',
        options: ['Que quem fala tem certeza do que aconteceu', 'Que a frase é uma pergunta', 'Que o sujeito são duas pessoas'],
        answer: 'Que quem fala tem certeza do que aconteceu',
        explanation: 'O livro explica que “ni\'” indica que quem fala tem certeza daquele passado e em geral o presenciou (p. 97).',
      },
    ],
  },
];
