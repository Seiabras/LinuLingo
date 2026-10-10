import type { Accent } from '../types';

/**
 * Os falares do okinawano (uchinaaguchi), 10/10/2026. Fontes: Wikipédia em português, inglês e japonês
 * («Okinawan language», «Shuri dialect», «Kunigami language», consultadas em 10/10/2026). O padrão é
 * a fala de Shuri, a antiga capital do Reino de Ryūkyū.
 */
export const ACCENTS_RYU: Accent[] = [
  {
    id: 'ryu-shuri',
    name: 'Shuri e Naha (padrão)',
    kind: 'sotaque',
    region: 'Shuri e Naha, no sul de Okinawa',
    country: 'JPN',
    subdivisions: ['JP-47'],
    emoji: '🏯',
    summary: 'O okinawano de Shuri, a antiga capital do Reino de Ryūkyū, a fala da corte e a referência da língua.',
    features: ['A fala da antiga corte de Ryūkyū.', 'O “e” e o “o” do japonês viram “i” e “u”: “kokoro” (coração) soa “kukuru”.'],
    examples: [['はいさい', 'Olá! (dito por homem)'], ['めんそーれ', 'Bem-vindo!']],
  },
  {
    id: 'ryu-itoman',
    name: 'Itoman',
    kind: 'sotaque',
    region: 'Itoman, no extremo sul da ilha',
    country: 'JPN',
    subdivisions: ['JP-47'],
    emoji: '🎣',
    summary: 'O okinawano de Itoman, a cidade dos pescadores que navegavam por todo o Pacífico, com palavras próprias do mar.',
    features: ['Palavras próprias da pesca e do mar.', 'Uma fala reconhecível no resto da ilha.'],
    examples: [['いちまん', 'Itoman']],
  },
  {
    id: 'ryu-yanbaru',
    name: 'Norte (Yanbaru)',
    kind: 'sotaque',
    region: 'Yanbaru, as florestas do norte de Okinawa',
    country: 'JPN',
    subdivisions: ['JP-47'],
    emoji: '🌳',
    summary: 'As falas do norte de Okinawa, de Yanbaru, tão diferentes que muitos linguistas as contam como outra língua, o kunigami.',
    features: ['Muito diferentes do falar de Shuri.', 'Para muitos linguistas, já são outra língua (o kunigami).'],
    examples: [['やんばる', 'Yanbaru']],
  },
];
