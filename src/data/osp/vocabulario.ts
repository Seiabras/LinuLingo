import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do castelhano medieval (castellano medieval, ca. séc. X-XV — este pacote foca no
 * período clássico do Cantar de Mio Cid, ca. 1140-1207), na grafia mais comum atestada no
 * Wiktionary para cada palavra (ex. “fijo”, “ermano”, “cavallero” — formas reais da época, bem
 * diferentes do espanhol moderno “hijo”, “hermano”, “caballero”). Sem falantes nativos: como o
 * latim (`la`), o nórdico antigo (`non`), o francês antigo (`fro`) e o eslavo eclesiástico antigo
 * (`cu`), os exemplos usam um cenário de época (a corte de Rodrigo Díaz de Vivar, “El Cid”), não o
 * Brasil. Cada palavra foi conferida individualmente no Wiktionary (seção “Old Spanish” dedicada,
 * com etimologia latina, quando essa seção existe) ou, faltando essa seção específica, na
 * etimologia do espanhol moderno que cita a forma do castelhano medieval (ex. “negro” vem do
 * “Old Spanish negro”); marcado como confiança média — ver notas de cada palavra em
 * `index.ts`/`extras.ts` e no commit. Palavras funcionais básicas (artigos “el”/“la”/“un”/“una”,
 * possessivo “mio”/“mi”) seguem o mesmo padrão: confirmadas pelo Wiktionary ou por extensão mínima
 * e regular da mesma família de palavra, nunca inventadas do zero.
 *
 * Lacuna honesta importante: NÃO existe, em nenhuma fonte conferida, uma partícula de “sim” no
 * castelhano medieval do período do Cantar de Mio Cid — “sí” só se gramaticalizou como resposta
 * afirmativa a partir do séc. XIV-XV (antes disso, era só o advérbio “assim/deste jeito”, do latim
 * “sic”). Por isso este pacote NÃO ensina “sí” como “sim” — ver a lição de gramática dedicada à
 * resposta afirmativa por eco do verbo (mesmo traço que o eslavo eclesiástico antigo, `cu`, também
 * documenta pelo mesmo motivo).
 *
 * Verbo “aver” (ter): a tabela de presente do Wiktionary para a 1ª pessoa (yo) traz só formas
 * reconstruídas (*e, *aigo, *ayo, nenhuma com página própria) — por isso nenhuma frase deste pacote
 * usa “yo” com “aver”; os exemplos usam a 3ª pessoa “ave” (atestada) em vez disso. “Nombre” (nome)
 * é confiança média: só citado como etimologia do espanhol moderno (“Old Spanish nombre, nomne”),
 * sem seção própria no Wiktionary.
 *
 * NÍVEL A2 (ver `incomplete` em index.ts): todo substantivo, adjetivo, numeral e advérbio novo
 * desta leva foi conferido no Wiktionary (categoria “Old Spanish nouns/adjectives/numerals/
 * adverbs”, com página e etimologia próprias — ex. “cabeça”, “cibdat”, “onze”, “agora”). Os verbos
 * novos (comer, bever, dormir, venir, tomar, andar, cantar, buscar, fazer) também têm página própria
 * no Wiktionary (categoria “Old Spanish verbs”), mas, como já valia para “fablar”/“dezir”/“comer” na
 * sessão anterior, nenhuma dessas páginas traz uma tabela de conjugação do presente — por isso as
 * formas conjugadas usadas nos exemplos (como, bebe, viene…) seguem a terminação regular da classe
 * -er/-ir, a MESMA terminação já confirmada nas tabelas de “seer” (sedemos, seedes) e “aver”
 * (avedes) citadas na sessão anterior — uma extensão regular da mesma classe, nunca uma forma
 * inventada do zero. A 1ª pessoa do singular (-o) é a terminação mais estável do latim ao romance e
 * já aparece confirmada em “seyo/seo” (seer); por isso, diferente de “aver”, este pacote já usa
 * “yo” com os verbos regulares novos. Os numerais 11, 16, 20, 60 e 80 (onze, seze, veynte,
 * sessaenta, ochenta) e os ordinais em -eno (dozeno, noveno) vêm todos da categoria “Old Spanish
 * numerals”/“Old Spanish adjectives” do Wiktionary — o pacote NÃO ensina a sequência completa de 1
 * a 100, só os números com página própria confirmada (lacuna honesta, mesmo critério do “sí”).
 */
