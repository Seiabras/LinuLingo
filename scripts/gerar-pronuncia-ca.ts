/**
 * Gera src/data/ca/pronuncia.ts: o dicionário de exceções da IPA do catalão.
 *
 * Para cada palavra dos textos em catalão do app, compara as regras de src/services/ipa-ca.ts com o
 * espeak-ng (voz «ca», catalão central). Onde divergem, guarda a forma do espeak — que conhece o timbre
 * de «e» e «o» tônicos (nen [ɛ] × vell [e]) e as palavras que fogem das regras —, menos nas palavras
 * da lista CONFIAR_NAS_REGRAS, em que o espeak erra (conferidas uma a uma).
 *
 * Uso: npx tsx scripts/gerar-pronuncia-ca.ts   (precisa do espeak-ng instalado)
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { wordToIpaCa } from '../src/services/ipa-ca';

/** O espeak erra (ou dá uma pronúncia coloquial) e as regras acertam a forma padrão. */
const CONFIAR_NAS_REGRAS = new Set([
  // ditongo, não hiato
  'fruita', 'fruites', 'truita', 'truites', 'rei', 'reis', 'reina', 'reines', 'remei',
  // o espeak corta o r de «prendre» e o s de «aquest» (fala coloquial)
  'aprendre', 'prendre', 'comprendre', 'sorprendre', "sorprendre's", 'reprendre', 'arbre', 'arbres',
  'aquest', 'aquests',
  // s sonoro entre vogais (aleshores [ələˈzɔɾəs])
  'aleshores',
  // conjunção «o» é átona [u]; «sa» = sã (adjetivo), não o artigo baleà
  'o', 'sa',
  // empréstimos e grafias que o espeak lê à inglesa ou soletra mal
  'wifi', 'ball', 'xiuxiuejar', 'zoo', 'videojoc', 'videotrucada', "d'on",
  // infinitivo: o -r não soa
  'plantar',
  // compostos em que o espeak inventa um [d] ou perde o [t]
  'pit-roig', 'avantpassat', 'aeroport', 'text',
]);

const V = new Set('aeiouəɛɔ');
const OBS = new Set(['p', 'b', 't', 'd', 'k', 'ɡ', 'f', 'β', 'ð', 'ɣ']);
const units = (s: string): string[] => {
  const out: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    if (['tʃ', 'dʒ', 'ts', 'dz'].includes(two)) {
      out.push(two);
      i++;
    } else if (/\p{M}/u.test(s[i]) && out.length) out[out.length - 1] += s[i];
    else out.push(s[i]);
  }
  return out;
};
const isV = (u: string) => V.has(u[0]);

/** Começo da sílaba cuja vogal está em u[k] (ataque máximo: obstruinte + l/ɾ). */
function onset(u: string[], k: number): number {
  let on = k;
  if (on > 0 && (u[on - 1] === 'j' || u[on - 1] === 'w')) on--;
  let cons = 0;
  for (let j = on - 1; j >= 0 && !isV(u[j]) && u[j] !== 'j' && u[j] !== 'w'; j--) cons++;
  if (cons >= 2 && OBS.has(u[on - 2]) && (u[on - 1] === 'l' || u[on - 1] === 'ɾ') && !(/^[td]$/.test(u[on - 2]) && u[on - 1] === 'l')) on -= 2;
  else if (cons >= 1) on--;
  return on;
}

/** Saída do espeak → convenção do app: tônica no começo da sílaba (ˈ primária, ˌ secundária), r de coda [r]. */
function normalize(e: string): string {
  const u = units(e.trim());
  const base: string[] = [];
  const stressed: number[] = [];
  let pending = false;
  for (const x of u) {
    if (x === 'ˈ' || x === 'ˌ') {
      pending = true;
      continue;
    }
    if (pending && isV(x)) {
      stressed.push(base.length);
      pending = false;
    }
    base.push(x);
  }
  // r de coda: [r] (como nas regras)
  for (let i = 0; i < base.length; i++) if (base[i] === 'ɾ' && (i === base.length - 1 || (!isV(base[i + 1]) && base[i + 1] !== 'j' && base[i + 1] !== 'w'))) base[i] = 'r';
  if (base.filter(isV).length < 2) return base.join('');
  const marks = stressed.map((k, n) => [onset(base, k), n === stressed.length - 1 ? 'ˈ' : 'ˌ'] as const).sort((a, b) => b[0] - a[0]);
  for (const [pos, m] of marks) base.splice(pos, 0, m);
  return base.join('');
}

async function main() {
  // os textos do pacote inteiro (vocabulário, trilha, histórias, gramática…)
  const { PACKS } = await import('../src/data/idiomas');
  const { targetTexts } = await import('../src/data/textos-alvo');
  const words = new Set<string>();
  for (const t of targetTexts(PACKS.ca)) {
    for (const w of t.normalize('NFC').replace(/’/g, "'").split(/[^\p{L}\p{M}'·-]+/u)) {
      const clean = w.replace(/^['-]+|['-]+$/g, '').toLowerCase();
      if (/\p{L}/u.test(clean)) words.add(clean);
    }
  }
  const list = [...words].sort((a, b) => a.localeCompare(b, 'ca'));
  const ref = execFileSync('espeak-ng', ['-v', 'ca', '-q', '--ipa'], { input: list.join('\n') + '\n', encoding: 'utf8', maxBuffer: 64 << 20 }).split('\n');
  const lex: Record<string, string> = {};
  for (let i = 0; i < list.length; i++) {
    const w = list[i];
    const e = (ref[i] ?? '').trim();
    if (!e || /\s/.test(e) || CONFIAR_NAS_REGRAS.has(w)) continue;
    const n = normalize(e);
    if (n !== wordToIpaCa(w, {})) lex[w] = n;
  }
  const keys = Object.keys(lex).sort((a, b) => a.localeCompare(b, 'ca'));
  const q = (k: string) => (/^[a-zàèéíòóúïüç]+$/.test(k) ? k : JSON.stringify(k));
  writeFileSync(
    'src/data/ca/pronuncia.ts',
    `/**
 * Correções de pronúncia do catalão central: só as formas em que as regras de src/services/ipa-ca.ts
 * erram (o timbre de «e» e «o» tônicos sem acento gráfico, o -r que soa, os compostos, os advérbios em
 * -ment com duas tônicas). Gerado por scripts/gerar-pronuncia-ca.ts a partir do espeak-ng. Sem colchetes.
 */
export const IPA_CA: Record<string, string> = {
${keys.map((k) => `  ${q(k)}: ${JSON.stringify(lex[k])},`).join('\n')}
};
`,
  );
  console.log(`✅ ${keys.length} correções em ${list.length} palavras`);
}
void main();
