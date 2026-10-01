import type { StorySeed } from '../types';

/** Histórias interativas do macedônio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_MK: StorySeed[] = [
  {
    id: 'mk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво во Скопје',
    emoji: '👋',
    summary: 'Você conhece Ana na estação de Skopje e faz a sua primeira conversa em macedônio.',
    cultural_context: 'Skopje (Скопје) é a capital e a maior cidade da Macedônia do Norte, às margens do rio Vardar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Јас се викам Ана. Како си?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добро, благодарам! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Довидување!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'И јас сум добро! Од каде си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Јас сум од Сао Паоло.', translation: 'Sou de São Paulo.', next: 'final_dobro' },
          { text: 'Пијам вода.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Јас сум од…”.' },
        ],
      },
      final_dobro: {
        text: 'Убаво! Добредојде во Скопје!',
        translation: 'Que legal! Bem-vindo a Skopje!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добар почеток!', message: 'Ana sorri: você fez a sua primeira conversa em macedônio.' },
      },
    },
    glossary: [
      ['здраво', 'oi, olá'],
      ['како си?', 'como vai?'],
      ['јас сум од', 'eu sou de'],
      ['добредојде', 'bem-vindo'],
    ],
  },
  {
    id: 'mk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Вечера со семејството',
    emoji: '👪',
    summary: 'Goran, um amigo de Bitola, pergunta pela sua família e convida você para jantar.',
    cultural_context: 'Bitola (Битола) é a segunda maior cidade da Macedônia do Norte; na sua rua principal, a Широк Сокак, prédios do tempo otomano ficam lado a lado com construções ao estilo europeu.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Имаш ли браќа или сестри?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Да, имам брат и сестра.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'braka' },
          { text: 'Куќата ми е голема.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “имам…”.' },
        ],
      },
      braka: {
        text: 'Убаво! Сакаш ли да дојдеш кај нас во сабота?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, многу благодарам!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Јас сум од Сао Паоло.', translation: 'Sou de São Paulo.', wrong: 'Goran fez um convite: responda com “да” ou “не, благодарам”.' },
        ],
      },
      final_bom: {
        text: 'Одлично! Мајка ми прави леб и сирење.',
        translation: 'Ótimo! Minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Покана!', message: 'Você foi convidado para jantar com a família de Goran.' },
      },
    },
    glossary: [
      ['брат / сестра', 'irmão / irmã'],
      ['имам', 'eu tenho'],
      ['да', 'sim'],
      ['кај нас', 'na nossa casa'],
    ],
  },
];
