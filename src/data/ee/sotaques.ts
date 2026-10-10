import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do eʋe (10/10/2026). Fontes: Wikipédia em português, inglês e francês («Ewe language»,
 * «Anlo Ewe», consultadas em 10/10/2026). A lista aprovou Gana e Togo como dialetos; por falta de fonte
 * para as histórias, entraram como sotaques (dúvida em docs/duvidas-variedades.md).
 */
const BASE_EE: Accent[] = [
  {
    id: 'ee-anlo',
    name: 'Aŋlɔ (costa de Gana)',
    kind: 'sotaque',
    region: 'A costa do sudeste de Gana (Keta, Anloga)',
    country: 'GHA',
    subdivisions: ['GH-TV'],
    emoji: '🌊',
    summary: 'O eʋe aŋlɔ, da costa e da lagoa de Keta, uma das bases do eʋe escrito, com palavras do inglês.',
    features: ['Uma das bases do padrão escrito.', 'Palavras do inglês, do lado de Gana.'],
    examples: [['Wòe zɔ!', 'Bem-vindo!']],
  },
  {
    id: 'ee-ewedome',
    name: 'Eʋedome (interior de Gana)',
    kind: 'sotaque',
    region: 'O interior da região do Volta (Ho, Kpando)',
    country: 'GHA',
    subdivisions: ['GH-TV', 'GH-OT'],
    emoji: '⛰️',
    summary: 'O eʋe do interior, das colinas da região do Volta, com tons e palavras próprias.',
    features: ['Tons e palavras próprias.', 'Ho é a capital da região do Volta.'],
    examples: [['Wòe zɔ!', 'Bem-vindo!']],
  },
  {
    id: 'ee-togo',
    name: 'Togo (Lomé)',
    kind: 'sotaque',
    region: 'Lomé e o sul do Togo',
    country: 'TGO',
    subdivisions: ['TG-M', 'TG-P'],
    emoji: '🇹🇬',
    summary: 'O eʋe do Togo, uma das duas línguas nacionais do país, com palavras do francês, onde Gana usa as do inglês.',
    features: ['Palavras do francês, onde Gana usa as do inglês.', 'Uma das duas línguas nacionais do Togo, com o kabiyè.'],
    examples: [['Wòe zɔ!', 'Bem-vindo!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_EE: Accent[] = noDialeto(BASE_EE, 'ee-GH', { iguais: {'ee-togo': 'ee-TG'} });
