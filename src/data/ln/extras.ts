import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no lingala). */
export const COMMUNITY_LN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Nkombo na yo na mboka na yo.',
    content: 'Mbote! Nkombo na mi Bruno. Mboka na mi Curitiba.',
    reference: 'Mbote! Nkombo na ngai Bruno. Mboka na ngai Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Tata na yo na mama na yo.',
    content: 'Tata na me Carlos, mama na me Rosa.',
    reference: 'Tata na ngai Carlos, mama na ngai Rosa.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ndako na yo monene to moke?',
    content: 'Ndako na ngai grande.',
    reference: 'Ndako na ngai monene.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LN: ScenarioSeed[] = [
  {
    id: 'ln-s1',
    title: 'Mbote na mboka',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Jean, um amigo da cidade',
    description: 'Jean puxa conversa com você na rua. É uma conversa informal entre amigos.',
    turns: [
      {
        bot: 'Mbote! Nkombo na yo nini?',
        botTranslation: 'Oi! Qual é o seu nome?',
        keywords: ['nkombo na ngai'],
        suggestions: ['Nkombo na ngai Ana.', 'Nkombo na ngai Pedro.'],
      },
      {
        bot: 'Ndako na yo wápi?',
        botTranslation: 'Onde é a sua casa?',
        keywords: ['ndako na ngai'],
        suggestions: ['Ndako na ngai na mboka.', 'Ndako na ngai moke.'],
      },
    ],
  },
];

/** Palavras do lingala com a origem (bangi, suaíli, francês…) e os parentes em línguas de contato. */
export const ETYMOLOGY_LN: EtymologySeed[] = [
  {
    word: 'mibale',
    root_word: '-bàdɪ́ (raiz reconstruída do proto-banto)',
    origin_language: 'Bangi',
    cognates: c(['bni', 'mibale']),
    evolution_note: 'O numeral “dois” do lingala veio do bangi “mibale”, que por sua vez vem de uma raiz muito antiga, comum a praticamente toda a família banta — sinal de que até os números mais básicos do lingala carregam milhares de anos de história.',
    transparent: false,
  },
  {
    word: 'melesi',
    root_word: 'merci',
    origin_language: 'Francês',
    cognates: c(['fr', 'merci']),
    evolution_note: 'Diferente da maior parte do vocabulário básico do lingala (de origem banta), “melesi” veio direto do francês “merci” — lembrete de que o lingala convive de perto com o francês, língua oficial da República Democrática do Congo.',
    transparent: false,
  },
  {
    word: 'nyoka',
    root_word: 'nyoka',
    origin_language: 'Suaíli',
    cognates: c(['sw', 'nyoka']),
    evolution_note: 'O lingala pegou emprestada do suaíli a palavra para “cobra”, com a mesma forma e o mesmo sentido — sinal de contato entre as duas maiores línguas bantas francas da África.',
    transparent: false,
  },
  {
    word: 'wápi',
    root_word: 'wapi',
    origin_language: 'Suaíli',
    cognates: c(['sw', 'wapi']),
    evolution_note: 'A pergunta “onde” também veio do suaíli: “wapi” virou “wápi” em lingala, quase sem mudar de forma nem de sentido.',
    transparent: false,
  },
  {
    word: 'kiti',
    root_word: 'kiti',
    origin_language: 'Suaíli',
    cognates: c(['sw', 'kiti']),
    evolution_note: 'A palavra para “cadeira” também é um empréstimo do suaíli — mais uma prova de como o comércio pelo continente aproximou o vocabulário de línguas bantas que não são vizinhas diretas.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LN: [string, string][] = [
  ['Boni, ndeko?', 'Como você está, amigo(a)?'],
  ['Nkombo na yo nini?', 'Qual é o seu nome?'],
  ['Ndako na yo wápi?', 'Onde é a sua casa?'],
  ['Nazali na nini?', 'O que você tem?'],
];

export const SHADOWING_LN: [string, string][] = [
  ['Mbote! Nazali malamu.', 'Oi! Estou bem.'],
  ['Nkombo na ngai Linu.', 'Meu nome é Linu.'],
  ['Tata na ngai, mama na ngai.', 'Meu pai, minha mãe.'],
  ['Ndako na ngai moke.', 'Minha casa é pequena.'],
];
