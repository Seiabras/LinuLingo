import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lakota (Lakȟótiyapi), língua siouana falada nas Grandes Planícies dos Estados
 * Unidos. Pacote incompleto: só o nível A1 por enquanto (ver `incomplete` em index.ts).
 *
 * FONTES (todas consultadas diretamente; nenhuma palavra vem só da memória do modelo):
 * - en.wiktionary.org — verbetes individuais em lakota (lkt), um por um: šúŋka, wičháša, wíŋyaŋ,
 *   iná, até, hokšíla, wakȟáŋyeža, miyé, niyé, iyé, uŋkíyepi, waŋží, núŋpa, yámni, tópa, záptaŋ,
 *   šákpe, šakówiŋ, šaglógaŋ, napčíyuŋka, wikčémna, sápa, ská, šá, zí, tȟó, tȟáŋka, číkʼala, wí,
 *   haŋwí, wičháȟpi, mní, makȟóčhe, maȟpíya, tȟaté, pȟéta, matȟó, tȟatȟáŋka, waŋblí, zuzéča,
 *   ziŋtkála, šúŋkawakȟáŋ (citado na página de šúŋka), aǧúyapi, tȟaló, asáŋpi, wagmíza,
 *   wakȟályapi, napé, ištá, sí, čhaŋté, pȟá (citado como cognato na página do mandan "pá"), thí,
 *   thípi, wóta, yatkáŋ, čhíŋ, lowáŋ, yaŋká, thečhíȟila, háŋ, hiyá, táku, tuwá, tuktél, na, wašté,
 *   šni, kiŋ, Lakȟótiyapi.
 * - omniglot.com/language/phrases/lakota.php — frases de saudação e cortesia (Hau; Taŋyáŋ yahí;
 *   Táku eníčiyapi he?; "...emáčiyapi"; Tukténitaŋhaŋ he?; Philámayaye; Wíyuškiŋyaŋ waŋčhíŋyaŋke ló,
 *   marcada no próprio site como fala de homem).
 * - en.wikipedia.org/wiki/Lakota_language — ordem SOV, "Šúŋka kiŋ sápa" (o cachorro é preto),
 *   posposições, prefixos de pessoa wa-/ya-, sufixo de plural -pi, partículas de fala masculina e
 *   feminina (yeló/yetȟó/hųwó × ye/nitȟó), ortografia padrão.
 *
 * `genders`: o lakota não marca gênero gramatical (nenhuma fonte consultada registra isso); os
 * substantivos de pessoa distinguem sexo por palavras separadas (wičháša "homem" × wíŋyaŋ
 * "mulher"), não por flexão — por isso o pacote usa `genders: []` em index.ts, como os outros
 * idiomas indígenas deste app (arn, tca, gn, gun, kgk, nhd).
 *
 * Verbos: as fontes abertas conferidas aqui são dicionários de palavra avulsa (Wiktionary), sem
 * tabela de conjugação completa verificável para cada verbo. Para não inventar uma conjugação sem
 * fonte, as frases de exemplo dos verbos usam a forma de citação (não conjugada) numa moldura
 * simples e seguramente atestada (substantivo + "kiŋ" + adjetivo, o mesmo padrão de "Šúŋka kiŋ
 * sápa" da Wikipédia), em vez de uma frase "natural" porém arriscada — a mesma prática já adotada
 * nos pacotes arn e tca para o mesmo problema.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['Hau', 'oi, olá (saudação geral)', 'interjeição', 'Expressões', '👋', 'Hau! Linu emáčiyapi.'],
  ['taŋyáŋ yahí', 'bem-vindo (lit. “bom que você chegou”)', 'expressão', 'Expressões', '🤗', 'Taŋyáŋ yahí!'],
  ['híŋháŋni wašté', 'bom dia', 'expressão', 'Expressões', '🌅', 'Híŋháŋni wašté!'],
  ['haŋhépi wašté', 'boa noite', 'expressão', 'Expressões', '🌙', 'Haŋhépi wašté!'],
  ['philámayaye', 'obrigado', 'expressão', 'Expressões', '🙏', 'Philámayaye!'],
  ['taŋyáŋ ománi', 'boa viagem (usada também como despedida)', 'expressão', 'Expressões', '👋', 'Taŋyáŋ ománi!'],
  // ── Essenciais ──
  ['háŋ', 'sim', 'advérbio', 'Essenciais', '👍', 'Háŋ, philámayaye!'],
  ['hiyá', 'não', 'advérbio', 'Essenciais', '👎', 'Hiyá, philámayaye.'],
  ['táku', 'o quê; algo', 'pronome', 'Essenciais', '❓', 'Táku eníčiyapi he?'],
  ['tuwá', 'quem', 'pronome', 'Essenciais', '❓', 'Tuwá he?'],
  ['tuktél', 'onde', 'advérbio', 'Essenciais', '❓', 'Tukténitaŋhaŋ he?'],
  ['wašté', 'bom, bem', 'adjetivo', 'Essenciais', '👌', 'Mní kiŋ wašté.'],
  // ── Pessoas ──
  ['miyé', 'eu, mim (pronome enfático; a pessoa já vem marcada no verbo)', 'pronome', 'Pessoas', '🙋', 'Hé miyé.'],
  ['niyé', 'tu, você (pronome enfático)', 'pronome', 'Pessoas', '🫵', 'Niyé, táku eníčiyapi he?'],
  ['iyé', 'ele, ela (pronome enfático)', 'pronome', 'Pessoas', '🧑', 'Iyé kayéš.'],
  ['uŋkíyepi', 'nós (pronome enfático)', 'pronome', 'Pessoas', '🙌', 'Uŋkíyepi — Lakȟótiyapi uŋspéič’iyapi.'],
  ['wičháša', 'homem', 'substantivo', 'Pessoas', '👨', 'Wičháša kiŋ wašté.'],
  ['wíŋyaŋ', 'mulher', 'substantivo', 'Pessoas', '👩', 'Wíŋyaŋ kiŋ wašté.'],
  ['wakȟáŋyeža', 'criança', 'substantivo', 'Pessoas', '🧒', 'Wakȟáŋyeža kiŋ wašté.'],
  ['iná', 'mãe', 'substantivo', 'Pessoas', '👩', 'Iná — Linu emáčiyapi.'],
  ['até', 'pai', 'substantivo', 'Pessoas', '👨', 'Até kiŋ wašté.'],
  // ── Natureza ──
  ['wí', 'sol', 'substantivo', 'Natureza', '☀️', 'Wí kiŋ wašté.'],
  ['haŋwí', 'lua', 'substantivo', 'Natureza', '🌙', 'Haŋwí kiŋ wašté.'],
  ['wičháȟpi', 'estrela', 'substantivo', 'Natureza', '⭐', 'Wičháȟpi kiŋ ská.'],
  ['mní', 'água', 'substantivo', 'Natureza', '💧', 'Mní kiŋ wašté.'],
  ['makȟóčhe', 'terra, país, lugar', 'substantivo', 'Natureza', '🌍', 'Makȟóčhe kiŋ tȟáŋka.'],
  ['maȟpíya', 'céu, nuvem', 'substantivo', 'Natureza', '☁️', 'Maȟpíya kiŋ ská.'],
  ['pȟéta', 'fogo', 'substantivo', 'Natureza', '🔥', 'Pȟéta!'],
  // ── Animais ──
  ['šúŋka', 'cachorro', 'substantivo', 'Animais', '🐕', 'Šúŋka kiŋ sápa.'],
  ['šúŋkawakȟáŋ', 'cavalo (lit. “cachorro-sagrado”)', 'substantivo', 'Animais', '🐴', 'Šúŋkawakȟáŋ kiŋ ská.'],
  ['matȟó', 'urso', 'substantivo', 'Animais', '🐻', 'Matȟó kiŋ tȟáŋka.'],
  ['tȟatȟáŋka', 'bisão', 'substantivo', 'Animais', '🦬', 'Tȟatȟáŋka kiŋ tȟáŋka.'],
  ['waŋblí', 'águia (águia-real)', 'substantivo', 'Animais', '🦅', 'Waŋblí kiŋ wašté.'],
  ['zuzéča', 'cobra', 'substantivo', 'Animais', '🐍', 'Zuzéča kiŋ sápa.'],
  // ── Alimentação e Restaurantes ──
  ['aǧúyapi', 'pão (lit. “que se tosta por cima”)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Aǧúyapi kiŋ wašté.'],
  ['tȟaló', 'carne (lit. “macia de ruminante”)', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'Tȟaló kiŋ wašté.'],
  ['asáŋpi', 'leite (lit. “suco do peito”)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Asáŋpi kiŋ wašté.'],
  ['wakȟályapi', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Wakȟályapi kiŋ wašté.'],
  // ── Corpo ──
  ['napé', 'mão', 'substantivo', 'Corpo', '✋', 'Napé kiŋ wašté.'],
  ['ištá', 'olho', 'substantivo', 'Corpo', '👁️', 'Ištá kiŋ wašté.'],
  ['sí', 'pé, pata', 'substantivo', 'Corpo', '🦶', 'Sí kiŋ wašté.'],
  ['pȟá', 'cabeça', 'substantivo', 'Corpo', '🙂', 'Pȟá kiŋ wašté.'],
  ['čhaŋté', 'coração', 'substantivo', 'Corpo', '❤️', 'Čhaŋté kiŋ wašté.'],
  // ── Casa ──
  ['thípi', 'casa, moradia (deu origem à palavra “tipi” em português)', 'substantivo', 'Casa', '🏠', 'Thípi kiŋ tȟáŋka.'],
  // ── Números ──
  ['waŋží', 'um', 'numeral', 'Números', '1️⃣', 'Šúŋka waŋží.'],
  ['núŋpa', 'dois', 'numeral', 'Números', '2️⃣', 'Šúŋka núŋpa.'],
  ['yámni', 'três', 'numeral', 'Números', '3️⃣', 'Wičháȟpi yámni.'],
  ['tópa', 'quatro', 'numeral', 'Números', '4️⃣', 'Wičháȟpi tópa.'],
  ['záptaŋ', 'cinco', 'numeral', 'Números', '5️⃣', 'Wičháȟpi záptaŋ.'],
  ['šákpe', 'seis', 'numeral', 'Números', '6️⃣', 'Wakȟáŋyeža šákpe.'],
  ['šakówiŋ', 'sete', 'numeral', 'Números', '7️⃣', 'Wakȟáŋyeža šakówiŋ.'],
  ['šaglógaŋ', 'oito', 'numeral', 'Números', '8️⃣', 'Wakȟáŋyeža šaglógaŋ.'],
  ['napčíyuŋka', 'nove', 'numeral', 'Números', '9️⃣', 'Wakȟáŋyeža napčíyuŋka.'],
  ['wikčémna', 'dez', 'numeral', 'Números', '🔟', 'Wakȟáŋyeža wikčémna.'],
  // ── Verbos-chave ──
  ['wóta', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Wóta — wašté.'],
  ['yatkáŋ', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Yatkáŋ — wašté.'],
  ['čhíŋ', 'querer', 'verbo', 'Verbos-chave', '💭', 'Čhíŋ — wašté.'],
  ['thí', 'morar, viver', 'verbo', 'Verbos-chave', '🏠', 'Thí — wašté.'],
  ['yaŋká', 'estar, ficar, existir (lit. “estar sentado”: maŋké “eu estou”, naŋké “tu estás”)', 'verbo', 'Verbos-chave', '📍', 'Yaŋká — wašté.'],
  ['thečhíȟila', 'amar (geralmente usado como frase pronta: “eu te amo”)', 'verbo', 'Verbos-chave', '❤️', 'Thečhíȟila.'],
  // ── Cores ──
  ['sápa', 'preto', 'adjetivo', 'Cores', '⚫', 'Šúŋka kiŋ sápa.'],
  ['ská', 'branco', 'adjetivo', 'Cores', '⚪', 'Šúŋkawakȟáŋ kiŋ ská.'],
  ['šá', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mní kiŋ šá.'],
  ['zí', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Wí kiŋ zí.'],
  ['tȟó', 'azul, verde (o lakota antigo tratava os dois como uma só cor)', 'adjetivo', 'Cores', '🔵', 'Maȟpíya kiŋ tȟó.'],
  // ── Descrições ──
  ['tȟáŋka', 'grande', 'adjetivo', 'Descrições', '📏', 'Tȟatȟáŋka kiŋ tȟáŋka.'],
  ['číkʼala', 'pequeno', 'adjetivo', 'Descrições', '🤏', 'Wakȟáŋyeža kiŋ číkʼala.'],
];

export const VOCAB_LKT = buildVocab('lkt', ROWS);
