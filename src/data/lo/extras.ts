import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no laosiano). */
export const COMMUNITY_LO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'ບອກຊື່ ເມືອງ ແລະ ຄອບຄົວຂອງເຈົ້າ',
    content: 'ສະບາຍດີ ຂ້ອຍຊື່ບຣູໂນ ແລະ ຂ້ອຍເມືອງກູຣີຊີບາ ຂ້ອຍມີອ້າຍ',
    reference: 'ສະບາຍດີ ຂ້ອຍຊື່ບຣູໂນ ຂ້ອຍມາຈາກກູຣີຊີບາ ຂ້ອຍມີອ້າຍນຶ່ງຄົນ (Bruno esqueceu o verbo “ມາຈາກ”, antes do nome da cidade, e o classificador “ຄົນ” depois do número.)',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'ເຈົ້າມັກກິນຫຍັງ',
    content: 'ຂ້ອຍກິນເຂົ້າແລະກາເຟ',
    reference: 'ຂ້ອຍກິນເຂົ້າ ແລະ ດື່ມກາເຟ (Camila esqueceu de usar “ດື່ມ”, beber, antes de “ກາເຟ” — em laosiano não dá para “comer” café, só “beber”.)',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'ເຮືອນຂອງເຈົ້ານ້ອຍບໍ່',
    content: 'ເຮືອນຂອງຂ້ອຍບໍ່ນ້ອຍ',
    reference: 'ແມ່ນ, ເຮືອນຂອງຂ້ອຍນ້ອຍ (Diego respondeu com “ບໍ່ນ້ອຍ”, “não pequena”, quando queria dizer que sim: a resposta afirmativa correta a uma pergunta terminada em “ບໍ່” é “ແມ່ນ”, não repetir o adjetivo negado.)',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LO: ScenarioSeed[] = [
  {
    id: 'lo-s1',
    title: 'ກາເຟຢູ່ວຽງຈັນ',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'ບຸນມີ, colega do curso de laosiano',
    description: 'Bounmy convida você para tomar um café perto do rio Mekong (ແມ່ນ້ຳຂອງ), em Vientiane. É uma conversa entre colegas.',
    turns: [
      {
        bot: 'ເຈົ້າຢາກດື່ມຫຍັງ',
        botTranslation: 'O que você quer beber?',
        keywords: ['ກາເຟ', 'ນ້ຳ', 'ຊາ'],
        suggestions: ['ກາເຟແດ່', 'ນ້ຳແດ່'],
      },
      {
        bot: 'ເຈົ້າມາຈາກໃສ',
        botTranslation: 'De onde você vem?',
        keywords: ['ມາຈາກ'],
        suggestions: ['ຂ້ອຍມາຈາກບຣາຊິນ'],
      },
    ],
  },
];

/**
 * Palavras do laosiano emprestadas do páli e do sânscrito — muitas vezes a mesma raiz indiana que
 * entrou também no hindi (por outro caminho) e no tailandês e no khmer (pelo mesmo caminho: o
 * budismo e o hinduísmo vindos da Índia), não por parentesco direto: o laosiano não é indo-europeu.
 */
