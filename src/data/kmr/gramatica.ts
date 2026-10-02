import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do curmanji — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fontes: https://en.wikipedia.org/wiki/Kurdish_alphabets (alfabeto Hawar),
 * https://en.wikipedia.org/wiki/Izafet e https://en.wikipedia.org/wiki/Kurdish_grammar (ezafe/caso
 * construto), https://en.wiktionary.org/wiki/ziman e https://en.wiktionary.org/wiki/kitêb (tabelas de
 * declinação confirmando os sufixos -î/-ê/-an e -ê/-a/-ên), https://en.wiktionary.org/wiki/ew (ew / wî /
 * wê / wan), https://en.wikipedia.org/wiki/Subject%E2%80%93object%E2%80%93verb_word_order (ordem SOV,
 * com o exemplo curmanji “Ez xwarin dixwim”), todas consultadas em 02/10/2026.
 */
export const GRAMMAR_KMR: GrammarTopic[] = [
  {
    id: 'kmr-g1',
    level: 'A1.1',
    title: 'O alfabeto Hawar: ê, î, û, ç, ş',
    emoji: '🔤',
    summary: 'O curmanji se escreve com o alfabeto latino Hawar, criado em 1932, com cinco letras extras para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'O intelectual curdo Celadet Alî Bedirxan lançou esse alfabeto em 1932: 26 letras do latino comum mais ê, î, û, ç e ş. Três consoantes do alfabeto — q, w e x — nem faziam parte do alfabeto turco oficial: usá-las chegou a dar processo na Turquia em 2000 e 2003, até o governo turco reconhecê-las, em 2013.',
        table: {
          head: ['Letra', 'Som', 'Palavra'],
          rows: [
            ['ê', 'vogal longa, um “ê” bem fechado', 'navê (nome de, com o sufixo -ê)'],
            ['î', 'vogal longa, um “i” esticado', 'masî (peixe), xanî (casa)'],
            ['û', 'vogal longa, um “u” esticado', 'kûçik (cachorro), biçûk (pequeno)'],
            ['ç', 'sempre “tch”, como em “tchau”', 'kûçik (cachorro), biçûk (pequeno)'],
            ['ş', 'sempre “x” de “xícara”, nunca “s”', 'baş (bom), rojbaş (bom dia)'],
          ],
        },
        examples: [
          ['Silav! Tu çawa yî?', 'Oi! Como você está?'],
          ['Rojbaş!', 'Bom dia!'],
        ],
      },
    ],
    pitfalls: [
      'Ler “ş” como “s”: muda o sentido da palavra — “baş” (bom) não é “bas”.',
      'Esquecer que q, w e x existem no alfabeto Hawar, mesmo tendo sido proibidas por décadas na Turquia.',
    ],
    quiz: [
      { question: 'Como soa a letra “ş” no curmanji?', options: ['Como “x” de xícara', 'Como “s” de sapo', 'Como “ch” alemão'], answer: 'Como “x” de xícara', explanation: 'O “ş” do alfabeto Hawar sempre soa como o “x” português, nunca como “s”.' },
      { question: 'Quem criou o alfabeto Hawar, e quando?', options: ['Celadet Bedirxan, em 1932', 'Atatürk, em 1928', 'A ONU, em 1991'], answer: 'Celadet Bedirxan, em 1932', explanation: 'O intelectual curdo Celadet Alî Bedirxan lançou o alfabeto latino Hawar em 1932.' },
    ],
  },
  {
    id: 'kmr-g2',
    level: 'A1.2',
    title: 'Navê min, dayika min: o ezafe',
    emoji: '🔗',
    summary: 'Para ligar um substantivo a “meu” ou a um adjetivo, o curmanji gruda um sufixo que muda com o gênero: essa construção se chama ezafe, ou caso construto.',
    sections: [
      {
        text: 'O nome vem do persa “ezafe” (acréscimo), mas no curmanji o sufixo muda conforme o gênero e o número — diferente do persa moderno, onde é quase sempre “-e”/“-ye” para tudo. Substantivos masculinos levam -ê, femininos levam -a, e o plural leva -ên.',
        table: {
          head: ['Gênero', 'Sufixo', 'Exemplo'],
          rows: [
            ['masculino', '-ê', 'nav (nome) → navê min, “meu nome”'],
            ['masculino', '-ê', 'bav (pai) → bavê min, “meu pai”'],
            ['feminino', '-a', 'dayik (mãe) → dayika min, “minha mãe”'],
          ],
        },
        examples: [
          ['Navê min Linu e.', 'O meu nome é Linu.'],
          ['Dayika min baş e.', 'A minha mãe está bem.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o mesmo sufixo para os dois gêneros: “dayikê” soa errado — o certo é “dayika”, com -a, porque “dayik” é feminino.',
      'Confundir com o ezafe do persa: no persa moderno o sufixo não muda; no curmanji ele concorda com o gênero e o número da palavra.',
    ],
    quiz: [
      { question: 'Como se diz “meu pai”, a partir de “bav” (pai, masculino)?', options: ['Bavê min', 'Bava min', 'Bavan min'], answer: 'Bavê min', explanation: 'Substantivos masculinos levam o sufixo -ê antes do possessivo: bav → bavê.' },
      { question: 'Como se diz “minha mãe”, a partir de “dayik” (mãe, feminino)?', options: ['Dayika min', 'Dayikê min', 'Dayikan min'], answer: 'Dayika min', explanation: 'Substantivos femininos levam o sufixo -a: dayik → dayika.' },
    ],
  },
  {
    id: 'kmr-g3',
    level: 'A1.2',
    title: 'Masculino, feminino e o caso oblíquo',
    emoji: '🧩',
    summary: 'O curmanji distingue substantivos masculinos e femininos e muda a forma de pronomes e substantivos conforme a função na frase — uma marca que o sorani (curdo central) quase perdeu.',
    sections: [
      {
        text: 'Além do caso direto (usado no sujeito), o curmanji tem um caso oblíquo (usado no objeto e depois de preposições), com sufixos diferentes para masculino, feminino e plural. As tabelas de declinação de “ziman” (língua, masculino) e “kitêb” (livro, feminino) no Wiktionary mostram o padrão:',
        table: {
          head: ['Caso', 'Masc. sg. (ziman)', 'Fem. sg. (kitêb)', 'Plural'],
          rows: [
            ['Direto (sujeito)', 'ziman', 'kitêb', 'ziman / kitêb'],
            ['Oblíquo (objeto)', 'zimanî', 'kitêbê', 'zimanan / kitêban'],
            ['Construto (ezafe)', 'zimanê', 'kitêba', 'zimanên / kitêbên'],
          ],
        },
        examples: [
          ['Ew baş e.', 'Ele/ela está bem. (caso direto)'],
          ['Navê min Linu e.', 'O meu nome é Linu. (construto, -ê)'],
        ],
      },
      {
        heading: 'O pronome “ew” também muda de forma',
        text: 'O pronome de 3ª pessoa “ew” (ele/ela/eles/elas) é igual no caso direto, mas no caso oblíquo vira “wî” (masculino singular), “wê” (feminino singular) ou “wan” (plural).',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Plural'],
          rows: [
            ['Direto', 'ew', 'ew', 'ew'],
            ['Oblíquo', 'wî', 'wê', 'wan'],
          ],
        },
      },
    ],
    pitfalls: [
      'Achar que “ew” só serve para “ele”: a mesma palavra cobre “ela” e, no plural, “eles/elas” — só o caso oblíquo diferencia, com “wî”, “wê” e “wan”.',
      'Esquecer que o sorani perdeu quase toda essa distinção de gênero e caso: é uma das diferenças mais citadas entre as duas variedades do curdo.',
    ],
    quiz: [
      { question: 'Qual é o plural de “ew” (ele/ela) no caso direto?', options: ['A mesma palavra, “ew”', '“Ewan”, sempre', '“Wan”'], answer: 'A mesma palavra, “ew”', explanation: '“Ew” cobre o singular (ele/ela) e o plural (eles/elas) no caso direto; só no caso oblíquo ele vira “wî”, “wê” ou “wan”.' },
      { question: 'O que o sorani (curdo central) fez com o gênero gramatical que o curmanji mantém?', options: ['Perdeu quase todo', 'Manteve igual', 'Criou um terceiro gênero'], answer: 'Perdeu quase todo', explanation: 'O sorani perdeu quase toda a distinção de gênero gramatical que o curmanji conserva — uma das diferenças mais citadas entre as duas variedades.' },
    ],
  },
  {
    id: 'kmr-g4',
    level: 'A1.2',
    title: 'O verbo no final: a ordem SOV',
    emoji: '➡️',
    summary: 'Como a maioria das línguas iranianas, o curmanji põe o verbo no fim da frase: sujeito, depois objeto, depois verbo (SOV).',
    sections: [
      {
        text: 'Em “Ez xwarin dixwim” (eu como comida), o sujeito “ez” vem primeiro, o objeto “xwarin” (comida) vem no meio, e o verbo “dixwim” fecha a frase — diferente do português, que fala “eu como comida” com o verbo no meio (SVO). A mesma ordem aparece em frases simples como “Ez nan dixwim” (eu como pão) e em perguntas como “Tu çi dixwazî?” (o quê você quer?), onde o verbo “dixwazî” também fica por último.',
        table: {
          head: ['Sujeito', 'Objeto', 'Verbo'],
          rows: [
            ['Ez (eu)', 'nan (pão)', 'dixwim (como)'],
            ['Ez (eu)', 'av (água)', 'vedixwim (bebo)'],
            ['Tu (tu)', 'çi (o quê)', 'dixwazî (queres)'],
          ],
        },
        examples: [
          ['Ez nan dixwim.', 'Eu como pão.'],
          ['Tu çi dixwazî?', 'O que você quer?'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir palavra por palavra na ordem do português: em curmanji o verbo quase sempre fica por último.',
      'Esquecer que isso vale também nas perguntas: “Tu çi dixwazî?” não é “tu quer o quê”, mas sim “tu o-quê queres”.',
    ],
    quiz: [
      { question: 'Qual é a ordem básica das frases em curmanji?', options: ['Sujeito – Objeto – Verbo', 'Sujeito – Verbo – Objeto', 'Verbo – Sujeito – Objeto'], answer: 'Sujeito – Objeto – Verbo', explanation: 'Como a maioria das línguas iranianas, o curmanji é uma língua SOV: o verbo fica no final da frase.' },
      { question: 'Em “Tu çi dixwazî?”, onde fica o verbo “dixwazî”?', options: ['No final da frase', 'No início', 'Não há verbo'], answer: 'No final da frase', explanation: '“Dixwazî” (queres) fecha a pergunta, depois do sujeito “tu” e do objeto “çi”.' },
    ],
  },
];
