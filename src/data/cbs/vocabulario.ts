import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do huni kuĩ / hãtxa kuĩ (código ISO 639-3 “cbs”), língua pano do leste do Acre e do
 * sudeste do Peru. Ver index.ts para o nome, a classificação e o código.
 *
 * FONTES (todas lidas nesta entrega, 16/10/2026; a sigla aparece no comentário de cada palavra; o
 * número é a página impressa, “ex.” é o número do exemplo):
 *
 * [KAX14]  Joaquim Paulo de Lima Kaxinawá. 2014. Uma gramática da língua Hãtxa Kuĩ. Tese de doutorado,
 *          Universidade de Brasília (orientação de Ana Suelly Arruda Câmara Cabral). Versão em
 *          português; o autor é falante nativo, professor huni kuĩ formado pela CPI-Acre. O PDF tem uma
 *          fonte que some com o “ɨ”, o “ʂ” e várias letras do texto extraído: TODOS os exemplos usados
 *          aqui foram conferidos na imagem da página. A página impressa é a do PDF menos 1.
 * [KAX14h] A versão da mesma tese escrita em hãtxa kuĩ (“Hãtxa Kuĩ haska xarabu”), na grafia prática.
 * [KAX11]  Joaquim Paulo de Lima Kaxinawá. 2011. Confrontando registros e memórias sobre a língua e a
 *          cultura Huni Kuĩ: de Capistrano de Abreu aos dias atuais. Dissertação, UnB. Tabela 1 (p.
 *          41-43): palavras de Capistrano de Abreu com a forma fonética, a fonológica e a “escrita
 *          atual”; cap. III (p. 46-79): esboço de gramática; cap. IV (p. 81 em diante): a história
 *          “Yauxiku nawa” (o povo sovino), de Capistrano, reescrita na grafia atual e traduzida.
 * [CAM05]  Eliane Camargo. 2005. “Manifestações da ergatividade em caxinauá (pano)”. LIAMES 5: 55-86
 *          (Unicamp, aberto). Dados do rio Curanja (Peru), em transcrição fonológica própria.
 * [SD25]   Amanda Milza Miranda Silva e Fábio Bonfim Duarte. 2025. “Hãtxa Kuĩ e Yawanawá, uma
 *          apresentação dos povos e línguas”. Revista Brasileira de Linguística Antropológica 17
 *          (aberto). Cita KAX14 com página.
 * [MON]    Susan Montag (comp.). Diccionario cashinahua, 3ª ed. Lima: ILV, 2008 (2ª ed. 1981; edição preliminar de 1976), no
 *          archive.org (“cashinahuadiccionario”). Grafia do Peru: j = h, v = w, d = r, ch = tx. Só serve
 *          aqui para conferir; nenhuma palavra entra só por ele.
 * [BINA]   Aldemir Luiz Matheus Bina Kaxinawa. 2023. Nuku beyakiri yuinaka bushaka xarabu habu samaketi
 *          (Animais de caça e seus resguardos na cultura huni kuĩ). CPI-Acre; revisão do hãtxa kuĩ por
 *          Joaquim Mana Huni Kuĩ. Grafia prática.
 * [NHI]    Nũ hiwea inũ, betsa betsapa hiweabu (Nossa biodiversidade, nossa vida). CPI-Acre, 2017;
 *          tradução para o hãtxa kuĩ de Joaquim Mana Paula de Lima Kaxinawá. Grafia prática.
 * [HM]     Huni Meka: cantos do Nixi Pae. CPI-Acre e OPIAC, 2007 (professores da TI Kaxinawá do Rio
 *          Jordão). Grafia do Jordão, com “d” onde KAX escreve “r” (“dume”, “dau”).
 *
 * REGRA DE GRAFIA. O curso usa a grafia prática dos professores huni kuĩ do Brasil, a da coluna
 * “Escrita” da Tabela 1 de [KAX11] e dos livros [KAX14h], [BINA] e [NHI]. Quando a palavra só aparece
 * em transcrição fonológica ([KAX14], [KAX11] cap. III, [CAM05]), ela é passada para essa grafia só com
 * as trocas que a própria Tabela 1 de [KAX11] mostra na mesma palavra escrita dos dois jeitos:
 *   ɨ → e   ([mɨʃu] → “mexu”, escuro; [hiwɨ] → “hiwe”, casa);
 *   ʃ → x   ([jawʃiku] → “yauxiku”, sovina; [kuʃikãi] → “kuxikãi”, correu);
 *   ʂ → sh  ([tʃaʂu] → “txashu”, veado; [kaʂu] → “kashu”, foi; [ʂɨki] → “sheki”, milho);
 *   tʃ → tx ([tʃaʂu] → “txashu”);  j → y ([jawa] → “yawa”);  ɾ → r;
 *   ɨ̃ → ẽ  ([ɨ̃] → “ẽ”, eu, linha 32).
 * Em [CAM05], c → tx (“hanca” = “hãtxa”), j → y (“juxin” = “yuxĩ”), d → r (o próprio [KAX11] p. 45
 * diz que escreve “r” e não “d”), e o “n” no fim da sílaba vira til (o [KAX11] p. 45 não usa “n” para
 * a nasalidade). O “x” de Camargo vale para dois sons, e por isso palavra com “x” só vinda de [CAM05]
 * ficou de fora, a não ser quando a grafia prática dela aparece em outra fonte.
 * JUNÇÃO: as glosas das teses separam cada morfema (com hífen ou espaço). Na grafia prática, os
 * sufixos de tempo e de caso, o “-ki” e o “-rã” se escrevem juntos, como na “Escrita” de [KAX11]
 * (“hiwetã”, “hikishũ”, “kashũ”, “inãwẽ”, “kaunamaki”, “kaunarã”); “kiki”, “kiaki”, “shani”, “ipauni” e
 * a partícula de pergunta “mẽ” ficam separados, como em [KAX11] (“pukuni kiaki”) e na prosa de
 * [KAX14h] (“ria shani kiki”, “ipauni kiaki”).
 * O pronome “eu” (e o “meu”) se escreve “ẽ”, como em [KAX11] linha 32 e ex. 14 e em [BINA] (“ẽ txai”,
 * “ẽ ibu”); onde [KAX11] escreve “e” numa frase, o curso põe “ẽ”. O possuidor de 2ª pessoa, que
 * [KAX14] glosa “mi-ã”, é “mĩ”, como na coluna “possuidor” da Tabela 3 de [KAX11] 66.
 *
 * As frases de exemplo vêm das fontes. As MONTADAS pelo curso estão marcadas “montada” e seguem uma
 * regra documentada: possuidor + nome, como “ɨ̃ ɨwa” (minha mãe) e “ɨ̃ bakɨ” (meu filho), [KAX14] 69.
 *
 * MUDANÇAS em relação à primeira versão (que vinha da Wikipédia): a grafia passou do alfabeto fonético
 * para a grafia prática (ɨ → e, ş → sh); “Ɨ” (eu) virou “Ẽ”, com a nasal que [KAX14] 74 e [KAX11] 66
 * mostram; “muka” e “mukaia” deram lugar a “hãtxa” e “txana” (revisão de 16/10/2026: as duas existem
 * em fonte huni kuĩ, mas só no dicionário do Peru, [MON] “muka”, poder oculto, e “mukaya”, curandeiro,
 * escrito com “y”, e nos cantos de [HM] e uma passagem de [NHI] sem glosa; como nenhuma palavra entra
 * só por [MON], ficaram de fora); “dume” e
 * “dau” passaram para “rume” e “rau”, a grafia com “r”; “ɨn, min, nukun” viraram “ena, mina, nukuna”,
 * que é como [KAX14] 75 diz que esses possessivos aparecem (sempre com o “-a”).
 */
