import type { Accent } from '../types';

/**
 * Os grandes grupos do iídiche oriental (10/10/2026). Fontes: Wikipédia em iídiche e em inglês
 * («ייִדישע דיאַלעקטן», «Yiddish dialects», consultadas em 10/10/2026), e a pronúncia-padrão do YIVO,
 * que segue as vogais do litvish. O iídiche hassídico entra como sotaque; se vira dialeto é dúvida
 * para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_YI: Accent[] = [
  {
    id: 'yi-litvish',
    name: 'Litvish (nordeste)',
    kind: 'sotaque',
    region: 'A antiga Lituânia judaica: Lituânia, Belarus e Letônia (Vilnius, Minsk)',
    country: 'LTU',
    emoji: '📚',
    summary: 'O iídiche do nordeste, da Vilna dos estudiosos, cujas vogais são a base da pronúncia-padrão do YIVO.',
    features: ['As vogais do YIVO vêm daqui: “kugl”.', 'Em algumas cidades, “s” e “sh” se confundiam (o “sabesdiker losn”).'],
    examples: [['קוגל', 'kugel (o pudim)', 'pronunciado “kugl”']],
  },
  {
    id: 'yi-poylish',
    name: 'Poylish (centro)',
    kind: 'sotaque',
    region: 'A Polônia do Congresso (Varsóvia, Łódź) e a Galícia (Cracóvia)',
    country: 'POL',
    emoji: '🕯️',
    summary: 'O iídiche da Polônia central, o de mais falantes antes da guerra, onde o “u” virou “i”: “kigl”.',
    features: ['O “u” do litvish vira “i”: “kigl”, “zin” (filho).', 'Vogais longas e curtas que mudam o sentido.'],
    examples: [['קוגל', 'kugel (o pudim)', 'pronunciado “kigl”']],
  },
  {
    id: 'yi-ukrainish',
    name: 'Ukrainish (sudeste)',
    kind: 'sotaque',
    region: 'A Ucrânia, a Moldávia e a Romênia (Odessa, Kyiv, Chernivtsi)',
    country: 'UKR',
    emoji: '🌾',
    summary: 'O iídiche do sudeste, da Ucrânia e da Bessarábia, a base da língua do teatro iídiche e do iídiche soviético.',
    features: ['Também “i” no lugar do “u”: “kigl”.', 'Foi a base da pronúncia do teatro iídiche.'],
    examples: [['קוגל', 'kugel (o pudim)', 'pronunciado “kigl”']],
  },
  {
    id: 'yi-hassidico',
    name: 'Iídiche hassídico',
    kind: 'sotaque',
    region: 'As comunidades hassídicas de Nova York (Brooklyn), Israel, Antuérpia e Londres',
    country: 'USA',
    subdivisions: ['US-NY'],
    emoji: '🎩',
    summary: 'O iídiche das comunidades hassídicas de hoje, a maior parte dos falantes nativos, com base na fala da Hungria e da Ucrânia e muitas palavras do inglês.',
    features: ['A maior parte das crianças que aprendem iídiche em casa hoje é hassídica.', 'Base no iídiche da Hungria e do sudeste, com palavras do inglês.'],
    examples: [['וואָס מאַכסטו?', 'Como vai?']],
  },
];
