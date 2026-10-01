import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tikuna (ticuna, tca), língua isolada do Alto Solimões (Amazonas, Brasil), também
 * falada na Colômbia e no Peru. Cada palavra foi conferida contra pelo menos uma fonte real e
 * aberta (ver o relatório da entrega para a lista completa de onde cada uma foi lida):
 *
 * - pt.wikipedia.org/wiki/Língua_ticuna e en.wikipedia.org/wiki/Ticuna_language (Nuxmae, Cuxnama,
 *   Tamoxẽ, Magüta, Chatü, Ngexüi, Wüxi, Dexá/Dexi, Airu);
 * - pib.socioambiental.org/pt/Povo:Ticuna (ISA, Povos Indígenas no Brasil): população, municípios,
 *   metades exogâmicas, clãs (“kï’á”) e o mito de Yoi e Ipi na montanha Taiwegine;
 * - “Naanearu Uchiga” (1997), cartilha oficial de alfabetização do Ministério da Educação do Peru
 *   (Educación Bilingüe Intercultural de la Selva) com o Instituto Lingüístico de Verano (SIL) —
 *   texto completo lido em archive.org/details/rosettaproject_tca_ortho-1 (Projeto Rosetta), que
 *   traz o alfabeto oficial com palavras de exemplo e confirma, entre outras, “ngobii”, “enii”,
 *   “tuxu”, “dexi”/“dexa”, “tiixil”, “to”/“tox”, “chiitacu”, “churi”, “ngoxii”, “nape” e as duas
 *   frases completas citadas no verbete de “Cuma”;
 * - native-languages.org/ticuna_words.htm (onze palavras básicas, incluindo os numerais de um a
 *   cinco), cujo “airu” (cachorro) é confirmado de forma independente por Bertet, D. “Tikuna, a
 *   Ten-Toneme Language in Amazonia”, Amerindia 43 (2021), que transcreve a mesma palavra
 *   foneticamente como /ʔai31du5/, e cujo “to” (outro) aparece também em Bertet (nota 22) como
 *   /to21/ “other.NS”;
 * - Goulard & Montes Rodríguez, “Taxonomías y cadenas de asociaciones... en tikuna”, Revista
 *   Amazónica/Redalyc, que confirma de forma independente “chǘǜ-rí” (morcego, = “churi”);
 * - um artigo acadêmico sobre nomes tikuna de plantas (ResearchGate) que confirma “ngobiÍ” como
 *   “morrocoy” (tartaruga-de-terra, = “ngobii”/“motelo” na cartilha de 1997);
 * - a dissertação “Os empréstimos linguísticos em tikuna” (UFAM, tede.ufam.edu.br), que confirma
 *   “du-ũ” como autodesignação ampla (“a gente”, de “du”, sangue, + o pluralizador “-gü”).
 *
 * Algumas palavras de uma tentativa anterior não puderam ser confirmadas em nenhuma fonte real
 * nesta pesquisa (um numeral “dez” e três palavras de plantas) e foram removidas — ver o relatório
 * da entrega. O tikuna é uma língua tonal riquíssima (dez tonemas em sílaba tônica na variedade de
 * San Martín de Amacayacu, segundo Bertet 2021) e a ortografia oficial só marca o tom com acento
 * quando duas palavras poderiam se confundir por escrito — é o próprio caso de “dexi” e “dexa” no
 * manual de 1997. Como frases completas publicadas em tikuna são raríssimas fora de transcrição
 * fonológica acadêmica, a maioria dos exemplos abaixo é a própria palavra, sozinha ou junto de um
 * numeral, para não inventar uma frase que nenhuma fonte documentou; as duas frases completas que
 * aparecem (no verbete de “Cuma”) são citação literal da cartilha de 1997.
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
  // Natureza
  ['Iake', 'sol', 'substantivo', 'Natureza', '☀️', 'Wüxi iake.'],
  ['Tawẽmake', 'lua', 'substantivo', 'Natureza', '🌙', 'Wüxi tawẽmake.'],
  ['Chiitacu', 'noite', 'substantivo', 'Natureza', '🌌', 'Chiitacu.'],
  ['Dexi', 'água', 'substantivo', 'Natureza', '💧', 'Wüxi dexi.'],
  ['Tuxu', 'espinho', 'substantivo', 'Natureza', '🌵', 'Wüxi tuxu.'],
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
