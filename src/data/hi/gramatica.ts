import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hindi — A1.1 até A2.2 (pacote incompleto, ver `incomplete` em index.ts).
 * Tópicos de A2 verificados na Wikipédia em inglês ("Hindi grammar") e no Wiktionary em inglês.
 */
export const GRAMMAR_HI: GrammarTopic[] = [
  {
    id: 'hi-g1',
    level: 'A1.1',
    title: 'A escrita devanágari',
    emoji: '🔤',
    summary: 'Uma escrita silábica (abugida) com mais de 2500 anos, também usada para escrever o sânscrito e o marathi.',
    sections: [
      {
        text: 'O devanágari se escreve da esquerda para a direita, com as letras penduradas numa linha horizontal no topo (“शिरोरेखा”). Cada consoante já carrega embutido o som “a”: “क” sozinho já soa “ka”. Para trocar essa vogal, usam-se sinais (“मात्रा”) grudados antes, depois, em cima ou embaixo da consoante — por isso o mesmo som pode “sumir” ou mudar de forma conforme o que vem ao redor.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['अ', 'um “a” curto', 'अच्छा (acchā, bom)'],
            ['न', 'como o “n” do português', 'नाम (nām, nome)'],
            ['ह', 'um “h” aspirado, que não existe em português', 'हाँ (hā̃, sim)'],
            ['◌ा', 'sinal de “ā” longo, grudado depois da consoante', 'माँ (mā̃, mãe)'],
            ['◌ी', 'sinal de “ī” longo, grudado depois da consoante', 'रोटी (roṭī, pão)'],
          ],
        },
        examples: [
          ['नमस्ते, मैं हिंदी सीख रहा हूँ।', 'Oi, eu estou aprendendo hindi.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar ler o devanágari letra por letra, como o alfabeto latino: os sinais de vogal mudam a forma e até a posição ao redor da consoante, então uma “sílaba” pode ter até três símbolos grudados.',
      'Esquecer que uma consoante sozinha, sem nenhum sinal, já soa com “a” embutido: “क” é “ka”, não “k”.',
    ],
    quiz: [
      { question: 'O devanágari é uma escrita…', options: ['silábica (abugida): a consoante já vem com uma vogal embutida', 'alfabética, uma letra por som, sem vogal embutida', 'ideográfica, um símbolo por palavra'], answer: 'silábica (abugida): a consoante já vem com uma vogal embutida', explanation: 'Numa abugida como o devanágari, cada consoante soa com “a” por padrão, e sinais ao redor dela trocam essa vogal.' },
      { question: 'Além do hindi, o devanágari também é usado para escrever…', options: ['o sânscrito e o marathi', 'o urdu', 'o inglês da Índia'], answer: 'o sânscrito e o marathi', explanation: 'O urdu usa uma escrita derivada do árabe-persa, mesmo sendo quase a mesma língua falada que o hindi.' },
    ],
  },
  {
    id: 'hi-g2',
    level: 'A1.1',
    title: 'तू, तुम, आप: os três níveis de “você”',
    emoji: '🙇',
    summary: 'O hindi tem três pronomes para “você”, cada um com seu próprio jeito de conjugar “ser/estar”.',
    sections: [
      {
        text: '“तू” é só para quem é muito íntimo — crianças, Deus em orações, ou entre amigos muito próximos — e pode soar rude fora desses contextos. “तुम” é o meio-termo, usado com amigos, colegas e pessoas da mesma idade ou mais novas. “आप” é o tratamento respeitoso, usado com desconhecidos, pessoas mais velhas, pais e qualquer figura de autoridade: é sempre o jeito mais seguro de começar uma conversa.',
        table: {
          head: ['Pronome', 'Nível', '“ser/estar” (होना)'],
          rows: [
            ['तू', 'muito íntimo', 'है'],
            ['तुम', 'informal', 'हो'],
            ['आप', 'formal, respeitoso', 'हैं'],
          ],
        },
        examples: [
          ['तू कहाँ है?', 'Onde você está? (bem íntimo)'],
          ['तुम कैसे हो?', 'Como você vai? (informal)'],
          ['आप कैसे हैं?', 'Como o(a) senhor(a) vai? (formal)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “तू” com um desconhecido ou alguém mais velho: soa rude ou até agressivo, mesmo sem essa intenção.',
      'Esquecer que o verbo muda com o pronome: “तुम है” e “आप हो” estão errados — é “तुम हो” e “आप हैं”.',
    ],
    quiz: [
      { question: 'Para falar com o pai de um(a) amigo(a) pela primeira vez, o pronome mais seguro é…', options: ['आप', 'तू', 'तुम'], answer: 'आप', explanation: '“आप” é o tratamento respeitoso, correto para desconhecidos e pessoas mais velhas.' },
      { question: 'Complete: “तुम कैसे ___?”', options: ['हो', 'है', 'हैं'], answer: 'हो', explanation: '“तुम” sempre vem com “हो”, nunca com “है” (de तू) nem “हैं” (de आप).' },
    ],
  },
  {
    id: 'hi-g3',
    level: 'A1.2',
    title: 'Gênero gramatical: masculino e feminino',
    emoji: '⚥',
    summary: 'Todo substantivo do hindi é masculino ou feminino, e adjetivos, verbos e até posposições concordam com ele.',
    sections: [
      {
        text: 'O hindi marca gênero gramatical (masculino, “पुल्लिंग”, e feminino, “स्त्रीलिंग”) em todo substantivo — mesmo em coisas sem sexo, como “घर” (casa, masculino) ou “रोटी” (pão, feminino). Muitos adjetivos terminados em “-आ” mudam para “-ई” no feminino: “बड़ा” (grande) vira “बड़ी” diante de um substantivo feminino. Adjetivos emprestados do persa ou do árabe, como “सफ़ेद” (branco) e “लाल” (vermelho), não mudam nunca.',
        table: {
          head: ['Masculino', 'Feminino', 'Exemplo'],
          rows: [
            ['बड़ा (grande)', 'बड़ी', 'मेरा घर बड़ा है। / मेरी बहन बड़ी है।'],
            ['छोटा (pequeno)', 'छोटी', 'मेरा भाई छोटा है। / मेरी बेटी छोटी है।'],
            ['काला (preto)', 'काली', 'कुत्ता काला है। / बिल्ली काली है।'],
            ['अच्छा (bom)', 'अच्छी', 'खाना अच्छा है। / चाय अच्छी है।'],
          ],
        },
        examples: [
          ['मेरा परिवार बड़ा है।', 'A minha família é grande. (परिवार é masculino)'],
          ['रोटी ताज़ी है।', 'O pão está fresco. (रोटी é feminino, apesar de “pão” ser masculino em português)'],
        ],
      },
    ],
    pitfalls: [
      'Supor que o gênero segue o sentido, como em português: “पानी” (água) é masculino, e “किताब” (livro) é feminino, sem ligação óbvia com o que a palavra significa.',
      'Esquecer de mudar o adjetivo: “यह बिल्ली काला है” soa errado — tem que ser “यह बिल्ली काली है”, concordando com “बिल्ली” (feminino).',
    ],
    quiz: [
      { question: 'Como se diz “a casa é pequena”, com “घर” (masculino)?', options: ['मेरा घर छोटा है।', 'मेरा घर छोटी है।', 'मेरी घर छोटा है।'], answer: 'मेरा घर छोटा है।', explanation: '“घर” é masculino, então o possessivo e o adjetivo ficam na forma masculina: “मेरा … छोटा”.' },
      { question: 'Qual adjetivo NUNCA muda de forma, mesmo com um substantivo feminino?', options: ['सफ़ेद (branco)', 'बड़ा (grande)', 'काला (preto)'], answer: 'सफ़ेद (branco)', explanation: '“सफ़ेद”, como “लाल” (vermelho), foi emprestado do persa e é invariável: não tem forma feminina separada.' },
    ],
  },
  {
    id: 'hi-g4',
    level: 'A1.2',
    title: 'Ter: के पास e o genitivo da família',
    emoji: '🤲',
    summary: 'O hindi não tem um verbo para “ter”: usa “के पास” (perto de) para objetos, e o possessivo direto para parentesco.',
    sections: [
      {
        text: 'Para dizer que alguém tem um objeto, o hindi usa a posposição “के पास” (perto de, com) antes de “होना”: “मेरे पास एक किताब है” é, ao pé da letra, “perto de mim um livro é”. Já para falar de parentesco, não se usa “के पास”: o jeito natural é só o possessivo (मेरा/मेरी) com “होना” — “मेरा एक भाई है” (tenho um irmão, literalmente “meu um irmão é”). Para negar qualquer um dos dois, “नहीं” vem antes do verbo: “मेरे पास नहीं है” (não tenho), “मेरा भाई नहीं है” (não tenho irmão).',
        table: {
          head: ['O que se tem', 'Construção', 'Exemplo'],
          rows: [
            ['objeto', 'X के पास … है', 'मेरे पास एक किताब है।'],
            ['parente', 'मेरा/मेरी … है', 'मेरा एक भाई है।'],
            ['negação', '… नहीं है', 'मेरे पास कुत्ता नहीं है।'],
          ],
        },
        examples: [
          ['मेरे पास एक किताब है।', 'Eu tenho um livro.'],
          ['मेरा एक भाई है।', 'Eu tenho um irmão.'],
          ['मेरे पास कुत्ता नहीं है।', 'Eu não tenho cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “के पास” com parentesco: “मेरे पास एक भाई है” soa estranho em hindi — o natural é “मेरा एक भाई है”, sem “के पास”.',
      'Esquecer que “नहीं” vem antes do verbo, não depois: é “नहीं है”, nunca “है नहीं” numa frase comum.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um livro”?', options: ['मेरे पास एक किताब है।', 'मेरा एक किताब है।', 'मैं एक किताब हूँ।'], answer: 'मेरे पास एक किताब है।', explanation: 'Posse de objeto usa “के पास” (perto de) antes de “है”.' },
      { question: 'Como se diz “eu tenho uma irmã”?', options: ['मेरी एक बहन है।', 'मेरे पास एक बहन है।', 'मैं एक बहन हूँ।'], answer: 'मेरी एक बहन है।', explanation: 'Parentesco usa só o possessivo (मेरी, concordando com “बहन”, feminino) com “है”, sem “के पास”.' },
    ],
  },
  {
    id: 'hi-g5',
    level: 'A2.1',
    title: 'Presente contínuo: रहा/रही/रहे + है/हैं',
    emoji: '🏃',
    summary: 'Uma ação em andamento agora mesmo leva रहा (masc.), रही (fem.) ou रहे (plural/तुम) entre o verbo e a cópula.',
    sections: [
      {
        text: 'Para dizer que algo está acontecendo neste momento, o hindi usa o radical do verbo (sem o “ना” do infinitivo) seguido de रहा/रही/रहे, que concorda em gênero e número com o sujeito, e por último a cópula “है/हो/हैं”, que concorda com a pessoa. “मैं पढ़ रहा हूँ” é, ao pé da letra, “eu ler fiquei estou” — uma estrutura bem diferente do português, mas regular.',
        table: {
          head: ['Sujeito', 'रहा/रही/रहे', 'Cópula'],
          rows: [
            ['मैं (masc.)', 'रहा', 'हूँ'],
            ['मैं (fem.)', 'रही', 'हूँ'],
            ['तुम', 'रहे / रही', 'हो'],
            ['वह (masc.)', 'रहा', 'है'],
            ['वह (fem.)', 'रही', 'है'],
            ['हम / वे', 'रहे / रही', 'हैं'],
          ],
        },
        examples: [
          ['मैं किताब पढ़ रहा हूँ।', 'Eu estou lendo um livro. (quem fala é homem)'],
          ['आज बारिश हो रही है।', 'Hoje está chovendo.'],
          ['बच्चे खेल रहे हैं।', 'As crianças estão brincando.'],
        ],
      },
      {
        heading: 'Uma pegadinha: contínuo não é o mesmo que estado já feito',
        text: 'O contínuo descreve a ação ENQUANTO ela acontece, não um estado já alcançado. “मैं कमीज़ पहन रहा हूँ” é “eu estou (no processo de) vestindo a camisa” — e não “eu já estou de camisa vestida”, que pediria outra construção (o participle perfectivo, fora do alcance deste nível).',
        examples: [['मैं कमीज़ पहन रहा हूँ।', 'Eu estou vestindo a camisa. (ainda no processo)']],
      },
    ],
    pitfalls: [
      'Esquecer a concordância de gênero em रहा/रही: uma mulher falando de si mesma usa “रही”, nunca “रहा” (“मैं पढ़ रही हूँ”, não “पढ़ रहा हूँ”).',
      'Usar o contínuo para um estado já alcançado (como “já estou vestido”): em hindi isso pede outra construção, não रहा/रही/रहे.',
    ],
    quiz: [
      { question: 'Uma mulher diz “eu estou estudando” como…', options: ['मैं पढ़ रही हूँ।', 'मैं पढ़ रहा हूँ।', 'मैं पढ़ रहे हूँ।'], answer: 'मैं पढ़ रही हूँ।', explanation: 'रही concorda com um sujeito feminino; रहा seria para um homem, e रहे não combina com “हूँ”.' },
      { question: 'Como se diz “hoje está chovendo”?', options: ['आज बारिश हो रही है।', 'आज बारिश होगी।', 'आज बारिश है।'], answer: 'आज बारिश हो रही है।', explanation: '“बारिश” é feminino, então o contínuo concorda com “रही”, mais a cópula “है” (3ª pessoa).' },
    ],
  },
  {
    id: 'hi-g6',
    level: 'A2.1',
    title: 'Posposições: में, पर, से, के लिए',
    emoji: '📍',
    summary: 'O hindi usa posposições (depois da palavra, não antes): में marca “dentro de”, पर marca “sobre”, से marca “com” ou “de”, e के लिए marca “para”.',
    sections: [
      {
        text: 'Diferente do português, essas palavrinhas vêm DEPOIS do substantivo que elas regem — por isso se chamam posposições, não preposições. “में” marca estar dentro de um lugar; “पर” marca estar sobre uma superfície; “से” tem dois usos bem diferentes: instrumento/companhia (“com”) e origem (“de”, já visto em “कहाँ से”); “के लिए” marca o beneficiário, “para”.',
        table: {
          head: ['Posposição', 'Sentido', 'Exemplo'],
          rows: [
            ['में', 'dentro de, em', 'मैं घर में हूँ।'],
            ['पर', 'sobre, em (superfície)', 'किताब मेज़ पर है।'],
            ['से', 'com (instrumento); de (origem)', 'मैं हाथ से लिखता हूँ।'],
            ['के लिए', 'para', 'यह तुम्हारे लिए है।'],
          ],
        },
        examples: [
          ['मैं घर में हूँ।', 'Eu estou em casa.'],
          ['किताब मेज़ पर है।', 'O livro está na mesa.'],
          ['यह तुम्हारे लिए है।', 'Isto é para você.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “में” (dentro de) com “पर” (sobre uma superfície): “किताब मेज़ में है” soa errado — um livro fica “पर” (sobre) a mesa, não “में” (dentro) dela.',
      'Esquecer que “से” também significa “de, a partir de” (já visto em “कहाँ से”, de onde): o mesmo “से” serve tanto para instrumento quanto para origem, a depender do contexto.',
    ],
    quiz: [
      { question: 'Como se diz “o livro está na mesa”?', options: ['किताब मेज़ पर है।', 'किताब मेज़ में है।', 'किताब मेज़ से है।'], answer: 'किताब मेज़ पर है।', explanation: '“पर” marca algo sobre uma superfície; “में” seria “dentro” da mesa, o que não faz sentido aqui.' },
      { question: 'Como se diz “isto é para você”?', options: ['यह तुम्हारे लिए है।', 'यह तुम में है।', 'यह तुमसे है।'], answer: 'यह तुम्हारे लिए है।', explanation: '“के लिए” marca o beneficiário, equivalente a “para” em português.' },
    ],
  },
  {
    id: 'hi-g7',
    level: 'A2.2',
    title: 'Futuro: -ऊँगा/-ओगे/-एगा/-एंगे',
    emoji: '🔮',
    summary: 'O futuro se forma acrescentando गा/गे/गी ao radical do verbo, com uma forma diferente para cada pessoa e gênero.',
    sections: [
      {
        text: 'O futuro do hindi muda de forma com a pessoa e o gênero do sujeito, mas o padrão é regular. Para verbos como “पढ़ना” (ler, estudar):',
        table: {
          head: ['Sujeito', 'पढ़ना (ler/estudar)'],
          rows: [
            ['मैं (masc./fem.)', 'पढ़ूँगा / पढ़ूँगी'],
            ['तुम', 'पढ़ोगे / पढ़ोगी'],
            ['वह (masc./fem.)', 'पढ़ेगा / पढ़ेगी'],
            ['हम / आप / वे', 'पढ़ेंगे / पढ़ेंगी'],
          ],
        },
        examples: [
          ['मैं हिंदी पढ़ूँगा।', 'Eu vou estudar hindi. (quem fala é homem)'],
          ['वह बाज़ार जाएगी।', 'Ela vai ao mercado.'],
          ['हम कल मिलेंगे।', 'Nós vamos nos encontrar amanhã.'],
        ],
      },
      {
        heading: 'Verbos terminados em vogal',
        text: 'Verbos cujo radical termina em vogal, como “जाना” (ir, radical जा-), inserem um “ए” de ligação antes das terminações que começam com vogal: जा + ऊँगा → जाऊँगा; जा + एगा → जाएगा; जा + एंगे → जाएंगे.',
        examples: [['मैं कल बाज़ार जाऊँगा।', 'Eu vou ao mercado amanhã.']],
      },
    ],
    pitfalls: [
      'Esquecer a concordância de gênero: um homem diz “पढ़ूँगा”, uma mulher diz “पढ़ूँगी” — a mesma distinção masculino/feminino que já aparece no presente contínuo.',
      'Tentar usar o futuro com o aspecto habitual (o presente simples com -ता/-ती): o hindi não combina as duas coisas na mesma forma verbal.',
    ],
    quiz: [
      { question: 'Uma mulher diz “eu vou estudar hindi” como…', options: ['मैं हिंदी पढ़ूँगी।', 'मैं हिंदी पढ़ूँगा।', 'मैं हिंदी पढ़ोगी।'], answer: 'मैं हिंदी पढ़ूँगी।', explanation: '“-ूँगी” é a forma feminina de 1ª pessoa; “-ूँगा” seria masculina, e “-ओगी” é de 2ª pessoa (तुम).' },
      { question: 'Como se diz “ela vai ao mercado” (futuro)?', options: ['वह बाज़ार जाएगी।', 'वह बाज़ार जाती है।', 'वह बाज़ार जा रही है।'], answer: 'वह बाज़ार जाएगी।', explanation: '“जाएगी” é o futuro de 3ª pessoa feminina do verbo “जाना” (ir), com o “ए” de ligação depois do radical vocálico.' },
    ],
  },
  {
    id: 'hi-g8',
    level: 'A2.2',
    title: 'Comparativo e superlativo: से e सबसे',
    emoji: '⚖️',
    summary: '“Mais … que” usa से antes do adjetivo; “o mais …” usa सबसे.',
    sections: [
      {
        text: 'Para comparar duas coisas, o segundo termo leva a posposição “से” (aqui no sentido de “em relação a”), colocada logo antes do adjetivo. Para o superlativo, “सबसे” (de todos) vem antes do adjetivo, sem precisar de um segundo termo.',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['X से [adjetivo]', 'mais … que X', 'गीता गौतम से लंबी है।'],
            ['सबसे [adjetivo]', 'o(a) mais …', 'यह सबसे अच्छी किताब है।'],
          ],
        },
        examples: [
          ['गीता गौतम से लंबी है।', 'Gita é mais alta que Gautam.'],
          ['यह किताब उस किताब से बड़ी है।', 'Este livro é maior que aquele.'],
          ['यह सबसे अच्छी किताब है।', 'Este é o melhor livro.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar “से” depois do adjetivo, como em português (“alta que”): em hindi a ordem é “X से [adjetivo]”, com “से” antes do adjetivo, não depois.',
      'Usar “से” no superlativo: “सबसे” não precisa de um segundo termo com “से” — “सबसे अच्छी” já é “a melhor”, sozinho.',
    ],
    quiz: [
      { question: 'Como se diz “Gita é mais alta que Gautam”?', options: ['गीता गौतम से लंबी है।', 'गीता से गौतम लंबी है।', 'गीता लंबी गौतम से है।'], answer: 'गीता गौतम से लंबी है।', explanation: 'A ordem é [sujeito] [termo comparado]+से [adjetivo]+है.' },
      { question: 'Como se diz “este é o melhor livro”?', options: ['यह सबसे अच्छी किताब है।', 'यह किताब से अच्छी है।', 'यह अच्छी सबसे किताब है।'], answer: 'यह सबसे अच्छी किताब है।', explanation: '“सबसे” antes do adjetivo forma o superlativo, sem precisar de um segundo termo de comparação.' },
    ],
  },
];
