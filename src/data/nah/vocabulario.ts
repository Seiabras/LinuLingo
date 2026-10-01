import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do náuatle clássico (o náuatle do Vale do México dos séculos XVI–XVIII, língua de
 * prestígio dos mexicas/astecas — ver a escolha da variedade em `index.ts`), na ortografia moderna
 * ACK (Andrews–Campbell–Karttunen): macron (ā, ē, ī, ō) para vogal longa e “h” para o saltillo
 * (oclusiva glotal), a mesma convenção do Wiktionary e do “An Analytical Dictionary of Nahuatl” de
 * Frances Karttunen.
 *
 * Cada palavra foi conferida no Wiktionary (seção “Classical Nahuatl”, que incorpora o dicionário de
 * Karttunen), no “Online Nahuatl Dictionary” da Wired Humanities Projects/Universidade de Oregon
 * (nahuatl.wired-humanities.org, com o Vocabulario de Alonso de Molina de 1555/1571) e, para a
 * gramática que gera os exemplos, no artigo “Classical Nahuatl grammar” da Wikipédia em inglês — ver
 * a lista completa no relatório da entrega.
 *
 * O náuatle clássico não marca gênero gramatical (não há artigos nem concordância de gênero como no
 * português — por isso `gender` fica sempre de fora aqui) e não tem verbo “ser”: um substantivo ou
 * adjetivo com o prefixo de pessoa certo já funciona como predicado completo (ver a gramática desta
 * unidade). Por isso vários exemplos abaixo seguem o padrão documentado “ni-/ti-/Ø- + predicado”
 * (ex.: “nicualli”, lit. “eu [sou] bom”), e não citações diretas de um texto colonial — são
 * combinações originais de morfemas e regras confirmados, no mesmo método usado nas frases de
 * exemplo do tupi antigo (tpw) e do quéchua (qu) deste app.
 */
