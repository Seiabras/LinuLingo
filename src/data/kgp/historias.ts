import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaingang — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas numa aldeia (ẽmã) numa terra indígena kaingang do sul do Brasil — a Terra Indígena
 * Xapecó, em Santa Catarina, uma das maiores e citada na página do povo kaingang no ISA
 * (pib.socioambiental.org/pt/Povo:Kaingang). Nenhum caminho da história termina sem uma resposta: toda
 * escolha errada (`wrong`) explica o engano e deixa o jogador no mesmo nó, para tentar de novo.
 */
export const STORIES_KGP: StorySeed[] = [
  {
    id: 'kgp-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Inh kanhgág: chegando à ẽmã',
    emoji: '🪶',
    summary: 'Você chega a uma aldeia (ẽmã) na Terra Indígena Xapecó, em Santa Catarina, e se apresenta a Kófa Vãfag.',
    cultural_context:
      'As fontes consultadas para este curso não registram uma palavra fixa para “oi” em kaingang: por isso, como fariam pessoas reais numa primeira conversa, você e Kófa Vãfag se apresentam pela identidade do povo (“kanhgág”) e pela família — não há nenhuma saudação inventada aqui.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ã kanhgág?',
        translation: 'Você, kaingang?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Inh kanhgág.', translation: 'Eu, kaingang.', next: 'apresentacao' },
          { text: 'Pỹn mág.', translation: 'Cobra grande.', wrong: 'Kófa Vãfag perguntou sobre você, não sobre uma cobra. Responda com “Inh kanhgág” (eu, kaingang).' },
        ],
      },
      apresentacao: {
        text: 'Hẽ ã rãnhrãj?',
        translation: 'Qual é o seu trabalho? (lit. “qual você trabalho”)',
        emoji: '😊',
        choices: [
          { text: 'Inh ẽkré krãn.', translation: 'Eu planto plantas.', next: 'familia' },
          { text: 'Inh kyfe.', translation: 'Eu, bebida de milho.', wrong: 'Isso não é um trabalho — tente “Inh ẽkré krãn” (eu planto plantas) ou outra frase com um verbo.' },
        ],
      },
      familia: {
        text: 'Ã panh, nỹ nĩ?',
        translation: 'Seu pai e sua mãe estão (vivos)?',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Eẽ, inh panh, nỹ mág.', translation: 'Sim, meu pai e minha mãe (são) grandes/importantes.', next: 'final_bo' },
          { text: 'Inh gĩr mrir.', translation: 'Minha criança (é) feliz.', next: 'final_bo' },
          { text: 'Goj kavéj.', translation: 'Água suja.', wrong: 'Isso não responde sobre a sua família. Tente falar de “panh” (pai), “nỹ” (mãe) ou “gĩr” (criança).' },
        ],
      },
      final_bo: {
        text: 'Mrir! Ẽmã ki eîg nĩ.',
        translation: 'Que bom! Fique na aldeia conosco (lit. “aldeia em fique”).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa chegada!', message: 'Kófa Vãfag sorri: você se apresentou em kaingang e já é bem-vindo na ẽmã.' },
      },
    },
    glossary: [
      ['kanhgág', 'pessoa kaingang, povo kaingang'],
      ['rãnhrãj', 'trabalho, tarefa'],
      ['panh / nỹ', 'pai / mãe'],
    ],
  },
  {
    id: 'kgp-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'O pinhão e a mata',
    emoji: '🌰',
    summary: 'Kófa Vãfag te leva à mata de araucárias para colher pinhão (fág) e te mostra os bichos do caminho.',
    cultural_context:
      'O pinhão (fág) é um alimento tradicional dos kaingang, colhido na mata de araucárias do planalto sul-brasileiro e assado no fogo (pĩ) — um costume (vẽjykre) que atravessa gerações, dos ancestrais (jógjóg ve) até hoje.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hẽ tag? Fág?',
        translation: 'O que é isto? Pinhão?',
        emoji: '🌰',
        choices: [
          { text: 'Eẽ, fág mág.', translation: 'Sim, pinhão grande.', next: 'mata' },
          { text: 'Pó.', translation: 'Pedra.', wrong: 'Kófa Vãfag está mostrando um pinhão (fág), não uma pedra (pó). Responda “Eẽ, fág mág.”' },
        ],
      },
      mata: {
        text: 'Pỹn sãn inh! Ã kuprĩg nĩ?',
        translation: 'Pisei numa cobra! Você está bem? (lit. “você espírito está”)',
        emoji: '🐍',
        choices: [
          { text: 'Eẽ, inh mrir.', translation: 'Sim, eu (estou) feliz/bem.', next: 'bichos' },
          { text: 'Mĩg mág.', translation: 'Onça grande.', wrong: 'Isso não responde se você está bem. Diga “Eẽ, inh mrir” (sim, estou bem) ou algo parecido.' },
        ],
      },
      bichos: {
        text: 'Hẽ tag? Fãfãn, kasor?',
        translation: 'O que é isto? Tatu, cachorro?',
        emoji: '🦔',
        choices: [
          { text: 'Fãfãn mrir!', translation: 'Tatu feliz!', next: 'final_bo' },
          { text: 'Kasor mrir!', translation: 'Cachorro feliz!', next: 'final_bo' },
          { text: 'Goj ki nĩ.', translation: 'Está na água.', wrong: 'Isso não nomeia o bicho que vocês veem. Escolha “fãfãn” (tatu) ou “kasor” (cachorro).' },
        ],
      },
      final_bo: {
        text: 'Mrir! Ẽg fág krãn.',
        translation: 'Que bom! Vamos colher pinhão (lit. “nós pinhão plantamos/colhemos”).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia na mata!', message: 'Você e Kófa Vãfag voltam para a ẽmã com pinhão para assar no fogo — e você já reconhece bichos e plantas da mata em kaingang.' },
      },
    },
    glossary: [
      ['fág', 'pinhão, pinheiro (araucária)'],
      ['pỹn / mĩg', 'cobra / onça'],
      ['fãfãn / kasor', 'tatu / cachorro'],
    ],
  },
];
