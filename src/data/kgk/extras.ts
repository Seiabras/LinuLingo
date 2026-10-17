import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Extras do kaiowá. Revisão de 17/10/2026: grafia do SIL (Bridgeman 2002, como em Barros 2014) e frases do
 * «Dicionário bilíngue kaiwá-português» de Eliane B. L. de Barros (UFMS, 2014), com a página impressa.
 */

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo kaiowá). */
export const COMMUNITY_KGK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Agwyjevete!',
    // Benites 2021 (grafia do curso) e Barros 2014, p. 181 (Mba'éixa pa ereiko?): o erro é tirar o apóstrofo
    content: 'Agwyjevete! Mbaéixa pa ereiko?',
    reference: 'Agwyjevete! Mba\'éixa pa ereiko?',
  },
  {
    author_name: 'Camila 🇧🇷',
    // pergunta: Barros 2014, p. 173
    prompt: 'Kipy ereho-ta nde?',
    // Barros 2014, p. 196 (Aju jevy xe róga-py): o erro é esquecer o r- de “xe róga”
    content: 'Aju jevy xe óga-py.',
    reference: 'Aju jevy xe róga-py.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mba\'éixa pa ereiko?',
    // Barros 2014, p. 211 (Xe nda'úi so'o): o erro é negar só com o começo
    content: 'Xe nda\'u so\'o.',
    reference: 'Xe nda\'úi so\'o.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KGK: ScenarioSeed[] = [
  {
    id: 'kgk-s1',
    title: 'Ka\'ay: uma visita com mate',
    emoji: '🧉',
    cefr: 'A1',
    register: 'informal',
    persona: 'uma jari (avó) que recebe visitas na aldeia',
    description:
      'A jari recebe você em casa. Nas fontes consultadas não há um pronome de cortesia no kaiowá: a conversa usa “nde/ne” com qualquer pessoa.',
    turns: [
      {
        // Barros 2014, p. 181
        bot: 'Mba\'éixa pa ereiko?',
        botTranslation: 'Como você está?',
        keywords: ['agwyjevete', 'resãi'],
        suggestions: ['Agwyjevete! Ne resãi?', 'Agwyjevete!'],
      },
      {
        // Barros 2014, p. 171 (oração tirada de “Egwahẽ ja'u ka'ay, he'i”) e p. 165
        bot: 'Egwahẽ ja\'u ka\'ay.',
        botTranslation: 'Venha, vamos beber mate.',
        keywords: ['jaha', 'agwyjevete'],
        suggestions: ['Jaha katu.', 'Agwyjevete!'],
      },
    ],
  },
  {
    id: 'kgk-s2',
    title: 'Kipy ereho-ta nde? Planos para amanhã',
    emoji: '🛤️',
    cefr: 'A2',
    register: 'informal',
    persona: 'um nhamói (vovô) que encontra você no caminho',
    description: 'O vovô quer saber aonde você vai e se você está bem. Responda com -ta (vou) e com as palavras de sentimento.',
    turns: [
      {
        // Barros 2014, p. 173 e p. 174
        bot: 'Kipy ereho-ta nde?',
        botTranslation: 'Aonde você vai?',
        keywords: ['aha-ta', 'ko\'ẽ ramo'],
        suggestions: ['Ko\'ẽ ramo aha-ta Tanambi-py.', 'Aha-ta anhemitỹ.'],
      },
      {
        // Barros 2014, p. 218, p. 154 e p. 189
        bot: 'Ere\'use tipo ka\'ay?',
        botTranslation: 'Você quer beber mate?',
        keywords: ['ha\'e', 'naháni'],
        suggestions: ['Ha\'e.', 'Naháni.'],
      },
    ],
  },
];

/**
 * Palavras do kaiowá com raiz tupi-guarani compartilhada com o português ou com os outros guaranis do app.
 * As formas de gn e gun foram lidas nos arquivos de vocabulário desses pacotes; as kaiowá, em Barros
 * 2014 (páginas abaixo).
 */
