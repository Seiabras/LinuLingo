import type { GrammarTopic } from '../types';

/**
 * Gramática do aleúte — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [WIKI] Wikipédia em
 * inglês, «Aleut language» (consultada em 10/10/2026): as tabelas do presente (-ku-) e do presente
 * negativo (-lakaĝ-), a posse (“tayaĝum adaa”), os pronomes (ting, txin), a ordem sujeito-objeto-verbo,
 * a comparação com as línguas esquimós e a tabela dos números; [OMNI] (frases). Todos os exemplos são
 * frases das fontes, com a tradução delas.
 */
export const GRAMMAR_ALE: GrammarTopic[] = [
  {
    id: 'ale-g1',
    level: 'A1.1',
    title: 'O presente: -ku-',
    emoji: '🙋',
    summary: 'No presente, o verbo leva -ku-. “Ele, ela”: -kux̂. “Eu”, em Atka: -kuq (no leste, -kuqing).',
    sections: [
      {
        text: 'O presente do aleúte se faz com -ku- depois da raiz do verbo, e o fim muda com a pessoa. Nas formas de Atka, “eu” é -kuq, “você” é -kux̂t e “ele, ela” é -kux̂. No aleúte oriental, “eu” é -kuqing e “você” é -kux̂ txin.',
        table: {
          head: ['Pessoa', 'Atka', 'Leste'],
          rows: [
            ['eu', '-kuq', '-kuqing'],
            ['você', '-kux̂t', '-kux̂ txin'],
            ['ele, ela', '-kux̂', '-kux̂'],
          ],
        },
        examples: [
          ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
          ['Txin yaxtakuq.', 'Eu te amo.'],
          ['Linu asax̂takuq.', 'Meu nome é Linu.'],
        ],
      },
      {
        text: 'Para negar no presente, o verbo leva -lakaĝ- no lugar de -ku-: em Atka, “eu não” é -lakaq, e “ele, ela não”, -lakax̂.',
        table: {
          head: ['Pessoa', 'Atka', 'Leste'],
          rows: [
            ['eu não', '-lakaq', '-lakaqing'],
            ['ele, ela não', '-lakax̂', '-lakax̂'],
          ],
        },
      },
    ],
    pitfalls: ['Usar -kux̂ para “eu”: “awakux̂” é “ele, ela trabalha”; o “eu” de Atka termina em -kuq.'],
    quiz: [
      { question: 'O que quer dizer “Tayaĝux̂ awakux̂”?', options: ['O homem está trabalhando.', 'Eu estou trabalhando.', 'O homem não trabalha.'], answer: 'O homem está trabalhando.', explanation: '-kux̂ é “ele, ela”, no presente.' },
      { question: 'Em Atka, qual é o fim de “eu” no presente?', options: ['-kuq', '-kux̂', '-lakax̂'], answer: '-kuq', explanation: '“Txin yaxtakuq”: eu te amo.' },
    ],
  },
  {
    id: 'ale-g2',
    level: 'A1.1',
    title: 'Sujeito, objeto, verbo',
    emoji: '🧱',
    summary: 'A ordem da frase é fixa: quem faz, o que recebe a ação e, no fim, o verbo.',
    sections: [
      {
        text: 'O aleúte põe o verbo no fim, depois do sujeito e do objeto. Ao contrário das línguas esquimós, que marcam o sujeito com um final diferente quando o verbo tem objeto, o aleúte usa a mesma forma para os dois e deixa a ordem das palavras dizer quem faz o quê.',
        examples: [
          ['Piitrax̂ tayaĝux̂ kidukux̂.', 'O Pedro está ajudando o homem.'],
          ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
        ],
      },
      {
        text: 'Os pronomes “ting” (eu, me) e “txin” (você, te) aparecem sobretudo como objeto, antes do verbo: “Txin yaxtakuq”, te amo.',
        examples: [['Txin yaxtakuq.', 'Eu te amo.']],
      },
    ],
    pitfalls: ['Trocar a ordem: em “Piitrax̂ tayaĝux̂ kidukux̂”, quem ajuda é o Pedro, que vem primeiro.'],
    quiz: [
      { question: 'Em “Piitrax̂ tayaĝux̂ kidukux̂”, quem ajuda?', options: ['o Pedro', 'o homem', 'eu'], answer: 'o Pedro', explanation: 'O sujeito vem primeiro, o objeto depois e o verbo no fim.' },
    ],
  },
  {
    id: 'ale-g3',
    level: 'A1.2',
    title: 'De quem é: tayaĝum adaa',
    emoji: '🔗',
    summary: 'O dono vem antes, com -m; a coisa vem depois, com -a.',
    sections: [
      {
        text: 'Na posse, as duas palavras mudam: o dono ganha o final -m e vem antes; a coisa ganha o final -a. Se o dono já é conhecido, ele some, e a coisa fica com -a: “ulaa”, a casa dele.',
        table: {
          head: ['Sozinho', 'Com dono', 'Sentido'],
          rows: [
            ['tayaĝux̂ (homem)', 'tayaĝum …', 'do homem'],
            ['adax̂ (pai)', 'tayaĝum adaa', 'o pai do homem'],
            ['—', 'ulaa', 'a casa dele'],
          ],
        },
        examples: [
          ['Tayaĝum adaa.', 'O pai do homem.'],
          ['Tayaĝum ulaa.', 'A casa do homem.'],
        ],
      },
    ],
    pitfalls: ['Pôr o dono depois: “o pai do homem” é “tayaĝum adaa”, com o dono primeiro.'],
    quiz: [
      { question: 'Como se diz “o pai do homem”?', options: ['tayaĝum adaa', 'adax̂ tayaĝux̂', 'adaa tayaĝum'], answer: 'tayaĝum adaa', explanation: 'O dono vem antes, com -m.' },
    ],
  },
  {
    id: 'ale-g4',
    level: 'A1.2',
    title: 'Contar em dez',
    emoji: '🔢',
    summary: 'Ao contrário das línguas esquimós, o aleúte conta em dez: hatix̂ (10), sisax̂ (100).',
    sections: [
      {
        text: 'O inupiaque e o iúpique contam em vinte, mas o aleúte conta em dez. As dezenas se fazem multiplicando: o número leva -dim e vem com “hatix̂” (dez) — como “qankudim hatix̂”. Alguns números mudam entre Atka e o leste.',
        table: {
          head: ['Número', 'Atka', 'Leste'],
          rows: [
            ['1', 'ataqan', 'ataqan'],
            ['2', 'alax', 'aalax'],
            ['3', 'qankus', 'qaankun'],
            ['4', 'siching', 'sichin'],
            ['5', 'chaang', 'chaang'],
            ['10', 'hatix̂', 'hatix̂'],
            ['100', 'sisax̂', 'sisax̂'],
          ],
        },
        examples: [['Ataqan tunuum sanaqaĝikan.', 'Uma língua só nunca basta.']],
      },
    ],
    pitfalls: ['Contar em vinte, como nas línguas esquimós vizinhas: em aleúte, a base é o dez, “hatix̂”.'],
    quiz: [
      { question: 'Como se diz “cinco” em aleúte?', options: ['chaang', 'hatix̂', 'qankus'], answer: 'chaang', explanation: '“Chaang” é cinco; “hatix̂”, dez; “qankus”, três.' },
    ],
  },
];
