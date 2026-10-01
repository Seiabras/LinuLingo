import type { StorySeed } from '../types';

/**
 * Histórias interativas do xavante — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas na Terra Indígena Pimentel Barbosa, no leste do Mato Grosso — também chamada, na língua
 * xavante, de Étênhiritipá (grafia confirmada na busca interna da Wikipédia em português, nos artigos
 * “Xavantes” e “Tatu-canastra”; a variante acadêmica “Etéñitépa” aparece numa citação sobre demografia
 * xavante no artigo “Povos indígenas do Brasil” da mesma enciclopédia). As falas usam só construções
 * diretamente atestadas nas fontes (ver gramatica.ts e vocabulario.ts): o modelo de pronome “___ hã
 * a’uwẽ” e o par pergunta-resposta com os interrogativos documentados (“e wa?”, “e mahãta?”). Nenhum
 * caminho da história termina sem resposta: toda escolha errada (`wrong`) explica o engano e deixa o
 * jogador no mesmo nó, para tentar de novo.
 */
export const STORIES_XAV: StorySeed[] = [
  {
    id: 'xav-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Wa hã a\'uwẽ: chegando à aldeia',
    emoji: '🪶',
    summary: 'Você chega a uma aldeia na Terra Indígena Pimentel Barbosa (Étênhiritipá), no leste do Mato Grosso, e se apresenta.',
    cultural_context:
      'As fontes consultadas para este curso não registram uma palavra fixa para “oi” em xavante. Por isso, como fariam pessoas reais numa primeira conversa, você e quem te recebe se apresentam pela identidade do povo (“a\'uwẽ”) — não há nenhuma saudação inventada aqui.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'A hã a\'uwẽ?',
        translation: 'Você é xavante?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Wa hã a\'uwẽ.', translation: 'Eu sou xavante.', next: 'pergunta' },
          { text: 'Ĩpré.', translation: 'Vermelho.', wrong: 'Isso não responde à pergunta sobre quem você é. Responda com “Wa hã a\'uwẽ” (eu sou xavante).' },
        ],
      },
      pergunta: {
        text: 'E wa?',
        translation: 'Quem é (você)?',
        emoji: '😊',
        choices: [
          { text: 'Aibâ.', translation: 'Um homem.', next: 'familia' },
          { text: 'Pi\'õ.', translation: 'Uma mulher.', next: 'familia' },
          { text: 'Uzâ.', translation: 'Fogo.', wrong: 'Isso não nomeia uma pessoa. Responda “Aibâ” (homem) ou “Pi\'õ” (mulher).' },
        ],
      },
      familia: {
        text: 'E wa? Ĩĩmaama?',
        translation: 'E quem é? Seu pai?',
        emoji: '👨‍🦳',
        choices: [
          { text: 'Ĩĩmaama.', translation: 'Meu pai.', next: 'final_bo' },
          { text: 'Wapté.', translation: 'Um pré-iniciado (jovem que mora na hö).', next: 'final_bo' },
          { text: 'Dato.', translation: 'Olho.', wrong: 'Isso não responde quem está com você. Fale de alguém: “ĩĩmaama” (meu pai) ou “wapté” (um pré-iniciado).' },
        ],
      },
      final_bo: {
        text: 'Ĩwẽ! Hö ki nhamra.',
        translation: 'Que bom! Sente-se na hö (casa dos solteiros) conosco.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa chegada!', message: 'Você se apresentou em xavante e já é bem-vindo na aldeia de Étênhiritipá.' },
      },
    },
    glossary: [
      ['a\'uwẽ', 'pessoa, povo xavante (autodesignação)'],
      ['aibâ / pi\'õ', 'homem / mulher'],
      ['ĩĩmaama', 'meu pai'],
    ],
  },
  {
    id: 'xav-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Água, fogo e as toras de buriti',
    emoji: '🏃',
    summary: 'Um morador da aldeia te mostra a água do rio das Mortes, o fogo do pátio central e te convida para ver a uiwede, a corrida de toras.',
    cultural_context:
      'A uiwede (corrida de revezamento com toras de buriti) é uma das competições cerimoniais mais conhecidas dos xavante, segundo a página do povo no ISA (Instituto Socioambiental): os times carregam toras pesadas em longos trechos, numa disputa amistosa entre as duas metades da aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'E mahãta? Â?',
        translation: 'Cadê? A água?',
        emoji: '💧',
        choices: [
          { text: 'Â.', translation: 'A água.', next: 'fogo' },
          { text: 'Wede.', translation: 'Árvore.', wrong: 'Isso não é água. Confirme apontando: “Â” (a água).' },
        ],
      },
      fogo: {
        text: 'E mahãta? Uzâ?',
        translation: 'Cadê? O fogo?',
        emoji: '🔥',
        choices: [
          { text: 'Uzâ.', translation: 'O fogo.', next: 'corrida' },
          { text: 'Wasi.', translation: 'Estrela.', wrong: 'Isso não é o fogo do pátio. Responda sobre o fogo: “Uzâ” (o fogo).' },
        ],
      },
      corrida: {
        text: 'E wa? Uiwede!',
        translation: 'Quem (vem)? A uiwede (corrida de toras)!',
        emoji: '🏃',
        choices: [
          { text: 'Aibâ, pi\'õ.', translation: 'Homens e mulheres.', next: 'final_bo' },
          { text: 'Wapté.', translation: 'Os pré-iniciados.', next: 'final_bo' },
          { text: 'Dasiri.', translation: 'Coração.', wrong: 'Isso não responde quem participa da corrida. Diga quem corre: “aibâ, pi\'õ” (homens, mulheres) ou “wapté” (os pré-iniciados).' },
        ],
      },
      final_bo: {
        text: 'Ĩwẽ! Da-nho\'re za.',
        translation: 'Que bom! Depois vai ter da-nho\'re (canto e dança coletivos).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia na aldeia!', message: 'Você viu a água, o fogo e a uiwede — e já reconhece palavras da natureza e da cultura xavante em Étênhiritipá.' },
      },
    },
    glossary: [
      ['â / uzâ', 'água / fogo'],
      ['uiwede', 'corrida de revezamento com toras de buriti'],
      ['da-nho\'re', 'canto e dança coletivos'],
    ],
  },
];
