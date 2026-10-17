import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kamaiurá (kay), língua tupi-guarani viva do Alto Xingu (MT) — níveis A1 e A2 (unidades 1 a
 * 4), 117 palavras. Não é o tupi antigo (tpw), nem o guarani (gn), nem o nheengatu (yrl): é uma língua à
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
  // (137) ka'aruk-amuẽ tete a-ha 'y-p «toda tarde eu vou ao rio», p. 86 (o til de -amuẽ conferido na imagem em 17/10/2026)
  ["'y", 'água', 'substantivo', 'Natureza', '💧', "Ka'arukamuẽ tete aha 'yp."],
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
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Mesma fonte (Seki 2000), páginas conferidas na IMAGEM digitalizada. Os termos de parentesco vêm
  // como Seki os cita na lista de parentesco (pp. 391–394: «vem citados com o prefixo relacional r-,
  // sem o marcador de pessoa»): rup, ramỹj, ra'yt... e na fala vão sempre com o dono antes (je rup,
  // meu pai). Pela mesma regra, «remi'u» (comida) vem com o r- da classe (p. 302; lista p. 456 «emi'u,
  // Nh»). Frases: exemplos numerados da gramática, na escrita corrida (prefixos e sufixos colados,
  // clíticos soltos), como nas linhas dos textos do apêndice (pp. 435–452). Só «je + nome» é molde,
  // o mesmo de (3a) je akaŋ (p. 56), marcado «molde».
  // ── Família (pp. 391–394; lista pp. 454–456) ──
  // (2a) je=r-up «meu pai», p. 56; (253) je=r-uw-a nite «com meu pai», p. 108 (rup → ruwa antes de -a)
  ['rup', 'pai (sempre com dono: je rup, meu pai)', 'substantivo', 'Família', '👨', 'Je ruwa nite.'],
  // (79) o-y-a nite i-jo-w «ele vai com a mãe dele», p. 74; (277) je=y «minha mãe», p. 112
  ['y', 'mãe (sempre com dono: je y, minha mãe)', 'substantivo', 'Família', '👩', 'Oya nite ijow.'],
  // vocativo (1498) ama «mamãe», p. 394; (1494) po ere-ko ama «como vai, mamãe», p. 394
  ['ama', 'mamãe', 'substantivo', 'Família', '🤱', 'Po ereko ama?'],
  // vocativo (1498) apa «papai», p. 394; (835) apa te=n =a'e «o papai», p. 229
  ['apa', 'papai', 'substantivo', 'Família', '🧔', "Apa ten a'e."],
  // (1488) -ramỹj «avô», p. 392 (lista p. 455: amỹj, Nt); (290) ne=r-amỹj-a ke e-raha «leve o teu avô», p. 117
  ['ramỹj', 'avô', 'substantivo', 'Família', '👴', 'Ne ramỹja ke eraha.'],
  // (1488) -jaryj «avó», p. 392; molde de (3a)
  ['jaryj', 'avó', 'substantivo', 'Família', '👵', 'Je jaryj.'],
  // (1487) -tutyt «irmão da mãe», p. 392; (449) je=tutyr-a morerekwar-a «meu tio é o chefe», p. 151
  ['tutyt', 'tio (irmão da mãe)', 'substantivo', 'Família', '👨‍🦱', 'Je tutyra morerekwara.'],
  // (1487) -jaje «irmã do pai», p. 392; também vocativo (1498), p. 394; molde de (3a)
  ['jaje', 'tia (irmã do pai)', 'substantivo', 'Família', '👩‍🦱', 'Je jaje.'],
  // (1489) -ra'yt «filho» (dito por homem), p. 392; (1138) je=r-a'yr-a w-ereko ywyrapar-a «meu filho tem arco», p. 304
  ["ra'yt", 'filho (dito pelo pai)', 'substantivo', 'Família', '👦', "Je ra'yra wereko ywyrapara."],
  // (1489) -rajyt «filha» (dito por homem), p. 392; molde de (3a)
  ['rajyt', 'filha (dita pelo pai)', 'substantivo', 'Família', '👧', 'Je rajyt.'],
  // (1486) -kywyt «irmão» (dito por mulher), p. 391; lista p. 460 «kywyt, Ni: irmão (MF)»; molde de (3a)
  ['kywyt', 'irmão (dito por mulher)', 'substantivo', 'Família', '🧑', 'Je kywyt.'],
  // (1486) -ryke'yt «irmão mais velho» (dito por homem), p. 391; (599) p. 180
  ["ryke'yt", 'irmão mais velho (dito por homem)', 'substantivo', 'Família', '🧑‍🦱', "Je ryke'yra wetsak kye'ia ne remiekarera."],
  // (1486) -renyt «irmã» (dito por homem), p. 391; lista p. 456 «enyt, Nh: irmã (HF)»; molde de (3a)
  ['renyt', 'irmã (dito por homem)', 'substantivo', 'Família', '👩‍🦰', 'Je renyt.'],
  // (1491) -remireko «esposa», p. 393; (801a) tyruher-a a-mepy ne=r-emireko-a upe «comprei um vestido para tua esposa», p. 222
  ['remireko', 'esposa', 'substantivo', 'Família', '👰', 'Tyruhera amepy ne remirekoa upe.'],
  // (1491) -'irũ «marido», p. 393; lista p. 454 «'irũ, Ni»; (1485b) je=kypy'yr-a 'irũ «o marido da minha irmã mais nova», p. 391
  ["'irũ", 'marido', 'substantivo', 'Família', '🤵', "Je kypy'yra 'irũ."],
  // ── Casa (pp. 57, 163, 279, 302; lista pp. 454, 460) ──
  // (515) je=Ø-pyr-a amoete «minha casa é/fica longe», p. 163; (5b) je pyt «minha casa», p. 57
  ['pyt', 'casa (de alguém: je pyt, minha casa)', 'substantivo', 'Casa', '🏠', 'Je pyra amoete.'],
  // (99b) amoete i-ko-w «ele está longe», p. 77; lista p. 455
  ['amoete', 'longe', 'advérbio', 'Essenciais', '🔭', 'Amoete ikow.'],
  // (1039) ka'aher-a o-kytsi kye'i-a pupe «ele cortou o papel com a faca», p. 279; lista p. 460
  ["kye'i", 'faca', 'substantivo', 'Casa', '🔪', "Ka'ahera okytsi kye'ia pupe."],
  // (839) 'apykaw-a e-mo'uhwam «levante o banco!», p. 232; lista p. 454 «'apykap, Na: banco»
  ["'apykap", 'banco (assento)', 'substantivo', 'Casa', '🪑', "'Apykawa emo'uhwam!"],
  // (1130) ipira je=r-emi-'u «o peixe é minha comida», p. 302 (escrito tpira pelo OCR; a imagem traz ipira)
  ["remi'u", 'comida (de alguém: je remi\'u, minha comida)', 'substantivo', 'Alimentação', '🍲', "Ipira je remi'u."],
  // ── O dia e o tempo (pp. 77–78, 402–403; lista pp. 457–467) ──
  // (96) ikue rak i-ker-i «ele dormiu ontem», p. 76
  ['ikue', 'ontem', 'advérbio', 'Tempo', '⏪', 'Ikue rak ikeri.'],
  // (216) o'iran a-ha pinamomot-e=n «amanhã irei pescar», p. 99
  ["o'iran", 'amanhã', 'advérbio', 'Tempo', '⏩', "O'iran aha pinamomoten."],
  // (100) arehe «hoje (após o momento da fala)», p. 77; (477) arehe a-ha=n «eu irei hoje», p. 157
  ['arehe', 'hoje', 'advérbio', 'Tempo', '📅', 'Arehe ahan.'],
  // (789) ko'em-amuẽ a-yk «cheguei de manhã», p. 219; lista p. 460 «ko'em, N: manhã»
  ["ko'em", 'manhã', 'substantivo', 'Tempo', '🌅', "Ko'emamuẽ ayk."],
  // (153) ka'aruk-amuẽ katu oro-yk «nós chegamos bem à tarde», p. 89
  ["ka'aruk", 'tarde', 'substantivo', 'Tempo', '🌇', "Ka'arukamuẽ katu oroyk."],
  // (857) peje-'ata-me=n ka'a rupi=n ypytun-ime=n «não andem pelo mato à noite», p. 235; lista p. 467
  ['ypytun', 'noite', 'substantivo', 'Tempo', '🌃', "Peje'atamen ka'a rupin ypytunimen."],
  // ── Lugares (pp. 75–77, 109–110, 215, 363; lista pp. 454, 459–467) ──
  // (764) maramuẽ ko katy ere-o «quando você vai à roça?», p. 215; lista p. 460 «ko, Na: roça»
  ['ko', 'roça', 'substantivo', 'Natureza', '🌱', 'Maramuẽ ko katy ereo?'],
  // (262) ka'a-p i-ko-w «ele está na mata», p. 110; lista p. 459 «ka'a, N: mata; folha»
  ["ka'a", 'mata', 'substantivo', 'Natureza', '🌳', "Ka'ap ikow."],
  // (1369) moĩ-a 'aŋ o-'up yupaw-a r-eme'yp «a cobra está na margem da lagoa», p. 363; lista p. 467
  ['yupap', 'lagoa', 'substantivo', 'Natureza', '🏞️', "Moĩa 'aŋ o'up yupawa reme'yp."],
  // (97) pem «aí, lá», p. 77; (1246) anite paku-a pem «lá não há paca», p. 333
  ['pem', 'lá', 'advérbio', 'Essenciais', '👉', 'Anite pakua pem.'],
  // (97) 'am «aqui», p. 77; (143) a-ko 'am ikue=we «estou aqui desde ontem», p. 87
  ["'am", 'aqui', 'advérbio', 'Essenciais', '👇', "Ako 'am ikuewe."],
  // (103) maramuẽ «quando», p. 78; (764) p. 215
  ['maramuẽ', 'quando?', 'advérbio', 'Essenciais', '⏰', 'Maramuẽ ko katy ereo?'],
  // ── Verbos do dia (lista pp. 457–464) ──
  // (653) i-porawyky-ramuẽ i-maraka-w «quando trabalha, ele canta», p. 190
  ['porawyky', 'trabalhar', 'verbo', 'Verbos-chave', '⚒️', 'Iporawykyramuẽ imarakaw.'],
  // (216) p. 99; lista p. 463 «pinamomot, Vi: pescar com anzol»
  ['pinamomot', 'pescar', 'verbo', 'Verbos-chave', '🎣', "O'iran aha pinamomoten."],
  // (970) o'irane je o-ja'uk o-'up=awa «no dia seguinte, eles estavam se banhando», p. 260; lista p. 457
  ["ja'uk", 'tomar banho', 'verbo', 'Verbos-chave', '🛁', "O'irane je oja'uk o'upawa."],
  // (874) a-ke-potat we-pytu'u-me=ran «eu quero dormir e descansar», p. 239; lista p. 465
  ["pytu'u", 'descansar', 'verbo', 'Verbos-chave', '🛋️', "Akepotat wepytu'umeran."],
  // (1225) n=a-etsak-ite «eu não o vejo», p. 330; lista p. 456 «etsak, Vtr/h: ver»
  ['etsak', 'ver', 'verbo', 'Verbos-chave', '👀', 'Naetsakite.'],
  // (789) p. 219; lista p. 467 «yk, Vi: chegar»
  ['yk', 'chegar', 'verbo', 'Verbos-chave', '🛬', "Ko'emamuẽ ayk."],
  // (851) tata=atsã e-monyk je=upe «por favor, acenda o fogo para mim», p. 234; lista p. 462
  ['monyk', 'acender', 'verbo', 'Verbos-chave', '🕯️', 'Tata atsã emonyk je upe.'],
  // (852) mewe=atsã=a'iwĩ e-moneta ko=kyn «por favor, converse/fale mais devagar», p. 234
  ['mewe', 'devagar', 'advérbio', 'Essenciais', '🐢', "Mewe atsã a'iwĩ emoneta ko kyn."],
];

export const VOCAB_KAY = buildVocab('kay', ROWS);
