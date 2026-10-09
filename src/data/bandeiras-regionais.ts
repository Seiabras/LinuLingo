/**
 * Bandeiras de regiões específicas (não o país inteiro) — pedido do Matheus (08/10/2026): quando o
 * app se refere a uma região específica dentro de um país (o exemplo dele foi a Catalunha), usar a
 * bandeira REGIONAL de verdade em vez da do país todo, sempre que ela existir oficialmente e for de
 * licença livre. Este arquivo é um registro PEQUENO e explícito: só as regiões que o app já cita
 * especificamente em alguma "língua própria" (`kind: 'língua'` em `src/data/*\/sotaques.ts`) ou
 * variante/dialeto (`src/data/*\/variantes.ts`) — não é um catálogo mundial de bandeiras regionais.
 *
 * O Unicode só tem bandeira de verdade (sequência de emoji) pra PAÍS (código ISO 3166-1 alfa-2);
 * bandeiras de região (Catalunha, País Basco, Galiza, Quebec, Sicília…) não têm emoji — por isso
 * cada uma aqui é desenhada em SVG inline por `RegionFlag.tsx` (geometria vetorial direta, sem
 * depender de arquivo de imagem externo), em vez de um emoji de bandeira (que mostraria a do país
 * errado ou, pra região, nada).
 *
 * Critério pra entrar aqui: (1) a região já é citada especificamente no app; (2) o desenho oficial
 * da bandeira (listras/faixas/cruzes, ou um brasão/figura simplificável sem perder o que a
 * identifica) dá pra reproduzir com confiança nas cores e proporções certas, confirmadas contra o
 * arquivo oficial do Wikimedia Commons e a licença dele. As 5 que tinham brasão/figura (Quebec,
 * Sicília, Sardenha, Córsega, Bretanha) entraram em 08/10/2026, depois de uma tentativa anterior
 * bloqueada por limite de taxa (429) do Wikimedia — ver PENDENTES.md pro histórico completo.
 */

export type BandeiraRegional =
  | { tipo: 'listras'; cores: string[] } // listras horizontais, mesma altura, de cima pra baixo
  | { tipo: 'faixa-diagonal'; fundo: string; faixa: string; largura: number } // faixa do canto superior esquerdo ao inferior direito; `largura` = fração da altura
  | { tipo: 'cruz-sobre-aspa'; fundo: string; aspa: string; cruz: string; larguraAspa: number; larguraCruz: number } // aspa (X) por baixo, cruz (+) por cima; larguras em fração da altura
  | { tipo: 'cruz-flor-de-lis'; fundo: string; cruz: string; flor: string } // cruz dividindo em 4 quadrantes, uma flor-de-lis simplificada em cada — Quebec
  | { tipo: 'diagonal-triscele'; superior: string; inferior: string; figura: string } // metade superior-direita × inferior-esquerda por uma diagonal; tríscele (cabeça + 3 pernas) no centro — Sicília
  | { tipo: 'cruz-mouros'; fundo: string; cruz: string; cabeca: string; bandana: string } // cruz fina dividindo em 4 quadrantes, uma cabeça de mouro simplificada em cada — Sardenha (Quatro Mouros)
  | { tipo: 'cabeca-mouro'; fundo: string; cabeca: string; bandana: string } // uma única cabeça de mouro grande, centrada — Córsega
  | { tipo: 'listras-arminhos'; clara: string; escura: string; numListras: number; arminho: string }; // listras horizontais alternadas + um quadrante (canto superior esquerdo) com arminhos — Bretanha

export interface RegiaoComBandeira {
  id: string;
  nome: string;
  bandeira: BandeiraRegional;
  /** ids de `Accent` (kind 'língua') que devem usar esta bandeira em vez da do país */
  usadaEm: string[];
  /** `code` de `LanguageVariant` (kind 'dialeto', em `variantes.ts`) que deve usar esta bandeira em vez da do país — caso diferente de `usadaEm` porque dialeto não é Accent */
  usadaEmDialeto?: string[];
  fonte: string;
  licenca: string;
}

