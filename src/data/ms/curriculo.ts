import type { UnitSeed } from '../types';

/**
 * Trilha do malaio (padrão da Malásia): por enquanto só as duas unidades do nível A1 (pacote
 * incompleto — ver `incomplete` em index.ts). As fontes de cada palavra estão em vocabulario.ts.
 *
 * Fontes dos fatos dos cartões de cultura (só aqui nos comentários, nunca no texto do aluno):
 * - en.wikipedia.org/wiki/Malay_language (texto-fonte): o malaio clássico como língua franca no
 *   Sultanato de Malaca (1402–1511) e a tomada de Malaca pelos portugueses em 1511; o artigo 152 da
 *   Constituição da Malásia (1957); a Constituição de Brunei de 1959 definindo o «Bahasa Melayu» como
 *   língua oficial; o Rumi (alfabeto latino) e o Jawi (escrita árabe) co-oficiais em Brunei e na
 *   Malásia, com o latino como o mais usado; empréstimos do português, do neerlandês e do inglês.
 * - en.wikipedia.org/wiki/Malaysian_Malay: os nomes «Bahasa Melayu» e «Bahasa Malaysia»; a Dewan
 *   Bahasa dan Pustaka como órgão regulador na Malásia (e a DBP de Brunei e o Majlis Bahasa Melayu
 *   Singapura nos outros dois países).
 * - en.wikipedia.org/wiki/Dewan_Bahasa_dan_Pustaka: fundada em 22 de junho de 1956, em Johor Bahru.
 * - en.wikipedia.org/wiki/Jawi_script: o Jawi é uma das duas escritas oficiais de Brunei; na Malásia,
 *   protegido pela Lei da Língua Nacional de 1963/67 e usado em contextos religiosos e culturais, com
 *   placas obrigatórias em Jawi em estados como Kelantan e Terengganu; aparece nas cédulas do ringgit
 *   e do dólar de Brunei.
 * - en.wikipedia.org/wiki/Comparison_of_Indonesian_and_Standard_Malay: a divisão pelo Tratado
 *   Anglo-Neerlandês de 1824 (Malásia com empréstimos do inglês, Indonésia do neerlandês); a
 *   ortografia unificada de 1972 (antes, a Malásia escrevia «ch» e a Indonésia «tj» para o som de
 *   «tch»); os cumprimentos «selamat petang» (Malásia) × «selamat sore» (Indonésia); pejabat × kantor.
 * - Wikivoyage, Malay phrasebook: o «tch» do c, o «ng» sem g duro, o ny, o k final como parada
 *   glotal, o «a» final que vira um «â» abafado (schwa) em Singapura e na maior parte da Malásia
 *   peninsular (mas não em Kedah, na Malásia oriental e em Brunei); o tratamento Encik/Puan, Abang/
 *   Kakak, Adik; a ordem das palavras («kereta saya», «rumah kami», «buku ini», «Ini buku»); o
 *   tempo marcado por advérbios («saya makan», «saya sudah makan», «saya akan makan»).
 */
