import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do javanês — A1.1, A1.2 e, a partir daqui, A2.1 e A2.2. Fontes dos tópicos
 * novos: o sufixo -é/-ne (jv-g5) é descrito numa pesquisa linguística publicada na revista "Wacana"
 * (Universidade da Indonésia, 2021) e num artigo de 2015 sobre esse mesmo sufixo javanês, os dois
 * citados no cabeçalho de vocabulario.ts; as perguntas (jv-g6) e os números maiores (jv-g7) seguem a
 * mesma lista de fontes do cabeçalho de vocabulario.ts (Wiktionary, Wikipédia e Omniglot).
 */
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
  {
    id: 'jv-g5',
    level: 'A2.1',
    title: 'O sufixo -é/-ne: “kabaré”, “regane” e as palavras com dono',
    emoji: '🔗',
    summary: 'Uma sílaba colada no fim da palavra — “-é” depois de consoante, “-ne” depois de vogal — funciona como “o/a dele(a)”, “o/a” ou “a tal”, sem precisar de uma palavra separada.',
    sections: [
      {
        text: 'O javanês ngoko tem um sufixo de posse e de identificação que se cola direto no final do substantivo: “-é” quando a palavra termina em consoante, “-ne” quando termina em vogal. Ele já apareceu desde a primeira lição deste curso, sem comentário: “Piyé kabaré?” é literalmente “como [está] a notícia dele/sua?”, de “kabar” (notícia) + “-é”. O mesmo sufixo também marca “o”/“a” quando se fala de algo específico, não de qualquer exemplar: “regane” (de “rega”, preço, + “-ne”) é “o preço disso”, não “um preço”.',
        table: {
          head: ['Palavra', 'Com -é/-ne', 'Tradução'],
          rows: [
            ['kabar (notícia)', 'kabaré', 'a notícia dele/dela, ou "as novidades" (em “Piyé kabaré?”)'],
            ['rega (preço)', 'regane', 'o preço disso, o preço dele'],
            ['omah (casa)', 'omahé', 'a casa dele/dela'],
          ],
        },
        examples: [
          ['Piyé kabaré?', 'Como vai? (literalmente: como está a notícia dele/sua?)'],
          ['Pira regane iki?', 'Quanto custa isto? (literalmente: quanto [é] o preço disso?)'],
        ],
      },
      {
        heading: 'A versão formal: -ipun',
        text: 'No registro krama (formal — ver o primeiro tópico deste curso sobre ngoko e krama), o mesmo papel é feito por outro sufixo, “-ipun”, em vez de “-é”/“-ne”. Este curso continua ensinando só o ngoko, mas vale saber que a mesma ideia de “colar o dono ou o artigo definido no final da palavra” existe nos dois registros, só muda o sufixo.',
      },
    ],
    pitfalls: ['Achar que “-é”/“-ne” é só a vogal final da palavra: é um sufixo com sentido próprio, de posse ou de identificação, que se soma ao final da palavra.', 'Traduzir “kabaré” palavra por palavra toda vez: na saudação “Piyé kabaré?”, o conjunto já funciona como “como vai?”.'],
    quiz: [{ question: 'O que o sufixo “-ne” faz em “regane” (de “rega”, preço)?', options: ['marca “o/a dele(a)” ou “o/a” específico: “o preço disso”', 'transforma o substantivo em verbo', 'é só um som de ligação, sem sentido'], answer: 'marca “o/a dele(a)” ou “o/a” específico: “o preço disso”', explanation: '“-é” (depois de consoante) e “-ne” (depois de vogal) marcam posse de terceira pessoa ou algo específico, colados direto na palavra.' }],
  },
  {
    id: 'jv-g6',
    level: 'A2.1',
    title: 'Palavras pra perguntar: apa, sapa, ngendi, kapan, pira, piyé',
    emoji: '❓',
    summary: 'As seis perguntas básicas do dia a dia: o quê, quem, onde, quando, quanto e como — cada uma no começo da frase.',
    sections: [
      {
        table: {
          head: ['Javanês', 'Pergunta', 'Exemplo'],
          rows: [
            ['apa', 'o quê', 'Iki apa? (o que é isto?)'],
            ['sapa', 'quem', 'Sapa jenengmu? (qual é o seu nome, literalmente “quem [é] o seu nome?”)'],
            ['ngendi', 'onde', 'Omahmu ngendi? (onde é a sua casa?)'],
            ['kapan', 'quando', 'Kapan kowé mulih? (quando você volta pra casa?)'],
            ['pira', 'quanto/quantos', 'Pira regane iki? (quanto custa isto?)'],
            ['piyé', 'como', 'Piyé kabaré? (como vai?)'],
          ],
        },
        examples: [
          ['Jam pira saiki?', 'Que horas são agora?'],
          ['Kapan kowé mulih?', 'Quando você volta pra casa?'],
        ],
      },
      {
        heading: 'As versões krama',
        text: 'No registro formal, “ngendi” muda para “pundi” e “pira” muda para “pinten” — os dois exemplos já confirmam o padrão visto no primeiro tópico deste curso: o krama troca a palavra inteira, não só o jeito de falar.',
      },
    ],
    pitfalls: ['Confundir “piyé” (como) com “apa” (o quê): “piyé” pergunta o MODO ou o ESTADO (“Piyé kabaré?”), “apa” pergunta a COISA (“Iki apa?”).', 'Esquecer que a pergunta pode vir em qualquer posição da frase em javanês, não só no início: “Omahmu ngendi?” (literalmente “sua casa onde?”).'],
    quiz: [{ question: 'Qual palavra javanesa pergunta “quando”?', options: ['kapan', 'ngendi', 'pira'], answer: 'kapan', explanation: '“Kapan” pergunta o momento no tempo; “ngendi” pergunta o lugar; “pira” pergunta a quantidade.' }],
  },
  {
    id: 'jv-g7',
    level: 'A2.2',
    title: 'Números além de vinte: puluh, atus, sèwu — e em krama',
    emoji: '💯',
    summary: 'De trinta a mil, os números javaneses se formam com “puluh” (dez), “atus” (cem) e “ewu” (mil) — e cada um tem uma forma krama diferente da ngoko.',
    sections: [
      {
        text: 'Depois de vinte (“rong puluh”, já visto no nível A1), os números de dez em dez somam um prefixo numeral a “puluh”: “telung puluh” (três-dez = trinta), “patang puluh” (quatro-dez = quarenta). Mas “cinquenta” e “sessenta” têm palavra própria, sem “puluh”: “séket” e “sewidak”. Cem é “satus” (de “atus”, cem) e mil é “sèwu” (de “ewu”, mil).',
        table: {
          head: ['Número', 'Ngoko', 'Krama'],
          rows: [
            ['1', 'siji', 'satunggal'],
            ['2', 'loro', 'kalih'],
            ['10', 'sepuluh', 'sedasa'],
            ['20', 'rong puluh', 'kalih dasa'],
            ['30', 'telung puluh', 'tigang dasa'],
            ['40', 'patang puluh', 'patang dasa'],
            ['50', 'séket', 'setunggal léket'],
            ['60', 'sewidak', 'nem dasa'],
            ['100', 'satus', 'satunggal atus'],
            ['1000', 'sèwu', 'satunggal èwu'],
          ],
        },
        examples: [
          ['Aku duwé telung puluh pelem.', 'Eu tenho trinta mangas.'],
          ['Aku duwé satus pelem.', 'Eu tenho cem mangas.'],
        ],
      },
    ],
    pitfalls: ['Tentar formar “cinquenta” e “sessenta” com “puluh”, como as outras dezenas: são palavras próprias (“séket”, “sewidak”), não “limang puluh”/“enem puluh”.', 'Achar que o krama dos números é uma língua totalmente diferente: é o mesmo sistema, só com outra palavra pra cada número, do mesmo jeito que “ngendi”/“pundi” ou “pira”/“pinten”.'],
    quiz: [{ question: 'Como se diz “cinquenta” em javanês ngoko?', options: ['séket', 'limang puluh', 'sedasa'], answer: 'séket', explanation: '“Cinquenta” tem palavra própria, “séket” — não se forma com “puluh” como trinta ou quarenta.' }],
  },
];
