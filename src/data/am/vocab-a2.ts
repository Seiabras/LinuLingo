import type { VocabRow } from '../types';

/**
 * Palavras do nível A2 (unidades 3 e 4): tempo e clima, horas, compras e números maiores (A2.1);
 * corpo, saúde, cidade, trabalho e sentimentos (A2.2). Entram no fim do vocabulário, depois de
 * todas as palavras do A1.
 *
 * Fontes (todas consultadas em 11/10/2026):
 * - Wiktionary em inglês, verbete de cada palavra (sentido e classe gramatical): ደመና (cloud), ነፋስ
 *   (wind, breeze), ሙቀት (heat, warmth), በረዶ (ice), ሰዓት (hour, time, clock), ሳምንት (week), ወር
 *   (month), ክረምት (rainy season), ዋጋ (cost, value, price), ውድ (dear, expensive), ሱቅ (shop), ገዛ
 *   (to buy), ልብስ (clothes), ሀያ (twenty), አርባ (forty), አምሳ (fifty), መቶ (hundred), ሺ (thousand),
 *   ራስ (head), እጅ (arm, hand), እግር (leg, foot), ሆድ (belly), ዓይን (eye), ሐኪም (doctor), ጤና
 *   (health), ከተማ (city, town), መንገድ (road), ሥራ (work, job), ነጋዴ (merchant), ደስተኛ (happy).
 * - ELIAS — Ethiopian Languages Instruction and Assessment, Universidade Harvard
 *   (elias.fas.harvard.edu), curso “Beginning Amharic”: lição 10 (ጠዋት morning, ቅዝቃዜ cold, ሙቀት,
 *   ደመና, ክረምት, ሰዓት, ወር, ሳምንት, e as frases “በክረምት ደግሞ ዝናብ ኣለ”, “የኣንድ ወር እረፍት
 *   እፈልጋለሁ”, “ነገ ሻንጣ መግዛት እፈልጋለሁ”, “ትላንት ወደ ስራ ሄድኩ”), lição 5 (ሰላሳ, ሺ, “ስድስት ሺ
 *   አምስት መቶ”), lição 13 (ልብስ, “ትላንትና ሰማያዊ ልብስ እና ቀይ ፎጣ ገዛሁ”), lição 14 (ርካሽ cheap, ውድ,
 *   ዋጋ, ሱቅ, መሸጥ sell, መግዛት buy, “እኔ ነጋዴ ነኝ”, “ልብስና ጫማ እሸጣለሁ”), lição 15 (መንገድ, “መንገዱ
 *   በጣም መጥፎ ነው”), lição 16 (ትምህርት ቤት), lição 9 (ራስ, እጅ, እግር, ዐይን, “ትንሽ ራስ ኣለኝ”, “እግሬ ላይ
 *   ህመም ይሰማኛል”, “ሆዱ ላይ ይሰማዋል”, “መድሃኒት ወሰድክ?”), lição 17 (መድሃኒት medicine, ጤና, “ዓይኔ
 *   ላይ ህመም ይሰማኛል”). O ELIAS às vezes escreve ኣ no lugar de አ e ስራ no lugar de ሥራ (o mesmo
 *   som): aqui ficou a grafia do Wiktionary e da Wikipédia.
 * - Wikivoyage, “Amharic phrasebook” (ሀያ, ሰላሳ, አርባ, መቶ, ሺህ; “አንድ ሰዓት ከጠዋቱ” = 7 da manhã).
 * - Omniglot, phrases/amharic.php (“ስንት ነው ዋጋው?”, quanto custa?; “ጤና ይስጥልኝ”).
 * - Wikipédia em inglês, artigo “Amharic”, seção Grammar (“እሱ ወደ ከተማ መጣ”, ele veio para a cidade).
 * - Tatoeba (frases em amárico com tradução; licença CC BY 2.0 FR): nº 12119889 “በረዶው በጣም ወፍራም
 *   ነው” (o gelo é bem grosso), 12119908 “ለንደን ውስጥ ለሁለት ሳምንታት ቆየን” (ficamos duas semanas em
 *   Londres), 3640896 “እኔ ሐኪም ነኝ”, 3640901 “ወደ ትምህርት ቤት እሄዳለሁ” (vou à escola), 10967178
 *   “እርቦኛል”.
 * - tmhrt.com, “English to Amharic phrases” (ደክሞኛል I'm tired, “በጣም ደክሞኛል”, እርቦኛል I'm hungry,
 *   ጠምቶኛል I'm thirsty).
 * Frases MONTADAS (pelas regras da cópula e do “haver” com አለ, documentadas na gramática do pacote):
 * “ደመና እና ዝናብ”, “ዛሬ ነፋስ አለ”, “ሙቀት እና ቅዝቃዜ”, “ይህ ውድ/ርካሽ ነው”, “ሱቅ እዚያ ነው”, “መቶ ብር”,
 * “ሀያ/ሰላሳ/አርባ/አምሳ ብር”, “እጅ እና እግር”, “ደስተኛ ነኝ”, “ጠምቶኛል፣ ውሃ፣ እባክህ”.
 */
