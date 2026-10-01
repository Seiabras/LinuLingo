import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do cassubiano (kaszëbsczi jãzëk), eslavo ocidental da Pomerânia (norte da Polônia,
 * ao redor de Gdańsk). Grafia latina com diacríticos próprios (ë, ò, ô, ã), norma oficial desde
 * 2005. Todas as palavras conferidas no Appendix:Kashubian Swadesh list e em verbetes individuais
 * do Wiktionary (en.wiktionary.org), não inventadas. Idioma incompleto: por enquanto só o
 * suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['witôj', 'oi, olá, bem-vindo', 'interjeição', 'Expressões', '👋', 'Witôj! Jak sã môsz?'],
  ['dobri dzéń', 'bom dia, boa tarde', 'interjeição', 'Expressões', '🌅', 'Dobri dzéń, pani!'],
  ['dobri wieczór', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobri wieczór wszëtczim!'],
  ['dobri noc', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Dobri noc, mamo!'],
  ['do ùzdrzeniô', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Do ùzdrzeniô i dzãka!'],
  ['dzãkùjã', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Dzãkùjã bëlno!'],
  ['proszã', 'por favor', 'interjeição', 'Expressões', '🙏', 'Jednã kawã, proszã.'],
  ['przeprôszóm', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Przeprôszóm, dze je gard?'],
  ['jak sã môsz?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Witôj, Ano! Jak sã môsz?'],
  // ── Essenciais ──
  ['jo', 'sim', 'advérbio', 'Essenciais', '👍', 'Jo, dzãkùjã.'],
  ['nié', 'não', 'advérbio', 'Essenciais', '👎', 'Nié, dzãka.'],
  ['ë', 'e', 'conjunção', 'Essenciais', null, 'Chléb ë kawa.'],
  ['co', 'o que', 'pronome', 'Essenciais', '❓', 'Co to je?'],
  ['dze', 'onde', 'advérbio', 'Essenciais', '❓', 'Dze je gard?'],
  ['jak', 'como', 'advérbio', 'Essenciais', '❓', 'Jak sã nazéwôsz?'],
  ['chto', 'quem', 'pronome', 'Essenciais', '❓', 'Chto to je?'],
  ['gard', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Gduńsk je wiôldżi gard.', 'm'],
  ['chëcz', 'casa', 'substantivo', 'Casa', '🏠', 'Mòja chëcz je môłô.', 'f'],
  ['pies', 'cachorro', 'substantivo', 'Animais', '🐕', 'Pies spi.', 'm'],
  ['kòt', 'gato', 'substantivo', 'Animais', '🐈', 'Kòt je czôrny.', 'm'],
  ['wiôldżi', 'grande', 'adjetivo', 'Descrições', '📏', 'Gduńsk je wiôldżi.'],
  ['môłi', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Kòt je môłi.'],
  ['dobri', 'bom', 'adjetivo', 'Descrições', '👍', 'Chléb je dobri.'],
  // ── Pessoas ──
  ['jô', 'eu', 'pronome', 'Pessoas', '🙋', 'Jô jem z Kuritibë.'],
  ['të', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A të, jak sã nazéwôsz?'],
  ['òn', 'ele', 'pronome', 'Pessoas', '👨', 'Òn je z Gduńska.'],
  ['òna', 'ela', 'pronome', 'Pessoas', '👩', 'Òna je z Gdinie.'],
  ['më', 'nós', 'pronome', 'Pessoas', '🙌', 'Më gôdómë pò kaszëbskù.'],
  ['òni', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Òni mieszkają w Kaszëbach.'],
  ['miono', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mòje miono je Linu.', 'n'],
  ['drëch', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Òn je mòjim drëchã.', 'm'],
  // ── Verbos-chave ──
  ['bëc', 'ser, estar (jem, jes, je)', 'verbo', 'Verbos-chave', '🧑', 'Jô jem z Kuritibë.'],
  ['miec', 'ter (móm, môsz, mô)', 'verbo', 'Verbos-chave', '🤲', 'Jô móm brata.'],
  ['nazéwac sã', 'chamar-se (nazéwóm sã, nazéwôsz sã)', 'verbo', 'Verbos-chave', '🏷️', 'Jak sã nazéwôsz?'],
  ['gadac', 'falar (gadóm)', 'verbo', 'Verbos-chave', '🗣️', 'Jô gadóm pò kaszëbskù.'],
  ['żëc', 'morar, viver (żëjã)', 'verbo', 'Verbos-chave', '🏠', 'Jô żëjã w Gduńskù.'],
  ['chòdzëc', 'ir, andar (chòdzã)', 'verbo', 'Verbos-chave', '🚶', 'Jô chòdzã do chëczë.'],
  ['jesc', 'comer (jém)', 'verbo', 'Verbos-chave', '🍽️', 'Jô jém chléb.'],
  ['pic', 'beber (pijã)', 'verbo', 'Verbos-chave', '🥤', 'Jô pijã wòdã.'],
  ['wiedzec', 'saber (wiém)', 'verbo', 'Verbos-chave', '🧠', 'Jô nié wiém.'],
  // ── Pessoas (família) ──
  ['mac', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mòja mac mô na miono Anna.', 'f'],
  ['òjc', 'pai', 'substantivo', 'Pessoas', '👨', 'Mój òjc je z Kartuz.', 'm'],
  ['brat', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Jô móm brata.', 'm'],
  ['sostra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Jô móm sostrã.', 'f'],
  ['dzeckò', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'Dzeckò spi.', 'n'],
  // ── Alimentação ──
  ['wòda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Jednã wòdã, proszã.', 'f'],
  ['chléb', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Chléb je swiéżi.', 'm'],
  ['mlékò', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mlékò je biôłé.', 'n'],
  ['kawa', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Jednã kawã, proszã.', 'f'],
  // ── Números ──
  ['jeden', 'um', 'numeral', 'Números', '1️⃣', 'Jeden chléb, proszã.'],
  ['dwa', 'dois', 'numeral', 'Números', '2️⃣', 'Jô móm dwa psë.'],
  ['trzë', 'três', 'numeral', 'Números', '3️⃣', 'Trzë kawë, proszã.'],
  ['sztërë', 'quatro', 'numeral', 'Números', '4️⃣', 'Kòt mô sztërë nodżi.'],
  ['piãc', 'cinco', 'numeral', 'Números', '5️⃣', 'Piãc dni.'],
  ['szesc', 'seis', 'numeral', 'Números', '6️⃣', 'Szesc lat.'],
  ['sédem', 'sete', 'numeral', 'Números', '7️⃣', 'Tidzéń mô sédem dni.'],
  ['osem', 'oito', 'numeral', 'Números', '8️⃣', 'Osem gòdzin.'],
  ['dzewiãc', 'nove', 'numeral', 'Números', '9️⃣', 'Dzewiãc lat.'],
  ['dzesãc', 'dez', 'numeral', 'Números', '🔟', 'Dzesãc minut.'],
  // ── Tempo ──
  ['dzéń', 'dia', 'substantivo', 'Tempo', '📅', 'Dzysô je dobri dzéń.', 'm'],
  ['pòniedzôłk', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dzysô je pòniedzôłk.', 'm'],
  ['wtórk', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dzysô je wtórk.', 'm'],
  ['strzoda', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dzysô je strzoda.', 'f'],
  ['czwôrtk', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dzysô je czwôrtk.', 'm'],
  ['piątk', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dzysô je piątk.', 'm'],
  ['sobòta', 'sábado', 'substantivo', 'Tempo', '📅', 'Dzysô je sobòta.', 'f'],
  ['niedzela', 'domingo', 'substantivo', 'Tempo', '📅', 'Dzysô je niedzela.', 'f'],
  // ── Cores ──
  ['czerwòny', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Jabkò je czerwòné.'],
  ['zelony', 'verde', 'adjetivo', 'Cores', '🟢', 'Trôwa je zelonô.'],
  ['żôłti', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Słuńce je żôłté.'],
  ['biôłi', 'branco', 'adjetivo', 'Cores', '⚪', 'Mlékò je biôłé.'],
  ['czôrny', 'preto', 'adjetivo', 'Cores', '⚫', 'Kòt je czôrny.'],
];

export const VOCAB_CSB = buildVocab('csb', ROWS);
