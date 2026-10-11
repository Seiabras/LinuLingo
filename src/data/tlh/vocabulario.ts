import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do klingon (tlhIngan Hol) — a segunda língua construída do app com curso de verdade
 * (depois do esperanto), desta vez da família "artística/de ficção" (criada por Marc Okrand para
 * Star Trek, não para comunicação internacional). Klingon não tem gênero gramatical, por isso
 * nenhuma linha usa o campo de gênero.
 *
 * Diferente do esperanto (que empresta raízes do latim/línguas românicas de propósito, para ficar
 * fácil), o vocabulário do klingon foi inventado do zero por Okrand para soar estranho a ouvidos
 * humanos — por isso é bem mais limitado do que o de uma língua auxiliar. TODA palavra abaixo é
 * conferida contra "The Klingon Dictionary" (Marc Okrand, Pocket Books, 1985/1992), cruzada com
 * klingonska.org (Klingonska Akademien) e, para o vocabulário de família/cores/qualidades, com as
 * páginas de apoio do próprio Klingon Language Institute (kli.org) ao curso de klingon do Duolingo
 * — nenhuma palavra inventada por fã entrou aqui (ex.: "muSHa'", que circula como "amar" pela
 * internet, é invenção da comunidade sem confirmação de Okrand, e por isso NÃO está nesta lista).
 *
 * Klingon não tem uma classe gramatical separada de "adjetivo": uma qualidade (grande, bom, as
 * cores...) é expressa por um VERBO ESTATIVO, que vira "adjetivo" ao seguir um substantivo dentro
 * de um sintagma ("Duj tIn", a nave grande) e vira o predicado de uma frase completa ao vir ANTES
 * do substantivo ("tIn Duj", a nave é grande) — por isso essas linhas usam a classe 'verbo', a
 * classe correta em klingon, e não 'adjetivo'. O mesmo vale para as cores.
 *
 * Nível A2.1/A2.2 (unidades 3 e 4): todo item novo foi conferido linha por linha no texto completo
 * de "The Klingon Dictionary" (via klingonska.org/canon/1992-01-01-tkd.txt, a transcrição canônica
 * mantida pela Klingonska Akademien) — tempo (jaj, DIS, jar, wa'Hu', wa'leS, DaHjaj), clima (SIS e
 * peD, verbos comuns, “rain”/“snow”; bIr e tuj, verbos estativos, “be cold”/“be hot”), sentimentos (Quch, 'IQ, ghung, 'oj, QeH, Doy'), corpo
 * (ghop, qam, mIn, 'uS, nuj, ghIch), roupa (Sut, waq, wep, yopwaH), família (qorDu', loDnal,
 * be'nal), lugares (qach, yoS — “district, area”, por isso “distrito, área” —, DuSaQ), profissões (Qel, ghojwI', mang) e verbos (ghaj, yIn, Hegh,
 * nob, neH, vum, tu', je', Qong, ghojmoH), além de mu' e ghot (substantivos). Os números de 20 a 90 seguem a regra da seção
 * 5.2 do livro (número de unidades + "-maH"): "cha'maH" (20) e "wejmaH" (30) estão na tabela,
 * "loSmaH" (40) no exemplo "vaghSaD wejvatlh loSmaH Soch" (5.347) e "vaghmaH" (50) em "vaghmaH yuQ"
 * (cinquenta planetas); "javmaH" (60), "SochmaH" (70), "chorghmaH" (80) e "HutmaH" (90) são o
 * "etc." que o próprio livro deixa para o leitor completar com a MESMA regra.
 *
 * As frases de exemplo das linhas novas são montadas por nós com essas palavras e com as regras do
 * livro (ordem OVS; verbo estativo antes do substantivo = predicado; palavra de tempo no começo da
 * frase, seção 6.7; prefixos sem objeto jI-/bI-/ma-, seção 4.1.1) — não são citações de Okrand.
 * A exceção é "jIbIr." (bIr), recorte de "pa'vamDaq jIbIr" (estou com frio nesta sala), de Okrand
 * em "Klingon for the Galactic Traveler".
 */
export const ROWS: VocabRow[] = [
  // Expressões (saudações e cortesias)
  ['nuqneH', 'oi/olá', 'interjeição', 'Expressões', '👋', 'nuqneH! tlhIngan jIH.'],
  ['Qapla\'', 'sucesso!/tchau', 'interjeição', 'Expressões', '🏆', 'Qapla\'!'],
  ['majQa\'', 'muito bem!/excelente!', 'interjeição', 'Expressões', '👏', 'majQa\'!'],
  ['qatlho\'', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'qatlho\'!'],
  // Essenciais: sim/não e qualidades básicas (verbos estativos, a classe "adjetivo" do klingon)
  ['HISlaH', 'sim (resposta a pergunta de sim/não)', 'interjeição', 'Essenciais', '👍', 'tlhIngan Hol Dajatlh\'a\'? HISlaH!'],
  ['HIja\'', 'sim (afirmativa, uso mais amplo que HISlaH)', 'interjeição', 'Essenciais', '👍', 'HIja\'.'],
  ['ghobe\'', 'não', 'interjeição', 'Essenciais', '👎', 'tlhIngan Hol Dajatlh\'a\'? ghobe\'!'],
  ['tIn', 'ser grande', 'verbo', 'Essenciais', '📏', 'tIn Duj.'],
  ['mach', 'ser pequeno', 'verbo', 'Essenciais', '🤏', 'mach puq.'],
  ['QaQ', 'ser bom', 'verbo', 'Essenciais', '✅', 'QaQ Soj.'],
  ['qab', 'ser mau/feio', 'verbo', 'Essenciais', '❌', 'qab veS.'],
  ['chu\'', 'ser novo', 'verbo', 'Essenciais', '🆕', 'chu\' Duj.'],
  ['qan', 'ser velho', 'verbo', 'Essenciais', '👴', 'qan vav.'],
  // Pessoas: pronomes (capazes de linguagem × não capazes — distinção obrigatória em klingon)
  ['jIH', 'eu', 'pronome', 'Pessoas', '🙋', 'tlhIngan jIH.'],
  ['SoH', 'você/tu', 'pronome', 'Pessoas', '🫵', 'tlhIngan SoH\'a\'?'],
  ['ghaH', 'ele/ela (capaz de linguagem)', 'pronome', 'Pessoas', '🧑', 'SuvwI\' ghaH.'],
  ['\'oH', 'ele/ela/isso (não capaz de linguagem)', 'pronome', 'Pessoas', '🔘', 'Duj \'oH.'],
  ['maH', 'nós', 'pronome', 'Pessoas', '🙌', 'tlhIngan maH.'],
  ['tlhIH', 'vocês', 'pronome', 'Pessoas', '👥', 'SuvwI\' tlhIH.'],
  ['chaH', 'eles/elas (capazes de linguagem)', 'pronome', 'Pessoas', '🫂', 'tlhIngan chaH.'],
  ['bIH', 'eles/elas/isso (não capazes de linguagem)', 'pronome', 'Pessoas', '🔘', 'Dujmey bIH.'],
  // Pessoas: família
  ['vav', 'pai', 'substantivo', 'Pessoas', '👨', 'puq legh vav.'],
  ['SoS', 'mãe', 'substantivo', 'Pessoas', '👩', 'puq legh SoS.'],
  ['loDnI\'', 'irmão', 'substantivo', 'Pessoas', '👦', 'ghoj loDnI\'.'],
  ['be\'nI\'', 'irmã', 'substantivo', 'Pessoas', '👧', 'bIQ tlhutlh be\'nI\'.'],
  ['puq', 'filho(a)/criança', 'substantivo', 'Pessoas', '🧒', 'mach puq.'],
  ['puqloD', 'filho', 'substantivo', 'Pessoas', '👦', 'puqloD legh vav.'],
  ['puqbe\'', 'filha', 'substantivo', 'Pessoas', '👧', 'puqbe\' legh SoS.'],
  ['vavnI\'', 'avô', 'substantivo', 'Pessoas', '👴', 'qan vavnI\'.'],
  ['SoSnI\'', 'avó', 'substantivo', 'Pessoas', '👵', 'qan SoSnI\'.'],
  ['jup', 'amigo(a)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'jup ghaH.'],
  ['loD', 'homem', 'substantivo', 'Pessoas', '👨', 'loD ghaH.'],
  ['be\'', 'mulher', 'substantivo', 'Pessoas', '👩', 'be\' jIH.'],
  // Verbos-chave
  ['Sop', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Soj Sop puq.'],
  ['tlhutlh', 'beber', 'verbo', 'Verbos-chave', '🥤', 'bIQ tlhutlh ghaH.'],
  ['legh', 'ver', 'verbo', 'Verbos-chave', '👀', 'Hov legh ghaH.'],
  ['jatlh', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'tlhIngan Hol Dajatlh\'a\'?'],
  ['yaj', 'entender', 'verbo', 'Verbos-chave', '🧠', 'jIyajbe\'.'],
  ['ghoj', 'aprender', 'verbo', 'Verbos-chave', '📚', 'ghoj puq.'],
  ['Suv', 'lutar', 'verbo', 'Verbos-chave', '⚔️', 'Suv SuvwI\'.'],
  ['parHa\'', 'gostar (de)', 'verbo', 'Verbos-chave', '❤️', 'Duj parHa\' SoS.'],
  // Números (o sistema usa os sufixos -maH para dezena e -vatlh para centena, presos ao número de unidades)
  ['pagh', 'zero; ou… ou (conjunção entre frases: “bISoptaH pagh bItlhutlhtaH”, ou você come ou bebe)', 'numeral', 'Números', '0️⃣', 'pagh Duj.'],
  ['wa\'', 'um', 'numeral', 'Números', '1️⃣', 'wa\' Duj.'],
  ['cha\'', 'dois', 'numeral', 'Números', '2️⃣', 'cha\' puq.'],
  ['wej', 'três', 'numeral', 'Números', '3️⃣', 'wej Duj.'],
  ['loS', 'quatro', 'numeral', 'Números', '4️⃣', 'loS puq.'],
  ['vagh', 'cinco', 'numeral', 'Números', '5️⃣', 'vagh Hov.'],
  ['jav', 'seis', 'numeral', 'Números', '6️⃣', 'jav Duj.'],
  ['Soch', 'sete', 'numeral', 'Números', '7️⃣', 'Soch puq.'],
  ['chorgh', 'oito', 'numeral', 'Números', '8️⃣', 'chorgh Hov.'],
  ['Hut', 'nove', 'numeral', 'Números', '9️⃣', 'Hut Duj.'],
  ['wa\'maH', 'dez', 'numeral', 'Números', '🔟', 'wa\'maH puq.'],
  ['wa\'vatlh', 'cem', 'numeral', 'Números', '💯', 'wa\'vatlh Duj.'],
  // Cores (também verbos estativos; o klingon só tem 4 cores básicas e não distingue verde de azul)
  ['chIS', 'ser branco', 'verbo', 'Cores', '⚪', 'chIS Hov.'],
  ['qIj', 'ser preto', 'verbo', 'Cores', '⚫', 'qIj Duj.'],
  ['Doq', 'ser vermelho/laranja (cor quente)', 'verbo', 'Cores', '🟠', 'Doq qul.'],
  ['SuD', 'ser azul/verde (cor fria)', 'verbo', 'Cores', '🔵', 'SuD chal.'],
  ['wov', 'ser claro', 'verbo', 'Cores', '🔆', 'wov jul.'],
  ['Hurgh', 'ser escuro', 'verbo', 'Cores', '🌑', 'Hurgh Duj.'],
  // Natureza e lugar
  ['bIQ', 'água', 'substantivo', 'Natureza e Lugar', '💧', 'wov bIQ.'],
  ['Soj', 'comida', 'substantivo', 'Natureza e Lugar', '🍽️', 'QaQ Soj.'],
  ['Ha\'DIbaH', 'carne', 'substantivo', 'Natureza e Lugar', '🥩', 'Ha\'DIbaH Sop SuvwI\'.'],
  ['chal', 'céu', 'substantivo', 'Natureza e Lugar', '🌤️', 'chal legh puq.'],
  ['Hov', 'estrela', 'substantivo', 'Natureza e Lugar', '⭐', 'Hov legh ghaH.'],
  ['maS', 'lua', 'substantivo', 'Natureza e Lugar', '🌙', 'maS legh be\'nI\'.'],
  ['tera\'', 'Terra', 'substantivo', 'Natureza e Lugar', '🌍', 'tera\' \'oH.'],
  ['qul', 'fogo', 'substantivo', 'Natureza e Lugar', '🔥', 'qul legh SuvwI\'.'],
  ['jul', 'sol', 'substantivo', 'Natureza e Lugar', '☀️', 'jul \'oH.'],
  ['juH', 'casa', 'substantivo', 'Natureza e Lugar', '🏠', 'tIn juH.'],
  ['veng', 'cidade', 'substantivo', 'Natureza e Lugar', '🏙️', 'tIn veng.'],
  ['Duj', 'navio', 'substantivo', 'Natureza e Lugar', '🚀', 'Duj vIlegh jIH.'],
  // Cultura (os temas mais marcantes do povo klingon de ficção)
  ['batlh', 'honra', 'substantivo', 'Cultura', '🎖️', 'batlh \'oH.'],
  ['veS', 'guerra', 'substantivo', 'Cultura', '⚔️', 'qab veS.'],
  ['SuvwI\'', 'guerreiro', 'substantivo', 'Cultura', '🛡️', 'SuvwI\' ghaH.'],
  ['wo\'', 'império', 'substantivo', 'Cultura', '👑', 'wo\' \'oH.'],
  ['tlhIngan', 'klingon (pessoa)', 'substantivo', 'Cultura', '🖖', 'tlhIngan ghaH.'],
  ['yaS', 'oficial', 'substantivo', 'Cultura', '🫡', 'puq legh yaS.'],

  // ── Números 20-90 (nível A2.1): mesma regra de "-maH" da A1, confirmada em TKD para 20/30/50 ──
  ["cha'maH", 'vinte', 'numeral', 'Números', '✨', "cha'maH Duj."],
  ['wejmaH', 'trinta', 'numeral', 'Números', '✨', 'wejmaH puq.'],
  ['loSmaH', 'quarenta', 'numeral', 'Números', '✨', 'loSmaH Hov.'],
  ['vaghmaH', 'cinquenta', 'numeral', 'Números', '✨', 'vaghmaH Duj.'],
  ['javmaH', 'sessenta', 'numeral', 'Números', '✨', 'javmaH puq.'],
  ['SochmaH', 'setenta', 'numeral', 'Números', '✨', 'SochmaH Hov.'],
  ['chorghmaH', 'oitenta', 'numeral', 'Números', '✨', 'chorghmaH Duj.'],
  ['HutmaH', 'noventa', 'numeral', 'Números', '✨', 'HutmaH puq.'],

  // ── Tempo (nível A2.1): jaj, DIS, jar, wa'Hu', wa'leS, DaHjaj — todos em TKD. "wa'Hu'",
  // "wa'leS" e "DaHjaj" são SUBSTANTIVOS no livro ("yesterday (n)", "tomorrow (n)", "today (n)"),
  // usados como elemento de tempo no começo da frase (seção 6.7: "DaHjaj nom Soppu'") ──
  ['jaj', 'dia (do amanhecer ao amanhecer)', 'substantivo', 'Tempo', '📅', 'QaQ jaj.'],
  ['DIS', 'ano (calendário klingon)', 'substantivo', 'Tempo', '🗓️', 'chu\' DIS.'],
  ['jar', 'mês (calendário klingon)', 'substantivo', 'Tempo', '🗓️', 'chu\' jar.'],
  ["wa'Hu'", 'ontem', 'substantivo', 'Tempo', '⏮️', "wa'Hu' jIghung."],
  ["wa'leS", 'amanhã', 'substantivo', 'Tempo', '⏭️', "wa'leS SIS."],
  ['DaHjaj', 'hoje', 'substantivo', 'Tempo', '📆', 'DaHjaj jIQuch.'],

  // ── Família (nível A2.1): qorDu', loDnal, be'nal — confirmados em TKD ──
  ["qorDu'", 'família', 'substantivo', 'Pessoas', '👪', "qorDu' vIghaj jIH."],
  ['loDnal', 'marido', 'substantivo', 'Pessoas', '🤵', 'loDnal ghaH loD.'],
  ["be'nal", 'esposa', 'substantivo', 'Pessoas', '👰', "be'nal ghaH be'."],

  // ── Verbos-chave (nível A2.1/A2.2): todos conferidos em TKD ──
  ['ghaj', 'ter', 'verbo', 'Verbos-chave', '🤲', "qorDu' vIghaj jIH."],
  ['yIn', 'viver', 'verbo', 'Verbos-chave', '🌱', 'yIn SuvwI\'.'],
  ['Hegh', 'morrer', 'verbo', 'Verbos-chave', '💀', 'Hegh jagh.'],
  ['nob', 'dar', 'verbo', 'Verbos-chave', '🎁', 'Soj vInob.'],
  ['neH', 'querer', 'verbo', 'Verbos-chave', '💭', 'bIQ vIneH.'],
  ['vum', 'trabalhar', 'verbo', 'Verbos-chave', '💼', 'vum SuvwI\'.'],
  ["tu'", 'encontrar', 'verbo', 'Verbos-chave', '🔎', "Duj vItu'."],
  ["je'", 'comprar', 'verbo', 'Verbos-chave', '🛍️', "Soj vIje'."],
  ['Qong', 'dormir', 'verbo', 'Verbos-chave', '🛌', 'Qong puq.'],
  ['ghojmoH', 'ensinar', 'verbo', 'Verbos-chave', '🧑‍🏫', 'puq ghojmoH yaS.'],

  // ── Essenciais (nível A2.2) ──
  ["mu'", 'palavra', 'substantivo', 'Essenciais', '🔤', "chu' mu'."],
  ['ghot', 'pessoa', 'substantivo', 'Essenciais', '🧍', 'tIn ghot.'],
  // "pagh" é um homônimo confirmado em TKD: além do numeral "zero" (A1), é a conjunção "ou… ou"
  // entre duas frases completas (seção 6.2.1: "bISoptaH pagh bItlhutlhtaH", ou você está comendo
  // ou está bebendo) — os dois sentidos ficam na mesma linha dos Números, lá em cima.

  // ── Clima (nível A2.2): todos em TKD — "SIS" e "peD" são verbos comuns ("rain", "snow") e formam
  // frase sem sujeito nenhum, como ensina o KLI (kli.org/duolingo/discuss-the-weather: "SIStaH,
  // peD etc. are quite sufficient"); ver tlh-g9 na gramática. "bIr" e "tuj" são estativos ("be
  // cold", "be hot", traduzidos pelo adjetivo, como os outros estativos do app), mas NÃO há fonte
  // canônica de "bIr." sozinho como “está frio” (na lista tlhIngan-Hol isso aparece só como
  // hipótese, com “?”); o exemplo de Okrand é com a pessoa que sente frio: "pa'vamDaq jIbIr" (estou
  // com frio nesta sala, "Klingon for the Galactic Traveler", 1997, p. 105). Por isso "jIbIr." e
  // "tuj Soj." (a comida está quente, montada por nós: estativo antes do substantivo = predicado).
  ['SIS', 'chover', 'verbo', 'Clima', '🌧️', 'SIS.'],
  ['peD', 'nevar', 'verbo', 'Clima', '❄️', 'peD.'],
  ['bIr', 'frio', 'verbo', 'Clima', '🥶', 'jIbIr.'],
  ['tuj', 'quente', 'verbo', 'Clima', '☀️', 'tuj Soj.'],

  // ── Sentimentos (nível A2.2): verbos estativos, todos em TKD. A frase de exemplo usa o prefixo
  // "jI-" (eu, sem objeto — ver tlh-g7), montada pela regra da seção 4.1.1 do livro (jIQong,
  // bIQong, maQong), não citada de Okrand.
  ['Quch', 'feliz', 'verbo', 'Sentimentos', '😄', 'jIQuch.'],
  ["'IQ", 'triste', 'verbo', 'Sentimentos', '😢', "jI'IQ."],
  ["Doy'", 'cansado', 'verbo', 'Sentimentos', '😴', "jIDoy'."],
  ['ghung', 'com fome', 'verbo', 'Sentimentos', '🤤', 'jIghung.'],
  ["'oj", 'com sede', 'verbo', 'Sentimentos', '🥤', "jI'oj."],
  ['QeH', 'com raiva', 'verbo', 'Sentimentos', '😠', 'jIQeH.'],

  // ── Corpo (nível A2.2): todos em TKD ──
  ['ghop', 'mão', 'substantivo', 'Corpo', '✋', 'tIn ghop.'],
  ['qam', 'pé', 'substantivo', 'Corpo', '🦶', 'mach qam.'],
  ['mIn', 'olho', 'substantivo', 'Corpo', '👁️', 'tIn mIn.'],
  ["'uS", 'perna', 'substantivo', 'Corpo', '🦵', "tIn 'uS."],
  ['nuj', 'boca', 'substantivo', 'Corpo', '👄', 'mach nuj.'],
  ['ghIch', 'nariz', 'substantivo', 'Corpo', '👃', 'mach ghIch.'],

  // ── Roupa (nível A2.2): todos em TKD ──
  ['Sut', 'roupa', 'substantivo', 'Roupas', '👗', 'chu\' Sut.'],
  ['waq', 'sapato', 'substantivo', 'Roupas', '👟', 'chu\' waq.'],
  ['wep', 'casaco', 'substantivo', 'Roupas', '🧥', 'chu\' wep.'],
  ['yopwaH', 'calça', 'substantivo', 'Roupas', '👖', 'chu\' yopwaH.'],

  // ── Lugares (nível A2.2): todos em TKD ──
  ['qach', 'prédio, construção', 'substantivo', 'Natureza e Lugar', '🏢', 'tIn qach.'],
  ['yoS', 'distrito, área', 'substantivo', 'Natureza e Lugar', '📍', 'tIn yoS.'],
  ['DuSaQ', 'escola', 'substantivo', 'Natureza e Lugar', '🏫', 'tIn DuSaQ.'],

  // ── Profissões (nível A2.2): todos em TKD ──
  ['Qel', 'médico', 'substantivo', 'Cultura', '🩺', 'Qel ghaH.'],
  ["ghojwI'", 'estudante', 'substantivo', 'Cultura', '🎓', "ghojwI' ghaH puq."],
  ['mang', 'soldado', 'substantivo', 'Cultura', '🎖️', 'mang ghaH SuvwI\'.'],
];

export const VOCAB_TLH = buildVocab('tlh', ROWS);
