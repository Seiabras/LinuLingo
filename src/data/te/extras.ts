import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no télugo). */
export const COMMUNITY_TE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'మీ పేరు ఏమిటి?',
    content: 'పేరు నా బ్రూనో.',
    reference: 'నా పేరు బ్రూనో.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'మీ కుటుంబం.',
    content: 'నాకు ఒక చెల్లి ఉన్నాడు.',
    reference: 'నాకు ఒక చెల్లి ఉంది.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'మీ ఇల్లు.',
    content: 'ఇల్లు నా చిన్నగా ఉంది.',
    reference: 'నా ఇల్లు చిన్నగా ఉంది.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_TE: ScenarioSeed[] = [
  {
    id: 'te-s1',
    title: 'ప్రియతో పరిచయం',
    emoji: '🙋‍♀️',
    cefr: 'A1',
    register: 'informal',
    persona: 'ప్రియ, తెలుగు క్లాసు స్నేహితురాలు',
    description: 'Priya puxa conversa com você depois da aula de télugo. É uma conversa informal entre colegas.',
    turns: [
      {
        bot: 'నమస్కారం! మీరు ఎలా ఉన్నారు?',
        botTranslation: 'Olá! Como você está?',
        keywords: ['బాగున్నాను', 'ధన్యవాదములు'],
        suggestions: ['నేను బాగున్నాను, ధన్యవాదములు.'],
      },
      {
        bot: 'మీరు ఎక్కడ నుండి?',
        botTranslation: 'De onde você é?',
        keywords: ['నుండి'],
        suggestions: ['నేను బ్రెజిల్ నుండి.'],
      },
    ],
  },
];

/**
 * Palavras do télugo com a raiz proto-dravídica e os parentes nas línguas dravídicas irmãs (tâmil,
 * canarês, malaiala). O télugo não é indo-europeu como o português, então não há cognatos diretos
 * com o português — a raiz comum é sempre dravídica, ou (em palavras emprestadas) sânscrita.
 */
