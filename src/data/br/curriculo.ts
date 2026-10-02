import type { UnitSeed } from '../types';

/**
 * Trilha do bretão: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 *
 * Fontes: Omniglot “Breton phrases”, Wikibooks “Breton” (nível 1, lições 1–2), Wikipédia em inglês
 * “Breton language” e “Breton grammar”, Wikipédia em português “Língua bretã”, e entradas individuais
 * do Wiktionary em inglês para cada palavra (ver vocabulario.ts e extras.ts).
 */
export const UNITS_BR: UnitSeed[] = [
  {
    id: 'br-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Demat ha Kenavo',
    emoji: '👋',
    card: {
      id: 'br-c1',
      title: 'A única língua celta ainda viva no continente',
      emoji: '🌍',
      history:
        'O bretão (brezhoneg) é uma língua celta do ramo britônico, parente do galês e do córnico — não do irlandês ou do gaélico escocês, que são celtas do outro ramo, o goidélico. É falado na Bretanha (Breizh), no noroeste da França, sobretudo na Baixa Bretanha (Breizh-Izel), a oeste. Foi levado para lá por migrantes vindos da Britânia (atual Grã-Bretanha) entre os séculos V e VII, fugindo de invasões — por isso o parentesco com o galês é tão próximo, mesmo a língua tendo se desenvolvido depois do outro lado do Canal da Mancha. O ensino do bretão foi proibido nas escolas da França entre 1880 e meados do século XX, com crianças punidas por falar a língua; a Lei Deixonne, de 1951, começou a reverter essa política. Mesmo assim, o número de falantes caiu de mais de um milhão nos anos 1950 para cerca de 107 mil em 2024, e a UNESCO classifica o bretão como “seriamente ameaçado” em seu Atlas das Línguas em Perigo.',
      culture_tip:
        '“Demat!” serve a qualquer hora do dia, como um “oi” genérico. Para se despedir a gente usa “Kenavo!”, e à noite dá pra trocar por “Nozvezh vat!”. “Trugarez” é o obrigado mais comum, e “mar plij” é o “por favor” que acompanha qualquer pedido, como num café: “Ur banne dour, mar plij” (um copo de água, por favor).',
      grammar_why:
        'O bretão é uma língua VSO (verbo-sujeito-objeto) por baixo da superfície, mas quase toda frase bretã começa com uma outra palavra em foco — o verbo quase nunca vem primeiro na prática. Por isso tanta frase bretã usa uma partícula “a” (ou “e”) logo depois da palavra em destaque: “Me a gomz brezhoneg” (eu falo bretão, literalmente “eu PARTÍCULA falo bretão”) ou “Deskiñ a ran brezhoneg” (estou aprendendo bretão, literalmente “aprender PARTÍCULA faço bretão”).',
      grammar_examples: [
        ['Demat! Mat an traoù?', 'Oi! Tudo bem?'],
        ['Ya, mat-tre. Ha ganit?', 'Sim, muito bem. E você?'],
        ['Me a gomz brezhoneg.', 'Eu falo bretão.'],
        ['Deskiñ a ran brezhoneg.', 'Estou aprendendo bretão.'],
      ],
      character_guide: [
        ["c'h", 'um som de fricativa surda, mais atrás na garganta que o “h” comum (parecido com o “j” espanhol ou o “ch” alemão de “Bach”)', "c'hoar (irmã), ki → ar c'hi (o cachorro)"],
        ['zh', 'representa um som que muda conforme a região: “z” na maior parte da Bretanha, “h” no dialeto vanetês — por isso a própria palavra “bretão” se escreve “brezhoneg”', 'brezhoneg (língua bretã)'],
        ['h', 'quando pronunciado, é uma aspiração leve', 'heol (sol)'],
        ['sem Q, sem X', 'o alfabeto bretão da ortografia peurunvan não usa essas duas letras', '—'],
      ],
    },
    lessons: [
      {
        id: 'br-u1-l1',
        title: 'Demat, trugarez, kenavo!',
        kind: 'licao',
        words: ['demat', 'nozvezh vat', 'kenavo', 'trugarez', 'mar plij', 'ya'],
        cloze: [
          { sentence: '___, Yannig! Mat an traoù?', answer: 'Demat', options: ['Demat', 'Kenavo', 'Trugarez'], translation: 'Oi, Yannig! Tudo bem?' },
          { sentence: '___, ha trugarez!', answer: 'Kenavo', options: ['Kenavo', 'Demat', 'Ya'], translation: 'Tchau, e obrigado!' },
          { sentence: 'Ur banne dour, ___.', answer: 'mar plij', options: ['mar plij', 'trugarez', 'ya'], translation: 'Um copo de água, por favor.' },
        ],
        voice: {
          bot: 'Demat! Mat an traoù?',
          botTranslation: 'Oi! Tudo bem?',
          expected: ['Ya, mat-tre. Ha ganit?', 'ya', 'mat-tre'],
          hint: 'Responda que vai muito bem e devolva a pergunta: “Ya, mat-tre. Ha ganit?”.',
        },
        communityPrompt: 'Escreva três expressões em bretão: um cumprimento (“Demat”), um agradecimento (“Trugarez”) e uma despedida (“Kenavo”).',
      },
      {
        id: 'br-u1-l2',
        title: 'Me, te, eñ, hi',
        kind: 'licao',
        words: ['me', 'te', 'eñ', 'hi', 'ni', 'anv'],
        cloze: [
          { sentence: '___ a gomz brezhoneg.', answer: 'Me', options: ['Me', 'Te', 'Eñ'], translation: 'Eu falo bretão.' },
          { sentence: 'Piv out ___?', answer: 'te', options: ['te', 'me', 'ni'], translation: 'Quem é você?' },
          { sentence: 'Yannig eo va ___.', answer: 'anv', options: ['anv', 'mamm', 'tad'], translation: 'Yannig é meu nome.' },
        ],
        voice: {
          bot: 'Demat! Piv out te?',
          botTranslation: 'Oi! Quem é você?',
          expected: ['Mona eo va anv.', 'eo va anv', 'mona'],
          hint: 'Diga seu nome com o modelo “[Nome] eo va anv” (“[Nome] é meu nome”).',
        },
        communityPrompt: 'Apresente-se em bretão: diga seu nome com “[Nome] eo va anv” e pergunte o nome de alguém com “Piv out te?”.',
      },
      {
        id: 'br-u1-l3',
        title: 'Test: demat ha kenavo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Demat! Yannig eo va anv. Piv out te?',
          botTranslation: 'Oi! Meu nome é Yannig. Quem é você?',
          expected: ['Demat! Mona eo va anv.', 'demat', 'eo va anv'],
          hint: 'Devolva o cumprimento (“Demat!”) e diga seu nome com “[Nome] eo va anv”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Demat”), nome (“… eo va anv”), e despedida (“Kenavo”).',
      },
    ],
  },
  {
    id: 'br-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'An ti hag ar gwin ruz',
    emoji: '🏠',
    card: {
      id: 'br-c2',
      title: 'Mutações: quando a primeira letra muda',
      emoji: '🔀',
      history:
        'Como todas as línguas celtas, o bretão tem mutações consonânticas iniciais: a primeira letra de uma palavra pode mudar de som dependendo do que vem antes dela — o artigo, um possessivo, um número. É um traço que o bretão compartilha com o galês, o córnico, o irlandês e o gaélico escocês, mas cada língua celta tem suas próprias regras de quando e como mutar. Em bretão há quatro famílias de mutação: a suave (p→b, t→d, k→g, b→v, d→z, g→c’h, m→v), a espirante (p→f, t→z, k→c’h, gw→w), a dura (b→p, d→t, g→k) e a mista. A palavra no dicionário não muda — só a forma falada e escrita na frase.',
      culture_tip:
        'Um exemplo bem concreto: “tad” (pai) vira “da dad” com “da” (seu, mutação suave: t→d) mas vira “ma zad” com “ma” (meu, mutação espirante: t→z) — dois possessivos, duas mutações diferentes para a mesma palavra!',
      grammar_why:
        'O artigo definido também pode mutar o substantivo seguinte: “taol” (mesa, feminino) vira “an daol” (a mesa), e “kador” (cadeira, feminino) vira “ar gador” (a cadeira) — ambas com mutação suave, de acordo com o gênero feminino. Já “dour” (água, masculino) fica “an dour” (a água) sem mudar nada, porque substantivos masculinos costumam não mutar depois do artigo. Mas nem toda palavra segue esse padrão: “ki” (cachorro, masculino) aparece mutado em “ar c’hi” (o cachorro) numa frase de exemplo real do dicionário — então vale aprender cada mutação aos poucos, caso a caso, em vez de confiar numa regra única e sem exceção.',
      grammar_examples: [
        ['Ma zad a zo mat.', 'Meu pai está bem.'],
        ['Mat eo da dad?', 'Seu pai está bem?'],
        ['An daol zo ruz. Ar gador zo glas.', 'A mesa é vermelha. A cadeira é azul.'],
        ["Ar c'hi zo o kousket amañ.", 'O cachorro está dormindo aqui.'],
      ],
      character_guide: [
        ['an / al / ar', 'o artigo definido: “an” antes de vogal, “d”, “n”, “t” e “h” muda; “al” antes de “l”; “ar” nos demais casos', 'an dour (a água), al logodenn (o rato), ar gador (a cadeira)'],
        ['ur / ul / un', 'o artigo indefinido “um/uma”: mesma lógica do definido', 'un aval (uma maçã)'],
      ],
    },
    lessons: [
      {
        id: 'br-u2-l1',
        title: "An ti hag ar boued",
        kind: 'licao',
        words: ['ti', 'kador', 'dour', 'bara', 'kafe', 'kig'],
        cloze: [
          { sentence: 'An ___ zo bihan.', answer: 'ti', options: ['ti', 'kador', 'dour'], translation: 'A casa é pequena.' },
          { sentence: 'Evañ a ran ___.', answer: 'kafe', options: ['kafe', 'kig', 'bara'], translation: 'Eu bebo café.' },
          { sentence: 'Debriñ a ran ___.', answer: 'kig', options: ['kig', 'bara', 'kafe'], translation: 'Eu como carne.' },
        ],
        voice: {
          bot: 'Ur banne dour pe ur banne kafe?',
          botTranslation: 'Um copo de água ou um café?',
          expected: ['Ur banne kafe, mar plij.', 'ur banne kafe', 'mar plij'],
          hint: 'Peça com “Ur banne … , mar plij” (um copo/uma xícara de …, por favor).',
        },
        communityPrompt: 'Descreva sua casa e o que você come: use “An ti zo …” e “Debriñ a ran …”.',
      },
      {
        id: 'br-u2-l2',
        title: 'Ruz, glas, gwenn, du',
        kind: 'licao',
        words: ['ruz', 'glas', 'gwenn', 'du', 'bras', 'bihan'],
        cloze: [
          { sentence: 'Gwin ___, mar plij.', answer: 'ruz', options: ['ruz', 'gwenn', 'glas'], translation: 'Vinho tinto, por favor.' },
          { sentence: '___ eo an ti.', answer: 'Bras', options: ['Bras', 'Bihan', 'Du'], translation: 'A casa é grande.' },
          { sentence: '___ eo al logodenn.', answer: 'Bihan', options: ['Bihan', 'Bras', 'Du'], translation: 'O rato é pequeno.' },
        ],
        voice: {
          bot: 'Ruz pe gwenn eo da gador?',
          botTranslation: 'Sua cadeira é vermelha ou branca?',
          expected: ["Ruz eo ma c'hador.", 'ruz', 'glas'],
          hint: 'Responda com uma cor: “Ruz eo…”, “Glas eo…” ou “Gwenn eo…”.',
        },
        communityPrompt: 'Descreva as cores de três coisas da sua casa, usando “… eo” (ruz, glas, gwenn, du).',
      },
      {
        id: 'br-u2-l3',
        title: 'Test: an ti hag ar gwin ruz',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bras pe bihan eo da di? Ha ruz pe gwenn eo an nor?',
          botTranslation: 'Sua casa é grande ou pequena? E a porta é vermelha ou branca?',
          expected: ['Bihan eo ma zi, ha ruz eo an nor.', 'bihan', 'bras', 'ruz'],
          hint: 'Use “Bras eo…” ou “Bihan eo…” para o tamanho, e uma cor para a porta.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua casa e a comida que você gosta, usando “eo”, “zo” e “a ran”.',
      },
    ],
  },
];
