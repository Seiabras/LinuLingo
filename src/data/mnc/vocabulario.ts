import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do manchu (mnc), na escrita manchu — vertical, de cima pra baixo, como a mongol, da qual
 * nasceu. O comentário no fim de cada linha traz a palavra e a frase na romanização de Möllendorff.
 *
 * FONTES DAS PALAVRAS (todas conferidas uma a uma):
 *   - en.wiktionary.org/wiki/Appendix:Manchu_Swadesh_list — a lista Swadesh do manchu, com cada palavra
 *     na escrita e na romanização: pronomes, números de 1 a 5, natureza, corpo, verbos básicos,
 *     adjetivos e perguntas.
 *   - Verbetes do Wiktionary em inglês, um por palavra, para o que não está na lista Swadesh: ᠮᠣᡵᡳᠨ
 *     (morin, cavalo), ᡥᠣᠨᡳᠨ (honin, ovelha), ᡳᡥᠠᠨ (ihan, boi), ᡨᡝᠮᡝᠨ (temen, camelo), ᠪᠣᠣ (boo,
 *     casa), ᠴᠠᡳ (cai, chá), ᠰᡠᠨ (sun, leite), ᠪᡝᠯᡝ (bele, arroz cru), ᡤᡠᠴᡠ (gucu, amigo), ᠪᡳᡵᠠ
 *     (bira, rio), ᠮᠣᠣ (moo, árvore), ᠨᡳᠩᡤᡠᠨ, ᠵᠠᡴᡡᠨ, ᡠᠶᡠᠨ, ᠵᡠᠸᠠᠨ (6, 8, 9, 10), ᠪᠠᠨᡳᡥᠠ (baniha,
 *     obrigado), ᡳᠨᡠ (inu, sim), ᠸᠠᡴᠠ (waka, não é), ᡤᡝᠪᡠ (gebu, nome), ᡤᡳᠰᡠᠨ (gisun, língua).
 *   - en.wikivoyage.org/wiki/Manchu_phrasebook — as frases do dia a dia, com escrita e romanização:
 *     “saiyūn?” (olá), “si saiyūn?” (como vai?), “sain, baniha.” (bem, obrigado), “sini gebu ai
 *     sembi?” (como você se chama?), “mini gebu …” (meu nome é …), “sinde ucaraha de urgunjembi.”
 *     (prazer em conhecer), “inu.” (sim), “waka.” (não), “jai acaki.” (até logo), “ulhirakū.” (não
 *     entendo), “bi manju gisun be gisureme bahanarakū.” (não sei falar manchu) e os números de 1 a 10
 *     (também a fonte do 7, ᠨᠠᡩᠠᠨ, nadan).
 *   - en.wikipedia.org/wiki/Manchu_language — as frases de exemplo da gramática, citadas tal qual:
 *     “i boo be weilembi” (ele constrói uma casa), “niyalma sain” (a pessoa é boa), “sain niyalma” (uma
 *     boa pessoa), “morin indahūn ci amba” (o cavalo é maior que o cão), “indahūn dobori tuwahiyambi”
 *     (o cão vigia à noite), “si aibide genembi” (aonde você vai?), “i inenggi jimbio” (ele vem
 *     hoje?), “alin bujan de tomombi” (vivem nas montanhas e florestas), “ere niyalma de bumbi” (dá a
 *     esta pessoa), “ere uthai wei jaka” (de quem é isto?), “si yasa de tuwaki” (veja com seus olhos),
 *     “beye i gala de jafahabi” (pegou com a própria mão), “angga de hūla, mujilen de eje” (leia com a
 *     boca, guarde na mente), “nimanggi i elden de bithe hūlahabi” (lia livros à luz da neve), “ama eme
 *     damu nimerahū seme jobombi” (minha única preocupação é que pai e mãe adoeçam).
 *
 * A escrita de cada palavra sai da romanização pela mesma tabela de manchuFromLatin
 * (src/services/reading-mongol-script.ts), que o teste confere contra as 272 palavras da lista Swadesh.
 *
 * FRASES MONTADAS (não citadas): para os substantivos sem frase atestada, “ere ___.” (este/esta ___),
 * no padrão demonstrativo + substantivo de “ere niyalma” (esta pessoa); para adjetivos, o adjetivo antes
 * do substantivo (“ice boo”, casa nova), como em “sain niyalma”; para numerais, numeral + substantivo,
 * como em “nadan niyalma” (sete pessoas), que aparece num exemplo da Wikipédia; para os verbos, a forma
 * do dicionário em -mbi, sem conjugação inventada. Nas lições, “si cai omimbio?” (você bebe chá?) junta
 * o verbo “omimbi” com a partícula de pergunta “-o”, a mesma de “jimbio” (vem?), no exemplo da Wikipédia.
 */
