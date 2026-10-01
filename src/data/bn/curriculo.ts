import type { UnitSeed } from '../types';

/**
 * Trilha do bengali: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Da A2 ao C2 chega depois.
 */
export const UNITS_BN: UnitSeed[] = [
  {
    id: 'bn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'নমস্কার! প্রথম পদক্ষেপ',
    emoji: '👋',
    card: {
      id: 'bn-c1',
      title: 'Uma vogal “ô” embutida em cada consoante',
      emoji: '🪔',
      history:
        'O bengali (বাংলা, bangla) é a língua oficial de Bangladesh e do estado indiano de Bengala Ocidental, com mais de 230 milhões de falantes — um dos ramos orientais do indo-ariano, a mesma família do hindi, mas já bem separado dele. A escrita bengali, uma abugida descendente da brahmi (como o devanágari do hindi), chegou à forma atual por volta dos séculos X–XI. A diferença salta aos olhos de quem já viu o devanágari: a vogal “inerente” de cada consoante solta — a que soa sozinha, sem nenhum sinal — não é um “a”, mas um “ô” fechado, como o “o” de “avó”. O bengali literário padrão de hoje, usado tanto em Bangladesh quanto em Bengala Ocidental, nasceu no século XIX a partir do dialeto da região de Nadia e Kushtia.',
      culture_tip:
        '“নমস্কার” (nomoshkar) serve para “oi”, “boa tarde” e “tchau” a qualquer hora — mas tem origem hindu (do sânscrito namaskāra) e por isso é mais ouvido em Bengala Ocidental. Em Bangladesh, de maioria muçulmana, é comum ouvir “আসসালামু আলাইকুম”; e em qualquer lugar, sobretudo entre jovens, “হ্যালো” (emprestado do inglês) também resolve.',
      grammar_why:
        'O bengali, como o hindi, é uma língua SOV (o verbo vem por último), mas tem uma pegadinha a mais: no presente, frases de identidade ou descrição não usam verbo nenhum. “আমি মায়া” é, ao pé da letra, “eu Maya” — sem nada equivalente a “sou”. O verbo “হওয়া” (ser/estar) só aparece em outros tempos ou construções.',
      grammar_examples: [
        ['নমস্কার, আমি মায়া।', 'Oi, eu sou a Maya. (sem verbo “ser”)'],
        ['তোমার নাম কী?', 'Qual é o seu nome? (informal)'],
        ['সে ঢাকা থেকে।', 'Ele/ela é de Dhaka. (sem verbo “ser”)'],
        ['বিদায়, বন্ধু!', 'Tchau, amigo!'],
      ],
      character_guide: [
        ['অ', 'o “ô” fechado, como o “o” de “avó” — a vogal embutida em toda consoante solta (no hindi, essa vogal soa “a”)', 'অ sozinho já soa “ô”'],
        ['আ', 'um “a” aberto e longo', 'নাম (naam, “nome”)'],
        ['ন', 'como o “n” do português', 'নাম (naam, “nome”)'],
        ['ম', 'como o “m” do português', 'আমি (ami, “eu”)'],
        ['হ', 'um “h” soprado, como o “h” do inglês “house”', 'হ্যাঁ (hyan, “sim”)'],
      ],
    },
    lessons: [
      {
        id: 'bn-u1-l1',
        title: 'নমস্কার, ধন্যবাদ, বিদায়',
        kind: 'licao',
        words: ['নমস্কার', 'শুভ সকাল', 'শুভ রাত্রি', 'বিদায়', 'ধন্যবাদ', 'দয়া করে'],
        cloze: [
          { sentence: '___, বন্ধু! তুমি কেমন আছ?', answer: 'নমস্কার', options: ['নমস্কার', 'বিদায়', 'দয়া করে'], translation: 'Oi, amigo! Como você vai?' },
          { sentence: 'এক গ্লাস পানি, ___।', answer: 'দয়া করে', options: ['দয়া করে', 'বিদায়', 'শুভ সকাল'], translation: 'Um copo de água, por favor.' },
          { sentence: '___, বন্ধু!', answer: 'বিদায়', options: ['বিদায়', 'নমস্কার', 'ধন্যবাদ'], translation: 'Tchau, amigo!' },
        ],
        voice: {
          bot: 'নমস্কার! তুমি কেমন আছ?',
          botTranslation: 'Oi! Como vai?',
          expected: ['আমি ভালো, ধন্যবাদ। আর তুমি?', 'আমি ভালো', 'ধন্যবাদ'],
          hint: 'Responda que está bem e devolva a pergunta: “আমি ভালো, ধন্যবাদ। আর তুমি?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em bengali: um de manhã (“শুভ সকাল”), um à noite ao se despedir (“শুভ রাত্রি”) e um “até logo” (“বিদায়”).',
      },
      {
        id: 'bn-u1-l2',
        title: 'আমি, তুমি, সে',
        kind: 'licao',
        words: ['আমি', 'তুমি', 'সে', 'নাম', 'হওয়া', 'শহর'],
        cloze: [
          { sentence: '___ মায়া।', answer: 'আমি', options: ['আমি', 'তুমি', 'সে'], translation: 'Eu sou a Maya. (sem verbo “ser”)' },
          { sentence: 'তোমার ___ কী?', answer: 'নাম', options: ['নাম', 'শহর', 'দেশ'], translation: 'Qual é o seu nome? (informal)' },
          { sentence: '___ ঢাকা থেকে।', answer: 'সে', options: ['সে', 'আমি', 'তুমি'], translation: 'Ele/ela é de Dhaka.' },
        ],
        voice: {
          bot: 'নমস্কার! তোমার নাম কী?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['আমার নাম লীনু। আর তোমার?', 'আমার নাম', 'আর তোমার'],
          hint: 'Diga o seu nome com “আমার নাম …” (sem verbo “ser”!) e devolva a pergunta com “আর তোমার?”.',
        },
        communityPrompt: 'Apresente-se em bengali: diga o seu nome com “আমার নাম …” (sem verbo!) e pergunte o nome de alguém com “তোমার নাম কী?”.',
      },
      {
        id: 'bn-u1-l3',
        title: 'পরীক্ষা: প্রথম পদক্ষেপ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'নমস্কার, আমার নাম গৌরব। তোমার নাম কী, আর তুমি কোথা থেকে?',
          botTranslation: 'Oi, eu me chamo Gaurav. Qual é o seu nome, e de onde você é?',
          expected: ['নমস্কার, আমার নাম লুসিয়া, আর আমি সাও পাওলো থেকে।', 'আমার নাম', 'আমি', 'থেকে'],
          hint: 'Devolva o cumprimento (“নমস্কার”), diga o nome (“আমার নাম …”) e a cidade (“আমি … থেকে”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em bengali: cumprimento, nome com “আমার নাম …”, cidade com “আমি … থেকে” e uma despedida.',
      },
    ],
  },
  {
    id: 'bn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'পরিবার ও বাড়ি',
    emoji: '👪',
    card: {
      id: 'bn-c2',
      title: 'Ter sem um verbo só para “ter”',
      emoji: '🧭',
      history:
        'O vocabulário bengali tem três camadas bem visíveis: palavras “tatsama”, tomadas direto do sânscrito clássico (como “পরিবার”, família, e “ভাষা”, língua); palavras “tadbhava”, herdadas e transformadas do prácrito falado havia séculos (como “মা”, mãe, e “ভাই”, irmão); e empréstimos do persa e do árabe, trazidos pelos sultanatos e pelo império mogol (como “বাবা”, pai informal, “শুরু”, começo, e “চা”, chá — esta, por sua vez, emprestada do persa, que a pegou do chinês). Essa mistura marcou um capítulo trágico e decisivo: em 1952, em Dhaka, estudantes foram mortos pela polícia por protestar pelo direito de usar o bengali como língua oficial do então Paquistão Oriental. A data, 21 de fevereiro, é hoje o Dia Internacional da Língua Materna, reconhecido pela ONU.',
      culture_tip:
        'A família estendida — avós, tios e primos morando perto ou na mesma casa — é central tanto em Bangladesh quanto em Bengala Ocidental. O bengali também exige uma “palavra de medida” entre o numeral e o substantivo: não se diz “এক বই” (um livro), e sim “একটা বই”, com টা grudado no numeral.',
      grammar_why:
        'Ao contrário do hindi, que separa posse de objeto (“के पास”) de posse de parentesco (possessivo direto), o bengali usa a mesma construção para as duas coisas: o possessivo genitivo (“আমার”, meu) mais o verbo existencial “আছে” (existe, há). “আমার একটা ভাই আছে” é, ao pé da letra, “meu um irmão existe” — e serve tanto para “tenho um irmão” quanto, com outro substantivo, para “tenho um livro”.',
      grammar_examples: [
        ['আমার একটা ভাই আছে।', 'Eu tenho um irmão.'],
        ['আমার একটা বই আছে।', 'Eu tenho um livro.'],
        ['আমার পরিবার বড়।', 'A minha família é grande.'],
        ['আমার বাড়ি ছোট।', 'A minha casa é pequena.'],
      ],
      character_guide: [
        ['দ', 'um “d” dental, com a língua tocando os dentes da frente', 'দুধ (dudh, “leite”)'],
        ['ধ', 'o mesmo “d” dental, mas soprado (aspirado)', 'ধন্যবাদ (dhonnobad, “obrigado”)'],
        ['প', 'como o “p” do português, sem soprar', 'পানি (pani, “água”)'],
        ['র', 'um erre batido só uma vez, como no espanhol', 'রুটি (ruti, “pão”)'],
        ['◌ি', 'sinal da vogal “i”: é a única vogal bengali escrita antes da consoante que ela modifica, embora se pronuncie depois', 'বিড়াল (biral, “gato”)'],
      ],
    },
    lessons: [
      {
        id: 'bn-u2-l1',
        title: 'আমার পরিবার',
        kind: 'licao',
        words: ['পরিবার', 'পিতা', 'মা', 'ভাই', 'বোন', 'আছে'],
        cloze: [
          { sentence: 'আমার ___ বড়।', answer: 'পরিবার', options: ['পরিবার', 'পিতা', 'মা'], translation: 'A minha família é grande.' },
          { sentence: 'আমার একটা ___ আছে।', answer: 'ভাই', options: ['ভাই', 'বোন', 'পরিবার'], translation: 'Eu tenho um irmão.' },
          { sentence: 'আমার ___ ঢাকা থেকে।', answer: 'পিতা', options: ['পিতা', 'মা', 'ভাই'], translation: 'O meu pai é de Dhaka.' },
        ],
        voice: {
          bot: 'তোমার কোনো ভাই অথবা বোন আছে?',
          botTranslation: 'Você tem algum irmão ou irmã?',
          expected: ['হ্যাঁ, আমার একটা ভাই আর একটা বোন আছে।', 'আমার … আছে', 'ভাই', 'বোন'],
          hint: 'Responda com “হ্যাঁ, আমার … আছে” ou “না”.',
        },
        communityPrompt: 'Descreva a sua família em bengali: quantos irmãos (ভাই) e irmãs (বোন) você tem, e de onde são os seus pais (পিতা, মা).',
      },
      {
        id: 'bn-u2-l2',
        title: 'বাড়িতে',
        kind: 'licao',
        words: ['বাড়ি', 'পানি', 'রুটি', 'দুধ', 'পনির', 'খাওয়া'],
        cloze: [
          { sentence: 'আমার ___ ছোট।', answer: 'বাড়ি', options: ['বাড়ি', 'পানি', 'রুটি'], translation: 'A minha casa é pequena.' },
          { sentence: 'আমি ___ খাই।', answer: 'পানি', options: ['পানি', 'রুটি', 'পনির'], translation: 'Eu bebo água. (খাওয়া serve para comer e beber)' },
          { sentence: 'আমি ___ আর পনির খাই।', answer: 'রুটি', options: ['রুটি', 'দুধ', 'পানি'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'তুমি সকালে কী খাও?',
          botTranslation: 'O que você come de manhã?',
          expected: ['আমি রুটি আর পনির খাই।', 'আমি … খাই', 'রুটি', 'পনির'],
          hint: 'Diga o que você come com “আমি … খাই”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã, usando “আমি … খাই” (a mesma palavra serve para comer e beber).',
      },
      {
        id: 'bn-u2-l3',
        title: 'পরীক্ষা: পরিবার ও বাড়ি',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'তোমার কোনো ভাই অথবা বোন আছে?',
          botTranslation: 'Você tem algum irmão ou irmã?',
          expected: ['হ্যাঁ, আমার একটা বোন আছে। তার নাম মায়া।', 'আমার … আছে', 'নাম'],
          hint: 'Diga quantos irmãos tem (“আমার … আছে”) e o nome deles (“তার নাম …”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “আমার … আছে”, “নাম …” e “আছে”.',
      },
    ],
  },
];
