import type { StorySeed } from '../types';

/**
 * Histórias do aleúte — uma por subnível, do A1.1 ao A2.2. As do A2 (ale-h3 e ale-h4) só usam frases
 * atkanas de Knut Bergsland, “Aleut Dictionary” (1994) [BERG94] e “Aleut Grammar” (1997) [BERG97], com a
 * página no comentário de cada nó, e as do [OMNI]. [DIRKS78]: Moses Dirks e Lydia Dirks, “Niiĝuĝim
 * Qalgadangis / Atkan Food” (Universidade do Alasca, 1978; archive.org/details/micro_IA41153602_0457). Nenhuma frase foi montada; quando duas frases das
 * fontes aparecem juntas no mesmo balão, cada uma é citada.
 *
 * A1.1 e A1.2: Ambientadas em Atka, a ilha do
 * dialeto padrão do curso. Falas do [OMNI] (“Aang!”, “Alqutaxt?”, “Qaĝaasakung huzuu haqakux̂”, “Kiin
 * asax̂tax̂t?”, “… asax̂takuq”, “Ukuĝaan ix̂amnakux̂”, “Ukudigada”, “Qaatunaxt”, “Qanaang uma ii?”,
 * “Tutalagakuq”) e da sintaxe do [WIKI] (“Tayaĝux̂ awakux̂”), com a tradução deles.
 */