export const ETYMOLOGY_TE: EtymologySeed[] = [
  {
    word: 'అమ్మ',
    root_word: '*amma',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'அம்மன் (ammaṉ)'], ['ml', 'അമ്മ (amma)']),
    evolution_note: '“అమ్మ” (amma) vem direto do proto-dravídico “*amma”, a mesma raiz do tâmil “அம்மன்” (ammaṉ) e do malaiala “അമ്മ” (amma) — uma palavra tão básica da família dravídica quanto “mãe” é para o português, mas sem nenhum parentesco com ela: são duas famílias de línguas diferentes.',
    transparent: false,
  },
  {
    word: 'అన్న',
    root_word: '*aṇṇa',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'அண்ணா (aṇṇā)'], ['kn', 'ಅಣ್ಣ (aṇṇa)']),
    evolution_note: '“అన్న” (anna, “irmão mais velho”) descende do proto-dravídico “*aṇṇa”, com a mesma forma quase idêntica no tâmil “அண்ணா” e no canarês “ಅಣ್ಣ” — o télugo marca a diferença de idade entre irmãos (mais velho × mais novo) onde o português só tem “irmão”.',
    transparent: false,
  },
  {
    word: 'అక్క',
    root_word: '*akka-',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'அக்கா (akkā)'], ['kn', 'ಅಕ್ಕ (akka)'], ['ml', 'അക്ക (akka)']),
    evolution_note: '“అక్క” (akka, “irmã mais velha”) vem do proto-dravídico “*akka-” e aparece quase igual no tâmil, no canarês e no malaiala — e até no cingalês “අක්කා” (akkā), de uma língua indo-ariana vizinha que pegou a palavra emprestada dos vizinhos dravídicos.',
    transparent: false,
  },
  {
    word: 'ఇల్లు',
    root_word: '*il',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'இல்'], ['ml', 'ഇല്ലം (illam)']),
    evolution_note: '“ఇల్లు” (illu, “casa”) vem do proto-dravídico “*il”, raiz que aparece em praticamente toda a família dravídica — do tâmil ao kolami, passando pelo tulu e pelo kodava —, sempre ligada à ideia de moradia e de família.',
    transparent: false,
  },
  {
    word: 'పిల్లి',
    root_word: '*pillV',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'பில்லி (pilli)'], ['kn', 'ಪಿಲ್ಲಿ (pilli)']),
    evolution_note: '“పిల్లి” (pilli, “gato”) vem do proto-dravídico “*pillV” e é quase idêntica no tâmil e no canarês; é possível até que o hindi “बिल्ली” (billī, “gato”) tenha vindo de uma língua dravídica como esta.',
    transparent: false,
  },
  {
    word: 'చెయ్యి',
    root_word: '*kay',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'கை (kai)'], ['kn', 'ಕೈ (kai)'], ['ml', 'കൈ (kai)']),
    evolution_note: '“చెయ్యి” (ceyyi, “mão”) vem do proto-dravídico “*kay”, a mesma raiz do tâmil, do canarês e do malaiala “kai” — o télugo mudou o som inicial “k” para “c” (como em “tchau”), o que não aconteceu nas línguas irmãs.',
    transparent: false,
  },
  {
    word: 'తల',
    root_word: '*talay',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'தலை (talai)'], ['kn', 'ತಲೆ (tale)'], ['ml', 'തല (tala)']),
    evolution_note: '“తల” (tala, “cabeça”) vem do proto-dravídico “*talay”, presente com a forma quase igual no tâmil, no canarês e no malaiala — uma das palavras do corpo humano mais estáveis em toda a família dravídica.',
    transparent: false,
  },
  {
    word: 'పేరు',
    root_word: '*pic-ar',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'பெயர் (peyar)'], ['kn', 'ಹೆಸರು (hesaru)'], ['ml', 'പേര് (pēṟŭ)']),
    evolution_note: '“పేరు” (pēru, “nome”) vem do proto-dravídico “*pic-ar”; o parentesco com o tâmil “பெயர்” e o malaiala “പേര്” é bem visível, enquanto o canarês “ಹೆಸರು” mudou mais o som ao longo do tempo.',
    transparent: false,
  },
  {
    word: 'పాలు',
    root_word: '*pāl',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'பால் (pāl)'], ['kn', 'ಹಾಲು (hālu)'], ['ml', 'പാൽ (pāl)']),
    evolution_note: '“పాలు” (pālu, “leite”) vem do proto-dravídico “*pāl”, com a forma quase idêntica no tâmil e no malaiala; o canarês trocou o “p” inicial por “h”, uma mudança sonora comum nessa língua.',
    transparent: false,
  },
  {
    word: 'ఎవరు',
    root_word: '*yā-var',
    origin_language: 'Proto-dravídico',
    cognates: c(['ta', 'யாவர் (yāvar)'], ['ta', 'எவர் (evar)']),
    evolution_note: '“ఎవరు” (evaru, “quem”) vem do proto-dravídico “*yā-var” (“qual pessoa”), da mesma raiz “*yā-” (“qual”) que deu as outras palavras de pergunta do télugo; o tâmil guarda as duas formas, “யாவர்” e “எவர்”.',
    transparent: false,
  },
  {
    word: 'కుక్క',
    root_word: 'कुक्कुर (kukkura)',
    origin_language: 'Sânscrito',
    cognates: c(['sa', 'कुक्कुर (kukkura)']),
    evolution_note: 'Diferente da maioria das palavras do dia a dia, “కుక్క” (kukka, “cachorro”) não é de raiz dravídica: foi emprestada do sânscrito “कुक्कुर” (kukkura). O télugo tomou muitas palavras do sânscrito ao longo dos séculos, sobretudo em vocabulário mais formal ou religioso — um pouco como o português pegou palavras do grego.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TE: [string, string][] = [
  ['మీరు ఎలా ఉన్నారు?', 'Como você está?'],
  ['మీ కుటుంబం ఎలా ఉంది?', 'Como está a sua família?'],
  ['మీకు ఏమి కావాలి?', 'O que você quer?'],
  ['మీ ఇల్లు ఎలా ఉంది?', 'Como é a sua casa?'],
];

export const SHADOWING_TE: [string, string][] = [
  ['నమస్కారం, నా పేరు ప్రియ.', 'Olá, meu nome é Priya.'],
  ['నేను బాగున్నాను, ధన్యవాదములు.', 'Eu estou bem, obrigado(a).'],
  ['నాకు ఒక అన్న ఉన్నాడు.', 'Eu tenho um irmão mais velho.'],
  ['నాకు నీళ్ళు కావాలి.', 'Eu quero água.'],
];
