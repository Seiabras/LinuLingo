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
 *
 * Leva A2 (09/10/2026) — vocabulário novo, cada palavra conferida de novo no próprio verbete:
 * 6) en.wiktionary.org/wiki/<palavra> (seção «Somali», wikitexto bruto quando possível): isniin
 *    (segunda, do árabe «al-iṯnayn»), jimco (sexta, do árabe «al-jumuʕa»), sabti (sábado, do árabe
 *    «sabt») — os três com etimologia árabe explícita no verbete; axad (domingo, do árabe
 *    «al-ʔaḥad», etimologia já citada na leva A1); talaado, arbaco e khamiis aparecem como termos
 *    coordenados nas páginas de «isniin» e «axad», sem etimologia própria detalhada. toddoba (sete,
 *    numeral feminino) lista «toddobaad» como a sua forma ordinal (confirmado cruzando com a fonte
 *    7, abaixo, que dá o sentido «semana»). maanta (hoje, substantivo feminino, com o exemplo
 *    «Máanta Yoonis wúxuu lá hadlay Kulmíye», «hoje Yoonis falou com o Kulmiye»). sanad (ano,
 *    feminino, do árabe «sana»). subax (manhã, masculino, do árabe «ṣubḥ»). dabayl (vento,
 *    feminino; plural «dabaylo», definido «dabaysha»). daruur (nuvem, feminino). cir (céu,
 *    masculino). qabow (frio, adjetivo). dhul (terra, substantivo, sem gênero indicado). nin
 *    (homem, já na leva A1): plural «niman», também masculino. naag (mulher, já na leva A1):
 *    plural «naago». buug (livro, já na leva A1): a tabela de declinação do próprio verbete
 *    (fonte: Qaamuuska Af-Soomaaliga, 2012) traz o definido não-remoto «buugga», o remoto «buuggii»
 *    e os possessivos «buugayga» (meu), «buuggaaga» (teu), «buuggiisa» (dele), «buuggeeda» (dela),
 *    «buuggayaga» (nosso, exclusivo), «buuggeena» (nosso, inclusivo), «buuggiinna» (de vocês) e
 *    «buuggooda» (deles).
 * 7) elias.fas.harvard.edu/languages/somali/beginning/12/time-season-weather — lição 10 do mesmo
 *    curso ELIAS (Harvard) da fonte 5, «Waqtiga iyo xillig iyo cimilada» (tempo, estação e clima):
 *    confirma de novo os sete dias da semana (isniin…axad) e dá «maanta» (hoje), «berri» (amanhã),
 *    «shalay» (ontem), «toddobaad»/«toddobaadka» (semana/a semana), «saacad» (hora), «sanad» (ano),
 *    «subax» (manhã), «habeen» (noite — já citado na leva A1 em «habeen wanaagsan»), «dabayl»
 *    (vento), «daruur» (nuvem), «cir» (céu), «iftiin» (luz), «mugdi» (escuridão), «qabow» (frio),
 *    «kulayl» (calor), «dhul» (terra), «bari» (leste), «galbeed» (oeste), «waqooyi» (norte) e
 *    «koonfur» (sul). «Berri» é confirmado também pelo verbete do Wiktionary para o afar «béera»
 *    (amanhã), que cita o somali «bérri» como cognato. «Waqooyi»/«koonfur» também aparecem, de
 *    forma consistente, no Somali phrasebook da Wikivoyage (fonte 3) — mas aqui vale o ELIAS como
 *    fonte principal, pela mesma razão que a fonte 3 já não foi usada sozinha para as cores.
 * 8) en.wikipedia.org/wiki/Somali_grammar (mesma página da fonte citada na leva A1): o parágrafo de
 *    «Nouns > Number» confirma que o plural é «often irregular», com sufixos «-ooyin, -ayaal, -o,
 *    -yo, -yaalo, -yaabo» e dá o próprio exemplo da polaridade de gênero (buug-ga masculino →
 *    buugag-ta feminino) usado aqui. A mesma página dá a tabela completa do pretérito DEPENDENTE
 *    (com os clíticos waan/waad/wuu/way) do verbo «keen» (trazer, já na leva A1): waan keenay, waad
 *    keentay, wuu keenay, way keentay, waan keennay, waad keenteen, way keeneen; e a tabela do
 *    futuro, formado com o infinitivo + o presente de «doon» (querer, já na leva A1): waan keeni
 *    doonaa, waad keeni doontaa, wuu keeni doonaa, way keeni doontaa, waan keeni doonnaa, waad
 *    keeni doontaan, way keeni doonaan.
 *
 * Nenhuma gramática ou tradução nova foi suposta por extensão de outro verbo: só «keen» tem
 * pretérito e futuro confirmados nesta fonte, por isso as frases novas de passado/futuro usam só
 * ele. A frase «Toddobaad wanaagsan!» (boa semana) não é uma fórmula fixa achada numa fonte — é a
 * extensão direta do próprio padrão produtivo já documentado na leva A1 («X + wanaagsan» = «bom/boa
 * X», visto em «subax wanaagsan» e «habeen wanaagsan»), não um idiomatismo à parte.
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
  // ── Tempo (A2) ──
  ['isniin', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Waa isniin.'],
  ['talaado', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Waa talaado.'],
  ['arbaco', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Waa arbaco.'],
  ['khamiis', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Waa khamiis.'],
  ['jimco', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Waa jimco.'],
  ['sabti', 'sábado', 'substantivo', 'Tempo', '📅', 'Waa sabti.'],
  ['axad', 'domingo', 'substantivo', 'Tempo', '📅', 'Waa axad.'],
  ['toddobaad', 'semana', 'substantivo', 'Tempo', '🗓️', 'Toddobaad wanaagsan!'],
  ['maanta', 'hoje', 'substantivo', 'Tempo', '📆', 'Maanta waa isniin.', 'f'],
  ['berri', 'amanhã', 'advérbio', 'Tempo', '🌄', 'Berri waan keeni doonaa shaah.'],
  ['shalay', 'ontem', 'advérbio', 'Tempo', '⏮️', 'Shalay waan keenay rooti.'],
  ['saacad', 'hora', 'substantivo', 'Tempo', '🕐', 'Hal saacad.'],
  ['sanad', 'ano', 'substantivo', 'Tempo', '🎊', 'Hal sanad.', 'f'],
  ['subax', 'manhã', 'substantivo', 'Tempo', '🌅', 'Subax iyo habeen.', 'm'],
  ['habeen', 'noite', 'substantivo', 'Tempo', '🌃', 'Habeen wanaagsan, saaxiib.', 'm'],
  // ── Natureza (A2) ──
  ['dabayl', 'vento', 'substantivo', 'Natureza', '🍃', 'Waa dabayl.', 'f'],
  ['daruur', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Waa daruur weyn.', 'f'],
  ['cir', 'céu', 'substantivo', 'Natureza', '🌌', 'Cir weyn.', 'm'],
  ['iftiin', 'luz', 'substantivo', 'Natureza', '💡', 'Iftiin weyn.'],
  ['mugdi', 'escuridão', 'substantivo', 'Natureza', '🌑', 'Waa mugdi.'],
  ['dhul', 'terra, solo', 'substantivo', 'Natureza', '🌍', 'Dhul weyn.'],
  // ── Cores e descrições (A2) ──
  ['qabow', 'frio', 'adjetivo', 'Cores e descrições', '🥶', 'Biyo qabow.'],
  ['kulayl', 'calor', 'substantivo', 'Cores e descrições', '🥵', 'Waa kulayl.'],
  // ── Trabalho (A2) ──
  ['shaqo', 'trabalho', 'substantivo', 'Trabalho', '💼', 'Waa shaqo wanaagsan.'],
  // ── Direções (A2) ──
  ['bari', 'leste', 'substantivo', 'Direções', '🧭', 'Bari iyo galbeed.'],
  ['galbeed', 'oeste', 'substantivo', 'Direções', '🌇', 'Waa galbeed.'],
  ['waqooyi', 'norte', 'substantivo', 'Direções', '⬆️', 'Waqooyi iyo koonfur.'],
  ['koonfur', 'sul', 'substantivo', 'Direções', '⬇️', 'Waa koonfur.'],
  // ── Pessoas: plurais (A2) ──
  ['niman', 'homens (plural de nin)', 'substantivo', 'Pessoas', '👨‍👨‍👦', 'Waa niman.', 'm'],
  ['naago', 'mulheres (plural de naag)', 'substantivo', 'Pessoas', '👩‍👩‍👧', 'Waa naago.'],
];

export const VOCAB_SO = buildVocab('so', ROWS);
