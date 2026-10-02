import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mongol na ESCRITA TRADICIONAL (mvf), a escrita vertical usada na Mongólia Interior
 * (China). São as mesmas 60 palavras do pacote do mongol em cirílico (mn), para comparar as duas
 * escritas palavra por palavra; o comentário no fim de cada linha traz a palavra em cirílico.
 *
 * FONTE DE CADA GRAFIA: o verbete da palavra em cirílico no Wiktionary em inglês, que traz a grafia
 * na escrita tradicional no campo “Mongolian spelling” (predefinições mn-variant/mn-noun/mn-verb/
 * mn-adj…), copiada caractere por caractere, inclusive os caracteres invisíveis de controle da
 * escrita: o separador de vogal (U+180E, ex.: ᠢᠮᠠᠭ᠎ᠠ, “cabra”), o espaço estreito dos sufixos (U+202F,
 * ex.: ᠲᠠᠨ ᠤ, “seu/sua”) e os seletores de variante (U+180B, U+180D, ex.: ᠰᠠᠶ᠋ᠢᠨ, “bom”). Dois
 * cuidados: “уул” tem quatro etimologias no verbete, e a grafia ᠠᠭᠤᠯᠠ (aɣula) é a do sentido
 * “montanha” (etimologia 4), não ᠤᠤᠯ (“raiz, original”); “гэр” lista duas grafias, e ficou a primeira,
 * ᠭᠡᠷ.
 *
 * A grafia é a do mongol clássico, mais antiga que a pronúncia de hoje (por isso ᠰᠦᠨ, sün, é o “сүү”,
 * leite, e ᠤᠰᠤ, usu, é o “ус”, água) — ver o tópico de gramática sobre isso.
 *
 * FRASES DE EXEMPLO: os mesmos padrões do pacote em cirílico, montados só com palavras de grafia
 * conferida: “ᠡᠨᠡ ___᠃” (isto é ___), “___ ᠪᠠᠢᠨ᠎ᠠ᠃” (___ está/é), a pergunta com “ᠤᠤ” (sim/não) ou
 * “ᠪᠤᠢ” (com palavra interrogativa — o Wiktionary dá ᠪᠤᠢ como a grafia tanto de “вэ” quanto de “бэ”)
 * e, para os verbos, a forma do dicionário. A pontuação é a da escrita mongol: ᠃ (ponto) e ᠂ (vírgula).
 */
