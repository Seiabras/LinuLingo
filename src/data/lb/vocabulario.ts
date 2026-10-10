import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do luxemburguês (Lëtzebuergesch) na ortografia oficial em vigor, a revista em 2019
 * pelo Zenter fir d'Lëtzebuerger Sprooch (ZLS): substantivos com maiúscula e a «regra do n»
 * (Eifeler Regel), que apaga o -n final antes da maioria das consoantes («Ech hunn e Brudder»,
 * «Ech drénke Waasser»). Nos substantivos, a tradução traz o artigo: den (m), d' (f e n).
 * Palavras e frases conferidas no Wiktionary e no Omniglot. Idioma incompleto: A1 e A2 por enquanto.
 *
 * Nível A2 (ver `incomplete` em index.ts): os numerais 11-20 e as dezenas de 30 a 100 seguem
 * languagesandnumbers.com/Omniglot (eelef, zwielef irregulares; 13-19 com “-zéng”; dezenas com
 * “-zeg”, com “zéng” de 10 como exceção). Os verbos modais novos (kënnen, wëllen, mussen, sollen)
 * têm conjugação do presente confirmada no Wiktionary para “kënnen”; os demais seguem o mesmo
 * padrão regular de verbo modal (confiança média, mesma régua já usada no A1 para “heeschen”/
 * “kommen”). O passado composto (hunn/sinn + Partizip) segue o Wiktionary (“hunn” → “gehat”, “goen”
 * → “gaangen”, “maachen” → “gemaach”, “kachen” → “gekacht”, esta última com exemplo de frase real).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['Moien', 'oi, olá; bom dia (serve para o dia todo)', 'interjeição', 'Expressões', '👋', 'Moien! Wéi geet et?'],
  ['Gudde Moien', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Gudde Moien, Anna!'],
  ['Gudde Mëtteg', 'boa tarde', 'interjeição', 'Expressões', '🌞', 'Gudde Mëtteg! Ech heeschen Ana.'],
  ['Gudden Owend', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Gudden Owend! Wéi geet et?'],
  ['Gutt Nuecht', 'boa noite (ao ir dormir)', 'interjeição', 'Expressões', '🌙', 'Gutt Nuecht, bis muer!'],
  ['Äddi', 'tchau', 'interjeição', 'Expressões', '👋', 'Äddi, bis muer!'],
  ['Merci', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Villmools Merci!'],
  ['wannechgelift', 'por favor', 'interjeição', 'Expressões', '🙏', 'E Kaffi, wannechgelift.'],
  ['Entschëllegt', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', "Entschëllegt, wou ass d'Gare?"],
  ['wéi geet et?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Moien, Anna! Wéi geet et?'],
  // ── Essenciais ──
  ['jo', 'sim', 'advérbio', 'Essenciais', '👍', 'Jo, gär!'],
  ['nee', 'não (resposta)', 'advérbio', 'Essenciais', '👎', 'Nee, merci.'],
  ['net', 'não (nega o verbo ou um adjetivo)', 'advérbio', 'Essenciais', '🚫', 'Ech weess et net.'],
  ['an', 'e (vira “a” antes da maioria das consoantes)', 'conjunção', 'Essenciais', null, 'Brout a Kéis.'],
  ['oder', 'ou', 'conjunção', 'Essenciais', null, 'Kaffi oder Téi?'],
  ['vill', 'muito', 'advérbio', 'Essenciais', null, 'Ech drénken net vill Kaffi.'],
  ['och', 'também', 'advérbio', 'Essenciais', null, 'Ech schwätzen och Lëtzebuergesch.'],
  ['gär', 'com gosto (ech drénke gär Kaffi = gosto de tomar café)', 'advérbio', 'Essenciais', '😊', 'Ech léiere gär Lëtzebuergesch.'],
  ['wat', 'o que', 'pronome', 'Essenciais', '❓', 'Wat ass dat?'],
  ['wou', 'onde', 'advérbio', 'Essenciais', '❓', 'Wou wunns du?'],
  ['wéi', 'como', 'advérbio', 'Essenciais', '❓', 'Wéi heeschs du?'],
  ['vu wou', 'de onde', 'expressão', 'Essenciais', '❓', 'Vu wou kënns du?'],
  ['wien', 'quem', 'pronome', 'Essenciais', '❓', 'Wien ass dat?'],
  ['Haus', "casa (d'Haus)", 'substantivo', 'Casa', '🏠', 'Mäin Haus ass kleng.', 'n'],
  ['Stad', "cidade (d'Stad)", 'substantivo', 'Essenciais', '🏙️', 'Esch ass eng grouss Stad.', 'f'],
  ['Hond', 'cachorro (den Hond)', 'substantivo', 'Animais', '🐕', 'Den Hond ass grouss.', 'm'],
  ['Kaz', "gato (d'Kaz)", 'substantivo', 'Animais', '🐈', "D'Kaz ass schwaarz.", 'f'],
  ['gutt', 'bom; bem', 'adjetivo', 'Descrições', '👍', 'Et geet mir gutt.'],
  ['grouss', 'grande', 'adjetivo', 'Descrições', '📏', 'Meng Famill ass grouss.'],
  ['kleng', 'pequeno', 'adjetivo', 'Descrições', '📏', "D'Kaz ass kleng."],
  // ── Pessoas ──
  ['ech', 'eu', 'pronome', 'Pessoas', '🙋', 'Ech heeschen Anna.'],
  ['du', 'tu, você (informal)', 'pronome', 'Pessoas', '🫵', 'An du, wéi heeschs du?'],
  ['hien', 'ele (vira “hie” antes da maioria das consoantes)', 'pronome', 'Pessoas', '👨', 'Hien ass mäi Frënd.'],
  ['si', 'ela; eles, elas', 'pronome', 'Pessoas', '👩', 'Si ass meng Frëndin.'],
  ['mir', 'nós', 'pronome', 'Pessoas', '🙌', 'Mir si Frënn.'],
  ['dir', 'vocês (com maiúscula, Dir = o senhor, a senhora)', 'pronome', 'Pessoas', '👥', 'Wou wunnt dir?'],
  ['Numm', 'nome (den Numm)', 'substantivo', 'Pessoas', '🏷️', 'Mäin Numm ass Linu.', 'm'],
  ['Frënd', 'amigo (de Frënd)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Hien ass mäi Frënd.', 'm'],
  ['Frëndin', "amiga (d'Frëndin)", 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Si ass meng Frëndin.', 'f'],
  // ── Verbos-chave ──
  ['sinn', 'ser, estar (ech sinn, du bass, hien ass)', 'verbo', 'Verbos-chave', '🧑', 'Mir si Frënn.'],
  ['hunn', 'ter (ech hunn, du hues, hien huet)', 'verbo', 'Verbos-chave', '🤲', 'Ech hunn e Brudder.'],
  ['heeschen', 'chamar-se (ech heeschen, du heeschs)', 'verbo', 'Verbos-chave', '🏷️', 'Ech heeschen Ana.'],
  ['kommen', 'vir (ech komme vu… = eu sou de…)', 'verbo', 'Verbos-chave', '🧭', 'Ech komme vu Recife.'],
  ['schwätzen', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Schwätz du Lëtzebuergesch?'],
  ['wunnen', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Ech wunnen zu Porto Alegre.'],
  ['goen', 'ir (ech ginn, du gees, hie geet)', 'verbo', 'Verbos-chave', '🚶', 'Ech ginn heem.'],
  ['iessen', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ech iesse Brout mat Kéis.'],
  ['drénken', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ech drénke Waasser.'],
  ['gär hunn', 'gostar de (ech hunn … gär)', 'expressão', 'Verbos-chave', '❤️', 'Ech hu Kaffi gär.'],
  ['wëssen', 'saber (ech weess)', 'verbo', 'Verbos-chave', '🧠', 'Ech weess et net.'],
  ['wëllen', 'querer (ech wëll)', 'verbo', 'Verbos-chave', '💭', 'Ech wëll Lëtzebuergesch léieren.'],
  ['léieren', 'aprender; ensinar', 'verbo', 'Verbos-chave', '📚', 'Mir léiere Lëtzebuergesch.'],
  // ── Pessoas (família) ──
  ['Famill', "família (d'Famill)", 'substantivo', 'Pessoas', '👪', 'Meng Famill ass grouss.', 'f'],
  ['Mamm', "mãe (d'Mamm)", 'substantivo', 'Pessoas', '👩', 'Meng Mamm heescht Rosa.', 'f'],
  ['Papp', 'pai (de Papp)', 'substantivo', 'Pessoas', '👨', 'Mäi Papp heescht Tom.', 'm'],
  ['Brudder', 'irmão (de Brudder)', 'substantivo', 'Pessoas', '🧑', 'Ech hunn e Brudder.', 'm'],
  ['Schwëster', "irmã (d'Schwëster)", 'substantivo', 'Pessoas', '🧑', 'Ech hunn eng Schwëster.', 'f'],
  ['Jong', 'filho; menino (de Jong)', 'substantivo', 'Pessoas', '🧒', 'Hien huet e Jong.', 'm'],
  ['Duechter', "filha (d'Duechter)", 'substantivo', 'Pessoas', '🧒', 'Si huet eng Duechter.', 'f'],
  // ── Alimentação ──
  ['Waasser', "água (d'Waasser)", 'substantivo', 'Alimentação e Restaurantes', '💧', 'E Glas Waasser, wannechgelift.', 'n'],
  ['Brout', "pão (d'Brout)", 'substantivo', 'Alimentação e Restaurantes', '🍞', "D'Brout ass gutt.", 'n'],
  ['Mëllech', "leite (d'Mëllech)", 'substantivo', 'Alimentação e Restaurantes', '🥛', "D'Mëllech ass wäiss.", 'f'],
  ['Kéis', 'queijo (de Kéis)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'De Kéis ass gutt.', 'm'],
  ['Kaffi', 'café (de Kaffi)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'E Kaffi, wannechgelift.', 'm'],
  ['Wäin', 'vinho (de Wäin)', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'De Wäin ass rout.', 'm'],
  // ── Números ──
  ['eent', 'um', 'numeral', 'Números', '1️⃣', 'Eent, zwee, dräi!'],
  ['zwee', 'dois', 'numeral', 'Números', '2️⃣', 'Zwee Brout, wannechgelift.'],
  ['dräi', 'três', 'numeral', 'Números', '3️⃣', 'Ech hunn dräi Bridder.'],
  ['véier', 'quatro', 'numeral', 'Números', '4️⃣', 'Véier Deeg.'],
  ['fënnef', 'cinco', 'numeral', 'Números', '5️⃣', 'Fënnef Deeg.'],
  ['sechs', 'seis', 'numeral', 'Números', '6️⃣', 'Sechs Frënn.'],
  ['siwen', 'sete', 'numeral', 'Números', '7️⃣', "D'Woch huet siwen Deeg."],
  ['aacht', 'oito', 'numeral', 'Números', '8️⃣', 'Aacht Deeg.'],
  ['néng', 'nove', 'numeral', 'Números', '9️⃣', 'Néng Deeg.'],
  ['zéng', 'dez', 'numeral', 'Números', '🔟', 'Zéng Euro.'],
  // ── Tempo ──
  ['haut', 'hoje', 'advérbio', 'Tempo', '📅', 'Haut ass Méindeg.'],
  ['muer', 'amanhã', 'advérbio', 'Tempo', '📅', 'Bis muer!'],
  ['gëschter', 'ontem', 'advérbio', 'Tempo', '📅', 'Gëschter, haut a muer.'],
  ['Méindeg', 'segunda-feira (de Méindeg)', 'substantivo', 'Tempo', '📅', 'Haut ass Méindeg.', 'm'],
  ['Dënschdeg', 'terça-feira (den Dënschdeg)', 'substantivo', 'Tempo', '📅', 'Haut ass Dënschdeg.', 'm'],
  ['Mëttwoch', 'quarta-feira (de Mëttwoch)', 'substantivo', 'Tempo', '📅', 'Haut ass Mëttwoch.', 'm'],
  ['Donneschdeg', 'quinta-feira (den Donneschdeg)', 'substantivo', 'Tempo', '📅', 'Haut ass Donneschdeg.', 'm'],
  ['Freideg', 'sexta-feira (de Freideg)', 'substantivo', 'Tempo', '📅', 'Haut ass Freideg.', 'm'],
  ['Samschdeg', 'sábado (de Samschdeg)', 'substantivo', 'Tempo', '📅', 'Haut ass Samschdeg.', 'm'],
  ['Sonndeg', 'domingo (de Sonndeg)', 'substantivo', 'Tempo', '📅', 'Haut ass Sonndeg.', 'm'],
  // ── Cores ──
  ['rout', 'vermelho', 'adjetivo', 'Cores', '🔴', 'De Wäin ass rout.'],
  ['blo', 'azul', 'adjetivo', 'Cores', '🔵', 'Den Himmel ass blo.'],
  ['gréng', 'verde', 'adjetivo', 'Cores', '🟢', "D'Gras ass gréng."],
  ['wäiss', 'branco', 'adjetivo', 'Cores', '⚪', "D'Mëllech ass wäiss."],
  ['schwaarz', 'preto', 'adjetivo', 'Cores', '⚫', "D'Kaz ass schwaarz."],
  // ── A2.1: números maiores e verbos modais ──
  ['eelef', 'onze', 'numeral', 'Números', '✨', 'Eelef Deeg.'],
  ['zwielef', 'doze', 'numeral', 'Números', '✨', 'Zwielef Méint.'],
  ['zwanzeg', 'vinte', 'numeral', 'Números', '✨', 'Zwanzeg Joer.'],
  ['drësseg', 'trinta', 'numeral', 'Números', '✨', 'Drësseg Euro.'],
  ['honnert', 'cem', 'numeral', 'Números', '💯', 'Honnert Euro.'],
  ['kënnen', 'poder, saber (ech kann, du kanns, hien kann, mir kënnen)', 'verbo', 'Verbos-chave', '💪', 'Ech kann Lëtzebuergesch schwätzen.'],
  ['mussen', 'precisar, ter que (ech muss, du muss, hien muss)', 'verbo', 'Verbos-chave', '⏳', 'Ech muss elo goen.'],
  ['sollen', 'dever (ech soll, du solls, hien soll)', 'verbo', 'Verbos-chave', '☑️', 'Ech soll méi drénken.'],
  ['Woch', "semana (d'Woch)", 'substantivo', 'Tempo', '🗓️', "D'Woch huet siwen Deeg.", 'f'],
  ['Mount', 'mês (de Mount)', 'substantivo', 'Tempo', '📆', 'Dëse Mount ass schéin.', 'm'],
  ['Joer', "ano (d'Joer)", 'substantivo', 'Tempo', '🎊', "D'Joer huet zwielef Méint.", 'n'],
  // ── A2.2: tempo, cidade e compras ──
  ['Reen', 'chuva (de Reen)', 'substantivo', 'Essenciais', '🌧️', 'Haut ass Reen.', 'm'],
  ['Schnéi', 'neve (de Schnéi)', 'substantivo', 'Essenciais', '❄️', 'Am Wanter hu mir Schnéi.', 'm'],
  ['Wand', 'vento (de Wand)', 'substantivo', 'Essenciais', '🌬️', 'Haut ass vill Wand.', 'm'],
  ['Sonn', "sol (d'Sonn)", 'substantivo', 'Essenciais', '☀️', "D'Sonn schéngt haut.", 'f'],
  ['Schoul', "escola (d'Schoul)", 'substantivo', 'Essenciais', '🏫', 'Ech ginn an d’Schoul.', 'f'],
  ['Spidol', 'hospital (de Spidol)', 'substantivo', 'Essenciais', '🏥', 'Mäi Papp schafft am Spidol.'],
  ['Gare', "estação (d'Gare)", 'substantivo', 'Essenciais', '🚉', 'D’Gare ass grouss.', 'f'],
  ['Buttek', 'loja (de Buttek)', 'substantivo', 'Essenciais', '🏪', 'De Buttek ass op.', 'm'],
  ['Proff', 'professor(a) (de Proff)', 'substantivo', 'Pessoas', '🧑‍🏫', 'Mäi Proff ass gutt.'],
  ['Schüler', 'aluno/a (de Schüler)', 'substantivo', 'Pessoas', '🧑‍🎓', 'Ech sinn e Schüler.', 'm'],
  ['Kapp', 'cabeça (de Kapp)', 'substantivo', 'Corpo', '👤', 'Mäi Kapp deet mir wéi.', 'm'],
  ['Fouss', 'pé (de Fouss)', 'substantivo', 'Corpo', '🦶', 'Mäi Fouss ass kal.', 'm'],
  ['Kleed', 'vestido, roupa (d’Kleed)', 'substantivo', 'Essenciais', '👗', 'Dëst Kleed ass schéin.', 'n'],
  ['maachen', 'fazer (ech maachen, du méchs, hien mécht)', 'verbo', 'Verbos-chave', '🛠️', 'Wat maachs du?'],
  ['kachen', 'cozinhar (ech kachen, du kachs, hien kacht)', 'verbo', 'Verbos-chave', '🍳', 'Ech kachen gär.'],
  ['kafen', 'comprar (ech kafen, du kafs, hien kaaft)', 'verbo', 'Verbos-chave', '🛒', 'Ech kafen e Kleed.'],
  ['verkafen', 'vender (ech verkafen, du verkafs, hien verkaaft)', 'verbo', 'Verbos-chave', '💰', 'De Buttek verkeeft Brout.'],
  ['nei', 'novo', 'adjetivo', 'Descrições', '✨', 'Mäin Haus ass nei.'],
  ['al', 'velho', 'adjetivo', 'Descrições', '👴', "D'Gare ass al."],
  ['schéin', 'bonito', 'adjetivo', 'Descrições', '😍', 'Dëst Kleed ass schéin.'],
  ['deier', 'caro', 'adjetivo', 'Descrições', '💸', 'Dëst Buch ass deier.'],
  ['bëlleg', 'barato', 'adjetivo', 'Descrições', '🏷️', 'Dëse Kaffi ass bëlleg.'],
];

export const VOCAB_LB = buildVocab('lb', ROWS);
