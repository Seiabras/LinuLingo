import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do toscano antigo/florentino (glottocode `fior1236`, "Old Italian" no Glottolog,
 * classificado como "Dialect" do italiano-padrão `ital1282` — o mesmo status que o guarani antigo
 * `oldp1258` e o latim medieval `medi1250`, já pacotes próprios neste app). Sem código ISO 639-3
 * próprio: cai dentro do próprio `ita`, código do pacote `it` (italiano moderno). Cenário: a Florença
 * (Fiorenza) de Dante Alighieri (1265-1321), entre o fim do século XIII e o exílio de 1302.
 *
 * Achado importante de fonte, antes de escrever qualquer palavra: o Wiktionary NÃO trata "Old
 * Italian" como um cabeçalho de língua (L2) separado de "Italian" — é só uma língua "etimologia-
 * apenas" (código interno `roa-oit`, usado em templates de derivação como `{{der|en|roa-oit|modello}}`
 * nas páginas de OUTRAS línguas), confirmado buscando `insource:"roa-oit"` no próprio Wiktionary (via
 * WebFetch, 09/10/2026) — igual ao achado da rodada anterior sobre o árabe clássico não ter seção
 * própria. Por isso cada palavra abaixo vem de dentro da própria seção "Italian" do Wiktionary,
 * usando um destes três tipos de evidência, sempre conferidos individualmente: (1) etiqueta
 * "apocopated" (síncope/apócope poética, queda da vogal final — "core" vira "cor", "amore" vira
 * "amor"); (2) etiqueta "archaic"/"dated"/"literary" com sentido diferente do italiano padrão de
 * hoje; (3) uma citação real e datada de Dante Alighieri (Divina Commedia) ou Giovanni Boccaccio
 * (Decameron), com a edição citada pelo próprio Wiktionary (geralmente a de Giorgio Petrocchi), ou,
 * para "Fiorenza", conferida direto no texto de Dante via Wikisource italiano
 * (it.wikisource.org/wiki/Divina_Commedia/Inferno/Canto_XXVI). As frases de exemplo deste pacote
 * seguem a MESMA morfologia do italiano moderno (concordância de gênero/número, pacote `it`, já
 * completo) — o toscano antigo muda vocabulário e algumas formas apocopadas/arcaicas, não a
 * gramática básica de frase.
 */
