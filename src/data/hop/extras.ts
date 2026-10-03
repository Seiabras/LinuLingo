import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção: perguntas e respostas em português sobre o significado e
 * a gramática das palavras hopi já vistas (erros típicos de brasileiros aprendendo hopi). */
export const COMMUNITY_HOP: CommunitySeed[] = [
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Como se diz “eu” em hopílavayi, na forma de sujeito?',
    content: '“Nuy”.',
    reference: '“Nuʼ” é a forma de sujeito; “nuy” é a forma de objeto, segundo a tabela de pronomes do artigo “Hopi language” da Wikipédia em inglês — veja a aba Gramática.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'O que significa a própria palavra “hopi” na língua hopi?',
    content: 'É só o nome do povo, sem outro significado.',
    reference:
      'Segundo o Wiktionary em inglês, “hopi” é também um substantivo comum que significa “pessoa civilizada, bem-comportada”, alguém que segue o modo de vida hopi — “educada, pacífica” —, além de nomear um integrante do povo hopi ou, de forma mais geral, “pessoa”.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qual a diferença entre “Paahu” e “Kuuyi”, as duas palavras hopi para “água”?',
    content: 'São sinônimos perfeitos, sem diferença nenhuma.',
    reference:
      'Segundo o Wiktionary em inglês, “Paahu” é a água da natureza (de nascente), e “Kuuyi” é a água contida — guardada numa vasilha, dentro de casa (o mesmo verbete lista ainda “kuuyi” como “bebida alcoólica”, num sentido mais informal).',
  },
];

/**
 * UM cenário curto. As fontes consultadas não registram uma saudação fixa nem uma distinção gramatical
 * entre tratamento formal e informal em hopi — por isso, como já acontece com outras línguas indígenas
 * deste app em situação parecida, o cenário fica marcado como informal, e as falas são frases originais,
 * montadas só com palavras confirmadas e o padrão sujeito-objeto-verbo documentado pela Wikipédia em
 * inglês — as mesmas frases já usadas em `vocabulario.ts` e `curriculo.ts`.
 */
export const SCENARIOS_HOP: ScenarioSeed[] = [
  {
    id: 'hop-s1',
    title: 'Observando a natureza na Reserva Hopi',
    emoji: '🏜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma pessoa hopi na Reserva Hopi, no nordeste do Arizona',
    description:
      'As fontes consultadas não registram uma saudação fixa nem uma distinção gramatical entre tratamento formal e informal em hopi — por isso este cenário fica marcado como informal, e as falas são frases originais, montadas só com palavras confirmadas e a ordem sujeito-objeto-verbo.',
    turns: [
      {
        bot: 'Nuʼ taawa tuwa.',
        botTranslation: 'Eu vejo o sol.',
        keywords: ['hoonaw'],
        suggestions: ['Um hoonaw tuwa.'],
      },
      {
        bot: 'Owa qömvi.',
        botTranslation: 'A pedra é preta.',
        keywords: ['sakwa'],
        suggestions: ['Paahu sakwa.'],
      },
    ],
  },
];

/**
 * O hopi pertence à família uto-asteca, sem parentesco com o português — por isso estas notas de
 * etimologia olham pra dentro da própria língua (como a palavra “hopi” nomeou a si mesma e ao povo) e
 * pra raízes reconstruídas do proto-uto-asteca, a língua ancestral da família (que também inclui o
 * náuatle e o shoshone, já neste app), usando as etimologias do próprio Wiktionary em inglês.
 */
export const ETYMOLOGY_HOP: EtymologySeed[] = [
  {
    word: 'Hopi',
    root_word: 'hopi',
    origin_language: 'Hopi',
    cognates: [],
    evolution_note:
      'Segundo o Wiktionary em inglês, o nome “Hopi” vem de uma palavra que significa algo como “bom em todo sentido, ser sábio ou sensato” (como em “Hopituu sinom”, “o povo hopi”) — nome popularizado pelo antropólogo J. Walter Fewkes para substituir o antigo exônimo “Moqui”, ofensivo por soar como a palavra hopi “mooki” (“morre, está morto”). E a própria palavra “hopi”, dentro da língua, é também um substantivo comum: “pessoa civilizada, bem-comportada; alguém que segue o modo de vida hopi; educada, pacífica”, além de nomear um integrante do povo ou, de forma mais geral, “pessoa”.',
    transparent: false,
  },
  {
    word: 'Koyaanisqatsi',
    root_word: 'koyaanis- + qatsi',
    origin_language: 'Hopi',
    cognates: c(['hop', 'Qatsi (vida)']),
    evolution_note:
      'O Wiktionary em inglês decompõe “koyaanisqatsi” em “koyaanis-” (“corrompido”, segundo a mesma fonte) mais “qatsi” (“vida”, uma palavra deste vocabulário): “vida corrompida, fora do equilíbrio” — a palavra composta que deu nome ao filme de Godfrey Reggio (1982).',
    transparent: false,
  },
  {
    word: 'Hoonaw',
    root_word: '*hula-wït (reconstrução em proto-uto-asteca)',
    origin_language: 'Proto-uto-asteca',
    cognates: c(['hop', '*hula (urso; texugo, raiz reconstruída)']),
    evolution_note:
      'O Wiktionary em inglês liga “hoonaw” (urso) à raiz reconstruída do proto-uto-asteca *hula-wït, uma forma aumentativa de *hula (“urso; texugo”) — a língua ancestral de toda a família uto-asteca, à qual pertencem também o náuatle e o shoshone, já neste app.',
    transparent: false,
  },
  {
    word: 'Poosi',
    root_word: '*punsi (reconstrução em proto-uto-asteca)',
    origin_language: 'Proto-uto-asteca',
    cognates: c(['hop', 'olho; semente; caroço (os três sentidos de “poosi”)']),
    evolution_note:
      '“Poosi” (olho; também “semente”, “caroço”) remonta, segundo o Wiktionary em inglês, à raiz reconstruída do proto-uto-asteca *punsi — a mesma língua ancestral por trás de “hoonaw” (urso), outra palavra deste vocabulário.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HOP: [string, string][] = [
  ['Taaqa hopi.', 'O homem é hopi — pessoa civilizada e pacífica. O que “ser civilizado e pacífico” significa pra você?'],
  ['Nuʼ taawa tuwa.', 'Eu vejo o sol. Descreva o céu de hoje onde você está.'],
  ['Owa qömvi. Paahu sakwa.', 'A pedra é preta. A água é azul. Descreva as cores de um lugar de que você gosta.'],
  ['Itam momori.', 'Nós nadamos. Você gosta de nadar? Onde?'],
];

export const SHADOWING_HOP: [string, string][] = [
  ['Taaqa hopi.', 'O homem é hopi (pessoa civilizada, pacífica).'],
  ['Nuʼ taawa tuwa.', 'Eu vejo o sol.'],
  ['Owa qömvi, paahu sakwa.', 'A pedra é preta, a água é azul.'],
  ['Itam momori.', 'Nós nadamos.'],
  ['Puma mongwu tuwa.', 'Eles veem a coruja-grande.'],
];
