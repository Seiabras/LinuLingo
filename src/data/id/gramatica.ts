import type { GrammarTopic } from '../types';

/** Tópicos de gramática do indonésio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
];
