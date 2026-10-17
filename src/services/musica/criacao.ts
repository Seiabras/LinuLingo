import { frequencia } from './notas';

/**
 * As músicas da aba Criar (pedido do dono, 17/10/2026: “salvar e enviar a música” e mais coisas na
 * aba): a grade de notas e batidas, a escala, o timbre e o andamento. Fica fora do React para o teste
 * rodar em Node: guardar, montar o link de envio, ler o link de volta e gerar o arquivo de áudio (WAV).
 */

export type EscalaCriar = 'maior' | 'menor' | 'pentatonica';
export type TimbreCriar = 'piano' | 'puro';

/**
 * As notas de cada escala, de cima (agudo) para baixo, oito linhas: dó maior (dó4 a dó5), lá menor
 * natural (lá3 a lá4) e a pentatônica de dó (dó, ré, mi, sol, lá), que não tem nenhuma nota que
 * “brigue” com outra, boa para quem está começando.
 */
export const ESCALAS_CRIAR: Record<EscalaCriar, { nome: string; notas: number[] }> = {
  maior: { nome: 'Maior (alegre)', notas: [72, 71, 69, 67, 65, 64, 62, 60] },
  menor: { nome: 'Menor (triste)', notas: [69, 67, 65, 64, 62, 60, 59, 57] },
  pentatonica: { nome: 'Pentatônica (sem erro)', notas: [76, 74, 72, 69, 67, 64, 62, 60] },
};

export const TIMBRES_CRIAR: Record<TimbreCriar, string> = { piano: 'Piano', puro: 'Flauta' };
export const TAMANHOS_CRIAR = [16, 32] as const;

export interface Criacao {
  nome: string;
  escala: EscalaCriar;
  timbre: TimbreCriar;
  bpm: number;
  colunas: number;
  /** uma linha por nota da escala (de cima para baixo), uma coluna por tempo */
  grade: boolean[][];
  batida: boolean[];
}

export const NOME_MAX_CRIACAO = 40;

export function criacaoVazia(colunas = 16): Criacao {
  return {
    nome: '',
    escala: 'maior',
    timbre: 'piano',
    bpm: 110,
    colunas,
    grade: Array.from({ length: 8 }, () => Array<boolean>(colunas).fill(false)),
    batida: Array.from({ length: colunas }, (_, i) => i % 4 === 0),
  };
}

/** Muda o tamanho (16 ↔ 32 tempos): cortando, ou repetindo o que já tem para encher. */
export function redimensionar(c: Criacao, colunas: number): Criacao {
  const ajusta = <T,>(linha: T[], vazio: T): T[] => Array.from({ length: colunas }, (_, i) => (i < linha.length ? linha[i]! : (linha[i % linha.length] ?? vazio)));
  return { ...c, colunas, grade: c.grade.map((l) => ajusta(l, false)), batida: ajusta(c.batida, false) };
}

// ---------- o link de envio ----------

// cada linha em hexadecimal: quatro tempos por letra (16 tempos = 4 letras)
const bits = (l: boolean[]) => {
  let h = '';
  for (let i = 0; i < l.length; i += 4) h += ((l[i] ? 8 : 0) | (l[i + 1] ? 4 : 0) | (l[i + 2] ? 2 : 0) | (l[i + 3] ? 1 : 0)).toString(16);
  return h;
};
const deBits = (s: string, n: number) => Array.from({ length: n }, (_, i) => ((parseInt(s[i >> 2] ?? '0', 16) >> (3 - (i % 4))) & 1) === 1);

