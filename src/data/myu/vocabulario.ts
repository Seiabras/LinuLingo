import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mundurukú (myu), língua do tronco Tupi falada pelo povo Munduruku (autodenominação
 * wuyjuyũ, “gente”) no vale do rio Tapajós e seus afluentes (Pará), no rio Madeira (Amazonas) e no
 * norte de Mato Grosso. Forma, com o kuruáya (já sem falantes), uma família própria do tronco Tupi
 * — não é tupi-guarani.
 *
 * Fontes conferidas, palavra por palavra:
 *   [P] Gessiane Lobato Picanço, “Introdução ao Mundurukú: fonética, fonologia e ortografia”
 *       (Cadernos de Etnolingüística, Série Monografias 3, 2012; etnolinguistica.org/mono:3). Feita
 *       para a Licenciatura de Professores Indígenas — Turma Mundurukú (FACED/UFAM), que adotou a
 *       ortografia de Marjorie Crofts, a mais difundida entre os Munduruku. É a fonte PRINCIPAL da
 *       grafia: cada exemplo vem em forma fonêmica, ortográfica e fonética (com o tom marcado).
 *   [G] Dioney Moreira Gomes, “Estudo morfológico e sintático da língua Mundurukú (Tupí)” (tese de
 *       doutorado, UnB, 2006, orientação de Aryon Rodrigues; repositorio.unb.br/handle/10482/3754):
 *       pronomes (tabela 4.1), posse (tabelas 1.2-1.3), numerais (§4.1.2.1), partículas g̃u, puk,
 *       cuk e juy/cuy (§4.5), reduplicação (§2.2.1). Escrita na ortografia em uso pelos Munduruku.
 *       No PDF, os caracteres com til (g̃, ũ, ẽ) estão numa fonte especial que não se extrai bem;
 *       por isso cada forma com til foi conferida em [C] e no [NT].
 *   [C] Marjorie Crofts, “Gramática Munduruku” (SIL, trad. de Mary I. Daniel, 1973; acervo ISA,
 *       MUL00004): diálogos de saudação e despedida (§1.1.1-1.1.3) e o “Formulário dos vocabulários
 *       padrões” do Museu Nacional (apêndice C, itens numerados, dialeto do rio Cururu). Está em
 *       transcrição fonêmica com tons em número; ao copiar, troquei só os símbolos pela letra da
 *       ortografia da própria Crofts descrita em [P] (ʉ → u, ñ/ŋ → g̃, Ž → ', ʉ~ → ũ; tons e
 *       laringalização não se escrevem) — e conferi a forma resultante em [P], [G] ou [NT].
 *   [NT] “Deus ekawẽntup Kawẽn iisuat ekawẽn”, o Novo Testamento em mundurukú (Wycliffe, 2010,
 *       ebible.org/myu, CC BY-NC-ND) — usado só como corpus para conferir a grafia (contagem de
 *       ocorrências), nunca como fonte de frase do aluno. Ex.: “Wuykabia” (Mt 10:12, 28:9),
 *       “Wuykat” (Mt 26:49), “Eõm cuy” (Lc 15:28), “Ha'a” (35 ocorrências).
 *   Classificação: glottolog.org/resource/languoid/id/mund1330 (Tupi > East Tupi > Mundurukú).
 *   Povo e cultura: pib.socioambiental.org/pt/Povo:Munduruku (ISA).
 *
 * VARIEDADE: a do Pará (alto Tapajós, rio Cururu), a de [C], [G] e da maior parte de [P], onde a
 * língua é falada por crianças e adultos. No Amazonas (TI Kwatá-Laranjal) restam poucos falantes
 * idosos, e lá o “d” se pronuncia como “r” ([P], §2.2.1) — a grafia, porém, é a mesma.
 *
 * TOM: o mundurukú tem dois tons (alto e baixo) e vogais “rangidas” (laringalizadas), mas a escrita
 * prática não marca nenhum dos dois ([P], unidades 2.1.3 e 4). Por isso as palavras abaixo vêm sem
 * acento, como se escrevem nas escolas.
 *
 * O mundurukú NÃO tem gênero gramatical, nem um pronome de 3ª pessoa: “ele/ela” se diz com um
 * demonstrativo, como “ixe” (este) ([G], tabela 4.1 e nota 2; [C], item 186).
 */
