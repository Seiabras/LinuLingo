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
];
