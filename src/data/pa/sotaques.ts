import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do panjabi (10/10/2026) e as línguas vizinhas do Paquistão. Fontes: Wikipédia em
 * português, inglês e panjabi («Punjabi dialects», «Majhi dialect», «Doabi», «Malwai», «Puadhi»,
 * «Saraiki language», «Hindko», «Pahari-Pothwari», consultadas em 10/10/2026). O padrão é o majhi, de
 * Amritsar e Lahore. Índia (gurmukhi) e Paquistão (shahmukhi) são dialetos (decisão do
 * dono, 10/10/2026); o majhi atravessa os dois.
 */
const BASE_PA: Accent[] = [
  {
    id: 'pa-majhi',
    name: 'Majhi (Amritsar, Lahore)',
    kind: 'sotaque',
    region: 'O Majha: Amritsar, na Índia, e Lahore, no Paquistão',
    country: 'IND',
    subdivisions: ['IN-PB'],
    emoji: '🛕',
    summary: 'O panjabi do Majha, dos dois lados da fronteira, de Amritsar e do Templo Dourado a Lahore, a base do panjabi padrão.',
    features: ['A base do padrão, nas duas escritas.', 'Os tons do panjabi, que nascem das antigas consoantes aspiradas sonoras.'],
    examples: [['ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Sat Sri Akal, o cumprimento sikh']],
  },
  {
    id: 'pa-doabi',
    name: 'Doabi (Jalandhar)',
    kind: 'sotaque',
    region: 'O Doaba, entre os rios Beas e Sutlej (Jalandhar, Hoshiarpur)',
    country: 'IND',
    subdivisions: ['IN-PB'],
    emoji: '✈️',
    summary: 'O panjabi do Doaba, a região de onde saiu boa parte da diáspora panjabi para a Inglaterra e o Canadá.',
    features: ['Muito ouvido na diáspora do Reino Unido e do Canadá.', 'Vogais e palavras próprias.'],
    examples: [['ਦੋਆਬਾ', 'Doaba']],
  },
  {
    id: 'pa-malwai',
    name: 'Malwai (Ludhiana, Patiala)',
    kind: 'sotaque',
    region: 'O Malwa, ao sul do Sutlej (Ludhiana, Patiala, Bathinda)',
    country: 'IND',
    subdivisions: ['IN-PB'],
    emoji: '🌾',
    summary: 'O panjabi do Malwa, a maior região do Punjab indiano, muito ouvido nas músicas de bhangra.',
    features: ['A região com mais falantes no Punjab indiano.', 'Muito ouvido nas músicas populares.'],
    examples: [['ਮਾਲਵਾ', 'Malwa']],
  },
  {
    id: 'pa-puadhi',
    name: 'Puadhi',
    kind: 'sotaque',
    region: 'O Puadh, entre o Punjab e Haryana (Mohali, Rupnagar)',
    country: 'IND',
    subdivisions: ['IN-PB', 'IN-HR'],
    emoji: '🌉',
    summary: 'O panjabi do Puadh, no leste, de transição para o haryanvi e o híndi.',
    features: ['Traços de transição para o haryanvi.', 'Falado nos dois lados da divisa entre o Punjab e Haryana.'],
    examples: [['ਪੁਆਧ', 'Puadh']],
  },
  {
    id: 'pa-saraiki',
    name: 'Saraiki',
    kind: 'língua',
    region: 'O sul do Punjab paquistanês (Multan, Bahawalpur)',
    country: 'PAK',
    subdivisions: ['PK-PB'],
    emoji: '🌞',
    summary: 'A língua do sul do Punjab paquistanês, de Multan, com dezenas de milhões de falantes e consoantes implosivas que o panjabi não tem.',
    features: ['Consoantes implosivas, raras na região.', 'A poesia sufi de Khwaja Ghulam Farid.'],
    examples: [['ملتان', 'Multan']],
  },
  {
    id: 'pa-hindko',
    name: 'Hindko',
    kind: 'língua',
    region: 'Peshawar, Abbottabad e o norte do Paquistão',
    country: 'PAK',
    subdivisions: ['PK-KP'],
    emoji: '⛰️',
    summary: 'A língua de Peshawar e de Hazara, no norte do Paquistão, parente do panjabi, falada ao lado do pachto.',
    features: ['Convive com o pachto em Peshawar.', 'Parente do panjabi do oeste.'],
    examples: [['پشاور', 'Peshawar']],
  },
  {
    id: 'pa-pothwari',
    name: 'Pothwari',
    kind: 'língua',
    region: 'O planalto de Pothohar (Rawalpindi) e a Caxemira paquistanesa',
    country: 'PAK',
    subdivisions: ['PK-PB', 'PK-JK'],
    emoji: '🏞️',
    summary: 'A língua do planalto de Pothohar e de Mirpur, de onde veio boa parte dos paquistaneses do Reino Unido.',
    features: ['Muito falada pelos paquistaneses do Reino Unido.', 'Parente do panjabi e do hindko.'],
    examples: [['راولپنڈی', 'Rawalpindi']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_PA: Accent[] = noDialeto(BASE_PA, 'pa-IN', { outros: { 'pa-saraiki': 'pa-PK', 'pa-hindko': 'pa-PK', 'pa-pothwari': 'pa-PK' }, livres: ['pa-majhi'] });
