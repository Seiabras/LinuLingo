/**
 * Leitura da escrita lao em letras latinas, para quem ainda não lê a escrita (campo `reading` do
 * pacote lo).
 *
 * Padrão escolhido: a romanização ALA-LC do laosiano (Library of Congress, tabela "Lao"; a mesma
 * reproduzida em en.wikipedia.org/wiki/Romanization_of_Lao). Foi preferida ao BGN/PCGN (o sistema
 * de topônimos, combinado com a Commission Nationale de Toponymie do Laos) porque o BGN/PCGN segue a
 * ortografia francesa e engana quem lê em português: ຊ vira «x» (que para nós soa «ch»), ຍ vira «gn»
 * e o u vira «ou». A ALA-LC escreve ຊ «s», ຍ «ny», o u como «u», e marca as vogais longas com mácron
 * (ā, ī, ū, ē, ō), que é como o próprio vocabulário do pacote já escreve a pronúncia entre parênteses.
 *
 * Regras da tabela ALA-LC aplicadas aqui (o número é o da nota da tabela):
 * - Consoantes: valor no começo e no fim da sílaba (ດ = d no começo, t no fim; ບ = b / p). ວ no
 *   começo = v (nota 4: ວັດ «vat»); ວ depois de consoante e antes de vogal forma encontro «w» (ຂວາ
 *   «khwā»); ວ antes de consoante final é a vogal «ūa» (ດ້ວຍ «dūai»); ວ no fim = «o» (ນາວ «nāo»),
 *   com ◌ິວ/◌ີວ = «iu»/«īu» e ◌ຽວ = «īeo». ຍ no fim fecha o ditongo como «i» (nota 2).
 * - ຫ não se lê antes de ຍ, ນ, ມ, ຣ, ລ e ວ, nem nas ligaduras ໜ e ໝ (nota 5: ຫຍ້າ «nyā»); ຫຼ = «l»
 *   (nota 3). ອ no começo da sílaba é a consoante «ʻ» (nota 6: ອີກ «ʻīk»); depois de consoante é a
 *   vogal «ǭ».
 * - Vogais: ະ/ັ a, າ ā, ິ i, ີ ī, ຶ ư, ື ư̄, ຸ u, ູ u, ເ– e/ē, ແ– æ/ǣ, ໂ–/ົ o/ō, ເ–າະ/ັອ ǫ,
 *   ໍ/ອ ǭ, ເ–ິ/ເ–ີ œ/œ̄, ຽ/ເ–ຍ īa, ເ–ືອ ư̄a, ົວ ūa, ໃ–/ໄ– ai, ເ–ົາ ao, ຳ am (nota 7: a vogal
 *   sai depois da consoante mesmo quando se escreve antes dela).
 * - Os tons (່ ້ ໊ ໋) não se romanizam (nota 9).
 *
 * O lao não separa as palavras com espaço (nota 9). Aqui cada sílaba sai separada por espaço (quase
 * todas as palavras nativas têm uma sílaba só), e as palavras de mais de uma sílaba que o próprio
 * vocabulário do pacote conhece saem com as sílabas ligadas por hífen, como no vocabulário
 * («ສະບາຍດີ» → «sa-bāi-dī»). Se aparecer uma consoante sem vogal que a tabela não explica (vogal
 * implícita, grafia antiga, letra páli), a frase fica sem leitura: melhor nada do que um som inventado.
 */

const TONS = /[່-໋໌]/g; // ່ ້ ໊ ໋ e o cancelador ໌ (este só aparece em empréstimos)

