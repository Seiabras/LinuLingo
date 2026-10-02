import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do uigur (ئۇيغۇرچە / Uyghurche), na variante padrão escrita com o alfabeto árabe
 * uigur (Uyghur Ereb Yéziqi, UEY), oficial na Região Autônoma Uigur de Xinjiang, China. O uigur é
 * uma língua túrquica do ramo carlúquico — parente do uzbeque, não do turco da Turquia (ramo oghuz)
 * nem do árabe ou do persa, apesar do alfabeto parecido. Pacote incompleto: só o suficiente para o
 * nível A1 (unidades 1 e 2) — ver o campo `incomplete` em index.ts.
 *
 * A romanização (transliteração em letras latinas) vem escrita entre parênteses na tradução, do
 * mesmo jeito que o pinyin aparece no pacote do mandarim (zh): o app ainda não tem uma função
 * `reading` (leitura automática) para o uigur.
 *
 * Fontes consultadas (todas via Wikipédia e Wikcionário em inglês, lidas nesta sessão):
 * - en.wikipedia.org/wiki/Uyghur_language — classificação (carlúquico), SOV, aglutinação, sem
 *   gênero, harmonia vocálica, 8–13 milhões de falantes, alfabetos usados.
 * - en.wikipedia.org/wiki/Uyghur_grammar — harmonia vocálica (kün'ge × katipqa), casos (ning, ge/ga,
 *   ni, de/da, din), aglutinação (öy-ingiz-ge, ishle-wat-qan), ordem SOV (men uyghurche oquymen),
 *   pronomes, sufixos possessivos, plural -lar (não usado depois de numeral).
 * - en.wikipedia.org/wiki/Uyghur_Arabic_alphabet — vogais próprias com hemze (ئا, ئە, ئو...), 32
 *   letras, oficializado em 1978/1983.
 * - en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list — pronomes, natureza, corpo, verbos, cores,
 *   adjetivos básicos (lista de Swadesh).
 * - omniglot.com/language/numbers/uyghur.htm — numerais de 1 a 10.
 * - Páginas individuais do Wikcionário em inglês para: رەھمەت (rehmet), نان (nan), ئۆي (öy), چاي
 *   (chay), سۈت (süt), مۈشۈك (müshük), ياخشىمۇسىز (yaxshimusiz), ھەئە (he'e), ياق (yaq), دوست (dost),
 *   ئات (at).
 * - ug.wikipedia.org/wiki/ئۇيغۇر_تىلى (a Wikipédia EM uigur) — confirma a própria grafia do nome da
 *   língua, ئۇيغۇرچە (Uyghurche) e ئۇيغۇر تىلى (Uyghur tili).
 *
 * O uigur não tem gênero gramatical (confirmado na Wikipédia: "Grammatical gender: Absent") —
 * nenhuma linha leva gênero.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ياخشىمۇسىز', 'olá, tudo bem? (yaxshimusiz — cumprimento formal; a própria palavra é “yaxshi” (bom) + “-mu” (pergunta) + “-siz” (você, formal), segundo o Wikcionário)', 'interjeição', 'Expressões', '👋', 'ياخشىمۇسىز!'],
  ['رەھمەت', 'obrigado (rehmet)', 'interjeição', 'Expressões', '🙏', 'رەھمەت!'],
  ["ھەئە", "sim (he'e)", 'interjeição', 'Expressões', '👍', 'ھەئە، بۇ كىتاب.'],
  ['ياق', 'não (yaq)', 'interjeição', 'Expressões', '👎', 'ياق، بۇ كىتاب ئەمەس.'],
  // ── Essenciais ──
  ['بۇ', 'isto, este, esta (bu)', 'pronome', 'Essenciais', '👉', 'بۇ ئۆي.'],
  ['ئۇ', 'ele, ela; aquele, aquela (u — a mesma palavra serve de pronome de 3ª pessoa e de demonstrativo: o uigur não distingue “ele” de “ela”)', 'pronome', 'Essenciais', '👤', 'ئۇ ياخشى.'],
  ['ئەمەس', 'não é, não está (emes — nega o verbo “ser”/“estar” e vem sempre depois da palavra negada, nunca antes)', 'advérbio', 'Essenciais', '🚫', 'ئۇ ياخشى ئەمەس.'],
  // ── Pessoas ──
  ['مەن', 'eu (men)', 'pronome', 'Pessoas', '🙋', 'مەن ياخشى.'],
  ['سەن', 'tu, você — informal (sen)', 'pronome', 'Pessoas', '🫵', 'سەن ياخشى.'],
  ['سىز', 'você, o senhor, a senhora — formal (siz)', 'pronome', 'Pessoas', '🙇', 'سىز ياخشى.'],
  ['بىز', 'nós (biz)', 'pronome', 'Pessoas', '🙌', 'بىز ياخشى.'],
  ['ئۇلار', 'eles, elas (ular)', 'pronome', 'Pessoas', '👥', 'ئۇلار ياخشى ئەمەس.'],
  ['بالا', 'criança (bala)', 'substantivo', 'Pessoas', '🧒', 'بالا كىچىك.'],
  ['دادا', 'pai (dada)', 'substantivo', 'Pessoas', '👨', 'دادا ياخشى.'],
  ['ئانا', 'mãe (ana)', 'substantivo', 'Pessoas', '🤱', 'ئانا ياخشى.'],
  ['دوست', 'amigo, amiga (dost)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'دوست ياخشى.'],
  // ── Natureza ──
  ['كۈن', 'sol; dia (kün — a mesma palavra serve para os dois sentidos)', 'substantivo', 'Natureza', '☀️', 'بۇ كۈن.'],
  ['ئاي', 'lua (ay)', 'substantivo', 'Natureza', '🌙', 'بۇ ئاي.'],
  ['يۇلتۇز', 'estrela (yultuz)', 'substantivo', 'Natureza', '⭐', 'بەش يۇلتۇز.'],
  ['يامغۇر', 'chuva (yamghur)', 'substantivo', 'Natureza', '🌧️', 'يامغۇر ياخشى ئەمەس.'],
  ['قار', 'neve (qar)', 'substantivo', 'Natureza', '❄️', 'قار ئاق.'],
  // ── Animais ──
  ['ئىت', 'cachorro (it)', 'substantivo', 'Animais', '🐕', 'بۇ ئىت.'],
  ['قۇش', 'pássaro (qush)', 'substantivo', 'Animais', '🐦', 'يەتتە قۇش.'],
  ['بېلىق', 'peixe (bëliq)', 'substantivo', 'Animais', '🐟', 'بۇ بېلىق.'],
  ['مۈشۈك', 'gato (müshük)', 'substantivo', 'Animais', '🐈', 'مۈشۈك قارا.'],
  ['ئات', 'cavalo (at — atenção: a mesma grafia também quer dizer “nome” e é uma forma do verbo “atmaq”, atirar, segundo o Wikcionário; neste pacote só no sentido de cavalo, para não confundir)', 'substantivo', 'Animais', '🐎', 'بۇ ئات.'],
  // ── Alimentação ──
  ['نان', 'pão, naan (nan)', 'substantivo', 'Alimentação', '🍞', 'نان ياخشى.'],
  ['چاي', 'chá (chay)', 'substantivo', 'Alimentação', '☕', 'چاي ياخشىمۇ؟'],
  ['سۈت', 'leite (süt)', 'substantivo', 'Alimentação', '🥛', 'بۇ سۈت.'],
  ['سۇ', 'água (su)', 'substantivo', 'Alimentação', '💧', 'سۇ سوغۇق.'],
  // ── Corpo ──
  ['كۆز', 'olho (köz)', 'substantivo', 'Corpo', '👁️', 'ئىككى كۆز.'],
  ['قۇلاق', 'orelha (qulaq)', 'substantivo', 'Corpo', '👂', 'بۇ قۇلاق.'],
  ['بۇرۇن', 'nariz (burun)', 'substantivo', 'Corpo', '👃', 'بۇ بۇرۇن.'],
  ['ئاغىز', 'boca (aghiz)', 'substantivo', 'Corpo', '👄', 'بۇ ئاغىز.'],
  ['قول', 'mão (qol)', 'substantivo', 'Corpo', '✋', 'بىر قول.'],
  ['ئاياق', 'pé (ayaq)', 'substantivo', 'Corpo', '🦶', 'تۆت ئاياق.'],
  ['باش', 'cabeça (bash)', 'substantivo', 'Corpo', '🤕', 'بۇ باش.'],
  // ── Casa ──
  ['ئۆي', 'casa (öy)', 'substantivo', 'Casa', '🏠', 'ئۆي چوڭ.'],
  ['كىتاب', 'livro (kitab)', 'substantivo', 'Casa', '📖', 'ئۈچ كىتاب.'],
  // ── Números ──
  ['بىر', 'um (bir)', 'numeral', 'Números', '1️⃣', 'بىر قول.'],
  ['ئىككى', 'dois (ikki)', 'numeral', 'Números', '2️⃣', 'ئىككى كۆز.'],
  ['ئۈچ', 'três (üch)', 'numeral', 'Números', '3️⃣', 'ئۈچ كىتاب.'],
  ['تۆت', 'quatro (töt)', 'numeral', 'Números', '4️⃣', 'تۆت ئاياق.'],
  ['بەش', 'cinco (bäsh)', 'numeral', 'Números', '5️⃣', 'بەش يۇلتۇز.'],
  ['ئالتە', 'seis (altä)', 'numeral', 'Números', '6️⃣', 'ئالتە كۈن.'],
  ['يەتتە', 'sete (yättä)', 'numeral', 'Números', '7️⃣', 'يەتتە قۇش.'],
  ['سەككىز', 'oito (säkkiz)', 'numeral', 'Números', '8️⃣', 'سەككىز بالا.'],
  ['توققۇز', 'nove (toqquz)', 'numeral', 'Números', '9️⃣', 'توققۇز ئىت.'],
  ['ئون', 'dez (on)', 'numeral', 'Números', '🔟', 'ئون ئۆي.'],
  // ── Verbos-chave ──
  ['يېمەك', 'comer (yëmek)', 'verbo', 'Verbos-chave', '🍽️', 'يېمەك ياخشى.'],
  ['ئىچمەك', 'beber (ichmek)', 'verbo', 'Verbos-chave', '🥤', 'ئىچمەك ياخشى.'],
  ['كۆرمەك', 'ver (körmek)', 'verbo', 'Verbos-chave', '👀', 'كۆرمەك ياخشى.'],
  ['ئاڭلىماق', 'ouvir (anglimaq)', 'verbo', 'Verbos-chave', '👂', 'ئاڭلىماق ياخشى.'],
  ['بىلمەك', 'saber (bilmek)', 'verbo', 'Verbos-chave', '🧠', 'بىلمەك ياخشى.'],
  ['ئۇخلىماق', 'dormir (uxlimaq)', 'verbo', 'Verbos-chave', '😴', 'ئۇخلىماق ياخشى.'],
  ['كەلمەك', 'vir (kelmek)', 'verbo', 'Verbos-chave', '🚶', 'بىز بېيجىڭغا كەلدۇق.'],
  ['دېمەك', 'dizer (dëmek)', 'verbo', 'Verbos-chave', '💬', 'دېمەك ياخشى.'],
  ['ئوقۇيمەن', 'eu leio, eu estudo (oquymen — forma já conjugada “oqu-y-men”, ler/estudar-presente-eu, citada assim pela fonte; o infinitivo de dicionário não foi confirmado nas fontes consultadas)', 'verbo', 'Verbos-chave', '📚', 'مەن ئوقۇيمەن.'],
  // ── Cores/Descrições ──
  ['ئاق', 'branco (aq)', 'adjetivo', 'Cores', '⚪', 'قار ئاق.'],
  ['قارا', 'preto (qara)', 'adjetivo', 'Cores', '⚫', 'مۈشۈك قارا.'],
  ['قىزىل', 'vermelho (qizil)', 'adjetivo', 'Cores', '🔴', 'بۇ قىزىل.'],
  ['سېرىق', 'amarelo (sëriq)', 'adjetivo', 'Cores', '🟡', 'بۇ سېرىق.'],
  ['يېشىل', 'verde (yëshil)', 'adjetivo', 'Cores', '🟢', 'بۇ يېشىل.'],
  ['چوڭ', 'grande (chong)', 'adjetivo', 'Cores', '📏', 'ئۆي چوڭ.'],
  ['كىچىك', 'pequeno (kichik)', 'adjetivo', 'Cores', '🔎', 'بالا كىچىك.'],
  ['ياخشى', 'bom, boa (yaxshi)', 'adjetivo', 'Cores', '👍', 'بۇ ياخشى.'],
  ['سوغۇق', 'frio (soghuq)', 'adjetivo', 'Cores', '🥶', 'سۇ سوغۇق.'],
];

export const VOCAB_UG = buildVocab('ug', ROWS);
