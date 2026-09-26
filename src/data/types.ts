import type { CefrLevel, Cognate, PartOfSpeech, SubLevel } from '@/types';

export type Gender = 'm' | 'f' | 'n';

/** [palavra, tradução, classe, categoria, emoji, frase de exemplo, gênero] */
export type VocabRow = [string, string, PartOfSpeech, string, string | null, string, Gender?];

export interface VocabSeed {
  id: string;
  language: string;
  word_target: string;
  word_native: string;
  frequency_rank: number;
  part_of_speech: PartOfSpeech;
  category: string;
  emoji: string | null;
  example_sentence: string;
  gender: Gender | null;
}

export function buildVocab(language: string, rows: VocabRow[]): VocabSeed[] {
  return rows.map(([word_target, word_native, part_of_speech, category, emoji, example_sentence, gender], i) => ({
    id: `${language}-${String(i + 1).padStart(4, '0')}`,
    language,
    word_target,
    word_native,
    frequency_rank: i + 1,
    part_of_speech,
    category,
    emoji,
    example_sentence,
    gender: gender ?? null,
  }));
}

/** Card "Aprenda primeiro": história, cultura, gramática e guia de escrita. */
export interface CultureCardSeed {
  id: string;
  title: string;
  emoji: string;
  history: string;
  culture_tip: string;
  grammar_why: string;
  /** Exemplos da regra: [idioma alvo, tradução] */
  grammar_examples: [string, string][];
  /** Guia de caracteres: [letra, som aproximado, exemplo] */
  character_guide: [string, string, string][] | null;
}

export interface ClozeItem {
  /** Frase com ___ no lugar da palavra-chave */
  sentence: string;
  answer: string;
  options: string[];
  translation: string;
}

export interface VoiceChallenge {
  bot: string;
  botTranslation: string;
  /** Respostas aceitas (a primeira é o modelo mostrado como dica) */
  expected: string[];
  hint: string;
}

export type LessonKind = 'licao' | 'voz' | 'prova';

export interface LessonSeed {
  id: string;
  title: string;
  kind: LessonKind;
  /** Palavras (word_target) apresentadas na associação imersiva */
  words: string[];
  cloze: ClozeItem[];
  voice: VoiceChallenge;
  communityPrompt: string;
}

export interface UnitSeed {
  id: string;
  /** Subnível da trilha (A1.1 … C2) */
  level: SubLevel;
  cefr: CefrLevel;
  title: string;
  emoji: string;
  card: CultureCardSeed;
  lessons: LessonSeed[];
}

export interface EtymologySeed {
  word: string;
  root_word: string;
  origin_language: string;
  cognates: Cognate[];
  evolution_note: string;
  /** Um falante de português reconhece a palavra sem estudar */
  transparent: boolean;
}

export interface CommunitySeed {
  author_name: string;
  prompt: string;
  content: string;
  /** Correção de referência mostrada depois que o aluno envia a sua */
  reference: string;
}

export interface ScenarioTurn {
  bot: string;
  botTranslation: string;
  /** Palavras-chave que indicam uma resposta adequada */
  keywords: string[];
  /** Respostas-modelo sugeridas ao aluno */
  suggestions: string[];
  /** Palavras que quebram o registro pedido (ex.: "tu" num cenário formal) */
  registerBreakers?: string[];
}

export interface ScenarioSeed {
  id: string;
  title: string;
  emoji: string;
  cefr: CefrLevel;
  register: 'formal' | 'informal';
  persona: string;
  description: string;
  turns: ScenarioTurn[];
}

/** Escolha numa história: leva a outro nó, ou (se `wrong`) mostra a dica e fica no mesmo nó. */
export interface StoryChoice {
  text: string;
  translation: string;
  next?: string;
  /** Explicação quando a escolha mostra que o texto não foi entendido */
  wrong?: string;
}

export interface StoryNode {
  text: string;
  translation: string;
  emoji?: string;
  choices?: StoryChoice[];
  ending?: { tone: 'bom' | 'neutro'; title: string; message: string };
}

/** História interativa ramificada (TPR storytelling / escolha sua aventura). */
export interface StorySeed {
  id: string;
  /** História ambientada numa variante regional (ex.: ro-MD) */
  variant?: string;
  /** Subnível (A1.1 … C2) */
  level: SubLevel;
  cefr: CefrLevel;
  title: string;
  emoji: string;
  summary: string;
  cultural_context: string;
  start: string;
  nodes: Record<string, StoryNode>;
  /** Palavras-chave da história: [idioma alvo, tradução] */
  glossary: [string, string][];
}

/** Seção de um tópico de gramática: texto, tabela e/ou exemplos. */
export interface GrammarSection {
  heading?: string;
  text?: string;
  /** Tabela: cabeçalho + linhas */
  table?: { head: string[]; rows: string[][] };
  /** Exemplos: [idioma alvo, tradução] */
  examples?: [string, string][];
}

