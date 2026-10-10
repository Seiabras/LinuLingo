import type { StorySeed } from '../types';

/**
 * Histórias interativas do volapük — por enquanto uma por nível, A1.1 e A1.2 (pacote incompleto,
 * ver `incomplete` em index.ts). As falas de saudação e apresentação usam as frases oficiais de "Useful phrases in
 * Volapük", Omniglot (https://www.omniglot.com/language/phrases/volapuk.php, já na forma revisada
 * por Arie de Jong em 1930), citadas tal como estão na fonte.
 */
export const STORIES_VO: StorySeed[] = [
  {
    id: 'vo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Glidö in Kongred Volapüka',
    emoji: '👋',
    summary: 'Você chega a um congresso de volapük e conhece Fredrik, outro participante, no saguão.',
    cultural_context: 'O volapük foi a primeira língua construída internacional a ter congressos de verdade: o terceiro, em 1889, foi falado inteiramente na língua — dezesseis anos antes do primeiro congresso de esperanto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Lio panemol-li?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Nem oba binon Ana. Ed ol-li?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adyö!', translation: 'Tchau!', wrong: 'Fredrik acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Nem oba binon Fredrik. Plitos obi ad kolkömön oli!',
        translation: 'Meu nome é Fredrik. Tenho o prazer de te conhecer!',
        emoji: '😊',
        choices: [
          { text: 'Danö! Lio stadol-li?', translation: 'Obrigado! Como você está?', next: 'final_bo' },
          { text: 'Vat binon gudik.', translation: 'A água é boa.', wrong: 'Isso não responde à apresentação de Fredrik. Tente agradecer com "Danö!" ou perguntar como ele está.' },
        ],
      },
      final_bo: {
        text: 'Gudiko, danö! Ob labob flen nulik.',
        translation: 'Bem, obrigado! Eu tenho um amigo novo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um amigo novo!', message: 'Fredrik sorri: você fez a sua primeira conversa em volapük, num congresso de verdade.' },
      },
    },
    glossary: [
      ['glidö / adyö', 'olá / tchau'],
      ['nem oba binon… / lio panemol-li?', 'meu nome é… / qual é o seu nome?'],
      ['danö / plitos obi ad kolkömön oli', 'obrigado / tenho o prazer de te conhecer'],
    ],
  },
  {
    id: 'vo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Famül e dom',
    emoji: '🏠',
    summary: 'Fredrik pergunta sobre a sua família e a sua casa, depois do primeiro encontro no congresso.',
    cultural_context: 'O movimento do volapük chegou a ter cerca de 283 clubes pelo mundo nos anos 1880 — famílias e grupos inteiros se reuniam só pra praticar a língua, antes da ascensão do esperanto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Labol-li blodi u söri?',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '📜',
        choices: [
          { text: 'Si, ob labob blodi e söri.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Dom oba binon gretik.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "Si, ob labob…" ou "Nö."' },
        ],
      },
      fam: {
        text: 'Gudiko! E lio binon-li dom ola?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Dom oba binon smalik ab gudik.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Deg vins.', translation: 'Dez vinhos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela com "Dom oba binon…"' },
        ],
      },
      final_bo: {
        text: 'Gudik! Ob labob flen nulik.',
        translation: 'Que bom! Eu tenho um amigo novo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma amizade nova!', message: 'Fredrik gostou de saber da sua família — e agora você tem um amigo novo que fala volapüque.' },
      },
    },
    glossary: [
      ['blod / sör', 'irmão / irmã'],
      ['dom oba', 'minha casa'],
      ['labön (ob labob)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'vo-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vien e nited',
    emoji: '🌦️',
    summary: 'Você encontra Fredrik de novo, agora conversando sobre o tempo e o trabalho de cada um.',
    cultural_context: 'O vocabulário de clima e profissões deste nível vem do mesmo manual que sustentou boa parte da A1, o "Hand-book of Volapük" (Charles E. Sprague, 1888) — fontes modernas e confiáveis pro volapük continuam raras.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Lio binon-li vien adelo?',
        translation: 'Olá! Como está o vento hoje?',
        emoji: '💨',
        choices: [
          { text: 'Vien binon gretik, ab sol binon hitik.', translation: 'O vento está forte, mas o sol está quente.', next: 'trabalho' },
          { text: 'Ob labob kati.', translation: 'Eu tenho um gato.', wrong: 'Isso não responde sobre o vento. Descreva o tempo com "Vien binon…"' },
        ],
      },
      trabalho: {
        text: 'Gudik! Ob binob dokel. Binol-li tidel?',
        translation: 'Que bom! Eu sou médico. Você é professor(a)?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'Si, ob binob tidel. Ob vobob gudiko.', translation: 'Sim, eu sou professor(a). Eu trabalho bem.', next: 'final_bo' },
          { text: 'Nif binon vietik.', translation: 'A neve é branca.', wrong: 'Isso não responde se você é professor(a). Use "Si, ob binob tidel." ou "Nö."' },
        ],
      },
      final_bo: {
        text: 'Beat oba binon gudik!',
        translation: 'Minha felicidade está boa (eu estou feliz)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um bom dia de trabalho', message: 'Fredrik gostou de saber do seu trabalho — mais uma conversa de verdade em volapük.' },
      },
    },
    glossary: [
      ['vien / lömib / nif', 'vento / chuva / neve'],
      ['dokel / tidel', 'médico / professor(a)'],
      ['ob vobob gudiko', 'eu trabalho bem'],
    ],
  },
  {
    id: 'vo-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Malit in zif',
    emoji: '🛍️',
    summary: 'Você vai ao mercado com Fredrik, fala sobre o preço do pão e como se sente.',
    cultural_context: 'O vocabulário de compras e corpo deste nível também vem do "Hand-book of Volapük" (1888) — como na A1, cada palavra foi conferida contra essa fonte antes de entrar na história.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Glidö! Ob lemob bodi. Lio binon-li suäm?',
        translation: 'Olá! Eu compro pão. Como está o preço?',
        emoji: '🍞',
        choices: [
          { text: 'Suäm binon nedelidik.', translation: 'O preço está barato.', next: 'preco' },
          { text: 'Kap oba binon gretik.', translation: 'Minha cabeça é grande.', wrong: 'Isso não fala do preço do pão. Descreva com "Suäm binon…".' },
        ],
      },
      preco: {
        text: 'Gudik! Lio stadol-li?',
        translation: 'Que bom! Como você está?',
        emoji: '❓',
        choices: [
          { text: 'Beat oba binon gudik. Ob labob moni.', translation: 'Minha felicidade está boa. Eu tenho dinheiro.', next: 'final_bo' },
          { text: 'Kat binon zunik.', translation: 'O gato está bravo.', wrong: 'Isso não responde como você está. Use "Beat oba binon…".' },
        ],
      },
      final_bo: {
        text: 'Gudik! Beat oba binon gretik!',
        translation: 'Que bom! Minha felicidade é grande!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia feliz no mercado', message: 'Você e Fredrik compraram pão e saíram felizes do mercado — mais uma conversa de verdade em volapük.' },
      },
    },
    glossary: [
      ['suäm / mon', 'preço / dinheiro'],
      ['delidik / nedelidik', 'caro / barato'],
      ['beat oba binon gudik', 'eu estou feliz (minha felicidade está boa)'],
    ],
  },
];
