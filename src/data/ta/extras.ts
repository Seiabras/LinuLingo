import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tâmil). */
export const COMMUNITY_TA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'உங்கள் பெயர் என்ன?',
    content: 'பெயர் என் புருனோ.',
    reference: 'என் பெயர் புருனோ.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'உங்கள் குடும்பம்.',
    content: 'எனக்கு ஒரு தங்கை இருக்கிறேன்.',
    reference: 'எனக்கு ஒரு தங்கை உண்டு.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'உங்கள் வீடு.',
    content: 'வீடு என் சின்ன.',
    reference: 'என் வீடு சின்ன வீடு.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_TA: ScenarioSeed[] = [
  {
    id: 'ta-s1',
    title: 'கவிதாவுடன் அறிமுகம்',
    emoji: '🙋‍♀️',
    cefr: 'A1',
    register: 'informal',
    persona: 'கவிதா, தமிழ் வகுப்பு நண்பி',
    description: 'Kavitha puxa conversa com você depois da aula de tâmil. É uma conversa informal entre colegas.',
    turns: [
      {
        bot: 'வணக்கம்! நீங்கள் எப்படி இருக்கின்றீர்கள்?',
        botTranslation: 'Olá! Como você está?',
        keywords: ['நல்லா', 'நன்றி'],
        suggestions: ['நான் நல்லா இருக்கின்றேன், நன்றி.'],
      },
      {
        bot: 'உங்கள் பெயர் என்ன?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['பெயர்'],
        suggestions: ['என் பெயர் ... .'],
      },
    ],
  },
];

/**
 * Palavras do tâmil com a raiz proto-dravídica (ou do sânscrito, nos empréstimos) e os parentes nas
 * línguas dravídicas irmãs (télugo, canarês, malaiala). O tâmil não é indo-europeu como o português,
 * então não há cognatos diretos com o português — a raiz comum é sempre dravídica, ou (em palavras
 * emprestadas) sânscrita. Só palavras que estão em `vocabulario.ts` aparecem aqui.
 */
