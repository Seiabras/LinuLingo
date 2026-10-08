import type { AlphabetData, AlphabetLetter, LanguagePack, VocabSeed } from '@/data/types';

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
 *
 * Para os idiomas com alfabeto oficial VERIFICADO numa fonte real (`ALFABETO_LATINO_BASE`), a tela
 * ensina o alfabeto inteiro — as letras iguais às nossas, as que só aparecem em palavras
 * estrangeiras/nomes próprios ('internacional') e as extras ('nova') — em vez de só as extras.
 * Pedido do dono do app (08/10/2026), usando o romeno como exemplo: ensinar todas as letras do
 * alfabeto oficial, com suas particularidades, não só o que falta.
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

/** As letras 'nova' (`ALFABETO_LATINO_EXTRA`) de um idioma, com exemplo real do vocabulário. */
function letrasNovas(pack: LanguagePack, vocab: VocabSeed[]): AlphabetLetter[] {
  const extra = ALFABETO_LATINO_EXTRA[pack.code];
  if (!extra) return [];
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
  return letters;
}

export function alfabetoLatinoExtra(pack: LanguagePack): AlphabetData | null {
  const vocab = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  const letters = letrasNovas(pack, vocab);
  // o jogo de múltipla escolha (buildRound, em alphabet.ts) tira as opções erradas só de dentro
  // do próprio conjunto de letras extras — com menos de 3, sobra pergunta com uma opção só
  // (quebrado). Línguas com poucas letras extras (ex. espanhol, só o ñ) ficam de fora por ora.
  return letters.length >= 3 ? { letters, readingWords: [] } : null;
}

/**
 * Alfabeto oficial VERIFICADO numa fonte real (ex.: en.wikipedia.org/wiki/Romanian_alphabet), pra
 * idiomas de `ALFABETO_LATINO_EXTRA`: as letras iguais às nossas ('igual'), as que soam parecido mas
 * surpreendem quem fala português ('falsa' — mesmo critério já usado no esperanto e no russo: não é
 * "letra diferente", é "letra que todo mundo lê errado por hábito") e as que o alfabeto oficial
 * lista mas só aparecem em palavras estrangeiras/nomes próprios, nunca em palavra nativa comum
 * ('internacional'). IPA e classificação conferidos um a um na fonte — não inclui idioma sem fonte
 * checada (ver PENDENTES.md).
 */
interface LetraBase {
  letter: string;
  ipa: string;
  sound: string;
  /**
   * Letra cujo som muda conforme a vizinha (c/g do romeno, que soam diferente antes de e/i):
   * procura primeiro uma palavra que bata com este padrão, pra casar com o IPA/som descritos aqui
   * (o valor "padrão" da letra), e só cai pro match solto (`exemploDe`) se não achar nenhuma.
   */
  prefer?: RegExp;
}

const ALFABETO_LATINO_BASE: Record<string, { igual: LetraBase[]; falsa: LetraBase[]; internacional: LetraBase[] }> = {
  // Fonte: en.wikipedia.org/wiki/Romanian_alphabet (tabela "Letters and their pronunciation" e a nota
  // sobre Q/W/Y introduzidas em 1982 "only in foreign words"; K "rarely used... only in proper names
  // and international neologisms such as kilogram, broker, karate"). 31 letras oficiais = 22 iguais/
  // falsas amigas + 5 já cadastradas como 'nova' (ă â î ș ț) + 4 internacionais (k q w y). O X NÃO
  // entra como internacional: a mesma fonte dá IPA própria (/ks/, /ɡz/) sem nenhuma ressalva de uso
  // só estrangeiro, e o vocabulário tem dezenas de palavras comuns com x (taxi, examen, exercițiu).
  ro: {
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa igual ao nosso “a” tônico, como em “casa”' },
      { letter: 'b', ipa: 'b', sound: 'soa igual ao nosso “b”' },
      {
        letter: 'c',
        ipa: 'k',
        sound: 'antes de a/o/u (ou no fim da palavra) soa “k”, igual ao nosso “c” de “casa”; antes de e/i soa “tch”, como no inglês “cheese” — diferente do nosso “c” de “cedo”, que vira “s”',
        prefer: /^c[^ei]/,
      },
      { letter: 'd', ipa: 'd', sound: 'soa igual ao nosso “d”' },
      {
        letter: 'e',
        ipa: 'e',
        sound: 'soa como o nosso “ê” fechado, como em “ele”. No começo de “eu”, “ea”, “ei” alguns falantes dizem com um leve “i” antes (“ieu”, “ia”)',
      },
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f”' },
      {
        letter: 'g',
        ipa: 'ɡ',
        sound: 'antes de a/o/u soa “g” duro, igual ao nosso “g” de “gato”; antes de e/i soa “dj”, como no inglês “giraffe” — diferente do nosso “g” de “gelo”, que vira “j”',
        prefer: /^g[^ei]/,
      },
      {
        letter: 'i',
        ipa: 'i',
        sound: 'soa igual ao nosso “i”; no fim de muitas palavras só marca que a consoante antes dela é “molhada”, sem formar sílaba nova',
        prefer: /^i[^aeiouăâî]/,
      },
      { letter: 'j', ipa: 'ʒ', sound: 'soa igual ao nosso “j” de “janela”' },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'o', sound: 'soa igual ao nosso “ô” fechado' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de início de palavra, sempre surdo, como em “sol”' },
      { letter: 't', ipa: 't', sound: '“t” seco e dental, como o nosso “t” de “tatu” — nunca vira “tchi” como no nosso “tio”' },
      { letter: 'u', ipa: 'u', sound: 'soa igual ao nosso “u” fechado; em alguns ditongos funciona como um “u” bem rápido (semivogal), tipo o “u” de “pauta”' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
      { letter: 'x', ipa: 'ks', sound: 'soa “ks”, como em “táxi”; em algumas palavras entre vogais soa “gz”, como no nosso “exame”' },
      { letter: 'z', ipa: 'z', sound: 'soa igual ao nosso “z” de “zero”' },
    ],
    falsa: [
      {
        letter: 'h',
        ipa: 'h',
        sound: 'tem som de verdade, aspirado como o “h” do inglês “hotel” — diferente do nosso “h”, que é sempre mudo (em “chi”/“ghi” antes de e/i ele também fica mudo, só marca o som duro de c/g)',
      },
      {
        letter: 'r',
        ipa: 'r',
        sound: 'é um “r” batido/vibrado com a ponta da língua, como o do espanhol — NUNCA o “r” gutural/forte do nosso “rato” ou “carro”',
      },
    ],
    internacional: [
      {
        letter: 'k',
        ipa: 'k',
        sound: 'soa “k”, igual ao nosso “c” de “casa” — mas quase não aparece: a própria fonte (Wikipédia) cita “kilogram”, “broker” e “karate” como os únicos tipos de palavra romena que usam K, todos de origem internacional recente',
      },
      {
        letter: 'q',
        ipa: 'k',
        sound: 'sozinho soa “k” (e em “qu” soa “kw”, “kv” ou um “k” palatalizado, com um leve “i” colado) — usada só em nomes próprios e termos internacionais ainda não adaptados ao romeno; é a letra mais rara do alfabeto',
      },
      {
        letter: 'w',
        ipa: 'v',
        sound: 'muda de som conforme de onde a palavra veio: “v” em palavras de origem alemã, ou o “u” rápido do inglês (semivogal “w”) em palavras do inglês, como “weekend”',
      },
      {
        letter: 'y',
        ipa: 'i',
        sound: 'soa “i” ou, no meio de um ditongo, um “i” bem rápido (semivogal), como o “y” do inglês “yes” — usada só em palavras e nomes internacionais ainda não adaptados, como “hobby”',
      },
    ],
  },
};

