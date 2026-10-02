import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tapiete (tpj, autodesignação “tapiete”), língua tupi-guarani viva falada por um
 * grupo pequeno no Chaco, na fronteira entre Argentina, Bolívia e Paraguai — DIFERENTE do guarani
 * paraguaio (gn), do mbyá (gun) e do kaiowá/guarani ñandeva já presentes neste app, embora da mesma
 * família. A documentação específica do tapiete é escassa; por isso este vocabulário é bem menor que o
 * de outras línguas do app, mas cada palavra abaixo foi conferida numa fonte linguística ESPECÍFICA
 * sobre o tapiete (nunca copiada de outra variedade guarani):
 *
 *   - González, Hebe (2010) “Una aproximación a la fonología del tapiete (Tupí-Guaraní)”, LIAMES
 *     (Línguas Indígenas Americanas) 8, pp. 7-43, Unicamp — periodicos.sbu.unicamp.br/ojs/index.php/
 *     liames/article/view/1469 — artigo acadêmico de uma linguista que fez trabalho de campo com cerca
 *     de 80 famílias tapietes assentadas na “Misión Los Tapietes”, Tartagal, província de Salta,
 *     Argentina (nota de rodapé 1 do artigo). TODAS as palavras do vocabulário abaixo vêm deste artigo,
 *     que usa um “alfabeto tentativo tapiete” (nota 5) para transcrever cada exemplo ao lado da sua
 *     tradução em espanhol — é essa forma ortográfica (não o colchete fonético nem a barra fonológica)
 *     que este pacote usa como `word_target`.
 *   - en.wikipedia.org/wiki/Tapiete_language — classificação (tupi-guarani > guarani > guarani
 *     boliviano oriental), países onde se fala, código ISO 639-3 “tpj”.
 *   - es.wikipedia.org/wiki/Tapietes — autoglotônimo “tapiete” (usado na Argentina e na Bolívia; os
 *     grupos do Paraguai preferem “ñandereta”, “ava” ou “guaraní ñandeva”), etimologia do nome
 *     (“tapiete” vem do guarani “tapii ete”, lit. “verdadeiros escravos” — um exônimo histórico), e os
 *     números de falantes por país (censos de 2010-2012: Paraguai ~2.470 pessoas tapietes e 1.748
 *     falantes de primeira língua; Argentina 407 pessoas; Bolívia 144 pessoas).
 *   - Glottolog (tapi1253) e ISO 639-3 (iso639-3.sil.org/code/tpj) — confirmam o código e citam
 *     González (2005) como quem propõe o tapiete como desenvolvimento independente dentro do
 *     tupi-guarani (outros autores, como Dietrich 1986, o tratam como dialeto do avá-guaraní/chiriguano
 *     — ver a nota em index.ts).
 *
 * IMPORTANTE sobre as frases de exemplo: o artigo de González (2010) é um estudo de FONOLOGIA, não um
 * dicionário com frases completas — a maioria das palavras aparece sozinha, citada ao lado da sua
 * tradução (muitas vezes já em 3ª pessoa, sem cópula: “pete” é glosado “castiga”, “ki'a” é glosado “(es)
 * sucio”). Por isso:
 *   (a) Quando o artigo cita uma frase ATESTADA de verdade (seção de morfofonologia, 7.1-7.1.6), ela é
 *       usada tal qual: “Ha'e ñi-mbo'e.” (él/ella estudia, ex. 79) e “Heta o-ĩ.” (hay mucho, ex. 70b).
 *   (b) Para as demais palavras, a frase de exemplo foi MONTADA combinando só morfemas atestados no
 *       próprio artigo, nunca palavras novas: o prefixo de 1ª pessoa ativa “a-” (atestado em pelo menos
 *       12 exemplos diferentes, como “a-karu” comer, “a-pota” querer, “a-kiye” ter medo, “a-che” dormir)
 *       combinado com uma raiz verbal da lista (“A-karu.”, eu como); e o pronome demonstrativo “ampo”
 *       (este/isto, ex. 34) combinado com um substantivo da lista (“Ampo tata.”, isto é fogo) — a ordem
 *       demonstrativo+substantivo segue o padrão geral das línguas tupi-guarani, mas NÃO é discutida
 *       nesse artigo de fonologia (que não cobre sintaxe), então deve ser tratada como uma combinação
 *       razoável, não como uma regra confirmada. Adjetivos e verbos sem prefixo são citados sozinhos,
 *       exatamente como no artigo (predicado sem cópula, 3ª pessoa): “Iro.” ((é) amargo).
 *
 * O tapiete não marca gênero gramatical nos substantivos (sem artigos “o/a”); por isso `gender` fica
 * sempre de fora. A língua tem harmonia nasal (uma raiz nasal nasaliza vogais e consoantes vizinhas) e
 * só sílabas abertas (CV, V, CVV, sem consoante final exceto nasal homorgânica ou /h/) — ver
 * gramatica.ts.
 *
 * Palavras com sentido conflitante entre dois trechos do MESMO artigo foram excluídas por segurança
 * (ex.: “pi'a” aparece glosado “vientre, panza” num lugar e “huevo” noutro; “owa” aparece glosado
 * “compra” num lugar e “seis” noutro) — ver o relatório da entrega.
 */
