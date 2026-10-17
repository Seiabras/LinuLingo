import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do guarani mbyá (código ISO 639-3 «gun»), língua indígena viva falada em aldeias
 * (tekoa) do litoral e sul do Brasil (ES, RJ, SP, PR, SC, RS), da Argentina (Misiones, Corrientes) e
 * do Paraguai oriental. DIFERENTE do guarani paraguaio padrão (gn, pacote à parte neste app) e do
 * nheengatu (yrl): as três são línguas da mesma família tupi-guarani, mas com vocabulário, gramática
 * e histórias próprias — nenhuma palavra foi copiada de gn/yrl sem conferir especificamente para o
 * mbyá. Idioma incompleto: por enquanto só o suficiente para o nível A1 — ver `incomplete` em
 * index.ts.
 *
 * Cada palavra foi conferida em pelo menos uma fonte real e específica do guarani mbyá antes de
 * entrar aqui (nunca por semelhança com o guarani paraguaio ou o nheengatu):
 *  - Wiktionary em inglês, categoria «Mbya Guarani» (código gun), cujas entradas citam Robert A.
 *    Dooley, «Léxico Guarani, dialeto Mbyá» (SIL Brasil, 2016) e a versão acadêmica de 1998;
 *  - o TCC de Darci da Silva — Karai Nhe'ery (mbyá, Aldeia Piraí/Yvyju, SC), «Nhemongarai: Rituais
 *    de Batismo Mbya Guarani» (Licenciatura Intercultural Indígena do Sul da Mata Atlântica, UFSC,
 *    2020), com glossário próprio de palavras mbyá;
 *  - Sérgio Florentino da Silva, «O Sistema De Contagem Guarani: Caminhos Para A Prática
 *    Pedagógica» (REVEMAT, UFSC, 2018), pesquisa de campo nas aldeias mbyá Itaty (Morro dos
 *    Cavalos) e M'Biguaçu, em Santa Catarina;
 *  - a Wikipédia em inglês, artigo «Mbyá Guaraní language» (classificação, fonologia, pronomes);
 *  - a página do povo Guarani Mbya no ISA (Povos Indígenas no Brasil).
 * Ver o relatório da tarefa para a lista completa, com o que cada fonte confirmou.
 *
 * DO A1.1 (lições extras) AO A2.2 (17/10/2026): todas as palavras novas vêm de [Dooley 2006] Robert A.
 * Dooley, «Léxico Guarani, dialeto Mbyá, com informações úteis para o ensino médio, a aprendizagem e a
 * pesquisa lingüística», SIL, versão de 9 de março de 2006 (PDF GNDicLex.pdf do site do SIL, lido numa
 * cópia do Web Archive de 08/09/2025; a página de 2006 é a do livro, igual à do PDF). A grafia é a do
 * léxico, sem conversão. O texto extraído do PDF perde as letras ẽ, ĩ e ỹ (sai «ko' rã» por «ko'ẽ rã»,
 * «kunhata» por «kunhataĩ»): toda palavra e frase com essas letras foi lida na IMAGEM da página. As
 * frases de exemplo são as do próprio verbete, com a página. Os verbos aparecem como no léxico, pela
 * raiz sem o hífen (Dooley escreve «-karu»): o verbo nunca aparece sozinho, sempre com o prefixo de
 * pessoa (ver gramatica.ts). Os nomes de parentesco precisam de dono (Dooley: «flexão xe-»), por isso
 * aparecem na forma «meu/minha», como o léxico os dá nos exemplos.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  [
    'aguyjevete',
    'bem-vindo(a); muito obrigado(a) (palavra sagrada, dita de mãos erguidas para saudar, e usada na opy\'i — casa de reza — para agradecer a Nhanderu)',
    'interjeição',
    'Expressões',
    '🙌',
    'Aguyjevete, xaryi!',
  ],
  ['ha\'evete', 'obrigado, obrigada (agradecimento do dia a dia, por um gesto comum de alguém)', 'interjeição', 'Expressões', '🙏', 'Ha\'evete, xamoi!'],
  ['jurua', 'não indígena, branco(a)', 'substantivo', 'Expressões', '🧑', 'Ha\'e jurua.'],
  // ── Pessoas ──
  ['xee', 'eu', 'pronome', 'Pessoas', '🙋', 'Xee kunha.'],
  ['ndee', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ndee ava.'],
  ['ha\'e', 'ele, ela; e (a mesma palavra também funciona como conjunção “e”)', 'pronome', 'Pessoas', '👤', 'Ha\'e xamoi.'],
  ['nhande', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Nhande reko.'],
  ['ore', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ore ava.'],
  ['peẽ', 'vocês', 'pronome', 'Pessoas', '👥', 'Peẽ kunha.'],
  ['ha\'e kuery', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ha\'e kuery ava.'],
  ['kova\'e', 'este, esta, isto (demonstrativo)', 'pronome', 'Pessoas', '👉', 'Kova\'e tekoa.'],
  // revisão (17/10/2026): o antigo exemplo «Kova'e ava guaxu.» era montado. Dooley 2006, p. 86 (kova'e): «Ocorre
  // com nomes … contáveis, tanto no singular quanto no plural (kova'e ava ‘este homem’, kova'e avakue ‘estes homens’)»
  ['ava', 'homem', 'substantivo', 'Pessoas', '👨', 'Kova\'e ava.'],
  ['kunha', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kova\'e kunha porã.'],
  // ── Família ──
  ['mitã', 'bebê, criança', 'substantivo', 'Família', '🧒', 'Kova\'e mitã kyrĩ.'],
  // revisão (17/10/2026): o antigo exemplo «Xy porã.» deixava «xy» sem dono. Dooley 2006, p. 197: «-xy nome
  // (flexão xe- + Ø). Mãe. (♦Uso: No dialeto mbyá, a palavra ha'i substitui xexy ‘minha mãe’; esta palavra é usada
  // apenas raramente…)»; p. 54: «ha'i … A forma supletiva de xy ‘mãe’ com posse da 1ª pessoa do singular». Como
  // todo nome de parentesco, -xy precisa de dono; o exemplo agora é a frase do verbete kunhataĩ, p. 93 (lida na
  // imagem): «kunhataĩ xy omombu inambi a mãe da moça furou a orelha dela». «Minha mãe» é ha'i (ver o A2.1).
  ['xy', 'mãe (sempre com dono: “a mãe de alguém”; “minha mãe” é ha\'i)', 'substantivo', 'Família', '👩', 'Kunhataĩ xy omombu inambi.'],
  // revisão (17/10/2026): o antigo exemplo «Xamoi arandu.» deixava «arandu» sem prefixo; o novo é a frase do A1
  // (padrão «pronome + nome», ver a g2)
  ['xamoi', 'avô; forma geral para falar de ancião, sábio, conhecedor da cultura', 'substantivo', 'Família', '👴', 'Ha\'e xamoi.'],
  // revisão (17/10/2026): «Xaryi arandu.» era montado. Dooley 2006, p. 194: «xaryi nome. Expressão afetiva para uma
  // velhinha, geralmente com sufixo diminutivo: xaryi'i vovozinha»
  ['xaryi', 'avó; forma geral para falar de anciã, sábia, conhecedora da cultura', 'substantivo', 'Família', '👵', 'Xaryi\'i.'],
  // ── Natureza ──
  ['kuaray', 'sol', 'substantivo', 'Natureza', '☀️', 'Kuaray porã.'],
  ['jaxy', 'lua', 'substantivo', 'Natureza', '🌙', 'Jaxy porã.'],
  ['ára', 'dia', 'substantivo', 'Natureza', '📅', 'Ára porã.'],
  ['pytũ', 'noite, escuridão', 'substantivo', 'Natureza', '🌑', 'Kova\'e pytũ guaxu.'],
  ['y', 'água', 'substantivo', 'Natureza', '💧', 'Y porã.'],
  ['yvy', 'terra', 'substantivo', 'Natureza', '🌍', 'Yvy guaxu.'],
  ['yva', 'céu', 'substantivo', 'Natureza', '🌤️', 'Yva pytã.'],
  ['tata', 'fogo', 'substantivo', 'Natureza', '🔥', 'Tata guaxu.'],
  // ── Animais ──
  ['jagua', 'cachorro (sentido antigo, hoje só em expressões fixas: onça)', 'substantivo', 'Animais', '🐕', 'Kova\'e jagua kyrĩ.'],
  ['jakare', 'jacaré', 'substantivo', 'Animais', '🐊', 'Jakare guaxu.'],
  ['guyra', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Kova\'e guyra porã.'],
  ['mboi', 'cobra, serpente', 'substantivo', 'Animais', '🐍', 'Kova\'e mboi kyrĩ.'],
  ['tapi\'i', 'anta', 'substantivo', 'Animais', '🦌', 'Tapi\'i guaxu.'],
  ['kure', 'porco', 'substantivo', 'Animais', '🐖', 'Kova\'e kure kyrĩ.'],
  ['ka\'i', 'macaco', 'substantivo', 'Animais', '🐒', 'Ka\'i kyrĩ.'],
  ['ovexa', 'ovelha (palavra emprestada do português “ovelha”)', 'substantivo', 'Animais', '🐑', 'Kova\'e ovexa porã.'],
  // ── Descrições ──
  ['porã', 'bonito, bom; bem (também advérbio)', 'adjetivo', 'Descrições', '👍', 'Tekoa porã.'],
  ['vaikue', 'feio, ruim; mal (também advérbio)', 'adjetivo', 'Descrições', '👎', 'Ára vaikue.'],
  ['guaxu', 'grande; muito (o mesmo radical também nomeia o veado)', 'adjetivo', 'Descrições', '📏', 'Jagua guaxu.'],
  ['kyrĩ', 'pequeno, pequena', 'adjetivo', 'Descrições', '🤏', 'Mitã kyrĩ.'],
  ['pytã', 'vermelho, marrom', 'adjetivo', 'Descrições', '🔴', 'Yva pytã.'],
  // ── Verbos-chave ──
  // Dooley 2006, p. 148 (porã, função adjetiva): «ayvu porã palavra ou mensagem boa» (aqui «ayvu» é o nome, a fala)
  ['ayvu', 'falar, dizer (como substantivo: fala, língua)', 'verbo', 'Verbos-chave', '🗣️', 'Ayvu porã.'],
  // revisão (17/10/2026): «Guata porã.» era montado, com o verbo sem prefixo (contra a g5). Dooley 2006, p. 17 (ára),
  // lido na imagem: «mokoĩ ára ma aguata já viajei dois dias»
  ['guata', 'andar, viajar', 'verbo', 'Verbos-chave', '🚶', 'Mokoĩ ára ma aguata.'],
  // revisão (17/10/2026): «Y'u porã.» era montado, com o verbo sem prefixo. Dooley 2006, p. 66 (ri jepe), lido na
  // imagem: «pey'u tema pey'uxe va'e, xee ri jepe nday'ui 'rã vocês que querem beber, bebam; eu, pelo menos, não vou
  // beber»
  ['y\'u', 'beber água', 'verbo', 'Verbos-chave', '🥤', 'Pey\'u tema pey\'uxe va\'e.'],
  // revisão (17/10/2026): «Iko porã.» era montado, com o verbo sem prefixo. Dooley 2006, p. 164 (raka'e), lido na
  // imagem: «mboi avi oiko raka'e a cobra também existia antigamente»
  ['iko', 'viver, existir, estar; acontecer', 'verbo', 'Verbos-chave', '🧍', 'Mboi avi oiko raka\'e.'],
  // revisão (17/10/2026): «Jerovia porã.» era montado. Dooley 2006, p. 67 (-jerovia): «exercer fé ou confiança (em
  // alguém)»; como v. i., «estar valente, bravo: ojerovia vaipa, ojerovai (mboae) rei está muito bravo» (lido na imagem)
  ['jerovia', 'crer, confiar (em alguém); também: estar valente', 'verbo', 'Verbos-chave', '🙏', 'Ojerovia vaipa.'],
  // revisão (17/10/2026): «Xamoi arandu.» era montado, sem o prefixo de pessoa. Dooley 2006, p. 18 (arandu, «nome
  // (flexão xe- + Ø). Sabedoria»), lido na imagem: «avakue hi'arandu os homens têm sabedoria»: como predicado, leva o
  // prefixo (hi'arandu, «tem sabedoria»)
  ['arandu', 'ter sabedoria, ser sábio (como predicado leva o prefixo de pessoa: hi\'arandu, “tem sabedoria”)', 'verbo', 'Verbos-chave', '🧠', 'Avakue hi\'arandu.'],
  // ── Números ──
  ['peteĩ', 'um (lit. “um só, sem par”: a contagem mbyá forma pares dentro de grupos de cinco)', 'numeral', 'Números', '1️⃣', 'Peteĩ jagua.'],
  ['mokoĩ', 'dois (lit. “um par”)', 'numeral', 'Números', '2️⃣', 'Mokoĩ ava.'],
  ['mboapy', 'três (lit. “início de um novo par”)', 'numeral', 'Números', '3️⃣', 'Mboapy kunha.'],
  ['irundy', 'quatro (lit. “dois pares”)', 'numeral', 'Números', '4️⃣', 'Irundy mitã.'],
  // ── Cultura ──
  ['tekoa', 'aldeia (lit. “o lugar onde se semeia a vida”, segundo os costumes mbyá)', 'substantivo', 'Cultura', '🏘️', 'Tekoa porã.'],
  // revisão (17/10/2026): grafia corrigida de «nhe'e» para «nhe'ẽ», como em Dooley 2006, p. 126 (conferido na
  // imagem: «nhe'ẽ … 1. Fala … 2. Som … 3. Alma: … yvyra nhe'ẽ espírito ou alma de árvore»). O til marca a vogal
  // nasal, que distingue palavras no mbyá (o SAPhon lista e/ẽ como fonemas); o texto extraído do PDF perde o ẽ,
  // e daí veio o «nhe'e». O antigo exemplo «Nhe'e porã.» era montado; o novo é do verbete.
  ['nhe\'ẽ', 'espírito, alma (também “fala”, “som”)', 'substantivo', 'Cultura', '✨', 'Yvyra nhe\'ẽ.'],
  ['nhanderu', 'nosso Pai Supremo, Deus Criador', 'substantivo', 'Cultura', '🙏', 'Nhanderuete.'],
  ['opy\'i', 'casa de reza, onde se praticam dança, canto e cura', 'substantivo', 'Cultura', '🛖', 'Opy\'i guaxu.'],
  ['petyngua', 'cachimbo sagrado, usado nas cerimônias e para curar', 'substantivo', 'Cultura', '🪈', 'Petyngua porã.'],
  ['nhemongarai', 'batismo do nhe\'ẽ (espírito), ritual em que se recebe o nome', 'substantivo', 'Cultura', '🕯️', 'Ka\'a\'i nhemongarai.'],
  ['nhandeayvu', 'nossa língua (como os falantes chamam o guarani mbyá: “nhande”, nosso, + “ayvu”, fala)', 'substantivo', 'Cultura', '💬', 'Nhandeayvu porã.'],
  // revisão (17/10/2026): «Xondaro arandu.» era montado. Dooley 2006, p. 115 (-moingove), lido na imagem: «xondaro
  // omoingove tuja'i va'e o soldado deixou o velhinho viver» (Dooley traduz «xondaro» por «soldado»)
  ['xondaro', 'guardião, guerreiro', 'substantivo', 'Cultura', '🛡️', 'Xondaro omoingove tuja\'i va\'e.'],
  [
    'nhandereko',
    'nosso modo de ser, de viver: tudo o que o jurua (não indígena) chama de “cultura” — a relação entre a vida, o território e a espiritualidade',
    'substantivo',
    'Cultura',
    '🌿',
    'Nhandereko porã.',
  ],
  // ── Lições extras do A1.1 (17/10/2026): cumprimentos e pessoas ──
  // Dooley 2006, p. 192 (verbete -vy, «levantar-se»): «javy jevy, javy ju frase. Saudação: levantamo-nos de
  // novo»; p. 75 (ju2): «javy ju nos levantamos de novo»
  ['javy ju', 'saudação (lit. “levantamo-nos de novo”)', 'expressão', 'Expressões', '🌅', 'Javy ju!'],
  // Dooley 2006, p. 135 (pa): «Erevy porã pa? Você se levantou bem?»
  ['Erevy porã pa?', 'você se levantou bem? (cumprimento)', 'expressão', 'Expressões', '🛏️', 'Erevy porã pa?'],
  // Dooley 2006, p. 135 (pa) e p. 39 (-ery): «Marã rami pa nderery? Qual é o seu nome? [lit., ‘como é o seu
  // nome?’]»
  ['Marã rami pa nderery?', 'qual é o seu nome?', 'expressão', 'Expressões', '🪪', 'Marã rami pa nderery?'],
  // Dooley 2006, p. 76 (jurua): «jurua ayvu nome. A língua portuguesa»; p. 26: «jurua ayvu py ijayvu falou em
  // português» (o subverbete da p. 26 traz o erro de digitação «jurua avyu»; o exemplo e a p. 76 dão «ayvu»)
  ['jurua ayvu', 'língua portuguesa (lit. “fala do juruá”)', 'substantivo', 'Expressões', '🗣️', 'Jurua ayvu py ijayvu.'],
  // Dooley 2006, p. 93: «kunumi … Rapaz, moço: … peteĩ kunumi um jovem» (lido na imagem)
  ['kunumi', 'rapaz, moço', 'substantivo', 'Pessoas', '👦', 'Peteĩ kunumi.'],
  // Dooley 2006, p. 93: «kunhataĩ … Moça, mulher jovem, não casada»; «kunhataĩgue moças» (lido na imagem)
  ['kunhataĩ', 'moça', 'substantivo', 'Pessoas', '👧', 'Kunhataĩgue.'],
  // ── A2.1: verbos do dia a dia (Dooley dá a raiz com hífen: -exa, -karu…) ──
  // p. 42 (-exa2: ver); p. 119: «Ndee pa erexa mboi? Você viu a cobra?»
  ['exa', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ndee pa erexa mboi?'],
  // p. 81 (-karu: comer, alimentar-se); p. 72: «jakaru jojavi comemos todos juntos»
  ['karu', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Jakaru jojavi.'],
  // p. 84 (-ke1: dormir); p. 23: «ake raxa dormi demais»
  ['ke', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Ake raxa.'],
  // p. 75 (-ju1: vir): «kavõ re aju vim para buscar sabão»; na 3ª pessoa «ou» (veio), p. 181
  ['ju', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Kavõ re aju.'],
  // p. 104 (-mba'eapo: trabalhar): «amba'eapo atã va'e sou um que trabalha duro»
  ['mba\'eapo', 'trabalhar', 'verbo', 'Verbos-chave', '🛠️', 'Amba\'eapo atã va\'e.'],
  // p. 87 (-kuaa: saber, aprender, conhecer): «aikuaaxe pendeayvu quero saber a língua de vocês»
  ['kuaa', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Aikuaaxe pendeayvu.'],
  // p. 67 (-jeroky: dançar): «ojeroky ratã dançou energicamente»
  ['jeroky', 'dançar', 'verbo', 'Verbos-chave', '💃', 'Ojeroky ratã.'],
  // p. 192 (-vy'a: alegrar-se, divertir-se); p. 148: «orovy'a porã ficamos muito alegres»
  ['vy\'a', 'alegrar-se', 'verbo', 'Verbos-chave', '😄', 'Orovy\'a porã.'],
  // p. 157 (-pyta: parar, ficar): «epyta apy fique aqui»
  ['pyta', 'ficar', 'verbo', 'Verbos-chave', '🧍', 'Epyta apy.'],
  // p. 47 (-guapy: sentar-se); p. 28 (e-, imperativo): «eguapy ke sente-se»
  ['guapy', 'sentar-se', 'verbo', 'Verbos-chave', '🪑', 'Eguapy ke.'],
  // p. 125 (-nhembo'e: estudar; prestar culto, rezar); p. 156: «pyávy anhembo'e estudo à noite»
  ['nhembo\'e', 'estudar; rezar', 'verbo', 'Verbos-chave', '📖', 'Pyávy anhembo\'e.'],
  // ── A2.1: família e casa (nomes com dono) ──
  // p. 181 (-u1: pai; «xeru» = meu pai); p. 2 (-a py): «aa ta xerua py vou no meu pai»
  ['xeru', 'pai (meu pai)', 'substantivo', 'Família', '👨', 'Aa ta xerua py.'],
  // p. 54: «ha'i nome. A forma supletiva de xy ‘mãe’ com posse da 1ª pessoa do singular. Minha mãe: ha'e
  // jave py ha'i reve teri xee aĩ va'ekue naquela época eu estava ainda com a minha mãe»; p. 197: «No dialeto
  // mbyá, a palavra ha'i substitui xexy ‘minha mãe’» (lido na imagem: «aĩ», não «a»)
  ['ha\'i', 'minha mãe', 'substantivo', 'Família', '👩‍👧', 'Ha\'e jave py ha\'i reve teri xee aĩ va\'ekue.'],
  // p. 28 (-a'y: filho, de homem): «aexaxe vaipa xera'y tenho saudades de ver meu filho» (p. 43)
  ['xera\'y', 'filho (meu filho, dito pelo pai)', 'substantivo', 'Família', '👦', 'Aexaxe vaipa xera\'y.'],
  // p. 112 (memby: 1. filha, de mulher; 2. filho ou filha de mulher): «xememby kuery meus filhos»
  ['xememby', 'filha (minha filha, ou meu filho, dito pela mãe)', 'substantivo', 'Família', '👧', 'Xememby kuery.'],
  // p. 129 (-o1: casa; forma livre «oo»); p. 9: «oo py oike haku gui entrou na casa [por causa] do calor»
  ['oo', 'casa', 'substantivo', 'Casa e comida', '🏠', 'Oo py oike haku gui.'],
  // p. 181 (-embi'u: comida); p. 30: «tembi'u hee va'e comida gostosa»
  ['tembi\'u', 'comida', 'substantivo', 'Casa e comida', '🍲', 'Tembi\'u hee va\'e.'],
  // p. 21: «avaxi nome. Milho»; p. 54: «avaxi heta oĩ do milho, tem muito» (lido na imagem)
  ['avaxi', 'milho', 'substantivo', 'Casa e comida', '🌽', 'Avaxi heta oĩ.'],
  // p. 108: «mbojape nome. 1. Bolinho de milho indígena. 2. Pão ou bolo qualquer»; p. 39: «mbojape aru ndevy eu
  // trouxe pão para você»
  ['mbojape', 'pão', 'substantivo', 'Casa e comida', '🍞', 'Mbojape aru ndevy.'],
  // p. 83 (ka'aru: a tarde): «Marã rami pa pendeka'aru? Como vocês estão passando a tarde?»
  ['ka\'aru', 'tarde', 'substantivo', 'Tempo', '🌇', 'Marã rami pa pendeka\'aru?'],
  // ── A2.2: a mata ──
  // p. 82: «ka'aguy nome/adjetivo. Selva, mata, floresta: aa ta ka'aguy re vou para a floresta»
  ['ka\'aguy', 'floresta, mata', 'substantivo', 'Natureza', '🌳', 'Aa ta ka\'aguy re.'],
  // p. 204: «yvyra nome. 1. Madeira. 2. Árvore»; p. 3: «yvyra hi'a porã va'e árvore com fruta boa»
  ['yvyra', 'árvore', 'substantivo', 'Natureza', '🌲', 'Yvyra hi\'a porã va\'e.'],
  // p. 59: «ita nome. Pedra»; p. 9: «ita raku áry ojy mbojape assou o pão em cima de uma pedra quente»
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Ita raku áry ojy mbojape.'],
  // p. 196: «xivi nome. Onça»; p. 39: «xivi oguero'a guaxu a onça agarrou o veado»
  ['xivi', 'onça', 'substantivo', 'Animais', '🐆', 'Xivi oguero\'a guaxu.'],
  // p. 143: «pira nome. Peixe»; p. 35 (-enoẽ, tirar): «anoẽ atã pira peguei (tirei) o peixe com força» (lido na imagem)
  ['pira', 'peixe', 'substantivo', 'Animais', '🐟', 'Anoẽ atã pira.'],
  // p. 174: «tape nome. Caminho»; p. 13: «tape rupi pelo caminho»
  ['tape', 'caminho', 'substantivo', 'Natureza', '🛤️', 'Tape rupi.'],
  // ── A2.2: o tempo ──
  // p. 91: «kuee termo adverbial. Ontem»; p. 83: «kuee ka'aru'i xero katy aa vy aexa mboi ontem à tardinha,
  // enquanto ia para minha casa vi uma cobra»
  ['kuee', 'ontem', 'advérbio', 'Tempo', '⏪', 'Kuee ka\'aru\'i xero katy aa vy aexa mboi.'],
  // p. 12: «ange termo adverbial. Hoje …: ange ygua py avaẽ vy aexa hoje quando cheguei no poço eu o vi» (lido na imagem: «avaẽ»)
  ['ange', 'hoje', 'advérbio', 'Tempo', '📆', 'Ange ygua py avaẽ vy aexa.'],
  // p. 86: «ko'ẽ ramo, ko'ẽ rã, ko'ẽ re termo adverbial. 1. Ao amanhecer. 2. Amanhã» (lido na imagem); p. 172:
  // «ko'ẽ rã aguata ta estou prestes a viajar amanhã»
  ['ko\'ẽ rã', 'amanhã', 'advérbio', 'Tempo', '⏩', 'Ko\'ẽ rã aguata ta.'],
  // p. 156: «pyávy termo adverbial. À noite: pyávy anhembo'e estudo à noite»
  ['pyávy', 'à noite', 'advérbio', 'Tempo', '🌃', 'Pyávy anhembo\'e.'],
  // p. 17: «araka'e … Indica ação no tempo remoto, geralmente no passado e não presenciado pelo falante;
  // antigamente: yy ou araka'e houve o dilúvio antigamente»
  ['araka\'e', 'antigamente', 'advérbio', 'Tempo', '📜', 'Yy ou araka\'e.'],
  // p. 131: «oky … Chuva: oky xejou a chuva me pegou [lit., ‘me achou’]»
  ['oky', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Oky xejou.'],
  // p. 205: «yvytu nome. Vento»; p. 139: «yvytu oipeju atã o vento soprou com força»
  ['yvytu', 'vento', 'substantivo', 'Natureza', '🌬️', 'Yvytu oipeju atã.'],
  // ── A2.2: sim, não e as perguntas ──
  // p. 13: «any expressão resposta. Não: … xee any eu não (em resposta a uma pergunta tal como ‘Você vai à
  // cidade?’)»
  ['any', 'não', 'advérbio', 'Perguntas', '🙅', 'Xee any.'],
  // p. 172: «tá1 frase tipo resposta. Sim. (♦Derivação: Empréstimo do port.)»; p. 54 (heẽ, do guarani
  // paraguaio): «Outros dialetos: Em mbyá, tá»
  ['tá', 'sim (empréstimo do português “tá”)', 'interjeição', 'Perguntas', '👌', 'Tá.'],
  // p. 99: «mamo termo advérbial interrogativo. Onde?: Mamo pa ereo? Para onde (você) vai?»
  ['mamo', 'onde', 'advérbio', 'Perguntas', '📍', 'Mamo pa ereo?'],
  // p. 100: «mava'e … 2. Quem (em referência a pessoas): Mava'e nda'u xerymba poryko ojuka? Quem será que
  // matou meu porco?»
  ['mava\'e', 'quem', 'pronome', 'Perguntas', '🕵️', 'Mava\'e nda\'u xerymba poryko ojuka?'],
  // p. 103: «mba'e re termo adverbial interrogativo. Por quê …?: Mba'e re tu peju? Por que vocês vieram?»
  ['mba\'e re', 'por quê', 'advérbio', 'Perguntas', '❓', 'Mba\'e re tu peju?'],
  // p. 105: «mba'e xa, mba'exa termo advérbial interrogativo. Como é que? Mba'e xa pa oenduve? Como é que ele
  // soube mais?»
  ['mba\'exa', 'como', 'advérbio', 'Perguntas', '🤔', 'Mba\'e xa pa oenduve?'],
  // p. 149 (-porandu: perguntar); p. 165: «ixupe aporandu ramo nombovai quando lhe perguntei, ele(a) não
  // respondeu»
  ['porandu', 'perguntar', 'verbo', 'Verbos-chave', '🙋', 'Ixupe aporandu ramo nombovai.'],
  // ══ B1 (17/10/2026). Todas as palavras e frases são de [Dooley 2006], com a página, e foram conferidas na IMAGEM
  // da página (o texto extraído perde ẽ, ĩ, ỹ: sai «ava» por «avaẽ», «nhanhot a» por «nhanhotỹa»). Os verbos vêm pela
  // raiz, como no A2; a frase de exemplo mostra o verbo com o prefixo. As poucas exceções (frases do «Ayvu Rapyta» de
  // Cadogan) estão marcadas, com a regra de conversão de grafia.
  // ── B1.1: o caminho, a roça e o trabalho ──
  // p. 62 (jave1, conjunção): «ndee eremba'eapo jave xee avaẽ quando você estava trabalhando, eu cheguei»; p. 185
  // (-vaẽ, «chegar»)
  ['vaẽ', 'chegar', 'verbo', 'Verbos-chave', '🏁', 'Ndee eremba\'eapo jave xee avaẽ.'],
  // p. 68 (-jevy): «Voltar: ojevy tetã gui voltou da cidade; ajevy vy rive aju vim apenas para voltar (logo)»
  ['jevy', 'voltar', 'verbo', 'Verbos-chave', '↩️', 'Ajevy vy rive aju.'],
  // p. 57 (-ike): «Entrar: eike ke opy entre dentro da casa»
  ['ike', 'entrar', 'verbo', 'Verbos-chave', '🚪', 'Eike ke opy.'],
  // p. 36 (-eraa): «1. Levar (fisicamente): xereraa ke nderupive leva-me consigo»
  ['eraa', 'levar', 'verbo', 'Verbos-chave', '🧳', 'Xereraa ke nderupive.'],
  // p. 39 (-eru: «Trazer»); p. 135 (pa): «Ereru pa peráta? Você trouxe o dinheiro?»
  ['eru', 'trazer', 'verbo', 'Verbos-chave', '📦', 'Ereru pa peráta?'],
  // p. 95 (-kyje): «Ter medo (de algo ou de alguém): okyje mboi gui tem medo de cobra»
  ['kyje', 'ter medo', 'verbo', 'Verbos-chave', '😨', 'Okyje mboi gui.'],
  // p. 51 (ha'e, conjunção; já no A2, g7): «japytu'u rive, ha'e ndajakarui vamos apenas descansar, e não vamos comer»
  ['pytu\'u', 'descansar', 'verbo', 'Verbos-chave', '😌', 'Japytu\'u rive, ha\'e ndajakarui.'],
  // p. 128 (-nhotỹ: «1. Plantar»); p. 17 (ára), lido na imagem: «avaxi nhanhotỹa ára a época em que plantamos o milho»
  ['nhotỹ', 'plantar', 'verbo', 'Verbos-chave', '🌱', 'Avaxi nhanhotỹa ára.'],
  // p. 98-99 (mãji'o, variante mandi'o: «Mandioca»); p. 18 (arẽ), lido na imagem: «mandi'o hi'arẽ ma a mandioca já
  // está podre»
  ['mandi\'o', 'mandioca', 'substantivo', 'Casa e comida', '🥔', 'Mandi\'o hi\'arẽ ma.'],
  // p. 99: «manduvi nome. Amendoim»; p. 98 (-nhemaimbe): «anhemaimbe ta ra'e manduvi re vou estourar amendoim»
  ['manduvi', 'amendoim', 'substantivo', 'Casa e comida', '🥜', 'Anhemaimbe ta ra\'e manduvi re.'],
  // p. 68: «jety nome. Batata-doce»; p. 9 (aky): «jety aky batata verde»
  ['jety', 'batata-doce', 'substantivo', 'Casa e comida', '🍠', 'Jety aky.'],
  // p. 82: «ka'a nome. 1. Erva-mate (Ilex paraguariensis) … ka'a rembypy pé de erva-mate. 2. Chimarrão»
  ['ka\'a', 'erva-mate', 'substantivo', 'Casa e comida', '🧉', 'Ka\'a rembypy.'],
  // p. 62 (jave py): «Dentro do tempo de: yro'y jave py no tempo do frio»
  ['yro\'y', 'frio', 'substantivo', 'Tempo', '🥶', 'Yro\'y jave py.'],
  // p. 89: «kuaxia nome (flexão xe- + Ø). Papel: amboparaxe kuaxia para quero escrever uma carta»
  ['kuaxia', 'papel', 'substantivo', 'Casa e comida', '📄', 'Amboparaxe kuaxia para.'],
  // p. 192 (vy): «xeryvy oo vy mboi oexa quando meu irmão foi, viu uma cobra»; p. 102: «xeryvy Vera ‘meu irmão mais
  // novo Vera’» (nome de parentesco: precisa de dono)
  ['xeryvy', 'irmão mais novo (meu irmão mais novo)', 'substantivo', 'Família', '👦', 'Xeryvy oo vy mboi oexa.'],
  // p. 100 (-ma'ẽ), lido na imagem: «1. Olhar: ama'ẽ hexe olhei para ele»
  ['ma\'ẽ', 'olhar', 'verbo', 'Verbos-chave', '👁️', 'Ama\'ẽ hexe.'],
  // p. 34 (-endu: «1. Ouvir»); p. 149 (poraeia): «opa ma poraeia nhaendu va'ekue já terminou o cantar que ouvíamos»
  ['endu', 'ouvir', 'verbo', 'Verbos-chave', '👂', 'Opa ma poraeia nhaendu va\'ekue.'],
  // p. 115 (-mombe'u): «Contar, relatar: tamombe'u xivi reko deixe-me contar sobre a onça»
  ['mombe\'u', 'contar', 'verbo', 'Verbos-chave', '🗨️', 'Tamombe\'u xivi reko.'],
  // p. 111 (-mbo'e): «Ensinar [lit., ‘fazer falar’]: xembo'e ke mba'emo re ensine-me alguma coisa»
  ['mbo\'e', 'ensinar', 'verbo', 'Verbos-chave', '🧑‍🏫', 'Xembo\'e ke mba\'emo re.'],
  // p. 177: «tetã nome. Cidade, país»; p. 68: «ojevy tetã gui voltou da cidade»
  ['tetã', 'cidade', 'substantivo', 'Lugares', '🏙️', 'Ojevy tetã gui.'],
  // ── B1.2: quem é quem (va'e, -gua) ──
  // p. 46 (-gua1): «tetã pygua habitante da cidade (uma pessoa que mora na cidade, tetã py)»
  ['tetã pygua', 'habitante da cidade', 'substantivo', 'Pessoas', '🧍', 'Tetã pygua.'],
  // p. 46 (-gua1): «mombyry guigua alguém que vem de longe»
  ['mombyry', 'longe', 'advérbio', 'Lugares', '🔭', 'Mombyry guigua.'],
  // p. 111 e p. 150: «porombo'ea nome. Professor, professora»; p. 132 (ore-): «orembo'ea nosso professor»
  ['porombo\'ea', 'professor, professora', 'substantivo', 'Pessoas', '🧑‍🏫', 'Orembo\'ea.'],
  // p. 29 (e'ỹ re), lido na imagem: «ha'e va'e pyávy ma huvixa ndokei re oiko naquela noite o chefe ficou sem dormir»;
  // p. 26: «huvixa … o chefe»
  ['huvixa', 'chefe', 'substantivo', 'Pessoas', '🪶', 'Ha\'e va\'e pyávy ma huvixa ndokei re oiko.'],
  // p. 4 (ae'i), lido na imagem: «xeirũ ae'i meu amigo íntimo»
  ['xeirũ', 'amigo (meu amigo)', 'substantivo', 'Pessoas', '🤝', 'Xeirũ ae\'i.'],
  // p. 70 (jo-2: «-mba'eaxy ‘doença’»); p. 187 (va'e), lido na imagem: «imba'eaxy va'e oĩ xero py o doente está na
  // minha casa»
  ['mba\'eaxy', 'doença (imba\'eaxy va\'e: o doente)', 'substantivo', 'Pessoas', '🤒', 'Imba\'eaxy va\'e oĩ xero py.'],
  // p. 147 (poropoanoa, «médico», de -poano); p. 189 (va'e rire): «Xepoano va'e rire! Se você me tivesse tratado! (eu
  // teria ficado curado)»
  ['poano', 'tratar, curar (um doente)', 'verbo', 'Verbos-chave', '🩺', 'Xepoano va\'e rire!'],
  // p. 191: «voxa nome. Bolsa, saco. (Empréstimo do port.)»; p. 187: «oo py ava voxa oguereko va'e a bolsa que o homem
  // tem dentro da casa»
  ['voxa', 'bolsa (empréstimo do português)', 'substantivo', 'Casa e comida', '👜', 'Oo py ava voxa oguereko va\'e.'],
  // p. 159 (-pytyvõ: «Ajudar»); p. 187, lido na imagem: «ajouxe xepytyvõ va'erã quero achar quem me ajude»
  ['pytyvõ', 'ajudar', 'verbo', 'Verbos-chave', '🫱', 'Ajouxe xepytyvõ va\'erã.'],
  // p. 139 (-pena): «1. Atender, cuidar (de algo ou alguém): opena gua'y kuery re cuida dos seus filhos»
  ['pena', 'cuidar', 'verbo', 'Verbos-chave', '🫶', 'Opena gua\'y kuery re.'],
  // p. 15 (-apu): «Mentira … (em função predicativa) Mentir: ndeapu eme ta'vy não minta»
  ['apu', 'mentir', 'verbo', 'Verbos-chave', '🤥', 'Ndeapu eme ta\'vy.'],
  // p. 193: «xapeo nome. Chapéu. (Empréstimo do port.)»; p. 46 (guarã): «ojogua xapeo xevy guarã comprou um chapéu
  // que vai pertencer a mim»
  ['xapeo', 'chapéu (empréstimo do português)', 'substantivo', 'Casa e comida', '👒', 'Ojogua xapeo xevy guarã.'],
  // p. 86 (kova'e), lido na imagem: «kova'e yvyra'a ma ja'u va'erã e'ỹ esta fruta não é para comer»
  ['yvyra\'a', 'fruta', 'substantivo', 'Casa e comida', '🍎', 'Kova\'e yvyra\'a ma ja\'u va\'erã e\'ỹ.'],
  // p. 56 (-ĩ), lido na imagem: «kanoã py oroĩ ficamos sentados no barco»
  ['kanoã', 'barco', 'substantivo', 'Natureza', '🛶', 'Kanoã py oroĩ.'],
  // p. 198: «yakã nome. Rio: oaxa yakã my cruzou o rio»
  ['yakã', 'rio', 'substantivo', 'Natureza', '🏞️', 'Oaxa yakã my.'],
  // p. 109: «mboka nome. Espingarda»; p. 163 (-raa): «araa mboka ixupe levei a espingarda a ele»
  ['mboka', 'espingarda', 'substantivo', 'Casa e comida', '🔫', 'Araa mboka ixupe.'],
  // p. 187 (va'e), lido na imagem: «anhetẽ va'e ‘o que é verdade’»
  ['anhetẽ', 'verdade', 'substantivo', 'Expressões', '✅', 'Anhetẽ va\'e.'],
  // p. 46 (-gua1, com uma pequena classe de nomes), lido na imagem: «ka'ygua cuia para chimarrão»
  ['ka\'ygua', 'cuia (de chimarrão)', 'substantivo', 'Casa e comida', '🥥', 'Ka\'ygua.'],
  // p. 46: «kygua pente [lit., ‘instrumento para pulgas’]»
  ['kygua', 'pente', 'substantivo', 'Casa e comida', '🪮', 'Kygua.'],
  // p. 135 (pa): «Peráta pa rereko? Você tem dinheiro?»
  ['peráta', 'dinheiro', 'substantivo', 'Casa e comida', '💵', 'Peráta pa rereko?'],
  // ── B1.3: fazer, fazer-se, fazer um ao outro (mbo-, -uka, ero-, je-, jo-) ──
  // p. 136 (-mbopara: «1. Enfeitar … 2. Escrever: xee amboparaxe kuaxia eu quero escrever uma carta, livro, história,
  // etc. [lit., ‘quero enfeitar papel’]»)
  ['mbopara', 'escrever (lit. “enfeitar”)', 'verbo', 'Verbos-chave', '✍️', 'Xee amboparaxe kuaxia.'],
  // p. 71 (-jogua: «1. Comprar»); p. 69-70 (jo-1): «ajogua xo'o comprei ou obtive carne»
  ['jogua', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Ajogua xo\'o.'],
  // p. 14 (-ape2): «xo'o oape tata py a carne ficou sapecada no fogo»
  ['xo\'o', 'carne', 'substantivo', 'Casa e comida', '🥩', 'Xo\'o oape tata py.'],
  // p. 19: «aroi nome. Arroz. (Empréstimo do port.)»; p. 71: «tetã gui ajogua aroi comprei arroz na cidade»
  ['aroi', 'arroz (empréstimo do português)', 'substantivo', 'Casa e comida', '🍚', 'Tetã gui ajogua aroi.'],
  // p. 70 (jo-1, nota 2): «je- ‘reflexivo’ (ajejoi ‘eu me lavei’)»
  ['jejoi', 'lavar-se', 'verbo', 'Verbos-chave', '🧼', 'Ajejoi.'],
  // p. 64 (je-): «ao omboi ojegui tirou a sua própria roupa»
  ['ao', 'roupa', 'substantivo', 'Casa e comida', '👕', 'Ao omboi ojegui.'],
  // p. 70 (jo-2): «jajoguero'a brigamos uns com os outros ou com alguém; vamos brigar»
  ['joguero\'a', 'brigar (uns com os outros)', 'verbo', 'Verbos-chave', '🤼', 'Jajoguero\'a.'],
  // p. 70 (jo-2): «jajogueroayvu combinamos uns com os outros ou com alguém; vamos conversar ou combinar»
  ['jogueroayvu', 'conversar (uns com os outros)', 'verbo', 'Verbos-chave', '💬', 'Jajogueroayvu.'],
  // p. 94 (kuri ka'arukue): «kuri ka'arukue jajoexa ju 'rã hoje à tarde vamos nos ver outra vez»
  ['joexa', 'ver-se (um ao outro), encontrar-se', 'verbo', 'Verbos-chave', '👀', 'Kuri ka\'arukue jajoexa ju \'rã.'],
  // p. 70 (jo-1, nota 3): «onhemi ‘escondeu-se’ … (compare o v. t. onhomi ‘escondeu’)»
  ['nhemi', 'esconder-se', 'verbo', 'Verbos-chave', '🫣', 'Onhemi.'],
  // p. 70 (jo-1, nota 3): «onheno ‘deitou-se’ (compare o v. t. onhono ‘deitou’)»
  ['nheno', 'deitar-se', 'verbo', 'Verbos-chave', '🛌', 'Onheno.'],
  // p. 82: «kavaju nome. Cavalo. (Empréstimo do espanhol caballo)»; p. 48 (guero-): «ava ogueronha kavaju o homem fez
  // o cavalo correr, montado nele»
  ['kavaju', 'cavalo (empréstimo do espanhol)', 'substantivo', 'Animais', '🐎', 'Ava ogueronha kavaju.'],
  // p. 122 (-nha): «Correr: mboi gui jagua onha ratã ovy o cachorro saiu correndo da cobra com força»
  ['nha', 'correr', 'verbo', 'Verbos-chave', '🏃', 'Mboi gui jagua onha ratã ovy.'],
  // p. 34 (-enduka, de -endu + -uka): «Avisar: aenduka ixupe avisei-o»
  ['enduka', 'avisar (lit. “fazer ouvir”)', 'verbo', 'Verbos-chave', '📣', 'Aenduka ixupe.'],
  // p. 154 (-pu'ã): «1. Levantar-se do repouso: apu'ã ha'amy levanto-me e fico de pé»
  ['pu\'ã', 'levantar-se', 'verbo', 'Verbos-chave', '🧍', 'Apu\'ã ha\'amy.'],
  // p. 188 (va'ekue): «xejejoko vy mba'eve nda'ei va'ekue controlando-me a mim mesmo, não disse nada»; p. 70: «ojejoko
  // ‘controlou-se’»
  ['jejoko', 'controlar-se', 'verbo', 'Verbos-chave', '🧘', 'Xejejoko vy mba\'eve nda\'ei va\'ekue.'],
  // p. 140 (-pena uka): «aguata vy xeru pe apena uka xerymba kuery re viajando, pedi que meu pai cuidasse dos meus
  // animais»
  ['xerymba', 'animal de criação (meu animal)', 'substantivo', 'Animais', '🐓', 'Aguata vy xeru pe apena uka xerymba kuery re.'],
  // p. 38 (ero-), lido na imagem: «kavaju aronha, yvate rupi aropo fiz o cavalo correr (acompanhando-o), fi-lo pular
  // alto (acompanhando-o)»
  ['yvate', 'alto', 'advérbio', 'Lugares', '⬆️', 'Kavaju aronha, yvate rupi aropo.'],
  // ── B1.4: contar o que se viu e o que se ouviu dizer ──
  // p. 29 (-'e: «Dizer»; «a'e, ha'e (eu) digo»); p. 188 (va'ekue): «“Peju” ha'e va'ekue eu disse, “Venham”»
  ['\'e', 'dizer', 'verbo', 'Verbos-chave', '🗣️', '“Peju” ha\'e va\'ekue.'],
  // p. 200 (yma: «No passado remoto, antigamente»); p. 188, lido na imagem: «yma xekyrĩ jave ma xee xeapu rei va'ekue
  // antigamente, quando eu era menino, eu mentia demais»
  ['yma', 'antigamente', 'advérbio', 'Tempo', '🏺', 'Yma xekyrĩ jave ma xee xeapu rei va\'ekue.'],
  // p. 104 e p. 201 (mba'eypy: «Mito [lit., ‘começo de algo’]»); p. 200: «mba'eypy yma guare história antiga»
  ['mba\'eypy', 'mito (lit. “começo de algo”)', 'substantivo', 'Cultura', '📜', 'Mba\'eypy yma guare.'],
  // p. 200 (ymagua): «2. Um dos antigos: ymagua kuery os antigos»
  ['ymagua kuery', 'os antigos', 'substantivo', 'Cultura', '👴', 'Ymagua kuery.'],
  // p. 184: «urukure'a nome. Coruja»; p. 100-101 (-ma'ẽ guaxu), lido na imagem: «Urukure'a kuery je oma'ẽ guaxu 'rã
  // oke vy … Dizem que corujas, dormindo, ficam com os olhos bem abertos»
  ['urukure\'a', 'coruja', 'substantivo', 'Animais', '🦉', 'Urukure\'a kuery je oma\'ẽ guaxu \'rã oke vy.'],
  // p. 95: «kyju nome. Grilo»; p. 124 (-nhembiara): «urukure'a ma onhembiara 'rã oikovy kyju, tarave, ha'e nunga'i re
  // a coruja toma como presa o grilo, a barata, e coisinhas dessa natureza»
  ['kyju', 'grilo', 'substantivo', 'Animais', '🦗', 'Urukure\'a ma onhembiara \'rã oikovy kyju, tarave, ha\'e nunga\'i re.'],
  // tarave (barata): Dooley 2006, p. 124 (na frase acima). O exemplo é de Cadogan, «Ayvu Rapyta» (1959), cap. XVIII,
  // conto da moça que procura quem canta bonito (PDF da USP, p. 176, lido na imagem): «-Aporaéi ko, avei, e'i
  // tarave». Mbyá do Guairá, outra variedade; grafia convertida pela regra declarada em gramatica.ts (sem os acentos
  // de tonicidade de Cadogan)
  ['tarave', 'barata', 'substantivo', 'Animais', '🪳', 'Aporaei ko, avei, e\'i tarave.'],
  // p. 149 (-poraei: «1. Cantar: oporaei atãmba okuapy todos cantaram bem alto. 2. Rezar, louvar»)
  ['poraei', 'cantar', 'verbo', 'Verbos-chave', '🎤', 'Oporaei atãmba okuapy.'],
  // p. 109 e p. 149 (mboraei: «Canção: pevy'a ke mboraei rupi celebrem-se com canção»)
  ['mboraei', 'canção', 'substantivo', 'Cultura', '🎵', 'Pevy\'a ke mboraei rupi.'],
  // p. 80: «karaja nome. Bugio-preto»; p. 185 (-va, «mudar-se»): «karaja ova yvyra mboae re o bugio mudou-se para
  // outra árvore»
  ['karaja', 'bugio (macaco)', 'substantivo', 'Animais', '🐵', 'Karaja ova yvyra mboae re.'],
  // p. 136: «parakau nome. Papagaio». O exemplo é de Cadogan, «Ayvu Rapyta» (1959), cap. XVIII, canto com que as
  // crianças acompanham as brincadeiras (PDF da USP, p. 177, lido na imagem): «Parakáo ndaje omano» («Dicen que el
  // loro ha muerto»). Mbyá do Guairá; conversão pela regra declarada em gramatica.ts (sem os acentos de Cadogan; a
  // palavra que Dooley registra vai na grafia dele: parakáo → parakau). «Ndaje» é a forma do Guairá; Dooley tem «je»
  ['parakau', 'papagaio', 'substantivo', 'Animais', '🦜', 'Parakau ndaje omano.'],
  // p. 167 (ra'u): «1. Em sonho: okyje ra'u sonhou que ficava com medo»; «ra'u rupi aikuaa sei por sonho»
  ['ra\'u', 'em sonho', 'advérbio', 'Tempo', '💤', 'Okyje ra\'u.'],
  // p. 167 (ra'e): «opa ra'e já terminou (o que você só agora está constatando)»
  ['opa', 'terminar, acabar', 'verbo', 'Verbos-chave', '🔚', 'Opa ra\'e.'],
  // p. 175: «tatu nome. Tatu». O exemplo é de Cadogan, «Ayvu Rapyta», cap. XVIII (PDF da USP, p. 176, lido na
  // imagem): «-Aporaéi ko, avei, e'i tatu» (conversão pela regra declarada)
  ['tatu', 'tatu', 'substantivo', 'Animais', '🦔', 'Aporaei ko, avei, e\'i tatu.'],
  // p. 94 (kuri2): «Hoje mais cedo ou mais tarde (ação presenciada pelo falante): aju kuri vim hoje»
  ['kuri', 'hoje (mais cedo ou mais tarde, visto por quem fala)', 'advérbio', 'Tempo', '🕰️', 'Aju kuri.'],
  // p. 63 (je: «Indica fonte indireta de informação»): «xeryvy je oexa kuri mboi dizem que meu irmão viu uma cobra»
  ['je', 'dizem que, diz que (o que se ouviu contar)', 'partícula', 'Expressões', '👂', 'Xeryvy je oexa kuri mboi.'],
  // p. 167 (ra'e: «Indica um descobrimento»), lido na imagem: «avaẽ rã oo ra'e quando cheguei, descobri que ele tinha
  // ido»
  ['ra\'e', 'pelo visto, então (descoberta de quem fala)', 'partícula', 'Expressões', '💡', 'Avaẽ rã oo ra\'e.'],
  // p. 119 (nda'u: «pergunta tipo “será quê?”»): «Ndee mba'eve ri nda'u nderejapoi? Será que você não fez nada?»
  ['nda\'u', 'será que…? (pergunta)', 'partícula', 'Perguntas', '🤨', 'Ndee mba\'eve ri nda\'u nderejapoi?'],
];

export const VOCAB_GUN = buildVocab('gun', ROWS);
