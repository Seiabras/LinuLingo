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
  return (wordNative: string, ctx: WordContext = {}): T | undefined => {
    const raw = clean(wordNative);
    if (!raw) return undefined;
    const n = withoutNotes(raw, ctx.target);
    if (opts.exclude?.has(raw) || opts.exclude?.has(n)) return undefined;
    byName ??= build();
    const names = byName;
    const get = (c: string) => (ctx.pos ? names.get(`${c}#${ctx.pos}`) : undefined) ?? names.get(c);
    const alts = (opts.loose ? looseAlternatives(raw) : queryAlternatives(raw, ctx.target)).filter((a) => !AMBIGUOUS.has(a));
    for (const c of [raw, n, ...alts]) {
      const v = get(c);
      if (v !== undefined) return v;
    }
    return undefined;
  };
}
