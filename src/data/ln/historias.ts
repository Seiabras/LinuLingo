import type { StorySeed } from '../types';

/**
 * Histórias interativas do lingala — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todas as falas combinam só palavras conferidas em vocabulario.ts; nenhuma usa formas verbais
 * conjugadas que não apareçam diretamente numa fonte (ver nota em vocabulario.ts sobre “nazali”).
 */
export const STORIES_LN: StorySeed[] = [
  {
    id: 'ln-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mbote na Kinshasa',
    emoji: '👋',
    summary: 'Você conhece Sarah em Kinshasa e faz a sua primeira conversa em lingala.',
    cultural_context: 'Kinshasa, a capital da República Democrática do Congo, é a maior cidade onde se fala lingala no dia a dia — e uma das maiores cidades de língua lingala do mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mbote! Nkombo na ngai Sarah.',
        translation: 'Oi! Meu nome é Sarah.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mbote! Nkombo na ngai Ana.', translation: 'Oi! Meu nome é Ana.', next: 'nome' },
          { text: 'Ndako na ngai.', translation: 'A minha casa.', wrong: 'Sarah disse o nome dela e está esperando que você diga o seu. Use “Nkombo na ngai…”.' },
        ],
      },
      nome: {
        text: 'Boni, Ana?',
        translation: 'Como vai, Ana?',
        emoji: '😊',
        choices: [
          { text: 'Nazali malamu. Mboka na yo wápi?', translation: 'Estou bem. Onde é a sua cidade?', next: 'mboka' },
          { text: 'Mbwa na ngai.', translation: 'O meu cachorro.', wrong: 'Sarah perguntou como você está. Responda com “Nazali malamu”.' },
        ],
      },
      mboka: {
        text: 'Mboka na ngai Kinshasa.',
        translation: 'A minha cidade é Kinshasa.',
        emoji: '🏙️',
        choices: [
          { text: 'Kinshasa monene!', translation: 'Kinshasa é grande!', next: 'final' },
          { text: 'Nyoka na ngai.', translation: 'A minha cobra.', wrong: 'Isso não tem nada a ver com a cidade de Sarah. Comente sobre Kinshasa, por exemplo com “monene” (grande).' },
        ],
      },
      final: {
        text: 'Melesi, ndeko!',
        translation: 'Obrigada, amiga!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ndeko ya sika!', message: 'Você fez uma nova amiga em Kinshasa e já consegue se apresentar em lingala.' },
      },
    },
    glossary: [
      ['mbote', 'oi, olá'],
      ['nkombo na ngai', 'meu nome é'],
      ['boni', 'como (pergunta)'],
      ['mboka', 'cidade, aldeia'],
      ['melesi', 'obrigado(a)'],
    ],
  },
  {
    id: 'ln-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na ndako na Jean',
    emoji: '🏠',
    summary: 'Jean convida você para conhecer a casa e a família dele.',
    cultural_context: 'Visitar a casa de um amigo e perguntar pela família é um jeito comum de puxar conversa em lingala, já que “na” serve tanto para “com” quanto para o possessivo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mbote! Koya na ndako na ngai!',
        translation: 'Oi! Venha para a minha casa!',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Melesi! Ndako na yo kitoko.', translation: 'Obrigado! Sua casa é bonita.', next: 'casa' },
          { text: 'Nyama na ngai.', translation: 'O meu animal.', wrong: 'Jean te convidou para entrar. Comente sobre a casa dele, por exemplo com “kitoko” (bonita).' },
        ],
      },
      casa: {
        text: 'Melesi! Kiti mibale, mesa moko.',
        translation: 'Obrigado! Duas cadeiras, uma mesa.',
        emoji: '🪑',
        choices: [
          { text: 'Mwana na yo wápi?', translation: 'Onde está o seu filho, a sua filha?', next: 'familia' },
          { text: 'Mbula na mboka.', translation: 'A chuva na cidade.', wrong: 'Isso muda de assunto sem motivo. Pergunte pela família de Jean, por exemplo com “Mwana na yo wápi?”.' },
        ],
      },
      familia: {
        text: 'Mama na ngai, tata na ngai, na mwana na ngai.',
        translation: 'A minha mãe, o meu pai, e o meu filho, a minha filha.',
        emoji: '👪',
        choices: [
          { text: 'Nazali na ndeko mibale.', translation: 'Eu tenho dois irmãos, duas amigas.', next: 'final' },
          { text: 'Nsoso na ngai.', translation: 'A minha galinha.', wrong: 'Jean está falando da família dele. Fale da sua também, por exemplo com “Nazali na ndeko…”.' },
        ],
      },
      final: {
        text: 'Kitoko! Melesi, ndeko.',
        translation: 'Que bom! Obrigado, amigo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Na ndako na Jean', message: 'Você visitou a casa de Jean, falou da família e já entende números e casa em lingala.' },
      },
    },
    glossary: [
      ['ndako', 'casa'],
      ['kitoko', 'bonito(a)'],
      ['mwana', 'filho, filha, criança'],
      ['ndeko', 'irmão, irmã, amigo(a)'],
      ['mibale', 'dois'],
    ],
  },
];
