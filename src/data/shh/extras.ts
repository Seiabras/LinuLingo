import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção — erros típicos de brasileiros aprendendo shoshone,
 * sobretudo esquecer o apóstrofo (a oclusiva glotal, uma consoante de verdade — ver gramatica.ts).
 */
export const COMMUNITY_SHH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Escreva os pronomes “eu” e “tu” em shoshone.',
    content: 'Ne e ene.',
    reference: 'Ne e enne.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Como se diz “cachorro” em shoshone?',
    content: 'Sade.',
    reference: "Sadee'.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Conte de um a três em shoshone.',
    content: 'Seme, wahatehwe, bahaitee.',
    reference: "Seme', wahatehwe, bahaitee'.",
  },
];

/**
 * Cenário de conversa. As fontes consultadas não confirmam uma distinção entre tratamento formal e
 * informal em shoshone — por isso o cenário fica como informal, sem inventar um contraste que
 * nenhuma fonte confirmou.
 */
export const SCENARIOS_SHH: ScenarioSeed[] = [
  {
    id: 'shh-s1',
    title: 'Um cumprimento em Fort Hall',
    emoji: '🏜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador newe (shoshone) de Fort Hall, Idaho',
    description: 'Você encontra um morador de Fort Hall e troca as primeiras palavras em shoshone.',
    turns: [
      {
        bot: "Tsaa'!",
        botTranslation: 'Bom! (cumprimento)',
        keywords: ["tsaa'"],
        suggestions: ["Tsaa'!"],
      },
      {
        bot: 'Newe.',
        botTranslation: 'Pessoa.',
        keywords: ['newe'],
        suggestions: ['Newe.'],
      },
    ],
  },
];

/**
 * O shoshone é uma língua uto-asteca, sem parentesco com o português: não há cognatos léxicos entre
 * as duas línguas. Por isso estas notas de etimologia olham para dentro da própria língua (e para os
 * seus parentes numic, comanche e panamint/timbisha, citados pela Wikipédia), usando só padrões
 * visíveis nas próprias fontes consultadas — nunca uma raiz externa inventada.
 */
export const ETYMOLOGY_SHH: EtymologySeed[] = [
  {
    word: 'newe',
    root_word: 'newe',
    origin_language: 'Shoshone (numic central)',
    cognates: c(['pt', 'sem cognatos: o shoshone não é uma língua indo-europeia']),
    evolution_note:
      'A Wiktionary registra “newe” como a tradução shoshone de “man (human being)” — pessoa, ser humano. A Wikipédia em inglês confirma que essa é também a autodesignação do povo shoshone: os endônimos da própria língua registrados ali giram em torno dessa mesma raiz (“a língua do povo”). “Shoshone”/“Shoshoni”, o nome usado neste curso e nas fontes em inglês, é um exônimo, não o nome que o povo usa para si mesmo.',
    transparent: false,
  },
  {
    word: "tsaa'",
    root_word: "tsaa'",
    origin_language: 'Shoshone (numic central)',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'A Wiktionary traduz “tsaa\'” como “good” (bom). Nenhuma fonte consultada registra uma saudação fixa tipo “oi” em shoshone — por isso este curso usa esta mesma palavra como cumprimento e expressão de aprovação, a mesma estratégia já usada por outros pacotes indígenas deste app com lacunas parecidas (tpj, nhd, kgk) para a ausência de uma saudação documentada.',
    transparent: false,
  },
  {
    word: 'aingabite',
    root_word: 'ainga(bite)',
    origin_language: 'Shoshone (numic central)',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'A Wiktionary anota as cinco cores do shoshone citadas nesta lista — “ainga(bite)” (vermelho), “buhi(bite)” (verde), “oha(pite)” (amarelo), “dosa(bite)” (branco) e “duhu(bite)” (preto) — todas terminando em “-bite” ou “-pite”. A fonte não nomeia esse elemento final, mas o padrão está ali, visível nas cinco entradas: um provável sufixo comum para adjetivos de cor, repetido em toda a série.',
    transparent: false,
  },
  {
    word: "gwi'yaa'",
    root_word: "bia + gwi'yaa'",
    origin_language: 'Shoshone (numic central)',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'O site native-languages.org registra duas formas para “águia” em shoshone: “gwi\'yaa\'” (a forma usada neste curso, também citada pela lista Swadesh da Wiktionary) e “biagwi\'yaa\'”. A mesma fonte lista, à parte, “bungu” (cavalo) e outras palavras com o elemento inicial “bia-”; a lista Swadesh da Wiktionary também registra “biaichi\'” para “grande”. Tudo somado, “biagwi\'yaa\'” parece ser “bia” (grande) mais “gwi\'yaa\'” (águia) — “a grande águia” —, embora nenhuma das duas fontes analise essa palavra morfema a morfema.',
    transparent: false,
  },
  {
    word: 'seemoten',
    root_word: "seme' / seemo-",
    origin_language: 'Shoshone (numic central)',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'Os numerais shoshone de um a dez citados pela Wiktionary mostram um elemento parecido reaparecendo: “seme\'” (um), “seemonowemihyande” (nove) e “seemoten” (dez) começam todos por “seme\'”/“seemo-”. Nenhuma das fontes consultadas confirma, morfema a morfema, como esses numerais mais altos se formam — por isso este curso não afirma uma regra, só aponta o padrão visível nas próprias palavras atestadas.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SHH: [string, string][] = [
  ['Newe.', 'Pessoa — e você, como se identifica? Pesquise mais sobre o povo shoshone e escreva o que descobriu.'],
  ["Seme', wahatehwe, bahaitee', watsewite, manegite — enne?", 'Um, dois, três, quatro, cinco — e você, até quanto consegue contar em shoshone?'],
  ["Sadee', baingwi, huchuu' — enne?", 'Cachorro, peixe, pássaro — de qual bicho você mais gosta?'],
  ["Da'bai, mea', da'ziyumbi.", 'Sol, lua, estrela — escreva sobre o céu de hoje à noite.'],
];

export const SHADOWING_SHH: [string, string][] = [
  ["Tsaa'! Newe.", 'Bom! Pessoa.'],
  ["Ne, enne, iden, nehwe, memme, sidee'.", 'Eu, tu, ele/ela, nós, vós, eles/elas.'],
  ["Seme', wahatehwe, bahaitee', watsewite, manegite.", 'Um, dois, três, quatro, cinco.'],
  ["Da'bai, mea', da'ziyumbi, baa'.", 'Sol, lua, estrela, água.'],
];
