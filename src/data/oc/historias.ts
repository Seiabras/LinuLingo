import type { StorySeed } from '../types';

/** Histórias interativas do occitano — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
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
          { text: 'Mon ostal es gran.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ai” ou “non ai”.' },
        ],
      },
      fraires: {
        text: 'Ah plan! E cossí es ton ostal?',
        translation: 'Que bom! E como é sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mon ostal es pichon.', translation: 'Minha casa é pequena.', next: 'final_bo' },
          { text: 'Ai vint ans.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve sua casa. Fale sobre ela: “mon ostal es…”.' },
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
  {
    id: 'oc-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Fa freg al mercat',
    emoji: '🧤',
    summary: 'No mercado de Tolosa, você conversa com Mirèlha sobre o tempo frio e decide o que comprar para se agasalhar.',
    cultural_context: 'O mercat setmanièr (mercado semanal) ao ar livre continua um ponto de encontro importante nas vilas occitanas — é lá que boa parte das conversas sobre o tempo, a família e a vida da vila acontece, entre uma compra e outra.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Adieu! Fa fòrça freg uèi, non?',
        translation: 'Oi! Está fazendo muito frio hoje, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Òc, fa freg e fa vent.', translation: 'Sim, está frio e tem vento.', next: 'crompar' },
          { text: 'Soi professor a Tolosa.', translation: 'Sou professor em Toulouse.', wrong: 'Mirèlha falou do tempo — isso não responde sobre o frio. Diga “fa freg” ou “fa calor”.' },
        ],
      },
      crompar: {
        text: 'Ai gants e capèls, se vòls crompar quicòm.',
        translation: 'Eu tenho luvas e chapéus, se você quiser comprar algo.',
        emoji: '🧤',
        choices: [
          { text: 'Cromparai un capèl e de gants.', translation: 'Vou comprar um chapéu e luvas.', next: 'final_bo' },
          { text: 'Ai fam, vòli pan.', translation: 'Estou com fome, quero pão.', wrong: 'Mirèlha vende roupas, não pão. Diga o que vai comprar com “cromparai…”.' },
        ],
      },
      final_bo: {
        text: 'Plan! Seràs content amb aquel capèl.',
        translation: 'Muito bem! Você vai ficar feliz com esse chapéu.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon crompa!', message: 'Você comprou um chapéu e luvas novas — já pode enfrentar o frio do mercado occitano!' },
      },
    },
    glossary: [
      ['fa freg', 'está frio'],
      ['cromparai', 'vou comprar'],
      ['capèl', 'chapéu'],
    ],
  },
  {
    id: 'oc-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Una jornada de trabalh',
    emoji: '💼',
    summary: 'No fim de uma longa jornada de trabalho na escola, você encontra o professor Guilhèm e conta como foi o seu dia.',
    cultural_context: 'As vilas occitanas pequenas costumam ter a escòla (escola), a glèisa (igreja) e o mercat (mercado) perto uns dos outros, no centro — ainda hoje o traçado comum das "bastides" medievais do sudoeste da França.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Adieu! As trabalhat tota la jornada?',
        translation: 'Oi! Você trabalhou o dia inteiro?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Òc, ai trabalhat a l\'escòla.', translation: 'Sim, trabalhei na escola.', next: 'sentiments' },
          { text: 'Nevava fòrça ièr.', translation: 'Estava nevando muito ontem.', wrong: 'Guilhèm perguntou se você trabalhou — isso não responde à pergunta. Use “ai trabalhat…”.' },
        ],
      },
      sentiments: {
        text: 'E cossí te sentisses, aprèp tot aquel trabalh?',
        translation: 'E como você se sente, depois de todo esse trabalho?',
        emoji: '😴',
        choices: [
          { text: 'Soi cansat, mas content.', translation: 'Estou cansado, mas feliz.', next: 'final_bo' },
          { text: 'Ai crompat un vestit.', translation: 'Comprei uma roupa.', wrong: 'Isso não diz como você se sente. Use “soi…” com cansat, content ou trist.' },
        ],
      },
      final_bo: {
        text: 'Te compreni plan — quand ieu èri estudiant, trabalhavi tanben fòrça.',
        translation: 'Eu te entendo bem — quando eu era estudante, eu também trabalhava muito.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon jorn de trabalh!', message: 'Guilhèm compartilhou uma lembrança da sua época de estudante — vocês dois trabalharam duro hoje!' },
      },
    },
    glossary: [
      ['ai trabalhat', 'eu trabalhei'],
      ['cossí te sentisses?', 'como você se sente?'],
      ['quand èri estudiant', 'quando eu era estudante'],
    ],
  },
];
