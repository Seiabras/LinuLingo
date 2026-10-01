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
];
