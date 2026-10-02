import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do eʋe (Eʋegbe), língua gbe de Gana e do Togo — ISO 639-1 «ee», ISO 639-3 «ewe».
 *
 * POR QUE ESTE PACOTE EXISTE: depois do pacote de fon (ver `src/data/fon/`), o dono do projeto pediu
 * outras línguas gbe, citando o eʋe nomeadamente. O eʋe é o maior dos cinco grupos gbe (Capo, 1988) —
 * falado por uns 5 milhões de pessoas (en.wikipedia.org/wiki/Ewe_language) no sudeste de Gana (Região
 * do Volta) e no sul do Togo — e é parente próximo do fon dentro da família gbe (ver `cognateNote` em
 * index.ts para o que as fontes confirmam, e o que não confirmam, sobre esse parentesco).
 *
 * FONTES E NÍVEIS DE CONFIANÇA (nada aqui foi inventado; o que não achamos, não entrou):
 *
 * Nível A — Wiktionary (en.wiktionary.org), verbete dedicado ao eʋe, com classe gramatical e (quando
 * disponível) IPA, tom e etimologia a partir do Proto-Gbe, muitos comparando com o fon, o gun, o aja e
 * o saxwe gbe: ɖeka, eve, etɔ̃, ene, atɔ̃, ade, adre, enyi, asieke, ewo, nɔvi, fofo, nɔ, nyɔnu, vi, ƒome,
 * nye, wò, eya, mí, wo, ame, tsi, ati, ɣe, anyigba, avu, gbɔ̃, alẽ, koklo, dzata, abolo, aha, asi, nu,
 * ŋku, dzi, xɔ, zɔ, trɔ, wɔ, kpɔ, dzĩ, yibɔ, ɣi, nyo, gã, sue, ga, agbalẽ, akpe, Eʋe. «ɖu» (comer) não
 * tem verbete próprio em eʋe, mas é citado como cognato eʋe no verbete gun de «ɖu» (comer/morder).
 *
 * Nível B — Wikipédia (artigo «Ewe language» em inglês, com a tabela de tons, a ordem das palavras e o
 * exemplo de negação de Agbedor 1994 «Kofi de suku. / Kofi mede suku o.»; artigo «Ewe people», com a
 * população por país; artigo «Serial verb construction», com o exemplo eʋe «Kofí trɔ dzo kpoo»; artigo
 * «Éwé (langue)» da Wikipédia em francês, com a frase eʋe da Declaração Universal dos Direitos Humanos
 * «Wodzi amegbetɔwo katã ablɔɖeviwoe eye wodzena bubu kple gomekpɔkpɔ sɔsɔe», fonte de «eye» e «kple»
 * como conectivos e de «katã», «todo(s)»); tabelas de tradução do Wiktionary (não verbetes dedicados,
 * mas listadas nas páginas em inglês «black», «red», «welcome»): yibɔ (preto), dzĩ (já tem verbete
 * também), wòe zɔ (bem-vindo, de «wò» + «zɔ», literalmente algo como «você andou bem»).
 *
 * «meɖekuku» (por favor) só aparece citado em prosa no artigo «Ewe language» da Wikipédia (ao lado de
 * «akpe», agradecer), sem verbete próprio no Wiktionary — por isso veio com menos confiança que as
 * palavras de Nível A.
 *
 * LACUNAS HONESTAS (preferimos deixar de fora a inventar): não achamos um verbo «ser/estar» (cópula)
 * nem um verbo «ter» (posse) confirmados para o eʋe nas fontes consultadas — por isso nenhuma frase
 * deste pacote usa «é/está» ou «tenho»; as frases juntam substantivo+artigo («xɔ la», a casa) ou
 * sujeito+verbo+objeto, do jeito que as fontes realmente mostram. Também não achamos uma saudação
 * simples tipo «oi»/«bom dia», nem palavras para «mercado» ou «trabalho» — por isso elas não entraram
 * aqui. Este pacote também não tem, ainda, uma função `reading` (romanização ou marcação de tom): as
 * fontes mostram que o eʋe normalmente NÃO marca o tom na escrita do dia a dia (só em obras de
 * referência), e é assim, sem tom marcado, que as palavras abaixo aparecem — exceto o til de
 * nasalização (ɔ̃, ẽ, ĩ etc.), que É parte da ortografia normal, não uma marca de tom.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['wòe zɔ', 'bem-vindo', 'expressão', 'Expressões', '👋', 'Wòe zɔ!'],
  ['akpe', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Akpe!'],
  ['meɖekuku', 'por favor', 'expressão', 'Expressões', '🙇', 'Meɖekuku.'],

  // ── Essenciais ──
  ['Eʋe', 'eʋe (o povo e a língua)', 'substantivo', 'Essenciais', '🗣️', 'Eʋe.'],
  ['la', 'o, a (artigo definido — vem DEPOIS da palavra, nunca antes)', 'artigo', 'Essenciais', '🔹', 'Xɔ la.'],
  ['ga', 'dinheiro (também: metal)', 'substantivo', 'Essenciais', '💰', 'Nye kpɔ ga.'],
  ['agbalẽ', 'livro', 'substantivo', 'Essenciais', '📖', 'Agbalẽ la.'],
  ['eye', 'e (liga duas frases ou ações)', 'conjunção', 'Essenciais', '➕', 'Nye ɖu abolo eye no tsi.'],
  ['kple', 'com, e (liga dois nomes)', 'preposição', 'Essenciais', '🤝', 'Fofo kple nɔ.'],
  ['katã', 'todo(s), tudo', 'pronome', 'Essenciais', '🌐', 'Ƒome la katã.'],

  // ── Pessoas ──
  ['ame', 'pessoa, ser humano; alguém', 'substantivo', 'Pessoas', '🧑', 'Ame la.'],
  ['ƒome', 'família', 'substantivo', 'Pessoas', '👨‍👩‍👧', 'Ƒome la.'],
  ['fofo', 'pai', 'substantivo', 'Pessoas', '👨', 'Fofo la.'],
  ['nɔ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Nɔ la.'],
  ['nɔvi', 'irmão, irmã', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Nɔvi la.'],
  ['vi', 'filho, filha, criança', 'substantivo', 'Pessoas', '👶', 'Vi la.'],
  ['nyɔnu', 'mulher', 'substantivo', 'Pessoas', '👩', 'Nyɔnu la.'],
  ['ŋutsu', 'homem', 'substantivo', 'Pessoas', '🧔', 'Ŋutsu la.'],
  ['nye', 'eu', 'pronome', 'Pessoas', '🙋', 'Nye kpɔ koklo.'],
  ['wò', 'você, te', 'pronome', 'Pessoas', '👉', 'Wò trɔ.'],
  ['eya', 'ele, ela (sem distinção de gênero)', 'pronome', 'Pessoas', '🧑', 'Eya no tsi.'],
  ['mí', 'nós', 'pronome', 'Pessoas', '🙌', 'Mí zɔ.'],
  ['wo', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Wo ɖu abolo.'],

  // ── Natureza ──
  ['tsi', 'água', 'substantivo', 'Natureza', '💧', 'Tsi la.'],
  ['ati', 'árvore; pau, bastão', 'substantivo', 'Natureza', '🌳', 'Ati la.'],
  ['ɣe', 'sol', 'substantivo', 'Natureza', '☀️', 'Ɣe la.'],
  ['anyigba', 'terra, chão; país', 'substantivo', 'Natureza', '🌍', 'Anyigba la.'],

  // ── Animais ──
  ['avu', 'cachorro', 'substantivo', 'Animais', '🐕', 'Avu la.'],
  ['gbɔ̃', 'cabra', 'substantivo', 'Animais', '🐐', 'Gbɔ̃ la.'],
  ['alẽ', 'ovelha', 'substantivo', 'Animais', '🐑', 'Alẽ la.'],
  ['koklo', 'galinha', 'substantivo', 'Animais', '🐔', 'Koklo la.'],
  ['dzata', 'leão', 'substantivo', 'Animais', '🦁', 'Dzata la dzo.'],

  // ── Alimentação e Restaurantes ──
  ['abolo', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Nye ɖu abolo.'],
  ['aha', 'bebida alcoólica, vinho de palma', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Fofo no aha.'],

  // ── Corpo ──
  ['asi', 'mão', 'substantivo', 'Corpo', '✋', 'Asi la.'],
  ['nu', 'boca', 'substantivo', 'Corpo', '👄', 'Nu la.'],
  ['ŋku', 'olho', 'substantivo', 'Corpo', '👁️', 'Ŋku la.'],
  ['dzi', 'coração', 'substantivo', 'Corpo', '❤️', 'Dzi la.'],

  // ── Casa ──
  ['xɔ', 'casa', 'substantivo', 'Casa', '🏠', 'Xɔ la.'],

  // ── Números ──
  ['ɖeka', 'um', 'numeral', 'Números', '1️⃣', 'Agbalẽ ɖeka.'],
  ['eve', 'dois', 'numeral', 'Números', '2️⃣', 'Koklo eve.'],
  ['etɔ̃', 'três', 'numeral', 'Números', '3️⃣', 'Avu etɔ̃.'],
  ['ene', 'quatro', 'numeral', 'Números', '4️⃣', 'Gbɔ̃ ene.'],
  ['atɔ̃', 'cinco', 'numeral', 'Números', '5️⃣', 'Alẽ atɔ̃.'],
  ['ade', 'seis', 'numeral', 'Números', '6️⃣', 'Ati ade.'],
  ['adre', 'sete', 'numeral', 'Números', '7️⃣', 'Xɔ adre.'],
  ['enyi', 'oito; vaca', 'numeral', 'Números', '8️⃣', 'Agbalẽ enyi.'],
  ['asieke', 'nove', 'numeral', 'Números', '9️⃣', 'Koklo asieke.'],
  ['ewo', 'dez', 'numeral', 'Números', '🔟', 'Ame ewo.'],

  // ── Verbos-chave ──
  ['zɔ', 'andar, caminhar', 'verbo', 'Verbos-chave', '🚶', 'Mí zɔ.'],
  ['dzo', 'partir, sair, ir embora', 'verbo', 'Verbos-chave', '🏃', 'Dzata la dzo.'],
  ['trɔ', 'virar, voltar-se', 'verbo', 'Verbos-chave', '🔄', 'Wò trɔ.'],
  ['wɔ', 'fazer', 'verbo', 'Verbos-chave', '🔨', 'Ame la wɔ xɔ.'],
  ['kpɔ', 'ver, olhar', 'verbo', 'Verbos-chave', '👀', 'Nye kpɔ dzata.'],
  ['ɖu', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Nye ɖu abolo.'],
  ['no', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Eya no tsi.'],

  // ── Descrições ──
  ['dzĩ', 'vermelho', 'adjetivo', 'Descrições', '🔴', 'Avu dzĩ.'],
  ['yibɔ', 'preto', 'adjetivo', 'Descrições', '⚫', 'Avu yibɔ.'],
  ['ɣi', 'branco', 'adjetivo', 'Descrições', '⚪', 'Koklo ɣi.'],
  ['nyo', 'bom', 'adjetivo', 'Descrições', '👍', 'Agbalẽ nyo.'],
  ['gã', 'grande', 'adjetivo', 'Descrições', '🔼', 'Xɔ gã.'],
  ['sue', 'pequeno', 'adjetivo', 'Descrições', '🔽', 'Xɔ sue.'],
];

export const VOCAB_EE = buildVocab('ee', ROWS);
