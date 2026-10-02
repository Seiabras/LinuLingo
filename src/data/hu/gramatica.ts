import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do húngaro — por enquanto só A1.1 e A1.2 (pacote incompleto, ver index.ts).
 *
 * Fontes conferidas: Wikipédia em inglês, «Hungarian grammar», «Hungarian language», «Hungarian
 * verbs» e «Hungarian phonology» (as 18 declinações, a harmonia vocálica, a conjugação
 * definida/indefinida, o sistema ternário de 9 casos locativos, a ausência de gênero gramatical); e
 * Wiktionary (en.wiktionary.org), verbetes de «van», «vagyok», «vannak», «eszik», «két», «miért», que
 * trazem formas e frases de exemplo confirmadas. As frases novas desta página aplicam essas mesmas
 * regras e sufixos confirmados a outras palavras do vocabulário do pacote.
 */
export const GRAMMAR_HU: GrammarTopic[] = [
  {
    id: 'hu-g1',
    level: 'A1.1',
    title: 'Harmonia vocálica: o sufixo muda para combinar com a palavra',
    emoji: '🎶',
    summary: 'Quase todo sufixo húngaro tem duas ou três formas, e a escolhida depende das vogais da palavra a que ele gruda.',
    sections: [
      {
        text: 'As vogais do húngaro se dividem em “de trás” (a, á, o, ó, u, ú) e “da frente” (e, é, i, í, ö, ő, ü, ű). Um sufixo como o do plural (“-k”, com vogal de ligação) ou o do “bom dia” muda consoante o grupo da última vogal da palavra: depois de vogal de trás, vem a forma de trás; depois de vogal da frente, a forma da frente. Entre as vogais da frente, ainda há uma divisão entre arredondadas (ö, ő, ü, ű) e não arredondadas (e, é, i, í), que alguns sufixos também distinguem.',
        table: {
          head: ['Grupo', 'Vogais', 'Exemplo de palavra'],
          rows: [
            ['De trás', 'a, á, o, ó, u, ú', 'ház (casa)'],
            ['Da frente, não arredondada', 'e, é, i, í', 'szem (olho)'],
            ['Da frente, arredondada', 'ö, ő, ü, ű', 'gyümölcs (fruta)'],
          ],
        },
        examples: [
          ['A házban vagyok.', 'Eu estou na casa. (-ban, de trás)'],
          ['A szívemben.', 'No meu coração. (-ben, da frente)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar sempre a mesma forma do sufixo: “házben” está errado, é “házban” — a vogal do sufixo segue a palavra, não o contrário.',
      'Esquecer que empréstimos e palavras compostas às vezes têm vogais dos dois grupos: nesses casos vale a última vogal da palavra.',
    ],
    quiz: [
      {
        question: 'Por que “-ban” vira “-ben” em “szívemben” (no meu coração)?',
        options: ['Porque “szív” tem vogais da frente', 'Porque é uma palavra longa', 'Porque é uma exceção sem explicação'],
        answer: 'Porque “szív” tem vogais da frente',
        explanation: '“Szív” tem “í”, uma vogal da frente, então o sufixo também usa a forma da frente: “-ben”.',
      },
    ],
  },
  {
    id: 'hu-g2',
    level: 'A1.1',
    title: 'Sem gênero gramatical: “ő” serve para ele e para ela',
    emoji: '🧑',
    summary: 'O húngaro não divide substantivos nem pronomes por gênero: a mesma palavra “ő” é “ele” e “ela”.',
    sections: [
      {
        text: 'Não existe “o/a”, “um/uma” nem terminação de gênero em adjetivo. O pronome de 3ª pessoa do singular, “ő”, não diz se a pessoa é homem ou mulher — isso só se sabe pelo contexto ou pelo nome. O mesmo vale para “ők” (eles/elas, plural).',
        examples: [
          ['Ki ő?', 'Quem é ele/ela?'],
          ['Ő a barátom.', 'Ele/ela é meu/minha amigo(a).'],
        ],
      },
    ],
    pitfalls: ['Tentar adivinhar o gênero de “ő” pela frase: em húngaro, é preciso perguntar ou já saber de quem se fala.'],
    quiz: [
      {
        question: 'O que “ő” quer dizer sozinho, sem mais contexto?',
        options: ['Ele OU ela, sem diferença', 'Só “ele”', 'Só “ela”'],
        answer: 'Ele OU ela, sem diferença',
        explanation: 'O húngaro não marca gênero gramatical: “ő” vale para os dois.',
      },
    ],
  },
  {
    id: 'hu-g3',
    level: 'A1.2',
    title: 'Em vez de preposições, sufixos de caso: o sistema de 18 casos',
    emoji: '🧩',
    summary: 'O húngaro declina os substantivos com até 18 sufixos de caso, que fazem o trabalho de “em”, “para”, “de”, “com” etc.',
    sections: [
      {
        text: 'Nove desses casos formam uma grade de 3×3: três lugares (dentro, em cima, perto) cruzados com três direções (parado, para lá, vindo de lá). O exemplo abaixo usa sempre “ház” (casa).',
        table: {
          head: ['', 'Parado em (onde?)', 'Indo para (para onde?)', 'Vindo de (de onde?)'],
          rows: [
            ['Dentro', 'házban (na casa)', 'házba (para dentro da casa)', 'házból (de dentro da casa)'],
            ['Em cima / sobre', 'házon (sobre a casa)', 'házra (para cima da casa)', 'házról (de cima da casa)'],
            ['Perto de', 'háznál (perto da casa, com)', 'házhoz (em direção à casa)', 'háztól (de perto da casa)'],
          ],
        },
        examples: [
          ['A házban vagyok.', 'Eu estou na casa.'],
          ['A házhoz megyek.', 'Eu estou indo para a casa (até ela).'],
          ['A háztól jövök.', 'Eu estou vindo da casa.'],
        ],
      },
      {
        heading: 'Outros casos do dia a dia',
        text: 'O acusativo (objeto direto) usa “-t”, com uma vogal de ligação quando precisa: “kenyeret” (pão, objeto). O dativo (“para”, “a”) usa “-nak/-nek”. O instrumental-comitativo (“com”) usa “-val/-vel”. E até o “por quê” é um caso: “miért” é “mi” (o quê) + “-ért” (o caso causal-final, “por causa de”).',
        examples: [
          ['Kenyeret kérek.', 'Eu queria pão. (acusativo)'],
          ['A kutyának adok kenyeret.', 'Eu dou pão ao cachorro. (dativo)'],
          ['A kutyával megyek.', 'Eu vou com o cachorro. (instrumental-comitativo)'],
          ['Miért vagy itt?', 'Por que você está aqui? (mi + -ért)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra separada para “em”, “para” ou “de”: no húngaro, essa ideia vira sufixo grudado no substantivo.',
      'Confundir “-ba/-be” (para dentro de, movimento) com “-ban/-ben” (dentro de, parado): só muda uma letra, mas muda o sentido.',
    ],
    quiz: [
      { question: 'Como se diz “de dentro da casa” (de onde)?', options: ['házból', 'házban', 'házhoz'], answer: 'házból', explanation: '“-ból/-ből” é o caso elativo: de dentro de.' },
      { question: 'O que quer dizer o sufixo “-nak/-nek”?', options: ['para, a (dativo)', 'dentro de', 'com'], answer: 'para, a (dativo)', explanation: '“A kutyának” é “para o cachorro” ou “ao cachorro”.' },
    ],
  },
  {
    id: 'hu-g4',
    level: 'A1.2',
    title: 'Conjugação definida e indefinida: o verbo “sabe” se o objeto é certo',
    emoji: '🎯',
    summary: 'Verbos com objeto direto têm duas conjugações: uma para objeto indefinido (“um”, nenhum artigo) e outra para objeto definido (“o/a”, ele/ela, nome próprio).',
    sections: [
      {
        text: 'Compare “lát” (ver): na forma indefinida, “látok” é “eu vejo (alguma coisa, sem precisar)”; na forma definida, “látom” é “eu vejo aquilo (algo específico, já sabido)”. O mesmo com “kér” (pedir): “kérek” (eu peço, indefinido) e “kérem” (eu peço isso, definido) — “kérem” também virou a palavra para “por favor”.',
        table: {
          head: ['Indefinido', 'Definido', 'Quando usar'],
          rows: [
            ['látok', 'látom', 'sem objeto / objeto indefinido → objeto definido (“a”, “ele”, nome)'],
            ['kérek', 'kérem', 'idem'],
            ['szeretek', 'szeretem', 'idem'],
          ],
        },
        examples: [
          ['Kenyeret kérek.', 'Eu queria (um) pão. (indefinido: sem “o”)'],
          ['Szeretem a gyümölcsöt.', 'Eu gosto da fruta. (definido: “a fruta”, com artigo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar a forma definida sem um objeto definido: “a gyümölcsöt szeretem” pede “szeretem”, mas só “gyümölcsöt” (sem “a”) pediria “szeretek”.',
      'Esquecer que essa distinção só existe com objeto direto: verbos sem objeto (como “vagyok”, eu sou/estou) não têm as duas formas.',
    ],
    quiz: [
      { question: 'Qual forma combina com “a gyümölcsöt” (a fruta, com artigo)?', options: ['szeretem', 'szeretek', 'szeret'], answer: 'szeretem', explanation: 'Objeto definido (com “a”) pede a conjugação definida: “szeretem”.' },
      { question: 'O que virou a palavra húngaro para “por favor”?', options: ['kérem (eu peço isso, definido)', 'kérek (eu peço, indefinido)', 'köszönöm'], answer: 'kérem (eu peço isso, definido)', explanation: '“Kérem” é literalmente “eu peço isso”, usado também como “por favor” e “pois não”.' },
    ],
  },
  {
    id: 'hu-g5',
    level: 'A1.2',
    title: 'O dono vira sufixo: “minha casa” é “a házam”',
    emoji: '🏠',
    summary: 'Em vez de um pronome possessivo separado, o húngaro gruda um sufixo de posse no substantivo — e usa “van” para dizer que alguém “tem” algo.',
    sections: [
      {
        text: 'O sufixo possessivo de 1ª pessoa do singular é “-m”, com uma vogal de ligação (-am/-em/-om/-öm) conforme a harmonia vocálica: “lakásom” (meu apartamento), “szemem” (meu olho), “kutyám” (meu cachorro), “házam” (minha casa).',
        table: {
          head: ['Palavra', 'Com “meu/minha”'],
          rows: [
            ['kutya (cachorro)', 'kutyám'],
            ['szem (olho)', 'szemem'],
            ['ház (casa)', 'házam'],
            ['testvér (irmão/irmã)', 'testvérem'],
          ],
        },
        examples: [
          ['Van egy kutyám.', 'Eu tenho um cachorro. (ao pé da letra: “existe um cachorro-meu”)'],
          ['Négy lányom van.', 'Eu tenho quatro filhas.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ter” separado: o húngaro usa “van/vannak” com o substantivo já marcado pelo sufixo de posse.',
      'Esquecer o sufixo de posse e só usar “van”: “kutya van” (sem “-m”) quer dizer só “há um cachorro”, não “eu tenho um cachorro”.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho uma casa”?', options: ['Van egy házam.', 'Van egy ház.', 'Házam vagyok.'], answer: 'Van egy házam.', explanation: '“Házam” (minha casa) + “van” (existe) = “eu tenho uma casa”.' },
      { question: 'Qual é o sufixo de posse “meu/minha” em “testvérem”?', options: ['-em', '-om', '-am'], answer: '-em', explanation: '“Testvér” tem vogal da frente (é), então o sufixo é “-em”.' },
    ],
  },
  {
    id: 'hu-g6',
    level: 'A1.2',
    title: 'Depois de número, o substantivo fica no singular',
    emoji: '🔢',
    summary: 'O plural do húngaro é “-k” (com vogal de ligação), mas depois de um numeral o substantivo NÃO vai para o plural.',
    sections: [
      {
        text: 'Diz-se “két ember” (duas pessoas) e não “két emberek” — o numeral já deixa claro que é mais de um, então o plural seria repetição. Isso vale para qualquer numeral. Repare também que “dois” tem duas formas: “kettő”, usada sozinha ao contar, e “két”, usada antes de um substantivo.',
        table: {
          head: ['Com numeral (singular)', 'Tradução'],
          rows: [
            ['két macska', 'dois gatos'],
            ['három alma', 'três maçãs'],
            ['tíz kutya', 'dez cachorros'],
          ],
        },
        examples: [
          ['Két macskám van.', 'Eu tenho dois gatos.'],
          ['Tíz kutya van a házban.', 'Há dez cachorros na casa.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr plural depois de número, como em português: “két macskák” está errado, é “két macska”.',
      'Confundir “kettő” com “két”: “kettő” fica sozinho (“Hány macskád van? Kettő.” = Quantos gatos você tem? Dois.); “két” vem antes do substantivo (“két macska”).',
    ],
    quiz: [
      { question: 'Como se diz “três maçãs”?', options: ['három alma', 'három almák', 'három almát'], answer: 'három alma', explanation: 'Depois de numeral, o substantivo fica no singular: “alma”, não “almák”.' },
      { question: 'Qual forma de “dois” vem antes de um substantivo?', options: ['két', 'kettő', 'kettőt'], answer: 'két', explanation: '“Két” é a forma usada antes do substantivo; “kettő” fica sozinha, ao contar.' },
    ],
  },
];
