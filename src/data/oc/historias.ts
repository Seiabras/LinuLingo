import type { StorySeed } from '../types';

/** Histórias interativas do occitano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_OC: StorySeed[] = [
  {
    id: 'oc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Adieu a Tolosa',
    emoji: '👋',
    summary: 'Você conhece Sabina numa praça de Tolosa (Toulouse) e faz sua primeira conversa em occitano.',
    cultural_context: 'Tolosa (Toulouse, em francês) é considerada a capital histórica e cultural da Occitânia, e ficou conhecida como a "cidade rosa" pela cor dos tijolos de seus prédios antigos. É lá que ficam várias das instituições que hoje promovem a língua e a cultura occitanas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Adieu! M'apèli Sabina. Cossí vas?",
        translation: 'Oi! Eu me chamo Sabina. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Va plan, mercé! E tu?', translation: 'Vou bem, obrigado! E você?', next: 'plan' },
          { text: 'A lèu!', translation: 'Até logo!', wrong: 'Sabina acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      plan: {
        text: "Plan tanben! E tu, d'ont siás?",
        translation: 'Bem também! E você, de onde é?',
        emoji: '😊',
        choices: [
          { text: 'Soi de Brasil.', translation: 'Sou do Brasil.', next: 'final_bo' },
          { text: 'Aimi lo cafè.', translation: 'Eu gosto do café.', wrong: 'Isso não responde de onde você é. Tente "Soi de…".' },
        ],
      },
      final_bo: {
        text: 'Ai! Benvenguda a Tolosa.',
        translation: 'Ah! Bem-vinda a Tolosa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Una bona conversa!', message: 'Sabina sorri: você fez sua primeira conversa em occitano, na "cidade rosa" da Occitânia!' },
      },
    },
    glossary: [
      ['adieu', 'oi'],
      ['va plan', 'vou bem'],
      ['soi de', 'sou de'],
    ],
  },
  {
    id: 'oc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Un apèl a la familha',
    emoji: '📞',
    summary: 'Você liga para sua nova amiga occitana Miquèla e conta um pouco sobre sua família e sua casa.',
    cultural_context: 'Hoje, boa parte da transmissão do occitano às crianças acontece nas Calandretas, escolas associativas que dão aula na língua desde a educação infantil — um esforço para manter viva uma língua que a UNESCO classifica como em risco de desaparecer.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Adieu! As de fraires?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Òc, ai un fraire e una sòrre.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fraires' },
          { text: 'Mon ostal es gran.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «ai» ou «non ai».' },
        ],
      },
      fraires: {
        text: 'Ah plan! E cossí es ton ostal?',
        translation: 'Que bom! E como é sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mon ostal es pichon.', translation: 'Minha casa é pequena.', next: 'final_bo' },
          { text: 'Ai vint ans.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve sua casa. Fale sobre ela: «mon ostal es…».' },
        ],
      },
      final_bo: {
        text: 'Qué plaser! Aimi ta familha.',
        translation: 'Que prazer! Eu gosto da sua família.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Novèla amistat!', message: 'Miquèla adorou saber da sua família e da sua casa — e já convidou você para conhecer Tolosa!' },
      },
    },
    glossary: [
      ['as de fraires', 'você tem irmãos'],
      ['mon ostal', 'minha casa'],
      ['ai', 'eu tenho'],
    ],
  },
];
