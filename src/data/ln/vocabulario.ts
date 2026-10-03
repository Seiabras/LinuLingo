import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lingala (ISO 639-1 `ln`). Idioma incompleto: só o suficiente para o nível A1
 * (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * Fontes (consultadas via Wikipédia e Wikcionário em inglês, out/2026):
 * - https://en.wikipedia.org/wiki/Lingala (classificação, história, classes nominais, tons, verbos)
 * - https://en.wiktionary.org/wiki/Category:Lingala_lemmas e páginas individuais de cada palavra
 *   (mbote, melesi, ngai, yo, biso, bino, mama, tata, mwana/bana, ndeko, mwasi, nkombo, moi, mbula,
 *   nzete, ebale, mbwa, nyama, ngombe, nsoso, mbisi, nyoka, mai, loso, mbuma, mafuta, nzoto, liso,
 *   loboko, motema, monoko, ndako, kiti, mesa, mboka, moko…zomi, -zala/kozala, -linga/kolinga,
 *   kende/kokende, -loba/koloba, -yeba/koyeba, sala/kosala, moyíndo, mpembe, monene, moke, kitoko,
 *   malamu, mabe, na, te, nini, nani, wápi, boni).
 * Cada palavra foi conferida individualmente nessas páginas antes de entrar aqui; onde o
 * Wikcionário não trazia a palavra ou a forma flexionada, ela ficou de fora (ex.: não há verbo
 * “beber” nesta lista porque a forma encontrada só significava “atravessar um rio”).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['mbote', 'oi; bom dia, boa tarde (cumprimento)', 'interjeição', 'Expressões', '👋', 'Mbote! Nazali malamu.'],
  ['melesi', 'obrigado (do francês “merci”)', 'interjeição', 'Expressões', '🙏', 'Melesi, ndeko!'],
  ['boni', 'como (pergunta de cumprimento)', 'advérbio', 'Expressões', '❓', 'Boni, ndeko?'],
  // ── Essenciais ──
  ['te', 'não (nega o que vem antes dela na frase)', 'advérbio', 'Essenciais', '🚫', 'Nazali na ndako te.'],
  ['na', 'com, e; em; de (antes de pronome pessoal)', 'preposição', 'Essenciais', '🔗', 'Ngai na yo.'],
  ['nini', 'o quê', 'pronome', 'Essenciais', '❓', 'Nkombo na yo nini?'],
  ['nani', 'quem', 'pronome', 'Essenciais', '🙋', 'Yo nani?'],
  ['wápi', 'onde', 'advérbio', 'Essenciais', '📍', 'Ndako na yo wápi?'],
  // ── Pessoas ──
  ['ngai', 'eu, mim', 'pronome', 'Pessoas', '🙋', 'Ngai na yo.'],
  ['yo', 'você, tu', 'pronome', 'Pessoas', '🫵', 'Mbote na yo!'],
  ['biso', 'nós', 'pronome', 'Pessoas', '🙌', 'Biso na bino.'],
  ['bino', 'vocês', 'pronome', 'Pessoas', '👥', 'Mbote na bino!'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mama na ngai.'],
  ['tata', 'pai; homem', 'substantivo', 'Pessoas', '👨', 'Tata na ngai.'],
  ['mwana', 'criança, filho(a) (pl. bana)', 'substantivo', 'Pessoas', '🧒', 'Mwana na ngai.'],
  ['ndeko', 'amigo(a); irmão, irmã', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ndeko na ngai.'],
  ['mwasi', 'mulher; esposa', 'substantivo', 'Pessoas', '👩', 'Mwasi na ngai.'],
  ['nkombo', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Nkombo na ngai Linu.'],
  // ── Natureza ──
  ['moi', 'sol; dia; luz do sol', 'substantivo', 'Natureza', '☀️', 'Moi na mboka.'],
  ['mbula', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Mbula na mboka.'],
  ['nzete', 'árvore', 'substantivo', 'Natureza', '🌳', 'Nzete na mboka.'],
  ['ebale', 'rio', 'substantivo', 'Natureza', '🏞️', 'Ebale na mboka.'],
  // ── Animais ──
  ['mbwa', 'cachorro', 'substantivo', 'Animais', '🐕', 'Mbwa na ngai.'],
  ['nyama', 'animal; carne', 'substantivo', 'Animais', '🐾', 'Nazali na nyama.'],
  ['ngombe', 'vaca', 'substantivo', 'Animais', '🐄', 'Ngombe na ngai.'],
  ['nsoso', 'galinha', 'substantivo', 'Animais', '🐔', 'Nsoso na ngai.'],
  ['mbisi', 'peixe', 'substantivo', 'Animais', '🐟', 'Mbisi na ebale.'],
  ['nyoka', 'cobra', 'substantivo', 'Animais', '🐍', 'Nyoka monene.'],
  // ── Alimentação ──
  ['mai', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Nazali na mai.'],
  ['loso', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'Nazali na loso.'],
  ['mbuma', 'fruta; grão', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'Mbuma na ngai.'],
  ['mafuta', 'óleo; gordura', 'substantivo', 'Alimentação e Restaurantes', '🫒', 'Mafuta na mbisi.'],
  // ── Corpo ──
  ['nzoto', 'corpo', 'substantivo', 'Corpo', '🧍', 'Nzoto na ngai.'],
  ['liso', 'olho', 'substantivo', 'Corpo', '👁️', 'Liso na ngai.'],
  ['loboko', 'mão; braço', 'substantivo', 'Corpo', '✋', 'Loboko na yo.'],
  ['motema', 'coração', 'substantivo', 'Corpo', '❤️', 'Motema na ngai.'],
  ['monoko', 'boca', 'substantivo', 'Corpo', '👄', 'Monoko na yo.'],
  // ── Casa ──
  ['ndako', 'casa', 'substantivo', 'Casa', '🏠', 'Ndako na ngai.'],
  ['kiti', 'cadeira (do suaíli “kiti”)', 'substantivo', 'Casa', '🪑', 'Kiti na ndako.'],
  ['mesa', 'mesa', 'substantivo', 'Casa', '🍽️', 'Mesa na ndako.'],
  ['mboka', 'aldeia; cidade', 'substantivo', 'Casa', '🏘️', 'Mboka na ngai.'],
  // ── Números ──
  ['moko', 'um', 'numeral', 'Números', '1️⃣', 'Ndako moko.'],
  ['mibale', 'dois', 'numeral', 'Números', '2️⃣', 'Bana mibale.'],
  ['misato', 'três', 'numeral', 'Números', '3️⃣', 'Mbwa misato.'],
  ['minei', 'quatro', 'numeral', 'Números', '4️⃣', 'Ngombe minei.'],
  ['mitano', 'cinco', 'numeral', 'Números', '5️⃣', 'Mbisi mitano.'],
  ['motoba', 'seis', 'numeral', 'Números', '6️⃣', 'Nyoka motoba.'],
  ['sambo', 'sete', 'numeral', 'Números', '7️⃣', 'Nsoso sambo.'],
  ['mwambe', 'oito', 'numeral', 'Números', '8️⃣', 'Mbuma mwambe.'],
  ['libwa', 'nove', 'numeral', 'Números', '9️⃣', 'Mbwa libwa.'],
  ['zomi', 'dez', 'numeral', 'Números', '🔟', 'Bana zomi.'],
  // ── Verbos-chave ──
  ['kozala', 'ser, estar (nazali = eu sou/estou)', 'verbo', 'Verbos-chave', '🧑', 'Nazali malamu.'],
  ['kozala na', 'ter (lit. “estar com”)', 'expressão', 'Verbos-chave', '🤲', 'Nazali na mwana.'],
  ['kolinga', 'amar; querer; precisar', 'verbo', 'Verbos-chave', '💞', 'Kolinga ndeko na yo.'],
  ['kokende', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Kokende na mboka.'],
  ['koloba', 'falar, dizer', 'verbo', 'Verbos-chave', '🗣️', 'Koloba na ndeko.'],
  ['koyeba', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Koyeba nkombo na yo.'],
  ['kosala', 'fazer; trabalhar', 'verbo', 'Verbos-chave', '🔨', 'Kosala na ndako.'],
  // ── Cores ──
  ['moyíndo', 'preto', 'adjetivo', 'Cores', '⚫', 'Mbwa moyíndo.'],
  ['mpembe', 'branco', 'adjetivo', 'Cores', '⚪', 'Nsoso mpembe.'],
  // ── Descrições ──
  ['monene', 'grande', 'adjetivo', 'Descrições', '📏', 'Ndako monene.'],
  ['moke', 'pequeno', 'adjetivo', 'Descrições', '🤏', 'Mwana moke.'],
  ['kitoko', 'bonito, lindo (do congolês “kitoko”)', 'adjetivo', 'Descrições', '✨', 'Mboka kitoko.'],
  ['malamu', 'bom; bem', 'adjetivo', 'Descrições', '👍', 'Nazali malamu.'],
  ['mabe', 'ruim, mau', 'adjetivo', 'Descrições', '👎', 'Mbula mabe.'],
];

export const VOCAB_LN = buildVocab('ln', ROWS);
