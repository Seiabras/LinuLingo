import type { UnitSeed } from '../types';

/**
 * Trilha do klingon: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts).
 * Fontes: Marc Okrand, "The Klingon Dictionary" (Pocket Books, 1985/1992); klingonska.org
 * (Klingonska Akademien, tabelas de prefixos e numerais); kli.org (Klingon Language Institute,
 * vocabulário de apoio ao curso de klingon no Duolingo, hoje mantido pelo próprio KLI).
 *
 * Toda frase klingon abaixo segue a ordem OVS (objeto-verbo-sujeito) e o sistema de prefixos
 * verbais real: prefixo zero quando sujeito e objeto são de 3ª pessoa ("puq legh vav", o pai vê a
 * criança), "vI-" quando o sujeito é "eu" e o objeto é de 3ª pessoa ("Duj vIlegh jIH", eu vejo a
 * nave — exemplo citado tal e qual em fontes derivadas do próprio dicionário), "Da-" quando o
 * sujeito é "você" e o objeto é de 3ª pessoa ("tlhIngan Hol Dajatlh'a'?", você fala klingon?). Para
 * frases de identidade ("eu sou klingon"), o klingon não tem verbo "ser/estar": usa-se um PRONOME
 * como pivô depois do substantivo-predicado ("tlhIngan jIH", klingon eu = eu sou klingon).
 */
