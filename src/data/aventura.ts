/**
 * A aventura da trilha: o Linu sai da colônia dele, na Antártica, desce a Península Antártica, cruza
 * o oceano para o norte e desembarca no lugar onde se fala o idioma estudado. Cada subnível da trilha
 * (A1.1 … C2) é uma parada; entre uma parada e a próxima fica a travessia (o desafio da unidade).
 *
 * As 8 primeiras paradas são as mesmas para todo idioma (a Antártica é neutra: não pertence a nenhum
 * país, ver `tailwind.config.js`); as 7 últimas são no país do idioma (`src/services/aventura.ts`).
 *
 * Fatos conferidos em 02/10/2026 nos verbetes da Wikipédia em inglês de cada lugar (Half Moon Island,
 * King George Island, Comandante Ferraz Antarctic Station, Deception Island, Port Lockroy, Lemaire
 * Channel, Petermann Island, Drake Passage, Antarctic Convergence). Só o que é bem estabelecido.
 */
import type { PixelIconName } from '@/components/PixelIcon';

export type Zona = 'gelo' | 'mar' | 'terra';

export interface ParadaAntartica {
  id: string;
  name: string;
  region: string;
  emoji: string;
  /** o ícone em pixel art no mapa (`src/components/PixelIcon.tsx`) */
  icone: PixelIconName;
  zona: Zona;
  /** o amigo do Linu que aparece nesta parada (id de `src/data/amigos-linu.ts`) */
  amigo?: string;
  /** o que o amigo diz quando o Linu chega */
  fala: string;
  fact: string;
}

export const PARADAS_ANTARTICA: ParadaAntartica[] = [
  {
    id: 'meia-lua',
    icone: 'pinguim',
    name: 'Ilha Meia-Lua',
    region: 'Ilhas Shetland do Sul',
    emoji: '🐧',
    zona: 'gelo',
    fala: 'É aqui que eu moro! Daqui sai a nossa expedição. Antes de partir, vamos aprender a cumprimentar.',
    fact: 'Uma ilhota em forma de lua crescente, com uma colônia de uns 2 mil casais de pinguins-de-barbicha, a espécie do Linu. Lá fica a base argentina Cámara, que só funciona de vez em quando, no verão.',
  },
  {
    id: 'rei-george',
    icone: 'estacao',
    name: 'Ilha Rei George',
    region: 'Ilhas Shetland do Sul',
    emoji: '🏠',
    zona: 'gelo',
    amigo: 'elefante-marinho',
    fala: 'Aqui moram cientistas de vários países, cada um falando a sua língua. Um bom lugar para treinar!',
    fact: 'Tem estações de pesquisa de vários países. Na Baía do Almirantado fica a brasileira Estação Antártica Comandante Ferraz, de 1984; depois de um incêndio em 2012, ela ganhou um prédio novo, aberto em 2020.',
  },
  {
    id: 'deception',
    icone: 'vulcao',
    name: 'Ilha Deception',
    region: 'Ilhas Shetland do Sul',
    emoji: '🌋',
    zona: 'gelo',
    amigo: 'leopardo',
    fala: 'Cuidado onde pisa: o chão aqui é quente! Esta ilha é a boca de um vulcão.',
    fact: 'É a cratera de um vulcão ativo, cheia de mar. Os navios entram por uma passagem estreita, o Fole de Netuno. As erupções de 1967 e 1969 danificaram as estações de pesquisa, abandonadas de vez depois da de 1970.',
  },
  {
    id: 'port-lockroy',
    icone: 'correio',
    name: 'Port Lockroy',
    region: 'Ilha Wiencke, Península Antártica',
    emoji: '✉️',
    zona: 'gelo',
    amigo: 'gentoo',
    fala: 'Bem-vindo ao correio! Metade da ilha é nossa, dos pinguins-gentoo; a outra metade é dos visitantes.',
    fact: 'A antiga Base A britânica, de 1944, hoje é um museu com a agência de correio em funcionamento mais ao sul do mundo. Metade da ilhota fica reservada para a colônia de pinguins-gentoo.',
  },
  {
    id: 'lemaire',
    icone: 'canal',
    name: 'Canal Lemaire',
    region: 'Península Antártica',
    emoji: '🏔️',
    zona: 'gelo',
    amigo: 'weddell',
    fala: 'Devagar, que o canal é estreito! Eu fico aqui no gelo, olhando os barcos passarem.',
    fact: 'Um corredor de mar de 11 km entre montanhas geladas, com só 600 m de largura na parte mais estreita. O belga Adrien de Gerlache passou por ele em 1898 e lhe deu o nome.',
  },
  {
    id: 'petermann',
    icone: 'iceberg',
    name: 'Ilha Petermann',
    region: 'Península Antártica',
    emoji: '🧊',
    zona: 'gelo',
    amigo: 'adelia',
    fala: 'Última parada no gelo! Daqui pra frente, o Linu vai pro mar aberto. Revisou tudo direitinho?',
    fact: 'Tem uns 3 mil casais de pinguins-gentoo e alguns pinguins-de-adélia. O francês Jean-Baptiste Charcot passou o inverno de 1909 ali, a bordo do navio Pourquoi-Pas?.',
  },
  {
    id: 'drake',
    icone: 'onda',
    name: 'Passagem de Drake',
    region: 'Entre a Antártica e o Cabo Horn',
    emoji: '🌊',
    zona: 'mar',
    amigo: 'albatroz',
    fala: 'Segura firme! Este é um dos mares mais bravos do mundo. Eu sigo o navio lá de cima.',
    fact: 'Uns 800 km de mar entre o Cabo Horn e as Shetland do Sul, liga o Atlântico ao Pacífico. Como não há terra em volta do mundo nessa latitude, a corrente circumpolar antártica passa por ali sem parar.',
  },
  {
    id: 'convergencia',
    icone: 'baleia',
    name: 'Convergência Antártica',
    region: 'Oceano Austral',
    emoji: '🐋',
    zona: 'mar',
    amigo: 'jubarte',
    fala: 'Sentiu a água esquentar? Daqui eu sigo pro norte com vocês. Falta pouco pra terra firme!',
    fact: 'A faixa do oceano em volta da Antártica onde a água fria do sul encontra a mais quente do norte, entre as latitudes 48° e 61° sul. A temperatura da água cai uns 3 °C de uma vez, e a mistura deixa o mar cheio de krill.',
  },
];

/** Na terra: as paradas do país (desembarque + 6) usam as cidades das expedições, quando o idioma tem. */
export const PARADAS_TERRA = 7;
