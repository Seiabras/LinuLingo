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

  // --- A2.1: mais família e corte, e o caso no plural ---
  ['feme', 'mulher', 'substantivo', 'Pessoas', '👩', 'La feme est bele.', 'f'],
  ['enfant', 'criança', 'substantivo', 'Pessoas', '🧒', "Jo ai un enfant.", 'm'],
  ['oncle', 'tio', 'substantivo', 'Pessoas', '🧑', 'Mon oncle a un chevalier.', 'm'],
  // "roïne": forma do francês antigo pra "reine" (rainha), com o trema marcando duas sílabas
  // separadas (ro-ï-ne) — grafia bem atestada no Wiktionary, seção "Old French".
  ['roïne', 'rainha', 'substantivo', 'Pessoas', '👑', 'La roïne est bele.', 'f'],
  ['cite', 'cidade', 'substantivo', 'Essenciais', '🏛️', 'Paris est une grant cite.', 'f'],
  ['champ', 'campo', 'substantivo', 'Essenciais', '🌾', 'Li chevaliers est el champ.', 'm'],
  ['mont', 'monte/montanha', 'substantivo', 'Essenciais', '⛰️', 'Li munt sunt halt.', 'm'],
  ['eglise', 'igreja', 'substantivo', 'Essenciais', '⛪', 'Nos alons a l\'eglise.', 'f'],
  // "espee"/"escu": o vocabulário militar da Chanson de Roland — a espada Durandal de Rollant é
  // sempre "s'espee" no poema, e "escu" (escudo) aparece dezenas de vezes nas cenas de batalha.
  ['espee', 'espada', 'substantivo', 'Essenciais', '⚔️', "Li chevaliers a une espee.", 'f'],
  ['escu', 'escudo', 'substantivo', 'Essenciais', '🛡️', 'Li chevaliers a un escu.', 'm'],
  ['bataille', 'batalha', 'substantivo', 'Essenciais', '🏰', 'La bataille est grant.', 'f'],
  ['or', 'ouro', 'substantivo', 'Essenciais', '🪙', "Jo ai or.", 'm'],
  ['argent', 'prata/dinheiro', 'substantivo', 'Essenciais', '🥈', "Jo ai argent.", 'm'],

  // --- A2.2: o imperfeito e a negação reforçada ---
  ['pouoir', 'poder', 'verbo', 'Verbos-chave', '💪', 'Jo puis parler.'],
  ['doner', 'dar', 'verbo', 'Verbos-chave', '🎁', 'Jo doins un don.'],
  ['aler', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Nos alons a l\'eglise.'],
  ['veoir', 'ver', 'verbo', 'Verbos-chave', '👀', 'Jo vei la bataille.'],
  // "ocire": "matar" — atestadíssimo na Chanson de Roland, nas cenas de batalha contra os sarracenos
  // ("des Sarrazins ocire").
  ['ocire', 'matar', 'verbo', 'Verbos-chave', '⚔️', 'Il vueil ocire.'],
  ['mort', 'morte', 'substantivo', 'Essenciais', '⚰️', 'La mort vient a tuit.', 'f'],
  ['vie', 'vida', 'substantivo', 'Essenciais', '🌿', 'La vie est bone.', 'f'],
  ['jor', 'dia', 'substantivo', 'Essenciais', '☀️', 'Bon jor, ami!', 'm'],
  ['nuit', 'noite', 'substantivo', 'Essenciais', '🌙', 'La nuit est longue.', 'f'],
  ['tens', 'tempo', 'substantivo', 'Essenciais', '⏳', 'Li tens passe.', 'm'],
  // "foi": "fé" — central à Chanson de Roland, que opõe repetidamente cristãos ("por sa foi") e
  // sarracenos.
  ['foi', 'fé', 'substantivo', 'Essenciais', '🙏', 'Il a grant foi.', 'f'],
  // "mie": reforço de negação, do latim "mica" (migalha) — ver gramatica.ts, fro-g8; a mesma raiz,
  // por outro caminho, da palavra "migalha" em português.
  ['mie', 'nem um pouco (reforça "ne")', 'advérbio', 'Essenciais', '🚫', 'Jo ne sui mie chevaliers.'],
];

export const VOCAB_FRO = buildVocab('fro', ROWS);
