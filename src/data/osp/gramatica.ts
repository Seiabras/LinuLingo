import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do castelhano medieval — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wiktionary (seção “Old Spanish” de cada palavra citada, com declinação/conjugação —
 * “seer”, “aver”, “vos”, “mio”); Wikipédia em inglês (“Old Spanish language” — período, sons,
 * gramática) e (“Cantar de Mio Cid” — a obra mais famosa do período, composta entre 1140 e 1207,
 * manuscrito de Per Abbat datado de 1207).
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
];
