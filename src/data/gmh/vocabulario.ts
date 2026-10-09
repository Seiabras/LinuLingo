import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do alto-alemão médio (mittelhochdeutsch, ca. 1050-1350), na grafia normalizada que os
 * manuais acadêmicos usam desde Karl Lachmann (séc. XIX) — com acento circunflexo pra marcar vogal
 * longa (â ê î ô û) e o símbolo “ȥ” pra um som que os manuscritos originais escreviam de formas
 * variadas (quase sempre “s” ou “z”). Os próprios manuscritos NÃO marcavam vogal longa nem o “ȥ” —
 * ver a lição de gramática sobre isso. Cada palavra foi conferida individualmente no Wiktionary
 * (seção “Middle High German” dedicada, quando existe) ou, faltando essa seção específica, na
 * etimologia do alemão moderno que cita a forma do alto-alemão médio (ex. “Dank” vem de “danc”;
 * marcado como confiança média — ver notas de cada palavra em `index.ts`/`extras.ts` e no commit).
 * Sem falantes nativos vivos — como o latim (`la`), o nórdico antigo (`non`), o francês antigo
 * (`fro`) e o eslavo eclesiástico antigo (`cu`), os exemplos usam um cenário de época (a corte da
 * Suábia, séc. XII-XIII), não o Brasil.
 *
 * Verbo “ter” (haben): existia, mas NENHUMA fonte conferida (Wiktionary, nem para o alto-alemão
 * médio nem indiretamente pelo alto-alemão antigo) traz uma tabela de conjugação presente dedicada
 * ao alto-alemão médio — por isso ele NÃO entra no vocabulário nem nos exemplos deste pacote; só o
 * verbo “sīn” (ser/estar), com tabela de presente plenamente atestada, é ensinado. Ver a lição de
 * gramática “O verbo sīn” e a nota em `extras.ts`.
 *
 * Palavras funcionais básicas usadas nos exemplos e nas lições (fora da lista de vocabulário
 * principal) seguem o mesmo padrão de confiança: “daȥ” (isso/aquilo) e “mīn” (meu/minha) têm seção
 * “Middle High German” dedicada e conferida; “dīn” (teu/tua) e “unde”/“hie” (e/aqui) são extensões
 * mínimas e regulares da mesma família de palavra (ex. “unde” confirmado via a etimologia do alemão
 * moderno “und”), não inventadas do zero.
 *
 * Simplificação consciente: depois do numeral 1, o alemão médio de verdade flexionava o substantivo
 * (plural com ou sem Umlaut, por classe de declinação — ver a lição de gramática sobre isso) — este
 * pacote, no nível A1, só junta o numeral à forma de dicionário de “ritter” (cavaleiro), sem marcar
 * plural ainda (mesma régua de simplificação que o `non`/`cu` já usam pra número/caso).
 */
export const ROWS: VocabRow[] = [
  // Expressões e essenciais
  ['danc', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Danc, vriunt!'],
  ['ja', 'sim', 'advérbio', 'Essenciais', '👍', 'Ja, ich bin vriunt.'],
  ['nein', 'não', 'advérbio', 'Essenciais', '👎', 'Wazzer? Nein, wīn!'],
  // Pronomes
  ['ich', 'eu', 'pronome', 'Pessoas', '🙋', 'Ich bin Linu.'],
  ['du', 'tu', 'pronome', 'Pessoas', '🫵', 'Bist du ritter?'],
  ['ër', 'ele', 'pronome', 'Pessoas', '👨', 'Ër ist vriunt.'],
  ['wir', 'nós', 'pronome', 'Pessoas', '🙌', 'Wir birn vriunt.'],
  ['ir', 'vós', 'pronome', 'Pessoas', '🫱', 'Ir birt ritter.'],
  // Verbo-chave
  ['sīn', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Ich bin Linu.'],
  // Família e pessoas
  ['vater', 'pai', 'substantivo', 'Pessoas', '👨', 'Daȥ ist mīn vater.', 'm'],
  ['muoter', 'mãe', 'substantivo', 'Pessoas', '👩', 'Daȥ ist mīn muoter.', 'f'],
  ['bruoder', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Daȥ ist mīn bruoder.', 'm'],
  ['swëster', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Daȥ ist mīn swëster.', 'f'],
  ['sun', 'filho', 'substantivo', 'Pessoas', '🧒', 'Daȥ ist mīn sun.', 'm'],
  ['tohter', 'filha', 'substantivo', 'Pessoas', '🧒', 'Daȥ ist mīn tohter.', 'f'],
  ['nāme', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mīn nāme ist Linu.', 'm'],
  ['vriunt', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Du bist mīn vriunt.', 'm'],
  // Casa, corte e bichos
  ['hūs', 'casa', 'substantivo', 'Essenciais', '🏠', 'Daȥ ist mīn hūs.', 'n'],
  ['ritter', 'cavaleiro', 'substantivo', 'Essenciais', '⚔️', 'Ër ist ritter.', 'm'],
  ['hunt', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Daȥ ist mīn hunt.', 'm'],
  ['katze', 'gato', 'substantivo', 'Essenciais', '🐈', 'Daȥ ist mīn katze.', 'f'],
  // Comida e bebida
  ['brōt', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Daȥ brōt ist guot.', 'n'],
  ['wīn', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Dër wīn ist rōt.', 'm'],
  ['wazzer', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Daȥ wazzer ist guot.', 'n'],
  // Cores
  ['wīȥ', 'branco', 'adjetivo', 'Cores', '⚪', 'Mīn hunt ist wīȥ.'],
  ['swarz', 'preto', 'adjetivo', 'Cores', '⚫', 'Mīn katze ist swarz.'],
  ['grüene', 'verde', 'adjetivo', 'Cores', '🟢', 'Daȥ ist grüene.'],
  ['rōt', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mīn wīn ist rōt.'],
  // Adjetivo essencial
  ['guot', 'bom', 'adjetivo', 'Essenciais', '👍', 'Dër wīn ist guot.'],
  // Números
  ['ein', 'um', 'numeral', 'Números', '1️⃣', 'Ein ritter.'],
  ['zwēne', 'dois', 'numeral', 'Números', '2️⃣', 'Zwēne ritter.'],
  ['dri', 'três', 'numeral', 'Números', '3️⃣', 'Dri ritter.'],
  ['vier', 'quatro', 'numeral', 'Números', '4️⃣', 'Vier ritter.'],
  ['vünf', 'cinco', 'numeral', 'Números', '5️⃣', 'Vünf ritter.'],
  ['sehs', 'seis', 'numeral', 'Números', '6️⃣', 'Sehs ritter.'],
  ['siben', 'sete', 'numeral', 'Números', '7️⃣', 'Siben ritter.'],
  ['ahte', 'oito', 'numeral', 'Números', '8️⃣', 'Ahte ritter.'],
  ['niun', 'nove', 'numeral', 'Números', '9️⃣', 'Niun ritter.'],
  ['zehen', 'dez', 'numeral', 'Números', '🔟', 'Zehen ritter.'],
];

export const VOCAB_GMH = buildVocab('gmh', ROWS);
