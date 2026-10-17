import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do baniwa (kpc), língua indígena viva da família Aruak (Arawak), falada na bacia do rio
 * Içana (noroeste do Amazonas, fronteira com a Colômbia e a Venezuela) — SEM NENHUMA relação com o
 * nheengatu (código `yrl`, família tupi-guarani) ou o tukano (código `tuo`, família Tukano), ambos
 * cooficiais na mesma região (São Gabriel da Cachoeira) mas de famílias totalmente diferentes.
 *
 * Nota sobre o código: o ISO 639-3 `kpc` denota formalmente o curripaco (Kurripako); a variante do
 * médio rio Içana (a estudada aqui) tem código próprio, `bwi` (ver iso639-3.sil.org/code/kpc e
 * en.wikipedia.org/wiki/ISO_639:kpc). As duas são, porém, tratadas como dialetos de uma mesma língua
 * por Aikhenvald (1999) e estudadas juntas por Henri Ramirez sob o nome “baniwa-curripaco” — ver a
 * explicação completa em index.ts (`incomplete.note`). Este pacote documenta especificamente o
 * baniwa do médio Içana (o “superdialeto Central”, na classificação de Ramirez).
 *
 * Cada palavra abaixo foi conferida em fontes específicas sobre o baniwa (nunca reaproveitada de
 * outra língua indígena deste app):
 *   - pt.wikipedia.org/wiki/Língua_baniwa — artigo extenso, citando sobretudo Henri Ramirez,
 *     “Línguas Arawak da Amazônia Setentrional” (2001a) e “Dicionário da língua baniwa” (2001b), e
 *     Gerald Taylor, “Introdução à língua Baniwa do Içana” (1991): autodesignação, classificação,
 *     alfabeto, prefixos/sufixos pessoais, pronomes independentes e demonstrativos, classificadores,
 *     numerais, ordem da frase, perguntas, negação, termos de parentesco e três contos tradicionais
 *     (narrados por Domingos de Souza Paiva em 1984, transcritos por Taylor).
 *   - en.wikipedia.org/wiki/Baniwa_of_Içana_language — classificação (Arawakan, Upper Amazon,
 *     Eastern Nawiki), prefixos de sujeito/objeto, os 46 classificadores, o exemplo do prefixo
 *     privativo/comitativo (“iipe” carne → “meepe” magro, “keepe” gordo).
 *   - en.wikipedia.org/wiki/Kurripako_language — continuum dialetal baniwa-curripaco, classificação.
 *   - en.wiktionary.org, categoria “Baniwa lemmas” — as entradas “uni” (água, rio) e “éeno” (céu). Desde 17/10/2026 o curso escreve “úuni”, “éenu”, “tsíinu”, “palána”, “dzáawi”, “hápe”, “áapi” e “wheekúdza”, como Ramirez (2001a, p. 101, 110, 114, 162; 2001b, p. 8, 9, 17, 20): a vogal longa e o acento que faltavam nas formas antigas.
 *   - omniglot.com/language/numbers/baniwa.htm — os numerais de 1 a 20, incluindo o sistema de base
 *     manual (5 = “apeéma pakáapi”, lit. “uma mão”; 10 = “dzameéma pakáapi”, lit. “duas mãos”),
 *     confirmado de forma independente em pt.wikipedia.org (mesma base “pakáapi”, mão).
 *   - pib.socioambiental.org/pt/Povo:Baniwa e povosindigenas.org.br/pt/Povo:Baniwa (Instituto
 *     Socioambiental) — autodesignação “walimanai”, seres cosmológicos (Nhiãperikuli, Kuwai),
 *     categorias ecológicas do rio Içana (hamariene, édzaua, arapê) e termos cerimoniais (pariká,
 *     pudali, maliiri).
 *   - Eick Marcelo Lima de Souza, “Estudo fonológico da língua baniwa-kuripako” (dissertação de
 *     mestrado, 2012, etnolinguistica.wdfiles.com) e Ovídio da Silva Camico, “Situação
 *     sociolinguística da língua baníwa na comunidade Castelo Branco no médio rio Içana” (dissertação
 *     de mestrado, UFAM, 2023, tede.ufam.edu.br) — usadas aqui só para CONFIRMAR de forma cruzada
 *     palavras já citadas por Ramirez/Wikipedia (“hápe”, frio, e “dzáawi”, onça, aparecem também,
 *     foneticamente, nessas duas dissertações) e o sentido de “pudali” (troca cerimonial de presentes
 *     entre parentes); as transcrições fonéticas dessas duas fontes não entram como palavras novas no
 *     vocabulário porque usam só o Alfabeto Fonético Internacional, sem uma grafia prática — incluir
 *     uma forma inventada a partir da IPA correria o risco de inventar ortografia, o que este pacote
 *     evita (ver o relatório da entrega).
 *
 * NÃO encontrei, em nenhuma das fontes acima, uma palavra baniwa fixa para “oi”/“olá” ou “obrigado”
 * parecida com as do português — ver a explicação completa (e a solução adotada, como já acontece com
 * o kaingang e o xavante deste app) em index.ts.
 *
 * O baniwa tem nomes INDEPENDENTES (funcionam sem prefixo pessoal: “tsíinu”, cão) e nomes DEPENDENTES
 * (exigem um prefixo pessoal possessivo: os termos de parentesco abaixo, citados por Ramirez na forma
 * de dicionário sem prefixo, mas que na fala real sempre vêm precedidos de nu- “meu”, pi- “teu” etc.).
 * As frases de exemplo que não são citações diretas de Ramirez/Taylor foram MONTADAS combinando
 * palavras, prefixos e a ordem de frase (sujeito-verbo-objeto; adjetivo-sujeito) já documentados —
 * nunca uma palavra nova inventada — seguindo o mesmo método já usado nos outros pacotes de língua
 * indígena deste app (ver o cabeçalho de vocabulario.ts do tukano, `src/data/tuo/vocabulario.ts`).
 *
 * O baniwa não marca gênero gramatical nos substantivos comuns (não há artigos “o/a”): a distinção
 * real que a língua tem — feminino/não-feminino — só aparece na 3ª pessoa do singular (pronomes e
 * prefixos/sufixos verbais) — ver gramatica.ts. Por isso `gender` fica sempre de fora aqui.
 */
