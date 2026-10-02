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
];

export const VOCAB_KTN = buildVocab('ktn', ROWS);
