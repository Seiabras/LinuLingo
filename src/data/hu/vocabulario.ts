import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do húngaro (magyar nyelv). Nível A1 e A2 completos (unidades 1 a 4) — ver o campo
 * `incomplete` do pacote em index.ts.
 *
 * Palavras e sentidos conferidos no Wiktionary (en.wiktionary.org, verbete de cada palavra) e na
 * lista Swadesh do húngaro (Wiktionary, «Appendix:Hungarian Swadesh list»). As frases de exemplo são
 * construções próprias a partir de regras e formas confirmadas nessas fontes e na Wikipédia
 * («Hungarian grammar», «Hungarian verbs»): a conjugação eszem/eszel/eszik, os indefinidos
 * kérek/látok, o sufixo possessivo -m/-om/-em/-am (lakásom, szemem), o acusativo -t com vogal de
 * ligação, e a frase sem verbo «Ez egy szép ház.» (isto é uma bela casa), que mostra que o húngaro
 * dispensa o verbo «ser/estar» na 3ª pessoa com predicado nominal/adjetivo.
 *
 * Nível A2.1/A2.2 (unidades 3 e 4): as mesmas fontes acima, mais os verbetes do Wiktionary de cada
 * palavra e forma nova (clima, roupas, corpo, cidade, profissões, sentimentos, verbos e números de
 * 20 a 100), incluindo o acusativo conferido palavra por palavra (kabátot, nadrágot, sapkát, cipőt,
 * madarat) e o passado conferido na tabela de conjugação de cada verbo (dolgozott, tanult, írt,
 * olvasott, aludt, vásárolt). “Mit”, “mint”, “milyen”, “lesz” e “volt” também conferidos no
 * Wiktionary. Fonte cultural da moeda forint: Wikipédia em inglês, «Hungarian forint».
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['szia', 'oi; tchau (informal, entre pessoas que se tratam por “te”)', 'interjeição', 'Expressões', '👋', 'Szia! Hogy vagy?'],
  ['jó reggelt', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Jó reggelt, Éva!'],
  ['jó éjszakát', 'boa noite (ao dormir)', 'interjeição', 'Expressões', '🌙', 'Jó éjszakát!'],
  ['viszlát', 'até logo, tchau', 'interjeição', 'Expressões', '👋', 'Köszönöm, és viszlát!'],
  ['köszönöm', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Köszönöm, barátom!'],
  ['kérem', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Egy kenyeret kérek.'],

  // Essenciais (sim/não, perguntas, adjetivos de base)
  ['igen', 'sim', 'advérbio', 'Essenciais', '👍', 'Igen, köszönöm.'],
  ['nem', 'não', 'advérbio', 'Essenciais', '👎', 'Nem, köszönöm.'],
  ['hol', 'onde', 'pronome', 'Essenciais', '❓', 'Hol van a ház?'],
  ['ki', 'quem', 'pronome', 'Essenciais', '❓', 'Ki ő?'],
  ['mi', 'o que (também quer dizer “nós”, veja a gramática)', 'pronome', 'Essenciais', '❓', 'Mi ez?'],
  ['miért', 'por quê (de “mi” = o quê + “-ért” = por)', 'advérbio', 'Essenciais', '❓', 'Miért vagy itt?'],
  ['jó', 'bom', 'adjetivo', 'Essenciais', '👍', 'Ez jó.'],
  ['nagy', 'grande', 'adjetivo', 'Essenciais', '📏', 'Ez egy nagy ház.'],
  ['kicsi', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'A macska kicsi.'],

  // Pessoas
  ['én', 'eu', 'pronome', 'Pessoas', '🙋', 'Én vagyok Éva.'],
  ['te', 'você (tratamento informal)', 'pronome', 'Pessoas', '🫵', 'Te vagy Péter?'],
  ['ő', 'ele, ela (não marca gênero)', 'pronome', 'Pessoas', '🧑', 'Ő a barátom.'],
  ['név', 'nome', 'substantivo', 'Pessoas', '🏷️', 'A nevem Éva.'],
  ['anya', 'mãe', 'substantivo', 'Pessoas', '👩', 'Anyám jó.'],
  ['apa', 'pai', 'substantivo', 'Pessoas', '👨', 'Apám jó.'],
  ['testvér', 'irmão, irmã (de “test” = corpo + “vér” = sangue)', 'substantivo', 'Pessoas', '🧑', 'Van egy testvérem.'],
  ['lány', 'menina, filha', 'substantivo', 'Pessoas', '👧', 'A lány jó.'],

  // Natureza
  ['víz', 'água', 'substantivo', 'Natureza', '💧', 'Kérek vizet.'],
  ['tűz', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ez egy nagy tűz.'],
  ['nap', 'sol; dia', 'substantivo', 'Natureza', '☀️', 'A nap nagy.'],
  ['hold', 'lua', 'substantivo', 'Natureza', '🌙', 'A hold szép.'],
  ['csillag', 'estrela', 'substantivo', 'Natureza', '⭐', 'Ez egy csillag.'],
  ['fa', 'árvore', 'substantivo', 'Natureza', '🌳', 'Ez egy nagy fa.'],

  // Animais
  ['kutya', 'cachorro', 'substantivo', 'Animais', '🐕', 'Van egy kutyám.'],
  ['macska', 'gato', 'substantivo', 'Animais', '🐈', 'A macska kicsi.'],
  ['madár', 'pássaro', 'substantivo', 'Animais', '🐦', 'Ez egy madár.'],
  ['hal', 'peixe', 'substantivo', 'Animais', '🐟', 'Eszem egy halat.'],
  ['ló', 'cavalo', 'substantivo', 'Animais', '🐴', 'A ló nagy.'],

  // Alimentação
  ['kenyér', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Eszem kenyeret.'],
  ['alma', 'maçã', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'Eszem egy almát.'],
  ['tej', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Iszom tejet.'],
  ['gyümölcs', 'fruta', 'substantivo', 'Alimentação e Restaurantes', '🍇', 'Szeretem a gyümölcsöt.'],
  ['friss', 'fresco (do alemão “frisch”)', 'adjetivo', 'Alimentação e Restaurantes', '🆕', 'Friss kenyér!'],

  // Corpo
  ['fej', 'cabeça', 'substantivo', 'Corpo', '🙂', 'A fejem nagy.'],
  ['szem', 'olho', 'substantivo', 'Corpo', '👁️', 'A szemem kék.'],
  ['kéz', 'mão', 'substantivo', 'Corpo', '✋', 'A kezem kicsi.'],
  ['szív', 'coração', 'substantivo', 'Corpo', '❤️', 'A szívem jó.'],

  // Casa
  ['ház', 'casa', 'substantivo', 'Casa', '🏠', 'A ház nagy.'],
  ['asztal', 'mesa', 'substantivo', 'Casa', '🍽️', 'Ez egy asztal.'],

  // Números
  ['egy', 'um', 'numeral', 'Números', '1️⃣', 'Egy kutyám van.'],
  ['kettő', 'dois (como contagem solta; antes de substantivo usa-se “két”)', 'numeral', 'Números', '2️⃣', 'Két macskám van.'],
  ['három', 'três', 'numeral', 'Números', '3️⃣', 'Három almát eszem.'],
  ['négy', 'quatro', 'numeral', 'Números', '4️⃣', 'Négy lányom van.'],
  ['öt', 'cinco', 'numeral', 'Números', '5️⃣', 'Öt kenyeret kérek.'],
  ['hat', 'seis', 'numeral', 'Números', '6️⃣', 'Hat halam van.'],
  ['hét', 'sete', 'numeral', 'Números', '7️⃣', 'Hét csillagot látok.'],
  ['nyolc', 'oito', 'numeral', 'Números', '8️⃣', 'Nyolc madarat látok.'],
  ['kilenc', 'nove', 'numeral', 'Números', '9️⃣', 'Kilenc kutyát látok.'],
  ['tíz', 'dez', 'numeral', 'Números', '🔟', 'Tíz kutya van a házban.'],
  ['húsz', 'vinte', 'numeral', 'Números', '🔢', 'Húsz kutya van a házban.'],

  // Verbos-chave (infinitivos, terminados em -ni)
  ['lenni', 'ser, estar, existir (infinitivo de “van”)', 'verbo', 'Verbos-chave', '🧍', 'Szeretek veled lenni.'],
  ['enni', 'comer (infinitivo de “eszik”)', 'verbo', 'Verbos-chave', '🍽️', 'Szeretek enni.'],
  ['inni', 'beber (infinitivo de “iszik”)', 'verbo', 'Verbos-chave', '🥤', 'Szeretek vizet inni.'],
  ['menni', 'ir (infinitivo de “megy”)', 'verbo', 'Verbos-chave', '🚶', 'Szeretek menni.'],
  ['tudni', 'saber (infinitivo de “tud”)', 'verbo', 'Verbos-chave', '🧠', 'Szeretném tudni, mit gondolsz.'],
  ['szeretni', 'gostar, amar (infinitivo de “szeret”)', 'verbo', 'Verbos-chave', '❤️', 'Szeretni jó.'],
  ['beszélni', 'falar (infinitivo de “beszél”)', 'verbo', 'Verbos-chave', '🗣️', 'Nem szeret beszélni.'],

  // Cores
  ['piros', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Az alma piros.'],
  ['kék', 'azul', 'adjetivo', 'Cores', '🔵', 'A víz kék.'],
  ['zöld', 'verde', 'adjetivo', 'Cores', '🟢', 'A fa zöld.'],

  // ── Clima ── (nível A2.1/A2.2, Wiktionary: idő, eső, hó, szél, felhő, meleg, hideg)
  ['idő', 'tempo (clima); também: tempo (duração)', 'substantivo', 'Clima', '🌤️', 'Milyen az idő?'],
  ['eső', 'chuva', 'substantivo', 'Clima', '🌧️', 'Esik az eső.'],
  ['hó', 'neve', 'substantivo', 'Clima', '❄️', 'Esik a hó.'],
  ['szél', 'vento', 'substantivo', 'Clima', '💨', 'A szél hideg.'],
  ['felhő', 'nuvem', 'substantivo', 'Clima', '☁️', 'Nagy felhő van.'],
  ['meleg', 'quente, calor', 'adjetivo', 'Clima', '☀️', 'Meleg van.'],
  ['hideg', 'frio', 'adjetivo', 'Clima', '🥶', 'Hideg van.'],

  // ── Roupas ── (nível A2.2, Wiktionary: ruha, cipő, kabát, nadrág, sapka; acusativo confirmado na
  // tabela de declinação de cada palavra: cipőt, kabátot, nadrágot, sapkát)
  ['ruha', 'roupa, vestido', 'substantivo', 'Roupas', '👗', 'A ruha nagy.'],
  ['cipő', 'sapato', 'substantivo', 'Roupas', '👟', 'Cipőt kérek.'],
  ['kabát', 'casaco', 'substantivo', 'Roupas', '🧥', 'Kabátot kérek.'],
  ['nadrág', 'calça', 'substantivo', 'Roupas', '👖', 'Nadrágot kérek.'],
  ['sapka', 'boné, gorro', 'substantivo', 'Roupas', '🧢', 'Sapkát kérek.'],

  // ── Corpo ── (nível A2.1, Wiktionary: láb, száj, fül, orr)
  ['láb', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'A láb nagy.'],
  ['száj', 'boca', 'substantivo', 'Corpo', '👄', 'A száj kicsi.'],
  ['fül', 'orelha', 'substantivo', 'Corpo', '👂', 'A fül nagy.'],
  ['orr', 'nariz', 'substantivo', 'Corpo', '👃', 'Az orr kicsi.'],

  // ── Cidade e lugares ── (nível A2.1, Wiktionary: város, utca, iskola, bolt)
  ['város', 'cidade', 'substantivo', 'Cidade e lugares', '🏙️', 'A város nagy.'],
  ['utca', 'rua', 'substantivo', 'Cidade e lugares', '🛣️', 'Az utca nagy.'],
  ['iskola', 'escola', 'substantivo', 'Cidade e lugares', '🏫', 'Az iskola nagy.'],
  ['bolt', 'loja', 'substantivo', 'Cidade e lugares', '🏪', 'A bolt kicsi.'],

  // ── Profissões ── (nível A2.1, Wiktionary: orvos, tanár, rendőr, szakács)
  ['orvos', 'médico', 'substantivo', 'Profissões', '🩺', 'Orvos vagyok.'],
  ['tanár', 'professor', 'substantivo', 'Profissões', '👨‍🏫', 'Tanár vagyok.'],
  ['rendőr', 'policial', 'substantivo', 'Profissões', '👮', 'Rendőr vagyok.'],
  ['szakács', 'cozinheiro, chef', 'substantivo', 'Profissões', '👨‍🍳', 'Szakács vagyok.'],

  // ── Sentimentos ── (nível A2.2, Wiktionary: boldog, szomorú, fáradt, éhes, szomjas, mérges)
  ['boldog', 'feliz', 'adjetivo', 'Sentimentos', '😄', 'Boldog vagyok.'],
  ['szomorú', 'triste', 'adjetivo', 'Sentimentos', '😢', 'Szomorú vagyok.'],
  ['fáradt', 'cansado', 'adjetivo', 'Sentimentos', '😴', 'Fáradt vagyok.'],
  ['éhes', 'com fome', 'adjetivo', 'Sentimentos', '🤤', 'Éhes vagyok.'],
  ['szomjas', 'com sede', 'adjetivo', 'Sentimentos', '🥤', 'Szomjas vagyok.'],
  ['mérges', 'bravo, com raiva (também: venenoso)', 'adjetivo', 'Sentimentos', '😠', 'Mérges vagyok.'],

  // ── Mais verbos (infinitivos) ── (nível A2.1, Wiktionary: dolgozik, tanul, alszik, ír, olvas,
  // vásárol — infinitivo e passado confirmados na tabela de conjugação de cada verbo)
  ['dolgozni', 'trabalhar (infinitivo de “dolgozik”)', 'verbo', 'Verbos-chave', '💼', 'Szeretek dolgozni.'],
  ['tanulni', 'estudar, aprender (infinitivo de “tanul”)', 'verbo', 'Verbos-chave', '📚', 'Szeretek tanulni.'],
  ['aludni', 'dormir (infinitivo de “alszik”)', 'verbo', 'Verbos-chave', '🛌', 'Szeretek aludni.'],
  ['írni', 'escrever (infinitivo de “ír”)', 'verbo', 'Verbos-chave', '✍️', 'Szeretek írni.'],
  ['olvasni', 'ler (infinitivo de “olvas”)', 'verbo', 'Verbos-chave', '📖', 'Szeretek olvasni.'],
  ['vásárolni', 'comprar (infinitivo de “vásárol”)', 'verbo', 'Verbos-chave', '🛍️', 'Szeretek vásárolni.'],

  // ── Números 20-100 ── (nível A2.1, Wiktionary: harminc, negyven, ötven, hatvan, hetven, nyolcvan,
  // kilencven, száz; acusativo das palavras usadas nos exemplos — almát, halat, madarat, csillagot,
  // kutyát, kenyeret — já confirmado nos próprios verbetes)
  ['harminc', 'trinta', 'numeral', 'Números', '🔢', 'Harminc kenyeret kérek.'],
  ['negyven', 'quarenta', 'numeral', 'Números', '🔢', 'Negyven almát eszem.'],
  ['ötven', 'cinquenta', 'numeral', 'Números', '🔢', 'Ötven halat látok.'],
  ['hatvan', 'sessenta', 'numeral', 'Números', '🔢', 'Hatvan madarat látok.'],
  ['hetven', 'setenta', 'numeral', 'Números', '🔢', 'Hetven csillagot látok.'],
  ['nyolcvan', 'oitenta', 'numeral', 'Números', '🔢', 'Nyolcvan kutyát látok.'],
  ['kilencven', 'noventa', 'numeral', 'Números', '🔢', 'Kilencven kutya van a házban.'],
  ['száz', 'cem', 'numeral', 'Números', '💯', 'Száz kenyér van.'],

  // ── Tempo ── (nível A2.1/A2.2, Wiktionary: tegnap, holnap)
  ['tegnap', 'ontem', 'advérbio', 'Tempo', '⏮️', 'Tegnap dolgoztam.'],
  ['holnap', 'amanhã', 'advérbio', 'Tempo', '⏭️', 'Holnap hideg lesz.'],
];

export const VOCAB_HU = buildVocab('hu', ROWS);
