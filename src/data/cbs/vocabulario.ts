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
 * B1 (16/10/2026): a continuação de “Yauxiku nawa” em [KAX11] cap. IV, p. 86-123 (partes 2 a 8, na
 * grafia atual de Joaquim Kaxinawá; o texto extraído do PDF perde muitos tis, e por isso cada frase foi
 * copiada da IMAGEM da página), os capítulos 3, 4, 7 e 8 de [KAX14] e as adivinhas do Anexo 2 de [KAX14]
 * (p. 286-292). Frase de [KAX14] que só existe em alfabeto fonético e foi passada pela regra acima vai
 * marcada “convertida”, com a forma original no comentário; a junção segue a da grafia de [KAX11] (“-tã”,
 * “-nã”, “-rã”, “-ya” colados ao verbo: “hikitã”, “bikinã”, “ikayarã”).
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
  // grande); [KAX11] 84, frase 4 de “Yauxiku nawa” (“atsa ewapama shuishũ inã”, deu uma macaxeira
  // pequena assada); [KAX14] 175, ex. 899 (“mi-ã hiwɨ kɨja-tapa ki”, sua casa é alta).
  ['Ewapa', 'grande', 'adjetivo', 'Tamanho', '🐘', 'Shashu ewapa.'],
  ['Ewapama', 'pequeno', 'adjetivo', 'Tamanho', '🐭', 'Atsa ewapama shuishũ inã.'],
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
  // barco é meu). Frases: “Huni kuĩ yunumakẽ”, [KAX11] 82-83, frase 2 de “Yauxiku nawa”; “Baiyanu ẽ kaa”,
  // [CAM05] 62, ex. 13 (“bai-anu e-n ka-a”, eu fui ao roçado), com “baiyanu” escrito como na frase 8 de
  // “Yauxiku nawa” ([KAX11] 85, “hatũ baiyanu banakĩ”).
  ['Atsa', 'macaxeira', 'substantivo', 'Comida', '🥔', 'Yauxiku nawã, ea atsa inãwẽ!'],
  ['Sheki', 'milho', 'substantivo', 'Comida', '🌽', 'Sheki.'],
  ['Yunu', 'legumes (o que se planta no roçado)', 'substantivo', 'Comida', '🥕', 'Huni kuĩ yunumakẽ.'],
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

  // ══ B1 (entrega de 16/10/2026) ══
  // Quase tudo vem da continuação de “Yauxiku nawa” em [KAX11] cap. IV (p. 86-123), já na grafia atual
  // de Joaquim Kaxinawá: a frase foi copiada da lista numerada, conferida na IMAGEM da página (o texto
  // extraído perde muitos tis, como “henẽ”, “tsaukẽ”, “hawẽ”), e o sentido vem da glosa e da tradução
  // dele, com a página da glosa. Onde a fonte é [KAX14], a frase estava só em alfabeto fonético e foi
  // passada pela regra do cabeçalho (marcada “convertida”).
  // ── B1.1: o calango e o milho ([KAX11] 86-95) ──
  // nisheke (calango): glosa “calango”, p. 87-88; betsa (outro): p. 87 (“btsa outro”); yumetsu (roubar):
  // p. 87; hene (água): p. 87 (“hn água”; p. 120, “rio”); tsau (sentar): p. 88; sheme (debulhar): p.
  // 88-89; txitxã (cesta): p. 89 (“tʃitʃã-ki cesta-INES”); bena (procurar): p. 90; atxi (pegar): p. 91 (“atʃi-ʂũ pegar”);
  // tupi (juntar): p. 89. Frases: p. 86, lista da parte 2, frases 1, 4, 6, 7 e 13.
  ['Nisheke', 'calango', 'substantivo', 'Animais', '🦎', 'Nisheke kani kiaki, yauxiku nawa hiwetanã.'],
  // betsa também é “irmão” em [KAX11] 117 e 123, parte 8, frase 13 (“Bainã hawe betsa kiaki”, glosado
  // “btsa irmão”: o surubim é irmão dele); o curso ensina o sentido de “outro”, o da história do milho.
  ['Betsa', 'outro', 'adjetivo', 'Qualidades', '🔁', 'Sheki beru betsa tukũni kiaki.'],
  ['Yumetsu', 'roubar', 'verbo', 'Verbos', '🦹', 'Huni betsa atsa yumetsuika.'],
  ['Hene', 'água', 'substantivo', 'Natureza', '💧', 'Kuxikãi henẽ pukuni kiaki.'],
  ['Tsau', 'sentar', 'verbo', 'Verbos', '🪑', 'Harapi tsauni kiaki, yauxiku nawarã.'],
  ['Sheme', 'debulhar', 'verbo', 'Verbos', '🌽', 'Nishekepã, ẽ sheki ea shemeshuwẽ?'],
  ['Txitxã', 'cesta', 'substantivo', 'Animais e objetos', '🧺', 'Tupishũ txitxãki nanei tsaukẽ.'],
  ['Bena', 'procurar', 'verbo', 'Verbos', '🔍', 'Sheki bena, betxiama inikiaki.'],
  ['Atxi', 'pegar', 'verbo', 'Verbos', '🫳', 'Nisheke atxishũ.'],
  ['Tupi', 'juntar', 'verbo', 'Verbos', '🤲', 'Sheki beru tĩ ikai tupishũ, nanei ikaya.'],
  // mawa (morrer), barĩ (sol), puta (jogar), txuxi (secar), bestẽ (acordar), nabu (parente), yui (dizer):
  // glosas da p. 92 (“mawa-kĩ morrer”, “bari-N sol”, “puta jogar”, “tʃuʃia-ja secando”, “bisti-tã
  // acordar”, “ha-wɨ nabu 3-gen parente”, “jui-kĩ dizer”); bana (plantar) e kani (amadurecer): p. 95.
  // A grafia “bestẽ” é a da lista (p. 91, “bestẽtã”). Frases: p. 91, lista da parte 3, frases 1, 6 e 7; p.
  // 96, parte 4, frase 5 (“ha txi putatã”); p. 101, frase 11 (“hawenabu yuini kiaki”).
  ['Mawa', 'morrer', 'verbo', 'Verbos', '🪦', 'Haskawa nisheke mawakẽ.'],
  ['Barĩ', 'sol', 'substantivo', 'Natureza', '☀️', 'Yauxiku nawã barĩ puta.'],
  ['Puta', 'jogar', 'verbo', 'Verbos', '🤾', 'Ha txi putatã.'],
  ['Txuxi', 'secar', 'verbo', 'Verbos', '🏜️', 'Barĩ ea txuxiwai ẽ rakakẽ.'],
  ['Bestẽ', 'acordar', 'verbo', 'Verbos', '⏰', 'Bestẽtã ẽ kuxikirãshuki.'],
  ['Nabu', 'parente', 'substantivo', 'Parentesco', '👪', 'Ha hikitã hawenabu yuikĩ.'],
  ['Yui', 'dizer', 'verbo', 'Verbos', '💬', 'Hawenabu yuini kiaki.'],
  ['Bana', 'plantar', 'verbo', 'Verbos', '🌱', 'Bai betsawashũ bana nibukiaki.'],
  ['Kani', 'amadurecer', 'verbo', 'Verbos', '🍑', 'Unu kani txuxitanaya.'],
  // kuxa (bater) e kasha (chorar): [KAX14] 195, ex. 985 (“mĩ ɨ-a kuʃa rã ɨ̃ kaʂa i”, se você me bater eu
  // choro), convertida; kuxa também em [KAX14] 144, ex. 741 (“mĩ ea kuxamiski”, A1). rate (medo, ter
  // medo): [KAX14] 192, ex. 975 (“huni tĩ i ka rã ratɨ ʂu ki”, o homem caiu porque teve medo) e 195, ex.
  // 989 (“runu uĩ tã nã ɨ̃ ratɨ ʂu ki”, quando eu vi a cobra tive medo), convertidas; [KAX11] 122-123
  // escreve “haki ratemis kiaki” (os peixes têm medo dele).
  ['Kuxa', 'bater', 'verbo', 'Verbos', '👊', 'Mĩ ea kuxarã, ẽ kashai.'],
  ['Kasha', 'chorar', 'verbo', 'Verbos', '😭', 'Mĩ ea kuxarã, ẽ kashai.'],
  ['Rate', 'ter medo', 'verbo', 'Verbos', '😨', 'Runu uĩtãnã, ẽ rateshuki.'],

  // ── B1.2: a curica e o fogo ([KAX11] 92-99) ──
  // txere (curica), sheta (bico), txaipa (comprido), nuya (voar): glosas da p. 95-96 (“tʃɨrɨ curica”,
  // “ʂɨta bico”, “tʃaipa comprido”, “nu-ja voar”); hi (pau), shana (seco), nĩka (ouvir), txixte (pedaço de
  // fogo), betxi (avistar), bu (levar): p. 97 (“hi pau”, “ʂana-ki seco”, “nĩka-tã ouvir”, “tʃiʃtɨ pedaço”,
  // “bɨtʃi-tã avistar”, “bu-mai levar”); betxi também “achar” na p. 90; menu (queimar): p. 98 e 114;
  // hawakatsi (por quê): p. 98 (“ha-wa-katsi porque-fazer”). hi também em [KAX14] 205, ex. 1039. Frases:
  // p. 92, parte 3, frase 8; p. 96, parte 4, frases 1, 2, 4 e 5.
  ['Txere', 'curica', 'substantivo', 'Animais', '🐦', 'Habĩ txi bikinã, txerẽ binikiaki.'],
  ['Sheta', 'bico', 'substantivo', 'Animais', '🐤', 'Hawẽ sheta ma menui.'],
  ['Txaipa', 'comprido', 'adjetivo', 'Tamanho', '📏', 'Txere sheta txaipa.'],
  ['Nuya', 'voar', 'verbo', 'Verbos', '🕊️', 'Nuya kirã tsauwaya.'],
  ['Hi', 'pau', 'substantivo', 'Natureza', '🪵', 'Haskakirã hi shanaki tsautã.'],
  ['Shana', 'seco', 'adjetivo', 'Qualidades', '🍂', 'Hi shanaki tsautã.'],
  ['Nĩka', 'ouvir', 'verbo', 'Verbos', '👂', 'Yauxiku nawa aĩnẽ nĩkatã.'],
  ['Txixte', 'tição (pedaço de fogo)', 'substantivo', 'Casa', '🪔', 'Txi txixte bibirã, ha txere hawẽ tsaka.'],
  ['Betxi', 'avistar', 'verbo', 'Verbos', '👀', 'Shapu heshe biaya, yauxiku nawã betxitã.'],
  ['Menu', 'queimar', 'verbo', 'Verbos', '🔥', 'Mari hawẽ txi ki menua.'],
  ['Bu', 'levar', 'verbo', 'Verbos', '🎒', 'Ũ unu txerẽ, txi nuku buãi!'],
  ['Hawakatsi', 'por quê', 'advérbio', 'Perguntas', '🤷', 'Mĩ hawakatsi txere txi bumai?'],
  // hiki (entrar; chegar): [KAX11] 111 (“hiki-kãi entrar”, o japó entrou) e 92 (“hiki-tã chegar”).
  ['Hiki', 'entrar', 'verbo', 'Verbos', '🚪', 'Ha isku eã atanũ ika hikikãi.'],
  // bawa (cozinhar): [KAX14] 193, ex. 981 (“ainbu bawa uma rã…”, a mulher que não cozinha…) e 198, ex. 1004
  // (“baka ɨ̃ bawa tanaya ɨ̃ bɨnɨ̃ pi ʂu ki”, depois que cozinhei o peixe, meu esposo comeu), convertida;
  // bene (esposo): [KAX14] 198, ex. 1003-1004 (“bɨnɨ”, glosado “macho”, traduzido “esposo”).
  ['Bawa', 'cozinhar', 'verbo', 'Verbos', '🍳', 'Baka ẽ bawatanaya, ẽ benẽ pishuki.'],
  ['Bene', 'marido', 'substantivo', 'Parentesco', '🤵', 'Ẽ bene hiwetã nukutaya, ẽ ea benimashuki.'],
  // nisha (amarrar) e raka (deitar): [KAX14] 201, ex. 1023 (“ɨ-ã risi ɨ̃ niʂa i raka katsi rã”, vou amarrar
  // a minha rede para deitar), convertida; raka também em [KAX11] 94 (“aka-k deitar”).
  ['Nisha', 'amarrar', 'verbo', 'Verbos', '🪢', 'Ẽ risi ẽ nishai, rakakatsirã.'],
  ['Raka', 'deitar', 'verbo', 'Verbos', '🛌', 'Barĩ ea txuxiwai ẽ rakakẽ.'],
  // matsi (frio): [KAX14] 172, ex. 884 (“matsi-ø nuku ʂu ki”, o frio chegou) e 199, ex. 1009 (“matsi”,
  // esfriar).
  ['Matsi', 'frio', 'substantivo', 'Natureza', '🥶', 'Matsi nukushuki.'],

  // ── B1.3: o beija-flor, o algodão e o plano dos bichos ([KAX11] 99-111) ──
  // shapu (algodão) e pinũ (beija-flor): glosas da p. 99 e 102; heshe (semente): p. 102 (“hiʂi semente”);
  // batxi (vestido): p. 102 (“batʃi-u-ma vestido-PRIV”) e 104 (“batʃi-wa vestido-fazer”); sawe (vestir): p.
  // 104; sina (zangado): p. 101-102 (“sina-kira zangar-ficar”; “o homem zangou e voltou”); shuru
  // (abrir-se, ficar bom de colher): p. 104 (“uru espalhar”, traduzido “já está maduro”); benima
  // (alegrar): p. 104 (“bɨnima-kaĩ alegrar”) e [KAX14] 198, ex. 1003 (“bɨni ma”, alegrar com o
  // causativo). Frases: p. 96, parte 4, frases 6, 9 e 10; p. 101, parte 5, frases 1, 2, 5, 6 e 7.
  ['Shapu', 'algodão', 'substantivo', 'Cultura', '☁️', 'Haskaya shapu bikinã, pinũ bini kiaki.'],
  ['Pinũ', 'beija-flor', 'substantivo', 'Animais', '🐦‍⬛', 'Ẽ pinukãi shapu heshe yumetsuikai.'],
  ['Heshe', 'semente', 'substantivo', 'Natureza', '🌰', 'Ha pinũ shapu heshe bestitxai bushũ.'],
  ['Batxi', 'vestido', 'substantivo', 'Cores', '👗', 'Ẽ aĩ batxiumakirã.'],
  ['Sawe', 'vestir', 'verbo', 'Verbos', '🧥', 'Batxiwashũ saweni kiaki.'],
  ['Sina', 'zangado', 'adjetivo', 'Qualidades', '😠', 'Ha huni sina kiranikiaki.'],
  ['Shuru', 'maduro', 'adjetivo', 'Qualidades', '🧶', 'Ma shuruaki bitawẽ?'],
  ['Benima', 'alegrar', 'verbo', 'Verbos', '😊', 'Haskawa benimakãi.'],
  // txani (conversar, falar): [KAX11] 114 (“tʃani-ni-bu contar”, todos conversaram) e [KAX14] 148, ex. 765
  // (“tsua tʃani-ʂu mɨ̃?”, quem falou?), convertida.
  ['Txani', 'conversar', 'verbo', 'Verbos', '🗨️', 'Haskai itxai keyutã, txaninibu kiaki.'],
  // yubaka (combinar): p. 105-107; kini (buraco), rete (matar): p. 107; pesa (furar): p. 109; hĩ (cansado):
  // p. 108-109 (“hĩ cançar”); taewa (começar): p. 108 (“tawa-bai iniciar”) e 110; isku (japó): p. 107 e
  // 110; tsaka (flechar): p. 110-112; huĩti (coração): p. 111; bis (gritar): p. 111-112. Frases: p. 101,
  // parte 5, frase 8; p. 106, parte 6, frases 3, 4, 5, 7, 10, 11 e 12; p. 112, parte 7, frase 4.
  ['Yubaka', 'combinar', 'verbo', 'Verbos', '🤝', 'Haska uĩ yubakanibu kiaki, yuinaka xaraburã.'],
  ['Kini', 'buraco', 'substantivo', 'Natureza', '🕳️', 'Nenushũ kini wabãikĩ.'],
  ['Rete', 'matar', 'verbo', 'Verbos', '🗡️', 'Yauxiku nawa retenũbukawẽ.'],
  ['Pesa', 'furar', 'verbo', 'Verbos', '🪛', 'Uni hawẽ risi rapi pesani kiaki.'],
  ['Hĩ', 'cansado', 'adjetivo', 'Qualidades', '😮‍💨', 'Ma ẽ hĩ ikaki, mĩtseri butawẽ.'],
  ['Taewa', 'começar', 'verbo', 'Verbos', '🏁', 'Haskatã kana yaix rukũtũ, taewa baini kiaki.'],
  ['Isku', 'japó', 'substantivo', 'Animais', '🐥', 'Isku shũska huni kiaki.'],
  // tsaka: “flechar” nas glosas de [KAX11] 110-112; [KAX14] 193, ex. 978, glosa “matar” (o macaco que eu
  // matei); o curso fica com “flechar”, o sentido da história, e a frase de “Xinu” mostra o outro.
  ['Tsaka', 'flechar', 'verbo', 'Verbos', '🎯', 'Tsaka taewakinã, iskũ anikiaki.'],
  ['Huĩti', 'coração', 'substantivo', 'Corpo', '❤️', 'Huĩtiki tsakani kiaki.'],
  ['Bis', 'gritar', 'verbo', 'Verbos', '📢', 'Ha tsaka bis ika ri ikaya.'],

  // ── B1.4: a transformação ([KAX11] 112-123; [KAX14] 205 e as adivinhas da p. 291) ──
  // rami (transformar-se, virar): [KAX11] 87 (“kapɨ ɾami-ni”, se transformou em jacaré) e 117-118 (“ɾami
  // virar”); himi (sangue), mari (cutia), shawe (jabuti), hasĩ (mutum), nea (jacamim), hina (rabo): glosas
  // das p. 113-114; kari (batata-doce): p. 116 e 118; mapĩ (camarão): p. 121; I (arraia) e kuni
  // (poraquê): p. 122; mabesh (caiçuma): p. 123 (“mabɨʂ-wa caiçuma-fazer”) e [KAX14] 200, ex. 1014. Frases:
  // p. 112, parte 7, frases 3 e 5; p. 116-117, parte 8, frases 2, 4, 9, 10, 11 e 14.
  ['Rami', 'transformar-se', 'verbo', 'Verbos', '🦋', 'Haskatã hunibu rami, na aĩbaibu raminibu kiaki.'],
  ['Himi', 'sangue', 'substantivo', 'Corpo', '🩸', 'Txashu hawẽ himiwẽ pushea.'],
  ['Mari', 'cutia', 'substantivo', 'Animais', '🐹', 'Earã ẽ mari kainai.'],
  ['Shawe', 'jabuti', 'substantivo', 'Animais', '🐢', 'Earã shawe kainai.'],
  ['Hasĩ', 'mutum', 'substantivo', 'Animais', '🦃', 'Earã ẽ hasĩ kainai.'],
  ['Nea', 'jacamim', 'substantivo', 'Animais', '🐓', 'Earã ẽ nea kainai.'],
  ['Hina', 'rabo', 'substantivo', 'Corpo', '🐒', 'Xinuã hinarã txaipaki.'],
  ['Kari', 'batata-doce', 'substantivo', 'Comida', '🍠', 'Atsa bikĩ, kari bikĩ, mani bikĩ, sheki bikĩ.'],
  // mapĩ: com til na lista e na glosa de [KAX11] 117 e 121; a adivinha 5.884 de [KAX14] 291 escreve
  // “mapi” (fonético, sem til), e a resposta falada aceita as duas.
  ['Mapĩ', 'camarão', 'substantivo', 'Animais', '🦐', 'Mapĩ tari inã.'],
  ['I', 'arraia', 'substantivo', 'Animais', '🐠', 'Haskaya I haki sinatakĩ.'],
  ['Kuni', 'poraquê', 'substantivo', 'Animais', '⚡', 'Kunirã haki sinatariakĩ.'],
  ['Mabesh', 'caiçuma', 'substantivo', 'Comida', '🥣', 'Runuãnẽ hatu mabeshwashuna.'],
  // xinu (macaco) e hina: [KAX14] 193, ex. 978 (“ʃinu ɨ̃ tsaka rã tĩ i ka raka kiki”, o macaco que eu matei
  // está caído; aqui “tsaka” é glosado “matar”), convertida, e 205, ex. 1038 (“ʃinu-ã hina rã tʃai-pa ki”, o
  // rabo do macaco é comprido), convertida; meni (sábio): [KAX14] 205, ex. 1036-1037 (“Muru rã rau mɨni
  // ki”, Muru é sábio dos remédios), convertida.
  ['Xinu', 'macaco', 'substantivo', 'Animais', '🐵', 'Xinu ẽ tsakarã, tĩ ika raka kiki.'],
  ['Meni', 'sábio', 'adjetivo', 'Qualidades', '🧙', 'Mururã rau meniki.'],
  // As adivinhas de Capistrano (1914) na leitura de Joaquim Kaxinawá, [KAX14] 291 (Anexo 2), convertidas:
  // binu (borduna), 5.886 (e 289, 5.877); kene (grafismo, desenho), 5.887 (“kɨnɨ”), e [KAX14] 64, “Inu
  // keneya”, a onça-pintada; pia (arma, flecha), 5.885, e [KAX11] 111 (“pia flecha”); runuwã (jiboia,
  // cobra grande), 5.887 (“runu wã”, cobra jiboia) e [KAX11] 81 (“cobra grande”, frase 1).
  ['Binu', 'borduna', 'substantivo', 'Cultura', '🏏', 'Hawa ixta, binu bini mẽ kãi?'],
  ['Kene', 'grafismo, desenho', 'substantivo', 'Cultura', '🎨', 'Hawa ixta, kene bini mẽ kãi?'],
  ['Pia', 'arma (flecha)', 'substantivo', 'Cultura', '🗡', 'Hawa ixta, pia bini mẽ kãi?'],
  ['Runuwã', 'jiboia', 'substantivo', 'Animais', '🐉', 'Runuwãnã.'],
];

export const VOCAB_CBS = buildVocab('cbs', ROWS);
