import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do uzbeque — A1.1, A1.2, A2.1 e A2.2 (pacote incompleto). Fontes dos
 * tópicos A2 (uz-g5 a uz-g8, pesquisados em 09/10/2026): a tabela de declinação do Wikcionário em
 * inglês (en.wiktionary.org/wiki/huquq, confirmando huquq-ni/huquq-da/huquq-qa), o site da
 * Universal Dependencies para o uzbeque (universaldependencies.org/uz) e artigos acadêmicos
 * uzbeques sobre o tempo passado e os verbos modais kerak/mumkin (uniwork.buxdu.uz e
 * langmedia.fivecolleges.edu) — ver a nota completa de fontes em vocabulario.ts.
 */
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
          ['Men oʻzbek tilini oʻrganayapman.', 'Eu estou aprendendo a língua uzbeque.'],
        ],
      },
    ],
    pitfalls: ['Usar “yoʻq” para negar identidade: “bu non yoʻq” soa errado; o certo é “bu non emas”.', 'Pôr o verbo no meio da frase como em português: em uzbeque ele fica no fim.'],
    quiz: [
      { question: 'Como se diz “isto não é pão”?', options: ['Bu non emas.', 'Bu non yoʻq.', 'Non bu emas.'], answer: 'Bu non emas.', explanation: '“Emas” nega identidade (isto não é X).' },
      { question: 'Onde fica o verbo numa frase uzbeque?', options: ['No fim', 'No início', 'Logo depois do sujeito'], answer: 'No fim', explanation: 'A ordem é sujeito – objeto – verbo (SOV).' },
    ],
  },
  {
    id: 'uz-g5',
    level: 'A2.1',
    title: 'O caso acusativo: -ni',
    emoji: '🎯',
    summary: 'Quando o objeto direto é definido (“o/a” específico), o uzbeque grude o sufixo “-ni” nele, sempre igual, sem harmonia vocálica.',
    sections: [
      {
        text: 'A tabela de declinação do Wikcionário (verbete “huquq”, direito) confirma a forma acusativa “huquq-ni”. Diferente do plural ou do possessivo, o sufixo “-ni” é sempre igual, sem variar a vogal: “non” (pão) vira “nonni”, “kitob” (livro) vira “kitobni”. Ele marca o objeto direto quando é uma coisa específica, já conhecida — um objeto genérico, indefinido, costuma ficar sem sufixo nenhum (a mesma diferença entre “eu bebo água” e “eu bebo A água que você trouxe”).',
        examples: [
          ['Men kitobni oʻqiyapman.', 'Eu estou lendo o livro. (objeto específico, com -ni)'],
          ['Men kitob oʻqiyapman.', 'Eu estou lendo um livro. (objeto genérico, sem -ni)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que “-ni” mude de vogal como o plural “-lar”: ele é sempre “-ni”, sem harmonia vocálica.',
      'Usar “-ni” em todo objeto: ele marca só o objeto DEFINIDO; um objeto genérico fica sem sufixo.',
    ],
    quiz: [
      { question: 'O sufixo do caso acusativo (objeto definido) muda de forma como o plural “-lar”?', options: ['Não: é sempre “-ni”', 'Sim, vira “-nu” depois de vogal posterior', 'Sim, vira “-ni/-no” conforme o verbo'], answer: 'Não: é sempre “-ni”', explanation: 'A tabela do Wikcionário confirma “-ni” sem variação, diferente do plural e do possessivo.' },
      { question: 'Como se diz “eu estou lendo O livro” (aquele livro específico)?', options: ['Men kitobni oʻqiyapman.', 'Men kitob oʻqiyapman.', 'Men kitobga oʻqiyapman.'], answer: 'Men kitobni oʻqiyapman.', explanation: 'O objeto definido leva “-ni”; sem ele, o sentido seria “um livro” qualquer.' },
    ],
  },
  {
    id: 'uz-g6',
    level: 'A2.1',
    title: 'Os casos locativo (-da) e dativo (-ga)',
    emoji: '📍',
    summary: '“Em, dentro de” é o caso locativo (-da); “para, em direção a” é o caso dativo (-ga, com variantes -ka/-qa).',
    sections: [
      {
        text: 'A mesma tabela do Wikcionário (huquq → huquq-da, “no direito”) confirma o locativo “-da”, usado pra dizer onde algo está ou acontece: “maktabda” (na escola), “koʻchada” (na rua). O dativo marca destino ou direção, “-ga” depois da maioria das palavras, mas “-ka” depois de palavras terminadas em “-k” e “-qa” depois de “-q” (confirmado também na tabela de “huquq”, que dá “huquq-qa”): “maktabga” (para a escola), “doʻkonga” (para a loja).',
        table: {
          head: ['Caso', 'Sentido', 'Sufixo', 'Exemplo'],
          rows: [
            ['Locativo', 'em, dentro de', '-da', 'maktabda — na escola'],
            ['Dativo', 'para, em direção a', '-ga (-ka/-qa)', 'maktabga — para a escola'],
          ],
        },
        examples: [
          ['Men kasalxonada ishlayman.', 'Eu trabalho num hospital.'],
          ['Men maktabga boraman.', 'Eu vou para a escola.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o locativo (-da, “estar em”) com o dativo (-ga, “ir para”): “maktabda” é diferente de “maktabga”.',
      'Esquecer as variantes -ka/-qa do dativo depois de palavras terminadas em k/q.',
    ],
    quiz: [
      { question: 'Como se diz “eu trabalho num hospital”?', options: ['Men kasalxonada ishlayman.', 'Men kasalxonaga ishlayman.', 'Men kasalxonani ishlayman.'], answer: 'Men kasalxonada ishlayman.', explanation: '“Trabalhar EM” pede o locativo “-da”.' },
      { question: 'Qual sufixo marca destino (“para, em direção a”)?', options: ['-ga (ou -ka/-qa)', '-da', '-ni'], answer: '-ga (ou -ka/-qa)', explanation: 'O dativo marca destino; o Wikcionário confirma a variante “-qa” depois de palavras terminadas em “-q”.' },
    ],
  },
  {
    id: 'uz-g7',
    level: 'A2.2',
    title: 'O passado com -di',
    emoji: '🕰️',
    summary: 'O passado junta a raiz do verbo, o sufixo de tempo “-di” e um sufixo de pessoa — e “ular” (eles) leva “-dilar”, não só “-di”.',
    sections: [
      {
        text: 'O curso de uzbeque do FSI (Foreign Service Institute, Estados Unidos) dá a conjugação completa do passado simples pra vários verbos, confirmando o mesmo sufixo “-di” em radicais terminados em consoantes diferentes — “kelmoq” (vir, radical “kel-”), “yozmoq” (escrever, radical “yoz-”) e “ichmoq” (beber, radical “ich-”) seguem todos o mesmo padrão, sem trocar o “-di” por nenhuma outra forma. O ponto mais fácil de esquecer é a 3ª pessoa do plural: “ular” (eles) não usa só “-di”, usa “-dilar”.',
        table: {
          head: ['Pessoa', 'kelmoq (vir)', 'Sufixo'],
          rows: [
            ['men (eu)', 'keldim', '-dim'],
            ['sen (tu/você informal)', 'kelding', '-ding'],
            ['u (ele/ela)', 'keldi', '-di'],
            ['biz (nós)', 'keldik', '-dik'],
            ['siz (você formal/vocês)', 'keldingiz', '-dingiz'],
            ['ular (eles/elas)', 'keldilar', '-dilar'],
          ],
        },
        examples: [
          ['Men Toshkentdan keldim.', 'Eu vim de Tashkent. (já usado desde a unidade 1)'],
          ['Ular kecha keldilar.', 'Eles vieram ontem.'],
        ],
      },
    ],
    pitfalls: [
      'Usar só “-di” pra “ular” (eles): o certo é “keldilar”, com “-lar” no final.',
      'Esquecer o sufixo de pessoa: “keldi” sozinho já é “ele/ela veio”; “eu vim” precisa do “-m”: “keldim”.',
    ],
    quiz: [
      { question: 'Como se diz “eu vim”, no passado?', options: ['Keldim.', 'Kelaman.', 'Kelyapman.'], answer: 'Keldim.', explanation: '“Kel-” (raiz) + “-di” (passado) + “-m” (eu).' },
      { question: 'Como se diz “eles vieram”?', options: ['Keldilar.', 'Keldi.', 'Kelyaptilar.'], answer: 'Keldilar.', explanation: '“Ular” (eles) leva o sufixo “-dilar” no passado, não só “-di”.' },
    ],
  },
  {
    id: 'uz-g8',
    level: 'A2.2',
    title: 'Kerak e mumkin: precisar e poder',
    emoji: '🔑',
    summary: '“Kerak” é necessidade (“preciso”), “mumkin” é permissão/possibilidade (“posso”) — os dois são palavras invariáveis, com a pessoa marcada no verbo antes deles.',
    sections: [
      {
        text: 'Fontes acadêmicas (langmedia.fivecolleges.edu, sobre a mesma construção no turco e no uzbeque) explicam que o uzbeque marca necessidade com “kerak” e permissão/possibilidade com “mumkin”, os dois depois de um verbo numa forma nominal com sufixo possessivo que marca a pessoa — não o próprio “kerak”/“mumkin”, que nunca muda. Por isso “eu preciso ir” é “men borishim kerak” (bor- “ir” + -ish, forma nominal + -im, meu/eu + kerak), e “você pode ir” é “siz ketishingiz mumkin” (ket- “partir” + -ish + -ingiz, seu/você formal + mumkin) — este último exemplo citado diretamente pela fonte.',
        examples: [
          ['Men borishim kerak.', 'Eu preciso ir. (lit. “o meu ir é necessário”)'],
          ['Siz ketishingiz mumkin.', 'Você pode ir. (frase da própria fonte consultada)'],
        ],
      },
    ],
    pitfalls: [
      'Conjugar “kerak” ou “mumkin” como um verbo comum: eles nunca mudam; é o verbo antes deles que leva o sufixo de pessoa.',
      'Confundir “kerak” (precisar, obrigação) com “mumkin” (poder, permissão/possibilidade): são sentidos opostos.',
    ],
    quiz: [
      { question: 'Como se diz “você pode ir” (permissão)?', options: ['Siz ketishingiz mumkin.', 'Siz ketishingiz kerak.', 'Siz ketasiz mumkin.'], answer: 'Siz ketishingiz mumkin.', explanation: 'Frase confirmada pela fonte: “mumkin” marca permissão/possibilidade.' },
      { question: 'O que muda de pessoa para pessoa em “men borishim kerak” (eu preciso ir)?', options: ['O sufixo possessivo no verbo (“borish-im”), nunca o “kerak”', 'A palavra “kerak”', 'Nada muda'], answer: 'O sufixo possessivo no verbo (“borish-im”), nunca o “kerak”', explanation: '“Kerak” é invariável; quem marca a pessoa é o sufixo possessivo no verbo antes dele.' },
    ],
  },
];
