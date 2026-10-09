import type { UnitSeed } from '../types';

/**
 * Trilha do macedônio: as quatro unidades dos níveis A1 e A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). De B1 ao C2 chega depois.
 */
export const UNITS_MK: UnitSeed[] = [
  {
    id: 'mk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво! Првите чекори',
    emoji: '👋',
    card: {
      id: 'mk-c1',
      title: 'Uma eslava do sul com letras próprias',
      emoji: '🏔️',
      history:
        'O macedônio é uma língua eslava meridional, língua oficial da Macedônia do Norte desde a independência do país, em 1991. A norma escrita foi fixada em 1945, com base nos dialetos da região de Bitola e Prilep. É a língua mais próxima do búlgaro entre as eslavas — os dois formam um continuum dialetal nos Bálcãs, e se são duas línguas ou duas normas de uma língua só é uma questão debatida entre linguistas e entre os dois países; aqui o app trata as duas como línguas distintas, cada uma com a sua norma oficial. Fora da Macedônia do Norte, há falantes em comunidades na Albânia, na Sérvia, na Bulgária, na Grécia e numa diáspora grande (Austrália, Estados Unidos, Canadá).',
      culture_tip:
        '“Здраво” serve para cumprimentar a qualquer hora e também para se despedir no dia a dia. Para tratar com respeito ou falar com várias pessoas, usa-se “Вие” (com maiúscula e o verbo no plural), como o “vous” francês ou o “Вы” russo.',
      grammar_why:
        'O macedônio diz o nome com um verbo reflexivo, “се викам” (literalmente “me chamo”): “Се викам Ана”, “Како се викаш?”. E não tem infinitivo: os dicionários registram o verbo na forma de “ele” (“вика”), mas aqui ele aparece na forma de “eu”, mais útil para quem começa.',
      grammar_examples: [
        ['Здраво! Се викам Ана.', 'Oi! Eu me chamo Ana.'],
        ['Како се викаш?', 'Como você se chama?'],
        ['Тој е од Битола, таа е од Скопје.', 'Ele é de Bitola, ela é de Skopje.'],
        ['Добро, благодарам. А ти?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ѓ', 'som suave, entre “d” e “j” (IPA /ɟ/)', 'леѓа (costas)'],
        ['ѕ', 'como o “dz” de “pizza” dito com voz', 'ѕвезда (estrela)'],
        ['љ', 'como o “lh” do português', 'љубов (amor)'],
        ['њ', 'como o “nh” do português', 'коњ (cavalo)'],
        ['ќ', 'som suave, parecido com um “tch” mais fechado (IPA /c/)', 'ноќ (noite)'],
        ['џ', 'como o “j” do inglês “jungle”', 'џеб (bolso)'],
      ],
    },
    lessons: [
      {
        id: 'mk-u1-l1',
        title: 'Здраво, благодарам, довидување!',
        kind: 'licao',
        words: ['здраво', 'добар ден', 'добровечер', 'добра ноќ', 'довидување', 'благодарам'],
        cloze: [
          { sentence: '___, Ана! Како си?', answer: 'Здраво', options: ['Здраво', 'Довидување', 'Благодарам'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'Сега е ноќ: ___!', answer: 'Добра ноќ', options: ['Добра ноќ', 'Добар ден', 'Благодарам'], translation: 'Agora é noite: boa noite!' },
          { sentence: '___ многу!', answer: 'Благодарам', options: ['Благодарам', 'Здраво', 'Довидување'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Здраво! Како си?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Добро, благодарам! А ти?', 'добро', 'благодарам'],
          hint: 'Responda que vai bem e devolva a pergunta: “Добро, благодарам! А ти?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em macedônio: um de dia (“Добар ден…”), um à noite (“Добра ноќ…”) e uma despedida (“Довидување”).',
      },
      {
        id: 'mk-u1-l2',
        title: 'Јас, ти, тој, таа',
        kind: 'licao',
        words: ['јас', 'ти', 'тој', 'таа', 'се викам', 'име'],
        cloze: [
          { sentence: '___ се викам Сара.', answer: 'Јас', options: ['Јас', 'Ти', 'Тој'], translation: 'Eu me chamo Sara.' },
          { sentence: 'А ___, како се викаш?', answer: 'ти', options: ['ти', 'тој', 'таа'], translation: 'E você, como se chama?' },
          { sentence: '___ е од Скопје.', answer: 'Таа', options: ['Таа', 'Јас', 'Ти'], translation: 'Ela é de Skopje.' },
        ],
        voice: {
          bot: 'Здраво! Како се викаш?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Се викам Ана. А ти?', 'се викам', 'а ти'],
          hint: 'Diga o seu nome com “Се викам…” e devolva a pergunta com “А ти?”.',
        },
        communityPrompt: 'Apresente-se em macedônio: diga o seu nome com “Се викам…” e a sua cidade com “Јас сум од…”.',
      },
      {
        id: 'mk-u1-l3',
        title: 'Тест: првите чекори',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здраво! Јас се викам Александар. Како се викаш ти и од каде си?',
          botTranslation: 'Oi! Eu me chamo Aleksandar. Como você se chama e de onde você é?',
          expected: ['Здраво! Се викам Лусија и сум од Сао Паоло.', 'се викам', 'сум од', 'здраво'],
          hint: 'Devolva o cumprimento (“Здраво!”), diga o nome com “Се викам…” e a cidade com “Сум од…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Се викам…”, cidade com “Сум од…” e uma despedida.',
      },
    ],
  },
  {
    id: 'mk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Семејството и домот',
    emoji: '👪',
    card: {
      id: 'mk-c2',
      title: 'O artigo que vem depois do nome',
      emoji: '🧭',
      history:
        'A Macedônia do Norte ficou quase 500 anos sob domínio otomano, até 1912, e depois fez parte do Reino da Iugoslávia e, de 1945 a 1991, da República Federativa Socialista da Iugoslávia. Esses séculos de vizinhança deixaram marcas na língua: “кафе” (café) e muitas outras palavras do dia a dia vieram do turco.',
      culture_tip:
        'Receber visita com café é um costume forte: oferecer “едно кафе” (um café) é quase automático. Bitola, a segunda maior cidade do país, guarda na sua rua principal, a Широк Сокак, prédios do tempo otomano ao lado de construções ao estilo europeu dos cônsules estrangeiros que viveram lá.',
      grammar_why:
        'O macedônio, como o búlgaro, não tem um artigo separado: ele gruda no fim da palavra. O masculino ganha “-от” (град → градот), o feminino “-та” (куќа → куќата), o neutro “-то” (дете → детето) e o plural “-те” (деца → децата).',
      grammar_examples: [
        ['Градот е голем.', 'A cidade é grande.'],
        ['Куќата е мала.', 'A casa é pequena.'],
        ['Млекото е бело.', 'O leite é branco.'],
        ['Не знам.', 'Não sei.'],
      ],
      character_guide: [
        ['-от / -та / -то / -те', 'o artigo definido gruda direto no fim da palavra, sem hífen', 'град → градот, куќа → куќата, дете → детето'],
      ],
    },
    lessons: [
      {
        id: 'mk-u2-l1',
        title: 'Моето семејство',
        kind: 'licao',
        words: ['семејство', 'мајка', 'татко', 'брат', 'сестра', 'имам'],
        cloze: [
          { sentence: 'Мојата ___ се вика Елена.', answer: 'мајка', options: ['мајка', 'татко', 'брат'], translation: 'A minha mãe se chama Elena.' },
          { sentence: 'Јас ___ брат.', answer: 'имам', options: ['имам', 'сум', 'одам'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Мојот ___ е од Битола.', answer: 'татко', options: ['татко', 'сестра', 'мајка'], translation: 'O meu pai é de Bitola.' },
        ],
        voice: {
          bot: 'Имаш ли браќа или сестри?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Да, имам брат и сестра.', 'имам', 'брат', 'сестра'],
          hint: 'Responda com “Да, имам…” ou “Не, немам…”.',
        },
        communityPrompt: 'Descreva a sua família em macedônio: quantos irmãos (браќа) e irmãs (сестри) você tem, usando “имам”.',
      },
      {
        id: 'mk-u2-l2',
        title: 'Во домот',
        kind: 'licao',
        words: ['куќа', 'вода', 'леб', 'сирење', 'кафе', 'млеко'],
        cloze: [
          { sentence: 'Мојата ___ е мала.', answer: 'куќа', options: ['куќа', 'вода', 'леб'], translation: 'A minha casa é pequena.' },
          { sentence: 'Јас пијам ___.', answer: 'вода', options: ['вода', 'леб', 'сирење'], translation: 'Eu bebo água.' },
          { sentence: 'Јадам леб со ___.', answer: 'сирење', options: ['сирење', 'вода', 'кафе'], translation: 'Como pão com queijo.' },
        ],
        voice: {
          bot: 'Што јадеш?',
          botTranslation: 'O que você come?',
          expected: ['Јадам леб со сирење.', 'јадам', 'леб', 'сирење'],
          hint: 'Diga o que come com “Јадам…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Јадам…” e “Пијам…”.',
      },
      {
        id: 'mk-u2-l3',
        title: 'Тест: семејството и домот',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Имаш ли браќа или сестри? Што јадеш наутро?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come de manhã?',
          expected: ['Имам сестра и јадам леб со сирење.', 'имам', 'јадам'],
          hint: 'Diga quem você tem na família com “имам…” e o que come com “јадам…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “имам”, “сум” e “е”.',
      },
    ],
  },
  {
    id: 'mk-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Времето и чувствата',
    emoji: '🌦️',
    card: {
      id: 'mk-c3',
      title: 'O carnaval de Vevčani e os espíritos do inverno',
      emoji: '🎭',
      history:
        'No vilarejo de Vevčani, perto do lago Ohrid, acontece todo mês de janeiro um carnaval de máscaras que a tradição local diz ter uns 1.400 anos, ligado ao dia de São Basílio (13 e 14 de janeiro no calendário juliano). Os participantes, chamados vasilitxari, acreditam que as máscaras afastam os espíritos maus que, segundo a crença popular, andam soltos nesses dias “não batizados” entre o Natal e a Epifania.',
      culture_tip:
        'As máscaras mais tradicionais imitam um casamento (um homem se veste de noiva) e zombam, sem papas na língua, de políticos e autoridades do ano que passou. A festa termina com uma dança tradicional, o Vasilitxarsko oro, e a queima das máscaras.',
      grammar_why:
        'O futuro se forma com a partícula invariável “ќе” antes do presente (“ќе врне” = vai chover), e se nega com “нема да” (não com “не”). Para contar como alguém estava, o presente de “сум” (сум, си, е…) vira бев/беше/беа no passado.',
      grammar_examples: [
        ['Утре ќе врне дожд.', 'Amanhã vai chover.'],
        ['Нема да работам во недела.', 'Eu não vou trabalhar no domingo.'],
        ['Вчера бев уморен.', 'Ontem eu estava cansado.'],
        ['Таа беше среќна на карневалот.', 'Ela estava feliz no carnaval.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mk-u3-l1',
        title: 'Какво ќе биде времето?',
        kind: 'licao',
        words: ['дожд', 'снег', 'сонце', 'ветер', 'студен', 'топол'],
        cloze: [
          { sentence: 'Утре ќе врне ___.', answer: 'дожд', options: ['дожд', 'снег', 'ветер'], translation: 'Amanhã vai chover.' },
          { sentence: 'Зимно паѓа ___ во планината.', answer: 'снег', options: ['снег', 'дожд', 'сонце'], translation: 'No inverno neva na montanha.' },
          { sentence: 'Денес има ___ и е топло.', answer: 'сонце', options: ['сонце', 'ветер', 'снег'], translation: 'Hoje tem sol e está quente.' },
        ],
        voice: {
          bot: 'Какво ќе биде времето утре?',
          botTranslation: 'Como vai estar o tempo amanhã?',
          expected: ['Утре ќе врне дожд.', 'ќе врне', 'дожд'],
          hint: 'Responda com “ќе” + o verbo: “Утре ќе врне дожд.”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em macedônio, usando “денес има...” ou “денес е...”, e diga o que vai acontecer amanhã com “утре ќе...”.',
      },
      {
        id: 'mk-u3-l2',
        title: 'Како се чувствуваш?',
        kind: 'licao',
        words: ['среќен', 'тажен', 'уморен', 'лут', 'гладен', 'глава'],
        cloze: [
          { sentence: 'Денес сум многу ___.', answer: 'среќен', options: ['среќен', 'тажен', 'лут'], translation: 'Hoje estou muito feliz.' },
          { sentence: 'Ме боли ___.', answer: 'главата', options: ['главата', 'раката', 'устата'], translation: 'Dói-me a cabeça.' },
          { sentence: 'Многу сум ___ по работа.', answer: 'уморен', options: ['уморен', 'среќен', 'гладен'], translation: 'Estou muito cansado depois do trabalho.' },
        ],
        voice: {
          bot: 'Како се чувствуваш денес?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Денес сум многу уморен.', 'уморен', 'среќен'],
          hint: 'Diga como se sente com “Сум...” e um adjetivo de sentimento.',
        },
        communityPrompt: 'Escreva três frases sobre como você se sente agora, usando “Сум...” e um adjetivo de sentimento (среќен, тажен, уморен...).',
      },
      {
        id: 'mk-u3-l3',
        title: 'Тест: времето и чувствата',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Какво време беше вчера и како се чувствуваш денес?',
          botTranslation: 'Como estava o tempo ontem e como você se sente hoje?',
          expected: ['Вчера беше студено, а денес сум добро.', 'беше', 'добро'],
          hint: 'Descreva o tempo de ontem com “Вчера беше...” e como está hoje com “Денес сум...”.',
        },
        communityPrompt: 'Escreva um parágrafo curto: como estava o tempo ontem (“вчера беше...”) e como você está hoje (“денес сум...”).',
      },
    ],
  },
  {
    id: 'mk-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Градот и професиите',
    emoji: '🏙️',
    card: {
      id: 'mk-c4',
      title: 'O Bazar Antigo de Skopje: comércio desde o século XII',
      emoji: '🏺',
      history:
        'A Стара Чаршија (Bazar Antigo) de Skopje, na margem leste do rio Vardar, é considerada o maior bazar dos Bálcãs fora de Istambul. As primeiras menções a um bairro de comerciantes no local datam do século XII, mas foi sob o domínio otomano que o bazar cresceu até se tornar o centro comercial da cidade; ainda hoje restam cerca de trinta mesquitas, caravançarais e hamams (banhos turcos) daquela época. Em 2008, o Parlamento macedônio reconheceu o bazar como patrimônio cultural de importância especial para o país.',
      culture_tip:
        'O viajante otomano Evliya Çelebi, que visitou o bazar em 1660, descreveu mais de duas mil lojas organizadas por ofício; essa tradição de ruas dedicadas a um só ofício (ourives, sapateiros, ferreiros) ainda se vê na Стара Чаршија de hoje.',
      grammar_why:
        'O comparativo gruda “по-” direto no adjetivo (поголем = maior), e o superlativo, “нај-” (најголем = o maior) — sem hífen, diferente do búlgaro. A comparação usa “од” para “que”: “поголем од” (maior que).',
      grammar_examples: [
        ['Скопје е поголем град од Битола.', 'Skopje é uma cidade maior que Bitola.'],
        ['Лекарот е најдобриот во болницата.', 'O médico é o melhor do hospital.'],
        ['Готвачот продава леб на пазарот.', 'O cozinheiro vende pão no mercado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mk-u4-l1',
        title: 'Во градот',
        kind: 'licao',
        words: ['плоштад', 'пазар', 'црква', 'училиште', 'болница', 'аеродром'],
        cloze: [
          { sentence: 'Купувам зеленчук на ___.', answer: 'пазар', options: ['пазар', 'плоштад', 'црква'], translation: 'Compro verduras no mercado.' },
          { sentence: 'Децата одат на ___.', answer: 'училиште', options: ['училиште', 'болница', 'аеродром'], translation: 'As crianças vão à escola.' },
          { sentence: 'Авионот е на ___.', answer: 'аеродром', options: ['аеродром', 'пазар', 'училиште'], translation: 'O avião está no aeroporto.' },
        ],
        voice: {
          bot: 'Каде е најблиската болница?',
          botTranslation: 'Onde é o hospital mais próximo?',
          expected: ['Болницата е блиску до плоштадот.', 'болница', 'плоштад'],
          hint: 'Diga onde fica usando “... е блиску до...” (está perto de).',
        },
        communityPrompt: 'Descreva o seu bairro: quais destes lugares (пазар, црква, училиште, болница) você tem perto, e qual é o mais próximo da sua casa.',
      },
      {
        id: 'mk-u4-l2',
        title: 'Професии и купување',
        kind: 'licao',
        words: ['лекар', 'учител', 'готвач', 'купувам', 'продавам', 'дваесет'],
        cloze: [
          { sentence: 'Лекарот работи во ___.', answer: 'болницата', options: ['болницата', 'училиштето', 'пазарот'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Готвачот ___ свеж зеленчук на пазарот.', answer: 'купува', options: ['купува', 'продава', 'учи'], translation: 'O cozinheiro compra verduras frescas no mercado.' },
          { sentence: 'Таа е на ___ години.', answer: 'дваесет', options: ['дваесет', 'десет', 'пет'], translation: 'Ela tem vinte anos.' },
        ],
        voice: {
          bot: 'Со што се занимаваш? Каков е твојот пријател?',
          botTranslation: 'O que você faz? Qual é a profissão do seu amigo?',
          expected: ['Јас сум учител, а пријателот ми е лекар.', 'учител', 'лекар'],
          hint: 'Diga a sua profissão e a de um amigo com “сум...”.',
        },
        communityPrompt: 'Escreva sobre três profissões (лекар, учител, готвач, овчар, писател) e compare-as com “по-” e “од”: qual acha mais interessante que a outra?',
      },
      {
        id: 'mk-u4-l3',
        title: 'Тест: градот и професиите',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Кој град е поголем: Скопје или Битола? И каков е твојот град?',
          botTranslation: 'Qual cidade é maior: Skopje ou Bitola? E como é a sua cidade?',
          expected: ['Скопје е поголемо од Битола.', 'поголемо', 'од'],
          hint: 'Use o comparativo “по-... од” para comparar as duas cidades.',
        },
        communityPrompt: 'Escreva cinco frases comparando lugares ou pessoas da sua cidade com “по-” e “нај-”, como “поголем од” e “најдобар”.',
      },
    ],
  },
];
