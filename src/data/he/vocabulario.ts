import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do hebraico moderno (ivrit), no hebraico falado em Israel hoje, escrito sem niqqud
 * (como no dia a dia: jornais, placas, WhatsApp — ver `gramatica.ts`, tópico do abjad). A tradução
 * traz a transliteração entre parênteses, do jeito que soa (sem marcar tom nem comprimento vocálico),
 * do mesmo jeito que o pacote do mandarim traz o pinyin: o pacote ainda não lê o hebraico em voz
 * romanizada sozinho (ver `incomplete.note` em index.ts). Convenção de transliteração deste pacote:
 * “kh” é sempre o som gutural de ח (nunca o “ch” do português, que soa “tch”); “k” é כ/ק; “sh” é ש.
 *
 * Idioma incompleto: só o nível A1 por enquanto (unidades 1 e 2) — ver `incomplete` em index.ts.
 *
 * Fontes (todas checadas em 02/10/2026):
 * - Wiktionary, “Appendix:Hebrew Swadesh list” (en.wiktionary.org/wiki/Appendix:Hebrew_Swadesh_list)
 *   — pronomes, números 1–5, família, corpo, natureza, cores, adjetivos, vários verbos.
 * - Wikivoyage, “Hebrew phrasebook” (en.wikivoyage.org/wiki/Hebrew_phrasebook) — saudações, números
 *   1–10, cores, família, “rotze” (querer), “medaber” (falar), “gar” (morar).
 * - Wiktionary (en.wiktionary.org), páginas individuais: בית, חתול, לחם, חלב, גבינה, קפה, אהב, למד,
 *   משפחה, חברה, אמא, אבא, שלום, אמן, הללויה, שבת, יובל, כרוב.
 * Gênero gramatical de cada substantivo vem dessas mesmas páginas (quando a página listava) ou é
 * fato básico e não controverso da língua (ex.: שמש é feminino, שם é masculino).
 *
 * Leva A2.1/A2.2 (clima, roupas, corpo, cidade, profissões, sentimentos, mais verbos, números
 * 20-100): cada palavra nova conferida também no Wiktionary em inglês (en.wiktionary.org),
 * verbete por verbete; os números das dezenas (עשרים…מאה), no artigo “Hebrew numerals” da
 * Wikipédia em inglês (en.wikipedia.org/wiki/Hebrew_numerals), que explica que as dezenas de 30 a
 * 90 são o plural (סי-ים) da raiz da unidade, exceto עשרים (20, plural de עשר, dez) e מאה (100,
 * uma palavra própria).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['שלום', 'oi; tchau; paz (shalom)', 'interjeição', 'Expressões', '👋', 'Shalom! Ani Dan.'],
  ['בוקר טוב', 'bom dia (boker tov)', 'interjeição', 'Expressões', '🌅', 'Boker tov, ima!'],
  ['ערב טוב', 'boa tarde, boa noite ao chegar (erev tov)', 'interjeição', 'Expressões', '🌇', 'Erev tov, aba!'],
  ['לילה טוב', 'boa noite ao se despedir (laila tov)', 'interjeição', 'Expressões', '🌙', 'Laila tov, akhot!'],
  ['תודה', 'obrigado (toda)', 'interjeição', 'Expressões', '🙏', 'Toda, aba.'],
  ['בבקשה', 'por favor; de nada (bevakasha)', 'interjeição', 'Expressões', '🙏', 'Kafe, bevakasha.'],
  ['סליחה', 'desculpe; com licença (slikha)', 'interjeição', 'Expressões', '🙏', 'Slikha, eifo ha-bayit?'],
  ['אמן', 'amém (amen)', 'interjeição', 'Expressões', '🙏', 'Amen!'],
  ['הללויה', 'aleluia (haleluyah)', 'interjeição', 'Expressões', '🙌', 'Haleluyah!'],
  // ── Essenciais ──
  ['כן', 'sim (ken)', 'advérbio', 'Essenciais', '👍', 'Ken, toda.'],
  ['לא', 'não (lo)', 'advérbio', 'Essenciais', '👎', 'Lo, toda.'],
  ['מה', 'o quê (ma)', 'pronome', 'Essenciais', '❓', 'Ma ze?'],
  ['מי', 'quem (mi)', 'pronome', 'Essenciais', '❓', 'Mi hu?'],
  ['איפה', 'onde (eifo)', 'advérbio', 'Essenciais', '❓', 'Eifo ha-bayit?'],
  ['שבת', 'sábado; o dia de descanso judaico (shabat)', 'substantivo', 'Essenciais', '🕯️', 'Shabat shalom!', 'f'],
  ['יובל', 'jubileu; chifre de carneiro usado como trombeta (yovel)', 'substantivo', 'Essenciais', '🐏', 'Yovel gadol.', 'm'],
  ['כרוב', 'querubim, ser alado da tradição bíblica (keruv)', 'substantivo', 'Essenciais', '👼', 'Ze keruv.', 'm'],
  // ── Pessoas ──
  ['אני', 'eu (ani)', 'pronome', 'Pessoas', '🙋', 'Ani Dan.'],
  ['אתה', 'tu, você (masc.) (ata)', 'pronome', 'Pessoas', '🫵', 'Ata Dan?'],
  ['את', 'tu, você (fem.) (at)', 'pronome', 'Pessoas', '🫵', 'At Noa?'],
  ['הוא', 'ele (hu)', 'pronome', 'Pessoas', '👨', 'Hu Dan.'],
  ['היא', 'ela (hi)', 'pronome', 'Pessoas', '👩', 'Hi Noa.'],
  ['שם', 'nome (shem)', 'substantivo', 'Pessoas', '🏷️', 'Ma ha-shem?', 'm'],
  ['משפחה', 'família (mishpakha)', 'substantivo', 'Pessoas', '👪', 'Zot ha-mishpakha.', 'f'],
  ['אמא', 'mãe, mamãe (ima)', 'substantivo', 'Pessoas', '👩', 'Shalom, ima!', 'f'],
  ['אבא', 'pai, papai (aba)', 'substantivo', 'Pessoas', '👨', 'Shalom, aba!', 'm'],
  ['אח', 'irmão (akh)', 'substantivo', 'Pessoas', '🧑', 'Hu ha-akh.', 'm'],
  ['אחות', 'irmã (akhot)', 'substantivo', 'Pessoas', '🧑', 'Hi ha-akhot.', 'f'],
  // ── Natureza ──
  ['שמש', 'sol (shemesh)', 'substantivo', 'Natureza', '☀️', 'Zot ha-shemesh.', 'f'],
  ['ירח', 'lua (yareakh)', 'substantivo', 'Natureza', '🌙', 'Ze ha-yareakh.', 'm'],
  ['כוכב', 'estrela (kokhav)', 'substantivo', 'Natureza', '⭐', 'Ze kokhav gadol.', 'm'],
  // ── Animais ──
  ['כלב', 'cachorro (kelev)', 'substantivo', 'Animais', '🐕', 'Ha-kelev gadol.', 'm'],
  ['חתול', 'gato (khatul)', 'substantivo', 'Animais', '🐈', 'Ha-khatul katan.', 'm'],
  ['ציפור', 'pássaro (tsipor)', 'substantivo', 'Animais', '🐦', 'Zot tsipor.', 'f'],
  ['דג', 'peixe (dag)', 'substantivo', 'Animais', '🐟', 'Ha-dag gadol.', 'm'],
  // ── Alimentação e Restaurantes ──
  ['לחם', 'pão (lekhem)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Hu ohev lekhem.', 'm'],
  ['חלב', 'leite (khalav)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Ha-khalav lavan.', 'm'],
  ['גבינה', 'queijo (gvina)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Hu ohev gvina.', 'f'],
  ['קפה', 'café (kafe)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Hu rotze kafe.', 'm'],
  ['מים', 'água (mayim)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Hu shata mayim.', 'm'],
  // ── Corpo ──
  ['עין', 'olho (ayin)', 'substantivo', 'Corpo', '👁️', 'Zot ayin.', 'f'],
  ['אוזן', 'orelha (ozen)', 'substantivo', 'Corpo', '👂', 'Zot ozen.', 'f'],
  ['פה', 'boca (peh)', 'substantivo', 'Corpo', '👄', 'Ze peh.', 'm'],
  ['יד', 'mão (yad)', 'substantivo', 'Corpo', '✋', 'Zot yad.', 'f'],
  // ── Casa ──
  ['בית', 'casa (bayit)', 'substantivo', 'Casa', '🏠', 'Ze bayit gadol.', 'm'],
  // ── Números ──
  ['אחת', 'um (achat; forma usada para contar)', 'numeral', 'Números', '1️⃣', 'Achat, shtayim...'],
  ['שתיים', 'dois (shtayim)', 'numeral', 'Números', '2️⃣', 'Shtayim, shalosh...'],
  ['שלוש', 'três (shalosh)', 'numeral', 'Números', '3️⃣', 'Shalosh, arba...'],
  ['ארבע', 'quatro (arba)', 'numeral', 'Números', '4️⃣', 'Arba, khamesh...'],
  ['חמש', 'cinco (khamesh)', 'numeral', 'Números', '5️⃣', 'Khamesh, shesh...'],
  ['שש', 'seis (shesh)', 'numeral', 'Números', '6️⃣', 'Khamesh, shesh.'],
  // ── Verbos-chave ──
  ['אהב', 'amar, gostar de (ahav; presente: אוהב ohev)', 'verbo', 'Verbos-chave', '❤️', 'Hu ohev lekhem.'],
  ['רוצה', 'querer (rotze, presente)', 'verbo', 'Verbos-chave', '💭', 'Hu rotze kafe.'],
  ['מדבר', 'falar (medaber, presente)', 'verbo', 'Verbos-chave', '🗣️', 'Hu medaber.'],
  ['גר', 'morar (gar, presente)', 'verbo', 'Verbos-chave', '🏠', 'Hu gar be-bayit gadol.'],
  ['למד', 'aprender, estudar (lamad)', 'verbo', 'Verbos-chave', '📚', 'Hu lamad.'],
  ['הלך', 'ir, andar (halakh)', 'verbo', 'Verbos-chave', '🚶', 'Hu halakh.'],
  ['שתה', 'beber (shata)', 'verbo', 'Verbos-chave', '🥤', 'Hu shata mayim.'],
  // ── Cores ──
  ['אדום', 'vermelho (adom)', 'adjetivo', 'Cores', '🔴', 'Ha-dag adom.'],
  ['כחול', 'azul (kakhol)', 'adjetivo', 'Cores', '🔵', 'Ha-bayit kakhol.'],
  ['ירוק', 'verde (yarok)', 'adjetivo', 'Cores', '🟢', 'Ha-kelev yarok.'],
  ['צהוב', 'amarelo (tsahov)', 'adjetivo', 'Cores', '🟡', 'Ha-bayit tsahov.'],
  ['לבן', 'branco (lavan)', 'adjetivo', 'Cores', '⚪', 'Ha-khalav lavan.'],
  ['שחור', 'preto (shakhor)', 'adjetivo', 'Cores', '⚫', 'Ha-khatul shakhor.'],
  // ── Descrições ──
  ['גדול', 'grande (gadol)', 'adjetivo', 'Descrições', '📏', 'Ha-bayit gadol.'],
  ['קטן', 'pequeno (katan)', 'adjetivo', 'Descrições', '📏', 'Ha-kafe katan.'],
  ['טוב', 'bom (tov)', 'adjetivo', 'Descrições', '👍', 'Ha-kafe tov.'],
  ['רע', 'ruim, mau (ra)', 'adjetivo', 'Descrições', '👎', 'Ha-lekhem ra.'],
  // ── Clima ──
  ['מזג אוויר', 'tempo, clima (mezeg avir)', 'substantivo', 'Clima', '🌡️', 'Ha-mezeg avir kham.', 'm'],
  ['חם', 'quente, calor (kham)', 'adjetivo', 'Clima', '🥵', 'Ha-kafe kham.'],
  ['קר', 'frio (kar)', 'adjetivo', 'Clima', '🥶', 'Ha-mayim karim.'],
  ['גשם', 'chuva (geshem)', 'substantivo', 'Clima', '🌧️', 'Yered geshem.', 'm'],
  ['שלג', 'neve (sheleg)', 'substantivo', 'Clima', '❄️', 'Ha-sheleg lavan.', 'm'],
  ['רוח', 'vento (ruach — também “espírito”)', 'substantivo', 'Clima', '💨', 'Ha-ruach gdola.', 'f'],
  // ── Roupas ──
  ['בגדים', 'roupas (begadim, plural de beged)', 'substantivo', 'Roupas', '👕', 'Ha-begadim sheli khadashim.', 'm'],
  ['חולצה', 'camisa (khultsa)', 'substantivo', 'Roupas', '👔', 'Ha-khultsa khadasha.', 'f'],
  ['נעליים', 'sapatos (na’alayim, forma dual de na’al)', 'substantivo', 'Roupas', '👞', 'Ha-na’alayim gdolot.', 'f'],
  ['כובע', 'chapéu (kova)', 'substantivo', 'Roupas', '🧢', 'Ha-kova shakhor.', 'm'],
  // ── Corpo (mais palavras) ──
  ['אף', 'nariz (af)', 'substantivo', 'Corpo', '👃', 'Ha-af shelo katan.', 'm'],
  // ── Cidade e lugares ──
  ['עיר', 'cidade (ir)', 'substantivo', 'Cidade e lugares', '🏙️', 'Ha-ir gdola.', 'f'],
  ['רחוב', 'rua (rechov)', 'substantivo', 'Cidade e lugares', '🛣️', 'Ha-rechov gadol.', 'm'],
  ['בית ספר', 'escola (beit sefer, lit. “casa de livro”)', 'substantivo', 'Cidade e lugares', '🏫', 'Ha-beit sefer gadol.', 'm'],
  ['בית חולים', 'hospital (beit cholim, lit. “casa de doentes”)', 'substantivo', 'Cidade e lugares', '🏥', 'Ha-beit cholim gadol.', 'm'],
  ['מסעדה', 'restaurante (mis’ada)', 'substantivo', 'Cidade e lugares', '🍽️', 'Ha-mis’ada tova.', 'f'],
  // ── Profissões ──
  ['רופא', 'médico (rofe; fem. רופאה, rofa)', 'substantivo', 'Profissões', '🩺', 'Hu rofe.', 'm'],
  ['מורה', 'professor (more; fem. מורה, pronunciado “mora”)', 'substantivo', 'Profissões', '🍎', 'Hu more.', 'm'],
  ['מהנדס', 'engenheiro (mehandes; fem. מהנדסת)', 'substantivo', 'Profissões', '👷', 'Hu mehandes.', 'm'],
  ['תלמיד', 'estudante, aluno (talmid; fem. תלמידה)', 'substantivo', 'Profissões', '🎓', 'Hu talmid.', 'm'],
  // ── Sentimentos ──
  ['שמח', 'feliz (sameach; fem. שמחה)', 'adjetivo', 'Sentimentos', '😄', 'Ani sameach.'],
  ['עצוב', 'triste (atsuv; fem. עצובה)', 'adjetivo', 'Sentimentos', '😢', 'Hi atsuva.'],
  ['כועס', 'com raiva (koes; fem. כועסת)', 'adjetivo', 'Sentimentos', '😠', 'Hu koes.'],
  ['מפחד', 'com medo (mefached; fem. מפחדת)', 'adjetivo', 'Sentimentos', '😨', 'Hi mefachedet.'],
  ['עייף', 'cansado (ayef; fem. עייפה)', 'adjetivo', 'Sentimentos', '😪', 'Ani ayef.'],
  // ── Mais verbos-chave ──
  ['כתב', 'escrever (katav; presente: כותב, kotev)', 'verbo', 'Verbos-chave', '✍️', 'Hu kotev mikhtav.'],
  ['קרא', 'ler (kara; presente: קורא, kore)', 'verbo', 'Verbos-chave', '📖', 'Hu kore sefer.'],
  ['ראה', 'ver (ra’ah; presente: רואה, roe)', 'verbo', 'Verbos-chave', '👀', 'Hu roe otakh.'],
  ['קנה', 'comprar (kana; presente: קונה, kone)', 'verbo', 'Verbos-chave', '🛍️', 'Hu kone lekhem.'],
  ['נתן', 'dar (natan; presente: נותן, noten)', 'verbo', 'Verbos-chave', '🤲', 'Hu noten mayim.'],
  ['שיחק', 'brincar, jogar (sichek; presente: משחק, mesachek)', 'verbo', 'Verbos-chave', '⚽', 'Hu mesachek.'],
  // ── Números (20-100) ──
  ['עשרים', 'vinte (esrim)', 'numeral', 'Números', '🔢', 'Esrim sfarim.'],
  ['שלושים', 'trinta (shloshim)', 'numeral', 'Números', '🔢', 'Shloshim sfarim.'],
  ['ארבעים', 'quarenta (arba’im)', 'numeral', 'Números', '🔢', 'Arba’im sfarim.'],
  ['חמישים', 'cinquenta (chamishim)', 'numeral', 'Números', '🔢', 'Chamishim sfarim.'],
  ['שישים', 'sessenta (shishim)', 'numeral', 'Números', '🔢', 'Shishim sfarim.'],
  ['שבעים', 'setenta (shiv’im)', 'numeral', 'Números', '🔢', 'Shiv’im sfarim.'],
  ['שמונים', 'oitenta (shmonim)', 'numeral', 'Números', '🔢', 'Shmonim sfarim.'],
  ['תשעים', 'noventa (tish’im)', 'numeral', 'Números', '🔢', 'Tish’im sfarim.'],
  ['מאה', 'cem (me’ah)', 'numeral', 'Números', '🔢', 'Me’ah sfarim.'],
];

export const VOCAB_HE = buildVocab('he', ROWS);
