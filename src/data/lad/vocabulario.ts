import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do judeu-espanhol (ladino) na grafia latina da revista Aki Yerushalayim, a usada pela
 * Autoridad Nasionala del Ladino (k, sh, j, dj, ny). Idioma incompleto: até o A2.2 (unidades 1 a 4) —
 * ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['buenos dias', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Buenos dias, amiga!'],
  ['ke haber?', 'e aí?, quais são as novidades? (o cumprimento mais típico)', 'expressão', 'Expressões', '👋', 'Ke haber, Moshe?'],
  ['buenas tardes', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Buenas tardes, senyora!'],
  ['buenas noches', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Buenas noches i adio!'],
  ['adio', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Adio, asta mas tadre!'],
  ['grasias', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grasias por todo!'],
  ['mersi', 'obrigado (do francês “merci”)', 'interjeição', 'Expressões', '🙏', 'Mersi muncho!'],
  ['de nada', 'de nada', 'interjeição', 'Expressões', '🙏', 'Grasias! De nada.'],
  ['por favor', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un kafe, por favor.'],
  ['perdon', 'desculpe, perdão', 'interjeição', 'Expressões', '🙏', 'Perdon, no entiendo.'],
  ['komo estas?', 'como você está?', 'expressão', 'Expressões', '🙂', 'Ke haber? Komo estas?'],
  // ── Essenciais ──
  ['si', 'sim', 'advérbio', 'Essenciais', '👍', 'Si, grasias!'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, grasias.'],
  ['i', 'e', 'conjunção', 'Essenciais', null, 'Pan i kezo.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Kafe o te?'],
  ['muncho', 'muito', 'advérbio', 'Essenciais', null, 'Mersi muncho!'],
  ['bien', 'bem', 'advérbio', 'Essenciais', '👌', 'Bien, grasias. I tu?'],
  ['ke', 'o que, que', 'pronome', 'Essenciais', '❓', 'Ke es esto?'],
  ['ande', 'onde', 'advérbio', 'Essenciais', '❓', 'Ande bives?'],
  ['komo', 'como', 'advérbio', 'Essenciais', '❓', 'Komo te yamas?'],
  ['de ande', 'de onde', 'expressão', 'Essenciais', '❓', 'De ande sos?'],
  ['kaza', 'casa', 'substantivo', 'Casa', '🏠', 'Mi kaza es chika.', 'f'],
  ['sivdad', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Estambol es una sivdad grande.', 'f'],
  ['perro', 'cachorro', 'substantivo', 'Animais', '🐕', 'El perro esta durmiendo.', 'm'],
  ['gato', 'gato', 'substantivo', 'Animais', '🐈', 'El gato es preto.', 'm'],
  ['bueno', 'bom (fem. buena)', 'adjetivo', 'Descrições', '👍', 'El pan es bueno.'],
  ['grande', 'grande', 'adjetivo', 'Descrições', '📏', 'La famiya es grande.'],
  ['chiko', 'pequeno (fem. chika)', 'adjetivo', 'Descrições', '📏', 'El gato es chiko.'],
  // ── Pessoas ──
  ['yo', 'eu', 'pronome', 'Pessoas', '🙋', 'Yo so de São Paulo.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'I tu, komo te yamas?'],
  ['el', 'ele', 'pronome', 'Pessoas', '👨', 'El es de Estambol.'],
  ['eya', 'ela', 'pronome', 'Pessoas', '👩', 'Eya es de Izmir.'],
  ['mozotros', 'nós', 'pronome', 'Pessoas', '🙌', 'Mozotros somos amigos.'],
  ['vozotros', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vozotros avlash ladino?'],
  ['eyos', 'eles', 'pronome', 'Pessoas', '👥', 'Eyos avlan ladino i ebreo.'],
  ['nombre', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Ke nombre tiene tu ermano?', 'm'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'El es mi amigo.', 'm'],
  ['amiga', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Eya es mi amiga.', 'f'],
  // ── Verbos-chave ──
  ['ser', 'ser (so, sos, es)', 'verbo', 'Verbos-chave', '🧑', 'So de São Paulo.'],
  ['estar', 'estar (esto, estas, esta)', 'verbo', 'Verbos-chave', '📍', 'Esto bien, grasias.'],
  ['tener', 'ter (tengo)', 'verbo', 'Verbos-chave', '🤲', 'Tengo un ermano.'],
  ['yamarse', 'chamar-se (me yamo)', 'verbo', 'Verbos-chave', '🏷️', 'Me yamo Rashel.'],
  ['avlar', 'falar (avlo)', 'verbo', 'Verbos-chave', '🗣️', 'Avlo un poko de ladino.'],
  ['bivir', 'morar, viver (bivo)', 'verbo', 'Verbos-chave', '🏠', 'Bivo en Estambol.'],
  ['komer', 'comer (komo)', 'verbo', 'Verbos-chave', '🍽️', 'Komo pan i kezo.'],
  ['bever', 'beber (bevo)', 'verbo', 'Verbos-chave', '🥤', 'Bevo agua.'],
  ['saver', 'saber (se)', 'verbo', 'Verbos-chave', '🧠', 'No se.'],
  ['kerer', 'querer (kero)', 'verbo', 'Verbos-chave', '💭', 'Kero ambezar ladino.'],
  ['ambezar', 'aprender; ensinar', 'verbo', 'Verbos-chave', '📚', 'Estamos ambezando ladino.'],
  ['entender', 'entender (entiendo)', 'verbo', 'Verbos-chave', '💡', 'No entiendo.'],
  // ── Pessoas (família) ──
  ['famiya', 'família', 'substantivo', 'Pessoas', '👪', 'Mi famiya es grande.', 'f'],
  ['madre', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mi madre se yama Rashel.', 'f'],
  ['padre', 'pai', 'substantivo', 'Pessoas', '👨', 'Mi padre es de Izmir.', 'm'],
  ['ermano', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Tengo un ermano.', 'm'],
  ['ermana', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Tengo una ermana.', 'f'],
  ['ijo', 'filho', 'substantivo', 'Pessoas', '🧒', 'Mi ijo tiene dies anyos.', 'm'],
  ['ija', 'filha', 'substantivo', 'Pessoas', '🧒', 'Mi ija es chika.', 'f'],
  // ── Alimentação ──
  ['agua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Un vaso de agua, por favor.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'El pan es fresko.', 'm'],
  ['leche', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'La leche es blanka.', 'f'],
  ['kezo', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Las burekas de kezo son muy buenas.', 'm'],
  ['kafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un kafe, por favor.', 'm'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un vaso de vino, por favor.', 'm'],
  // ── Números ──
  ['uno', 'um (fem. una)', 'numeral', 'Números', '1️⃣', 'Un kafe, por favor.'],
  ['dos', 'dois', 'numeral', 'Números', '2️⃣', 'Tengo dos ermanos.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres kafes, por favor.'],
  ['kuatro', 'quatro', 'numeral', 'Números', '4️⃣', 'El gato tiene kuatro patas.'],
  ['sinko', 'cinco', 'numeral', 'Números', '5️⃣', 'Sinko dias.'],
  ['sesh', 'seis', 'numeral', 'Números', '6️⃣', 'Sesh amigos.'],
  ['siete', 'sete', 'numeral', 'Números', '7️⃣', 'La semana tiene siete dias.'],
  ['ocho', 'oito', 'numeral', 'Números', '8️⃣', 'Ocho oras.'],
  ['mueve', 'nove', 'numeral', 'Números', '9️⃣', 'Mueve anyos.'],
  ['dies', 'dez', 'numeral', 'Números', '🔟', 'Dies liras.'],
  // ── Tempo ──
  ['oy', 'hoje', 'advérbio', 'Tempo', '📅', 'Oy es lunes.'],
  ['dia', 'dia', 'substantivo', 'Tempo', '☀️', 'Oy es un buen dia.', 'm'],
  ['lunes', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Oy es lunes.', 'm'],
  ['martes', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Oy es martes.', 'm'],
  ['mierkoles', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Oy es mierkoles.', 'm'],
  ['djueves', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Oy es djueves.', 'm'],
  ['viernes', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Oy es viernes.', 'm'],
  ['shabat', 'sábado (o dia de descanso)', 'substantivo', 'Tempo', '🕯️', 'Shabat shalom!', 'm'],
  ['alhad', 'domingo (do árabe, “o primeiro” dia)', 'substantivo', 'Tempo', '📅', 'Oy es alhad.', 'm'],
  // ── Cores ──
  ['kolorado', 'vermelho', 'adjetivo', 'Cores', '🔴', 'El vino es kolorado.'],
  ['azul', 'azul', 'adjetivo', 'Cores', '🔵', 'La mar es azul.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'La yerva es verde.'],
  ['blanko', 'branco', 'adjetivo', 'Cores', '⚪', 'La leche es blanka.'],
  ['preto', 'preto (como em português)', 'adjetivo', 'Cores', '⚫', 'El gato es preto.'],

  // ── A2.1 e A2.2 (10/10/2026): clima e estações, tempo e rotina, corpo e sentimentos, mercado, números ──
  // Fontes, palavra por palavra (consultadas nesta data e reconferidas em 11/10/2026):
  // - Wikcionário em inglês, seção “Ladino” de cada verbete (significado e gênero): luvia (f), inyeve (f),
  //   sol (m), sielo (m), frio/friyo, kayente, ayer, amanyana, manyana (f), agora, siempre, semana (f),
  //   anyo (m), meldar (do grego medieval “meletō”), eskrivir, durmir, lavorar, kavesa (f), mano (f),
  //   ojo (m), pie (m), boka (f), nariz (f), dolor (f), mediko (m), alegre (fem. alegra), triste,
  //   charshí (do turco “çarşı”), merkar, pagar, paras (f. pl., do turco otomano “para”), barato (fem.
  //   barata), livro (m), eskola (f), esnoga (f, com a frase “Ey senyor, voy a esnoga.”, exemplo do próprio
//   Wikcionário), vente, trenta, sinkuenta, sien.
  // - Kantoniko (kantoniko.com/words/ladino/…), dicionário de ladino com frases de falantes: tradução para o
  //   português e as frases de exemplo abaixo, copiadas de lá (só “luvya”, “syelo” e “día” foram passados
  //   para a grafia “luvia”, “sielo” e “dia” usada no curso, e números em algarismos foram escritos por
  //   extenso). Também de lá: kalor (f), invierno (m), enverano (verão).
  // - Frases MONTADAS pelas regras da gramática do curso (não tiradas prontas de fonte): “Lavoro en
  //   Estambol.” (presente em -o, como “avlo”), “Mi padre es mediko.” e “El pan es barato.” (ser + nome ou
  //   adjetivo, como “Mi padre es de Izmir”), “Sinkuenta dias.” (como “Sinko dias.”).
  ['luvia', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Vino tadre achakes de la luvia.', 'f'],
  ['inyeve', 'neve', 'substantivo', 'Natureza', '❄️', 'En Estambol, en invierno, aze mas muncha luvia ke inyeve.', 'f'],
  ['sol', 'sol', 'substantivo', 'Natureza', '☀️', 'Aki en la primavera ay bastante sol.', 'm'],
  ['sielo', 'céu', 'substantivo', 'Natureza', '🌤️', 'El sol briyava en el sielo.', 'm'],
  ['friyo', 'frio', 'adjetivo', 'Natureza', '🥶', 'No me faze ni friyo ni kalor.'],
  ['kalor', 'calor', 'substantivo', 'Natureza', '🥵', 'Ay muncha kalor, el sol esta fuego!', 'f'],
  ['kayente', 'quente', 'adjetivo', 'Descrições', '🔥', 'Agosto es el mez mas kayente.'],
  ['invierno', 'inverno', 'substantivo', 'Natureza', '⛄', 'El invierno ya vino finalmente.', 'm'],
  ['enverano', 'verão', 'substantivo', 'Natureza', '🏖️', 'En el enverano la plaj esta muy ermoza.', 'm'],
  ['ayer', 'ontem', 'advérbio', 'Tempo', '⏪', 'Ni komi ni bevi ayer.'],
  ['amanyana', 'amanhã', 'advérbio', 'Tempo', '⏩', 'De aki mos vamos a Amsterdam amanyana.'],
  ['manyana', 'manhã', 'substantivo', 'Tempo', '🌄', 'A las diez de la manyana.', 'f'],
  ['agora', 'agora', 'advérbio', 'Tempo', '⏱️', 'Agora puedo meldar en ladino.'],
  ['siempre', 'sempre', 'advérbio', 'Tempo', '♾️', 'Mi mama siempre kontava anekdotas.'],
  ['semana', 'semana', 'substantivo', 'Tempo', '🗓️', 'En Israel alhad es el primer dia de la semana.', 'f'],
  ['anyo', 'ano', 'substantivo', 'Tempo', '📆', 'Decembre es el ultimo mez del anyo.', 'm'],
  ['meldar', 'ler', 'verbo', 'Verbos-chave', '📖', 'Puedes meldar en ladino?'],
  ['eskrivir', 'escrever', 'verbo', 'Verbos-chave', '✍️', 'Me puedes eskrivir aparte si keres.'],
  ['durmir', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Durmir bueno es importante para la mente i el puerpo.'],
  ['lavorar', 'trabalhar', 'verbo', 'Verbos-chave', '💼', 'Lavoro en Estambol.'],
  ['kavesa', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Shakeka es dolor de kavesa.', 'f'],
  ['mano', 'mão', 'substantivo', 'Corpo', '✋', 'No desha el livro de la mano.', 'f'],
  ['ojo', 'olho', 'substantivo', 'Corpo', '👁️', 'El ojo ve, la alma dezea.', 'm'],
  ['pie', 'pé', 'substantivo', 'Corpo', '🦶', 'Kaminando a pie komo dies minutos.', 'm'],
  ['boka', 'boca', 'substantivo', 'Corpo', '👄', 'Komemos i avlamos kon la boka.', 'f'],
  ['nariz', 'nariz', 'substantivo', 'Corpo', '👃', 'El Doktor Beraha era alto i muy flako, teniya un antojo sovre la nariz.', 'f'],
  ['dolor', 'dor', 'substantivo', 'Corpo', '🤕', 'Mas vale pan kon amor ke gayina kon dolor.', 'f'],
  ['mediko', 'médico', 'substantivo', 'Profissões', '👨‍⚕️', 'Mi padre es mediko.', 'm'],
  ['alegre', 'feliz (fem. alegra)', 'adjetivo', 'Sentimentos', '😊', 'Tu alegre i yo kontente.'],
  ['triste', 'triste', 'adjetivo', 'Sentimentos', '😢', 'Su konseja triste me izo verter lagrimas.'],
  ['charshi', 'mercado', 'substantivo', 'Cidade', '🏪', 'Sara se fue al charshi ayer.', 'm'],
  ['merkar', 'comprar', 'verbo', 'Verbos-chave', '🛍️', 'En Israel puedes merkar livros ebreos.'],
  ['pagar', 'pagar', 'verbo', 'Verbos-chave', '💳', 'Le van a pagar segun sus echas.'],
  ['paras', 'dinheiro', 'substantivo', 'Cidade', '💰', 'No ay paras para merkar un oto muevo.', 'f'],
  ['barato', 'barato (fem. barata)', 'adjetivo', 'Descrições', '🪙', 'El pan es barato.'],
  ['livro', 'livro', 'substantivo', 'Essenciais', '📕', 'Este livro es de mi ermano.', 'm'],
  ['eskola', 'escola', 'substantivo', 'Cidade', '🏫', 'Los ijos se van a la eskola kada dia.', 'f'],
  ['esnoga', 'sinagoga', 'substantivo', 'Cidade', '🕍', 'Ey senyor, voy a esnoga.', 'f'],
  ['vente', 'vinte', 'numeral', 'Números', '🔢', 'Eyos bivieron en Espanya durante vente anyos.'],
  ['trenta', 'trinta', 'numeral', 'Números', '🔢', 'Merki un livro en ladino de trenta pajinas.'],
  ['sinkuenta', 'cinquenta', 'numeral', 'Números', '🔢', 'Sinkuenta dias.'],
  ['sien', 'cem', 'numeral', 'Números', '💯', 'Mas vale sien anyos de galera, ke ir debasho de tierra.'],
];

export const VOCAB_LAD = buildVocab('lad', ROWS);
