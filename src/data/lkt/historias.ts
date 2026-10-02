import type { StorySeed } from '../types';

/**
 * Histórias interativas do lakota — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas usam só frases e palavras confirmadas em vocabulario.ts (ver o cabeçalho de lá para as
 * fontes). Em nenhum momento um personagem decide a identidade do jogador: sempre que a conversa
 * toca nisso (homem/mulher), é o próprio jogador quem escolhe a resposta.
 */
export const STORIES_LKT: StorySeed[] = [
  {
    id: 'lkt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hau! Táku eníčiyapi he?',
    emoji: '🙋',
    summary: 'Você conhece alguém num encontro da comunidade e troca os primeiros cumprimentos em lakota.',
    cultural_context: '“Hau” é a saudação lakota mais conhecida hoje em dia, usada em encontros de família, powwows e aulas de revitalização da língua nas reservas de Pine Ridge, Rosebud, Standing Rock e Cheyenne River.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hau! Táku eníčiyapi he?',
        translation: 'Oi! Qual é o seu nome?',
        emoji: '🙋',
        choices: [
          { text: 'Miyé, Linu emáčiyapi.', translation: 'Eu, me chamo Linu.', next: 'nome' },
          { text: 'Philámayaye!', translation: 'Obrigado!', wrong: 'Isso agradece, mas a pergunta foi pelo seu nome. Responda com “...emáčiyapi”.' },
        ],
      },
      nome: {
        text: 'Taŋyáŋ yahí, Linu! Wičháša he, wíŋyaŋ he?',
        translation: 'Bem-vindo, Linu! Você é homem ou mulher?',
        emoji: '🤗',
        choices: [
          { text: 'Wičháša.', translation: 'Homem.', next: 'final' },
          { text: 'Wíŋyaŋ.', translation: 'Mulher.', next: 'final' },
          { text: 'Hiyá.', translation: 'Não.', wrong: 'Isso não diz se você é homem ou mulher — escolha “Wičháša” ou “Wíŋyaŋ”.' },
        ],
      },
      final: {
        text: 'Wašté! Philámayaye, Linu.',
        translation: 'Que bom! Obrigado, Linu.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Taŋyáŋ yahí!', message: 'Você trocou os primeiros cumprimentos em lakota.' },
      },
    },
    glossary: [
      ['Hau', 'oi, olá'],
      ['Táku eníčiyapi he?', 'qual é o seu nome?'],
      ['...emáčiyapi', 'meu nome é...'],
      ['philámayaye', 'obrigado'],
    ],
  },
  {
    id: 'lkt-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tiwáhe: a família',
    emoji: '👪',
    summary: 'Você visita a casa de uma amiga e conhece a família dela.',
    cultural_context: 'Nas comunidades lakota, “até” (pai) e “iná” (mãe) costumam valer também para tios e tias próximos — a família se estende além dos pais biológicos, um traço comum às línguas siouanas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hau! Táku eníčiyapi he?',
        translation: 'Oi! Qual é o seu nome?',
        emoji: '🏠',
        choices: [
          { text: 'Miyé, Linu emáčiyapi.', translation: 'Eu, me chamo Linu.', next: 'apresenta' },
          { text: 'Wičháša.', translation: 'Homem.', wrong: 'Isso não é um nome — responda com “...emáčiyapi”.' },
        ],
      },
      apresenta: {
        text: 'Até. Iná. Wakȟáŋyeža núŋpa.',
        translation: 'Pai. Mãe. Duas crianças.',
        emoji: '👪',
        choices: [
          { text: 'Wašté!', translation: 'Que bom!', next: 'pergunta_filhos' },
          { text: 'Hiyá!', translation: 'Não!', wrong: 'Isso soa como se você estivesse discordando da apresentação da família — responda com algo positivo, como “Wašté!”.' },
        ],
      },
      pergunta_filhos: {
        text: 'Wakȟáŋyeža núŋpa he?',
        translation: 'São duas crianças, né?',
        emoji: '❓',
        choices: [
          { text: 'Háŋ, wakȟáŋyeža núŋpa.', translation: 'Sim, duas crianças.', next: 'final' },
          { text: 'Hiyá, wakȟáŋyeža yámni.', translation: 'Não, três crianças.', wrong: 'A família tem duas crianças (“núŋpa”), não três — reveja a apresentação.' },
        ],
      },
      final: {
        text: 'Wašté! Philámayaye.',
        translation: 'Que bom! Obrigado.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Tiwáhe', message: 'Você conheceu a família e contou as crianças em lakota.' },
      },
    },
    glossary: [
      ['até', 'pai'],
      ['iná', 'mãe'],
      ['wakȟáŋyeža', 'criança'],
      ['núŋpa', 'dois'],
    ],
  },
];
