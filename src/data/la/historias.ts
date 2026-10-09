import type { StorySeed } from '../types';

/** Histórias interativas do latim clássico — A1.1 ao A2.2, pacote incompleto (ver `incomplete` em index.ts). */
export const STORIES_LA: StorySeed[] = [
  {
    id: 'la-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salve no Foro Romano',
    emoji: '👋',
    summary: 'Você conhece Marcus no Foro Romano e faz a sua primeira conversa em latim.',
    cultural_context: 'O Foro Romano era o centro da vida pública em Roma: ali ficavam os templos, os tribunais e a praça onde os romanos se encontravam para conversar, fazer negócios e ouvir discursos políticos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salve! Nomen mihi est Marcus. Quomodo vales?',
        translation: 'Oi! Meu nome é Marcus. Como você está?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Bene valeo, gratias! Et tu?', translation: 'Estou bem, obrigado! E você?', next: 'bene' },
          { text: 'Vale!', translation: 'Tchau!', wrong: 'Marcus acabou de te cumprimentar — despedir-se agora seria estranho. Responda à pergunta primeiro.' },
        ],
      },
      bene: {
        text: 'Bene quoque! Et tu, quod nomen tibi est?',
        translation: 'Bem também! E você, qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Nomen mihi est Iulia.', translation: 'Meu nome é Júlia.', next: 'final_bo' },
          { text: 'Vinum amo.', translation: 'Eu amo vinho.', wrong: 'Isso não responde qual é o seu nome. Tente “Nomen mihi est…”.' },
        ],
      },
      final_bo: {
        text: 'Gaudeo te cognoscere, Iulia!',
        translation: 'Tenho prazer em te conhecer, Júlia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Marcus sorri: você fez a sua primeira conversa em latim, no meio do Foro Romano.' },
      },
    },
    glossary: [
      ['salve', 'oi'],
      ['nomen mihi est', 'meu nome é'],
      ['gratias tibi ago', 'obrigado'],
    ],
  },
  {
    id: 'la-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Em casa com a família',
    emoji: '🏠',
    summary: 'Você visita a domus da sua nova amiga romana Flavia e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'A domus romana das famílias mais abastadas se organizava em torno de um átrio central, aberto para o céu, com um pequeno altar dedicado aos deuses da casa (os lares).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salve! Habesne fratres aut sorores?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📜',
        choices: [
          { text: 'Ita, unum fratrem et unam sororem habeo.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Domus mea magna est.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “habeo” ou “non habeo”.' },
        ],
      },
      fam: {
        text: 'Optime! Et quomodo est domus tua?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Domus mea parva sed pulchra est.', translation: 'Minha casa é pequena mas bonita.', next: 'final_bo' },
          { text: 'Viginti dies habeo.', translation: 'Tenho vinte dias.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “domus mea…”.' },
        ],
      },
      final_bo: {
        text: 'Mirum! Aliquando nos visita.',
        translation: 'Que maravilha! Um dia nos visite.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Flavia adorou saber da sua família e da sua casa — e já te convidou para visitá-la!' },
      },
    },
    glossary: [
      ['frater / soror', 'irmão / irmã'],
      ['domus mea', 'minha casa'],
      ['habeo', 'eu tenho'],
    ],
  },
  {
    id: 'la-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Frigus in foro (frio na praça do mercado)',
    emoji: '🥶',
    summary: 'No forum de Pompeios, você encontra o mercador Lucius num dia frio e conversa sobre o tempo e as compras de roupa.',
    cultural_context: 'O forum de Pompeios, preservado pela erupção do Vesúvio em 79 d.C., ainda mostra hoje as lojas (tabernae) onde os romanos compravam roupa, comida e outros bens do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salve! Frigus magnum hodie est, nonne?',
        translation: 'Oi! Está muito frio hoje, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Ita, et ventus validus est.', translation: 'Sim, e o vento está forte.', next: 'vestis' },
          { text: 'Coquus bonus sum.', translation: 'Eu sou um bom cozinheiro.', wrong: 'Isso não responde sobre o frio. Fale do tempo: "frigus/calor magnum est" ou "ventus validus est".' },
        ],
      },
      vestis: {
        text: 'Ergo pallium novum eme!',
        translation: 'Então compre um manto novo!',
        emoji: '🧥',
        choices: [
          { text: 'Bona idea! Et calceos novos quoque emam.', translation: 'Boa ideia! E também vou comprar sapatos novos.', next: 'final_bo' },
          { text: 'Familia mea magna est.', translation: 'Minha família é grande.', wrong: 'Isso não tem relação com a roupa. Fale sobre o que você vai comprar.' },
        ],
      },
      final_bo: {
        text: 'Optime! Hic taberna bona est.',
        translation: 'Ótimo! Esta loja aqui é boa.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Compras feitas!', message: 'Lucius te mostrou a melhor loja do forum — e agora você está preparado para o frio!' },
      },
    },
    glossary: [
      ['frigus magnum est', 'está muito frio'],
      ['pallium', 'manto/casaco'],
      ['emere', 'comprar'],
    ],
  },
  {
    id: 'la-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Puer in urbe (quando eu era menino, na cidade)',
    emoji: '🏛️',
    summary: 'Sua amiga romana Flavia conta como era a sua vida de menina em Roma, e você conta a sua.',
    cultural_context: 'Crianças romanas de famílias com recursos iam à schola para aprender a ler e a contar; as mais pobres, sobretudo nas áreas rurais, raramente tinham essa oportunidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Puella in urbe Roma habitabam. Et tu, ubi habitabas?',
        translation: 'Quando eu era menina, morava na cidade de Roma. E você, onde você morava?',
        emoji: '🏛️',
        choices: [
          { text: 'Puer in magna urbe habitabam.', translation: 'Quando eu era menino, morava numa cidade grande.', next: 'labor' },
          { text: 'Caput mihi dolet.', translation: 'Minha cabeça está doendo.', wrong: 'Isso não responde onde você morava quando era criança. Use "habitabam" com o imperfeito.' },
        ],
      },
      labor: {
        text: 'Et ubi pater tuus laborabat?',
        translation: 'E onde seu pai trabalhava?',
        emoji: '👪',
        choices: [
          { text: 'Pater meus in foro mercator erat.', translation: 'Meu pai era mercador no forum.', next: 'final_bo' },
          { text: 'Cras calceos emam.', translation: 'Amanhã comprarei sapatos.', wrong: 'Isso não responde sobre o trabalho do seu pai. Use o imperfeito: "laborabat" ou "erat".' },
        ],
      },
      final_bo: {
        text: 'Mirum! Infantiae nostrae diversae fuerunt.',
        translation: 'Que interessante! Nossas infâncias foram diferentes.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lembranças compartilhadas!', message: 'Flavia e você compartilharam lembranças de infância — uma boa conversa no imperfeito!' },
      },
    },
    glossary: [
      ['habitabam', 'eu morava'],
      ['laborabat', 'ele/ela trabalhava'],
      ['puer / puella', 'menino / menina'],
    ],
  },
];
