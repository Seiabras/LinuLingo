import type { Accent } from '../types';

/**
 * Os falares do zulu e o ndebele do Zimbábue (10/10/2026). Fontes: Wikipédia em português e em inglês
 * («Zulu language», «Tsotsitaal», «Northern Ndebele language», consultadas em 10/10/2026).
 */
export const ACCENTS_ZU: Accent[] = [
  {
    id: 'zu-kzn',
    name: 'KwaZulu-Natal',
    kind: 'sotaque',
    region: 'KwaZulu-Natal',
    country: 'ZAF',
    subdivisions: ['ZA-KZN'],
    emoji: '🛡️',
    summary: 'O zulu de KwaZulu-Natal, a terra do antigo reino zulu, base do padrão, com o “zulu fundo” do campo e a linguagem de respeito (hlonipha).',
    features: ['A base do padrão.', 'A “hlonipha”: palavras evitadas por respeito, sobretudo pelas mulheres casadas.'],
    examples: [['Sawubona!', 'Olá!']],
  },
  {
    id: 'zu-urbano',
    name: 'Urbano (Joanesburgo)',
    kind: 'sotaque',
    region: 'Joanesburgo, Soweto e Gauteng',
    country: 'ZAF',
    subdivisions: ['ZA-GP'],
    emoji: '🏙️',
    summary: 'O zulu das cidades de Gauteng, misturado com o inglês, o africâner e as outras línguas do país, e com a gíria das ruas (tsotsitaal).',
    features: ['Mistura de zulu, inglês e outras línguas sul-africanas.', 'Gírias do tsotsitaal: “Heita!” (oi).'],
    examples: [['Heita!', 'Oi! (gíria)']],
  },
  {
    id: 'zu-ndebele',
    name: 'Ndebele do Zimbábue',
    kind: 'língua',
    region: 'Bulawayo e o Matabeleland, no Zimbábue',
    country: 'ZWE',
    emoji: '🇿🇼',
    summary: 'A língua dos ndebele do Zimbábue, que vieram da terra zulu no século XIX com Mzilikazi, muito próxima do zulu.',
    features: ['Muito próxima do zulu.', 'Uma das línguas oficiais do Zimbábue.'],
    examples: [['Salibonani!', 'Olá! (para várias pessoas)']],
  },
];
