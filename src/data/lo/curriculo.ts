import type { UnitSeed } from '../types';

/**
 * Trilha do laosiano (padrão, de Vientiane): por enquanto só as duas unidades do nível A1 — ver
 * `incomplete` em index.ts. As de A2 ao C2 chegam depois.
 */
export const UNITS_LO: UnitSeed[] = [
  {
    id: 'lo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ສະບາຍດີ ວຽງຈັນ',
    emoji: '👋',
    card: {
      id: 'lo-c1',
      title: 'Uma escrita irmã da tailandesa, mas com seis tons',
      emoji: '🛕',
      history:
        'O laosiano pertence à família Kra-Dai (ou Tai-Kadai), no ramo Tai sudoccidental, no mesmo grupo Lao-Phuthai — por isso é tão parecido com o tailandês que boa parte das duas línguas é mutuamente inteligível, mesmo sendo línguas distintas. A escrita lao também é irmã da tailandesa: por volta do século XV, uma forma da escrita de Sukhothai (a mesma base da escrita tailandesa) chegou à bacia do rio Mekong e ali se diferenciou aos poucos, dando origem à escrita lao de hoje — com menos letras e traços mais arredondados. Como a tailandesa, ela não deixa espaço entre as palavras dentro de uma frase.',
      culture_tip:
        '“ສະບາຍດີ” (sa-bāi-dī) serve a qualquer hora do dia, tanto para “oi” quanto para “tchau”, e é também a resposta normal para “como vai?”. Ao pedir algo com educação, é comum terminar a frase com “ແດ່” (dǣ, “por favor”); ao sugerir, convidar ou se despedir, usa-se “ເດີ” (dēu) — diferente do tailandês, essas partículas não mudam conforme o gênero de quem fala.',
      grammar_why:
        'O laosiano é uma língua tonal: o padrão de Vientiane tem seis tons (médio, baixo, alto, ascendente, descendente-baixo e descendente-alto). Qual tom sai em cada sílaba não é escolha livre — depende da classe do consoante inicial (alta, média ou baixa), de um dos quatro sinais de tom (່ ້ ໊ ໋) e do comprimento da vogal, tudo já fixado na própria grafia da palavra.',
      grammar_examples: [
        ['ສະບາຍດີ, ເຈົ້າຊື່ຫຍັງ', 'Oi! Qual é o seu nome?'],
        ['ຂ້ອຍຊື່ລີນູ', 'Eu me chamo Linu.'],
        ['ຂ້ອຍເປັນຄົນບຣາຊິນ', 'Eu sou brasileiro(a).'],
        ['ຂອບໃຈຫຼາຍ', 'Muito obrigado(a)!'],
      ],
      character_guide: [
        ['ກ', 'um “k” seco, sem soprar, como em “kiwi” — classe média', 'ກ aparece em “ກາເຟ” (kā-fē, “café”)'],
        ['ຂ', 'um “kh” soprado, como o “k” do inglês “kite” — classe alta', 'ຂ aparece em “ຂອບໃຈ” (khǭp-chai, “obrigado”)'],
        ['ດ', 'um “d” seco, como o “d” do português — classe média', 'ດ aparece em “ດີ” (dī, “bom”)'],
        ['ມ', 'como o “m” do português — classe baixa', 'ມ aparece em “ໝາ” (mā, “cachorro”) e “ແມ່” (mǣ, “mãe”)'],
        ['່ ້', 'os dois sinais de tom mais comuns, escritos acima do consoante (mai ek e mai tho)', '“ບໍ່” (bǭ, “não”) leva o sinal ່'],
      ],
    },
    lessons: [
      {
        id: 'lo-u1-l1',
        title: 'ສະບາຍດີ ຂອບໃຈ ຂໍໂທດ',
        kind: 'licao',
        words: ['ສະບາຍດີ', 'ຂອບໃຈ', 'ຂໍໂທດ', 'ບໍ່ເປັນຫຍັງ', 'ແດ່', 'ເດີ'],
        cloze: [
          { sentence: '___ ເຈົ້າຊື່ຫຍັງ', answer: 'ສະບາຍດີ', options: ['ສະບາຍດີ', 'ຂອບໃຈ', 'ຂໍໂທດ'], translation: 'Oi! Qual é o seu nome?' },
          { sentence: '— ຂອບໃຈ — ___', answer: 'ບໍ່ເປັນຫຍັງ', options: ['ບໍ່ເປັນຫຍັງ', 'ຂໍໂທດ', 'ສະບາຍດີ'], translation: '— Obrigado! — De nada!' },
          { sentence: 'ມາ___', answer: 'ແດ່', options: ['ແດ່', 'ເດີ', 'ຂອບໃຈ'], translation: 'Venha, por favor.' },
        ],
        voice: {
          bot: 'ສະບາຍດີ, ສະບາຍດີບໍ່',
          botTranslation: 'Oi! Como vai?',
          expected: ['ສະບາຍດີ, ຂ້ອຍສະບາຍດີ, ຂອບໃຈ', 'ສະບາຍດີ', 'ຂອບໃຈ'],
          hint: 'Devolva o cumprimento e diga que vai bem: “ສະບາຍດີ… ຂອບໃຈ…”.',
        },
        communityPrompt: 'Escreva três frases curtas em laosiano: um cumprimento (“ສະບາຍດີ”), um agradecimento (“ຂອບໃຈ”) e um pedido de desculpas (“ຂໍໂທດ”).',
      },
      {
        id: 'lo-u1-l2',
        title: 'ຂ້ອຍ ເຈົ້າ ຊື່',
        kind: 'licao',
        words: ['ຂ້ອຍ', 'ເຈົ້າ', 'ຊື່', 'ແມ່ນ', 'ເປັນ', 'ບໍ່'],
        cloze: [
          { sentence: '___ຊື່ລີນູ', answer: 'ຂ້ອຍ', options: ['ຂ້ອຍ', 'ເຈົ້າ', 'ເຂົາ'], translation: 'Eu me chamo Linu.' },
          { sentence: '___ຊື່ຫຍັງ', answer: 'ເຈົ້າ', options: ['ເຈົ້າ', 'ຂ້ອຍ', 'ເຮົາ'], translation: 'Qual é o seu nome?' },
          { sentence: 'ຂ້ອຍ___ຄົນບຣາຊິນ', answer: 'ເປັນ', options: ['ເປັນ', 'ມີ', 'ຢູ່'], translation: 'Eu sou brasileiro(a).' },
        ],
        voice: {
          bot: 'ເຈົ້າຊື່ຫຍັງ',
          botTranslation: 'Qual é o seu nome?',
          expected: ['ຂ້ອຍຊື່ລູຊີອາ', 'ຊື່'],
          hint: 'Diga seu nome com “ຂ້ອຍຊື່…”.',
        },
        communityPrompt: 'Apresente-se em laosiano: diga seu nome com “ຂ້ອຍຊື່…” e se você é brasileiro(a) com “ຂ້ອຍເປັນຄົນບຣາຊິນ”.',
      },
      {
        id: 'lo-u1-l3',
        title: 'ວຽງຈັນ ແລະ ຂ້ອຍ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ສະບາຍດີ, ຂ້ອຍຊື່ບຸນມີ. ເຈົ້າຊື່ຫຍັງ, ແລະ ເຈົ້າມາແຕ່ໃສ',
          botTranslation: 'Oi! Eu me chamo Bounmy. Qual é o seu nome, e de onde você vem?',
          expected: ['ສະບາຍດີ, ຂ້ອຍຊື່ລູຊີອາ, ຂ້ອຍມາຈາກບຣາຊິນ', 'ຊື່', 'ມາຈາກ'],
          hint: 'Devolva o cumprimento, diga seu nome (“ຂ້ອຍຊື່…”) e de onde você vem (“ຂ້ອຍມາຈາກ…”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em laosiano: cumprimento, nome com “ຊື່”, origem com “ມາຈາກ” e um agradecimento.',
      },
    ],
  },
  {
    id: 'lo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ຄອບຄົວ ແລະ ເຮືອນ ຢູ່ຫຼວງພະບາງ',
    emoji: '👪',
    card: {
      id: 'lo-c2',
      title: 'Quem é mais velho, mais novo — e um classificador para cada coisa',
      emoji: '🏞️',
      history:
        'Luang Prabang foi a primeira capital do reino de Lan Xang (“Milhão de Elefantes”), fundado em 1353 por Fa Ngum — o início da identidade histórica e cultural do Laos. Em 1560, o rei Setthathirath transferiu a capital para Vientiane, mas Luang Prabang continuou sendo a residência real até o século XX. Hoje é Patrimônio Mundial da UNESCO, às margens do rio Mekong (ແມ່ນ້ຳຂອງ, “a mãe das águas”), com mais de 30 templos budistas.',
      culture_tip:
        'A família laosiana não separa irmãos só por “irmão” e “irmã”: separa por quem nasceu antes (“ອ້າຍ”, para homem, e “ເອື້ອຍ”, para mulher) e quem nasceu depois (“ນ້ອງ”) — a mesma lógica se estende a amigos de idades diferentes, como jeito de marcar respeito por quem é mais velho.',
      grammar_why:
        'O laosiano não tem plural marcado nem verbos que mudam de forma: “ຂ້ອຍມີອ້າຍ” tanto pode ser “eu tenho um irmão mais velho” quanto, com outro número, mais de um — o número vem sempre acompanhado de um classificador (uma palavra extra que depende do tipo de coisa contada), nunca de uma mudança na palavra em si.',
      grammar_examples: [
        ['ຄອບຄົວຂອງຂ້ອຍໃຫຍ່', 'A minha família é grande.'],
        ['ຂ້ອຍມີອ້າຍນຶ່ງຄົນ', 'Eu tenho um irmão mais velho.'],
        ['ເຮືອນຂອງຂ້ອຍນ້ອຍ', 'A minha casa é pequena.'],
        ['ຂ້ອຍກິນເຂົ້າແລະດື່ມນ້ຳ', 'Eu como arroz e bebo água.'],
      ],
      character_guide: [
        ['ບ', 'um “b” seco, como o “b” do português — classe média', 'ບ aparece em “ບໍ່” (bǭ, “não”)'],
        ['ນ', 'como o “n” do português — classe baixa', 'ນ aparece em “ນ້ຳ” (nam, “água”) e “ນ້ອງ” (nǭng, “irmão/irmã mais novo”)'],
        ['ພ', 'um “ph” soprado (não como o “f” do português!) — classe baixa', 'ພ aparece em “ພໍ່” (phǭ, “pai”)'],
        ['ຣ/ລ', 'dois jeitos de escrever o “r/l”, hoje quase sempre pronunciados como “l” — classe baixa', 'ລ aparece em “ລູກຊາຍ” (lūk-sāi, “filho”)'],
        ['ໂຕ / ຄົນ', 'os classificadores de animal e de pessoa: vêm sempre depois do número', '“ໝານຶ່ງໂຕ” (um cachorro), “ອ້າຍນຶ່ງຄົນ” (um irmão mais velho)'],
      ],
    },
    lessons: [
      {
        id: 'lo-u2-l1',
        title: 'ຄອບຄົວ ພໍ່ ແມ່',
        kind: 'licao',
        words: ['ຄອບຄົວ', 'ພໍ່', 'ແມ່', 'ອ້າຍ', 'ນ້ອງສາວ', 'ມີ'],
        cloze: [
          { sentence: '___ຂອງຂ້ອຍໃຫຍ່', answer: 'ຄອບຄົວ', options: ['ຄອບຄົວ', 'ເຮືອນ', 'ເພື່ອນ'], translation: 'A minha família é grande.' },
          { sentence: 'ຂ້ອຍ___ອ້າຍນຶ່ງຄົນ', answer: 'ມີ', options: ['ມີ', 'ເປັນ', 'ຢູ່'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: '___ຂອງຂ້ອຍຢູ່ວຽງຈັນ', answer: 'ພໍ່', options: ['ພໍ່', 'ແມ່', 'ນ້ອງສາວ'], translation: 'O meu pai mora em Vientiane.' },
        ],
        voice: {
          bot: 'ເຈົ້າມີອ້າຍຫຼືນ້ອງສາວບໍ່',
          botTranslation: 'Você tem irmão mais velho ou irmã mais nova?',
          expected: ['ແມ່ນ, ຂ້ອຍມີອ້າຍນຶ່ງຄົນແລະນ້ອງສາວນຶ່ງຄົນ', 'ມີ', 'ອ້າຍ', 'ນ້ອງສາວ'],
          hint: 'Responda com “ແມ່ນ, ຂ້ອຍມີ…” ou “ບໍ່, ຂ້ອຍບໍ່ມີ…”.',
        },
        communityPrompt: 'Descreva a sua família em laosiano: quantos irmãos mais velhos (ອ້າຍ/ເອື້ອຍ) e mais novos (ນ້ອງຊາຍ/ນ້ອງສາວ) você tem.',
      },
      {
        id: 'lo-u2-l2',
        title: 'ຢູ່ເຮືອນ',
        kind: 'licao',
        words: ['ເຮືອນ', 'ນ້ຳ', 'ເຂົ້າ', 'ກາເຟ', 'ແຊບ', 'ກິນ'],
        cloze: [
          { sentence: '___ຂອງຂ້ອຍນ້ອຍ', answer: 'ເຮືອນ', options: ['ເຮືອນ', 'ນ້ຳ', 'ເຂົ້າ'], translation: 'A minha casa é pequena.' },
          { sentence: 'ຂ້ອຍ___ເຂົ້າ', answer: 'ກິນ', options: ['ກິນ', 'ດື່ມ', 'ມັກ'], translation: 'Eu como arroz.' },
          { sentence: 'ເຂົ້ານີ້___ຫຼາຍ', answer: 'ແຊບ', options: ['ແຊບ', 'ໃຫຍ່', 'ດີ'], translation: 'Este arroz está muito gostoso.' },
        ],
        voice: {
          bot: 'ເຈົ້າກິນຫຍັງ',
          botTranslation: 'O que você come?',
          expected: ['ຂ້ອຍກິນເຂົ້າແລະດື່ມກາເຟ', 'ກິນ', 'ດື່ມ'],
          hint: 'Diga o que come com “ຂ້ອຍກິນ…” e o que bebe com “…ດື່ມ…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe, usando “ກິນ” (comer) e “ດື່ມ” (beber).',
      },
      {
        id: 'lo-u2-l3',
        title: 'ຄອບຄົວ ແລະ ເຮືອນ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ຄອບຄົວຂອງເຈົ້າໃຫຍ່ບໍ່. ເຈົ້າມີອ້າຍຫຼືນ້ອງສາວບໍ່',
          botTranslation: 'Sua família é grande? Você tem irmão mais velho ou irmã mais nova?',
          expected: ['ແມ່ນ, ຂ້ອຍມີນ້ອງສາວນຶ່ງຄົນ', 'ມີ', 'ຊື່'],
          hint: 'Diga quantos irmãos tem (“ຂ້ອຍມີ…”) e, se quiser, o nome deles (“ເຂົາຊື່…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ມີ” (ter), “ຊື່” (nome) e “ແມ່ນ”/“ເປັນ” (ser).',
      },
    ],
  },
];
