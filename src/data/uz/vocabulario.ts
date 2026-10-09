import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do uzbeque no alfabeto latino oficial (norma de 1995: dígrafos sh, ch, oʻ, gʻ, ng).
 * Idioma incompleto: cobre A1.1, A1.2, A2.1 e A2.2 — ver `incomplete` em index.ts. O uzbeque não
 * marca gênero gramatical.
 *
 * Fontes das palavras A2 (unidades 3 e 4, pesquisadas em 09/10/2026):
 * - Confirmadas por página própria do Wikcionário em inglês (en.wiktionary.org), seção uzbeque:
 *   yomgʻir (chuva), quyosh (sol, sinônimos oftob/shams), shamol (vento, sinônimo yel), shim
 *   (calça), kasalxona (hospital, sinônimo shifoxona), doʻkon (loja, do chagatai, com parentes no
 *   uigur/cazaque/turco), restoran (restaurante, empréstimo do russo рестора́н), och (com fome,
 *   do prototurco), shifokor (médico, de shifo “cura” + -kor), talaba (estudante, do árabe
 *   ṭalaba).
 * - maktab (escola): confirmada no Wikcionário em ALEMÃO (de.wiktionary.org/wiki/maktab, sem
 *   entrada equivalente em inglês nesta sessão), do árabe, com os compostos maktabdosh
 *   (colega de escola) e maktabxona também atestados.
 * - koʻcha (rua): não achamos uma entrada de dicionário isolada nesta sessão, mas a palavra está
 *   atestada em uso real (o artigo da Wikipédia em inglês sobre uma rua de Tashkent dá o nome
 *   “Shota Rustaveli ko'chasi”, “rua Shota Rustaveli”, com o sufixo possessivo -si de “ko'cha”).
 * - koʻylak (camisa, também “vestido” — o uzbeque não separa sempre os dois), poyabzal (sapato,
 *   calçado) e palto (casaco, empréstimo do russo пальто́, como no pacote do ucraniano/uk deste
 *   app): vêm de artigos acadêmicos sobre moda e vestuário uzbeque (periódicos de universidades
 *   uzbeques, journal.buxdu.uz e correlatos), não de um dicionário bilíngue; confiança um degrau
 *   abaixo das palavras confirmadas por Wikcionário, mas ainda fonte real, não inventada.
 * - oshpaz (cozinheiro, sobretudo especialista em plov): confirmada por um cruzamento com o
 *   Wikcionário RUSSO, no verbete do persa آشپز (ashpaz, “cozinheiro”), que cita “ошпаз” como o
 *   cognato uzbeque, mais um artigo acadêmico sobre nomes de ofícios culinários uzbeques.
 * - Corpo — bosh (cabeça), qoʻl (mão/braço, sem separar os dois), koʻz (olho), ogʻiz (boca) e
 *   oyoq (perna/pé, sem separar os dois): confirmadas por um artigo acadêmico sobre expressões
 *   idiomáticas somáticas no uzbeque (ex.: “boshdan oyoq”, da cabeça aos pés), não um dicionário,
 *   mas com os sentidos de cada palavra claros nos próprios exemplos citados.
 * - Sentimentos — xursand (feliz) e xafa (triste): confirmadas por um artigo acadêmico sobre
 *   palavras de emoção em uzbeque, que lista as duas lado a lado. Charchagan (cansado): mesma
 *   fonte, derivado de “charchamoq” (cansar-se).
 * - Quatro verbos básicos que faltavam pro currículo e pras histórias (bormoq, ir; ishlamoq,
 *   trabalhar; xohlamoq, querer; qidirmoq, procurar): não foi possível abrir o Wikcionário de novo
 *   nesta sessão (limite de acesso à internet durante o trabalho) pra confirmar página por
 *   página, como as demais palavras acima. São verbos básicos, de uso amplamente atestado em
 *   cursos e dicionários bilíngues de uzbeque e seguem a conjugação regular do idioma (-moq no
 *   infinitivo; presente contínuo com -yap- e a vogal de ligação explicada em gramatica.ts) —
 *   registrados aqui com honestidade sobre a fonte não ter sido reconferida nesta sessão.
 * - Números 20/30/50/100 (yigirma, oʻttiz, ellik, yuz): confirmados em listas de numerais
 *   cruzadas (curso de uzbeque do DLIFLC — Defense Language Institute — e outras fontes de
 *   ensino independentes, todas concordando nas quatro formas).
 * - kerak (precisar, "é necessário") e mumkin (poder, no sentido de permissão/possibilidade):
 *   confirmados por fontes acadêmicas sobre os verbos modais do uzbeque e pelo exemplo real
 *   "Siz ketishingiz mumkin" (você pode ir), já com o sufixo possessivo que o tópico de gramática
 *   explica — ver a nota completa em gramatica.ts.
 * - LACUNA HONESTA: não confirmamos nesta sessão as palavras pra "quente" e "frio" (tempo), nem
 *   um verbo conjugado pro tempo passado além do que já existe no pacote (o passado é explicado
 *   com os verbos que já estavam aqui desde o A1, como kelmoq → keldim). Preferimos deixar essas
 *   lacunas de fora a inventar uma palavra sem fonte.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['salom', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Salom! Yaxshimisiz?'],
  ['assalomu alaykum', 'a paz esteja com você (saudação respeitosa)', 'interjeição', 'Expressões', '🤝', 'Assalomu alaykum, doʻstim!'],
  ['vaalaykum assalom', 'e com você a paz (resposta)', 'interjeição', 'Expressões', '🤝', 'Vaalaykum assalom!'],
  ['xayr', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Xayr, koʻrishguncha!'],
  ['rahmat', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Rahmat, doʻstim!'],
  ['marhamat', 'por favor; de nada (ao oferecer algo)', 'interjeição', 'Expressões', '🙏', 'Bir choy, marhamat.'],
  ['kechirasiz', 'com licença, desculpe (para chamar atenção)', 'interjeição', 'Expressões', '🙏', 'Kechirasiz, siz kimsiz?'],
  // ── Essenciais ──
  ['ha', 'sim', 'advérbio', 'Essenciais', '👍', 'Ha, rahmat!'],
  ['yoʻq', 'não', 'advérbio', 'Essenciais', '👎', 'Yoʻq, rahmat.'],
  ['va', 'e', 'conjunção', 'Essenciais', null, 'Non va choy.'],
  ['yaxshi', 'bom; bem', 'adjetivo', 'Essenciais', '👍', 'Men yaxshiman, rahmat.'],
  ['yomon', 'mau', 'adjetivo', 'Essenciais', '👎', 'Bu yomon emas.'],
  ['juda', 'muito', 'advérbio', 'Essenciais', null, 'Juda yaxshi!'],
  ['bu', 'isto, este', 'pronome', 'Essenciais', '❓', 'Bu non.'],
  ['nima', 'o que', 'pronome', 'Essenciais', '❓', 'Bu nima?'],
  ['kim', 'quem', 'pronome', 'Essenciais', '❓', 'U kim?'],
  ['qalay', 'como', 'advérbio', 'Essenciais', '❓', 'Bu qalay?'],
  ['qayda', 'onde', 'advérbio', 'Essenciais', '❓', 'Non qayda?'],
  // ── Pessoas ──
  ['men', 'eu', 'pronome', 'Pessoas', '🙋', 'Men oʻqituvchiman.'],
  ['sen', 'tu, você (informal)', 'pronome', 'Pessoas', '🫵', 'Sen doʻstimsan.'],
  ['u', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'U doʻstim.'],
  ['biz', 'nós', 'pronome', 'Pessoas', '🙌', 'Biz doʻstmiz.'],
  ['siz', 'você (formal), vocês', 'pronome', 'Pessoas', '🫵', 'Siz oʻqituvchisiz.'],
  ['ular', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ular doʻstlar.'],
  ['ism', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mening ismim Linu.'],
  ['doʻst', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'U mening doʻstim.'],
  ['oila', 'família', 'substantivo', 'Pessoas', '👪', 'Bu mening oilam.'],
  ['ona', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mening onam yaxshi.'],
  ['ota', 'pai', 'substantivo', 'Pessoas', '👨', 'Mening otam u yerda.'],
  ['bola', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'Bu bola kichik.'],
  ['aka', 'irmão mais velho', 'substantivo', 'Pessoas', '🧑', 'U mening akam.'],
  ['uka', 'irmão mais novo', 'substantivo', 'Pessoas', '🧑', 'U mening ukam.'],
  ['opa', 'irmã mais velha', 'substantivo', 'Pessoas', '🧑', 'U mening opam.'],
  ['singil', 'irmã mais nova', 'substantivo', 'Pessoas', '🧑', 'Bu mening singlim.'],
  // ── Verbos-chave ──
  ['bilmoq', 'saber (men bilaman)', 'verbo', 'Verbos-chave', '🧠', 'Men bilaman.'],
  ['yemoq', 'comer (men yeyman)', 'verbo', 'Verbos-chave', '🍽️', 'Men non yeyman.'],
  ['ichmoq', 'beber (men ichaman)', 'verbo', 'Verbos-chave', '🥤', 'Men suv ichaman.'],
  ['oʻrganmoq', 'aprender, estudar (men oʻrganaman)', 'verbo', 'Verbos-chave', '📚', 'Men oʻzbek tilini oʻrganayapman.'],
  ['kelmoq', 'vir (men keldim = eu vim)', 'verbo', 'Verbos-chave', '🚶', 'Men Toshkentdan keldim.'],
  ['yashamoq', 'viver, morar (men yashayman)', 'verbo', 'Verbos-chave', '🏠', 'Men shaharda yashayman.'],
  ['aytmoq', 'dizer (men aytaman)', 'verbo', 'Verbos-chave', '🗣️', 'Men ismimni aytaman.'],
  ['koʻrmoq', 'ver (men koʻraman)', 'verbo', 'Verbos-chave', '👀', 'Men doʻstimni koʻraman.'],
  ['bormoq', 'ir (men boraman)', 'verbo', 'Verbos-chave', '🚶', 'Men maktabga boraman.'],
  ['ishlamoq', 'trabalhar (men ishlayman; presente contínuo men ishlayapman)', 'verbo', 'Verbos-chave', '💼', 'Men kasalxonada ishlayman.'],
  ['xohlamoq', 'querer (men xohlayman)', 'verbo', 'Verbos-chave', '💭', 'Men koʻylak xohlayman.'],
  ['qidirmoq', 'procurar (men qidirayapman)', 'verbo', 'Verbos-chave', '🔎', 'Men doʻstimni qidirayapman.'],
  // ── Casa e cidade ──
  ['uy', 'casa', 'substantivo', 'Casa', '🏠', 'Mening uyim katta.'],
  ['shahar', 'cidade', 'substantivo', 'Casa', '🏙️', 'Toshkent katta shahar.'],
  ['kitob', 'livro', 'substantivo', 'Casa', '📖', 'Bu kitob eski.'],
  // ── Alimentação ──
  ['suv', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Men suv ichaman.'],
  ['non', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Non yaxshi.'],
  ['choy', 'chá', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'Bir choy, marhamat.'],
  ['sut', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Men sut ichaman.'],
  ['goʻsht', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Bu goʻsht yaxshi.'],
  ['tuz', 'sal', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'Tuz qayda?'],
  // ── Animais ──
  ['it', 'cachorro', 'substantivo', 'Animais', '🐕', 'It uyda.'],
  ['mushuk', 'gato', 'substantivo', 'Animais', '🐈', 'Mushuk qora.'],
  ['qush', 'pássaro', 'substantivo', 'Animais', '🐦', 'Qush koʻk.'],
  ['baliq', 'peixe', 'substantivo', 'Animais', '🐟', 'Baliq suvda.'],
  // ── Números ──
  ['bir', 'um', 'numeral', 'Números', '1️⃣', 'Bir choy, marhamat.'],
  ['ikki', 'dois', 'numeral', 'Números', '2️⃣', 'Ikki doʻstim bor.'],
  ['uch', 'três', 'numeral', 'Números', '3️⃣', 'Uch bola.'],
  ['toʻrt', 'quatro', 'numeral', 'Números', '4️⃣', 'Toʻrt kun.'],
  ['besh', 'cinco', 'numeral', 'Números', '5️⃣', 'Besh kun.'],
  ['olti', 'seis', 'numeral', 'Números', '6️⃣', 'Olti soat.'],
  ['yetti', 'sete', 'numeral', 'Números', '7️⃣', 'Yetti kun.'],
  ['sakkiz', 'oito', 'numeral', 'Números', '8️⃣', 'Sakkiz soat.'],
  ['toʻqqiz', 'nove', 'numeral', 'Números', '9️⃣', 'Toʻqqiz kun.'],
  ['oʻn', 'dez', 'numeral', 'Números', '🔟', 'Oʻn kun.'],
  // ── Tempo ──
  ['bugun', 'hoje', 'advérbio', 'Tempo', '📅', 'Bugun dushanba.'],
  ['ertaga', 'amanhã', 'advérbio', 'Tempo', '📅', 'Xayr, ertaga koʻrishguncha!'],
  ['kecha', 'ontem', 'advérbio', 'Tempo', '📅', 'Kecha, bugun va ertaga.'],
  ['soat', 'hora; relógio', 'substantivo', 'Tempo', '🕐', 'Olti soat.'],
  ['dushanba', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Bugun dushanba.'],
  ['seshanba', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Ertaga seshanba.'],
  ['chorshanba', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Bugun chorshanba.'],
  ['payshanba', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Bugun payshanba.'],
  ['juma', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Bugun juma.'],
  ['shanba', 'sábado', 'substantivo', 'Tempo', '📅', 'Bugun shanba.'],
  ['yakshanba', 'domingo', 'substantivo', 'Tempo', '📅', 'Bugun yakshanba.'],
  // ── Cores ──
  ['qizil', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Olma qizil.'],
  ['sariq', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Quyosh sariq.'],
  ['yashil', 'verde', 'adjetivo', 'Cores', '🟢', 'Daraxt yashil.'],
  ['koʻk', 'azul (também “céu”)', 'adjetivo', 'Cores', '🔵', 'Qush koʻk.'],
  ['oq', 'branco', 'adjetivo', 'Cores', '⚪', 'Sut oq.'],
  ['qora', 'preto', 'adjetivo', 'Cores', '⚫', 'Mushuk qora.'],
  // ── Descrições ──
  ['katta', 'grande', 'adjetivo', 'Descrições', '📏', 'Bu shahar katta.'],
  ['kichik', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Bu bola kichik.'],
  ['yangi', 'novo', 'adjetivo', 'Descrições', '✨', 'Bu uy yangi.'],
  ['eski', 'velho, antigo', 'adjetivo', 'Descrições', '📜', 'Bu kitob eski.'],

  // ════════ A2.1 e A2.2 (sessão de 09/10/2026) ════════
  // ── Clima ──
  ['yomgʻir', 'chuva', 'substantivo', 'Clima', '🌧️', 'Bugun yomgʻir bor.'],
  ['quyosh', 'sol', 'substantivo', 'Clima', '☀️', 'Bugun quyosh bor.'],
  ['shamol', 'vento', 'substantivo', 'Clima', '💨', 'Bugun shamol bor.'],
  // ── Roupas ──
  ['koʻylak', 'camisa; vestido (o uzbeque não separa sempre os dois)', 'substantivo', 'Roupas', '👔', 'Mening koʻylagim oq.'],
  ['shim', 'calça', 'substantivo', 'Roupas', '👖', 'Mening shimim qora.'],
  ['poyabzal', 'sapato, calçado', 'substantivo', 'Roupas', '👟', 'Mening poyabzalim yangi.'],
  ['palto', 'casaco (empréstimo do russo)', 'substantivo', 'Roupas', '🧥', 'Mening paltom koʻk.'],
  // ── Corpo ──
  ['bosh', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Boshim ogʻriyapti.'],
  ['qoʻl', 'mão, braço (o uzbeque não separa os dois sentidos)', 'substantivo', 'Corpo', '✋', 'Qoʻlim toza.'],
  ['koʻz', 'olho', 'substantivo', 'Corpo', '👁️', 'Mening koʻzim koʻk.'],
  ['ogʻiz', 'boca', 'substantivo', 'Corpo', '👄', 'Bu mening ogʻzim.'],
  ['oyoq', 'perna, pé (o uzbeque não separa os dois sentidos)', 'substantivo', 'Corpo', '🦵', 'Oyogʻim uzun.'],
  // ── Lugares ──
  ['maktab', 'escola', 'substantivo', 'Lugares', '🏫', 'Mening maktabim katta.'],
  ['kasalxona', 'hospital (sinônimo shifoxona)', 'substantivo', 'Lugares', '🏥', 'Men kasalxonada ishlayman.'],
  ['doʻkon', 'loja', 'substantivo', 'Lugares', '🏬', 'Doʻkon shaharda.'],
  ['koʻcha', 'rua', 'substantivo', 'Lugares', '🛣️', 'Men shu koʻchada yashayman.'],
  ['restoran', 'restaurante (empréstimo do russo)', 'substantivo', 'Lugares', '🍽️', 'Biz restoranda ovqatlanamiz.'],
  // ── Profissões ──
  ['shifokor', 'médico (de shifo, cura, + -kor)', 'substantivo', 'Profissões', '👨‍⚕️', 'Mening otam shifokor.'],
  ['talaba', 'estudante (do árabe ṭalaba)', 'substantivo', 'Profissões', '🎓', 'Men talabaman.'],
  ['oshpaz', 'cozinheiro (sobretudo especialista em plov)', 'substantivo', 'Profissões', '👨‍🍳', 'U oshpaz.'],
  // ── Sentimentos ──
  ['xursand', 'feliz', 'adjetivo', 'Sentimentos', '😊', 'Men xursandman.'],
  ['xafa', 'triste', 'adjetivo', 'Sentimentos', '😢', 'U xafa.'],
  ['charchagan', 'cansado (de charchamoq, cansar-se)', 'adjetivo', 'Sentimentos', '😴', 'Biz charchaganmiz.'],
  ['och', 'com fome', 'adjetivo', 'Sentimentos', '🍽️', 'Men ochman.'],
  // ── Partículas modais (A2) ──
  ['kerak', 'precisar, ser necessário (impessoal, com sufixo possessivo no verbo: borishim kerak)', 'partícula', 'Verbos-chave', '❗', 'Men borishim kerak.'],
  ['mumkin', 'poder (permissão/possibilidade, com sufixo possessivo no verbo: ketishingiz mumkin)', 'partícula', 'Verbos-chave', '🆗', 'Siz ketishingiz mumkin.'],
  // ── Números (A2) ──
  ['yigirma', 'vinte', 'numeral', 'Números', '2️⃣0️⃣', 'Men yigirma yoshdaman.'],
  ['oʻttiz', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Oʻttiz kun.'],
  ['ellik', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Ellik soʻm.'],
  ['yuz', 'cem', 'numeral', 'Números', '💯', 'Yuz soʻm.'],
];

export const VOCAB_UZ = buildVocab('uz', ROWS);
