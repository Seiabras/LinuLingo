import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do palenquero (crioulo de San Basilio de Palenque, Colômbia; código ISO 639-3 “pln”,
 * Glottocode “pale1260”), nível A1 (unidades 1 e 2 — pacote incompleto, ver `incomplete` em index.ts).
 *
 * O palenquero é uma língua crioula pequena e pouco documentada (poucos milhares de falantes): não é
 * espanhol “errado”, mas uma língua com gramática própria, de base lexical espanhola e forte substrato
 * de línguas bantas (sobretudo o kikongo). Nada aqui foi inventado a partir do espanhol por semelhança:
 * cada palavra, cada partícula gramatical e cada frase de exemplo vem de uma fonte consultada de fato.
 * Fontes:
 *  - Wikipédia (inglês), artigo “Palenquero” (en.wikipedia.org/wiki/Palenquero): classificação
 *    (“Spanish Creole–Kikongo”), ausência de gênero gramatical, a partícula de plural “ma” (única
 *    flexão de origem kikongo), as quatro cópulas (e, ta, jue, senda), a tabela de vocabulário com
 *    palavras de origem africana e as poucas de origem portuguesa (mai, ten, ele, bae), e os dados de
 *    falantes (2.788 em 2005; 6.637 por etnia em 2018) e do reconhecimento da UNESCO em 2005.
 *  - Wikipédia (espanhol), artigo “Criollo palenquero” (es.wikipedia.org/wiki/Criollo_palenquero):
 *    fundação por cimarrones liderados por Benkos Biohó (1613/paz; ver nota em San_Basilio_de_Palenque
 *    abaixo), fonologia (queda do /s/ final de sílaba, nasalização antes de d/g/b, geminação), a tabela
 *    de partículas de tempo-aspecto-modo (ta, a, tan, taba, asé, pa), a tabela de pronomes pessoais, o
 *    texto do Pai-Nosso em palenquero, e a citação de Francia Márquez (2023) sobre o ensino da língua.
 *  - Wikipédia (espanhol e inglês), artigo “San Basilio de Palenque”: fundação por volta de 1603,
 *    liderança de Benkos Biohó, o acordo de 1713 com o bispo Antonio María Casiani, a UNESCO (proclamado
 *    em 2005, inscrito na lista representativa em 2008), o ritual fúnebre “lumbalú”, a dança “mapalé” e
 *    o boxeador Antonio Cervantes (“Kid Pambelé”).
 *  - Wikcionário (inglês), categoria “Palenquero lemmas” (en.wiktionary.org/wiki/Category:
 *    Palenquero_lemmas) e as entradas individuais agua, ele, enú, kuanto, lungá, morí, mujé, naa,
 *    ngombe, ngubá, tatá e utere — de onde vêm as etimologias específicas (ngombe e ngubá do kikongo;
 *    ele, morí, naa e utere do espanhol; a citação de 1987 “i kuanto utere tene?”, de Antoine J. Maduro,
 *    “Palenkero i papiamentu”).
 *  - Omniglot (omniglot.com/writing/palenquero.htm): alfabeto latino sem padrão ortográfico único,
 *    acento agudo marcando a sílaba tônica/tom alto, e o texto do Pai-Nosso em palenquero.
 *  - Glottolog (glottolog.org/resource/languoid/id/pale1260): código Glottolog “pale1260”, situação de
 *    perigo (“endangered”), nomes alternativos (Lengua, Palenque, Créole de Palenque).
 *
 * Frases de exemplo: as marcadas abaixo como “frase atestada” são citações diretas das fontes (a
 * maioria do artigo da Wikipédia em espanhol ou do Pai-Nosso em palenquero). As demais foram MONTADAS
 * combinando só palavras e regras gramaticais confirmadas nas fontes (ordem sujeito-verbo-objeto;
 * partícula de tempo sempre antes do verbo; “ma” sempre antes do substantivo) — nunca frases idiomáticas
 * inventadas. As fontes consultadas não registram pontuação de abertura (¿/¡) nos exemplos citados, por
 * isso os exemplos aqui também não usam — para não inventar uma convenção ortográfica sem fonte.
 *
 * Duas lacunas honestas: as fontes consultadas não registram vocabulário de partes do corpo nem
 * numerais além de “dois” (ndo, citado só como exemplo de nasalização) — por isso não há categoria de
 * Corpo, e Números tem uma palavra só. Preferiu-se isso a inventar um corpo ou uma lista de 1 a 10 sem
 * fonte (ver `incomplete` em index.ts).
 */
