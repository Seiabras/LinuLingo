import type { LanguagePack } from '@/data/types';
import { nomeIdioma } from '@/services/idioma-nome';

/**
 * Frase de abertura da tela do alfabeto (`AlphabetScreen.tsx`), personalizada pelo TIPO de sistema
 * de escrita do idioma — não generaliza todo idioma como "alfabeto" (motivo pelo qual o card do Home
 * virou "Sistema de escrita", em vez de "Alfabeto"). Pedido do Matheus (08/10/2026).
 *
 * Em vez de uma frase por idioma (30+ pacotes passam por `alfabetoAutomatico`), um pequeno
 * classificador lê `pack.lineage.writing` (texto livre em português já escrito à mão pra cada
 * idioma) e procura as palavras que os próprios dados já usam pra descrever o tipo de escrita
 * (abjad/abugida/silabário/alfabeto); sem nenhuma delas, a frase fica neutra ("sistema de escrita")
 * em vez de inventar uma classificação sem fonte.
 */
export type WritingKind = 'alfabeto' | 'abjad' | 'abugida' | 'silabario' | 'logografico' | 'neutro';

/**
 * Nomes de escritas específicas que `pack.lineage.writing` pode citar separadas por vírgula/"e"
 * (hoje só o japonês, "Hiragana, katakana e kanji") — chave por ESCRITA, não por idioma, pra valer
 * pra qualquer idioma futuro que combine as mesmas escritas (ex. o Okinawano/ryukyuano também usa
 * hiragana e kanji).
 */
const ESCRITA_POR_NOME: Record<string, WritingKind> = {
  hiragana: 'silabario',
  katakana: 'silabario',
  kana: 'silabario',
  kanji: 'logografico',
  hanzi: 'logografico',
  hangul: 'alfabeto',
};

const SINGULAR: Record<Exclude<WritingKind, 'neutro'>, string> = {
  alfabeto: 'alfabeto',
  abjad: 'abjad',
  abugida: 'abugida',
  silabario: 'silabário',
  logografico: 'logográfico',
};

const PLURAL: Record<Exclude<WritingKind, 'neutro'>, string> = {
  alfabeto: 'alfabetos',
  abjad: 'abjads',
  abugida: 'abugidas',
  silabario: 'silabários',
  logografico: 'logográficos',
};

/** Gênero do substantivo, pra escolher "um/uma" e "dois/duas" na frase com mais de uma escrita. */
const GENERO: Record<Exclude<WritingKind, 'neutro'>, 'm' | 'f'> = {
  alfabeto: 'm',
  abjad: 'm',
  abugida: 'f',
  silabario: 'm',
  logografico: 'm',
};