const ROWS: VocabRow[] = [
  // Pessoas
  ['ᠪᡳ', 'eu', 'pronome', 'Pessoas', '🙋', 'ᠪᡳ ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ ᠪᡝ ᡤᡳᠰᡠᡵᡝᠮᡝ ᠪᠠᡥᠠᠨᠠᡵᠠᡴᡡ᠉'], // bi — bi manju gisun be gisureme bahanarakū.
  ['ᠰᡳ', 'tu, você', 'pronome', 'Pessoas', '👉', 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?'], // si — si saiyūn?
  ['ᡳ', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉'], // i — i boo be weilembi.
  ['ᡝᠮᡝ', 'mãe', 'substantivo', 'Pessoas', '👩', 'ᠠᠮᠠ ᡝᠮᡝ ᡩᠠᠮᡠ ᠨᡳᠮᡝᡵᠠᡥᡡ ᠰᡝᠮᡝ ᠵᠣᠪᠣᠮᠪᡳ᠉'], // eme — ama eme damu nimerahū seme jobombi.
  ['ᠠᠮᠠ', 'pai', 'substantivo', 'Pessoas', '👨', 'ᠠᠮᠠ ᡝᠮᡝ ᡩᠠᠮᡠ ᠨᡳᠮᡝᡵᠠᡥᡡ ᠰᡝᠮᡝ ᠵᠣᠪᠣᠮᠪᡳ᠉'], // ama — ama eme damu nimerahū seme jobombi.
  ['ᡤᡠᠴᡠ', 'amigo, amiga', 'substantivo', 'Pessoas', '🤝', 'ᠰᠠᡳᠨ ᡤᡠᠴᡠ᠉'], // gucu — sain gucu.
  ['ᠨᡳᠶᠠᠯᠮᠠ', 'pessoa', 'substantivo', 'Pessoas', '🧍', 'ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉'], // niyalma — niyalma sain.
  // Natureza
  ['ᡧᡠᠨ', 'sol', 'substantivo', 'Natureza', '☀️', 'ᡝᡵᡝ ᡧᡠᠨ᠉'], // šun — ere šun.
  ['ᠮᡠᡴᡝ', 'água', 'substantivo', 'Natureza', '💧', 'ᡝᡵᡝ ᠮᡠᡴᡝ᠉'], // muke — ere muke.
  ['ᠠᠯᡳᠨ', 'montanha', 'substantivo', 'Natureza', '⛰️', 'ᠠᠯᡳᠨ ᠪᡠᠵᠠᠨ ᡩᡝ ᡨᠣᠮᠣᠮᠪᡳ᠉'], // alin — alin bujan de tomombi.
  ['ᠠᠪᡴᠠ', 'céu', 'substantivo', 'Natureza', '🌌', 'ᡝᡵᡝ ᠠᠪᡴᠠ᠉'], // abka — ere abka.
  ['ᠨᡳᠮᠠᠩᡤᡳ', 'neve', 'substantivo', 'Natureza', '❄️', 'ᠨᡳᠮᠠᠩᡤᡳ ᡳ ᡝᠯᡩᡝᠨ ᡩᡝ ᠪᡳᡨᡥᡝ ᡥᡡᠯᠠᡥᠠᠪᡳ᠉'], // nimanggi — nimanggi i elden de bithe hūlahabi.
  ['ᠪᡳᡵᠠ', 'rio', 'substantivo', 'Natureza', '🏞️', 'ᡝᡵᡝ ᠪᡳᡵᠠ᠉'], // bira — ere bira.
  ['ᠮᠣᠣ', 'árvore', 'substantivo', 'Natureza', '🌳', 'ᡝᡵᡝ ᠮᠣᠣ᠉'], // moo — ere moo.
  // Animais
  ['ᠮᠣᡵᡳᠨ', 'cavalo', 'substantivo', 'Animais', '🐴', 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉'], // morin — morin indahūn ci amba.
  ['ᡥᠣᠨᡳᠨ', 'ovelha', 'substantivo', 'Animais', '🐑', 'ᡝᡵᡝ ᡥᠣᠨᡳᠨ᠉'], // honin — ere honin.
  ['ᡳᠨᡩᠠᡥᡡᠨ', 'cão', 'substantivo', 'Animais', '🐕', 'ᡳᠨᡩᠠᡥᡡᠨ ᡩᠣᠪᠣᡵᡳ ᡨᡠᠸᠠᡥᡳᠶᠠᠮᠪᡳ᠉'], // indahūn — indahūn dobori tuwahiyambi.
  ['ᡤᠠᠰᡥᠠ', 'pássaro', 'substantivo', 'Animais', '🐦', 'ᡝᡵᡝ ᡤᠠᠰᡥᠠ᠉'], // gasha — ere gasha.
  ['ᠨᡳᠮᠠᡥᠠ', 'peixe', 'substantivo', 'Animais', '🐟', 'ᡝᡵᡝ ᠨᡳᠮᠠᡥᠠ᠉'], // nimaha — ere nimaha.
  ['ᡳᡥᠠᠨ', 'boi, vaca', 'substantivo', 'Animais', '🐄', 'ᡝᡵᡝ ᡳᡥᠠᠨ᠉'], // ihan — ere ihan.
  ['ᡨᡝᠮᡝᠨ', 'camelo', 'substantivo', 'Animais', '🐫', 'ᡝᡵᡝ ᡨᡝᠮᡝᠨ᠉'], // temen — ere temen.
  // Comida
  ['ᠶᠠᠯᡳ', 'carne', 'substantivo', 'Comida', '🍖', 'ᡝᡵᡝ ᠶᠠᠯᡳ᠉'], // yali — ere yali.
  ['ᠴᠠᡳ', 'chá', 'substantivo', 'Comida', '🍵', 'ᡝᡵᡝ ᠴᠠᡳ᠉'], // cai — ere cai.
  ['ᠰᡠᠨ', 'leite', 'substantivo', 'Comida', '🥛', 'ᡝᡵᡝ ᠰᡠᠨ᠉'], // sun — ere sun.
  ['ᠪᡝᠯᡝ', 'arroz (cru)', 'substantivo', 'Comida', '🍚', 'ᡝᡵᡝ ᠪᡝᠯᡝ᠉'], // bele — ere bele.
  // Corpo
  ['ᡠᠵᡠ', 'cabeça', 'substantivo', 'Corpo', '👤', 'ᡝᡵᡝ ᡠᠵᡠ᠉'], // uju — ere uju.
  ['ᠶᠠᠰᠠ', 'olho', 'substantivo', 'Corpo', '👁️', 'ᠰᡳ ᠶᠠᠰᠠ ᡩᡝ ᡨᡠᠸᠠᡴᡳ᠉'], // yasa — si yasa de tuwaki.
  ['ᡤᠠᠯᠠ', 'mão', 'substantivo', 'Corpo', '✋', 'ᠪᡝᠶᡝ ᡳ ᡤᠠᠯᠠ ᡩᡝ ᠵᠠᡶᠠᡥᠠᠪᡳ᠉'], // gala — beye i gala de jafahabi.
  ['ᠪᡝᡨᡥᡝ', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'ᡝᡵᡝ ᠪᡝᡨᡥᡝ᠉'], // bethe — ere bethe.
  ['ᠠᠩᡤᠠ', 'boca', 'substantivo', 'Corpo', '👄', 'ᠠᠩᡤᠠ ᡩᡝ ᡥᡡᠯᠠ᠈ ᠮᡠᠵᡳᠯᡝᠨ ᡩᡝ ᡝᠵᡝ᠉'], // angga — angga de hūla, mujilen de eje.
  // Casa
  ['ᠪᠣᠣ', 'casa', 'substantivo', 'Casa', '🏠', 'ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉'], // boo — i boo be weilembi.
  // Números
  ['ᡝᠮᡠ', 'um', 'numeral', 'Números', '1️⃣', 'ᡝᠮᡠ ᠨᡳᠶᠠᠯᠮᠠ᠉'], // emu — emu niyalma.
  ['ᠵᡠᠸᡝ', 'dois', 'numeral', 'Números', '2️⃣', 'ᠵᡠᠸᡝ ᠮᠣᡵᡳᠨ᠉'], // juwe — juwe morin.
  ['ᡳᠯᠠᠨ', 'três', 'numeral', 'Números', '3️⃣', 'ᡳᠯᠠᠨ ᡥᠣᠨᡳᠨ᠉'], // ilan — ilan honin.
  ['ᡩᡠᡳᠨ', 'quatro', 'numeral', 'Números', '4️⃣', 'ᡩᡠᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ᠉'], // duin — duin indahūn.
  ['ᠰᡠᠨᠵᠠ', 'cinco', 'numeral', 'Números', '5️⃣', 'ᠰᡠᠨᠵᠠ ᡤᠠᠰᡥᠠ᠉'], // sunja — sunja gasha.
  ['ᠨᡳᠩᡤᡠᠨ', 'seis', 'numeral', 'Números', '6️⃣', 'ᠨᡳᠩᡤᡠᠨ ᠨᡳᠮᠠᡥᠠ᠉'], // ninggun — ninggun nimaha.
  ['ᠨᠠᡩᠠᠨ', 'sete', 'numeral', 'Números', '7️⃣', 'ᠨᠠᡩᠠᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉'], // nadan — nadan niyalma.
  ['ᠵᠠᡴᡡᠨ', 'oito', 'numeral', 'Números', '8️⃣', 'ᠵᠠᡴᡡᠨ ᠮᠣᡵᡳᠨ᠉'], // jakūn — jakūn morin.
  ['ᡠᠶᡠᠨ', 'nove', 'numeral', 'Números', '9️⃣', 'ᡠᠶᡠᠨ ᡥᠣᠨᡳᠨ᠉'], // uyun — uyun honin.
  ['ᠵᡠᠸᠠᠨ', 'dez', 'numeral', 'Números', '🔟', 'ᠵᡠᠸᠠᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉'], // juwan — juwan niyalma.
  // Verbos
  ['ᠵᡝᠮᠪᡳ', 'come, comer', 'verbo', 'Verbos', '🍽️', 'ᠵᡝᠮᠪᡳ᠉'], // jembi — jembi.
  ['ᠣᠮᡳᠮᠪᡳ', 'bebe, beber', 'verbo', 'Verbos', '🥤', 'ᠣᠮᡳᠮᠪᡳ᠉'], // omimbi — omimbi.
  ['ᠰᠠᠪᡠᠮᠪᡳ', 'vê, ver', 'verbo', 'Verbos', '👀', 'ᠰᠠᠪᡠᠮᠪᡳ᠉'], // sabumbi — sabumbi.
  ['ᠰᠠᠮᠪᡳ', 'sabe, saber', 'verbo', 'Verbos', '🧠', 'ᠰᠠᠮᠪᡳ᠉'], // sambi — sambi.
  ['ᠠᠮᡤᠠᠮᠪᡳ', 'dorme, dormir', 'verbo', 'Verbos', '😴', 'ᠠᠮᡤᠠᠮᠪᡳ᠉'], // amgambi — amgambi.
  ['ᠵᡳᠮᠪᡳ', 'vem, vir', 'verbo', 'Verbos', '🚶', 'ᡳ ᡳᠨᡝᠩᡤᡳ ᠵᡳᠮᠪᡳᠣ?'], // jimbi — i inenggi jimbio?
  // Adjetivos
  ['ᠠᠮᠪᠠ', 'grande', 'adjetivo', 'Adjetivos', '📏', 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉'], // amba — morin indahūn ci amba.
  ['ᠠᠵᡳᡤᡝ', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'ᡳᠨᡩᠠᡥᡡᠨ ᠠᠵᡳᡤᡝ᠉'], // ajige — indahūn ajige.
  ['ᠰᠠᡳᠨ', 'bom', 'adjetivo', 'Adjetivos', '👍', 'ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉'], // sain — niyalma sain.
  ['ᡝᡥᡝ', 'mau, ruim', 'adjetivo', 'Adjetivos', '👎', 'ᡝᡥᡝ ᠨᡳᠶᠠᠯᠮᠠ᠉'], // ehe — ehe niyalma.
  ['ᡳᠴᡝ', 'novo', 'adjetivo', 'Adjetivos', '✨', 'ᡳᠴᡝ ᠪᠣᠣ᠉'], // ice — ice boo.
  ['ᡶᡠᠯᡤᡳᠶᠠᠨ', 'vermelho', 'adjetivo', 'Adjetivos', '🔴', 'ᡶᡠᠯᡤᡳᠶᠠᠨ ᡳᠯᡥᠠ᠉'], // fulgiyan — fulgiyan ilha.
  ['ᡧᠠᠨᠶᠠᠨ', 'branco', 'adjetivo', 'Adjetivos', '⚪', 'ᡧᠠᠨᠶᠠᠨ ᠨᡳᠮᠠᠩᡤᡳ᠉'], // šanyan — šanyan nimanggi.
  // Perguntas
  ['ᠸᡝ', 'quem', 'pronome', 'Perguntas', '❓', 'ᡝᡵᡝ ᡠᡨᡥᠠᡳ ᠸᡝᡳ ᠵᠠᡴᠠ?'], // we — ere uthai wei jaka?
  ['ᠠᡳ', 'o quê, o que', 'pronome', 'Perguntas', '❓', 'ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?'], // ai — sini gebu ai sembi?
  ['ᠠᡳᠪᡳᡩᡝ', 'onde', 'advérbio', 'Perguntas', '❓', 'ᠰᡳ ᠠᡳᠪᡳᡩᡝ ᡤᡝᠨᡝᠮᠪᡳ?'], // aibide — si aibide genembi?
  ['ᠠᡨᠠᠩᡤᡳ', 'quando', 'advérbio', 'Perguntas', '❓', 'ᠠᡨᠠᠩᡤᡳ?'], // atanggi — atanggi?
  ['ᠠᡩᠠᡵᠠᠮᡝ', 'como', 'advérbio', 'Perguntas', '❓', 'ᠠᡩᠠᡵᠠᠮᡝ?'], // adarame — adarame?
  // Expressões
  ['ᡝᡵᡝ', 'este, esta, isto', 'pronome', 'Expressões', '👇', 'ᡝᡵᡝ ᠨᡳᠶᠠᠯᠮᠠ ᡩᡝ ᠪᡠᠮᠪᡳ᠉'], // ere — ere niyalma de bumbi.
  ['ᠰᠠᡳᠶᡡᠨ', 'olá (lit. “está bem?”)', 'expressão', 'Expressões', '👋', 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ?'], // saiyūn — si saiyūn?
  ['ᠪᠠᠨᡳᡥᠠ', 'obrigado, obrigada', 'expressão', 'Expressões', '🙏', 'ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉'], // baniha — sain, baniha.
  ['ᡳᠨᡠ', 'sim; é isso', 'expressão', 'Expressões', '✅', 'ᡳᠨᡠ᠉'], // inu — inu.
  ['ᠸᠠᡴᠠ', 'não (não é)', 'expressão', 'Expressões', '❌', 'ᠸᠠᡴᠠ᠉'], // waka — waka.
];

export const VOCAB_MNC = buildVocab('mnc', ROWS);
