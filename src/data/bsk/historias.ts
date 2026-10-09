import type { StorySeed } from '../types';

/**
 * Histórias interativas do burushaski — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Como quase não há frase pronta atestada em nenhuma fonte consultada (só as poucas de cortesia e a
 * pergunta/resposta de nome do roteiro do Wikivoyage — ver vocabulario.ts), estas histórias ficam
 * deliberadamente simples, encadeando só as palavras e os poucos modelos de frase confirmados, sem
 * inventar estrutura nova.
 */
export const STORIES_BSK: StorySeed[] = [
  {
    id: 'bsk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bebila! Encontro em Hunza',
    emoji: '👋',
    summary: 'Você encontra Hassan no vale de Hunza e faz a sua primeira conversa em burushaski.',
    cultural_context: 'O vale de Hunza é famoso pela paisagem no Karakoram e por histórias (não comprovadas cientificamente) sobre a longevidade dos seus moradores. É também um dos dois dialetos (junto com o de Nager) deste pacote — bem diferente do dialeto de Yasin, falado mais a oeste.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bebila?',
        translation: 'Tudo bem? (saudação informal)',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Ju na, bebila?', translation: 'Obrigado, e com você?', next: 'nome' },
          { text: 'Bey ya!', translation: 'Não!', wrong: 'Hassan só perguntou se está tudo bem — responder “não” sem mais explicação ainda não faz sentido.' },
        ],
      },
      nome: {
        text: 'Une gueek besan bila?',
        translation: 'Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Ja aek Linu bila.', translation: 'Meu nome é Linu.', next: 'final_bom' },
          { text: 'Awa.', translation: 'Sim.', wrong: 'Isso não responde qual é o seu nome. Use “Ja aek ___ bila”.' },
        ],
      },
      final_bom: {
        text: 'Ju na, Linu!',
        translation: 'Obrigado, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeiro encontro!', message: 'Você fez a sua primeira conversa em burushaski, no vale de Hunza.' },
      },
    },
    glossary: [
      ['Bebila?', 'tudo bem?'],
      ['Ju na', 'obrigado'],
      ['Une gueek besan bila?', 'qual é o seu nome?'],
      ['Ja aek … bila', 'meu nome é …'],
    ],
  },
  {
    id: 'bsk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Imi, aẏa, giẏaas: a família de Hassan',
    emoji: '👨‍👩‍👧',
    summary: 'Hassan apresenta algumas palavras de família, e você reconhece qual delas falta.',
    cultural_context: 'Os termos de parentesco do burushaski, como “giẏaas” (criança), não marcam o gênero de quem é citado — diferente do português, que distingue “filho” de “filha”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ja aek Hassan bila. Un?',
        translation: 'Meu nome é Hassan. E você? (lit. “você?”, deixando o resto implícito)',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Ja aek Linu bila.', translation: 'Meu nome é Linu.', next: 'familia' },
          { text: 'Ju na.', translation: 'Obrigado.', wrong: 'Hassan perguntou o seu nome, não agradeceu nada ainda. Responda com “Ja aek ___ bila”.' },
        ],
      },
      familia: {
        text: 'Imi, aẏa, giẏaas.',
        translation: 'Mãe, pai, criança.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Giẏaas.', translation: 'Criança.', next: 'final_bom' },
          { text: 'Tol.', translation: 'Cobra.', wrong: '“Tol” é “cobra” — não faz parte da lista de família que Hassan está apresentando.' },
        ],
      },
      final_bom: {
        text: 'Ju na!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Família reconhecida!', message: 'Você reconheceu as palavras de família que Hassan usou, em burushaski.' },
      },
    },
    glossary: [
      ['Imi', 'mãe'],
      ['Aẏa', 'pai'],
      ['Giẏaas', 'criança'],
      ['Yuus / Muyar', 'esposa / marido'],
    ],
  },
];
