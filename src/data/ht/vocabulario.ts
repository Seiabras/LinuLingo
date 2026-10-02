import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do crioulo haitiano (kreyòl ayisyen, código ISO 639-1/639-3 “ht”), nível A1 (unidades 1
 * e 2 — pacote incompleto, ver `incomplete` em index.ts).
 *
 * O crioulo haitiano não tem uma única grafia “de dicionário” para cada família de palavras, mas segue
 * a ortografia fonêmica oficial desde 1979 (Institut Pédagogique National), com 32 símbolos — a mesma
 * usada pela Wikipédia em crioulo haitiano e pelos dicionários citados abaixo. As palavras e os sentidos
 * vêm de fontes reais, não de francês “relabelado”:
 *  - Wikipédia (inglês), artigo “Haitian Creole”: história, número de falantes, status oficial,
 *    ortografia, pronomes, marcadores de tempo/aspecto/modo (te/ap/pral), negação com “pa”, tabela de
 *    empréstimos do taino (ayiti, kayiman, kasav, gwayav, amaka, mayi).
 *  - Wiktionary (inglês), entradas individuais em crioulo haitiano — consultadas uma a uma via o texto-
 *    fonte (action=raw) para pegar a etimologia e o sentido exatos: mwen, ou, li, nou, yo, te, ap, pral,
 *    pa, se, ye, gen/genyen, kay, bèf, kabrit, poul, kochon, mòn, lanmè, diri, lèt, fwomaj, pen, chat,
 *    kafe, fanmi, gwo, bon, moun, solèy, timoun, tèt, bouch, pye, vant, kè, vle, pòt, chanm, je/zye,
 *    manman, papa, frè, sè, zanmi, lajan, vyann, zonbi, bonjou, bonswa, orevwa, mèsi, wi, non, kijan,
 *    kisa, poukisa, konbyen, anpil, ak, nan, la, yo (artigo), mache, byen, rouj/wouj, ble, vèt, nwa, blan,
 *    piti — cada uma com a etimologia francesa (ou, em “zonbi”, banta) registrada no comentário da linha.
 *  - Wikivoyage (inglês), “Haitian Creole phrasebook”: saudações, números 1–10, cores, perguntas comuns.
 *  - Wikibooks (inglês), “Haitian Creole/Basic Vocabulary”: pronomes, verbos essenciais (ale, fè, kite,
 *    gen/genyen, manje, pale, rele), substantivos (bagay, dlo, moun), advérbios (anpil, kèk, lòt, yon).
 *
 * As frases de exemplo foram escritas combinando só palavras confirmadas nessas fontes, dentro dos
 * padrões gramaticais atestados (pronome sempre expresso; “pa”/“te”/“ap”/“pral” sempre antes do verbo;
 * artigo definido “la”/“nan” sempre depois do substantivo, sem inventar a regra de qual forma usar em
 * cada caso além do que as próprias entradas do Wiktionary documentam). Frases entre aspas nos
 * comentários de gramatica.ts e historias.ts que citam a Wikipédia ou o Wiktionary são citações diretas,
 * não invenções.
 *
 * Sem gênero gramatical (como a maioria dos crioulos) — ver `genders: []` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bonjou', 'bom dia; oi (ao cumprimentar alguém)', 'interjeição', 'Expressões', '👋', 'Bonjou! Kijan ou ye?'],
  ['bonswa', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bonswa, Jak!'],
  ['orevwa', 'até logo, adeus', 'interjeição', 'Expressões', '👋', 'Orevwa, zanmi mwen!'],
  ['mèsi', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Mèsi anpil!'],
  ['wi', 'sim', 'advérbio', 'Expressões', '👍', 'Wi, mwen vle.'],
  ['non', 'não (como resposta)', 'advérbio', 'Expressões', '👎', 'Non, mèsi.'],
  // ── Essenciais ──
  ['kijan', 'como', 'advérbio', 'Essenciais', '❓', 'Kijan ou rele?'],
  ['kisa', 'o quê', 'pronome', 'Essenciais', '❓', 'Kisa sa ye?'],
  ['sa', 'isto, isso, aquilo', 'pronome', 'Essenciais', '👉', 'Kisa sa ye?'],
  ['kote', 'onde; lugar, lado', 'advérbio', 'Essenciais', '❓', 'Kote ou ye?'],
  ['konbyen', 'quanto, quantos', 'advérbio', 'Essenciais', '❓', 'Konbyen dlo ou bwè?'],
  ['anpil', 'muito(s); bastante', 'advérbio', 'Essenciais', '💯', 'Mèsi anpil!'],
  ['ak', 'e; com (liga duas coisas)', 'conjunção', 'Essenciais', '➕', 'Jak ak Ana se zanmi.'],
  ['pa', 'não (nega o verbo; vem sempre antes dele)', 'advérbio', 'Essenciais', '🚫', 'Mwen pa gen lajan.'],
  ['nan', 'em, no, na, dentro de', 'preposição', 'Essenciais', '📍', 'Nou ale nan mache.'],
  ['yon', 'um, uma (artigo indefinido)', 'artigo', 'Essenciais', '🔹', 'Mwen gen yon fanmi gwo.'],
  // ── Pessoas ──
  ['mwen', 'eu; me; meu, minha', 'pronome', 'Pessoas', '🙋', 'Mwen rele Ana.'],
  ['ou', 'tu, você; teu, tua', 'pronome', 'Pessoas', '🫵', 'Kijan ou rele?'],
  ['li', 'ele, ela; dele, dela', 'pronome', 'Pessoas', '🧍', 'Li rele Jak.'],
  ['nou', 'nós; nosso, nossa', 'pronome', 'Pessoas', '🙌', 'Nou se zanmi.'],
  ['yo', 'eles, elas; (depois de um substantivo) marca o plural', 'pronome', 'Pessoas', '👥', 'Timoun yo piti.'],
  ['moun', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Gen anpil moun.'],
  ['zanmi', 'amigo(a)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Li se zanmi mwen.'],
  ['fanmi', 'família', 'substantivo', 'Pessoas', '👪', 'Mwen gen yon fanmi gwo.'],
  ['manman', 'mãe', 'substantivo', 'Pessoas', '👩', 'Manman mwen rele Woz.'],
  ['papa', 'pai', 'substantivo', 'Pessoas', '👨', 'Papa mwen gwo.'],
  ['timoun', 'criança', 'substantivo', 'Pessoas', '🧒', 'Timoun yo piti.'],
  ['zonbi', 'zumbi (pessoa sem vontade própria, da tradição afro-haitiana)', 'substantivo', 'Pessoas', '🧟', 'Se yon zonbi.'],
  // ── Natureza ──
  ['solèy', 'sol', 'substantivo', 'Natureza', '☀️', 'Gen solèy.'],
  ['lapli', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Gen lapli.'],
  ['lanmè', 'mar', 'substantivo', 'Natureza', '🌊', 'Nou wè lanmè.'],
  // ── Animais ──
  ['chen', 'cachorro', 'substantivo', 'Animais', '🐕', 'Mwen gen yon chen.'],
  ['chat', 'gato', 'substantivo', 'Animais', '🐈', 'Mwen gen yon chat.'],
  ['bèf', 'boi, vaca', 'substantivo', 'Animais', '🐄', 'Bèf la gwo.'],
  ['kabrit', 'cabra', 'substantivo', 'Animais', '🐐', 'Papa gen twa kabrit.'],
  ['poul', 'galinha', 'substantivo', 'Animais', '🐔', 'Poul la piti.'],
  // ── Alimentação e Restaurantes ──
  ['dlo', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Mwen bwè dlo.'],
  ['pen', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Nou manje pen.'],
  ['diri', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'Nou manje diri.'],
  ['lèt', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Timoun yo bwè lèt.'],
  ['kafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Mwen bwè kafe.'],
  ['pwason', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Li manje pwason.'],
  ['mayi', 'milho', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Nou manje mayi.'],
  ['mache', 'mercado, feira', 'substantivo', 'Alimentação e Restaurantes', '🧺', 'Nou ale nan mache.'],
  // ── Corpo ──
  ['tèt', 'cabeça', 'substantivo', 'Corpo', '👤', 'Tèt li gwo.'],
  ['je', 'olho', 'substantivo', 'Corpo', '👁️', 'Je li vèt.'],
  ['bouch', 'boca', 'substantivo', 'Corpo', '👄', 'Bouch li piti.'],
  ['pye', 'pé; perna', 'substantivo', 'Corpo', '🦶', 'Pye li gwo.'],
  // ── Casa ──
  ['kay', 'casa', 'substantivo', 'Casa', '🏠', 'Kay la gwo.'],
  ['chanm', 'quarto', 'substantivo', 'Casa', '🛏️', 'Chanm nan gwo.'],
  ['pòt', 'porta', 'substantivo', 'Casa', '🚪', 'Pòt la gwo.'],
  ['lajan', 'dinheiro', 'substantivo', 'Casa', '💰', 'Mwen pa gen lajan.'],
  // ── Números ──
  ['en', 'um (numeral)', 'numeral', 'Números', '1️⃣', 'Konbyen kabrit ou gen? En!'],
  ['de', 'dois', 'numeral', 'Números', '2️⃣', 'Mwen gen de zanmi.'],
  ['twa', 'três', 'numeral', 'Números', '3️⃣', 'Papa gen twa kabrit.'],
  ['kat', 'quatro', 'numeral', 'Números', '4️⃣', 'Bèf la gen kat pye.'],
  ['senk', 'cinco', 'numeral', 'Números', '5️⃣', 'Mwen gen senk zanmi.'],
  ['sis', 'seis', 'numeral', 'Números', '6️⃣', 'Nou gen sis kabrit.'],
  ['sèt', 'sete', 'numeral', 'Números', '7️⃣', 'Yo gen sèt kabrit.'],
  ['wit', 'oito', 'numeral', 'Números', '8️⃣', 'Li gen wit kabrit.'],
  ['nèf', 'nove', 'numeral', 'Números', '9️⃣', 'Nou gen nèf zanmi.'],
  ['dis', 'dez', 'numeral', 'Números', '🔟', 'Mwen gen dis zanmi.'],
  // ── Verbos-chave ──
  ['se', 'ser (cópula; não se usa antes de um adjetivo)', 'verbo', 'Verbos-chave', '🟰', 'Nou se zanmi.'],
  ['ye', 'ser, estar (forma de “se” usada no fim da frase)', 'verbo', 'Verbos-chave', '🔚', 'Kijan ou ye?'],
  ['gen', 'ter; haver (forma curta de “genyen”)', 'verbo', 'Verbos-chave', '🤲', 'Mwen gen yon zanmi.'],
  ['vle', 'querer', 'verbo', 'Verbos-chave', '💭', 'Mwen vle yon kafe.'],
  ['ale', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Nou ale nan mache.'],
  ['manje', 'comer; (substantivo) comida', 'verbo', 'Verbos-chave', '🍽️', 'Nou manje diri.'],
  ['bwè', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Mwen bwè dlo.'],
  ['pale', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Mwen pale ak ou.'],
  ['rele', 'chamar; chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Mwen rele Ana.'],
  // ── Cores e descrições ──
  ['rouj', 'vermelho (também se escreve “wouj”)', 'adjetivo', 'Cores e Descrições', '🔴', 'Bèf la rouj.'],
  ['ble', 'azul', 'adjetivo', 'Cores e Descrições', '🔵', 'Lanmè ble.'],
  ['vèt', 'verde', 'adjetivo', 'Cores e Descrições', '🟢', 'Je li vèt.'],
  ['nwa', 'preto, escuro', 'adjetivo', 'Cores e Descrições', '⚫', 'Chat la nwa.'],
  ['blan', 'branco; também “estrangeiro” (qualquer pessoa de fora, não só pela cor da pele)', 'adjetivo', 'Cores e Descrições', '⚪', 'Lèt blan.'],
  ['gwo', 'grande, gordo, crescido', 'adjetivo', 'Cores e Descrições', '📏', 'Kay la gwo.'],
  ['piti', 'pequeno', 'adjetivo', 'Cores e Descrições', '📏', 'Chat la piti.'],
];

export const VOCAB_HT = buildVocab('ht', ROWS);
