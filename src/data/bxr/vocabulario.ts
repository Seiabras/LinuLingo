import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do buriato (bxr — código ISO 639-3 “Russia Buriat”, a variedade maior e mais
 * padronizada do macro-idioma buriato ISO 639-2 “bua”; ver a nota de classificação em index.ts),
 * em escrita CIRÍLICA MODERNA (desde 1939). Toda palavra abaixo foi conferida numa fonte
 * lexicográfica específica do buriato, NUNCA copiada do mongol khalkha por semelhança:
 *
 *   - en.wikipedia.org/wiki/Buryat_language — códigos ISO (bua, bxr, bxm, bxu), classificação
 *     (Mongólico > Mongólico central > ramo buriato-mongol), ~440 mil falantes (2017–2020), status
 *     “definitivamente em perigo” da UNESCO, história da escrita (script mongol clássico até ~1910;
 *     alfabeto Vagindra 1905–1930; latino 1930–1939; cirílico desde 1939, com as letras extras Үү,
 *     Өө e Һһ), 8 casos gramaticais (nominativo, acusativo, genitivo, instrumental, ablativo,
 *     comitativo, dativo-locativo e um tema oblíquo), ordem SOV com posposições, 7 vogais /i, ʉ, e,
 *     a, u, o, ɔ/ com harmonia vocálica (sem detalhe de classes confirmado nesta consulta — ver
 *     gramatica.ts), ausência de gênero gramatical (não mencionado no artigo).
 *   - en.wikipedia.org/wiki/Buryats — população (~556 mil buriatos; 460.053 na Rússia, dos quais
 *     295.273 na própria República da Buriácia; 43.661 na Mongólia; 10–70 mil na China), região ao
 *     redor do lago Baikal e Ulan-Udê, cultura (gers, pecuária seminômade, budismo tibetano desde o
 *     início do séc. XVIII, xamanismo).
 *   - bxr.wikipedia.org/wiki/Буряад_хэлэн — a própria Wikipédia em buriato confirma o nome nativo
 *     “Буряад хэлэн (буряад-монгол хэлэн)” e as palavras “арад түмэн” (povo) e “хэлэн” (língua).
 *   - en.wiktionary.org — Category:Buryat_lemmas (535 verbetes, 13 subcategorias) e as categorias
 *     Category:Buryat_nouns, _verbs, _adjectives, _numerals, _pronouns, _adverbs e _particles, usadas
 *     para levantar palavras realmente atestadas (não supostas por semelhança com o mongol). Depois,
 *     um verbete individual do Wiktionary em inglês por palavra, confirmando significado, classe
 *     gramatical e, quando presente, pronúncia/IPA e etimologia proto-mongólica: би, ши, та, тэрэ,
 *     бидэ, энэ (pronomes, com a tabela de pronomes pessoais do verbete “би”, que também lista o
 *     sufixo pessoal “-б” para a 1ª pessoa, usado em “байнаб”); аба (pai, informal; o verbete marca
 *     “эсэгэ” como sinônimo padrão); эжы (mãe); басаган (menina, filha); нүхэр (amigo, camarada);
 *     нэрэ (nome); наран (sol); һара (lua, par coordenado de наран no próprio verbete); одон
 *     (estrela); гал (fogo); уһан (água); нуур (lago); нохой (cão); миисгэй (gato); морин (cavalo,
 *     com o -н final preservado, cognato do mongol морь); загаһан (peixe, cognato do mongol загас —
 *     ver a mudança -с->-һ- comentada em gramatica.ts); баабгай (urso); бүргэд (águia); мяхан
 *     (carne); һүн (leite, cognato do mongol сүү, mesma mudança с→һ); гурил (farinha); гар (mão,
 *     braço); нюдэн (olho); толгай (cabeça; note-se a forma buriata “толгай”, diferente do mongol
 *     “толгой”); тархи (cérebro); гэдэһэн (barriga, cognato do mongol гэдэс); нюрган (costas,
 *     cognato do mongol нуруу); гэр (casa, guer); байшан (casa, construção; cognato do mongol
 *     байшин); нэгэн, хоёр, гурбан, дүрбэн, табан, зургаан, долоон, найман, юһэн, арбан (números
 *     1–10, da Category:Buryat_numerals — note-se o -н/-м final que o mongol khalkha perdeu: нэгэн́
 *     ~ нэг, морин ~ морь); байха (ser/estar/existir); ябаха (ir); эдихэ (comer); ууха (beber);
 *     хэлэхэ (dizer, falar); мэдэхэ (saber); ерэхэ (vir); үгэхэ (dar); һураха (aprender, perguntar);
 *     ехэ (grande); бишыхан (pequeno, da Category:Buryat_adjectives); һайн (bom, bem — o próprio
 *     verbete marca como “doublet” do cirílico “сайн”, a forma do mongol khalkha: mesma raiz
 *     proto-mongólica *sayin, com a mudança с→һ só no buriato); муу (mau, ruim); шэнэ (novo); хара
 *     (preto); улаан (vermelho); сагаан (branco, cognato do mongol цагаан — mudança с↔ц, diferente
 *     da mudança с→һ, ver gramatica.ts); ногоон (verde); шара (amarelo); хүхэ (azul); хэн (quem);
 *     юун (o quê); мүнөө (agora, com os sinônimos atestados одоо e эдүгээ); эндэ (aqui).
 *
 * O buriato é uma língua da família mongólica, SEM gênero gramatical (traço geral da família,
 * confirmado para o mongol khalkha no pacote mn e sem nenhuma menção em contrário para o buriato nas
 * fontes consultadas aqui) — por isso `gender` fica de fora em todas as linhas.
 *
 * SOBRE AS FRASES DE EXEMPLO (nada de inventado: cada frase combina só palavras e um padrão
 * atestados, nunca uma frase conjugada inventada palavra por palavra):
 *   (a) O verbo “байха” (ser/estar/existir) tem uma forma atestada “байна” (durativo), cujo cognato
 *       mongol aparece no exemplo “Энд харандаа байна” (“há um lápis aqui”, um uso EXISTENCIAL). A
 *       maioria das frases abaixo usa esse mesmo padrão, “Эндэ ___ байна” (“há ___ aqui” / “___ está
 *       aqui”), combinando o advérbio atestado “эндэ” (aqui) com o substantivo da linha e o verbo
 *       atestado “байна” — um padrão, não uma frase decorada.
 *   (b) Para adjetivos, o padrão “___ байна” (“é/está ___”) segue o mesmo uso predicativo de “байна”,
 *       e alguns combinam um substantivo já atestado (“Баабгай ехэ байна”, “o urso é grande”), no
 *       mesmo molde do mongol “Тэмээ том байна” (pacote mn).
 *   (c) Para verbos, nenhuma fonte consultada atesta uma frase conjugada por verbo: por isso eles
 *       aparecem na forma de citação do dicionário (o infinitivo em “-ха/-хэ”), sem conjugação
 *       inventada — mesma escolha do pacote mn.
 *   (d) Para números, a frase combina o numeral com um substantivo já atestado (ex.: “Хоёр морин”,
 *       dois cavalos), pela mesma razão explicada no pacote mn: a ordem numeral+substantivo é uma
 *       extensão razoável do padrão modificador-antes-do-substantivo (confirmado em geral para a
 *       família mongólica), não uma regra atestada palavra por palavra para cada numeral.
 *   (e) Os pronomes pessoais usam “[pronome] эндэ байна” (“[pronome] está aqui”), e “би” usa também o
 *       sufixo pessoal atestado “-б” (“Би ... байнаб”, “eu sou/estou ...”) nas frases com nome.
 */
