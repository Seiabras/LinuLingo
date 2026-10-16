import type { StorySeed } from '../types';

/**
 * Histórias interativas do apache ocidental, uma por subnível, do A1.1 ao A2.2. As do A1 são
 * ambientadas em dois lugares reais: San Carlos, Arizona, uma das comunidades da Reserva Apache de
 * San Carlos, segundo en.wikipedia.org/wiki/San_Carlos_Apache_Indian_Reservation; e a região
 * das Montanhas Brancas (White Mountain), no Arizona, onde o povo apache ocidental se autodesigna
 * “Dził Łigai Si'án N'dee” (“povo das Montanhas Brancas”), segundo o Wiktionary em inglês. O jogador
 * escolhe as próprias respostas em cada cena; nenhum personagem decide por ele quem ele é.
 */
export const STORIES_APW: StorySeed[] = [
  {
    id: 'apw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dagotʼee! Chegando a San Carlos',
    emoji: '👋',
    summary: 'Você chega a San Carlos, no Arizona, e troca o primeiro cumprimento com uma moradora apache ocidental.',
    cultural_context:
      'San Carlos é uma das comunidades da Reserva Apache de San Carlos, no Arizona, criada em 1872 e hoje lar de mais de quinze mil pessoas inscritas na Tribo Apache de San Carlos, segundo a Wikipédia em inglês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dagotʼee!',
        translation: 'Oi!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dagotʼee!', translation: 'Oi!', next: 'resposta' },
          { text: 'Áho!', translation: 'Obrigado!', wrong: 'Ela está te cumprimentando agora, não espera um agradecimento ainda — responda com “Dagotʼee!”.' },
        ],
      },
      resposta: {
        text: 'Ndee. Isdzán.',
        translation: 'Uma pessoa. Uma mulher.',
        emoji: '👩',
        choices: [
          { text: 'Áho!', translation: 'Obrigado!', next: 'final_bom' },
          { text: 'Dagotʼee!', translation: 'Oi!', wrong: 'Vocês já se cumprimentaram — agora é hora de agradecer com “Áho!”.' },
        ],
      },
      final_bom: {
        text: 'Gozhǫǫ doleeł!',
        translation: 'Que venham paz e bondade! (uma despedida de boa vontade)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um bom encontro em San Carlos!',
          message: 'Você trocou o primeiro cumprimento em apache ocidental com uma moradora de San Carlos, no Arizona, na Reserva Apache de San Carlos.',
        },
      },
    },
    glossary: [
      ['dagotʼee', 'oi, olá'],
      ['áho', 'obrigado(a)'],
      ['gozhǫǫ doleeł', 'que venham paz e bondade (despedida de boa vontade)'],
    ],
  },
  {
    id: 'apw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Contando bichos nas Montanhas Brancas',
    emoji: '🏔️',
    summary: 'Perto da região das Montanhas Brancas, você conta até quatro e nomeia um coelho e um cavalo em apache ocidental.',
    cultural_context:
      'A região das Montanhas Brancas (White Mountain), no leste do Arizona, é o território do apache ocidental de White Mountain, que se autodesigna “Dził Łigai Si\'án N\'dee” — literalmente “povo das Montanhas Brancas”, com a própria palavra “dził” (montanha) dentro do nome, segundo o Wiktionary em inglês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dagotʼee! Shash.',
        translation: 'Oi! Um urso.',
        emoji: '🐻',
        choices: [
          { text: 'Dagotʼee!', translation: 'Oi!', next: 'conta' },
          { text: 'Áho!', translation: 'Obrigado!', wrong: 'Primeiro devolva o cumprimento com “Dagotʼee!” — o agradecimento vem depois.' },
        ],
      },
      conta: {
        text: 'Dałaá, nakih, táági…',
        translation: 'Um, dois, três…',
        emoji: '🔢',
        choices: [
          { text: "Dį́į́'i.", translation: 'Quatro.', next: 'bichos' },
          { text: 'Dałaá.', translation: 'Um.', wrong: 'Isso não continua a contagem — depois de “táági” (três) vem “dį́į́\'i” (quatro).' },
        ],
      },
      bichos: {
        text: "Dį́į́'i! Gah, łį́į́ʼ.",
        translation: 'Quatro! Coelho, cavalo.',
        emoji: '🐴',
        choices: [
          { text: 'Áho!', translation: 'Obrigado!', next: 'final_bom' },
          { text: 'Nakih.', translation: 'Dois.', wrong: 'A contagem já terminou — agradeça com “Áho!”.' },
        ],
      },
      final_bom: {
        text: 'Áho!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Bichos e números nas Montanhas Brancas!',
          message: 'Você contou até quatro em apache ocidental e nomeou um coelho e um cavalo perto da região das Montanhas Brancas, no Arizona — terra do povo que se autodesigna “Dził Łigai Si\'án N\'dee”.',
        },
      },
    },
    glossary: [
      ["dałaá, nakih, táági, dį́į́'i", 'um, dois, três, quatro'],
      ['gah', 'coelho'],
      ['łį́į́ʼ', 'cavalo'],
    ],
  },
  // ══ A2.1 e A2.2 (16/10/2026) ══
  // Todas as falas em apache são frases de Willem J. de Reuse, com Phillip Goode, “A Practical Grammar
  // of the San Carlos Apache Language” (2006), com a página impressa ao lado (DR06). Nenhuma foi
  // montada: as cenas só juntam frases que o livro já traz, às vezes em outra ordem.
  {
    id: 'apw-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hayú naṉāā? A estrada para Globe',
    emoji: '🛣️',
    summary: 'Uma vizinha de San Carlos quer saber para onde você foi, em que foi e como estava a estrada.',
    // DR06 p. 72 (Bésh baa gowąh, Globe, cidade do cobre: “casa a respeito do metal”)
    cultural_context:
      'Globe é uma cidade vizinha da Reserva Apache de San Carlos. Em apache ela se chama “Bésh baa gowąh”, a “casa a respeito do metal”, porque ficou importante com as minas de cobre, segundo De Reuse.',
    start: 'inicio',
    nodes: {
      inicio: {
        // DR06 p. 74, Conversa 1 (1a)
        text: 'Hayú naṉāā?',
        translation: 'Para onde você foi?',
        emoji: '🙋‍♀️',
        choices: [
          // DR06 p. 74, Conversa 1 (2b)
          { text: 'Bésh baa gowąhyú nashāā.', translation: 'Fui para Globe.', next: 'carro' },
          // DR06 p. 66 (5b)
          { text: "Sengaadí' nashāā.", translation: 'Eu sou de San Carlos.', wrong: 'Ela perguntou para onde você foi (“hayú”), não de onde você é (“hadí\'”). Responda com o lugar e “-yú”.' },
        ],
      },
      carro: {
        // DR06 p. 74, Conversa 1 (3a)
        text: "Hant'é bee naṉāā?",
        translation: 'Você foi em quê?',
        emoji: '🚗',
        choices: [
          // DR06 p. 74, Conversa 1 (4b)
          { text: 'Shinabil bee nashāā.', translation: 'Fui no meu carro.', next: 'estrada' },
          // DR06 p. 75, Conversa 3 (4b)
          { text: "Ha'oh, k'ad.", translation: 'Sim, daqui a pouco.', wrong: 'Ela quer saber em que você foi. Responda com “shinabil” (meu carro).' },
        ],
      },
      estrada: {
        // DR06 p. 63, Conversa 3 (3a)
        text: "Ya' intinhí goshtł'ish?",
        translation: 'A estrada está com lama?',
        emoji: '🛣️',
        choices: [
          // DR06 p. 63, Conversa 3 (4b)
          { text: "Dah, doo hak'eh goshtł'ish da.", translation: 'Não, não tem lama nenhuma.', next: 'final_seca' },
          // DR06 p. 63, Conversa 3 (4b, última resposta possível)
          { text: "Ha'oh, goshtł'ish łą̄ą̄.", translation: 'Sim, está cheia de lama.', next: 'final_lama' },
        ],
      },
      final_seca: {
        // DR06 p. 96 (58a)
        text: "Nłt'ēē.",
        translation: 'É bom.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Viagem tranquila!',
          message: 'Você contou para onde foi, em que foi e como estava a estrada, com os verbos de ir e vir do apache de San Carlos.',
        },
      },
      final_lama: {
        // DR06 p. 91 (24)
        text: "Doo níni' łą̄ą̄ da.",
        translation: 'Não se preocupe.',
        emoji: '🤝',
        ending: {
          tone: 'bom',
          title: 'Lama, mas tudo bem!',
          message: 'A estrada estava cheia de lama, mas a vizinha te tranquilizou. Você contou a viagem toda em apache.',
        },
      },
    },
    glossary: [
      ['hayú', 'para onde?'],
      ['nashāā / naṉāā', 'eu andei, fui / você andou, foi (por aí)'],
      ['Bésh baa gowąh', 'Globe (“casa a respeito do metal”)'],
      ['nabil', 'carro'],
      ['intin', 'estrada, caminho'],
    ],
  },
  {
    id: 'apw-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Shitaa át\'į̄į̄: a família na escola',
    emoji: '👨‍👩‍👧',
    summary: 'Numa aula de apache, a professora pergunta de onde vocês são, quem veio buscar você e como está o tempo.',
    // DR06 p. 75 (Conversa 4: uma professora apache e as crianças); p. 183 (peso do parentesco)
    cultural_context:
      'A cena segue uma conversa do livro de De Reuse entre uma professora apache e um grupo de crianças. Saber falar dos parentes é parte importante da cultura apache, e por isso aparece cedo nas aulas.',
    start: 'inicio',
    nodes: {
      inicio: {
        // DR06 p. 75, Conversa 4 (1a)
        text: "Dagot'ēē, shichaghą́shé? Hadí' nałkaihi?",
        translation: 'Como vão, minhas crianças? De onde vocês são?',
        emoji: '👩‍🏫',
        choices: [
          // DR06 p. 75, Conversa 4 (2b)
          { text: "Ńzaaddí' nahikaihi ádant'ēē.", translation: 'Nós somos de longe.', next: 'casa' },
          { text: 'Dah.', translation: 'Não.', wrong: 'Ela perguntou de onde vocês são, não é pergunta de sim ou não. Responda pelo grupo, com “nahikaihi” (nós, três ou mais).' },
        ],
      },
      casa: {
        // DR06 p. 94 (53a)
        text: 'Hayú nigowąh?',
        translation: 'Onde é a sua casa?',
        emoji: '🏡',
        choices: [
          // DR06 p. 94 (53b)
          { text: 'Sengaayú shigowąh.', translation: 'Minha casa é em San Carlos.', next: 'foto' },
          // DR06 p. 92 (32)
          { text: 'Dīī doo shigowąh da.', translation: 'Esta não é a minha casa.', wrong: 'Ela quer saber onde fica a sua casa. Diga o lugar com “-yú” e “shigowąh” (minha casa).' },
        ],
      },
      foto: {
        // DR06 p. 90 (8a). “át'į̄į̄” é para alguém que o ouvinte já conhece mas não reconheceu (p. 90);
        // para mostrar parentes num álbum de fotos o livro usa “át'ēē”. Por isso a cena é a saída da aula,
        // com o pai que a professora já viu, e não uma foto.
        text: "Dīī hadín át'į̄į̄?",
        translation: 'Quem é este? (um homem chega para buscar você; a professora já o viu, mas não o reconhece)',
        emoji: '🚪',
        choices: [
          // DR06 p. 92 (28b)
          { text: "Shitaa át'į̄į̄.", translation: 'É meu pai.', next: 'tempo' },
          // DR06 p. 89 (5)
          { text: "Dīī shidizhé ádat'ēē.", translation: 'Estes são meus irmãos mais novos.', wrong: 'Chegou um homem só, e “ádat\'ēē” é para várias pessoas. Diga quem é: “Shitaa át\'į̄į̄.”' },
        ],
      },
      tempo: {
        // DR06 p. 223 (T1)
        text: "Dadányú dagot'ēē?",
        translation: 'Como está lá fora?',
        emoji: '🌤️',
        choices: [
          // DR06 p. 223 (T2)
          { text: "Dadányú gonłt'ēē.", translation: 'Está bonito lá fora.', next: 'final_sol' },
          { text: "Gosk'az.", translation: 'Faz frio.', next: 'final_frio' },
        ],
      },
      final_sol: {
        // DR06 p. 96 (58a)
        text: "Nłt'ēē.",
        translation: 'É bom.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Boa aula!',
          message: 'Você disse de onde é, disse quem é seu pai e falou do tempo, tudo com frases do apache de San Carlos.',
        },
      },
      final_frio: {
        // DR06 p. 96 (58c)
        text: "Nłt'ēē doleeł.",
        translation: 'Vai ser bom.',
        emoji: '🧣',
        ending: {
          tone: 'bom',
          title: 'Frio lá fora, aula quente!',
          message: 'Faz frio, mas a professora diz que vai ser bom. Você falou da família e do tempo em apache.',
        },
      },
    },
    glossary: [
      ['chaghą́shé', 'crianças'],
      ['shigowąh', 'minha casa, meu lar'],
      ["shitaa át'į̄į̄", 'é meu pai'],
      ["gonłt'ēē", 'está bonito (o tempo)'],
      ["gosk'az", 'faz frio'],
    ],
  },
];