export const ETYMOLOGY_TA: EtymologySeed[] = [
  {
    word: 'அம்மா',
    root_word: '*amma',
    origin_language: 'Proto-dravídico',
    cognates: c(['te', 'అమ్మ (amma)'], ['si', 'අම්මා (ammā, emprestada do dravídico)']),
    evolution_note: '“அம்மா” (ammā) vem direto do proto-dravídico “*amma”, a mesma raiz do télugo “అమ్మ” (amma) — uma palavra tão básica da família dravídica quanto “mãe” é para o português, mas sem nenhum parentesco com ela: são duas famílias de línguas diferentes. O cingalês, língua indo-ariana vizinha, pegou essa palavra emprestada dos vizinhos dravídicos.',
    transparent: false,
  },
  {
    word: 'அப்பா',
    root_word: '*appa',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ಅಪ್ಪ (appa)'], ['ml', 'അപ്പ (appa)'], ['te', 'అప్ప (appa)']),
    evolution_note: '“அப்பா” (appā) vem do proto-dravídico “*appa”, com cognatos quase idênticos no canarês, no malaiala e no télugo.',
    transparent: false,
  },
  {
    word: 'அண்ணன்',
    root_word: '*aṇṇa',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ಅಣ್ಣ (aṇṇa)'], ['ml', 'അണ്ണൻ (aṇṇaṉ)'], ['te', 'అన్న (anna)']),
    evolution_note: '“அண்ணன்” (aṇṇaṉ, “irmão mais velho”) descende do proto-dravídico “*aṇṇa” mais o sufixo masculino “-அன்”, com a mesma raiz quase idêntica no canarês, no malaiala e no télugo — que, como o tâmil, marca a diferença de idade entre irmãos (mais velho × mais novo) onde o português só tem “irmão”.',
    transparent: false,
  },
  {
    word: 'அக்கா',
    root_word: '*akka-',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ಅಕ್ಕ (akka)'], ['ml', 'അക്ക (akka)'], ['te', 'అక్క (akka)']),
    evolution_note: '“அக்கா” (akkā, “irmã mais velha”) vem do proto-dravídico “*akka-” e aparece quase igual no canarês, no malaiala e no télugo.',
    transparent: false,
  },
  {
    word: 'தம்பி',
    root_word: '*tampV',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ತಮ್ಮ (tamma)'], ['ml', 'തമ്പി (tampi)'], ['te', 'తమ్ముడు (tammuḍu)']),
    evolution_note: '“தம்பி” (tampi, “irmão mais novo”) vem de “தம்” (“o de alguém, próprio”) mais “பின்” (“o que vem depois, mais novo”), do proto-dravídico “*tampV” — cognato do canarês, do malaiala e do télugo.',
    transparent: false,
  },
  {
    word: 'தங்கை',
    root_word: '*tamkay',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ತಂಗಿ (taṅgi)'], ['ml', 'തങ്കൈ (taṅkai)']),
    evolution_note: '“தங்கை” (taṅkai, “irmã mais nova”) combina “தம்” (“próprio”) com um elemento “கை” ligado a “irmã mais nova”, do proto-dravídico “*tamkay” — com formas aparentadas no canarês e no malaiala.',
    transparent: false,
  },
  {
    word: 'வீடு',
    root_word: '*wīṭu',
    origin_language: 'Proto-dravídico meridional',
    cognates: c(['kn', 'ಬೀಡು (bīḍu)'], ['ml', 'വീട് (vīṭŭ)']),
    evolution_note: '“வீடு” (vīṭu, “casa”) vem do verbo “விடு” (“deixar, largar”) e remonta ao proto-dravídico meridional “*wīṭu”, com cognatos no canarês e no malaiala.',
    transparent: false,
  },
  {
    word: 'பூனை',
    root_word: '*pūñe (reconstrução incerta)',
    origin_language: 'Proto-dravídico (etimologia incompleta)',
    cognates: c(['kfa', 'pūñe (kodava)'], ['tcy', 'pucce (tulu)']),
    evolution_note: '“பூனை” (pūṉai, “gato”) tem cognatos no kodava e no tulu, mas o próprio Wiktionary marca a etimologia completa como incerta — por isso este verbete não afirma uma raiz proto-dravídica fechada.',
    transparent: false,
  },
  {
    word: 'பால்',
    root_word: '*pāl',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ಹಾಲು (hālu)'], ['ml', 'പാൽ (pāl)'], ['te', 'పాలు (pālu)']),
    evolution_note: '“பால்” (pāl, “leite”) vem do proto-dravídico “*pāl”, com a forma quase idêntica no malaiala e no télugo; o canarês trocou o “p” inicial por “h”, uma mudança sonora comum nessa língua.',
    transparent: false,
  },
  {
    word: 'பழம்',
    root_word: '*paḻ-am',
    origin_language: 'Proto-dravídico',
    cognates: c(['kn', 'ಹಣ್ಣು (haṇṇu)'], ['ml', 'പഴം (paḻaṁ)'], ['te', 'పండు (paṇḍu)']),
    evolution_note: '“பழம்” (paḻam, “fruta”) vem de “பழு” (“amadurecer”) mais o sufixo “-அம்”, do proto-dravídico “*paḻ-”; o sânscrito “फल” (phala, “fruta”), segundo o Wiktionary, foi emprestado de uma língua dravídica — o caminho inverso do normal entre as duas famílias.',
    transparent: false,
  },
  {
    word: 'தண்ணீர்',
    root_word: '*taṇ + *nīr',
    origin_language: 'Proto-dravídico',
    cognates: [],
    evolution_note: '“தண்ணீர்” (taṇṇīr, “água”) é um composto de “தண்” (“frio”) com “நீர்” (“água”): ao pé da letra, “água fria”. “நீர்” sozinho é a forma mais literária/formal de “água”; no tâmil falado do dia a dia, “தண்ணீர்” é a palavra comum.',
    transparent: false,
  },
  {
    word: 'குடும்பம்',
    root_word: 'कुटुम्ब (kuṭumba)',
    origin_language: 'Sânscrito (possível origem dravídica mais antiga)',
    cognates: c(['sa', 'कुटुम्ब (kuṭumba)']),
    evolution_note: '“குடும்பம்” (kuṭumpam, “família”) foi emprestada do sânscrito “कुटुम्ब” (kuṭumba) mais o sufixo “-அம்”. Curiosamente, o próprio Wiktionary observa que a origem última dessa palavra sânscrita pode ser dravídica — ou seja, pode ter ido e voltado entre as duas famílias de línguas; não há certeza.',
    transparent: false,
  },
  {
    word: 'சூரியன்',
    root_word: 'सूर्य (sūrya)',
    origin_language: 'Sânscrito',
    cognates: c(['sa', 'सूर्य (sūrya)'], ['te', 'సూర్యుడు (sūryuḍu)']),
    evolution_note: '“சூரியன்” (cūriyaṉ, “sol”) vem do sânscrito “सूर्य” (sūrya, o deus-sol) mais o sufixo masculino tâmil “-அன்”. O télugo pegou o mesmo nome sânscrito, com o sufixo masculino télugo “-ుడు”: “సూర్యుడు”.',
    transparent: false,
  },
  {
    word: 'நீலம்',
    root_word: 'नील (nīla)',
    origin_language: 'Sânscrito',
    cognates: c(['sa', 'नील (nīla)']),
    evolution_note: '“நீலம்” (nīlam, “azul”) vem do sânscrito “नील” (nīla, “azul-escuro, anil”) — um empréstimo direto, sem raiz dravídica.',
    transparent: false,
  },
  {
    word: 'போ',
    root_word: '*pō-',
    origin_language: 'Proto-dravídico meridional',
    cognates: c(['kn', 'ಹೋಗು (hōgu)'], ['ml', 'போகுக (pōkuka)'], ['te', 'పోవు (pōvu)']),
    evolution_note: '“போ” (pō, “ir”) vem do proto-dravídico meridional “*pō-”, com cognatos no malaiala, no télugo e no canarês (que trocou o “p” inicial por “h”).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TA: [string, string][] = [
  ['நீங்கள் எப்படி இருக்கின்றீர்கள்?', 'Como você está?'],
  ['உங்கள் குடும்பம் எப்படி இருக்கிறது?', 'Como está a sua família?'],
  ['உங்களுக்கு என்ன வேண்டும்?', 'O que você quer?'],
  ['உங்கள் வீடு எப்படி இருக்கிறது?', 'Como é a sua casa?'],
];

export const SHADOWING_TA: [string, string][] = [
  ['வணக்கம், என் பெயர் கவிதா.', 'Olá, meu nome é Kavitha.'],
  ['நான் நல்லா இருக்கின்றேன், நன்றி.', 'Eu estou bem, obrigado(a).'],
  ['எனக்கு ஒரு அண்ணன் உண்டு.', 'Eu tenho um irmão mais velho.'],
  ['எனக்கு தண்ணீர் வேண்டும்.', 'Eu quero água.'],
];
