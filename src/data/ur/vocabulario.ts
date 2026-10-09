import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do urdu padrão (اردو), língua nacional do Paquistão e um dos idiomas do Oitavo Anexo
 * da Constituição indiana. Cada palavra foi conferida no Wiktionary em inglês (edição em urdu,
 * ‘en.wiktionary.org/wiki/<palavra>’) e, para as saudações e os numerais, no Wikivoyage
 * (‘en.wikivoyage.org/wiki/Urdu_phrasebook’) — fontes citadas palavra por palavra abaixo quando
 * valem a pena destacar. Escrita da direita pra esquerda (alfabeto perso-árabe, caligrafia
 * Nastaliq) — ver `direction: 'rtl'` em index.ts e `src/services/direction.ts`.
 *
 * Urdu e hindi são, na fala do dia a dia, a mesma língua (o “hindustani”): muitas palavras daqui
 * — میں (ma͠i, eu), ہم (ham, nós), نام (nām, nome), پانی (pānī, água) — são idênticas em som e
 * origem às palavras hindis मैं, हम, नाम, पानी, só escritas num alfabeto diferente. A diferença
 * aparece no vocabulário mais formal: o urdu busca palavras no persa e no árabe (زبان zabān,
 * دوست dost, شکریہ shukriya, خاندان xāndān), enquanto o hindi busca no sânscrito para o mesmo
 * registro — ver a nota completa, com fonte, em `cognateNote` (index.ts).
 *
 * Idioma incompleto: por enquanto só o suficiente até o nível A2.2 (unidades 1 a 4) — ver o campo
 * `incomplete` do pacote. Ainda sem romanização (`reading`): fica para uma entrega futura.
 *
 * Leva A2.1/A2.2 (clima, roupas, corpo, cidade, profissões, sentimentos, mais verbos, números
 * 20-100): cada palavra nova conferida também no Wiktionary em inglês (en.wiktionary.org),
 * verbete por verbete — gênero confirmado pelo mesmo verbete (quando listado) ou pelo cognato
 * hindi equivalente, já que urdu e hindi compartilham o gênero gramatical de cada palavra
 * (Wikipédia, “Hindustani grammar”); os números das dezenas (بیس…سو), no Omniglot
 * (omniglot.com/language/numbers/urdu.htm) e no UrduPod101 (“Basic Bootcamp 4”).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ── (saudações conferidas em en.wikivoyage.org/wiki/Urdu_phrasebook)
  ['السلام علیکم', 'oi, olá (saudação islâmica “as-salāmu ʿalaikum”, lit. “que a paz esteja com você”)', 'interjeição', 'Expressões', '👋', 'السلام علیکم! آپ کا کیا حال ہے؟'],
  ['خدا حافظ', 'tchau, até logo (khudā hāfiz, lit. “que Deus seja o guardião”)', 'interjeição', 'Expressões', '👋', 'بہت شکریہ اور خدا حافظ!'],
  ['صبح بخیر', 'bom dia (ṣubḥ bakhair)', 'interjeição', 'Expressões', '🌅', 'صبح بخیر، امی!'],
  ['شکریہ', 'obrigado (shukriya)', 'interjeição', 'Expressões', '🙏', 'بہت شکریہ!'],
  ['برائے مہربانی', 'por favor (barāe mehrbānī)', 'interjeição', 'Expressões', '🙏', 'ایک پانی، برائے مہربانی۔'],
  ['آپ کا کیا حال ہے؟', 'como vai? (formal; āp kā kyā hāl hai?)', 'expressão', 'Expressões', '🙂', 'السلام علیکم! آپ کا کیا حال ہے؟'],
  // ── Essenciais ──
  ['ہاں', 'sim (hā̃)', 'advérbio', 'Essenciais', '👍', 'ہاں، شکریہ۔'],
  ['نہیں', 'não (nahī̃)', 'advérbio', 'Essenciais', '👎', 'نہیں، شکریہ۔'],
  ['اور', 'e (aur)', 'conjunção', 'Essenciais', null, 'روٹی اور پنیر۔'],
  ['یا', 'ou (yā)', 'conjunção', 'Essenciais', null, 'چائے یا پانی؟'],
  ['کیا', 'o que, que (kyā)', 'pronome', 'Essenciais', '❓', 'آپ کا کیا نام ہے؟'],
  ['کہاں', 'onde (kahā̃)', 'advérbio', 'Essenciais', '❓', 'تم کہاں ہو؟'],
  ['زبان', 'língua, idioma; também “língua” (o órgão da boca) (zabān)', 'substantivo', 'Essenciais', '🗣️', 'اردو ایک زبان ہے۔', 'f'],
  // ── Pessoas ──
  ['میں', 'eu (ma͠i)', 'pronome', 'Pessoas', '🙋', 'میں پاکستان سے ہوں۔'],
  ['تم', 'tu, você (informal) (tum)', 'pronome', 'Pessoas', '🫵', 'تم میرے دوست ہو۔'],
  ['آپ', 'você, o(a) senhor(a) (formal) (āp)', 'pronome', 'Pessoas', '🙇', 'آپ گھر میں ہیں۔'],
  ['وہ', 'ele, ela (vo)', 'pronome', 'Pessoas', '👤', 'وہ گھر میں ہے۔'],
  ['ہم', 'nós (ham)', 'pronome', 'Pessoas', '🙌', 'ہم دوست ہیں۔'],
  ['نام', 'nome (nām)', 'substantivo', 'Pessoas', '🏷️', 'آپ کا کیا نام ہے؟', 'm'],
  ['دوست', 'amigo, amiga (dost — vale para os dois gêneros)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'وہ میرا دوست ہے۔'],
  ['خاندان', 'família (xāndān)', 'substantivo', 'Pessoas', '👪', 'میرا خاندان بڑا ہے۔', 'm'],
  ['امی', 'mãe, mamãe (afetuoso; ammī)', 'substantivo', 'Pessoas', '👩', 'امی گھر میں ہے۔', 'f'],
  ['ابو', 'pai, papai (afetuoso; abbū)', 'substantivo', 'Pessoas', '👨', 'ابو گھر میں ہے۔', 'm'],
  ['بھائی', 'irmão (bhāī)', 'substantivo', 'Pessoas', '🧑', 'میرا ایک بھائی ہے۔', 'm'],
  ['بہن', 'irmã (bahan)', 'substantivo', 'Pessoas', '🧑', 'میری ایک بہن ہے۔', 'f'],
  // ── Verbos-chave ──
  ['ہونا', 'ser, estar (honā: میں ہوں، تم ہو، آپ/وہ ہے یا ہیں)', 'verbo', 'Verbos-chave', '🧑', 'میں پاکستان سے ہوں۔'],
  ['کے پاس', 'ter; perto (ke pās — lit. “estar perto de”: میرے پاس … ہے = eu tenho …)', 'expressão', 'Verbos-chave', '🤲', 'میرے پاس ایک گھر ہے۔'],
  ['بولنا', 'falar (bolnā)', 'verbo', 'Verbos-chave', '🗣️', 'میں اردو بولتا ہوں۔'],
  ['چاہنا', 'querer (chāhnā)', 'verbo', 'Verbos-chave', '💭', 'میں چائے چاہتا ہوں۔'],
  ['جاننا', 'saber (jānnā)', 'verbo', 'Verbos-chave', '🧠', 'وہ یہ جانتا ہے۔'],
  ['جانا', 'ir (jānā)', 'verbo', 'Verbos-chave', '🚶', 'میں گھر جاتا ہوں۔'],
  ['رہنا', 'morar, viver (rêhnā)', 'verbo', 'Verbos-chave', '🏠', 'میں گھر میں رہتا ہوں۔'],
  ['کھانا', 'comer (khānā); também “comida” como substantivo', 'verbo', 'Verbos-chave', '🍽️', 'میں روٹی اور پنیر کھاتا ہوں۔'],
  ['پینا', 'beber (pīnā)', 'verbo', 'Verbos-chave', '🥤', 'میں پانی پیتا ہوں۔'],
  ['پسند', 'gostar (de) (pasand honā — مجھے … پسند ہے = eu gosto de …)', 'expressão', 'Verbos-chave', '❤️', 'مجھے چائے پسند ہے۔'],
  // ── Alimentação e Restaurantes ──
  ['پانی', 'água (pānī)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ایک پانی، برائے مہربانی۔', 'm'],
  ['روٹی', 'pão, chapati (roṭī)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'روٹی اچھی ہے۔', 'f'],
  ['دودھ', 'leite (dūdh)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'دودھ سفید ہے۔', 'm'],
  ['پنیر', 'queijo (panīr)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'پنیر اچھا ہے۔', 'm'],
  ['چائے', 'chá (cāe)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'مجھے چائے پسند ہے۔', 'f'],
  ['سیب', 'maçã (seb)', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'سیب لال ہے۔', 'm'],
  // ── Corpo ──
  ['آنکھ', 'olho (ā̃kh)', 'substantivo', 'Corpo', '👁️', 'بلی کی آنکھ نیلی ہے۔', 'f'],
  ['ہاتھ', 'mão (hāth)', 'substantivo', 'Corpo', '✋', 'میرا ہاتھ بڑا ہے۔', 'm'],
  // ── Natureza ──
  ['آسمان', 'céu (āsmān)', 'substantivo', 'Natureza', '☁️', 'آسمان نیلا ہے۔', 'm'],
  ['سورج', 'sol (sūraj)', 'substantivo', 'Natureza', '☀️', 'سورج پیلا ہے۔', 'm'],
  ['گھاس', 'grama, capim (ghās)', 'substantivo', 'Natureza', '🌿', 'گھاس ہری ہے۔', 'f'],
  // ── Animais ──
  ['کتا', 'cachorro (kuttā)', 'substantivo', 'Animais', '🐕', 'کتا کالا ہے۔', 'm'],
  ['بلی', 'gato, gata (billī)', 'substantivo', 'Animais', '🐈', 'بلی کالی ہے۔', 'f'],
  // ── Casa ──
  ['گھر', 'casa (ghar)', 'substantivo', 'Casa', '🏠', 'میرا گھر چھوٹا ہے۔', 'm'],
  // ── Números ──
  ['ایک', 'um (ek)', 'numeral', 'Números', '1️⃣', 'ایک پانی، برائے مہربانی۔'],
  ['دو', 'dois (do)', 'numeral', 'Números', '2️⃣', 'میرے دو بھائی ہیں۔'],
  ['تین', 'três (tīn)', 'numeral', 'Números', '3️⃣', 'تین دوست۔'],
  ['چار', 'quatro (chār)', 'numeral', 'Números', '4️⃣', 'چار گھر۔'],
  ['پانچ', 'cinco (pāṅch)', 'numeral', 'Números', '5️⃣', 'پانچ بھائی۔'],
  ['چھ', 'seis (chhe)', 'numeral', 'Números', '6️⃣', 'چھ دوست۔'],
  ['سات', 'sete (sāt)', 'numeral', 'Números', '7️⃣', 'سات گھر۔'],
  ['آٹھ', 'oito (āṭh)', 'numeral', 'Números', '8️⃣', 'آٹھ دوست۔'],
  ['نو', 'nove (nau)', 'numeral', 'Números', '9️⃣', 'نو بھائی۔'],
  ['دس', 'dez (das)', 'numeral', 'Números', '🔟', 'دس گھر۔'],
  // ── Descrições ──
  ['اچھا', 'bom (acchā, fem. acchī)', 'adjetivo', 'Descrições', '👌', 'یہ کھانا اچھا ہے۔'],
  ['بڑا', 'grande (baṛā, fem. baṛī)', 'adjetivo', 'Descrições', '📏', 'میرا خاندان بڑا ہے۔'],
  ['چھوٹا', 'pequeno (choṭā, fem. choṭī)', 'adjetivo', 'Descrições', '📏', 'میرا گھر چھوٹا ہے۔'],
  // ── Cores ──
  ['کالا', 'preto (kālā, fem. kālī)', 'adjetivo', 'Cores', '⚫', 'کتا کالا ہے۔'],
  ['سفید', 'branco (safed, invariável)', 'adjetivo', 'Cores', '⚪', 'دودھ سفید ہے۔'],
  ['لال', 'vermelho (lāl, invariável)', 'adjetivo', 'Cores', '🔴', 'سیب لال ہے۔'],
  ['نیلا', 'azul (nīlā, fem. nīlī)', 'adjetivo', 'Cores', '🔵', 'آسمان نیلا ہے۔'],
  ['ہرا', 'verde (harā, fem. harī)', 'adjetivo', 'Cores', '🟢', 'گھاس ہری ہے۔'],
  ['پیلا', 'amarelo (pīlā, fem. pīlī)', 'adjetivo', 'Cores', '🟡', 'سورج پیلا ہے۔'],
  // ── Clima ──
  ['موسم', 'tempo, clima, estação (mausam)', 'substantivo', 'Clima', '🌡️', 'موسم اچھا ہے۔', 'm'],
  ['گرم', 'quente (garm)', 'adjetivo', 'Clima', '🥵', 'چائے گرم ہے۔'],
  ['ٹھنڈا', 'frio (ṭhanḍā, fem. ṭhanḍī)', 'adjetivo', 'Clima', '🥶', 'پانی ٹھنڈا ہے۔'],
  ['بارش', 'chuva (bārish)', 'substantivo', 'Clima', '🌧️', 'بارش بڑی ہے۔', 'f'],
  ['برف', 'neve (barf)', 'substantivo', 'Clima', '❄️', 'برف سفید ہے۔', 'f'],
  ['ہوا', 'vento, ar (havā)', 'substantivo', 'Clima', '💨', 'ہوا بڑی ہے۔', 'f'],
  // ── Roupas ──
  ['کپڑے', 'roupa, roupas (kapṛe, plural de kapṛā)', 'substantivo', 'Roupas', '👕', 'میرے کپڑے نیلے ہیں۔', 'm'],
  ['قمیض', 'camisa (qamīz)', 'substantivo', 'Roupas', '👔', 'قمیض لال ہے۔', 'f'],
  ['جوتا', 'sapato (jūtā)', 'substantivo', 'Roupas', '👞', 'جوتا بڑا ہے۔', 'm'],
  ['ٹوپی', 'chapéu, boné (ṭopī)', 'substantivo', 'Roupas', '🧢', 'ٹوپی کالی ہے۔', 'f'],
  // ── Corpo (mais palavras) ──
  ['منہ', 'boca (mu̐h)', 'substantivo', 'Corpo', '👄', 'میرا منہ چھوٹا ہے۔', 'm'],
  ['ناک', 'nariz (nāk)', 'substantivo', 'Corpo', '👃', 'میری ناک چھوٹی ہے۔', 'f'],
  ['کان', 'orelha (kān)', 'substantivo', 'Corpo', '👂', 'میرا کان چھوٹا ہے۔', 'm'],
  // ── Cidade e lugares ──
  ['شہر', 'cidade (shahar)', 'substantivo', 'Cidade e lugares', '🏙️', 'یہ شہر بڑا ہے۔', 'm'],
  ['سڑک', 'rua, estrada (saṛak)', 'substantivo', 'Cidade e lugares', '🛣️', 'سڑک بڑی ہے۔', 'f'],
  ['اسکول', 'escola (iskūl)', 'substantivo', 'Cidade e lugares', '🏫', 'اسکول بڑا ہے۔', 'm'],
  ['ہسپتال', 'hospital (haspatāl)', 'substantivo', 'Cidade e lugares', '🏥', 'ہسپتال بڑا ہے۔', 'm'],
  // ── Profissões ──
  ['ڈاکٹر', 'médico(a) (ḍākṭar — vale para os dois gêneros)', 'substantivo', 'Profissões', '🩺', 'وہ ڈاکٹر ہے۔', 'm'],
  ['استاد', 'professor(a) (ustād, fem. ustānī)', 'substantivo', 'Profissões', '🍎', 'وہ استاد ہے۔', 'm'],
  ['انجینئر', 'engenheiro(a) (injīniyar)', 'substantivo', 'Profissões', '👷', 'وہ انجینئر ہے۔', 'm'],
  ['طالب علم', 'estudante (ṭālib-e ilm, lit. “buscador de conhecimento”; fem. طالبہ)', 'substantivo', 'Profissões', '🎓', 'وہ طالب علم ہے۔', 'm'],
  // ── Sentimentos ──
  ['خوش', 'feliz (khush, invariável)', 'adjetivo', 'Sentimentos', '😄', 'میں خوش ہوں۔'],
  ['اداس', 'triste (udās, invariável)', 'adjetivo', 'Sentimentos', '😢', 'وہ اداس ہے۔'],
  ['پریشان', 'preocupado (pareshān, invariável)', 'adjetivo', 'Sentimentos', '😟', 'میں پریشان ہوں۔'],
  ['خوفزدہ', 'com medo, assustado (khaufzadā, invariável)', 'adjetivo', 'Sentimentos', '😨', 'وہ خوفزدہ ہے۔'],
  ['تھکا ہوا', 'cansado (thakā huā, fem. thakī huī)', 'adjetivo', 'Sentimentos', '😪', 'میں تھکا ہوا ہوں۔'],
  // ── Mais verbos-chave ──
  ['لکھنا', 'escrever (likhnā)', 'verbo', 'Verbos-chave', '✍️', 'میں ایک خط لکھتا ہوں۔'],
  ['پڑھنا', 'ler; estudar (paṛhnā)', 'verbo', 'Verbos-chave', '📖', 'میں ایک کتاب پڑھتا ہوں۔'],
  ['دیکھنا', 'ver (dekhnā)', 'verbo', 'Verbos-chave', '👀', 'میں تمہیں دیکھتا ہوں۔'],
  ['خریدنا', 'comprar (kharīdnā)', 'verbo', 'Verbos-chave', '🛍️', 'میں روٹی خریدتا ہوں۔'],
  ['دینا', 'dar (denā)', 'verbo', 'Verbos-chave', '🤲', 'میں پانی دیتا ہوں۔'],
  ['کھیلنا', 'brincar, jogar (khelnā)', 'verbo', 'Verbos-chave', '⚽', 'میں کھیلتا ہوں۔'],
  // ── Números (20-100) ──
  ['بیس', 'vinte (bīs)', 'numeral', 'Números', '🔢', 'بیس کتابیں۔'],
  ['تیس', 'trinta (tīs)', 'numeral', 'Números', '🔢', 'تیس کتابیں۔'],
  ['چالیس', 'quarenta (chālīs)', 'numeral', 'Números', '🔢', 'چالیس کتابیں۔'],
  ['پچاس', 'cinquenta (pachās)', 'numeral', 'Números', '🔢', 'پچاس کتابیں۔'],
  ['ساٹھ', 'sessenta (sāṭh)', 'numeral', 'Números', '🔢', 'ساٹھ کتابیں۔'],
  ['ستر', 'setenta (sattar)', 'numeral', 'Números', '🔢', 'ستر کتابیں۔'],
  ['اسی', 'oitenta (assī)', 'numeral', 'Números', '🔢', 'اسی کتابیں۔'],
  ['نوے', 'noventa (nave)', 'numeral', 'Números', '🔢', 'نوے کتابیں۔'],
  ['سو', 'cem (sau)', 'numeral', 'Números', '🔢', 'سو کتابیں۔'],
];

export const VOCAB_UR = buildVocab('ur', ROWS);
