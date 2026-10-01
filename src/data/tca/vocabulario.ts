import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tikuna (ticuna, tca), língua isolada do Alto Solimões (Amazonas, Brasil), também
 * falada na Colômbia e no Peru. Cada palavra foi conferida em pelo menos uma fonte real (ver o
 * relatório da entrega para a lista completa):
 *
 * - pt.wikipedia.org/wiki/Língua_Tikuna e en.wikipedia.org/wiki/Ticuna_language;
 * - povosindigenas.org.br (ISA), página do povo Ticuna;
 * - “Naanearu Uchiga” (1997), cartilha de alfabetização bilíngue do Ministério da Educação do Peru
 *   com o Instituto Lingüístico de Verano (SIL) — descreve o alfabeto oficial e traz palavras de
 *   exemplo (arquivo: archive.org/details/rosettaproject_tca_ortho-1, Projeto Rosetta);
 * - native-languages.org (números e palavras básicas), cujo numeral “airu” (cachorro) é confirmado
 *   de forma independente por Bertet, D. “Tikuna, a Ten-Toneme Language in Amazonia”, Amerindia 43
 *   (2021), que transcreve foneticamente a mesma palavra como /ʔai31du5/.
 *
 * O tikuna é uma língua tonal riquíssima (dez tonemas em sílaba tônica, segundo Bertet 2021) e a
 * ortografia oficial só marca o tom com acento quando duas palavras se confundem por escrito — por
 * isso “dexi” (água) e “dexa” (mensagem) aparecem como o próprio manual de 1997 as separa. Como as
 * frases publicadas em tikuna são raríssimas fora de trabalhos acadêmicos muito técnicos (glosa
 * fonológica, não ortografia de uso), a maioria dos exemplos abaixo é a própria palavra, sozinha ou
 * junto de um numeral — para não inventar uma frase que nenhuma fonte documentou. As duas frases
 * completas que aparecem (no verbete de “cuma”) são citação literal do manual de 1997.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['Nuxmae', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Nuxmae!'],
  ['Cuxnama', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Cuxnama!'],
  ['Tamoxẽ', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Tamoxẽ!'],
  // Pessoas
  ['Magüta', 'povo tikuna (lit. “povo pescado”, do mito de Yoi)', 'substantivo', 'Pessoas', '🧑', 'Du-ũ, magüta.'],
  ['Du-ũ', 'nós, a gente (autodesignação da língua/povo)', 'pronome', 'Pessoas', '🙌', 'Du-ũ, magüta.'],
  ['Cuma', 'você (forma de tratamento respeitosa)', 'pronome', 'Pessoas', '🫵', 'Cuma rii mea cupuracu.'],
  ['Chatü', 'homem', 'substantivo', 'Pessoas', '🧑', 'Wüxi chatü.'],
  ['Ngexüi', 'mulher', 'substantivo', 'Pessoas', '👩', 'Taxre ngexüi.'],
  // Números
  ['Wüxi', 'um', 'numeral', 'Números', '1️⃣', 'Wüxi.'],
  ['Taxre', 'dois', 'numeral', 'Números', '2️⃣', 'Taxre.'],
  ['Tomaxixpü', 'três', 'numeral', 'Números', '3️⃣', 'Tomaxixpü.'],
  ['Ãgümücü', 'quatro', 'numeral', 'Números', '4️⃣', 'Ãgümücü.'],
  ['Wüxi mixepüx', 'cinco', 'numeral', 'Números', '5️⃣', 'Wüxi mixepüx.'],
  ['Guxmixepüx', 'dez', 'numeral', 'Números', '🔟', 'Guxmixepüx.'],
  // Natureza
  ['Iake', 'sol', 'substantivo', 'Natureza', '☀️', 'Wüxi iake.'],
  ['Tawẽmake', 'lua', 'substantivo', 'Natureza', '🌙', 'Wüxi tawẽmake.'],
  ['Chiitacu', 'noite', 'substantivo', 'Natureza', '🌌', 'Chiitacu.'],
  ['Dexi', 'água', 'substantivo', 'Natureza', '💧', 'Wüxi dexi.'],
  ['Tuxu', 'espinho', 'substantivo', 'Natureza', '🌵', 'Wüxi tuxu.'],
  ['Témā', 'buriti (palmeira)', 'substantivo', 'Natureza', '🌴', 'Wüxi témā.'],
  ['Wáírá', 'açaí (palmeira)', 'substantivo', 'Natureza', '🌴', 'Wüxi wáírá.'],
  ['Déné', 'cana-de-açúcar', 'substantivo', 'Natureza', '🎋', 'Wüxi déné.'],
  // Animais
  ['Airu', 'cachorro', 'substantivo', 'Animais', '🐕', 'Wüxi airu.'],
  ['Ngobii', 'jabuti (tartaruga-de-terra)', 'substantivo', 'Animais', '🐢', 'Wüxi ngobii.'],
  ['Enii', 'camarão', 'substantivo', 'Animais', '🦐', 'Tomaxixpü enii.'],
  ['Tox', 'macaco-da-noite', 'substantivo', 'Animais', '🐒', 'Wüxi tox.'],
  ['Churi', 'morcego', 'substantivo', 'Animais', '🦇', 'Taxre churi.'],
  ['Ngoxii', 'arara (huacamayo)', 'substantivo', 'Animais', '🦜', 'Wüxi ngoxii.'],
  // Verbos-chave
  ['Nape', '(ele/ela) dorme', 'verbo', 'Verbos-chave', '😴', 'Chiitacu, nape.'],
  // Essenciais
  ['Dexa', 'mensagem, recado', 'substantivo', 'Essenciais', '✉️', 'Dexa.'],
  ['Tiixil', 'cântaro, jarro', 'substantivo', 'Essenciais', '🏺', 'Wüxi tiixil.'],
  ['To', 'outro', 'pronome', 'Essenciais', '➕', 'To.'],
];

export const VOCAB_TCA = buildVocab('tca', ROWS);
