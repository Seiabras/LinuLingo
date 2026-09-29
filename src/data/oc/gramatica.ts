import type { GrammarTopic } from '../types';

/** Tópicos de gramática do occitano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_OC: GrammarTopic[] = [
  {
    id: 'oc-g1',
    level: 'A1.1',
    title: 'Pronúncia: ò, lh, nh — e seis dialetos',
    emoji: '🔤',
    summary: 'O occitano usa o alfabeto latino quase como o português, com alguns sons e acentos próprios — e uma diversidade de dialetos que vale conhecer antes de começar.',
    sections: [
      {
        text: 'O occitano não é uma língua única e uniforme: tem seis grandes dialetos, falados numa área que vai do sul da França aos vales do Piemonte, na Itália, e ao Val d\'Aran, na Espanha — provençal, gascão, lengadocian, lemosin, auvernhat e vivaro-alpino. Este curso segue a norma clássica escrita, baseada no lengadocian (o dialeto central, tomado como referência por ficar no meio dos demais e ser o mais próximo do latim). Pronúncias — e, às vezes, até palavras inteiras — mudam de uma região occitana para outra.',
      },
      {
        heading: 'Letras e sons próprios',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ò', 'aberto, como o "ó" de "nó"', 'nòu [nɔw] (novo/nove)'],
            ['lh', 'como o lh do português', 'filha [ˈfiʎo] (filha)'],
            ['nh', 'como o nh do português', 'montanha [munˈtaɲo] (montanha)'],
            ['ch', 'como o "tch" de "tchau"', 'nuèch [ˈnɥɛtʃ] (noite)'],
          ],
        },
        examples: [
          ['Parlas occitan?', 'Você fala occitano?'],
          ['Bona nuèch a totes.', 'Boa noite a todos.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma pronúncia única para o occitano: os seis dialetos soam — e às vezes se escrevem — de forma bem diferente entre si; as formas deste curso seguem a norma clássica do lengadocian.',
      'Ler "lh" como um l duplo comum: em occitano soa exatamente como o lh do português.',
    ],
    quiz: [
      { question: 'Como soa "lh" em "filha"?', options: ['como o lh do português', 'como um l duplo', 'como j'], answer: 'como o lh do português', explanation: 'O lh occitano soa exatamente como o lh do português.' },
      { question: 'Quantos grandes dialetos tem o occitano?', options: ['seis', 'dois', 'doze'], answer: 'seis', explanation: 'Provençal, gascão, lengadocian, lemosin, auvernhat e vivaro-alpino — este curso usa a norma clássica baseada no lengadocian.' },
    ],
  },
  {
    id: 'oc-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo èsser',
    emoji: '🙋',
    summary: 'Sete pronomes de sujeito, quase sempre dispensáveis porque o verbo já diz quem fala; o verbo «èsser» (ser) conjugado no presente.',
    sections: [
      {
        text: 'Como no português, o pronome de sujeito costuma sumir: «soi de Brasil» já é «(eu) sou do Brasil». Usa-se o pronome sobretudo para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'èsser (presente)'],
          rows: [
            ['ieu', 'eu', 'soi'],
            ['tu', 'você', 'ès'],
            ['el / ela', 'ele / ela', 'es'],
            ['nosautres', 'nós', 'sèm'],
            ['vosautres', 'vocês', 'sètz'],
            ['eles / elas', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ['Soi de Brasil.', 'Sou do Brasil.'],
          ['Vosautres sètz plan amables.', 'Vocês são muito amáveis.'],
        ],
      },
    ],
    pitfalls: ['Traduzir "vosautres" por "vós" arcaico do português: em occitano é o "vocês" comum do dia a dia, sem tom antigo ou cerimonioso.'],
    quiz: [{ question: 'Como se diz "vocês são" em occitano?', options: ['vosautres sètz', 'vosautres ès', 'nosautres sètz'], answer: 'vosautres sètz', explanation: '"Vosautres" é a segunda pessoa do plural, com a forma "sètz" do verbo èsser.' }],
  },
  {
    id: 'oc-g3',
    level: 'A1.2',
    title: 'O artigo, o gênero e os possessivos',
    emoji: '📘',
    summary: 'O occitano tem artigo definido (lo/la/los/las) e indefinido (un/una), além de possessivos que concordam com o substantivo possuído, não com quem possui.',
    sections: [
      {
        table: {
          head: ['', 'Masculino', 'Feminino'],
          rows: [
            ['Definido singular', 'lo filh', 'la filha'],
            ['Definido plural', 'los filhs', 'las filhas'],
            ['Indefinido singular', 'un fraire', 'una sòrre'],
          ],
        },
        text: 'A maioria dos substantivos terminados em consoante ou vogal átona é masculina, e os terminados em -a costumam ser femininos — parecido com o português. O l\' substitui "lo"/"la" antes de palavra começada por vogal, como em francês.',
        examples: [
          ['Ma familha es granda.', 'Minha família é grande.'],
          ['L\'ostal es pichon.', 'A casa é pequena.'],
        ],
      },
      {
        heading: 'Os possessivos',
        text: 'O possessivo concorda com o substantivo que vem depois, não com o gênero de quem fala: «mon paire» (meu pai) mas «ma maire» (minha mãe) — o "meu"/"minha" muda com "pai"/"mãe", não com quem é o dono.',
        table: {
          head: ['Possuidor', 'Masculino', 'Feminino'],
          rows: [
            ['eu', 'mon', 'ma'],
            ['você', 'ton', 'ta'],
            ['ele/ela', 'son', 'sa'],
            ['nós', 'nòstre', 'nòstra'],
            ['vocês', 'vòstre', 'vòstra'],
          ],
        },
        examples: [
          ['Mon paire e ma maire.', 'Meu pai e minha mãe.'],
          ['Ton nom es plan bèl.', 'Seu nome é muito bonito.'],
        ],
      },
    ],
    pitfalls: ['Usar "ma" achando que é sempre "minha" no sentido de "eu sou mulher": o possessivo concorda com a palavra seguinte — "mon paire" é "meu pai", mesmo dito por uma mulher.'],
    quiz: [{ question: 'Como se diz "meu pai" em occitano?', options: ['mon paire', 'ma paire', 'ton paire'], answer: 'mon paire', explanation: '"Paire" é masculino, então o possessivo é "mon", mesmo quando quem fala é mulher.' }],
  },
  {
    id: 'oc-g4',
    level: 'A1.2',
    title: 'Aver e os verbos regulares em -ar',
    emoji: '🧭',
    summary: 'O verbo «aver» (ter) no presente, e o padrão dos verbos regulares em -ar, como «parlar» (falar) e «aimar» (gostar).',
    sections: [
      {
        text: 'Os verbos terminados em -ar seguem, no presente, o padrão -i, -as, -a, -am, -atz, -an.',
        table: {
          head: ['Pronome', 'parlar', 'aimar'],
          rows: [
            ['ieu', 'parli', 'aimi'],
            ['tu', 'parlas', 'aimas'],
            ['el/ela', 'parla', 'aima'],
            ['nosautres', 'parlam', 'aimam'],
            ['vosautres', 'parlatz', 'aimatz'],
            ['eles/elas', 'parlan', 'aiman'],
          ],
        },
        examples: [
          ['Parli occitan.', 'Eu falo occitano.'],
          ['Aimi fòrça lo cafè.', 'Eu gosto muito do café.'],
        ],
      },
      {
        heading: 'O verbo aver',
        text: '«Aver» (ter) é irregular, mas muito usado — funciona como o português "ter", direto, sem a construção invertida de outras línguas vizinhas.',
        table: {
          head: ['Pronome', 'aver (presente)'],
          rows: [
            ['ieu', 'ai'],
            ['tu', 'as'],
            ['el/ela', 'a'],
            ['nosautres', 'avèm'],
            ['vosautres', 'avètz'],
            ['eles/elas', 'an'],
          ],
        },
        examples: [
          ['Ai un fraire e una sòrre.', 'Tenho um irmão e uma irmã.'],
          ['As de fraires?', 'Você tem irmãos?'],
        ],
      },
    ],
    pitfalls: ['Conjugar "aimar" achando que precisa de preposição como no português "gostar DE": em occitano "aimar" é direto — "aimi lo cafè", nunca "aimi de cafè".'],
    quiz: [{ question: 'Como se diz "eu gosto do café" em occitano?', options: ['aimi lo cafè', 'aimi de cafè', 'ai lo cafè'], answer: 'aimi lo cafè', explanation: '"Aimar" é um verbo direto: o que se gosta é objeto direto, sem preposição.' }],
  },
];
