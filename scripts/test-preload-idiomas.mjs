// Pré-carrega todos os pacotes de idioma antes dos testes rodarem (--import no script "test" do
// package.json). Os testes assumem PACKS já cheio de forma síncrona, como era antes de
// idiomas.ts virar "lazy" pra abrir o app mais rápido (09/10/2026) — aqui, ao contrário do app de
// verdade, não tem problema esperar todos de uma vez, porque não existe tela nenhuma pra atrasar.
import { preloadAllPacks } from '../src/data/idiomas';

await preloadAllPacks();
