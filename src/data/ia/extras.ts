import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo interlíngua). */
export const COMMUNITY_IA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Describe tu can.',
    content: 'Io ha un cano. Illo es grande.',
    reference: 'Io ha un can. Illo es grande.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Describe tu domo.',
    content: 'Mi domo es grandes.',
    reference: 'Mi domo es grande.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qui es tu?',
    content: 'Es Ana.',
    reference: 'Io es Ana.',
  },
];

/**
 * Cenário de conversa. A interlíngua TEM distinção formal/informal ("tu" × "vos" — ver gramática,
 * tópico "tu × vos"), diferente do esperanto; por isso este cenário usa "vos" de propósito, num
 * primeiro encontro formal.
 */
export const SCENARIOS_IA: ScenarioSeed[] = [
  {
    id: 'ia-s1',
    title: 'Al Conferentia International',
    emoji: '🌍',
    cefr: 'A1',
    register: 'formal',
    persona: 'Petro, un conferentiero (congressista)',
    description: 'Petro te encontra na Conferentia International de Interlingua (a conferência mundial da UMI, realizada a cada dois anos desde 1955) e começa a conversar, usando "vos" por ainda não te conhecer.',
    turns: [
      {
        bot: 'Bon die! Que vole vos biber?',
        botTranslation: 'Olá! O que você quer beber?',
        keywords: ['aqua', 'vino', 'voler'],
        suggestions: ['Io vole aqua.', 'Io vole vino.'],
        registerBreakers: ['tu'],
      },
      {
        bot: 'E de ubi es vos?',
        botTranslation: 'E de onde você é?',
        keywords: ['io', 'esser', 'de'],
        suggestions: ['Io es de Brasil.', 'Io es de Portugal.'],
        registerBreakers: ['tu'],
      },
    ],
  },
];

/**
 * Palavras da interlíngua e a raiz real de onde vêm, com os cognatos reais de línguas já no app. A
 * interlíngua não "inventa" raízes como o esperanto: toda palavra passou pela "prototipagem" da
 * IALA, aceita só se reconhecível em pelo menos 3 das línguas de controle (inglês, francês,
 * italiano, espanhol/português — com alemão e russo como apoio). Fontes: B. C. Sexton,
 * "English-Interlingua: A Basic Vocabulary" (2019); Wikipédia, "Interlingua" (seção sobre o método
 * de prototipagem); dicionários etimológicos das próprias línguas-fonte pros cognatos.
 */
export const ETYMOLOGY_IA: EtymologySeed[] = [
  {
    word: 'patre',
    root_word: 'pater',
    origin_language: 'Latim',
    cognates: c(['es', 'padre'], ['it', 'padre'], ['fr', 'père'], ['en', 'father'], ['de', 'Vater']),
    evolution_note: 'A interlíngua pegou "pater" quase sem mudar, do mesmo jeito que o esperanto — mas por um caminho diferente: não foi escolha de um criador, foi o resultado da prototipagem, já que a raiz aparece em todas as 4 línguas de controle.',
    transparent: true,
  },
  {
    word: 'aqua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['es', 'agua'], ['it', 'acqua'], ['fr', 'eau'], ['pt', 'água']),
    evolution_note: '"Aqua" é a forma latina original, sem nenhuma mudança — a interlíngua a escolheu porque é a forma mais reconhecível pras línguas de controle, mesmo o francês já tendo se afastado bastante dela ("eau").',
    transparent: true,
  },
  {
    word: 'domo',
    root_word: 'domus',
    origin_language: 'Latim',
    cognates: c(['pt', 'domicílio'], ['en', 'dome/domicile'], ['it', 'duomo'], ['fr', 'domicile']),
    evolution_note: 'O dicionário oficial dá duas opções pra "casa": "casa" (também usada) e "domo", da mesma raiz latina que o português guardou só em palavras mais formais, como "domicílio".',
    transparent: false,
  },
  {
    word: 'grande',
    root_word: 'grandis',
    origin_language: 'Latim',
    cognates: c(['es', 'grande'], ['it', 'grande'], ['fr', 'grand'], ['pt', 'grande']),
    evolution_note: 'Idêntica ao português. Como "grandis" chegou quase sem mudar a todas as línguas de controle, virou uma das palavras mais transparentes da interlíngua pra quem fala português.',
    transparent: true,
  },
  {
    word: 'familia',
    root_word: 'familia',
    origin_language: 'Latim',
    cognates: c(['es', 'familia'], ['it', 'famiglia'], ['fr', 'famille'], ['en', 'family'], ['pt', 'família']),
    evolution_note: 'Praticamente idêntica em todas as línguas de controle da interlíngua — um exemplo claro de como o método de prototipagem tende a escolher justamente as palavras que já são internacionais na prática.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_IA: [string, string][] = [
  ['Qual es tu nomine?', 'Qual é o seu nome?'],
  ['Que vole tu mangiar hodie?', 'O que você quer comer hoje?'],
  ['Ubi es tu domo?', 'Onde é a sua casa?'],
  ['Qual es tu familia?', 'Como é a sua família?'],
];

export const SHADOWING_IA: [string, string][] = [
  ['Bon die! Io me appella Ana, e io vive in un grande citate.', 'Olá! Eu me chamo Ana, e eu moro numa cidade grande.'],
  ['Gratias, e bon die!', 'Obrigado, e bom dia!'],
  ['Io ha un fratre e un soror.', 'Eu tenho um irmão e uma irmã.'],
  ['Le aqua es fresc, ma le vino es bon.', 'A água está fria, mas o vinho é bom.'],
];
