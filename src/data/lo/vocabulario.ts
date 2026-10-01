import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do laosiano padrão (o de Vientiane, língua oficial do Laos), escrito na escrita lao de
 * verdade. A pronúncia aproximada vem entre parênteses na tradução, na romanização usada pelo
 * Wiktionary em inglês (sistema de transliteração baseado no da Library of Congress): macron (ā, ī,
 * ū, ư̄, ǭ…) para vogal longa, e um apóstrofo (ʼ) para a consoante muda ອ, que serve de base quando
 * uma sílaba começa por vogal. Essa romanização não marca o tom diretamente em cada sílaba — o
 * laosiano padrão de Vientiane tem seis tons (médio, baixo, alto, ascendente, descendente-baixo e
 * descendente-alto), mas qual deles sai em cada palavra depende da combinação entre a classe do
 * consoante inicial (alta, média ou baixa — ver o tópico de gramática sobre a escrita), a presença de
 * um dos quatro sinais de tom e o comprimento da vogal, não de uma troca livre de som como o acento
 * tônico do português. O sistema completo está explicado no primeiro tópico de gramática. Cada
 * palavra foi verificada separadamente para o laosiano (Wiktionary em inglês, Wikipédia e Omniglot) —
 * nenhuma foi copiada do pacote do tailandês (`th`), que é uma língua aparentada mas distinta, com
 * escrita própria. Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) —
 * ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ສະບາຍດີ', 'oi, olá; tchau (sa-bāi-dī)', 'interjeição', 'Expressões', '👋', 'ສະບາຍດີ, ເຈົ້າຊື່ຫຍັງ'],
  ['ຂອບໃຈ', 'obrigado (khǭp-chai)', 'interjeição', 'Expressões', '🙏', 'ຂອບໃຈຫຼາຍ'],
  ['ຂໍໂທດ', 'desculpa, com licença (khǭ-thōt)', 'interjeição', 'Expressões', '🙏', 'ຂໍໂທດ ຂ້ອຍບໍ່ຮູ້'],
  ['ບໍ່ເປັນຫຍັງ', 'de nada; tudo bem, não foi nada (bǭ-pen-nyang)', 'interjeição', 'Expressões', '🙏', '— ຂອບໃຈ — ບໍ່ເປັນຫຍັງ'],
  ['ແດ່', 'partícula de polidez — suaviza pedidos e ordens (dǣ)', 'partícula', 'Expressões', '🙏', 'ມາແດ່'],
  ['ເດີ', 'partícula de polidez — usada em sugestões, convites e despedidas (dēu)', 'partícula', 'Expressões', '👋', 'ໂຊກດີເດີ'],
  ['ໂຊກດີ', 'boa sorte; até logo (sôhk-dī)', 'expressão', 'Expressões', '🍀', 'ໂຊກດີເດີ'],
  ['ສະບາຍດີບໍ່', 'como vai? (sa-bāi-dī-bǭ)', 'expressão', 'Expressões', '🙂', 'ສະບາຍດີບໍ່'],
  // ── Essenciais ──
  ['ບໍ່', 'não; também a partícula do final de uma pergunta de sim/não (bǭ)', 'advérbio', 'Essenciais', '👎', 'ບໍ່, ຂອບໃຈ'],
  ['ແລະ', 'e (lǽ)', 'conjunção', 'Essenciais', null, 'ກາເຟແລະຊາ'],
  ['ຫຼື', 'ou (lư̄)', 'conjunção', 'Essenciais', null, 'ຊາຫຼືກາເຟ'],
  ['ຫຼາຍ', 'muito (lāi)', 'advérbio', 'Essenciais', null, 'ແຊບຫຼາຍ'],
  ['ດ້ວຍ', 'também (duāi)', 'advérbio', 'Essenciais', null, 'ຂ້ອຍແມ່ນຄົນບຣາຊິນດ້ວຍ'],
  ['ຫຍັງ', 'o quê (nyang)', 'pronome', 'Essenciais', '❓', 'ເຈົ້າຊື່ຫຍັງ'],
  ['ໃສ', 'onde (sai)', 'advérbio', 'Essenciais', '❓', 'ເຈົ້າມາແຕ່ໃສ'],
  ['ໃຜ', 'quem (phai)', 'pronome', 'Essenciais', '❓', 'ນັ້ນແມ່ນໃຜ'],
  ['ຈາກ', 'de, a partir de (chāk)', 'preposição', 'Essenciais', null, 'ຂ້ອຍມາຈາກບຣາຊິນ'],
  ['ເມືອງ', 'cidade (mư̄ang)', 'substantivo', 'Essenciais', '🏙️', 'ວຽງຈັນແມ່ນເມືອງໃຫຍ່'],
  ['ປະເທດ', 'país (pa-thēt)', 'substantivo', 'Essenciais', '🌍', 'ລາວແມ່ນປະເທດນ້ອຍ'],
  ['ພາສາ', 'língua, idioma (phā-sā)', 'substantivo', 'Essenciais', '🗣️', 'ຂ້ອຍເວົ້າພາສາລາວ'],
  ['ວັດ', 'templo budista (wat)', 'substantivo', 'Essenciais', '🛕', 'ວັດນີ້ໃຫຍ່ຫຼາຍ'],
  // ── Descrições ──
  ['ດີ', 'bom; bem (dī)', 'adjetivo', 'Descrições', '👌', 'ກາເຟດີ'],
  ['ບໍ່ດີ', 'ruim, péssimo (bǭ-dī)', 'adjetivo', 'Descrições', '👎', 'ນີ້ບໍ່ດີ'],
  ['ໃຫຍ່', 'grande (ngai)', 'adjetivo', 'Descrições', '📏', 'ຄອບຄົວຂອງຂ້ອຍໃຫຍ່'],
  ['ນ້ອຍ', 'pequeno (nǭi)', 'adjetivo', 'Descrições', '📏', 'ເຮືອນຂອງຂ້ອຍນ້ອຍ'],
  ['ຍິນດີ', 'feliz, contente (nyin-dī)', 'adjetivo', 'Descrições', '😊', 'ຂ້ອຍຍິນດີຫຼາຍ'],
  // ── Casa ──
  ['ເຮືອນ', 'casa (hư̄an)', 'substantivo', 'Casa', '🏠', 'ເຮືອນຂອງຂ້ອຍນ້ອຍ'],
  // ── Animais ──
  ['ໝາ', 'cachorro (mā)', 'substantivo', 'Animais', '🐕', 'ຂ້ອຍມີໝານຶ່ງໂຕ'],
  ['ແມວ', 'gato (mǣu)', 'substantivo', 'Animais', '🐈', 'ແມວສອງໂຕ'],
  // ── Pessoas ──
  ['ຂ້ອຍ', 'eu — neutro, para qualquer gênero (khǭi)', 'pronome', 'Pessoas', '🙋', 'ຂ້ອຍຊື່ລີນູ'],
  ['ເຈົ້າ', 'você — comum, entre iguais (chao)', 'pronome', 'Pessoas', '🫵', 'ເຈົ້າຊື່ຫຍັງ'],
  ['ເຂົາ', 'ele, ela (khao)', 'pronome', 'Pessoas', '👤', 'ເຂົາເປັນຄົນລາວ'],
  ['ເຮົາ', 'nós (hao)', 'pronome', 'Pessoas', '🙌', 'ເຮົາມີຄອບຄົວໃຫຍ່'],
  ['ຊື່', 'nome (sư̄)', 'substantivo', 'Pessoas', '🏷️', 'ເຈົ້າຊື່ຫຍັງ'],
  ['ເພື່ອນ', 'amigo (phư̄an)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'ເຂົາແມ່ນເພື່ອນຂອງຂ້ອຍ'],
  ['ຄອບຄົວ', 'família (khǭp-khūa)', 'substantivo', 'Pessoas', '👪', 'ຄອບຄົວຂອງຂ້ອຍໃຫຍ່'],
  ['ຄົນ', 'pessoa; classificador de pessoas (khon)', 'substantivo', 'Pessoas', '🧑', 'ຂ້ອຍມີເພື່ອນນຶ່ງຄົນ'],
  ['ມະນຸດ', 'ser humano, pessoa — registro formal (ma-nut)', 'substantivo', 'Pessoas', '🧑', 'ມະນຸດມີຄອບຄົວ'],
  ['ພໍ່', 'pai (phǭ)', 'substantivo', 'Pessoas', '👨', 'ພໍ່ຂອງຂ້ອຍຢູ່ວຽງຈັນ'],
  ['ແມ່', 'mãe (mǣ)', 'substantivo', 'Pessoas', '👩', 'ແມ່ຂອງຂ້ອຍດີ'],
  ['ອ້າຍ', 'irmão mais velho (ʼāi)', 'substantivo', 'Pessoas', '🧑', 'ຂ້ອຍມີອ້າຍນຶ່ງຄົນ'],
  ['ເອື້ອຍ', 'irmã mais velha (ʼư̄ai)', 'substantivo', 'Pessoas', '🧑', 'ເອື້ອຍຂອງຂ້ອຍຢູ່ວຽງຈັນ'],
  ['ນ້ອງຊາຍ', 'irmão mais novo (nǭng-sāi)', 'substantivo', 'Pessoas', '🧒', 'ຂ້ອຍມີນ້ອງຊາຍນຶ່ງຄົນ'],
  ['ນ້ອງສາວ', 'irmã mais nova (nǭng-sāo)', 'substantivo', 'Pessoas', '🧒', 'ນ້ອງສາວຂອງຂ້ອຍນ້ອຍ'],
  ['ລູກຊາຍ', 'filho (lūk-sāi)', 'substantivo', 'Pessoas', '🧒', 'ເຂົາມີລູກຊາຍນຶ່ງຄົນ'],
  ['ລູກສາວ', 'filha (lūk-sāo)', 'substantivo', 'Pessoas', '🧒', 'ເຂົາມີລູກສາວນຶ່ງຄົນ'],
  // ── Verbos-chave ──
  ['ແມ່ນ', 'ser, isto é; sim, isso mesmo (mǣn)', 'verbo', 'Verbos-chave', '🟰', 'ເຈົ້າແມ່ນຄົນບຣາຊິນບໍ່'],
  ['ເປັນ', 'ser (profissão, nacionalidade, natureza de algo) (pen)', 'verbo', 'Verbos-chave', '🧑', 'ຂ້ອຍເປັນຄົນບຣາຊິນ'],
  ['ມີ', 'ter; haver (mī)', 'verbo', 'Verbos-chave', '🤲', 'ຂ້ອຍມີອ້າຍນຶ່ງຄົນ'],
  ['ຢູ່', 'morar; estar (em algum lugar) (yū)', 'verbo', 'Verbos-chave', '🏠', 'ຂ້ອຍຢູ່ວຽງຈັນ'],
  ['ເວົ້າ', 'falar (wâo)', 'verbo', 'Verbos-chave', '🗣️', 'ຂ້ອຍເວົ້າພາສາລາວ'],
  ['ໄປ', 'ir (pai)', 'verbo', 'Verbos-chave', '🚶', 'ຂ້ອຍໄປຫຼວງພະບາງ'],
  ['ມາ', 'vir (mā)', 'verbo', 'Verbos-chave', '🚶', 'ເຈົ້າມາແຕ່ໃສ'],
  ['ກິນ', 'comer (kin)', 'verbo', 'Verbos-chave', '🍽️', 'ຂ້ອຍກິນເຂົ້າ'],
  ['ດື່ມ', 'beber (dư̄m)', 'verbo', 'Verbos-chave', '🥤', 'ຂ້ອຍດື່ມນ້ຳ'],
  ['ມັກ', 'gostar (de) (māk)', 'verbo', 'Verbos-chave', '❤️', 'ຂ້ອຍມັກກາເຟ'],
  ['ຢາກ', 'querer (+ verbo) (yāk)', 'verbo', 'Verbos-chave', '💭', 'ຂ້ອຍຢາກກິນເຂົ້າ'],
  ['ຮຽນ', 'aprender, estudar (hīan)', 'verbo', 'Verbos-chave', '📖', 'ມາຮຽນພາສາລາວ'],
  ['ຮູ້', 'saber (hū)', 'verbo', 'Verbos-chave', '🧠', 'ຂ້ອຍບໍ່ຮູ້'],
  // ── Alimentação e Restaurantes ──
  ['ນ້ຳ', 'água (nam)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ຂ້ອຍດື່ມນ້ຳ'],
  ['ເຂົ້າ', 'arroz (khao)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'ຂ້ອຍກິນເຂົ້າ'],
  ['ກາເຟ', 'café (kā-fē)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ຂ້ອຍມັກກາເຟ'],
  ['ຊາ', 'chá (sā)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ຊາຫຼືກາເຟ'],
  ['ນົມ', 'leite (nom)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'ນົມຂາວ'],
  ['ແຊບ', 'gostoso, saboroso (sǣp)', 'adjetivo', 'Alimentação e Restaurantes', '😋', 'ເຂົ້າລາວແຊບຫຼາຍ'],
  // ── Números ──
  ['ນຶ່ງ', 'um (nưng)', 'numeral', 'Números', '1️⃣', 'ແມວນຶ່ງໂຕ'],
  ['ສອງ', 'dois (sǭng)', 'numeral', 'Números', '2️⃣', 'ແມວສອງໂຕ'],
  ['ສາມ', 'três (sām)', 'numeral', 'Números', '3️⃣', 'ເພື່ອນສາມຄົນ'],
  ['ສີ່', 'quatro (sī)', 'numeral', 'Números', '4️⃣', 'ໝາສີ່ໂຕ'],
  ['ຫ້າ', 'cinco (hā)', 'numeral', 'Números', '5️⃣', 'ແມວຫ້າໂຕ'],
  ['ຫົກ', 'seis (hok)', 'numeral', 'Números', '6️⃣', 'ໝາຫົກໂຕ'],
  ['ເຈັດ', 'sete (chet)', 'numeral', 'Números', '7️⃣', 'ເພື່ອນເຈັດຄົນ'],
  ['ແປດ', 'oito (pǣt)', 'numeral', 'Números', '8️⃣', 'ແມວແປດໂຕ'],
  ['ເກົ້າ', 'nove (kao)', 'numeral', 'Números', '9️⃣', 'ໝາເກົ້າໂຕ'],
  ['ສິບ', 'dez (sip)', 'numeral', 'Números', '🔟', 'ເພື່ອນສິບຄົນ'],
  // ── Tempo ──
  ['ມື້ນີ້', 'hoje (mư̄-nī)', 'advérbio', 'Tempo', '📅', 'ມື້ນີ້ວັນຈັນ'],
  ['ມື້ອື່ນ', 'amanhã (mư̄-ʼư̄n)', 'advérbio', 'Tempo', '📅', 'ມື້ອື່ນວັນອັງຄານ'],
  ['ມື້ວານ', 'ontem (mư̄-wān)', 'advérbio', 'Tempo', '📅', 'ມື້ວານຂ້ອຍໄປຫຼວງພະບາງ'],
  ['ວັນຈັນ', 'segunda-feira (wan-chan)', 'substantivo', 'Tempo', '📅', 'ມື້ນີ້ວັນຈັນ'],
  ['ວັນອັງຄານ', 'terça-feira (wan-ʼang-khān)', 'substantivo', 'Tempo', '📅', 'ມື້ອື່ນວັນອັງຄານ'],
  ['ວັນພຸດ', 'quarta-feira (wan-phut)', 'substantivo', 'Tempo', '📅', 'ມື້ນີ້ວັນພຸດ'],
  ['ວັນພະຫັດ', 'quinta-feira (wan-pha-hat)', 'substantivo', 'Tempo', '📅', 'ມື້ນີ້ວັນພະຫັດ'],
  ['ວັນສຸກ', 'sexta-feira (wan-suk)', 'substantivo', 'Tempo', '📅', 'ມື້ອື່ນວັນສຸກ'],
  ['ວັນເສົາ', 'sábado (wan-sao)', 'substantivo', 'Tempo', '📅', 'ວັນເສົາຂ້ອຍຢູ່ເຮືອນ'],
  ['ວັນອາທິດ', 'domingo (wan-ʼā-thit)', 'substantivo', 'Tempo', '📅', 'ວັນອາທິດເຮົາຢູ່ເຮືອນ'],
  // ── Cores ──
  ['ຂາວ', 'branco (khāo)', 'adjetivo', 'Cores', '⚪', 'ນົມຂາວ'],
  ['ດຳ', 'preto (dam)', 'adjetivo', 'Cores', '⚫', 'ແມວດຳ'],
  ['ແດງ', 'vermelho (dǣng)', 'adjetivo', 'Cores', '🔴', 'ເຮືອນແດງ'],
  ['ຂຽວ', 'verde (khiau)', 'adjetivo', 'Cores', '🟢', 'ຕົ້ນໄມ້ຂຽວ'],
  ['ຟ້າ', 'azul (fā)', 'adjetivo', 'Cores', '🔵', 'ນົກຟ້າ'],
  ['ເຫຼືອງ', 'amarelo (lư̄ang)', 'adjetivo', 'Cores', '🟡', 'ເຮືອນເຫຼືອງ'],
];

export const VOCAB_LO = buildVocab('lo', ROWS);
