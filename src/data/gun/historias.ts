import type { StorySeed } from '../types';

/**
 * Histórias interativas do guarani mbyá, uma por subnível, do A1.1 ao B1.4.
 *
 * A2 (17/10/2026): nas histórias gun-h3 e gun-h4, toda fala em mbyá é um exemplo do léxico de Robert A.
 * Dooley («Léxico Guarani, dialeto Mbyá», SIL, versão de 2006), do jeito que está lá, com a página no
 * comentário; as que têm ẽ, ĩ ou ỹ foram lidas na imagem da página. Nenhuma fala foi montada: o que é
 * nosso é só a ordem das falas. As personagens são fictícias e sem nome.
 *
 * A1 (antes): Ambientadas em tekoa (aldeias) mbyá reais, confirmadas em fontes específicas do mbyá
 * (ver cabeçalho de vocabulario.ts): Piraí, em Santa Catarina, é a aldeia onde Darci da Silva —
 * Karai Nhe'ery escreveu o TCC «Nhemongarai: Rituais de Batismo Mbya Guarani» (UFSC, 2020); Tekoa
 * Pindó Mirim, na Terra Indígena de Itapuã (Viamão, RS), é citada em reportagens da prefeitura de
 * Viamão sobre visitas públicas feitas pela própria comunidade. As personagens são fictícias — não
 * usam o nome de nenhuma pessoa real citada nas fontes — e falam só o que já foi confirmado: não há
 * pergunta construída por semelhança com o guarani paraguaio, e nenhuma personagem diz ao jogador
 * quem ele é — o jogador escolhe sempre a própria fala.
 */
