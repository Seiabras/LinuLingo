import type { MiniCourse } from './tipos';

export const CURSO_ELEFEN: MiniCourse = {
  id: 'elefen',
  name: 'Lingua Franca Nova (Elefen)',
  emoji: '🌊',
  kind: 'artificial',
  summary: 'Uma língua auxiliar publicada em 1998, com palavras das línguas românicas e gramática de crioulo: o verbo nunca muda.',
  sources: [{ label: 'elefen.org', url: 'https://elefen.org/' }],
  lessons: [
    {
      id: 'basico',
      title: 'Palavras românicas, gramática simples',
      emoji: '🧩',
      intro: [
        'O psicólogo George Boeree começou a Lingua Franca Nova nos anos 1960 e a publicou em 1998, com o nome de uma língua de contato do Mediterrâneo. O vocabulário vem do português, do espanhol, do francês, do italiano e do catalão; a gramática, simples como a de um crioulo.',
        'O artigo é “la” para tudo, o plural é -s (ou -es) e o verbo não muda nunca: me es, tu es, el es (eu sou, você é, ele/ela é).',
      ],
      items: [
        { term: 'me, tu, el', meaning: 'eu, você, ele/ela' },
        { term: 'nos, vos, los', meaning: 'nós, vocês, eles' },
        { term: 'la casa / la casas', meaning: 'a casa / as casas' },
        { term: 'me es', meaning: 'eu sou, eu estou' },
        { term: 'Bon dia!', meaning: 'Bom dia!' },
        { term: 'Grasias!', meaning: 'Obrigado!' },
      ],
      quiz: [
        { q: 'Como se diz “as casas”?', options: ['la casas', 'las casas', 'le casas'], answer: 0 },
        { q: 'O verbo muda com a pessoa?', options: ['Não: me es, tu es, el es', 'Sim, como no português'], answer: 0 },
      ],
    },
    {
      id: 'tempos',
      title: 'Passado e futuro com partículas',
      emoji: '⏱️',
      intro: ['O tempo vem numa partícula antes do verbo: “ia” para o passado, “va” para o futuro. O “no” antes do verbo nega.'],
      items: [
        { term: 'me come', meaning: 'eu como' },
        { term: 'me ia come', meaning: 'eu comi' },
        { term: 'me va come', meaning: 'eu vou comer' },
        { term: 'me no come', meaning: 'eu não como' },
      ],
      quiz: [
        { q: '“el ia parla” quer dizer…', options: ['ele/ela falou', 'ele/ela vai falar', 'ele/ela fala'], answer: 0 },
        { q: 'Como se diz “nós vamos ler” (leje = ler)?', options: ['nos va leje', 'nos ia leje', 'nos lejeremos'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_QUENYA: MiniCourse = {
  id: 'quenya',
  name: 'Quenya',
  emoji: '🧝',
  kind: 'artificial',
  summary: 'A língua antiga dos elfos de Tolkien: a pronúncia, o plural, as palavras do céu e a despedida de Galadriel.',
  sources: [{ label: 'Ardalambion (estudos das línguas de Tolkien)', url: 'https://www.ardalambion.net/' }],
  lessons: [
    {
      id: 'sons',
      title: 'Pronúncia e escrita',
      emoji: '🔤',
      intro: [
        'Tolkien deu ao quenya o som do finlandês com toques do latim. O “c” é sempre “k” (Calacirya soa “kala-kírya”), e o acento agudo marca vogal longa: “síla” tem o “i” comprido.',
        'Na Terra-média, o quenya se escreve com as tengwar, as letras que, na história, o elfo Fëanor inventou.',
      ],
      items: [
        { term: 'c', meaning: 'sempre “k”' },
        { term: 'á, é, í, ó, ú', meaning: 'vogais longas' },
        { term: 'ë', meaning: 'o “e” no fim da palavra, que se pronuncia (Namárië)' },
        { term: 'tengwar', meaning: 'as letras élficas de Fëanor' },
      ],
      quiz: [
        { q: 'Como soa o “c” em quenya?', options: ['Sempre “k”', 'Como “s”', 'Como “tch”'], answer: 0 },
        { q: 'O que o acento agudo indica?', options: ['Vogal longa', 'Sílaba tônica sempre', 'Nada'], answer: 0 },
      ],
    },
    {
      id: 'ceu',
      title: 'Estrelas, sol e lua',
      emoji: '✨',
      intro: ['O plural das palavras que terminam em vogal é -r: Elda (elfo) → Eldar (elfos). As que terminam em -ë trocam por -i: Quendë → Quendi.'],
      items: [
        { term: 'elen', meaning: 'estrela' },
        { term: 'Anar / Isil', meaning: 'o Sol / a Lua' },
        { term: 'Arda', meaning: 'o mundo, a Terra' },
        { term: 'Elda / Eldar', meaning: 'elfo / elfos' },
        { term: 'Quendë / Quendi', meaning: 'elfo / os elfos (o nome que eles davam a si mesmos)' },
      ],
      quiz: [
        { q: 'Qual é o plural de “Elda”?', options: ['Eldar', 'Eldi', 'Eldas'], answer: 0 },
        { q: '“Isil” é…', options: ['a Lua', 'o Sol', 'uma estrela'], answer: 0 },
      ],
    },
    {
      id: 'frases',
      title: 'Saudar e se despedir',
      emoji: '👋',
      intro: ['A canção de despedida de Galadriel, em O Senhor dos Anéis, é o texto mais longo em quenya que Tolkien publicou: “Namárië”.'],
      items: [
        { term: 'Aiya!', meaning: 'Salve! (saudação)' },
        { term: 'Namárië!', meaning: 'Adeus!' },
        { term: 'Elen síla lúmenn’ omentielvo.', meaning: 'Uma estrela brilha sobre a hora do nosso encontro.' },
        { term: 'nai', meaning: 'que seja (para desejos: “Nai hiruvalyë Valimar” — que tu encontres Valimar)' },
      ],
      quiz: [
        { q: 'Como se diz “adeus”?', options: ['Namárië', 'Aiya', 'Elen'], answer: 0 },
        { q: 'De quem é a canção “Namárië”?', options: ['Galadriel', 'Gandalf', 'Frodo'], answer: 0 },
      ],
    },
  ],
};
