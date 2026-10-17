/**
 * As tirinhas que abrem as unidades da Trilha da Biologia (ideia 9, aprovada pelo dono em 17/10/2026):
 * três quadrinhos com o Linu e os amigos dele. As falas só usam o que o app já diz com fonte: o `hi` e os
 * fatos de cada amigo (`amigos-linu.ts`) e as lições da unidade (`trilha.ts`). O Linu é um
 * pinguim-de-barbicha, Pygoscelis antarctica (`components/Linu.tsx`).
 */
export interface Quadrinho {
  /** 'linu' ou o id de um amigo */
  quem: string;
  fala: string;
}

export const TIRINHAS: Record<string, Quadrinho[]> = {
  'bio-frio': [
    { quem: 'imperador', fala: 'Sou o maior pinguim do mundo. No inverno, a gente fica juntinho para aguentar o frio.' },
    { quem: 'albatroz', fala: 'Acabei de dar uma volta enorme pelo oceano, quase sem bater as asas!' },
    { quem: 'linu', fala: 'Os dois são aves: penas, bico e ovos. Só que o Vento voa e o Tobias nada!' },
  ],
  'bio-nomes': [
    { quem: 'linu', fala: 'Todo bicho tem um nome científico, igual em todas as línguas. O meu é Pygoscelis antarctica!' },
    { quem: 'imperador', fala: 'O meu gênero é Aptenodytes: em grego, “mergulhador que não voa”.' },
    { quem: 'jubarte', fala: 'E o meu é Megaptera: “asa grande”, por causa das minhas nadadeiras compridíssimas.' },
  ],
};
