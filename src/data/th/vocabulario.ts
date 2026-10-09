import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tailandês padrão (o de Bangkok, língua oficial da Tailândia), escrito na escrita
 * tailandesa de verdade. A pronúncia aproximada vem entre parênteses na tradução, com o tom marcado
 * em cada sílaba pelo sistema de romanização Paiboon (o mesmo do Wiktionary em inglês e de boa parte
 * dos cursos de tailandês): à = tom baixo, â = tom descendente, á = tom alto, ǎ = tom ascendente, e
 * a sílaba sem acento é tom médio — os cinco tons do tailandês. Idioma incompleto: por enquanto só
 * o suficiente para o nível A2.2 (unidades 1 a 4) — ver o campo `incomplete` do pacote. Palavras de
 * A2 verificadas no Wiktionary em inglês (en.wiktionary.org) e em fontes acadêmicas sobre gramática
 * tailandesa (comparativo/superlativo, marcadores de tempo).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['สวัสดี', 'oi, olá; tchau (sà-wàt-dii)', 'interjeição', 'Expressões', '👋', 'สวัสดี สบายดีไหม'],
  ['ขอบคุณ', 'obrigado (khɔ̀ɔp khun)', 'interjeição', 'Expressões', '🙏', 'ขอบคุณมากครับ'],
  ['ขอโทษ', 'desculpa, com licença (khɔ̌ɔ-tôot)', 'interjeição', 'Expressões', '🙏', 'ขอโทษครับ ผมมาสาย'],
  ['ไม่เป็นไร', 'de nada; tudo bem, não foi nada (mâi-pen-rai)', 'interjeição', 'Expressões', '🙏', '— ขอบคุณค่ะ — ไม่เป็นไรครับ'],
  ['ครับ', 'partícula de polidez — usada por homens, em qualquer frase (khráp)', 'partícula', 'Expressões', '🙋‍♂️', 'สวัสดีครับ'],
  ['ค่ะ', 'partícula de polidez — usada por mulheres, em afirmações (khâ)', 'partícula', 'Expressões', '🙋‍♀️', 'สวัสดีค่ะ'],
  ['คะ', 'partícula de polidez — usada por mulheres, em perguntas (khá)', 'partícula', 'Expressões', '❓', 'สบายดีไหมคะ'],
  ['สบายดีไหม', 'como vai? (sà-baai-dii-mǎi)', 'expressão', 'Expressões', '🙂', 'สวัสดีครับ สบายดีไหม'],
  // ── Essenciais ──
  ['ใช่', 'sim, isso mesmo (châi)', 'advérbio', 'Essenciais', '👍', 'ใช่ครับ ผมเป็นคนบราซิล'],
  ['ไม่', 'não (mâi)', 'advérbio', 'Essenciais', '👎', 'ไม่ ขอบคุณครับ'],
  ['และ', 'e (lɛ́)', 'conjunção', 'Essenciais', null, 'กาแฟและชา'],
  ['หรือ', 'ou (rʉ̌ʉ)', 'conjunção', 'Essenciais', null, 'ชาหรือกาแฟ'],
  ['มาก', 'muito (mâak)', 'advérbio', 'Essenciais', null, 'อร่อยมาก'],
  ['ด้วย', 'também (dûai)', 'advérbio', 'Essenciais', null, 'ฉันเป็นคนบราซิลด้วย'],
  ['อะไร', 'o quê (a-ray)', 'pronome', 'Essenciais', '❓', 'คุณชื่ออะไร'],
  ['ที่ไหน', 'onde (tîi-nǎi)', 'advérbio', 'Essenciais', '❓', 'คุณมาจากที่ไหน'],
  ['ใคร', 'quem (khrǎi)', 'pronome', 'Essenciais', '❓', 'นั่นใคร'],
  ['จาก', 'de, a partir de (jàak)', 'preposição', 'Essenciais', null, 'ผมมาจากบราซิล'],
  ['เมือง', 'cidade (mʉʉang)', 'substantivo', 'Essenciais', '🏙️', 'กรุงเทพเป็นเมืองใหญ่'],
  ['ประเทศ', 'país (prà-têet)', 'substantivo', 'Essenciais', '🌍', 'ไทยเป็นประเทศเล็ก'],
  ['ภาษา', 'língua, idioma (phaa-sǎa)', 'substantivo', 'Essenciais', '🗣️', 'ภาษาไทยเป็นภาษาที่สวย'],
  ['วัด', 'templo budista (wát)', 'substantivo', 'Essenciais', '🛕', 'วัดพระแก้วสวยมาก'],
  ['ไหม', 'partícula de pergunta (sim/não) (mǎi)', 'partícula', 'Essenciais', '❓', 'อร่อยไหม'],
  // ── Descrições ──
  ['ดี', 'bom; bem (dii)', 'adjetivo', 'Descrições', '👌', 'อาหารดี'],
  ['แย่', 'ruim, péssimo (yɛ̂ɛ)', 'adjetivo', 'Descrições', '👎', 'อากาศแย่'],
  ['ใหญ่', 'grande (yài)', 'adjetivo', 'Descrições', '📏', 'ครอบครัวของฉันใหญ่'],
  ['เล็ก', 'pequeno (lék)', 'adjetivo', 'Descrições', '📏', 'บ้านของฉันเล็ก'],
  // ── Casa ──
  ['บ้าน', 'casa (bâan)', 'substantivo', 'Casa', '🏠', 'บ้านของฉันเล็ก'],
  // ── Animais ──
  ['หมา', 'cachorro (mǎa)', 'substantivo', 'Animais', '🐕', 'หมาของฉันชื่อโตโต้'],
  ['แมว', 'gato (mɛɛo)', 'substantivo', 'Animais', '🐈', 'แมวนอนทั้งวัน'],
  // ── Pessoas ──
  ['ฉัน', 'eu — neutro, comum na fala de mulheres (chǎn)', 'pronome', 'Pessoas', '🙋', 'ฉันชื่อลีนู'],
  ['ผม', 'eu — usado só por homens (phǒm)', 'pronome', 'Pessoas', '🙋‍♂️', 'ผมชื่อสมชาย'],
  ['คุณ', 'você — educado (khun)', 'pronome', 'Pessoas', '🫵', 'คุณชื่ออะไร'],
  ['เขา', 'ele, ela (khǎo)', 'pronome', 'Pessoas', '👤', 'เขาเป็นคนเชียงใหม่'],
  ['เรา', 'nós (rao)', 'pronome', 'Pessoas', '🙌', 'เราเป็นเพื่อนกัน'],
  ['ชื่อ', 'nome (chʉ̂ʉ)', 'substantivo', 'Pessoas', '🏷️', 'คุณชื่ออะไร'],
  ['เพื่อน', 'amigo (pʉ̂ʉan)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'เขาเป็นเพื่อนของฉัน'],
  ['ครอบครัว', 'família (krɔ̂ɔp-kruua)', 'substantivo', 'Pessoas', '👪', 'ครอบครัวของฉันใหญ่'],
  ['มนุษย์', 'ser humano, pessoa — registro formal (má-nút)', 'substantivo', 'Pessoas', '🧑', 'มนุษย์ทุกคนเท่าเทียมกัน'],
  ['พ่อ', 'pai (phɔ̂ɔ)', 'substantivo', 'Pessoas', '👨', 'พ่อของฉันเป็นคนกรุงเทพ'],
  ['แม่', 'mãe (mâe)', 'substantivo', 'Pessoas', '👩', 'แม่ของฉันทำอาหารอร่อย'],
  ['พี่ชาย', 'irmão mais velho (phîi-chaay)', 'substantivo', 'Pessoas', '🧑', 'ฉันมีพี่ชายหนึ่งคน'],
  ['พี่สาว', 'irmã mais velha (phîi-sǎao)', 'substantivo', 'Pessoas', '🧑', 'พี่สาวของฉันอยู่กรุงเทพ'],
  ['น้องชาย', 'irmão mais novo (nɔ́ɔng-chaay)', 'substantivo', 'Pessoas', '🧒', 'ฉันมีน้องชายหนึ่งคน'],
  ['น้องสาว', 'irmã mais nova (nɔ́ɔng-sǎao)', 'substantivo', 'Pessoas', '🧒', 'น้องสาวของฉันเล็ก'],
  ['ลูกชาย', 'filho (lûuk-chaay)', 'substantivo', 'Pessoas', '🧒', 'ลูกชายของเขาน่ารัก'],
  ['ลูกสาว', 'filha (lûuk-sǎao)', 'substantivo', 'Pessoas', '🧒', 'ลูกสาวของเขาน่ารัก'],
  // ── Verbos-chave ──
  ['เป็น', 'ser (profissão, nacionalidade, natureza de algo) (pen)', 'verbo', 'Verbos-chave', '🧑', 'ผมเป็นคนบราซิล'],
  ['คือ', 'ser, isto é (para identificar, definir) (khʉʉ)', 'verbo', 'Verbos-chave', '🟰', 'นี่คือบ้านของฉัน'],
  ['มี', 'ter; haver (mii)', 'verbo', 'Verbos-chave', '🤲', 'ฉันมีพี่ชายหนึ่งคน'],
  ['อยู่', 'morar; estar (em algum lugar) (yùu)', 'verbo', 'Verbos-chave', '🏠', 'ฉันอยู่กรุงเทพ'],
  ['พูด', 'falar (phûut)', 'verbo', 'Verbos-chave', '🗣️', 'ฉันพูดภาษาไทยนิดหน่อย'],
  ['ไป', 'ir (pai)', 'verbo', 'Verbos-chave', '🚶', 'ฉันไปเชียงใหม่'],
  ['กิน', 'comer (kin)', 'verbo', 'Verbos-chave', '🍽️', 'ฉันกินข้าว'],
  ['ดื่ม', 'beber (dʉ̀ʉm)', 'verbo', 'Verbos-chave', '🥤', 'ฉันดื่มน้ำ'],
  ['ชอบ', 'gostar (de) (chɔ̂ɔp)', 'verbo', 'Verbos-chave', '❤️', 'ฉันชอบกาแฟ'],
  ['อยาก', 'querer (+ verbo) (yàak)', 'verbo', 'Verbos-chave', '💭', 'ฉันอยากเรียนภาษาไทย'],
  ['รู้', 'saber (rúu)', 'verbo', 'Verbos-chave', '🧠', 'ฉันไม่รู้'],
  // ── Alimentação e Restaurantes ──
  ['น้ำ', 'água (náam)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ขอน้ำแก้วหนึ่งครับ'],
  ['ข้าว', 'arroz (kâao)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'ฉันกินข้าว'],
  ['กาแฟ', 'café (gaa-fɛɛ)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ฉันชอบกาแฟ'],
  ['ชา', 'chá (chaa)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ชาหรือกาแฟ'],
  ['นม', 'leite (nom)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'นมสีขาว'],
  ['อร่อย', 'gostoso, saboroso (à-rɔ̀i)', 'adjetivo', 'Alimentação e Restaurantes', '😋', 'อาหารไทยอร่อยมาก'],
  // ── Números ──
  ['หนึ่ง', 'um (nùeng)', 'numeral', 'Números', '1️⃣', 'ฉันมีพี่ชายหนึ่งคน'],
  ['สอง', 'dois (sɔ̌ɔng)', 'numeral', 'Números', '2️⃣', 'แมวสองตัว'],
  ['สาม', 'três (sǎam)', 'numeral', 'Números', '3️⃣', 'เพื่อนสามคน'],
  ['สี่', 'quatro (sìi)', 'numeral', 'Números', '4️⃣', 'หมามีสี่ขา'],
  ['ห้า', 'cinco (hâa)', 'numeral', 'Números', '5️⃣', 'ห้าวัน'],
  ['หก', 'seis (hòk)', 'numeral', 'Números', '6️⃣', 'หกชั่วโมง'],
  ['เจ็ด', 'sete (jèt)', 'numeral', 'Números', '7️⃣', 'หนึ่งอาทิตย์มีเจ็ดวัน'],
  ['แปด', 'oito (pàet)', 'numeral', 'Números', '8️⃣', 'แปดชั่วโมง'],
  ['เก้า', 'nove (kâo)', 'numeral', 'Números', '9️⃣', 'เขาอายุเก้าขวบ'],
  ['สิบ', 'dez (sìp)', 'numeral', 'Números', '🔟', 'สิบบาท'],
  // ── Tempo ──
  ['วันนี้', 'hoje (wan-níi)', 'advérbio', 'Tempo', '📅', 'วันนี้อากาศดี'],
  ['พรุ่งนี้', 'amanhã (prûng-níi)', 'advérbio', 'Tempo', '📅', 'พรุ่งนี้เจอกัน'],
  ['เมื่อวาน', 'ontem (mʉ̂ʉa-waan)', 'advérbio', 'Tempo', '📅', 'เมื่อวานฉันไปเชียงใหม่'],
  ['วันจันทร์', 'segunda-feira (wan-jan)', 'substantivo', 'Tempo', '📅', 'วันนี้วันจันทร์'],
  ['วันอังคาร', 'terça-feira (wan-ang-khaan)', 'substantivo', 'Tempo', '📅', 'พรุ่งนี้วันอังคาร'],
  ['วันพุธ', 'quarta-feira (wan-phút)', 'substantivo', 'Tempo', '📅', 'วันนี้วันพุธ'],
  ['วันพฤหัสบดี', 'quinta-feira (wan-phrú-hàt-sà-bɔɔ-dii)', 'substantivo', 'Tempo', '📅', 'วันนี้วันพฤหัสบดี'],
  ['วันศุกร์', 'sexta-feira (wan-sùk)', 'substantivo', 'Tempo', '📅', 'พรุ่งนี้วันศุกร์'],
  ['วันเสาร์', 'sábado (wan-sǎo)', 'substantivo', 'Tempo', '📅', 'วันเสาร์เราไปตลาด'],
  ['วันอาทิตย์', 'domingo (wan-aa-tít)', 'substantivo', 'Tempo', '📅', 'วันอาทิตย์เราอยู่บ้าน'],
  // ── Cores ──
  ['ขาว', 'branco (kǎao)', 'adjetivo', 'Cores', '⚪', 'นมสีขาว'],
  ['ดำ', 'preto (dam)', 'adjetivo', 'Cores', '⚫', 'แมวสีดำ'],
  ['แดง', 'vermelho (dɛɛng)', 'adjetivo', 'Cores', '🔴', 'รถสีแดง'],
  ['เขียว', 'verde (kǐao)', 'adjetivo', 'Cores', '🟢', 'ต้นไม้สีเขียว'],
  ['ฟ้า', 'azul (céu) (fáa)', 'adjetivo', 'Cores', '🔵', 'ท้องฟ้าสีฟ้า'],
  ['เหลือง', 'amarelo (lʉ̌ʉang)', 'adjetivo', 'Cores', '🟡', 'กล้วยสีเหลือง'],
  // ── อากาศ: clima (A2) ──
  ['อากาศ', 'clima, tempo (aa-kàat)', 'substantivo', 'Clima', '🌦️', 'วันนี้อากาศดี'],
  ['ฝน', 'chuva (fǒn)', 'substantivo', 'Clima', '🌧️', 'วันนี้ฝนตก'],
  ['ร้อน', 'calor; quente (rɔ́ɔn)', 'adjetivo', 'Clima', '☀️', 'วันนี้ร้อนมาก'],
  ['หนาว', 'frio (nǎao)', 'adjetivo', 'Clima', '❄️', 'ฤดูหนาวที่เชียงใหม่หนาว'],
  ['ลม', 'vento (lom)', 'substantivo', 'Clima', '💨', 'วันนี้ลมแรง'],
  ['เมฆ', 'nuvem (mêek)', 'substantivo', 'Clima', '☁️', 'ฟ้ามีเมฆ'],
  // ── เสื้อผ้า: roupas (A2) ──
  ['เสื้อ', 'camisa, roupa (sʉ̂ʉa)', 'substantivo', 'Roupas', '👕', 'เสื้อของฉันใหม่'],
  ['กางเกง', 'calça (gaang-geeng)', 'substantivo', 'Roupas', '👖', 'กางเกงของฉันสีดำ'],
  ['รองเท้า', 'sapato (rɔɔng-tháao)', 'substantivo', 'Roupas', '👟', 'รองเท้าของฉันใหม่'],
  ['หมวก', 'chapéu, boné (mùak)', 'substantivo', 'Roupas', '🧢', 'หมวกของเขาสีแดง'],
  // ── ร่างกาย: corpo (A2) ──
  ['หัว', 'cabeça (hǔa)', 'substantivo', 'Corpo', '🙂', 'หัวของฉันเจ็บ'],
  ['ตา', 'olho (taa)', 'substantivo', 'Corpo', '👁️', 'ตาของเขาโต'],
  ['หู', 'ouvido, orelha (hǔu)', 'substantivo', 'Corpo', '👂', 'หูของฉันเจ็บ'],
  ['จมูก', 'nariz (jà-mùuk)', 'substantivo', 'Corpo', '👃', 'จมูกของเขาเล็ก'],
  ['มือ', 'mão (mʉʉ)', 'substantivo', 'Corpo', '✋', 'ขอมือหน่อย'],
  ['เท้า', 'pé (tháao)', 'substantivo', 'Corpo', '🦶', 'เท้าของฉันเจ็บ'],
  ['ปาก', 'boca (pàak)', 'substantivo', 'Corpo', '👄', 'อ้าปากหน่อย'],
  // ── เมือง: cidade (A2) ──
  ['ตลาด', 'mercado (dtà-làat)', 'substantivo', 'Cidade', '🏪', 'เราไปตลาดกัน'],
  ['ร้าน', 'loja (ráan)', 'substantivo', 'Cidade', '🏬', 'ร้านนี้ใหญ่'],
  ['ถนน', 'rua, estrada (thà-nǒn)', 'substantivo', 'Cidade', '🛣️', 'ถนนนี้ยาว'],
  ['โรงพยาบาล', 'hospital (roong-pá-yaa-baan)', 'substantivo', 'Cidade', '🏥', 'โรงพยาบาลอยู่ใกล้'],
  ['โรงเรียน', 'escola (roong-rian)', 'substantivo', 'Cidade', '🏫', 'ลูกของฉันไปโรงเรียน'],
  // ── อาชีพ: profissões (A2) ──
  ['หมอ', 'médico(a) (mɔ̌ɔ)', 'substantivo', 'Profissões', '🩺', 'เขาเป็นหมอ'],
  ['ครู', 'professor(a) (khruu)', 'substantivo', 'Profissões', '🍎', 'แม่ของฉันเป็นครู'],
  ['วิศวกร', 'engenheiro(a) (wít-sà-wá-gɔɔn)', 'substantivo', 'Profissões', '👷', 'พี่ชายของฉันเป็นวิศวกร'],
  ['ชาวนา', 'agricultor(a) (chaao-naa)', 'substantivo', 'Profissões', '🌾', 'เขาเป็นชาวนา'],
  // ── ความรู้สึก: sentimentos (A2) ──
  ['ดีใจ', 'feliz (dii-jai)', 'adjetivo', 'Sentimentos', '😊', 'ฉันดีใจมาก'],
  ['เสียใจ', 'triste (sǐa-jai)', 'adjetivo', 'Sentimentos', '😢', 'เขาเสียใจวันนี้'],
  ['โกรธ', 'bravo, com raiva (gròot)', 'adjetivo', 'Sentimentos', '😠', 'เขาโกรธฉัน'],
  ['กลัว', 'ter medo (glua)', 'verbo', 'Sentimentos', '😨', 'ฉันกลัวหมา'],
  ['เหนื่อย', 'cansado (nʉ̀ai)', 'adjetivo', 'Sentimentos', '😴', 'ฉันเหนื่อยมาก'],
  // ── Verbos-chave (mais, A2) ──
  ['เรียน', 'estudar (rian)', 'verbo', 'Verbos-chave', '📖', 'ฉันเรียนภาษาไทย'],
  ['เขียน', 'escrever (khǐan)', 'verbo', 'Verbos-chave', '✍️', 'ฉันเขียนจดหมาย'],
  ['เล่น', 'jogar, brincar (lên)', 'verbo', 'Verbos-chave', '⚽', 'เด็กๆกำลังเล่น'],
  ['ซื้อ', 'comprar (sʉ́ʉ)', 'verbo', 'Verbos-chave', '🛍️', 'ฉันซื้อเสื้อ'],
  ['เข้าใจ', 'entender (khâo-jai)', 'verbo', 'Verbos-chave', '🧠', 'ฉันเข้าใจภาษาไทย'],
  // ── ไวยากรณ์: partículas de tempo e comparação (A2) ──
  ['จะ', 'partícula de futuro, antes do verbo (jà)', 'partícula', 'Essenciais', '🔮', 'ฉันจะไปตลาด'],
  ['แล้ว', 'partícula de ação já feita/concluída (lɛ́ɛo)', 'partícula', 'Essenciais', '✅', 'ฉันกินข้าวแล้ว'],
  ['กว่า', 'mais … que (comparativo) (gwàa)', 'partícula', 'Essenciais', '⚖️', 'เขาสูงกว่าฉัน'],
  ['ที่สุด', 'o(a) mais … (superlativo) (tîi-sùt)', 'advérbio', 'Essenciais', '🏆', 'เขาสูงที่สุด'],
  // ── ตัวเลข: números (20-100) ──
  ['ยี่สิบ', 'vinte (yîi-sìp)', 'numeral', 'Números', '2️⃣0️⃣', 'ฉันอายุยี่สิบปี'],
  ['สามสิบ', 'trinta (sǎam-sìp)', 'numeral', 'Números', '3️⃣0️⃣', 'สามสิบวัน'],
  ['สี่สิบ', 'quarenta (sìi-sìp)', 'numeral', 'Números', '4️⃣0️⃣', 'สี่สิบบาท'],
  ['ห้าสิบ', 'cinquenta (hâa-sìp)', 'numeral', 'Números', '5️⃣0️⃣', 'หนังสือเล่มนี้ห้าสิบบาท'],
  ['หกสิบ', 'sessenta (hòk-sìp)', 'numeral', 'Números', '6️⃣0️⃣', 'หกสิบนาทีเท่ากับหนึ่งชั่วโมง'],
  ['เจ็ดสิบ', 'setenta (jèt-sìp)', 'numeral', 'Números', '7️⃣0️⃣', 'เขาอายุเจ็ดสิบปี'],
  ['แปดสิบ', 'oitenta (pàet-sìp)', 'numeral', 'Números', '8️⃣0️⃣', 'แปดสิบบาท'],
  ['เก้าสิบ', 'noventa (kâo-sìp)', 'numeral', 'Números', '9️⃣0️⃣', 'เก้าสิบบาท'],
  ['ร้อย', 'cem (rɔ́ɔi)', 'numeral', 'Números', '💯', 'หนึ่งศตวรรษมีร้อยปี'],
];

export const VOCAB_TH = buildVocab('th', ROWS);