/** Consoantes: [valor no começo da sílaba, valor no fim] (ALA-LC; '' = não fecha sílaba). */
const CONSOANTES: Record<string, [string, string]> = {
  ກ: ['k', 'k'], ຂ: ['kh', 'k'], ຄ: ['kh', 'k'], ງ: ['ng', 'ng'], ຈ: ['ch', 't'], ສ: ['s', 't'],
  ຊ: ['s', 't'], ຍ: ['ny', 'i'], ດ: ['d', 't'], ຕ: ['t', 't'], ຖ: ['th', 't'], ທ: ['th', 't'],
  ນ: ['n', 'n'], ບ: ['b', 'p'], ປ: ['p', 'p'], ຜ: ['ph', 'p'], ຝ: ['f', 'p'], ພ: ['ph', 'p'],
  ຟ: ['f', 'p'], ມ: ['m', 'm'], ຢ: ['y', ''], ຣ: ['r', 'n'], ລ: ['l', 'n'], ວ: ['v', 'o'],
  ຫ: ['h', ''], ອ: ['ʻ', ''], ຮ: ['h', ''], ໜ: ['n', ''], ໝ: ['m', ''],
};
const LIDERES = new Set(['ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ']); // vogais escritas antes da consoante
/** sinais de vogal que vêm depois (ou em cima/embaixo) da consoante */
const SINAIS = new Set(['ະ', 'ັ', 'າ', 'ຳ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ົ', 'ໍ', 'ຽ']);
const SOANTES_DEPOIS_DE_HO = new Set(['ຍ', 'ນ', 'ມ', 'ຣ', 'ລ', 'ວ']); // nota 5
const LAO = /[຀-໿]/;
const VELARES = new Set(['ກ', 'ຂ', 'ຄ', 'ງ']);
const OCLUSIVAS = new Set(['ກ', 'ຂ', 'ຄ', 'ຕ', 'ຖ', 'ທ', 'ດ', 'ປ', 'ຜ', 'ພ', 'ບ', 'ຟ', 'ຝ']);

const isCons = (c: string | undefined) => c !== undefined && c in CONSOANTES;
const isSinal = (c: string | undefined) => c !== undefined && SINAIS.has(c);

interface Silaba {
  latim: string;
  ini: number;
  fim: number;
}

/**
 * A consoante na posição `i` começa sílaba nova (em vez de fechar a anterior)? Começa se vem logo
 * seguida de vogal, de ອ-vogal, de ຼ, de ວ/ຣ/ລ formando encontro, ou se é ຫ antes de soante.
 */
function comecaSilaba(s: string, i: number): boolean {
  const c = s[i];
  const d = s[i + 1];
  if (!isCons(c)) return false;
  if (isSinal(d) || d === 'ຼ') return true;
  // ຂອງ: a consoante leva a vogal ǭ — a não ser que o ອ já traga vogal (ວັນອັງຄານ: ນ fecha «van»)
  if (d === 'ອ') return !isSinal(s[i + 2]);
  if (c === 'ຫ' && d !== undefined && SOANTES_DEPOIS_DE_HO.has(d)) return true;
  // encontros: ວ depois das velares (ຂວາ «khwā»), ຣ depois de oclusiva nos empréstimos (ບຣາຊິນ);
  // depois de uma vogal, ນ + ວັ é final + sílaba nova (ອື່ນ ວັນ), não encontro
  if (d === 'ວ' && VELARES.has(c) && isSinal(s[i + 2])) return true;
  if (d === 'ຣ' && OCLUSIVAS.has(c) && isSinal(s[i + 2])) return true;
  if (d === 'ວ' && isCons(s[i + 2]) && !comecaSilaba(s, i + 2)) return true; // ດວຍ «dūai»
  return false;
}

