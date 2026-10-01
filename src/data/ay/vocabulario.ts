import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do aimará (aymar aru), língua da família jaqi — SEM parentesco genealógico comprovado
 * com o quéchua (família bem diferente), apesar de séculos de contato intenso no altiplano andino.
 * Nenhuma palavra abaixo foi copiada ou adivinhada a partir do pacote `qu`: toda forma foi conferida
 * em fontes específicas do aimará — o “Diccionario Ilustrado de la Lengua Aymara” (Edith Castro
 * Mamani, Ministério da Educação do Chile, 2015/2019), a lista de Swadesh do aimará no Wiktionary em
 * inglês (fonte: Carvajal, Hernández Sallés e Ramos Pizarro), o livreto “Aymara Fácil: 300 frases
 * para aprender” (Román Pairumani Ajacopa, La Paz, 2024) e a Wikipédia (em português e em inglês).
 * Quando duas fontes confiáveis discordavam na grafia (comum no aimará, que não tem uma única
 * ortografia padronizada entre Bolívia, Peru e Chile), a forma mais repetida entre as fontes venceu —
 * isso está anotado linha a linha neste arquivo só nos casos mais notáveis.
 *
 * O apóstrofo marca as consoantes ejetivas e aspiradas (p', t', ch', k', q' / ph, th, chh, kh, qh),
 * como no quéchua — mas as palavras em si são outras. O aimará também escreve com só três vogais
 * (a, i, u) e não marca gênero gramatical (sem artigos nem concordância de gênero): nenhuma linha usa
 * o campo de gênero do `VocabRow`.
 *
 * Boa parte das frases de exemplo vem citada quase ao pé da letra das fontes acima (fontes com frases
 * completas reais, não só palavras soltas); as poucas que precisaram ser montadas usam só padrões
 * gramaticais confirmados em mais de uma frase das próprias fontes (o sufixo de assertiva “-wa” sobre
 * um nome ou adjetivo, sem verbo “ser” — o aimará não tem essa cópula —, o sufixo possessivo “-ja”
 * (meu) visto em “jilajawa” “é meu irmão”, e o sufixo de futuro/exortação “-ñani” visto em
 * “irnaqañani” “vamos trabalhar”, “manq'asiñani” “vamos comer” e “umasiñani” “vamos beber”).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['kamisaki', 'olá, como vai (cumprimento)', 'interjeição', 'Expressões', '👋', 'Kamisaki jilata, kullaka!'],
  ['waliki', 'bem, estou bem (resposta)', 'expressão', 'Expressões', '👍', 'Walikiskthwa, yuspagara.'],
  ['janiwa', 'não', 'advérbio', 'Expressões', '👎', 'Janiw walikti, jilata.'],
  ['jisa', 'sim', 'advérbio', 'Expressões', '👍', 'Jisa, yuspagara.'],
  ['yuspagara', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Yuspagara, kullaka!'],
  ['jikisiñkama', 'até logo, até a próxima', 'interjeição', 'Expressões', '👋', 'Jikisiñkam jilata!'],
  ['jallalla', 'viva! (saudação festiva, de celebração e luta)', 'interjeição', 'Expressões', '🎉', 'Jallalla!'],
  ['suma uru', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Suma uru, jilata!'],
  ['suma aruma', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Suma aruma, kullaka!'],
  // ── Essenciais ──
  ['khiti', 'quem', 'pronome', 'Essenciais', '❓', '¿Jupax khitisa?'],
  ['kuna', 'o que, qual', 'pronome', 'Essenciais', '❓', "¿Kuna manq'as utji?"],
  ['kawki', 'onde', 'advérbio', 'Essenciais', '❓', '¿Kawkirus sarañani?'],
  ['kamisa', 'como', 'advérbio', 'Essenciais', '❓', '¿Kamisaraki?'],
  ['qhawqha', 'quanto, quantos', 'advérbio', 'Essenciais', '❓', '¿Qhawqha pachans puriñani?'],
  // ── Pessoas ──
  ['naya', 'eu', 'pronome', 'Pessoas', '🙋', 'Nayax Anax satathwa.'],
  ['juma', 'tu, você', 'pronome', 'Pessoas', '🫵', '¿Jumasti?'],
  ['jupa', 'ele, ela', 'pronome', 'Pessoas', '👤', '¿Jupax khitisa?'],
  ['jiwasa', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Jiwasa yatiqañani.'],
  ['nayanaka', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Nayanakax irnaqañani.'],
  ['jumanaka', 'vocês', 'pronome', 'Pessoas', '👥', 'Jumanakax taqiniwa.'],
  ['jupanaka', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Jupanakaw walikiskipxiwa.'],
  ['jaqi', 'pessoa, gente, ser humano (dá nome à própria família de línguas, “jaqi”)', 'substantivo', 'Pessoas', '🧑', 'Naya jaqitwa.'],
  ['suti', 'nome', 'substantivo', 'Pessoas', '🏷️', '¿Kunasa sutimaxa?'],
  ['awki', 'pai', 'substantivo', 'Pessoas', '👨', 'Awkijan sutipax Andrisuwa.'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mamajan sutipax Lurinsawa.'],
  ['jilata', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Jupax jilajawa.'],
  ['kullaka', 'irmã', 'substantivo', 'Pessoas', '👧', 'Jupax kullakajawa.'],
  ['warmi', 'mulher, esposa', 'substantivo', 'Pessoas', '👩', 'Warmixa sumawa.'],
  ['chacha', 'homem, marido', 'substantivo', 'Pessoas', '👨', 'Chachaxa sumawa.'],
  ['wawa', 'bebê, filho pequeno', 'substantivo', 'Pessoas', '👶', 'Wawaxa jisk\'awa.'],
  ['uta', 'casa', 'substantivo', 'Pessoas', '🏠', 'Jichhurux uta apthapiñani.'],
  // ── Verbos-chave ──
  ['manq\'aña', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Taqini manq\'asiñani!'],
  ['umaña', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Junt\'um umasiñani.'],
  ['arusiña', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Aymar aru arusiñani!'],
  ['yatiña', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Nayax suma phayaña yattha.'],
  ['munaña', 'querer, amar', 'verbo', 'Verbos-chave', '❤️', '¿Kuna aychsa munta?'],
  ['saraña', 'ir, andar', 'verbo', 'Verbos-chave', '🚶', 'Nayax sarta.'],
  ['puriña', 'chegar, vir', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Puriniwa, katuqanim.'],
  ['jutaña', 'vir', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Jutäwa.'],
  ['uñjaña', 'ver, olhar (também “uñtaña”)', 'verbo', 'Verbos-chave', '👀', 'Yatiyawinaka uñtañani.'],
  ['ikiña', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Ikxañani, arumaxiwa.'],
  ['qamaña', 'viver, morar', 'verbo', 'Verbos-chave', '🏡', 'Suma qamaña.'],
  // ── Alimentação ──
  ['uma', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Umat pharjitu.'],
  ['t\'ant\'a', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'T\'ant\'a aliri saram.'],
  ['aycha', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Aychaxa sumawa.'],
  ['ch\'uqi', 'batata', 'substantivo', 'Alimentação e Restaurantes', '🥔', 'Ch\'uqixa jach\'awa.'],
  ['jayu', 'sal', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'Jayu utjiwa.'],
  ['manq\'a', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Wali suma manq\'awa.'],
  // ── Números ──
  ['maya', 'um', 'numeral', 'Números', '1️⃣', 'Maya uta.'],
  ['paya', 'dois', 'numeral', 'Números', '2️⃣', 'Paya jilata.'],
  ['kimsa', 'três', 'numeral', 'Números', '3️⃣', 'Kimsa wawa.'],
  ['pusi', 'quatro', 'numeral', 'Números', '4️⃣', 'Pusi uta.'],
  ['phisqa', 'cinco', 'numeral', 'Números', '5️⃣', 'Phisqa uru.'],
  ['suxta', 'seis', 'numeral', 'Números', '6️⃣', 'Suxta mara.'],
  ['paqallqu', 'sete', 'numeral', 'Números', '7️⃣', 'Paqallqu qarwa.'],
  ['kimsaqallqu', 'oito', 'numeral', 'Números', '8️⃣', 'Kimsaqallqu allpaqa.'],
  ['llätunka', 'nove', 'numeral', 'Números', '9️⃣', 'Llätunka wallpa.'],
  ['tunka', 'dez', 'numeral', 'Números', '🔟', 'Tunka jaqi.'],
  // ── Cores ──
  ['ch\'ara', 'preto', 'adjetivo', 'Cores', '⚫', 'Anuqaraxa ch\'arawa.'],
  ['janq\'u', 'branco', 'adjetivo', 'Cores', '⚪', 'Uwijaxa janq\'uwa.'],
  ['wila', 'vermelho (também “sangue”, a mesma palavra)', 'adjetivo', 'Cores', '🔴', 'Panqaraxa wilawa.'],
  ['q\'illu', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Willkaxa q\'illuwa.'],
  ['larama', 'azul', 'adjetivo', 'Cores', '🔵', 'Laqampuxa laramawa.'],
  ['ch\'uxña', 'verde', 'adjetivo', 'Cores', '🟢', 'Quqaxa ch\'uxñawa.'],
  // ── Animais ──
  ['anuqara', 'cachorro', 'substantivo', 'Animais', '🐕', 'Anuqaraxa jisk\'awa.'],
  ['michi', 'gato', 'substantivo', 'Animais', '🐈', 'Michixa janq\'uwa.'],
  ['wallpa', 'galinha', 'substantivo', 'Animais', '🐔', 'Wallpa utjiwa.'],
  ['qarwa', 'lhama', 'substantivo', 'Animais', '🦙', 'Qarwaxa jach\'awa.'],
  ['allpaqa', 'alpaca (também “allpachu”, no Chile)', 'substantivo', 'Animais', '🦙', 'Allpaqaxa sumawa.'],
  ['wari', 'vicunha', 'substantivo', 'Animais', '🦙', 'Wari utjiwa.'],
  ['kunturi', 'condor', 'substantivo', 'Animais', '🦅', 'Kunturixa jach\'awa.'],
  ['jamach\'i', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Jamach\'ixa jisk\'awa.'],
  // ── Natureza ──
  ['willka', 'sol', 'substantivo', 'Natureza', '☀️', 'Willkaxa q\'illuwa.'],
  ['phaxsi', 'lua', 'substantivo', 'Natureza', '🌙', 'Phaxsixa janq\'uwa.'],
  ['wara wara', 'estrela', 'substantivo', 'Natureza', '⭐', 'Wara warax sumawa.'],
  ['qullu', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Qulluxa jach\'awa.'],
  ['jallu', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Jalluwa.'],
  ['thaya', 'vento, frio (a mesma palavra para os dois)', 'substantivo', 'Natureza', '🌬️', 'Thayawa.'],
  ['nina', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ninaxa wilawa.'],
  ['qinaya', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Qinayaxa janq\'uwa.'],
  // ── Tempo ──
  ['jichha', 'agora, hoje (“jichhuru”)', 'advérbio', 'Tempo', '📅', 'Jichhurux kuns lurañani?'],
  ['qharuru', 'amanhã', 'advérbio', 'Tempo', '📅', 'Qharurkam jilata!'],
  ['masuru', 'ontem', 'advérbio', 'Tempo', '📅', 'Masuru jalluwa.'],
  ['nayra', 'antes, no passado (também “olho, vista, frente”: o passado é o que já se viu)', 'advérbio', 'Tempo', '👁️', 'Nayrax kawkins irnaqayäta?'],
  ['qhipa', 'depois, no futuro (também “costas, atrás”: o futuro é o que ainda não se vê)', 'advérbio', 'Tempo', '⏳', 'Qhipürü sarañani.'],
  // ── Descrições ──
  ['jach\'a', 'grande', 'adjetivo', 'Descrições', '📏', 'Aka markax wali jach\'awa.'],
  ['jisk\'a', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Imillaxa jisk\'awa.'],
  ['suma', 'bom, bonito, bem', 'adjetivo', 'Descrições', '👍', 'Jupax wali suma phayiriwa.'],
];

export const VOCAB_AY = buildVocab('ay', ROWS);
