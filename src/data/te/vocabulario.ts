import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do télugo (తెలుగు), língua dravídica oficial de Andhra Pradesh e Telangana, no
 * sudeste da Índia. A pronúncia aproximada vem entre parênteses na tradução, porque a escrita
 * télugo (um alfabeto próprio, descendente do brahmi) é nova para quem fala português. Palavras e
 * sentidos vêm do Wiktionary (em inglês) e do Omniglot; a maioria tem raiz proto-dravídica
 * confirmada, com cognatos no tâmil, no canarês e no malaiala — ver `etymology` em extras.ts.
 * Idioma novo: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete`
 * em index.ts.
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
];

export const VOCAB_TE = buildVocab('te', ROWS);