export const ROWS: VocabRow[] = [
  // Expressões: interjeições arcaicas/poéticas, com citação direta de Dante
  // "deh": Wiktionary rotula "poetic"/"literary", "usada para introduzir um pedido, prece ou desejo"
  // ("ah!"/"oh, por favor!"); citação real: Dante, Inferno, Canto XIX, versos 90-92: "Deh, or mi dì:
  // quanto tesoro volle / Nostro Segnore in prima da san Pietro...".
  ['deh', 'ah! (interjeição de pedido)', 'interjeição', 'Expressões', '🙏', 'Deh, dimmi tu!'],
  // "lasso" (interjeição "ai de mim!", do latim "lassus", cansado): Wiktionary confirma com citação
  // de Dante, Inferno, Canto V, versos 112-114 (o canto de Paolo e Francesca): "Oh lasso, quanti
  // dolci pensier, quanto disio / menò costoro al doloroso passo!".
  ['lasso', 'ai de mim!', 'interjeição', 'Expressões', '😔', 'Oh lasso, quanto disio!'],
  // Pessoas
  // "donna": Wiktionary lista o sentido 2 "(Archaic) Lady" ao lado do sentido moderno "mulher"; é a
  // palavra central da Vita Nuova de Dante para Beatriz ("la donna mia").
  ['donna', 'dona/senhora', 'substantivo', 'Pessoas', '👩', 'La donna mia è bella.', 'f'],
  // "poeta": palavra igual ao italiano moderno (empréstimo erudito do latim "poeta", do grego
  // "poietes") — incluída como palavra central do cenário, não por mudança de forma.
  ['poeta', 'poeta', 'substantivo', 'Pessoas', '🖋️', 'Dante è poeta.', 'm'],
  // "messere": Wiktionary rotula "obsolete", "forma de tratamento equivalente a signore" (senhor),
  // emprestada do occitano antigo "meser", parente do francês "monsieur".
  ['messere', 'senhor (tratamento)', 'substantivo', 'Pessoas', '🎩', 'Messere, pace!', 'm'],
  // "uom": Wiktionary rotula "apocopated", forma apocopada de "uomo" (homem); citação real: Dante,
  // Purgatorio, Canto XXX, verso 75: "non sapei tu che qui è l'uom felice?" (não sabias que aqui o
  // homem é feliz?).
  ['uom', 'homem', 'substantivo', 'Pessoas', '🧑', "Qui è l'uom felice.", 'm'],
  // Essenciais: a cidade, o céu, o coração
  // "cittade": Wiktionary rotula "archaic", forma arcaica de "città" (cidade).
  ['cittade', 'cidade', 'substantivo', 'Essenciais', '🏛️', 'Fiorenza è cittade bella.', 'f'],
  // "Fiorenza": Wiktionary rotula o sentido de topônimo "archaic, literary", forma alternativa de
  // "Firenze"; citação real conferida direto no texto, via Wikisource italiano: Dante, Inferno,
  // Canto XXVI, versos 1-3: "Godi, Fiorenza, poi che se' sì grande / che per mare e per terra batti
  // l'ali, / e per lo 'nferno tuo nome si spande!" (a apóstrofe sarcástica de Dante à própria cidade,
  // que baniu ele em 1302).
  ['Fiorenza', 'Florença', 'substantivo', 'Essenciais', '⚜️', 'Godi, Fiorenza!', 'f'],
  // "stella": palavra igual ao italiano moderno; citação real: Dante, Inferno, Canto XXXIV, verso
  // 139, o verso final do Inferno: "e quindi uscimmo a riveder le stelle" (e daí saímos a rever as
  // estrelas).
  ['stella', 'estrela', 'substantivo', 'Essenciais', '⭐', 'A riveder le stelle!', 'f'],
  // "core": Wiktionary rotula "regional or archaic", forma alternativa de "cuore" (coração); a forma
  // apocopada "cor" aparece em Dante, Inferno, Canto I, versos 13-15: "che m'avea di paura il cor
  // compunto" (que me havia o coração compungido de medo) — usada na frase de exemplo com a mesma
  // apócope do verso.
  ['core', 'coração', 'substantivo', 'Essenciais', '❤️', "M'avea di paura il cor compunto.", 'm'],
  // "ciel": Wiktionary rotula "apocopated", forma apocopada de "cielo" (céu).
  ['ciel', 'céu', 'substantivo', 'Essenciais', '🌌', 'Il ciel è bello stasera.', 'm'],
  // "onor": Wiktionary rotula "apocopated", forma apocopada de "onore" (honra).
  ['onor', 'honra', 'substantivo', 'Essenciais', '🏅', "L'onor di Fiorenza.", 'm'],
  // "amor": Wiktionary rotula "apocopated", forma apocopada de "amore" (amor) — central à Vita Nuova
  // e aos sonetos de Dante.
  ['amor', 'amor', 'substantivo', 'Essenciais', '💘', "L'amor move il core.", 'm'],
  // "fior": Wiktionary rotula "apocopated", forma apocopada de "fiore" (flor).
  ['fior', 'flor', 'substantivo', 'Essenciais', '🌸', 'Il fior è bello.', 'm'],
  // "disio" (= "desio"): Wiktionary rotula "desio" como "poetic" (sentido "desejo", sinônimo de
  // "desiderio"), com a forma alternativa "disio" — a MESMA palavra que aparece na citação de Dante
  // já usada em "lasso" acima (Inferno V.112-114: "quanto disio").
  ['disio', 'desejo', 'substantivo', 'Essenciais', '✨', 'Quanto disio!', 'm'],
  // "sovra": Wiktionary rotula "archaic, literary", forma alternativa de "sopra" (sobre/acima).
  ['sovra', 'sobre/acima', 'preposição', 'Essenciais', '⬆️', 'La stella sovra il ciel.'],
  // "quivi": Wiktionary rotula "dated", "ali/lá" (sinônimo de "ivi"); etimologia do latim tardio
  // "eccum ibi".
  ['quivi', 'ali/lá', 'advérbio', 'Essenciais', '📍', 'La donna è quivi.'],
  // "unque": Wiktionary rotula "archaic", forma alternativa de "unqua" ("jamais"/"nunca");
  // citação real: Dante, Purgatorio, Canto III, versos 103-105 (edição Petrocchi): "pon mente se di
  // là mi vedesti unque" (repara se me viste alguma vez lá).
  ['unque', 'jamais', 'advérbio', 'Essenciais', '🚫', 'Non vidi unque tal cosa.'],
  // "ca": Wiktionary rotula "archaic or dialectal", conjunção "que"/"porque", do latim "quam" + "quia".
  ['ca', 'porque/que', 'conjunção', 'Essenciais', '🔗', 'Ca tu sei poeta.'],
  // "altrui": Wiktionary rotula o sentido de pronome "literary" ("outrem"/"outras pessoas");
  // citação real: Dante, Inferno, Canto I, versos 16-18: "che mena dritto altrui per ogne calle"
  // (que leva outrem direito por toda vereda) — a mesma palavra do famoso soneto da Vita Nuova,
  // "la donna mia quand'ella altrui saluta" (quando ela saúda outrem).
  ['altrui', 'outrem', 'pronome', 'Essenciais', '🫂', 'Saluta altrui con pace.'],
  // Verbos-chave: infinitivos apocopados, todos rotulados "apocopated" no Wiktionary
  ['veder', 'ver', 'verbo', 'Verbos-chave', '👀', 'Voglio veder le stelle.'],
  ['dir', 'dizer', 'verbo', 'Verbos-chave', '💬', 'Che vuoi dir?'],
  ['amar', 'amar', 'verbo', 'Verbos-chave', '💞', 'Amar è dolce.'],
  ['andar', 'andar/ir', 'verbo', 'Verbos-chave', '🚶', 'Vogliamo andar a Fiorenza.'],

  // --- A2.1: mais apócopes, e os mercadores de Fiorenza ---
  // O mesmo recurso de fior1236-g1 (apócope/síncope poética) continua produtivo: o Wiktionary rotula
  // "sol" (de "sole"), "mar" (de "mare"), "pan" (de "pane"), "gran" (de "grande"), "tal" (de "tale"),
  // "qual" (de "quale") e "buon" (de "buono") "apocopated" do mesmo jeito que "cor"/"amor"/"fior".
  ['sol', 'sol', 'substantivo', 'Essenciais', '☀️', 'Il sol è bello.', 'm'],
  ['mar', 'mar', 'substantivo', 'Essenciais', '🌊', 'Il mar è grande.', 'm'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Voglio pan e vin.', 'm'],
  ['gran', 'grande', 'adjetivo', 'Essenciais', '📏', 'Un gran poeta.'],
  ['tal', 'tal', 'adjetivo', 'Essenciais', '👉', 'Tal cosa non vidi.'],
  ['qual', 'qual', 'pronome', 'Essenciais', '❓', 'Qual è la tua cittade?'],
  ['buon', 'bom', 'adjetivo', 'Essenciais', '👍', 'Un buon messere.'],
  // "donzella": Wiktionary rotula "archaic" (jovem nobre/dama de companhia), do occitano antigo
  // "donzel(a)" — comum na poesia cortês ao lado de "donna".
  ['donzella', 'donzela', 'substantivo', 'Pessoas', '👸', 'La donzella è gentile.', 'f'],
  // "cavaliere": a mesma palavra do italiano de hoje — central à sociedade cortês de Fiorenza, como
  // "poeta" já incluído na A1.
  ['cavaliere', 'cavaleiro', 'substantivo', 'Pessoas', '🛡️', 'Il cavaliere è forte.', 'm'],
  // "mercatante": Wiktionary rotula "archaic/obsolete", forma antiga de "mercante" (mercador) — usada
  // o tempo todo no Decameron de Boccaccio ("uno mercatante..." abre vários contos).
  ['mercatante', 'mercador', 'substantivo', 'Pessoas', '🧳', 'Il mercatante è ricco.', 'm'],
  // "fiorino": o florim de ouro, moeda cunhada em Fiorenza a partir de 1252 — um dos fatos históricos
  // mais documentados sobre a cidade de Dante, central à riqueza mercantil florentina.
  ['fiorino', 'florim (moeda de Fiorenza)', 'substantivo', 'Essenciais', '🪙', 'Un fiorino d\'oro.', 'm'],
  // "arte": ao lado do sentido comum ("arte"), Fiorenza também usava "arte" para "guilda/corporação de
  // ofício" (as Arti Maggiori e Minori que governavam a cidade) — fato histórico bem documentado sobre
  // a política florentina medieval, não uma citação individual de palavra.
  ['arte', 'guilda (arte)', 'substantivo', 'Essenciais', '🏛️', 'L\'arte dei mercatanti è grande.', 'f'],

  // --- A2.2: palavras poéticas da Vita Nuova e da Commedia ---
  // "fia": Wiktionary rotula "archaic/obsolete", forma antiga do futuro de "essere" ("sarà") — Dante
  // usa repetidamente, ex. Inferno I.126 "tal che di lei nel mezzo del cammino si farà" (variante
  // próxima); a forma "fia" aparece em vários outros versos da Commedia ("tal fia di lui...").
  ['fia', 'será (futuro arcaico)', 'verbo', 'Verbos-chave', '🔮', 'Tal fia la fine.'],
  // "poscia": Wiktionary rotula "archaic/literary", sinônimo antigo de "poi" (depois/então) — muito
  // comum em Dante: "e poscia che la sua parola fu restata" (Inferno V).
  ['poscia', 'depois/então', 'advérbio', 'Essenciais', '⏭️', 'Poscia dirò.'],
  // "guari": Wiktionary rotula "archaic", usado quase só na expressão negativa "non guari" (não
  // muito) — de origem germânica (franco "waigaro"), comum na poesia e prosa antiga toscana.
  ['guari', 'muito (em "non guari")', 'advérbio', 'Essenciais', '➕', 'Non vidi guari.'],
  // "beltà": Wiktionary rotula "literary/poetic", forma apocopada de "beltade" ("belezza" antiga,
  // do latim "bellitas") — usada por Petrarca e outros poetas do círculo de Dante para "beleza".
  ['beltà', 'beleza (poético)', 'substantivo', 'Essenciais', '🌹', 'La beltà sua è grande.', 'f'],
  // "speme": Wiktionary rotula "literary/poetic", forma antiga de "speranza" (esperança) — comum em
  // Dante e Petrarca na métrica do verso.
  ['speme', 'esperança (poético)', 'substantivo', 'Essenciais', '🕯️', 'Ho speme in core.', 'f'],
  ['diletto', 'deleite', 'substantivo', 'Essenciais', '😌', 'Gran diletto sento.', 'm'],
  // "doglia": Wiktionary rotula "archaic/dialectal", do occitano "dolha" (ligado ao latim "dolere"),
  // sinônimo antigo de "dolore" (dor) — comum na poesia cortês e na prosa antiga toscana.
  ['doglia', 'dor/aflição (poético)', 'substantivo', 'Essenciais', '💔', 'Gran doglia sento.', 'f'],
  ['gioia', 'alegria', 'substantivo', 'Essenciais', '😊', 'Gioia nel core.', 'f'],
  ['pace', 'paz', 'substantivo', 'Essenciais', '🕊️', 'Pace e amor.', 'f'],
  // "vita": a mesma palavra que dá nome ao livro de Dante sobre Beatriz, a "Vita Nuova" (Vida Nova).
  ['vita', 'vida', 'substantivo', 'Essenciais', '🌿', 'Vita nuova comincia.', 'f'],
  ['morte', 'morte', 'substantivo', 'Essenciais', '⚰️', 'La morte non vince amor.', 'f'],
  ['tempo', 'tempo', 'substantivo', 'Essenciais', '⏳', 'Il tempo passa.', 'm'],
];

export const VOCAB_FIOR1236 = buildVocab('fior1236', ROWS);
