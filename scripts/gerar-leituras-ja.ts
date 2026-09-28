// Leituras do japonês (kana, romaji e IPA) de todos os textos do pacote ja, pelo analisador
// morfológico kuromoji (dicionário IPADIC).
//
// Uso: npx tsx scripts/gerar-leituras-ja.ts [--checar]
//
// O app não leva o kuromoji (o dicionário tem ~17 MB): leva só a leitura de cada palavra que
// aparece nos textos (src/data/ja/leituras.ts) e, em tempo de execução, divide o texto pela palavra
// mais longa do dicionário (src/services/ja-leitura.ts). Quando essa divisão daria uma leitura
// diferente da do kuromoji (何 = なに × なん, で partícula × で de «て»), o texto inteiro fica guardado
// com a leitura certa. Correções à mão (nomes próprios, leituras que o IPADIC erra) ficam em
// src/data/ja/leituras-manuais.ts e valem por cima do kuromoji.
//
// --checar: não grava; só diz se o arquivo gerado está em dia (sai com erro se faltar leitura).
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readText, type ReadingDict } from '../src/services/ja-leitura';
import { toKatakana } from '../src/services/ipa-ja';

const require = createRequire(import.meta.url);
const kuromoji = require('kuromoji') as typeof import('kuromoji');

type Token = { surface: string; reading: string; pron: string; attach: boolean; unknown?: boolean };

const JA = /[ぁ-ゖァ-ーー㐀-䶿一-鿿々〆]/;
const KANJI = /[㐀-䶿一-鿿々〆]/;
const LATIN = /[A-Za-zÀ-ÿ]/;
// trechos japoneses dentro de um texto em português: «Diga «ありがとう» ao…»
const RUN = /[ぁ-ゖァ-ーー㐀-䶿一-鿿々〆　-〿！-～]+/g;

const OUT = resolve(__dirname, '../src/data/ja/leituras.ts');
const check = process.argv.includes('--checar');

void main();