export const ETYMOLOGY_KGK: EtymologySeed[] = [
  {
    // Barros 2014, p. 165 (jagwarete, onça) e p. 165 (jagwa, cachorro)
    word: 'jagwarete',
    root_word: '*jawar + ete',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jaguar (via tupi antigo îagûara)'], ['gn', 'jaguarete (onça-pintada, mesma palavra na grafia paraguaia); jagua, cachorro']),
    evolution_note:
      'A raiz tupi-guarani “*jawar”, de onde veio, pelo tupi antigo, o português “jaguar”, ganhou no kaiowá o sufixo “-ete” (“de verdade”): “jagwarete”, a onça, é o “jagwa de verdade”. Sozinha, “jagwa” é “cachorro” em kaiowá (Barros 2014), como “jagua” no guarani paraguaio. O guarani paraguaio tem a mesma palavra para a onça-pintada, escrita “jaguarete”.',
    transparent: true,
  },
  {
    // Barros 2014, p. 181 (mbaraka, chocalho)
    word: 'mbaraka',
    root_word: 'mbaraka',
    origin_language: 'Tupi-guarani',
    cognates: c(['pt', 'maraca']),
    evolution_note:
      'O chocalho dos cantos-reza kaiowá e guarani deu ao português, por empréstimo antigo, a palavra “maraca”.',
    transparent: true,
  },
  {
    // Barros 2014, p. 176 (kwarahy; kwara, o sol como entidade, Pa'ikwara)
    word: 'kwarahy',
    root_word: '*kʷarat͡ʃɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'kuarahy (mesma palavra na grafia paraguaia)'], ['gun', 'kuaray (sem o “h”)']),
    evolution_note:
      'A palavra do sol é a mesma no kaiowá e no guarani paraguaio: só muda a grafia, “kw” no kaiowá do SIL e “ku” no paraguaio. O mbyá perdeu o “h”: “kuaray”. No kaiowá, o sol como ser da mitologia é Pa\'ikwara.',
    transparent: false,
  },
  {
    // Barros 2014, p. 152 (gwyra)
    word: 'gwyra',
    root_word: '*wɨra',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'guyra (mesma palavra na grafia paraguaia)'], ['gun', 'guyra (mesma palavra)']),
    evolution_note:
      'A raiz tupi-guarani de “pássaro” é a mesma no kaiowá, no guarani paraguaio e no mbyá; o kaiowá do SIL escreve “gw” onde os outros escrevem “gu”.',
    transparent: false,
  },
  {
    // Barros 2014, p. 223 (yvy)
    word: 'yvy',
    root_word: '*ɨβɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gun', 'yvy (mesma palavra e mesma grafia)']),
    evolution_note:
      'A palavra de “terra” é a mesma no kaiowá e no mbyá, e as duas grafias escrevem “yvy”: o “v” representa um som parecido com o /w/.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KGK: [string, string][] = [
  ['Xe sy ndive aju.', 'Escreva sobre você: com quem você veio, com quem você mora.'],
  ['Nhane, ore.', 'Escreva sobre as pessoas da sua vida: quem entra no “nhane” e quem entra no “ore”.'],
  ['Kokwe-py omba\'apo.', 'Conte o trabalho de alguém da sua família com os prefixos do verbo.'],
  ['Kipy ereho-ta nde?', 'Escreva os seus planos para amanhã com -ta, e uma coisa que você não vai fazer, com nd-…-i.'],
];

export const SHADOWING_KGK: [string, string][] = [
  // Benites 2021 (grafia do curso); Barros 2014, p. 181, p. 176, p. 170, p. 177
  ['Agwyjevete!', 'Muito obrigado(a)!'],
  ['Mba\'éixa pa ereiko?', 'Como você está?'],
  ['Haku eterei kwarahy.', 'O sol está quente demais.'],
  ['Oroju oroporahéi.', 'Nós viemos e cantamos.'],
  ['Ani erekyhyje.', 'Não tenha medo.'],
];
