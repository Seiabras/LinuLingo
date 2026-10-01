import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do vêneto na Grafia Veneta Unitaria (GVU, de 1995), a norma gráfica mais usada hoje
 * entre as várias línguas vênetas (veneziano, veronês, padovano, trevisano...). Idioma incompleto:
 * por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do
 * pacote. A letra “x” marca o som “z” de “zero” (não existe em português); a letra “ƚ” marca um
 * “l” fraco, que em muitas variedades quase não se ouve.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bondì', 'bom dia, olá (vale o dia todo)', 'interjeição', 'Expressões', '🌅', 'Bondì! Come stu?'],
  ['bonasera', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bonasera a tuti!'],
  ['bonanote', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Bonanote, mama!'],
  ['ciao', 'tchau; também oi, entre amigos', 'interjeição', 'Expressões', '👋', 'Ciao, a próssima!'],
  ['grasie', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grasie mile!'],
  ['par piaser', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un cafè, par piaser.'],
  ['scusa', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Scusa, dove xe la stassion?'],
  ['come stu?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Ciao, Ana! Come stu?'],
  // ── Essenciais ──
  ['sì', 'sim', 'advérbio', 'Essenciais', '👍', 'Sì, grasie.'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, grasie.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e formajo.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Cafè o tè?'],
  ['tanto', 'muito', 'advérbio', 'Essenciais', null, 'Grasie tanto!'],
  ['anca', 'também', 'advérbio', 'Essenciais', null, 'Mi parlo anca vèneto.'],
  ['ben', 'bem', 'advérbio', 'Essenciais', '👌', 'Ben, grasie. E ti?'],
  ['cossa', 'o que, que', 'pronome', 'Essenciais', '❓', 'Cossa xe quelo?'],
  ['dove', 'onde', 'advérbio', 'Essenciais', '❓', 'Dove stat?'],
  ['come', 'como', 'advérbio', 'Essenciais', '❓', 'Come te ciamito?'],
  ['da dove', 'de onde', 'advérbio', 'Essenciais', '❓', 'Da dove sito?'],
  ['sità', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Venesia xe na sità bela.', 'f'],
  ['gheto', 'bairro (o nome nasceu em Veneza)', 'substantivo', 'Essenciais', '🏘️', 'El Gheto de Venesia xe antigo.', 'm'],
  ['caxa', 'casa', 'substantivo', 'Casa', '🏠', 'La me caxa xe picola.', 'f'],
  ['can', 'cachorro', 'substantivo', 'Animais', '🐕', 'El can dorme.', 'm'],
  ['gato', 'gato', 'substantivo', 'Animais', '🐈', 'El gato xe nero.', 'm'],
  ['bon', 'bom (fem. bona)', 'adjetivo', 'Descrições', '👍', 'El pan xe bon.'],
  ['grando', 'grande (fem. granda)', 'adjetivo', 'Descrições', '📏', 'La me fameja xe granda.'],
  ['picolo', 'pequeno (fem. picola)', 'adjetivo', 'Descrições', '📏', 'El gato xe picolo.'],
  // ── Pessoas ──
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi son Ana.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E ti, come te ciamito?'],
  ['elo', 'ele', 'pronome', 'Pessoas', '👨', 'Elo xe de Verona.'],
  ['ela', 'ela', 'pronome', 'Pessoas', '👩', 'Ela xe de Venesia.'],
  ['noialtri', 'nós', 'pronome', 'Pessoas', '🙌', 'Noialtri parlemo vèneto.'],
  ['voialtri', 'vocês', 'pronome', 'Pessoas', '🫵', 'Da dove sito, voialtri?'],
  ['lori', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Lori i sta a Padova.'],
  ['nome', 'nome', 'substantivo', 'Pessoas', '🏷️', 'El me nome xe Lino.', 'm'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Elo xe el me amigo.', 'm'],
  ['amiga', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ela xe la me amiga.', 'f'],
  // ── Verbos-chave ──
  ['essar', 'ser, estar (mi son, ti te si, elo/ela xe)', 'verbo', 'Verbos-chave', '🧑', 'Mi son de San Paulo.'],
  ['gaver', 'ter (mi go, ti te ghè, elo/ela ga)', 'verbo', 'Verbos-chave', '🤲', 'Mi go un fradeo.'],
  ['ciamarse', 'chamar-se (mi me ciamo, ti te ciamito)', 'verbo', 'Verbos-chave', '🏷️', 'Come te ciamito?'],
  ['parlar', 'falar (mi parlo)', 'verbo', 'Verbos-chave', '🗣️', 'Mi parlo on poco de vèneto.'],
  ['star', 'morar, ficar (mi stago)', 'verbo', 'Verbos-chave', '🏠', 'Mi stago a Venesia.'],
  ['ndar', 'ir (mi vago)', 'verbo', 'Verbos-chave', '🚶', 'Mi vago casa.'],
  ['magnar', 'comer (mi magno)', 'verbo', 'Verbos-chave', '🍽️', 'Mi magno pan e formajo.'],
  ['bevar', 'beber (mi bevo)', 'verbo', 'Verbos-chave', '🥤', 'Mi bevo acqua.'],
  ['voler ben', 'gostar, amar (quelo me piaxe = eu gosto disso)', 'expressão', 'Verbos-chave', '❤️', 'El vèneto me piaxe.'],
  ['saver', 'saber (mi so)', 'verbo', 'Verbos-chave', '🧠', 'No so.'],
  ['volar', 'querer (mi vojo)', 'verbo', 'Verbos-chave', '💭', 'Mi vojo imparar vèneto.'],
  ['imparar', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Noialtri imparemo vèneto.'],
  // ── Pessoas (família) ──
  ['fameja', 'família', 'substantivo', 'Pessoas', '👪', 'La me fameja xe granda.', 'f'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Me mama se ciama Rosa.', 'f'],
  ['papà', 'pai', 'substantivo', 'Pessoas', '👨', 'Me papà xe de Verona.', 'm'],
  ['fradeo', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mi go un fradeo.', 'm'],
  ['sorela', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mi go na sorela.', 'f'],
  ['fio', 'filho', 'substantivo', 'Pessoas', '🧒', 'El so fio ga diexe ani.', 'm'],
  ['fia', 'filha', 'substantivo', 'Pessoas', '🧒', 'La so fia xe picola.', 'f'],
  // ── Alimentação ──
  ['acqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Un biciero de acqua, par piaser.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'El pan xe fresco.', 'm'],
  ['late', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'El late xe bianco.', 'm'],
  ['formajo', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'El formajo xe bon.', 'm'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un cafè, par piaser.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un biciero de vin, par piaser.', 'm'],
  // ── Números ──
  ['un', 'um (fem. na)', 'numeral', 'Números', '1️⃣', 'Un cafè, par piaser.'],
  ['do', 'dois (fem. do)', 'numeral', 'Números', '2️⃣', 'Mi go do fradei.'],
  ['tre', 'três', 'numeral', 'Números', '3️⃣', 'Tre cafè, par piaser.'],
  ['quatro', 'quatro', 'numeral', 'Números', '4️⃣', 'El gato ga quatro game.'],
  ['sinque', 'cinco', 'numeral', 'Números', '5️⃣', 'Sinque dì.'],
  ['sie', 'seis', 'numeral', 'Números', '6️⃣', 'Sie ani.'],
  ['sete', 'sete', 'numeral', 'Números', '7️⃣', 'La setimana ga sete dì.'],
  ['oto', 'oito', 'numeral', 'Números', '8️⃣', 'Oto ore.'],
  ['nove', 'nove', 'numeral', 'Números', '9️⃣', 'Nove ani.'],
  ['diexe', 'dez', 'numeral', 'Números', '🔟', 'Diexe minuti.'],
  // ── Tempo ──
  ['ancò', 'hoje', 'advérbio', 'Tempo', '📅', 'Ancò xe luni.'],
  ['doman', 'amanhã', 'advérbio', 'Tempo', '📅', 'A doman!'],
  ['ieri', 'ontem', 'advérbio', 'Tempo', '📅', 'Ieri, ancò e doman.'],
  ['luni', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Ancò xe luni.', 'm'],
  ['marti', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Ancò xe marti.', 'm'],
  ['mèrcore', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Ancò xe mèrcore.', 'm'],
  ['giovedì', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Ancò xe giovedì.', 'm'],
  ['vènare', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Ancò xe vènare.', 'm'],
  ['sabo', 'sábado', 'substantivo', 'Tempo', '📅', 'Ancò xe sabo.', 'm'],
  ['doménega', 'domingo', 'substantivo', 'Tempo', '📅', 'Ancò xe doménega.', 'f'],
  // ── Cores ──
  ['rosso', 'vermelho', 'adjetivo', 'Cores', '🔴', 'El vin xe rosso.'],
  ['blu', 'azul', 'adjetivo', 'Cores', '🔵', 'El sielo xe blu.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'L’erba xe verde.'],
  ['bianco', 'branco', 'adjetivo', 'Cores', '⚪', 'El late xe bianco.'],
  ['nero', 'preto', 'adjetivo', 'Cores', '⚫', 'El gato xe nero.'],
];

export const VOCAB_VEC = buildVocab('vec', ROWS);
