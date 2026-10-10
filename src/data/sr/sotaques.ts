import type { Accent } from '../types';

/**
 * Os falares do sérvio (10/10/2026). Fontes: Wikipédia em sérvio e em português («Дијалекти српског
 * језика», «Екавски изговор», «Ијекавски изговор», «Торлачки дијалекти», «Црногорски језик»,
 * consultadas em 10/10/2026). Montenegro entra como sotaque; se o montenegrino vira dialeto ou língua
 * própria é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_SR: Accent[] = [
  {
    id: 'sr-ekavski',
    name: 'Ekavski (Sérvia)',
    kind: 'sotaque',
    region: 'Belgrado, a Šumadija e o centro da Sérvia',
    country: 'SRB',
    subdivisions: ['RS-00', 'RS-12'],
    emoji: '🏙️',
    summary: 'O sérvio da Sérvia, de Belgrado e da Šumadija, a forma “ekavska”, onde a antiga vogal “iat” soa “e”: “лепо” (bonito), “млеко” (leite).',
    features: ['O “iat” soa “е”: “лепо”, “млеко”.', 'É a forma do padrão na Sérvia.'],
    examples: [['млеко', 'leite']],
  },
  {
    id: 'sr-ijekavski',
    name: 'Ijekavski (Bósnia, Montenegro)',
    kind: 'sotaque',
    region: 'A República Sérvia, na Bósnia, e o oeste da Sérvia',
    country: 'BIH',
    subdivisions: ['BA-SRP'],
    emoji: '🌉',
    summary: 'O sérvio da Bósnia e do oeste, a forma “ijekavska”, onde o “iat” soa “ije” ou “je”: “лијепо”, “млијеко”.',
    features: ['O “iat” soa “ије” ou “је”: “лијепо”, “млијеко”.', 'A forma da obra de Vuk Karadžić, o reformador do sérvio.'],
    examples: [['млијеко', 'leite', 'na Sérvia, “млеко”']],
  },
  {
    id: 'sr-vojvodina',
    name: 'Voivodina',
    kind: 'sotaque',
    region: 'A Voivodina: Novi Sad, Subotica, o Banato sérvio',
    country: 'SRB',
    subdivisions: ['RS-VO'],
    emoji: '🌻',
    summary: 'O sérvio da Voivodina, a planície do norte, multilíngue, com palavras do húngaro e do alemão e uma fala mais lenta e arrastada.',
    features: ['Fala lenta, com vogais longas.', 'Palavras do húngaro e do alemão; a região tem seis línguas oficiais.'],
    examples: [['Нови Сад', 'Novi Sad']],
  },
  {
    id: 'sr-torlak',
    name: 'Torlaki (sudeste)',
    kind: 'sotaque',
    region: 'O sudeste: Niš, Pirot, Leskovac',
    country: 'SRB',
    subdivisions: ['RS-20', 'RS-22', 'RS-23'],
    emoji: '🌄',
    summary: 'Os falares do sudeste, de Niš e de Pirot, de transição para o búlgaro e o macedônio, que perderam quase todos os casos.',
    features: ['Quase sem casos: as preposições fazem o trabalho.', 'O acento é um só, sem tons nem vogais longas; em alguns falares, o artigo vem no fim da palavra, como no búlgaro.'],
    examples: [['Ниш', 'Niš']],
  },
  {
    id: 'sr-montenegro',
    name: 'Montenegro',
    kind: 'sotaque',
    region: 'Montenegro: Podgorica, Cetinje, Nikšić',
    country: 'MNE',
    emoji: '⛰️',
    summary: 'A fala de Montenegro, ijekavska, oficial no país como “montenegrino” desde 2007, com duas letras a mais no alfabeto: “ś” e “ź”.',
    features: ['Ijekavski, como na Bósnia: “лијепо”.', 'O alfabeto montenegrino tem duas letras a mais: “ś” (с́) e “ź” (з́).'],
    examples: [['Цетиње', 'Cetinje, a antiga capital']],
  },
];
