import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do abecásio/abcázio (Аԥсуа бызшәа, Apsua bızşwa), língua caucasiana do noroeste
 * (abecásio-adigue), falada sobretudo na Abecásia (região separatista da Geórgia, com certo
 * reconhecimento internacional) e por uma diáspora maior ainda na Turquia.
 *
 * Cada palavra foi conferida com fonte real nesta sessão: o roteiro de frases do Wikivoyage em
 * inglês ("Abkhaz phrasebook", que também deu os números, cruzados com o Omniglot, "Abkhaz
 * numbers"), a tabela de pronomes do Wikcionário em inglês (verbete "а-", cruzada com a lista de
 * Campbell em "Compendium of the World's Languages", via o Rosetta Project), e verbetes individuais
 * do Wikcionário em russo (ru.wiktionary.org), confirmados um a um: "ан" (mãe), "аб" (pai), "аӡы"
 * (água) e "аҩны" (casa) têm verbete próprio com a definição em russo; "амца" (fogo) é inferida de
 * "афымца" (eletricidade, lit. "relâmpago-fogo"), que o Wikcionário em russo deriva de "афы"
 * (relâmpago) + "амца". Todas consultadas em 08/10/2026.
 *
 * Nota importante: os pronomes de 3ª pessoa (ele/ela/eles) ficaram de fora deste pacote porque as
 * duas fontes consultadas (Campbell e o Wikcionário) discordam entre si na forma exata — sem uma
 * terceira fonte para desempatar, essas três palavras não entraram, em vez de arriscar ensinar a
 * forma errada.
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas (pronomes) ──
  ['сара', 'eu', 'pronome', 'Pessoas', '🙋', 'Сара Лину сыхӡуп.'],
  ['уара', 'tu, você (dirigido a um homem)', 'pronome', 'Pessoas', '🫵', 'Уара иухьӡузеи?'],
  ['бара', 'tu, você (dirigido a uma mulher)', 'pronome', 'Pessoas', '🫵', 'Бара ибыхьӡузеи?'],
  ['ҳара', 'nós', 'pronome', 'Pessoas', '🙌', 'Ҳара.'],
  ['шәара', 'vocês', 'pronome', 'Pessoas', '👥', 'Шәара.'],
  // ── Expressões ──
  ['бзиа збаша', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Бзиа збаша!'],
  ['ушҧаҟоу', 'como vai?', 'interjeição', 'Expressões', '❓', 'Ушҧаҟоу?'],
  ['итабуп ибзианы', 'bem, obrigado', 'interjeição', 'Expressões', '🙏', 'Итабуп ибзианы!'],
  ['ааи', 'sim', 'interjeição', 'Expressões', '✅', 'Ааи.'],
  ['мап', 'não', 'interjeição', 'Expressões', '🚫', 'Мап.'],
  ['абзиараз', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Абзиараз!'],
  // ── Essenciais ──
  ['сыхӡуп', 'chama-se, se chama (usado em “Сара … сыхӡуп”, “eu me chamo…”)', 'verbo', 'Essenciais', '📛', 'Сара Лину сыхӡуп.'],
  ['истахуп', 'quero (usado em “Сара истахуп”, “eu quero”)', 'verbo', 'Essenciais', '🙏', 'Сара истахуп.'],
  // ── Família ──
  ['ан', 'mãe', 'substantivo', 'Família', '👩', 'Ан.'],
  ['аб', 'pai', 'substantivo', 'Família', '👨', 'Аб.'],
  // ── Natureza e casa ──
  ['аӡы', 'água', 'substantivo', 'Natureza', '💧', 'Аӡы.'],
  ['амца', 'fogo', 'substantivo', 'Natureza', '🔥', 'Амца.'],
  ['аҩны', 'casa', 'substantivo', 'Casa', '🏠', 'Аҩны.'],
  // ── Cores ──
  ['аиқәаҵәа', 'preto', 'adjetivo', 'Cores', '⬛', 'Аиқәаҵәа.'],
  ['ашкәакәа', 'branco', 'adjetivo', 'Cores', '⬜', 'Ашкәакәа.'],
  ['аҟаԧшь', 'vermelho', 'adjetivo', 'Cores', '🟥', 'Аҟаԧшь.'],
  ['аиаҵәа', 'azul', 'adjetivo', 'Cores', '🟦', 'Аиаҵәа.'],
  // ── Comida ──
  ['ача', 'pão', 'substantivo', 'Comida', '🍞', 'Ача.'],
  ['ашә', 'queijo', 'substantivo', 'Comida', '🧀', 'Ашә.'],
  ['аҩы', 'vinho', 'substantivo', 'Comida', '🍷', 'Аҩы.'],
  ['акәтыжь', 'frango, galinha', 'substantivo', 'Comida', '🍗', 'Акәтыжь.'],
  ['апсыӡ', 'peixe', 'substantivo', 'Comida', '🐟', 'Апсыӡ.'],
  // ── Tempo ──
  ['нас', 'depois, mais tarde', 'advérbio', 'Tempo', '⏰', 'Нас.'],
  ['иахьа', 'hoje', 'advérbio', 'Tempo', '📅', 'Иахьа.'],
  ['иахы', 'ontem', 'advérbio', 'Tempo', '📅', 'Иахы.'],
  ['уаҵәашьҭахь', 'amanhã', 'advérbio', 'Tempo', '📅', 'Уаҵәашьҭахь.'],
  // ── Números ──
  ['акы', 'um', 'numeral', 'Números', '1️⃣', 'Акы.'],
  ['ҩба', 'dois', 'numeral', 'Números', '2️⃣', 'Ҩба.'],
  ['хҧа', 'três', 'numeral', 'Números', '3️⃣', 'Хҧа.'],
  ['ҧшьба', 'quatro', 'numeral', 'Números', '4️⃣', 'Ҧшьба.'],
  ['хәба', 'cinco', 'numeral', 'Números', '5️⃣', 'Хәба.'],
  ['фба', 'seis', 'numeral', 'Números', '6️⃣', 'Фба.'],
  ['быжьба', 'sete', 'numeral', 'Números', '7️⃣', 'Быжьба.'],
  ['ааба', 'oito', 'numeral', 'Números', '8️⃣', 'Ааба.'],
  ['жәба', 'nove', 'numeral', 'Números', '9️⃣', 'Жәба.'],
  ['жәаба', 'dez', 'numeral', 'Números', '🔟', 'Жәаба.'],
];

export const VOCAB_AB = buildVocab('ab', ROWS);
