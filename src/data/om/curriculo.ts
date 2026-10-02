import type { UnitSeed } from '../types';

/**
 * Trilha do oromo: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Da A2.1 ao C2 chega depois.
 * Fontes: Wikipedia (fatos sobre o oromo: família, nº de falantes, qubee, ejetivas), Omniglot
 * (frases de cumprimento), Wiktionary (pronomes, gênero e exemplos com "dha"/"kun").
 */
export const UNITS_OM: UnitSeed[] = [
  {
    id: 'om-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Akkam! Jalqaba',
    emoji: '👋',
    card: {
      id: 'om-c1',
      title: 'A língua com mais falantes nativos da Etiópia',
      emoji: '🇪🇹',
      history:
        'O oromo pertence ao ramo cuchítico da família afro-asiática — parente do somali e do afar, não do amárico, que é semítico. É a língua com mais falantes nativos da Etiópia: mais de 41 milhões de pessoas a falam lá, cerca de um terço da população do país, sobretudo na região de Oromia, no centro e no sul; falantes menores vivem também no norte do Quênia. Até 1991, o oromo era escrito sobretudo no alfabeto etíope (ge’ez) ou no árabe; depois da queda do regime de Mengistu, passou a se escrever oficialmente no qubee, um alfabeto latino criado para marcar bem os sons que o ge’ez não distinguia.',
      culture_tip:
        'O café (buna) nasceu na região etíope onde vivem os oromo, e a cerimônia do café — torrar, moer e servir em três rodadas diante dos convidados — é um momento social importante, parecido em espírito com o cafezinho oferecido a uma visita no Brasil.',
      grammar_why:
        'O oromo não tem um verbo “ser” solto como o português: usa “dha”, grudado no fim da frase, depois da palavra que descreve o sujeito. E essa palavra pode até mudar de forma: “Inni diimaa dha” (ele é vermelho) vira “Isheen diimtuu dha” (ela é vermelha).',
      grammar_examples: [
        ['Akkam! Maqaan koo Linu.', 'Oi! Meu nome é Linu.'],
        ['Maqaan kee eenyu?', 'Qual é o seu nome?'],
        ['Kun gaarii dha.', 'Isto é bom.'],
        ['Ani barataa dha.', 'Eu sou estudante.'],
      ],
      character_guide: [
        ['c', 'ejetiva: “tch” seco, fechado na garganta', 'ciree (café da manhã)'],
        ['q', 'ejetiva: “k” seco, fechado na garganta', 'qilleensa (ar, vento)'],
        ['x', 'ejetiva: “t” seco, fechado na garganta', 'xiqqaa (pequeno)'],
        ['dh', 'implosiva: a garganta puxa o ar para dentro ao soltar o “d”', 'dhiira (homem)'],
        ['vogal dobrada (aa, ii…)', 'vogal longa', 'ji’a (lua, mês)'],
        ['consoante dobrada (ll, dd…)', 'consoante geminada, mais “demorada”', 'baddaa (planalto)'],
      ],
    },
    lessons: [
      {
        id: 'om-u1-l1',
        title: 'Akkam, galatoomi, nagaatti!',
        kind: 'licao',
        words: ['akkam', 'baga nagaan dhufte', 'galatoomi', 'galatoomaa', 'maaloo', 'nagaatti'],
        cloze: [
          { sentence: '___! Maqaan koo Linu.', answer: 'Akkam', options: ['Akkam', 'Galatoomi', 'Nagaatti'], translation: 'Oi! Meu nome é Linu.' },
          { sentence: 'Bishaan, ___!', answer: 'maaloo', options: ['maaloo', 'galatoomi', 'nagaatti'], translation: 'Água, por favor!' },
          { sentence: '___, sai gobe!', answer: 'Galatoomi', options: ['Galatoomi', 'Akkam', 'Maaloo'], translation: 'Obrigado, até amanhã!' },
        ],
        voice: {
          bot: 'Akkam!',
          botTranslation: 'Oi! Como vai?',
          expected: ['Akkam! Galatoomi.', 'akkam', 'galatoomi'],
          hint: 'Devolva o cumprimento e agradeça: “Akkam! Galatoomi.”',
        },
        communityPrompt: 'Escreva três expressões em oromo: um cumprimento (“Akkam”), um agradecimento (“Galatoomi”) e uma despedida (“Nagaatti”).',
      },
      {
        id: 'om-u1-l2',
        title: 'Ani, ati, inni, isheen',
        kind: 'licao',
        words: ['ani', 'ati', 'inni', 'isheen', 'maqaa', 'dha'],
        cloze: [
          { sentence: '___ barataa dha.', answer: 'Isheen', options: ['Isheen', 'Inni', 'Ani'], translation: 'Ela é estudante.' },
          { sentence: 'Maqaan kee ___?', answer: 'eenyu', options: ['eenyu', 'maal', 'meeqa'], translation: 'Qual é o seu nome?' },
          { sentence: 'Kun gaarii ___.', answer: 'dha', options: ['dha', 'koo', 'kee'], translation: 'Isto é bom.' },
        ],
        voice: {
          bot: 'Akkam! Maqaan kee eenyu?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Maqaan koo Lúcia.', 'maqaan koo', 'ani'],
          hint: 'Diga seu nome com “Maqaan koo…”.',
        },
        communityPrompt: 'Apresente-se em oromo: diga seu nome com “Maqaan koo…” e, se quiser, complete com “Ani barataa dha.”',
      },
      {
        id: 'om-u1-l3',
        title: 'Qormaata: jalqaba',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Akkam! Maqaan kee eenyu?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Akkam! Maqaan koo Lúcia dha.', 'maqaan koo', 'akkam'],
          hint: 'Devolva o cumprimento (“Akkam!”) e diga seu nome com “Maqaan koo…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Akkam”), nome (“Maqaan koo…”) e um agradecimento (“Galatoomi”).',
      },
    ],
  },
  {
    id: 'om-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Maatii fi nyaata',
    emoji: '👪',
    card: {
      id: 'om-c2',
      title: 'Gadaa, Waaqeffannaa e o Irreecha',
      emoji: '🌾',
      history:
        'O povo oromo tem um sistema de governo próprio chamado gadaa: um conjunto de conselhos eleitos por consenso, com líderes que servem por oito anos antes de passar o cargo adiante — um sistema que existe desde antes do século XVI e regula desde a política até a vida religiosa. A religião tradicional, o Waaqeffannaa, cultua um só deus, Waaqa; hoje é seguida por uma minoria, depois de séculos de conversão ao cristianismo e ao islã, mas seu maior evento, o Irreecha — uma celebração de ação de graças que reúne milhões de pessoas todo ano na cidade de Bishoftu —, continua sendo a maior festa do calendário oromo.',
      culture_tip:
        'A família extensa é a base da vida social oromo, e perguntar pela família de alguém é parte natural de uma conversa — como perguntar pela saúde é parte de um cumprimento oromo completo.',
      grammar_why:
        'O possessivo oromo vem depois da palavra, não antes como em português: “nome” é “maqaa”, “meu nome” é “maqaan koo” (nome-o-meu), com o “-n” de sujeito grudado em “maqaa”.',
      grammar_examples: [
        ['Kun abbaa koo dha.', 'Este é o meu pai.'],
        ['Kun haadha koo dha.', 'Esta é a minha mãe.'],
        ['Buna gaarii dha.', 'O café está bom.'],
        ['Bishaan, maaloo!', 'Água, por favor!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'om-u2-l1',
        title: 'Maatii koo',
        kind: 'licao',
        words: ['abbaa', 'haadha', 'obboleessa', 'obboleettii', 'ilma', 'intala'],
        cloze: [
          { sentence: 'Kun ___ koo dha.', answer: 'abbaa', options: ['abbaa', 'ilma', 'obboleessa'], translation: 'Este é o meu pai.' },
          { sentence: 'Kun ___ koo dha.', answer: 'haadha', options: ['haadha', 'intala', 'obboleettii'], translation: 'Esta é a minha mãe.' },
          { sentence: 'Kun ___ koo dha.', answer: 'obboleettii', options: ['obboleettii', 'obboleessa', 'ilma'], translation: 'Esta é a minha irmã.' },
        ],
        voice: {
          bot: 'Maatiin kee gaarii dha?',
          botTranslation: 'Sua família está bem?',
          expected: ['Eeyyee, maatiin koo gaarii dha.', 'eeyyee', 'maatii'],
          hint: 'Responda com “Eeyyee, maatiin koo gaarii dha.”',
        },
        communityPrompt: 'Descreva sua família em oromo: “Kun abbaa koo dha”, “Kun haadha koo dha” e os demais parentes que você tem.',
      },
      {
        id: 'om-u2-l2',
        title: 'Bishaan, buna fi nyaata',
        kind: 'licao',
        words: ['bishaan', 'buna', 'aannan', 'nyaata', 'foon', 'nyaachuu'],
        cloze: [
          { sentence: '___, maaloo!', answer: 'Bishaan', options: ['Bishaan', 'Buna', 'Aannan'], translation: 'Água, por favor!' },
          { sentence: '___ gaarii dha.', answer: 'Buna', options: ['Buna', 'Foon', 'Nyaata'], translation: 'O café está bom.' },
          { sentence: '___ gaarii dha.', answer: 'Nyaata', options: ['Nyaata', 'Bishaan', 'Aannan'], translation: 'A comida está boa.' },
        ],
        voice: {
          bot: 'Buna gaarii dha!',
          botTranslation: 'O café está bom!',
          expected: ['Eeyyee, galatoomi!', 'eeyyee', 'galatoomi'],
          hint: 'Concorde e agradeça: “Eeyyee, galatoomi!”',
        },
        communityPrompt: 'Escreva o que você gosta de comer e beber, usando “bishaan”, “buna”, “nyaata” e “gaarii dha”.',
      },
      {
        id: 'om-u2-l3',
        title: 'Qormaata: maatii fi nyaata',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Maatiin kee gaarii dha? Buna gaarii dha?',
          botTranslation: 'Sua família está bem? O café está bom?',
          expected: ['Eeyyee, maatiin koo gaarii dha. Buna gaarii dha.', 'maatiin koo', 'buna'],
          hint: 'Diga que sua família está bem (“Maatiin koo gaarii dha”) e comente sobre o café (“Buna gaarii dha”).',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e sobre o que você come e bebe, usando “dha”, “koo” e as palavras desta unidade.',
      },
    ],
  },
];
