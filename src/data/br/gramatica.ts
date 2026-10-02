import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do bretão — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fontes: "Breton language", "Breton grammar" e "Breton orthography", Wikipédia em inglês;
 * Wiktionary em inglês (entradas "bezañ", "kaout", "gant", "ur", "ket", "ha", "tad", "kador", "ki",
 * "taol", "dour" — a seção "Breton" de cada uma); Wikibooks "Breton", nível 1.
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
];