export const ROWS: VocabRow[] = [
  // Expressões e essenciais
  ['non', 'não', 'advérbio', 'Essenciais', '👎', 'Vino? Non, agua.'],
  // Pronomes
  ['yo', 'eu', 'pronome', 'Pessoas', '🙋', 'Yo seo Linu.'],
  ['tú', 'tu', 'pronome', 'Pessoas', '🫵', 'Tú sees cavallero?'],
  ['él', 'ele', 'pronome', 'Pessoas', '👨', 'Él sie amigo.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos sedemos amigos.'],
  ['vos', 'vós (você, cortês)', 'pronome', 'Pessoas', '🫵', 'Vos avedes un fijo?'],
  // Verbos-chave
  ['seer', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Yo seo Linu.'],
  ['aver', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Él ave un fijo.'],
  // Família
  ['padre', 'pai', 'substantivo', 'Pessoas', '👨', 'Mio padre ave un can.', 'm'],
  ['madre', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mi madre ave una casa.', 'f'],
  ['fijo', 'filho', 'substantivo', 'Pessoas', '🧒', 'El rey ave un fijo.', 'm'],
  ['fija', 'filha', 'substantivo', 'Pessoas', '🧒', 'El rey ave una fija.', 'f'],
  ['ermano', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mio ermano ave un can.', 'm'],
  ['ermana', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mi ermana ave un gato.', 'f'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Mio amigo sie cavallero.', 'm'],
  ['nombre', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mio nombre sie Linu.', 'm'],
  // Casa, corte e bichos
  ['casa', 'casa', 'substantivo', 'Essenciais', '🏠', 'Mi casa sie grande.', 'f'],
  ['cavallero', 'cavaleiro', 'substantivo', 'Essenciais', '⚔️', 'El rey ave un cavallero.', 'm'],
  ['rey', 'rei', 'substantivo', 'Essenciais', '👑', 'El rey ave un fijo.', 'm'],
  ['can', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mio can sie negro.', 'm'],
  ['gato', 'gato', 'substantivo', 'Essenciais', '🐈', 'Mio gato sie blanco.', 'm'],
  // Comida e bebida
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'El pan sie bueno.', 'm'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'El vino sie vermejo.', 'm'],
  ['agua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Agua, non vino.', 'f'],
  // Cores
  ['blanco', 'branco', 'adjetivo', 'Cores', '⚪', 'Mio gato sie blanco.'],
  ['negro', 'preto', 'adjetivo', 'Cores', '⚫', 'Mio can sie negro.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'Verde e bien sençido.'],
  ['vermejo', 'vermelho', 'adjetivo', 'Cores', '🔴', 'El vino sie vermejo.'],
  // Adjetivos essenciais
  ['grande', 'grande', 'adjetivo', 'Essenciais', '📏', 'Mi casa sie grande.'],
  ['bueno', 'bom', 'adjetivo', 'Essenciais', '👍', 'El pan sie bueno.'],
  // Números
  ['uno', 'um', 'numeral', 'Números', '1️⃣', 'Un cavallero.'],
  ['dos', 'dois', 'numeral', 'Números', '2️⃣', 'Dos canes.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres gatos.'],
  ['quatro', 'quatro', 'numeral', 'Números', '4️⃣', 'Quatro fijos.'],
  ['çinco', 'cinco', 'numeral', 'Números', '5️⃣', 'Çinco amigos.'],
  ['seys', 'seis', 'numeral', 'Números', '6️⃣', 'Seys reys.'],
  ['siete', 'sete', 'numeral', 'Números', '7️⃣', 'Siete casas.'],
  ['ocho', 'oito', 'numeral', 'Números', '8️⃣', 'Ocho panes.'],
  ['nueve', 'nove', 'numeral', 'Números', '9️⃣', 'Nueve vinos.'],
  ['diez', 'dez', 'numeral', 'Números', '🔟', 'Diez casas.'],
  // ── A2.1: números maiores e ordinais ──
  ['onze', 'onze', 'numeral', 'Números', '✨', 'Onze cavalleros.'],
  ['seze', 'dezesseis', 'numeral', 'Números', '✨', 'Seze dias.'],
  ['veynte', 'vinte', 'numeral', 'Números', '✨', 'Veynte amigos.'],
  ['sessaenta', 'sessenta', 'numeral', 'Números', '✨', 'Sessaenta canes.'],
  ['ochenta', 'oitenta', 'numeral', 'Números', '✨', 'Ochenta reys.'],
  ['dozeno', 'décimo segundo (12º)', 'numeral', 'Números', '🥈', 'El dozeno dia.'],
  ['noveno', 'nono (9º)', 'numeral', 'Números', '🥉', 'El noveno fijo.'],
  // ── A2.1: o corpo ──
  ['cabeça', 'cabeça', 'substantivo', 'Corpo', '👤', 'Mi cabeça sie grande.', 'f'],
  ['boca', 'boca', 'substantivo', 'Corpo', '👄', 'Mi boca sie pequenna.', 'f'],
  ['cabello', 'cabelo', 'substantivo', 'Corpo', '💇', 'Mio cabello sie negro.', 'm'],
  ['braço', 'braço', 'substantivo', 'Corpo', '💪', 'Mio braço sie fuerte.', 'm'],
  ['cuerpo', 'corpo', 'substantivo', 'Corpo', '🫀', 'Mio cuerpo sie bueno.', 'm'],
  ['cuello', 'pescoço', 'substantivo', 'Corpo', '🦒', 'Mio cuello sie longo.', 'm'],
  // ── A2.1: tempo ──
  ['dia', 'dia', 'substantivo', 'Tempo', '📅', 'Buen dia, amigo!', 'm'],
  ['anno', 'ano', 'substantivo', 'Tempo', '🗓️', 'Un anno e un dia.', 'm'],
  ['agora', 'agora', 'advérbio', 'Tempo', '⏰', 'Agora seo cavallero.'],
  ['siempre', 'sempre', 'advérbio', 'Tempo', '♾️', 'Siempre seo amigo.'],
  ['cras', 'amanhã (arcaico)', 'advérbio', 'Tempo', '🌅', 'Cras, non oy.'],
  ['oy', 'hoje', 'advérbio', 'Tempo', '☀️', 'Oy sie buen dia.'],
  ['anoche', 'ontem à noite', 'advérbio', 'Tempo', '🌙', 'Anoche vino un cavallero.'],
  ['cielo', 'céu', 'substantivo', 'Essenciais', '☁️', 'El cielo sie blanco.', 'm'],
  // ── A2.2: cidade e casa ──
  ['cibdat', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Valençia sie una grant cibdat.', 'f'],
  ['dinero', 'dinheiro', 'substantivo', 'Essenciais', '🪙', 'El cavallero ave dinero.', 'm'],
  ['camisa', 'camisa', 'substantivo', 'Essenciais', '👔', 'Mi camisa sie blanca.', 'f'],
  ['carreta', 'carroça', 'substantivo', 'Essenciais', '🛒', 'La carreta sie grande.', 'f'],
  ['buey', 'boi', 'substantivo', 'Essenciais', '🐂', 'El buey sie fuerte.', 'm'],
  ['asno', 'burro', 'substantivo', 'Essenciais', '🫏', 'El asno sie pequenno.', 'm'],
  ['castiello', 'castelo', 'substantivo', 'Essenciais', '🏯', 'El castiello sie grande.', 'm'],
  ['cama', 'cama', 'substantivo', 'Essenciais', '🛏️', 'Mi cama sie pequenna.', 'f'],
  // ── A2.2: verbos novos (regulares -er/-ir, ver nota de confiança no cabeçalho) ──
  ['comer', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Yo como pan.'],
  ['bever', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Yo bevo vino.'],
  ['dormir', 'dormir', 'verbo', 'Verbos-chave', '😴', 'El cavallero dorme.'],
  ['venir', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Él viene de la cibdat.'],
  ['tomar', 'tomar', 'verbo', 'Verbos-chave', '🤏', 'Yo tomo el pan.'],
  ['andar', 'andar', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Nos andamos a la cibdat.'],
  ['cantar', 'cantar', 'verbo', 'Verbos-chave', '🎤', 'El cavallero canta.'],
  ['buscar', 'procurar', 'verbo', 'Verbos-chave', '🔍', 'Yo busco mio amigo.'],
  ['fazer', 'fazer', 'verbo', 'Verbos-chave', '🛠️', 'Qué fazes agora?'],
  // ── A2.2: adjetivos ──
  ['vieio', 'velho', 'adjetivo', 'Descrições', '👴', 'El rey sie vieio.'],
  ['fermoso', 'belo', 'adjetivo', 'Descrições', '✨', 'La cibdat sie fermosa.'],
  ['justo', 'justo', 'adjetivo', 'Descrições', '⚖️', 'El rey sie justo.'],
  ['loco', 'louco', 'adjetivo', 'Descrições', '🌀', 'Non seo loco.'],
];

export const VOCAB_OSP = buildVocab('osp', ROWS);
