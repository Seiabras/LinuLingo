import type { GrammarTopic } from '../types';

/**
 * Gramática do crioulo haitiano — só A1.1 e A1.2 por enquanto (pacote incompleto, ver `incomplete` em
 * index.ts). O crioulo haitiano tem gramática própria, bem diferente do francês que deu a maior parte do
 * seu vocabulário: não conjuga verbo por pessoa, marca tempo/aspecto/modo com palavrinhas antes do verbo
 * (te, ap, pral), nega sempre antes do verbo (pa) e marca plural depois do substantivo (yo). Fontes:
 * Wikipédia (inglês), artigo “Haitian Creole” (classificação, pronomes, marcadores de tempo, negação,
 * citação “no conjugation in the language; the verbs have one form only”, exemplos “mwen te manje”, “m
 * ap manje kounye a”, “mwen pral manje”, “pa gen moun la”, “Èske ou konnen non li?”); e Wiktionary
 * (inglês), entradas em crioulo haitiano para mwen/ou/li/nou/yo, te, ap, pral, pa, se, ye, gen/genyen, la,
 * nan — todas consultadas uma a uma pelo texto-fonte (action=raw), com as citações reais reproduzidas
 * abaixo entre aspas.
 */
export const GRAMMAR_HT: GrammarTopic[] = [
  {
    id: 'ht-g1',
    level: 'A1.1',
    title: 'Os pronomes: mwen, ou, li, nou, yo',
    emoji: '🙋',
    summary: 'Cinco pronomes pessoais cobrem todas as pessoas do crioulo haitiano — e, diferente do português, o pronome quase nunca pode faltar.',
    sections: [
      {
        text: 'O Wiktionary registra a etimologia de cada pronome a partir do francês: “mwen” vem de uma nasalização progressiva do francês “moi” (mim); “yo” vem do francês “eux” (eles). A posse se faz só encostando o pronome depois da palavra, sem nenhuma palavra de ligação como o “de” do português — a Wikipédia cita a frase “Èske ou konnen non li?” (você sabe o nome dele?), em que “non li”, literalmente “nome ele”, quer dizer “o nome dele”.',
        table: {
          head: ['Pronome', 'Tradução', 'Forma curta'],
          rows: [
            ['mwen', 'eu, me, meu/minha', 'm'],
            ['ou', 'tu, você, teu/tua', 'w'],
            ['li', 'ele, ela, dele/dela', 'l'],
            ['nou', 'nós, nosso/nossa', 'n'],
            ['yo', 'eles, elas, deles/delas', 'y'],
          ],
        },
        examples: [
          ['Mwen rele Ana.', 'Eu me chamo Ana.'],
          ['Kijan ou rele?', 'Como você se chama?'],
          ['Li se zanmi mwen.', 'Ele é meu amigo.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar omitir o pronome como às vezes se faz em português (“sou de São Paulo”, sem o “eu”): no crioulo haitiano o pronome é sempre dito.',
      'Usar uma palavra de ligação para a posse: no crioulo haitiano é só encostar o pronome depois da palavra, como em “non li” (o nome dele), nunca algo como “non de li”.',
    ],
    quiz: [
      { question: 'Como se diz “o nome dele” em crioulo haitiano?', options: ['non li', 'non de li', 'li non'], answer: 'non li', explanation: 'A posse se faz só com a ordem substantivo + pronome, sem palavra de ligação: “non li” é, literalmente, “nome ele”.' },
      { question: 'De que palavra francesa vem o pronome “mwen”?', options: ['moi (mim)', 'mon (meu)', 'nous (nós)'], answer: 'moi (mim)', explanation: '“Mwen” vem de uma nasalização progressiva do francês “moi”, segundo o Wiktionary.' },
    ],
  },
  {
    id: 'ht-g2',
    level: 'A1.1',
    title: 'O verbo não conjuga: se e ye',
    emoji: '🔁',
    summary: 'O verbo do crioulo haitiano não muda com a pessoa: é sempre “mwen pale”, “ou pale”, “li pale”. E o verbo “ser” tem duas formas: “se” no meio da frase, “ye” no fim.',
    sections: [
      {
        text: 'Segundo a Wikipédia, o crioulo haitiano “has no conjugation in the language; the verbs have one form only” (não tem conjugação na língua; os verbos têm uma única forma). “Se” (do francês “c’est”, isso é) funciona como o verbo “ser”, mas uma observação do Wiktionary é importante: “se” não aparece quando o que vem depois é um adjetivo — nesse caso o adjetivo fica direto depois do pronome, sem verbo nenhum. No fim de uma pergunta ou frase, o lugar de “se” é tomado por “ye”, como na pergunta citada pelo Wiktionary “Kimoun ou ye?” (quem é você?, literalmente “quem você é”).',
        table: {
          head: ['Pronome', 'pale (falar)', 'Tradução'],
          rows: [
            ['mwen', 'mwen pale', 'eu falo'],
            ['ou', 'ou pale', 'você fala'],
            ['li', 'li pale', 'ele/ela fala'],
            ['nou', 'nou pale', 'nós falamos'],
            ['yo', 'yo pale', 'eles/elas falam'],
          ],
        },
        examples: [
          ['Nou se zanmi.', 'Nós somos amigos.'],
          ['Kijan ou ye?', 'Como você está? (lit.: como você é)'],
          ['Mwen gwo.', 'Eu sou grande. (sem “se”, porque “gwo” é adjetivo)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação como em português: no crioulo haitiano o verbo fica sempre igual, não importa quem fala.',
      'Pôr “se” antes de um adjetivo, como o “ser” do português: em crioulo haitiano é só “Mwen gwo” (eu sou grande), nunca “Mwen se gwo”.',
    ],
    quiz: [
      { question: 'Como se diz “ele fala” em crioulo haitiano?', options: ['li pale', 'li pale-l', 'li paleu'], answer: 'li pale', explanation: 'O verbo não muda: é a mesma forma “pale” para qualquer pessoa.' },
      { question: 'Qual frase está correta para “eu sou grande”?', options: ['Mwen gwo.', 'Mwen se gwo.', 'Mwen ye gwo.'], answer: 'Mwen gwo.', explanation: '“Se” não aparece antes de um adjetivo: o adjetivo vem direto depois do pronome.' },
    ],
  },
  {
    id: 'ht-g3',
    level: 'A1.2',
    title: 'Antes do verbo: te, ap e pral',
    emoji: '⏳',
    summary: 'Três palavrinhas antes do verbo contam o tempo — “te” (passado), “ap” (contínuo) e “pral” (futuro próximo) — sem nenhum sufixo.',
    sections: [
      {
        text: 'A Wikipédia cita estes exemplos reais: “mwen te manje” (eu comi), com “te” vindo do particípio francês “été”; “m ap manje kounye a” (eu estou comendo agora), com “ap” vindo da expressão francesa “être après” (estar atrás de, fazendo algo); e “mwen pral manje” (eu vou comer), com “pral” vindo da junção de três palavras francesas — “être”, “après” e “aller” (estar, depois, ir). As três ficam sempre antes do verbo principal, na mesma posição, e o verbo em si nunca muda.',
        table: {
          head: ['Marcador', 'O que marca', 'Exemplo citado'],
          rows: [
            ['te', 'passado', '“mwen te manje” — eu comi'],
            ['ap', 'ação contínua', '“m ap manje” — eu estou comendo'],
            ['pral', 'futuro próximo', '“mwen pral manje” — eu vou comer'],
          ],
        },
        examples: [
          ['Mwen vle yon kafe.', 'Eu quero um café. (sem marcador: ação no presente simples)'],
          ['Mwen pral manje.', 'Eu vou comer.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um sufixo como “-ei” ou “-ava” do português: no crioulo haitiano o tempo vem antes do verbo, numa palavra separada.',
      'Trocar a ordem: “te”, “ap” e “pral” vêm sempre antes do verbo principal, nunca depois dele.',
    ],
    quiz: [
      { question: 'Como se diz “eu comi” em crioulo haitiano?', options: ['Mwen te manje.', 'Mwen manje te.', 'Mwen ap manje.'], answer: 'Mwen te manje.', explanation: '“Te” marca o passado e vem antes do verbo: “mwen te manje”, citado pela Wikipédia.' },
      { question: 'Qual palavra marca uma ação acontecendo agora?', options: ['ap', 'te', 'pral'], answer: 'ap', explanation: '“Ap” marca o aspecto contínuo: “m ap manje” é “eu estou comendo”.' },
    ],
  },
  {
    id: 'ht-g4',
    level: 'A1.2',
    title: 'A negação com pa, e o yo depois do substantivo',
    emoji: '🚫',
    summary: '“Pa” nega o verbo e vem sempre antes dele; “yo” depois de um substantivo marca o plural, sem mudar a palavra.',
    sections: [
      {
        text: 'A Wikipédia cita a frase “pa gen moun la” (não tem ninguém aqui/ali), mostrando “pa” sempre colado antes do verbo. Já o Wiktionary registra “yo” com dois papéis: como pronome, “eles/elas”; e, posto depois de um substantivo plural, como artigo — “this word is only used in its article sense when it modifies a plural noun” (esta palavra só é usada no sentido de artigo quando modifica um substantivo plural). Assim, “timoun” é “criança” ou “crianças” dependendo do contexto, e “timoun yo” é, sem dúvida, “as crianças”.',
        table: {
          head: ['Função', 'Palavra', 'Exemplo'],
          rows: [
            ['negar o verbo', 'pa (antes do verbo)', 'Mwen pa gen lajan.'],
            ['marcar plural', 'yo (depois do substantivo)', 'timoun yo (as crianças)'],
          ],
        },
        examples: [
          ['Mwen pa gen lajan.', 'Eu não tenho dinheiro.'],
          ['Timoun yo piti.', 'As crianças são pequenas.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “pa” depois do verbo, como se fosse um “não” só no fim da frase: no crioulo haitiano é sempre antes dele, colado: “Mwen pa gen…”.',
      'Usar “yo” antes do substantivo: o marcador de plural vem sempre depois, como em “timoun yo”, nunca “yo timoun”.',
    ],
    quiz: [
      { question: 'Onde fica o “pa” que nega o verbo?', options: ['antes do verbo', 'depois do verbo', 'no fim da frase'], answer: 'antes do verbo', explanation: '“Mwen pa gen lajan” (eu não tenho dinheiro): “pa” vem sempre colado antes do verbo.' },
      { question: 'Como marcar que “timoun” (criança) está no plural?', options: ['timoun yo', 'yo timoun', 'timouns'], answer: 'timoun yo', explanation: '“Yo” vem depois do substantivo para marcar o plural, segundo o Wiktionary.' },
    ],
  },
];
