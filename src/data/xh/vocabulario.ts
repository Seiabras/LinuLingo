import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do xhosa (isiXhosa) — nível A1 (unidades 1 e 2), 65 palavras. Revisado e corrigido em
 * 02/10/2026 (ver histórico de correções abaixo): verificação palavra por palavra e frase por frase,
 * nunca de memória.
 *
 * Fontes:
 * 1) en.wiktionary.org/wiki/<palavra> (uma página por palavra) para classe nominal, plural e
 *    significado de: inja, umntu, umama, isikolo, ikati, iliso, umthi, ukutya, utata, umntwana,
 *    inkukhu, inkomo, indlu, ilanga, inyanga, amanzi, luhlaza (confirmado: cobre verde E azul, "green,
 *    blue"), bona, funda, bomvu, mhlophe, mnyama, mthubi, khulu, mna, wena, thina, yena, inkwenkwezi,
 *    umlilo, intaka, iqanda, incwadi, igama, intloko, isandla, umlenze, unyawo, inyama, hamba, sela,
 *    tya, funa, thanda, azi, thetha, cela, phila.
 * 2) en.wikivoyage.org/wiki/Xhosa_phrasebook para as saudações (Molo/Molweni, Unjani?/Ninjani?,
 *    Ndiyaphila), sim/não (Ewe/Hayi), os numerais 1–10 (nye, mbini, ntathu, ne, ntlanu, ntandathu,
 *    sixhenxe, sibhozo, lithoba, lishumi), as cores e as frases fixas "Ndicela" (por favor), "Enkosi"
 *    (obrigado), "Uxolo" (desculpa) e, verbatim, "Ngubani igama lakho?" (qual é o seu nome?) / "Igama
 *    lam ngu…" (o meu nome é…).
 * 3) en.wikipedia.org/wiki/Xhosa_language para a classificação genealógica, a tabela de classes
 *    nominais e concordância de sujeito do verbo (classe 1 "um-"/"u-", classe 1a "u-"/"oo-", classe 9
 *    "iN-"/"i-"), a cópula "ngu-" e a frase "indoda iyambona umntwana" (o homem vê a criança: i- classe
 *    9 + -ya- + -m- concordância de objeto classe 1 + bona), além de "Andiyazi" (não sei) e
 *    "Ndiyabulela"/"Ndiyakuthanda" (obrigado / eu te amo).
 * 4) Pitcher, Andrew Merritt. "The Present Tense Conjoint/Disjoint Alternation in Xhosa" (dissertação
 *    de mestrado, Dallas International University, 2023, diu.edu/documents/theses/Pitcher_Andrew-thesis.pdf),
 *    citando Visser (1989): no presente do xhosa, a forma CONJUNTA (sem "-ya-") é usada quando o verbo
 *    é seguido de objeto ou outro complemento, e a forma DISJUNTA (com "-ya-") é obrigatória quando o
 *    verbo fecha a oração (sem nada depois). É essa regra, e não uma invenção, que explica frases como
 *    "Ndibona ilanga" (sem "-ya-", porque "ilanga" vem depois) ao lado de "Ndiyahamba" (com "-ya-",
 *    porque não há nada depois do verbo).
 * 5) grammar.sadilar.org/algrap (African Language Grammar Portal, SADiLaR) para a negação do presente:
 *    prefixo "andi-" + vogal final "-i" no lugar de "-a" (exemplo citado ali: "andihambi", eu não ando/
 *    não vou), o mesmo padrão aplicado a "Andithethi" (eu não falo) e "Andiyazi" (eu não sei, também
 *    atestado diretamente na Wikipédia).
 *
 * Correções feitas nesta revisão (o agente anterior foi interrompido no meio de uma correção
 * semelhante): "andazi" → "Andiyazi" (a forma citada de fato na Wikipédia, em vez de uma contração não
 * verificada); "Andithethi isiXhosa kakuhle" → "Andithethi isiXhosa" (removida a palavra "kakuhle",
 * que não está em nenhuma fonte consultada nem no vocabulário); "U Nomsa"/"U Linu" → "UNomsa"/"ULinu"
 * (o prefixo de nome próprio de classe 1a "u-" junta-se ao nome, sem espaço, como em "utitshala" —
 * Wikipédia).
 *
 * Frases de exemplo: só combinam palavras e regras assim verificadas — sujeito ndi-/u-/si-/ni- + raiz
 * do verbo na forma conjunta (sem "-ya-") quando segue objeto, ou na forma disjunta (com "-ya-") quando
 * o verbo fecha a frase (fonte 4); a negação andi-/andi-…-i (fonte 5); a cópula ngu- (classes 1/1a,
 * vista em "ngubani" e em "Igama lam ngu…") e o possessivo "lam" (classe 5 — "igama" e "iliso" são os
 * dois substantivos de classe 5 usados com ele, confirmado no Wiktionary).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['molo', 'oi, olá (para uma pessoa)', 'interjeição', 'Expressões', '👋', 'Molo! Unjani?'],
  ['molweni', 'oi, olá (para várias pessoas, ou com respeito a um mais velho)', 'interjeição', 'Expressões', '👋', 'Molweni!'],
  ['enkosi', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Enkosi, Nomsa!'],
  ['uxolo', 'desculpa, com licença (também “paz”)', 'interjeição', 'Expressões', '🙏', 'Uxolo, Linu!'],
  ['unjani', 'como você está?', 'expressão', 'Expressões', '❓', 'Molo! Unjani?'],
  ['ndiyaphila', 'eu estou bem', 'expressão', 'Expressões', '👍', 'Ndiyaphila, enkosi.'],
  // ── Essenciais ──
  ['ewe', 'sim', 'advérbio', 'Essenciais', '👍', 'Ewe, enkosi.'],
  ['hayi', 'não', 'advérbio', 'Essenciais', '👎', 'Hayi, enkosi.'],
  ['ntoni', 'o quê', 'pronome', 'Essenciais', '❓', 'Ufuna ntoni?'],
  ['ngubani', 'quem (lit. “é quem”)', 'pronome', 'Essenciais', '❓', 'Ngubani igama lakho?'],
  ['ndicela', 'por favor (lit. “eu peço”)', 'interjeição', 'Essenciais', '🙏', 'Ndicela amanzi.'],
  // ── Pessoas ──
  ['mna', 'eu, mim (pronome de ênfase)', 'pronome', 'Pessoas', '🙋', 'Mna ndiyaphila.'],
  ['wena', 'você, tu (pronome de ênfase)', 'pronome', 'Pessoas', '🫵', 'Wena unjani?'],
  ['yena', 'ele, ela (pronome de ênfase)', 'pronome', 'Pessoas', '👤', 'Yena uyaphila.'],
  ['thina', 'nós (pronome de ênfase)', 'pronome', 'Pessoas', '🙌', 'Thina sifunda isiXhosa.'],
  ['umama', 'mãe', 'substantivo', 'Pessoas', '👩', 'UNomsa ngumama.'],
  ['utata', 'pai', 'substantivo', 'Pessoas', '👨', 'ULinu ngutata.'],
  ['umntwana', 'criança, filho, filha', 'substantivo', 'Pessoas', '🧒', 'Umntwana uyatya.'],
  ['umntu', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Ngumntu.'],
  // ── Natureza ──
  ['ilanga', 'sol', 'substantivo', 'Natureza', '☀️', 'Ndibona ilanga.'],
  ['inyanga', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Ndibona inyanga.'],
  ['amanzi', 'água', 'substantivo', 'Natureza', '💧', 'Ndisela amanzi.'],
  ['umthi', 'árvore', 'substantivo', 'Natureza', '🌳', 'Ndibona umthi.'],
  ['umlilo', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ndibona umlilo.'],
  ['inkwenkwezi', 'estrela', 'substantivo', 'Natureza', '⭐', 'Ndibona inkwenkwezi.'],
  // ── Animais ──
  ['inja', 'cachorro', 'substantivo', 'Animais', '🐕', 'Inja iyatya.'],
  ['ikati', 'gato', 'substantivo', 'Animais', '🐈', 'Ikati iyasela.'],
  ['inkukhu', 'galinha', 'substantivo', 'Animais', '🐔', 'Nditya inkukhu.'],
  ['inkomo', 'vaca, boi', 'substantivo', 'Animais', '🐄', 'Ndibona inkomo.'],
  ['intaka', 'pássaro', 'substantivo', 'Animais', '🐦', 'Intaka iyahamba.'],
  // ── Alimentação ──
  ['ukutya', 'comida (também “comer”, no infinitivo)', 'substantivo', 'Alimentação', '🍽️', 'Ndifuna ukutya.'],
  ['inyama', 'carne', 'substantivo', 'Alimentação', '🍖', 'Nditya inyama.'],
  ['iqanda', 'ovo (também “zero”)', 'substantivo', 'Alimentação', '🥚', 'Nditya iqanda.'],
  // ── Corpo ──
  ['intloko', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Ndibona intloko.'],
  ['isandla', 'mão', 'substantivo', 'Corpo', '✋', 'Ndibona isandla.'],
  ['umlenze', 'perna', 'substantivo', 'Corpo', '🦵', 'Ndibona umlenze.'],
  ['unyawo', 'pé', 'substantivo', 'Corpo', '🦶', 'Ndibona unyawo.'],
  ['iliso', 'olho', 'substantivo', 'Corpo', '👁️', 'Iliso lam.'],
  // ── Casa ──
  ['indlu', 'casa', 'substantivo', 'Casa', '🏠', 'Ndibona indlu.'],
  ['isikolo', 'escola', 'substantivo', 'Casa', '🏫', 'Ndibona isikolo.'],
  ['incwadi', 'livro', 'substantivo', 'Casa', '📖', 'Ndifunda incwadi.'],
  // ── Números ──
  ['nye', 'um', 'numeral', 'Números', '1️⃣', 'Nye, mbini, ntathu.'],
  ['mbini', 'dois', 'numeral', 'Números', '2️⃣', 'Mbini, ntathu, ne.'],
  ['ntathu', 'três', 'numeral', 'Números', '3️⃣', 'Ntathu, ne, ntlanu.'],
  ['ne', 'quatro', 'numeral', 'Números', '4️⃣', 'Nye, mbini, ntathu, ne.'],
  ['ntlanu', 'cinco', 'numeral', 'Números', '5️⃣', 'Ntandathu, ntlanu.'],
  ['ntandathu', 'seis', 'numeral', 'Números', '6️⃣', 'Ntlanu, ntandathu, sixhenxe.'],
  ['sixhenxe', 'sete', 'numeral', 'Números', '7️⃣', 'Ntandathu, sixhenxe, sibhozo.'],
  ['sibhozo', 'oito', 'numeral', 'Números', '8️⃣', 'Sixhenxe, sibhozo, lithoba.'],
  ['lithoba', 'nove', 'numeral', 'Números', '9️⃣', 'Sibhozo, lithoba, lishumi.'],
  ['lishumi', 'dez', 'numeral', 'Números', '🔟', 'Sibhozo, lithoba, lishumi.'],
  // ── Verbos-chave ──
  ['hamba', 'ir, andar (ndiyahamba = eu vou)', 'verbo', 'Verbos-chave', '🚶', 'Ndiyahamba.'],
  ['sela', 'beber (ndisela = eu bebo)', 'verbo', 'Verbos-chave', '🥤', 'Ndisela amanzi.'],
  ['tya', 'comer (nditya = eu como)', 'verbo', 'Verbos-chave', '🍽️', 'Nditya inyama.'],
  ['funa', 'querer (ndifuna = eu quero)', 'verbo', 'Verbos-chave', '💭', 'Ndifuna ukutya.'],
  ['thanda', 'amar, gostar de (ndithanda = eu gosto de)', 'verbo', 'Verbos-chave', '❤️', 'Ndithanda umama.'],
  ['azi', 'saber (andiyazi = eu não sei)', 'verbo', 'Verbos-chave', '🧠', 'Andiyazi.'],
  ['thetha', 'falar (andithethi = eu não falo)', 'verbo', 'Verbos-chave', '🗣️', 'Andithethi isiXhosa.'],
  ['funda', 'aprender, estudar, ler (ndifunda = eu estudo)', 'verbo', 'Verbos-chave', '📚', 'Ndifunda isiXhosa.'],
  // ── Cores e descrições ──
  ['mnyama', 'preto', 'adjetivo', 'Cores e descrições', '⚫', 'Mnyama.'],
  ['bomvu', 'vermelho', 'adjetivo', 'Cores e descrições', '🔴', 'Bomvu.'],
  ['mhlophe', 'branco', 'adjetivo', 'Cores e descrições', '⚪', 'Mhlophe.'],
  ['luhlaza', 'verde, azul (o xhosa usa a mesma palavra para as duas cores)', 'adjetivo', 'Cores e descrições', '🟢', 'Luhlaza.'],
  ['mthubi', 'amarelo', 'adjetivo', 'Cores e descrições', '🟡', 'Mthubi.'],
  ['khulu', 'grande', 'adjetivo', 'Cores e descrições', '📏', 'Khulu.'],
];

export const VOCAB_XH = buildVocab('xh', ROWS);
