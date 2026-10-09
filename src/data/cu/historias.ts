import type { StorySeed } from '../types';

/** Histórias interativas do eslavo eclesiástico antigo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_CU: StorySeed[] = [
  {
    id: 'cu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na Grande Morávia, com Metódio',
    emoji: '✝️',
    summary: 'Você conhece o monge Metódio, que acabou de chegar com Cirilo numa missão para traduzir textos sagrados.',
    cultural_context: 'Em 863, o príncipe Rastislau da Grande Morávia (hoje leste da República Tcheca e oeste da Eslováquia) pediu ao Império Bizantino missionários que pregassem na língua do povo, não em latim ou grego — foi aí que Cirilo e Metódio chegaram, trazendo o alfabeto novo que Cirilo tinha criado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Тꙑ ли ѥси чловѣкъ отъ Моравꙑ?',
        translation: 'Você é uma pessoa da Morávia?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Не ѥсмь. Азъ ѥсмь чловѣкъ отъ Бразилии.', translation: 'Não sou. Eu sou uma pessoa do Brasil.', next: 'nome' },
          { text: 'Хлѣбъ ѥстъ бѣлъ.', translation: 'O pão é branco.', wrong: 'Isso não responde à pergunta de Metódio. Use “Ѥсмь” ou “Не ѥсмь”.' },
        ],
      },
      nome: {
        text: 'Добро! Имѧ моѥ ѥстъ Меѳодии. Како имѧ твоѥ?',
        translation: 'Bem! Meu nome é Metódio. Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Имѧ моѥ ѥстъ Лину.', translation: 'Meu nome é Linu.', next: 'final_bo' },
          { text: 'Азъ имамь братъ.', translation: 'Eu tenho um irmão.', wrong: 'Isso não responde qual é o seu nome. Use “Имѧ моѥ ѥстъ…”.' },
        ],
      },
      final_bo: {
        text: 'Добро, Лину! Мꙑ ѥсмъ добри.',
        translation: 'Bem, Linu! Nós somos bons (amigos).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo encontro na Morávia!', message: 'Metódio sorri: você fez sua primeira conversa em eslavo eclesiástico antigo, bem no começo da missão.' },
      },
    },
    glossary: [
      ['ѥсмь / не ѥсмь', 'eu sou / eu não sou'],
      ['имѧ моѥ ѥстъ...', 'meu nome é...'],
      ['добро', 'bem/bom'],
    ],
  },
  {
    id: 'cu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Em Preslav, com Clemente',
    emoji: '📜',
    summary: 'Você visita a Escola Literária de Preslav e conversa com o monge Clemente sobre a sua família e a sua casa.',
    cultural_context: 'Depois da morte de Cirilo e Metódio, discípulos deles levaram a língua e a fé para o Primeiro Império Búlgaro — a Escola Literária de Preslav, fundada no final do século IX, foi onde o alfabeto cirílico provavelmente nasceu, baseado na escrita grega.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Имаши ли братъ или сестра?',
        translation: 'Você tem irmão ou irmã?',
        emoji: '📜',
        choices: [
          { text: 'Имамь братъ и сестра.', translation: 'Eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Домъ мои ѥстъ малъ.', translation: 'Minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use “Имамь…” ou “Не имамь…”.' },
        ],
      },
      fam: {
        text: 'Добро! И домъ твои ли ѥстъ малъ?',
        translation: 'Bem! E a sua casa é pequena?',
        emoji: '🏠',
        choices: [
          { text: 'Домъ мои ѥстъ малъ.', translation: 'Minha casa é pequena.', next: 'final_bo' },
          { text: 'Десѧть чловѣкъ.', translation: 'Dez pessoas.', wrong: 'Isso não descreve sua casa. Fale sobre ela: “Домъ мои…”.' },
        ],
      },
      final_bo: {
        text: 'Добро! Братия твоꙗ ѥстъ добра.',
        translation: 'Bem! Sua família é boa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade em Preslav!', message: 'Clemente gostou de saber da sua família — a Escola de Preslav está sempre aberta para novas conversas.' },
      },
    },
    glossary: [
      ['братъ / сестра', 'irmão / irmã'],
      ['домъ мои', 'minha casa'],
      ['имѣти (имамь)', 'ter (eu tenho)'],
    ],
  },
];
