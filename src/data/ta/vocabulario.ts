import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tâmil (தமிழ், tamiḻ), língua dravídica meridional oficial de Tamil Nadu, na Índia,
 * e também do Sri Lanka e de Singapura. A pronúncia aproximada vem entre parênteses na tradução,
 * porque a escrita tâmil (um alfabeto próprio, descendente do brahmi pela escrita Pallava, nada
 * parecido com o alfabeto télugo) é nova para quem fala português. Palavras e sentidos vêm do
 * Wiktionary em inglês (verbete de cada palavra) e do Omniglot; a maioria tem raiz proto-dravídica
 * confirmada, com cognatos no télugo, no canarês e no malaiala — ver `etymology` em extras.ts.
 * A1 e A2 completos (unidades 1 a 4) — ver `incomplete` em index.ts.
 *
 * Nível A2.1/A2.2 (unidades 3 e 4): verbetes do Wiktionary conferidos palavra por palavra (clima,
 * roupas, corpo, cidade, profissões, sentimentos, verbos, tempo e números de 20 a 100: இருபது,
 * முப்பது, நாற்பது, ஐம்பது, அறுபது, எழுபது, எண்பது, தொண்ணூறு, நூறு). As formas declinadas (locativo
 * நகரத்தில்/கடையில்/பள்ளியில் e futuro இருப்பேன்/இருக்கும்) vêm das próprias tabelas de declinação e
 * conjugação do Wiktionary de cada palavra, não de extrapolação própria.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['வணக்கம்', 'oi, olá, tchau (vaṇakkam — cumprimento formal para chegar e se despedir; vem de வணங்கு, “curvar-se, reverenciar”)', 'interjeição', 'Expressões', '🙏', 'வணக்கம்! நீங்கள் எப்படி இருக்கின்றீர்கள்?'],
  ['நன்றி', 'obrigado (naṉṟi)', 'interjeição', 'Expressões', '🙏', 'நன்றி!'],
  ['தயவுசெய்து', 'por favor (tayavuceytu — ao pé da letra, “tendo feito um favor”, de தயவு “favor” + செய்து “feito”)', 'advérbio', 'Expressões', '🙏', 'தண்ணீர், தயவுசெய்து.'],
  // ── Essenciais ──
  ['ஆம்', 'sim (ām)', 'advérbio', 'Essenciais', '👍', 'ஆம், தயவுசெய்து.'],
  ['இல்லை', 'não, não existe, não é (illai — no tâmil falado nega tanto existência/posse quanto identidade; ver gramática)', 'advérbio', 'Essenciais', '👎', 'இல்லை, நன்றி.'],
  ['என்ன', 'o quê, que (eṉṉa)', 'pronome', 'Essenciais', '❓', 'இது என்ன?'],
  ['எங்கே', 'onde (eṅkē; de எங்கு “onde” + -ஏ)', 'advérbio', 'Essenciais', '❓', 'உங்கள் வீடு எங்கே?'],
  ['எப்படி', 'como (eppaṭi)', 'advérbio', 'Essenciais', '❓', 'நீங்கள் எப்படி இருக்கின்றீர்கள்?'],
  ['யார்', 'quem (yār)', 'pronome', 'Essenciais', '❓', 'அவன் யார்?'],
  ['பெயர்', 'nome (peyar)', 'substantivo', 'Essenciais', '🏷️', 'என் பெயர் கவிதா.', 'n'],
  ['மற்றும்', 'e (maṟṟum — só na escrita formal; na fala o tâmil liga palavras com o sufixo -உம், não com uma palavra separada)', 'conjunção', 'Essenciais', null, 'அம்மா மற்றும் அப்பா.'],
  // ── Descrições ──
  ['நல்ல', 'bom (nalla)', 'adjetivo', 'Descrições', '👌', 'இது நல்ல வீடு.'],
  ['பெரிய', 'grande (periya)', 'adjetivo', 'Descrições', '📏', 'இது பெரிய வீடு.'],
  ['சின்ன', 'pequeno (ciṉṉa)', 'adjetivo', 'Descrições', '📏', 'என் வீடு சின்ன வீடு.'],
  // ── Cores ──
  ['வெள்ளை', 'branco (veḷḷai)', 'adjetivo', 'Cores', '⚪', 'பால் வெள்ளை.'],
  ['கருப்பு', 'preto (karuppu)', 'adjetivo', 'Cores', '⚫', 'நாய் கருப்பு.'],
  ['சிவப்பு', 'vermelho (civappu)', 'adjetivo', 'Cores', '🔴', 'பழம் சிவப்பு.'],
  ['நீலம்', 'azul (nīlam — do sânscrito नील, nīla)', 'adjetivo', 'Cores', '🔵', 'வானம் நீலம்.'],
  // ── Casa ──
  ['வீடு', 'casa (vīṭu)', 'substantivo', 'Casa', '🏠', 'இது என் வீடு.', 'n'],
  // ── Animais ──
  ['நாய்', 'cachorro (nāy)', 'substantivo', 'Animais', '🐕', 'இது நாய்.', 'n'],
  ['பூனை', 'gato (pūṉai)', 'substantivo', 'Animais', '🐈', 'இது பூனை.', 'n'],
  // ── Pessoas ──
  ['நான்', 'eu (nāṉ)', 'pronome', 'Pessoas', '🙋', 'நான் நல்லா இருக்கின்றேன்.'],
  ['நீ', 'tu, você, informal (nī — para amigos, crianças ou alguém mais novo)', 'pronome', 'Pessoas', '🫵', 'நீ எங்கே?'],
  ['நீங்கள்', 'você, formal; também “vocês” (nīṅkaḷ — de நீ “tu” + o sufixo de plural -கள்)', 'pronome', 'Pessoas', '🙇', 'நீங்கள் எப்படி இருக்கின்றீர்கள்?'],
  ['அவன்', 'ele (avaṉ)', 'pronome', 'Pessoas', '👤', 'அவன் யார்?'],
  ['அவள்', 'ela (avaḷ)', 'pronome', 'Pessoas', '👤', 'அவள் என் அக்கா.'],
  ['நாங்கள்', 'nós, excluindo quem ouve (nāṅkaḷ — existe também நாம், “nós” incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'நாங்கள் ஒரு குடும்பம்.'],
  ['குடும்பம்', 'família (kuṭumpam — emprestada do sânscrito कुटुम्ब, kuṭumba, que talvez venha de uma língua dravídica mais antiga)', 'substantivo', 'Pessoas', '👪', 'நாங்கள் ஒரு குடும்பம்.', 'n'],
  ['அம்மா', 'mãe (ammā)', 'substantivo', 'Pessoas', '👩', 'அவள் என் அம்மா.', 'f'],
  ['அப்பா', 'pai (appā)', 'substantivo', 'Pessoas', '👨', 'அவன் என் அப்பா.', 'm'],
  ['அண்ணன்', 'irmão mais velho (aṇṇaṉ)', 'substantivo', 'Pessoas', '🧑', 'அவன் என் அண்ணன்.', 'm'],
  ['அக்கா', 'irmã mais velha (akkā)', 'substantivo', 'Pessoas', '🧑', 'அவள் என் அக்கா.', 'f'],
  ['தம்பி', 'irmão mais novo (tampi)', 'substantivo', 'Pessoas', '🧒', 'அவன் என் தம்பி.', 'm'],
  ['தங்கை', 'irmã mais nova (taṅkai)', 'substantivo', 'Pessoas', '🧒', 'அவள் என் தங்கை.', 'f'],
  ['நண்பன்', 'amigo (naṇpaṉ — forma masculina; a feminina é தோழி/நண்பி)', 'substantivo', 'Pessoas', '🤝', 'அவன் என் நண்பன்.', 'm'],
  // ── Verbos-chave ──
  ['இரு', 'ser, estar, existir, ficar (iru — conjugado: நான் இருக்கின்றேன், நீங்கள் இருக்கின்றீர்கள்)', 'verbo', 'Verbos-chave', '🧑', 'அங்கே இரு!'],
  ['உண்டு', 'há, existe, tem (uṇṭu — forma invariável, vale para todas as pessoas e números; ver gramática)', 'verbo', 'Verbos-chave', '🤲', 'எனக்கு ஒரு அண்ணன் உண்டு.'],
  ['போ', 'ir (pō)', 'verbo', 'Verbos-chave', '🚶', 'போ!'],
  ['வா', 'vir (vā)', 'verbo', 'Verbos-chave', '🚶', 'இங்கே வா!'],
  ['சாப்பிடு', 'comer (cāppiṭu)', 'verbo', 'Verbos-chave', '🍽️', 'சோறு சாப்பிடு!'],
  ['குடி', 'beber (kuṭi)', 'verbo', 'Verbos-chave', '🥤', 'தண்ணீர் குடி!'],
  ['பேசு', 'falar (pēcu)', 'verbo', 'Verbos-chave', '🗣️', 'தமிழ் பேசு!'],
  ['வேண்டும்', 'querer, precisar (vēṇṭum — não se conjuga; quem quer vai no dativo: எனக்கு … வேண்டும்)', 'verbo', 'Verbos-chave', '💭', 'எனக்கு தண்ணீர் வேண்டும்.'],
  ['தா', 'dar (tā)', 'verbo', 'Verbos-chave', '🤲', 'தண்ணீர் தா!'],
  // ── Alimentação ──
  ['தண்ணீர்', 'água (taṇṇīr — ao pé da letra “água fria”, de தண் “frio” + நீர் “água”)', 'substantivo', 'Alimentação', '💧', 'எனக்கு தண்ணீர் வேண்டும்.', 'n'],
  ['பால்', 'leite (pāl)', 'substantivo', 'Alimentação', '🥛', 'எனக்கு பால் வேண்டும்.', 'n'],
  ['சோறு', 'comida, arroz cozido (cōṟu)', 'substantivo', 'Alimentação', '🍚', 'சோறு சாப்பிடு!', 'n'],
  ['பழம்', 'fruta (paḻam)', 'substantivo', 'Alimentação', '🍎', 'இது பழம்.', 'n'],
  // ── Números ──
  ['ஒன்று', 'um (oṉṟu; forma curta ஒரு, usada como “um/uma” antes de substantivo)', 'numeral', 'Números', '1️⃣', 'ஒரு பூனை.'],
  ['இரண்டு', 'dois (iraṇṭu)', 'numeral', 'Números', '2️⃣', 'இரண்டு பூனைகள்.'],
  ['மூன்று', 'três (mūṉṟu)', 'numeral', 'Números', '3️⃣', 'மூன்று பூனைகள்.'],
  ['நான்கு', 'quatro (nāṉku)', 'numeral', 'Números', '4️⃣', 'நான்கு பூனைகள்.'],
  ['ஐந்து', 'cinco (aintu)', 'numeral', 'Números', '5️⃣', 'ஐந்து பூனைகள்.'],
  ['ஆறு', 'seis (āṟu)', 'numeral', 'Números', '6️⃣', 'ஆறு பூனைகள்.'],
  ['ஏழு', 'sete (ēḻu)', 'numeral', 'Números', '7️⃣', 'ஏழு பூனைகள்.'],
  ['எட்டு', 'oito (eṭṭu)', 'numeral', 'Números', '8️⃣', 'எட்டு பூனைகள்.'],
  ['ஒன்பது', 'nove (oṉpatu)', 'numeral', 'Números', '9️⃣', 'ஒன்பது பூனைகள்.'],
  ['பத்து', 'dez (pattu)', 'numeral', 'Números', '🔟', 'பத்து பூனைகள்.'],
  // ── Corpo ──
  ['தலை', 'cabeça (talai)', 'substantivo', 'Corpo', '💆', 'இது என் தலை.', 'n'],
  ['கை', 'mão (kai)', 'substantivo', 'Corpo', '✋', 'இது என் கை.', 'n'],
  ['கண்', 'olho (kaṇ)', 'substantivo', 'Corpo', '👁️', 'இது என் கண்.', 'n'],
  ['வாய்', 'boca (vāy)', 'substantivo', 'Corpo', '👄', 'இது என் வாய்.', 'n'],
  // ── Natureza ──
  ['சூரியன்', 'sol (cūriyaṉ — do sânscrito सूर्य, sūrya, o deus-sol Surya, + o sufixo masculino -அன்)', 'substantivo', 'Natureza', '☀️', 'இது சூரியன்.', 'm'],
  ['மரம்', 'árvore (maram)', 'substantivo', 'Natureza', '🌳', 'இது மரம்.', 'n'],
  ['வானம்', 'céu (vāṉam)', 'substantivo', 'Natureza', '🌌', 'வானம் நீலம்.', 'n'],

  // ── Clima ── (nível A2.2, Wiktionary: மழை, காற்று, மேகம், வெயில், சூடு, குளிர்)
  ['மழை', 'chuva (maḻai)', 'substantivo', 'Clima', '🌧️', 'இன்று மழை உண்டு.', 'n'],
  ['காற்று', 'vento, ar (kāṟṟu)', 'substantivo', 'Clima', '💨', 'இன்று காற்று உண்டு.', 'n'],
  ['மேகம்', 'nuvem (mēkam)', 'substantivo', 'Clima', '☁️', 'இன்று மேகம் உண்டு.', 'n'],
  ['வெயில்', 'luz do sol, calor do sol (veyil)', 'substantivo', 'Clima', '☀️', 'இன்று வெயில் உண்டு.', 'n'],
  ['சூடு', 'calor (cūṭu)', 'substantivo', 'Clima', '🥵', 'இன்று சூடு உண்டு.', 'n'],
  ['குளிர்', 'frio (kuḷir)', 'substantivo', 'Clima', '🥶', 'இன்று குளிர் உண்டு.', 'n'],

  // ── Roupas ── (nível A2.2, Wiktionary: உடை, தொப்பி, புடவை, செருப்பு)
  ['உடை', 'roupa (uṭai)', 'substantivo', 'Roupas', '👕', 'இது என் உடை.', 'n'],
  ['தொப்பி', 'boné, chapéu (toppi)', 'substantivo', 'Roupas', '🧢', 'இது என் தொப்பி.', 'n'],
  ['புடவை', 'sári, a veste tradicional das mulheres no subcontinente indiano (puṭavai)', 'substantivo', 'Roupas', '🥻', 'இது என் புடவை.', 'n'],
  ['செருப்பு', 'chinelo, sandália (ceruppu)', 'substantivo', 'Roupas', '👡', 'இது என் செருப்பு.', 'n'],

  // ── Corpo ── (nível A2.1, Wiktionary: கால், காது)
  ['கால்', 'pé, perna (kāl)', 'substantivo', 'Corpo', '🦶', 'இது என் கால்.', 'n'],
  ['காது', 'orelha (kātu)', 'substantivo', 'Corpo', '👂', 'இது என் காது.', 'n'],

  // ── Cidade e lugares ── (nível A2.1, Wiktionary: நகரம், தெரு, கடை, பள்ளி; formas locativas
  // நகரத்தில்/கடையில்/பள்ளியில் confirmadas na tabela de declinação de cada palavra)
  ['நகரம்', 'cidade (nakaram)', 'substantivo', 'Cidade e lugares', '🏙️', 'இது பெரிய நகரம்.', 'n'],
  ['தெரு', 'rua (teru)', 'substantivo', 'Cidade e lugares', '🛣️', 'இது பெரிய தெரு.', 'n'],
  ['கடை', 'loja (kaṭai)', 'substantivo', 'Cidade e lugares', '🏪', 'இது சின்ன கடை.', 'n'],
  ['பள்ளி', 'escola (paḷḷi)', 'substantivo', 'Cidade e lugares', '🏫', 'இது பெரிய பள்ளி.', 'n'],

  // ── Profissões ── (nível A2.1, Wiktionary: மருத்துவர், ஆசிரியர், விவசாயி, வியாபாரி — todas de
  // gênero comum, servem para homem ou mulher)
  ['மருத்துவர்', 'médico (maruttuvar; gênero comum)', 'substantivo', 'Profissões', '🩺', 'அவன் மருத்துவர்.', 'm'],
  ['ஆசிரியர்', 'professor (āciriyar; gênero comum)', 'substantivo', 'Profissões', '👨‍🏫', 'அவள் ஆசிரியர்.', 'f'],
  ['விவசாயி', 'agricultor, fazendeiro (vivacāyi; gênero comum)', 'substantivo', 'Profissões', '🌾', 'அவன் விவசாயி.', 'm'],
  ['வியாபாரி', 'comerciante (viyāpāri; gênero comum)', 'substantivo', 'Profissões', '🛍️', 'அவள் வியாபாரி.', 'f'],

  // ── Sentimentos ── (nível A2.1, Wiktionary: சந்தோஷம், துக்கம், பசி, தாகம், பயம்)
  ['சந்தோஷம்', 'felicidade, alegria (cantōṣam)', 'substantivo', 'Sentimentos', '😄', 'எனக்கு சந்தோஷம் உண்டு.', 'n'],
  ['துக்கம்', 'tristeza (tukkam)', 'substantivo', 'Sentimentos', '😢', 'எனக்கு துக்கம் உண்டு.', 'n'],
  ['பசி', 'fome (paci)', 'substantivo', 'Sentimentos', '🤤', 'எனக்கு பசி உண்டு.', 'n'],
  ['தாகம்', 'sede (tākam)', 'substantivo', 'Sentimentos', '🥤', 'எனக்கு தாகம் உண்டு.', 'n'],
  ['பயம்', 'medo (payam)', 'substantivo', 'Sentimentos', '😨', 'எனக்கு பயம் உண்டு.', 'n'],

  // ── Mais verbos ── (nível A2.1/A2.2, Wiktionary: நட, தூங்கு, எழுது, படி, சோர், வாங்கு)
  ['நட', 'andar, caminhar (naṭa — a própria raiz também serve de imperativo)', 'verbo', 'Verbos-chave', '🚶', 'நட!'],
  ['தூங்கு', 'dormir (tūṅku)', 'verbo', 'Verbos-chave', '😴', 'தூங்கு!'],
  ['எழுது', 'escrever (eḻutu)', 'verbo', 'Verbos-chave', '✍️', 'எழுது!'],
  ['படி', 'ler; também estudar, aprender (paṭi)', 'verbo', 'Verbos-chave', '📖', 'படி!'],
  ['சோர்', 'ficar cansado, exausto (cōr)', 'verbo', 'Verbos-chave', '🥱', 'நான் சோர்கிறேன்.'],
  ['வாங்கு', 'comprar (vāṅku)', 'verbo', 'Verbos-chave', '🛍️', 'வாங்கு!'],

  // ── Tempo ── (nível A2.1/A2.2, Wiktionary: இன்று, நேற்று, நாளை)
  ['இன்று', 'hoje (iṉṟu)', 'advérbio', 'Tempo', '📅', 'இன்று மழை உண்டு.'],
  ['நேற்று', 'ontem (nēṟṟu)', 'advérbio', 'Tempo', '⏮️', 'நேற்று, இன்று, நாளை.'],
  ['நாளை', 'amanhã (nāḷai)', 'advérbio', 'Tempo', '⏭️', 'நாளை குளிர் இருக்கும்.'],

  // ── Números 20-100 ── (nível A2.1, Wiktionary: இருபது, முப்பது, நாற்பது, ஐம்பது, அறுபது, எழுபது,
  // எண்பது, தொண்ணூறு, நூறு)
  ['இருபது', 'vinte (irupatu)', 'numeral', 'Números', '🔢', 'இருபது ரூபாய்.'],
  ['முப்பது', 'trinta (muppatu)', 'numeral', 'Números', '🔢', 'முப்பது ரூபாய்.'],
  ['நாற்பது', 'quarenta (nāṟpatu)', 'numeral', 'Números', '🔢', 'நாற்பது ரூபாய்.'],
  ['ஐம்பது', 'cinquenta (aimpatu)', 'numeral', 'Números', '🔢', 'ஐம்பது ரூபாய்.'],
  ['அறுபது', 'sessenta (aṟupatu)', 'numeral', 'Números', '🔢', 'அறுபது ரூபாய்.'],
  ['எழுபது', 'setenta (eḻupatu)', 'numeral', 'Números', '🔢', 'எழுபது ரூபாய்.'],
  ['எண்பது', 'oitenta (eṇpatu)', 'numeral', 'Números', '🔢', 'எண்பது ரூபாய்.'],
  ['தொண்ணூறு', 'noventa (toṇṇūṟu)', 'numeral', 'Números', '🔢', 'தொண்ணூறு ரூபாய்.'],
  ['நூறு', 'cem (nūṟu)', 'numeral', 'Números', '💯', 'நூறு ரூபாய்.'],
];

export const VOCAB_TA = buildVocab('ta', ROWS);
