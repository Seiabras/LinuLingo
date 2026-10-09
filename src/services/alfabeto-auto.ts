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
    // á/é/í/ó/ú/ý/æ/ö também entram aqui: diferente do acento do espanhol/português (só marca de
    // tonicidade sobre a MESMA vogal), o islandês não marca acento tônico nenhum (a tônica é sempre
    // a primeira sílaba) — estas letras com acento são ditongos/vogais com som PRÓPRIO, diferente da
    // vogal sem acento, e por isso o alfabeto oficial as lista como letras à parte (confirmado em
    // en.wikipedia.org/wiki/Icelandic_orthography, tabela de vogais com IPA de cada uma).
    { letter: 'á', ipa: 'au̯', sound: 'ditongo “au”, como o “au” de “mau” dito rápido — nunca o som do nosso “a”' },
    { letter: 'é', ipa: 'jɛ', sound: 'soa “iê”, com um “i” rápido antes do “é” — nunca o som do nosso “e”' },
    { letter: 'í', ipa: 'i', sound: 'soa como um “i” longo e puro — o mesmo som do “ý”' },
    { letter: 'ó', ipa: 'ou̯', sound: 'ditongo “ô-u”, como o nosso “ou” de “outro” dito rápido' },
    { letter: 'ú', ipa: 'u', sound: 'soa como o nosso “u” fechado — bem diferente do “u” sem acento' },
    { letter: 'ý', ipa: 'i', sound: 'soa como um “i” longo e puro — o mesmo som do “í” (são duas letras pro mesmo som, por tradição histórica de escrita)' },
    { letter: 'æ', ipa: 'ai̯', sound: 'ditongo “ai”, quase como o nosso “ai” de “pai”' },
    { letter: 'ö', ipa: 'œ', sound: 'vogal arredondada sem equivalente em português — um “é” dito com os lábios em bico, como o ö do alemão' },
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