export const ROWS: VocabRow[] = [
  // Pessoas (pronomes, parentesco, autodesignação)
  ['nde', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Nde tapiete.'],
  ['ha\'e', 'ele, ela', 'pronome', 'Pessoas', '🧑', "Ha'e ñi-mbo'e."],
  ['tu', 'pai', 'substantivo', 'Pessoas', '👨', 'Ampo tu.'],
  ['sĩ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ampo sĩ.'],
  ["sanya'ɨ", 'criança', 'substantivo', 'Pessoas', '🧒', "Ampo sanya'ɨ."],
  ['tapiete', 'tapiete (pessoa ou falante do povo tapiete)', 'substantivo', 'Pessoas', '🏞️', "Ha'e tapiete."],
  // Natureza
  ['ɨ', 'água', 'substantivo', 'Natureza', '💧', 'Ampo ɨ.'],
  ['tata', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ampo tata.'],
  ["ka'a", 'mato, floresta', 'substantivo', 'Natureza', '🌳', "Ampo ka'a."],
  ['kwarasɨ', 'sol', 'substantivo', 'Natureza', '☀️', 'Ampo kwarasɨ.'],
  // Animais
  ['ayuru', 'papagaio', 'substantivo', 'Animais', '🦜', 'Ampo ayuru.'],
  ['anguya', 'rato', 'substantivo', 'Animais', '🐀', 'Ampo anguya.'],
  ['minta', 'gato', 'substantivo', 'Animais', '🐈', 'Ampo minta.'],
  ['mberu', 'mosca', 'substantivo', 'Animais', '🪰', 'Ampo mberu.'],
  ['taso', 'lagarta, verme', 'substantivo', 'Animais', '🐛', 'Ampo taso.'],
  ['awara', 'raposa', 'substantivo', 'Animais', '🦊', 'Ampo awara.'],
  // Comida
  ['kãwĩ', 'chicha (bebida de milho fermentado)', 'substantivo', 'Comida', '🍶', 'Ampo kãwĩ.'],
  ['awati', 'milho', 'substantivo', 'Comida', '🌽', 'Ampo awati.'],
  ["so'o", 'carne', 'substantivo', 'Comida', '🍖', "A-karu so'o."],
  ['shure', 'batata', 'substantivo', 'Comida', '🥔', 'Ampo shure.'],
  ["kɨ'ɨ̃", 'pimenta (ají)', 'substantivo', 'Comida', '🌶️', "Ampo kɨ'ɨ̃."],
  // Corpo
  ['pire', 'pele', 'substantivo', 'Corpo', '✋', 'Ampo pire.'],
  ['yayu', 'pescoço', 'substantivo', 'Corpo', '🧣', 'Ampo yayu.'],
  // Casa e objetos
  ['onche', 'porta', 'substantivo', 'Casa', '🚪', 'Ampo onche.'],
  ['tupa', 'cama', 'substantivo', 'Casa', '🛏️', 'Ampo tupa.'],
  ['kĩse', 'faca', 'substantivo', 'Casa', '🔪', 'Ampo kĩse.'],
  ['yĩ', 'machado', 'substantivo', 'Casa', '🪓', 'Ampo yĩ.'],
  ["angu'a", 'pilão', 'substantivo', 'Casa', '🥣', "Ampo angu'a."],
  ['tenta', 'povoado, aldeia', 'substantivo', 'Casa', '🏘️', 'Ampo tenta.'],
  // Números
  ['pente', 'um', 'numeral', 'Números', '1️⃣', 'Pente.'],
  ['huri', 'oito', 'numeral', 'Números', '8️⃣', 'Huri.'],
  // Verbos
  ['karu', 'come, comer', 'verbo', 'Verbos', '🍽️', 'A-karu.'],
  ['pota', 'quer, querer', 'verbo', 'Verbos', '🙏', 'A-pota.'],
  ['hendu', 'escuta, escutar', 'verbo', 'Verbos', '👂', 'A-hendu.'],
  ['hesha', 'vê, ver', 'verbo', 'Verbos', '👀', 'A-hesha.'],
  ['wata', 'anda, caminhar', 'verbo', 'Verbos', '🚶', 'A-wata.'],
  ['wähe', 'chega, chegar', 'verbo', 'Verbos', '🏁', 'Wähe.'],
  ['puka', 'ri, rir', 'verbo', 'Verbos', '😄', 'A-puka.'],
  ['wewe', 'voa, voar', 'verbo', 'Verbos', '🕊️', 'Wewe.'],
  ["mbo'e", 'ensina, ensinar', 'verbo', 'Verbos', '📚', "Ha'e ñi-mbo'e."],
  ['katu', 'sabe, conhecer', 'verbo', 'Verbos', '🧠', 'A-katu.'],
  // Adjetivos
  ['iro', 'amargo', 'adjetivo', 'Adjetivos', '😖', 'Iro.'],
  ['puku', 'comprido', 'adjetivo', 'Adjetivos', '📏', 'Puku.'],
  ['pörä', 'bonito, formoso', 'adjetivo', 'Adjetivos', '🌺', 'Pörä.'],
  ['hũwã', 'preto', 'adjetivo', 'Adjetivos', '⚫', 'Hũwã.'],
  ['minshi', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'Minshi.'],
  // Expressões (demonstrativo, quantificador, conjunção)
  ['ampo', 'este, isto', 'pronome', 'Expressões', '👉', 'Ampo tata.'],
  ['heta', 'muito', 'advérbio', 'Expressões', '➕', 'Heta o-ĩ.'],
  ['härä', 'porque', 'conjunção', 'Expressões', '❓', 'Härä.'],
];

export const VOCAB_TPJ = buildVocab('tpj', ROWS);
