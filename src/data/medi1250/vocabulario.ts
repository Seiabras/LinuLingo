import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do latim medieval/eclesiástico (glottocode `medi1250`, "Medieval Latin" no Glottolog,
 * classificado como "Dialect" do latim-padrão `lati1261` — o mesmo status que o guarani antigo
 * `oldp1258`, já pacote próprio neste app). Sem código ISO 639-3 próprio: o latim medieval cai dentro
 * do próprio `lat`, código do pacote `la` (latim clássico) — mas, seguindo o precedente do guarani
 * antigo, este é um `LanguagePack` PRÓPRIO, não uma variação dentro de `la`. Cenário: o mosteiro de
 * Saint-Martin de Tours, por volta do ano 800, sob o abade Alcuíno de Iorque (c. 735-804) — o
 * "magister" (mestre) da Escola do Palácio de Carlos Magno em Aachen antes de se tornar abade de
 * Tours em 796, onde incentivou a escrita da minúscula carolíngia no scriptorium (fonte: Wikipédia em
 * inglês, "Alcuin", conferida via WebFetch/WebSearch em 09/10/2026).
 *
 * Cada palavra desta lista foi conferida no Wiktionary (en.wiktionary.org, seção latina, via
 * WebFetch) — a maioria das palavras cristãs/monásticas (monachus, episcopus, monasterium) vem
 * rotulada "Late Latin" no próprio Wiktionary; outras (abbas, ecclesia, scriptorium, oratio no
 * sentido de "prece", charta no sentido de mapa) são empréstimos do grego ou extensões de sentido
 * sem rótulo específico no Wiktionary, mas documentadas como uso cristão/medieval pela Wikipédia em
 * inglês ("Medieval Latin") e por citações primárias (Vulgata de Jerônimo, Regra de São Benito) — ver
 * a nota de cada palavra abaixo e o cabeçalho de `extras.ts`/`gramatica.ts` para as fontes completas.
 * As frases de exemplo seguem a MESMA gramática do latim clássico (concordância de caso/gênero/
 * número padrão, igual o pacote `la`): a Wikipédia em inglês confirma que o latim medieval muda
 * sobretudo léxico, ordem das palavras e algumas construções sintáticas (ver gramatica.ts), não a
 * morfologia nominal/verbal básica — por isso as frases não citam fonte própria, do mesmo jeito que
 * o pacote `la` já faz.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  // "pax" (paz) como saudação: sentido eclesiástico/cristão "paz, harmonia" rotulado "Ecclesiastical
  // Latin" no Wiktionary (com o exemplo "Requiescat in pace", descanse em paz); muitos beneditinos
  // ainda abrem cartas com "Pax!" hoje, mantendo um costume antigo (Abadia da Dormição, Jerusalém).
  ['pax', 'oi (lit. "paz")', 'interjeição', 'Expressões', '🕊️', 'Pax! Ego sum monachus.'],
  // "Deo gratias" (graças a Deus): resposta fixa e atestada na própria Regra de São Benito, capítulo
  // 66 ("De ostiariis monasterii"): "Et mox ut aliquis pulsaverit aut pauper clamaverit, 'Deo
  // gratias' respondeat aut 'Benedicat'" — o porteiro do mosteiro responde assim a quem bate à porta.
  ['Deo gratias', 'obrigado (lit. "graças a Deus")', 'interjeição', 'Expressões', '🙏', 'Deo gratias!'],
  // Pessoas: o mosteiro
  ['monachus', 'monge', 'substantivo', 'Pessoas', '🧎', 'Monachus bonus est.', 'm'],
  ['abbas', 'abade', 'substantivo', 'Pessoas', '🧔', 'Abbas noster sapiens est.', 'm'],
  // "frater": sentido de "irmão de sangue" já no latim clássico (ver pacote `la`), mas o Wiktionary
  // rotula "Ecclesiastical Latin" o sentido NOVO de "irmão religioso, membro de uma comunidade" — o
  // mesmo usado aqui.
  ['frater', 'irmão (monástico)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Frater meus hic habitat.', 'm'],
  // "pater": o Wiktionary lista, sem rótulo cronológico mas com atestação cristã, os sentidos
  // adicionais "sacerdote" e "título honorífico" (além do clássico "pai") — o mesmo "pater" da oração
  // "Pater Noster".
  ['pater', 'padre/pai', 'substantivo', 'Pessoas', '👨', 'Pater noster bonus est.', 'm'],
  // "episcopus": do grego ἐπίσκοπος ("supervisor"), rotulado "Late Latin" E "Ecclesiastical Latin"
  // no Wiktionary, com citações de Amiano Marcelino (380-392) e da Vulgata de Jerônimo (405).
  ['episcopus', 'bispo', 'substantivo', 'Pessoas', '🧑‍⚖️', 'Episcopus sapiens est.', 'm'],
  // Essenciais: lugares da Igreja
  // "ecclesia": do grego ἐκκλησία; o sentido "igreja" (casa de culto) não tem rótulo cronológico no
  // Wiktionary, mas é já o sentido da Vulgata de Jerônimo (Mateus 16:18, "aedificabo ecclesiam
  // meam", "edificarei minha igreja", c. 390-405).
  ['ecclesia', 'igreja', 'substantivo', 'Essenciais', '⛪', 'Ecclesia magna est.', 'f'],
  // "monasterium": do grego μοναστήριον; rotulado "Late Latin" no Wiktionary, com exemplo real da
  // "Historia ecclesiastica" de Bede (c. 731).
  ['monasterium', 'mosteiro', 'substantivo', 'Essenciais', '🏛️', 'Monasterium magnum est.', 'n'],
  // "scriptorium": derivado internamente do latim "scriptor" + "-ium"; o sentido "sala de escrita"
  // (onde os monges copiavam manuscritos) é creditado ao latim medieval pelo próprio Wiktionary, na
  // seção em inglês da entrada (origem da palavra inglesa "scriptorium").
  ['scriptorium', 'scriptorium (sala de escrita)', 'substantivo', 'Essenciais', '✍️', 'Scriptorium parvum est.', 'n'],
  ['Deus', 'Deus', 'substantivo', 'Essenciais', '✝️', 'Deus bonus est.', 'm'],
  // Escrita e livros (o trabalho do scriptorium)
  // "codex": sentido "livro, caderno" já atestado (Sêneca, "De Brevitate Vitae", c. 49 d.C., pros
  // "codices" das leis), sem rótulo cronológico no Wiktionary — mas é o sentido que os copistas
  // medievais usam para o manuscrito encadernado, em vez do rolo de papiro clássico.
  ['codex', 'códice (livro manuscrito)', 'substantivo', 'Essenciais', '📖', 'Codex antiquus est.', 'm'],
  // "littera": sentido 1, "letra do alfabeto" (Wiktionary, sem rótulo cronológico, atestado desde
  // Cícero).
  ['littera', 'letra', 'substantivo', 'Essenciais', '🔤', 'Littera parva est.', 'f'],
  // "charta": sentido 1, "papiro ou papel" (do grego χάρτης); o Wiktionary rotula "Medieval Latin"
  // só o sentido 5 ("mapa/carta geográfica") — aqui o sentido usado é o 1, mais antigo, mas a palavra
  // continua em uso central no scriptorium medieval.
  ['charta', 'papel', 'substantivo', 'Essenciais', '📄', 'Charta alba est.', 'f'],
  // "scriba": masculino de 1ª declinação (excepção à regra "1ª declinação = feminino", ver
  // gramatica.ts) — "escrevente, escriba, secretário" no Wiktionary.
  ['scriba', 'escriba', 'substantivo', 'Pessoas', '🖋️', 'Scriba sapiens est.', 'm'],
  ['liber', 'livro', 'substantivo', 'Essenciais', '📚', 'Liber magnus est.', 'm'],
  ['psalmus', 'salmo', 'substantivo', 'Essenciais', '🎶', 'Psalmus pulcher est.', 'm'],
  // "oratio": sentido 8 do Wiktionary, "prece, discurso a uma divindade" — sem rótulo cronológico,
  // mas é o sentido que dá o português "oração" (prece).
  ['oratio', 'oração', 'substantivo', 'Essenciais', '🙇', 'Oratio brevis est.', 'f'],
  ['regula', 'regra', 'substantivo', 'Essenciais', '📏', 'Regula bona est.', 'f'],
  // Verbos do scriptorium e da capela
  ['orare', 'rezar', 'verbo', 'Verbos-chave', '🕯️', 'Orare bonum est.'],
  ['legere', 'ler', 'verbo', 'Verbos-chave', '👀', 'Legere bonum est.'],
  ['scribere', 'escrever', 'verbo', 'Verbos-chave', '✒️', 'Scribere bonum est.'],
  ['cantare', 'cantar', 'verbo', 'Verbos-chave', '🎵', 'Cantare bonum est.'],
  ['magister', 'mestre', 'substantivo', 'Pessoas', '🎓', 'Magister sapiens est.', 'm'],

  // --- A2.1: a vila ao redor do mosteiro (granja, rebanhos, colheita) ---
  // Os mosteiros carolíngios viviam de terras próprias (villae/granjas) trabalhadas por camponeses
  // livres e semilivres — sentido medieval bem documentado de "villa" (do sentido clássico "casa de
  // campo" para "vilarejo/propriedade rural"), confirmado no Wiktionary (verbete "villa", seção de
  // etimologia e descendentes romances: it. "villa", fr. "ville", pt. "vila").
  ['villa', 'vila, cidadezinha', 'substantivo', 'Essenciais', '🏡', 'Villa parva est.', 'f'],
  // "rex"/"regina": palavras clássicas, centrais à administração carolíngia (Carlos Magno foi "rex
  // Francorum" antes de imperador).
  ['rex', 'rei', 'substantivo', 'Pessoas', '👑', 'Rex sapiens est.', 'm'],
  ['regina', 'rainha', 'substantivo', 'Pessoas', '👑', 'Regina bona est.', 'f'],
  // "miles": clássico "soldado/combatente"; no latim medieval ganha o sentido mais específico de
  // "cavaleiro" (o guerreiro vassalo a cavalo), sentido que o Wiktionary rotula entre os usos
  // medievais da palavra — a mesma raiz do português "milícia".
  ['miles', 'soldado', 'substantivo', 'Essenciais', '🪖', 'Miles fortis est.', 'm'],
  // "rusticus": clássico "do campo, camponês" (de "rus", campo) — segue com o mesmo sentido no latim
  // medieval, designando quem trabalha a terra da villa do mosteiro.
  ['rusticus', 'camponês', 'substantivo', 'Pessoas', '🧑‍🌾', 'Rusticus in agro laborat.', 'm'],
  // "pastor": sentido literal "pastor de ovelhas" e, já na Vulgata (João 10:11, "ego sum pastor
  // bonus", eu sou o bom pastor), sentido eclesiástico de "guia espiritual" — os dois sentidos
  // convivem no vocabulário do mosteiro.
  ['pastor', 'pastor', 'substantivo', 'Pessoas', '🐑', 'Pastor ovem habet.', 'm'],
  ['ovis', 'ovelha', 'substantivo', 'Essenciais', '🐑', 'Ovis in agro est.', 'f'],
  ['bos', 'boi', 'substantivo', 'Essenciais', '🐂', 'Bos magnus est.', 'm'],
  ['ager', 'campo', 'substantivo', 'Essenciais', '🌾', 'Ager rusticii magnus est.', 'm'],
  ['semen', 'semente', 'substantivo', 'Essenciais', '🌱', 'Semen in agro est.', 'n'],
  ['messis', 'colheita', 'substantivo', 'Essenciais', '🌾', 'Messis bona est.', 'f'],
  ['annus', 'ano', 'substantivo', 'Essenciais', '📅', 'Hic annus bonus est.', 'm'],
  // "unus": o numeral que começa a virar artigo indefinido (ver gramatica.ts, medi1250-g5) — raiz do
  // português "um/uma", do francês "un/une", do italiano "uno/una".
  ['unus', 'um (numeral)', 'numeral', 'Números', '1️⃣', 'Unus rusticus.'],

  // --- A2.2: no mercado e na corte (comparação, afirmação com "sic") ---
  ['mercatus', 'mercado', 'substantivo', 'Essenciais', '🏺', 'Mercatus in villa est.', 'm'],
  // "denarius": a moeda romana que sobrevive, de nome, em meio mundo medieval e moderno — do latim
  // "denarius" vêm o francês antigo "denier", o português "dinheiro" (sentido genérico de moeda) e
  // até a abreviação "d." das antigas libras-xelins-dinheiros britânicas.
  ['denarius', 'moeda', 'substantivo', 'Essenciais', '🪙', 'Denarius parvus est.', 'm'],
  ['iudex', 'juiz', 'substantivo', 'Pessoas', '🧑‍⚖️', 'Iudex sapiens est.', 'm'],
  ['lex', 'lei', 'substantivo', 'Essenciais', '📜', 'Lex bona est.', 'f'],
  ['medicus', 'médico', 'substantivo', 'Pessoas', '🩺', 'Medicus sapiens est.', 'm'],
  // "amicus": aparece só nos exemplos de outras entradas até aqui ("ami" é do pacote fro) — agora
  // vira palavra própria do vocabulário do latim medieval.
  ['amicus', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Amicus meus fortis est.', 'm'],
  // "sic": no latim clássico, só o advérbio "assim/desta forma" — no latim vulgar e medieval, ganha o
  // uso como partícula afirmativa ("sim"), documentado por Grandgent ("An Introduction to Vulgar
  // Latin", 1907) como a raiz do italiano "sì" e do espanhol "sí" (ver gramatica.ts, medi1250-g7).
  ['sic', 'sim', 'advérbio', 'Essenciais', '👍', 'Sic, amicus sum.'],
  // "magis": advérbio comparativo que substitui o comparativo sintético clássico (ver gramatica.ts,
  // medi1250-g8) — raiz do português "mais".
  ['magis', 'mais', 'advérbio', 'Essenciais', '➕', 'Miles magis fortis est.'],
  ['fortis', 'forte', 'adjetivo', 'Essenciais', '💪', 'Miles fortis est.'],
  // "sapiens": aparecia só em frases de exemplo de outras palavras ("Abbas noster sapiens est") até
  // aqui — agora recebe entrada própria.
  ['sapiens', 'sábio', 'adjetivo', 'Essenciais', '🦉', 'Iudex sapiens est.'],
  ['bonus', 'bom', 'adjetivo', 'Essenciais', '👍', 'Rex bonus est.'],
  ['malus', 'mau', 'adjetivo', 'Essenciais', '👎', 'Iudex malus non est bonus.'],
];

export const VOCAB_MEDI1250 = buildVocab('medi1250', ROWS);
