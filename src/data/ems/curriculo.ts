import type { UnitSeed } from '../types';

/**
 * Trilha do alutiiq, do A1.1 ao A2.2 (o teto do idioma). Fontes no cabeçalho de vocabulario.ts: [WIKT],
 * [WIKI], [ANLC] no A1; [KALT] (o livro-texto de Kodiak, 2023), [FRASES] (o guia de conversação de
 * Kodiak, 2006) e [WOTW] (a Palavra da Semana do Alutiiq Museum) no A2, com a página de cada frase.
 *
 * As frases são do [ANLC] (“Cama’i”, “Quyanaa”) e dos exemplos dos verbetes do [WIKT] (“Asikaqa angli”,
 * “Cacaq ang’aqurtau’u? — Ca.”, “Sun’ami enerpak pat’snarluni macartuq”, “Aluuwimi unuarpak maqarluni
 * macartuq”), com a tradução deles. Nenhuma frase com gramática nova foi montada por nós: fora as das
 * fontes, só há palavras soltas lado a lado (“Cama’i! Quyanaa!”).
 */
export const UNITS_EMS: UnitSeed[] = [
  {
    id: 'ems-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cama’i!',
    emoji: '👋',
    card: {
      id: 'ems-c1',
      title: 'Sugpiaq, a pessoa de verdade',
      emoji: '🏔️',
      // [ANLC] (cerca de 400 falantes de 3.000; Sugpiaq = suk 'person' + -piaq 'real'; o nome “Alutiiq”, de
      // uma forma russa de “aleúte”; dois dialetos, koniag e chugach; Jeff Leer, gramática e dicionário do
      // koniag); [WIKI] «Alutiiq language» (o liceu de Kodiak passou a ensinar a língua em 2010, a pedido
      // dos alunos; Afognak, abandonada depois do terremoto de 1964).
      history:
        'O alutiiq é a língua dos sugpiaq, na costa do golfo do Alasca: a ilha Kodiak, a península do Alasca, a península Kenai e o estreito do Príncipe Guilherme. É parente próxima do iúpique central, do mesmo ramo da família esquimó-aleúte, e hoje tem cerca de 400 falantes, de um povo de uns 3.000. O próprio povo se chamava “sugpiaq”, de “suk” (pessoa) e “-piaq” (de verdade); o nome “alutiiq” veio de uma forma russa de “aleúte”, que os russos davam a todos os povos que encontraram de Attu até Kodiak. Em 2010, a pedido dos próprios alunos, o liceu de Kodiak voltou a ensinar a língua.',
      culture_tip:
        'Para cumprimentar, diz-se “Cama’i!”, e para agradecer, “Quyanaa!”. A resposta ao agradecimento é “Canaituq” — de nada, não tem problema.',
      grammar_why:
        'Como as outras línguas iúpiques, o alutiiq monta frases inteiras em poucas palavras. No dicionário, muitos verbos que dizem como alguém ou alguma coisa está aparecem com o final -luni: “asirluni” (estar bem), “qenaluni” (estar doente), “sakaarlluni” (estar cansado). E a partícula -qaa, colada à primeira palavra, transforma a frase numa pergunta de sim ou não.',
      grammar_examples: [
        ['Asikaqa angli.', 'Eu gosto muito dele.'],
        ['Cacaq ang’aqurtau’u? — Ca.', 'O que ela está carregando? — Não sei.'],
      ],
      character_guide: [
        ['c', 'soa “tch”, como em “tchau”', 'Cama’i (olá)'],
        ['e', 'uma vogal neutra, como o “a” do inglês “about”', 'engluq (casa)'],
        ['q', 'um “k” lá do fundo da garganta', 'Quyanaa (obrigado)'],
        ['r', 'um som raspado do fundo da garganta, sem voz', 'arnaq (mulher)'],
        ['ʀ', 'um “r” vibrado, como o de “caro”', 'fanaʀuq (lanterna)'],
        ['ll', 'um “l” soprado, sem voz', 'cillqaq (epilóbio)'],
        ['’', 'o apóstrofo separa sons ou dobra a consoante', 'Cama’i (olá)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u1-l1',
        title: 'Cama’i! Quyanaa!',
        kind: 'licao',
        words: ['Cama’i', 'Quyanaa', 'Canaituq', 'Ca', 'Ai?', 'Awa ai?'],
        cloze: [
          { sentence: '___!', answer: 'Cama’i', options: ['Cama’i', 'Canaituq', 'Ca'], translation: 'Olá!' },
          { sentence: 'Quyanaa! — ___.', answer: 'Canaituq', options: ['Canaituq', 'Cama’i', 'Ai?'], translation: 'Obrigado! — De nada.' },
          { sentence: 'Cacaq ang’aqurtau’u? — ___.', answer: 'Ca', options: ['Ca', 'Quyanaa', 'Cama’i'], translation: 'O que ela está carregando? — Não sei.' },
        ],
        voice: {
          bot: 'Cama’i!',
          botTranslation: 'Olá!',
          expected: ['Cama’i!', 'Cama’i', "cama'i", 'camai'],
          hint: 'Responda o cumprimento: “Cama’i!”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Cama’i!”), um agradecimento (“Quyanaa!”) e a resposta (“Canaituq”).',
      },
      {
        id: 'ems-u1-l2',
        title: 'Arnaq, alqaq, anngaq',
        kind: 'licao',
        words: ['suk', 'arnaq', 'alqaq', 'anngaq', 'acak', 'angli'],
        cloze: [
          { sentence: 'Asikaqa ___.', answer: 'angli', options: ['angli', 'arnaq', 'Ca'], translation: 'Eu gosto muito dele.' },
          { sentence: 'Alqaq, ___.', answer: 'anngaq', options: ['anngaq', 'macaq', 'qulen'], translation: 'A irmã mais velha, o irmão mais velho.' },
          { sentence: '___, anaanaa.', answer: 'Acak', options: ['Acak', 'Cayuq', 'Engluq'], translation: 'A tia (irmã do pai), a tia (irmã da mãe).' },
        ],
        voice: {
          bot: 'Ai?',
          botTranslation: 'Hein? O que você disse?',
          expected: ['Cama’i!', 'Cama’i', "cama'i", 'Quyanaa'],
          hint: 'Repita o cumprimento: “Cama’i!”.',
        },
        communityPrompt: 'Escreva os nomes da família em alutiiq: “alqaq” (irmã mais velha), “anngaq” (irmão mais velho)…',
      },
      // Lições extras do A1.1 (17/10/2026), só com palavras que o pacote já tinha ([WIKT]). Os dois nomes
      // do polvo, amikuq (N) e utguiq (S), e o parentesco com o aleúte: [KALT] p. 5. Niuwasuuteq, “uma
      // coisa para falar”: [FRASES] p. 19 e [WIKT] s.v. “niuwasuuteq”; “laugka” e
      // “stakanaq”, do russo лавка e стакан: [WIKT] s.v.
      {
        id: 'ems-u1-l4',
        title: 'Arlluk, amikuq, kuskaq: os bichos',
        kind: 'licao',
        words: ['arlluk', 'amikuq', 'sagiq', 'uskaanaq', 'kuskaq', 'qamaquq'],
        cloze: [
          { sentence: '“___”: orca.', answer: 'arlluk', options: ['arlluk', 'amikuq', 'sagiq'], translation: '“Arlluk”: orca.' },
          { sentence: '“___”: gato.', answer: 'kuskaq', options: ['kuskaq', 'uskaanaq', 'qamaquq'], translation: '“Kuskaq”: gato.' },
          { sentence: '“___”: polvo.', answer: 'amikuq', options: ['amikuq', 'arlluk', 'kuskaq'], translation: '“Amikuq”: polvo.' },
        ],
        voice: {
          bot: 'Arlluk.',
          botTranslation: 'Orca.',
          expected: ['Arlluk.', 'arlluk'],
          hint: 'Repita a palavra para “orca”: “arlluk”.',
        },
        communityPrompt:
          'No norte de Kodiak, o polvo é “amikuq”, palavra parente do aleúte; no sul, é “utguiq”. Escreva em alutiiq três bichos do mar: “arlluk”, “amikuq” e “sagiq”.',
      },
      {
        id: 'ems-u1-l5',
        title: 'Engluq, qayaq, laugka: a casa',
        kind: 'licao',
        words: ['engluq', 'gaaleq', 'qayaq', 'nehusiq', 'stakanaq', 'laugka'],
        cloze: [
          { sentence: '“___”: casa.', answer: 'engluq', options: ['engluq', 'gaaleq', 'laugka'], translation: '“Engluq”: casa.' },
          { sentence: '“___”: faca.', answer: 'nehusiq', options: ['nehusiq', 'stakanaq', 'qayaq'], translation: '“Nehusiq”: faca.' },
          { sentence: '“___”: loja.', answer: 'laugka', options: ['laugka', 'engluq', 'nehusiq'], translation: '“Laugka”: loja.' },
        ],
        voice: {
          bot: 'Engluq.',
          botTranslation: 'Casa.',
          expected: ['Engluq.', 'engluq'],
          hint: 'Repita a palavra para “casa”: “engluq”.',
        },
        communityPrompt:
          '“Laugka” (loja) e “stakanaq” (copo) vieram do russo. Já o telefone, “niuwasuuteq”, é “uma coisa para falar”. Escreva em alutiiq: casa, janela e baidarka (“engluq”, “gaaleq”, “qayaq”).',
      },
      {
        id: 'ems-u1-l3',
        title: 'Prova: Cama’i!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Quyanaa!',
          botTranslation: 'Obrigado!',
          expected: ['Canaituq.', 'Canaituq', 'canaituq', 'Quyanaituq'],
          hint: 'Responda ao agradecimento: “Canaituq” (de nada).',
        },
        communityPrompt: 'Escreva um diálogo curto: “Cama’i!”, “Quyanaa!”, “Canaituq.”.',
      },
    ],
  },
  {
    id: 'ems-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Macartuq',
    emoji: '☀️',
    card: {
      id: 'ems-c2',
      title: 'Os meses são luas',
      emoji: '🌙',
      // [WIKI] «Alutiiq language», a tabela dos meses (koniag: “… Iraluq”, “… Iraluat”, “… Iralua”); [WIKT]
      // s.v. “iraluq” (moon; month), “Qanim Iralua” (December), “maqarluni”, “pat’snarluni”, “cayuq” (do
      // russo чай), “kelipaq” (хлеб), “caskaq” (чашка).
      history:
        'Em alutiiq, “iraluq” é a lua e também o mês, e os meses do koniag são luas com nome: dezembro é “Qanim Iralua”, e fevereiro, “Nanicqaaq Iraluq”. Os dois dialetos chamam os meses de jeitos diferentes: o chugach, da península Kenai, tem outros nomes, como “Iqallugciq” para junho. E, como nas outras línguas do Alasca, o russo deixou palavras na mesa: “cayuq” (chá), “kelipaq” (pão), “caskaq” (xícara).',
      culture_tip:
        'Para falar do tempo, o alutiiq diz como o dia está: “Sun’ami enerpak pat’snarluni macartuq” — hoje de manhã, em Kodiak, está frio, mas faz sol.',
      grammar_why:
        'Os verbos de como está o tempo seguem o mesmo molde: “maqarluni” (estar quente) e “pat’snarluni” (estar frio) aparecem antes de “macartuq” (faz sol; “macaq” é o sol). O lugar vem no começo, com o final -mi (em): “Sun’ami”, em Kodiak.',
      grammar_examples: [
        ['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.'],
        ['Aluuwimi unuarpak maqarluni macartuq.', 'Hoje de manhã está quente e faz sol na península do Alasca.'],
      ],
      character_guide: [
        ['-mi', 'em (o lugar)', 'Sun’ami (em Kodiak)'],
        ['-luni', 'como está', 'maqarluni (estar quente)'],
        ['iraluq', 'lua, mês', 'Qanim Iralua (dezembro)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u2-l1',
        title: 'Macaq, iraluq, mit’aq',
        kind: 'licao',
        words: ['macaq', 'iraluq', 'mit’aq', 'naniyaq', 'maqarluni', 'pat’snarluni'],
        cloze: [
          { sentence: 'Sun’ami enerpak ___ macartuq.', answer: 'pat’snarluni', options: ['pat’snarluni', 'macaq', 'iraluq'], translation: 'Hoje de manhã está frio, mas faz sol em Kodiak.' },
          { sentence: 'Aluuwimi unuarpak ___ macartuq.', answer: 'maqarluni', options: ['maqarluni', 'qenaluni', 'mit’aq'], translation: 'Hoje de manhã está quente e faz sol na península do Alasca.' },
          { sentence: 'Qanim ___.', answer: 'Iralua', options: ['Iralua', 'Macaq', 'Ca'], translation: 'Dezembro.' },
        ],
        voice: {
          bot: 'Sun’ami enerpak pat’snarluni macartuq.',
          botTranslation: 'Hoje de manhã está frio, mas faz sol em Kodiak.',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Ca'],
          hint: 'Agradeça a notícia: “Quyanaa!”.',
        },
        communityPrompt: 'Escreva como está o tempo hoje, com “maqarluni” ou “pat’snarluni”.',
      },
      {
        id: 'ems-u2-l2',
        title: 'Cayuq, kelipaq, akagwik',
        kind: 'licao',
        words: ['cayuq', 'kelipaq', 'masla', 'haatkiik', 'akagwik', 'caskaq'],
        cloze: [
          { sentence: '___, quyanaa.', answer: 'Cayuq', options: ['Cayuq', 'Arlluk', 'Engluq'], translation: 'Chá, obrigado.' },
          { sentence: 'Kelipaq, ___.', answer: 'masla', options: ['masla', 'macaq', 'naniyaq'], translation: 'Pão, manteiga.' },
          { sentence: 'Akagwik, ___.', answer: 'alagnaq', options: ['alagnaq', 'qulen', 'gaaleq'], translation: 'Amora-branca, framboesa-do-salmão.' },
        ],
        voice: {
          bot: 'Cayuq?',
          botTranslation: 'Chá?',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Cayuq'],
          hint: 'Aceite e agradeça: “Quyanaa!”.',
        },
        communityPrompt: 'Escreva o que tem na mesa: “cayuq”, “kelipaq”, “masla”, “haatkiik”…',
      },
      {
        id: 'ems-u2-l3',
        title: 'Prova: Macartuq',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Awa ai?',
          botTranslation: 'É só isso?',
          expected: ['Quyanaa!', 'Quyanaa', 'quyanaa', 'Talliman', 'Qulen'],
          hint: 'Agradeça: “Quyanaa!”, ou conte até cinco: “Talliman”.',
        },
        communityPrompt: 'Conte de um a cinco em alutiiq: “allringuq, mal’uk, pingayun, staaman, talliman”.',
      },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes: [KALT] Counceller e Chya (orgs.), “Kodiak Alutiiq Language Textbook” (Sun’aq Tribe of Kodiak
  // e Alutiiq Museum, 2023), página impressa; [FRASES] Counceller, revisão de Jeff Leer, “Kodiak Alutiiq
  // Conversational Phrasebook” (Alutiiq Museum, 2006), página impressa; [WOTW] Alutiiq Museum, “Alutiiq
  // Word of the Week”, pelo número da página. As frases em alutiiq são dos livros, com a tradução deles.
  // Única frase montada: “Gui Linu”, o molde “Gui [NOME]” do livro (KALT p. 20) com o nome do Linu.
  // Grafia dos livros (estilo norte de Kodiak primeiro); o “R” russo dos livros vira “ʀ”.
  {
    id: 'ems-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Asirtuten-qaa?',
    emoji: '🙋',
    card: {
      id: 'ems-c3',
      title: 'Um livro feito em Kodiak',
      emoji: '📗',
      // [KALT] p. 1 (o Sun’aq Tribe pagou, o Alutiiq Museum escreveu; para o liceu e a faculdade), p. 3–4
      // (estilos norte e sul; o norte vem primeiro nos materiais, por ser o mais ameaçado), p. 28 (tabela
      // 5: cerca de 20 falantes fluentes em Kodiak em 2023, 2 do estilo norte; a Palavra da Semana).
      history:
        'Do A2 em diante, este curso segue o livro-texto de alutiiq de Kodiak, de 2023. Ele foi pago pela tribo Sun’aq de Kodiak e escrito pelo Alutiiq Museum, com April Isiik Counceller e Dehrich Isuwiq Chya, para alunos do liceu e da faculdade. Segundo o livro, em 2023 restavam em Kodiak cerca de 20 falantes fluentes, só 2 deles do estilo norte. Por isso os materiais de Kodiak põem sempre a forma do norte primeiro e a do sul depois: o cachorro é “aikuq” no norte e “piugta” no sul.',
      // [KALT] p. 20 (apresentar-se com a família; Gui, Atqa, Ap’rtaaraatnga …-mek; o diálogo)
      culture_tip:
        'Para se apresentar, há três jeitos: “Gui Bob” (eu sou Bob), “Atqa Bob” (meu nome é Bob) e “Ap’rtaaraatnga Bob-mek” (me chamam de Bob). E a conversa começa assim: “Cama’i, asirtuten-qaa?” — “Asirtua.” (Olá, você está bem? — Estou bem.)',
      // [KALT] p. 56 (tabela 13 e 14), p. 35 e 52
      grammar_why:
        'O final do verbo diz quem faz: “asirtua” (eu estou bem), “asirtuten” (você está bem), “asirtuq” (ele ou ela está bem). Ele também conta quantos são: um, dois ou três ou mais. E -qaa, colado à primeira palavra, faz a pergunta de sim ou não.',
      grammar_examples: [
        ['Cama’i, asirtuten-qaa?', 'Olá, você está bem?'],
        ['Asirtua. Gui Linu, kina ellpet?', 'Estou bem. Eu sou o Linu, quem é você?'],
        ['Tan’uraq kuingtuq.', 'O menino está andando.'],
      ],
      // [KALT] p. 56 (tabela 13), p. 52 (-qaa), p. 91–93 (-mi, -men, -mek)
      character_guide: [
        ['-tua', 'eu', 'Asirtua (estou bem)'],
        ['-tuten', 'você', 'Asirtuten (você está bem)'],
        ['-tuq', 'ele, ela', 'Asirtuq (está bem)'],
        ['-men', 'para (o lugar)', 'Sun’amen (para Kodiak)'],
        ['-mek', 'de (o lugar)', 'Sun’amek (de Kodiak)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u3-l1',
        title: 'Nukallpiaq, arya’aq, taquka’aq',
        kind: 'licao',
        words: ['nukallpiaq', 'tan’uraq', 'arya’aq', 'taquka’aq', 'iqalluk', 'aikuq'],
        cloze: [
          // KALT p. 36
          { sentence: '___ kuimartuq.', answer: 'Iqalluk', options: ['Iqalluk', 'Engluq', 'Gaaleq'], translation: 'O peixe está nadando.' },
          // KALT p. 35
          { sentence: 'Tan’uraq ___.', answer: 'kuingtuq', options: ['kuingtuq', 'kuingtut', 'kuingtuten'], translation: 'O menino está andando.' },
          // KALT p. 67
          { sentence: 'Tan’urak ___.', answer: 'qecenguk', options: ['qecenguk', 'qecenguq', 'qecengut'], translation: 'Os dois meninos estão correndo.' },
        ],
        voice: {
          // KALT p. 20
          bot: 'Cama’i, asirtuten-qaa?',
          botTranslation: 'Olá, você está bem?',
          expected: ['Asirtua.', 'asirtua', 'Asirtuanga.', 'asirtuanga'],
          hint: 'Diga que está bem: “Asirtua.”',
        },
        communityPrompt: 'Escreva duas frases como as do livro de Kodiak: “Arya’aq kuimartuq” (a menina está nadando) e “Taquka’aq ner’uq” (o urso está comendo).',
      },
      {
        id: 'ems-u3-l2',
        title: 'Kuinglluni, qawarluni, nerluni',
        kind: 'licao',
        words: ['kuinglluni', 'qecengluni', 'aqumluni', 'qawarluni', 'kuimarluni', 'nerluni'],
        cloze: [
          // KALT p. 35
          { sentence: 'Nukallpiak ___.', answer: 'ner’uk', options: ['ner’uk', 'ner’uq', 'ner’ut'], translation: 'Os dois homens estão comendo.' },
          // KALT p. 48
          { sentence: 'Kuimartuten ___.', answer: 'ellpet', options: ['ellpet', 'gui', 'una'], translation: 'Você está nadando.' },
          // KALT p. 92
          { sentence: '___ ag’it?', answer: 'Natmen', options: ['Natmen', 'Naken', 'Nani'], translation: 'Para onde você vai?' },
        ],
        voice: {
          // KALT p. 92; a resposta, p. 61
          bot: 'Natmen ag’it?',
          botTranslation: 'Para onde você vai?',
          expected: ['Qutmen agciqua.', 'qutmen agciqua', 'Nuniamen agciqua.', 'nuniamen agciqua'],
          hint: 'Diga que vai à praia: “Qutmen agciqua.” (“quteq” é a praia, e -men, “para”).',
        },
        communityPrompt: 'Escreva o que você está fazendo, com o final -tua do “eu”, como no livro: “Silugtua” (estou feliz), “Kuimartua”…',
      },
      {
        id: 'ems-u3-l3',
        title: 'Prova: Asirtuten-qaa?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // KALT p. 95 (Cestun et’cit?); as respostas, p. 53
          bot: 'Cestun et’cit?',
          botTranslation: 'Como você está?',
          expected: ['Asirtua.', 'asirtua', 'Silugtua.', 'silugtua', 'Sakaartua.', 'sakaartua'],
          hint: 'Diga como você está: “Asirtua” (estou bem), “Silugtua” (estou feliz) ou “Sakaartua” (estou cansado).',
        },
        communityPrompt: 'Escreva uma apresentação curta como a do livro: “Cama’i, asirtuten-qaa?”, “Asirtua. Gui …, kina ellpet?”.',
      },
    ],
  },
  {
    id: 'ems-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ilanka',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'ems-c4',
      title: 'Quem é a sua família?',
      emoji: '👵',
      // [KALT] p. 118 (dizer quem são os pais e os avós é tão importante quanto o nome), p. 20 (o costume
      // de contar a família ajudava a firmar amizades e a dividir recursos); [FRASES] p. 24 (os dias da
      // semana vieram do tempo russo; os nomes dos meses foram escolhidos em 2003 pelo comitê
      // Qik’rtarmiut Alutiit, pelo museu e pelos falantes); [KALT] p. 72–73 (Pektut, “segunda-feira”, ao
      // pé da letra “eles trabalham”; Maqiut, “sábado”, “eles tomam banho”).
      history:
        'Nas comunidades alutiiq, apresentar-se é contar a família: dizer quem são os pais e os avós é tão importante quanto dizer o nome. O costume vem de longe, porque achar parentes em comum ajudava a firmar amizades e a dividir a caça e a pesca. Os dias da semana vieram do tempo russo, e alguns contam o que se faz: “Pektut”, segunda-feira, é “eles trabalham”, e “Maqiut”, sábado, é “eles tomam banho”. Já os nomes dos meses foram escolhidos em 2003 por um comitê de Kodiak, com o museu e os falantes.',
      // [KALT] p. 119 (o roteiro da apresentação); [FRASES] p. 5 (Sun’ami sullrianga, N; sullianga, S)
      culture_tip:
        'O roteiro de apresentação do livro de Kodiak diz onde a pessoa nasceu e quem são a mãe, o pai e os irmãos: “Sun’ami sullrianga” (eu nasci em Kodiak), “Maamaqa Susan” (minha mãe é Susan).',
      // [KALT] p. 115 (tabela 34), p. 145 (tabela 50), p. 147
      grammar_why:
        'O dono vem no fim da palavra: “emaa” é avó, e “emaaqa”, minha avó. E o passado tem um marcador próprio, -llri-: “atullrianga” (eu cantava), “atullria” (ele cantava). Para o futuro, entra -ciq-: “aturciqua” (vou cantar).',
      grammar_examples: [
        ['Emaaqa Sally.', 'Minha avó é Sally.'],
        ['Sun’ami sullrianga.', 'Eu nasci em Kodiak.'],
        ['Unugmi qawarciqua.', 'Vou dormir hoje à noite.'],
      ],
      // [KALT] p. 115, 145, 144, 146
      character_guide: [
        ['-qa / -ka', 'meu, minha', 'emaaqa (minha avó)'],
        ['-n', 'teu, seu', 'yaaman (a tua pedra)'],
        ['-llria', 'passado (ele, ela)', 'atullria (ele cantava)'],
        ['-ciq-', 'futuro', 'aturciqua (vou cantar)'],
        ['-pak', 'este (hoje)', 'unugpak (hoje à noite)'],
      ],
    },
    lessons: [
      {
        id: 'ems-u4-l1',
        title: 'Maamaqa, taataqa, emaaqa',
        kind: 'licao',
        words: ['maama', 'taata', 'emaa', 'apaa', 'uyuwaq', 'paniyaq'],
        cloze: [
          // KALT p. 74
          { sentence: '___ Sally.', answer: 'Emaaqa', options: ['Emaaqa', 'Apaaqa', 'Taataqa'], translation: 'Minha avó é Sally.' },
          // FRASES p. 6
          { sentence: 'Maamaqa Agw’anermi ___.', answer: 'sullia', options: ['sullia', 'sullianga', 'sulliaten'], translation: 'Minha mãe nasceu em Afognak.' },
          // FRASES p. 6
          { sentence: 'Paniyaqa Anchorage-mi ___.', answer: 'etaartuq', options: ['etaartuq', 'etaartua', 'etaartukut'], translation: 'Minha filha mora em Anchorage.' },
        ],
        voice: {
          // FRASES p. 7
          bot: 'Ima-mi ilaten?',
          botTranslation: 'E a sua família, como vai?',
          expected: ['Ilanka asirtut.', 'ilanka asirtut'],
          hint: 'Diga que a sua família está bem: “Ilanka asirtut.”',
        },
        communityPrompt: 'Apresente a sua família como no livro de Kodiak: “Maamaqa …” (minha mãe é …), “Taataqa …” (meu pai é …), “Emaaqa …” (minha avó é …).',
      },
      {
        id: 'ems-u4-l2',
        title: 'Unuaq, akgua’aq, unuk',
        kind: 'licao',
        words: ['erneq', 'unuaq', 'akgua’aq', 'unuk', 'kiak', 'uksuq'],
        cloze: [
          // KALT p. 147
          { sentence: '___ qawarciqua.', answer: 'Unugmi', options: ['Unugmi', 'Unuami', 'Kiagmi'], translation: 'Vou dormir hoje à noite.' },
          // KALT p. 147
          { sentence: '___ nerellrianga.', answer: 'Unuami', options: ['Unuami', 'Unugmi', 'Unuaqu'], translation: 'Eu comi hoje de manhã.' },
          // FRASES p. 8
          { sentence: '___ tang’rciqamken.', answer: 'Unuaqu', options: ['Unuaqu', 'Unuami', 'Unugmi'], translation: 'Até amanhã (eu vejo você amanhã).' },
        ],
        voice: {
          // FRASES p. 10; a resposta, KALT p. 146 (unuaq, “amanhã”) e FRASES p. 8 (Unuaqu)
          bot: 'Qaku angiciiqsit?',
          botTranslation: 'Quando você volta?',
          expected: ['Unuaqu.', 'unuaqu'],
          hint: 'Diga que volta amanhã: “Unuaqu.”',
        },
        communityPrompt: 'Escreva o que você faz todo dia, como no livro: “Unuanra kuufiarturtaartua” (tomo café toda manhã).',
      },
      {
        id: 'ems-u4-l3',
        title: 'Prova: Ilanka',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // FRASES p. 8
          bot: 'Quyanaa tailuten.',
          botTranslation: 'Obrigado por ter vindo.',
          expected: ['Unuaqu tang’rciqamken.', 'unuaqu tang’rciqamken', 'Canaituq.', 'canaituq'],
          hint: 'Despeça-se até amanhã: “Unuaqu tang’rciqamken.” (ou responda “Canaituq”).',
        },
        communityPrompt: 'Escreva a sua apresentação completa: onde nasceu (“…-mi sullrianga”), sua mãe, seu pai e seus irmãos.',
      },
    ],
  },
];