export const ROWS: VocabRow[] = [
  // ── Essenciais (pronomes à parte, em Pessoas) ──
  ['nu', 'não (nega o verbo; pode vir depois dele, ou nas duas pontas da frase)', 'advérbio', 'Essenciais', '🚫', 'Bo é mamá mí nu.'], // frase atestada (Wikipédia inglês)
  ['naa', 'nada (do espanhol “nada”)', 'pronome', 'Essenciais', '0️⃣', 'Suto ten naa.'],
  ['ta', 'estar; (antes de um verbo) partícula de presente contínuo/hábito — é também a cópula de estado temporário ou de localização', 'verbo', 'Essenciais', '⏳', 'Ele ta trabajá.'], // frase atestada
  ['a', '(antes de um verbo) partícula de passado', 'partícula', 'Essenciais', '✅', 'Bo a viní?'], // frase atestada
  ['tan', '(antes de um verbo) partícula de futuro', 'partícula', 'Essenciais', '🔜', 'Ané tan comé?'], // frase atestada
  ['taba', '(antes de um verbo) partícula de passado contínuo (imperfectivo)', 'partícula', 'Essenciais', '⏪', 'Ele taba kaminá.'], // frase atestada
  ['asé', '(antes de um verbo) partícula de hábito', 'partícula', 'Essenciais', '🔁', 'Moná asé vivi.'], // frase atestada (“Moná ase vivi…”)
  ['pa', '(antes de um verbo) partícula de propósito/subjuntivo: para que', 'partícula', 'Essenciais', '🎯', 'Pa bo trabajá.'], // frase atestada
  ['ma', '(antes de um substantivo) marca o plural — do prefixo kikongo “ma-”, a única flexão de origem kikongo da língua', 'partícula', 'Essenciais', '➕', 'Ma ngaína.'], // frase atestada (“ma ngaína”, as galinhas)
  ['e', 'ser (cópula de estado permanente, como o “ser” do espanhol)', 'verbo', 'Essenciais', '🟰', 'Suto e palenquero.'],
  ['jue', 'ser (cópula usada com substantivos)', 'verbo', 'Essenciais', '🪪', 'Ele jue tatá.'],
  ['senda', 'ser/estar (cópula de predicado permanente, com substantivo ou adjetivo) — citada como “sendá” no Pai-Nosso em palenquero', 'verbo', 'Essenciais', '🏷️', 'Santifikaro sendá nombre si.'], // frase atestada (Pai-Nosso em palenquero)
  ['kusa', 'coisa (do espanhol “cosa”)', 'substantivo', 'Essenciais', '🧩', 'Kuanto kusa bo ten?'],
  ['riba', 'em cima, no alto (do espanhol “arriba”)', 'advérbio', 'Essenciais', '⬆️', 'Tatá suto ke ta riba sielo.'], // frase atestada (Pai-Nosso em palenquero)
  ['nombre', 'nome (do espanhol “nombre”)', 'substantivo', 'Essenciais', '🏷️', 'Santifikaro sendá nombre si.'], // frase atestada (Pai-Nosso em palenquero)
  // ── Pessoas (pronomes e parentesco) ──
  ['í', 'eu (pronome de 1ª pessoa do singular; forma forte “yo”)', 'pronome', 'Pessoas', '🙋', 'Í a viní.'],
  ['bo', 'tu, você (pronome de 2ª pessoa do singular; forma forte “uté”)', 'pronome', 'Pessoas', '👉', 'Bo a viní?'], // frase atestada
  ['ele', 'ele, ela (pronome de 3ª pessoa do singular, sem distinção de gênero)', 'pronome', 'Pessoas', '🧑', 'Ele ta trabajá.'], // frase atestada
  ['suto', 'nós (forma forte “uto”)', 'pronome', 'Pessoas', '👥', 'Suto e palenquero.'],
  ['utere', 'vocês (do espanhol “ustedes”)', 'pronome', 'Pessoas', '🫵', 'Kuanto utere tene?'], // frase atestada (“i kuanto utere tene?”, 1987)
  ['enú', 'vocês (forma revitalizada, sinônimo de “utere”)', 'pronome', 'Pessoas', '🫶', 'Enú ta chitiá palenquero.'],
  ['ané', 'eles, elas (pronome de origem banta)', 'pronome', 'Pessoas', '👫', 'Ané tan comé?'], // frase atestada
  ['tatá', 'pai', 'substantivo', 'Pessoas', '👨', 'Ele jue tatá.'],
  ['mai', 'mãe (de possível origem portuguesa, “mãe”, segundo a Wikipédia)', 'substantivo', 'Pessoas', '👩', 'Mai ten posá.'],
  ['mamá', 'mãe, mamãe (do espanhol “mamá”)', 'substantivo', 'Pessoas', '👩', 'Bo é mamá mí nu.'], // frase atestada
  ['mujé', 'mulher (do espanhol “mujer”)', 'substantivo', 'Pessoas', '👩', 'Ese mujé ta ngolo.'], // frase atestada
  ['moná', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'Moná asé vivi.'], // frase atestada
  ['hemano', 'irmão (do espanhol “hermano”)', 'substantivo', 'Pessoas', '🧑', 'Suto ten hemano.'],
  ['foratero', 'forasteiro, estrangeiro (do espanhol “forastero”)', 'substantivo', 'Pessoas', '🧳', 'Ele jue foratero.'],
  ['cateyano', 'castelhano, espanhol — a língua ou quem a fala (do espanhol “castellano”)', 'substantivo', 'Pessoas', '🗣️', 'Suto nu chitiá cateyano.'],
  ['cuagro', 'grupo tradicional de idade de Palenque, que reúne gerações para o trabalho e os ritos da vida', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Moná ten cuagro.'],
  // ── Animais ──
  ['ngombe', 'gado, vaca (do kikongo “ngombe”)', 'substantivo', 'Animais', '🐄', 'Suto ten ngombe.'],
  ['ngaína', 'galinha (de origem kikongo)', 'substantivo', 'Animais', '🐔', 'Ma ngaína.'], // frase atestada
  ['ceddo', 'porco (do espanhol “cerdo”)', 'substantivo', 'Animais', '🐖', 'Mai ten ceddo.'],
  // ── Alimentação ──
  ['ngubá', 'amendoim (do kikongo “nguba”)', 'substantivo', 'Alimentação', '🥜', 'Mai ten ngubá.'],
  ['agua', 'água', 'substantivo', 'Alimentação', '💧', 'Suto ten agua.'],
  ['pekáo', 'peixe (do espanhol “pescado”, com queda do /s/ no fim da sílaba)', 'substantivo', 'Alimentação', '🐟', 'Moná ten pekáo.'],
  // ── Casa ──
  ['posá', 'casa', 'substantivo', 'Casa', '🏠', 'Ma posá.'], // frase atestada (“ma posá”, as casas)
  ['pueta', 'porta (do espanhol “puerta”)', 'substantivo', 'Casa', '🚪', 'Suto ten pueta.'],
  ['bumbilo', 'lixo', 'substantivo', 'Casa', '🗑️', 'Posá ten bumbilo.'],
  ['chepa', 'roupa', 'substantivo', 'Casa', '👕', 'Mai ten chepa.'],
  ['tambore', 'tambor', 'substantivo', 'Casa', '🥁', 'Suto ten tambore.'],
  ['burú', 'dinheiro (de origem africana)', 'substantivo', 'Casa', '💰', 'Suto nu ten burú.'],
  // ── Natureza ──
  ['flo', 'flor (do espanhol “flor”)', 'substantivo', 'Natureza', '🌸', 'Mai ten flo.'],
  ['tabaco', 'tabaco, fumo', 'substantivo', 'Natureza', '🌿', 'Tatá ten tabaco.'],
  ['sielo', 'céu (do espanhol “cielo”)', 'substantivo', 'Natureza', '☁️', 'Tatá suto ke ta riba sielo.'], // frase atestada (Pai-Nosso em palenquero)
  // ── Números ──
  ['ndo', 'dois (do espanhol “dos”, com nasalização: d → nd, e queda do /s/ final)', 'numeral', 'Números', '2️⃣', 'Suto ten ndo ngombe.'],
  // ── Descrições ──
  ['ngolo', 'gordo(a) (de origem kikongo)', 'adjetivo', 'Descrições', '🍖', 'Ese mujé ta ngolo.'], // frase atestada
  ['ngande', 'grande (do espanhol “grande”, com nasalização: g → ng)', 'adjetivo', 'Descrições', '📏', 'Posá e ngande.'],
  // ── Verbos-chave ──
  ['trabajá', 'trabalhar (do espanhol “trabajar”)', 'verbo', 'Verbos-chave', '💼', 'Ele ta trabajá.'], // frase atestada
  ['viní', 'vir (do espanhol “venir”; citada também como “miní” no Pai-Nosso em palenquero)', 'verbo', 'Verbos-chave', '🚶', 'Bo a viní?'], // frase atestada
  ['comé', 'comer (do espanhol “comer”)', 'verbo', 'Verbos-chave', '🍽️', 'Ané tan comé?'], // frase atestada
  ['kaminá', 'andar, caminhar (do espanhol “caminar”)', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Ele taba kaminá.'], // frase atestada
  ['vivi', 'viver (do espanhol “vivir”)', 'verbo', 'Verbos-chave', '🌱', 'Moná asé vivi.'], // frase atestada
  ['morí', 'morrer (do espanhol “morir”)', 'verbo', 'Verbos-chave', '💀', 'Ele a morí.'],
  ['lungá', 'morrer (sinônimo de “morí”)', 'verbo', 'Verbos-chave', '⚰️', 'Ele a lungá.'],
  ['bae', 'ir (de possível origem portuguesa, segundo a Wikipédia)', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Í a bae.'],
  ['ten', 'ter (de possível origem portuguesa; citada também como “tene” numa frase de 1987)', 'verbo', 'Verbos-chave', '🤲', 'Suto ten ngombe.'],
  ['mbendé', 'vender (do espanhol “vender”, com nasalização: b → mb)', 'verbo', 'Verbos-chave', '💱', 'Mai ta mbendé ngubá.'],
  ['chitiá', 'falar (de origem africana, segundo a Wikipédia)', 'verbo', 'Verbos-chave', '🗣️', 'Suto ta chitiá palenquero.'],
  // ── Perguntas ──
  ['onde', 'onde (do espanhol “donde”)', 'advérbio', 'Perguntas', '❓', 'Onde bo ta?'],
  ['kuanto', 'quanto, quantos (do espanhol “cuánto”)', 'pronome', 'Perguntas', '❓', 'Kuanto utere tene?'], // frase atestada, recortada de “i kuanto utere tene?” (1987)
];

export const VOCAB_PLN = buildVocab('pln', ROWS);
