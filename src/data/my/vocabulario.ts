import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do birmanês padrão (Mianmar), em escrita birmanesa Unicode. Cada palavra foi
 * conferida no Wiktionary em inglês (en.wiktionary.org, verbete birmanês, seção «Pronunciation» ->
 * «Romanization: MLCTS») — os valores de leitura ficam em `../../services/mlcts.ts`
 * (`MLCTS_MY`), usados pelo teste de `reading-burmese.ts` para garantir que a romanização
 * automática bate com a oficial palavra por palavra. Nenhuma palavra foi inventada: toda esta
 * lista vem de verbetes de verdade do Wiktionary (muitos deles citando o «Myanmar–English
 * Dictionary», Myanmar Language Commission, 1993, ou o STEDT — Sino-Tibetan Etymological
 * Dictionary and Thesaurus).
 *
 * Nota cultural importante (ver também o tópico de gramática «Quem fala muda a palavra»): o
 * birmanês tem um sistema de parentesco em que a palavra para "irmão mais novo" e "irmã mais
 * nova" muda conforme o GÊNERO DE QUEM FALA, não só a idade relativa — por isso aqui só entram
 * "irmão/irmã mais velho(a)" (que são neutros quanto a quem fala); as formas que dependem do
 * gênero de quem fala (ညီ, မောင်, နှမ, ညီမ) ficam só na tabela do tópico de gramática, para não
 * ensinar uma forma errada pela metade.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['မင်္ဂလာပါ', 'oi, olá', 'interjeição', 'Expressões', '👋', 'မင်္ဂလာပါ!'],
  ['ကျေးဇူးတင်ပါတယ်', 'obrigado', 'expressão', 'Expressões', '🙏', 'ကျေးဇူးတင်ပါတယ်!'],
  ['ကျေးဇူးပြု၍', 'por favor (pedido educado)', 'expressão', 'Expressões', '🙏', 'ကျေးဇူးပြု၍ ပြောပါ။'],
  ['ဟုတ်ကဲ့', 'sim', 'advérbio', 'Expressões', '👍', 'ဟုတ်ကဲ့, ကျွန်တော် ကြောင်ကို ကြိုက်တယ်။'],
  ['ဟင့်အင်း', 'não (informal, enfático)', 'interjeição', 'Expressões', '👎', 'ဟင့်အင်း, ကျွန်တော် ကော်ဖီ မကြိုက်ဘူး။'],
  // ── Essenciais (pronomes e partículas) ──
  ['ငါ', 'eu (informal, entre amigos)', 'pronome', 'Essenciais', '🙋', 'ငါ ထမင်း စားတယ်။'],
  ['ကျွန်တော်', 'eu (formal/educado; fala de homem, ou neutro em Mianmar Superior)', 'pronome', 'Essenciais', '🙋', 'ကျွန်တော် သူငယ်ချင်း ရှိတယ်။'],
  ['ကျွန်မ', 'eu (formal/educado; fala de mulher)', 'pronome', 'Essenciais', '🙋', 'ကျွန်မ ရေ သောက်တယ်။'],
  ['နင်', 'tu, você (informal, só com quem é mais jovem — senão é rude)', 'pronome', 'Essenciais', '🫵', 'နင် ဘာ ကြိုက်လဲ။'],
  ['ခင်ဗျား', 'você, senhor (educado; fala de homem)', 'pronome', 'Essenciais', '🫵', 'ခင်ဗျား နာမည် ဘာလဲ။'],
  ['ရှင်', 'você, senhora (educado; fala de mulher)', 'pronome', 'Essenciais', '🫵', 'ရှင် ဘယ်က လဲ။'],
  ['သူ', 'ele, ela', 'pronome', 'Essenciais', '🧑', 'သူ ကြီးတယ်။'],
  ['တို့', '(marca o plural: nós, vocês, eles)', 'partícula', 'Essenciais', '👥', 'ကျွန်တော်တို့ မြန်မာစကား ပြောတယ်။'],
  ['ဘာ', 'o quê', 'pronome', 'Essenciais', '❓', 'ဒါ ဘာလဲ။'],
  ['ဘယ်', 'onde; qual', 'advérbio', 'Essenciais', '❓', 'ခွေးက ဘယ်မှာလဲ။'],
  ['ဘယ်သူ', 'quem', 'pronome', 'Essenciais', '❓', 'ဘယ်သူလဲ။'],
  ['ဘယ်လို', 'como', 'advérbio', 'Essenciais', '❓', 'ဘယ်လို ပြောလဲ။'],
  ['နှင့်', 'e; com', 'conjunção', 'Essenciais', null, 'အဖေ နှင့် အမေ။'],
  ['ဒါမှမဟုတ်', 'ou', 'conjunção', 'Essenciais', null, 'ကော်ဖီ ဒါမှမဟုတ် လက်ဖက်ရည်။'],
  // ── Descrições ──
  ['ကောင်း', 'bom', 'adjetivo', 'Descrições', '👍', 'ထမင်း ကောင်းတယ်။'],
  ['ကြီး', 'grande; mais velho(a) (de família)', 'adjetivo', 'Descrições', '📏', 'ခွေး ကြီးတယ်။'],
  ['သေး', 'pequeno', 'adjetivo', 'Descrições', '📏', 'ကလေး သေးတယ်။'],
  // ── Pessoas ──
  ['နာမည်', 'nome', 'substantivo', 'Pessoas', '🏷️', 'ကျွန်တော့် နာမည် လီနူ ပါ။'],
  ['သူငယ်ချင်း', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'ဒါ ကျွန်တော့် သူငယ်ချင်း ပါ။'],
  ['မိသားစု', 'família', 'substantivo', 'Pessoas', '👪', 'ကျွန်တော့် မိသားစု ကြီးတယ်။'],
  ['အဖေ', 'pai', 'substantivo', 'Pessoas', '👨', 'အဖေ ထမင်း စားတယ်။'],
  ['အမေ', 'mãe', 'substantivo', 'Pessoas', '👩', 'အမေ လက်ဖက်ရည် သောက်တယ်။'],
  ['အစ်ကို', 'irmão mais velho', 'substantivo', 'Pessoas', '🧑', 'ကျွန်တော့် အစ်ကို ကြီးတယ်။'],
  ['အစ်မ', 'irmã mais velha', 'substantivo', 'Pessoas', '🧑', 'ကျွန်မ အစ်မ ရှိတယ်။'],
  ['ကလေး', 'criança', 'substantivo', 'Pessoas', '🧒', 'ကလေး သေးတယ်။'],
  // ── Verbos-chave ──
  ['စား', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'ကျွန်တော် ထမင်း စားတယ်။'],
  ['သောက်', 'beber', 'verbo', 'Verbos-chave', '🥤', 'ကျွန်မ ရေ သောက်တယ်။'],
  ['သွား', 'ir', 'verbo', 'Verbos-chave', '🚶', 'ကျွန်တော် သွားတယ်။'],
  ['ပြော', 'falar, dizer', 'verbo', 'Verbos-chave', '🗣️', 'ကျွန်တော် မြန်မာစကား ပြောတယ်။'],
  ['ကြိုက်', 'gostar', 'verbo', 'Verbos-chave', '❤️', 'ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။'],
  ['ရှိ', 'ter; existir', 'verbo', 'Verbos-chave', '🤲', 'ကျွန်တော် ခွေး ရှိတယ်။'],
  ['နေ', 'morar, ficar', 'verbo', 'Verbos-chave', '🏠', 'ကျွန်မ မန္တလေး မှာ နေတယ်။'],
  ['ဖြစ်', 'ser, virar, acontecer', 'verbo', 'Verbos-chave', '🧑', 'ဒါ ကြောင် ဖြစ်တယ်။'],
  // ── Alimentação e Restaurantes ──
  ['ရေ', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ကျွန်တော် ရေ သောက်တယ်။'],
  ['ထမင်း', 'arroz (cozido)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'ထမင်း ကောင်းတယ်။'],
  ['လက်ဖက်ရည်', 'chá (chá-de-folha-em-conserva, bebido com leite)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'အမေ လက်ဖက်ရည် ကြိုက်တယ်။'],
  ['ကော်ဖီ', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။'],
  ['နို့', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'ကလေး နို့ သောက်တယ်။'],
  ['ကြက်ဥ', 'ovo (de galinha)', 'substantivo', 'Alimentação e Restaurantes', '🥚', 'ကျွန်မ ကြက်ဥ စားတယ်။'],
  // ── Números ──
  ['တစ်', 'um', 'numeral', 'Números', '1️⃣', 'ခွေး တစ် ကောင်။'],
  ['နှစ်', 'dois', 'numeral', 'Números', '2️⃣', 'ကြောင် နှစ် ကောင်။'],
  ['သုံး', 'três', 'numeral', 'Números', '3️⃣', 'ကလေး သုံး ယောက်။'],
  ['လေး', 'quatro', 'numeral', 'Números', '4️⃣', 'နာရီ လေး ခု။'],
  ['ငါး', 'cinco', 'numeral', 'Números', '5️⃣', 'ရက် ငါး ရက်။'],
  ['ခြောက်', 'seis', 'numeral', 'Números', '6️⃣', 'လ ခြောက် လ။'],
  ['ခုနစ်', 'sete', 'numeral', 'Números', '7️⃣', 'ရက် ခုနစ် ရက်။'],
  ['ရှစ်', 'oito', 'numeral', 'Números', '8️⃣', 'နာရီ ရှစ် နာရီ။'],
  ['ကိုး', 'nove', 'numeral', 'Números', '9️⃣', 'ကလေး ကိုး ယောက်။'],
  ['ဆယ်', 'dez', 'numeral', 'Números', '🔟', 'ရက် ဆယ် ရက်။'],
  // ── Tempo ──
  ['ဒီနေ့', 'hoje', 'advérbio', 'Tempo', '📅', 'ဒီနေ့ ကျွန်တော် လာပါတယ်။'],
  ['မနက်ဖြန်', 'amanhã', 'advérbio', 'Tempo', '📅', 'မနက်ဖြန် ကျွန်တော် သွားတယ်။'],
  ['မနေ့က', 'ontem', 'advérbio', 'Tempo', '📅', 'မနေ့က ကျွန်မ ထမင်း စားတယ်။'],
  ['တနင်္ဂနွေ', 'domingo', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ တနင်္ဂနွေ ပါ။'],
  ['တနင်္လာ', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ တနင်္လာ ပါ။'],
  ['အင်္ဂါ', 'terça-feira', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ အင်္ဂါ ပါ။'],
  ['ဗုဒ္ဓဟူး', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ ဗုဒ္ဓဟူး ပါ။'],
  ['ကြာသပတေး', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ ကြာသပတေး ပါ။'],
  ['သောကြာ', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ သောကြာ ပါ။'],
  ['စနေ', 'sábado', 'substantivo', 'Tempo', '📅', 'ဒီနေ့ စနေ ပါ။'],
  // ── Cores ──
  ['နီ', 'vermelho', 'adjetivo', 'Cores', '🔴', 'ကော်ဖီ ဖန်ခွက် နီတယ်။'],
  ['ပြာ', 'azul', 'adjetivo', 'Cores', '🔵', 'ရေ ပြာတယ်။'],
  ['စိမ်း', 'verde', 'adjetivo', 'Cores', '🟢', 'လက်ဖက်ရည် စိမ်းတယ်။'],
  ['ဝါ', 'amarelo', 'adjetivo', 'Cores', '🟡', 'ကြက်ဥ အတွင်းသား ဝါတယ်။'],
  ['ဖြူ', 'branco', 'adjetivo', 'Cores', '⚪', 'နို့ ဖြူတယ်။'],
  ['မည်း', 'preto', 'adjetivo', 'Cores', '⚫', 'ကော်ဖီ မည်းတယ်။'],
  // ── Animais ──
  ['ခွေး', 'cachorro', 'substantivo', 'Animais', '🐕', 'ခွေး ကြီးတယ်။'],
  ['ကြောင်', 'gato', 'substantivo', 'Animais', '🐈', 'ကြောင် သေးတယ်။'],
  ['ကြက်', 'galinha, frango', 'substantivo', 'Animais', '🐔', 'ကျွန်တော် ကြက် ရှိတယ်။'],
];

export const VOCAB_MY = buildVocab('my', ROWS);
