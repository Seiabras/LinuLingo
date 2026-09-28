import { spellDanishNumbers } from './da';
import { spellEstonianNumbers } from './et';
import { spellFaroeseNumbers } from './fo';
import { spellFinnishNumbers } from './fi';
import { spellIcelandicNumbers } from './is';
import { spellNorwegianNumbers } from './nb';
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
  et: spellEstonianNumbers,
  fi: spellFinnishNumbers,
  fo: spellFaroeseNumbers,
  is: spellIcelandicNumbers,
  nb: spellNorwegianNumbers,
  ru: spellRussianNumbers,
  sv: spellSwedishNumbers,
};

export function spellNumbers(text: string, locale: string): string {
  if (!/\d/.test(text)) return text;
  const lang = locale.split(/[-_]/)[0].toLowerCase();
  const spell = SPELLERS[lang === 'nn' ? 'nb' : lang];
  return spell ? spell(text) : text;
}
