import type { UnitSeed } from '../types';

/**
 * Trilha do náuatle clássico: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Os exemplos descrevem um encontro no mercado de Tlatelolco e uma visita
 * a uma casa em Tenochtitlan — o jogador escolhe as próprias respostas; a história nunca afirma quem
 * ele é.
 */
export const UNITS_NAH: UnitSeed[] = [
  {
    id: 'nah-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Niltze! Os primeiros cumprimentos',
    emoji: '👋',
    card: {
      id: 'nah-c1',
      title: 'A língua dos mexicas, fixada pelos frades',
      emoji: '🏛️',
      history:
        'O náuatle clássico é o conjunto de variedades faladas no Vale do México e no México central como língua franca na época da conquista espanhola (século XVI), quando era a língua de prestígio dos mexicas (astecas) de Tenochtitlan. Depois da conquista, ela continuou dominante até bem depois da independência do México (1821), antes de ser aos poucos deslocada pelo espanhol e de se transformar nas variedades náuatles modernas de hoje. O rei Felipe II chegou a declará-la língua oficial da Nova Espanha em 1570. Antes do contato, os astecas registravam informação com um sistema de pictogramas e ideogramas de capacidade silábica limitada; foram os missionários espanhóis que trouxeram o alfabeto latino, usado para escrever uma quantidade enorme de prosa, poesia, crônicas e documentos administrativos nos séculos XVI e XVII — o que preservou boa parte do que se perdeu na queima de milhares de códices astecas. É considerada uma das línguas indígenas americanas mais estudadas e mais bem documentadas, graças a esses textos e a dicionários como o de Alonso de Molina (1555/1571) e, modernamente, o de Frances Karttunen (1992).',
      culture_tip:
        'O que chamamos de “náuatle clássico” é sobretudo a fala registrada dos nobres (pīpiltin) — os plebeus (mācēhualtin) provavelmente falavam uma variedade um pouco diferente, hoje menos documentada. Essa distinção social aparece até na língua: o sufixo de respeito “-tzin” (visto nesta unidade em “motōcatzin”, seu nome, com reverência) marca educação com quem se fala, um pouco como “senhor”/“senhora” em português, mas colado na própria palavra.',
      grammar_why:
        'Repare que não existe nenhuma palavra para “ser” em “Nicualli” (“eu [sou] bom”, ou seja, “eu estou bem”): o náuatle clássico não tem verbo “ser”/“estar” para ligar sujeito e predicado. Um substantivo ou adjetivo já funciona como predicado completo quando recebe o prefixo de pessoa certo — “ni-” (eu), “ti-” (você) ou nada, para “ele/ela” —, sem precisar de nenhum verbo de ligação. A gramática desta unidade mostra mais exemplos documentados desse padrão.',
      grammar_examples: [
        ['“Niltze!” “Tlazohcamati!”', '“Olá!” “Obrigado!”'],
        ['Tlēn motōcatzin?', 'Qual é o seu nome? (forma de respeito, com “-tzin”)'],
        ['Nicualli.', 'Eu [sou/estou] bem. (prefixo “ni-” + predicado, sem verbo “ser”)'],
        ['“Ticualli?” “Quēmah.” / “Ahmō.”', '“Você está bem?” “Sim.” / “Não.”'],
      ],
      character_guide: [
        ['h (depois de vogal)', 'o saltillo: uma pequena parada no ar, como a pausa de “uh-oh” em inglês', 'Ahmō (“AH-mo”, não)'],
        ['ā, ē, ī, ō', 'vogal longa: o mesmo som do português, só que mais demorado', 'Nāntli (“NAAN-tli”, mãe)'],
        ['tl', 'um só som (consoante lateral africada), não “t” mais “l” separados', 'Ātl (“AATL”, água)'],
        ['x', 'sempre o som de “ch” do português de Portugal (“sh” do inglês)', 'Chīlli não tem x, mas Mēxihco sim: “MESH-ih-co”'],
        ['hu / uh, cu / uc', '“hu”/“uc” soam como “u” curto antes ou depois da consoante (um “w”); “cu” soa “kw”', 'Huītz (“WEETS”, vir); Cualli (“KWAL-li”, bom)'],
      ],
    },
    lessons: [
      {
        id: 'nah-u1-l1',
        title: 'Niltze! Tlazohcamati!',
        kind: 'licao',
        words: ['Niltze', 'Tlazohcamati', 'Quēmah', 'Ahmō', 'Nimitzittaz', 'Tlēn motōcatzin?'],
        cloze: [
          { sentence: '“___!” “Tlazohcamati!”', answer: 'Niltze', options: ['Niltze', 'Ahmō', 'Nimitzittaz'], translation: '“Olá!” “Obrigado!”' },
          { sentence: '“Ticualli?” “___.”', answer: 'Quēmah', options: ['Quēmah', 'Ahmō', 'Niltze'], translation: '“Você está bem?” “Sim.”' },
          { sentence: 'Niltze! ___', answer: 'Tlēn motōcatzin?', options: ['Tlēn motōcatzin?', 'Nimitzittaz.', 'Tlazohcamati.'], translation: 'Olá! Qual é o seu nome? (forma de respeito)' },
        ],
        voice: {
          bot: 'Ticualli?',
          botTranslation: 'Você está bem?',
          expected: ['Quēmah, nicualli', 'quemah', 'ahmō'],
          hint: 'Responda com “Quēmah” (sim) ou “Ahmō” (não).',
        },
        communityPrompt: 'Escreva a saudação mais simples do náuatle clássico e a resposta de agradecimento: “Niltze” e “Tlazohcamati”.',
      },
      {
        id: 'nah-u1-l2',
        title: 'Nehhuātl, tehhuātl, yehhuātl: as pessoas',
        kind: 'licao',
        words: ['Nehhuātl', 'Tehhuātl', 'Yehhuātl', 'Calli', 'Cualli', 'Quēn'],
        cloze: [
          { sentence: '___ nicihuātl.', answer: 'Nehhuātl', options: ['Nehhuātl', 'Tehhuātl', 'Yehhuātl'], translation: 'Eu, eu sou mulher.' },
          { sentence: '___ ticonētl.', answer: 'Tehhuātl', options: ['Tehhuātl', 'Nehhuātl', 'Yehhuātl'], translation: 'Você, você é uma criança.' },
          { sentence: 'Calli ___.', answer: 'cualli', options: ['cualli', 'Quēn', 'Yehhuātl'], translation: 'A casa é boa.' },
        ],
        voice: {
          bot: 'Quēn ticualli?',
          botTranslation: 'Como você está? (lit. “como você [está] bem”)',
          expected: ['Nicualli', 'cualli', 'quemah'],
          hint: 'Responda “Nicualli” (eu estou bem).',
        },
        communityPrompt: 'Apresente-se com o pronome “Nehhuātl” (eu) e diga que está bem: “Nehhuātl, nicualli.”',
      },
      {
        id: 'nah-u1-l3',
        title: 'Prova: primeiros cumprimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Niltze! Quēn ticualli?',
          botTranslation: 'Olá! Como você está?',
          expected: ['Quēmah, nicualli', 'nicualli', 'ahmō'],
          hint: 'Diga “Quēmah, nicualli” (sim, estou bem) ou “Ahmō” (não).',
        },
        communityPrompt: 'Escreva uma pequena apresentação em náuatle clássico: saudação, como você está e um agradecimento.',
      },
    ],
  },
  {
    id: 'nah-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família e a comida',
    emoji: '👪',
    card: {
      id: 'nah-c2',
      title: 'Tlahtoāni: “aquele que fala”',
      emoji: '👑',
      history:
        'Na Tenochtitlan dos mexicas, o governante supremo tinha um título que resume bem o jeito como o náuatle constrói palavras: “tlahtoāni”, formado a partir do verbo “tlahtoā” (falar, proclamar) mais o sufixo “-ni” (“aquele que costuma...”) — literalmente, “aquele que fala”, ou seja, quem tem autoridade para proclamar e decidir. Os jovens nobres estudavam no calmecac e os plebeus no telpochcalli (de “tēlpōchtli”, rapaz), escolas que ensinavam desde religião e astronomia até o ofício das armas, conforme a posição social da família.',
      culture_tip:
        'A palavra “tlahtoāni” é um exemplo real de como o náuatle prefere grudar peças (um verbo + um sufixo) a criar uma palavra nova do zero — o mesmo princípio que, levado ao verbo, vira a incorporação de substantivo explicada na gramática desta unidade. Vale também notar que “pilli” (nobre) é a mesma raiz que, em compostos, dá “criança” — outro sinal de como uma única peça pode carregar sentidos que o português separa em palavras diferentes.',
      grammar_why:
        '“Nonān” (minha mãe) não é “no-” mais “nāntli” colados sem mais: o sufixo absolutivo “-tli” de “nāntli” cai quando o substantivo é possuído, e entra o prefixo “no-” (meu). O mesmo acontece com “tahtli” (pai) → “notah” (meu pai). É um padrão regular, documentado para a maioria dos substantivos do náuatle clássico, e volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Nonān cualli.', 'Minha mãe é boa. (nāntli → nonān, possuído)'],
        ['Notah cualli.', 'Meu pai é bom. (tahtli → notah, possuído)'],
        ['Ticonētl.', 'Você é uma criança.'],
        ['Nicnequi niccua tlaxcalli.', 'Eu quero comer tortilha.'],
      ],
      character_guide: [
        ['tz', 'som de “ts”, como em “tsunami”', 'Tzontli (“TSON-tli”, cabelo)'],
        ['cu antes de vogal', 'soa “kw”', 'Cualli (“KWAL-li”, bom)'],
        ['-tzin', 'sufixo de respeito, colado no final da palavra', 'motōcatzin (“seu nome”, com reverência)'],
      ],
    },
    lessons: [
      {
        id: 'nah-u2-l1',
        title: 'A família (ī-cencalnemiliz)',
        kind: 'licao',
        words: ['Nāntli', 'Tahtli', 'Conētl', 'Cihuātl', 'Oquichtli', 'Tēlpōchtli'],
        cloze: [
          { sentence: 'Nonān ___.', answer: 'cualli', options: ['cualli', 'tahtli', 'oquichtli'], translation: 'Minha mãe é boa.' },
          { sentence: '___ cualli.', answer: 'Notah', options: ['Notah', 'Nonān', 'Ticonētl'], translation: 'Meu pai é bom.' },
          { sentence: 'Tēlpōchtli ___.', answer: 'cualli', options: ['cualli', 'conētl', 'cihuātl'], translation: 'O rapaz é bom.' },
        ],
        voice: {
          bot: 'Ticonētl?',
          botTranslation: 'Você é uma criança?',
          expected: ['Quēmah, niconētl', 'ahmō', 'quemah'],
          hint: 'Responda “Quēmah” (sim) ou “Ahmō” (não).',
        },
        communityPrompt: 'Fale da sua família em náuatle clássico: cite a mãe (nonān) e o pai (notah).',
      },
      {
        id: 'nah-u2-l2',
        title: 'Comida (tlacualli)',
        kind: 'licao',
        words: ['Tlaxcalli', 'Cacahuatl', 'Ātl', 'Nacatl', 'Tlacua', 'Nemi'],
        cloze: [
          { sentence: 'Nitlacua ___.', answer: 'tlaxcalli', options: ['tlaxcalli', 'ātl', 'nacatl'], translation: 'Eu como tortilha.' },
          { sentence: '___ cualli.', answer: 'Cacahuatl', options: ['Cacahuatl', 'Tlaxcalli', 'Nacatl'], translation: 'O cacau é bom.' },
          { sentence: 'Ni___.', answer: 'nemi', options: ['nemi', 'tlacua', 'cochi'], translation: 'Eu vivo/moro/estou.' },
        ],
        voice: {
          bot: 'Ticcua in nacatl?',
          botTranslation: 'Você come a carne?',
          expected: ['Quēmah, niccua', 'ahmō', 'quemah'],
          hint: 'Responda “Quēmah, niccua” (sim, eu como) ou “Ahmō” (não).',
        },
        communityPrompt: 'Descreva o que você come em náuatle clássico: tortilha (tlaxcalli), carne (nacatl) ou cacau (cacahuatl).',
      },
      {
        id: 'nah-u2-l3',
        title: 'Prova: família e comida',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Niltze! Quēn ticualli? Tlēn motōcatzin?',
          botTranslation: 'Olá! Como você está? Qual é o seu nome?',
          expected: ['Quēmah, nicualli', 'nicualli', 'niltze'],
          hint: 'Cumprimente e diga como está: “Niltze! Quēmah, nicualli.”',
        },
        communityPrompt: 'Escreva um parágrafo curto em náuatle clássico contando sobre sua família e o que você come, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
