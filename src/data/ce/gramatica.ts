import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do checheno — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: o
 * curso livre do Wikibooks ("Chechen/Lesson 1" e "Chechen/Lesson 2") e a Wikipédia em inglês
 * ("Chechen language"), reconferidas em 08/10/2026.
 */
export const GRAMMAR_CE: GrammarTopic[] = [
  {
    id: 'ce-g1',
    level: 'A1.1',
    title: 'O verbo “ser” concorda com o substantivo, não com quem fala',
    emoji: '🧩',
    summary: 'Ву, ю, ду e бу são formas do verbo “ser” — mas a escolha entre elas depende da classe gramatical do substantivo da frase, não do gênero de quem fala.',
    sections: [
      {
        text: 'Os substantivos do checheno se dividem em seis classes gramaticais (parecidas com “gêneros”, mas sem relação direta com masculino/feminino em tudo). As classes 1 e 2 seguem o gênero natural de pessoas: “кIант” (rapaz) é classe 1, “йоI” (moça) é classe 2. O verbo “ser” concorda com a classe do substantivo que vem depois dele — por isso “Со кIант ву” (eu sou um rapaz) usa “ву”, mas se a mesma pessoa dissesse “Со йоI ю” (eu sou uma moça), usaria “ю”: quem muda a forma do verbo é a palavra “кIант”/“йоI”, não quem fala.',
        table: {
          head: ['Pronome', 'Com substantivo classe 1', 'Com substantivo classe 2', 'No plural'],
          rows: [
            ['со (eu)', 'ву', 'ю', '—'],
            ['хьо (tu/você)', 'ву', 'ю', '—'],
            ['иза (ele/ela)', 'ву', 'ю', '—'],
            ['тхо/шу (nós excl./vocês)', '—', '—', 'ду'],
            ['уьш (eles/elas)', '—', '—', 'бу'],
          ],
        },
        examples: [
          ['Со кIант ву.', 'Eu sou um rapaz.'],
          ['Иза йоI ю.', 'Ela é uma moça.'],
          ['Уьш сан да-нана бу.', 'Eles são meus pais.'],
        ],
      },
    ],
    pitfalls: ['Pensar que “ву”/“ю” marcam o gênero de quem fala, como “obrigado”/“obrigada” no português: eles concordam com o substantivo da frase, que pode até ser de outra pessoa (“Иза кIант ву”, “ele é um rapaz”, continua “ву”).'],
    quiz: [
      { question: 'Em “Со йоI ю”, o “ю” concorda com…', options: ['“йоI” (classe 2)', 'o gênero de quem fala', 'nada, é sempre “ю”'], answer: '“йоI” (classe 2)', explanation: 'O verbo “ser” concorda com a classe do substantivo da frase, não com quem fala.' },
      { question: 'No plural, qual forma corresponde a “уьш” (eles/elas)?', options: ['бу', 'ду', 'ву'], answer: 'бу', explanation: '“Уьш” sempre leva “бу”, atestado em “Уьш сан да-нана бу” (eles são meus pais).' },
    ],
  },
  {
    id: 'ce-g2',
    level: 'A1.1',
    title: 'Ordem SOV: o verbo sempre no final',
    emoji: '📐',
    summary: 'O checheno é SOV (sujeito-objeto-verbo): o verbo, inclusive o “ser”, sempre fecha a frase.',
    sections: [
      {
        text: 'Como o japonês ou o coreano, o checheno põe o verbo no final da frase. Isso vale até para perguntas: “Иза мила ву?” (quem é ele?) continua com o verbo “ву” no fim, não no início como em português (“é ele quem?” ficaria estranho; aqui é “ele quem é?”). Não há artigos definidos ou indefinidos: “ваша” pode ser “um irmão”, “o irmão” ou simplesmente “irmão”, dependendo do contexto.',
        examples: [
          ['Иза мила ву?', 'Quem é ele?'],
          ['Хьо зуда ю.', 'Você é uma mulher.'],
          ['Нохчийн мотт чIогIа хаза бу.', 'A língua chechena é muito bonita.'],
        ],
      },
    ],
    pitfalls: ['Procurar o verbo logo depois do sujeito, como em português: no checheno ele só aparece no fim, mesmo em frases longas.'],
    quiz: [
      { question: 'Onde fica o verbo numa frase chechena?', options: ['No final', 'Logo depois do sujeito', 'No início'], answer: 'No final', explanation: 'O checheno é SOV: sujeito, depois objeto/predicado, e o verbo sempre por último.' },
      { question: 'O checheno tem artigo definido (“o”, “a”)?', options: ['Não', 'Sim, sempre', 'Só no plural'], answer: 'Não', explanation: '“Ваша” serve tanto para “irmão” quanto para “o irmão” ou “um irmão” — o contexto decide.' },
    ],
  },
  {
    id: 'ce-g3',
    level: 'A1.2',
    title: 'Pronomes possessivos: um genitivo próprio, sem sufixo regular',
    emoji: '🔗',
    summary: 'Para dizer “meu”, “seu”, “nosso”, o checheno usa uma forma própria de cada pronome (сан, хьан, цуьнан…), diferente do sufixo regular de genitivo dos substantivos comuns.',
    sections: [
      {
        text: 'Substantivos comuns formam o genitivo com um sufixo regular (“-н” depois de consoante, “-ан”/“-ин” depois de vogal): “гIала” (cidade) + “-н” = “гIалан” (da cidade), como em “гIалан нах” (o povo da cidade). Mas os pronomes têm formas de genitivo próprias, que não seguem essa regra — é preciso aprender cada uma: “сан” (meu), “хьан” (seu/teu), “цуьнан” (dele/dela), “тхан” (nosso, excluindo quem ouve), “вайн” (nosso, incluindo quem ouve), “шун” (de vocês), “церан” (deles/delas).',
        table: {
          head: ['Pronome (quem é)', 'Genitivo (“de quem”)', 'Tradução'],
          rows: [
            ['со (eu)', 'сан', 'meu'],
            ['хьо (tu/você)', 'хьан', 'seu, teu'],
            ['иза (ele/ela)', 'цуьнан', 'dele, dela'],
            ['тхо (nós, excl.)', 'тхан', 'nosso (excl.)'],
            ['вай (nós, incl.)', 'вайн', 'nosso (incl.)'],
            ['шу (vocês)', 'шун', 'de vocês'],
            ['уьш (eles/elas)', 'церан', 'deles, delas'],
          ],
        },
        examples: [
          ['Сан ваша Москвахь Iаш ву.', 'Meu irmão vive em Moscou.'],
          ['Иза хьан ваша а ву.', 'Ele também é seu irmão.'],
        ],
      },
    ],
    pitfalls: ['Tentar aplicar o sufixo “-н”/“-ан” regular dos substantivos aos pronomes: “со” não vira “сон”, e sim “сан” — é uma forma própria, para memorizar separada.'],
    quiz: [
      { question: 'Como se diz “meu irmão”?', options: ['Сан ваша', 'Со ваша', 'Ваша сан'], answer: 'Сан ваша', explanation: '“Сан” é o genitivo (posse) de “со” (eu): “сан ваша”, meu irmão.' },
      { question: 'O genitivo dos pronomes segue o mesmo sufixo “-н”/“-ан” dos substantivos comuns?', options: ['Não, cada pronome tem sua própria forma', 'Sim, sempre', 'Só no plural'], answer: 'Não, cada pronome tem sua própria forma', explanation: '“Сан”, “хьан”, “цуьнан” e as outras formas não seguem o sufixo regular — são formas próprias.' },
    ],
  },
  {
    id: 'ce-g4',
    level: 'A1.2',
    title: '“Saber” pede um sujeito no caso dativo',
    emoji: '💡',
    summary: 'Para dizer que sabe ou não sabe algo, o checheno não usa o sujeito comum (nominativo): usa o caso dativo, algo como “para mim é sabido”.',
    sections: [
      {
        text: 'A maioria dos verbos chechenos usa o sujeito no caso nominativo, como “со” (eu) em “Со кхета” (eu entendo). Mas o verbo “saber” (хаа) é diferente: quem sabe aparece no caso dativo, “суна” (algo como “para mim”), nunca “со”. “Суна ца хаа” é, ao pé da letra, mais perto de “para mim, não é sabido” do que de “eu não sei” — mas se traduz naturalmente como “eu não sei”.',
        examples: [
          ['Суна ца хаа.', 'Eu não sei.'],
          ['Со кхета.', 'Eu entendo. (sujeito comum, não dativo)'],
          ['Со ца кхета.', 'Eu não entendo.'],
        ],
      },
    ],
    pitfalls: ['Usar “со” com o verbo “хаа”: “Со ца хаа” soa errado para quem fala checheno — o certo é “Суна ца хаа”, com o sujeito no caso dativo.'],
    quiz: [
      { question: 'Como se diz “eu não sei” em checheno?', options: ['Суна ца хаа.', 'Со ца хаа.', 'Со ца кхета.'], answer: 'Суна ца хаа.', explanation: '“Саber” pede o sujeito no caso dativo (“суна”), não no nominativo (“со”).' },
      { question: 'O verbo “entender” (кхета) também pede sujeito no caso dativo?', options: ['Não, usa o sujeito comum (“со”)', 'Sim, sempre', 'Só na negação'], answer: 'Não, usa o sujeito comum (“со”)', explanation: '“Со кхета” (eu entendo) usa “со” normalmente — é só “saber” que pede o dativo.' },
    ],
  },
];
