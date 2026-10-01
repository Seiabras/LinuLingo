import type { StorySeed } from '../types';

/** Histórias interativas do nheengatu — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_YRL: StorySeed[] = [
  {
    id: 'yrl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Puranga ara, São Gabriel',
    emoji: '👋',
    summary: 'Você conhece a Rosa à beira do rio Negro, em São Gabriel da Cachoeira, e faz a sua primeira conversa em nheengatu.',
    cultural_context: 'São Gabriel da Cachoeira, no alto rio Negro (AM), é cooficialmente bilíngue (português e nheengatu, entre outras línguas) desde 2002 — ali é comum ouvir nheengatu na feira, nas ruas e à beira do rio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Puranga ara! Se era Rosa.',
        translation: 'Bom dia! Meu nome é Rosa.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Puranga ara, Rosa! Se era Ana.', translation: 'Bom dia, Rosa! Meu nome é Ana.', next: 'pergunta' },
          { text: 'Kwekatú reté!', translation: 'Muito obrigada!', wrong: 'Rosa só disse o nome dela: ela ainda não fez nada para você agradecer. Diga o seu nome primeiro, com “Se era…”.' },
        ],
      },
      pergunta: {
        text: 'Mayé taá indé resasá?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Asasá puranga, kwekatú!', translation: 'Estou bem, obrigada!', next: 'final_bom' },
          { text: 'Se era Ana.', translation: 'Meu nome é Ana.', wrong: 'Isso você já disse! Rosa perguntou como você está, não o seu nome. Responda com “Asasá puranga” (estou bem) ou “Asasá puxí” (estou mal).' },
        ],
      },
      final_bom: {
        text: 'Puranga! Yasemu igara upé?',
        translation: 'Que bom! Vamos de canoa?',
        emoji: '🛶',
        choices: [
          { text: 'Yasemu! Yasemu paraná upé.', translation: 'Vamos! Vamos ao rio.', next: 'final' },
          { text: 'Asasá puxí.', translation: 'Estou mal.', wrong: 'Isso muda de assunto: Rosa quer saber se você topa ir de canoa. Responda repetindo “Yasemu!” (vamos!).' },
        ],
      },
      final: {
        text: 'Yasemu! Kwekatú reté, Ana!',
        translation: 'Vamos! Muito obrigada, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Yasemu igara upé!', message: 'Você e Rosa saem de canoa pelo rio Negro: sua primeira conversa em nheengatu terminou bem.' },
      },
    },
    glossary: [
      ['puranga ara', 'bom dia'],
      ['se era', 'meu nome (é)'],
      ['asasá puranga', 'eu estou bem'],
      ['kwekatú reté', 'muito obrigado(a)'],
    ],
  },
  {
    id: 'yrl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pirá, igara, yakaré',
    emoji: '🐟',
    summary: 'Você sai para pescar de canoa no rio Negro com Pedro e encontra um jacaré pelo caminho.',
    cultural_context: 'Pescar de igara (canoa) é parte do dia a dia de quem mora às margens do rio Negro e de seus afluentes, como o Uaupés e o Içana, perto de São Gabriel da Cachoeira.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Puranga ara! Aputari mukũi pirá. Yasemu igara upé?',
        translation: 'Bom dia! Eu quero dois peixes. Vamos de canoa?',
        emoji: '🛶',
        choices: [
          { text: 'Puranga! Yasemu igara upé.', translation: 'Bom! Vamos de canoa.', next: 'rio' },
          { text: 'Se manha uikú uka upé.', translation: 'Minha mãe está em casa.', wrong: 'Isso não responde ao convite para pescar. Aceite com “Yasemu igara upé” (vamos de canoa).' },
        ],
      },
      rio: {
        text: 'Esá! Yakaré paraná upé!',
        translation: 'Olha! Um jacaré no rio!',
        emoji: '🐊',
        choices: [
          { text: 'Yakaré wasú! Yasemu uka upé!', translation: 'O jacaré é grande! Vamos para casa!', next: 'final' },
          { text: 'Yakaré puranga!', translation: 'O jacaré é bonito!', wrong: 'Um jacaré grande tão perto da canoa é perigoso: melhor reconhecer o tamanho dele e voltar, com “Yakaré wasú! Yasemu uka upé!”.' },
        ],
      },
      final: {
        text: 'Yasemu uka upé. Kwekatú, paraná!',
        translation: 'Vamos para casa. Obrigado, rio!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Yasemu uka upé!', message: 'Você e Pedro escaparam do jacaré e voltaram em segurança para casa, às margens do rio Negro — com os peixes garantidos.' },
      },
    },
    glossary: [
      ['pirá', 'peixe'],
      ['igara', 'canoa'],
      ['yakaré', 'jacaré'],
      ['paraná', 'rio'],
    ],
  },
];
