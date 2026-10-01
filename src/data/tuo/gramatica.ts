import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tukano — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: ver o
 * cabeçalho de vocabulario.ts. Os textos longos usam crase só por causa dos apóstrofos do tukano.
 */
export const GRAMMAR_TUO: GrammarTopic[] = [
  {
    id: 'tuo-g1',
    level: 'A1.1',
    title: 'Tom: três alturas que mudam a palavra',
    emoji: '🎵',
    summary: 'O tukano é uma língua tonal: a altura da voz muda o sentido da palavra, e a escrita marca isso com acentos.',
    sections: [
      {
        text: `O tukano tem três tons: ascendente, alto e baixo. Eles não são só “entonação” (como a voz que sobe numa pergunta em português) — são parte da palavra, do mesmo jeito que uma consoante ou uma vogal: trocar o tom pode trocar o sentido. A ortografia usada pelos linguistas marca o tom ascendente com acento agudo (á, í, ú) e o tom alto com circunflexo (â, ô); quando a vogal não tem nenhum acento de tom, o tom é baixo.`,
        table: {
          head: ['Marca', 'Tom', 'Exemplo'],
          rows: [
            ['á, í, ú', 'ascendente', "anuáto (olá), anutí (como está?), anú'u (eu estou bem)"],
            ['â, ô', 'alto', 'koô (ela), ɨ̃sâ (nós, exclusivo)'],
            ['sem acento', 'baixo', 'masa (gente), aɨ (tá bom)'],
          ],
        },
        examples: [
          ['Anuáto! Anutí?', 'Olá! Como você está?'],
          ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o tom como se fosse só ênfase emocional (gritar mais alto, falar mais devagar): no tukano, o tom muda a identidade da palavra, não o humor de quem fala.',
      'Ignorar os acentos ao escrever: “anutí” sem o acento vira outra coisa para quem já sabe tukano — o acento não é decoração.',
    ],
    quiz: [
      { question: 'O que o acento agudo (á, í, ú) marca no tukano?', options: ['Tom ascendente', 'Tom baixo', 'Nasalização'], answer: 'Tom ascendente', explanation: 'O acento agudo marca o tom ascendente, um dos três tons fonológicos do tukano.' },
      { question: 'Quantos tons tem o tukano?', options: ['Três', 'Dois', 'Cinco'], answer: 'Três', explanation: 'Ascendente, alto e baixo (este último sem marca na escrita).' },
    ],
  },
  {
    id: 'tuo-g2',
    level: 'A1.1',
    title: 'Evidencialidade: como você sabe o que está dizendo',
    emoji: '👁️',
    summary: 'O verbo do tukano quase sempre marca se o falante viu, sentiu, ouviu contar ou deduziu o que está dizendo.',
    sections: [
      {
        text: `Em português, dá para dizer “Pedro gosta dela” sem explicar como você sabe disso. No tukano isso é quase impossível: o verbo carrega um sufixo obrigatório de evidencialidade, que diz a fonte da informação — se o falante viu com os próprios olhos (visto), sentiu/percebeu (sentido), alguém contou (reportado) ou o falante concluiu por dedução. No modo “visto”, a 3ª pessoa do singular ainda se divide por gênero: “-mi” (não-feminino) e “-mo” (feminino); as outras pessoas (eu, tu, nós, vocês) usam “-'” nesse mesmo modo.`,
        table: {
          head: ['Quem fala', 'Sufixo (modo visto)', 'Exemplo'],
          rows: [
            ['3ª pessoa, não-feminino', '-mi', "Péduru koô-re tɨ'sâ-mi. (Pedro gosta dela.)"],
            ['3ª pessoa, feminino', '-mo', "ye'pâ-maso nii-á-mo (ela é ye'pâ-maso)"],
            ['eu, tu, nós, vocês', "-'", "yɨ'ɨ … nii-' (eu sou…)"],
          ],
        },
        examples: [
          ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela. (o falante viu isso acontecer)'],
          ["Yɨ'ɨ ke'ra ye'pâ-masɨ nii-'.", "Eu também sou ye'pâ-masɨ."],
        ],
      },
    ],
    pitfalls: [
      'Achar que o sufixo do verbo só marca a pessoa (eu/tu/ele), como em português: ele também marca a fonte da informação — de onde você soube o que está dizendo.',
      'Usar sempre o mesmo sufixo por hábito: trocar “-mi”/“-mo” muda o gênero de quem é descrito, não só um detalhe de estilo.',
    ],
    quiz: [
      { question: 'O que o sufixo do verbo tukano marca, além da pessoa?', options: ['Como o falante sabe a informação (visto, sentido, reportado, deduzido)', 'O tempo verbal, só isso', 'O gênero do falante, nunca do sujeito'], answer: 'Como o falante sabe a informação (visto, sentido, reportado, deduzido)', explanation: 'Essa marcação obrigatória da fonte do conhecimento é a evidencialidade do tukano.' },
      { question: 'Em “Péduru koô-re tɨ\'sâ-mi”, o que o sufixo “-mi” indica?', options: ['3ª pessoa não-feminina, modo visto', '1ª pessoa, modo reportado', 'Pergunta'], answer: '3ª pessoa não-feminina, modo visto', explanation: 'Péduru é um sujeito não-feminino (nome masculino), e o falante viu a cena.' },
    ],
  },
  {
    id: 'tuo-g3',
    level: 'A1.2',
    title: 'Sujeito, objeto, verbo — e o sufixo “-re”',
    emoji: '🔤',
    summary: 'A ordem preferida das palavras é sujeito-objeto-verbo, e um sufixo “-re” marca o objeto quando ele é pessoa.',
    sections: [
      {
        text: `A ordem das palavras no tukano tende a ser livre, mas a ordem preferida começa pelo sujeito e termina no verbo, com o objeto no meio: sujeito-objeto-verbo (SOV) — diferente do português, que prefere sujeito-verbo-objeto. Além disso, existe um sufixo chamado “referencial”, “-re”, que marca o objeto da frase: ele é opcional na maioria dos casos, mas se torna obrigatório quando o objeto é uma pessoa ou um pronome pessoal.`,
        table: {
          head: ['Frase', 'Tradução', 'Estrutura'],
          rows: [
            ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.', 'Péduru (S) + koô-re (O, com -re por ser pronome pessoal) + tɨ\'sâ-mi (V)'],
          ],
        },
        examples: [
          ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o verbo logo depois do sujeito, como em português (SVO): a ordem preferida do tukano termina no verbo.',
      'Esquecer o “-re” quando o objeto é uma pessoa ou um pronome: nesse caso ele deixa de ser opcional.',
    ],
    quiz: [
      { question: 'Qual é a ordem preferida das palavras no tukano?', options: ['Sujeito-objeto-verbo', 'Sujeito-verbo-objeto', 'Verbo-sujeito-objeto'], answer: 'Sujeito-objeto-verbo', explanation: 'O verbo tende a vir por último, com o objeto entre o sujeito e o verbo.' },
      { question: 'Quando o sufixo “-re” é obrigatório?', options: ['Quando o objeto é pessoa ou pronome pessoal', 'Sempre, em qualquer objeto', 'Só nas perguntas'], answer: 'Quando o objeto é pessoa ou pronome pessoal', explanation: 'Com objetos não humanos, o “-re” costuma ser opcional.' },
    ],
  },
  {
    id: 'tuo-g4',
    level: 'A1.2',
    title: 'Feminino e não-feminino na 3ª pessoa',
    emoji: '🧑‍🤝‍🧑',
    summary: 'O tukano não tem gênero gramatical como o português (artigos “o/a”), mas distingue feminino e não-feminino só na 3ª pessoa de seres animados.',
    sections: [
      {
        text: `Diferente do português, o tukano não marca “o”/“a” nos substantivos comuns. Mas há uma distinção real de gênero: na 3ª pessoa do singular de seres animados, pronomes e verbos mudam conforme o referente é feminino ou não-feminino. Os pronomes “kɨ̃ɨ” (ele) e “koô” (ela) são um par; no modo “visto”, os sufixos verbais “-mi” (não-feminino) e “-mo” (feminino) são outro. Essa mesma lógica aparece na própria palavra que nomeia o povo tukano: “ye'pâ-maso” (ela é ye'pâ-masa) termina diferente de “ye'pâ-masɨ” (ele/eu sou ye'pâ-masa).`,
        table: {
          head: ['Não-feminino', 'Feminino', 'Contexto'],
          rows: [
            ['kɨ̃ɨ (ele)', 'koô (ela)', 'pronome'],
            ["-mi", '-mo', 'sufixo verbal, modo visto, 3ª pessoa'],
            ["ye'pâ-masɨ", "ye'pâ-maso", "autodesignação, conforme quem fala"],
          ],
        },
        examples: [
          ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.'],
          ["Yɨ'ɨ ke'ra ye'pâ-masɨ nii-'.", "Eu também sou ye'pâ-masɨ."],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “o”/“a” em cada substantivo, como em português: a distinção de gênero do tukano só aparece na 3ª pessoa de seres animados, não em objetos ou substantivos comuns.',
      'Confundir “kɨ̃ɨ” (ele) com “koô” (ela) pela grafia parecida: preste atenção ao tom (circunflexo em “koô”) e à nasalização (til em “kɨ̃ɨ”).',
    ],
    quiz: [
      { question: 'O tukano marca gênero gramatical em todos os substantivos, como o português?', options: ['Não — só na 3ª pessoa de seres animados', 'Sim, com artigos “o”/“a”', 'Só nos numerais'], answer: 'Não — só na 3ª pessoa de seres animados', explanation: 'Substantivos comuns do tukano não levam marca de gênero; a distinção aparece em pronomes e verbos na 3ª pessoa.' },
      { question: 'Qual pronome quer dizer “ela”?', options: ['koô', 'kɨ̃ɨ', 'naâ'], answer: 'koô', explanation: '“Kɨ̃ɨ” é “ele”, e “naâ” é “eles/elas” (plural).' },
    ],
  },
];
