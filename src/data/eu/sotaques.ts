import type { Accent } from '../types';

/**
 * Os falares do basco (10/10/2026): os dialetos tradicionais da classificação de Koldo Zuazo, nos dois
 * lados dos Pireneus. O padrão (euskara batua) foi fixado pela Euskaltzaindia a partir de 1968. Fontes:
 * Wikipédia em basco e em espanhol («Euskalkiak», «Euskara batua», «Zuberera», consultadas em
 * 10/10/2026).
 */
export const ACCENTS_EU: Accent[] = [
  {
    id: 'eu-ocidental',
    name: 'Biscainho (ocidental)',
    kind: 'sotaque',
    region: 'Biscaia e o oeste de Guipúscoa e de Álava',
    country: 'ESP',
    subdivisions: ['ES-BI', 'ES-SS', 'ES-VI'],
    emoji: '⚓',
    summary: 'O basco do oeste, de Bilbau e da Biscaia, o mais diferente do padrão, com formas verbais e palavras próprias.',
    features: [
      'Formas verbais próprias, bem diferentes das do batua.',
      'O “a” final de muitas palavras muda ao receber o artigo: “alaba” (filha) vira “alabea”.',
    ],
    examples: [['Kaixo! Zelan?', 'Oi! Como vai?', 'padrão: “Kaixo! Zer moduz?”']],
  },
  {
    id: 'eu-central',
    name: 'Guipuscoano (central)',
    kind: 'sotaque',
    region: 'Guipúscoa e partes de Navarra',
    country: 'ESP',
    subdivisions: ['ES-SS', 'ES-NA'],
    emoji: '🏞️',
    summary: 'O basco central, de Guipúscoa, uma das bases do euskara batua, o padrão criado pela Euskaltzaindia em 1968.',
    features: [
      'Junto com o navarro-lapurdino, é a base do batua.',
      'É a região onde o basco é mais falado no dia a dia.',
    ],
    examples: [['Kaixo! Zer moduz?', 'Oi! Como vai?']],
  },
  {
    id: 'eu-navarro',
    name: 'Navarro',
    kind: 'sotaque',
    region: 'O norte de Navarra',
    country: 'ESP',
    subdivisions: ['ES-NA'],
    emoji: '🐂',
    summary: 'O basco de Navarra, falado sobretudo nos vales do norte da comunidade foral.',
    features: [
      'Vocabulário e formas verbais próprias dos vales navarros.',
      'Em Pamplona, o basco convive com o espanhol, e muitos o aprendem na escola.',
    ],
    examples: [['Egun on!', 'Bom dia!']],
  },
  {
    id: 'eu-lapurdino',
    name: 'Navarro-lapurdino (Iparralde)',
    kind: 'sotaque',
    region: 'Lapurdi e a Baixa Navarra, no País Basco francês',
    country: 'FRA',
    subdivisions: ['FR-64'],
    emoji: '🥖',
    summary: 'O basco do lado francês, de Baiona e de Donibane Lohizune, com o “r” do francês e a outra base do euskara batua.',
    features: [
      'O “r” uvular, como no francês, e palavras emprestadas do francês.',
      'Tem a mais antiga tradição literária do basco: o primeiro livro impresso em basco, de 1545, é desta região.',
    ],
    examples: [['Egun on!', 'Bom dia!']],
  },
  {
    id: 'eu-suletino',
    name: 'Suletino (Zuberoa)',
    kind: 'sotaque',
    region: 'Zuberoa (Soule), no extremo leste do País Basco francês',
    country: 'FRA',
    subdivisions: ['FR-64'],
    emoji: '🎭',
    summary: 'O basco de Zuberoa, o mais diferente de todos, com uma vogal que só ele tem, o “ü” (como no francês “lune”), e consoantes aspiradas.',
    features: [
      'A vogal “ü”, que nenhum outro dialeto basco tem.',
      'Consoantes aspiradas: “ph”, “th”, “kh”.',
      'O teatro popular das pastorais, as “pastoralak”, é tradição de Zuberoa.',
    ],
    examples: [['Egün hun!', 'Bom dia!', 'padrão: “Egun on!”']],
  },
];
