import type { Accent } from '../types';

/**
 * Os falares do lígure (10/10/2026). Fontes: Wikipédia em lígure, italiano e francês («Lengua ligure»,
 * «Dialetto genovese», «Tabarchino», «Monégasque», consultadas em 10/10/2026). O monegasco entra como
 * sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_LIJ: Accent[] = [
  {
    id: 'lij-genova',
    name: 'Genovês',
    kind: 'sotaque',
    region: 'Gênova e a costa central da Ligúria',
    country: 'ITA',
    subdivisions: ['IT-42', 'IT-GE'],
    emoji: '⚓',
    summary: 'O lígure de Gênova (“Zena”, na própria língua), a variedade de prestígio, da antiga República marítima, com vogais longas e o “æ” aberto.',
    features: [
      'Vogais longas que mudam o sentido das palavras.',
      'O “æ”, um “é” bem aberto, e o “ö” e o “ü”, como no francês.',
    ],
    examples: [['Zena', 'Gênova']],
  },
  {
    id: 'lij-poente',
    name: 'Lígure do poente (Sanremo, Imperia)',
    kind: 'sotaque',
    region: 'A Riviera di Ponente: Sanremo, Imperia, Savona',
    country: 'ITA',
    subdivisions: ['IT-42', 'IT-IM', 'IT-SV'],
    emoji: '🌸',
    summary: 'O lígure do oeste, de Sanremo e Imperia, na direção da França, com traços de transição para o occitano.',
    features: ['Perto da fronteira francesa, se aproxima do occitano de Nice.', 'Conserva formas mais antigas que o genovês.'],
    examples: [['Sanremu', 'Sanremo']],
  },
  {
    id: 'lij-tabarquino',
    name: 'Tabarquino',
    kind: 'sotaque',
    region: 'Carloforte e Calasetta, no sudoeste da Sardenha',
    country: 'ITA',
    subdivisions: ['IT-88'],
    emoji: '🐟',
    summary: 'O lígure das ilhas do sudoeste da Sardenha, levado por pescadores de coral genoveses que viveram na ilha de Tabarka, na Tunísia, antes de se mudarem para lá no século XVIII.',
    features: ['Muito próximo do genovês antigo, com palavras do árabe da Tunísia e do sardo.', 'Uma ilha de língua lígure no meio da Sardenha.'],
    examples: [['Carlufórte', 'Carloforte']],
  },
  {
    id: 'lij-monegasco',
    name: 'Monegasco',
    kind: 'sotaque',
    region: 'O Principado de Mônaco',
    country: 'MCO',
    emoji: '🎰',
    summary: 'A língua tradicional de Mônaco, um lígure próximo do de Ventimiglia, ensinado nas escolas do principado desde os anos 1970.',
    features: ['Ensinado como matéria obrigatória nas escolas de Mônaco.', 'As placas da cidade velha trazem o nome das ruas também em monegasco.'],
    examples: [['Mùnegu', 'Mônaco']],
  },
];
