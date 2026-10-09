import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do turco (Türkiye Türkçesi, padrão de Istambul). Idioma incompleto: cobre A1.1,
 * A1.2, A2.1 e A2.2 — ver o campo `incomplete` em index.ts.
 *
 * Fontes das palavras novas do A2.1/A2.2 (pesquisadas em 09/10/2026), todas no Wikcionário em
 * inglês (en.wiktionary.org), verbete por verbete, salvo indicação contrária:
 * - Clima: güneş (sol), yağmur (chuva), rüzgâr (vento), sıcak (quente/calor, antônimo de soğuk,
 *   já no pacote desde o A1), soğuk (frio, já no pacote).
 * - Roupas: gömlek (camisa), pantolon (calça), ayakkabı (sapato), palto (casaco/sobretudo —
 *   diferente de "ceket", que é jaqueta/paletó curto, não usado aqui para não confundir).
 * - Corpo: baş (cabeça; sinônimo coloquial "kafa"), el (mão, confirmado em tr.wiktionary.org/
 *   wiki/el — "a parte do braço do pulso até a ponta dos dedos"), göz (olho), ağız (boca), bacak
 *   (perna).
 * - Lugares: okul (escola), hastane (hospital, lit. "casa do doente"), mağaza (loja/armazém —
 *   preferida a "dükkân", que o Wikcionário marca como errado sem o acento circunflexo), sokak
 *   (rua), restoran (já no pacote).
 * - Profissões: doktor (médico), öğrenci (estudante, de öğrenmek "aprender" + -ci), aşçı
 *   (cozinheiro).
 * - Sentimentos: mutlu (feliz), üzgün (triste), yorgun (cansado), aç (com fome).
 * - Números: otuz (30), elli (50), yüz (100; também significa "rosto", outra palavra homônima,
 *   não usada neste sentido aqui) — yirmi (20) já estava no pacote.
 */
