/**
 * Bandeiras de regiões específicas (não o país inteiro) — pedido do Matheus (08/10/2026): quando o
 * app se refere a uma região específica dentro de um país (o exemplo dele foi a Catalunha), usar a
 * bandeira REGIONAL de verdade em vez da do país todo, sempre que ela existir oficialmente e for de
 * licença livre. Este arquivo é um registro PEQUENO e explícito: só as regiões que o app já cita
 * especificamente em alguma "língua própria" (`kind: 'língua'` em `src/data/*\/sotaques.ts`) — não é
 * um catálogo mundial de bandeiras regionais.
 *
 * O Unicode só tem bandeira de verdade (sequência de emoji) pra PAÍS (código ISO 3166-1 alfa-2);
 * bandeiras de região (Catalunha, País Basco, Galiza, Quebec, Flandres…) não têm emoji — por isso
 * cada uma aqui é descrita como forma geométrica (listras, faixa diagonal, cruz sobre aspa) com as
 * cores oficiais, desenhada em SVG por `RegionFlag.tsx`, em vez de um emoji de bandeira (que
 * mostraria a do país errado ou, pra região, nada).
 *
 * Critério pra entrar aqui: (1) a região já é citada especificamente no app; (2) o desenho oficial
 * da bandeira é geometria simples (listras/faixas/cruzes) que dá pra reproduzir com confiança nas
 * cores certas, sem depender de um arquivo de imagem de terceiro; bandeiras com brasão ou figura
 * complexa (leão, flor-de-lis, cabeça de mouro, tríscele) ficaram de fora — ver a pendência em
 * PENDENTES.md, seção "Bandeiras regionais", para a lista completa do que foi pesquisado e por que
 * não entrou ainda.
 */

export type BandeiraRegional =
  | { tipo: 'listras'; cores: string[] } // listras horizontais, mesma altura, de cima pra baixo
  | { tipo: 'faixa-diagonal'; fundo: string; faixa: string; largura: number } // faixa do canto superior esquerdo ao inferior direito; `largura` = fração da altura
  | { tipo: 'cruz-sobre-aspa'; fundo: string; aspa: string; cruz: string; larguraAspa: number; larguraCruz: number }; // aspa (X) por baixo, cruz (+) por cima; larguras em fração da altura

export interface RegiaoComBandeira {
  id: string;
  nome: string;
  bandeira: BandeiraRegional;
  /** ids de `Accent` (kind 'língua') que devem usar esta bandeira em vez da do país */
  usadaEm: string[];
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
];

/** A bandeira regional de um `Accent` (pelo id), se houver uma cadastrada — senão, `undefined`. */
export function bandeiraRegionalDe(accentId: string): BandeiraRegional | undefined {
  return BANDEIRAS_REGIONAIS.find((r) => r.usadaEm.includes(accentId))?.bandeira;
}
