import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do bengali — A1.1 até A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Tópicos de A2 verificados na Wikipédia em inglês ("Bengali grammar").
 */
export const GRAMMAR_BN: GrammarTopic[] = [
  {
    id: 'bn-g1',
    level: 'A1.1',
    title: 'A escrita bengali',
    emoji: '🔤',
    summary: 'Uma abugida com mais de mil anos, em que a vogal “inerente” de cada consoante soa “ô”, não “a”.',
    sections: [
      {
        text: 'A escrita bengali (বাংলা লিপি) se lê da esquerda para a direita, com as letras penduradas numa linha horizontal no topo, como no devanágari do hindi. Cada consoante solta já carrega embutida uma vogal — mas, diferente do hindi (onde essa vogal soa “a”), no bengali ela soa “ô” fechado, como o “o” de “avó”. Para trocar essa vogal, usam-se sinais (“কার”) grudados antes, depois, em cima ou embaixo da consoante.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['অ', 'o “ô” fechado, vogal embutida em toda consoante', 'অ sozinho já soa “ô”'],
            ['ন', 'como o “n” do português', 'নাম (naam, nome)'],
            ['হ', 'um “h” soprado, como no inglês “house”', 'হ্যাঁ (hyan, sim)'],
            ['◌া', 'sinal de “a” longo, grudado depois da consoante', 'নাম (nām): ন + া + ম'],
            ['◌ি', 'sinal de “i”, grudado antes da consoante (mas pronunciado depois)', 'বিড়াল (biral, gato)'],
          ],
        },
        examples: [
          ['নমস্কার, আমি বাংলা শিখি।', 'Oi, eu aprendo bengali.'],
        ],
      },
    ],
    pitfalls: [
      'Ler uma consoante solta como se não tivesse vogal nenhuma: toda consoante sem sinal já soa com “ô” embutido.',
      'Confundir a vogal inerente do bengali com a do hindi: no devanágari ela soa “a”, no bengali soa “ô” fechado.',
    ],
    quiz: [
      { question: 'A vogal embutida em toda consoante bengali solta soa como…', options: ['“ô” fechado, como em “avó”', '“a” aberto, como em “caja”', '“i” fechado, como em “vida”'], answer: '“ô” fechado, como em “avó”', explanation: 'Diferente do devanágari do hindi, onde a vogal inerente soa “a”, no bengali ela soa “ô” fechado — uma das primeiras diferenças que salta aos olhos de quem já viu as duas escritas.' },
      { question: 'A escrita bengali é…', options: ['uma abugida: cada consoante já vem com uma vogal embutida', 'puramente alfabética, sem vogal embutida', 'ideográfica, um símbolo por palavra'], answer: 'uma abugida: cada consoante já vem com uma vogal embutida', explanation: 'Como o devanágari, o bengali é uma escrita silábica (abugida): sinais ao redor da consoante trocam a vogal embutida.' },
    ],
  },
  {
    id: 'bn-g2',
    level: 'A1.1',
    title: 'তুই, তুমি, আপনি: os três níveis de “você”',
    emoji: '🙇',
    summary: 'O bengali tem três pronomes para “você”, cada um com o seu próprio jeito de conjugar o verbo.',
    sections: [
      {
        text: '“তুই” é para quem é muitíssimo íntimo — crianças, animais de estimação, amigos de infância — mas também serve para repreender alguém ou se dirigir a um subordinado; fora desses contextos, soa rude, quase uma ofensa. “তুমি” é o meio-termo, usado com amigos, colegas e pessoas da mesma idade ou mais novas. “আপনি” é o tratamento respeitoso, usado com desconhecidos, pessoas mais velhas e qualquer figura de autoridade: é sempre o jeito mais seguro de começar uma conversa.',
        table: {
          head: ['Pronome', 'Nível', '“existir, estar” (আছ-)'],
          rows: [
            ['তুই', 'muito íntimo, ou para repreender', 'আছিস'],
            ['তুমি', 'informal', 'আছ'],
            ['আপনি', 'formal, respeitoso', 'আছেন'],
          ],
        },
        examples: [
          ['তুই কোথায়?', 'Onde você está? (bem íntimo)'],
          ['তুমি কেমন আছ?', 'Como você vai? (informal)'],
          ['আপনি কেমন আছেন?', 'Como o(a) senhor(a) vai? (formal)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “তুই” com um desconhecido, alguém mais velho ou uma autoridade: além de informal demais, pode soar como uma ofensa — é a mesma forma usada para repreender alguém.',
      'Esquecer que o verbo muda com o pronome: “তুমি আছেন” e “আপনি আছ” estão errados — o certo é “তুমি আছ” e “আপনি আছেন”.',
    ],
    quiz: [
      { question: 'Para falar com o pai de um(a) amigo(a) pela primeira vez, o pronome mais seguro é…', options: ['আপনি', 'তুই', 'তুমি'], answer: 'আপনি', explanation: '“আপনি” é o tratamento respeitoso, correto para desconhecidos e pessoas mais velhas.' },
      { question: 'Complete: “তুমি কেমন ___?”', options: ['আছ', 'আছেন', 'আছিস'], answer: 'আছ', explanation: '“তুমি” sempre vem com “আছ”, nunca com “আছেন” (de আপনি) nem “আছিস” (de তুই).' },
    ],
  },
  {
    id: 'bn-g3',
    level: 'A1.1',
    title: 'O verbo “ser” que desaparece: cópula zero e আছে',
    emoji: '🫥',
    summary: 'No presente, frases de identidade ou descrição não levam verbo nenhum — mas “আছ-” aparece para existência, lugar e posse.',
    sections: [
      {
        text: 'Em frases simples no presente que dizem o que alguém é ou como é, o bengali não usa nenhum verbo equivalente a “ser/estar”: “আমি মায়া” é, ao pé da letra, “eu Maya”. Isso muda quando a frase fala de existência, lugar ou posse: aí entra o verbo irregular “আছ-”. Para dizer que alguém TEM algo, usa-se esse mesmo “আছে” depois do possessivo: “আমার একটা বই আছে” (eu tenho um livro) é, ao pé da letra, “meu um livro existe”.',
        table: {
          head: ['Pessoa', 'Forma de আছ-'],
          rows: [
            ['আমি', 'আছি'],
            ['তুই', 'আছিস'],
            ['তুমি', 'আছ'],
            ['সে', 'আছে'],
            ['আপনি', 'আছেন'],
          ],
        },
        examples: [
          ['আমি ভালো।', 'Eu estou bem. (sem verbo)'],
          ['আমি বাড়িতে আছি।', 'Eu estou em casa. (আছি marca lugar)'],
          ['আমার একটা ভাই আছে।', 'Eu tenho um irmão. (আছে marca posse)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir “sou/estou” palavra por palavra: em “আমি মায়া” e “আমার বাড়ি ছোট” não existe verbo nenhum em bengali.',
      'Esquecer o “আছে” nas frases de posse: “আমার একটা ভাই”, sozinho, soa incompleto — falta o “আছে” no final.',
    ],
    quiz: [
      { question: 'Como se diz “eu sou a Maya”?', options: ['আমি মায়া।', 'আমি মায়া আছি।', 'আমি মায়া হয়।'], answer: 'আমি মায়া।', explanation: 'Frases de identidade no presente não levam verbo nenhum em bengali — nem “sou”, nem nada parecido.' },
      { question: 'Como se diz “eu tenho um livro”?', options: ['আমার একটা বই আছে।', 'আমি একটা বই।', 'আমার বই হয়।'], answer: 'আমার একটা বই আছে।', explanation: 'Posse usa o possessivo (আমার) seguido do existencial “আছে”, no final da frase.' },
    ],
  },
  {
    id: 'bn-g4',
    level: 'A1.2',
    title: 'Classificadores numerais: টা, টি, জন',
    emoji: '🔢',
    summary: 'Para contar em bengali, o numeral sozinho não basta: precisa de uma “palavra de medida” entre ele e o substantivo.',
    sections: [
      {
        text: 'Diferente do português, o bengali não deixa um numeral grudar direto num substantivo: “এক বই” soa errado, quase incompleto. Entre o numeral e o substantivo entra um classificador: o mais comum e genérico é “টা” (ou, em registro mais cuidado, “টি”), usado para a maioria das coisas — “একটা বই” (um livro). Para contar pessoas, o classificador próprio é “জন”: “একজন বন্ধু” (um amigo). Omitir o classificador não é só informal — soa gramaticalmente incompleto.',
        table: {
          head: ['Numeral + classificador', 'Uso', 'Exemplo'],
          rows: [
            ['একটা (এক + টা)', 'coisas em geral', 'আমার একটা ভাই আছে।'],
            ['একজন (এক + জন)', 'pessoas', 'একজন বন্ধু'],
            ['দুইটা (দুই + টা)', 'duas coisas', 'দুইটা বই'],
          ],
        },
        examples: [
          ['আমার একটা ভাই আছে।', 'Eu tenho um irmão.'],
          ['ঢাকা একটা বড় শহর।', 'Dhaka é uma cidade grande.'],
        ],
      },
    ],
    pitfalls: [
      'Colar o numeral direto no substantivo, como em português: “এক বই” soa estranho — o certo é “একটা বই”.',
      'Usar “টা” (genérico) para contar pessoas num registro mais cuidado: o classificador próprio para gente é “জন” (“একজন বন্ধু”).',
    ],
    quiz: [
      { question: 'Como se diz “um livro” em bengali?', options: ['একটা বই', 'এক বই', 'বই একটা'], answer: 'একটা বই', explanation: 'O numeral precisa do classificador “টা” antes do substantivo.' },
      { question: 'Qual classificador é o certo para contar pessoas, em registro mais cuidado?', options: ['জন', 'টা', 'টি'], answer: 'জন', explanation: '“জন” é o classificador específico para seres humanos; “টা”/“টি” são os genéricos, usados para as demais coisas.' },
    ],
  },
  {
    id: 'bn-g5',
    level: 'A2.1',
    title: 'Presente contínuo: -ছি/-ছ/-ছেন/-ছে',
    emoji: '🏃',
    summary: 'Uma ação em andamento agora mesmo leva o sufixo -ছ- entre o radical do verbo e a terminação de pessoa.',
    sections: [
      {
        text: 'Para dizer que algo está acontecendo neste momento, o bengali acrescenta o sufixo “-ছ-” ao radical do verbo, seguido da terminação de pessoa (a mesma usada no presente simples). Para “বলা” (dizer, radical বল-):',
        table: {
          head: ['Pronome', 'বলা (dizer) no contínuo'],
          rows: [
            ['আমি', 'বলছি'],
            ['তুই', 'বলছিস'],
            ['তুমি', 'বলছ'],
            ['সে', 'বলছে'],
            ['আপনি', 'বলছেন'],
          ],
        },
        examples: [
          ['আজ বৃষ্টি হচ্ছে।', 'Hoje está chovendo.'],
          ['আমি জামা কিনছি।', 'Eu estou comprando uma roupa.'],
          ['বাচ্চারা খেলছে।', 'As crianças estão brincando.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a terminação de pessoa depois de “-ছ-”: o contínuo não é só “-ছ-” sozinho, precisa da mesma terminação do presente simples (-ি, -ও, -েন, -ে…).',
      'Usar o contínuo para algo habitual ou geral: “আমি ভাত খাই” (eu como arroz, no geral) é diferente de “আমি ভাত খাচ্ছি” (eu estou comendo arroz agora).',
    ],
    quiz: [
      { question: 'Como se diz “hoje está chovendo”?', options: ['আজ বৃষ্টি হচ্ছে।', 'আজ বৃষ্টি হয়।', 'আজ বৃষ্টি হবে।'], answer: 'আজ বৃষ্টি হচ্ছে।', explanation: '“হচ্ছে” é o presente contínuo de “হওয়া” (ser/acontecer): radical হ- + ছ + terminação -ে da 3ª pessoa.' },
      { question: 'Qual é a forma contínua de “আমি” (eu) do verbo “বলা” (dizer)?', options: ['বলছি', 'বলছ', 'বলছেন'], answer: 'বলছি', explanation: '“-ছি” é a terminação de 1ª pessoa (আমি) no contínuo, igual à do presente simples.' },
    ],
  },
  {
    id: 'bn-g6',
    level: 'A2.1',
    title: 'Caso locativo (-এ/-তে/-য়) e জন্য (“para”)',
    emoji: '📍',
    summary: 'O bengali marca “em, dentro de” grudando -এ, -তে ou -য় direto no substantivo — e marca “para” com জন্য depois do genitivo.',
    sections: [
      {
        text: 'Para dizer que algo está “em” um lugar, o bengali gruda um sufixo direto no substantivo: “-এ” depois de consoante, “-তে” depois de outras vogais, e “-য়” depois de um “-া” final. Para dizer “para” (o beneficiário de algo), usa-se “জন্য” depois do genitivo (-এর).',
        table: {
          head: ['Sufixo/posposição', 'Sentido', 'Exemplo'],
          rows: [
            ['-এ', '“em” depois de consoante', 'আমি বাড়িতে আছি। (⟵ aqui -তে, pois বাড়ি termina em vogal)'],
            ['-য়', '“em” depois de -া', 'ঢাকায় (em Dhaka)'],
            ['… -এর জন্য', '“para”', 'শিক্ষকের জন্য (para o professor)'],
          ],
        },
        examples: [
          ['আমি বাড়িতে আছি।', 'Eu estou em casa.'],
          ['এটা তোমার জন্য।', 'Isto é para você.'],
          ['শেখার জন্য', 'para aprender'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar uma posposição separada para “em”, como o “में” do hindi: no bengali o sufixo locativo gruda direto no substantivo, sem espaço.',
      'Esquecer o genitivo antes de “জন্য”: não é só “শিক্ষক জন্য”, e sim “শিক্ষকের জন্য”, com “-এর” antes de “জন্য”.',
    ],
    quiz: [
      { question: 'Como se diz “eu estou em casa”?', options: ['আমি বাড়িতে আছি।', 'আমি বাড়ি আছি।', 'আমি বাড়ির আছি।'], answer: 'আমি বাড়িতে আছি।', explanation: '“বাড়ি” termina em vogal, então o sufixo locativo é “-তে”: “বাড়িতে” (em casa).' },
      { question: 'Como se diz “para o professor”?', options: ['শিক্ষকের জন্য', 'শিক্ষক জন্য', 'শিক্ষকে জন্য'], answer: 'শিক্ষকের জন্য', explanation: '“জন্য” (para) vem depois do genitivo “-এর”, nunca direto no substantivo.' },
    ],
  },
  {
    id: 'bn-g7',
    level: 'A2.2',
    title: 'Futuro: -ব/-বি/-বে/-বেন',
    emoji: '🔮',
    summary: 'O futuro simples acrescenta ব ao radical do verbo, com uma terminação própria para cada pessoa.',
    sections: [
      {
        text: 'O futuro do bengali é regular: radical do verbo + terminação de futuro. Para “বলা” (dizer):',
        table: {
          head: ['Pronome', 'বলা (dizer) no futuro'],
          rows: [
            ['আমি', 'বলব'],
            ['তুই', 'বলবি'],
            ['তুমি', 'বলবে'],
            ['সে', 'বলবে'],
            ['আপনি', 'বলবেন'],
          ],
        },
        examples: [
          ['আমি কাল বাংলা পড়ব।', 'Eu vou estudar bengali amanhã.'],
          ['সে বাজারে যাবে।', 'Ele/ela vai ao mercado.'],
          ['আমরা কাল দেখা করব।', 'Nós vamos nos encontrar amanhã.'],
        ],
      },
      {
        heading: 'Verbos terminados em vogal',
        text: 'Verbos cujo radical termina em vogal, como “হওয়া” (ser/acontecer, radical হ-) e “দেওয়া” (dar, radical দ্‌-), ajustam a vogal antes da terminação de futuro: হওয়া → আমি হব (eu serei); দেওয়া → আমি দেব (eu darei).',
        examples: [['আগামী মাসে ঠান্ডা হবে।', 'No mês que vem vai fazer frio.']],
      },
    ],
    pitfalls: [
      'Confundir a terminação de তুমি (-বে) com a de সে (também -বে): as duas são iguais no futuro, diferente do presente contínuo — só o contexto ou o pronome distingue quem é o sujeito.',
      'Esquecer que তুই (bem íntimo) tem a própria terminação -বি, diferente de তুমি (-বে) e আপনি (-বেন).',
    ],
    quiz: [
      { question: 'Como se diz “eu vou estudar bengali amanhã”?', options: ['আমি কাল বাংলা পড়ব।', 'আমি কাল বাংলা পড়ি।', 'আমি কাল বাংলা পড়ছি।'], answer: 'আমি কাল বাংলা পড়ব।', explanation: '“-ব” é a terminação de futuro de 1ª pessoa (আমি), acrescentada ao radical “পড়-”.' },
      { question: 'Qual é a forma de futuro de “সে” (ele/ela) do verbo “যাওয়া” (ir)?', options: ['যাবে', 'যাব', 'যাবি'], answer: 'যাবে', explanation: '“-বে” é a terminação de futuro de 3ª pessoa (সে) e também de তুমি.' },
    ],
  },
  {
    id: 'bn-g8',
    level: 'A2.2',
    title: 'Comparativo e superlativo: চেয়ে e সবচেয়ে',
    emoji: '⚖️',
    summary: '“Mais … que” usa চেয়ে depois do segundo termo; “o mais …” usa সবচেয়ে antes do adjetivo.',
    sections: [
      {
        text: 'Para comparar, o segundo termo (o que serve de referência) leva “চেয়ে” (“em comparação a”) logo depois dele, e o adjetivo vem por último. Para o superlativo, “সবচেয়ে” (“mais que todos”) vem antes do adjetivo, sem precisar de um segundo termo.',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['X চেয়ে [adjetivo]', 'mais … que X', 'সুভাষ আব্দুর রাহীমের চেয়ে লম্বা।'],
            ['সবচেয়ে [adjetivo]', 'o(a) mais …', 'এটা সবচেয়ে ভালো বই।'],
          ],
        },
        examples: [
          ['সুভাষ আব্দুর রাহীমের চেয়ে লম্বা।', 'Subhash é mais alto que Abdur Rahim.'],
          ['এই জামা ওই জামার চেয়ে ভালো।', 'Esta roupa é melhor que aquela.'],
          ['এটা সবচেয়ে ভালো বই।', 'Este é o melhor livro.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o genitivo antes de “চেয়ে”: o termo comparado leva “-এর” antes de “চেয়ে” (আব্দুর রাহীমের চেয়ে), não só o nome sozinho.',
      'Usar “চেয়ে” no superlativo: “সবচেয়ে” já é “o mais”, sozinho — não precisa de um segundo termo com “চেয়ে”.',
    ],
    quiz: [
      { question: 'Como se diz “esta roupa é melhor que aquela”?', options: ['এই জামা ওই জামার চেয়ে ভালো।', 'এই জামা চেয়ে ওই জামা ভালো।', 'এই জামা সবচেয়ে ভালো ওই জামা।'], answer: 'এই জামা ওই জামার চেয়ে ভালো।', explanation: 'A ordem é [sujeito] [termo comparado]+এর চেয়ে [adjetivo].' },
      { question: 'Como se diz “este é o melhor livro”?', options: ['এটা সবচেয়ে ভালো বই।', 'এটা বই চেয়ে ভালো।', 'এটা ভালো সবচেয়ে বই।'], answer: 'এটা সবচেয়ে ভালো বই।', explanation: '“সবচেয়ে” antes do adjetivo forma o superlativo, sem precisar de outro termo de comparação.' },
    ],
  },
];
