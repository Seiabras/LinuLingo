import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do karitiana (ktn), língua indígena viva da família Arikém (um ramo pequeno e à parte
 * do tronco Tupi — NÃO o ramo tupi-guarani do guarani, do tupinambá, do nheengatu ou do guarani
 * mbyá, já presentes neste app), falada pelo povo Karitiana na Terra Indígena Karitiana, à margem do
 * rio Candeias, cerca de 95 km ao sul de Porto Velho (RO). O karitiana é a ÚNICA língua ainda viva da
 * família Arikém: as outras duas, o arikém (ariquém) e o kabixiana, já estão extintas.
 *
 * Toda palavra abaixo foi conferida em fontes específicas sobre o karitiana (nunca reaproveitada de
 * outra língua indígena deste app):
 *   - pt.wikipedia.org/wiki/Língua_caritiana — artigo extenso, citando sobretudo Luciana Storto,
 *     “Aspects of a Karitiana Grammar” (tese de doutorado, MIT, 1999) e Caleb Everett, “Patterns in
 *     Karitiana: Articulation, Perception, and Grammar” (tese de doutorado, Rice University, 2007),
 *     além de David Landin, “Dicionário e Léxico Karitiana/Português” (SIL, Cuiabá, 2005) e Ivan
 *     Rocha, “Processos de Causativização na língua Karitiana” (Boletim do Museu Paraense Emílio
 *     Goeldi, 2014) e “Inventário Sociolinguístico da Língua Karitiana” (IPHAN, 2018): classificação,
 *     fonologia, ortografia prática, pronomes, demonstrativos, numerais (base 5), negação, perguntas,
 *     frases ergativo-absolutivas com glosa interlinear completa, Lista de Swadesh, expressões do
 *     dia a dia e léxico temático (corpo, natureza, animais, plantas).
 *   - en.wikipedia.org/wiki/Karitiana_language — confirma o código ISO 639-3 “ktn”, a classificação
 *     (Tupian > Arikém) e traços gramaticais (pronomes epicenos, concordância ergativo-absolutiva).
 *   - en.wikipedia.org/wiki/Karitiana_people e en.wikipedia.org/wiki/Arikém_languages — população,
 *     localização e o status de língua Arikém sobrevivente.
 *   - pib.socioambiental.org/pt/Povo:Karitiana (Instituto Socioambiental, “Povos Indígenas no
 *     Brasil”) — autodesignação “Yjxa”, população por aldeia, etimologia do etnônimo “karitiana”,
 *     organização social (fratrias, “mahipto”), cosmologia (Botyj̃, Byyjyty) e as casas redondas
 *     tradicionais (“ambi atana”).
 *   - glottolog.org/resource/languoid/id/kari1311 — confirma a filiação Tupi > Arikém e o código ISO.
 *
 * NOTA ORTOGRÁFICA: os artigos citados registram pequenas variações de grafia entre fontes diferentes
 * (ex.: “taktag” na tabela de léxico vs. “taktãg” no exemplo de Storto para “nadar”; “moroja” no
 * léxico geral vs. “boroja” no exemplo de causativização de Rocha 2014 para “cobra”) — fenômeno comum
 * em línguas pouco documentadas, com fontes de épocas e projetos diferentes. Mantivemos cada forma
 * exatamente como a fonte original a registra, sem tentar unificá-las.
 *
 * O karitiana NÃO marca gênero gramatical em lugar nenhum da gramática: os pronomes são epicenos (“i”
 * serve para “ele” e “ela”), e nenhum afixo nominal ou verbal distingue masculino de feminino — ver
 * index.ts (campo `genders: []`) e a nota de Everett (2011) sobre pronomes epicenos citada na
 * Wikipédia. Substantivos não variam em número (não há plural morfológico) e frases nominais não
 * levam artigo — por isso várias frases de exemplo abaixo respondem a uma pergunta só com o
 * substantivo “nu”, sem “o/a” (ver gramatica.ts, “Frases nominais sem artigo”).
 *
 * As frases de exemplo que não são citações diretas das fontes acima foram MONTADAS combinando só
 * estruturas já documentadas: a pergunta “mõrãmõn ka/ho/onỹ?” (“o que é isso/aquilo/aquilo ali?”,
 * atestada) seguida da resposta em substantivo nu (regra documentada de que frases nominais no
 * karitiana não usam artigo nem operador de número) — nunca uma palavra ou uma regra nova inventada.
 */
