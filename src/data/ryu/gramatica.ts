import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do okinawano — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fontes: en.wikipedia.org/wiki/Okinawan_language (fonologia — tabela “Correspondences between
 * Japanese and Okinawan”, vogais, consoantes, sistema de escrita, pronomes, partículas, やん “yan”,
 * ordem sujeito-objeto-verbo, o exemplo de conjugação 書ちゅん “kachun”) e
 * en.wikipedia.org/wiki/Ryukyuan_languages (classificação japônica/ryukyuana, 71% de semelhança
 * lexical com o japonês padrão, situação da UNESCO).
 */
export const GRAMMAR_RYU: GrammarTopic[] = [
  {
    id: 'ryu-g1',
    level: 'A1.1',
    title: 'Por que “tīda” não é “teda”: as vogais do okinawano',
    emoji: '🔤',
    summary: 'O okinawano tem as mesmas cinco vogais do japonês, mas duas delas (e, o) são raras em palavras nativas — porque viraram i e u.',
    sections: [
      {
        text: 'O okinawano tem cinco vogais (a, i, u, e, o), cada uma podendo ser curta ou longa — mas o e e o o curtos são raros no vocabulário nativo. A razão é uma mudança de som regular, registrada entre o japonês e o okinawano: onde o japonês tem e, o okinawano costuma ter i; onde o japonês tem o, o okinawano costuma ter u. Os ditongos japoneses ai e au, por sua vez, viram vogal longa ē e ō no okinawano — é daí que vêm a maioria dos e e o longos que aparecem na língua.',
        table: {
          head: ['Japonês', 'Okinawano', 'Mudança', 'Exemplo'],
          rows: [
            ['e', 'i', 'a vogal sobe (e → i)', 'japonês te (mão) → okinawano てぃー tī'],
            ['o', 'u', 'a vogal sobe (o → u)', 'japonês kimo (fígado) → okinawano ちむ chimu'],
            ['ai', 'ē (e longo)', 'o ditongo vira vogal longa', '(regra geral da tabela de correspondências)'],
            ['au', 'ō (o longo)', 'o ditongo vira vogal longa', '(regra geral da tabela de correspondências)'],
          ],
        },
        examples: [
          ['Kuri tī yan.', 'Isto é a mão.'],
          ['Kuri chimu yan.', 'Isto é o fígado (ou, em sentido figurado, o coração).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o okinawano simplesmente “não tem” e ou o: ele tem as duas vogais, só que elas são raras em palavras nativas (a maioria vem de ditongos contraídos ou de empréstimos do japonês).',
      'Tentar prever uma palavra okinawana só trocando e→i e o→u numa palavra japonesa: a correspondência é uma tendência histórica regular, não uma fórmula infalível para qualquer palavra.',
    ],
    quiz: [
      { question: 'Em okinawano, o e do japonês “te” (mão) normalmente vira…', options: ['i', 'a', 'u'], answer: 'i', explanation: 'A vogal média e do japonês costuma subir para i no okinawano: te → tī.' },
      { question: 'O que significa “chimu”?', options: ['fígado; em sentido figurado, coração/sentimento', 'mão', 'mar'], answer: 'fígado; em sentido figurado, coração/sentimento', explanation: '“Chimu” vem do japonês antigo “kimo” (fígado), com o → u e k → ch antes de i.' },
    ],
  },
  {
    id: 'ryu-g2',
    level: 'A1.1',
    title: 'Hiragana, katakana e kanji — sem ortografia fixa',
    emoji: '✍️',
    summary: 'O okinawano usa a mesma mistura de escritas do japonês, mas sem uma ortografia oficial única, e com kana que o japonês moderno não usa mais.',
    sections: [
      {
        text: 'O hiragana chegou ao Reino de Ryukyu vindo do Japão por volta do século XIII e virou a base da escrita okinawana; diferente do que acontecia no Japão, escrever só em hiragana nunca foi mal visto no Ryukyu. Depois da invasão de Satsuma (1609), o uso de kanji cresceu nos documentos oficiais. Hoje não existe uma ortografia padronizada única: quem estuda ou escreve okinawano usa hiragana e kanji (à moda tradicional), ou então romanização e katakana (para marcar a diferença visual com o japonês padrão). Este pacote usa só hiragana, incluindo dois kana antigos que o japonês moderno abandonou, ゐ (wi) e ゑ (we), mas que o okinawano ainda emprega. A escrita okinawana também tem uma convenção própria para dois sons que o japonês não tem: くゎ e ぐゎ, com um ゎ pequeno, representam /kwa/ e /gwa/.',
      },
    ],
    pitfalls: [
      'Esperar uma única “forma certa” de escrever uma palavra okinawana: como não há ortografia oficial, é comum encontrar a mesma palavra escrita de jeitos diferentes em fontes diferentes.',
      'Estranhar ゐ e ゑ achando que são erro de digitação: são kana antigos, válidos em okinawano, que o japonês moderno não usa mais.',
    ],
    quiz: [
      { question: 'O okinawano tem ortografia oficial única, como o japonês padrão?', options: ['Não — convivem o hiragana/kanji tradicional e a romanização/katakana', 'Sim, definida pelo governo de Okinawa', 'Sim, idêntica à do japonês'], answer: 'Não — convivem o hiragana/kanji tradicional e a romanização/katakana', explanation: 'Não existe uma ortografia padronizada única para o okinawano.' },
      { question: 'O que os kana ゐ e ゑ têm de especial no okinawano?', options: ['São kana antigos que o japonês moderno não usa mais, mas o okinawano ainda usa', 'Foram inventados só para o okinawano', 'Representam sons que nem o japonês nem o okinawano têm'], answer: 'São kana antigos que o japonês moderno não usa mais, mas o okinawano ainda usa', explanation: 'ゐ (wi) e ゑ (we) existiam no japonês antigo e caíram em desuso no japonês moderno, mas sobrevivem na escrita okinawana (ex.: ゐきが, wikiga, homem).' },
    ],
  },
  {
    id: 'ryu-g3',
    level: 'A1.2',
    title: 'Pronomes e o verbo やん (yan)',
    emoji: '🙋',
    summary: 'Um punhado de pronomes, ordem sujeito-objeto-verbo, e um verbo de ligação que se junta direto ao substantivo.',
    sections: [
      {
        text: 'O okinawano, como o japonês, põe o verbo no final da frase (sujeito-objeto-verbo) e faz uso pesado de partículas. O verbo de ligação やん (yan, “ser/estar”) se liga diretamente a um substantivo, sem partícula no meio: “uchinaanchu yan” é “é okinawano(a)”. Este pacote simplifica a marcação do sujeito: em vez da partícula de tópico や (ya) — cujo comportamento é mais complexo do que parece, a ponto de se fundir com a palavra anterior em certas frases citadas pela própria Wikipédia (“unju” + ya → “unjō”) —, as frases daqui só justapõem o pronome antes do predicado, sem nenhuma partícula.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['わん (wan)', 'eu'],
            ['うんじゅ (unju)', 'você (forma educada)'],
            ['あり (ari)', 'ele, ela'],
            ['わったー (wattā)', 'nós'],
          ],
        },
        examples: [
          ['Wan uchinaanchu yan.', 'Eu sou okinawano(a).'],
          ['Unju tā yan?', 'Quem é você?'],
          ['Ari sū yan.', 'Ele é o pai.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar a partícula de tópico や (ya) livremente: ela pode se fundir com a palavra anterior em vez de aparecer solta, e este pacote evita essa partícula justamente por isso — prefira a ordem simples de palavras ensinada aqui.',
      'Esquecer o やん no final: sem ele, “uchinaanchu” sozinho é só a palavra “okinawano(a)”, não a frase completa “[eu] sou okinawano(a)”.',
    ],
    quiz: [
      { question: 'Como se diz “eu” em okinawano?', options: ['wan', 'unju', 'ari'], answer: 'wan', explanation: '“Wan” é o pronome de primeira pessoa.' },
      { question: 'O que faz o verbo “yan”?', options: ['Liga-se direto a um substantivo para dizer “é/são”', 'Marca o objeto da frase', 'Nega o verbo'], answer: 'Liga-se direto a um substantivo para dizer “é/são”', explanation: '“Yan” é o verbo de ligação do okinawano: “uchinaanchu yan” = “é okinawano(a)”.' },
    ],
  },
  {
    id: 'ryu-g4',
    level: 'A1.2',
    title: 'Verbos em -un e adjetivos em -san: frases que se fecham sozinhas',
    emoji: '🧩',
    summary: 'Verbos terminados em -un e adjetivos terminados em -san já são frases completas por conta própria, sem precisar de “yan”.',
    sections: [
      {
        text: 'A Wikipédia cita o verbo 書ちゅん (kachun, “escrever”) como exemplo: a forma terminal, terminada em -un, já é uma frase completa e presente (“[alguém] escreve”), diferente da forma atributiva (terminada em -uru), usada antes de um substantivo. O mesmo vale para os verbos deste pacote (かむん kamun, “comer”; ぬむん numun, “beber”) e para os adjetivos, que em okinawano funcionam como um tipo de verbo terminado em -san (まぎさん magisan, “ser grande”; くーさん kūsan, “ser pequeno”): sozinhos, já fecham a frase. Por isso eles NUNCA aparecem com “yan” depois no mesmo predicado — “yan” só se liga a um substantivo (ver o tópico anterior), nunca a um verbo ou adjetivo que já termina em -un/-san.',
        examples: [
          ['Wan miji numun.', 'Eu bebo água.'],
          ['Umi magisan.', 'O mar é grande.'],
          ['Mayā kūsan.', 'O gato é pequeno.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar “yan” depois de um verbo em -un ou de um adjetivo em -san (como “magisan yan”): é redundante, porque -un e -san já fecham a frase sozinhos.',
      'Esperar uma conjugação por pessoa como em português: as fontes consultadas para este pacote só confirmam a forma de dicionário/forma terminal de cada verbo, não uma tabela completa de conjugação — por isso as frases de exemplo deste pacote usam sempre essa mesma forma.',
    ],
    quiz: [
      { question: 'O que significa “magisan” sozinho, sem nenhuma outra palavra?', options: ['“[Algo] é grande”, uma frase completa', 'Só o adjetivo “grande”, sem verbo', 'O verbo “crescer”'], answer: '“[Algo] é grande”, uma frase completa', explanation: 'Adjetivos okinawanos em -san já funcionam como um verbo e fecham a frase sozinhos.' },
      { question: 'Por que “Umi magisan yan” soa estranho?', options: ['Porque “magisan” já fecha a frase sozinho; “yan” seria redundante', 'Porque falta um pronome', 'Porque “umi” precisa de outro verbo'], answer: 'Porque “magisan” já fecha a frase sozinho; “yan” seria redundante', explanation: '“Yan” só se junta a um substantivo-predicado, nunca a um verbo/adjetivo que já termina em -un/-san.' },
    ],
  },
];
