import type { StorySeed } from '../types';

/**
 * Histórias interativas do guarani mbyá, uma por subnível, do A1.1 ao A2.2.
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
          { text: 'Tekoa porã!', translation: 'A aldeia é bonita!', next: 'final' },
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
          { text: 'Aguyjevete! Tekoa porã.', translation: 'Bem-vindo! A aldeia é bonita.', next: 'natureza' },
          { text: 'Kova\'e mboi.', translation: 'Isto é uma cobra.', wrong: 'Isso não responde à saudação. Diga “Aguyjevete” e descreva a aldeia com “porã”.' },
        ],
      },
      natureza: {
        text: 'Kova\'e kuaray, kova\'e y.',
        translation: 'Este é o sol, esta é a água.',
        emoji: '☀️',
        choices: [
          { text: 'Y porã.', translation: 'A água é boa.', next: 'animais' },
          { text: 'Peteĩ xaryi.', translation: 'Uma avó.', wrong: 'Isso não descreve a água. Fale de “y” (água) com “porã” (boa).' },
        ],
      },
      animais: {
        text: 'Kova\'e jagua, kova\'e guyra.',
        translation: 'Este é o cachorro, este é o pássaro.',
        emoji: '🐦',
        choices: [
          { text: 'Jagua kyrĩ, guyra porã.', translation: 'O cachorro é pequeno, o pássaro é bonito.', next: 'final' },
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
];
