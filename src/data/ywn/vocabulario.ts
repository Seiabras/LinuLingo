import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do yawanawá (código ISO 639-3 “ywn”), língua indígena viva da família Pano, falada
 * sobretudo na Terra Indígena Rio Gregório, município de Tarauacá (Acre, Brasil), com grupos também no
 * Peru e na Bolívia — ver index.ts para a classificação completa e as fontes do código ISO.
 *
 * ESTE É UM PACOTE DELIBERADAMENTE PEQUENO: o yawanawá é uma língua muito pouco documentada em fontes
 * digitais abertas (ao contrário do huni kuĩ/hãtxa kuĩ, pacote “cbs” deste mesmo app, que tem um artigo
 * de fonologia detalhado na Wikipédia). Depois de consultar várias fontes, só foi possível confirmar,
 * palavra por palavra, as 23 abaixo — nenhum pronome, verbo, saudação ou partícula gramatical foi
 * encontrado em nenhuma fonte consultada nesta entrega (ver a nota longa em index.ts, campo
 * `incomplete`, para a lista completa do que falta e por quê). Em vez de inventar essas lacunas, o
 * pacote fica menor e mais simples do que o modelo padrão deste app.
 *
 * Fontes consultadas (cada palavra abaixo cita a sua):
 *   - native-languages.org/yawanawa_words.htm — lista de 8 palavras básicas (números, pessoa, animal,
 *     astros, água), com versão em inglês/francês/espanhol.
 *   - native-languages.org/yawanawa_body.htm — 6 palavras do corpo, etiquetadas sobre um desenho
 *     (confirmadas pelo atributo "title" de cada etiqueta no código-fonte da página, não só pela posição
 *     visual, que a conversão para texto embaralha).
 *   - native-languages.org/fampan_words.htm — a mesma lista de 8 palavras básicas, desta vez comparada
 *     lado a lado com outras línguas pano (huestí/wɨstisɨ/besti/pwïsti… para “um”, a mesma raiz do huni
 *     kuĩ “bɨsti” e do huni kuĩ “rabɨ” pra “dois” — ver etymology em extras.ts), o que ajuda a confirmar
 *     que as formas do yawanawá não são erro de digitação isolado.
 *   - native-languages.org/yawanawa_guide.htm — guia de pronúncia (vogais, vogais nasais, consoantes),
 *     usado em gramatica.ts.
 *   - pt.wikipedia.org/wiki/Yawanawá (artigo titulado “Iauanauás”) e pib.socioambiental.org/pt/Povo:
 *     Yawanawá (Instituto Socioambiental, “Povos Indígenas no Brasil”, com a bibliografia acadêmica
 *     listada: Carid Naveira 1999, Gil 1999 e 2001, Lima 1994, Maher 1993, Vinnya et al. 2006, entre
 *     outros) — autodesignação “yawa” (queixada/porco-do-mato) + “nawa” (povo, gente), e vocabulário
 *     cultural/xamânico citado nessas fontes (shuãnka, xinaya, uni, saiti, mariri, mehina, kanë).
 *
 * Normalização: as fontes grafam os 8 números/pessoa/animal/astros com inicial maiúscula (lista em
 * estilo de tabela) e as 6 palavras do corpo com inicial minúscula — aqui todas ficam em minúscula, só
 * por consistência interna deste pacote (nenhuma mudança de som ou de letra).
 *
 * Frases de exemplo: nenhuma fonte consultada registra uma frase completa atestada em yawanawá (frases
 * com mais de uma palavra) fora da compra “yawa” + “nawa” = “Yawanawá” (ver gramatica.ts e extras.ts).
 * Por isso o campo de frase de cada palavra abaixo traz só a própria palavra — nunca uma frase nova
 * inventada juntando palavras sem uma estrutura gramatical atestada.
 */
export const ROWS: VocabRow[] = [
  // Números (native-languages.org/yawanawa_words.htm; cognatos com o huni kuĩ em fampan_words.htm)
  ['wisti', 'um', 'numeral', 'Números', '1️⃣', 'Wisti.'],
  ['rave', 'dois', 'numeral', 'Números', '2️⃣', 'Rave.'],
  // Pessoas (native-languages.org/yawanawa_words.htm; “nawa” também em pt.wikipedia.org/wiki/Yawanawá
  // e pib.socioambiental.org/pt/Povo:Yawanawá, na autodesignação “yawa” + “nawa”)
  ['nukevene', 'homem', 'substantivo', 'Pessoas', '👨', 'Nukevene.'],
  ['awinhu', 'mulher', 'substantivo', 'Pessoas', '👩', 'Awinhu.'],
  ['nawa', 'povo, gente (segunda metade do nome “Yawanawá”)', 'substantivo', 'Pessoas', '👥', 'Nawa.'],
  // Animais (native-languages.org/yawanawa_words.htm; “yawa” também na autodesignação do povo)
  ['kaman', 'cachorro', 'substantivo', 'Animais', '🐕', 'Kaman.'],
  ['yawa', 'queixada, porco-do-mato (primeira metade do nome “Yawanawá”)', 'substantivo', 'Animais', '🐗', 'Yawa.'],
  // Natureza (native-languages.org/yawanawa_words.htm)
  ['vari', 'sol', 'substantivo', 'Natureza', '☀️', 'Vari.'],
  ['uxe', 'lua', 'substantivo', 'Natureza', '🌙', 'Uxe.'],
  ['waka', 'água', 'substantivo', 'Natureza', '💧', 'Waka.'],
  // Corpo (native-languages.org/yawanawa_body.htm, confirmadas pelo atributo "title" de cada etiqueta)
  ['mapu', 'cabeça', 'substantivo', 'Corpo', '🙆', 'Mapu.'],
  ['viru', 'olho', 'substantivo', 'Corpo', '👁️', 'Viru.'],
  ['rekin', 'nariz', 'substantivo', 'Corpo', '👃', 'Rekin.'],
  ['pahinki', 'orelha', 'substantivo', 'Corpo', '👂', 'Pahinki.'],
  ['kixa', 'boca', 'substantivo', 'Corpo', '👄', 'Kixa.'],
  ['vu', 'cabelo', 'substantivo', 'Corpo', '💇', 'Vu.'],
  // Cultura (pt.wikipedia.org/wiki/Yawanawá e pib.socioambiental.org/pt/Povo:Yawanawá — vocabulário
  // xamânico e ritual citado nessas duas fontes, que se apoiam na bibliografia acadêmica sobre o povo)
  ['shuãnka', 'reza, oração de cura', 'substantivo', 'Cultura', '🙏', 'Shuãnka.'],
  ['xinaya', 'especialista em reza, uma espécie de curador/pajé mais simples', 'substantivo', 'Cultura', '🪶', 'Xinaya.'],
  ['uni', 'ayahuasca (bebida ritual)', 'substantivo', 'Cultura', '🍵', 'Uni.'],
  ['saiti', 'festa, grito ritual (termo genérico de festa)', 'substantivo', 'Cultura', '🎉', 'Saiti.'],
  ['mariri', 'festa, dança e canto ritual noturno (também o nome do festival anual do povo yawanawá)', 'substantivo', 'Cultura', '💃', 'Mariri.'],
  ['mehina', 'brincadeira ritual de tirar/disputar comida do outro', 'substantivo', 'Cultura', '🤼', 'Mehina.'],
  ['kanë', 'brincadeira ritual de imitar ou “virar” um bicho', 'substantivo', 'Cultura', '🎭', 'Kanë.'],
];

export const VOCAB_YWN = buildVocab('ywn', ROWS);
