import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo shipibo-konibo). */
export const COMMUNITY_SHP: CommunitySeed[] = [
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Ɨ-a-ra isin-ai.',
    content: 'Isin-ai.',
    reference: 'Ɨ-a-ra isin-ai.',
  },
  {
    author_name: 'Gustavo 🇧🇷',
    prompt: 'Ɨ-n papa, ɨ-n tita.',
    content: 'Papa, tita.',
    reference: 'Ɨ-n papa, ɨ-n tita.',
  },
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Wɨstiora, rabɨ, kimiša…',
    content: 'Rabɨ, wɨstiora, kimiša…',
    reference: 'Wɨstiora, rabɨ, kimiša…',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram, para o shipibo-konibo, uma forma “formal”
 * de tratamento separada da informal (como o “você”/“o senhor” do português) — por isso o cenário é
 * informal, como já acontece com o huni kuĩ e o marúbo, as outras línguas pano deste app.
 */
export const SCENARIOS_SHP: ScenarioSeed[] = [
  {
    id: 'shp-s1',
    title: 'Chegando a uma aldeia às margens do Ucayali',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador shipibo-konibo de uma aldeia às margens do rio Ucayali (Peru)',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no shipibo-konibo: os mesmos pronomes e as mesmas saudações servem tanto para conhecidos quanto para visitantes.',
    turns: [
      {
        bot: 'Jakon!',
        botTranslation: 'Bom!, tudo bem! (cumprimento)',
        keywords: ['hɨɨ'],
        suggestions: ['Hɨɨ!'],
      },
      {
        bot: 'Ɨ-n papa, ɨ-n tita.',
        botTranslation: 'Meu pai, minha mãe.',
        keywords: ['ɨ-n'],
        suggestions: ['Ɨ-n papa, ɨ-n tita.'],
      },
      {
        bot: 'Nawa-n ochíti-nin natex-ke.',
        botTranslation: 'O cachorro do mestiço me mordeu.',
        keywords: ['jamá-ke', 'ochiti'],
        suggestions: ['E-n-ra nawa-n ochíti jamá-ke.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras shipibo-konibo. A língua NÃO é parente do português nem do tupi-guarani, do jê,
 * do aruak ou do tukano: por isso, como nos outros pacotes de língua indígena deste app, as notas
 * explicam a formação interna/o campo semântico das palavras dentro do próprio shipibo-konibo, não
 * cognatos de origem com o português.
 */
export const ETYMOLOGY_SHP: EtymologySeed[] = [
  {
    word: 'kené',
    root_word: 'kené',
    origin_language: 'Shipibo-konibo',
    cognates: c(['shp', 'jakon nete (mundo bom, ligado ao “kano”, o vínculo com esse mundo, segundo Favarón e Bensho, 2022)']),
    evolution_note:
      '“Kené” nomeia o desenho geométrico tradicional do povo shipibo-konibo, usado em cerâmicas, tecidos e pintura corporal (Favarón, Gustavo e Bensho, 2022: 153). Na cosmologia do povo, o kené está ligado ao “kano”, o vínculo de uma pessoa com o “jakon nete” (mundo bom), e a cantos sagrados chamados “besho” (Favarón e Bensho, 2022: 147; Brabec de Mori, 2011: 36).',
    transparent: false,
  },
  {
    word: 'rono',
    root_word: 'rono',
    origin_language: 'Shipibo-konibo',
    cognates: c(['shp', 'ronin (nome da sucuri primordial na cosmologia shipibo-konibo)']),
    evolution_note:
      '“Rono” (sucuri, jiboia) aparece na expressão “rono ewa”, também citada como “ronin”: a sucuri é considerada, na cosmologia shipibo-konibo, a “mãe dos desenhos” — a origem mítica dos padrões geométricos “kené” (Brabec de Mori, Bernd e Mori Silvano de Brabec, Laida, 2009: 111). A mesma figura, “ronin”, aparece também como a sucuri primordial na seção sobre cerâmica e cosmologia de es.wikipedia.org/wiki/Shipibo-conibo.',
    transparent: false,
  },
  {
    word: 'nete',
    root_word: 'nete',
    origin_language: 'Shipibo-konibo',
    cognates: c(['shp', 'jakon (bom, bem)']),
    evolution_note:
      '“Nete” (mundo, terra) se combina com “jakon” (bom) para formar “jakon nete”, o “mundo bom” ou “terra sem maldade” da cosmologia shipibo-konibo (Loriot, James; Lauriault, Erwin; Day, Dwight, 1993, “Diccionario shipibo-castellano”: 209, 287).',
    transparent: false,
  },
  {
    word: 'honi',
    root_word: 'honi',
    origin_language: 'Shipibo-konibo',
    cognates: c(['shp', 'nawa (forasteiro, pessoa não indígena, mestiço — o contrário semântico de honi)']),
    evolution_note:
      '“Honi” (pessoa, gente, ser humano) se opõe, no vocabulário deste curso, a “nawa” (forasteiro, pessoa não indígena, mestiço): duas palavras que nomeiam, respectivamente, quem é e quem não é do próprio povo — um contraste comum em línguas indígenas da Amazônia para distinguir o grupo de dentro do de fora.',
    transparent: false,
  },
  {
    word: 'nawa',
    root_word: 'nawa',
    origin_language: 'Shipibo-konibo',
    cognates: c(['shp', 'honi (pessoa, gente, ser humano — o contrário semântico de nawa)']),
    evolution_note:
      '“Nawa” (forasteiro, pessoa não indígena, mestiço) é a palavra que aparece nas duas frases com marcação de caso citadas por es.wikipedia.org/wiki/Idioma_shipibo sobre um cachorro: “nawa-n ochíti-nin natex-ke” (o cachorro do mestiço me mordeu) e “E-n-ra nawa-n ochíti jamá-ke” (eu chutei o cachorro do mestiço) — em ambas, “nawa-n” liga o possuidor (o mestiço) ao cachorro (“ochíti”) que lhe pertence.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SHP: [string, string][] = [
  ['Ɨ-a-ra isin-ai.', 'Eu estou doente. (escreva, em shipibo-konibo, se você está bem ou mal hoje)'],
  ['Ɨ-n papa, ɨ-n tita.', 'Meu pai, minha mãe. (escreva sobre sua família usando “ɨ-n” antes de cada palavra)'],
  ['Wɨstiora, rabɨ, kimiša, pičika, sokota, kãčis…', 'Um, dois, três, cinco, seis, sete… (pratique contar até onde conseguir)'],
  ['Jakon nete.', 'Mundo bom, terra sem maldade. (o que você faria do seu dia um “jakon nete”?)'],
];

export const SHADOWING_SHP: [string, string][] = [
  ['Jakon!', 'Bom!, tudo bem! (cumprimento)'],
  ['Ɨ-a-ra isin-ai.', 'Eu estou doente.'],
  ['Noa-ra ka-ai.', 'Nós vamos, estamos indo.'],
  ['Nawa-n ochíti-nin natex-ke.', 'O cachorro do mestiço me mordeu.'],
  ['E-n-ra nawa-n ochíti jamá-ke.', 'Eu chutei o cachorro do mestiço.'],
  ['Jakon nete.', 'Mundo bom, terra sem maldade.'],
];
