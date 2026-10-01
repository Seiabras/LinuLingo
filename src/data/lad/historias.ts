import type { StorySeed } from '../types';

/** Histórias interativas do judeu-espanhol — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LAD: StorySeed[] = [
  {
    id: 'lad-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ke haber en Estambol',
    emoji: '👋',
    summary: 'Você conhece Rashel perto da Torre de Gálata, em Istambul, e faz a sua primeira conversa em ladino.',
    cultural_context: 'O bairro de Gálata, em Istambul, foi por séculos um dos centros da vida sefardita no Império Otomano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ke haber? Me yamo Rashel. Komo estas?',
        translation: 'E aí? Eu me chamo Rachel. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bien, grasias! I tu?', translation: 'Bem, obrigado! E você?', next: 'bien' },
          { text: 'Adio!', translation: 'Tchau!', wrong: 'Rashel acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bien: {
        text: 'Bien tambien! De ande sos?',
        translation: 'Bem também! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'So de São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bueno' },
          { text: 'Bevo agua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “So de…”.' },
        ],
      },
      final_bueno: {
        text: 'Ke bueno! Avlas muy bien el ladino!',
        translation: 'Que bom! Você fala muito bem o ladino!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Muy bien!', message: 'Rashel sorri: você fez a sua primeira conversa em ladino.' },
      },
    },
    glossary: [
      ['ke haber?', 'e aí?'],
      ['komo estas?', 'como você está?'],
      ['so de', 'eu sou de'],
      ['avlas', 'você fala'],
    ],
  },
  {
    id: 'lad-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Burekas en kaza de Moshe',
    emoji: '🥟',
    summary: 'Moshe, um amigo de Izmir, pergunta pela sua família e convida você para comer burekas.',
    cultural_context: 'Esmirna (Izmir) teve uma das maiores comunidades sefarditas do Império Otomano; as burekas de queijo são um clássico da mesa sefardita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ke haber? Tienes ermanos o ermanas?',
        translation: 'E aí? Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Si, tengo un ermano i una ermana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'ermanos' },
          { text: 'Mi kaza es grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “tengo…”.' },
        ],
      },
      ermanos: {
        text: 'Ke bueno! Keres komer burekas en mi kaza?',
        translation: 'Que bom! Quer comer burekas na minha casa?',
        emoji: '🥟',
        choices: [
          { text: 'Si, grasias!', translation: 'Sim, obrigado!', next: 'final_bueno' },
          { text: 'So de São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Moshe fez um convite: responda com “si” ou “no, grasias”.' },
        ],
      },
      final_bueno: {
        text: 'Mi madre aze las burekas mas buenas de Izmir!',
        translation: 'A minha mãe faz as burekas mais gostosas de Esmirna!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ke bueno!', message: 'Você foi convidado para comer burekas com a família de Moshe.' },
      },
    },
    glossary: [
      ['ermano / ermana', 'irmão / irmã'],
      ['tengo', 'eu tenho'],
      ['keres', 'você quer'],
      ['burekas', 'pastéis de massa folhada'],
    ],
  },
];
