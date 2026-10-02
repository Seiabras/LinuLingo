import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do curmanji (curdo do norte / kurmanji, código ISO 639-3 «kmr»), na grafia latina do
 * alfabeto Hawar. Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) —
 * ver o campo `incomplete` do pacote.
 *
 * Fontes consultadas (todas via Wikipédia/Wiktionary/Wikivoyage/Omniglot, buscadas em 02/10/2026):
 * - https://en.wikipedia.org/wiki/Kurmanji (história, alfabeto, região, falantes)
 * - https://en.wikipedia.org/wiki/Kurdish_languages (classificação, Kurmanji × Sorani)
 * - https://en.wikipedia.org/wiki/Kurdish_alphabets (alfabeto Hawar, letras ê î û ç ş, história de q/w/x)
 * - https://en.wikipedia.org/wiki/Kurdish_grammar (tabela de casos direto/oblíquo/construto)
 * - https://en.wikipedia.org/wiki/Izafet (a construção ezafe no curmanji)
 * - https://en.wikipedia.org/wiki/Subject%E2%80%93object%E2%80%93verb_word_order (SOV: «Ez xwarin dixwim»)
 * - https://en.wikipedia.org/wiki/Flag_of_Kurdistan e https://en.wikipedia.org/wiki/Newroz (cultura, bandeira)
 * - https://en.wikivoyage.org/wiki/Kurdish_phrasebook e https://omniglot.com/language/phrases/kurdish-kurmanji.php
 *   (cumprimentos e frases do dia a dia)
 * - https://en.wiktionary.org/ — páginas individuais em curmanji (kmr) de cada palavra abaixo (gênero,
 *   classe gramatical e, nos verbos, a conjugação no presente): çav, dest, ling, ser, dev, guh, dayik,
 *   bav, jin, mêr, nav, roj, heyv, stêr, av, xanî, derî, kûçik, pisîk, masî, hesp, teyr, nan, şîr, çay,
 *   ziman, kitêb, mezin, biçûk, xweş, baş, û, çi, hûn, ew, silav, spas, bûn/im, xwestin/dixwazim/dixwazî,
 *   zanîn/dizanim, çûn/diçim, hatin/têm, kirin/dikim, xwarin, vexwarin/vedixwim; e a lista de Swadesh
 *   https://en.wiktionary.org/wiki/Appendix:Kurdish_Swadesh_list (números e palavras básicas).
 *
 * Sobre o gênero gramatical: o curmanji distingue masculino e feminino (sem neutro) — ao contrário do
 * sorani, que perdeu o gênero gramatical quase todo. Cada substantivo abaixo traz o gênero confirmado
 * na página do Wiktionary; a palavra «çay» (chá) fica sem gênero porque o próprio Wiktionary a marca
 * como pendente («requests for gender»).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['silav', 'oi, olá (saudação informal, do árabe “salam”, paz)', 'interjeição', 'Expressões', '👋', 'Silav! Tu çawa yî?'],
  ['rojbaş', 'bom dia, boa tarde (lit. “dia bom”)', 'interjeição', 'Expressões', '🌅', 'Rojbaş! Spas.'],
  ['şevbaş', 'boa noite (ao se despedir; lit. “noite boa”)', 'interjeição', 'Expressões', '🌙', 'Şevbaş! Bi xatirê te.'],
  ['bi xatirê te', 'tchau, até logo', 'expressão', 'Expressões', '👋', 'Spas! Bi xatirê te.'],
  ['spas', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Rojbaş! Spas.'],
  ['ji kerema xwe', 'por favor', 'expressão', 'Expressões', '🙏', 'Av, ji kerema xwe.'],
  // ── Essenciais ──
  ['erê', 'sim', 'advérbio', 'Essenciais', '👍', 'Erê, spas!'],
  ['na', 'não', 'advérbio', 'Essenciais', '👎', 'Na, spas.'],
  ['û', 'e', 'conjunção', 'Essenciais', null, 'Nan û av.'],
  ['baş', 'bom, bem', 'adjetivo', 'Essenciais', '👍', 'Ez baş im.'],
  ['çi', 'o quê', 'pronome', 'Essenciais', '❓', 'Tu çi dixwazî?'],
  // ── Pessoas ──
  ['ez', 'eu', 'pronome', 'Pessoas', '🙋', 'Ez baş im.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Tu çawa yî?'],
  ['ew', 'ele, ela; eles, elas (mesma forma no singular e no plural)', 'pronome', 'Pessoas', '👤', 'Ew baş e.'],
  ['em', 'nós', 'pronome', 'Pessoas', '🙌', 'Em û hûn.'],
  ['hûn', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Hûn û em.'],
  ['nav', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Navê min Linu e.', 'm'],
  ['dayik', 'mãe', 'substantivo', 'Pessoas', '👩', 'Dayika min baş e.', 'f'],
  ['bav', 'pai', 'substantivo', 'Pessoas', '👨', 'Bavê min baş e.', 'm'],
  ['jin', 'mulher, esposa', 'substantivo', 'Pessoas', '👩', 'Jin baş e.', 'f'],
  ['mêr', 'homem, marido', 'substantivo', 'Pessoas', '👨', 'Mêr baş e.', 'm'],
  // ── Natureza ──
  ['roj', 'sol; dia', 'substantivo', 'Natureza', '☀️', 'Roj baş e.', 'f'],
  ['heyv', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Heyv mezin e.', 'f'],
  ['stêr', 'estrela', 'substantivo', 'Natureza', '⭐', 'Stêr spî ye.', 'f'],
  // ── Animais ──
  ['kûçik', 'cachorro', 'substantivo', 'Animais', '🐕', 'Kûçik reş e.', 'm'],
  ['pisîk', 'gato', 'substantivo', 'Animais', '🐈', 'Pisîk spî ye.', 'f'],
  ['masî', 'peixe', 'substantivo', 'Animais', '🐟', 'Masî mezin e.', 'm'],
  ['teyr', 'pássaro (ave grande), águia', 'substantivo', 'Animais', '🦅', 'Teyr şîn e.', 'm'],
  ['hesp', 'cavalo', 'substantivo', 'Animais', '🐴', 'Hesp mezin e.', 'm'],
  // ── Alimentação ──
  ['nan', 'pão; comida', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Nan û av.', 'm'],
  ['av', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ez av dixwazim.', 'f'],
  ['şîr', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Şîr spî ye.', 'm'],
  ['çay', 'chá', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Ez çay dixwazim.', undefined],
  // ── Corpo ──
  ['ser', 'cabeça', 'substantivo', 'Corpo', '👤', 'Serê min mezin e.', 'm'],
  ['çav', 'olho', 'substantivo', 'Corpo', '👁️', 'Çav biçûk e.', 'm'],
  ['dest', 'mão', 'substantivo', 'Corpo', '✋', 'Destê min mezin e.', 'm'],
  ['ling', 'perna, pé', 'substantivo', 'Corpo', '🦵', 'Lingê min biçûk e.', 'm'],
  ['dev', 'boca', 'substantivo', 'Corpo', '👄', 'Devê min mezin e.', 'm'],
  // ── Casa ──
  ['xanî', 'casa', 'substantivo', 'Casa', '🏠', 'Xanî mezin e.', 'm'],
  ['derî', 'porta', 'substantivo', 'Casa', '🚪', 'Derî reş e.', 'm'],
  // ── Números ──
  ['yek', 'um', 'numeral', 'Números', '1️⃣', 'Yek nan.'],
  ['du', 'dois', 'numeral', 'Números', '2️⃣', 'Du nan.'],
  ['sê', 'três', 'numeral', 'Números', '3️⃣', 'Sê kûçik.'],
  ['çar', 'quatro', 'numeral', 'Números', '4️⃣', 'Çar pisîk.'],
  ['pênc', 'cinco', 'numeral', 'Números', '5️⃣', 'Pênc masî.'],
  ['şeş', 'seis', 'numeral', 'Números', '6️⃣', 'Şeş hesp.'],
  ['heft', 'sete', 'numeral', 'Números', '7️⃣', 'Heft roj.'],
  ['heşt', 'oito', 'numeral', 'Números', '8️⃣', 'Heşt teyr.'],
  ['neh', 'nove', 'numeral', 'Números', '9️⃣', 'Neh stêr.'],
  ['deh', 'dez', 'numeral', 'Números', '🔟', 'Deh xanî.'],
  // ── Verbos-chave ──
  ['bûn', 'ser, estar (ez im, tu yî)', 'verbo', 'Verbos-chave', '🧑', 'Ez baş im.'],
  ['xwestin', 'querer (ez dixwazim, tu dixwazî)', 'verbo', 'Verbos-chave', '💭', 'Ez av dixwazim.'],
  ['zanîn', 'saber (ez dizanim)', 'verbo', 'Verbos-chave', '🧠', 'Ez dizanim.'],
  ['çûn', 'ir (ez diçim)', 'verbo', 'Verbos-chave', '🚶', 'Ez diçim.'],
  ['hatin', 'vir (ez têm)', 'verbo', 'Verbos-chave', '🙋', 'Ez têm.'],
  ['kirin', 'fazer (ez dikim)', 'verbo', 'Verbos-chave', '🛠️', 'Ez dikim.'],
  ['xwarin', 'comer; comida (ez dixwim)', 'verbo', 'Verbos-chave', '🍽️', 'Ez nan dixwim.'],
  ['vexwarin', 'beber (ez vedixwim)', 'verbo', 'Verbos-chave', '🥤', 'Ez şîr vedixwim.'],
  // ── Cores e Descrições ──
  ['sor', 'vermelho', 'adjetivo', 'Cores e Descrições', '🔴', 'Masî sor e.'],
  ['şîn', 'azul', 'adjetivo', 'Cores e Descrições', '🔵', 'Teyr şîn e.'],
  ['spî', 'branco', 'adjetivo', 'Cores e Descrições', '⚪', 'Pisîk spî ye.'],
  ['reş', 'preto', 'adjetivo', 'Cores e Descrições', '⚫', 'Kûçik reş e.'],
  ['mezin', 'grande', 'adjetivo', 'Cores e Descrições', '📏', 'Hesp mezin e.'],
  ['biçûk', 'pequeno', 'adjetivo', 'Cores e Descrições', '📏', 'Pisîk biçûk e.'],
];

export const VOCAB_KMR = buildVocab('kmr', ROWS);
