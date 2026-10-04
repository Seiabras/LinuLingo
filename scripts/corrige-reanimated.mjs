// Corrige, depois de cada `npm install`/`npm ci` (postinstall), uma corrida do Reanimated 4 na web:
// quando uma tela sai da navegação (ex.: voltar da lição para a trilha) enquanto uma animação de
// saída (`exiting`, como a virada de página) ainda roda, a cópia animada é tirada da página duas
// vezes e o navegador acusa «Failed to execute 'removeChild' on 'Node'». A correção só tira o
// elemento se ele ainda estiver lá. Idempotente; avisa (sem falhar) se o Reanimated mudar o código.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const ARQUIVOS = [
  'node_modules/react-native-reanimated/lib/module/layoutReanimation/web/domUtils.js',
  'node_modules/react-native-reanimated/src/layoutReanimation/web/domUtils.ts',
];
const ANTES = '    parent.removeChild(child);\n';
const DEPOIS = '    if (child.parentNode === parent) parent.removeChild(child); // corrige-reanimated.mjs\n';

for (const f of ARQUIVOS) {
  if (!existsSync(f)) continue;
  const s = readFileSync(f, 'utf8');
  if (s.includes(DEPOIS)) continue;
  if (!s.includes(ANTES)) {
    console.warn(`corrige-reanimated: trecho não encontrado em ${f} (o Reanimated mudou? confira se o erro do removeChild voltou)`);
    continue;
  }
  writeFileSync(f, s.replace(ANTES, DEPOIS));
  console.log(`corrige-reanimated: ${f} corrigido`);
}
