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
 * (04/10/2026, revista em 09/10/2026): «variante» é forma ESCRITA diferente da mesma língua;
 * «dialeto» é a variedade de um país ou de um grupo grande (pt-BR, pt-PT, pt-AO), com as exceções
 * que o dono decide (o barranquenho); «sotaque» é tudo o que fica dentro de um dialeto. O plano
 * idioma por idioma está em docs/variedades-por-idioma.md.
 */
export const VARIETY_INFO = {
  variante:
    'Uma variante é a mesma língua numa forma ESCRITA diferente: outro alfabeto, outra norma ortográfica, ou a romanização (escrita em letras latinas) de quem ainda não lê o alfabeto original. Exemplo: o bokmål e o nynorsk do norueguês, o cirílico e a escrita tradicional do mongol, o chinês em caracteres simplificados e tradicionais.',
  padrao: 'O jeito de referência que o app ensina: o dos livros, dos jornais e da televisão do país principal do idioma.',
  sotaque:
    'Um sotaque é o jeito de falar de uma região dentro de um dialeto. Muda sobretudo o som (a pronúncia e a melodia) e às vezes algumas palavras e expressões, mas a pessoa continua falando o mesmo dialeto do resto do país. Exemplo: o carioca e o gaúcho, dentro do português do Brasil.',
  dialeto:
    'Um dialeto é a variedade de um país inteiro ou de um grupo grande de falantes: o português do Brasil, o de Portugal e o de Angola; o francês do Quebec. A escrita é a mesma, mas a pronúncia, o vocabulário e às vezes a gramática mudam. Quem fala um entende o outro. Alguns falares menores também entram aqui quando são mais do que um sotaque, como o barranquenho, a mistura de português e espanhol da vila de Barrancos.',
  lingua:
    'Uma língua própria é outra língua falada no mesmo lugar, com gramática e história suas — não é um jeito de falar o idioma. Exemplo: o sámi na Suécia, o sardo na Itália. Por isso elas têm uma aba só delas.',
} as const;