export const UNITS_MS: UnitSeed[] = [
  {
    id: 'ms-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hai, apa khabar? Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'ms-c1',
      title: 'Bahasa Melayu: uma língua, três países',
      emoji: '🗺️',
      history:
        'O malaio (bahasa Melayu) é a língua oficial da Malásia e de Brunei e uma das quatro línguas oficiais de Singapura. Entre 1402 e 1511, no Sultanato de Malaca, ele já era a língua do comércio por todo o arquipélago, até os portugueses tomarem a cidade em 1511. Na Malásia, a língua também é chamada oficialmente de bahasa Malaysia, e quem cuida da norma é a Dewan Bahasa dan Pustaka, fundada em 1956. O indonésio é a outra norma padrão da mesma língua: os dois se entendem bem, mas mudam em muitas palavras — e é por isso que este curso ensina o malaio da Malásia, com as palavras de lá. O curso usa o alfabeto latino (Rumi), o mais usado hoje; a escrita tradicional é o Jawi, de base árabe, que continua oficial em Brunei e aparece nas cédulas do ringgit.',
      culture_tip:
        '“Apa khabar?” (como vai?) quer dizer, ao pé da letra, “que notícia?”, e a resposta é “khabar baik” (notícia boa). O cumprimento muda com a hora: “selamat pagi” de manhã, “selamat petang” à tarde e “selamat malam” à noite. Na despedida, quem vai embora diz “selamat tinggal” e quem fica responde “selamat jalan” (boa viagem). Com adultos desconhecidos, use “Encik” (senhor) ou “Puan” (senhora) antes do nome.',
      grammar_why:
        'O malaio não conjuga verbos nem tem gênero: “saya makan” (eu como), “awak makan” (você come) e “dia makan” (ele ou ela come) usam a mesma palavra “makan”. O tempo fica por conta de palavrinhas antes do verbo: “saya sudah makan” (eu já comi), “saya akan makan” (eu vou comer). E “dia” serve tanto para “ele” quanto para “ela”.',
      grammar_examples: [
        ['Saya dari Brazil.', 'Eu sou do Brasil.'],
        ['Awak dari mana?', 'De onde você é?'],
        ['Dia dari Kuala Lumpur.', 'Ele/ela é de Kuala Lumpur.'],
        ['Saya sudah makan.', 'Eu já comi.'],
      ],
      character_guide: [
        ['c', 'sempre “tch”, como em “tchau”', 'kucing (gato)'],
        ['ng', 'um som nasal só, como em “bingo” sem o g; nunca “n” + “g” duro', 'petang (tarde)'],
        ['ny', 'como o nh do português', 'nyanyi (cantar)'],
        ['j', 'como o “dj” de “adjetivo”, nunca como o j do português', 'juga (também)'],
        ['k no fim', 'uma paradinha na garganta, sem soltar o “k”', 'tidak (não)'],
        ['a no fim', 'na maior parte da Malásia peninsular soa abafado, quase um “â”', 'nama (nome), saya (eu)'],
      ],
    },
    lessons: [
      {
        id: 'ms-u1-l1',
        title: 'Hai, selamat pagi, terima kasih!',
        kind: 'licao',
        words: ['hai', 'selamat pagi', 'selamat petang', 'selamat malam', 'selamat tinggal', 'terima kasih'],
        cloze: [
          { sentence: '___, apa khabar?', answer: 'Hai', options: ['Hai', 'Terima kasih', 'Selamat tinggal'], translation: 'Oi, como vai?' },
          { sentence: 'Sudah malam: ___!', answer: 'selamat malam', options: ['selamat malam', 'selamat pagi', 'selamat petang'], translation: 'Já é noite: boa noite!' },
          { sentence: '— ___! — Sama-sama!', answer: 'Terima kasih', options: ['Terima kasih', 'Selamat pagi', 'Hai'], translation: '— Obrigado! — De nada!' },
        ],
        voice: {
          bot: 'Hai! Apa khabar?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Khabar baik, terima kasih!', 'khabar baik', 'terima kasih'],
          hint: 'Responda com “khabar baik” (tudo bem) e agradeça com “terima kasih”.',
        },
        communityPrompt: 'Escreva três cumprimentos em malaio: um de manhã (“Selamat pagi…”), um à tarde (“Selamat petang…”) e uma despedida de quem vai embora (“Selamat tinggal…”).',
      },
      {
        id: 'ms-u1-l2',
        title: 'Saya, awak, dia',
        kind: 'licao',
        words: ['saya', 'awak', 'anda', 'dia', 'nama', 'dari mana'],
        cloze: [
          { sentence: '___ dari Brazil.', answer: 'Saya', options: ['Saya', 'Awak', 'Dia'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Awak ___?', answer: 'dari mana', options: ['dari mana', 'nama', 'dia'], translation: 'De onde você é?' },
          { sentence: 'Siapa ___ awak?', answer: 'nama', options: ['nama', 'dari mana', 'dia'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Hai! Siapa nama awak?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Nama saya Ana. Nama awak?', 'nama saya'],
          hint: 'Diga o seu nome com “Nama saya…” e devolva a pergunta: “Nama awak?”.',
        },
        communityPrompt: 'Apresente-se em malaio: o seu nome com “Nama saya…” e de onde você é com “Saya dari…”. Depois pergunte a mesma coisa com “anda”, do jeito formal.',
      },
      {
        id: 'ms-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hai! Nama saya Aminah. Siapa nama awak, dan awak dari mana?',
          botTranslation: 'Oi! Meu nome é Aminah. Qual é o seu nome, e de onde você é?',
          expected: ['Hai! Nama saya Lucia, dan saya dari Brazil.', 'nama saya', 'saya dari'],
          hint: 'Devolva o cumprimento (“Hai!”), diga o seu nome com “Nama saya…” e a origem com “saya dari…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Nama saya…”, origem com “Saya dari…” e uma despedida com “Selamat tinggal”.',
      },
    ],
  },
  {
    id: 'ms-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Keluarga dan bandar',
    emoji: '👪',
    card: {
      id: 'ms-c2',
      title: 'Kereta é carro: o malaio da Malásia e o indonésio',
      emoji: '🚗',
      history:
        'Em 1824, um tratado entre britânicos e neerlandeses dividiu o mundo malaio: a Malásia, Singapura e Brunei ficaram do lado britânico e a Indonésia do lado neerlandês. Por isso, as palavras novas vieram de fontes diferentes: na Malásia, do inglês — “bas” (ônibus), “teksi” (táxi), “polis” (polícia), “basikal” (bicicleta) —; na Indonésia, do neerlandês — “bus”, “taksi”, “polisi”, “sepeda”. Até a ortografia era diferente: o som de “tch” se escrevia “ch” na Malásia e “tj” na Indonésia, até a grafia comum de 1972, que trocou os dois por “c”. Mais antigas ainda são as palavras que vieram do português e continuam em uso: “sekolah” (escola), “meja” (mesa), “bendera” (bandeira) e “kereta” (de “carreta”), que na Malásia é o carro.',
      culture_tip:
        'Na Malásia, é comum chamar as pessoas como se fossem da família: “abang” (irmão mais velho) para um homem um pouco mais velho, “kakak” ou “kak” (irmã mais velha) para uma mulher um pouco mais velha, e “adik” para alguém mais novo. Com adultos que você não conhece, “Encik” (senhor) e “Puan” (senhora) são sempre uma escolha segura.',
      grammar_why:
        'Em malaio, quem descreve vem DEPOIS do substantivo: “kereta saya” (o meu carro, ao pé da letra “carro eu”), “rumah kami” (a nossa casa), “kereta merah” (carro vermelho), “kereta ini” (este carro). Inverter muda o sentido: “ini kereta” quer dizer “isto é um carro”. O plural quase nunca aparece: “Dia ada tiga anak” (ele tem três filhos), sem nada que marque o plural depois do número.',
      grammar_examples: [
        ['kereta saya', 'o meu carro'],
        ['Kereta ini besar.', 'Este carro é grande.'],
        ['Rumah kami kecil.', 'A nossa casa é pequena. (kami: sem incluir quem ouve)'],
        ['Dia ada tiga anak.', 'Ele/ela tem três filhos.'],
      ],
      character_guide: [
        ['kh', 'como o r carioca de “carro” (raspado na garganta); muita gente fala só “k”', 'khabar (notícia)'],
        ['sy', 'como o “ch” de “chá”', 'televisyen (televisão)'],
        ['ngg', '“ng” seguido de um g duro, como em “manga”', 'tinggal (morar)'],
        ['e', 'tem dois sons: quase sempre um “e” fraco e abafado; em algumas palavras, um “é” aberto', 'selamat (abafado), teksi (é)'],
      ],
    },
    lessons: [
      {
        id: 'ms-u2-l1',
        title: 'Keluarga saya',
        kind: 'licao',
        words: ['keluarga', 'emak', 'bapa', 'abang', 'kakak', 'adik'],
        cloze: [
          { sentence: '___ saya dari Johor.', answer: 'Emak', options: ['Emak', 'Keluarga', 'Adik'], translation: 'A minha mãe é de Johor.' },
          { sentence: 'Saya ada seorang ___.', answer: 'abang', options: ['abang', 'kakak', 'bapa'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: 'Saya ada dua ___.', answer: 'adik', options: ['adik', 'emak', 'bapa'], translation: 'Eu tenho dois irmãos mais novos.' },
        ],
        voice: {
          bot: 'Awak ada abang atau kakak?',
          botTranslation: 'Você tem irmão mais velho ou irmã mais velha?',
          expected: ['Ya, saya ada seorang abang dan seorang kakak.', 'saya ada', 'abang', 'kakak'],
          hint: 'Responda com “Saya ada…” (eu tenho…) e diga quantos: “seorang abang” (um irmão mais velho), “seorang kakak” (uma irmã mais velha).',
        },
        communityPrompt: 'Descreva a sua família em malaio: se você tem abang, kakak ou adik, e de onde são a sua emak e o seu bapa.',
      },
      {
        id: 'ms-u2-l2',
        title: 'Di bandar',
        kind: 'licao',
        words: ['kereta', 'bas', 'teksi', 'kedai', 'tandas', 'boleh'],
        cloze: [
          { sentence: '___ saya merah.', answer: 'Kereta', options: ['Kereta', 'Tandas', 'Kedai'], translation: 'O meu carro é vermelho.' },
          { sentence: 'Maaf, di mana ___?', answer: 'tandas', options: ['tandas', 'teksi', 'bas'], translation: 'Com licença, onde fica o banheiro?' },
          { sentence: '___ saya masuk?', answer: 'Boleh', options: ['Boleh', 'Kedai', 'Bas'], translation: 'Posso entrar?' },
        ],
        voice: {
          bot: 'Awak mahu pergi ke mana?',
          botTranslation: 'Aonde você quer ir?',
          expected: ['Saya mahu pergi ke kedai.', 'saya mahu pergi', 'kedai'],
          hint: 'Use “Saya mahu pergi ke…” (eu quero ir a…) e um lugar: “kedai” (loja), “sekolah” (escola), “pejabat” (escritório).',
        },
        communityPrompt: 'Conte como você anda pela sua cidade: de kereta, de bas, de teksi ou de basikal? E onde fica a kedai mais perto?',
      },
      {
        id: 'ms-u2-l3',
        title: 'Prova: keluarga dan bandar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Keluarga awak besar? Awak tinggal di mana?',
          botTranslation: 'A sua família é grande? Onde você mora?',
          expected: ['Keluarga saya ada empat orang: emak, bapa, abang dan saya. Kami tinggal di Brazil.', 'keluarga saya', 'tinggal di'],
          hint: 'Diga quantas pessoas há na família com “Keluarga saya ada… orang”, nomeie os parentes e diga onde mora com “Kami tinggal di…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua família e a sua cidade, usando pelo menos três palavras desta unidade (como kereta, kedai, abang ou kakak).',
      },
    ],
  },
];
