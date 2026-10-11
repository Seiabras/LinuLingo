import type { StorySeed } from '../types';

/** Histórias interativas do ladino das Dolomitas (badiot) — por enquanto uma por nível, do A1.1 ao A2.2 (pacote incompleto). */
export const STORIES_LLD: StorySeed[] = [
  {
    id: 'lld-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bun de, Ana!',
    emoji: '👋',
    summary: 'Você conhece Ana na parada de ônibus de um vilarejo do vale de Badia e faz a sua primeira conversa em ladino.',
    cultural_context: 'No vale de Badia, no Tirol do Sul, quase toda a população fala ladino em casa, e a escola ensina ladino, alemão e italiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bun de! Iö á inom Ana. Co vára pa?',
        translation: 'Bom dia! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bëgn, dilan! Y tö?', translation: 'Bem, obrigado! E você?', next: 'bain' },
          { text: 'A s\'odëi!', translation: 'Até logo!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bain: {
        text: 'Ince bëgn, dilan! Da olá este pa?',
        translation: 'Também bem, obrigada! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Iö sun da São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bun' },
          { text: 'Iö bëri ega.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Iö sun da…”.' },
        ],
      },
      final_bun: {
        text: 'Ci bel! Nos baiun badiot chiló. Bëgnodüs!',
        translation: 'Que legal! Aqui nós falamos badiot. Bem-vindos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'N bun scomenciamënt!', message: 'Ana sorri: você fez a sua primeira conversa em ladino.' },
      },
    },
    glossary: [
      ['bun de', 'bom dia'],
      ['co vára pa?', 'como vai?'],
      ['iö sun da', 'eu sou de'],
      ['bëgnodüs', 'bem-vindos'],
    ],
  },
  {
    id: 'lld-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Aste pa fredesc?',
    emoji: '👪',
    summary: 'Tone, um amigo do vale de Badia, pergunta pela sua família e convida você para comer com a família dele no domingo.',
    cultural_context: 'Em badiot, “da nos” quer dizer “na nossa casa”, como o italiano “da noi”; e “ion” (com prazer) é um jeito simpático de aceitar um convite.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciao! Aste pa fredesc y sorus?',
        translation: 'Oi! Você tem irmãos e irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sce, iö á n fre y na so.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frars' },
          { text: 'Mia ciasa é picera.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use “iö á…”.' },
        ],
      },
      frars: {
        text: 'Ci bel! Oste mangé da nos en domënia?',
        translation: 'Que legal! Quer comer na nossa casa no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Sce, ion! Dilan!', translation: 'Sim, com prazer! Obrigado!', next: 'final_bun' },
          { text: 'Iö sun da São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tone fez um convite: responda com “sce, ion!” ou “no, dilan”.' },
        ],
      },
      final_bun: {
        text: 'Bun! Mia uma fej pan y ciajó.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'N invit!', message: 'Você foi convidado para comer com a família de Tone no domingo.' },
      },
    },
    glossary: [
      ['fre / so', 'irmão / irmã'],
      ['fredesc / sorus', 'irmãos / irmãs'],
      ['ion', 'com prazer'],
      ['da nos', 'na nossa casa'],
    ],
  },
  // ── A2.1 e A2.2 (10/10/2026) ──
  // Fontes: frases do dicionário on-line do Istitut Ladin Micurá de Rü (itavalbadia.ladinternet.it,
  // 10/10/2026): “Incö él veramënter frëit”, “Vistete, al é frëit!”, “Al nëi”, “Al é massa cer!”,
  // “Incö mëssi jí dal dotur”, “I á me de vënter”, “I sun massa stanch”, “Tan de borjú aste pa?”,
  // “T'as debojëgn da palsé”, “I arati che te variaras tosc”, “Stáme bëgn!”, “Incö me vára bele
  // damí!”. Corvara e a Alta Badia: Wikipédia em inglês (“Alta Badia”); o ladino nas repartições:
  // Wikipédia em inglês (“Ladin language”), consultadas em 10/10/2026.
  // Frases montadas pelas regras dos tópicos de gramática: “Sce, y al nëi!”; “Oste cumpré n
  // ciapel?” (como “Oste mangé da nos en domënia?”); “Bun de! Ci oste pa?”; “I oress n ciapel,
  // prëibel.”; “Chësc ciapel é bel. Al costa cincanta euro.”; “Chësc ciapel é plü bunmarcé: trënta
  // euro.” (plü + adjetivo); “Dilan, i cumpri chësc ciapel.” (iö cumpri, da tabela de cumpré);
  // “Olá vaste pa?” (a frase do dicionário “olá vaste pa chësc isté?” sem o complemento);
  // “I n'á nia borjú.” (ne… nia com avëi, como “i n'á degügn scioldi”); “I á borjú.” (avëi borjú);
  // “N ciapel nü!” (nü, novo, depois do nome, como em “n partí nü”); “Dilan y a s'odëi!” (as duas
  // despedidas do A1 unidas com “y”).
  {
    id: 'lld-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'N ciapel por l\'invern',
    emoji: '🛍️',
    summary: 'Num dia de neve em Corvara, a sua amiga Ana convida você para comprar um chapéu, e você pergunta o preço na loja.',
    cultural_context: 'Corvara, no alto vale de Badia, é o centro da estação de esqui Alta Badia, e a maioria dos moradores tem o ladino como língua materna.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bun de! Incö él veramënter frëit!',
        translation: 'Bom dia! Hoje está frio de verdade!',
        emoji: '🥶',
        choices: [
          { text: 'Sce, y al nëi!', translation: 'Sim, e está nevando!', next: 'ciapel' },
          { text: 'I á me de vënter.', translation: 'Estou com dor de barriga.', wrong: 'Ana está falando do tempo. Responda sobre o frio ou a neve.' },
        ],
      },
      ciapel: {
        text: 'Vistete, al é frëit! Oste cumpré n ciapel?',
        translation: 'Agasalhe-se, está frio! Quer comprar um chapéu?',
        emoji: '❄️',
        choices: [
          { text: 'Sce, ion!', translation: 'Sim, com prazer!', next: 'botega' },
          { text: 'Le lat é blanch.', translation: 'O leite é branco.', wrong: 'Ana fez um convite: responda “sce, ion!” ou “no, dilan”.' },
        ],
      },
      botega: {
        text: 'Bun de! Ci oste pa?',
        translation: 'Bom dia! O que você deseja?',
        emoji: '🏪',
        choices: [
          { text: 'I oress n ciapel, prëibel.', translation: 'Eu queria um chapéu, por favor.', next: 'prisc' },
          { text: 'Ci tëmp él pa incö?', translation: 'Que tempo faz hoje?', wrong: 'Na loja, o vendedor quer saber o que você deseja. Use “I oress…”.' },
        ],
      },
      prisc: {
        text: 'Chësc ciapel é bel. Al costa cincanta euro.',
        translation: 'Este chapéu é bonito. Custa cinquenta euros.',
        emoji: '🏷️',
        choices: [
          { text: 'Al é massa cer!', translation: 'É caro demais!', next: 'bunmarce' },
          { text: 'Dilan, i cumpri chësc ciapel.', translation: 'Obrigado, eu compro este chapéu.', next: 'final_bun' },
        ],
      },
      bunmarce: {
        text: 'Chësc ciapel é plü bunmarcé: trënta euro.',
        translation: 'Este chapéu é mais barato: trinta euros.',
        emoji: '👒',
        choices: [
          { text: 'Dilan, i cumpri chësc ciapel.', translation: 'Obrigado, eu compro este chapéu.', next: 'final_bun' },
          { text: 'I sun n cogo.', translation: 'Eu sou cozinheiro.', wrong: 'O vendedor mostrou outro chapéu. Diga se você compra ou não.' },
        ],
      },
      final_bun: {
        text: 'Dilan y a s\'odëi!',
        translation: 'Obrigado e até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'N ciapel nü!', message: 'Você comprou um chapéu quente para o frio das Dolomitas.' },
      },
    },
    glossary: [
      ['vistete!', 'agasalhe-se! (lit. “vista-se!”)'],
      ['i oress', 'eu queria'],
      ['massa cer', 'caro demais'],
      ['plü bunmarcé', 'mais barato'],
    ],
  },
  {
    id: 'lld-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Incö mëssi jí dal dotur',
    emoji: '🩺',
    summary: 'Você acorda doente, encontra o seu amigo Tone no caminho e vai ao médico explicar o que dói.',
    cultural_context: 'No Tirol do Sul, o ladino é língua oficial: é ensinado nas escolas e usado nas repartições públicas, por escrito e oralmente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciao! Olá vaste pa?',
        translation: 'Oi! Aonde você vai?',
        emoji: '👋',
        choices: [
          { text: 'Incö mëssi jí dal dotur.', translation: 'Hoje preciso ir ao médico.', next: 'dotur' },
          { text: 'Iö sun da São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tone perguntou aonde você vai. Use “mëssi jí…”.' },
        ],
      },
      dotur: {
        text: 'Bun de! Co vára pa?',
        translation: 'Bom dia! Como vai?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'I á me de vënter y i sun massa stanch.', translation: 'Estou com dor de barriga e cansado demais.', next: 'borju' },
          { text: 'I oress n ciapel, prëibel.', translation: 'Eu queria um chapéu, por favor.', wrong: 'Você está no médico, não numa loja. Diga o que dói com “I á me de…”.' },
        ],
      },
      borju: {
        text: 'Tan de borjú aste pa?',
        translation: 'Quanta febre você tem?',
        emoji: '🌡️',
        choices: [
          { text: 'I n\'á nia borjú.', translation: 'Não tenho febre.', next: 'palse' },
          { text: 'I á borjú.', translation: 'Estou com febre.', next: 'palse' },
        ],
      },
      palse: {
        text: 'T\'as debojëgn da palsé. I arati che te variaras tosc.',
        translation: 'Você precisa descansar. Acho que você vai sarar logo.',
        emoji: '🛌',
        choices: [
          { text: 'Dilan!', translation: 'Obrigado!', next: 'final_bun' },
          { text: 'Al dá sorëdl.', translation: 'Faz sol.', wrong: 'O médico deu um conselho: agradeça com “Dilan!”.' },
        ],
      },
      final_bun: {
        text: 'Stáme bëgn!',
        translation: 'Fique bem!',
        emoji: '💚',
        ending: { tone: 'bom', title: 'Incö me vára bele damí!', message: 'Dois dias depois, você já está melhor: explicou o que doía e seguiu o conselho do médico.' },
      },
    },
    glossary: [
      ['i á me de…', 'estou com dor de…'],
      ['borjú', 'febre'],
      ['palsé', 'descansar'],
      ['mëssi', 'eu preciso'],
    ],
  },
];