const ROWS: VocabRow[] = [
  // Pessoas
  ['би', 'eu', 'pronome', 'Pessoas', '🙋', 'Би эндэ байнаб.'],
  ['ши', 'tu, você (informal)', 'pronome', 'Pessoas', '👉', 'Ши эндэ байна.'],
  ['та', 'você (formal), vocês', 'pronome', 'Pessoas', '🫵', 'Та эндэ байна.'],
  ['тэрэ', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Тэрэ эндэ байна.'],
  ['бидэ', 'nós', 'pronome', 'Pessoas', '🙌', 'Бидэ эндэ байна.'],
  ['энэ', 'este, esta, isto', 'pronome', 'Pessoas', '👆', 'Энэ гэр байна.'],
  ['аба', 'pai (informal)', 'substantivo', 'Pessoas', '👨', 'Эндэ аба байна.'],
  ['эжы', 'mãe', 'substantivo', 'Pessoas', '👩', 'Эндэ эжы байна.'],
  ['басаган', 'menina, filha', 'substantivo', 'Pessoas', '👧', 'Эндэ басаган байна.'],
  ['нүхэр', 'amigo, amiga, camarada', 'substantivo', 'Pessoas', '🤝', 'Эндэ нүхэр байна.'],
  ['нэрэ', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Эндэ нэрэ байна.'],
  // Essenciais
  ['хэн', 'quem', 'pronome', 'Essenciais', '❓', 'Хэн эндэ байна?'],
  ['юун', 'o quê, o que', 'pronome', 'Essenciais', '❓', 'Юун эндэ байна?'],
  ['мүнөө', 'agora', 'advérbio', 'Essenciais', '⏰', 'Мүнөө би эндэ байнаб.'],
  // Natureza
  ['наран', 'sol', 'substantivo', 'Natureza', '☀️', 'Эндэ наран байна.'],
  ['һара', 'lua', 'substantivo', 'Natureza', '🌙', 'Эндэ һара байна.'],
  ['одон', 'estrela', 'substantivo', 'Natureza', '⭐', 'Эндэ одон байна.'],
  ['гал', 'fogo', 'substantivo', 'Natureza', '🔥', 'Эндэ гал байна.'],
  ['уһан', 'água', 'substantivo', 'Natureza', '💧', 'Эндэ уһан байна.'],
  ['нуур', 'lago', 'substantivo', 'Natureza', '🏞️', 'Эндэ нуур байна.'],
  // Animais
  ['нохой', 'cão, cachorro', 'substantivo', 'Animais', '🐕', 'Эндэ нохой байна.'],
  ['миисгэй', 'gato', 'substantivo', 'Animais', '🐈', 'Эндэ миисгэй байна.'],
  ['морин', 'cavalo', 'substantivo', 'Animais', '🐴', 'Эндэ морин байна.'],
  ['загаһан', 'peixe', 'substantivo', 'Animais', '🐟', 'Эндэ загаһан байна.'],
  ['баабгай', 'urso', 'substantivo', 'Animais', '🐻', 'Баабгай ехэ байна.'],
  ['бүргэд', 'águia', 'substantivo', 'Animais', '🦅', 'Эндэ бүргэд байна.'],
  // Alimentação
  ['мяхан', 'carne', 'substantivo', 'Alimentação', '🍖', 'Эндэ мяхан байна.'],
  ['һүн', 'leite', 'substantivo', 'Alimentação', '🥛', 'Эндэ һүн байна.'],
  ['гурил', 'farinha', 'substantivo', 'Alimentação', '🌾', 'Эндэ гурил байна.'],
  // Corpo
  ['гар', 'mão, braço', 'substantivo', 'Corpo', '✋', 'Эндэ гар байна.'],
  ['нюдэн', 'olho', 'substantivo', 'Corpo', '👁️', 'Эндэ нюдэн байна.'],
  ['толгай', 'cabeça', 'substantivo', 'Corpo', '👤', 'Эндэ толгай байна.'],
  ['тархи', 'cérebro', 'substantivo', 'Corpo', '🧠', 'Эндэ тархи байна.'],
  ['гэдэһэн', 'barriga', 'substantivo', 'Corpo', '🫃', 'Эндэ гэдэһэн байна.'],
  ['нюрган', 'costas', 'substantivo', 'Corpo', '🔙', 'Эндэ нюрган байна.'],
  // Casa
  ['гэр', 'casa, guer (tenda redonda buriata e mongol)', 'substantivo', 'Casa', '⛺', 'Эндэ гэр байна.'],
  ['байшан', 'casa, construção', 'substantivo', 'Casa', '🏠', 'Эндэ байшан байна.'],
  // Números
  ['нэгэн', 'um', 'numeral', 'Números', '1️⃣', 'Нэгэн гэр.'],
  ['хоёр', 'dois', 'numeral', 'Números', '2️⃣', 'Хоёр морин.'],
  ['гурбан', 'três', 'numeral', 'Números', '3️⃣', 'Гурбан нохой.'],
  ['дүрбэн', 'quatro', 'numeral', 'Números', '4️⃣', 'Дүрбэн миисгэй.'],
  ['табан', 'cinco', 'numeral', 'Números', '5️⃣', 'Табан одон.'],
  ['зургаан', 'seis', 'numeral', 'Números', '6️⃣', 'Зургаан загаһан.'],
  ['долоон', 'sete', 'numeral', 'Números', '7️⃣', 'Долоон баабгай.'],
  ['найман', 'oito', 'numeral', 'Números', '8️⃣', 'Найман бүргэд.'],
  ['юһэн', 'nove', 'numeral', 'Números', '9️⃣', 'Юһэн нуур.'],
  ['арбан', 'dez', 'numeral', 'Números', '🔟', 'Арбан гэр.'],
  // Verbos-chave
  ['байха', 'ser, estar, existir (байна = forma durativa atestada)', 'verbo', 'Verbos-chave', '🧑', 'Байха.'],
  ['ябаха', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Ябаха.'],
  ['эдихэ', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Эдихэ.'],
  ['ууха', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ууха.'],
  ['хэлэхэ', 'dizer, falar', 'verbo', 'Verbos-chave', '🗣️', 'Хэлэхэ.'],
  ['мэдэхэ', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Мэдэхэ.'],
  ['ерэхэ', 'vir', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Ерэхэ.'],
  ['үгэхэ', 'dar', 'verbo', 'Verbos-chave', '🤲', 'Үгэхэ.'],
  ['һураха', 'aprender, perguntar', 'verbo', 'Verbos-chave', '📚', 'Һураха.'],
  // Adjetivos
  ['ехэ', 'grande', 'adjetivo', 'Adjetivos', '📏', 'Ехэ байна.'],
  ['бишыхан', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'Бишыхан байна.'],
  ['һайн', 'bom, bem (doublet atestado de “сайн”, forma do mongol khalkha)', 'adjetivo', 'Adjetivos', '👍', 'Һайн байна!'],
  ['муу', 'mau, ruim', 'adjetivo', 'Adjetivos', '👎', 'Муу байна.'],
  ['шэнэ', 'novo', 'adjetivo', 'Adjetivos', '✨', 'Гэр шэнэ байна.'],
  // Cores
  ['хара', 'preto', 'adjetivo', 'Cores', '⚫', 'Нохой хара байна.'],
  ['улаан', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Наран улаан байна.'],
  ['сагаан', 'branco (cognato do mongol цагаан)', 'adjetivo', 'Cores', '⚪', 'Миисгэй сагаан байна.'],
  ['ногоон', 'verde', 'adjetivo', 'Cores', '🟢', 'Ногоон байна.'],
  ['шара', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Шара байна.'],
  ['хүхэ', 'azul', 'adjetivo', 'Cores', '🔵', 'Уһан хүхэ байна.'],
];

export const VOCAB_BXR = buildVocab('bxr', ROWS);
