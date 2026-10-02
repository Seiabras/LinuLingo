import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do húngaro (magyar nyelv). Idioma novo: por enquanto só o nível A1 (unidades 1 e 2) —
 * ver o campo `incomplete` do pacote em index.ts.
 *
 * Palavras e sentidos conferidos no Wiktionary (en.wiktionary.org, verbete de cada palavra) e na
 * lista Swadesh do húngaro (Wiktionary, «Appendix:Hungarian Swadesh list»). As frases de exemplo são
 * construções próprias a partir de regras e formas confirmadas nessas fontes e na Wikipédia
 * («Hungarian grammar», «Hungarian verbs»): a conjugação eszem/eszel/eszik, os indefinidos
 * kérek/látok, o sufixo possessivo -m/-om/-em/-am (lakásom, szemem), o acusativo -t com vogal de
 * ligação, e a frase sem verbo «Ez egy szép ház.» (isto é uma bela casa), que mostra que o húngaro
 * dispensa o verbo «ser/estar» na 3ª pessoa com predicado nominal/adjetivo.
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
  ['testvér', 'irmão, irmã (de “egy test és vér” = um corpo e sangue só)', 'substantivo', 'Pessoas', '🧑', 'Van egy testvérem.'],
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
];

export const VOCAB_HU = buildVocab('hu', ROWS);
