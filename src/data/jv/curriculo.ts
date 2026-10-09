import type { UnitSeed } from '../types';

/**
 * Trilha do javanês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_JV: UnitSeed[] = [
  {
    id: 'jv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halo! Ngoko, o jeito de falar do dia a dia',
    emoji: '👋',
    card: {
      id: 'jv-c1',
      title: 'A língua com mais falantes nativos da Indonésia',
      emoji: '🗺️',
      history:
        'O javanês (basa Jawa) é falado principalmente na ilha de Java, na Indonésia, por cerca de 68 milhões de pessoas como língua materna — mais do que o indonésio, a língua oficial do país, que a maioria dos javaneses aprende como segunda língua. É a maior língua austronésia do mundo em número de falantes nativos, mas não tem status oficial nacional: o indonésio é que ocupa esse papel, como símbolo de unidade entre as mais de 700 línguas do arquipélago.',
      culture_tip:
        'O javanês tem dois registros principais de fala, usados segundo a formalidade e a diferença de idade/status entre quem conversa: “ngoko” (informal, do dia a dia, entre amigos e familiares) e “krama” (formal, respeitoso, para quem é mais velho ou desconhecido). Este curso ensina o ngoko primeiro, por ser o mais comum na conversa cotidiana — o krama tem palavras diferentes para os mesmos conceitos.',
      grammar_why:
        'Assim como o indonésio, o verbo javanês não muda de forma pela pessoa: “aku mangan” (eu como) e “dhèwèké mangan” (ele/ela come) usam o mesmo “mangan”. A diferença maior do javanês não está na pessoa gramatical, mas no REGISTRO: a mesma ideia muda de palavra entre o ngoko e o krama, não pela pessoa que fala.',
      grammar_examples: [
        ['Aku saka Brasil.', 'Eu sou do Brasil. (ngoko)'],
        ['Kowé saka ngendi?', 'De onde você é? (ngoko)'],
        ['Dhèwèké saka Yogyakarta.', 'Ele/ela é de Yogyakarta.'],
      ],
      character_guide: [
        ['dh / th', 'consoantes retroflexas, com a língua curvada pra trás — sem equivalente exato no português', 'dhèwèké (ele/ela), gedhé (grande)'],
        ['a (final)', 'em sílaba aberta no final da palavra, soa mais como "o" do que como "a"', 'kowé [kowé], mas "a" final de "apa" soa "apå"'],
        ['ng', 'som nasal único, como o "ng" de "sing" em inglês', 'ngomong (falar), ngombé (beber)'],
      ],
    },
    lessons: [
      {
        id: 'jv-u1-l1',
        title: 'Halo, matur nuwun!',
        kind: 'licao',
        words: ['Halo', 'Sugeng énjang', 'Sugeng dalu', 'Matur nuwun', 'Sami-sami', "Ma'af"],
        cloze: [
          { sentence: '___, piyé kabaré?', answer: 'Halo', options: ['Halo', 'Matur nuwun', "Ma'af"], translation: 'Oi, como você está?' },
          { sentence: 'Aku seneng banget. ___, Ibu!', answer: 'Matur nuwun', options: ['Matur nuwun', 'Sami-sami', 'Halo'], translation: 'Eu estou muito feliz. Obrigado, mamãe!' },
          { sentence: '— Matur nuwun! — ___!', answer: 'Sami-sami', options: ['Sami-sami', "Ma'af", 'Sugeng dalu'], translation: '— Obrigado! — De nada!' },
        ],
        voice: {
          bot: 'Halo! Piyé kabaré?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Apik-apik baé, matur nuwun!', 'apik', 'matur nuwun'],
          hint: 'Responda que está bem com “apik-apik baé” e agradeça com “matur nuwun”.',
        },
        communityPrompt: 'Escreva três cumprimentos em javanês: um de manhã (“Sugeng énjang…”), um à noite (“Sugeng dalu…”) e um agradecimento com “Matur nuwun”.',
      },
      {
        id: 'jv-u1-l2',
        title: 'Aku, kowé, dhèwèké',
        kind: 'licao',
        words: ['Aku', 'Kowé', 'Dhèwèké', 'kita', 'Iyå', 'Ora'],
        cloze: [
          { sentence: '___ saka Brasil.', answer: 'Aku', options: ['Aku', 'Kowé', 'Dhèwèké'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Ayo, ___ sinau basa Jawa!', answer: 'kita', options: ['kita', 'aku', 'kowé'], translation: 'Vamos, nós aprender javanês!' },
          { sentence: '— Kowé seneng gedhang? — ___, seneng banget!', answer: 'Iyå', options: ['Iyå', 'Ora', 'Matur nuwun'], translation: '— Você gosta de banana? — Sim, gosto muito!' },
        ],
        voice: {
          bot: 'Kowé saka ngendi?',
          botTranslation: 'De onde você é?',
          expected: ['Aku saka Brasil.', 'aku saka', 'brasil'],
          hint: 'Responda com “Aku saka…” e o nome do seu país.',
        },
        communityPrompt: 'Apresente-se em javanês: diga “Aku saka…” (eu sou de…) e pergunte a origem de outra pessoa com “Kowé saka ngendi?”.',
      },
      {
        id: 'jv-u1-l3',
        title: 'Prova: halo lan ngoko',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Halo! Aku saka Yogyakarta. Kowé saka ngendi, lan piyé kabaré?",
          botTranslation: 'Oi! Eu sou de Yogyakarta. De onde você é, e como você está?',
          expected: ['Halo! Aku saka Brasil, lan apik-apik baé, matur nuwun!', 'aku saka', 'apik', 'matur nuwun'],
          hint: 'Devolva o cumprimento, diga de onde você é com “aku saka…” e como está com “apik-apik baé”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em javanês: cumprimento, de onde você é e como está, usando “ngoko”.',
      },
    ],
  },
  {
    id: 'jv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ing omah: kulawarga lan panganan',
    emoji: '🏠',
    card: {
      id: 'jv-c2',
      title: 'Mas e Mbak: irmãos pela idade, como no indonésio',
      emoji: '🧭',
      history:
        'Assim como o indonésio, o javanês não tem palavras separadas para “irmão” e “irmã”: o que importa é a idade relativa. “Mas” é um irmão mais velho (ou qualquer homem um pouco mais velho, como forma de tratamento respeitoso) e “Mbak” é uma irmã mais velha (ou qualquer mulher um pouco mais velha). “Adhi” serve para qualquer irmão ou irmã mais novo(a), sem distinção de sexo.',
      culture_tip:
        'Chamar alguém de “Mas” ou “Mbak” é uma forma comum e respeitosa de se dirigir a quem atende numa loja, dirige um táxi ou trabalha num restaurante, mesmo sem parentesco nenhum — parecido com “moço”/“moça” no Brasil, mas usado com muito mais frequência no dia a dia javanês.',
      grammar_why:
        'O plural em javanês, como no indonésio, costuma se formar repetindo a palavra: “wong” (pessoa) → “wong-wong” (pessoas). Na maioria das frases, porém, o contexto já deixa claro se é singular ou plural, sem precisar repetir nada.',
      grammar_examples: [
        ['Omahku cilik nanging apik.', 'A minha casa é pequena, mas bonita.'],
        ['Aku duwé siji Mas lan siji Adhi.', 'Eu tenho um irmão mais velho e um irmão/irmã mais novo(a).'],
      ],
      character_guide: [
        ['é', 'som fechado, como o "ê" de "mês"', 'kowé (você), sésuk (amanhã)'],
        ['è', 'som aberto, como o "é" de "café"', 'dhèwèké (ele/ela)'],
      ],
    },
    lessons: [
      {
        id: 'jv-u2-l1',
        title: 'Kulawarga: Bapak, Ibu, Mas, Mbak',
        kind: 'licao',
        words: ['Bapak', 'Ibu', 'Mas', 'Mbak', 'Adhi', 'apik'],
        cloze: [
          { sentence: '___-ku saka Solo.', answer: 'Bapak', options: ['Bapak', 'Ibu', 'Mas'], translation: 'O meu pai é de Solo.' },
          { sentence: 'Aku duwé siji ___ lan siji Adhi.', answer: 'Mas', options: ['Mas', 'Mbak', 'Ibu'], translation: 'Eu tenho um irmão mais velho e um irmão/irmã mais novo(a).' },
          { sentence: 'Mbakku ___ banget.', answer: 'apik', options: ['apik', 'gedhé', 'cilik'], translation: 'A minha irmã mais velha é muito gentil.' },
        ],
        voice: {
          bot: 'Kowé duwé Mas utawa Adhi?',
          botTranslation: 'Você tem irmão(s) mais velho(s) ou mais novo(s)?',
          expected: ['Iyå, aku duwé siji Mas lan siji Adhi.', 'aku duwé', 'mas', 'adhi'],
          hint: 'Responda com “aku duwé…” e quantos Mas/Mbak/Adhi você tem.',
        },
        communityPrompt: 'Descreva a sua família em javanês: quantos Mas, Mbak ou Adhi você tem, e como se chamam o seu Bapak e a sua Ibu.',
      },
      {
        id: 'jv-u2-l2',
        title: 'Ing omah',
        kind: 'licao',
        words: ['omah', 'banyu', 'mangan', 'ngombé', 'seneng', 'gedhé'],
        cloze: [
          { sentence: 'Omahku cilik nanging ___.', answer: 'apik', options: ['apik', 'gedhé', 'banyu'], translation: 'A minha casa é pequena, mas bonita.' },
          { sentence: 'Aku arep ___, Mbak.', answer: 'banyu', options: ['banyu', 'mangan', 'omah'], translation: 'Eu quero água, Mbak.' },
          { sentence: 'Aku ___ gedhang banget.', answer: 'seneng', options: ['seneng', 'mangan', 'ngombé'], translation: 'Eu gosto muito de banana.' },
        ],
        voice: {
          bot: 'Kowé seneng gedhang?',
          botTranslation: 'Você gosta de banana?',
          expected: ['Iyå, aku seneng banget!', 'aku seneng', 'banget'],
          hint: 'Use “aku seneng” (eu gosto) para responder.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases, usando “omah”, “gedhé” ou “cilik”, e o que você gosta de comer ou beber.',
      },
      {
        id: 'jv-u2-l3',
        title: 'Prova: kulawarga lan omah',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kulawarga lan omah?',
          botTranslation: 'Família e casa?',
          expected: ['Aku duwé Bapak, Ibu, lan siji Mas. Omahku cilik nanging apik.', 'aku duwé', 'omahku'],
          hint: 'Cite os parentes com “aku duwé…” e descreva a casa com “omahku…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
