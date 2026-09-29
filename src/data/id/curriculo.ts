import type { UnitSeed } from '../types';

/**
 * Trilha do indonésio: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_ID: UnitSeed[] = [
  {
    id: 'id-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halo! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'id-c1',
      title: 'Uma língua sem conjugação nem gênero',
      emoji: '🗺️',
      history:
        'O indonésio (bahasa Indonesia) é a língua oficial da Indonésia, baseada no malaio, e foi adotada como símbolo de unidade nacional no Juramento da Juventude de 1928 — um país com mais de 700 línguas locais escolheu uma língua franca comum para se unir. Hoje é falada por mais de 270 milhões de pessoas, a maioria como segunda língua além da sua língua materna regional (javanês, sundanês, e outras).',
      culture_tip:
        'Além de «halo», os indonésios cumprimentam pelo horário do dia: «selamat pagi» (bom dia), «selamat siang» (por volta do meio-dia), «selamat sore» (fim de tarde) e «selamat malam» (boa noite). «Terima kasih» é obrigado; a resposta mais comum é «sama-sama» (de nada). O tratamento é geralmente respeitoso: usa-se «Bapak» (senhor) ou «Ibu» (senhora) antes do nome com pessoas mais velhas ou desconhecidas.',
      grammar_why:
        'O indonésio não conjuga verbos! Não há formas diferentes para eu/você/ele: «saya makan» (eu como), «kamu makan» (você come) e «dia makan» (ele/ela come) usam exatamente a mesma palavra «makan». Também não existe artigo definido/indefinido nem gênero gramatical. E «dia» serve tanto para «ele» quanto para «ela» — o indonésio não distingue gênero nos pronomes.',
      grammar_examples: [
        ['Saya dari Brasil.', 'Eu sou do Brasil.'],
        ['Kamu dari mana?', 'De onde você é?'],
        ['Dia dari Jakarta.', 'Ele/ela é de Jacarta.'],
        ['Kami dari Brasil.', 'Nós somos do Brasil. (kami: sem incluir quem ouve)'],
      ],
      character_guide: [
        ['c', 'sempre como o "tch" de "tchau"', 'cinta (amor), kucing (gato)'],
        ['ng', 'som nasal único, como o "ng" de "sing" em inglês, nunca "n" + "g" separados', 'senang (feliz), Bandung'],
        ['ny', 'como o nh do português', 'nyonya (senhora)'],
        ['j', 'como o "dj" de "adjetivo", nunca como o j do português', 'jam (hora), juga (também)'],
        ['e (com schwa)', 'na maioria das palavras, um "e" bem fraco e neutro, quase mudo', 'selamat (a primeira sílaba soa "sluh")'],
      ],
    },
    lessons: [
      {
        id: 'id-u1-l1',
        title: 'Halo, terima kasih, selamat tinggal!',
        kind: 'licao',
        words: ['halo', 'selamat pagi', 'selamat sore', 'selamat malam', 'selamat tinggal', 'terima kasih'],
        cloze: [
          { sentence: '___, Rina! Apa kabar?', answer: 'Halo', options: ['Halo', 'Terima kasih', 'Selamat tinggal'], translation: 'Oi, Rina! Como você está?' },
          { sentence: 'Sudah malam: ___!', answer: 'selamat malam', options: ['selamat malam', 'selamat pagi', 'selamat sore'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ atas bantuannya!', answer: 'Terima kasih', options: ['Terima kasih', 'Selamat tinggal', 'Halo'], translation: 'Obrigado pela ajuda!' },
        ],
        voice: {
          bot: 'Halo! Apa kabar?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Baik, terima kasih! Kamu?', 'baik', 'terima kasih'],
          hint: 'Responda que está bem com «baik» e devolva a pergunta: «Baik, terima kasih! Kamu?».',
        },
        communityPrompt: 'Escreva três cumprimentos em indonésio: um de manhã («Selamat pagi…»), um à noite («Selamat malam…») e uma despedida com «Selamat tinggal» ou «Sampai jumpa».',
      },
      {
        id: 'id-u1-l2',
        title: 'Saya, kamu, dia',
        kind: 'licao',
        words: ['saya', 'kamu', 'dia', 'kami', 'nama', 'dari mana'],
        cloze: [
          { sentence: '___ dari Brasil.', answer: 'Saya', options: ['Saya', 'Kamu', 'Dia'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Kamu ___?', answer: 'dari mana', options: ['dari mana', 'nama', 'kami'], translation: 'De onde você é?' },
          { sentence: 'Siapa ___ kamu?', answer: 'nama', options: ['nama', 'dari mana', 'dia'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Halo! Siapa namamu?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Nama saya Ana. Kamu?', 'nama saya', 'kamu'],
          hint: 'Diga o seu nome com «Nama saya…» e devolva a pergunta com «Kamu?».',
        },
        communityPrompt: 'Apresente-se em indonésio: diga o seu nome com «Nama saya…» e pergunte o nome de outra pessoa com «Siapa namamu?».',
      },
      {
        id: 'id-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Halo! Nama saya Budi. Siapa namamu, dan kamu dari mana?',
          botTranslation: 'Oi! Meu nome é Budi. Qual é o seu nome, e de onde você é?',
          expected: ['Halo! Nama saya Lucia, dan saya dari Brasil. Senang bertemu denganmu!', 'nama saya', 'saya dari', 'halo'],
          hint: 'Devolva o cumprimento («Halo!»), diga o seu nome com «Nama saya…», a origem com «Saya dari…» e feche com «Senang bertemu denganmu!».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Nama saya…», origem com «Saya dari…» e uma despedida.',
      },
    ],
  },
  {
    id: 'id-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Keluarga dan rumah',
    emoji: '👪',
    card: {
      id: 'id-c2',
      title: 'Kakak e adik: irmãos pela idade, não pelo sexo',
      emoji: '🧭',
      history:
        'Uma das coisas mais surpreendentes do indonésio para quem fala português: não existem palavras separadas para «irmão» e «irmã». Em vez disso, «kakak» é qualquer irmão MAIS VELHO (seja homem ou mulher) e «adik» é qualquer irmão MAIS NOVO (seja homem ou mulher). Para especificar o sexo, quando necessário, acrescenta-se «laki-laki» (homem) ou «perempuan» (mulher): «kakak laki-laki» é o irmão mais velho especificamente.',
      culture_tip:
        'A família estendida é muito valorizada na Indonésia, e «kakak» também é usado como forma de tratamento respeitoso para alguém um pouco mais velho, mesmo sem parentesco — parecido com chamar alguém de «mano» mais velho no Brasil, mas de um jeito mais formal e cotidiano.',
      grammar_why:
        'O plural em indonésio, quando precisa ser marcado, se faz repetindo a palavra: «buku» (livro) → «buku-buku» (livros). Mas na maioria das frases, o contexto já deixa claro se é singular ou plural, e a palavra não muda nada — bem diferente do -s do português.',
      grammar_examples: [
        ['Keluarga saya besar.', 'A minha família é grande.'],
        ['Saya punya satu kakak dan satu adik.', 'Eu tenho um irmão mais velho e um irmão mais novo.'],
        ['Saya suka kopi ini.', 'Eu gosto deste café.'],
        ['anak-anak', 'crianças (plural de "anak", criança, pela repetição)'],
      ],
      character_guide: [
        ['kh', 'som raspado na garganta, como o "j" espanhol', 'khusus (especial)'],
        ['sy', 'como o "sh" inglês', 'syarat (condição)'],
      ],
    },
    lessons: [
      {
        id: 'id-u2-l1',
        title: 'Keluarga saya',
        kind: 'licao',
        words: ['keluarga', 'ibu', 'ayah', 'kakak', 'adik', 'punya'],
        cloze: [
          { sentence: '___ saya dari Bandung.', answer: 'Ibu', options: ['Ibu', 'Ayah', 'Keluarga'], translation: 'A minha mãe é de Bandung.' },
          { sentence: 'Saya ___ satu kakak dan satu adik.', answer: 'punya', options: ['punya', 'suka', 'tahu'], translation: 'Eu tenho um irmão mais velho e um irmão mais novo.' },
          { sentence: '___ saya bernama Budi.', answer: 'Kakak', options: ['Kakak', 'Adik', 'Ayah'], translation: 'O meu irmão mais velho se chama Budi.' },
        ],
        voice: {
          bot: 'Kamu punya kakak atau adik?',
          botTranslation: 'Você tem irmãos mais velhos ou mais novos?',
          expected: ['Ya, saya punya satu kakak dan satu adik.', 'saya punya', 'kakak', 'adik'],
          hint: 'Responda com «Saya punya…» e o número/tipo de irmãos, ou «Saya tidak punya kakak atau adik» se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em indonésio: quantos kakak/adik você tem, e como se chamam os seus pais.',
      },
      {
        id: 'id-u2-l2',
        title: 'Di rumah',
        kind: 'licao',
        words: ['rumah', 'air', 'roti', 'kopi', 'suka', 'bagus'],
        cloze: [
          { sentence: '___ saya kecil tapi sangat bagus.', answer: 'Rumah', options: ['Rumah', 'Keluarga', 'Air'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'Satu gelas ___, tolong.', answer: 'air', options: ['air', 'roti', 'kopi'], translation: 'Um copo de água, por favor.' },
          { sentence: 'Saya sangat ___ kopi ini.', answer: 'suka', options: ['suka', 'punya', 'tahu'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Kamu suka kopi Indonesia?',
          botTranslation: 'Você gosta do café indonésio?',
          expected: ['Ya, saya suka sekali, sangat bagus!', 'saya suka', 'sangat bagus'],
          hint: 'Use «saya suka» (eu gosto) e o adjetivo «bagus» para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'id-u2-l3',
        title: 'Prova: keluarga dan rumah',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ceritakan tentang keluargamu: berapa orang, dan bagaimana rumahmu?',
          botTranslation: 'Me conte sobre a sua família: quantas pessoas, e como é a sua casa?',
          expected: ['Keluarga saya ada empat orang: ibu, ayah, kakak saya, dan saya. Rumah kami kecil tapi sangat bagus.', 'keluarga saya', 'rumah kami'],
          hint: 'Diga quantas pessoas há na família, nomeie alguns parentes e descreva a casa com «rumah kami…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
