import type { GrammarTopic } from '../types';

/** Tópicos de gramática do judeu-espanhol — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LAD: GrammarTopic[] = [
  {
    id: 'lad-g1',
    level: 'A1.1',
    title: 'A grafia fonética: k, sh, j, dj, ny',
    emoji: '🔤',
    summary: 'A grafia latina da Aki Yerushalayim escreve cada som com uma letra só, sem as regras do espanhol moderno.',
    sections: [
      {
        text: 'O ladino também se escreve em letras hebraicas (a escrita rashi e a solitreo, nos textos antigos). Na grafia latina de hoje, o que soa k se escreve k, o que soa s se escreve s, e os sons que o espanhol moderno perdeu têm letras próprias.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['k', 'k', 'kaza, kezo'],
            ['s', 's', 'sivdad, sinko'],
            ['sh', '“x” de “xícara”', 'sesh (seis)'],
            ['j', '“j” de “já”', 'mujer'],
            ['dj', '“dj”', 'djueves'],
            ['ny', '“nh”', 'anyo (ano)'],
          ],
        },
        examples: [
          ['Tengo sesh amigos.', 'Tenho seis amigos.'],
          ['Oy es djueves.', 'Hoje é quinta-feira.'],
        ],
      },
    ],
    pitfalls: ['Escrever como em espanhol (“casa”, “queso”): em ladino é “kaza”, “kezo”.', 'Ler o “j” como o j espanhol (som de “r” forte): em ladino ele soa como em português.'],
    quiz: [
      { question: 'Como se escreve “casa” em ladino?', options: ['kaza', 'casa', 'kasa'], answer: 'kaza', explanation: 'O som k se escreve k, e o s sonoro entre vogais (som de z) se escreve z.' },
      { question: 'Como soa o “sh” de “sesh”?', options: ['como o x de “xícara”', 'como “s”', 'como “tch”'], answer: 'como o x de “xícara”', explanation: '“Sh” é o som que o espanhol moderno perdeu e que o ladino guardou.' },
    ],
  },
  {
    id: 'lad-g2',
    level: 'A1.1',
    title: 'Os pronomes e os verbos ser e estar',
    emoji: '🙋',
    summary: 'Pronomes com formas próprias (mozotros, vozotros) e o verbo “ser” com “so” e “sos”.',
    sections: [
      {
        text: 'Como em português, há dois verbos: “ser” para origem e identidade, “estar” para lugar e estado. A 1ª pessoa de “ser” é “so” (e não “soy”).',
        table: {
          head: ['Pronome', 'Tradução', 'estar'],
          rows: [
            ['yo', 'eu', 'esto'],
            ['tu', 'você', 'estas'],
            ['el / eya', 'ele / ela', 'esta'],
            ['mozotros', 'nós', 'estamos'],
            ['vozotros', 'vocês', 'estash'],
            ['eyos / eyas', 'eles / elas', 'estan'],
          ],
        },
        examples: [
          ['So de São Paulo.', 'Sou de São Paulo.'],
          ['Esto bien, grasias.', 'Estou bem, obrigado.'],
        ],
      },
    ],
    pitfalls: ['Dizer “nosotros” como no espanhol moderno: em ladino é “mozotros”.', 'Usar “soy”: em ladino é “so”.'],
    quiz: [
      { question: 'Como se diz “nós” em ladino?', options: ['mozotros', 'nosotros', 'nos'], answer: 'mozotros', explanation: 'O ladino usa “mozotros” (e “mozotras” no feminino).' },
      { question: 'Complete: “___ de Izmir.” (eu sou)', options: ['So', 'Soy', 'Esto'], answer: 'So', explanation: 'A 1ª pessoa de “ser” é “so”.' },
    ],
  },
  {
    id: 'lad-g3',
    level: 'A1.2',
    title: 'Artigos, possessivos e o plural',
    emoji: '👪',
    summary: 'El, la, los, las; possessivos antes do nome; plural com -s.',
    sections: [
      {
        text: 'O artigo e o plural funcionam como no espanhol: el ermano → los ermanos, la kaza → las kazas. O possessivo vai antes do nome, sem artigo: “mi madre”, “tu padre”.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'el ermano', 'los ermanos'],
            ['feminino', 'la ermana', 'las ermanas'],
            ['meu / minha', 'mi ermano', 'mis ermanos'],
          ],
        },
        examples: [
          ['Mi famiya es grande.', 'A minha família é grande.'],
          ['Tengo dos ermanos.', 'Tenho dois irmãos.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como em português (“o meu irmão”): em ladino é só “mi ermano”.'],
    quiz: [
      { question: 'Qual é o plural de “la kaza”?', options: ['las kazas', 'los kazas', 'la kazas'], answer: 'las kazas', explanation: 'Artigo feminino plural “las” + plural com -s.' },
      { question: 'Como se diz “minha mãe”?', options: ['mi madre', 'la mi madre', 'mia madre'], answer: 'mi madre', explanation: 'O possessivo vem antes do nome, sem artigo.' },
    ],
  },
  {
    id: 'lad-g4',
    level: 'A1.2',
    title: 'Tener, komer e bever no presente',
    emoji: '🍞',
    summary: 'Três verbos do dia a dia no presente, com as terminações do ladino.',
    sections: [
      {
        text: 'As terminações do presente lembram as do espanhol, mas a 2ª pessoa do plural termina em -sh (vozotros komesh, bevesh), como no espanhol antigo que os sefarditas levaram.',
        table: {
          head: ['Pronome', 'tener', 'komer'],
          rows: [
            ['yo', 'tengo', 'komo'],
            ['tu', 'tienes', 'komes'],
            ['el / eya', 'tiene', 'kome'],
            ['mozotros', 'tenemos', 'komemos'],
            ['vozotros', 'tenesh', 'komesh'],
            ['eyos / eyas', 'tienen', 'komen'],
          ],
        },
        examples: [
          ['Tengo un ermano.', 'Tenho um irmão.'],
          ['Komo pan i kezo.', 'Eu como pão e queijo.'],
        ],
      },
    ],
    pitfalls: ['Escrever “tengo” com g e “komo” com c: o ladino usa k para o som de k.'],
    quiz: [
      { question: 'Como se diz “eu como”?', options: ['komo', 'como', 'kome'], answer: 'komo', explanation: 'Com k: “komo”.' },
      { question: 'Complete: “Mozotros ___ dos ermanos.”', options: ['tenemos', 'tengo', 'tienen'], answer: 'tenemos', explanation: '“Tenemos” é “nós temos”.' },
    ],
  },
];
