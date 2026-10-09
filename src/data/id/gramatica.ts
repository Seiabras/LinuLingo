import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do indonésio — A1 completo, mais A2 (g5-g7). Fontes das construções do A2:
 * Wikcionário em inglês (en.wiktionary.org, verbetes "sudah", "belum", "akan", "lebih", "paling",
 * "daripada" e "yang": partículas de tempo/aspecto, comparativo e a oração relativa).
 */
export const GRAMMAR_ID: GrammarTopic[] = [
  {
    id: 'id-g1',
    level: 'A1.1',
    title: 'Pronúncia: c, ng, ny e j',
    emoji: '🔤',
    summary: 'O indonésio se escreve quase como se lê, mas quatro combinações de letras têm som próprio, diferente do português.',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['c', 'sempre "tch", nunca "k" ou "s"', 'cinta [ˈtʃinta] (amor)'],
            ['ng', 'som nasal único, como o "ng" de "sing" em inglês', 'senang [səˈnaŋ] (feliz)'],
            ['ny', 'como o nh do português', 'nyonya [ˈɲoɲa] (senhora)'],
            ['j', 'como o "dj", nunca como o j do português', 'jam [dʒam] (hora)'],
          ],
        },
        examples: [
          ['Apa kabar?', 'Como você está?'],
          ['Saya senang belajar bahasa Indonesia.', 'Eu estou feliz de aprender indonésio.'],
        ],
      },
    ],
    pitfalls: ['Ler o "c" como "k" ou "s": em indonésio é sempre "tch".', 'Ler o "j" como o j do português: soa "dj", como em "jam" (hora).'],
    quiz: [{ question: 'Como soa o "c" em "cinta" (amor)?', options: ['"tch"', '"k"', '"s"'], answer: '"tch"', explanation: 'O c indonésio soa sempre como "tch", nunca como "k" ou "s".' }],
  },
  {
    id: 'id-g2',
    level: 'A1.1',
    title: 'Sem conjugação, sem gênero',
    emoji: '🙋',
    summary: 'O verbo indonésio nunca muda de forma, seja qual for a pessoa; e “dia” serve tanto para "ele" quanto para "ela".',
    sections: [
      {
        text: 'Ao contrário do português, o verbo indonésio é sempre a mesma palavra, não importa quem fala: “saya makan” (eu como), “kamu makan” (você come), “dia makan” (ele/ela come) — o verbo “makan” nunca muda.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['saya', 'eu'],
            ['kamu', 'você'],
            ['dia', 'ele / ela'],
            ['kami', 'nós (sem incluir quem ouve)'],
            ['kita', 'nós (incluindo quem ouve)'],
            ['mereka', 'eles / elas'],
          ],
        },
        examples: [
          ['Saya dari Brasil.', 'Eu sou do Brasil.'],
          ['Dia dari Jakarta.', 'Ele/ela é de Jacarta.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma forma verbal diferente para cada pessoa, como no português: o verbo indonésio nunca conjuga.', 'Traduzir "dia" sempre como "ele": pode ser "ele" OU "ela", sem distinção de gênero.'],
    quiz: [{ question: 'Como muda o verbo "makan" (comer) entre "eu" e "ele"?', options: ['não muda: "saya makan" e "dia makan"', 'muda para "makani" na terceira pessoa', 'muda para "makanmu"'], answer: 'não muda: "saya makan" e "dia makan"', explanation: 'Os verbos em indonésio nunca conjugam por pessoa.' }],
  },
  {
    id: 'id-g3',
    level: 'A1.2',
    title: 'Kami × kita: dois jeitos de dizer "nós"',
    emoji: '🗣️',
    summary: 'O indonésio distingue "nós" que inclui a pessoa com quem se fala ("kita") de "nós" que a exclui ("kami") — uma distinção que o português não faz.',
    sections: [
      {
        text: '“Kami” é usado quando o grupo NÃO inclui a pessoa a quem você está falando: "Kami dari Brasil" (nós, eu e minha família, somos do Brasil — e você não está incluído). “Kita” inclui a pessoa ouvinte: "Ayo, kita belajar!" (vamos, nós — eu e você juntos — estudar!).',
        examples: [
          ['Kami dari Brasil.', 'Nós somos do Brasil. (sem incluir quem ouve)'],
          ['Ayo, kita belajar bahasa Indonesia!', 'Vamos, nós (você e eu) aprender indonésio!'],
        ],
      },
    ],
    pitfalls: ['Usar sempre "kita" para "nós": se a pessoa com quem você fala não faz parte do grupo, o certo é "kami".'],
    quiz: [{ question: 'Qual "nós" inclui a pessoa com quem você está falando?', options: ['kita', 'kami', 'mereka'], answer: 'kita', explanation: '"Kita" inclui o ouvinte; "kami" o exclui.' }],
  },
  {
    id: 'id-g4',
    level: 'A1.2',
    title: 'Kakak e adik, e o plural por repetição',
    emoji: '👪',
    summary: 'Sem palavras separadas para "irmão"/"irmã": kakak é o mais velho, adik o mais novo, não importa o sexo. E o plural, quando precisa aparecer, repete a palavra.',
    sections: [
      {
        text: 'O indonésio organiza irmãos pela IDADE relativa, não pelo sexo: “kakak” é qualquer irmão mais velho (homem ou mulher), “adik” é qualquer irmão mais novo (homem ou mulher). Para especificar o sexo, acrescenta-se “laki-laki” (homem) ou “perempuan” (mulher): “kakak perempuan” é a irmã mais velha.',
        examples: [
          ['Saya punya satu kakak dan satu adik.', 'Eu tenho um irmão/uma irmã mais velho(a) e um irmão/uma irmã mais novo(a).'],
        ],
      },
      {
        heading: 'O plural por repetição',
        text: 'Quando o plural precisa ficar claro, a palavra se repete: “anak” (criança) → “anak-anak” (crianças); “buku” (livro) → “buku-buku” (livros). Na maioria das frases, porém, o contexto já basta e a palavra não muda.',
        examples: [['anak-anak bermain', 'as crianças brincam']],
      },
    ],
    pitfalls: ['Perguntar "você tem irmão ou irmã?" tentando traduzir palavra por palavra: em indonésio a pergunta natural usa kakak/adik, sobre a idade.'],
    quiz: [{ question: 'O que quer dizer "adik"?', options: ['irmão ou irmã mais novo(a)', 'irmão ou irmã mais velho(a)', 'só irmã, de qualquer idade'], answer: 'irmão ou irmã mais novo(a)', explanation: '"Adik" é qualquer irmão mais novo, homem ou mulher; "kakak" é o mais velho.' }],
  },
  {
    id: 'id-g5',
    level: 'A2.1',
    title: 'Sudah, belum, akan: o tempo sem conjugar',
    emoji: '⏳',
    summary: 'Como o verbo indonésio nunca conjuga, o tempo (já aconteceu, ainda não, vai acontecer) aparece em palavrinhas antes do verbo: "sudah", "belum" e "akan".',
    sections: [
      {
        text: '"sudah" marca que algo já aconteceu; "belum" marca que ainda não aconteceu, mas pode acontecer; "akan" marca o futuro. Essas palavras vêm sempre ANTES do verbo, que continua exatamente igual.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['sudah', 'já (passado/completo)', 'Saya sudah makan.'],
            ['belum', 'ainda não', 'Saya belum makan.'],
            ['akan', 'vai (futuro)', 'Saya akan makan.'],
          ],
        },
        examples: [
          ['Besok akan hujan.', 'Vai chover amanhã.'],
          ['Saya belum beli jaket baru.', 'Eu ainda não comprei uma jaqueta nova.'],
        ],
      },
    ],
    pitfalls: [
      'Responder "belum" como se fosse "não": "belum" é "ainda não", mantendo a possibilidade aberta; para negar de vez, o certo é "tidak".',
      'Pôr essas palavras depois do verbo: elas vêm sempre antes.',
    ],
    quiz: [{ question: 'Como se diz "eu ainda não comprei uma jaqueta" em indonésio?', options: ['Saya belum beli jaket.', 'Saya sudah beli jaket.', 'Saya akan beli jaket.'], answer: 'Saya belum beli jaket.', explanation: '"Belum" marca que algo ainda não aconteceu, mas pode acontecer.' }],
  },
  {
    id: 'id-g6',
    level: 'A2.1',
    title: 'Lebih, paling: comparativo e superlativo',
    emoji: '📊',
    summary: 'Para comparar, o indonésio usa "lebih" (mais) antes do adjetivo e "daripada" (do que) antes do segundo termo; para o superlativo, usa "paling" (o mais).',
    sections: [
      {
        text: '"lebih + adjetivo (+ daripada + algo)" forma o comparativo. "paling + adjetivo" forma o superlativo.',
        examples: [
          ['Sepatu ini lebih besar daripada sepatu itu.', 'Este sapato é maior que aquele sapato.'],
          ['Dia paling tinggi di keluarga saya.', 'Ele/ela é o/a mais alto(a) da minha família.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer "daripada" ao comparar dois termos: sem ele, a frase fica incompleta.',
      'Usar "lebih" no superlativo: o superlativo é com "paling", não "lebih".',
    ],
    quiz: [{ question: 'Como se diz "este sapato é maior que aquele" em indonésio?', options: ['Sepatu ini lebih besar daripada itu.', 'Sepatu ini paling besar.', 'Sepatu ini besar lebih itu.'], answer: 'Sepatu ini lebih besar daripada itu.', explanation: '"Lebih...daripada" é a estrutura do comparativo.' }],
  },
  {
    id: 'id-g7',
    level: 'A2.2',
    title: 'Yang: juntando frases (oração relativa)',
    emoji: '🔗',
    summary: '"Yang" liga uma descrição ou uma frase inteira a um substantivo, como o nosso "que" ou "o/a que".',
    sections: [
      {
        text: '"Yang" aparece depois do substantivo para introduzir mais informação sobre ele: um adjetivo ("baju yang merah", a roupa que é vermelha) ou uma frase inteira ("guru yang mengajar bahasa Indonesia", o professor que ensina indonésio).',
        examples: [
          ['Dokter yang bekerja di rumah sakit itu baik.', 'O médico que trabalha naquele hospital é bom.'],
          ['Saya suka baju yang merah.', 'Eu gosto da roupa vermelha (que é vermelha).'],
        ],
      },
    ],
    pitfalls: ['Esquecer o "yang" ao introduzir uma frase inteira (não só um adjetivo) sobre o substantivo: com oração inteira, ele é obrigatório.'],
    quiz: [{ question: 'O que "yang" faz em "guru yang mengajar bahasa Indonesia"?', options: ['liga a descrição ("que ensina indonésio") ao substantivo "guru"', 'nega o verbo', 'marca o plural'], answer: 'liga a descrição ("que ensina indonésio") ao substantivo "guru"', explanation: '"Yang" introduz uma descrição ou oração sobre o substantivo anterior.' }],
  },
];
