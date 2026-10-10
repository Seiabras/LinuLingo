import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do scots (10/10/2026), nos grupos do Scottish National Dictionary. Fontes: Wikipédia em
 * scots e em inglês («Scots leid», «Doric dialect», «Shetland dialect», «Ulster Scots», consultadas em
 * 10/10/2026). O scots do Ulster entra como sotaque; se vira dialeto é dúvida para o dono
 * (docs/duvidas-variedades.md).
 */
const BASE_SCO: Accent[] = [
  {
    id: 'sco-central',
    name: 'Central (Glasgow, Edimburgo)',
    kind: 'sotaque',
    region: 'O cinturão central: Glasgow, Edimburgo, Ayrshire, Lothian',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-GLG', 'GB-EDH'],
    emoji: '🏙️',
    summary: 'O scots do centro da Escócia, o de mais falantes, a língua da poesia de Robert Burns, de Ayrshire.',
    features: ['“Ken” para “saber”, “wee” para “pequeno”, “braw” para “bonito”.', 'O “ch” de “loch” e “nicht” (noite), um som que o inglês perdeu.'],
    examples: [["Hou's it gaun?", 'Como vai?']],
  },
  {
    id: 'sco-doric',
    name: 'Dórico (nordeste)',
    kind: 'sotaque',
    region: 'Aberdeen e o nordeste',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-ABE', 'GB-ABD'],
    emoji: '🐟',
    summary: 'O scots de Aberdeen e do nordeste, o “Doric”, onde o “wh” das perguntas virou “f”: “Fit like?” (como vai?).',
    features: ['O “wh-” vira “f-”: “fit” (what, o quê), “fa” (who, quem), “far” (where, onde).', 'Palavras próprias: “quine” (moça), “loon” (rapaz).'],
    examples: [['Fit like?', 'Como vai?']],
  },
  {
    id: 'sco-insular',
    name: 'Shetland e Órcades',
    kind: 'sotaque',
    region: 'As ilhas Shetland e Órcades',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-ZET', 'GB-ORK'],
    emoji: '🐴',
    summary: 'O scots das ilhas do norte, que até o século XVIII falavam o norn, uma língua nórdica, e guardam palavras dela.',
    features: ['Muitas palavras do norn, a antiga língua nórdica das ilhas.', 'Em Shetland, “du” para “tu”, como nas línguas escandinavas.'],
    examples: [['peerie', 'pequeno']],
  },
  {
    id: 'sco-borders',
    name: 'Borders (sul)',
    kind: 'sotaque',
    region: 'Os Scottish Borders, na fronteira com a Inglaterra',
    country: 'GBR',
    subdivisions: ['GB-SCT', 'GB-SCB'],
    emoji: '🐑',
    summary: 'O scots do sul, da fronteira com a Inglaterra, a terra de Walter Scott, onde cada cidade tem o seu falar.',
    features: ['Cada cidade da fronteira, como Hawick, tem um falar reconhecível.', 'Em Hawick, “yow” para “you”.'],
    examples: [['yow', 'você (em Hawick)']],
  },
  {
    id: 'sco-ulster',
    name: 'Scots do Ulster',
    kind: 'sotaque',
    region: 'Os condados de Antrim, Down e Donegal, na Irlanda do Norte e na Irlanda',
    country: 'GBR',
    subdivisions: ['GB-NIR'],
    emoji: '🌉',
    summary: 'O scots levado para o Ulster pelos colonos escoceses do século XVII, reconhecido no Acordo de Belfast de 1998 ao lado do irlandês.',
    features: ['Reconhecido no Acordo de Belfast (1998).', '“Thon” para “aquele lá”, “wean” para “criança”.'],
    examples: [['thon', 'aquele (lá)']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_SCO: Accent[] = noDialeto(BASE_SCO, 'sco-SC', { iguais: {'sco-ulster': 'sco-ulster'} });
