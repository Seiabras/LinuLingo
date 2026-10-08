/**
 * Artigo definido (o/a/os/as) dos nomes de país/território em português, para contrair certo com "em"
 * e "de": "na Romênia" (em+a), "nas Ilhas Faroe" (em+as), "no Brasil" (em+o), "em Cuba" (sem artigo).
 *
 * A maioria dos nomes de país em português corrente NÃO leva artigo nenhum ("em Cuba", "em Portugal",
 * "em Moçambique"...) — são a maioria dos ~250 nomes de `src/data/mapa-mundi.ts` (WORLD). "em X" cru
 * nunca está gramaticalmente errado; "na X"/"no X" quando X não pede artigo de fato é que pode estar
 * errado. Por isso a tabela abaixo só lista exceções confirmadas — tudo que não está aqui é tratado
 * como sem artigo (`null`), de propósito, por ser a opção mais segura.
 *
 * Fontes usadas para confirmar cada entrada (não é chute):
 * - Senado Federal, Manual de Comunicação da Secom, seção "Artigo definido"
 *   (https://www12.senado.leg.br/manualdecomunicacao/estilos/artigo-definido) — lista oficial de
 *   países com e sem artigo em português do Brasil; é a fonte mais extensa e a que prevalece em caso
 *   de conflito com as demais (ex.: "o Chipre", que outras fontes tratam como ainda em disputa).
 * - Ciberdúvidas da Língua Portuguesa, "O artigo definido e o nome dos países"
 *   (https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-artigo-definido-e-o-nome-dos-paises/11369).
 * - "a folha" (boletim de língua portuguesa da Direção-Geral da Tradução da Comissão Europeia),
 *   n.º 39, "Género dos topónimos", Jorge Madeira Mendes.
 * - O enunciado desta tarefa (Matheus, dono do projeto), que já confirmou "na Romênia", "nas Ilhas
 *   Faroe", "no Brasil", "nos Países Baixos", "nos Estados Unidos", "em Cuba", "em Portugal".
 *
 * Além das entradas com fonte direta, duas extensões de baixo risco, descritas e autorizadas pelo
 * próprio enunciado da tarefa ("a maioria... segue um padrão claro"):
 * 1. Nomes com estrutura de substantivo comum transparente (não é um nome arbitrário, é literalmente
 *    "República X", "Reino X", "Ilha(s) X", "Território(s) X", "Costa X"): o artigo concorda com esse
 *    substantivo-cabeça ("a República Dominicana", "o Reino Unido", "as Ilhas Faroe", "a Costa Rica").
 *    Só aplicado quando NÃO contradiz uma confirmação explícita em contrário (ex.: "Serra Leoa" e
 *    "Papua-Nova Guiné" são "Serra"/"Nova Guiné" na estrutura, mas o Senado confirma que não levam
 *    artigo — a fonte explícita vence o padrão estrutural).
 * 2. Nomes terminados em "-(i)stão" (Afeganistão, Cazaquistão, Paquistão, Turcomenistão, Tadjiquistão,
 *    Quirguistão, Uzbequistão): sempre masculino com artigo ("o"), padrão robusto e sem exceção
 *    conhecida em português — e "Afeganistão" já vem confirmado direto pelo Senado.
 * 3. Nomes plurais citados como exemplo do próprio padrão pelo enunciado da tarefa (Filipinas, como
 *    Países Baixos e Estados Unidos): artigo plural do gênero do nome ("as Filipinas").
 *
 * Ficam de fora, de propósito, nomes de -a átono "comuns" sem fonte (Austrália, Coreia do Sul,
 * Finlândia, Tailândia...): embora pareçam levar artigo no uso corrente, a terminação em "-a" indica
 * só o GÊNERO que o artigo teria SE existisse — não garante que o nome de fato peça artigo (prova:
 * "Angola", "Samoa" e "Cuba" terminam em "-a" e, confirmado pelas fontes acima, não levam artigo
 * nenhum). Sem confirmação explícita, o padrão de terminação é enganoso demais para usar aqui.
 */
export type ArtigoGeo = null | 'o' | 'a' | 'os' | 'as';

/**
 * Chave = `name` exatamente como aparece em `WORLD` (`src/data/mapa-mundi.ts`), mais os nomes de
 * `REGIOES_SEM_PAIS` (`src/services/aventura.ts`). Ausente da tabela = sem artigo (ver cabeçalho).
 */
