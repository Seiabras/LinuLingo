import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mongol khalkha (mn), em escrita cirílica moderna — a escrita oficial da Mongólia
 * desde 1941/1946, DIFERENTE da escrita mongol vertical tradicional (ainda usada na Mongólia Interior,
 * na China), que não entra neste pacote. Toda palavra abaixo foi conferida em pelo menos uma fonte
 * linguística ou lexicográfica específica do mongol:
 *
 *   - en.wikipedia.org/wiki/Mongolian_language — gramática geral (ordem SOV, harmonia vocálica,
 *     ausência de gênero gramatical e de artigos, sistema de casos, classificação genealógica) e a
 *     frase completa “Bi naizaa avarsan” (“Eu salvei meu amigo”, no original “Би найзаа аварсан”).
 *   - en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet — o alfabeto cirílico mongol (35 letras: o
 *     russo mais Өө e Үү) e sua história (decreto de 1941, adoção formal em 1946).
 *   - en.wiktionary.org/wiki/Appendix:Mongolian_Swadesh_list — lista Swadesh do mongol (pronomes,
 *     números 1–5, natureza, corpo, verbos básicos, adjetivos, perguntas).
 *   - Verbetes individuais do Wiktionary em inglês, um por palavra, confirmando significado, pronúncia
 *     e classe gramatical: морь (cavalo), гэр (casa/guer), хонь (ovelha), ямаа (cabra), тэмээ (camelo),
 *     сүү (leite), айраг (koumiss, leite de égua fermentado), цай (chá), найз (amigo, com a frase
 *     atestada “Энэ хүн миний найз” = “esta pessoa é meu amigo/minha amiga”), шинэ (novo), улаан
 *     (vermelho, com os compostos atestados “улаан лооль” = tomate vermelho e “улаан лууван” = cenoura
 *     vermelha, que mostram o adjetivo ANTES do substantivo), хоёр (dois), зургаа (seis), долоо (sete),
 *     найм (oito), ес (nove), арав (dez), яагаад (por quê), миний (meu/minha), вэ (partícula de
 *     pergunta com palavras interrogativas), байна (forma presente durativa do verbo “бай”, ser/estar/
 *     existir, com os exemplos atestados “Энд харандаа байна” = “há um lápis aqui” e “Танд мөнгө байна
 *     уу?” = “você tem dinheiro?”), уу (partícula de pergunta de sim/não, com a variante harmônica үү e
 *     a observação de que soa “юу” depois de vogal) e -ж (sufixo converbo, usado sobretudo com “байх”
 *     para o presente contínuo).
 *   - omniglot.com/language/phrases/mongolian.php — frases de cortesia e do dia a dia: “Сайн байна уу?”
 *     (olá), “Сайн, та сайн байна уу?” (bem, e você?), “Таны нэр хэн бэ?” (qual é seu nome?), “Миний
 *     нэр …” (meu nome é …), “Та хаанаас ирсэн бэ?” (de onde você é?), “Би …ээс ирсэн” (eu sou de …),
 *     “Чи монгол хэл мэдэх үү?” (você fala mongol? informal), “Та монгол хэл мэдэх үү?” (você fala
 *     mongol? formal), “Монголоор …-г яаж хэлэх вэ?” (como se diz … em mongol?), “Баярлалаа” (obrigado),
 *     “Танд их баярлалаа” (muito obrigado), “Баяртай” (tchau).
 *
 * O mongol é uma língua da família mongólica (ver nota em index.ts sobre a hipótese “altaica”), SEM
 * gênero gramatical e SEM artigos (confirmado na Wikipédia) — por isso `gender` fica sempre de fora
 * neste pacote. A ordem das palavras é sujeito-objeto-verbo (SOV), e os modificadores (adjetivo,
 * numeral, demonstrativo) vêm ANTES do substantivo, como mostram os compostos atestados com “улаан”
 * (vermelho) citados acima — por isso frases como “Нэг гэр” (uma casa) e “Хоёр морь” (dois cavalos)
 * seguem esse mesmo padrão numeral+substantivo, embora a ordem numeral-substantivo em si não tenha sido
 * conferida palavra por palavra (é uma extensão razoável do padrão adjetivo-substantivo atestado, não
 * uma regra citada diretamente para numerais).
 *
 * SOBRE AS FRASES DE EXEMPLO (honestidade sobre o que é citação direta e o que é combinação):
 *   (a) Quando existe uma frase ATESTADA de verdade numa fonte (Wikipédia, Wiktionary ou Omniglot), ela
 *       é usada tal qual — ex.: “Би найзаа аварсан.”, “Энэ хүн миний найз.”, “Сайн байна уу?”, “Таны нэр
 *       хэн бэ?”, “Та хаанаас ирсэн бэ?”, “Чи/Та монгол хэл мэдэх үү?”, “Монголоор …-г яаж хэлэх вэ?”,
 *       “Баярлалаа.”/“Танд их баярлалаа.”, “Баяртай!”.
 *   (b) Para substantivos sem frase própria atestada, a frase de exemplo usa o padrão demonstrativo
 *       “Энэ ___.” (“isto é ___”), seguindo o mesmo tipo de construção sem cópula que aparece na frase
 *       atestada “Энэ хүн миний найз” (“esta pessoa [é] meu amigo”, sem verbo “ser” explícito).
 *   (c) Para adjetivos, a frase de exemplo usa “___ байна.” (“___ é/está”), seguindo o padrão atestado
 *       em “Сайн байна уу?” (literalmente “bem está?”, onde “сайн” é o adjetivo predicativo e “байна” é
 *       a cópula/existencial).
 *   (d) Para verbos, nenhuma fonte consultada atesta uma frase conjugada específica para cada verbo
 *       deste pacote (a Wikipédia confirma, de forma geral, que o sufixo converbo “-ж” combinado com
 *       “байх” forma o presente contínuo, mas sem exemplos palavra por palavra) — por isso os verbos
 *       aparecem na forma de citação do dicionário (o infinitivo/substantivo verbal terminado em “-х”),
 *       sem frase conjugada inventada.
 *   (e) Para numerais, a frase combina o numeral com um substantivo da lista (ex.: “Хоёр морь.”, dois
 *       cavalos), pela razão exposta acima sobre a ordem numeral-substantivo.
 */