const NUMERAL: Record<'m' | 'f', Record<number, string>> = {
  m: { 1: 'um', 2: 'dois', 3: 'três', 4: 'quatro' },
  f: { 1: 'uma', 2: 'duas', 3: 'três', 4: 'quatro' },
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Classifica `writing` pelas palavras que o próprio texto já usa (nunca por adivinhação). Só olha a
 * PRIMEIRA frase (antes do primeiro ponto): ressalvas depois dele — como no toki pona, que cita a
 * escrita logográfica não-oficial "sitelen pona" só pra dizer "mas este curso ensina só a escrita
 * latina" — não podem virar a classificação principal.
 */
function classificar(writing: string): WritingKind {
  const exato = ESCRITA_POR_NOME[writing.trim().toLocaleLowerCase('pt-BR')];
  if (exato) return exato;
  const w = writing.split('.')[0].toLocaleLowerCase('pt-BR');
  if (w.includes('abjad')) return 'abjad';
  if (w.includes('abugida') || w.includes('devanágari') || w.includes('devanagari')) return 'abugida';
  if (w.includes('logográfic') || w.includes('logografic')) return 'logografico';
  if (w.includes('silabário') || w.includes('silabario') || w.includes('silábic') || w.includes('silabic')) return 'silabario';
  // "romanização"/"letras latinas" (klingon, sem a palavra "alfabeto" no texto, mas ensinado com
  // letras latinas comuns no treino de verdade, `tlh/alfabeto.ts`) contam como alfabeto também
  if (w.includes('alfabeto') || w.includes('romanização') || w.includes('letras latinas')) return 'alfabeto';
  return 'neutro';
}

/**
 * Tenta ler `writing` como uma lista de escritas (ex.: "Hiragana, katakana e kanji"): só aceita
 * quando o texto é curto, sem parênteses (nada de explicação dentro) e TODO pedaço separado por
 * vírgula/"e" é um nome conhecido de `ESCRITA_POR_NOME` — qualquer pedaço desconhecido cancela e
 * devolve `null` (a função que chama cai pro caminho de uma escrita só, mais seguro).
 */
function tentarVarias(writing: string): { kind: WritingKind; count: number; labels: string[] }[] | null {
  if (writing.includes('(') || writing.length > 60) return null;
  const partes = writing
    .split(/,| e /)
    .map((p) => p.trim())
    .filter(Boolean);
  if (partes.length < 2) return null;
  const kinds: WritingKind[] = [];
  for (const p of partes) {
    const k = ESCRITA_POR_NOME[p.toLocaleLowerCase('pt-BR')];
    if (!k) return null;
    kinds.push(k);
  }
  // agrupa mantendo a ordem da 1ª aparição de cada tipo (silabários antes do logográfico, como no
  // japonês: "Hiragana, katakana e kanji")
  const grupos: { kind: WritingKind; count: number; labels: string[] }[] = [];
  for (let i = 0; i < partes.length; i++) {
    const grupo = grupos.find((g) => g.kind === kinds[i]);
    if (grupo) {
      grupo.count++;
      grupo.labels.push(partes[i]);
    } else grupos.push({ kind: kinds[i], count: 1, labels: [partes[i]] });
  }
  // só vale a pena falar em "sistema de escrita: X e Y" quando há mais de UM TIPO — duas escritas do
  // mesmo tipo (hipotético) não ganham essa frase especial, caem no caminho singular
  return grupos.length >= 2 ? grupos : null;
}

function fraseUmaEscrita(kind: WritingKind): string {
  switch (kind) {
    case 'alfabeto':
      return 'o alfabeto';
    case 'silabario':
      return 'o silabário';
    case 'abjad':
      return 'a escrita abjad';
    case 'abugida':
      return 'a escrita abugida';
    case 'logografico':
      return 'a escrita logográfica';
    default:
      // sem palavra-chave reconhecida em `writing`: melhor ficar neutro do que inventar uma
      // classificação sem fonte (ex. mongol tradicional, manchu — escritas próprias sem um rótulo
      // "alfabeto/abjad/abugida/silabário" nos dados ainda)
      return 'o sistema de escrita';
  }
}

/**
 * Frase de abertura da tela do alfabeto: "Vamos praticar o alfabeto do romeno." ou, pra escritas
 * combinadas como a japonesa, "Vamos praticar o sistema de escrita do japonês: dois silabários,
 * Hiragana e Katakana, e um logográfico, Kanji."
 */
export function fraseAberturaEscrita(pack: LanguagePack): string {
  const idioma = nomeIdioma(pack.name);
  const varias = tentarVarias(pack.lineage.writing);
  if (varias) {
    const trechos = varias.map(({ kind, count, labels }) => {
      const substantivo = count > 1 ? PLURAL[kind as Exclude<WritingKind, 'neutro'>] : SINGULAR[kind as Exclude<WritingKind, 'neutro'>];
      const numero = NUMERAL[GENERO[kind as Exclude<WritingKind, 'neutro'>]][count] ?? String(count);
      return `${numero} ${substantivo}, ${labels.map(cap).join(' e ')}`;
    });
    const corpo = trechos.length > 1 ? `${trechos.slice(0, -1).join(', ')}, e ${trechos.at(-1)}` : trechos[0];
    return `Vamos praticar o sistema de escrita do ${idioma}: ${corpo}.`;
  }
  return `Vamos praticar ${fraseUmaEscrita(classificar(pack.lineage.writing))} do ${idioma}.`;
}
