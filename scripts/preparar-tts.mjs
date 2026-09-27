// Copia o motor da voz neural (onnxruntime-web e o espeak-ng do piper-phonemize) de node_modules
// para public/tts, ao lado de public/tts/voz-worker.mjs; o «expo export» leva a pasta para o site.
// Uso: node scripts/preparar-tts.mjs   (roda sozinho antes do build:web)
import { copyFileSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';

const OUT = 'public/tts';
mkdirSync(OUT, { recursive: true });
const copy = (from, to = from.split('/').at(-1)) => {
  copyFileSync(from, `${OUT}/${to}`);
  console.log(`  ${to}  ${(statSync(from).size / 1e6).toFixed(1)} MB`);
};

const ORT = 'node_modules/onnxruntime-web/dist';
copy(`${ORT}/ort.wasm.bundle.min.mjs`);
copy(`${ORT}/ort-wasm-simd-threaded.mjs`);
copy(`${ORT}/ort-wasm-simd-threaded.wasm`);

const PIPER = 'node_modules/@diffusionstudio/piper-wasm/build';
copy(`${PIPER}/piper_phonemize.wasm`);
copy(`${PIPER}/piper_phonemize.data`);
// o piper_phonemize.js é um script clássico (UMD); o worker é um módulo, então ganha um «export»
writeFileSync(`${OUT}/piper_phonemize.mjs`, `${readFileSync(`${PIPER}/piper_phonemize.js`, 'utf8')}\nexport default createPiperPhonemize;\n`);
console.log('✅ motor da voz neural em public/tts');
