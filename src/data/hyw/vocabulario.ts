import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do armênio ocidental, escrito com a ortografia clássica (mesrropiana) que a diáspora
 * manteve — e não com a reforma soviética de 1922, usada só no armênio oriental (ver `hy/`). A
 * pronúncia aproximada vem entre parênteses na tradução.
 *
 * Duas camadas de diferença em relação ao armênio oriental, as duas verificadas palavra por palavra
 * no Wikcionário (en.wiktionary.org) antes de entrar aqui — nunca por suposição a partir do oriental:
 *
 * 1) TROCA DE SONORIDADE: o armênio clássico tinha três séries de oclusivas/africadas (sonora,
 *    surda simples, surda aspirada). O oriental manteve as três; o ocidental reduziu a duas,
 *    trocando a sonoridade da sonora e da surda simples entre si — a aspirada não muda. Por
 *    exemplo, "Բարև" soa "barev" no oriental, mas no ocidental vira "parev" (բ sonoro → p
 *    aspirado). Ver o tópico de gramática "hyw-g2" para a tabela completa e as fontes.
 * 2) PALAVRAS E GRAFIAS PRÓPRIAS: além da troca de som, o ocidental tem palavras diferentes para
 *    coisas básicas (pronomes, "ser", "ir", "saber", "pequeno") e mantém grafias clássicas que o
 *    oriental simplificou (ex.: "ույ"→"ոյ", "ություն"→"ութիւն", "ավ"→"աւ"). Cada uma está marcada
 *    abaixo com a fonte que a confirma.
 *
 * Pacote incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote em index.ts.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ── (Western_Armenian, en.wikipedia.org; e Wiktionary por palavra)
  ['Բարև', 'oi, olá (parev — no oriental soa “barev”: ver hyw-g2)', 'interjeição', 'Expressões', '👋', 'Բարև, ինչպէ՞ս ես:'],
  ['Բարի լոյս', 'bom dia (pari loys — grafia clássica; o oriental reformado escreve “լույս”)', 'interjeição', 'Expressões', '🌅', 'Բարի լոյս, մա՛յրիկ:'],
  ['Ցտեսութիւն', 'tchau, até logo (tsdesoutioun — clássico “-ութիւն”; o oriental reformado escreve “-ություն”)', 'interjeição', 'Expressões', '👋', 'Ցտեսութիւն, վաղը կը տեսնուինք:'],
  ['Շնորհակալութիւն', 'obrigado (shnorhagaloutioun — clássico “-ութիւն”, confirmado no Wikcionário)', 'interjeição', 'Expressões', '🙏', 'Շատ շնորհակալութիւն:'],
  ['Ինչպէ՞ս ես', 'como vai? informal (intchbéss ess — clássico “ինչպէս” com է, confirmado no Wikcionário)', 'expressão', 'Expressões', '🙂', 'Բարև, Անի՛: Ինչպէ՞ս ես:'],
  ['Խնդրեմ', 'por favor; de nada (khntʻrem — դ vira tʻ aspirado: ver hyw-g2)', 'interjeição', 'Expressões', '🙏', 'Մէկ բաժակ ջուր, խնդրեմ:'],
  // ── Essenciais ──
  ['Այո', 'sim (ayo)', 'advérbio', 'Essenciais', '👍', 'Այո, շնորհակալութիւն:'],
  ['Ոչ', 'não (votch’)', 'advérbio', 'Essenciais', '👎', 'Ոչ, շնորհակալութիւն:'],
  ['եւ', 'e (ev — grafia clássica; o oriental reformado usa a letra única “և”)', 'conjunção', 'Essenciais', null, 'Հաց եւ պանիր:'],
  ['ուր', 'onde (our — no ocidental serve tanto para “onde” quanto para “para onde”; o oriental usa “որտեղ” para lugar)', 'advérbio', 'Essenciais', '❓', 'Ուր կ՚երթաս:'],
  ['ինչ', 'o que, que (intch’)', 'pronome', 'Essenciais', '❓', 'Ինչ է ասիկա:'],
  ['ով', 'quem (ov)', 'pronome', 'Essenciais', '❓', 'Ով ես դուն:'],
  ['շատ', 'muito (shad — ատ > ադ: ver hyw-g2)', 'advérbio', 'Essenciais', null, 'Շատ շնորհակալութիւն:'],
  // ── Pessoas (pronomes próprios do ocidental: ան, անոնք, դուն — confirmados no Wikcionário) ──
  ['ես', 'eu (yess)', 'pronome', 'Pessoas', '🙋', 'Ես Անի եմ:'],
  ['դուն', 'tu, você — forma ocidental (toun; no oriental é “դու”, “dou”)', 'pronome', 'Pessoas', '🫵', 'Իսկ դուն, ի՞նչպէս կը կոչուիս:'],
  ['ան', 'ele, ela — forma ocidental (an; no oriental é “նա”, “na”)', 'pronome', 'Pessoas', '👤', 'Ան Պէյրութէն է:'],
  ['մենք', 'nós (menk’)', 'pronome', 'Pessoas', '🙌', 'Մենք բարեկամներ ենք:'],
  ['դուք', 'vocês; o senhor, a senhora, formal (touk’ — դ vira tʻ aspirado: ver hyw-g2)', 'pronome', 'Pessoas', '🫵', 'Դուք շատ բարի էք:'],
  ['անոնք', 'eles, elas — forma ocidental (anonk’; no oriental é “նրանք”, “nrank’”)', 'pronome', 'Pessoas', '👥', 'Անոնք հայերէն կը խօսին:'],
  ['անուն', 'nome (anoun)', 'substantivo', 'Pessoas', '🏷️', 'Իմ անունս Լինու է:'],
  ['ընտանիք', 'família (ëndanik’ — տ > դ: ver hyw-g2)', 'substantivo', 'Pessoas', '👪', 'Իմ ընտանիքս մեծ է:'],
  ['հայր', 'pai (hayr)', 'substantivo', 'Pessoas', '👨', 'Իմ հայրս Հալէպէն է:'],
  ['մայր', 'mãe (mayr)', 'substantivo', 'Pessoas', '👩', 'Իմ մայրս ուսուցչուհի է:'],
  ['եղբայր', 'irmão (yeghpʻayr — բ > փ: ver hyw-g2)', 'substantivo', 'Pessoas', '🧑', 'Ես մէկ եղբայր ունիմ:'],
  ['քոյր', 'irmã (k’oyr — grafia clássica; o oriental reformado escreve “քույր”)', 'substantivo', 'Pessoas', '🧑', 'Իմ քոյրս պզտիկ է:'],
  // ── Verbos-chave (ըլլալ, երթալ, գիտնալ, խօսիլ: palavras e terminações próprias do ocidental) ──
  ['ըլլալ', 'ser, estar — infinitivo ocidental (ëllal; no oriental é “լինել”, linel; o presente ես եմ/դուն ես/ան է é igual nos dois)', 'verbo', 'Verbos-chave', '🧑', 'Ես Պրազիլէն եմ:'],
  ['ունենալ', 'ter (ես ունիմ, դուն ունիս, ան ունի)', 'verbo', 'Verbos-chave', '🤲', 'Ես մէկ եղբայր ունիմ:'],
  ['խօսիլ', 'falar — infinitivo ocidental em -իլ (khōsil; no oriental é “խոսել”, khosel, confirmado no Wikcionário)', 'verbo', 'Verbos-chave', '🗣️', 'Ես քիչ մը հայերէն կը խօսիմ:'],
  ['գիտնալ', 'saber — forma ocidental (k’idnal; no oriental é “գիտենալ”, gitenal)', 'verbo', 'Verbos-chave', '🧠', 'Ես չեմ գիտեր:'],
  ['երթալ', 'ir — forma ocidental (ertʻal; no oriental é “գնալ”, gnal, usado só como variante dialetal)', 'verbo', 'Verbos-chave', '🚶', 'Ես տուն կ՚երթամ:'],
  ['ուտել', 'comer (oudel — տ > դ: ver hyw-g2)', 'verbo', 'Verbos-chave', '🍽️', 'Ես հաց եւ պանիր կ՚ուտեմ:'],
  ['խմել', 'beber (khmel)', 'verbo', 'Verbos-chave', '🥤', 'Ես ջուր կը խմեմ:'],
  // ── Alimentação e Restaurantes ──
  ['ջուր', 'água (tchour — ջ > չ aspirado: ver hyw-g2)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Մէկ բաժակ ջուր, շնորհակալութիւն:'],
  ['հաց', 'pão (hats’)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Հացը թարմ է:'],
  ['կաթ', 'leite (gatʻ — կ > գ: ver hyw-g2)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Կաթը ճերմակ է:'],
  ['պանիր', 'queijo (banir — պ > բ: ver hyw-g2)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Հայկական պանիրը համով է:'],
  ['սուրճ', 'café (sourdj — ճ > ջ sonoro: ver hyw-g2)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Մէկ սուրճ, շնորհակալութիւն:'],
  // ── Casa ──
  ['տուն', 'casa (doun — տ > դ: ver hyw-g2; repare que soa quase como “դուն”/toun, “tu”, no sentido contrário)', 'substantivo', 'Casa', '🏠', 'Իմ տունս պզտիկ է:'],
  // ── Animais ──
  ['շուն', 'cachorro (shoun)', 'substantivo', 'Animais', '🐕', 'Շունը կը քնանայ:'],
  ['կատու', 'gato (gadou — կ > գ, տ > դ: ver hyw-g2)', 'substantivo', 'Animais', '🐈', 'Կատուն սեւ է:'],
  // ── Números (mostram a troca de sonoridade em ação, letra por letra) ──
  ['մեկ', 'um (meg — կ > գ: ver hyw-g2)', 'numeral', 'Números', '1️⃣', 'Մէկ սուրճ, շնորհակալութիւն:'],
  ['երկու', 'dois (yergou — կ > գ: ver hyw-g2)', 'numeral', 'Números', '2️⃣', 'Ես երկու եղբայր ունիմ:'],
  ['երեք', 'três (yerek’ — ք aspirado não muda)', 'numeral', 'Números', '3️⃣', 'Երեք բարեկամ:'],
  ['չորս', 'quatro (tchors — չ aspirado não muda)', 'numeral', 'Números', '4️⃣', 'Կատուն չորս ոտք ունի:'],
  ['հինգ', 'cinco (hink’ — գ > ք aspirado: ver hyw-g2)', 'numeral', 'Números', '5️⃣', 'Հինգ օր:'],
  ['վեց', 'seis (vets’ — ց aspirado não muda)', 'numeral', 'Números', '6️⃣', 'Վեց ժամ:'],
  ['եօթ', 'sete (yotʻ — grafia clássica; o oriental reformado escreve “յոթ”)', 'numeral', 'Números', '7️⃣', 'Շաբաթը եօթ օր ունի:'],
  ['ութ', 'oito (outʻ)', 'numeral', 'Números', '8️⃣', 'Ութ ժամ:'],
  ['ինը', 'nove (iné)', 'numeral', 'Números', '9️⃣', 'Ինը տարեկան:'],
  ['տասը', 'dez (dassë — տ > դ: ver hyw-g2)', 'numeral', 'Números', '🔟', 'Տասը տարեկան:'],
  // ── Corpo ──
  ['գլուխ', 'cabeça (k’loukh — գ > ք aspirado: ver hyw-g2)', 'substantivo', 'Corpo', '👤', 'Իմ գլուխս կը ցաւի:'],
  ['ձեռք', 'mão (tserk’ — ձ > ց aspirado: ver hyw-g2)', 'substantivo', 'Corpo', '✋', 'Ես երկու ձեռք ունիմ:'],
  ['ոտք', 'pé (vodk’ — տ > դ: ver hyw-g2)', 'substantivo', 'Corpo', '🦶', 'Կատուն չորս ոտք ունի:'],
  ['աչք', 'olho (atch’k’ — չ, ք aspirados não mudam)', 'substantivo', 'Corpo', '👁️', 'Իմ աչքերս կապոյտ են:'],
  // ── Descrições ──
  ['լաւ', 'bom; bem (lav — grafia clássica; o oriental reformado escreve “լավ”)', 'adjetivo', 'Descrições', '👌', 'Հացը լաւ է:'],
  ['վատ', 'ruim, mau (vad — տ > դ: ver hyw-g2)', 'adjetivo', 'Descrições', '👎', 'Եղանակը վատ է:'],
  ['մեծ', 'grande (medz — ծ > ձ sonoro: ver hyw-g2)', 'adjetivo', 'Descrições', '📏', 'Իմ ընտանիքս մեծ է:'],
  ['պզտիկ', 'pequeno — forma ocidental (bzdig; no oriental é “փոքր”, pʻokʻr; confirmado no Wikcionário como forma ocidental de “պստիկ”)', 'adjetivo', 'Descrições', '📏', 'Կատուն պզտիկ է:'],
  ['սպիտակ', 'branco (sbidag — պ > բ, տ > դ, կ > գ: ver hyw-g2)', 'adjetivo', 'Cores', '⚪', 'Կաթը սպիտակ է:'],
  ['սեւ', 'preto (sev — grafia clássica; o oriental reformado escreve “սև”)', 'adjetivo', 'Cores', '⚫', 'Կատուն սեւ է:'],
  ['կարմիր', 'vermelho (garmir — կ > գ: ver hyw-g2)', 'adjetivo', 'Cores', '🔴', 'Խնձորը կարմիր է:'],
];

export const VOCAB_HYW = buildVocab('hyw', ROWS);
