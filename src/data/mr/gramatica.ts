import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do marata — A1.1 ao A2.2 (pacote incompleto, falta do B1 em diante).
 * Fontes: Wikipedia “Marathi language” e “Marathi grammar”; Wiktionary (verbetes आपण, मला, तुला,
 * कुठे, राहणे, नाही; exemplos de मुलगा/मुलगी/भात/पुरी tirados do próprio artigo da Wikipédia sobre a
 * gramática do marata). Nível A2.1/A2.2: a posposição dativa “-ला” e a oblíqua “मुलाला” (Wikipédia,
 * “Marathi grammar”), “पेक्षा” e “गरज”/“पैसा”/“पैशाची” (cada um com frase de exemplo conferida no
 * Wiktionary) e o futuro de “असणे” (असेन/असशील/असेल/असू/असाल/असतील, Wikipédia “Marathi grammar”).
 */
export const GRAMMAR_MR: GrammarTopic[] = [
  {
    id: 'mr-g1',
    level: 'A1.1',
    title: 'A escrita devanágari do marata, e a letra ळ',
    emoji: '🔤',
    summary: 'A mesma escrita silábica (abugida) do hindi e do sânscrito, com uma letra própria do marata: ळ.',
    sections: [
      {
        text: 'O marata usa o devanágari, escrito da esquerda para a direita com as letras penduradas numa linha horizontal no topo. Cada consoante já carrega embutido o som “a”: sinais de vogal (“मात्रा”) grudados antes, depois, em cima ou embaixo da consoante trocam esse som. A variante do devanágari usada para o marata (chamada “बाळबोध”, balbodh) tem 36 consoantes e 16 vogais, e inclui uma letra que o devanágari padrão do hindi não usa: “ळ” (ḷa), um “l” retroflexo, diferente do “ल” (la) comum — um som típico do marata e de poucas outras línguas do sul da Índia.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['अ', 'um “a” curto', 'असणे (asṇe, “ser, estar”)'],
            ['आ', 'um “a” longo e aberto', 'आई (āī, “mãe”)'],
            ['घ', 'um “g” aspirado, soprado', 'घर (ghar, “casa”)'],
            ['ळ', 'um “l” retroflexo, exclusivo do marata — não existe no hindi padrão nem no português', 'वेळ (veḷ, “tempo”)'],
          ],
        },
        examples: [['नमस्कार, मी मराठी शिकत आहे.', 'Oi, eu estou aprendendo marata.']],
      },
    ],
    pitfalls: [
      'Ler o devanágari letra por letra, como o alfabeto latino: os sinais de vogal mudam de forma e de posição ao redor da consoante.',
      'Confundir “ळ” (retroflexo) com “ल” comum: são letras diferentes, mesmo parecendo quase iguais no papel.',
    ],
    quiz: [
      { question: 'A letra “ळ” existe…', options: ['no marata, mas não no devanágari padrão do hindi', 'em todas as línguas escritas em devanágari, inclusive o hindi', 'só no sânscrito clássico'], answer: 'no marata, mas não no devanágari padrão do hindi', explanation: '“ळ” é um “l” retroflexo próprio do marata (e de poucas outras línguas do sul da Índia), que não faz parte do alfabeto devanágari padrão do hindi.' },
      { question: 'O devanágari é uma escrita…', options: ['silábica (abugida): a consoante já vem com uma vogal embutida', 'alfabética, uma letra por som, sem vogal embutida', 'ideográfica, um símbolo por palavra'], answer: 'silábica (abugida): a consoante já vem com uma vogal embutida', explanation: 'Numa abugida como o devanágari, cada consoante soa com “a” por padrão, e sinais ao redor dela trocam essa vogal.' },
    ],
  },
  {
    id: 'mr-g2',
    level: 'A1.1',
    title: 'Ordem SOV e posposições: o verbo por último',
    emoji: '🔚',
    summary: 'O marata é uma língua SOV (sujeito-objeto-verbo) e usa posposições, que vêm depois do substantivo, não antes.',
    sections: [
      {
        text: 'Uma frase em marata costuma ter três partes, nesta ordem: sujeito (कर्ता), objeto (कर्म) e verbo (क्रियापद) — o verbo sempre no final. “मुलगा दगड फेकत आहे” é, palavra por palavra, “o menino pedra está-jogando”. Em vez de preposições antes do substantivo (como o “em” de “em Mumbai”), o marata usa posposições grudadas depois dele: “-त” marca lugar (“मुंबैत” = “em Mumbai”) e “-हून” marca origem (“मुंबैहून” = “de Mumbai”).',
        table: {
          head: ['Posposição', 'Sentido', 'Exemplo'],
          rows: [
            ['-त', 'em, dentro de (lugar)', 'मुंबैत (mumbait, “em Mumbai”)'],
            ['-हून', 'de, a partir de (origem)', 'मुंबैहून (mumbaihūn, “de Mumbai”)'],
          ],
        },
        examples: [
          ['मी मुंबैत राहतो.', 'Eu moro em Mumbai.'],
          ['मुलगा दगड फेकत आहे.', 'O menino está jogando pedra.'],
          ['मुलगा पुरी खातो.', 'O menino come puri (um tipo de pão frito).'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir palavra por palavra mantendo a ordem do português: em marata o verbo vem por último, não no meio da frase.',
      'Tentar usar uma palavra separada para “em” ou “de” antes do nome do lugar: em marata essa ideia vem depois, grudada no substantivo.',
    ],
    quiz: [
      { question: 'A ordem básica da frase em marata é…', options: ['sujeito – objeto – verbo (SOV)', 'sujeito – verbo – objeto (SVO)', 'verbo – sujeito – objeto (VSO)'], answer: 'sujeito – objeto – verbo (SOV)', explanation: 'Em “मुलगा दगड फेकत आहे” (o menino pedra está-jogando), o verbo “फेकत आहे” vem por último.' },
      { question: 'Como se diz “em Mumbai”?', options: ['मुंबैत (posposição depois do nome)', 'त मुंबई (preposição antes do nome)', 'मुंबई त्या (outra ordem qualquer)'], answer: 'मुंबैत (posposição depois do nome)', explanation: 'O marata usa posposições: “-त” gruda depois do substantivo, ao contrário do português, que usa a preposição “em” antes.' },
    ],
  },
  {
    id: 'mr-g3',
    level: 'A1.1',
    title: 'तू, तुम्ही, आपण: três níveis de “você” (e um “nós”)',
    emoji: '🙇',
    summary: 'O marata tem três pronomes para “você”, e o mais educado deles, “आपण”, também quer dizer “nós”.',
    sections: [
      {
        text: '“तू” é reservado para quem é muito próximo — família bem íntima, amigos de longa data ou crianças — e pode soar rude fora desses contextos. “तुम्ही” é o tratamento educado do dia a dia, usado também para o plural (“vocês”). “आपण” é o mais respeitoso dos três, usado com desconhecidos e pessoas mais velhas — mas “आपण” tem uma segunda vida: também significa “nós”, no sentido de “eu e você” (inclusivo), uma peculiaridade que o marata compartilha com línguas dravídicas vizinhas, e não com o hindi.',
        table: {
          head: ['Pronome', 'Uso', 'Exemplo'],
          rows: [
            ['तू', 'muito íntimo', 'तू कसा आहेस? (Como você vai?)'],
            ['तुम्ही', 'educado, do dia a dia, ou plural', 'तुम्ही कसे आहात?'],
            ['आपण', 'o mais respeitoso; também “nós” (eu + você)', 'आपण कोठले आहात? / आपण जाऊयात का?'],
          ],
        },
        examples: [
          ['तू कसा आहेस?', 'Como você vai? (bem íntimo, a um homem)'],
          ['आपण कोण?', 'Quem é você? (respeitoso)'],
          ['आपण जाऊयात का?', 'Vamos? (literalmente, “nós vamos, não é?”)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “तू” com um desconhecido ou alguém mais velho: soa rude, mesmo sem essa intenção.',
      'Não perceber, pelo contexto, se “आपण” está sendo usado como “você” educado ou como “nós”: numa pergunta dirigida a alguém (“आपण कोण?”) é “você”; numa ação compartilhada (“आपण जाऊयात का?”) é “nós”.',
    ],
    quiz: [
      { question: 'Para falar com um desconhecido pela primeira vez, o pronome mais seguro é…', options: ['आपण', 'तू', 'तुम्ही (também certo, mas आपण é o mais respeitoso)'], answer: 'आपण', explanation: '“आपण” é o tratamento mais respeitoso, ideal para desconhecidos e pessoas mais velhas.' },
      { question: 'Em “आपण जाऊयात का?”, o que “आपण” quer dizer?', options: ['“nós” (vamos, eu e você)', '“você”, de forma respeitosa', '“eles”'], answer: '“nós” (vamos, eu e você)', explanation: '“आपण” também funciona como “nós” no sentido inclusivo — uma peculiaridade do marata que o distingue do hindi.' },
    ],
  },
  {
    id: 'mr-g4',
    level: 'A1.2',
    title: 'Três gêneros: masculino, feminino e neutro',
    emoji: '⚥',
    summary: 'Ao contrário da maioria das línguas indo-arianas modernas, o marata manteve os três gêneros gramaticais do sânscrito.',
    sections: [
      {
        text: 'Todo substantivo do marata é masculino, feminino ou neutro — e o gênero não segue o sentido da palavra: “घर” (casa) é neutro, “चहा” (chá) é masculino e “आई” (mãe) é feminino. Os adjetivos terminados em “-आ” mudam de forma para concordar: masculino “-आ”, feminino “-ई”, neutro “-ए” — “चांगला” (bom) vira “चांगली” com um substantivo feminino e “चांगले” com um neutro. Adjetivos que não terminam em “-आ”, como “लहान” (pequeno) e “सुंदर” (bonito), não mudam nunca.',
        table: {
          head: ['Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['चांगला (bom)', 'चांगली', 'चांगले'],
            ['मुलगा (menino/filho)', 'मुलगी (menina/filha)', 'मूल (criança, qualquer gênero)'],
            ['चहा (chá), कुत्रा (cachorro)', 'गाय (vaca), आई (mãe)', 'घर (casa), झाड (árvore), पाणी (água)'],
          ],
        },
        examples: [
          ['माझे घर लहान आहे.', 'A minha casa é pequena. (घर é neutro)'],
          ['हा कुत्रा काळा आहे.', 'Este cachorro é preto. (कुत्रा é masculino)'],
          ['ही गाय मोठी आहे.', 'Esta vaca é grande. (गाय é feminino: “मोठी”, não “मोठा”)'],
        ],
      },
    ],
    pitfalls: [
      'Supor que o gênero segue o sentido, como em português: “घर” (casa) é neutro, sem ligação óbvia com o que a palavra significa.',
      'Esquecer de mudar a terminação do adjetivo: “हे झाड मोठा आहे” soa errado — com “झाड” (neutro) o certo é “हे झाड मोठे आहे”.',
    ],
    quiz: [
      { question: 'Como se diz “a árvore é grande”, com “झाड” (neutro)?', options: ['हे झाड मोठे आहे.', 'हे झाड मोठा आहे.', 'ही झाड मोठी आहे.'], answer: 'हे झाड मोठे आहे.', explanation: '“झाड” é neutro, então o demonstrativo (“हे”) e o adjetivo (“मोठे”) ficam na forma neutra.' },
      { question: 'Qual substantivo do marata é gramaticalmente NEUTRO mesmo se referindo a um ser vivo?', options: ['मूल (criança) e मांजर (gato)', 'मुलगा (menino)', 'आई (mãe)'], answer: 'मूल (criança) e मांजर (gato)', explanation: '“मूल” (criança, de qualquer gênero biológico) e “मांजर” (gato, também de qualquer gênero biológico) são gramaticalmente neutros no marata.' },
    ],
  },
  {
    id: 'mr-g5',
    level: 'A1.2',
    title: 'O passado que concorda com o objeto, não com o sujeito',
    emoji: '🔄',
    summary: 'No passado de verbos transitivos, o sujeito ganha a marca “-ने” e o verbo concorda com o objeto — um traço chamado “ergatividade cindida”.',
    sections: [
      {
        text: 'No presente, o verbo do marata concorda com o sujeito, como seria de esperar: “मुलगा पुरी खातो” (o menino come puri) tem o verbo “खातो” na forma masculina, concordando com “मुलगा” (menino, masculino). Mas no passado de verbos transitivos, o sistema muda: o sujeito recebe a posposição “-ने” (chamada marca ergativa) e o verbo passa a concordar com o objeto, não mais com o sujeito. Em “मुलाने पुरी खाल्ली” (o menino comeu puri), “मुलगा” vira “मुलाने” (com “-ने”), e o verbo “खाल्ली” está na forma feminina — concordando com “पुरी” (puri), que é feminina, e não com o menino.',
        examples: [
          ['मुलगा पुरी खातो.', 'O menino come puri. (presente: o verbo concorda com “मुलगा”, sujeito)'],
          ['मुलाने पुरी खाल्ली.', 'O menino comeu puri. (passado: “मुलाने” com “-ने”; o verbo concorda com “पुरी”, objeto)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que o verbo sempre concorde com o sujeito, como no presente: no passado de um verbo transitivo, ele concorda com o objeto.',
      'Esquecer o “-ने” no sujeito do passado: sem ele, a frase do passado fica incompleta ou soa errada.',
    ],
    quiz: [
      { question: 'Em “मुलाने पुरी खाल्ली”, com o que o verbo “खाल्ली” concorda?', options: ['com “पुरी”, o objeto (feminino)', 'com “मुलगा”, o sujeito (masculino)', 'não concorda com nada'], answer: 'com “पुरी”, o objeto (feminino)', explanation: 'No passado de verbos transitivos, o marata usa um sistema ergativo: o verbo concorda com o objeto, não com o sujeito.' },
      { question: 'O que acontece com o sujeito no passado de um verbo transitivo?', options: ['ganha a posposição “-ने”', 'perde o artigo', 'vira plural automaticamente'], answer: 'ganha a posposição “-ने”', explanation: '“मुलगा” (o menino) vira “मुलाने” (com “-ने”), a marca do caso ergativo.' },
    ],
  },
  {
    id: 'mr-g6',
    level: 'A2.1',
    title: 'A posposição dativa “-ला”: मला, तुला, मुलाला',
    emoji: '➡️',
    summary: 'O marata marca o objeto indireto — e também quem sente uma sensação ou precisa de algo — com a posposição “-ला”, grudada na forma oblíqua do substantivo.',
    sections: [
      {
        text: 'Pronomes como “मी” (eu) já têm uma forma contraída com “-ला”: “मला” (a mim, para mim). Substantivos comuns primeiro vão para a forma oblíqua (muitas vezes troca “-गा” por “-ा”) e só depois recebem “-ला”: “मुलगा” (menino) vira “मुला-” e depois “मुलाला” (ao menino, para o menino).',
        table: {
          head: ['Forma direta', 'Com “-ला”', 'Tradução'],
          rows: [
            ['मी (eu)', 'मला', 'a mim, para mim'],
            ['तू (tu)', 'तुला', 'a ti, para ti'],
            ['मुलगा (menino)', 'मुलाला', 'ao menino, para o menino'],
          ],
        },
        examples: [
          ['मी मुलाला ओळखतो.', 'Eu conheço o menino. (lit. “eu ao-menino reconheço”)'],
          ['मला भूक आहे.', 'Estou com fome. (lit. “a mim fome é”)'],
          ['मला पैशाची गरज आहे.', 'Eu preciso de dinheiro.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir “-ला” sempre como “para”: ele também marca sensações e necessidades, como em “मला भूक आहे” (estou com fome) — aqui quem sente a fome não é o sujeito gramatical da frase.',
      'Esquecer que o substantivo muda para a forma oblíqua antes de “-ला”: “मुलगा” (menino) vira “मुला-” antes de receber “-ला”, não fica “मुलगाला”.',
    ],
    quiz: [
      { question: 'O que “मुलाला” quer dizer?', options: ['ao menino, para o menino', 'o menino (sujeito)', 'os meninos'], answer: 'ao menino, para o menino', explanation: '“-ला” marca o objeto indireto; “मुलगा” (menino) vira “मुला-” na forma oblíqua antes de “-ला”.' },
      { question: 'Em “मला भूक आहे”, o que “मला” marca?', options: ['quem sente a fome (não é o sujeito gramatical)', 'o objeto direto', 'o possuidor da fome, como “meu”'], answer: 'quem sente a fome (não é o sujeito gramatical)', explanation: 'Sensações como fome usam “-ला” para marcar quem sente, enquanto a própria sensação (“भूक”) é o sujeito gramatical.' },
    ],
  },
  {
    id: 'mr-g7',
    level: 'A2.1',
    title: '“पेक्षा”: comparando duas coisas',
    emoji: '⚖️',
    summary: 'Para comparar, o marata usa a posposição “पेक्षा” (mais que, do que) depois da coisa com que se compara.',
    sections: [
      {
        text: '“पेक्षा” vem sempre depois do segundo termo da comparação, nunca antes — ao contrário do “do que” do português, que vem antes.',
        examples: [
          ['तो माणूस नितीन पेक्षा उंच आहे.', 'Aquele homem é mais alto do que o Nitin.'],
          ['गौरव माया पेक्षा उंच आहे.', 'Gaurav é mais alto do que a Maya.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “पेक्षा” antes da coisa comparada, como o “do que” do português: em marata ele vem depois (“नितीन पेक्षा”, não “पेक्षा नितीन”).',
      'Esquecer “आहे” no final: a comparação ainda precisa do verbo “ser/estar” para fechar a frase.',
    ],
    quiz: [
      { question: 'Como se diz “mais alto do que o Nitin”?', options: ['नितीन पेक्षा उंच', 'उंच पेक्षा नितीन', 'पेक्षा नितीन उंच'], answer: 'नितीन पेक्षा उंच', explanation: '“पेक्षा” vem depois da coisa comparada (“नितीन”), nunca antes.' },
      { question: 'O que “पेक्षा” significa?', options: ['mais que, do que (comparação)', 'e (conjunção)', 'ou'], answer: 'mais que, do que (comparação)', explanation: '“पेक्षा” é a posposição usada para comparar duas coisas.' },
    ],
  },
  {
    id: 'mr-g8',
    level: 'A2.2',
    title: '“गरज आहे”: expressando necessidade',
    emoji: '❗',
    summary: '“गरज” (necessidade) é um substantivo feminino: a partícula genitiva antes dela (“-ची”) concorda com “गरज”, não com a coisa necessária — por isso é sempre “-ची”.',
    sections: [
      {
        text: 'Para dizer que precisa de algo, o marata usa “मला [coisa, na forma oblíqua] ची गरज आहे”. No exemplo do Wiktionary, “पैसा” (dinheiro, masculino) vira “पैशा-” na forma oblíqua, e depois recebe “-ची”, não “-चा” (que seria a forma masculina) — porque “-ची” concorda com “गरज” (sempre feminina), não com “पैसा”.',
        examples: [['मला पैशाची गरज आहे.', 'Eu preciso de dinheiro. (lit. “a mim, de dinheiro, necessidade é”)']],
      },
    ],
    pitfalls: [
      'Achar que “-ची” muda conforme a coisa necessária: “-ची” concorda com “गरज” (sempre feminina), então é sempre “-ची”, nunca “-चा” ou “-चे” nessa construção.',
      'Esquecer o “मला” (ou “तुला”, “त्याला”…) no início: quem precisa de algo é marcado com a posposição dativa, não é o sujeito gramatical da frase — o sujeito é a própria “गरज”.',
    ],
    quiz: [
      { question: 'Em “मला पैशाची गरज आहे”, por que a palavra é “पैशाची” e não “पैशाचा”?', options: ['porque “-ची” concorda com “गरज” (feminino), não com “पैसा”', 'porque “पैसा” é feminino', 'porque é uma exceção sem explicação'], answer: 'porque “-ची” concorda com “गरज” (feminino), não com “पैसा”', explanation: '“गरज” é sempre feminina, então a partícula genitiva que vem antes dela é sempre “-ची”, seja o que for necessário.' },
      { question: 'O que “गरज” significa?', options: ['necessidade', 'vontade', 'permissão'], answer: 'necessidade', explanation: '“गरज” é o substantivo feminino para “necessidade”.' },
    ],
  },
  {
    id: 'mr-g9',
    level: 'A2.2',
    title: 'O futuro do verbo “असणे”: असेल, असेन…',
    emoji: '🔮',
    summary: 'O futuro de “असणे” (ser/estar/haver) tem uma raiz própria, diferente do presente (“आहे…”), e muda para cada pessoa.',
    sections: [
      {
        text: 'Assim como “आहे/आहेस/आहेत…” no presente, o futuro de “असणे” tem uma forma para cada pessoa.',
        table: {
          head: ['Pessoa', 'Futuro de “असणे”'],
          rows: [
            ['मी (eu)', 'असेन'],
            ['तू (tu)', 'असशील'],
            ['तो/ती/ते (ele/ela/aquilo)', 'असेल'],
            ['आपण (nós)', 'असू'],
            ['तुम्ही (vocês)', 'असाल'],
            ['ते (eles, plural)', 'असतील'],
          ],
        },
        examples: [
          ['उद्या थंड असेल.', 'Vai estar frio amanhã.'],
          ['मी उद्या मुंबैत असेन.', 'Eu vou estar em Mumbai amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “आहे” para o futuro: “आहे” é só presente; o futuro tem raiz própria, “असेल/असेन…”.',
      'Confundir “असेल” (ele/ela vai ser, 3ª pessoa) com “असशील” (tu vais ser, 2ª pessoa): são pessoas diferentes.',
    ],
    quiz: [
      { question: 'Como se diz “vai estar frio amanhã”?', options: ['उद्या थंड असेल.', 'उद्या थंड आहे.', 'उद्या थंड होता.'], answer: 'उद्या थंड असेल.', explanation: '“असेल” é o futuro (3ª pessoa) de “असणे”; “आहे” é presente.' },
      { question: 'Qual é o futuro de “असणे” na 1ª pessoa (eu)?', options: ['असेन', 'असशील', 'असेल'], answer: 'असेन', explanation: '“असेन” é “eu serei/estarei/haverá”, a forma de 1ª pessoa do futuro de “असणे”.' },
    ],
  },
];
