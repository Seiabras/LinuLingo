import type { StorySeed } from '../types';

/**
 * Histórias interativas do sami do norte — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Em nenhum nó um personagem decide a identidade ou a escolha do jogador: é sempre o
 * jogador quem escolhe o que dizer. Todo nó é alcançável a partir do início, e não há becos sem
 * saída — uma escolha “errada” só mostra uma explicação e mantém o jogador no mesmo nó.
 */
export const STORIES_SE: StorySeed[] = [
  {
    id: 'se-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bures, Elle!',
    emoji: '👋',
    summary: 'Você conhece a Elle e faz a sua primeira conversa em sami do norte: cumprimento, nome e idade.',
    cultural_context: 'Elle é um dos nomes femininos sami mais comuns — como Ánte entre os nomes masculinos, aparece em famílias sami de toda a Sápmi.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bures! Mu namma lea Elle.',
        translation: 'Oi! Meu nome é a Elle.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bures! Mun lean Lucas.', translation: 'Oi! Eu sou o Lucas.', next: 'namma' },
          { text: 'Mana dearvan!', translation: 'Tchau!', wrong: 'Elle acabou de se apresentar: despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      namma: {
        text: 'Buorre! Man boaris don leat?',
        translation: 'Que bom! Quantos anos você tem?',
        emoji: '😊',
        choices: [
          { text: 'Mun lean guhtta jagi boaris.', translation: 'Eu tenho seis anos.', next: 'final_bun' },
          { text: 'Mus lea beana.', translation: 'Eu tenho um cachorro.', wrong: 'Isso não responde quantos anos você tem. Use “Mun lean … jagi boaris”.' },
        ],
      },
      final_bun: {
        text: 'Buorre! Giitu, ja mana dearvan!',
        translation: 'Legal! Obrigada, e tchau!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Giitu, Elle!', message: 'Elle sorri: você fez a sua primeira conversa em sami do norte.' },
      },
    },
    glossary: [
      ['bures', 'oi, olá'],
      ['mu namma lea', 'meu nome é'],
      ['man boaris don leat', 'quantos anos você tem'],
      ['mun lean … jagi boaris', 'eu tenho … anos'],
    ],
  },
  {
    id: 'se-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ánte ja boazu',
    emoji: '🦌',
    summary: 'Ánte mostra a rena e o bezerro de rena dele — e você aprende um pouco do vocabulário sami de pastorícia de renas.',
    cultural_context: 'Hoje só cerca de 10% do povo sami trabalha com a pastorícia de renas, mas ela continua um símbolo forte da cultura sami em toda a Sápmi.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bures! Mun lean Ánte. Mus lea okta boazu.',
        translation: 'Oi! Eu sou o Ante. Eu tenho uma rena.',
        emoji: '🦌',
        choices: [
          { text: 'Bures, Ánte! Mun lean Sofia.', translation: 'Oi, Ante! Eu sou a Sofia.', next: 'miessi' },
          { text: 'Mu namma lea Elle.', translation: 'Meu nome é a Elle.', wrong: 'Esse não é o seu nome — escolha a resposta com o seu próprio nome.' },
        ],
      },
      miessi: {
        text: 'Buorre! Mus lea okta miessi.',
        translation: 'Legal! Eu tenho um bezerro de rena.',
        emoji: '🦌',
        choices: [
          { text: 'Čoarvi lea stuoris!', translation: 'O chifre é grande!', next: 'final_bun' },
          { text: 'Mun lean guhtta jagi boaris.', translation: 'Eu tenho seis anos.', wrong: 'Isso não tem nada a ver com a rena do Ante. Comente sobre o “čoarvi” (chifre) ou o “miessi” (bezerro).' },
        ],
      },
      final_bun: {
        text: 'Juo! Giitu!',
        translation: 'Sim! Obrigado!',
        emoji: '😄',
        ending: { tone: 'bom', title: 'Boazu ja miessi!', message: 'Você aprendeu sobre a rena e o bezerro de rena do Ante — um pouquinho do vocabulário sami de pastorícia de renas.' },
      },
    },
    glossary: [
      ['boazu', 'rena'],
      ['miessi', 'bezerro de rena'],
      ['čoarvi', 'chifre, galhada'],
      ['mus lea', 'eu tenho'],
    ],
  },
];
