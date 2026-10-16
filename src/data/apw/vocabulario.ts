import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do apache ocidental (Ndee biyáti', apw) — ver o comentário de fontes em
 * `index.ts`. Cada palavra foi conferida, verbete por verbete, no Wiktionary em inglês
 * (en.wiktionary.org, Categoria:Western Apache lemmas e subcategorias) e cruzada com a Wikipédia
 * em inglês (artigo «Western Apache language»). No A1, os exemplos são a própria palavra
 * sozinha, porque essas fontes trazem palavras isoladas. Do A2.1 em diante (bloco no fim da
 * lista), a fonte é a gramática de De Reuse (2006), que traz paradigmas e frases completas: os
 * exemplos dali são frases do livro, com a página. O apóstrofo (ʼ ou ') é letra própria
 * (oclusiva glotal), não pontuação.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['dagotʼee', 'oi, olá', 'interjeição', 'Expressões', '👋', 'dagotʼee.'],
  ['áho', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'áho.'],
  ['gozhǫǫ doleeł', 'que venham paz e bondade — saudação de boa vontade', 'interjeição', 'Expressões', '✨', 'gozhǫǫ doleeł.'],
  ['hon dah', 'bom dia (dito a um grupo de homens)', 'interjeição', 'Expressões', '🌅', 'hon dah.'],
  // ── Essenciais ──
  ['shíí', 'eu, mim, meu', 'pronome', 'Essenciais', '🙋', 'shíí.'],
  ['nohwíí', 'nós', 'pronome', 'Essenciais', '🙌', 'nohwíí.'],
  ['díín', 'ele, a ele (pronome objeto)', 'pronome', 'Essenciais', '👤', 'díín.'],
  ['dawa', 'tudo', 'pronome', 'Essenciais', '🌐', 'dawa.'],
  // ── Pessoas ──
  ['ndee', 'pessoa; o povo apache (autodesignação)', 'substantivo', 'Pessoas', '🧑', 'ndee.'],
  ['isdzán', 'mulher', 'substantivo', 'Pessoas', '👩', 'isdzán.'],
  ['ishkiin', 'menino', 'substantivo', 'Pessoas', '👦', 'ishkiin.'],
  ['bikʼisn', 'irmão', 'substantivo', 'Pessoas', '🧔', 'bikʼisn.'],
  ['bimaa', 'mãe', 'substantivo', 'Pessoas', '🤱', 'bimaa.'],
  ['diyin', 'curandeiro, pessoa com poder religioso tradicional', 'substantivo', 'Pessoas', '🌿', 'diyin.'],
  ['indaa', 'inimigo; homem branco (sentido histórico — ver etimologia)', 'substantivo', 'Pessoas', '👤', 'indaa.'],
  // ── Natureza ──
  ['dził', 'montanha', 'substantivo', 'Natureza', '🏔️', 'dził.'],
  ['tséé', 'pedra, rocha', 'substantivo', 'Natureza', '🪨', 'tséé.'],
  ['niʼ', 'chão, terra', 'substantivo', 'Natureza', '🌍', 'niʼ.'],
  ['zas', 'neve', 'substantivo', 'Natureza', '❄️', 'zas.'],
  ['yaaʼ', 'céu', 'substantivo', 'Natureza', '🌌', 'yaaʼ.'],
  ['chizh', 'lenha', 'substantivo', 'Natureza', '🪵', 'chizh.'],
  ['tʼiis', 'álamo (árvore)', 'substantivo', 'Natureza', '🌳', 'tʼiis.'],
  ['gad', 'zimbro, cedro (árvore)', 'substantivo', 'Natureza', '🌲', 'gad.'],
  ['nato', 'tabaco', 'substantivo', 'Natureza', '🌱', 'nato.'],
  ['tú', 'água', 'substantivo', 'Natureza', '💧', 'tú.'],
  // ── Animais ──
  ['shash', 'urso', 'substantivo', 'Animais', '🐻', 'shash.'],
  ['gah', 'coelho', 'substantivo', 'Animais', '🐇', 'gah.'],
  ['łį́į́ʼ', 'cavalo', 'substantivo', 'Animais', '🐴', 'łį́į́ʼ.'],
  ['tłʼiish', 'cobra', 'substantivo', 'Animais', '🐍', 'tłʼiish.'],
  ['bįįh', 'veado, cervo', 'substantivo', 'Animais', '🦌', 'bįįh.'],
  ['jaadi', 'berrendo (antílope-americano)', 'substantivo', 'Animais', '🦌', 'jaadi.'],
  ['łóg', 'peixe', 'substantivo', 'Animais', '🐟', 'łóg.'],
  ['gaagé', 'corvo', 'substantivo', 'Animais', '🐦', 'gaagé.'],
  ['dlǫ́ʼ', 'pássaro', 'substantivo', 'Animais', '🐦', 'dlǫ́ʼ.'],
  ['gídí', 'gato', 'substantivo', 'Animais', '🐈', 'gídí.'],
  ['piishi', 'andorinha (ave)', 'substantivo', 'Animais', '🐦', 'piishi.'],
  ['maghashi', 'gado, vaca', 'substantivo', 'Animais', '🐄', 'maghashi.'],
  ['tulį', 'guaxinim', 'substantivo', 'Animais', '🦝', 'tulį.'],
  // ── Alimentação ──
  ['mansáána', 'maçã', 'substantivo', 'Alimentação', '🍎', 'mansáána.'],
  ['nadą́ʼ', 'milho', 'substantivo', 'Alimentação', '🌽', 'nadą́ʼ.'],
  // ── Corpo ──
  ['bidáá', 'olho(s)', 'substantivo', 'Corpo', '👁️', 'bidáá.'],
  ['bikeeʼ', 'pé', 'substantivo', 'Corpo', '🦶', 'bikeeʼ.'],
  ['bijíí', 'coração', 'substantivo', 'Corpo', '❤️', 'bijíí.'],
  ['bitsighąąʼ', 'cérebro', 'substantivo', 'Corpo', '🧠', 'bitsighąąʼ.'],
  ['bizéʼ', 'boca', 'substantivo', 'Corpo', '👄', 'bizéʼ.'],
  ['jaa', 'orelha', 'substantivo', 'Corpo', '👂', 'jaa.'],
  ['bitaʼ', 'testa', 'substantivo', 'Corpo', '🤕', 'bitaʼ.'],
  ['dikos', 'tosse', 'substantivo', 'Corpo', '🤧', 'dikos.'],
  // ── Casa ──
  ['kįh', 'casa, construção', 'substantivo', 'Casa', '🏠', 'kįh.'],
  ['chʼah', 'chapéu', 'substantivo', 'Casa', '🎩', 'chʼah.'],
  ['bíniʼ', 'propriedade, terra (posse)', 'substantivo', 'Casa', '📜', 'bíniʼ.'],
  ['yoo', 'conta, miçanga (contas tradicionais)', 'substantivo', 'Casa', '📿', 'yoo.'],
  // ── Números ──
  ['dałaá', 'um', 'numeral', 'Números', '1️⃣', 'dałaá.'],
  ['nakih', 'dois', 'numeral', 'Números', '2️⃣', 'nakih.'],
  ['táági', 'três', 'numeral', 'Números', '3️⃣', 'táági.'],
  ['dį́į́\'i', 'quatro', 'numeral', 'Números', '4️⃣', 'dį́į́\'i.'],
  ['ashdla\'i', 'cinco', 'numeral', 'Números', '5️⃣', 'ashdla\'i.'],
  ['gostán', 'seis', 'numeral', 'Números', '6️⃣', 'gostán.'],
  ['gosts\'idi', 'sete', 'numeral', 'Números', '7️⃣', 'gosts\'idi.'],
  ['tsebīī', 'oito', 'numeral', 'Números', '8️⃣', 'tsebīī.'],
  ['góst\'áí', 'nove', 'numeral', 'Números', '9️⃣', 'góst\'áí.'],
  ['goneznán', 'dez', 'numeral', 'Números', '🔟', 'goneznán.'],
  // ── Verbos-chave ──
  ['yiyąą', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'yiyąą.'],
  ['nahiʼdiih', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'nahiʼdiih.'],
  ['nagoniʼ', 'contar, narrar', 'verbo', 'Verbos-chave', '🗣️', 'nagoniʼ.'],
  ['deyaa', 'ir embora, sair', 'verbo', 'Verbos-chave', '🚶', 'deyaa.'],
  ['chiʼchá', 'voar', 'verbo', 'Verbos-chave', '🕊️', 'chiʼchá.'],
  ['daha', 'apressar-se', 'verbo', 'Verbos-chave', '🏃', 'daha.'],
  // ── Cores ──
  ['łichíí', 'vermelho', 'substantivo', 'Cores', '🔴', 'łichíí.'],
  ['łitsog', 'amarelo', 'substantivo', 'Cores', '🟡', 'łitsog.'],
  ['łigai', 'branco; ser branco (verbo)', 'verbo', 'Cores', '⚪', 'łigai.'],
  ['diłhił', 'preto; ser preto (verbo)', 'verbo', 'Cores', '⚫', 'diłhił.'],
  ['totlʼizh', 'ser azul, ser verde (verbo)', 'verbo', 'Cores', '🔵', 'totlʼizh.'],
  ['łibaa', 'ser cinza, ser marrom — qualquer cor sem brilho (verbo)', 'verbo', 'Cores', '🟤', 'łibaa.'],
  ['hishtłish', 'marrom; ser marrom (verbo)', 'verbo', 'Cores', '🟫', 'hishtłish.'],

  // ══ A2.1 e A2.2 (16/10/2026) ══
  // Fonte de todas as palavras e frases abaixo: Willem J. de Reuse, com Phillip Goode, “A Practical
  // Grammar of the San Carlos Apache Language” (Lincom Europa, 2006), citada como “DR06” com a página
  // impressa do livro. Cada forma foi lida na imagem da página do PDF (o texto extraído troca os
  // diacríticos). Grafia do livro, a da variedade de San Carlos: mácron = tom médio (ā), acento agudo =
  // tom alto, sem marca = tom baixo, gancho = nasal, ṉ = “n sublinhado” (DR06 p. 8, 11, 23). O apóstrofo
  // do livro (’) foi escrito aqui como ', igual aos numerais do pacote. Nenhuma frase foi montada: todos
  // os exemplos são frases do próprio livro.
  // ── Ir e vir (DR06 p. 65–66, 77) ──
  ['hayú', 'para onde?', 'advérbio', 'Viagens e Transporte', '🧭', 'Hayú dínyāā?'], // DR06 p. 65 (1a), p. 77
  ['díyāā', 'eu vou', 'verbo', 'Verbos-chave', '🚶', 'Fiinigisyú díyāā.'], // DR06 p. 65 (T1), (1b)
  ['dínyāā', 'você vai', 'verbo', 'Verbos-chave', '🚶‍♀️', "Ya' Fiinigisyú dínyāā?"], // DR06 p. 65 (T1); p. 57 (T4b)
  ['diyāā', 'ele vai, ela vai', 'verbo', 'Verbos-chave', '🚶‍♂️', 'John hánázéhyú diyāā.'], // DR06 p. 65 (T1), (2b)
  ['dikai', 'nós vamos (três ou mais)', 'verbo', 'Verbos-chave', '👣', 'dikai.'], // DR06 p. 65 (T1)
  ['intin', 'estrada, caminho', 'substantivo', 'Viagens e Transporte', '🛣️', 'Dīī hayú intin?'], // DR06 p. 63 Conv. 3; glossário p. 431 “road”
  ["hadí'", 'de onde?', 'advérbio', 'Viagens e Transporte', '📍', "Hadí' naṉāā?"], // DR06 p. 66 (5a), p. 77
  ['nashāā', 'eu ando por aí; eu sou de (um lugar)', 'verbo', 'Verbos-chave', '🙋', "Sengaadí' nashāā."], // DR06 p. 66 (T2), (5b)
  ['naṉāā', 'você anda por aí; você é de (um lugar)', 'verbo', 'Verbos-chave', '🙋‍♀️', "Hant'é baa naṉāā?"], // DR06 p. 66 (T2), (8a)
  ['naghāā', 'ele ou ela anda por aí; é de (um lugar)', 'verbo', 'Verbos-chave', '🙋‍♂️', 'Kū naghāā.'], // DR06 p. 66 (T2); p. 77 (7)
  ['kū', 'aqui', 'advérbio', 'Essenciais', '👇', 'Kū nashāā.'], // DR06 p. 77 (T1), (6)
  ['ákū', 'lá, ali', 'advérbio', 'Essenciais', '👉', 'Ákū díyāā.'], // DR06 p. 77 (T1), (4)
  // ── Perguntar e responder (DR06 p. 57–61, 75) ──
  ["ha'oh", 'sim (dito mais por homens)', 'interjeição', 'Essenciais', '👍', "Ha'oh, bán ła'."], // DR06 p. 58 (T5); p. 93 (38b)
  ["ha'ah", 'sim (dito mais por mulheres)', 'interjeição', 'Essenciais', '✅', "Ha'ah, shichaghą́shé ła'."], // DR06 p. 58 (T5); p. 93 (41b)
  ['dah', 'não', 'interjeição', 'Essenciais', '🙅', "Dah, doo ádí' naghāā da."], // DR06 p. 58 (T5); p. 75 Conv. 4 (10c)
  ['doo', 'não (negação, com “da” no fim da frase)', 'advérbio', 'Essenciais', '🚫', 'Robert doo yáhołṉēēz da.'], // DR06 p. 59 (2b)
  ["ya'", 'marca de pergunta de sim ou não (no começo da frase)', 'partícula', 'Essenciais', '❓', "Ya' bán ła'?"], // DR06 p. 57; p. 93 (38a)
  ['né', 'marca de pergunta (no fim da frase); sozinho: “é mesmo?”', 'partícula', 'Essenciais', '❔', 'Fiinigisyú dínyāā né?'], // DR06 p. 57–58 (T7, T8)
  ['k\'ad', 'logo, daqui a pouco', 'advérbio', 'Tempo', '⏳', "Ha'oh, k'ad."], // DR06 p. 75 Conv. 3; glossário p. 437 “soon”
  // ── Lugares e coisas (DR06 p. 72, 74, 77, 92) ──
  ['gowąh', 'lar, casa onde se mora', 'substantivo', 'Casa', '🏡', 'Dīī doo shigowąh da.'], // DR06 p. 72; p. 92 (32); glossário p. 421 “home, wickiup”
  ['nabil', 'carro', 'substantivo', 'Viagens e Transporte', '🚗', "Nabil láhgee si'ą̄ą̄."], // DR06 p. 74 Conv. 1; p. 77 (9)
  // ── Família (DR06 p. 79, 89–93, 183–185) ──
  ['shitaa', 'pai (meu pai)', 'substantivo', 'Família', '👨', "Shitaa át'į̄į̄."], // DR06 p. 183 (T1) “-taa(’)”; p. 92 (28a)
  ['shidizhé', 'irmão ou irmã mais novos (meu, minha)', 'substantivo', 'Família', '🧒', "Dīī shidizhé ádat'ēē."], // DR06 p. 185 (T10); p. 89 (5)
  ['shiwóyé', 'avó materna (minha); também neto ou neta, dito pela avó', 'substantivo', 'Família', '👵', "Nohwiwóyé Tūs Si'ányú gólį̄į̄."], // DR06 p. 183 (T3), p. 184; p. 75 Conv. 4
  ["mę́'", 'bebê', 'substantivo', 'Família', '👶', "Ai bimę́' ádat'ēē."], // DR06 p. 184 (T7); p. 79 (15a)
  ["na'ilín", 'menina', 'substantivo', 'Pessoas', '👧', "Dīī na'ilín hik'eh ishkiin hadí' na'aash?"], // DR06 p. 184 (T7, T8); p. 75 Conv. 4
  ['chaghą́shé', 'crianças (sempre no plural)', 'substantivo', 'Família', '👫', "Dagot'ēē, shichaghą́shé?"], // DR06 p. 184 (T7); p. 75 Conv. 4
  ['hastiin', 'velho (pessoa), homem idoso', 'substantivo', 'Pessoas', '👴', 'Hastiin doo dázhǫ nłdzil da.'], // DR06 p. 59 (5b); glossário p. 424 “old man”
  ['nłdzil', 'é forte (verbo)', 'verbo', 'Descrições', '💪', 'Hastiin dázhǫ́ nłdzil.'], // DR06 p. 57 (T1), p. 59 (5a)
  // ── Tempo e clima (DR06 p. 96, 223, 265, 315–316) ──
  ['dį́jį̄į̄', 'hoje', 'advérbio', 'Tempo', '📅', 'Dį́jį̄į̄ gonłt\'ēē.'], // DR06 p. 315 (T1); p. 223 (T2)
  ['iską̄ą̄', 'amanhã', 'advérbio', 'Tempo', '🌅', 'Nakih iską̄ą̄go Cindy Show Lowyú diyāā doleeł.'], // DR06 p. 316 (T3), (11)
  ["adą̄ą̄dą́'", 'ontem', 'advérbio', 'Tempo', '🗓️', "Adą̄ą̄dą́' zhāāli nashné' ni'."], // DR06 p. 265 (2), (T1)
  ['jį̄į̄', 'dia', 'substantivo', 'Tempo', '☀️', 'Jį̄į̄go doo íłhosh da.'], // DR06 p. 315 (T1), (1)
  ["tł'é'", 'noite', 'substantivo', 'Tempo', '🌙', "Tł'é'go goch'itaałyú díyāā."], // DR06 p. 315 (T2), (8)
  ["gosk'az", 'faz frio (tempo)', 'verbo', 'Clima', '🥶', "Gosk'az."], // DR06 p. 223 (T2)
  ['gozil', 'faz calor, está morno (sem ser quente)', 'verbo', 'Clima', '🌤️', 'Gozil.'], // DR06 p. 223 (T2); glossário p. 421
  ["nłt'ēē", 'é bom (verbo)', 'verbo', 'Descrições', '👌', "Nłt'ēē ni'."], // DR06 p. 96 (58)
  ['doleeł', 'marca do futuro (“será”), no fim da frase', 'partícula', 'Tempo', '🔮', "Nłt'ēē doleeł."], // DR06 p. 96 (58c)
  // ── Comida e dinheiro (DR06 p. 78, 80, 91, 93) ──
  ['bán', 'pão', 'substantivo', 'Alimentação', '🍞', 'Kū bán.'], // DR06 p. 93 (35); glossário p. 397 “bread (from Spanish pan)”
  ["ch'iyán", 'comida', 'substantivo', 'Alimentação', '🍲', "Kū ch'iyán łą̄ą̄."], // DR06 p. 80 (T7); p. 91 (19)
  ['zhāāli', 'dinheiro', 'substantivo', 'Compras', '💵', "Zhāāli doo ła' da."], // DR06 p. 78 (13b); p. 93 (43)
];

export const VOCAB_APW = buildVocab('apw', ROWS);
