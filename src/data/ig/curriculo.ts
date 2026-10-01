import type { UnitSeed } from '../types';

/**
 * Trilha do igbo: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_IG: UnitSeed[] = [
  {
    id: 'ig-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ndewo! Mbido ọhụrụ',
    emoji: '👋',
    card: {
      id: 'ig-c1',
      title: 'A língua dos igbos',
      emoji: '🇳🇬',
      history:
        'O igbo (Asụsụ Igbo) é falado por dezenas de milhões de pessoas no sudeste da Nigéria — em estados como Anambra, Imo, Abia, Enugu e Ebonyi —, em cidades como Onitsha, Enugu, Owerri, Aba e Nnewi. É uma língua Níger-Congo, do ramo Volta-Níger, sem parentesco com o português. Por ter muitos dialetos bem diferentes entre si (do norte ao sul da região igbo), foi criada em 1972 uma forma literária padrão, o “Igbo izugbe” (igbo geral), baseada sobretudo nas falas de Owerri, Awka e Umuahia — a forma ensinada nas escolas e usada neste curso. O escritor Chinua Achebe, autor de “O mundo se despedaça”, escreveu em inglês, mas encheu seus romances de provérbios igbos.',
      culture_tip:
        '“Ndewo” serve tanto para cumprimentar quanto para agradecer ou dar as boas-vindas; “Nnọọ” é a forma mais comum de dizer “bem-vindo(a)”. Entre os igbos, é importante cumprimentar as pessoas mais velhas com respeito — por isso existem tratamentos como “Mazi” (senhor) e “Daa” (senhora) antes do nome.',
      grammar_why:
        'O igbo não tem um pronome diferente para “ele” e “ela”: “ọ” serve para os dois (e também para “isso”). E o nome se apresenta com o verbo “bụ” (ser): “Aha m bụ…” é, ao pé da letra, “nome eu é…”.',
      grammar_examples: [
        ['Ndewo! Aha m bụ Ngozi.', 'Olá! Meu nome é Ngozi.'],
        ['Kedụ aha gị?', 'Qual é o seu nome?'],
        ['Ọ bụ enyi m.', 'Ele/ela é meu amigo/minha amiga.'],
        ['Daalụ! Ka ọ dị!', 'Obrigado! Até mais!'],
      ],
      character_guide: [
        ['ị, ọ, ụ', 'vogais próprias do igbo, mais “pesadas” que i, o, u — não é um acento decorativo', 'nwanyị (mulher), ọka (milho), ụlọ (casa)'],
        ['ṅ', 'som nasal sozinho, como o “ng” de “ringue”', 'nkwọ (um dos 4 dias da semana igbo)'],
        ['gb, kp, nw', 'grupos de letras que valem um só som (lábios e garganta juntos)', 'nwa (filho/filha), nwoke (homem)'],
        ['tom (não marcado no dia a dia)', 'a mesma palavra escrita pode ter sentidos opostos, só pelo tom da voz', '“akwa” pode ser choro, cama, ovo ou pano'],
      ],
    },
    lessons: [
      {
        id: 'ig-u1-l1',
        title: 'Ndewo, daalụ, biko',
        kind: 'licao',
        words: ['ndewo', 'nnọọ', 'kedụ', 'daalụ', 'biko', 'ndo'],
        cloze: [
          { sentence: '___! Kedụ?', answer: 'Ndewo', options: ['Ndewo', 'Daalụ', 'Ndo'], translation: 'Olá! Como vai?' },
          { sentence: '___, nna m!', answer: 'Daalụ', options: ['Daalụ', 'Ndewo', 'Nnọọ'], translation: 'Obrigado, meu pai!' },
          { sentence: '___, nye m mmiri.', answer: 'Biko', options: ['Biko', 'Ndo', 'Nnọọ'], translation: 'Por favor, me dê água.' },
        ],
        voice: {
          bot: 'Ndewo! Kedụ?',
          botTranslation: 'Olá! Como vai?',
          expected: ['Ọ dị mma, daalụ!', 'ọ dị mma', 'daalụ'],
          hint: 'Responda que está bem com “Ọ dị mma” e agradeça com “daalụ”.',
        },
        communityPrompt: 'Escreva três palavras de educação em igbo: uma saudação (“Ndewo…”), um agradecimento (“Daalụ…”) e um pedido de desculpas (“Ndo…”).',
      },
      {
        id: 'ig-u1-l2',
        title: 'M, gị, ọ — aha gị bụ gịnị?',
        kind: 'licao',
        words: ['m', 'gị', 'ọ', 'aha', 'bụ', 'onye'],
        cloze: [
          { sentence: 'Aha ___ bụ Ngozi.', answer: 'm', options: ['m', 'gị', 'ọ'], translation: 'Meu nome é Ngozi.' },
          { sentence: 'Kedụ aha ___?', answer: 'gị', options: ['gị', 'm', 'ha'], translation: 'Qual é o seu nome?' },
          { sentence: '___ bụ enyi m.', answer: 'Ọ', options: ['Ọ', 'Gị', 'M'], translation: 'Ele/ela é meu amigo/minha amiga.' },
        ],
        voice: {
          bot: 'Kedụ aha gị?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Aha m bụ Ana.', 'aha m bụ'],
          hint: 'Diga seu nome com “Aha m bụ…”.',
        },
        communityPrompt: 'Apresente-se em igbo: diga o seu nome com “Aha m bụ…” e pergunte o nome de alguém com “Kedụ aha gị?”.',
      },
      {
        id: 'ig-u1-l3',
        title: 'Prova: mbido ọhụrụ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ndewo! Aha m bụ Chidi. Kedụ aha gị?',
          botTranslation: 'Olá! Meu nome é Chidi. Qual é o seu nome?',
          expected: ['Ndewo, Chidi! Aha m bụ Ana.', 'aha m bụ', 'ndewo'],
          hint: 'Devolva o cumprimento (“Ndewo”), e diga o seu nome com “Aha m bụ…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em igbo: cumprimento, nome com “Aha m bụ…” e um agradecimento com “Daalụ”.',
      },
    ],
  },
  {
    id: 'ig-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ezinụlọ na ụlọ',
    emoji: '👪',
    card: {
      id: 'ig-c2',
      title: 'A família e a casa igbo',
      emoji: '🏠',
      history:
        'Entre os igbos, a “ezinụlọ” (família) costuma ir além de pai, mãe e filhos: inclui avós, tios e primos de um mesmo “compound” (o terreno onde várias casas da mesma linhagem ficam lado a lado). Cidades como Enugu — antiga capital da região do carvão e, por um breve período, capital da autoproclamada República de Biafra — e Owerri cresceram muito no século XX, mas a vida de muitas famílias ainda gira em torno do ụlọ (casa) e do apoio da família grande.',
      culture_tip:
        'A semana tradicional igbo tem só quatro dias — eke, orie, afọ e nkwọ —, cada um ligado a um mercado que se revezava entre as cidades da região; é por isso que o Mercado Onitsha, um dos maiores da África Ocidental, ainda hoje tem dias de maior movimento. A semana de sete dias do calendário ocidental é usada ao lado da semana de quatro dias, não no lugar dela.',
      grammar_why:
        'Para dizer “meu”, “seu”… o igbo não usa uma palavra separada antes do nome, como o português: o pronome vem colado depois do nome. “Aha m” é, ao pé da letra, “nome eu” (= meu nome); “nna gị” é “pai você” (= seu pai).',
      grammar_examples: [
        ['Ezinụlọ m bụ ndị ọma.', 'Minha família são pessoas boas.'],
        ['Nna m nọ n’ụlọ.', 'Meu pai está em casa.'],
        ['Ị nwere nwanne?', 'Você tem irmãos?'],
        ['Ụlọ gị dị mma.', 'Sua casa é boa.'],
      ],
      character_guide: [
        ['n’ụlọ', 'contração de “na” (em, no/na) + “ụlọ” (casa) antes de vogal', 'Nna m nọ n’ụlọ. (Meu pai está em casa.)'],
        ['dị', 'verbo de estado/qualidade: “é, está” para descrever como algo é', 'Ụlọ gị dị mma. (Sua casa é boa.)'],
      ],
    },
    lessons: [
      {
        id: 'ig-u2-l1',
        title: 'Ezinụlọ m',
        kind: 'licao',
        words: ['ezinụlọ', 'nna', 'nne', 'nwanne', 'nwa', 'nwe'],
        cloze: [
          { sentence: '___ m bụ ndị ọma.', answer: 'Ezinụlọ', options: ['Ezinụlọ', 'Nna', 'Nne'], translation: 'Minha família são pessoas boas.' },
          { sentence: '___ m nọ n’ụlọ.', answer: 'Nna', options: ['Nna', 'Nne', 'Nwa'], translation: 'Meu pai está em casa.' },
          { sentence: 'Ị ___ nwanne?', answer: 'nwere', options: ['nwere', 'bụ', 'chọrọ'], translation: 'Você tem irmãos?' },
        ],
        voice: {
          bot: 'Ị nwere nwanne?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Ee, enwere m otu nwanne.', 'ee', 'nwere'],
          hint: 'Responda com “Ee, enwere m…” ou “Mba”.',
        },
        communityPrompt: 'Descreva a sua família em igbo: quantos irmãos (nwanne) você tem e quem são a sua nna (pai) e nne (mãe).',
      },
      {
        id: 'ig-u2-l2',
        title: 'N’ụlọ',
        kind: 'licao',
        words: ['ụlọ', 'mmiri', 'nri', 'chọ', 'azụ', 'mma'],
        cloze: [
          { sentence: '___ m dị mma.', answer: 'Ụlọ', options: ['Ụlọ', 'Mmiri', 'Nri'], translation: 'Minha casa é boa.' },
          { sentence: 'M ___ mmiri.', answer: 'chọrọ', options: ['chọrọ', 'bụ', 'nwere'], translation: 'Eu quero água.' },
          { sentence: 'Nri a dị ___.', answer: 'mma', options: ['mma', 'ukwu', 'nta'], translation: 'Esta comida é boa.' },
        ],
        voice: {
          bot: 'I chọrọ mmiri?',
          botTranslation: 'Você quer água?',
          expected: ['Ee, achọrọ m mmiri.', 'ee', 'achọrọ m'],
          hint: 'Responda com “Ee, achọrọ m…” ou “Mba”.',
        },
        communityPrompt: 'Escreva o que você quer comer e beber em igbo, usando “M chọrọ…”.',
      },
      {
        id: 'ig-u2-l3',
        title: 'Prova: ezinụlọ na ụlọ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kedụ ka ezinụlọ gị dị?',
          botTranslation: 'Como está a sua família?',
          expected: ['Ezinụlọ m dị mma. Enwere m nwanne atọ.', 'ezinụlọ m dị mma', 'nwanne'],
          hint: 'Diga que a sua família vai bem (“Ezinụlọ m dị mma”) e quantos irmãos você tem (“Enwere m nwanne…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa em igbo, usando “dị mma”, “enwere m” e “bụ”.',
      },
    ],
  },
];
