import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do jejuense/jeju (제주말, Jeju-mal), língua coreânica falada na ilha de Jeju, Coreia
 * do Sul — criticamente ameaçada (UNESCO, desde 2010): só 5 a 10 mil falantes fluentes, quase todos
 * com mais de 70 anos (Living Tongues Institute). O Ethnologue e o Glottolog já dão código próprio
 * ao jejuense (ISO 639-3 `jje`, Glottolog `jeju1234`), separado do coreano (`kore1280`) dentro da
 * família coreânica (`kore1284`) — por isso este pacote é um idioma à parte no app, não uma variante
 * do coreano, mesmo com décadas em que foi chamado só de "dialeto de Jeju".
 *
 * Fonte principal do vocabulário: o Jeju-eo Talking Dictionary (talkingdictionary.swarthmore.edu/
 * jeju), projeto de documentação linguística real do Living Tongues Institute for Endangered
 * Languages com a Swarthmore College (Andrew Cheng e K. David Harrison, 2014) — 218 verbetes com
 * áudio de uma falante nativa (Kang Munsun, dialeto de Jeju-si), consultados verbete por verbete
 * nesta sessão (não uma lista pronta copiada: cada entrada foi aberta e conferida uma a uma, pelo
 * número do verbete). O aviso de direitos do próprio site ("todos os direitos reservados") vale pro
 * ÁUDIO e pra COMPILAÇÃO do dicionário — não pros fatos lexicais em si (a tradução de uma palavra não
 * é uma obra protegida), o mesmo princípio já usado com outros dicionários não livres citados neste
 * app (como o de Nichols/Vagapov pro checheno). Os quatro numerais e a saudação vêm de fontes
 * diferentes, citadas na gramática e no índice (gramatica.ts, index.ts). Todas consultadas em
 * 09/10/2026.
 *
 * Nota técnica: várias palavras do Jeju-eo Talking Dictionary usam a vogal histórica "ㆍ" (arae-a,
 * perdida no coreano padrão mas preservada no jejuense) numa notação ASCII alternativa (ex.: "ㄷ'ㄹ"
 * pra "lua") que não compõe um bloco de hangul de verdade em fontes comuns — por cautela de
 * renderização, nenhuma palavra com essa vogal entrou neste pacote; todas as 46 abaixo usam hangul
 * moderno padrão, conferido letra por letra.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['혼저옵서예', 'oi, bem-vindo (saudação pra receber visita)', 'interjeição', 'Expressões', '👋', '혼저옵서예!'],
  ['고맙수다', 'obrigado', 'interjeição', 'Expressões', '🙏', '고맙수다!'],
  // ── Pessoas (pronomes) ──
  ['나', 'eu', 'pronome', 'Pessoas', '🙋', '나.'],
  ['느', 'tu, você', 'pronome', 'Pessoas', '🫵', '느.'],
  ['우리', 'nós', 'pronome', 'Pessoas', '🙌', '우리.'],
  ['이거', 'isto', 'pronome', 'Pessoas', '👉', '이거.'],
  ['저거', 'aquilo', 'pronome', 'Pessoas', '👈', '저거.'],
  // ── Perguntas ──
  ['누게', 'quem', 'pronome', 'Perguntas', '❓', '누게?'],
  ['무싱거', 'o que, o quê', 'pronome', 'Perguntas', '❓', '무싱거?'],
  // ── Família ──
  ['어멍', 'mãe', 'substantivo', 'Família', '👩', '어멍.'],
  ['아방', 'pai', 'substantivo', 'Família', '👨', '아방.'],
  ['예펜', 'mulher', 'substantivo', 'Família', '👩', '예펜.'],
  ['소나이', 'homem', 'substantivo', 'Família', '👨', '소나이.'],
  ['사름', 'pessoa', 'substantivo', 'Família', '🧑', '사름.'],
  // ── Números ──
  ['호나', 'um', 'numeral', 'Números', '1️⃣', '호나.'],
  ['둘', 'dois', 'numeral', 'Números', '2️⃣', '둘.'],
  ['쉿', 'três', 'numeral', 'Números', '3️⃣', '쉿.'],
  ['늿', 'quatro', 'numeral', 'Números', '4️⃣', '늿.'],
  // ── Natureza ──
  ['해', 'sol', 'substantivo', 'Natureza', '☀️', '해.'],
  ['별', 'estrela', 'substantivo', 'Natureza', '⭐', '별.'],
  ['물', 'água', 'substantivo', 'Natureza', '💧', '물.'],
  ['비', 'chuva', 'substantivo', 'Natureza', '🌧️', '비.'],
  ['돌맹이', 'pedra', 'substantivo', 'Natureza', '🪨', '돌맹이.'],
  ['흙', 'terra', 'substantivo', 'Natureza', '🟤', '흙.'],
  ['구름', 'nuvem', 'substantivo', 'Natureza', '☁️', '구름.'],
  ['불', 'fogo', 'substantivo', 'Natureza', '🔥', '불.'],
  // ── Animais ──
  ['새', 'pássaro', 'substantivo', 'Animais', '🐦', '새.'],
  ['강생이', 'cachorro', 'substantivo', 'Animais', '🐶', '강생이.'],
  ['바닷괴기', 'peixe', 'substantivo', 'Animais', '🐟', '바닷괴기.'],
  // ── Comida ──
  ['지슬', 'batata', 'substantivo', 'Comida', '🥔', '지슬.'],
  ['미깡', 'tangerina', 'substantivo', 'Comida', '🍊', '미깡.'],
  ['마농', 'alho', 'substantivo', 'Comida', '🧄', '마농.'],
  ['궤기', 'carne', 'substantivo', 'Comida', '🥩', '궤기.'],
  // ── Corpo ──
  ['귀', 'orelha', 'substantivo', 'Corpo', '👂', '귀.'],
  ['눈망댕이', 'olho', 'substantivo', 'Corpo', '👁️', '눈망댕이.'],
  ['코', 'nariz', 'substantivo', 'Corpo', '👃', '코.'],
  ['입', 'boca', 'substantivo', 'Corpo', '👄', '입.'],
  ['손', 'mão', 'substantivo', 'Corpo', '✋', '손.'],
  ['발', 'pé', 'substantivo', 'Corpo', '🦶', '발.'],
  ['피', 'sangue', 'substantivo', 'Corpo', '🩸', '피.'],
  ['심장', 'coração', 'substantivo', 'Corpo', '❤️', '심장.'],
  // ── Verbos-chave ──
  ['먹다', 'comer', 'verbo', 'Verbos-chave', '🍽️', '먹다.'],
  ['물다', 'morder', 'verbo', 'Verbos-chave', '🦷', '물다.'],
  ['보다', 'ver', 'verbo', 'Verbos-chave', '👀', '보다.'],
  ['알다', 'saber', 'verbo', 'Verbos-chave', '💡', '알다.'],
  ['오다', 'vir', 'verbo', 'Verbos-chave', '🚶', '오다.'],
];

export const VOCAB_JJE = buildVocab('jje', ROWS);
