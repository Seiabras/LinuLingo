import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do cantonês padrão (廣州–香港, Guangzhou–Hong Kong), em caracteres tradicionais, com o
 * jyutping (romanização da Linguistic Society of Hong Kong, tons marcados de 1 a 6) entre parênteses
 * na tradução — igual à convenção já usada no mandarim (`src/data/zh`). Cada palavra foi conferida no
 * Wikcionário em inglês (verbete por verbete, seção "Cantonese", Guangzhou–Hong Kong) ou no Omniglot
 * (páginas "Cantonese phrases", "Cantonese numbers", "Cantonese kinship"); a gramática de pronomes,
 * negação, posse e classificadores vem do artigo "Cantonese grammar" da Wikipédia em inglês. Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete` em
 * index.ts. O cantonês não tem gênero gramatical: nenhuma linha leva gênero.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['你好', 'oi, olá (nei⁵ hou²)', 'interjeição', 'Expressões', '👋', '你好！我係Linu。'],
  ['你好嗎', 'como vai? (nei⁵ hou² maa³)', 'expressão', 'Expressões', '🙂', '你好嗎？'],
  ['早晨', 'bom dia (zou² san⁴)', 'interjeição', 'Expressões', '🌅', '早晨！你好嗎？'],
  ['早抖', 'boa noite, ao se despedir (zou² tau², lit. “descansa cedo”)', 'interjeição', 'Expressões', '🌙', '早抖，再見！'],
  ['再見', 'tchau, até logo (zoi³ gin³)', 'interjeição', 'Expressões', '👋', '再見，朋友！'],
  ['多謝', 'obrigado, por um presente ou elogio (do¹ ze⁶)', 'interjeição', 'Expressões', '🙏', '多謝！'],
  ['唔該', 'por favor; obrigado por um favor ou serviço (m⁴ goi¹)', 'interjeição', 'Expressões', '🙏', '茶，唔該。'],
  ['對唔住', 'desculpe (deoi³ m⁴ zyu⁶)', 'expressão', 'Expressões', '🙇', '對唔住，我唔明白。'],
  ['飲勝', 'saúde!, um brinde (jam² sing³)', 'expressão', 'Expressões', '🥂', '飲勝！'],
  // ── Essenciais ──
  ['啱', 'certo, correto; usado como “sim” (ngaam¹)', 'interjeição', 'Essenciais', '👍', '啱！'],
  ['唔', 'não (partícula de negação, antes do verbo) (m⁴)', 'advérbio', 'Essenciais', '👎', '我唔係。'],
  ['冇', 'não ter, não haver (mou⁵; nega 有)', 'verbo', 'Essenciais', '🙅', '我冇狗。'],
  ['同', 'e, com (tung⁴)', 'conjunção', 'Essenciais', null, '我同你。'],
  ['都', 'também, todos (dou¹)', 'advérbio', 'Essenciais', null, '我都係。'],
  ['咩', 'o quê (partícula interrogativa, contração de 乜嘢) (me¹)', 'pronome', 'Essenciais', '❓', '你叫咩名呀？'],
  ['邊度', 'onde (bin¹ dou⁶)', 'pronome', 'Essenciais', '❓', '你係邊度人呀？'],
  ['邊個', 'quem (bin¹ go³)', 'pronome', 'Essenciais', '❓', '佢係邊個？'],
  ['點樣', 'como (dim² joeng²)', 'pronome', 'Essenciais', '❓', '你點樣呀？'],
  ['呢', 'este, esta (ni¹; combina sempre com um classificador, como 呢個)', 'pronome', 'Essenciais', '👇', '呢個好。'],
  ['一齊', 'junto, juntos (jat¹ cai⁴)', 'advérbio', 'Essenciais', '🤝', '我哋一齊學。'],
  ['個', 'classificador geral, para pessoas e coisas sem classificador próprio (go³)', 'contador', 'Essenciais', '🔢', '一個人。'],
  ['嘅', 'partícula de posse, “de” (ge³): 我嘅 = meu', 'partícula', 'Essenciais', '🔗', '我嘅貓。'],
  ['喺', 'estar em, no, na (preposição/verbo locativo) (hai²)', 'preposição', 'Essenciais', null, '我喺香港。'],
  ['但係', 'mas (daan⁶ hai⁶)', 'conjunção', 'Essenciais', null, '我有狗，但係我冇貓。'],
  ['雖然', 'embora, apesar de (seoi¹ jin⁴)', 'conjunção', 'Essenciais', null, '我嘅屋企好好，雖然好細。'],
  ['可以', 'poder, conseguir (ho² ji⁵)', 'verbo', 'Verbos-chave', '✅', '我哋可以一齊學。'],
  ['香港', 'Hong Kong (hoeng¹ gong²)', 'substantivo', 'Casa', '🇭🇰', '我喺香港。'],
  ['開心', 'feliz, contente (hoi¹ sam¹)', 'adjetivo', 'Descrições', '😊', '我好開心識你。'],
  // ── Pessoas ──
  ['我', 'eu (ngo⁵)', 'pronome', 'Pessoas', '🙋', '我係Linu。'],
  ['你', 'tu, você (nei⁵)', 'pronome', 'Pessoas', '🫵', '你好嗎？'],
  ['佢', 'ele, ela (keoi⁵; o cantonês falado não distingue gênero no pronome)', 'pronome', 'Pessoas', '🧑', '佢係我朋友。'],
  ['我哋', 'nós (ngo⁵ dei⁶)', 'pronome', 'Pessoas', '🙌', '我哋一齊學。'],
  ['你哋', 'vocês (nei⁵ dei⁶)', 'pronome', 'Pessoas', '🫵', '你哋好嗎？'],
  ['佢哋', 'eles, elas (keoi⁵ dei⁶)', 'pronome', 'Pessoas', '👥', '佢哋係朋友。'],
  ['名', 'nome (meng², forma falada; a leitura literária é ming⁴)', 'substantivo', 'Pessoas', '🏷️', '你叫咩名呀？'],
  ['朋友', 'amigo, amiga (pang⁴ jau⁵)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', '佢係我朋友。'],
  ['人', 'pessoa (jan⁴)', 'substantivo', 'Pessoas', '🧍', '一個人。'],
  ['爸爸', 'pai, papai (baa⁴ baa¹)', 'substantivo', 'Pessoas', '👨', '我爸爸。'],
  ['媽媽', 'mãe, mamãe (maa⁴ maa¹)', 'substantivo', 'Pessoas', '👩', '我媽媽。'],
  ['哥哥', 'irmão mais velho (go¹ go¹)', 'substantivo', 'Pessoas', '🧑', '我哥哥好。'],
  ['弟弟', 'irmão mais novo (dai⁶ dai²)', 'substantivo', 'Pessoas', '🧒', '我弟弟。'],
  ['家姐', 'irmã mais velha (gaa¹ ze¹)', 'substantivo', 'Pessoas', '🧑', '我家姐。'],
  ['妹妹', 'irmã mais nova (mui⁶ mui¹)', 'substantivo', 'Pessoas', '🧒', '我妹妹。'],
  // ── Verbos-chave ──
  ['係', 'ser, estar (hai⁶)', 'verbo', 'Verbos-chave', '🧑', '我係Linu。'],
  ['有', 'ter, haver (jau⁵)', 'verbo', 'Verbos-chave', '🤲', '我有朋友。'],
  ['鍾意', 'gostar de (zung¹ ji³)', 'verbo', 'Verbos-chave', '❤️', '我鍾意茶。'],
  ['食', 'comer (sik⁶)', 'verbo', 'Verbos-chave', '🍽️', '我食飯。'],
  ['飲', 'beber (jam²)', 'verbo', 'Verbos-chave', '🥤', '我飲水。'],
  ['去', 'ir (heoi³)', 'verbo', 'Verbos-chave', '🚶', '我去屋企。'],
  ['住', 'morar (zyu⁶)', 'verbo', 'Verbos-chave', '🏠', '我住屋企。'],
  ['識', 'saber, reconhecer, conseguir (sik¹)', 'verbo', 'Verbos-chave', '🧠', '我識你。'],
  ['想', 'querer (soeng²)', 'verbo', 'Verbos-chave', '💭', '我想飲茶。'],
  ['學', 'aprender (hok⁶)', 'verbo', 'Verbos-chave', '📚', '我哋一齊學。'],
  ['講', 'falar, dizer (gong²)', 'verbo', 'Verbos-chave', '🗣️', '佢講咩呀？'],
  ['見面', 'encontrar-se, ver-se (gin³ min⁶)', 'verbo', 'Verbos-chave', '🤝', '我哋喺香港見面。'],
  ['廣東話', 'cantonês, a língua (gwong² dung¹ waa²)', 'substantivo', 'Pessoas', '🗣️', '我學廣東話。'],
  // ── Alimentação ──
  ['水', 'água (seoi²)', 'substantivo', 'Alimentação e Restaurantes', '💧', '我飲水。'],
  ['茶', 'chá (caa⁴)', 'substantivo', 'Alimentação e Restaurantes', '🍵', '我鍾意茶。'],
  ['咖啡', 'café (gaa³ fe¹)', 'substantivo', 'Alimentação e Restaurantes', '☕', '我想飲咖啡。'],
  ['飯', 'arroz cozido, refeição (faan⁶)', 'substantivo', 'Alimentação e Restaurantes', '🍚', '我食飯。'],
  ['牛奶', 'leite (ngau⁴ naai⁵)', 'substantivo', 'Alimentação e Restaurantes', '🥛', '我飲牛奶。'],
  // ── Números ──
  ['一', 'um (jat¹)', 'numeral', 'Números', '1️⃣', '星期一。'],
  ['二', 'dois (ji⁶)', 'numeral', 'Números', '2️⃣', '星期二。'],
  ['三', 'três (saam¹)', 'numeral', 'Números', '3️⃣', '星期三。'],
  ['四', 'quatro (sei³)', 'numeral', 'Números', '4️⃣', '星期四。'],
  ['五', 'cinco (ng⁵)', 'numeral', 'Números', '5️⃣', '星期五。'],
  ['六', 'seis (luk⁶)', 'numeral', 'Números', '6️⃣', '星期六。'],
  ['七', 'sete (cat¹)', 'numeral', 'Números', '7️⃣', '七。'],
  ['八', 'oito (baat³)', 'numeral', 'Números', '8️⃣', '八。'],
  ['九', 'nove (gau²)', 'numeral', 'Números', '9️⃣', '九。'],
  ['十', 'dez (sap⁶)', 'numeral', 'Números', '🔟', '十。'],
  // ── Tempo ──
  ['今日', 'hoje (gam¹ jat⁶)', 'advérbio', 'Tempo', '📅', '今日係星期一。'],
  ['聽日', 'amanhã (ting¹ jat⁶)', 'advérbio', 'Tempo', '📅', '聽日係星期二。'],
  ['琴日', 'ontem (kam⁴ jat⁶)', 'advérbio', 'Tempo', '📅', '琴日係星期日。'],
  ['星期一', 'segunda-feira (sing¹ kei⁴ jat¹)', 'substantivo', 'Tempo', '📅', '今日係星期一。'],
  ['星期二', 'terça-feira (sing¹ kei⁴ ji⁶)', 'substantivo', 'Tempo', '📅', '今日係星期二。'],
  ['星期三', 'quarta-feira (sing¹ kei⁴ saam¹)', 'substantivo', 'Tempo', '📅', '今日係星期三。'],
  ['星期四', 'quinta-feira (sing¹ kei⁴ sei³)', 'substantivo', 'Tempo', '📅', '今日係星期四。'],
  ['星期五', 'sexta-feira (sing¹ kei⁴ ng⁵)', 'substantivo', 'Tempo', '📅', '今日係星期五。'],
  ['星期六', 'sábado (sing¹ kei⁴ luk⁶)', 'substantivo', 'Tempo', '📅', '今日係星期六。'],
  ['星期日', 'domingo (sing¹ kei⁴ jat⁶)', 'substantivo', 'Tempo', '📅', '今日係星期日。'],
  // ── Cores ──
  ['紅色', 'vermelho (hung⁴ sik¹)', 'adjetivo', 'Cores', '🔴', '我鍾意紅色。'],
  ['藍色', 'azul (laam⁴ sik¹)', 'adjetivo', 'Cores', '🔵', '我鍾意藍色。'],
  ['綠色', 'verde (luk⁶ sik¹)', 'adjetivo', 'Cores', '🟢', '我鍾意綠色。'],
  ['白色', 'branco (baak⁶ sik¹)', 'adjetivo', 'Cores', '⚪', '牛奶係白色。'],
  ['黑色', 'preto (hak¹ sik¹)', 'adjetivo', 'Cores', '⚫', '我嘅貓係黑色。'],
  // ── Casa, animais e descrições ──
  ['屋企', 'casa, lar (uk¹ kei²)', 'substantivo', 'Casa', '🏠', '我去屋企。'],
  ['城市', 'cidade (sing⁴ si⁵)', 'substantivo', 'Casa', '🏙️', '呢個城市好大。'],
  ['狗', 'cachorro, cão (gau²)', 'substantivo', 'Animais', '🐕', '我有狗。'],
  ['貓', 'gato (maau¹)', 'substantivo', 'Animais', '🐈', '我嘅貓係黑色。'],
  ['好', 'bom, bem (hou²)', 'adjetivo', 'Descrições', '👍', '呢個好。'],
  ['大', 'grande (daai⁶)', 'adjetivo', 'Descrições', '📏', '呢個城市好大。'],
  ['細', 'pequeno (sai³)', 'adjetivo', 'Descrições', '📏', '我嘅貓好細。'],
];

export const VOCAB_YUE = buildVocab('yue', ROWS);
