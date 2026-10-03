import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do terena (ter), língua indígena viva da família Aruak (Arawak), ramo maipure
 * meridional / aruak boliviano (Glottolog: Arawakan › Southern Maipuran › Bolivian Arawakan ›
 * Terena-Kinikinao-Chane, tere1279), falada sobretudo em Mato Grosso do Sul. Parente distante do
 * baniwa (kpc), a outra língua aruak do app, que fica num ramo bem diferente (Japurá-Colômbia), lá no
 * noroeste do Amazonas.
 *
 * VARIEDADE E ORTOGRAFIA: o terena da Terra Indígena Cachoeirinha (Miranda, MS), na ortografia das
 * escolas terena (proposta por Ekdahl e Butler, do SIL, nos anos 1960, revista em 2007) tal como
 * aparece em Denise Silva (2013): k (não c/qu), h (não hh), sem acentos, apóstrofo para a oclusiva
 * glotal, e as vogais iguais seguidas escritas uma vez só.
 *
 * FONTES (cada palavra conferida na própria fonte, não em resumo de busca):
 *   - Denise Silva, “Estudo lexicográfico da língua terena: proposta de um dicionário bilíngue
 *     terena-português”, tese de doutorado, UNESP Araraquara, 2013 (repositorio.unesp.br, hdl
 *     11449/102358) — fonte principal. Quase todas as palavras e frases de exemplo abaixo são
 *     verbetes e abonações do dicionário do apêndice (pp. 140-270, abonações feitas por falantes de
 *     Cachoeirinha), conferidas página a página no PDF renderizado (a extração de texto embaralha as
 *     colunas). A gramática (pronomes, nasalização da 1ª pessoa, 2ª pessoa por mudança de vogal,
 *     posse alienável com -na, ordem VOS, futuro -mo) vem da seção 3 da mesma tese (pp. 59-93),
 *     que resume Butler e Ekdahl (1979), Rosa (2010) e Nascimento (2012).
 *   - Nancy E. Butler e Elizabeth M. Ekdahl, “Aprenda Terêna”, vol. 1, SIL, 1979
 *     (archive.org/details/rosettaproject_ter_book-2), conferido nas páginas digitalizadas:
 *     cumprimentos e despedidas da Lição 2 (Na quéyeeye? / Ápeepo. / Únati. / Quiyacáxe. / Po'i
 *     cáxe. / Ihárooti. / Hhingá'), o nome (Lição 3: Cuti quéeha? / Davi ngóeha. / Cuti cóeha ne…?),
 *     os numerais (Lição 8: Póehaaxo, Pí'aaxo, Mopó'aaxo, Coaturú' cõe… Yehi' cõe) e o agradecimento
 *     (31.4: Áinapo yácoe). O livro usa uma grafia pedagógica antiga (c/qu, hh, acentos, vogais
 *     dobradas); o próprio livro (1.2) explica que a grafia normal escreve só uma das vogais iguais,
 *     e Silva (2013) escreve sem acento e com k. Por isso essas formas foram passadas para a grafia
 *     de Silva: c/qu → k, hh → h, sem acento, vogal dupla → simples. A conversão bate com as palavras
 *     que Silva atesta por conta própria: Ihárooti → iharoti (Silva: iharotike, amanhã), Póehaaxo →
 *     poehaxo (Silva: “Poehaxo ra emo'um”), Quiyacáxe → kiyakaxe (Silva: kiyakaxeke), cóeha → koeha
 *     (Silva: “Peturu koeha ayo ne Maria”), Hhingá' → hinga (verbete de Silva).
 *   - pt.wikipedia.org/wiki/Língua_terena — usada para CONFERIR as expressões do dia a dia (tabela
 *     tirada de Butler e Ekdahl, já com k: “Na kéyeeye?”, “Ápeepo”, “Aínapo yákoe”, “Kuti keéha?”,
 *     “Ndâvi ngoéha”), os pronomes (ûndi, îti, ûti), kuti 'quem?', o endônimo “têrenoe”, a
 *     nasalização (ovoku → ovongu, minha casa; vo'uti → nvo'u, minha mão) e os dias da semana.
 *
 * As frases de exemplo são citações de Silva (2013) ou de Butler e Ekdahl (1979), passadas para a
 * grafia de Silva; nenhuma palavra foi inventada. NÃO encontrei nas fontes um “oi/olá” fixo: o
 * terena cumprimenta perguntando “Na keyeye?” (como vai?), e é isso que o curso usa como saudação.
 *
 * O terena não tem gênero gramatical (Butler e Ekdahl 1979, 3.1; Silva 2013, 3.2.2.3): o sexo só
 * aparece por palavras diferentes (hoyeno homem / seno mulher). Por isso `gender` fica de fora.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ── (Butler e Ekdahl 1979, Lições 2, 3 e 31.4; hinga e unati também em Silva 2013)
  ['Na keyeye?', 'como vai?', 'expressão', 'Expressões', '👋', 'Na keyeye? Apepo.'],
  ['Apepo', 'vou bem', 'expressão', 'Expressões', '🙂', 'Na keyeye? Apepo.'],
  // Silva: “unati adj. bom”; Butler e Ekdahl: “Únati. — Tudo bem? / Tudo bem.”
  ['Unati', 'bom; tudo bem', 'adjetivo', 'Expressões', '👍', 'Unatine ne nakaku.'],
  // Butler e Ekdahl 31.4.2: “Áinapo yácoe ya ra náranga” (obrigado pela laranja); naranga em Silva
  ['Ainapo yakoe', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ainapo yakoe ya ra naranga.'],
  // Butler e Ekdahl, Lição 2, Diálogo V: “Mbihópone. — Ihárooti.” (estou voltando. — até amanhã)
  ['Iharoti', 'até amanhã', 'expressão', 'Expressões', '🌙', 'Mbihopone. Iharoti.'],
  // Silva p. 160: “Hinga pihapane uti.” (vamos embora); Butler e Ekdahl: “Hhingá'” (vamos / até logo)
  ['Hinga', 'vamos', 'interjeição', 'Expressões', '🚶', 'Hinga pihapane uti.'],
  // Butler e Ekdahl, Lição 2: despedida usada de manhã (“até à tarde”)
  ['Kiyakaxe', 'até a tarde', 'expressão', 'Expressões', '🌇', 'Kiyakaxe.'],
  // Butler e Ekdahl, Lição 2: po'i 'outro' + kaxe 'dia'
  ["Po'i kaxe", 'até outro dia', 'expressão', 'Expressões', '📅', "Po'i kaxe."],
  // Butler e Ekdahl, Lição 3: “Cuti quéeha? — Davi ngóeha.”
  ['Kuti keha?', 'como você se chama?', 'expressão', 'Expressões', '🏷️', 'Kuti keha? Davi ngoeha.'],
  ['Ngoeha', 'eu me chamo', 'expressão', 'Expressões', '🙋', 'Davi ngoeha.'],

  // ── Essenciais ── (Silva 2013: eem, ako; kuti em Butler e Ekdahl e em pt.wikipedia, Rosa e Souza 2014)
  // Butler e Ekdahl, Lição 2, Diálogo IV: “Eém, Miranda-que yónom.” (sim, vou a Miranda)
  ['Eem', 'sim', 'advérbio', 'Essenciais', '✅', 'Eem, Mirandake yonom.'],
  ['Ako', 'não', 'advérbio', 'Essenciais', '🚫', 'Ako mbiha mirandake.'],
  ['Kuti', 'quem?, o quê?', 'pronome', 'Essenciais', '❓', 'Kuti keha?'],

  // ── Pessoas ── (pronomes: Silva 2013, pp. 67-68; Butler e Ekdahl, Lição 3; o resto, verbetes de Silva)
  ['Undi', 'eu', 'pronome', 'Pessoas', '🙋', "Ko'ituketimo undi kavaneke."],
  // Butler e Ekdahl, Lição 3: “Quene íti, cuti quéeha?” (e você, como se chama?)
  ['Iti', 'você', 'pronome', 'Pessoas', '🫵', 'Kene iti, kuti keha?'],
  ['Uti', 'nós', 'pronome', 'Pessoas', '🙌', "Ko'ituketimo uti kavaneke."],
  ['Itinoe', 'vocês', 'pronome', 'Pessoas', '👥', 'Itinoe piho iharotike.'],
  ['Xane', 'pessoa', 'substantivo', 'Pessoas', '🧑', "Enepora xane kaha'ati ko'itukeyeahiko."],
  ['Hoyeno', 'homem', 'substantivo', 'Pessoas', '👨', "Uhe'ekoti ne hoyeno."],
  ['Seno', 'mulher', 'substantivo', 'Pessoas', '👩', "Hana'iti hima ra seno."],
  ['Kalivono', 'criança', 'substantivo', 'Pessoas', '🧒', 'Aruxuko tamuku ra kalivono.'],
  ['Arunoe', 'moça', 'substantivo', 'Pessoas', '👧', 'Exoketi ra arunoe.'],
  // endônimo: “têrenoe” (pt.wikipedia); Silva p. 88: “Meku-ne ihike-x-o-vo terenoe” (ela está
  // estudando terena faz tempo)
  ['Terenoe', 'terena (o povo e a língua)', 'substantivo', 'Pessoas', '🗣️', 'Mekune ihikexovo terenoe.'],
  ['Kopenoti', 'indígena', 'substantivo', 'Pessoas', '🪶', 'Kopenoti.'],
  ['Purutuya', 'não indígena', 'substantivo', 'Pessoas', '🏙️', 'Purutuya.'],

  // ── Família ── (verbetes de Silva 2013; as formas “meu/minha” das frases também são de Silva)
  ["Ha'a", 'pai', 'substantivo', 'Família', '👨', "Ko'ituketi ne nza'a ya oyonokutike."],
  ['Eno', 'mãe', 'substantivo', 'Família', '👩', 'Enepora veno yonoti.'],
  ["Xe'exa", 'filho', 'substantivo', 'Família', '👦', "Hana'itine ra xi'ixa."],
  ['Ihine', 'filha', 'substantivo', 'Família', '👧', 'Ihikaxovoti ra inzine.'],
  ['Ose', 'avó', 'substantivo', 'Família', '👵', 'Itukoti hihi ra onze.'],
  ['Otu', 'avô', 'substantivo', 'Família', '👴', 'Mokerexone ne otu.'],

  // ── Corpo ── (verbetes de Silva 2013; mbaho, nduti, njeve, unge, ngiri: Silva pp. 61 e 80 e abonações)
  ['Tuti', 'cabeça', 'substantivo', 'Corpo', '🙆', 'Kohoneti ra nduti.'],
  ['Paho', 'boca', 'substantivo', 'Corpo', '👄', 'Vakuti ra mbaho.'],
  ['Heve', 'pé', 'substantivo', 'Corpo', '🦶', 'Ipusokovoti ra njeve.'],
  ['Uke', 'olho', 'substantivo', 'Corpo', '👁️', "Pu'itinoe uke ne hovovo."],
  ["Vo'uti", 'mão', 'substantivo', 'Corpo', '✋', "Konokoti sasa'iyea ne vo'uti enepo nika uti."],
  ['Kiri', 'nariz', 'substantivo', 'Corpo', '👃', "Kotivetine ra ngiri vo'oku ngiripi."],

  // ── Números ── (Butler e Ekdahl, Lição 8, conferida na página digitalizada; poehaxo e yehi também
  // em Silva 2013). De quatro em diante o terena usa números vindos do português (koaturu, singu…).
  ['Poehaxo', 'um', 'numeral', 'Números', '1️⃣', "Poehaxo ra emo'um."],
  ["Pi'axo", 'dois', 'numeral', 'Números', '2️⃣', "Pi'axo."],
  ["Mopo'axo", 'três', 'numeral', 'Números', '3️⃣', "Mopo'axo."],
  ['Yehi', 'dez', 'numeral', 'Números', '🔟', 'Yehi koe koputoe ra kipae xoko moko.'],

  // ── Tempo ── (Silva 2013)
  ["Ko'oyene", 'hoje', 'advérbio', 'Tempo', '📆', "Kotuti ra kaxe ko'oyene."],
  ['Lumingu', 'domingo', 'substantivo', 'Tempo', '⛪', "Huvekuti ra lumingu ko'oyene."],
  // Silva p. 182 (kaxe²): “Kuaturu kaxe ko'oyene.” (hoje é quinta-feira) — lit. “quatro dias”
  ['Kuaturu kaxe', 'quinta-feira', 'substantivo', 'Tempo', '🗓️', "Kuaturu kaxe ko'oyene."],

  // ── Natureza e bichos ── (verbetes de Silva 2013)
  ['Une', 'água', 'substantivo', 'Natureza e bichos', '💧', "Kopiti'iti ne une."],
  ['Kaxe', 'sol, dia', 'substantivo', 'Natureza e bichos', '☀️', "Kotuti ra kaxe ko'oyene."],
  ['Uko', 'chuva', 'substantivo', 'Natureza e bichos', '🌧️', 'Koati xuheveti ra uko.'],
  // Silva p. 87: “Tetu-k-o tikoti ra Aronaldo” (o Aronaldo cortou a árvore)
  ['Tikoti', 'árvore', 'substantivo', 'Natureza e bichos', '🌳', 'Tetuko tikoti ra Aronaldo.'],
  ['Hoe', 'peixe', 'substantivo', 'Natureza e bichos', '🐟', "Eno hoe ko'oyene huveoke."],
  ['Tamuku', 'cachorro', 'substantivo', 'Natureza e bichos', '🐕', 'Akopikea ra tamuku.'],
  // Silva marca o empréstimo: “marakaya n. [Do Guarani] gato”
  ['Marakaya', 'gato', 'substantivo', 'Natureza e bichos', '🐈', 'Nikoti oho ra marakaya.'],
  ['Kamo', 'cavalo', 'substantivo', 'Natureza e bichos', '🐎', 'Exoti ra kamo.'],
  ['Sini', 'onça', 'substantivo', 'Natureza e bichos', '🐆', 'Koemaiti ra sini.'],
  ["Tapi'i", 'galinha', 'substantivo', 'Natureza e bichos', '🐔', "Koputukone ne tapi'i."],
  // Silva: “xe'exa tapi'i n. ovo” — lit. “filho da galinha”
  ["Xe'exa tapi'i", 'ovo', 'substantivo', 'Natureza e bichos', '🥚', "Eno xe'exa tapi'i nika ne tamuku."],
  ["Ho'openo", 'pássaro', 'substantivo', 'Natureza e bichos', '🐦', "Enovoti une ra ho'openo."],
  ["Ka'i", 'macaco', 'substantivo', 'Natureza e bichos', '🐒', "Enepora ka'i yomoti panana."],

  // ── Aldeia e cultura ── (verbetes de Silva 2013)
  ['Ovoku', 'casa', 'substantivo', 'Aldeia e cultura', '🏠', 'Ovane ovonguke ra Ana.'],
  ['Ipuxovoko', 'aldeia', 'substantivo', 'Aldeia e cultura', '🛖', "Enepora vipuxovoku hana'iti."],
  ["Poke'e", 'território, terra', 'substantivo', 'Aldeia e cultura', '🗺️', "Mboke'exa."],
  ['Kavane', 'roça', 'substantivo', 'Aldeia e cultura', '🌱', 'Kavaneke yono ra lele.'],
  ['Xupu', 'mandioca', 'substantivo', 'Aldeia e cultura', '🥔', 'Ahati nikea xupu ra Liliane.'],
  // Silva marca o empréstimo: “panana n. [Do Port.] banana”
  ['Panana', 'banana', 'substantivo', 'Aldeia e cultura', '🍌', "Enone panana itovoti ya xuvekuke kavaneke."],
  // Silva p. 160: bolo de mandioca cozido na folha da bananeira, indispensável nas festas
  ['Hihi', 'hihi (bolo de mandioca cozido na folha de bananeira)', 'substantivo', 'Aldeia e cultura', '🍃', 'Uheti ra hihi.'],
  ["Epo'e", 'bola', 'substantivo', 'Aldeia e cultura', '⚽', "Ihinokoti ra epo'e."],
  // Silva: “mbola n. [Do Port.] bola (→ epo'e)” — o b do português vira mb no terena
  ['Mbola', 'bola (do português)', 'substantivo', 'Aldeia e cultura', '⚽', 'Mbola.'],
  ['Koixomoneti', 'pajé', 'substantivo', 'Aldeia e cultura', '🪶', "Kipae evo'i ituko kipahi ra koixomoneti."],
];

export const VOCAB_TER = buildVocab('ter', ROWS);
