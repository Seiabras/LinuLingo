import type { GrammarTopic } from '../types';

/** Tópicos de gramática do javanês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_JV: GrammarTopic[] = [
  {
    id: 'jv-g1',
    level: 'A1.1',
    title: 'Pronúncia: dh/th, ng e o "a" que soa "o"',
    emoji: '🔤',
    summary: 'O javanês tem consoantes retroflexas que o português não tem, e o "a" no final de muitas palavras soa mais como "o".',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['dh / th', 'retroflexas: a língua se curva pra trás, sem equivalente exato no português', 'gedhé [gəḍé] (grande)'],
            ['ng', 'som nasal único, como o "ng" de "sing" em inglês', 'ngomong [ŋomoŋ] (falar)'],
            ['a (final, sílaba aberta)', 'soa mais perto de "o" do que de "a"', 'apa soa perto de "apå" (o quê)'],
          ],
        },
        examples: [
          ['Piyé kabaré?', 'Como você está?'],
          ['Aku iså ngomong basa Jawa.', 'Eu consigo falar javanês.'],
        ],
      },
    ],
    pitfalls: ['Ler "dh"/"th" como o "d"/"t" do português: são sons retroflexos, diferentes.', 'Ler o "a" final sempre como "a" aberto: em muitas palavras ele soa mais fechado, perto de "o".'],
    quiz: [{ question: 'Que tipo de consoante é o "dh" de "gedhé"?', options: ['retroflexa (língua curvada pra trás)', 'igual ao "d" do português', 'muda, não se pronuncia'], answer: 'retroflexa (língua curvada pra trás)', explanation: 'O "dh" javanês é uma consoante retroflexa, sem equivalente exato no português.' }],
  },
  {
    id: 'jv-g2',
    level: 'A1.1',
    title: 'Ngoko e krama: dois jeitos de falar a mesma coisa',
    emoji: '🗣️',
    summary: 'O javanês tem registros de fala diferentes para o mesmo sentido: “ngoko” no dia a dia informal, “krama” no formal e respeitoso — não é uma questão de pessoa gramatical, é de quem está falando com quem.',
    sections: [
      {
        text: 'Diferente do português, em que a formalidade muda sobretudo o pronome (“tu” × “você” × “senhor”), o javanês muda a PALAVRA inteira conforme o nível de fala: muitos substantivos, verbos e pronomes do dia a dia (ngoko) têm uma palavra diferente, mais respeitosa, no registro formal (krama). Este curso ensina o ngoko, o registro mais comum entre amigos, familiares e no dia a dia — o vocabulário krama fica para uma próxima atualização, com a mesma exigência de fonte confiável para cada palavra.',
        examples: [['Aku arep mangan.', 'Eu quero comer. (ngoko, informal — o registro deste curso)']],
      },
      {
        heading: 'Quando usar o quê',
        text: 'O ngoko é usado entre amigos próximos, dentro da família e com crianças. O krama é usado com pessoas mais velhas, desconhecidas ou de status social mais alto, como sinal de respeito. Um mesmo falante troca de registro várias vezes ao dia, dependendo de com quem está conversando.',
      },
    ],
    pitfalls: ['Achar que “krama” é uma língua diferente: é a mesma língua javanesa, só um vocabulário mais formal/respeitoso para os mesmos conceitos.'],
    quiz: [{ question: 'Qual registro javanês se usa tipicamente entre amigos e dentro da família?', options: ['ngoko', 'krama', 'nenhum dos dois: o javanês não tem registros'], answer: 'ngoko', explanation: 'Ngoko é o registro informal, do dia a dia; krama é o formal e respeitoso.' }],
  },
  {
    id: 'jv-g3',
    level: 'A1.2',
    title: 'O verbo não muda por pessoa',
    emoji: '🙋',
    summary: 'Como no indonésio, o verbo javanês é a mesma palavra para "eu", "você" e "ele/ela" — a pessoa gramatical não muda a forma do verbo.',
    sections: [
      {
        text: 'Não existe conjugação por pessoa: “aku mangan” (eu como), “kowé mangan” (você come) e “dhèwèké mangan” (ele/ela come) usam exatamente o mesmo “mangan”. O que muda a palavra é o REGISTRO (ngoko × krama — ver o tópico anterior), não quem fala.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['aku', 'eu'],
            ['kowé', 'você'],
            ['dhèwèké', 'ele / ela'],
            ['kita', 'nós'],
          ],
        },
        examples: [
          ['Aku saka Brasil.', 'Eu sou do Brasil.'],
          ['Dhèwèké saka Yogyakarta.', 'Ele/ela é de Yogyakarta.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma forma verbal diferente para cada pessoa, como no português: o verbo javanês nunca conjuga por pessoa.'],
    quiz: [{ question: 'Como muda o verbo "mangan" (comer) entre "aku" (eu) e "dhèwèké" (ele/ela)?', options: ['não muda: "aku mangan" e "dhèwèké mangan"', 'muda para "mangani" na terceira pessoa', 'muda para "manganmu"'], answer: 'não muda: "aku mangan" e "dhèwèké mangan"', explanation: 'Os verbos em javanês não conjugam por pessoa gramatical.' }],
  },
  {
    id: 'jv-g4',
    level: 'A1.2',
    title: 'Mas e Adhi: irmãos pela idade',
    emoji: '👪',
    summary: 'Sem palavras separadas para "irmão"/"irmã" por sexo: o que importa é se é mais velho (Mas/Mbak) ou mais novo (Adhi).',
    sections: [
      {
        text: 'O javanês, como o indonésio, organiza irmãos pela IDADE relativa: “Mas” é um irmão mais velho (também usado como forma respeitosa de chamar um homem um pouco mais velho, mesmo sem parentesco), “Mbak” é uma irmã mais velha (com o mesmo uso respeitoso para mulheres), e “Adhi” é qualquer irmão ou irmã mais novo(a), sem distinção de sexo.',
        examples: [['Aku duwé siji Mas lan siji Adhi.', 'Eu tenho um irmão mais velho e um irmão/irmã mais novo(a).']],
      },
      {
        heading: 'O plural por repetição',
        text: 'Quando o plural precisa ficar claro, a palavra se repete, como no indonésio: “wong” (pessoa) → “wong-wong” (pessoas). Na maioria das frases, o contexto já basta.',
      },
    ],
    pitfalls: ['Traduzir “Mas” sempre como “irmão”: também é usado para chamar respeitosamente um homem mais velho sem parentesco, como um garçom ou motorista.'],
    quiz: [{ question: 'O que significa "Adhi"?', options: ['irmão ou irmã mais novo(a)', 'irmão ou irmã mais velho(a)', 'só irmã, de qualquer idade'], answer: 'irmão ou irmã mais novo(a)', explanation: '"Adhi" é qualquer irmão mais novo, homem ou mulher; "Mas"/"Mbak" são os mais velhos.' }],
  },
];
