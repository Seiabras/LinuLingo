import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { NEURAL_VOICES, voiceUrls } from '@/data/vozes-neurais';

type MmsConfig = { kind: string; files: string[]; vocab: Record<string, number>; add_blank: boolean; normalize: boolean };
const load = <T>(path: string): T => JSON.parse(readFileSync(path, 'utf8')) as T;

test('voz do feroês (MMS): o worker tokeniza igual ao tokenizador oficial', async () => {
  // o caminho vai numa variável: o módulo é JavaScript puro do worker, sem tipos
  const mod = '../../public/tts/mms-ids.mjs';
  const { mmsIds } = (await import(mod)) as { mmsIds: (text: string, config: MmsConfig) => number[] };
  const config = load<MmsConfig>('public/vozes/fo/config.json');
  const cases = load<{ text: string; ids: number[] }[]>('src/data/fo/voz-teste.json');
  assert.ok(cases.length >= 3);
  // «seyðir, 3 kýr»: sem a vírgula e o 3 (fora do vocabulário) sobram dois espaços, e o tokenizador
  // oficial zera o resto da frase; o do worker junta os espaços (o modelo foi treinado com um só)
  const doubleSpace = (text: string) => / {2,}/.test([...text.toLowerCase()].filter((ch) => ch in config.vocab).join(''));
  const clean = cases.filter((c) => !doubleSpace(c.text));
  assert.ok(clean.length >= 3);
  for (const c of clean) assert.deepEqual(mmsIds(c.text, config), c.ids, c.text);
  const inv = Object.fromEntries(Object.entries(config.vocab).map(([k, v]) => [v, k]));
  const letters = (ids: number[]) => ids.filter((_, i) => i % 2).map((i) => inv[i]).join('');
  assert.equal(letters(mmsIds('Seyðir, 3 kýr og ein hundur.', config)), 'seyðir kýr og ein hundur');
});

test('voz do feroês (MMS): os arquivos estão no site e os pedaços registrados são os do config', () => {
  const config = load<MmsConfig>('public/vozes/fo/config.json');
  assert.equal(config.kind, 'mms');
  for (const f of config.files) assert.ok(existsSync(`public/vozes/fo/${f}`), f);
  const voice = NEURAL_VOICES['fo-mms'];
  assert.equal(voiceUrls(voice.id).model, `vozes/fo/${config.files[0]}`);
  assert.deepEqual(voice.local?.files, config.files, 'os pedaços do registro são os do config.json');
});