export const UNITS_TLH: UnitSeed[] = [
  {
    id: 'tlh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'nuqneH! tlhIngan jIH',
    emoji: '🖖',
    card: {
      id: 'tlh-c1',
      title: 'Uma língua feita para soar diferente de tudo',
      emoji: '🖖',
      history:
        'O klingon (tlhIngan Hol) foi criado pelo linguista Marc Okrand para os filmes de Star Trek: ele desenvolveu as primeiras falas para “Star Trek: The Motion Picture” (1979) e depois montou a língua propriamente para “Star Trek III: A Busca por Spock” (1984). Em 1985, Okrand publicou “The Klingon Dictionary”, que já vendeu mais de 300 mil cópias e continua sendo a única fonte confiável de vocabulário e gramática — tudo o que aparece neste curso vem dali ou do Klingon Language Institute (KLI), a organização fundada em 1992 que mantém o estudo fiel ao trabalho de Okrand.',
      culture_tip:
        'Como não existe uma palavra klingon para “olá” na cultura dos guerreiros, a saudação de verdade é “nuqneH”, que significa literalmente “o que você quer?” — direta como o próprio povo klingon de ficção. O KLI até certifica fluência em klingon por escrito, em até três níveis (iniciante, intermediário e avançado), numa prova aplicada no encontro anual da comunidade.',
      grammar_why:
        'Klingon não tem verbo “ser/estar”. Para dizer “eu sou klingon”, usa-se o substantivo que descreve o sujeito (“tlhIngan”, klingon) seguido do PRONOME da pessoa, que funciona como um pivô entre os dois: “tlhIngan jIH” (klingon eu = eu sou klingon). O pronome vem SEMPRE depois, nunca antes.',
      grammar_examples: [
        ['tlhIngan jIH.', 'Eu sou klingon.'],
        ["tlhIngan SoH'a'?", 'Você é klingon?'],
      ],
      character_guide: [
        ['H', 'NUNCA é mudo como no português: é um som raspado na garganta, como o “ch” alemão de “Bach”', 'Hov (“rrov”, estrela)'],
        ['I', 'só existe maiúsculo — é uma vogal, parecida com o “i” curto do inglês “fish”', 'jIH (“dJIrr”, eu)'],
        ["'", 'não é pontuação: é uma consoante de verdade, a parada glotal (a pausa de “uh-oh” em inglês)', "qatlho' (obrigado, com uma pausa seca no final)"],
      ],
    },
    lessons: [
      {
        id: 'tlh-u1-l1',
        title: "nuqneH, Qapla'!",
        kind: 'licao',
        words: ['nuqneH', "Qapla'", "majQa'", "qatlho'", 'HISlaH', "ghobe'"],
        cloze: [
          { sentence: '___! tlhIngan jIH.', answer: 'nuqneH', options: ['nuqneH', "Qapla'", "qatlho'"], translation: 'Olá! Eu sou klingon.' },
          { sentence: "qatlho'! ___!", answer: "majQa'", options: ["majQa'", 'nuqneH', "ghobe'"], translation: 'Obrigado! Muito bem!' },
          { sentence: "tlhIngan Hol Dajatlh'a'? ___!", answer: 'HISlaH', options: ['HISlaH', "ghobe'", "Qapla'"], translation: 'Você fala klingon? Sim!' },
        ],
        voice: {
          bot: 'nuqneH!',
          botTranslation: 'Olá! (a saudação klingon, literalmente “o que você quer?”)',
          expected: ["qatlho'!", "qatlho'", 'nuqneH'],
          hint: "Responda ao cumprimento com “qatlho'!” (obrigado) ou devolva com “nuqneH!”.",
        },
        communityPrompt: "Cumprimente alguém em klingon com “nuqneH!” e agradeça com “qatlho'!”.",
      },
      {
        id: 'tlh-u1-l2',
        title: 'jIH, SoH, ghaH…',
        kind: 'licao',
        words: ['jIH', 'SoH', 'ghaH', 'maH', 'tlhIH', 'chaH'],
        cloze: [
          { sentence: 'tlhIngan ___.', answer: 'jIH', options: ['jIH', 'SoH', 'maH'], translation: 'Eu sou klingon.' },
          { sentence: "tlhIngan ___'a'?", answer: 'SoH', options: ['SoH', 'jIH', 'ghaH'], translation: 'Você é klingon?' },
          { sentence: "SuvwI' ___.", answer: 'chaH', options: ['chaH', 'tlhIH', 'ghaH'], translation: 'Eles são guerreiros.' },
        ],
        voice: {
          bot: "tlhIngan SoH'a'?",
          botTranslation: 'Você é klingon?',
          expected: ['tlhIngan jIH.', 'tlhIngan jIH', 'HISlaH'],
          hint: 'Responda com “tlhIngan jIH.” (eu sou klingon) ou “HISlaH” (sim).',
        },
        communityPrompt: "Diga quem você é com “tlhIngan jIH.” — ou escolha outro papel: “SuvwI' jIH.” (eu sou guerreiro).",
      },
      {
        id: 'tlh-u1-l3',
        title: 'Prova: primeiras palavras',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "nuqneH! tlhIngan SoH'a'?",
          botTranslation: 'Olá! Você é klingon?',
          expected: ['HISlaH, tlhIngan jIH.', 'HISlaH', 'tlhIngan jIH'],
          hint: 'Cumprimente, diga se é klingon ou não, e agradeça.',
        },
        communityPrompt: "Escreva uma apresentação curta em klingon: um cumprimento (“nuqneH!”), diga se você é klingon ou não, e agradeça com “qatlho'!”.",
      },
    ],
  },
  {
    id: 'tlh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "vav, SoS, puqpu'",
    emoji: '👪',
    card: {
      id: 'tlh-c2',
      title: 'Quem compõe uma casa klingon',
      emoji: '👪',
      history:
        "O vocabulário de família do klingon vem do próprio “The Klingon Dictionary” e das páginas que o Klingon Language Institute publicou para apoiar o curso de klingon no Duolingo — um curso real que chegou a existir no aplicativo, lançado em 2018 em parceria com o KLI. A palavra para “filho/filha” genérico, “puq”, também é a raiz de “puqloD” (filho) e “puqbe'” (filha): o sufixo “-loD” marca o masculino e “-be'” o feminino, o mesmo “-be'” que também nega verbos (ver gramática).",
      culture_tip:
        "Não existe uma palavra klingon confirmada por Okrand para “amar” — a palavra “muSHa'”, que circula bastante pela internet com esse sentido, é invenção de fãs, nunca usada por Okrand. O verbo real e documentado mais próximo é “parHa'” (gostar de), que preferimos usar aqui.",
      grammar_why:
        'Para descrever alguém dentro de uma frase inteira (não só dentro de uma lista de palavras), o verbo-qualidade vem ANTES do substantivo: “qan vav” quer dizer “o pai é velho” (frase completa). Só quando o verbo-qualidade está dentro de um sintagma, descrevendo um substantivo sem formar frase própria, é que ele vem DEPOIS (“vav qan” seria “o pai velho”, só a expressão, sem virar uma frase pronta).',
      grammar_examples: [
        ['qan vav.', 'O pai é velho.'],
        ["puqbe' legh SoS.", 'A mãe vê a filha.'],
      ],
      character_guide: [
        ['q', 'som de “k” produzido bem no fundo da garganta — diferente de “Q” maiúsculo, que é ainda mais forte (q+H juntos)', 'qan (“qrran”, velho)'],
        ['D', 'não existe “d” minúsculo sozinho no klingon: “D” maiúsculo é um “d” com a língua dobrada bem para trás', 'puqloD (“puq-lohD”, filho)'],
      ],
    },
    lessons: [
      {
        id: 'tlh-u2-l1',
        title: 'vav, SoS, puq',
        kind: 'licao',
        words: ['vav', 'SoS', "loDnI'", "be'nI'", 'puq', 'jup'],
        cloze: [
          { sentence: 'qan ___.', answer: 'vav', options: ['vav', 'SoS', 'puq'], translation: 'O pai é velho.' },
          { sentence: 'puq legh ___.', answer: 'SoS', options: ['SoS', 'vav', 'jup'], translation: 'A mãe vê a criança.' },
          { sentence: '___ ghaH.', answer: 'jup', options: ['jup', 'loD', "be'"], translation: 'Ele é amigo.' },
        ],
        voice: {
          bot: "ghoj'a' loDnI'?",
          botTranslation: 'O irmão aprende?',
          expected: ["HISlaH, ghoj loDnI'.", 'HISlaH', "ghoj loDnI'"],
          hint: "Responda “HISlaH, ghoj loDnI'.” (sim, o irmão aprende) ou “ghobe'.” (não).",
        },
        communityPrompt: 'Fale da sua família em klingon: diga quem é seu pai (“vav”) e sua mãe (“SoS”).',
      },
      {
        id: 'tlh-u2-l2',
        title: "puqloD, puqbe'…",
        kind: 'licao',
        words: ['puqloD', "puqbe'", "vavnI'", "SoSnI'", 'loD', "be'"],
        cloze: [
          { sentence: 'puqloD legh ___.', answer: 'vav', options: ['vav', 'SoS', 'loD'], translation: 'O pai vê o filho.' },
          { sentence: 'qan ___.', answer: "vavnI'", options: ["vavnI'", "SoSnI'", 'vav'], translation: 'O avô é velho.' },
          { sentence: '___ jIH.', answer: "be'", options: ["be'", 'loD', 'jup'], translation: 'Eu sou mulher.' },
        ],
        voice: {
          bot: "puqbe' legh'a' SoS?",
          botTranslation: 'A mãe vê a filha?',
          expected: ["HISlaH, puqbe' legh SoS.", 'HISlaH', "puqbe' legh SoS"],
          hint: "Responda “HISlaH, puqbe' legh SoS.” (sim, a mãe vê a filha) ou “ghobe'.” (não).",
        },
        communityPrompt: "Descreva sua família: quem é seu avô (“vavnI'”) e sua avó (“SoSnI'”)?",
      },
      {
        id: 'tlh-u2-l3',
        title: 'Prova: família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "qan vav. qan SoSnI'.",
          botTranslation: 'O pai é velho. A avó é velha.',
          expected: ["HISlaH. qan vav. qan SoSnI'.", 'HISlaH', 'qan vav'],
          hint: 'Confirme com “HISlaH” e repita quais pessoas da sua família são velhas.',
        },
        communityPrompt: 'Escreva três frases curtas em klingon sobre sua família, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
