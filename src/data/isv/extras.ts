import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo interslavo). */
export const COMMUNITY_ISV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Opiši tvoju rodinu (descreva sua família).',
    content: 'Ja imaju brat. On jest veliky.',
    reference: 'Ja imaju brata. On jest veliky.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Opiši tvoj dom.',
    content: 'Moj dom jest velika.',
    reference: 'Moj dom jest veliky.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kto ty jesi?',
    content: 'Jesm Ana.',
    reference: 'Ja jesm Ana.',
  },
];

/** Cenário de conversa, usando o vocabulário e a gramática já confirmados (sem palavra nova). */
export const SCENARIOS_ISV: ScenarioSeed[] = [
  {
    id: 'isv-s1',
    title: 'Na konferenciji',
    emoji: '🤝',
    cefr: 'A1',
    register: 'informal',
    persona: 'Petr, učenik interslavskogo jezyka',
    description: 'Petr te encontra num encontro de falantes de interslavo e começa a conversar.',
    turns: [
      {
        bot: 'Dobry denj! Čto ty hočeš piti?',
        botTranslation: 'Olá! O que você quer beber?',
        keywords: ['voda', 'mlěko', 'hotěti'],
        suggestions: ['Ja hoču vodu.', 'Ja hoču mlěko.'],
        registerBreakers: [],
      },
      {
        bot: 'A čto jest tvoje ime?',
        botTranslation: 'E qual é o seu nome?',
        keywords: ['ja', 'byti', 'ime'],
        suggestions: ['Moje ime jest Ana.', 'Ja jesm Ana.'],
        registerBreakers: [],
      },
    ],
  },
];

/**
 * Palavras do interslavo e as línguas eslavas já no app onde a mesma raiz aparece quase idêntica —
 * o próprio propósito do interslavo é usar só raízes comuns a (quase) toda língua eslava viva.
 * Fontes: `steen.free.fr/interslavic/en-ms.html` (o dicionário oficial) e o Wikcionário/Wikipédia de
 * cada língua eslava já citada, só para confirmar a forma cognata.
 */
export const ETYMOLOGY_ISV: EtymologySeed[] = [
  {
    word: 'voda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['uk', 'вода'], ['pl', 'woda'], ['cs', 'voda'], ['bg', 'вода']),
    evolution_note: 'Uma das raízes mais estáveis de toda a família eslava: quase sem mudança, do protoeslavo até hoje, em todas as línguas eslavas vivas.',
    transparent: true,
  },
  {
    word: 'brat',
    root_word: '*bratъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'брат'], ['pl', 'brat'], ['cs', 'bratr'], ['sr', 'брат'], ['hr', 'brat']),
    evolution_note: 'A mesma raiz de “irmão” em quase toda língua eslava — e também parente distante do latim “frater” (de onde vêm “frade” e “fraterno” em português).',
    transparent: false,
  },
  {
    word: 'hlěb',
    root_word: '*xlěbъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'хлеб'], ['uk', 'хліб'], ['cs', 'chléb'], ['sk', 'chlieb'], ['bg', 'хляб']),
    evolution_note: 'O interslavo escolheu a forma com “h” em vez do “x”/“ch” gutural de várias línguas eslavas específicas, pra ficar neutro entre elas.',
    transparent: false,
  },
  {
    word: 'mati',
    root_word: '*mati',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'мать'], ['pl', 'matka'], ['cs', 'matka'], ['sr', 'мати']),
    evolution_note: 'Uma raiz tão antiga que é parente do latim “mater” e do português “mãe” — todas vêm da mesma raiz indo-europeia muito antiga.',
    transparent: true,
  },
  {
    word: 'dom',
    root_word: '*domъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'дом'], ['pl', 'dom'], ['cs', 'dům'], ['sk', 'dom'], ['uk', 'дім']),
    evolution_note: 'Também parente do latim “domus” — a mesma raiz indo-europeia de “casa” aparece no latim e no eslavo por caminhos separados, não porque um copiou do outro.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_ISV: [string, string][] = [
  ['Čto jest tvoje ime?', 'Qual é o seu nome?'],
  ['Čto ty hočeš jesti dnes?', 'O que você quer comer hoje?'],
  ['Kde jest tvoj dom?', 'Onde é a sua casa?'],
  ['Či ty imaješ brata ili sestru?', 'Você tem irmão ou irmã?'],
];

export const SHADOWING_ISV: [string, string][] = [
  ['Dobry denj! Moje ime jest Ana. Moj grad jest veliky.', 'Olá! Meu nome é Ana. Minha cidade é grande.'],
  ['Blagodarju, i dobry denj!', 'Obrigado, e bom dia!'],
  ['Ja imaju brata i sestru.', 'Eu tenho um irmão e uma irmã.'],
  ['Voda jest dobra, ale hlěb jest bolje dobry.', 'A água é boa, mas o pão é melhor.'],
];