export const BANDEIRAS_REGIONAIS: RegiaoComBandeira[] = [
  {
    id: 'catalunha',
    nome: 'Catalunha',
    // Senyera: brasão "Or, quatro barras de Gules" — campo de ouro com 4 barras vermelhas, 9
    // listras no total (5 de ouro, 4 vermelhas), começando e terminando em ouro
    bandeira: { tipo: 'listras', cores: ['#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09'] },
    usadaEm: ['es-catalan'],
    fonte: 'Wikipédia (inglês), "Flag of Catalonia", consultada em 08/10/2026',
    licenca: 'Símbolo oficial da Generalitat da Catalunha (adotado em 25/05/1933) — emblema de governo, de uso livre',
  },
  {
    id: 'pais-basco',
    nome: 'País Basco',
    // Ikurriña: campo vermelho, aspa (X) verde de canto a canto, cruz (+) branca por cima, de ponta
    // a ponta. Proporção oficial 14:25; larguras aproximadas (a fonte não deu a largura exata das
    // faixas, só a proporção geral da bandeira)
    bandeira: { tipo: 'cruz-sobre-aspa', fundo: '#D52B1E', aspa: '#009B48', cruz: '#FFFFFF', larguraAspa: 0.22, larguraCruz: 0.2 },
    usadaEm: ['es-basque', 'fr-basque'],
    fonte: 'Wikipédia (inglês), "Ikurrina", consultada em 08/10/2026',
    licenca: 'Bandeira oficial da Comunidade Autónoma do País Basco (adotada em 1936/1978) — emblema de governo, de uso livre; usada também, culturalmente, do lado francês do País Basco (Iparralde)',
  },
  {
    id: 'galiza',
    nome: 'Galiza',
    // Versão civil (sem o brasão, que tem elementos complexos demais pra reproduzir com confiança):
    // campo branco com faixa diagonal azul-celeste do canto superior esquerdo ao inferior direito,
    // largura = 1/4 da altura
    bandeira: { tipo: 'faixa-diagonal', fundo: '#FFFFFF', faixa: '#0099CC', largura: 0.25 },
    usadaEm: ['es-galician', 'pt-galego'],
    fonte: 'Wikipédia (inglês), "Flag of Galicia", consultada em 08/10/2026 (versão civil, sem o brasão institucional)',
    licenca: 'Símbolo oficial da Xunta da Galiza (Lei 5/1984) — emblema de governo, de uso livre',
  },
  {
    id: 'quebec',
    nome: 'Quebec',
    // Fleurdelisé: campo azul dividido em 4 quadrantes por uma cruz branca, uma flor-de-lis branca
    // simplificada (3 pétalas + faixa na base) centrada em cada quadrante. Cor e geometria da cruz
    // lidas direto do SVG oficial (grupo azul 0,0–4000,2400 de um canvas 9600×6400, cruz branca de
    // 1600 de espessura nos dois eixos, uma flor-de-lis por quadrante).
    bandeira: { tipo: 'cruz-flor-de-lis', fundo: '#003DA5', cruz: '#FFFFFF', flor: '#FFFFFF' },
    usadaEm: [],
    usadaEmDialeto: ['fr-CA'],
    fonte: 'Wikimedia Commons, arquivo "Flag_of_Quebec.svg", consultado em 08/10/2026',
    licenca: 'Domínio público (emblema oficial do governo do Quebec, adotado em 1948) — extmetadata do arquivo: "Public domain"',
  },
  {
    id: 'sicilia',
    nome: 'Sicília',
    // Metade superior-direita vermelha, metade inferior-esquerda amarela, divididas por uma
    // diagonal do canto superior-esquerdo ao inferior-direito (confirmado pelos 2 polígonos do SVG
    // oficial: vermelho em (0,0)-(W,0)-(W,H), amarelo em (0,0)-(0,H)-(W,H)). No centro, o tríscele —
    // uma cabeça com três pernas dobradas nos joelhos, em simetria de rotação de 120° — simplificado
    // numa única cor (o original tem rosto colorido e cobras no cabelo, detalhe fino demais pro
    // tamanho que este ícone é exibido no app).
    bandeira: { tipo: 'diagonal-triscele', superior: '#CE2B37', inferior: '#FFD700', figura: '#1F1A17' },
    usadaEm: ['it-lingua-siciliana'],
    fonte: 'Wikimedia Commons, arquivo "Flag_of_Sicily.svg", consultado em 08/10/2026',
    licenca: 'Domínio público (declarado pelo autor, Angelo Romano, no próprio arquivo) — extmetadata: "Public domain"',
  },
  {
    id: 'sardenha',
    nome: 'Sardenha',
    // Campo branco, cruz vermelha fina (Cruz de Alcoraz) de ponta a ponta, uma cabeça de mouro
    // simplificada (círculo preto + faixa branca na testa, a "bandana") em cada um dos 4 quadrantes
    // brancos — os Quatro Mouros. Geometria da cruz lida direto do SVG oficial (braços de ~59px de
    // espessura num campo de 895×600, centrados nos dois eixos).
    bandeira: { tipo: 'cruz-mouros', fundo: '#FFFFFF', cruz: '#D80000', cabeca: '#000000', bandana: '#FFFFFF' },
    usadaEm: ['it-lingua-sarda'],
    fonte: 'Wikimedia Commons, arquivo "Flag_of_Sardinia.svg", consultado em 08/10/2026',
    licenca: 'CC BY-SA 3.0 — extmetadata do arquivo: "CC BY-SA 3.0", autor: icnussa e colaboradores (derivado da bandeira oficial da Região Autónoma da Sardenha, 1999)',
  },
  {
    id: 'corsega',
    nome: 'Córsega',
    // Campo branco, uma única cabeça de mouro preta grande e centrada, com a faixa branca (bandana)
    // na testa — testa di Moru. Perfil simplificado (um pequeno nariz/queixo saliente de um lado,
    // pra não ficar só um círculo) em vez do desenho oficial completo (orelha, laço da bandana).
    bandeira: { tipo: 'cabeca-mouro', fundo: '#FFFFFF', cabeca: '#000000', bandana: '#FFFFFF' },
    usadaEm: ['fr-corse'],
    fonte: 'Wikimedia Commons, arquivo "Flag_of_Corsica.svg", consultado em 08/10/2026',
    licenca: 'CC0 (domínio público, declarado pela autora, Patricia.fidi) — extmetadata do arquivo: "CC0"',
  },
  {
    id: 'bretanha',
    nome: 'Bretanha',
    // Gwenn ha Du: 9 listras horizontais alternadas (5 pretas, 4 brancas, começando preta no topo —
    // confirmado pelos 5 retângulos pretos do SVG oficial, um canvas de 1350×900 dividido em 9 linhas
    // de 100px cada). No canto superior esquerdo (as primeiras 4 listras, ~45% da largura), um
    // quadrante branco com arminhos — losangos pretos pequenos, simplificação da "mouchetures
    // d'hermine" heráldica, que no original é um símbolo bem mais trabalhado (3 pontas + rabo).
    bandeira: { tipo: 'listras-arminhos', clara: '#FFFFFF', escura: '#000000', numListras: 9, arminho: '#000000' },
    usadaEm: ['fr-breton'],
    fonte: 'Wikimedia Commons, arquivo "Flag_of_Brittany.svg", consultado em 08/10/2026',
    licenca: 'CC BY-SA 4.0 — extmetadata do arquivo: "CC BY-SA 4.0", autor: GwenofGwened e versões anteriores do arquivo (derivado da bandeira histórica da província da Bretanha, 1532, popularizada em 1923)',
  },
];

/** A bandeira regional de um `Accent` (pelo id), se houver uma cadastrada — senão, `undefined`. */
export function bandeiraRegionalDe(accentId: string): BandeiraRegional | undefined {
  return BANDEIRAS_REGIONAIS.find((r) => r.usadaEm.includes(accentId))?.bandeira;
}

/** A bandeira regional de um `LanguageVariant` (pelo `code`, ex. "fr-CA"), se houver uma cadastrada — senão, `undefined`. */
export function bandeiraRegionalDeDialeto(code: string): BandeiraRegional | undefined {
  return BANDEIRAS_REGIONAIS.find((r) => r.usadaEmDialeto?.includes(code))?.bandeira;
}
