import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tupi antigo (tupinambá), na ortografia moderna de Eduardo de Almeida Navarro
 * (“Método Moderno de Tupi Antigo” e “Dicionário de Tupi Antigo”, USP). Cada palavra foi conferida
 * em mais de uma fonte (ver o relatório da entrega para a lista completa). Língua extinta, sem
 * falantes nativos: os exemplos descrevem a vida na aldeia, não "de onde no Brasil você é".
 *
 * O tupi antigo não marca gênero gramatical nos substantivos (por isso `gender` fica sempre de fora
 * aqui) e tinha só quatro numerais nativos — o resto se dizia com “etá” (muitos), um traço real da
 * língua, explicado no card de cultura da unidade de números.
 */
export const ROWS: VocabRow[] = [
  // Expressões (cumprimentos e respostas documentados em fontes coloniais e no curso de Navarro)
  ['Ereîúrype?', 'oi (lit. “você veio?”, o cumprimento mais comum)', 'expressão', 'Expressões', '👋', 'Ereîúrype? Xe rera Linu.'],
  ['Pa, aîur', 'sim, eu vim (resposta ao cumprimento “Ereîúrype?”)', 'expressão', 'Expressões', '🙋', 'Pa, aîur! Endé?'],
  ['Eẽ', 'sim', 'interjeição', 'Expressões', '👍', 'Eẽ, aîur.'],
  ['Aani', 'não', 'interjeição', 'Expressões', '👎', 'Aani, xe aîkó óka pupé.'],
  ['Tupã irumo', 'tchau, adeus (lit. “com Tupã”, cunhada no contato com os jesuítas)', 'expressão', 'Expressões', '👋', 'Tupã irumo, Peró!'],
  ['Marãpe nde rera?', 'qual é o seu nome?', 'expressão', 'Expressões', '❓', 'Marãpe nde rera? — Xe rera Îara.'],
  // Essenciais
  ['kó', 'este, esta', 'pronome', 'Essenciais', '👉', 'Kó katu.'],
  ['marã', 'como, de que jeito', 'advérbio', 'Essenciais', '❓', 'Marãpe nde rera?'],
  ['mamõ', 'onde', 'advérbio', 'Essenciais', '❓', 'Mamõ suípe ereîur?'],
  ['oka', 'casa', 'substantivo', 'Essenciais', '🏠', 'Oka gûasu.'],
  ['katu', 'bom, bem', 'adjetivo', 'Essenciais', '👍', 'Pirá katu.'],
  ['poxy', 'ruim, feio', 'adjetivo', 'Essenciais', '👎', 'Ybytu poxy.'],
  // Pessoas: pronomes
  ['ixé', 'eu', 'pronome', 'Pessoas', '🙋', 'Ixé xe rera Linu.'],
  ['endé', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Marãpe nde rera, endé?'],
  ["a'e", 'ele, ela', 'pronome', 'Pessoas', '🧑', "A'e katu."],
  ['oré', 'nós (sem quem ouve)', 'pronome', 'Pessoas', '🙌', 'Oré oroîkó óka pupé.'],
  ['îandé', 'nós (com quem ouve)', 'pronome', 'Pessoas', '🙌', 'Taîasó, îandé!'],
  ['peẽ', 'vocês', 'pronome', 'Pessoas', '👥', "Peẽ pe'u pirá."],
  // Pessoas: família e nome
  ['réra', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Marãpe nde rera?'],
  ['sy', 'mãe', 'substantivo', 'Pessoas', '👩', 'Xe sy katu.'],
  ['tuba', 'pai', 'substantivo', 'Pessoas', '👨', 'Xe ruba gûasu.'],
  ["ta'yra", 'filho (dito pelo pai)', 'substantivo', 'Pessoas', '🧒', "Xe ta'yra mirĩ."],
  ['membyra', 'filho, filha (dito pela mãe)', 'substantivo', 'Pessoas', '🧒', 'Xe membyra porang.'],
  ['abá', 'homem, pessoa', 'substantivo', 'Pessoas', '🧑', 'Abá gûasu.'],
  ['kunhã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kunhã porang.'],
  ['mena', 'marido', 'substantivo', 'Pessoas', '🤵', 'Xe mena katu.'],
  ['emirekó', 'esposa', 'substantivo', 'Pessoas', '👰', 'Xe remirekó porang.'],
  // Verbos-chave
  ['ikó', 'estar, morar, existir', 'verbo', 'Verbos-chave', '🏠', 'Aîkó óka pupé.'],
  ['erekó', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Arekó membyra mokõî.'],
  ["'u", 'comer, beber', 'verbo', 'Verbos-chave', '🍽️', "A'u pirá."],
  ['ker', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Aker óka pupé.'],
  ['só', 'ir', 'verbo', 'Verbos-chave', '🚶', "Asó ka'a pupé."],
  ['îur', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Aîur ne irumo.'],
  ['kuab', 'saber, conhecer', 'verbo', 'Verbos-chave', '🧠', 'Akûab abanheenga.'],
  ['epîak', 'ver', 'verbo', 'Verbos-chave', '👀', 'Asepîak îagûara.'],
  ['potár', 'querer', 'verbo', 'Verbos-chave', '💭', "A'u-potár pirá."],
  ["nhe'eng", 'falar', 'verbo', 'Verbos-chave', '🗣️', "Xe nhe'eng abanheenga."],
  // Alimentação
  ["'y", 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', "'Y pupé aîkó."],
  ['pirá', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', "A'u pirá."],
  ['abati', 'milho', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Abati katu.'],
  ['kamby', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Kamby katu.'],
  ["u'i", 'farinha', 'substantivo', 'Alimentação e Restaurantes', '🌾', "U'i katu."],
  ['miapé', 'pão (lit. “bolo achatado”, adaptado para o pão europeu)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Miapé katu.'],
  ["embi'u", 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍽️', "Embi'u katu."],
  ['ybá', 'fruta', 'substantivo', 'Alimentação e Restaurantes', '🍈', 'Ybá pirang.'],
  // Natureza
  ['tatá', 'fogo', 'substantivo', 'Natureza', '🔥', 'Tatá gûasu.'],
  ['yby', 'terra', 'substantivo', 'Natureza', '🌍', 'Yby porang.'],
  ['ybaka', 'céu', 'substantivo', 'Natureza', '☁️', 'Ybaka porang.'],
  ["ka'a", 'mato, floresta', 'substantivo', 'Natureza', '🌳', "Ka'a gûasu."],
  ['ybyrá', 'árvore', 'substantivo', 'Natureza', '🌲', 'Ybyrá puku.'],
  ['itá', 'pedra', 'substantivo', 'Natureza', '🪨', 'Itá gûasu.'],
  ['kûarahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Kûarahy katu.'],
  ['jasy', 'lua', 'substantivo', 'Natureza', '🌙', 'Jasy porang.'],
  // Animais
  ['îagûara', 'onça', 'substantivo', 'Animais', '🐆', 'Asepîak îagûara.'],
  ['gûyrá', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Gûyrá mirĩ.'],
  ['tatu', 'tatu', 'substantivo', 'Animais', '🦔', 'Tatu mirĩ.'],
  ['îakaré', 'jacaré', 'substantivo', 'Animais', '🐊', 'Îakaré gûasu.'],
  ['kururu', 'sapo', 'substantivo', 'Animais', '🐸', 'Kururu mirĩ.'],
  ['arara', 'arara', 'substantivo', 'Animais', '🦜', 'Arara pirang.'],
  // Corpo
  ['akanga', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Xe akanga.'],
  ['tĩ', 'nariz', 'substantivo', 'Corpo', '👃', 'Xe tĩ.'],
  ['resá', 'olho', 'substantivo', 'Corpo', '👁️', 'Xe resá.'],
  ['nambi', 'orelha', 'substantivo', 'Corpo', '👂', 'Xe nambi.'],
  ['îuru', 'boca', 'substantivo', 'Corpo', '👄', 'Xe îuru.'],
  ['pó', 'mão', 'substantivo', 'Corpo', '✋', 'Xe pó.'],
  ['py', 'pé', 'substantivo', 'Corpo', '🦶', 'Xe py.'],
  // Cores
  ['pirang', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ybá pirang.'],
  ['oby', 'verde', 'adjetivo', 'Cores', '🟢', "Ka'a oby."],
  ['obyeté', 'azul', 'adjetivo', 'Cores', '🔵', 'Ybaka obyeté.'],
  ['tinga', 'branco', 'adjetivo', 'Cores', '⚪', 'Gûyrá tinga.'],
  ['un', 'preto', 'adjetivo', 'Cores', '⚫', 'Îagûara un.'],
  // Qualidades
  ['gûasu', 'grande', 'adjetivo', 'Essenciais', '📏', 'Oka gûasu.'],
  ['mirĩ', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Tatu mirĩ.'],
  ['porang', 'bonito', 'adjetivo', 'Essenciais', '✨', 'Kunhã porang.'],
  ['puku', 'comprido, alto', 'adjetivo', 'Essenciais', '📏', 'Ybyrá puku.'],
  // Números (o tupi antigo só tinha numerais nativos de 1 a 4)
  ['oîepé', 'um', 'numeral', 'Números', '1️⃣', 'Oîepé pirá.'],
  ['mokõî', 'dois', 'numeral', 'Números', '2️⃣', 'Mokõî membyra.'],
  ['mosapyr', 'três', 'numeral', 'Números', '3️⃣', 'Mosapyr abá.'],
  ['irundyk', 'quatro', 'numeral', 'Números', '4️⃣', 'Irundyk ybá.'],
];

export const VOCAB_TPW = buildVocab('tpw', ROWS);
