import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo awetí). As
 * formas certas: “atit” ([F] tabela 1), “kaminu'at e'inĩ” ([O] ex. 195) e “an atuwyka” ([O] ex. 18,
 * com o “an” de [K] §5). Siglas no cabeçalho de vocabulario.ts.
 */
export const COMMUNITY_AWE: CommunitySeed[] = [
  {
    author_name: 'Gabriel 🇧🇷',
    prompt: 'Um homem awetí diz “eu”.',
    content: 'Ito.',
    reference: 'Atit.',
  },
  {
    author_name: 'Mariana 🇧🇷',
    prompt: 'Dizer “a rede do menino”.',
    content: "Kaminu'at inĩ.",
    reference: "Kaminu'at e'inĩ.",
  },
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Dizer “não vejo”.',
    content: 'An atup.',
    reference: 'An atuwyka.',
  },
];

/**
 * Cenário de conversa. As fontes não registram um pronome ou tratamento “formal” separado: “'en”
 * (você) serve para qualquer pessoa ([F] tabela 1). O que existe são registros de fala formal — os
 * discursos cerimoniais dos chefes e a fala dos pajés nos rituais ([L] §5; [ISA], “Organização
 * social”) — e regras de respeito: os jovens não dirigem a palavra aos mais velhos sem convite
 * ([ISA], “Envelhecendo”). Por isso o cenário é informal, como nos outros pacotes de língua
 * indígena. Falas: as mesmas das histórias (ver historias.ts para as fontes de cada uma).
 */
export const SCENARIOS_AWE: ScenarioSeed[] = [
  {
    id: 'awe-s1',
    title: 'Visitando a aldeia Tazu’jyt tetam',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um professor awetí da aldeia Tazu’jyt tetam, no Parque Indígena do Xingu (MT)',
    description:
      'As fontes consultadas não registram uma forma “formal” separada da informal no awetí: o mesmo “’en” (você) serve para qualquer pessoa. O respeito aparece de outros jeitos: os chefes têm uma fala cerimonial própria, aprendida com os mais velhos, e os jovens não dirigem a palavra aos mais velhos sem ser convidados.',
    turns: [
      {
        bot: 'Wiw! Pejut!',
        botTranslation: 'Ei! Venham!',
        keywords: ['ehẽ', 'ehe'],
        suggestions: ['Ehẽ!'],
      },
      {
        bot: 'Jotup! Itok.',
        botTranslation: 'Olhe! Minha casa.',
        keywords: ['eok', 'tehe', 'ikatu'],
        suggestions: ['Eok? Tehe!'],
      },
      {
        bot: 'Jomem.',
        botTranslation: 'Beiju.',
        keywords: ["a'uteju", 'jumem', 'jomem'],
        suggestions: ["Jumem a'uteju."],
      },
      {
        bot: 'Ajatuktuju.',
        botTranslation: 'Quero tomar banho.',
        keywords: ['ehẽ', 'ehe', 'pejut'],
        suggestions: ['Ehẽ!', 'Pejut!'],
      },
    ],
  },
];

/**
 * Etimologias. Fontes (siglas do cabeçalho de vocabulario.ts):
 *   - Awytyza: [L] §1 (o etnônimo [aˈwɨtɨ], o sufixo coletivo -za, “Awytyza ti’ingku”, a grafia
 *     “Auetö” de Karl von den Steinen e o nome usado como sobrenome nos documentos); [ISA], “Nome”;
 *   - Taty: [R] ex. (116), “taty a'yt-'jyt” = “the little star (lit.: child of the moon)”; cognatos
 *     de [MD] (moon waatɨ : tatɨ : *jačɨ), nas grafias dos pacotes do app: sateré-mawé “wáty” e tupi
 *     antigo “jasy”;
 *   - Mani'oky: [O] ex. 196-198 (“maniʼoky ‘perereba’ … palavra originalmente composta de maniʼok
 *     ‘mandioca’ e ʼy ‘água’”) e [ISA] (a perereba, bebida doce e quente de mandioca);
 *   - Kwar'yp: [O] ex. 42 (/kwat+ʔɨp/, com a glotal que pode trocar de lugar, [kwaʔrɨp ~ kwarʔɨp])
 *     e [ISA] (“kwar’yp (pau do sol)”, os troncos que representam os mortos); 'yp, árvore, [K];
 *   - Akyky: [R] §3.3.1.4, ex. (14a) e (15) (o sufixo aumentativo -watu: mõj-watu, cobra grande;
 *     akyky, macaco-barrigudo, e akykywatu, bugio-vermelho); cognato de [MD] (big wato : watu :
 *     *waču), tupi antigo “gûasu”.
 */