/** Lê uma sílaba a partir de `i`; `null` se a grafia não couber nas regras (vogal implícita etc.). */
function lerSilaba(s: string, i0: number): Silaba | null {
  let i = i0;
  const lider = LIDERES.has(s[i]) ? s[i++] : '';
  // consoante inicial (com ຫ mudo, ຼ e encontros)
  const c = s[i];
  if (!isCons(c)) return null;
  let ini: string;
  if (c === 'ຫ' && s[i + 1] !== undefined && SOANTES_DEPOIS_DE_HO.has(s[i + 1])) {
    ini = CONSOANTES[s[i + 1]][0];
    i += 2;
  } else if (c === 'ຫ' && s[i + 1] === 'ຼ') {
    ini = 'l';
    i += 2;
  } else {
    ini = CONSOANTES[c][0];
    i++;
    if (s[i] === 'ຼ') i++; // ຼ subscrito fora do ຫ não se romaniza (nota 3)
  }
  // ວ de encontro (ຂວາ «khwā»; com vogal antes da consoante, também antes da final: ແຂວງ «khwǣng»)
  if (s[i] === 'ວ' && (isSinal(s[i + 1]) || (lider && isCons(s[i + 1]) && !comecaSilaba(s, i + 1)))) {
    ini += 'w';
    i++;
  } else if ((s[i] === 'ຣ' || s[i] === 'ລ') && OCLUSIVAS.has(c) && isSinal(s[i + 1])) {
    ini += CONSOANTES[s[i]][0]; // encontro de empréstimo: ບຣາຊິນ «brāsin»
    i++;
  }

  // vogal: [padrão depois da consoante, romanização, a sílaba fecha aqui (não leva final)?]
  const tenta = (padroes: [string, string, boolean][]): [string, boolean] | null => {
    for (const [p, r, aberta] of padroes) {
      if (s.startsWith(p, i)) {
        i += p.length;
        return [r, aberta];
      }
    }
    return null;
  };
  let vogal: [string, boolean] | null = null;
  if (lider === 'ເ') {
    vogal = tenta([
      ['ັຽະ', 'ia', true], ['ົາ', 'ao', true], ['າະ', 'ǫ', true], ['ຶອ', 'ưa', false], ['ືອ', 'ư̄a', false],
      ['ິ', 'œ', false], ['ີ', 'œ̄', false], ['ະ', 'e', true], ['ັ', 'e', false],
    ]);
    if (!vogal && s[i] === 'ຍ' && !comecaSilaba(s, i)) {
      i++;
      vogal = ['īa', true]; // ເ–ຍ (grafia antiga de ◌ຽ no fim da sílaba)
    }
    vogal ??= ['ē', false];
  } else if (lider === 'ແ') {
    vogal = tenta([['ະ', 'æ', true], ['ັ', 'æ', false]]) ?? ['ǣ', false];
  } else if (lider === 'ໂ') {
    vogal = tenta([['ະ', 'o', true]]) ?? ['ō', false];
  } else if (lider === 'ໃ' || lider === 'ໄ') {
    vogal = ['ai', true];
  } else {
    vogal = tenta([
      ['ັວ', 'ua', false], ['ັຍ', 'ai', true], ['ັຽ', 'ia', false], ['ັອ', 'ǫ', false], ['ັ', 'a', false],
      ['ະ', 'a', true], ['າ', 'ā', false], ['ຳ', 'am', true], ['ິ', 'i', false], ['ີ', 'ī', false],
      ['ຶ', 'ư', false], ['ື', 'ư̄', false], ['ຸ', 'u', false], ['ູ', 'ū', false],
      ['ົວະ', 'ua', true], ['ົວ', 'ūa', false], ['ົ', 'o', false], ['ໍ', 'ǭ', true], ['ຽ', 'īa', false],
    ]);
    if (!vogal && s[i] === 'ອ' && !comecaSilaba(s, i)) {
      i++;
      vogal = ['ǭ', false]; // ອ depois de consoante é vogal (nota 6)
    }
    if (!vogal && s[i] === 'ວ' && isCons(s[i + 1]) && !comecaSilaba(s, i + 1)) {
      i++;
      vogal = ['ūa', false]; // ວ antes de consoante final (nota 4)
    }
  }
  if (!vogal) return null; // consoante sem vogal escrita: a tabela não diz como ler
  let [latim, aberta] = vogal;
  latim = ini + latim;

  // consoante final
  if (!aberta && isCons(s[i]) && !comecaSilaba(s, i)) {
    const f = s[i];
    const valor = CONSOANTES[f][1];
    if (!valor) return null;
    if (f === 'ວ' && /[iī]$/.test(latim)) latim += 'u'; // ◌ິວ «iu», ◌ີວ «īu»
    else if (f === 'ວ' && latim.endsWith('īa')) latim = latim.slice(0, -1) + 'eo'; // ◌ຽວ «īeo»
    else latim += valor;
    i++;
  }
  return { latim, ini: i0, fim: i };
}

