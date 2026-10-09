import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do marati (मराठी), língua oficial de Maarashtra, no oeste da Índia, escrita em
 * devanágari (o mesmo alfabeto do hindi e do sânscrito). A pronúncia aproximada vem entre
 * parênteses na tradução, porque a escrita é nova para quem fala português. A1 e A2 completos
 * (unidades 1 a 4) — ver o campo `incomplete` do pacote.
 *
 * Fontes: Wikipedia “Marathi language” e “Marathi grammar”; Wiktionary (verbetes individuais em
 * devanágari, ex. आई, भाऊ, घर, पाणी); Omniglot “Marathi phrases”; Omniglot “Marathi numbers”.
 *
 * Nível A2.1/A2.2 (unidades 3 e 4): verbetes do Wiktionary conferidos palavra por palavra (clima,
 * roupas, corpo, cidade, profissões, sentimentos, verbos, tempo e números de 20 a 100: वीस, तीस,
 * चाळीस, पन्नास, साठ, सत्तर, ऐंशी, नव्वद, शंभर). “पेक्षा” (comparação) e “गरज”/“पैसा” (com o exemplo
 * “मला पैशाची गरज आहे”) também confirmados no Wiktionary, cada um com frase de exemplo própria.
 * Duas lacunas documentadas no PENDENTES.md: não achei fonte confiável em marata para “डॉक्टर”
 * (fica “वैद्य”, médico tradicional) nem para “policial” (पोलीस/पोलिस não têm verbete em
 * en.wiktionary.org).
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

  // ── Clima ── (nível A2.1/A2.2, Wiktionary: पाऊस, वारा, ढग, ऊन, गरम, थंड)
  ['पाऊस', 'chuva (pāūs)', 'substantivo', 'Clima', '🌧️', 'आज पाऊस आहे.', 'm'],
  ['वारा', 'vento (vārā)', 'substantivo', 'Clima', '💨', 'वारा थंड आहे.', 'm'],
  ['ढग', 'nuvem (ḍhag)', 'substantivo', 'Clima', '☁️', 'हा ढग मोठा आहे.', 'm'],
  ['ऊन', 'luz do sol, calor do sol (ūn)', 'substantivo', 'Clima', '☀️', 'आज ऊन आहे.', 'n'],
  ['गरम', 'quente, calor (garam, invariável)', 'adjetivo', 'Clima', '🥵', 'पाणी गरम आहे.'],
  ['थंड', 'frio (thaṇḍa, invariável)', 'adjetivo', 'Clima', '🥶', 'पाणी थंड आहे.'],

  // ── Roupas ── (nível A2.2, Wiktionary: कपडा, टोपी, साडी, बूट)
  ['कपडा', 'roupa, peça de roupa (kapḍā)', 'substantivo', 'Roupas', '👕', 'हा कपडा मोठा आहे.', 'm'],
  ['टोपी', 'boné, chapéu (ṭopī)', 'substantivo', 'Roupas', '🧢', 'ही टोपी लाल आहे.', 'f'],
  ['साडी', 'sári, a veste tradicional das mulheres no subcontinente indiano (sāḍī)', 'substantivo', 'Roupas', '🥻', 'ही साडी सुंदर आहे.', 'f'],
  ['बूट', 'sapato (būṭ, do inglês “boot”)', 'substantivo', 'Roupas', '👟', 'हा बूट काळा आहे.', 'm'],

  // ── Corpo ── (nível A2.1, Wiktionary: पाय, तोंड)
  ['पाय', 'pé, perna (pāy)', 'substantivo', 'Corpo', '🦶', 'हा पाय मोठा आहे.', 'm'],
  ['तोंड', 'boca, rosto (toṇḍ)', 'substantivo', 'Corpo', '👄', 'हे तोंड लहान आहे.', 'n'],

  // ── Cidade e lugares ── (nível A2.1, Wiktionary: शहर, रस्ता, दुकान, शाळा)
  ['शहर', 'cidade (śahar)', 'substantivo', 'Cidade e lugares', '🏙️', 'हे शहर मोठे आहे.', 'n'],
  ['रस्ता', 'rua, caminho (rastā)', 'substantivo', 'Cidade e lugares', '🛣️', 'हा रस्ता मोठा आहे.', 'm'],
  ['दुकान', 'loja (dukān)', 'substantivo', 'Cidade e lugares', '🏪', 'हे दुकान लहान आहे.', 'n'],
  ['शाळा', 'escola (śāḻā)', 'substantivo', 'Cidade e lugares', '🏫', 'ही शाळा मोठी आहे.', 'f'],

  // ── Profissões ── (nível A2.1, Wiktionary: वैद्य, शिक्षक, शेतकरी, व्यापारी — não achei fonte
  // confiável em marata para “médico” no sentido ocidental (डॉक्टर) nem para “policial”, documentado
  // no PENDENTES.md)
  ['वैद्य', 'médico, curador tradicional (vaidya)', 'substantivo', 'Profissões', '🩺', 'तो वैद्य आहे.', 'm'],
  ['शिक्षक', 'professor (śikṣak; fem. शिक्षिका, śikṣikā)', 'substantivo', 'Profissões', '👨‍🏫', 'तो शिक्षक आहे.', 'm'],
  ['शेतकरी', 'agricultor, fazendeiro (śetkarī)', 'substantivo', 'Profissões', '🌾', 'तो शेतकरी आहे.', 'm'],
  ['व्यापारी', 'comerciante (vyāpārī; gênero masculino ou feminino, conforme a pessoa)', 'substantivo', 'Profissões', '🛍️', 'ती व्यापारी आहे.', 'm'],

  // ── Sentimentos ── (nível A2.1, Wiktionary: आनंदी, दुःखी, भूक, तहान, भीती)
  ['आनंदी', 'feliz, alegre (ānandī, invariável)', 'adjetivo', 'Sentimentos', '😄', 'मी आनंदी आहे.'],
  ['दुःखी', 'triste (duḥkhī, invariável)', 'adjetivo', 'Sentimentos', '😢', 'मी दुःखी आहे.'],
  ['भूक', 'fome (bhūk)', 'substantivo', 'Sentimentos', '🤤', 'मला भूक आहे.', 'f'],
  ['तहान', 'sede (tahān)', 'substantivo', 'Sentimentos', '🥤', 'मला तहान आहे.', 'f'],
  ['भीती', 'medo (bhītī)', 'substantivo', 'Sentimentos', '😨', 'मला भीती आहे.', 'f'],

  // ── Mais verbos ── (nível A2.1/A2.2, Wiktionary: चालणे, झोपणे, लिहिणे, वाचणे, शिकणे, थकणे)
  ['चालणे', 'andar, caminhar (cālṇe)', 'verbo', 'Verbos-chave', '🚶', 'तो रस्त्यावर चालतो.'],
  ['झोपणे', 'dormir (jhopṇe)', 'verbo', 'Verbos-chave', '😴', 'मी रात्री झोपतो.'],
  ['लिहिणे', 'escrever (lihiṇe)', 'verbo', 'Verbos-chave', '✍️', 'मी पत्र लिहितो.'],
  ['वाचणे', 'ler (vācṇe)', 'verbo', 'Verbos-chave', '📖', 'मी पुस्तक वाचतो.'],
  ['शिकणे', 'aprender (śikṇe)', 'verbo', 'Verbos-chave', '📚', 'मी मराठी शिकतो.'],
  ['थकणे', 'ficar cansado (thakṇe)', 'verbo', 'Verbos-chave', '🥱', 'मी थकतो.'],

  // ── Tempo ── (nível A2.1/A2.2, Wiktionary: आज, काल, उद्या)
  ['आज', 'hoje (āj)', 'advérbio', 'Tempo', '📅', 'आज पाऊस आहे.'],
  ['काल', 'ontem (kāl)', 'advérbio', 'Tempo', '⏮️', 'काल पाऊस होता.'],
  ['उद्या', 'amanhã (udyā)', 'advérbio', 'Tempo', '⏭️', 'उद्या थंड असेल.'],

  // ── Essenciais (A2) ── (nível A2.1/A2.2, Wiktionary: पेक्षा, उंच, गरज, पैसा)
  ['पेक्षा', 'mais que, do que, em comparação com (pekṣā; posposição, vem depois da palavra comparada)', 'partícula', 'Essenciais', '⚖️', 'तो माणूस नितीन पेक्षा उंच आहे.'],
  ['उंच', 'alto (uñc, invariável)', 'adjetivo', 'Essenciais', '📏', 'तो माणूस नितीन पेक्षा उंच आहे.'],
  ['गरज', 'necessidade (garaj)', 'substantivo', 'Essenciais', '❗', 'मला पैशाची गरज आहे.', 'f'],
  ['पैसा', 'dinheiro (paisā; também: paisa, 1/100 da rupia)', 'substantivo', 'Essenciais', '💰', 'मला पैशाची गरज आहे.', 'm'],

  // ── Números 20-100 ── (nível A2.1, Wiktionary: वीस, तीस, चाळीस, पन्नास, साठ, सत्तर, ऐंशी, नव्वद,
  // शंभर)
  ['वीस', 'vinte (vīs)', 'numeral', 'Números', '🔢', 'वीस रुपये.'],
  ['तीस', 'trinta (tīs)', 'numeral', 'Números', '🔢', 'तीस रुपये.'],
  ['चाळीस', 'quarenta (cāḷīs)', 'numeral', 'Números', '🔢', 'चाळीस रुपये.'],
  ['पन्नास', 'cinquenta (pannās)', 'numeral', 'Números', '🔢', 'पन्नास रुपये.'],
  ['साठ', 'sessenta (sāṭh)', 'numeral', 'Números', '🔢', 'साठ रुपये.'],
  ['सत्तर', 'setenta (sattar)', 'numeral', 'Números', '🔢', 'सत्तर रुपये.'],
  ['ऐंशी', 'oitenta (aiṁśī)', 'numeral', 'Números', '🔢', 'ऐंशी रुपये.'],
  ['नव्वद', 'noventa (navvad)', 'numeral', 'Números', '🔢', 'नव्वद रुपये.'],
  ['शंभर', 'cem (śambhar)', 'numeral', 'Números', '💯', 'शंभर रुपये.'],
];

export const VOCAB_MR = buildVocab('mr', ROWS);
