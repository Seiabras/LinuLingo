import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mapudungún (mapuche), na grafia do Alfabeto Unificado — o grafemário mais difundido
 * no ensino (ver gramatica.ts, tópico sobre os três alfabetos em disputa: Unificado, Raguileo e
 * Azümchefe). Fontes: pt.wikipedia.org/wiki/Língua_mapuche, en.wikipedia.org/wiki/Mapuche_language,
 * es.wikipedia.org/wiki/Idioma_mapuche, es.wikipedia.org/wiki/Mapuche, es.wikipedia.org/wiki/Wenufoye
 * (cores da bandeira mapuche), en.wiktionary.org (categoria “Mapudungun lemmas” e verbetes individuais:
 * mari mari, pewkajal, lamngen, piwke, ge, kuwv, kelv, karv, kurv, pici, pewen, kofke, ilo, amun, nien,
 * pvtokon), es.wiktionary.org/wiki/küme, e en.wikibooks.org/wiki/Mapudungun (Lesson 1, Anatomy, Numbers,
 * Moods).
 *
 * Boa parte do Wiktionary em inglês usa a grafia Raguileo, não a Unificada: convertemos palavra por
 * palavra com as correspondências que a própria pt.wikipedia.org/wiki/Língua_mapuche documenta na
 * tabela dos três alfabetos (seção “Escrita”) — “v” (Raguileo) = “ü” (Unificado), “c” = “ch”, “j” =
 * “ll” — e conferimos cada troca contra um segundo par já publicado em grafia Unificada sempre que
 * possível (ex.: “ayja”/Raguileo e “aylla”/Unificado, os dois para o numeral 9, confirmam “j” = “ll”).
 * Nenhuma palavra nova foi criada: só a mesma palavra, re-escrita com outro alfabeto.
 *
 * Frases de exemplo: como o mapudungún tem ordem de palavras flexível e verbos fortemente aglutinantes
 * (sufixos de pessoa -n/-mi/-y, ver gramatica.ts), preferimos um modelo pequeno e 100% verificado a
 * inventar frases idiomáticas. Duas frases são citadas tal qual pela fonte: “Iñche nien kiñe ruka”
 * (“eu tenho uma casa”, do capítulo de modos verbais do Wikibooks) e “Iñche kafey” (“eu também”, da
 * Lesson 1 do mesmo curso). As demais frases nominais combinam só palavras e padrões confirmados: a
 * ordem agente-verbo-objeto nas transitivas (confirmada em en.wikipedia.org/wiki/Mapuche_language,
 * seção “Syntax”), o verbo “pen” (ver) e o numeral “kiñe” (um) antes do nome (também atestado em “kiñe
 * ruka”). Para as cores e para “pichi”/“küme”, como nenhuma fonte consultada atesta a ordem
 * adjetivo-nome nem uma construção de predicado sem cópula, optamos por inserí-los sempre no mesmo
 * lugar testemunhado (antes do nome, no molde de “wentru pichiche”/“domo pichiche”) dentro da mesma
 * frase-modelo “Iñche pen kiñe ___ ruka”, em vez de arriscar uma conjugação não atestada.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['mari mari', 'olá (saudação)', 'interjeição', 'Expressões', '👋', '¡Mari mari, lamngen!'],
  ['pewkallal', 'tchau, até logo', 'interjeição', 'Expressões', '🚶', '¡Pewkallal, lamngen!'],
  ['chumleymi', 'como você está?', 'expressão', 'Expressões', '🙂', '¿Chumleymi, lamngen?'],
  ['kümelen', 'eu estou bem (de küme “bom” + -le- “estar” + -n “eu”)', 'expressão', 'Expressões', '👌', 'Kümelen, kafey.'],
  ['kafey', 'também', 'advérbio', 'Expressões', '➕', 'Iñche kafey.'],
  // ── Essenciais ──
  ['iney', 'quem', 'pronome', 'Essenciais', '❓', '¿Iney?'],
  ['chem', 'o quê, o que', 'pronome', 'Essenciais', '❓', '¿Chem pimi?'],
  ['chew', 'onde', 'advérbio', 'Essenciais', '❓', '¿Chew?'],
  ['chumngelu', 'por quê', 'advérbio', 'Essenciais', '❓', '¿Chumngelu?'],
  // ── Pessoas ──
  ['iñche', 'eu', 'pronome', 'Pessoas', '🙋', 'Iñche nien kiñe ruka.'],
  ['eymi', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Eymi kafey.'],
  ['fey', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Fey kafey.'],
  ['iñchiñ', 'nós', 'pronome', 'Pessoas', '🙌', 'Iñchiñ kafey.'],
  ['che', 'pessoa, gente', 'substantivo', 'Pessoas', '🧑', 'Iñche pen kiñe che.'],
  ['wentru', 'homem', 'substantivo', 'Pessoas', '🧔', 'Iñche pen kiñe wentru.'],
  ['domo', 'mulher', 'substantivo', 'Pessoas', '👩', 'Iñche pen kiñe domo.'],
  ['ñuke', 'mãe', 'substantivo', 'Pessoas', '🤱', 'Iñche pen kiñe ñuke.'],
  ['chaw', 'pai', 'substantivo', 'Pessoas', '👨', 'Iñche pen kiñe chaw.'],
  ['lamngen', 'irmão, irmã (sem marcar gênero)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', '¡Mari mari, lamngen!'],
  ['peñi', 'irmão (forma usada entre homens)', 'substantivo', 'Pessoas', '👬', '¡Mari mari, peñi!'],
  ['fücha', 'homem idoso, ancião', 'substantivo', 'Pessoas', '👴', 'Iñche pen kiñe fücha.'],
  ['wentru pichiche', 'menino (literalmente “homem pequeno-pessoa”)', 'substantivo', 'Pessoas', '👦', 'Iñche pen kiñe wentru pichiche.'],
  ['domo pichiche', 'menina (literalmente “mulher pequeno-pessoa”)', 'substantivo', 'Pessoas', '👧', 'Iñche pen kiñe domo pichiche.'],
  // ── Natureza ──
  ['mapu', 'terra', 'substantivo', 'Natureza', '🌍', 'Iñche pen kiñe mapu.'],
  ['ko', 'água', 'substantivo', 'Natureza', '💧', 'Iñche pütokon ko.'],
  ['antü', 'sol, dia', 'substantivo', 'Natureza', '☀️', 'Iñche pen kiñe antü.'],
  ['pewen', 'araucária, pinheiro-do-chile (deu “pehuén” em espanhol)', 'substantivo', 'Natureza', '🌲', 'Iñche pen kiñe pewen.'],
  ['lafken', 'mar, lago', 'substantivo', 'Natureza', '🌊', 'Iñche pen kiñe lafken.'],
  // ── Animais ──
  ['achawall', 'galinha', 'substantivo', 'Animais', '🐔', 'Iñche pen kiñe achawall.'],
  ['alka achawall', 'galo', 'substantivo', 'Animais', '🐓', 'Iñche pen kiñe alka achawall.'],
  ['luan', 'guanaco', 'substantivo', 'Animais', '🦙', 'Iñche pen kiñe luan.'],
  ['mañke', 'condor', 'substantivo', 'Animais', '🦅', 'Iñche pen kiñe mañke.'],
  ['yeku', 'biguá, cormorão', 'substantivo', 'Animais', '🐦', 'Iñche pen kiñe yeku.'],
  // ── Alimentação e Restaurantes ──
  ['kofke', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Iñche pen kiñe kofke.'],
  ['ilo', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'Iñche pen kiñe ilo.'],
  ['poñü', 'batata', 'substantivo', 'Alimentação e Restaurantes', '🥔', 'Iñche pen kiñe poñü.'],
  // ── Corpo ──
  ['ge', 'olho', 'substantivo', 'Corpo', '👁️', 'Iñche pen kiñe ge.'],
  ['piwke', 'coração', 'substantivo', 'Corpo', '❤️', 'Iñche pen kiñe piwke.'],
  ['kuwü', 'mão', 'substantivo', 'Corpo', '✋', 'Iñche pen kiñe kuwü.'],
  // ── Casa ──
  ['ruka', 'casa', 'substantivo', 'Casa', '🏠', 'Iñche nien kiñe ruka.'],
  // ── Números ──
  ['kiñe', 'um', 'numeral', 'Números', '1️⃣', 'Kiñe ruka.'],
  ['epu', 'dois', 'numeral', 'Números', '2️⃣', 'Epu ruka.'],
  ['küla', 'três', 'numeral', 'Números', '3️⃣', 'Küla ruka.'],
  ['meli', 'quatro', 'numeral', 'Números', '4️⃣', 'Meli ruka.'],
  ['kechu', 'cinco', 'numeral', 'Números', '5️⃣', 'Kechu ruka.'],
  ['kayu', 'seis', 'numeral', 'Números', '6️⃣', 'Kayu ruka.'],
  ['regle', 'sete', 'numeral', 'Números', '7️⃣', 'Regle ruka.'],
  ['pura', 'oito', 'numeral', 'Números', '8️⃣', 'Pura ruka.'],
  ['aylla', 'nove', 'numeral', 'Números', '9️⃣', 'Aylla ruka.'],
  ['mari', 'dez', 'numeral', 'Números', '🔟', 'Mari ruka.'],
  // ── Verbos-chave ──
  ['pin', 'dizer', 'verbo', 'Verbos-chave', '🗣️', 'Iñche pin.'],
  ['pen', 'ver', 'verbo', 'Verbos-chave', '👀', 'Iñche pen kiñe ruka.'],
  ['konün', 'entrar', 'verbo', 'Verbos-chave', '🚪', 'Iñche konün.'],
  ['umawtun', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Iñche umawtun.'],
  ['amun', 'ir, andar', 'verbo', 'Verbos-chave', '🚶', 'Iñche amun.'],
  ['nien', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Iñche nien kiñe ruka.'],
  ['pütokon', 'beber água', 'verbo', 'Verbos-chave', '🥤', 'Iñche pütokon.'],
  // ── Cores ──
  ['kelü', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Iñche pen kiñe kelü ruka.'],
  ['karü', 'verde', 'adjetivo', 'Cores', '🟢', 'Iñche pen kiñe karü ruka.'],
  ['kurü', 'preto', 'adjetivo', 'Cores', '⚫', 'Iñche pen kiñe kurü ruka.'],
  ['lig', 'branco', 'adjetivo', 'Cores', '⚪', 'Iñche pen kiñe lig ruka.'],
  ['kallfü', 'azul', 'adjetivo', 'Cores', '🔵', 'Iñche pen kiñe kallfü ruka.'],
  ['chod', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Iñche pen kiñe chod ruka.'],
  // ── Descrições ──
  ['pichi', 'pequeno', 'adjetivo', 'Descrições', '🤏', 'Iñche pen kiñe pichi ruka.'],
  ['küme', 'bom', 'adjetivo', 'Descrições', '👍', 'Iñche pen kiñe küme ruka.'],
];

export const VOCAB_ARN = buildVocab('arn', ROWS);
