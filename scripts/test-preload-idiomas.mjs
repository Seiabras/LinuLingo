// Pré-carrega todos os pacotes de idioma antes dos testes rodarem (--import no script "test" do
// package.json). Os testes assumem PACKS já cheio de forma síncrona, como era antes de
// idiomas.ts virar "lazy" pra abrir o app mais rápido (09/10/2026) — aqui, ao contrário do app de
// verdade, não tem problema esperar todos de uma vez, porque não existe tela nenhuma pra atrasar.
//
// O módulo vem por `require`, não por `import`: os testes (.ts, sem "type": "module") são
// carregados como CommonJS pelo tsx, e um `import` daqui criaria uma segunda cópia de idiomas.ts,
// com outro PACKS — os testes viam o PACKS vazio.
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { preloadAllPacks } = require('../src/data/idiomas.ts');

await preloadAllPacks();