/** Sílabas de um trecho só com letras lao (sem tons), ou `null` se algum pedaço não tiver leitura. */
function silabas(s: string): Silaba[] | null {
  const out: Silaba[] = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === 'ໆ') {
      // ໆ repete a sílaba anterior
      const ant = out.at(-1);
      if (!ant) return null;
      out.push({ latim: ant.latim, ini: i, fim: i + 1 });
      i++;
      continue;
    }
    const sil = lerSilaba(s, i);
    if (!sil || sil.fim === i) return null;
    out.push(sil);
    i = sil.fim;
  }
  return out;
}

const VOGAL_SO: Record<string, string> = {
  'ເ': 'ē', 'ແ': 'ǣ', 'ໂ': 'ō', 'ໃ': 'ai', 'ໄ': 'ai', 'ະ': 'a', 'ັ': 'a', 'າ': 'ā', 'ຳ': 'am', 'ິ': 'i', 'ີ': 'ī', 'ຶ': 'ư', 'ື': 'ư̄',
  'ຸ': 'u', 'ູ': 'ū', 'ົ': 'o', 'ໍ': 'ǭ', 'ຽ': 'īa',
};

/** O valor de uma letra sozinha: a consoante no começo da sílaba, ou a vogal (ອ sozinho não tem som próprio). */
function letraSo(c: string): string {
  if (c === 'ອ') return '';
  return CONSOANTES[c]?.[0] ?? VOGAL_SO[c] ?? '';
}

const semTom = (s: string) => s.normalize('NFC').replace(TONS, '').replace(/ໍາ/g, 'ຳ');

/**
 * Monta a leitura do lao. `palavras`: as palavras do vocabulário do pacote, para juntar com hífen as
 * sílabas de uma mesma palavra (o lao não usa espaço entre palavras).
 */
export function leituraLao(palavras: readonly string[] = []): (texto: string) => string {
  const conhecidas = new Set(palavras.map(semTom).filter((p) => /^[຀-໿]+$/.test(p)));
  return (texto) => {
    if (!LAO.test(texto)) return '';
    const t = semTom(texto);
    // letra sozinha (treino do alfabeto): o valor da letra
    const so = t.trim();
    if ([...so].length === 1) return letraSo(so);
    let falhou = false;
    const saida = t.replace(/[຀-໿]+/g, (trecho) => {
      if (/[໐-໙]/.test(trecho)) {
        // algarismos lao (nota 8) viram os nossos; o resto do trecho segue normal
        trecho = trecho.replace(/[໐-໙]/g, (d) => ` ${d.charCodeAt(0) - 0x0ed0} `);
        return trecho.replace(/[຀-໿]+/g, (r) => juntar(r) ?? ((falhou = true), '')).replace(/\s+/g, ' ').trim();
      }
      const r = juntar(trecho);
      if (r === null) falhou = true;
      return r ?? '';
    });
    if (falhou) return '';
    return saida.replace(/\s+/g, ' ').trim();
  };

  function juntar(trecho: string): string | null {
    if (trecho.length === 1) return letraSo(trecho) || null; // letra citada sozinha numa explicação
    const sils = silabas(trecho);
    if (!sils) return null;
    const pedacos: string[] = [];
    for (let k = 0; k < sils.length; ) {
      // a palavra conhecida mais longa que começa nesta sílaba e termina numa fronteira de sílaba
      let m = 1;
      for (let j = sils.length; j > k + 1; j--) {
        if (conhecidas.has(trecho.slice(sils[k].ini, sils[j - 1].fim))) {
          m = j - k;
          break;
        }
      }
      pedacos.push(sils.slice(k, k + m).map((x) => x.latim).join('-'));
      k += m;
    }
    return pedacos.join(' ');
  }
}
