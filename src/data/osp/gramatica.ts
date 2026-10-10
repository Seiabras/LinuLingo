import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do castelhano medieval — A1.1, A1.2, A2.1 e A2.2 (pacote ainda incompleto,
 * ver `incomplete` em index.ts). Fontes: Wiktionary (seção “Old Spanish” de cada palavra citada, com
 * declinação/conjugação — “seer”, “aver”, “vos”, “mio”, e as categorias “Old Spanish numerals” e
 * “Old Spanish adjectives” para os numerais/ordinais do A2.1); Wikipédia em inglês (“Old Spanish
 * language” — período, sons, gramática, e a seção de morfologia/sintaxe usada nos tópicos de A2.2,
 * com os exemplos originais “non gelo empeñar he” e “Las mugieres son llegadas a Castiella”) e
 * (“Cantar de Mio Cid” — a obra mais famosa do período, composta entre 1140 e 1207, manuscrito de
 * Per Abbat datado de 1207).
 */
export const GRAMMAR_OSP: GrammarTopic[] = [
  {
    id: 'osp-g1',
    level: 'A1.1',
    title: 'Sons que o espanhol moderno perdeu ou mudou',
    emoji: '🪶',
    summary: 'O castelhano medieval distinguia sons que o espanhol moderno juntou — “b”/“v” eram sons diferentes, e “f” inicial de palavra ainda não tinha virado “h” muda.',
    sections: [
      {
        text: 'Segundo a Wikipédia em inglês, o castelhano medieval mantinha “b” e “v” como dois sons distintos (eles só se fundiram por volta de 1400 no começo da palavra, e só no século XVI em outras posições). O som que hoje é o “h” mudo do espanhol vinha do latim “f” — e durante o período medieval ainda se pronunciava “f” (só bem depois, já influenciado pelo francês e pelo occitano, é que passou a “h” e depois mudo).',
        table: {
          head: ['Castelhano medieval', 'Espanhol moderno', 'Tradução'],
          rows: [
            ['fijo', 'hijo', 'filho'],
            ['fablar', 'hablar', 'falar'],
            ['fazer', 'hacer', 'fazer'],
          ],
        },
        examples: [['El rey ave un fijo.', 'O rei tem um filho.']],
      },
      {
        heading: 'Ermano, não hermano',
        text: 'O “h” de “hermano” também é mais recente: no castelhano medieval a palavra era “ermano” (do latim vulgar “*germanus”), sem “h” nenhum.',
      },
    ],
    pitfalls: ['Escrever “hijo”/“hermano” com “h” pensando em corrigir uma palavra do castelhano medieval: no período do Cantar de Mio Cid, “fijo” e “ermano” são as formas certas — o “h” é uma mudança bem posterior.'],
    quiz: [
      {
        question: 'Como se escrevia “filho” no castelhano medieval, antes do som “f” virar “h”?',
        options: ['fijo', 'hijo', 'fillo'],
        answer: 'fijo',
        explanation: 'O “f” inicial do latim ainda se pronunciava “f” no castelhano medieval — “fijo” só virou “hijo” bem depois, já no espanhol moderno.',
      },
    ],
  },
  {
    id: 'osp-g2',
    level: 'A1.1',
    title: 'Vos: plural e também cortesia',
    emoji: '🤝',
    summary: '“Vos” já funcionava, no castelhano medieval, tanto como “vós” (plural) quanto como forma cortês para uma só pessoa — a mesma palavra que o francês antigo também usa pra cortesia.',
    sections: [
      {
        text: 'Segundo o Wiktionary, no castelhano medieval “vos” era o pronome de segunda pessoa do plural e também a forma cortês da segunda pessoa do singular — usando as mesmas formas verbais que o espanhol moderno reserva para “vosotros”. “Tú” seguia sendo a forma íntima, de uma só pessoa.',
        examples: [
          ['Tú sees cavallero?', 'Tu és cavaleiro? (uma pessoa, íntimo)'],
          ['Vos avedes un fijo?', 'Vós tendes um filho? (uma pessoa, cortês — ou mais de uma pessoa)'],
        ],
      },
      {
        heading: 'A mesma distinção do francês antigo',
        text: 'Essa distinção “tú” (íntimo) × “vos” (cortês/plural) é exatamente a mesma que o francês antigo guarda entre “tu” e “vos” — outro pacote incompleto deste aplicativo —, e que ainda sobrevive em alguns dialetos modernos do espanhol como o “voseo” (hoje sem o sentido de cortesia).',
      },
    ],
    pitfalls: ['Achar que “vos” no castelhano medieval já significa a mesma coisa que o “vos”/“voseo” de alguns países latino-americanos hoje: lá a função de cortesia se perdeu, e “vos” passou a ser só mais uma forma íntima de “tú”.'],
    quiz: [
      {
        question: 'Além de “vós” (plural), que outra função “vos” tinha no castelhano medieval?',
        options: ['Forma cortês de segunda pessoa do singular, dirigida a uma só pessoa', 'Nenhuma, só servia pra plural', 'Era um título de nobreza'],
        answer: 'Forma cortês de segunda pessoa do singular, dirigida a uma só pessoa',
        explanation: '“Vos” podia ser dirigido a uma única pessoa, por cortesia, usando as mesmas formas verbais do plural — a mesma lógica do “vos” do francês antigo.',
      },
    ],
  },
  {
    id: 'osp-g3',
    level: 'A1.2',
    title: 'O verbo seer (ser/estar): a mesma palavra que “sentar”',
    emoji: '🧑',
    summary: '“Seer” vem do latim “sedēre” (sentar-se) e, já no castelhano medieval, tinha se fundido com “ser” (do latim “sum”) — a mesma palavra podia significar “sentar”, “ficar” ou “ser”.',
    sections: [
      {
        text: 'Segundo o Wiktionary, “seer” é “ser” com uma origem dupla: parte vem do latim “sedēre” (sentar-se, ficar), parte do latim “sum” (ser). No castelhano medieval, as duas raízes já tinham se misturado numa única conjugação.',
        table: {
          head: ['Pronome', 'Tradução', 'seer (presente)'],
          rows: [
            ['yo', 'eu', 'seyo / seo'],
            ['tú', 'tu', 'sees'],
            ['él / ella', 'ele / ela', 'sie / see'],
            ['nos', 'nós', 'sedemos'],
            ['ellos', 'eles', 'sieden / sien / seen'],
          ],
        },
        examples: [
          ['Yo seo Linu.', 'Eu sou Linu.'],
          ['Nos sedemos amigos.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Confundir “sees” (tu és) com “see”/“sie” (ele/ela é): são pessoas diferentes do mesmo verbo, parecidas na escrita.'],
    quiz: [
      {
        question: 'De que dois verbos latinos “seer” vem?',
        options: ['“sedēre” (sentar) e “sum” (ser)', 'Só de “sum” (ser)', 'Só de “sedēre” (sentar)'],
        answer: '“sedēre” (sentar) e “sum” (ser)',
        explanation: 'O Wiktionary mostra as duas origens se fundindo numa única conjugação já no castelhano medieval — por isso “seer” carrega um pouco do sentido de “ficar/sentar” junto com “ser”.',
      },
    ],
  },
  {
    id: 'osp-g4',
    level: 'A1.2',
    title: 'Sem “sim”: responder repetindo o verbo',
    emoji: '🔁',
    summary: 'O castelhano medieval do período do Cid não tinha uma palavra pra “sim” — “sí” só virou resposta afirmativa dois ou três séculos depois. Pra confirmar algo, repete-se o verbo da pergunta.',
    sections: [
      {
        text: 'Segundo o Wiktionary, “sí” no castelhano medieval era só um advérbio de modo (significando “assim”, do latim “sic”) — não uma partícula de confirmação. Ele só passou a significar “sim” a partir dos séculos XIV-XV, já no fim do período medieval. Pra responder “sim” a uma pergunta no período do Cantar de Mio Cid, repete-se o verbo.',
        examples: [
          ['Avedes un fijo? — Ave.', 'Tens um filho? — Tenho. (lit. “tem”)'],
          ['Sees cavallero? — Seo.', 'És cavaleiro? — Sou.'],
        ],
      },
      {
        heading: 'O mesmo traço do eslavo eclesiástico antigo',
        text: 'Esse jeito de confirmar repetindo o verbo, em vez de usar uma palavra solta pra “sim”, é o mesmo traço que o eslavo eclesiástico antigo (outro pacote incompleto deste aplicativo) também documenta, pelo mesmo motivo: nem toda língua antiga tinha uma partícula de “sim” pronta.',
      },
    ],
    pitfalls: ['Usar “sí” como resposta afirmativa numa frase ambientada no período do Cantar de Mio Cid: a palavra já existia, mas só como “assim” — ainda não tinha o sentido de “sim” que tem hoje.'],
    quiz: [
      {
        question: 'Como se confirmava uma pergunta no castelhano medieval do período do Cid, já que “sí” ainda não significava “sim”?',
        options: ['Repetindo o verbo da pergunta', 'Com a palavra “sí”', 'Com um gesto, nunca por palavra'],
        answer: 'Repetindo o verbo da pergunta',
        explanation: '“Sí” só ganhou o sentido de “sim” a partir dos séculos XIV-XV — antes disso, a confirmação vinha de repetir o verbo da pergunta, como em “Avedes un fijo? — Ave.”',
      },
    ],
  },
  {
    id: 'osp-g5',
    level: 'A2.1',
    title: 'Onze, seze, veynte: números maiores e os ordinais em -eno',
    emoji: '🔢',
    summary: 'Depois do dez, o Wiktionary confirma “onze” (11), “seze” (16), “veynte” (20), “sessaenta” (60) e “ochenta” (80) — e os ordinais em -eno, como “dozeno” (12º) e “noveno” (9º).',
    sections: [
      {
        text: 'A categoria “Old Spanish numerals” do Wiktionary confirma, com página própria, os numerais “diez” (10), “onze” (11), “seze” (16), “veynte” (20), “sessaenta” (60) e “ochenta” (80) — todos do latim, como no espanhol moderno. Este pacote ainda não ensina a sequência completa de 1 a 100: só os números com página própria confirmada entram aqui, a mesma régua de honestidade já usada para o “sí”.',
        table: {
          head: ['Castelhano medieval', 'Número', 'Espanhol moderno'],
          rows: [
            ['onze', '11', 'once'],
            ['seze', '16', 'dieciséis'],
            ['veynte', '20', 'veinte'],
            ['sessaenta', '60', 'sesenta'],
            ['ochenta', '80', 'ochenta'],
          ],
        },
        examples: [['Onze cavalleros.', 'Onze cavaleiros.']],
      },
      {
        heading: 'Os ordinais em -eno',
        text: 'A categoria “Old Spanish adjectives” do Wiktionary também confirma uma família de ordinais terminados em “-eno” (do latim “-enus”): “noveno” (9º), “dozeno” (12º), entre outros. São adjetivos — concordam em gênero e número com o substantivo, como qualquer adjetivo em “-o”.',
        examples: [['El dozeno dia.', 'O décimo segundo dia.']],
      },
    ],
    pitfalls: ['Tentar formar um número entre 21 e 100 que não está nesta lista: nenhuma fonte conferida traz, por exemplo, “trinta” ou “cem” com página própria do castelhano medieval — melhor usar só os confirmados.'],
    quiz: [
      {
        question: 'Como se diz “vinte” no castelhano medieval, segundo o Wiktionary?',
        options: ['veynte', 'vinte', 'veinte'],
        answer: 'veynte',
        explanation: '“Veynte” tem página própria na categoria “Old Spanish numerals” do Wiktionary, com o “y” no lugar do “i” do espanhol moderno “veinte”.',
      },
    ],
  },
  {
    id: 'osp-g6',
    level: 'A2.1',
    title: 'Verbos regulares em -er: comer, bever, entender',
    emoji: '🍽️',
    summary: 'Diferente de “seer” e “aver” (irregulares, já vistos), os verbos regulares em -er seguem uma terminação previsível — a MESMA terminação de “sedemos” (seer) e “avedes” (aver), já confirmadas.',
    sections: [
      {
        text: 'O Wiktionary confirma a existência de “comer” (comer), “bever” (beber) e “entender” (entender) no castelhano medieval, mas nenhuma das três páginas traz uma tabela de conjugação — a mesma lacuna que já valia para “fablar” e “dezir” na primeira leva deste pacote. Por isso, as formas conjugadas usadas aqui seguem a terminação regular da classe -er, a mesma já confirmada nas tabelas de “seer” (sedemos, 1ª pessoa do plural) e “aver” (avedes, 2ª pessoa do plural, cortês): -o, -es, -e, -emos, -edes, -en.',
        table: {
          head: ['Pronome', 'Tradução', 'comer (regular -er)'],
          rows: [
            ['yo', 'eu', 'como'],
            ['tú', 'tu', 'comes'],
            ['él / ella', 'ele / ela', 'come'],
            ['nos', 'nós', 'comemos'],
            ['vos', 'vós (cortês)', 'comedes'],
            ['ellos', 'eles', 'comen'],
          ],
        },
        examples: [
          ['Yo como pan.', 'Eu como pão.'],
          ['Yo bevo vino.', 'Eu bebo vinho.'],
        ],
      },
      {
        heading: 'Por que “yo” aqui, mas não com “aver”',
        text: 'A terminação “-o” da 1ª pessoa é a mais estável do latim ao romance — ela já aparece atestada em “seyo”/“seo” (de “seer”). “Aver” era diferente: a tabela do Wiktionary só trazia formas RECONSTRUÍDAS (marcadas com *) para “yo”, por isso aquele verbo evitava essa pessoa. Os verbos regulares novos não têm esse problema.',
      },
    ],
    pitfalls: ['Usar a terminação “-edes” de vós pensando que é só do “aver”: ela é a terminação regular de QUALQUER verbo em -er na 2ª pessoa do plural/cortês.'],
    quiz: [
      {
        question: 'Como se diz “eu bebo vinho” no castelhano medieval?',
        options: ['Yo bevo vino.', 'Yo bevedes vino.', 'Yo beve vino.'],
        answer: 'Yo bevo vino.',
        explanation: '“Bever” é um verbo regular em -er: a 1ª pessoa do singular termina em “-o”, a mesma terminação já vista em “seyo” (de seer).',
      },
    ],
  },
  {
    id: 'osp-g7',
    level: 'A2.2',
    title: 'O futuro sem terminação fixa: o infinitivo + aver',
    emoji: '🔮',
    summary: 'O castelhano medieval ainda não tinha o futuro como terminação única (“comerei”): usava-se o infinitivo seguido do presente de “aver” — “comer he” é literalmente “comer tenho”, a origem do futuro do espanhol e do português modernos.',
    sections: [
      {
        text: 'Segundo a Wikipédia em inglês, o futuro e o condicional do castelhano medieval ainda não eram plenamente flexionais: eram perifrásticos, formados do infinitivo mais o presente (futuro) ou o imperfeito (condicional) de “aver”. Um exemplo real citado no artigo, do período, é “non gelo empeñar he” (“eu não vou penhorá-lo a ele”) — o infinitivo “empeñar” seguido de “he” (tenho/hei).',
        examples: [
          ['Comer he.', '(Eu) comerei. (literalmente, “comer tenho”)'],
          ['Fablar he con el rey.', '(Eu) falarei com o rei.'],
        ],
      },
      {
        heading: 'A origem do futuro moderno',
        text: 'Com o tempo, “comer he” se fundiu numa palavra só: “comeré” no espanhol moderno, “comerei” no português. O castelhano medieval mostra esse processo ainda na metade do caminho, com as duas palavras separadas (e até separáveis por um pronome no meio, como em “empeñar-gelo-he”, um fenômeno chamado mesóclise, que o português ainda guarda em frases como “fazê-lo-ei”).',
      },
    ],
    pitfalls: ['Juntar “comer” e “he” numa palavra só (“comeré”): no castelhano medieval do Cantar de Mio Cid, ainda são duas palavras separadas.'],
    quiz: [
      {
        question: 'Como o castelhano medieval formava o futuro, antes de existir uma terminação própria?',
        options: ['Infinitivo + presente de “aver” (ex.: “comer he”)', 'Infinitivo + “ir” antes (ex.: “vou comer”)', 'Já tinha a mesma terminação do espanhol moderno'],
        answer: 'Infinitivo + presente de “aver” (ex.: “comer he”)',
        explanation: 'A Wikipédia cita o exemplo real “non gelo empeñar he”: o futuro ainda era perifrástico, com o infinitivo seguido do presente de “aver” — a origem do futuro do espanhol e do português modernos.',
      },
    ],
  },
  {
    id: 'osp-g8',
    level: 'A2.2',
    title: 'O passado composto dos verbos de movimento: seer, não aver',
    emoji: '🏇',
    summary: 'Para verbos de movimento como “ir” e “venir”, o castelhano medieval formava o passado composto com “seer” (não “aver”) — “son llegadas” é “chegaram”, com o particípio concordando em gênero e número com o sujeito, como no italiano e no francês.',
    sections: [
      {
        text: 'Segundo a Wikipédia em inglês, verbos de movimento como “ir” e “venir” formavam o perfeito/passado composto com “seer”, não com “aver” — padrão que o italiano (“essere”) e o francês (“être”) ainda guardam, e que o espanhol e o português modernos perderam, usando só “ter”/“haber”. O exemplo real citado é “Las mugieres son llegadas a Castiella” (“As mulheres chegaram a Castela”): “son” (3ª pessoa do plural de “seer”) + “llegadas” (particípio no feminino plural, concordando com “las mugieres”).',
        examples: [['Las mugieres son llegadas a Castiella.', 'As mulheres chegaram a Castela.']],
      },
      {
        heading: 'A posse, ao contrário, usava “aver”',
        text: 'A mesma fonte mostra o oposto para posse: onde o espanhol moderno usa “tener”, o castelhano medieval usava “aver” — “Pedro ha dos fijas” (“Pedro tem duas filhas”). “Aver” e “seer” dividiam funções que hoje se misturaram.',
      },
    ],
    pitfalls: ['Usar “aver” para o passado composto de um verbo de movimento, pensando no “ter chegado” do português: no castelhano medieval do período do Cid, esse papel era de “seer”.'],
    quiz: [
      {
        question: 'Com qual verbo o castelhano medieval formava o passado composto de “llegar” (chegar), segundo o exemplo “Las mugieres ___ llegadas a Castiella”?',
        options: ['son (de seer)', 'an (de aver)', 'van (de ir)'],
        answer: 'son (de seer)',
        explanation: 'Verbos de movimento usavam “seer”, não “aver”, para o passado composto — o mesmo padrão que o italiano e o francês ainda guardam hoje.',
      },
    ],
  },
];
