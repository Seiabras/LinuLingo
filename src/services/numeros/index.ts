import { spellDanishNumbers } from './da';
import { spellSpanishNumbers } from './es';
import { spellEstonianNumbers } from './et';
import { spellFaroeseNumbers } from './fo';
import { spellFinnishNumbers } from './fi';
import { spellFrenchNumbers } from './fr';
import { spellIcelandicNumbers } from './is';
import { spellItalianNumbers } from './it';
import { spellLithuanianNumbers } from './lt';
import { spellNorwegianNumbers } from './nb';
import { spellPortugueseNumbers } from './pt';
import { spellRomanianNumbers } from './ro';
import { spellRussianNumbers } from './ru';
import { spellSwedishNumbers } from './sv';

/**
 * Números por extenso antes da voz (neural ou do aparelho): cada idioma escreve os algarismos como
 * palavras, concordando com o substantivo que vem depois (gênero, número e caso, quando o idioma
 * tem), pelo vocabulário do próprio idioma. Assim a voz não lê «2 casas» como «dois casas», nem
 * fica muda (a voz do feroês só conhece letras). Idioma sem regras aqui: o texto vai como está.
 */
const SPELLERS: Record<string, (text: string) => string> = {
  da: spellDanishNumbers,
  es: spellSpanishNumbers,
  et: spellEstonianNumbers,
  fi: spellFinnishNumbers,
  fo: spellFaroeseNumbers,
  fr: spellFrenchNumbers,
  is: spellIcelandicNumbers,
  it: spellItalianNumbers,
  lt: spellLithuanianNumbers,
  nb: spellNorwegianNumbers,
  pt: spellPortugueseNumbers,
  ro: spellRomanianNumbers,
  ru: spellRussianNumbers,
  sv: spellSwedishNumbers,
};

const KEYCAP = /[\d#*]\uFE0F?\u20E3/;
const KEYCAP_SPLIT = /([\d#*]\uFE0F?\u20E3)/;

export function spellNumbers(text: string, locale: string): string {
  if (!/\d/.test(text)) return text;
  // emojis de tecla (2️⃣, #️⃣) ficam como estão: cada pedaço entre eles é convertido à parte
  if (KEYCAP.test(text)) return text.split(KEYCAP_SPLIT).map((p, i) => (i % 2 ? p : spellNumbers(p, locale))).join('');
  const lang = locale.split(/[-_]/)[0].toLowerCase();
  // o português do Brasil diz dezesseis, dezessete, dezenove (Portugal: dezasseis, dezassete, dezanove)
  if (lang === 'pt' && /^pt[-_]BR\b/i.test(locale)) return spellPortugueseNumbers(text, true);
  const spell = SPELLERS[lang === 'nn' ? 'nb' : lang];
  return spell ? spell(text) : text;
}
