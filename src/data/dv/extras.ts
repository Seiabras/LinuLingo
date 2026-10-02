import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no dhivehi). */
export const COMMUNITY_DV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Cumprimente e agradeça em dhivehi.',
    content: 'ނޫން! ވަކިވެލަން.',
    reference: 'އައްސަލާމު ޢަލައިކުމް! ޝުކުރިއްޔާ!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Diga que a lua é branca (ހަނދު = lua).',
    content: 'ހަނދު ކަޅު.',
    reference: 'ހަނދު ހުދު.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Diga “o meu pai” em dhivehi.',
    content: 'އަހަރެން ބައްޕަ.',
    reference: 'އަހަރެންގެ ބައްޕަ.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_DV: ScenarioSeed[] = [
  {
    id: 'dv-s1',
    title: 'Mas bēlan Mālegai',
    emoji: '🐟',
    cefr: 'A1',
    register: 'informal',
    persona: 'vendedor de peixe numa banca de Malé',
    description: 'Você está numa banca de peixe em Malé, a capital das Maldivas. É uma conversa informal (registro reethi bas, o padrão educado).',
    turns: [
      {
        bot: 'މަރުޙަބާ! ރަތް މަސް. ރަނގަޅު?',
        botTranslation: 'Oi! Peixe vermelho. Bom?',
        keywords: ['ލައްބަ', 'ނޫން'],
        suggestions: ['ލައްބަ, ޝުކުރިއްޔާ!', 'ނޫން, ޝުކުރިއްޔާ.'],
      },
      {
        bot: 'ޝުކުރިއްޔާ!',
        botTranslation: 'Obrigado!',
        keywords: ['ޝުކުރިއްޔާ', 'ވަކިވެލަން'],
        suggestions: ['ޝުކުރިއްޔާ! ވަކިވެލަން!'],
      },
    ],
  },
];

/**
 * Palavras do dhivehi com a origem e os parentes. O dhivehi tem camadas de empréstimos do árabe
 * (religião e cortesia), do sânscrito (vocabulário herdado mais antigo) e até do inglês, por causa
 * do comércio e da posição das Maldivas nas rotas do Oceano Índico. Fontes: ver cabeçalho de
 * vocabulario.ts. Nenhuma destas palavras é parecida o bastante com o português pra um falante
 * reconhecer sem estudar (`transparent: false` em todas).
 */
export const ETYMOLOGY_DV: EtymologySeed[] = [
  {
    word: 'އައްސަލާމު ޢަލައިކުމް',
    root_word: 'السلام عليكم (as-salāmu ʿalaykum, “que a paz esteja com você”)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'السلام عليكم'], ['ur', 'السلام علیکم (assalamu alaikum)'], ['id', 'assalamualaikum']),
    evolution_note:
      'A saudação islâmica “que a paz esteja com você” é praticamente a mesma frase árabe em quase toda língua de maioria muçulmana — do urdu ao indonésio —, e o dhivehi, língua oficial de um país muçulmano, a usa do mesmo jeito.',
    transparent: false,
  },
  {
    word: 'ޝުކުރިއްޔާ',
    root_word: 'شكر (shukr, “agradecimento”)',
    origin_language: 'Árabe',
    cognates: c(['ur', 'شکریہ (shukriya)'], ['id', 'syukur']),
    evolution_note:
      'A Wikipédia descreve o dhivehi como fortemente marcado por empréstimos do árabe no vocabulário religioso e de cortesia; “ޝުކުރިއްޔާ” (shukuriyyaa) segue o mesmo padrão do urdu “shukriya” e do indonésio “syukur”, todos vindos da raiz árabe “shukr”.',
    transparent: false,
  },
  {
    word: 'ފެން',
    root_word: 'raiz sânscrita (forma exata não identificada na fonte consultada)',
    origin_language: 'Sânscrito',
    cognates: [],
    evolution_note:
      'O Wiktionary classifica “ފެން” (fen̊, “água”) como um termo do dhivehi herdado do sânscrito, mas a página consultada não dava a palavra sânscrita exata — por honestidade, este pacote não arrisca qual seria.',
    transparent: false,
  },
  {
    word: 'ގެ',
    root_word: 'गेह (gehá, “casa”), via o prácrito 𑀕𑁂𑀳 (geha)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'घर (ghar, “casa”, de outra raiz, mas o mesmo campo semântico)']),
    evolution_note:
      'Segundo o Wiktionary, “ގެ” (ge, “casa”) vem do sânscrito “gehá” via o prácrito “geha” — e com o tempo essa mesma palavra se tornou também o sufixo genitivo do dhivehi (“-ge”, “de”), como em “އަހަރެންގެ” (aharen̊ge, “meu”). Uma palavra só fazendo dois trabalhos: nome de coisa e peça de gramática.',
    transparent: false,
  },
  {
    word: 'ސުނޯ',
    root_word: 'snow',
    origin_language: 'Inglês',
    cognates: c(['en', 'snow']),
    evolution_note:
      'As Maldivas são um país tropical sem neve: “ސުނޯ” (sunō) é um empréstimo direto do inglês “snow”, adaptado à fonologia do dhivehi — a forma dessa palavra no Wiktionary (Appendix:Dhivehi Swadesh list) é quase idêntica ao original inglês.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_DV: [string, string][] = [
  ['ހާލުކިހިނެއް?', 'Como você está?'],
  ['ކޮން ނަމެއް ކިޔަނީ?', 'Qual é o seu nome?'],
  ['ކަލޭ ކޮންތާކު?', 'De onde você é?'],
  ['ކަލޭގެ ބައްޕަގެ ނަން?', 'Qual é o nome do seu pai?'],
];

export const SHADOWING_DV: [string, string][] = [
  ['އައްސަލާމު ޢަލައިކުމް!', 'Que a paz esteja com você! (saudação formal)'],
  ['ހާލުކިހިނެއް?', 'Como você está?'],
  ['ޝުކުރިއްޔާ!', 'Obrigado!'],
  ['އަހަރެން ރަނގަޅު, ޝުކުރިއްޔާ!', 'Eu [estou] bem, obrigado!'],
];
