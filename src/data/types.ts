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
  /**
   * Taxonomia do dono do app (04/10/2026): «variante» é forma ESCRITA diferente da mesma língua
   * (bokmål × nynorsk, mongol cirílico × tradicional, chinês simplificado × tradicional, uma
   * escrita × sua romanização); «dialeto» muda por país/região, com diferenças bem documentadas,
   * mas na mesma escrita (português de Portugal × do Brasil). Sem valor, conta como 'dialeto' (é o
   * caso mais comum até aqui).
   */
  kind?: 'variante' | 'dialeto';
  summary?: string;
  card?: CultureCardSeed;
  /** Traços de pronúncia próprios */
  pronunciation?: string[];
  /** Diferenças de vocabulário: [padrão, variante, português, nota] */
  vocab?: [string, string, string, string?][];
  stories?: StorySeed[];
  /** Voz desta variante (ex.: es-AR); sem ela, vale a do idioma */
  speechLocale?: string;
  /** IPA com a pronúncia desta variante (ex.: [θ] na Espanha); sem ela, vale a do idioma */
  ipa?: (text: string) => string;
}

/**
 * Sotaque, dialeto ou língua regional (ex.: o sotaque baiano no português do Brasil, o andaluz no
 * espanhol, o napolitano na Itália). «sotaque» muda sobretudo a pronúncia e a melodia; «dialeto» muda
 * também palavras e gramática; «língua» é uma língua própria falada na mesma região (com gramática e
 * literatura suas; não é um sotaque do idioma), que se aprende aqui pelas frases, palavras e sons.
 */
export interface Accent {
  /** ex.: 'es-andaluz' */
  id: string;
  name: string;
  kind: 'sotaque' | 'dialeto' | 'língua';
  /** Onde se fala, em palavras: «Andaluzia, no sul da Espanha» */
  region: string;
  /** País principal (ISO 3166-1 alfa-3) */
  country: string;
  /** Onde, dentro do país (ISO 3166-2): pinta o minimapa e aparece ao tocar na região no mapa-múndi */
  subdivisions?: string[];
  /** Variante do idioma a que pertence (código de LanguageVariant, ex.: 'es-ES') */
  variant?: string;
  /**
   * O sotaque é a própria variante (o sueco da Finlândia, o islandês do Canadá): em vez de aparecer
   * duas vezes no seletor, ele entra nos detalhes da variante, com a pronúncia, o mapa e as gravações.
   */
  sameAsVariant?: string;
  /** Voz para os exemplos, se o aparelho tiver (ex.: 'es-AR'); sem ela, a do idioma */
  speechLocale?: string;
  /** IPA com a pronúncia deste sotaque, quando for diferente da variante (ex.: o seseo andaluz) */
  ipa?: (text: string) => string;
  emoji: string;
  /** 1–2 frases: o que marca este jeito de falar */
  summary: string;
  /** Traços de pronúncia, vocabulário e gramática, um por item */
  features: string[];
  /** Frases como se diz ali: [frase, tradução, pronúncia em IPA ou nota] */
  examples: [string, string, string?][];
  /** Palavras típicas: [palavra, o que quer dizer] */
  words?: [string, string][];
  /**
   * Onde estudar mais esta língua dentro do app: o curso próprio dela (o nheengatu tem o curso
   * 'yrl') ou a aba de línguas de sinais da Cultura (a Libras). Vira um botão no verbete.
   */
  estudarMais?: { curso: string } | { aba: 'sinais' };
}

/** Classificação genealógica e geográfica, usada para agrupar o seletor de idiomas. */
export interface LanguageLineage {
  family: string; // ex.: 'Indo-europeu', 'Urálico'
  branches: string[]; // do mais geral ao mais específico
  region: string; // região de origem
  writing: string; // sistema de escrita
}