const ROWS: VocabRow[] = [
  // Pessoas
  ['би', 'eu', 'pronome', 'Pessoas', '🙋', 'Би найзаа аварсан.'],
  ['чи', 'tu, você (informal)', 'pronome', 'Pessoas', '👉', 'Чи монгол хэл мэдэх үү?'],
  ['та', 'você (formal), vocês', 'pronome', 'Pessoas', '🫵', 'Та монгол хэл мэдэх үү?'],
  ['тэр', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Тэр.'],
  ['ээж', 'mãe', 'substantivo', 'Pessoas', '👩', 'Энэ ээж.'],
  ['аав', 'pai', 'substantivo', 'Pessoas', '👨', 'Энэ аав.'],
  ['найз', 'amigo, amiga', 'substantivo', 'Pessoas', '🤝', 'Энэ хүн миний найз.'],
  // Natureza
  ['нар', 'sol', 'substantivo', 'Natureza', '☀️', 'Энэ нар.'],
  ['ус', 'água', 'substantivo', 'Natureza', '💧', 'Энэ ус.'],
  ['уул', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Энэ уул.'],
  ['тэнгэр', 'céu', 'substantivo', 'Natureza', '🌌', 'Энэ тэнгэр.'],
  ['цас', 'neve', 'substantivo', 'Natureza', '❄️', 'Энэ цас.'],
  // Animais
  ['морь', 'cavalo', 'substantivo', 'Animais', '🐴', 'Энэ морь.'],
  ['хонь', 'ovelha', 'substantivo', 'Animais', '🐑', 'Энэ хонь.'],
  ['ямаа', 'cabra', 'substantivo', 'Animais', '🐐', 'Энэ ямаа.'],
  ['тэмээ', 'camelo', 'substantivo', 'Animais', '🐫', 'Энэ тэмээ.'],
  ['нохой', 'cão', 'substantivo', 'Animais', '🐕', 'Энэ нохой.'],
  ['шувуу', 'pássaro', 'substantivo', 'Animais', '🐦', 'Энэ шувуу.'],
  // Comida
  ['мах', 'carne', 'substantivo', 'Comida', '🍖', 'Энэ мах.'],
  ['цай', 'chá', 'substantivo', 'Comida', '🍵', 'Энэ цай.'],
  ['сүү', 'leite', 'substantivo', 'Comida', '🥛', 'Энэ сүү.'],
  ['айраг', 'airag (leite de égua fermentado)', 'substantivo', 'Comida', '🍶', 'Энэ айраг.'],
  // Corpo
  ['толгой', 'cabeça', 'substantivo', 'Corpo', '👤', 'Энэ толгой.'],
  ['нүд', 'olho', 'substantivo', 'Corpo', '👁️', 'Энэ нүд.'],
  ['гар', 'mão, braço', 'substantivo', 'Corpo', '✋', 'Энэ гар.'],
  ['хөл', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'Энэ хөл.'],
  ['ам', 'boca', 'substantivo', 'Corpo', '👄', 'Энэ ам.'],
  // Casa
  ['гэр', 'casa, guer (tenda redonda mongol)', 'substantivo', 'Casa', '⛺', 'Энэ гэр.'],
  // Números
  ['нэг', 'um', 'numeral', 'Números', '1️⃣', 'Нэг гэр.'],
  ['хоёр', 'dois', 'numeral', 'Números', '2️⃣', 'Хоёр морь.'],
  ['гурав', 'três', 'numeral', 'Números', '3️⃣', 'Гурав хонь.'],
  ['дөрөв', 'quatro', 'numeral', 'Números', '4️⃣', 'Дөрөв ямаа.'],
  ['тав', 'cinco', 'numeral', 'Números', '5️⃣', 'Тав тэмээ.'],
  ['зургаа', 'seis', 'numeral', 'Números', '6️⃣', 'Зургаа нохой.'],
  ['долоо', 'sete', 'numeral', 'Números', '7️⃣', 'Долоо шувуу.'],
  ['найм', 'oito', 'numeral', 'Números', '8️⃣', 'Найм гэр.'],
  ['ес', 'nove', 'numeral', 'Números', '9️⃣', 'Ес морь.'],
  ['арав', 'dez', 'numeral', 'Números', '🔟', 'Арав хонь.'],
  // Verbos
  ['идэх', 'come, comer', 'verbo', 'Verbos', '🍽️', 'Идэх.'],
  ['уух', 'bebe, beber', 'verbo', 'Verbos', '🥤', 'Уух.'],
  ['үзэх', 'vê, ver', 'verbo', 'Verbos', '👀', 'Үзэх.'],
  ['мэдэх', 'sabe, saber, conhecer', 'verbo', 'Verbos', '🧠', 'Мэдэх.'],
  ['унтах', 'dorme, dormir', 'verbo', 'Verbos', '😴', 'Унтах.'],
  ['ирэх', 'vem, vir', 'verbo', 'Verbos', '🚶', 'Ирэх.'],
  // Adjetivos
  ['том', 'grande', 'adjetivo', 'Adjetivos', '📏', 'Тэмээ том байна.'],
  ['жижиг', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'Шувуу жижиг байна.'],
  ['сайн', 'bom', 'adjetivo', 'Adjetivos', '👍', 'Сайн байна уу?'],
  ['муу', 'mau, ruim', 'adjetivo', 'Adjetivos', '👎', 'Энэ муу байна.'],
  ['шинэ', 'novo', 'adjetivo', 'Adjetivos', '✨', 'Гэр шинэ байна.'],
  ['улаан', 'vermelho', 'adjetivo', 'Adjetivos', '🔴', 'Нар улаан байна.'],
  ['цагаан', 'branco', 'adjetivo', 'Adjetivos', '⚪', 'Цас цагаан байна.'],
  // Perguntas
  ['хэн', 'quem', 'pronome', 'Perguntas', '❓', 'Таны нэр хэн бэ?'],
  ['юу', 'o quê, o que', 'pronome', 'Perguntas', '❓', 'Юу байна вэ?'],
  ['хаана', 'onde', 'advérbio', 'Perguntas', '❓', 'Та хаанаас ирсэн бэ?'],
  ['хэзээ', 'quando', 'advérbio', 'Perguntas', '❓', 'Хэзээ?'],
  ['яаж', 'como', 'advérbio', 'Perguntas', '❓', 'Монголоор …-г яаж хэлэх вэ?'],
  // Expressões
  ['энэ', 'este, esta, isto', 'pronome', 'Expressões', '👉', 'Энэ хүн миний найз.'],
  ['сайн байна уу', 'olá (lit. “você está bem?”)', 'expressão', 'Expressões', '👋', 'Сайн, та сайн байна уу?'],
  ['баярлалаа', 'obrigado, obrigada', 'expressão', 'Expressões', '🙏', 'Танд их баярлалаа.'],
  ['баяртай', 'tchau, adeus', 'expressão', 'Expressões', '👋', 'Баяртай!'],
];

export const VOCAB_MN = buildVocab('mn', ROWS);
