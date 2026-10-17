import type { StorySeed } from '../types';

/**
 * Histórias interativas do hopi — uma por subnível, do A1.1 ao B1.4.
 *
 * A1.1 e A1.2: frases declarativas montadas com palavras do Wiktionary e o padrão
 * sujeito-objeto-verbo / substantivo+adjetivo sem verbo de ligação da Wikipédia em inglês.
 *
 * A2.1 e A2.2: os diálogos 3 e 6 de [KAL] — Milo Kalectaca, “Lessons in Hopi”, University of Arizona
 * Press, 1978 (archive.org/details/micro_IA41153428_0700) —, fala por fala, com a página e a tradução
 * do livro, conferidas na imagem da página (fala de Songoopavi, Segunda Mesa; conversão de grafia
 * declarada em vocabulario.ts, com o acento agudo do livro). As escolhas erradas também são frases do livro (com a página), só que
 * fora de contexto. Nenhuma fala foi montada por nós.
 *
 * B1.1 a B1.4: Diálogos 7 e 8 e Leituras 2 e 3 de [KAL], fala por fala, conferidas na imagem da página, com
 * o mesmo critério (escolhas erradas = frases do livro fora de contexto). As duas leituras se passam em
 * Songoopavi, Segunda Mesa.
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
  {
    id: 'hop-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Vamos a Winslow?',
    emoji: '🛻',
    summary: 'Janet quer ir a Winslow comprar mantimentos e pede carona à prima Mary. Mas o marido de Mary ainda não voltou do trabalho.',
    cultural_context:
      'Este é o Diálogo 7 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 131), na fala de Songoopavi, na Segunda Mesa. Winslow é uma cidade do Arizona fora da reserva, onde se vai fazer compras. Repare na roça de milho (“uuyi”): o marido de Mary vai passar por ela na volta do trabalho.',
    start: 'inicio',
    nodes: {
      // [KAL] Diálogo 7, p. 131
      inicio: {
        text: 'Haqami uukongya?',
        translation: 'Onde está o seu marido?',
        emoji: '🤵',
        choices: [
          { text: 'Pam pay seʼel tumalaʼtato.', translation: 'Ele foi trabalhar bem cedo.', next: 'pedido' },
          {
            // [KAL] Lição 22, p. 123
            text: 'Iʼ poyo wuuyoqʼa.',
            translation: 'Esta faca é grande.',
            wrong: 'A Janet perguntou do seu marido. Diga que ele foi trabalhar cedo: “Pam pay seʼel tumalaʼtato.”',
          },
        ],
      },
      // [KAL] Diálogo 7, p. 131
      pedido: {
        text: 'Uma as nuy Homolʼomi wikni? Nuʼ as aw nöösiwqat oovi huuyatoni.',
        translation: 'Vocês dois me levam a Winslow? Eu queria ir comprar mantimentos.',
        emoji: '🛒',
        choices: [
          {
            text: 'Ason pitúqʼö. Naat yaw pam piw uuyiy aw kuyvatot puʼ aʼ nímani.',
            translation: 'Quando ele chegar. Ele também quer passar na roça de milho dele na volta para casa.',
            next: 'avise',
          },
          {
            // [KAL] Lição 23, p. 127 e 130
            text: 'Pam taaqa sikwit nösqa mooki.',
            translation: 'O homem que comeu a carne morreu.',
            wrong: 'Que susto! Responda ao pedido de carona: vocês vão quando o marido chegar, “Ason pitúqʼö...”',
          },
        ],
      },
      // [KAL] Diálogo 7, p. 131
      avise: {
        text: 'Taʼá. Ason pitúq um nuy aaʼawnani.',
        translation: 'Está bem. Me avise quando ele chegar.',
        emoji: '📣',
        choices: [
          {
            text: 'Taʼá. Pay ason itam nönösat puʼ awyani, neʼ itam qa tsöngmokyani.',
            translation: 'Está bem. Vamos comer antes de ir, para não ficarmos com fome.',
            next: 'final',
          },
          {
            // [KAL] Lição 22, p. 121
            text: 'Qötsavoko waha.',
            translation: 'O cachorro branco latiu.',
            wrong: 'O cachorro pode esperar. Combine de comer antes da viagem: “Pay ason itam nönösat puʼ awyani...”',
          },
        ],
      },
      // [KAL] Diálogo 7, p. 131
      final: {
        text: 'Taʼá. Pay itam pantotini.',
        translation: 'Está bem. Vamos fazer isso.',
        emoji: '🌽',
        ending: {
          tone: 'bom',
          title: 'Combinado!',
          message:
            'Assim que o marido chegar, vocês comem e vão a Winslow. Você usou o “-q” de “quando ele chegar” (“pitúq”, com sujeito diferente), o “-t” de “depois de comer” (“nönösat”) e o futuro em “-ni”.',
        },
      },
    },
    glossary: [
      ['Koongya', 'marido'],
      ['Seʼel', 'cedo'],
      ['Nöösiwqa', 'comida, mantimentos'],
      ['Uuyi', 'roça de milho'],
      ['Aaʼawna', 'avisar'],
      ['Tsöngmoki', 'ficar com fome'],
    ],
  },
  {
    id: 'hop-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'O hogan de areia',
    emoji: '🏖️',
    summary: 'Angie e Prunie estão construindo uma casinha de areia. Tristan chega procurando as duas. Será que ele ajuda?',
    cultural_context:
      'Este é o Diálogo 8 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 142), na fala de Songoopavi, na Segunda Mesa. As crianças fazem uma “homoki”, o hogan, a casa redonda dos vizinhos navajos. Repare em “hevnuma” (estive procurando): na Segunda Mesa, o “v” fica antes de consoante, onde a Terceira Mesa diz “p” (Jeanne, tese do MIT, 1978, p. 62).',
    start: 'inicio',
    nodes: {
      // [KAL] Diálogo 8, p. 142
      inicio: {
        text: 'Prunie, tus paʼ put táviʼi. Put uqlaq qatsqata.',
        translation: 'Prunie, me passa aquilo. Aquilo que está do seu lado.',
        emoji: '🫳',
        choices: [
          { text: 'Itaʼ? Haaki, naat nuʼ it akw hángwanta.', translation: 'Isto? Espere, ainda estou cavando com isto.', next: 'pressa' },
          {
            // [KAL] Lição 24, p. 133
            text: 'Tiposi taavok tiitiwa.',
            translation: 'O bebê nasceu ontem.',
            wrong: 'A Angie quer a ferramenta. Diga que ainda está cavando com ela: “Itaʼ? Haaki, naat nuʼ it akw hángwanta.”',
          },
        ],
      },
      // [KAL] Diálogo 8, p. 142
      pressa: {
        text: 'Iiʼitsi, taq nuʼ as písoqʼiwta.',
        translation: 'Anda logo, que estou com pressa de terminar.',
        emoji: '⏩',
        choices: [
          { text: 'Iʼ turá. Niikyang um inumi ahoy tavini.', translation: 'Toma, então. Mas devolva para mim.', next: 'tristan' },
          {
            // [KAL] Lição 25, p. 139–140
            text: 'Sen yooyoki sen nuvalawu.',
            translation: 'Ou está chovendo, ou está nevando.',
            wrong: 'O tempo está bom para brincar. Entregue a ferramenta, mas peça de volta: “Iʼ turá. Niikyang um inumi ahoy tavini.”',
          },
        ],
      },
      // [KAL] Diálogo 8, p. 142
      tristan: {
        text: 'Uma hintsaki? Nuʼ umuy teevev hevnuma.',
        translation: 'O que vocês estão fazendo? Estive procurando vocês o dia todo.',
        emoji: '👦',
        choices: [
          { text: 'Itam homokit yuyku. Sen um itamuy paʼangwani?', translation: 'Estamos fazendo um hogan. Será que você ajuda a gente?', next: 'agua' },
          {
            // [KAL] Lição 24, p. 135–136
            text: 'Siivut amya.',
            translation: 'Enterraram a panela.',
            wrong: 'O Tristan quer saber o que vocês estão fazendo. Conte do hogan e peça ajuda: “Itam homokit yuyku. Sen um itamuy paʼangwani?”',
          },
        ],
      },
      // [KAL] Diálogo 8, p. 142
      agua: {
        text: 'Itamungem aw kuytoʼo. Nit puʼ piw um tuuwat yukutoni. Wárikuʼu.',
        translation: 'Vá buscar água para nós. E depois busque areia também. Corra.',
        emoji: '🪣',
        choices: [
          { text: 'Taʼá. Pas uma put lomayuyku.', translation: 'Está bem. Vocês estão fazendo isso bem bonito.', next: 'final' },
          {
            // [KAL] Lição 25, p. 138 e 140
            text: 'Hak kawayot nit waakasit novnani?',
            translation: 'Quem vai dar de comer ao cavalo e à vaca?',
            wrong: 'Os bichos ficam para depois. Aceite a tarefa e elogie o hogan: “Taʼá. Pas uma put lomayuyku.”',
          },
        ],
      },
      final: {
        // [KAL] Diálogo 8, p. 142 (a última fala do diálogo)
        text: 'Taʼá. Pas uma put lomayuyku.',
        translation: 'Está bem. Vocês estão fazendo isso bem bonito.',
        emoji: '🏠',
        ending: {
          tone: 'bom',
          title: 'Mãos à obra!',
          message:
            'Tristan vai buscar água e areia, e o hogan fica pronto. Você usou o “sen” (será que), a ordem com a vogal repetida (“kuytoʼo”, “wárikuʼu”) e o “-to” de “ir buscar” (“kuyto”, “yukuto”).',
        },
      },
    },
    glossary: [
      ['Hangwa', 'cavar'],
      ['Iiʼitsi', 'depressa!'],
      ['Heeve', 'procurar'],
      ['Yuku', 'fazer'],
      ['Sen', 'talvez, será que'],
      ['Kuyto', 'ir buscar água'],
    ],
  },
  {
    id: 'hop-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Onde está o Tsölö?',
    emoji: '💧',
    summary: 'A avó de Tsölö (Gota de Chuva) não acha o neto em lugar nenhum de Songoopavi. Ajude-a a procurar.',
    cultural_context:
      'Esta é a Leitura 2 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 181), que se passa em Songoopavi, na Segunda Mesa, a vila do autor. A avó procura o neto pela vila, pela beira da mesa (“tumpovi”) e no pomar de pêssegos lá embaixo. A história é contada com “yaw”, o “dizem que” de quem não viu a cena.',
    start: 'inicio',
    nodes: {
      // [KAL] Leitura 2, p. 181
      inicio: {
        text: 'Tsölö yaw soʼoy amum Songoopave qatu. Suus yaw put soʼat qa tuwa.',
        translation: 'Tsölö morava com a avó em Songoopavi. Um dia, a avó não o encontrou.',
        emoji: '👵',
        choices: [
          { text: 'Uma qa haqam Tsölöt aw yorikya?', translation: 'Vocês não viram o Tsölö por aí?', next: 'menina' },
          {
            // [KAL] Lição 26, p. 143
            text: 'Kuuyi as muki.',
            translation: 'A água estava quente.',
            wrong: 'A avó está preocupada. Pergunte às crianças se viram o Tsölö: “Uma qa haqam Tsölöt aw yorikya?”',
          },
        ],
      },
      // [KAL] Leitura 2, p. 181
      menina: {
        text: 'Pam pay seelaq moorot akw kwiniweqʼa.',
        translation: 'Ele foi para o norte faz tempo, num burro.',
        emoji: '🫏',
        choices: [
          { text: 'Askwali.', translation: 'Obrigada.', next: 'mesa' },
          {
            // [KAL] Lição 26, p. 145 e 147
            text: 'Pooko ung yaw kuuki.',
            translation: 'Dizem que um cachorro mordeu você.',
            wrong: 'A menininha ajudou. Agradeça como a avó: “Askwali” (obrigada, dito por mulher).',
          },
        ],
      },
      // [KAL] Leitura 2, p. 181
      mesa: {
        text: 'Soʼat yaw kwiniweq niiqe puʼ yaw tumpovaqe Tsölöt hevnuma. Satnöq puʼ yaw atkyameq sipalʼuyit aqw haawi.',
        translation: 'A avó foi para o norte e procurou o Tsölö pela beira da mesa. Por fim, desceu até o pomar de pêssegos.',
        emoji: '🍑',
        choices: [
          { text: 'Tsölö, taatayiʼi, nuʼ ung teevev hevnuma. Itam nima.', translation: 'Tsölö, acorde, estive procurando você o dia todo. Vamos para casa.', next: 'acordou' },
          {
            // [KAL] Lição 27, p. 149 e 152
            text: 'Pam maana naanit puʼ paklawu.',
            translation: 'A menina riu e depois chorou.',
            wrong: 'Olhe debaixo do pessegueiro: o Tsölö está dormindo! Acorde-o: “Tsölö, taatayiʼi...”',
          },
        ],
      },
      // [KAL] Leitura 2, p. 181
      acordou: {
        text: 'Nuʼ as peqw tsiromaqtoq, qa himu pitu nöq oovi kus nuʼ puwva.',
        translation: 'Eu vim aqui caçar passarinho, mas nenhum veio, e pelo visto eu peguei no sono.',
        emoji: '😴',
        choices: [
          { text: 'Taʼá, itam tus nima.', translation: 'Está bem, vamos para casa.', next: 'final' },
          {
            // [KAL] Lição 24, p. 134–135
            text: 'Sikwit tuupeya.',
            translation: 'A carne foi assada.',
            wrong: 'Hora de voltar. Diga “Taʼá, itam tus nima” (está bem, vamos para casa).',
          },
        ],
      },
      final: {
        // [KAL] Leitura 2, p. 181 (a última fala)
        text: 'Taʼá, itam tus nima.',
        translation: 'Está bem, vamos para casa.',
        emoji: '🏠',
        ending: {
          tone: 'bom',
          title: 'Achado!',
          message:
            'O Tsölö estava dormindo debaixo de um pessegueiro, e os dois voltam para Songoopavi. Você leu o “yaw” das histórias, o “as” da intenção que não deu certo (“nuʼ as tsiromaqtoq”, vim caçar passarinho... mas) e o “kus” de quem deduz (“kus nuʼ puwva”, pelo visto peguei no sono).',
        },
      },
    },
    glossary: [
      ['Tsölö', 'gota de chuva'],
      ['Suus', 'certa vez'],
      ['Tumpovi', 'beira da mesa'],
      ['Haawi', 'descer'],
      ['Taatayi', 'acordar'],
      ['Maqto', 'ir caçar'],
      ['Yaw', 'dizem que'],
    ],
  },
  {
    id: 'hop-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'O coiote que queria voar',
    emoji: '🐺',
    summary: 'Lá embaixo de Songoopavi, um coiote vê uma mãe passarinho ensinando os filhotes a voar. Ele também quer. Como os passarinhos vão responder?',
    cultural_context:
      'Esta é a Leitura 3 do livro “Lessons in Hopi” (Milo Kalectaca, 1978, p. 183–185), uma história de coiote que se passa logo abaixo da vila de Songoopavi, na Segunda Mesa. Pela tradição hopi, histórias de coiote se contam nas noites de inverno: é o que diz também o resumo da coleção “Coyote Tales” de 1970 (ERIC ED 046 612). A história não diz a moral; quem escuta tira a conclusão.',
    start: 'inicio',
    nodes: {
      // [KAL] Leitura 3, p. 183
      inicio: {
        text: 'Haliksaʼi! Yaw hisat Songoopavit atkyave iisaw kiʼta.',
        translation: 'Escute! Dizem que, há muito tempo, um coiote morava lá embaixo de Songoopavi.',
        emoji: '🏜️',
        choices: [
          {
            text: 'Nuʼ umi sutsev tayta um uutimuy tutuqaynaqʼö. Um qa nuy tutuqaynani?',
            translation: 'Eu sempre vejo você ensinando seus filhos. Você não me ensina?',
            next: 'penas',
          },
          {
            // [KAL] Diálogo 10, p. 166–167
            text: 'Yev kaphet hiikoʼo.',
            translation: 'Tome um café aqui.',
            wrong: 'O coiote não quer café: quer aprender a voar. Peça à mãe passarinho: “Nuʼ umi sutsev tayta... Um qa nuy tutuqaynani?”',
          },
        ],
      },
      // [KAL] Leitura 3, p. 184
      penas: {
        text: 'Um ngasta homasaʼta, um kus hin puuyaltini.',
        translation: 'Você não tem penas, não consegue voar.',
        emoji: '🪶',
        choices: [
          {
            text: 'Pay pam qa hiinta, itam suususkya löqmuy itaahomasay iisawuy aw maqayani.',
            translation: 'Não tem problema, cada um de nós vai dar duas das nossas penas ao coiote.',
            next: 'voo',
          },
          {
            // [KAL] Lição 28, p. 158 e 160
            text: 'Um tuutuyteʼ um mokni.',
            translation: 'Se você ficar doente, vai morrer.',
            wrong: 'Ninguém está doente. Os passarinhos têm um plano: oferecem as penas ao coiote, “Pay pam qa hiinta, itam suususkya löqmuy itaahomasay iisawuy aw maqayani.”',
          },
        ],
      },
      // [KAL] Leitura 3, p. 184
      voo: {
        text: 'Oomiʼi, piw hihin oomiʼi!',
        translation: 'Mais alto, mais alto ainda!',
        emoji: '⬆️',
        choices: [
          { text: 'Taaʼ!', translation: 'Agora!', next: 'final' },
          {
            // [KAL] Diálogo 10, p. 166–167
            text: 'Pev haak qátuʼu.',
            translation: 'Sente-se aqui um pouco.',
            wrong: 'O coiote já está lá no alto. É a hora do plano: grite “Taaʼ!” (agora!).',
          },
        ],
      },
      // [KAL] Leitura 3, p. 184
      final: {
        text: 'Pantani, pantani, itam súʼantsatsna!',
        translation: 'Perfeito, perfeito, fizemos certo!',
        emoji: '🐤',
        ending: {
          tone: 'bom',
          title: 'O plano dos passarinhos',
          message:
            'Cada passarinho pegou de volta as suas penas, e o coiote, sem elas, caiu lá do alto. Agora ele não vai mais incomodar nem comer passarinhos. Você leu uma história de coiote inteira, com “yaw”, “-qʼö”, o futuro em “-ni” e o “kus hin” de “não consegue”.',
        },
      },
    },
    glossary: [
      ['Iisaw', 'coiote'],
      ['Homasa', 'pena, asa'],
      ['Puuyalti', 'voar'],
      ['Oomi', 'para cima'],
      ['Tsirohoya', 'passarinho'],
      ['Pantani', 'perfeito!'],
    ],
  },
];