export interface GrammarQuiz {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

/** Tópico da aba Gramática, organizado por subnível. */
export interface GrammarTopic {
  id: string;
  level: SubLevel;
  title: string;
  emoji: string;
  summary: string;
  sections: GrammarSection[];
  /** Armadilhas típicas de quem fala português */
  pitfalls: string[];
  quiz: GrammarQuiz[];
}

/** Variante regional/nacional de um idioma (ex.: romeno da Moldávia, português de Portugal). */
export interface LanguageVariant {
  code: string;
  /** País principal (ISO alfa-3) */
  country: string;
  name: string;
  flag: string;
  summary?: string;
  card?: CultureCardSeed;
  /** Traços de pronúncia próprios */
  pronunciation?: string[];
  /** Diferenças de vocabulário: [padrão, variante, português, nota] */
  vocab?: [string, string, string, string?][];
  stories?: StorySeed[];
}

/** Classificação genealógica e geográfica, usada para agrupar o seletor de idiomas. */
export interface LanguageLineage {
  family: string; // ex.: 'Indo-europeu', 'Urálico'
  branches: string[]; // do mais geral ao mais específico
  region: string; // região de origem
  writing: string; // sistema de escrita
}

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  lineage: LanguageLineage;
}

export interface LanguagePack extends LanguageInfo {
  /** Locale para síntese e reconhecimento de voz */
  speechLocale: string;
  available: boolean;
  vocab: VocabSeed[];
  units: UnitSeed[];
  etymology: EtymologySeed[];
  community: CommunitySeed[];
  scenarios: ScenarioSeed[];
  stories: StorySeed[];
  grammar: GrammarTopic[];
  variants?: LanguageVariant[];
  /** Temas do diário: [pergunta no idioma, tradução] */
  journalPrompts: [string, string][];
  /** Transcrição fonética (IPA) por regras do idioma */
  ipa?: (text: string) => string;
  /** Frases para shadowing: [frase, tradução] */
  shadowing: [string, string][];
  /** Letras especiais para o teclado adaptado */
  specialChars: string[];
  /** Alfabeto inteiro em fileiras (idiomas de outro alfabeto): vira um teclado completo */
  keyboardRows?: string[][];
  /** Treino do alfabeto (idiomas de outro alfabeto) */
  alphabet?: AlphabetData;
  /** Falsos amigos com o português (idiomas próximos, como o espanhol) */
  falseFriends?: FalseFriend[];
  /** As áreas da língua (fonética, fonologia, morfologia…) aplicadas a este idioma */
  linguistics?: LinguisticsArea[];
  /** Saudação curta e frase de teste da voz */
  greeting: string;
  sampleSentence: string;
  /** Frases curtas do Linu no idioma: oi, obrigado e «vamos começar» (com tradução) */
  phrases: { hi: string; thanks: string; letsStart: [string, string] };
  /** Marcas do registro formal, citadas quando o aluno fala íntimo demais num cenário */
  formalMarkers: string;
  /** Texto da aba de vocabulário sobre o parentesco com o português */
  cognateNote: string;
}

/** As 7 áreas de estudo da língua. */
export type LingArea = 'fonetica' | 'fonologia' | 'morfologia' | 'sintaxe' | 'semantica' | 'pragmatica' | 'estilistica';

/** Uma área da língua aplicada a um idioma. */
export interface LinguisticsArea {
  area: LingArea;
  /** Uma frase: como esta área se manifesta neste idioma */
  summary: string;
  sections: GrammarSection[];
  /** Tópicos da aba Gramática que pertencem a esta área (ids) */
  topics: string[];
  quiz: GrammarQuiz[];
}

/** Falso amigo: a palavra parece portuguesa, mas quer dizer outra coisa. */
export interface FalseFriend {
  /** A palavra no idioma («exquisito») */
  word: string;
  /** O que ela quer dizer de verdade, em português («delicioso») */
  means: string;
  /** O que o brasileiro acha que é («esquisito») */
  looksLike: string;
  /** Como se diz em espanhol o que o brasileiro queria dizer («raro», «extraño») */
  forThat: string;
  emoji: string;
  /** Frase de exemplo [idioma, português] */
  example: [string, string];
}

/** Uma letra de outro alfabeto, para o treino. */
export interface AlphabetLetter {
  /** Maiúscula e minúscula: «Б б» */
  letter: string;
  ipa: string;
  /** Som curto para as opções do jogo («v», «tch») */
  short: string;
  /** Como soa, explicado para brasileiros */
  sound: string;
  /** Palavra de exemplo (com tônica) e tradução */
  example: [string, string];
  /** igual ao latim · parece latina mas é outra (falsa amiga) · nova */
  group: 'igual' | 'falsa' | 'nova';
}

export interface AlphabetData {
  letters: AlphabetLetter[];
  /** Palavras fáceis de ler depois de aprender as letras: [palavra, emoji, tradução] */
  readingWords: [string, string, string][];
}

/** Meta do núcleo de vocabulário por idioma (as palavras mais frequentes). */
export const VOCAB_TARGET_TOTAL = 4000;

/** Gravação de falante nativo (Lingua Libre / Wikimedia Commons). */
export interface AudioClip {
  src: number;
  file: string;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
}
