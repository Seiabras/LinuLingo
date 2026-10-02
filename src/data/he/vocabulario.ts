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
];

export const VOCAB_HE = buildVocab('he', ROWS);
