import type { UnitSeed } from '../types';

/**
 * Trilha do aleúte: por enquanto só as duas unidades do nível A1 (curso incompleto — ver `incomplete`
 * em index.ts). Fontes no cabeçalho de vocabulario.ts: [OMNI], [WIKT], [WIKI], [ANLC].
 *
 * As frases são do [OMNI] (cumprimentos, “Kiin asax̂tax̂t?”, “… asax̂takuq”, “Qanaang uma ii?”) e da
 * sintaxe do [WIKI] (“Tayaĝux̂ awakux̂”, “Piitrax̂ tayaĝux̂ kidukux̂”, “Tayaĝum adaa”), com a tradução
 * deles. Nenhuma frase com gramática nova foi montada por nós: fora as das fontes, só há palavras soltas
 * lado a lado (“Aang, qaĝaasakung!”).
 */
export const UNITS_ALE: UnitSeed[] = [
  {
    id: 'ale-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aang! Alqutaxt?',
    emoji: '👋',
    card: {
      id: 'ale-c1',
      title: 'Unangam Tunuu, a língua das ilhas',
      emoji: '🏝️',
      // [WIKI] «Aleut language» (o único membro do ramo aleúte; menos de 100 a 150 falantes ativos;
      // Alaxsxa, a origem do nome Alasca; a escrita cirílica de Veniaminov, de 1824; a escrita latina
      // escolar de 1972; a última falante do dialeto de Bering morreu em 2021); [ANLC] (Unangax̂, pessoa;
      // dois dialetos, divididos na ilha de Atka).
      history:
        'O aleúte, ou Unangam Tunuu, é a língua dos unangax̂, que vivem na corrente de ilhas que vai do Alasca em direção à Rússia: as ilhas Aleutas, as ilhas Pribilof e a ponta da península do Alasca, que em aleúte se chama Alaxsxa — a origem do nome “Alasca”. É o único membro do ramo aleúte da família esquimó-aleúte, e hoje tem menos de 150 falantes ativos. A primeira escrita foi em letras cirílicas, criada a partir de 1824 pelo padre ortodoxo russo Ioann Veniaminov, que traduziu o Evangelho para o aleúte; a escrita em letras latinas usada nas escolas do Alasca é de 1972.',
      culture_tip:
        'O cumprimento mais simples é “Aang!”, que também quer dizer “sim”. E para agradecer, “Qaĝaasakung!”. Quem recebe visitas diz “Qaĝaasakung huzuu haqakux̂”: obrigado a todos por virem.',
      grammar_why:
        'O aleúte marca o tempo e a pessoa no fim do verbo: no presente, o verbo leva -ku-, e “ele, ela” termina em -kux̂: “awakux̂” é “ele, ela trabalha”. Para “eu”, no aleúte de Atka, o fim é -kuq: “Txin yaxtakuq”, eu te amo. E a ordem da frase é fixa: sujeito, objeto, verbo — “Piitrax̂ tayaĝux̂ kidukux̂”, o Pedro está ajudando o homem.',
      grammar_examples: [
        ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
        ['Piitrax̂ tayaĝux̂ kidukux̂.', 'O Pedro está ajudando o homem.'],
        ['Txin yaxtakuq.', 'Eu te amo.'],
      ],
      character_guide: [
        ['x', 'um som raspado no céu da boca, como o “j” do espanhol', 'slagux (vento)'],
        ['x̂', 'o mesmo som, mais lá no fundo da garganta', 'tayaĝux̂ (homem)'],
        ['ĝ', 'o “r” do fundo da garganta, como o do francês', 'tayaĝux̂ (homem)'],
        ['q', 'um “k” lá do fundo da garganta', 'Qaĝaasakung (obrigado)'],
        ['ng', 'o “ng” de “inglês”, num som só', 'Aang (olá)'],
        ['hl, hm, hn', 'o h antes de l, m, n deixa o som soprado, sem voz', 'hlax̂ (menino)'],
        ['aa, ii, uu', 'vogal dobrada é vogal longa', 'Unangam Tunuu'],
      ],
    },
    lessons: [
      {
        id: 'ale-u1-l1',
        title: 'Aang! Alqutaxt?',
        kind: 'licao',
        words: ['Aang', 'Alqutaxt?', 'Qaĝaasakung', 'Qilachxizax̂', 'Ukudigada', 'Amtal'],
        cloze: [
          { sentence: 'Aang! ___?', answer: 'Alqutaxt', options: ['Alqutaxt', 'Ukudigada', 'Amtal'], translation: 'Olá! Como vai?' },
          { sentence: '___!', answer: 'Qilachxizax̂', options: ['Qilachxizax̂', 'Aguung', 'Tutalagakuq'], translation: 'Bom dia!' },
          { sentence: '___ huzuu haqakux̂!', answer: 'Qaĝaasakung', options: ['Qaĝaasakung', 'Ukudigal', 'Amtal'], translation: 'Obrigado a todos por virem!' },
        ],
        voice: {
          bot: 'Aang! Alqutaxt?',
          botTranslation: 'Olá! Como vai?',
          expected: ['Aang, qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Cumprimente e agradeça: “Aang, qaĝaasakung!”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Aang!”), a pergunta “Alqutaxt?” e um agradecimento.',
      },
      {
        id: 'ale-u1-l2',
        title: 'Kiin asax̂tax̂t?',
        kind: 'licao',
        words: ['Kiin asax̂tax̂t?', 'asax̂takuq', 'Qaataax̂t?', 'Ukuĝaan ix̂amnakux̂', 'ting', 'txin'],
        cloze: [
          { sentence: 'Linu ___.', answer: 'asax̂takuq', options: ['asax̂takuq', 'yaxtakuq', 'awakux̂'], translation: 'Meu nome é Linu.' },
          { sentence: '___ asax̂tax̂t?', answer: 'Kiin', options: ['Kiin', 'Waya', 'Aang'], translation: 'Qual é o seu nome?' },
          { sentence: 'Ukuĝaan ___!', answer: 'ix̂amnakux̂', options: ['ix̂amnakux̂', 'asax̂takuq', 'awakux̂'], translation: 'Que bom te ver!' },
        ],
        voice: {
          bot: 'Kiin asax̂tax̂t?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Linu asax̂takuq.', 'Linu asax̂takuq', 'linu asaxtakuq'],
          hint: 'Diga “Linu asax̂takuq” (meu nome é Linu).',
        },
        communityPrompt: 'Apresente-se: “… asax̂takuq” (meu nome é …) e pergunte o nome de alguém (“Kiin asax̂tax̂t?”).',
      },
      {
        id: 'ale-u1-l3',
        title: 'Prova: Aang! Alqutaxt?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qaĝaasakung huzuu haqakux̂!',
          botTranslation: 'Obrigado a todos por virem!',
          expected: ['Qaĝaasakung!', 'Qaĝaasakung', 'qagaasakung', 'Aang'],
          hint: 'Agradeça a acolhida: “Qaĝaasakung!”.',
        },
        communityPrompt: 'Escreva uma chegada: “Aang!”, “Alqutaxt?”, “Ukuĝaan ix̂amnakux̂!”.',
      },
    ],
  },
  {
    id: 'ale-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tayaĝux̂ awakux̂',
    emoji: '🎣',
    card: {
      id: 'ale-c2',
      title: 'O russo nas ilhas: sabaakax̂, chaasxix̂, chiirkax̂',
      emoji: '⛪',
      // [WIKI] «Aleut language» (History: palavras russas em todos os dialetos, sobretudo no de Bering,
      // sem mexer no vocabulário básico; Research history: Bering, 1741; Veniaminov, 1824; Netsvetov, o
      // padre aleúte de Atka); [WIKT] s.v. “sabaakax̂” (do russo собака), “chaasxix̂” (чашка), “chasix̂”
      // (час), “chiirkax̂” (церковь), “yaavlukax̂” (яблоко), “funaarix̂” (фонарь), “Kasakax̂” (казак).
      history:
        'Os russos chegaram às ilhas Aleutas em 1741, com a expedição de Vitus Bering, e ficaram mais de cem anos, até a venda do Alasca aos Estados Unidos. O aleúte guardou muitas palavras russas do dia a dia: “sabaakax̂” (cachorro) vem de “sobaka”, “chaasxix̂” (xícara) de “tchachka”, “chasix̂” (hora) de “tchas”, “yaavlukax̂” (maçã) de “iábloko” e “chiirkax̂” (igreja) de “tsérkov”. Até um russo é “Kasakax̂”, de “cossaco”. Mas as palavras do básico — homem, mulher, sol, água — continuam aleútes. E foi a igreja ortodoxa que guardou a escrita: um padre aleúte de Atka, Iakov Netsvetov, escreveu um dicionário do aleúte de Atka.',
      culture_tip:
        'Antes de comer, deseja-se “Qaatunaxt!”, bom apetite. A comida das ilhas vem do mar: “adgayux” (salmão), “chagix̂” (linguado) e “ptxitax” (bacalhau).',
      grammar_why:
        'Para dizer de quem é uma coisa, o aleúte marca as duas palavras: o dono vai antes, com o final -m, e a coisa vai depois, com o final -a. “Tayaĝux̂” é o homem e “adax̂”, o pai; “tayaĝum adaa” é o pai do homem. Sem o dono, fica só “adaa”: o pai dele.',
      grammar_examples: [
        ['Tayaĝum adaa.', 'O pai do homem.'],
        ['Tayaĝum ulaa.', 'A casa do homem.'],
        ['Ulaa.', 'A casa dele.'],
      ],
      character_guide: [
        ['-m', 'o dono (vem antes)', 'tayaĝum (do homem)'],
        ['-a', 'a coisa que tem dono (vem depois)', 'adaa (o pai dele), ulaa (a casa dele)'],
        ['-x̂', 'o final de uma coisa só, sem dono', 'tayaĝux̂ (homem), adax̂ (pai)'],
      ],
    },
    lessons: [
      {
        id: 'ale-u2-l1',
        title: 'Tayaĝux̂, ayagax̂, adax̂',
        kind: 'licao',
        words: ['tayaĝux̂', 'ayagax̂', 'adax̂', 'anax̂', 'kukax̂', 'awakux̂'],
        cloze: [
          { sentence: 'Tayaĝux̂ ___.', answer: 'awakux̂', options: ['awakux̂', 'asax̂takuq', 'adax̂'], translation: 'O homem está trabalhando.' },
          { sentence: 'Tayaĝum ___.', answer: 'adaa', options: ['adaa', 'adax̂', 'ayagax̂'], translation: 'O pai do homem.' },
          { sentence: 'Piitrax̂ tayaĝux̂ ___.', answer: 'kidukux̂', options: ['kidukux̂', 'qaĝaasakung', 'kiin'], translation: 'O Pedro está ajudando o homem.' },
        ],
        voice: {
          bot: 'Kiin?',
          botTranslation: 'Quem?',
          expected: ['Tayaĝux̂.', 'Tayaĝux̂', 'tayagux', 'Ayagax̂', 'Adax̂', 'Anax̂'],
          hint: 'Responda quem é: “Tayaĝux̂” (o homem), “Ayagax̂” (a mulher)…',
        },
        communityPrompt: 'Escreva os nomes da família em aleúte: “adax̂” (pai), “anax̂” (mãe), “kukax̂” (avó)…',
      },
      {
        id: 'ale-u2-l2',
        title: 'Adgayux, chagix̂, ptxitax',
        kind: 'licao',
        words: ['adgayux', 'chagix̂', 'ptxitax', 'alax̂', 'qalgadax̂', 'Qaatunaxt'],
        cloze: [
          { sentence: '___!', answer: 'Qaatunaxt', options: ['Qaatunaxt', 'Aguung', 'Tutalagakuq'], translation: 'Bom apetite!' },
          { sentence: 'Adgayux, ___, ptxitax.', answer: 'chagix̂', options: ['chagix̂', 'sabaakax̂', 'chiirkax̂'], translation: 'Salmão, linguado, bacalhau.' },
          { sentence: 'Qanaang uma ___?', answer: 'ii', options: ['ii', 'kiin', 'waya'], translation: 'Quanto custa isto?' },
        ],
        voice: {
          bot: 'Qanaang uma ii?',
          botTranslation: 'Quanto custa isto?',
          expected: ['Chaang.', 'Chaang', 'chaang', 'Hatix̂', 'Alax', 'Qankus', 'Ataqan'],
          hint: 'Responda com um número: “Chaang” (cinco), “Hatix̂” (dez)…',
        },
        communityPrompt: 'Escreva os peixes das ilhas que você aprendeu e deseje “Qaatunaxt!”.',
      },
      {
        id: 'ale-u2-l3',
        title: 'Prova: Tayaĝux̂ awakux̂',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Unangam tunuu aadazaxt ii?',
          botTranslation: 'Você fala aleúte?',
          expected: ['Aang!', 'Aang', 'aang', 'Tutalagakuq'],
          hint: 'Diga que sim: “Aang!”.',
        },
        communityPrompt: 'Conte de um a cinco em aleúte: “ataqan, alax, qankus, siching, chaang”.',
      },
    ],
  },
];