function paraBase64Url(texto: string): string {
  const bytes = new TextEncoder().encode(texto);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function deBase64Url(code: string): string {
  const b64 = code.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

/** O trecho do link (depois do “#”): a música inteira, em poucos caracteres. */
export function codificarCriacao(c: Criacao): string {
  return paraBase64Url(JSON.stringify({ v: 1, n: c.nome, e: c.escala, t: c.timbre, b: c.bpm, c: c.colunas, g: c.grade.map(bits), x: bits(c.batida) }));
}

/** Lê o link de volta; qualquer coisa estranha (link cortado, editado à mão) dá null. */
export function decodificarCriacao(trecho: string): Criacao | null {
  try {
    const o = JSON.parse(deBase64Url(trecho.replace(/^#/, '').trim())) as Record<string, unknown>;
    const colunas = o.c === 16 || o.c === 32 ? o.c : null;
    const escala = typeof o.e === 'string' && o.e in ESCALAS_CRIAR ? (o.e as EscalaCriar) : null;
    const timbre = typeof o.t === 'string' && o.t in TIMBRES_CRIAR ? (o.t as TimbreCriar) : 'piano';
    const bpm = typeof o.b === 'number' && o.b >= 60 && o.b <= 200 ? Math.round(o.b) : null;
    const grade = Array.isArray(o.g) && o.g.length === 8 && o.g.every((l) => typeof l === 'string' && /^[0-9a-f]+$/.test(l)) ? (o.g as string[]) : null;
    if (o.v !== 1 || !colunas || !escala || !bpm || !grade || typeof o.x !== 'string' || !/^[0-9a-f]+$/.test(o.x)) return null;
    if (grade.some((l) => l.length !== colunas / 4) || o.x.length !== colunas / 4) return null;
    const nome = typeof o.n === 'string' ? o.n.slice(0, NOME_MAX_CRIACAO) : '';
    return { nome, escala, timbre, bpm, colunas, grade: grade.map((l) => deBits(l, colunas)), batida: deBits(o.x, colunas) };
  } catch {
    return null;
  }
}

// ---------- o arquivo de áudio ----------

/**
 * A música como um arquivo WAV (16 bits, mono), tocada uma vez, com o mesmo som do app: o “piano”
 * (a nota e dois harmônicos, com decaimento) ou a “flauta” (só a nota), e o clique da batida.
 */
export function wavDaCriacao(c: Criacao, taxa = 22050): Uint8Array {
  const tempo = 60 / c.bpm / 2; // cada coluna é uma colcheia
  const total = c.colunas * tempo + 1.2;
  const n = Math.floor(taxa * total);
  const mix = new Float32Array(n);
  const notas = ESCALAS_CRIAR[c.escala].notas;
  const somar = (t0: number, dur: number, f: (t: number) => number) => {
    const i0 = Math.floor(t0 * taxa);
    const i1 = Math.min(n, i0 + Math.floor(dur * taxa));
    for (let i = i0; i < i1; i++) mix[i]! += f((i - i0) / taxa);
  };
  for (let col = 0; col < c.colunas; col++) {
    const t0 = col * tempo;
    notas.forEach((midi, l) => {
      if (!c.grade[l]?.[col]) return;
      const hz = frequencia(midi);
      somar(t0, 0.9, (t) => {
        const env = Math.min(1, t / 0.01) * Math.exp(-3.5 * t);
        const v = c.timbre === 'piano' ? Math.sin(2 * Math.PI * hz * t) + 0.35 * Math.sin(4 * Math.PI * hz * t) + 0.15 * Math.sin(6 * Math.PI * hz * t) : Math.sin(2 * Math.PI * hz * t);
        return 0.3 * env * v;
      });
    });
    if (c.batida[col]) {
      const forte = col % 4 === 0;
      const hz = forte ? 1500 : 1000;
      somar(t0, 0.05, (t) => (forte ? 0.25 : 0.15) * Math.exp(-60 * t) * Math.sign(Math.sin(2 * Math.PI * hz * t)));
    }
  }
  // sem estourar: se a soma passar de 1, abaixa tudo junto
  let pico = 0;
  for (let i = 0; i < n; i++) pico = Math.max(pico, Math.abs(mix[i]!));
  const ganho = pico > 0.95 ? 0.95 / pico : 1;
  const bytes = new Uint8Array(44 + n * 2);
  const dv = new DataView(bytes.buffer);
  const txt = (o: number, t: string) => t.split('').forEach((ch, i) => dv.setUint8(o + i, ch.charCodeAt(0)));
  txt(0, 'RIFF');
  dv.setUint32(4, 36 + n * 2, true);
  txt(8, 'WAVEfmt ');
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, taxa, true);
  dv.setUint32(28, taxa * 2, true);
  dv.setUint16(32, 2, true);
  dv.setUint16(34, 16, true);
  txt(36, 'data');
  dv.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) dv.setInt16(44 + i * 2, Math.round(Math.max(-1, Math.min(1, mix[i]! * ganho)) * 32767), true);
  return bytes;
}

/** Um nome de arquivo sem acento nem espaço: “Minha música!” → “minha-musica”. */
export function nomeDeArquivo(nome: string): string {
  const base = nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return base || 'minha-musica';
}

// ---------- exemplos e surpresa ----------

/**
 * Os exemplos para começar: as duas melodias de domínio público de `data/musica/melodias.ts`, uma
 * nota a cada dois tempos, na escala maior (dó4 a dó5).
 */
export function exemploCriacao(nome: string, melodia: number[]): Criacao {
  const c = criacaoVazia(32);
  const linhas = ESCALAS_CRIAR.maior.notas;
  melodia.slice(0, 16).forEach((midi, i) => {
    const l = linhas.indexOf(midi);
    if (l >= 0) c.grade[l]![i * 2] = true;
  });
  return { ...c, nome };
}

/** Uma melodia inventada: anda pela escala aos passinhos, com pausas, e termina na nota de baixo. */
export function surpresa(base: Criacao, sorteio: () => number = Math.random): Criacao {
  const grade = Array.from({ length: 8 }, () => Array<boolean>(base.colunas).fill(false));
  let l = 7 - Math.floor(sorteio() * 4);
  for (let col = 0; col < base.colunas; col += 2) {
    if (col === base.colunas - 2) l = 7;
    else if (sorteio() < 0.2) continue;
    grade[l]![col] = true;
    l = Math.max(0, Math.min(7, l + Math.floor(sorteio() * 5) - 2));
  }
  return { ...base, grade };
}
