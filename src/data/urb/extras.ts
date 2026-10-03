import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo ka'apor). */
export const COMMUNITY_URB: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Responder ao dono da casa, que disse: “Ko nde erejur.”',
    content: 'Ko nde erejur.',
    reference: 'Ajur.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Dizer “minha casa”.',
    content: 'Ihẽ hok.',
    reference: 'Ihẽ rok.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Uma mulher apresenta o filho: “meu filho”.',
    content: "Ihẽ ra'yr.",
    reference: 'Ihẽ membyr.',
  },
];

/**
 * Cenário de conversa. O dicionário de Kakumasu & Kakumasu (2007) não registra uma forma de
 * tratamento “formal” separada (como o “o senhor” do português): “nde” serve para qualquer pessoa.
 * Por isso o cenário é informal, como nos outros pacotes de língua indígena. Falas de D.2.9 e D.2.5;
 * “Ihẽ rer Linu” e “Pira rehe ihẽ aho ta” como em historias.ts.
 */
export const SCENARIOS_URB: ScenarioSeed[] = [
  {
    id: 'urb-s1',
    title: "Chegando a uma aldeia ka'apor",
    emoji: '🏡',
    cefr: 'A1',
    register: 'informal',
    persona: 'O dono de uma casa numa aldeia ka’apor da Terra Indígena Alto Turiaçu, no Maranhão',
    description:
      'As fontes consultadas não registram uma forma “formal” separada da informal no ka’apor: o mesmo “nde” (você) serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Ko nde erejur.',
        botTranslation: 'Você veio para cá.',
        keywords: ['ajur'],
        suggestions: ['Ajur.'],
      },
      {
        bot: "Ma'e nde rer?",
        botTranslation: 'Como é o seu nome?',
        keywords: ['ihẽ', 'rer'],
        suggestions: ['Ihẽ rer Linu.'],
      },
      {
        bot: 'My nde ereho ta my?',
        botTranslation: 'Aonde você vai?',
        keywords: ['aho', 'ta'],
        suggestions: ['Pira rehe ihẽ aho ta.'],
      },
      {
        bot: 'Ere.',
        botTranslation: 'Está bem.',
        keywords: ['aho', 'ta'],
        suggestions: ['Ihẽ aho ta.'],
      },
    ],
  },
];

/**
 * Etimologias. Fontes: dicionário de Kakumasu & Kakumasu (2007) — D.1.1 (“ka'apor”: ka'a, mato +
 * -por, morador), A.7.7 (“tapi'iruhu”: tapi'ir, anta + uhu, grande), A.3 (“jahy rata”: “rata é
 * derivado de tata que tem o sentido de ‘fogo’”; “warahy … (kwarahy) só os mais velhos pronunciam
 * assim”), D.1.7.1 (“pái” e “mãi” do português no lugar de -ru e -hy; “Tupi antigo = sy”); ISA,
 * pib.socioambiental.org/pt/Povo:Ka'apor (outra leitura do nome: “pegadas da mata”); Wikcionário
 * (en.wiktionary.org “caipora”: do tupi antigo ka'a + pora, “morador da mata”). Cognatos nas línguas
 * irmãs já no app: tpw kûarahy, jasy, tatá; gn kuarahy, tata; yrl tapiira; gun tapi'i. O ka'apor não
 * é parente “de berço” do português, então as notas tratam de formação de palavras, parentesco com
 * as outras línguas tupi-guarani e empréstimos.
 */
export const ETYMOLOGY_URB: EtymologySeed[] = [
  {
    word: "Ka'apor",
    root_word: "ka'a (mato) + -por (morador)",
    origin_language: "Ka'apor",
    cognates: c(['tpw', "ka'a (mato)"], ['pt', 'caipora']),
    evolution_note:
      'O nome que o povo dá a si mesmo junta “ka’a” (mato, floresta) e “-por” (morador): “morador do mato”, segundo o dicionário de Kakumasu. Outros estudiosos preferem ler “pegadas da mata”. A mesma ideia de “morador do mato” está no tupi antigo “ka’a” + “pora”, de onde veio a palavra portuguesa “caipora”, o ser protetor da floresta do folclore brasileiro.',
    transparent: true,
  },
  {
    word: "Tapi'iruhu",
    root_word: "tapi'ir (anta) + uhu (grande)",
    origin_language: "Ka'apor",
    cognates: c(['yrl', 'tapiira (anta)'], ['gun', "tapi'i (anta)"], ['urb', "tapi'ir (anta)"]),
    evolution_note:
      'Quando o gado chegou, o ka’apor não precisou de palavra emprestada: o boi virou a “anta grande”, “tapi’iruhu”. O leite de vaca é “tapi’iruhu kamby”. A anta, por sua vez, tem o mesmo nome em várias línguas tupi-guarani: “tapiira” no nheengatu, “tapi’i” no guarani mbyá.',
    transparent: true,
  },
  {
    word: 'Jahy rata',
    root_word: 'jahy (lua) + rata (de tata, fogo)',
    origin_language: "Ka'apor",
    cognates: c(['tpw', 'jasy (lua)'], ['tpw', 'tatá (fogo)'], ['gn', 'tata (fogo)']),
    evolution_note:
      'Em ka’apor, a estrela é “jahy rata”, o “fogo da lua”: “rata” vem de “tata”, fogo. As duas partes têm irmãs no tupi antigo — “jasy” (lua) e “tatá” (fogo) — e o fogo é “tata” também no guarani.',
    transparent: true,
  },
  {
    word: 'Warahy',
    root_word: 'kwarahy (forma antiga)',
    origin_language: "Ka'apor",
    cognates: c(['tpw', 'kûarahy'], ['gn', 'kuarahy'], ['gun', 'kuaray']),
    evolution_note:
      'O sol é “warahy”, mas os mais velhos ainda dizem “kwarahy” — e é essa forma mais antiga que aparece nas línguas irmãs: “kûarahy” no tupi antigo, “kuarahy” no guarani. O “k” do começo caiu na fala dos mais novos. A mesma palavra marca as horas do dia: “warahy jandar rahã” é o meio-dia.',
    transparent: true,
  },
  {
    word: 'Ihẽ pái',
    root_word: 'pai (português)',
    origin_language: 'Português',
    cognates: c(['pt', 'pai'], ['pt', 'mãe'], ['urb', 'ihẽ mãi (minha mãe)']),
    evolution_note:
      '“Pái” e “mãi” vieram do português e tomaram o lugar das palavras antigas: “-hy” (mãe, parente do “sy” do tupi antigo) quase sumiu, e “-ru” (pai) vai sendo trocado aos poucos — as mulheres sempre dizem “ihẽ pái”. Ajudou nisso o costume de chamar os pais pelo nome do filho mais velho: “Nosẽ-ru” ou “Nosẽ-pái”, pai de Nosẽ; “Pije-mãi”, mãe de Pije.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_URB: [string, string][] = [
  ["Ma'e nde rer?", 'Como é o seu nome?'],
  ['My nde ereho ta my?', 'Aonde você vai?'],
  ["Myja warahy 'ar nde apo?", 'Quantos anos você tem?'],
  ["Ma'e 'ar apo?", 'Que dia é hoje?'],
];

export const SHADOWING_URB: [string, string][] = [
  ['Ko ihẽ ajur.', 'Eu vim aqui.'],
  ['Ihẽ aho ta.', 'Eu vou.'],
  ['Koĩ ihẽ aho ta.', 'Amanhã eu vou.'],
  ['Jahorahã!', 'Vamos!'],
];
