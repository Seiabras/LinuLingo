import type { UnitSeed } from '../types';

/**
 * Trilha do interslavo: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts). Fontes: `steen.free.fr/interslavic/` (grammar.html, verbs.html, nouns.html,
 * pronouns.html, en-ms.html), conferidas de novo nesta sessão.
 */
export const UNITS_ISV: UnitSeed[] = [
  {
    id: 'isv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dobry denj! Pervi slova',
    emoji: '🤝',
    card: {
      id: 'isv-c1',
      title: 'A língua que qualquer eslavo entende sem estudar',
      emoji: '🤝',
      history:
        'O interslavo (medžuslovjansky) não é a língua de nenhum país: é uma língua “zonal”, montada com as raízes e as regras gramaticais que o russo, o polonês, o tcheco, o croata e todas as outras línguas eslavas vivas têm em comum. A ideia é que qualquer eslavo consiga ler e entender interslavo sem nunca ter estudado a língua. O projeto atual nasceu em 2017, da fusão de dois projetos mais antigos (Slovianski e Novoslověnsky), e é mantido por um comitê de cinco linguistas, entre eles o holandês Jan van Steenbergen.',
      culture_tip:
        'O interslavo tem até conferências internacionais de verdade — a terceira aconteceu em Uherský Brod, na República Tcheca, em 2020 — e se escreve com dois alfabetos “oficialmente iguais”: o latino (usado neste curso) e o cirílico.',
      grammar_why:
        'O verbo “byti” (ser/estar) muda por pessoa (ja jesm, ty jesi, on jest...), diferente do esperanto ou do novial. Por isso o pronome de sujeito quase nunca é omitido, mesmo quando a terminação já indica quem fala.',
      grammar_examples: [
        ['Ja jesm Ana.', 'Eu sou a Ana.'],
        ['Ty jesi Petr?', 'Você é o Petro?'],
      ],
      character_guide: [
        ['č', 'som de “tch” português', 'denj não tem, mas “črveny” (vermelho) tem'],
        ['j', 'som de “i” rápido antes de vogal, como o “y” do inglês “yes”', 'moj (“moi”, meu)'],
        ['y', 'um “i” mais “fechado”/gutural que o “i” comum — em dúvida, pronuncie como “i”', 'ty (“tchi”, você)'],
      ],
    },
    lessons: [
      {
        id: 'isv-u1-l1',
        title: 'Dobry denj, blagodarju!',
        kind: 'licao',
        words: ['Dobry denj', 'Blagodarju', 'da', 'ne', 'ime', 'Sbogom'],
        cloze: [
          { sentence: '___, Petr!', answer: 'Dobry denj', options: ['Dobry denj', 'Blagodarju', 'Sbogom'], translation: 'Olá, Petro!' },
          { sentence: '___ za hlěb!', answer: 'Blagodarju', options: ['Blagodarju', 'Dobry denj', 'Ne'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Čto jest tvoje ___?', answer: 'ime', options: ['ime', 'denj', 'da'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Dobry denj! Čto jest tvoje ime?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Moje ime jest Ana.', 'ja jesm', 'moje ime'],
          hint: 'Diga seu nome com “Moje ime jest…” ou “Ja jesm…”.',
        },
        communityPrompt: 'Apresente-se em interslavo: diga seu nome com “Moje ime jest…” ou “Ja jesm…”.',
      },
      {
        id: 'isv-u1-l2',
        title: 'Ja, ty, on, ona',
        kind: 'licao',
        words: ['ja', 'ty', 'on', 'ona', 'byti', 'prijatelj'],
        cloze: [
          { sentence: '___ jesm Ana.', answer: 'Ja', options: ['Ja', 'Ty', 'On'], translation: 'Eu sou a Ana.' },
          { sentence: '___ jest moj otec.', answer: 'On', options: ['On', 'Ja', 'My'], translation: 'Ele é meu pai.' },
          { sentence: 'Ty jesi moj ___.', answer: 'prijatelj', options: ['prijatelj', 'ime', 'denj'], translation: 'Você é meu amigo.' },
        ],
        voice: {
          bot: 'Dobry denj! Či ty jesi Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['Ne, ja jesm Petr.', 'da, ja jesm', 'ne, ja jesm'],
          hint: 'Responda com “Da, ja jesm…” ou “Ne, ja jesm…” e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Čto jest tvoje ime?”.',
      },
      {
        id: 'isv-u1-l3',
        title: 'Prova: pervi slova',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dobry denj! Ja jesm Petr. A ty, kto ty jesi?',
          botTranslation: 'Olá! Eu sou o Petro. E você, quem é você?',
          expected: ['Dobry denj! Ja jesm Ana. Blagodarju!', 'ja jesm', 'blagodarju'],
          hint: 'Responda a saudação, diga quem você é e agradeça com “Blagodarju”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em interslavo: saudação, seu nome e uma despedida (“Sbogom”).',
      },
    ],
  },
  {
    id: 'isv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina i dom',
    emoji: '👪',
    card: {
      id: 'isv-c2',
      title: 'Uma raiz comum a quase toda língua eslava',
      emoji: '👪',
      history:
        'Palavras como “mati” (mãe), “brat” (irmão) e “dom” (casa) são praticamente iguais em russo, polonês, tcheco, croata e búlgaro — é exatamente esse núcleo comum que o comitê do interslavo escolhe para o vocabulário, em vez de inventar palavras novas ou copiar só uma língua eslava específica.',
      culture_tip:
        'O dicionário oficial do interslavo tem mais de 12 mil linhas — bem mais que a maioria das línguas construídas do app, por isso o interslavo chega a um teto mais alto (B2) na tabela de “até onde cada idioma consegue chegar”.',
      grammar_why:
        'O adjetivo do interslavo muda de terminação para combinar com o gênero do substantivo: “-y” para masculino, “-a” para feminino, “-o” para neutro — diferente do esperanto ou do novial, onde o adjetivo nunca muda.',
      grammar_examples: [
        ['Dom jest veliky.', 'A casa é grande. (masculino)'],
        ['Moja rodina jest velika.', 'Minha família é grande. (feminino)'],
      ],
      character_guide: [
        ['ě', 'o “yat”: amolece a consoante antes dele', 'hlěb (“khlyeb”, pão)'],
        ['ch inexistente', 'o interslavo usa “h” para o som gutural, não “ch”', 'sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'isv-u2-l1',
        title: 'Moja rodina',
        kind: 'licao',
        words: ['rodina', 'otec', 'mati', 'brat', 'sestra', 'imati'],
        cloze: [
          { sentence: 'Moj ___ jest dobry.', answer: 'otec', options: ['otec', 'mati', 'brat'], translation: 'Meu pai é bom.' },
          { sentence: 'Moj ___ jest maly.', answer: 'brat', options: ['brat', 'sestra', 'rodina'], translation: 'Meu irmão é pequeno.' },
          { sentence: 'Moja ___ jest velika.', answer: 'rodina', options: ['rodina', 'dom', 'ime'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Či tvoj brat jest dobry?',
          botTranslation: 'Seu irmão é bom?',
          expected: ['Da, moj brat jest dobry.', 'da, moj brat', 'ne, moj brat'],
          hint: 'Responda com “Da, moj brat jest…” ou “Ne, moj brat jest…”.',
        },
        communityPrompt: 'Descreva sua família em interslavo: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'isv-u2-l2',
        title: 'V mojem domu',
        kind: 'licao',
        words: ['dom', 'veliky', 'maly', 'dobry', 'voda', 'hlěb'],
        cloze: [
          { sentence: 'Moj ___ jest maly.', answer: 'dom', options: ['dom', 'hlěb', 'voda'], translation: 'Minha casa é pequena.' },
          { sentence: 'Voda jest ___.', answer: 'dobra', options: ['dobra', 'dobry', 'dobro'], translation: 'A água é boa.' },
          { sentence: '___ jest dobry.', answer: 'Hlěb', options: ['Hlěb', 'Dom', 'Voda'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Či tvoj dom jest veliky ili maly?',
          botTranslation: 'Sua casa é grande ou pequena?',
          expected: ['Moj dom jest maly.', 'dom jest veliky', 'dom jest maly'],
          hint: 'Use “Moj dom jest…” para descrever a casa.',
        },
        communityPrompt: 'Descreva sua casa em interslavo: se é grande (veliky) ou pequena (maly), e o que tem nela.',
      },
      {
        id: 'isv-u2-l3',
        title: 'Prova: rodina i dom',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Naš dom jest veliky. A či tvoj dom jest veliky ili maly?',
          botTranslation: 'Nossa casa é grande. E a sua casa é grande ou pequena?',
          expected: ['Moj dom jest maly, ale moja rodina jest velika.', 'moj dom', 'moja rodina'],
          hint: 'Diga como é sua casa com “Moj dom jest…” e fale da família com “Moja rodina jest…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em interslavo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
