import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do quéchua sulenho (quéchua cusquenho-boliviano, “Qusqu-Qullaw”, classificação
 * Quéchua II-C), a variedade mais falada e mais ensinada entre as várias línguas quéchuas — ver o
 * campo `incomplete` em index.ts. Toda palavra foi conferida em dicionários e fontes de referência
 * (Wiktionary, Glosbe qu-es, Wikipédia, Omniglot) antes de entrar aqui; nenhuma foi “adivinhada” por
 * semelhança com o espanhol ou com outra língua indígena.
 *
 * O apóstrofo marca as consoantes ejetivas (p', t', ch', k', q'), parte da ortografia oficial — não
 * é uma aspa de citação. O quéchua não marca gênero gramatical (sem artigos nem concordância de
 * gênero), por isso nenhuma linha abaixo usa o campo de gênero do `VocabRow`.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['napaykullayki', 'olá (cumprimento, lit. “eu te saúdo”)', 'interjeição', 'Expressões', '👋', 'Napaykullayki, taytay!'],
  ['allillanchu', 'como vai? (lit. “você está bem?”)', 'expressão', 'Expressões', '🙂', '¿Allillanchu, mamay?'],
  ['allinmi', 'bem, estou bem (resposta ao cumprimento)', 'expressão', 'Expressões', '👍', 'Allinmi, sulpayki.'],
  ['allin p\'unchay', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Allin p\'unchay, taytay!'],
  ['allin tuta', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Allin tuta, mamay.'],
  ['tupananchiskama', 'tchau, até a próxima (lit. “até nos encontrarmos de novo”)', 'interjeição', 'Expressões', '👋', 'Tupananchiskama!'],
  ['sulpayki', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Sulpayki, mamay!'],
  ['allichu', 'por favor', 'interjeição', 'Expressões', '🙏', 'Yakuta, allichu.'],
  ['pampachaway', 'desculpe, com licença', 'interjeição', 'Expressões', '🙏', 'Pampachaway, taytay.'],
  ['arí', 'sim', 'advérbio', 'Expressões', '👍', 'Arí, sulpayki.'],
  ['mana', 'não', 'advérbio', 'Expressões', '👎', 'Mana, sulpayki.'],
  // ── Essenciais ──
  ['ima', 'o que', 'pronome', 'Essenciais', '❓', '¿Ima kay?'],
  ['pi', 'quem', 'pronome', 'Essenciais', '❓', '¿Pi kanki?'],
  ['maypi', 'onde', 'advérbio', 'Essenciais', '❓', '¿Maypi kanki?'],
  ['imayna', 'como', 'advérbio', 'Essenciais', '❓', '¿Imaynam kanki?'],
  ['hayk\'aq', 'quando', 'advérbio', 'Essenciais', '❓', '¿Hayk\'aq hamunki?'],
  // ── Pessoas ──
  ['ñuqa', 'eu', 'pronome', 'Pessoas', '🙋', 'Ñuqa Qusqumanta kani.'],
  ['qam', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Qam allinmi kanki.'],
  ['pay', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Pay wasipi kan.'],
  ['ñuqanchik', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ñuqanchik runakuna kanchik.'],
  ['ñuqayku', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ñuqayku Qusqumanta kayku.'],
  ['qamkuna', 'vocês', 'pronome', 'Pessoas', '👥', 'Qamkuna allinmi kankichik.'],
  ['paykuna', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Paykuna wasipi kanku.'],
  ['suti', 'nome', 'substantivo', 'Pessoas', '🏷️', '¿Imataq sutiyki?'],
  ['runa', 'pessoa, gente, ser humano', 'substantivo', 'Pessoas', '🧑', 'Pay runa kan.'],
  ['warmi', 'mulher', 'substantivo', 'Pessoas', '👩', 'Warmi wasipi kan.'],
  ['qhari', 'homem', 'substantivo', 'Pessoas', '👨', 'Qhari allquwan kan.'],
  ['ayllu', 'família extensa, comunidade de parentes (noção andina, mais ampla que a família nuclear)', 'substantivo', 'Pessoas', '👪', 'Aylluy hatunmi.'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mamay allinmi.'],
  ['tayta', 'pai', 'substantivo', 'Pessoas', '👨', 'Taytay Qusqumanta kan.'],
  ['wawqi', 'irmão (dito por um homem)', 'substantivo', 'Pessoas', '🧑', 'Wawqiy allinmi kan.'],
  ['pana', 'irmã (dita por um homem)', 'substantivo', 'Pessoas', '👧', 'Panay wasipi kan.'],
  ['tura', 'irmão (dito por uma mulher)', 'substantivo', 'Pessoas', '🧑', 'Turay Qusqupi kan.'],
  ['ñaña', 'irmã (dita por uma mulher)', 'substantivo', 'Pessoas', '👧', 'Ñañay allinmi kan.'],
  ['churi', 'filho (dito por um homem)', 'substantivo', 'Pessoas', '👦', 'Churiy allinmi kan.'],
  ['ususi', 'filha (dita por um homem)', 'substantivo', 'Pessoas', '👧', 'Ususiy allinmi kan.'],
  ['wawa', 'bebê, criança (sem marcar o gênero de quem fala)', 'substantivo', 'Pessoas', '👶', 'Wawa puñun.'],
  ['wasi', 'casa', 'substantivo', 'Pessoas', '🏠', 'Wasiy hatunmi.'],
  // ── Verbos-chave ──
  ['kay', 'ser, estar (ñuqa kani, qam kanki, pay kan)', 'verbo', 'Verbos-chave', '🧑', 'Ñuqa Qusqumanta kani.'],
  ['mikhuy', 'comer (ñuqa mikhuni)', 'verbo', 'Verbos-chave', '🍽️', 'Ñuqa t\'antata mikhuni.'],
  ['upyay', 'beber (ñuqa upyani)', 'verbo', 'Verbos-chave', '🥤', 'Qam yakuta upyanki.'],
  ['rimay', 'falar (ñuqa rimani)', 'verbo', 'Verbos-chave', '🗣️', 'Ñuqa runasimita rimani.'],
  ['yachay', 'saber (ñuqa yachani)', 'verbo', 'Verbos-chave', '🧠', 'Mana yachanichu.'],
  ['munay', 'querer, gostar, amar (ñuqa munani)', 'verbo', 'Verbos-chave', '❤️', 'Runasimita munani.'],
  ['puriy', 'andar, caminhar (ñuqa purini)', 'verbo', 'Verbos-chave', '🚶', 'Urqupi purini.'],
  ['hamuy', 'vir (ñuqa hamuni)', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Qusqumanta hamuni.'],
  ['riy', 'ir (ñuqa rini)', 'verbo', 'Verbos-chave', '🚶', 'Ñuqanchik rinchik.'],
  ['rikuy', 'ver (ñuqa rikuni)', 'verbo', 'Verbos-chave', '👀', 'Pisquta rikuni.'],
  ['puñuy', 'dormir (ñuqa puñuni)', 'verbo', 'Verbos-chave', '😴', 'Wawa puñun.'],
  // ── Alimentação ──
  ['yaku', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Yakuta upyani.'],
  ['t\'anta', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'T\'antata mikhuni.'],
  ['aycha', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Aychata mikhuni.'],
  ['mikhuna', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Mikhuna allinmi.'],
  ['papa', 'batata', 'substantivo', 'Alimentação e Restaurantes', '🥔', 'Papata mikhuni.'],
  ['sara', 'milho', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Sarata mikhuni.'],
  ['kinwa', 'quinoa', 'substantivo', 'Alimentação e Restaurantes', '🌾', 'Kinwata mikhuni.'],
  ['ch\'arki', 'charque, carne seca', 'substantivo', 'Alimentação e Restaurantes', '🥓', 'Ch\'arkita mikhuni.'],
  // ── Números ──
  ['huk', 'um', 'numeral', 'Números', '1️⃣', 'Huk wasi.'],
  ['iskay', 'dois', 'numeral', 'Números', '2️⃣', 'Iskay allqu.'],
  ['kinsa', 'três', 'numeral', 'Números', '3️⃣', 'Kinsa wawqiy.'],
  ['tawa', 'quatro', 'numeral', 'Números', '4️⃣', 'Tawa wasi.'],
  ['pisqa', 'cinco', 'numeral', 'Números', '5️⃣', 'Pisqa p\'unchay.'],
  ['suqta', 'seis', 'numeral', 'Números', '6️⃣', 'Suqta runa.'],
  ['qanchis', 'sete', 'numeral', 'Números', '7️⃣', 'Qanchis wata.'],
  ['pusaq', 'oito', 'numeral', 'Números', '8️⃣', 'Pusaq llama.'],
  ['isqun', 'nove', 'numeral', 'Números', '9️⃣', 'Isqun pisqu.'],
  ['chunka', 'dez', 'numeral', 'Números', '🔟', 'Chunka wasikuna.'],
  // ── Cores ──
  ['puka', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Yawar puka kan.'],
  ['yuraq', 'branco', 'adjetivo', 'Cores', '⚪', 'Killa yuraq kan.'],
  ['yana', 'preto', 'adjetivo', 'Cores', '⚫', 'Allqu yana kan.'],
  ['q\'illu', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Inti q\'illu kan.'],
  ['anqas', 'azul', 'adjetivo', 'Cores', '🔵', 'Qucha anqas kan.'],
  ['q\'umir', 'verde', 'adjetivo', 'Cores', '🟢', 'Sara q\'umir kan.'],
  // ── Animais ──
  ['allqu', 'cachorro', 'substantivo', 'Animais', '🐕', 'Allqu puñun.'],
  ['misi', 'gato', 'substantivo', 'Animais', '🐈', 'Misi mikhun.'],
  ['pisqu', 'pássaro', 'substantivo', 'Animais', '🐦', 'Pisqu phawan.'],
  ['kuntur', 'condor', 'substantivo', 'Animais', '🦅', 'Kuntur phawan.'],
  ['puma', 'puma', 'substantivo', 'Animais', '🐆', 'Puma mikhun.'],
  ['llama', 'lhama', 'substantivo', 'Animais', '🦙', 'Llama urqupi kan.'],
  ['wik\'uña', 'vicunha', 'substantivo', 'Animais', '🦙', 'Wik\'uña urqupi kan.'],
  // ── Natureza ──
  ['inti', 'sol', 'substantivo', 'Natureza', '☀️', 'Inti q\'illu kan.'],
  ['killa', 'lua', 'substantivo', 'Natureza', '🌙', 'Killa yuraq kan.'],
  ['qucha', 'lago', 'substantivo', 'Natureza', '🏞️', 'Qucha anqas kan.'],
  ['urqu', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Urqupi purini.'],
  ['allpa', 'terra, solo', 'substantivo', 'Natureza', '🌍', 'Allpa yana kan.'],
  ['pacha', 'terra, tempo, universo (como em “Pachamama”, a Mãe-Terra)', 'substantivo', 'Natureza', '🌎', 'Pachamama allinmi kan.'],
  // ── Tempo ──
  ['kunan', 'agora, hoje', 'advérbio', 'Tempo', '📅', 'Kunan mikhuni.'],
  ['paqarin', 'amanhã', 'advérbio', 'Tempo', '📅', 'Paqarin hamunki.'],
  ['qayna', 'ontem', 'advérbio', 'Tempo', '📅', 'Qayna, kunan, paqarin.'],
  // ── Descrições ──
  ['hatun', 'grande', 'adjetivo', 'Descrições', '📏', 'Wasiy hatunmi.'],
  ['huch\'uy', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Wawa huch\'uy kan.'],
  ['allin', 'bom, bem', 'adjetivo', 'Descrições', '👍', 'Kay t\'anta allinmi.'],
];

export const VOCAB_QU = buildVocab('qu', ROWS);
