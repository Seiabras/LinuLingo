import type { UnitSeed } from '../types';

/**
 * Trilha do uzbeque: as quatro unidades dos níveis A1 e A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Da B1 ao C2 chega depois.
 */
export const UNITS_UZ: UnitSeed[] = [
  {
    id: 'uz-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salom! Birinchi qadamlar',
    emoji: '👋',
    card: {
      id: 'uz-c1',
      title: 'A 2ª maior língua túrquica',
      emoji: '🏛️',
      history:
        'O uzbeque é uma língua túrquica do ramo carlúquico (junto do uigur, seu parente mais próximo), com cerca de 36 milhões de falantes — a segunda língua túrquica mais falada, depois do turco. É a língua oficial do Uzbequistão e sucedeu o chagatai, outra língua carlúquica, como língua literária da região na década de 1920. Até a independência, em 1991, era escrito em cirílico; em 1993 o país aprovou por lei um alfabeto latino, revisado em 1995 para a norma usada até hoje (com os dígrafos “sh”, “ch”, “oʻ” e “gʻ”). Em setembro de 2026 o Senado uzbeque aprovou uma nova reforma, ainda em transição gradual, que troca esses dígrafos por letras únicas (sh→ş, ch→ç, oʻ→ö, gʻ→ğ) num alfabeto de 28 letras.',
      culture_tip:
        'O uzbeque não tem uma palavra só para “irmão” ou “irmã”: existe “aka” (irmão mais velho), “uka” (irmão mais novo), “opa” (irmã mais velha) e “singil” (irmã mais nova) — cada uma marca também o respeito pela ordem de idade. “Aka” e “opa” também servem para tratar com respeito quem não é da família.',
      grammar_why:
        'O uzbeque não tem um verbo separado para “ser”: a pessoa entra como um sufixo preso no fim da própria palavra. “Men oʻqituvchiman” é “eu professor-sou”. Os sufixos são -man (eu), -san (você/tu), nenhum (ele/ela), -miz (nós), -siz (vocês/você formal) e -lar (eles/elas).',
      grammar_examples: [
        ['Men oʻqituvchiman.', 'Eu sou professor(a).'],
        ['Siz oʻqituvchisiz.', 'Você é professor(a) (formal).'],
        ['Ular doʻstlar.', 'Eles são amigos.'],
        ['Men yaxshiman, rahmat.', 'Eu estou bem, obrigado.'],
      ],
      character_guide: [
        ['sh', 'como o “ch” do português em “chá”', 'Toshkent (Tashkent)'],
        ['ch', 'como o “tch” de “tchau”', 'choy (chá)'],
        ['oʻ', 'vogal própria, sem equivalente exato em português (entre o “o” e o “a”)', 'oʻn (dez), doʻst (amigo)'],
        ['gʻ', 'um som gutural, da garganta, vindo de palavras árabes/persas', 'goʻsht (carne)'],
        ['q', 'um “k” dito mais atrás na garganta, diferente de “k”', 'qora (preto)'],
        ['x', 'um som gutural, como o “r” carioca ou o “ch” do alemão “Bach”', 'xayr (tchau)'],
      ],
    },
    lessons: [
      {
        id: 'uz-u1-l1',
        title: 'Salom, rahmat, xayr!',
        kind: 'licao',
        words: ['salom', 'assalomu alaykum', 'rahmat', 'marhamat', 'xayr', 'kechirasiz'],
        cloze: [
          { sentence: '___! Yaxshimisiz?', answer: 'Salom', options: ['Salom', 'Xayr', 'Rahmat'], translation: 'Oi! Como vai?' },
          { sentence: 'Bir choy, ___.', answer: 'marhamat', options: ['marhamat', 'rahmat', 'xayr'], translation: 'Um chá, por favor.' },
          { sentence: '___, doʻstim!', answer: 'Rahmat', options: ['Rahmat', 'Salom', 'Kechirasiz'], translation: 'Obrigado, meu amigo!' },
        ],
        voice: {
          bot: 'Salom! Yaxshimisiz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Men yaxshiman, rahmat!', 'yaxshiman', 'rahmat'],
          hint: 'Responda que está bem com “Men yaxshiman, rahmat!”.',
        },
        communityPrompt: 'Escreva três expressões em uzbeque: uma saudação (“Salom” ou “Assalomu alaykum”), um agradecimento (“Rahmat”) e uma despedida (“Xayr”).',
      },
      {
        id: 'uz-u1-l2',
        title: 'Men, sen, u, biz',
        kind: 'licao',
        words: ['men', 'sen', 'u', 'biz', 'siz', 'ular'],
        cloze: [
          { sentence: '___ oʻqituvchiman.', answer: 'Men', options: ['Men', 'Sen', 'U'], translation: 'Eu sou professor(a).' },
          { sentence: '___ doʻstlar.', answer: 'Ular', options: ['Ular', 'Biz', 'Siz'], translation: 'Eles são amigos.' },
          { sentence: '___ doʻstmiz.', answer: 'Biz', options: ['Biz', 'Ular', 'Sen'], translation: 'Nós somos amigos.' },
        ],
        voice: {
          bot: 'Siz kimsiz?',
          botTranslation: 'Quem é você? (formal)',
          expected: ['Men Linuman.', 'men', 'man'],
          hint: 'Diga quem você é com “Men … -man”.',
        },
        communityPrompt: 'Apresente-se em uzbeque: diga “Men …-man” com seu nome ou profissão.',
      },
      {
        id: 'uz-u1-l3',
        title: 'Test: birinchi qadamlar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Assalomu alaykum! Siz kimsiz?',
          botTranslation: 'Olá! Quem é você?',
          expected: ['Vaalaykum assalom! Men Linuman.', 'vaalaykum assalom', 'men', 'man'],
          hint: 'Responda a saudação (“Vaalaykum assalom!”) e diga quem você é com “Men …-man”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação, quem você é (“Men …-man”) e uma despedida (“Xayr”).',
      },
    ],
  },
  {
    id: 'uz-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Oilam va raqamlar',
    emoji: '👪',
    card: {
      id: 'uz-c2',
      title: 'Mening ismim: a posse com sufixo',
      emoji: '🏷️',
      history:
        'Taşkent, Samarcanda e Bucara — todas no Uzbequistão — foram paradas centrais da Rota da Seda, onde o persa, o árabe e as línguas túrquicas convivem há mais de mil anos. É por isso que boa parte do vocabulário do dia a dia uzbeque, como “oila” (família) e “kitob” (livro), vem do árabe, enquanto a gramática continua totalmente túrquica.',
      culture_tip:
        'Em uzbeque não se diz “o meu nome”: o possessivo entra como sufixo preso na própria palavra. “Ism” é “nome”; “mening ismim” é, letra por letra, “de-mim nome-meu”. A palavra “mening” pode até ser deixada de lado, porque o sufixo já basta.',
      grammar_why:
        'O possessivo tem duas partes: o pronome no genitivo (mening, sening, uning, bizning, sizning, ularning) e um sufixo preso no substantivo. Em palavras terminadas em consoante, os sufixos são -im, -ing, -i, -imiz, -ingiz, -lari (ex.: ism → ismim, isming, ismi…). Em palavras terminadas em vogal, perdem o “i”: -m, -ng, -si, -miz, -ngiz, -lari (ex.: oila → oilam, oilang, oilasi…).',
      grammar_examples: [
        ['Mening ismim Linu.', 'Meu nome é Linu.'],
        ['Bu mening oilam.', 'Esta é a minha família.'],
        ['Bu mening singlim.', 'Esta é a minha irmã mais nova.'],
        ['U mening akam.', 'Ele é o meu irmão mais velho.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uz-u2-l1',
        title: 'Mening oilam',
        kind: 'licao',
        words: ['oila', 'ona', 'ota', 'aka', 'opa', 'bola'],
        cloze: [
          { sentence: 'Bu mening ___.', answer: 'oilam', options: ['oilam', 'onam', 'akam'], translation: 'Esta é a minha família.' },
          { sentence: 'Mening ___ yaxshi.', answer: 'onam', options: ['onam', 'otam', 'oilam'], translation: 'Minha mãe está bem.' },
          { sentence: 'U mening ___.', answer: 'akam', options: ['akam', 'opam', 'bolam'], translation: 'Ele é meu irmão mais velho.' },
        ],
        voice: {
          bot: 'Sizning oilangiz katta mi?',
          botTranslation: 'Sua família é grande?',
          expected: ['Ha, mening oilam katta.', 'mening oilam', 'katta'],
          hint: 'Responda com “Ha, mening oilam katta” ou “Yoʻq, mening oilam kichik”.',
        },
        communityPrompt: 'Descreva sua família em uzbeque: “Mening oilam …” e cite a mãe (ona), o pai (ota) ou um irmão/irmã.',
      },
      {
        id: 'uz-u2-l2',
        title: 'Raqamlar',
        kind: 'licao',
        words: ['bir', 'ikki', 'uch', 'toʻrt', 'besh', 'olti'],
        cloze: [
          { sentence: '___, ikki, uch.', answer: 'Bir', options: ['Bir', 'Besh', 'Olti'], translation: 'Um, dois, três.' },
          { sentence: 'Toʻrt, ___, olti.', answer: 'besh', options: ['besh', 'bir', 'ikki'], translation: 'Quatro, cinco, seis.' },
          { sentence: 'Men ___ doʻstim bor.', answer: 'ikki', options: ['ikki', 'bir', 'uch'], translation: 'Eu tenho dois amigos.' },
        ],
        voice: {
          bot: 'Nechta doʻstingiz bor?',
          botTranslation: 'Quantos amigos você tem?',
          expected: ['Ikki doʻstim bor.', 'doʻstim bor'],
          hint: 'Diga quantos amigos tem com um número e “doʻstim bor” (tenho amigo(s)).',
        },
        communityPrompt: 'Conte de um a seis em uzbeque e escreva quantas pessoas tem na sua família.',
      },
      {
        id: 'uz-u2-l3',
        title: 'Test: oila va raqamlar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Oilangiz haqida gapiring: sizning oilangiz katta mi?',
          botTranslation: 'Conte sobre sua família: sua família é grande?',
          expected: ['Mening oilam katta. Men ikki akam bor.', 'mening oilam', 'bor'],
          hint: 'Diga se sua família é grande/pequena (“mening oilam katta/kichik”) e quantos irmãos tem.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e os números que aprendeu, usando “mening … -m/-im” e “bor”.',
      },
    ],
  },
  {
    id: 'uz-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Shaharda',
    emoji: '🏙️',
    card: {
      id: 'uz-c3',
      title: 'Kelishiklar: -ga, -da va -ni',
      emoji: '🧭',
      history:
        'O Uzbequistão tem um clima continental seco: verões muito quentes no deserto de Kizilkum e invernos frios, com pouca chuva (yomgʻir) ao longo do ano. Nesta unidade você aprende três sufixos de caso essenciais pra se mover pela cidade: o dativo “-ga” (destino, “para”), o locativo “-da” (“em, dentro de”) e o acusativo “-ni” (objeto definido).',
      culture_tip:
        'Perguntar onde fica a escola, a loja ou o hospital mais próximo é uma das primeiras coisas úteis numa cidade nova: “Maktab qayda?”, “Kasalxona qayda?”. A resposta normalmente já vem com o locativo: “Maktab shaharda” (a escola fica na cidade).',
      grammar_why:
        'O dativo “-ga” (com as variantes “-ka”/“-qa” depois de palavras terminadas em “-k”/“-q”) marca destino: “maktabga” (para a escola). O locativo “-da” marca onde algo está ou acontece: “maktabda” (na escola). O acusativo “-ni”, sempre igual, sem harmonia vocálica, marca o objeto direto quando é definido, específico: “kitobni” (o livro).',
      grammar_examples: [
        ['Men maktabga boraman.', 'Eu vou para a escola.'],
        ['Men kasalxonada ishlayman.', 'Eu trabalho num hospital.'],
        ['Men kitobni oʻqiyapman.', 'Eu estou lendo o livro.'],
        ['Yangi koʻylak xohlayman.', 'Eu quero uma camisa nova.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uz-u3-l1',
        title: 'Shaharda',
        kind: 'licao',
        words: ['maktab', 'kasalxona', 'doʻkon', 'koʻcha', 'shifokor', 'uy'],
        cloze: [
          { sentence: 'Men ___ boraman.', answer: 'maktabga', options: ['maktabga', 'maktabda', 'maktabdan'], translation: 'Eu vou para a escola.' },
          { sentence: 'Men ___ ishlayman.', answer: 'kasalxonada', options: ['kasalxonada', 'kasalxonaga', 'kasalxonadan'], translation: 'Eu trabalho num hospital.' },
          { sentence: 'Mening otam ___.', answer: 'shifokor', options: ['shifokor', 'talaba', 'oshpaz'], translation: 'Meu pai é médico.' },
        ],
        voice: {
          bot: 'Maktab qayda?',
          botTranslation: 'Onde fica a escola?',
          expected: ['Maktab shaharda, shu koʻchada.', 'maktab', 'koʻchada'],
          hint: 'Diga onde é a escola com “Maktab…” e use “shu koʻchada” (nesta rua).',
        },
        communityPrompt: 'Descreva o seu bairro em uzbeque: a escola, a loja ou o hospital mais próximo, usando “-ga”, “-da” ou “-dan”.',
      },
      {
        id: 'uz-u3-l2',
        title: 'Kiyim va ob-havo',
        kind: 'licao',
        words: ['koʻylak', 'shim', 'poyabzal', 'palto', 'yomgʻir', 'quyosh'],
        cloze: [
          { sentence: 'Mening ___ oq.', answer: 'koʻylagim', options: ['koʻylagim', 'shimim', 'paltom'], translation: 'A minha camisa é branca.' },
          { sentence: 'Mening ___ qora.', answer: 'shimim', options: ['shimim', 'poyabzalim', 'koʻylagim'], translation: 'A minha calça é preta.' },
          { sentence: 'Bugun ___ bor.', answer: 'yomgʻir', options: ['yomgʻir', 'quyosh', 'shamol'], translation: 'Hoje está chovendo.' },
        ],
        voice: {
          bot: 'Poyabzalingiz qanday?',
          botTranslation: 'Como é o seu sapato?',
          expected: ['Poyabzalim yangi.', 'poyabzalim', 'yangi'],
          hint: 'Descreva o seu sapato com “Poyabzalim…” (meu sapato).',
        },
        communityPrompt: 'Descreva três peças de roupa que você está usando hoje: “Koʻylagim/Shimim/Poyabzalim…”.',
      },
      {
        id: 'uz-u3-l3',
        title: 'Test: shaharda',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qayerda ishlaysiz va bugun ob-havo qalay?',
          botTranslation: 'Onde você trabalha e como está o tempo hoje?',
          expected: ['Maktabda ishlayman. Bugun quyosh bor.', 'maktabda', 'quyosh'],
          hint: 'Diga onde trabalha com “-da ishlayman” e descreva o tempo.',
        },
        communityPrompt: 'Escreva cinco frases misturando lugares da cidade, roupas e o tempo, usando os sufixos de caso que você aprendeu.',
      },
    ],
  },
  {
    id: 'uz-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kasblar, his-tuygʻular va oʻtgan kun',
    emoji: '💼',
    card: {
      id: 'uz-c4',
      title: 'Oʻtgan zamon va kerak/mumkin',
      emoji: '⏳',
      history:
        'O uzbeque tem dois jeitos de marcar uma ação em andamento: o sufixo “-yap-”, mais falado e coloquial (o que o pacote usa desde a unidade 2), e o sufixo mais formal e literário “-moqda”, mais comum na escrita — os dois com o mesmo sentido, só muda o registro.',
      culture_tip:
        'Perguntar “Ishingiz nima?” (qual é o seu trabalho?) é uma forma comum de conhecer a profissão de alguém numa conversa.',
      grammar_why:
        'O passado simples junta a raiz do verbo, o sufixo “-di” e um sufixo de pessoa: “keldim” (eu vim). Atenção à 3ª pessoa do plural, que leva “-dilar”, não só “-di”: “ular keldilar” (eles vieram). Pra necessidade, o uzbeque usa “kerak” (preciso) depois de um verbo com sufixo possessivo: “borishim kerak” (eu preciso ir); pra permissão/possibilidade, usa “mumkin” do mesmo jeito: “borishim mumkin” (eu posso ir).',
      grammar_examples: [
        ['Men kasalxonada ishladim.', 'Eu trabalhei num hospital.'],
        ['Ular kecha keldilar.', 'Eles vieram ontem.'],
        ['Men maktabga borishim kerak.', 'Eu preciso ir para a escola.'],
        ['Siz uyga borishingiz mumkin.', 'Você pode ir para casa.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'uz-u4-l1',
        title: 'Kasblar va his-tuygʻular',
        kind: 'licao',
        words: ['shifokor', 'talaba', 'oshpaz', 'xursand', 'xafa', 'charchagan'],
        cloze: [
          { sentence: 'Mening otam ___.', answer: 'shifokor', options: ['shifokor', 'talaba', 'oshpaz'], translation: 'Meu pai é médico.' },
          { sentence: 'Men juda ___.', answer: 'xursandman', options: ['xursandman', 'xafaman', 'ochman'], translation: 'Eu estou muito feliz.' },
          { sentence: 'Biz ___.', answer: 'charchaganmiz', options: ['charchaganmiz', 'xursandmiz', 'ochmiz'], translation: 'Nós estamos cansados.' },
        ],
        voice: {
          bot: 'Ishingiz qalay?',
          botTranslation: 'Como está o seu trabalho?',
          expected: ['Yaxshi, men talabaman va xursandman.', 'talabaman', 'xursandman'],
          hint: 'Diga a sua profissão com “…-man” e como você se sente.',
        },
        communityPrompt: 'Conte a sua profissão (ou a de alguém da família) e como você está hoje, usando “-man” e uma palavra de sentimento.',
      },
      {
        id: 'uz-u4-l2',
        title: 'Kecha va kerak',
        kind: 'licao',
        words: ['yigirma', 'oʻttiz', 'ellik', 'yuz', 'kerak', 'mumkin'],
        cloze: [
          { sentence: 'Men kecha ___.', answer: 'keldim', options: ['keldim', 'kelaman', 'kelayapman'], translation: 'Eu vim ontem.' },
          { sentence: 'Men maktabga borishim ___.', answer: 'kerak', options: ['kerak', 'mumkin', 'emas'], translation: 'Eu preciso ir para a escola.' },
          { sentence: 'Mening ___ yoshim bor.', answer: 'oʻttiz', options: ['oʻttiz', 'ellik', 'yuz'], translation: 'Eu tenho trinta anos.' },
        ],
        voice: {
          bot: 'Kecha nima qildingiz?',
          botTranslation: 'O que você fez ontem?',
          expected: ['Men ishladim va keldim.', 'ishladim', 'keldim'],
          hint: 'Conte o que fez ontem com o passado: “…-dim”.',
        },
        communityPrompt: 'Escreva três frases usando “kerak” ou “mumkin”, e diga a sua idade com um número novo.',
      },
      {
        id: 'uz-u4-l3',
        title: 'Test: kasblar, his-tuygʻular va oʻtgan kun',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Oʻtgan hafta nima qildingiz va ishingiz nima?',
          botTranslation: 'O que você fez na semana passada, e qual é o seu trabalho?',
          expected: ['Kasalxonada ishladim. Men shifokorman.', 'ishladim', 'shifokorman'],
          hint: 'Use o passado (“…ishladim”) e diga a sua profissão (“…-man”).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando a sua profissão, como você está e o que você fez ontem, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
