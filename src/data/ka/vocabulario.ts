import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do georgiano padrão (ქართული, o de Tbilisi), escrito no alfabeto georgiano de
 * verdade (mkhedruli). A pronúncia aproximada vem entre parênteses na tradução, porque o alfabeto
 * é todo novo para quem fala português. Idioma incompleto: por enquanto só o suficiente para o
 * nível A2.2 (unidades 1 a 4) — ver o campo `incomplete` do pacote. Palavras de A2 verificadas no
 * Wiktionary em inglês (en.wiktionary.org) e na Wikipédia em inglês ("Georgian grammar",
 * "Georgian numerals").
 *
 * O georgiano não é indo-europeu (família kartveliana, sem parentesco com o português), tem
 * ergatividade dividida por tempo verbal e seis consoantes ejetivas (ტ, კ, პ, წ, ჭ, ყ).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['გამარჯობა', 'oi, olá (gamarjoba, lit. “vitória a você”)', 'interjeição', 'Expressões', '👋', 'გამარჯობა! როგორ ხარ?'],
  ['გაუმარჯოს', 'saúde!, brinde (gaumarjos)', 'interjeição', 'Expressões', '🥂', 'გაუმარჯოს საქართველოს!'],
  ['დილა მშვიდობისა', 'bom dia (dila mshvidobisa, lit. “manhã de paz”)', 'interjeição', 'Expressões', '🌅', 'დილა მშვიდობისა, დედა!'],
  ['საღამო მშვიდობისა', 'boa tarde, ao chegar (saghamo mshvidobisa, lit. “tarde de paz”)', 'interjeição', 'Expressões', '🌇', 'საღამო მშვიდობისა!'],
  ['ღამე მშვიდობისა', 'boa noite, ao se despedir (ghame mshvidobisa, lit. “noite de paz”)', 'interjeição', 'Expressões', '🌙', 'ღამე მშვიდობისა!'],
  ['ნახვამდის', 'tchau, até logo (nakhvamdis)', 'interjeição', 'Expressões', '👋', 'ნახვამდის!'],
  ['მადლობა', 'obrigado (madloba)', 'interjeição', 'Expressões', '🙏', 'დიდი მადლობა!'],
  ['გთხოვთ', 'por favor (gtkhovt)', 'interjeição', 'Expressões', '🙏', 'ერთი ყავა, გთხოვთ.'],
  ['არაფრის', 'de nada (arapris)', 'interjeição', 'Expressões', '🙏', 'მადლობა! — არაფრის!'],
  ['ბოდიში', 'desculpa, com licença (bodishi)', 'interjeição', 'Expressões', '🙇', 'ბოდიში, სად არის სასტუმრო?'],
  ['როგორ ხარ', 'como vai? informal (rogor khar)', 'expressão', 'Expressões', '🙂', 'გამარჯობა! როგორ ხარ?'],
  // ── Essenciais ──
  ['დიახ', 'sim, formal (diakh)', 'advérbio', 'Essenciais', '👍', 'დიახ, გმადლობთ.'],
  ['კი', 'sim, informal (ki)', 'advérbio', 'Essenciais', '👍', 'კი, მინდა ყავა.'],
  ['არა', 'não (ara)', 'advérbio', 'Essenciais', '👎', 'არა, მადლობა.'],
  ['ან', 'ou (an)', 'conjunção', 'Essenciais', null, 'ყავა ან ჩაი?'],
  ['ძალიან', 'muito (dzalian)', 'advérbio', 'Essenciais', null, 'ძალიან გმადლობთ.'],
  ['ასევე', 'também (aseve)', 'advérbio', 'Essenciais', null, 'მეც ასევე ვცხოვრობ თბილისში.'],
  ['რა', 'o que, que (ra)', 'pronome', 'Essenciais', '❓', 'ეს რა არის?'],
  ['სად', 'onde (sad)', 'advérbio', 'Essenciais', '❓', 'სად ცხოვრობ?'],
  ['როგორ', 'como (rogor)', 'advérbio', 'Essenciais', '❓', 'ეს როგორ არის ქართულად?'],
  ['საიდან', 'de onde (saidan)', 'advérbio', 'Essenciais', '❓', 'საიდან ხარ?'],
  ['ქალაქი', 'cidade (kalaki)', 'substantivo', 'Essenciais', '🏙️', 'თბილისი დიდი ქალაქია.'],
  ['ქვეყანა', 'país (kveqana)', 'substantivo', 'Essenciais', '🌍', 'საქართველო პატარა ქვეყანაა.'],
  ['ენა', 'língua, idioma (ena)', 'substantivo', 'Essenciais', '🗣️', 'ქართული ლამაზი ენაა.'],
  // ── Descrições ──
  ['კარგი', 'bom; bem (kargi)', 'adjetivo', 'Descrições', '👌', 'ეს კარგია.'],
  ['ცუდი', 'ruim, mau (tsudi)', 'adjetivo', 'Descrições', '👎', 'ამინდი ცუდია.'],
  ['დიდი', 'grande (didi)', 'adjetivo', 'Descrições', '📏', 'ჩემი ოჯახი დიდია.'],
  ['პატარა', 'pequeno (p’at’ara)', 'adjetivo', 'Descrições', '📏', 'ჩემი სახლი პატარაა.'],
  // ── Casa ──
  ['სახლი', 'casa (sakhli)', 'substantivo', 'Casa', '🏠', 'ჩემი სახლი პატარაა.'],
  // ── Animais ──
  ['ძაღლი', 'cachorro (dzaghli)', 'substantivo', 'Animais', '🐕', 'მე მყავს ძაღლი.'],
  ['კატა', 'gato (k’at’a)', 'substantivo', 'Animais', '🐈', 'კატა სახლშია.'],
  // ── Pessoas ──
  ['მე', 'eu (me)', 'pronome', 'Pessoas', '🙋', 'მე ბრაზილიელი ვარ.'],
  ['შენ', 'tu, você, informal (shen)', 'pronome', 'Pessoas', '🫵', 'შენ საიდან ხარ?'],
  ['ის', 'ele, ela (is)', 'pronome', 'Pessoas', '👤', 'ის თბილისიდან არის.'],
  ['ჩვენ', 'nós (chven)', 'pronome', 'Pessoas', '🙌', 'ჩვენ მეგობრები ვართ.'],
  ['თქვენ', 'vocês; o(a) senhor(a), formal (tkven)', 'pronome', 'Pessoas', '🫵', 'თქვენ საიდან ხართ?'],
  ['ისინი', 'eles, elas (isini)', 'pronome', 'Pessoas', '👥', 'ისინი ქართულად ლაპარაკობენ.'],
  ['სახელი', 'nome (sakheli)', 'substantivo', 'Pessoas', '🏷️', 'ჩემი სახელია ლინუ.'],
  ['მეგობარი', 'amigo (megobari)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'ის ჩემი მეგობარია.'],
  // ── Verbos-chave ──
  ['ყოფნა', 'ser, estar (me var, shen khar, is aris)', 'verbo', 'Verbos-chave', '🧑', 'მე სტუდენტი ვარ.'],
  ['მაქვს', 'ter, algo que não é vivo (makvs)', 'verbo', 'Verbos-chave', '🤲', 'მე მაქვს წიგნი.'],
  ['მყავს', 'ter, alguém vivo ou um bicho (mqavs)', 'verbo', 'Verbos-chave', '🐾', 'მე მყავს ძმა.'],
  ['ლაპარაკი', 'falar (me vlaparak’ob)', 'verbo', 'Verbos-chave', '🗣️', 'მე ცოტა ქართულად ვლაპარაკობ.'],
  ['მინდა', 'eu quero (minda)', 'verbo', 'Verbos-chave', '💭', 'მე მინდა ხაჭაპური.'],
  ['ცოდნა', 'saber (me vitsi)', 'verbo', 'Verbos-chave', '🧠', 'მე ვიცი.'],
  ['წასვლა', 'ir (me mivdivar)', 'verbo', 'Verbos-chave', '🚶', 'მე სახლში მივდივარ.'],
  ['ცხოვრება', 'morar, viver (me vtskhovrob)', 'verbo', 'Verbos-chave', '🏠', 'მე თბილისში ვცხოვრობ.'],
  ['ჭამა', 'comer (me vcham)', 'verbo', 'Verbos-chave', '🍽️', 'მე პურს და ყველს ვჭამ.'],
  ['სმა', 'beber (me vsvam)', 'verbo', 'Verbos-chave', '🥤', 'მე წყალს ვსვამ.'],
  ['მიყვარს', 'eu gosto, amo (miqvars)', 'verbo', 'Verbos-chave', '❤️', 'მე ქართული ყავა მიყვარს.'],
  // ── Pessoas (família) ──
  ['ოჯახი', 'família (ojakhi)', 'substantivo', 'Pessoas', '👪', 'ჩემი ოჯახი დიდია.'],
  ['მამა', 'pai (mama)', 'substantivo', 'Pessoas', '👨', 'ჩემი მამა ბათუმიდან არის.'],
  ['დედა', 'mãe (deda)', 'substantivo', 'Pessoas', '👩', 'ჩემი დედა მასწავლებელია.'],
  ['ძმა', 'irmão (dzma)', 'substantivo', 'Pessoas', '🧑', 'მე მყავს ერთი ძმა.'],
  ['და', 'irmã; também “e” (da)', 'substantivo', 'Pessoas', '🧑', 'ჩემი და პატარაა.'],
  ['შვილი', 'filho, filha (shvili)', 'substantivo', 'Pessoas', '🧒', 'ეს ჩემი შვილია.'],
  // ── Alimentação e Restaurantes ──
  ['წყალი', 'água (ts’q’ali)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ერთი წყალი, გთხოვთ.'],
  ['პური', 'pão (p’uri)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'პური ახალია.'],
  ['რძე', 'leite (rdze)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'რძე თეთრია.'],
  ['ყველი', 'queijo (q’veli)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'ქართული ყველი გემრიელია.'],
  ['ყავა', 'café (q’ava)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ერთი ყავა, გთხოვთ.'],
  ['ჩაი', 'chá (chai)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ყავა ან ჩაი?'],
  ['ხაჭაპური', 'khachapuri, pão recheado com queijo (khach’ap’uri)', 'substantivo', 'Alimentação e Restaurantes', '🥐', 'მე მინდა ხაჭაპური.'],
  ['ხინკალი', 'khinkali, trouxinha de massa recheada (khink’ali)', 'substantivo', 'Alimentação e Restaurantes', '🥟', 'ხინკალი ცხელია!'],
  // ── Números ──
  ['ერთი', 'um (erti)', 'numeral', 'Números', '1️⃣', 'ერთი ყავა, გთხოვთ.'],
  ['ორი', 'dois (ori)', 'numeral', 'Números', '2️⃣', 'მე მყავს ორი და.'],
  ['სამი', 'três (sami)', 'numeral', 'Números', '3️⃣', 'სამი მეგობარი.'],
  ['ოთხი', 'quatro (otkhi)', 'numeral', 'Números', '4️⃣', 'კატას ოთხი ფეხი აქვს.'],
  ['ხუთი', 'cinco (khuti)', 'numeral', 'Números', '5️⃣', 'ხუთი დღე.'],
  ['ექვსი', 'seis (ekvsi)', 'numeral', 'Números', '6️⃣', 'ექვსი საათი.'],
  ['შვიდი', 'sete (shvidi)', 'numeral', 'Números', '7️⃣', 'კვირაში შვიდი დღეა.'],
  ['რვა', 'oito (rva)', 'numeral', 'Números', '8️⃣', 'რვა საათი.'],
  ['ცხრა', 'nove (tskhra)', 'numeral', 'Números', '9️⃣', 'ცხრა წელი.'],
  ['ათი', 'dez (ati)', 'numeral', 'Números', '🔟', 'ათი ლარი.'],
  // ── Tempo ──
  ['დღეს', 'hoje (dghes)', 'advérbio', 'Tempo', '📅', 'დღეს ორშაბათია.'],
  ['ხვალ', 'amanhã (khval)', 'advérbio', 'Tempo', '📅', 'ხვალ სამშაბათია.'],
  ['გუშინ', 'ontem (gushin)', 'advérbio', 'Tempo', '📅', 'გუშინ კვირა იყო.'],
  ['ორშაბათი', 'segunda-feira (orshabati)', 'substantivo', 'Tempo', '📅', 'დღეს ორშაბათია.'],
  ['სამშაბათი', 'terça-feira (samshabati)', 'substantivo', 'Tempo', '📅', 'ხვალ სამშაბათია.'],
  ['ოთხშაბათი', 'quarta-feira (otkhshabati)', 'substantivo', 'Tempo', '📅', 'დღეს ოთხშაბათია.'],
  ['ხუთშაბათი', 'quinta-feira (khutshabati)', 'substantivo', 'Tempo', '📅', 'დღეს ხუთშაბათია.'],
  ['პარასკევი', 'sexta-feira (p’arask’evi)', 'substantivo', 'Tempo', '📅', 'დღეს პარასკევია.'],
  ['შაბათი', 'sábado (shabati)', 'substantivo', 'Tempo', '📅', 'დღეს შაბათია.'],
  ['კვირა', 'domingo (k’vira)', 'substantivo', 'Tempo', '📅', 'კვირა ოჯახის დღეა.'],
  // ── Cores ──
  ['თეთრი', 'branco (tetri)', 'adjetivo', 'Cores', '⚪', 'რძე თეთრია.'],
  ['შავი', 'preto (shavi)', 'adjetivo', 'Cores', '⚫', 'კატა შავია.'],
  ['წითელი', 'vermelho (ts’iteli)', 'adjetivo', 'Cores', '🔴', 'ღვინო წითელია.'],
  ['მწვანე', 'verde (mts’vane)', 'adjetivo', 'Cores', '🟢', 'ბალახი მწვანეა.'],
  ['ლურჯი', 'azul (lurji)', 'adjetivo', 'Cores', '🔵', 'ცა ლურჯია.'],
  ['ყვითელი', 'amarelo (q’viteli)', 'adjetivo', 'Cores', '🟡', 'მზე ყვითელია.'],
  // ── ამინდი: clima (A2) ──
  ['ამინდი', 'clima, tempo (amindi)', 'substantivo', 'Clima', '🌦️', 'დღეს ამინდი კარგია.'],
  ['წვიმა', 'chuva (ts’vima)', 'substantivo', 'Clima', '🌧️', 'დღეს წვიმს.'],
  ['სიცხე', 'calor (sitskhe)', 'substantivo', 'Clima', '☀️', 'დღეს დიდი სიცხეა.'],
  ['სიცივე', 'frio (sitsive)', 'substantivo', 'Clima', '❄️', 'ზამთარში სიცივეა.'],
  ['ქარი', 'vento (kari)', 'substantivo', 'Clima', '💨', 'დღეს ქარი ქრის.'],
  ['ღრუბელი', 'nuvem (ghrubeli)', 'substantivo', 'Clima', '☁️', 'ცაზე ღრუბლები არის.'],
  // ── ტანსაცმელი: roupas (A2) ──
  ['ტანსაცმელი', 'roupa (tansatsmeli)', 'substantivo', 'Roupas', '👕', 'ჩემი ტანსაცმელი ახალია.'],
  ['პერანგი', 'camisa (perangi)', 'substantivo', 'Roupas', '👔', 'ეს პერანგი ლურჯია.'],
  ['შარვალი', 'calça (sharvali)', 'substantivo', 'Roupas', '👖', 'ჩემი შარვალი შავია.'],
  ['ფეხსაცმელი', 'sapato (pekhsatsmeli)', 'substantivo', 'Roupas', '👟', 'ჩემი ფეხსაცმელი ახალია.'],
  ['ქუდი', 'chapéu, boné (kudi)', 'substantivo', 'Roupas', '🧢', 'მისი ქუდი წითელია.'],
  // ── სხეული: corpo (A2) ──
  ['თავი', 'cabeça (tavi)', 'substantivo', 'Corpo', '🙂', 'ჩემი თავი ტკივა.'],
  ['თვალი', 'olho (tvali)', 'substantivo', 'Corpo', '👁️', 'მისი თვალები დიდია.'],
  ['ყური', 'ouvido, orelha (quri)', 'substantivo', 'Corpo', '👂', 'ჩემი ყური ტკივა.'],
  ['ცხვირი', 'nariz (tskhviri)', 'substantivo', 'Corpo', '👃', 'მისი ცხვირი პატარაა.'],
  ['ხელი', 'mão, braço (kheli)', 'substantivo', 'Corpo', '✋', 'ხელი მომეცი.'],
  ['ფეხი', 'pé, perna (pekhi)', 'substantivo', 'Corpo', '🦶', 'ჩემი ფეხი ტკივა.'],
  ['პირი', 'boca (piri)', 'substantivo', 'Corpo', '👄', 'პირი გააღე.'],
  // ── ქალაქი: cidade (A2) ──
  ['ბაზარი', 'mercado (bazari)', 'substantivo', 'Cidade', '🏪', 'ჩვენ ბაზარში მივდივართ.'],
  ['მაღაზია', 'loja (maghazia)', 'substantivo', 'Cidade', '🏬', 'ეს მაღაზია დიდია.'],
  ['ქუჩა', 'rua (kucha)', 'substantivo', 'Cidade', '🛣️', 'ეს ქუჩა გრძელია.'],
  ['საავადმყოფო', 'hospital (saavadmqopo)', 'substantivo', 'Cidade', '🏥', 'საავადმყოფო ახლოსაა.'],
  ['სკოლა', 'escola (skola)', 'substantivo', 'Cidade', '🏫', 'ჩემი შვილი სკოლაში დაა.'],
  // ── პროფესია: profissões (A2) ──
  ['ექიმი', 'médico(a) (ekimi)', 'substantivo', 'Profissões', '🩺', 'ის ექიმია.'],
  ['მასწავლებელი', 'professor(a) (mastsavlebeli)', 'substantivo', 'Profissões', '🍎', 'ჩემი დედა მასწავლებელია.'],
  ['ინჟინერი', 'engenheiro(a) (inzhineri)', 'substantivo', 'Profissões', '👷', 'ჩემი ძმა ინჟინერია.'],
  ['გლეხი', 'agricultor(a), camponês(a) (glekhi)', 'substantivo', 'Profissões', '🌾', 'ის გლეხია.'],
  // ── გრძნობები: sentimentos (A2) ──
  ['ბედნიერი', 'feliz (bednieri)', 'adjetivo', 'Sentimentos', '😊', 'მე ბედნიერი ვარ.'],
  ['ნაღვლიანი', 'triste (naghvliani)', 'adjetivo', 'Sentimentos', '😢', 'ის დღეს ნაღვლიანია.'],
  ['გაბრაზებული', 'bravo, com raiva (gabrazebuli)', 'adjetivo', 'Sentimentos', '😠', 'ის ჩემზე გაბრაზებულია.'],
  ['შიში', 'medo (shishi — მეშინია, tenho medo, no mesmo padrão de მინდა/მიყვარს)', 'substantivo', 'Sentimentos', '😨', 'ძაღლის მეშინია.'],
  ['დაღლილი', 'cansado (daghlili)', 'adjetivo', 'Sentimentos', '😴', 'მე ძალიან დაღლილი ვარ.'],
  // ── Verbos-chave (mais, A2) ──
  ['ყიდვა', 'comprar (me vqidulob)', 'verbo', 'Verbos-chave', '🛍️', 'მე ტანსაცმელს ვყიდულობ.'],
  ['თამაში', 'jogar, brincar (me vtamashob)', 'verbo', 'Verbos-chave', '⚽', 'ბავშვები თამაშობენ.'],
  ['ხედვა', 'ver (me vkhedav)', 'verbo', 'Verbos-chave', '👀', 'მე ვხედავ.'],
  ['მუშაობა', 'trabalhar (me vmushaob)', 'verbo', 'Verbos-chave', '💼', 'მე თბილისში ვმუშაობ.'],
  ['გაგება', 'entender (me mesmis, no mesmo padrão de მინდა/მიყვარს)', 'verbo', 'Verbos-chave', '🧠', 'მე ქართული მესმის.'],
  // ── რიცხვები: números (20-100, sistema vigesimal) ──
  ['ოცი', 'vinte (otsi)', 'numeral', 'Números', '2️⃣0️⃣', 'მე ოცი წლის ვარ.'],
  ['ოცდაათი', 'trinta, lit. “vinte e dez” (otsdaati, 20+10)', 'numeral', 'Números', '3️⃣0️⃣', 'ოცდაათი დღე.'],
  ['ორმოცი', 'quarenta, lit. “duas vintenas” (ormotsi, 2×20)', 'numeral', 'Números', '4️⃣0️⃣', 'ორმოცი ლარი.'],
  ['ორმოცდაათი', 'cinquenta, lit. “duas vintenas e dez” (ormotsdaati, 2×20+10)', 'numeral', 'Números', '5️⃣0️⃣', 'ეს ორმოცდაათი ლარია.'],
  ['სამოცი', 'sessenta, lit. “três vintenas” (samotsi, 3×20)', 'numeral', 'Números', '6️⃣0️⃣', 'სამოცი წუთი ერთ საათშია.'],
  ['სამოცდაათი', 'setenta, lit. “três vintenas e dez” (samotsdaati, 3×20+10)', 'numeral', 'Números', '7️⃣0️⃣', 'ის სამოცდაათი წლის არის.'],
  ['ოთხმოცი', 'oitenta, lit. “quatro vintenas” (otkhmotsi, 4×20)', 'numeral', 'Números', '8️⃣0️⃣', 'ოთხმოცი ლარი.'],
  ['ოთხმოცდაათი', 'noventa, lit. “quatro vintenas e dez” (otkhmotsdaati, 4×20+10)', 'numeral', 'Números', '9️⃣0️⃣', 'ოთხმოცდაათი ლარი.'],
  ['ასი', 'cem (asi)', 'numeral', 'Números', '💯', 'ერთ საუკუნეში ასი წელია.'],
];

export const VOCAB_KA = buildVocab('ka', ROWS);
