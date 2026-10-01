import type { GrammarTopic } from '../types';

/** Tópicos de gramática do armênio (oriental) — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_HY: GrammarTopic[] = [
  {
    id: 'hy-g1',
    level: 'A1.1',
    title: 'O alfabeto armênio',
    emoji: '🔤',
    summary: 'Um alfabeto próprio, criado no ano 405, com 39 letras e sem relação visual com o latino, o cirílico ou o grego.',
    sections: [
      {
        text: 'O armênio se escreve da esquerda para a direita, como o português, mas com um alfabeto só seu. Não há maiúsculas “escondidas”: cada letra tem uma forma maiúscula e uma minúscula bem diferentes uma da outra, como Ա/ա ou Դ/դ.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['Ա ա', 'um “a” aberto', 'Բարև (barev, olá)'],
            ['Ե ե', '“iê” no início, “e” no meio', 'ես (yes, eu)'],
            ['Ր ր', 'erre batido, mais suave que “rr”', 'Բարի (bari, bom)'],
            ['Ղ ղ', 'um “r” gutural, gargantal', 'Բարի լույս (bari luys)'],
            ['Ց ց', 'um “ts” seco e expelido', 'Ցտեսություն (ts’tesut’yun)'],
          ],
        },
        examples: [
          ['Բարև, ես հայերեն եմ սովորում:', 'Olá, eu estou aprendendo armênio.'],
        ],
      },
    ],
    pitfalls: ['Procurar parecença com o alfabeto grego ou cirílico: o armênio é uma família só sua, sem letras emprestadas de outros sistemas.', 'Ler “ր” como o “r” forte do português: é mais parecido com o “r” batido do espanhol.'],
    quiz: [
      { question: 'O alfabeto armênio foi criado…', options: ['no ano 405, por Mesrop Mashtots', 'emprestado do grego', 'no século XX'], answer: 'no ano 405, por Mesrop Mashtots', explanation: 'Mesrop Mashtots criou o alfabeto para traduzir a Bíblia, numa época em que a Armênia buscava preservar sua identidade entre dois impérios vizinhos.' },
      { question: 'Como soa o “ց” de “Ցտեսություն”?', options: ['Um “ts” seco e expelido', 'Como “s”', 'Como “k”'], answer: 'Um “ts” seco e expelido', explanation: '“Ց” é uma consoante ejetiva: sai com um pequeno estalo de ar.' },
    ],
  },
  {
    id: 'hy-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo “ser”',
    emoji: '🙋',
    summary: 'Seis pronomes e o verbo “ser/estar”, que no armênio vem sempre por último na frase.',
    sections: [
      {
        text: 'O armênio não tem um infinitivo isolado para “ser”: as formas conjugadas (եմ, ես, է…) funcionam tanto para “eu sou/estou” quanto para dizer o nome ou a origem de alguém, e vêm no final da frase.',
        table: {
          head: ['Pronome', 'Tradução', '“ser/estar”'],
          rows: [
            ['ես', 'eu', 'եմ'],
            ['դու', 'tu, você', 'ես'],
            ['նա', 'ele, ela', 'է'],
            ['մենք', 'nós', 'ենք'],
            ['դուք', 'vocês; o(a) senhor(a) (formal)', 'եք'],
            ['նրանք', 'eles, elas', 'են'],
          ],
        },
        examples: [
          ['Ես Բրազիլիայից եմ:', 'Eu sou do Brasil.'],
          ['Դուք շատ բարի եք:', 'O(a) senhor(a) é muito gentil.'],
        ],
      },
    ],
    pitfalls: ['Colocar o verbo no meio da frase como em português: em armênio, “եմ/ես/է” fecha a frase.', 'Usar “դու” com uma pessoa mais velha ou desconhecida: nesses casos o armênio usa “դուք”, como o “vous” do francês.'],
    quiz: [
      { question: 'Complete: “Ես Երևանից ___:”', options: ['եմ', 'ես', 'է'], answer: 'եմ', explanation: '“Եմ” é a forma de “ser” para “ես” (eu).' },
      { question: '“Դուք” serve para…', options: ['vocês e o tratamento formal', 'só para “nós”', 'só para “eles”'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “դուք” é o plural e também a forma educada de falar com uma pessoa só.' },
    ],
  },
  {
    id: 'hy-g3',
    level: 'A1.2',
    title: 'O artigo que vem depois: -ը e -ն',
    emoji: '🏷️',
    summary: 'O armênio não tem um artigo antes da palavra: ele gruda no final dela.',
    sections: [
      {
        text: 'Para marcar que algo é específico ou já conhecido (“a casa”, e não “uma casa”), o armênio acrescenta -ը depois de uma palavra terminada em consoante, e -ն depois de uma terminada em vogal. É o mesmo tipo de artigo pós-posto que existe no romeno e no búlgaro.',
        table: {
          head: ['Sem artigo', 'Com artigo', 'Tradução'],
          rows: [
            ['տուն (casa)', 'տունը', 'a casa'],
            ['անուն (nome)', 'անունը', 'o nome'],
            ['հայր (pai)', 'հայրը', 'o pai'],
            ['ընտանիք (família)', 'ընտանիքը', 'a família'],
          ],
        },
        examples: [
          ['Իմ տունը փոքր է:', 'A minha casa é pequena.'],
          ['Իմ հայրը Գյումրիից է:', 'O meu pai é de Gyumri.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra separada para “o/a”: em armênio ela vem grudada no final do substantivo, não antes.', 'Esquecer o artigo com o possessivo: “իմ հայրը” (o meu pai) leva -ը mesmo já tendo “իմ” (meu) antes.'],
    quiz: [
      { question: 'Como se diz “a casa” a partir de “տուն”?', options: ['տունը', 'նտուն', 'տունն'], answer: 'տունը', explanation: '“Տուն” termina em consoante, então o artigo é -ը: տունը.' },
      { question: 'O artigo armênio -ը/-ն vem…', options: ['depois da palavra', 'antes da palavra', 'no meio da palavra'], answer: 'depois da palavra', explanation: 'É um artigo pós-posto, grudado no final do substantivo, como no romeno e no búlgaro.' },
    ],
  },
  {
    id: 'hy-g4',
    level: 'A1.2',
    title: 'O verbo “ter” e a negação com չ-',
    emoji: '🚫',
    summary: '“Ունենալ” (ter) conjuga como qualquer verbo, e a negação se faz grudando չ- bem na frente do verbo.',
    sections: [
      {
        text: 'O verbo “ունենալ” (ter) é regular e muito usado, inclusive para falar da família (“ես մեկ եղբայր ունեմ”, tenho um irmão). Para negar qualquer verbo no presente, o armênio gruda o prefixo չ- bem no começo da forma conjugada.',
        table: {
          head: ['Pronome', 'ունենալ (ter)', 'negativo'],
          rows: [
            ['ես', 'ունեմ', 'չունեմ'],
            ['դու', 'ունես', 'չունես'],
            ['նա', 'ունի', 'չունի'],
            ['մենք', 'ունենք', 'չունենք'],
            ['դուք', 'ունեք', 'չունեք'],
            ['նրանք', 'ունեն', 'չունեն'],
          ],
        },
        examples: [
          ['Ես մեկ եղբայր ունեմ:', 'Eu tenho um irmão.'],
          ['Ես չգիտեմ:', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Separar o չ- do verbo: ele sempre vem grudado, formando uma única palavra (չունեմ, não “չ ունեմ”).', 'Confundir “ունենալ” (ter) com “ունի” isolado: “ունի” já é a forma conjugada para “նա” (ele/ela tem).'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ես չգիտեմ:', 'Ես գիտեմ չեմ:', 'Չես գիտեմ ես:'], answer: 'Ես չգիտեմ:', explanation: 'O prefixo չ- gruda direto no verbo conjugado: չ + գիտեմ = չգիտեմ.' },
      { question: '“Ես մեկ քույր ունեմ” quer dizer…', options: ['Eu tenho uma irmã.', 'Eu sou uma irmã.', 'Eu não tenho irmã.'], answer: 'Eu tenho uma irmã.', explanation: '“Ունեմ” é a forma de “ունենալ” (ter) para “ես” (eu).' },
    ],
  },
];
