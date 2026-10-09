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
 * Pacote agora cobre A1 e A2 (unidades 1 a 4) — ver o campo `incomplete` do pacote em index.ts.
 *
 * Fontes das 24 palavras novas do A2 (unidades 3 e 4), cada uma conferida no próprio verbete do
 * Wikcionário em inglês (en.wiktionary.org/wiki/<palavra>), checando sempre a seção/linha marcada
 * "(Western Armenian)" antes de aceitar a pronúncia ou a grafia — nunca por suposição a partir do
 * oriental: օր (dia, plural օրեր), ժամ (hora, plural ժամեր), շաբաթ (semana, plural շաբաթներ), ամիս
 * (mês, plural ամիսներ), տարի (ano, plural տարիներ, pronúncia ocidental com դ sonoro: "dari", não
 * "tari"), այսօր (hoje, com a nota do próprio verbete: "note the initial stress in Western
 * Armenian"), քաղաք (cidade, plural քաղաքներ), փողոց (rua, pronúncia ocidental sem aspiração:
 * /poˈʁotsʼ/), դպրոց (escola, pronúncia ocidental /tʰəbˈɾotsʼ/), եկեղեցի (igreja), շուկայ (mercado —
 * o verbete da forma moderna "շուկա" lista "շուկայ" como "a grafia da ortografia tradicional", a
 * mesma que este pacote usa em toda parte), գրադարան (biblioteca), ուզել (querer — o verbete já
 * mostra tabelas de conjugação ocidental própria, com os prefixos կ՚/պիտի já usados neste pacote),
 * գալ (vir — pronúncia ocidental /kɑl/, e o verbete nota que o presente ocidental de 1ª pessoa é
 * "կու գամ", com o prefixo raro "կու", não "կը/կ՚", "um dos três verbos" com essa excepção), գրել
 * (escrever — o verbete traz a tabela ocidental completa: conectivo negativo "գրեր", presente
 * negativo "չեմ գրեր", pretérito-imperfeito negativo "չէի գրեր", futuro negativo "պիտի չգրեմ"),
 * աշխատիլ (trabalhar — o verbete lista "աշխատիլ" como a forma alternativa "(Western Armenian)" de
 * "աշխատել"), աշխատանք (trabalho/emprego, plural աշխատանքներ), վաղը (amanhã), բժիշկ (médico,
 * pronúncia ocidental /pəˈʒiʃɡ/), կայարան (estação, plural կայարաններ), տոմս (bilhete, pronúncia
 * ocidental /doms/, sem aspiração — contraste com o oriental /toms/), դրամ (dinheiro, pronúncia
 * ocidental /təˈɾɑm/), ինքնաշարժ (carro/automóvel) e ինքնաթիռ (avião).
 *
 * O sufixo possessivo "-դ" (teu) e a troca de sonoridade dele no ocidental (/t/ depois de vogal,
 * /ət/ depois de consoante, sempre aspirado — diferente do oriental /d/~/əd/) vêm do verbete
 * "-դ" do Wikcionário; ver o tópico de gramática "hyw-g6". O futuro com "պիտի" e a lista de verbos
 * "defectivos" com futuro irregular (ըլլալ, ունենալ, գիտնալ, կարենալ/կրնալ) vêm de
 * en.wikipedia.org/wiki/Western_Armenian (seção sobre o tempo futuro). A negação com "չեմ/չես/չի…"
 * mais a forma conectiva do verbo principal vem de universaldependencies.org/hyw (a página da
 * categoria "Connegative"), cruzada com o verbete de "գրել" citado acima.
 *
 * Duas frases novas são extensão por analogia, não citação directa (a mesma metodologia já usada
 * no A1 e registada em `incomplete.note`): "կ՚ուզեմ" (eu quero) e "կ՚աշխատիմ" (eu trabalho) seguem o
 * mesmo padrão -ել/-իլ com elisão do կը antes de vogal já atestado nas formas "կ՚ուտեմ" e "կ՚երթամ"
 * (já usadas neste pacote desde o A1) — o próprio Wikcionário confirma que "ուզել" e "աշխատիլ" têm
 * tabelas de conjugação ocidental dessas mesmas classes (-ել e -իլ), só não mostra a 1ª pessoa do
 * presente renderizada por extenso.
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
  // ── Tempo (A2) ──
  ['օր', 'dia (ōr; plural օրեր)', 'substantivo', 'Tempo', '📅', 'Օրը լաւ է:'],
  ['ժամ', 'hora (jam; plural ժամեր)', 'substantivo', 'Tempo', '⏰', 'Ժամը ութ է:'],
  ['շաբաթ', 'semana (shabatʻ; plural շաբաթներ)', 'substantivo', 'Tempo', '🗓️', 'Շաբաթը եօթ օր ունի:'],
  ['ամիս', 'mês (amis; plural ամիսներ)', 'substantivo', 'Tempo', '📆', 'Ամիսը լաւ է:'],
  ['տարի', 'ano (dari — դ ocidental sonoro, não “tari” do oriental; plural տարիներ)', 'substantivo', 'Tempo', '🎂', 'Տարին լաւ է:'],
  ['այսօր', 'hoje (aysōr — tônica na primeira sílaba no ocidental, diferente do oriental)', 'advérbio', 'Tempo', '📌', 'Այսօր լաւ օր է:'],
  ['վաղը', 'amanhã (vaghë)', 'advérbio', 'Tempo', '🌄', 'Վաղը աշխատանք պիտի ունենամ:'],
  // ── Cidade (A2) ──
  ['քաղաք', 'cidade (kʻaghakʻ; plural քաղաքներ)', 'substantivo', 'Cidade', '🏙️', 'Քաղաքը մեծ է:'],
  ['փողոց', 'rua (pʻoghotsʻ; pronúncia ocidental sem aspiração: /poˈʁotsʼ/)', 'substantivo', 'Cidade', '🛣️', 'Փողոցը մեծ է:'],
  ['դպրոց', 'escola (dbrotsʻ no oriental; ocidental /tʻəbˈrotsʼ/)', 'substantivo', 'Cidade', '🏫', 'Դպրոցը պզտիկ է:'],
  ['եկեղեցի', 'igreja (yegeghetsʻi)', 'substantivo', 'Cidade', '⛪', 'Եկեղեցին սպիտակ է:'],
  ['շուկայ', 'mercado (shukay — grafia tradicional/clássica, a mesma usada em todo este pacote)', 'substantivo', 'Cidade', '🏪', 'Ես շուկայ պիտի երթամ:'],
  ['գրադարան', 'biblioteca (kʻəradaran)', 'substantivo', 'Cidade', '📚', 'Ես գրադարան պիտի երթամ:'],
  // ── Verbos-chave (A2) ──
  ['ուզել', 'querer (uzel — presente ocidental por extensão do padrão de “ուտել”/“երթալ”: կ՚ուզեմ)', 'verbo', 'Verbos-chave', '💭', 'Ես ջուր կ՚ուզեմ:'],
  ['գալ', 'vir (gal — presente irregular ocidental: կու գամ, não կ՚գամ)', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Կու գամ:'],
  ['գրել', 'escrever (grel)', 'verbo', 'Verbos-chave', '✍️', 'Ես չեմ գրեր:'],
  ['աշխատիլ', 'trabalhar — forma ocidental de “աշխատել” (ashkhadil; presente por extensão do mesmo padrão de “խօսիլ”: կ՚աշխատիմ)', 'verbo', 'Verbos-chave', '👷', 'Ես կ՚աշխատիմ:'],
  // ── Trabalho e viagem (A2) ──
  ['աշխատանք', 'trabalho, emprego (ashkhadankʻ; plural աշխատանքներ)', 'substantivo', 'Trabalho e viagem', '💼', 'Աշխատանքս լաւ է:'],
  ['բժիշկ', 'médico (pʻəžishg)', 'substantivo', 'Trabalho e viagem', '🩺', 'Բժիշկը լաւ է:'],
  ['կայարան', 'estação (kayaran; plural կայարաններ)', 'substantivo', 'Trabalho e viagem', '🚉', 'Կայարանը մեծ է:'],
  ['տոմս', 'bilhete (doms — sem aspiração no ocidental, diferente do oriental “toms”)', 'substantivo', 'Trabalho e viagem', '🎫', 'Տոմսս ունիմ:'],
  ['դրամ', 'dinheiro (tʻəram)', 'substantivo', 'Trabalho e viagem', '💰', 'Դրամ ունիմ:'],
  ['ինքնաշարժ', 'carro, automóvel (inkʻnasharzh)', 'substantivo', 'Trabalho e viagem', '🚗', 'Ինքնաշարժը մեծ է:'],
  ['ինքնաթիռ', 'avião (inkʻnatʻir)', 'substantivo', 'Trabalho e viagem', '✈️', 'Ինքնաթիռը մեծ է:'],
];

export const VOCAB_HYW = buildVocab('hyw', ROWS);
