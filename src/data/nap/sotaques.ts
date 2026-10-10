import type { Accent } from '../types';

/**
 * Os falares do napolitano (o grupo do “italiano meridional”, 10/10/2026). Fontes: Wikipédia em
 * napolitano e em italiano («Lengua napulitana», «Dialetti italiani meridionali», consultadas em
 * 10/10/2026), que segue a classificação de Pellegrini (1977).
 */
export const ACCENTS_NAP: Accent[] = [
  {
    id: 'nap-napoles',
    name: 'Napolitano de Nápoles',
    kind: 'sotaque',
    region: 'Nápoles e o golfo',
    country: 'ITA',
    subdivisions: ['IT-72', 'IT-NA'],
    emoji: '🍕',
    summary: 'O napolitano da cidade, a variedade de prestígio, das canções clássicas, do teatro de Eduardo De Filippo e da poesia de Salvatore Di Giacomo.',
    features: [
      'A vogal do fim das palavras vira um “ə” fraco, quase mudo: “Napule” soa “Nàpulə”.',
      'O “s” antes de consoante soa chiado, como no carioca: “stamme” soa “shtamme”.',
    ],
    examples: [['Comme staje?', 'Como você está?'], ['Grazie assaje!', 'Muito obrigado!']],
  },
  {
    id: 'nap-campania',
    name: 'Campânia interior (Irpínia, Sannio)',
    kind: 'sotaque',
    region: 'O interior da Campânia: Avellino e Benevento',
    country: 'ITA',
    subdivisions: ['IT-72', 'IT-AV', 'IT-BN'],
    emoji: '🌄',
    summary: 'O napolitano das colinas do interior da Campânia, mais conservador que o da capital.',
    features: ['Mantém formas mais antigas, perdidas na cidade.', 'As vogais finais também enfraquecem, como em Nápoles.'],
    examples: [['Comme staje?', 'Como você está?']],
  },
  {
    id: 'nap-abruzzo',
    name: 'Abruzzo e Molise',
    kind: 'sotaque',
    region: 'Abruzzo e Molise',
    country: 'ITA',
    subdivisions: ['IT-65', 'IT-67'],
    emoji: '🐑',
    summary: 'Os falares do Abruzzo e do Molise, a ponta norte do grupo napolitano, com vogais que mudam de timbre conforme a sílaba.',
    features: ['As vogais tônicas mudam de som conforme a sílaba seguinte.', 'As vogais finais também viram “ə”.'],
    examples: [['arrosticini', 'espetinhos de carneiro, a comida típica do Abruzzo']],
  },
  {
    id: 'nap-apulia',
    name: 'Apúlia do norte e Basilicata',
    kind: 'sotaque',
    region: 'O norte da Apúlia (Foggia, Bari) e a Basilicata',
    country: 'ITA',
    subdivisions: ['IT-75', 'IT-77', 'IT-FG', 'IT-BA'],
    emoji: '🫒',
    summary: 'Os falares do norte da Apúlia e da Basilicata, como o barese, também do grupo napolitano, com vogais que se abrem em ditongos.',
    features: ['As vogais tônicas se abrem em ditongos, sobretudo no barese.', 'O sul da Apúlia (o Salento) já é de outro grupo, próximo do siciliano.'],
    examples: [['Bari', 'Bari', 'em barese, “Bàre”']],
  },
];
