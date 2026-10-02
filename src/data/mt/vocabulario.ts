import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do maltês (Malti), nível A1 — pacote incompleto (ver `incomplete` em index.ts).
 *
 * Cada palavra foi conferida nestas fontes (inglês):
 * - Wiktionary, verbete de cada palavra (ex.: https://en.wiktionary.org/wiki/dar,
 *   .../wiki/tajjeb, .../wiki/missier, .../wiki/qattus, .../wiki/bon%C4%A1u, .../wiki/ried,
 *   .../wiki/%C4%A7abb, .../wiki/sptar, .../wiki/kamra, .../wiki/skola, .../wiki/familja,
 *   .../wiki/a%C4%A7mar, .../wiki/abjad, .../wiki/iswed, .../wiki/isfar, .../wiki/a%C4%A7dar,
 *   .../wiki/blu, .../wiki/%C4%A7alib, .../wiki/nbid, .../wiki/%C4%A1obon, .../wiki/kafe%CC%80,
 *   .../wiki/%C4%A7obb, .../wiki/ba%C4%A7ar, .../wiki/%C4%A7u, .../wiki/o%C4%A7t)
 * - Wiktionary, “Appendix:Maltese Swadesh list” (https://en.wiktionary.org/wiki/Appendix:Maltese_Swadesh_list)
 *   e “Appendix:Maltese_numerals” — pronomes, números, verbos de citação (qal, kiel, xorob, ra,
 *   jaf), corpo, natureza, bichos.
 * - Wikivoyage, “Maltese phrasebook” (https://en.wikivoyage.org/wiki/Maltese_phrasebook) —
 *   saudações, “kif inti?”, “jisimni”, “jekk jogħġbok”, “skużi”, “jiddispjaċini”.
 * - Wikipédia em inglês, “Maltese language” e “Maltese grammar” — artigo il-/l-, consoantes
 *   solares, exemplo “l-omm”.
 *
 * Verbos semíticos são citados na forma de “dicionário” do maltês (3ª pessoa do singular do
 * perfeito, ex.: qal = “ele disse”), a mesma convenção usada para o árabe e o hebraico — por isso
 * o glossário explica a forma entre parênteses. Sem fonte própria do maltês para o verbo “ser” no
 * presente, nenhuma frase de exemplo deste pacote usa cópula: só saudações, vocativos, objetos
 * diretos e o paradigma verificado de “ried” (querer: rrid/trid/jrid/rridu/jridu).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bonġu', 'bom dia (do francês “bonjour” — não do italiano “buongiorno”, apesar da aparência)', 'interjeição', 'Expressões', '🌅', 'Bonġu! Kif inti?'],
  ['bonswa', 'boa tarde, boa noite (saudação)', 'interjeição', 'Expressões', '🌆', 'Bonswa!'],
  ['saħħa', 'saúde; tchau, até logo (como despedida)', 'interjeição', 'Expressões', '👋', 'Saħħa!'],
  ['grazzi', 'obrigado (do siciliano “grazzi”)', 'interjeição', 'Expressões', '🙏', 'Grazzi!'],
  ['jekk jogħġbok', 'por favor (lit. “se te agrada”)', 'expressão', 'Expressões', '🙏', 'Ilma, jekk jogħġbok.'],
  ['skużi', 'desculpe, com licença', 'interjeição', 'Expressões', '😅', 'Skużi!'],
  ['jiddispjaċini', 'sinto muito, desculpe (lit. “isso me desagrada”)', 'expressão', 'Expressões', '😔', 'Jiddispjaċini.'],
  ['merħba', 'bem-vindo(a) (do árabe marḥaban)', 'interjeição', 'Expressões', '👋', 'Merħba!'],
  ['kif inti?', 'como você está?', 'expressão', 'Expressões', '🙂', 'Bonġu! Kif inti?'],
  // ── Essenciais ──
  ['iva', 'sim', 'advérbio', 'Essenciais', '👍', 'Iva, grazzi!'],
  ['le', 'não', 'advérbio', 'Essenciais', '👎', 'Le, grazzi.'],
  ['kif', 'como (de “kif inti?”, como você está?)', 'advérbio', 'Essenciais', '❓', 'Kif inti?'],
  // ── Pessoas ──
  ['jien', 'eu (também “jiena”)', 'pronome', 'Pessoas', '🙋', 'Jien rrid ilma.'],
  ['int', 'tu, você (também “inti”)', 'pronome', 'Pessoas', '🫵', 'Int trid ħobż?'],
  ['hu', 'ele (também “huwa”)', 'pronome', 'Pessoas', '👨', 'Hu jrid kafè.'],
  ['hi', 'ela (também “hija”)', 'pronome', 'Pessoas', '👩', 'Hi.'],
  ['aħna', 'nós', 'pronome', 'Pessoas', '🙌', 'Aħna rridu ilma.'],
  ['intom', 'vocês', 'pronome', 'Pessoas', '🫵', 'Intom.'],
  ['huma', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Huma jridu ħobż.'],
  ['isem', 'nome (do árabe ism)', 'substantivo', 'Pessoas', '🏷️', 'Isem.'],
  ['jisimni', 'eu me chamo, meu nome é (lit. “[é] o meu nome”)', 'expressão', 'Pessoas', '🏷️', 'Jisimni Ana.'],
  ['omm', 'mãe', 'substantivo', 'Pessoas', '👩', 'L-omm.', 'f'],
  ['missier', 'pai (do siciliano antigo “misseri”, não do árabe — substituiu a palavra semítica nativa “bu”)', 'substantivo', 'Pessoas', '👨', 'Il-missier.', 'm'],
  ['ħu', 'irmão (do árabe aḵū)', 'substantivo', 'Pessoas', '🧑', 'Il-ħu.', 'm'],
  ['oħt', 'irmã (do árabe uḵt)', 'substantivo', 'Pessoas', '🧑', 'L-oħt.', 'f'],
  ['familja', 'família (do italiano famiglia)', 'substantivo', 'Pessoas', '👪', 'Il-familja.'],
  ['raġel', 'homem', 'substantivo', 'Pessoas', '👨', 'Ir-raġel.', 'm'],
  ['mara', 'mulher', 'substantivo', 'Pessoas', '👩', 'Il-mara.', 'f'],
  ['ħabib', 'amigo (do árabe ḥabīb)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Il-ħabib.', 'm'],
  ['ħabiba', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Il-ħabiba.', 'f'],
  // ── Natureza ──
  ['xemx', 'sol', 'substantivo', 'Natureza', '☀️', 'Ix-xemx.'],
  ['qamar', 'lua', 'substantivo', 'Natureza', '🌙', 'Il-qamar.'],
  ['nar', 'fogo', 'substantivo', 'Natureza', '🔥', 'In-nar.'],
  ['siġra', 'árvore', 'substantivo', 'Natureza', '🌳', 'Is-siġra.'],
  // ── Animais ──
  ['kelb', 'cachorro', 'substantivo', 'Animais', '🐕', 'Il-kelb.'],
  ['qattus', 'gato (do latim cattus, via o árabe magrebino — a mesma raiz do português “gato”, com um caminho bem diferente)', 'substantivo', 'Animais', '🐈', 'Il-qattus.', 'm'],
  ['ħut', 'peixe (coletivo)', 'substantivo', 'Animais', '🐟', 'Il-ħut.'],
  // ── Alimentação e Restaurantes ──
  ['ħobż', 'pão (coletivo; uma unidade é “ħobża”)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Il-ħobż.', 'm'],
  ['ilma', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'L-ilma.'],
  ['inbid', 'vinho (também “nbid”, do árabe nabīḏ)', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'L-inbid.', 'm'],
  ['ħalib', 'leite (do árabe ḥalīb)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Il-ħalib.', 'm'],
  ['ġobon', 'queijo (coletivo, do árabe jubn)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Il-ġobon.', 'm'],
  ['kafè', 'café (do siciliano, via o turco otomano e o árabe qahwa)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Il-kafè.', 'm'],
  // ── Corpo ──
  ['id', 'mão', 'substantivo', 'Corpo', '✋', 'L-id.'],
  ['ras', 'cabeça', 'substantivo', 'Corpo', '👤', 'Ir-ras.'],
  ['għajn', 'olho', 'substantivo', 'Corpo', '👁️', 'Għajn.'],
  ['ħalq', 'boca', 'substantivo', 'Corpo', '👄', 'Il-ħalq.'],
  ['qalb', 'coração', 'substantivo', 'Corpo', '❤️', 'Il-qalb.'],
  // ── Casa ──
  ['dar', 'casa (do árabe dār)', 'substantivo', 'Casa', '🏠', 'Id-dar.'],
  ['kamra', 'quarto, sala (do siciliano càmmara, via o latim camera)', 'substantivo', 'Casa', '🛏️', 'Il-kamra.'],
  // ── Números ──
  ['wieħed', 'um', 'numeral', 'Números', '1️⃣', 'Wieħed.'],
  ['tnejn', 'dois', 'numeral', 'Números', '2️⃣', 'Tnejn.'],
  ['tlieta', 'três', 'numeral', 'Números', '3️⃣', 'Tlieta.'],
  ['erbgħa', 'quatro', 'numeral', 'Números', '4️⃣', 'Erbgħa.'],
  ['ħamsa', 'cinco', 'numeral', 'Números', '5️⃣', 'Ħamsa.'],
  ['sitta', 'seis', 'numeral', 'Números', '6️⃣', 'Sitta.'],
  ['sebgħa', 'sete', 'numeral', 'Números', '7️⃣', 'Sebgħa.'],
  ['tmienja', 'oito', 'numeral', 'Números', '8️⃣', 'Tmienja.'],
  ['disgħa', 'nove', 'numeral', 'Números', '9️⃣', 'Disgħa.'],
  ['għaxra', 'dez', 'numeral', 'Números', '🔟', 'Għaxra.'],
  // ── Verbos-chave (forma de citação: 3ª pessoa do singular do perfeito, “ele...”) ──
  ['qal', 'dizer (ele disse — forma de citação do verbo)', 'verbo', 'Verbos-chave', '🗣️', 'Hu qal “Grazzi”.'],
  ['kiel', 'comer (ele comeu — forma de citação do verbo)', 'verbo', 'Verbos-chave', '🍽️', 'Il-kelb kiel il-ħobż.'],
  ['xorob', 'beber (ele bebeu — forma de citação do verbo)', 'verbo', 'Verbos-chave', '🥤', 'Hu xorob l-ilma.'],
  ['ra', 'ver (ele viu — forma de citação do verbo)', 'verbo', 'Verbos-chave', '👀', 'Hu ra ix-xemx.'],
  ['jaf', 'saber (ele sabe)', 'verbo', 'Verbos-chave', '🧠', 'Hu jaf.'],
  ['ried', 'querer (ele quis — forma de citação; presente: jien rrid, int trid, hu jrid, aħna rridu, huma jridu)', 'verbo', 'Verbos-chave', '💭', 'Hu ried ilma.'],
  // ── Cores e Descrições ──
  ['aħmar', 'vermelho (fem. ħamra, do árabe aḥmar)', 'adjetivo', 'Cores e Descrições', '🔴', 'Aħmar.'],
  ['isfar', 'amarelo (fem. safra, do árabe aṣfar)', 'adjetivo', 'Cores e Descrições', '🟡', 'Isfar.'],
  ['abjad', 'branco (fem. bajda, do árabe abyaḍ)', 'adjetivo', 'Cores e Descrições', '⚪', 'Abjad.'],
  ['iswed', 'preto (fem. sewda, do árabe aswad)', 'adjetivo', 'Cores e Descrições', '⚫', 'Iswed.'],
  ['blu', 'azul (do siciliano/italiano — o maltês tinha as palavras semíticas “iżraq” e “ikħal” para tons de azul)', 'adjetivo', 'Cores e Descrições', '🔵', 'Blu.'],
  ['tajjeb', 'bom (fem. tajba, do árabe ṭayyib)', 'adjetivo', 'Cores e Descrições', '👍', 'Tajjeb!'],
  ['kbir', 'grande', 'adjetivo', 'Cores e Descrições', '📏', 'Kbir.'],
  ['żgħir', 'pequeno', 'adjetivo', 'Cores e Descrições', '📏', 'Żgħir.'],
];

export const VOCAB_MT = buildVocab('mt', ROWS);
