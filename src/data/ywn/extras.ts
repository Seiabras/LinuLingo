import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção: só troca de palavras isoladas (ver nota em index.ts sobre
 * a ausência de gramática atestada em yawanawá — não dá pra montar erros de frase que não existem). */
export const COMMUNITY_YWN: CommunitySeed[] = [
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Como se diz “água” em yawanawá?',
    content: 'Vari.',
    reference: 'Waka.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Como se diz “sol”?',
    content: 'Uxe.',
    reference: 'Vari.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Como se diz “olho”?',
    content: 'Rekin.',
    reference: 'Viru.',
  },
];

/**
 * Cenários de conversa: NENHUM, de propósito. As fontes consultadas não registram pronome, verbo nem
 * saudação em yawanawá (ver index.ts) — um diálogo precisaria inventar essas peças, o que este pacote
 * evita. Quando fontes específicas trouxerem essas formas, um cenário entra numa próxima entrega.
 */
export const SCENARIOS_YWN: ScenarioSeed[] = [];

/**
 * Etimologia: o yawanawá NÃO é parente do português (é uma língua pano, de uma família totalmente
 * diferente da indo-europeia) — por isso as notas comparam o yawanawá com o huni kuĩ/hãtxa kuĩ (pacote
 * “cbs” deste app), parente próximo dentro da mesma família (Grupo VII de Oliveira 2014, que reúne
 * Kaxinawá, Marináwa e Yawanawá — ver index.ts), e com outros povos pano citados como aparentados nas
 * fontes consultadas.
 */
export const ETYMOLOGY_YWN: EtymologySeed[] = [
  {
    word: 'wisti',
    root_word: 'wisti',
    origin_language: 'Pano',
    cognates: c(['cbs', 'bɨsti (um)']),
    evolution_note:
      'O numeral “um” tem forma muito parecida em várias línguas pano: “bɨsti” no huni kuĩ/hãtxa kuĩ (pacote “cbs” deste app), além de “huestí” (capanahua), “wɨstisɨ” (marubo), “huestiora” (shipibo) e “besti” (cashinahua), segundo a tabela comparativa de native-languages.org/fampan_words.htm — um sinal de que as línguas pano guardam, até hoje, a mesma raiz antiga para esse número.',
    transparent: false,
  },
  {
    word: 'rave',
    root_word: 'rave',
    origin_language: 'Pano',
    cognates: c(['cbs', 'rabɨ (dois)']),
    evolution_note:
      'O mesmo acontece com “dois”: “rave” no yawanawá é muito parecido com “rabɨ” no huni kuĩ, “rabe” no capanahua, “rabé” no shipibo e “rapï” no sharanahua (native-languages.org/fampan_words.htm) — a mesma raiz pano por trás de pequenas diferenças de som entre as línguas.',
    transparent: false,
  },
  {
    word: 'yawa',
    root_word: 'yawa',
    origin_language: 'Yawanawá',
    cognates: [],
    evolution_note:
      '“Yawa” quer dizer “queixada” (um porco-do-mato) e é a primeira metade do nome do próprio povo: “Yawanawá” nasce de “yawa” (queixada) mais “nawa” (povo, gente) — “o povo do queixada” (pt.wikipedia.org/wiki/Yawanawá; pib.socioambiental.org/pt/Povo:Yawanawá).',
    transparent: false,
  },
  {
    word: 'nawa',
    root_word: 'nawa',
    origin_language: 'Pano',
    cognates: [],
    evolution_note:
      '“Nawa” (povo, gente) é a segunda metade do nome “Yawanawá” — e o mesmo final aparece nos nomes de outros povos pano vizinhos e aparentados citados por pib.socioambiental.org/pt/Povo:Yawanawá, como Shanênawa, Yaminawá e Shawãdawa: um sinal de que “-nawa” funciona como um elemento comum para nomear povos dentro da família pano, não uma coincidência isolada do yawanawá.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_YWN: [string, string][] = [
  ['Waka.', 'Água. Descreva a água perto de onde você mora: um rio, uma praia, uma torneira.'],
  ['Yawa.', 'Queixada (porco-do-mato). Você já viu um queixada, ou só em fotos e vídeos?'],
  ['Mariri.', 'Festa. Conte sobre uma festa ou celebração de que você gosta.'],
  ['Vari, uxe.', 'Sol, lua. Descreva o céu de hoje.'],
];

export const SHADOWING_YWN: [string, string][] = [
  ['Yawa nawa.', 'Gente do queixada (o nome do povo yawanawá).'],
  ['Mapu, viru, kixa.', 'Cabeça, olho, boca.'],
  ['Vari, uxe, waka.', 'Sol, lua, água.'],
  ['Wisti, rave.', 'Um, dois.'],
];
