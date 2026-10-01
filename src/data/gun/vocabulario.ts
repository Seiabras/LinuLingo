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
];

export const VOCAB_GUN = buildVocab('gun', ROWS);
