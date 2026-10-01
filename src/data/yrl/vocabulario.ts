import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do nheengatu (yrl, “língua geral amazônica”), língua indígena viva do noroeste do
 * Amazonas — NÃO o tupi antigo colonial extinto (código `tpw`) nem o guarani paraguaio (código `gn`):
 * são três línguas diferentes da família tupi-guarani. Cada palavra abaixo foi conferida
 * especificamente para o nheengatu moderno, principalmente no Wiktionary em inglês
 * (en.wiktionary.org, categoria “Nheengatu lemmas”), cujas entradas em nheengatu citam como fonte o
 * dicionário acadêmico de Marcel Twardowsky Avila (“Dicionário Nheengatu-Português”, 2021) e os
 * cursos de Eduardo de Almeida Navarro (“Curso de língua geral (nheengatu ou tupi moderno)”, 2011 e
 * 2016), além do artigo “Nheengatu” da Wikipédia em inglês e em português. Ver o relatório da
 * entrega para a lista completa de páginas abertas e o que cada uma confirmou.
 *
 * Frases de exemplo: quando marcadas abaixo, foram citadas tais como aparecem nas fontes (é o caso
 * da maioria dos pronomes e de alguns verbos). As demais frases de exemplo foram construídas
 * combinando palavras e prefixos confirmados, seguindo os padrões de gramática documentados (pronome
 * + predicado sem o verbo “ser”, prefixos a-/re-/u-/ya-/pe- nos verbos, prefixo se- com adjetivos na
 * 1ª pessoa, sufixo -itá de plural) — o mesmo método usado nos pacotes de tupi antigo e guarani deste
 * app para as frases que não são citações diretas.
 *
 * O nheengatu não marca gênero gramatical nos substantivos (como as outras línguas tupi-guarani),
 * por isso `gender` fica sempre de fora. Os numerais nativos documentados vão de 1 a 5 (o 5, “pú”,
 * é também a palavra para “mão”); de 6 a 9 o nheengatu usa compostos com “pú” (ex.: “pú-yepé”, 5+1).
 */
