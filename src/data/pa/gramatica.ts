import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do panjabi (variante do Paquistão, Shahmukhi) — A1.1, A1.2, A2.1 e A2.2.
 * Fontes: Wikipédia em inglês ("Punjabi grammar", "Punjabi language"), o curso acadêmico "Basic
 * Punjabi" (Michigan State University, openbooks.lib.msu.edu/basicpunjabi, seção 6.5 "Present and
 * Past Habitual"), o Wiktionary em inglês (verbete "ਹਾਂ" pra confirmar a cópula, "وجنا" pra
 * confirmar a concordância de gênero do particípio em Shahmukhi, e os verbetes de cada dezena —
 * "ਤੀਹ", "ਚਾਲ਼ੀ", "ਪੰਜਾਹ", "ਸੱਠ", "ਸੱਤਰ", "ਅੱਸੀ", "ਨੱਬੇ", "ਸੌ" — e de "ਗਰਮ", que o próprio Wiktionary
 * marca como indeclinável) e o Wikivoyage ("Punjabi phrasebook").
 */
export const GRAMMAR_PA: GrammarTopic[] = [
  {
    id: 'pa-g1',
    level: 'A1.1',
    title: 'SOV: o verbo fecha a frase',
    emoji: '🔀',
    summary: 'O panjabi é uma língua SOV (sujeito-objeto-verbo): o verbo vem no final da frase, diferente do português, que é SVO.',
    sections: [
      {
        text: 'A Wikipédia confirma: “Punjabi is an SOV language, having a canonical word order of subject–object–verb” (“o panjabi é uma língua SOV, com ordem canônica sujeito-objeto-verbo”). Isso vale também pra uma cópula (“ser/estar”) no final, como em frases com “اے” (é) ou “ہاں” (eu sou/estou).',
        examples: [
          ['میں پنجابی بولدا ہاں۔', 'Eu falo panjabi. (lit. “eu panjabi falo”: sujeito, objeto, verbo)'],
          ['تہاڈا ناں کی اے؟', 'Qual é o seu nome? (lit. “seu nome o que é”: sujeito, pergunta, verbo)'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra na ordem do português: em panjabi o verbo (ou a cópula) sempre fecha a frase, nunca fica entre o sujeito e o objeto.'],
    quiz: [
      {
        question: 'Em “میں پنجابی بولدا ہاں” (eu falo panjabi), em que posição da frase fica o verbo?',
        options: ['No final', 'Logo depois do sujeito', 'No início'],
        answer: 'No final',
        explanation: 'O panjabi é SOV: sujeito (میں), objeto (پنجابی) e só então o verbo (بولدا ہاں), no final.',
      },
    ],
  },
  {
    id: 'pa-g2',
    level: 'A1.1',
    title: 'میں، توں، تسیں: os pronomes e o formal/informal',
    emoji: '🙋',
    summary: 'O panjabi distingue “você” informal (“توں”) de “você/vocês” formal (“تسیں”), do mesmo jeito que o urdu distingue “تم”/“آپ”, já visto neste app.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['میں', 'eu'],
            ['توں', 'você (informal)'],
            ['تسیں', 'você/vocês (formal)'],
            ['اوہ', 'ele/ela'],
            ['اسیں', 'nós'],
          ],
        },
        text: '“توں” é usado entre amigos e com quem se tem intimidade; “تسیں” é a forma de respeito, usada com desconhecidos, pessoas mais velhas ou em contexto formal — e também serve como “vocês” (plural). “تہاڈا” (seu/sua) é a forma possessiva que acompanha “تسیں”.',
        examples: [['تہاڈا ناں کی اے؟', 'Qual é o seu nome? (com “تہاڈا”, forma formal/educada de “seu”)']],
      },
    ],
    pitfalls: ['Usar “توں” (informal) com um desconhecido ou alguém mais velho: o esperado é “تسیں” (formal), como “آپ” no urdu.'],
    quiz: [
      {
        question: 'Qual pronome é a forma FORMAL de “você”?',
        options: ['تسیں', 'توں', 'اوہ'],
        answer: 'تسیں',
        explanation: '“تسیں” é usado com desconhecidos e por respeito; “توں” é só para quem se tem intimidade.',
      },
    ],
  },
  {
    id: 'pa-g3',
    level: 'A1.2',
    title: 'Adjetivo antes do substantivo — e irmão “grande”/“pequeno”',
    emoji: '📐',
    summary: 'O adjetivo vem ANTES do substantivo que descreve (“چنگا دوست”, bom amigo) — e o panjabi nomeia irmãos por idade com “وڈا” (grande = mais velho) e “چھوٹا” (pequeno = mais novo).',
    sections: [
      {
        text: 'Como boa parte das línguas indo-arianas (a mesma família do urdu e do hindi, já neste app), o panjabi coloca o adjetivo antes do substantivo que ele descreve.',
        examples: [['چنگا دوست', 'bom amigo']],
      },
      {
        heading: 'Irmão mais velho, irmão mais novo',
        text: 'Não existe uma palavra só pra “irmão” sem dizer a idade relativa: “وڈا بھرا” (lit. “irmão grande”) é o irmão mais velho, e “چھوٹا بھرا” (lit. “irmão pequeno”) é o mais novo — o mesmo “وڈا”/“چھوٹا” que descrevem o tamanho de uma casa ou de um cachorro, aqui aplicados à idade.',
        examples: [
          ['وڈا بھرا', 'irmão mais velho'],
          ['چھوٹا بھرا', 'irmão mais novo'],
        ],
      },
      {
        heading: 'Uma ressalva honesta sobre gênero',
        text: 'Como o hindi e o urdu, o panjabi faz o adjetivo concordar em gênero com o substantivo (uma forma para substantivo masculino, outra para feminino) — mas este curso, por enquanto, só confirmou com segurança a forma masculina de cada adjetivo em Shahmukhi. Por isso as frases de exemplo evitam combinar esses adjetivos com substantivos femininos, pra não arriscar uma concordância inventada.',
      },
    ],
    pitfalls: ['Esperar uma palavra única pra “irmão” sem contexto de idade: o panjabi sempre marca se é o mais velho (“وڈا بھرا”) ou o mais novo (“چھوٹا بھرا”).'],
    quiz: [
      {
        question: 'Como se diz “irmão mais velho” em panjabi?',
        options: ['وڈا بھرا', 'چھوٹا بھرا', 'بھرا وڈا'],
        answer: 'وڈا بھرا',
        explanation: '“وڈا” (grande) vem antes de “بھرا” (irmão) pra marcar o irmão mais velho; “چھوٹا بھرا” é o mais novo.',
      },
    ],
  },
  {
    id: 'pa-g4',
    level: 'A1.2',
    title: '“کل”: a mesma palavra pra ontem e amanhã',
    emoji: '🔁',
    summary: 'O panjabi usa UMA palavra, “کل”, tanto pra “ontem” quanto pra “amanhã” — quem ouve distingue pelo tempo do verbo da frase, não por uma palavra diferente.',
    sections: [
      {
        text: 'Diferente do português, que tem uma palavra pra cada ("ontem" e "amanhã"), o panjabi usa "کل" pros dois sentidos — confirmado no Wiktionary em panjabi ocidental, que lista as duas traduções pra mesma entrada. Pra saber se é ontem ou amanhã, quem ouve olha pro resto da frase (se fala de algo que já aconteceu ou que vai acontecer).',
        examples: [['کل چنگا اے۔', '(O dia de) ontem/amanhã está bom. — ambíguo sem mais contexto, do mesmo jeito que seria em panjabi.']],
      },
    ],
    pitfalls: ['Esperar que “کل” signifique só uma coisa: sem mais contexto na frase, ela é mesmo ambígua entre “ontem” e “amanhã” — isso não é erro de tradução, é como a língua funciona.'],
    quiz: [
      {
        question: 'O que “کل” pode significar em panjabi?',
        options: ['Ontem OU amanhã, segundo o contexto', 'Só “amanhã”', 'Só “ontem”'],
        answer: 'Ontem OU amanhã, segundo o contexto',
        explanation: 'É a mesma palavra para os dois sentidos — quem ouve distingue pelo tempo do verbo da frase, não por uma palavra diferente.',
      },
    ],
  },
  {
    id: 'pa-g5',
    level: 'A2.1',
    title: 'As dezenas: de vinte a cem, uma palavra para cada',
    emoji: '🔢',
    summary: 'Diferente do português, que forma “vinte e um”, “trinta e dois” etc. a partir de poucas raízes, o panjabi tem uma palavra DIFERENTE para cada dezena, de “وِیہہ” (20) a “سَو” (100), confirmada verbete por verbete no Wiktionary.',
    sections: [
      {
        text: 'Cada dezena do panjabi é o seu próprio item de vocabulário, sem um padrão de composição simples como o sistema vigesimal de outras línguas (que formam, por exemplo, “quarenta” a partir de “dois vintes”). Por isso este curso ensina as dezenas como palavras soltas, uma a uma, em vez de inventar uma regra de composição que a pesquisa não confirmou.',
        table: {
          head: ['Número', 'Panjabi (Shahmukhi)'],
          rows: [
            ['20', 'وِیہہ'],
            ['30', 'تیہہ'],
            ['40', 'چاࣇی'],
            ['50', 'پنجاہ'],
            ['60', 'سَٹّھ'],
            ['70', 'ستر'],
            ['80', 'اسّی'],
            ['90', 'نَبّے'],
            ['100', 'سَو'],
          ],
        },
        examples: [
          ['وِیہہ، تیہہ، چاࣇی۔', '20, 30, 40.'],
          ['نَبّے، سَو۔', '90, 100.'],
        ],
      },
    ],
    pitfalls: ['Esperar que as dezenas sigam um padrão regular de composição (como “dois vintes” para quarenta): no panjabi cada dezena de 20 a 100 é uma palavra própria, sem regra de composição confirmada por este curso.'],
    quiz: [
      {
        question: 'Como se diz “sessenta” (60) em panjabi?',
        options: ['سَٹّھ', 'ستر', 'پنجاہ'],
        answer: 'سَٹّھ',
        explanation: '“سَٹّھ” é sessenta; “ستر” é setenta e “پنجاہ” é cinquenta — cada dezena tem a sua própria palavra.',
      },
    ],
  },
  {
    id: 'pa-g6',
    level: 'A2.2',
    title: 'Adjetivos que nunca mudam: os indeclináveis do persa',
    emoji: '🌡️',
    summary: 'O Wiktionary confirma que “گرم” (quente) é um adjetivo INDECLINÁVEL — não muda de forma para combinar com substantivo feminino ou plural —, diferente de adjetivos como “وڈا”/“چھوٹا”, cuja concordância de gênero este curso ainda não confirmou em Shahmukhi (ver a unidade “گَھر، ٹَبَّر”).',
    sections: [
      {
        text: 'O Wiktionary em inglês descreve “ਗਰਮ”/“گرم” como um adjetivo que “is indeclinable, meaning it doesn’t change form for gender or number” (“é indeclinável, ou seja, não muda de forma por gênero ou número”). Isso o deixa seguro para combinar com um substantivo feminino, como “ہوا” (vento): “ہوا گرم اے” (o vento está quente) usa a MESMA forma “گرم” que se usaria com um substantivo masculino.',
        examples: [
          ['ہوا گرم اے۔', 'O vento está quente. (“ہوا” é feminino, e “گرم” não muda por isso)'],
          ['پاݨِی ٹھنڈا اے۔', 'A água está fria. (exemplo com substantivo masculino, pela mesma cautela da unidade “گَھر، ٹَبَّر”)'],
        ],
      },
      {
        heading: 'Uma ressalva honesta',
        text: 'Essa indeclinabilidade confirmada vale, por ora, só para “گرم”. Outros adjetivos novos desta unidade, como “ٹھنڈا” (frio) e “خوش” (feliz), ainda não têm essa confirmação específica — por isso as frases de exemplo deles evitam combinar com substantivo feminino, a mesma cautela já usada com “وڈا”/“چھوٹا” no nível A1.2.',
      },
    ],
    pitfalls: ['Achar que TODO adjetivo do panjabi muda de forma por gênero: os de origem persa/árabe terminados em consoante, como “گرم” e “خوش”, tendem a ser invariáveis — mas só “گرم” tem essa regra confirmada por este curso até aqui.'],
    quiz: [
      {
        question: 'Segundo o Wiktionary, o que significa “گرم” ser um adjetivo indeclinável?',
        options: [
          'Ele não muda de forma para combinar com substantivo feminino ou plural',
          'Ele só pode ser usado com substantivo feminino',
          'Ele vira um substantivo quando usado com “اے”',
        ],
        answer: 'Ele não muda de forma para combinar com substantivo feminino ou plural',
        explanation: 'O Wiktionary descreve “گرم” como indeclinável: a mesma forma serve para masculino, feminino e plural.',
      },
    ],
  },
];
