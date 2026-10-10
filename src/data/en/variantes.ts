import type { LanguageVariant } from '../types';
import { ipaEnDe } from './tracos';
import { VARIANTS_EN_MUNDO } from './variantes-mundo';

/**
 * Os dialetos do inglês (decisão do dono, 10/10/2026): os EUA (o padrão do curso, que ensina um inglês
 * internacional próximo do americano), o Reino Unido, a Irlanda e o inglês afro-americano (AAVE), que o
 * dono decidiu tratar como dialeto por ter gramática própria. Canadá, Austrália, Nova Zelândia, Índia e
 * África do Sul estão em variantes-mundo.ts. Vocabulário no formato [EUA, dialeto, explicação, nota].
 * Como o curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em inglês («American English», «British English», «Comparison of American and
 * British English», «Hiberno-English», «African-American Vernacular English», «Received
 * Pronunciation», consultadas em 10/10/2026); para o AAVE, os trabalhos de William Labov e de John
 * Rickford que esses verbetes citam, e a Linguistic Society of America (resolução de 1997 sobre o
 * “Ebonics”).
 */
export const VARIANTS_EN: LanguageVariant[] = [
  {
    code: 'en-US',
    country: 'USA',
    kind: 'dialeto',
    speechLocale: 'en-US',
    name: 'Inglês dos EUA',
    flag: '🇺🇸',
    summary:
      'O padrão do curso: um inglês internacional próximo do americano, com a pronúncia do General American, o sotaque “neutro” da TV e do cinema dos EUA.',
    card: {
      id: 'en-us-c1',
      title: 'Por que o inglês americano?',
      emoji: '🇺🇸',
      history:
        'O inglês chegou à América do Norte com os colonos ingleses no século XVII. Depois da independência dos EUA, o lexicógrafo Noah Webster quis uma ortografia americana: o seu dicionário de 1828 fixou formas como “color”, “center” e “program”, que até hoje separam os EUA do Reino Unido (“colour”, “centre”, “programme”). Hoje os EUA têm o maior número de falantes nativos de inglês do mundo, e o cinema, a música e a internet espalharam o inglês americano por toda parte. O curso usa a pronúncia do General American, o sotaque considerado “neutro” nos EUA, com o “r” pronunciado em todas as posições.',
      culture_tip:
        'Nos EUA, a conversa começa leve: “How are you?” é um cumprimento, não uma pergunta de verdade, e a resposta esperada é “Good, thanks! And you?”. Em restaurantes, a gorjeta (tip) de 15% a 20% é praticamente obrigatória, porque faz parte do salário de quem serve. E os americanos sorriem muito e falam com desconhecidos com facilidade: puxar papo na fila é normal.',
      grammar_why:
        'O padrão do curso: a ortografia americana (color, center, traveled), o “r” pronunciado depois de vogal (car, water), o passado simples onde o britânico prefere o present perfect (“I just ate” × “I’ve just eaten”) e o vocabulário dos EUA: apartment, elevator, cookie, fall, gas, sidewalk, vacation.',
      grammar_examples: [
        ['I just ate lunch.', 'Acabei de almoçar.'],
        ['My apartment is on the fifth floor.', 'O meu apartamento fica no quinto andar.'],
        ['We take the elevator.', 'A gente pega o elevador.'],
        ['What’s your favorite color?', 'Qual é a sua cor preferida?'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── REINO UNIDO ─────────────────────────────
  {
    code: 'en-GB',
    country: 'GBR',
    kind: 'dialeto',
    speechLocale: 'en-GB',
    ipa: ipaEnDe('en-GB'),
    name: 'Inglês do Reino Unido',
    flag: '🇬🇧',
    summary:
      'O inglês britânico, com a ortografia de “colour” e “centre”, o “r” que não soa no fim da sílaba e palavras próprias: flat, lift, biscuit, queue. O Reino Unido tem uma variedade enorme de sotaques, do RP da BBC ao cockney e ao scouse.',
    card: {
      id: 'en-gb-c1',
      title: 'Flat, lift e queue',
      emoji: '🇬🇧',
      history:
        'O inglês nasceu na Inglaterra, da língua dos anglos, saxões e jutos que chegaram à ilha a partir do século V; em 1066, a conquista normanda trouxe milhares de palavras do francês. A ortografia britânica guarda marcas dessa história: “colour”, “centre”, “programme”. Por muito tempo, o modelo de pronúncia foi o RP (Received Pronunciation), o sotaque das escolas particulares e da BBC, mas hoje só uma pequena parte dos britânicos fala assim: o país tem uma das maiores variedades de sotaques do mundo inglês, e em poucas horas de trem o jeito de falar muda completamente.',
      culture_tip:
        'Os britânicos são famosos pela fila (queue): furar fila é uma ofensa séria. A educação passa por muitos “sorry” e “please”, e o humor é cheio de ironia e de “understatement”: “not bad” pode querer dizer “excelente”. O chá é ritual, e “Fancy a cuppa?” (quer um chá?) é um convite para conversar. E em vez de “How are you?”, muitos dizem “You alright?”, que é só um “oi”.',
      grammar_why:
        'A gramática é a mesma, com preferências diferentes: (1) o present perfect para coisas recentes: “I’ve just eaten” (EUA: “I just ate”); (2) “have got” para posse: “I’ve got a car” (EUA: “I have a car”); (3) substantivos coletivos com o verbo no plural: “the team are winning”; (4) “at the weekend” (EUA: “on the weekend”); (5) a ortografia: colour, centre, travelled, organise.',
      grammar_examples: [
        ['I’ve just eaten.', 'Acabei de comer. (EUA: I just ate.)'],
        ['Have you got a pen?', 'Você tem uma caneta? (EUA: Do you have a pen?)'],
        ['My flat is near the Tube.', 'O meu apartamento fica perto do metrô. (EUA: apartment, subway)'],
        ['What are you doing at the weekend?', 'O que você vai fazer no fim de semana? (EUA: on the weekend)'],
        ['Fancy a cuppa?', 'Quer um chá?'],
      ],
      character_guide: [
        ['-our, -re', 'a ortografia britânica', 'colour, favourite, centre, theatre'],
        ['r', 'depois de vogal, no fim da sílaba, não soa', 'car [kɑː], water [ˈwɔːtə]'],
      ],
    },
    pronunciation: [
      'O “r” depois de vogal, no fim da sílaba, não soa (pronúncia não rótica): “car” soa [kɑː], “water”, [ˈwɔːtə].',
      'Em palavras como “bath”, “after” e “can’t”, o sul da Inglaterra usa um “a” longo e aberto, [ɑː]: “bath” soa “baath”.',
      'O “t” entre vogais não vira um “d” rápido como nos EUA: “water” tem um “t” de verdade (ou, em Londres, uma parada de glote).',
      'O ditongo de “go” e “home” soa [əʊ] no RP, e não [oʊ] como nos EUA.',
      'Cada região tem o seu sotaque: veja os sotaques do Reino Unido.',
    ],
    vocab: [
      ['apartment', 'flat', 'apartamento'],
      ['elevator', 'lift', 'elevador'],
      ['cookie', 'biscuit', 'biscoito', 'nos EUA, “biscuit” é um pãozinho'],
      ['fall', 'autumn', 'outono'],
      ['gas', 'petrol', 'gasolina'],
      ['sidewalk', 'pavement', 'calçada'],
      ['subway', 'Tube / underground', 'metrô', '“the Tube” é o metrô de Londres'],
      ['french fries', 'chips', 'batata frita'],
      ['chips', 'crisps', 'batata chips (de pacote)', 'cuidado: “chips” muda de sentido'],
      ['vacation', 'holiday', 'férias'],
      ['line', 'queue', 'fila', '“to queue”: fazer fila'],
      ['trash', 'rubbish', 'lixo'],
      ['soccer', 'football', 'futebol'],
      ['color', 'colour', 'cor', 'a ortografia britânica'],
    ],
    stories: [
      {
        id: 'en-h5',
        variant: 'en-GB',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Lost in London',
        emoji: '🚇',
        summary: 'Em Londres, Linu procura o apartamento da amiga Amy e aprende, no caminho, as palavras britânicas do metrô, do elevador e da fila.',
        cultural_context:
          'Em Londres, o metrô é o “Tube”, o apartamento é o “flat”, o elevador é o “lift” e a fila é a “queue”, que os britânicos respeitam muito. Furar fila é uma ofensa séria.',
        start: 'start',
        glossary: [
          ['the Tube', 'o metrô de Londres'],
          ['flat', 'apartamento'],
          ['lift', 'elevador'],
          ['queue', 'fila'],
          ['Fancy a cuppa?', 'Quer um chá?'],
          ['cheers', 'obrigado; valeu'],
        ],
        nodes: {
          start: {
            emoji: '🚇',
            text: 'Linu is in London. He reads a message from his friend Amy: “Take the Tube to Camden. My flat is on the fourth floor. Take the lift!”',
            translation: 'Linu está em Londres. Ele lê uma mensagem da amiga Amy: “Pegue o metrô até Camden. O meu apartamento fica no quarto andar. Pegue o elevador!”',
            choices: [
              { text: 'Linu looks for the Underground station.', translation: 'Linu procura a estação do metrô.', next: 'queue' },
              {
                text: 'Linu looks for a tube of toothpaste.',
                translation: 'Linu procura um tubo de pasta de dente.',
                wrong: '“The Tube” é o apelido do metrô de Londres (o “underground”). A Amy quer que o Linu pegue o metrô.',
              },
            ],
          },
          queue: {
            emoji: '🧍',
            text: 'At the station, there is a long queue for tickets. Linu walks to the front. A woman says: “Excuse me, love, there’s a queue!”',
            translation: 'Na estação, há uma fila longa para os bilhetes. Linu vai direto para a frente. Uma senhora diz: “Com licença, querido, tem fila!”',
            choices: [
              { text: '“Oh, sorry! I’ll wait in the queue.”', translation: '“Ah, desculpe! Vou esperar na fila.”', next: 'flat' },
              {
                text: '“What is a queue?” Linu buys his ticket first.',
                translation: '“O que é queue?” Linu compra o bilhete primeiro.',
                wrong: '“Queue” é a fila (nos EUA, “line”). Para os britânicos, furar fila é muito mal-educado: espere a sua vez.',
              },
            ],
          },
          flat: {
            emoji: '🏢',
            text: 'Linu arrives at Amy’s building. There is a sign: “Lift out of order.” He takes the stairs to the fourth floor. Amy opens the door: “Hiya! You alright? Fancy a cuppa?”',
            translation: 'Linu chega ao prédio da Amy. Há uma placa: “Elevador quebrado.” Ele sobe a escada até o quarto andar. A Amy abre a porta: “Oi! Tudo bem? Quer um chá?”',
            choices: [
              { text: '“Yes, please! A cup of tea would be lovely.”', translation: '“Sim, por favor! Uma xícara de chá seria ótimo.”', next: 'final_bom' },
              { text: '“No, thanks. I’m tired.”', translation: '“Não, obrigado. Estou cansado.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🫖',
            text: 'Amy makes tea and opens a packet of biscuits. Linu says: “Cheers, Amy! Your flat is lovely.” Amy laughs: “You already sound British!”',
            translation: 'A Amy faz o chá e abre um pacote de biscoitos. Linu diz: “Valeu, Amy! O seu apartamento é lindo.” A Amy ri: “Você já fala como um britânico!”',
            ending: {
              tone: 'bom',
              title: 'Tea time',
              message: 'Você chegou ao flat da Amy com as palavras britânicas: the Tube, queue, lift, flat, cuppa, biscuits e cheers.',
            },
          },
          final_neutro: {
            emoji: '🛋️',
            text: 'Linu sits on the sofa. Amy says: “Next time, have a cuppa. It’s the British way to relax!”',
            translation: 'Linu senta no sofá. A Amy diz: “Da próxima vez, tome um chá. É o jeito britânico de relaxar!”',
            ending: {
              tone: 'neutro',
              title: 'O chá ficou para depois',
              message: 'Recusar o chá não é falta de educação, mas é perder um ritual britânico. Da próxima vez, aceite a cuppa!',
            },
          },
        },
      },
      {
        id: 'en-h6',
        variant: 'en-GB',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Chips or crisps?',
        emoji: '🐟',
        summary: 'Num pub de Manchester, Linu pede fish and chips com o amigo Tom e descobre que “chips” e “crisps” não são a mesma coisa do lado de cá do Atlântico.',
        cultural_context:
          'O pub é o centro da vida social britânica. O prato clássico é o fish and chips, peixe empanado com batata frita, que no Reino Unido se chama “chips”; a batata de pacote é “crisps”. E em Manchester muita gente diz “our kid” para falar do irmão.',
        start: 'start',
        glossary: [
          ['chips', 'batata frita (EUA: french fries)'],
          ['crisps', 'batata chips de pacote (EUA: chips)'],
          ['pub', 'bar tradicional britânico'],
          ['our kid', 'o meu irmão (Manchester)'],
          ['have got', 'ter'],
          ['mate', 'amigo, cara'],
        ],
        nodes: {
          start: {
            emoji: '🍺',
            text: 'Linu and his friend Tom are in a pub in Manchester. Tom says: “I’ve got a surprise. My brother is coming too. Our kid loves this pub!”',
            translation: 'Linu e o amigo Tom estão num pub em Manchester. Tom diz: “Tenho uma surpresa. O meu irmão vem também. O ‘our kid’ adora este pub!”',
            choices: [
              { text: '“Our kid? Who is that?”', translation: '“Our kid? Quem é?”', next: 'ourkid' },
            ],
          },
          ourkid: {
            emoji: '👬',
            text: 'Tom laughs: “In Manchester, ‘our kid’ means my brother. His name is Ben.” Ben arrives: “Alright, mate? Have you ordered yet?”',
            translation: 'Tom ri: “Em Manchester, ‘our kid’ quer dizer o meu irmão. O nome dele é Ben.” Ben chega: “E aí, cara? Vocês já pediram?”',
            choices: [
              { text: '“Not yet. I want fish and chips.”', translation: '“Ainda não. Quero fish and chips.”', next: 'pedido' },
            ],
          },
          pedido: {
            emoji: '🐟',
            text: 'The waiter brings fish with big fried potatoes. Linu is surprised: “Where are the chips? These are fries!” Ben smiles: “Those are chips, mate. If you want the thin ones in a packet, they’re crisps.”',
            translation: 'O garçom traz o peixe com batatas fritas grossas. Linu se surpreende: “Cadê as chips? Isso é batata frita!” Ben sorri: “Isso são chips, cara. Se você quer as finas de pacote, são crisps.”',
            choices: [
              {
                text: '“So chips are fries, and crisps are chips!”',
                translation: '“Então chips são batatas fritas, e crisps são batatas de pacote!”',
                next: 'final_bom',
              },
              {
                text: 'Linu thinks the waiter made a mistake.',
                translation: 'Linu acha que o garçom errou o pedido.',
                wrong: 'O garçom acertou: no Reino Unido, “chips” é a batata frita (nos EUA, “french fries”). A de pacote é “crisps”.',
              },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: '“Exactly!” says Tom. Ben buys a packet of crisps for Linu. “Welcome to Manchester, our kid!” Everybody laughs.',
            translation: '“Exatamente!”, diz Tom. Ben compra um pacote de crisps para o Linu. “Bem-vindo a Manchester, irmão!” Todos riem.',
            ending: {
              tone: 'bom',
              title: 'Our kid',
              message: 'Você aprendeu a diferença entre chips e crisps, o “have got” britânico, o “mate” e o “our kid” de Manchester.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── IRLANDA ─────────────────────────────
  {
    code: 'en-IE',
    country: 'IRL',
    kind: 'dialeto',
    speechLocale: 'en-IE',
    name: 'Inglês da Irlanda',
    flag: '🇮🇪',
    summary:
      'O inglês da Irlanda (Hiberno-English), com construções vindas do irlandês, como o “I’m after eating” (acabei de comer), o “ye” para “vocês” e palavras como “grand”, “craic” e “press”.',
    card: {
      id: 'en-ie-c1',
      title: 'What’s the craic?',
      emoji: '☘️',
      history:
        'O inglês chegou à Irlanda com os normandos e os ingleses a partir do século XII, mas por séculos a maioria falava irlandês (gaélico). Nos séculos XVIII e XIX, com o domínio britânico e a Grande Fome (1845–1852), que matou cerca de um milhão de pessoas e fez outro milhão emigrar, o inglês virou a língua da maioria. Mas o inglês irlandês guardou a gramática e o vocabulário do irlandês. Desde a Constituição de 1937, o irlandês é a primeira língua oficial do país e o inglês, a segunda; na prática, o inglês é a língua do dia a dia de quase todos.',
      culture_tip:
        'Na Irlanda, “What’s the craic?” é “e aí, quais são as novidades?”, e uma noite boa no pub é “great craic”. Tudo que está bem é “grand”. Os irlandeses são famosos pela conversa e pelo humor, e a rodada de bebidas no pub (the round) é sagrada: cada um paga a sua vez para o grupo todo. A polícia se chama “the Gardaí” ou “the guards”.',
      grammar_why:
        'Construções que vêm do irlandês: (1) “I’m after eating” = acabei de comer (o “after perfect”); (2) “ye” como plural de “you”: “Are ye coming?”; (3) “it’s” na frente para dar ênfase: “It’s tired I am” (é cansado que eu estou); (4) respostas sem “yes” nem “no”, repetindo o verbo: “Are you coming?” “I am.”; (5) palavras próprias: grand (bem), craic (diversão, novidade), press (armário), giving out (dando bronca).',
      grammar_examples: [
        ['I’m after eating my dinner.', 'Acabei de jantar. (EUA: I just ate dinner.)'],
        ['Are ye coming to the pub?', 'Vocês vêm ao pub? (EUA: Are you guys coming?)'],
        ['It’s grand, thanks.', 'Está tudo bem, obrigado.'],
        ['The cups are in the press.', 'As xícaras estão no armário. (EUA: cupboard)'],
        ['My mam was giving out to me.', 'A minha mãe me deu bronca.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” depois de vogal soa, como nos EUA (pronúncia rótica).',
      'O “th” muitas vezes vira “t” e “d”: “three” soa perto de “tree”, “that” perto de “dat”.',
      'O “t” entre vogais e no fim pode soar chiado, quase um “s” suave: “right” soa perto de “rais”.',
      'A melodia sobe e desce de um jeito próprio, herdado do irlandês.',
    ],
    vocab: [
      ['fine, OK', 'grand', 'bem, ótimo', '“I’m grand”: estou bem'],
      ['fun, news', 'craic', 'diversão, novidade', 'do irlandês “craic”; “What’s the craic?”'],
      ['you (plural)', 'ye', 'vocês', 'vem do inglês antigo, mantido por influência do irlandês'],
      ['I just ate', 'I’m after eating', 'acabei de comer', 'o “after perfect”, decalcado do irlandês'],
      ['cupboard', 'press', 'armário'],
      ['scolding', 'giving out', 'dando bronca'],
      ['groceries', 'messages', 'compras do mercado', '“going for the messages”'],
      ['police', 'the guards / Gardaí', 'a polícia', 'do irlandês “Garda Síochána”'],
      ['mom', 'mam', 'mãe'],
    ],
    stories: [
      {
        id: 'en-h7',
        variant: 'en-IE',
        level: 'A2.1',
        cefr: 'A2',
        title: 'The craic in Galway',
        emoji: '☘️',
        summary: 'Em Galway, o amigo Seán leva Linu a um pub com música ao vivo e o ensina a responder ao irlandês.',
        cultural_context:
          'Galway, no oeste da Irlanda, é famosa pela música tradicional nos pubs, as “sessions”, e pela região do Connemara, onde ainda se fala irlandês. No inglês da Irlanda, “craic” é diversão, “grand” é “tudo bem” e “ye” é “vocês”.',
        start: 'start',
        glossary: [
          ['craic', 'diversão, novidade'],
          ['grand', 'bem, ótimo'],
          ['ye', 'vocês'],
          ['session', 'roda de música tradicional no pub'],
          ['the round', 'a rodada de bebidas'],
        ],
        nodes: {
          start: {
            emoji: '🎻',
            text: 'Linu is in Galway with his friend Seán. Seán says: “There’s a session in the pub tonight. It’s great craic! Are ye coming?” Linu looks around. He is alone with Seán.',
            translation: 'Linu está em Galway com o amigo Seán. Seán diz: “Tem uma roda de música no pub hoje à noite. É muito divertido! Vocês vêm?” Linu olha em volta. Está sozinho com o Seán.',
            choices: [
              { text: '“Ye? It’s only me!”', translation: '“Vocês? Sou só eu!”', next: 'ye' },
            ],
          },
          ye: {
            emoji: '😄',
            text: 'Seán laughs: “In Ireland we say ‘ye’ for more than one person. I mean you and your friends!” Linu asks: “And what is craic?” “Craic is fun!”',
            translation: 'Seán ri: “Na Irlanda a gente diz ‘ye’ para mais de uma pessoa. Quero dizer você e os seus amigos!” Linu pergunta: “E o que é craic?” “Craic é diversão!”',
            choices: [
              { text: '“Then yes, I’m coming!”', translation: '“Então sim, eu vou!”', next: 'pub' },
              {
                text: 'Linu thinks “craic” is a dangerous thing.',
                translation: 'Linu acha que “craic” é uma coisa perigosa.',
                wrong: '“Craic” (pronuncia-se como “crack”) vem do irlandês e quer dizer diversão, conversa boa. “Great craic” é uma noite ótima.',
              },
            ],
          },
          pub: {
            emoji: '🍀',
            text: 'In the pub, people play the fiddle and sing. Seán’s friend Niamh asks Linu: “How are you finding Galway?” Linu wants to say “very good”.',
            translation: 'No pub, as pessoas tocam violino e cantam. A amiga do Seán, Niamh, pergunta ao Linu: “O que você está achando de Galway?” Linu quer dizer “muito bom”.',
            choices: [
              { text: '“It’s grand, thanks! Great craic!”', translation: '“Está ótimo, obrigado! Muito divertido!”', next: 'final_bom' },
              { text: '“It’s OK.”', translation: '“Está OK.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🎶',
            text: 'Niamh claps: “Listen to him! ‘Grand’ and ‘craic’! You’re nearly Irish!” Seán buys the next round.',
            translation: 'Niamh bate palmas: “Olha só ele! ‘Grand’ e ‘craic’! Você é quase irlandês!” Seán paga a próxima rodada.',
            ending: {
              tone: 'bom',
              title: 'Nearly Irish',
              message: 'Você aprendeu o inglês da Irlanda: craic, grand, ye e a rodada de bebidas no pub.',
            },
          },
          final_neutro: {
            emoji: '🎻',
            text: 'Niamh smiles: “Only OK? Stay for the music. By the end of the night, it’ll be grand!”',
            translation: 'Niamh sorri: “Só OK? Fique para a música. Até o fim da noite, vai estar ótimo!”',
            ending: {
              tone: 'neutro',
              title: 'A noite ainda é longa',
              message: 'Na Irlanda, tudo que é bom é “grand”. Da próxima vez, use a palavra!',
            },
          },
        },
      },
      {
        id: 'en-h8',
        variant: 'en-IE',
        level: 'A2.2',
        cefr: 'A2',
        title: 'I’m after missing the bus',
        emoji: '🚌',
        summary: 'Em Dublin, Linu chega atrasado à casa da família da amiga Aoife e aprende o “after perfect” irlandês para explicar o que aconteceu.',
        cultural_context:
          'No inglês da Irlanda, “I’m after missing the bus” quer dizer “acabei de perder o ônibus”: a construção vem do irlandês, que usa “depois de” para falar do que acabou de acontecer. A mãe é “mam”, e o armário da cozinha é o “press”.',
        start: 'start',
        glossary: [
          ['I’m after (doing)', 'acabei de (fazer)'],
          ['mam', 'mãe'],
          ['press', 'armário'],
          ['giving out', 'dando bronca'],
          ['grand', 'tudo bem'],
        ],
        nodes: {
          start: {
            emoji: '🚏',
            text: 'Linu is late for dinner at Aoife’s house in Dublin. He calls her: “Sorry, I just missed the bus!” Aoife says: “No bother! In Ireland we say: ‘I’m after missing the bus.’”',
            translation: 'Linu está atrasado para o jantar na casa da Aoife, em Dublin. Ele liga para ela: “Desculpe, acabei de perder o ônibus!” Aoife diz: “Sem problema! Na Irlanda a gente diz: ‘I’m after missing the bus.’”',
            choices: [
              { text: '“I’m after missing the bus? That means I missed it a moment ago?”', translation: '“I’m after missing the bus? Quer dizer que perdi agora há pouco?”', next: 'after' },
              {
                text: '“I’m after missing the bus? That means I will miss it tomorrow?”',
                translation: '“I’m after missing the bus? Quer dizer que vou perder amanhã?”',
                wrong: '“I’m after (doing)” fala do passado bem recente: “acabei de”. Não é futuro.',
              },
            ],
          },
          after: {
            emoji: '🏠',
            text: '“Exactly!” says Aoife. Linu arrives. Aoife’s mam opens the door: “You’re very welcome! Get the cups from the press, Aoife.” Linu doesn’t understand “press”.',
            translation: '“Exatamente!”, diz Aoife. Linu chega. A mãe da Aoife abre a porta: “Seja muito bem-vindo! Pegue as xícaras no armário, Aoife.” Linu não entende “press”.',
            choices: [
              { text: '“What is a press?”', translation: '“O que é press?”', next: 'press' },
            ],
          },
          press: {
            emoji: '☕',
            text: 'Aoife opens a cupboard: “This is the press!” Her mam laughs: “Is he after learning Irish English already?” Linu says: “I am!”',
            translation: 'Aoife abre um armário: “Isto é o press!” A mãe dela ri: “Ele já acabou de aprender o inglês da Irlanda?” Linu diz: “Acabei!”',
            choices: [
              { text: 'Linu says: “Sorry I’m late. I’m after missing the bus!”', translation: 'Linu diz: “Desculpe o atraso. Acabei de perder o ônibus!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🍲',
            text: 'Everybody laughs. Aoife’s mam says: “Ah, it’s grand. Sit down, the dinner is ready.”',
            translation: 'Todos riem. A mãe da Aoife diz: “Ah, tudo bem. Sente-se, o jantar está pronto.”',
            ending: {
              tone: 'bom',
              title: 'After perfect',
              message: 'Você aprendeu o “I’m after (doing)” irlandês, a resposta repetindo o verbo (“I am!”), “mam” e “press”.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── AAVE ─────────────────────────────
  // Decisão do dono (10/10/2026): o AAVE é dialeto, por ter gramática própria e sistemática.
  {
    code: 'en-AAVE',
    country: 'USA',
    kind: 'dialeto',
    speechLocale: 'en-US',
    name: 'Inglês afro-americano (AAVE)',
    flag: '🎷',
    summary:
      'O African-American Vernacular English, falado por muitos afro-americanos nos EUA: um dialeto com gramática própria e regular, como o “be” habitual (“She be working”) e o “done” de ação completa, e uma das maiores influências na música e na gíria do inglês de hoje.',
    card: {
      id: 'en-aave-c1',
      title: 'Uma gramática, não um erro',
      emoji: '🎤',
      history:
        'O AAVE se formou entre os africanos escravizados e os seus descendentes no sul dos EUA, e se espalhou para o norte com a Grande Migração do século XX. A origem é debatida: alguns linguistas veem nele traços de línguas crioulas e africanas, outros o ligam aos dialetos do sul dos EUA e da Grã-Bretanha. O que os linguistas concordam, desde os estudos de William Labov nos anos 1960, é que o AAVE tem regras próprias e sistemáticas, e não é “inglês errado”. Em 1996, o conselho escolar de Oakland, na Califórnia, reconheceu o “Ebonics” para ajudar no ensino, o que gerou uma grande polêmica; em 1997, a Linguistic Society of America declarou que o AAVE é um sistema linguístico regido por regras, como qualquer outro.',
      culture_tip:
        'Muitas palavras que o mundo todo usa nasceram no AAVE e na cultura afro-americana, do jazz ao hip-hop: “cool”, “woke”, “lit”, “bae”, “on fleek”. Muitos afro-americanos mudam entre o AAVE e o inglês-padrão conforme a situação (code-switching). Imitar o AAVE de brincadeira, sem fazer parte da comunidade, pode soar desrespeitoso: o melhor é aprender a entender.',
      grammar_why:
        'O AAVE tem regras que o inglês-padrão não tem: (1) o “be” habitual, para o que acontece sempre: “She be working” = ela costuma trabalhar (diferente de “She working” = ela está trabalhando agora); (2) o verbo “be” pode cair no presente: “She nice” = ela é legal; (3) o “done” de ação completa: “I done told you” = eu já te disse; (4) o “BIN” tônico, para algo que é verdade há muito tempo: “I BIN knew that” = eu sei disso faz tempo; (5) a dupla negação: “I don’t want nothing”; (6) “ain’t” como negação geral.',
      grammar_examples: [
        ['She be working on Saturdays.', 'Ela costuma trabalhar aos sábados. (padrão: She usually works on Saturdays.)'],
        ['He working right now.', 'Ele está trabalhando agora. (padrão: He is working right now.)'],
        ['I done told you that.', 'Eu já te disse isso. (padrão: I already told you that.)'],
        ['I BIN knew him.', 'Eu conheço ele faz muito tempo. (padrão: I have known him for a long time.)'],
        ['I ain’t got no money.', 'Eu não tenho dinheiro nenhum. (padrão: I don’t have any money.)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “th” muda conforme a posição: no começo, muitas vezes vira “d” (“that” soa “dat”); no meio e no fim, vira “f” ou “v” (“birthday” soa “birfday”).',
      'Os grupos de consoantes no fim da palavra se simplificam: “test” soa “tes’”, “cold” soa “col’”.',
      'Em muitas regiões, sobretudo no sul, o “r” depois de vogal não soa.',
      'O “BIN” do passado remoto é dito com força, e é essa tônica que muda o sentido.',
      'A melodia varia muito com a região, mas a gramática é a mesma de costa a costa.',
    ],
    vocab: [
      ['she usually works', 'she be working', 'ela costuma trabalhar', 'o “be” habitual'],
      ['she is nice', 'she nice', 'ela é legal', 'o “be” cai no presente'],
      ['I already told you', 'I done told you', 'eu já te disse', 'o “done” de ação completa'],
      ['I have known for a long time', 'I BIN knew', 'eu sei faz tempo', 'o “BIN” tônico'],
      ['I don’t have any', 'I ain’t got no', 'não tenho nenhum', 'a dupla negação'],
      ['great, exciting', 'lit', 'ótimo, animado', 'hoje usado em todo o inglês'],
      ['aware of injustice', 'woke', 'atento às injustiças', 'do AAVE; hoje usado e debatido no inglês todo'],
    ],
    stories: [
      {
        id: 'en-h9',
        variant: 'en-AAVE',
        level: 'A2.1',
        cefr: 'A2',
        title: 'She be cooking on Sundays',
        emoji: '🍗',
        summary: 'Em Atlanta, o amigo Marcus convida Linu para o almoço de domingo na casa da avó dele, e Linu aprende o “be” habitual do AAVE.',
        cultural_context:
          'O almoço de domingo depois da igreja é uma tradição forte em muitas famílias afro-americanas do sul dos EUA, com frango frito, couve (collard greens) e torta de batata-doce. No AAVE, “She be cooking” quer dizer que ela costuma cozinhar, sempre.',
        start: 'start',
        glossary: [
          ['she be cooking', 'ela costuma cozinhar (be habitual)'],
          ['she cooking', 'ela está cozinhando agora'],
          ['y’all', 'vocês (no sul dos EUA)'],
          ['collard greens', 'couve refogada'],
          ['sweet potato pie', 'torta de batata-doce'],
        ],
        nodes: {
          start: {
            emoji: '⛪',
            text: 'Linu is in Atlanta. His friend Marcus says: “Come eat with us on Sunday. My grandma be cooking every Sunday. Her food is the best!”',
            translation: 'Linu está em Atlanta. O amigo Marcus diz: “Venha comer com a gente no domingo. A minha avó cozinha todo domingo. A comida dela é a melhor!”',
            choices: [
              { text: '“She be cooking? Every Sunday?”', translation: '“She be cooking? Todo domingo?”', next: 'be' },
            ],
          },
          be: {
            emoji: '👵🏾',
            text: 'Marcus smiles: “Yeah. ‘She be cooking’ means she always cooks on Sundays. If she cooking right now, I say ‘she cooking’.”',
            translation: 'Marcus sorri: “É. ‘She be cooking’ quer dizer que ela sempre cozinha no domingo. Se ela está cozinhando agora, eu digo ‘she cooking’.”',
            choices: [
              {
                text: '“So ‘be’ is for things that happen all the time!”',
                translation: '“Então o ‘be’ é para o que acontece sempre!”',
                next: 'domingo',
              },
              {
                text: '“So ‘she be cooking’ is a mistake.”',
                translation: '“Então ‘she be cooking’ é um erro.”',
                wrong: 'Não é erro: no AAVE, o “be” habitual é uma regra da gramática e quer dizer “costuma”. “She cooking” (sem “be”) é o que acontece agora.',
              },
            ],
          },
          domingo: {
            emoji: '🍗',
            text: 'On Sunday, Marcus’s grandma opens the door: “Come on in, baby! Y’all hungry?” The table has fried chicken, collard greens and sweet potato pie.',
            translation: 'No domingo, a avó do Marcus abre a porta: “Entra, meu bem! Vocês estão com fome?” Na mesa há frango frito, couve e torta de batata-doce.',
            choices: [
              { text: '“Yes, ma’am! Thank you for having me.”', translation: '“Sim, senhora! Obrigado por me receber.”', next: 'final_bom' },
              { text: '“No, I already ate.”', translation: '“Não, eu já comi.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🥧',
            text: 'Grandma smiles: “Such good manners!” After lunch, Linu says: “Marcus, now I know why your grandma be cooking every Sunday!”',
            translation: 'A avó sorri: “Que educado!” Depois do almoço, Linu diz: “Marcus, agora entendi por que a sua avó cozinha todo domingo!”',
            ending: {
              tone: 'bom',
              title: 'Sunday dinner',
              message: 'Você aprendeu o “be” habitual do AAVE (“she be cooking”), a diferença para “she cooking”, o “y’all” e o “ma’am” do sul.',
            },
          },
          final_neutro: {
            emoji: '😅',
            text: 'Grandma laughs: “Already ate? Baby, there’s always room for pie!” She gives Linu a big piece.',
            translation: 'A avó ri: “Já comeu? Meu bem, sempre cabe uma torta!” Ela dá um pedaço grande ao Linu.',
            ending: {
              tone: 'neutro',
              title: 'Sempre cabe uma torta',
              message: 'No almoço de domingo, recusar comida quase não é opção. Da próxima vez, venha com fome!',
            },
          },
        },
      },
      {
        id: 'en-h10',
        variant: 'en-AAVE',
        level: 'A2.2',
        cefr: 'A2',
        title: 'I done told you',
        emoji: '🎤',
        summary: 'Num estúdio de música em Nova York, a rapper Keisha mostra a Linu como o AAVE funciona nas letras de hip-hop, e ele aprende o “done” e o “BIN”.',
        cultural_context:
          'O hip-hop nasceu no Bronx, em Nova York, nos anos 1970, e levou o AAVE para o mundo inteiro. As letras usam a gramática do AAVE: “I done told you” (eu já te disse), “I BIN knew” (eu sei faz tempo). Palavras como “cool”, “lit” e “woke” saíram dele.',
        start: 'start',
        glossary: [
          ['I done told you', 'eu já te disse'],
          ['I BIN knew', 'eu sei faz tempo'],
          ['lit', 'ótimo, animado'],
          ['ain’t', 'não (negação geral)'],
          ['code-switching', 'mudar de jeito de falar conforme a situação'],
        ],
        nodes: {
          start: {
            emoji: '🎧',
            text: 'Linu visits a music studio in the Bronx. Keisha, a rapper, reads her new song: “I done told you, I BIN knew, this city ain’t never gonna stop me.”',
            translation: 'Linu visita um estúdio de música no Bronx. Keisha, uma rapper, lê a sua música nova: “Eu já te disse, eu sei faz tempo, esta cidade nunca vai me parar.”',
            choices: [
              { text: '“What does ‘I done told you’ mean?”', translation: '“O que quer dizer ‘I done told you’?”', next: 'done' },
            ],
          },
          done: {
            emoji: '✅',
            text: 'Keisha explains: “‘Done’ means it’s finished, it already happened. ‘I done told you’ is ‘I already told you’.” Then she says “I BIN knew” with a strong “BIN”.',
            translation: 'Keisha explica: “‘Done’ quer dizer que já acabou, que já aconteceu. ‘I done told you’ é ‘eu já te disse’.” Depois ela diz “I BIN knew” com um “BIN” bem forte.',
            choices: [
              {
                text: '“And ‘I BIN knew’ means you knew it for a long time?”',
                translation: '“E ‘I BIN knew’ quer dizer que você sabe disso faz tempo?”',
                next: 'bin',
              },
              {
                text: '“And ‘I BIN knew’ means you knew it a minute ago?”',
                translation: '“E ‘I BIN knew’ quer dizer que você soube agora há pouco?”',
                wrong: 'O “BIN” tônico fala de algo que é verdade faz muito tempo: “I BIN knew” é “eu sei disso há muito tempo”.',
              },
            ],
          },
          bin: {
            emoji: '🎤',
            text: '“Yes!” says Keisha. “At work, I speak standard English. With my people, I speak like this. It’s called code-switching.” She gives Linu the microphone: “Your turn!”',
            translation: '“Isso!”, diz Keisha. “No trabalho, eu falo o inglês-padrão. Com a minha gente, eu falo assim. Isso se chama code-switching.” Ela dá o microfone ao Linu: “Sua vez!”',
            choices: [
              { text: 'Linu tries: “This song is lit!”', translation: 'Linu tenta: “Esta música é demais!”', next: 'final_bom' },
              { text: 'Linu is shy and says: “No, thank you.”', translation: 'Linu fica com vergonha e diz: “Não, obrigado.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🔥',
            text: 'Keisha laughs: “Lit? You learning fast!” She writes Linu’s words in her notebook. Maybe they will be in her next song.',
            translation: 'Keisha ri: “Lit? Você está aprendendo rápido!” Ela anota as palavras do Linu no caderno. Talvez entrem na próxima música dela.',
            ending: {
              tone: 'bom',
              title: 'Lit',
              message: 'Você aprendeu o “done” de ação completa, o “BIN” do passado remoto, o “ain’t”, o “lit” e o que é code-switching.',
            },
          },
          final_neutro: {
            emoji: '🎶',
            text: 'Keisha smiles: “No problem. Listen first, then you speak. That’s how I learned too.”',
            translation: 'Keisha sorri: “Sem problema. Primeiro escuta, depois fala. Foi assim que eu aprendi também.”',
            ending: {
              tone: 'neutro',
              title: 'Primeiro escutar',
              message: 'Entender o AAVE é o mais importante. Da próxima vez, arrisque uma palavra no microfone!',
            },
          },
        },
      },
    ],
  },

  ...VARIANTS_EN_MUNDO,
];
