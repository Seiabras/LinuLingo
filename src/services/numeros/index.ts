/**
 * Números por extenso antes da voz (neural ou do aparelho): cada idioma escreve os algarismos como
 * palavras, concordando com o substantivo que vem depois (gênero, número e caso, quando o idioma
 * tem), pelo vocabulário do próprio idioma. Assim a voz não lê «2 casas» como «dois casas», nem
 * fica muda (a voz do feroês só conhece letras). Idioma sem regras aqui: o texto vai como está.
 */
type Speller = (text: string, brasil?: boolean) => string;

// Cada soletrador lê o vocabulário do próprio idioma, então carrega só quando o idioma é usado (item
// 10 do PENDENTES.md, 16/10/2026): antes, os vocabulários de todos iam no pacote de abertura do app.
const LOADERS: Record<string, () => Promise<Speller>> = {
  da: () => import('./da').then((m) => m.spellDanishNumbers),
  es: () => import('./es').then((m) => m.spellSpanishNumbers),
  et: () => import('./et').then((m) => m.spellEstonianNumbers),
  fi: () => import('./fi').then((m) => m.spellFinnishNumbers),
  fo: () => import('./fo').then((m) => m.spellFaroeseNumbers),
  fr: () => import('./fr').then((m) => m.spellFrenchNumbers),
  is: () => import('./is').then((m) => m.spellIcelandicNumbers),
  it: () => import('./it').then((m) => m.spellItalianNumbers),
  lt: () => import('./lt').then((m) => m.spellLithuanianNumbers),
  nb: () => import('./nb').then((m) => m.spellNorwegianNumbers),
  pt: () => import('./pt').then((m) => m.spellPortugueseNumbers),
  ro: () => import('./ro').then((m) => m.spellRomanianNumbers),
  ru: () => import('./ru').then((m) => m.spellRussianNumbers),
  sv: () => import('./sv').then((m) => m.spellSwedishNumbers),
};
const SPELLERS: Record<string, Speller> = {};
const carregando = new Map<string, Promise<void>>();
const chaveDe = (lang: string) => (lang === 'nn' ? 'nb' : lang);

/** Carrega o soletrador de um idioma (ex. 'ru', ou a localidade 'ru-RU'); sem regras, não faz nada. */
export function carregarNumeros(localeOuLang: string): Promise<void> {
  const lang = chaveDe(localeOuLang.split(/[-_]/)[0].toLowerCase());
  const loader = LOADERS[lang];
  if (SPELLERS[lang] || !loader) return Promise.resolve();
  let p = carregando.get(lang);
  if (!p) {
    p = loader().then((f) => {
      SPELLERS[lang] = f;
    });
    p.catch(() => carregando.delete(lang));
    carregando.set(lang, p);
  }
  return p;
}

const KEYCAP = /[\d#*]\uFE0F?\u20E3/;
const KEYCAP_SPLIT = /([\d#*]\uFE0F?\u20E3)/;

export function spellNumbers(text: string, locale: string): string {
  if (!/\d/.test(text)) return text;
  // emojis de tecla (2️⃣, #️⃣) ficam como estão: cada pedaço entre eles é convertido à parte
  if (KEYCAP.test(text)) return text.split(KEYCAP_SPLIT).map((p, i) => (i % 2 ? p : spellNumbers(p, locale))).join('');
  const lang = locale.split(/[-_]/)[0].toLowerCase();
  const spell = SPELLERS[chaveDe(lang)];
  // ainda não carregou: pede agora e, desta vez, o texto vai como está
  if (!spell) {
    carregarNumeros(lang);
    return text;
  }
  // o português do Brasil diz dezesseis, dezessete, dezenove (Portugal: dezasseis, dezassete, dezanove)
  return lang === 'pt' && /^pt[-_]BR\b/i.test(locale) ? spell(text, true) : spell(text);
}
