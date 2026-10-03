import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo apache ocidental). */
export const COMMUNITY_APW: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Dagotʼee!',
    content: 'Dagotee!',
    reference: 'Dagotʼee!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Dałaá, nakih, táági, ___?',
    content: "Dałaá, nakih, táági, ashdla'i.",
    reference: "Dałaá, nakih, táági, dį́į́'i.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '“___”: obrigado(a).',
    content: 'Dagotʼee.',
    reference: 'Áho.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não confirmam uma distinção simples entre tratamento
 * formal e informal (como “tu”/“você”) em apache ocidental — por isso o cenário fica como informal,
 * sem inventar um contraste que nenhuma fonte confirmou (ver `formalMarkers` em `index.ts`).
 */
export const SCENARIOS_APW: ScenarioSeed[] = [
  {
    id: 'apw-s1',
    title: 'Encontro em San Carlos',
    emoji: '🏜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma pessoa apache ocidental de San Carlos, Arizona',
    description: 'Você encontra uma pessoa da comunidade apache ocidental de San Carlos, no Arizona, e troca as primeiras palavras.',
    turns: [
      {
        bot: 'Dagotʼee!',
        botTranslation: 'Oi!',
        keywords: ['dagotʼee'],
        suggestions: ['Dagotʼee!'],
      },
      {
        bot: 'Shash. Łį́į́ʼ.',
        botTranslation: 'Um urso. Um cavalo.',
        keywords: ['áho'],
        suggestions: ['Áho!'],
      },
    ],
  },
];

/**
 * O apache ocidental pertence à família na-dené, sem parentesco com o português: não há cognatos
 * léxicos entre as duas línguas. Por isso estas notas de etimologia olham para dentro da própria
 * língua e para o parentesco com as línguas atabascanas irmãs, usando as etimologias do próprio
 * Wiktionary em inglês (que cita, quando existe, a reconstrução em proto-atabascano e os cognatos em
 * navajo, mescalero-chiricauá, jicarila e apache das planícies).
 */
export const ETYMOLOGY_APW: EtymologySeed[] = [
  {
    word: 'mansáána',
    root_word: 'manzana',
    origin_language: 'Espanhol',
    cognates: c(['es (espanhol)', 'manzana']),
    evolution_note:
      'O Wiktionary registra que “mansáána” (maçã) é um empréstimo direto do espanhol “manzana” — um dos vários empréstimos ao espanhol que entraram no apache ocidental pelo contato histórico com colonizadores e vizinhos hispanofalantes no sudoeste dos Estados Unidos e no norte do México.',
    transparent: false,
  },
  {
    word: 'kįh',
    root_word: 'kįh',
    origin_language: 'Apache ocidental (atabascano meridional)',
    cognates: c(['nv (navajo)', 'kin']),
    evolution_note:
      'Segundo o Wiktionary, “kįh” (casa, construção) é cognato do navajo “kin” (casa): não um empréstimo recente, mas a mesma raiz atabascana herdada de forma independente pelas duas línguas — uma prova concreta do parentesco próximo entre o apache ocidental e o navajo.',
    transparent: false,
  },
  {
    word: 'zas',
    root_word: '*yəx̣s (reconstrução em proto-atabascano)',
    origin_language: 'Proto-atabascano',
    cognates: c(['nv (navajo)', 'yas'], ['apm (mescalero-chiricauá)', 'zas'], ['apj (jicarila)', 'zas'], ['apk (apache das planícies)', 'zas']),
    evolution_note:
      'O Wiktionary liga “zas” (neve) à raiz reconstruída do proto-atabascano *yəx̣s, com cognatos documentados em quase todo o ramo apachiano: o navajo “yas”, e a própria forma “zas” no mescalero-chiricauá, no jicarila e no apache das planícies — um retrato de como uma palavra ancestral sobreviveu quase sem mudar em várias línguas apache diferentes.',
    transparent: false,
  },
  {
    word: 'łitsog',
    root_word: '*tsu̓ɢ (“amarelo”, reconstrução em proto-atabascano)',
    origin_language: 'Proto-atabascano',
    cognates: c(['nv (navajo)', 'łitso']),
    evolution_note:
      'O Wiktionary liga “łitsog” (amarelo) à raiz reconstruída do proto-atabascano *tsu̓ɢ (“amarelo”) e ao navajo “łitso”, a palavra para a mesma cor na língua mais próxima do apache ocidental. Como no navajo, o apache ocidental também descreve cor com uma palavra que funciona como verbo (“ser amarelo”), não como um adjetivo separado — ver a aba de gramática.',
    transparent: false,
  },
  {
    word: 'indaa',
    root_word: 'indaa',
    origin_language: 'Apache ocidental',
    cognates: c(['pt', 'sem cognatos: o apache ocidental não é uma língua indo-europeia']),
    evolution_note:
      'O Wiktionary registra dois sentidos para “indaa”: “inimigo” e “homem branco”. A sobreposição não é acaso: reflete o contato histórico entre o povo apache e colonizadores de origem europeia, inicialmente conhecidos sobretudo como adversários — a mesma palavra acabou se estendendo, com o tempo, para nomear qualquer pessoa branca, não só um inimigo em combate.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_APW: [string, string][] = [
  ['Dagotʼee! Áho!', 'Oi! Obrigado! Como você cumprimenta alguém pela manhã na sua própria língua materna?'],
  ["Dałaá, nakih, táági, dį́į́'i, ashdla'i — e você?", 'Um, dois, três, quatro, cinco — até quanto você consegue contar em apache ocidental?'],
  ['Shash, gah, łį́į́ʼ — e você?', 'Urso, coelho, cavalo — de qual bicho você mais gosta?'],
  ["Ndee biyáti'.", 'A língua do povo apache ocidental — e a sua própria língua materna, qual é a história dela?'],
];

export const SHADOWING_APW: [string, string][] = [
  ['Dagotʼee! Áho!', 'Oi! Obrigado!'],
  ["Dałaá, nakih, táági, dį́į́'i, ashdla'i.", 'Um, dois, três, quatro, cinco.'],
  ['Dził, tséé, zas.', 'Montanha, pedra, neve.'],
  ['Gozhǫǫ doleeł!', 'Que venham paz e bondade! (despedida de boa vontade)'],
];
