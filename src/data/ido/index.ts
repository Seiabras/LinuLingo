import type { LanguagePack } from '../types';
import { VOCAB_IDO } from './vocabulario';
import { UNITS_IDO } from './curriculo';
import { GRAMMAR_IDO } from './gramatica';
import { STORIES_IDO } from './historias';
import { COMMUNITY_IDO, ETYMOLOGY_IDO, JOURNAL_PROMPTS_IDO, SCENARIOS_IDO, SHADOWING_IDO } from './extras';
import { ALPHABET_IDO } from './alfabeto';

/**
 * Ido: a segunda língua CONSTRUÍDA do app com curso de verdade, depois do esperanto (pedido do
 * Matheus: “cria o equivalente (A1) para os outros idiomas artificiais”). Usa
 * `lineage.family: 'Construída'`, a mesma convenção do esperanto, prevista em `isArtificial()` (ver
 * `idiomas.ts`), pra aparecer no seletor “🤖 Artificiais” do Perfil.
 *
 * Código: `io`, o ISO 639-1 real do Ido (confirmado via ISO 639:io/LOC) — não `ido`, que é só o
 * 639-2/639-3. Seguimos a regra que o próprio projeto documenta em `types.ts`
 * (“LanguageInfo.code”): 639-1 de duas letras quando existe. O esperanto ('eo') já segue essa
 * mesma regra.
 */
export const IDO: LanguagePack = {
  code: 'io',
  name: 'Ido',
  nativeName: 'Ido',
  flag: '🧩',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares', 'Reforma do esperanto'],
    region: 'Criado em Paris, 1907, por um comitê (a Delegação para a Adoção de uma Língua Auxiliar Internacional, liderada por Louis Couturat, com Louis de Beaufront como autor principal) para reformar o esperanto — hoje falado por uma comunidade pequena, majoritariamente online',
    writing: 'Alfabeto latino comum, as mesmas 26 letras do português/inglês, SEM NENHUM diacrítico — os sons que o esperanto escreve com acento (ĉ, ĝ, ĥ, ĵ, ŝ) o Ido escreve com dígrafos (ch, sh) ou já tinha letra própria (j, h)',
  },
  // BCP-47 na melhor tentativa ('io' é o código ISO 639-1 real). Como o esperanto, o Ido não tem
  // voz sintetizada nativa confirmada em sintetizadores comuns — sem voz, cai no padrão do app
  // (mesmo tratamento dado ao esperanto e a outros idiomas raros, como o nórdico antigo).
  speechLocale: 'io',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (4 unidades, mais de 100 palavras, 9 tópicos de gramática, 4 histórias). O teto real do Ido no app é B1.4 (ver TETO-DOS-IDIOMAS.md): a Wikipédia em Ido tem bastante artigo, mas quase todos vieram de geração automática, não de pessoas escrevendo — por isso o critério do app só garante material confiável até o B1 (gramática e dicionário completos, mas pouca mídia atual). Faltam as quatro unidades B1 (B1.1 a B1.4), com vocabulário de viagem, saúde e opinião, e gramática mais avançada (participios, orações subordinadas com "ke").',
  },
  vocab: VOCAB_IDO,
  units: UNITS_IDO,
  etymology: ETYMOLOGY_IDO,
  community: COMMUNITY_IDO,
  scenarios: SCENARIOS_IDO,
  stories: STORIES_IDO,
  grammar: GRAMMAR_IDO,
  journalPrompts: JOURNAL_PROMPTS_IDO,
  shadowing: SHADOWING_IDO,
  specialChars: [],
  alphabet: ALPHABET_IDO,
  greeting: 'Saluto',
  sampleSentence: 'Saluto! Mea nomo esas Linu. Ni parolez Ido!',
  phrases: { hi: 'Saluto!', thanks: 'Danko!', letsStart: ['Ni komencez!', 'Vamos começar!'] },
  formalMarkers:
    'O Ido tem uma distinção formal/informal de verdade — diferente do esperanto, que só tem “vi” pra tudo. “Vu” é o “você” padrão, neutro, usado com qualquer pessoa (é o que este curso usa). “Tu” existe como forma íntima (“tu” da intimidade), mas é rara na prática. No plural, “vi” serve pra “vocês”.',
  cognateNote:
    'O Ido herdou a maior parte do vocabulário do próprio esperanto — que já tinha escolhido raízes latinas e das línguas românicas (como o português), fáceis de reconhecer por quem fala línguas europeias. Por isso muita palavra do Ido também é parecida com o português: “familio”, “granda”, “aquo”. A diferença mora nas palavras que o Ido reformou de propósito, como “matro” (mãe, raiz própria) em vez do “patrino” do esperanto (derivado de “patro”, pai).',
};
