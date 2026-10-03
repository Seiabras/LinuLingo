import type { UnitSeed } from '../types';

/**
 * Trilha do fon — por enquanto só as duas unidades do nível A1 (pacote marcado como incompleto; ver
 * `incomplete` em index.ts). Cada lição usa só palavras e frases com fonte verificada (ver o
 * cabeçalho de vocabulario.ts) — por isso não há aqui uma unidade clássica de "saudações" (não
 * achamos fonte para "bom dia", "como vai" etc. em fon): a trilha começa pelo mercado de Cotonou,
 * onde a única saudação confirmada — "Kwabɔ", bem-vindo — já faz sentido.
 */
export const UNITS_FON: UnitSeed[] = [
  {
    id: 'fon-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kwabɔ ɖò aximɛ ɔ́',
    emoji: '🏪',
    card: {
      id: 'fon-c1',
      title: 'A língua do Reino do Daomé',
      emoji: '🇧🇯',
      history:
        'O fon (fɔ̀ngbè) é a língua do povo fon, falada por cerca de 2,3 milhões de pessoas no sul do Benin, além de Togo e Nigéria — é a língua nacional mais falada do Benin e foi a língua da antiga capital do Reino do Daomé, Abomé. Pertence ao ramo gbe da grande família Níger-Congo, junto com o ewe (de Gana e Togo) e o gun (do sul do Benin). É uma língua isolante, de ordem sujeito-verbo-objeto, e tonal: a mesma sílaba muda de sentido conforme o tom.',
      culture_tip:
        '“Kwabɔ” (bem-vindo) é a palavra que recebe quem chega — foi fotografada, por exemplo, numa farmácia do aeroporto de Cotonou. O artigo definido vem DEPOIS da palavra, não antes: “sìn ɔ́” é “a água”, nunca “ɔ́ sìn”.',
      grammar_why:
        'O fon tem só duas marcas de tom (alto e baixo) e os verbos não mudam de forma por pessoa: “un ɖó” (eu tenho) e “éh ɖó” (ele tem) usam o mesmo “ɖó”, sem terminação nenhuma — bem diferente do português, que conjuga “tenho/tem/temos”.',
      grammar_examples: [
        ['Kwabɔ! Un xɔ̀ hweví ɖò aximɛ.', 'Bem-vindo! Eu comprei peixe no mercado.'],
        ['Sìn ɔ́.', 'A água.'],
        ['Un ɖó wémà.', 'Eu tenho um livro.'],
        ['Wémà ɖokpó.', 'Um livro.'],
      ],
      character_guide: [
        ['ɖ', 'som parecido com um “d” mais pesado, quase implosivo', 'ɖó (ter), ɖò (estar em)'],
        ['ɛ', 'o “é” aberto de “pé”', 'nɔví (irmão/irmã)'],
        ['ɔ', 'o “ó” aberto de “avó”', 'ɔ́ (artigo “o/a”), aximɛ (mercado)'],
        ['´ (agudo)', 'tom alto/ascendente', 'wé (você), nyɔ́nu (mulher)'],
        ['ˋ (grave)', 'tom baixo/descendente', 'sìn (água), hɔ̀n (águia)'],
        ['^ (circunflexo)', 'tom descendente-ascendente', 'wâ (vir)'],
      ],
    },
    lessons: [
      {
        id: 'fon-u1-l1',
        title: 'Kwabɔ! No mercado',
        kind: 'licao',
        words: ['Kwabɔ', 'un', 'ɔ́', 'sìn', 'aximɛ', 'xɔ̀'],
        cloze: [
          { sentence: '___! Un xɔ̀ hweví.', answer: 'Kwabɔ', options: ['Kwabɔ', 'Honton', 'Mɛxó'], translation: 'Bem-vindo! Eu compro peixe.' },
          { sentence: 'Un ___ hweví ɖò aximɛ.', answer: 'xɔ̀', options: ['xɔ̀', 'yì', 'ɖó'], translation: 'Eu comprei peixe no mercado.' },
          { sentence: 'Sìn ___.', answer: 'ɔ́', options: ['ɔ́', 'ɖò', 'nú'], translation: 'A água.' },
        ],
        voice: {
          bot: 'Kwabɔ! Un ɖó hweví ɖò aximɛ.',
          botTranslation: 'Bem-vindo! Eu tenho peixe no mercado.',
          expected: ['Un xɔ̀ hweví.', 'un xɔ̀', 'xɔ̀ hweví'],
          hint: 'Diga que você compra o peixe: “Un xɔ̀ hweví.”.',
        },
        communityPrompt: 'Escreva uma frase em fon usando “Un xɔ̀…” (eu compro) e uma palavra do vocabulário.',
      },
      {
        id: 'fon-u1-l2',
        title: 'Un ɖó wémà',
        kind: 'licao',
        words: ['wémà', 'ɖó', 'ɖokpó', 'nú', 'wé', 'ɖò'],
        cloze: [
          { sentence: 'Un ___ wémà.', answer: 'ɖó', options: ['ɖó', 'yì', 'xɔ̀'], translation: 'Eu tenho um livro.' },
          { sentence: 'Wémà ___.', answer: 'ɖokpó', options: ['ɖokpó', 'ɔ́', 'nú'], translation: 'Um livro.' },
          { sentence: 'Hweví ɔ́ ___ aximɛ.', answer: 'ɖò', options: ['ɖò', 'ɖó', 'wé'], translation: 'O peixe está no mercado.' },
        ],
        voice: {
          bot: 'Un ɖó wémà ɖokpó.',
          botTranslation: 'Eu tenho um livro.',
          expected: ['Un ɖó wémà nú wé.', 'un ɖó', 'nú wé'],
          hint: 'Diga que você tem um livro para a outra pessoa: “Un ɖó wémà nú wé.”.',
        },
        communityPrompt: 'Escreva uma frase com “Un ɖó…” (eu tenho) e “nú wé” (para você).',
      },
      {
        id: 'fon-u1-l3',
        title: 'Prova: Kwabɔ ɖò aximɛ ɔ́',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kwabɔ ɖò aximɛ ɔ́! Un ɖó wémà, akwɛ́, kpo hweví kpo.',
          botTranslation: 'Bem-vindo ao mercado! Eu tenho livro, dinheiro e peixe.',
          expected: ['Un xɔ̀ wémà kpo hweví kpo.', 'un xɔ̀'],
          hint: 'Diga que você compra duas coisas, ligando-as com “kpo … kpo”.',
        },
        communityPrompt: 'Escreva uma frase comprando duas coisas do mercado, usando “Un xɔ̀ … kpo … kpo.”.',
      },
    ],
  },
  {
    id: 'fon-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Honton kpo nɔví kpo',
    emoji: '🐐',
    card: {
      id: 'fon-c2',
      title: 'Pessoas, bichos e o artigo que vem depois',
      emoji: '🐑',
      history:
        'Muitas palavras do fon viajaram para as línguas vizinhas: “itàn” (história) e “kpàtàkì” (importante) vieram emprestadas do iorubá, mostrando séculos de contato entre os povos fon e iorubá no sul do Benin e na Nigéria. Hoje o fon tem rádio e televisão próprias no Benin (ORTB, La Béninoise) e, desde os anos 2010, começou a ser ensinado nas escolas junto com o francês.',
      culture_tip:
        '“Sika” é um nome fon de verdade, dado tradicionalmente a uma menina nascida numa segunda-feira — como os nomes de dia da semana do povo acã, vizinho dos fon. Os animais do mercado (cabra, ovelha, coelho, peixe, lagosta) aparecem o tempo todo nas conversas do dia a dia em Cotonou.',
      grammar_why:
        'O adjetivo e o numeral vêm DEPOIS do nome, nunca antes: “ganxixo ɖokpó” é “uma hora” (hora-um), não “ɖokpó ganxixo”. Da mesma forma, “nǔ ɔ́ kpàtàkì” (a coisa é importante) põe o adjetivo depois do sujeito, sem um verbo “ser” separado — a própria palavra “kpàtàkì” já funciona como “ser importante”.',
      grammar_examples: [
        ['Nyɔ́nu ɔ́ ɖó nɔví.', 'A mulher tem um irmão/uma irmã.'],
        ['Gbɔ́ kpo lɛ̀ngbɔ́ kpo.', 'Cabra e ovelha.'],
        ['Nǔ ɔ́ kpàtàkì.', 'A coisa é importante.'],
        ['Houé yòyò.', 'Ano novo.'],
      ],
      character_guide: [
        ['gb', 'um só som, “g” e “b” juntos na boca ao mesmo tempo', 'gbɔ́ (cabra), gbɛtɔ́ (pessoa)'],
        ['kp', 'como “gb”, mas surdo: “k” e “p” juntos', 'kpo (e), kpàtàkì (importante)'],
        ['ny', 'o “nh” do português', '(dígrafo oficial do alfabeto fon)'],
        ['ǐ / ě (háček)', 'tom descendente-ascendente numa só vogal', 'mǐ (nós/vocês)'],
      ],
    },
    lessons: [
      {
        id: 'fon-u2-l1',
        title: 'Nɔví kpo honton kpo',
        kind: 'licao',
        words: ['nyɔ́nu', 'gbɛtɔ́', 'nɔví', 'ví', 'honton', 'mǐ'],
        cloze: [
          { sentence: '___ ɔ́.', answer: 'Nyɔ́nu', options: ['Nyɔ́nu', 'Gbɛtɔ́', 'Ví'], translation: 'A mulher.' },
          { sentence: 'Un ɖó ___.', answer: 'nɔví', options: ['nɔví', 'honton', 'ví'], translation: 'Eu tenho um irmão/uma irmã.' },
          { sentence: '___ yì aximɛ.', answer: 'Mǐ', options: ['Mǐ', 'Un', 'Éh'], translation: 'Nós vamos ao mercado.' },
        ],
        voice: {
          bot: 'Nyɔ́nu ɔ́ ɖó nɔví.',
          botTranslation: 'A mulher tem um irmão/uma irmã.',
          expected: ['Un ɖó nɔví.', 'un ɖó nɔví'],
          hint: 'Diga que você também tem um irmão ou uma irmã: “Un ɖó nɔví.”.',
        },
        communityPrompt: 'Escreva sobre sua família usando “Un ɖó…” (eu tenho) e “nɔví” (irmão/irmã), “honton” (amigo) ou “ví” (filho/filha).',
      },
      {
        id: 'fon-u2-l2',
        title: 'Gbɔ́ kpo hweví kpo',
        kind: 'licao',
        words: ['gbɔ́', 'lɛ̀ngbɔ́', 'azwì', 'acɔci', 'hweví', 'dà'],
        cloze: [
          { sentence: '___ ɔ́.', answer: 'Gbɔ́', options: ['Gbɔ́', 'Lɛ̀ngbɔ́', 'Azwì'], translation: 'A cabra.' },
          { sentence: 'Un ___ hweví.', answer: 'dà', options: ['dà', 'xɔ̀', 'ɖó'], translation: 'Eu cozinho peixe.' },
          { sentence: '___ ɔ́.', answer: 'Acɔci', options: ['Acɔci', 'Aboli', 'Hweví'], translation: 'A lagosta.' },
        ],
        voice: {
          bot: 'Un dà hweví kpo acɔci kpo.',
          botTranslation: 'Eu cozinho peixe e lagosta.',
          expected: ['Un dà hweví.', 'un dà'],
          hint: 'Diga o que você cozinha: “Un dà…”.',
        },
        communityPrompt: 'Escreva uma frase com “Un dà…” (eu cozinho) e um animal ou peixe do vocabulário.',
      },
      {
        id: 'fon-u2-l3',
        title: 'Prova: Honton kpo nɔví kpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sika ɖó gbɔ́, lɛ̀ngbɔ́, kpo azwì kpo.',
          botTranslation: 'Sika tem cabra, ovelha e coelho.',
          expected: ['Un ɖó gbɔ́.', 'un ɖó'],
          hint: 'Diga que você também tem um desses animais: “Un ɖó …”.',
        },
        communityPrompt: 'Escreva sobre os animais que você conhece, usando “Un ɖó…” (eu tenho) e as palavras de animais do vocabulário.',
      },
    ],
  },
];
