import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaingang, uma por subnível, do A1.1 ao B1.4.
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
    summary: 'Você chega a uma aldeia (ẽmã) numa terra indígena kaingang e conversa com Kófa Vãfag, um ancião.',
    cultural_context:
      'As fontes consultadas para este curso não registram uma palavra fixa para “oi” em kaingang. Nas conversas que Felisbino e Silveira (2022) gravaram no Paraná, a conversa abre perguntando se a pessoa está bem e de onde ela é. É o que Kófa Vãfag faz aqui: todas as falas são de falantes reais, com a fonte.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Revisto em 17/10/2026 (“Ã kanhgág?”, “Inh kanhgág.” e “Pỹn mág.” eram montadas). Felisbino e
        // Silveira, Signum 25(3), 2022, p. 56; “Pỹn sãn inh.” é do verbete “sãn” (Wiktionary, de Wiesemann).
        text: 'Ã mỹ há?',
        translation: 'Você está bem?',
        emoji: '🙋‍♀️',
        choices: [
          { text: "Hỹ'ỹ, há inh jẽ.", translation: 'Sim, estou bem.', next: 'apresentacao' },
          { text: 'Pỹn sãn inh.', translation: 'Pisei numa cobra.', wrong: 'Kófa Vãfag só perguntou se você está bem. Responda com “Hỹ\'ỹ, há inh jẽ.” (sim, estou bem).' },
        ],
      },
      apresentacao: {
        // Revisto em 17/10/2026: “Hẽ ã rãnhrãj?” e “Inh ẽkré krãn.” não tinham fonte. Pergunta e
        // resposta de Felisbino e Silveira, Signum 25(3), 2022, p. 57 (pesquisadora e K11, da TI
        // Marrecas, que diz “ijóg” para “eu”).
        text: 'Ã tỹ hẽ tá ke nam?',
        translation: 'De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Há ijóg tỹ Maréka ki ke nĩ.', translation: 'Eu sou daqui de Marrecas. (como responde um falante de Marrecas, PR)', next: 'familia' },
          // Zilli (UEL, 2024), p. 54 (Almeida 2008)
          { text: 'Hoghog vỹ ogsã prãg tũ nĩ.', translation: 'O cachorro não mordeu o cateto.', wrong: 'Kófa Vãfag perguntou de onde você é (“hẽ tá” é “onde”). Responda com um lugar, como o falante de Marrecas: “Há ijóg tỹ Maréka ki ke nĩ.”' },
        ],
      },
      familia: {
        // Revisto em 17/10/2026 (“Ã panh, nỹ nĩ?” e as respostas eram montadas). Zilli (UEL, 2024), p. 75
        // (frase 89, de Felisbino 2024); Felisbino e Silveira, Signum, 2022, p. 58 (K14); Ferro (UEL, 2021), p. 79.
        text: 'Ã jóg vỹ hẽ ra vyr?',
        translation: 'Para onde o seu pai foi?',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Ki inh kagtĩg nĩ.', translation: 'Eu não sei.', next: 'final_bo' },
          { text: 'Inh nỹ fi tóg inh kanhrãn é.', translation: 'A minha mãe me ensinava.', next: 'final_bo' },
          { text: 'Pirã vỹ mro.', translation: 'O peixe nadou.', wrong: 'Isso não responde sobre a sua família. Kófa Vãfag perguntou do seu pai (“jóg”): se não sabe, diga “Ki inh kagtĩg nĩ.”.' },
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
      ['Ã mỹ há?', 'Você está bem?'],
      ['hẽ tá', 'onde'],
      ['jóg / nỹ', 'pai / mãe'],
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
        // Revisto em 17/10/2026 (“Hẽ tag? Fág?” e “Hỹ'ỹ, fág mág.” eram montadas). Lima (UEL, 2023), p. 73
        // (“Mũ jé!”); Zilli (UEL, 2024), p. 79 (“Hỹ'ỹ.”) e p. 65 (“Nejé.”, a recusa mais rude).
        text: 'Mũ jé!',
        translation: 'Vamos!',
        emoji: '🌰',
        choices: [
          { text: "Hỹ'ỹ.", translation: 'Sim.', next: 'mata' },
          { text: 'Nejé.', translation: 'De jeito nenhum.', wrong: '“Nejé” é uma recusa rude, e Kófa Vãfag só está te chamando para a mata. Aceite com “Hỹ\'ỹ.”.' },
        ],
      },
      mata: {
        // Revisto em 17/10/2026: “Ã kuprĩg nĩ?” e “Hỹ'ỹ, inh mrir.” não tinham fonte. “Pỹn sãn inh” vem
        // do verbete “sãn” (Wiktionary); “Ã mỹ há?” e “Hỹ'ỹ, há inh jẽ.”, de Felisbino e Silveira 2022, p. 56.
        text: 'Pỹn sãn inh! Ã mỹ há?',
        translation: 'Pisei numa cobra! Você está bem?',
        emoji: '🐍',
        choices: [
          { text: "Hỹ'ỹ, há inh jẽ.", translation: 'Sim, estou bem.', next: 'bichos' },
          // D'Angelis, “A língua Kaingang”, p. 5
          { text: 'Kofá tóg pỹn tãnh.', translation: 'O velho matou a cobra.', wrong: 'Ninguém matou a cobra, e Kófa Vãfag quer saber se você está bem. Diga “Hỹ\'ỹ, há inh jẽ.” (sim, estou bem).' },
        ],
      },
      bichos: {
        // Revisto em 17/10/2026 (“Hẽ tag? Fãfãn, kasor?”, “Fãfãn mrir!” e “Kasor mrir!” eram montadas).
        // Zilli (UEL, 2024), p. 79 (“Ã mỹ vé?”); Tabosa, tese (UEL, 2014), p. 164 e p. 173; Lima (UEL, 2023),
        // p. 73 (“Ha tĩg.”).
        text: 'Ã mỹ vé?',
        translation: 'Você viu?',
        emoji: '🐆',
        choices: [
          { text: 'Mĩg vỹ éhé ja ti.', translation: 'A onça era grande.', next: 'final_bo' },
          { text: 'Kasor vỹ pỹn pra.', translation: 'O cachorro mordeu a cobra.', next: 'final_bo' },
          { text: 'Ha tĩg.', translation: 'Pode ir.', wrong: '“Ha tĩg” é a licença para alguém ir embora. Kófa Vãfag perguntou se você viu algum bicho: conte o que viu.' },
        ],
      },
      final_bo: {
        // Revisto em 17/10/2026: “Ẽg fág krãn” não tinha fonte (e “krãn” é plantar, não colher).
        // Lima, dissertação UEL, 2023, p. 73 (“Mũ jé!” ‘Vamos!’).
        text: 'Mũ jé!',
        translation: 'Vamos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia na mata!', message: 'Você e Kófa Vãfag voltam para a ẽmã com pinhão para assar no fogo — e você já reconhece bichos e plantas da mata em kaingang.' },
      },
    },
    glossary: [
      ['mũ jé', 'vamos'],
      ['pỹn / mĩg', 'cobra / onça'],
      ['kasor', 'cachorro'],
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
  // ══ B1.1 a B1.4 (17/10/2026) ══
  // As histórias do B1 são as narrativas glosadas de Ferro (UEL, 2021, p. 85–99), contadas por falantes de
  // Apucaraninha, e o livro “Vãnh kãmĩ grugru” (2020), pelas frases que Lima (UEL, 2023), Zilli (UEL,
  // 2024) e Souza (UEL, 2022) citam com tradução. Cada fala traz a página e o número da linha da
  // narrativa (D1, D2…). As cenas seguem a ordem das narrativas; as escolhas erradas são linhas de outras
  // narrativas ou de outras fontes, com a página. Nenhuma frase foi montada.
  {
    id: 'kgp-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Kỹpeonãto: o jogo de sábado',
    emoji: '⚽',
    summary: 'Um jogador de Apucaraninha conta o campeonato de sábado, em que o próprio irmão jogou contra ele. Escolha, a cada passo, a frase que continua a história.',
    cultural_context:
      'É a narrativa D de Ferro (2021), contada em Apucaraninha. Repare em como cada frase começa: “kỹ” (então), “hãra” (mas), e em como o “tóg” volta a apontar para quem já está na história. E repare nas palavras do futebol que vieram do português: “mora” (bola), “kỹpeonãto” (campeonato), “patan” (empatar).',
    start: 'inicio',
    nodes: {
      inicio: {
        // FE21 p. 92, D1
        text: 'Kỹ ẽg tóg, samano ẽn kã, mora he jé kãmũjẽg gé mỹr, kỹpeonãto to.',
        translation: 'Então, naquele sábado, viemos para jogar bola, no campeonato.',
        emoji: '⚽',
        choices: [
          // FE21 p. 92, D2
          { text: 'Meio dia e quarenta e cinco ki ẽg tóg comesan.', translation: 'Começou ao meio-dia e quarenta e cinco.', next: 'irmao' },
          // FE21 p. 94, D10
          { text: 'Kỹ hã vẽ.', translation: 'Então é isso.', wrong: '“Kỹ hã vẽ.” é como os narradores de Ferro terminam a história, e ela mal começou. Diga primeiro a hora em que o jogo começou.' },
        ],
      },
      irmao: {
        // FE21 p. 92, D3
        text: 'Hãra inh régré tóg inh kato mora he gé.',
        translation: 'Mas meu irmão jogou contra mim.',
        emoji: '🧑‍🤝‍🧑',
        choices: [
          // FE21 p. 92, D4
          { text: 'Ha ẽg tóg vẽnhmãg nĩ ẽg tóg ke gé vẽ, hãra ag tóg ẽg mré patan, patan e gé.', translation: 'Estávamos ganhando, mas eles empataram, empataram.', next: 'placar' },
          // FE21 p. 87, B3
          { text: 'Kỹ inh sir vẽnh kypé.', translation: 'Então, tomei banho.', wrong: 'Essa é de outra narrativa, a da manhã de quem vai para a universidade. Aqui o jogo está no meio: conte o placar.' },
        ],
      },
      placar: {
        // FE21 p. 93, D5
        text: 'Kỹ ẽg quatro a quatro ki patan gé, jogo ti.',
        translation: 'Então empatamos de quatro a quatro.',
        emoji: '🟰',
        choices: [
          // FE21 p. 93, D6
          { text: 'Ẽg tỹ quatro a três kã nĩ ra, inh régre tóg sir ag mỹ patan gé sir.', translation: 'Estávamos de quatro a três, e meu irmão empatou para eles.', next: 'empate' },
          // FE21 p. 74
          { text: 'Ẽg mỹ jogo ki vẽnhmã?', translation: 'Nós ganhamos o jogo?', wrong: 'É você quem conta o jogo, e ele terminou empatado. Explique como saiu o empate.' },
        ],
      },
      empate: {
        // FE21 p. 93, D7
        text: 'Kỹ ag tóg ẽg mré patan sir.',
        translation: 'Então eles empataram com nós.',
        emoji: '😤',
        choices: [
          // FE21 p. 93, D8 e D9
          { text: 'Kỹ ẽg tóg sir jãpry kỹ sir, ẽg time ag hã to jũgjũ tĩ gé sir.', translation: 'Então subimos, e nós brigamos com o nosso time.', next: 'briga' },
          // FE21 p. 94, D10
          { text: 'Kỹ hã vẽ.', translation: 'Então é isso.', next: 'final_curto' },
        ],
      },
      briga: {
        // FE21 p. 93, D9
        text: '“Ke kórég tavĩ ãjag nỹtĩ mỹr”, he kỹ.',
        translation: '“Vocês não sabem jogar bola”, dissemos.',
        emoji: '🗯️',
        choices: [
          // FE21 p. 94, D10
          { text: 'Kỹ hã vẽ.', translation: 'Então é isso.', next: 'final' },
          // FE21 p. 92, D1
          { text: 'Kỹ ẽg tóg, samano ẽn kã, mora he jé kãmũjẽg gé mỹr, kỹpeonãto to.', translation: 'Então, naquele sábado, viemos para jogar bola, no campeonato.', wrong: 'Assim a história volta para o começo. Ela já chegou ao fim: feche com “Kỹ hã vẽ.”.' },
        ],
      },
      final: {
        // FE21 p. 94, D10
        text: 'Kỹ hã vẽ.',
        translation: 'Então é isso.',
        emoji: '🏁',
        ending: {
          tone: 'bom',
          title: 'Quatro a quatro!',
          message: 'Você contou o campeonato inteiro, do começo à briga com o próprio time, ligando as frases com “kỹ”, “hãra” e “tóg”, como o narrador de Apucaraninha.',
        },
      },
      final_curto: {
        // FE21 p. 94, D10
        text: 'Kỹ hã vẽ.',
        translation: 'Então é isso.',
        emoji: '🏁',
        ending: {
          tone: 'bom',
          title: 'Empate e fim de papo',
          message: 'Você parou no empate e fechou a história com “Kỹ hã vẽ.”. Na narrativa de Ferro, o time ainda brigou: “vocês não sabem jogar bola!”.',
        },
      },
    },
    glossary: [
      ['samano', 'sábado'],
      ['mora he', 'jogar bola'],
      ['vẽnhmãg / patan', 'ganhar / empatar'],
      ['hãra', 'mas'],
      ['Kỹ hã vẽ.', 'Então é isso.'],
    ],
  },
  {
    id: 'kgp-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Hẽ ra inh vyr? O sábado na casa da irmã',
    emoji: '⛪',
    summary: 'Pedem a Manu que conte o que fez no sábado. Ela pensa, lembra da casa da irmã, das primas, da igreja e da noite inteira andando com elas.',
    cultural_context:
      'É a narrativa C de Ferro (2021), que começa com uma conversa: a entrevistadora pede “venha contar para mim”, e a narradora pergunta a si mesma o que fez. Repare no “tỹ” de “ẽg tỹ jãnjãn jé” (para cantarmos): é o sujeito numa frase que depende de outra, como nas relativas.',
    start: 'inicio',
    nodes: {
      inicio: {
        // FE21 p. 89, C1
        text: 'Manu inh mré tónh jé kãtĩg.',
        translation: 'Manu, venha contar para mim.',
        emoji: '🎙️',
        choices: [
          // FE21 p. 89, C2
          { text: 'Hỹ mỹ hamẽ? Samano ka inh hẽ ri ké? “Hẽ ra inh vyr vẽ?”', translation: 'É sério isso? O que eu fiz no sábado? “Onde eu fui?”', next: 'pensar' },
          // FE21 p. 91, C15
          { text: 'Kỹ hã vẽ ha.', translation: 'Então é isso.', wrong: 'Essa frase fecha a história, e você ainda nem começou. Pergunte a si mesma o que fez no sábado.' },
        ],
      },
      pensar: {
        // FE21 p. 89, C3
        text: 'He sóg mũ... Nỹ ke ma to jykrén... Samano kã inh... ha?',
        translation: 'Estou dizendo... Deixa eu pensar... No sábado eu... Não sei?',
        emoji: '🤔',
        choices: [
          // FE21 p. 90, C5
          { text: 'Sexta, samano ka inh, inh regre fi ĩn ra vyr, inh régre fi ĩn ra.', translation: 'Na sexta e no sábado eu fui à casa da minha irmã, à casa da minha irmã.', next: 'primas' },
          // FE21 p. 92, D1
          { text: 'Kỹ ẽg tóg, samano ẽn kã, mora he jé kãmũjẽg gé mỹr, kỹpeonãto to.', translation: 'Então, naquele sábado, viemos para jogar bola, no campeonato.', wrong: 'Esse é o sábado de outro narrador, o do campeonato. Manu passou o sábado com a família: lembre da casa da irmã.' },
        ],
      },
      primas: {
        // FE21 p. 90, C6
        text: 'Kỹ ẽg tóg ta ũn e fag vigvé, inh kankã fag.',
        translation: 'Então encontramos muitas meninas, minhas primas.',
        emoji: '👭',
        choices: [
          // FE21 p. 90, C7
          { text: 'Hãra ẽg tóg sir, rãké e kỹ ẽg tóg kutyg kỹ greja mĩ kãmũ mũ gé.', translation: 'Mas entardeceu e fomos também para a igreja.', next: 'igreja' },
          // FE21 p. 88, B6
          { text: 'Ijóg vỹ ijo vyr ũnĩmũ ũ kãmĩ.', translation: 'Meu pai foi antes de mim com outro ônibus.', wrong: 'Ninguém pegou ônibus nesta história: Manu estava com as primas. Conte para onde vocês foram quando entardeceu.' },
        ],
      },
      igreja: {
        // FE21 p. 90, C8
        text: 'Greja mĩ, ẽg tỹ jãnjãn jé.',
        translation: 'Na igreja, para cantarmos.',
        emoji: '🎶',
        choices: [
          // FE21 p. 91, C10
          { text: 'Ag tỹ jãnjãn kar kỹ ẽg tóg sir mũ mũ.', translation: 'Depois que eles terminaram de cantar, nós fomos.', next: 'noite' },
          // FE21 p. 86, A3
          { text: 'Kar kỹ fag tóg rekrejo ki pastel mré renhte kronkron já nĩ.', translation: 'Depois elas tomaram leite com pastel no recreio.', wrong: 'Recreio é de escola, e era sábado à noite, na igreja. Conte o que fizeram depois de cantar.' },
        ],
      },
      noite: {
        // FE21 p. 91, C11
        text: 'Kutỹ kãmĩ ẽg tóg mũg tĩ.',
        translation: 'Andamos pela noite.',
        emoji: '🌙',
        choices: [
          // FE21 p. 91, C12
          { text: 'Mũ ki kurãgrãg, mũ ki ẽg kurãgrãg.', translation: 'Andamos até amanhecer, andamos até amanhecer.', next: 'feliz' },
          // FE21 p. 91, C14
          { text: 'Kỹ inh kurã ra hã jun.', translation: 'Então eu cheguei de manhã.', next: 'final' },
        ],
      },
      feliz: {
        // FE21 p. 91, C13
        text: 'Hãra tóg sir ẽg mỹ sér tĩgtĩ, ẽg tỹ jagnẽ mré mũ kar nĩ kỹ.',
        translation: 'Mas é porque ficamos felizes, quando andamos todas juntas.',
        emoji: '😊',
        choices: [
          // FE21 p. 91, C14
          { text: 'Kỹ inh kurã ra hã jun.', translation: 'Então eu cheguei de manhã.', next: 'final' },
          // FE21 p. 90, C4
          { text: 'Mẽmỹ inh jun tũ nĩ.', translation: 'Parece que eu não cheguei.', wrong: 'Manu chegou, sim: de manhã. Conte a hora em que ela voltou para casa.' },
        ],
      },
      final: {
        // FE21 p. 91, C15
        text: 'Kỹ hã vẽ ha.',
        translation: 'Então é isso.',
        emoji: '🌅',
        ending: {
          tone: 'bom',
          title: 'Até amanhecer!',
          message: 'Você contou o sábado de Manu: a casa da irmã, as primas, a igreja e a noite inteira andando, até chegar em casa de manhã.',
        },
      },
    },
    glossary: [
      ['régre fi', 'irmã'],
      ['kankã fag', 'primas'],
      ['greja', 'igreja'],
      ['jãnjãn', 'cantar'],
      ['kurãgrãg', 'amanhecer'],
    ],
  },
  {
    id: 'kgp-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Ũnĩmũ: a manhã de ir estudar',
    emoji: '🚌',
    summary: 'Antes do sol nascer, alguém de Apucaraninha se arruma para estudar na universidade, em Londrina. Ajude a contar a manhã, do banho ao ônibus.',
    cultural_context:
      'É a narrativa B de Ferro (2021). O narrador usa “vãhã” onde o português diz “quando” e se corrige no meio da frase (“vó vẽ!”, não é isso!), como se faz numa conversa de verdade. Repare também em “isóg” e “sóg”: o “eu” com a marca “tóg”, do jeito que se fala em Apucaraninha.',
    start: 'inicio',
    nodes: {
      inicio: {
        // FE21 p. 87, B1
        text: 'Isỹ vãhã uel ra vẽnhránrán tĩg isóg kusãg ki nĩ, 5 óra ki.',
        translation: 'Quando eu comecei a estudar na UEL, acordava cedo, às 5 horas.',
        emoji: '⏰',
        choices: [
          // FE21 p. 87, B2
          { text: 'Vó vẽ! 4 e... 4 e 20 ki, mẽ mỹ!', translation: 'Não é isso! Às 4 e... 4 e 20, acho!', next: 'banho' },
          // FE21 p. 97, E20
          { text: 'Nomĩgo tũ mỹ?', translation: 'Não era domingo?', wrong: 'Ninguém estuda no domingo. O narrador está tentando lembrar a hora em que acordava: corrija a hora.' },
        ],
      },
      banho: {
        // FE21 p. 87, B3
        text: 'Kỹ isóg sir... Kỹ inh sir vẽnh kypé.',
        translation: 'Então eu daí... Então, tomei banho.',
        emoji: '🛁',
        choices: [
          // FE21 p. 87, B4
          { text: 'Kar kỹ inh kur rĩnh kar kỹ sir vãhã inh vẽnhrá vigve.', translation: 'Depois vesti minhas roupas, daí dei uma olhada nos meus cadernos.', next: 'onibus' },
          // FE21 p. 89, B11
          { text: 'Kỹ isóg sir vẽnhránrán kar kỹ kãtĩ mũ.', translation: 'Depois de estudar, voltei.', wrong: 'Ainda é cedo demais para voltar: o narrador acabou de tomar banho. O que vem antes de sair de casa?' },
        ],
      },
      onibus: {
        // FE21 p. 87–88, B5
        text: 'Kỹ sóg sir vãhã vẽnh kãn kar kỹ, kỹ inh sir ũnĩmũ jãvãnh jé kutẽ, pũto ra ijóg mré.',
        translation: 'Então, depois de me aprontar, saí para esperar o ônibus no ponto, com meu pai.',
        emoji: '🚏',
        choices: [
          // FE21 p. 88, B6
          { text: 'Kỹ ijóg sir... vó vẽ! Ijóg vỹ ijo vyr ũnĩmũ ũ kãmĩ.', translation: 'Então meu pai... não é isso! Meu pai foi antes de mim, com outro ônibus.', next: 'pai' },
          // FE21 p. 90, C7
          { text: 'Hãra ẽg tóg sir, rãké e kỹ ẽg tóg kutyg kỹ greja mĩ kãmũ mũ gé.', translation: 'Mas entardeceu e fomos também para a igreja.', wrong: 'Ainda é de madrugada, e a manhã é de estudo, não de igreja. Conte o que aconteceu no ponto de ônibus.' },
        ],
      },
      pai: {
        // FE21 p. 88, B7
        text: 'Kỹ inh kar kỹ nĩ kỹ vyr ti nón, vẽnhrárán jé.',
        translation: 'Então, depois, eu fui atrás dele, para estudar.',
        emoji: '🚶',
        choices: [
          // FE21 p. 88, B8
          { text: 'Jãvo tóg sir rãnhrãj jé tĩg.', translation: 'E ele foi trabalhar.', next: 'aula' },
          // FE21 p. 92, D3
          { text: 'Hãra inh régré tóg inh kato mora he gé.', translation: 'Mas meu irmão jogou contra mim.', wrong: 'Não tem jogo nesta manhã. Conte para onde foi o pai, que pegou o outro ônibus.' },
        ],
      },
      aula: {
        // FE21 p. 88, B10
        text: 'Professora ũ fi mré isóg vẽnhránrán uel tá.',
        translation: 'Estudei com outra professora lá na UEL.',
        emoji: '👩‍🏫',
        choices: [
          // FE21 p. 89, B11
          { text: 'Kỹ isóg sir vẽnhránrán kar kỹ kãtĩ mũ.', translation: 'Depois de estudar, voltei.', next: 'final' },
          // FE21 p. 87, B1
          { text: 'Isỹ vãhã uel ra vẽnhránrán tĩg isóg kusãg ki nĩ, 5 óra ki.', translation: 'Quando eu comecei a estudar na UEL, acordava cedo, às 5 horas.', wrong: 'Assim a manhã começa de novo. O narrador já estudou: conte que ele voltou.' },
        ],
      },
      final: {
        // FE21 p. 89, B12
        text: 'Kỹ hã vẽ.',
        translation: 'Então é isso.',
        emoji: '🏠',
        ending: {
          tone: 'bom',
          title: 'De volta para casa',
          message: 'Você contou a manhã inteira em ordem: acordar às 4 e 20, o banho, a roupa, o ônibus com o pai, a aula na UEL e a volta.',
        },
      },
    },
    glossary: [
      ['vãhã', 'quando (nesta narrativa)'],
      ['óra', 'hora'],
      ['vẽnh kypé', 'tomar banho'],
      ['ũnĩmũ', 'ônibus'],
      ['vẽnhránrán', 'estudar'],
    ],
  },
  {
    id: 'kgp-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Vãnh kãmĩ grugru: brilhos na floresta',
    emoji: '🍄',
    summary: 'De noite, na floresta amazônica, Noemia e seus amigos procuram os fungos que brilham no escuro. No dia seguinte, a conversa é sobre a suçuarana.',
    cultural_context:
      'As falas são do livro “Vãnh kãmĩ grugru” (2020), a versão kaingang de “Brilhos na Floresta”, traduzida por Damaris Kanĩnsãnh Felisbino, de Apucaraninha. Só entram as frases que Lima (2023), Zilli (2024) e Souza (2022) citam com tradução, seguindo a história do livro. “Mĩg”, a onça, aparece na tradução de Zilli como suçuarana.',
    start: 'inicio',
    nodes: {
      inicio: {
        // LI23 p. 73, ex. 28 (IS20)
        text: "Sỹ venh há tĩ! Nũ'ẽmja, mũ jé?",
        translation: 'Ah! Eu quero ver! Vamos, Noemia?',
        emoji: '🌳',
        choices: [
          // LI23 p. 73, ex. 28 (IS20)
          { text: 'Mũ jé!', translation: 'Vamos!', next: 'luz' },
          // ZI24 p. 55, ex. 12 (IS20, p. 27)
          { text: 'Ẽg mãg tũ fi nĩ.', translation: 'Ela não nos atacou.', wrong: 'Ainda não apareceu bicho nenhum: o amigo está chamando para ver os brilhos na floresta. Aceite com “Mũ jé!”.' },
        ],
      },
      luz: {
        // LI23 p. 71–72, ex. 22 e 25 (IS20: “Ve há han nĩ rỹ, ti tỹ hẽ tá grugrug mũ tá, ãjag néj grugrug rỹ
        // kỹ vemnĩ nén tỹ hẽn ri ke mũ ti.”; Lima escreve “hẽn tá”)
        text: 'Ve há han nĩ rỹ, ti tỹ hẽ tá grugrug mũ tá, ãjag néj grugrug rỹ kỹ vemnĩ nén tỹ hẽn ri ke mũ ti.',
        translation: 'Olhem bem onde está brilhando, acendam a lanterna e vejam o que acontece.',
        emoji: '🔦',
        choices: [
          // ZI24 p. 65, ex. 47 (IS20, p. 35; o livro escreve “jã tũ”, Zilli, “jãtũ”)
          { text: 'Kỹ isỹ nejé sỹ vãnh kãmĩ tĩg mág mũ ra tag ve jãtũ nĩ nẽ hỹn, kutyg kỹ?', translation: 'Então, por que será que eu não vi isso quando andei outras vezes na floresta à noite?', next: 'nunca' },
          // LI23 p. 73, ex. 28
          { text: 'Mũ jé!', translation: 'Vamos!', wrong: 'Vocês já estão na floresta. Agora é olhar os brilhos e se espantar com eles.' },
        ],
      },
      nunca: {
        // ZI24 p. 67, ex. 55 (IS20, p. 34)
        text: 'Tag to inh jykrén jãtũ jẽ vẽ.',
        translation: 'Nunca tinha pensado nisso.',
        emoji: '💭',
        choices: [
          // ZI24 p. 56, ex. 13 (IS20, p. 27)
          { text: 'Ẽg tỹ ẽpỹ tá nén vég mũ kri ã finh ke tũ nĩ!', translation: 'Você não vai acreditar no que vimos lá na roça!', next: 'onca' },
          // ZI24 p. 75, ex. 88 (IS20, p. 34)
          { text: 'Ũmm... ver inh ki kagtĩg nĩ.', translation: 'Hum... ainda eu não sei.', wrong: 'A noite já acabou, e há uma novidade do dia seguinte. Conte o que vocês viram lá na roça.' },
        ],
      },
      onca: {
        // ZI24 p. 55, ex. 12 (IS20, p. 27)
        text: 'Ẽg mãg tũ fi nĩ.',
        translation: 'Ela não nos atacou.',
        emoji: '🐆',
        choices: [
          // ZI24 p. 56, ex. 14 (IS20, p. 55)
          { text: 'Mĩg tỹ vãhã ge vég tũ vẽ!', translation: 'Para a suçuarana, não tem nenhuma novidade nisso!', next: 'final' },
          // SO22 p. 42, ex. 17 (IS20)
          { text: 'Kỹ inh kanhkã ag vỹ tóg jógóg ti mũmẽg han.', translation: 'Então os meus parentes espantaram o gavião.', next: 'final' },
          // ZI24 p. 58, ex. 21 (IS20, p. 34)
          { text: 'Ũmm... tũm.', translation: 'Humm... não.', wrong: 'Um “não” solto não continua a conversa. Fale da suçuarana ou conte a história dos parentes e do gavião.' },
        ],
      },
      final: {
        // LI23 p. 73, ex. 28 (IS20)
        text: 'Mũ jé!',
        translation: 'Vamos!',
        emoji: '✨',
        ending: {
          tone: 'bom',
          title: 'A floresta brilha',
          message: 'Você viu os fungos brilharem na floresta, à luz da lanterna, e no dia seguinte a conversa foi sobre a suçuarana e os bichos da mata. Tudo em kaingang, com as frases do livro.',
        },
      },
    },
    glossary: [
      ['vãnh kãmĩ', 'na floresta'],
      ['grugrug', 'brilhar'],
      ['néj', 'lanterna'],
      ['mĩg', 'onça (suçuarana)'],
      ['jykrén', 'pensar'],
    ],
  },
];
