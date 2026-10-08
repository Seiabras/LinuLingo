import type { GrammarTopic } from '../types';

/** Tópicos de gramática do uzbeque — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_UZ: GrammarTopic[] = [
  {
    id: 'uz-g1',
    level: 'A1.1',
    title: 'Alfabeto: sh, ch, oʻ, gʻ, q e x',
    emoji: '🔤',
    summary: 'O uzbeque usa o alfabeto latino desde 1993/1995, com cinco letras ou dígrafos que não existem em português.',
    sections: [
      {
        text: 'A maior parte das letras se lê como em português. Os sons mais diferentes são os dígrafos “sh”/“ch” e as letras guturais “q”, “x”, “oʻ” e “gʻ” (o apóstrofo faz parte da letra, não é acento).',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['sh', 'como “ch” de “chá”', 'Toshkent'],
            ['ch', 'como “tch” de “tchau”', 'choy (chá)'],
            ['oʻ', 'vogal própria, entre “o” e “a”', 'oʻn (dez)'],
            ['gʻ', 'som gutural, da garganta', 'goʻsht (carne)'],
            ['q', 'um “k” mais atrás na garganta', 'qora (preto)'],
            ['x', 'som gutural, como o alemão “Bach”', 'xayr (tchau)'],
          ],
        },
        examples: [
          ['Toshkent katta shahar.', 'Tashkent é uma cidade grande.'],
          ['Bir choy, marhamat.', 'Um chá, por favor.'],
        ],
      },
      {
        heading: 'Uma reforma em andamento',
        text: 'Em setembro de 2026 o Senado do Uzbequistão aprovou uma lei que troca esses dígrafos por letras únicas (sh→ş, ch→ç, oʻ→ö, gʻ→ğ), num alfabeto de 28 letras. A troca é gradual: por enquanto, livros, placas e documentos continuam na norma de 1995 usada aqui.',
      },
    ],
    pitfalls: ['Ler “oʻ” e “gʻ” como se o apóstrofo fosse só um acento: são letras próprias, com som diferente de “o” e “g”.', 'Confundir “q” com “k”: “q” é dito mais atrás na garganta.'],
    quiz: [
      { question: 'Como se lê “sh” em “Toshkent”?', options: ['Como “ch” de “chá”', 'Como “s” de “sapo”', 'Como “k”'], answer: 'Como “ch” de “chá”', explanation: 'O dígrafo “sh” soa como o “ch” português.' },
      { question: 'O que significa “choy”?', options: ['chá', 'chuva', 'chave'], answer: 'chá', explanation: '“Choy” é a bebida; o “ch” soa como “tch” de “tchau”.' },
    ],
  },
  {
    id: 'uz-g2',
    level: 'A1.1',
    title: 'Pronomes e os sufixos pessoais',
    emoji: '🙋',
    summary: 'O uzbeque não tem um verbo “ser”: a pessoa é um sufixo preso no fim da palavra.',
    sections: [
      {
        text: 'Em vez de um verbo separado, cada pessoa gramatical tem o seu próprio sufixo, preso diretamente na palavra que funciona como predicado.',
        table: {
          head: ['Pronome', 'Tradução', 'Sufixo', 'Exemplo'],
          rows: [
            ['men', 'eu', '-man', 'oʻqituvchiman (sou professor)'],
            ['sen', 'tu, você (informal)', '-san', 'doʻstimsan (você é meu amigo)'],
            ['u', 'ele, ela', '(nenhum)', 'doʻstim (ele é meu amigo)'],
            ['biz', 'nós', '-miz', 'doʻstmiz (somos amigos)'],
            ['siz', 'você (formal), vocês', '-siz', 'oʻqituvchisiz (você é professor)'],
            ['ular', 'eles, elas', '-lar', 'doʻstlar (eles são amigos)'],
          ],
        },
        examples: [
          ['Men oʻqituvchiman.', 'Eu sou professor(a).'],
          ['Siz oʻqituvchisiz.', 'Você é professor(a).'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “ser” separado: em uzbeque ele é um sufixo, não uma palavra.', 'Esquecer o sufixo de “ular” (eles): ao contrário do “ele/ela” (sem sufixo nenhum), “eles” usa “-lar”.'],
    quiz: [
      { question: 'Como se diz “eu sou professor(a)”?', options: ['Men oʻqituvchiman.', 'Men oʻqituvchisan.', 'Oʻqituvchi men.'], answer: 'Men oʻqituvchiman.', explanation: '“Men” leva o sufixo “-man”.' },
      { question: 'Qual sufixo marca “eles/elas são”?', options: ['-lar', '-miz', '-siz'], answer: '-lar', explanation: '“Ular doʻstlar” é “eles são amigos”.' },
    ],
  },
  {
    id: 'uz-g3',
    level: 'A1.2',
    title: 'Posse: mening ismim, sening ismingiz',
    emoji: '🏷️',
    summary: 'O possessivo tem duas partes: o pronome no genitivo e um sufixo preso no substantivo.',
    sections: [
      {
        text: 'Depois de consoante, o sufixo tem uma vogal de ligação (-im, -ing, -i…); depois de vogal, ele perde essa vogal (-m, -ng, -si…).',
        table: {
          head: ['Pronome', 'depois de consoante (ism)', 'depois de vogal (oila)'],
          rows: [
            ['mening (meu)', 'ismim', 'oilam'],
            ['sening (teu)', 'isming', 'oilang'],
            ['uning (dele/dela)', 'ismi', 'oilasi'],
            ['bizning (nosso)', 'ismimiz', 'oilamiz'],
            ['sizning (seu, formal)', 'ismingiz', 'oilangiz'],
            ['ularning (deles/delas)', 'ismlari', 'oilalari'],
          ],
        },
        examples: [
          ['Mening ismim Linu.', 'Meu nome é Linu.'],
          ['Bu mening oilam.', 'Esta é a minha família.'],
          ['Bu mening singlim.', 'Esta é a minha irmã mais nova.'],
        ],
      },
    ],
    pitfalls: ['Usar o pronome “mening” sem o sufixo no substantivo: os dois normalmente vêm juntos (“mening ismim”, não só “mening ism”).', 'Esquecer que o sufixo muda depois de vogal: é “oilam”, não “oilaim”.'],
    quiz: [
      { question: 'Como se diz “a minha família”?', options: ['mening oilam', 'mening oilaim', 'oila mening'], answer: 'mening oilam', explanation: '“Oila” termina em vogal, então o sufixo é só “-m”.' },
      { question: 'Qual é o sufixo de “eles/delas” no substantivo?', options: ['-lari', '-siz', '-im'], answer: '-lari', explanation: '“Ularning ismlari” é “o nome deles”.' },
    ],
  },
  {
    id: 'uz-g4',
    level: 'A1.2',
    title: 'Negação: emas × yoʻq, e a ordem SOV',
    emoji: '🚫',
    summary: 'O uzbeque nega identidade com “emas” e existência com “yoʻq”, e o verbo vem sempre no fim da frase.',
    sections: [
      {
        text: 'Para negar “isto é aquilo”, usa-se “emas” depois da palavra: “Bu non emas” (isto não é pão). Para negar que algo existe (ou responder “não”), usa-se “yoʻq”: “Non yoʻq” (não tem pão / não há pão).',
        examples: [
          ['Bu yomon emas.', 'Isto não é mau.'],
          ['Non qayda? — Non yoʻq.', 'Onde está o pão? — Não há pão.'],
        ],
      },
      {
        heading: 'Sujeito – objeto – verbo',
        text: 'Diferente do português, o uzbeque põe o verbo no fim: “Men non yeyman” é, palavra por palavra, “eu pão como”. Os sufixos pessoais de identidade (-man, -san…) seguem a mesma ordem, presos na última palavra da frase.',
        examples: [
          ['Men suv ichaman.', 'Eu bebo água.'],
          ['Men oʻzbek tilini oʻrganyapman.', 'Eu estou aprendendo a língua uzbeque.'],
        ],
      },
    ],
    pitfalls: ['Usar “yoʻq” para negar identidade: “bu non yoʻq” soa errado; o certo é “bu non emas”.', 'Pôr o verbo no meio da frase como em português: em uzbeque ele fica no fim.'],
    quiz: [
      { question: 'Como se diz “isto não é pão”?', options: ['Bu non emas.', 'Bu non yoʻq.', 'Non bu emas.'], answer: 'Bu non emas.', explanation: '“Emas” nega identidade (isto não é X).' },
      { question: 'Onde fica o verbo numa frase uzbeque?', options: ['No fim', 'No início', 'Logo depois do sujeito'], answer: 'No fim', explanation: 'A ordem é sujeito – objeto – verbo (SOV).' },
    ],
  },
];
