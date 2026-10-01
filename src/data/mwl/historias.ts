import type { StorySeed } from '../types';

/** Histórias interativas do mirandês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_MWL: StorySeed[] = [
  {
    id: 'mwl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Buonos dies an Miranda',
    emoji: '👋',
    summary: 'Você conhece Ana na praça de Miranda de l Douro e faz a sua primeira conversa em mirandês.',
    cultural_context: 'Miranda de l Douro é a sede do concelho onde o mirandês é oficial junto do português desde 1999.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Buonos dies! Eu sou Ana. Qual ye l sou nome?',
        translation: 'Bom dia! Eu sou Ana. Qual é o seu nome?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Eu sou Lucia.', translation: 'Eu sou Lucia.', next: 'nome' },
          { text: 'Adius!', translation: 'Tchau!', wrong: 'Ana acabou de te perguntar o nome: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Oulá, Lucia! Adonde stá?',
        translation: 'Oi, Lucia! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Eu sou de San Paulo.', translation: 'Eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Tengo un armano.', translation: 'Eu tenho um irmão.', wrong: 'Isso não responde de onde você é. Use “Eu sou de…”.' },
        ],
      },
      final_bun: {
        text: 'Que guapo! Bienbenida a Miranda!',
        translation: 'Que legal! Bem-vinda a Miranda!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un buono cumeço!', message: 'Ana sorri: você fez a sua primeira conversa em mirandês.' },
      },
    },
    glossary: [
      ['buonos dies', 'bom dia'],
      ['qual ye l sou nome?', 'qual é o seu nome?'],
      ['eu sou de', 'eu sou de'],
      ['bienbenida', 'bem-vinda'],
    ],
  },
  {
    id: 'mwl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ua cena an família',
    emoji: '👪',
    summary: 'Pedro, um amigo de Sendin, pergunta pela sua família e convida você para a casa dele.',
    cultural_context: 'Sendin (Sendim) é uma das maiores aldeias onde o mirandês ainda se fala no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Oulá! Tenes armanos?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Si, tengo un armano i ua armana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'armanos' },
          { text: 'La mie casa ye grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “tengo…”.' },
        ],
      },
      armanos: {
        text: 'Guapo! Bienbenido a mie casa!',
        translation: 'Que legal! Bem-vindo à minha casa!',
        emoji: '🍽️',
        choices: [
          { text: 'Si, oubrigado!', translation: 'Sim, obrigado!', next: 'final_bun' },
          { text: 'Eu sou de San Paulo.', translation: 'Eu sou de São Paulo.', wrong: 'Pedro te deu as boas-vindas: responda com “si, oubrigado”.' },
        ],
      },
      final_bun: {
        text: 'Delei! Tengo pan i queiso pa todos.',
        translation: 'Ótimo! Tenho pão e queijo para todos.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Un combite!', message: 'Você foi convidado para a casa de Pedro em Sendin.' },
      },
    },
    glossary: [
      ['armano / armana', 'irmão / irmã'],
      ['tengo', 'eu tenho'],
      ['si', 'sim'],
      ['delei', 'ótimo, às direitas'],
    ],
  },
];
