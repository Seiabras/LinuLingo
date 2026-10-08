// Gerado por scripts/icones-palavras.mjs — não editar à mão (a lista é src/data/icones-mapa.ts).
// Ícones de acervos livres para as palavras sem foto nem pictograma do Mulberry Symbols. A chave
// segue a regra dos pictogramas (a cabeça da tradução em português, às vezes com a classe).
export type IconSource = "openmoji" | "gameicons" | "tabler" | "lucide" | "material";

export interface WordIcon {
  src: number;
  /** o ícone: acervo:nome */
  id: string;
  source: IconSource;
  /** o autor, quando o acervo credita por ícone (game-icons.net) */
  author?: string;
}

/** Crédito de cada acervo (as licenças pedem nome, licença e link). */
export const ICON_CREDITS: Record<IconSource, { name: string; license: string; licenseUrl: string; page: string }> = {
  "openmoji": {
    "name": "OpenMoji",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "page": "https://openmoji.org"
  },
  "gameicons": {
    "name": "game-icons.net",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
    "page": "https://game-icons.net"
  },
  "tabler": {
    "name": "Tabler Icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/tabler/tabler-icons/blob/main/LICENSE",
    "page": "https://tabler.io/icons"
  },
  "lucide": {
    "name": "Lucide",
    "license": "ISC",
    "licenseUrl": "https://lucide.dev/license",
    "page": "https://lucide.dev"
  },
  "material": {
    "name": "Material Symbols (Google)",
    "license": "Apache 2.0",
    "licenseUrl": "https://www.apache.org/licenses/LICENSE-2.0",
    "page": "https://fonts.google.com/icons"
  }
};

const img: Record<string, number> = {
  "gameicons:delapouite/id-card": require('../../assets/icones/palavras/gameicons-delapouite-id-card.webp'),
  "lucide:id-card": require('../../assets/icones/palavras/lucide-id-card.webp'),
  "material:id_card": require('../../assets/icones/palavras/material-id-card.webp'),
  "openmoji:1F44B": require('../../assets/icones/palavras/openmoji-1f44b.webp'),
  "tabler:ampersand": require('../../assets/icones/palavras/tabler-ampersand.webp'),
};
const i = (id: string, author?: string): WordIcon => ({ src: img[id], id, source: id.slice(0, id.indexOf(':')) as IconSource, author });

export const WORD_ICONS: Record<string, WordIcon> = {
  "cartão de identidade": i("lucide:id-card"),
  "carteira de identidade": i("material:id_card"),
  "e": i("tabler:ampersand"),
  "nome": i("gameicons:delapouite/id-card", "Delapouite"),
  "tchau": i("openmoji:1F44B"),
};
