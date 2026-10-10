import type { Accent } from '../types';

/**
 * As variedades do tamazight (berbere) do Marrocos e da Argélia (10/10/2026). Fontes: Wikipédia em
 * português, inglês e francês («Standard Moroccan Amazigh», «Shilha language», «Central Atlas Tamazight»,
 * «Tarifit», «Kabyle language», «Tuareg languages», consultadas em 10/10/2026). A lista propôs os
 * grandes grupos como dialetos; a estrutura é dúvida para o dono (docs/duvidas-variedades.md), e por
 * enquanto cada um é sotaque.
 */
export const ACCENTS_ZGH: Accent[] = [
  {
    id: 'zgh-padrao',
    name: 'Padrão marroquino (IRCAM)',
    kind: 'sotaque',
    region: 'O Marrocos (escola, rádio e TV)',
    country: 'MAR',
    subdivisions: ['MA-04'],
    emoji: 'ⵣ',
    summary: 'O tamazight padrão do Marrocos, feito pelo IRCAM a partir das três grandes variedades do país e escrito em tifinagh. É língua oficial desde 2011.',
    features: ['Escrito no alfabeto tifinagh.', 'Língua oficial do Marrocos desde a Constituição de 2011.'],
    examples: [['Azul!', 'Olá!']],
  },
  {
    id: 'zgh-tashelhit',
    name: 'Tashelhit (Souss)',
    kind: 'sotaque',
    region: 'O Souss e o Anti-Atlas (Agadir, Tiznit)',
    country: 'MAR',
    subdivisions: ['MA-09'],
    emoji: '🌳',
    summary: 'O tashelhit, do sudoeste do Marrocos, a variedade com mais falantes, terra do óleo de argan, com palavras sem nenhuma vogal: “tfktstt” (você a deu).',
    features: ['Palavras inteiras sem vogais.', 'Uma rica tradição de poesia cantada, a dos “rways”.'],
    examples: [['Azul fellawen!', 'Olá a todos!']],
  },
  {
    id: 'zgh-atlas',
    name: 'Atlas central',
    kind: 'sotaque',
    region: 'O Médio Atlas (Khenifra, Azrou)',
    country: 'MAR',
    subdivisions: ['MA-05', 'MA-03'],
    emoji: '🏔️',
    summary: 'O tamazight do Médio Atlas, das montanhas de cedros, a base de boa parte do padrão.',
    features: ['Uma das bases do padrão.', 'A dança coletiva “ahidus” é tradição da região.'],
    examples: [['Azul!', 'Olá!']],
  },
  {
    id: 'zgh-tarifit',
    name: 'Tarifit (Rif)',
    kind: 'sotaque',
    region: 'O Rif, no norte do Marrocos (Al Hoceïma, Nador)',
    country: 'MAR',
    subdivisions: ['MA-01', 'MA-02'],
    emoji: '🌊',
    summary: 'O tarifit, do Rif, no norte, com palavras do espanhol e o “l” que vira “r”: “arrif” (o Rif).',
    features: ['O “l” muitas vezes vira “r”.', 'Palavras do espanhol, do tempo do protetorado.'],
    examples: [['Arrif', 'o Rif']],
  },
  {
    id: 'zgh-cabila',
    name: 'Cabila (Argélia)',
    kind: 'sotaque',
    region: 'A Cabília, na Argélia (Tizi Ouzou, Béjaïa)',
    country: 'DZA',
    subdivisions: ['DZ-15', 'DZ-06'],
    emoji: '🇩🇿',
    summary: 'O cabila, da Argélia, a língua berbere com mais tradição escrita em alfabeto latino, oficial na Argélia desde 2016 como tamazight.',
    features: ['Escrito sobretudo em alfabeto latino.', 'Muitas palavras do francês e do árabe.'],
    examples: [['Azul fell-awen!', 'Olá a todos!']],
  },
  {
    id: 'zgh-tuaregue',
    name: 'Tuaregue (tamasheq)',
    kind: 'língua',
    region: 'O Saara: Níger, Mali, Argélia e Líbia',
    country: 'NER',
    subdivisions: ['NE-1'],
    emoji: '🐫',
    summary: 'As línguas dos tuaregues do Saara, que guardaram o tifinagh antigo, ainda usado em inscrições e mensagens.',
    features: ['Guardaram o tifinagh antigo.', 'A música tuaregue (como a do Tinariwen) canta nessas línguas.'],
    examples: [['Tamasheq', 'tamasheq']],
  },
];
