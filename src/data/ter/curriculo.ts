import type { UnitSeed } from '../types';

/**
 * Trilha do terena: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes de cada palavra e de cada frase em vocabulario.ts: quase tudo
 * são abonações do dicionário de Denise Silva (2013) ou diálogos de Butler e Ekdahl (1979), na
 * grafia de Silva. Os únicos encaixes feitos aqui juntam um padrão atestado com uma palavra atestada:
 * “Linu ngoeha” segue “Davi ngóeha” (Butler e Ekdahl, Lição 3), e “Kuti koeha ne ha'a iti?” junta
 * “Cuti cóeha ne pe'ínu?” (como se chama seu irmão?, Lição 3, cuja lista de substituição traz “ha'a
 * João”) com “ha'a iti” (seu pai, Silva 2013, p. 79).
 */
export const UNITS_TER: UnitSeed[] = [
  {
    id: 'ter-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na keyeye? Apepo.',
    emoji: '👋',
    card: {
      id: 'ter-c1',
      title: 'Terenoe, o povo da terra',
      emoji: '🌱',
      history:
        'O terena (os falantes dizem “terenoe”) é uma língua indígena viva da família aruak, falada por cerca de 15 mil pessoas. O povo terena soma mais de 26 mil pessoas e vive sobretudo em Mato Grosso do Sul — em terras indígenas como Cachoeirinha, Taunay/Ipegue, Buriti, Limão Verde e Lalima, na região de Miranda e Aquidauana —, além de aldeias em São Paulo (Araribá e Icatu) e em Mato Grosso. Em Cachoeirinha (Miranda), a língua ainda é a mais falada no dia a dia; em outras, como Buriti e Nioaque, ela quase não é mais usada, e por isso é considerada uma língua ameaçada. Desde 2017 o terena é língua cooficial do município de Miranda. Este curso segue o terena de Cachoeirinha, na grafia usada nas escolas terena.',
      culture_tip:
        "Os terena são tradicionalmente agricultores: a roça (“kavane”) e a terra (“poke'e”, território) estão no centro da vida da aldeia. Num mito de criação terena, quando os primeiros terena saíram de uma gruta, receberam ofertas de instrumentos para fazer roça e de coisas para escrever — e escolheram os instrumentos de roça. Na hora de se despedir, o terena olha para o tempo: “Kiyakaxe” (até à tarde) se diz de manhã, “Iharoti” (até amanhã) também vale como “boa noite”, e “Po'i kaxe” (até outro dia) serve até para quem só vai rever a pessoa daqui a muito tempo.",
      grammar_why:
        'No terena, “eu”, “você” e “ele” moram dentro da própria palavra. A 3ª pessoa (ele/ela) não tem marca nenhuma: “koeha” é “chama-se”. A 2ª pessoa (você) muda uma vogal: “keha”, você se chama. E a 1ª pessoa (eu) “nasaliza” a palavra — o k vira ng: “ngoeha”, eu me chamo. Os pronomes soltos “undi” (eu), “iti” (você) e “uti” (nós) existem, mas aparecem mais para dar ênfase.',
      grammar_examples: [
        ['Na keyeye? — Apepo.', 'Como vai? — Vou bem.'],
        ['Kuti keha? — Davi ngoeha.', 'Como você se chama? — Eu me chamo Davi.'],
        ['Kene iti, kuti keha?', 'E você, como se chama?'],
        ['Ako mbiha mirandake.', 'Não vou para Miranda.'],
      ],
      character_guide: [
        ["' (apóstrofo)", 'oclusiva glotal: a garganta fecha e corta o som por um instante, como no meio de “oh-oh”', "po'i (outro), ha'a (pai)"],
        ['x', 'sempre como o “ch” de “chave”', 'xane (pessoa), xupu (mandioca)'],
        ['h', 'um sopro, como o “rr” de “terra” em muitos sotaques do Brasil', 'hoyeno (homem), hinga (vamos)'],
        ['v', 'varia entre o “v” de “vaca” e o “u” de “quase”', 'ovoku (casa), vo\'uti (mão)'],
        ['mb, nd, ng, nz, nj', 'consoantes com um “m” ou “n” na frente: é a marca de “eu/meu” (a nasalização da 1ª pessoa)', 'mbaho (minha boca), nduti (minha cabeça), ngoeha (eu me chamo)'],
      ],
    },
    lessons: [
      {
        id: 'ter-u1-l1',
        title: 'Na keyeye? Apepo.',
        kind: 'licao',
        words: ['Na keyeye?', 'Apepo', 'Unati', 'Ainapo yakoe', 'Iharoti', 'Hinga'],
        cloze: [
          { sentence: '___ Apepo.', answer: 'Na keyeye?', options: ['Na keyeye?', 'Iharoti.', 'Hinga.'], translation: 'Como vai? Vou bem.' },
          { sentence: 'Mbihopone. ___.', answer: 'Iharoti', options: ['Iharoti', 'Apepo', 'Unati'], translation: 'Estou voltando para casa. Até amanhã.' },
          { sentence: '___ ya ra naranga.', answer: 'Ainapo yakoe', options: ['Ainapo yakoe', 'Na keyeye', 'Hinga'], translation: 'Obrigado pela laranja.' },
        ],
        voice: {
          bot: 'Na keyeye?',
          botTranslation: 'Como vai?',
          expected: ['Apepo.', 'apepo'],
          hint: 'Responda com “Apepo.” (vou bem).',
        },
        communityPrompt: 'Cumprimente alguém com “Na keyeye?” e se despeça com “Iharoti!” (até amanhã) ou “Hinga!” (vamos!).',
      },
      {
        id: 'ter-u1-l2',
        title: 'Eem, ako: undi, iti, uti',
        kind: 'licao',
        words: ['Eem', 'Ako', 'Undi', 'Iti', 'Uti', 'Kuti keha?'],
        cloze: [
          { sentence: '___, Mirandake yonom.', answer: 'Eem', options: ['Eem', 'Ako', 'Uti'], translation: 'Sim, vou a Miranda.' },
          { sentence: '___ mbiha mirandake.', answer: 'Ako', options: ['Ako', 'Eem', 'Iti'], translation: 'Não vou para Miranda.' },
          { sentence: "Ko'ituketimo ___ kavaneke.", answer: 'uti', options: ['uti', 'iti', 'undi'], translation: 'Nós vamos trabalhar na roça.' },
        ],
        voice: {
          bot: 'Kuti keha?',
          botTranslation: 'Como você se chama?',
          expected: ['Linu ngoeha.', 'ngoeha'],
          hint: 'Diga o seu nome seguido de “ngoeha” (eu me chamo): “Linu ngoeha.”',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Kuti keha?” e responda “Eem” (sim) ou “Ako” (não) a uma pergunta.',
      },
      {
        id: 'ter-u1-l3',
        title: 'Teste: Na keyeye?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Na keyeye? Kuti keha?',
          botTranslation: 'Como vai? Como você se chama?',
          expected: ['Apepo. Linu ngoeha.', 'apepo', 'ngoeha'],
          hint: 'Responda as duas perguntas: “Apepo.” (vou bem) e o seu nome + “ngoeha”.',
        },
        communityPrompt: 'Escreva uma conversa curta em terena: cumprimento, o seu nome e uma despedida.',
      },
    ],
  },
  {
    id: 'ter-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Nza'a, enom: a família e o corpo",
    emoji: '👨‍👩‍👧',
    card: {
      id: 'ter-c2',
      title: 'Meu pai, minha cabeça: a nasalização',
      emoji: '👃',
      history:
        "Para dizer “meu” e “eu”, o terena não usa uma palavra separada: ele muda o som da própria palavra. A primeira consoante ganha um “m” ou “n” na frente e fica sonora — p vira mb, t vira nd, k vira ng, s vira nz, x e h viram nj (às vezes nz) — e as vogais antes dela ficam nasais, como o “ã” de “mãe”. Assim, “paho” (boca dele) vira “mbaho” (minha boca), “tuti” (cabeça dele) vira “nduti” (minha cabeça), “heve” (pé dele) vira “njeve” (meu pé), e “ha'a” (pai dele) vira “nza'a” (meu pai). Quando não há consoante para mudar, só as vogais ficam nasais, e a escrita marca isso com um m no fim: “eno” (mãe dele), “enom” (minha mãe).",
      culture_tip:
        "Na família terena, os parentes chamam-se de um jeito amplo: as irmãs da mãe também podem ser chamadas de “eno” (mãe) e os irmãos do pai de “ha'a” (pai), e os primos entram como irmãos. As famílias se organizam em “troncos”: a casa (“ovoku”) reúne uma família grande em volta de um tronco (“xuve”), a pessoa responsável por sustentar e cuidar do grupo. E na cozinha da avó não falta o “hihi”, um bolo de mandioca cozido na folha da bananeira, indispensável nas festas.",
      grammar_why:
        'Os nomes da família e do corpo são “de alguém” para sempre (posse inalienável): no terena eles não aparecem soltos, sempre vêm com o dono marcado — nasalizado para “meu”, com a vogal mudada para “seu” (“heve”, pé dele; “hivi”, seu pé) ou sem marca para “dele”. Já coisas que se podem dar ou vender ganham o sufixo -na: “ipe” é cama, “imbena” é a minha cama.',
      grammar_examples: [
        ["Ko'ituketi ne nza'a ya oyonokutike.", 'O meu pai está trabalhando na fazenda.'],
        ['Itukoti hihi ra onze.', 'A minha avó está fazendo hihi.'],
        ['Kohoneti ra nduti.', 'Estou com dor de cabeça (a minha cabeça dói).'],
        ["Hana'itine ra xi'ixa.", 'O seu filho cresceu.'],
      ],
      character_guide: [
        ['p → mb', 'meu/minha: o p ganha um m na frente', 'paho (boca dele) → mbaho (minha boca)'],
        ['t → nd', 'meu/minha: o t ganha um n na frente', 'tuti (cabeça dele) → nduti (minha cabeça)'],
        ['k → ng', 'meu/minha, eu: o k vira ng', 'kiri (nariz dele) → ngiri (meu nariz)'],
        ['h → nj, nz', 'meu/minha: o h vira nj ou nz', "heve (pé dele) → njeve (meu pé); ha'a (pai dele) → nza'a (meu pai)"],
        ['m no fim', 'marca só as vogais nasais (o m não se pronuncia como m)', 'eno (mãe dele) → enom (minha mãe)'],
      ],
    },
    lessons: [
      {
        id: 'ter-u2-l1',
        title: "Ha'a, eno, xe'exa",
        kind: 'licao',
        words: ["Ha'a", 'Eno', "Xe'exa", 'Ihine', 'Ose', 'Otu'],
        cloze: [
          { sentence: "Ko'ituketi ne ___ ya oyonokutike.", answer: "nza'a", options: ["nza'a", 'onze', 'inzine'], translation: 'O meu pai está trabalhando na fazenda.' },
          { sentence: 'Itukoti hihi ra ___.', answer: 'onze', options: ['onze', 'otu', "nza'a"], translation: 'A minha avó está fazendo hihi.' },
          { sentence: 'Ihikaxovoti ra ___.', answer: 'inzine', options: ['inzine', 'ihine', 'onze'], translation: 'A minha filha é estudante.' },
        ],
        voice: {
          bot: "Kuti koeha ne ha'a iti?",
          botTranslation: 'Como se chama o seu pai?',
          expected: ['Pedro koeha.', 'koeha'],
          hint: 'Diga o nome do seu pai seguido de “koeha” (chama-se): “Pedro koeha.”',
        },
        communityPrompt: "Apresente a sua família usando as formas de “meu/minha”: “nza'a” (meu pai), “enom” (minha mãe), “onze” (minha avó).",
      },
      {
        id: 'ter-u2-l2',
        title: 'Tuti, paho, heve: o corpo',
        kind: 'licao',
        words: ['Tuti', 'Paho', 'Heve', 'Uke', "Vo'uti", 'Kiri'],
        cloze: [
          { sentence: 'Kohoneti ra ___.', answer: 'nduti', options: ['nduti', 'tuti', 'mbaho'], translation: 'Estou com dor de cabeça (a minha cabeça dói).' },
          { sentence: 'Vakuti ra ___.', answer: 'mbaho', options: ['mbaho', 'paho', 'njeve'], translation: 'A minha boca é larga.' },
          { sentence: 'Ipusokovoti ra ___.', answer: 'njeve', options: ['njeve', 'heve', 'nduti'], translation: 'Bati o meu pé.' },
        ],
        voice: {
          bot: 'Kohoneti ra nduti.',
          botTranslation: 'Estou com dor de cabeça.',
          expected: ['Kohoneti ra nduti.', 'nduti'],
          hint: 'Repita a frase: “nduti” é “minha cabeça” — o t de “tuti” virou nd.',
        },
        communityPrompt: 'Aponte para partes do seu corpo e diga a forma de “meu/minha”: mbaho (minha boca), nduti (minha cabeça), njeve (meu pé).',
      },
      {
        id: 'ter-u2-l3',
        title: "Teste: Nza'a, enom",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Kuti koeha ne ha'a iti? Na keyeye?",
          botTranslation: 'Como se chama o seu pai? Como vai?',
          expected: ['Pedro koeha. Kohoneti ra nduti.', 'koeha', 'nduti'],
          hint: 'Diga o nome do seu pai + “koeha” e conte como você está: “Kohoneti ra nduti.” (estou com dor de cabeça).',
        },
        communityPrompt: "Escreva sobre a sua família com as formas de “meu/minha” (nza'a, enom, onze, inzine) e diga uma parte do corpo que dói: “Kohoneti ra…”.",
      },
    ],
  },
];
