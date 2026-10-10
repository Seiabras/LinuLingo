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
  {
    id: 'cu-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'No mercado, perto da aldeia',
    emoji: '🏡',
    summary: 'Você visita o mercado de uma aldeia perto de Preslav e conversa com um servo que vende ovelhas e livros.',
    cultural_context: 'Ao redor de uma cidade murada como Preslav, a vida cotidiana se passava em aldeias e campos de cultivo, com servos trabalhando a terra e levando produtos ao mercado para trocar por prata ou ouro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Имаши ли сребро? Имамь овцу добру.',
        translation: 'Você tem prata? Tenho uma boa ovelha.',
        emoji: '🐑',
        choices: [
          { text: 'Имамь сребро. Хощѫ овцу.', translation: 'Tenho prata. Quero a ovelha.', next: 'conversa' },
          { text: 'Кънига велика ѥстъ.', translation: 'O livro é grande.', wrong: 'Isso não responde sobre a prata ou a ovelha. Diga se você tem сребро.' },
        ],
      },
      conversa: {
        text: 'Добро! Имаши ли братъ, да ѥму кънигу дамь?',
        translation: 'Bem! Você tem um irmão, para que eu lhe dê um livro?',
        emoji: '📖',
        choices: [
          { text: 'Имамь брата. Дай ѥму кънигу!', translation: 'Tenho um irmão. Dê-lhe o livro!', next: 'final_bo' },
          { text: 'Не имамь хлѣба.', translation: 'Não tenho pão.', wrong: 'Isso não responde sobre o irmão. Diga se você tem um brother, usando “имамь брата”.' },
        ],
      },
      final_bo: {
        text: 'Добро! Твои братъ радъ бѫдетъ.',
        translation: 'Bem! Seu irmão ficará feliz.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um bom negócio na aldeia!', message: 'O servo sorri: você levou uma ovelha boa e um livro para o seu irmão, no mercado perto de Preslav.' },
      },
    },
    glossary: [
      ['имамь брата', 'tenho um irmão (acusativo animado)'],
      ['сребро / злато', 'prata / ouro'],
      ['кънига', 'livro'],
    ],
  },
  {
    id: 'cu-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Въ начѧлѣ бѣ слово',
    emoji: '📖',
    summary: 'Você acompanha um monge copista que recita, de memória, o início do evangelho de João.',
    cultural_context: 'A abertura do evangelho de João, "Въ начѧлѣ бѣ слово" (No princípio era a Palavra), é um dos trechos mais conhecidos de toda a literatura eslava eclesiástica antiga, traduzida pelos discípulos de Cirilo e Metódio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Въ начѧлѣ бѣ слово. Что бѣ въ начѧлѣ, вѣси ли?',
        translation: 'No princípio era a Palavra. O que havia no princípio, você sabe?',
        emoji: '📖',
        choices: [
          { text: 'Слово бѣ въ начѧлѣ.', translation: 'A Palavra estava no princípio.', next: 'conversa' },
          { text: 'Имамь злато.', translation: 'Tenho ouro.', wrong: 'Isso não responde ao monge. Pergunte o que havia no princípio.' },
        ],
      },
      conversa: {
        text: 'Слово бѣ, и свѣтъ великъ бѣ, а тьма мала бѣ.',
        translation: 'Era a Palavra, e a luz era grande, e a treva era pequena.',
        emoji: '💡',
        choices: [
          { text: 'Миръ и любꙑ съ нами да бѫдѫтъ.', translation: 'Que a paz e o amor estejam conosco.', next: 'final_bo' },
          { text: 'Домъ отьца малъ ѥстъ.', translation: 'A casa do pai é pequena.', wrong: 'Isso muda de assunto. Fale da palavra, da luz ou da fé.' },
        ],
      },
      final_bo: {
        text: 'Аминь! Вѣра твоꙗ велика ѥстъ.',
        translation: 'Amém! A sua fé é grande.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma lição guardada!', message: 'O monge sorri: você ouviu e entendeu o início do evangelho de João, palavra por palavra.' },
      },
    },
    glossary: [
      ['въ начѧлѣ бѣ слово', 'no princípio era a Palavra'],
      ['свѣтъ / тьма', 'luz / trevas'],
      ['миръ / любꙑ', 'paz / amor'],
    ],
  },
];
