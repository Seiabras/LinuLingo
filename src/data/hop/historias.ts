import type { StorySeed } from '../types';

/**
 * Histórias interativas do hopi — uma por subnível, do A1.1 ao A2.2.
 *
 * A1.1 e A1.2: frases declarativas montadas com palavras do Wiktionary e o padrão
 * sujeito-objeto-verbo / substantivo+adjetivo sem verbo de ligação da Wikipédia em inglês.
 *
 * A2.1 e A2.2: os diálogos 3 e 6 de [KAL] — Milo Kalectaca, “Lessons in Hopi”, University of Arizona
 * Press, 1978 (archive.org/details/micro_IA41153428_0700) —, fala por fala, com a página e a tradução
 * do livro, conferidas na imagem da página (fala de Songoopavi, Segunda Mesa; conversão de grafia
 * declarada em vocabulario.ts, com o acento agudo do livro). As escolhas erradas também são frases do livro (com a página), só que
 * fora de contexto. Nenhuma fala foi montada por nós.
 */
export const STORIES_HOP: StorySeed[] = [
  {
    id: 'hop-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pessoas, sol e um mergulho na Reserva Hopi',
    emoji: '🙋',
    summary: 'Uma cena curta na Reserva Hopi, no nordeste do Arizona: reconhecer quem é “hopi”, ver o sol e terminar nadando.',
    cultural_context:
      'A Reserva Hopi fica no nordeste do Arizona (Estados Unidos). A própria palavra “hopi”, segundo o Wiktionary em inglês, não nomeia só o povo: como substantivo comum, ela significa “pessoa civilizada, bem-comportada; alguém que segue o modo de vida hopi; educada, pacífica” — um valor social descrito na própria língua, não só um nome de fora.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Taaqa hopi.',
        translation: 'O homem é hopi (pessoa civilizada, pacífica).',
        emoji: '🧑',
        choices: [
          { text: 'Wùuti hopi.', translation: 'A mulher é hopi.', next: 'sol' },
          {
            text: 'Taaqa qömvi.',
            translation: 'O homem é preto.',
            wrong: '“Qömvi” é uma cor (preto) — a fala era sobre quem também é “hopi” (pessoa civilizada, pacífica), não sobre cor. Responda com outra pessoa: “Wùuti hopi.” (a mulher é hopi).',
          },
        ],
      },
      sol: {
        text: 'Nuʼ taawa tuwa.',
        translation: 'Eu vejo o sol.',
        emoji: '☀️',
        choices: [
          { text: 'Um hoonaw tuwa.', translation: 'Você vê o urso.', next: 'final' },
          {
            text: 'Nuʼ ööyi.',
            translation: 'Eu fico satisfeito.',
            wrong: 'A fala era sobre ver alguma coisa (o sol) — continue com outra pessoa vendo outra coisa: “Um hoonaw tuwa.” (você vê o urso).',
          },
        ],
      },
      final: {
        text: 'Itam momori.',
        translation: 'Nós nadamos.',
        emoji: '🏊',
        ending: {
          tone: 'bom',
          title: 'Pessoas, sol e um mergulho',
          message:
            'Você reconheceu “hopi” (pessoa civilizada e pacífica, a palavra que dá nome ao povo e à própria língua), viu o sol com “Nuʼ taawa tuwa” e terminou nadando com “Itam momori” — tudo em hopílavayi, a língua da Reserva Hopi, no nordeste do Arizona.',
        },
      },
    },
    glossary: [
      ['Hopi', 'pessoa hopi, civilizada, pacífica'],
      ['Taawa', 'sol'],
      ['Hoonaw', 'urso'],
      ['Momori', 'nadar'],
    ],
  },
  {
    id: 'hop-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cores e bichos na natureza hopi',
    emoji: '🪨',
    summary: 'Uma cena pela natureza: a cor de uma pedra e da água, e três bichos vistos pelo caminho.',
    cultural_context:
      'A Reserva Hopi reúne pelo menos três variantes regionais — a da Primeira Mesa, a da Segunda Mesa (aldeias de Mishongnovi e Shipaulovi) e a da Terceira Mesa —, segundo a Wikipédia em inglês, que não aponta nenhuma delas como “a” variante padrão, embora o principal dicionário publicado da língua (“Hopi Dictionary: Hopìikwa Lavàytutuveni”, 1998) descreva especificamente a variante da Terceira Mesa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Owa qömvi.',
        translation: 'A pedra é preta.',
        emoji: '🪨',
        choices: [
          { text: 'Paahu sakwa.', translation: 'A água é azul.', next: 'bicho' },
          {
            text: 'Owa nöösa.',
            translation: 'A pedra come.',
            wrong: 'Uma pedra não come — continue descrevendo a cor de outra coisa da natureza: “Paahu sakwa.” (a água é azul).',
          },
        ],
      },
      bicho: {
        text: 'Taaqa sowi tuwa.',
        translation: 'O homem vê a lebre.',
        emoji: '🐇',
        choices: [
          { text: 'Wùuti angwusi tuwa.', translation: 'A mulher vê o corvo.', next: 'final' },
          {
            text: 'Sowi qöötsa.',
            translation: 'A lebre é branca.',
            wrong: 'Essa fala muda de assunto para cor — continue com outra pessoa vendo outro bicho: “Wùuti angwusi tuwa.” (a mulher vê o corvo).',
          },
        ],
      },
      final: {
        text: 'Puma mongwu tuwa.',
        translation: 'Eles veem a coruja-grande.',
        emoji: '🦉',
        ending: {
          tone: 'bom',
          title: 'Cores e bichos da natureza hopi',
          message: 'Você descreveu as cores de uma pedra e da água (“Owa qömvi”, “Paahu sakwa”) e viu três bichos — a lebre, o corvo e a coruja-grande — em hopílavayi.',
        },
      },
    },
    glossary: [
      ['Qömvi', 'preto'],
      ['Sakwa', 'azul'],
      ['Sowi', 'lebre americana (jackrabbit)'],
      ['Angwusi', 'corvo'],
      ['Mongwu', 'coruja-grande (coruja-orelhuda)'],
    ],
  },
  {
    id: 'hop-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'A avó e as aulas de hopi',
    emoji: '👵',
    summary: 'Julian está parado, sem ter com quem brincar. A avó quer saber por quê — e descobre que os amigos dele estão estudando hopi.',
    cultural_context:
      'Este é o Diálogo 3 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 66–67), escrito na fala de Songoopavi, na Segunda Mesa. A conversa gira em torno de aprender hopi em casa, com o pai — o que o Escritório de Preservação Cultural Hopi também registrou como desejo das famílias: que a língua seja ensinada “em casa e nas vilas, por falantes fluentes”.',
    start: 'inicio',
    nodes: {
      // [KAL] Diálogo 3, p. 66
      inicio: {
        text: 'Um hinoq puʼ sun paʼ qatuwta? Um ang waynumeʼ haalayni.',
        translation: 'Por que você está sentado aí tão quieto? Vá andar por aí, para ficar feliz.',
        emoji: '👵',
        choices: [
          {
            text: 'Nuʼ kus hakiy amum hohonaqlawni. Nuʼ as Duane nit David aqniqw, puma písoqʼa.',
            translation: 'Não sei com quem brincar. Fui até o Duane e o David, mas eles estão ocupados.',
            next: 'ocupados',
          },
          {
            // [KAL] Diálogo 1, p. 16
            text: 'Owí, nuʼ waynuma.',
            translation: 'Sim, estou por aí.',
            wrong: 'A avó perguntou por que você está parado e quieto, não se você está por aí. Explique: você não tem com quem brincar, porque o Duane e o David estão ocupados.',
          },
        ],
      },
      // [KAL] Diálogo 3, p. 66
      ocupados: {
        text: 'Puma hintsakqe pas písoqʼa?',
        translation: 'O que eles estão fazendo para estar tão ocupados?',
        emoji: '🤔',
        choices: [
          { text: 'Puma Hopilavayit tutuqayi.', translation: 'Eles estão aprendendo a língua hopi.', next: 'quem' },
          {
            // [KAL] Lição 13, p. 69
            text: 'Itaaso qatu.',
            translation: 'Nossa avó está sentada.',
            wrong: 'A avó quer saber o que o Duane e o David estão fazendo. Responda que eles estão aprendendo hopi: “Puma Hopilavayit tutuqayi.”',
          },
        ],
      },
      // [KAL] Diálogo 3, p. 66
      quem: {
        text: 'Tsángawpiʼi. Hak pumuy tutuqayna?',
        translation: 'Que bom. Quem está ensinando eles?',
        emoji: '📖',
        choices: [
          {
            text: 'Pumuy naʼamú. Puʼ pay wuuyavo tutuqayya.',
            translation: 'O pai deles. Faz tempo que eles estão estudando.',
            next: 'final',
          },
          {
            // [KAL] Lição 8, p. 39
            text: 'Nuʼ put qa paʼangwa.',
            translation: 'Eu não a ajudei.',
            wrong: 'A pergunta foi “quem está ensinando eles?” (“hak”, quem). Responda com o pai deles: “Pumuy naʼamú.”',
          },
        ],
      },
      // [KAL] Diálogo 3, p. 67
      final: {
        text: 'Um aqneʼ amumum tutuqayni. Um uutuvkoy Perryt wikkyangni.',
        translation: 'Vá lá estudar com eles. Leve o seu irmão mais novo, o Perry.',
        emoji: '👦',
        ending: {
          tone: 'bom',
          title: 'Taʼá!',
          message:
            'Julian responde “Taʼá” (está bem) e vai estudar hopi com os amigos, levando o irmão mais novo. Você acompanhou uma conversa inteira do livro: a pergunta com “hinoq” (por quê), o “hak” (quem) e o “uu-” de “uutuvkoy”, o seu irmão mais novo.',
        },
      },
    },
    glossary: [
      ['Hinoq', 'por quê'],
      ['Hak', 'quem'],
      ['Hopilavayi', 'língua hopi'],
      ['Tutuqayi', 'aprender, estudar'],
      ['Tutuqayna', 'ensinar'],
      ['Písoqʼa', 'ocupado'],
      ['Tuvko', 'irmão mais novo'],
    ],
  },
  {
    id: 'hop-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Achei uma coisa!',
    emoji: '🐦',
    summary: 'David acha um bichinho pulando e chama o Duane. O que será? E será que dá para fazer uma troca?',
    cultural_context:
      'Este é o Diálogo 6 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 112), na fala de Songoopavi, na Segunda Mesa. Repare no agradecimento do fim: “kwakwhá” é o obrigado dito por homem; uma mulher diria “askwali” (Diálogo 2, p. 37).',
    start: 'inicio',
    nodes: {
      // [KAL] Diálogo 6, p. 112
      inicio: {
        text: 'Duane, tus pewʼi. Nuʼ hiita tuwa.',
        translation: 'Duane, venha cá. Achei uma coisa.',
        emoji: '👀',
        choices: [
          { text: 'Um hiita tuwa? Kus nuʼ aw yori.', translation: 'O que você achou? Deixa eu ver.', next: 'oque' },
          {
            // [KAL] Diálogo 1, p. 16
            text: 'Nuʼ yaavaq pitu.',
            translation: 'Eu vim de longe.',
            wrong: 'O David achou alguma coisa e chamou você. Pergunte o que ele achou: “Um hiita tuwa?”',
          },
        ],
      },
      // [KAL] Diálogo 6, p. 112
      oque: {
        text: 'Yevʼe. Iʼ ayéʼ tsotsoʼtinumq nuʼ it tuwa. Iʼ himu?',
        translation: 'Está aqui. Isto estava pulando por ali quando eu achei. O que é isto?',
        emoji: '❓',
        choices: [
          { text: 'Pam tsiro. Kus nuʼ tuwat nguʼta?', translation: 'É um pássaro. Posso segurar?', next: 'cuidado' },
          {
            // [KAL] Lição 19, p. 103 e 106
            text: 'Owí, yooyoki.',
            translation: 'Sim, está chovendo.',
            wrong: 'A pergunta foi “Iʼ himu?” (o que é isto?), não se está chovendo. Diga o que é o bicho: “Pam tsiro.” (é um pássaro).',
          },
        ],
      },
      // [KAL] Diálogo 6, p. 112
      cuidado: {
        text: 'Um paasni. Naat pam hiisayhoya.',
        translation: 'Cuidado. Ele ainda é muito pequeno.',
        emoji: '🐣',
        choices: [
          {
            text: 'Um qa nuy it maqa? Nöq nuʼ ung it tuwat maqani. Iʼ paaqwa.',
            translation: 'Você não me dá isto? E eu te dou isto em troca. Isto é um sapo.',
            next: 'final',
          },
          {
            // [KAL] Lição 18, p. 99
            text: 'Um qa wárikni!',
            translation: 'Não corra!',
            wrong: 'Ninguém está correndo. Proponha a troca do livro: você fica com o pássaro e dá um sapo — “Um qa nuy it maqa? Nöq nuʼ ung it tuwat maqani. Iʼ paaqwa.”',
          },
        ],
      },
      // [KAL] Diálogo 6, p. 112
      final: {
        text: 'Taʼá. Nuʼ pas put naawakna. Kwakwhá.',
        translation: 'Está bem. Eu queria muito isso. Obrigado.',
        emoji: '🐸',
        ending: {
          tone: 'bom',
          title: 'Troca feita!',
          message:
            'O pássaro fica com o Duane, e o sapo, com o David, que agradece com “Kwakwhá”. Você usou a pergunta com “himu” (o que é?), o futuro em “-ni” (“maqani”, vou dar) e a ordem “pewʼi” (venha cá!).',
        },
      },
    },
    glossary: [
      ['Pewʼi', 'venha cá!'],
      ['Himu', 'o quê; algo'],
      ['Tsiro', 'pássaro'],
      ['Paaqwa', 'sapo, rã'],
      ['Maqani', 'vai dar (futuro de “maqa”)'],
      ['Kwakwhá', 'obrigado (dito por homem)'],
    ],
  },
];