export const ROWS: VocabRow[] = [
  // Expressões (partículas e advérbios citados em pt.wikipedia.org/wiki/Língua_baniwa, a partir de
  // Ramirez 2001a)
  ['Káphaa', 'partícula de pergunta (sim/não)', 'partícula', 'Expressões', '❓', 'Káphaa phía Walimanai?'],
  ['Kúa', 'o quê?, quem?', 'pronome', 'Expressões', '🤔', 'Kúa íinaiwatsa núawa?'],
  ['Ñame', 'não, negado', 'partícula', 'Expressões', '🚫', 'Ñame kéeruakanhua.'],
  ['Úupi', 'há pouco, passado recente', 'advérbio', 'Expressões', '⏱️', 'Úupi nukápa.'],
  ['Théewa', 'amanhã', 'advérbio', 'Expressões', '🌅', 'Théewa núawa.'],
  ['Wheekúdza', 'ontem', 'advérbio', 'Expressões', '🌇', 'Wheekúdza nukápa.'],
  // Pessoas: pronomes independentes (tabela completa em pt.wikipedia.org/wiki/Língua_baniwa, citando
  // Ramirez 2001a, pp. 150-152) e a autodesignação do povo/língua (ISA)
  ['Nhúa', 'eu', 'pronome', 'Pessoas', '🙋', 'Nhúa Walimanai.'],
  ['Phía', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Káphaa phía Walimanai?'],
  ['Lhía', 'ele', 'pronome', 'Pessoas', '🧑', 'Lhía Walimanai.'],
  ['Rhúa', 'ela', 'pronome', 'Pessoas', '👩', 'Rhúa Walimanai.'],
  ['Wháa', 'nós', 'pronome', 'Pessoas', '🙌', 'Wháa Walimanai.'],
  ['Nháa', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Nháa Walimanai.'],
  ['Walimanai', 'baniwa (autodesignação do povo e da língua; lit. “os outros novos que vão nascer”)', 'substantivo', 'Pessoas', '🏞️', 'Wháa Walimanai.'],
  // Parentesco (tabela completa em pt.wikipedia.org/wiki/Língua_baniwa, citando Ramirez 2001a); são
  // nomes DEPENDENTES — na fala real levam sempre um prefixo possessivo (nu- “meu”, pi- “teu”…)
  ['Hániri', 'pai', 'substantivo', 'Parentesco', '👨', 'Nu-hániri.'],
  ['Hadua', 'mãe', 'substantivo', 'Parentesco', '👩', 'Nu-hadua.'],
  ['Iri', 'filho', 'substantivo', 'Parentesco', '👦', 'Nu-iri.'],
  ['Íitu', 'filha', 'substantivo', 'Parentesco', '👧', 'Nu-íitu.'],
  ['Pheeri', 'irmão mais velho', 'substantivo', 'Parentesco', '🧑', 'Nu-pheeri.'],
  ['Mhéreeri', 'irmão mais novo', 'substantivo', 'Parentesco', '🧒', 'Nu-mhéreeri.'],
  // Números (pt.wikipedia.org/wiki/Língua_baniwa, citando Ramirez 2001a, e
  // omniglot.com/language/numbers/baniwa.htm, que confirma de forma independente a mesma base manual)
  ['Apaa', 'um', 'numeral', 'Números', '1️⃣', 'Apá íita.'],
  ['Dzama', 'dois', 'numeral', 'Números', '2️⃣', 'Dzamaápa palána.'],
  ['Madali', 'três', 'numeral', 'Números', '3️⃣', 'Madali majhuúpa.'],
  ['Likua', 'quatro', 'numeral', 'Números', '4️⃣', 'Apaa, dzama, madali, likuaáaka…'],
  ['Apeéma pakáapi', 'cinco (lit. “uma mão”)', 'numeral', 'Números', '🖐️', 'Apeéma pakáapi, dzameéma pakáapi.'],
  // Natureza (úuni e éeno: en.wiktionary.org, categoria “Baniwa lemmas”; hamariene, édzaua e arapê:
  // categorias ecológicas do rio Içana citadas em povosindigenas.org.br/pt/Povo:Baniwa, ISA)
  ['Úuni', 'água, rio', 'substantivo', 'Natureza', '💧', 'Hápe úuni.'],
  ['Éenu', 'céu', 'substantivo', 'Natureza', '☁️', 'Nukápa éeno.'],
  ['Hamariene', 'campinarana (vegetação de solo arenoso)', 'substantivo', 'Natureza', '🌾', 'Nukápa hamariene.'],
  ['Édzaua', 'terra firme', 'substantivo', 'Natureza', '🌳', 'Nukápa édzaua.'],
  ['Arapê', 'igapó (mata alagada)', 'substantivo', 'Natureza', '🌊', 'Nukápa arapê.'],
  // Animais e objetos (tsíinu, dzáawi e áapi: pt.wikipedia.org/wiki/Língua_baniwa; íita e palána:
  // exemplos de numerais na mesma fonte)
  ['Tsíinu', 'cão', 'substantivo', 'Animais e objetos', '🐕', 'Nukápa tsíinu.'],
  ['Palána', 'banana', 'substantivo', 'Animais e objetos', '🍌', 'Dzamaápa palána.'],
  ['Íita', 'canoa', 'substantivo', 'Animais e objetos', '🛶', 'Apá íita.'],
  ['Dzáawi', 'onça', 'substantivo', 'Animais e objetos', '🐆', 'Nukápa dzáawi.'],
  ['Áapi', 'cobra', 'substantivo', 'Animais e objetos', '🐍', 'Nukápa áapi.'],
  // Corpo e estado: adjetivos funcionam como verbos de estado no baniwa, sem precisar de um verbo “ser/
  // estar” (pt.wikipedia.org/wiki/Língua_baniwa); iipe/meepe/keepe: en.wikipedia.org/wiki/Baniwa_of_
  // Içana_language, ilustrando o prefixo privativo (ma-) e comitativo (ka-)
  ['Hápe', 'frio, está frio', 'adjetivo', 'Corpo e estado', '❄️', 'Hápe úuni.'],
  ['Iipe', 'carne', 'substantivo', 'Corpo e estado', '🥩', 'Nukápa iipe.'],
  ['Meepe', 'magro (lit. “sem carne”, ma- + iipe)', 'adjetivo', 'Corpo e estado', '🪶', 'Meepe.'],
  ['Keepe', 'gordo (lit. “com carne”, ka- + iipe)', 'adjetivo', 'Corpo e estado', '🍖', 'Keepe.'],
  // Cultura e espiritualidade (povosindigenas.org.br/pt/Povo:Baniwa e pib.socioambiental.org/pt/
  // Povo:Baniwa, ISA; pudali também em Camico 2023, p. 11, UFAM)
  ['Nhiãperikuli', 'o Criador e Transformador (lit. “ele dentro do osso”)', 'substantivo', 'Cultura', '🌄', 'Nhiãperikuli.'],
  ['Kuwai', 'filho de Nhiãperikuli, figura central dos ritos de iniciação', 'substantivo', 'Cultura', '🪈', 'Kuwai.'],
  ['Pariká', 'pó sagrado usado pelos pajés em transe xamânico', 'substantivo', 'Cultura', '🌿', 'Pariká.'],
  ['Pudali', 'festa cerimonial de troca de presentes entre parentes (também chamada dabukuri)', 'substantivo', 'Cultura', '🎉', 'Pudali.'],
  ['Maliiri', 'pajé (também chamado malikai-iminali, “dono-de-canto”, conforme a função)', 'substantivo', 'Cultura', '🪶', 'Maliiri.'],
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes: Henri Ramirez, “Dicionário da Língua Baniwa” (Manaus: EDUA, 2001), citado como R01b com a
  // página impressa, e “Línguas Arawak da Amazônia Setentrional” (Manaus: EDUA, 2001), citado como
  // R01a. Os dois estão em acesso aberto na Biblioteca Digital Curt Nimuendajú (etnolinguistica.org),
  // e cada forma foi conferida na IMAGEM da página, não só no texto extraído (o OCR troca acentos).
  // Variedade: o “dialeto central” de Ramirez (rio Içana perto da foz do Aiari, R01b p. 3), a mesma do
  // curso. Regra de grafia declarada: o dicionário escreve “o” onde o curso (e R01a, p. 73–74) escreve
  // “u”; é a mesma vogal, que soa entre “o” fechado e “u”. Por isso “nokápa” (R01b) vira “nukápa”,
  // “kóphe” vira “kúphe”, “íinaro” vira “íinaru”. Nada mais muda. Os prefixos ficam colados na raiz,
  // como manda o dicionário (R01b p. 18).
  // Verbos dependentes: a palavra é a 1ª pessoa (“eu…”), como o dicionário dá; a raiz está na tradução.
  ['Nudéenhi', 'trabalhar (“eu trabalho”)', 'verbo', 'Verbos', '🔨', 'Lidéenhika mátsia.'], // R01b p. 63 (nodéenhi); p. 212 (lidéenhika mátsia, ele trabalha bem)
  ['Núdia', 'voltar (“eu volto”)', 'verbo', 'Verbos', '↩️', 'Wárha wádiawa!'], // R01b p. 11 (nó-dia volto); p. 66 (wárha wádiawa! vamos voltar!)
  ['Nukápa', 'ver (“eu vejo”)', 'verbo', 'Verbos', '👀', 'Nukápa phia.'], // R01b p. 11 (no+kápa phia, eu te vejo); p. 161
  ['Nímaa', 'dormir (“eu durmo”)', 'verbo', 'Verbos', '😴', 'Nímheeni mátsia.'], // R01b p. 14 (nímaa/nómaa durmo); p. 137 (nímheeni mátsia, dormi bem)
  ['Núidza', 'chorar (“eu choro”)', 'verbo', 'Verbos', '😢', 'Núidza, píidza, wáidza.'], // R01b p. 15 e p. 122 (nóidza choro, píidza choras, wáidza choramos)
  ['Núiñha', 'comer (“eu como”)', 'verbo', 'Verbos', '🍽️', 'Nuúma núiñhaka.'], // R01b p. 127 (nóiñha como; noóma nóiñhaka, quero comer)
  ['Nuúma', 'querer (“eu quero”)', 'verbo', 'Verbos', '🙏', 'Nuúmaka nímaaka.'], // R01b p. 16 (noóma quero); p. 137 (noómaka nímaaka, quero dormir)
  // Corpo: nomes dependentes, sempre com dono (R01b p. 8–9); na palavra, a raiz; na tradução, “meu…”.
  ['Káapi', 'mão (nukáapi: “minha mão”)', 'substantivo', 'Corpo', '✋', 'Nukáapi, pikáapi.'], // R01b p. 9 (no-káapi a minha mão, pi-káapi a tua mão)
  ['Hiwída', 'cabeça (nhiwída: “minha cabeça”)', 'substantivo', 'Corpo', '🗣️', 'Lidétshiaka lhiwída.'], // R01b p. 15 (nhiwída a minha cabeça); p. 66 (lidétshiaka lhiwída, ele menea a cabeça)
  ['Híipa', 'pé (nhúipa: “meu pé”)', 'substantivo', 'Corpo', '🦶', 'Liupáta lhíipa.'], // R01b p. 15 (nhóipa o meu pé); p. 244 (liopáta lhíipa, ele se coça o pé)
  ['Héeni', 'orelha (nhúeni: “minha orelha”)', 'substantivo', 'Corpo', '👂', 'Nhúeni, phíeni.'], // R01b p. 15 (nhóeni a minha orelha, phíeni a tua orelha)
  ['Húurhi', 'joelho (nhúurhi: “meu joelho”)', 'substantivo', 'Corpo', '🦵', 'Nhúurhi, phíurhi.'], // R01b p. 16 (-hóorhi; nhóorhi o meu joelho, phíorhi o teu joelho)
  ['Náapa', 'braço (nunáapa: “meu braço”)', 'substantivo', 'Corpo', '💪', 'Nunáapa, pináapa.'], // R01b p. 11 (no-náapa o meu braço, pi-náapa o teu braço)
  // Adjetivos (“verbos independentes”: não levam prefixo, R01b p. 9; R01a p. 101–102)
  ['Iinúnaa', 'triste', 'adjetivo', 'Adjetivos', '😞', 'Iinúnaa nhua.'], // R01b p. 11 (iinónaa nhoa, estou triste)
  ['Mátsia', 'bom, bonito', 'adjetivo', 'Adjetivos', '👍', 'Mátsiatsa!'], // R01b p. 212 (mátsiatsa! tudo bem!)
  ['Háale', 'branco', 'adjetivo', 'Adjetivos', '⚪', 'Aapá-ma íinaru haalé-da-ru.'], // R01b p. 9; p. 22 (aapá-ma íinaro haalé-da-ro, 1 mulher branca)
  ['Tsúu', 'pequeno', 'adjetivo', 'Adjetivos', '🐜', 'Wadzákale tsuáphitsa.'], // R01b p. 9 (tsóo); p. 74 (wadzákale tsoáphitsa, o nosso povoado é pequeno)
  ['Hamíña', 'pesado', 'adjetivo', 'Adjetivos', '🏋️', 'Wawáakuka hamíña kánheetsa háiku wheekúdza.'], // R01b p. 9; p. 161 (carregamos paus pesados demais ontem)
  // Expressões do dia (R01b p. 99, 137, 212)
  ['Heekúapi whaa!', 'bom dia', 'expressão', 'Expressões', '🌄', 'Heekúapi whaa!'], // R01b p. 99 (heekóapi whaa! bom dia!)
  ['Mátsia pidzeekátaka núlhiu!', 'obrigado', 'expressão', 'Expressões', '🤝', 'Mátsia pidzeekátaka núlhiu!'], // R01b p. 212 (mátsia pidzeekátaka nólhio! obrigado!)
  ['Wémeenapã líudza!', 'boa noite', 'expressão', 'Expressões', '🌙', 'Wémeenapã líudza!'], // R01b p. 137 (wémeenapã líodza! boa noite! fórmula de despedida)
  // A2.2 — Tempo (R01a p. 162; R01b p. 216, 244, 254)
  ['Pándza', 'agora; hoje (no futuro)', 'advérbio', 'Tempo', '⏰', 'Pándza líukakawa.'], // R01b p. 254 (pándza líokakawa, ele vai chegar hoje, agora)
  ['Úupiika', 'hoje (no passado)', 'advérbio', 'Tempo', '📅', 'Línuka úupiika.'], // R01b p. 244 (línoka óopiika, veio hoje); R01a p. 162
  ['Meédzami', 'anteontem', 'advérbio', 'Tempo', '⏪', 'Meédzami líukawa.'], // R01b p. 216 (meédzami líokawa, chegou anteontem)
  // Casa e aldeia (R01b p. 8, 74, 127, 145, 207, 213, 255)
  ['Pántti', 'casa', 'substantivo', 'Casa e aldeia', '🏠', 'Apadápana pántti.'], // R01b p. 255 (apadápana pántti, 1 casa)
  ['Kúphe', 'peixe', 'substantivo', 'Casa e aldeia', '🐟', 'Líiñhaka kúphe peéthe íyu.'], // R01b p. 127 (líiñhaka kóphe peéthe íyo, ele come peixe com beiju)
  ['Malíye', 'faca', 'substantivo', 'Casa e aldeia', '🔪', 'Apaíta malíye.'], // R01b p. 207 (apaíta malíye, 1 faca)
  ['Matsúka', 'farinha', 'substantivo', 'Casa e aldeia', '🥣', 'Numatsúkani.'], // R01b p. 213 (nomatsókani, a minha farinha)
  ['Káana', 'milho', 'substantivo', 'Casa e aldeia', '🌽', 'Apaápa káana.'], // R01b p. 145 (apaápa káana, 1 espiga de milho)
  ['Dzakálee', 'aldeia, povoado', 'substantivo', 'Casa e aldeia', '🏘️', 'Dzakálee imínali.'], // R01b p. 74 (dzakálee imínali, dono do povoado)
  // Natureza (R01b p. 8, 13, 16, 20, 286)
  ['Hiipáda', 'pedra', 'substantivo', 'Natureza', '🪨', 'Lhíehe hiipáda whetanída thewákhette úuni riku.'], // R01b p. 286 (esta pedra que tiramos do fundo do rio)
  ['Háiku', 'árvore, pau', 'substantivo', 'Natureza', '🌴', 'Háiku idáanami.'], // R01b p. 13 (háiko i-dáanami, a sombra da árvore)
  ['Awakáda', 'floresta, mata', 'substantivo', 'Natureza', '🌲', 'Awakáda liku.'], // R01b p. 16 (awakáda liko, na mata)
  ['Héema', 'anta', 'substantivo', 'Natureza', '🐗', 'Apána héema makáne.'], // R01b p. 20 (apána héema makáne, 1 anta grande)
  // Pessoas (R01b p. 8, 22–23, 122, 212)
  ['Atsíanli', 'homem', 'substantivo', 'Pessoas', '🧔', 'Atsíanli matsiádali.'], // R01b p. 212 (atsíanli matsiádali, homem bom)
  ['Íinaru', 'mulher', 'substantivo', 'Pessoas', '👱‍♀️', 'Íinaru matsiádaru.'], // R01b p. 212 (íinaro matsiádaro, mulher boa, bonita)
  ['Newíki', 'pessoa', 'substantivo', 'Pessoas', '🧍', 'Nháa newíki.'], // R01b p. 23 (nháa newíki, as pessoas mencionadas agora)
  ['Ienipétti', 'criança', 'substantivo', 'Pessoas', '👶', 'Ienipétti kaidzakhédali.'], // R01b p. 122 (ienipétti kaidzakhédali, garoto chorão)
  // Demonstrativos e lugares (R01b p. 8 e 22)
  ['Lhíehe', 'este, isto', 'pronome', 'Demonstrativos', '👇', 'Lhíehe atsíanli.'], // R01b p. 22 (lhíehe atsíanli, este homem)
  ['Áahã', 'aqui', 'advérbio', 'Demonstrativos', '📍', 'Áahã.'], // R01b p. 8 (áahã aqui)
  ['Aátahã', 'lá', 'advérbio', 'Demonstrativos', '🏔️', 'Aátahã.'], // R01b p. 8 (aátahã lá)
];

export const VOCAB_KPC = buildVocab('kpc', ROWS);
