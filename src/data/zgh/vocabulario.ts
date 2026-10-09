import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tamazight padrão marroquina (ⵜⴰⵎⴰⵣⵉⵖⵜ, tamazight), escrito aqui na ortografia latina
 * berberista (a mais usada no dia a dia, inclusive no Marrocos: "most Moroccan speakers do not use
 * Tifinagh", Wikipédia em inglês, "Standard Moroccan Tamazight", consultada em 08/10/2026) — o
 * tifinagh neo, oficial desde 2003, aparece no guia de caracteres das unidades (index.ts/curriculo.ts)
 * só para as palavras com grafia tifinagh confirmada numa fonte (não inventada letra por letra).
 *
 * Cada palavra foi reconferida nesta sessão (não copiada de pesquisa anterior sem checar de novo):
 * Wikipédia em inglês ("Standard Moroccan Tamazight", "Tifinagh", "Berber languages", "Tashelhit",
 * "Central Atlas Tamazight grammar", "Ibn Tunart"), Wikcionário em inglês e em francês (verbete por
 * verbete, citado nas palavras que vêm só de uma variedade berbere, como o cabila ou o tarifit, não
 * do padrão marroquino em si — pan-berberes, do mesmo jeito que a pesquisa anterior já documentava),
 * Wikcionário em russo (azeggaɣ, azegzaw: verbetes mais modestos, mas dicionário de verdade, não
 * invenção) e o Wikivoyage em inglês ("Berber phrasebook"). Todas consultadas em 08/10/2026.
 * Idioma incompleto: só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete` em index.ts.
 * Vocabulário pequeno de propósito: o tamazight padrão marroquina tem muito menos dicionário livre
 * documentado em inglês/português do que o cantonês (`yue`, feito antes nesta mesma leva de idiomas
 * minoritários) — qualidade e fonte real vieram antes de bater uma meta de número de palavras.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['azul', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Azul! Nekk, d Linu.'],
  ['tifawin', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Tifawin!'],
  ['timensiwin', 'boa tarde, boa noite (ao chegar ou encontrar alguém)', 'interjeição', 'Expressões', '🌇', 'Timensiwin!'],
  ['iḍ ameggaz', 'boa noite (ao se despedir pra dormir)', 'interjeição', 'Expressões', '🌙', 'Iḍ ameggaz!'],
  ['ar tufat', 'tchau, até logo (lit. “até amanhã”)', 'interjeição', 'Expressões', '👋', 'Ar tufat!'],
  ['tanemmirt', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Tanemmirt!'],
  ['ulac aɣilif', 'de nada', 'expressão', 'Expressões', '🙂', 'Ulac aɣilif!'],
  ['ssurf-iyi', 'desculpe, com licença', 'expressão', 'Expressões', '🙇', 'Ssurf-iyi.'],
  ['ih', 'sim', 'interjeição', 'Expressões', '👍', 'Ih, tanemmirt.'],
  ['uhu', 'não', 'interjeição', 'Expressões', '👎', 'Uhu.'],
  // ── Essenciais ──
  ['isem', 'nome', 'substantivo', 'Essenciais', '🏷️', 'Isem-nnk?'],
  ['anwa', 'quem', 'pronome', 'Essenciais', '❓', 'Anwa yeddan yid-es?'],
  ['amek', 'como', 'advérbio', 'Essenciais', '❓', 'Amek?'],
  ['ur', 'não (partícula de negação, antes do verbo)', 'advérbio', 'Essenciais', '🚫', 'Ur ssnx.'],
  ['d', 'e; também marca “é/são” sem precisar de um verbo “ser” (partícula predicativa)', 'partícula', 'Essenciais', null, 'D izem.'],
  ['dari', 'eu tenho (lit. “em mim”, preposição + sufixo)', 'expressão', 'Essenciais', '🤲', 'Dari aydi.'],
  // ── Pessoas (pronomes, marcados por gênero no cabila/tarifit) ──
  ['nekk', 'eu', 'pronome', 'Pessoas', '🙋', 'D nekk.'],
  ['kečč', 'tu, você (dirigido a um homem)', 'pronome', 'Pessoas', '🫵', 'D kečč?'],
  ['kemm', 'tu, você (dirigido a uma mulher)', 'pronome', 'Pessoas', '🫵', 'D kemm?'],
  ['netta', 'ele', 'pronome', 'Pessoas', '🧑', 'D netta.'],
  ['nettat', 'ela', 'pronome', 'Pessoas', '👩', 'D nettat.'],
  ['nekʷni', 'nós', 'pronome', 'Pessoas', '🙌', 'D nekʷni.'],
  ['kunwi', 'vocês (dirigido a homens)', 'pronome', 'Pessoas', '🫵', 'D kunwi?'],
  ['kunnemti', 'vocês (dirigido a mulheres)', 'pronome', 'Pessoas', '🫵', 'D kunnemti?'],
  ['nitni', 'eles', 'pronome', 'Pessoas', '👥', 'D nitni.'],
  ['nitenti', 'elas', 'pronome', 'Pessoas', '👥', 'D nitenti.'],
  // ── Verbos-chave (forma de citação/aoristo — o berbere conjuga por afixo, não mostrado aqui) ──
  ['cc', 'comer (forma de citação; “ela comeu” é tcca)', 'verbo', 'Verbos-chave', '🍽️', 'Tcca.'],
  ['sw', 'beber (forma de citação)', 'verbo', 'Verbos-chave', '🥤', 'sw(i)'],
  ['ftu', 'ir (forma de citação)', 'verbo', 'Verbos-chave', '🚶', 'ftu'],
  ['fk', 'dar (forma de citação)', 'verbo', 'Verbos-chave', '🤲', 'fk(i)'],
  ['lmed', 'aprender', 'verbo', 'Verbos-chave', '📚', 'lmed'],
  ['ḥemmel', 'gostar de, amar', 'verbo', 'Verbos-chave', '❤️', 'ḥemmel'],
  // ── Casa e família ──
  ['axxam', 'casa', 'substantivo', 'Casa', '🏠', 'Dari axxam amecṭuḥ.', 'm'],
  ['yemma', 'mãe', 'substantivo', 'Pessoas', '👩', 'Yemma.', 'f'],
  ['baba', 'pai', 'substantivo', 'Pessoas', '👨', 'Baba.'],
  ['aman', 'água', 'substantivo', 'Alimentação', '💧', 'Aman d uɣrum.', 'm'],
  ['aɣrum', 'pão', 'substantivo', 'Alimentação', '🍞', 'Aɣrum.'],
  ['aydi', 'cachorro, cão', 'substantivo', 'Casa', '🐕', 'Dari aydi.', 'm'],
  // ── Números ──
  ['yan', 'um', 'numeral', 'Números', '1️⃣', 'Yan, sin, kraḍ.'],
  ['sin', 'dois', 'numeral', 'Números', '2️⃣', 'Sin.'],
  ['kraḍ', 'três', 'numeral', 'Números', '3️⃣', 'Kraḍ.'],
  ['kkuẓ', 'quatro', 'numeral', 'Números', '4️⃣', 'Kkuẓ.'],
  ['semmus', 'cinco', 'numeral', 'Números', '5️⃣', 'Semmus.'],
  ['sḍis', 'seis', 'numeral', 'Números', '6️⃣', 'Sḍis.'],
  ['sa', 'sete', 'numeral', 'Números', '7️⃣', 'Sa.'],
  ['tam', 'oito', 'numeral', 'Números', '8️⃣', 'Tam.'],
  ['tẓa', 'nove', 'numeral', 'Números', '9️⃣', 'Tẓa.'],
  ['mraw', 'dez', 'numeral', 'Números', '🔟', 'Mraw.'],
  // ── Descrições ──
  ['ameqqran', 'grande', 'adjetivo', 'Descrições', '📏', 'Axxam ameqqran.'],
  ['amecṭuḥ', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Axxam amecṭuḥ.'],
  ['aberkan', 'preto', 'adjetivo', 'Cores', '⚫', 'Aydi aberkan.'],
  ['awraɣ', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Awraɣ.'],
  ['azeggaɣ', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Azeggaɣ.'],
  ['azegzaw', 'verde, azul', 'adjetivo', 'Cores', '🟢', 'Azegzaw.'],
];

export const VOCAB_ZGH = buildVocab('zgh', ROWS);