export interface LanguageInfo {
  /**
   * Código do idioma. Regra do projeto (decisão do dono, 04/10/2026): a base é o ISO 639 — o 639-1
   * de duas letras quando existe, senão o 639-3 —, porque é o que as vozes, o `Intl`, o CLDR e o
   * Lingua Libre entendem. Onde o ISO não chega (variedades sem código próprio, como o talian; as
   * línguas de sinais e as línguas do mapa sem ISO), usa-se o glottocode do Glottolog (ex.:
   * `abai1241`), como em `src/data/linguas-glottolog.ts` e `src/data/linguas-sinais.ts`; entre os
   * pacotes, o guarani antigo (`oldp1258`). Trocar o código de um pacote que já existe pede uma
   * entrada em `src/database/codigos-renomeados.ts`, para o progresso salvo vir junto.
   */
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
  /**
   * Sentido de escrita do idioma-alvo (padrão: esquerda pra direita, sem precisar declarar): 'rtl'
   * é da direita pra esquerda (árabe, urdu…); 'ttb' é de cima pra baixo, em colunas da esquerda pra
   * direita (escrita mongol tradicional, manchu). Só a escrita do idioma-alvo muda de sentido — a
   * interface em português continua da esquerda pra direita; nunca espelha a tela inteira (ver
   * `src/services/direction.ts`).
   */
  direction?: 'rtl' | 'ttb';
  /**
   * Idioma em construção: só as unidades até este subnível existem — as de depois (e mais
   * vocabulário, gramática e histórias nas que já existem) chegam aos poucos. `note` aparece para
   * o aluno explicando o que falta.
   */
  incomplete?: { until: SubLevel; note: string };
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
  /**
   * Leitura para quem ainda não lê a escrita do idioma, mostrada acima da IPA: kana e romaji no
   * japonês («わたし は · watashi wa»), romanização revisada no coreano. Também vale como resposta
   * digitada (quem escreve em kana acerta a palavra em kanji).
   */
  reading?: (text: string) => string;
  /**
   * Som de uma letra sozinha, para o treino do alfabeto gerado (`alfabeto-auto.ts`), quando não é o
   * que `reading` daria: nos abjads a leitura vem de uma tabela de palavras, e uma letra que também é
   * palavra (و, «e» em árabe: «wa») precisa do valor da letra («w»), não do da palavra.
   */
  letterReading?: (letter: string) => string;
  /** Só a leitura digitável (kana no japonês), para aceitar respostas escritas sem kanji */
  typedReading?: (text: string) => string;
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
  /** Gêneros gramaticais do idioma (padrão: masculino, feminino e neutro) */
  genders?: ('m' | 'f' | 'n')[];
  /** Nome de cada gênero quando não é masculino/feminino/neutro (sueco: «comum (en)», «neutro (ett)») */
  genderNames?: Partial<Record<'m' | 'f' | 'n', string>>;
  /** As áreas da língua (fonética, fonologia, morfologia…) aplicadas a este idioma */
  linguistics?: LinguisticsArea[];
  /** Sotaques e dialetos regionais (aba Cultura e mapa) */
  accents?: Accent[];
  /** Pares mínimos: palavras que só mudam por um som difícil para o brasileiro */
  minimalPairs?: MinimalPairs;
  /** Como os bichos «falam» no idioma (onomatopeias) e o verbo de cada som */
  animalSounds?: AnimalSound[];
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
  /**
   * Palavra de exemplo (com tônica) e tradução. Fica de fora (`undefined`) só no grupo
   * 'internacional' quando ainda não há palavra do vocabulário cadastrada com a letra — melhor
   * faltar o exemplo do que inventar uma palavra ou um som que não existem.
   */
  example?: [string, string];
  /**
   * igual ao nosso alfabeto (mesmo som) · parece letra nossa mas é outra (falsa amiga) · nova
   * (o português não tem) · internacional (o alfabeto oficial do idioma lista a letra, mas ela só
   * aparece em palavras estrangeiras/nomes próprios/empréstimos — nunca em palavra nativa comum).
   */
  group: 'igual' | 'falsa' | 'nova' | 'internacional';
  /**
   * Formas conectadas de verdade (positional allography): a MESMA letra troca de glifo conforme a
   * posição na palavra (isolada/inicial/medial/final), do jeito que o árabe funciona em qualquer
   * fonte do sistema. Só o árabe usa este campo hoje — confirmado em 08/10/2026 que o hebraico NÃO
   * funciona assim: o abjad hebraico impresso não conecta letra com letra (só 5 letras — כ מ נ פ צ —
   * têm uma 2ª forma, usada no fim da palavra, já representada por um código Unicode à parte, tipo
   * ך/כ, sem precisar deste campo); e a letra cursiva hebraica/russa (escrita à mão) é um traçado
   * DIFERENTE por letra, não um reposicionamento da mesma forma — ver `AlphabetData.cursiveInfo`,
   * usado nesses casos em vez de `joining`. `initial`/`medial` ficam de fora para letras que não
   * conectam com a seguinte (nunca inventar presença onde a escrita não conecta).
   */
  joining?: { isolated: string; initial?: string; medial?: string; final: string };
}

