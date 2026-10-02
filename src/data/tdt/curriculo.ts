import type { UnitSeed } from '../types';

/**
 * Trilha do tétum: por enquanto só as duas unidades do nível A1 (pacote marcado como incompleto —
 * ver `incomplete` em index.ts). Fontes: Wikipédia «Tetum language» (história, pronomes, iha, nia,
 * negação) e a lenda «Lafaek Diak» da própria Wikipédia (https://en.wikipedia.org/wiki/Lafaek_Diak)
 * para o quadro cultural da unidade 2.
 */
export const UNITS_TDT: UnitSeed[] = [
  {
    id: 'tdt-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondia, Timor-Leste!',
    emoji: '🇹🇱',
    card: {
      id: 'tdt-c1',
      title: 'A língua que uniu Timor-Leste',
      emoji: '🇹🇱',
      history:
        'O tétum (tetun) é uma língua austronésia falada na ilha de Timor; em Timor-Leste é língua nacional e, junto com o português, uma das duas línguas oficiais do país desde a independência (2002). A variedade ensinada aqui é o tetun-díli (também chamado tetun-prasa, “tétum de praça/mercado”), nascida em Díli durante o período colonial português e hoje a mais falada — com gramática mais simples e muito mais palavras portuguesas do que o tetun-terik, a variedade mais antiga e menos misturada. A ortografia oficial em letras latinas foi fixada em 2004 pelo Instituto Nacional de Linguística de Timor-Leste.',
      culture_tip:
        'O agradecimento muda com quem fala: um homem diz “obrigadu”, uma mulher diz “obrigada” — a mesma marca de gênero do português “obrigado/obrigada”, herdada junto com a palavra. Para “sim”, tanto “loos” (certo, é isso) quanto “sin” aparecem; para “não”, é “lae”. E “oi”, cumprimento informal listado no guia de frases da Wikiviagem, é idêntico ao “oi” brasileiro — coincidência que todo brasileiro percebe na hora.',
      grammar_why:
        'O tétum não tem gênero gramatical (nem artigos “o/a”) e a ordem da frase é sujeito-verbo-objeto, como em português. Os pronomes, porém, têm uma peça que o português não tem: duas formas de “nós” — “ami” (sem quem ouve) e “ita” (com quem ouve) — e “ita” também funciona como “você” respeitoso, diferente de “ó”, mais informal.',
      grammar_examples: [
        ["Ha'u nia naran Ana. Ita nia naran saida?", 'Meu nome é Ana. Qual é o seu nome?'],
        ["Ha'u diak, obrigada. Ó diak ka lae?", 'Eu estou bem, obrigada. E você, está bem?'],
        ["Ita bele ko'alia Tetun?", 'Você consegue falar tétum?'],
        ["Loos, ha'u ba lai!", 'Certo, eu vou indo!'],
      ],
      character_guide: [
        ["'", 'oclusiva glotal: uma pequena parada na garganta, nunca é mudo', "ha'u (eu), ki'ik (pequeno)"],
        ['k', 'sempre o som de “k”, mesmo em palavras vindas do português', 'keiju (queijo), kafé (café)'],
        ['u', 'fechado, como o “u” de “lua”', 'uma (casa), bee (água)'],
      ],
    },
    lessons: [
      {
        id: 'tdt-u1-l1',
        title: 'Bondia, obrigadu!',
        kind: 'licao',
        words: ['bondia', 'botarde', 'bonoite', 'obrigadu', 'obrigada', 'lae'],
        cloze: [
          { sentence: '___, Alita!', answer: 'Bondia', options: ['Bondia', 'Botarde', 'Bonoite'], translation: 'Bom dia, Alita!' },
          { sentence: "___, Mário. Ha'u ba lai.", answer: 'Bonoite', options: ['Bonoite', 'Bondia', 'Lae'], translation: 'Boa noite, Mário. Eu vou indo.' },
          { sentence: '___, obrigadu.', answer: 'Lae', options: ['Lae', 'Loos', 'Bondia'], translation: 'Não, obrigado.' },
        ],
        voice: {
          bot: 'Bondia! Ita diak ka lae?',
          botTranslation: 'Bom dia! Você está bem ou não?',
          expected: ["Ha'u diak, obrigadu.", "Ha'u diak, obrigada.", 'diak', 'obrigadu', 'obrigada'],
          hint: "Diga que está bem com “Ha'u diak” e agradeça com “obrigadu” (se for homem) ou “obrigada” (se for mulher).",
        },
        communityPrompt: 'Escreva três cumprimentos em tétum: um de manhã (“Bondia”), um à tarde (“Botarde”) e um à noite (“Bonoite”).',
      },
      {
        id: 'tdt-u1-l2',
        title: "Ha'u, ó, nia",
        kind: 'licao',
        words: ["ha'u", 'ó', 'nia', 'naran', 'saida', 'loos'],
        cloze: [
          { sentence: "___ nia naran Ana.", answer: "Ha'u", options: ["Ha'u", 'Ó', 'Nia'], translation: 'Eu me chamo Ana (lit. “eu, de, nome, Ana”).' },
          { sentence: 'Ita nia naran ___?', answer: 'saida', options: ['saida', 'loos', 'nia'], translation: 'Qual é o seu nome?' },
          { sentence: "___, ha'u diak.", answer: 'Loos', options: ['Loos', 'Saida', 'Ó'], translation: 'Sim, eu estou bem.' },
        ],
        voice: {
          bot: 'Ita nia naran saida?',
          botTranslation: 'Qual é o seu nome?',
          expected: ["Ha'u nia naran Ana.", "ha'u nia naran", 'nia naran'],
          hint: "Diga seu nome com “Ha'u nia naran…” — “nia” é a partícula que liga o dono à coisa.",
        },
        communityPrompt: "Apresente-se em tétum: diga seu nome com “Ha'u nia naran…” e pergunte o nome de alguém com “Ita nia naran saida?”.",
      },
      {
        id: 'tdt-u1-l3',
        title: 'Prova: bondia, Timor-Leste!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Bondia! Ha'u nia naran Mário. Ita nia naran saida? Ita diak ka lae?",
          botTranslation: 'Bom dia! Meu nome é Mário. Qual é o seu nome? Você está bem?',
          expected: ["Bondia! Ha'u nia naran Ana. Ha'u diak, obrigada.", "ha'u nia naran", 'diak'],
          hint: "Devolva o cumprimento, diga seu nome com “Ha'u nia naran…” e que está bem com “Ha'u diak”.",
        },
        communityPrompt: "Escreva uma apresentação completa em tétum: cumprimento, nome com “Ha'u nia naran…” e “Ha'u diak, obrigadu/obrigada” no fim.",
      },
    ],
  },
  {
    id: 'tdt-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Uma, ema no hahán',
    emoji: '🏠',
    card: {
      id: 'tdt-c2',
      title: 'O crocodilo que virou ilha',
      emoji: '🐊',
      history:
        'A lenda “Lafaek Diak” (“o crocodilo bom”) conta que um menino salvou um filhote de crocodilo e os dois viraram companheiros de viagem; perto de morrer de velhice, o crocodilo se transformou na própria ilha de Timor, que até hoje tem a forma de um crocodilo no mapa. É considerada o mito de origem de Timor.',
      culture_tip:
        'Por causa da lenda, o crocodilo (“lafaek”) é tratado como sagrado (“lulik”) por vários grupos de Timor-Leste — às vezes chamado carinhosamente de “avô” — e aparece em artesanato, bandeiras de festa e símbolos do país desde a independência. (mesma fonte)',
      grammar_why:
        "Para dizer de quem é algo, o tétum usa a partícula “nia” depois do dono: “Ha'u nia uma” (minha casa, lit. “eu nia casa”). O plural quase nunca leva marca própria no substantivo — “sira” (eles/elas) é que mostra que há mais de um: “feto sira” são “as mulheres”. E os adjetivos vêm depois do substantivo: “uma boot” (casa grande), nunca antes.",
      grammar_examples: [
        ["Ha'u nia uma boot.", 'Minha casa é grande.'],
        ["Ha'u nia inan no aman iha uma.", 'Minha mãe e meu pai estão em casa.'],
        ['Ema sira iha merkadu.', 'As pessoas estão no mercado.'],
        ["Kafé ida, favor ida.", 'Um café, por favor.'],
      ],
      character_guide: [
        ['nia', 'não é uma letra, mas a partícula de posse mais importante do tétum', "Mário nia asu (o cachorro do Mário)"],
        ['sira', 'depois de um substantivo, vira o plural', 'ema sira (as pessoas)'],
      ],
    },
    lessons: [
      {
        id: 'tdt-u2-l1',
        title: 'Ema no uma',
        kind: 'licao',
        words: ['ema', 'feto', 'mane', 'inan', 'aman', 'uma'],
        cloze: [
          { sentence: '___ ida iha uma.', answer: 'Ema', options: ['Ema', 'Feto', 'Mane'], translation: 'Uma pessoa está em casa.' },
          { sentence: '___ ho inan iha uma.', answer: 'Aman', options: ['Aman', 'Mane', 'Uma'], translation: 'O pai e a mãe estão em casa.' },
          { sentence: "Ha'u nia ___ ki'ik.", answer: 'uma', options: ['uma', 'inan', 'feto'], translation: 'Minha casa é pequena.' },
        ],
        voice: {
          bot: "Ita nia uma boot ka ki'ik?",
          botTranslation: 'A sua casa é grande ou pequena?',
          expected: ["Ha'u nia uma boot.", "Ha'u nia uma ki'ik.", 'boot', "ki'ik"],
          hint: "Descreva sua casa com “Ha'u nia uma…” e o adjetivo depois do substantivo: “boot” (grande) ou “ki'ik” (pequena).",
        },
        communityPrompt: 'Descreva sua família em tétum: quem mora com você (“inan”, “aman”, outra pessoa) e como é a sua “uma”.',
      },
      {
        id: 'tdt-u2-l2',
        title: 'Hahán no numeru',
        kind: 'licao',
        words: ['kafé', 'paun', 'keiju', 'ida', 'rua', 'iha'],
        cloze: [
          { sentence: '___ ida, favor ida.', answer: 'Kafé', options: ['Kafé', 'Paun', 'Keiju'], translation: 'Um café, por favor.' },
          { sentence: 'Paun no ___.', answer: 'keiju', options: ['keiju', 'kafé', 'ida'], translation: 'Pão e queijo.' },
          { sentence: "Ha'u ___ asu rua.", answer: 'iha', options: ['iha', 'rua', 'ida'], translation: 'Eu tenho dois cachorros.' },
        ],
        voice: {
          bot: 'Ita hemu kafé ka lae?',
          botTranslation: 'Você bebe café ou não?',
          expected: ["Loos, ha'u hemu kafé.", "Lae, ha'u la hemu kafé.", 'kafé'],
          hint: 'Responda com “Loos” (sim) ou “Lae” (não) e repita “kafé”.',
        },
        communityPrompt: 'Escreva o que você come e bebe pela manhã, usando “hahán” (comida) e “hemu” (beber).',
      },
      {
        id: 'tdt-u2-l3',
        title: 'Prova: uma, ema no hahán',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Ita nia uma boot ka ki'ik? Ita hemu kafé ka bee?",
          botTranslation: 'Sua casa é grande ou pequena? Você bebe café ou água?',
          expected: ["Ha'u nia uma ki'ik. Ha'u hemu kafé.", 'boot', "ki'ik", 'kafé', 'bee'],
          hint: "Descreva sua casa (“boot” ou “ki'ik”) e diga o que bebe (“kafé” ou “bee”).",
        },
        communityPrompt: 'Escreva cinco frases sobre você em tétum: seu nome, sua casa, sua família e o que você come e bebe.',
      },
    ],
  },
];
