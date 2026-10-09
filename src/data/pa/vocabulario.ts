import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do panjabi (پنجابی) na variante do Paquistão, escrita em Shahmukhi (alfabeto
 * perso-árabe, abjad, direita pra esquerda — ver `direction: 'rtl'` em index.ts). Idioma incompleto:
 * A1 e A2 por enquanto (ver `incomplete` em index.ts).
 *
 * Cada palavra foi conferida com a grafia Shahmukhi específica (não derivada mecanicamente do
 * Gurmukhi — a conversão entre as duas escritas não é 1 para 1 regular) no Wiktionary em inglês
 * (seção "Punjabi", campo "Shahmukhi spelling" do cabeçalho de cada verbete) e, para duas palavras
 * que o Wiktionary inglês não cobria, no Wiktionary em panjabi ocidental (`pnb.wiktionary.org`,
 * nativamente em Shahmukhi) e na Wikipédia em panjabi ocidental (`pnb.wikipedia.org`). Saudações e
 * a frase "qual é seu nome" vêm do roteiro de frases do Wikivoyage ("Punjabi phrasebook", que dá a
 * própria grafia Shahmukhi). A ordem da frase (sujeito-objeto-verbo, SOV) vem da Wikipédia em
 * inglês ("Punjabi grammar": "Punjabi is an SOV language, having a canonical word order of
 * subject–object–verb").
 *
 * Observações de quem pesquisou, pra quem for revisar ou expandir:
 * (a) "ہاں" (hā̃) é ao mesmo tempo "sim" E a primeira pessoa do presente do verbo "ser/estar"
 *     (ہوݨا) — "eu sou/estou" —, confirmado no Wiktionary (verbete "ਹਾਂ"): não é coincidência de
 *     romanização, é o mesmo item lexical com dois sentidos. Por isso ele aparece nas frases como
 *     cópula ("میں چنگا ہاں" = eu estou bem) e sozinho como resposta ("sim").
 * (b) "کی" (kī) é o panjabi pra "o quê" — DIFERENTE do urdu/hindi "کیا/क्या" (kyā), já usados em
 *     outros pacotes deste app. Vale notar pra quem comparar os dois idiomas.
 * (c) "کل" serve tanto pra "ontem" quanto pra "amanhã" — a MESMA palavra, confirmada nos dois
 *     sentidos no Wiktionary em panjabi ocidental (pnb.wiktionary.org/wiki/کل). O panjabi distingue
 *     pelo contexto/tempo do verbo da frase, não por uma palavra diferente — ver gramatica.ts.
 * (d) "ماہی" (māhī, "amado/a", de origem sânscrita, usada em poesia) é um falso amigo de "مچھی"
 *     (macchī, peixe) — parecidas, mas sem relação de sentido. "مچھی" é rotulada "West-Pandschabi"
 *     no de.wiktionary.org (não achei a entrada com grafia Shahmukhi no Wiktionary em inglês).
 * (e) "شکریہ" (obrigado) não é um empréstimo árabe direto: o Wiktionary classifica como
 *     "pseudo-arabismo" formado dentro das línguas indo-árias (raiz árabe "شُكْر" + sufixo persa
 *     "-iyya") — cognato do urdu/hindi, não uma importação 1:1. "چاہ" (chá) vem do persa clássico
 *     "چای", que veio do chinês 茶 — ver etymology em extras.ts.
 * (f) NÃO confirmei a conjugação da maioria dos verbos em Shahmukhi (o panjabi conjuga o presente
 *     habitual com particípio + cópula, concordando em gênero — confirmado em fonte acadêmica real,
 *     mas sem grafia Shahmukhi atestada de cada forma específica) — por isso as frases de exemplo
 *     evitam inventar conjugação: usam a cópula confirmada (ہاں/اے) sozinha, ou tratam o infinitivo
 *     como substantivo verbal ("X چنگا اے" = fazer X é bom), um uso real e regular do indo-ariano,
 *     igual ao que o próprio urdu já registra pra "کھانا" (comer/comida). Só "بولݨا" (falar) tem uma
 *     forma conjugada seguramente atestada em Shahmukhi (ver a frase-modelo "میں پنجابی بولدا ہاں"
 *     em gramatica.ts, calcada num exemplo real do curso acadêmico "Basic Punjabi", MSU).
 * (g) NÃO confirmei em Shahmukhi: "por favor" isolado, "ter" (posse, com "ਕੋਲ"), "pai" na forma
 *     sânscrita formal ("ਪਿਤਾ"), "meu/minha" (possessivo de 1ª pessoa) nem a forma "comum" (não
 *     impessoal) de "querer" — todas ficam de fora desta versão, documentadas aqui em vez de
 *     inventadas. "تہاڈا" (seu/sua, formal/2ª pessoa) está confirmado e por isso entra no
 *     vocabulário, mas "میرا" (meu/minha) não.
 * (h) Gênero gramatical dos substantivos foi inferido pelos cognatos já confirmados no urdu deste
 *     app (mesma família indo-ariana, vocabulário quase idêntico: "پانی"/پاݨِی, "دودھ"/دُدّھ,
 *     "گھر"/گَھر, "کتا"/کُتّا, "بلی"/بِلّی já têm gênero marcado em `src/data/ur/vocabulario.ts`) e
 *     pelo padrão morfológico regular do indo-ariano (substantivos terminados em "-ی" costumam ser
 *     femininos, como "روٹی", "مچھی", "چاہ"/"چائے").
 *
 * Nível A2 (acrescentado depois, mesma régua de fontes): todas as palavras novas vêm do Wiktionary em
 * inglês (seção "Punjabi", campo "Shahmukhi spelling"), com o GÊNERO e a CLASSE confirmados no mesmo
 * verbete, exceto "سستا" (barato), confirmada no Wiktionary em panjabi ocidental
 * (pnb.wiktionary.org/wiki/سستا: "سولا، تھوڑے مل دا" = "de preço baixo"), porque o verbete em inglês
 * não existe pra essa palavra.
 * (i) As dezenas de 30 a 100 (تیہہ، چاࣇی، پنجاہ، سَٹّھ، ستر، اسّی، نَبّے، سَو) são cada uma uma
 *     palavra própria, sem regra de composição confirmada (nada parecido com o sistema vigesimal do
 *     iorubá, por exemplo) — por isso este pacote ensina as dezenas como palavras soltas, sem compor
 *     "vinte e um" nem dúzias intermediárias que não foram confirmadas.
 * (j) "گرم" (quente) é um adjetivo INDECLINÁVEL, confirmado no próprio Wiktionary em inglês ("It is
 *     indeclinable, meaning it doesn't change form for gender or number") — diferente de "وڈا"/
 *     "چھوٹا"/"چنگا"/"ماڑا" (nota (c) do A1.2, gênero não confirmado em Shahmukhi). Por isso "گرم"
 *     pode combinar sem risco com um substantivo feminino como "ہوا" (vento) nas frases de exemplo;
 *     "ٹھنڈا" (frio) e "خوش" (feliz) não têm essa indeclinabilidade confirmada da mesma forma, então
 *     as frases de exemplo deles evitam substantivo feminino, pela mesma cautela da nota (c).
 * (k) NÃO confirmei em Shahmukhi (por falta de verbete ou de campo "Shahmukhi spelling" na fonte):
 *     "comprar" (ਖ਼ਰੀਦਣਾ tem verbete em inglês, mas sem o campo de grafia Shahmukhi preenchido),
 *     "bazar/mercado" (ਬਾਜ਼ਾਰ sem verbete encontrado em nenhum dos wiktionaries consultados) e
 *     "quanto" (ਕਿੰਨਾ, mesmo caso) — todos ficam de fora desta versão, documentados aqui em vez de
 *     inventados.
 */
export const ROWS: VocabRow[] = [
  // Expressões — Wikivoyage "Punjabi phrasebook"
  ['سَلام', 'oi', 'interjeição', 'Expressões', '👋', 'سَلام، دوست!'],
  ['رَبّ راکھا', 'tchau', 'interjeição', 'Expressões', '👋', 'شکریہ، رَبّ راکھا!'],
  ['شکریہ', 'obrigado', 'interjeição', 'Expressões', '🙏', 'شکریہ، دوست!'],
  ['معاف', 'desculpa', 'interjeição', 'Expressões', '🙏', 'معاف، ماں!'],
  // Essenciais
  ['ہاں', 'sim', 'advérbio', 'Essenciais', '👍', 'ہاں، شکریہ!'],
  ['نہیں', 'não', 'advérbio', 'Essenciais', '👎', 'نہیں، شکریہ!'],
  ['کی', 'o que', 'pronome', 'Essenciais', '❓', 'تہاڈا ناں کی اے؟'],
  ['چنگا', 'bom', 'adjetivo', 'Essenciais', '👍', 'دُدّھ چنگا اے۔'],
  ['ماڑا', 'mau', 'adjetivo', 'Essenciais', '👎', 'دُدّھ ماڑا اے۔'],
  ['وڈا', 'grande', 'adjetivo', 'Essenciais', '📏', 'گَھر وڈا اے۔'],
  ['چھوٹا', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'کُتّا چھوٹا اے۔'],
  // Pessoas
  ['میں', 'eu', 'pronome', 'Pessoas', '🙋', 'میں چنگا ہاں۔'],
  ['توں', 'você (informal)', 'pronome', 'Pessoas', '🫵', 'توں، دوست!'],
  ['تسیں', 'você/vocês (formal)', 'pronome', 'Pessoas', '🙇', 'تسیں، شکریہ!'],
  ['اوہ', 'ele/ela', 'pronome', 'Pessoas', '👤', 'اوہ چنگا دوست اے۔'],
  ['اسیں', 'nós', 'pronome', 'Pessoas', '🙌', 'اسیں، سَلام!'],
  ['تہاڈا', 'seu/sua (formal)', 'pronome', 'Pessoas', null, 'تہاڈا ناں کی اے؟'],
  ['ناں', 'nome', 'substantivo', 'Pessoas', '🏷️', 'تہاڈا ناں کی اے؟', 'm'],
  ['دوست', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'چنگا دوست!'],
  ['ماں', 'mãe', 'substantivo', 'Pessoas', '👩', 'سَلام، ماں!', 'f'],
  ['ابّا', 'pai', 'substantivo', 'Pessoas', '👨', 'سَلام، ابّا!', 'm'],
  ['بھرا', 'irmão', 'substantivo', 'Pessoas', '🧑', 'وڈا بھرا!', 'm'],
  ['بھین', 'irmã', 'substantivo', 'Pessoas', '🧑', 'سَلام، بھین!', 'f'],
  ['ٹَبَّر', 'família', 'substantivo', 'Pessoas', '👪', 'وڈا ٹَبَّر اے۔', 'm'],
  // Casa
  ['گَھر', 'casa', 'substantivo', 'Casa', '🏠', 'وڈا گَھر اے۔', 'm'],
  // Animais
  ['کُتّا', 'cachorro', 'substantivo', 'Animais', '🐕', 'کُتّا وڈا اے۔', 'm'],
  ['بِلّی', 'gato', 'substantivo', 'Animais', '🐈', 'اِکّ بِلّی اے۔', 'f'],
  // Alimentação e Restaurantes
  ['پاݨِی', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'پاݨِی چنگا اے۔', 'm'],
  ['روٹی', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'اِکّ روٹی اے۔', 'f'],
  ['دُدّھ', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'دُدّھ چِٹّا اے۔', 'm'],
  ['چاہ', 'chá', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'چاہ پسند اے۔', 'f'],
  ['چاول', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'چاول چنگا اے۔', 'm'],
  ['مچھی', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'اِکّ مچھی اے۔', 'f'],
  // Verbos-chave
  ['ہوݨا', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'میں چنگا ہاں۔'],
  ['بولݨا', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'میں پنجابی بولدا ہاں۔'],
  ['کھاݨا', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'کھاݨا چنگا اے۔'],
  ['پینا', 'beber', 'verbo', 'Verbos-chave', '🥤', 'پینا چنگا اے۔'],
  ['جانا', 'ir', 'verbo', 'Verbos-chave', '🚶', 'جانا چنگا اے۔'],
  ['جاننا', 'entender/saber', 'verbo', 'Verbos-chave', '🧠', 'جاننا چنگا اے۔'],
  ['رہݨا', 'morar', 'verbo', 'Verbos-chave', '🏠', 'رہݨا چنگا اے۔'],
  ['چاہیدا', 'querer', 'verbo', 'Verbos-chave', '💭', 'پاݨِی چاہیدا۔'],
  ['پسند', 'gostar/amar', 'verbo', 'Verbos-chave', '❤️', 'چاہ پسند اے۔'],
  // Tempo
  ['اج', 'hoje', 'advérbio', 'Tempo', '📅', 'اج چنگا اے۔'],
  ['کل', 'ontem/amanhã', 'advérbio', 'Tempo', '📅', 'کل چنگا اے۔'],
  ['سوموار', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'سوموار چنگا اے۔', 'm'],
  ['منگلوار', 'terça-feira', 'substantivo', 'Tempo', '📅', 'منگلوار چنگا اے۔', 'm'],
  ['بدھوار', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'بدھوار چنگا اے۔', 'm'],
  ['ویروار', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'ویروار چنگا اے۔', 'm'],
  ['شکروار', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'شکروار چنگا اے۔', 'm'],
  ['شنیوار', 'sábado', 'substantivo', 'Tempo', '📅', 'شنیوار چنگا اے۔', 'm'],
  ['ایتوار', 'domingo', 'substantivo', 'Tempo', '📅', 'ایتوار چنگا اے۔', 'm'],
  // Números
  ['اِکّ', 'um', 'numeral', 'Números', '1️⃣', 'اِکّ کُتّا اے۔'],
  ['دو', 'dois', 'numeral', 'Números', '2️⃣', 'اِکّ، دو، تِنّ۔'],
  ['تِنّ', 'três', 'numeral', 'Números', '3️⃣', 'اِکّ، دو، تِنّ۔'],
  ['چار', 'quatro', 'numeral', 'Números', '4️⃣', 'چار، پَنج، چھے۔'],
  ['پَنج', 'cinco', 'numeral', 'Números', '5️⃣', 'چار، پَنج، چھے۔'],
  ['چھے', 'seis', 'numeral', 'Números', '6️⃣', 'چار، پَنج، چھے۔'],
  ['ستّ', 'sete', 'numeral', 'Números', '7️⃣', 'ستّ، اٹّھ، نَوں۔'],
  ['اٹّھ', 'oito', 'numeral', 'Números', '8️⃣', 'ستّ، اٹّھ، نَوں۔'],
  ['نَوں', 'nove', 'numeral', 'Números', '9️⃣', 'ستّ، اٹّھ، نَوں۔'],
  ['دس', 'dez', 'numeral', 'Números', '🔟', 'نَوں، دس۔'],
  ['وِیہہ', 'vinte', 'numeral', 'Números', '🔢', 'دس، وِیہہ۔'],
  // Números (A2.1) — as dezenas, Wiktionary em inglês ("Shahmukhi spelling" de cada verbete)
  ['تیہہ', 'trinta', 'numeral', 'Números', '🔢', 'وِیہہ، تیہہ، چاࣇی۔'],
  ['چاࣇی', 'quarenta', 'numeral', 'Números', '🔢', 'تیہہ، چاࣇی، پنجاہ۔'],
  ['پنجاہ', 'cinquenta', 'numeral', 'Números', '🔢', 'چاࣇی، پنجاہ، سَٹّھ۔'],
  ['سَٹّھ', 'sessenta', 'numeral', 'Números', '🔢', 'پنجاہ، سَٹّھ، ستر۔'],
  ['ستر', 'setenta', 'numeral', 'Números', '🔢', 'سَٹّھ، ستر، اسّی۔'],
  ['اسّی', 'oitenta', 'numeral', 'Números', '🔢', 'ستر، اسّی، نَبّے۔'],
  ['نَبّے', 'noventa', 'numeral', 'Números', '🔢', 'اسّی، نَبّے، سَو۔'],
  ['سَو', 'cem', 'numeral', 'Números', '💯', 'نَبّے، سَو۔'],
  // Compras (A2.1) — Wiktionary em inglês, exceto "سستا" (pnb.wiktionary.org)
  ['پیسہ', 'dinheiro', 'substantivo', 'Compras', '💰', 'پیسہ چنگا اے۔', 'm'],
  ['سستا', 'barato', 'adjetivo', 'Compras', '🏷️', 'چاول سستا اے۔'],
  ['مہنگا', 'caro', 'adjetivo', 'Compras', '💲', 'دُدّھ مہنگا اے۔'],
  // Tempo e Pessoas (A2.1/A2.2) — Wiktionary em inglês
  ['سال', 'ano', 'substantivo', 'Tempo', '📅', 'سال چنگا اے۔', 'm'],
  ['عمر', 'idade', 'substantivo', 'Pessoas', '🎂', 'عمر وِیہہ سال اے۔', 'f'],
  // Corpo (A2.2) — Wiktionary em inglês
  ['سِر', 'cabeça', 'substantivo', 'Corpo', '👤', 'سِر وڈا اے۔', 'm'],
  ['اَکّھ', 'olho', 'substantivo', 'Corpo', '👁️', 'اِکّ اَکّھ اے۔', 'f'],
  ['ہتھ', 'mão', 'substantivo', 'Corpo', '✋', 'ہتھ وڈا اے۔', 'm'],
  ['پیر', 'pé', 'substantivo', 'Corpo', '🦶', 'پیر چھوٹا اے۔', 'm'],
  ['نَکّ', 'nariz', 'substantivo', 'Corpo', '👃', 'نَکّ وڈا اے۔', 'm'],
  ['کَنّ', 'orelha', 'substantivo', 'Corpo', '👂', 'کَنّ چھوٹا اے۔', 'm'],
  ['دِل', 'coração', 'substantivo', 'Corpo', '❤️', 'دِل چنگا اے۔', 'm'],
  // Descrições e Natureza (A2.2) — Wiktionary em inglês
  ['گرم', 'quente', 'adjetivo', 'Descrições', '🔥', 'ہوا گرم اے۔'],
  ['ٹھنڈا', 'frio', 'adjetivo', 'Descrições', '🥶', 'پاݨِی ٹھنڈا اے۔'],
  ['خوش', 'feliz', 'adjetivo', 'Descrições', '😊', 'میں خوش ہاں۔'],
  ['مینہہ', 'chuva', 'substantivo', 'Natureza', '🌧️', 'اج مینہہ اے۔', 'm'],
  ['ہوا', 'vento', 'substantivo', 'Natureza', '💨', 'ہوا گرم اے۔', 'f'],
  // Cores
  ['لال', 'vermelho', 'adjetivo', 'Cores', '🔴', 'کُتّا لال اے۔'],
  ['نیلا', 'azul', 'adjetivo', 'Cores', '🔵', 'گَھر نیلا اے۔'],
  ['ہَرا', 'verde', 'adjetivo', 'Cores', '🟢', 'گَھر ہَرا اے۔'],
  ['چِٹّا', 'branco', 'adjetivo', 'Cores', '⚪', 'دُدّھ چِٹّا اے۔'],
  ['کاࣇا', 'preto', 'adjetivo', 'Cores', '⚫', 'کُتّا کاࣇا اے۔'],
];

export const VOCAB_PA = buildVocab('pa', ROWS);
