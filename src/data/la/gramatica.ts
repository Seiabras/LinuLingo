import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do latim clássico — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Os quatro tópicos de A2 (acusativo, perfeito, imperfeito e ablativo) seguem as tabelas
 * de declinação/conjugação padrão ensinadas em gramáticas de referência (Allen & Greenough's "New
 * Latin Grammar", de domínio público, e Wheelock's Latin) e confirmadas verbete por verbete no
 * Wikcionário em inglês (en.wiktionary.org).
 */
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
    summary: 'Seis pronomes de sujeito, quase sempre dispensáveis porque a terminação do verbo já diz quem fala; o verbo “sum” ("ser/estar") conjugado no presente.',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito costuma sumir: “Romanus sum” já é “(eu) sou romano”. Usa-se o pronome só para dar ênfase ou evitar ambiguidade.',
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
    quiz: [{ question: 'Como se diz "vocês são" em latim?', options: ['vos estis', 'vos es', 'nos sumus'], answer: 'vos estis', explanation: '“Vos” é a segunda pessoa do plural, com a forma “estis” do verbo sum.' }],
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
        text: 'Como os adjetivos em geral, “meus” ("meu/minha") muda de terminação para combinar com o gênero da palavra que acompanha: meus (masculino), mea (feminino), meum (neutro).',
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
  {
    id: 'la-g5',
    level: 'A2.1',
    title: 'O caso acusativo: o objeto direto',
    emoji: '🎯',
    summary: 'O latim marca o objeto direto (quem recebe a ação) com uma terminação própria, o acusativo: -um nos substantivos masculinos da 2ª declinação (amicus→amicum), -am nos femininos da 1ª (aqua→aquam), e a mesma forma do nominativo nos neutros (vinum→vinum).',
    sections: [
      {
        text: 'Diferente do português, que marca o objeto pela posição na frase, o latim marca pela TERMINAÇÃO da palavra — por isso a ordem das palavras é livre: "Marcus amat Iuliam" e "Iuliam amat Marcus" significam a mesma coisa, porque é o -am de "Iuliam" que diz quem é amada, não a posição.',
        table: {
          head: ['Declinação', 'Nominativo (sujeito)', 'Acusativo (objeto direto)'],
          rows: [
            ['1ª (-a, feminino): aqua', 'aqua', 'aquam'],
            ['2ª (-us, masculino): amicus', 'amicus', 'amicum'],
            ['2ª (-um, neutro): vinum', 'vinum', 'vinum (igual)'],
          ],
        },
        examples: [
          ['Marcus amicum videt.', 'Marcus vê um amigo. ("amicum" é o objeto direto)'],
          ['Vinum bibo.', 'Eu bebo vinho. (neutro: igual ao nominativo)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que a ordem das palavras mude o sentido, como em português: no latim, é a terminação -um/-am que diz quem é o objeto, não a posição na frase.',
      'Usar o nominativo (amicus) no lugar do acusativo (amicum) como objeto direto: "Marcus amicus videt" está errado — precisa ser "Marcus amicum videt".',
    ],
    quiz: [{ question: 'Como se diz "eu vejo um amigo" em latim?', options: ['Amicum video.', 'Amicus video.', 'Amico video.'], answer: 'Amicum video.', explanation: '"Amicus" (2ª declinação, masculino) vira "amicum" no acusativo, porque é o objeto direto do verbo "video".' }],
  },
  {
    id: 'la-g6',
    level: 'A2.1',
    title: 'O perfeito: o que já aconteceu',
    emoji: '⏳',
    summary: 'O perfeito conta uma ação já concluída no passado (como o pretérito perfeito do português). Usa um radical próprio (o "perfeito"), geralmente diferente do presente, com as terminações -i, -isti, -it, -imus, -istis, -erunt.',
    sections: [
      {
        table: {
          head: ['Pronome', 'amare → amavi', 'habere → habui', 'esse → fui'],
          rows: [
            ['ego', 'amavi', 'habui', 'fui'],
            ['tu', 'amavisti', 'habuisti', 'fuisti'],
            ['is/ea', 'amavit', 'habuit', 'fuit'],
            ['nos', 'amavimus', 'habuimus', 'fuimus'],
            ['vos', 'amavistis', 'habuistis', 'fuistis'],
            ['ei/eae', 'amaverunt', 'habuerunt', 'fuerunt'],
          ],
        },
        text: 'Repare que o radical muda (ama- → amav-; habe- → habu-; es- → fu-), mas as terminações (-i, -isti, -it, -imus, -istis, -erunt) são sempre as mesmas, para qualquer verbo. O latim não distingue "eu amei" de "eu tenho amado" (pretérito perfeito simples × composto do português): "amavi" serve para os dois.',
        examples: [
          ['Heri Romam vidi.', 'Ontem eu vi Roma.'],
          ['Marcus fuit Romanus.', 'Marcus foi romano.'],
        ],
      },
    ],
    pitfalls: ['Confundir o radical do presente com o do perfeito: "amo" (presente, eu amo) e "amavi" (perfeito, eu amei) usam radicais diferentes — não dá para prever um a partir do outro sem aprender os dois.'],
    quiz: [{ question: 'Como se diz "eu fui romano" em latim?', options: ['Fui Romanus.', 'Sum Romanus.', 'Eram Romanus.'], answer: 'Fui Romanus.', explanation: '"Fui" é o perfeito de "esse" (ser/estar); "sum" é o presente, e "eram" seria o imperfeito.' }],
  },
  {
    id: 'la-g7',
    level: 'A2.2',
    title: 'O imperfeito: como as coisas eram',
    emoji: '🕰️',
    summary: 'O imperfeito descreve uma ação habitual ou em curso no passado ("eu costumava morar", "eu estava morando"), diferente do perfeito, que conta um fato concluído. Terminação -bam na 1ª/2ª conjugação.',
    sections: [
      {
        table: {
          head: ['Pronome', 'amare', 'habere', 'esse'],
          rows: [
            ['ego', 'amabam', 'habebam', 'eram'],
            ['tu', 'amabas', 'habebas', 'eras'],
            ['is/ea', 'amabat', 'habebat', 'erat'],
            ['nos', 'amabamus', 'habebamus', 'eramus'],
            ['vos', 'amabatis', 'habebatis', 'eratis'],
            ['ei/eae', 'amabant', 'habebant', 'erant'],
          ],
        },
        text: 'O contraste perfeito × imperfeito é o mesmo que o português pretérito perfeito × imperfeito: "heri Romam vidi" (perfeito: um fato pontual, "ontem vi Roma") contra "puer Romae habitabam" (imperfeito: situação habitual, "quando eu era menino, morava em Roma").',
        examples: [
          ['Puer in villa habitabam.', 'Quando eu era menino, morava na propriedade de campo.'],
          ['Pater meus medicus erat.', 'Meu pai era médico. (característica duradoura, imperfeito)'],
        ],
      },
    ],
    pitfalls: ['Usar o perfeito (amavi) onde o sentido é de hábito repetido: "puer in villa habitabam" (hábito, imperfeito) não é "habitavi" (um único fato pontual).'],
    quiz: [{ question: 'Como se diz "eu era feliz quando era menino"?', options: ['Puer laetus eram.', 'Puer laetus fui.', 'Puer laetus sum.'], answer: 'Puer laetus eram.', explanation: '"Eram" (imperfeito de "esse") descreve um estado duradouro no passado, não um fato pontual.' }],
  },
  {
    id: 'la-g8',
    level: 'A2.2',
    title: 'O caso ablativo: lugar, instrumento e companhia',
    emoji: '📍',
    summary: 'O ablativo marca "onde" (com "in"), "com o quê" (sem preposição, instrumento) e "com quem" (com "cum"). Terminação -a nos femininos da 1ª declinação, -o nos masculinos/neutros da 2ª.',
    sections: [
      {
        table: {
          head: ['Declinação', 'Nominativo', 'Ablativo'],
          rows: [
            ['1ª (-a): via', 'via', 'via (longo, não escrito com mácron)'],
            ['2ª (-us): amicus', 'amicus', 'amico'],
            ['2ª (-um): forum', 'forum', 'foro'],
          ],
        },
        text: '"In" + ablativo marca localização ("in foro", na praça do mercado); "cum" + ablativo marca companhia ("cum amico", com um amigo); o ablativo sozinho, sem preposição, marca o instrumento ("gladio pugnat", ele luta com uma espada).',
        examples: [
          ['In foro ambulo.', 'Eu caminho na praça do mercado.'],
          ['Cum amico laboro.', 'Eu trabalho com um amigo.'],
        ],
      },
    ],
    pitfalls: ['Usar o acusativo depois de "in" quando o sentido é de lugar ONDE (não para onde): "in foro" (lugar onde, ablativo) é diferente de "in forum" (movimento para dentro, acusativo) — uma distinção parecida com a do -n esperantista.'],
    quiz: [{ question: 'Como se diz "eu trabalho com um amigo" em latim?', options: ['Cum amico laboro.', 'Cum amicum laboro.', 'Amico laboro.'], answer: 'Cum amico laboro.', explanation: '"Cum" (com) exige o caso ablativo: "amico", não o acusativo "amicum".' }],
  },
];
