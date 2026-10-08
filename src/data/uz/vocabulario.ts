import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do uzbeque no alfabeto latino oficial (norma de 1995: dígrafos sh, ch, oʻ, gʻ, ng).
 * Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete`
 * em index.ts. O uzbeque não marca gênero gramatical.
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
  ['oʻrganmoq', 'aprender, estudar (men oʻrganaman)', 'verbo', 'Verbos-chave', '📚', 'Men oʻzbek tilini oʻrganyapman.'],
  ['kelmoq', 'vir (men keldim = eu vim)', 'verbo', 'Verbos-chave', '🚶', 'Men Toshkentdan keldim.'],
  ['yashamoq', 'viver, morar (men yashayman)', 'verbo', 'Verbos-chave', '🏠', 'Men shaharda yashayman.'],
  ['aytmoq', 'dizer (men aytaman)', 'verbo', 'Verbos-chave', '🗣️', 'Men ismimni aytaman.'],
  ['koʻrmoq', 'ver (men koʻraman)', 'verbo', 'Verbos-chave', '👀', 'Men doʻstimni koʻraman.'],
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
];

export const VOCAB_UZ = buildVocab('uz', ROWS);
