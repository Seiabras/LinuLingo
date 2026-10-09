import type { GrammarTopic } from '../types';

/** Tópicos de gramática do basco — A1.1 até A2.2 (pacote incompleto; B1 em diante chega depois). */
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
  {
    id: 'eu-g5',
    level: 'A2.1',
    title: 'O passado simples de izan e egon',
    emoji: '⏳',
    summary: 'Para contar o que já aconteceu, “naiz/nago” do presente viram “nintzen/nengoen” no passado.',
    sections: [
      {
        text: 'O passado simples de “izan” (ser) troca o -a- do presente por -ze-, e o -t- final some: “naiz” → “nintzen”. É o tempo usado para narrar fatos do passado, como numa história.',
        table: {
          head: ['Pronome', 'izan (presente)', 'izan (passado)'],
          rows: [
            ['ni', 'naiz', 'nintzen'],
            ['zu', 'zara', 'zinen'],
            ['hura', 'da', 'zen'],
            ['gu', 'gara', 'ginen'],
            ['zuek', 'zarete', 'zineten'],
            ['haiek', 'dira', 'ziren'],
          ],
        },
        examples: [
          ['Atzo Bilbon nintzen.', 'Ontem eu estava em Bilbao.'],
          ['Gazte ginen.', 'Nós éramos jovens.'],
        ],
      },
      {
        heading: 'egon no passado',
        text: '“Egon” (estar) segue o mesmo padrão, trocando “nago” por “nengoen”: útil para dizer como alguém estava ou onde estava.',
        examples: [
          ['Atzo gaixorik nengoen.', 'Ontem eu estava doente.'],
          ['Non zeunden?', 'Onde você estava?'],
        ],
      },
    ],
    pitfalls: ['Usar a forma de presente para contar o passado: “naiz Bilbon atzo” está errado; o certo é “Bilbon nintzen atzo”.', 'Confundir “zinen” (você era) com “ziren” (eles eram): só a última letra muda.'],
    quiz: [
      { question: 'Como se diz “eu estava” (izan)?', options: ['nintzen', 'naiz', 'ziren'], answer: 'nintzen', explanation: '“Nintzen” é o passado de “naiz”.' },
      { question: 'Complete: “Atzo gaixorik ___.”', options: ['nengoen', 'nago', 'nintzen'], answer: 'nengoen', explanation: '“Egon” no passado, para “ni”, é “nengoen”.' },
    ],
  },
  {
    id: 'eu-g6',
    level: 'A2.1',
    title: 'Comparativo e superlativo: -ago, baino e -en(a)',
    emoji: '📏',
    summary: 'Para comparar, o adjetivo ganha -ago e a referência leva “baino” (“que”); para o superlativo, -en(a).',
    sections: [
      {
        text: 'O comparativo se forma com o sufixo -ago no adjetivo, e a palavra comparada (o “que” do português) é “baino”, antes do adjetivo com -ago. O superlativo usa -en, com o artigo -a no fim.',
        table: {
          head: ['Base', 'Comparativo', 'Superlativo'],
          rows: [
            ['handi (grande)', 'handiago (maior)', 'handiena (o maior)'],
            ['txiki (pequeno)', 'txikiago (menor)', 'txikiena (o menor)'],
            ['on (bom)', 'hobe (melhor, irregular)', 'hoberena (o melhor)'],
          ],
        },
        examples: [
          ['Bilbo Donostia baino handiagoa da.', 'Bilbao é maior que San Sebastián.'],
          ['Bilbo da Euskal Herriko hiririk handiena.', 'Bilbao é a maior cidade do País Basco.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “baino” antes do segundo termo: “Bilbo Donostia handiagoa da” está incompleto; falta “baino”.', 'Pôr “-ago” sem o “baino”: sem a referência, a frase fica sem sentido de comparação.'],
    quiz: [
      { question: 'Como se diz “maior que”?', options: ['… baino handiagoa', '… handiago baino', '… baino handi'], answer: '… baino handiagoa', explanation: 'A referência leva “baino” antes do adjetivo com -ago.' },
      { question: 'Qual é o superlativo de “txiki” (pequeno)?', options: ['txikiena', 'txikiago', 'txikiegi'], answer: 'txikiena', explanation: 'O superlativo usa -en, mais o artigo -a.' },
    ],
  },
  {
    id: 'eu-g7',
    level: 'A2.2',
    title: 'O caso dativo -(r)i: dar, ajudar e esperar',
    emoji: '🤝',
    summary: 'Quem recebe a ação (a quem se dá, ajuda ou espera algo) leva o sufixo -(r)i, o caso dativo.',
    sections: [
      {
        text: 'O dativo marca “a quem” ou “para quem”: junta-se -ri a nomes terminados em vogal e -i aos terminados em consoante. Verbos como “gustatu” (gostar), “lagundu” (ajudar) e “itxaron” (esperar) costumam usar essa pessoa com -(r)i.',
        table: {
          head: ['Palavra', 'Com dativo', 'Tradução'],
          rows: [
            ['ama (mãe)', 'amari', 'à mãe, para a mãe'],
            ['Mikel', 'Mikeli', 'ao Mikel'],
            ['Donostia (cidade)', 'Donostiari', 'a Donostia'],
          ],
        },
        examples: [
          ['Amari laguntzen diot.', 'Eu ajudo a mãe.'],
          ['Euskara gustatzen zait.', 'Eu gosto de basco. (lit. “O basco agrada-me”)'],
        ],
      },
    ],
    pitfalls: ['Tratar “lagundu” como “jan” ou “edan”, sem o -ri: o certo é “amari laguntzen diot”, não só “ama laguntzen dut”.', 'Esquecer que “gustatu” inverte o sujeito do português: quem gosta leva -ri (zait = “a mim”), e a coisa de que se gosta é o sujeito.'],
    quiz: [
      { question: 'Como se diz “eu ajudo a mãe”?', options: ['Amari laguntzen diot.', 'Ama laguntzen dut.', 'Amarekin laguntzen dut.'], answer: 'Amari laguntzen diot.', explanation: '“Lagundu” pede o dativo -ri na pessoa ajudada.' },
      { question: '“Euskara gustatzen zait” quer dizer…', options: ['Eu gosto de basco.', 'O basco gosta de mim.', 'Eu estudo basco.'], answer: 'Eu gosto de basco.', explanation: 'Literalmente “o basco agrada-me”, mas em português vira “eu gosto de basco”.' },
    ],
  },
];
