import type { LanguagePack } from '../types';
import { VOCAB_NOV } from './vocabulario';
import { UNITS_NOV } from './curriculo';
import { GRAMMAR_NOV } from './gramatica';
import { STORIES_NOV } from './historias';
import { COMMUNITY_NOV, ETYMOLOGY_NOV, JOURNAL_PROMPTS_NOV, SCENARIOS_NOV, SHADOWING_NOV } from './extras';
import { ALPHABET_NOV } from './alfabeto';

/**
 * Novial: a terceira língua CONSTRUÍDA do app com curso de verdade, depois do esperanto/
 * interlíngua e da "segunda leva" (ido, klingon, toki pona, lojban, volapük — pedido do Matheus,
 * 08/10/2026). Publicado em 1928 por Otto Jespersen, linguista dinamarquês que antes apoiava o ido.
 * Usa `lineage.family: 'Construída'`, a mesma convenção já prevista em `isArtificial()` (ver
 * `idiomas.ts`), pra aparecer no seletor "🤖 Artificiais" do Perfil.
 *
 * Diferente do esperanto (vocabulário em grande parte CRIADO por Zamenhof) e da interlíngua (só
 * românico/inglês), Jespersen misturou deliberadamente raízes latinas, francesas, inglesas E
 * germânicas (ex.: "hause", do alemão/inglês, ao lado de "familie", do latim) — buscando a palavra
 * mais "internacional" pra cada conceito, não uma família de línguas só.
 *
 * Fontes: Otto Jespersen, "An International Language" (1928, archive.org, item AILjespersen);
 * "Novial Lexike" (1930, dicionário oficial, via Wayback Machine de blahedo.org/novial, que caiu em
 * 2026); Wikipédia (inglês) "Novial"; curso Wikibooks "Novial" (fiel à gramática de Jespersen).
 * Nenhuma palavra inventada — todo item do vocabulário e cada regra de gramática vêm dessas fontes
 * (ver o cabeçalho de cada arquivo pra referência exata).
 */
export const NOVIAL: LanguagePack = {
  code: 'nov',
  name: 'Novial',
  nativeName: 'Novial',
  flag: '🧭',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares'],
    region: 'Publicada em 1928 por Otto Jespersen (linguista dinamarquês, antes apoiador do ido) — sem território próprio',
    writing: 'Alfabeto latino padrão: as mesmas 26 letras do português, sem nenhum acento ou diacrítico extra',
  },
  // BCP-47 na melhor tentativa ('nov' é o código ISO 639-3 real do novial). Sem voz nativa
  // conhecida em sintetizadores comuns — cai no padrão do app, mesmo tratamento dado ao esperanto e
  // à interlíngua.
  speechLocale: 'nov',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (2 unidades, ~99 palavras, 5 tópicos de gramática, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NOV,
  units: UNITS_NOV,
  etymology: ETYMOLOGY_NOV,
  community: COMMUNITY_NOV,
  scenarios: SCENARIOS_NOV,
  stories: STORIES_NOV,
  grammar: GRAMMAR_NOV,
  journalPrompts: JOURNAL_PROMPTS_NOV,
  shadowing: SHADOWING_NOV,
  specialChars: [],
  alphabet: ALPHABET_NOV,
  greeting: 'Bon jorne',
  sampleSentence: 'Bon jorne! Men nome es Linu. Nus parla Novial!',
  // "Let nus starta" é exemplo atestado do próprio Jespersen (AILinfimp.html, 1928): "let" + sujeito
  // + raiz do verbo é a forma imperativa de 1ª/3ª pessoa ("vamos...", "que ele...").
  phrases: { hi: 'Bon jorne!', thanks: 'Danka!', letsStart: ['Let nus starta!', 'Vamos começar!'] },
  formalMarkers:
    'O novial não tem uma distinção formal/informal documentada: "vu" serve pra "você", "tu" e o "você" formal, sempre igual — parecido com o esperanto ("vi" pra tudo) e diferente da interlíngua ("tu" × "vos").',
  cognateNote:
    'Jespersen buscou, pra cada conceito, a raiz que já fosse mais parecida entre inglês, francês e alemão — por isso o novial mistura raízes latinas/românicas (familie, grandi, aque) com raízes germânicas (hause, do alemão/inglês) numa mesma língua, diferente do esperanto (sobretudo românico/eslavo) e da interlíngua (só românico/inglês). Boa parte do vocabulário ainda assim se reconhece sem estudar: "familie", "grandi", "libre".',
};
