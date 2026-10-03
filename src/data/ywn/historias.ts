import type { StorySeed } from '../types';

/**
 * História do yawanawá — só uma, no nível A1.1 (pacote pequeno de propósito, ver index.ts). Como nenhuma
 * fonte consultada registra frases completas em yawanawá, a história usa, no campo em yawanawá de cada
 * nó, só as palavras já confirmadas em vocabulario.ts (uma ou duas por vez) — a narração mais longa fica
 * no campo de tradução, em português.
 */
export const STORIES_YWN: StorySeed[] = [
  {
    id: 'ywn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'No rio Gregório',
    emoji: '🛶',
    summary: 'Uma visita a uma aldeia yawanawá às margens do rio Gregório, no Acre.',
    cultural_context:
      'O povo yawanawá vive principalmente na Terra Indígena Rio Gregório, no município de Tarauacá (Acre), e realiza todo ano, na lua cheia, o Mariri Yawanawá, festival de música e cultura aberto a visitantes (pib.socioambiental.org/pt/Povo:Yawanawá).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Waka.',
        translation: 'Você chega de canoa a uma curva do rio: água por toda parte.',
        emoji: '💧',
        choices: [
          { text: 'Nukevene.', translation: '(Repare) Um homem caminha pela margem.', next: 'homem' },
          { text: 'Vari.', translation: '(Aponte para o céu) O sol.', wrong: 'Isso não descreve quem está se aproximando de você: “nukevene” (homem) é a palavra certa aqui.' },
        ],
      },
      homem: {
        text: 'Nukevene.',
        translation: 'Ele é um morador da aldeia, às margens do rio Gregório.',
        emoji: '🧑',
        choices: [
          { text: 'Mariri.', translation: 'Ele conta que, na próxima lua cheia, acontece o Mariri — a grande festa do povo yawanawá.', next: 'final' },
          { text: 'Kixa.', translation: '(Você só aponta para a boca dele, sem prestar atenção.)', wrong: 'Melhor prestar atenção ao que ele conta sobre a festa, não só nomear partes do corpo.' },
        ],
      },
      final: {
        text: 'Yawa nawa!',
        translation: 'Gente do queixada! — assim o povo yawanawá se chama: “yawa” (queixada) mais “nawa” (gente).',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Yawa nawa',
          message: 'Você aprendeu de onde vem o nome do povo yawanawá e ouviu falar do Mariri, a festa realizada todo ano na lua cheia, às margens do rio Gregório.',
        },
      },
    },
    glossary: [
      ['waka', 'água'],
      ['nukevene', 'homem'],
      ['mariri', 'festa, dança e canto ritual noturno'],
      ['kixa', 'boca'],
      ['yawa', 'queixada, porco-do-mato'],
      ['nawa', 'povo, gente'],
      ['vari', 'sol'],
    ],
  },
];
