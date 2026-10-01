import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do armênio oriental (o da Armênia atual, com Erevan como referência), escrito no
 * alfabeto armênio de verdade. A pronúncia aproximada vem entre parênteses na tradução, porque o
 * alfabeto é todo novo para quem fala português. Idioma incompleto: por enquanto só o suficiente
 * para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['Բարև', 'oi, olá (barev)', 'interjeição', 'Expressões', '👋', 'Բարև! Ինչպե՞ս ես:'],
  ['Բարի լույս', 'bom dia (bari luys)', 'interjeição', 'Expressões', '🌅', 'Բարի լույս, մամա՛:'],
  ['Բարի օր', 'boa tarde (bari or)', 'interjeição', 'Expressões', '🌇', 'Բարի օր, ընկեր:'],
  ['Բարի երեկո', 'boa noite, ao chegar (bari yereko)', 'interjeição', 'Expressões', '🌆', 'Բարի երեկո բոլորին:'],
  ['Բարի գիշեր', 'boa noite, ao se despedir (bari gišer)', 'interjeição', 'Expressões', '🌙', 'Բարի գիշեր և քաղցր երազներ:'],
  ['Ցտեսություն', 'tchau, até logo (ts’tesut’yun)', 'interjeição', 'Expressões', '👋', 'Ցտեսություն, վաղը կտեսնվենք:'],
  ['Շնորհակալություն', 'obrigado (shnorhakalut’yun)', 'interjeição', 'Expressões', '🙏', 'Շատ շնորհակալություն:'],
  ['Խնդրեմ', 'por favor; de nada (khndrem)', 'interjeição', 'Expressões', '🙏', 'Մի բաժակ ջուր, խնդրեմ:'],
  ['Ինչպե՞ս ես', 'como vai? informal (inch’pes es)', 'expressão', 'Expressões', '🙂', 'Բարև, Աննա՛: Ինչպե՞ս ես:'],
  // ── Essenciais ──
  ['Այո', 'sim (ayo)', 'advérbio', 'Essenciais', '👍', 'Այո, խնդրեմ:'],
  ['Ոչ', 'não (voch’)', 'advérbio', 'Essenciais', '👎', 'Ոչ, շնորհակալություն:'],
  ['և', 'e (yev)', 'conjunção', 'Essenciais', null, 'Հաց և պանիր:'],
  ['կամ', 'ou (kam)', 'conjunção', 'Essenciais', null, 'Սուրճ կամ թեյ:'],
  ['շատ', 'muito (shat)', 'advérbio', 'Essenciais', null, 'Շատ շնորհակալություն:'],
  ['նույնպես', 'também (nuynpes)', 'advérbio', 'Essenciais', null, 'Ես նույնպես հայերեն եմ սովորում:'],
  ['լավ', 'bom; bem (lav)', 'adjetivo', 'Descrições', '👌', 'Հացը լավ է:'],
  ['վատ', 'ruim, mau (vat)', 'adjetivo', 'Descrições', '👎', 'Եղանակը վատ է:'],
  ['մեծ', 'grande (mets)', 'adjetivo', 'Descrições', '📏', 'Իմ ընտանիքը մեծ է:'],
  ['փոքր', 'pequeno (pokr)', 'adjetivo', 'Descrições', '📏', 'Կատուն փոքր է:'],
  ['ինչ', 'o que, que (inch’)', 'pronome', 'Essenciais', '❓', 'Ինչ է սա:'],
  ['որտեղ', 'onde (vordegh)', 'advérbio', 'Essenciais', '❓', 'Որտեղ ես ապրում:'],
  ['ինչպես', 'como (inchpes)', 'advérbio', 'Essenciais', '❓', 'Ինչպես ես ասում “ջուր”:'],
  ['որտեղից', 'de onde (vorteghits’)', 'advérbio', 'Essenciais', '❓', 'Որտեղից ես դու:'],
  ['քաղաք', 'cidade (k’aghak’)', 'substantivo', 'Essenciais', '🏙️', 'Երևանը Հայաստանի մայրաքաղաքն է:'],
  ['երկիր', 'país (yerkir)', 'substantivo', 'Essenciais', '🌍', 'Հայաստանը փոքր երկիր է:'],
  ['լեզու', 'língua, idioma (lezu)', 'substantivo', 'Essenciais', '🗣️', 'Հայերենը գեղեցիկ լեզու է:'],
  // ── Casa ──
  ['տուն', 'casa (tun)', 'substantivo', 'Casa', '🏠', 'Իմ տունը փոքր է:'],
  // ── Animais ──
  ['շուն', 'cachorro (shun)', 'substantivo', 'Animais', '🐕', 'Շունը քնած է:'],
  ['կատու', 'gato (katu)', 'substantivo', 'Animais', '🐈', 'Կատուն սև է:'],
  // ── Pessoas ──
  ['ես', 'eu (yes)', 'pronome', 'Pessoas', '🙋', 'Ես Աննա եմ:'],
  ['դու', 'tu, você (du)', 'pronome', 'Pessoas', '🫵', 'Իսկ դու, ինչպե՞ս ես կոչվում:'],
  ['նա', 'ele, ela (na)', 'pronome', 'Pessoas', '👤', 'Նա Երևանից է:'],
  ['մենք', 'nós (menk’)', 'pronome', 'Pessoas', '🙌', 'Մենք ընկերներ ենք:'],
  ['դուք', 'vocês; o senhor, a senhora, formal (duk’)', 'pronome', 'Pessoas', '🫵', 'Դուք շատ բարի եք:'],
  ['նրանք', 'eles, elas (nrank’)', 'pronome', 'Pessoas', '👥', 'Նրանք հայերեն են խոսում:'],
  ['անուն', 'nome (anun)', 'substantivo', 'Pessoas', '🏷️', 'Իմ անունը Լինուն է:'],
  ['ընկեր', 'amigo (ënker)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Նա իմ ընկերն է:'],
  // ── Verbos-chave ──
  ['լինել', 'ser, estar (ես եմ, դու ես, նա է)', 'verbo', 'Verbos-chave', '🧑', 'Ես Բրազիլիայից եմ:'],
  ['ունենալ', 'ter (ես ունեմ, դու ունես, նա ունի)', 'verbo', 'Verbos-chave', '🤲', 'Ես մեկ եղբայր ունեմ:'],
  ['խոսել', 'falar (ես խոսում եմ)', 'verbo', 'Verbos-chave', '🗣️', 'Ես մի քիչ հայերեն եմ խոսում:'],
  ['ուզել', 'querer (ես ուզում եմ)', 'verbo', 'Verbos-chave', '💭', 'Ես ուզում եմ սովորել հայերեն:'],
  ['գիտենալ', 'saber (ես գիտեմ)', 'verbo', 'Verbos-chave', '🧠', 'Ես չգիտեմ:'],
  ['գնալ', 'ir (ես գնում եմ)', 'verbo', 'Verbos-chave', '🚶', 'Ես տուն եմ գնում:'],
  ['ապրել', 'morar, viver (ես ապրում եմ)', 'verbo', 'Verbos-chave', '🏠', 'Ես Երևանում եմ ապրում:'],
  ['ուտել', 'comer (ես ուտում եմ)', 'verbo', 'Verbos-chave', '🍽️', 'Ես հաց և պանիր եմ ուտում:'],
  ['խմել', 'beber (ես խմում եմ)', 'verbo', 'Verbos-chave', '🥤', 'Ես ջուր եմ խմում:'],
  ['սիրել', 'gostar, amar (ես սիրում եմ)', 'verbo', 'Verbos-chave', '❤️', 'Ես սիրում եմ հայկական սուրճ:'],
  // ── Pessoas (família) ──
  ['ընտանիք', 'família (ëntanik’)', 'substantivo', 'Pessoas', '👪', 'Իմ ընտանիքը մեծ է:'],
  ['հայր', 'pai (hayr)', 'substantivo', 'Pessoas', '👨', 'Իմ հայրը Գյումրիից է:'],
  ['մայր', 'mãe (mayr)', 'substantivo', 'Pessoas', '👩', 'Իմ մայրը ուսուցչուհի է:'],
  ['եղբայր', 'irmão (yeghbayr)', 'substantivo', 'Pessoas', '🧑', 'Ես մեկ եղբայր ունեմ:'],
  ['քույր', 'irmã (kuyr)', 'substantivo', 'Pessoas', '🧑', 'Իմ քույրը փոքր է:'],
  ['որդի', 'filho (vordi)', 'substantivo', 'Pessoas', '🧒', 'Նրանց որդին տասը տարեկան է:'],
  ['դուստր', 'filha (dustr)', 'substantivo', 'Pessoas', '🧒', 'Իմ դուստրը փոքր է:'],
  // ── Alimentação e Restaurantes ──
  ['ջուր', 'água (jur)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Մի բաժակ ջուր, խնդրեմ:'],
  ['հաց', 'pão (hats)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Հացը թարմ է:'],
  ['կաթ', 'leite (kat)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Կաթը սպիտակ է:'],
  ['պանիր', 'queijo (panir)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Հայկական պանիրը համեղ է:'],
  ['սուրճ', 'café (surj)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Մեկ սուրճ, խնդրեմ:'],
  ['թեյ', 'chá (t’ey)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'Սուրճ կամ թեյ:'],
  // ── Números ──
  ['մեկ', 'um (mek)', 'numeral', 'Números', '1️⃣', 'Մեկ սուրճ, խնդրեմ:'],
  ['երկու', 'dois (erku)', 'numeral', 'Números', '2️⃣', 'Ես երկու եղբայր ունեմ:'],
  ['երեք', 'três (erek’)', 'numeral', 'Números', '3️⃣', 'Երեք ընկեր:'],
  ['չորս', 'quatro (chors)', 'numeral', 'Números', '4️⃣', 'Կատուն չորս ոտք ունի:'],
  ['հինգ', 'cinco (hing)', 'numeral', 'Números', '5️⃣', 'Հինգ օր:'],
  ['վեց', 'seis (vets’)', 'numeral', 'Números', '6️⃣', 'Վեց ժամ:'],
  ['յոթ', 'sete (yot’)', 'numeral', 'Números', '7️⃣', 'Շաբաթը յոթ օր ունի:'],
  ['ութ', 'oito (ut’)', 'numeral', 'Números', '8️⃣', 'Ութ ժամ:'],
  ['ինը', 'nove (iny)', 'numeral', 'Números', '9️⃣', 'Ինը տարեկան:'],
  ['տաս', 'dez (tas)', 'numeral', 'Números', '🔟', 'Տաս դրամ:'],
  // ── Tempo ──
  ['այսօր', 'hoje (aysor)', 'advérbio', 'Tempo', '📅', 'Այսօր երկուշաբթի է:'],
  ['վաղը', 'amanhã (vaghë)', 'advérbio', 'Tempo', '📅', 'Ցտեսություն, վաղը կտեսնվենք:'],
  ['երեկ', 'ontem (yerek)', 'advérbio', 'Tempo', '📅', 'Երեկ, այսօր և վաղը:'],
  ['երկուշաբթի', 'segunda-feira (erkushabt’i)', 'substantivo', 'Tempo', '📅', 'Այսօր երկուշաբթի է:'],
  ['երեքշաբթի', 'terça-feira (yerekshabt’i)', 'substantivo', 'Tempo', '📅', 'Վաղը երեքշաբթի է:'],
  ['չորեքշաբթի', 'quarta-feira (chorekshabt’i)', 'substantivo', 'Tempo', '📅', 'Այսօր չորեքշաբթի է:'],
  ['հինգշաբթի', 'quinta-feira (hingshabt’i)', 'substantivo', 'Tempo', '📅', 'Այսօր հինգշաբթի է:'],
  ['ուրբաթ', 'sexta-feira (urbat’)', 'substantivo', 'Tempo', '📅', 'Այսօր ուրբաթ է:'],
  ['շաբաթ', 'sábado (shabat’)', 'substantivo', 'Tempo', '📅', 'Շաբաթ օրը հանգստանում ենք:'],
  ['կիրակի', 'domingo (kiraki)', 'substantivo', 'Tempo', '📅', 'Կիրակի օրը ընտանիքի հետ ենք:'],
  // ── Cores ──
  ['սպիտակ', 'branco (spitak)', 'adjetivo', 'Cores', '⚪', 'Կաթը սպիտակ է:'],
  ['սև', 'preto (sev)', 'adjetivo', 'Cores', '⚫', 'Կատուն սև է:'],
  ['կարմիր', 'vermelho (karmir)', 'adjetivo', 'Cores', '🔴', 'Խնձորը կարմիր է:'],
  ['կանաչ', 'verde (kanach)', 'adjetivo', 'Cores', '🟢', 'Խոտը կանաչ է:'],
  ['կապույտ', 'azul (kapuyt)', 'adjetivo', 'Cores', '🔵', 'Երկինքը կապույտ է:'],
  ['դեղին', 'amarelo (deghin)', 'adjetivo', 'Cores', '🟡', 'Արևը դեղին է:'],
];

export const VOCAB_HY = buildVocab('hy', ROWS);
