import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do dhivehi/divehi (ދިވެހި), língua oficial das Maldivas, na escrita Thaana (direita
 * pra esquerda). Pacote novo e propositalmente pequeno: cada palavra foi checada contra uma fonte
 * de verdade (nunca inventada de memória) e, onde a fonte era fina ou ambígua, a palavra ficou de
 * fora em vez de arriscar um palpite — ver `incomplete.note` em index.ts para os recortes feitos.
 *
 * Fontes consultadas (todas via WebFetch nesta sessão):
 * - en.wikipedia.org/wiki/Dhivehi_language — família, 7 casos, ordem SOV, registros de fala,
 *   quantidade de falantes, nome nativo ދިވެހި/ދިވެހިބަސް, ބަސް “língua” do sânscrito bhāṣā.
 * - en.wikipedia.org/wiki/Thaana — história e origem das letras do alfabeto Thaana.
 * - en.wikivoyage.org/wiki/Maldivian_phrasebook — saudações, sim/não, por favor, cores (romanização).
 * - en.wiktionary.org/wiki/Appendix:Dhivehi_Swadesh_list — núcleo do vocabulário (pronomes,
 *   números 1–5, corpo, natureza, bichos, verbos no infinitivo/substantivo verbal, cores).
 * - en.wiktionary.org/wiki/އަހަރެން — declinação do pronome “eu” (nominativo/genitivo/dativo/sociativo).
 * - en.wiktionary.org/wiki/ގެ — “casa”, também o sufixo genitivo (-ge), do prácrito geha, do
 *   sânscrito gehá.
 * - Busca no Wiktionary (en.wiktionary.org) para ބުޅާ “gato” (citado de A Concise Etymological
 *   Vocabulary of Dhivehi Language, Hassan Ahmed Maniku, 2000) e ނޫ “azul”.
 *
 * Nota honesta sobre as frases de exemplo: o dhivehi tem um sistema de conjugação verbal e um
 * verbo de ligação (“ser/estar”) que esta sessão não conseguiu confirmar numa fonte de verdade a
 * tempo. Por isso as frases de exemplo evitam inventar conjugação: usam a ordem sujeito-objeto-
 * verbo (confirmada) com o substantivo verbal (forma de dicionário, terminada em -un̊) ou só
 * justapõem palavras já confirmadas (demonstrativo+substantivo, genitivo+substantivo, adjetivo+
 * substantivo) — ver o tópico de gramática sobre ordem SOV para mais detalhes.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['އައްސަލާމު ޢަލައިކުމް', 'oi, que a paz esteja com você (saudação formal; assalaamu alaikum)', 'interjeição', 'Expressões', '👋', 'އައްސަލާމު ޢަލައިކުމް!'],
  ['މަރުޙަބާ', 'oi, bem-vindo (saudação informal; maruhabaa)', 'interjeição', 'Expressões', '🙋', 'މަރުޙަބާ!'],
  ['ވަކިވެލަން', 'tchau, até logo (vakivelan)', 'interjeição', 'Expressões', '👋', 'ވަކިވެލަން!'],
  ['ދަނީ', 'tchau informal, lit. “[eu] vou” (dhanee)', 'interjeição', 'Expressões', '🚶', 'ދަނީ!'],
  ['ޝުކުރިއްޔާ', 'obrigado (shukuriyyaa)', 'interjeição', 'Expressões', '🙏', 'ޝުކުރިއްޔާ!'],
  ['ހާލުކިހިނެއް', 'como você está? (haalu kihineh)', 'expressão', 'Expressões', '🙂', 'މަރުޙަބާ! ހާލުކިހިނެއް?'],
  // ── Essenciais ──
  ['ލައްބަ', 'sim, educado (labba)', 'advérbio', 'Essenciais', '👍', 'ލައްބަ.'],
  ['ނޫން', 'não (nūn̊)', 'advérbio', 'Essenciais', '👎', 'ނޫން.'],
  ['މި', 'este, esta (mi)', 'pronome', 'Essenciais', null, 'މި ގެ.'],
  ['އެ', 'esse, aquele (e)', 'pronome', 'Essenciais', null, 'އެ ގެ.'],
  ['ކާކު', 'quem (kāku)', 'pronome', 'Essenciais', '❓', 'އޭނާ ކާކު?'],
  ['ކޮންތާކު', 'onde (kon̊tāku)', 'advérbio', 'Essenciais', '❓', 'ކަލޭ ކޮންތާކު?'],
  ['ދިވެހި', 'maldivo; a língua ou o povo das Maldivas (dhivehi)', 'adjetivo', 'Essenciais', '🇲🇻', 'ދިވެހި މީހާ.'],
  ['ބަސް', 'língua, idioma (bas, do sânscrito bhāṣā)', 'substantivo', 'Essenciais', '🗣️', 'ދިވެހިބަސް.'],
  // ── Pessoas ──
  ['އަހަރެން', 'eu (aharen̊)', 'pronome', 'Pessoas', '🙋', 'އަހަރެން ރަނގަޅު.'],
  ['ކަލޭ', 'tu, você (kalē)', 'pronome', 'Pessoas', '🫵', 'ކަލޭ ކާކު?'],
  ['އޭނާ', 'ele, ela (ēnā)', 'pronome', 'Pessoas', '🧑', 'އޭނާ ރަނގަޅު.'],
  ['އަހަރެމެން', 'nós (aharemen̊)', 'pronome', 'Pessoas', '🙌', 'އަހަރެމެން ރަނގަޅު.'],
  ['މީހާ', 'pessoa (mīhā)', 'substantivo', 'Pessoas', '🧍', 'ދިވެހި މީހާ.'],
  ['މަންމަ', 'mãe (man̊ma)', 'substantivo', 'Pessoas', '👩', 'އަހަރެންގެ މަންމަ.'],
  ['ބައްޕަ', 'pai (bappa)', 'substantivo', 'Pessoas', '👨', 'އަހަރެންގެ ބައްޕަ.'],
  ['ކުއްޖާ', 'criança (kujjā)', 'substantivo', 'Pessoas', '🧒', 'ކުޑަ ކުއްޖާ.'],
  // ── Natureza ──
  ['އިރު', 'sol (iru)', 'substantivo', 'Natureza', '☀️', 'އިރު ބޮޑު.'],
  ['ހަނދު', 'lua (han̊du)', 'substantivo', 'Natureza', '🌙', 'ހަނދު ހުދު.'],
  ['ތަރި', 'estrela (tari)', 'substantivo', 'Natureza', '⭐', 'ކުޑަ ތަރި.'],
  ['ކަނޑު', 'mar (kan̊ḍu)', 'substantivo', 'Natureza', '🌊', 'ކަނޑު ނޫ.'],
  ['ވާރޭ', 'chuva (vārē)', 'substantivo', 'Natureza', '🌧️', 'ބޮޑު ވާރޭ.'],
  ['ގަސް', 'árvore (gas)', 'substantivo', 'Natureza', '🌳', 'ބޮޑު ގަސް.'],
  ['ސުނޯ', 'neve, empréstimo do inglês “snow” — as Maldivas não têm neve (sunō)', 'substantivo', 'Natureza', '❄️', 'ހުދު ސުނޯ.'],
  // ── Animais ──
  ['ޖަނަވާރު', 'animal (janavāru)', 'substantivo', 'Animais', '🐾', 'ކުޑަ ޖަނަވާރު.'],
  ['ދޫނި', 'pássaro (dūni)', 'substantivo', 'Animais', '🐦', 'ކުޑަ ދޫނި.'],
  ['ބަޅު', 'cachorro (baḷu)', 'substantivo', 'Animais', '🐕', 'ބޮޑު ބަޅު.'],
  ['ބުޅާ', 'gato (buḷā)', 'substantivo', 'Animais', '🐈', 'ކުޑަ ބުޅާ.'],
  ['ނަންނުގަތި', 'cobra (nan̊nugati)', 'substantivo', 'Animais', '🐍', 'ބޮޑު ނަންނުގަތި.'],
  // ── Alimentação ──
  ['މަސް', 'peixe (mas)', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'އަހަރެން މަސް ކެއުން.'],
  ['ފެން', 'água (fen̊, do sânscrito)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'އަހަރެން ފެން ބުއިން.'],
  ['ލޮނު', 'sal (lonu)', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'ލޮނު ހުދު.'],
  // ── Corpo ──
  ['ބޯ', 'cabeça (bō)', 'substantivo', 'Corpo', '👤', 'ބޮޑު ބޯ.'],
  ['ލޯ', 'olho (lō)', 'substantivo', 'Corpo', '👁️', 'ކުޑަ ލޯ.'],
  ['އަތް', 'mão (at̊)', 'substantivo', 'Corpo', '✋', 'އަހަރެންގެ އަތް.'],
  ['ފައި', 'perna, pé (fai)', 'substantivo', 'Corpo', '🦶', 'އަހަރެންގެ ފައި.'],
  ['ކަންފަތް', 'orelha (kan̊fat̊, lit. “folha do ouvido”)', 'substantivo', 'Corpo', '👂', 'ކުޑަ ކަންފަތް.'],
  ['ދަތް', 'dente (dat̊)', 'substantivo', 'Corpo', '🦷', 'ހުދު ދަތް.'],
  // ── Casa ──
  ['ގެ', 'casa (ge, do sânscrito gehá via prácrito geha; o mesmo ގެ vira o sufixo genitivo “-ge”)', 'substantivo', 'Casa', '🏠', 'ބޮޑު ގެ.'],
  // ── Números ──
  ['އެކެއް', 'um (ekek̊)', 'numeral', 'Números', '1️⃣', 'އެކެއް ދޫނި.'],
  ['ދޭއް', 'dois (dēk̊)', 'numeral', 'Números', '2️⃣', 'ދޭއް މަސް.'],
  ['ތިނެއް', 'três (tinek̊)', 'numeral', 'Números', '3️⃣', 'ތިނެއް ގަސް.'],
  ['ހަތަރެއް', 'quatro (hatarek̊)', 'numeral', 'Números', '4️⃣', 'ހަތަރެއް ބުޅާ.'],
  ['ފަހެއް', 'cinco (fahek̊)', 'numeral', 'Números', '5️⃣', 'ފަހެއް ދޫނި.'],
  // ── Verbos-chave (forma de dicionário: substantivo verbal terminado em -un̊) ──
  ['ކެއުން', 'comer (keun̊)', 'verbo', 'Verbos-chave', '🍽️', 'އަހަރެން މަސް ކެއުން.'],
  ['ބުއިން', 'beber (buin̊)', 'verbo', 'Verbos-chave', '🥤', 'އަހަރެން ފެން ބުއިން.'],
  ['ބުނުން', 'dizer (bunun̊)', 'verbo', 'Verbos-chave', '💬', 'އަހަރެން ބުނުން.'],
  ['ބެލުން', 'ver (belun̊)', 'verbo', 'Verbos-chave', '👀', 'އަހަރެން ދޫނި ބެލުން.'],
  ['ދިނުން', 'dar (dinun̊)', 'verbo', 'Verbos-chave', '🤲', 'އަހަރެން ފެން ދިނުން.'],
  ['ހިނގުން', 'andar (hiⁿgun̊)', 'verbo', 'Verbos-chave', '🚶', 'އަހަރެން ހިނގުން.'],
  // ── Cores e Descrições ──
  ['ރަތް', 'vermelho (rat̊)', 'adjetivo', 'Cores', '🔴', 'ރަތް މަސް.'],
  ['ފެހި', 'verde (fehi)', 'adjetivo', 'Cores', '🟢', 'ފެހި ގަސް.'],
  ['ރީނދޫ', 'amarelo (rīⁿdū)', 'adjetivo', 'Cores', '🟡', 'ރީނދޫ ދޫނި.'],
  ['ހުދު', 'branco (hudu)', 'adjetivo', 'Cores', '⚪', 'ހުދު ބުޅާ.'],
  ['ކަޅު', 'preto (kaḷu)', 'adjetivo', 'Cores', '⚫', 'ކަޅު ބަޅު.'],
  ['ނޫ', 'azul (nū)', 'adjetivo', 'Cores', '🔵', 'ކަނޑު ނޫ.'],
  ['ބޮޑު', 'grande (boḍu)', 'adjetivo', 'Descrições', '📏', 'ބޮޑު ގަސް.'],
  ['ކުޑަ', 'pequeno (kuḍa)', 'adjetivo', 'Descrições', '📏', 'ކުޑަ ކުއްޖާ.'],
  ['ރަނގަޅު', 'bom (raⁿgaḷu)', 'adjetivo', 'Descrições', '👍', 'އަހަރެން ރަނގަޅު.'],
];

export const VOCAB_DV = buildVocab('dv', ROWS);