const ROWS: VocabRow[] = [
  // Pessoas
  ['ᠪᠢ', 'eu', 'pronome', 'Pessoas', '🙋', 'ᠪᠢ᠃'], // би
  ['ᠴᠢ', 'tu, você (informal)', 'pronome', 'Pessoas', '👉', 'ᠴᠢ᠃'], // чи
  ['ᠲᠠ', 'você (formal), vocês', 'pronome', 'Pessoas', '🫵', 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?'], // та
  ['ᠲᠡᠷᠡ', 'ele, ela; aquele', 'pronome', 'Pessoas', '🧑', 'ᠲᠡᠷᠡ᠃'], // тэр
  ['ᠡᠵᠢ', 'mãe', 'substantivo', 'Pessoas', '👩', 'ᠡᠨᠡ ᠡᠵᠢ᠃'], // ээж
  ['ᠠᠪᠤ', 'pai', 'substantivo', 'Pessoas', '👨', 'ᠡᠨᠡ ᠠᠪᠤ᠃'], // аав
  ['ᠨᠠᠶ᠋ᠢᠵᠠ', 'amigo, amiga', 'substantivo', 'Pessoas', '🤝', 'ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃'], // найз
  // Natureza
  ['ᠨᠠᠷᠠ', 'sol', 'substantivo', 'Natureza', '☀️', 'ᠡᠨᠡ ᠨᠠᠷᠠ᠃'], // нар
  ['ᠤᠰᠤ', 'água', 'substantivo', 'Natureza', '💧', 'ᠡᠨᠡ ᠤᠰᠤ᠃'], // ус
  ['ᠠᠭᠤᠯᠠ', 'montanha', 'substantivo', 'Natureza', '⛰️', 'ᠡᠨᠡ ᠠᠭᠤᠯᠠ᠃'], // уул
  ['ᠲᠩᠷᠢ', 'céu', 'substantivo', 'Natureza', '🌌', 'ᠡᠨᠡ ᠲᠩᠷᠢ᠃'], // тэнгэр
  ['ᠴᠠᠰᠤ', 'neve', 'substantivo', 'Natureza', '❄️', 'ᠡᠨᠡ ᠴᠠᠰᠤ᠃'], // цас
  // Animais
  ['ᠮᠣᠷᠢ', 'cavalo', 'substantivo', 'Animais', '🐴', 'ᠡᠨᠡ ᠮᠣᠷᠢ᠃'], // морь
  ['ᠬᠣᠨᠢ', 'ovelha', 'substantivo', 'Animais', '🐑', 'ᠡᠨᠡ ᠬᠣᠨᠢ᠃'], // хонь
  ['ᠢᠮᠠᠭ᠎ᠠ', 'cabra', 'substantivo', 'Animais', '🐐', 'ᠡᠨᠡ ᠢᠮᠠᠭ᠎ᠠ᠃'], // ямаа
  ['ᠲᠡᠮᠡᠭᠡ', 'camelo', 'substantivo', 'Animais', '🐫', 'ᠡᠨᠡ ᠲᠡᠮᠡᠭᠡ᠃'], // тэмээ
  ['ᠨᠣᠬᠠᠢ', 'cão', 'substantivo', 'Animais', '🐕', 'ᠡᠨᠡ ᠨᠣᠬᠠᠢ᠃'], // нохой
  ['ᠰᠢᠪᠠᠭᠤ', 'pássaro', 'substantivo', 'Animais', '🐦', 'ᠡᠨᠡ ᠰᠢᠪᠠᠭᠤ᠃'], // шувуу
  // Comida
  ['ᠮᠢᠬ᠎ᠠ', 'carne', 'substantivo', 'Comida', '🍖', 'ᠡᠨᠡ ᠮᠢᠬ᠎ᠠ᠃'], // мах
  ['ᠴᠠᠢ', 'chá', 'substantivo', 'Comida', '🍵', 'ᠡᠨᠡ ᠴᠠᠢ᠃'], // цай
  ['ᠰᠦᠨ', 'leite', 'substantivo', 'Comida', '🥛', 'ᠡᠨᠡ ᠰᠦᠨ᠃'], // сүү
  ['ᠠᠶᠢᠷᠠᠭ', 'airag (leite de égua fermentado)', 'substantivo', 'Comida', '🍶', 'ᠡᠨᠡ ᠠᠶᠢᠷᠠᠭ᠃'], // айраг
  // Corpo
  ['ᠲᠣᠯᠤᠭᠠᠢ', 'cabeça', 'substantivo', 'Corpo', '👤', 'ᠡᠨᠡ ᠲᠣᠯᠤᠭᠠᠢ᠃'], // толгой
  ['ᠨᠢᠳᠦ', 'olho', 'substantivo', 'Corpo', '👁️', 'ᠡᠨᠡ ᠨᠢᠳᠦ᠃'], // нүд
  ['ᠭᠠᠷ', 'mão, braço', 'substantivo', 'Corpo', '✋', 'ᠡᠨᠡ ᠭᠠᠷ᠃'], // гар
  ['ᠬᠥᠯ', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'ᠡᠨᠡ ᠬᠥᠯ᠃'], // хөл
  ['ᠠᠮᠠ', 'boca', 'substantivo', 'Corpo', '👄', 'ᠡᠨᠡ ᠠᠮᠠ᠃'], // ам
  // Casa
  ['ᠭᠡᠷ', 'casa, guer (tenda redonda mongol)', 'substantivo', 'Casa', '⛺', 'ᠡᠨᠡ ᠭᠡᠷ᠃'], // гэр
  // Números
  ['ᠨᠢᠭᠡ', 'um', 'numeral', 'Números', '1️⃣', 'ᠨᠢᠭᠡ ᠭᠡᠷ᠃'], // нэг
  ['ᠬᠣᠶᠠᠷ', 'dois', 'numeral', 'Números', '2️⃣', 'ᠬᠣᠶᠠᠷ ᠮᠣᠷᠢ᠃'], // хоёр
  ['ᠭᠤᠷᠪᠠ', 'três', 'numeral', 'Números', '3️⃣', 'ᠭᠤᠷᠪᠠ ᠬᠣᠨᠢ᠃'], // гурав
  ['ᠳᠥᠷᠪᠡ', 'quatro', 'numeral', 'Números', '4️⃣', 'ᠳᠥᠷᠪᠡ ᠢᠮᠠᠭ᠎ᠠ᠃'], // дөрөв
  ['ᠲᠠᠪᠤ', 'cinco', 'numeral', 'Números', '5️⃣', 'ᠲᠠᠪᠤ ᠲᠡᠮᠡᠭᠡ᠃'], // тав
  ['ᠵᠢᠷᠭᠤᠭ᠎ᠠ', 'seis', 'numeral', 'Números', '6️⃣', 'ᠵᠢᠷᠭᠤᠭ᠎ᠠ ᠨᠣᠬᠠᠢ᠃'], // зургаа
  ['ᠳᠣᠯᠤᠭ᠎ᠠ', 'sete', 'numeral', 'Números', '7️⃣', 'ᠳᠣᠯᠤᠭ᠎ᠠ ᠰᠢᠪᠠᠭᠤ᠃'], // долоо
  ['ᠨᠠᠢ᠍ᠮᠠ', 'oito', 'numeral', 'Números', '8️⃣', 'ᠨᠠᠢ᠍ᠮᠠ ᠭᠡᠷ᠃'], // найм
  ['ᠶᠢᠰᠦ', 'nove', 'numeral', 'Números', '9️⃣', 'ᠶᠢᠰᠦ ᠮᠣᠷᠢ᠃'], // ес
  ['ᠠᠷᠪᠠ', 'dez', 'numeral', 'Números', '🔟', 'ᠠᠷᠪᠠ ᠬᠣᠨᠢ᠃'], // арав
  // Verbos
  ['ᠢᠳᠡᠬᠦ', 'come, comer', 'verbo', 'Verbos', '🍽️', 'ᠢᠳᠡᠬᠦ᠃'], // идэх
  ['ᠤᠤᠭᠤᠬᠤ', 'bebe, beber', 'verbo', 'Verbos', '🥤', 'ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?'], // уух
  ['ᠦᠵᠡᠬᠦ', 'vê, ver', 'verbo', 'Verbos', '👀', 'ᠦᠵᠡᠬᠦ᠃'], // үзэх
  ['ᠮᠡᠳᠡᠬᠦ', 'sabe, saber, conhecer', 'verbo', 'Verbos', '🧠', 'ᠮᠡᠳᠡᠬᠦ᠃'], // мэдэх
  ['ᠤᠨᠲᠠᠬᠤ', 'dorme, dormir', 'verbo', 'Verbos', '😴', 'ᠤᠨᠲᠠᠬᠤ᠃'], // унтах
  ['ᠢᠷᠡᠬᠦ', 'vem, vir', 'verbo', 'Verbos', '🚶', 'ᠢᠷᠡᠬᠦ᠃'], // ирэх
  // Adjetivos
  ['ᠲᠣᠮᠤ', 'grande', 'adjetivo', 'Adjetivos', '📏', 'ᠲᠡᠮᠡᠭᠡ ᠲᠣᠮᠤ ᠪᠠᠢᠨ᠎ᠠ᠃'], // том
  ['ᠵᠢᠵᠢᠭ', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'ᠰᠢᠪᠠᠭᠤ ᠵᠢᠵᠢᠭ ᠪᠠᠢᠨ᠎ᠠ᠃'], // жижиг
  ['ᠰᠠᠶ᠋ᠢᠨ', 'bom', 'adjetivo', 'Adjetivos', '👍', 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?'], // сайн
  ['ᠮᠠᠭᠤ', 'mau, ruim', 'adjetivo', 'Adjetivos', '👎', 'ᠡᠨᠡ ᠮᠠᠭᠤ ᠪᠠᠢᠨ᠎ᠠ᠃'], // муу
  ['ᠰᠢᠨ᠎ᠡ', 'novo', 'adjetivo', 'Adjetivos', '✨', 'ᠭᠡᠷ ᠰᠢᠨ᠎ᠡ ᠪᠠᠢᠨ᠎ᠠ᠃'], // шинэ
  ['ᠤᠯᠠᠭᠠᠨ', 'vermelho', 'adjetivo', 'Adjetivos', '🔴', 'ᠨᠠᠷᠠ ᠤᠯᠠᠭᠠᠨ ᠪᠠᠢᠨ᠎ᠠ᠃'], // улаан
  ['ᠴᠠᠭᠠᠨ', 'branco', 'adjetivo', 'Adjetivos', '⚪', 'ᠴᠠᠰᠤ ᠴᠠᠭᠠᠨ ᠪᠠᠢᠨ᠎ᠠ᠃'], // цагаан
  // Perguntas
  ['ᠬᠡᠨ', 'quem', 'pronome', 'Perguntas', '❓', 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?'], // хэн
  ['ᠶᠠᠭᠤ', 'o quê, o que', 'pronome', 'Perguntas', '❓', 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?'], // юу
  ['ᠬᠠᠮᠢᠭ᠎ᠠ', 'onde', 'advérbio', 'Perguntas', '❓', 'ᠲᠡᠮᠡᠭᠡ ᠬᠠᠮᠢᠭ᠎ᠠ ᠪᠠᠢᠨ᠎ᠠ?'], // хаана
  ['ᠬᠡᠵᠢᠶ᠎ᠡ', 'quando', 'advérbio', 'Perguntas', '❓', 'ᠬᠡᠵᠢᠶ᠎ᠡ?'], // хэзээ
  ['ᠶᠠᠭᠠᠭᠢᠵᠤ', 'como', 'advérbio', 'Perguntas', '❓', 'ᠶᠠᠭᠠᠭᠢᠵᠤ?'], // яаж
  // Expressões
  ['ᠡᠨᠡ', 'este, esta, isto', 'pronome', 'Expressões', '👉', 'ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃'], // энэ
  ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ', 'olá (lit. “você está bem?”)', 'expressão', 'Expressões', '👋', 'ᠰᠠᠶ᠋ᠢᠨ᠂ ᠲᠠ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?'], // сайн байна уу
  ['ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', 'obrigado, obrigada', 'expressão', 'Expressões', '🙏', 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ!'], // баярлалаа
  ['ᠪᠠᠶᠠᠷᠲᠠᠢ', 'tchau, adeus', 'expressão', 'Expressões', '👋', 'ᠪᠠᠶᠠᠷᠲᠠᠢ!'], // баяртай
];

export const VOCAB_MVF = buildVocab('mvf', ROWS);
