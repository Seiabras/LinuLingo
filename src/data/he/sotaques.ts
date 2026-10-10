import type { Accent } from '../types';

/**
 * As pronúncias do hebraico (10/10/2026): o padrão israelense, a fala mizrahi e as pronúncias
 * litúrgicas da diáspora. Fontes: Wikipédia em português, inglês e hebraico («Modern Hebrew phonology»,
 * «Mizrahi Hebrew», «Ashkenazi Hebrew», «Sephardi Hebrew», «Yemenite Hebrew», consultadas em
 * 10/10/2026).
 */
export const ACCENTS_HE: Accent[] = [
  {
    id: 'he-israel',
    name: 'Israelense (padrão)',
    kind: 'sotaque',
    region: 'Israel',
    country: 'ISR',
    subdivisions: ['IL-TA', 'IL-JM', 'IL-HA'],
    emoji: '🇮🇱',
    summary: 'O hebraico de Israel, a língua revivida no fim do século XIX, com o “r” da garganta (uvular) e a pronúncia sefardita das vogais.',
    features: ['O “ר” soa uvular, como o “r” francês.', 'O “ח” e o “כ” soam iguais, e o “ע” quase não se ouve.'],
    examples: [['שלום!', 'Olá!']],
  },
  {
    id: 'he-mizrahi',
    name: 'Mizrahi',
    kind: 'sotaque',
    region: 'As famílias judias vindas do mundo árabe, do Irã e do Iêmen',
    country: 'ISR',
    emoji: '🎶',
    summary: 'A pronúncia dos judeus vindos dos países árabes, que guarda os sons da garganta do hebraico antigo: o “ח” faríngeo e o “ע” como no árabe.',
    features: ['O “ח” faríngeo, diferente do “כ”.', 'O “ע” soa como o “ain” do árabe.', 'O “ר” vibrado na ponta da língua.'],
    examples: [['חבר', 'amigo', 'com o “ח” faríngeo']],
  },
  {
    id: 'he-asquenaze',
    name: 'Asquenaze (litúrgico)',
    kind: 'sotaque',
    region: 'As sinagogas asquenazes da Europa e das Américas',
    country: 'USA',
    emoji: '🕍',
    summary: 'A pronúncia tradicional das rezas dos judeus da Europa central e oriental, em que o “ת” sem ponto soa “s”: “Shabbos”.',
    features: ['O “ת” sem ponto soa “s”: “Shabbos”, onde Israel diz “Shabat”.', 'O acento muitas vezes na penúltima sílaba.'],
    examples: [['שבת', 'sábado', 'na pronúncia asquenaze, “Shabbos”']],
  },
  {
    id: 'he-sefardita',
    name: 'Sefardita (litúrgico)',
    kind: 'sotaque',
    region: 'As sinagogas sefarditas do Mediterrâneo, de Amsterdã e das Américas',
    country: 'ISR',
    emoji: '📜',
    summary: 'A pronúncia tradicional dos judeus sefarditas, base das vogais do hebraico de Israel.',
    features: ['A base das vogais do hebraico israelense.', 'O “ת” sem ponto soa “t”: “Shabat”.'],
    examples: [['שבת', 'sábado', '“Shabat”']],
  },
  {
    id: 'he-iemenita',
    name: 'Iemenita (litúrgico)',
    kind: 'sotaque',
    region: 'As comunidades judias vindas do Iêmen',
    country: 'ISR',
    emoji: '🪶',
    summary: 'A pronúncia dos judeus do Iêmen, considerada a mais conservadora, que distingue sons que as outras juntaram.',
    features: ['Cada letra com ou sem ponto tem som próprio.', 'O “ג” sem ponto soa como o “gh” do árabe.'],
    examples: [['תימן', 'Iêmen']],
  },
];
