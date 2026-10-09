import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do télugo (A1 e A2). O télugo é
 * dravídico (não indo-ariano como o hindi, o bengali ou o marathi): a morfologia é aglutinante,
 * só com sufixos (sem prefixos nem infixos), a ordem é sujeito-objeto-verbo (SOV), e o sistema de
 * casos é marcado por sufixos pospostos, não por preposições. Fontes: Wikipédia em inglês
 * («Telugu grammar», «Telugu language», «Telugu script») e Wiktionary em inglês.
 * A2 (te-g6 a te-g8) acrescenta o caso locativo em mais substantivos, o comparativo com “-కంటే”
 * e o futuro do verbo “వెళ్ళు” — direto da tabela e dos exemplos do artigo «Telugu grammar» da
 * Wikipédia em inglês, mais o verbete do sufixo “-లో” no Wiktionary em inglês. Um comparativo com
 * substantivo (em vez de pronome) e o futuro do verbo “ఉండు” (ser/estar/existir) ficaram de fora:
 * não achamos uma tabela ou frase pronta e confiável pra eles, só para “వెళ్ళు”.
 */
export const GRAMMAR_TE: GrammarTopic[] = [
  {
    id: 'te-g1',
    level: 'A1.1',
    title: 'O alfabeto télugo',
    emoji: '🔤',
    summary: 'Uma escrita silábica (abugida) descendente do brahmi, com 16 vogais e 36 consoantes.',
    sections: [
      {
        text: 'O télugo se escreve da esquerda para a direita, num alfabeto próprio (não o devanágari do hindi, nem o árabe do urdu). É uma abugida: cada consoante já soa com um “a” embutido, e sinais ao redor dela trocam essa vogal. O alfabeto télugo descende do brahmi por meio da escrita Kadamba; télugo e canarês usavam basicamente a mesma escrita até se separarem por volta do ano 1300.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['అ', 'um “a” curto, como em “cama”', 'అమ్మ (amma, “mãe”)'],
            ['న', 'como o “n” do português', 'నాన్న (nānna, “pai”)'],
            ['డ', 'um “d” retroflexo — a língua se curva para trás, sem equivalente em português', 'ఎక్కడ (ekkaḍa, “onde”)'],
            ['ర', 'um erre batido uma vez, como no espanhol ou no português de Portugal', 'పేరు (pēru, “nome”)'],
            ['చ', 'uma consoante “tch”, como em “tchau”', 'చిన్న (cinna, “pequeno”)'],
          ],
        },
        examples: [['నమస్కారం, నా పేరు ప్రియ.', 'Olá, meu nome é Priya.']],
      },
    ],
    pitfalls: [
      'Tentar ler o télugo letra por letra, como o alfabeto latino: cada consoante já soa com um “a” embutido, e sinais grudados ao redor mudam essa vogal.',
      'Confundir ళ (um “l” retroflexo, exclusivo do télugo, sem vir do sânscrito) com ల (o “l” comum): são letras diferentes, mesmo parecendo parecidas.',
    ],
    quiz: [
      {
        question: 'O alfabeto télugo é uma escrita…',
        options: ['silábica (abugida): a consoante já vem com uma vogal embutida', 'alfabética, uma letra por som, sem vogal embutida', 'ideográfica, um símbolo por palavra'],
        answer: 'silábica (abugida): a consoante já vem com uma vogal embutida',
        explanation: 'Como o devanágari do hindi, o télugo é uma abugida: toda consoante soa com “a” por padrão, até um sinal mudar essa vogal.',
      },
      {
        question: 'De qual escrita antiga descende o alfabeto télugo, e por qual escrita intermediária?',
        options: ['Do brahmi, por meio da escrita Kadamba', 'Do árabe-persa, direto', 'Do latim, por meio do grego'],
        answer: 'Do brahmi, por meio da escrita Kadamba',
        explanation: 'Télugo e canarês compartilhavam a escrita Kadamba até se separarem, por volta de 1300.',
      },
    ],
  },
  {
    id: 'te-g2',
    level: 'A1.1',
    title: 'నువ్వు, నీవు, మీరు: os níveis de “você”',
    emoji: '🙇',
    summary: 'O télugo tem vários pronomes para “você”, do bem informal ao muito cerimonioso.',
    sections: [
      {
        text: '“నువ్వు” é o pronome informal do dia a dia, usado com amigos, colegas e crianças. “నీవు” é um meio-termo mais formal e mais literário, pouco comum na fala cotidiana. “మీరు” é o tratamento respeitoso — usado com desconhecidos, pessoas mais velhas e qualquer figura de autoridade —, e também serve como o “vocês” do plural. Existe ainda “తమరు”, de respeito máximo, raro fora de contextos muito cerimoniosos.',
        table: {
          head: ['Pronome', 'Nível', 'Uso'],
          rows: [
            ['నువ్వు', 'informal, íntimo', 'amigos, colegas, crianças'],
            ['నీవు', 'meio-termo, mais formal/literário', 'pouco comum na fala do dia a dia'],
            ['మీరు', 'formal; também plural de “você”', 'desconhecidos, mais velhos, respeito — e “vocês”'],
            ['తమరు', 'respeito máximo', 'raro, muito cerimonioso'],
          ],
        },
        examples: [
          ['నువ్వు ఎక్కడ నుండి?', 'De onde você é? (informal)'],
          ['మీరు ఎక్కడ నుండి?', 'De onde você é? (formal)'],
          ['మీరు ఎలా ఉన్నారు?', 'Como você está? (formal)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “నువ్వు” com um desconhecido ou alguém mais velho: soa informal demais, como usar “tu” com o chefe no primeiro encontro.',
      'Esquecer que “మీరు” também é o plural: ele serve tanto para “você” formal quanto para “vocês”.',
    ],
    quiz: [
      {
        question: 'Para falar pela primeira vez com um professor desconhecido, o pronome mais seguro é…',
        options: ['మీరు', 'నువ్వు', 'నీవు'],
        answer: 'మీరు',
        explanation: '“మీరు” é o tratamento respeitoso, certo para desconhecidos e pessoas mais velhas.',
      },
      {
        question: '“మీరు”, além de “você” formal, também quer dizer…',
        options: ['vocês (plural)', 'ele, ela', 'nós'],
        answer: 'vocês (plural)',
        explanation: '“మీరు” funciona tanto como “você” formal quanto como “vocês”, no plural.',
      },
    ],
  },
  {
    id: 'te-g3',
    level: 'A1.2',
    title: 'Ordem SOV e os sufixos de caso',
    emoji: '🧩',
    summary: 'O télugo é aglutinante (só sufixos, sem prefixos) e sujeito-objeto-verbo (SOV); os casos vêm pospostos, como posposições grudadas.',
    sections: [
      {
        text: 'No télugo, as relações gramaticais (quem faz, quem recebe, onde, com quem, de onde) são marcadas por sufixos grudados no fim da palavra — o télugo não tem prefixos nem infixos. A ordem da frase é sujeito-objeto-verbo (SOV): o verbo sempre fecha a frase. Quando o predicado é um substantivo (um nome, uma nacionalidade), o télugo não usa verbo nenhum: “నా పేరు ప్రియ” é, ao pé da letra, “meu nome Priya”, sem nada equivalente a “é”.',
        table: {
          head: ['Caso', 'Sufixo', 'Exemplo'],
          rows: [
            ['Acusativo', '-ని / -ను', 'కుక్కను (o cachorro, como objeto)'],
            ['Dativo', '-కి / -కు', 'బడికి (para a escola); నాకు (para mim)'],
            ['Instrumental', '-తో', 'కుక్కతో (com o cachorro)'],
            ['Ablativo', '-నుండి', 'ఇంటినుండి (de casa)'],
            ['Locativo', '-లో', 'గదిలో (no quarto)'],
          ],
        },
        examples: [
          ['అతను బడికి వెళ్తాడు.', 'Ele vai para a escola.'],
          ['నాకు నీళ్ళు కావాలి.', 'Eu quero água.'],
          ['నా పేరు ప్రియ.', 'Meu nome é Priya. (sem verbo: o predicado é um substantivo)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” em frases como “నా పేరు ప్రియ”: o télugo não usa verbo nenhum quando o predicado é um substantivo.',
      'Colocar o verbo no meio da frase, como em português: no télugo o verbo é sempre a última palavra.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele vai para a escola”?',
        options: ['అతను బడికి వెళ్తాడు.', 'అతను వెళ్తాడు బడికి.', 'బడికి వెళ్తాడు అతను.'],
        answer: 'అతను బడికి వెళ్తాడు.',
        explanation: 'A ordem SOV coloca o sujeito (అతను), depois o complemento (బడికి) e o verbo por último (వెళ్తాడు).',
      },
      {
        question: 'Qual sufixo marca o caso dativo, como em “para mim”?',
        options: ['-కు (నాకు)', '-తో', '-లో'],
        answer: '-కు (నాకు)',
        explanation: 'O dativo télugo usa -కి/-కు: నేను (eu) vira నాకు (para mim, a mim).',
      },
    ],
  },
  {
    id: 'te-g4',
    level: 'A1.2',
    title: 'కాదు × లేదు: duas negações',
    emoji: '🚫',
    summary: 'O télugo tem duas palavras para “não”, conforme o que se nega: identidade ou existência.',
    sections: [
      {
        text: '“కాదు” nega identidade ou classificação — frases do tipo “X não é Y”. “లేదు” nega existência, presença ou posse — usado com “ఉండు” (existir, ter). Confundir os dois é um erro comum de quem está começando.',
        table: {
          head: ['Negação', 'Usa com', 'Exemplo'],
          rows: [
            ['కాదు', 'identidade / classificação', 'ఇది పిల్లి కాదు. (isto não é um gato)'],
            ['లేదు', 'existência, presença, posse (ఉండు)', 'నాకు తమ్ముడు లేదు. (eu não tenho irmão mais novo)'],
          ],
        },
        examples: [
          ['ఇది ఇల్లు కాదు.', 'Isto não é uma casa.'],
          ['నాకు పిల్లి లేదు.', 'Eu não tenho gato.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “కాదు” para dizer que não tem algo: “నాకు పిల్లి కాదు” soa estranho — o certo é “నాకు పిల్లి లేదు”.',
      'Usar “లేదు” para negar uma identidade: para “isto não é um cachorro”, o certo é “ఇది కుక్క కాదు”, não “లేదు”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu não tenho irmã mais velha”?',
        options: ['నాకు అక్క లేదు.', 'నాకు అక్క కాదు.', 'నేను అక్క లేదు.'],
        answer: 'నాకు అక్క లేదు.',
        explanation: 'Posse e existência se negam com “లేదు”, não com “కాదు”.',
      },
      {
        question: 'Como se diz “isto não é comida”?',
        options: ['ఇది అన్నం కాదు.', 'ఇది అన్నం లేదు.', 'అన్నం ఇది కాదు.'],
        answer: 'ఇది అన్నం కాదు.',
        explanation: 'Identidade/classificação (isto = comida) se nega com “కాదు”.',
      },
    ],
  },
  {
    id: 'te-g5',
    level: 'A1.2',
    title: 'నాకు … కావాలి: pedir e precisar com o caso dativo',
    emoji: '🤲',
    summary: 'Para querer ou precisar de algo, o télugo usa o dativo (“para mim”) com o verbo invariável కావాలి.',
    sections: [
      {
        text: 'Para dizer que quer ou precisa de algo, o télugo põe quem quer no caso dativo (నాకు, “para mim”) e usa “కావాలి”, um verbo que não muda de forma — não se conjuga por pessoa, número ou tempo. Quem deseja nunca é o sujeito gramatical da frase: o sujeito é a própria coisa desejada.',
        table: {
          head: ['Pronome', 'Dativo', 'Exemplo'],
          rows: [
            ['నేను (eu)', 'నాకు', 'నాకు నీళ్ళు కావాలి. (eu quero água)'],
            ['మీరు (você, formal)', 'మీకు', 'మీకు ఏమి కావాలి? (o que você quer?)'],
          ],
        },
        examples: [
          ['నాకు తిండి కావాలి.', 'Eu quero/preciso de comida.'],
          ['నాకు పాలు కావాలి.', 'Eu quero leite.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar conjugar “కావాలి” como um verbo comum: ele não muda com a pessoa, o número ou o tempo — fica sempre “కావాలి”.',
      'Colocar quem quer no caso reto (sujeito): o certo é usar o dativo (నాకు), não “నేను కావాలి”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu quero água”?',
        options: ['నాకు నీళ్ళు కావాలి.', 'నేను నీళ్ళు కావాలి.', 'నీళ్ళు నాకు కావాలని.'],
        answer: 'నాకు నీళ్ళు కావాలి.',
        explanation: 'Quem quer vai no dativo (నాకు), e “కావాలి” não se conjuga.',
      },
      {
        question: 'Qual é o dativo de “నేను” (eu)?',
        options: ['నాకు', 'నా', 'నేనే'],
        answer: 'నాకు',
        explanation: '“నాకు” é a forma dativa de “నేను”, usada em pedidos e necessidades.',
      },
    ],
  },
  {
    id: 'te-g6',
    level: 'A2.1',
    title: '-లో: o caso locativo, “em” e “dentro de”',
    emoji: '📍',
    summary: 'O sufixo “-లో” marca “em, dentro de”, grudado no final do substantivo — e também serve para sentimentos, com o dativo e “ఉండు”.',
    sections: [
      {
        text: 'O sufixo locativo “-లో” marca onde algo está, sempre grudado no final da palavra, sem espaço: “అతను గదిలో ఉన్నాడు” (ele está no quarto). Alguns substantivos, como “ఇల్లు” (casa), têm uma forma oblíqua irregular antes dos sufixos de caso — “ఇంటి”, já usada em “ఇంటినుండి” (de casa) — então “em casa” fica “ఇంటిలో”, não “ఇల్లులో”. E a mesma lógica do dativo com “ఉండు”, já usada para parentesco (“నాకు ఒక అన్న ఉన్నాడు”), serve também para sentimentos: “నాకు ఆకలి ఉంది” é, ao pé da letra, “para mim fome existe” (estou com fome).',
        table: {
          head: ['Palavra', 'Com “-లో”', 'Exemplo'],
          rows: [
            ['గది (quarto)', 'గదిలో', 'అతను గదిలో ఉన్నాడు. (ele está no quarto)'],
            ['బడి (escola)', 'బడిలో', 'నేను బడిలో ఉన్నాను. (eu estou na escola)'],
            ['ఆసుపత్రి (hospital)', 'ఆసుపత్రిలో', 'ఆమె ఆసుపత్రిలో ఉంది. (ela está no hospital)'],
            ['ఇల్లు (casa; oblíquo ఇంటి)', 'ఇంటిలో', 'ఇంటిలో మూడు గదులు ఉన్నాయి. (há três quartos na casa)'],
          ],
        },
        examples: [
          ['నేను బడిలో ఉన్నాను.', 'Eu estou na escola.'],
          ['నాకు ఆకలి ఉంది.', 'Estou com fome.'],
          ['నాకు భయం ఉంది.', 'Estou com medo.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar separar “-లో” como uma palavra solta, tipo o “em” do português: no télugo ele vem sempre grudado depois da palavra, sem espaço (బడిలో, não “బడి లో”).',
      'Esquecer que “ఇల్లు” (casa) muda para a forma oblíqua “ఇంటి” antes de sufixos de caso como “-లో” e “-నుండి”: nem todo substantivo télugo é tão regular.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu estou na escola”?',
        options: ['నేను బడిలో ఉన్నాను.', 'నేను బడి ఉన్నాను.', 'నేను బడికి ఉన్నాను.'],
        answer: 'నేను బడిలో ఉన్నాను.',
        explanation: '“-లో” marca o locativo, grudado em “బడి” (escola): బడిలో.',
      },
      {
        question: 'Qual é a forma oblíqua de “ఇల్లు” (casa), usada antes de sufixos de caso?',
        options: ['ఇంటి', 'ఇల్లు', 'ఇళ్ళు'],
        answer: 'ఇంటి',
        explanation: '“ఇంటి” já aparece em “ఇంటినుండి” (de casa) e também em “ఇంటిలో” (em casa).',
      },
    ],
  },
  {
    id: 'te-g7',
    level: 'A2.1',
    title: '-కంటే: o comparativo',
    emoji: '⚖️',
    summary: 'Para comparar, o télugo gruda o sufixo “-కంటే” (do caso ablativo) na palavra comparada.',
    sections: [
      {
        text: 'Na fala coloquial, o télugo forma o comparativo (“mais … que”) com os sufixos “-కంటే” ou “-కన్నా”, ligados ao caso ablativo e grudados na palavra que serve de comparação. “అతనికంటే నేను పొడుగు” é, ao pé da letra, “mais-que-ele eu alto” (eu sou mais alto do que ele) — aqui, “అతను” (ele) muda para a forma oblíqua “అతని” antes do sufixo.',
        table: {
          head: ['Palavra comparada', 'Com “-కంటే”', 'Exemplo'],
          rows: [
            ['అతను (ele; oblíquo అతని)', 'అతనికంటే', 'అతనికంటే నేను పొడుగు. (eu sou mais alto do que ele)'],
          ],
        },
        examples: [['అతనికంటే నేను పొడుగు.', 'Eu sou mais alto do que ele.']],
      },
    ],
    pitfalls: [
      'Traduzir “-కంటే” como se fosse uma palavra solta, tipo o “que” do português: no télugo ele vem sempre grudado depois da palavra comparada (అతనికంటే, não “అతను కంటే”).',
      'Esperar que o pronome fique igual antes de “-కంటే”: “ele” (అతను) muda para a forma oblíqua “అతని” antes do sufixo.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu sou mais alto do que ele” em télugo?',
        options: ['అతనికంటే నేను పొడుగు.', 'నేను అతను కంటే పొడుగు.', 'అతను నాకంటే పొడుగు.'],
        answer: 'అతనికంటే నేను పొడుగు.',
        explanation: 'Fonte: Wikipédia em inglês, artigo “Telugu grammar” — exatamente este exemplo.',
      },
      {
        question: 'O sufixo “-కంటే” marca…',
        options: ['o comparativo (“mais … que”)', 'o caso dativo', 'o caso locativo'],
        answer: 'o comparativo (“mais … que”)',
        explanation: '“-కంటే”/“-కన్నా” vêm do caso ablativo e formam o comparativo na fala coloquial.',
      },
    ],
  },
  {
    id: 'te-g8',
    level: 'A2.2',
    title: 'Futuro: వెళ్తాను, వెళ్తావు, వెళ్తాడు…',
    emoji: '🔮',
    summary: 'O futuro do télugo troca a raiz do verbo antes das terminações pessoais — aqui, com “వెళ్ళు” (ir).',
    sections: [
      {
        text: 'Para o futuro, muitos verbos télugo trocam a raiz antes de receber a terminação pessoal: “వెళ్ళు” (ir) vira “వెళ్త-” no futuro. A terceira pessoa feminino/neutro (“ఆమె”/“అది”) usa a mesma terminação “-ుంది”, que também aparece no presente de “ఉండు” (ఉంది) — são verbos diferentes, mas terminações parecidas.',
        table: {
          head: ['Pronome', 'Futuro de “వెళ్ళు”', 'Tradução'],
          rows: [
            ['నేను (eu)', 'వెళ్తాను', 'eu vou/irei'],
            ['నువ్వు (tu/você, informal)', 'వెళ్తావు', 'tu vais/você vai'],
            ['అతను (ele)', 'వెళ్తాడు', 'ele vai/irá'],
            ['ఆమె (ela) / అది (isso)', 'వెళ్తుంది', 'ela vai / vai (neutro)'],
            ['మేము (nós)', 'వెళ్తాము', 'nós vamos/iremos'],
            ['మీరు (você formal/vocês)', 'వెళ్తారు', 'você vai/vocês vão (formal)'],
          ],
        },
        examples: [
          ['నేను రేపు వెళ్తాను.', 'Eu vou/irei amanhã.'],
          ['ఆమె బడికి వెళ్తుంది.', 'Ela vai à escola.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “వెళ్తుంది” (futuro de “ir”, “ela/isso vai”) com “ఉంది” (presente de “ser/estar/existir”): são verbos diferentes, só a terminação de 3ª pessoa feminino/neutro se parece.',
      'Achar que todo verbo télugo troca a raiz do mesmo jeito no futuro: “వెళ్ళు” vira “వెళ్త-”, mas essa troca precisa ser aprendida verbo por verbo, não é totalmente previsível.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu vou amanhã”?',
        options: ['నేను రేపు వెళ్తాను.', 'నేను రేపు వెళ్తాడు.', 'నేను రేపు వెళ్తుంది.'],
        answer: 'నేను రేపు వెళ్తాను.',
        explanation: '1ª pessoa do singular do futuro de “వెళ్ళు” é “వెళ్తాను”.',
      },
      {
        question: 'Qual é a forma de “వెళ్ళు” (ir) no futuro para “ఆమె” (ela)?',
        options: ['వెళ్తుంది', 'వెళ్తాడు', 'వెళ్తావు'],
        answer: 'వెళ్తుంది',
        explanation: 'Fonte: Wikipédia em inglês, artigo “Telugu grammar” — tabela do futuro de “వెళ్ళు”.',
      },
    ],
  },
];
