import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do zulu (isiZulu) — nível A1 (unidades 1 e 2), 69 palavras. Toda palavra foi conferida
 * individualmente nesta sessão, página por página, nunca assumida a partir do isiXhosa (língua muito
 * próxima, já no app como “xh”, mas verificada à parte).
 *
 * Fontes:
 * 1) en.wikipedia.org/wiki/Zulu_language — classificação genealógica, número de falantes, região,
 *    estatuto oficial, os três pontos de clique (c, q, x) e sua descrição articulatória, os dígrafos da
 *    escrita, e as referências culturais (o romance “Insila kaShaka”, de John Dube, 1930; os escritores
 *    Dhlomo, Vilakazi e Mtshali; o filme “Yesterday”, indicado ao Oscar; falas em zulu em “O Rei Leão”;
 *    a canção “Jerusalema”, 2019, com letra em zulu).
 * 2) en.wikipedia.org/wiki/Zulu_grammar — a tabela de prefixos de sujeito (ngi-/u-/si-/ni-/u-(classe 1)/
 *    ba-(classe 2) e outras classes), a cópula (“ng-” antes de vogal) com os exemplos citados ali mesmo
 *    “ngumama” (é [minha] mãe) e “nginguḿfâzi” (eu sou mulher), a regra do infixo “-ya-” (forma disjunta,
 *    sem nada depois do verbo) e sua ausência quando o verbo é seguido de objeto (forma conjunta), a
 *    negação do presente (fórmula “a-[concordância secundária]-...-i”, com os exemplos citados ali
 *    “Akahambi” — ele/ela não vai — e “Akangisizi” — ele/ela não me ajuda), e os exemplos de
 *    concordância de objeto “Ngiyambona” (eu o/a vejo) e “Ngimnika isipho” (eu dou um presente a ele/
 *    ela).
 * 3) en.wiktionary.org/wiki/<palavra> (uma página por palavra) para classe nominal, plural, classe
 *    gramatical e significado de: sawubona (interjeição, contração de “siyakubona”, “nós te vemos”),
 *    sanibonani, unjani (com o plural “ninjani” citado na mesma página), ngiyaphila, yebo, cha,
 *    ngiyabonga, ngiyaxolisa, hamba (com a tabela de conjugação completa, todas as classes), kahle,
 *    -cela (cuja tabela de conjugação traz “ngicela”/“ngiyacela” como formas de primeira pessoa), mina,
 *    wena, yena, thina, nina, bona (com três entradas: pronome de classe 2 “eles/elas”, pronome de
 *    classe 14, e o verbo “ver” — usado aqui só como pronome, para não repetir “ver” como palavra própria
 *    do vocabulário), umuntu, umama (classe 1a; o Wiktionary traduz como “minha mãe” — ver a observação
 *    sobre substantivos de parentesco abaixo), ubaba (classe 1a, mesma observação), umntwana, isihlanu,
 *    isithupha (classe 7; também significa “polegar” — contar nos dedos começa no polegar), isikhombisa
 *    (classe 7; também “dedo indicador”), isishiyagalombili, isishiyagalolunye, ishumi (classe 5),
 *    ikhanda, iso, isandla, unyawo, umlenze, ukudla (infinitivo/substantivo do verbo -dla), amanzi,
 *    inyama, iqanda (também “zero”), ubisi, ilanga, inyanga (também “mês”, numa segunda etimologia
 *    também “curandeiro tradicional” — não usada aqui), inkanyezi, umlilo, umuthi (também “remédio”),
 *    inkomo, inja, ikati (empréstimo do africâner “kat”), inkukhu, inyoni, mnyama, mhlophe, bomvu,
 *    luhlaza (confirmado: cobre verde E azul, “green, blue”), ncombo (amarelo — conferido palavra por
 *    palavra; a categoria de cores do Wiktionary trazia essa palavra com uma legenda trocada com
 *    “nsundu”, por isso as duas foram checadas em separado), khulu, dla (também “beber”, mas usado aqui
 *    só como “comer”), funa, thanda, azi, khuluma, funda (aprender/estudar/ler), phila (estar bem, estar
 *    vivo — com “uyaphila” e “siyaphila” citados na própria tabela de conjugação), angazi (frase feita:
 *    “eu não sei”), ubani (classe 1a, “quem é”, com o exemplo citado ali “Ubani lo muntu?”, quem é essa
 *    pessoa?), -ni (pronome preso, “o quê”, com os exemplos citados ali “Udlani?”, o que você come/come?,
 *    e sua forma copulativa “yini”, com o exemplo “Yini lokhu?”, o que é isso?), isiZulu (classe 7, “a
 *    língua zulu”), indlu, isikole (empréstimo do africâner “skool”), incwadi, sala (“ficar,
 *    permanecer”).
 * 4) zu.wiktionary.org/wiki/-thathu, -nye, -bili, -ne — o Wiktionary em inglês tem entradas para essas
 *    raízes numerais presas, mas o texto delas não veio completo nesta sessão; o Wiktionary em zulu
 *    confirma objetivamente os quatro: “-thathu” = three, “-nye” = “other”/“one”, “-bili” = two, “-ne” =
 *    four.
 * 5) en.wikivoyage.org/wiki/Zulu_phrasebook — as formas de contagem realmente usadas para “um” a
 *    “quatro” (kunye, kubili, kuthathu, kune — a raiz numeral presa, confirmada na fonte 4, com o
 *    prefixo “ku-” também confirmado como concordância de sujeito das classes 15/17 na fonte 2, e
 *    atestado por inteiro nessa mesma tabela de conjugação do verbo -hamba: “kuyahamba”/“kuhamba”), além
 *    de “cinco” a “dez” (que já são os mesmos substantivos de classe 7/5 confirmados na fonte 3), a frase
 *    de despedida “Sala kahle” / “Hamba kahle” e a pergunta/resposta de apresentação “Ungubani igama
 *    lakho?” / “Igama lami ngingu…”.
 *
 * Duas observações sobre frases construídas nesta entrega (nunca uma palavra nova, só combinações de
 * palavras e regras já confirmadas acima):
 * a) Formas de pessoa não mostradas literalmente numa tabela de conjugação (como “niyaphila”,
 *    “bayaphila” ou “iyadla”) seguem o mesmíssimo padrão regular confirmado em várias outras tabelas de
 *    conjugação nesta sessão: a de -hamba traz explicitamente “niyahamba”/“nihamba” (classe 2ª pessoa do
 *    plural) e “bayahamba”/“bahamba” (classe 2, “eles”) e “iyahamba”/“ihamba” (classe 9) — o mesmo
 *    prefixo de sujeito e o mesmo infixo “-ya-” valem para qualquer verbo regular, incluindo -phila e
 *    -dla, cujas próprias tabelas já confirmam a mesma alternância para as pessoas eu/você/nós.
 * b) Substantivos de parentesco de classe 1a como “umama” e “ubaba” aparecem no Wiktionary já traduzidos
 *    como “minha mãe”/“meu pai”: por isso as frases de exemplo abaixo os tratam como “mãe”/“pai” em
 *    sentido genérico (a mesma solução do isiXhosa para “umama”/“utata”), sem inventar uma forma
 *    diferente para “a mãe de alguém”, que nenhuma fonte consultada aqui cobre em detalhe.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['sawubona', 'oi, olá (para uma pessoa; contração de “siyakubona”, nós te vemos)', 'interjeição', 'Expressões', '👋', 'Sawubona! Unjani?'],
  ['sanibonani', 'oi, olá (para várias pessoas, ou com respeito a alguém mais velho ou estranho)', 'interjeição', 'Expressões', '👋', 'Sanibonani!'],
  ['ngiyabonga', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ngiyabonga, Linu!'],
  ['ngiyaxolisa', 'desculpa, eu peço desculpas', 'expressão', 'Expressões', '🙏', 'Ngiyaxolisa, Linu!'],
  ['unjani', 'como você está? (plural: ninjani)', 'expressão', 'Expressões', '❓', 'Unjani, Linu?'],
  ['ngiyaphila', 'eu estou bem, eu estou saudável', 'expressão', 'Expressões', '👍', 'Ngiyaphila, ngiyabonga.'],
  // ── Essenciais ──
  ['yebo', 'sim', 'advérbio', 'Essenciais', '👍', 'Yebo, ngiyabonga.'],
  ['cha', 'não', 'interjeição', 'Essenciais', '👎', 'Cha, ngiyabonga.'],
  ['yini', 'o que é?, o quê (forma copulativa de “-ni”)', 'pronome', 'Essenciais', '❓', 'Yini lokhu?'],
  ['ubani', 'quem (é)?', 'pronome', 'Essenciais', '❓', 'Ubani lo muntu?'],
  ['ngicela', 'por favor (lit. eu peço)', 'interjeição', 'Essenciais', '🙏', 'Ngicela amanzi.'],
  // ── Pessoas ──
  ['mina', 'eu, mim (pronome de ênfase)', 'pronome', 'Pessoas', '🙋', 'Mina ngiyaphila.'],
  ['wena', 'você, tu (pronome de ênfase)', 'pronome', 'Pessoas', '🫵', 'Wena unjani?'],
  ['yena', 'ele, ela (pronome de ênfase, classe 1)', 'pronome', 'Pessoas', '👤', 'Yena uyaphila.'],
  ['thina', 'nós (pronome de ênfase)', 'pronome', 'Pessoas', '🙌', 'Thina sifunda isiZulu.'],
  ['nina', 'vocês (pronome de ênfase)', 'pronome', 'Pessoas', '👥', 'Nina ninjani?'],
  ['bona', 'eles, elas (pronome de ênfase, classe 2)', 'pronome', 'Pessoas', '👫', 'Bona bayaphila.'],
  ['umuntu', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Ngibona umuntu.'],
  ['umama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ngithanda umama.'],
  ['ubaba', 'pai', 'substantivo', 'Pessoas', '👨', 'Ngibona ubaba.'],
  ['umntwana', 'criança, filho, filha', 'substantivo', 'Pessoas', '🧒', 'Ngibona umntwana.'],
  // ── Natureza ──
  ['ilanga', 'sol; dia', 'substantivo', 'Natureza', '☀️', 'Ngibona ilanga.'],
  ['inyanga', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Ngibona inyanga.'],
  ['inkanyezi', 'estrela', 'substantivo', 'Natureza', '⭐', 'Ngibona inkanyezi.'],
  ['umlilo', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ngibona umlilo.'],
  ['umuthi', 'árvore; remédio', 'substantivo', 'Natureza', '🌳', 'Ngibona umuthi.'],
  // ── Animais ──
  ['inja', 'cachorro', 'substantivo', 'Animais', '🐕', 'Ngithanda inja.'],
  ['ikati', 'gato', 'substantivo', 'Animais', '🐈', 'Ngithanda ikati.'],
  ['inkukhu', 'galinha', 'substantivo', 'Animais', '🐔', 'Ngidla inkukhu.'],
  ['inkomo', 'vaca, boi', 'substantivo', 'Animais', '🐄', 'Ngibona inkomo.'],
  ['inyoni', 'pássaro', 'substantivo', 'Animais', '🐦', 'Ngibona inyoni.'],
  // ── Alimentação ──
  ['ukudla', 'comida', 'substantivo', 'Alimentação', '🍽️', 'Ngifuna ukudla.'],
  ['inyama', 'carne', 'substantivo', 'Alimentação', '🍖', 'Ngidla inyama.'],
  ['iqanda', 'ovo (também “zero”)', 'substantivo', 'Alimentação', '🥚', 'Ngidla iqanda.'],
  ['amanzi', 'água', 'substantivo', 'Alimentação', '💧', 'Ngifuna amanzi.'],
  ['ubisi', 'leite', 'substantivo', 'Alimentação', '🥛', 'Ngifuna ubisi.'],
  // ── Corpo ──
  ['ikhanda', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Ngibona ikhanda.'],
  ['iso', 'olho', 'substantivo', 'Corpo', '👁️', 'Ngibona iso.'],
  ['isandla', 'mão', 'substantivo', 'Corpo', '✋', 'Ngibona isandla.'],
  ['unyawo', 'pé', 'substantivo', 'Corpo', '🦶', 'Ngibona unyawo.'],
  ['umlenze', 'perna', 'substantivo', 'Corpo', '🦵', 'Ngibona umlenze.'],
  // ── Casa ──
  ['indlu', 'casa', 'substantivo', 'Casa', '🏠', 'Ngibona indlu.'],
  ['isikole', 'escola', 'substantivo', 'Casa', '🏫', 'Ngibona isikole.'],
  ['incwadi', 'livro; carta', 'substantivo', 'Casa', '📖', 'Ngifunda incwadi.'],
  // ── Números ──
  ['kunye', 'um', 'numeral', 'Números', '1️⃣', 'Kunye, kubili, kuthathu.'],
  ['kubili', 'dois', 'numeral', 'Números', '2️⃣', 'Kubili, kuthathu, kune.'],
  ['kuthathu', 'três', 'numeral', 'Números', '3️⃣', 'Kubili, kuthathu, kune.'],
  ['kune', 'quatro', 'numeral', 'Números', '4️⃣', 'Kunye, kubili, kuthathu, kune.'],
  ['isihlanu', 'cinco', 'numeral', 'Números', '5️⃣', 'Isihlanu, isithupha.'],
  ['isithupha', 'seis (também “polegar”)', 'numeral', 'Números', '6️⃣', 'Isihlanu, isithupha, isikhombisa.'],
  ['isikhombisa', 'sete (também “dedo indicador”)', 'numeral', 'Números', '7️⃣', 'Isithupha, isikhombisa, isishiyagalombili.'],
  ['isishiyagalombili', 'oito', 'numeral', 'Números', '8️⃣', 'Isikhombisa, isishiyagalombili, isishiyagalolunye.'],
  ['isishiyagalolunye', 'nove', 'numeral', 'Números', '9️⃣', 'Isishiyagalombili, isishiyagalolunye, ishumi.'],
  ['ishumi', 'dez', 'numeral', 'Números', '🔟', 'Isishiyagalolunye, ishumi.'],
  // ── Verbos-chave ──
  ['hamba', 'ir, andar (ngiyahamba = eu vou)', 'verbo', 'Verbos-chave', '🚶', 'Ngiyahamba.'],
  ['sala', 'ficar, permanecer', 'verbo', 'Verbos-chave', '🧍', 'Sala kahle!'],
  ['dla', 'comer (ngiyadla = eu como)', 'verbo', 'Verbos-chave', '🍽️', 'Ngiyadla.'],
  ['funa', 'querer (ngiyafuna = eu quero)', 'verbo', 'Verbos-chave', '💭', 'Ngiyafuna.'],
  ['thanda', 'amar, gostar de (ngiyathanda = eu gosto de)', 'verbo', 'Verbos-chave', '❤️', 'Ngiyathanda.'],
  ['azi', 'saber (angazi = eu não sei)', 'verbo', 'Verbos-chave', '🧠', 'Angazi.'],
  ['khuluma', 'falar (ngiyakhuluma = eu falo)', 'verbo', 'Verbos-chave', '🗣️', 'Ngikhuluma isiZulu.'],
  ['funda', 'aprender, estudar, ler (ngiyafunda = eu estudo)', 'verbo', 'Verbos-chave', '📚', 'Ngifunda isiZulu.'],
  // ── Cores e descrições ──
  ['mnyama', 'preto', 'adjetivo', 'Cores e descrições', '⚫', 'Mnyama.'],
  ['mhlophe', 'branco', 'adjetivo', 'Cores e descrições', '⚪', 'Mhlophe.'],
  ['bomvu', 'vermelho', 'adjetivo', 'Cores e descrições', '🔴', 'Bomvu.'],
  ['luhlaza', 'verde, azul (o zulu usa a mesma palavra para as duas cores)', 'adjetivo', 'Cores e descrições', '🟢', 'Luhlaza.'],
  ['ncombo', 'amarelo', 'adjetivo', 'Cores e descrições', '🟡', 'Ncombo.'],
  ['khulu', 'grande, principal', 'adjetivo', 'Cores e descrições', '📏', 'Khulu.'],
  ['kahle', 'bem, direito, com cuidado', 'advérbio', 'Cores e descrições', '✅', 'Hamba kahle!'],
];

export const VOCAB_ZU = buildVocab('zu', ROWS);
