import type { UnitSeed } from '../types';

/**
 * Trilha do tagalo: por enquanto só as duas unidades do nível A1 (o pacote está marcado como novo e
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_TL: UnitSeed[] = [
  {
    id: 'tl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kumusta! Unang mga hakbang',
    emoji: '👋',
    card: {
      id: 'tl-c1',
      title: 'A língua por trás do filipino',
      emoji: '🗺️',
      history:
        'O tagalo (Wikang Tagalog) é falado como língua nativa principalmente em Metro Manila e em boa parte da ilha de Luzon, nas Filipinas. Em 1937, o presidente Manuel L. Quezon o escolheu como base da língua nacional do país — hoje chamada de filipino, oficial ao lado do inglês. As Filipinas têm mais de cem línguas locais; o tagalo e o filipino funcionam como língua franca entre elas, parecido com o papel do indonésio na Indonésia (outra língua austronésia deste app).',
      culture_tip:
        'O tagalo não tem um jeito gramatical de dizer “você” formal como o português. Em vez disso, acrescenta-se a partícula “po” nas frases para mostrar respeito a quem é mais velho ou desconhecido: “Salamat po!” é um “obrigado” respeitoso. “Opo” é o “sim” respeitoso, usado para responder a alguém que se quer tratar com educação.',
      grammar_why:
        'Um dos traços mais estudados do tagalo é que o verbo muda de forma para indicar qual parte da frase é o “foco”, marcado pela partícula “ang” — pode ser quem faz a ação, o que recebe a ação, ou outro papel. É um sistema bem diferente do português, chamado de alinhamento austronésio; esta unidade só apresenta os pronomes e as partículas de respeito, o foco do verbo vem na próxima unidade.',
      grammar_examples: [
        ['Mabuti ako.', 'Eu estou bem.'],
        ['Mabuti ka ba?', 'Você está bem?'],
        ['Kain tayo!', 'Vamos comer! (“tayo”, nós incluindo quem ouve)'],
        ['Salamat po!', 'Obrigado! (com respeito)'],
      ],
      character_guide: [
        ['ng', 'som nasal único, como o “ng” de “sing” em inglês, nunca “n” + “g” separados', 'magandang (de “maganda” + o ligante -ng)'],
        ['po / opo', 'partículas de respeito acrescentadas à frase, sem mudar o verbo nem o pronome', 'Salamat po! (obrigado, com respeito), Opo (sim, com respeito)'],
      ],
    },
    lessons: [
      {
        id: 'tl-u1-l1',
        title: 'Kumusta, salamat, paalam',
        kind: 'licao',
        words: ['kumusta', 'magandang umaga', 'paalam', 'salamat', 'oo', 'hindi'],
        cloze: [
          { sentence: '___ ka?', answer: 'Kumusta', options: ['Kumusta', 'Paalam', 'Salamat'], translation: 'Como você está?' },
          { sentence: '___ po!', answer: 'Magandang umaga', options: ['Magandang umaga', 'Paalam', 'Hindi'], translation: 'Bom dia! (com respeito)' },
          { sentence: '___ po!', answer: 'Salamat', options: ['Salamat', 'Oo', 'Hindi'], translation: 'Obrigado! (com respeito)' },
        ],
        voice: {
          bot: 'Kumusta ka?',
          botTranslation: 'Como você está?',
          expected: ['Mabuti ako, salamat! Ikaw?', 'mabuti', 'salamat'],
          hint: 'Responda que está bem com “Mabuti ako” e agradeça com “salamat”.',
        },
        communityPrompt: 'Escreva três frases em tagalo: uma pergunta com “Kumusta ka?”, um agradecimento com “Salamat” e uma despedida com “Paalam”.',
      },
      {
        id: 'tl-u1-l2',
        title: 'Ako, ikaw, siya',
        kind: 'licao',
        words: ['ako', 'ikaw', 'siya', 'kami', 'tayo', 'sila'],
        cloze: [
          { sentence: 'Mabuti ___.', answer: 'ako', options: ['ako', 'ikaw', 'siya'], translation: 'Eu estou bem.' },
          { sentence: 'Mabuti ka ___?', answer: 'ba', options: ['ba', 'ako', 'po'], translation: 'Você está bem?' },
          { sentence: 'Kain ___!', answer: 'tayo', options: ['tayo', 'kami', 'sila'], translation: 'Vamos comer! (incluindo quem ouve)' },
        ],
        voice: {
          bot: 'Ako si Juan. Ikaw?',
          botTranslation: 'Eu sou o Juan. E você?',
          expected: ['Ako si Ana.', 'ako si'],
          hint: 'Diga o seu nome com “Ako si…” (use o seu próprio nome).',
        },
        communityPrompt: 'Apresente-se em tagalo: diga o seu nome com “Ako si…” e responda “Mabuti ako” a uma pergunta “Kumusta ka?”.',
      },
      {
        id: 'tl-u1-l3',
        title: 'Prova: unang hakbang',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kumusta ka? Ano ang pangalan mo?',
          botTranslation: 'Como você está? Qual é o seu nome?',
          expected: ['Mabuti ako, salamat! Ako si Lucia.', 'mabuti ako', 'ako si'],
          hint: 'Responda “Mabuti ako, salamat!” e diga o seu nome com “Ako si…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: como você está (“Mabuti ako”), o seu nome (“Ako si…”) e uma despedida (“Paalam”).',
      },
    ],
  },
  {
    id: 'tl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pamilya at bahay',
    emoji: '👪',
    card: {
      id: 'tl-c2',
      title: 'Kuya e ate: tratamento pela idade, não só parentesco',
      emoji: '🧭',
      history:
        'Em filipino, “kuya” (irmão mais velho) e “ate” (irmã mais velha) vêm do chinês hokkien — heranças do comércio chinês antigo nas Filipinas, assim como “tinapay” (pão, de “tapay” + o infixo “-in-”) tem raiz austronésia e “salamat” (obrigado) veio do malaio “selamat”, que por sua vez veio do árabe “salama”. O tagalo juntou camadas de empréstimos de vários povos — malaios, chineses, espanhóis, depois americanos — sem deixar de ser, na gramática, uma língua bem austronésia.',
      culture_tip:
        'Nas Filipinas, “kuya” e “ate” não são usados só para irmãos de verdade: é comum chamar assim qualquer pessoa um pouco mais velha, mesmo sem parentesco — um sinal de respeito e proximidade ao mesmo tempo, parecido com “kakak” no indonésio (outra língua austronésia deste app), mas aqui os nomes dos dois são diferentes para cada sexo.',
      grammar_why:
        'Para juntar um número a um substantivo, o tagalo usa um pequeno “ligante”: “-ng” colado na palavra se ela termina em vogal, “na” separado se termina em consoante. Por isso “três cachorros” é “tatlong aso” (tatlo termina em vogal), mas “quatro casas” é “apat na bahay” (apat termina em consoante “t”).',
      grammar_examples: [
        ['Mabuti si Kuya.', 'O meu irmão mais velho está bem.'],
        ['Mabuti si Ate.', 'A minha irmã mais velha está bem.'],
        ['tatlong aso', 'três cachorros (tatlo + -ng, porque “tatlo” termina em vogal)'],
        ['apat na bahay', 'quatro casas (apat + na, porque “apat” termina em consoante)'],
      ],
      character_guide: [
        ["' (glottal stop)", 'travamento rápido na garganta, sem letra própria na escrita comum — só marcado nos dicionários', 'hindî [hinˈdiʔ] (não)'],
      ],
    },
    lessons: [
      {
        id: 'tl-u2-l1',
        title: 'Nanay, tatay, kuya, ate',
        kind: 'licao',
        words: ['nanay', 'tatay', 'kuya', 'ate', 'mabuti', 'masama'],
        cloze: [
          { sentence: 'Mabuti si ___.', answer: 'Nanay', options: ['Nanay', 'Tatay', 'Kuya'], translation: 'A mamãe está bem.' },
          { sentence: 'Mabuti si ___.', answer: 'Kuya', options: ['Kuya', 'Ate', 'Nanay'], translation: 'O irmão mais velho está bem.' },
          { sentence: '___ ba ito?', answer: 'Masama', options: ['Masama', 'Mabuti', 'Hindi'], translation: 'Isto é ruim?' },
        ],
        voice: {
          bot: 'Mabuti ba si Nanay?',
          botTranslation: 'A sua mãe está bem?',
          expected: ['Opo, mabuti po si Nanay.', 'mabuti', 'opo'],
          hint: 'Responda com “Opo, mabuti po…” para mostrar respeito.',
        },
        communityPrompt: 'Escreva sobre a sua família em tagalo: quem é “Nanay”, “Tatay”, e se você tem um “Kuya” ou uma “Ate”.',
      },
      {
        id: 'tl-u2-l2',
        title: 'Sa bahay',
        kind: 'licao',
        words: ['bahay', 'pinto', 'mesa', 'pagkain', 'isa', 'dalawa'],
        cloze: [
          { sentence: 'Malaki ang ___.', answer: 'bahay', options: ['bahay', 'pinto', 'mesa'], translation: 'A casa é grande.' },
          { sentence: 'Mabuti ang ___.', answer: 'pagkain', options: ['pagkain', 'bahay', 'mesa'], translation: 'A comida é boa.' },
          { sentence: '___ na bahay', answer: 'apat', options: ['apat', 'isa', 'dalawa'], translation: 'quatro casas' },
        ],
        voice: {
          bot: 'Malaki ba ang bahay mo?',
          botTranslation: 'A sua casa é grande?',
          expected: ['Hindi, maliit ang bahay ko.', 'maliit', 'bahay ko'],
          hint: 'Responda com “Malaki ang bahay ko” (grande) ou “Maliit ang bahay ko” (pequena).',
        },
        communityPrompt: 'Descreva a sua casa em duas frases: se é “malaki” (grande) ou “maliit” (pequena), e o que você gosta de comer (“pagkain”) nela.',
      },
      {
        id: 'tl-u2-l3',
        title: 'Prova: pamilya at bahay',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kumusta ang pamilya mo? Malaki ba ang bahay mo?',
          botTranslation: 'Como está a sua família? A sua casa é grande?',
          expected: ['Mabuti si Nanay at si Tatay. Malaki ang bahay namin.', 'mabuti si', 'bahay'],
          hint: 'Fale de “Nanay” e “Tatay” com “Mabuti si…” e descreva a casa com “Malaki ang bahay…” ou “Maliit ang bahay…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
