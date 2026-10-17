import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaingang, uma por subnível, do A1.1 ao A2.2.
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
          // “hỹ’ỹ” (sim): Zilli 2024, p. 79; Felisbino e Silveira 2022, p. 56
          { text: "Hỹ'ỹ, inh panh, nỹ mág.", translation: 'Sim, meu pai e minha mãe (são) grandes/importantes.', next: 'final_bo' },
          { text: 'Inh gĩr mrir.', translation: 'Minha criança (é) feliz.', next: 'final_bo' },
          { text: 'Goj kavéj.', translation: 'Água suja.', wrong: 'Isso não responde sobre a sua família. Tente falar de “panh” (pai), “nỹ” (mãe) ou “gĩr” (criança).' },
        ],
      },
      final_bo: {
        // Felisbino e Silveira 2022, p. 57 (“Hỹ, kỹ tóg há tĩ.” ‘É, então está bom!’)
        text: 'Hỹ, kỹ tóg há tĩ.',
        translation: 'É, então está bom!',
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
          { text: "Hỹ'ỹ, fág mág.", translation: 'Sim, pinhão grande.', next: 'mata' },
          { text: 'Pó.', translation: 'Pedra.', wrong: 'Kófa Vãfag está mostrando um pinhão (fág), não uma pedra (pó). Responda “Hỹ\'ỹ, fág mág.”' },
        ],
      },
      mata: {
        text: 'Pỹn sãn inh! Ã kuprĩg nĩ?',
        translation: 'Pisei numa cobra! Você está bem? (lit. “você espírito está”)',
        emoji: '🐍',
        choices: [
          { text: "Hỹ'ỹ, inh mrir.", translation: 'Sim, eu (estou) feliz/bem.', next: 'bichos' },
          { text: 'Mĩg mág.', translation: 'Onça grande.', wrong: 'Isso não responde se você está bem. Diga “Hỹ\'ỹ, inh mrir” (sim, estou bem) ou algo parecido.' },
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
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Todas as falas em kaingang são frases das fontes, com a página ao lado: Felisbino e Silveira,
  // Signum 25(3), 2022 = FS22; Ferro (UEL, 2021) = FE21; Lima (UEL, 2023) = LI23; Zilli (UEL, 2024) =
  // ZI24. Quando uma fala junta duas frases, cada uma tem a sua fonte. Variedade: kaingang do Paraná.
  {
    id: 'kgp-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ũ nỹ gãr kó? Quem comeu o milho?',
    emoji: '🌽',
    summary: 'Na casa da tia, em Karỹnĩnh (Apucaraninha), todo mundo some e o milho também. Responda às perguntas e descubra o que aconteceu.',
    cultural_context:
      'As perguntas desta história são as que as pesquisas da Universidade Estadual de Londrina gravaram com falantes do Paraná: o “mỹ” da pergunta de sim ou não, o “ũ nỹ” do “quem” e as respostas “hỹ\'ỹ” (sim) e “ha\'” (não sei). A conversa começa como nas mensagens que Felisbino e Silveira (2022) registraram: perguntando se a pessoa está bem.',
    start: 'inicio',
    nodes: {
      inicio: {
        // FS22 p. 56
        text: 'Ã mỹ há?',
        translation: 'Você está bem?',
        emoji: '👋',
        choices: [
          // FS22 p. 56 (K9)
          { text: "Hỹ'ỹ, há inh jẽ.", translation: 'Sim, estou bem.', next: 'irmao' },
          // ZI24 p. 65
          { text: 'Nejé.', translation: 'De jeito nenhum.', wrong: 'A tia só perguntou se você está bem. “Nejé” é um “de jeito nenhum” rude. Responda “Hỹ\'ỹ, há inh jẽ.” (sim, estou bem).' },
        ],
      },
      irmao: {
        // FS22 p. 58 (“Há inh jẽ gé.” ‘Também estou bem.’) + ZI24 p. 74 (frase 87, de Felisbino 2024)
        text: 'Há inh jẽ gé. Hẽ tá ã régre vỹ jẽ hỹn?',
        translation: 'Também estou bem. Onde estará o seu irmão?',
        emoji: '🧑',
        choices: [
          // ZI24 p. 74
          { text: "Ha'.", translation: 'Não sei.', next: 'pai' },
          // FE21 p. 79
          { text: 'Pirã vỹ mro.', translation: 'O peixe nadou.', wrong: 'A tia perguntou onde está o seu irmão (“hẽ tá” é “onde”). Se você não sabe, diga “Ha\'.” (não sei).' },
        ],
      },
      pai: {
        // ZI24 p. 75 (frase 89, de Felisbino 2024)
        text: 'Ã jóg vỹ hẽ ra vyr?',
        translation: 'Para onde o seu pai foi?',
        emoji: '👨',
        choices: [
          // ZI24 p. 75
          { text: 'Ki inh kagtĩg nĩ.', translation: 'Eu não sei.', next: 'milho' },
          // FE21 p. 80
          { text: 'Escola ra fi vỹr.', translation: 'Ela foi para a escola.', wrong: '“Fi” é “ela”, mas a pergunta é sobre o seu pai (“jóg”). Se não sabe, responda “Ki inh kagtĩg nĩ.” (eu não sei).' },
        ],
      },
      milho: {
        // FE21 p. 76
        text: 'Ũ nỹ gãr kó?',
        translation: 'Quem comeu o milho?',
        emoji: '🌽',
        choices: [
          // LI23 p. 58 (Almeida 2008)
          { text: 'Gĩr vỹ fág kó.', translation: 'O menino comeu o pinhão.', next: 'final_pinhao' },
          // FE21 p. 73
          { text: 'Hoghog vỹ pẽngre fi tén.', translation: 'O cachorro matou a galinha.', next: 'final_galinha' },
          // FE21 p. 73
          { text: 'Pivinh vỹ kasĩn kó.', translation: 'O gato comeu o rato.', wrong: 'Isso conta o que o gato comeu, e a tia quer saber quem comeu o milho. Fale do menino (“gĩr”) ou do cachorro (“hoghog”).' },
        ],
      },
      final_pinhao: {
        // FS22 p. 57
        text: 'Hỹ, kỹ tóg há tĩ.',
        translation: 'É, então está bom!',
        emoji: '🌰',
        ending: {
          tone: 'bom',
          title: 'Mistério resolvido!',
          message: 'O menino não comeu o milho: comeu pinhão. A tia ri, e você respondeu a todas as perguntas com “hỹ\'ỹ”, “ha\'” e frases inteiras.',
        },
      },
      final_galinha: {
        // FE21 p. 82
        text: 'Pẽngre fi tãnh tũg nĩ!',
        translation: 'Não mate a galinha!',
        emoji: '🐔',
        ending: {
          tone: 'bom',
          title: 'Culpa do cachorro!',
          message: 'O milho sumiu e o cachorro ainda pegou a galinha. A tia sai gritando com ele, e você contou tudo em kaingang.',
        },
      },
    },
    glossary: [
      ['Ã mỹ há?', 'você está bem?'],
      ["hỹ'ỹ / ha'", 'sim / não sei'],
      ['hẽ tá / hẽ ra', 'onde / para onde'],
      ['ũ nỹ', 'quem (fazendo a ação)'],
      ['jóg / régre', 'pai / irmão'],
    ],
  },
  {
    id: 'kgp-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ã kakã kyku rỹ! Um dia de ordens',
    emoji: '📣',
    summary: 'Você passa o dia com a tia (titija), que não para de dar ordens: lavar o rosto, cuidar da mandioca, vestir a blusa. No fim, ela te chama para sair.',
    cultural_context:
      'As ordens da tia usam as marcas que Wiesemann descreveu e que Lima (2023) e Ferro (2021) ouviram em Apucaraninha: “rỹ” no fim para “faça agora” e “ker … hẽ” para “de jeito nenhum”. Quem recebe a ordem não aparece na frase: o “ã” de “Ã kakã kyku rỹ!” é o “seu” do rosto.',
    start: 'inicio',
    nodes: {
      inicio: {
        // FE21 p. 81
        text: 'Ã kakã kyku rỹ!',
        translation: 'Limpe o seu rosto!',
        emoji: '🧼',
        choices: [
          // ZI24 p. 79
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'cozinha' },
          // ZI24 p. 65
          { text: 'Nejé.', translation: 'De jeito nenhum.', wrong: '“Nejé” é a recusa mais rude, e a tia só pediu para você limpar o rosto. Aceite com “Hỹ\'ỹ.”' },
        ],
      },
      cozinha: {
        // LI23 p. 73, ex. 30
        text: 'Kagré fár kufé rỹ kỹ pĩ kãra rãg.',
        translation: 'Tire a casca da mandioca e ponha no fogo.',
        emoji: '🍠',
        choices: [
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'mesa' },
          // FE21 p. 82
          { text: 'Pẽngre fi tãnh tũg nĩ!', translation: 'Não mate a galinha!', wrong: 'Ninguém falou de galinha: a tia pediu para tirar a casca da mandioca (“kagré”) e pôr no fogo (“pĩ”).' },
        ],
      },
      mesa: {
        // FE21 p. 82, ex. 62
        text: 'Ker kagrã hẽ!',
        translation: 'Não comam tudo!',
        emoji: '🍽️',
        choices: [
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'frio' },
          // LI23 p. 58 (Almeida 2008)
          { text: 'Gĩr vỹ fág kó.', translation: 'O menino comeu o pinhão.', wrong: '“Ker … hẽ” é uma proibição: a tia está dizendo para não comer tudo. Contar que o menino comeu não responde. Diga “Hỹ\'ỹ.”' },
        ],
      },
      frio: {
        // LI23 p. 73, ex. 29
        text: 'Ã mruja tu rỹ kusãg jé ti ke mũ.',
        translation: 'Vista a blusa porque vai esfriar.',
        emoji: '🧥',
        choices: [
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'saida' },
          // FE21 p. 82
          { text: 'Nũr rỹ, João!', translation: 'Durma, João!', wrong: 'Essa é outra ordem, e para o João. A tia pediu para você vestir a blusa (“mruja”). Diga “Hỹ\'ỹ.”' },
        ],
      },
      saida: {
        // ZI24 p. 79 (quadro 12)
        text: 'Ã mỹ inh mré tĩg mũ?',
        translation: 'Você vai comigo?',
        emoji: '🚶',
        choices: [
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'final_vamos' },
          // ZI24 p. 60
          { text: 'Vó.', translation: 'Não.', next: 'final_casa' },
        ],
      },
      final_vamos: {
        // LI23 p. 73, ex. 28
        text: 'Mũ jé!',
        translation: 'Vamos!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Saindo com a tia!',
          message: 'Você obedeceu às ordens do dia, entendeu o “rỹ” e o “ker … hẽ”, e agora sai com a tia.',
        },
      },
      final_casa: {
        // FS22 p. 57
        text: 'Hỹ, kỹ tóg há tĩ.',
        translation: 'É, então está bom.',
        emoji: '🏠',
        ending: {
          tone: 'bom',
          title: 'Um “vó” educado',
          message: 'Você recusou com “vó”, o não suave, e a tia aceitou numa boa. Com “nejé”, ela talvez ficasse brava.',
        },
      },
    },
    glossary: [
      ['… rỹ', 'faça agora (marca de ordem)'],
      ['ker … hẽ', 'não faça de jeito nenhum'],
      ['kagré / pĩ', 'mandioca / fogo'],
      ['mruja', 'blusa'],
      ['mũ jé', 'vamos'],
    ],
  },
];
