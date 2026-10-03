import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do apache ocidental (Ndee biyáti', apw) — ver o comentário de fontes em
 * `index.ts`. Cada palavra foi conferida, verbete por verbete, no Wiktionary em inglês
 * (en.wiktionary.org, Categoria:Western Apache lemmas e subcategorias) e cruzada com a Wikipédia
 * em inglês (artigo «Western Apache language»). Como o apache ocidental é polissintético e as
 * fontes abertas consultadas trazem palavras isoladas, não frases cotidianas com verbo
 * conjugado, a maioria dos exemplos abaixo é a própria palavra sozinha — ver a nota em
 * `gramatica.ts` e em `index.ts` (campo `incomplete`) sobre por que este curso não inventa
 * conjugações. O apóstrofo usado em algumas palavras (ʼ) é letra própria (oclusiva glotal),
 * não pontuação.
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
];

export const VOCAB_APW = buildVocab('apw', ROWS);
