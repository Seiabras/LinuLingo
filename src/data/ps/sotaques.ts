import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do pachto (10/10/2026), separados pelo som das letras ښ e ږ. Fontes: Wikipédia em
 * português, inglês e pachto («Pashto dialects», «Yusufzai Pashto», «Kandahari Pashto», consultadas em
 * 10/10/2026). A lista aprovou Afeganistão e Paquistão como dialetos; por falta de fonte para as
 * histórias, ficaram como sotaques (dúvida em docs/duvidas-variedades.md).
 */
const BASE_PS: Accent[] = [
  {
    id: 'ps-kandahar',
    name: 'Kandahar (sul)',
    kind: 'sotaque',
    region: 'Kandahar e o sul do Afeganistão; Quetta, no Paquistão',
    country: 'AFG',
    subdivisions: ['AF-KAN', 'AF-HEL'],
    emoji: '🍈',
    summary: 'O pachto do sul, de Kandahar, o “pachto suave”, em que o “ښ” soa como um “ch” chiado e o “ږ” como um “j”: o nome da língua soa “Pashto”.',
    features: ['O “ښ” soa “ʂ” (um “ch” chiado): “Pashto”.', 'O “ږ” soa “ʐ” (um “j” chiado).'],
    examples: [['پښتو', 'pachto', 'pronunciado “Pashto”']],
  },
  {
    id: 'ps-peshawar',
    name: 'Peshawar (yusufzai, norte)',
    kind: 'sotaque',
    region: 'Peshawar, Swat e o norte do Paquistão; o leste do Afeganistão',
    country: 'PAK',
    subdivisions: ['PK-KP'],
    emoji: '🏔️',
    summary: 'O pachto do norte, de Peshawar, o “pachto duro”, em que o “ښ” soa “kh” e o “ږ” soa “g”: o nome da língua soa “Pakhto”.',
    features: ['O “ښ” soa “x” (kh): “Pakhto”.', 'O “ږ” soa “g”.'],
    examples: [['پښتو', 'pachto', 'pronunciado “Pakhto”']],
  },
  {
    id: 'ps-central',
    name: 'Central (Wardak, Ghazni)',
    kind: 'sotaque',
    region: 'Wardak, Ghazni e o centro do Afeganistão',
    country: 'AFG',
    subdivisions: ['AF-WAR', 'AF-GHA', 'AF-LOG'],
    emoji: '🌄',
    summary: 'O pachto do centro do Afeganistão, onde o “ښ” soa “ç” (como o “ch” do alemão “ich”), entre o sul e o norte.',
    features: ['O “ښ” soa “ç”, entre o “sh” do sul e o “kh” do norte.', 'O “ږ” soa como um “j” suave.'],
    examples: [['پښتو', 'pachto', 'pronunciado “Paçto”']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_PS: Accent[] = noDialeto(BASE_PS, 'ps-AF', { iguais: {'ps-peshawar': 'ps-PK'} });
