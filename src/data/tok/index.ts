import type { LanguagePack } from '../types';
import { VOCAB_TOK } from './vocabulario';
import { UNITS_TOK } from './curriculo';
import { GRAMMAR_TOK } from './gramatica';
import { STORIES_TOK } from './historias';
import { COMMUNITY_TOK, ETYMOLOGY_TOK, JOURNAL_PROMPTS_TOK, SCENARIOS_TOK, SHADOWING_TOK } from './extras';
import { ALPHABET_TOK } from './alfabeto';

/**
 * Toki pona: a segunda língua CONSTRUÍDA do app com curso de verdade, depois do esperanto (pedido
 * do Matheus, 08/10/2026 — "cria o equivalente (A1) para os outros idiomas artificiais"). Usa
 * `lineage.family: 'Construída'`, a mesma convenção do esperanto, prevista em `isArtificial()` (ver
 * `idiomas.ts`), pra aparecer no seletor "🤖 Artificiais" do Perfil.
 *
 * Diferença importante em relação ao esperanto: o toki pona foi desenhado por Sonja Lang (Sonja
 * Elen Kisa) com um vocabulário TOTAL minúsculo de propósito — o livro oficial de 2014 tem só ~120
 * palavras principais (mais 3 sinônimos, por isso listas da comunidade somam ~123: "nimi pu"). Por
 * isso este pacote cobre praticamente todo o núcleo oficial da língua (124 palavras em
 * vocabulario.ts), mesmo sendo um idioma `incomplete` (só o nível A1 por enquanto, ver abaixo) —
 * não é um recorte pequeno de uma língua grande, é quase a língua inteira.
 */
export const TOKI_PONA: LanguagePack = {
  code: 'tok',
  name: 'Toki Pona',
  nativeName: 'toki pona',
  flag: '🌱',
  lineage: {
    family: 'Construída',
    branches: ['Minimalistas/filosóficas'],
    region: 'Criada em 2001 por Sonja Lang (Sonja Elen Kisa), no Canadá — como o esperanto, sem território próprio, falada por uma comunidade dispersa, hoje sobretudo on-line',
    writing:
      'Alfabeto latino reduzido: só 14 letras (a, e, i, j, k, l, m, n, o, p, s, t, u, w), sem b, c, d, f, g, h, q, r, v, x, y, z. Existe também o "sitelen pona", uma escrita logográfica não-oficial criada pela própria Sonja Lang (cada palavra tem um desenho/símbolo próprio), mas este curso ensina só a escrita latina.',
  },
  // BCP-47 na melhor tentativa ('tok' é o código ISO 639-3 real da língua). Não existe voz
  // sintetizada nativa pra toki pona em aparelhos comuns — sem voz própria, cai no padrão do app
  // (mesmo tratamento dado ao esperanto, o outro idioma construído).
  speechLocale: 'tok',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (2 unidades, 5 tópicos de gramática, 2 histórias) — mas o vocabulário já tem 124 palavras, cobrindo quase todo o núcleo oficial (nimi pu, ~120 a 123 palavras do livro de 2014). Da A2.1 em diante chegam mais lições de uso, não mais palavras novas.',
  },
  vocab: VOCAB_TOK,
  units: UNITS_TOK,
  etymology: ETYMOLOGY_TOK,
  community: COMMUNITY_TOK,
  scenarios: SCENARIOS_TOK,
  stories: STORIES_TOK,
  grammar: GRAMMAR_TOK,
  journalPrompts: JOURNAL_PROMPTS_TOK,
  shadowing: SHADOWING_TOK,
  specialChars: [],
  alphabet: ALPHABET_TOK,
  greeting: 'toki!',
  sampleSentence: 'toki! nimi mi li Linu. mi wile toki e toki pona!',
  phrases: { hi: 'toki!', thanks: 'pona!', letsStart: ['o toki e toki pona!', 'Vamos falar toki pona!'] },
  formalMarkers:
    'O toki pona não tem distinção formal/informal nem singular/plural na segunda pessoa: "sina" serve pra "você", "tu", "vocês" e o "você" formal, sempre igual — a mesma ausência de registro do esperanto, o outro idioma construído deste app. A língua também não tem uma palavra oficial pra "obrigado" nem "desculpa": quem fala precisa parafrasear (este app usa "pona!", um "que bom!" que funciona como agradecimento informal, mas não é uma tradução literal — é a convenção mais comum da comunidade).',
  cognateNote:
    'Ao contrário do esperanto (quase só raízes românicas), o vocabulário do toki pona vem de fontes bem variadas: inglês, tok pisin, japonês, finlandês, holandês, cantonês, croata, georgiano e francês acadiano, entre outras — Sonja Lang buscou sons e sentidos em línguas de famílias bem diferentes, não só europeias. Por isso quase nenhuma palavra do toki pona é "parecida" com o português de cara; veja a etimologia de cada uma na aba Vocabulário.',
};
