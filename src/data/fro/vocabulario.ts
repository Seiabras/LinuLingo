import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do francês antigo (ancien français, séc. IX-XIII), na grafia mais comum atestada no
 * Wiktionary para cada palavra (a ortografia medieval variava muito de manuscrito pra manuscrito —
 * ver a lição de gramática sobre isso). Sem falantes nativos vivos — como o latim (`la`) e o
 * nórdico antigo (`non`), os exemplos usam um cenário de época (a corte de Carlemagne), não o
 * Brasil. Cada palavra foi conferida individualmente no Wiktionary (seção "Old French" dedicada,
 * com forma nominativa/oblíqua e etimologia latina) ou, pros verbos, na tabela de conjugação do
 * presente do indicativo; fontes específicas por palavra em `index.ts`/`extras.ts` e no commit.
 * Dois casos gramaticais (reto/nominativo × oblíquo) — ver `gramatica.ts` — por isso alguns
 * substantivos trazem duas formas na entrada do vocabulário (a reta é a usada como sujeito).
 * Idioma incompleto: só o suficiente para o nível A1 por enquanto — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // Expressões e essenciais
  ['merci', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Merci, ami!'],
  ['oïl', 'sim', 'advérbio', 'Essenciais', '👍', 'Oïl, jo vueil vin.'],
  ['non', 'não', 'advérbio', 'Essenciais', '👎', 'Vin? Non, eve.'],
  // Pronomes
  ['jo', 'eu', 'pronome', 'Pessoas', '🙋', 'Jo sui ami.'],
  ['il', 'ele', 'pronome', 'Pessoas', '👨', 'Il est chevalier.'],
  ['ele', 'ela', 'pronome', 'Pessoas', '👩', 'Ele a un chien.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos avons un chien.'],
  ['vos', 'vós (você, cortês)', 'pronome', 'Pessoas', '🫵', 'Vos estes chevalier.'],
  // Verbos-chave
  ['estre', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Jo sui Linu.'],
  ['avoir', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Jo ai un chien.'],
  ['voloir', 'querer', 'verbo', 'Verbos-chave', '💭', 'Jo vueil vin.'],
  ['parler', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Nos parlons franceis.'],
  ['dire', 'dizer', 'verbo', 'Verbos-chave', '💬', 'Jo vueil dire merci.'],
  ['faire', 'fazer', 'verbo', 'Verbos-chave', '✋', 'Il vueil faire.'],
  ['saluer', 'saudar', 'verbo', 'Verbos-chave', '👋', 'Jo vueil vos saluer.'],
  // Família
  ['pere', 'pai', 'substantivo', 'Pessoas', '👨', 'Mon pere est chevalier.', 'm'],
  ['mere', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ma mere a un fil.', 'f'],
  ['fil', 'filho', 'substantivo', 'Pessoas', '🧒', 'Il a un fil.', 'm'],
  ['fille', 'filha', 'substantivo', 'Pessoas', '🧒', 'Il a une fille.', 'f'],
  ['frere', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mon frere a un chien.', 'm'],
  ['suer', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ma suer a un chat.', 'f'],
  ['nom', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Jo ai nom Linu.', 'm'],
  ['ami', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Il est mon ami.', 'm'],
  // Casa, gente da corte e bichos
  ['meson', 'casa', 'substantivo', 'Essenciais', '🏠', 'Nos avons une meson.', 'f'],
  ['chevalier', 'cavaleiro', 'substantivo', 'Essenciais', '⚔️', 'Li chevaliers a un chien.', 'm'],
  ['rei', 'rei', 'substantivo', 'Essenciais', '👑', 'Li reis a un chevalier.', 'm'],
  ['emperere', 'imperador', 'substantivo', 'Essenciais', '👑', 'Il est emperere.', 'm'],
  ['chien', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Jo ai un chien.', 'm'],
  ['chat', 'gato', 'substantivo', 'Essenciais', '🐈', 'Ma suer a un chat.', 'm'],
  // Comida e bebida
  ['pain', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Nos avons pain.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Jo vueil vin.', 'm'],
  ['eve', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vos avez eve.', 'f'],
  // Cores
  ['blanc', 'branco', 'adjetivo', 'Cores', '⚪', 'Jo vueil vin blanc.'],
  ['noir', 'preto', 'adjetivo', 'Cores', '⚫', 'Jo ai un chat noir.'],
  ['vert', 'verde', 'adjetivo', 'Cores', '🟢', 'Chevalier vert?'],
  ['rouge', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Jo vueil vin rouge.'],
  // Adjetivos essenciais (grant/petit mostram a forma reta, com -s: ver gramatica.ts)
  ['grant', 'grande', 'adjetivo', 'Essenciais', '📏', 'Li reis est granz.'],
  ['petit', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Li chevaliers est petiz.'],
  ['bon', 'bom', 'adjetivo', 'Essenciais', '👍', 'Vin est bon.'],
  // Números
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un chevalier.'],
  ['deus', 'dois', 'numeral', 'Números', '2️⃣', 'Deus chiens.'],
  ['troi', 'três', 'numeral', 'Números', '3️⃣', 'Troi chats.'],
  ['catre', 'quatro', 'numeral', 'Números', '4️⃣', 'Catre fils.'],
  ['cinc', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinc reis.'],
  ['sis', 'seis', 'numeral', 'Números', '6️⃣', 'Sis chevaliers.'],
  ['set', 'sete', 'numeral', 'Números', '7️⃣', 'Set chiens.'],
  ['uit', 'oito', 'numeral', 'Números', '8️⃣', 'Uit chats.'],
  ['nuef', 'nove', 'numeral', 'Números', '9️⃣', 'Nuef chevaliers.'],
  ['dis', 'dez', 'numeral', 'Números', '🔟', 'Dis amis.'],
];

export const VOCAB_FRO = buildVocab('fro', ROWS);
