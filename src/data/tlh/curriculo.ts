import type { UnitSeed } from '../types';

/**
 * Trilha do klingon: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1.1 em diante). Fontes: Marc Okrand, "The Klingon Dictionary" (Pocket Books,
 * 1985/1992); klingonska.org (Klingonska Akademien, tabelas de prefixos e numerais, e a
 * transcrição integral do livro em canon/1992-01-01-tkd.txt, usada para conferir todo substantivo e
 * verbo novo das unidades 3 e 4); kli.org (Klingon Language Institute, vocabulário de apoio ao
 * curso de klingon no Duolingo, hoje mantido pelo próprio KLI).
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
  {
    id: 'tlh-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: "qorDu' vIghaj",
    emoji: '🤲',
    card: {
      id: 'tlh-c3',
      title: 'Ter uma família, e números bem maiores',
      emoji: '🤲',
      history:
        "O verbo \"ghaj\" (ter/possuir) é um dos verbos mais citados de \"The Klingon Dictionary\": funciona como qualquer outro verbo transitivo, levando o mesmo prefixo que já marca sujeito e objeto (ver a unidade 2 e tlh-g5 na gramática). A palavra para \"família\", \"qorDu'\", também aparece no livro de Okrand — e junto com \"loDnal\" (marido) e \"be'nal\" (esposa), completa o vocabulário de família além dos pais e filhos já vistos.",
      culture_tip:
        "Nas histórias de Star Trek, a honra da família (\"qorDu'\") pesa mais do que a vida de um klingon sozinho: perder a honra da família é considerado peor do que morrer (\"Hegh\") em combate. Esse peso cultural aparece em frases feitas como \"Heghlu'meH QaQ jajvam\" (hoje é um bom dia para morrer) — a morte em si não é o problema, perder a honra é.",
      grammar_why:
        "\"ghaj\" segue a ordem OVS normal: \"qorDu' vIghaj jIH\" é \"família eu-tenho eu\", ou seja, \"eu tenho uma família\" — o prefixo \"vI-\" (sujeito eu, objeto de 3ª pessoa) é o mesmo já visto em \"Duj vIlegh jIH\" (eu vejo a nave).",
      grammar_examples: [
        ["qorDu' vIghaj jIH.", 'Eu tenho uma família.'],
        ["be'nal ghaH loDnal.", 'Ele é o marido dela (a esposa).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'tlh-u3-l1',
        title: "qorDu' vIghaj jIH",
        kind: 'licao',
        words: ["qorDu'", 'loDnal', "be'nal", 'ghaj', 'DaHjaj', "wa'Hu'"],
        cloze: [
          { sentence: "qorDu' vI___ jIH.", answer: 'ghaj', options: ['ghaj', 'legh', 'Sop'], translation: 'Eu tenho uma família.' },
          { sentence: '___ jIQuch.', answer: 'DaHjaj', options: ['DaHjaj', "wa'Hu'", "wa'leS"], translation: 'Hoje eu estou feliz.' },
          { sentence: '___ jIghung.', answer: "wa'Hu'", options: ["wa'Hu'", 'DaHjaj', "wa'leS"], translation: 'Ontem eu estava com fome.' },
        ],
        voice: {
          bot: "qorDu' Daghaj'a'?",
          botTranslation: 'Você tem uma família?',
          expected: ["HISlaH, qorDu' vIghaj jIH.", 'HISlaH', "qorDu' vIghaj jIH"],
          hint: "Responda “HISlaH, qorDu' vIghaj jIH.” (sim, eu tenho uma família).",
        },
        communityPrompt: "Escreva duas frases sobre sua família usando \"qorDu'\" (família), \"loDnal\" (marido) ou \"be'nal\" (esposa).",
      },
      {
        id: 'tlh-u3-l2',
        title: "cha'maH, wejmaH, loSmaH…",
        kind: 'licao',
        words: ["cha'maH", 'wejmaH', 'loSmaH', 'vaghmaH', 'javmaH', 'SochmaH'],
        cloze: [
          { sentence: "___ Duj.", answer: "cha'maH", options: ["cha'maH", 'wejmaH', 'loSmaH'], translation: 'Vinte naves.' },
          { sentence: '___ puq.', answer: 'wejmaH', options: ['wejmaH', 'vaghmaH', "cha'maH"], translation: 'Trinta crianças.' },
          { sentence: '___ Hov.', answer: 'loSmaH', options: ['loSmaH', 'javmaH', 'SochmaH'], translation: 'Quarenta estrelas.' },
        ],
        voice: {
          bot: "Duj 'ar?",
          botTranslation: 'Quantas naves? (literalmente, "nave quanto?" — "\'ar" vem DEPOIS do substantivo)',
          expected: ["vaghmaH Duj.", 'vaghmaH'],
          hint: 'Responda com um número de 20 a 70, como “vaghmaH Duj.” (cinquenta naves).',
        },
        communityPrompt: "Escreva quatro frases contando de 20 a 90 de dez em dez (\"cha'maH\", \"wejmaH\", \"loSmaH\", \"vaghmaH\", \"javmaH\", \"SochmaH\"), cada uma com uma coisa diferente.",
      },
      {
        id: 'tlh-u3-l3',
        title: "Prova: qorDu' vIghaj",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "qorDu' Daghaj'a'? ghot 'ar?",
          botTranslation: 'Você tem família? Quantas pessoas?',
          expected: ["HISlaH. vaghmaH ghot.", 'HISlaH', "qorDu' vIghaj jIH"],
          hint: 'Confirme com “HISlaH” e diga quantas pessoas, usando um número de 20 a 90 depois de "ghot".',
        },
        communityPrompt: "Escreva um parágrafo curto sobre sua família, usando \"qorDu'\", \"ghaj\" e pelo menos um número de 20 a 90.",
      },
    ],
  },
  {
    id: 'tlh-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'bIr pagh tuj',
    emoji: '🌦️',
    card: {
      id: 'tlh-c4',
      title: 'O tempo sem sujeito, e os sentimentos do corpo',
      emoji: '🌦️',
      history:
        'Os verbos de clima do klingon ("SIS", chover; "peD", nevar; "bIr", ser frio; "tuj", ser quente) formam frase completa sozinhos, sem sujeito: "SIS." já quer dizer "está chovendo" — o klingon não tem um pronome "neutro" tipo o "it" do inglês para esse tipo de frase. Os sentimentos ("Quch", feliz; "ghung", com fome; "Doy\'", cansado) são o mesmo tipo de verbo-estativo, mas aplicado ao corpo da pessoa — por isso levam o prefixo "bI-"/"jI-" (ver tlh-g7).',
      culture_tip:
        'A palavra "ghojwI\'" (estudante) mostra um jeito regular do klingon de criar substantivos: o sufixo "-wI\'" prendido num verbo vira "quem faz aquilo" — "ghoj" (aprender) + "-wI\'" = "ghojwI\'" (quem aprende). O mesmo sufixo já formou "SuvwI\'" (guerreiro, quem luta) desde a unidade 1.',
      grammar_why:
        'Sem sujeito, "bIr." já é uma frase completa ("está frio"). Com sujeito "eu", o verbo-estativo leva o prefixo "jI-" preso nele: "jIghung." é "eu estou com fome" — nunca o pronome "jIH" solto depois do verbo.',
      grammar_examples: [
        ['bIr.', 'Está frio.'],
        ['jIghung.', 'Eu estou com fome.'],
        ["jIDoy'.", 'Eu estou cansado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'tlh-u4-l1',
        title: 'bIr. tuj. SIS. peD.',
        kind: 'licao',
        words: ['bIr', 'tuj', 'SIS', 'peD', 'Quch', "'IQ"],
        cloze: [
          { sentence: '___.', answer: 'bIr', options: ['bIr', 'tuj', 'SIS'], translation: 'Está frio.' },
          { sentence: '___.', answer: 'SIS', options: ['SIS', 'peD', 'tuj'], translation: 'Está chovendo.' },
          { sentence: 'jI___.', answer: 'Quch', options: ['Quch', "'IQ", 'bIr'], translation: 'Eu estou feliz.' },
        ],
        voice: {
          bot: "bIr'a'?",
          botTranslation: 'Está frio?',
          expected: ['HISlaH, bIr.', 'HISlaH', 'bIr'],
          hint: 'Responda “HISlaH, bIr.” (sim, está frio) ou “ghobe\', tuj.” (não, está quente).',
        },
        communityPrompt: 'Descreva o tempo de hoje em klingon, usando “bIr.” (frio), “tuj.” (quente), “SIS.” (chove) ou “peD.” (neva).',
      },
      {
        id: 'tlh-u4-l2',
        title: "Doy', ghung, 'oj…",
        kind: 'licao',
        words: ["Doy'", 'ghung', "'oj", 'QeH', 'Sut', 'waq'],
        cloze: [
          { sentence: 'jI___.', answer: "Doy'", options: ["Doy'", 'ghung', "'oj"], translation: 'Eu estou cansado.' },
          { sentence: 'jI___.', answer: 'ghung', options: ['ghung', "'oj", 'QeH'], translation: 'Eu estou com fome.' },
          { sentence: "chu' ___.", answer: 'Sut', options: ['Sut', 'waq', 'wep'], translation: 'Roupa nova.' },
        ],
        voice: {
          bot: "bI'oj'a'?",
          botTranslation: 'Você está com sede?',
          expected: ["HISlaH, jI'oj.", 'HISlaH', "jI'oj"],
          hint: 'Responda “HISlaH, jI\'oj.” (sim, estou com sede) ou “ghobe\'.” (não).',
        },
        communityPrompt: "Escreva três frases sobre como você está hoje, usando \"jIDoy'\" (estou cansado), \"jIghung\" (estou com fome), \"jI'oj\" (estou com sede) ou \"jIQeH\" (estou bravo).",
      },
      {
        id: 'tlh-u4-l3',
        title: 'Prova: bIr pagh tuj',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "bIr'a' DaHjaj? bIDoy''a'?",
          botTranslation: 'Está frio hoje? Você está cansado?',
          expected: ["HISlaH, bIr. jIDoy'.", 'HISlaH', "jIDoy'"],
          hint: 'Diga como está o tempo (sem sujeito) e como você está se sentindo (com o prefixo "jI-").',
        },
        communityPrompt: 'Escreva um parágrafo curto contando como está o tempo hoje e como você está se sentindo, usando pelo menos um verbo de clima e um de sentimento com o prefixo "jI-".',
      },
    ],
  },
];
