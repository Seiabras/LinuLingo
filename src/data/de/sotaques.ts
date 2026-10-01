import type { Accent } from '../types';

// Línguas próprias do alemão (kind 'língua'): faladas onde o alemão também é falado, mas que não são
// "alemão com sotaque" — nasceram como línguas à parte. Por enquanto só tem uma aqui, e é uma língua
// de imigração: o hunsriqueano (Hunsrik), levado pelos imigrantes alemães para o Sul do Brasil a
// partir de 1824.

export const ACCENTS_DE: Accent[] = [
  {
    id: 'de-hunsrik',
    name: 'Hunsriqueano (Hunsrik)',
    kind: 'língua',
    region: 'Rio Grande do Sul, Santa Catarina e Paraná, no Sul do Brasil',
    country: 'BRA',
    subdivisions: ['BR-RS', 'BR-SC', 'BR-PR'],
    speechLocale: 'de-DE',
    emoji: '🌲',
    summary: 'A língua dos imigrantes alemães que chegaram ao Rio Grande do Sul a partir de 1824, vindos sobretudo da região do Hunsrück, na Renânia-Palatinado. Tem código próprio no ISO 639-3 (“hrx”) e é cooficial, por lei municipal, em cidades como Santa Maria do Herval-RS e Antônio Carlos-SC.',
    features: [
      'Nasceu do hunsrückisch, dialeto de base francônio-moselana falado entre os rios Reno e Mosela, na região alemã do Hunsrück — daí o nome. É um dialeto do alto-alemão (Hochdeutsch), não do baixo-alemão (Plattdeutsch): a confusão é comum, mas o francônio-moselano é do centro-oeste da Alemanha, não do norte.',
      'A imigração alemã para o Rio Grande do Sul começou em 1824, ainda no Império; das colônias gaúchas o hunsriqueano se espalhou para Santa Catarina e o Paraná.',
      'Tem código próprio no ISO 639-3, “hrx”, diferente do código do hunsrückisch falado hoje na Alemanha: para a linguística, já é uma língua à parte, não um sotaque do alemão.',
      'É língua cooficial, por lei municipal, em cidades como Santa Maria do Herval-RS (desde 2009) e Antônio Carlos-SC (desde 2010) — um reconhecimento municipal, não nacional.',
      'Trocou palavras com o português para o que não existia na Alemanha: “Aviong” (avião) e “Kamiong” (caminhão) entraram no lugar do alemão “Flugzeug” e “Lastwagen”.',
      'Também recebeu traços de outros dialetos alemães trazidos por imigrantes de outras regiões para as mesmas colônias — por isso não é um hunsrückisch “puro” simplesmente transplantado.',
    ],
    examples: [
      ['Die ganze Mensche sinn frei unn deselwich in Ehrichkeet unn Rechte gebor.', 'Todos os seres humanos nascem livres e iguais em dignidade e direitos.', 'trecho do Artigo 1º da Declaração Universal dos Direitos Humanos, traduzido para o hunsriqueano pelo projeto Escrithu (UFRGS)'],
      ['Hunsrick-Sprooch is en Internet-Projekt fer di Schaffung von en Wikipedia …', 'A língua hunsrik é um projeto de internet para a criação de uma Wikipédia …', 'frase usada para apresentar a Wikipédia em hunsrik, que tem edição própria sob o código “hrx”'],
    ],
    words: [
      ['Aviong', 'avião (do português; no alemão da Alemanha seria “Flugzeug”)'],
      ['Kamiong', 'caminhão (do português; no alemão da Alemanha seria “Lastwagen”)'],
      ['Canecachen', 'caneca pequena (português “caneca” + diminutivo alemão “-chen”)'],
      ['Mato', 'mata, floresta'],
      ['Churrasco', 'carne grelhada, churrasco'],
    ],
  },
];
