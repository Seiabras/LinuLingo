import type { LanguagePack } from '../types';
import { VOCAB_IA } from './vocabulario';
import { UNITS_IA } from './curriculo';
import { GRAMMAR_IA } from './gramatica';
import { STORIES_IA } from './historias';
import { COMMUNITY_IA, ETYMOLOGY_IA, JOURNAL_PROMPTS_IA, SCENARIOS_IA, SHADOWING_IA } from './extras';
import { ALPHABET_IA } from './alfabeto';

/**
 * Interlíngua (IALA): a segunda língua CONSTRUÍDA do app com curso de verdade, depois do esperanto
 * (pedido do Matheus, 08/10/2026 — "cria o equivalente (A1) para os outros idiomas artificiais").
 * Usa `lineage.family: 'Construída'`, a mesma convenção já prevista em `isArtificial()` (ver
 * `idiomas.ts`), pra aparecer no seletor "🤖 Artificiais" do Perfil ao lado do esperanto.
 *
 * Diferente do esperanto (vocabulário em grande parte CRIADO por Zamenhof, mesmo vindo de raízes
 * europeias), a interlíngua não inventa palavra nenhuma: cada entrada do vocabulário passou pela
 * "prototipagem" da IALA (International Auxiliary Language Association) — só entra na língua se
 * aparecer, reconhecível, em pelo menos 3 das 4 línguas de controle (inglês, francês, italiano,
 * espanhol/português), com alemão e russo como apoio secundário. O resultado é lido quase sem
 * estudo por quem já fala português.
 */
export const INTERLINGUA: LanguagePack = {
  code: 'ia',
  name: 'Interlíngua',
  nativeName: 'Interlingua',
  flag: '🌍',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares'],
    region: 'Publicada em 1951 pela IALA (International Auxiliary Language Association, fundada em Nova York em 1924), depois de quase três décadas comparando o vocabulário do inglês, francês, italiano e espanhol/português — sem território próprio',
    writing: 'Alfabeto latino padrão: as mesmas 26 letras do português, sem nenhum acento ou diacrítico extra',
  },
  // BCP-47 na melhor tentativa ('ia' é o código real, ISO 639-1). O eSpeak NG tem uma voz de
  // interlíngua (confirmado em espeak-ng/docs/languages.md, código "ia", família "Constructed"),
  // mas — como no esperanto — a cobertura em aparelhos comuns é inconsistente; sem voz nativa, cai
  // no padrão do app.
  speechLocale: 'ia',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'O A1 e o A2 completos (4 unidades, ~140 palavras, 8 tópicos de gramática, 4 histórias). O teto deste idioma é B2 (ver TETO-DOS-IDIOMAS.md): falta o B1 inteiro e o B2 inteiro pra fechar o curso — os tempos do passado (perfeito, imperfeito), mais vocabulário e mais histórias/cenários chegam nas próximas atualizações.',
  },
  vocab: VOCAB_IA,
  units: UNITS_IA,
  etymology: ETYMOLOGY_IA,
  community: COMMUNITY_IA,
  scenarios: SCENARIOS_IA,
  stories: STORIES_IA,
  grammar: GRAMMAR_IA,
  journalPrompts: JOURNAL_PROMPTS_IA,
  shadowing: SHADOWING_IA,
  specialChars: [],
  alphabet: ALPHABET_IA,
  greeting: 'Bon die',
  sampleSentence: 'Bon die! Mi nomine es Linu. Nos parla Interlingua!',
  phrases: { hi: 'Bon die!', thanks: 'Gratias!', letsStart: ['Nos comencia!', 'Vamos começar!'] },
  formalMarkers:
    'A interlíngua tem uma distinção real de registro: "tu" é informal (amigos, crianças, poesia) e "vos" é a forma formal — que também serve de plural ("vocês"), sem mudar de forma nos dois casos. É bem diferente do esperanto, que só tem "vi" pra tudo.',
  cognateNote:
    'A interlíngua não inventa vocabulário: cada palavra só entra na língua se aparecer, reconhecível, em pelo menos 3 das 4 línguas de controle da IALA (inglês, francês, italiano, espanhol/português). Por isso é a língua construída mais parecida com o português de todas no app — muita palavra se lê sem nunca ter estudado: "aqua", "familia", "grande", "parlar".',
};
