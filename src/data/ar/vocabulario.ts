import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do árabe padrão moderno (al-fuṣḥá, اَلْفُصْحَى), o registro escrito e formal comum a
 * todo o mundo árabe — não um dialeto falado específico (o egípcio é um pacote à parte, `arz`).
 * Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete`
 * em index.ts. Toda palavra foi conferida uma a uma no Wikcionário em inglês (en.wiktionary.org) —
 * forma escrita, significado, gênero gramatical e, nos verbos, a forma do presente — e nas frases de
 * exemplo da Wikcionário sobre números, cores e saudações em
 * https://en.wikivoyage.org/wiki/Arabic_phrasebook. Sem vogais breves marcadas (harakat): o árabe
 * escrito do dia a dia também não as marca (ver gramatica.ts, tópico do abjad) — e sem romanização
 * (campo `reading`), que fica para depois (ver a nota em `incomplete`, no index.ts).
 *
 * Frases de exemplo: o árabe no presente não usa verbo “ser/estar” para ligar sujeito e predicado
 * (“أنا من البرازيل”, lit. “eu de o-Brasil”, é frase completa) — por isso várias frases abaixo não têm
 * um verbo de ligação; isso é esperado, não um erro.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['سلام', 'oi, olá (lit. “paz”); também usado para “tchau”', 'interjeição', 'Expressões', '👋', 'سلام! كيف حالك؟'],
  ['صباح الخير', 'bom dia (lit. “manhã do bem”); resposta: صباح النور', 'interjeição', 'Expressões', '🌅', 'صباح الخير يا سارة!'],
  ['مع السلامة', 'tchau, até logo (lit. “com a paz”)', 'interjeição', 'Expressões', '👋', 'مع السلامة يا أحمد!'],
  ['شكرا', 'obrigado', 'interjeição', 'Expressões', '🙏', 'شكرا يا أحمد!'],
  ['من فضلك', 'por favor (lit. “de seu favor”)', 'interjeição', 'Expressões', '🙏', 'ماء، من فضلك.'],
  ['كيف حالك؟', 'como vai? (lit. “como seu estado?”)', 'expressão', 'Expressões', '🙂', 'سلام! كيف حالك؟'],
  ['إن شاء الله', 'tomara, se Deus quiser (lit. “se Deus quiser”, com o verbo شاء)', 'expressão', 'Expressões', '🙏', 'إن شاء الله!'],
  // ── Essenciais ──
  ['نعم', 'sim', 'advérbio', 'Essenciais', '👍', 'نعم، شكرا!'],
  ['لا', 'não', 'advérbio', 'Essenciais', '👎', 'لا، شكرا.'],
  ['و', 'e', 'conjunção', 'Essenciais', null, 'أبي وأمي.'],
  ['أين', 'onde', 'advérbio', 'Essenciais', '❓', 'أين البيت؟'],
  ['كيف', 'como', 'advérbio', 'Essenciais', '❓', 'كيف البيت؟'],
  ['عندي', 'eu tenho (lit. “junto a mim”; o árabe não tem um verbo “ter” — usa a preposição عند + pronome)', 'expressão', 'Essenciais', '🤲', 'عندي أخ وأخت.'],
  // ── Pessoas ──
  ['أنا', 'eu', 'pronome', 'Pessoas', '🙋', 'أنا من البرازيل.'],
  ['أنتَ', 'tu, você (falando com um homem; fem. أنتِ)', 'pronome', 'Pessoas', '🫵', 'وأنتَ؟'],
  ['هو', 'ele', 'pronome', 'Pessoas', '👨', 'هو أبي.'],
  ['هي', 'ela', 'pronome', 'Pessoas', '👩', 'هي أمي.'],
  ['اسم', 'nome', 'substantivo', 'Pessoas', '🏷️', 'اسمي سارة.', 'm'],
  ['أب', 'pai', 'substantivo', 'Pessoas', '👨', 'أبي في البيت.', 'm'],
  ['أم', 'mãe', 'substantivo', 'Pessoas', '👩', 'أمي في البيت.', 'f'],
  ['أخ', 'irmão', 'substantivo', 'Pessoas', '🧑', 'عندي أخ.', 'm'],
  ['أخت', 'irmã', 'substantivo', 'Pessoas', '🧒', 'وعندي أخت.', 'f'],
  // ── Natureza ──
  ['شمس', 'sol (palavra feminina mesmo sem terminar em ة)', 'substantivo', 'Natureza', '☀️', 'الشمس كبيرة.', 'f'],
  ['قمر', 'lua', 'substantivo', 'Natureza', '🌙', 'القمر صغير.', 'm'],
  ['يوم', 'dia', 'substantivo', 'Natureza', '📅', 'اليوم هو يوم الأحد.', 'm'],
  ['ليل', 'noite (oposto de نهار, “dia claro”)', 'substantivo', 'Natureza', '🌃', 'الليل والنهار.', 'm'],
  // ── Animais ──
  ['كلب', 'cachorro', 'substantivo', 'Animais', '🐕', 'الكلب كبير.', 'm'],
  ['قط', 'gato (fem. قطة)', 'substantivo', 'Animais', '🐈', 'القط صغير.', 'm'],
  ['طائر', 'pássaro', 'substantivo', 'Animais', '🐦', 'هل الطائر صغير؟', 'm'],
  ['سمك', 'peixe', 'substantivo', 'Animais', '🐟', 'هو يأكل سمك.', 'm'],
  // ── Alimentação e Restaurantes ──
  ['ماء', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'أريد ماء، من فضلك.', 'm'],
  ['خبز', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'هو يأكل خبز.', 'm'],
  ['قهوة', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'القهوة في البيت.', 'f'],
  ['حليب', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'هو يشرب حليب.', 'm'],
  ['أرز', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'أريد أرز، من فضلك.', 'm'],
  ['سكر', 'açúcar', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'القهوة والسكر.', 'm'],
  // ── Verbos-chave ──
  ['أراد', 'querer (ele quer: يريد; eu quero: أريد)', 'verbo', 'Verbos-chave', '💭', 'أريد ماء، من فضلك.'],
  ['تكلم', 'falar (ele fala: يتكلم)', 'verbo', 'Verbos-chave', '🗣️', 'هو يتكلم.'],
  ['ذهب', 'ir (ele vai: يذهب)', 'verbo', 'Verbos-chave', '🚶', 'هو يذهب.'],
  ['أكل', 'comer (ele come: يأكل)', 'verbo', 'Verbos-chave', '🍽️', 'هو يأكل خبز.'],
  ['شرب', 'beber (ele bebe: يشرب)', 'verbo', 'Verbos-chave', '🥤', 'هو يشرب حليب.'],
  // ── Corpo ──
  ['رأس', 'cabeça', 'substantivo', 'Corpo', '👤', 'رأسي كبير.', 'm'],
  ['يد', 'mão (palavra feminina)', 'substantivo', 'Corpo', '✋', 'يدي صغيرة.', 'f'],
  ['عين', 'olho (palavra feminina)', 'substantivo', 'Corpo', '👁️', 'عيني كبيرة.', 'f'],
  ['قدم', 'pé (palavra feminina)', 'substantivo', 'Corpo', '🦶', 'قدمي صغيرة.', 'f'],
  ['خد', 'bochecha (palavra feminina no árabe padrão)', 'substantivo', 'Corpo', '😊', 'خدي كبيرة.', 'f'],
  // ── Casa ──
  ['بيت', 'casa', 'substantivo', 'Casa', '🏠', 'بيتي كبير.', 'm'],
  ['باب', 'porta', 'substantivo', 'Casa', '🚪', 'الباب كبير.', 'm'],
  ['كرسي', 'cadeira', 'substantivo', 'Casa', '🪑', 'الكرسي في البيت.', 'm'],
  // ── Números ──
  ['واحد', 'um', 'numeral', 'Números', '1️⃣', 'واحد، اثنان، ثلاثة.'],
  ['اثنان', 'dois', 'numeral', 'Números', '2️⃣', 'اثنان، ثلاثة، أربعة.'],
  ['ثلاثة', 'três', 'numeral', 'Números', '3️⃣', 'ثلاثة، أربعة، خمسة.'],
  ['أربعة', 'quatro', 'numeral', 'Números', '4️⃣', 'أربعة، خمسة، ستة.'],
  ['خمسة', 'cinco', 'numeral', 'Números', '5️⃣', 'خمسة، ستة، سبعة.'],
  ['ستة', 'seis', 'numeral', 'Números', '6️⃣', 'ستة، سبعة، ثمانية.'],
  ['سبعة', 'sete', 'numeral', 'Números', '7️⃣', 'سبعة، ثمانية، تسعة.'],
  ['ثمانية', 'oito', 'numeral', 'Números', '8️⃣', 'ثمانية، تسعة، عشرة.'],
  ['تسعة', 'nove', 'numeral', 'Números', '9️⃣', 'ثمانية، تسعة، عشرة.'],
  ['عشرة', 'dez', 'numeral', 'Números', '🔟', 'تسعة، عشرة.'],
  // ── Cores ──
  ['أسود', 'preto (fem. سوداء)', 'adjetivo', 'Cores', '⚫', 'القط أسود.'],
  ['أبيض', 'branco (fem. بيضاء)', 'adjetivo', 'Cores', '⚪', 'الحليب أبيض.'],
  ['أحمر', 'vermelho (fem. حمراء)', 'adjetivo', 'Cores', '🔴', 'الباب أحمر.'],
  ['أزرق', 'azul (fem. زرقاء)', 'adjetivo', 'Cores', '🔵', 'الكرسي أزرق.'],
  ['أخضر', 'verde (fem. خضراء)', 'adjetivo', 'Cores', '🟢', 'الطائر أخضر.'],
  // ── Descrições ──
  ['كبير', 'grande (fem. كبيرة)', 'adjetivo', 'Descrições', '📏', 'البيت كبير.'],
  ['صغير', 'pequeno (fem. صغيرة)', 'adjetivo', 'Descrições', '📏', 'القط صغير.'],
];

export const VOCAB_AR = buildVocab('ar', ROWS);
