import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do catalão, do A1.1 ao C2 (em andamento). */
export const GRAMMAR_CA: GrammarTopic[] = [
  {
    id: 'ca-g1',
    level: 'A1.1',
    title: 'Pronúncia e ortografia básica',
    emoji: '🔤',
    summary:
      'O catalão tem um sistema gráfico próprio e sons bem específicos. As regras essenciais de pronúncia das vogais, símbolos gráficos únicos como o ponto geminado (l·l) e o fenômeno da apostrofação do artigo.',
    sections: [
      {
        heading: 'As vogais e a vogal neutra',
        text: 'O catalão tem 7 sons vocálicos tônicos (a, e aberto, e fechado, i, o aberto, o fechado, u). No catalão oriental (a fala padrão de Barcelona e das Baleares), as vogais «a» e «e» átonas (sem acento tônico) viram uma «vogal neutra» — um som entre o A e o E, parecido com o «a» final de «mesa» no português. As vogais «o» e «u» átonas geralmente soam «u».',
        examples: [
          ['casa', 'casa (o «a» final soa como vogal neutra)'],
          ['pare', 'pai (o «e» final soa como vogal neutra)'],
          ['mare', 'mãe (o «e» final soa como vogal neutra)'],
          ['poma', 'maçã (o «a» final soa como vogal neutra; o «o» inicial é tônico, então fica aberto, não reduz)'],
        ],
      },
      {
        heading: 'Símbolos gráficos e sons únicos',
        text: 'O catalão usa letras e combinações exclusivas que o diferenciam de outras línguas românicas.',
        table: {
          head: ['Grafia', 'Nome', 'Como soa'],
          rows: [
            ['l·l', 'ela geminada', 'l duplo e prolongado, com uma pequena pausa antes (ex.: «col·legi»)'],
            ['ny', 'ena i grega', 'igual ao «nh» do português (ex.: «Catalunya»)'],
            ['ç', 'c trencada', 'igual ao «ç» do português, um «s» surdo (ex.: «Barça»)'],
            ['ix', '—', 'som de «x»/«ch» do português depois de vogal (ex.: «caixa»)'],
            ['tg / tj', '—', 'parecido com o «dj» de «dia» no português do Brasil (ex.: «platja»)'],
          ],
        },
        examples: [
          ['col·legi', 'colégio'],
          ['Catalunya', 'Catalunha'],
          ['caixa', 'caixa'],
          ['platja', 'praia'],
        ],
      },
      {
        heading: 'Apostrofação (elisió)',
        text: 'Quando o artigo definido masculino «el» ou feminino «la» vem antes de palavra que começa com vogal ou h mudo, a vogal do artigo some e vira apóstrofo («l\'»). É para não ter pausa entre duas vogais.',
        examples: [
          ["l'home", 'o homem (el + home)'],
          ["l'aigua", 'a água (la + aigua)'],
          ["l'estació", 'a estação (la + estació)'],
          ["l'amiga", 'a amiga (la + amiga)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o «l·l» (ponto geminado) com «ll» junto: «ll» sem ponto soa «lh» português (ex.: «llit» = cama), «l·l» é um l duplo prolongado.',
      'Separar o «ny» em «n» + «y»: é um dígrafo só, com som de «nh».',
      'Esquecer de apostrofar o artigo antes de vogal ou h mudo (escrever «el home» em vez de «l\'home»).',
    ],
    quiz: [
      {
        question: 'Qual é a forma correta do artigo masculino «el» antes de «home» (homem)?',
        options: ['el home', "l'home", 'la home'],
        answer: "l'home",
        explanation: 'Antes de palavra que começa com vogal ou h mudo, «el» sofre elisão e vira «l\'».',
      },
      {
        question: 'Como se pronuncia «ny», como em «Catalunya»?',
        options: ['Como o «lh» do português', 'Como o «nh» do português', 'Como o «rr» do português'],
        answer: 'Como o «nh» do português',
        explanation: 'O dígrafo «ny» do catalão é igual ao «nh» do português.',
      },
    ],
  },
  {
    id: 'ca-g2',
    level: 'A1.1',
    title: 'Artigos, gênero e plural',
    emoji: '📦',
    summary: 'As regras de gênero e número dos substantivos em catalão, os artigos definidos e indefinidos, e as contrações obrigatórias com as preposições mais comuns.',
    sections: [
      {
        heading: 'Artigos definidos e indefinidos',
        text: 'O catalão tem artigos masculinos e femininos, no singular e no plural. Os artigos singulares definidos sofrem apostrofação antes de vogal ou h mudo.',
        table: {
          head: ['Gênero/número', 'Definido', 'Definido (antes de vogal/h)', 'Indefinido'],
          rows: [
            ['Masculino singular', 'el', "l'", 'un'],
            ['Feminino singular', 'la', "l'", 'una'],
            ['Masculino plural', 'els', 'els', 'uns'],
            ['Feminino plural', 'les', 'les', 'unes'],
          ],
        },
        examples: [
          ['el llibre', 'o livro'],
          ['un llibre', 'um livro'],
          ['la taula', 'a mesa'],
          ['una taula', 'uma mesa'],
          ['els llibres', 'os livros'],
          ['les taules', 'as mesas'],
        ],
      },
      {
        heading: 'Regras principais de plural',
        text: 'A regra geral é acrescentar «-s»; palavras femininas terminadas em «-a» trocam a terminação por «-es»; palavras terminadas em vogal tônica ou sibilante acrescentam «-os».',
        examples: [
          ['llibre → llibres', 'livro → livros (regra geral: acrescenta -s)'],
          ['casa → cases', 'casa → casas (feminino em -a muda para -es)'],
          ['porta → portes', 'porta → portas (feminino em -a muda para -es)'],
          ['autobús → autobusos', 'ônibus → ônibus (terminada em vogal tônica/sibilante: acrescenta -os)'],
        ],
      },
      {
        heading: 'Preposições e contrações',
        text: 'As preposições «a», «de» e «per» se contraem com o artigo masculino «el»/«els». Se o artigo estiver apostrofado («l\'»), a contração NÃO acontece.',
        table: {
          head: ['Preposição + artigo', 'Contração', 'Exemplo', 'Tradução'],
          rows: [
            ['a + el', 'al', 'al parc', 'ao parque'],
            ['a + els', 'als', 'als parcs', 'aos parques'],
            ['de + el', 'del', 'del cotxe', 'do carro'],
            ['de + els', 'dels', 'dels cotxes', 'dos carros'],
            ['per + el', 'pel', 'pel camí', 'pelo caminho'],
            ['per + els', 'pels', 'pels camins', 'pelos caminhos'],
          ],
        },
        examples: [
          ['Vaig al mercat.', 'Vou ao mercado.'],
          ['El llibre del professor.', 'O livro do professor.'],
          ["De l'home.", 'Do homem (sem contração «del», porque o artigo está apostrofado: de + l\'home).'],
        ],
      },
    ],
    pitfalls: [
      'Formar o plural feminino em -a só com -s (escrever «casas» em vez de «cases»).',
      'Tentar contrair «de» com um artigo apostrofado formando «del» (o certo é «de l\'aigua», nunca «del aigua»).',
      'Confundir a preposição «a» com o artigo: o artigo feminino singular é «la».',
    ],
    quiz: [
      {
        question: 'Qual é o plural correto de «taula» (mesa)?',
        options: ['taulas', 'taules', 'taulos'],
        answer: 'taules',
        explanation: 'Substantivos femininos terminados em «-a» trocam a terminação por «-es» no plural.',
      },
      {
        question: 'Como fica «de» + «el» em «El cotxe ___ professor»?',
        options: ['do', 'del', "de l'"],
        answer: 'del',
        explanation: 'A preposição «de» com o artigo masculino «el» forma a contração «del».',
      },
    ],
  },
  {
    id: 'ca-g3',
    level: 'A1.1',
    title: 'Os verbos ésser/ser e estar',
    emoji: '👥',
    summary: 'Como o português, o catalão tem dois verbos para existência e estado: «ésser»/«ser» e «estar». A conjugação no presente e quando usar cada um.',
    sections: [
      {
        heading: 'Conjugação no presente do indicativo',
        text: 'As formas conjugadas no presente, para todas as pessoas.',
        table: {
          head: ['Pronome', 'ésser/ser', 'estar'],
          rows: [
            ['jo (eu)', 'soc', 'estic'],
            ['tu (tu/você)', 'ets', 'estàs'],
            ['ell/ella/vostè (ele/ela/o(a) senhor(a))', 'és', 'està'],
            ['nosaltres (nós)', 'som', 'estem'],
            ['vosaltres (vós/vocês)', 'sou', 'esteu'],
            ['ells/elles/vostès (eles/elas)', 'són', 'estan'],
          ],
        },
        examples: [
          ['Jo soc brasiler.', 'Eu sou brasileiro.'],
          ['Tu ets estudiant.', 'Você é estudante.'],
          ['Ell és de Barcelona.', 'Ele é de Barcelona.'],
          ['Nosaltres estem cansats.', 'Nós estamos cansados.'],
          ['On estàs?', 'Onde você está?'],
        ],
      },
      {
        heading: 'Quando usar ésser/ser × estar',
        text: 'A distinção lembra a do português: identidade, nacionalidade, profissão e características permanentes usam «ésser/ser»; localização temporária e estados físicos/emocionais usam «estar».',
        examples: [
          ['La Maria és alta i simpàtica.', 'A Maria é alta e simpática. (identidade/característica: ser)'],
          ['Aquest llibre és del Joan.', 'Este livro é do Joan. (origem/posse: ser)'],
          ['El cotxe està al garatge.', 'O carro está na garagem. (localização temporária: estar)'],
          ['Avui estic molt content.', 'Hoje estou muito contente. (estado temporário: estar)'],
        ],
      },
    ],
    pitfalls: [
      'Usar as formas do espanhol «soy»/«estoy» — em catalão é «soc» e «estic».',
      'Esquecer o acento na 3ª pessoa do plural de ser: «són» (eles são).',
      'Confundir «soc» (eu sou) com a palavra espanhola «sois» (vocês são).',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu sou brasileiro» em catalão?',
        options: ['Jo estic brasiler', 'Jo soc brasiler', 'Jo soy brasiler'],
        answer: 'Jo soc brasiler',
        explanation: 'Nacionalidade e origem usam «ésser/ser»: 1ª pessoa do singular «soc».',
      },
      {
        question: 'Qual é a forma de «estar» para «nosaltres» (nós) no presente?',
        options: ['som', 'estem', 'estan'],
        answer: 'estem',
        explanation: '«Nosaltres estem» é a 1ª pessoa do plural do presente de «estar».',
      },
    ],
  },
];
