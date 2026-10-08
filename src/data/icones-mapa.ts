// Ícones (OpenMoji, game-icons.net, Tabler, Lucide, Material Symbols) para as palavras do vocabulário
// sem foto nem pictograma do Mulberry Symbols: a chave segue a regra de src/data/pictogramas-mapa.ts
// (a cabeça da tradução em português; com «#classe» só para essa classe; ou a tradução inteira) e o
// valor é acervo:nome. Lista escolhida à mão, conceito por conceito: só entra o ícone que mostra o
// sentido de fato; o resto fica com o cartão da palavra (src/components/WordCard.tsx).
// Depois de mudar: npx tsx scripts/icones-palavras.mjs (gera src/data/icones-palavras.ts).
export const ICON_MAP: Record<string, string> = {
  "tchau": "openmoji:1F44B",
  "nome": "gameicons:delapouite/id-card",
  "e": "tabler:ampersand",
  "cartão de identidade": "lucide:id-card",
  "carteira de identidade": "material:id_card",
};
