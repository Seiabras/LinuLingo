import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática da interlíngua — por enquanto só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). A interlíngua foi desenhada pela IALA (International Auxiliary
 * Language Association) para ser a língua construída com a gramática mais enxuta possível SEM
 * perder a leitura natural de uma língua românica: artigo único e invariável, substantivo sem
 * gênero gramatical, adjetivo sempre na mesma forma, verbo sem conjugação por pessoa. Fontes:
 * Alexander Gode e Hugh E. Blair, "Interlingua: A Grammar of the International Language" (IALA,
 * 1951) — resumo oficial reproduzido no fim de B. C. Sexton, "English-Interlingua: A Basic
 * Vocabulary" (Union Mundial pro Interlingua, reimpressão 2019); Wikipédia, "Interlingua grammar" e
 * "Interlingua phonology".
 */
export const GRAMMAR_IA: GrammarTopic[] = [
  {
    id: 'ia-g1',
    level: 'A1.1',
    title: 'Pronúncia fluida e o acento na vogal antes da última consoante',
    emoji: '🔤',
    summary: 'A interlíngua não trava um som único por letra como o esperanto — a própria gramática oficial admite variação entre falantes. Mas o acento tônico segue uma regra: cai na vogal antes da ÚLTIMA consoante da palavra (ignorando o -s do plural).',
    sections: [
      {
        text: 'A ortografia usa as 26 letras do alfabeto latino, sem nenhum acento ou diacrítico — diferente do esperanto, que criou 6 letras próprias. Algumas letras têm comportamento especial: "c" é "ts" antes de e/i/y (como em "centro") e "k" nos outros casos; "g" é sempre duro, mesmo antes de e/i (diferente do português "gelo"); "qu" é sempre "kw", nunca "k" com u mudo como em português "que". Veja o alfabeto completo na aba Alfabeto.',
        examples: [
          ['Centro.', '"c" antes de "e" soa "ts": "TSEN-tro".'],
          ['Grande. Gigante.', '"g" sempre duro, mesmo antes de "i" — diferente de "gigante" em português.'],
        ],
      },
      {
        heading: 'O acento: a vogal antes da última consoante',
        text: 'A regra geral (Gode & Blair, §16): o acento cai na vogal que vem antes da última consoante da palavra, ignorando um -s final de plural. Em "lingua" (língua), a última consoante é o "ng", então o acento cai no "i": lin-GUA. Em "esser" (ser/estar), a última consoante é o segundo "s": es-SER. Quando a palavra termina só em vogais, o acento cai na primeira vogal: VI-a (via).',
        examples: [
          ['lingua', 'lin-GUA'],
          ['esser', 'es-SER (ser/estar)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um som fixo por letra, como no esperanto: a interlíngua é mais "fluida" — a pronúncia muda um pouco entre falantes de línguas de origem diferentes, e a própria gramática oficial aceita essa variação.',
      'Ler "qu" como o português, com o "u" mudo ("que" = "ke"): na interlíngua "qu" é sempre "kw", como no espanhol "cuatro".',
    ],
    quiz: [
      {
        question: 'Onde fica o acento de "lingua" (língua)?',
        options: ['lin-GUA', 'LIN-gua', 'lin-gu-A'],
        answer: 'lin-GUA',
        explanation: 'A regra geral é: o acento cai na vogal antes da última consoante da palavra. Em "lingua", a última consoante é o "ng", então o acento cai no "i" antes dele: lin-GUA.',
      },
    ],
  },
  {
    id: 'ia-g2',
    level: 'A1.1',
    title: 'Substantivos sem gênero, artigos "le"/"un" e plural -s/-es',
    emoji: '📘',
    summary: 'A interlíngua não tem gênero gramatical: não existe "o"/"a" como no português. O artigo definido é sempre "le" (singular E plural) e o indefinido é sempre "un" — nenhum dos dois muda de forma.',
    sections: [
      {
        text: 'O artigo definido "le" serve pra "o", "a", "os" e "as", sempre igual. O indefinido "un" serve pra "um" e "uma". Nenhum dos dois concorda em gênero ou número com o substantivo — algo bem diferente do português, em que "o"/"a"/"os"/"as" mudam o tempo todo.',
        table: {
          head: ['Interlíngua', 'Tradução'],
          rows: [
            ['un domo', 'uma casa'],
            ['le domo', 'a casa'],
            ['le domos', 'as casas'],
          ],
        },
        examples: [
          ['Le can es grande.', 'O cachorro é grande.'],
          ['Le cattos es parve.', 'Os gatos são pequenos.'],
        ],
      },
      {
        heading: 'O plural: -s depois de vogal, -es depois de consoante',
        text: 'Se a palavra termina em vogal, o plural é só -s: "catto" (gato) → "cattos". Se termina em consoante, o plural é -es: "can" (cachorro) → "canes". É uma regra bem regular, parecida com a do português (casa/casas, mulher/mulheres), só que sem exceção.',
        examples: [
          ['un amico, duo amicos', 'um amigo, dois amigos'],
          ['un fratre, duo fratres', 'um irmão, dois irmãos'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma feminina do artigo, como "a"/"as" em português: "le" e "un" nunca mudam, nem por gênero nem por número.',
      'Usar -es depois de vogal: o plural de "domo" é "domos", não "domoes" — -es é só depois de consoante.',
    ],
    quiz: [
      {
        question: 'Como fica "os amigos" em interlíngua?',
        options: ['le amicos', 'le amico', 'les amicos'],
        answer: 'le amicos',
        explanation: 'O artigo "le" não muda nunca: serve pra singular e plural. Só o substantivo recebe o -s do plural: "amico" → "amicos".',
      },
    ],
  },
  {
    id: 'ia-g3',
    level: 'A1.2',
    title: 'Verbos sem conjugação por pessoa: presente, passado e futuro',
    emoji: '⏰',
    summary: 'O verbo da interlíngua NUNCA muda por pessoa — "io parla", "tu parla", "ille parla" usam todos a mesma forma. Só o TEMPO muda a terminação: o presente tira o -r do infinitivo, o passado troca por -va, e o futuro acrescenta -ra.',
    sections: [
      {
        text: 'Todo infinitivo termina em -ar, -er ou -ir. O PRESENTE se forma tirando só o -r final: "parlar" (falar) → "parla". Essa mesma forma serve pra todas as pessoas — "io parla", "nos parla", "illes parla" são todos "parla", sem exceção. Por isso o pronome de sujeito é sempre obrigatório.',
        table: {
          head: ['Pronome', 'parlar (falar)', 'mangiar (comer)'],
          rows: [
            ['io/tu/ille/nos/vos/illes', 'parla (presente)', 'mangia'],
            ['io/tu/ille/nos/vos/illes', 'parlava (passado)', 'mangiava'],
            ['io/tu/ille/nos/vos/illes', 'parlara (futuro)', 'mangiara'],
          ],
        },
        examples: [
          ['Io parla, tu parla, ille parla — totos parla.', 'Eu falo, você fala, ele fala — todos "parla".'],
          ['Heri io mangiava. Hodie io mangia. Deman io mangiara.', 'Ontem eu comi. Hoje eu como. Amanhã eu comerei.'],
        ],
      },
      {
        heading: 'Passado (-va) e futuro (-ra)',
        text: 'O PASSADO se forma tirando o -r do infinitivo e acrescentando -va: "mangiar" (comer) → "mangiava" (comeu/comia). O FUTURO acrescenta -ra, com acento na própria terminação: "mangiar" → "mangiara" (vai comer). Também existe um futuro "vou fazer" com o verbo "vader" (ir): "io va mangiar" (eu vou comer) — bem parecido com o português.',
        examples: [
          ['Illa parlava Interlingua.', 'Ela falava/falou interlíngua.'],
          ['Nos va viagiar deman.', 'Nós vamos viajar amanhã.'],
        ],
      },
      {
        heading: 'Condicional (-rea)',
        text: 'Há ainda um quinto tempo, o CONDICIONAL: tira-se o -r do infinitivo e acrescenta-se -rea. "Parlar" (falar) → "parlarea" (falaria). Como os outros tempos, não muda por pessoa.',
        examples: [['Io parlarea plus si io habeva tempore.', 'Eu falaria mais se eu tivesse tempo.']],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação por pessoa, como em português ("eu falo", "tu falas", "ele fala"): na interlíngua é sempre a MESMA forma — só o pronome muda.',
      'Confundir "novem" (nove, o número 9) com "nove" (novo): são palavras bem parecidas, mas diferentes — "io ha novem annos" (eu tenho nove anos) não é "io ha nove annos".',
    ],
    quiz: [
      {
        question: 'Como se diz "nós comemos" (no presente) em interlíngua?',
        options: ['Nos mangia.', 'Nos mangiava.', 'Nos mangiara.'],
        answer: 'Nos mangia.',
        explanation: 'O presente tira o -r do infinitivo "mangiar", virando "mangia" — a mesma forma serve pra qualquer pessoa, inclusive "nos" (nós).',
      },
    ],
  },
  {
    id: 'ia-g4',
    level: 'A1.2',
    title: '"Tu" × "vos": a única distinção de registro, e os possessivos',
    emoji: '🤝',
    summary: '"Tu" é informal e só serve pro singular (amigos, crianças). "Vos" é o formal — e também o plural, sem diferença de forma. Os possessivos (mi, tu, su, nostre, vostre, lor) seguem o mesmo padrão dos pronomes, sem concordar com o substantivo.',
    sections: [
      {
        text: 'Diferente do esperanto (que só tem "vi" pra tudo), a interlíngua TEM uma distinção de registro: "tu" é informal, usado com amigos, crianças e em poesia; "vos" é a forma "formal" de se dirigir a alguém, e também serve pro plural ("vocês"), sem mudar de forma nos dois casos.',
        table: {
          head: ['Sujeito', 'Objeto', 'Possessivo'],
          rows: [
            ['io (eu)', 'me', 'mi (meu/minha)'],
            ['tu (você, informal)', 'te', 'tu (teu/tua)'],
            ['ille/illa (ele/ela)', 'le/la', 'su (dele/dela — a MESMA forma pros dois)'],
            ['nos (nós)', 'nos', 'nostre (nosso/nossa)'],
            ['vos (você formal/vocês)', 'vos', 'vostre (seu/sua, de vos)'],
            ['illes/illas (eles/elas)', 'les/las', 'lor (deles/delas)'],
          ],
        },
        examples: [
          ['Que es tu nomine?', 'Qual é o seu nome? (informal, com um amigo)'],
          ['Qual es vostre nomine?', 'Qual é o seu nome? (formal)'],
        ],
      },
      {
        heading: '"su" não distingue gênero',
        text: 'Repare que "su" serve tanto pra "dele" quanto pra "dela" — a interlíngua não distingue gênero nem no possessivo de terceira pessoa. "Su catto" pode ser "o gato dele" ou "o gato dela": só o contexto diz qual.',
        examples: [['Ille ama su familia. Illa ama su familia.', 'Ele ama a família dele. Ela ama a família dela.']],
      },
      {
        heading: '"illo": o pronome neutro, pra coisas',
        text: 'Além de "ille" (ele) e "illa" (ela), existe "illo", o pronome neutro pra coisas e ideias — o equivalente a "isso/ele" sem gênero. "Illo es bon" é "isso é bom".',
        examples: [['Illo es bon.', 'Isso é bom.']],
      },
      {
        heading: 'Perguntas de sim/não: a partícula opcional "esque"',
        text: 'A interlíngua tem 4 jeitos de perguntar algo que se responde com sim/não: inverter verbo e sujeito ("Ha tu un can?"), só mudar a entonação sem mexer na ordem ("Tu ha un can?"), ou pôr a partícula "esque" no começo da frase — bem parecida com o "est-ce que" do francês.',
        examples: [['Esque tu es Ana?', 'Você é a Ana? (= "Tu es Ana?", com entonação de pergunta)']],
      },
    ],
    pitfalls: [
      'Usar "tu" com um desconhecido ou numa situação formal: aí o certo é "vos", do mesmo jeito que o português usa "você"/"o senhor" em vez de "tu" nessas situações.',
      'Esperar um possessivo diferente pra "dele" e "dela": os dois usam "su", sem exceção.',
      'Achar que "esque" é obrigatório: é só uma das 4 formas de perguntar — inverter a ordem ou só mudar a entonação também funciona.',
    ],
    quiz: [
      {
        question: 'Qual pronome usar para falar formalmente com um desconhecido?',
        options: ['vos', 'tu', 'ille'],
        answer: 'vos',
        explanation: '"Tu" é informal (amigos, crianças); "vos" é a forma formal — e também serve pro plural "vocês", sem mudar de forma.',
      },
    ],
  },
  {
    id: 'ia-g5',
    level: 'A1.2',
    title: 'Os três verbos irregulares e o adjetivo que nunca muda',
    emoji: '🧩',
    summary: 'A interlíngua tem só TRÊS verbos irregulares em toda a língua: esser (ser/estar), haber (ter) e vader (ir). Fora eles, tudo segue a regra -ar/-er/-ir. E o adjetivo nunca concorda com o substantivo: nem em gênero, nem em número.',
    sections: [
      {
        text: 'De todos os verbos da interlíngua, só três fogem da regra -ar/-er/-ir: "esser" (ser/estar), cujo presente é "es" (não "esse"); "haber" (ter), cujo presente é "ha" (não "habe"); e "vader" (ir), cujo presente é "va" (não "vade"). Fora esses três, toda a conjugação é 100% previsível.',
        table: {
          head: ['Infinitivo', 'Presente regular esperado', 'Presente REAL (irregular)'],
          rows: [
            ['esser (ser/estar)', 'esse', 'es'],
            ['haber (ter)', 'habe', 'ha'],
            ['vader (ir)', 'vade', 'va'],
          ],
        },
        examples: [
          ['Io es, io ha, io va.', 'Eu sou/estou, eu tenho, eu vou.'],
          ['Nos ha un grande familia.', 'Nós temos uma família grande.'],
        ],
      },
      {
        heading: 'O adjetivo nunca muda de forma',
        text: 'O adjetivo da interlíngua é sempre igual, não importa o gênero nem o número do substantivo que ele descreve — bem diferente do português ("bom"/"boa"/"bons"/"boas"). Geralmente vem DEPOIS do substantivo, mas a ordem é livre.',
        examples: [
          ['Le domo es grande. Le domos es grande.', 'A casa é grande. As casas são grandes. (o adjetivo nunca muda)'],
          ['Un belle die.', 'Um dia bonito.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar conjugar "esser", "haber" e "vader" pela regra normal: eles são as três únicas exceções da língua — memorizar "es", "ha", "va" resolve.',
      'Flexionar o adjetivo por gênero ou número, como em português: "grande" é sempre "grande", mesmo com "le domos" (as casas).',
    ],
    quiz: [
      {
        question: 'Quais são os três verbos irregulares da interlíngua?',
        options: ['esser, haber, vader', 'parlar, mangiar, viver', 'esser, parlar, biber'],
        answer: 'esser, haber, vader',
        explanation: 'Esser (es), haber (ha) e vader (va) são os únicos três verbos que não seguem a regra normal de tirar o -r do infinitivo para formar o presente.',
      },
    ],
  },
];
