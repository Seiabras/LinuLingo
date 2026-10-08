import type { AlphabetData, AlphabetLetter, LanguagePack } from '@/data/types';

/**
 * Treino do alfabeto. Três fontes, nesta ordem: (1) feito à mão (`pack.alphabet`, hoje russo,
 * japonês, coreano e amárico); (2) idiomas de outra escrita que não têm um feito à mão: sai do que
 * o pacote já tem e já é testado — as letras do teclado do idioma (`keyboardRows`), o som de cada
 * uma pela leitura romanizada (`reading`, ou `letterReading` nos abjads, em que a leitura vem de
 * uma tabela de palavras) e uma palavra do vocabulário que começa com ela; (3) idiomas de ESCRITA
 * LATINA com letra própria de verdade, fora das 26 do nosso alfabeto (`ALFABETO_LATINO_EXTRA`
 * abaixo) — NÃO é todo acento (á/é/í do espanhol e do português são a MESMA letra com marca de
 * tonicidade, não uma letra própria; só entra aqui quem o alfabeto oficial do idioma lista como
 * letra à parte, tipo o ñ espanhol ou o ø norueguês). Letra sem som nem exemplo fica de fora —
 * melhor uma letra a menos do que um som inventado.
 */

// letras de outras escritas iguais (na forma) a uma letra nossa: viram «iguais» ou «falsas amigas»
const PARECE_LATINA: Record<string, string> = {
  а: 'a', в: 'b', е: 'e', к: 'k', м: 'm', н: 'h', о: 'o', р: 'p', с: 'c', т: 't', у: 'y', х: 'x', і: 'i', ј: 'j', ѕ: 's',
  α: 'a', β: 'b', ε: 'e', ζ: 'z', η: 'n', ι: 'i', κ: 'k', μ: 'm', ν: 'v', ο: 'o', ρ: 'p', τ: 't', υ: 'u', χ: 'x',
};

/**
 * Letras EXTRAS do alfabeto oficial de idiomas de escrita latina, além das 26 do nosso — conjunto
 * pequeno e conferido de propósito (melhor faltar um idioma do que arriscar uma letra/som errado).
 * Fonte: gramáticas de referência de cada idioma (contagem oficial do alfabeto); IPA e explicação do
 * som checados um a um. Não inclui diacrítico que é só marca de tonicidade sobre uma vogal que já
 * existe (á/é/í/ó/ú do espanhol, acentos do francês) — isso não é "letra nova", é a mesma letra com
 * acento, e ensinar como se fosse letra própria seria errado.
 */
const ALFABETO_LATINO_EXTRA: Record<string, { letter: string; ipa: string; sound: string }[]> = {
  es: [{ letter: 'ñ', ipa: 'ɲ', sound: 'é o “nh” do português, como em “ninho”' }],
  ro: [
    { letter: 'ă', ipa: 'ə', sound: 'soa como o “a” final e fraco de “casa”, dito rápido' },
    { letter: 'â', ipa: 'ɨ', sound: 'vogal central fechada, sem equivalente exato em português — algo entre um “i” e um “u”' },
    { letter: 'î', ipa: 'ɨ', sound: 'o mesmo som do â — usado no começo e no fim da palavra, â no meio' },
    { letter: 'ș', ipa: 'ʃ', sound: 'é o “x” do português, como em “xadrez”' },
    { letter: 'ț', ipa: 't͡s', sound: '“ts” bem junto, como em “pizza”' },
  ],
  sv: [
    { letter: 'å', ipa: 'oː', sound: '“ó” fechado e longo, como em “avô”' },
    { letter: 'ä', ipa: 'ɛː', sound: '“é” aberto e longo, como em “pé”' },
    { letter: 'ö', ipa: 'øː', sound: 'vogal arredondada sem equivalente em português — um “é” dito com os lábios em bico' },
  ],
  nb: [
    { letter: 'æ', ipa: 'æ', sound: '“é” bem aberto' },
    { letter: 'ø', ipa: 'ø', sound: 'vogal arredondada sem equivalente em português — um “é” dito com os lábios em bico' },
    { letter: 'å', ipa: 'oː', sound: '“ó” fechado e longo, como em “avô”' },
  ],
  da: [
    { letter: 'æ', ipa: 'ɛ', sound: '“é” aberto' },
    { letter: 'ø', ipa: 'ø', sound: 'vogal arredondada sem equivalente em português — um “é” dito com os lábios em bico' },
    { letter: 'å', ipa: 'ɔ', sound: '“ó” aberto' },
  ],
  is: [
    { letter: 'þ', ipa: 'θ', sound: '“th” surdo do inglês, como em “think” — não existe em português' },
    { letter: 'ð', ipa: 'ð', sound: '“th” sonoro do inglês, como em “this” — não existe em português' },
  ],
  et: [
    { letter: 'õ', ipa: 'ɤ', sound: 'a letra mais famosa do estoniano — vogal sem equivalente em português, dita com a língua puxada pra trás e os lábios SEM arredondar' },
    { letter: 'ä', ipa: 'æ', sound: '“é” bem aberto' },
    { letter: 'ö', ipa: 'ø', sound: 'vogal arredondada sem equivalente em português — um “é” dito com os lábios em bico' },
    { letter: 'ü', ipa: 'y', sound: 'vogal arredondada sem equivalente em português — um “i” dito com os lábios em bico' },
  ],
};

