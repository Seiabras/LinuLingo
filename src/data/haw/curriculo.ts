import type { UnitSeed } from '../types';

/**
 * Trilha do havaiano: só as duas unidades do nível A1 (pacote marcado como incompleto — ver
 * `incomplete` em index.ts). Todas as frases usadas em lições, cloze e desafios de voz são tiradas
 * tal qual do vocabulario.ts (já conferido palavra a palavra) ou combinam palavras do mesmo arquivo
 * seguindo um padrão JÁ ATESTADO nele (ex.: numeral + substantivo + "koʻu", como em "ʻElua keiki
 * koʻu."). Fatos de história/cultura dos cards vêm de en.wikipedia.org/wiki/Hawaiian_language: a Lei
 * 57 de 1896 baniu o havaiano do ensino por 91 anos (até 1987); a língua virou cooficial do Havaí em
 * 1978; a ʻAha Pūnana Leo (escolas de imersão em "ninho de linguagem") começou a se formar em 1983 e
 * abriu seu primeiro centro em 1984; e Niʻihau é hoje o único lugar do mundo onde o havaiano é a
 * primeira língua cotidiana e o inglês é que é a língua estrangeira.
 */
export const UNITS_HAW: UnitSeed[] = [
  {
    id: 'haw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aloha! Pehea ʻoe?',
    emoji: '🌺',
    card: {
      id: 'haw-c1',
      title: 'Uma língua quase perdida, e recuperada',
      emoji: '🌺',
      history: 'Em 1896, a Lei 57 do governo que derrubou a monarquia havaiana determinou que “a língua inglesa será o meio e a base de ensino em todas as escolas públicas e privadas” — banindo, na prática, o havaiano das escolas por 91 anos, até 1987. O número de falantes despencou entre as décadas de 1830 e 1950, e por volta de 1997 os falantes nativos já eram menos de 0,1% da população do estado. A virada começou nos anos 1980: em 1978 o havaiano passou a ser, ao lado do inglês, língua oficial do estado do Havaí; e em 1983-1984 um grupo de famílias criou a ʻAha Pūnana Leo (“ninho de linguagem”), o primeiro programa de imersão pré-escolar em havaiano. Hoje há cerca de 2.000 falantes nativos entre 24.000 falantes fluentes (censo de 2011) — e Niʻihau continua sendo o único lugar do mundo onde o havaiano, não o inglês, é a língua do dia a dia.',
      culture_tip: 'Em vez de “norte/sul/leste/oeste”, quem mora no Havaí costuma indicar direção com “mauka” (para a montanha, terra adentro) e “makai” (para o mar) — um jeito de se orientar que só faz sentido numa ilha, olhando sempre para o centro vulcânico ou para a costa.',
      grammar_why: 'O havaiano não usa um verbo “ser/estar” para dizer como alguém está ou como algo é: o adjetivo já vem na frente da frase e funciona sozinho como predicado. “Maikaʻi au.” já quer dizer “eu estou bem”, sem nenhuma palavra a mais — é um reflexo da ordem verbo-sujeito-objeto (VSO) do havaiano, bem diferente da ordem sujeito-verbo do português.',
      grammar_examples: [
        ['Maikaʻi au.', 'Eu estou bem.'],
        ['Pehea ʻoe?', 'Como você está?'],
        ['ʻO wai kou inoa?', 'Qual é o seu nome?'],
      ],
      character_guide: [
        ['ʻ (ʻokina)', 'oclusiva glotal: uma parada curta na garganta, como a pausa no meio de “uh-oh” em inglês — é uma consoante própria do havaiano, não um apóstrofo decorativo', 'aloha, ʻohana, mahalo, aʻo'],
        ['ā, ē, ī, ō, ū (kahakō)', 'o traço marca uma vogal longa, que dura o dobro da curta e pode mudar o sentido da palavra', 'ʻāina (terra), kākou (nós), hōkū (estrela)'],
        ['Só 8 consoantes', 'h, k, l, m, n, p, w e o ʻokina — por isso tantas palavras havaianas soam parecidas entre si', 'Honolulu, Hawaiʻi, Waikīkī'],
      ],
    },
    lessons: [
      {
        id: 'haw-u1-l1',
        title: 'Aloha, mahalo, ʻae, ʻaʻole',
        kind: 'licao',
        words: ['aloha', 'aloha kakahiaka', 'mahalo', 'ʻae', 'ʻaʻole', 'e ʻoluʻolu'],
        cloze: [
          { sentence: '___ kakahiaka, e Kai!', answer: 'Aloha', options: ['Aloha', 'Mahalo', 'ʻAʻole'], translation: 'Bom dia, Kai!' },
          { sentence: '___ nui loa no ka poi!', answer: 'Mahalo', options: ['Mahalo', 'Aloha', 'ʻAe'], translation: 'Muito obrigado pela poi!' },
          { sentence: '___, maikaʻi au.', answer: 'ʻAe', options: ['ʻAe', 'ʻAʻole', 'Mahalo'], translation: 'Sim, eu estou bem.' },
        ],
        voice: {
          bot: 'Aloha! Pehea ʻoe?',
          botTranslation: 'Olá! Como você está?',
          expected: ['Maikaʻi au, mahalo.', 'maikaʻi au', 'maikaʻi'],
          hint: 'Responda com “Maikaʻi au, mahalo.” (eu estou bem, obrigado).',
        },
        communityPrompt: 'Cumprimente alguém em havaiano com “aloha” e diga como você está usando “maikaʻi” (bem) ou outra palavra de sentimento.',
      },
      {
        id: 'haw-u1-l2',
        title: 'Au, ʻoe, inoa, ʻohana',
        kind: 'licao',
        words: ['au', 'ʻoe', 'inoa', 'ʻohana', 'makuahine', 'keiki'],
        cloze: [
          { sentence: 'ʻO wai kou ___?', answer: 'inoa', options: ['inoa', 'ʻohana', 'keiki'], translation: 'Qual é o seu nome?' },
          { sentence: 'Nui koʻu ___.', answer: 'ʻohana', options: ['ʻohana', 'inoa', 'hale'], translation: 'Minha família é grande.' },
          { sentence: 'Nani kēia ___.', answer: 'keiki', options: ['keiki', 'makuahine', 'makua kāne'], translation: 'Esta criança é linda.' },
        ],
        voice: {
          bot: 'ʻO wai kou inoa?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['ʻO Kai koʻu inoa.', 'koʻu inoa'],
          hint: 'Responda com “ʻO [seu nome] koʻu inoa.” (meu nome é…).',
        },
        communityPrompt: 'Apresente sua família em havaiano usando “makuahine” (mãe) e “keiki” (criança/filho).',
      },
      {
        id: 'haw-u1-l3',
        title: 'Test: aloha, inoa, ʻohana',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aloha! Pehea ʻoe? ʻO wai kou inoa?',
          botTranslation: 'Olá! Como você está? Qual é o seu nome?',
          expected: ['Maikaʻi au. ʻO Kai koʻu inoa.', 'maikaʻi', 'koʻu inoa'],
          hint: 'Responda às duas perguntas: diga que está bem e diga seu nome com “ʻO ___ koʻu inoa.”',
        },
        communityPrompt: 'Escreva uma pequena apresentação sua em havaiano: cumprimento, como você está e seu nome.',
      },
    ],
  },
  {
    id: 'haw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ke ʻai nei au, ke inu nei au',
    emoji: '🥥',
    card: {
      id: 'haw-c2',
      title: 'Taro, poi e os verbos do dia a dia',
      emoji: '🥥',
      history: 'O kalo (taro) é a planta mais importante da alimentação tradicional havaiana: dele se faz a poi, um purê fermentado que, segundo a tradição, teria vindo de Hāloa, a primeira planta de kalo, considerada ancestral do povo havaiano. A palavra “kalo” vem do proto-polinésio *talo, a mesma raiz do inglês “taro” (emprestado de outra língua polinésia, o māori) — um parentesco de família, não uma coincidência.',
      culture_tip: 'O havaiano tem duas palavras para “um”: “hoʻokahi”, para se referir a UM objeto só (“hoʻokahi kīʻaha”, um copo), e “ʻekahi”, usado para CONTAR em sequência (“ʻekahi, ʻelua, ʻekolu…”, um, dois, três…) — são usos diferentes da mesma ideia de “um”.',
      grammar_why: 'Verbos de ação em havaiano levam uma partícula de tempo/aspecto colada antes deles, formando um bloco que vem primeiro na frase (ordem VSO): “ke…nei” marca uma ação acontecendo agora (“ke ʻai nei au”, eu estou comendo), e “ua” marca uma ação já concluída (“ua ʻai”, comeu). O sujeito (au, ʻoe, ia…) vem depois desse bloco verbal, não antes dele.',
      grammar_examples: [
        ['Ke ʻai nei au i ke kalo.', 'Eu estou comendo taro.'],
        ['Ua ʻai ka pōpoki i ka iʻa.', 'O gato comeu o peixe.'],
        ['Makemake au i ka poi.', 'Eu quero/gosto de poi.'],
      ],
      character_guide: [
        ['ke … nei', 'partícula de presente contínuo, em volta do verbo', 'ke hele nei (estou indo), ke inu nei (estou bebendo)'],
        ['ua', 'partícula de passado/perfeito, antes do verbo', 'ua ʻai (comeu), ua pau (terminou)'],
        ['e …', 'partícula de futuro/convite, antes do verbo', 'e hoʻomaka kākou (vamos começar)'],
      ],
    },
    lessons: [
      {
        id: 'haw-u2-l1',
        title: 'Ke ʻai nei au, ke inu nei au',
        kind: 'licao',
        words: ['ʻai', 'inu', 'wai', 'kalo', 'poi', 'makemake'],
        cloze: [
          { sentence: 'Ke ___ nei au i ke kalo.', answer: 'ʻai', options: ['ʻai', 'inu', 'hele'], translation: 'Eu estou comendo taro.' },
          { sentence: 'Ke inu nei au i ka ___.', answer: 'wai', options: ['wai', 'poi', 'ʻono'], translation: 'Eu estou bebendo água.' },
          { sentence: '___ au i ka poi.', answer: 'Makemake', options: ['Makemake', 'ʻOno', 'Hele'], translation: 'Eu quero/gosto de poi.' },
        ],
        voice: {
          bot: 'Makemake au i ka poi. A ʻo ʻoe?',
          botTranslation: 'Eu quero/gosto de poi. E você?',
          expected: ['Makemake au i ke kalo.', 'makemake au'],
          hint: 'Diga o que você quer com “Makemake au i ___.” (eu quero/gosto de…), usando “ke kalo” (o taro) ou outra comida.',
        },
        communityPrompt: 'Escreva o que você come e bebe usando “ke ʻai nei au i” (estou comendo) e “ke inu nei au i” (estou bebendo).',
      },
      {
        id: 'haw-u2-l2',
        title: 'Nā helu: ʻekahi–ʻumi',
        kind: 'licao',
        words: ['ʻekahi', 'ʻelua', 'ʻekolu', 'ʻehā', 'ʻelima', 'ʻumi'],
        cloze: [
          { sentence: '___ keiki koʻu.', answer: 'ʻElua', options: ['ʻElua', 'ʻEkahi', 'ʻUmi'], translation: 'Eu tenho dois filhos.' },
          { sentence: '___ kumu ma ke kula.', answer: 'ʻUmi', options: ['ʻUmi', 'ʻEkolu', 'ʻElima'], translation: 'Há dez professores na escola.' },
          { sentence: 'ʻEhia kou mau keiki? ___ keiki koʻu.', answer: 'ʻEkolu', options: ['ʻEkolu', 'ʻElua', 'ʻEhā'], translation: 'Quantos filhos você tem? Eu tenho três filhos.' },
        ],
        voice: {
          bot: 'ʻEhia kou mau keiki?',
          botTranslation: 'Quantos filhos você tem?',
          expected: ['ʻElua keiki koʻu.', 'ʻelua'],
          hint: 'Responda com “[numeral] keiki koʻu.” (tenho … filhos), como em “ʻElua keiki koʻu.”',
        },
        communityPrompt: 'Conte de um a dez em havaiano e depois escreva uma frase dizendo quantos irmãos ou filhos você tem, com “koʻu”.',
      },
      {
        id: 'haw-u2-l3',
        title: 'Test: ʻai, inu, helu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Makemake au i ka poi. ʻEhia kou mau keiki?',
          botTranslation: 'Eu quero/gosto de poi. Quantos filhos você tem?',
          expected: ['Makemake au i ke kalo. ʻElua keiki koʻu.', 'makemake', 'ʻelua'],
          hint: 'Diga o que você também quer comer e responda quantos filhos você tem, com “koʻu”.',
        },
        communityPrompt: 'Escreva um pequeno diálogo de refeição em família, usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
