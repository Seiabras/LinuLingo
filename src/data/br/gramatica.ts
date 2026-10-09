import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do bretão — A1.1, A1.2 e, a partir de br-g5, A2.1 e A2.2.
 *
 * Fontes: "Breton language", "Breton grammar" e "Breton orthography", Wikipédia em inglês;
 * Wiktionary em inglês (entradas "bezañ", "kaout", "gant", "ur", "ket", "ha", "tad", "kador", "ki",
 * "taol", "dour" — a seção "Breton" de cada uma); Wikibooks "Breton", nível 1.
 *
 * Fontes novas do A2 (consultadas em 09/10/2026): Wikipédia em inglês, “Breton grammar”
 * (https://en.wikipedia.org/wiki/Breton_grammar), tabelas de conjugação de “bezañ” (ser/estar) e
 * “eus”/kaout (ter) no pretérito imperfeito e no futuro, de “mont” (ir) nos mesmos tempos, a regra do
 * comparativo (-oc'h) e superlativo (-añ), e as formas de plural dos substantivos; Wiktionary em
 * inglês, entrada “brav” (confirma “bravoc'h”/“bravañ”).
 */
export const GRAMMAR_BR: GrammarTopic[] = [
  {
    id: 'br-g1',
    level: 'A1.1',
    title: "Pronúncia: c'h, zh e o alfabeto sem Q nem X",
    emoji: '🔤',
    summary: "O bretão usa o alfabeto latino, mas com duas letras próprias — “c'h” e “zh” — e sem Q nem X.",
    sections: [
      {
        text: "A ortografia peurunvan, criada em 1941 para unificar os quatro dialetos do bretão, tem duas letras que não existem em português. A mais comum é “c'h”, uma fricativa surda mais atrás na garganta que o “h” normal. A mais curiosa é “zh”: ela nasceu porque um mesmo som é pronunciado “z” na maior parte da Bretanha e “h” no dialeto vanetês — então os criadores da norma escreveram as duas letras juntas para servir aos dois jeitos de falar. A própria palavra “bretão” mostra isso: “brezhoneg”.",
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ["c'h", "fricativa surda (mais forte que “h”)", "c'hoar (irmã)"],
            ['zh', "“z” na maioria da Bretanha, “h” no vanetês", 'brezhoneg (língua bretã)'],
            ['h', 'aspiração leve, quando pronunciado', 'heol (sol)'],
          ],
        },
        examples: [
          ["Ar c'hi zo o kousket amañ.", 'O cachorro está dormindo aqui.'],
          ['Demat! Brezhoneg a ran.', 'Oi! Eu falo bretão.'],
        ],
      },
    ],
    pitfalls: [
      "Ler “c'h” como um “h” fraco: é um som mais forte, raspado, que o alfabeto português não tem.",
      'Esquecer que o alfabeto da ortografia peurunvan não tem Q nem X.',
    ],
    quiz: [
      { question: 'Por que a letra “zh” existe no bretão?', options: ['Para representar um som que muda conforme a região (z ou h)', 'Porque é uma letra do francês', 'Para marcar palavras emprestadas'], answer: 'Para representar um som que muda conforme a região (z ou h)', explanation: "A ortografia peurunvan uniu os dialetos: “zh” soa “z” na maior parte da Bretanha e “h” no vanetês." },
      { question: 'Quais duas letras o alfabeto bretão da ortografia peurunvan não usa?', options: ['Q e X', 'K e W', 'C e J'], answer: 'Q e X', explanation: 'O alfabeto bretão peurunvan dispensa Q e X.' },
    ],
  },
  {
    id: 'br-g2',
    level: 'A1.1',
    title: 'Pronomes e o verbo bezañ (ser/estar)',
    emoji: '🙋',
    summary: "Sete pronomes pessoais e um só verbo, “bezañ”, para o nosso ser e o nosso estar.",
    sections: [
      {
        text: "Como o português, o bretão tem um pronome para cada pessoa — mas ao contrário do português, ele costuma aparecer na frase mesmo quando o verbo já indica quem fala. “Bezañ” cobre tanto “ser” quanto “estar”: “mat on” é “estou bem” e “Yannig on” é “sou o Yannig”, com o mesmo verbo.",
        table: {
          head: ['Pronome', 'Tradução', 'bezañ (presente)'],
          rows: [
            ['me', 'eu', 'on'],
            ['te', 'tu, você', 'out'],
            ['eñ / hi', 'ele / ela', 'eo, zo'],
            ['ni', 'nós', 'omp'],
            ["c'hwi", "vocês; você (formal, como o “vous” francês)", "oc'h"],
            ['int', 'eles, elas', 'int'],
          ],
        },
        examples: [
          ['Mat on.', 'Estou bem.'],
          ['Me a gomz brezhoneg.', 'Eu falo bretão.'],
          ['Piv out te?', 'Quem é você?'],
        ],
      },
    ],
    pitfalls: ["Achar que “c'hwi” é só plural: como no francês e no galês, serve também para falar com uma pessoa só, de forma educada."],
    quiz: [
      { question: 'Como se diz “eu” em bretão?', options: ['me', 'te', 'ni'], answer: 'me', explanation: "“Me” é o pronome de primeira pessoa do singular." },
      { question: "“C'hwi” serve para…", options: ['vocês e também para tratar uma pessoa com educação', 'só para “eles”', 'só para “nós”'], answer: 'vocês e também para tratar uma pessoa com educação', explanation: "Como o “vous” francês, “c'hwi” é plural e também a forma educada de falar com uma pessoa." },
    ],
  },
  {
    id: 'br-g3',
    level: 'A1.2',
    title: 'Mutações consonânticas iniciais',
    emoji: '🔀',
    summary: 'A primeira letra de uma palavra bretã pode mudar de som dependendo do que vem antes dela.',
    sections: [
      {
        text: "O bretão, como todas as línguas celtas, muda a consoante inicial de uma palavra conforme o contexto gramatical — o possessivo, o artigo, um numeral. Existem quatro famílias de mutação. A palavra do dicionário nunca muda; só a forma usada na frase.",
        table: {
          head: ['Mutação', 'Mudanças principais'],
          rows: [
            ["Suave (lenição)", "p→b, t→d, k→g, b→v, d→z, g→c'h, m→v"],
            ['Espirante', "p→f, t→z, k→c'h, gw→w"],
            ['Dura', 'b→p, d→t, g→k'],
            ['Mista', "b→v, d→t, g→c'h, gw→w, m→v"],
          ],
        },
        examples: [
          ['Ma zad a zo mat. / Da dad a zo mat.', 'Meu pai está bem. / Seu pai está bem.'],
          ['An daol zo ruz. Ar gador zo glas.', 'A mesa é vermelha. A cadeira é azul.'],
        ],
      },
      {
        heading: 'Um mesmo possessivo, mutações diferentes',
        text: "“Tad” (pai) vira “ma zad” com “ma” (meu — mutação espirante, t→z) mas vira “da dad” com “da” (seu — mutação suave, t→d). Dois possessivos diferentes puxam duas famílias de mutação diferentes para a mesma palavra.",
      },
      {
        heading: 'O artigo definido também muda a palavra seguinte',
        text: "“Taol” (mesa) e “kador” (cadeira), ambas femininas, ganham mutação suave depois do artigo: “an daol” (a mesa), “ar gador” (a cadeira). Já “dour” (água), masculina, fica “an dour” sem mudar nada. Mas isso não é uma regra sem exceção: “ki” (cachorro, masculino) aparece mutado em “ar c'hi” numa frase real de dicionário — por isso cada mutação se aprende também palavra por palavra, com o tempo.",
      },
    ],
    pitfalls: [
      'Achar que a mutação muda o significado da palavra: ela só muda o som e a grafia, o sentido continua o mesmo.',
      'Tentar adivinhar sempre a mesma mutação para a mesma letra: o gatilho (artigo, possessivo, número) decide qual das quatro famílias se aplica.',
    ],
    quiz: [
      { question: 'Como fica “tad” (pai) depois de “ma” (meu)?', options: ['ma zad', 'ma tad', 'ma dad'], answer: 'ma zad', explanation: "“Ma” puxa a mutação espirante: t→z." },
      { question: 'Como fica “kador” (cadeira) depois do artigo “ar”?', options: ['ar gador', 'ar kador', "ar c'hador"], answer: 'ar gador', explanation: "“Kador” é feminino e ganha mutação suave depois do artigo: k→g." },
    ],
  },
  {
    id: 'br-g4',
    level: 'A1.2',
    title: "Ordem da frase, foco, e a posse sem “ter” de verdade",
    emoji: '🔁',
    summary: "O bretão prefere destacar uma palavra no começo da frase, e não tem um verbo “ter” como o português.",
    sections: [
      {
        text: "Por baixo da gramática, o bretão é uma língua VSO (verbo-sujeito-objeto), mas isso quase não aparece na prática: o verbo conjugado quase nunca vem em primeiro lugar. Em vez disso, uma palavra em foco vem primeiro, seguida de uma partícula (“a” ou “e”) antes do verbo. Comparando “Gwenn eo ar paper” (branco é o papel, com o adjetivo em foco) e “Ar paper zo gwenn” (o papel é branco, com o sujeito em foco), o sentido é o mesmo, mas o que está em destaque muda.",
        examples: [
          ['Gwenn eo ar paper.', '(O) branco é o papel. / O papel é branco.'],
          ['Ar paper zo gwenn.', 'O papel é branco.'],
          ['Deskiñ a ran brezhoneg.', "Estou aprendendo bretão. (lit. “aprender faço bretão”)"],
        ],
      },
      {
        heading: "Ter, sem ter “ter”",
        text: "O bretão expressa posse de duas formas. Com “kaout” (ter), o objeto possuído fica em foco antes da forma conjugada: “ur c'hi am eus” (eu tenho um cachorro, literalmente “um cachorro eu-tenho”). Com “bezañ” + “gant” (com), a posse é dita como companhia: “kazh a zo ganin” (eu tenho um gato, literalmente “gato está comigo”) — o mesmo “gant” que aparece em “ha ganit?” (e com você?/e você?).",
        examples: [
          ["Ur c'hi am eus.", 'Eu tenho um cachorro.'],
          ['Kazh a zo ganin.', "Eu tenho um gato. (lit. “gato está comigo”)"],
        ],
      },
      {
        heading: "A negação “ne … ket”",
        text: "Como o francês “ne … pas”, a negação bretã cerca o verbo com duas partes: “ne” antes, “ket” depois. Na fala, o “ne” some com frequência, sobrando só o “ket”: “n'ouzon ket” (eu não sei).",
        examples: [["N'ouzon ket.", 'Eu não sei.']],
      },
    ],
    pitfalls: [
      'Esperar sempre verbo-sujeito-objeto numa frase simples: na prática, a palavra em foco quase sempre vem primeiro.',
      "Procurar um verbo só para “ter”: o bretão usa “kaout” ou “bezañ” + “gant”, nunca os dois sentidos com uma palavra parecida com o português.",
    ],
    quiz: [
      { question: "Como se diz “eu tenho um cachorro” usando “gant” (com)?", options: ["Ur c'hi a zo ganin.", "Ur c'hi am eus.", "Ganin ur c'hi."], answer: "Ur c'hi a zo ganin.", explanation: "Literalmente “um cachorro está comigo” — a posse dita como companhia, com “bezañ” + “gant”." },
      { question: "“Ket” sozinho, sem o “ne” antes do verbo, costuma indicar o quê na fala de todo dia?", options: ["Negação (o “ne” costuma sumir na fala)", 'Pergunta', 'Plural'], answer: "Negação (o “ne” costuma sumir na fala)", explanation: "“Ne … ket” é a negação bretã; na fala, o “ne” cai com frequência." },
    ],
  },
  {
    id: 'br-g5',
    level: 'A2.1',
    title: 'O passado: bezañ, kaout e mont',
    emoji: '⏳',
    summary: 'Dois tempos de passado — o imperfeito e o pretérito — para os três verbos mais usados do bretão.',
    sections: [
      {
        text: 'O bretão distingue dois passados simples: o imperfeito (ação contínua ou de fundo, como “eu estava” ou “eu ia”) e o pretérito (ação pontual e concluída, como “eu estive” ou “eu fui”). Os dois têm conjugação própria para cada pessoa — não é só um sufixo igual para todas.',
        table: {
          head: ['Pessoa', 'bezañ, imperfeito (eu era/estava…)', 'bezañ, pretérito (eu fui/estive…)'],
          rows: [
            ['me (eu)', 'oan', 'boen'],
            ['te (tu)', 'oas', 'boes'],
            ['eñ/hi (ele/ela)', 'oa', 'boe'],
            ['ni (nós)', 'oamp', 'boemp'],
            ["c'hwi (vós/você)", "oac'h", "boec'h"],
            ['int (eles)', 'oant', 'boent'],
          ],
        },
        examples: [
          ["Dec'h e oan o lenn.", 'Ontem eu estava lendo.'],
          ['Oa mat an traoù?', 'Estava tudo bem?'],
        ],
      },
      {
        heading: "“Kaout” (ter) no passado: o verbo “eus”",
        text: 'Na prática, “ter” no passado usa as formas conjugadas de “eus”, que combinam um pronome preso (am/az/en/he/hor/ho/o) com a raiz do verbo — um sistema bem diferente de “bezañ” e “mont”.',
        table: {
          head: ['Pessoa', 'Imperfeito (eu tinha…)', 'Pretérito (eu tive…)'],
          rows: [
            ['me (eu)', 'am boa', 'am boe'],
            ['te (tu)', 'az poa', 'az poe'],
            ['eñ (ele)', 'en doa', 'en devoe'],
            ['hi (ela)', 'he doa', 'he devoe'],
            ['ni (nós)', 'hor boa', 'hor boe'],
          ],
        },
        examples: [['Ur c\'hi am boa.', 'Eu tinha um cachorro.']],
      },
      {
        heading: '“Mont” (ir) no passado',
        table: {
          head: ['Pessoa', 'Imperfeito (eu ia…)', 'Pretérito (eu fui…)'],
          rows: [
            ['me (eu)', 'aen', 'is'],
            ['te (tu)', 'aes', 'ejout'],
            ['eñ/hi (ele/ela)', 'ae', 'eas'],
            ['ni (nós)', 'aemp', 'ejomp'],
          ],
        },
        examples: [['Dec\'h e is da Roazhon.', 'Ontem eu fui a Rennes.']],
      },
    ],
    pitfalls: [
      'Confundir imperfeito com pretérito: “oan” é um passado contínuo/de fundo (“eu estava”), “boen” é um fato pontual já fechado (“eu estive”) — como a diferença entre “eu ia” e “eu fui”.',
      'Esperar que “kaout” (ter) se conjugue como “bezañ”: no passado, “ter” usa as formas de “eus”, com pronome preso antes da raiz (am/az/en/he…), um sistema próprio.',
    ],
    quiz: [
      { question: 'Como se diz “ontem eu estava lendo”, usando o imperfeito de “bezañ”?', options: ["Dec'h e oan o lenn.", "Dec'h e boen o lenn.", "Dec'h e in o lenn."], answer: "Dec'h e oan o lenn.", explanation: '“Oan” é a 1ª pessoa do imperfeito de “bezañ” — ação contínua no passado.' },
      { question: 'Como se diz “eu tinha um cachorro” no passado?', options: ["Ur c'hi am boa.", "Ur c'hi am eus.", "Ur c'hi oan."], answer: "Ur c'hi am boa.", explanation: '“Am boa” é o imperfeito de “eus” (ter) na 1ª pessoa — “ter” não usa a conjugação de “bezañ”.' },
    ],
  },
  {
    id: 'br-g6',
    level: 'A2.1',
    title: 'O plural dos substantivos',
    emoji: '🔢',
    summary: 'O bretão forma o plural de vários jeitos — nenhum sufixo único serve para toda palavra.',
    sections: [
      {
        text: 'A maioria dos substantivos ganha um sufixo: “-ed”, mais comum em seres animados, e “-(i)où”, mais comum em coisas. Mas várias palavras mudam a vogal do meio, ou são totalmente irregulares — o plural se aprende palavra por palavra, como em português com “pão/pães”.',
        table: {
          head: ['Tipo', 'Singular → Plural', 'Tradução'],
          rows: [
            ['sufixo -ed (seres animados)', 'Breizhad → Bretoned', 'bretão → bretões'],
            ['sufixo -où (coisas)', 'levr → levroù', 'livro → livros'],
            ['troca de vogal', 'kastell → kestell', 'castelo → castelos'],
            ['troca de vogal', 'maen → mein', 'pedra → pedras'],
            ['irregular', 'den → tud', 'pessoa → pessoas'],
            ['irregular', 'ki → kon / chas', 'cachorro → cachorros'],
          ],
        },
        examples: [['Tud a zo amañ.', 'Há pessoas aqui.']],
      },
      {
        heading: 'Um caso especial: o duplo e o singulativo',
        text: 'Partes do corpo que vêm em par usam um prefixo de dual: “daou-” (masculino) ou “di(v)-” (feminino) antes do plural normal — “lagad” (olho) faz “lagadoù” (olhos, várias pessoas) mas “daoulagad” (os dois olhos de uma pessoa). Outro caso é o singulativo: “gwez” já significa “árvores” (coletivo), e “gwezenn” é “uma árvore só” — o contrário do padrão esperado.',
        examples: [['Daoulagad glas.', 'Olhos azuis (os dois olhos de alguém).']],
      },
    ],
    pitfalls: [
      'Tentar adivinhar o plural por uma regra só: ele muda por sufixo, por troca de vogal, ou é irregular — vale aprender cada palavra nova com o plural dela.',
      'Achar que “gwez” é singular (“árvore”) só porque parece simples: é o coletivo “árvores”; “uma árvore” precisa do sufixo singulativo, “gwezenn”.',
    ],
    quiz: [
      { question: 'Qual é o plural irregular de “den” (pessoa)?', options: ['tud', 'denoù', 'dened'], answer: 'tud', explanation: '“Den” → “tud” é um plural totalmente irregular, sem sufixo nem troca de vogal previsível.' },
      { question: 'O que “daoulagad” quer dizer?', options: ['os dois olhos de uma pessoa', 'muitos olhos de pessoas diferentes', 'um olho só'], answer: 'os dois olhos de uma pessoa', explanation: '“Daou-” é o prefixo de dual para partes do corpo em par, no masculino.' },
    ],
  },
  {
    id: 'br-g7',
    level: 'A2.2',
    title: 'O futuro: bezañ, kaout e mont',
    emoji: '🔮',
    summary: 'O futuro do bretão também tem conjugação própria para cada verbo e cada pessoa.',
    sections: [
      {
        text: 'Como o passado, o futuro muda de forma conforme o verbo: “bezañ” e “mont” têm raízes de futuro próprias, e “kaout” (ter) continua usando o sistema de pronome preso + raiz de “eus”.',
        table: {
          head: ['Pessoa', 'bezañ (eu serei/estarei…)', 'mont (eu irei…)', 'eus/kaout (eu terei…)'],
          rows: [
            ['me (eu)', 'bin, bezin', 'in', 'am bo, am vezo'],
            ['te (tu)', 'bi, bezi', 'i', 'az po, az pezo'],
            ['eñ (ele)', 'bo, bezo', 'ay, aio', 'en devo, en devezo'],
            ['ni (nós)', 'bimp, bezimp', 'aimp', 'hor bo, hor bezo'],
          ],
        },
        examples: [
          ['Warc\'hoazh e bin amañ.', 'Amanhã eu estarei aqui.'],
          ['Dilun e in da Roazhon.', 'Segunda eu irei a Rennes.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma raiz só para o futuro de “bezañ”: há duas formas aceitas em cada pessoa (ex.: “bin” e “bezin” para “eu serei”), ambas corretas.',
      'Confundir o futuro de “mont” (“in”, eu irei) com o presente de “bezañ” (“on”, eu sou/estou): são raízes parecidas, mas de verbos diferentes.',
    ],
    quiz: [
      { question: 'Como se diz “amanhã eu estarei aqui”?', options: ["Warc'hoazh e bin amañ.", "Warc'hoazh e oan amañ.", "Warc'hoazh e on amañ."], answer: "Warc'hoazh e bin amañ.", explanation: '“Bin” (ou “bezin”) é a 1ª pessoa do futuro de “bezañ”.' },
      { question: 'Qual é a 1ª pessoa do futuro de “mont” (ir)?', options: ['in', 'on', 'oan'], answer: 'in', explanation: '“In” é “eu irei”, futuro de “mont” — raiz própria, diferente do presente e do passado.' },
    ],
  },
  {
    id: 'br-g8',
    level: 'A2.2',
    title: 'Comparativo e superlativo dos adjetivos',
    emoji: '📈',
    summary: 'Dois sufixos simples — “-oc’h” e “-añ” — fazem o comparativo e o superlativo da maioria dos adjetivos.',
    sections: [
      {
        text: 'Para comparar (“mais … que”) o bretão acrescenta “-oc’h” ao adjetivo; para o superlativo (“o mais …”), acrescenta “-añ”. Alguns adjetivos muito comuns, como “mat” (bom) e “drouk” (mau), têm formas irregulares — como “bom, melhor, o melhor” em português.',
        table: {
          head: ['Positivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['bras (grande)', 'brasoc’h', 'brasañ'],
            ['ruz (vermelho)', 'rusoc’h', 'rusañ'],
            ['brav (bonito)', 'bravoc’h', 'bravañ'],
            ['mat (bom) — irregular', 'gwell(oc’h)', 'gwellañ'],
            ['drouk (mau) — irregular', 'droukoc’h, gwashoc’h', 'droukañ, gwashañ'],
          ],
        },
        examples: [
          ['Brasoc’h eo an ti-mañ.', 'Esta casa é maior.'],
          ['Gwellañ gwin eo.', 'É o melhor vinho.'],
        ],
      },
      {
        heading: 'A igualdade: “ken … “',
        text: 'Para dizer que duas coisas são iguais em algum traço (“tão … quanto”), o bretão usa “ken” antes do adjetivo, ou formas fixas como “kement” (tão grande) e “koulz” (tão bom).',
        examples: [['Ken bras eo an eil ti.', 'A outra casa é tão grande.']],
      },
    ],
    pitfalls: [
      'Aplicar “-oc’h”/“-añ” em “mat” e “drouk”: são irregulares (“gwell/gwellañ”, “gwazh/gwashañ”), como “bom, melhor” em português.',
      'Esquecer que consoantes finais podem sofrer provecção (abrandar/endurecer o som) antes de “-oc’h”/“-añ”: “ruz” vira “rusoc’h”, não “ruzoc’h”.',
    ],
    quiz: [
      { question: 'Qual é o comparativo de “mat” (bom)?', options: ['gwell(oc’h)', 'matoc’h', 'mataañ'], answer: 'gwell(oc’h)', explanation: '“Mat” é irregular no comparativo: “gwell(oc’h)”, como “bom → melhor” em português.' },
      { question: 'Como se forma o superlativo regular de um adjetivo bretão?', options: ['com o sufixo “-añ”', 'com o sufixo “-où”', 'repetindo o adjetivo duas vezes'], answer: 'com o sufixo “-añ”', explanation: '“-añ” é o sufixo do superlativo: “bras” (grande) → “brasañ” (o maior).' },
    ],
  },
];