export const STORIES_ALE: StorySeed[] = [
  {
    id: 'ale-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aang!',
    emoji: '🛬',
    summary: 'O Linu chega à ilha de Atka, nas Aleutas, e é recebido em aleúte.',
    cultural_context:
      'Atka fica no meio da corrente das ilhas Aleutas. É a ilha que dá nome ao dialeto ocidental do aleúte, o atkan, o da gramática de conversa “How the Atkans Talk”, de Anna Berge e Moses Dirks.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aang! Qaĝaasakung huzuu haqakux̂!',
        translation: 'Olá! Obrigado a todos por virem!',
        emoji: '👋',
        choices: [
          { text: 'Aang! Qaĝaasakung!', translation: 'Olá! Obrigado!', next: 'nome' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Cumprimente: “Aang!”.' },
        ],
      },
      nome: {
        text: 'Kiin asax̂tax̂t?',
        translation: 'Qual é o seu nome?',
        emoji: '🏷️',
        choices: [
          { text: 'Linu asax̂takuq.', translation: 'Meu nome é Linu.', next: 'final' },
          { text: 'Qanaang uma ii?', translation: 'Quanto custa isto?', wrong: 'Perguntaram o seu nome. Diga “Linu asax̂takuq”.' },
        ],
      },
      final: {
        text: 'Ukuĝaan ix̂amnakux̂!',
        translation: 'Que bom te ver!',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você cumprimentou, agradeceu e disse o seu nome em aleúte logo na chegada a Atka.' },
      },
    },
    glossary: [
      ['Aang', 'olá; sim'],
      ['Qaĝaasakung', 'obrigado'],
      ['Kiin asax̂tax̂t?', 'qual é o seu nome?'],
      ['Ukuĝaan ix̂amnakux̂', 'que bom te ver'],
    ],
  },
  {
    id: 'ale-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Qaatunaxt!',
    emoji: '🐟',
    summary: 'Na casa de uma família de Atka, o Linu é convidado para comer peixe.',
    cultural_context:
      'Nas ilhas Aleutas, a comida vem do mar: salmão, linguado, bacalhau. E muitas palavras da cozinha vieram do russo, como “chaasxix̂” (xícara) e “yaavlukax̂” (maçã).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Tayaĝux̂ awakux̂. Qaatunaxt!',
        translation: 'O homem está trabalhando. Bom apetite!',
        emoji: '🍽️',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'peixe' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: 'Desejaram bom apetite! Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      peixe: {
        text: 'Adgayux? Chagix̂?',
        translation: 'Salmão? Linguado?',
        emoji: '🐟',
        choices: [
          { text: 'Adgayux. Qaĝaasakung!', translation: 'Salmão. Obrigado!', next: 'final' },
          { text: 'Sabaakax̂.', translation: 'Cachorro.', wrong: 'Ofereceram peixe. Escolha um: “Adgayux” ou “Chagix̂”.' },
        ],
      },
      final: {
        text: 'Ukudigal!',
        translation: 'Boa sorte!',
        emoji: '🍀',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você agradeceu o “Qaatunaxt!” e escolheu o salmão — e se despediram com um “Ukudigal!”.' },
      },
    },
    glossary: [
      ['Qaatunaxt', 'bom apetite'],
      ['adgayux', 'salmão'],
      ['chagix̂', 'linguado'],
      ['Ukudigal', 'boa sorte'],
    ],
  },
  {
    id: 'ale-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Qanayiim haqanax̂t?',
    emoji: '☔',
    summary: 'O Linu volta a Atka num dia de chuva e conta quando chegou.',
    // [BERG94] General Introduction (os Niiĝuĝis, das ilhas Andreanof); [DIRKS78] Introduction (a coleta na
    // maré baixa: ouriços-do-mar, mexilhões).
    cultural_context:
      'Os aleútes de Atka são os Niiĝuĝis, a gente das ilhas Andreanof. Na maré baixa, desciam à praia para colher ouriços-do-mar e mexilhões entre as pedras.',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 90: “qanayiim haqanax̂t ‘when did you come?’”; [BERG94] p. 322 (qilagan).
      inicio: {
        text: 'Aang! Qanayiim haqanax̂t?',
        translation: 'Olá! Quando você veio?',
        emoji: '🛬',
        choices: [
          { text: 'Qilagan.', translation: 'Ontem.', next: 'chuva' },
          { text: 'Qilam qaa.', translation: 'Café da manhã.', wrong: 'Perguntaram quando você chegou. Responda “Qilagan”: ontem.' },
        ],
      },
      // [BERG94] p. 86: “chix̂tal angalikux̂ A 1950- it is raining today”.
      chuva: {
        text: 'Chix̂tal angalikux̂.',
        translation: 'Está chovendo hoje.',
        emoji: '🌧️',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'cha' },
          { text: 'Qilachxizax̂!', translation: 'Bom dia!', wrong: 'Ela falou da chuva. Concorde: “Aang”.' },
        ],
      },
      // [OMNI] “Qaatunaxt”; [BERG94] p. 133: “chaayukuq A 1950 I'm drinking tea”.
      cha: {
        text: 'Qaatunaxt!',
        translation: 'Bom apetite!',
        emoji: '🍵',
        choices: [
          { text: 'Qaĝaasakung! Chaayukuq.', translation: 'Obrigado! Estou tomando chá.', next: 'final' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: '“Qaatunaxt” é bom apetite. Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 94: “txin ukux̂tahliinaq ‘I'll see you again later’”.
      final: {
        text: 'Txin ukux̂tahliinaq.',
        translation: 'Vou te ver de novo mais tarde.',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Ukudigada!', message: 'Você disse quando chegou (“qilagan”), falou da chuva e tomou chá na casa de uma família de Atka.' },
      },
    },
    glossary: [
      ['qilagan', 'amanhã; (com o passado) ontem'],
      ['chix̂tal angalikux̂', 'está chovendo hoje'],
      ['chaayukuq', 'estou tomando chá'],
      ['txin ukux̂tahliinaq', 'vou te ver de novo mais tarde'],
    ],
  },
  {
    id: 'ale-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Isuĝix̂ qankul saĝanaq',
    emoji: '🦭',
    summary: 'Na praia de Atka, um pescador conta a caçada de ontem.',
    // [DIRKS78] Introduction (a pesca de linguado e bacalhau no verão); [BERG97] §2.1.5.1, p. 64 (“All the
    // lower numerals are also verbal […] transitive in the sense of ‘to make, get - (game)’”).
    cultural_context:
      'Em Atka, os homens pescavam linguado e bacalhau no verão e secavam o peixe para o inverno. Em aleúte, os números também viram verbo: “qankul”, de “qankus” (três), é pegar três na caça.',
    start: 'inicio',
    nodes: {
      // [OMNI] “Alqutaxt?”; [BERG94] p. 535: “asx̂aaĝinaaĝikuq A 1952 I feel sick”.
      inicio: {
        text: 'Aang! Alqutaxt?',
        translation: 'Olá! Como vai?',
        emoji: '🏝️',
        choices: [
          { text: 'Aang! Qaĝaasakung!', translation: 'Oi! Obrigado!', next: 'focas' },
          { text: 'Asx̂aaĝinaaĝikuq.', translation: 'Estou me sentindo mal.', next: 'medico' },
        ],
      },
      // [BERG94] p. 161 (duuxturax̂, médico); [BERG97] p. 94: “Piitrax̂ waaĝaaĝan amukux̂ ‘Peter will come
      // soon’”.
      medico: {
        text: 'Duuxturax̂? Piitrax̂ waaĝaaĝan amukux̂.',
        translation: 'Médico? O Pedro vai chegar logo.',
        emoji: '🩺',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'focas' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Ainda não é hora de ir embora. Agradeça a ajuda: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 64: “A 1978 isuĝix̂ qankul saĝanaq ‘I got three seals yesterday’”.
      focas: {
        text: 'Isuĝix̂ qankul saĝanaq.',
        translation: 'Peguei três focas ontem.',
        emoji: '🦭',
        choices: [
          { text: 'Qankus?', translation: 'Três?', next: 'linguado' },
          { text: 'Algidim hatix̂?', translation: 'Vinte?', wrong: 'Ele disse “qankul”: é o “qankus” (três) usado como verbo, pegar três.' },
        ],
      },
      // [BERG97] p. 90: “tayaĝux̂ chagix̂ asx̂atnax̂ ‘the man killed (caught) a halibut’”.
      linguado: {
        text: 'Aang. Tayaĝux̂ chagix̂ asx̂atnax̂.',
        translation: 'Sim. O homem pegou um linguado.',
        emoji: '🐠',
        choices: [
          { text: 'Ukudigal!', translation: 'Boa sorte!', next: 'final' },
          { text: 'Sabaakax̂.', translation: 'Cachorro.', wrong: 'Ele falou da pesca. Deseje boa sorte: “Ukudigal!”.' },
        ],
      },
      // [BERG94] p. 322: “qilagan haqaaĝan saĝanax̂ A 1952 he will come tomorrow”.
      final: {
        text: 'Qilagan haqaaĝan saĝanax̂.',
        translation: 'Ele vai chegar amanhã.',
        emoji: '🌅',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu a caçada de ontem (“isuĝix̂ qankul saĝanaq”), o linguado do homem e quem chega amanhã.' },
      },
    },
    glossary: [
      ['isuĝix̂ qankul saĝanaq', 'peguei três focas ontem'],
      ['chagix̂', 'linguado'],
      ['duuxturax̂', 'médico'],
      ['Ukudigal', 'boa sorte'],
    ],
  },
];
