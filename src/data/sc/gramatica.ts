import type { GrammarTopic } from '../types';

/** Tópicos de gramática do sardo — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SC: GrammarTopic[] = [
  {
    id: 'sc-g1',
    level: 'A1.1',
    title: 'Pronúncia: a língua que soa mais perto do latim',
    emoji: '🏛️',
    summary: 'O sardo é uma língua própria, não um dialeto do italiano: é uma língua própria, com sons que o italiano perdeu.',
    sections: [
      {
        text: 'Por causa do isolamento da Sardenha, sons que em italiano, espanhol e francês mudaram diante de e/i ficaram parados no tempo em sardo. O caso mais famoso: o latim tinha "centum" (cem) com um k duro. O italiano virou "cento" (som de "tch"), o espanhol "ciento" (som de "s"/"th"), o francês "cent" (sem k algum) — mas o sardo logudorês continua dizendo "chentu", com o k inteiro, quase como no latim original.',
      },
      {
        heading: 'ch, gh antes de e, i: sempre duros',
        table: {
          head: ['Palavra', 'Som', 'Vem do latim'],
          rows: [
            ['chelu', 'k duro: "KE-lu"', 'caelum (céu)'],
            ['chena', 'k duro: "KE-na"', 'cena (jantar)'],
            ['chèrrere', 'k duro: "ker-RE-re"', 'quaerere (querer)'],
          ],
        },
        examples: [
          ['Cheres imparare su sardu?', 'Você quer aprender sardo?'],
          ['Mi praghet su sardu.', 'Eu gosto de sardo.'],
        ],
      },
      {
        heading: 'tz: um som que o português não tem sozinho',
        text: 'O dígrafo "tz" soa como "ts" ou "dz", parecido com o z de "pizza" em português. Aparece em palavras comuns como “gràtzias” (obrigado) e “tzitade” (cidade).',
      },
    ],
    pitfalls: [
      'Achar que o sardo é "um jeito engraçado de falar italiano": linguisticamente é uma língua própria, reconhecida pela Itália em 1999, com sua própria gramática — não um dialeto do italiano.',
      'Ler "ch" antes de e/i como em português (som de "x"): em sardo é sempre um k duro, nunca "tch" nem "x".',
    ],
    quiz: [
      { question: 'Como soa o "ch" em “chelu” (céu)?', options: ['K duro, como em "quilo"', 'Como o "x" do português', 'Como "tch"'], answer: 'K duro, como em "quilo"', explanation: 'O sardo manteve o k duro do latim diante de e/i, onde o italiano, o espanhol e o francês mudaram esse som.' },
      { question: 'O sardo é...', options: ['Uma língua própria, não um dialeto do italiano', 'Um dialeto regional do italiano', 'Uma mistura de italiano e espanhol'], answer: 'Uma língua própria, não um dialeto do italiano', explanation: 'O sardo tem gramática e sons próprios e é reconhecido pela lei italiana de 1999 sobre as minorias linguísticas.' },
    ],
  },
  {
    id: 'sc-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo èssere',
    emoji: '🙋',
    summary: 'Seis pronomes de sujeito, quase sempre dispensáveis porque o verbo já diz quem fala; o verbo “èssere” (ser) conjugado no presente.',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito costuma sumir: “so de Casteddu” já é “(eu) sou de Casteddu”. Usa-se o pronome só para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'èssere (presente)'],
          rows: [
            ['deo', 'eu', 'so'],
            ['tue', 'você', 'ses'],
            ['isse / issa', 'ele / ela', 'est'],
            ['nois', 'nós', 'semus'],
            ['bois', 'vocês', 'seis'],
            ['issos / issas', 'eles / elas', 'sunt'],
          ],
        },
        examples: [
          ['So de Sardigna.', 'Sou da Sardenha.'],
          ['Bois seis bonos amigos.', 'Vocês são bons amigos.'],
        ],
      },
    ],
    pitfalls: ['Traduzir “bois” por um "vós" arcaico do português: em sardo é o "vocês" normal do dia a dia, tal como o galego e o português de Portugal ainda usam.'],
    quiz: [{ question: 'Como se diz "vocês são" em sardo?', options: ['bois seis', 'bois ses', 'nois seis'], answer: 'bois seis', explanation: '“Bois” é a segunda pessoa do plural, com a forma “seis” do verbo èssere.' }],
  },
  {
    id: 'sc-g3',
    level: 'A1.2',
    title: 'O artigo su/sa/sos/sas e o gênero',
    emoji: '📘',
    summary: 'O sardo é a única grande língua românica cujo artigo definido vem do latim "ipse" (não "ille"): su, sa, sos, sas, concordando em gênero e número.',
    sections: [
      {
        table: {
          head: ['', 'Masculino', 'Feminino'],
          rows: [
            ['Singular', 'su fizu', 'sa fiza'],
            ['Plural', 'sos fizos', 'sas fizas'],
          ],
        },
        text: 'A maioria dos substantivos terminados em -u é masculina, e em -a, feminina — igual ao português. O possessivo (meu, teu…) vem depois do substantivo: “sa domo mea” é, literalmente, “a casa minha”.',
        examples: [
          ['Sa familia mea est manna.', 'A minha família é grande.'],
          ['Apo unu fizu e una fiza.', 'Tenho um filho e uma filha.'],
        ],
      },
    ],
    pitfalls: ['Traduzir "su/sa" pensando em "ele/ela": são artigos ("o/a"), não pronomes.'],
    quiz: [{ question: 'Como se diz "a filha" em sardo?', options: ['sa fiza', 'su fizu', 'sos fizos'], answer: 'sa fiza', explanation: '"Sa" é o artigo feminino singular, e "fiza" já está no feminino.' }],
  },
  {
    id: 'sc-g4',
    level: 'A1.2',
    title: 'Èssere × istare × praghere',
    emoji: '🧭',
    summary: 'O sardo, como o português, tem dois verbos "ser/estar" separados — èssere para o permanente, istare para o temporário — e o verbo “praghere” funciona ao contrário do português: quem gosta vira objeto.',
    sections: [
      {
        text: 'Èssere: origem, identidade, característica permanente. Istare: localização e estados temporários (a mesma raiz do português "estar", do latim "stare"). “Comente istas?” (como você está?) usa istare, não èssere.',
        examples: [
          ['So de Nùgoro.', 'Sou de Nuoro. (origem, èssere)'],
          ['Isto in Casteddu oe.', 'Estou em Cagliari hoje. (lugar, istare)'],
        ],
      },
      {
        heading: 'O verbo praghere',
        text: '“Praghere” funciona como o "agradar" do português: o que se gosta é o sujeito da frase, e quem gosta leva um pronome (mi, ti, li…). “Mi praghet su binu” é, literalmente, “o vinho agrada-me”.',
        examples: [
          ['Mi praghet su binu sardu.', 'Eu gosto do vinho sardo. (literalmente: o vinho sardo agrada-me)'],
          ['Nos praghet su casu.', 'Nós gostamos de queijo.'],
        ],
      },
    ],
    pitfalls: ['Conjugar “praghere” como em português (“eu gosto de vinho”): em sardo o vinho é o sujeito, então o verbo concorda com ele: “mi praghet su binu”, “mi praghent sos binos”.'],
    quiz: [{ question: 'Como se diz "eu gosto deste vinho" em sardo?', options: ['mi praghet custu binu', 'praghjo custu binu', 'deo praghet binu'], answer: 'mi praghet custu binu', explanation: 'Em “praghere”, a coisa que agrada é o sujeito: “custu binu” concorda com “praghet”.' }],
  },
  {
    id: 'sc-g5',
    level: 'A2.1',
    title: 'O futuro: àere (presente) + a + infinitivo',
    emoji: '🔮',
    summary: 'O sardo não tem uma terminação própria de futuro: usa o presente do verbo “àere” (ter) seguido de “a” e o infinitivo — “apo a cantare” é, literalmente, “tenho a cantar”.',
    sections: [
      {
        text: 'A mesma construção que já vimos no presente de “àere” (apo, as, at, amus, azis, ant) volta aqui, só que seguida de “a” e o infinitivo do verbo principal. É um futuro perifrástico, como o “vou cantar” do português, só que com “ter” no lugar de “ir”.',
        table: {
          head: ['Pronome', 'àere + a + infinitivo', 'Tradução'],
          rows: [
            ['deo', 'apo a cantare', 'eu vou cantar'],
            ['tue', 'as a cantare', 'você vai cantar'],
            ['isse/issa', 'at a cantare', 'ele/ela vai cantar'],
            ['nois', 'amus a cantare', 'nós vamos cantar'],
            ['bois', 'azis a cantare', 'vocês vão cantar'],
            ['issos', 'ant a cantare', 'eles vão cantar'],
          ],
        },
        examples: [
          ['Cras apo a traballare.', 'Amanhã eu vou trabalhar.'],
          ['Ite as a fàghere oe sero?', 'O que você vai fazer hoje à noite?'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “a” entre o verbo àere e o infinitivo: não é “apo cantare”, é “apo a cantare”.'],
    quiz: [{ question: 'Como se diz "nós vamos trabalhar" em sardo?', options: ['amus a traballare', 'traballamus a amus', 'amus traballare'], answer: 'amus a traballare', explanation: 'O futuro sardo é àere no presente + “a” + infinitivo: “amus a traballare”.' }],
  },
  {
    id: 'sc-g6',
    level: 'A2.1',
    title: 'Comparativo e superlativo com “prus”',
    emoji: '📊',
    summary: 'O comparativo sardo usa “prus” (mais, do latim plus) antes do adjetivo, com “de” pro segundo termo; o superlativo junta o artigo: “su/sa prus”.',
    sections: [
      {
        text: '“Prus” funciona como o “mais” do português. Pra dizer “mais … do que”, usa-se “prus … de”. O antônimo é “mancu” (menos).',
        examples: [
          ['Sa domo mea est prus manna de sa tua.', 'A minha casa é maior que a sua.'],
          ['Sa Sardigna est sa segunda isula italiana prus manna.', 'A Sardenha é a segunda maior ilha italiana. (superlativo, exemplo real do Wikcionário)'],
        ],
      },
      {
        heading: 'O superlativo: artigo + prus',
        text: 'Juntando o artigo (su/sa/sos/sas) antes de “prus” e o adjetivo, formamos o superlativo: “o/a mais …”.',
        examples: [
          ['Isse est su prus artu de sa famìlia.', 'Ele é o mais alto da família.'],
          ['Custa est sa prus bella tzitade.', 'Esta é a cidade mais bonita.'],
        ],
      },
    ],
    pitfalls: ['Traduzir “prus” só como “mais um”: aqui é o “mais” comparativo (do latim plus), não o numeral.'],
    quiz: [{ question: 'Como se diz "a mais bonita cidade" em sardo?', options: ['sa prus bella tzitade', 'sa tzitade prus', 'prus sa bella tzitade'], answer: 'sa prus bella tzitade', explanation: 'O superlativo junta o artigo (sa) antes de “prus” e o adjetivo.' }],
  },
  {
    id: 'sc-g7',
    level: 'A2.2',
    title: 'O verbo modal pòdere',
    emoji: '💪',
    summary: '“Pòdere” (poder, conseguir) é o verbo modal sardo, seguido de infinitivo — presente irregular: potto, podes, podet, podimus, podides, podent.',
    sections: [
      {
        table: {
          head: ['Pronome', 'pòdere (presente)'],
          rows: [
            ['deo', 'potto'],
            ['tue', 'podes'],
            ['isse/issa', 'podet'],
            ['nois', 'podimus'],
            ['bois', 'podides'],
            ['issos', 'podent'],
          ],
        },
        examples: [
          ['Potto faeddare sardu.', 'Eu posso/consigo falar sardo.'],
          ['No podes bènnere oe?', 'Você não pode vir hoje?'],
        ],
      },
    ],
    pitfalls: ['Esperar a primeira pessoa regular (“podo”): o presente de pòdere é irregular na primeira pessoa, “potto”.'],
    quiz: [{ question: 'Como se diz "eu posso" em sardo?', options: ['potto', 'podo', 'poto'], answer: 'potto', explanation: 'A primeira pessoa do presente de pòdere é irregular: “potto”, não “podo”.' }],
  },
];
