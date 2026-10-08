import type { Accent } from '@/data/types';

/** Como chamar cada tipo de variedade nas frases (língua é feminino: «esta língua»). */
export const KIND: Record<Accent['kind'] | 'variante', { name: string; label: string; plural: string; este: string; o: string; tone: 'blue' | 'amber' | 'green' }> = {
  sotaque: { name: 'sotaque', label: 'Sotaque', plural: 'Sotaques', este: 'este sotaque', o: 'o sotaque', tone: 'blue' },
  dialeto: { name: 'dialeto', label: 'Dialeto', plural: 'Dialetos', este: 'este dialeto', o: 'o dialeto', tone: 'amber' },
  língua: { name: 'língua própria', label: 'Língua própria', plural: 'Línguas próprias', este: 'esta língua', o: 'a língua', tone: 'green' },
  // taxonomia do dono do app (04/10/2026): forma ESCRITA diferente da mesma língua (bokmål × nynorsk)
  variante: { name: 'variante', label: 'Variante', plural: 'Variantes', este: 'esta variante', o: 'a variante', tone: 'blue' },
};

/**
 * O que é cada coisa do seletor, em palavras simples (o botão ⓘ). Taxonomia do dono do app
 * (04/10/2026): «variante» é forma ESCRITA diferente da mesma língua; «dialeto» muda por
 * país/região, na mesma escrita, com diferenças bem documentadas (pode ser o país inteiro ou só
 * uma região dentro dele); «sotaque» muda só o som.
 */
export const VARIETY_INFO = {
  variante:
    'Uma variante é a mesma língua numa forma ESCRITA diferente: outro alfabeto, outra norma ortográfica, ou a romanização (escrita em letras latinas) de quem ainda não lê o alfabeto original. Exemplo: o bokmål e o nynorsk do norueguês, o cirílico e a escrita tradicional do mongol, o chinês em caracteres simplificados e tradicionais.',
  padrao: 'O jeito de referência que o app ensina: o dos livros, dos jornais e da televisão do país principal do idioma.',
  sotaque:
    'Um sotaque muda só o som: a pronúncia e a melodia de uma região. As palavras e a gramática são as mesmas do resto do país. Exemplo: o carioca e o gaúcho falam o mesmo português com sons diferentes.',
  dialeto:
    'Um dialeto muda por país ou região — pode ser o país inteiro (o português de Portugal e o do Brasil, o francês do Quebec) ou só uma região dentro dele (o espanhol portenho de Buenos Aires, com o “vos” no lugar do “tú”). A escrita é a mesma, mas palavras e às vezes a gramática mudam, não só o som. Quem fala um entende o outro.',
  lingua:
    'Uma língua própria é outra língua falada no mesmo lugar, com gramática e história suas — não é um jeito de falar o idioma. Exemplo: o sámi na Suécia, o sardo na Itália. Por isso elas têm uma aba só delas.',
} as const;
