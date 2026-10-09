import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do zulu (isiZulu) — A1 (unidades 1 e 2, 69 palavras, ver bloco de fontes original abaixo)
 * mais A2 (unidades 3 e 4, 27 palavras novas, acrescentadas nesta sessão — ver o bloco de fontes A2 mais
 * abaixo). Toda palavra foi conferida individualmente, página por página, nunca assumida a partir do
 * isiXhosa (língua muito próxima, já no app como “xh”, mas verificada à parte).
 *
 * Fontes (A1):
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
 *
 * Fontes (A2, 27 palavras novas, unidades 3 e 4): a mesma checagem palavra por palavra do bloco A1,
 * agora no Wiktionary em inglês (en.wiktionary.org/wiki/<palavra>, seção Zulu de cada página) para:
 * -za (vir; sem significado explícito na seção consultada, mas confirmado pela tradução “I will come”
 * dada para a própria forma “ngizokuza” em en.wikipedia.org/wiki/Zulu_grammar, e pelo imperativo “yiza”
 * citado via Doke e Vilakazi, Zulu-English Dictionary, 1972), -vula (abrir), -vala (fechar), -thenga
 * (comprar; também “pagar por”, “fazer compras”), -sebenza (trabalhar, funcionar), -biza (chamar;
 * também “custar”, “ser caro”), -phuma (sair, saber de; também “nascer”, do sol), -ngena (entrar),
 * -akha (construir, produzir), -siza (ajudar, beneficiar), -nika (dar, entregar, oferecer), izolo
 * (classe 5, “ontem” no singular e “orvalho” no plural “amazolo”, classe 6 — a mesma forma citada
 * também em en.wikipedia.org/wiki/Zulu_grammar, no exemplo “Sihambē izolo”, nós fomos ontem), kusasa
 * (advérbio, “amanhã”, também “no futuro”), namhlanje (advérbio, “hoje”), ubusuku (classe 14, “noite”,
 * com a forma locativa “ebusuku” confirmada na mesma página), ukusa (classe 15, “madrugada,
 * amanhecer”, infinitivo de “-sa”, com a forma locativa “ekuseni” confirmada na mesma página — a mesma
 * forma usada no roteiro de conversação da Wikivoyage para “manhã”), umngane (classe 1, plural “abangane”
 * classe 2, “amigo, companheiro”), imali (classe 9/10, “dinheiro”), isitolo (classe 7/8, “loja”),
 * isipho (classe 7/8, “presente”), imoto (classe 9/10, “carro”), ibhasi (classe 5/6, “ônibus”), indlela
 * (classe 9/10, “caminho, trilha; jeito, modo; (gramática) modo verbal”), iphoyisa (classe 5/6,
 * “policial”), udokotela (classe 1a/2a, “médico”, empréstimo do inglês “doctor”, com a forma locativa
 * “kudokotela”), isikhwama (classe 7/8, “bolsa, mala; também fundo [financeiro]”). Além do Wiktionary,
 * en.wikipedia.org/wiki/Zulu_grammar confirma, com exemplos citados ali mesmo: o passado recente (sufixo
 * “-ile”/“-ē”, exemplo “Sihambile”/“Sihambē izolo”, nós fomos/fomos ontem), o passado remoto (prefixo
 * “-ā-”, exemplo “Sāhamba”, nós fomos), a negação do passado (fórmula “a-[concordância secundária]-
 * ...-anga”, exemplos “Asihambanga”, nós não fomos, e “Asimbonanga”, nós não o/a vimos), o futuro
 * imediato e distante (prefixos “-zo(ku)-”/“-yo(ku)-”, exemplos “Ngizokuza”/“Ngiyokuza”, eu virei,
 * “Ngizokwakha”/“Ngiyokwakha”, eu vou construir, e “Ngizomsiza”/“Ngiyomsiza”, eu vou ajudá-lo/a — este
 * último já com a concordância de objeto de classe 1, “-m-”), a negação do futuro (fórmula
 * “a-[concordância secundária]-zu(ku)-/yu(ku)-...-a”, exemplos “Angizukuza”/“Angiyukuza”, eu não virei),
 * e a concordância de objeto (tabela com “-ngi-” — eu/me —, “-m-” — classe 1 —, “-zi-” — reflexivo —,
 * e os exemplos “Ngiyambona”, eu o/a vejo, “Ngimnika isipho”, eu dou um presente a ele/ela, “Ngisize!”,
 * ajude-me!, e “uyazibona”/“ngiyazigeza”, ele se vê/eu me lavo — exemplos citados para ilustrar a regra,
 * não necessariamente com os verbos “bona”/“geza” acrescentados ao vocabulário). en.wikipedia.org/wiki/
 * Zulu_language confirma ainda, como curiosidade das unidades 3 e 4: o primeiro livro de gramática do
 * isiZulu foi publicado na Noruega, em 1850, e o primeiro texto escrito na língua foi uma tradução da
 * Bíblia, de 1883; o valor do dígrafo “bh” (“ukubhala”, escrever) é a oclusiva bilabial sonora comum
 * /b/, diferente do “b” sozinho do isiZulu, que é uma implosiva /ɓ/ (exemplo “ubaba”, já no vocabulário);
 * o dígrafo “dl” (“ukudla”, comer — também já no vocabulário) é a fricativa lateral alveolar sonora
 * /ɮ/; o dígrafo “kh” (“ikhanda”, cabeça — já no vocabulário) é a oclusiva velar aspirada /kʰ/; e o
 * dígrafo “ng” (“ingane”, criança) é a nasal velar /ŋ(ɡ)/.
 *
 * Como nas frases do bloco A1, nenhuma frase nova desta entrega usa uma concordância de classe ou uma
 * conjugação não vista nas fontes: o futuro de “-za” e “-akha” (que levam o infixo “-ku-”/“-kw-” por
 * serem radicais monossilábicos ou iniciados por vogal) e o futuro de “-siza” com a concordância de
 * objeto “-m-” são citados quase literalmente de en.wikipedia.org/wiki/Zulu_grammar; o futuro de
 * “-hamba” (“Ngizohamba”) e o passado recente de “-hamba” (“Ngihambile”) e “-sebenza”/“-lala” (ambos já
 * com a 1ª pessoa do singular tabelada no Wiktionary, em “ngizolala”/“ngizobiza”) só trocam a pessoa
 * já atestada em outras tabelas de conjugação (si- → ngi-, mesmo princípio do item “a)” acima) pela
 * fórmula de tempo também já atestada, nunca uma classe nova. Verbos seguidos de locativo (não de
 * objeto direto) usam por cautela a forma disjunta (com “-ya-”), e não a conjunta, já que as fontes só
 * confirmam a forma conjunta diante de OBJETO.
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
  // ── Tempo (A2) ──
  ['izolo', 'ontem (também “orvalho”, no plural “amazolo”)', 'substantivo', 'Tempo', '⏮️', 'Ngihambile izolo.'],
  ['namhlanje', 'hoje', 'advérbio', 'Tempo', '📆', 'Ngiyasebenza namhlanje.'],
  ['kusasa', 'amanhã (também “no futuro”)', 'advérbio', 'Tempo', '⏭️', 'Ngizohamba kusasa.'],
  ['ubusuku', 'noite', 'substantivo', 'Tempo', '🌃', 'Ngiyalala ebusuku.'],
  ['ukusa', 'madrugada, amanhecer (infinitivo de “-sa”)', 'substantivo', 'Tempo', '🌅', 'Ngiyahamba ekuseni.'],
  // ── Verbos-chave (A2) ──
  ['za', 'vir (imperativo “yiza”; futuro “ngizokuza” = eu virei)', 'verbo', 'Verbos-chave', '➡️', 'Ngizokuza.'],
  ['vula', 'abrir', 'verbo', 'Verbos-chave', '🔓', 'Ngivula incwadi.'],
  ['vala', 'fechar', 'verbo', 'Verbos-chave', '🔒', 'Ngivala incwadi.'],
  ['ngena', 'entrar', 'verbo', 'Verbos-chave', '📥', 'Ngiyangena.'],
  ['phuma', 'sair (também “nascer”, do sol)', 'verbo', 'Verbos-chave', '📤', 'Ngiyaphuma.'],
  ['sebenza', 'trabalhar, funcionar', 'verbo', 'Verbos-chave', '💼', 'Ngiyasebenza.'],
  ['lala', 'dormir, deitar-se', 'verbo', 'Verbos-chave', '😴', 'Ngiyalala.'],
  ['thenga', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Ngithenga isipho.'],
  ['siza', 'ajudar', 'verbo', 'Verbos-chave', '🆘', 'Ngizomsiza.'],
  ['nika', 'dar', 'verbo', 'Verbos-chave', '🤲', 'Ngimnika isipho.'],
  ['akha', 'construir', 'verbo', 'Verbos-chave', '🏗️', 'Ngizokwakha indlu.'],
  ['biza', 'chamar; custar, ser caro', 'verbo', 'Verbos-chave', '📢', 'Ibhasi liyabiza.'],
  // ── Pessoas (A2) ──
  ['umngane', 'amigo', 'substantivo', 'Pessoas', '🫂', 'Ngithanda umngane.'],
  // ── Compras e viagem (A2) ──
  ['isipho', 'presente (regalo)', 'substantivo', 'Compras e viagem', '🎁', 'Ngifuna isipho.'],
  ['imali', 'dinheiro', 'substantivo', 'Compras e viagem', '💰', 'Ngicela imali.'],
  ['isitolo', 'loja', 'substantivo', 'Compras e viagem', '🏪', 'Ngibona isitolo.'],
  ['imoto', 'carro', 'substantivo', 'Compras e viagem', '🚗', 'Imoto iyahamba.'],
  ['ibhasi', 'ônibus', 'substantivo', 'Compras e viagem', '🚌', 'Ibhasi liyahamba.'],
  ['indlela', 'caminho, estrada; jeito, modo', 'substantivo', 'Compras e viagem', '🛣️', 'Ngibona indlela.'],
  ['iphoyisa', 'policial', 'substantivo', 'Compras e viagem', '👮', 'Ngibona iphoyisa.'],
  ['udokotela', 'médico, médica (empréstimo do inglês “doctor”)', 'substantivo', 'Compras e viagem', '🩺', 'Ngibona udokotela.'],
  ['isikhwama', 'bolsa, mala', 'substantivo', 'Compras e viagem', '👜', 'Ngibona isikhwama.'],
];

export const VOCAB_ZU = buildVocab('zu', ROWS);
