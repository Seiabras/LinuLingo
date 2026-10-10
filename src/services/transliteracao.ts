/**
 * Transliterações mecânicas entre as escritas de uma mesma língua, para as variantes de escrita
 * (10/10/2026). Só servem para as amostras de vocabulário das variantes: o curso continua na escrita
 * padrão de cada idioma.
 *
 * - Sérvio, cirílico → latino (gajica): correspondência letra a letra, oficial (Lei do uso das
 *   escritas, Sérvia; tabela em «Gaj's Latin alphabet», Wikipédia).
 * - Uzbeque, latino (1995/2021) → cirílico: a tabela de correspondência da Wikipédia («Uzbek
 *   alphabet»); os empréstimos russos (ц, ь, ъ) não voltam sozinhos e ficam de fora das amostras.
 * - Bielorrusso, cirílico → łacinka clássica: as regras da Wikipédia («Belarusian Latin alphabet»);
 *   a palatalização por assimilação («снег» → «śnieh») não aparece na escrita cirílica, e as palavras
 *   com ela ficam de fora das amostras (`lacinkaSegura`).
 */

const SR: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ђ: 'đ', е: 'e', ж: 'ž', з: 'z', и: 'i', ј: 'j', к: 'k', л: 'l', љ: 'lj',
  м: 'm', н: 'n', њ: 'nj', о: 'o', п: 'p', р: 'r', с: 's', т: 't', ћ: 'ć', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'č',
  џ: 'dž', ш: 'š',
};

function maiuscula(saida: string, original: string): string {
  return original !== original.toLowerCase() ? saida.charAt(0).toUpperCase() + saida.slice(1) : saida;
}

export function srCirilicoParaLatino(texto: string): string {
  return [...texto].map((ch) => {
    const baixa = ch.toLowerCase();
    const lat = SR[baixa];
    return lat === undefined ? ch : maiuscula(lat, ch);
  }).join('');
}

const UZ_SIMPLES: Record<string, string> = {
  a: 'а', b: 'б', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о',
  p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', x: 'х', y: 'й', z: 'з', 'ʼ': 'ъ',
};
const UZ_DUPLAS: [string, string][] = [
  ['yoʻ', 'йў'], ['oʻ', 'ў'], ['gʻ', 'ғ'], ['sh', 'ш'], ['ch', 'ч'], ['yo', 'ё'], ['yu', 'ю'], ['ya', 'я'], ['ye', 'е'],
];
const VOGAL_LAT = /[aeiouʻ]/;

export function uzLatinoParaCirilico(texto: string): string {
  // as variantes do apóstrofo do “oʻ”/“gʻ” viram o caractere oficial (U+02BB)
  const t = texto.replace(/[‘'`]/g, 'ʻ').replace(/’/g, 'ʼ');
  let saida = '';
  for (let i = 0; i < t.length; ) {
    const resto = t.slice(i).toLowerCase();
    const dupla = UZ_DUPLAS.find(([lat]) => resto.startsWith(lat));
    if (dupla) {
      saida += maiuscula(dupla[1], t.slice(i, i + dupla[0].length));
      i += dupla[0].length;
      continue;
    }
    const ch = t[i];
    const baixa = ch.toLowerCase();
    if (baixa === 'e') {
      // “e” no começo da palavra ou depois de vogal é “э”
      const antes = i === 0 ? '' : t[i - 1].toLowerCase();
      saida += maiuscula(!antes || !/\p{L}|ʻ/u.test(antes) || VOGAL_LAT.test(antes) ? 'э' : 'е', ch);
    } else {
      const cir = UZ_SIMPLES[baixa];
      saida += cir === undefined ? ch : maiuscula(cir, ch);
    }
    i += 1;
  }
  return saida;
}

const BE_DURAS: Record<string, string> = {
  б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', ж: 'ž', з: 'z', й: 'j', к: 'k', л: 'ł', м: 'm', н: 'n', п: 'p', р: 'r',
  с: 's', т: 't', ў: 'ŭ', ф: 'f', х: 'ch', ц: 'c', ч: 'č', ш: 'š', а: 'a', о: 'o', у: 'u', ы: 'y', э: 'e',
};
const BE_BRANDAS: Record<string, string> = { е: 'e', ё: 'o', ю: 'u', я: 'a' };
const BE_SUAVE_COM_Ь: Record<string, string> = { з: 'ź', с: 'ś', н: 'ń', ц: 'ć', л: 'l' };
const BE_CONSOANTE = /[бвгґджзйклмнпрстўфхцчш]/;
const BE_VOGAL = /[аоуыэіеёюя]/;

export function beCirilicoParaLacinka(texto: string): string {
  const t = texto.normalize('NFD').replace(/́/g, '').normalize('NFC');
  let saida = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    const c = ch.toLowerCase();
    const antes = i > 0 ? t[i - 1].toLowerCase() : '';
    const depois = t[i + 1]?.toLowerCase() ?? '';
    let lat: string | undefined;
    if (c === 'д' && (depois === 'з' || depois === 'ж')) {
      // “дз” e “дж” são um som só: o “д” some aqui e o “з”/“ж” leva o “d”
      continue;
    }
    if (c === 'ь') continue;
    if (c === "'" || c === '’' || c === 'ʼ') continue;
    if (BE_BRANDAS[c] !== undefined) {
      if (antes === 'л') lat = BE_BRANDAS[c];
      else if (antes && BE_CONSOANTE.test(antes) && antes !== 'ў' && antes !== 'й') lat = 'i' + BE_BRANDAS[c];
      else lat = 'j' + BE_BRANDAS[c];
    } else if (c === 'і') {
      lat = antes && BE_VOGAL.test(antes) ? 'ji' : 'i';
    } else if (c === 'л') {
      lat = depois === 'ь' || /[еёюяі]/.test(depois) ? 'l' : 'ł';
    } else if (depois === 'ь' && BE_SUAVE_COM_Ь[c]) {
      lat = BE_SUAVE_COM_Ь[c];
    } else {
      lat = BE_DURAS[c];
    }
    if ((c === 'з' || c === 'ж') && antes === 'д') lat = 'd' + (depois === 'ь' && c === 'з' ? 'ź' : lat);
    saida += lat === undefined ? ch : maiuscula(lat, ch);
  }
  return saida;
}

/** Sem palatalização por assimilação (consoante + consoante branda), que o cirílico não marca. */
export function lacinkaSegura(palavra: string): boolean {
  return !/[зсцнд][бвгджзклмнпрстфхцчш]?[зсцнлдв][еёюяіь]/i.test(palavra.normalize('NFD').replace(/́/g, ''));
}
