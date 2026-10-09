import type { GrammarTopic } from '../types';

/** Tópicos de gramática do asturiano — A1.1 ao A2.2 (pacote incompleto; falta do B1 ao C1). */
export const GRAMMAR_AST: GrammarTopic[] = [
  {
    id: 'ast-g1',
    level: 'A1.1',
    title: 'Pronúncia: x, ll, ñ, ch e z/c',
    emoji: '🔤',
    summary: 'O asturiano usa o alfabeto latino quase como o português, mas cinco letras/dígrafos têm som próprio: x, ll, ñ, ch e o z/c antes de e/i.',
    sections: [
      {
        text: 'O asturiano não tem sons nasais como o do português (não existe til ~ nem ão): as nasais se escrevem com n ou m. Em compensação, tem sons próprios que o português não marca do mesmo jeito.',
      },
      {
        heading: 'Os sons próprios',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['x', '“ch” francês / “sh” inglês', 'xente [ˈʃente] (gente)'],
            ['ll', 'como o lh do português', 'lleche [ˈʎetʃe] (leite)'],
            ['ch', 'como o tch do português brasileiro', 'ocho [ˈotʃo] (oito)'],
            ['ñ', 'como o nh do português', 'España [esˈpaɲa]'],
            ['z, c (antes de e/i)', '“th” de “think”, como no castelhano', 'ciudá [θiwˈða] (cidade)'],
          ],
        },
        examples: [
          ['Falo asturianu.', 'Eu falo asturiano.'],
          ['La xente d’equí ye mui amable.', 'A gente daqui é muito amável.'],
        ],
      },
    ],
    pitfalls: ['Ler o x como o x do português (em vez de “sh”): xente NÃO é “jente”, é “SHEN-te”.', 'Esperar sons nasais como -ão: o asturiano não tem esse som.'],
    quiz: [
      { question: 'Como soa o x em “xente”?', options: ['“sh” (como em xerife)', '“j” do português', '“ks”'], answer: '“sh” (como em xerife)', explanation: 'O x asturiano soa sempre como “sh”, nunca como o j ou o x do português.' },
      { question: '“Ocho” (oito) tem o mesmo som final de qual palavra brasileira?', options: ['tchau', 'oco', 'oxo'], answer: 'tchau', explanation: 'O ch asturiano soa como o tch do português do Brasil.' },
    ],
  },
  {
    id: 'ast-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ser',
    emoji: '🙋',
    summary: 'Seis pronomes de sujeito, quase sempre dispensáveis porque o verbo já diz quem fala; o verbo “ser” conjugado no presente, e a distinção própria do asturiano entre “ellos” (masculino) e “elles” (feminino).',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito costuma sumir: “soi de Brasil” já é “(eu) sou do Brasil”. Usa-se o pronome só para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'ser (presente)'],
          rows: [
            ['yo', 'eu', 'soi'],
            ['tu', 'você', 'yes'],
            ['elli / ella', 'ele / ela', 'ye'],
            ['nós', 'nós', 'somos'],
            ['vós', 'vocês', 'sois'],
            ['ellos / elles', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ['Soi de Brasil.', 'Sou do Brasil.'],
          ['Vós sois mui amables.', 'Vocês são muito amáveis.'],
        ],
      },
      {
        heading: 'Ellos × elles',
        text: 'O asturiano é uma das poucas línguas românicas que distingue, na terceira pessoa do plural, um pronome masculino (“ellos”) de um feminino (“elles”) — o português usa só “eles” para os dois casos.',
        examples: [
          ['Ellos son de Xixón.', 'Eles são de Gijón. (grupo masculino ou misto)'],
          ['Elles son de Xixón.', 'Elas são de Gijón. (grupo só de mulheres)'],
        ],
      },
    ],
    pitfalls: ['Traduzir “vós” pelo “vós” arcaico do português: em asturiano é o “vocês” normal do dia a dia, não formal nem antigo.', 'Usar “ellos” para um grupo só de mulheres: nesse caso o certo é “elles”.'],
    quiz: [
      { question: 'Como se diz “vocês são” em asturiano?', options: ['vós sois', 'vós yes', 'nós sois'], answer: 'vós sois', explanation: '“Vós” é a segunda pessoa do plural, com a forma “sois” do verbo ser.' },
      { question: 'Um grupo só de mulheres se diz…', options: ['elles', 'ellos', 'ellas'], answer: 'elles', explanation: 'O asturiano usa “elles” para o feminino plural da terceira pessoa, diferente de “ellos” (masculino/misto).' },
    ],
  },
  {
    id: 'ast-g3',
    level: 'A1.2',
    title: 'O xéneru y el plural: -u/-os, -a/-es',
    emoji: '📘',
    summary: 'O masculino termina em -u e faz plural em -os; o feminino termina em -a e faz plural em -es, não em -as — uma das marcas sonoras mais características do asturiano.',
    sections: [
      {
        table: {
          head: ['', 'Singular', 'Plural'],
          rows: [
            ['Masculino', 'amigu, fíu, gatu', 'amigos, fíos, gatos'],
            ['Feminino', 'amiga, fía, casa', 'amigues, fíes, cases'],
          ],
        },
        text: 'A maioria dos substantivos e adjetivos terminados em -u é masculina, e em -a, feminina — igual ao português. Mas repare no plural feminino: onde o português (e o próprio espanhol) diz “-as”, o asturiano central diz “-es”: “hermana” (irmã) vira “hermanes” (irmãs), não “hermanas”.',
        examples: [
          ['Tengo dos hermanes.', 'Tenho duas irmãs.'],
          ['Les mios amigues son de Xixón.', 'As minhas amigas são de Gijón.'],
        ],
      },
      {
        heading: 'O artigo',
        table: {
          head: ['', 'Masculino', 'Feminino'],
          rows: [
            ['Singular', 'el / l’', 'la / l’'],
            ['Plural', 'los', 'les'],
          ],
        },
        text: 'O artigo concorda em género e número, e também perde a vogal antes de palavra começada por vogal: “el amigu” mas “l’amiga”.',
      },
    ],
    pitfalls: ['Fazer o plural feminino em -as por hábito do espanhol/português: no asturiano padrão o certo é -es (hermanes, cases, amigues).'],
    quiz: [{ question: 'Como se diz “as casas” em asturiano padrão?', options: ['les cases', 'les casas', 'los cases'], answer: 'les cases', explanation: 'O feminino plural asturiano troca -a por -es: casa → cases, com o artigo feminino plural “les”.' }],
  },
  {
    id: 'ast-g4',
    level: 'A1.2',
    title: 'Ser × tar × prestar',
    emoji: '🧭',
    summary: 'Ser para o permanente; “tar” (não “estar”) para o lugar e os estados temporários; e o verbo “prestar”, que funciona como o “gustar” do espanhol e do galego: quem gosta vira objeto.',
    sections: [
      {
        text: 'Ser: origem, identidade, característica permanente. “Tar” (forma curta de “estar”, e a mais usada no dia a dia): localização e estados temporários. “Estar” inteiro ainda existe, mas soa mais formal ou influenciado pelo castelhano.',
        table: {
          head: ['Pronome', 'tar (presente)'],
          rows: [
            ['yo', 'toi'],
            ['tu', 'tas'],
            ['elli / ella', 'ta'],
            ['nós', 'tamos'],
            ['vós', 'tais'],
            ['ellos / elles', 'tán'],
          ],
        },
        examples: [
          ['Soi de Xixón.', 'Sou de Gijón. (origem, ser)'],
          ['Toi n’Uviéu güei.', 'Estou em Oviedo hoje. (lugar, tar)'],
        ],
      },
      {
        heading: 'O verbo prestar',
        text: '“Prestar” funciona como o “gustar” do espanhol e do galego: o que se gosta é o sujeito da frase, e a pessoa que gosta leva um pronome (me, te, y…). “Préstame l’asturianu” é, literalmente, “o asturiano agrada-me”.',
        examples: [
          ['Préstame l’asturianu.', 'Eu gosto do asturiano. (literalmente: o asturiano agrada-me)'],
          ['Préstanos Asturies.', 'Nós gostamos das Astúrias.'],
        ],
      },
    ],
    pitfalls: ['Usar “estar” em vez de “tar” achando que é a única forma correta: no asturiano falado e escrito de hoje, “tar” é a forma padrão.', 'Conjugar “prestar” como se a pessoa fosse sujeito (“eu presto o café”): no asturiano a coisa que agrada é o sujeito, “préstame esti café”.'],
    quiz: [{ question: 'Como se diz “eu gosto deste café” em asturiano?', options: ['préstame esti café', 'presto esti café', 'yo presto café'], answer: 'préstame esti café', explanation: 'Em “prestar”, a coisa que agrada é o sujeito: “esti café” concorda com “préstame”.' }],
  },
  {
    id: 'ast-g5',
    level: 'A2.1',
    title: 'O pretérito: cortar, comer, vivir… y ser/dir',
    emoji: '⏳',
    summary: 'As três conjugações regulares do pretérito (-ar, -er, -ir) e uma curiosidade e tanto: “ser” e “dir” (ir) compartilham exatamente as mesmas formas no passado — “foi” pode ser os dois.',
    sections: [
      {
        text: 'O pretérito conta algo que já terminou, como o nosso pretérito perfeito simples (“eu comi”, “ela viveu”). As terminações variam conforme o verbo acaba em -ar, -er ou -ir, mas o padrão de pessoa é parecido nos três.',
        table: {
          head: ['Pronome', 'cortar', 'comer', 'vivir'],
          rows: [
            ['yo', 'corté', 'comí', 'viví'],
            ['tu', 'cortasti', 'comiesti', 'viviesti'],
            ['elli / ella', 'cortó', 'comió', 'vivió'],
            ['nós', 'cortemos', 'comiemos', 'viviemos'],
            ['vós', 'cortastis', 'comiestis', 'viviestis'],
            ['ellos / elles', 'cortaron', 'comieron', 'vivieron'],
          ],
        },
        examples: [
          ['Ayeri comí fabada.', 'Ontem comi fabada (o prato típico das Astúrias, feito de feijão).'],
          ['El mio amigu vivió n’Uviéu dos años.', 'O meu amigo morou em Oviedo dois anos.'],
        ],
      },
      {
        heading: 'Ser y dir: el mesmu pretéritu',
        text: 'Aqui vem a parte curiosa: no pretérito, “ser” e “dir” (ir) usam exatamente as mesmas formas — fui, fuesti, foi, fuemos, fuestis, fueron. Só o contexto da frase diz qual dos dois verbos é. O português e o espanhol têm o mesmo fenômeno com “fui”.',
        table: {
          head: ['Pronome', 'ser / dir (pretérito)'],
          rows: [
            ['yo', 'fui'],
            ['tu', 'fuesti'],
            ['elli / ella', 'foi'],
            ['nós', 'fuemos'],
            ['vós', 'fuestis'],
            ['ellos / elles', 'fueron'],
          ],
        },
        examples: [
          ['Foi al mercáu ayeri.', 'Ele foi ao mercado ontem. (“foi” = dir)'],
          ['Foi mélica venti años.', 'Ela foi médica vinte anos. (“foi” = ser)'],
        ],
      },
    ],
    pitfalls: ['Achar que “foi” só pode ser de um verbo: em asturiano (como em português) “foi” serve tanto para “ser” quanto para “dir” — o sentido da frase desfaz a ambiguidade.', 'Escrever o acento em “cortó”/“comió”/“vivió” nas outras pessoas: só a terceira pessoa do singular leva esse acento nessa conjugação.'],
    quiz: [
      { question: 'Como se diz “ela comeu” em asturiano?', options: ['comió', 'comí', 'comieron'], answer: 'comió', explanation: 'A terceira pessoa do singular do pretérito de “comer” é “comió”.' },
      { question: '“Foi” no pretérito pode ser forma de…', options: ['ser e dir', 'só de ser', 'só de dir'], answer: 'ser e dir', explanation: 'Os dois verbos compartilham a mesma forma no pretérito; o contexto decide o sentido.' },
    ],
  },
  {
    id: 'ast-g6',
    level: 'A2.1',
    title: 'Comparanza: más, menos, meyor, peor',
    emoji: '⚖️',
    summary: '“Más… que” e “menos… que” para comparar; “meyor” e “peor” como formas irregulares de “melhor” e “pior”; e o sufixo “-ísimu” para dizer que algo é “muito” isso, sem precisar de “mui”.',
    sections: [
      {
        text: 'A comparação de superioridade e inferioridade usa “más” (mais) e “menos” (menos) antes do adjetivo, com “que” depois, exatamente como em português.',
        examples: [
          ['Esti pueblu ye más guapu que’l de to.', 'Esta vila é mais bonita que a sua.'],
          ['La casa ye menos cara que l’hotel.', 'A casa é menos cara que o hotel.'],
        ],
      },
      {
        heading: 'Los irregulares: meyor y peor',
        text: '“Meyor” (melhor) e “peor” (pior) já trazem a comparação dentro da palavra — não se diz “más bonu”, diz-se direto “meyor”. Os dois são epicenos: a mesma forma vale para masculino e feminino.',
        examples: [['Esti café ye meyor que l’otru.', 'Este café é melhor que o outro.'], ['El tiempu ta peor güei.', 'O tempo está pior hoje.']],
      },
      {
        heading: 'O superlativo absoluto: -ísimu',
        text: 'Para dizer que algo é “muito” alguma coisa sem usar “mui”, o asturiano prende o sufixo “-ísimu” (feminino “-ísima”) no fim do adjetivo: guapu → guapísimu (muito bonito), llargu → llarguísimu (muito longo).',
        examples: [['La fabada ye guapísima.', 'A fabada está deliciosíssima/ótima.']],
      },
    ],
    pitfalls: ['Dizer “más meyor”: “meyor” já é a forma comparativa, não se junta com “más”.', 'Esquecer que “meyor” e “peor” não mudam entre masculino e feminino.'],
    quiz: [
      { question: 'Como se diz “este café é melhor que o outro”?', options: ['Esti café ye meyor que l’otru.', 'Esti café ye más bonu que l’otru.', 'Esti café ye meyor de l’otru.'], answer: 'Esti café ye meyor que l’otru.', explanation: '“Meyor” já é a forma comparativa de “bonu”, seguida de “que”.' },
      { question: 'O que quer dizer “guapísimu”?', options: ['muito bonito', 'um pouco bonito', 'o mais bonito de todos'], answer: 'muito bonito', explanation: 'O sufixo “-ísimu” forma o superlativo absoluto: “muito” + o adjetivo.' },
    ],
  },
  {
    id: 'ast-g7',
    level: 'A2.2',
    title: 'O futuro simples: cortaré, comeré, viviré',
    emoji: '🔮',
    summary: 'O futuro se forma com o infinitivo inteiro mais as terminações -é, -ás, -á, -emos, -éis, -án — as mesmas para as três conjugações, e até para o irregular “dir”.',
    sections: [
      {
        text: 'Diferente do pretérito (onde -ar, -er e -ir têm formas distintas), o futuro usa sempre o infinitivo completo como base, com as mesmas seis terminações.',
        table: {
          head: ['Pronome', 'cortar', 'comer', 'vivir', 'dir'],
          rows: [
            ['yo', 'cortaré', 'comeré', 'viviré', 'diré'],
            ['tu', 'cortarás', 'comerás', 'vivirás', 'dirás'],
            ['elli / ella', 'cortará', 'comerá', 'vivirá', 'dirá'],
            ['nós', 'cortaremos', 'comeremos', 'viviremos', 'diremos'],
            ['vós', 'cortaréis', 'comeréis', 'viviréis', 'diréis'],
            ['ellos / elles', 'cortarán', 'comerán', 'vivirán', 'dirán'],
          ],
        },
        examples: [
          ['Mañana dirá al mercáu.', 'Amanhã ele irá ao mercado.'],
          ['L’añu que vien, viviremos n’otra casa.', 'No ano que vem, vamos morar em outra casa.'],
        ],
      },
      {
        heading: 'Un verbu regular… nel futuru',
        text: '“Dir” é bem irregular no pretérito (fui, foi, fuemos…), mas no futuro segue a regra geral sem exceção: diré, dirás, dirá… Vale a pena notar o contraste com o pretérito do tópico anterior.',
      },
    ],
    pitfalls: ['Tentar usar “fu-” (do pretérito) para formar o futuro de “dir”: no futuro ele é totalmente regular, a partir do próprio infinitivo “dir”.'],
    quiz: [{ question: 'Como se diz “nós viveremos” em asturiano?', options: ['viviremos', 'vivimos', 'viviemos'], answer: 'viviremos', explanation: '“Viviremos” é o futuro; “viviemos” seria o pretérito.' }],
  },
  {
    id: 'ast-g8',
    level: 'A2.2',
    title: 'Pronomes de complemento: me, te, lu/la, -y',
    emoji: '🔗',
    summary: 'Os pronomes de complemento (me, te, lu/la para “ele/ela”, e “-y” para “a ele/a ela”) normalmente vêm colados DEPOIS do verbo, não antes como no espanhol — exatamente como já se viu em “préstame” e “llámome”.',
    sections: [
      {
        text: 'O asturiano distingue o complemento direto (acusativo: quem recebe a ação) do indireto (dativo: para quem/a quem). Na terceira pessoa do singular, o acusativo muda com o gênero (lu/la), mas o dativo é sempre “-y”, sempre com hífen.',
        table: {
          head: ['Pronome', 'Acusativo (direto)', 'Dativo (indireto)'],
          rows: [
            ['yo', 'me', 'me'],
            ['tu', 'te', 'te'],
            ['elli', 'lu', '-y'],
            ['ella', 'la', '-y'],
          ],
        },
        examples: [
          ['Préstame l’asturianu.', 'Eu gosto do asturiano. (literalmente: o asturiano agrada-me)'],
          ['Llámome Xuan.', 'Eu me chamo Xuan.'],
        ],
      },
      {
        heading: 'Pegado depois do verbo',
        text: 'Nos exemplos típicos do dia a dia, o pronome cola no final do verbo: no imperativo, com hífen antes do “-y” (“da-y pan”, dá-lhe pão); com outros pronomes acusativos, também depois (“lláma lu”, chama-o; “da-y lo”, dá-lho).',
        examples: [
          ['Da-y pan.', 'Dá pão a ele/ela.'],
          ['Lláma lu.', 'Chama-o.'],
          ['Da-y lo.', 'Dá isso a ele/ela.'],
        ],
      },
    ],
    pitfalls: ['Pôr o pronome antes do verbo, como no espanhol “me gusta”: no asturiano do dia a dia, o pronome vem depois, colado (“préstame”, não “me presta”).', 'Esquecer o hífen em “-y”: esse pronome dativo sempre se escreve com hífen antes dele.'],
    quiz: [
      { question: 'Como se diz “dá pão a ele” em asturiano?', options: ['Da-y pan.', 'Y da pan.', 'Pan da-y.'], answer: 'Da-y pan.', explanation: 'O pronome dativo “-y” vem colado depois do verbo, com hífen.' },
      { question: 'Qual pronome substitui “elli” como complemento direto (acusativo)?', options: ['lu', '-y', 'la'], answer: 'lu', explanation: '“Lu” é o acusativo masculino singular; “la” seria o feminino, e “-y” é o dativo dos dois.' },
    ],
  },
  {
    id: 'ast-g9',
    level: 'A2.2',
    title: 'Nel, del, al, pal: la preposición xunta col artículu',
    emoji: '🧩',
    summary: 'Quatro preposições (en, de, a, pa) se fundem obrigatoriamente com o artigo masculino “el”, formando nel, del, al e pal — e “en” também se funde com o feminino “la”, formando “na”.',
    sections: [
      {
        text: 'Diferente do espanhol, onde só “al” e “del” existem, o asturiano funde várias preposições com o artigo, e a fusão é obrigatória, não opcional: não se escreve “en el” nem “a el” por extenso.',
        table: {
          head: ['Preposición + artículu', 'Contracción', 'Exemplo'],
          rows: [
            ['en + el', 'nel', 'Vivo nel pueblu.'],
            ['en + la', 'na', 'Vivo na ciudá.'],
            ['de + el', 'del', 'Vamos del mercáu pa casa.'],
            ['a + el', 'al', 'Vamos al hospital.'],
            ['pa + el', 'pal', 'Compro pan pal almuerzu.'],
          ],
        },
      },
    ],
    pitfalls: ['Escrever “en el” ou “a el” separado, por hábito do espanhol/português: no asturiano a fusão é obrigatória (nel, al).', 'Usar “nel” com palavra feminina: o feminino de “nel” é “na” (en + la).'],
    quiz: [{ question: 'Como se diz “nós vamos ao hospital” em asturiano?', options: ['Vamos al hospital.', 'Vamos a el hospital.', 'Vamos nel hospital.'], answer: 'Vamos al hospital.', explanation: '“A + el” funde sempre em “al”, nunca fica separado.' }],
  },
];
