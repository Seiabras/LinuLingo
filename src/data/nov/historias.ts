import type { StorySeed } from '../types';

/**
 * Histórias interativas do novial — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Toda frase em novial usa só palavras confirmadas em `vocabulario.ts` (fontes: Jespersen 1928/1930,
 * Wikipédia/Wikibooks) — nenhuma palavra nova foi composta além do que a gramática documentada
 * permite (genitivo -n, plural -s, advérbio -m).
 */
export const STORIES_NOV: StorySeed[] = [
  {
    id: 'nov-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon jorne, amike!',
    emoji: '👋',
    summary: 'Você chega a um encontro de falantes de novial e conhece Petro, outro participante, no saguão do hotel.',
    cultural_context: 'Otto Jespersen publicou o novial em 1928, depois de décadas estudando línguas e apoiando (e depois criticando) o ido. Hoje o novial tem uma pequena comunidade de entusiastas que trocam mensagens e organizam encontros on-line.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon jorne! Qui es vun nome?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Men nome es Ana. E vun?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adie!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Me es Petro. Ob vu sava parla Novial?',
        translation: 'Eu sou o Petro. Você sabe falar novial?',
        emoji: '😊',
        choices: [
          { text: 'Yes, me sava parla Novial.', translation: 'Sim, eu sei falar novial.', next: 'final_bo' },
          { text: 'Li pane es boni.', translation: 'O pão é bom.', wrong: 'Isso não responde se você sabe falar novial. Tente "Yes…" ou "Non…".' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Danka, Ana!',
        translation: 'Muito bom! Obrigado, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Danka, amike!', message: 'Petro sorri: você fez a sua primeira conversa em novial, num encontro internacional de verdade.' },
      },
    },
    glossary: [
      ['bon jorne / adie', 'olá / tchau'],
      ['men nome es…', 'meu nome é…'],
      ['danka', 'obrigado'],
    ],
  },
  {
    id: 'nov-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'In Petron hause',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'O "Novial Lexike" (1930), o dicionário oficial de Jespersen, tem milhares de palavras — incluindo "familie" e "hause", bem parecidas com as de outras línguas europeias, de propósito, pra facilitar o aprendizado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon jorne! Ob vu have fratros?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Yes, me have un fratro e un fratra.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Men hause es grandi.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "yes, me have…" ou "non".' },
        ],
      },
      fam: {
        text: 'Tre boni! E qualim es vun hause?',
        translation: 'Muito bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Men hause es mikri ma boni.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dek dies.', translation: 'Dez dias.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "men hause…"' },
        ],
      },
      final_bo: {
        text: 'Tre boni! Vu es men amike.',
        translation: 'Ótimo! Você é meu amigo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Danka, Petro!', message: 'Petro gostou de saber da sua família — e já te chamou de amigo.' },
      },
    },
    glossary: [
      ['fratro / fratra', 'irmão / irmã'],
      ['men hause', 'minha casa'],
      ['have (me have)', 'ter (eu tenho)'],
    ],
  },
];
