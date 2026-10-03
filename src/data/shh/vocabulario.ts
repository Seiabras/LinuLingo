import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do shoshone (shoshoni, autodesignação “newe”, código ISO 639-3 “shh”), língua numa
 * numic central (uto-asteca) falada na Grande Bacia, no oeste dos Estados Unidos (Wyoming, Idaho,
 * Nevada e Utah). Cada palavra abaixo foi conferida numa fonte real e aberta — nunca inventada:
 *
 * - en.wiktionary.org/wiki/Appendix:Uto-Aztecan_Swadesh_lists — FONTE PRINCIPAL deste pacote: uma
 *   lista Swadesh acadêmica com uma coluna própria para o shoshone (código de coluna “c=04”), que o
 *   próprio Wiktionary descreve assim: “Shoshone (Central Numic branch; Idaho and Nevada, United
 *   States) — mostly Fort Hall dialect (Western Shoshone occasionally used)”, citando como fonte
 *   shoshonidictionary.com (“Shoshoni Online Dictionary”). Ou seja: a maior parte das 218 palavras
 *   atestadas nessa lista representa o DIALETO DE FORT HALL (reserva Fort Hall, Idaho, onde vivem as
 *   tribos shoshone-bannock — mais próximo do shoshone do norte do que do shoshone ocidental de
 *   Nevada), com alguma forma ocasional do shoshone ocidental misturada pela própria fonte — este
 *   pacote não tenta separar as duas, porque a fonte não marca, palavra por palavra, qual é qual.
 *   O texto wiki foi baixado e devassado programaticamente (não lido por cima) para extrair cada par
 *   palavra-inglesa/palavra-shoshone com segurança, célula por célula da tabela.
 * - en.wikipedia.org/wiki/Shoshoni_language — classificação (uto-asteca > numic > numic central),
 *   nomes alternativos (Shoshoni, Shoshoni-Gosiute, Shoshone), endônimos (“Sosoni' ta̲i̲kwappe”, “newe
 *   ta̲i̲kwappe”, lit. “a língua do povo”), código ISO 639-3 “shh”, cerca de mil falantes fluentes (dado
 *   de 2007) e mais um grupo de cerca de mil que entende sem fluência, região (Wyoming, Utah, Nevada,
 *   Idaho), status “ameaçada” (Ethnologue) e “severamente em perigo” (UNESCO, em Idaho, Utah e
 *   Wyoming), fonologia (6 vogais com distinção de duração, inventário consonantal), sintaxe (SOV,
 *   mas sentido não depende da ordem), morfologia (sufixal, aglutinante), número e caso (subjetivo,
 *   objetivo, possessivo; singular, dual, plural) e referência cruzada (switch-reference) — ver
 *   gramatica.ts para a citação completa de cada trecho.
 * - en.wikipedia.org/wiki/Numic_languages — confirma o ramo numic central (shoshone, comanche e
 *   panamint/timbisha) dentro do numic (o ramo mais ao norte da família uto-asteca).
 * - en.wikipedia.org/wiki/Shoshone — confirma que “shoshone” não é uma única nação política: há
 *   várias tribos e reservas reconhecidas pelo governo federal dos EUA (eastern shoshone em Wind
 *   River, Wyoming; shoshone-bannock em Fort Hall, Idaho; te-moak e outras bandas do shoshone
 *   ocidental em Nevada; goshute/gosiute em Utah e Nevada; northwestern band of the shoshone nation
 *   em Utah; shoshone-paiute em Duck Valley, na fronteira Idaho-Nevada).
 * - www.native-languages.org/shoshone.htm, shoshone_words.htm e shoshone_animals.htm — site de
 *   referência geral (não acadêmico) sobre línguas indígenas americanas, usado aqui só como
 *   CONFIRMAÇÃO CRUZADA: as palavras que also aparecem no Swadesh da Wiktionary batem na grafia
 *   (“sadee'” cachorro, “deheya'” veado, “daa'bu” coelho, “bo'nai”/“bo'naih” camundongo, “huchuu'”
 *   pássaro, “baingwi” peixe, números 1–5, as cinco cores em “-bite/-pite”, “bia'” mãe, “ape'” pai,
 *   “gahnin”/“gahni” casa) — e acrescenta duas palavras que o Swadesh não cobre, usadas aqui com essa
 *   fonte isolada: “bungu” (cavalo) e “gwi'yaa'”/variante “biagwi'yaa'” (águia), além de “ha'niibe”
 *   (milho), do site de vocabulário geral.
 *
 * DECISÕES IMPORTANTES:
 *   1. Nenhuma fonte consultada registra um “oi”, “obrigado” ou “sim” fixos em shoshone — por isso
 *      este curso usa o adjetivo atestado “tsaa'” (bom, legal) como cumprimento/expressão de
 *      aprovação, a mesma estratégia já usada por outros pacotes indígenas deste app com lacunas
 *      parecidas (tpj, nhd, kgk), em vez de inventar uma saudação que nenhuma fonte confirma.
 *   2. A Wiktionary cita vários verbos do Swadesh como RAIZ PRESA, com hífen no final (ex.: “deka-”
 *      comer, “bui-” ver, “hiibi-” beber), sinalizando que a forma citada exige um sufixo de pessoa
 *      ou de aspecto para virar uma palavra completa — nenhuma fonte consultada mostra qual seria
 *      esse sufixo no dialeto de Fort Hall. Por segurança, este pacote NÃO inclui essas raízes presas
 *      no vocabulário (evitando construir uma “palavra” que, sozinha, nenhum falante usaria): a
 *      categoria “Verbos-chave” traz só as formas que a própria fonte cita SEM hífen (yahnai, nui,
 *      ekkehsah, kwapi, tsai', go'aih, nikkumpah), tratadas como a forma citável mais segura.
 *   3. Como nenhuma fonte deu uma frase completa testemunhal no dialeto de Fort Hall (só palavras
 *      isoladas), cada frase de exemplo abaixo é A PRÓPRIA PALAVRA, sozinha — sem inventar
 *      conjugação, concordância ou sintaxe nenhuma. Sequências e listas (contar números, nomear
 *      bichos em fila) aparecem só em curriculo.ts e historias.ts, nunca aqui, e sempre como
 *      enumeração, não como frase gramatical nova.
 *   4. O shoshone não tem gênero gramatical (masculino/feminino) nos substantivos, documentado para
 *      toda a família uto-asteca numa posição semelhante (ver nah/index.ts, náuatle clássico); por
 *      isso `gender` fica de fora em todas as linhas.
 *   5. O apóstrofo marcado nas palavras (ex.: “sadee'”, “tsaa'”) é a oclusiva glotal, uma consoante de
 *      verdade no shoshone, não uma pontuação decorativa — ver gramatica.ts.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ["tsaa'", 'bom, legal, bem (sem “oi” documentado, usado aqui como cumprimento/aprovação — ver nota no cabeçalho)', 'adjetivo', 'Expressões', '👍', "Tsaa'."],
  // ── Essenciais ──
  ['gai', 'não (negação)', 'advérbio', 'Essenciais', '🚫', 'Gai.'],
  ['hinni', 'o quê, que', 'pronome', 'Essenciais', '❓', 'Hinni?'],
  ["haga'", 'onde', 'advérbio', 'Essenciais', '❓', "Haga'?"],
  ['hagaaden', 'quem', 'pronome', 'Essenciais', '❓', 'Hagaaden?'],
  ["hagai'", 'como', 'advérbio', 'Essenciais', '❓', "Hagai'?"],
  ["himbai'", 'quando', 'advérbio', 'Essenciais', '❓', "Himbai'?"],
  ['u', 'este, esta, isto', 'pronome', 'Essenciais', '👉', 'U.'],
  // ── Pessoas ──
  ['ne', 'eu', 'pronome', 'Pessoas', '🙋', 'Ne.'],
  ['enne', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Enne.'],
  ['iden', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Iden.'],
  ['nehwe', 'nós', 'pronome', 'Pessoas', '🙌', 'Nehwe.'],
  ['memme', 'vós, vocês', 'pronome', 'Pessoas', '🫵', 'Memme.'],
  ["sidee'", 'eles, elas', 'pronome', 'Pessoas', '👥', "Sidee'."],
  ['newe', 'pessoa, ser humano (também a autodesignação do povo shoshone)', 'substantivo', 'Pessoas', '🧑', 'Newe.'],
  ["bia'", 'mãe', 'substantivo', 'Pessoas', '👩', "Bia'."],
  ["ape'", 'pai', 'substantivo', 'Pessoas', '👨', "Ape'."],
  // ── Natureza ──
  ["da'bai", 'sol', 'substantivo', 'Natureza', '☀️', "Da'bai."],
  ["mea'", 'lua', 'substantivo', 'Natureza', '🌙', "Mea'."],
  ["da'ziyumbi", 'estrela', 'substantivo', 'Natureza', '⭐', "Da'ziyumbi."],
  ["baa'", 'água', 'substantivo', 'Natureza', '💧', "Baa'."],
  ['dowope', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Dowope.'],
  ["doo'ya", 'montanha', 'substantivo', 'Natureza', '⛰️', "Doo'ya."],
  ['dugaani', 'noite', 'substantivo', 'Natureza', '🌌', 'Dugaani.'],
  ["dabai'yi", 'dia (período diurno)', 'substantivo', 'Natureza', '🌞', "Dabai'yi."],
  // ── Animais ──
  ["sadee'", 'cachorro', 'substantivo', 'Animais', '🐕', "Sadee'."],
  ['baingwi', 'peixe', 'substantivo', 'Animais', '🐟', 'Baingwi.'],
  ["huchuu'", 'pássaro', 'substantivo', 'Animais', '🐦', "Huchuu'."],
  ["deheya'", 'veado, cervo', 'substantivo', 'Animais', '🦌', "Deheya'."],
  ["daa'bu", 'coelho', 'substantivo', 'Animais', '🐇', "Daa'bu."],
  ["gwi'yaa'", 'águia', 'substantivo', 'Animais', '🦅', "Gwi'yaa'."],
  // ── Alimentação e Restaurantes ──
  ["ha'niibe", 'milho', 'substantivo', 'Alimentação e Restaurantes', '🌽', "Ha'niibe."],
  ['onapin', 'sal', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'Onapin.'],
  ["no'yo", 'ovo', 'substantivo', 'Alimentação e Restaurantes', '🥚', "No'yo."],
  // ── Corpo ──
  ['buih', 'olho', 'substantivo', 'Corpo', '👁️', 'Buih.'],
  ['naingi', 'orelha', 'substantivo', 'Corpo', '👂', 'Naingi.'],
  ["muu'bi", 'nariz', 'substantivo', 'Corpo', '👃', "Muu'bi."],
  ['dembai', 'boca', 'substantivo', 'Corpo', '👄', 'Dembai.'],
  ["mo'", 'mão', 'substantivo', 'Corpo', '✋', "Mo'."],
  ['nambai', 'pé', 'substantivo', 'Corpo', '🦶', 'Nambai.'],
  // ── Casa ──
  ['gahnin', 'casa', 'substantivo', 'Casa', '🏠', 'Gahnin.'],
  ['tepana', 'parede', 'substantivo', 'Casa', '🧱', 'Tepana.'],
  ['demuku', 'corda', 'substantivo', 'Casa', '🪢', 'Demuku.'],
  // ── Números ──
  ["seme'", 'um', 'numeral', 'Números', '1️⃣', "Seme'."],
  ['wahatehwe', 'dois', 'numeral', 'Números', '2️⃣', 'Wahatehwe.'],
  ["bahaitee'", 'três', 'numeral', 'Números', '3️⃣', "Bahaitee'."],
  ['watsewite', 'quatro', 'numeral', 'Números', '4️⃣', 'Watsewite.'],
  ['manegite', 'cinco', 'numeral', 'Números', '5️⃣', 'Manegite.'],
  ['naafaite', 'seis', 'numeral', 'Números', '6️⃣', 'Naafaite.'],
  ['daatsewiti', 'sete', 'numeral', 'Números', '7️⃣', 'Daatsewiti.'],
  ['nawiwatsewitse', 'oito', 'numeral', 'Números', '8️⃣', 'Nawiwatsewitse.'],
  ['seemonowemihyande', 'nove', 'numeral', 'Números', '9️⃣', 'Seemonowemihyande.'],
  ['seemoten', 'dez', 'numeral', 'Números', '🔟', 'Seemoten.'],
  // ── Verbos-chave ──
  ['yahnai', 'rir', 'verbo', 'Verbos-chave', '😄', 'Yahnai.'],
  ['nui', 'brincar, jogar', 'verbo', 'Verbos-chave', '🤸', 'Nui.'],
  ['ekkehsah', 'bocejar', 'verbo', 'Verbos-chave', '🥱', 'Ekkehsah.'],
  ['kwapi', 'deitar-se, estar deitado', 'verbo', 'Verbos-chave', '🛌', 'Kwapi.'],
  ["tsai'", 'segurar (na mão)', 'verbo', 'Verbos-chave', '✊', "Tsai'."],
  ["go'aih", 'virar, mudar de direção', 'verbo', 'Verbos-chave', '🔄', "Go'aih."],
  ['nikkumpah', 'lutar, brigar', 'verbo', 'Verbos-chave', '🥊', 'Nikkumpah.'],
  // ── Cores ──
  // a fonte (Wiktionary) anota cada cor como "raiz(bite/pite)", ex. "ainga(bite)": o sufixo entre
  // parênteses marca a forma citada de um adjetivo de cor; aqui ele entra já junto à raiz.
  ['aingabite', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Aingabite.'],
  ['buhibite', 'verde', 'adjetivo', 'Cores', '🟢', 'Buhibite.'],
  ['ohapite', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Ohapite.'],
  ['dosabite', 'branco', 'adjetivo', 'Cores', '⚪', 'Dosabite.'],
  ['duhubite', 'preto', 'adjetivo', 'Cores', '⚫', 'Duhubite.'],
];

export const VOCAB_SHH = buildVocab('shh', ROWS);
