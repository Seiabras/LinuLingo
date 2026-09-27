/**
 * Palavras irmãs: a mesma ideia em várias línguas, agrupadas pela raiz de onde cada palavra veio.
 * Cada família tem uma raiz reconstruída do indo-europeu (quando há) e os ramos que descendem dela;
 * as palavras que vieram de OUTRA raiz ficam num grupo à parte (kin: false), para o aluno ver que
 * parecer não é ser parente («day» × «dia») e que não parecer não impede de ser («день» × «dia»).
 * Só etimologias bem estabelecidas (dicionários etimológicos de referência de cada língua).
 */

/** As línguas mostradas: as do app e duas de referência que o aluno costuma conhecer. */
export type KinLang = 'pt' | 'es' | 'it' | 'ro' | 'fr' | 'ru' | 'sv' | 'nb' | 'en';

export const KIN_LANGS: Record<KinLang, { name: string; flag: string; locale: string }> = {
  pt: { name: 'português', flag: '🇵🇹', locale: 'pt-PT' },
  es: { name: 'espanhol', flag: '🇪🇸', locale: 'es-ES' },
  it: { name: 'italiano', flag: '🇮🇹', locale: 'it-IT' },
  ro: { name: 'romeno', flag: '🇷🇴', locale: 'ro-RO' },
  fr: { name: 'francês', flag: '🇫🇷', locale: 'fr-FR' },
  ru: { name: 'russo', flag: '🇷🇺', locale: 'ru-RU' },
  sv: { name: 'sueco', flag: '🇸🇪', locale: 'sv-SE' },
  nb: { name: 'norueguês', flag: '🇳🇴', locale: 'nb-NO' },
  en: { name: 'inglês', flag: '🇬🇧', locale: 'en-GB' },
};

export interface KinGroup {
  /** o ramo e a forma de onde as palavras vieram: «Latim aqua», «Germânico *wulfaz» */
  label: string;
  words: Partial<Record<KinLang, string>>;
  /** false: de outra raiz (não descende da raiz da família) */
  kin: boolean;
}

export interface WordFamily {
  id: string;
  /** a ideia, em português */
  meaning: string;
  emoji: string;
  /** a raiz comum (reconstruída; o asterisco marca que não há registro escrito) */
  root: string | null;
  groups: KinGroup[];
  note?: string;
}

