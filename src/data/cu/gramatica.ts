import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do eslavo eclesiástico antigo — por enquanto só A1.1 e A1.2 (pacote
 * incompleto). Fontes: Wiktionary (en.wiktionary.org, verbetes individuais, seção "Old Church
 * Slavonic", tabelas de declinação/conjugação conferidas uma a uma via WebFetch); Wikipedia
 * (inglês) "Old Church Slavonic" e "Early Cyrillic alphabet" pro contexto histórico.
 */
export const GRAMMAR_CU: GrammarTopic[] = [
  {
    id: 'cu-g1',
    level: 'A1.1',
    title: 'Sem "sim": como responder repetindo o verbo',
    emoji: '👍',
    summary: 'O eslavo eclesiástico antigo não tem uma palavra simples para "sim" — a resposta afirmativa repete o verbo da pergunta, do mesmo jeito que o latim e várias línguas indo-europeias antigas faziam.',
    sections: [
      {
        text: 'Se alguém pergunta "Тꙑ ли ѥси чловѣкъ?" (você é uma pessoa?), a resposta não é uma palavra solta de "sim" — é repetir o verbo na pessoa certa: "Ѥсмь" (eu sou). Pra responder "não", usa-se de verdade a negação "не" antes do verbo: "Не ѥсмь" (eu não sou).',
        table: {
          head: ['Pergunta', 'Resposta afirmativa', 'Resposta negativa'],
          rows: [
            ['Тꙑ ли ѥси братъ?', 'Ѥсмь. (eu sou)', 'Не ѥсмь. (eu não sou)'],
            ['Имаши ли хлѣбъ?', 'Имамь. (eu tenho)', 'Не имамь. (eu não tenho)'],
          ],
        },
        examples: [
          ['Тꙑ ли ѥси чловѣкъ? — Ѥсмь.', 'Você é uma pessoa? — Sou.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra solta pra "sim": ela não existe nesta língua — a resposta certa repete o verbo da pergunta.'],
    quiz: [
      {
        question: 'Como se responde "sim" a uma pergunta em eslavo eclesiástico antigo?',
        options: ['Repetindo o verbo da pergunta, na pessoa certa', 'Com a palavra "да"', 'Com a palavra "ли"'],
        answer: 'Repetindo o verbo da pergunta, na pessoa certa',
        explanation: 'Não existe uma partícula simples de "sim" nesta língua — "да" nesse período só significa "para que/a fim de". A resposta afirmativa repete o verbo.',
      },
    ],
  },
  {
    id: 'cu-g2',
    level: 'A1.1',
    title: 'O verbo быти e o número DUAL',
    emoji: '🙋',
    summary: 'O verbo "быти" (ser/estar) tem seis formas no presente — mas, além de singular e plural, o eslavo eclesiástico antigo também tem o número DUAL, usado só quando se fala de exatamente duas pessoas ou coisas.',
    sections: [
      {
        text: 'Como em português, o pronome de sujeito pode sumir: "ѥсмь чловѣкъ" já quer dizer "(eu) sou uma pessoa". Mas repare na coluna do meio da tabela: o DUAL não é nem singular nem plural — é uma terceira categoria, só para "nós dois" ou "vocês dois", que o português nunca teve (embora o latim e o grego antigo também tivessem algo parecido).',
        table: {
          head: ['Pessoa', 'Singular', 'Dual (só "os dois")', 'Plural (três ou mais)'],
          rows: [
            ['1ª', 'ѥсмь (eu sou)', 'ѥсвѣ (nós dois somos)', 'ѥсмъ (nós somos)'],
            ['2ª', 'ѥси (você é)', 'ѥста (vocês dois são)', 'ѥсте (vocês são)'],
            ['3ª', 'ѥстъ (ele/ela é)', 'ѥсте/ѥста (eles dois são)', 'сѫтъ (eles são)'],
          ],
        },
        examples: [
          ['Азъ ѥсмь чловѣкъ.', 'Eu sou uma pessoa.'],
          ['Мꙑ ѥсмъ добри.', 'Nós (três ou mais) somos bons.'],
        ],
      },
    ],
    pitfalls: ['Achar que "ѥсмъ" (nós, plural) e "ѥсвѣ" (nós dois, dual) são a mesma coisa: o dual só se usa quando são EXATAMENTE duas pessoas ou coisas.'],
    quiz: [
      {
        question: 'O número DUAL do eslavo eclesiástico antigo é usado quando...',
        options: ['Se fala de exatamente duas pessoas ou coisas', 'Se fala de qualquer quantidade maior que uma', 'Só em perguntas'],
        answer: 'Se fala de exatamente duas pessoas ou coisas',
        explanation: 'O dual é uma categoria gramatical própria, diferente do plural comum (três ou mais) — o português nunca teve essa distinção.',
      },
    ],
  },
  {
    id: 'cu-g3',
    level: 'A1.2',
    title: 'O alfabeto glagolítico e o cirílico',
    emoji: 'Ⰰ',
    summary: 'O eslavo eclesiástico antigo foi escrito em DOIS alfabetos diferentes: primeiro o glagolítico (criado por Cirilo, 863), depois o cirílico (criado por discípulos dele, Bulgária, por volta de 893).',
    sections: [
      {
        text: 'Cirilo criou o glagolítico do zero para a missão à Grande Morávia, porque nenhuma escrita grega ou latina servia bem para os sons eslavos. Depois, no Primeiro Império Búlgaro, discípulos de Cirilo e Metódio (como Clemente de Ôrhida) criaram um segundo alfabeto baseado na escrita grega uncial — o cirílico, mais fácil de aprender para quem já lia grego. Este curso ensina as letras cirílicas (treino de alfabeto em separado), porque é delas, não das glagolíticas, que vêm os alfabetos do russo, do búlgaro, do sérvio e de outras línguas eslavas modernas.',
        examples: [
          ['домъ (cirílico) = ⰴⱁⰿⱏ (glagolítico)', 'as duas escritas representam a mesma palavra, "casa"'],
        ],
      },
      {
        heading: 'ъ e ь eram vogais de verdade, não "sinais mudos"',
        text: 'No russo moderno, ъ e ь são só sinais (duro/mole) sem som próprio. No eslavo eclesiástico antigo, eles eram vogais bem curtas e reduzidas, pronunciadas de verdade — ъ soava perto de um "u" rápido, e ь perto de um "i" rápido.',
      },
    ],
    pitfalls: ['Aplicar a regra do russo moderno (ъ/ь são mudos) ao eslavo eclesiástico antigo: nesta língua, eram vogais curtas pronunciadas de verdade.'],
    quiz: [
      {
        question: 'Qual alfabeto Cirilo criou primeiro, para a missão à Grande Morávia?',
        options: ['O glagolítico', 'O cirílico', 'O latino'],
        answer: 'O glagolítico',
        explanation: 'O cirílico só foi criado depois, por discípulos de Cirilo e Metódio, na Bulgária — e é dele que vêm os alfabetos eslavos modernos.',
      },
    ],
  },
  {
    id: 'cu-g4',
    level: 'A1.2',
    title: 'Sete casos, e o adjetivo que concorda em gênero',
    emoji: '📘',
    summary: 'Os substantivos tinham SETE casos gramaticais (mais do que o latim, que tem seis) — este curso simplifica e usa a forma de dicionário. Já os adjetivos, isso o curso ensina: concordam em gênero com o substantivo.',
    sections: [
      {
        text: 'Os sete casos eram: nominativo (sujeito), genitivo (posse), dativo (destinatário), acusativo (objeto), instrumental (meio), locativo (lugar) e vocativo (chamar alguém). Este curso, no nível A1, simplifica e usa principalmente o nominativo — a forma de dicionário.',
      },
      {
        heading: 'O adjetivo muda de acordo com o gênero',
        text: 'Igual o português faz com "bom/boa", o eslavo eclesiástico antigo muda a terminação do adjetivo pra combinar com o gênero do substantivo: "-ъ" no masculino, "-а" no feminino, "-о" no neutro.',
        table: {
          head: ['Masculino', 'Feminino', 'Neutro', 'Tradução'],
          rows: [
            ['добръ', 'добра', 'добро', 'bom/boa'],
            ['бѣлъ', 'бѣла', 'бѣло', 'branco/branca'],
          ],
        },
        examples: [
          ['Отьць добръ.', 'Pai bom.'],
          ['Мати добра.', 'Mãe boa.'],
          ['Вино добро.', 'Vinho bom.'],
        ],
      },
    ],
    pitfalls: ['Usar sempre a forma masculina do adjetivo: ela muda de acordo com o gênero do substantivo, igual o português faz com "bom"/"boa".'],
    quiz: [
      {
        question: 'Como se diz "mãe boa" em eslavo eclesiástico antigo?',
        options: ['Мати добра.', 'Мати добръ.', 'Мати добро.'],
        answer: 'Мати добра.',
        explanation: '"Мати" é feminino, então o adjetivo leva a terminação feminina "-а": добра.',
      },
    ],
  },
];