export interface AlphabetData {
  letters: AlphabetLetter[];
  /** Palavras fáceis de ler depois de aprender as letras: [palavra, emoji, tradução] */
  readingWords: [string, string, string][];
  /**
   * Nota sobre a escrita cursiva (letra de mão) do idioma, pra escritas em que o cursivo NÃO é uma
   * forma reposicionada da mesma letra (isso seria `joining`, caso do árabe) e sim um traçado
   * visualmente diferente por letra — hebraico (כתב יד) e russo (письменный шрифт) são os dois casos
   * de hoje (08/10/2026). Só texto: o Unicode não tem um codepoint de "letra cursiva hebraica/
   * cirílica" (diferente do árabe, que tem Formas de Apresentação próprias) e o app não tem uma
   * fonte cursiva licenciada pra desenhar o traçado de verdade — melhor explicar em palavras do que
   * fingir um glifo que o celular vai renderizar igual ao impresso (ver PENDENTES.md).
   */
  cursiveInfo?: string;
}

/** Gravação de falante nativo (Lingua Libre / Wikimedia Commons). */
/** Gravação de um nativo de uma região, para ouvir o sotaque de verdade. */
export interface AccentVoice extends AudioClip {
  word: string;
  /** usuário do Lingua Libre */
  speaker: string;
  /** onde aprendeu a língua (como a pessoa escreveu) ou onde mora */
  place: string;
  how: 'aprendeu' | 'mora';
}

export interface AudioClip {
  src: number;
  file: string;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
}

/** Um contraste de sons que o brasileiro confunde (r × rr, ы × и, consoante simples × dupla…). */
export interface PhoneContrast {
  id: string;
  name: string;
  /** os dois sons em IPA */
  sounds: [string, string];
  /** o que muda na boca e por que o ouvido do brasileiro se engana */
  tip: string;
  /** a voz do aparelho em vez das gravações (quando os falantes gravados podem não fazer o contraste) */
  deviceVoice?: boolean;
  /** contraste de melodia (acento de altura do japonês) que a IPA do app não marca: os pares não caem em «soam igual» */
  prosodic?: boolean;
}

/** Duas palavras [palavra, sentido] que só mudam pelo contraste. */
export interface MinimalPair {
  contrast: string;
  a: [string, string];
  b: [string, string];
}

export interface MinimalPairs {
  contrasts: PhoneContrast[];
  pairs: MinimalPair[];
  /** armadilhas ao contrário: escritas diferentes que soam igual (vaca × baca, луг × лук) */
  sameSound?: { words: [[string, string], [string, string]]; note: string }[];
}

/** Um bicho e o som dele no idioma: «ham-ham», «Câinele latră.» (o id liga ao português, em bichos-pt.ts). */
export interface AnimalSound {
  id: string;
  emoji: string;
  /** o nome do bicho no idioma */
  animal: string;
  /** a onomatopeia no idioma */
  sound: string;
  /** frase com o verbo do som: «Câinele latră.» */
  verb: string;
  translation: string;
}
