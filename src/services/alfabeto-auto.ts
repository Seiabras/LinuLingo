import type { AlphabetData, AlphabetLetter, LanguagePack } from '@/data/types';

/**
 * Treino do alfabeto para os idiomas de outra escrita que não têm um feito à mão (`pack.alphabet`,
 * hoje só russo, japonês, coreano e amárico). Sai do que o pacote já tem e já é testado: as letras do
 * teclado do idioma (`keyboardRows`), o som de cada uma pela leitura romanizada (`reading`) e uma
 * palavra do vocabulário que começa com ela. Letra sem som nem exemplo fica de fora — melhor uma
 * letra a menos do que um som inventado.
 */

// letras de outras escritas iguais (na forma) a uma letra nossa: viram «iguais» ou «falsas amigas»
const PARECE_LATINA: Record<string, string> = {
  а: 'a', в: 'b', е: 'e', к: 'k', м: 'm', н: 'h', о: 'o', р: 'p', с: 'c', т: 't', у: 'y', х: 'x', і: 'i', ј: 'j', ѕ: 's',
  α: 'a', β: 'b', ε: 'e', ζ: 'z', η: 'n', ι: 'i', κ: 'k', μ: 'm', ν: 'v', ο: 'o', ρ: 'p', τ: 't', υ: 'u', χ: 'x',
};

const letra = /^\p{L}$/u;
const base = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export function alfabetoAutomatico(pack: LanguagePack): AlphabetData | null {
  if (pack.alphabet) return pack.alphabet;
  const read = pack.reading;
  if (!pack.keyboardRows || !read) return null;
  const vistas = new Set<string>();
  const letters: AlphabetLetter[] = [];
  const vocab = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  for (const ch of pack.keyboardRows.flat()) {
    const l = ch.toLocaleLowerCase(pack.speechLocale);
    if (!letra.test(l) || vistas.has(l)) continue;
    vistas.add(l);
    const som = read(l).trim();
    if (!som || som === l || /\p{L}/u.test(som) === false) continue;
    // a palavra de exemplo: a mais frequente que começa com a letra (uma palavra só, sem espaço)
    const ex = vocab.find((v) => !v.word_target.includes(' ') && v.word_target.toLocaleLowerCase(pack.speechLocale).startsWith(l));
    if (!ex) continue;
    // maiúscula só onde o texto do dia a dia usa (cirílico, grego, armênio); o mtavruli georgiano não
    const maiuscula = /\p{Script=Georgian}/u.test(l) ? l : ch.toLocaleUpperCase(pack.speechLocale);
    const latina = PARECE_LATINA[l];
    letters.push({
      letter: maiuscula !== l ? `${maiuscula} ${l}` : l,
      ipa: '',
      short: som,
      sound: latina ? (base(som) === latina ? `soa como o nosso “${latina}”` : `parece o nosso “${latina}”, mas soa “${som}”`) : `soa “${som}”`,
      example: [ex.word_target, ex.word_native],
      group: latina ? (base(som) === latina ? 'igual' : 'falsa') : 'nova',
    });
  }
  if (letters.length < 8) return null;
  const readingWords = vocab
    .filter((v) => v.emoji && !v.word_target.includes(' ') && [...v.word_target].length <= 5)
    .slice(0, 12)
    .map((v): [string, string, string] => [v.word_target, v.emoji!, v.word_native]);
  return { letters, readingWords };
}
