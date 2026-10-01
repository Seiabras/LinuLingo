import type { Accent } from '@/data/types';

/** Como chamar cada tipo de variedade nas frases (língua é feminino: «esta língua»). */
export const KIND: Record<Accent['kind'], { name: string; label: string; plural: string; este: string; o: string; tone: 'blue' | 'amber' | 'green' }> = {
  sotaque: { name: 'sotaque', label: 'Sotaque', plural: 'Sotaques', este: 'este sotaque', o: 'o sotaque', tone: 'blue' },
  dialeto: { name: 'dialeto', label: 'Dialeto', plural: 'Dialetos', este: 'este dialeto', o: 'o dialeto', tone: 'amber' },
  língua: { name: 'língua própria', label: 'Língua própria', plural: 'Línguas próprias', este: 'esta língua', o: 'a língua', tone: 'green' },
};

/** O que é cada coisa do seletor, em palavras simples (o botão ⓘ). */
export const VARIETY_INFO = {
  variante:
    'Uma variante nacional é o jeito do idioma num país, com norma própria: a escrita, parte do vocabulário e às vezes a gramática mudam, não só o som. Exemplo: o português de Portugal e o do Brasil, ou o francês do Quebec. Quem fala uma entende a outra.',
  padrao: 'O jeito de referência que o app ensina: o dos livros, dos jornais e da televisão do país principal do idioma.',
  sotaque:
    'Um sotaque muda só o som: a pronúncia e a melodia de uma região. As palavras e a gramática são as mesmas do resto do país. Exemplo: o carioca e o gaúcho falam o mesmo português com sons diferentes.',
  dialeto:
    'Um dialeto muda o som e também palavras e gramática, mas continua sendo o mesmo idioma: quem fala o padrão entende, com algum esforço. Exemplo: o espanhol portenho de Buenos Aires, com o “vos” no lugar do “tú”.',
  lingua:
    'Uma língua própria é outra língua falada no mesmo lugar, com gramática e história suas — não é um jeito de falar o idioma. Exemplo: o sámi na Suécia, o sardo na Itália. Por isso elas têm uma aba só delas.',
} as const;