export const STORIES_GUN: StorySeed[] = [
  {
    id: 'gun-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete, tekoa Piraí!',
    emoji: '👋',
    summary: 'Uma anciã (xaryi) te recebe na tekoa Piraí, em Santa Catarina, e você troca as primeiras palavras em nhandeayvu.',
    cultural_context:
      'A tekoa (aldeia) Piraí, no norte de Santa Catarina, é uma comunidade mbyá real: foi lá que o professor indígena Darci da Silva — Karai Nhe\'ery escreveu, em guarani mbyá e português, o TCC sobre o ritual do nhemongarai que serviu de fonte para esta lição.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete!',
        translation: 'Bem-vindo(a)! (de mãos erguidas)',
        emoji: '🙌',
        choices: [
          { text: 'Aguyjevete!', translation: 'Bem-vinda! (devolvendo a saudação)', next: 'apresentacao' },
          { text: 'Ha\'evete.', translation: 'Obrigado(a).', wrong: 'Ela ainda não fez nada para você agradecer: ela só te deu as boas-vindas. Devolva a saudação com “Aguyjevete!”.' },
        ],
      },
      apresentacao: {
        text: 'Xee xaryi.',
        translation: 'Eu sou a anciã (avó).',
        emoji: '👵',
        choices: [
          { text: 'Xee kunha.', translation: 'Eu sou mulher.', next: 'tekoa' },
          { text: 'Kova\'e kure.', translation: 'Isto é um porco.', wrong: 'Isso não tem nada a ver com se apresentar. Diga quem você é começando com “Xee…”.' },
        ],
      },
      tekoa: {
        text: 'Kova\'e tekoa Piraí.',
        translation: 'Esta é a aldeia Piraí.',
        emoji: '🏘️',
        choices: [
          // revisão (17/10/2026): «tekoa porã» é nome + adjetivo, uma exclamação (Dooley 2006, p. 148: «ayvu porã palavra
          // boa»); «a aldeia é bonita» seria «tekoa iporã» (g6)
          { text: 'Tekoa porã!', translation: 'Que aldeia bonita!', next: 'final' },
          { text: 'Kova\'e jagua.', translation: 'Isto é um cachorro.', wrong: 'Ela está te mostrando a aldeia, não um cachorro. Descreva a tekoa com “tekoa porã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Ha\'e nhandereko.',
        translation: 'Obrigada! Esse é o nosso jeito de viver.',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Aguyjevete!',
          message: 'Você conheceu a tekoa Piraí e trocou as primeiras palavras em nhandeayvu, a língua mbyá.',
        },
      },
    },
    glossary: [
      ['aguyjevete', 'bem-vindo(a); muito obrigado(a)'],
      ['xee / ha\'e', 'eu / ele, ela'],
      ['tekoa', 'aldeia'],
      ['porã', 'bonito, bom'],
    ],
  },
  {
    id: 'gun-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tekoa Pindó Mirim: a natureza da aldeia',
    emoji: '🌞',
    summary: 'Um jovem xondaro (guardião) mostra a natureza ao redor da tekoa Pindó Mirim, em Itapuã, Viamão (RS).',
    cultural_context:
      'A tekoa Pindó Mirim fica na Terra Indígena de Itapuã, em Viamão (RS). A comunidade mbyá que vive lá recebe visitantes durante a Semana dos Povos Indígenas, com cantos, jogos tradicionais e uma caminhada guiada pela própria aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete! Kova\'e tekoa Pindó Mirim.',
        translation: 'Bem-vindo! Esta é a tekoa Pindó Mirim.',
        emoji: '🛡️',
        choices: [
          // revisão (17/10/2026): nome + adjetivo (Dooley 2006, p. 148), não «a aldeia é bonita»
          { text: 'Aguyjevete! Tekoa porã!', translation: 'Bem-vindo! Que aldeia bonita!', next: 'natureza' },
          { text: 'Kova\'e mboi.', translation: 'Isto é uma cobra.', wrong: 'Isso não responde à saudação. Diga “Aguyjevete” e descreva a aldeia com “porã”.' },
        ],
      },
      natureza: {
        text: 'Kova\'e kuaray, kova\'e y.',
        translation: 'Este é o sol, esta é a água.',
        emoji: '☀️',
        choices: [
          { text: 'Y porã!', translation: 'Que água boa!', next: 'animais' },
          { text: 'Peteĩ xaryi.', translation: 'Uma avó.', wrong: 'Isso não descreve a água. Fale de “y” (água) com “porã” (boa).' },
        ],
      },
      animais: {
        text: 'Kova\'e jagua, kova\'e guyra.',
        translation: 'Este é o cachorro, este é o pássaro.',
        emoji: '🐦',
        choices: [
          // revisão (17/10/2026): «kyrĩ» pode ser predicado sem prefixo (Dooley 2006, p. 96: «Ser pequeno … Flexão Ø na 3a
          // pessoa»); «porã», não (p. 148: «iporã»): «guyra porã» é «pássaro bonito»
          { text: 'Jagua kyrĩ, guyra porã.', translation: 'O cachorro é pequeno; que pássaro bonito!', next: 'final' },
          { text: 'Irundy jakare.', translation: 'Quatro jacarés.', wrong: 'Você está descrevendo o cachorro e o pássaro, não contando jacarés. Use “kyrĩ” ou “porã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Peẽ xondaro kuery.',
        translation: 'Obrigado! Vocês são os guardiões (desta terra).',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Nhandeayvu!',
          message: 'Você caminhou pela tekoa Pindó Mirim e aprendeu a nomear a natureza em nhandeayvu, a língua mbyá.',
        },
      },
    },
    glossary: [
      ['kuaray / y', 'sol / água'],
      ['jagua / guyra', 'cachorro / pássaro'],
      ['kyrĩ', 'pequeno'],
      ['xondaro', 'guardião, guerreiro'],
    ],
  },
  {
    id: 'gun-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Jakaru jojavi: uma tarde em família',
    emoji: '🍲',
    summary: 'Uma família mbyá te recebe em casa no fim da tarde: você entra, senta, come com todos e vê a dança começar.',
    // ISA, «Guarani Mbya» (Maria Inês Ladeira): família extensa que produz e consome junto
    cultural_context:
      'Entre os mbyá, a família grande (o casal, as filhas, os genros e os netos) trabalha e come junto. Receber alguém é dividir a comida, e a tarde é hora de conversa e, às vezes, de dança.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 83
        text: 'Eike ke!',
        translation: 'Entre!',
        emoji: '🏠',
        choices: [
          // Dooley 2006, p. 5 («aguyjeve te frase tipo saudação. Saudação tradicional: Que se renove, que se
          // transforme»), aqui na grafia junta do A1 (TCC de Karai Nhe'ery)
          { text: 'Aguyjevete!', translation: 'Saudação! (a saudação tradicional)', next: 'sentar' },
          // Dooley 2006, p. 23
          { text: 'Ake raxa.', translation: 'Dormi demais.', wrong: 'Ela está te convidando para entrar. Cumprimente com “Aguyjevete!”.' },
        ],
      },
      sentar: {
        // Dooley 2006, p. 28
        text: 'Eguapy ke.',
        translation: 'Sente-se.',
        emoji: '🪑',
        choices: [
          // Dooley 2006, p. 39
          { text: 'Mbojape aru ndevy.', translation: 'Eu trouxe pão para você.', next: 'pao' },
          // Dooley 2006, p. 87
          { text: 'Aikuaaxe pendeayvu.', translation: 'Quero saber a língua de vocês.', next: 'comer' },
          // Dooley 2006, p. 157
          { text: 'Epyta ke upe py.', translation: 'Pare aí.', wrong: 'Quem está chegando é você: não faz sentido mandar a dona da casa parar. Sente-se, ou entregue o pão que você trouxe.' },
        ],
      },
      pao: {
        // Dooley 2006, p. 30 (tembi'u hee va'e); «ha'evete» é a palavra do A1 (TCC de Karai Nhe'ery)
        text: 'Ha\'evete! Tembi\'u hee va\'e.',
        translation: 'Obrigada! Comida gostosa.',
        emoji: '🍞',
        choices: [
          // Dooley 2006, p. 72
          { text: 'Jakaru jojavi.', translation: 'Comemos todos juntos.', next: 'comer' },
        ],
      },
      comer: {
        // Dooley 2006, p. 83
        text: 'Ndee ranhe ke ekaru.',
        translation: 'Come, você primeiro.',
        emoji: '🍲',
        choices: [
          // Dooley 2006, p. 72
          { text: 'Jakaru jojavi.', translation: 'Comemos todos juntos.', next: 'danca' },
          // Dooley 2006, p. 195
          { text: 'Xee ndaexai mba\'eve rei.', translation: 'Eu não vi nada.', wrong: 'Ela te ofereceu a comida. Responda chamando todos para comer juntos: “Jakaru jojavi.”' },
        ],
      },
      danca: {
        // Dooley 2006, p. 67
        text: 'Ka\'arukue oiko ju jeroky.',
        translation: 'À tarde houve dança outra vez.',
        emoji: '💃',
        choices: [
          // Dooley 2006, p. 148
          { text: 'Orovy\'a porã.', translation: 'Ficamos muito alegres.', next: 'final' },
          // Dooley 2006, p. 83 (pergunta do verbete ka'aru)
          { text: 'Marã rami pa pendeka\'aru?', translation: 'Como vocês estão passando a tarde?', next: 'final2' },
        ],
      },
      final: {
        // Dooley 2006, p. 157
        text: 'Epyta apy.',
        translation: 'Fique aqui.',
        emoji: '🌇',
        ending: {
          tone: 'bom',
          title: 'Jakaru jojavi!',
          message: 'Você entrou, sentou, comeu com a família e ficou para a dança: o verbo com a- (eu), ja- (nós com você) e oro- (nós sem você) já está na sua boca.',
        },
      },
      final2: {
        // Dooley 2006, p. 83 (resposta do mesmo verbete)
        text: 'Nhandeka\'aru porãmba rei.',
        translation: 'Estamos todos passando bem a tarde.',
        emoji: '🌇',
        ending: {
          tone: 'bom',
          title: 'Ka\'aru porã!',
          message: 'Você perguntou como todos estavam passando a tarde, com pende- (de vocês), e ouviu a resposta com nhande- (de todos nós).',
        },
      },
    },
    glossary: [
      ['eike ke / eguapy ke', 'entre / sente-se'],
      ['mbojape / tembi\'u', 'pão / comida'],
      ['jakaru jojavi', 'comemos todos juntos'],
      ['jeroky', 'dança'],
      ['orovy\'a porã', 'ficamos muito alegres'],
    ],
  },
  {
    id: 'gun-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mamo pa ereo? O caminho da mata',
    emoji: '🌳',
    summary: 'No caminho, um ancião pergunta para onde você vai. Você pode seguir para a mata ou para a casa do seu pai, e o tempo pode virar.',
    // ISA, «Guarani Mbya»: a tekoa e a mata preservada; Dooley 2006, p. 17 (ára pyau, tempo das chuvas)
    cultural_context:
      'A mata (ka\'aguy) faz parte da vida da tekoa: é dela que vêm a madeira, os remédios e os bichos. No tempo novo (ára pyau), as chuvas fortes chegam de repente.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 99
        text: 'Mamo pa ereo?',
        translation: 'Para onde você vai?',
        emoji: '👴',
        choices: [
          // Dooley 2006, p. 82
          { text: 'Aa ta ka\'aguy re.', translation: 'Vou para a floresta.', next: 'mata' },
          // Dooley 2006, p. 2
          { text: 'Aa ta xerua py.', translation: 'Vou aonde está o meu pai.', next: 'pai' },
          // Dooley 2006, p. 13
          { text: 'Xee any.', translation: 'Eu não.', wrong: '“Any” responde a uma pergunta de “sim ou não”. Ele perguntou “para onde”: diga aonde você vai, com “Aa ta…”.' },
        ],
      },
      pai: {
        // Dooley 2006, p. 56 (lido na imagem)
        text: 'Nderu oĩ pa?',
        translation: 'Teu pai está (em casa)?',
        emoji: '🏠',
        choices: [
          // Dooley 2006, p. 172 (tá1: sim)
          { text: 'Tá.', translation: 'Sim.', next: 'final_pai' },
        ],
      },
      final_pai: {
        // Dooley 2006, p. 97
        text: 'Xee aa ta ma.',
        translation: 'Eu já vou.',
        emoji: '🚶',
        ending: {
          tone: 'bom',
          title: 'Tá!',
          message: 'Você respondeu à pergunta com “pa” usando “tá” (sim) e seguiu para a casa do seu pai.',
        },
      },
      mata: {
        // Dooley 2006, p. 119
        text: 'Ndee pa erexa mboi?',
        translation: 'Você viu a cobra?',
        emoji: '🐍',
        choices: [
          // Dooley 2006, p. 13
          { text: 'Any.', translation: 'Não.', next: 'tempo' },
          // Dooley 2006, p. 83 (lido na imagem)
          { text: 'Kuee ka\'aru\'i xero katy aa vy aexa mboi.', translation: 'Ontem à tardinha, indo para minha casa, vi uma cobra.', next: 'tempo' },
          // Dooley 2006, p. 83
          { text: 'Eike ke!', translation: 'Entre!', wrong: 'Vocês estão no meio do caminho, não numa casa. Ele perguntou se você viu a cobra: responda “Any” (não) ou conte quando viu.' },
        ],
      },
      tempo: {
        // Dooley 2006, p. 172 (lido na imagem)
        text: 'Oky ta.',
        translation: 'Está para chover.',
        emoji: '🌧️',
        choices: [
          // Dooley 2006, p. 129
          { text: 'Aa ta xero py.', translation: 'Vou à minha casa.', next: 'final' },
          // Dooley 2006, p. 163
          { text: 'Nda\'okyi \'rã.', translation: 'Não vai chover.', next: 'chuva' },
        ],
      },
      final: {
        // Dooley 2006, p. 139
        text: 'Yvytu oipeju atã.',
        translation: 'O vento soprou com força.',
        emoji: '🌬️',
        ending: {
          tone: 'bom',
          title: 'Aa ta xero py!',
          message: 'Você ouviu o aviso do ancião e voltou para casa antes da chuva. Perguntas com “pa”, respostas com “any”, e o futuro com “ta” e “\'rã”.',
        },
      },
      chuva: {
        // Dooley 2006, p. 131
        text: 'Oky xejou.',
        translation: 'A chuva me pegou.',
        emoji: '☔',
        ending: {
          tone: 'neutro',
          title: 'Oky xejou!',
          message: 'Você disse “nda\'okyi \'rã” (não vai chover)… e a chuva te pegou no caminho. No tempo novo, vale ouvir os mais velhos.',
        },
      },
    },
    glossary: [
      ['mamo pa ereo?', 'para onde você vai?'],
      ['ka\'aguy / mboi', 'floresta / cobra'],
      ['any / tá', 'não / sim'],
      ['oky ta', 'está para chover'],
      ['nda\'okyi \'rã', 'não vai chover'],
    ],
  },
  // ══ B1 (17/10/2026). Toda fala em mbyá é de [Dooley 2006], do jeito que está lá, com a página (as que têm ẽ, ĩ, ỹ
  // foram lidas na imagem). Em gun-h8, as falas do canto infantil são do «Ayvu Rapyta» de Cadogan (1959, mbyá do
  // Guairá), marcadas, com a grafia convertida pela regra declarada em gramatica.ts (gun-g15). O que é nosso é só a
  // ordem das falas; as personagens são fictícias e sem nome.
  {
    id: 'gun-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Ajevy vy rive aju: ida e volta da cidade',
    emoji: '🚶',
    summary: 'Um rapaz da tekoa vai até a cidade. No caminho, o irmão dele viu uma cobra; na cidade, você compra o que precisa ou pede para aprender a escrever.',
    // ISA, «Guarani Mbya»: tekoa perto das cidades
    cultural_context:
      'Muitas tekoa ficam perto de cidades, e ir até lá faz parte da vida: comprar comida, ir à escola, vender artesanato. O caminho passa pela mata, onde é bom olhar onde se pisa.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 62
        text: 'Mba\'e jave pa ereo?',
        translation: 'A que hora você vai?',
        emoji: '🕰️',
        choices: [
          // Dooley 2006, p. 94
          { text: 'Aa \'rã kuri.', translation: 'Vou mais tarde, hoje.', next: 'caminho' },
          // Dooley 2006, p. 172 (lido na imagem)
          { text: 'Ko\'ẽ rã aguata ta.', translation: 'Estou prestes a viajar amanhã.', next: 'caminho' },
          // Dooley 2006, p. 95
          { text: 'Okyje mboi gui.', translation: 'Tem medo de cobra.', wrong: 'Ele perguntou a hora em que você vai. Responda com “kuri” (mais tarde, hoje) ou “ko\'ẽ rã” (amanhã).' },
        ],
      },
      caminho: {
        // Dooley 2006, p. 192
        text: 'Xeryvy oo vy mboi oexa.',
        translation: 'Quando meu irmão foi, viu uma cobra.',
        emoji: '🐍',
        choices: [
          // Dooley 2006, p. 192 (nota 1 do verbete vy)
          { text: 'Xeru reve vy ndakyjei.', translation: 'Quando estou com meu pai, não tenho medo.', next: 'cidade' },
          // Dooley 2006, p. 100 (lido na imagem)
          { text: 'Ama\'ẽ hexe.', translation: 'Olhei para ela.', next: 'cidade' },
          // Dooley 2006, p. 135
          { text: 'Ereru pa peráta?', translation: 'Você trouxe o dinheiro?', wrong: 'Ele está falando da cobra no caminho, não de dinheiro. Diga que vai com o seu pai e não tem medo, ou que olhou para ela.' },
        ],
      },
      cidade: {
        // Dooley 2006, p. 122 (nha-, «1ª pessoa do plural (inclusiva)»), lido na imagem
        text: 'Nhavaẽ tetã py.',
        translation: 'Chegamos na cidade.',
        emoji: '🏙️',
        choices: [
          // Dooley 2006, p. 71
          { text: 'Tetã gui ajogua aroi.', translation: 'Comprei arroz na cidade.', next: 'volta' },
          // Dooley 2006, p. 111
          { text: 'Xembo\'e ke mba\'emo re.', translation: 'Ensine-me alguma coisa.', next: 'escola' },
        ],
      },
      escola: {
        // Dooley 2006, p. 192 (vy ae), lido na imagem
        text: 'Anhembo\'e vy ae aexa kuaa kuaxia para.',
        translation: 'É por estudar que sei ler a escrita.',
        emoji: '📄',
        choices: [
          // Dooley 2006, p. 89
          { text: 'Amboparaxe kuaxia para.', translation: 'Quero escrever uma carta.', next: 'volta' },
          // Dooley 2006, p. 4 (lido na imagem)
          { text: 'Ndaikuaai anhombo\'e aguã.', translation: 'Não sei ensinar.', wrong: 'Quem pediu para aprender foi você. Diga o que quer escrever: “Amboparaxe kuaxia para.”' },
        ],
      },
      volta: {
        // Dooley 2006, p. 103 (do A2)
        text: 'Mba\'e re tu peju?',
        translation: 'Por que vocês vieram?',
        emoji: '🏠',
        choices: [
          // Dooley 2006, p. 68
          { text: 'Ajevy vy rive aju.', translation: 'Vim só para voltar logo.', next: 'final' },
        ],
      },
      final: {
        // Dooley 2006, p. 51 (do A2)
        text: 'Japytu\'u rive, ha\'e ndajakarui.',
        translation: 'Vamos só descansar, e não vamos comer.',
        emoji: '😌',
        ending: {
          tone: 'bom',
          title: 'Ajevy vy rive aju!',
          message: 'Você foi à cidade e voltou, ligando as ações com “vy” (mesmo sujeito) e “jave” (enquanto), e dizendo a hora com “kuri” e “ko\'ẽ rã”.',
        },
      },
    },
    glossary: [
      ['mba\'e jave', 'a que hora'],
      ['xeryvy', 'meu irmão mais novo'],
      ['vy', 'quando, ao (mesmo sujeito)'],
      ['nhavaẽ tetã py', 'chegamos na cidade'],
      ['kuaxia para', 'papel escrito, carta'],
    ],
  },
  {
    id: 'gun-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Imba\'eaxy va\'e: um doente em casa',
    emoji: '🤒',
    summary: 'Uma vizinha conta que tem um doente em casa e procura quem a ajude. Você pergunta o que ele sente e se oferece para ir.',
    // Dooley 2006, p. 147 (poropoanoa, médico; -poano, tratar); ISA, «Guarani Mbya»: cuidado dos doentes na família e na
    // opy'i
    cultural_context:
      'Na tekoa, cuidar de um doente é coisa da família inteira e dos vizinhos. O léxico de Dooley tem palavra para quem trata as pessoas: “poropoanoa”, de “-poano”, tratar.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 187 (lido na imagem)
        text: 'Peteĩ imba\'eaxy va\'e oĩ xero py.',
        translation: 'Um doente está na minha casa.',
        emoji: '🏠',
        choices: [
          // Dooley 2006, p. 34
          { text: 'Mba\'e nunga mba\'eaxy pa oendu?', translation: 'Que doença ele está sentindo?', next: 'ajuda' },
          // Dooley 2006, p. 46
          { text: 'Tetã pygua.', translation: 'Habitante da cidade.', wrong: 'Ela falou de um doente na casa dela. Pergunte o que ele sente: “Mba\'e nunga mba\'eaxy pa oendu?”' },
        ],
      },
      ajuda: {
        // Dooley 2006, p. 187 (lido na imagem)
        text: 'Ajouxe xepytyvõ va\'erã.',
        translation: 'Quero achar quem me ajude.',
        emoji: '🫱',
        choices: [
          // Dooley 2006, p. 97 (do A2)
          { text: 'Xee aa ta ma.', translation: 'Eu já vou.', next: 'dinheiro' },
          // Dooley 2006, p. 15
          { text: 'Ndeapu eme ta\'vy.', translation: 'Não minta.', wrong: 'Ela não está mentindo: está pedindo ajuda. Ofereça-se com “Xee aa ta ma.”' },
        ],
      },
      dinheiro: {
        // Dooley 2006, p. 135
        text: 'Peráta pa rereko?',
        translation: 'Você tem dinheiro?',
        emoji: '💵',
        choices: [
          // Dooley 2006, p. 172 (tá1)
          { text: 'Tá.', translation: 'Sim.', next: 'final' },
          // Dooley 2006, p. 13 (any)
          { text: 'Any.', translation: 'Não.', next: 'final_sem' },
        ],
      },
      final: {
        // TCC de Karai Nhe'ery (do A1)
        text: 'Ha\'evete!',
        translation: 'Obrigada!',
        emoji: '🙏',
        ending: {
          tone: 'bom',
          title: 'Xepytyvõ va\'e!',
          message: 'Você foi quem ajudou: “xepytyvõ va\'e”, quem me ajuda. A oração vem primeiro, e “va\'e” fecha.',
        },
      },
      final_sem: {
        // Dooley 2006, p. 165 (ramo jepe), lido na imagem
        text: 'Ha\'eve ri ereo e\'ỹ ramo jepe.',
        translation: 'Está bem, mesmo que você não vá.',
        emoji: '🤝',
        ending: {
          tone: 'neutro',
          title: 'Ha\'eve ri',
          message: 'Sem dinheiro, ela aceita mesmo assim (“ha\'eve ri”, está bem): “ramo jepe” é “mesmo que”. Volte e tente ir com ela.',
        },
      },
    },
    glossary: [
      ['imba\'eaxy va\'e', 'o doente (quem está doente)'],
      ['xepytyvõ va\'erã', 'quem me ajude'],
      ['peráta', 'dinheiro'],
      ['ramo jepe', 'mesmo que'],
    ],
  },
  {
    id: 'gun-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Jajogueroayvu: conversar em vez de brigar',
    emoji: '🤝',
    summary: 'Um amigo chega com vontade de brigar. Você propõe conversar, e a tarde termina com cavalos, cachorros e combinações para depois.',
    // Dooley 2006, p. 70 (jajoguero'a, jajogueroayvu)
    cultural_context:
      'Em mbyá, brigar e conversar usam o mesmo prefixo “jo-”, de “uns com os outros”: “jajoguero\'a” e “jajogueroayvu”. Escolher uma palavra ou a outra muda a tarde inteira.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 70
        text: 'Jajoguero\'a.',
        translation: 'Vamos brigar.',
        emoji: '😠',
        choices: [
          // Dooley 2006, p. 70
          { text: 'Jajogueroayvu.', translation: 'Vamos conversar.', next: 'conversa' },
          // Dooley 2006, p. 70
          { text: 'Ajejoi.', translation: 'Eu me lavei.', wrong: 'Isso não responde ao convite para brigar. Proponha conversar: “Jajogueroayvu.”' },
        ],
      },
      conversa: {
        // Dooley 2006, p. 111
        text: 'Xembo\'e ke mba\'emo re.',
        translation: 'Ensine-me alguma coisa.',
        emoji: '🧑‍🏫',
        choices: [
          // Dooley 2006, p. 38 (lido na imagem)
          { text: 'Kavaju aronha, yvate rupi aropo.', translation: 'Fiz o cavalo correr e pular alto, junto com ele.', next: 'cavalo' },
          // Dooley 2006, p. 136
          { text: 'Xee amboparaxe kuaxia.', translation: 'Eu quero escrever uma carta.', next: 'escrita' },
        ],
      },
      cavalo: {
        // Dooley 2006, p. 122
        text: 'Mboi gui jagua onha ratã ovy.',
        translation: 'O cachorro saiu correndo da cobra com força.',
        emoji: '🐕',
        choices: [
          // Dooley 2006, p. 34
          { text: 'Aenduka ixupe.', translation: 'Avisei-o.', next: 'final' },
          // Dooley 2006, p. 154
          { text: 'Apu\'ã ha\'amy.', translation: 'Levanto-me e fico de pé.', next: 'final' },
        ],
      },
      escrita: {
        // Dooley 2006, p. 192 (lido na imagem)
        text: 'Anhembo\'e vy ae aexa kuaa kuaxia para.',
        translation: 'É por estudar que sei ler a escrita.',
        emoji: '✍️',
        choices: [
          // Dooley 2006, p. 188 (va'ekue)
          { text: 'Xejejoko vy mba\'eve nda\'ei va\'ekue.', translation: 'Eu me controlei e não disse nada.', next: 'final' },
          // Dooley 2006, p. 70
          { text: 'Jajoguero\'a.', translation: 'Vamos brigar.', wrong: 'Vocês já tinham combinado conversar. Fique na conversa: conte como você se controlou (“Xejejoko vy…”).' },
        ],
      },
      final: {
        // Dooley 2006, p. 94
        text: 'Kuri ka\'arukue jajoexa ju \'rã.',
        translation: 'Hoje à tarde vamos nos ver outra vez.',
        emoji: '🌇',
        ending: {
          tone: 'bom',
          title: 'Jajoexa ju \'rã!',
          message: 'Em vez de “jajoguero\'a”, vocês ficaram com “jajogueroayvu”: o mesmo “jo-” de “uns com os outros”, agora para conversar e se ver de novo.',
        },
      },
    },
    glossary: [
      ['jajoguero\'a / jajogueroayvu', 'vamos brigar / vamos conversar'],
      ['aronha', 'fiz correr (junto)'],
      ['aenduka', 'avisei'],
      ['jajoexa ju \'rã', 'vamos nos ver outra vez'],
    ],
  },
  {
    id: 'gun-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Tamombe\'u xivi reko: a noite das histórias',
    emoji: '🦉',
    summary: 'À noite, um ancião começa a contar histórias. Você ouve o que se diz da cobra e da coruja, e as crianças cantam um canto de brincadeira do Guairá.',
    // Marco Antonio Oliveira da Silva, TCC UFSC 2020 (resumo em português: as histórias contadas pelos mais velhos);
    // Cadogan 1959, cap. XVIII (cantos com que as crianças acompanham as brincadeiras)
    cultural_context:
      'Professores mbyá contam que as histórias dos mais velhos eram ouvidas desde criança. O canto do papagaio desta história é das crianças mbyá do Guairá, no Paraguai, registrado por León Cadogan em 1959; a grafia foi convertida para a do resto do curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Dooley 2006, p. 115 (lido na imagem)
        text: 'Tamombe\'u xivi reko.',
        translation: 'Deixe-me contar sobre a onça.',
        emoji: '👴',
        choices: [
          // Dooley 2006, p. 115 (lido na imagem)
          { text: 'Emombe\'u atã ke.', translation: 'Conte em voz alta.', next: 'cobra' },
          // Dooley 2006, p. 167
          { text: 'Opa ra\'e.', translation: 'Ah, já terminou.', wrong: 'Ele nem começou a história. Peça que conte em voz alta: “Emombe\'u atã ke.”' },
        ],
      },
      cobra: {
        // Dooley 2006, p. 164
        text: 'Mboi avi oiko raka\'e.',
        translation: 'A cobra também existia antigamente.',
        emoji: '🐍',
        choices: [
          // Dooley 2006, p. 63
          { text: 'Xeryvy je oexa kuri mboi.', translation: 'Dizem que meu irmão viu uma cobra (hoje).', next: 'coruja' },
          // Dooley 2006, p. 119
          { text: 'Ndee mba\'eve ri nda\'u nderejapoi?', translation: 'Será que você não fez nada?', wrong: 'Ele está contando uma história antiga, não falando do que fez. Conte o que você ouviu dizer da cobra, com “je”.' },
        ],
      },
      coruja: {
        // Dooley 2006, p. 100-101 (lido na imagem)
        text: 'Urukure\'a kuery je oma\'ẽ guaxu \'rã oke vy.',
        translation: 'Dizem que as corujas, dormindo, ficam com os olhos bem abertos.',
        emoji: '🦉',
        choices: [
          // Dooley 2006, p. 172 (tá1)
          { text: 'Tá.', translation: 'Sim.', next: 'canto' },
          // Dooley 2006, p. 13 (any)
          { text: 'Any.', translation: 'Não.', next: 'duvida' },
        ],
      },
      duvida: {
        // Dooley 2006, p. 65 (jekue)
        text: 'Aendu jekue rive\'i.',
        translation: 'É só algo que ouço dizer.',
        emoji: '🤷',
        choices: [
          // Dooley 2006, p. 38 (lido na imagem)
          { text: 'Perovia pa xemba\'emombe\'ua?', translation: 'Vocês acreditam no que estou contando?', wrong: 'Quem está contando é ele, não você. Volte e responda “Tá.” (sim) para ouvir o canto das crianças.' },
          // Dooley 2006, p. 167
          { text: 'Opa ra\'e.', translation: 'Ah, já terminou.', next: 'canto' },
        ],
      },
      canto: {
        // Cadogan 1959, «Ayvu Rapyta», cap. XVIII (PDF da USP, p. 177, lido na imagem): «Parakáo ndaje omano»;
        // grafia convertida pela regra de gun-g15
        text: 'Parakau ndaje omano.',
        translation: 'Dizem que o papagaio morreu. (canto infantil, Cadogan, 1959)',
        emoji: '🦜',
        choices: [
          // Cadogan 1959, o verso seguinte do mesmo canto: «Mba'ére nda omano?» (sem o acento, pela regra)
          { text: 'Mba\'ere nda omano?', translation: 'Por que será que morreu? (Cadogan, 1959)', next: 'final' },
        ],
      },
      final: {
        // Cadogan 1959, o verso seguinte do mesmo canto: «Endy rei omano.»
        text: 'Endy rei omano.',
        translation: 'Pegou fogo e morreu. (Cadogan, 1959)',
        emoji: '🔥',
        ending: {
          tone: 'bom',
          title: 'Parakau ndaje!',
          message: 'Você ouviu a noite inteira marcando de onde vem cada notícia: “raka\'e” para o tempo antigo, “je” (e “ndaje”, no Guairá) para o que se ouviu dizer, “kuri” para o que se viu hoje.',
        },
      },
    },
    glossary: [
      ['tamombe\'u', 'deixe-me contar'],
      ['raka\'e', 'antigamente (ninguém viu)'],
      ['je / ndaje', 'dizem que'],
      ['urukure\'a', 'coruja'],
      ['parakau', 'papagaio'],
    ],
  },
];