export const ROWS: VocabRow[] = [
  // ══ A1 ══
  // Pronomes, série nominativa: [KAX14] 74, Tabela 2 (ɨ̃, mĩ, nũ, mã), e [KAX11] 66, Tabela 3. Exemplos:
  // [KAX14] 143, ex. 735-738 (“ɨ̃ nami pi a i”, eu estou comendo carne; mĩ…, nũ…, mã…).
  ['Ẽ', 'eu', 'pronome', 'Pessoas', '🙋', 'Ẽ nami piai.'],
  ['Mĩ', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Mĩ nami piai.'],
  ['Nũ', 'nós', 'pronome', 'Pessoas', '🙌', 'Nũ nami piai.'],
  ['Mã', 'vocês', 'pronome', 'Pessoas', '👥', 'Mã nami piai.'],
  // huni (homem) e kuĩ (verdadeiro): [KAX11] Tabela 1, linhas 19-20 (“huni”, “kuĩbu”, gente
  // verdadeira); [SD25] 9 (“Huni Kuĩ, em tradução literal ‘gente verdadeira’”, citando KAX14).
  ['Huni', 'pessoa, homem', 'substantivo', 'Pessoas', '🧑', 'Huni kuĩ.'],
  ['Kuĩ', 'verdadeiro, real', 'adjetivo', 'Pessoas', '✅', 'Huni kuĩ.'],
  // Parentesco: [KAX14] 66 (vocativos “ɨpa”, pai, e “ɨwa”, mãe), 69 (“ɨ̃ ɨwa”, minha mãe) e 70 (“ɨ̃ aĩ”,
  // minha esposa; “ɨ̃ tʃai”, meu primo cruzado); “aĩbu” (mulher): [KAX14] 66, “ibu aĩbu”, e [CAM05]
  // 59, ex. 4a. “Txai” é também o pai da mãe (do homem) e o filho do irmão da mãe ou da irmã do pai,
  // [KAX14] 67. Exemplo de aĩbu: [CAM05] 59, ex. 4a (“ainbu-n huni-ø uin-a-ki”, a mulher olhou o
  // homem), convertido pela regra.
  ['Epa', 'pai (chamando)', 'substantivo', 'Parentesco', '👨', 'Epa!'],
  ['Ewa', 'mãe', 'substantivo', 'Parentesco', '👩', 'Ẽ ewa.'],
  ['Aĩ', 'esposa', 'substantivo', 'Parentesco', '👰', 'Ẽ aĩ.'],
  ['Aĩbu', 'mulher', 'substantivo', 'Parentesco', '👩‍🦱', 'Aĩbũ huni uĩaki.'],
  ['Txai', 'cunhado, primo cruzado; por extensão, amigo, parceiro', 'substantivo', 'Parentesco', '🤝', 'Ẽ txai.'],
  // Números: [KAX14] 95-96, ex. 407-416 (bɨsti, rabɨ, tsamĩ, kɨtaʂ, mɨtsã, sĩti, kɨkũ, bunɨ, usũ, nati),
  // conferidos na imagem da página e passados pela regra. [KAX14h] escreve na prosa “besti”, “rabe”,
  // “ketash”, “metsã”. Segundo [KAX14] 94, antes do contato havia expressões para quantidades até
  // vinte, e esta série foi organizada pelos professores huni kuĩ.
  ['Besti', 'um', 'numeral', 'Números', '1️⃣', 'Besti, rabe, tsamĩ…'],
  ['Rabe', 'dois', 'numeral', 'Números', '2️⃣', 'Rabe, tsamĩ, ketash…'],
  ['Tsamĩ', 'três', 'numeral', 'Números', '3️⃣', 'Tsamĩ, ketash, metsã…'],
  ['Ketash', 'quatro', 'numeral', 'Números', '4️⃣', 'Ketash, metsã, sĩti…'],
  ['Metsã', 'cinco', 'numeral', 'Números', '5️⃣', 'Metsã, sĩti, kekũ…'],
  ['Sĩti', 'seis', 'numeral', 'Números', '6️⃣', 'Sĩti, kekũ, bune…'],
  ['Kekũ', 'sete', 'numeral', 'Números', '7️⃣', 'Kekũ, bune, usũ…'],
  ['Bune', 'oito', 'numeral', 'Números', '8️⃣', 'Bune, usũ, nati…'],
  ['Usũ', 'nove', 'numeral', 'Números', '9️⃣', 'Usũ, nati.'],
  ['Nati', 'dez', 'numeral', 'Números', '🔟', 'Nati.'],
  // Natureza. ni (mata): [KAX14] 45 (“ni”, flores, mato, plantas) e [CAM05] 62, ex. 15 (“ni medan e-n
  // ka-ai”, vou pelo mato adentro), com “merã” (dentro) da Tabela 1 de [KAX11], linha 48. kaya (rio):
  // [KAX14] 39, “kaya-wã ‘riozão’”. ui (chuva): [CAM05] 58 e [KAX14] 181, ex. 920 (“ui-ø i ʂu ki”,
  // choveu).
  ['Ni', 'mata, floresta', 'substantivo', 'Natureza', '🌳', 'Ni merã ẽ kai.'],
  ['Kaya', 'rio', 'substantivo', 'Natureza', '🏞️', 'Kayawã.'],
  ['Ui', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Ui ishuki.'],
  // Corpo: [KAX14] 44, ex. 34 (“bɨru”, olho), 49, ex. 92 (“mɨkĩ”, mão) e ex. 102 (“taɨ”, pé); [KAX11]
  // Tabela 1, linha 106 (“beru”, olho, grão). Frases: [KAX14] 81, ex. 321-323 (“ha bɨru-haya ki”, ele
  // tem olho; “ha mɨkĩ-ya ki”, ele tem mão; “ha taɨ-ya ki”, ele tem pé).
  ['Beru', 'olho', 'substantivo', 'Corpo', '👁️', 'Ha beruhayaki.'],
  ['Mekĩ', 'mão', 'substantivo', 'Corpo', '✋', 'Ha mekĩyaki.'],
  ['Tae', 'pé', 'substantivo', 'Corpo', '🦶', 'Ha taeyaki.'],
  // Animais e objetos. takara (galinha): [KAX14] 40 (“takara-ʃarabu”, galinhas) e Anexo 2, adivinha
  // 5.916 (galo); mani (banana): [KAX11] Tabela 1, linha 62, e [KAX14] 77, ex. 297 (“na mani pi wɨ”,
  // coma esta banana); hiwe (casa): [KAX11] Tabela 1, linha 28, e [KAX14] p. 37, ex. 1 (“ɨ-ã hiwɨ-ø
  // hawɨ̃-rua”, minha casa é bonita, conferido na imagem), escrito “hawẽrua” como no texto corrido de
  // [NHI] (“aĩbu hawẽrua xarabu”, “hawẽruama”; o título em caixa alta, p. 9, perde o til); txara (flecha):
  // [KAX14] 94, ex. 404 (“ɨ̃ tʃara-wa ʂu ki”, eu fiz a flecha); a mesma página 40 escreve “tara”.
  ['Takara', 'galinha', 'substantivo', 'Animais e objetos', '🐔', 'Takara xarabu.'],
  ['Mani', 'banana', 'substantivo', 'Animais e objetos', '🍌', 'Na mani piwe.'],
  ['Hiwe', 'casa', 'substantivo', 'Animais e objetos', '🏠', 'Ẽ hiwe hawẽrua.'],
  ['Txara', 'flecha', 'substantivo', 'Animais e objetos', '🏹', 'Ẽ txarawashuki.'],
  // Cultura. hãtxa (fala, língua): [KAX14] 46, ex. 51 (“hãtʃa”, fala), e o próprio nome da língua;
  // [CAM05] 62, ex. 11a (“e-n mi-be hanca-ai”, eu falo com você). yuxĩ (espírito): [CAM05] 58, ex. 2a
  // (“juxin-in e-a hadibi wa-a”, o yuxin me assustou) e [BINA] 33 (“Yuxĩ shetaya”). rume (tabaco,
  // rapé): [MON] 112 (“dume tabaco”, com d = r) e [NHI] (“nũ rume”, “rume reshketã”); [HM] escreve
  // “dume”. nixi pae (a bebida do cipó, ayahuasca): [HM] 4 (“cantos do Nixi Pae, conhecido também como
  // ritual do cipó”). rau (remédio): [KAX14] 183, ex. 928 (“huni rau-ya i pauni kiaki”, o homem
  // conhecia remédios, há muito tempo). txana (o japim e, por ele, todo cantador): [HM] 26, fala do
  // txana Romão Sales Tui (“Txana é um pássaro que, em português, a gente chama de japinim… Então, a
  // gente chama de txana todo cantador”).
  ['Hãtxa', 'fala, língua', 'substantivo', 'Cultura', '🗣️', 'Ẽ mibe hãtxai.'],
  ['Yuxĩ', 'espírito', 'substantivo', 'Cultura', '👻', 'Yuxĩ.'],
  ['Rume', 'tabaco, rapé', 'substantivo', 'Cultura', '🌿', 'Rume.'],
  ['Nixi pae', 'ayahuasca (a bebida do cipó)', 'substantivo', 'Cultura', '🍵', 'Nixi pae.'],
  ['Rau', 'remédio', 'substantivo', 'Cultura', '🍃', 'Huni rauya ipauni kiaki.'],
  ['Txana', 'japim; cantador, mestre dos cantos', 'substantivo', 'Cultura', '🎶', 'Txana.'],
  // Possessivos: [KAX14] 75, Tabela 3 (ɨn, min, nukun, sempre com o acusativo -a), e ex. 290-292 (“na-ø
  // ɨn-a”, este é meu; “na-ø min-a”, este é teu; “na-ø nukun-a”, este é nosso); [KAX14h] 75 escreve
  // “ena, mina, nuku”.
  ['Ena', 'meu', 'pronome', 'Posse', '🫳', 'Na ena.'],
  ['Mina', 'teu', 'pronome', 'Posse', '🫴', 'Na mina.'],
  ['Nukuna', 'nosso', 'pronome', 'Posse', '🤲', 'Na nukuna.'],

  // ══ A1.1, lições extras (16/10/2026) ══
  // Cores: [KAX14] 59, ex. 252-256 (taʃi vermelho, mɨʃu preto, paʃĩ amarelo, huʂu branco, kuru cinza);
  // [KAX11] 62. tari (roupa): [KAX14] 82-84, ex. 332-346 (“ɨ-ã tari-ø rã taʃi-pa ki”, a minha roupa é
  // vermelha; “… mɨʃu-pa ki”, preta; “… huʂu-pa ki”, branca; “… kuru-pa ki”, cinza; “… paʃĩn-ipa ki”,
  // amarela) e 191, ex. 972.
  ['Taxi', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ẽ tarirã taxipaki.'],
  ['Mexu', 'preto; escuro', 'adjetivo', 'Cores', '⚫', 'Ẽ tarirã mexupaki.'],
  ['Hushu', 'branco', 'adjetivo', 'Cores', '⚪', 'Ẽ tarirã hushupaki.'],
  ['Paxĩ', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Ẽ tarirã paxĩnipaki.'],
  ['Kuru', 'cinza', 'adjetivo', 'Cores', '🩶', 'Ẽ tarirã kurupaki.'],
  ['Tari', 'roupa', 'substantivo', 'Cores', '👕', 'Haratu tari mĩ ki kai?'],
  // Tamanho e distância: [KAX11] 64, ex. 80-81 (“ɨwapa” grande, “ɨwapa-ma” pequeno, não grande) e
  // 85-90 (“tʃãpa” baixo, “kijá-tapa” alto); [KAX11] Tabela 1, linhas 34 e 44 (“ewapama”, pequeno) e 99
  // (“rapi”, perto); [KAX11] 63, ex. 69-70 (“rapi” encostado, perto; “nãta” afastado, distante);
  // “keyatapa” como em [NHI] (“mashash keyatapaki”). Frases: [KAX11] 59, ex. 33 (“ʂaʂu-ɨwapa”, barco
  // grande); [KAX11] 84, frase 4 de “Yauxiku nawa” (“atsa ewapama shuishu inã”, deu uma macaxeira
  // pequena assada); [KAX14] 175, ex. 899 (“mi-ã hiwɨ kɨja-tapa ki”, sua casa é alta).
  ['Ewapa', 'grande', 'adjetivo', 'Tamanho', '🐘', 'Shashu ewapa.'],
  ['Ewapama', 'pequeno', 'adjetivo', 'Tamanho', '🐭', 'Atsa ewapama shuishu inã.'],
  ['Keyatapa', 'alto', 'adjetivo', 'Tamanho', '🦒', 'Mĩ hiwe keyatapaki.'],
  ['Txãpa', 'baixo', 'adjetivo', 'Tamanho', '⬇️', 'Txãpa.'],
  ['Rapi', 'perto', 'advérbio', 'Tamanho', '📍', 'Rapi.'],
  ['Nãta', 'longe', 'advérbio', 'Tamanho', '🔭', 'Nãta.'],

  // ══ A2.1 ══
  // Verbos. pi (comer), uʂa (dormir), tĩ (cair): [KAX11] 51-54, ex. 9-15 (“ɨ̃ tĩ-ʂu”, eu caí; “ɨ̃
  // uʂa-ʂu”, eu dormi; “ɨ̃ pi-ʂu”, eu comi), conferidos na imagem; ka (ir): [KAX11] 55, ex. 17 (“ɨ̃-ka-i”,
  // eu estou indo) e [KAX14] 191, ex. 974; hu (vir): [KAX14] 187, ex. 951 (“ha-nia mĩ hu ʂu mɨ̃”, de onde
  // você veio?); naxi (tomar banho): [KAX14] 172-174, ex. 879 e 885 (“naʃi”); nuku (chegar): [KAX14]
  // 172, ex. 884 (“matsi-ø nuku ʂu ki”, o frio chegou) e 185, ex. 940; kuxi (correr): [KAX11] Tabela
  // 1, linha 80 (“kuxikãi”, correu) e p. 60, ex. 38.
  ['Pi', 'comer', 'verbo', 'Verbos', '🍽️', 'Ẽ pishu.'],
  ['Usha', 'dormir', 'verbo', 'Verbos', '😴', 'Ẽ ushashu.'],
  ['Tĩ', 'cair', 'verbo', 'Verbos', '🍂', 'Ẽ tĩshu.'],
  ['Ka', 'ir', 'verbo', 'Verbos', '🚶', 'Ẽ kai.'],
  ['Hu', 'vir', 'verbo', 'Verbos', '🛬', 'Hania mĩ hushu mẽ?'],
  ['Naxi', 'tomar banho', 'verbo', 'Verbos', '🛁', 'Ẽ naxishuki.'],
  ['Nuku', 'chegar', 'verbo', 'Verbos', '🏁', 'Matsi nukushuki.'],
  ['Kuxi', 'correr', 'verbo', 'Verbos', '🏃', 'Kuxikãi.'],
  // Perguntas: [KAX14] 185-191 (cap. 6). tsua (quem): ex. 938 e 940 (“tsu-a nuku ʂu mɨ̃”, quem chegou?);
  // hawa (o que; com “tiã”, quando): ex. 955 e 957; hani (onde): ex. 949; hati (quanto): ex. 953-954;
  // haska (como; por que): ex. 966 e 968; haratu (qual): ex. 972-973; hara kiri (para onde): ex. 974.
  ['Tsua', 'quem', 'pronome', 'Perguntas', '🕵️', 'Tsua nukushu mẽ?'],
  ['Hawa', 'o que', 'pronome', 'Perguntas', '❓', 'Hawa mĩ ki kai?'],
  ['Hani', 'onde', 'advérbio', 'Perguntas', '🗺️', 'Hani a harã?'],
  ['Hati', 'quanto', 'pronome', 'Perguntas', '🔢', 'Hati xarabu mani mĩ pishu mẽ?'],
  ['Haska', 'como', 'advérbio', 'Perguntas', '🤔', 'Haska i mĩ sina mẽ?'],
  ['Haratu', 'qual', 'pronome', 'Perguntas', '👉', 'Haratu tari mĩ ki kai?'],
  ['Hara kiri', 'para onde?', 'advérbio', 'Perguntas', '🧭', 'Hara kiri mĩ kai?'],
  // Outras. nenu (aqui): [KAX14] 190, ex. 966 (“haska tã mĩ nɨnu nuku ʂu mɨ̃”, como você chegou aqui?);
  // kena (nome): [KAX14] 184, ex. 938 (“mĩ kɨna ia yui ri wɨ”, diga logo o seu nome) e a prosa de
  // [KAX14h]; mexu kiri (amanhã): [KAX14] 173-174, ex. 885, 888, 891 e 893 (“mɨʃu kiri”, glosado
  // escuro/noite + passar, traduzido “amanhã”); risi (rede de dormir): [KAX14] 183, ex. 930 (“risi-ø mĩ tɨwɨ ʃina pɨka wɨ”, desate a rede que você
  // atou, conferido na imagem em resolução maior), e Anexo 2,
  // adivinha 5.862; txi (fogo): [KAX14] Anexo 2, adivinha 5.863, e [CAM05] 65, ex. 24 (“ci”).
  ['Nenu', 'aqui', 'advérbio', 'Lugares', '📌', 'Haska tã mĩ nenu nukushu mẽ?'],
  ['Kena', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mĩ kena ea yuiriwe.'],
  ['Mexu kiri', 'amanhã', 'advérbio', 'Tempo', '🌅', 'Mexu kiri naxi shani kiki.'],
  ['Risi', 'rede (de dormir)', 'substantivo', 'Casa', '🛏️', 'Risi mĩ tewe xina pekawe.'],
  ['Txi', 'fogo', 'substantivo', 'Casa', '🔥', 'Txirã.'],

  // ══ A2.2 ══
  // Bichos: [KAX11] Tabela 1, linhas 5 (runu, cobra), 7 (bina, marimbondo), 8 (kape, jacaré), 10
  // (shawã, arara), 11 (inu, onça), 12 (yawa; a tabela diz “caititu/porco”, a frase 1 de “Yauxiku nawa”
  // e [CAM05] 61, ex. 5, dizem “queixada”), 13 (awa, anta) e 14 (txashu, veado). Frase: [KAX11] 81-82,
  // frase 1 de “Yauxiku nawa” (o povo sovino tinha muitas criações: cobra, marimbondo, jacaré, cobra
  // grande, arara, onças, queixada, anta e veado), que [KAX14] 139, ex. 720, repete com a conjunção
  // “inũ” (e), a mesma da Tabela 1, linha 6 — por isso o curso escreve “inũ”, e não “inu” como a frase
  // de [KAX11], para não confundir com “inu”, onça. yaix (tatu): [KAX11] 65, ex. 91a-91c (“jaiʃ”), e
  // [BINA] 26 (“kana yaix”, “nusta yaix”); baka (peixe): [KAX14] 177, ex. 910 (“baka bi kĩ”, pescando).
  ['Inu', 'onça', 'substantivo', 'Animais', '🐆', 'Inu inũ, yawa inũ.'],
  ['Yawa', 'queixada', 'substantivo', 'Animais', '🐗', 'Yawa inũ, awa inũ.'],
  ['Awa', 'anta', 'substantivo', 'Animais', '🦛', 'Awarã shãkamaki.'],
  ['Txashu', 'veado', 'substantivo', 'Animais', '🦌', 'Awa inũ, txashu inũ.'],
  ['Kape', 'jacaré', 'substantivo', 'Animais', '🐊', 'Bina inũ, kape inũ.'],
  ['Runu', 'cobra', 'substantivo', 'Animais', '🐍', 'Runu inũ, bina inũ.'],
  ['Shawã', 'arara', 'substantivo', 'Animais', '🦜', 'Shawã inũ, inu inũ.'],
  ['Bina', 'marimbondo', 'substantivo', 'Animais', '🐝', 'Binã Bixku txatxixu.'],
  ['Yaix', 'tatu', 'substantivo', 'Animais', '🦔', 'Yaixĩ atsa pishu.'],
  ['Baka', 'peixe', 'substantivo', 'Animais', '🐟', 'Baka bikĩ.'],
  // Comida e roçado: [KAX11] Tabela 1, linhas 17 (yunu, legumes), 25 (atsa, macaxeira), 58 (bai, roçado),
  // 96 (sheki, milho), 117 (nupe, faca); nami (carne): [KAX14] 143, ex. 735, e 172, ex. 883; shashu
  // (canoa, barco): [KAX11] 59, ex. 28 e 33 (“ʂaʂu”), e [KAX14] 77, ex. 298 (“na ʂaʂu rã ɨna ki”, este
  // barco é meu). Frases: “Huni kuĩ yunumake”, [KAX11] 82-83, frase 2 de “Yauxiku nawa”; “Baiyanu ẽ kaa”,
  // [CAM05] 62, ex. 13 (“bai-anu e-n ka-a”, eu fui ao roçado), com “baiyanu” escrito como na frase 8 de
  // “Yauxiku nawa” ([KAX11] 85, “hatu baiyanu banakĩ”).
  ['Atsa', 'macaxeira', 'substantivo', 'Comida', '🥔', 'Yauxiku nawã, ea atsa inãwẽ!'],
  ['Sheki', 'milho', 'substantivo', 'Comida', '🌽', 'Sheki.'],
  ['Yunu', 'legumes (o que se planta no roçado)', 'substantivo', 'Comida', '🥕', 'Huni kuĩ yunumake.'],
  ['Bai', 'roçado', 'substantivo', 'Lugares', '🌱', 'Baiyanu ẽ kaa.'],
  ['Nami', 'carne', 'substantivo', 'Comida', '🍖', 'Nami bashuki.'],
  ['Shashu', 'canoa', 'substantivo', 'Animais e objetos', '🛶', 'Na shashurã enaki.'],
  ['Nupe', 'faca', 'substantivo', 'Animais e objetos', '🔪', 'Nuperã.'],
  // Verbos e qualidade da história. inã (dar): [KAX11] Tabela 1, linhas 36 e 73 (“inã”, deu) e 68
  // (“inãwẽ”, dê-me!; a frase 3 de “Yauxiku nawa” escreve “inawe”, e o curso segue a tabela); yuka (perguntar): linha 109; yauxi (sovino): linha 23 (“yauxirã”) e [KAX14] 77,
  // ex. 299 (“na huni rã jauʃi ki”, este homem é sovino).
  ['Inã', 'dar', 'verbo', 'Verbos', '🎁', 'Ea atsa inãwẽ!'],
  ['Yuka', 'perguntar', 'verbo', 'Verbos', '🙋‍♀️', 'Benashũ yukani kiaki.'],
  ['Yauxi', 'sovino, pão-duro', 'adjetivo', 'Qualidades', '🤑', 'Na hunirã yauxiki.'],
];

export const VOCAB_CBS = buildVocab('cbs', ROWS);
