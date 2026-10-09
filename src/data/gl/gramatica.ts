import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do galego — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Os três tópicos de A2 (pretérito, futuro e imperfecto) seguem as táboas de
 * conxugación do Dicionario da Real Academia Galega (academia.gal/dicionario) e do Volga (Vocabulario
 * Ortográfico da Lingua Galega, da própria RAG), que dão os paradigmas regulares -ar/-er/-ir e as
 * formas irregulares de "ser"/"ir", "estar" e "ter" citadas aqui.
 */
export const GRAMMAR_GL: GrammarTopic[] = [
  {
    id: 'gl-g1',
    level: 'A1.1',
    title: 'Pronúncia: x, ll, ñ e o seseo',
    emoji: '🔤',
    summary: 'O galego usa o alfabeto latino quase como o português, mas quatro letras/dígrafos têm som próprio: x, ll, ñ e o z/c da norma oficial.',
    sections: [
      {
        text: 'O galego não tem sons nasais como o do português (não existe til ~ nem ão): as nasais se escrevem com n ou m, como no castelán. Em compensação, tem quatro sons que o português não marca do mesmo jeito.',
      },
      {
        heading: 'Os quatro sons próprios',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['x', '“ch” francês / “sh” inglês', 'xente [ˈʃente] (gente)'],
            ['ll', 'como o lh do português', 'traballo [tɾaˈβaʎo] (trabalho)'],
            ['ñ', 'como o nh do português', 'España [esˈpaɲa]'],
            ['z, c (antes de e/i)', 'norma oficial: “th” de “think”; seseo (muito comum): “s”', 'grazas [ˈɡɾaθas] ou [ˈɡɾasas]'],
          ],
        },
        examples: [
          ['Falas galego?', 'Você fala galego?'],
          ['A xente de aquí é moi amable.', 'A gente daqui é muito amável.'],
        ],
      },
    ],
    pitfalls: ['Ler o x como o x do português (em vez de “sh”): xente NÃO é “jente”, é “SHEN-te”.', 'Esperar sons nasais como -ão: o galego não tem esse som; anos termina em n mesmo, sem nasalizar como no português.'],
    quiz: [
      { question: 'Como soa o x em “xente”?', options: ['“sh” (como em xerife)', '“j” do português', '“ks”'], answer: '“sh” (como em xerife)', explanation: 'O x galego soa sempre como “sh”, nunca como o j ou o x do português.' },
      { question: '“Traballo” tem o mesmo som de qual palavra portuguesa?', options: ['trabalho', 'trabaio', 'trabaljo'], answer: 'trabalho', explanation: 'O ll galego soa exatamente como o lh do português.' },
    ],
  },
  {
    id: 'gl-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ser',
    emoji: '🙋',
    summary: 'Seis pronomes de sujeito, quase sempre dispensáveis porque o verbo já diz quem fala; o verbo “ser” conjugado no presente.',
    sections: [
      {
        text: 'Como no português, o pronome de sujeito costuma sumir: “son de Vigo” já é “(eu) sou de Vigo”. Usa-se o pronome só para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'ser (presente)'],
          rows: [
            ['eu', 'eu', 'son'],
            ['ti', 'você', 'es'],
            ['el / ela', 'ele / ela', 'é'],
            ['nós', 'nós', 'somos'],
            ['vós', 'vocês', 'sodes'],
            ['eles / elas', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ['Son de Brasil.', 'Sou do Brasil.'],
          ['Vós sodes moi amables.', 'Vocês são muito amáveis.'],
        ],
      },
    ],
    pitfalls: ['Traduzir “vós” por “vós” arcaico do português: em galego é o “vocês” normal do dia a dia, não formal nem antigo.'],
    quiz: [{ question: 'Como se diz “vocês são” em galego?', options: ['vós sodes', 'vós es', 'nós sodes'], answer: 'vós sodes', explanation: '“Vós” é a segunda pessoa do plural, com a forma “sodes” do verbo ser.' }],
  },
  {
    id: 'gl-g3',
    level: 'A1.2',
    title: 'O artigo e o género dos substantivos',
    emoji: '📘',
    summary: 'O galego tem artigo definido (o/a/os/as) e indefinido (un/unha/uns/unhas), concordando em gênero e número com o substantivo, quase igual ao português.',
    sections: [
      {
        table: {
          head: ['', 'Masculino', 'Feminino'],
          rows: [
            ['Definido singular', 'o fillo', 'a filla'],
            ['Definido plural', 'os fillos', 'as fillas'],
            ['Indefinido singular', 'un irmán', 'unha irmá'],
            ['Indefinido plural', 'uns irmáns', 'unhas irmás'],
          ],
        },
        text: 'A maioria dos substantivos terminados em -o é masculina, e em -a, feminina — igual ao português. Há excepções, como “o día” (masculino apesar do -a final) e “a man” (feminino, mão).',
        examples: [
          ['A miña familia é grande.', 'A minha família é grande.'],
          ['Teño unha filla e dous fillos.', 'Tenho uma filha e dois filhos.'],
        ],
      },
    ],
    pitfalls: ['Achar que “o día” é feminino por terminar em -a: é uma exceção masculina, igual em português.'],
    quiz: [{ question: 'Como se diz “uma irmã” em galego?', options: ['unha irmá', 'un irmán', 'unha irmán'], answer: 'unha irmá', explanation: '“Unha” é o indefinido feminino singular, e “irmá” já está no feminino.' }],
  },
  {
    id: 'gl-g4',
    level: 'A1.2',
    title: 'Ser × estar × gustar',
    emoji: '🧭',
    summary: 'Ser para o permanente (origem, identidade), estar para o temporal (lugar, estado), e o verbo “gustar”, que funciona ao contrário do português: quem gosta vira objeto.',
    sections: [
      {
        text: 'Ser: origem, profissão, identidade, característica permanente. Estar: localização e estados temporários. Como en português, os dois verbos existem lado a lado e não se trocam.',
        examples: [
          ['Son de Ourense.', 'Sou de Ourense. (origem, ser)'],
          ['Estou en Santiago hoxe.', 'Estou em Santiago hoje. (lugar, estar)'],
        ],
      },
      {
        heading: 'O verbo gustar',
        text: '“Gustar” funciona como no português de Portugal: o que se gosta é o sujeito da frase, e a pessoa que gosta leva um pronome (me, che, lle…). “Gústame o café” é, literalmente, “o café agrada-me”.',
        examples: [
          ['Gústame o café.', 'Eu gosto do café. (literalmente: o café agrada-me)'],
          ['Gústanos Galicia.', 'Nós gostamos da Galiza.'],
        ],
      },
    ],
    pitfalls: ['Conjugar “gustar” como em português do Brasil (“eu gusto de café”): em galego o café é o sujeito, então o verbo concorda com ele: “gústame o café”, “gústanme os cafés”.'],
    quiz: [{ question: 'Como se diz “eu gosto deste café” em galego?', options: ['gústame este café', 'gusto deste café', 'eu gusto este café'], answer: 'gústame este café', explanation: 'Em “gustar”, a coisa que agrada é o sujeito: “este café” concorda com “gústame”.' }],
  },
  {
    id: 'gl-g5',
    level: 'A2.1',
    title: 'O pretérito: contar o que xa aconteceu',
    emoji: '⏳',
    summary: 'O pretérito (passado simples) do galego segue três padróns regulares, segundo o infinitivo termine en -ar, -er ou -ir, e tem formas irregulares próprias para “ser”/”ir” (que compartillan o mesmo pretérito), “estar” e “ter”.',
    sections: [
      {
        heading: 'Os três padróns regulares',
        table: {
          head: ['Pronome', 'falar (-ar)', 'comer (-er)', 'vivir (-ir)'],
          rows: [
            ['eu', 'falei', 'comín', 'vivín'],
            ['ti', 'falaches', 'comiches', 'viviches'],
            ['el / ela', 'falou', 'comeu', 'viviu'],
            ['nós', 'falamos', 'comemos', 'vivimos'],
            ['vós', 'falastes', 'comestes', 'vivistes'],
            ['eles / elas', 'falaron', 'comeron', 'viviron'],
          ],
        },
        examples: [
          ['Onte falei coa miña nai.', 'Ontem falei com a minha mãe.'],
          ['Comemos polbo no mercado.', 'Comemos polvo no mercado.'],
        ],
      },
      {
        heading: '”Ser” e “ir” compartillan o mesmo pretérito: fun',
        text: 'Como en português (“fui”), o galego usa a MESMA forma para “ser” e “ir” no pretérito: “fun” pode ser “eu fui” (ser) ou “eu fui” (ir), e só o contexto decide. “Estar” e “ter” têm raízes irregulares próprias.',
        table: {
          head: ['Pronome', 'ser/ir', 'estar', 'ter'],
          rows: [
            ['eu', 'fun', 'estiven', 'tiven'],
            ['ti', 'fuches', 'estiveches', 'tiveches'],
            ['el / ela', 'foi', 'estivo', 'tivo'],
            ['nós', 'fomos', 'estivemos', 'tivemos'],
            ['vós', 'fostes', 'estivestes', 'tivestes'],
            ['eles / elas', 'foron', 'estiveron', 'tiveron'],
          ],
        },
        examples: [
          ['Onte fun ao mercado.', 'Ontem fui ao mercado. (ir)'],
          ['Hai dez anos fun profesor.', 'Há dez anos fui professor. (ser)'],
          ['Estiven en Compostela a semana pasada.', 'Estive em Compostela a semana passada.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar formas diferentes para “ser” e “ir” no pretérito: as DÚAS compartillan “fun, fuches, foi, fomos, fostes, foron” — só o contexto distingue.',
      'Confundir “comín” (eu comín) coa primeira persoa do presente “como”: o pretérito regular de -er leva -ín, non -o.',
    ],
    quiz: [
      { question: 'Como se diz “ontem eu fui ao mercado” en galego?', options: ['Onte fun ao mercado.', 'Onte fui ao mercado.', 'Onte era ao mercado.'], answer: 'Onte fun ao mercado.', explanation: 'O pretérito de “ir” (e de “ser”) é “fun” na primeira persoa, igual ao “fui” do português.' },
    ],
  },
  {
    id: 'gl-g6',
    level: 'A2.1',
    title: 'O futuro: falarei, comerei, vivirei',
    emoji: '🔮',
    summary: 'O futuro galego engade as terminacións -ei, -ás, -á, -emos, -edes, -án directamente ao infinitivo, sen trocar a vogal temática (-ar/-er/-ir) — o mesmo padrón para os três grupos de verbos.',
    sections: [
      {
        table: {
          head: ['Pronome', 'falar', 'comer', 'vivir'],
          rows: [
            ['eu', 'falarei', 'comerei', 'vivirei'],
            ['ti', 'falarás', 'comerás', 'vivirás'],
            ['el / ela', 'falará', 'comerá', 'vivirá'],
            ['nós', 'falaremos', 'comeremos', 'viviremos'],
            ['vós', 'falaredes', 'comeredes', 'viviredes'],
            ['eles / elas', 'falarán', 'comerán', 'vivirán'],
          ],
        },
        text: 'Repare que a terminación é sempre a mesma (-ei, -ás, -á, -emos, -edes, -án), só muda a vogal do infinitivo antes dela (falar-, comer-, vivir-). “Ser”, “estar” e “ter” seguen o mesmo padrón regular no futuro: serei, estarei, terei.',
        examples: [
          ['Mañá falarei con Sabela.', 'Amanhã falarei com a Sabela.'],
          ['O ano que vén terei vinte anos.', 'No ano que vem terei vinte anos.'],
        ],
      },
    ],
    pitfalls: ['Procurar unha raíz irregular como no futuro do português (“farei”, “direi”): no galego o futuro é moito máis regular — case todos os verbos, incluídos “facer” e “dicir”, engaden -ei/-ás/-á... directamente ao infinitivo.'],
    quiz: [{ question: 'Como se diz “nós comeremos” en galego?', options: ['comeremos', 'comemos', 'comeríamos'], answer: 'comeremos', explanation: 'O futuro engade -emos á raíz “comer-”: comeremos.' }],
  },
  {
    id: 'gl-g7',
    level: 'A2.2',
    title: 'O imperfecto: como eran as cousas antes',
    emoji: '🕰️',
    summary: 'O imperfecto describe accións habituais ou en curso no pasado (“eu falaba todos os días”), en vez dun feito pontual (iso é o pretérito). Terminación -aba para -ar, -ía para -er/-ir.',
    sections: [
      {
        table: {
          head: ['Pronome', 'falar (-ar)', 'comer/vivir (-er/-ir)'],
          rows: [
            ['eu', 'falaba', 'comía / vivía'],
            ['ti', 'falabas', 'comías / vivías'],
            ['el / ela', 'falaba', 'comía / vivía'],
            ['nós', 'falabamos', 'comiamos / viviamos'],
            ['vós', 'falabades', 'comiades / viviades'],
            ['eles / elas', 'falaban', 'comían / vivían'],
          ],
        },
        text: 'O contraste pretérito × imperfecto é o mesmo que o português: “onte choveu” (pretérito, un feito pontual, dun día concreto) contra “de pequeno chovía moito en Galicia” (imperfecto, unha situación habitual, repetida). “Ser” e “ter” teñen imperfecto regular: era, eras, era...; tiña, tiñas, tiña...',
        examples: [
          ['De pequeno vivía en Lugo.', 'Quando eu era pequeno, vivia em Lugo. (hábito no passado)'],
          ['Onte choveu moito.', 'Ontem choveu muito. (feito pontual, pretérito)'],
          ['Cando era neno, tiña un can.', 'Quando eu era criança, tinha um cachorro.'],
        ],
      },
    ],
    pitfalls: ['Usar o pretérito onde o sentido é de hábito repetido: “de pequeno xogaba no parque” (hábito, imperfecto “xogaba”), non “xoguei” (un único feito pontual).'],
    quiz: [{ question: 'Como se traduce “quando eu era criança, morava em Vigo”?', options: ['Cando era neno, vivía en Vigo.', 'Cando fun neno, vivín en Vigo.', 'Cando son neno, vivo en Vigo.'], answer: 'Cando era neno, vivía en Vigo.', explanation: '”Era” e “vivía” están no imperfecto, porque describen unha situación habitual no pasado, non un feito pontual.' }],
  },
];
