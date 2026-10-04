import type { StorySeed } from '../types';

/**
 * Histórias interativas do asháninka — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todas as falas são frases das fontes de vocabulario.ts (Kindberg 1980, no alfabeto oficial; MINEDU
 * 2021), com os mesmos dois encaixes de curriculo.ts (“¿Pokajimpi? — Nopokake.” e “Nojita Linu.”).
 * A primeira se passa no rio Tambo (Peru), onde se fala a variedade que Kindberg documenta; a segunda,
 * na aldeia Apiwtxa, no rio Amônia (Acre), a comunidade Ashaninka do Brasil (ISA, “Povos Indígenas no
 * Brasil — Ashaninka”: piyarentsi frequente, “geralmente todos os finais de semana”).
 */
export const STORIES_CNI: StorySeed[] = [
  {
    id: 'cni-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kitaiteri! Chegando ao rio Tambo',
    emoji: '🛶',
    summary: 'Você desce de uma canoa numa comunidade asháninka do rio Tambo, na Selva Central do Peru, e alguém vem receber você.',
    cultural_context:
      'No asháninka, um jeito registrado de cumprimentar quem chega é perguntar “¿Pokajimpi?” — você veio? —, e a resposta é “Nopokake”, vim. De manhã, também se diz “Kitaiteri”, bom dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kitaiteri.',
        translation: 'Bom dia.',
        emoji: '🌅',
        choices: [
          { text: 'Kitaiteri.', translation: 'Bom dia.', next: 'veio' },
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida da noite).', wrong: 'Isso é a despedida da noite, e você acabou de chegar. Devolva o bom dia: “Kitaiteri.”' },
        ],
      },
      veio: {
        text: '¿Pokajimpi?',
        translation: 'Você veio?',
        emoji: '👋',
        choices: [
          { text: 'Nopokake.', translation: 'Vim.', next: 'nome' },
          { text: '¿Pokajimpi?', translation: 'Você veio?', wrong: 'É a pergunta, não a resposta. Quem chegou responde com no- (eu): “Nopokake.”' },
        ],
      },
      nome: {
        text: '¿Jaoka pijitari?',
        translation: 'Como você se chama?',
        emoji: '🏷️',
        choices: [
          { text: 'Nojita Linu.', translation: 'Eu me chamo Linu.', next: 'comer' },
          { text: 'Pijitari Linu.', translation: '(você se chama Linu)', wrong: 'O prefixo pi- é “você”. Para falar de si mesmo, use no-: “Nojita Linu.”' },
        ],
      },
      comer: {
        text: 'Tsame ayea.',
        translation: 'Vamos comer.',
        emoji: '🍌',
        choices: [
          { text: 'Pasonki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Te.', translation: 'Não.', wrong: 'Convidaram você para comer: agradeça com “Pasonki.”' },
        ],
      },
      final: {
        text: 'Kametsa.',
        translation: 'Que bom.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Pasonki!',
          message: 'Você devolveu o bom dia, respondeu ao “você veio?” com “Nopokake”, disse o seu nome com “Nojita” e agradeceu o convite — uma primeira conversa inteira em asháninka.',
        },
      },
    },
    glossary: [
      ['Kitaiteri', 'bom dia'],
      ['¿Pokajimpi?', 'você veio?'],
      ['Nopokake', 'vim'],
      ['Tsame ayea', 'vamos comer'],
    ],
  },
  {
    id: 'cni-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nojate nobankoki: uma tarde em Apiwtxa',
    emoji: '🏠',
    summary: 'Na aldeia Apiwtxa, no rio Amônia (Acre), uma família asháninka conversa com você sobre o pai e a casa, até a hora de dormir.',
    cultural_context:
      'Os Ashaninka do Brasil vivem sobretudo na Terra Indígena Kampa do Rio Amônia, no Acre, perto da fronteira com o Peru; a maior parte mora na aldeia Apiwtxa ou perto dela. Lá, a festa do masato (o “piyarentsi”, como se escreve nos textos brasileiros) acontece com frequência, muitas vezes todo fim de semana.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¿Pokajimpi?',
        translation: 'Você veio?',
        emoji: '👋',
        choices: [
          { text: 'Nopokake.', translation: 'Vim.', next: 'pai' },
          { text: 'Pasonki.', translation: 'Obrigado.', wrong: 'Perguntaram se você veio: responda primeiro com “Nopokake.” (vim).' },
        ],
      },
      pai: {
        text: 'Yamanantake apa aparoni tyobirimento.',
        translation: 'Meu pai comprou uma motosserra.',
        emoji: '👨',
        choices: [
          { text: 'Kametsa.', translation: 'Que bom.', next: 'casa' },
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida).', wrong: 'Ainda é de tarde e a conversa mal começou. Comente a notícia: “Kametsa.” (bom, que bom).' },
        ],
      },
      casa: {
        text: 'Nojate nobankoki.',
        translation: 'Vou para a minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'Tsame amaye.', translation: 'Vamos dormir (despedida).', next: 'final' },
          { text: 'Kitaiteri.', translation: 'Bom dia.', wrong: '“Kitaiteri” é para quando se chega, de manhã. Para se despedir no fim do dia, diga “Tsame amaye.”' },
        ],
      },
      final: {
        text: 'Pasonki.',
        translation: 'Obrigado.',
        emoji: '🌙',
        ending: {
          tone: 'bom',
          title: 'Tsame amaye!',
          message: 'Você respondeu ao “você veio?”, entendeu “apa” (meu pai) e “nobankoki” (para a minha casa) e se despediu como se faz à noite: “Tsame amaye”.',
        },
      },
    },
    glossary: [
      ['Nopokake', 'vim'],
      ['apa', 'pai'],
      ['nobankoki', 'para a minha casa (no- meu + banko + -ki para)'],
      ['Tsame amaye', 'vamos dormir (despedida)'],
    ],
  },
];
