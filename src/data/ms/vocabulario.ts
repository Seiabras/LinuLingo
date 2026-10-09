import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do malaio (bahasa Melayu, padrão da Malásia) — nível A1 (unidades 1 e 2). Pacote
 * incompleto: ver o campo `incomplete` em index.ts.
 *
 * O indonésio (src/data/id/) é a outra norma padrão da mesma língua; dele só reaproveitamos a
 * ESTRUTURA do pacote, nunca as palavras: cada palavra abaixo foi conferida para o malaio da Malásia,
 * uma por uma, nas próprias páginas (não em resumos de busca), nestas fontes:
 *
 * 1) PRPM — Pusat Rujukan Persuratan Melayu, o portal da Dewan Bahasa dan Pustaka (DBP), órgão oficial
 *    da língua na Malásia: prpm.dbp.gov.my/Cari1?keyword=<palavra>, que mostra as definições do
 *    Kamus Dewan Edisi Keempat (KD4) e do Kamus Pelajar Edisi Kedua. Conferidas ali: kereta («kenderaan
 *    yg memakai roda»), bas, teksi, polis, basikal, kedai, tandas (sentido 2: «bilik khas … utk buang
 *    air»), pejabat («bangunan … tempat bekerja»), universiti, lapan («delapan»), Isnin, Khamis,
 *    Jumaat, Ahad, semalam (sentido 3: «hari sebelum hari ini»), awak (sentido 2: «kata ganti diri
 *    kedua»), mahu, boleh, kakak, abang, budak, khabar (com a subentrada «~ baik»), emak, mak, petang,
 *    sila («minta dgn hormat supaya …, jemputlah»), televisyen, kualiti, nasionalisme, e, como marcas
 *    de «isto é do indonésio», sore («Id petang») e kantor («Id pejabat»).
 * 2) Wiktionary em inglês, seção «Malay» de cada verbete (en.wiktionary.org/wiki/<palavra>, lido no
 *    texto-fonte da página): classe gramatical, sentido, rótulos regionais (Malaysia/Indonesia) e
 *    etimologia de todas as palavras desta lista. Os rótulos regionais que sustentam as diferenças com
 *    o indonésio: kereta («syn: mobil — Indonesia»), basikal («syn: sepeda — Riau, Indonesia»), kedai
 *    («Malaysia, Singapore, Brunei; syn: toko — Indonesia»), teksi («Malaysia, Riau, Singapore»),
 *    polis («syn: polisi — Indonesia»), universiti e televisyen («Brunei, Malaysia, Singapore»), lapan
 *    (e delapan: «now chiefly Indonesia»), boleh («syn: bisa — chiefly Indonesia»), kakak («sense of
 *    older male sibling lost in Singapore and Malay Peninsula»), budak e pejabat (marcados como falsos
 *    amigos entre o malaio padrão e o indonésio), semalam («Peninsular West Coast: yesterday»).
 *    As páginas do Wiktionary em inglês para os equivalentes INDONÉSIOS (seção «Indonesian») foram
 *    lidas só para comparar: mobil, kereta («ellipsis of kereta api: train»), bus, taksi, polisi,
 *    sepeda, toko, kantor, pejabat («official»), budak («slave»), Senin, Minggu («Sunday»), kemarin,
 *    semalam («last night»), mau, universitas, televisi, kualitas.
 * 3) Wikivoyage, «Malay phrasebook» (en.wikivoyage.org/wiki/Malay_phrasebook, texto-fonte): as frases
 *    feitas e o uso — «Apa khabar? / Khabar baik», «Siapa nama awak? / Nama saya …», «Sila» × «Tolong»
 *    (sila convida, tolong pede), «Selamat tinggal» (quem vai embora diz) × «Selamat jalan» (quem fica
 *    diz), «Selamat petang», «Saya tak faham», «Anda is more formal than awak», «Encik/Puan/Cik» como
 *    tratamento, «Abang/Kakak» como tratamento, os números (8 = lapan), os dias da semana (Ahad,
 *    Isnin, Selasa, Rabu, Khamis, Jumaat, Sabtu), as cores, «semalam» para ontem na Península, e as
 *    regras de gramática usadas nas frases (sem conjugação nem gênero; ordem sujeito-verbo-objeto;
 *    «ini/itu», o possuidor e o adjetivo vêm DEPOIS do substantivo — «kereta saya», «rumah kami»;
 *    plural por repetição opcional, «anak-anak», e a frase «Dia ada tiga anak»).
 *
 * Frases de exemplo: ou citadas dessas fontes (Wiktionary/Wikivoyage), ou montadas só com palavras
 * desta lista e as regras de ordem citadas no item 3 — nenhuma palavra fora das fontes.
 *
 * Decisões de tradução (para a foto/pictograma ser o mesmo dos outros idiomas — regra «imagens, não
 * emojis» do AGENTS.md): usamos a mesma tradução em português que o indonésio e os outros pacotes
 * («oi», «obrigado», «carro», «ônibus», «escola»…), com a nota de uso entre parênteses.
 *
 * Palavras do A2 (acrescentadas depois, mesmas fontes do item 1-2 acima, verbete por verbete):
 * seluar («trousers»; Id: celana), kasut («shoes»; Id: sepatu), stokin (do inglês «stocking»; Id: kaos
 * kaki), sejuk («cold, cool», usado para o tempo e para bebidas; Wiktionary), doktor (grafia da
 * Malásia, do inglês «doctor»; Id: dokter, do neerlandês), jururawat («nurse»; Id: perawat), jurutera
 * («engineer»; Id: insinyur, do neerlandês), tukang masak («cook», composto de «tukang», artesão/
 * profissional de um ofício, + «masak», cozinhar), penat («tired»; Id prefere lelah/capek), gembira
 * («happy, glad»), stesen (do inglês «station»; Id: stasiun, do neerlandês), hospital, restoran, bank
 * — todas conferidas no Wiktionary em inglês, seção «Malay» de cada verbete. Os verbos novos (kerja,
 * beli, tulis, baca, dengar, tengok) aparecem na RAIZ, como já é a convenção deste pacote para ada,
 * tinggal, cakap e faham (o Kamus Dewan também lista a raiz como entrada principal); «tengok» («to
 * look, to see», mais coloquial que «lihat») e «kerja» («work», mais coloquial que «bekerja») vêm do
 * Wiktionary, rotulados como usuais no registro falado.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  // hai: Wiktionary «informal greeting; hi» (influência do inglês desde os anos 1980)
  ['hai', 'oi', 'interjeição', 'Expressões', '👋', 'Hai, apa khabar?'],
  ['selamat pagi', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Selamat pagi, Encik Ali!'],
  // selamat petang: Wikivoyage «Good evening/afternoon»; o KD4 marca «sore» (o «tarde» do indonésio)
  // como Id, e define petang como o período depois do meio-dia até o pôr do sol
  ['selamat petang', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Selamat petang, Puan Aminah!'],
  ['selamat malam', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Selamat malam, semua!'],
  // Wikivoyage: «whoever is leaving uses [selamat tinggal] and whoever is staying uses [selamat jalan]»
  ['selamat tinggal', 'tchau (dito por quem vai embora)', 'interjeição', 'Expressões', '👋', 'Selamat tinggal, Siti!'],
  ['selamat jalan', 'boa viagem, tchau (dito a quem vai embora)', 'interjeição', 'Expressões', '🧳', 'Selamat jalan, Ali!'],
  ['terima kasih', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Terima kasih, Encik!'],
  ['sama-sama', 'de nada', 'interjeição', 'Expressões', '🙏', '— Terima kasih! — Sama-sama!'],
  // sila: Wikivoyage («Sila duduk», please sit down) e KD4 («minta dgn hormat supaya…, jemputlah»)
  ['sila', 'por favor (convidando: entre, sente-se)', 'advérbio', 'Expressões', '🙏', 'Sila masuk.'],
  // tolong: Wiktionary «to help» e «used to make a polite request»; «Tolonglah saya» é do Wikivoyage
  ['tolong', 'ajudar; por favor (ao pedir algo)', 'verbo', 'Expressões', '🙏', 'Tolonglah saya.'],
  ['maaf', 'desculpa', 'interjeição', 'Expressões', '🙏', 'Maaf, saya tak faham.'],
  // apa khabar: a grafia da Malásia tem «kh» (do árabe خبر); o Wiktionary dá «kabar» como forma da
  // Indonésia, e o PRPM não tem verbete «kabar»
  ['apa khabar', 'como vai?', 'expressão', 'Expressões', '❓', 'Hai, apa khabar?'],
  ['khabar baik', 'tudo bem (resposta a “apa khabar?”)', 'expressão', 'Expressões', '👍', 'Khabar baik, terima kasih.'],
  // ── Essenciais ──
  ['ya', 'sim', 'interjeição', 'Essenciais', '👍', 'Ya, terima kasih.'],
  ['tidak', 'não', 'advérbio', 'Essenciais', '👎', 'Tidak, terima kasih.'],
  // bukan: Wiktionary «not (used with nouns and prepositions)»
  ['bukan', 'não (antes de substantivo)', 'advérbio', 'Essenciais', '🚫', 'Dia bukan kakak saya.'],
  ['dan', 'e', 'conjunção', 'Essenciais', null, 'Roti dan kopi.'],
  ['atau', 'ou', 'conjunção', 'Essenciais', null, 'Teh atau kopi?'],
  ['sangat', 'muito (advérbio)', 'advérbio', 'Essenciais', null, 'Rumah itu sangat besar.'],
  ['juga', 'também', 'advérbio', 'Essenciais', null, 'Saya juga suka teh.'],
  // boleh: Wiktionary «can; may» com o sinônimo «bisa — chiefly Indonesia»; no malaio, bisa é «veneno»
  ['boleh', 'poder (conseguir, ter permissão)', 'verbo', 'Essenciais', '✅', 'Boleh saya masuk?'],
  ['ini', 'este, isto', 'pronome', 'Essenciais', '👇', 'Kereta ini besar.'],
  ['itu', 'esse, aquilo', 'pronome', 'Essenciais', '👉', 'Rumah itu kecil.'],
  // ── Pessoas ──
  ['saya', 'eu', 'pronome', 'Pessoas', '🙋', 'Saya dari Brazil.'],
  // awak: Wikivoyage — «Anda is more formal than awak»; KD4: «kata ganti diri kedua, engkau, kamu»
  ['awak', 'você', 'pronome', 'Pessoas', '🫵', 'Awak dari mana?'],
  // anda: Wiktionary «formal, Malaysia: you»
  ['anda', 'você (formal)', 'pronome', 'Pessoas', '🫵', 'Anda dari mana?'],
  ['dia', 'ele/ela', 'pronome', 'Pessoas', '🧑', 'Dia dari Kuala Lumpur.'],
  ['kami', 'nós (sem quem ouve)', 'pronome', 'Pessoas', '🙌', 'Kami dari Brazil.'],
  ['kita', 'nós (com quem ouve)', 'pronome', 'Pessoas', '🙌', 'Kita belajar bahasa Melayu.'],
  ['mereka', 'eles', 'pronome', 'Pessoas', '👥', 'Mereka dari Melaka.'],
  ['nama', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Siapa nama awak?'],
  // kawan: Wiktionary «friend»; o Wikivoyage o lista também como forma de tratamento entre iguais
  ['kawan', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Dia kawan saya.'],
  ['keluarga', 'família', 'substantivo', 'Pessoas', '👪', 'Keluarga saya besar.'],
  // emak: KD4 «orang yg melahirkan seseorang, ibu»; «mak» é a forma curta (KD4: «singkatan bagi emak»)
  ['emak', 'mãe', 'substantivo', 'Pessoas', '👩', 'Emak saya dari Johor.'],
  // bapa: Wiktionary «father»; a grafia da Malásia é «bapa» (o indonésio escreve «bapak»)
  ['bapa', 'pai', 'substantivo', 'Pessoas', '👨', 'Bapa saya dari Melaka.'],
  // abang × kakak: KD4 — abang «saudara lelaki yg lebih tua»; kakak «saudara perempuan yg lebih tua»
  // (o KD4 ainda registra um 2º sentido de kakak como «abang», mas o Wiktionary anota que esse sentido
  // se perdeu na Península Malaia e em Singapura, e o Wikivoyage usa Abang/Kakak como par
  // masculino/feminino — por isso ensinamos kakak como «irmã mais velha»)
  ['abang', 'irmão (mais velho)', 'substantivo', 'Pessoas', '👦', 'Saya ada seorang abang.'],
  ['kakak', 'irmã (mais velha)', 'substantivo', 'Pessoas', '👧', 'Saya ada seorang kakak.'],
  ['adik', 'irmão/irmã mais novo(a)', 'substantivo', 'Pessoas', '🧒', 'Saya ada dua adik.'],
  // budak: KD4 sentido 1 «anak, kanak-kanak»; Wiktionary «Malaysia, Singapore: child» e, no indonésio,
  // «slave» — falso amigo entre as duas normas
  ['budak', 'criança', 'substantivo', 'Pessoas', '🧒', 'Budak itu suka kucing.'],
  // ── Verbos-chave ──
  // ada: Wiktionary «there is; to have»; Wikivoyage «Dia ada tiga anak» (ele tem três filhos)
  ['ada', 'ter; haver', 'verbo', 'Verbos-chave', '🤲', 'Dia ada tiga anak.'],
  ['tinggal', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Saya tinggal di Kuala Lumpur.'],
  // cakap: Wiktionary «to talk; to speak»; Wikivoyage «cakap Bahasa Inggeris?»
  ['cakap', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Saya cakap sedikit bahasa Melayu.'],
  ['pergi', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Saya pergi ke sekolah.'],
  ['makan', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Saya makan nasi.'],
  ['minum', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Saya minum teh.'],
  ['suka', 'gostar', 'verbo', 'Verbos-chave', '❤️', 'Saya suka kopi.'],
  ['tahu', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Saya tidak tahu.'],
  // mahu: grafia da Malásia (KD4); o indonésio escreve «mau» (sem verbete no PRPM)
  ['mahu', 'querer', 'verbo', 'Verbos-chave', '💭', 'Saya mahu pergi ke kedai.'],
  ['belajar', 'estudar, aprender', 'verbo', 'Verbos-chave', '📚', 'Saya belajar bahasa Melayu.'],
  // faham: Wiktionary «to understand»; Wikivoyage «Saya tak faham» (eu não entendo)
  ['faham', 'entender', 'verbo', 'Verbos-chave', '💡', 'Saya tak faham.'],
  // ── Na cidade ──
  ['rumah', 'casa', 'substantivo', 'Na cidade', '🏠', 'Rumah saya kecil.'],
  // bandar: Wiktionary «city, town» (kota é sinônimo, mais usado para cidades antigas)
  ['bandar', 'cidade', 'substantivo', 'Na cidade', '🏙️', 'Kuala Lumpur bandar besar.'],
  // kedai: do tâmil கடை (Wiktionary); KD4 «bangunan tempat menjual barang-barang»
  ['kedai', 'loja', 'substantivo', 'Na cidade', '🏪', 'Kedai itu kecil.'],
  // sekolah: do português «escola» (Wiktionary; o Wikivoyage também cita)
  ['sekolah', 'escola', 'substantivo', 'Na cidade', '🏫', 'Adik saya pergi ke sekolah.'],
  // tandas: Wiktionary «toilet» (syn: «toilet — common in Indonesian»); Wikivoyage «Di mana tandas?»
  ['tandas', 'banheiro', 'substantivo', 'Na cidade', '🚻', 'Maaf, di mana tandas?'],
  // pejabat: KD4 «tempat bekerja»; no indonésio pejabat é «funcionário público» (Wiktionary)
  ['pejabat', 'escritório', 'substantivo', 'Na cidade', '🏢', 'Bapa saya pergi ke pejabat.'],
  // meja: do português «mesa» (Wiktionary)
  ['meja', 'mesa', 'substantivo', 'Na cidade', '🪑', 'Kopi saya di meja.'],
  // bendera: do português «bandeira» (Wiktionary)
  ['bendera', 'bandeira', 'substantivo', 'Na cidade', '🚩', 'Bendera Malaysia merah, putih, biru dan kuning.'],
  // ── Transporte ──
  // kereta: do português «carreta» (Wiktionary); na Malásia é o carro (KD4); no indonésio, «kereta»
  // sozinho é o trem, e o carro é «mobil» (que o KD4 só registra como sinônimo)
  ['kereta', 'carro', 'substantivo', 'Transporte', '🚗', 'Kereta saya kecil.'],
  // bas, teksi, basikal, polis: do inglês bus, taxi, bicycle, police (Wiktionary, Wikivoyage); os
  // equivalentes indonésios bus/taksi/sepeda/polisi vêm do neerlandês (Wiktionary, seção Indonesian)
  ['bas', 'ônibus', 'substantivo', 'Transporte', '🚌', 'Bas ini pergi ke mana?'],
  ['teksi', 'táxi', 'substantivo', 'Transporte', '🚕', 'Teksi!'],
  ['basikal', 'bicicleta', 'substantivo', 'Transporte', '🚲', 'Budak itu ada basikal.'],
  ['polis', 'polícia', 'substantivo', 'Transporte', '👮', 'Saya akan panggil polis.'],
  // ── Comida ──
  ['air', 'água', 'substantivo', 'Comida', '💧', 'Saya mahu air.'],
  ['roti', 'pão', 'substantivo', 'Comida', '🍞', 'Saya makan roti.'],
  ['susu', 'leite', 'substantivo', 'Comida', '🥛', 'Adik saya minum susu.'],
  ['kopi', 'café', 'substantivo', 'Comida', '☕', 'Saya suka kopi.'],
  ['teh', 'chá', 'substantivo', 'Comida', '🍵', 'Teh atau kopi?'],
  // nasi: Wiktionary «cooked rice»; Wikivoyage «nasi (=cooked rice) / beras (=raw rice)»
  ['nasi', 'arroz', 'substantivo', 'Comida', '🍚', 'Kami makan nasi.'],
  ['anjing', 'cachorro', 'substantivo', 'Animais', '🐕', 'Anjing itu besar.'],
  ['kucing', 'gato', 'substantivo', 'Animais', '🐈', 'Kucing itu kecil.'],
  // ── Descrições ──
  ['baik', 'bom', 'adjetivo', 'Descrições', '👍', 'Dia kawan yang baik.'],
  ['besar', 'grande', 'adjetivo', 'Descrições', '📏', 'Rumah itu sangat besar.'],
  ['kecil', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Kucing itu kecil.'],
  // ── Tempo ──
  ['hari ini', 'hoje', 'advérbio', 'Tempo', '📅', 'Hari ini saya belajar.'],
  // esok: Wikivoyage «besok or esok»; Wiktionary «tomorrow»
  ['esok', 'amanhã', 'advérbio', 'Tempo', '📅', 'Esok saya pergi ke sekolah.'],
  // semalam: KD4 «hari sebelum hari ini»; Wiktionary e Wikivoyage: «ontem» na costa oeste da Península
  // (e no malaio da rádio e TV RTM); em outros dialetos (e no indonésio) quer dizer «ontem à noite»
  ['semalam', 'ontem', 'advérbio', 'Tempo', '📅', 'Semalam saya pergi ke bandar.'],
  // minggu: do português «domingo» (Wiktionary); no malaio é «semana» (o domingo é Ahad)
  ['minggu', 'semana', 'substantivo', 'Tempo', '🗓️', 'Satu minggu ada tujuh hari.'],
  ['Isnin', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hari ini hari Isnin.'],
  ['Selasa', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Esok hari Selasa.'],
  ['Rabu', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hari ini hari Rabu.'],
  ['Khamis', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Esok hari Khamis.'],
  ['Jumaat', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hari ini hari Jumaat.'],
  ['Sabtu', 'sábado', 'substantivo', 'Tempo', '📅', 'Esok hari Sabtu.'],
  ['Ahad', 'domingo', 'substantivo', 'Tempo', '📅', 'Hari ini hari Ahad.'],
  // ── Números ── (Wikivoyage, lista de números; cada um conferido no Wiktionary)
  ['satu', 'um', 'numeral', 'Números', '1️⃣', 'Saya mahu satu kopi.'],
  ['dua', 'dois', 'numeral', 'Números', '2️⃣', 'Saya mahu dua teh.'],
  ['tiga', 'três', 'numeral', 'Números', '3️⃣', 'Dia ada tiga anak.'],
  ['empat', 'quatro', 'numeral', 'Números', '4️⃣', 'Keluarga saya ada empat orang.'],
  ['lima', 'cinco', 'numeral', 'Números', '5️⃣', 'Lima ringgit.'],
  ['enam', 'seis', 'numeral', 'Números', '6️⃣', 'Enam hari.'],
  ['tujuh', 'sete', 'numeral', 'Números', '7️⃣', 'Satu minggu ada tujuh hari.'],
  // lapan: KD4 e Wikivoyage; o Wiktionary anota que «delapan» é a forma hoje sobretudo do indonésio
  ['lapan', 'oito', 'numeral', 'Números', '8️⃣', 'Lapan ringgit.'],
  ['sembilan', 'nove', 'numeral', 'Números', '9️⃣', 'Sembilan hari.'],
  ['sepuluh', 'dez', 'numeral', 'Números', '🔟', 'Sepuluh ringgit.'],
  ['dua puluh', 'vinte', 'numeral', 'Números', '🔢', 'Dua puluh ringgit.'],
  // ── Cores ── (Wikivoyage, lista de cores; cada uma conferida no Wiktionary)
  ['merah', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Kereta saya merah.'],
  ['biru', 'azul', 'adjetivo', 'Cores', '🔵', 'Bas itu biru.'],
  ['hijau', 'verde', 'adjetivo', 'Cores', '🟢', 'Teksi itu hijau.'],
  ['putih', 'branco', 'adjetivo', 'Cores', '⚪', 'Rumah saya putih.'],
  ['hitam', 'preto', 'adjetivo', 'Cores', '⚫', 'Kucing itu hitam.'],
  ['kuning', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Teksi itu kuning.'],
  // ── Perguntas ──
  ['apa', 'o que', 'pronome', 'Perguntas', '❓', 'Apa ini?'],
  ['siapa', 'quem', 'pronome', 'Perguntas', '❓', 'Siapa nama awak?'],
  ['di mana', 'onde', 'pronome', 'Perguntas', '❓', 'Di mana tandas?'],
  ['dari mana', 'de onde', 'advérbio', 'Perguntas', '❓', 'Awak dari mana?'],
  ['bagaimana', 'como', 'advérbio', 'Perguntas', '❓', 'Bagaimana rumah awak?'],
  // ── A2: cuaca ──
  ['cuaca', 'tempo, clima', 'substantivo', 'Natureza', '🌦️', 'Bagaimana cuaca hari ini?'],
  ['panas', 'calor; quente', 'adjetivo', 'Natureza', '🥵', 'Hari ini sangat panas.'],
  ['sejuk', 'frio, fresco', 'adjetivo', 'Natureza', '🥶', 'Airnya sejuk.'],
  ['hujan', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Esok akan hujan.'],
  ['angin', 'vento', 'substantivo', 'Natureza', '💨', 'Anginnya kuat hari ini.'],
  ['cerah', 'ensolarado, claro', 'adjetivo', 'Natureza', '☀️', 'Hari ini cerah.'],
  // ── A2: pakaian ──
  ['baju', 'roupa, camisa', 'substantivo', 'Roupas', '👕', 'Saya mahu beli baju baru.'],
  // seluar: Wiktionary «trousers»; Id usa «celana»
  ['seluar', 'calça', 'substantivo', 'Roupas', '👖', 'Seluar ini terlalu besar.'],
  // kasut: Wiktionary «shoes»; Id usa «sepatu»
  ['kasut', 'sapato', 'substantivo', 'Roupas', '👟', 'Kasut saya baru.'],
  ['topi', 'chapéu', 'substantivo', 'Roupas', '🧢', 'Dia pakai topi merah.'],
  ['jaket', 'jaqueta', 'substantivo', 'Roupas', '🧥', 'Saya pakai jaket sebab sejuk.'],
  // stokin: do inglês «stocking» (Wiktionary); Id usa «kaos kaki»
  ['stokin', 'meia', 'substantivo', 'Roupas', '🧦', 'Stokin saya putih.'],
  // ── A2: badan ──
  ['kepala', 'cabeça', 'substantivo', 'Corpo', '👤', 'Kepala saya sakit.'],
  ['tangan', 'mão', 'substantivo', 'Corpo', '✋', 'Basuh tangan awak.'],
  ['kaki', 'pé, perna', 'substantivo', 'Corpo', '🦶', 'Kakinya besar.'],
  ['mata', 'olho', 'substantivo', 'Corpo', '👁️', 'Matanya biru.'],
  ['telinga', 'orelha', 'substantivo', 'Corpo', '👂', 'Telinganya kecil.'],
  ['mulut', 'boca', 'substantivo', 'Corpo', '👄', 'Jangan cakap dengan mulut penuh.'],
  // ── A2: nombor 30-100 ──
  ['tiga puluh', 'trinta', 'numeral', 'Números', '🔢', 'Emak saya berumur tiga puluh tahun.'],
  ['empat puluh', 'quarenta', 'numeral', 'Números', '🔢', 'Bapa saya berumur empat puluh tahun.'],
  ['lima puluh', 'cinquenta', 'numeral', 'Números', '🔢', 'Lima puluh ringgit.'],
  ['enam puluh', 'sessenta', 'numeral', 'Números', '🔢', 'Enam puluh minit sama dengan satu jam.'],
  ['tujuh puluh', 'setenta', 'numeral', 'Números', '🔢', 'Nenek saya berumur tujuh puluh tahun.'],
  // lapan puluh: consistente com «lapan» (8) já no A1
  ['lapan puluh', 'oitenta', 'numeral', 'Números', '🔢', 'Lapan puluh orang ada di sana.'],
  ['sembilan puluh', 'noventa', 'numeral', 'Números', '🔢', 'Sembilan puluh ringgit.'],
  ['seratus', 'cem', 'numeral', 'Números', '🔢', 'Seratus ringgit, sila.'],
  // ── A2: pekerjaan ──
  // doktor: grafia da Malásia, do inglês «doctor»; Id: «dokter», do neerlandês
  ['doktor', 'médico', 'substantivo', 'Profissões', '🩺', 'Doktor itu bekerja di hospital.'],
  ['guru', 'professor', 'substantivo', 'Profissões', '🧑‍🏫', 'Guru saya mengajar bahasa Melayu.'],
  ['petani', 'agricultor', 'substantivo', 'Profissões', '🌾', 'Petani itu menanam padi.'],
  // tukang masak: composto «tukang» (profissional de um ofício) + «masak» (cozinhar)
  ['tukang masak', 'cozinheiro', 'substantivo', 'Profissões', '🧑‍🍳', 'Tukang masak itu masak nasi lemak.'],
  // jururawat: Wiktionary «nurse»; Id: «perawat»
  ['jururawat', 'enfermeiro', 'substantivo', 'Profissões', '🧑‍⚕️', 'Jururawat itu bekerja di hospital.'],
  // jurutera: Wiktionary «engineer»; Id: «insinyur», do neerlandês
  ['jurutera', 'engenheiro', 'substantivo', 'Profissões', '👷', 'Abang saya jurutera.'],
  // ── A2: perasaan ──
  ['gembira', 'feliz, contente', 'adjetivo', 'Sentimentos', '😊', 'Saya gembira hari ini.'],
  ['sedih', 'triste', 'adjetivo', 'Sentimentos', '😢', 'Dia sedih sebab hujan.'],
  // penat: Wiktionary «tired»
  ['penat', 'cansado', 'adjetivo', 'Sentimentos', '😴', 'Saya penat selepas kerja.'],
  ['lapar', 'com fome', 'adjetivo', 'Sentimentos', '🍽️', 'Saya lapar, mari makan.'],
  ['haus', 'com sede', 'adjetivo', 'Sentimentos', '🥤', 'Saya haus, nak minum air.'],
  ['takut', 'com medo', 'adjetivo', 'Sentimentos', '😨', 'Adik saya takut kucing.'],
  // ── A2: bandar ──
  ['jalan', 'rua', 'substantivo', 'Cidade', '🛣️', 'Rumah saya di jalan ini.'],
  ['pasar', 'mercado', 'substantivo', 'Cidade', '🏪', 'Kami beli roti di pasar.'],
  ['hospital', 'hospital', 'substantivo', 'Cidade', '🏥', 'Doktor bekerja di hospital.'],
  ['restoran', 'restaurante', 'substantivo', 'Cidade', '🍽️', 'Kami makan di restoran itu.'],
  // stesen: do inglês «station»; Id: «stasiun», do neerlandês
  ['stesen', 'estação', 'substantivo', 'Cidade', '🚉', 'Stesen bas ada di sini.'],
  ['bank', 'banco', 'substantivo', 'Cidade', '🏦', 'Bank itu tutup hari Ahad.'],
  // ── A2: lebih banyak kata kerja (dalam bentuk akar, seperti ada/tinggal/cakap/faham) ──
  // kerja: Wiktionary «work» (mais coloquial que «bekerja»)
  ['kerja', 'trabalhar', 'verbo', 'Verbos-chave', '💼', 'Saya kerja di Kuala Lumpur.'],
  ['beli', 'comprar', 'verbo', 'Verbos-chave', '🛍️', 'Saya beli jaket baru.'],
  ['tulis', 'escrever', 'verbo', 'Verbos-chave', '✍️', 'Saya tulis surat.'],
  ['baca', 'ler', 'verbo', 'Verbos-chave', '📖', 'Saya suka baca buku.'],
  ['dengar', 'ouvir', 'verbo', 'Verbos-chave', '👂', 'Saya dengar muzik.'],
  // tengok: Wiktionary «to look, to see» (mais coloquial que «lihat»)
  ['tengok', 'ver, olhar', 'verbo', 'Verbos-chave', '👀', 'Saya tengok burung.'],
];

export const VOCAB_MS = buildVocab('ms', ROWS);
