import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do sami do norte (davvisámegiella), a variedade sami mais falada — ver a nota em
 * index.ts sobre por que esta variedade e não outra língua sami. Idioma incompleto: por enquanto só
 * o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * Toda palavra foi conferida em fontes reais antes de entrar aqui:
 * - Wiktionary (en.wiktionary.org), verbete a verbete, nas seções “Northern Sami” de cada palavra
 *   (definição, classe gramatical e, para substantivos/verbos, a tabela de declinação/conjugação).
 * - A categoria “Northern Sami phrasebook” do Wiktionary (en.wiktionary.org/wiki/Category:Northern_Sami_phrasebook)
 *   para as saudações e expressões fixas (bures, giitu, mana dearvan, leage buorre, mu namma lea…).
 * - A lista Swadesh urálica do Wiktionary (Appendix:Uralic_Swadesh_lists), coluna do sami do norte,
 *   para pronomes, números e vocabulário básico.
 * - A Wikipédia em inglês (“Northern Sámi”, “Sámi languages”, “Reindeer husbandry”, “Sámi people”)
 *   para os fatos culturais e gramaticais citados em curriculo.ts e gramatica.ts.
 *
 * As palavras de pastorícia de renas (boazu, miessi, čoarvi) são um destaque cultural verificado, não
 * um enfeite: o sami do norte tem mesmo um vocabulário muito mais específico para renas (por idade,
 * sexo, cor e formato da galhada) do que o português — aqui entram só os termos que foram conferidos.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bures', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Bures! Mun lean Elle.'],
  ['buorre iđit', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Buorre iđit!'],
  ['buorre beaivi', 'bom dia, boa tarde (lit. “bom dia”, usado o dia todo)', 'interjeição', 'Expressões', '☀️', 'Buorre beaivi!'],
  ['buorre eahket', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Buorre eahket!'],
  ['mana dearvan', 'tchau (dito a quem vai embora)', 'interjeição', 'Expressões', '👋', 'Mana dearvan!'],
  ['giitu', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Giitu, Elle!'],
  ['leage buorre', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Káffe, leage buorre.'],
  // ── Essenciais ──
  ['juo', 'sim', 'interjeição', 'Essenciais', '👍', 'Juo, giitu!'],
  ['ii', 'não', 'advérbio', 'Essenciais', '👎', 'Ii, giitu.'],
  ['ja', 'e', 'conjunção', 'Essenciais', null, 'Áhčči ja eadni.'],
  ['gii', 'quem', 'pronome', 'Essenciais', '❓', 'Gii don leat?'],
  ['mu namma lea', 'meu nome é', 'expressão', 'Essenciais', '🏷️', 'Mu namma lea Elle.'],
  ['mii du namma lea', 'qual é o seu nome', 'expressão', 'Essenciais', '❓', 'Mii du namma lea?'],
  ['man boaris don leat', 'quantos anos você tem', 'expressão', 'Essenciais', '🎂', 'Man boaris don leat?'],
  // ── Pessoas ──
  ['mun', 'eu', 'pronome', 'Pessoas', '🙋', 'Mun lean Elle.'],
  ['don', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Don leat ustit.'],
  ['son', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Son lea áhčči.'],
  ['mii', 'nós (mais de dois)', 'pronome', 'Pessoas', '🙌', 'Mii leat dáppe.'],
  ['dii', 'vocês (mais de dois)', 'pronome', 'Pessoas', '🫵', 'Dii lehpet dáppe.'],
  ['sii', 'eles, elas (mais de dois)', 'pronome', 'Pessoas', '👥', 'Sii leat dáppe.'],
  ['olmmoš', 'pessoa, ser humano', 'substantivo', 'Pessoas', '🧑', 'Son lea buorre olmmoš.'],
  ['mánná', 'criança', 'substantivo', 'Pessoas', '🧒', 'Dát lea mu mánná.'],
  ['almmái', 'homem', 'substantivo', 'Pessoas', '👨', 'Son lea almmái.'],
  ['nissonolmmoš', 'mulher', 'substantivo', 'Pessoas', '👩', 'Son lea nissonolmmoš.'],
  ['eadni', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mu eadni lea Elle.'],
  ['áhčči', 'pai', 'substantivo', 'Pessoas', '👨', 'Mu áhčči lea Ánte.'],
  ['viellja', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mus lea okta viellja.'],
  ['oabbá', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mus lea okta oabbá.'],
  ['ustit', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Dát lea mu ustit.'],
  // ── Natureza ──
  ['beaivi', 'sol; dia', 'substantivo', 'Natureza', '☀️', 'Dát lea beaivi.'],
  ['jávri', 'lago', 'substantivo', 'Natureza', '🏞️', 'Jávri lea stuoris.'],
  ['muorra', 'árvore', 'substantivo', 'Natureza', '🌳', 'Muorra lea stuoris.'],
  // ── Animais ──
  ['beana', 'cachorro', 'substantivo', 'Animais', '🐕', 'Mus lea beana.'],
  ['boazu', 'rena', 'substantivo', 'Animais', '🦌', 'Mus lea okta boazu.'],
  ['miessi', 'bezerro de rena', 'substantivo', 'Animais', '🦌', 'Mus lea okta miessi.'],
  ['čoarvi', 'chifre, galhada', 'substantivo', 'Animais', '🦴', 'Čoarvi lea stuoris.'],
  // ── Alimentação e Restaurantes ──
  ['čáhci', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Mus lea čáhci.'],
  ['láibi', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Mus lea láibi.'],
  ['mielki', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mus lea mielki.'],
  ['káffe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Mus lea káffe.'],
  // ── Corpo ──
  ['čalbmi', 'olho', 'substantivo', 'Corpo', '👁️', 'Dát lea mu čalbmi.'],
  ['juolgi', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'Dát lea mu juolgi.'],
  ['giehta', 'mão', 'substantivo', 'Corpo', '✋', 'Dát lea mu giehta.'],
  ['váibmu', 'coração', 'substantivo', 'Corpo', '❤️', 'Dát lea mu váibmu.'],
  // ── Casa ──
  ['goahti', 'tenda, choupana (moradia tradicional sami)', 'substantivo', 'Casa', '⛺', 'Mus lea goahti.'],
  ['viessu', 'casa', 'substantivo', 'Casa', '🏠', 'Mus lea viessu.'],
  ['ruoktu', 'lar, casa', 'substantivo', 'Casa', '🏡', 'Dát lea mu ruoktu.'],
  // ── Números ──
  ['okta', 'um', 'numeral', 'Números', '1️⃣', 'Mun lean okta jagi boaris.'],
  ['guokte', 'dois', 'numeral', 'Números', '2️⃣', 'Mun lean guokte jagi boaris.'],
  ['golbma', 'três', 'numeral', 'Números', '3️⃣', 'Mun lean golbma jagi boaris.'],
  ['njeallje', 'quatro', 'numeral', 'Números', '4️⃣', 'Mun lean njeallje jagi boaris.'],
  ['vihtta', 'cinco', 'numeral', 'Números', '5️⃣', 'Mun lean vihtta jagi boaris.'],
  ['guhtta', 'seis', 'numeral', 'Números', '6️⃣', 'Mun lean guhtta jagi boaris.'],
  // ── Verbos-chave ──
  ['leat', 'ser, estar; ter (com o possuidor no locativo: “mus lea” = eu tenho)', 'verbo', 'Verbos-chave', '🧑', 'Mun lean Elle.'],
  ['borrat', 'comer (mun boran)', 'verbo', 'Verbos-chave', '🍽️', 'Mun boran.'],
  ['mannat', 'ir (mun manan)', 'verbo', 'Verbos-chave', '🚶', 'Mun manan.'],
  ['oahppat', 'aprender (mun oahpan)', 'verbo', 'Verbos-chave', '📚', 'Mun oahpan.'],
  // ── Cores/Descrições ──
  ['ruoksat', 'vermelho', 'adjetivo', 'Cores/Descrições', '🔴', 'Dát lea ruoksat.'],
  ['ruoná', 'verde', 'adjetivo', 'Cores/Descrições', '🟢', 'Dát lea ruoná.'],
  ['stuoris', 'grande', 'adjetivo', 'Cores/Descrições', '📏', 'Boazu lea stuoris.'],
];

export const VOCAB_SE = buildVocab('se', ROWS);
