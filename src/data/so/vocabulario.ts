import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do somali (Af Soomaali) — nível A1 (unidades 1 e 2), na ortografia latina oficial de
 * 1972 e na variedade padrão (de base setentrional, a mesma das gramáticas e dicionários).
 *
 * Fontes (cada palavra conferida na página do próprio verbete, nunca num resumo de busca):
 * 1) en.wiktionary.org/wiki/<palavra>, seção «Somali», lida no wikitexto bruto de cada página
 *    (action=raw): significado, classe e gênero (g=m / g=f) de aabbe, adiga, af (boca; língua), afar,
 *    akhri, aniga, annaga (nós exclusivo; a mesma página remete ao inclusivo innaga), arag, bad,
 *    bariis, baro, bisad, biyo (g=m-p, masculino plural), buug, caano (g=m-p), cab, cad (branco),
 *    cag, cun, cunto, dayax, doon (verbo «querer»; a outra etimologia é um barco), ey, faras,
 *    fadlan, gabadh (filha; variante gabar), gacan, geed, geel (coletivo: camelos), guri, haa, hilib,
 *    hooyo, idinka, il, isaga, iyada, iyaga, iyo (e), keen, kow, laba, libaax, lix, madax, madow,
 *    magac, mahadsanid, naag, nabad, nin, qof, qor, qorrax, roob, rooti, saaxiib, saddex, sagaal,
 *    shaah, shan, shimbir, siddeed, toban, toddoba, ukun, wanaagsan, weyn, wiil, xiddig, yar, raali
 *    (desculpa), haye (tudo bem). O verbete «kow» traz, citando Saeed (1999, «Somali», p. 70), a
 *    regra de que «kow» é a forma de contar e «hal» a forma diante de substantivo («hal buug», um
 *    livro). O verbete «wanaagsan» lista como derivados «subax wanaagsan» (bom dia) e «habeen
 *    wanaagsan» (boa noite); o verbete «waa» diz que a partícula vem logo antes do verbo sem mudar a
 *    ordem da frase (SOV).
 * 2) As tabelas de conjugação renderizadas no Wiktionary para «cab» (cabbaa, cabtaa, cabnaa…) e
 *    «kac»; e a tabela do presente habitual de «keen» (waan keenaa, waad keentaa, wuu keenaa, way
 *    keentaa…) em en.wikipedia.org/wiki/Somali_grammar, que também dá a tabela de pronomes enfáticos e
 *    clíticos, o artigo definido sufixado (-ka masculino / -ta feminino: buugga, gacanta, ninka), a
 *    polaridade de gênero (buugga × buugagta), as partículas de foco (baa, ayaa, waxa(a), waa; com os
 *    exemplos «Maxamed baa baxay», «Maxamed wuu baxay», «Sahro way baxday») e a ordem SOV.
 * 3) en.wikivoyage.org/wiki/Somali_phrasebook (lido no wikitexto bruto): «sidee tahay?», «waan
 *    wanaagsanahay, mahadsanid, adiguna?», «magacaa?», «magacay waa ___», «maya» (não),
 *    «raali ahow» (desculpe), «nabad galyo» (tchau) e os numerais 1–10. Duas ressalvas sobre essa
 *    página, que é irregular: escrevemos «nabadgelyo» junto e com «e», que é a grafia mais comum da
 *    despedida — o Omniglot (www.omniglot.com/language/phrases/somali.php) traz «Nabadgelyo» (e o
 *    informal «Nabadeey») para «goodbye», e na Wikipédia em somali (so.wikipedia.org, contagem pela
 *    API de busca) «nabadgelyo» aparece 58 vezes, contra 12 de «nabad gelyo», 9 de «nabad galyo» e 7
 *    de «nabadgalyo»; bate também com a pronúncia da própria Wikivoyage («nab-ad GEL-yaw»). Também se
 *    escreve separado, «nabad gelyo». (O verbete do Wiktionary «Naxariis iyo Nabadgelyo Korkiisa Ha
 *    Ahaato», citado antes aqui, é a fórmula religiosa «que a paz esteja com ele»: mostra o substantivo,
 *    não a despedida, por isso deixou de ser a fonte.) E NÃO usamos as cores de lá («Cagar», «Jale»,
 *    «Gadud»), que não batem com os verbetes do Wiktionary; as cores vêm só do Wiktionary.
 * 4) en.wikipedia.org/wiki/Somali_language — classificação (afro-asiática › cuchítica › oriental ›
 *    das terras baixas), cerca de 24 milhões de falantes, oficialidade, ortografia latina de 1972, os
 *    sons de c, x, q, dh, kh e do apóstrofo, os cerca de 20% de empréstimos do árabe e os do italiano
 *    e do inglês. A obra de referência citada por essas páginas é Saeed, J. I. (1999), «Somali»,
 *    John Benjamins; a «Colloquial Somali» de Martin Orwin (Routledge) não foi consultada diretamente.
 * 5) elias.unix.fas.harvard.edu — curso de somali do ELIAS (Harvard), nível iniciante, lição 15
 *    («Furuut iyo qudaar 2», frutas e verduras): «Haa waan cunaa» = «Yes, I eat» e «Yaanyada … waan
 *    cunaa» (eu como tomate…).
 *
 * Frases de exemplo: só combinam essas palavras com padrões atestados — «waa» + substantivo (como em
 * «magacay waa ___»), substantivo + adjetivo (o substantivo vem antes, segundo a Wikipédia), «iyo»
 * (e), «hal» + substantivo, e o presente habitual. «Waan cunaa», «waan qoraa» e «waan doonaa» seguem
 * a tabela de «keen» (verbo da mesma conjugação): «qoraa» e «doonaa» aparecem literalmente nas tabelas
 * do Wiktionary («qor») e da Wikipédia («keeni doonaa», o futuro, usa o presente de «doon»); «waan
 * cunaa» está atestado tal e qual no curso do ELIAS (fonte 5: «Haa waan cunaa» = «sim, eu como»), e
 * Orwin (1995, «Colloquial Somali») traz o progressivo «waan cúnayaa» (citado no MinneTESOL Journal,
 * «Somali and English: Some Differences and the Implications for Writing Tutors and Instructors»). Verbos
 * cujo radical muda (arag → arkaa, segundo o infinitivo «arki») aparecem só no imperativo, que é a
 * forma de citação.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['subax wanaagsan', 'bom dia', 'expressão', 'Expressões', '🌅', 'Subax wanaagsan! Sidee tahay?'],
  ['habeen wanaagsan', 'boa noite', 'expressão', 'Expressões', '🌙', 'Habeen wanaagsan!'],
  ['sidee tahay', 'como vai?, como você está?', 'expressão', 'Expressões', '❓', 'Sidee tahay?'],
  ['wanaagsan', 'bom', 'adjetivo', 'Expressões', '👍', 'Waan wanaagsanahay.'],
  ['mahadsanid', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Waan wanaagsanahay, mahadsanid.'],
  ['nabadgelyo', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Nabadgelyo!'],
  // ── Essenciais ──
  ['haa', 'sim', 'partícula', 'Essenciais', '👍', 'Haa, mahadsanid.'],
  ['maya', 'não', 'partícula', 'Essenciais', '👎', 'Maya, mahadsanid.'],
  ['fadlan', 'por favor', 'advérbio', 'Essenciais', '🙏', 'Biyo, fadlan.'],
  ['raali ahow', 'desculpe', 'expressão', 'Essenciais', '🙏', 'Raali ahow!'],
  ['magac', 'nome', 'substantivo', 'Essenciais', '🏷️', 'Magacay waa Linu.', 'm'],
  ['nabad', 'paz', 'substantivo', 'Essenciais', '🕊️', 'Waa nabad.', 'f'],
  // ── Pessoas ──
  ['aniga', 'eu', 'pronome', 'Pessoas', '🙋', 'Aniga? Waan wanaagsanahay.'],
  ['adiga', 'você', 'pronome', 'Pessoas', '🫵', 'Adiga?'],
  ['isaga', 'ele', 'pronome', 'Pessoas', '👨', 'Isaga? Wuu keenaa.', 'm'],
  ['iyada', 'ela', 'pronome', 'Pessoas', '👩', 'Iyada? Way keentaa.', 'f'],
  ['annaga', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Annaga?'],
  ['idinka', 'vocês', 'pronome', 'Pessoas', '👥', 'Idinka?'],
  ['iyaga', 'eles, elas', 'pronome', 'Pessoas', '👫', 'Iyaga? Way keenaan.'],
  ['nin', 'homem', 'substantivo', 'Pessoas', '👨', 'Waa nin.', 'm'],
  ['naag', 'mulher', 'substantivo', 'Pessoas', '👩', 'Waa naag.', 'f'],
  ['hooyo', 'mãe', 'substantivo', 'Pessoas', '👩', 'Hooyo iyo aabbe.', 'f'],
  ['aabbe', 'pai', 'substantivo', 'Pessoas', '👨', 'Hooyo iyo aabbe.', 'm'],
  ['wiil', 'menino', 'substantivo', 'Pessoas', '👦', 'Waa wiil.', 'm'],
  ['gabadh', 'filha', 'substantivo', 'Pessoas', '👧', 'Wiil iyo gabadh.', 'f'],
  ['saaxiib', 'amigo', 'substantivo', 'Pessoas', '🤝', 'Waa saaxiib.', 'm'],
  ['qof', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Waa qof.'],
  // ── Números ──
  ['kow', 'um', 'numeral', 'Números', '1️⃣', 'Kow, laba, saddex.', 'f'],
  ['laba', 'dois', 'numeral', 'Números', '2️⃣', 'Kow, laba, saddex.', 'f'],
  ['saddex', 'três', 'numeral', 'Números', '3️⃣', 'Laba, saddex, afar.', 'f'],
  ['afar', 'quatro', 'numeral', 'Números', '4️⃣', 'Saddex, afar, shan.', 'f'],
  ['shan', 'cinco', 'numeral', 'Números', '5️⃣', 'Afar, shan, lix.', 'f'],
  ['lix', 'seis', 'numeral', 'Números', '6️⃣', 'Shan, lix, toddoba.', 'f'],
  ['toddoba', 'sete', 'numeral', 'Números', '7️⃣', 'Lix, toddoba, siddeed.', 'f'],
  ['siddeed', 'oito', 'numeral', 'Números', '8️⃣', 'Toddoba, siddeed, sagaal.', 'f'],
  ['sagaal', 'nove', 'numeral', 'Números', '9️⃣', 'Siddeed, sagaal, toban.', 'm'],
  ['toban', 'dez', 'numeral', 'Números', '🔟', 'Sagaal, toban.', 'm'],
  // ── Alimentação ──
  ['biyo', 'água', 'substantivo', 'Alimentação', '💧', 'Biyo waan cabbaa.', 'm'],
  ['caano', 'leite', 'substantivo', 'Alimentação', '🥛', 'Shaah iyo caano.', 'm'],
  ['shaah', 'chá', 'substantivo', 'Alimentação', '🍵', 'Shaah waan cabbaa.', 'm'],
  ['hilib', 'carne', 'substantivo', 'Alimentação', '🍖', 'Hilib waan cunaa.', 'm'],
  ['rooti', 'pão', 'substantivo', 'Alimentação', '🍞', 'Rooti, fadlan.', 'm'],
  ['bariis', 'arroz', 'substantivo', 'Alimentação', '🍚', 'Bariis iyo hilib.', 'm'],
  ['cunto', 'comida', 'substantivo', 'Alimentação', '🍽️', 'Cunto, fadlan.', 'f'],
  ['ukun', 'ovo', 'substantivo', 'Alimentação', '🥚', 'Rooti iyo ukun.', 'f'],
  // ── Animais ──
  ['geel', 'camelo (nome coletivo: os camelos)', 'substantivo', 'Animais', '🐪', 'Waa geel.', 'm'],
  ['ey', 'cachorro', 'substantivo', 'Animais', '🐕', 'Waa ey.', 'm'],
  ['bisad', 'gato', 'substantivo', 'Animais', '🐈', 'Waa bisad.', 'f'],
  ['shimbir', 'pássaro', 'substantivo', 'Animais', '🐦', 'Waa shimbir.', 'f'],
  ['libaax', 'leão', 'substantivo', 'Animais', '🦁', 'Waa libaax.', 'm'],
  ['faras', 'cavalo', 'substantivo', 'Animais', '🐎', 'Waa faras.', 'm'],
  // ── Natureza ──
  ['qorrax', 'sol', 'substantivo', 'Natureza', '☀️', 'Waa qorrax.', 'f'],
  ['dayax', 'lua', 'substantivo', 'Natureza', '🌙', 'Waa dayax.', 'm'],
  ['xiddig', 'estrela', 'substantivo', 'Natureza', '⭐', 'Dayax iyo xiddig.', 'f'],
  ['roob', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Waa roob.', 'm'],
  ['geed', 'árvore', 'substantivo', 'Natureza', '🌳', 'Geed weyn.', 'm'],
  ['bad', 'mar', 'substantivo', 'Natureza', '🌊', 'Waa bad.', 'f'],
  // ── Corpo ──
  ['madax', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Waa madax.', 'm'],
  ['il', 'olho', 'substantivo', 'Corpo', '👁️', 'Waa il.', 'f'],
  ['gacan', 'mão', 'substantivo', 'Corpo', '✋', 'Waa gacan.', 'f'],
  ['cag', 'pé', 'substantivo', 'Corpo', '🦶', 'Gacan iyo cag.', 'f'],
  ['af', 'boca; língua (idioma)', 'substantivo', 'Corpo', '👄', 'Af Soomaali.', 'm'],
  // ── Casa ──
  ['guri', 'casa', 'substantivo', 'Casa', '🏠', 'Guri weyn.', 'm'],
  ['buug', 'livro', 'substantivo', 'Casa', '📖', 'Hal buug.', 'm'],
  // ── Verbos-chave ──
  ['cab', 'beber (waan cabbaa = eu bebo)', 'verbo', 'Verbos-chave', '🥤', 'Biyo waan cabbaa.'],
  ['cun', 'comer (waan cunaa = eu como)', 'verbo', 'Verbos-chave', '🍽️', 'Hilib waan cunaa.'],
  ['keen', 'trazer (waan keenaa = eu trago)', 'verbo', 'Verbos-chave', '🤲', 'Waan keenaa.'],
  ['doon', 'querer (waan doonaa = eu quero)', 'verbo', 'Verbos-chave', '💭', 'Waan doonaa.'],
  ['qor', 'escrever (waan qoraa = eu escrevo)', 'verbo', 'Verbos-chave', '✍️', 'Waan qoraa.'],
  ['arag', 'ver (imperativo: veja!)', 'verbo', 'Verbos-chave', '👀', 'Arag!'],
  ['baro', 'aprender (imperativo: aprenda!)', 'verbo', 'Verbos-chave', '📚', 'Baro!'],
  ['akhri', 'ler (imperativo: leia!)', 'verbo', 'Verbos-chave', '📖', 'Akhri!'],
  // ── Cores e descrições ──
  ['cad', 'branco', 'adjetivo', 'Cores e descrições', '⚪', 'Caano cad.'],
  ['madow', 'preto', 'adjetivo', 'Cores e descrições', '⚫', 'Ey madow.'],
  ['cas', 'vermelho', 'adjetivo', 'Cores e descrições', '🔴', 'Shimbir cas.'],
  ['weyn', 'grande', 'adjetivo', 'Cores e descrições', '📏', 'Guri weyn.'],
  ['yar', 'pequeno', 'adjetivo', 'Cores e descrições', '🤏', 'Ey yar.'],
];

export const VOCAB_SO = buildVocab('so', ROWS);