export const ROWS: VocabRow[] = [
  // Expressões (saudações e fórmulas documentadas em fontes coloniais e no Wikibooks "Classical Nahuatl")
  ['Niltze', 'olá (saudação documentada do náuatle clássico)', 'interjeição', 'Expressões', '👋', '“Niltze!” “Tlazohcamati!”'],
  ['Tlazohcamati', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Niltze! Tlazohcamati!'],
  ['Quēmah', 'sim', 'interjeição', 'Expressões', '👍', '“Ticualli?” “Quēmah.”'],
  ['Ahmō', 'não', 'interjeição', 'Expressões', '👎', '“Ticualli?” “Ahmō.”'],
  ['Nimitzittaz', 'até logo (lit. “eu te verei”)', 'expressão', 'Expressões', '👋', 'Nimitzittaz, tlazohcamati!'],
  ['Tlēn motōcatzin?', 'qual é o seu nome? (forma de respeito, com o sufixo honorífico “-tzin”)', 'expressão', 'Expressões', '❓', 'Niltze! Tlēn motōcatzin?'],
  // Essenciais
  ['Quēn', 'como (advérbio interrogativo)', 'advérbio', 'Essenciais', '❓', 'Quēn ticualli?'],
  ['Calli', 'casa', 'substantivo', 'Essenciais', '🏠', 'Calli cualli.'],
  ['Cualli', 'bom, algo bom', 'adjetivo', 'Essenciais', '👍', 'Nicualli.'],
  // Pessoas: pronomes independentes (servem de ênfase; o prefixo de pessoa no predicado já basta)
  ['Nehhuātl', 'eu', 'pronome', 'Pessoas', '🙋', 'Nehhuātl nicihuātl.'],
  ['Tehhuātl', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Tehhuātl ticonētl.'],
  ['Yehhuātl', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Yehhuātl oquichtli.'],
  // Pessoas: família
  ['Nāntli', 'mãe', 'substantivo', 'Pessoas', '👩', 'Nonān cualli.'],
  ['Tahtli', 'pai', 'substantivo', 'Pessoas', '👨', 'Notah cualli.'],
  ['Conētl', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'Ticonētl.'],
  ['Cihuātl', 'mulher, esposa', 'substantivo', 'Pessoas', '👩', 'Nicihuātl.'],
  ['Oquichtli', 'homem, marido', 'substantivo', 'Pessoas', '🧑', 'Oquichtli cualli.'],
  ['Tēlpōchtli', 'rapaz, filho (jovem)', 'substantivo', 'Pessoas', '👦', 'Tēlpōchtli cualli.'],
  ['Ichpōchtli', 'moça, filha (jovem)', 'substantivo', 'Pessoas', '👧', 'Ichpōchtli cualli.'],
  // Verbos-chave
  ['Nemi', 'viver, morar, estar', 'verbo', 'Verbos-chave', '🏠', 'Ninemi.'],
  ['Itta', 'ver', 'verbo', 'Verbos-chave', '👀', 'Niquitta.'],
  ['Nequi', 'querer', 'verbo', 'Verbos-chave', '💭', 'Nicnequi.'],
  ['Cochi', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Nicochi.'],
  ['Tlacua', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Nitlacua.'],
  ['Tlahtoā', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Nitlahtoā.'],
  ['Chīhua', 'fazer', 'verbo', 'Verbos-chave', '🔨', 'Nicchīhua.'],
  ['Huītz', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Mēxihco in cihuātl huītz.'],
  ['Yāuh', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Yāuh in oquichtli.'],
  // Alimentação
  ['Tlaxcalli', 'tortilha (de milho)', 'substantivo', 'Alimentação e Restaurantes', '🫓', 'Nitlacua tlaxcalli.'],
  ['Cacahuatl', 'cacau', 'substantivo', 'Alimentação e Restaurantes', '🍫', 'Cacahuatl cualli.'],
  ['Tomatl', 'tomate, tomatilho', 'substantivo', 'Alimentação e Restaurantes', '🍅', 'Tomatl cualli.'],
  ['Āhuacatl', 'abacate', 'substantivo', 'Alimentação e Restaurantes', '🥑', 'Āhuacatl cualli.'],
  ['Chīlli', 'pimenta (chili)', 'substantivo', 'Alimentação e Restaurantes', '🌶️', 'Chīlli cualli.'],
  ['Nacatl', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Nitlacua nacatl.'],
  // Natureza
  ['Ātl', 'água', 'substantivo', 'Natureza', '💧', 'Ātl cualli.'],
  ['Tletl', 'fogo', 'substantivo', 'Natureza', '🔥', 'Tletl cualli.'],
  ['Tepētl', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Tepētl cualli.'],
  ['Mētztli', 'lua', 'substantivo', 'Natureza', '🌙', 'Mētztli cualli.'],
  ['Tōnatiuh', 'sol', 'substantivo', 'Natureza', '☀️', 'Tōnatiuh cualli.'],
  ['Citlālin', 'estrela', 'substantivo', 'Natureza', '⭐', 'Citlālin cualli.'],
  // Animais
  ['Tōchtli', 'coelho', 'substantivo', 'Animais', '🐇', 'Niquitta in tōchtli.'],
  ['Cuāuhtli', 'águia', 'substantivo', 'Animais', '🦅', 'Niquitta in cuāuhtli.'],
  ['Itzcuintli', 'cachorro', 'substantivo', 'Animais', '🐕', 'Niquitta in itzcuintli.'],
  ['Tōtōtl', 'pássaro', 'substantivo', 'Animais', '🐦', 'Niquitta in tōtōtl.'],
  ['Cōātl', 'cobra', 'substantivo', 'Animais', '🐍', 'Niquitta in cōātl.'],
  ['Coyōtl', 'coiote', 'substantivo', 'Animais', '🐺', 'Niquitta in coyōtl.'],
  // Corpo
  ['Īxtli', 'olho, rosto', 'substantivo', 'Corpo', '👁️', 'Īxtli cualli.'],
  ['Nacaztli', 'orelha', 'substantivo', 'Corpo', '👂', 'Nacaztli cualli.'],
  ['Yacatl', 'nariz', 'substantivo', 'Corpo', '👃', 'Yacatl cualli.'],
  ['Camatl', 'boca', 'substantivo', 'Corpo', '👄', 'Camatl cualli.'],
  ['Māitl', 'mão', 'substantivo', 'Corpo', '✋', 'Māitl cualli.'],
  ['Icxitl', 'pé', 'substantivo', 'Corpo', '🦶', 'Icxitl cualli.'],
  ['Tzontli', 'cabelo', 'substantivo', 'Corpo', '💇', 'Tzontli cualli.'],
  // Cores
  ['Iztāc', 'branco', 'adjetivo', 'Cores', '⚪', 'Calli iztāc.'],
  ['Tlīltic', 'preto', 'adjetivo', 'Cores', '⚫', 'Itzcuintli tlīltic.'],
  ['Chichiltic', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Tomatl chichiltic.'],
  ['Xoxoctic', 'verde', 'adjetivo', 'Cores', '🟢', 'Āhuacatl xoxoctic.'],
  ['Coztic', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Tōnatiuh coztic.'],
  // Números
  ['Cē', 'um', 'numeral', 'Números', '1️⃣', 'Cē itzcuintli.'],
  ['Ōme', 'dois', 'numeral', 'Números', '2️⃣', 'Ōme conētl.'],
  ['Ēyi', 'três', 'numeral', 'Números', '3️⃣', 'Ēyi tōtōtl.'],
  ['Nāhui', 'quatro', 'numeral', 'Números', '4️⃣', 'Nāhui tomatl.'],
  ['Mācuīlli', 'cinco', 'numeral', 'Números', '5️⃣', 'Mācuīlli calli.'],
];

export const VOCAB_NAH = buildVocab('nah', ROWS);