export const ROWS: VocabRow[] = [
  // Expressões do dia a dia (pt.wikipedia.org/wiki/Língua_caritiana, seção “Expressões do dia-a-dia”)
  ['Go i haap', 'bom dia', 'expressão', 'Expressões', '🌅', 'Go i haap! Yryhon.'],
  ['Go i mõnh', 'boa noite', 'expressão', 'Expressões', '🌙', 'Go i mõnh!'],
  ['Yryhon', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Go i haap! Yryhon.'],
  ["My'ari", 'vamos!', 'interjeição', 'Expressões', '🚶', "My'ari!"],
  ["Pyse'an", 'está bom', 'expressão', 'Expressões', '👍', "Pyse'an!"],
  ['Õwĩ', 'ai! (dor)', 'interjeição', 'Expressões', '😣', 'Õwĩ!'],
  // Essenciais: pronomes livres (tabela “Pronomes Pessoais e Possessivos”), negação (Lista de Swadesh
  // e seção “Frases Negativas”), interrogativos e demonstrativos (seções “Frases Interrogativas” e
  // “Pronomes Demonstrativos”) e um adjetivo (“Ordem da Frase e Alinhamento”, exemplo NAdj)
  ['Ỹn', 'eu', 'pronome', 'Essenciais', '🙋', 'Ỹn a-taka-oky-j an.'],
  ['Ãn', 'tu, você', 'pronome', 'Essenciais', '🫵', 'An y-ta-oky-t ỹn.'],
  ['I', 'ele, ela (sem distinção de gênero)', 'pronome', 'Essenciais', '🧑', 'I sojt.'],
  ['Yjja', 'nós (inclusivo: eu e você)', 'pronome', 'Essenciais', '🙌', 'Yjja.'],
  ['Yta', 'nós (exclusivo: eu e outros, sem você)', 'pronome', 'Essenciais', '🙆', 'Yta.'],
  ['Ajja', 'vocês', 'pronome', 'Essenciais', '👥', 'Ajja.'],
  ["O'ĩ", 'não', 'advérbio', 'Essenciais', '🚫', "O'ĩ."],
  ['Padni', 'não (partícula de negação depois do verbo)', 'partícula', 'Essenciais', '⛔', 'Ỹn i-soky padni eppa.'],
  ['Mõrãmõn', 'o quê?, quem?', 'pronome', 'Essenciais', '❓', 'Mõrãmõn ka?'],
  ['Mõrãpip', 'quando?, onde?', 'pronome', 'Essenciais', '🕑', 'Mõrãpip?'],
  ['Mõrãsõg', 'por quê?', 'pronome', 'Essenciais', '🤔', 'Mõrãsõg?'],
  ['Ka', 'isto (na mão de quem fala)', 'pronome', 'Essenciais', '👌', 'Mõrãmõn ka?'],
  ['Ho', 'isso (perto)', 'pronome', 'Essenciais', '👉', 'Mõrãmõn ho?'],
  ['Onỹ', 'aquilo (mais longe)', 'pronome', 'Essenciais', '👆', 'Mõrãmõn onỹ?'],
  ['Ty', 'grande', 'adjetivo', 'Essenciais', '📏', 'Taso ty nã-yry-t.'],
  // Pessoas (Lista de Swadesh e pib.socioambiental.org/pt/Povo:Karitiana, autodesignação)
  ['Taso', 'homem', 'substantivo', 'Pessoas', '👨', 'Taso ty nã-yry-t.'],
  ['Nhõnso', 'mulher', 'substantivo', 'Pessoas', '👩', 'Nhõnso.'],
  ["Mỹ'ĩnã", 'criança', 'substantivo', 'Pessoas', '🧒', "Mỹ'ĩnã."],
  ['Yjxa', 'o povo karitiana (autodesignação; lit. “nós”, 1ª pessoa do plural inclusivo)', 'substantivo', 'Pessoas', '🏞️', 'Yjxa.'],
  // Parentesco (prosódia: [’mãn] “marido”; Pronomes Pessoais e Possessivos: “a-sojt”, “i sojt”; ISA:
  // “ombyj”, termo recíproco entre avô/avó e neto/neta, com a raiz “byj”, chefe)
  ['Mãn', 'marido', 'substantivo', 'Parentesco', '🤵', 'Mãn.'],
  ['Sojt', 'esposa', 'substantivo', 'Parentesco', '👰', 'I sojt.'],
  ['Ombyj', 'avô paterno, avó paterna (termo recíproco entre avós e netos)', 'substantivo', 'Parentesco', '👴', 'Ombyj.'],
  // Natureza (Léxico karitiano, seções “Natureza”)
  ['Ese', 'água, rio', 'substantivo', 'Natureza', '💧', 'Ese.'],
  ['Gokyp', 'sol', 'substantivo', 'Natureza', '☀️', 'Gokyp.'],
  ['Oti', 'lua', 'substantivo', 'Natureza', '🌕', 'Oti.'],
  ['Pãmpi', 'céu', 'substantivo', 'Natureza', '☁️', 'Pãmpi.'],
  ['Iso', 'fogo', 'substantivo', 'Natureza', '🔥', 'Iso.'],
  ['Go', 'dia', 'substantivo', 'Natureza', '🌞', 'Go i haap!'],
  ['Nip', 'noite', 'substantivo', 'Natureza', '🌌', 'Nip.'],
  ['Neso', 'serra, monte', 'substantivo', 'Natureza', '⛰️', 'Neso.'],
  // Animais (Léxico karitiano, seção “Animais”; a frase de “Oky”/“matar”, em verbos-chave, cita o
  // exemplo de causativização de Rocha 2014 — “boroja”, variante de “moroja”, cobra)
  ['Omãky', 'onça', 'substantivo', 'Animais', '🐆', 'Mõrãmõn ka? Omãky.'],
  ['Moroty', 'paca', 'substantivo', 'Animais', '🐹', 'Moroty.'],
  ['Toro', 'lontra', 'substantivo', 'Animais', '🦦', 'Toro.'],
  ['Syhej', 'capivara', 'substantivo', 'Animais', '🦫', 'Syhej.'],
  ['Sosy', 'tatu', 'substantivo', 'Animais', '🦔', 'Sosy.'],
  ['Ne', 'veado', 'substantivo', 'Animais', '🦌', 'Ne.'],
  ["Nhe'okõn", 'tucano', 'substantivo', 'Animais', '🐦', "Nhe'okõn."],
  ['Pat', 'arara', 'substantivo', 'Animais', '🦜', 'Pat.'],
  ['Moroja', 'cobra', 'substantivo', 'Animais', '🐍', 'João Ø-na-oky-t boroja.'],
  ['Ip', 'peixe', 'substantivo', 'Animais', '🐟', 'Mõrãmõn ka? Ip.'],
  // Alimentação (Léxico karitiano, seção “Plantas”)
  ['Gok', 'mandioca, macaxeira', 'substantivo', 'Alimentação', '🥔', 'Gok.'],
  ['Asyryty', 'banana', 'substantivo', 'Alimentação', '🍌', 'Asyryty.'],
  ["Mĩ'ĩ", 'amendoim', 'substantivo', 'Alimentação', '🥜', "Mĩ'ĩ."],
  ['Gijo', 'milho', 'substantivo', 'Alimentação', '🌽', 'Gijo.'],
  ['Mỹty', 'mamão', 'substantivo', 'Alimentação', '🍈', 'Mỹty.'],
  ['Ohy', 'batata-doce', 'substantivo', 'Alimentação', '🍠', 'Ohy.'],
  // Corpo (Léxico karitiano, seção “Partes do Corpo”)
  ["'E", 'cabeça', 'substantivo', 'Corpo', '🗣️', "'E."],
  ['Sypo', 'olho', 'substantivo', 'Corpo', '👁️', 'Sypo.'],
  ["Nhõpi'op", 'nariz', 'substantivo', 'Corpo', '👃', "Nhõpi'op."],
  ['Koromo', 'boca', 'substantivo', 'Corpo', '👄', 'Koromo.'],
  ['Nhõnh', 'dente', 'substantivo', 'Corpo', '🦷', 'Nhõnh.'],
  ['Py', 'mão', 'substantivo', 'Corpo', '✋', 'Py.'],
  ['Pi', 'pé', 'substantivo', 'Corpo', '🦶', 'Pi.'],
  ['Ge', 'sangue', 'substantivo', 'Corpo', '🩸', 'Ge.'],
  // Casa: substantivos nominalizados com o sufixo “-pa” a partir de verbos (Everett 2007, pp. 296-300)
  // e a casa comunal tradicional (ISA: “ambi atana”, hoje usada como espaço cerimonial)
  ['Mikipa', 'cadeira (lit. “coisa de sentar”, de mika)', 'substantivo', 'Casa', '🪑', 'Mikipa.'],
  ['Katapa', 'cama (lit. “coisa de dormir”, de kat)', 'substantivo', 'Casa', '🛏️', 'Katapa.'],
  ['Ahypa', 'copo, caneca (lit. “coisa de beber”, de ahy)', 'substantivo', 'Casa', '🥤', 'Ahypa.'],
  ['Ambi atana', 'casa redonda tradicional (hoje usada como espaço cerimonial)', 'substantivo', 'Casa', '🏠', 'Ambi atana.'],
  // Números: base 5 (pt.wikipedia.org/wiki/Língua_caritiana, seção “Numeração”) — números acima de 5
  // estão caindo em desuso, substituídos pelo português no comércio (ver index.ts)
  ['Mỹhĩn', 'um', 'numeral', 'Números', '1️⃣', 'Mỹhĩn, sypõm, mỹnhỹm.'],
  ['Sypõm', 'dois', 'numeral', 'Números', '2️⃣', 'Sypõm.'],
  ['Mỹnhỹm', 'três', 'numeral', 'Números', '3️⃣', 'Mỹnhỹm.'],
  ['Otannỹmỹn', 'quatro', 'numeral', 'Números', '4️⃣', 'Otannỹmỹn, yj pyt.'],
  ['Yj pyt', 'cinco (lit. “uma mão”)', 'numeral', 'Números', '🖐️', 'Otannỹmỹn, yj pyt.'],
  // Verbos-chave (Léxico karitiano, seção de verbos, e a tabela “Verbos” da seção Gramática, com
  // frases completas glosadas; “pyt'y” e “oky” também em frases imperativas e ergativas atestadas,
  // citadas acima). O léxico cita “beber” com três formas alternativas — ahy, se'y, 'y —, e a frase
  // completa atestada usa a forma “se'y” (ỹn i-se'y-t); mantivemos o verbete em “ahy” (a 1ª forma
  // citada) com essa frase, que é da mesma entrada lexical.
  ['Kat', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Ỹn i-kat.'],
  ['Ahy', "beber (também “se'y” ou “'y”)", 'verbo', 'Verbos-chave', '🥤', "Ỹn i-se'y-t."],
  ["Pyt'y", 'comer', 'verbo', 'Verbos-chave', '🍽️', "A-pyt'y!"],
  ['Tarak', 'andar', 'verbo', 'Verbos-chave', '🚶', 'Tarak.'],
  ['Taktag', 'nadar', 'verbo', 'Verbos-chave', '🏊', 'Ỹn i-taktãg-ãt.'],
  ['Oky', 'matar', 'verbo', 'Verbos-chave', '⚔️', 'João Ø-na-oky-t boroja.'],

  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Do A2 em diante, cada palavra e cada frase vêm de fontes acadêmicas lidas nesta sessão, com a
  // página. Siglas usadas nos comentários:
  //   ST99  = Luciana Storto, “Aspects of a Karitiana Grammar” (tese de doutorado, MIT, 1999;
  //           dspace.mit.edu/handle/1721.1/9702), página impressa (conferida na imagem da página).
  //   SR    = Luciana Storto e Ivan Rocha, “Estrutura Argumental na Língua Karitiana” (PDF no site
  //           do Departamento de Linguística da USP), página do PDF e número do exemplo; tabelas 1–3
  //           com as 170 raízes verbais testadas por Rocha (2011).
  //   SUB   = Luciana Storto, “Subordination in Karitiana” (Amerindia 35, 2012; PDF no site do
  //           Departamento de Linguística da USP), página do PDF e número do exemplo.
  //   MC10  = Andrea Marques de Carvalho, “O auxiliar aspectual tyka do Karitiana” (dissertação,
  //           USP, 2010; teses.usp.br), página impressa e número do exemplo.
  //   GOPI  = Lucas Blaud Ciola (org. Ana Müller), “Gopi Yjxa. Léxico ilustrado pedagógico
  //           karitiana: plantas e animais” (Editora Curt Nimuendajú, 2020), material feito com a
  //           escola karitiana da aldeia Kyõwã; página impressa do livro (= página do PDF − 6),
  //           grafia conferida na imagem da página (o texto extraído perde o “j”). As traduções são
  //           as do próprio livro (pp. 90–94).
  // Grafia: cada palavra e frase fica como a fonte escreve. Storto separa os morfemas com hífen
  // (naka-'y-t); o Gopi Yjxa escreve a palavra inteira (naka'yt). O apóstrofo tipográfico (’, ´)
  // das fontes vira o apóstrofo simples (') do resto do curso. Nenhuma palavra nova tem o “j” com til
  // (só aparece dentro de uma frase do Gopi Yjxa, em “Botyj̃”, como a fonte escreve).
  //
  // A2.1 — verbos do dia a dia, tempo e casa
  ['Yryt', 'chegar', 'verbo', 'Verbos do dia a dia', '🏃', "Pyr-yryt tysyp-yn i 'a."], // SR p. 9, tab. 1, nº 112 (‘chegar’, ‘vir’, ‘trazer’); frase SUB p. 9, ex. 21 (‘lá vêm eles’)
  ['Tat', 'ir', 'verbo', 'Verbos do dia a dia', '➡️', "A-oty-p a-tat tyki-'oot y-ta-so'oot yn an-ty."], // SR p. 9, tab. 1, nº 107 (‘ir’, ‘ir embora’); frase SUB p. 5, ex. 7
  ['Hyryp', 'chorar', 'verbo', 'Verbos do dia a dia', '😢', 'Boroja taso oky tykiri naka-hyryp õwã.'], // SR p. 7, tab. 1, nº 34; frase SUB p. 11, ex. 33
  ['Ohit', 'pescar', 'verbo', 'Verbos do dia a dia', '🎣', 'Na-ohit tyka-t õwã.'], // SR p. 8, tab. 1, nº 59; frase MC10 p. 15, ex. 2
  ['Pon', 'caçar', 'verbo', 'Verbos do dia a dia', '🏹', 'I na-aka-t i-pon tyka-t.'], // SR p. 8, tab. 1, nº 76 (‘atirar’, ‘caçar’); frase SUB p. 8, ex. 19
  ['Amang', 'plantar', 'verbo', 'Verbos do dia a dia', '🌱', 'Maria na-amang gok koot.'], // MC10 p. 38, ex. 24; também SUB p. 5, ex. 6
  ['Opi', 'cortar', 'verbo', 'Verbos do dia a dia', '🪓', "Y-py-sondyp-yn yn Inácio 'ep opi-ty."], // SUB p. 14, ex. 40 (‘cut’); também ST99 p. 96, ex. 28a (‘the man cut the jaguar’)
  ['Oty', 'tomar banho', 'verbo', 'Verbos do dia a dia', '🛁', 'Y-ta-oty andyki yn.'], // MC10 p. 45, ex. 39 (“Estou indo me banhar”, citando Storto 2002)
  ['Hit', 'dar', 'verbo', 'Verbos do dia a dia', '🎁', 'Taso naka-hit õwã boetety.'], // SR p. 14, ex. 49 (bitransitivo)
  ['Pasadn', 'amar', 'verbo', 'Sentimentos', '❤️', 'Napasadnat taso tasoojoty.'], // SR p. 9, tab. 2, nº 4; frase SR p. 11, ex. 30
  ["So'oot", 'ver', 'verbo', 'Sentimentos', '👀', "Y-py-so'oot-yn yn Inácio 'ep opi-ty."], // SR p. 9, tab. 2, nº 1; frase SUB p. 14, ex. 43
  ['Pyting', 'querer', 'verbo', 'Sentimentos', '🤲', 'Y-py-pyting-yn yn him pisyp Inácio opi-ty.'], // SR p. 9, tab. 2, nº 5; frase SUB p. 14, ex. 39
  ['Sondyp', 'saber', 'verbo', 'Sentimentos', '🧠', "Y-py-sondyp-yn yn Inácio 'ep opi-ty."], // SR p. 9, tab. 2, nº 6 (‘saber’, ‘conhecer’); frase SUB p. 14, ex. 40
  ["Pa'ira", 'ficar bravo', 'verbo', 'Sentimentos', '😠', "Ti'y Marcelo 'y tykiri na-pa'ira-t João."], // SR p. 2, ex. 3 e SUB p. 4, ex. 5 (‘ficar.bravo’)
  ['Koot', 'ontem', 'advérbio', 'Tempo e lugar', '⏪', 'Maria na-amang gok koot.'], // MC10 p. 38, ex. 24
  ['Dibm', 'amanhã', 'advérbio', 'Tempo e lugar', '⏩', "Dibm y-ta-ama-j leite-ty."], // ST99 p. 135, ex. 54b (‘I will buy milk tomorrow’)
  ['Hak', 'aqui', 'advérbio', 'Tempo e lugar', '📍', "Yjxa naka-'agi-t hak."], // SUB p. 6, ex. 10 (‘there are people here’)
  ['Ambi', 'casa', 'substantivo', 'Casa', '🏡', "João naka-m-'a tyka-t ambi."], // SR p. 2, ex. 4 (taso ambi, ‘casa de homem’); frase SUB p. 10, ex. 28
  ["Ti'y", 'comida', 'substantivo', 'Casa', '🍲', "Ti'y Marcelo 'y tykiri na-pa'ira-t João."], // SR p. 2, ex. 3; SUB p. 4, ex. 5
  ['Boet', 'colar', 'substantivo', 'Casa', '📿', 'Taso naka-hit õwã boetety.'], // SR p. 14, ex. 45 e 49 (boet-<e>ty, ‘colar’); GOPI p. 10 (semente de açaí para fazer colar)
  // A2.2 — bichos, plantas e lugares da floresta (GOPI; as frases de bichos sem exemplo no livro
  // ficam com a palavra sozinha, como no resto do curso)
  ['Irip', 'anta', 'substantivo', 'Bichos da floresta', '🐾', "Iripo, de, sojxa, mydo naka 'yt irip ohy."], // GOPI p. 53; frase p. 20 (tradução p. 92: “Anta, veado, porco, cotia comem caju-do-mato.”)
  ['Mydo', 'cotia', 'substantivo', 'Bichos da floresta', '🐿️', "Mydo, sojxa, tym naka'yt gok."], // GOPI p. 58; frase p. 28 (tradução p. 92)
  ['Sojxa ty', 'queixada', 'substantivo', 'Bichos da floresta', '🐗', 'Sojxa ty.'], // GOPI p. 56; “sojxa” (‘porco selvagem’) também em SR p. 3, ex. 9
  ['Pikom', 'macaco-prego', 'substantivo', 'Bichos da floresta', '🐒', "Pikom naka kot koboty naka 'yt."], // GOPI p. 48; frase p. 12 (tradução p. 91: “O macaco quebra e come.”); “pikom” ‘macaco’ em SR p. 2, ex. 8
  ['Irisa', 'quati', 'substantivo', 'Bichos da floresta', '🦝', 'Irisa.'], // GOPI p. 60
  ['Saara', 'jacaré', 'substantivo', 'Bichos da floresta', '🐊', 'I na-oky tysyp saara.'], // GOPI p. 66 (jacaré-tinga); frase SUB p. 8, ex. 16 (‘alligator’)
  ['Iphy', 'boto', 'substantivo', 'Bichos da floresta', '🐬', 'Iphy.'], // GOPI p. 73
  ["O'i", 'bicho-preguiça', 'substantivo', 'Bichos da floresta', '🦥', "Ororo'o tym na akat o'i ti'yt."], // GOPI p. 51; frase p. 9 (tradução p. 91: “A embaúba tem uma fruta que o bicho-preguiça come.”)
  ['Iri', 'açaí', 'substantivo', 'Frutas e plantas', '🫐', 'Iri.'], // GOPI p. 10
  ['Koboty', 'cupuaçu', 'substantivo', 'Frutas e plantas', '🥥', "Sosy naka 'yt koboty nam."], // GOPI p. 12 (tradução p. 91: “O tatu come cupuaçu podre.”)
  ['Kojpá', 'abacaxi', 'substantivo', 'Frutas e plantas', '🍍', 'Kojpá.'], // GOPI p. 30
  ['Kedo', 'babaçu', 'substantivo', 'Frutas e plantas', '🌴', "Sypomp kedo Botyj̃ tiopyyj na akat: kedo'i, kedo ty."], // GOPI p. 6 (tradução p. 90: “Existem dois tipos de babaçu: babaçu pequeno, e babaçu grande.”)
  ["'Ep", 'árvore', 'substantivo', 'Frutas e plantas', '🌳', "Y-py-sondyp-yn yn Inácio 'ep opi-ty."], // SUB p. 14, ex. 40 (‘tree’); GOPI p. 32 (“Ep pip”, na árvore)
  ["Kinda'o", 'fruta', 'substantivo', 'Frutas e plantas', '🍎', "Maria naka'y tykat kinda'o."], // MC10 p. 45, ex. 40a (o GOPI escreve “kida'o”, p. 12)
  ['Him', 'caça (animal caçado)', 'substantivo', 'Bichos da floresta', '🍖', "Gok Maria amang tyki'oot na-oky-t him taso."], // SUB p. 5, ex. 6 (‘game’); GOPI p. 31 (“Him”, caças)
  ['Yro', 'formiga', 'substantivo', 'Bichinhos', '🐜', 'Yro.'], // GOPI p. 87
  ['Kedna kodn', 'borboleta', 'substantivo', 'Bichinhos', '🦋', 'Kedna kodn.'], // GOPI p. 86
  ['Tik', 'mosquito (carapanã)', 'substantivo', 'Bichinhos', '🦟', 'Tik.'], // GOPI p. 86 (“Carapanã”)
  ['Ejepi', 'terra, chão', 'substantivo', 'Lugares', '🟫', 'Ejepi.'], // GOPI p. 32 (tradução p. 93: “na terra”)
  ['Pip', 'em, para (posposição, vem depois do nome)', 'partícula', 'Lugares', '📥', 'Ese pip.'], // GOPI p. 32 (“Ese pip”, na água); SR p. 2, ex. 1 (Belém pip, ‘para Belém’); SUB p. 3, ex. 1
];

export const VOCAB_KTN = buildVocab('ktn', ROWS);
