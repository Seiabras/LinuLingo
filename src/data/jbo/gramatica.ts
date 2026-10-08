import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do lojban — por enquanto só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). O lojban é estruturalmente muito diferente do esperanto: não foi feito
 * pra ser fácil de aprender a partir de línguas europeias, e sim pra ter uma gramática formal, sem
 * ambiguidade sintática — mais parecida com uma linguagem de programação do que com o português.
 * Fontes: "The Complete Lojban Language" (CLL), John Woldemar Cowan, The Logical Language Group,
 * 1997 (texto completo em lojban.org/publications/cll/, sobretudo os capítulos de fonologia e
 * morfologia); vlasisku.lojban.org (espelho do dicionário oficial jbovlaste) pra cada estrutura de
 * lugares citada; mw.lojban.org/papri/Learning e a lista oficial de vocabulário para principiantes
 * (tiki.lojban.org/beginners+vocabulary+list) pras partículas básicas (xu, ma, go'i, pu/ca/ba).
 */
export const GRAMMAR_JBO: GrammarTopic[] = [
  {
    id: 'jbo-g1',
    level: 'A1.1',
    title: 'Uma letra, um som só — e sons que o português não tem',
    emoji: '🔤',
    summary: 'O lojban tem 23 letras latinas (todo o alfabeto comum, menos h, q e w) mais o apóstrofo, cada um com exatamente UM som, sempre. O acento tônico é quase sempre na penúltima sílaba.',
    sections: [
      {
        text: 'Como o esperanto, o lojban foi desenhado pra não ter as irregularidades de pronúncia do português: nenhuma letra muda de som dependendo da palavra. Mas atenção às diferenças reais: "c" é sempre "x"/"ch" (nunca "k" nem "s"), "g" é sempre duro mesmo antes de e/i (diferente de "gelo"), e "s" é sempre surdo, como em "sapo" (nunca o "z" que o português faz em "casa"). Veja o alfabeto completo na aba Alfabeto.',
        examples: [
          ['Cukta. Xamgu.', '"c" sempre "x"/"ch": "livro" se lê "CHUK-ta".'],
          ['Gleki.', '"g" sempre duro, mesmo antes de "e": "GLE-ki", nunca "jleki".'],
        ],
      },
      {
        heading: 'O apóstrofo: um som de "h" que só aparece entre vogais',
        text: 'O apóstrofo não é decoração: ele representa um "h" soprado, parecido com o "h" do inglês "hat". Ele só aparece ENTRE duas vogais da mesma palavra, pra elas não se colarem num som só. "ki\'e" (obrigado) se lê "ki-HE", com as duas vogais bem separadas pelo "h".',
        examples: [["Ki'e. Co'o.", 'As duas têm apóstrofo entre vogais: "ki-HE", "co-HO".']],
      },
      {
        heading: 'O acento tônico: quase sempre na penúltima sílaba',
        text: 'A maioria das palavras do lojban é acentuada na penúltima sílaba — é por isso que toda raiz (gismu), que tem só duas sílabas, é sempre acentuada na primeira: "BAR-da" (grande), "PEN-do" (amigo). A letra "y" e as consoantes l/m/n/r quando soam como vogal nunca contam pra essa contagem.',
        examples: [
          ['barda', 'BAR-da (grande)'],
          ['pendo', 'PEN-do (amigo)'],
        ],
      },
    ],
    pitfalls: [
      'Ler "c", "g" ou "s" com o valor que têm em português: no lojban "c" é sempre "x"/"ch", "g" é sempre duro, "s" é sempre surdo.',
      'Esquecer o apóstrofo entre vogais, ou tentar pôr um apóstrofo no começo ou no fim de uma palavra: ele só existe entre duas vogais.',
    ],
    quiz: [
      {
        question: 'Como se lê a letra "c" no lojban?',
        options: ['Sempre "x"/"ch", como em "xícara"', 'Como "k"', 'Como "s"'],
        answer: 'Sempre "x"/"ch", como em "xícara"',
        explanation: 'No lojban, "c" tem sempre o som de "x"/"ch" — nunca "k" nem "s", os dois valores que o português dá a essa letra.',
      },
    ],
  },
  {
    id: 'jbo-g2',
    level: 'A1.1',
    title: 'gismu e selbri: sem substantivo, verbo ou adjetivo fixos',
    emoji: '🧩',
    summary: 'Cada raiz do lojban (gismu) é um predicado (selbri) que serve de verbo, substantivo OU adjetivo dependendo da frase — e nunca precisa de um verbo "ser"/"estar" separado.',
    sections: [
      {
        text: 'O lojban tem cerca de 1300 a 1350 raízes oficiais, chamadas gismu. Cada uma tem exatamente cinco letras, sempre com um padrão fixo (consoante-consoante-vogal-consoante-vogal, como em "prami", ou consoante-vogal-consoante-consoante-vogal, como em "barda"). Diferente do português, uma gismu não é "um substantivo" ou "um verbo" de nascença: ela é um predicado — chamado selbri —, e a frase ao redor dela é que decide se ela funciona mais como um nosso verbo, substantivo ou adjetivo.',
        examples: [
          ['prami', 'CCVCV: ama/amor — funciona como "amar" numa frase, mas é a mesma raiz'],
          ['barda', 'CVCCV: grande/é-grande — funciona como "grande" numa frase'],
        ],
      },
      {
        heading: 'Sem "ser"/"estar": o predicado já diz tudo',
        text: 'Em português, pra dizer que algo é grande, precisamos do verbo "ser": "a casa É grande". No lojban, a raiz "barda" já contém essa ideia — colocar "barda" ao lado de um sujeito já monta a frase completa, sem precisar de nenhum verbo "ser"/"estar" no meio.',
        examples: [
          ['Le zdani cu barda.', 'A casa é grande. (sem nenhuma palavra equivalente a "é")'],
          ['Mi gleki.', 'Eu estou feliz. (sem nenhuma palavra equivalente a "estou")'],
        ],
      },
      {
        heading: 'tanru: duas raízes juntas, sem palavra de ligação',
        text: 'Duas gismu podem se juntar direto, sem nenhuma palavra no meio, pra uma modificar a outra — isso se chama tanru. "mutce barda" junta "mutce" (intenso/muito) com "barda" (grande) pra dar "muito grande", do mesmo jeito que "casa grande" junta duas palavras em português, só que sem precisar de concordância nenhuma.',
        examples: [['Le zdani cu mutce barda.', 'A casa é muito grande. (mutce + barda, lado a lado)']],
      },
    ],
    pitfalls: [
      'Procurar uma palavra pra "ser"/"estar": no lojban ela não existe — o próprio predicado (selbri) já tem esse sentido embutido.',
      'Achar que cada gismu é "só substantivo" ou "só verbo": a mesma raiz muda de função conforme a frase, não tem classe gramatical fixa como em português.',
    ],
    quiz: [
      {
        question: 'Como se diz "a casa é grande" em lojban?',
        options: ['Le zdani cu barda.', 'Le zdani esti barda.', 'Le zdani ye barda.'],
        answer: 'Le zdani cu barda.',
        explanation: 'A raiz "barda" (grande) já contém a ideia de "é grande" — não existe um verbo "ser" separado no lojban.',
      },
    ],
  },
  {
    id: 'jbo-g3',
    level: 'A1.2',
    title: 'bridi: sujeito + cu + predicado, com "lugares" numerados',
    emoji: '🧷',
    summary: 'Uma frase lojban (bridi) é um ou mais sujeitos (sumti) e um predicado (selbri) — "cu" ajuda a marcar onde o sujeito acaba e o predicado começa. Cada predicado tem "lugares" numerados, fixos no dicionário.',
    sections: [
      {
        text: 'Cada gismu vem, no dicionário, com uma lista numerada de "lugares" (x1, x2, x3…) que diz quem faz o quê — é a estrutura de lugares. "klama" (ir/vir) é: x1 vai/vem até o destino x2, saindo da origem x3, pelo caminho x4, usando o meio de transporte x5. Quem diz "mi klama le zarci" preenche x1 (mi, eu) e x2 (le zarci, o mercado) — os outros lugares ficam em aberto, sem precisar ser ditos.',
        table: {
          head: ['Frase', 'x1', 'x2'],
          rows: [
            ['Mi klama le zarci.', 'mi (eu)', 'le zarci (o mercado)'],
            ['Mi prami do.', 'mi (eu)', 'do (você)'],
          ],
        },
        examples: [['Mi pinxe lo djacu.', 'Eu bebo água. (x1 = mi, x2 = lo djacu)']],
      },
      {
        heading: 'le vs. lo: "descrito como" × "que de fato é"',
        text: '"le" introduz algo pela DESCRIÇÃO que se usa pra falar dele, mesmo que a descrição não seja exatamente verdadeira ("le gerku" pode até ser usado, numa brincadeira, pra algo que só parece um cachorro). "lo" introduz algo que de fato tem aquela propriedade. No dia a dia do A1, os dois costumam dar na mesma tradução em português ("o"/"a").',
        examples: [
          ['le zdani', 'a casa (descrita como "casa")'],
          ['lo djacu', 'água (que de fato é água)'],
        ],
      },
      {
        heading: '"cu": onde o sujeito acaba e o predicado começa',
        text: '"cu" não tem tradução própria — só marca a fronteira entre o sujeito e o predicado. Depois de um sujeito curto, como um pronome ("mi", "do"), ele costuma ser dispensado, porque não há risco de confusão. Mas depois de um sujeito mais longo, como um "le…"/"lo…", ele ajuda a deixar claro onde o sujeito termina.',
        examples: [
          ['Mi klama le zarci.', 'Eu vou ao mercado. (sem "cu", porque "mi" é curto)'],
          ['Le gerku cu barda.', 'O cachorro é grande. (com "cu", depois de "le gerku")'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma preposição pra cada lugar (como "para", "de", "com" em português): no lojban é a ORDEM das palavras que diz qual é x1, x2, x3…',
      'Confundir "le" e "lo" com os artigos "o"/"a" do português, que marcam só definido/indefinido: no lojban a escolha é entre descrição subjetiva (le) e o que de fato é (lo).',
    ],
    quiz: [
      {
        question: 'Em "Mi klama le zarci", o que é "le zarci"?',
        options: ['O destino (x2)', 'Quem vai (x1)', 'O meio de transporte (x5)'],
        answer: 'O destino (x2)',
        explanation: '"klama" tem a estrutura x1 vai até x2: "mi" preenche x1 (quem vai) e "le zarci" preenche x2 (o destino, o mercado).',
      },
    ],
  },
  {
    id: 'jbo-g4',
    level: 'A1.2',
    title: 'As partículas: tempo opcional, perguntas e nenhuma palavra pra "sim"/"não"',
    emoji: '⏰',
    summary: 'O tempo é uma partícula separada e opcional (pu/ca/ba), não uma conjugação do predicado. "xu" pergunta sim/não, "ma" pergunta "o quê". E não existe palavra pra "sim" nem "não": repete-se a frase com "go\'i", ou nega-se com "na go\'i".',
    sections: [
      {
        text: 'Diferente do português, o predicado do lojban não muda de forma pelo tempo. O tempo é dito por uma partícula separada, que pode até ser omitida quando o contexto já deixa claro: "pu" (antes/passado), "ca" (agora/presente) e "ba" (depois/futuro).',
        table: {
          head: ['Partícula', 'Tempo', 'Exemplo'],
          rows: [
            ['pu', 'passado', "Mi pu klama le zarci. (eu fui ao mercado)"],
            ['ca', 'presente', 'Mi ca klama le zarci. (eu vou agora ao mercado)'],
            ['ba', 'futuro', 'Mi ba klama le zarci. (eu vou (depois) ao mercado)'],
          ],
        },
      },
      {
        heading: 'Perguntas: "xu" pergunta sim/não, "ma" pergunta "o quê"',
        text: '"xu" no começo transforma a frase inteira numa pergunta de sim ou não, sem mudar mais nada na ordem das palavras. "ma" faz diferente: ele fica exatamente no lugar da informação que falta, no meio da frase.',
        examples: [
          ['Xu do klama le zarci?', 'Você vai ao mercado? (pergunta se a frase toda é verdade)'],
          ['Do klama ma?', 'Você vai aonde? ("ma" no lugar do destino, x2)'],
        ],
      },
      {
        heading: 'Sem "sim"/"não": repetir a frase com "go\'i"',
        text: 'O lojban não tem uma palavra pronta pra "sim" nem pra "não". Pra confirmar, repete-se a última frase dita com "go\'i" (que significa, em resumo, "aquilo que acabei de dizer é verdade"); pra negar, usa-se "na go\'i".',
        examples: [
          ["Xu do klama le zarci? — Go'i.", 'Você vai ao mercado? — Sim. (repete a frase anterior)'],
          ["Xu do klama le zarci? — Na go'i.", 'Você vai ao mercado? — Não.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra isolada pra "sim" ou "não": elas não existem — o lojban sempre repete (ou nega) a frase anterior com "go\'i"/"na go\'i".',
      'Pôr "ma" no começo da frase por hábito (como o "o quê" do português): "ma" fica exatamente no lugar da resposta esperada, não necessariamente no início.',
    ],
    quiz: [
      {
        question: 'Como se responde "sim" a uma pergunta em lojban?',
        options: ["Repetindo a frase com go'i", 'Com uma palavra própria para "sim"', 'Repetindo só o verbo'],
        answer: "Repetindo a frase com go'i",
        explanation: 'O lojban não tem palavra pra "sim": "go\'i" confirma repetindo a frase anterior, e "na go\'i" nega.',
      },
    ],
  },
  {
    id: 'jbo-g5',
    level: 'A1.2',
    title: 'lujvo: juntando pedaços de raízes pra criar palavras novas',
    emoji: '🔧',
    summary: 'Pra ir além das ~1300 raízes, o lojban junta pedaços delas (rafsi) em palavras compostas (lujvo). E tem partículas próprias só pra marcar emoção (atitudinais), sem precisar de uma frase inteira.',
    sections: [
      {
        text: 'Cada gismu tem uma ou mais formas reduzidas, as rafsi, usadas só dentro de palavras compostas — nunca sozinhas. Juntando rafsi de duas (ou mais) gismu, cria-se uma lujvo: uma palavra nova, com um sentido que combina as raízes de origem. Um exemplo real: juntando as rafsi de "mamta" (mãe) e "patfu" (pai) nasce "mampa\'u", que quer dizer "avô materno" (o pai da mãe).',
        examples: [['mamta + patfu → mampa\'u', 'mãe + pai → avô materno (o pai da mãe)']],
      },
      {
        heading: 'Partículas de emoção (atitudinais)',
        text: 'O lojban tem palavras curtas só pra marcar como quem fala se sente sobre o que está dizendo, sem ambiguidade nenhuma: ".ui" é alegria, ".uu" é pena, ".oi" é queixa/dor. Elas podem ficar soltas ou do lado de qualquer palavra da frase — o ponto no começo marca a pausa obrigatória antes de uma palavra que começa com vogal.',
        examples: [
          ['.ui mi klama le zarci!', '(Alegria!) Eu vou ao mercado!'],
          [".uu", '(Que pena.)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar uma rafsi sozinha, como se fosse uma palavra completa: ela só existe dentro de uma lujvo, nunca isolada.',
      'Esperar que uma lujvo sempre traduza palavra por palavra, na mesma ordem do português: o sentido combinado pode ser mais específico do que a soma das partes (como "mampa\'u", que não é só "mãe-pai", e sim "avô materno").',
    ],
    quiz: [
      {
        question: 'O que significa a lujvo "mampa\'u", feita de "mamta" (mãe) + "patfu" (pai)?',
        options: ['Avô materno (o pai da mãe)', 'Os dois pais', 'Mãe e pai ao mesmo tempo'],
        answer: 'Avô materno (o pai da mãe)',
        explanation: '"mampa\'u" junta as rafsi de "mamta" e "patfu" com um sentido específico: o pai da mãe, ou seja, o avô materno.',
      },
    ],
  },
];
