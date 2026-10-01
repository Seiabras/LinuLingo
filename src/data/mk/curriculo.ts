import type { UnitSeed } from '../types';

/**
 * Trilha do macedônio: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
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
];
