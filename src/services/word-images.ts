/**
 * A imagem de uma palavra do vocabulário vem da tradução em português (a mesma imagem serve a todos
 * os idiomas): primeiro a foto (src/data/fotos-palavras.ts), senão o pictograma
 * (src/data/pictogramas-palavras.ts), senão o emoji. Aqui fica só a comparação das traduções, sem
 * imagens, para o app (src/components/WordImage.tsx), os testes e os scripts que geram as imagens.
 *
 * A tradução costuma trazer notas: «queijo (juuston, juustoa)», «cachorro / cão», «banco (assento)».
 * O parêntese pode ser nota de gramática ou de uso (formas da palavra, «pl.», «perf.», «informal»),
 * que não muda o sentido, ou o sentido da palavra («assento», «dinheiro»), que muda: «banco
 * (assento)» não pode ganhar a foto do banco de dinheiro.
 */

/** O que se sabe da palavra além da tradução: a classe («verbo») e a palavra no idioma estudado. */
export interface WordContext {
  pos?: string | null;
  target?: string | null;
}

/** A tradução como chave das tabelas: minúsculas, apóstrofo reto, espaços simples. */
export function normalizeTranslation(s: string): string {
  return s.normalize('NFC').toLowerCase().replace(/’/g, "'").replace(/\s+/g, ' ').trim();
}
const clean = normalizeTranslation;

/** Rótulos de registro, uso, região e classe gramatical: não mudam o sentido. */
// prettier-ignore
const LABELS = new Set([
  'informal', 'formal', 'mais formal', 'muito formal', 'bem informal', 'coloquial', 'gíria', 'familiar', 'carinhoso', 'vulgar', 'pejorativo',
  'literário', 'formal ou literário', 'poético', 'antiquado', 'arcaico', 'regional', 'raro', 'neologismo', 'neologismo islandês', 'provérbio',
  'invariável', 'não varia', 'invariável no neutro', 'plural', 'singular', 'masculino', 'feminino', 'feminina', 'neutro', 'm e f', 'm/f',
  'advérbio', 'adjetivo', 'substantivo', 'verbo', 'conjunção', 'preposição', 'pronome', 'pronome relativo', 'interjeição', 'artigo', 'numeral',
  'partícula', 'relativo', 'reflexivo', 'ordinal', 'cardinal', 'coletivo', 'superlativo', 'comparativo', 'diminutivo', 'aumentativo',
  'brasil', 'no brasil', 'portugal', 'em portugal', 'muito usado em portugal', 'espanha', 'na espanha', 'américa latina', 'na américa latina',
  'méxico', 'argentina', 'siciliano', 'dito por homem', 'dito por mulher', 'vous', 'tu', 'você', 'com você', 'com tu',
]);

/** Palavras que, sozinhas no parêntese, só marcam a regência («ajudar (alguém)», «gostar (de)»). */
// prettier-ignore
const FUNCTION_WORDS = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas', 'com', 'para', 'pra', 'por', 'pelo', 'pela',
  'se', 'que', 'e', 'ou', 'alguém', 'algo', 'alguma', 'coisa', 'eu', 'ele', 'ela', 'nós', 'vós', 'vocês', 'eles', 'elas', 'me', 'te', 'lhe', 'lhes', 'si',
]);

/** Abreviaturas de gramática e de região («pl.», «perf.», «aux.», «+ dat.», «méx.»). */
const ABBREVIATION =
  /(^|[^\p{L}])(pl|sing|perf|imperf|aux|dat|acus|ac|gen|nom|part|lit|arg|méx|m|f|n|fem|masc|subst|adj|adv|abrev|tb|etc|urug|coloq|col|amér|am|parag|esp|subj|inf|pres|pret|fut|conj|intr|tr|refl)\./u;

/** Siglas e palavras estrangeiras que o português usa: «(de TV)» é sentido, não forma da palavra. */
// prettier-ignore
const LOANWORDS = new Set([
  'tv', 'cd', 'dvd', 'pc', 'rg', 'cnh', 'cpf', 'gps', 'sms', 'usb', 'wi-fi', 'wifi', 'internet', 'e-mail', 'email', 'chat', 'show', 'rock', 'jazz',
  'pop', 'funk', 'blog', 'app', 'web', 'site', 'download', 'upload', 'skate', 'surf', 'hip-hop', 'playlist', 'podcast', 'kit', 'ketchup', 'bacon',
  'pizza', 'hot', 'dog', 'fast', 'food', 'self-service', 'delivery', 'check-in', 'check-out', 'hobby', 'kiwi', 'karaokê', 'yoga', 'whisky', 'bar', 'ok',
]);

