import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do checheno (Нохчийн мотт, Noxçiyn mott), língua nakh-daguestanesa (ramo vainakh,
 * junto do inguche) falada sobretudo na República da Chechênia (Rússia) e na diáspora. Escrito aqui
 * no cirílico oficial desde 1938 (antes, latino de 1925 a 1938 e árabe antes disso).
 *
 * Cada palavra foi conferida com fonte real nesta sessão: o curso livre em inglês do Wikibooks
 * ("Chechen/Lesson 1" e "Chechen/Lesson 2", as duas únicas lições já escritas do curso — "Lesson 3"
 * em diante ainda não existe), a página de gramática da Wikipédia em inglês ("Chechen language") e
 * o dicionário de Nichols e Vagapov (Chechen-English and English-Chechen Dictionary, Routledge,
 * citado pelo Wikcionário em inglês e pelo material de gramática da UC Berkeley, que usa a mesma
 * fonte). Os números vêm do Omniglot ("Chechen numbers", que cita dicionários russo-chechenos de
 * 1978/2005). Todas consultadas em 08/10/2026.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['салам', 'oi, olá (informal, do dia a dia)', 'interjeição', 'Expressões', '👋', 'Салам!'],
  ['баркалла', 'obrigado (do árabe, totalmente incorporada ao checheno)', 'interjeição', 'Expressões', '🙏', 'Баркалла!'],
  ['массарна а', 'de nada', 'interjeição', 'Expressões', '🙏', 'Массарна а!'],
  ['хIаъ', 'sim', 'interjeição', 'Expressões', '✅', 'ХIаъ.'],
  ['хIан-хIа', 'não', 'interjeição', 'Expressões', '🚫', 'ХIан-хIа.'],
  ['бехк ма биллахь', 'desculpe, com licença (lit. “não ponha a culpa”)', 'interjeição', 'Expressões', '🙏', 'Бехк ма биллахь!'],
  ['дика ду', 'está bem, ok (lit. “é bom”)', 'interjeição', 'Expressões', '👌', 'Дика ду!'],
  // ── Essenciais ──
  ['ца', 'não (advérbio de negação, sempre antes do verbo)', 'advérbio', 'Essenciais', '🚫', 'Со ца кхета.'],
  ['мила', 'quem', 'pronome', 'Essenciais', '❓', 'Иза мила ву?'],
  // ── Verbos-chave ──
  ['кхета', 'entender', 'verbo', 'Verbos-chave', '🧠', 'Со кхета.'],
  ['хаа', 'saber (usado com o “sabedor” no caso dativo, não no nominativo)', 'verbo', 'Verbos-chave', '💡', 'Суна ца хаа.'],
  ['Iаш', 'morar, viver (lit. “estar sentado”, sempre com ву/ю/ду/бу depois)', 'verbo', 'Verbos-chave', '🏠', 'Со Соьлжа-гIалахь Iаш ву.'],
  // ── Pessoas (pronomes) ──
  ['со', 'eu', 'pronome', 'Pessoas', '🙋', 'Со кIант ву.'],
  ['хьо', 'tu, você (informal)', 'pronome', 'Pessoas', '🫵', 'Хьо зуда ю.'],
  ['иза', 'ele, ela (o checheno não marca gênero no pronome)', 'pronome', 'Pessoas', '🧑', 'Иза йоI ю.'],
  ['тхо', 'nós (excluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Тхо нохчий ду.'],
  ['вай', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Вай нохчий ду.'],
  ['шу', 'vocês (também usado como “você” formal, no singular)', 'pronome', 'Pessoas', '👥', 'Шу нохчий ду?'],
  ['уьш', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Уьш сан да-нана бу.'],
  // ── Família ──
  ['кIант', 'filho, rapaz (a mesma palavra serve para “menino” e “filho”)', 'substantivo', 'Família', '👦', 'Со кIант ву.'],
  ['йоI', 'filha, moça (a mesma palavra serve para “menina” e “filha”)', 'substantivo', 'Família', '👧', 'Иза йоI ю.'],
  ['стаг', 'homem', 'substantivo', 'Família', '👨', 'Иза стаг ву.'],
  ['зуда', 'mulher, esposa', 'substantivo', 'Família', '👩', 'Хьо зуда ю.'],
  ['да', 'pai', 'substantivo', 'Família', '👨', 'Сан да Соьлжа-гIалахь Iаш ву.'],
  ['нана', 'mãe', 'substantivo', 'Família', '👩', 'Сан нана Соьлжа-гIалахь Iаш ю.'],
  ['ваша', 'irmão', 'substantivo', 'Família', '👦', 'Сан ваша Москвахь Iаш ву.'],
  ['йиша', 'irmã', 'substantivo', 'Família', '👧', 'Иза сан йиша ю.'],
  ['доьзал', 'família', 'substantivo', 'Família', '👨‍👩‍👧', 'Сан доьзал дика ду.'],
  // ── Identidade ──
  ['нохчийн мотт', 'língua chechena (lit. “língua dos chechenos”)', 'substantivo', 'Identidade', '🗣️', 'Нохчийн мотт чIогIа хаза бу.'],
  // ── Números ──
  ['цхьаъ', 'um', 'numeral', 'Números', '1️⃣', 'Цхьаъ.'],
  ['шиъ', 'dois', 'numeral', 'Números', '2️⃣', 'Шиъ.'],
  ['кхоъ', 'três', 'numeral', 'Números', '3️⃣', 'Кхоъ.'],
  ['диъ', 'quatro', 'numeral', 'Números', '4️⃣', 'Диъ.'],
  ['пхиъ', 'cinco', 'numeral', 'Números', '5️⃣', 'Пхиъ.'],
  ['ялх', 'seis', 'numeral', 'Números', '6️⃣', 'Ялх.'],
  ['ворхI', 'sete', 'numeral', 'Números', '7️⃣', 'ВорхI.'],
  ['бархI', 'oito', 'numeral', 'Números', '8️⃣', 'БархI.'],
  ['исс', 'nove', 'numeral', 'Números', '9️⃣', 'Исс.'],
  ['итт', 'dez', 'numeral', 'Números', '🔟', 'Итт.'],
];

export const VOCAB_CE = buildVocab('ce', ROWS);