export const ROWS: VocabRow[] = [
  // Expressões — [C] §1.1.1 (saudações pela hora do dia: wʉy4ka4bi²a³ “bom dia”, wʉy4kat4 “boa
  // tarde/noite”; a visita tosse na porta e ouve he³õm³ “Entre!”) e §1.1.3 (despedida: ha²'a³
  // “Siga, então!”); grafias no [NT]. “Ka'ũma”, não: [C] item 204 e a Cartilha Mundurukú 2 citada
  // em [P] §5.1 (“Ka’ṹma”, com o tom marcado). “Xipat”, bom: [P] §2.2.1 e [C] item 272.
  ['Wuykabia', 'bom dia', 'expressão', 'Expressões', '🌅', 'Wuykabia!'],
  ['Wuykat', 'boa tarde, boa noite', 'expressão', 'Expressões', '🌇', 'Wuykat, awa.'],
  ["Ha'a", 'então vá, pode ir (resposta a quem se despede)', 'expressão', 'Expressões', '👋', "Cum puk õn wũy be. — Ha'a."],
  ['Eõm', 'entre! (convite para entrar em casa)', 'expressão', 'Expressões', '🚪', 'Eõm!'],
  ['Xipat', 'bom, está bom', 'adjetivo', 'Expressões', '👍', 'Xipat.'],
  ["Ka'ũma", 'não', 'advérbio', 'Expressões', '🙅', "Ka'ũma."],
  // Interrogativos: [G] §4.3.1 (abu “quem”, ajo “o que”); [C] §1.1.1 (a³jo² kay² ẽn² “O que é que
  // quer?”) e itens 190 (a³-bʉ² a³-jẽm² “Quem está vindo?”), 192 (a³-pẽn² “como”), 196 (po³-ce²
  // “onde”).
  ['Abu?', 'quem?', 'pronome', 'Essenciais', '❓', 'Abu ajẽm?'],
  ['Ajo?', 'o quê?', 'pronome', 'Essenciais', '🤔', 'Ajo kay ẽn?'],
  ['Apẽn?', 'como?', 'advérbio', 'Essenciais', '🤷', 'Apẽn?'],
  ['Poce?', 'onde?', 'advérbio', 'Essenciais', '📍', 'Poce?'],
  // Pronomes livres: [G] tabela 4.1 (õn, ẽn, wuyju, oceju, eyju; a 3ª pessoa não tem pronome) e
  // [C] itens 184-189 (ele = i²-xe³ “este”, entre outros demonstrativos). Frases: [G] (83a) “õn cuk
  // oajẽm” e (80a) “xen puk õn”; [C] §1.1.1 “ijoce ma õn” (aqui estou).
  ['Õn', 'eu', 'pronome', 'Essenciais', '🙋', 'Õn cuk oajẽm.'],
  ['Ẽn', 'tu, você', 'pronome', 'Essenciais', '🫵', 'Ajo kay ẽn?'],
  ['Wuyju', 'nós (incluindo quem ouve)', 'pronome', 'Essenciais', '🙌', 'Wuyju.'],
  ['Oceju', 'nós (sem incluir quem ouve)', 'pronome', 'Essenciais', '🙆', 'Oceju.'],
  ['Eyju', 'vocês', 'pronome', 'Essenciais', '👥', 'Eyju.'],
  ['Ixe', 'ele, ela (literalmente “este”)', 'pronome', 'Essenciais', '🧑', 'Ixe.'],
  ['Ijoce', 'aqui', 'advérbio', 'Essenciais', '👇', 'Ijoce ma õn.'],
  ['Wũy', 'longe; também “porto” (com outro tom)', 'advérbio', 'Essenciais', '🛶', 'Cum puk õn wũy be.'],
  // Pessoas e família: [G] §0.1 (wuyjuyũ “povo, gente, pessoas”, a autodenominação); [C] itens
  // 171-174 (ag̃okatkat, ayacat, bekicat), 313-314 (o³-xi² “minha mãe”, we³-bay³ “meu pai”) e
  // §1.1.1 (a³wa² “vovó”, vocativo); [P] (obure “meu amigo”, webay “meu pai”, ajojot “avós”).
  // Pai, mãe e amigo quase sempre aparecem com dono, por isso entram já com o “meu”.
  ['Wuyjuyũ', 'povo, gente (o nome que os Munduruku dão a si mesmos)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Wuyjuyũ.'],
  ['Ag̃okatkat', 'homem', 'substantivo', 'Pessoas', '👨', 'Ag̃okatkat.'],
  ['Ayacat', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ayacat.'],
  ['Bekicat', 'criança', 'substantivo', 'Pessoas', '🧒', 'Bekicat.'],
  ['Webay', 'pai (meu pai)', 'substantivo', 'Família', '👨', 'Webay.'],
  ['Oxi', 'mãe (minha mãe)', 'substantivo', 'Família', '👩', 'Oxi.'],
  ['Obure', 'amigo (meu amigo, meu companheiro)', 'substantivo', 'Família', '🤝', 'Obure.'],
  ['Awa', 'vovó (para chamar a avó)', 'substantivo', 'Família', '👵', 'Wuykat, awa.'],
  ['Ajojot', 'avós', 'substantivo', 'Família', '👴', 'Ajojot.'],
  // Animais: [P] (bio, wida, apat, tawe, aro, wasũ, sapokay, parawa, cokõn, daydo, poy) e [C]
  // itens 43-67 (a³pat², ta³we², bi²o³, wi4da4, a³ro², wã²sʉ~³, a³xi³ma², pʉy³-bʉ², a4kʉ²ri³ce²).
  ['Bio', 'anta', 'substantivo', 'Animais', '🦛', 'Bio oyaoka kapusu.'],
  ['Wida', 'onça', 'substantivo', 'Animais', '🐆', 'Wida.'],
  ['Apat', 'jacaré', 'substantivo', 'Animais', '🐊', 'Apat.'],
  ['Tawe', 'macaco (macaco-prego)', 'substantivo', 'Animais', '🐒', 'Tawe.'],
  ['Aro', 'papagaio', 'substantivo', 'Animais', '🦜', 'Aro.'],
  ['Wasũ', 'pássaro', 'substantivo', 'Animais', '🐦', 'Wasũ.'],
  ['Axima', 'peixe', 'substantivo', 'Animais', '🐟', 'Axima iku.'],
  ['Puybu', 'cobra', 'substantivo', 'Animais', '🐍', 'Puybu.'],
  ['Akurice', 'cachorro', 'substantivo', 'Animais', '🐕', 'Akurice.'],
  ['Sapokay', 'galinha', 'substantivo', 'Animais', '🐔', 'Sapokay.'],
  ['Parawa', 'arara', 'substantivo', 'Animais', '🦜', 'Parawa.'],
  ['Cokõn', 'tucano', 'substantivo', 'Animais', '🐦', 'Cokõn.'],
  ['Daydo', 'tatu', 'substantivo', 'Animais', '🦔', 'Daydo.'],
  ['Poy', 'tartaruga', 'substantivo', 'Animais', '🐢', 'Poy.'],
  // Natureza: [P] (kabi, kabia, wita'a); [C] itens 98-164 (kaŽ³-bi³, ka²-xi³, ka³-sop³-ta²,
  // ka³-bi²-a4, i³-xi²-ma², mʉ³-ba4-Žat², i³-di³-bi², da³xa², wi³ta²-Ža³). Para “lua” as fontes
  // divergem (kaxi a'at em [C], kaxiamat no [NT]) e por isso ela ficou de fora.
  ['Kabi', 'céu', 'substantivo', 'Natureza', '🌌', 'Kabi.'],
  ['Kaxi', 'sol', 'substantivo', 'Natureza', '☀️', 'Kaxi.'],
  ['Kasopta', 'estrela', 'substantivo', 'Natureza', '⭐', 'Kasopta.'],
  ['Kabia', 'dia', 'substantivo', 'Natureza', '🌞', 'Kabia.'],
  ['Ixima', 'noite', 'substantivo', 'Natureza', '🌙', 'Ixima.'],
  ['Idibi', 'água; também “rio”', 'substantivo', 'Natureza', '💧', 'Idibi.'],
  ['Daxa', 'fogo', 'substantivo', 'Natureza', '🔥', 'Daxa.'],
  ["Wita'a", 'pedra', 'substantivo', 'Natureza', '🪨', "Wita'a."],
  ["Muba'at", 'chuva', 'substantivo', 'Natureza', '🌧️', "Muba'at."],
  // Alimentação: [P] (akoba, kawta, wapurũm, asãw'a, jarãy'a, kape); kawta também em [C] item 163.
  ['Akoba', 'banana', 'substantivo', 'Alimentação', '🍌', 'Akoba.'],
  ['Kawta', 'sal', 'substantivo', 'Alimentação', '🧂', 'Kawta.'],
  ['Wapurũm', 'açaí', 'substantivo', 'Alimentação', '🫐', 'Wapurũm.'],
  ["Asãw'a", 'mamão', 'substantivo', 'Alimentação', '🥭', "Asãw'a."],
  ["Jarãy'a", 'laranja', 'substantivo', 'Alimentação', '🍊', "Jarãy'a."],
  ['Kape', 'café', 'substantivo', 'Alimentação', '☕', 'Kape.'],
  // Casa e objetos: [P] (uk'a, op, daruk, kise, itĩg̃'a, peta) e [C] itens 142-159; kobe em [G]
  // (tabela 1.2) e [C] item 145; parasuy, as flautas sagradas, em [G] ex. (2h) e no ISA.
  ["Uk'a", 'casa', 'substantivo', 'Casa', '🏠', "Uk'a."],
  ['Kobe', 'canoa', 'substantivo', 'Casa', '🛶', 'Kobe.'],
  ['Op', 'flecha', 'substantivo', 'Casa', '🏹', 'Op.'],
  ['Daruk', 'arco', 'substantivo', 'Casa', '🏹', 'Daruk xipat g̃u.'],
  ['Kise', 'faca', 'substantivo', 'Casa', '🔪', 'Kise.'],
  ["Itĩg̃'a", 'panela (pote de barro)', 'substantivo', 'Casa', '🏺', "Itĩg̃'a."],
  ['Peta', 'festa', 'substantivo', 'Cultura', '🎉', 'Peta.'],
  ['Parasuy', 'parasuy (as flautas sagradas dos mitos)', 'substantivo', 'Cultura', '🪈', 'Parasuy.'],
  // Qualidades: em mundurukú são verbos “de estado”, que já dizem “é …” ([G] §2.2.2.1): iku ([G]
  // ex. 14a-b, com a reduplicação ikuku “muito gostoso”); yobog̃, idip, itakoma, iokok ([P]);
  // ipakpuk ([C] itens 283 e 323).
  ['Iku', 'é gostoso', 'verbo', 'Qualidades', '😋', 'Axima iku.'],
  ['Ikuku', 'é muito gostoso', 'verbo', 'Qualidades', '🤤', 'Axima ikuku.'],
  ['Yobog̃', 'é grande', 'verbo', 'Qualidades', '🐘', 'Yobog̃.'],
  ['Idip', 'é bonito', 'verbo', 'Qualidades', '🌺', 'Idip.'],
  ['Itakoma', 'está zangado', 'verbo', 'Qualidades', '😠', 'Itakoma.'],
  ['Iokok', 'está sujo; está velho (coisa)', 'verbo', 'Qualidades', '🧹', 'Iokok.'],
  ['Ipakpuk', 'é vermelho', 'verbo', 'Qualidades', '🔴', 'Ipakpuk.'],
  // Números: [G] §4.1.2.1 e [C] itens 213-217; grafias do [NT] (pũg̃ 698 ocorrências, xepxep 151,
  // ebapũg̃ 79, ebadipdip 33, põg̃bi 5). Do cinco em diante a língua conta em “punhos” (põg̃bi) e,
  // para números grandes, usa o português ([G]).
  ['Pũg̃', 'um', 'numeral', 'Números', '1️⃣', 'Pũg̃.'],
  ['Xepxep', 'dois', 'numeral', 'Números', '2️⃣', 'Xepxep.'],
  ['Ebapũg̃', 'três', 'numeral', 'Números', '3️⃣', 'Ebapũg̃.'],
  ['Ebadipdip', 'quatro', 'numeral', 'Números', '4️⃣', 'Ebadipdip.'],
  ['Pũg̃ põg̃bi', 'cinco (literalmente “um punho”)', 'numeral', 'Números', '5️⃣', 'Pũg̃ põg̃bi.'],
  // Frases com verbo: [G] (83a) “õn cuk oajẽm” (acabei de chegar), (80a) “xen puk õn” (eu estou
  // indo dormir); [C] §1.1.3 “cʉm² pʉk³ õn² wʉ~y² be³” (eu vou ao porto).
  ['Õn cuk oajẽm', 'acabei de chegar', 'expressão', 'Verbos-chave', '🚶', 'Õn cuk oajẽm.'],
  ['Xen puk õn', 'vou dormir (já estou indo dormir)', 'expressão', 'Verbos-chave', '😴', 'Xen puk õn.'],
  ['Cum puk õn', 'já estou indo (vou agora)', 'expressão', 'Verbos-chave', '🏃', 'Cum puk õn wũy be.'],
];

export const VOCAB_MYU = buildVocab('myu', ROWS);
