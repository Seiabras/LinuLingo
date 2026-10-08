import type { GrammarTopic } from '../types';

/** Tópicos de gramática do galego — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
];
