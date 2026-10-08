import type { StorySeed } from '../types';

/**
 * Histórias interativas do volapük — por enquanto uma por nível, A1.1 e A1.2 (pacote incompleto,
 * ver `incomplete` em index.ts). As falas de saudação e apresentação usam as frases oficiais de "Useful phrases in
 * Volapük", Omniglot (https://www.omniglot.com/language/phrases/volapuk.php, já na forma revisada
 * por Arie de Jong em 1930), citadas tal como estão na fonte.
 */
export const STORIES_VO: StorySeed[] = [
  {
    id: 'vo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Glidö in Kongred Volapüka',
    emoji: '👋',
    summary: 'Você chega a um congresso de volapük e conhece Fredrik, outro participante, no saguão.',
    cultural_context: 'O volapük foi a primeira língua construída internacional a ter congressos de verdade: o terceiro, em 1889, foi falado inteiramente na língua — dezesseis anos antes do primeiro congresso de esperanto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Lio panemol-li?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Nem oba binon Ana. Ed ol-li?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adyö!', translation: 'Tchau!', wrong: 'Fredrik acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Nem oba binon Fredrik. Plitos obi ad kolkömön oli!',
        translation: 'Meu nome é Fredrik. Tenho o prazer de te conhecer!',
        emoji: '😊',
        choices: [
          { text: 'Danö! Lio stadol-li?', translation: 'Obrigado! Como você está?', next: 'final_bo' },
          { text: 'Vat binon gudik.', translation: 'A água é boa.', wrong: 'Isso não responde à apresentação de Fredrik. Tente agradecer com "Danö!" ou perguntar como ele está.' },
        ],
      },
      final_bo: {
        text: 'Gudiko, danö! Ob labob flen nulik.',
        translation: 'Bem, obrigado! Eu tenho um amigo novo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um amigo novo!', message: 'Fredrik sorri: você fez a sua primeira conversa em volapük, num congresso de verdade.' },
      },
    },
    glossary: [
      ['glidö / adyö', 'olá / tchau'],
      ['nem oba binon… / lio panemol-li?', 'meu nome é… / qual é o seu nome?'],
      ['danö / plitos obi ad kolkömön oli', 'obrigado / tenho o prazer de te conhecer'],
    ],
  },
  {
    id: 'vo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Famül e dom',
    emoji: '🏠',
    summary: 'Fredrik pergunta sobre a sua família e a sua casa, depois do primeiro encontro no congresso.',
    cultural_context: 'O movimento do volapük chegou a ter cerca de 283 clubes pelo mundo nos anos 1880 — famílias e grupos inteiros se reuniam só pra praticar a língua, antes da ascensão do esperanto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Labol-li blodi u söri?',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '📜',
        choices: [
          { text: 'Si, ob labob blodi e söri.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Dom oba binon gretik.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "Si, ob labob…" ou "Nö."' },
        ],
      },
      fam: {
        text: 'Gudiko! E lio binon-li dom ola?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Dom oba binon smalik ab gudik.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Deg vins.', translation: 'Dez vinhos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela com "Dom oba binon…"' },
        ],
      },
      final_bo: {
        text: 'Gudik! Ob labob flen nulik.',
        translation: 'Que bom! Eu tenho um amigo novo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma amizade nova!', message: 'Fredrik gostou de saber da sua família — e agora você tem um amigo novo que fala volapüque.' },
      },
    },
    glossary: [
      ['blod / sör', 'irmão / irmã'],
      ['dom oba', 'minha casa'],
      ['labön (ob labob)', 'ter (eu tenho)'],
    ],
  },
];
