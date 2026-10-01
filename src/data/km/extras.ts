import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no khmer). */
export const COMMUNITY_KM: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'តើអ្នកចង់ទៅទេ?',
    content: 'ខ្ញុំមិនចង់ទៅ។',
    reference: 'ខ្ញុំមិនចង់ទៅទេ។',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'អ្នកជាគ្រូទេ?',
    content: 'បាទ, ខ្ញុំជាគ្រូ។',
    reference: 'ចាស, ខ្ញុំជាគ្រូ។',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'ផ្ទះអ្នកធំឬតូច?',
    content: 'ខ្ញុំ ផ្ទះ តូច។',
    reference: 'ផ្ទះខ្ញុំតូច។',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KM: ScenarioSeed[] = [
  {
    id: 'km-s1',
    title: 'នៅហាងតែ',
    emoji: '🍵',
    cefr: 'A1',
    register: 'informal',
    persona: 'សុភា, មិត្តរួមថ្នាក់ភាសាខ្មែរ',
    description: 'Sophea convida você para tomar um chá numa loja de chá (ហាងតែ) em Phnom Penh. É uma conversa entre amigos: use “ខ្ញុំ” e “អ្នក”.',
    turns: [
      {
        bot: 'សួស្តី! អ្នកចង់ផឹកអ្វី?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['តែ', 'ទឹក', 'កាហ្វេ'],
        suggestions: ['តែមួយ, សូម។', 'ទឹកមួយ, សូម។'],
      },
      {
        bot: 'ប្រទេសអ្នកជាអ្វី?',
        botTranslation: 'Qual é o seu país?',
        keywords: ['ប្រទេសខ្ញុំជា'],
        suggestions: ['ប្រទេសខ្ញុំជាប្រេស៊ីល។'],
      },
    ],
  },
];

/** Palavras do khmer com a raiz páli/sânscrita e os parentes noutras línguas que bebem da mesma fonte. */
export const ETYMOLOGY_KM: EtymologySeed[] = [
  {
    word: 'ម្តាយ',
    root_word: 'मातृ (mātṛ)',
    origin_language: 'Sânscrito',
    cognates: c(['th', 'มารดา (maandaa), registro formal'], ['pt', 'mãe, vem do latim mater, da mesma raiz indo-europeia']),
    evolution_note: '“ម្តាយ” (mdaay) é um empréstimo erudito do sânscrito “मातृ” (mātṛ, mãe) — o khmer, mesmo não sendo indo-europeu, tomou essa palavra de empréstimo do sânscrito, a língua sagrada que chegou ao Camboja com o hinduísmo e o budismo. Coincidência curiosa: a raiz sânscrita e a raiz latina de “mãe” (que deu o português) vêm, ambas, do mesmo balbucio infantil “ma”, repetido em línguas do mundo inteiro.',
    transparent: false,
  },
  {
    word: 'ឪពុក',
    root_word: 'Sânscrito (forma exata debatida)',
    origin_language: 'Sânscrito',
    cognates: c(['th', 'บิดา (bidaa), registro formal, do páli/sânscrito pitṛ']),
    evolution_note: '“ឪពុក” (ovpuk, pai) é descrito pelos dicionários como derivado do sânscrito, parte da mesma onda de empréstimos eruditos que trouxe “ម្តាយ” para o vocabulário de parentesco do khmer — mostrando como até palavras tão básicas quanto “mãe” e “pai” podem vir de fora, quando a língua de prestígio (aqui, o sânscrito dos textos religiosos) tem influência forte o bastante.',
    transparent: false,
  },
  {
    word: 'ភាសា',
    root_word: 'भाषा (bhāṣā)',
    origin_language: 'Páli, do sânscrito',
    cognates: c(['th', 'ภาษา (phaasǎa)'], ['hi', 'भाषा (bhāṣā)'], ['id', 'bahasa']),
    evolution_note: '“ភាសា” (phiesa, língua/idioma) veio do páli “bhāsā”, que por sua vez vem do sânscrito “भाषा” (bhāṣā). A mesma raiz viajou para o tailandês, o hindi, o indonésio e várias outras línguas asiáticas junto com o budismo e o hinduísmo — um dos empréstimos mais espalhados do sul e do sudeste da Ásia.',
    transparent: false,
  },
  {
    word: 'មិត្ត',
    root_word: 'मित्र (mitra)',
    origin_language: 'Páli mitta, do sânscrito मित्र (mitra)',
    cognates: c(['th', 'มิตร (mít)'], ['lo', 'ມິດ (mit)']),
    evolution_note: '“មិត្ត” (mit, amigo) é um empréstimo erudito do páli “mitta”, que vem do sânscrito “मित्र” (mitra). O tailandês e o laociano tomaram a mesma palavra da mesma fonte, cada um a seu jeito — um bom exemplo de como línguas de famílias diferentes (o khmer é austro-asiático; o tailandês e o laociano são kra-dai) podem compartilhar vocabulário sem serem parentes.',
    transparent: false,
  },
  {
    word: 'សួស្តី',
    root_word: 'स्वस्ति (svasti)',
    origin_language: 'Sânscrito',
    cognates: c(['th', 'สวัสดี (sawatdee), da mesma raiz sânscrita'], ['hi', 'स्वस्ति (svasti), “bênção, bem-estar”']),
    evolution_note: '“សួស្តី” (suostei), a saudação khmer do dia a dia, vem do sânscrito “स्वस्ति” (svasti, “bem-estar, boa sorte”) — a mesmíssima raiz do famoso cumprimento tailandês “สวัสดี” (sawatdee). As duas línguas não são parentes (o khmer é austro-asiático; o tailandês é kra-dai), mas tomaram a mesma palavra sânscrita de empréstimo, cada uma em sua própria história, por isso soam parecidas sem serem cognatas de verdade.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KM: [string, string][] = [
  ['ថ្ងៃនេះអ្នកសុខសប្បាយទេ?', 'Como você está hoje?'],
  ['អ្នកមានគ្រួសារធំទេ?', 'A sua família é grande?'],
  ['អ្នកចូលចិត្តញ៉ាំអ្វី?', 'O que você gosta de comer?'],
  ['ផ្ទះអ្នកនៅឯណា?', 'Onde fica a sua casa?'],
];

export const SHADOWING_KM: [string, string][] = [
  ['សួស្តី, ខ្ញុំឈ្មោះដារា។', 'Oi, eu me chamo Dara.'],
  ['ខ្ញុំមិនដឹងទេ។', 'Eu não sei.'],
  ['ខ្ញុំចូលចិត្តតែ។', 'Eu gosto de chá.'],
  ['ខ្ញុំរៀនភាសាខ្មែរ។', 'Eu estou aprendendo khmer.'],
];
