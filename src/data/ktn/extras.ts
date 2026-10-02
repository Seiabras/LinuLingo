import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo karitiana). */
export const COMMUNITY_KTN: CommunitySeed[] = [
  {
    author_name: 'Fernanda 🇧🇷',
    prompt: 'Go i haap!',
    content: 'Go i mõnh.',
    reference: 'Go i haap! Yryhon.',
  },
  {
    author_name: 'Gabriel 🇧🇷',
    prompt: 'Mõrãmõn ka?',
    content: "Pyse'an.",
    reference: 'Omãky.',
  },
  {
    author_name: 'Helena 🇧🇷',
    prompt: 'Ãn i-y gok-o hỹ?',
    content: 'Gok.',
    reference: 'Ỹn naka-y-t gok.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não documentam uma forma “formal” de tratamento separada
 * da informal no karitiana (como o “você”/“o senhor” do português) — por isso o cenário é informal,
 * como já acontece com outros pacotes de língua indígena deste app (baniwa, tukano, kaingang, xavante).
 */
export const SCENARIOS_KTN: ScenarioSeed[] = [
  {
    id: 'ktn-s1',
    title: 'Chegando na aldeia Kyõwã',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador da aldeia Kyõwã, na Terra Indígena Karitiana',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no karitiana: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Go i haap!',
        botTranslation: 'Bom dia!',
        keywords: ['go', 'haap', 'yryhon'],
        suggestions: ['Go i haap! Yryhon.'],
      },
      {
        bot: 'Mõrãmõn ka?',
        botTranslation: 'O que é isso?',
        keywords: ['omãky', 'taso', 'gok'],
        suggestions: ['Omãky.', 'Taso.', 'Gok.'],
      },
      {
        bot: 'Ãn i-y gok-o hỹ?',
        botTranslation: 'Você comeu a mandioca?',
        keywords: ['naka-y-t', 'gok'],
        suggestions: ['Ỹn naka-y-t gok.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras karitiana. O karitiana NÃO é parente do português nem do tupi-guarani (é um
 * ramo à parte do tronco Tupi, a família Arikém): por isso, como nos outros pacotes de língua indígena
 * deste app, as notas explicam a formação interna das palavras dentro do próprio karitiana
 * (nominalização, composição, autodesignação), não cognatos de origem com o português.
 */
export const ETYMOLOGY_KTN: EtymologySeed[] = [
  {
    word: 'Yjxa',
    root_word: 'yjja (nós, 1ª pessoa do plural inclusivo)',
    origin_language: 'Karitiana',
    cognates: c(['ktn', 'opok (não indígena, em oposição)'], ['ktn', 'opok pita (outros indígenas)']),
    evolution_note:
      '“Yjxa”, a autodesignação do povo e da língua, é o próprio pronome de 1ª pessoa do plural inclusivo (“nós”, também traduzido como “gente”), usado em oposição a “opok” (os não indígenas em geral) e “opok pita” (os outros povos indígenas) — fonte: pib.socioambiental.org/pt/Povo:Karitiana (Instituto Socioambiental).',
    transparent: false,
  },
  {
    word: 'Katapa',
    root_word: 'kat (dormir) + -pa',
    origin_language: 'Karitiana',
    cognates: c(['ktn', 'Mikipa (cadeira, de mika, sentar)'], ['ktn', 'Ahypa (copo, de ahy, beber)']),
    evolution_note:
      'O sufixo nominalizador “-pa” transforma verbos em substantivos relacionados a eles: “katapa” (cama) vem de “kat” (dormir), assim como “mikipa” (cadeira) vem de “mika” (sentar) e “ahypa” (copo, caneca) vem de “ahy” (beber) — um padrão de derivação bem produtivo na língua (Everett, 2007, pp. 296-300, citado na Wikipédia em português).',
    transparent: false,
  },
  {
    word: 'Omãky',
    root_word: 'omãky (onça)',
    origin_language: 'Karitiana',
    cognates: c(['ktn', "Omãky 'ĩn (gato, lit. “onça pequena”)"], ['ktn', "Omãky my'en (cachorro, lit. “onça mimada”)"]),
    evolution_note:
      "O léxico karitiano registrado em pt.wikipedia.org/wiki/Língua_caritiana mostra “omãky” (onça) como base de composições para nomear outros animais relacionados: o gato doméstico é “omãky 'ĩn” (onça pequena) e o cachorro é “omãky my'en” (onça mimada/domesticada) — um indício de que a onça funciona como a fera de referência no léxico, da qual outros bichos parecidos derivam o nome.",
    transparent: false,
  },
  {
    word: 'Ombyj',
    root_word: 'byj (chefe, liderança)',
    origin_language: 'Karitiana',
    cognates: c(['ktn', 'Mahipto (chefe de família extensa)'], ['ktn', 'Byyjyty (“grande chefe”, herói civilizador neto de Botyj̃)']),
    evolution_note:
      'Segundo o Instituto Socioambiental (pib.socioambiental.org/pt/Povo:Karitiana), o termo “ombyj” (avô paterno, avó paterna — usado reciprocamente entre avós e netos) deixa reconhecer a raiz “byj”, “chefe”. A mesma raiz aparece no nome do herói civilizador “Byyjyty”, neto do deus criador “Botyj̃” e traduzido como “grande chefe” — a mitologia karitiana liga diretamente a figura do avô à ideia de liderança.',
    transparent: false,
  },
  {
    word: 'Ese',
    root_word: 'ese (água, rio)',
    origin_language: 'Karitiana',
    cognates: c(['ktn', 'Esyg (cachoeira, forma relacionada)'], ['ktn', 'Ese anep (beira do rio, lit. “junto da água”)']),
    evolution_note:
      'O léxico karitiano não separa “água” de “rio”: a mesma palavra, “ese”, vale para os dois (pt.wikipedia.org/wiki/Língua_caritiana, seção “Léxico karitiano”). Formas relacionadas, como “esyg” (cachoeira) e “ese anep” (beira do rio, literalmente “junto da água”), mostram como o campo semântico da água se organiza em torno dessa única raiz — diferente do português, que usa palavras distintas para “água” e “rio”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KTN: [string, string][] = [
  ['Go i haap! Mõrãmõn ka?', 'Bom dia! O que é isso?'],
  ['Ãn i-y gok-o hỹ?', 'Você comeu a mandioca?'],
  ['Taso ty nã-yry-t.', 'O homem grande chegou.'],
  ['Mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt.', 'Um, dois, três, quatro, cinco.'],
];

export const SHADOWING_KTN: [string, string][] = [
  ['Go i haap!', 'Bom dia!'],
  ['Y-ta-opiso-t ỹn.', 'Eu ouvi.'],
  ['Ỹn naka-y-t gok.', 'Eu comi a mandioca.'],
  ['João Ø-na-oky-t boroja.', 'João matou a cobra.'],
];