export const ROWS: VocabRow[] = [
  ['merhaba', 'oi', 'interjeição', 'Expressões', '👋', 'Merhaba! Nasılsın?'],
  ['günaydın', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Herkese günaydın!'],
  ['iyi günler', 'boa tarde; tenha um bom dia (durante o dia)', 'interjeição', 'Expressões', '🌇', 'İyi günler, Ayşe Hanım!'],
  ['iyi geceler', 'boa noite', 'interjeição', 'Expressões', '🌙', 'İyi geceler, iyi uykular!'],
  ['hoşça kal', 'tchau', 'interjeição', 'Expressões', '👋', 'Hoşça kal, görüşürüz!'],
  ['teşekkür ederim', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Yardımın için teşekkür ederim!'],
  ['rica ederim', 'de nada', 'interjeição', 'Expressões', '🙏', '— Teşekkürler! — Rica ederim!'],
  ['lütfen', 'por favor', 'interjeição', 'Expressões', '🙏', 'Bir kahve, lütfen.'],
  ['özür dilerim', 'desculpa', 'interjeição', 'Expressões', '🙏', 'Özür dilerim, seni görmedim!'],
  ['evet', 'sim', 'advérbio', 'Essenciais', '👍', 'Evet, tabii ki.'],
  ['hayır', 'não', 'advérbio', 'Essenciais', '👎', 'Hayır, teşekkürler.'],
  ['ve', 'e', 'conjunção', 'Essenciais', null, 'Ekmek ve kahve.'],
  ['veya', 'ou', 'conjunção', 'Essenciais', null, 'Çay veya kahve?'],
  ['çok', 'muito (advérbio)', 'advérbio', 'Essenciais', null, 'Çok iyiyim.'],
  ['de', 'também', 'advérbio', 'Essenciais', null, 'Ben de Türkçe konuşuyorum.'],
  ['ben', 'eu', 'pronome', 'Pessoas', '🙋', "Ben São Paulo'luyum."],
  ['sen', 'você', 'pronome', 'Pessoas', '🫵', 'Ya sen, nerelisin?'],
  ['o', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'O İstanbul\'dan.'],
  ['biz', 'nós', 'pronome', 'Pessoas', '🙌', "Biz Recife'den geliyoruz."],
  ['onlar', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Onlar Ankara\'dan.'],
  ['olmak', 'ser, tornar-se (no presente, “ser” vira um sufixo: iyiyim = estou bem)', 'verbo', 'Verbos-chave', '🧑', 'Doktor olmak istiyorum.'],
  ['var', 'há, existe (“kardeşim var” = eu tenho irmão)', 'partícula', 'Verbos-chave', '🤲', 'İki kardeşim var.'],
  ['yok', 'não há, não existe (“kedim yok” = eu não tenho gato)', 'partícula', 'Verbos-chave', '🚫', 'Kedim yok.'],
  ['öğrenmek', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Türkçe öğreniyorum.'],
  ['yaşamak', 'morar', 'verbo', 'Verbos-chave', '🏠', 'İstanbul\'da yaşıyorum.'],
  ['konuşmak', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Biraz Türkçe konuşuyorum.'],
  ['gitmek', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Plaja gidiyorum.'],
  ['yemek', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Kahvaltı yiyorum.'],
  ['içmek', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Su içiyorum.'],
  ['sevmek', 'gostar', 'verbo', 'Verbos-chave', '❤️', 'Kahveyi seviyorum.'],
  ['bilmek', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Fransızca bilmiyorum.'],
  ['istemek', 'querer', 'verbo', 'Verbos-chave', '💭', 'Türkçe öğrenmek istiyorum.'],
  ['gelmek', 'vir (geliyorum, geldim, geleceğim)', 'verbo', 'Verbos-chave', '🔜', 'Yarın geleceğim.'],
  ['ad', 'nome (adım = meu nome; também se diz “isim”)', 'substantivo', 'Pessoas', '🏷️', 'Adın ne?'],
  ['arkadaş', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'O benim arkadaşım.'],
  ['aile', 'família', 'substantivo', 'Pessoas', '👪', 'Ailem çok kalabalık.'],
  ['anne', 'mãe', 'substantivo', 'Pessoas', '👩', 'Annemin adı Ayşe.'],
  ['baba', 'pai', 'substantivo', 'Pessoas', '👨', 'Babam İzmir\'den.'],
  ['erkek kardeş', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Bir erkek kardeşim var.'],
  ['kız kardeş', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Bir kız kardeşim var.'],
  ['oğul', 'filho', 'substantivo', 'Pessoas', '🧒', 'Oğlum on yaşında.'],
  ['kız', 'filha', 'substantivo', 'Pessoas', '🧒', 'Kızım küçük.'],
  ['ev', 'casa', 'substantivo', 'Essenciais', '🏠', 'Evim küçük.'],
  ['şehir', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'İstanbul büyük bir şehir.'],
  ['su', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Bir bardak su, lütfen.'],
  ['ekmek', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Ekmek almamız lazım.'],
  ['süt', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Bir bardak süt istiyorum.'],
  ['kahve', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Sütlü bir kahve, lütfen.'],
  ['şarap', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Bir kadeh kırmızı şarap, lütfen.'],
  ['köpek', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Köpeğimin adı Karabaş.'],
  ['kedi', 'gato', 'substantivo', 'Essenciais', '🐈', 'Kedi çok uyuyor.'],
  ['iyi', 'bom', 'adjetivo', 'Essenciais', '👍', 'Bu şarap çok iyi.'],
  ['büyük', 'grande', 'adjetivo', 'Essenciais', '📏', 'Ev büyük.'],
  ['küçük', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Kedi küçük.'],
  ['bugün', 'hoje', 'advérbio', 'Essenciais', '📅', 'Bugün güneşli.'],
  ['yarın', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Yarın görüşürüz!'],
  ['dün', 'ontem', 'advérbio', 'Essenciais', '📅', 'Dün çok yağmur yağdı.'],
  ['bir', 'um', 'numeral', 'Números', '1️⃣', 'Bir kahve, lütfen.'],
  ['iki', 'dois', 'numeral', 'Números', '2️⃣', 'İki kahve, lütfen.'],
  ['üç', 'três', 'numeral', 'Números', '3️⃣', 'Üç kardeş.'],
  ['dört', 'quatro', 'numeral', 'Números', '4️⃣', 'Dört mevsim.'],
  ['beş', 'cinco', 'numeral', 'Números', '5️⃣', 'Beş lira.'],
  ['altı', 'seis', 'numeral', 'Números', '6️⃣', 'Sabah altıda.'],
  ['yedi', 'sete', 'numeral', 'Números', '7️⃣', 'Yedi gün.'],
  ['sekiz', 'oito', 'numeral', 'Números', '8️⃣', 'Saat sekizde.'],
  ['dokuz', 'nove', 'numeral', 'Números', '9️⃣', 'Dokuz ay.'],
  ['on', 'dez', 'numeral', 'Números', '🔟', 'On lira.'],
  ['yirmi', 'vinte', 'numeral', 'Números', '🔢', 'Yirmi yaşındayım.'],
  ['pazartesi', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Pazartesi haftanın başlangıcı.'],
  ['salı', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Salı günü dersim var.'],
  ['çarşamba', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Çarşamba haftanın ortası.'],
  ['perşembe', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Perşembe günü pazara gidiyoruz.'],
  ['cuma', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Cuma günü arkadaşlarla çıkıyoruz.'],
  ['cumartesi', 'sábado', 'substantivo', 'Tempo', '📅', 'Cumartesi çalışmıyorum.'],
  ['pazar', 'domingo', 'substantivo', 'Tempo', '📅', 'Pazar günü büyükannemde yemek yiyoruz.'],
  ['kırmızı', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Şarap kırmızı.'],
  ['mavi', 'azul', 'adjetivo', 'Cores', '🔵', 'Deniz mavi.'],
  ['yeşil', 'verde', 'adjetivo', 'Cores', '🟢', 'Çimen yeşil.'],
  ['beyaz', 'branco', 'adjetivo', 'Cores', '⚪', 'Ekmek içi beyaz.'],
  ['siyah', 'preto', 'adjetivo', 'Cores', '⚫', 'Kahve siyah.'],
  ['nerede', 'onde', 'pronome', 'Essenciais', '❓', 'Nerede yaşıyorsun?'],
  ['ne', 'o que', 'pronome', 'Essenciais', '❓', 'Bu ne?'],
  ['nasıl', 'como', 'advérbio', 'Essenciais', '❓', 'Nasılsın?'],
  ['nereli', 'de onde', 'advérbio', 'Essenciais', '❓', 'Nerelisin?'],

  // ════════ A2.1 e A2.2 (sessão de 09/10/2026) ════════
  // ── Clima ──
  ['güneş', 'sol', 'substantivo', 'Clima', '☀️', 'Bugün güneş var.'],
  ['yağmur', 'chuva', 'substantivo', 'Clima', '🌧️', 'Dışarıda yağmur var.'],
  ['rüzgâr', 'vento', 'substantivo', 'Clima', '💨', 'Bugün rüzgâr var.'],
  // ── Roupas ──
  ['gömlek', 'camisa', 'substantivo', 'Roupas', '👔', 'Gömleğim beyaz.'],
  ['pantolon', 'calça', 'substantivo', 'Roupas', '👖', 'Pantolonum siyah.'],
  ['ayakkabı', 'sapato', 'substantivo', 'Roupas', '👟', 'Ayakkabım yeni.'],
  ['palto', 'casaco, sobretudo', 'substantivo', 'Roupas', '🧥', 'Paltom mavi.'],
  // ── Corpo ──
  ['baş', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Başım ağrıyor.'],
  ['el', 'mão', 'substantivo', 'Corpo', '✋', 'Elim temiz.'],
  ['göz', 'olho', 'substantivo', 'Corpo', '👁️', 'Gözlerim mavi.'],
  ['ağız', 'boca', 'substantivo', 'Corpo', '👄', 'Bu benim ağzım.'],
  ['bacak', 'perna', 'substantivo', 'Corpo', '🦵', 'Bacağım uzun.'],
  // ── Lugares ──
  ['okul', 'escola', 'substantivo', 'Lugares', '🏫', 'Okulum büyük.'],
  ['hastane', 'hospital', 'substantivo', 'Lugares', '🏥', 'Hastanede çalışıyorum.'],
  ['mağaza', 'loja', 'substantivo', 'Lugares', '🏬', 'Mağaza şehirde.'],
  ['sokak', 'rua', 'substantivo', 'Lugares', '🛣️', 'Bu sokakta yaşıyorum.'],
  // ── Profissões ──
  ['doktor', 'médico', 'substantivo', 'Profissões', '👨‍⚕️', 'Babam doktor.'],
  ['öğretmen', 'professor (de öğretmek, ensinar)', 'substantivo', 'Profissões', '👨‍🏫', 'Annem öğretmen.'],
  ['öğrenci', 'estudante', 'substantivo', 'Profissões', '🎓', 'Ben öğrenciyim.'],
  ['aşçı', 'cozinheiro', 'substantivo', 'Profissões', '👨‍🍳', 'O bir aşçı.'],
  // ── Sentimentos ──
  ['mutlu', 'feliz', 'adjetivo', 'Sentimentos', '😊', 'Çok mutluyum.'],
  ['üzgün', 'triste', 'adjetivo', 'Sentimentos', '😢', 'O üzgün.'],
  ['yorgun', 'cansado', 'adjetivo', 'Sentimentos', '😴', 'Çok yorgunum.'],
  ['aç', 'com fome', 'adjetivo', 'Sentimentos', '🍽️', 'Açım.'],
  // ── Números ──
  ['otuz', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Otuz yaşındayım.'],
  ['elli', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Elli lira.'],
  ['yüz', 'cem', 'numeral', 'Números', '💯', 'Yüz lira.'],
];

export const VOCAB_TR = buildVocab('tr', ROWS);
