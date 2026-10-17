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
  ['ava', 'homem', 'substantivo', 'Pessoas', '👨', 'Kova\'e ava guaxu.'],
  ['kunha', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kova\'e kunha porã.'],
  // ── Família ──
  ['mitã', 'bebê, criança', 'substantivo', 'Família', '🧒', 'Kova\'e mitã kyrĩ.'],
  ['xy', 'mãe', 'substantivo', 'Família', '👩', 'Xy porã.'],
  ['xamoi', 'avô; forma geral para falar de ancião, sábio, conhecedor da cultura', 'substantivo', 'Família', '👴', 'Xamoi arandu.'],
  ['xaryi', 'avó; forma geral para falar de anciã, sábia, conhecedora da cultura', 'substantivo', 'Família', '👵', 'Xaryi arandu.'],
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
  ['ayvu', 'falar, dizer (como substantivo: fala, língua)', 'verbo', 'Verbos-chave', '🗣️', 'Ayvu porã.'],
  ['guata', 'andar, viajar', 'verbo', 'Verbos-chave', '🚶', 'Guata porã.'],
  ['y\'u', 'beber água', 'verbo', 'Verbos-chave', '🥤', 'Y\'u porã.'],
  ['iko', 'viver, existir, estar; acontecer', 'verbo', 'Verbos-chave', '🧍', 'Iko porã.'],
  ['jerovia', 'crer, acreditar', 'verbo', 'Verbos-chave', '🙏', 'Jerovia porã.'],
  ['arandu', 'ter sabedoria, ser sábio (em guarani mbyá é um verbo — não um adjetivo como no guarani paraguaio)', 'verbo', 'Verbos-chave', '🧠', 'Xamoi arandu.'],
  // ── Números ──
  ['peteĩ', 'um (lit. “um só, sem par”: a contagem mbyá forma pares dentro de grupos de cinco)', 'numeral', 'Números', '1️⃣', 'Peteĩ jagua.'],
  ['mokoĩ', 'dois (lit. “um par”)', 'numeral', 'Números', '2️⃣', 'Mokoĩ ava.'],
  ['mboapy', 'três (lit. “início de um novo par”)', 'numeral', 'Números', '3️⃣', 'Mboapy kunha.'],
  ['irundy', 'quatro (lit. “dois pares”)', 'numeral', 'Números', '4️⃣', 'Irundy mitã.'],
  // ── Cultura ──
  ['tekoa', 'aldeia (lit. “o lugar onde se semeia a vida”, segundo os costumes mbyá)', 'substantivo', 'Cultura', '🏘️', 'Tekoa porã.'],
  ['nhe\'e', 'espírito, alma', 'substantivo', 'Cultura', '✨', 'Nhe\'e porã.'],
  ['nhanderu', 'nosso Pai Supremo, Deus Criador', 'substantivo', 'Cultura', '🙏', 'Nhanderuete.'],
  ['opy\'i', 'casa de reza, onde se praticam dança, canto e cura', 'substantivo', 'Cultura', '🛖', 'Opy\'i guaxu.'],
  ['petyngua', 'cachimbo sagrado, usado nas cerimônias e para curar', 'substantivo', 'Cultura', '🪈', 'Petyngua porã.'],
  ['nhemongarai', 'batismo do nhe\'e (espírito), ritual em que se recebe o nome', 'substantivo', 'Cultura', '🕯️', 'Ka\'a\'i nhemongarai.'],
  ['nhandeayvu', 'nossa língua (como os falantes chamam o guarani mbyá: “nhande”, nosso, + “ayvu”, fala)', 'substantivo', 'Cultura', '💬', 'Nhandeayvu porã.'],
  ['xondaro', 'guardião, guerreiro', 'substantivo', 'Cultura', '🛡️', 'Xondaro arandu.'],
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
  ['xememby', 'filha (minha filha, dito pela mãe)', 'substantivo', 'Família', '👧', 'Xememby kuery.'],
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
];

export const VOCAB_GUN = buildVocab('gun', ROWS);
