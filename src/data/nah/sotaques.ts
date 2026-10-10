import type { Accent } from '../types';

/**
 * As variedades do náuatle (10/10/2026). Fontes: Wikipédia em português, inglês e espanhol («Nahuatl»,
 * «Huasteca Nahuatl», «Guerrero Nahuatl», «Morelos Nahuatl», consultadas em 10/10/2026). O curso ensina
 * o náuatle clássico. Como as variedades vivas têm códigos ISO diferentes, se viram dialetos ou línguas
 * é dúvida para o dono (docs/duvidas-variedades.md); por enquanto, sotaques.
 */
export const ACCENTS_NAH: Accent[] = [
  {
    id: 'nah-central',
    name: 'Central (Puebla, Tlaxcala)',
    kind: 'sotaque',
    region: 'Puebla, Tlaxcala e o vale do México',
    country: 'MEX',
    subdivisions: ['MX-PUE', 'MX-TLA', 'MX-MEX'],
    emoji: '🌋',
    summary: 'O náuatle do centro do México, o mais próximo do náuatle clássico de Tenochtitlán, em volta dos vulcões Popocatépetl e Iztaccíhuatl.',
    features: ['O mais próximo do náuatle clássico.', 'Muitas palavras do espanhol na fala de hoje.'],
    examples: [['Niltze!', 'Olá!']],
  },
  {
    id: 'nah-huasteca',
    name: 'Huasteca',
    kind: 'sotaque',
    region: 'A Huasteca: norte de Veracruz, Hidalgo e San Luis Potosí',
    country: 'MEX',
    subdivisions: ['MX-VER', 'MX-HID', 'MX-SLP'],
    emoji: '🌽',
    summary: 'O náuatle da Huasteca, a variedade com mais falantes hoje, mais de um milhão de pessoas.',
    features: ['A variedade com mais falantes.', 'Palavras e formas próprias, diferentes das do centro.'],
    examples: [['Piyali!', 'Olá!']],
  },
  {
    id: 'nah-guerrero',
    name: 'Guerrero',
    kind: 'sotaque',
    region: 'O centro de Guerrero',
    country: 'MEX',
    subdivisions: ['MX-GRO'],
    emoji: '🎨',
    summary: 'O náuatle de Guerrero, das vilas que pintam o papel de casca de árvore (amate).',
    features: ['Formas próprias, diferentes das da Huasteca.', 'As pinturas em papel amate são tradição das vilas nahuas da região.'],
    examples: [['amatl', 'papel (de casca de árvore)']],
  },
  {
    id: 'nah-morelos',
    name: 'Morelos',
    kind: 'sotaque',
    region: 'Morelos (Tepoztlán, Cuentepec)',
    country: 'MEX',
    subdivisions: ['MX-MOR'],
    emoji: '⛰️',
    summary: 'O náuatle de Morelos, falado em poucas vilas, hoje ameaçado, perto do náuatle do centro.',
    features: ['Poucos falantes, a maioria idosa.', 'Próximo do náuatle do centro.'],
    examples: [['Tepoztlan', 'Tepoztlán']],
  },
];
