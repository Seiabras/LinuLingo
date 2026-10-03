import type { StorySeed } from '../types';

/**
 * Histórias interativas do hopi — uma por subnível (A1.1 e A1.2), pacote incompleto. Construídas só com
 * palavras confirmadas (ver `vocabulario.ts`) e o padrão sujeito-objeto-verbo / substantivo+adjetivo sem
 * verbo de ligação, documentado no artigo “Hopi language” da Wikipédia em inglês — nenhuma fonte
 * consultada traz um diálogo hopi completo (pergunta, saudação, verbo conjugado), por isso as “falas”
 * aqui são frases declarativas, no mesmo formato já usado em `vocabulario.ts` e `curriculo.ts`.
 */
export const STORIES_HOP: StorySeed[] = [
  {
    id: 'hop-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pessoas, sol e um mergulho na Reserva Hopi',
    emoji: '🙋',
    summary: 'Uma cena curta na Reserva Hopi, no nordeste do Arizona: reconhecer quem é “hopi”, ver o sol e terminar nadando.',
    cultural_context:
      'A Reserva Hopi fica no nordeste do Arizona (Estados Unidos). A própria palavra “hopi”, segundo o Wiktionary em inglês, não nomeia só o povo: como substantivo comum, ela significa “pessoa civilizada, bem-comportada; alguém que segue o modo de vida hopi; educada, pacífica” — um valor social descrito na própria língua, não só um nome de fora.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Taaqa hopi.',
        translation: 'O homem é hopi (pessoa civilizada, pacífica).',
        emoji: '🧑',
        choices: [
          { text: 'Wùuti hopi.', translation: 'A mulher é hopi.', next: 'sol' },
          {
            text: 'Taaqa qömvi.',
            translation: 'O homem é preto.',
            wrong: '“Qömvi” é uma cor (preto) — a fala era sobre quem também é “hopi” (pessoa civilizada, pacífica), não sobre cor. Responda com outra pessoa: “Wùuti hopi.” (a mulher é hopi).',
          },
        ],
      },
      sol: {
        text: 'Nuʼ taawa tuwa.',
        translation: 'Eu vejo o sol.',
        emoji: '☀️',
        choices: [
          { text: 'Um hoonaw tuwa.', translation: 'Você vê o urso.', next: 'final' },
          {
            text: 'Nuʼ ööyi.',
            translation: 'Eu fico satisfeito.',
            wrong: 'A fala era sobre ver alguma coisa (o sol) — continue com outra pessoa vendo outra coisa: “Um hoonaw tuwa.” (você vê o urso).',
          },
        ],
      },
      final: {
        text: 'Itam momori.',
        translation: 'Nós nadamos.',
        emoji: '🏊',
        ending: {
          tone: 'bom',
          title: 'Pessoas, sol e um mergulho',
          message:
            'Você reconheceu “hopi” (pessoa civilizada e pacífica, a palavra que dá nome ao povo e à própria língua), viu o sol com “Nuʼ taawa tuwa” e terminou nadando com “Itam momori” — tudo em hopílavayi, a língua da Reserva Hopi, no nordeste do Arizona.',
        },
      },
    },
    glossary: [
      ['Hopi', 'pessoa hopi, civilizada, pacífica'],
      ['Taawa', 'sol'],
      ['Hoonaw', 'urso'],
      ['Momori', 'nadar'],
    ],
  },
  {
    id: 'hop-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cores e bichos na natureza hopi',
    emoji: '🪨',
    summary: 'Uma cena pela natureza: a cor de uma pedra e da água, e três bichos vistos pelo caminho.',
    cultural_context:
      'A Reserva Hopi reúne pelo menos três variantes regionais — a da Primeira Mesa, a da Segunda Mesa (aldeias de Mishongnovi e Shipaulovi) e a da Terceira Mesa —, segundo a Wikipédia em inglês, que não aponta nenhuma delas como “a” variante padrão, embora o principal dicionário publicado da língua (“Hopi Dictionary: Hopìikwa Lavàytutuveni”, 1998) descreva especificamente a variante da Terceira Mesa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Owa qömvi.',
        translation: 'A pedra é preta.',
        emoji: '🪨',
        choices: [
          { text: 'Paahu sakwa.', translation: 'A água é azul.', next: 'bicho' },
          {
            text: 'Owa nöösa.',
            translation: 'A pedra come.',
            wrong: 'Uma pedra não come — continue descrevendo a cor de outra coisa da natureza: “Paahu sakwa.” (a água é azul).',
          },
        ],
      },
      bicho: {
        text: 'Taaqa sowi tuwa.',
        translation: 'O homem vê a lebre.',
        emoji: '🐇',
        choices: [
          { text: 'Wùuti angwusi tuwa.', translation: 'A mulher vê o corvo.', next: 'final' },
          {
            text: 'Sowi qöötsa.',
            translation: 'A lebre é branca.',
            wrong: 'Essa fala muda de assunto para cor — continue com outra pessoa vendo outro bicho: “Wùuti angwusi tuwa.” (a mulher vê o corvo).',
          },
        ],
      },
      final: {
        text: 'Puma mongwu tuwa.',
        translation: 'Eles veem a coruja-grande.',
        emoji: '🦉',
        ending: {
          tone: 'bom',
          title: 'Cores e bichos da natureza hopi',
          message: 'Você descreveu as cores de uma pedra e da água (“Owa qömvi”, “Paahu sakwa”) e viu três bichos — a lebre, o corvo e a coruja-grande — em hopílavayi.',
        },
      },
    },
    glossary: [
      ['Qömvi', 'preto'],
      ['Sakwa', 'azul'],
      ['Sowi', 'lebre americana (jackrabbit)'],
      ['Angwusi', 'corvo'],
      ['Mongwu', 'coruja-grande (coruja-orelhuda)'],
    ],
  },
];
