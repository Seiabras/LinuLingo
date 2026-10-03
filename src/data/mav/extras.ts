import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo sateré-mawé). */
export const COMMUNITY_MAV: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: "Ihot'ok!",
    content: 'Wantym!',
    reference: "Ihot'ok!",
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Waku sese!',
    content: 'Waku sese!',
    reference: "Yt kat hap'i.",
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Contar a um visitante: “nós (eu e minha família, sem você) queimamos lenha”.',
    content: "Aito uruiwuk aria'yp.",
    reference: "Uruto uruiwuk aria'yp.",
  },
];

/**
 * Cenário de conversa. A tese de Silva (2010) e o glossário de Miquiles & Castro (2022) não
 * registram uma forma de tratamento “formal” separada (como o “o senhor” do português): “en” serve
 * para qualquer pessoa. Por isso o cenário é informal, como nos outros pacotes de língua indígena.
 */
export const SCENARIOS_MAV: ScenarioSeed[] = [
  {
    id: 'mav-s1',
    title: 'Chegando a uma aldeia do rio Andirá',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um professor sateré-mawé de uma aldeia do rio Andirá, na TI Andirá-Marau',
    description:
      'As fontes consultadas não registram uma forma “formal” separada da informal no sateré-mawé: o mesmo “en” (você) serve para qualquer pessoa.',
    turns: [
      {
        bot: "Hay! Heika'at!",
        botTranslation: 'Olá! Boa tarde!',
        keywords: ["heika'at", 'hay'],
        suggestions: ["Heika'at!"],
      },
      {
        bot: 'Kat e eset?',
        botTranslation: 'Como é o seu nome?',
        keywords: ['uhet', 'e'],
        suggestions: ['Uhet Linu e.'],
      },
      {
        bot: 'Ajumpiat en?',
        botTranslation: 'Você é de onde?',
        keywords: ['uito', 'piat'],
        suggestions: ['Uito Parintins piat.'],
      },
      {
        bot: 'Waku sese eriot!',
        botTranslation: 'Seja bem-vindo!',
        keywords: ['waku', 'sese'],
        suggestions: ['Waku sese!'],
      },
    ],
  },
];

/**
 * Etimologias. Fontes: Wikcionário (verbete “guaraná”, em pt.wiktionary.org e en.wiktionary.org:
 * do sateré-mawé “warana”); glossário de Miquiles & Castro (2022) (“wewato”, “wewato ahup”,
 * “sasym”, “tupana”); Silva (2010), §2.1.2, tabela 2 e §4.3.3 (empréstimos do nheengatu e do
 * português; “wewato wary'i”, vaca). O sateré-mawé não é parente “de berço” do português, então, como nos outros
 * pacotes indígenas, as notas tratam de empréstimos e da formação das palavras.
 */
export const ETYMOLOGY_MAV: EtymologySeed[] = [
  {
    word: 'Waranã',
    root_word: 'waranã (guaraná, em sateré-mawé)',
    origin_language: 'Sateré-mawé',
    cognates: c(['pt', 'guaraná'], ['en', 'guarana'], ['es', 'guaraná']),
    evolution_note:
      'A palavra portuguesa “guaraná” vem do sateré-mawé “waranã” — e daí passou para outras línguas, como o inglês “guarana”. Não é por acaso: foram os Sateré-Mawé que domesticaram a trepadeira silvestre e criaram o processo de beneficiamento do guaraná. Waranã é também o nome de um dos clãs do povo.',
    transparent: true,
  },
  {
    word: 'Wewato',
    root_word: 'wewato (anta)',
    origin_language: 'Sateré-mawé',
    cognates: c(['mav', 'wewato ahup (boi)'], ['mav', "wewato wary'i (vaca)"]),
    evolution_note:
      'Quando o gado chegou, o sateré-mawé não pegou emprestada a palavra “boi”: deu ao bicho novo o nome do maior animal que já conhecia, a anta (“wewato”). O boi é “wewato ahup”, e a vaca é “wewato wary’i” — com “wary’i” (fêmea), o mesmo jeito que a língua usa para marcar o sexo dos bichos, já que os nomes não têm gênero gramatical.',
    transparent: false,
  },
  {
    word: 'Tupana',
    root_word: 'tupã (nheengatu, a língua geral amazônica)',
    origin_language: 'Nheengatu',
    cognates: c(['yrl', 'tupã'], ['tpw', 'Tupã'], ['pt', 'Tupã']),
    evolution_note:
      '“Tupana” (Deus) é um empréstimo da língua geral amazônica, o nheengatu, que os missionários espalharam pela Amazônia a partir do século XVII. O sateré-mawé recebeu muitas palavras dessa língua, às vezes sem mudança nenhuma (“kui’a”, cuia; “apukuita”, remo) e às vezes adaptadas, como “tupana” e “pisana” (gato). Os falantes, em geral, nem percebem que são palavras de fora.',
    transparent: true,
  },
  {
    word: 'Puruwei',
    root_word: 'puruwei (professor), termo criado pelos próprios Sateré-Mawé',
    origin_language: 'Sateré-mawé',
    cognates: c(['mav', 'puruweira (professora)'], ['pt', 'professora']),
    evolution_note:
      '“Puruwei” é o termo que os Sateré-Mawé criaram para “professor”. O curioso é a forma feminina, “puruweira”, que os próprios professores sateré-mawé passaram a usar para as professoras: a língua não marca gênero nos nomes (homem e mulher, pai e mãe são palavras diferentes), mas aqui tomou emprestada a terminação “-a” do português — o mesmo que aconteceu em “hamiariru” (neto) e “hamiarira” (neta).',
    transparent: false,
  },
  {
    word: 'Sasym',
    root_word: 'sasym (laranja; literalmente “chupar”)',
    origin_language: 'Sateré-mawé',
    cognates: c(['mav', 'Kásu (caju)'], ['mav', 'Nanã (abacaxi)']),
    evolution_note:
      'A laranja ganhou um nome pelo jeito de comer: “sasym” quer dizer literalmente “chupar” — a fruta “chupável”. Já outras frutas vieram com o nome de fora, como “kásu” (caju) — emprestado da língua geral amazônica ou do português, não se sabe ao certo por qual dos dois caminhos, já que o próprio português também tomou “caju” da língua geral.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MAV: [string, string][] = [
  ['Kat e eset?', 'Como é o seu nome?'],
  ['Ajumpiat en?', 'Você é de onde?'],
  ["Etiky'esat?", 'Você quer?'],
  ['Aikotaig?', 'Como vai?'],
];

export const SHADOWING_MAV: [string, string][] = [
  ["Ihot'ok!", 'Bom dia!'],
  ['Waku sese eriot!', 'Seja bem-vindo!'],
  ["Uito atiky'esat y'y.", 'Eu quero água.'],
  ["Mogki'ite ira'yn aru!", 'Até amanhã!'],
];
