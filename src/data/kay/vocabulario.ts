import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kamaiurá (kay), língua tupi-guarani viva do Alto Xingu (MT) — nível A1 (unidades 1 e
 * 2), 77 palavras. Não é o tupi antigo (tpw), nem o guarani (gn), nem o nheengatu (yrl): é uma língua à
 * parte da mesma família, e cada palavra abaixo foi conferida no kamaiurá, nunca copiada de um parente.
 *
 * FONTE PRINCIPAL (conferida na página impressa digitalizada, não só no texto extraído por OCR, que
 * perde o til, o ŋ e o apóstrofo):
 *   Lucy Seki, «Gramática do Kamaiurá: língua Tupi-Guarani do Alto Xingu» (Campinas: Editora da
 *   Unicamp; São Paulo: Imprensa Oficial, 2000), digitalizada na Biblioteca Digital Curt Nimuendajú
 *   (etnolinguistica.org). Partes usadas:
 *   - «Lista de itens lexicais constantes nos exemplos», pp. 453–467: classe gramatical e sentido de
 *     quase todas as palavras daqui (página indicada em cada grupo abaixo);
 *   - p. 59 (gênero: akwama'e «homem, macho», kujã «mulher, fêmea», jawara kujã «onça fêmea»);
 *     p. 61 (quadro 3, pronomes livres e clíticos); p. 65 (quadro 4, prefixos de pessoa do verbo);
 *     pp. 67–68 (verbos descritivos: -katu «bom», -jup, -tsiŋ, -pitsun); pp. 78–79 (interrogativos e
 *     numerais cardinais 1–20, com a análise de jenepomomap «fazer terminar nossa mão» e jenepopap
 *     «nossas mãos terminaram»); pp. 102–104 (partículas de resposta haj, aje, he'ẽ, anite, kõ);
 *     pp. 398–401 (partes do corpo: hwã «mão», jywa «braço»); p. 402 (cores, todas verbos descritivos
 *     com i-); p. 411 (/awatsi/ «milho», nos exemplos de fonologia); p. 376 (moĩ «cobra»); p. 437
 *     (texto de Arawitará: «haaa erejo ko'yt» — «ah! você veio?» — e a resposta «ajo ko'yr a'e wa»
 *     — «eu vim»).
 *
 * TRANSCRIÇÃO: a de Seki (fonológica), a única usada de forma consistente numa obra de referência:
 * apóstrofo = oclusiva glotal; y = vogal central alta /ɨ/; ŋ = nasal velar; ts, kw e hw são um som só;
 * j = semivogal /j/; til nas vogais nasais; acento na última sílaba (por isso não é marcado). Nas
 * frases, sigo a escrita corrida das linhas de texto de Seki (prefixos e o sufixo de caso -a colados à
 * palavra: «kunu'uma oyk»; pronomes clíticos soltos: «je akaŋ», «jene retama»). As consoantes finais
 * -t/-p viram -r/-w antes de vogal (kwat → kwara, wararuwijap → wararuwijawa, ko'yt → ko'yr a'e),
 * regra descrita por Seki (p. 48).
 *
 * CONFERÊNCIA CRUZADA: o Wiktionary em inglês tem poucos verbetes de kamaiurá, mas as reconstruções do
 * proto-tupi-guarani (*jawar, *tatu, *paje, *pira) listam como descendentes em kamaiurá jawat, tatu,
 * paje e pira — as mesmas formas de Seki (a lista de Seki traz «ipira», e «pira» aparece nos
 * exemplos (217) e (813a)).
 *
 * FRASES: quase todas as frases de exemplo são exemplos da própria gramática (número entre parênteses
 * nos comentários). As poucas montadas aqui só trocam uma palavra num molde atestado (marcadas com
 * «molde»): «je + nome» (meu/minha ..., como em (3a) je akaŋ), «po X a'ep?» (lá tem X?, como em (521)
 * po ipira a'ep) e «mam X-a rekow?» (onde está X?, como em (59)).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões (pp. 102–104, 437) ──
  // texto de Arawitará, linha 16: haaa erejo ko'yt «ah! você veio?» — é como a mãe recebe quem chega
  ["erejo ko'yt", 'você veio! (para receber quem chega)', 'expressão', 'Expressões', '👋', "Haaa, erejo ko'yt?"],
  // linha 17: ajo ko'yr a'e wa «eu vim» (ko'yt vira ko'yr antes de vogal)
  ["ajo ko'yt", 'eu vim (a resposta para quem te recebe)', 'expressão', 'Expressões', '🙋', "Erejo ko'yt? — Ajo ko'yt."],
  // (234): he'ẽ / a-ha rake ko'yt «sim, eu fui»
  ["he'ẽ", 'sim', 'interjeição', 'Expressões', '👍', "He'ẽ, aha rake ko'yt."],
  // (235): po ne=akaŋ-ay / anite «sua cabeça está doendo? / não»
  ['anite', 'não', 'interjeição', 'Expressões', '👎', 'Po ne akaŋay? — Anite.'],
  // (236): kõ / t=a-etsak=ane «não sei, vou ver ainda»
  ['kõ', 'não sei', 'interjeição', 'Expressões', '🤷', 'Kõ, taetsakane.'],
  // (230): haj / mawite «sim / o que é?» — resposta a quem chama
  ['haj', 'oi? pois não? (resposta a quem chama)', 'interjeição', 'Expressões', '🙋', 'Haj, mawite?'],
  // (231): aje / arehe =ik a'e=wa «sim, um momento» — aceitando um pedido
  ['aje', 'está bem (aceitando um pedido)', 'interjeição', 'Expressões', '👌', "Aje, arehe ik a'e wa."],
  // ── Essenciais (pp. 78, 61, 455, 460, 461) ──
  // (797b) awa ene «quem é você?»
  ['awa', 'quem?', 'pronome', 'Essenciais', '❓', 'Awa ene?'],
  // molde de (59) mam tataw-a r-eko-w «onde está o Tatap?»
  ['mam', 'onde?', 'advérbio', 'Essenciais', '❓', 'Mam wararuwijawa rekow?'],
  // (236) mawite ja-ko «como vamos fazer?»
  ['mawite', 'como?', 'advérbio', 'Essenciais', '❓', 'Mawite jako?'],
  // (813b) ma'anuar-a ere-'u «o que você come?»
  ["ma'anuat", 'o quê?; coisa', 'pronome', 'Essenciais', '❓', "Ma'anuara ere'u?"],
  // ── Pessoas: pronomes (p. 61, quadro 3) ──
  // (23) ije morerekwat «eu sou chefe»
  ['ije', 'eu', 'pronome', 'Pessoas', '🙋', 'Ije morerekwat.'],
  ['ene', 'você', 'pronome', 'Pessoas', '🫵', 'Awa ene?'],
  // (37) a'e-a rak o-'awyky 'aŋ-a «ele fez isto»
  ["a'e", 'ele, ela', 'pronome', 'Pessoas', '👤', "A'ea rak o'awyky 'aŋa."],
  // texto de Arawitará, linha 27: jene r-etam-a «nossa aldeia»
  ['jene', 'nós (com você)', 'pronome', 'Pessoas', '🙌', 'Jene retama.'],
  // (25) ore t-oro-jomono «nós é que vamos»
  ['ore', 'nós (sem você)', 'pronome', 'Pessoas', '👥', 'Ore torojomono.'],
  // (484) pehẽ kara'iw-a a'e-ram «vocês são não-índios»
  ['pehẽ', 'vocês', 'pronome', 'Pessoas', '👥', "Pehẽ kara'iwa a'eram."],
  // ── Pessoas (pp. 59, 455, 459, 460, 462, 463, 466) ──
  // (798a) kamajura a-ko «eu sou kamaiurá»
  ['kamajura', 'kamaiurá (o povo)', 'substantivo', 'Pessoas', '🪶', 'Kamajura ako.'],
  // texto de Arawitará, linha 1: ije aha ko'yr a'e, jyjryp «eu vou, amigo» (vocativo, p. 459)
  ['jyjryp', 'amigo', 'substantivo', 'Pessoas', '🤝', "Ije aha ko'yr a'e, jyjryp."],
  // (1195) mokõj kunu'um-a o-yk «dois meninos chegaram»
  ["kunu'um", 'menino', 'substantivo', 'Pessoas', '👦', "Mokõj kunu'uma oyk."],
  // (18) jawara kujã «onça fêmea»
  ['kujã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Jawara kujã.'],
  // (18) jawara akwama'e «onça macho»
  ["akwama'e", 'homem', 'substantivo', 'Pessoas', '👨', "Jawara akwama'e."],
  // (23) ije morerekwat «eu sou chefe»; (18b) morerekwara kujã «chefe mulher»
  ['morerekwat', 'chefe', 'substantivo', 'Pessoas', '👑', 'Morerekwara kujã.'],
  // (483) paje ere-ko «você é pajé»
  ['paje', 'pajé', 'substantivo', 'Pessoas', '🪶', 'Paje ereko.'],
  ["kara'ip", 'não indígena', 'substantivo', 'Pessoas', '🧑', "Pehẽ kara'iwa a'eram."],
  // ── Números (pp. 78–79; lista pp. 458, 461–462) ──
  // (105) mojepete i-ker-i «ele dormiu um [dia]»
  ['mojepete', 'um', 'numeral', 'Números', '1️⃣', 'Mojepete ikeri.'],
  ['mokõj', 'dois', 'numeral', 'Números', '2️⃣', "Mokõj kunu'uma oyk."],
  ["mo'apyt", 'três', 'numeral', 'Números', '3️⃣', "Mojepete, mokõj, mo'apyt."],
  ["mojo'irũ", 'quatro', 'numeral', 'Números', '4️⃣', "Mo'apyt, mojo'irũ, jenepomomap."],
  ['jenepomomap', 'cinco', 'numeral', 'Números', '5️⃣', "Mo'apyt, mojo'irũ, jenepomomap."],
  ['jenepopap', 'dez', 'numeral', 'Números', '🔟', 'Jenepomomap, jenepopap.'],
  // ── Natureza (pp. 454, 455, 457, 458, 460, 467) ──
  // (137) ka'aruk-amue tete a-ha 'y-p «toda tarde eu vou ao rio»
  ["'y", 'água', 'substantivo', 'Natureza', '💧', "Ka'arukamue tete aha 'yp."],
  // (1411) kwar-a o-'at «passou um ano» (lit. o sol caiu); kwat também é «ano»
  ['kwat', 'sol', 'substantivo', 'Natureza', '☀️', "Kwara o'at."],
  // (1412) kwar-a o-'at jay-a jay-a jay-a «passaram-se um ano e três meses»; jay também é «mês»
  ['jay', 'lua', 'substantivo', 'Natureza', '🌙', "Kwara o'at, jaya, jaya, jaya."],
  // (195) ... ywaka rap jene=pyk «senão o céu nos esmaga»
  ['ywaka', 'céu', 'substantivo', 'Natureza', '☁️', 'Ywaka rap jene pyk.'],
  // (142) aman-a o-ky=we «ainda está chovendo»
  ['aman', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Amana okywe.'],
  // (1361) ka'aher-a e-nuŋ ita wyrip «coloque o papel sob a pedra»
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', "Ka'ahera enuŋ ita wyrip."],
  // ── Animais (pp. 457, 458, 465, 466, 467; p. 376) ──
  // (521)/(522) po ipira a'e-p «lá tem peixe?» / anite ipira a'e-p «lá não tem peixe»
  ['ipira', 'peixe', 'substantivo', 'Animais', '🐟', "Po ipira a'ep?"],
  // (1420) wyra «ave, pássaro» → wyrapĩ «passarinho»
  ['wyra', 'pássaro', 'substantivo', 'Animais', '🐦', 'Wyra, wyrapĩ.'],
  // (424) jawar-a o-y-'u «a onça está bebendo água»
  ['jawat', 'onça', 'substantivo', 'Animais', '🐆', "Jawara oy'u."],
  // (868) ... jakare-a n=a-'u-ite «... nem como jacaré»; (862) jakare-a o-juka «matou jacaré»
  ['jakare', 'jacaré', 'substantivo', 'Animais', '🐊', "Jakarea ojuka, tapi'ira ojuka."],
  ["tapi'it", 'anta', 'substantivo', 'Animais', '🦬', "Jakarea ojuka, tapi'ira ojuka."],
  // p. 465: tatu «tatu», tatupep «tatupeba»
  ['tatu', 'tatu', 'substantivo', 'Animais', '🦔', 'Tatu, tatupep.'],
  // (1389) wararuwijaw-a o-jan 'apykaw-a r-owawyri «o cachorro correu para debaixo do banco»
  ['wararuwijap', 'cachorro', 'substantivo', 'Animais', '🐕', "Wararuwijawa ojan 'apykawa rowawyri."],
  // (1436b) moĩ-a i-pitsun «a cobra é preta»
  ['moĩ', 'cobra', 'substantivo', 'Animais', '🐍', 'Moĩa ipitsun.'],
  // ── A aldeia (pp. 457, 459, 465, 467; (260b), (1436a), (219)) ──
  // (260b) tap «povoado» → taip «na aldeia»; texto de Arawitará, linha 27: jene retama «nossa aldeia»
  ['tap', 'aldeia', 'substantivo', 'Casa', '🏘️', 'Taip.'],
  // (1436a) tata h-eny «o fogo está aceso»
  ['tata', 'fogo', 'substantivo', 'Casa', '🔥', 'Tata heny.'],
  // p. 457: ini «rede»; molde «po X a'ep?» de (521)
  ['ini', 'rede de dormir', 'substantivo', 'Casa', '🛏️', "Po ini a'ep?"],
  // (219) fabi-a yar-a pupe a-ha=n a'e wa «eu irei no avião da FAB» (lit. canoa da FAB)
  ['yat', 'canoa', 'substantivo', 'Casa', '🛶', "Fabia yara pupe ahan a'e wa."],
  // (1361) ka'aher-a e-nuŋ ita wyrip «coloque o papel sob a pedra»; p. 404: ka'a-het «papel, livro»,
  // lit. «parecido com folha»
  ["ka'ahet", 'livro, papel', 'substantivo', 'Casa', '📖', "Ka'ahera enuŋ ita wyrip."],
  // ── Alimentação (pp. 461, 462; p. 404, (19); p. 411; (1424); (813a)) ──
  // p. 404, (19): meju-we «biscoito» (lit. falso beiju)
  ['meju', 'beiju', 'substantivo', 'Alimentação', '🫓', 'Meju, mejuwe.'],
  // (1424) mani'ip «mandioca» → mani'ityp «mandiocal»
  ["mani'ip", 'mandioca', 'substantivo', 'Alimentação', '🌿', "Mani'ip, mani'ityp."],
  // p. 411, (1511): /awatsi/ «milho»; molde «po X a'ep?» de (521)
  ['awatsi', 'milho', 'substantivo', 'Alimentação', '🌽', "Po awatsi a'ep?"],
  // ── Corpo (pp. 398–400 e lista) — «je + nome» = meu/minha (molde de (3a) je akaŋ) ──
  // (235) po ne=akaŋ-ay «sua cabeça está doendo?»
  ['akaŋ', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Po ne akaŋay?'],
  ['juru', 'boca', 'substantivo', 'Corpo', '👄', 'Je juru.'],
  ['nami', 'orelha', 'substantivo', 'Corpo', '👂', 'Je nami.'],
  ['hwã', 'mão', 'substantivo', 'Corpo', '✋', 'Je hwã.'],
  ['jywa', 'braço', 'substantivo', 'Corpo', '💪', 'Je jywa.'],
  ['py', 'pé', 'substantivo', 'Corpo', '🦶', 'Je py.'],
  // ── Verbos-chave (pp. 66–67 e 455–467) ──
  // (214) a-ha ko'yt «estou indo / já vou»
  ['ha', 'ir', 'verbo', 'Verbos-chave', '🚶', "Aha ko'yt."],
  // (346) a-jot we-maraka-m «eu vim para cantar»
  ['jot', 'vir', 'verbo', 'Verbos-chave', '🏃', 'Ajot wemarakam.'],
  // (52) a-ha we-karu-m «eu vou para comer»
  ['karu', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Aha wekarum.'],
  // (425) a-ha we-y-'u-m «eu vou beber água» (y'u = água + ingerir)
  ["y'u", 'beber', 'verbo', 'Verbos-chave', '🥤', "Aha wey'um."],
  // (468) kunu'um-a o-ket «o menino está dormindo»
  ['ket', 'dormir', 'verbo', 'Verbos-chave', '😴', "Kunu'uma oket."],
  // (346) a-jot we-maraka-m «eu vim para cantar»
  ['maraka', 'cantar', 'verbo', 'Verbos-chave', '🎵', 'Ajot wemarakam.'],
  // (109) mokomokõj i-porahaj-awa-w «eles dançam de dois em dois»
  ['porahaj', 'dançar', 'verbo', 'Verbos-chave', '💃', 'Mokomokõj iporahajawaw.'],
  // (24) ije a-je'eŋ ene ere-karaj «eu falo e você escreve»
  ["je'eŋ", 'falar', 'verbo', 'Verbos-chave', '🗣️', "Ije aje'eŋ, ene erekaraj."],
  // (1389) wararuwijaw-a o-jan ... «o cachorro correu ...»
  ['jan', 'correr', 'verbo', 'Verbos-chave', '🏃', 'Wararuwijawa ojan.'],
  // (1375) o-'ytap yar-a atsiwan «ele está nadando em volta da canoa»
  ["'ytap", 'nadar', 'verbo', 'Verbos-chave', '🏊', "O'ytap yara atsiwan."],
  // ── Cores e descrições (p. 402; pp. 67–68) — verbos descritivos, todos com i- (é ...) ──
  // (1436b) moĩ-a i-pitsun «a cobra é preta»
  ['pitsun', 'preto', 'adjetivo', 'Cores e descrições', '⚫', 'Moĩa ipitsun.'],
  ['tsiŋ', 'branco', 'adjetivo', 'Cores e descrições', '⚪', 'Itsiŋ.'],
  ['piraŋ', 'vermelho', 'adjetivo', 'Cores e descrições', '🔴', 'Ipiraŋ.'],
  // p. 404, (17): ita-ju «metal» (lit. pedra amarela)
  ['jup', 'amarelo', 'adjetivo', 'Cores e descrições', '🟡', 'Itaju.'],
  ['tsowy', 'azul', 'adjetivo', 'Cores e descrições', '🔵', 'Itsowy.'],
  ['tsowyawe', 'verde', 'adjetivo', 'Cores e descrições', '🟢', 'Itsowyawe.'],
  // (29) je=Ø-katu «eu sou bom»; (49) ne=katu «seja bom»
  ['katu', 'bom', 'adjetivo', 'Cores e descrições', '👍', 'Je katu.'],
  // ── Cultura (p. 35 e p. 460) ──
  // kwaryp «festa dos mortos» (p. 460), «kwaryp (termo kamaiurá)» na descrição da cultura alto-xinguana
  // (p. 35); em português a festa é conhecida como quarup ou kuarup
  ['kwaryp', 'quarup, a festa dos mortos do Alto Xingu', 'substantivo', 'Cultura', '🪵', 'Kwaryp.'],
];

export const VOCAB_KAY = buildVocab('kay', ROWS);
