import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do yawanawá (código ISO 639-3 “ywn”), língua pano da Terra Indígena Rio Gregório
 * (Tarauacá, Acre). Ver index.ts para a classificação e as fontes do código ISO.
 *
 * FONTES (todas lidas de verdade na entrega de 16/10/2026; as siglas aparecem no comentário de cada
 * palavra; o número depois da sigla é a página, ou o exemplo quando dito “ex.”):
 *
 * [PAU04] Aldir Santos de Paula. 2004. A língua dos índios Yawanawá do Acre. Tese de doutorado,
 *         Unicamp (orientação de Lucy Seki; livro pela Edufal, 2007). A tese NÃO foi encontrada em
 *         acesso aberto (o repositório da Unicamp estava fora do ar em 16/10/2026). Os dados dela vêm
 *         citados, com a página da tese, em [SD24] e [SD25], e na lista [ASJP]. A transcrição é
 *         FONÉTICA (ɨ, β, ʃ, tʃ, ɾ).
 * [CT13]  Lívia de Camargo Silva Tavares de Souza (Camargo-Tavares). 2013. Fonologia, morfologia e
 *         sintaxe das expressões nominais em Yawanawá (Pano). Dissertação, UFRJ. Também não achada
 *         aberta; exemplos citados com a página em [SD24]. Ela já escreve “sh”, “tx” e “y”
 *         (“yawa rete-a”, “peshe”, “itxu-a”), mas mantém “ɨ” no pronome.
 * [SD24]  Amanda Milza Miranda Silva e Fábio Bonfim Duarte. 2024. “De que se trata a ergatividade
 *         cindida em Yawanawá?”. Revista Brasileira de Linguística Antropológica 16: 131–167.
 *         DOI 10.26512/rbla.v16i1.55784 (aberto). Tabela 1 (p. 137): pronomes; p. 138–142: tempo,
 *         aspecto, modo e ordem das palavras; p. 145–161: caso ergativo.
 * [SD25]  Silva e Duarte. 2025. “Hãtxa Kuĩ e Yawanawá, uma apresentação dos povos e línguas”. Revista
 *         Brasileira de Linguística Antropológica 17. DOI 10.26512/rbla.v17i1.61005 (aberto).
 * [PAU03] Paula. 2003. “Formação de palavras na língua Yawanawá”. Revista do GELNE 5(1/2): 9–14
 *         (aberto, periodicos.ufrn.br/gelne/article/view/9429). Fonético; exemplos numerados.
 * [PAU08] Paula. 2008. “Os morfemas de negação e causatividade nas línguas Puyanáwa e Yawanawá
 *         (pano)”. Revista do GELNE 10(2): 30–33 (aberto, article/view/12155). Este já usa uma grafia
 *         prática: “e-n” (eu), “vene” (marido), “txay”, “itxa-pa”.
 * [ASJP]  The ASJP Database, lista “YAWANAWA” (fonte declarada: Paula 2004),
 *         asjp.clld.org/languages/YAWANAWA (CC BY 4.0). Código ASJP: 3 = ɨ, b = β, S = ʃ, C = tʃ.
 * [CTY]   Aldaiso Luiz Vinnya, Maria Luiza Pinedo Ochoa e Gleyson de Araújo Teixeira (orgs.). 2006.
 *         Costumes e tradições do povo Yawanawá. Rio Branco: Comissão Pró-Índio do Acre e Organização
 *         dos Professores Indígenas do Acre (escrito por pesquisadores e professores yawanawá).
 *         cpiacre.org.br/wp-content/uploads/2020/03/Costumes-e-Tradicoes-do-Povo-Yawanawa.pdf.
 * [VAK]   Vakehu Shenipahu: contos infantis do povo Yawanawa. 2016. Associação Sociocultural Yawanawa
 *         (ASCY), org. Laura Soriano Yawanawa, contos do pajé Tata Txanu Natasheni, texto em yawanawá
 *         revisto pelo professor Fernando Kateyuve Yawanawa; apoio Forest Trends. Bilíngue, página a
 *         página (forest-trends.org/wp-content/uploads/imported/livroyawa-contospdf-pdf.pdf).
 * [PV16]  Plano de Vida Yawanawa. 2016. ASCY e Forest Trends
 *         (forest-trends.org/wp-content/uploads/2019/03/life-plan-yawanawa.pdf).
 * [GIL99] Laura Pérez Gil. 1999. Pelos caminhos de Yuve: conhecimento, cura e poder no xamanismo
 *         yawanawa. Dissertação, UFSC (repositorio.ufsc.br, handle 123456789/80950).
 * [NL]    native-languages.org (yawanawa_words.htm, yawanawa_body.htm, yawanawa_guide.htm,
 *         fampan_words.htm): as palavras do pacote anterior.
 * [ISA]   pib.socioambiental.org/pt/Povo:Yawanawá e pt.wikipedia.org/wiki/Yawanawá: o vocabulário
 *         cultural do pacote anterior.
 *
 * REGRA DE GRAFIA: vale a escrita das fontes em grafia prática — os livros da comunidade (CTY, VAK,
 * PV16), Camargo-Tavares, Paula 2008 e NL. Quando a palavra só aparece transcrita foneticamente
 * (PAU04, PAU03, ASJP), ela entra só se as letras forem as mesmas, ou trocando apenas os sons cuja
 * troca está documentada na mesma palavra escrita das duas formas:
 *   ɨ → e  (PAU04 “rɨtɨ-a” = CT13 e PAU08 “rete-a”, matar);
 *   β → v  (PAU04 “βakɨ” = VAK “vake”, criança; ASJP “biru” = NL “viru”, olho);
 *   tʃ → tx (PAU04 “itʃu-a” = CT13 “itxu-a”, correr; PAU04 “itʃapa” = VAK “itxapa”, muito);
 *   ɾ → r, j → y (PAU03 “ja'wa” = “yawa”).
 * O “ʃ” NÃO é trocado: os livros da comunidade escrevem esse som ora “sh”, ora “x”, e não dá para
 * adivinhar qual. Palavras com “ʃ” que só existem em transcrição fonética ficaram de fora.
 * Os pronomes seguem os livros da comunidade (VAK): “Ē” onde Paula transcreve “ɨn” (eu), “mĩ” onde ele
 * escreve “min” (você) e “nũ” onde escreve “nun” (nós).
 *
 * FICARAM DE FORA, por fontes que discordam: “cabelo” (NL “vu” × PAU03 “hu”), “mão” (PAU03 “mɨhi” ×
 * ASJP “m3k3n”), “dente” (ASJP “s3ta” × CT13 “mankati”), “árvore” (PAU03 “ni” × ASJP “iwi”). A palavra
 * “vu” (cabelo), que estava no pacote anterior, saiu por isso.
 *
 * As frases de exemplo são citadas das fontes. As MONTADAS por este curso estão marcadas “montada” e
 * seguem uma regra documentada: possessivo + substantivo, como “e-wan vene” (meu marido, PAU08 ex. 13);
 * substantivo + adjetivo, como “mapu turu” (cabeça redonda, PAU03 ex. 09).
 */
export const ROWS: VocabRow[] = [
  // ── Pronomes ──
  // ē: VAK 8 “Ē nika” (“Assim eu escutei”); PAU04 “ɨ-n” (SD24 Tabela 1, p. 137); PAU08 “e-n”; ASJP “3n”.
  // Exemplo: CT13 95 “ɨ-n nuku-a” (eu cheguei), citado em SD24 ex. 28, com o pronome na grafia de VAK.
  ['ē', 'eu', 'pronome', 'Pronomes', '🙋', 'Ē nukua.'],
  // mĩ: VAK 11 “Mĩ itirumarã”; PAU04 “mi-n” (SD24 Tabela 1); ASJP “min”. Exemplo: CT13 116 “mi-n yawa
  // rete-a” (você matou o queixada, SD24 ex. 27).
  ['mĩ', 'tu, você', 'pronome', 'Pronomes', '🫵', 'Mĩ yawa retea.'],
  // a: SD24 Tabela 1 (3ª pessoa, sujeito intransitivo e objeto); PAU03 ex. 02 “a-ø uʃa” (ele está dormindo).
  // Exemplo: PAU04 206 “a-ø pakɨ-a” (ele caiu, SD25 ex. 14), grafia ɨ → e.
  ['a', 'ele, ela', 'pronome', 'Pronomes', '🧍', 'A pakea.'],
  // nũ: VAK 21 “nũ tsua ũĩyama” (nós não vimos); PAU04 “nu-n” (SD24 Tabela 1); ASJP “nun”.
  ['nũ', 'nós', 'pronome', 'Pronomes', '🙌', 'Nũ tsua ũĩyama.'],
  // matu: SD24 Tabela 1 (“matu-n” sujeito, “matu” objeto); VAK 11 “matu ravãĩhĩ”. Sem frase traduzida.
  ['matu', 'vocês', 'pronome', 'Pronomes', '🫂', 'Matu.'],
  // atu: SD24 Tabela 1 (“atu” sujeito intransitivo e objeto, “atu-n” sujeito transitivo); PAU08 ex. 11
  // “atu-n katu rete-a-ma” (eles não mataram o veado).
  ['atu', 'eles, elas', 'pronome', 'Pronomes', '🧑‍🤝‍🧑', 'Atu.'],
  // ea: SD24 Tabela 1 “ɨ-a” (objeto, 1ª pessoa) e CT13 94 “mi-n ɨ-a kux-a” (você bateu em mim); VAK 22
  // “ea wetsa inã kapũ” (“me passem um”).
  ['ea', 'me, mim', 'pronome', 'Pronomes', '🫴', 'Mĩ ea kuxa.'],
  // mia: SD24 Tabela 1 “mi-a”; CT13 94 “ɨ-n mi-a kux-a” (eu bati em você); VAK 16 “mã mia yui hiya”.
  ['mia', 'te, ti', 'pronome', 'Pronomes', '👉', 'Ē mia kuxa.'],
  // ewan: PAU08 ex. 13 “e-wan vene-n” (1s-Pos marido-Erg, “meu marido”); PAU04 124 “ɨ-uan” (1s-pos).
  ['ewan', 'meu, minha', 'pronome', 'Pronomes', '🔑', 'Ewan vene.'],
  // nuke: PV16 59 “a língua Yawanawa (NukeTsãi)”; VAK 3 “Nukē shenipahu”, 28 “nuke tetxiwe” (“venha nos
  // emendar”); SD24 Tabela 1 “nukɨ” (objeto, 1ª do plural).
  ['nuke', 'nosso, nossa', 'pronome', 'Pronomes', '🤲', 'Nuke tsãi.'],

  // ── Pessoas e família ──
  // nukevene: NL; PAU04 “nukɨβɨnɨ” (homem, SD24 ex. 11 e 22), grafia ɨ → e, β → v.
  ['nukevene', 'homem', 'substantivo', 'Pessoas e família', '👨', 'Nukevene.'],
  // awinhu: NL. PAU04 195 escreve “auin-ø-hu” (mulher-abs-hum, SD24 ex. 59): o “-hu” é a marca de humano.
  ['awinhu', 'mulher', 'substantivo', 'Pessoas e família', '👩', 'Awinhu.'],
  // nawa: NL, ISA (“yawa” + “nawa”); CTY 49–50 “os nawá (brancos)”; PAU03 ex. 03b “na'wa” (povo, gente).
  ['nawa', 'povo, gente (e também os brancos, não indígenas)', 'substantivo', 'Pessoas e família', '👥', 'Yawa nawa.'],
  // vake: VAK (título “Vakehu Shenipahu”, contos infantis; p. 3 “vake yuinaka”); PAU04 “βakɨ” (criança,
  // filho: SD24 ex. 2, 5 e 13); PAU03 ex. 17c “βakɨ” (criança). Exemplo: o plural com “-hu” de VAK.
  ['vake', 'criança, filho(a)', 'substantivo', 'Pessoas e família', '🧒', 'Vakehu.'],
  // apa: PAU04 122 “apa-n βaki-ø kuʃa-pauni” (o pai batia no filho, SD24 ex. 5). Exemplo montado:
  // possessivo + substantivo (regra de “e-wan vene”, PAU08 ex. 13).
  ['apa', 'pai', 'substantivo', 'Pessoas e família', '👨‍👧', 'Ewan apa.'],
  // vene: PAU08 ex. 13 “e-wan vene-n” (meu marido). VAK 13 usa “venewã” para o jabuti macho.
  ['vene', 'marido', 'substantivo', 'Pessoas e família', '💍', 'Ewan vene.'],
  // utxin: PV16 19 “Utxin (como chama irmão na língua)”.
  ['utxin', 'irmão', 'substantivo', 'Pessoas e família', '👬', 'Utxin.'],
  // txai: GIL99 60, nota (“As palavras txai e tsave significam respectivamente primo e prima
  // cruzado/a”); VAK 21 “Ha! Eve nanea, txai.” (traduzido “Meus primos”); CTY 163 “o txai Terri Aquino”.
  ['txai', 'primo cruzado (também forma de tratamento)', 'substantivo', 'Pessoas e família', '🤝', 'Txai!'],

  // ── Corpo ──
  // mapu: NL; PAU03 ex. 09b “mapu turu” (cabeça redonda); CTY 74 “tamaya unu mapu pitxã”.
  ['mapu', 'cabeça', 'substantivo', 'Corpo', '🙆', 'Mapu turu.'],
  // viru: NL; ASJP “biru” (b = β).
  ['viru', 'olho', 'substantivo', 'Corpo', '👁️', 'Viru.'],
  // rekin: NL; ASJP “r3kin” (3 = ɨ, escrito “e”).
  ['rekin', 'nariz', 'substantivo', 'Corpo', '👃', 'Rekin.'],
  // pahinki: NL; ASJP “pahink~i”; PAU03 ex. 13b “pahinki hui” (orelha + buraco = ouvido); VAK 23 “pahĩki”.
  ['pahinki', 'orelha', 'substantivo', 'Corpo', '👂', 'Pahinki.'],
  // kixa: NL (só esta fonte).
  ['kixa', 'boca', 'substantivo', 'Corpo', '👄', 'Kixa.'],
  // ana: ASJP “ana” (TONGUE, Paula 2004).
  ['ana', 'língua (órgão)', 'substantivo', 'Corpo', '👅', 'Ana.'],
  // imi: ASJP “imi” (BLOOD); VAK 17 “imi sirũki” (“lamberam todo sangue”).
  ['imi', 'sangue', 'substantivo', 'Corpo', '🩸', 'Imi.'],
  // vitxi: ASJP “biCi” (SKIN); VAK 17 “ãu vitxihuya pikãkĩyã” (“comendo a onça com couro e tudo”).
  ['vitxi', 'pele', 'substantivo', 'Corpo', '🫱', 'Vitxi.'],
  // taka: ASJP “taka” (LIVER); VAK 23 “ãu taka ture” (“pedaço de fígado”).
  ['taka', 'fígado', 'substantivo', 'Corpo', '🫀', 'Taka.'],

  // ── Comida ──
  // yuma: ASJP “yuma” (FISH); CTY 74 “Yuma nãne” (peixe moqueado); PAU08 ex. 03 “iuma” (peixe).
  // Exemplo: CTY 74 “Yuma pitxã” (peixe cozido).
  ['yuma', 'peixe', 'substantivo', 'Comida', '🐟', 'Yuma pitxã.'],
  // nami: PAU04 121 “nami” (SD24 ex. 3, “ontem mesmo você comeu carne”); VAK 17 “namihu”. CTY escreve
  // “nãmi” (“Nãmi shuy”, carne assada) e PAU08 “nãbi”: a grafia escolhida é a de VAK e PAU04.
  ['nami', 'carne', 'substantivo', 'Comida', '🥩', 'Nami.'],
  // atsa: PAU04 123 “atsa” (SD24 ex. 7); PAU03 ex. 02b “atsa” (mandioca). Exemplo: CTY 79 “Atsa shuy”
  // (macaxeira assada na brasa).
  ['atsa', 'mandioca, macaxeira', 'substantivo', 'Comida', '🍠', 'Atsa shuy.'],
  // sheki: CTY 74 e 79 (“Sheki vet”, “Sheki tuvã”, milho torrado); PAU03 ex. 09a “ʃɨki paʃin” (milho
  // amarelo). GIL99 59, nota: “Sheke significa milho”.
  ['sheki', 'milho', 'substantivo', 'Comida', '🌽', 'Sheki tuvã.'],
  // mãnyã: CTY 80 “Mãnyã mutsa” (mingau de banana madura).
  ['mãnyã', 'banana', 'substantivo', 'Comida', '🍌', 'Mãnyã mutsa.'],
  // kari: CTY 80 “Kari mãmã” (caiçuma de batata-doce com macaxeira); PAU04 115 “kari” (batata, SD24 ex. 4).
  ['kari', 'batata-doce', 'substantivo', 'Comida', '🥔', 'Kari.'],
  // tamaya: CTY 74 e 79 (“Tamaya mãnyã tua”, mingau de banana madura com mudubim ralado; “cozinha o
  // amendoim junto com a cabeça de queixada”).
  ['tamaya', 'amendoim', 'substantivo', 'Comida', '🥜', 'Tamaya.'],
  // kãkãya: CTY 79 “Kãkãya mãnyã tua” (mingau de banana madura cozida com abacaxi ralado).
  ['kãkãya', 'abacaxi', 'substantivo', 'Comida', '🍍', 'Kãkãya.'],
  // pitxã: CTY 74–77 (“Nãmi pitxã”, carne cozida; “Yuma pitxã”, peixe cozido; “Kunu pitxã”).
  ['pitxã', 'cozido', 'adjetivo', 'Comida', '🍲', 'Yuma pitxã.'],
  // shuy: CTY 74 e 79 (“Nãmi shuy”, carne assada; “Atsa shuy”, macaxeira assada na brasa).
  ['shuy', 'assado', 'adjetivo', 'Comida', '🍢', 'Atsa shuy.'],

  // ── Animais ──
  // kaman: NL; ASJP “kaman” (DOG); PAU03 ex. 01 “kama-hu-nɨn” (os cachorros).
  ['kaman', 'cachorro', 'substantivo', 'Animais', '🐕', 'Kaman.'],
  // yawa: NL, ISA; CT13 97 “Tika-n yawa rete-a” (Tika matou o queixada, SD24 ex. 23).
  ['yawa', 'queixada, porco-do-mato', 'substantivo', 'Animais', '🐗', 'Tikan yawa retea.'],
  // shawe: CTY 148–149 “Brincadeira do jabuti (shawe)”; VAK 11–15 (falas dos jabutis marcadas “(Shawe)”).
  ['shawe', 'jabuti', 'substantivo', 'Animais', '🐢', 'Shawe.'],
  // yumãi: VAK 11–14 (as falas da onça pintada vêm marcadas “(Yumãi)”; p. 12 “A yumãĩ huãnahu”).
  ['yumãi', 'onça', 'substantivo', 'Animais', '🐆', 'Yumãi.'],
  // katsu: PAU04 132 “misi-nɨn-si katsu-ø a-ka” (só o Misi matou veado, SD24 ex. 17); CTY 79 “Katsu atu
  // nãnea” (o fato do veado… moqueado). PAU08 ex. 11 escreve “katu”.
  ['katsu', 'veado', 'substantivo', 'Animais', '🦌', 'Katsu.'],
  // kape: PAU04 182 “kapɨ” (jacaré, SD24 ex. 2); PAU03 ex. 02b. Grafia ɨ → e.
  ['kape', 'jacaré', 'substantivo', 'Animais', '🐊', 'Vakehunen kape retea.'],
  // make: CTY 83–84 “Make (piranha)”, numa lista de peixes.
  ['make', 'piranha', 'substantivo', 'Animais', '🐠', 'Make.'],
  // kupa: CTY 83–84 “Kupa (piaba)”, na mesma lista.
  ['kupa', 'piaba', 'substantivo', 'Animais', '🐡', 'Kupa.'],
  // tuyku: CTY 148–149 “Brincadeiras do macaco prego (tuyku)”.
  ['tuyku', 'macaco-prego', 'substantivo', 'Animais', '🐒', 'Tuyku.'],
  // kusku: CTY 148–149 “Brincadeira do urubu (kusku)”.
  ['kusku', 'urubu', 'substantivo', 'Animais', '🦅', 'Kusku.'],

  // ── Natureza ──
  // vari: NL; ASJP “bari” (SUN).
  ['vari', 'sol', 'substantivo', 'Natureza', '☀️', 'Vari.'],
  // uxe: NL (só esta fonte).
  ['uxe', 'lua', 'substantivo', 'Natureza', '🌙', 'Uxe.'],
  // waka: NL; ASJP “waka” (WATER); Ferreira 2005, p. 80, citado em SD24 ex. 47 (“Gabriel não bebe água quente”).
  ['waka', 'água', 'substantivo', 'Natureza', '💧', 'Waka.'],
  // txi: ASJP “Ci” (FIRE), grafia tʃ → tx.
  ['txi', 'fogo', 'substantivo', 'Natureza', '🔥', 'Txi.'],
  // yame: ASJP “yam3” (NIGHT), grafia ɨ → e.
  ['yame', 'noite', 'substantivo', 'Natureza', '🌃', 'Yame.'],
  // niti: ASJP “niti” (PATH).
  ['niti', 'caminho', 'substantivo', 'Natureza', '🛤️', 'Niti.'],
  // pei: ASJP “p3i” (LEAF), grafia ɨ → e.
  ['pei', 'folha', 'substantivo', 'Natureza', '🍃', 'Pei.'],
  // vinun: PAU04 126 e 129 “βinun” (buriti, SD24 ex. 11 e 14), grafia β → v. Exemplo: PAU04 129
  // “βinun mutsa-uɨ” (amasse o buriti), com o imperativo escrito “-we” como em VAK 28 (“tetxiwe”).
  ['vinun', 'buriti', 'substantivo', 'Natureza', '🌴', 'Vinun mutsawe.'],

  // ── Casa e coisas ──
  // peshe: CT13 51 “Tika-n peshe” (a casa do Tika, SD24 ex. 42); PAU03 ex. 17b “pɨʃɨ” (casa).
  ['peshe', 'casa', 'substantivo', 'Casa e coisas', '🏠', 'Tikan peshe.'],
  // shuvu: PV16 59 (“construir um Shuvu em cada aldeia”) e 16 (“todos moravam embaixo do Shuvuã”).
  ['shuvu', 'maloca', 'substantivo', 'Casa e coisas', '🛖', 'Shuvu.'],
  // pani: PAU04 115 “pani-ø uasɨnɨ-a-ma” (a rede não rasgou, SD24 ex. 25).
  ['pani', 'rede', 'substantivo', 'Casa e coisas', '🧺', 'Pani.'],
  // tari: PAU04 124 “ɨ-uan taɾi-ø tʃu-kai” (estou lavando minha roupa, SD24 ex. 9); PAU03 ex. 15b.
  ['tari', 'roupa', 'substantivo', 'Casa e coisas', '👕', 'Tari.'],
  // weshati: CT13 133 “Tika-n weshati-n nami shate-i” (Tika está cortando carne com uma faca, SD24 ex. 43).
  ['weshati', 'faca', 'substantivo', 'Casa e coisas', '🔪', 'Weshati.'],
  // keti: PAU04 200 “tʃanu-n kɨti-ø kɨnɨ-a” (Txanu pintou a panela, SD24 ex. 49), grafia ɨ → e.
  ['keti', 'panela', 'substantivo', 'Casa e coisas', '🍳', 'Keti.'],
  // ane: ASJP “an3” (NAME), grafia ɨ → e.
  ['ane', 'nome', 'substantivo', 'Casa e coisas', '🏷️', 'Ane.'],
  // tsãi: PV16 59 “a língua Yawanawa (NukeTsãi)”; VAK 3 “Nukē tsãi tsua iyamai” (o pajé: “hoje em dia,
  // ninguém quer mais falar em nossa língua”).
  ['tsãi', 'fala, língua (idioma)', 'substantivo', 'Casa e coisas', '🗣️', 'Nuke tsãi.'],

  // ── Verbos (raiz; os sufixos estão na aba Gramática) ──
  // pi: PAU04 123 “nun-n atsa-ø pi-ø” (nós comemos macaxeira, SD24 ex. 7); PAU08 ex. 03 “pi-pay”.
  ['pi', 'comer', 'verbo', 'Verbos', '🍽️', 'Nũ atsa pi.'],
  // aya: ASJP “aya” (DRINK); PAU03 ex. 01b “aja-paj-kani” (querem beber); PAU04 127 “aia-tiɾu”.
  ['aya', 'beber', 'verbo', 'Verbos', '🥤', 'Aya.'],
  // ũĩ: VAK 21 “nũ tsua ũĩyama” (nós não vimos); PAU04 212 “uin-tamɨa” (eu vi, SD24 ex. 13); ASJP “uwi*”.
  ['ũĩ', 'ver', 'verbo', 'Verbos', '👀', 'Nũ tsua ũĩyama.'],
  // nika: ASJP “nika” (HEAR); PAU04 124 “nika-ø” (ouve, SD24 ex. 8); VAK 8 “Ē nika” (assim eu escutei).
  ['nika', 'ouvir', 'verbo', 'Verbos', '🎧', 'Ē nika.'],
  // nuku: CT13 95 “ɨ-n nuku-a” (eu cheguei, SD24 ex. 28).
  ['nuku', 'chegar', 'verbo', 'Verbos', '🏁', 'Ē nukua.'],
  // itxu: CT13 95 “ɨ-n itxu-a” (eu corri) e 97 “Tika itxu-a” (Tika correu), SD24 ex. 29 e 62.
  ['itxu', 'correr', 'verbo', 'Verbos', '🏃', 'Tika itxua.'],
  // tupĩk: CT13 129 “Tika-ø tupĩk-a” (Tika nadou, SD24 ex. 24). PAU04 escreve “tupin-” (SD25 ex. 12).
  ['tupĩk', 'nadar', 'verbo', 'Verbos', '🏊', 'Tika tupĩka.'],
  // rete: CT13 116 “ɨ-n yawa rete-a” (eu matei o queixada, SD24 ex. 26); PAU08 ex. 10 “rete-a-ma”.
  ['rete', 'matar', 'verbo', 'Verbos', '🏹', 'Ē yawa retea.'],
  // pake: PAU04 206 “a-ø pakɨ-a” (ele caiu, SD25 ex. 14); CT13 132 “Tika-n peshe-ø pake-a” (Tika
  // derrubou a casa, SD24 ex. 35).
  ['pake', 'cair (e derrubar)', 'verbo', 'Verbos', '⬇️', 'A pakea.'],
  // munu: PAU08 ex. 02 “a-Ø-hu-hu itxa-pa munu-a-hu” (eles dançaram muito).
  ['munu', 'dançar', 'verbo', 'Verbos', '💃', 'Munu.'],
  // na: ASJP “na” (DIE); PAU04 195 “auin-ø-hu man na-a” (a mulher já morreu, SD24 ex. 59).
  ['na', 'morrer', 'verbo', 'Verbos', '🥀', 'Na.'],
  // tsau: PAU03 ex. 14e “tsaw” (sentar) → “tsaw-ti” (banco); VAK 25 “Na tsauahu” (os que estavam sentados).
  ['tsau', 'sentar-se', 'verbo', 'Verbos', '🪑', 'Tsau.'],
  // txu: PAU04 124 “tʃu-kai” (estou lavando, SD24 ex. 9), grafia tʃ → tx.
  ['txu', 'lavar', 'verbo', 'Verbos', '🧼', 'Txu.'],
  // puta: PAU04 123 “mɨʃkiti-ø puta-ni” (o menino jogava pedra, SD24 ex. 6); PAU03 ex. 14b “puta” (jogar)
  // → “puta-ti” (bola).
  ['puta', 'jogar, atirar', 'verbo', 'Verbos', '🤾', 'Puta.'],
  // mutsa: PAU04 126 “βinun-ø mutsa-misi” (o homem sempre amassa buriti, SD24 ex. 11); CTY 80 “Mãnyã
  // mutsa” (mingau de banana madura).
  ['mutsa', 'amassar', 'verbo', 'Verbos', '🫳', 'Vinun mutsawe.'],

  // ── Qualidades e tempo ──
  // itxapa: VAK 8 “itxapa”; PAU08 ex. 02 e 08 “itxa-pa”; PAU04 “itʃapa” (SD25 ex. 12, “você nada muito”).
  ['itxapa', 'muito', 'advérbio', 'Qualidades e tempo', '➕', 'Itxapama.'],
  // rama: PAU03 ex. 02a “βakɨhu-ø rama pakɨa” (o menino caiu neste instante).
  ['rama', 'agora', 'advérbio', 'Qualidades e tempo', '⏰', 'Rama.'],
  // vena: ASJP “b3na” (NEW); PAU03 ex. 08c “βɨna” (nova). Exemplo montado: substantivo + adjetivo
  // (regra de “mapu turu”, PAU03 ex. 09).
  ['vena', 'novo', 'adjetivo', 'Qualidades e tempo', '✨', 'Peshe vena.'],
  // kuru: PAU03 ex. 12b e 12c (“kuru”, escuro).
  ['kuru', 'escuro', 'adjetivo', 'Qualidades e tempo', '🌑', 'Kuru.'],
  // turu: PAU03 ex. 09b “mapu turu” (cabeça redonda).
  ['turu', 'redondo', 'adjetivo', 'Qualidades e tempo', '⚪', 'Mapu turu.'],
  // hui: PAU03 ex. 08a “hui” (sujo) → “hui-tapa” (sujo demais).
  ['hui', 'sujo', 'adjetivo', 'Qualidades e tempo', '🟤', 'Huitapa.'],

  // ── Números (NL; ASJP “wisti”, “rab3”) ──
  ['wisti', 'um', 'numeral', 'Números', '1️⃣', 'Wisti.'],
  ['rave', 'dois', 'numeral', 'Números', '2️⃣', 'Rave.'],

  // ── Cultura (ISA; GIL99 confirma: o capítulo 3 se chama “Shuãnka” (as rezas), “existem dois xinaya
  // (rezadores)”, a ayahuasca (“Uni”) “é ingerida durante a festa do mariri”. CTY 143 escreve a festa
  // “sayti”; aqui fica a grafia do ISA, “saiti”) ──
  ['shuãnka', 'reza, oração de cura', 'substantivo', 'Cultura', '🙏', 'Shuãnka.'],
  ['xinaya', 'rezador, especialista em reza', 'substantivo', 'Cultura', '🪶', 'Xinaya.'],
  ['uni', 'ayahuasca (bebida ritual)', 'substantivo', 'Cultura', '🍵', 'Uni.'],
  ['saiti', 'festa, grito ritual (termo genérico de festa)', 'substantivo', 'Cultura', '🎉', 'Saiti.'],
  ['mariri', 'festa, dança e canto ritual noturno (também o nome do festival anual do povo yawanawá)', 'substantivo', 'Cultura', '🪇', 'Mariri.'],
  ['mehina', 'brincadeira ritual de tirar/disputar comida do outro', 'substantivo', 'Cultura', '🤼', 'Mehina.'],
  ['kanë', 'brincadeira ritual de imitar ou “virar” um bicho', 'substantivo', 'Cultura', '🎭', 'Kanë.'],
];

export const VOCAB_YWN = buildVocab('ywn', ROWS);
