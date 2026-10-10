import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do alutiiq (10/10/2026): o koniag (padrão do curso) e o chugach. Sem histórias nos
 * dialetos, por falta de fonte. Fonte: Wikipédia em inglês, «Alutiiq language» (consultada em
 * 10/10/2026): os dois dialetos e a tabela dos números e dos meses (koniag × chugach).
 */
export const VARIANTS_EMS: LanguageVariant[] = [
  dialetoPadrao(
    'ems-KON',
    'USA',
    'Alutiiq koniag',
    '🇺🇸',
    'O padrão do curso: o koniag, falado na ilha Kodiak e no alto da península do Alasca, o dialeto da gramática e do dicionário escolares de Jeff Leer.',
  ),
  {
    code: 'ems-CHU',
    country: 'USA',
    kind: 'dialeto',
    name: 'Alutiiq chugach',
    flag: '🇺🇸',
    summary: 'O chugach, falado na península Kenai (Nanwalek, Port Graham) e no estreito do Príncipe Guilherme (Chenega), onde encontra o eyak.',
    pronunciation: ['Alguns números mudam: em Chenega, “atel’ek” (dois) e “pinga’an” (três).', 'Os meses têm outros nomes, como “Iqallugciq” (junho).'],
    vocab: [
      ['mal’uk', 'malruk, mall’uk, atel’ek', 'dois'],
      ['pingayun', 'pingayun, pinga’an', 'três'],
      ['arwilgen', 'arwilgen, arwinlen', 'seis'],
      ['mallrungin', 'mallruungin, maquungwin', 'sete'],
      ['inglulgen', 'inglulen', 'oito'],
      ['qulnguyan', 'qulnguan', 'nove'],
      ['Nanicqaaq Iraluq', 'Yaʼalungia’aq', 'fevereiro'],
      ['Kaignasqaq Iraluq', 'Ya’alullraaq', 'março'],
      ['Naut’staat Iraluat', 'Iqallugciq', 'junho'],
    ],
  },
];