/**
 * Uma palavra que não parece portuguesa (uma forma do idioma estudado): letra que o português não
 * usa (ä, ø, å, ñ, ș, cirílico…), k/w/y, letra dobrada que ele não dobra (uu, tt, kk…) ou final que
 * ele não tem («tagit», «kom», «osts»).
 */
const foreignWord = (w: string) =>
  !LOANWORDS.has(w) &&
  (/[^a-záàâãéêíóôõúüç'-]/.test(w) ||
    /[kwy]/.test(w) ||
    /(aa|ii|uu|bb|dd|ff|gg|ll|mm|nn|pp|tt|vv)/.test(w) ||
    /[bcdfghjpqtv]$/.test(w) ||
    /[bcdfgklmprtvz]s$/.test(w));

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/** A palavra é uma forma da palavra estudada? «juuston» de «juusto», «hundar» de «hundur», «kommit» de «komma». */
const formOf = (w: string, target: string) => {
  const f = fold(w);
  const words = fold(target).split(/[^\p{L}]+/u);
  // as palavras curtas só contam sozinhas («ta», «gå»): «el perro» não faz «ela» virar forma de «el»
  const stems = words.filter((t) => t.length >= 3);
  return (stems.length ? stems : words.filter((t) => t.length === 2)).some((t) => f.startsWith(t.slice(0, 3)));
};

/** Regiões, nas notas de uso: «(Espanha: patatas fritas)», «(Cone Sul e Peru: palta)», «(Méx./Arg.)». */
// prettier-ignore
const REGIONS = new Set([
  'espanha', 'brasil', 'portugal', 'méxico', 'méx', 'arg', 'argentina', 'américa', 'amér', 'am', 'latina', 'latam', 'cone', 'sul', 'central',
  'peru', 'chile', 'cuba', 'porto', 'rico', 'canárias', 'colômbia', 'venezuela', 'caribe', 'urug', 'uruguai', 'parag', 'paraguai', 'galícia',
  'sicília', 'toscana', 'roma', 'transilvânia', 'quebec', 'bélgica', 'suíça', 'frança', 'lisboa', 'europa', 'parte', 'outros', 'países',
  'também', 'informal', 'formal', 'gíria', 'coloquial', 'na', 'fala', 'geralmente', 'falso', 'amigo',
]);

/**
 * O parêntese é só nota de gramática ou de uso? Decide o primeiro pedaço (antes de «:», «;» ou
 * «=»): formas da palavra no idioma estudado («juuston, juustoa»), abreviaturas («pl.», «perf.»),
 * «+», «≠», aspas, sufixos («-se»), rótulos («informal», «Brasil», «falso amigo»), regiões
 * («Espanha: patatas fritas») e regência («alguém», «de algo»). Um sentido em português
 * («assento», «de roupa», «o tempo de agora; …») não é nota. Com a palavra estudada (`target`), as
 * formas dela também contam («hunds, hundar» de «hundur»).
 */
export function isGrammarNote(inner: string, target?: string | null): boolean {
  const t = clean(inner).split(/[:;=]/)[0].trim();
  if (!t || ABBREVIATION.test(t) || /[+≠“”"“”[\]]/.test(t)) return true;
  if (/(^|\s)-\p{L}|\p{L}-(\s|,|$)/u.test(t)) return true; // “-se”, “-isc-”
  if (LABELS.has(t)) return true;
  const words = t.split(/[\s,/.]+/).filter(Boolean);
  const content = words.filter((w) => !FUNCTION_WORDS.has(w));
  if (!content.length) return true;
  if (content.every((w) => REGIONS.has(w) || LABELS.has(w))) return true;
  if (/\d/.test(t)) return false; // “(1/4)”, “(4º)”: sentido
  if (content.some((w) => w.length === 1)) return true; // “amigo (s)”, “o s é mudo”
  if (target && content.some((w) => formOf(w, target))) return true;
  return content.some(foreignWord);
}

/** A tradução em minúsculas, sem os parênteses que são só notas: «queijo (juuston, juustoa)» → «queijo». */
export function withoutNotes(s: string, target?: string | null): string {
  return clean(s.replace(/\(([^()]*)\)/g, (m, inner: string) => (isGrammarNote(inner, target) ? ' ' : m)));
}

/** «olá!» → «olá»; «¿qué?» → «qué» */
const trimPunctuation = (s: string) => s.replace(/^[¡¿“"'\s]+|[!?.…”"'\s]+$/g, '').trim();

/** Divide em alternativas: «cachorro / cão» → cachorro, cão; «feliz, contente» → feliz, contente. */
const split = (s: string) => s.split(/[/,;]/).map(trimPunctuation).filter(Boolean);

/** Só o primeiro sentido: o «;» separa sentidos diferentes da palavra estrangeira («mês; lua», «borracha; chiclete»). */
const firstSense = (s: string) => split(s.split(';')[0]);

/**
 * As alternativas de uma chave das tabelas de imagens: «cachorro / cão (pl. câini)» → cachorro,
 * cão. Vazio quando sobra um parêntese de sentido: «banco (assento)» e «banco (dinheiro)» não podem
 * virar o mesmo «banco».
 */
export function alternatives(s: string, target?: string | null): string[] {
  const t = withoutNotes(s, target);
  return t.includes('(') ? [] : split(t);
}

/**
 * As alternativas de uma tradução do vocabulário, para achar a foto: só as do primeiro sentido, e
 * nenhuma quando sobra um parêntese de sentido («queijo (juuston, juustoa)» → queijo; «banco
 * (assento)» → nada).
 */
export function queryAlternatives(s: string, target?: string | null): string[] {
  const t = withoutNotes(s, target);
  return t.includes('(') ? [] : firstSense(t);
}

/**
 * As alternativas do primeiro sentido ignorando também os parênteses de sentido, para os
 * pictogramas: a lista deles (src/data/pictogramas-mapa.ts) foi conferida à mão cabeça por cabeça,
 * com as exceções anotadas.
 */
export function looseAlternatives(s: string): string[] {
  return firstSense(clean(s.replace(/\([^()]*\)/g, ' ')));
}

/**
 * A «cabeça» da tradução, a chave dos pictogramas: a primeira alternativa, sem os parênteses
 * («comida (ruoan ou ruuan)» → «comida»; «banco (assento)» → «banco»; «cachorro / cão» → «cachorro»).
 */
export function translationHead(s: string): string {
  return looseAlternatives(s)[0] ?? '';
}

/**
 * Palavras portuguesas com mais de um sentido concreto (pena de ave e pena = dó; vela de cera e de
 * barco; quarto de dormir e 1/4): a imagem delas só vale para a tradução igual à chave, nunca como
 * alternativa de outra tradução («punição, pena» não ganha a foto da pena de ave).
 */
// prettier-ignore
export const AMBIGUOUS: ReadonlySet<string> = new Set([
  'pena', 'vela', 'quarto', 'presente', 'papagaio', 'caixa', 'grama', 'órgão', 'ramo', 'entrada', 'corredor', 'câncer', 'cabeça', 'botão',
  'prova', 'marca', 'vale', 'peso', 'cartão', 'sinal', 'lua', 'tinta', 'pilha', 'banco', 'manga', 'carta', 'folha', 'estação', 'conta', 'ponto',
  'capital', 'fonte', 'bolsa', 'cabo', 'pasta', 'massa', 'rede', 'nota', 'chave', 'copa', 'tela', 'prato', 'pé', 'pelo', 'cedo', 'bala', 'lima',
]);

/** As fotos são de coisas: «colar» (verbo) não pode ganhar a foto do colar, nem «presente» (adjetivo) a do presente. */
export const PHOTO_POS: ReadonlySet<string> = new Set(['substantivo', 'expressão']);

/**
 * Procura uma tradução numa tabela de imagens (chave = tradução em português, em minúsculas): a
 * tradução inteira, a mesma sem as notas, e então cada alternativa (as da tabela também valem:
 * «cachorro / cão» na tabela serve para «cão»). Uma chave pode valer só para uma classe de palavra
 * («quarto#numeral»), e ela vem antes da chave sem classe. Com `loose` (os pictogramas, conferidos à
 * mão), os parênteses de sentido também saem da tradução procurada, e as chaves valem inteiras;
 * `exclude` são as traduções que não usam a imagem da cabeça.
 */
export function makeImageLookup<T>(table: Record<string, T>, opts: { loose?: boolean; exclude?: ReadonlySet<string> } = {}) {
  const detailed = makeImageLookupDetailed(table, opts);
  return (wordNative: string, ctx: WordContext = {}): T | undefined => detailed(wordNative, ctx)?.value;
}

/** Como `makeImageLookup`, dizendo também se achou pela tradução inteira (`exact`) ou só por uma alternativa. */
export function makeImageLookupDetailed<T>(table: Record<string, T>, opts: { loose?: boolean; exclude?: ReadonlySet<string> } = {}) {
  let byName: Map<string, T> | null = null;
  const build = () => {
    const m = new Map<string, T>();
    const add = (k: string, v: T) => {
      if (k && !m.has(k)) m.set(k, v);
    };
    const entries = Object.entries(table).map(([key, v]) => {
      const i = key.lastIndexOf('#');
      return { k: i > 0 ? key.slice(0, i) : key, q: i > 0 ? key.slice(i) : '', v };
    });
    // primeiro as chaves inteiras, depois sem as notas, depois as alternativas: uma chave sempre
    // vence a de outra sem as notas ou a alternativa de outra, qualquer que seja a ordem da tabela
    for (const { k, q, v } of entries) add(clean(k) + q, v);
    for (const { k, q, v } of entries) add(withoutNotes(k) + q, v);
    // as fotos são de conceitos («cachorro / cão» serve para «cão»); as chaves dos pictogramas já
    // são as cabeças, e uma tradução inteira na lista («pipa, papagaio») vale só para ela mesma
    if (!opts.loose) for (const { k, q, v } of entries) for (const a of alternatives(k)) if (!AMBIGUOUS.has(a)) add(a + q, v);
    return m;
  };
  return (wordNative: string, ctx: WordContext = {}): { value: T; exact: boolean } | undefined => {
    const raw = clean(wordNative);
    if (!raw) return undefined;
    const n = withoutNotes(raw, ctx.target);
    if (opts.exclude?.has(raw) || opts.exclude?.has(n)) return undefined;
    byName ??= build();
    const names = byName;
    const get = (c: string) => (ctx.pos ? names.get(`${c}#${ctx.pos}`) : undefined) ?? names.get(c);
    const alts = (opts.loose ? looseAlternatives(raw) : queryAlternatives(raw, ctx.target)).filter((a) => !AMBIGUOUS.has(a));
    const tries = [raw, n, ...alts];
    for (let i = 0; i < tries.length; i++) {
      const v = get(tries[i]);
      if (v !== undefined) return { value: v, exact: i < 2 };
    }
    return undefined;
  };
}

/** Uma imagem que uma palavra pode mostrar: `id` identifica a figura (duas palavras com o mesmo `id` mostram a mesma). */
export interface ImageCandidate<T = unknown> {
  kind: 'foto' | 'picto' | 'icone' | 'emoji';
  id: string;
  /** a tradução é exatamente a chave da imagem (e não uma alternativa ou a cabeça): desempata uma disputa */
  exact: boolean;
  value: T;
}

/** A palavra do vocabulário, só no que importa para a imagem. */
export interface ImageWord {
  word_native: string;
  word_target?: string | null;
  part_of_speech?: string | null;
  emoji?: string | null;
  frequency_rank?: number | null;
}

/** A chave de uma palavra no resultado de `resolveUniqueImages`. */
export const imageWordKey = (w: ImageWord) => `${w.word_native}\u0001${w.part_of_speech ?? ''}\u0001${w.word_target ?? ''}`;

/** O conceito da palavra: a tradução sem as notas. Traduções iguais são a mesma palavra e podem dividir a imagem. */
export const imageConcept = (w: ImageWord) => withoutNotes(w.word_native, w.word_target);

/**
 * Cada palavra de um idioma com uma imagem só dela (decisão do dono do projeto: “oi” e “tchau” não
 * podem mostrar o mesmo pictograma). Cada conceito tem as suas imagens em ordem de preferência (foto,
 * pictograma, emoji); todos disputam primeiro a primeira escolha, depois a segunda, e assim por diante,
 * de modo que a primeira escolha de um sempre vence a segunda de outro. Numa disputa pela mesma
 * imagem, ganha a palavra mais frequente (menor `frequency_rank`: a que o aluno encontra primeiro,
 * como “oi” na primeira lição); no empate, a tradução que é exatamente a chave da imagem e então a
 * ordem alfabética. Quem fica sem nenhuma recebe `null`: o cartão da
 * palavra (src/components/WordCard.tsx), que é diferente para cada uma.
 */
export function resolveUniqueImages<T>(words: readonly ImageWord[], candidatesOf: (w: ImageWord) => ImageCandidate<T>[]): Map<string, ImageCandidate<T> | null> {
  const concepts = new Map<string, { cands: ImageCandidate<T>[]; rank: number; keys: string[] }>();
  for (const w of words) {
    const c = imageConcept(w);
    const rank = w.frequency_rank ?? Number.MAX_SAFE_INTEGER;
    const e = concepts.get(c);
    if (!e) concepts.set(c, { cands: candidatesOf(w), rank, keys: [imageWordKey(w)] });
    else {
      // traduções iguais com classes diferentes: vale a imagem da mais frequente
      if (rank < e.rank) Object.assign(e, { cands: candidatesOf(w), rank });
      e.keys.push(imageWordKey(w));
    }
  }
  const chosen = new Map<string, ImageCandidate<T> | null>();
  const taken = new Set<string>();
  let pending = [...concepts.keys()];
  for (let level = 0; pending.length; level++) {
    const claims = pending.filter((c) => concepts.get(c)!.cands[level]);
    for (const c of pending) if (!concepts.get(c)!.cands[level]) chosen.set(c, null);
    claims.sort((a, b) => {
      const A = concepts.get(a)!, B = concepts.get(b)!;
      return A.rank - B.rank || Number(B.cands[level].exact) - Number(A.cands[level].exact) || (a < b ? -1 : a > b ? 1 : 0);
    });
    pending = [];
    for (const c of claims) {
      const cand = concepts.get(c)!.cands[level];
      if (taken.has(cand.id)) pending.push(c);
      else {
        taken.add(cand.id);
        chosen.set(c, cand);
      }
    }
  }
  const out = new Map<string, ImageCandidate<T> | null>();
  for (const [c, e] of concepts) for (const k of e.keys) out.set(k, chosen.get(c) ?? null);
  return out;
}

/**
 * As imagens que uma palavra pode mostrar, em ordem de preferência: foto (só substantivos e
 * expressões), pictograma do Mulberry, ícone dos outros acervos, emoji. `photoId`/`pictoId`/`iconId`
 * dizem qual figura é (duas chaves podem apontar para a mesma). O app (src/components/WordImage.tsx)
 * e o teste da unicidade usam esta mesma função.
 */
export function makeImageCandidates<P, Q, I = never>(
  photos: Record<string, P>,
  pictos: Record<string, Q>,
  opts: { pictoExclude: ReadonlySet<string>; photoId: (p: P) => string; pictoId: (q: Q) => string; icons?: Record<string, I>; iconId?: (i: I) => string },
) {
  const photo = makeImageLookupDetailed(photos);
  const picto = makeImageLookupDetailed(pictos, { loose: true, exclude: opts.pictoExclude });
  // os ícones seguem a regra dos pictogramas (chaves conferidas à mão, cabeça por cabeça)
  const icon = opts.icons ? makeImageLookupDetailed(opts.icons, { loose: true }) : undefined;
  return (w: ImageWord): ImageCandidate<P | Q | I | string>[] => {
    const ctx = { pos: w.part_of_speech, target: w.word_target };
    const out: ImageCandidate<P | Q | I | string>[] = [];
    const p = !ctx.pos || PHOTO_POS.has(ctx.pos) ? photo(w.word_native, ctx) : undefined;
    if (p) out.push({ kind: 'foto', id: `foto:${opts.photoId(p.value)}`, exact: p.exact, value: p.value });
    const q = picto(w.word_native, ctx);
    if (q) out.push({ kind: 'picto', id: `picto:${opts.pictoId(q.value)}`, exact: q.exact, value: q.value });
    const i = icon?.(w.word_native, ctx);
    if (i && opts.iconId) out.push({ kind: 'icone', id: `icone:${opts.iconId(i.value)}`, exact: i.exact, value: i.value });
    if (w.emoji && w.emoji !== '🔤') out.push({ kind: 'emoji', id: `emoji:${w.emoji}`, exact: false, value: w.emoji });
    return out;
  };
}
