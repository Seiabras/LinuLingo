import type { GrammarTopic } from '../types';

/** Tópicos de gramática do latim clássico — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LA: GrammarTopic[] = [
  {
    id: 'la-g1',
    level: 'A1.1',
    title: 'Pronúncia: a reconstrução clássica restaurada',
    emoji: '🔤',
    summary:
      'Este curso usa a pronúncia clássica restaurada (como o latim soava por volta da época de César e Cícero), e não a pronúncia eclesiástica "italianizada" usada hoje na Igreja Católica e em boa parte da música sacra.',
    sections: [
      {
        text:
          'O latim mudou de som ao longo dos séculos. A pronúncia eclesiástica (onde "c" antes de e/i soa "tch" e "v" soa como o v do português) é uma inovação medieval italiana. A pronúncia clássica restaurada é a reconstrução acadêmica de como os próprios romanos falavam, feita a partir de descrições de gramáticos antigos, de inscrições com erros reveladores e da métrica da poesia latina. É a pronúncia mais usada hoje no ensino universitário do latim — e a que este curso adota.',
      },
      {
        heading: 'As letras que mais confundem quem já fala português',
        table: {
          head: ['Letra/grupo', 'Som', 'Exemplo'],
          rows: [
            ['c (sempre)', '[k], nunca "s" ou "tch"', 'Caesar [ˈkai̯.sar] (não "SAI-sar" nem "TCHÉ-sar")'],
            ['v', '[w], como o w do inglês "water"', 'vale [ˈwa.le]'],
            ['qu', '[kʷ], k e w grudados numa só sílaba', 'quinque [ˈkʷin.kʷe]'],
            ['ae', 'ditongo [ai̯], como o "ai" de "pai"', 'Caesar [ˈkai̯.sar]'],
            ['gn', '[ŋn], um "n" nasalado seguido de n', 'magnus [ˈmaŋ.nus]'],
            ['h', 'aspiração leve, mas pronunciada (nunca muda)', 'habeo [ˈha.be.o]'],
          ],
        },
        examples: [
          ['Vinum bonum est.', 'O vinho é bom. (v = [w]: "UI-num BO-num est")'],
          ['Caesar consul erat.', 'César era cônsul. (exemplo clássico famoso, com o "ae" = [ai̯])'],
        ],
      },
    ],
    pitfalls: [
      'Ler o "c" como em português (som de "s" antes de e/i, como em "cidade"): no latim clássico restaurado, "c" é sempre [k], até em "Caesar" [ˈkai̯sar].',
      'Ler o "v" como o v labiodental do português (encostando o lábio de baixo nos dentes de cima): no latim restaurado, "v" é só [w], feito com os lábios, como o w do inglês.',
    ],
    quiz: [
      {
        question: 'Como soa o "c" em "Caesar", na pronúncia clássica restaurada?',
        options: ['[k], sempre', '[s], como em "cidade"', '[tʃ], som de "tch"'],
        answer: '[k], sempre',
        explanation: 'A pronúncia clássica não tem o "c" mole: ele é sempre [k], mesmo antes de e/i. O som "tch"/"s" é uma inovação bem posterior (pronúncia eclesiástica).',
      },
      {
        question: 'Como soa o "v" em "vinum"?',
        options: ['[w]', '[v], como no português', '[b]'],
        answer: '[w]',
        explanation: 'No latim restaurado, "v" é sempre [w]; o som [v] do português é uma inovação das línguas românicas, posterior ao latim clássico.',
      },
    ],
  },
  {
    id: 'la-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo sum',
    emoji: '🙋',
    summary: 'Seis pronomes de sujeito, quase sempre dispensáveis porque a terminação do verbo já diz quem fala; o verbo «sum» ("ser/estar") conjugado no presente.',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito costuma sumir: «Romanus sum» já é «(eu) sou romano». Usa-se o pronome só para dar ênfase ou evitar ambiguidade.',
        table: {
          head: ['Pronome', 'Tradução', 'sum (presente)'],
          rows: [
            ['ego', 'eu', 'sum'],
            ['tu', 'você', 'es'],
            ['is / ea', 'ele / ela', 'est'],
            ['nos', 'nós', 'sumus'],
            ['vos', 'vocês', 'estis'],
            ['ei / eae', 'eles / elas', 'sunt'],
          ],
        },
        examples: [
          ['Romanus sum.', 'Sou romano.'],
          ['Vos estis amici mei.', 'Vocês são meus amigos.'],
        ],
      },
    ],
    pitfalls: ['Confundir "es" (tu és) com "est" (ele/ela é): são pessoas diferentes do mesmo verbo, mas se parecem bastante na escrita.'],
    quiz: [{ question: 'Como se diz "vocês são" em latim?', options: ['vos estis', 'vos es', 'nos sumus'], answer: 'vos estis', explanation: '«Vos» é a segunda pessoa do plural, com a forma «estis» do verbo sum.' }],
  },
  {
    id: 'la-g3',
    level: 'A1.2',
    title: 'Sem artigo: o gênero dos substantivos e o possessivo meus/mea',
    emoji: '📘',
    summary: 'O latim não tem artigo definido nem indefinido — "domus" já pode ser "a casa", "uma casa" ou só "casa". O gênero costuma aparecer na terminação: -us/-er (masculino), -a (feminino), -um (neutro).',
    sections: [
      {
        text: 'Diferente do português, do galego e do espanhol, o latim nunca teve palavras para "o", "a", "um" ou "uma". Isso significa que uma frase como "domus parva est" pode ser traduzida como "a casa é pequena", "uma casa é pequena" ou só "casa pequena é" — o contexto decide.',
        examples: [
          ['Domus parva est.', 'A casa é pequena. / Uma casa é pequena.'],
          ['Vinum bonum est.', 'O vinho é bom.'],
        ],
      },
      {
        heading: 'O possessivo meus/mea/meum concorda com a palavra',
        text: 'Como os adjetivos em geral, «meus» ("meu/minha") muda de terminação para combinar com o gênero da palavra que acompanha: meus (masculino), mea (feminino), meum (neutro).',
        table: {
          head: ['Gênero', 'Meu/minha', 'Exemplo'],
          rows: [
            ['Masculino', 'meus', 'pater meus (meu pai)'],
            ['Feminino', 'mea', 'mater mea (minha mãe)'],
            ['Neutro', 'meum', 'vinum meum (meu vinho)'],
          ],
        },
        examples: [
          ['Pater meus Romanus est.', 'Meu pai é romano.'],
          ['Familia mea magna est.', 'Minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir "o"/"a" para o latim: não existe artigo; "domus" sozinha já pode significar "a casa", "uma casa" ou só "casa".',
      'Usar sempre "meus", sem concordância: "meus" só serve com palavras masculinas; use "mea" com femininas (mater mea) e "meum" com neutras (vinum meum).',
    ],
    quiz: [{ question: 'Como se diz "minha mãe" em latim?', options: ['mater mea', 'mater meus', 'mater meum'], answer: 'mater mea', explanation: '"Mater" é feminina, então o possessivo concorda na forma feminina: "mea".' }],
  },
  {
    id: 'la-g4',
    level: 'A1.2',
    title: 'Sum faz o trabalho de "ser" e de "estar"',
    emoji: '🧭',
    summary: 'O português (e o galego, e o espanhol) usa dois verbos onde o latim usa só um: "sum" cobre tanto a identidade e a origem quanto a localização e o estado — sem distinção nenhuma.',
    sections: [
      {
        text: 'Onde o português diz "Roma é uma cidade" (identidade, com "ser") e "eu estou em Roma" (localização, com "estar"), o latim usa o mesmo verbo, "sum", para os dois casos: "Roma urbs est" e "Romae sum". A distinção ser/estar é uma invenção bem mais tardia do português, do galego e do espanhol — nem o latim, nem o francês, nem o italiano a têm.',
        examples: [
          ['Roma urbs magna est.', 'Roma é uma cidade grande. (identidade)'],
          ['Marcus in domo est.', 'Marcus está em casa. (localização, com "in" + o lugar)'],
          ['Vinum in mensa est.', 'O vinho está na mesa.'],
        ],
      },
    ],
    pitfalls: ['Procurar um segundo verbo "estar" separado: no latim clássico não existe — "sum" resolve os dois sentidos que o português separa.'],
    quiz: [{ question: 'Como se diz "Marcus está em casa" em latim?', options: ['Marcus in domo est.', 'Marcus in domo stat.', 'Marcus domus est.'], answer: 'Marcus in domo est.', explanation: 'O latim usa o mesmo verbo "sum" tanto para identidade quanto para localização; não há um verbo "estar" separado.' }],
  },
];
