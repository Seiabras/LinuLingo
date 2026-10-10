import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do polonês (10/10/2026). Fontes: Wikipédia em polonês e em português («Dialekty języka
 * polskiego», «Gwara warszawska», «Gwara poznańska», «Gwara podhalańska», «Język śląski»,
 * consultadas em 10/10/2026), na divisão de Kazimierz Nitsch. O silesiano e o polonês do Paraná entram
 * como sotaques; se o silesiano vira língua própria e o Paraná vira dialeto, são dúvidas para o dono
 * (docs/duvidas-variedades.md).
 */
const BASE_PL: Accent[] = [
  {
    id: 'pl-varsovia',
    name: 'Varsóvia (Mazóvia)',
    kind: 'sotaque',
    region: 'Varsóvia e a Mazóvia',
    country: 'POL',
    subdivisions: ['PL-14'],
    emoji: '🧜',
    summary: 'O polonês de Varsóvia, a capital, a referência do polonês da TV; a antiga gíria da cidade (a “gwara warszawska”) virou marca de livros e canções.',
    features: ['Antes de vogal, a consoante final continua surda: “brak okna” soa como se escreve, sem o “g” de Cracóvia.', '“Na dworze” para “lá fora”, onde Cracóvia diz “na polu”.'],
    examples: [['na dworze', 'lá fora']],
  },
  {
    id: 'pl-cracovia',
    name: 'Cracóvia (Pequena Polônia)',
    kind: 'sotaque',
    region: 'Cracóvia e a Pequena Polônia',
    country: 'POL',
    subdivisions: ['PL-12'],
    emoji: '🐉',
    summary: 'O polonês de Cracóvia e do sul, que sonoriza a consoante final antes de vogal (“brak okna” soa “brag okna”) e diz “na polu” para “lá fora”.',
    features: ['A consoante final fica sonora antes de vogal: “brak okna” soa “brag okna”.', '“Na polu” (no campo) para “lá fora”.'],
    examples: [['na polu', 'lá fora', 'em Varsóvia, “na dworze”']],
  },
  {
    id: 'pl-poznan',
    name: 'Poznań (Grande Polônia)',
    kind: 'sotaque',
    region: 'Poznań e a Grande Polônia',
    country: 'POL',
    subdivisions: ['PL-30'],
    emoji: '🥔',
    summary: 'O polonês de Poznań, com palavras do alemão, do tempo em que a região foi prussiana, e as batatas chamadas de “pyry”.',
    features: ['Muitas palavras do alemão: “szneka” (um doce), do alemão “Schnecke”.', 'Sonoriza a consoante final antes de vogal, como em Cracóvia.'],
    examples: [['pyry', 'batatas', 'no padrão, “ziemniaki”']],
  },
  {
    id: 'pl-silesia',
    name: 'Silesiano',
    kind: 'língua',
    region: 'A Alta Silésia: Katowice, Opole',
    country: 'POL',
    subdivisions: ['PL-24', 'PL-16'],
    emoji: '⛏️',
    summary: 'A fala da Alta Silésia, a região das minas, com muitas palavras do alemão. Muitos silesianos a consideram uma língua própria, e ela tem código ISO (szl).',
    features: ['Muitas palavras do alemão, e outras próprias: “gryfny” (bonito).', 'Em 2011, mais de 500 mil pessoas declararam o silesiano como língua no censo.'],
    examples: [['gryfny', 'bonito, legal']],
  },
  {
    id: 'pl-podhale',
    name: 'Podhale (górale)',
    kind: 'sotaque',
    region: 'O Podhale, aos pés dos Tatras (Zakopane)',
    country: 'POL',
    subdivisions: ['PL-12'],
    emoji: '🏔️',
    summary: 'A fala dos górale, os montanheses dos Tatras, com o acento na primeira sílaba e o “sz” e o “cz” que viram “s” e “c” (o “mazurzenie”).',
    features: ['O “mazurzenie”: “sz”, “cz”, “ż” viram “s”, “c”, “z”.', 'O acento cai na primeira sílaba, e não na penúltima.'],
    examples: [['baca', 'o chefe dos pastores']],
  },
  {
    id: 'pl-parana',
    name: 'Polonês do Paraná',
    kind: 'sotaque',
    region: 'Curitiba e as colônias polonesas do Paraná, no Brasil',
    country: 'BRA',
    subdivisions: ['BR-PR'],
    emoji: '🇧🇷',
    summary: 'O polonês dos descendentes dos imigrantes que chegaram ao Paraná a partir de 1871, com palavras do português e formas antigas que a Polônia já perdeu.',
    features: ['Palavras do português entram na fala polonesa.', 'Guarda formas do polonês rural do século XIX.'],
    examples: [['Kurytyba', 'Curitiba']],
  },
  {
    id: 'pl-cassubio',
    name: 'Cassubiano (kaszëbsczi)',
    kind: 'língua',
    region: 'A Cassúbia, a oeste de Gdańsk',
    country: 'POL',
    subdivisions: ['PL-22'],
    emoji: '🐟',
    summary: 'A língua dos cassubianos, na Pomerânia, a única língua regional reconhecida pela lei polonesa (2005).',
    features: ['Tem escrita própria, com letras como “ë” e “ò”.', 'Ensinada nas escolas da Cassúbia.'],
    examples: [['Kaszëbë', 'Cassúbia']],
    estudarMais: { curso: 'csb' },
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_PL: Accent[] = noDialeto(BASE_PL, 'pl-PL', { iguais: {'pl-parana': 'pl-BR'} });
