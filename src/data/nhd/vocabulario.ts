import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do guarani ÑANDEVA, também chamado avá guarani ou avá chiripá (código ISO 639-3
 * «nhd»: o Ethnologue registra «Chiripá» como nome alternativo do mesmo código «Ava Guaraní»,
 * confirmando que ñandeva, avá guarani e avá chiripá são a MESMA língua, só com nomes diferentes no
 * Brasil, no Paraguai e na literatura internacional — não três línguas distintas). Falado por
 * comunidades indígenas distribuídas pelo Mato Grosso do Sul (onde o povo é um dos três subgrupos
 * guarani do estado, ao lado do kaiowá e do mbyá) e por outras regiões do Brasil (São Paulo, Paraná,
 * Santa Catarina, Rio Grande do Sul), além do leste do Paraguai e da província de Misiones, na
 * Argentina. DIFERENTE do guarani paraguaio padrão (pacote «gn» deste app), do guarani mbyá (pacote
 * «gun») e do guarani kaiowá (pacote «kgk»): as quatro pertencem à família tupi-guarani (ramo
 * guarani), com alta semelhança lexical entre si, mas cada uma tem fonologia, vocabulário e gramática
 * próprios, documentados por fontes específicas — nenhuma palavra foi aproveitada de gn/gun/kgk sem
 * conferir especificamente para o ñandeva.
 *
 * Cada palavra foi conferida em pelo menos uma fonte real e específica do ñandeva antes de entrar
 * aqui. Fontes principais (ver o relatório da tarefa para a lista completa, inclusive palavras
 * descartadas por falta de confirmação):
 *  - Edson Amaurílio, «Elementos para uma Sociolinguística do Guarani: o Ñandeva falado na Reserva
 *    Indígena de Porto Lindo-Japorã-MS» (dissertação de mestrado, UFGD, 2019, lida no original em
 *    pantheon.ufrj.br/bitstream/11422/23412/1/EAmaurilio.pdf) — a fonte mais importante: dados de
 *    campo do Ñandeva-PL (Porto Lindo, Japorã, Mato Grosso do Sul) comparados com o Nhandewa de São
 *    Paulo/Paraná, o kaiowá e o avañe'ẽ (guarani paraguaio), com tabelas (“quadros”) que mostram
 *    exatamente qual forma é do Ñandeva-PL e qual é das outras variedades — usada para «xe» (eu),
 *    «nde» (você), «kuña», «kuñatai», «mitã», «machu», «tetyma», «y» (água, forma não duplicada do
 *    Ñandeva-PL), «jagua», «jaguaretê», «mbarakaja», «ayvu», «ñe'ẽ», «ysyry», «petei», os
 *    interrogativos «maã», «moõ», «mba'e», «araka'e», «mba'echa» e o léxico comparativo dos quadros
 *    23, 27 e 31 da dissertação;
 *  - Consuelo de Paiva Godinho Costa, «Nhandewa Aywu» (dissertação de mestrado em Linguística,
 *    IEL/Unicamp, 2003, orientação de Wilmar da Rocha D'Angelis), sobre a fonologia do Nhandewa-
 *    Guarani falado em comunidades de São Paulo e norte do Paraná — mesma língua (nhd), comunidades
 *    que migraram historicamente da região de origem; lida no original (texto completo em
 *    biblioteca.funai.gov.br/media/pdf/TESES/MFN-30584.pdf, com camada de texto OCR) — usada para
 *    «nhande», «akã», «yuru», «pürü'ã», «ywy», «ywyra», «oky», «yvyty», «porã», «pytã», «ãtã»,
 *    «pyta», «pota», «mombo», «o», «u», «pety» e «tape», todas com transcrição fonética no original;
 *  - pib.socioambiental.org/pt/Povo:Guarani_Ñandeva (ISA, Instituto Socioambiental) — usada para
 *    «tamõi», «jari», «mburuvixa», «teko», «tekoha» e «ka'aguy», e para a população e a região;
 *  - en.wikipedia.org/wiki/Ava_Guarani_language — confirma o código ISO 639-3 «nhd» e que Chiripá,
 *    Ava Guarani e Nhandéva/Ñandeva são nomes do mesmo idioma;
 *  - antropos.org.uk/65-guarani-nhandeva/ — usada para «mbaraka» (confirmado também, de forma
 *    independente, para o kaiowá no pacote «kgk», mas aqui citado por fonte própria do ñandeva).
 * Números: só «petei» (um) e «mbohapy» (três) puderam ser confirmados em fontes específicas do
 * ñandeva — «dois» e «quatro» apareceram só em material de ensino do avañe'ẽ/kaiowá (livro «Avañe'ẽ»,
 * UEMS, 2015, de autores kaiowá), por isso ficaram de fora: preferimos um vocabulário menor, mas
 * 100% verificado, a completar a contagem usando uma fonte de outra variedade (mesmo critério do
 * pacote de tikuna, «src/data/tca/»).
 *
 * Grafia: as duas fontes principais usam convenções um pouco diferentes para os mesmos sons —
 * Amaurílio (Ñandeva-PL, Porto Lindo) escreve «x» e «j», Costa (Nhandewa-SP/PR) escreve «tx»/«ts» e
 * «dj» — por isso «Txeakã» (minha cabeça, de Costa) convive aqui com «Xe» (eu, de Amaurílio): é a
 * mesma língua (nhd), com duas variantes regionais documentadas por pesquisadoras diferentes, não um
 * erro de grafia. As frases de exemplo combinam só palavras confirmadas, seguindo as regras de ordem
 * encontradas nas próprias fontes: numeral antes do substantivo (Amaurílio: «mbohapy ambue ñe'e»,
 * “três outras línguas”), adjetivo depois (Amaurílio: «petei mba'e iporãva», “uma coisa boa”, com o
 * sufixo -va), e pronome ou substantivo diretamente antes de outro substantivo marcando posse, sem
 * verbo “ser” (Costa: «nhande tamõi», nosso avô; «nhande djaryi», nossa avó) — nunca uma conjugação
 * verbal inventada por semelhança com o guarani paraguaio, o mbyá ou o kaiowá.
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas ──
  ['ñandeva', 'nós, nosso povo (autodesignação do povo e da própria língua)', 'pronome', 'Pessoas', '🤝', 'Xe ñandeva.'],
  ['xe', 'eu', 'pronome', 'Pessoas', '🙋', 'Xe ava.'],
  ['nde', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Nde ava.'],
  ['nhande', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Nhande tamõi.'],
  ['ava', 'gente, pessoa, indígena', 'substantivo', 'Pessoas', '🧑', 'Petei ava.'],
  ['kuña', 'mulher', 'substantivo', 'Pessoas', '👩', 'Petei kuña.'],
  ['kuñatai', 'moça, mulher jovem', 'substantivo', 'Pessoas', '👧', 'Mbohapy kuñatai.'],
  ['mitã', 'criança', 'substantivo', 'Pessoas', '🧒', 'Mbohapy mitã.'],
  // ── Família ──
  ['tamõi', 'avô; também um ancestral mítico ou um líder espiritual de uma família extensa', 'substantivo', 'Família', '👴', 'Nhande tamõi.'],
  ['jari', 'avó; também uma líder espiritual de uma família extensa (variante: djaryi)', 'substantivo', 'Família', '👵', 'Nhande jari.'],
  ['machu', 'bisavó (no uso mais antigo; hoje também usada para “avó”)', 'substantivo', 'Família', '🧓', 'Petei machu.'],
  ['mburuvixa', 'chefe, liderança política (variante: tuvixa)', 'substantivo', 'Família', '🧑‍💼', 'Petei mburuvixa.'],
  // ── Corpo ──
  ['akã', 'cabeça (nome de posse obrigatória: “txeakã”, minha cabeça)', 'substantivo', 'Corpo', '🗣️', 'Txeakã.'],
  ['yuru', 'boca (nome de posse obrigatória: “neyuru”, sua boca)', 'substantivo', 'Corpo', '👄', 'Neyuru.'],
  ['pürü\'ã', 'umbigo', 'substantivo', 'Corpo', null, 'Mitã pürü\'ã.'],
  ['tetyma', 'canela, perna', 'substantivo', 'Corpo', '🦵', 'Mitã tetyma.'],
  // ── Natureza ──
  ['y', 'água', 'substantivo', 'Natureza', '💧', 'Petei y.'],
  ['ywy', 'terra', 'substantivo', 'Natureza', '🌍', 'Ywy porã.'],
  ['ywyra', 'árvore', 'substantivo', 'Natureza', '🌳', 'Petei ywyra.'],
  ['oky', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Oky porã.'],
  ['yvyty', 'serra, montanha', 'substantivo', 'Natureza', '⛰️', 'Petei yvyty.'],
  ['ka\'aguy', 'mata, floresta', 'substantivo', 'Natureza', '🌲', 'Ka\'aguy porã.'],
  ['ysyry', 'rio', 'substantivo', 'Natureza', '🏞️', 'Petei ysyry.'],
  // ── Animais ──
  ['jagua', 'cachorro', 'substantivo', 'Animais', '🐕', 'Petei jagua.'],
  ['jaguaretê', 'onça', 'substantivo', 'Animais', '🐆', 'Petei jaguaretê.'],
  ['mbarakaja', 'gato', 'substantivo', 'Animais', '🐈', 'Petei mbarakaja.'],
  // ── Descrições ──
  ['porã', 'bom, bonito', 'adjetivo', 'Descrições', '👍', 'Ywy porã.'],
  ['pytã', 'vermelho', 'adjetivo', 'Descrições', '🔴', 'Jaguaretê pytã.'],
  ['ãtã', 'duro', 'adjetivo', 'Descrições', null, 'Ywyra ãtã.'],
  // ── Verbos-chave ──
  ['ayvu', 'falar (uso tradicional; entre falantes mais jovens, “ñe\'ẽ” é mais comum para “falar”)', 'verbo', 'Verbos-chave', '💬', 'Ayvu porã.'],
  ['pyta', 'ficar', 'verbo', 'Verbos-chave', '📍', 'Pyta porã.'],
  ['pota', 'querer, gostar', 'verbo', 'Verbos-chave', '❤️', 'Xe pota.'],
  ['mombo', 'jogar, lançar', 'verbo', 'Verbos-chave', '🎯', 'Xe mombo.'],
  ['o', 'ir (raiz verbal curta, usada sobretudo com outros morfemas)', 'verbo', 'Verbos-chave', '🚶', 'Xe o.'],
  ['u', 'vir (raiz verbal curta, usada sobretudo com outros morfemas)', 'verbo', 'Verbos-chave', null, 'Xe u.'],
  // ── Perguntas ──
  ['maã', 'quem', 'pronome', 'Perguntas', '❓', 'Maã ava?'],
  ['moõ', 'onde', 'advérbio', 'Perguntas', '📍', 'Moõ tekoha?'],
  ['mba\'e', 'o que, coisa', 'pronome', 'Perguntas', '❓', 'Mba\'e kuaa?'],
  ['araka\'e', 'quando', 'advérbio', 'Perguntas', '⏰', 'Araka\'e o?'],
  ['mba\'echa', 'como (forma do Ñandeva-PL, sem a partícula “-pa” usada no avañe\'ẽ)', 'advérbio', 'Perguntas', '❓', 'Mba\'echa nde?'],
  // ── Números ──
  ['petei', 'um, uma', 'numeral', 'Números', '1️⃣', 'Petei jari.'],
  ['mbohapy', 'três (variante: moapy)', 'numeral', 'Números', '3️⃣', 'Mbohapy ava.'],
  // ── Cultura ──
  ['tekoha', 'aldeia, território: o lugar onde se pratica o teko', 'substantivo', 'Cultura', '🏘️', 'Tekoha porã.'],
  ['teko', 'modo de ser, modo de vida', 'substantivo', 'Cultura', '🌿', 'Nhande teko.'],
  ['ñe\'ẽ', 'língua, fala, palavra; também “alma” (até três sentidos para uma só palavra)', 'substantivo', 'Cultura', '💬', 'Ñandeva ñe\'ẽ.'],
  ['mbaraka', 'chocalho sagrado, usado em cantos e rituais', 'substantivo', 'Cultura', '🪇', 'Petei mbaraka.'],
  ['pety', 'fumo, tabaco (usado em rituais; nome de posse obrigatória: “nepety”, seu fumo)', 'substantivo', 'Cultura', '🚬', 'Nepety.'],
  ['tape', 'caminho', 'substantivo', 'Cultura', '🛤️', 'Tape porã.'],
];

export const VOCAB_NHD = buildVocab('nhd', ROWS);
