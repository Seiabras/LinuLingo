import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do javanês (basa Jawa, registro ngoko/informal — ver `gramatica.ts` sobre os níveis de
 * fala). Nível A1 (unidades 1 e 2) e A2 (unidades 3 e 4) — ver o campo `incomplete` do pacote para o
 * que ainda falta. Palavras do A1 conferidas em Wiktionary (inglês, seção "Javanese") e no roteiro de
 * frases do Wikivoyage ("Javanese phrasebook", CC BY-SA).
 *
 * Observações de quem pesquisou o A2 (09/10/2026): cada palavra nova abaixo foi checada em
 * Wiktionary (inglês), sempre na seção "Javanese" — quando o verbete em grafia latina era só um
 * redirecionamento ("romanization of ..."), fui direto no verbete da escrita javanesa (Carakan) pra
 * confirmar classe gramatical e sentido antes de usar. Por tema:
 * - Perguntas (apa, sapa, ngendi, kapan, pira, piyé): Wiktionary inglês, verbetes individuais; "ngendi"
 *   também confere com um recurso de língua pouco comum da Universidade de Wisconsin
 *   (wisc.pb.unizin.org/lctlresources), que lista "pundi" como a forma krama (mais formal).
 * - Rotina diária (tangi, adus, turu, sinau, mulih, gawé): Wiktionary inglês, verbetes individuais da
 *   escrita javanesa.
 * - Partes do dia (jam, saiki, wayah, ésuk, wengi, awan): Wiktionary inglês; "jam" é empréstimo do
 *   malaio (que vem do sânscrito "yāma"); "awan" e "wengi" têm par krama citado no próprio verbete
 *   (awan/siyang, wengi/dalu — "dalu" já aparece na saudação "Sugeng dalu" do A1).
 * - Números maiores (telung puluh, patang puluh, séket, sewidak, satus, sèwu): artigo da Wikipédia em
 *   inglês "Javanese numerals" e a tabela de números do Omniglot
 *   (omniglot.com/language/numbers/javanese.htm), que traz ngoko e krama lado a lado.
 * - Mercado (pasar, tuku, rega, larang, murah, dhuwit): Wiktionary inglês, verbetes individuais;
 *   "murah" confirmado no Wiktionary em javanês (jv.wiktionary.org), que também dá "larang" como
 *   antônimo.
 */
