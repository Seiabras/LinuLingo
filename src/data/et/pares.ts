import type { MinimalPairs } from '../types';

/** Pares mínimos do estoniano para quem fala português (pronúncia de referência: o estoniano padrão, o do norte). */
export const PARES_ET: MinimalPairs = {
  contrasts: [
    {
      id: 'q1-q2',
      name: 'quantidade curta × longa',
      sounds: ['a', 'aː'],
      tip: 'No estoniano, a duração do som muda o sentido: vogal curta (uma letra) × vogal longa (duas letras). Em português a gente estica a vogal só para dar ênfase; aqui, sada (cem) × saada! (mande!) são palavras diferentes. Conte o tempo: a vogal dupla dura quase o dobro.',
    },
    {
      id: 'q2-q3',
      name: 'quantidade longa × sobrelonga',
      sounds: ['aː', 'aːː'],
      tip: 'A famosa terceira quantidade: a sílaba sobrelonga é ainda mais comprida e a voz cai nela, enquanto na longa a voz ainda sobe um pouco para a sílaba seguinte. Muitas vezes a grafia é igual: saada! (mande!, longa) × saada (receber, sobrelonga); linna (da cidade, longa) × linna (para a cidade, sobrelonga). Escute a melodia, e não só a duração.',
    },
    {
      id: 'oclusiva',
      name: 'b/d/g × p/t/k',
      sounds: ['b̥', 'p'],
      tip: 'O “b”, o “d” e o “g” do estoniano não vibram a garganta: soam como um “p”, “t”, “k” curtos e moles. O “p”, “t”, “k” escrito é o mesmo som, só que mais longo e firme: kabi (casco) × kapi (do armário). Nada de sopro depois da consoante.',
    },
    {
      id: 'oclusiva-dupla',
      name: 'p/t/k × pp/tt/kk',
      sounds: ['p', 'pː'],
      tip: 'A consoante dobrada (pp, tt, kk) é ainda mais longa, e a sílaba fica sobrelonga: segure a boca fechada um instante antes de soltar. kapi (do armário) × kappi (para dentro do armário); koti (da sacola) × kotti (para dentro da sacola).',
    },
    {
      id: 'o-til-o',
      name: 'õ [ɤ] × o',
      sounds: ['ɤ', 'o'],
      tip: 'O “õ” estoniano não tem nada do nosso “õ” nasal: é um som sem nasal, com a língua na posição do “ô” e os lábios esticados, sem bico, como se você fosse dizer “ê” e “ô” ao mesmo tempo. No “o”, os lábios fazem bico: kõrv (orelha) × korv (cesto).',
    },
    {
      id: 'u-trema-u',
      name: 'ü [y] × u',
      sounds: ['y', 'u'],
      tip: 'O “ü” é um “i” com os lábios em bico, como o “u” do francês; o “u” é o nosso “u”: tüli (briga) × tuli (fogo); süsi (carvão) × susi (lobo).',
    },
    {
      id: 'a-trema-e',
      name: 'ä [æ] × e',
      sounds: ['æ', 'e'],
      tip: 'O “ä” é um “é” bem aberto, quase um “a”, com a boca bem aberta e a língua para a frente. O “e” é o nosso “ê” fechado: kära (barulho) × kera (bola, esfera). Se ficar em dúvida, abra mais a boca para o “ä”.',
    },
  ],
  pairs: [
    { contrast: 'q1-q2', a: ['sada', 'cem'], b: ['saada!', 'mande!, envie!'] },
    { contrast: 'q1-q2', a: ['kalu', 'peixes (partitivo)'], b: ['kaalu', 'do peso'] },
    { contrast: 'q1-q2', a: ['lina', 'linho'], b: ['linna', 'da cidade (genitivo)'] },
    { contrast: 'q1-q2', a: ['koli', 'tralha, cacarecos'], b: ['kooli', 'da escola (genitivo)'] },
    { contrast: 'q2-q3', a: ['saada!', 'mande! (longa)'], b: ['saada', 'receber, conseguir (sobrelonga)'] },
    { contrast: 'q2-q3', a: ['linna', 'da cidade (longa)'], b: ['linna', 'para a cidade (sobrelonga)'] },
    { contrast: 'q2-q3', a: ['kooli', 'da escola (longa)'], b: ['kooli', 'para a escola (sobrelonga)'] },
    { contrast: 'oclusiva', a: ['kabi', 'casco (de cavalo)'], b: ['kapi', 'do armário'] },
    { contrast: 'oclusiva-dupla', a: ['kapi', 'do armário (longa)'], b: ['kappi', 'para dentro do armário (sobrelonga)'] },
    { contrast: 'oclusiva-dupla', a: ['koti', 'da sacola (longa)'], b: ['kotti', 'para dentro da sacola (sobrelonga)'] },
    { contrast: 'oclusiva', a: ['lugu', 'história, caso'], b: ['luku', 'da fechadura'] },
    { contrast: 'o-til-o', a: ['kõrv', 'orelha'], b: ['korv', 'cesto'] },
    { contrast: 'o-til-o', a: ['tõru', 'bolota (fruto do carvalho)'], b: ['toru', 'cano, tubo'] },
    { contrast: 'u-trema-u', a: ['tüli', 'briga'], b: ['tuli', 'fogo'] },
    { contrast: 'u-trema-u', a: ['süsi', 'carvão'], b: ['susi', 'lobo'] },
    { contrast: 'a-trema-e', a: ['kära', 'barulho'], b: ['kera', 'bola, esfera'] },
    { contrast: 'a-trema-e', a: ['käär', 'curva, dobra'], b: ['keer', 'volta, giro'] },
  ],
  sameSound: [
    { words: [['tee', 'caminho, estrada'], ['tee', 'chá']], note: 'Mesma grafia e mesmo som, as duas sobrelongas: só o contexto separa. Até o genitivo coincide: “tee”.' },
    { words: [['tuli', 'fogo'], ['tuli', 'veio (passado de “tulema”, vir)']], note: 'O substantivo e o verbo soam iguais: “Tuli tuli” quer dizer “O fogo veio”.' },
    { words: [['palk', 'salário'], ['palk', 'tora, tronco']], note: 'Iguais no nominativo, mas se separam no genitivo: “palga” (do salário) × “palgi” (da tora).' },
  ],
};
