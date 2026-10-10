import type { LanguagePack } from '../types';
import { VOCAB_VO } from './vocabulario';
import { UNITS_VO } from './curriculo';
import { GRAMMAR_VO } from './gramatica';
import { STORIES_VO } from './historias';
import { COMMUNITY_VO, ETYMOLOGY_VO, JOURNAL_PROMPTS_VO, SCENARIOS_VO, SHADOWING_VO } from './extras';
import { ALPHABET_VO } from './alfabeto';

/**
 * Volapük: a segunda língua CONSTRUÍDA do app com curso de verdade, depois do esperanto (pedido do
 * Matheus, 08/10/2026 — "cria o equivalente (A1) para os outros idiomas artificiais"). Usa
 * `lineage.family: 'Construída'`, a mesma convenção do esperanto (ver `isArtificial()` em
 * `idiomas.ts`), pra aparecer no seletor "🤖 Artificiais" do Perfil.
 *
 * IMPORTANTE — qual forma do volapük: existem duas. A ORIGINAL de Johann Martin Schleyer
 * ("Volapük rigik", 1879/1880) e a REFORMADA de Arie de Jong ("Volapük nulik", publicada em 1931,
 * com o apoio do pequeno grupo de falantes que restava). Este pacote ensina a forma de DE JONG
 * (nulik), por duas razões: (1) é a forma mais viva hoje — usada na Wikipédia em volapük e nos
 * materiais modernos de ensino (Omniglot, andydrummond.net); (2) tem mais fonte aberta e confiável
 * disponível pra conferir cada palavra e regra, o que a forma original de Schleyer (só em livros de
 * 1880 difíceis de achar) não oferece. Essa escolha é a mesma recomendada pela pesquisa que embasou
 * este curso — ver o commit desta entrega pra fontes completas.
 *
 * Volapük é um idioma MAIS COMPLEXO que o esperanto em dois pontos centrais, por isso o vocabulário
 * aqui é mais compacto (as fontes confiáveis também são mais raras, com pouquíssimos falantes hoje):
 * (1) tem 4 casos gramaticais (nominativo, genitivo -a, dativo -e, acusativo -i), como o alemão/
 * latim; (2) a conjugação verbal é carregada de afixos — o mesmo verbo marca tempo (prefixo
 * vocálico: a-/ä-/e-/i-/o-/u-), voz (p- pra passiva) e pessoa (pronome colado na ponta) tudo junto;
 * a gramática oficial registra 1.584 formas possíveis pra um único verbo. Ver a aba Gramática.
 *
 * Fontes gerais: Wikipédia em inglês, "Volapük" (https://en.wikipedia.org/wiki/Volap%C3%BCk —
 * história, fonologia, casos, pronomes, tempos verbais); Comprehensive Volapük Grammar, Wikisource
 * (https://en.wikisource.org/wiki/Comprehensive_Volap%C3%BCk_Grammar/Part_1); Hand-book of Volapük,
 * de Charles E. Sprague, 1888, Wikisource (vocabulário); Omniglot, "Useful phrases in Volapük"
 * (https://www.omniglot.com/language/phrases/volapuk.php); andydrummond.net/Volapuk (vocabulário);
 * Public Domain Review, "Trüth, Beaüty, and Volapük" (etimologia das raízes disfarçadas); Wikipédia
 * em português, "Volapük" (https://pt.wikipedia.org/wiki/Volap%C3%BCk — mesmos fatos gerais, em
 * português).
 */
export const VOLAPUK: LanguagePack = {
  code: 'vo',
  name: 'Volapük',
  nativeName: 'Volapük',
  flag: '🌐',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares'],
    region: 'Criado em Baden (Alemanha), 1879/1880, pelo padre católico Johann Martin Schleyer; reformado por Arie de Jong em 1931 — hoje uma pequena comunidade, sem território próprio',
    writing: 'Alfabeto latino com três vogais próprias (ä, ö, ü, como no alemão), sem q, w, x, y',
  },
  // BCP-47 na melhor tentativa ('vo' é o código real, ISO 639-1). Não existe voz sintetizada nativa
  // de volapük em nenhum sintetizador comum — sem voz nativa, cai no padrão do app (mesmo tratamento
  // dado ao esperanto, em eo/index.ts, e a outros idiomas raros, como o nórdico antigo).
  speechLocale: 'vo',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (4 unidades, 9 tópicos de gramática, 4 histórias). O teto real do volapük no app é B1.4 (ver TETO-DOS-IDIOMAS.md): a Wikipédia em volapük é grande, mas quase toda gerada por robô, com pouco texto escrito por pessoas — por isso o critério do app só garante material confiável até o B1 (gramática de referência, dicionário e um corpus pequeno de textos, quase sem mídia atual). Faltam as quatro unidades B1 (B1.1 a B1.4), com vocabulário de viagem, saúde e opinião, e gramática mais avançada (comparação de adjetivos, orações relativas).',
  },
  vocab: VOCAB_VO,
  units: UNITS_VO,
  etymology: ETYMOLOGY_VO,
  community: COMMUNITY_VO,
  scenarios: SCENARIOS_VO,
  stories: STORIES_VO,
  grammar: GRAMMAR_VO,
  journalPrompts: JOURNAL_PROMPTS_VO,
  shadowing: SHADOWING_VO,
  specialChars: ['ä', 'ö', 'ü'],
  alphabet: ALPHABET_VO,
  greeting: 'Glidö',
  sampleSentence: 'Glidö! Nem oba binon Linu. Ob pükob Volapüki!',
  phrases: { hi: 'Glidö!', thanks: 'Danö!', letsStart: ['Golobsöz!', 'Vamos!'] },
  formalMarkers:
    'No volapük não existe distinção formal/informal nem singular/plural na segunda pessoa: "ol" serve pra "você", "tu" e "vocês", sempre igual — a mesma solução do esperanto ("vi").',
  cognateNote:
    'O vocabulário do volapük é bem menos transparente que o do esperanto: Johann Martin Schleyer pegava uma raiz, principalmente do inglês, e a disfarçava de propósito — cortando pra uma sílaba só e tirando letras (ele evitava o som "r" em toda a língua) — pra nenhuma nacionalidade ter vantagem por já conhecer a palavra. "love" (amar) virou "löf"; "paper" (papel) virou "pöp". A própria palavra "Volapük" nasce assim: "vol" (de "world", mundo) + "pük" (de "speak", fala).',
};
