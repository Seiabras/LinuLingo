import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do marati (मराठी), língua oficial de Maarashtra, no oeste da Índia, escrita em
 * devanágari (o mesmo alfabeto do hindi e do sânscrito). A pronúncia aproximada vem entre
 * parênteses na tradução, porque a escrita é nova para quem fala português. Idioma incompleto: por
 * enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * Fontes: Wikipedia “Marathi language” e “Marathi grammar”; Wiktionary (verbetes individuais em
 * devanágari, ex. आई, भाऊ, घर, पाणी); Omniglot “Marathi phrases”; Omniglot “Marathi numbers”.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['नमस्कार', 'oi, olá; tchau (namaskār)', 'interjeição', 'Expressões', '👋', 'नमस्कार! तू कसा आहेस?'],
  ['सुप्रभात', 'bom dia (suprabhāt)', 'interjeição', 'Expressões', '🌅', 'सुप्रभात, आई!'],
  ['कृपया', 'por favor (kṛupayā)', 'interjeição', 'Expressões', '🙏', 'एक कप चहा, कृपया.'],
  ['आभारी आहे', 'obrigado (ābhārī āhe, lit. “eu sou grato”)', 'interjeição', 'Expressões', '🙏', 'मी आभारी आहे.'],
  ['माफ करा', 'desculpa, perdão (māf karā)', 'interjeição', 'Expressões', '🙏', 'माफ करा, मला समजत नाही.'],
  ['येतो / येते', 'tchau, até logo (yeto, dito por um homem; yete, por uma mulher)', 'interjeição', 'Expressões', '👋', 'नमस्कार, येतो!'],
  ['तू कसा आहेस', 'como vai? informal, perguntado a um homem (tū kasā āhes; a uma mulher: tū kashī āhes)', 'expressão', 'Expressões', '🙂', 'तू कसा आहेस? — मी ठीक आहे.'],
  // ── Essenciais ──
  ['होय', 'sim (hoy)', 'advérbio', 'Essenciais', '👍', 'होय, कृपया.'],
  ['नाही', 'não (nāhī)', 'advérbio', 'Essenciais', '👎', 'नाही, आभारी आहे.'],
  ['आणि', 'e (āṇi)', 'conjunção', 'Essenciais', null, 'चहा आणि पाणी.'],
  ['काय', 'o que, que (kāy)', 'pronome', 'Essenciais', '❓', 'तुझं नाव काय आहे?'],
  ['कुठे', 'onde (kuṭhe)', 'advérbio', 'Essenciais', '❓', 'तू कुठे आहेस?'],
  ['कोण', 'quem (koṇ)', 'pronome', 'Essenciais', '❓', 'आपण कोण?'],
  ['कसा', 'como (kasā; muda para kashī/kase conforme o gênero de quem ou do que se fala)', 'advérbio', 'Essenciais', '❓', 'हे कसे आहे?'],
  // ── Pessoas ──
  ['मी', 'eu (mī)', 'pronome', 'Pessoas', '🙋', 'मी मुंबैत राहतो.'],
  ['तू', 'tu, muito informal, só no singular (tū)', 'pronome', 'Pessoas', '🫵', 'तू कुठे आहेस?'],
  ['तुम्ही', 'você(s); tu, tratamento educado ou no plural (tumhī)', 'pronome', 'Pessoas', '🙇', 'तुम्ही कसे आहात?'],
  ['आपण', 'você, o tratamento mais educado (āpaṇ); também “nós” no sentido inclusivo (eu e você)', 'pronome', 'Pessoas', '🙇', 'आपण कोठले आहात?'],
  ['तो / ती / ते', 'ele / ela / aquilo, conforme o gênero (to / tī / te)', 'pronome', 'Pessoas', '👤', 'तो कोण आहे?'],
  ['नाव', 'nome (nāv)', 'substantivo', 'Pessoas', '🏷️', 'माझं नाव … आहे.', 'n'],
  ['आई', 'mãe (āī)', 'substantivo', 'Pessoas', '👩', 'ती माझी आई आहे.', 'f'],
  ['वडील', 'pai (vaḍīl)', 'substantivo', 'Pessoas', '👨', 'तो माझा वडील आहे.', 'm'],
  ['भाऊ', 'irmão (bhāū)', 'substantivo', 'Pessoas', '🧑', 'तो माझा भाऊ आहे.', 'm'],
  ['बहीण', 'irmã (bahīṇ)', 'substantivo', 'Pessoas', '🧑', 'ही माझी बहीण आहे.', 'f'],
  ['मुलगा', 'filho; menino (mulgā)', 'substantivo', 'Pessoas', '🧒', 'तो मुलगा पाणी पितो.', 'm'],
  ['मुलगी', 'filha; menina (mulgī)', 'substantivo', 'Pessoas', '🧒', 'ती मुलगी पाणी पिते.', 'f'],
  ['मूल', 'criança, de qualquer gênero (mūl)', 'substantivo', 'Pessoas', '🧒', 'ते मूल लहान आहे.', 'n'],
  // ── Casa ──
  ['घर', 'casa (ghar)', 'substantivo', 'Casa', '🏠', 'हे माझे घर आहे.', 'n'],
  ['दार', 'porta (dār)', 'substantivo', 'Casa', '🚪', 'हे दार लहान आहे.', 'n'],
  // ── Animais ──
  ['कुत्रा', 'cachorro (kutrā)', 'substantivo', 'Animais', '🐕', 'हा कुत्रा काळा आहे.', 'm'],
  ['मांजर', 'gato (mānjar; gramaticalmente neutro, mesmo falando de um gato ou uma gata)', 'substantivo', 'Animais', '🐈', 'हे मांजर पांढरे आहे.', 'n'],
  ['गाय', 'vaca (gāy)', 'substantivo', 'Animais', '🐄', 'ही गाय मोठी आहे.', 'f'],
  ['पक्षी', 'pássaro (pakṣī)', 'substantivo', 'Animais', '🐦', 'हा पक्षी छोटा आहे.', 'm'],
  ['मासा', 'peixe (māsā)', 'substantivo', 'Animais', '🐟', 'हा मासा लहान आहे.'],
  // ── Alimentação e Restaurantes ──
  ['चहा', 'chá (cahā)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'मला चहा आवडतो.', 'm'],
  ['पाणी', 'água (pāṇī)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'मला पाणी आवडते.', 'n'],
  ['दूध', 'leite (dūdh)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'मला दूध आवडते.', 'n'],
  ['भात', 'arroz cozido (bhāt)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'मला भात आवडतो.', 'm'],
  ['पोळी', 'pão achatado, tipo roti (poḷī)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'मला पोळी आवडते.', 'f'],
  // ── Números ──
  ['एक', 'um (ek)', 'numeral', 'Números', '1️⃣', 'एक रुपया.'],
  ['दोन', 'dois (don)', 'numeral', 'Números', '2️⃣', 'दोन रुपये.'],
  ['तीन', 'três (tīn)', 'numeral', 'Números', '3️⃣', 'तीन रुपये.'],
  ['चार', 'quatro (cār)', 'numeral', 'Números', '4️⃣', 'चार रुपये.'],
  ['पाच', 'cinco (pāc)', 'numeral', 'Números', '5️⃣', 'पाच रुपये.'],
  ['सहा', 'seis (sahā)', 'numeral', 'Números', '6️⃣', 'सहा रुपये.'],
  ['सात', 'sete (sāt)', 'numeral', 'Números', '7️⃣', 'सात रुपये.'],
  ['आठ', 'oito (āṭh)', 'numeral', 'Números', '8️⃣', 'आठ रुपये.'],
  ['नऊ', 'nove (naū)', 'numeral', 'Números', '9️⃣', 'नऊ रुपये.'],
  ['दहा', 'dez (dahā)', 'numeral', 'Números', '🔟', 'दहा रुपये.'],
  // ── Natureza ──
  ['सूर्य', 'sol (sūrya)', 'substantivo', 'Natureza', '☀️', 'हा सूर्य आहे.', 'm'],
  ['चंद्र', 'lua (candra)', 'substantivo', 'Natureza', '🌙', 'हा चंद्र सुंदर आहे.', 'm'],
  ['तारा', 'estrela (tārā)', 'substantivo', 'Natureza', '⭐', 'हा तारा लहान आहे.', 'm'],
  ['झाड', 'árvore (jhāḍ)', 'substantivo', 'Natureza', '🌳', 'हे झाड मोठे आहे.', 'n'],
  ['फूल', 'flor (phūl)', 'substantivo', 'Natureza', '🌸', 'हे फूल सुंदर आहे.', 'n'],
  // ── Corpo ──
  ['डोके', 'cabeça (ḍoke)', 'substantivo', 'Corpo', null, 'हे डोके आहे.', 'n'],
  ['डोळा', 'olho (ḍoḷā)', 'substantivo', 'Corpo', '👁️', 'हा डोळा आहे.', 'm'],
  ['कान', 'orelha, ouvido (kān)', 'substantivo', 'Corpo', '👂', 'हा कान आहे.', 'm'],
  ['नाक', 'nariz (nāk)', 'substantivo', 'Corpo', '👃', 'हे नाक आहे.', 'n'],
  ['हात', 'mão (hāt)', 'substantivo', 'Corpo', '✋', 'हा हात आहे.', 'm'],
  // ── Verbos-chave ──
  ['असणे', 'ser, estar (asṇe — मी आहे, तू आहेस, तो/ती/ते आहे, तुम्ही/आपण आहात, ते आहेत)', 'verbo', 'Verbos-chave', '🧑', 'तो चांगला आहे.'],
  ['करणे', 'fazer (karṇe)', 'verbo', 'Verbos-chave', '🤲', 'मी ते करतो.'],
  ['जाणे', 'ir (jāṇe)', 'verbo', 'Verbos-chave', '🚶', 'आपण जाऊयात का?'],
  ['येणे', 'vir; saber [uma língua] (yeṇe — मला मराठी येते = “eu sei marati”, lit. “o marati vem a mim”)', 'verbo', 'Verbos-chave', '👣', 'मला मराठी थोडी थोडी येते.'],
  ['खाणे', 'comer (khāṇe — तो खातो, ती खाते)', 'verbo', 'Verbos-chave', '🍽️', 'मुलगा पुरी खातो.'],
  ['पिणे', 'beber (piṇe — तो पितो, ती पिते)', 'verbo', 'Verbos-chave', '🥤', 'ती मुलगी पाणी पिते.'],
  ['बोलणे', 'falar (bolṇe)', 'verbo', 'Verbos-chave', '🗣️', 'कृपया जरा हळू बोला.'],
  ['आवडणे', 'gostar (de) (āvaḍṇe, lit. “ser agradável” — मला … आवडतो/आवडते, conforme o gênero da coisa)', 'verbo', 'Verbos-chave', '❤️', 'मला चहा आवडतो.'],
  ['राहणे', 'morar, viver (rāhṇe — मी राहतो/राहते)', 'verbo', 'Verbos-chave', '🏠', 'मी मुंबैत राहतो.'],
  // ── Descrições ──
  ['चांगला', 'bom (cāṅglā; fem. cāṅglī, neutro cāṅgle)', 'adjetivo', 'Descrições', '👌', 'तो चांगला आहे.'],
  ['वाईट', 'ruim, mau (vāīṭ, invariável)', 'adjetivo', 'Descrições', '👎', 'हे वाईट आहे.'],
  ['मोठे', 'grande (moṭhe; a forma muda conforme o gênero: moṭhā/moṭhī/moṭhe)', 'adjetivo', 'Descrições', '📏', 'हे झाड मोठे आहे.'],
  ['लहान', 'pequeno (lahān, invariável)', 'adjetivo', 'Descrições', '📏', 'ते मूल लहान आहे.'],
  ['सुंदर', 'bonito, lindo (sundar, invariável)', 'adjetivo', 'Descrições', '✨', 'हे फूल सुंदर आहे.'],
  // ── Cores ──
  ['काळा', 'preto (kāḷā, fem. kāḷī)', 'adjetivo', 'Cores', '⚫', 'हा कुत्रा काळा आहे.'],
  ['पांढरा', 'branco (pāṇḍhrā, fem. pāṇḍhrī)', 'adjetivo', 'Cores', '⚪', 'हे मांजर पांढरे आहे.'],
  ['लाल', 'vermelho (lāl, invariável)', 'adjetivo', 'Cores', '🔴', 'हे फूल लाल आहे.'],
  ['हिरवा', 'verde (hirvā, fem. hirvī)', 'adjetivo', 'Cores', '🟢', 'हे झाड हिरवे आहे.'],
];

export const VOCAB_MR = buildVocab('mr', ROWS);
