import type { GrammarTopic } from '../types';

/**
 * Gramática do pidgin nigeriano — só A1.1 e A1.2 por enquanto (pacote incompleto, ver `incomplete`
 * em index.ts). O pidgin nigeriano tem gramática própria, bem diferente do inglês que deu a maior
 * parte do seu vocabulário: não conjuga verbo por pessoa, marca tempo e aspecto com palavrinhas antes
 * do verbo (dey, don, go), nega sempre antes do verbo (no) e pode marcar plural depois do substantivo
 * (dem). Fontes: Wikipédia (inglês), artigo “Nigerian Pidgin”; Wiktionary, entradas “dey”, “don”, “go”,
 * “fit”, “wan”, “sabi”, “una”, “dem”, “im”, “na”, “wey”, “wetin” em pidgin nigeriano (muitas com frases
 * reais do BBC News Pidgin, citadas abaixo entre aspas); e a própria Wikipédia em pidgin nigeriano
 * (pcm.wikipedia.org), cuja página inicial usa “pej-dem” (as páginas) para o plural com “dem”.
 */
export const GRAMMAR_PCM: GrammarTopic[] = [
  {
    id: 'pcm-g1',
    level: 'A1.1',
    title: 'Dey, don, go: o verbo não muda, as palavrinhas na frente dele mudam',
    emoji: '🔁',
    summary: 'O pidgin nigeriano não conjuga o verbo pela pessoa: quem marca o tempo e o aspecto são três palavras sempre antes do verbo — dey (contínuo), don (já aconteceu) e go (vai acontecer).',
    sections: [
      {
        text: '“Dey” vem do igbo “dị” (existir, estar) e faz dois papéis: sozinho, é o verbo “estar”; antes de outro verbo, marca que a ação está acontecendo agora. A Wikipédia em inglês cita a frase “We dey foh London” (nós estamos em Londres). “Don” marca que a ação já terminou: “I don chop” (eu já comi). “Go” antes do verbo marca o futuro: “I go come” (eu vou vir). Nenhuma dessas três palavras muda conforme quem fala: é sempre “I dey”, “you dey”, “dem dey”.',
        table: {
          head: ['Palavra', 'O que marca', 'Exemplo'],
          rows: [
            ['dey', 'ação contínua / “estar”', '“We dey foh London” — nós estamos em Londres'],
            ['don', 'ação já terminada', '“I don chop” — eu já comi'],
            ['go', 'ação futura', '“I go come” — eu vou vir'],
          ],
        },
        examples: [
          ['I dey fine.', 'Eu estou bem.'],
          ['I don chop.', 'Eu já comi.'],
          ['I go come tumoro.', 'Eu vou vir amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação como em português: no pidgin nigeriano o verbo fica igual — quem muda é a palavrinha antes dele.',
      'Confundir “don” (já aconteceu) com “dey” (está acontecendo agora): “I dey chop” é “eu estou comendo”; “I don chop” é “eu já comi”.',
    ],
    quiz: [
      { question: 'Como se diz “eu já comi”?', options: ['I don chop.', 'I dey chop.', 'I go chop.'], answer: 'I don chop.', explanation: '“Don” marca que a ação já terminou.' },
      { question: 'Qual palavra marca o futuro?', options: ['go', 'dey', 'don'], answer: 'go', explanation: '“Go” antes do verbo marca que a ação ainda vai acontecer: “I go come”.' },
    ],
  },
  {
    id: 'pcm-g2',
    level: 'A1.1',
    title: 'Os pronomes: I, you, e/im, we, una, dem',
    emoji: '🙋',
    summary: 'Os pronomes de sujeito do pidgin nigeriano — e por que o verbo fica igual para todos eles.',
    sections: [
      {
        text: 'O Wiktionary registra estas formas em frases reais, a maioria do BBC News Pidgin: “I no sabi am” (eu não sei), “You go waka sha” (você vai andar/sair mesmo), “e no go reach my brain” (isso não vai chegar à minha cabeça — “e” é a 3ª pessoa), “We dey foh London” (nós estamos em Londres), “Una dey mad” (vocês estão loucos) e “dem dey check buildings” (eles estão checando prédios). “Una” (vocês) vem do igbo “ụnụ”; “im” (ele, ela, isso; dele, dela) vem do inglês “him”, mas serve para os três gêneros — o pidgin nigeriano não distingue “ele” de “ela” no pronome.',
        table: {
          head: ['Pessoa', 'Pronome', 'Frase citada'],
          rows: [
            ['eu', 'I', '“I no sabi am” (eu não sei)'],
            ['você', 'you', '“You go waka sha” (você vai mesmo)'],
            ['ele / ela / isso', 'e, im', '“E no go reach my brain” (isso não vai chegar à minha cabeça)'],
            ['nós', 'we', '“We dey foh London” (nós estamos em Londres)'],
            ['vocês', 'una', '“Una dey mad” (vocês estão loucos)'],
            ['eles, elas', 'dem', '“Dem dey check buildings” (eles estão checando prédios)'],
          ],
        },
        examples: [
          ['Una dey fine?', 'Vocês estão bem?'],
          ['Dem dey chop.', 'Eles estão comendo.'],
        ],
      },
    ],
    pitfalls: [
      '“Una” não quer dizer “um”: é o “vocês”, emprestado do igbo “ụnụ”, nada a ver com o numeral.',
      '“Im” serve tanto para “ele”/“ela” quanto para “dele”/“dela”: não há um pronome diferente para cada caso, como em português.',
    ],
    quiz: [
      { question: 'O que quer dizer “una”?', options: ['vocês', 'um', 'eles'], answer: 'vocês', explanation: '“Una” vem do igbo “ụnụ” e é o pronome da 2ª pessoa do plural.' },
      { question: 'Em “dem dey check buildings”, quem é “dem”?', options: ['eles', 'você', 'nós'], answer: 'eles', explanation: '“Dem” é a 3ª pessoa do plural: eles, elas.' },
    ],
  },
  {
    id: 'pcm-g3',
    level: 'A1.2',
    title: 'Fit, wan, sabi: verbos modais sem “to”',
    emoji: '💪',
    summary: 'Três verbos modais, sempre antes do verbo principal e sem nenhuma palavra de ligação: fit (poder), wan (querer) e sabi (saber, conseguir).',
    sections: [
      {
        text: '“Sabi” vem do português “saber” — chegou com os navios portugueses que comerciavam na costa da África Ocidental, bem antes dos ingleses. Além de “saber uma informação”, “sabi” também quer dizer “saber fazer, ter habilidade”. “Fit” é “poder, conseguir” (capacidade ou permissão). “Wan” é “querer”, do inglês “want”, mas sem o “to” do inglês depois dele.',
        examples: [
          ['I fit waka.', 'Eu posso ir/andar.'],
          ['I wan chop rais.', 'Eu quero comer arroz.'],
          ['I no sabi cook.', 'Eu não sei cozinhar.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr um “to” depois do modal, como em inglês: no pidgin nigeriano é só “I wan chop”, nunca algo como “I wan to chop”.',
      '“Sabi” não é só “saber uma informação”: é também “saber fazer”, “ter o conhecimento para”.',
    ],
    quiz: [
      { question: 'De que língua vem “sabi”?', options: ['português', 'inglês', 'iorubá'], answer: 'português', explanation: '“Sabi” vem do português “saber”, levado pelos navios portugueses à costa da África Ocidental.' },
      { question: 'Como se diz “eu quero comer”?', options: ['I wan chop.', 'I wan to chop.', 'I fit chop.'], answer: 'I wan chop.', explanation: 'O modal “wan” vem direto antes do verbo, sem “to”.' },
    ],
  },
  {
    id: 'pcm-g4',
    level: 'A1.2',
    title: 'No, dem e na: negar, marcar plural e dar foco',
    emoji: '🚫',
    summary: 'Como negar (no antes do verbo), marcar o plural (dem depois do substantivo) e destacar a parte mais importante da frase (na).',
    sections: [
      {
        text: 'A negação é simples: “no” vem sempre antes do verbo, como em “I no sabi” (eu não sei), citado em fontes reais do pidgin nigeriano. O plural pode ser marcado pondo “dem” depois do substantivo: a própria Wikipédia em pidgin nigeriano usa “pej-dem” (as páginas) na página inicial dela. E “na” antes de uma palavra destaca que ela é o ponto principal da frase — uma espécie de “é” bem forte.',
        table: {
          head: ['Função', 'Palavra', 'Exemplo'],
          rows: [
            ['negar o verbo', 'no (antes do verbo)', 'I no sabi.'],
            ['marcar plural', 'dem (depois do substantivo)', 'pej-dem (as páginas)'],
            ['dar foco', 'na (antes da palavra)', 'Na mi be Ade.'],
          ],
        },
        examples: [
          ['I no get moni.', 'Eu não tenho dinheiro.'],
          ['Di pikin-dem dey skul.', 'As crianças estão na escola.'],
          ['Na mi be Ade.', 'Sou eu, Ade. (lit.: é eu que sou Ade)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “no” depois do verbo, como em português (“eu sei não”): no pidgin nigeriano é sempre antes: “I no sabi”.',
      '“Dem” como marca de plural é opcional e vem depois do substantivo, nunca antes dele.',
    ],
    quiz: [
      { question: 'Onde fica o “no” que nega o verbo?', options: ['antes do verbo', 'depois do verbo', 'no fim da frase'], answer: 'antes do verbo', explanation: '“I no sabi” (eu não sei): “no” vem sempre antes do verbo.' },
      { question: 'Como marcar que “pikin” (criança) está no plural?', options: ['pikin-dem', 'dem pikin', 'pikins'], answer: 'pikin-dem', explanation: '“Dem” vem depois do substantivo para marcar o plural: “pikin-dem”, as crianças.' },
    ],
  },
  {
    id: 'pcm-g5',
    level: 'A1.2',
    title: 'Wetin, wia, wen, hu — e a palavrinha wey',
    emoji: '❓',
    summary: 'As palavras de pergunta do pidgin nigeriano, e “wey”, que liga uma ideia a outra (“que”, “quem”).',
    sections: [
      {
        text: '“Wetin” (o quê) vem de “what thing”; é citada na frase “Wetin be dat?” (o que é isso?). “Wey” não pergunta nada sozinha: ela liga duas ideias, como “que” ou “quem” em “a pessoa que anda”. A Wikipédia cita “wey” em “…wey dey normally dey full of life…” (que normalmente está cheia de vida) e em “any NYSC member wey dey interested…” (qualquer membro do NYSC que estiver interessado).',
        examples: [
          ['Wetin be dat?', 'O que é isso?'],
          ['Wia yor haus dey?', 'Onde fica a sua casa?'],
          ['Di pesin wey dey waka.', 'A pessoa que está andando.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “wey” com “wetin”: “wetin” pergunta “o quê”; “wey” liga frases (“que”, “quem”).',
      'Esperar um verbo auxiliar antes da pergunta como em inglês (“does”): no pidgin nigeriano a palavra de pergunta já basta: “Wen you go kom?” (quando você vai vir?).',
    ],
    quiz: [
      { question: 'Qual palavra liga “a pessoa” a “que anda”?', options: ['wey', 'wetin', 'na'], answer: 'wey', explanation: '“Wey” é o pronome relativo: “di pesin wey dey waka”.' },
      { question: 'Como se pergunta “o que é isso?”', options: ['Wetin be dat?', 'Wia be dat?', 'Wen be dat?'], answer: 'Wetin be dat?', explanation: '“Wetin” (de “what thing”) é a palavra para “o quê”.' },
    ],
  },
];
