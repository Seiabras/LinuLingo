import type { StorySeed } from '../types';

/**
 * Histórias interativas do maltês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Cada nó usa só palavras e frases já verificadas (ver vocabulario.ts). O jogador sempre escolhe a
 * própria resposta — nenhum personagem decide a identidade ou a fala dele.
 */
export const STORIES_MT: StorySeed[] = [
  {
    id: 'mt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Merħba Malta!',
    emoji: '👋',
    summary: 'Marija dá as boas-vindas a você em Malta e faz a sua primeira conversa em maltês.',
    cultural_context: 'O maltês é a única língua semítica e afro-asiática oficial da União Europeia — e a única língua semítica padronizada do mundo escrita só em alfabeto latino.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Merħba! Bonġu! Jisimni Marija.',
        translation: 'Bem-vindo! Bom dia! Eu me chamo Marija.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bonġu! Jisimni Ana.', translation: 'Bom dia! Eu me chamo Ana.', next: 'nome' },
          { text: 'Skużi?', translation: 'Desculpe?', wrong: 'Marija só se apresentou — não há nada para pedir desculpa. Diga o seu nome com “Jisimni…”.' },
        ],
      },
      nome: {
        text: 'Kif inti?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Tajjeb, grazzi!', translation: 'Bem, obrigado!', next: 'oferta' },
          { text: 'Dar?', translation: 'Casa?', wrong: 'Isso não responde “como você está”. Diga “Tajjeb” (bem).' },
        ],
      },
      oferta: {
        text: 'Trid ilma?',
        translation: 'Você quer água?',
        emoji: '💧',
        choices: [
          { text: 'Iva, grazzi!', translation: 'Sim, obrigado!', next: 'final_bom' },
          { text: 'Le, grazzi.', translation: 'Não, obrigado.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Tajjeb! Saħħa!',
        translation: 'Ótimo! Até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Merħba Malta!', message: 'Você aceitou a água e fez a sua primeira conversa completa em maltês.' },
      },
      final_neutro: {
        text: 'Tajjeb! Saħħa!',
        translation: 'Tudo bem! Até logo!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Saħħa!', message: 'Você recusou educadamente e se despediu — uma conversa completa em maltês.' },
      },
    },
    glossary: [
      ['merħba', 'bem-vindo'],
      ['jisimni', 'eu me chamo'],
      ['kif inti?', 'como você está?'],
      ['tajjeb', 'bem, bom'],
      ['trid', 'você quer'],
    ],
  },
  {
    id: 'mt-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Bonġu, familja!',
    emoji: '👪',
    summary: 'Marija apresenta a família dela e oferece pão ou água.',
    cultural_context: 'O maltês tem cerca de 530 mil falantes — uns 450 mil em Malta e 79 mil na diáspora, sobretudo na Austrália, onde famílias mantêm a língua em casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonġu! Jisimni Marija.',
        translation: 'Bom dia! Eu me chamo Marija.',
        emoji: '📱',
        choices: [
          { text: 'Bonġu! Jisimni Ana.', translation: 'Bom dia! Eu me chamo Ana.', next: 'familja' },
          { text: 'Saħħa!', translation: 'Até logo!', wrong: 'Marija acabou de se apresentar — despedir-se agora seria estranho. Diga o seu nome com “Jisimni…”.' },
        ],
      },
      familja: {
        text: 'Omm! Missier! Familja!',
        translation: 'Mãe! Pai! Família!',
        emoji: '👪',
        choices: [
          { text: 'Kbir!', translation: 'Grande!', next: 'comida' },
          { text: 'Qattus?', translation: 'Gato?', wrong: 'Marija falou da família dela, não de um gato. Reaja com “Kbir!” (grande!) ou siga em frente.' },
        ],
      },
      comida: {
        text: 'Trid ħobż?',
        translation: 'Você quer pão?',
        emoji: '🍞',
        choices: [
          { text: 'Iva, rrid ħobż, grazzi!', translation: 'Sim, eu quero pão, obrigado!', next: 'final_bom' },
          { text: 'Le, rrid ilma, grazzi.', translation: 'Não, eu quero água, obrigado.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Tajjeb!',
        translation: 'Ótimo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Tajjeb!', message: 'Você conheceu a família de Marija e aceitou o pão — uma conversa completa em maltês.' },
      },
      final_neutro: {
        text: 'Tajjeb! Grazzi!',
        translation: 'Tudo bem! Obrigado!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Saħħa!', message: 'Você preferiu a água e se despediu educadamente — outra conversa completa em maltês.' },
      },
    },
    glossary: [
      ['jisimni', 'eu me chamo'],
      ['familja', 'família'],
      ['trid', 'você quer'],
      ['rrid', 'eu quero'],
      ['tajjeb', 'bom, ótimo'],
    ],
  },
];
