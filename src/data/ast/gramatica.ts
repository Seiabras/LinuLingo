import type { GrammarTopic } from '../types';

/** Tópicos de gramática do asturiano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
];