export const ROWS: VocabRow[] = [
  ['Halo', 'oi', 'interjeição', 'Expressões', '👋', 'Halo! Piyé kabaré?'],
  ['Sugeng énjang', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Sugeng énjang, Pak!'],
  ['Sugeng dalu', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Sugeng dalu! Aku arep turu.'],
  ['Matur nuwun', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Matur nuwun, Ibu!'],
  ['Sami-sami', 'de nada', 'interjeição', 'Expressões', '🙏', '— Matur nuwun! — Sami-sami!'],
  ["Ma'af", 'desculpa', 'interjeição', 'Expressões', '🙏', "Ma'af, aku ora weruh kowé!"],
  ['Iyå', 'sim', 'advérbio', 'Essenciais', '👍', 'Iyå, apik.'],
  ['Ora', 'não', 'advérbio', 'Essenciais', '👎', 'Ora, matur nuwun.'],
  ['Aku', 'eu', 'pronome', 'Pessoas', '🙋', 'Aku saka Brasil.'],
  ['Kowé', 'você', 'pronome', 'Pessoas', '🫵', 'Kowé saka ngendi?'],
  ['Dhèwèké', 'ele/ela', 'pronome', 'Pessoas', '🧑', 'Dhèwèké saka Yogyakarta.'],
  ['kita', 'nós', 'pronome', 'Pessoas', '🙌', 'Ayo, kita sinau basa Jawa!'],
  ['Bapak', 'pai', 'substantivo', 'Pessoas', '👨', 'Bapakku saka Solo.'],
  ['Ibu', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ibuku Siti.'],
  ['Mas', 'irmão mais velho', 'substantivo', 'Pessoas', '🧑', 'Aku duwé siji Mas.'],
  ['Mbak', 'irmã mais velha', 'substantivo', 'Pessoas', '🧑', 'Mbakku apik banget.'],
  ['Adhi', 'irmão/irmã mais novo(a)', 'substantivo', 'Pessoas', '🧒', 'Adhiku isih cilik.'],
  ['apik', 'bom', 'adjetivo', 'Essenciais', '👍', 'Kabaré apik-apik baé.'],
  ['gedhé', 'grande', 'adjetivo', 'Essenciais', '📏', 'Omahku gedhé banget.'],
  ['cilik', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Omahku cilik nanging apik.'],
  ['omah', 'casa', 'substantivo', 'Essenciais', '🏠', 'Omahku ing Yogyakarta.'],
  ['kutha', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Yogyakarta kutha gedhé.'],
  ['banyu', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Aku arep banyu, Mbak.'],
  ['endhog', 'ovo', 'substantivo', 'Alimentação e Restaurantes', '🥚', 'Ibu duwé endhog.'],
  ['gedhang', 'banana', 'substantivo', 'Alimentação e Restaurantes', '🍌', 'Aku seneng gedhang.'],
  ['pelem', 'manga (fruta)', 'substantivo', 'Alimentação e Restaurantes', '🥭', 'Pelem iki legi banget.'],
  ['mangan', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Aku mangan sega.'],
  ['ngombé', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Aku ngombé banyu.'],
  ['manggon', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Aku manggon ing kutha gedhé.'],
  ['ngomong', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Aku iså ngomong basa Jawa.'],
  ['seneng', 'gostar', 'verbo', 'Verbos-chave', '❤️', 'Aku seneng gedhang.'],
  ['ngerti', 'entender/saber', 'verbo', 'Verbos-chave', '🧠', 'Aku ora ngerti.'],
  ['arep', 'querer', 'verbo', 'Verbos-chave', '💭', 'Aku arep sinau basa Jawa.'],
  ['iså', 'poder', 'verbo', 'Verbos-chave', '✅', 'Kowé iså ngomong basa Jawa?'],
  ['mlaku', 'andar', 'verbo', 'Verbos-chave', '🚶', 'Aku arep mlaku.'],
  ['wong', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Wong Jawa akèh banget.'],
  ['wadon', 'mulher', 'substantivo', 'Pessoas', '👩', 'Wong wadon kuwi guruku.'],
  ['lanang', 'homem', 'substantivo', 'Pessoas', '👨', 'Wong lanang kuwi bapakku.'],
  ['asu', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Asuku Budi.'],
  ['kucing', 'gato', 'substantivo', 'Essenciais', '🐈', 'Kucingku turu akèh.'],
  ['dina iki', 'hoje', 'advérbio', 'Essenciais', '📅', 'Dina iki apik banget.'],
  ['sésuk', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Nganti sésuk!'],
  ['wingi', 'ontem', 'advérbio', 'Essenciais', '📅', 'Wingi udan.'],
  ['siji', 'um', 'numeral', 'Números', '1️⃣', 'Aku duwé siji asu.'],
  ['loro', 'dois', 'numeral', 'Números', '2️⃣', 'Aku duwé loro kucing.'],
  ['telu', 'três', 'numeral', 'Números', '3️⃣', 'Aku duwé telu kucing.'],
  ['papat', 'quatro', 'numeral', 'Números', '4️⃣', 'Aku duwé papat asu.'],
  ['limå', 'cinco', 'numeral', 'Números', '5️⃣', 'Aku duwé limå gedhang.'],
  ['enem', 'seis', 'numeral', 'Números', '6️⃣', 'Aku duwé enem gedhang.'],
  ['pitu', 'sete', 'numeral', 'Números', '7️⃣', 'Aku duwé pitu endhog.'],
  ['wolu', 'oito', 'numeral', 'Números', '8️⃣', 'Aku duwé wolu endhog.'],
  ['sångå', 'nove', 'numeral', 'Números', '9️⃣', 'Aku duwé sångå pelem.'],
  ['sepuluh', 'dez', 'numeral', 'Números', '🔟', 'Aku duwé sepuluh pelem.'],
  ['rong puluh', 'vinte', 'numeral', 'Números', '🔢', 'Aku duwé rong puluh gedhang.'],
  ['Senén', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dina Senén, aku seneng banget.'],
  ['Selåså', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dina Selåså, aku mangan gedhang.'],
  ['Rebo', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dina Rebo, aku ngombé banyu.'],
  ['Kemis', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dina Kemis, aku seneng banget.'],
  ['Jumawah', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dina Jumawah, aku seneng banget.'],
  ['Setu', 'sábado', 'substantivo', 'Tempo', '📅', 'Dina Setu, aku manggon ing omah.'],
  ['Minggu', 'domingo', 'substantivo', 'Tempo', '📅', 'Dina Minggu, aku mangan gedhang.'],
  ['abang', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Gedhang abang.'],
  ['biru', 'azul', 'adjetivo', 'Cores', '🔵', 'Omah biru.'],
  ['ijo', 'verde', 'adjetivo', 'Cores', '🟢', 'Godhong ijo.'],
  ['kuning', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Gedhang kuning.'],
  ['putih', 'branco', 'adjetivo', 'Cores', '⚪', 'Kucing putih.'],
  ['ireng', 'preto', 'adjetivo', 'Cores', '⚫', 'Asu ireng.'],

  // A2.1 — perguntas (unidade jv-u3, lição 1)
  ['apa', 'o quê', 'pronome', 'Perguntas', '❓', 'Iki apa?'],
  ['sapa', 'quem', 'pronome', 'Perguntas', '👥', 'Sapa jenengmu?'],
  ['ngendi', 'onde', 'advérbio', 'Perguntas', '🧭', 'Omahmu ngendi?'],
  ['kapan', 'quando', 'pronome', 'Perguntas', '⏳', 'Kapan kowé mulih?'],
  ['pira', 'quanto/quantos', 'pronome', 'Perguntas', '🔢', 'Pira regane iki?'],
  ['piyé', 'como', 'advérbio', 'Perguntas', '🤷', 'Piyé kabaré, Pak Budi?'],

  // A2.1 — rotina diária (unidade jv-u3, lição 2)
  ['tangi', 'levantar/acordar', 'verbo', 'Verbos-chave', '⏰', 'Aku tangi jam enem.'],
  ['adus', 'banhar-se', 'verbo', 'Verbos-chave', '🚿', 'Aku adus ing wayah esuk.'],
  ['turu', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Aku turu jam sepuluh wengi.'],
  ['sinau', 'estudar/aprender', 'verbo', 'Verbos-chave', '📚', 'Aku sinau basa Jawa.'],
  ['mulih', 'voltar (para casa)', 'verbo', 'Verbos-chave', '🚪', 'Aku mulih saka pasar.'],
  ['gawé', 'trabalhar/fazer', 'verbo', 'Verbos-chave', '💼', 'Bapakku gawé ing kutha.'],

  // A2.1 — partes do dia e "agora" (vocabulário extra da unidade jv-u3, além das 12 palavras das lições)
  ['jam', 'hora/relógio', 'substantivo', 'Tempo', '🕐', 'Jam pira saiki?'],
  ['saiki', 'agora', 'advérbio', 'Tempo', '⏱️', 'Aku sinau basa Jawa saiki.'],
  ['wayah', 'tempo/momento', 'substantivo', 'Tempo', '🕰️', 'Saiki wayah apik.'],
  ['ésuk', 'manhã', 'substantivo', 'Tempo', '🌄', 'Ésuk iki, aku tangi lan adus.'],
  ['wengi', 'noite', 'substantivo', 'Tempo', '🌃', 'Wengi iki, aku arep turu.'],
  ['awan', 'período da manhã ao fim da tarde (10h–15h)', 'substantivo', 'Tempo', '☀️', 'Ing wayah awan, aku mangan.'],

  // A2.2 — números maiores que vinte (unidade jv-u4, lição 1)
  ['telung puluh', 'trinta', 'numeral', 'Números', '🔢', 'Aku duwé telung puluh pelem.'],
  ['patang puluh', 'quarenta', 'numeral', 'Números', '🔢', 'Aku duwé patang puluh endhog.'],
  ['séket', 'cinquenta', 'numeral', 'Números', '🔢', 'Aku duwé séket gedhang.'],
  ['sewidak', 'sessenta', 'numeral', 'Números', '🔢', 'Aku duwé sewidak asu.'],
  ['satus', 'cem', 'numeral', 'Números', '💯', 'Aku duwé satus pelem.'],
  ['sèwu', 'mil', 'numeral', 'Números', '🔢', 'Aku duwé sèwu gedhang.'],

  // A2.2 — mercado (unidade jv-u4, lição 2)
  ['pasar', 'mercado', 'substantivo', 'Compras', '🛒', 'Pasar iki gedhé banget.'],
  ['tuku', 'comprar', 'verbo', 'Compras', '🛍️', 'Aku tuku gedhang ing pasar.'],
  ['rega', 'preço', 'substantivo', 'Compras', '🏷️', 'Regane larang banget.'],
  ['larang', 'caro', 'adjetivo', 'Compras', '💸', 'Pelem iki larang.'],
  ['murah', 'barato', 'adjetivo', 'Compras', '💲', 'Gedhang iki murah.'],
  ['dhuwit', 'dinheiro', 'substantivo', 'Compras', '💰', 'Aku ora duwé dhuwit.'],
];

export const VOCAB_JV = buildVocab('jv', ROWS);
