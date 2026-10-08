import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo Ido). */
export const COMMUNITY_IDO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Deskriptez vua hundo.',
    content: 'Me havas hundon. Ol esas granda.',
    reference: 'Me havas hundo. Ol esas granda.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Deskriptez vua hundi.',
    content: 'La hundi esas grandi.',
    reference: 'La hundi esas granda.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qua vu esas?',
    content: 'Esas Ana.',
    reference: 'Me esas Ana.',
  },
];

/**
 * Cenário de conversa. O Ido tem distinção formal/informal de verdade (“vu” é o “você” padrão,
 * singular; “tu” é íntimo, raramente usado na prática) — diferente do esperanto, que só tem “vi”
 * pra tudo. Ver `formalMarkers`.
 */
export const SCENARIOS_IDO: ScenarioSeed[] = [
  {
    id: 'ido-s1',
    title: 'Nova amiko',
    emoji: '🧩',
    cefr: 'A1',
    register: 'formal',
    persona: 'Petro, amiko di Ido',
    description: 'Petro te encontra num fórum online de Ido e começa a conversar, usando o “vu” — o “você” padrão, neutro, do Ido.',
    turns: [
      {
        bot: 'Saluto! Quo vu volas drinkar?',
        botTranslation: 'Olá! O que você quer beber?',
        keywords: ['aquo', 'vino', 'volar'],
        suggestions: ['Me volas aquo.', 'Me volas vino.'],
      },
      {
        bot: 'E de ube vu esas?',
        botTranslation: 'E de onde você é?',
        keywords: ['me', 'esar', 'de'],
        suggestions: ['Me esas de Brazilia.', 'Me esas de Portugal.'],
      },
    ],
  },
];

/**
 * Palavras do Ido e a raiz real de onde vieram — a maioria herdada do próprio esperanto, que já
 * tinha escolhido raízes latinas e românicas conhecidas por quem fala línguas europeias. Fontes:
 * Wikcionário (verbetes individuais, com a etimologia de cada palavra); dicionários etimológicos
 * das línguas-fonte pros cognatos.
 */
export const ETYMOLOGY_IDO: EtymologySeed[] = [
  {
    word: 'patro',
    root_word: 'pater',
    origin_language: 'Latim',
    cognates: c(['es', 'padre'], ['it', 'padre'], ['fr', 'père'], ['en', 'father'], ['de', 'Vater']),
    evolution_note: 'O Ido herdou “patro” do próprio esperanto, que já tinha pegado “pater” quase sem mudar. Nas línguas românicas, a mesma raiz virou “padre”/“père”; nas germânicas, “father”/“Vater”.',
    transparent: true,
  },
  {
    word: 'matro',
    root_word: 'mater',
    origin_language: 'Latim',
    cognates: c(['es', 'madre'], ['it', 'madre'], ['fr', 'mère'], ['en', 'mother'], ['pt', 'madre (arcaico)/matriz']),
    evolution_note: 'Diferente do esperanto, que deriva “mãe” de “pai” (patrino, de patro+ino), o Ido usa a raiz latina “mater” direto, independente de “patro” — por isso “matro”, não “patrino”. Fonte: Wikcionário “matro”.',
    transparent: true,
  },
  {
    word: 'aquo',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['es', 'agua'], ['it', 'acqua'], ['fr', 'eau'], ['ro', 'apă']),
    evolution_note: '“Aqua” chegou ao Ido quase intacta, do mesmo jeito que chegou ao esperanto (“akvo”) — só muda a grafia, porque o Ido escreve o “kw” com o dígrafo “qu” (aquo), herdado do latim e do italiano/espanhol, em vez do “kv” do esperanto.',
    transparent: true,
  },
  {
    word: 'granda',
    root_word: 'grandis',
    origin_language: 'Latim',
    cognates: c(['es', 'grande'], ['it', 'grande'], ['fr', 'grand'], ['pt', 'grande']),
    evolution_note: 'Uma das raízes mais transparentes para quem fala português: “grandis” chegou quase sem mudar a todas as línguas românicas, inclusive ao Ido (via esperanto) e ao próprio português.',
    transparent: true,
  },
  {
    word: 'familio',
    root_word: 'familia',
    origin_language: 'Latim',
    cognates: c(['es', 'familia'], ['it', 'famiglia'], ['fr', 'famille'], ['en', 'family'], ['pt', 'família']),
    evolution_note: 'Praticamente idêntica em todas as línguas europeias citadas — uma das raízes latinas mais estáveis que existem, mantida sem mudança do esperanto pro Ido.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_IDO: [string, string][] = [
  ['Quo esas vua nomo?', 'Qual é o seu nome?'],
  ['Quo vu volas manjar hodie?', 'O que você quer comer hoje?'],
  ['Ube esas vua domo?', 'Onde é a sua casa?'],
  ['Quala esas vua familio?', 'Como é a sua família?'],
];

export const SHADOWING_IDO: [string, string][] = [
  ['Saluto! Me nomesas Ana, e me lojas en granda urbo.', 'Olá! Eu me chamo Ana, e eu moro numa cidade grande.'],
  ['Danko, e bona jorno!', 'Obrigado, e bom dia!'],
  ['Me havas un fratulo e un fratino.', 'Eu tenho um irmão e uma irmã.'],
  ['La aquo esas kolda, ma la vino esas bona.', 'A água está fria, mas o vinho é bom.'],
];
