import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no tailandês). */
export const COMMUNITY_TH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'บอกชื่อ เมือง และครอบครัวของคุณ',
    content: 'สวัสดี ผมชื่อบรูโน่ และผมเมืองกูรีตีบา ผมมีพี่ชาย',
    reference: 'สวัสดีครับ ผมชื่อบรูโน่ ผมมาจากกูรีตีบาครับ ผมมีพี่ชายหนึ่งคนครับ',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'คุณกินอะไรตอนเช้า',
    content: 'ฉันกินข้าวและกาแฟค่ะ',
    reference: 'ฉันกินข้าวและดื่มกาแฟค่ะ',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'บ้านของคุณเป็นอย่างไร',
    content: 'บ้านของฉันเล็กครับ สวัสดีครับ',
    reference: 'บ้านของฉันเล็กค่ะ (Diego esqueceu de usar “ครับ”, a partícula de homem, e usou “ค่ะ”, de mulher, por engano — e colocou “สวัสดี” fora de lugar, no meio da resposta.)',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_TH: ScenarioSeed[] = [
  {
    id: 'th-s1',
    title: 'ร้านกาแฟในกรุงเทพ',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'มาลี, colega do curso de tailandês',
    description: 'Malee convida você para tomar um café perto do rio Chao Phraya, em Bangkok. É uma conversa entre colegas, mas lembre de terminar as frases com “ครับ” ou “ค่ะ”.',
    turns: [
      {
        bot: 'คุณอยากดื่มอะไรคะ',
        botTranslation: 'O que você quer beber?',
        keywords: ['กาแฟ', 'น้ำ', 'ชา'],
        suggestions: ['กาแฟหนึ่งแก้วครับ', 'ขอน้ำแก้วหนึ่งครับ'],
      },
      {
        bot: 'คุณมาจากที่ไหนคะ',
        botTranslation: 'De onde você vem?',
        keywords: ['มาจาก'],
        suggestions: ['ผมมาจากเซาเปาโลครับ', 'ผมมาจากซัลวาดอร์ครับ'],
      },
    ],
  },
];

/**
 * Palavras do tailandês emprestadas do páli e do sânscrito — muitas vezes a mesma raiz indiana que
 * entrou também no hindi, por outro caminho (como vocabulário erudito/religioso, não por parentesco
 * direto: o tailandês não é indo-europeu).
 */
export const ETYMOLOGY_TH: EtymologySeed[] = [
  {
    word: 'ภาษา',
    root_word: 'भाषा (bhāṣā)',
    origin_language: 'Sânscrito (via páli)',
    cognates: c(['hi', 'भाषा (bhāṣā, língua)']),
    evolution_note: '“ภาษา” (phaa-sǎa, “língua, idioma”) veio do páli “bhāsā”, que por sua vez veio do sânscrito “भाषा” (bhāṣā) — a mesma raiz indiana que deu “भाषा” (bhāṣā) em hindi. O tailandês não é parente do sânscrito (é uma língua Kra-Dai, família totalmente diferente), mas absorveu centenas de palavras eruditas e religiosas do páli e do sânscrito, do mesmo jeito que o português absorveu palavras do grego e do latim.',
    transparent: false,
  },
  {
    word: 'ประเทศ',
    root_word: 'प्रदेश (pradeśa)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'प्रदेश (pradeś, região, estado)']),
    evolution_note: '“ประเทศ” (prà-têet, “país”) vem do sânscrito “प्रदेश” (pradeśa, “região, território, lugar”) — a mesma raiz que deu “प्रदेश” (pradeś) em hindi, hoje usada para os estados da Índia. Em tailandês, a palavra ganhou o sentido mais amplo de “país”.',
    transparent: false,
  },
  {
    word: 'มนุษย์',
    root_word: 'मनुष्य (manuṣya)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'मनुष्य (manuṣya, ser humano)']),
    evolution_note: '“มนุษย์” (má-nút, “ser humano”, registro formal) vem direto do sânscrito “मनुष्य” (manuṣya), a mesma palavra usada em hindi para “ser humano”. É um empréstimo erudito: no dia a dia, o tailandês usa mais “คน” (khon, “pessoa”), de raiz própria.',
    transparent: false,
  },
  {
    word: 'วัด',
    root_word: 'वाट (vāṭa)',
    origin_language: 'Sânscrito (provavelmente via khmer antigo)',
    cognates: c(['hi', 'sem cognato direto em uso comum']),
    evolution_note: '“วัด” (wát, “templo budista”) vem do sânscrito “वाट” (vāṭa, “cercado, recinto”), possivelmente chegando ao tailandês através do khmer antigo “វត្ត”. A palavra virou o nome genérico de qualquer complexo de templo budista na Tailândia, como o famoso Wat Phra Kaew, em Bangkok.',
    transparent: false,
  },
  {
    word: 'สวัสดี',
    root_word: 'स्वस्ति (svasti)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'स्वस्ति (svasti, bem-estar — usado em contextos formais/religiosos)']),
    evolution_note: '“สวัสดี” (sà-wàt-dii) vem do sânscrito “स्वस्ति” (svasti, “bem-estar, boa sorte”). Curiosamente, como saudação do dia a dia ela é recente: foi proposta como cumprimento nacional só em 1943, durante um esforço de padronização da língua tailandesa, tornando-se desde então o “oi/tchau” mais usado do país.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TH: [string, string][] = [
  ['วันนี้คุณเป็นอย่างไรบ้าง', 'Como você está hoje?'],
  ['เล่าเรื่องครอบครัวของคุณหน่อย', 'Conte sobre a sua família.'],
  ['คุณชอบกินและดื่มอะไร', 'O que você gosta de comer e beber?'],
  ['บ้านของคุณเป็นอย่างไร', 'Como é a sua casa?'],
];

export const SHADOWING_TH: [string, string][] = [
  ['สวัสดีค่ะ ฉันชื่อมาลี', 'Oi, eu me chamo Malee.'],
  ['สบายดีครับ ขอบคุณครับ', 'Eu vou bem, obrigado!'],
  ['ฉันมีพี่ชายหนึ่งคน', 'Eu tenho um irmão mais velho.'],
  ['อาหารไทยอร่อยมาก', 'A comida tailandesa é muito gostosa.'],
];
