import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do checheno (10/10/2026). Fontes: Wikipédia em português, inglês e russo («Chechen
 * language», «Kist people», «Чеченский язык», consultadas em 10/10/2026). O padrão segue a fala da
 * planície (Grozny). O kist, da Geórgia, entra como sotaque; se vira dialeto é dúvida para o dono
 * (docs/duvidas-variedades.md).
 */
const BASE_CE: Accent[] = [
  {
    id: 'ce-planicie',
    name: 'Planície (padrão)',
    kind: 'sotaque',
    region: 'Grozny e a planície da Chechênia',
    country: 'RUS',
    subdivisions: ['RU-CE'],
    emoji: '🏙️',
    summary: 'O checheno da planície, de Grozny, a base da língua escrita.',
    features: ['A base do padrão escrito, em cirílico.', 'Muitas consoantes da garganta, escritas com o “Ӏ” (palotchka).'],
    examples: [['Салам!', 'Olá!']],
  },
  {
    id: 'ce-montanhas',
    name: 'Montanhas',
    kind: 'sotaque',
    region: 'As montanhas do sul da Chechênia (Itum-Kali, Shatoi)',
    country: 'RUS',
    subdivisions: ['RU-CE'],
    emoji: '⛰️',
    summary: 'Os falares das montanhas do sul, divididos por vale, mais conservadores que o da planície.',
    features: ['Cada vale tem o seu falar.', 'Formas antigas que a planície perdeu.'],
    examples: [['Салам!', 'Olá!']],
  },
  {
    id: 'ce-kist',
    name: 'Kist (Geórgia)',
    kind: 'sotaque',
    region: 'O vale do Pankisi, na Geórgia',
    country: 'GEO',
    subdivisions: ['GE-KA'],
    emoji: '🇬🇪',
    summary: 'O checheno dos kist, no vale do Pankisi, na Geórgia, que vieram da Chechênia no século XIX, com palavras do georgiano.',
    features: ['Palavras do georgiano.', 'Muitos kist falam também georgiano no dia a dia.'],
    examples: [['Салам!', 'Olá!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_CE: Accent[] = noDialeto(BASE_CE, 'ce-RU', { iguais: {'ce-kist': 'ce-GE'} });