export const ETYMOLOGY_LO: EtymologySeed[] = [
  {
    word: 'ພາສາ',
    root_word: 'भाषा (bhāṣā)',
    origin_language: 'Sânscrito (via páli)',
    cognates: c(['hi', 'भाषा (bhāṣā, língua)'], ['th', 'ภาษา (phasa, língua)']),
    evolution_note: '“ພາສາ” (phā-sā, “língua, idioma”) veio do páli “bhāsā”, que por sua vez veio do sânscrito “भाषा” (bhāṣā) — a mesma raiz indiana que deu “भाषा” (bhāṣā) em hindi e “ภาษา” (phasa) em tailandês. O laosiano não é parente do sânscrito (é uma língua Kra-Dai, família totalmente diferente), mas absorveu centenas de palavras eruditas e religiosas do páli e do sânscrito, do mesmo jeito que o português absorveu palavras do grego e do latim.',
    transparent: false,
  },
  {
    word: 'ປະເທດ',
    root_word: 'प्रदेश (pradeśa)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'प्रदेश (pradeś, região, estado)'], ['th', 'ประเทศ (prathêt, país)']),
    evolution_note: '“ປະເທດ” (pa-thēt, “país”) vem do sânscrito “प्रदेश” (pradeśa, “região, território, lugar”) — a mesma raiz que deu “प्रदेश” (pradeś) em hindi, hoje usada para os estados da Índia, e “ประเทศ” em tailandês. Em laosiano, a palavra ganhou o sentido mais amplo de “país”.',
    transparent: false,
  },
  {
    word: 'ມະນຸດ',
    root_word: 'मनुष्य (manuṣya)',
    origin_language: 'Sânscrito',
    cognates: c(['hi', 'मनुष्य (manuṣya, ser humano)'], ['th', 'มนุษย์ (manut, ser humano)']),
    evolution_note: '“ມະນຸດ” (ma-nut, “ser humano”, registro formal) vem direto do sânscrito “मनुष्य” (manuṣya), a mesma palavra usada em hindi para “ser humano” e, com a mesma raiz, em tailandês. É um empréstimo erudito: no dia a dia, o laosiano usa mais “ຄົນ” (khon, “pessoa”), de raiz própria.',
    transparent: false,
  },
  {
    word: 'ວັດ',
    root_word: 'वाट (vāṭa)',
    origin_language: 'Sânscrito (provavelmente via khmer antigo)',
    cognates: c(['hi', 'sem cognato direto em uso comum'], ['th', 'วัด (wat, templo budista)']),
    evolution_note: '“ວັດ” (wat, “templo budista”) vem do sânscrito “वाट” (vāṭa, “cercado, recinto”), possivelmente chegando ao laosiano através do khmer antigo, a mesma raiz que deu “วัด” em tailandês. A palavra virou o nome genérico de qualquer complexo de templo budista no Laos, como o ທາດຫຼວງ, em Vientiane.',
    transparent: false,
  },
  {
    word: 'ສະບາຍດີ',
    root_word: 'सप्पाय (sappāya, páli)',
    origin_language: 'Páli',
    cognates: c(['km', 'សប្បាយ (sabai, bem, feliz)'], ['th', 'สบาย (sabai, bem, confortável)']),
    evolution_note: '“ສະບາຍດີ”, a saudação mais comum do laosiano, é a junção de “ສະບາຍ” (sa-bāi, “bem, saudável”) com “ດີ” (dī, “bom”) — literalmente algo como “passar bem”. “ສະບາຍ” vem do páli “sappāya” (“benéfico, agradável”), a mesma raiz do khmer “សប្បាយ” e do tailandês “สบาย”. É uma diferença real entre as duas línguas vizinhas: o cumprimento do dia a dia do tailandês, “สวัสดี”, vem de uma raiz sânscrita diferente (“स्वस्ति”, svasti) e só foi adotado como saudação nacional em 1943 — enquanto a saudação do laosiano é, desde sempre, essa mesma palavra do bem-estar.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LO: [string, string][] = [
  ['ມື້ນີ້ເຈົ້າສະບາຍດີບໍ່', 'Você está bem hoje?'],
  ['ຄອບຄົວຂອງເຈົ້າໃຫຍ່ບໍ່', 'Sua família é grande?'],
  ['ເຈົ້າມັກກິນແລະດື່ມຫຍັງ', 'O que você gosta de comer e beber?'],
  ['ເຮືອນຂອງເຈົ້ານ້ອຍບໍ່', 'Sua casa é pequena?'],
];

export const SHADOWING_LO: [string, string][] = [
  ['ສະບາຍດີ, ຂ້ອຍຊື່ບຸນມີ', 'Oi, eu me chamo Bounmy.'],
  ['ຂ້ອຍສະບາຍດີ, ຂອບໃຈ', 'Eu vou bem, obrigado!'],
  ['ຂ້ອຍມີອ້າຍນຶ່ງຄົນ', 'Eu tenho um irmão mais velho.'],
  ['ເຂົ້າລາວແຊບຫຼາຍ', 'O arroz laosiano é muito gostoso.'],
];
