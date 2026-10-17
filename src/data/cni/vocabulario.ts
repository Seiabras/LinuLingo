import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do asháninka (cni), língua indígena viva da família Aruak (Arawak), ramo campa
 * (Glottolog asha1243: Arawakan › Southern Maipuran › Kampa-Amuesha › Pre-Andine Maipuran ›
 * Asha-Ashe-Kak-Matsi-Nan › Asha-Ashe-Kak › Ashe-Asha), falada na Selva Central do Peru (rios Ene,
 * Tambo, Apurímac, Perené, Bajo Urubamba) e também pelos Ashaninka do rio Amônia, no Acre. Parente
 * distante do terena (ter) e do baniwa (kpc), as outras línguas aruak do app.
 *
 * ORTOGRAFIA: o alfabeto oficial do Peru (Resolução Diretoral 0606-2008-ED e Resolução Ministerial
 * 303-2015-MINEDU), com 19 letras — a b ch e i j k m n ñ o p r s sh t ts ty y —, tal como aparece em
 * MINEDU (2021), “Apuntes sobre la escritura ashaninka”, pp. 13-17: m antes de b/p e n antes das
 * outras consoantes; i (não y) nas sequências ai, ei, oi, io, ia; vogais escritas SEM dobrar, “incluso
 * aquellas que se prolongan en la pronunciación”, e dobradas só quando é preciso distinguir sentidos
 * (aari ‘irmão, dito por mulher’ × ari ‘sim, afirmação’; piiri ‘morcego’ × piri ‘teu pai’).
 *   DÚVIDA REGISTRADA: Montoya e Ramos (2024, p. 93) dizem que as vogais longas “se escriben
 *   duplicando la vocal corta”. Segui a regra mais explícita e recente do próprio Ministério da
 *   Educação (2021), que é a que as escolas usam e que o vocabulário pedagógico aplica em todas as
 *   palavras (tyapa, não tyaapa; oitsare, não oitsaare).
 *
 * FONTES (cada palavra conferida na própria fonte, não em resumo de busca):
 *   - [MINEDU 2021] Ministerio de Educación del Perú (DEIB/DIGEIBIRA), “Ñantsipe ayoyetajeri —
 *     Vocabulario pedagógico ashaninka”, 1.ª ed., 2021 (PDF oficial em formacionenservicio.minedu.gob.pe),
 *     no alfabeto oficial. Fonte principal da GRAFIA. Parte III, “Palabras propias del ashaninka”
 *     (pp. 93-131): animais, aves, peixes, cores, alimentos da roça, estados de ânimo, parentesco,
 *     lugares; Partes I e IV: frases de exemplo com tradução (citadas abaixo pela entrada).
 *   - [Kindberg 1980] Lee Kindberg, “Diccionario asháninca”, Documento de Trabajo 19, Instituto
 *     Lingüístico de Verano, Yarinacocha, 1980 (reedição digital 2008, sil.org/resources/archives/29673,
 *     lido numa cópia do Web Archive). Para Montoya e Ramos (2024, p. 98) é “el único diccionario
 *     publicado de la lengua asháninka”. PDF escaneado: cada forma foi lida na página renderizada
 *     (páginas do livro citadas). Usa a grafia antiga do ILV (c/qu, v, vogais dobradas); converti
 *     letra por letra para o alfabeto oficial: c/qu → k, v → b, vogal dobrada → simples (regra de
 *     MINEDU 2021 acima). Ex.: pasonqui → pasonki, ¿pocajimpi? → ¿pokajimpi?, aviro → abiro,
 *     quitaiteri → kitaiteri, naco → nako. A conversão bate com as palavras que o MINEDU escreve por
 *     conta própria: Kindberg potsoti = MINEDU potsoti (urucum); maava → maba; opempe = opempe;
 *     jaoca → jaoka; noitsaare → noitsare (MINEDU: oitsare, a roupa dela).
 *   - [Montoya e Ramos 2024] Jaime Montoya e Licett Ramos, “Ashaninka”, em R. Zariquiey, P.
 *     Valenzuela, J. Peña e G. García (eds.), Enciclopedia de las lenguas indígenas u originarias del
 *     Perú en el Bicentenario, vol. 1, Ministerio de Cultura / PUCP, 2024, pp. 87-98 (fonemas,
 *     afixos de pessoa, frases de exemplo com glosa). Lido numa cópia do Web Archive do PDF de
 *     centroderecursos.cultura.pe.
 *   - [Cushimariano e Sebastián 2008] Rubén Cushimariano Romano e Richer C. Sebastián Q.,
 *     “Ñaantsipeta asháninkaki birakochaki — Diccionario asháninka-castellano (parcial)”, versão
 *     preliminar, 2008 (lengamer.org). Só para CONFERIR: a variedade principal desse dicionário usa j
 *     onde o Tambo e o Ene usam s (pajonki × pasonki ‘obrigado’; ajopi × asopi, como o próprio
 *     dicionário anota), então nenhuma palavra vem só dele.
 *
 * A2 (17/10/2026): as mesmas fontes, relidas nesta revisão. Do Kindberg vêm os verbos e as frases de
 * exemplo dos verbetes, e o APÊNDICE de Willard Kindberg, “Los afijos verbales del asháninca” (pp.
 * 461-466), base da gramática do A2 (páginas lidas na imagem). A conversão para o alfabeto oficial é a
 * mesma do A1 (c/qu → k, v → b, vogal dobrada → simples), com uma exceção declarada: quando o próprio
 * MINEDU (2021, p. 16) mantém a vogal dobrada para distinguir sentidos (iraaka ‘chorou’ × iraka
 * ‘maduro’), ela fica (niraaka). As palavras de bichos, roça, caça e pesca vêm da Parte III do MINEDU
 * (pp. 109-131), já no alfabeto oficial.
 *
 * Nenhuma palavra foi inventada. Quando MINEDU (2021) e Kindberg (1980) dão palavras DIFERENTES para
 * a mesma coisa (abacaxi: tibana × tsirianti; preto: kisari × potsitari), fica a do MINEDU, que é a
 * forma escolar atual. Partes do corpo vêm na forma “meu/minha” porque é assim que Kindberg as dá
 * (os nomes de parte do corpo são possuídos, ver gramatica.ts).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  // Kindberg 1980, p. 298: “buenos días: quitaiteri, quitaiterive”. MINEDU 2021 usa kitaiteri como
  // ‘dia’ (entrada pitsonkajero: “Pitsonkajero pantabere kitaiterikika.” — termine o seu trabalho neste dia)
  ['Kitaiteri', 'bom dia', 'expressão', 'Expressões', '🌅', 'Pitsonkajero pantabere kitaiterikika.'],
  // Kindberg 1980, p. 456, verbete “venir”: “¿haa venido? (una salutación): ¿pocajimpi?” e “nopocaque”
  // (eu vim). A resposta “Nopokake” à pergunta junta as duas formas do MESMO verbete.
  ['¿Pokajimpi?', 'você veio? (cumprimento)', 'expressão', 'Expressões', '👋', '¿Pokajimpi? Nopokake.'],
  ['Nopokake', 'eu vim', 'expressão', 'Expressões', '🚶', '¿Pokajimpi? Nopokake.'],
  // Kindberg 1980, p. 359: “gracias: pasonqui; dar gracias: nopasonquiteri”
  ['Pasonki', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Pasonki.'],
  // Kindberg 1980, p. 298: “bueno: comeetsa”; MINEDU 2021, entrada karamina: “Kametsa abetsikantyaro
  // karamina abanko.” (é bom cobrir a nossa casa com calamina)
  ['Kametsa', 'bom; bem', 'adjetivo', 'Expressões', '👍', 'Kametsa abetsikantyaro karamina abanko.'],
  // MINEDU 2021, entradas kantakoyetantsi e ñatsatantsi (“Tsame añatsacharo ñatsatantsi…”, vamos jogar);
  // Kindberg 1980, p. 18, verbete ayea: “Tsame ayea. — Vamos a comer.”
  ['Tsame', 'vamos', 'interjeição', 'Expressões', '🏃', 'Tsame ayea.'],
  // Kindberg 1980, p. 11, verbete amaje/amaye: “(modismo) vamos a dormir — Tsame amaye o amaje.
  // Vamos a dormir (despedida).”; também p. 336 (dormir)
  ['Tsame amaye', 'vamos dormir (despedida, à noite)', 'expressão', 'Expressões', '🌙', 'Tsame amaye.'],
  // Kindberg 1980, p. 109, verbete nojita (llamarse): “¿Jaoca pijitari? ¿Cómo se llama? — Nojita
  // Capeshi. Me llamo Capeshi.” (Kapeshi é também o quati — MINEDU 2021, “kapeshi coatí”)
  ['¿Jaoka pijitari?', 'como você se chama?', 'expressão', 'Expressões', '🏷️', '¿Jaoka pijitari? Nojita Kapeshi.'],
  ['Nojita', 'eu me chamo', 'expressão', 'Expressões', '🙋', 'Nojita Kapeshi.'],

  // ── Essenciais ──
  // Kindberg 1980, p. 437: “sí: iri, je”; Cushimariano e Sebastián 2008: “sí adv. jee”
  ['Je', 'sim', 'advérbio', 'Essenciais', '✅', 'Je.'],
  // Kindberg 1980, p. 395: “no: caari, eiro, te”; MINEDU 2021, entrada okantakotiri: “Te nokomityaro
  // namenakotero okantakotiri shiyakantsi.” (não tenho dificuldade em ler a legenda da imagem)
  ['Te', 'não', 'advérbio', 'Essenciais', '🚫', 'Te nokomityaro namenakotero okantakotiri shiyakantsi.'],
  // MINEDU 2021, p. 124 (Relaciones de parentesco): “naro yo”; Kindberg 1980, p. 458: “yo: naro, narori”
  ['Naro', 'eu', 'pronome', 'Essenciais', '🙋', 'Naro.'],
  // Kindberg 1980, p. 17: “aviro: tú, usted” (também p. 452); MINEDU 2021, entrada pankenatantsi: “Meka
  // abirori poimishitobero ora pankenatantsi jenokiniri.” (agora, você resolve o problema de cima)
  ['Abiro', 'você', 'pronome', 'Essenciais', '🫵', 'Meka abirori poimishitobero ora pankenatantsi jenokiniri.'],
  // Kindberg 1980, p. 337: “él: iriori, irinti”; MINEDU 2021, entrada oitsokatsiri: “Opempe irinti
  // oitsokatsiri.” (o tucano é ovíparo)
  ['Irinti', 'ele (é ele)', 'pronome', 'Essenciais', '👨', 'Opempe irinti oitsokatsiri.'],
  // Kindberg 1980, p. 337: “ella: iroori, irointi”; MINEDU 2021, entrada orijanitsapa (“… irointi
  // bairontsi …”, são substantivos)
  ['Irointi', 'ela (é ela)', 'pronome', 'Essenciais', '👩', 'Irointi.'],
  // MINEDU 2021, entrada inashiyetaro; Cushimariano e Sebastián 2008: “mucho adj., adv. osheki”
  ['Osheki', 'muito', 'advérbio', 'Essenciais', '➕', 'Apa osheki inashiyetaro pankirentsipe ariorika ipankitanake irobaneki.'],

  // ── Pessoas ──
  // Kindberg 1980, p. 16: “atiri: gente”; MINEDU 2021, entrada pijikoyeteri
  ['Atiri', 'pessoa; gente', 'substantivo', 'Pessoas', '🧑', 'Pijikoyeteri atiripe shiyakantakotainchari.'],
  // MINEDU 2021, p. 127: “shirampari hombre”
  ['Shirampari', 'homem', 'substantivo', 'Pessoas', '👨', 'Shirampari.'],
  // Kindberg 1980, p. 393: “mujer: tsinane”; Montoya e Ramos 2024, p. 97: “Ikotsitakenero Joa oka
  // kaniri tsinane. — Juan cocinó esta yuca para la mujer.”
  ['Tsinane', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ikotsitakenero Joa oka kaniri tsinane.'],
  // Kindberg 1980, p. 395: “niño: jananequi”; MINEDU 2021, entrada paperi: “Icheriakero jananeki
  // paperi.” (o menino rasgou o papel)
  ['Jananeki', 'criança; menino', 'substantivo', 'Pessoas', '🧒', 'Icheriakero jananeki paperi.'],
  // Kindberg 1980, p. 16: “ashaninca: campa, paisano”; MINEDU 2021, entrada antantsi: “Ashaninkaki
  // yantantaro osheki antantsi.” (a língua asháninka usa muitos verbos)
  ['Ashaninka', 'asháninka (o povo e a língua); patrício', 'substantivo', 'Pessoas', '🗣️', 'Ashaninkaki yantantaro osheki antantsi.'],

  // ── Família ── (MINEDU 2021, pp. 124-127, “Relaciones de parentesco”, salvo indicação)
  // frase: MINEDU 2021, entrada tyobirimento (“Mi papá compró una motosierra”)
  ['Apa', 'pai', 'substantivo', 'Família', '👨', 'Yamanantake apa aparoni tyobirimento.'],
  // também Kindberg 1980, p. 382: “madre: ina”
  ['Ina', 'mãe', 'substantivo', 'Família', '👩', 'Ina.'],
  // frase: MINEDU 2021, entrada intarori (“Regala a la abuela el pollito que reventó primero”)
  ['Isha', 'avó', 'substantivo', 'Família', '👵', 'Pimpero isha intarori itasakotapake tyopiki.'],
  // MINEDU: “charine abuelo (dicho por el hombre)”; Kindberg 1980, p. 275: “abuelo, de un hombre,
  // término vocativo: chaine”
  ['Charine', 'avô (dito por homem)', 'substantivo', 'Família', '👴', 'Charine.'],
  // MINEDU 2021, entrada koakotantsipana: “Notomi, pisankenate aparoni koakotantsipana.” (filho,
  // escreva um pedido); “pitomi” (teu filho) na entrada sankenarentsipana
  ['Notomi', 'filho (no-: meu)', 'substantivo', 'Família', '👦', 'Notomi, pisankenate aparoni koakotantsipana.'],
  // Kindberg 1980, p. 109 (verbete nojitamatsitaquero): “noshinto — a mi hija”
  ['Noshinto', 'filha (no-: minha)', 'substantivo', 'Família', '👧', 'Noshinto.'],
  // MINEDU: “iye hermano (dicho por el hombre)”; frase: entrada otsipatirori (“Mi cuarto hermano ya llegó”)
  ['Iye', 'irmão (dito por homem)', 'substantivo', 'Família', '👦', 'Aretapaja iye otsipatirori.'],
  // MINEDU: “tsio, choki hermana (dicho por el hombre)”
  ['Choki', 'irmã (dito por homem)', 'substantivo', 'Família', '👧', 'Choki.'],

  // ── Corpo ── (Kindberg 1980; o dicionário dá as partes do corpo já com “meu/minha”, no-/n-)
  // p. 299: “cabeza: iitontsi; mi cabeza: noito”; p. 106: “noito: mi cabeza”
  ['Noito', 'cabeça (no-: minha)', 'substantivo', 'Corpo', '🙆', 'Noito.'],
  // p. 5 (introdução): “naco (n- -aco) significa ‘mi mano’”; p. 384: “mano (mi): naco”
  ['Nako', 'mão (n-: minha)', 'substantivo', 'Corpo', '✋', 'Nako.'],
  // p. 397: “ojo: oqui; mi ojo: noqui”; frase: p. 95, verbete nocaratanaje: “Caratacotaji noquiqui,
  // nocaratanaje. — Están curados mis ojos, estoy sano.”
  ['Noki', 'olho (no-: meu)', 'substantivo', 'Corpo', '👁️', 'Karatakotaji nokiki, nokaratanaje.'],
  // p. 296: “boca: opaanteti; mi boca: novante”
  ['Nobante', 'boca (no-: minha)', 'substantivo', 'Corpo', '👄', 'Nobante.'],
  // p. 106: “noiti: mi pie, pisada”; p. 412: “pie: noiti”; frase: p. 108, verbete nojempare:
  // “Nojempataque noitiqui. — Tengo un pie entumecido.”
  ['Noiti', 'pé (no-: meu)', 'substantivo', 'Corpo', '🦶', 'Nojempatake noitiki.'],
  // p. 106: “noishi: mi pelo, mi cabello”; p. 298: “cabello (mi): noishi”
  ['Noishi', 'cabelo (no-: meu)', 'substantivo', 'Corpo', '💇', 'Noishi.'],
  // p. 106: “noitsaare: mi cushma, mi ropa” (MINEDU 2021, entrada pintsereakotero, escreve “oitsare”,
  // a roupa dela: daí a vogal simples)
  ['Noitsare', 'cushma, roupa (no-: minha)', 'substantivo', 'Corpo', '👘', 'Noitsare.'],

  // ── Números ── (MINEDU 2021, Área de Matemática; Kindberg 1980, pp. 336, 451, 453)
  // MINEDU, entrada anakarojaniki: “Pimpotsotantyaro kiteriri aparoni anakarojaniki.” (pinte de
  // amarelo um retangulozinho); Kindberg p. 453: “uno: aparo”
  ['Aparoni', 'um', 'numeral', 'Números', '1️⃣', 'Pimpotsotantyaro kiteriri aparoni anakarojaniki.'],
  // MINEDU, entrada kiribiro: “Pamakena apite kiribiro.” (dê-me dois livros); Kindberg p. 336: “dos: apite”
  ['Apite', 'dois', 'numeral', 'Números', '2️⃣', 'Pamakena apite kiribiro.'],
  // MINEDU, entrada sankenarentsipana: “Pamanante maba sankenarentsipana irashi pitomi.” (compre três
  // cadernos para o seu filho); Kindberg p. 451: “tres: maava”
  ['Maba', 'três', 'numeral', 'Números', '3️⃣', 'Pamanante maba sankenarentsipana irashi pitomi.'],

  // ── Natureza e bichos ── (MINEDU 2021, Parte III, salvo indicação)
  // Kindberg 1980, p. 96, verbete nocatajero: “Noncaje nija. — Voy a traer agua (en calabaza).”;
  // MINEDU 2021, entrada kari añatsine (“kemperi nija, otishi” — por exemplo o rio, o morro)
  ['Nija', 'água; rio', 'substantivo', 'Natureza e bichos', '💧', 'Nonkaje nija.'],
  // Kindberg 1980, p. 381: “lluvia: incani”; Cushimariano e Sebastián 2008: “lluvia f. inkani”
  ['Inkani', 'chuva', 'substantivo', 'Natureza e bichos', '🌧️', 'Inkani.'],
  // MINEDU 2021, entradas sotitirori e tsontirori (inchato, árvore); Kindberg 1980, p. 107, verbete
  // nojaraaquero: “Ojaraijaraiti inchato. — El árbol allá está derribado.”
  ['Inchato', 'árvore', 'substantivo', 'Natureza e bichos', '🌳', 'Ojaraijaraiti inchato.'],
  // Kindberg 1980, p. 412: “piedra: mapi”; Cushimariano e Sebastián 2008: “piedra f. mapi”
  ['Mapi', 'pedra', 'substantivo', 'Natureza e bichos', '🪨', 'Mapi.'],
  // MINEDU 2021, p. 130: “otishi cerro”; Kindberg 1980, p. 107, verbete nojajencataque: “Ijajencataque
  // otishiqui icajemi. — Hace eco por los cerros cuando llama.”
  ['Otishi', 'morro, serra', 'substantivo', 'Natureza e bichos', '⛰️', 'Ijajenkatake otishiki ikajemi.'],
  // MINEDU 2021, entrada orijanitsapa: “antami” = ‘bosque’; Cushimariano e Sebastián 2008: “monte antami”
  ['Antami', 'mata, floresta', 'substantivo', 'Natureza e bichos', '🌲', 'Antami.'],
  // MINEDU 2021, p. 114: “maniro venado”; frase: entrada inchashinari (“El venado es un animal herbívoro”)
  ['Maniro', 'veado', 'substantivo', 'Natureza e bichos', '🦌', 'Maniro irite inchashinari.'],
  // Kindberg 1980, p. 410: “perro: otsiti”; frase: p. 105, verbete noisotajiro: “Noisoteri otsiti. —
  // Aseguro el perro.”
  ['Otsiti', 'cachorro', 'substantivo', 'Natureza e bichos', '🐕', 'Noisoteri otsiti.'],
  // MINEDU 2021, p. 114: “maniti tigre” (no espanhol da Amazônia peruana, “tigre” é a onça-pintada)
  ['Maniti', 'onça', 'substantivo', 'Natureza e bichos', '🐆', 'Maniti.'],
  // MINEDU 2021, p. 114: “koshiri mono”
  ['Koshiri', 'macaco', 'substantivo', 'Natureza e bichos', '🐒', 'Koshiri.'],
  // MINEDU 2021, p. 111: “tyapa gallina”
  ['Tyapa', 'galinha', 'substantivo', 'Natureza e bichos', '🐔', 'Tyapa.'],
  // MINEDU 2021, p. 110: “opempe tucán”; Kindberg 1980, p. 452: “tucán de pecho amarillo: opempe”
  ['Opempe', 'tucano', 'substantivo', 'Natureza e bichos', '🐦', 'Opempe irinti oitsokatsiri.'],
  // MINEDU 2021, p. 119: “shima boquichico” (um peixe de rio, o curimbatá); Kindberg 1980, p. 410:
  // “pescado: shima”. Frase: MINEDU, entrada tsapaye (“Ensarta los peces por decena…”)
  ['Shima', 'peixe', 'substantivo', 'Natureza e bichos', '🐟', 'Pishintsaitri shimape inkarate aparoni tsapaye pipimantantyariri.'],
  // MINEDU 2021, p. 110: “chorito loro”
  ['Chorito', 'papagaio', 'substantivo', 'Natureza e bichos', '🦜', 'Chorito.'],

  // ── Roça e casa ──
  // MINEDU 2021, entrada orijanitsapa (“obantsi” = ‘chacra’, roça); Cushimariano e Sebastián 2008:
  // “chacra f. obantsi”. Frase: entrada oberakota (“Es muy grande la superficie de la chacra de mi papá”)
  ['Obantsi', 'roça', 'substantivo', 'Roça e casa', '🌱', 'Antaro oberakota irobane apa.'],
  // MINEDU 2021, p. 121: “kaniri yuca”; Montoya e Ramos 2024, p. 97 (frase)
  ['Kaniri', 'mandioca', 'substantivo', 'Roça e casa', '🥔', 'Ikotsitakenero Joa oka kaniri tsinane.'],
  // MINEDU 2021, p. 121: “parenti plátano”; Kindberg 1980, p. 107, verbete noivotaca: “Oivotaca
  // parenti. — Se inclinó el plátano (cargado de fruta).”
  ['Parenti', 'banana', 'substantivo', 'Roça e casa', '🍌', 'Oibotaka parenti.'],
  // MINEDU 2021, p. 121: “tibana piña” (Kindberg 1980, p. 413, dá outra palavra, tsirianti; fica a do MINEDU)
  ['Tibana', 'abacaxi', 'substantivo', 'Roça e casa', '🍍', 'Tibana.'],
  // MINEDU 2021, p. 122: “kemito cacao”; Kindberg 1980, p. 299: “cacao: quemitoqui”
  ['Kemito', 'cacau', 'substantivo', 'Roça e casa', '🍫', 'Kemito.'],
  // Kindberg 1980, p. 6 (introdução): “pancotsiqui significa ‘en la casa’ o ‘hacia la casa’”; p. 108:
  // “pancotsijaniqui” (casa chiquita). “Minha casa” é nobanko: p. 107, verbete nojate: “Nojate
  // novancoqui. — Voy a mi casa.”; MINEDU 2021 tem pibanko (tua casa), ibanko (casa dele), abanko
  // (nossa casa)
  ['Pankotsi', 'casa', 'substantivo', 'Roça e casa', '🏠', 'Nojate nobankoki.'],
  // MINEDU 2021, p. 15 (exemplo da regra das vogais: “piarentsi”); Kindberg 1980, p. 385: “masato:
  // pearentsi”. A bebida fermentada de mandioca das festas
  ['Piarentsi', 'masato (bebida de mandioca)', 'substantivo', 'Roça e casa', '🥣', 'Piarentsi.'],
  // MINEDU 2021, entrada kiribiro: “kiribiro b. libro” — empréstimo do espanhol libro
  ['Kiribiro', 'livro', 'substantivo', 'Roça e casa', '📕', 'Pamakena apite kiribiro.'],
  // MINEDU 2021, p. 17 (exemplos de empréstimo do espanhol): “sapato ‘zapato’”
  ['Sapato', 'sapato', 'substantivo', 'Roça e casa', '👞', 'Sapato.'],

  // ── Cores e sentimentos ── (MINEDU 2021, p. 116 “Colores” e p. 123 “Estados de ánimo”)
  ['Kityonkari', 'vermelho', 'adjetivo', 'Cores e sentimentos', '🔴', 'Kityonkari.'],
  ['Kenashiri', 'verde', 'adjetivo', 'Cores e sentimentos', '🟢', 'Kenashiri.'],
  // frase: MINEDU 2021, entrada anakarojaniki
  ['Kiteriri', 'amarelo', 'adjetivo', 'Cores e sentimentos', '🟡', 'Pimpotsotantyaro kiteriri aparoni anakarojaniki.'],
  ['Kisari', 'preto', 'adjetivo', 'Cores e sentimentos', '⚫', 'Kisari.'],
  ['Kimoshire', 'alegre', 'adjetivo', 'Cores e sentimentos', '😄', 'Kimoshire.'],
  ['Bashire', 'triste', 'adjetivo', 'Cores e sentimentos', '😢', 'Bashire.'],

  // ════════ A2.1 — verbos do dia, o tempo, as perguntas e a escola ════════
  // Verbos: Kindberg dá cada verbo na 1ª pessoa (n-/no-) e glosa com o infinitivo do espanhol (p. 5,
  // “Los verbos se dan, por lo regular, con el prefijo n- o no-… Las glosas para todas estas formas
  // emplean el infinitivo del castellano”). O vocabulário segue o mesmo costume: “nojate” = ir.
  // ── Verbos ──
  // Kindberg 1980, p. 107, verbete “nojate (ja+I): ir — Nojate novancoqui. Voy a mi casa.”; p. 372 (ir:
  // nojate)
  ['Nojate', 'ir', 'verbo', 'Verbos', '➡️', 'Nojate nobankoki.'],
  // Kindberg 1980, p. 461 (apêndice de Willard Kindberg: “ipoqui — viene”, “impoque — vendrá”) e p. 463
  // (“Ipocapiniti. — Siempre viene.”). Aqui na 3ª pessoa, a forma que o apêndice usa para o futuro.
  ['Ipoki', 'vir', 'verbo', 'Verbos', '🔜', 'Ipokapiniti.'],
  // Kindberg 1980, p. 112, verbete “nomai (ma,-,I): dormir — Nomaaque inaqui. Dormí en (la casa de)
  // mamá.”; p. 336 (dormir: nomai)
  ['Nomai', 'dormir', 'verbo', 'Verbos', '😴', 'Nomake inaki.'],
  // Kindberg 1980, p. 450 (trabajar: nantaveeti); p. 121, verbete noneaperota: “Noneaperota nantaveeti
  // apaniro. — Estoy orgulloso porque puedo trabajar solo.” O MINEDU 2021 escreve a mesma raiz com e
  // simples: “antabetantyari” (para trabalhar, entrada monkarapontsoripekipe), “pantabere” (teu trabalho)
  ['Nantabeti', 'trabalhar', 'verbo', 'Verbos', '🛠️', 'Noneaperota nantabeti apaniro.'],
  // Kindberg 1980, p. 96, verbete “nocataque (-ca+I) bañar / nocatea bañarse”; p. 293 (bañarse: nocatea)
  ['Nokatea', 'tomar banho', 'verbo', 'Verbos', '🛁', 'Nokatea.'],
  // Kindberg 1980, p. 381 (llorar: niraaca); p. 112, verbete nomajerete: “Nomajerete niraaca oshequi. —
  // Estoy calmada después de llorar mucho.” A vogal dobrada FICA: MINEDU 2021, p. 16, dá “iraaka ‘Él
  // lloró’” × “iraka ‘maduro’” como exemplo de vogal dobrada que muda o sentido.
  ['Niraaka', 'chorar', 'verbo', 'Verbos', '😭', 'Nomajerete niraaka osheki.'],
  // Kindberg 1980, p. 122, verbete “noneri (ne,-,I): ver — Noneapaaqueri shintori. Cuando llegué ví el
  // sajino.” (logo acima, “noneeri: visitar”, com vogal longa — por isso aqui fica um e só)
  ['Noneri', 'ver', 'verbo', 'Verbos', '👀', 'Noneapakeri shintori.'],
  // MINEDU 2021, entrada okatsinkaiti (p. 70): “Nokoi nojate okatsinkaiti…” (Quiero ir a la zona fría…);
  // Kindberg 1980, p. 422 (querer: nocoiro)
  ['Nokoi', 'querer', 'verbo', 'Verbos', '💭', 'Nokoi nojate okatsinkaiti.'],
  // Kindberg 1980, p. 121, verbete “noneamataro (neama+A): gustar, tener gusto en algo — Noneamataro
  // noari, coriqui. Me gusta la comida, el dinero.”
  ['Noneamataro', 'gostar', 'verbo', 'Verbos', '❤️', 'Noneamataro noari, koriki.'],

  // ── Tempo e perguntas ──
  // Kindberg 1980, p. 278 (ahorita: meeca); MINEDU 2021, entradas pankenatantsi (p. 53: “Meka abirori
  // poimishitobero…”, Ahora, tú resuelve…) e namenaperotero (p. 67: “Meka namenaperotero…”, Hoy observo…)
  ['Meka', 'agora', 'advérbio', 'Tempo e perguntas', '⏱️', 'Meka abirori poimishitobero ora pankenatantsi jenokiniri.'],
  // Kindberg 1980, p. 292: “ayer: oshaite” (o MINEDU 2021, p. 67, traz “Shaiteji okantakena choki…”, El día
  // de ayer mi hermana me recomendó…, com outra forma; fica a do dicionário)
  ['Oshaite', 'ontem', 'advérbio', 'Tempo e perguntas', '⏪', 'Oshaite.'],
  // MINEDU 2021, p. 68, entradas nonkobakoyetantero (“Osaitekera nojate noñeri sheripiyari…”, Mañana iré
  // a visitar al curandero…) e noinijantero (“Osaitekera noinijantero…”, Mañana me toca dramatizar…);
  // Kindberg 1980, p. 384 (mañana: onquita, osaitequero)
  ['Osaitekera', 'amanhã', 'advérbio', 'Tempo e perguntas', '⏩', 'Osaitekera nojate noñeri sheripiyari.'],
  // Kindberg 1980, p. 395 (no: caari, eiro, te); p. 462, apêndice: “Oparii incani caari nopocanta. —
  // Cayó lluvia; por eso no vine.”; p. 372: “invisible: caari ineti”
  ['Kaari', 'não (kaari)', 'advérbio', 'Tempo e perguntas', '⛔', 'Opari inkani kaari nopokanta.'],
  // Kindberg 1980, p. 422: “quién: janica”
  ['Janika', 'quem', 'pronome', 'Tempo e perguntas', '🕵️', '¿Janika?'],
  // Kindberg 1980, p. 462: “¿paita ipocashitiri? — ¿Por qué vino?”; p. 466: “¿Paita piquisantari? — ¿Por
  // qué estás enojado?”; MINEDU 2021, p. 67 (“paita okantakotiri ñanarentsi”, lo que dice el texto)
  ['Paita', 'por quê; o quê', 'pronome', 'Tempo e perguntas', '❓', '¿Paita ipokashitiri?'],

  // ── Pessoas e escola ──
  // Kindberg 1980, p. 281: “amigo: ayompari; mi amigo: niompari”
  ['Ayompari', 'amigo', 'substantivo', 'Pessoas', '🤝', 'Ayompari.'],
  // MINEDU 2021, p. 17 (palavras compostas se escrevem juntas: “yotantsipanko”) e entrada ñatsaberontsi
  // (p. 29): “Akenkitsatakayeri jananeki okantakota ñatsaberontsi timatsiri yotantsipankoki.” (Conversemos
  // con los niños sobre los juguetes que hay en nuestra escuela)
  ['Yotantsipanko', 'escola', 'substantivo', 'Escola', '🏫', 'Akenkitsatakayeri jananeki okantakota ñatsaberontsi timatsiri yotantsipankoki.'],
  // MINEDU 2021, entrada sankenarentsipana (p. 37): “cuaderno”
  ['Sankenarentsipana', 'caderno', 'substantivo', 'Escola', '📓', 'Pamanante maba sankenarentsipana irashi pitomi.'],
  // MINEDU 2021, p. 17 (empréstimo: “paperi ‘papel’”) e entrada paperi (p. 32)
  ['Paperi', 'papel', 'substantivo', 'Escola', '📄', 'Icheriakero jananeki paperi.'],
  // MINEDU 2021, entrada perota (p. 54): “Pishiyakantero jaoka opariyapake perota.” (Dibuja donde cayó
  // la pelota)
  ['Perota', 'bola', 'substantivo', 'Escola', '⚽', 'Pishiyakantero jaoka opariyapake perota.'],
  // MINEDU 2021, p. 17 (empréstimo: “kotsiro ‘cuchillo’”)
  ['Kotsiro', 'faca', 'substantivo', 'Roça e casa', '🔪', 'Kotsiro.'],

  // ════════ A2.2 — a mata: caçar, pescar, bichos, roça e o plural ════════
  // Kindberg 1980, p. 112, verbete “nomanaveeti (manave+I): cazar con flecha o escopeta — Nojate
  // nomanaveete. Voy a cazar.”
  ['Nomanabete', 'caçar', 'verbo', 'Verbos', '🎯', 'Nojate nomanabete.'],
  // MINEDU 2021, p. 114 (kemari: sachavaca, a anta); Kindberg 1980, p. 118, verbete nomotoncaqueri:
  // “Nomotoncaqueri quemari te naaveriji. — Tiro (la flecha) a la sachavaca pero no la agarro…”
  ['Kemari', 'anta', 'substantivo', 'Natureza e bichos', '🐾', 'Nomotonkakeri kemari te naberiji.'],
  // Kindberg 1980, p. 122 (“Noneapaaqueri shintori. Cuando llegué ví el sajino.”); MINEDU 2021, p. 71,
  // entrada sharakamashi (“kemari jeri shintori”, una sachavaca y un sajino). O sajino é o cateto (o
  // MINEDU, p. 113, dá ainda “kitairiki: sajino”).
  ['Shintori', 'cateto', 'substantivo', 'Natureza e bichos', '🐗', 'Noneapakeri shintori.'],
  // MINEDU 2021, p. 112 (samani: majás, a paca); Kindberg 1980, p. 383 (majás: samani)
  ['Samani', 'paca', 'substantivo', 'Natureza e bichos', '🐹', 'Samani.'],
  // MINEDU 2021, p. 112 (etini: armadillo)
  ['Etini', 'tatu', 'substantivo', 'Natureza e bichos', '🦔', 'Etini.'],
  // MINEDU 2021, p. 114 (konoya: tortuga)
  ['Konoya', 'tartaruga', 'substantivo', 'Natureza e bichos', '🐢', 'Konoya.'],
  // MINEDU 2021, p. 113 (maranki: culebra); Kindberg 1980, p. 322 (maranque: especie de culebra)
  ['Maranki', 'cobra', 'substantivo', 'Natureza e bichos', '🐍', 'Maranki.'],
  // MINEDU 2021, p. 113 (karaba: rana)
  ['Karaba', 'rã', 'substantivo', 'Natureza e bichos', '🐸', 'Karaba.'],
  // MINEDU 2021, entrada pashitakoteri (p. 32): “Pashitakoteri tsimeripe shiyakantakotachari paperiki.”
  // (Encierra las aves dibujadas en el papel); Kindberg 1980, p. 108, verbete nojeviteri: “Nojeviteri
  // tsimeeri. — Tiro los pájaros (con mi honda).”
  ['Tsimeri', 'pássaro', 'substantivo', 'Natureza e bichos', '🐤', 'Pashitakoteri tsimeripe shiyakantakotachari paperiki.'],
  // MINEDU 2021, p. 110 (pakitsa: gavilán); Kindberg 1980, p. 277 (águila: paquitsa)
  ['Pakitsa', 'gavião', 'substantivo', 'Natureza e bichos', '🦅', 'Pakitsa.'],
  // ── Caça e pesca ── (MINEDU 2021, p. 109, “Trampas para pescar”)
  ['Chakopi', 'flecha', 'substantivo', 'Caça e pesca', '🏹', 'Chakopi.'],
  ['Akacharontsi', 'anzol', 'substantivo', 'Caça e pesca', '🎣', 'Akacharontsi.'],
  // MINEDU 2021, entradas konitirori (p. 47: “Pimpotsotero pitotsi konitirori oisotakota.”, Pinta la canoa
  // que está amarrada en el quinto lugar) e tsatirori (p. 58)
  ['Pitotsi', 'canoa', 'substantivo', 'Caça e pesca', '🛶', 'Pimpotsotero pitotsi konitirori oisotakota.'],
  // Kindberg 1980, p. 118, verbete nomorequero: “Nomorequiro tsitsi. — Encendí la leña (y ardió
  // brillantemente) llameó.”; MINEDU 2021, entrada pobametsatero (p. 36): “Pobametsatero tsitsipe.”
  // (Ordena las leñas)
  ['Tsitsi', 'lenha', 'substantivo', 'Caça e pesca', '🪵', 'Nomorekiro tsitsi.'],
  // MINEDU 2021, p. 117 (kantiri: canasta) e entrada shonkaro (p. 57): “Pashitakotantyaro shonkaro
  // kantiripe.” (Encierra con un círculo las canastas); Kindberg 1980, p. 87 (“noantire: mi canasta
  // grande — véase cantiri”)
  ['Kantiri', 'cesto', 'substantivo', 'Caça e pesca', '🧺', 'Pashitakotantyaro shonkaro kantiripe.'],
  // ── Roça ── (MINEDU 2021, pp. 121-122, “Alimentos de la chacra”)
  ['Kemi', 'abóbora', 'substantivo', 'Roça e casa', '🎃', 'Kemi.'],
  ['Mapocha', 'mamão', 'substantivo', 'Roça e casa', '🥭', 'Mapocha.'],
  ['Akapa', 'abacate', 'substantivo', 'Roça e casa', '🥑', 'Akapa.'],
  // ── Sentimentos ── (MINEDU 2021, p. 123, “Estados de ánimo”: kisaka molesto, tsaroba asustado)
  ['Kisaka', 'zangado', 'adjetivo', 'Cores e sentimentos', '😠', 'Kisaka.'],
  // frase: MINEDU 2021, entrada noñabentakoperotero (p. 69): “Osheki notsaroi…” (Me da mucho temor…),
  // da mesma raiz
  ['Tsaroba', 'com medo', 'adjetivo', 'Cores e sentimentos', '😨', 'Tsaroba.'],
  // MINEDU 2021, entrada monkaratantsi (p. 66): “Iñanatakero aparope monkaratantsi pinkatsaribentirori
  // nonampi amonkaratantyaori.” (El jefe de mi comunidad leyó cada deber que tenemos que cumplir); também
  // pp. 46 e 68 (“nonampi”, mi comunidad)
  ['Nonampi', 'comunidade (no-: minha)', 'substantivo', 'Pessoas', '🏘️', 'Iñanatakero aparope monkaratantsi pinkatsaribentirori nonampi amonkaratantyaori.'],
];

export const VOCAB_CNI = buildVocab('cni', ROWS);
