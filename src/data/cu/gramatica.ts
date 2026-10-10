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
  {
    id: 'cu-g5',
    level: 'A2.1',
    title: 'O acusativo de verdade: pessoa copia o genitivo, coisa fica igual',
    emoji: '🎯',
    summary: 'No A1, para simplificar, o objeto ficava na forma de dicionário ("Азъ имамь братъ"). Agora o acusativo de verdade: quando o objeto é uma PESSOA, ele copia o genitivo ("брата"); quando é uma COISA, fica igual ao nominativo ("домъ").',
    sections: [
      {
        text: 'Essa diferença — chamada de "acusativo animado" — é uma inovação eslava bem documentada: nos substantivos masculinos terminados em "-ъ", se o substantivo se refere a um SER VIVO, o caso acusativo (de objeto) usa a MESMA forma do genitivo (de posse); se não, usa a mesma forma do nominativo (de sujeito).',
        table: {
          head: ['Substantivo', 'Nominativo (sujeito)', 'Acusativo (objeto)'],
          rows: [
            ['братъ (animado)', 'братъ', 'брата (= genitivo)'],
            ['рабъ (animado)', 'рабъ', 'раба (= genitivo)'],
            ['домъ (inanimado)', 'домъ', 'домъ (= nominativo)'],
            ['градъ (inanimado)', 'градъ', 'градъ (= nominativo)'],
          ],
        },
        examples: [
          ['Имамь брата.', 'Tenho um irmão.'],
          ['Имамь домъ.', 'Tenho uma casa.'],
        ],
      },
      {
        heading: 'E no feminino?',
        text: 'Os substantivos femininos terminados em "-а" (como "кънига", livro) formam o acusativo trocando o "-а" final por "-у": "кънигу". Essa marca não depende de ser pessoa ou coisa — vale pra qualquer substantivo feminino deste tipo.',
        examples: [['Имамь кънигу.', 'Tenho um livro.']],
      },
    ],
    pitfalls: ['Usar a forma do nominativo pra objetos animados masculinos: "Имамь братъ" (como no A1) é a versão simplificada — o certo, de verdade, é "Имамь брата".'],
    quiz: [
      {
        question: 'Como se diz "tenho um servo" (рабъ), usando o acusativo de verdade?',
        options: ['Имамь раба.', 'Имамь рабъ.', 'Имамь рабу.'],
        answer: 'Имамь раба.',
        explanation: '"Рабъ" é animado — o acusativo copia a forma do genitivo, "раба", em vez de ficar igual ao nominativo.',
      },
    ],
  },
  {
    id: 'cu-g6',
    level: 'A2.1',
    title: 'O aoristo: um tempo de passado que o português não tem',
    emoji: '⏮️',
    summary: 'Ao lado do presente (быти: ѥсмь, ѥси, ѥстъ...), o eslavo eclesiástico antigo tem um passado simples e completo, o AORISTO: бꙑхъ (eu fui/estive), бꙑ (tu foste/ele foi), бꙑхомъ (nós fomos), бꙑсте (vós fostes), бꙑша (eles foram).',
    sections: [
      {
        text: 'O aoristo descreve uma ação passada pontual e encerrada — "aconteceu e terminou". O verbo "быти" usa uma raiz diferente da do presente ("ес-") pra formar o aoristo: "бꙑ-". É um traço indo-europeu antigo que o grego clássico também tinha, e que o português NUNCA teve como tempo separado (o nosso pretérito perfeito simples, "fui", cobre esse sentido, mas sem distinguir do imperfeito, como o eslavo eclesiástico antigo faz — ver cu-g7).',
        table: {
          head: ['Pessoa', 'Aoristo de быти'],
          rows: [
            ['1ª singular', 'бꙑхъ (eu fui/estive)'],
            ['2ª/3ª singular', 'бꙑ (tu foste / ele foi)'],
            ['1ª plural', 'бꙑхомъ (nós fomos)'],
            ['2ª plural', 'бꙑсте (vós fostes)'],
            ['3ª plural', 'бꙑша (eles foram)'],
          ],
        },
        examples: [
          ['Азъ бꙑхъ чловѣкъ добръ.', 'Eu fui/era uma boa pessoa.'],
          ['Мꙑ бꙑхомъ добри.', 'Nós fomos bons.'],
        ],
      },
    ],
    pitfalls: ['Confundir o aoristo "бꙑхъ" com o presente "ѥсмь": são tempos diferentes do MESMO verbo "быти" — e usam raízes diferentes ("бꙑ-" × "ес-").'],
    quiz: [
      {
        question: 'Como se diz "nós fomos bons", usando o aoristo de быти?',
        options: ['Мꙑ бꙑхомъ добри.', 'Мꙑ ѥсмъ добри.', 'Мꙑ бꙑша добри.'],
        answer: 'Мꙑ бꙑхомъ добри.',
        explanation: '"Бꙑхомъ" é a 1ª pessoa do plural do aoristo de "быти" — "бꙑша" é 3ª plural (eles foram), e "ѥсмъ" é presente, não aoristo.',
      },
    ],
  },
  {
    id: 'cu-g7',
    level: 'A2.2',
    title: 'O imperfeito: "бѣ" — a mesma palavra que abre o evangelho de João',
    emoji: '📖',
    summary: 'Ao lado do aoristo (passado pontual, cu-g6), o eslavo eclesiástico antigo tem o IMPERFEITO: um passado contínuo/descritivo, usado pra "cenário de fundo". A forma mais famosa é "бѣ" (era), do verso de abertura do evangelho de João.',
    sections: [
      {
        text: 'O verso mais citado de toda a literatura eslava eclesiástica antiga é o início do evangelho de João: "Въ начѧлѣ бѣ слово" (No princípio era a Palavra/o Verbo) — o verbo "бѣ" é o imperfeito de "быти", de uma raiz diferente tanto do presente ("ес-") quanto do aoristo ("бꙑ-"): a raiz do imperfeito é "бѣ-".',
        table: {
          head: ['Pessoa', 'Imperfeito de быти'],
          rows: [
            ['1ª singular', 'бѣхъ (eu era)'],
            ['2ª/3ª singular', 'бѣ (tu eras / ele era)'],
            ['1ª plural', 'бѣхомъ (nós éramos)'],
            ['2ª plural', 'бѣсте (vós éreis)'],
            ['3ª plural', 'бѣша (eles eram)'],
          ],
        },
        examples: [
          ['Въ начѧлѣ бѣ слово.', 'No princípio era a Palavra/o Verbo. (João 1:1)'],
          ['Свѣтъ великъ бѣ, а тьма мала бѣ.', 'A luz era grande, e a treva era pequena.'],
        ],
      },
      {
        heading: 'Aoristo × imperfeito: uma distinção que o português perdeu',
        text: 'O aoristo ("бꙑхъ", eu fui) descreve um fato pontual, encerrado; o imperfeito ("бѣхъ", eu era) descreve um estado contínuo, de fundo — como a situação "no princípio", quando a Palavra simplesmente "era". O português moderno não distingue mais isso com formas verbais diferentes (ambos virariam só "eu era"/"eu fui" segundo o contexto), mas o espanhol e o italiano guardam parte dessa distinção entre pretérito e imperfeito.',
      },
    ],
    pitfalls: ['Achar que "бѣ" e "бꙑ" são a mesma forma: são tempos diferentes (imperfeito × aoristo), com raízes diferentes do mesmo verbo "быти".'],
    quiz: [
      {
        question: 'Qual verbo abre o evangelho de João ("No princípio era a Palavra"), e que tempo verbal é esse?',
        options: ['"бѣ" — imperfeito de быти', '"бꙑ" — aoristo de быти', '"ѥстъ" — presente de быти'],
        answer: '"бѣ" — imperfeito de быти',
        explanation: '"Въ начѧлѣ бѣ слово" usa o imperfeito "бѣ", descrevendo um estado contínuo de fundo — não um fato pontual (que seria o aoristo "бꙑ").',
      },
    ],
  },
  {
    id: 'cu-g8',
    level: 'A2.2',
    title: 'O genitivo de posse — e da negação',
    emoji: '📘',
    summary: '"Домъ отьца" (a casa do pai) usa o GENITIVO pra mostrar posse — e o mesmo caso aparece depois de um verbo negado: "не имамь хлѣба" (não tenho pão) usa genitivo, não o acusativo que apareceria numa frase afirmativa.',
    sections: [
      {
        text: 'O genitivo singular masculino (tema em "-ъ") termina em "-а": "отьць" (pai) → "отьца" (do pai) — a MESMA forma do acusativo animado (cu-g5), porque um copia o outro. O genitivo feminino (tema em "-а") termina em "-ы": "сестра" (irmã) → "сестры" (da irmã).',
        table: {
          head: ['Construção', 'Eslavo eclesiástico antigo', 'Tradução'],
          rows: [
            ['Posse (masc.)', 'домъ отьца', 'a casa do pai'],
            ['Posse (fem.)', 'кънига сестрꙑ', 'o livro da irmã'],
            ['Depois de negação', 'не имамь хлѣба', 'não tenho pão (genitivo, não acusativo)'],
          ],
        },
        examples: [
          ['Домъ отьца великъ ѥстъ.', 'A casa do pai é grande.'],
          ['Не имамь хлѣба.', 'Não tenho pão.'],
        ],
      },
      {
        heading: 'Um traço que sobrevive no eslavo moderno',
        text: 'Essa troca — acusativo numa frase afirmativa, genitivo na negativa — ainda existe, bem viva, no russo e em outras línguas eslavas modernas. É uma herança direta do eslavo eclesiástico antigo, documentada desde os textos mais antigos.',
      },
    ],
    pitfalls: ['Usar o acusativo depois de "не" (não): "Не имамь хлѣбъ" soa estranho — o certo é o genitivo, "не имамь хлѣба".'],
    quiz: [
      {
        question: 'Que caso aparece depois de um verbo negado, em vez do acusativo de uma frase afirmativa?',
        options: ['O genitivo', 'O nominativo', 'O dativo'],
        answer: 'O genitivo',
        explanation: '"Не имамь хлѣба" (não tenho pão) usa o genitivo "хлѣба" — o mesmo caso que marca posse ("домъ отьца").',
      },
    ],
  },
];