export const ROWS: VocabRow[] = [
  // ── Unidade 3, Lição 1: tempo, clima e horas ──
  ['ደመና', 'nuvem', 'substantivo', 'Natureza', '☁️', 'ደመና እና ዝናብ።'],
  ['ነፋስ', 'vento', 'substantivo', 'Natureza', '💨', 'ዛሬ ነፋስ አለ።'],
  ['ሙቀት', 'calor', 'substantivo', 'Natureza', '🥵', 'ሙቀት እና ቅዝቃዜ።'],
  ['ቅዝቃዜ', 'frio', 'substantivo', 'Natureza', '🥶', 'ሙቀት እና ቅዝቃዜ።'],
  ['ጠዋት', 'manhã', 'substantivo', 'Tempo', '🌅', 'አንድ ሰዓት ከጠዋቱ።'],
  ['ሰዓት', 'hora', 'substantivo', 'Tempo', '🕐', 'አንድ ሰዓት ከጠዋቱ።'],
  ['በረዶ', 'gelo', 'substantivo', 'Natureza', '🧊', 'በረዶው በጣም ወፍራም ነው።'],
  ['ሳምንት', 'semana', 'substantivo', 'Tempo', '📅', 'ለንደን ውስጥ ለሁለት ሳምንታት ቆየን።'],
  ['ወር', 'mês', 'substantivo', 'Tempo', '🗓️', 'የአንድ ወር እረፍት እፈልጋለሁ።'],
  ['ክረምት', 'estação das chuvas (de junho a setembro)', 'substantivo', 'Tempo', '☔', 'በክረምት ደግሞ ዝናብ አለ።'],
  // ── Unidade 3, Lição 2: compras e números maiores ──
  ['ዋጋ', 'preço', 'substantivo', 'Compras', '🏷️', 'ስንት ነው ዋጋው?'],
  ['ውድ', 'caro', 'adjetivo', 'Compras', '💎', 'ይህ ውድ ነው።'],
  ['ርካሽ', 'barato', 'adjetivo', 'Compras', '🪙', 'ይህ ርካሽ ነው።'],
  ['ሱቅ', 'loja', 'substantivo', 'Compras', '🏪', 'ሱቅ እዚያ ነው።'],
  ['መግዛት', 'comprar', 'verbo', 'Verbos-chave', '🛍️', 'ነገ ሻንጣ መግዛት እፈልጋለሁ።'],
  ['መቶ', 'cem', 'numeral', 'Números', '💯', 'መቶ ብር።'],
  ['ልብስ', 'roupa', 'substantivo', 'Roupas', '👕', 'ትላንትና ሰማያዊ ልብስ እና ቀይ ፎጣ ገዛሁ።'],
  ['መሸጥ', 'vender', 'verbo', 'Verbos-chave', '🤝', 'ልብስና ጫማ እሸጣለሁ።'],
  ['ሀያ', 'vinte', 'numeral', 'Números', '🔢', 'ሀያ ብር።'],
  ['ሰላሳ', 'trinta', 'numeral', 'Números', '🔢', 'ሰላሳ ብር።'],
  ['አርባ', 'quarenta', 'numeral', 'Números', '🔢', 'አርባ ብር።'],
  ['አምሳ', 'cinquenta', 'numeral', 'Números', '🔢', 'አምሳ ብር።'],
  ['ሺ', 'mil', 'numeral', 'Números', '🔢', 'ስድስት ሺ አምስት መቶ።'],
  // ── Unidade 4, Lição 1: corpo e saúde ──
  ['ራስ', 'cabeça', 'substantivo', 'Corpo', '🧠', 'ትንሽ ራስ አለኝ።'],
  ['እጅ', 'mão', 'substantivo', 'Corpo', '✋', 'እጅ እና እግር።'],
  ['እግር', 'perna, pé', 'substantivo', 'Corpo', '🦵', 'እግሬ ላይ ህመም ይሰማኛል።'],
  ['ሆድ', 'barriga', 'substantivo', 'Corpo', '🤰', 'ሆዱ ላይ ይሰማዋል።'],
  ['ሐኪም', 'médico', 'substantivo', 'Profissões', '🧑‍⚕️', 'እኔ ሐኪም ነኝ።'],
  ['መድሃኒት', 'remédio', 'substantivo', 'Saúde', '💊', 'መድሃኒት ወሰድክ?'],
  ['ዓይን', 'olho', 'substantivo', 'Corpo', '👁️', 'ዓይኔ ላይ ህመም ይሰማኛል።'],
  ['ጤና', 'saúde', 'substantivo', 'Saúde', '🩺', 'ጤና ይስጥልኝ!'],
  // ── Unidade 4, Lição 2: cidade, trabalho e sentimentos ──
  ['ከተማ', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'እሱ ወደ ከተማ መጣ።'],
  ['መንገድ', 'estrada, caminho', 'substantivo', 'Viagens e Transporte', '🛣️', 'መንገዱ በጣም መጥፎ ነው።'],
  ['ሥራ', 'trabalho', 'substantivo', 'Trabalho e Negócios', '💼', 'ትላንት ወደ ሥራ ሄድኩ።'],
  ['ነጋዴ', 'comerciante', 'substantivo', 'Profissões', '🧑‍💼', 'እኔ ነጋዴ ነኝ።'],
  ['ደስተኛ', 'feliz', 'adjetivo', 'Sentimentos', '😊', 'ደስተኛ ነኝ።'],
  ['ደክሞኛል', 'estou cansado', 'expressão', 'Expressões', '🥱', 'በጣም ደክሞኛል።'],
  ['ትምህርት ቤት', 'escola', 'substantivo', 'Escola', '🏫', 'ወደ ትምህርት ቤት እሄዳለሁ።'],
  ['እርቦኛል', 'estou com fome', 'expressão', 'Expressões', '🍽️', 'እርቦኛል።'],
  ['ጠምቶኛል', 'estou com sede', 'expressão', 'Expressões', '🥤', 'ጠምቶኛል፣ ውሃ፣ እባክህ።'],
];
