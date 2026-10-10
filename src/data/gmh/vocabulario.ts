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
 *
 * NÍVEL A2 (ver `incomplete` em index.ts): os numerais 11, 12, 20, 30 e 100 (einlif, zwelf, zweinzic,
 * drīȥic, hundert) vêm da tabela da “Appendix:Middle High German numerals” do Wiktionary. Os
 * substantivos novos (burc, hant, houbet, fuoz, bein, herze, kirche, buoch, bette, bluome) e os
 * adjetivos novos (niuwe, schœne, guot já tínhamos, junc, riche, übel) têm página própria confirmada
 * na categoria “Middle High German nouns”/“Middle High German adjectives” do Wiktionary, com
 * etimologia do alto-alemão antigo. Quatro dias da semana têm página própria confirmada (mantac,
 * mittewoche, donerstac, vrītac) — os outros três (terça, sábado, domingo) NÃO têm página própria
 * localizada nesta sessão, por isso este pacote ainda não ensina a semana completa (lacuna honesta,
 * mesmo critério já usado para “haben” no A1). Os verbos novos (ezzen, trinken, sprechen, hān) TÊM
 * tabela de conjugação do presente confirmada no Wiktionary — diferente de “haben”, que não tinha
 * (ver a nota do A1): “hān” é a MESMA palavra que “haben”, só noutra grafia de dicionário, com tabela
 * de conjugação dedicada à parte.
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
  // ── A2.1: números maiores e dias da semana ──
  ['einlif', 'onze', 'numeral', 'Números', '✨', 'Einlif ritter.'],
  ['zwelf', 'doze', 'numeral', 'Números', '✨', 'Zwelf tage.'],
  ['zweinzic', 'vinte', 'numeral', 'Números', '✨', 'Zweinzic ritter.'],
  ['drīȥic', 'trinta', 'numeral', 'Números', '✨', 'Drīȥic tage.'],
  ['hundert', 'cem', 'numeral', 'Números', '💯', 'Hundert ritter.'],
  ['mantac', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hiute ist mantac.', 'm'],
  ['mittewoche', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hiute ist mittewoche.'],
  ['donerstac', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hiute ist donerstac.', 'm'],
  ['vrītac', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hiute ist vrītac.', 'm'],
  // ── A2.1: o corpo ──
  ['hant', 'mão', 'substantivo', 'Corpo', '✋', 'Mīn hant ist starc.', 'f'],
  ['houbet', 'cabeça', 'substantivo', 'Corpo', '👤', 'Mīn houbet ist grōȥ.', 'n'],
  ['fuoz', 'pé', 'substantivo', 'Corpo', '🦶', 'Mīn fuoz ist klein.', 'm'],
  ['bein', 'perna/osso', 'substantivo', 'Corpo', '🦴', 'Mīn bein ist lanc.', 'n'],
  ['herze', 'coração', 'substantivo', 'Corpo', '🫀', 'Mīn herze ist guot.', 'n'],
  // ── A2.2: casa e cidade ──
  ['burc', 'castelo/fortaleza', 'substantivo', 'Essenciais', '🏰', 'Diu burc ist alt.', 'f'],
  ['kirche', 'igreja', 'substantivo', 'Essenciais', '⛪', 'Diu kirche ist grōȥ.', 'f'],
  ['buoch', 'livro', 'substantivo', 'Essenciais', '📖', 'Daȥ buoch ist guot.', 'n'],
  ['bette', 'cama', 'substantivo', 'Essenciais', '🛏️', 'Daȥ bette ist klein.', 'n'],
  ['bluome', 'flor', 'substantivo', 'Essenciais', '🌸', 'Diu bluome ist rōt.', 'f'],
  // ── A2.2: adjetivos ──
  ['niuwe', 'novo', 'adjetivo', 'Descrições', '✨', 'Mīn hūs ist niuwe.'],
  ['schœne', 'belo', 'adjetivo', 'Descrições', '😍', 'Diu bluome ist schœne.'],
  ['junc', 'jovem', 'adjetivo', 'Descrições', '🧑', 'Dër ritter ist junc.'],
  ['riche', 'rico', 'adjetivo', 'Descrições', '💰', 'Dër künec ist riche.'],
  ['übel', 'mau/ruim', 'adjetivo', 'Descrições', '👎', 'Daȥ ist übel.'],
  // ── A2.2: verbos novos (com tabela de conjugação confirmada, diferente de "haben" no A1) ──
  ['ëȥȥen', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ich iȥȥe brōt.'],
  ['trinken', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ich trinke wīn.'],
  ['sprëchen', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Ich spriche mit dir.'],
  ['hān', 'ter (forma alternativa de haben, com tabela própria)', 'verbo', 'Verbos-chave', '🤲', 'Ich hān einen hunt.'],
  ['machen', 'fazer', 'verbo', 'Verbos-chave', '🛠️', 'Waȥ machest du?'],
];

export const VOCAB_GMH = buildVocab('gmh', ROWS);
