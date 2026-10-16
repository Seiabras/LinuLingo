import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do awetí (awe), língua do tronco Tupi falada pelo povo Awetí (autodenominação
 * Awytyza) no Alto Xingu, Parque Indígena do Xingu (MT). Forma um ramo próprio dentro do
 * Mawetí-Guaraní, irmão do tupi-guarani (o do kamaiurá, seu vizinho) — não é tupi-guarani.
 *
 * Fontes conferidas, palavra por palavra (PDFs abertos e lidos, não resumos de busca):
 *   [O] Sebastian Drude, Waranaku Awete e Awajatu Aweti, “A ortografia da língua Awetí”, LIAMES 19
 *       (2019), e019014 (doi 10.20396/liames.v19i0.8655746). Escrita por Drude COM os dois
 *       professores awetí; descreve a ortografia usada há uns dez anos na escola da aldeia. É a fonte
 *       PRINCIPAL da grafia, e muitos exemplos já vêm na ortografia, com tradução: an, ehẽ, ok, itok,
 *       eok, inĩ, ite'inĩ, 'ekyte, kujãkyt, kaminu'at, mo'at, mani'ok, mani'oky, jomem, 'ap, op, 'op,
 *       ato, eto, oto me, ajatuk, ajatuktuju, atuwyka, atu, apaj, kwar'yp…
 *   [R] Sabine Reiter, “Ideophones in Awetí” (tese, Universidade de Kiel, 2011; etnolinguistica.org,
 *       tese:reiter-2011). Tem um esboço gramatical de 210 páginas (cap. 3) com exemplos do corpus
 *       do projeto DoBeS, escritos “na ortografia awetí” (§1.5.3, §3.2.4) e glosados. Daqui vêm, por
 *       exemplo: ta'wat, mõj, pira'yt, tapi'i, 'ukakyt, akyky, 'y, taza, taty, kyta, 'yp, awati,
 *       jumem, pe, u'wyp, 'yzapat, tigap, myrã, a'yt, mẽpyt, ywyt, momozotsu, mokõj, kajpopap, as
 *       interjeições tehe, wiw e atsy, e os pronomes e demonstrativos (tabelas 3.3 e 3.4).
 *   [F] Drude, “Fala masculina e feminina em Awetí” (2002, Atas do I Encontro do GT de Línguas
 *       Indígenas da ANPOLL; pure.mpg.de item_1466293): pronomes de homens e de mulheres (tabela 1),
 *       prefixos (tabela 2), dêiticos (tabela 3), apuryt/napuryt (papagaio), ypek/nypek (pato).
 *   [K] Drude, “Awetí in relation with Kamayurá: the two Tupian languages of the Upper Xingu” (2011,
 *       in Franchetto (org.), Alto Xingu: uma sociedade multilíngue; pure.mpg.de item_1466230):
 *       ty/ity/nãty (mãe), up/itup/nup (pai), ky/iteky/neky (machado), inĩ/ite'inĩ/ne'inĩ (rede) e
 *       a lista de cognatos do apêndice (tawoʐɨ, uʐuwu, taʐɨʔũ, kɨte…).
 *   [MD] Sérgio Meira e Drude, “A summary reconstruction of Proto-Mawetí-Guaraní segmental
 *       phonology”, Boletim do Museu Goeldi, Ciências Humanas 10(2), 2015 — apêndice de cognatos
 *       (aman, tatɨ, tukɨt, tukan, po, pɨ, mõj, watu, katu, amũj…).
 *   [L] Drude, “Awetí (Brazil) – Language Contexts”, Language Documentation and Description 19
 *       (2020): Awytyza, Awytyza ti’ingku, população, aldeias, o sal vegetal e as redes de buriti.
 *   [ISA] Marcela Coelho de Souza e S. Drude, verbete “Aweti” (pib.socioambiental.org/pt/Povo:Aweti):
 *       morekwat, mopat, myrã, aripi, karytu, ko, mo'atap, kwar'yp (“pau do sol”), Tazu'jytetam.
 *   Classificação: glottolog.org/resource/languoid/id/awet1244 (Tupian > Eastern Tupian >
 *   Maweti-Guarani > Aweti-Guarani).
 *
 * CONVERSÃO de [K] e [MD]: esses dois trabalhos dão as palavras em transcrição FONOLÓGICA. Só usei
 * as que se convertem para a ortografia de [O] sem nenhuma decisão a tomar, com as próprias regras de
 * [O] §2.1 e §3.1: ɨ → y, ʔ → ', ʐ → z, ŋ → ng; vogal nasal com til, marcada uma vez só (§5). Ex.:
 * tatɨ → taty (e [R] escreve “taty”), tukɨt → tukyt, tawoʐɨ → tawozy, taʐɨʔũ → tazy'ũ.
 *
 * GLOTAL: [O] §3.5, nota 19, recomenda o sinal ʼ (U+02BC), mas permite o apóstrofo comum. Uso o
 * apóstrofo reto ('), como nos outros pacotes do app (sateré-mawé, mundurukú), para dar para digitar.
 * Em começo de palavra ele é uma letra de verdade: 'y (água), 'en (você), 'yzapat (arco).
 *
 * HOMENS E MULHERES: o awetí tem “generoletos” ([F]; [L] §5) — alguns pronomes, prefixos e
 * demonstrativos mudam conforme quem FALA seja homem ou mulher. Os dois aparecem aqui, marcados.
 * Fora disso a língua não tem gênero gramatical: “nã” (fala dos homens) e “ĩ” (das mulheres) valem
 * para “ele” e para “ela”.
 *
 * Acento (sílaba tônica) não se escreve: em geral é a última sílaba da raiz ([O] §6.1).
 */
export const ROWS: VocabRow[] = [
  // Expressões. “an” (não) e “ehẽ” (sim): [O] §6.4, ex. 128-129; [K] §5 (“an/anite ‘no’ and
  // ehẽ/he’ẽ ‘yes’”, a primeira forma de cada par é a awetí). “Pejut!” (venham!): [R] ex. (39) e (129),
  // “Pej- ut … kitsaza” (venham … pessoal!), prefixo de imperativo plural pej(t)- ([K] tabela 6);
  // “Jotup!” (olhe!): [R] ex. (33), “Jo- tup” (imperativo de tup, ver), prefixo jo(t)- ([K]).
  // Prefixos se escrevem juntos ([O] §6.6). “Tehe!”, interjeição de admiração pela beleza, e “Wiw!”,
  // para chamar a atenção ou avisar: [R] §3.3.7.3, ex. (127) e (129); “Atsy!”, nojo: [R] ex. (125).
  // “Ikatu” (é bom): [R] ex. (20), i-katu (3-bom); katu “good” em [MD]. “Kari'aw?”: [R] ex. (13).
  ['Ehẽ', 'sim', 'expressão', 'Expressões', '👍', 'Ehẽ!'],
  ['An', 'não', 'expressão', 'Expressões', '🙅', 'An atuwyka.'],
  ['Pejut', 'venham! (para mais de uma pessoa)', 'expressão', 'Expressões', '🙌', 'Pejut!'],
  ['Jotup', 'olhe! (para uma pessoa)', 'expressão', 'Expressões', '👀', 'Jotup!'],
  ['Tehe', 'que lindo! (admiração pela beleza)', 'expressão', 'Expressões', '😍', 'Tehe!'],
  ['Ikatu', 'é bom, está bom', 'expressão', 'Expressões', '👌', 'Ikatu.'],
  ['Wiw', 'ei! (para chamar a atenção ou avisar)', 'expressão', 'Expressões', '📣', 'Wiw! Pejut!'],
  ['Atsy', 'que nojo!', 'expressão', 'Expressões', '🤢', 'Atsy!'],
  ["Kari'aw", 'por quê?', 'advérbio', 'Expressões', '❓', "Kari'aw?"],
  // Pronomes: [F] tabela 1 e [R] tabela 3.3. Homens: atit (eu), nã (ele/ela), tsã (eles); mulheres:
  // ito, ĩ, ta'i. Iguais para os dois: 'en, kajã, ozoza (também “azoza”, [O] §2.2), 'e'ipe. O
  // apóstrofo inicial de 'en e 'e'ipe é obrigatório na escrita ([O] §4.2, ex. 53-54). Demonstrativos
  // “este”: jatã (homens) e uja (mulheres), [F] tabela 3 e [R] tabela 3.4. Frases: [R] ex. (7)
  // “Atit tut tapi'izan 'a” (eu vou ser uma anta, fala de homem, num mito); [O] ex. 186 “'en ta”
  // (contigo); [F] ex. (18)-(19) “Jatã tsu jatã ozoporywyt / Uja tsu uja ozoporywyt”.
  ['Atit', 'eu (fala dos homens)', 'pronome', 'Pronomes', '🙋‍♂️', "Atit tut tapi'izan 'a."],
  ['Ito', 'eu (fala das mulheres)', 'pronome', 'Pronomes', '🙋‍♀️', 'Ito.'],
  ["'En", 'tu, você', 'pronome', 'Pronomes', '🫵', "'En ta."],
  ['Nã', 'ele, ela (fala dos homens)', 'pronome', 'Pronomes', '🧑', 'Nã.'],
  ['Ĩ', 'ele, ela (fala das mulheres)', 'pronome', 'Pronomes', '👤', 'Ĩ.'],
  ['Kajã', 'nós (incluindo quem ouve)', 'pronome', 'Pronomes', '🤝', 'Kajã.'],
  ['Ozoza', 'nós (sem incluir quem ouve)', 'pronome', 'Pronomes', '👨‍👩‍👧', 'Ozoza.'],
  ["'E'ipe", 'vocês', 'pronome', 'Pronomes', '👥', "'E'ipe."],
  ['Tsã', 'eles, elas (fala dos homens)', 'pronome', 'Pronomes', '👨‍👨‍👦', 'Tsã.'],
  ["Ta'i", 'eles, elas (fala das mulheres)', 'pronome', 'Pronomes', '👩‍👩‍👧', "Ta'i."],
  ['Jatã', 'este, esta; assim (fala dos homens)', 'pronome', 'Pronomes', '👇', 'Jatã tsu jatã ozoporywyt.'],
  ['Uja', 'este, esta; assim (fala das mulheres)', 'pronome', 'Pronomes', '☝️', 'Uja tsu uja ozoporywyt.'],
  // Pessoas: Awytyza, o nome que o povo dá a si mesmo ([L] §1, com o sufixo coletivo -za); mo'at,
  // kujãkyt, kaminu'at: [O] ex. 27, 194, 195 (“kujãkyt ekyte”, a faca da menina; “kaminu'at
  // e'inĩ”, a rede do menino); kujã: [R] §3.3.1.2, nota 157; myrã (velho) e aripi (velha): [ISA],
  // “Envelhecendo” — myrã também em [R] §3.3.9.2, ex. (272), glosado “old.man”; morekwat
  // (chefe) e mopat (pajé): [ISA] e [K] §5.
  ['Awytyza', 'os Awetí (o nome que o povo dá a si mesmo)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Awytyza.'],
  ["Mo'at", 'pessoa, gente', 'substantivo', 'Pessoas', '🧍', "Mo'at."],
  ['Kujã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kujã.'],
  ["Kaminu'at", 'menino', 'substantivo', 'Pessoas', '👦', "Kaminu'at e'inĩ."],
  ['Kujãkyt', 'menina', 'substantivo', 'Pessoas', '👧', 'Kujãkyt ekyte.'],
  ['Myrã', 'velho (homem mais velho)', 'substantivo', 'Pessoas', '👴', 'Myrã.'],
  ['Aripi', 'velha (mulher mais velha)', 'substantivo', 'Pessoas', '👵', 'Aripi.'],
  // Família — nomes “inalienáveis”, que sempre têm um dono ([O] §3.5; [K] §5): up (pai; itup, meu
  // pai; eup, teu pai; nup, o pai dele) e ty (mãe; ity, minha mãe; nãty, a mãe dele) em [K] (quadro
  // das p. 177-178, “Mopot ty”, “Mopot up”, “kaminu'at up”); “eup ok” (casa de teu pai) em [O] ex.
  // 17. Vocativos: atu (vovô!) e apaj (papai!), [O] §2.2 e ex. 95. a'yt (filho, de homem) e mẽpyt
  // (filho, de mulher): [R] ex. (8) e (21) e [MD] (woman's son mẽpɨt); ywyt (irmão mais novo, de
  // homem): [R] ex. (79), “it= ywyt”, e [O] ex. 20 “eywyt out” (teu irmão veio).
  ['Up', 'pai', 'substantivo', 'Família', '👨', 'Itup.'],
  ['Ty', 'mãe', 'substantivo', 'Família', '👩‍🍼', 'Ity.'],
  ['Atu', 'vovô! (para chamar o avô)', 'substantivo', 'Família', '👴', 'Atu!'],
  ['Apaj', 'papai! (para chamar o pai)', 'substantivo', 'Família', '🧔', 'Apaj!'],
  ["A'yt", 'filho, filha (do pai)', 'substantivo', 'Família', '👶', "A'yt."],
  ['Mẽpyt', 'filho, filha (da mãe)', 'substantivo', 'Família', '🍼', 'Mẽpyt.'],
  ['Ywyt', 'irmão mais novo (de um homem)', 'substantivo', 'Família', '👬', 'Eywyt out.'],
  // Animais. ta'wat (onça): [R] ex. (2c) e §3.3.1.6, [K] apêndice ab; mõj (cobra): [R] ex. (14a) e
  // [MD]; pira'yt (peixe): [R] ex. na l. 5049 e [K] §5; tapi'i (anta): [R] ex. (7); 'ukakyt (galo):
  // [R] ex. (11) e (29) — e a nota de que antes se dizia “arukakyt”; akyky (macaco-barrigudo) e
  // akykywatu (bugio-vermelho): [R] ex. (15); apuryt (papagaio) e ypek (pato): [F] ex. (22)-(23), na
  // forma sem o “n” inicial, que Drude considera a mais antiga (os dois jeitos se usam); tawozy
  // (jabuti), uzuwu (urubu), tazy'ũ (mosquito): [K] apêndice b, ax, ad, e [MD]; tukan (tucano): [MD].
  ["Ta'wat", 'onça', 'substantivo', 'Animais', '🐆', "Ta'wat."],
  ['Mõj', 'cobra', 'substantivo', 'Animais', '🐍', 'Mõj.'],
  ["Pira'yt", 'peixe', 'substantivo', 'Animais', '🐟', "Pira'yt."],
  ["Tapi'i", 'anta', 'substantivo', 'Animais', '🦛', "Tapi'i."],
  ["'Ukakyt", 'galo', 'substantivo', 'Animais', '🐓', "'Ukakyt."],
  ['Akyky', 'macaco-barrigudo', 'substantivo', 'Animais', '🐒', 'Akyky.'],
  ['Apuryt', 'papagaio', 'substantivo', 'Animais', '🦜', 'Apuryt.'],
  ['Ypek', 'pato', 'substantivo', 'Animais', '🦆', 'Ypek.'],
  ['Tawozy', 'jabuti', 'substantivo', 'Animais', '🐢', 'Tawozy.'],
  ['Tukan', 'tucano', 'substantivo', 'Animais', '🐦', 'Tukan.'],
  ['Uzuwu', 'urubu', 'substantivo', 'Animais', '🦅', 'Uzuwu.'],
  ["Tazy'ũ", 'mosquito', 'substantivo', 'Animais', '🦟', "Tazy'ũ."],
  // Natureza. 'y (água, rio): [R] §3.3.1.6 (“‘y ‘water, river’”) e ex. (104), “'y wo” (na água);
  // taza (fogo): [R] ex. (2a) e (40), “taza 'apo” (no fogo) — [MD] dá a raiz “aza”; taty (lua): [R]
  // ex. (116) e [MD]; aman (chuva): [MD]; kyta (pedra): [R] ex. (17); 'yp (árvore): [K] apêndice i e
  // [R] l. 6319 (“'yp ywo”); op (folha de planta) × 'op (papel, livro, dinheiro): [O] ex. 31 e 40.
  ["'Y", 'água; rio', 'substantivo', 'Natureza', '💧', "'Y wo."],
  ['Taza', 'fogo', 'substantivo', 'Natureza', '🔥', "Taza 'apo."],
  ['Taty', 'lua', 'substantivo', 'Natureza', '🌙', 'Taty.'],
  ['Aman', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Aman.'],
  ['Kyta', 'pedra', 'substantivo', 'Natureza', '🪨', 'Kyta.'],
  ["'Yp", 'árvore', 'substantivo', 'Natureza', '🌳', "'Yp."],
  ['Op', 'folha (de planta)', 'substantivo', 'Natureza', '🍃', 'Op.'],
  // Corpo: po (mão) e py (pé), [MD]; 'ap (cabelo da cabeça), [O] ex. 34 (“kaj'ap”, nosso cabelo).
  ['Po', 'mão', 'substantivo', 'Corpo', '✋', 'Po.'],
  ['Py', 'pé', 'substantivo', 'Corpo', '🦶', 'Py.'],
  ["'Ap", 'cabelo', 'substantivo', 'Corpo', '💇', "Kaj'ap."],
  // Comida. mani'ok (mandioca) e mani'oky (perereba, bebida doce de mandioca, de mani'ok + 'y): [O]
  // ex. 196-198 e [ISA]; jomem (beiju; também se escreve “jumem”, [O] §2.2, ex. 1): a frase
  // “Jumem a'uteju” (quero comer beiju) é de [R] ex. na l. 7142; awati (milho): [R] ex. (2b) e [MD];
  // tukyt (sal): [MD] (o sal vegetal dos Awetí, [L] §2 e [ISA]); pe (tabaco): [R] ex. (18).
  ["Mani'ok", 'mandioca', 'substantivo', 'Comida', '🥔', "Mani'ok."],
  ["Mani'oky", 'perereba (bebida doce de mandioca)', 'substantivo', 'Comida', '🥤', "Mani'oky."],
  ['Jomem', 'beiju', 'substantivo', 'Comida', '🫓', "Jumem a'uteju."],
  ['Awati', 'milho', 'substantivo', 'Comida', '🌽', 'Awati.'],
  ['Tukyt', 'sal', 'substantivo', 'Comida', '🧂', 'Tukyt.'],
  ['Pe', 'tabaco', 'substantivo', 'Comida', '🚬', 'Pe.'],
  // Casa e objetos. ok (casa): [O] ex. 32 e 192 (“Karitu ok”, casa de Karitu), itok (minha casa) ex.
  // 21 e 111, eok (tua casa) ex. 32; inĩ (rede): [O] ex. 37-39 e [K]; kyte (faca): [O] ex. 51
  // ('ekyte, tua faca) e 194; ky (machado): [K] (ky, iteky, neky); 'yzapat (arco) e u'wyp (flecha):
  // [R] ex. (22)-(23) e [K] quadro 7; tigap (banco): [O] nota 17 e [R] l. 6229; 'op: [O] ex. 40.
  ['Ok', 'casa', 'substantivo', 'Casa', '🏠', 'Karitu ok.'],
  ['Inĩ', 'rede (de dormir)', 'substantivo', 'Casa', '🛏️', "Ite'inĩ."],
  ['Kyte', 'faca', 'substantivo', 'Casa', '🔪', "'Ekyte."],
  ['Ky', 'machado', 'substantivo', 'Casa', '🪓', 'Iteky.'],
  ["'Yzapat", 'arco', 'substantivo', 'Casa', '🏹', "'Yzapat."],
  ["U'wyp", 'flecha', 'substantivo', 'Casa', '🎯', "U'wyp."],
  ['Tigap', 'banco (assento)', 'substantivo', 'Casa', '🪑', 'Tigap.'],
  ["'Op", 'papel, livro; dinheiro', 'substantivo', 'Casa', '📄', "'Op."],
  // Cultura: [ISA] (“A aldeia e o cotidiano”, “Organização social”, “Ritual, cosmologia e
  // xamanismo”); kwar'yp na grafia de [O] ex. 42 (de kwat + 'yp; [ISA] traduz “pau do sol”).
  ['Morekwat', 'chefe', 'substantivo', 'Cultura', '👑', 'Morekwat.'],
  ['Mopat', 'pajé', 'substantivo', 'Cultura', '🪶', 'Mopat.'],
  ["Kwar'yp", 'kuarup (a festa dos mortos ilustres)', 'substantivo', 'Cultura', '🪵', "Kwar'yp."],
  ['Karytu', 'karytu (as flautas sagradas e seu espírito)', 'substantivo', 'Cultura', '🪈', 'Karytu.'],
  ['Ko', 'roça', 'substantivo', 'Cultura', '🌱', 'Ko.'],
  // Números: [R] §3.3.6, ex. (103)-(105): momozotsu (um), mokõj (dois), kajpopap (cinco); mokõj
  // também em [MD]. As fontes consultadas não trazem “três” nem “quatro”, que ficaram de fora.
  ['Momozotsu', 'um', 'numeral', 'Números', '1️⃣', 'Momozotsu.'],
  ['Mokõj', 'dois', 'numeral', 'Números', '2️⃣', 'Mokõj.'],
  ['Kajpopap', 'cinco', 'numeral', 'Números', '5️⃣', 'Kajpopap.'],
  // Verbos, já com a pessoa: “ato” (eu vou/fui), [O] §2.2; “eto” (você foi), [O] ex. 50; “oto me”
  // (vai/foi, com a partícula final me), [O] ex. 91; “ajatuk” (tomo banho) e “ajatuktuju” (quero
  // tomar banho), [O] ex. 109-110; “atuwyka” (não vejo/vi), [O] ex. 18; “Jumem a'uteju”, [R].
  ['Ato', 'eu vou, eu fui', 'verbo', 'Verbos-chave', '🚶', 'Ato.'],
  ['Eto', 'você foi, você vai', 'verbo', 'Verbos-chave', '🏃', 'Eto.'],
  ['Oto me', 'ele vai, ele foi (ela também)', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Oto me.'],
  ['Ajatuk', 'eu tomo banho', 'verbo', 'Verbos-chave', '🏊', 'Ajatuk.'],
  ['Ajatuktuju', 'quero tomar banho', 'verbo', 'Verbos-chave', '🛁', 'Ajatuktuju.'],
  ['Atuwyka', 'não vejo, não vi', 'verbo', 'Verbos-chave', '🙈', 'An atuwyka.'],
  ["Jumem a'uteju", 'quero comer beiju', 'expressão', 'Verbos-chave', '😋', "Jumem a'uteju."],

  // ══ A2 (16/10/2026) ══
  // Fontes novas desta leva, todas abertas e lidas nesta data (as páginas são as impressas):
  //   [T] Drude, “Tense, Aspect and Mood in Awetí Verb-Paradigms: Analytic and Synthetic Forms”
  //       (apostila do encontro DoBeS, Nijmegen, 2005; pure.mpg.de item_1477909), 6 p. — Reiter
  //       cita como Drude 2008. Paradigmas: p. 2; imperativo, -ju, -tu, -aw: p. 3; kware, tut, ari,
  //       tepe, ti: p. 4.
  //   [R] Reiter 2011 (ver acima), páginas impressas do cap. 3, conferidas na imagem da página quando
  //       a fonte do PDF troca letras (o “ẽ” sai como “ｖ” no texto extraído; conferido em p. 106 e 130).
  //   [O] e [MD], já citadas acima, agora com página.
  // JUNÇÃO: [R] escreve os exemplos separando prefixos e sufixos com hífen ou “=” (“a- mo- loge”).
  // A ortografia de [O] §6.6 (p. 17-18) manda escrever prefixos e sufixos juntos, e partículas e
  // posposições separadas; só fiz essa junção, sem mudar letra: “ozo=e-tigap” → “ozoetigap”, como o
  // próprio [R] escreve no texto (p. 117).

  // Tempo e perguntas. mimo (ontem) e mã (aqui, agora): [R] p. 146-147, ex. (95)-(96), e [T] p. 3
  // (“mimo itantu”); ko'jem (amanhã): [T] p. 4 (“ko'jem tut itotu”) e [R] p. 341 e 352, ex. (26);
  // mote (há muito tempo): [R] p. 147, ex. (97), e p. 121, ex. (49) “Mote wian an 'ukakyryka a'yn”
  // (antigamente ainda não havia galos); kapatsoa (para onde?): [R] p. 147, ex. (98); kapaza (quem?):
  // [R] p. 98, ex. (4), e nota 223 da p. 147 (sempre para pessoas).
  ['Mimo', 'ontem', 'advérbio', 'Tempo', '⏮️', 'Mimo itantu.'],
  ["Ko'jem", 'amanhã', 'advérbio', 'Tempo', '⏭️', "Ko'jem tut itotu."],
  ['Mote', 'antigamente, há muito tempo', 'advérbio', 'Tempo', '📜', "Mote wian an 'ukakyryka a'yn."],
  // “'etotu” e não “etotu”: [O] p. 10, ex. (49), manda escrever a glotal na 2ª pessoa das formas em
  // -tu; [R] escreve “e= to-tu” sem ela. “nu'wyp” (as flechas deles) junta o “n=” de [R] ex. (96).
  ['Mã', 'aqui; agora', 'advérbio', 'Tempo', '📍', "Mã itã nu'wyp a'yn ne."],
  ['Kapatsoa', 'para onde?', 'advérbio', 'Expressões', '🧭', "Kapatsoa tut 'etotu me?"],
  ['Kapaza', 'quem?', 'pronome', 'Expressões', '🕵️', 'Kapaza?'],
  // Partículas. momati (todos): [R] p. 150, ex. (106)-(107); zanu (também), wezanu (de novo),
  // wezotsu (somente), etsan (por um momento), tepe (em vão): [O] p. 17, ex. (131)-(143), com etsan
  // também em [R] p. 113, ex. (39), e tepe em [T] p. 4 (“atet tepe”, dormi em vão); 'ytoto (muito,
  // de verdade): [O] p. 11, ex. (70), e [ISA] (“morekwat 'ytoto”, chefe de verdade); ari (futuro
  // “pode deixar”): [T] p. 4 e [R] p. 141, ex. (84).
  ['Momati', 'todos', 'pronome', 'Expressões', '💯', 'Kakaja utu ti momati me.'],
  ['Zanu', 'também', 'advérbio', 'Expressões', '➕', 'Zanu.'],
  ['Wezanu', 'de novo', 'advérbio', 'Expressões', '🔁', 'Wezanu.'],
  ['Wezotsu', 'só, somente', 'advérbio', 'Expressões', '🔹', 'Wezotsu.'],
  ["'Ytoto", 'muito, de verdade', 'advérbio', 'Expressões', '💪', "Morekwat 'ytoto."],
  ['Etsan', 'por um momento', 'advérbio', 'Expressões', '⏱️', 'Pejut etsan kat tupaw, kitsaza!'],
  ['Ari', 'pode deixar (o futuro que o outro espera)', 'expressão', 'Expressões', '🤞', 'Ato ari.'],
  ['Tepe', 'à toa, em vão', 'advérbio', 'Expressões', '🫤', 'Atet tepe.'],
  // Verbos, na forma atestada. otet (dorme/dormiu) e oteju (está dormindo): [O] p. 12-13, ex.
  // (84)-(85) e (88); otan (corre/correu) e otanju: [O] p. 7, ex. (14), p. 13, ex. (93), e p. 15, ex.
  // (107); out (veio): [O] p. 7, ex. (20) “eywyt out”; otige (sentou): [O] p. 8, ex. (24); o'aw
  // (deitou) e o'a'am (levantou): [O] p. 13, ex. (90) e (92); atak (chorei): [O] p. 13, ex. (96);
  // wejtup (vê/viu): [O] p. 13, ex. (87); wejkwakup (quer): [O] p. 10, ex. (46); akwawap (sei,
  // conheço): [T] p. 3 (“akwawap etupu”) e [R] p. 258, ex. (281) “ito akwawap 'en a'yn ne”; wej'u
  // (come; o verbo 'u, “eat.vt”, com wej-, ele): [R] p. 140, ex. (81), p. 258, ex. (279) e p. 352,
  // ex. (26); o'y'u (bebe): [R] p. 174, ex. (144), e p. 228 (“'y'u”, ao pé da letra “comer água”).
  ['Otet', 'dormir (ele dorme, dormiu)', 'verbo', 'Verbos-chave', '😴', 'Otet ne.'],
  ['Otan', 'correr (ele corre, correu)', 'verbo', 'Verbos-chave', '🏃‍♀️', 'Otan ne.'],
  ['Out', 'vir (ele veio)', 'verbo', 'Verbos-chave', '🛬', 'Eywyt out.'],
  ['Otige', 'sentar-se (ele sentou)', 'verbo', 'Verbos-chave', '💺', 'Otige.'],
  ["O'aw", 'deitar-se (ele deitou)', 'verbo', 'Verbos-chave', '🛌', "O'aw wẽ."],
  ["O'a'am", 'levantar-se (ele levantou)', 'verbo', 'Verbos-chave', '🧍‍♀️', "O'a'am me."],
  ['Atak', 'chorar (eu chorei)', 'verbo', 'Verbos-chave', '😢', 'Atak nge.'],
  ['Akwawap', 'saber, conhecer (eu sei)', 'verbo', 'Verbos-chave', '🧠', "Ito akwawap 'en a'yn ne."],
  ['Wejtup', 'ver (ele vê, viu)', 'verbo', 'Verbos-chave', '👁️', 'Wejtup me.'],
  ["Wej'u", 'comer (ele come, comeu)', 'verbo', 'Verbos-chave', '🍽️', "Wej'u."],
  ["O'y'u", 'beber (ele bebe, bebeu)', 'verbo', 'Verbos-chave', '🫗', "O'y'u."],
  ['Wejkwakup', 'querer (ele quer)', 'verbo', 'Verbos-chave', '🙏', "Amanajup 'ekyte wejkwakup."],
  // A aldeia e a natureza. pepi'ingkap (a praça, centro da aldeia): [R] p. 101, ex. (10), e p. 112,
  // ex. (3); tetam (aldeia): [R] p. 99 (“tetampa”, os de outras aldeias), p. 102, ex. (12), e o nome
  // da aldeia principal, Tazu'jyt tetam ([L] §2); 'yta'ãj (terra, areia): [R] p. 101, ex. (9), e p.
  // 103, ex. (14b); 'ywykwat (buraco na terra): [R] p. 149, ex. (103); ywyting (nuvem) e ting
  // (fumaça): [MD] p. 292 e 294 (“ɨwɨ-tiŋ”, “tiŋ”), convertidas pela regra do cabeçalho (ŋ → ng; o
  // hífen de composto some, [O] p. 18).
  ["Pepi'ingkap", 'praça', 'substantivo', 'Aldeia', '⭕', "Pepi'ingkap ywo."],
  ['Tetam', 'aldeia', 'substantivo', 'Aldeia', '🛖', "Tazu'jyt tetam."],
  ["'Yta'ãj", 'terra, areia', 'substantivo', 'Natureza', '🏜️', "'Yta'ãj'jyt."],
  ['Ywyting', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Ywyting.'],
  ['Ting', 'fumaça', 'substantivo', 'Natureza', '💨', 'Ting.'],
  ["'Ywykwat", 'buraco', 'substantivo', 'Natureza', '🕳️', "Mokõj 'ywykwat kojtu ti tsã me."],
  // Estados e qualidades (verbos de estado). itejo'yk (estou com frio): [T] p. 2; ita'ok (estou com
  // raiva) e ita'ogeju (estou ficando com raiva): [O] p. 16, ex. (108), e [R] p. 126 e 130; takup
  // (quente) e takuweju (está esquentando): [T] p. 3; ikyrytu (o que é verde): [O] p. 8, ex. (22);
  // kylawytu (o que é preto): [R] p. 97, ex. (2b) “awati kylaw-ytu” (milho preto); te'ẽ (doce):
  // [MD] p. 295 (“teɁẽ”, convertida: Ɂ → ').
  ["Itejo'yk", 'estou com frio', 'expressão', 'Qualidades', '🥶', "Itejo'yk."],
  ["Ita'ok", 'estou com raiva', 'expressão', 'Qualidades', '😠', "Ita'ok."],
  ['Takup', 'quente', 'adjetivo', 'Qualidades', '🥵', 'Takuweju.'],
  ['Ikyrytu', 'verde', 'adjetivo', 'Qualidades', '🟢', 'Ikyrytu.'],
  ['Kylawytu', 'preto', 'adjetivo', 'Qualidades', '⚫', 'Awati kylawytu.'],
  ["Te'ẽ", 'doce', 'adjetivo', 'Qualidades', '🍯', "Te'ẽ."],
  // Bichos, gente e coisas. tatupep (tatu): [MD] p. 291 e nota 31 da p. 293 (“tatu-pep ‘armadillo’”);
  // kakaja (gaivota, “seagull”): [R] p. 150, ex. (107); moretatat (convidado): [R] p. 98 e 112, ex.
  // (3), “moretatat-put-za” (os convidados); ta'ẽ (panela): [R] p. 130, ex. (60a), conferido na
  // imagem da página.
  ['Tatupep', 'tatu', 'substantivo', 'Animais', '🦔', 'Tatupep.'],
  ['Kakaja', 'gaivota', 'substantivo', 'Animais', '🕊️', 'Kakaja utu ti momati me.'],
  ['Moretatat', 'convidado', 'substantivo', 'Pessoas', '🎉', 'Ujaza moretatawuza.'],
  ["Ta'ẽ", 'panela', 'substantivo', 'Casa', '🍲', "Ta'ẽ u'ãzãtu."],
];

export const VOCAB_AWE = buildVocab('awe', ROWS);