const ALFABETO_LATINO_BASE: Record<string, { ordem: string[]; igual: LetraBase[]; falsa: LetraBase[]; internacional: LetraBase[] }> = {
  // Fonte: en.wikipedia.org/wiki/Romanian_alphabet (tabela "Letters and their pronunciation" e a nota
  // sobre Q/W/Y introduzidas em 1982 "only in foreign words"; K "rarely used... only in proper names
  // and international neologisms such as kilogram, broker, karate"). 31 letras oficiais = 22 iguais/
  // falsas amigas + 5 já cadastradas como 'nova' (ă â î ș ț) + 4 internacionais (k q w y). O X NÃO
  // entra como internacional: a mesma fonte dá IPA própria (/ks/, /ɡz/) sem nenhuma ressalva de uso
  // só estrangeiro, e o vocabulário tem dezenas de palavras comuns com x (taxi, examen, exercițiu).
  ro: {
    // ordem oficial do alfabeto, como um nativo aprende na escola (mesma fonte acima, seção
    // "Letters and their pronunciation" lista a sequência completa com ă/â/î/ș/ț nas posições
    // certas) — pedido do dono do app (08/10/2026): a tela ensina nesta ordem antes de separar
    // por categoria (igual/falsa/nova/internacional).
    ordem: ['a', 'ă', 'â', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'î', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'ș', 't', 'ț', 'u', 'v', 'w', 'x', 'y', 'z'],
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
  // Fonte: en.wikipedia.org/wiki/Swedish_alphabet (ordem oficial de 29 letras, A-Z + Å Ä Ö; nota de
  // que C/Q/W/X/Z só aparecem em empréstimos e nomes próprios) e en.wikipedia.org/wiki/
  // Swedish_phonology (IPA de cada consoante/vogal, inclusive J = /j/ como o “y” do inglês, o
  // abrandamento de G/K antes de vogal anterior, e a realização do R). 29 letras = 16 iguais + 5
  // falsas amigas (h j r u y) + 5 internacionais (c q w x z) + 3 já cadastradas como 'nova' (å ä ö).
  sv: {
    ordem: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'b', ipa: 'b', sound: 'soa igual ao nosso “b”' },
      { letter: 'd', ipa: 'd', sound: 'soa igual ao nosso “d”' },
      { letter: 'e', ipa: 'ɛ', sound: 'soa como o nosso “é” aberto; quando a vogal é longa, fecha mais, perto do nosso “ê”' },
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f”' },
      {
        letter: 'g',
        ipa: 'ɡ',
        sound: 'antes de a/o/u/å (ou de consoante) soa “g” duro, igual ao nosso “g” de “gato”; antes de e/i/y/ä/ö soa “i”, bem diferente do nosso “g” de “gelo”, que vira “j”',
        prefer: /^g[^eiyäö]/,
      },
      { letter: 'i', ipa: 'i', sound: 'soa igual ao nosso “i”' },
      {
        letter: 'k',
        ipa: 'k',
        sound: 'antes de a/o/u/å (ou de consoante) soa “k”, igual ao nosso “c” de “casa”; antes de e/i/y/ä/ö soa um “ch” fino, dito com a língua no céu da boca — nada a ver com o nosso “qu”',
        prefer: /^k[^eiyäö]/,
      },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'ɔ', sound: 'soa como o nosso “o” aberto de “bola”; quando a vogal é longa, fecha bastante, perto de um “u”' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
    ],
    falsa: [
      {
        letter: 'h',
        ipa: 'h',
        sound: 'tem som de verdade, aspirado como o “h” do inglês “hotel” — diferente do nosso h, que é sempre mudo. Fica mudo só nos grupos “hj-” e “hv-”, em que marca apenas que a consoante seguinte é a que se pronuncia',
      },
      { letter: 'j', ipa: 'j', sound: 'soa “i” bem rápido (semivogal “y” do inglês “yes”) — nunca o nosso “j” de “janela”' },
      {
        letter: 'r',
        ipa: 'r',
        sound: 'é um “r” vibrado ou batido com a ponta da língua — nunca o “r” gutural do nosso “rato”/“carro”. Antes de s/t/d/l/n os dois sons se fundem numa consoante só (uma marca bem sueca)',
      },
      { letter: 'u', ipa: 'ʉ', sound: 'vogal sem equivalente em português — a língua fica mais pra frente do que no nosso “u”, quase um “i” arredondado' },
      { letter: 'y', ipa: 'ʏ', sound: 'vogal sem equivalente em português — um “i” dito com os lábios em bico, como o ü do alemão; não é semivogal como o y do espanhol ou do inglês' },
    ],
    internacional: [
      { letter: 'c', ipa: 's', sound: 'sozinho, só aparece em palavras estrangeiras e nomes próprios, e costuma soar “s” — o “k” faz esse papel nas palavras suecas' },
      { letter: 'q', ipa: 'k', sound: 'soa “k” — usada quase só no sobrenome “Qvist” e em nomes próprios; desde 1900 o dicionário sueco lista a maioria das palavras com “q” sob “k”' },
      { letter: 'w', ipa: 'v', sound: 'soa “v”, igual ao nosso “v” — usada em sobrenomes antigos (como “Wallenberg”) e em palavras internacionais recentes, como “webb”' },
      { letter: 'x', ipa: 'ks', sound: 'soa “ks”, como no nosso “táxi” — rara, aparece em poucas palavras e nomes' },
      { letter: 'z', ipa: 's', sound: 'soa “s” surdo, nunca o nosso “z” vibrante — rara, aparece em nomes e poucos empréstimos, como “zon”' },
    ],
  },
  // Fonte: en.wikipedia.org/wiki/Norwegian_orthography (ordem oficial de 29 letras; nota de que
  // C/Q/W/X/Z “não são usadas na grafia de palavras nativas norueguesas”) e en.wikipedia.org/wiki/
  // Norwegian_phonology (J = /j/ como o “y” do inglês; abrandamento do K antes de vogal anterior
  // pro som “kj” /ç/; R como batida apical no leste, gutural no oeste/sul).
  nb: {
    ordem: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'b', ipa: 'b', sound: 'soa igual ao nosso “b”' },
      { letter: 'd', ipa: 'd', sound: 'soa igual ao nosso “d”' },
      { letter: 'e', ipa: 'ɛ', sound: 'soa como o nosso “é” aberto' },
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f”' },
      { letter: 'g', ipa: 'ɡ', sound: 'soa igual ao nosso “g” de “gato”' },
      { letter: 'i', ipa: 'i', sound: 'soa igual ao nosso “i”' },
      {
        letter: 'k',
        ipa: 'k',
        sound: 'antes de a/o/u (ou consoante) soa “k”, igual ao nosso “c” de “casa”; antes de i/y/ei (o som “kj”) soa um “ch” fino, dito com a língua no céu da boca — nada a ver com o nosso “qu”',
        prefer: /^k[^iy]/,
      },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'o', sound: 'soa como o nosso “ô” fechado, ou mais aberto conforme a palavra' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
    ],
    falsa: [
      {
        letter: 'h',
        ipa: 'h',
        sound: 'tem som de verdade, aspirado como o “h” do inglês — diferente do nosso h, que é sempre mudo. Fica mudo só nos grupos “hj-” e “hv-”',
      },
      { letter: 'j', ipa: 'j', sound: 'soa “i” bem rápido (semivogal “y” do inglês “yes”) — nunca o nosso “j” de “janela”' },
      {
        letter: 'r',
        ipa: 'ɾ',
        sound: 'no leste da Noruega (o padrão mais comum) é um “r” bem batido com a ponta da língua — nunca o “r” gutural do nosso “rato”/“carro”. No oeste e no sul, vira um “r” gutural, parecido com o francês',
      },
      { letter: 'u', ipa: 'ʉ', sound: 'vogal sem equivalente em português — a língua fica mais pra frente do que no nosso “u”' },
      { letter: 'y', ipa: 'ʏ', sound: 'vogal sem equivalente em português — um “i” dito com os lábios em bico' },
    ],
    internacional: [
      { letter: 'c', ipa: 'k', sound: 'quase não é usada — aparece só em palavras estrangeiras; o “k” ou o “s” fazem esse papel nas palavras norueguesas' },
      { letter: 'q', ipa: 'k', sound: 'soa “k” — usada só em nomes próprios e palavras estrangeiras ainda não adaptadas ao norueguês' },
      { letter: 'w', ipa: 'v', sound: 'soa “v” — usada em nomes próprios e palavras internacionais recentes, como “webb”' },
      { letter: 'x', ipa: 'ks', sound: 'soa “ks”, como no nosso “táxi” — rara, só em palavras estrangeiras e nomes' },
      { letter: 'z', ipa: 's', sound: 'soa “s”, nunca o nosso “z” vibrante — rara, só em nomes e empréstimos' },
    ],
  },
  // Fonte: en.wikipedia.org/wiki/Danish_orthography (ordem oficial de 29 letras; “as letras c, q, w,
  // x, z não são usadas na grafia de palavras nativas”, com os usos específicos de cada uma) e
  // en.wikipedia.org/wiki/Danish_phonology (J = /j/; “soft d” /ð/ que estrangeiro ouve quase como um
  // “l”; G mais fraco que o nosso; R como fricativa/aproximante uvular, bem diferente de um r batido
  // ou gutural forte).
  da: {
    ordem: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'b', ipa: 'b', sound: 'soa igual ao nosso “b”' },
      {
        letter: 'd',
        ipa: 'd',
        sound: 'no começo da palavra soa igual ao nosso “d”; depois de vogal (e principalmente no fim da palavra) costuma “sumir” num som fraco de “th”/“l” (o “d mole” dos dinamarqueses, que soa quase como um “l” pra quem não é nativo)',
      },
      { letter: 'e', ipa: 'ɛ', sound: 'soa como o nosso “é” aberto' },
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f”' },
      { letter: 'g', ipa: 'ɡ', sound: 'soa parecido com o nosso “g” de “gato”, mas mais fraco; depois de vogal pode quase desaparecer num “i” ou sumir de vez' },
      { letter: 'i', ipa: 'i', sound: 'soa igual ao nosso “i”' },
      { letter: 'k', ipa: 'k', sound: 'soa igual ao nosso “c” de “casa”' },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'o', sound: 'soa como o nosso “ô” fechado, ou mais aberto conforme a palavra' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”' },
      { letter: 'u', ipa: 'u', sound: 'soa igual ao nosso “u” fechado' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
    ],
    falsa: [
      {
        letter: 'h',
        ipa: 'h',
        sound: 'tem som de verdade, aspirado como o “h” do inglês — diferente do nosso h, que é sempre mudo. Fica mudo nos grupos “hj-” e “hv-”',
      },
      { letter: 'j', ipa: 'j', sound: 'soa “i” bem rápido (semivogal “y” do inglês “yes”) — nunca o nosso “j” de “janela”' },
      {
        letter: 'r',
        ipa: 'ʁ',
        sound: 'não é nem o nosso “r” batido nem um gutural forte — é quase uma vogal fraca, no fundo da garganta, às vezes tão fraca que quase desaparece',
      },
      { letter: 'y', ipa: 'ʏ', sound: 'vogal sem equivalente em português — um “i” dito com os lábios em bico' },
    ],
    internacional: [
      { letter: 'c', ipa: 'k', sound: 'aparece em palavras de origem latina que o dinamarquês manteve com “c” (como “centrum”), mas soa “k” — o norueguês escreve a mesma palavra com “s” (“sentrum”)' },
      { letter: 'q', ipa: 'k', sound: 'soa “k” — usada em poucos empréstimos, como “quiz”' },
      { letter: 'w', ipa: 'v', sound: 'soa “v” — só reconhecida como letra separada do “v” recentemente, usada em nomes e palavras do inglês' },
      { letter: 'x', ipa: 'ks', sound: 'soa “ks” em empréstimos do inglês (“sex”, “taxi”) e no começo de palavras de origem grega (“xylofon”)' },
      { letter: 'z', ipa: 's', sound: 'soa “s”, nunca o nosso “z” vibrante — em empréstimos como “zebra” e “pizza”' },
    ],
  },
  // Fonte: en.wikipedia.org/wiki/Icelandic_orthography (ordem oficial de 32 letras; confirma que
  // C/Q/W/Z “não fazem parte” do alfabeto islandês — por isso ficam de fora daqui, sem grupo
  // 'internacional' nenhum, diferente do romeno/sueco/norueguês/dinamarquês, cujo alfabeto oficial
  // LISTA essas letras mesmo que só em empréstimo) e en.wikipedia.org/wiki/Icelandic_phonology
  // (aspiração distintiva de p/t/k vs. b/d/g sempre surdos — o islandês não tem consoante “sonora”
  // de verdade, só a diferença de soprar ou não).
  is: {
    ordem: [
      'a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'x', 'y', 'ý', 'þ', 'æ', 'ö',
    ],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'e', ipa: 'ɛ', sound: 'soa como o nosso “é” aberto' },
      { letter: 'f', ipa: 'f', sound: 'no começo da palavra soa igual ao nosso “f”; entre vogais (ou antes de l/n) costuma virar “v”' },
      { letter: 'i', ipa: 'ɪ', sound: 'soa como o nosso “i”, um pouco mais aberto' },
      { letter: 'k', ipa: 'k', sound: 'soa igual ao nosso “c” de “casa” (sem soprar como o k do inglês)' },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'ɔ', sound: 'soa como o nosso “o” aberto de “bola”' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
      { letter: 'x', ipa: 'xs', sound: 'soa “ks”, como no nosso “táxi”' },
    ],
    falsa: [
      {
        letter: 'b',
        ipa: 'p',
        sound: 'o islandês não distingue “b” de “p” pela vibração da voz: as duas soam como um “p” sem soprar — bem diferente do nosso “b” vibrante. Quem diferencia p/t/k de b/d/g é o sopro (a aspiração), não a vibração da garganta',
      },
      { letter: 'd', ipa: 't', sound: 'soa como um “t” seco, sem vibrar a garganta — pela mesma razão do “b”, o islandês não tem o som vibrante do nosso “d”' },
      { letter: 'g', ipa: 'k', sound: 'soa como um “k” sem soprar — pela mesma razão do “b” e do “d”, explicada ali' },
      { letter: 'h', ipa: 'h', sound: 'tem som de verdade, aspirado como o “h” do inglês — diferente do nosso h mudo. No grupo “hv-” soa “kv”' },
      { letter: 'j', ipa: 'j', sound: 'soa “i” bem rápido (semivogal “y” do inglês “yes”) — nunca o nosso “j” de “janela”' },
      { letter: 'r', ipa: 'r', sound: 'é um “r” vibrado ou batido com a ponta da língua — nunca o “r” gutural do nosso “rato”/“carro”' },
      { letter: 'u', ipa: 'ʏ', sound: 'vogal sem equivalente em português — mais perto de um “u” dito com os lábios em bico, como o alemão “ü” (nunca o som do nosso “u”)' },
      { letter: 'y', ipa: 'ɪ', sound: 'soa exatamente como o “i” islandês — hoje são duas letras pro mesmo som, só por tradição histórica de escrita' },
    ],
    // alfabeto oficial islandês não lista c/q/w/z (ver nota de fonte acima): nenhuma letra
    // 'internacional' aqui, diferente dos outros idiomas latinos desta tabela
    internacional: [],
  },
  // Fonte: en.wikipedia.org/wiki/Estonian_orthography (ordem oficial de 27 letras, intercalando
  // Š/Z/Ž logo depois do S; confirma que F/Š/Z/Ž são “letras estrangeiras” que FAZEM parte do
  // alfabeto mas “só ocorrem em empréstimos e nomes próprios” — por isso entram como
  // 'internacional', igual ao k/q/w/y do romeno — e que C/Q/W/X/Y NÃO fazem parte do alfabeto
  // estoniano nenhum, por isso ficam de fora, igual ao c/q/w/z do islandês) e en.wikipedia.org/wiki/
  // Estonian_phonology (B/D/G são só versões fracas/breves de P/T/K, sem vibração de voz de
  // verdade; H some na fala corrida; R é vibrado).
  et: {
    ordem: ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 'z', 'ž', 't', 'u', 'v', 'õ', 'ä', 'ö', 'ü'],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'e', ipa: 'e', sound: 'soa como o nosso “ê” fechado' },
      { letter: 'i', ipa: 'i', sound: 'soa igual ao nosso “i”' },
      { letter: 'k', ipa: 'k', sound: 'soa igual ao nosso “c” de “casa” (sem soprar)' },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'o', sound: 'soa como o nosso “ô” fechado' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p” (sem soprar)' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”, sem soprar e sem virar “tchi”' },
      { letter: 'u', ipa: 'u', sound: 'soa igual ao nosso “u” fechado' },
      { letter: 'v', ipa: 'v', sound: 'soa igual ao nosso “v”' },
    ],
    falsa: [
      {
        letter: 'b',
        ipa: 'p̬',
        sound: 'o estoniano não distingue “b” de “p” pela vibração da voz: o “b” é só uma versão mais fraca e breve do “p”, nunca tão vibrante quanto o nosso “b”',
      },
      { letter: 'd', ipa: 't̬', sound: 'pela mesma razão do “b”: é uma versão mais fraca e breve do “t”, nunca tão vibrante quanto o nosso “d”' },
      { letter: 'g', ipa: 'k̬', sound: 'pela mesma razão do “b” e do “d”: é uma versão mais fraca e breve do “k”, nunca tão vibrante quanto o nosso “g”' },
      {
        letter: 'h',
        ipa: 'h',
        sound: 'tem som de verdade no começo de sílaba tônica e na fala cuidada; na fala do dia a dia, o “h” do começo da palavra costuma desaparecer — bem diferente do nosso h, que é sempre mudo (nunca aparece nem desaparece)',
      },
      { letter: 'j', ipa: 'j', sound: 'soa “i” bem rápido (semivogal “y” do inglês “yes”) — nunca o nosso “j” de “janela”' },
      { letter: 'r', ipa: 'r', sound: 'é um “r” vibrado, com a ponta da língua batendo várias vezes — nunca o “r” gutural do nosso “rato”/“carro”' },
    ],
    internacional: [
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f” — mas é uma letra “estrangeira”: aparece só em empréstimos e nomes próprios, nunca em palavra estoniana nativa' },
      { letter: 'š', ipa: 'ʃ', sound: 'soa “ch”, como no nosso “xadrez” — letra “estrangeira”, só em empréstimos e nomes próprios' },
      { letter: 'z', ipa: 'z', sound: 'soa “z”, como no nosso “zero” — a letra mais rara do alfabeto estoniano, só em empréstimos ainda não adaptados' },
      { letter: 'ž', ipa: 'ʒ', sound: 'soa “j”, como no nosso “janela” — letra “estrangeira”, só em empréstimos e nomes próprios' },
    ],
  },
  // Fonte: en.wikipedia.org/wiki/Spanish_orthography (27 letras oficiais da RAE desde a reforma de
  // 2010 — a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z —, sem
  // ch/ll/rr como letra à parte; confirma que K e W “aparecem só em empréstimos”, como “karate” e
  // “kilo”) — pronúncia do espanhol castelhano (região do pacote, Castela), com nota de que o
  // pacote usa voz mexicana (es-MX) pro áudio, então a nota de C/Z já cita a pronúncia “seseante”
  // (sem o “th”) que é a que o áudio realmente fala, com o “th” castelhano como informação extra.
  es: {
    ordem: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    igual: [
      { letter: 'a', ipa: 'a', sound: 'soa como o nosso “a” de “casa”' },
      { letter: 'b', ipa: 'b', sound: 'soa igual ao nosso “b” no começo de palavra; entre vogais fica mais suave, quase um “v” fraco (sem bater os lábios com força)' },
      {
        letter: 'c',
        ipa: 'k',
        sound: 'antes de a/o/u soa “k”, igual ao nosso “c” de “casa”; antes de e/i soa “s” — o mesmo padrão do nosso “c” de “cedo”',
        prefer: /^c[^ei]/,
      },
      { letter: 'd', ipa: 'd', sound: 'soa igual ao nosso “d” no começo de palavra; entre vogais fica mais suave, quase um “th” fraco' },
      { letter: 'e', ipa: 'e', sound: 'soa como o nosso “ê” fechado' },
      { letter: 'f', ipa: 'f', sound: 'soa igual ao nosso “f”' },
      { letter: 'h', ipa: '—', sound: 'é sempre mudo, como o nosso “h” — a rara exceção é em empréstimos recentes, como “hámster”' },
      { letter: 'i', ipa: 'i', sound: 'soa igual ao nosso “i”' },
      { letter: 'l', ipa: 'l', sound: 'soa igual ao nosso “l”' },
      { letter: 'm', ipa: 'm', sound: 'soa igual ao nosso “m”' },
      { letter: 'n', ipa: 'n', sound: 'soa igual ao nosso “n”' },
      { letter: 'o', ipa: 'o', sound: 'soa como o nosso “ô” fechado' },
      { letter: 'p', ipa: 'p', sound: 'soa igual ao nosso “p”' },
      { letter: 'q', ipa: 'k', sound: 'sempre acompanhado de um “u” mudo (“que”/“qui”) e soa “k”, igual ao nosso “qu” de “aquele”' },
      { letter: 's', ipa: 's', sound: 'soa igual ao nosso “s” de “sapo”' },
      { letter: 't', ipa: 't', sound: 'soa igual ao nosso “t”' },
      { letter: 'u', ipa: 'u', sound: 'soa igual ao nosso “u” fechado' },
      { letter: 'x', ipa: 'ks', sound: 'soa “ks”, como no nosso “táxi”; em palavras de origem indígena mexicana (como “México”, “Oaxaca”) pode soar “s” ou um “j” mais forte' },
      {
        letter: 'y',
        ipa: 'ʝ',
        sound: 'como consoante (começo de palavra ou sílaba) soa entre o nosso “i” e o nosso “j”, variando de região pra região; como vogal sozinha (“y” = “e”), soa “i”',
      },
    ],
    falsa: [
      {
        letter: 'g',
        ipa: 'ɡ',
        sound: 'antes de a/o/u soa “g” duro, igual ao nosso “g” de “gato”; antes de e/i soa um “r” gutural forte, bem no fundo da garganta — nada a ver com o nosso “g” de “gelo”, que vira “j”',
        prefer: /^g[^ei]/,
      },
      { letter: 'j', ipa: 'x', sound: 'é um “r” gutural forte, bem no fundo da garganta (quase um “h” bem áspero) — nunca o nosso “j” de “janela”' },
      {
        letter: 'r',
        ipa: 'r',
        sound: 'entre vogais é um “r” bem batido (como o nosso “r” de “cara”); no começo da palavra ou dobrado (“rr”) é um “r” vibrado, rolado com a ponta da língua — nunca o “r” gutural do nosso “rato”/“carro”',
      },
      { letter: 'v', ipa: 'b', sound: 'soa exatamente como o “b” — o espanhol não distingue “b” de “v” na pronúncia, bem diferente do nosso “v” de “vaca”' },
      {
        letter: 'z',
        ipa: 's',
        sound: 'soa “s” surdo (nunca o nosso “z” vibrante de “zebra”); no espanhol da Espanha (região deste pacote), soa como o “th” do inglês “think”',
      },
    ],
    internacional: [
      { letter: 'k', ipa: 'k', sound: 'soa “k”, igual ao nosso “c” de “casa” — usada só em empréstimos, como “kilo” e “karate”' },
      { letter: 'w', ipa: 'w', sound: 'soa como um “u” bem rápido (semivogal), como no inglês “weekend” — usada só em empréstimos do inglês/alemão e em nomes próprios visigóticos antigos' },
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
  // reordena pra sequência oficial do alfabeto (a que um nativo aprende na escola), em vez da ordem
  // de inserção por grupo (igual, depois falsa, depois internacional, depois nova) — a categoria
  // continua marcada em cada letra (`group`), só a ORDEM de exibição muda (pedido do dono do app,
  // 08/10/2026). `short` guarda a letra base em minúsculas (ex. 'ă'), que é o que está em `ordem`.
  letters.sort((a, b) => dados.ordem.indexOf(a.short) - dados.ordem.indexOf(b.short));
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

/**
 * Nota sobre a letra cursiva (escrita à mão) de idiomas cujo cursivo NÃO é uma forma reposicionada
 * da mesma letra (isso é `joining`, hoje só o árabe) e sim um traçado visualmente diferente por
 * letra — confirmado em 08/10/2026 pra hebraico (כתב יד) e russo (письменный шрифт), os dois pedidos
 * pelo dono do app. Fica de fora quem ainda não foi conferido numa fonte real (ver PENDENTES.md):
 * persa/urdu/pachto/curdo/uigur/árabe-egípcio usam escrita árabe e já ganham `joining` de graça
 * (mesmo código do árabe, por `\p{Script=Arabic}`), não precisam de nota cursiva; iídiche usa o
 * mesmo abjad hebraico mas o pacote ainda é só A1 (incompleto) — não conferido ainda.
 */
export const CURSIVO_POR_IDIOMA: Record<string, string> = {
  // Fonte: en.wikipedia.org/wiki/Cursive_Hebrew (seção "Contemporary forms", com o alfabeto cursivo
  // atual letra por letra, e "Historical forms", com a evolução de alef/lamed/mem final citada
  // abaixo). Diferente do árabe: o abjad hebraico IMPRESSO não conecta uma letra com a seguinte (só
  // 5 letras — כ מ נ פ צ — têm uma 2ª forma, usada no fim da palavra, já representada por um
  // codepoint Unicode à parte, tipo ך/כ — não é "forma conectada" no sentido do árabe). A letra
  // CURSIVA (כתב יד, a letra de mão do dia a dia, usada em cadernos/bilhetes/assinaturas — diferente
  // do כתב מרובע, a letra "quadrada" de livro/tela que o teclado do app já ensina) é outro traçado
  // por letra, não um reposicionamento da mesma forma.
  he: 'A letra cursiva do hebraico (כתב יד, usada à mão no dia a dia) não é uma versão “ligada” das letras de livro que você já viu aqui: cada letra tem um traçado praticamente diferente, quase uma fonte à parte. Algumas mudam bastante — o alef (א) se separa em duas partes, o lamed (ל) perde a curva e vira um traço puxado pra direita, o mem final (ם) se abre por baixo.',
  // Fonte: en.wikipedia.org/wiki/Russian_cursive (letra por letra: т cursivo parecido com o nosso
  // m, д que pode ganhar um rabicho por baixo, e о grupo и/л/м/ш/щ/ы com traçados parecidos entre
  // si, fácil de confundir). O cursivo russo CONECTA as letras de uma palavra com um traço contínuo
  // (aí sim parecido em espírito com o árabe), mas cada letra muda de FORMA, não de posição —
  // diferente do árabe, em que a MESMA forma de letra é que troca de posição (inicial/medial/final).
  ru: 'A letra cursiva do russo (письменный шрифт, a letra de mão do dia a dia — não o itálico de livro) também muda bastante de traçado: o т cursivo lembra o nosso “m”, o д pode ganhar um rabicho por baixo, e и/л/м/ш/щ/ы compartilham um traçado parecido (tipo um “u” sem o arco de cima), fácil de confundir entre si. As letras de uma palavra se conectam com um traço só, mas cada uma troca de FORMA (não de posição, como no árabe).',
};

export function alfabetoAutomatico(pack: LanguagePack): AlphabetData | null {
  if (pack.alphabet) return { ...pack.alphabet, cursiveInfo: pack.alphabet.cursiveInfo ?? CURSIVO_POR_IDIOMA[pack.code] };
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
  return { letters, readingWords, cursiveInfo: CURSIVO_POR_IDIOMA[pack.code] };
}