export const ARTIGOS: Record<string, ArtigoGeo> = {
  // -- feminino singular (a) --------------------------------------------------------------------
  Rússia: 'a',
  China: 'a',
  'África do Sul': 'a',
  Albânia: 'a',
  Alemanha: 'a',
  'Arábia Saudita': 'a',
  Argélia: 'a',
  Argentina: 'a',
  Guatemala: 'a',
  Guiana: 'a',
  'Guiana Francesa': 'a',
  Guiné: 'a',
  'Guiné-Bissau': 'a',
  'Guiné Equatorial': 'a',
  Espanha: 'a',
  França: 'a',
  Romênia: 'a',
  Venezuela: 'a',
  Colômbia: 'a',
  Itália: 'a',
  Mauritânia: 'a',
  Nicarágua: 'a',
  'Nova Zelândia': 'a',
  'Nova Caledônia': 'a',
  Suécia: 'a',
  Zâmbia: 'a',
  Noruega: 'a',
  Bélgica: 'a',
  Hungria: 'a',
  Eslováquia: 'a',
  Groenlândia: 'a',
  'Costa Rica': 'a',
  'Costa do Marfim': 'a',
  'República Democrática do Congo': 'a',
  'República Centro-Africana': 'a',
  'República Dominicana': 'a',
  'Ilha Bouvet': 'a',
  'Ilha Christmas': 'a',
  'Ilha Norfolk': 'a',
  'Ilha de Man': 'a',
  'Ilha Heard e Ilhas McDonald': 'a',

  // -- masculino singular (o) --------------------------------------------------------------------
  Afeganistão: 'o',
  Cazaquistão: 'o',
  Paquistão: 'o',
  Turcomenistão: 'o',
  Tadjiquistão: 'o',
  Quirguistão: 'o',
  Uzbequistão: 'o',
  Butão: 'o',
  Chade: 'o',
  Chipre: 'o',
  Djibuti: 'o',
  Iêmen: 'o',
  Kiribati: 'o',
  Kuwait: 'o',
  Laos: 'o',
  Lesoto: 'o',
  Malaui: 'o',
  Mali: 'o',
  Níger: 'o',
  Senegal: 'o',
  Azerbaijão: 'o',
  Egito: 'o',
  Peru: 'o',
  Iraque: 'o',
  Chile: 'o',
  Japão: 'o',
  Paraguai: 'o',
  Vaticano: 'o',
  Irã: 'o',
  México: 'o',
  Panamá: 'o',
  Congo: 'o',
  Uruguai: 'o',
  Equador: 'o',
  Canadá: 'o',
  Brasil: 'o',
  'Reino Unido': 'o',
  'Território Britânico do Oceano Índico': 'o',

  // -- masculino plural (os) --------------------------------------------------------------------
  'Estados Unidos': 'os',
  'Emirados Árabes Unidos': 'os',
  'Países Baixos': 'os',
  'Territórios Franceses do Sul': 'os',

  // -- feminino plural (as) --------------------------------------------------------------------
  Bahamas: 'as',
  Filipinas: 'as',
  'Ilhas Faroe': 'as',
  'Ilhas Salomão': 'as',
  'Ilhas Malvinas (Falkland)': 'as',
  'Ilhas Åland': 'as',
  'Ilhas Cocos': 'as',
  'Ilhas Cook': 'as',
  'Ilhas Cayman': 'as',
  'Ilhas Marshall': 'as',
  'Ilhas Marianas do Norte': 'as',
  'Ilhas Turks e Caicos': 'as',
  'Ilhas Menores Distantes dos Estados Unidos': 'as',
  'Ilhas Virgens Britânicas': 'as',
  'Ilhas Virgens dos Estados Unidos': 'as',

  // -- regiões sem país (REGIOES_SEM_PAIS em src/services/aventura.ts) --------------------------
  Curdistão: 'o', // mesmo padrão "-stão" de Afeganistão/Cazaquistão etc.
};

/** O artigo definido de `nome` ('o'/'a'/'os'/'as'), ou `null` se o uso corrente não leva artigo. */
export function artigoDe(nome: string): ArtigoGeo {
  return ARTIGOS[nome] ?? null;
}

/** "na Romênia", "nas Ilhas Faroe", "no Brasil", "nos Países Baixos", "em Cuba" (sem artigo). */
export function emLocal(nome: string): string {
  switch (artigoDe(nome)) {
    case 'o':
      return `no ${nome}`;
    case 'a':
      return `na ${nome}`;
    case 'os':
      return `nos ${nome}`;
    case 'as':
      return `nas ${nome}`;
    default:
      return `em ${nome}`;
  }
}

/** "da Romênia", "das Ilhas Faroe", "do Brasil", "dos Países Baixos", "de Cuba" (sem artigo). */
export function deLocal(nome: string): string {
  switch (artigoDe(nome)) {
    case 'o':
      return `do ${nome}`;
    case 'a':
      return `da ${nome}`;
    case 'os':
      return `dos ${nome}`;
    case 'as':
      return `das ${nome}`;
    default:
      return `de ${nome}`;
  }
}