async function main() {
  const { CORRECOES_JA } = (await import('../src/data/ja/leituras-manuais')) as { CORRECOES_JA: Record<string, string> };
  const texts = await collectTexts();
  const tokenizer = await new Promise<import('kuromoji').Tokenizer<import('kuromoji').IpadicFeatures>>((ok, err) =>
    kuromoji.builder({ dicPath: resolve(__dirname, '../node_modules/kuromoji/dict') }).build((e, t) => (e ? err(e) : ok(t))),
  );

  const tokenize = (text: string): Token[] => {
    const raw = tokenizer.tokenize(text.normalize('NFKC'));
    const toks: Token[] = [];
    let prefix = false;
    for (const t of raw) {
      const surface = t.surface_form;
      const kana = /^[ぁ-ゖァ-ーー]+$/.test(surface);
      const reading = t.reading ?? (kana ? toKatakana(surface) : '');
      const pron = t.pronunciation ?? reading;
      // grudam na palavra anterior: auxiliares (です, ます, た, ない), «て/で/ば» de ligação, sufixos (さん, 的)
      const attach =
        prefix ||
        t.pos === '助動詞' ||
        (t.pos === '助詞' && t.pos_detail_1 === '接続助詞') ||
        (t.pos === '名詞' && t.pos_detail_1 === '接尾') ||
        (t.pos === '動詞' && t.pos_detail_1 === '接尾');
      prefix = t.pos === '接頭詞';
      if (t.pos === '記号' || !JA.test(surface)) {
        toks.push({ surface, reading: '', pron: '', attach: true });
        continue;
      }
      toks.push({ surface, reading, pron, attach, unknown: !reading });
    }
    // correções à mão: juntam tokens seguidos cuja grafia forma a palavra corrigida
    for (let i = 0; i < toks.length; i++) {
      for (let n = Math.min(6, toks.length - i); n >= 1; n--) {
        const surf = toks
          .slice(i, i + n)
          .map((x) => x.surface)
          .join('');
        const fix = CORRECOES_JA[surf];
        if (!fix) continue;
        const [reading, pron] = fix.split('|');
        toks.splice(i, n, { surface: surf, reading, pron: pron ?? reading, attach: toks[i].attach });
        break;
      }
    }
    return toks;
  };

  // dicionário por palavra: a leitura mais frequente de cada grafia
  const counts = new Map<string, Map<string, number>>();
  const tokenized = new Map<string, Token[]>();
  const problems: string[] = [];
  for (const text of texts) {
    const toks = tokenize(text);
    tokenized.set(text, toks);
    for (const t of toks) {
      if (!t.reading) {
        if (t.unknown && KANJI.test(t.surface)) problems.push(`sem leitura: «${t.surface}» em «${text}» (acrescente em leituras-manuais.ts)`);
        continue;
      }
      const v = `${t.attach ? '+' : ''}${t.reading}${t.pron !== t.reading ? `|${t.pron}` : ''}`;
      const m = counts.get(t.surface) ?? new Map<string, number>();
      m.set(v, (m.get(v) ?? 0) + 1);
      counts.set(t.surface, m);
    }
    if (/[0-9０-９]/.test(text)) problems.push(`algarismo em «${text}»: escreva o número em kanji (三時, 二十歳) para a leitura sair certa`);
  }
  const words: ReadingDict = {};
  for (const [surface, m] of [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'ja')))
    words[surface] = [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];

  // textos em que a divisão do app dá outra leitura (ou outro espaçamento): leitura inteira
  const whole: ReadingDict = {};
  for (const [text, toks] of tokenized) {
    let reading = '';
    let pron = '';
    for (const t of toks) {
      if (!t.reading) {
        if (/[。、！？!?,.「」『』\s]/.test(t.surface) && reading && !reading.endsWith(' ')) {
          reading += ' ';
          pron += ' ';
        }
        continue;
      }
      const sep = reading && !t.attach && !reading.endsWith(' ') ? ' ' : '';
      reading += sep + t.reading;
      pron += sep + t.pron;
    }
    reading = reading.trim();
    pron = pron.trim();
    const got = readText(text, words);
    if (got.reading !== reading || got.pron !== pron) whole[text.trim()] = pron === reading ? reading : `${reading}|${pron}`;
  }

  const body = `// Gerado por scripts/gerar-leituras-ja.ts — não editar à mão (correções vão em ./leituras-manuais.ts).
// Leitura de cada palavra japonesa que aparece no app, pelo kuromoji (IPADIC): «leitura» ou
// «leitura|pronúncia» em katakana, com «+» quando a palavra gruda na anterior. Ver src/services/ja-leitura.ts.
import type { ReadingDict } from '@/services/ja-leitura';

/** Palavra → leitura (${Object.keys(words).length} grafias). */
export const PALAVRAS_JA: ReadingDict = {
${Object.entries(words)
  .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
  .join('\n')}
};

/** Textos em que a divisão pela palavra mais longa daria outra leitura (${Object.keys(whole).length} de ${texts.length}). */
export const TEXTOS_JA: ReadingDict = {
${Object.entries(whole)
  .sort((a, b) => a[0].localeCompare(b[0], 'ja'))
  .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
  .join('\n')}
};
`;
  console.log(`${texts.length} textos, ${Object.keys(words).length} palavras, ${Object.keys(whole).length} textos com leitura inteira`);
  if (problems.length) console.log(`⚠️ ${problems.length} problema(s):\n${[...new Set(problems)].slice(0, 80).join('\n')}`);
  if (check) {
    const cur = readFileSync(OUT, 'utf8');
    if (cur !== body) {
      console.log('❌ src/data/ja/leituras.ts está desatualizado: rode npx tsx scripts/gerar-leituras-ja.ts');
      process.exit(1);
    }
    process.exit(problems.length ? 1 : 0);
  }
  writeFileSync(OUT, body);
  process.exit(problems.length ? 1 : 0);
}

/** Todos os textos japoneses do pacote (e as frases das lacunas já preenchidas). */
async function collectTexts(): Promise<string[]> {
  const { JAPONES } = await import('../src/data/ja');
  const out = new Set<string>();
  const add = (s: string) => {
    if (!JA.test(s)) return;
    if (!LATIN.test(s)) out.add(s.trim());
    else for (const m of s.matchAll(RUN)) if (JA.test(m[0])) out.add(m[0].replace(/^[「『（(]+|[」』）)]+$/g, '').trim());
  };
  const walk = (v: unknown) => {
    if (typeof v === 'string') add(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk({ ...JAPONES, ipa: undefined, reading: undefined, typedReading: undefined });
  for (const u of JAPONES.units) for (const l of u.lessons) for (const c of l.cloze) for (const o of c.options) add(c.sentence.replace('___', o));
  for (const a of JAPONES.animalSounds ?? []) for (const part of a.verb.split(/\s+/)) add(part);
  return [...out].filter(Boolean).sort();
}
