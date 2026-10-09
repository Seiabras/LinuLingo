import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do castelhano medieval (castellano medieval, ca. séc. X-XV — este pacote foca no
 * período clássico do Cantar de Mio Cid, ca. 1140-1207), na grafia mais comum atestada no
 * Wiktionary para cada palavra (ex. “fijo”, “ermano”, “cavallero” — formas reais da época, bem
 * diferentes do espanhol moderno “hijo”, “hermano”, “caballero”). Sem falantes nativos: como o
 * latim (`la`), o nórdico antigo (`non`), o francês antigo (`fro`) e o eslavo eclesiástico antigo
 * (`cu`), os exemplos usam um cenário de época (a corte de Rodrigo Díaz de Vivar, “El Cid”), não o
 * Brasil. Cada palavra foi conferida individualmente no Wiktionary (seção “Old Spanish” dedicada,
 * com etimologia latina, quando essa seção existe) ou, faltando essa seção específica, na
 * etimologia do espanhol moderno que cita a forma do castelhano medieval (ex. “negro” vem do
 * “Old Spanish negro”); marcado como confiança média — ver notas de cada palavra em
 * `index.ts`/`extras.ts` e no commit. Palavras funcionais básicas (artigos “el”/“la”/“un”/“una”,
 * possessivo “mio”/“mi”) seguem o mesmo padrão: confirmadas pelo Wiktionary ou por extensão mínima
 * e regular da mesma família de palavra, nunca inventadas do zero.
 *
 * Lacuna honesta importante: NÃO existe, em nenhuma fonte conferida, uma partícula de “sim” no
 * castelhano medieval do período do Cantar de Mio Cid — “sí” só se gramaticalizou como resposta
 * afirmativa a partir do séc. XIV-XV (antes disso, era só o advérbio “assim/deste jeito”, do latim
 * “sic”). Por isso este pacote NÃO ensina “sí” como “sim” — ver a lição de gramática dedicada à
 * resposta afirmativa por eco do verbo (mesmo traço que o eslavo eclesiástico antigo, `cu`, também
 * documenta pelo mesmo motivo).
 *
 * Verbo “aver” (ter): a tabela de presente do Wiktionary para a 1ª pessoa (yo) traz só formas
 * reconstruídas (*e, *aigo, *ayo, nenhuma com página própria) — por isso nenhuma frase deste pacote
 * usa “yo” com “aver”; os exemplos usam a 3ª pessoa “ave” (atestada) em vez disso. “Nombre” (nome)
 * é confiança média: só citado como etimologia do espanhol moderno (“Old Spanish nombre, nomne”),
 * sem seção própria no Wiktionary.
 */
export const ROWS: VocabRow[] = [
  // Expressões e essenciais
  ['non', 'não', 'advérbio', 'Essenciais', '👎', 'Vino? Non, agua.'],
  // Pronomes
  ['yo', 'eu', 'pronome', 'Pessoas', '🙋', 'Yo seo Linu.'],
  ['tú', 'tu', 'pronome', 'Pessoas', '🫵', 'Tú sees cavallero?'],
  ['él', 'ele', 'pronome', 'Pessoas', '👨', 'Él sie amigo.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos sedemos amigos.'],
  ['vos', 'vós (você, cortês)', 'pronome', 'Pessoas', '🫵', 'Vos avedes un fijo?'],
  // Verbos-chave
  ['seer', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Yo seo Linu.'],
  ['aver', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Él ave un fijo.'],
  // Família
  ['padre', 'pai', 'substantivo', 'Pessoas', '👨', 'Mio padre ave un can.', 'm'],
  ['madre', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mi madre ave una casa.', 'f'],
  ['fijo', 'filho', 'substantivo', 'Pessoas', '🧒', 'El rey ave un fijo.', 'm'],
  ['fija', 'filha', 'substantivo', 'Pessoas', '🧒', 'El rey ave una fija.', 'f'],
  ['ermano', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mio ermano ave un can.', 'm'],
  ['ermana', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mi ermana ave un gato.', 'f'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Mio amigo sie cavallero.', 'm'],
  ['nombre', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mio nombre sie Linu.', 'm'],
  // Casa, corte e bichos
  ['casa', 'casa', 'substantivo', 'Essenciais', '🏠', 'Mi casa sie grande.', 'f'],
  ['cavallero', 'cavaleiro', 'substantivo', 'Essenciais', '⚔️', 'El rey ave un cavallero.', 'm'],
  ['rey', 'rei', 'substantivo', 'Essenciais', '👑', 'El rey ave un fijo.', 'm'],
  ['can', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mio can sie negro.', 'm'],
  ['gato', 'gato', 'substantivo', 'Essenciais', '🐈', 'Mio gato sie blanco.', 'm'],
  // Comida e bebida
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'El pan sie bueno.', 'm'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'El vino sie vermejo.', 'm'],
  ['agua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Agua, non vino.', 'f'],
  // Cores
  ['blanco', 'branco', 'adjetivo', 'Cores', '⚪', 'Mio gato sie blanco.'],
  ['negro', 'preto', 'adjetivo', 'Cores', '⚫', 'Mio can sie negro.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'Verde e bien sençido.'],
  ['vermejo', 'vermelho', 'adjetivo', 'Cores', '🔴', 'El vino sie vermejo.'],
  // Adjetivos essenciais
  ['grande', 'grande', 'adjetivo', 'Essenciais', '📏', 'Mi casa sie grande.'],
  ['bueno', 'bom', 'adjetivo', 'Essenciais', '👍', 'El pan sie bueno.'],
  // Números
  ['uno', 'um', 'numeral', 'Números', '1️⃣', 'Un cavallero.'],
  ['dos', 'dois', 'numeral', 'Números', '2️⃣', 'Dos canes.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres gatos.'],
  ['quatro', 'quatro', 'numeral', 'Números', '4️⃣', 'Quatro fijos.'],
  ['çinco', 'cinco', 'numeral', 'Números', '5️⃣', 'Çinco amigos.'],
  ['seys', 'seis', 'numeral', 'Números', '6️⃣', 'Seys reys.'],
  ['siete', 'sete', 'numeral', 'Números', '7️⃣', 'Siete casas.'],
  ['ocho', 'oito', 'numeral', 'Números', '8️⃣', 'Ocho panes.'],
  ['nueve', 'nove', 'numeral', 'Números', '9️⃣', 'Nueve vinos.'],
  ['diez', 'dez', 'numeral', 'Números', '🔟', 'Diez casas.'],
];

export const VOCAB_OSP = buildVocab('osp', ROWS);