export const ETYMOLOGY_AWE: EtymologySeed[] = [
  {
    word: 'Awytyza',
    root_word: 'awyty (o nome do povo) + -za (coletivo)',
    origin_language: 'Awetí',
    cognates: c(['pt', 'awetí (o nome usado em português)']),
    evolution_note:
      '“Awytyza” é como o povo chama a si mesmo: o nome “awyty” mais o sufixo “-za”, que forma grupos de pessoas. A língua é a “Awytyza ti’ingku”. Os exploradores alemães do século XIX, como Karl von den Steinen, ouviram o “y” — uma vogal que o alemão não tem — e escreveram “Auetö”; em português o “u” virou “w” e o “ö” virou “i”, e assim nasceu “Awetí”. Hoje os Awetí usam esse nome também como sobrenome nos documentos.',
    transparent: true,
  },
  {
    word: 'Taty',
    root_word: 'taty (lua)',
    origin_language: 'Awetí',
    cognates: c(['mav', 'wáty (lua)'], ['tpw', 'jasy (lua)']),
    evolution_note:
      '“Taty”, a lua, tem parentes em outras línguas do mesmo ramo do tronco Tupi: “wáty” no sateré-mawé e “jasy” no tupi antigo. E numa narrativa awetí, uma estrelinha é chamada de “taty a’yt’jyt” — “filhinho da lua”, com o sufixo de diminutivo “-’jyt”.',
    transparent: true,
  },
  {
    word: "Mani'oky",
    root_word: "mani'ok (mandioca) + 'y (água)",
    origin_language: 'Awetí',
    cognates: c(['awe', "mani'ok (mandioca)"], ['awe', "'y (água)"]),
    evolution_note:
      'A perereba, bebida doce e quente feita com a água que sobra de lavar a mandioca ralada, se chama “mani’oky”: “mani’ok” (mandioca) + “’y” (água). Com o tempo a palavra virou uma só — tanto que hoje se escreve junta, sem espaço.',
    transparent: true,
  },
  {
    word: "Kwar'yp",
    root_word: "kwat + 'yp (árvore, tronco)",
    origin_language: 'Awetí',
    cognates: c(['pt', 'kuarup'], ['awe', "'yp (árvore)"]),
    evolution_note:
      'O nome do Kuarup, a grande festa dos mortos do Alto Xingu, junta “kwat” e “’yp” (árvore, tronco): na festa, troncos de árvores kwar’yp, cortados especialmente para ela, representam os mortos. Costuma-se traduzir a palavra como “pau do sol”. Na fala, a paradinha da glotal pode trocar de lugar — “kwa’ryp” ou “kwar’yp” —, mas na escrita fica sempre depois do “r”: kwar’yp.',
    transparent: true,
  },
  {
    word: 'Akyky',
    root_word: 'akyky (macaco-barrigudo) + -watu (grande)',
    origin_language: 'Awetí',
    cognates: c(['awe', 'akykywatu (bugio-vermelho)'], ['tpw', 'gûasu (grande)']),
    evolution_note:
      'O sufixo “-watu” deixa as coisas grandes: “mõj watu” é uma cobra grande. Às vezes a palavra com “-watu” virou o nome de outro bicho: “akyky” é o macaco-barrigudo, e “akykywatu”, o “akyky grande”, é o bugio-vermelho. O “-watu” é primo do “gûasu” (grande) do tupi antigo.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_AWE: [string, string][] = [
  ["Kari'aw?", 'Por quê?'],
  ['Itup.', 'Meu pai.'],
  ['Itok.', 'Minha casa.'],
  ['Jatã tsu jatã ozoporywyt.', 'É assim o nosso costume.'],
];

export const SHADOWING_AWE: [string, string][] = [
  ['Pejut!', 'Venham!'],
  ["Jumem a'uteju.", 'Quero comer beiju.'],
  ["Kaminu'at e'inĩ.", 'A rede do menino.'],
  ['Uja tsu uja ozoporywyt.', 'É assim o nosso costume. (mulher falando)'],
];
