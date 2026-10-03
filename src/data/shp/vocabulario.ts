import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do shipibo-konibo (shp), língua indígena viva da família pano, falada às margens do
 * rio Ucayali (regiões de Ucayali e Loreto), na Amazônia peruana. SEM NENHUMA relação com o português
 * ou com qualquer língua indo-europeia. NÃO copiado do huni kuĩ (cbs, família pano, já neste app):
 * cada palavra abaixo foi conferida em fontes específicas sobre o shipibo-konibo, mesmo onde a forma
 * se pareceu com a do huni kuĩ (línguas aparentadas podem compartilhar raízes por herança comum, mas
 * isso foi verificado palavra por palavra, nunca presumido).
 *
 * FONTES:
 *   (1) es.wikipedia.org/wiki/Idioma_shipibo — classificação (família pano-tacana, ramo pano, grupo
 *       nawa), código ISO 639-3 “shp”, região (Ucayali e Loreto, Peru), ~34.152 falantes (censo 2017),
 *       fonologia, ordem SOV com posposições, alinhamento ergativo consistente (diferente de outras
 *       línguas pano, que têm ergatividade cindida — ver Valenzuela, Pilar (2000): “Ergatividad
 *       escindida en wariapano, yaminawa y shipibo-konibo”, citada na bibliografia do próprio artigo),
 *       e quatro frases de exemplo com marcação de caso: “E-a-ra isin-ai” (estou doente), “E-a-ra
 *       Kako-nko ka-iba-ke” (fui ao Caco ontem), “E-a-ra nawa-n ochíti-nin natex-ke” (o cachorro do
 *       mestiço me mordeu) e “E-n-ra nawa-n ochíti jamá-ke” (eu chutei o cachorro do mestiço) — usadas
 *       aqui tal como citadas, com “E” maiúsculo preservado da fonte (ver nota de ortografia abaixo).
 *   (2) en.wikipedia.org/wiki/Evidentiality — cita Valenzuela, Pilar (2003): “Evidentiality in
 *       Shipibo-Konibo, with a comparative overview of the category in Panoan”, com o exemplo
 *       “Aronkiai” (a-do-RONKI-ai, “dizem que ela vai fazer isso”), confirmando o sufixo reportativo
 *       “-ronki”.
 *   (3) en.wiktionary.org/wiki/hɨnɨ — “hɨnɨ” (água), citando Adam J. Tallman, “Cliticization and
 *       Incorporation in Panoan”, que por sua vez cita Valenzuela (2003); confirma a vogal central
 *       alta “ɨ” na grafia prática.
 *   (4) es.wikipedia.org/wiki/Kené — a palavra “kené” (desenho geométrico tradicional), citando
 *       Favarón, Gustavo e Bensho, (2022): 153; a expressão “jakon nete” (“bom”+“mundo” = mundo bom,
 *       terra sem maldade), citando Loriot, James; Lauriault, Erwin; Day, Dwight (1993), “Diccionario
 *       shipibo-castellano”: 209, 287; “kano” (vínculo com o mundo bom), Favarón e Bensho (2022): 147;
 *       “rono ewa”/“ronin” (sucuri, “mãe dos desenhos”), citando Brabec de Mori, Bernd e Mori Silvano
 *       de Brabec, Laida (2009): 111; “besho” (canto sagrado, ícaro), citando Brabec de Mori (2011): 36.
 *   (5) es.wikipedia.org/wiki/Shipibo-conibo — etimologia do etnônimo: “shipi-” designa o macaco
 *       pichico e “koni-” designa a enguia/muçum, com “-bo” como morfema de plural; também a seção
 *       sobre cerâmica e cosmologia, com “nai” (céu, mundo de cima), “jene” (mundo das águas) e “ronin”
 *       (sucuri primordial).
 *   (6) Intercontinental Dictionary Series — Key, Mary Ritchie (2023): “Shipibo-Conibo”, em Key, Mary
 *       Ritchie e Comrie, Bernard (eds.), The Intercontinental Dictionary Series, Max Planck Institute
 *       for Evolutionary Anthropology, Leipzig (ids.clld.org/contributions/281), na transcrição padro-
 *       nizada derivada por Miller, John e List, Johann-Mattis (2024), “Providing standardized phonetic
 *       transcriptions for the Panoan languages in the Intercontinental Dictionary Series” (conjunto de
 *       dados CLDF público, licença CC-BY-4.0, github.com/intercontinental-dictionary-series/keypano) —
 *       fonte da maior parte do vocabulário abaixo: pronomes pessoais, numerais, parentesco, partes do
 *       corpo, natureza, animais, alimentação, casa e verbos básicos.
 *
 * NOTA SOBRE ORTOGRAFIA: este pacote usa DUAS transcrições, ambas citadas tal como nas fontes, sem
 * inventar conversão entre elas: (a) a transcrição fonética padronizada da Intercontinental Dictionary
 * Series (fonte 6), com “š” (“x” do português), “č” (“tch”), “β” (fricativa bilabial), “ṣ̌” (retroflexa),
 * “ɨ” (vogal central alta) e vogais nasais marcadas por til; e (b) a grafia usada nos exemplos citados
 * da Wikipédia em espanhol (fontes 1 e 5), como “ochíti”, “jakon”, “nawa”, “isin”, “natex”. Comparando
 * as duas fontes para a MESMA palavra (“cachorro”: “očiti” na fonte 6, “ochíti” nas fontes 1/5; “chutar”:
 * “hamati” na fonte 6, “jama-” na fonte 1) fica confirmado que “č”≈“ch” e “h”≈“j” entre as duas grafias —
 * por isso a entrada de “cachorro” abaixo usa a forma “ochiti”, comum às duas fontes. Fora esses casos
 * conferidos nas duas fontes, cada palavra manteve a grafia exata da fonte de onde veio, sem conversão.
 * Pelo mesmo motivo, a raiz do pronome de 1ª pessoa aparece como “ɨ” (fonte 6) nas entradas de vocabu-
 * lário, mas como “E” maiúsculo nas frases citadas das fontes 1/5 — as duas fontes tratam da mesma
 * língua e (ao que tudo indica) do mesmo som, só que com convenções de transcrição diferentes.
 *
 * LACUNAS HONESTAS: nenhuma fonte consultada registra uma forma simples para o numeral “quatro” (os
 * outros de 1 a 10 estão todos confirmados); nenhuma fonte registra uma interjeição fixa para “oi” ou
 * “obrigado” — por isso o curso reaproveita “jakon” e “hɨɨ” (duas formas reais e sinônimas de “bom”,
 * fonte 6) como cumprimento e agradecimento, igual à solução já usada no huni kuĩ deste app; e nenhuma
 * fonte consultada mostra como se forma uma pergunta em shipibo-konibo, por isso as frases autorais
 * deste pacote evitam perguntas e usam só afirmações, combinando apenas palavras e sufixos já atestados
 * (pronome + “-ra” + verbo + “-ai”/“-ke”, ou pronome + “-n”/“-a” + substantivo).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões (jakon/hɨɨ: fonte 6, reaproveitadas como cumprimento/agradecimento — ver nota acima) ──
  ['jakon', 'bom, bem (usada aqui como cumprimento, tipo “tudo bem!”)', 'adjetivo', 'Expressões', '😊', 'Jakon!'],
  ['hɨɨ', 'bom (variante de “jakon”; usada aqui como agradecimento)', 'adjetivo', 'Expressões', '🙏', 'Hɨɨ!'],
  // ── Essenciais ──
  ['ɨ̃hɨ̃', 'sim', 'interjeição', 'Essenciais', '👍', 'Ɨ̃hɨ̃.'],
  ['yama', 'não (partícula de negação, presa ao verbo, não uma palavra solta)', 'partícula', 'Essenciais', '🚫', 'Yama.'],
  ['nete', 'mundo, terra (na expressão “jakon nete”, mundo bom, terra sem maldade)', 'substantivo', 'Essenciais', '🌍', 'Jakon nete.'],
  ['kené', 'desenho geométrico tradicional do povo shipibo-konibo', 'substantivo', 'Essenciais', '🎨', 'Kené.'],
  // ── Pessoas ──
  ['ɨ-a', 'eu (pronome pessoal, forma absolutiva)', 'pronome', 'Pessoas', '🙋', 'Ɨ-a-ra isin-ai.'],
  ['mi-a', 'tu, você (pronome pessoal, forma absolutiva)', 'pronome', 'Pessoas', '🫵', 'Mi-a-ra ka-ai.'],
  ['ha', 'ele, ela (pronome pessoal)', 'pronome', 'Pessoas', '👤', 'Ha-ra isin-ai.'],
  ['noa', 'nós', 'pronome', 'Pessoas', '🙌', 'Noa-ra ka-ai.'],
  ['mato', 'vocês', 'pronome', 'Pessoas', '👥', 'Mato-ra ka-ai.'],
  ['hato', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Hato-ra ka-ai.'],
  ['honi', 'pessoa, gente, ser humano', 'substantivo', 'Pessoas', '🧑', 'Honi.'],
  ['nawa', 'forasteiro, pessoa não indígena, mestiço', 'substantivo', 'Pessoas', '🧍', 'Nawa-n ochíti-nin natex-ke.'],
  ['papa', 'pai', 'substantivo', 'Pessoas', '👨', 'Ɨ-n papa.'],
  ['tita', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ɨ-n tita.'],
  ['aĩβo', 'mulher', 'substantivo', 'Pessoas', '👩', 'Aĩβo.'],
  ['βɨ̃βo', 'homem', 'substantivo', 'Pessoas', '👨', 'Βɨ̃βo.'],
  ['βakɨ', 'filho, filha; criança', 'substantivo', 'Pessoas', '🧒', 'Ɨ-n βakɨ.'],
  ['awĩ', 'esposa', 'substantivo', 'Pessoas', '👰', 'Ɨ-n awĩ.'],
  // ── Natureza ──
  ['hɨnɨ', 'água', 'substantivo', 'Natureza', '💧', 'Ɨ-a-ra hɨnɨ ṣ̌ɨa-ai.'],
  ['βari', 'sol', 'substantivo', 'Natureza', '☀️', 'Βari.'],
  ['oṣ̌ɨ', 'lua', 'substantivo', 'Natureza', '🌙', 'Oṣ̌ɨ.'],
  ['čii', 'fogo', 'substantivo', 'Natureza', '🔥', 'Čii.'],
  ['hiwi', 'árvore', 'substantivo', 'Natureza', '🌳', 'Hiwi.'],
  ['nɨtɨ', 'dia', 'substantivo', 'Natureza', '📅', 'Nɨtɨ.'],
  ['hošĩ', 'vermelho', 'adjetivo', 'Natureza', '🔴', 'Hošĩ.'],
  ['čɨṣ̌ɨ', 'preto', 'adjetivo', 'Natureza', '⚫', 'Čɨṣ̌ɨ.'],
  ['hoṣ̌o', 'branco', 'adjetivo', 'Natureza', '⚪', 'Hoṣ̌o.'],
  // ── Animais ──
  ['rono', 'sucuri, jiboia, cobra (na cosmologia kené, “mãe dos desenhos”)', 'substantivo', 'Animais', '🐍', 'Rono ewa.'],
  ['ochiti', 'cachorro', 'substantivo', 'Animais', '🐕', 'Nawa-n ochíti-nin natex-ke.'],
  ['yapa', 'peixe', 'substantivo', 'Animais', '🐟', 'Ɨ-a-ra yapa pi-ai.'],
  ['isa', 'pássaro', 'substantivo', 'Animais', '🐦', 'Isa.'],
  ['tomi', 'papagaio, periquito', 'substantivo', 'Animais', '🦜', 'Tomi.'],
  // ── Alimentação ──
  ['nami', 'carne', 'substantivo', 'Alimentação', '🍖', 'Nami.'],
  ['taši', 'sal', 'substantivo', 'Alimentação', '🧂', 'Taši.'],
  ['ṣ̌ɨki', 'milho', 'substantivo', 'Alimentação', '🌽', 'Ṣ̌ɨki.'],
  ['parãta', 'banana (provável empréstimo do espanhol “plátano”)', 'substantivo', 'Alimentação', '🍌', 'Parãta.'],
  // ── Corpo ──
  ['maṣ̌po', 'cabeça', 'substantivo', 'Corpo', '👤', 'Ɨ-n maṣ̌po.'],
  ['βɨro', 'olho', 'substantivo', 'Corpo', '👁️', 'Ɨ-n βɨro.'],
  ['kɨṣ̌a', 'boca', 'substantivo', 'Corpo', '👄', 'Ɨ-n kɨṣ̌a.'],
  ['mɨkɨ̃', 'mão', 'substantivo', 'Corpo', '✋', 'Ɨ-n mɨkɨ̃.'],
  ['taɨ', 'pé', 'substantivo', 'Corpo', '🦶', 'Ɨ-n taɨ.'],
  // ── Casa ──
  ['šobo', 'casa, maloca', 'substantivo', 'Casa', '🏠', 'Ɨ-n šobo.'],
  // ── Números (de 1 a 10, exceto “quatro”: nenhuma fonte consultada registra uma forma simples) ──
  ['wɨstiora', 'um', 'numeral', 'Números', '1️⃣', 'Wɨstiora, rabɨ, kimiša…'],
  ['rabɨ', 'dois', 'numeral', 'Números', '2️⃣', 'Rabɨ, kimiša, pičika…'],
  ['kimiša', 'três', 'numeral', 'Números', '3️⃣', 'Kimiša, pičika, sokota…'],
  ['pičika', 'cinco', 'numeral', 'Números', '5️⃣', 'Pičika, sokota, kãčis…'],
  ['sokota', 'seis', 'numeral', 'Números', '6️⃣', 'Sokota, kãčis, posaka…'],
  ['kãčis', 'sete', 'numeral', 'Números', '7️⃣', 'Kãčis, posaka, iskõ…'],
  ['posaka', 'oito', 'numeral', 'Números', '8️⃣', 'Posaka, iskõ, čõka…'],
  ['iskõ', 'nove', 'numeral', 'Números', '9️⃣', 'Iskõ, čõka.'],
  ['čõka', 'dez', 'numeral', 'Números', '🔟', 'Čõka.'],
  // ── Verbos-chave ──
  ['ka', 'ir (forma citada: ka-ti, infinitivo; ka-ai, presente)', 'verbo', 'Verbos-chave', '🚶', 'Ɨ-a-ra ka-ai.'],
  ['pi', 'comer (forma citada: pi-ti, infinitivo)', 'verbo', 'Verbos-chave', '🍽️', 'Ɨ-a-ra yapa pi-ai.'],
  ['ṣ̌ɨati', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ɨ-a-ra hɨnɨ ṣ̌ɨa-ai.'],
  ['oĩti', 'ver', 'verbo', 'Verbos-chave', '👁️', 'Oĩti.'],
  ['nĩkati', 'ouvir', 'verbo', 'Verbos-chave', '👂', 'Nĩkati.'],
  ['onãti', 'saber, conhecer', 'verbo', 'Verbos-chave', '🧠', 'Ɨ-a-ra kené onã-ai.'],
  ['isin', 'estar doente (forma citada: isin-ai, “estou doente”)', 'verbo', 'Verbos-chave', '🤒', 'Ɨ-a-ra isin-ai.'],
  ['natex', 'morder (forma citada: natex-ke, passado)', 'verbo', 'Verbos-chave', '😬', 'Nawa-n ochíti-nin natex-ke.'],
  ['jama', 'chutar (forma citada: jamá-ke, passado)', 'verbo', 'Verbos-chave', '🦵', 'E-n-ra nawa-n ochíti jamá-ke.'],
];

export const VOCAB_SHP = buildVocab('shp', ROWS);
