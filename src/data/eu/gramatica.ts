import type { GrammarTopic } from '../types';

/** Tópicos de gramática do basco — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_EU: GrammarTopic[] = [
  {
    id: 'eu-g1',
    level: 'A1.1',
    title: 'Pronúncia: z, s, x, tx e tz',
    emoji: '🔤',
    summary: 'O basco usa o alfabeto latino e se lê quase sempre como se escreve; o segredo está nos três tipos de “s” e nos três de “tch/ts”.',
    sections: [
      {
        text: 'As vogais são como as do português, sempre claras (sem vogal nasal). O “k” aparece onde o português escreveria “c” ou “qu”. O que exige treino são as sibilantes: o basco distingue z, s e x, e também tz, ts e tx.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['z', '“s” comum', 'zu (você)'],
            ['s', '“s” chiado, com a ponta da língua para cima', 'asko (muito)'],
            ['x', '“x” de “xícara”', 'kaixo (oi)'],
            ['tx', '“tch” de “tchau”', 'txakur (cachorro)'],
            ['tz', '“ts” com o s comum', 'deitzen (em “… deitzen naiz”)'],
            ['ts', '“ts” com o s chiado', 'atsegin (agradável)'],
          ],
        },
        examples: [
          ['Kaixo! Zer moduz?', 'Oi! Como vai?'],
          ['Txakurra lo dago.', 'O cachorro está dormindo.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “x” como “ks”: em “kaixo” o som é o do “x” de “xícara”.',
      'Ler “z” como o “z” do português: em basco ele soa como um “s”.',
      'Pronunciar o “h” como o “h” do inglês: no sul do País Basco ele quase sempre é mudo.',
    ],
    quiz: [
      { question: 'Como soa o “tx” de “txakur”?', options: ['Como “tch”', 'Como “ks”', 'Como “tz”'], answer: 'Como “tch”', explanation: '“Tx” é o som do “tch” de “tchau”.' },
      { question: 'O que quer dizer “kaixo”?', options: ['oi', 'tchau', 'obrigado'], answer: 'oi', explanation: '“Kaixo” é o cumprimento informal do dia a dia.' },
    ],
  },
  {
    id: 'eu-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo izan (ser)',
    emoji: '🙋',
    summary: 'Seis pronomes, o verbo “izan” no fim da frase e a origem com -koa.',
    sections: [
      {
        text: 'O verbo costuma ficar no fim: “Ni Ane naiz” (eu sou a Ane). O basco não distingue ele e ela: “hura” serve para os dois. “Zu” é o “você” de todo dia; “hi” é uma forma bem íntima, pouco usada.',
        table: {
          head: ['Pronome', 'Tradução', 'izan (ser)'],
          rows: [
            ['ni', 'eu', 'naiz'],
            ['zu', 'você', 'zara'],
            ['hura', 'ele / ela', 'da'],
            ['gu', 'nós', 'gara'],
            ['zuek', 'vocês', 'zarete'],
            ['haiek', 'eles / elas', 'dira'],
          ],
        },
        examples: [
          ['Gu lagunak gara.', 'Nós somos amigos.'],
          ['Haiek Bilbokoak dira.', 'Eles são de Bilbao.'],
        ],
      },
      {
        heading: 'De onde você é? Onde você mora?',
        text: 'A origem se diz com -ko + o artigo -a grudados no lugar: “Bilbokoa naiz” (sou de Bilbao). Onde se mora leva -n (ou -en depois de consoante): “Bilbon bizi naiz” (moro em Bilbao), “São Paulon bizi naiz”.',
        examples: [
          ['Nongoa zara? — São Paulokoa naiz.', 'De onde você é? — Sou de São Paulo.'],
          ['Non bizi zara? — Donostian bizi naiz.', 'Onde você mora? — Moro em San Sebastián.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o verbo no meio, como em português: “Ni naiz Ane” soa estranho; o natural é “Ni Ane naiz”.',
      'Traduzir “de” por uma palavra separada: “sou de Bilbao” é “Bilbokoa naiz”, com -koa grudado no nome.',
    ],
    quiz: [
      { question: 'Complete: “Ni São Paulokoa ___.”', options: ['naiz', 'da', 'zara'], answer: 'naiz', explanation: '“Naiz” é a forma de “izan” para “ni”.' },
      { question: '“Hura” quer dizer…', options: ['ele ou ela', 'só ele', 'eles'], answer: 'ele ou ela', explanation: 'O basco não tem gênero gramatical: “hura” vale para os dois.' },
    ],
  },
  {
    id: 'eu-g3',
    level: 'A1.2',
    title: 'O artigo -a e o ergativo -k',
    emoji: '🧩',
    summary: 'O artigo vai grudado no fim do grupo, e quem faz a ação de um verbo com objeto ganha -k.',
    sections: [
      {
        text: 'O basco não tem gênero. O artigo definido é o sufixo -a, que vai no fim do grupo inteiro (o adjetivo vem depois do nome): “etxe” (casa) → “etxea” (a casa) → “etxe txikia” (a casa pequena). O número “bat” (um) também vem depois: “kafe bat” (um café).',
        table: {
          head: ['Palavra', 'Com artigo', 'Tradução'],
          rows: [
            ['etxe', 'etxea', 'a casa'],
            ['ur', 'ura', 'a água'],
            ['etxe txiki', 'etxe txikia', 'a casa pequena'],
          ],
        },
      },
      {
        heading: 'Quem faz a ação: o -k',
        text: 'Quando o verbo tem objeto (comer algo, beber algo, ter algo), quem faz a ação ganha -k: “nik”, “zuk”, “hark”, “Anek”. Com verbos sem objeto (ser, ir, morar), fica sem -k. Esse sistema se chama ergativo e é raro na Europa.',
        table: {
          head: ['Sem objeto', 'Com objeto'],
          rows: [
            ['Ni etxera noa. (Eu vou para casa.)', 'Nik ura edaten dut. (Eu bebo água.)'],
            ['Zu Bilbokoa zara. (Você é de Bilbao.)', 'Zuk kafea edaten duzu. (Você bebe café.)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esquecer o -k com verbo de objeto: “Ni kafea edaten dut” está errado; o certo é “Nik kafea edaten dut”.',
      'Pôr o adjetivo antes do nome: “txiki etxea” está errado; o certo é “etxe txikia”.',
    ],
    quiz: [
      { question: 'Qual frase está certa?', options: ['Nik ogia jaten dut.', 'Ni ogia jaten dut.', 'Nik ogi jaten naiz.'], answer: 'Nik ogia jaten dut.', explanation: '“Jan” (comer) tem objeto, então “ni” vira “nik”.' },
      { question: 'Como se diz “a casa pequena”?', options: ['etxe txikia', 'txiki etxea', 'etxea txiki'], answer: 'etxe txikia', explanation: 'O adjetivo vem depois do nome e o artigo -a fecha o grupo.' },
    ],
  },
  {
    id: 'eu-g4',
    level: 'A1.2',
    title: 'A negação ez e os números de vinte em vinte',
    emoji: '🔢',
    summary: 'Nega-se com “ez” antes do verbo, e os números grandes contam de vinte em vinte.',
    sections: [
      {
        text: 'Para negar, “ez” vem antes do verbo conjugado, que passa para a frente: “Bilbokoa naiz” → “Ez naiz Bilbokoa” (não sou de Bilbao); “Ura edaten dut” → “Ez dut ura edaten” (não bebo água). “Dakit” (sei) → “Ez dakit” (não sei).',
        examples: [
          ['Ez dakit.', 'Não sei.'],
          ['Ez naiz Bilbokoa.', 'Não sou de Bilbao.'],
        ],
      },
      {
        heading: 'Contar de vinte em vinte',
        text: 'Do 1 ao 10: bat, bi, hiru, lau, bost, sei, zazpi, zortzi, bederatzi, hamar. A partir do 20, o basco conta em grupos de vinte (sistema vigesimal), como o francês faz em “quatre-vingts” (80).',
        table: {
          head: ['Número', 'Basco', 'Lógica'],
          rows: [
            ['20', 'hogei', 'vinte'],
            ['30', 'hogeita hamar', 'vinte e dez'],
            ['40', 'berrogei', 'duas vezes vinte'],
            ['60', 'hirurogei', 'três vezes vinte'],
            ['80', 'laurogei', 'quatro vezes vinte'],
            ['100', 'ehun', 'cem'],
          ],
        },
      },
    ],
    pitfalls: [
      'Deixar o verbo no fim na frase negativa: “Ez Bilbokoa naiz” está errado; o verbo sobe para junto do “ez”: “Ez naiz Bilbokoa”.',
      'Pôr “bat” antes do nome: “bat kafe” está errado; o certo é “kafe bat”.',
    ],
    quiz: [
      { question: 'Como se diz “não sei”?', options: ['Ez dakit.', 'Dakit ez.', 'Ez jakin naiz.'], answer: 'Ez dakit.', explanation: '“Ez” vem logo antes do verbo conjugado “dakit”.' },
      { question: '“Berrogei” é…', options: ['40', '20', '12'], answer: '40', explanation: '“Berrogei” é “duas vezes vinte”.' },
    ],
  },
];
