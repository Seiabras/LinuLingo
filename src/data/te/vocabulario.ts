import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do télugo (తెలుగు), língua dravídica oficial de Andhra Pradesh e Telangana, no
 * sudeste da Índia. A pronúncia aproximada vem entre parênteses na tradução, porque a escrita
 * télugo (um alfabeto próprio, descendente do brahmi) é nova para quem fala português. Palavras e
 * sentidos vêm do Wiktionary (em inglês) e do Omniglot; a maioria tem raiz proto-dravídica
 * confirmada, com cognatos no tâmil, no canarês e no malaiala — ver `etymology` em extras.ts.
 * A2 (unidades 3 e 4) acrescenta clima, roupas, mais corpo, cidade/lugares, profissões,
 * sentimentos, mais verbos e os números 20–100 — mesmas fontes (Wiktionary em inglês, com
 * verificação palavra a palavra; nenhuma forma foi inventada). Uma lacuna documentada: não
 * achamos uma palavra télugo específica para “chinelo”, só చెప్పు, que cobre “sapato” e “calçado”
 * em geral (fonte: Wiktionary).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['నమస్కారం', 'oi, olá (namaskāram — cumprimento formal, com as mãos juntas)', 'interjeição', 'Expressões', '🙏', 'నమస్కారం! మీరు ఎలా ఉన్నారు?'],
  ['శుభోదయం', 'bom dia (śubhōdayam)', 'interjeição', 'Expressões', '🌅', 'శుభోదయం!'],
  ['శుభ రాత్రి', 'boa noite, ao se despedir (śubha rātri)', 'interjeição', 'Expressões', '🌙', 'శుభ రాత్రి!'],
  ['వెళ్ళొస్తాను', 'tchau (veḷḷostānu — ao pé da letra, “eu vou e volto”)', 'interjeição', 'Expressões', '👋', 'వెళ్ళొస్తాను!'],
  ['ధన్యవాదములు', 'obrigado (dhanyavādamulu)', 'interjeição', 'Expressões', '🙏', 'చాలా ధన్యవాదములు!'],
  ['దయచేసి', 'por favor (dayacēsi)', 'advérbio', 'Expressões', '🙏', 'నీళ్ళు, దయచేసి.'],
  // ── Essenciais ──
  ['అవును', 'sim (avunu)', 'advérbio', 'Essenciais', '👍', 'అవును, దయచేసి.'],
  ['కాదు', 'não, não é (kādu — nega identidade: “X não é Y”)', 'advérbio', 'Essenciais', '👎', 'కాదు, ధన్యవాదములు.'],
  ['ఏమిటి', 'o que, que (ēmiṭi; forma curta ఏమి, ēmi)', 'pronome', 'Essenciais', '❓', 'ఇది ఏమిటి?'],
  ['ఎక్కడ', 'onde (ekkaḍa)', 'advérbio', 'Essenciais', '❓', 'మీ ఇల్లు ఎక్కడ?'],
  ['ఎలా', 'como (elā)', 'advérbio', 'Essenciais', '❓', 'మీరు ఎలా ఉన్నారు?'],
  ['ఎవరు', 'quem (evaru)', 'pronome', 'Essenciais', '❓', 'అతను ఎవరు?'],
  ['పేరు', 'nome (pēru)', 'substantivo', 'Essenciais', '🏷️', 'నా పేరు ప్రియ.', 'n'],
  ['దేశం', 'país (dēśaṁ)', 'substantivo', 'Essenciais', '🌍', 'నా దేశం బ్రెజిల్.', 'n'],
  ['మరియు', 'e (mariyu — mais usado na escrita; na fala, o télugo costuma só listar as palavras sem conjunção)', 'conjunção', 'Essenciais', null, 'అమ్మ మరియు నాన్న.'],
  // ── Descrições ──
  ['మంచి', 'bom (mañci)', 'adjetivo', 'Descrições', '👌', 'ఇది మంచి ఇల్లు.'],
  ['పెద్ద', 'grande (pedda)', 'adjetivo', 'Descrições', '📏', 'ఇది పెద్ద ఇల్లు.'],
  ['చిన్న', 'pequeno (cinna)', 'adjetivo', 'Descrições', '📏', 'నా ఇల్లు చిన్నగా ఉంది.'],
  ['పొడుగు', 'alto; altura (poḍugu)', 'adjetivo', 'Descrições', '📐', 'అతనికంటే నేను పొడుగు.'],
  // ── Casa ──
  ['ఇల్లు', 'casa (illu)', 'substantivo', 'Casa', '🏠', 'ఇది నా ఇల్లు.', 'n'],
  // ── Animais ──
  ['కుక్క', 'cachorro (kukka — do sânscrito कुक्कुर)', 'substantivo', 'Animais', '🐕', 'ఇది కుక్క.', 'n'],
  ['పిల్లి', 'gato (pilli)', 'substantivo', 'Animais', '🐈', 'ఇది పిల్లి.', 'n'],
  // ── Pessoas ──
  ['నేను', 'eu (nēnu)', 'pronome', 'Pessoas', '🙋', 'నేను బాగున్నాను.'],
  ['నువ్వు', 'tu, você, informal (nuvvu — para amigos, crianças ou alguém mais novo)', 'pronome', 'Pessoas', '🫵', 'నువ్వు ఎక్కడ నుండి?'],
  ['మీరు', 'você, formal; também “vocês” (mīru)', 'pronome', 'Pessoas', '🙇', 'మీరు ఎక్కడ నుండి?'],
  ['అతను', 'ele (atanu)', 'pronome', 'Pessoas', '👤', 'అతను బడికి వెళ్తాడు.'],
  ['ఆమె', 'ela (āme)', 'pronome', 'Pessoas', '👤', 'ఆమె నా అక్క.'],
  ['మేము', 'nós (mēmu)', 'pronome', 'Pessoas', '🙌', 'మేము కుటుంబం.'],
  ['కుటుంబం', 'família (kuṭumbaṁ)', 'substantivo', 'Pessoas', '👪', 'మేము కుటుంబం.', 'n'],
  ['అమ్మ', 'mãe (amma)', 'substantivo', 'Pessoas', '👩', 'నా అమ్మ బాగుంది.', 'f'],
  ['నాన్న', 'pai (nānna)', 'substantivo', 'Pessoas', '👨', 'నా నాన్న బాగున్నాడు.', 'm'],
  ['అన్న', 'irmão mais velho (anna)', 'substantivo', 'Pessoas', '🧑', 'నాకు ఒక అన్న ఉన్నాడు.', 'm'],
  ['అక్క', 'irmã mais velha (akka)', 'substantivo', 'Pessoas', '🧑', 'ఆమె నా అక్క.', 'f'],
  ['తమ్ముడు', 'irmão mais novo (tammuḍu)', 'substantivo', 'Pessoas', '🧒', 'నాకు ఒక తమ్ముడు ఉన్నాడు.', 'm'],
  ['చెల్లి', 'irmã mais nova (celli)', 'substantivo', 'Pessoas', '🧒', 'నాకు ఒక చెల్లి ఉంది.', 'f'],
  // ── Verbos-chave ──
  ['ఉండు', 'ser, estar, existir (uṇḍu — నేను ఉన్నాను, అతను ఉన్నాడు, మీరు ఉన్నారు)', 'verbo', 'Verbos-chave', '🧑', 'అక్కడే ఉండు!'],
  ['వెళ్ళు', 'ir (veḷḷu — నేను వెళ్తాను, అతను వెళ్తాడు)', 'verbo', 'Verbos-chave', '🚶', 'అతను బడికి వెళ్తాడు.'],
  ['తిను', 'comer (tinu)', 'verbo', 'Verbos-chave', '🍽️', 'నాకు తిండి కావాలి.'],
  ['తాగు', 'beber (tāgu)', 'verbo', 'Verbos-chave', '🥤', 'నాకు తాగునీరు కావాలి.'],
  ['మాట్లాడు', 'falar (māṭlāḍu — de మాట, “palavra”)', 'verbo', 'Verbos-chave', '🗣️', 'తెలుగు మాట్లాడు!'],
  ['కావాలి', 'querer, precisar (kāvāli — não se conjuga; quem quer vai no dativo: నాకు … కావాలి)', 'verbo', 'Verbos-chave', '💭', 'నాకు నీళ్ళు కావాలి.'],
  // ── Alimentação ──
  ['నీళ్ళు', 'água (nīḷḷu)', 'substantivo', 'Alimentação', '💧', 'నాకు నీళ్ళు కావాలి.', 'n'],
  ['అన్నం', 'comida, arroz cozido (annaṁ)', 'substantivo', 'Alimentação', '🍚', 'ఇది అన్నం.', 'n'],
  ['పాలు', 'leite (pālu)', 'substantivo', 'Alimentação', '🥛', 'నాకు పాలు కావాలి.', 'n'],
  // ── Números ──
  ['ఒకటి', 'um (okaṭi; forma curta ఒక, usada como “um/uma” antes de substantivo)', 'numeral', 'Números', '1️⃣', 'ఒక పిల్లి.'],
  ['రెండు', 'dois (reṇḍu)', 'numeral', 'Números', '2️⃣', 'రెండు పిల్లులు.'],
  ['మూడు', 'três (mūḍu)', 'numeral', 'Números', '3️⃣', 'మూడు పిల్లులు.'],
  ['నాలుగు', 'quatro (nālugu)', 'numeral', 'Números', '4️⃣', 'నాలుగు పిల్లులు.'],
  ['అయిదు', 'cinco (ayidu)', 'numeral', 'Números', '5️⃣', 'అయిదు పిల్లులు.'],
  ['ఆరు', 'seis (āru)', 'numeral', 'Números', '6️⃣', 'ఆరు పిల్లులు.'],
  ['ఏడు', 'sete (ēḍu)', 'numeral', 'Números', '7️⃣', 'ఏడు పిల్లులు.'],
  ['ఎనిమిది', 'oito (enimidi)', 'numeral', 'Números', '8️⃣', 'ఎనిమిది పిల్లులు.'],
  ['తొమ్మిది', 'nove (tommidi)', 'numeral', 'Números', '9️⃣', 'తొమ్మిది పిల్లులు.'],
  ['పది', 'dez (padi)', 'numeral', 'Números', '🔟', 'పది పిల్లులు.'],
  // ── Cores ──
  ['తెలుపు', 'branco (telupu — ao pé da letra, “a cor do leite”)', 'adjetivo', 'Cores', '⚪', 'పాలు తెలుపు.'],
  ['నలుపు', 'preto (nalupu)', 'adjetivo', 'Cores', '⚫', 'కుక్క నలుపు.'],
  ['ఎరుపు', 'vermelho (erupu)', 'adjetivo', 'Cores', '🔴', 'ఇది ఎరుపు.'],
  ['నీలం', 'azul (nīlaṁ)', 'adjetivo', 'Cores', '🔵', 'ఆకాశం నీలం.'],
  // ── Corpo ──
  ['తల', 'cabeça (tala)', 'substantivo', 'Corpo', '💆', 'ఇది నా తల.', 'n'],
  ['చెయ్యి', 'mão (ceyyi)', 'substantivo', 'Corpo', '✋', 'ఇది నా చెయ్యి.', 'n'],
  // ── Natureza ──
  ['సూర్యుడు', 'sol (sūryuḍu — do sânscrito सूर्य, o deus-sol Surya)', 'substantivo', 'Natureza', '☀️', 'ఇది సూర్యుడు.', 'm'],
  ['చెట్టు', 'árvore (ceṭṭu)', 'substantivo', 'Natureza', '🌳', 'ఇది చెట్టు.', 'n'],
  ['ఆకాశం', 'céu (ākāśaṁ)', 'substantivo', 'Natureza', '🌌', 'ఇది ఆకాశం.', 'n'],
  // ── Clima ──
  ['వర్షం', 'chuva (varṣaṁ — alternativa de వర్షము)', 'substantivo', 'Clima', '🌧️', 'ఈరోజు వర్షం ఉంది.', 'n'],
  ['గాలి', 'vento, ar (gāli)', 'substantivo', 'Clima', '💨', 'ఈరోజు గాలి ఉంది.', 'n'],
  ['మేఘం', 'nuvem (mēghaṁ — alternativa de మేఘము)', 'substantivo', 'Clima', '☁️', 'ఈరోజు మేఘం ఉంది.', 'n'],
  ['ఎండ', 'sol, calor do sol (eṇḍa)', 'substantivo', 'Clima', '☀️', 'ఈరోజు ఎండ ఉంది.', 'n'],
  ['వేడి', 'calor; quente (vēḍi — gênero não registrado no Wiktionary)', 'substantivo', 'Clima', '🥵', 'ఈరోజు వేడి ఉంది.'],
  ['చలి', 'frio (cali — gênero não registrado no Wiktionary)', 'substantivo', 'Clima', '🥶', 'ఈరోజు చలి ఉంది.'],
  // ── Roupas ──
  ['చొక్కా', 'camisa, casaco (cokkā)', 'substantivo', 'Roupas', '👔', 'ఇది నా చొక్కా.'],
  ['చీర', 'sári, veste tradicional indiana (cīra)', 'substantivo', 'Roupas', '🥻', 'ఇది అమ్మ చీర.'],
  ['టోపీ', 'boné, chapéu (ṭōpī)', 'substantivo', 'Roupas', '🧢', 'ఇది నా టోపీ.'],
  ['చెప్పు', 'sapato, calçado (ceppu)', 'substantivo', 'Roupas', '👡', 'ఇది నా చెప్పు.'],
  ['బట్ట', 'pano, tecido, roupa (baṭṭa)', 'substantivo', 'Roupas', '🧵', 'ఇది బట్ట.'],
  // ── Corpo ──
  ['కన్ను', 'olho (kannu)', 'substantivo', 'Corpo', '👁️', 'ఇది నా కన్ను.', 'n'],
  ['కాలు', 'perna, pé (kālu)', 'substantivo', 'Corpo', '🦵', 'ఇది నా కాలు.', 'n'],
  // ── Cidade e lugares ──
  ['బడి', 'escola (baḍi)', 'substantivo', 'Cidade e lugares', '🏫', 'ఇది బడి.', 'n'],
  ['ఆసుపత్రి', 'hospital (āsupatri)', 'substantivo', 'Cidade e lugares', '🏥', 'ఇది ఆసుపత్రి.', 'n'],
  ['కొట్టు', 'loja (koṭṭu)', 'substantivo', 'Cidade e lugares', '🏪', 'ఇది కొట్టు.', 'n'],
  ['రోడ్డు', 'rua, estrada (rōḍḍu)', 'substantivo', 'Cidade e lugares', '🛣️', 'ఇది రోడ్డు.', 'n'],
  // ── Profissões ──
  ['వైద్యుడు', 'médico (vaidyuḍu)', 'substantivo', 'Profissões', '🩺', 'అతను వైద్యుడు.', 'm'],
  ['ఉపాధ్యాయుడు', 'professor (upādhyāyuḍu)', 'substantivo', 'Profissões', '🍎', 'అతను ఉపాధ్యాయుడు.', 'm'],
  ['రైతు', 'agricultor, fazendeiro (raitu)', 'substantivo', 'Profissões', '🌾', 'అతను రైతు.', 'n'],
  ['వ్యాపారి', 'comerciante (vyāpāri)', 'substantivo', 'Profissões', '🛒', 'అతను వ్యాపారి.', 'n'],
  ['పోలీసు', 'policial (pōlīsu)', 'substantivo', 'Profissões', '👮', 'ఆమె పోలీసు.', 'n'],
  // ── Sentimentos ──
  ['సంతోషం', 'alegria, felicidade (santōṣaṁ — alternativa de సంతోషము)', 'substantivo', 'Sentimentos', '😊', 'నాకు సంతోషం ఉంది.', 'n'],
  ['దుఃఖం', 'tristeza (duḥkhaṁ — alternativa de దుఃఖము)', 'substantivo', 'Sentimentos', '😢', 'నాకు దుఃఖం ఉంది.', 'n'],
  ['కోపం', 'raiva (kōpaṁ — alternativa de కోపము)', 'substantivo', 'Sentimentos', '😠', 'నాకు కోపం ఉంది.', 'n'],
  ['భయం', 'medo (bhayaṁ — alternativa de భయము)', 'substantivo', 'Sentimentos', '😨', 'నాకు భయం ఉంది.', 'n'],
  ['ఆకలి', 'fome (ākali)', 'substantivo', 'Sentimentos', '🍽️', 'నాకు ఆకలి ఉంది.', 'n'],
  ['దాహం', 'sede (dāhaṁ — alternativa de దాహము)', 'substantivo', 'Sentimentos', '🥤', 'నాకు దాహం ఉంది.', 'n'],
  // ── Verbos-chave ──
  ['చూడు', 'ver, olhar (cūḍu)', 'verbo', 'Verbos-chave', '👀', 'ఇది చూడు!'],
  ['విను', 'ouvir, escutar (vinu)', 'verbo', 'Verbos-chave', '👂', 'తెలుగు విను!'],
  ['ఇచ్చు', 'dar (iccu)', 'verbo', 'Verbos-chave', '🤲', 'నాకు ఇది ఇచ్చు!'],
  ['కొను', 'comprar (konu)', 'verbo', 'Verbos-chave', '🛍️', 'ఒక టోపీ కొను!'],
  ['చదువు', 'ler, estudar (caduvu)', 'verbo', 'Verbos-chave', '📖', 'తెలుగు చదువు!'],
  ['వచ్చు', 'vir, chegar (vaccu)', 'verbo', 'Verbos-chave', '🚶‍♂️', 'వచ్చు!'],
  // ── Tempo ──
  ['ఈరోజు', 'hoje (īrōju, de ఈ “este” + రోజు “dia”)', 'substantivo', 'Tempo', '📅', 'ఈరోజు వర్షం ఉంది.', 'n'],
  ['రేపు', 'amanhã (rēpu)', 'advérbio', 'Tempo', '📅', 'నేను రేపు వెళ్తాను.'],
  // ── Números ──
  ['ఇరవై', 'vinte (iravai)', 'numeral', 'Números', '🔢', 'ఇరవై పిల్లులు.'],
  ['ముప్పై', 'trinta (muppai)', 'numeral', 'Números', '🔢', 'ముప్పై పిల్లులు.'],
  ['నలభై', 'quarenta (nalabhai)', 'numeral', 'Números', '🔢', 'నలభై పిల్లులు.'],
  ['యాభై', 'cinquenta (yābhai)', 'numeral', 'Números', '🔢', 'యాభై పిల్లులు.'],
  ['అరవై', 'sessenta (aravai)', 'numeral', 'Números', '🔢', 'అరవై పిల్లులు.'],
  ['డెబ్బై', 'setenta (ḍebbai)', 'numeral', 'Números', '🔢', 'డెబ్బై పిల్లులు.'],
  ['ఎనభై', 'oitenta (enabhai)', 'numeral', 'Números', '🔢', 'ఎనభై పిల్లులు.'],
  ['తొంభై', 'noventa (tombhai)', 'numeral', 'Números', '🔢', 'తొంభై పిల్లులు.'],
  ['వంద', 'cem (vanda)', 'numeral', 'Números', '🔢', 'వంద పిల్లులు.'],
];

export const VOCAB_TE = buildVocab('te', ROWS);
