import type { UnitSeed } from '../types';

/**
 * Trilha do ka'apor: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fonte das palavras e frases: o dicionário por tópicos de Kakumasu &
 * Kakumasu (SIL Brasil, 2007) — ver o cabeçalho de vocabulario.ts. Contexto cultural: ISA
 * (pib.socioambiental.org/pt/Povo:Ka'apor) e o próprio dicionário (D.1.7.1, C.4.4, B.4.2).
 *
 * As frases são citações do dicionário (os cumprimentos de D.2.9 citados palavra por palavra;
 * “y tiha e'u”, tome muita água, A.11.2; “Emanga!”, prove!, B.5.5; “a'ewan”, chega, estou
 * satisfeito, B.1.10.1; “jaxi rehe jande jaho”, nós fomos pegar jabuti, IV.A). Adaptações, sempre
 * dentro de um molde atestado: “Ihẽ rer Linu” (ver o comentário em vocabulario.ts) e “Y ihẽ a'u”
 * (de “y mundu ihẽ a'u”, tomo água da fonte, A.5.1).
 */
export const UNITS_URB: UnitSeed[] = [
  {
    id: 'urb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ko ihẽ ajur!',
    emoji: '👋',
    card: {
      id: 'urb-c1',
      title: "Ka'apor, o povo da mata do Gurupi",
      emoji: '🌳',
      history:
        "O ka'apor é a língua do povo Ka'apor, que vive na Terra Indígena Alto Turiaçu, no norte do Maranhão — uma área de 5.301 km² de floresta amazônica entre os rios Gurupi e Turiaçu, demarcada em 1978 e homologada em 1982. São cerca de 1.900 pessoas (2020), e todas falam ka'apor como primeira língua; muitas também falam português. É uma língua da família tupi-guarani, prima do guarani, do tupi antigo e do nheengatu. Os antepassados dos Ka'apor viviam entre os rios Tocantins e Xingu, no Pará, e foram migrando para leste até chegar ao Maranhão por volta de 1870. Em 1928 fizeram a paz com os brasileiros no posto do Canindé, à beira do Gurupi, depois de muitas décadas de conflitos. O nome antigo “urubu”, dado por inimigos, é considerado ofensivo: o povo se chama Ka'apor.",
      culture_tip:
        "Quem chega a uma casa ka'apor anuncia: “Ko ihẽ ajur” (eu vim aqui), e o dono da casa responde “Ko nde erejur” (você veio para cá) — as duas pessoas apertam as mãos. Na hora de ir embora, quem sai diz “Ihẽ aho ta” (eu vou) e ouve de volta “Ere” (está bem). Para agradecer existe “pe tiki”, mas quase não se usa: muita gente prefere o “obrigado” do português.",
      grammar_why:
        "Em ka'apor, o verbo leva na frente um prefixo que diz quem faz a ação: “a-” para “eu” (ihẽ aho, eu vou), “ere-” para “você” (nde ereho, você vai), “ja-” para “nós” (jande jaho, nós vamos), “pe-” para “vocês” e “o-”/“u-” (ou nada) para “ele” e “eles” (oho, ele vai). O pronome livre (ihẽ, nde, a'e…) pode até cair, porque o prefixo já diz a pessoa. E o verbo costuma vir no fim da frase, depois do objeto: “y ihẽ a'u” (água eu tomo).",
      grammar_examples: [
        ['Ko ihẽ ajur.', 'Eu vim aqui.'],
        ['Ko nde erejur.', 'Você veio para cá.'],
        ['Koĩ ihẽ aho ta.', 'Amanhã eu vou.'],
        ['Jaxi rehe jande jaho.', 'Nós fomos pegar jabuti.'],
      ],
      character_guide: [
        ['y', '/ɨ/, som entre “i” e “u”, com a boca meio aberta, como no guarani e no nheengatu', 'y (água)'],
        ["'", 'oclusiva glotal /ʔ/: uma pequena parada do ar na garganta, como em “oh-oh”', "ka'a (mato)"],
        ['x', 'como o “x” de “xícara”', 'akuxi (cutia), pixã (gato)'],
        ['j', 'como o “i” de “pai” (semivogal), não como o “j” de “janela”', 'jahy (lua), jande (nós)'],
        ['á, é, ú (acento agudo)', 'marca ditongo, não a sílaba forte: “pái” soa como “pai”', 'pái (pai), kúi (cuia)'],
        ['tônica', 'cai sempre na última sílaba', 'warahy (wa-ra-HY), kunjã (kun-JÃ)'],
      ],
    },
    lessons: [
      {
        id: 'urb-u1-l1',
        title: 'Ko ihẽ ajur, ko nde erejur',
        kind: 'licao',
        words: ['Ko ihẽ ajur', 'Ko nde erejur', 'Ajur', 'Ihẽ aho ta', 'Ere', 'Anĩ'],
        cloze: [
          { sentence: 'Ko ___ ajur.', answer: 'ihẽ', options: ['ihẽ', 'nde', 'pehẽ'], translation: 'Eu vim aqui.' },
          { sentence: 'Ko nde ___.', answer: 'erejur', options: ['erejur', 'ajur', 'aho'], translation: 'Você veio para cá.' },
          { sentence: 'Ihẽ aho ta. — ___.', answer: 'Ere', options: ['Ere', 'Anĩ', 'Ajur'], translation: 'Eu vou. — Está bem.' },
        ],
        voice: {
          bot: 'Ko nde erejur.',
          botTranslation: 'Você veio para cá.',
          expected: ['Ajur.', 'ajur', 'Ko ihẽ ajur.', 'ko ihẽ ajur'],
          hint: 'O dono da casa saudou você: responda “Ajur” (eu vim).',
        },
        communityPrompt: 'Escreva o diálogo de chegada (“Ko ihẽ ajur.” / “Ko nde erejur.”) e o de saída (“Ihẽ aho ta.” / “Ere.”).',
      },
      {
        id: 'urb-u1-l2',
        title: "Ihẽ, nde, a'e",
        kind: 'licao',
        words: ['Ihẽ', 'Nde', "A'e", 'Jande', "Ma'e nde rer?", 'Ihẽ rer'],
        cloze: [
          { sentence: '___ aho ta.', answer: 'Ihẽ', options: ['Ihẽ', 'Nde', "A'eta"], translation: 'Eu vou.' },
          { sentence: "Ma'e ___ rer?", answer: 'nde', options: ['nde', 'ihẽ', 'jande'], translation: 'Como é o seu nome?' },
          { sentence: 'Jaxi rehe ___ jaho.', answer: 'jande', options: ['jande', 'ihẽ', 'nde'], translation: 'Nós fomos pegar jabuti.' },
        ],
        voice: {
          bot: "Ma'e nde rer?",
          botTranslation: 'Como é o seu nome?',
          expected: ['Ihẽ rer Linu.', 'ihẽ rer linu', 'ihẽ rer'],
          hint: 'Diga o seu nome depois de “Ihẽ rer” (meu nome): “Ihẽ rer Linu.”',
        },
        communityPrompt: "Apresente-se com “Ihẽ rer …” (meu nome é …) e pergunte o nome de alguém com “Ma'e nde rer?”.",
      },
      {
        id: 'urb-u1-l3',
        title: 'Test: ko ihẽ ajur',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Ko nde erejur. Ma'e nde rer?",
          botTranslation: 'Você veio para cá. Como é o seu nome?',
          expected: ['Ajur. Ihẽ rer Linu.', 'ajur', 'ihẽ rer'],
          hint: 'Responda à saudação com “Ajur” e diga o seu nome com “Ihẽ rer …”.',
        },
        communityPrompt: 'Escreva uma visita curta: chegue (“Ko ihẽ ajur.”), diga o seu nome (“Ihẽ rer …”) e despeça-se (“Ihẽ aho ta.”).',
      },
    ],
  },
  {
    id: 'urb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ihẽ pái, ihẽ mãi',
    emoji: '👪',
    card: {
      id: 'urb-c2',
      title: 'Família, nomes e penas',
      emoji: '🪶',
      history:
        "Entre os Ka'apor, os pais costumam ser chamados pelo nome do filho mais velho: um homem cujo filho se chama Nosẽ vira “Nosẽ-ru” (pai de Nosẽ) e uma mulher pode ser “Pije-mãi” (mãe de Pije). Esse costume ajudou a apagar algumas palavras antigas de parentesco: a de “mãe” (-hy) quase sumiu, e a de “pai” (-ru) vem sendo trocada aos poucos. Hoje se diz “ihẽ mãi” (minha mãe) e, cada vez mais, “ihẽ pái” (meu pai), palavras que vieram do português — as mulheres sempre dizem “pái”. A festa mais alegre da vida ka'apor é a de dar nome às crianças: várias recebem o nome juntas, com padrinhos, caxiri de mandioca e todo mundo enfeitado com penas.",
      culture_tip:
        "A arte plumária é o trabalho mais famoso dos Ka'apor, tema de livros inteiros: cocares, colares, brincos e pulseiras de penas vermelhas, amarelas, verdes e pretas, de araras, tucanos e japus. O cocar de penas do rabo do japu se chama “japu ruwái” (rabo do japu), e o colar de penas do peito do tucano, “tykajura”. Esses enfeites aparecem com toda a pompa nas festas de nomeação.",
      grammar_why:
        "Para dizer “meu”, basta pôr “ihẽ” antes do nome: “ihẽ pái” (meu pai), “ihẽ py” (meu pé). Mas muitos nomes mudam a primeira letra quando têm dono: “hok” é “a casa dele”, “ihẽ rok” é “minha casa” (o h vira r); “iankã” é “a cabeça dele”, “ihẽ ankã” é “minha cabeça” (o i cai). E alguns parentes dependem de quem fala: “meu filho”, para um homem, é “ihẽ ra'yr”; para uma mulher, “ihẽ membyr”.",
      grammar_examples: [
        ['Ihẽ rok.', 'Minha casa.'],
        ['Hamũi.', 'O avô dele.'],
        ['Ihẽ ramũi.', 'Meu avô.'],
        ['Nde py.', 'Teu pé.'],
      ],
      character_guide: [
        ['h- → r-', 'muitos nomes trocam o h pelo r quando o dono é “eu”, “você” ou “nós”', 'hok → ihẽ rok (minha casa)'],
        ['-uhu, -hu', 'grande', "tapi'iruhu (boi: anta grande), myrahu (árvore grande)"],
        ["ra'yr", 'filho (de homem); também “pequeno”', "tata ra'yr (fósforo: fogo pequeno)"],
        ['õ, ũ, ỹ', 'vogais nasais (til), como em português', "mokõi (dois), tamũi (velho), a'e tỹ (está certo)"],
      ],
    },
    lessons: [
      {
        id: 'urb-u2-l1',
        title: 'Ihẽ pái, ihẽ mãi',
        kind: 'licao',
        words: ['Ihẽ pái', 'Ihẽ mãi', 'Ihẽ ramũi', 'Ihẽ ari', "Ihẽ ra'yr", 'Ihẽ membyr'],
        cloze: [
          { sentence: 'Ihẽ ___.', answer: 'pái', options: ['pái', 'mãi', 'ari'], translation: 'Meu pai.' },
          { sentence: 'Ihẽ ___.', answer: 'ramũi', options: ['ramũi', 'hamũi', 'membyr'], translation: 'Meu avô.' },
          { sentence: 'Ihẽ ___.', answer: 'membyr', options: ['membyr', "ra'yr", 'mu'], translation: 'Meu filho (diz uma mulher).' },
        ],
        voice: {
          bot: 'Ihẽ pái.',
          botTranslation: 'Meu pai.',
          expected: ['Ihẽ mãi.', 'ihẽ mãi', 'mãi'],
          hint: 'Agora apresente a sua mãe: “Ihẽ mãi.”',
        },
        communityPrompt: 'Apresente a sua família com “ihẽ”: “Ihẽ pái” (meu pai), “Ihẽ mãi” (minha mãe), “Ihẽ ramũi” (meu avô), “Ihẽ ari” (minha avó).',
      },
      {
        id: 'urb-u2-l2',
        title: "Y, u'i, pako",
        kind: 'licao',
        words: ['Y', "U'i", 'Pako', "Mandi'ok", "A'u", 'Ihẽ hengwéi'],
        cloze: [
          { sentence: 'Y ihẽ ___.', answer: "a'u", options: ["a'u", 'aho', 'aker'], translation: 'Eu tomo água.' },
          { sentence: 'Ihẽ ___.', answer: 'hengwéi', options: ['hengwéi', 'rury', "re'õ"], translation: 'Estou com sede.' },
          { sentence: '___ tiha e\'u.', answer: 'Y', options: ['Y', 'Pako', "U'i"], translation: 'Tome muita água.' },
        ],
        voice: {
          bot: 'Emanga!',
          botTranslation: 'Prove!',
          expected: ['Katu te!', 'katu te', 'katu'],
          hint: 'Provou a comida? Elogie com “Katu te!” (muito bom!).',
        },
        communityPrompt: "Diga como você está (“Ihẽ hengwéi”, “Ihẽ rury”, “Ihẽ re'õ”) e o que você toma ou come com “… ihẽ a'u”.",
      },
      {
        id: 'urb-u2-l3',
        title: 'Test: ihẽ hengwéi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Y tiha e'u.",
          botTranslation: 'Tome muita água.',
          expected: ["A'ewan!", "a'ewan", 'katu te'],
          hint: "Já bebeu bastante? Diga “A'ewan!” (chega, estou satisfeito).",
        },
        communityPrompt: "Escreva sobre a sua família (“Ihẽ pái”, “Ihẽ mãi”…) e conte o que você come e bebe com “… ihẽ a'u”.",
      },
    ],
  },
];
