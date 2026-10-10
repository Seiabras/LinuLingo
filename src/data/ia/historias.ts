import type { StorySeed } from '../types';

/** Histórias interativas da interlíngua — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_IA: StorySeed[] = [
  {
    id: 'ia-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon die al Conferentia',
    emoji: '👋',
    summary: 'Você chega a uma Conferentia International de Interlingua e conhece Petro, outro participante, no saguão do hotel.',
    cultural_context: 'A Conferentia International de Interlingua, organizada pela União Mundial pro Interlingua (UMI), acontece a cada dois anos desde 1955 (primeira edição em Tours, na França) — reúne falantes de vários países, com palestras e conversas em interlíngua.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon die! Qual es vostre nomine?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mi nomine es Ana. E le vostre?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adeo!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Io me appella Petro. Esque tu parla Interlingua de longe tempore?',
        translation: 'Eu me chamo Petro. Você fala interlíngua há muito tempo?',
        emoji: '😊',
        choices: [
          { text: 'Si, io apprende Interlingua.', translation: 'Sim, eu estudo interlíngua.', next: 'final_bo' },
          { text: 'Le pan es bon.', translation: 'O pão é bom.', wrong: 'Isso não responde sobre há quanto tempo você fala interlíngua. Tente "Si…" ou "No…".' },
        ],
      },
      final_bo: {
        text: 'Bonissime! Gratias, e bon conferentia, Ana!',
        translation: 'Ótimo! Obrigado, e boa conferência, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un nove amico!', message: 'Petro sorri: você fez a sua primeira conversa em interlíngua, numa conferência internacional de verdade.' },
      },
    },
    glossary: [
      ['bon die / adeo', 'olá / tchau'],
      ['mi nomine es… / io me appella…', 'meu nome é… / eu me chamo…'],
      ['gratias', 'obrigado'],
    ],
  },
  {
    id: 'ia-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'In le domo de Petro',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'A União Mundial pro Interlingua publica desde 1988 a revista "Panorama in Interlingua", com notícias e resumos de ciência só em interlíngua — uma continuação do uso científico que a língua já tinha nos anos 1950 e 1960.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon die! Esque tu ha fratres?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Si, io ha un fratre e un soror.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Mi domo es grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "si, io ha…" ou "no".' },
        ],
      },
      fam: {
        text: 'Bonissime! E qual es tu domo?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mi domo es parve ma bon.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dece annos.', translation: 'Dez anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "mi domo…"' },
        ],
      },
      final_bo: {
        text: 'Interessante! Benvenite a mi domo!',
        translation: 'Interessante! Seja bem-vindo(a) à minha casa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un nove amicitate!', message: 'Petro gostou de saber da sua família — e já te deu as boas-vindas à casa dele.' },
      },
    },
    glossary: [
      ['fratre / soror', 'irmão / irmã'],
      ['mi domo', 'minha casa'],
      ['haber (io ha)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'ia-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Al mercato',
    emoji: '🛍️',
    summary: 'No mercado, você fala do tempo com um vendedor e compra uma jaqueta nova.',
    cultural_context: 'A interlíngua não tem um território próprio, mas o vocabulário vem de palavras reconhecíveis em inglês, francês, italiano e espanhol/português — qualquer vendedor imaginário entenderia essas frases.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon die! Hodie es multo frigide, biber un caffe calide!',
        translation: 'Bom dia! Hoje está muito frio, beba um café quente!',
        emoji: '☕',
        choices: [
          { text: 'Gratias, tu pote adjutar me?', translation: 'Obrigado, você pode me ajudar?', next: 'adjutar' },
          { text: 'Mi domo es grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde ao cumprimento sobre o frio. Agradeça e peça ajuda.' },
        ],
      },
      adjutar: {
        text: 'Si! Que vole tu comprar hodie?',
        translation: 'Sim! O que você quer comprar hoje?',
        emoji: '🛍️',
        choices: [
          { text: 'Io vole comprar un nove jachetta.', translation: 'Quero comprar uma jaqueta nova.', next: 'final_bo' },
          { text: 'Io es de Brasil.', translation: 'Eu sou do Brasil.', wrong: 'Isso não diz o que você quer comprar. Use "io vole comprar…".' },
        ],
      },
      final_bo: {
        text: 'Belle iste jachetta! Illo va ben con le frigido de hodie.',
        translation: 'Linda essa jaqueta! Combina com o frio de hoje.',
        emoji: '🧥',
        ending: { tone: 'bom', title: 'Un nove jachetta!', message: 'Você comprou uma jaqueta nova e aprendeu a falar do tempo em interlíngua.' },
      },
    },
    glossary: [
      ['frigide', 'frio'],
      ['biber', 'beber'],
      ['comprar', 'comprar'],
      ['io vole', 'eu quero'],
    ],
  },
  {
    id: 'ia-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'In le hospital',
    emoji: '🩺',
    summary: 'Numa consulta médica, você explica o que dói e descreve como se sente.',
    cultural_context: 'A interlíngua é usada em congressos internacionais e em resumos científicos (sobretudo de medicina) justamente porque falantes de várias línguas românicas e do inglês conseguem lê-la sem estudo prévio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bon die! Io es le medico. Que te dole?',
        translation: 'Bom dia! Eu sou o médico. O que dói em você?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'Mi capite me dole multo.', translation: 'Minha cabeça dói muito.', next: 'capite' },
          { text: 'Io pote parlar Interlingua.', translation: 'Eu consigo falar interlíngua.', wrong: 'O médico perguntou o que dói, não se você fala interlíngua. Diga o que dói.' },
        ],
      },
      capite: {
        text: 'Como tu se senti, ultra de isto?',
        translation: 'Como você está se sentindo, além disso?',
        emoji: '🤔',
        choices: [
          { text: 'Io es multo fatigate, io non se senti ben.', translation: 'Estou muito cansado, não estou bem.', next: 'final_bo' },
          { text: 'Io es maestro de schola.', translation: 'Sou professor de escola.', wrong: 'O médico quer saber como você está se sentindo, não a sua profissão.' },
        ],
      },
      final_bo: {
        text: 'Tu debe reposar. Biber multe aqua e retornar si tu non se senti melio.',
        translation: 'Você precisa descansar. Beba bastante água e volte se não se sentir melhor.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Un bon consilio!', message: 'Você explicou como se sentia e recebeu um bom conselho do médico.' },
      },
    },
    glossary: [
      ['dole', 'dói'],
      ['sentir', 'sentir-se'],
      ['fatigate', 'cansado'],
      ['reposar', 'descansar'],
    ],
  },
];
