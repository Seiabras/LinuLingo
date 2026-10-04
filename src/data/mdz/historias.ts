import type { StorySeed } from '../types';

/**
 * Histórias interativas do aikewára — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas numa aldeia da TI Sororó. As falas vêm de J. D. Lopes, tese UnB 2014 ([L14]):
 *   - “Mo wi pa'e eresor?” (s.v. “mo”, “usor”; tradução “você” pelo paradigma de [L15] p. 158 — ver
 *     vocabulario.ts); “Aj'aw pa'e reko?” (ex. 060); “Nawi” (s.v. “nawi”); “Kuej wehe puta aha ityma
 *     mani'oga weko pupe” (s.v. “kuej wehe”); “Katuete” (s.v. “katuete”); “Akojte ne rehe” (s.v.
 *     “ukojte”); “Ajnon” (s.v. “ajnon”, “assim, isso mesmo”);
 *   - “Ne ma'euej pa'e?” / “Ti ma'euej” (s.v. “ima'euej”); “Ti kane'uete ri'a” (s.v. “eumaw”);
 *     “Kopesor, sakaru” (s.v. “ukaru”); “Tiwa'aro'o” (s.v. “o'o”, carne de caititu); “Temi'u
 *     episepise” (s.v. “ipise”, “emi'u”).
 * Única frase montada por nós: “Ka'a wi asor” (eu vim do mato) — justificativa em curriculo.ts.
 * Os usos de “Katuete!” como “que bom!” e de “Ajnon” como concordância seguem as traduções do
 * dicionário (“bem, bom”; “assim, isso mesmo”); as fontes não dizem que são fórmulas fixas.
 */
export const STORIES_MDZ: StorySeed[] = [
  {
    id: 'mdz-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Mo wi pa'e eresor?",
    emoji: '👋',
    summary: 'O Linu chega a uma aldeia aikewara depois de andar pelo mato, e o dono da casa quer saber de onde ele veio.',
    // [ISA] (aldeia grande, okara, com pátio central; roça) e [L14] cap. 3.3 (os mais velhos
    // conversam em aikewára; os jovens, em português).
    cultural_context:
      'Os Aikewara viviam numa só aldeia grande, com um pátio no meio onde aconteciam as festas, e a roça era o centro do trabalho. Hoje os mais velhos conversam em aikewára entre si, e os mais novos entendem muito do que ouvem, mesmo falando mais o português.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Mo wi pa'e eresor?",
        translation: 'De onde você veio?',
        emoji: '🏡',
        choices: [
          { text: "Ka'a wi asor.", translation: 'Eu vim do mato.', next: 'aqui' },
          { text: "Ti ma'euej.", translation: 'Estou com fome.', wrong: 'Ele perguntou de onde você veio. Responda “Ka’a wi asor” (eu vim do mato).' },
        ],
      },
      aqui: {
        text: "Aj'aw pa'e reko?",
        translation: 'Você está morando aqui?',
        emoji: '🛖',
        choices: [
          { text: 'Nawi.', translation: 'Não.', next: 'roca' },
          { text: 'Ajnon.', translation: 'Isso mesmo.', wrong: 'Você só está de passagem! Responda “Nawi” (não).' },
        ],
      },
      roca: {
        text: "Kuej wehe puta aha ityma mani'oga weko pupe.",
        translation: 'Amanhã eu vou plantar mandioca na minha roça.',
        emoji: '🌱',
        choices: [
          { text: 'Katuete!', translation: 'Que bom!', next: 'final' },
          { text: "Ereker pa'e?", translation: 'Você dormiu?', wrong: 'Ele contou o que vai fazer amanhã. Diga que acha bom: “Katuete!”.' },
        ],
      },
      final: {
        text: 'Akojte ne rehe.',
        translation: 'Eu gosto de você.',
        emoji: '🤝',
        ending: {
          tone: 'bom',
          title: 'Akojte ne rehe!',
          message: 'Você contou de onde veio (“Ka’a wi asor”), disse que não mora ali (“Nawi”) e achou bom o plano da roça (“Katuete!”) — e ganhou um amigo.',
        },
      },
    },
    glossary: [
      ["Mo wi pa'e eresor?", 'de onde você veio?'],
      ["Aj'aw pa'e reko?", 'você está morando aqui?'],
      ['kuej wehe', 'amanhã'],
      ['Akojte ne rehe', 'eu gosto de você'],
    ],
  },
  {
    id: 'mdz-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Ti ma'euej",
    emoji: '🍲',
    summary: 'O Linu chega com fome a uma casa aikewara e é chamado para comer.',
    // [ISA] (caça preferida: anta, veado, queixada, caititu, paca, tatu, cutia; mutum e jacu) e [L14]
    // s.v. “tiwa'a” (“aihyra'u ri'a tiwa'a”, eu quero assar o caititu).
    cultural_context:
      'A caça sempre foi muito valorizada pelos Aikewara: anta, veado, queixada, caititu, paca, tatu e cutia, e, entre as aves, o mutum e o jacu. A carne de caititu é “tiwa’aro’o”, e o dicionário da língua traz até a frase “aihyra’u ri’a tiwa’a”: eu quero assar o caititu.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Ne ma'euej pa'e?",
        translation: 'Você está com fome?',
        emoji: '🏡',
        choices: [
          { text: "Ti ma'euej.", translation: 'Estou com fome.', next: 'convite' },
          { text: "Ti kane'uete ri'a.", translation: 'Estou muito cansado.', wrong: 'Ele perguntou se você está com fome. Responda “Ti ma’euej” (estou com fome).' },
        ],
      },
      convite: {
        text: 'Kopesor, sakaru.',
        translation: 'Vem aqui, vamos comer.',
        emoji: '🍽️',
        choices: [
          { text: 'Katuete!', translation: 'Que bom!', next: 'carne' },
          { text: 'Nawi.', translation: 'Não.', wrong: 'Você está com fome! Aceite o convite: “Katuete!”.' },
        ],
      },
      carne: {
        text: "Tiwa'aro'o.",
        translation: 'Carne de caititu.',
        emoji: '🍖',
        choices: [
          { text: "Temi'u episepise.", translation: 'A comida está muito gostosa.', next: 'final' },
          { text: "Ma'esawara.", translation: 'Cachorro.', wrong: '“Ma’esawara” é o cachorro! Prove a comida e elogie: “Temi’u episepise”.' },
        ],
      },
      final: {
        text: 'Ajnon.',
        translation: 'Isso mesmo.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: "Temi'u episepise!",
          message: 'Você disse que estava com fome (“Ti ma’euej”), aceitou o convite para comer e elogiou a comida: “Temi’u episepise” (a comida está muito gostosa).',
        },
      },
    },
    glossary: [
      ["Ne ma'euej pa'e?", 'você está com fome?'],
      ['Kopesor, sakaru', 'vem aqui, vamos comer'],
      ["tiwa'aro'o", 'carne de caititu'],
      ["Temi'u episepise", 'a comida está muito gostosa'],
    ],
  },
];
