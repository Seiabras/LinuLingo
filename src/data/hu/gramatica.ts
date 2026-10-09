import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do húngaro — A1.1 ao A2.2 (pacote incompleto, ver index.ts; falta do B1 em
 * diante).
 *
 * Fontes conferidas: Wikipédia em inglês, «Hungarian grammar», «Hungarian language», «Hungarian
 * verbs» e «Hungarian phonology» (as 18 declinações, a harmonia vocálica, a conjugação
 * definida/indefinida, o sistema ternário de 9 casos locativos, a ausência de gênero gramatical, os
 * três tipos de passado, os prefixos verbais/igekötők); e Wiktionary (en.wiktionary.org), verbetes de
 * «van», «vagyok», «vannak», «eszik», «két», «miért», «dolgozik», «tanul», «ír», «olvas», «alszik»,
 * «vásárol» (tabela de passado de cada um), «nagyobb», «legnagyobb», «jobb», «mint», «kell», «fog»,
 * «lesz», «volt», «megy»/«elmegy»/«bemegy», «leír» (prefixos verbais), que trazem formas e frases de
 * exemplo confirmadas. As frases novas desta página aplicam essas mesmas regras e sufixos confirmados
 * a outras palavras do vocabulário do pacote.
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
  {
    id: 'hu-g7',
    level: 'A2.1',
    title: 'O passado: -t/-tt, com ou sem vogal de ligação',
    emoji: '⏪',
    summary: 'O húngaro moderno tem um único tempo verbal para o passado — ele cobre o que em português seriam vários tempos diferentes.',
    sections: [
      {
        text: 'O passado é marcado com o sufixo “-t”, que vira “-tt” (ou ganha uma vogal de ligação antes dele) dependendo da última letra do verbo. Verbos terminados em consoante “mole” (como “l” ou “r”) não precisam de vogal de ligação em nenhuma pessoa; verbos terminados em sibilante (como “s” ou “z”) só precisam dela na 3ª pessoa do singular.',
        table: {
          head: ['Verbo (infinitivo)', 'eu (-tam/-tem)', 'você (-tál/-tél)', 'ele/ela'],
          rows: [
            ['tanulni (estudar)', 'tanultam', 'tanultál', 'tanult'],
            ['írni (escrever)', 'írtam', 'írtál', 'írt'],
            ['vásárolni (comprar)', 'vásároltam', 'vásároltál', 'vásárolt'],
            ['dolgozni (trabalhar)', 'dolgoztam', 'dolgoztál', 'dolgozott'],
            ['olvasni (ler)', 'olvastam', 'olvastál', 'olvasott'],
          ],
        },
        examples: [
          ['Tegnap dolgoztam.', 'Eu trabalhei ontem.'],
          ['Tanultál tegnap?', 'Você estudou ontem?'],
          ['Mit olvastál?', 'O que você leu?'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma vogal de ligação sempre: verbos como “tanul” e “ír” nunca têm uma (tanultam, não “tanulottam”); só “dolgozik” e “olvas” (terminados em sibilante) a ganham, e só na 3ª pessoa do singular (dolgozott, olvasott).',
      'Achar que existe mais de um tempo passado: o húngaro usa a mesma forma para o que em português seria “eu trabalhei”, “eu estava trabalhando” ou “eu tinha trabalhado”.',
    ],
    quiz: [
      { question: 'Qual é o passado de “tanul” (estudar) na 3ª pessoa?', options: ['tanult', 'tanulott', 'tanultott'], answer: 'tanult', explanation: '“Tanul” termina em consoante mole (“l”): o passado não leva vogal de ligação em nenhuma pessoa.' },
      { question: 'Qual é o passado de “dolgozik” (trabalhar) na 3ª pessoa?', options: ['dolgozott', 'dolgozt', 'dolgoztott'], answer: 'dolgozott', explanation: '“Dolgozik” termina em sibilante: a 3ª pessoa do singular ganha a vogal de ligação “-ott”.' },
    ],
  },
  {
    id: 'hu-g8',
    level: 'A2.1',
    title: 'Prefixos verbais (igekötők): partículas que mudam o verbo',
    emoji: '🧭',
    summary: 'Pequenas partículas grudadas antes do verbo mudam o sentido dele — de direção (para dentro, para fora) a aspecto perfectivo (a ação terminada).',
    sections: [
      {
        text: 'Os prefixos mais comuns são “fel-” (para cima), “le-” (para baixo), “be-” (para dentro), “ki-” (para fora), “el-” (para longe), “vissza-” (de volta), “át-” (através), “szét-” (em pedaços) e “össze-” (junto). Além do sentido de direção, muitos prefixos (sobretudo “meg-”) tornam o verbo perfectivo: marcam que a ação foi concluída, não só que estava em andamento.',
        table: {
          head: ['Verbo', 'Com prefixo', 'Sentido'],
          rows: [
            ['megy (vai)', 'elmegy', 'vai embora (perfectivo de “megy”)'],
            ['megy (vai)', 'bemegy', 'entra (para dentro de um lugar)'],
            ['ír (escreve)', 'leír', 'escreve, anota (também: descreve)'],
          ],
        },
        examples: [
          ['Lement a lépcsőn.', 'Ele desceu a escada. (ação concluída)'],
          ['Ment le a lépcsőn.', 'Ele estava descendo a escada. (ação em andamento; o prefixo vem depois do verbo)'],
          ['Bemegyek a boltba.', 'Eu vou entrar na loja.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o prefixo como se fosse uma palavra separada, como uma preposição do português: “bemegy” não é “vai dentro”, é um verbo só, “entrar”.',
      'Não notar a ordem: quando o prefixo vem antes do verbo (elmegy), a ação é vista como concluída ou pontual; quando vem depois (ment el), a ação é vista em andamento.',
    ],
    quiz: [
      { question: 'O que “bemegy” quer dizer?', options: ['entrar (ir para dentro)', 'sair', 'voltar'], answer: 'entrar (ir para dentro)', explanation: '“Be-” é o prefixo de “para dentro”; “bemegy” é “megy” (vai) + “be-”.' },
      { question: 'Qual prefixo forma o perfectivo mais comum do húngaro?', options: ['meg-', 'ki-', 'át-'], answer: 'meg-', explanation: '“Meg-” é o prefixo perfectivizante mais comum, marcando que a ação terminou.' },
    ],
  },
  {
    id: 'hu-g9',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -bb e leg-',
    emoji: '📈',
    summary: 'O comparativo húngaro gruda o sufixo “-bb” no adjetivo, e o superlativo acrescenta o prefixo “leg-” na frente do comparativo.',
    sections: [
      {
        text: 'A maioria dos adjetivos forma o comparativo só com “-bb” (com vogal de ligação, por harmonia vocálica): “nagy” (grande) vira “nagyobb” (maior). O superlativo é sempre o comparativo com “leg-” na frente: “legnagyobb” (o maior). “Mint” é a palavra para “do que” nas comparações.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['nagy (grande)', 'nagyobb', 'legnagyobb'],
            ['jó (bom)', 'jobb (irregular)', 'legjobb'],
          ],
        },
        examples: [
          ['A kastély nagyobb, mint a kutyaház.', 'O castelo é maior do que a casinha de cachorro. (frase do Wiktionary)'],
          ['A ház nagyobb, mint a bolt.', 'A casa é maior do que a loja.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar “jóbb” como comparativo de “jó”: a forma é irregular, “jobb” (o “ó” encurta antes do “-bb”).',
      'Esquecer o “leg-” no superlativo: sem ele, “nagyobb” só quer dizer “maior”, não “o maior”.',
    ],
    quiz: [
      { question: 'Como se diz “o maior” em húngaro?', options: ['legnagyobb', 'nagyobb', 'leg nagy'], answer: 'legnagyobb', explanation: 'O superlativo é “leg-” + o comparativo: “leg” + “nagyobb” = “legnagyobb”.' },
      { question: 'Qual é o comparativo (irregular) de “jó” (bom)?', options: ['jobb', 'jóbb', 'jobbobb'], answer: 'jobb', explanation: '“Jó” + “-bb” encurta o “ó” para “o”: “jobb” (melhor).' },
    ],
  },
  {
    id: 'hu-g10',
    level: 'A2.2',
    title: '“Kell” (precisar) e “fog” (futuro) com infinitivo',
    emoji: '🔮',
    summary: '“Kell” expressa necessidade e “fog” forma o futuro — os dois vêm depois de um verbo no infinitivo, nunca antes.',
    sections: [
      {
        text: '“Kell” (deve, precisa, é preciso) é impessoal: a coisa necessária fica no nominativo (“kabát kell”, precisa-se de casaco) e, quando é preciso dizer quem precisa fazer algo, o infinitivo ganha um sufixo de pessoa (mennem, mennem kell = eu tenho que ir). “Fog” é um verbo auxiliar que se conjuga normalmente (fogok, fogsz, fog…) e, com um infinitivo na frente, forma o futuro.',
        table: {
          head: ['Construção', 'Exemplo', 'Tradução'],
          rows: [
            ['infinitivo + kell', 'Mennem kell.', 'Eu tenho que ir.'],
            ['substantivo + kell', 'Kabát kell.', 'Precisa-se de um casaco. / É preciso um casaco.'],
            ['infinitivo + fog', 'Holnap dolgozni fogok.', 'Eu vou trabalhar amanhã.'],
          ],
        },
        examples: [
          ['Holnap hideg lesz.', 'Vai estar frio amanhã. (“lesz”, futuro de “van”)'],
          ['Fáradt vagyok: aludnom kell.', 'Estou cansado: eu preciso dormir.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o infinitivo depois de “fog” ou de “kell”: os dois vêm sempre depois do infinitivo (mennem kell, dolgozni fogok), nunca antes.',
      'Confundir “lesz” (futuro de “van”, para “ser/estar/haver”) com “fog” (auxiliar de futuro para qualquer outro verbo): “holnap hideg lesz” usa “lesz” porque é uma frase com “van”; “holnap dolgozni fogok” usa “fog” porque o verbo principal é “dolgozni”.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho que ir”?', options: ['Mennem kell.', 'Kell mennem.', 'Megyek kell.'], answer: 'Mennem kell.', explanation: 'O infinitivo com o sufixo de pessoa (“mennem”) vem antes de “kell”.' },
      { question: 'Qual auxiliar forma o futuro de “dolgozik” (trabalhar)?', options: ['fog (dolgozni fogok)', 'kell (dolgozni kell)', 'lesz (dolgozni lesz)'], answer: 'fog (dolgozni fogok)', explanation: '“Fog” é o auxiliar geral de futuro; “lesz” só serve para o próprio verbo “van” (ser/estar/haver).' },
    ],
  },
];
