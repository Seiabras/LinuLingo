/**
 * Sem dependência de react-native (ao contrário de `direction.ts`), pra poder rodar em testes de
 * Node puro: é só lógica de string.
 */

/** Blocos Unicode de escritas da direita pra esquerda (árabe, hebraico, e as formas de apresentação delas). */
const RTL_RUN = /[֐-׿؀-ۿݐ-ݿހ-޿ࢠ-ࣿיִ-﷿ﹰ-﻿]+/g;

/**
 * Isola, pra fins de direção de texto (bidi), qualquer trecho em escrita árabe/hebraica dentro de um
 * texto em português — sem isso, o algoritmo bidi do navegador reordena as PALAVRAS EM PORTUGUÊS ao
 * redor da citação, porque as duas direções se intercalam sem isolamento (o mesmo problema que a
 * Wikipédia resolve com `<bdi>`). Envolve cada trecho com os caracteres Unicode de isolamento — FSI
 * (U+2068) antes, PDI (U+2069) depois —, que não aparecem na tela, só mudam como o navegador ordena o
 * texto ao redor. Pra português puro (a grande maioria do app) isto não muda nada, porque não há
 * nenhum trecho RTL pra isolar.
 */
export function isolateRtlRuns(text: string): string {
  return text.replace(RTL_RUN, (run) => `⁨${run}⁩`);
}
