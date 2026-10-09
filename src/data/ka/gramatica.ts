import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do georgiano — A1.1 até A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Tópicos de A2 verificados na Wikipédia em inglês ("Georgian grammar", "Georgian
 * numerals"), no Wiktionary em inglês e no artigo sobre o georgiano no Universal Dependencies
 * (universaldependencies.org/ka/feat/Degree.html).
 */
export const GRAMMAR_KA: GrammarTopic[] = [
  {
    id: 'ka-g1',
    level: 'A1.1',
    title: 'O alfabeto mkhedruli e as consoantes ejetivas',
    emoji: '🔤',
    summary: '33 letras, sem maiúsculas, cada uma com um único som — e seis consoantes “ejetivas”, ditas com um pequeno estalo de ar.',
    sections: [
      {
        text: 'O georgiano se escreve com o alfabeto mkhedruli, de 33 letras em uso hoje, da esquerda para a direita. Cada letra tem só uma forma (não existe “maiúscula” separada) e representa sempre o mesmo som — não há letras mudas nem combinações imprevisíveis.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['გ', 'como o “g” de “gato”', 'გამარჯობა (gamarjoba, “oi”)'],
            ['კ', 'ejetivo: “k” seco, com um estalo de ar', 'კატა (k’at’a, “gato”)'],
            ['ქ', 'soprado, como o “k” do inglês “kite”', 'ქალაქი (kalaki, “cidade”)'],
            ['წ', 'ejetivo: “ts” seco e expelido', 'წყალი (ts’q’ali, “água”)'],
            ['ყ', 'gutural, lá no fundo da garganta — sem equivalente em português', 'ყავა (q’ava, “café”)'],
          ],
        },
        examples: [['მე ცოტა ქართულად ვლაპარაკობ.', 'Eu falo um pouco de georgiano.']],
      },
      {
        heading: 'Consoantes ejetivas',
        text: 'Seis consoantes do georgiano são “ejetivas” (ტ, კ, პ, წ, ჭ, ყ): a glote se fecha, o ar se acumula atrás dela, e sai com um pequeno estalo seco, sem vibrar as cordas vocais — bem diferente de qualquer consoante do português. Cada ejetiva tem uma “irmã” soprada, parecida na escrita: კ/ejetivo × ქ/soprado, ტ/ejetivo × თ/soprado, პ/ejetivo × ფ/soprado, წ/ejetivo × ც/soprado, ჭ/ejetivo × ჩ/soprado.',
        examples: [
          ['ხაჭაპური ძალიან გემრიელია.', 'O khachapuri é muito gostoso.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar reconhecer o alfabeto georgiano a partir do armênio, do grego ou do cirílico: o mkhedruli não compartilha letras com nenhum outro sistema de escrita.',
      'Confundir as ejetivas (ტ, კ, პ, წ, ჭ, ყ) com suas pares sopradas (თ, ქ, ფ, ც, ჩ): a diferença muda o significado da palavra.',
    ],
    quiz: [
      { question: 'O alfabeto mkhedruli tem…', options: ['33 letras, sem maiúsculas', 'letras maiúsculas e minúsculas, como o latino', '45 letras, emprestadas do grego'], answer: '33 letras, sem maiúsculas', explanation: 'O mkhedruli usa 33 letras em uso corrente, todas numa única forma — não existe distinção entre maiúscula e minúscula.' },
      { question: 'Uma consoante “ejetiva” como ყ ou წ é pronunciada…', options: ['com a glote fechada e um pequeno estalo de ar', 'soprando bastante ar, como o inglês', 'sempre em voz baixa'], answer: 'com a glote fechada e um pequeno estalo de ar', explanation: 'As ejetivas fecham a glote, acumulam pressão de ar atrás dela e soltam tudo de uma vez, sem vibração das cordas vocais.' },
    ],
  },
  {
    id: 'ka-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo “ser” (ყოფნა)',
    emoji: '🙋',
    summary: 'Seis pronomes e a conjugação de “ser/estar” — e a mesma lógica do “vous” francês: um pronome para “vocês” e para tratar alguém com respeito.',
    sections: [
      {
        text: 'O georgiano não tem um infinitivo isolado como “ser”: os dicionários citam o “masdar” (ყოფნა, qopna, algo como “o ser”), mas na fala usa-se direto a forma conjugada.',
        table: {
          head: ['Pronome', 'Tradução', '“ser/estar”'],
          rows: [
            ['მე', 'eu', 'ვარ (var)'],
            ['შენ', 'tu, você', 'ხარ (khar)'],
            ['ის', 'ele, ela', 'არის (aris)'],
            ['ჩვენ', 'nós', 'ვართ (vart)'],
            ['თქვენ', 'vocês; o(a) senhor(a) (formal)', 'ხართ (khart)'],
            ['ისინი', 'eles, elas', 'არიან (arian)'],
          ],
        },
        examples: [
          ['მე ბრაზილიელი ვარ.', 'Eu sou brasileiro(a).'],
          ['თქვენ საიდან ხართ?', 'De onde o(a) senhor(a) é?'],
        ],
      },
      {
        heading: 'A cópula encurtada: “-ia”',
        text: 'Na 3ª pessoa, “არის” (aris, é/está) costuma grudar na palavra anterior numa forma reduzida: “-ა”. “ეს კარგი არის” vira “ეს კარგია” (isto é bom), e “ჩემი სახელი არის …” vira “ჩემი სახელია …” (o meu nome é …).',
        examples: [
          ['ჩემი სახელია ლინუ.', 'O meu nome é Linu.'],
          ['ეს კარგია.', 'Isto é bom.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “შენ” com alguém mais velho, desconhecido, ou numa situação formal: aí o georgiano pede “თქვენ”, exatamente como o “vous” do francês ou o “დուք” do armênio.',
      'Procurar uma palavra separada para “é” depois de um adjetivo ou nome: muitas vezes ela já está grudada no final da palavra anterior, como “-ia”.',
    ],
    quiz: [
      { question: 'Complete: “მე ბრაზილიელი ___.”', options: ['ვარ', 'ხარ', 'არის'], answer: 'ვარ', explanation: '“ვარ” é a forma de “ser” para “მე” (eu).' },
      { question: '“თქვენ” serve para…', options: ['vocês e o tratamento formal com uma pessoa só', 'só para “eles”', 'só para crianças'], answer: 'vocês e o tratamento formal com uma pessoa só', explanation: 'Como o “vous” francês, “თქვენ” é o plural e também a forma educada de falar com uma pessoa só.' },
    ],
  },
  {
    id: 'ka-g3',
    level: 'A1.2',
    title: 'Os sete casos e a ergatividade dividida',
    emoji: '🧩',
    summary: 'O georgiano tem sete casos — e o sujeito muda de caso dependendo do tempo verbal, não sempre do mesmo jeito.',
    sections: [
      {
        text: 'O substantivo georgiano muda de forma conforme a função na frase: nominativo, ergativo, dativo, genitivo, instrumental, adverbial e vocativo. Para um nome terminado em consoante, como “კაც-” (k’ats-, homem), os sufixos são:',
        table: {
          head: ['Caso', 'Sufixo', 'Exemplo'],
          rows: [
            ['Nominativo', '-ი', 'კაცი (o homem)'],
            ['Ergativo', '-მა', 'კაცმა (o homem, sujeito no passado)'],
            ['Dativo', '-ს', 'კაცს (ao homem)'],
            ['Genitivo', '-ის', 'კაცის (do homem)'],
            ['Vocativo', '-ო', 'კაცო (ó homem!)'],
          ],
        },
        examples: [['ეს ჩემი მეგობრის სახლია.', 'Esta é a casa do meu amigo. (sakheli + genitivo -is)']],
      },
      {
        heading: 'Ergatividade dividida',
        text: 'A grande armadilha: o georgiano só usa o caso ergativo no sujeito em certos tempos verbais. No presente, até o sujeito de um verbo transitivo fica no nominativo — é só no passado (a série do aoristo) que ele vira ergativo. Há uma única exceção conhecida: o verbo “ცოდნა” (codna, saber) usa o ergativo no sujeito já no presente — “კაცმა იცის” é “o homem sabe”, com “-მა” mesmo sendo presente.',
        examples: [
          ['მე ვჭამ ხაჭაპურს.', 'Eu como khachapuri. (presente: sujeito no nominativo, sem -მა)'],
          ['კაცმა იცის.', 'O homem sabe. (presente do verbo “saber”: exceção com ergativo)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o ergativo marca o sujeito sempre que o verbo é transitivo: no georgiano, isso só vale no passado (série do aoristo) — no presente, o sujeito fica no nominativo.',
      'Colocar um substantivo no plural depois de um numeral: “ოთხი ფეხი” (quatro pernas) fica no singular, nunca “ოთხი ფეხები” — como em várias línguas que usam classificadores.',
    ],
    quiz: [
      { question: 'No presente, o sujeito de um verbo transitivo como “ჭამა” (comer) fica…', options: ['no nominativo', 'sempre no ergativo', 'no dativo'], answer: 'no nominativo', explanation: 'A ergatividade do georgiano é dividida por tempo verbal: o ergativo só aparece no passado (série do aoristo), com a exceção do verbo “saber”.' },
      { question: 'Qual verbo usa o caso ergativo no sujeito mesmo no presente?', options: ['ცოდნა (saber)', 'ჭამა (comer)', 'ყოფნა (ser)'], answer: 'ცოდნა (saber)', explanation: '“ცოდნა” é a única exceção documentada: “კაცმა იცის” (o homem sabe) já leva “-მა” no presente.' },
    ],
  },
  {
    id: 'ka-g4',
    level: 'A1.2',
    title: 'Ter, querer e gostar: verbos ao contrário',
    emoji: '🔄',
    summary: '“Ter”, “querer” e “gostar” não têm um sujeito “ativo” em georgiano: quem sente ou possui fica no dativo, e a coisa concorda com o verbo.',
    sections: [
      {
        text: 'Em português, “eu tenho um livro” tem “eu” como sujeito. Em georgiano, esses verbos de posse e desejo funcionam ao contrário: a pessoa que possui, quer ou gosta fica no caso dativo (para os pronomes “მე” e “შენ”, a forma não muda), e a coisa possuída ou querida fica no nominativo, concordando com o verbo através de um prefixo (მ- para “eu”, გ- para “tu/você”).',
        table: {
          head: ['Verbo', 'eu', 'tu/você'],
          rows: [
            ['ter algo (não-vivo)', 'მაქვს (makvs)', 'გაქვს (gakvs)'],
            ['ter alguém/um bicho', 'მყავს (mqavs)', 'გყავს (gqavs)'],
            ['querer', 'მინდა (minda)', 'გინდა (ginda)'],
            ['gostar, amar', 'მიყვარს (miqvars)', 'გიყვარს (giqvars)'],
          ],
        },
        examples: [
          ['მე მყავს ერთი ძმა.', 'Eu tenho um irmão.'],
          ['მე მაქვს წიგნი.', 'Eu tenho um livro.'],
          ['მე მინდა ხაჭაპური.', 'Eu quero khachapuri.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “მაქვს” para pessoas e bichos: o georgiano separa “ter” coisa (მაქვს) de “ter” gente ou animal (მყავს) — “მე მყავს ძმა”, nunca “მაქვს ძმა”.',
      'Procurar um sujeito “ativo” nessas frases: quem “tem”, “quer” ou “gosta” não controla a ação como em português — é mais como dizer “a mim é querido/tido/amado”.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um irmão”?', options: ['მე მყავს ერთი ძმა.', 'მე მაქვს ერთი ძმა.', 'ძმა მყავს მე.'], answer: 'მე მყავს ერთი ძმა.', explanation: 'Para pessoas e bichos, o verbo “ter” é “მყავს” (mqavs), não “მაქვს” (makvs), que serve para coisas.' },
      { question: 'Em “მე მინდა ხაჭაპური”, quem está no caso dativo?', options: ['მე (eu, quem quer)', 'ხაჭაპური (o que é querido)', 'nenhum dos dois'], answer: 'მე (eu, quem quer)', explanation: 'Nos verbos de desejo e posse, quem sente ou possui vai para o dativo; a coisa (aqui, “ხაჭაპური”) fica no nominativo.' },
    ],
  },
  {
    id: 'ka-g5',
    level: 'A2.1',
    title: 'Futuro: o preverbo que muda tudo',
    emoji: '🔮',
    summary: 'O futuro se forma acrescentando um preverbo ao presente — sem mudar mais nada na palavra.',
    sections: [
      {
        text: 'O georgiano marca o futuro acrescentando um preverbo (um prefixo que originalmente indicava direção) à mesma forma do presente — nenhuma outra parte da palavra muda. “ვწერ” (vtser, eu escrevo) vira “დავწერ” (davtser, eu vou escrever) só com o preverbo “და-” na frente. Cada verbo tem o seu próprio preverbo “certo”, e boa parte das vezes essa escolha é arbitrária: é preciso memorizar qual preverbo vai com qual verbo.',
        table: {
          head: ['Presente', 'Futuro', 'Preverbo'],
          rows: [
            ['ვწერ (eu escrevo)', 'დავწერ (eu vou escrever)', 'და-'],
            ['აკეთებს (ele/ela faz)', 'გააკეთებს (ele/ela vai fazer)', 'გა-'],
          ],
        },
        examples: [
          ['დავწერ წერილს.', 'Eu vou escrever uma carta.'],
          ['ხვალ ვმუშაობ.', 'Amanhã eu trabalho. (presente, usado para planos próximos sem preverbo)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que todo preverbo de futuro é igual: cada verbo tem o seu próprio preverbo, às vezes imprevisível — é preciso aprender verbo por verbo, como um verbo irregular.',
      'Esquecer que o preverbo às vezes também muda o radical do verbo (não é só colar um prefixo), como em ვყიდულობ → ვიყიდი.',
    ],
    quiz: [
      { question: 'O futuro do georgiano se forma…', options: ['acrescentando um preverbo ao presente', 'com um verbo auxiliar separado, como “vou”', 'com uma terminação nova, sem preverbo'], answer: 'acrescentando um preverbo ao presente', explanation: 'O preverbo, sozinho, já marca a diferença entre presente e futuro em georgiano.' },
      { question: 'Qual é o futuro de “ვწერ” (eu escrevo)?', options: ['დავწერ', 'ვწერა', 'ვიწერ'], answer: 'დავწერ', explanation: 'O preverbo “და-” transforma o presente “ვწერ” no futuro “დავწერ”.' },
    ],
  },
  {
    id: 'ka-g6',
    level: 'A2.1',
    title: 'Plural: -ებ- antes do caso',
    emoji: '🔢',
    summary: 'O plural se forma com o sufixo -ებ-, encaixado ANTES da terminação de caso — e desaparece depois de um número.',
    sections: [
      {
        text: 'Para formar o plural, o georgiano insere “-ებ-” entre o radical do substantivo e a terminação de caso: no nominativo, isso dá “-ები”. “კაცი” (homem) no plural nominativo é “კაცები”; no caso dativo, “კაცებს”. Depois de um numeral cardinal, porém, o plural desaparece: “ხუთი კაცი” (cinco homens) usa o substantivo no SINGULAR, nunca “ხუთი კაცები”.',
        table: {
          head: ['Singular', 'Plural (nominativo)', 'Depois de numeral'],
          rows: [
            ['კაცი (homem)', 'კაცები (homens)', 'ხუთი კაცი (cinco homens)'],
            ['ხე (árvore)', 'ხეები (árvores)', 'ოთხი ხე (quatro árvores)'],
          ],
        },
        examples: [
          ['ჩემი მეგობრები თბილისში ცხოვრობენ.', 'Os meus amigos moram em Tbilisi. (მეგობრები, plural)'],
          ['ოთხი ფეხი აქვს.', 'Tem quatro pernas. (ფეხი, singular, depois do numeral ოთხი)'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o substantivo no plural depois de um numeral: “ოთხი ფეხები” soa errado — depois de um número, o substantivo fica no singular, como já visto no A1 (“ოთხი ფეხი”, quatro pernas).',
      'Esquecer que “-ებ-” vem ANTES da terminação de caso, não depois: “კაცები” é “კაც-ებ-ი” (radical + plural + nominativo), não uma terminação só.',
    ],
    quiz: [
      { question: 'Como se diz “homens” (nominativo plural)?', options: ['კაცები', 'კაცი', 'კაცებს'], answer: 'კაცები', explanation: '“-ებ-” (plural) + “-ი” (nominativo) dá “კაცები”.' },
      { question: 'Como se diz “cinco homens”?', options: ['ხუთი კაცი', 'ხუთი კაცები', 'კაცი ხუთი'], answer: 'ხუთი კაცი', explanation: 'Depois de um numeral cardinal, o substantivo volta ao singular — o plural “-ებ-” desaparece.' },
    ],
  },
  {
    id: 'ka-g7',
    level: 'A2.2',
    title: 'Números de 20 a 100: um sistema vigesimal',
    emoji: '🧮',
    summary: 'De 30 a 90, o georgiano conta em grupos de vinte, como o antigo “score” do inglês ou o francês “quatre-vingts”.',
    sections: [
      {
        text: 'Os números georgianos de 20 a 99 seguem uma lógica vigesimal (base 20), não só decimal: “ოცი” (otsi) é a palavra primitiva para 20, e os números maiores se constroem a partir dela com multiplicação e soma. “ორმოცი” (ormotsi, 40) é literalmente “duas vintenas” (ori, dois + otsi, vinte); “ორმოცდაათი” (ormotsdaati, 50) é “duas vintenas e dez” (ორმოცი + და, “e” + ათი, dez).',
        table: {
          head: ['Número', 'Georgiano', 'Construção literal'],
          rows: [
            ['20', 'ოცი', 'vinte (primitivo)'],
            ['30', 'ოცდაათი', 'vinte + dez'],
            ['40', 'ორმოცი', 'duas vintenas (2×20)'],
            ['50', 'ორმოცდაათი', 'duas vintenas + dez (2×20+10)'],
            ['80', 'ოთხმოცი', 'quatro vintenas (4×20)'],
            ['100', 'ასი', 'cem (primitivo)'],
          ],
        },
        examples: [
          ['მე ორმოცი წლის ვარ.', 'Eu tenho quarenta anos. (literalmente “duas vintenas”)'],
          ['ეს ორმოცდაათი ლარია.', 'Isto custa cinquenta laris. (literalmente “duas vintenas e dez”)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar montar os números de 30 a 90 a partir de um padrão decimal regular (como “três-dez” para 30): o georgiano usa vintenas, não dezenas, a partir de 30.',
      'Esquecer o “და” (“e”) nos números como 30, 50, 70, 90 — eles são “vintena(s) E dez”, não só “vintena(s) dez” sem conector.',
    ],
    quiz: [
      { question: '“ორმოცი” (ormotsi, 40) é construído como…', options: ['duas vintenas (2×20)', 'quatro dezenas', 'vinte e vinte'], answer: 'duas vintenas (2×20)', explanation: '“ორი” (dois) + “ოცი” (vinte) = “ორმოცი”, literalmente “duas vintenas”.' },
      { question: 'Qual é o número 50 em georgiano?', options: ['ორმოცდაათი', 'ხუთი ათი', 'ორმოცი'], answer: 'ორმოცდაათი', explanation: '50 é “ორმოცი” (40) + “და” (e) + “ათი” (10): “duas vintenas e dez”.' },
    ],
  },
  {
    id: 'ka-g8',
    level: 'A2.2',
    title: 'Comparativo e superlativo: უფრო, ვიდრე, ყველაზე',
    emoji: '⚖️',
    summary: 'O georgiano moderno compara com “უფრო” (mais) antes do adjetivo e “ვიდრე” (que) antes do segundo termo; o superlativo usa “ყველაზე” (de todos).',
    sections: [
      {
        text: 'Diferente do georgiano antigo (que tinha um prefixo e sufixo só para comparar, hoje raros), a língua moderna forma o comparativo de forma analítica: “უფრო” (upro, mais) vem antes do adjetivo, e “ვიდრე” (vidre, que) antes do segundo termo da comparação. Para o superlativo, “ყველაზე” (qvelaze, “sobre todos”, de ყველა “todos” + -ზე) vem antes do adjetivo, sem precisar de um segundo termo.',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['უფრო [adjetivo] ვიდრე X', 'mais … que X', 'ეს სახლი უფრო დიდია, ვიდრე ის.'],
            ['ყველაზე [adjetivo]', 'o(a) mais …', 'ეს ყველაზე დიდი სახლია.'],
          ],
        },
        examples: [
          ['ეს სახლი უფრო დიდია, ვიდრე ის.', 'Esta casa é maior que aquela.'],
          ['ეს ყველაზე დიდი სახლია.', 'Esta é a casa maior (a maior casa).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um sufixo de comparativo, como no georgiano antigo: a língua de hoje prefere a forma analítica, com “უფრო” antes do adjetivo.',
      'Usar “ვიდრே” no superlativo: “ყველაზე” já é “o mais”, sozinho — não precisa de um segundo termo com “ვიდრე”.',
    ],
    quiz: [
      { question: 'Como se diz “esta casa é maior que aquela”?', options: ['ეს სახლი უფრო დიდია, ვიდრე ის.', 'ეს სახლი ყველაზე დიდია ის.', 'ეს სახლი დიდი ვიდრე ის.'], answer: 'ეს სახლი უფრო დიდია, ვიდრე ის.', explanation: '“უფრო” antes do adjetivo marca o comparativo, e “ვიდრე” introduz o segundo termo.' },
      { question: 'Como se diz “esta é a casa maior”?', options: ['ეს ყველაზე დიდი სახლია.', 'ეს უფრო დიდი სახლია.', 'ეს სახლი ვიდრე დიდია.'], answer: 'ეს ყველაზე დიდი სახლია.', explanation: '“ყველაზე” antes do adjetivo forma o superlativo, sem precisar de outro termo de comparação.' },
    ],
  },
];