export const WORD_FAMILIES: WordFamily[] = [
  {
    id: 'agua',
    meaning: 'água',
    emoji: '💧',
    root: null,
    groups: [
      { label: 'Latim aqua (indo-europeu *h₂ékʷeh₂)', kin: true, words: { pt: 'água', es: 'agua', it: 'acqua', ro: 'apă', fr: 'eau' } },
      { label: 'Indo-europeu *wódr̥', kin: true, words: { ru: 'вода́', sv: 'vatten', nb: 'vann', en: 'water' } },
    ],
    note: 'Aqui há duas raízes diferentes, cada uma com a sua família. No romeno, o «qu» latino virou «p»: aqua → apă, equa → iapă (égua). Cuidado: o sueco e o norueguês «hav» não é água — quer dizer mar (veja a família do mar).',
  },
  {
    id: 'noite',
    meaning: 'noite',
    emoji: '🌙',
    root: 'Indo-europeu *nókʷts',
    groups: [
      { label: 'Latim noctem', kin: true, words: { pt: 'noite', es: 'noche', it: 'notte', ro: 'noapte', fr: 'nuit' } },
      { label: 'Germânico *nahts', kin: true, words: { sv: 'natt', nb: 'natt', en: 'night' } },
      { label: 'Eslavo *noktь', kin: true, words: { ru: 'ночь' } },
    ],
    note: 'No romeno, o «ct» latino virou «pt»: noctem → noapte, lactem → lapte, octo → opt.',
  },
  {
    id: 'coracao',
    meaning: 'coração',
    emoji: '❤️',
    root: 'Indo-europeu *ḱḗr',
    groups: [
      { label: 'Latim cor, cordis', kin: true, words: { pt: 'coração', es: 'corazón', it: 'cuore', fr: 'cœur' } },
      { label: 'Germânico *hertô', kin: true, words: { sv: 'hjärta', nb: 'hjerte', en: 'heart' } },
      { label: 'Eslavo *sьrdьce', kin: true, words: { ru: 'се́рдце' } },
      { label: 'Latim anima (alma)', kin: false, words: { ro: 'inimă' } },
    ],
    note: 'O romeno «inimă» vem do latim «anima», a alma: o coração como o lugar da alma. Do latim «cor» vêm também «cordial» e «de cor» (saber de coração).',
  },
  {
    id: 'nome',
    meaning: 'nome',
    emoji: '🏷️',
    root: 'Indo-europeu *h₁nómn̥',
    groups: [
      { label: 'Latim nomen', kin: true, words: { pt: 'nome', es: 'nombre', it: 'nome', ro: 'nume', fr: 'nom' } },
      { label: 'Germânico *namô', kin: true, words: { sv: 'namn', nb: 'navn', en: 'name' } },
      { label: 'Eslavo *jьmę', kin: true, words: { ru: 'и́мя' } },
    ],
  },
  {
    id: 'novo',
    meaning: 'novo',
    emoji: '✨',
    root: 'Indo-europeu *néwos',
    groups: [
      { label: 'Latim novus', kin: true, words: { pt: 'novo', es: 'nuevo', it: 'nuovo', ro: 'nou', fr: 'nouveau' } },
      { label: 'Germânico *niujaz', kin: true, words: { sv: 'ny', nb: 'ny', en: 'new' } },
      { label: 'Eslavo *novъ', kin: true, words: { ru: 'но́вый' } },
    ],
  },
  {
    id: 'tres',
    meaning: 'três',
    emoji: '3️⃣',
    root: 'Indo-europeu *tréyes',
    groups: [
      { label: 'Latim tres', kin: true, words: { pt: 'três', es: 'tres', it: 'tre', ro: 'trei', fr: 'trois' } },
      { label: 'Germânico *þrīz', kin: true, words: { sv: 'tre', nb: 'tre', en: 'three' } },
      { label: 'Eslavo *trьje', kin: true, words: { ru: 'три' } },
    ],
  },
  {
    id: 'dois',
    meaning: 'dois',
    emoji: '2️⃣',
    root: 'Indo-europeu *dwóh₁',
    groups: [
      { label: 'Latim duo', kin: true, words: { pt: 'dois', es: 'dos', it: 'due', ro: 'doi', fr: 'deux' } },
      { label: 'Germânico *twai', kin: true, words: { sv: 'två', nb: 'to', en: 'two' } },
      { label: 'Eslavo *dъva', kin: true, words: { ru: 'два' } },
    ],
  },
  {
    id: 'irmao',
    meaning: 'irmão',
    emoji: '👬',
    root: 'Indo-europeu *bʰréh₂tēr',
    groups: [
      { label: 'Latim frater', kin: true, words: { it: 'fratello', ro: 'frate', fr: 'frère' } },
      { label: 'Germânico *brōþēr', kin: true, words: { sv: 'bror', nb: 'bror', en: 'brother' } },
      { label: 'Eslavo *bratrъ', kin: true, words: { ru: 'брат' } },
      { label: 'Latim germanus (do mesmo sangue)', kin: false, words: { pt: 'irmão', es: 'hermano' } },
    ],
    note: 'O português e o espanhol trocaram «frater» por «germanus». O velho «frater» ficou em «frade» e «fraile» (o irmão de convento) e em «fraterno».',
  },
  {
    id: 'mae',
    meaning: 'mãe',
    emoji: '👩',
    root: 'Indo-europeu *méh₂tēr',
    groups: [
      { label: 'Latim mater', kin: true, words: { pt: 'mãe', es: 'madre', it: 'madre', fr: 'mère' } },
      { label: 'Germânico *mōdēr', kin: true, words: { sv: 'mor', nb: 'mor', en: 'mother' } },
      { label: 'Eslavo *mati', kin: true, words: { ru: 'мать' } },
      { label: 'Fala de criança («ma-ma»)', kin: false, words: { ro: 'mamă' } },
    ],
    note: 'O romeno «mamă», como o «mamma» italiano e o «mamá» espanhol, vem da fala dos bebês: em quase toda língua as primeiras sílabas são «ma», «pa» e «ta».',
  },
  {
    id: 'pai',
    meaning: 'pai',
    emoji: '👨',
    root: 'Indo-europeu *ph₂tḗr',
    groups: [
      { label: 'Latim pater', kin: true, words: { pt: 'pai', es: 'padre', it: 'padre', fr: 'père' } },
      { label: 'Germânico *fadēr', kin: true, words: { sv: 'far', nb: 'far', en: 'father' } },
      { label: 'Fala de criança: latim tata', kin: false, words: { ro: 'tată' } },
      { label: 'Fala de criança: eslavo *otьcь (de *atta)', kin: false, words: { ru: 'оте́ц' } },
    ],
    note: 'Lei de Grimm: onde o latim tem «p», o germânico tem «f» — pater → father, piscis → fish, pes → foot.',
  },
  {
    id: 'filha',
    meaning: 'filha',
    emoji: '👧',
    root: 'Indo-europeu *dʰugh₂tḗr',
    groups: [
      { label: 'Germânico *duhtēr', kin: true, words: { sv: 'dotter', nb: 'datter', en: 'daughter' } },
      { label: 'Eslavo *dъkti', kin: true, words: { ru: 'дочь' } },
      { label: 'Latim filia', kin: false, words: { pt: 'filha', es: 'hija', it: 'figlia', ro: 'fiică', fr: 'fille' } },
    ],
  },
  {
    id: 'dente',
    meaning: 'dente',
    emoji: '🦷',
    root: 'Indo-europeu *h₃dónts',
    groups: [
      { label: 'Latim dens, dentem', kin: true, words: { pt: 'dente', es: 'diente', it: 'dente', ro: 'dinte', fr: 'dent' } },
      { label: 'Germânico *tanþs', kin: true, words: { sv: 'tand', nb: 'tann', en: 'tooth' } },
      { label: 'Eslavo *zǫbъ', kin: false, words: { ru: 'зуб' } },
    ],
    note: 'O russo «зуб» vem de outra raiz, a mesma do grego «gómphos» (cavilha, prego).',
  },
  {
    id: 'olho',
    meaning: 'olho',
    emoji: '👁️',
    root: 'Indo-europeu *h₃ekʷ-',
    groups: [
      { label: 'Latim oculus', kin: true, words: { pt: 'olho', es: 'ojo', it: 'occhio', ro: 'ochi', fr: 'œil' } },
      { label: 'Germânico *augô', kin: true, words: { sv: 'öga', nb: 'øye', en: 'eye' } },
      { label: 'Eslavo *glazъ (bolinha, pedrinha)', kin: false, words: { ru: 'глаз' } },
    ],
    note: 'O russo antigo tinha «о́ко», irmão de «olho»; ficou na poesia e em ditados, e hoje se diz «глаз».',
  },
  {
    id: 'orelha',
    meaning: 'orelha',
    emoji: '👂',
    root: 'Indo-europeu *h₂ṓws',
    groups: [
      { label: 'Latim auricula', kin: true, words: { pt: 'orelha', es: 'oreja', it: 'orecchio', ro: 'ureche', fr: 'oreille' } },
      { label: 'Germânico *ausô', kin: true, words: { sv: 'öra', nb: 'øre', en: 'ear' } },
      { label: 'Eslavo *uxo', kin: true, words: { ru: 'у́хо' } },
    ],
  },
  {
    id: 'estrela',
    meaning: 'estrela',
    emoji: '⭐',
    root: 'Indo-europeu *h₂stḗr',
    groups: [
      { label: 'Latim stella', kin: true, words: { pt: 'estrela', es: 'estrella', it: 'stella', ro: 'stea', fr: 'étoile' } },
      { label: 'Germânico *sternô', kin: true, words: { sv: 'stjärna', nb: 'stjerne', en: 'star' } },
      { label: 'Eslavo *gvězda', kin: false, words: { ru: 'звезда́' } },
    ],
  },
  {
    id: 'lua',
    meaning: 'lua',
    emoji: '🌕',
    root: 'Indo-europeu *lówksneh₂ (a luminosa)',
    groups: [
      { label: 'Latim luna', kin: true, words: { pt: 'lua', es: 'luna', it: 'luna', ro: 'lună', fr: 'lune' } },
      { label: 'Eslavo *luna', kin: true, words: { ru: 'луна́' } },
      { label: 'Indo-europeu *méh₁n̥s (a que mede o tempo)', kin: false, words: { sv: 'måne', nb: 'måne', en: 'moon' } },
    ],
    note: 'O russo «луна́» é irmão do latim «luna». Já «moon» e «måne» vêm da raiz de «mês»: a lua marcava os meses.',
  },
  {
    id: 'sol',
    meaning: 'sol',
    emoji: '☀️',
    root: 'Indo-europeu *sóh₂wl̥',
    groups: [
      { label: 'Latim sol', kin: true, words: { pt: 'sol', es: 'sol', it: 'sole', ro: 'soare', fr: 'soleil' } },
      { label: 'Germânico *sōl, *sunnǭ', kin: true, words: { sv: 'sol', nb: 'sol', en: 'sun' } },
      { label: 'Eslavo *sъlnьce', kin: true, words: { ru: 'со́лнце' } },
    ],
    note: 'No romeno, o «l» latino entre vogais virou «r»: solem → soare, salem → sare, caelum → cer.',
  },
  {
    id: 'sal',
    meaning: 'sal',
    emoji: '🧂',
    root: 'Indo-europeu *sh₂éls',
    groups: [
      { label: 'Latim sal', kin: true, words: { pt: 'sal', es: 'sal', it: 'sale', ro: 'sare', fr: 'sel' } },
      { label: 'Germânico *saltą', kin: true, words: { sv: 'salt', nb: 'salt', en: 'salt' } },
      { label: 'Eslavo *solь', kin: true, words: { ru: 'соль' } },
    ],
  },
  {
    id: 'mar',
    meaning: 'mar',
    emoji: '🌊',
    root: 'Indo-europeu *móri',
    groups: [
      { label: 'Latim mare', kin: true, words: { pt: 'mar', es: 'mar', it: 'mare', ro: 'mare', fr: 'mer' } },
      { label: 'Eslavo *morje', kin: true, words: { ru: 'мо́ре' } },
      { label: 'Germânico *hafą', kin: false, words: { sv: 'hav', nb: 'hav' } },
      { label: 'Germânico *saiwiz', kin: false, words: { en: 'sea' } },
    ],
    note: 'O «hav» sueco e norueguês é o mar (não a água). A raiz *móri sobreviveu no inglês em «mermaid», a sereia (a «moça do mar»).',
  },
  {
    id: 'vento',
    meaning: 'vento',
    emoji: '🌬️',
    root: 'Indo-europeu *h₂weh₁- (soprar)',
    groups: [
      { label: 'Latim ventus', kin: true, words: { pt: 'vento', es: 'viento', it: 'vento', ro: 'vânt', fr: 'vent' } },
      { label: 'Germânico *windaz', kin: true, words: { sv: 'vind', nb: 'vind', en: 'wind' } },
      { label: 'Eslavo *větrъ', kin: true, words: { ru: 'ве́тер' } },
    ],
  },
  {
    id: 'neve',
    meaning: 'neve',
    emoji: '❄️',
    root: 'Indo-europeu *snóygʷʰos',
    groups: [
      { label: 'Latim nix, nivem', kin: true, words: { pt: 'neve', es: 'nieve', it: 'neve', fr: 'neige' } },
      { label: 'Germânico *snaiwaz', kin: true, words: { sv: 'snö', nb: 'snø', en: 'snow' } },
      { label: 'Eslavo *sněgъ', kin: true, words: { ru: 'снег' } },
      { label: 'Eslavo zapadati (cair)', kin: false, words: { ro: 'zăpadă' } },
    ],
    note: 'O romeno também tem «nea», do latim nivem, mais poético; no dia a dia se diz «zăpadă», de origem eslava.',
  },
  {
    id: 'dia',
    meaning: 'dia',
    emoji: '📅',
    root: 'Indo-europeu *dyew- (brilhar)',
    groups: [
      { label: 'Latim dies', kin: true, words: { pt: 'dia', es: 'día', ro: 'zi' } },
      { label: 'Latim diurnum (de dies)', kin: true, words: { it: 'giorno', fr: 'jour' } },
      { label: 'Eslavo *dьnь', kin: true, words: { ru: 'день' } },
      { label: 'Germânico *dagaz', kin: false, words: { sv: 'dag', nb: 'dag', en: 'day' } },
    ],
    note: 'Armadilha famosa: o inglês «day» parece «dia», mas NÃO é parente — vem de outra raiz. Já o russo «день», que nem parece, é.',
  },
  {
    id: 'porta',
    meaning: 'porta',
    emoji: '🚪',
    root: 'Indo-europeu *dʰwer-',
    groups: [
      { label: 'Eslavo *dvьrь', kin: true, words: { ru: 'дверь' } },
      { label: 'Germânico *durz', kin: true, words: { sv: 'dörr', nb: 'dør', en: 'door' } },
      { label: 'Latim porta (passagem)', kin: false, words: { pt: 'porta', es: 'puerta', it: 'porta', fr: 'porte' } },
      { label: 'Latim ostium', kin: false, words: { ro: 'ușă' } },
    ],
    note: 'A raiz *dʰwer- também deu o latim «foris», a porta de fora — de onde vêm «fora», «fuera» e «fuori». No romeno, «poartă» (de porta) é o portão.',
  },
  {
    id: 'casa',
    meaning: 'casa',
    emoji: '🏠',
    root: 'Indo-europeu *dṓm',
    groups: [
      { label: 'Eslavo *domъ', kin: true, words: { ru: 'дом' } },
      { label: 'Latim casa (cabana)', kin: false, words: { pt: 'casa', es: 'casa', it: 'casa', ro: 'casă' } },
      { label: 'Latim mansio (pousada)', kin: false, words: { fr: 'maison' } },
      { label: 'Germânico *hūsą', kin: false, words: { sv: 'hus', nb: 'hus', en: 'house' } },
    ],
    note: 'O russo «дом» é irmão do latim «domus», que no português ficou em «doméstico» e «domicílio». Em latim, «casa» era só uma cabana.',
  },
  {
    id: 'lobo',
    meaning: 'lobo',
    emoji: '🐺',
    root: 'Indo-europeu *wĺ̥kʷos',
    groups: [
      { label: 'Latim lupus', kin: true, words: { pt: 'lobo', es: 'lobo', it: 'lupo', ro: 'lup', fr: 'loup' } },
      { label: 'Germânico *wulfaz', kin: true, words: { nb: 'ulv', en: 'wolf' } },
      { label: 'Eslavo *vьlkъ', kin: true, words: { ru: 'волк' } },
      { label: 'Nórdico antigo vargr (o fora da lei)', kin: false, words: { sv: 'varg' } },
    ],
    note: 'O sueco trocou «ulv» por «varg» (o bandido, o fora da lei), talvez por tabu: dizer o nome do bicho podia chamá-lo.',
  },
  {
    id: 'peixe',
    meaning: 'peixe',
    emoji: '🐟',
    root: 'Indo-europeu *peysk-',
    groups: [
      { label: 'Latim piscis', kin: true, words: { pt: 'peixe', es: 'pez', it: 'pesce', ro: 'pește', fr: 'poisson' } },
      { label: 'Germânico *fiskaz', kin: true, words: { sv: 'fisk', nb: 'fisk', en: 'fish' } },
      { label: 'Eslavo *ryba', kin: false, words: { ru: 'ры́ба' } },
    ],
    note: 'Lei de Grimm de novo: «p» latino, «f» germânico (piscis → fish).',
  },
  {
    id: 'rato',
    meaning: 'rato (camundongo)',
    emoji: '🐭',
    root: 'Indo-europeu *múh₂s',
    groups: [
      { label: 'Germânico *mūs', kin: true, words: { sv: 'mus', nb: 'mus', en: 'mouse' } },
      { label: 'Eslavo *myšь', kin: true, words: { ru: 'мышь' } },
      { label: 'Latim sorex (musaranho)', kin: false, words: { ro: 'șoarece', fr: 'souris' } },
      { label: 'Latim talpa (toupeira)', kin: false, words: { it: 'topo' } },
      { label: 'Origem incerta', kin: false, words: { pt: 'rato', es: 'ratón' } },
    ],
    note: 'O latim «mus» sumiu das línguas românicas, mas ficou em «músculo»: musculus era o «ratinho» que se mexe debaixo da pele.',
  },
  {
    id: 'comer',
    meaning: 'comer',
    emoji: '🍽️',
    root: 'Indo-europeu *h₁ed-',
    groups: [
      { label: 'Latim comedere (com + edere)', kin: true, words: { pt: 'comer', es: 'comer' } },
      { label: 'Germânico *etaną', kin: true, words: { sv: 'äta', nb: 'ete', en: 'eat' } },
      { label: 'Eslavo *ěsti', kin: true, words: { ru: 'есть' } },
      { label: 'Latim manducare (mastigar)', kin: false, words: { it: 'mangiare', ro: 'a mânca', fr: 'manger' } },
    ],
    note: 'O norueguês diz também «spise», do baixo-alemão. E o russo «есть» (comer) se escreve igual a «есть» (há, existe).',
  },
];

/** A palavra de uma língua numa família e se ela descende da raiz comum. */
export function wordIn(f: WordFamily, lang: KinLang): { word: string; kin: boolean; group: KinGroup } | null {
  for (const g of f.groups) {
    const w = g.words[lang];
    if (w) return { word: w, kin: g.kin, group: g };
  }
  return null;
}

/**
 * Duas palavras de uma família são irmãs se estão no mesmo grupo, ou se as duas descendem da raiz
 * comum (grupos com kin), mesmo por ramos diferentes (latim noctem e eslavo *noktь).
 */
export function areSiblings(f: WordFamily, a: KinLang, b: KinLang): boolean {
  const ga = f.groups.find((g) => g.words[a]);
  const gb = f.groups.find((g) => g.words[b]);
  if (!ga || !gb) return false;
  return ga === gb || (f.root !== null && ga.kin && gb.kin);
}
