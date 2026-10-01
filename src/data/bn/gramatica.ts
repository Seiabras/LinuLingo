import type { GrammarTopic } from '../types';

/** Tópicos de gramática do bengali — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
];
