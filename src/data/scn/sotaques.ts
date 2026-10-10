import type { Accent } from '../types';

/**
 * Os falares do siciliano (o grupo do “italiano meridional extremo”, 10/10/2026). Fontes: Wikipédia em
 * siciliano e em italiano («Lingua siciliana», «Dialetti siciliani», «Dialetto salentino», consultadas
 * em 10/10/2026), que seguem Ruffino, «Sicilia» (2001).
 */
export const ACCENTS_SCN: Accent[] = [
  {
    id: 'scn-ocidental',
    name: 'Palermo e o oeste',
    kind: 'sotaque',
    region: 'Palermo, Trapani e o oeste da Sicília',
    country: 'ITA',
    subdivisions: ['IT-82', 'IT-PA', 'IT-TP'],
    emoji: '🍋',
    summary: 'O siciliano de Palermo e do oeste da ilha, com vogais abertas que se alongam em ditongos.',
    features: [
      'As vogais tônicas abertas viram ditongos no palermitano: “pòrta” soa perto de “puòrta”.',
      'Como em todo o siciliano, só três vogais átonas no fim: “i”, “a”, “u” (“beddu”, “casa”, “cori”).',
    ],
    examples: [['Bongiornu!', 'Bom dia!'], ['Grazzi!', 'Obrigado!']],
  },
  {
    id: 'scn-oriental',
    name: 'Catânia e Messina',
    kind: 'sotaque',
    region: 'Catânia, Messina e o leste da Sicília',
    country: 'ITA',
    subdivisions: ['IT-82', 'IT-CT', 'IT-ME'],
    emoji: '🌋',
    summary: 'O siciliano do leste, de Catânia, ao pé do Etna, e de Messina, de frente para a Calábria.',
    features: [
      'O “ll” do latim vira um “dd” cacuminal, com a língua dobrada para trás: “beddu” (bonito).',
      'O “tr” e o “str” também são cacuminais: “tri” (três) soa quase “ʈʂi”.',
    ],
    examples: [['Comu stai?', 'Como você está?']],
  },
  {
    id: 'scn-central',
    name: 'Centro da Sicília',
    kind: 'sotaque',
    region: 'Agrigento, Caltanissetta e Enna',
    country: 'ITA',
    subdivisions: ['IT-82', 'IT-AG', 'IT-CL', 'IT-EN'],
    emoji: '🏺',
    summary: 'O siciliano do interior e da costa sul, de Agrigento, a terra de Pirandello.',
    features: ['Vogais tônicas que se alongam em ditongos, como no oeste.', 'Pirandello escreveu peças também em siciliano, como “Liolà”.'],
    examples: [['Comu stai?', 'Como você está?']],
  },
  {
    id: 'scn-calabria',
    name: 'Calábria do sul e Salento',
    kind: 'sotaque',
    region: 'O sul da Calábria (Reggio) e o Salento, na ponta da Apúlia',
    country: 'ITA',
    subdivisions: ['IT-78', 'IT-75', 'IT-RC', 'IT-LE'],
    emoji: '🌊',
    summary: 'Fora da ilha, o sul da Calábria e o Salento falam variedades do mesmo grupo do siciliano, com o “dd” cacuminal e as três vogais finais.',
    features: ['O mesmo sistema de vogais finais do siciliano: “i”, “a”, “u”.', 'No Salento, o “dd” cacuminal também aparece: “beddu”.'],
    examples: [['beddu', 'bonito']],
  },
];
