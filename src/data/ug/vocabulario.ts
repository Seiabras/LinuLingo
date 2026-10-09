import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do uigur (ئۇيغۇرچە / Uyghurche), na variante padrão escrita com o alfabeto árabe
 * uigur (Uyghur Ereb Yéziqi, UEY), oficial na Região Autônoma Uigur de Xinjiang, China. O uigur é
 * uma língua túrquica do ramo carlúquico — parente do uzbeque, não do turco da Turquia (ramo oghuz)
 * nem do árabe ou do persa, apesar do alfabeto parecido. Pacote incompleto: cobre A1.1, A1.2, A2.1 e
 * A2.2 — ver o campo `incomplete` em index.ts.
 *
 * A romanização (transliteração em letras latinas) vem escrita entre parênteses na tradução, do
 * mesmo jeito que o pinyin aparece no pacote do mandarim (zh): o app ainda não tem uma função
 * `reading` (leitura automática) para o uigur.
 *
 * Fontes consultadas para o A1 (sessão anterior, todas via Wikipédia e Wikcionário em inglês):
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
 * Fontes consultadas para o A2 (nesta sessão, 09/10/2026), em cima do que a A1 já tinha confirmado:
 * - en.wikipedia.org/wiki/Uyghur_grammar — seções "Cases" (acusativo -ni, dativo -GA, locativo -DA,
 *   ablativo -Din, com as formas exatas "at-ni", "kitabqa", "bizge", "mektep-te", "sheher-din"),
 *   "Possessive Suffixes" (as formas exatas "suyum", "suyingiz", "susi", "ئاكام"/aka-m), "Nouns"
 *   (plural -lAr com harmonia vocálica, "atlar"), "Simple past tense" (yaz-di), "Present imperfect
 *   tense" (chiq-idu).
 * - en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list — palavras de tempo, clima, família,
 *   adjetivos (uzun, qisqa, yiraq, yëqin, yëngi, kona, ayal, er) e pronomes interrogativos (kim,
 *   nëme, qeyerde, qachan, qandaq).
 * - en.wikivoyage.org/wiki/Uyghur_phrasebook — guia de frases em uigur: expressões de tempo (hazir,
 *   bügün, ete, tünügün, etigen, chüsh, hepte), cores (kök, külreng, binepshe, qehwe reng, apëlsin
 *   reng) e a frase "Qandaq ehwalingiz?" (como está?).
 * - omniglot.com/language/numbers/uyghur.htm — numerais 11–1.000.000.000 (yigirme=20, yüz=100,
 *   ming=1.000).
 * - Páginas individuais do Wikcionário em inglês para confirmar grafia e sentido de: ئاكا (aka,
 *   irmão mais velho/forma de tratamento), يازماق (yazmaq, escrever), كۆك (kök, azul/verde/sem
 *   maturar — usado aqui só no sentido de "azul"), يۈز (yüz, numeral "cem" — etimologia separada do
 *   substantivo "rosto", que não é usado neste pacote), ئىشلىمەك (ishlimek, trabalhar), كەتمەك
 *   (ketmek, ir/sair/partir).
 * - en.wikipedia.org/wiki/Xinjiang — confirma que Xinjiang é a maior divisão administrativa da
 *   China em área (mais de 1,6 milhão de km²), citado no cartão cultural da unidade 4.
 *
 * Frases de exemplo do A2: seguindo o mesmo método já usado no A1 (documentado em index.ts), quase
 * todas combinam palavras já atestadas com os padrões de frase sem verbo "ser" já confirmados
 * (“X yaxshi”, “X yaxshimu?”, “bu X”) — nenhuma conjugação verbal nova foi inventada. As únicas
 * formas flexionadas usadas (ئاتنى/atni, كىتابقا/kitab-qa, بىزگە/biz-ge, سۇيۇم/suyum, سۇيىنگىز/
 * suyingiz, سۇسى/susi, ئاكام/akam, ئاتلار/atlar, مۈشۈكلەر/müshükler) ou são citações diretas da
 * Wikipédia (os sete primeiros exemplos) ou aplicam a regra de harmonia vocálica do plural -lar/-ler
 * — já confirmada pela mesma fonte — a palavras cujo singular já está atestado (atlar, müshükler);
 * nenhuma delas foi inventada a partir do turco ou do uzbeque.
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

  // ════════ A2.1 e A2.2 (sessão de 09/10/2026) ════════
  // ── Tempo ── (en.wikivoyage.org/wiki/Uyghur_phrasebook)
  ['ھازىر', 'agora (hazir)', 'advérbio', 'Tempo', '⏰', 'ھازىر ياخشى.'],
  ['بۈگۈن', 'hoje (bügün)', 'substantivo', 'Tempo', '📅', 'بۈگۈن ياخشى.'],
  ['ئەتە', 'amanhã (ete)', 'substantivo', 'Tempo', '➡️', 'ئەتە ياخشىمۇ؟'],
  ['تۈنۈگۈن', 'ontem (tünügün)', 'substantivo', 'Tempo', '⬅️', 'تۈنۈگۈن ياخشى ئەمەس.'],
  ['ئەتىگەن', 'de manhã, manhã (etigen)', 'substantivo', 'Tempo', '🌅', 'ئەتىگەن ياخشى.'],
  ['چۈش', 'meio-dia (chüsh)', 'substantivo', 'Tempo', '🕛', 'چۈش ياخشى.'],
  ['ھەپتە', 'semana (hepte)', 'substantivo', 'Tempo', '🗓️', 'بىر ھەپتە.'],
  // ── Pronomes interrogativos ── (en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list)
  ['كىم', 'quem (kim)', 'pronome', 'Pronomes interrogativos', '❓', 'بۇ كىم؟'],
  ['نېمە', 'o que, o quê (nëme)', 'pronome', 'Pronomes interrogativos', '❔', 'بۇ نېمە؟'],
  ['قەيەردە', 'onde (qeyerde)', 'advérbio', 'Pronomes interrogativos', '📍', 'ئۆي قەيەردە؟'],
  ['قاچان', 'quando (qachan)', 'advérbio', 'Pronomes interrogativos', '🕒', 'قاچان؟'],
  ['قانداق', 'como (qandaq)', 'advérbio', 'Pronomes interrogativos', '🤔', 'قانداق؟'],
  // ── Pessoas (A2) ── (en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list; en.wiktionary.org/wiki/ئاكا)
  ['ئايال', 'mulher (ayal)', 'substantivo', 'Pessoas', '👩', 'بۇ ئايال.'],
  ['ئەر', 'homem (er)', 'substantivo', 'Pessoas', '👨‍🦱', 'بۇ ئەر.'],
  [
    'ئاكا',
    'irmão mais velho; também forma de tratamento para um homem mais velho (aka)',
    'substantivo',
    'Pessoas',
    '🧔',
    'بۇ ئاكام.',
  ],
  // ── Cores (A2) ── (en.wikivoyage.org/wiki/Uyghur_phrasebook; en.wiktionary.org/wiki/كۆك)
  [
    'كۆك',
    'azul (kök — o Wikcionário registra que a mesma palavra também quer dizer “verde” e “sem maturar”; neste pacote só no sentido de azul, que é o dado pelo guia de frases Wikivoyage)',
    'adjetivo',
    'Cores',
    '🔵',
    'بۇ كۆك.',
  ],
  ['كۈلرەڭ', 'cinza (külreng)', 'adjetivo', 'Cores', '🩶', 'بۇ كۈلرەڭ.'],
  ['بىنەپشە', 'roxo, violeta (binepshe)', 'adjetivo', 'Cores', '🟣', 'بۇ بىنەپشە.'],
  ['قەھۋە رەڭ', 'marrom (qehwe reng, lit. “cor de café”)', 'adjetivo', 'Cores', '🟤', 'بۇ قەھۋە رەڭ.'],
  ['ئاپېلسىن رەڭ', 'laranja, cor de laranja (apëlsin reng, lit. “cor de laranja”)', 'adjetivo', 'Cores', '🟠', 'بۇ ئاپېلسىن رەڭ.'],
  // ── Qualidades (A2) ── (en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list)
  ['ئۇزۇن', 'longo (uzun)', 'adjetivo', 'Qualidades', '📏', 'بۇ ئۇزۇن.'],
  ['قىسقا', 'curto (qisqa)', 'adjetivo', 'Qualidades', '✂️', 'بۇ قىسقا.'],
  ['يىراق', 'longe, distante (yiraq)', 'adjetivo', 'Qualidades', '🏔️', 'ئۆي يىراق.'],
  ['يېقىن', 'perto, próximo (yëqin)', 'adjetivo', 'Qualidades', '🤏', 'ئۆي يېقىن.'],
  ['يېڭى', 'novo (yëngi)', 'adjetivo', 'Qualidades', '✨', 'بۇ كىتاب يېڭى.'],
  ['كونا', 'velho, antigo — para coisas, não para pessoas (kona)', 'adjetivo', 'Qualidades', '📜', 'بۇ كىتاب كونا.'],
  // ── Verbos-chave (A2) ── (en.wiktionary.org/wiki/Appendix:Uyghur_Swadesh_list; Wikcionário individual)
  ['بەرمەك', 'dar (bermek)', 'verbo', 'Verbos-chave', '🎁', 'بەرمەك ياخشى.'],
  ['ئولتۇرماق', 'sentar, sentar-se (olturmaq)', 'verbo', 'Verbos-chave', '🪑', 'ئولتۇرماق ياخشى.'],
  ['ئوينىماق', 'brincar, jogar (oynimaq)', 'verbo', 'Verbos-chave', '🎲', 'ئوينىماق ياخشى.'],
  ['يازماق', 'escrever (yazmaq)', 'verbo', 'Verbos-chave', '✍️', 'يازماق ياخشى.'],
  ['ئىشلىمەك', 'trabalhar (ishlimek)', 'verbo', 'Verbos-chave', '💼', 'ئىشلىمەك ياخشى.'],
  ['كەتمەك', 'ir, sair, partir (ketmek)', 'verbo', 'Verbos-chave', '🚪', 'كەتمەك ياخشى ئەمەس.'],
  // ── Números (A2) ── (omniglot.com/language/numbers/uyghur.htm)
  ['يىگىرمە', 'vinte (yigirme)', 'numeral', 'Números', '2️⃣0️⃣', 'يىگىرمە كىتاب.'],
  [
    'يۈز',
    'cem (yüz — o Wikcionário registra uma etimologia separada para o substantivo “yüz”, rosto, que não é usado neste pacote)',
    'numeral',
    'Números',
    '💯',
    'يۈز ئۆي.',
  ],
  ['مىڭ', 'mil (ming)', 'numeral', 'Números', '🔢', 'مىڭ يۇلتۇز.'],
];

export const VOCAB_UG = buildVocab('ug', ROWS);
