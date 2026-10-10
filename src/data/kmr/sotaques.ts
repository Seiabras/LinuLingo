import type { Accent } from '../types';

/**
 * Os falares do curmanji (curdo do norte), em quatro países (10/10/2026). Fontes: Wikipédia em
 * português, inglês e curdo («Kurmanji», «Badini», «Kurdish alphabets», consultadas em 10/10/2026). Se
 * os países viram dialetos é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_KMR: Accent[] = [
  {
    id: 'kmr-botan',
    name: 'Botan',
    kind: 'sotaque',
    region: 'Botan, no sudeste da Turquia (Cizre, Şırnak)',
    country: 'TUR',
    subdivisions: ['TR-73', 'TR-56'],
    emoji: '📜',
    summary: 'O curmanji de Botan, a terra do poeta Ehmedê Xanî e do “Mem û Zîn” (1692), base de boa parte do curdo literário.',
    features: ['A base de boa parte da literatura em curmanji.', 'Escrito em alfabeto latino (o de Celadet Bedirxan).'],
    examples: [['Rojbaş!', 'Bom dia!']],
  },
  {
    id: 'kmr-serhed',
    name: 'Serhed (norte)',
    kind: 'sotaque',
    region: 'O nordeste da Turquia: Ağrı, Kars, Erzurum, Van',
    country: 'TUR',
    subdivisions: ['TR-04', 'TR-36', 'TR-65'],
    emoji: '🏔️',
    summary: 'O curmanji das montanhas do nordeste, de Ağrı e Van, aos pés do monte Ararat.',
    features: ['Vogais e palavras próprias das montanhas.', 'Muito falado na diáspora curda da Europa.'],
    examples: [['Silav!', 'Olá!']],
  },
  {
    id: 'kmr-badini',
    name: 'Badini (Iraque)',
    kind: 'sotaque',
    region: 'Duhok e Zakho, no Curdistão iraquiano',
    country: 'IRQ',
    emoji: '🌿',
    summary: 'O curmanji do Iraque, de Duhok, escrito em alfabeto árabe, como o sorani, e não em latino.',
    features: ['Escrito em alfabeto árabe.', 'Palavras do sorani e do árabe.'],
    examples: [['دهۆک', 'Duhok']],
  },
  {
    id: 'kmr-siria',
    name: 'Síria (Rojava)',
    kind: 'sotaque',
    region: 'O nordeste da Síria (Qamishli, Kobani, Afrin)',
    country: 'SYR',
    subdivisions: ['SY-HA', 'SY-HL'],
    emoji: '🌾',
    summary: 'O curmanji do nordeste da Síria, escrito em alfabeto latino e ensinado nas escolas da região desde os anos 2010.',
    features: ['Escrito em alfabeto latino.', 'Palavras do árabe.'],
    examples: [['Qamişlo', 'Qamishli']],
  },
  {
    id: 'kmr-armenia',
    name: 'Armênia e Geórgia (iazidis)',
    kind: 'sotaque',
    region: 'As vilas iazidis da Armênia e a comunidade de Tbilisi',
    country: 'ARM',
    subdivisions: ['AM-AG', 'AM-AR'],
    emoji: '☀️',
    summary: 'O curmanji dos iazidis e curdos do Cáucaso, que teve escrita própria em cirílico no tempo soviético e a rádio curda de Ierevã.',
    features: ['Escrito em cirílico no tempo soviético.', 'A rádio curda de Ierevã, de 1955, era ouvida em todo o Curdistão.'],
    examples: [['Êzdî', 'iazidi']],
  },
];