function alfabetoLatinoExtra(pack: LanguagePack): AlphabetData | null {
  const extra = ALFABETO_LATINO_EXTRA[pack.code];
  if (!extra || extra.length === 0) return null;
  const vocab = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  const letters: AlphabetLetter[] = [];
  for (const { letter, ipa, sound } of extra) {
    const ex = vocab.find((v) => !v.word_target.includes(' ') && v.word_target.toLocaleLowerCase(pack.speechLocale).includes(letter));
    if (!ex) continue;
    const maiuscula = letter.toLocaleUpperCase(pack.speechLocale);
    letters.push({
      letter: maiuscula !== letter ? `${maiuscula} ${letter}` : letter,
      ipa,
      short: letter,
      sound,
      example: [ex.word_target, ex.word_native],
      group: 'nova',
    });
  }
  // o jogo de múltipla escolha (buildRound, em alphabet.ts) tira as opções erradas só de dentro
  // do próprio conjunto de letras extras — com menos de 3, sobra pergunta com uma opção só
  // (quebrado). Línguas com poucas letras extras (ex. espanhol, só o ñ) ficam de fora por ora.
  return letters.length >= 3 ? { letters, readingWords: [] } : null;
}

const letra = /^\p{L}$/u;
const base = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/**
 * Letras do árabe que NUNCA conectam com a letra seguinte (só recebem conexão da anterior) — regra
 * padrão da escrita árabe, a mesma razão por trás do "sol/lua" no sandhi do artigo: ا د ذ ر ز و.
 * Por isso elas não têm forma inicial nem medial, só isolada e final.
 */
const ARABE_NAO_CONECTA = new Set(['ا', 'د', 'ذ', 'ر', 'ز', 'و']);
const TATWEEL = 'ـ';

/**
 * Formas conectadas de uma letra árabe, construídas com o encadeador (tatweel, U+0640) em vez de
 * codepoints fixos das Formas de Apresentação Árabes do Unicode: o motor de forma do próprio
 * sistema (o mesmo que já desenha o texto árabe do app) escolhe o glifo certo — não depende de eu
 * acertar de cabeça qual codepoint de apresentação é qual.
 */
function formasArabes(l: string): AlphabetLetter['joining'] | undefined {
  if (!/\p{Script=Arabic}/u.test(l)) return undefined;
  const conecta = !ARABE_NAO_CONECTA.has(l);
  return {
    isolated: l,
    initial: conecta ? `${l}${TATWEEL}` : undefined,
    medial: conecta ? `${TATWEEL}${l}${TATWEEL}` : undefined,
    final: `${TATWEEL}${l}`,
  };
}

export function alfabetoAutomatico(pack: LanguagePack): AlphabetData | null {
  if (pack.alphabet) return pack.alphabet;
  const latino = alfabetoLatinoExtra(pack);
  if (latino) return latino;
  const read = pack.reading;
  if (!pack.keyboardRows || !read) return null;
  const vistas = new Set<string>();
  const letters: AlphabetLetter[] = [];
  const vocab = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  for (const ch of pack.keyboardRows.flat()) {
    const l = ch.toLocaleLowerCase(pack.speechLocale);
    if (!letra.test(l) || vistas.has(l)) continue;
    vistas.add(l);
    const som = (pack.letterReading ?? read)(l).trim();
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
      joining: formasArabes(l),
    });
  }
  if (letters.length < 8) return null;
  const readingWords = vocab
    .filter((v) => v.emoji && !v.word_target.includes(' ') && [...v.word_target].length <= 5)
    .slice(0, 12)
    .map((v): [string, string, string] => [v.word_target, v.emoji!, v.word_native]);
  return { letters, readingWords };
}