export const ROWS: VocabRow[] = [
  // Expressões (cumprimentos citados tais como aparecem no Wiktionary, a partir de Avila 2021 e
  // Navarro 2016 “Curso de língua geral”)
  ['Puranga ara', 'bom dia (lit. “dia bom”)', 'expressão', 'Expressões', '👋', 'Puranga ara, se mimbira!'],
  ['Puranga pituna', 'boa noite', 'expressão', 'Expressões', '🌙', 'Puranga pituna, Pedro!'],
  ['Mayé taá indé resasá?', 'como você está? (lit. “como você passa?”)', 'expressão', 'Expressões', '❓', 'Puranga pituna, Pedro! Mayé taá indé resasá?'],
  ['Asasá puranga', 'eu estou bem (lit. “eu passo bem”)', 'expressão', 'Expressões', '🙂', 'Asasá puranga. Kwekatú reté!'],
  ['Kwekatú reté!', 'muito obrigado(a)!', 'interjeição', 'Expressões', '🙏', 'Asasá puranga. Kwekatú reté!'],
  // Essenciais
  ['katú', 'bom, bem, de boa saúde', 'adjetivo', 'Essenciais', '👍', 'Ixé se katú!'],
  ['puranga', 'bonito, bom', 'adjetivo', 'Essenciais', '✨', 'Indé puranga retana!'],
  ['puxí', 'ruim, feio, mal', 'adjetivo', 'Essenciais', '👎', 'Ixé asasá puxí!'],
  ['era', 'nome', 'substantivo', 'Essenciais', '🏷️', 'Se era Linu.'],
  ['uka', 'casa', 'substantivo', 'Essenciais', '🏠', 'Se manha uikú uka upé.'],
  ['nheengatú', 'a língua nheengatu; pessoa que fala nheengatu', 'substantivo', 'Essenciais', '🗣️', 'Indé repurungitá Nheengatú katú retana.'],
  ['nheenga', 'palavra, língua, fala', 'substantivo', 'Essenciais', '💬', 'Nheengatú nheenga puranga.'],
  // Pessoas: pronomes (todos conferidos individualmente no Wiktionary, classe de “pronomes de 1ª
  // classe”, usados como sujeito e como objeto)
  ['ixé', 'eu', 'pronome', 'Pessoas', '🙋', 'Ixé mira. Ixé asasá puranga.'],
  ['indé', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Indé puranga retana!'],
  ['aé', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Aé uputari uyuká ixé.'],
  ['yandé', 'nós', 'pronome', 'Pessoas', '🙌', 'Yandé yasasá puranga.'],
  ['penhẽ', 'vocês', 'pronome', 'Pessoas', '👥', 'Penhẽ mira-itá.'],
  ['aintá', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Aintá upuká yané resé.'],
  // Pessoas: família e gente
  ['manha', 'mãe', 'substantivo', 'Pessoas', '👩', 'Se manha uikú uka upé.'],
  ['paya', 'pai', 'substantivo', 'Pessoas', '👨', 'Se paya uikú paraná resé.'],
  ['mena', 'marido', 'substantivo', 'Pessoas', '🤵', 'Se mena uikú igara upé.'],
  ['imirikú', 'esposa', 'substantivo', 'Pessoas', '👰', 'Amunhã aikú yepé papera amundú arama se rimirikú supé.'],
  ['membira', 'filho, filha', 'substantivo', 'Pessoas', '🧒', 'Se membira uikú uka upé.'],
  ['kurumĩ', 'menino', 'substantivo', 'Pessoas', '🧒', 'Kurumĩ uikú igara upé.'],
  ['kunhã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kunhã puranga uikú uka upé.'],
  ['apigawa', 'homem', 'substantivo', 'Pessoas', '🧑', 'Apigawa uikú igara upé.'],
  ['kariwa', 'pessoa não indígena, “branco”', 'substantivo', 'Pessoas', '🧑', 'Kariwa uikú São Gabriel upé.'],
  // Verbos-chave (conjugação confirmada no Wiktionary: a- 1ª sg., re- 2ª sg., u- 3ª sg., ya- 1ª pl.,
  // pe- 2ª pl.)
  ['ikú', 'estar, ficar, morar, existir', 'verbo', 'Verbos-chave', '🏠', 'Paá ikú ne retama?'],
  ['mungitá', 'conversar, aconselhar; (baixo Amazonas) ler', 'verbo', 'Verbos-chave', '🗣️', 'Pesikári remupinima marandúa mayé remungitá waá.'],
  ['semu', 'sair, partir, aparecer', 'verbo', 'Verbos-chave', '🚶', 'Yasemu igara upé.'],
  ['puká', 'rir', 'verbo', 'Verbos-chave', '😄', 'Aintá upuká yané resé.'],
  ['yenũ', 'deitar-se, estar deitado', 'verbo', 'Verbos-chave', '😴', 'Ayenũ uka upé.'],
  ['pisirú', 'ajudar, socorrer, defender', 'verbo', 'Verbos-chave', '🤝', 'Tupana upisirú yandé.'],
  ['sasá', 'passar, ir, acontecer', 'verbo', 'Verbos-chave', '🚶', 'Mayé taá indé resasá?'],
  ['nheengari', 'cantar', 'verbo', 'Verbos-chave', '🎵', 'Aé unheengari uka upé.'],
  // Corpo
  ['akanga', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Se akanga.'],
  ['esá', 'olho', 'substantivo', 'Corpo', '👁️', 'Se resá.'],
  ['tĩ', 'nariz', 'substantivo', 'Corpo', '👃', 'Se tĩ.'],
  // Natureza
  ['iwí', 'terra, chão', 'substantivo', 'Natureza', '🌍', 'Iwí puranga.'],
  ['iwaka', 'céu', 'substantivo', 'Natureza', '☁️', 'Iwaka puranga.'],
  ['kaá', 'mato, floresta', 'substantivo', 'Natureza', '🌳', 'Kaá wasú.'],
  ['paraná', 'rio, mar', 'substantivo', 'Natureza', '🌊', 'Se paya uikú paraná resé.'],
  ['igara', 'canoa', 'substantivo', 'Natureza', '🛶', 'Yasemu igara upé.'],
  ['yasí', 'lua', 'substantivo', 'Natureza', '🌙', 'Yasí puranga.'],
  ['pituna', 'noite', 'substantivo', 'Natureza', '🌃', 'Puranga pituna, Pedro!'],
  // Animais
  ['pirá', 'peixe', 'substantivo', 'Animais', '🐟', 'Aputari mukũi pirá.'],
  ['tatú', 'tatu', 'substantivo', 'Animais', '🦔', 'Tatú uikú kaá upé.'],
  ['arara', 'arara', 'substantivo', 'Animais', '🦜', 'Arara uikú ybyrá upé.'],
  ['yawara', 'cachorro', 'substantivo', 'Animais', '🐕', 'Se yawara uikú uka upé.'],
  ['yakaré', 'jacaré', 'substantivo', 'Animais', '🐊', 'Esá! Yakaré paraná upé!'],
  ['suasú', 'veado', 'substantivo', 'Animais', '🦌', 'Suasú uikú kaá upé.'],
  ['tapiira', 'anta', 'substantivo', 'Animais', '🐾', 'Tapiira uikú kaá upé.'],
  ['irara', 'irara, papa-mel', 'substantivo', 'Animais', '🦡', 'Irara uikú kaá upé.'],
  // Cores
  ['pixuna', 'preto, escuro', 'adjetivo', 'Cores', '⚫', 'Yawara pixuna.'],
  ['tawá', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Arara tawá.'],
  ['suikiri', 'verde, azul', 'adjetivo', 'Cores', '🟢', 'Kaá suikiri.'],
  // Alimentação
  ['kisé', 'faca', 'substantivo', 'Alimentação e Restaurantes', '🔪', 'Se kisé puranga.'],
  ['mamãu', 'mamão', 'substantivo', 'Alimentação e Restaurantes', '🍈', 'Mamãu puranga.'],
  // Números (nativos de 1 a 5; “pú”, cinco, é também “mão” — de 6 a 9 o nheengatu compõe com “pú”:
  // pú-yepé 6, pú-mukũi 7, pú-musapiri 8, pú-irundí 9, confirmados na categoria de numerais)
  ['yepé', 'um', 'numeral', 'Números', '1️⃣', 'Yepé pirá.'],
  ['mukũi', 'dois', 'numeral', 'Números', '2️⃣', 'Mukũi pirá-itá.'],
  ['musapiri', 'três', 'numeral', 'Números', '3️⃣', 'Musapiri membira.'],
  ['irundí', 'quatro', 'numeral', 'Números', '4️⃣', 'Irundí kisé.'],
  ['pú', 'cinco (lit. “mão”)', 'numeral', 'Números', '5️⃣', 'Pú pirá-itá.'],
];

export const VOCAB_YRL = buildVocab('yrl', ROWS);