/**
 * Acha, no vocabulário, uma palavra (sem espaço) que comece com a letra; senão, uma que a contenha.
 * Com `prefer`, tenta primeiro uma palavra cujo começo bata com o padrão (c/g do romeno, que só
 * soam como o IPA/som descritos antes de a/o/u — não antes de e/i) antes de cair pro match solto.
 */
function exemploDe(vocab: VocabSeed[], letra: string, locale: string, prefer?: RegExp): [string, string] | undefined {
  const l = letra.toLocaleLowerCase(locale);
  const unica = vocab.filter((v) => !v.word_target.includes(' '));
  const minusculas = unica.map((v) => ({ v, min: v.word_target.toLocaleLowerCase(locale) }));
  const comPadrao = prefer && minusculas.find(({ min }) => prefer.test(min));
  const comeca = comPadrao || minusculas.find(({ min }) => min.startsWith(l));
  const achada = comeca || minusculas.find(({ min }) => min.includes(l));
  return achada ? [achada.v.word_target, achada.v.word_native] : undefined;
}

/** O alfabeto oficial completo (igual + falsa amiga + internacional + nova) de um idioma verificado. */
export function alfabetoLatinoCompleto(pack: LanguagePack): AlphabetData | null {
  const dados = ALFABETO_LATINO_BASE[pack.code];
  if (!dados) return null;
  const vocab = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  const letters: AlphabetLetter[] = [];
  for (const group of ['igual', 'falsa'] as const) {
    for (const { letter, ipa, sound, prefer } of dados[group]) {
      const ex = exemploDe(vocab, letter, pack.speechLocale, prefer);
      // sem palavra do vocabulário com a letra: melhor faltar do que inventar (não devia acontecer
      // nas letras comuns, mas a checagem vale a regra do projeto)
      if (!ex) continue;
      const maiuscula = letter.toLocaleUpperCase(pack.speechLocale);
      letters.push({ letter: maiuscula !== letter ? `${maiuscula} ${letter}` : letter, ipa, short: letter, sound, example: ex, group });
    }
  }
  for (const { letter, ipa, sound } of dados.internacional) {
    const maiuscula = letter.toLocaleUpperCase(pack.speechLocale);
    letters.push({
      letter: maiuscula !== letter ? `${maiuscula} ${letter}` : letter,
      ipa,
      short: letter,
      sound,
      // sem palavra cadastrada ainda: fica sem exemplo mesmo (o texto do som já explica o porquê) —
      // nunca inventar uma palavra ou um áudio que não existem
      example: exemploDe(vocab, letter, pack.speechLocale),
      group: 'internacional',
    });
  }
  letters.push(...letrasNovas(pack, vocab));
  // palavras fáceis de ler, pro jogo de "leitura" (igual ao dos idiomas de outra escrita)
  const readingWords = vocab
    .filter((v) => v.emoji && !v.word_target.includes(' ') && [...v.word_target].length <= 5)
    .slice(0, 12)
    .map((v): [string, string, string] => [v.word_target, v.emoji!, v.word_native]);
  return { letters, readingWords };
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
  const completo = alfabetoLatinoCompleto(pack);
  if (completo) return completo;
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
