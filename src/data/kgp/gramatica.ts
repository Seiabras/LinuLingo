import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kaingang, do A1.1 ao A2.2. No A1, as informações
 * vêm da Wikipédia em português e em inglês sobre a língua kaingang (que descrevem a fonologia, a
 * ortografia de Ursula Wiesemann, os pronomes e a ordem das palavras) e das entradas de gramática do
 * Wiktionary (partículas, posposições), que citam o “Dicionário Kaingang-Português Português-Kaingang”
 * de Wiesemann (2ª ed., 2011). Onde as fontes não detalham uma regra (por exemplo, a predicação
 * nominal — como se diz “X é Y” sem verbo “ser”), o curso evita afirmar algo não confirmado.
 */
export const GRAMMAR_KGP: GrammarTopic[] = [
  {
    id: 'kgp-g1',
    level: 'A1.1',
    title: 'Vogais centrais e nasalização: a ortografia de Wiesemann',
    emoji: '🔤',
    summary:
      'O kaingang tem 9 vogais orais e 5 nasais — mais do que o português — incluindo duas vogais centrais (á e y) sem equivalente fácil no português. A ortografia oficial, criada pela linguista Ursula Wiesemann, tem 28 letras e é a usada neste curso.',
    sections: [
      {
        heading: 'As vogais do kaingang',
        text:
          'Além das cinco vogais do português (a, e, i, o, u), o kaingang tem mais duas vogais orais, chamadas de “centrais” porque a língua fica no meio da boca ao pronunciá-las, nem na frente (como em “i”) nem atrás (como em “u”): “á” (IPA /ə/, parecida com o “a” final de “casa” dito rápido) e “y” (IPA /ɨ/, sem nenhum equivalente parecido no português). Cada uma dessas 7 vogais orais também tem uma versão nasalada — mas só 5 delas são usadas nessa forma nasal: ã, ẽ, ĩ, ũ, ỹ.',
        table: {
          head: ['Letra', 'Som (aproximado)', 'Exemplo'],
          rows: [
            ['á', 'vogal central, sem igual no português (IPA /ə/)', 'régre (dois)'],
            ['y', 'vogal central alta, puxada para trás (IPA /ɨ/)', 'kysã (lua)'],
            ['ã, ẽ, ĩ, ũ, ỹ', 'vogal nasalada, como em “mãe” ou “bom”', 'nĩjẽ (nariz), kanhgág (kaingang)'],
            ["'", 'oclusiva glotal: uma pequena parada no ar', "pén'ó (batata)"],
          ],
        },
        examples: [
          ['Kanhgág', '“pessoa, gente” — a autodesignação do povo e da língua, com a vogal nasal ã.'],
          ['Kysã sĩnvĩ.', '“Lua bonita” — repare no “y”, a vogal central alta.'],
        ],
      },
      {
        heading: 'Consoantes que mudam de som',
        text:
          'Várias consoantes do alfabeto de Wiesemann representam mais de um som, dependendo da posição na palavra — por exemplo, a letra “g” no final de sílaba costuma soar como uma nasal no fundo da garganta (parecida com o “n” de “banco”), não como o “g” de “gato”. A letra “s” é sempre pronunciada como o “ch” do português, nunca como “s” ou “z”.',
        examples: [
          ['Mág', '“grande” — o “g” final soa nasalado, não como em “gato”.'],
          ['Sĩnvĩ', '“bonito” — o “s” inicial soa como “ch”.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar pronunciar “á” e “y” como vogais do português: são sons novos, que não existem nem no português nem nas outras línguas indígenas do app (tupi antigo, guarani) — vale a pena ouvir com atenção antes de tentar repetir.',
      'Ler o “g” final sempre como em “gato”: em kaingang, no fim de sílaba, costuma soar como uma nasal.',
    ],
    quiz: [
      {
        question: 'Quantas vogais nasais o kaingang tem, segundo a Wikipédia em inglês sobre a língua?',
        options: ['5 (ã, ẽ, ĩ, ũ, ỹ)', '7, as mesmas que as orais', '3 (ã, ẽ, õ)'],
        answer: '5 (ã, ẽ, ĩ, ũ, ỹ)',
        explanation: 'O kaingang tem 9 vogais orais, mas só 5 delas também aparecem nasaladas: ã, ẽ, ĩ, ũ, ỹ (não existe “õ” nasal no kaingang).',
      },
      {
        question: 'O que torna “á” e “y” vogais “centrais”?',
        options: [
          'A língua fica no meio da boca ao pronunciá-las, nem na frente nem atrás',
          'Elas só aparecem no centro da palavra, nunca no início',
          'Elas são as vogais mais usadas da língua',
        ],
        answer: 'A língua fica no meio da boca ao pronunciá-las, nem na frente nem atrás',
        explanation: '“Central” é um termo de fonética: descreve onde a língua se posiciona na boca. “Á” e “y” do kaingang não têm equivalente fácil no português.',
      },
    ],
  },
  {
    id: 'kgp-g2',
    level: 'A1.1',
    title: 'Os pronomes pessoais',
    emoji: '🙋',
    summary:
      'O kaingang tem uma única série de pronomes pessoais (inh, ã, ti, fi, ẽg, ãjag, ag, fag), sem distinguir um “nós” que inclui quem ouve de um “nós” que exclui, como fazem o tupi antigo e o guarani — e distingue “ele”/“ela” só na 3ª pessoa.',
    sections: [
      {
        heading: 'A tabela de pronomes',
        text: 'Segundo a gramática descrita na Wikipédia em português sobre a língua kaingang (seção Pronomes pessoais):',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['inh', 'eu'],
            ['ã', 'tu, você'],
            ['ti', 'ele'],
            ['fi', 'ela'],
            ['ẽg', 'nós'],
            ['ãjag', 'vocês'],
            ['ag', 'eles'],
            ['fag', 'elas'],
          ],
        },
        examples: [
          ['Inh kanhgág.', '“Eu, kaingang.”'],
          ['Ti kófa, fi sĩnvĩ.', '“Ele é idoso, ela é bonita” (lit. “ele idoso, ela bonita”).'],
        ],
      },
      {
        heading: 'Gênero só na 3ª pessoa',
        text:
          'Diferente do português, o kaingang não marca gênero gramatical em substantivos nem em adjetivos (não existe “o/a”, “bonito/bonita”): a única distinção de gênero que a língua faz é entre “ti” (ele) e “fi” (ela), e entre “ag” (eles) e “fag” (elas), nos pronomes de 3ª pessoa.',
        examples: [
          ['Ti mág.', '“Ele grande.” — “mág” (grande) não muda para “ele” ou “ela”.'],
          ['Fi mág.', '“Ela grande.” — mesma palavra “mág”, sem nenhuma terminação feminina.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma feminina de adjetivos como “mág” (grande) ou “mrir” (feliz): elas não existem — o kaingang não flexiona adjetivo por gênero.',
      'Confundir “ã” (tu/você) com “ag” (eles): são parecidos de grafia, mas pessoas gramaticais diferentes (2ª do singular × 3ª do plural masculino).',
    ],
    quiz: [
      {
        question: 'Onde o kaingang marca a diferença entre “ele” e “ela”?',
        options: ['Só nos pronomes de 3ª pessoa (ti/fi, ag/fag)', 'Em todos os substantivos, como no português', 'Nos adjetivos, com uma terminação própria'],
        answer: 'Só nos pronomes de 3ª pessoa (ti/fi, ag/fag)',
        explanation: 'O kaingang não tem gênero gramatical em substantivo nem em adjetivo: a única distinção é nos pronomes de 3ª pessoa.',
      },
    ],
  },
  {
    id: 'kgp-g3',
    level: 'A1.2',
    title: 'Ordem das palavras: sujeito, objeto, verbo',
    emoji: '🧭',
    summary:
      'O kaingang é uma língua SOV: o verbo vem por último na frase. Os verbos não se conjugam por pessoa (não existe uma terminação diferente para “eu planto” e “ele planta”), e a língua usa posposições (depois do substantivo), não preposições.',
    sections: [
      {
        text:
          'Em português, o verbo costuma vir entre o sujeito e o objeto (“ele plantou feijão”). Em kaingang, o verbo vem por último: “Ti tóg rãgró krãn huri” é, literalmente, algo como “ele [sujeito] feijão [objeto] plantou-já [verbo]”. A partícula “tóg”, depois do sujeito, e “huri”, depois do verbo, ajudam a marcar a frase, mas a tradução simples para o português é “ele plantou feijão” — essa é a frase de exemplo usada no artigo da Wikipédia em inglês sobre a língua.',
        examples: [
          ['Ti tóg rãgró krãn huri.', '“Ele plantou feijão.”'],
          ['Kofá tóg pỹn tãnh.', '“O velho matou a cobra.”'],
          ['Mĩg vỹ venhvó tĩ.', '“A onça corre” (com a partícula de aspecto habitual “tĩ”).'],
        ],
      },
      {
        heading: 'Posposições, não preposições',
        text:
          'Em vez de uma palavra como “em” antes do substantivo (preposição), o kaingang põe a palavra correspondente depois (posposição). “Ki” é uma dessas posposições, e significa “em, dentro de”.',
        examples: [['Goj ki', '“na água” (lit. “água em”)'], ['Inh goj ki nĩ.', '“Eu estou na água.”']],
      },
    ],
    pitfalls: [
      'Esperar o verbo no meio da frase, como em português: no kaingang ele vem por último.',
      'Tentar conjugar o verbo por pessoa (“eu planto”, “tu plantas”…): o verbo kaingang não muda — quem faz a ação aparece no pronome ou no sujeito, antes dele, não numa terminação do verbo.',
      'Colocar a posposição antes do substantivo, como se fosse uma preposição do português: “ki” vem sempre depois (“goj ki”, nunca “ki goj”).',
    ],
    quiz: [
      {
        question: 'Em qual posição da frase o verbo aparece no kaingang?',
        options: ['No final (ordem sujeito-objeto-verbo)', 'No início da frase', 'Sempre logo depois do sujeito'],
        answer: 'No final (ordem sujeito-objeto-verbo)',
        explanation: 'O kaingang segue a ordem SOV: sujeito, depois objeto, e o verbo por último — diferente do português (SVO).',
      },
      {
        question: 'Como se diz “na água” em kaingang?',
        options: ['Goj ki (a posposição vem depois)', 'Ki goj (como uma preposição do português)', 'Goj, sem nenhuma marca'],
        answer: 'Goj ki (a posposição vem depois)',
        explanation: '“Ki” é uma posposição: aparece depois do substantivo que ela acompanha, nunca antes.',
      },
    ],
  },
  {
    id: 'kgp-g4',
    level: 'A1.2',
    title: 'Numerais e um jeito diferente de contar',
    emoji: '🔢',
    summary:
      'O kaingang tem numerais próprios de zero a cinco. Do seis em diante, eles se combinam a partir do cinco (“pénkar”): seis é “pénkar kri pir”, e dez é “pénkar mré pénkar”, cinco com cinco.',
    sections: [
      {
        heading: 'De zero a cinco',
        // Gonçalves e Ribeiro, “Alfabetizando em língua kaingang” (Cegraf UFG, 2024), p. 30 (lista de 0 a 30,
        // na ortografia de Wiesemann, TI Inhacorá, RS). A tabela da Wikipédia em português (que cita a
        // dissertação “Vënhnïkrén”) traz as mesmas palavras com o til trocado por trema (“tëntü”,
        // “vënhkëgra”) e “pég'kar”; o curso segue a cartilha. Ferro (UEL, 2021, p. 94) registra “tágtũ”
        // (três) numa fala de Apucaraninha.
        text:
          'A cartilha “Alfabetizando em língua kaingang” (2024), feita na Terra Indígena Inhacorá (RS), traz os numerais na escrita das escolas. No Paraná, o três aparece também como “tágtũ” (Ferro, 2021, numa fala de Apucaraninha).',
        table: {
          head: ['Kaingang', 'Número'],
          rows: [
            ['tũ', 'zero'],
            ['pir', 'um'],
            ['régre', 'dois'],
            ['tẽgtũ', 'três'],
            ['vẽnhkẽgra', 'quatro'],
            ['pénkar', 'cinco'],
            ['pénkar kri pir', 'seis'],
            ['pénkar mré pénkar', 'dez'],
          ],
        },
        examples: [
          ['pénkar kri régre', '“sete” (cartilha de Inhacorá, p. 30)'],
          ['pénkar mré pénkar régre', '“vinte” (p. 30)'],
        ],
      },
      {
        heading: 'Régre: “dois” e também “irmão”',
        // Zilli (UEL, 2024), p. 74 (“ã régre” ‘seu irmão’, frase de Damaris Felisbino)
        text:
          'A palavra “régre” (dois) também quer dizer “irmão”. O contexto mostra qual dos dois sentidos é.',
        examples: [["Hẽ tá ã régre vỹ jẽ hỹn? — Ha'.", '“Onde estará o seu irmão? — Não sei.” (Zilli, 2024, p. 74)']],
      },
    ],
    pitfalls: [
      'Procurar uma palavra nova para cada número: do seis em diante, o kaingang monta os números a partir do cinco (“pénkar”): “pénkar kri pir” é seis.',
      'Achar que “régre” só serve como número: sozinha, a palavra também é usada para “irmão” ou “amigo”.',
    ],
    quiz: [
      {
        question: 'Como se diz “seis” na cartilha de Inhacorá?',
        options: ['pénkar kri pir', 'pénkar mré pénkar', 'tẽgtũ'],
        answer: 'pénkar kri pir',
        explanation: '“Pénkar kri pir” é seis. “Pénkar mré pénkar” (cinco com cinco) é dez, e “tẽgtũ” é três (Gonçalves e Ribeiro, 2024, p. 30).',
      },
      {
        question: 'Além de “dois”, o que mais “régre” pode significar?',
        options: ['Irmão, amigo', 'Grande', 'Água'],
        answer: 'Irmão, amigo',
        explanation: '“Régre” é ao mesmo tempo o numeral “dois” e um substantivo para “irmão” ou “amigo, companheiro do mesmo grupo”.',
      },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes, com a página impressa: Ferro, “Indicadores de sujeito na língua Kaingang” (UEL, 2021) =
  // FE21; Lima, “Imperativo na língua Kaingang” (UEL, 2023) = LI23; Zilli, “A morfossintaxe da negação
  // na língua Kaingang” (UEL, 2024) = ZI24; Felisbino e Silveira, Signum 25(3), 2022 = FS22; D'Angelis,
  // “A língua Kaingang” (Portal Kaingang) = DA. Os paradigmas e todas as frases são das fontes; nenhuma
  // frase foi montada. Variedade: kaingang do Paraná (sobretudo Apucaraninha); quando a fonte é de
  // outro lugar (Rio das Cobras, Wiesemann), isso vem dito.
  {
    id: 'kgp-g5',
    level: 'A2.1',
    title: 'Perguntas: “mỹ”, as palavras de pergunta e as respostas',
    emoji: '❓',
    summary:
      'A pergunta de sim ou não ganha “mỹ” logo depois de quem faz a ação. As perguntas com “quem”, “o que”, “onde” usam uma palavra de pergunta no lugar do “mỹ”. Para responder: “hỹ\'ỹ” (sim), “vó” (não), “nejé” (de jeito nenhum) e “ha\'” (não sei).',
    sections: [
      {
        heading: 'Sim ou não: “mỹ” em segundo lugar',
        // FE21 p. 72–74 (ex. 1–15) e p. 74 (a partícula fica no começo, contra a tendência das línguas
        // SOV de pô-la no fim; sem entonação própria, segundo a colaboradora)
        text:
          'Ferro (2021) mostra que a pergunta de sim ou não leva “mỹ” logo depois do sujeito, seja ele um nome ou um pronome. O verbo continua no fim. Muitas línguas com o verbo no fim põem a marca de pergunta no fim da frase; o kaingang a põe perto do começo, logo depois do sujeito. E, segundo a colaboradora de Ferro, a pergunta nem precisa de entonação diferente.',
        table: {
          head: ['Kaingang', 'Português', 'Página'],
          rows: [
            ['Ã mỹ to hé?', 'Você caiu?', 'Ferro, p. 74'],
            ['Ti mỹ to hé?', 'Ele caiu?', 'p. 74'],
            ['Fi mỹ to hé?', 'Ela caiu?', 'p. 74'],
            ['João mỹ pũ kó?', 'João comeu o pão?', 'p. 72'],
            ['Maria fi mỹ gãr to há nĩ?', 'Maria gosta de milho?', 'p. 72'],
            ['Ẽg mỹ jogo ki vẽnhmã?', 'Nós ganhamos o jogo?', 'p. 74'],
          ],
        },
        examples: [
          ['Ã mỹ tugtó to há nĩ?', '“Você gosta de ler?” (Ferro, p. 74)'],
          ['Tubarão ĩnhigenã ag mỹ jogo ki vẽnhmã?', '“O Tubarão Indígena ganhou o jogo?” — “ag” marca o plural (p. 73)'],
        ],
      },
      {
        heading: 'As palavras de pergunta',
        // FE21 p. 75–77 (ex. 16–29); ũ nỹ como sujeito, ũ sem nỹ quando não é o sujeito (p. 76)
        text:
          'Com uma palavra de pergunta, o “mỹ” sai. Atenção ao “quem”: quando a pessoa perguntada é quem faz a ação, diz-se “ũ nỹ”; quando não é, só “ũ”.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo (Ferro)'],
          rows: [
            ['ũ nỹ', 'quem (fazendo a ação)', 'Ũ nỹ gãr kó? — Quem comeu o milho? (p. 76)'],
            ['ũ', 'quem (sem fazer a ação)', 'Ũ mré fag vẽmén é? — Com quem elas conversaram? (p. 76)'],
            ['ne', 'o que', 'João vỹ ne kó? — O que João comeu? (p. 75)'],
            ['hẽra', 'para onde', 'Hẽra Maria fi vyr? — Aonde a Maria vai? (p. 75)'],
            ['hẽ tá', 'onde', 'Hẽ tá ti to hé? — Onde ele caiu? (p. 77)'],
            ['hẽ mĩ', 'por onde', 'Hẽ mĩ Pedro vỹ vyr? — Por onde Pedro foi? (p. 75)'],
            ['hẽ ri ken kỹ', 'por que; como', 'Ẽg tỹ hẽ ri ken kỹ jogo kren né? — Por que nós perdemos o jogo? (p. 77)'],
          ],
        },
      },
      {
        heading: 'Como responder',
        // ZI24 p. 60 (vó, mais suave e educado, Wiesemann 2011), p. 65 (nejé, mais rude), p. 74 (ha’),
        // p. 79 (quadro 12: hỹ’ỹ); p. 62 (vó no fim da pergunta “isto ou aquilo”, Tabosa 2014, p. 213)
        text:
          'Zilli (2024) reúne as respostas. “Hỹ\'ỹ” é o sim. “Vó” é o não suave, mais educado, segundo Wiesemann. “Nejé” também nega, mas de um jeito mais rude, como “de jeito nenhum”. E “ha\'” quer dizer “não sei”. O “vó” serve ainda para perguntar “isto ou aquilo?”: vai no fim, depois da segunda coisa.',
        examples: [
          ['Ã mỹ vé? — Vó.', '“Você viu? — Não.” (Wiesemann 2011, em Zilli, p. 60)'],
          ['Ã mỹ inh mré tĩg mũ? — Nejé.', '“Você vai comigo? — De jeito nenhum.” (Zilli, p. 65)'],
          ["Hẽ tá ã régre vỹ jẽ hỹn? — Ha'.", '“Onde estará seu irmão? — Não sei.” (Felisbino, em Zilli, p. 74)'],
          ['Ã mỹ kafe kron mũ, goj vó?', '“Você quer beber café ou água?” (Tabosa 2014, em Zilli, p. 62)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “mỹ” no fim da frase, como um “né?”: ele vem logo depois do sujeito (“Ã mỹ to hé?”).',
      'Usar “ũ nỹ” para qualquer “quem”: o “nỹ” só entra quando o “quem” faz a ação. “Ũ mré…” (com quem…) fica sem ele.',
      'Responder sempre com “nejé”: é mais rude que “vó”. Para um não simples, use “vó”.',
    ],
    quiz: [
      {
        question: 'Onde fica o “mỹ” na pergunta “Ã mỹ to hé?” (você caiu?)?',
        options: ['Logo depois do sujeito', 'No fim da frase', 'Antes do sujeito'],
        answer: 'Logo depois do sujeito',
        explanation: 'Ferro (2021) mostra o “mỹ” sempre na segunda posição, depois do sujeito, com o verbo no fim.',
      },
      {
        question: 'Qual é a resposta mais educada para dizer “não”?',
        options: ['Vó', 'Nejé', "Hỹ'ỹ"],
        answer: 'Vó',
        explanation: 'Segundo Wiesemann, citada por Zilli, “vó” é o não suave; “nejé” é mais rude; “hỹ\'ỹ” é o sim.',
      },
      {
        question: 'Como se pergunta “quem comeu o milho?”?',
        options: ['Ũ nỹ gãr kó?', 'Ũ mỹ gãr kó?', 'Ne gãr kó?'],
        answer: 'Ũ nỹ gãr kó?',
        explanation: 'Quando o “quem” é o sujeito, ele vem com “nỹ” (Ferro, p. 76).',
      },
    ],
  },
  {
    id: 'kgp-g6',
    level: 'A2.1',
    title: 'Quem faz a ação: “vỹ”, “tóg” e o pronome no fim',
    emoji: '🎯',
    summary:
      'Depois de um nome, o sujeito ganha uma palavrinha: “vỹ” ou “tóg”. Com um pronome, o jeito mais comum é outro: o pronome vai para o fim, depois do verbo. E as posposições (“ki”, “ra”, “mỹ”, “mré”) vêm depois da palavra, não antes.',
    sections: [
      {
        heading: '“vỹ” e “tóg” depois do nome',
        // FE21 p. 77–79 (vỹ em declarativas, opcional segundo a colaboradora); DA p. 5 (tóg e vỹ marcam o
        // sujeito; o objeto fica colado antes do verbo)
        text:
          'D\'Angelis explica que o kaingang marca o sujeito com uma palavra própria, como “tóg” ou “vỹ”, logo depois dele. O objeto fica colado no verbo, logo antes dele. Em Apucaraninha, a colaboradora de Ferro disse que o “vỹ” é opcional: “Maria fi jun.” também se diz.',
        examples: [
          ['Pirã vỹ mro.', '“O peixe nadou.” (Ferro, p. 79)'],
          ['Pivinh vỹ kasĩn kó.', '“O gato comeu o rato.” (p. 73)'],
          ['Kofá tóg pỹn tãnh.', '“O velho matou a cobra.” (D\'Angelis, p. 5)'],
          ['Maria fi jun.', '“Maria chegou.”, sem “vỹ” (Ferro, p. 78)'],
          ['Grũ vỹ ka kanẽ ki sym ké ka nĩno tá.', '“O tucano bicou frutas no alto da árvore.” (Oliveira, p. 78)'],
        ],
      },
      {
        heading: 'Com pronome: o pronome vai para o fim',
        // FE21 p. 80–81 (ex. 46–56: com sujeito pronominal, nenhum marcador; pronome depois do verbo);
        // LI23 p. 57 (Almeida 2008: ordem OVS com pronome, “gãr fãn kãn fi” ‘Ela já colheu o milho’)
        text:
          'Quando quem faz a ação é um pronome (eu, ele, ela, nós), Ferro mostra que ele costuma ir para o fim, depois do verbo, sem “vỹ”. Repare na negação: o pronome entra entre “tũ” (não) e “nĩ”.',
        table: {
          head: ['Kaingang', 'Português', 'Página (Ferro)'],
          rows: [
            ['Jun inh.', 'Eu cheguei.', 'p. 80'],
            ['Jun ti.', 'Ele chegou.', 'p. 80'],
            ['Jun fi.', 'Ela chegou.', 'p. 80'],
            ['Junjun ẽg.', 'Nós chegamos.', 'p. 80'],
            ['Pũ ko ti.', 'Ele comeu o pão.', 'p. 80'],
            ['Jun tũ ti nĩ.', 'Ele não chegou.', 'p. 80'],
          ],
        },
        examples: [['Escola ra fi vỹr.', '“Ela foi para a escola.” (Ferro, p. 80)']],
      },
      {
        heading: '“isỹ” e “isóg”: o “eu” junto com a marca',
        // FE21 p. 79 (isỹ < inh + tỹ, isóg < inh + tóg, registrado por Wiesemann 2011); FS22 p. 49 e
        // p. 58–59 (isóg em Barão de Antonina, Apucaraninha e Mococa; ijóg em Queimadas, Ivaí, Faxinal e
        // Marrecas; só em Rio das Cobras)
        text:
          '“Inh” (eu) com “tóg” vira “isóg”; com “tỹ”, vira “isỹ”. Felisbino e Silveira (2022) ouviram esse “eu” em oito terras indígenas do Paraná: “isóg” em Barão de Antonina, Apucaraninha e Mococa; “ijóg” em Queimadas, Ivaí, Faxinal e Marrecas; e “só” em Rio das Cobras. O curso fica com “isóg”, a forma de Apucaraninha e a que se escreve e se ensina nas escolas.',
        examples: [
          ['Isỹ jẽn ke vẽ.', '“Eu vou comer.” (Ferro, p. 79)'],
          ['Kỹ isóg ajag mỹ tag tóm mamẽ.', '“Então, eu estou falando isso.” (K3, Apucaraninha; Felisbino e Silveira, p. 55)'],
        ],
      },
      {
        heading: 'Posposições: “em”, “para”, “com” vêm depois',
        // DA p. 4 (goj ki, pó tỹ, ĩn ra, ti jóg mỹ); OL26 p. 88 (mré)
        text: 'O que o português diz antes da palavra (em, para, com), o kaingang diz depois. D\'Angelis dá estes exemplos:',
        table: {
          head: ['Kaingang', 'Português'],
          rows: [
            ['goj ki', 'na água'],
            ['pó tỹ', 'com uma pedra'],
            ['ĩn ra', 'para casa'],
            ['ti jóg mỹ', 'para o pai dele'],
          ],
        },
        examples: [
          ['Ijỹ fi vỹ kamó mré kagré han.', '“A mãe preparou sopa com banana e mandioca.” — “mré” (com) depois de “kamó” (Oliveira, p. 88)'],
          ['Gĩr vỹ tãnh kó farĩnh mré.', '“O menino comeu palmito com farinha.” (Oliveira, p. 92)'],
          ['Pénĩ vỹ sẽ ũ ag mré vĩ mũ.', '“A tartaruga está interagindo com outros animais.” (Oliveira, p. 83)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “vỹ” depois de um pronome numa frase simples: Ferro mostra que com pronome não entra marca (“Jun inh”, não “inh vỹ jun”).',
      'Separar o objeto do verbo: em kaingang ele fica colado logo antes do verbo (“pỹn tãnh”, matar a cobra).',
      'Achar que “isóg” é outra palavra: é “inh” (eu) com “tóg”. Em outras aldeias do Paraná se diz “ijóg” ou “só”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu cheguei”, segundo Ferro?',
        options: ['Jun inh.', 'Inh vỹ jun.', 'Inh mỹ jun.'],
        answer: 'Jun inh.',
        explanation: 'Com sujeito pronome, o pronome vai para o fim e não leva “vỹ” (Ferro, p. 80). “mỹ” é a marca de pergunta.',
      },
      {
        question: 'Onde fica “ra” (para) em “para casa”?',
        options: ['Depois: ĩn ra', 'Antes: ra ĩn', 'Não se usa'],
        answer: 'Depois: ĩn ra',
        explanation: 'O kaingang usa posposições: a palavra vem depois do nome (D\'Angelis, p. 4).',
      },
      {
        question: 'Em que terra indígena Felisbino e Silveira ouviram “só” no lugar de “isóg”?',
        options: ['Rio das Cobras', 'Apucaraninha', 'Mococa'],
        answer: 'Rio das Cobras',
        explanation: 'Em Apucaraninha e Mococa se diz “isóg”; em Rio das Cobras, “só” (Felisbino e Silveira, 2022).',
      },
    ],
  },
  {
    id: 'kgp-g7',
    level: 'A2.2',
    title: 'Ordens, pedidos e proibições',
    emoji: '📣',
    summary:
      'A ordem não diz o “você”: tem objeto, verbo e uma marca no fim. “Rỹ” (ou “ra”) é “faça agora”; “nĩ” é “faça quando puder”, mais educado. Para proibir, entra “tũg” antes da marca, ou o par “ker … hẽ”.',
    sections: [
      {
        heading: '“rỹ” e “nĩ”',
        // LI23 p. 59–60 (Wiesemann 2011, p. 19: ra ‘faça agora!’, -m nĩ ~ nĩ ‘faça em qualquer tempo!’);
        // p. 71–72 (ra em Wiesemann; rỹ em Rio das Cobras e Apucaraninha hoje); p. 76 (nĩ mais polido);
        // FE21 p. 81–82
        text:
          'Wiesemann chamou “ra” de “faça agora!” e “nĩ” de “faça em qualquer tempo!”. Lima (2023) ouviu os falantes jovens de Rio das Cobras e de Apucaraninha dizerem “rỹ” onde Wiesemann escreveu “ra”. E concluiu que “nĩ” também é mais educado: é a marca do pedido e do conselho.',
        table: {
          head: ['Kaingang', 'Português', 'Fonte'],
          rows: [
            ['Nũr rỹ, João!', 'Durma, João!', 'Ferro, p. 82'],
            ['Nũgnũr rỹ!', 'Durmam!', 'Ferro, p. 82'],
            ['Ã kakã kyku rỹ!', 'Limpe o seu rosto!', 'Ferro, p. 81'],
            ['Ã néj grug rỹ!', 'Acenda a sua vela!', 'Lima, p. 71 (Apucaraninha)'],
            ['Ã néj grũg ra!', 'Acenda a sua vela!', 'Wiesemann 2011, p. 22, em Lima, p. 71'],
          ],
        },
        examples: [
          ['Ãjag tarefa hynhan rỹ, gĩngĩr.', '“Façam suas tarefas, crianças!” — para vários, o verbo muda: “hynhan” (Ferro, p. 81)'],
          ['Ã mruja tu rỹ kusãg jé ti ke mũ.', '“Vista a blusa porque vai esfriar.” (Lima, p. 73)'],
        ],
      },
      {
        heading: 'Pedidos sem marca, “ha tĩg” e “mũ jé”',
        // LI23 p. 66–68 (Almeida 2008, p. 102–103: pedidos sem marca); p. 73 (ha tĩg; Mũ jé!); FE21 p. 81
        text:
          'Um pedido gentil pode vir sem marca nenhuma, só com o verbo no fim. “Ha tĩg” é a licença para ir embora (“pode ir”). E “mũ jé” é o convite: “vamos!”.',
        examples: [
          ['Kumẽr hã vĩ.', '“Fale devagar.” (Almeida 2008, em Lima, p. 66)'],
          ['Inh mỹ goj mã.', '“Pegue água para mim.” (Almeida 2008, em Lima, p. 68)'],
          ['— Sĩg ta. — Ha tĩg.', '“— Estou indo embora. — Pode ir.” (Lima, p. 73)'],
          ['Mũjé há.', '“Vamos embora (agora).” (Ferro, p. 81)'],
        ],
      },
      {
        heading: 'Proibir: “tũg” antes da marca, ou “ker … hẽ”',
        // LI23 p. 69–70 (tũg ra ~ rỹ, tũg nĩ); FE21 p. 82 (ex. 62–64); ZI24 p. 69–70 (ker; ker … hẽ)
        text:
          'Para proibir, ponha “tũg” (não) antes da marca: “tũg rỹ” para agora, “tũg nĩ” para sempre. Outro jeito é abrir a frase com “ker” e fechar com “hẽ”: é o “de jeito nenhum!”. Só com “ker”, sem “hẽ”, é um aviso: “cuidado para não…”.',
        examples: [
          ['Tĩ tũg rỹ.', '“Não vá embora (agora).” (Ferro, p. 82)'],
          ['Pẽngre fi tãnh tũg nĩ!', '“Não mate a galinha!” (Ferro, p. 82)'],
          ['Ti vĩ kato tũg nĩ!', '“Não responda a ele!” (Apucaraninha, em Lima, p. 70)'],
          ['Ker kagrã hẽ!', '“Não comam tudo!” (Ferro, p. 82)'],
          ['Ker pĩ ki kutẽ!', '“Cuidado para não cair no fogo!” (Zilli, p. 69)'],
        ],
      },
    ],
    pitfalls: [
      'Dizer o “ã” (você) como sujeito da ordem: a pessoa fica de fora (“Nũr rỹ!”, não “ã nũr rỹ”). O “ã” de “Ã kakã kyku rỹ!” é o “seu” do rosto.',
      'Usar “rỹ” num pedido educado: “rỹ” é ordem para já; “nĩ”, ou nenhuma marca, soa mais gentil.',
      'Pôr “tũg” depois da marca: ele vem antes (“tũg rỹ”, “tũg nĩ”).',
    ],
    quiz: [
      {
        question: 'Qual marca soa mais educada, segundo Lima (2023)?',
        options: ['nĩ', 'rỹ', 'ra'],
        answer: 'nĩ',
        explanation: '“Rỹ” e “ra” pedem a ação agora; “nĩ” é “faça em qualquer tempo” e aparece nos pedidos e conselhos.',
      },
      {
        question: 'Como se diz “não vá embora (agora)”?',
        options: ['Tĩ tũg rỹ.', 'Tĩ rỹ tũg.', 'Tũg tĩ.'],
        answer: 'Tĩ tũg rỹ.',
        explanation: 'Verbo, “tũg” (não) e a marca de ordem no fim (Ferro, p. 82).',
      },
      {
        question: 'O que quer dizer “ker … hẽ”?',
        options: ['Não faça de jeito nenhum', 'Faça agora', 'Pode ir'],
        answer: 'Não faça de jeito nenhum',
        explanation: '“Ker” abre e “hẽ” fecha a proibição (Zilli, p. 69–70; Ferro, p. 82).',
      },
    ],
  },
  {
    id: 'kgp-g8',
    level: 'A2.2',
    title: 'Negar e dizer quando: “tũ nĩ”, “vãnh”, “huri” e as marcas de aspecto',
    emoji: '⏳',
    summary:
      'Para negar, “tũ” vem depois do verbo, quase sempre com “nĩ”. “Vãnh” nega o costume (“nunca”). O kaingang não conjuga o verbo no tempo: palavrinhas no fim dizem se a ação já aconteceu (“huri”), se dura (“mũ”), se é costume (“tĩ”) ou se vai acontecer (“ke mũ”).',
    sections: [
      {
        heading: '“tũ nĩ”: o não comum',
        // ZI24 p. 54–57 (tũ sempre à direita do verbo, quase sempre com nĩ); FE21 p. 77–80; ZI24 p. 58–59
        // (tũg nĩ; tũ talvez venha do verbo tũg ‘morrer, acabar’)
        text:
          'Zilli (2024) mostra que o “não” comum, “tũ”, vem sempre depois do verbo, quase sempre seguido de “nĩ”. Antes de “nĩ”, ele muitas vezes soa “tũg”. Zilli levanta uma hipótese: “tũ” viria do verbo “tũg”, que quer dizer “morrer, acabar”.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Fonte'],
          rows: [
            ['Maria fi jun. (Maria chegou.)', 'Maria fi vỹ jun tũ nĩ. (Maria não chegou.)', 'Ferro, p. 78'],
            ['Jun ti. (Ele chegou.)', 'Jun tũ ti nĩ. (Ele não chegou.)', 'Ferro, p. 80'],
            ['Sĩ vỹ gĩr prã. (O mosquito picou a criança.)', 'Sĩ vỹ gĩr prãg tũ nĩ. (O mosquito não picou a criança.)', 'Ferro, p. 79'],
          ],
        },
        examples: [
          ['Tĩ tũ inh nĩ.', '“Eu não fui.” — o pronome entra entre “tũ” e “nĩ” (Ferro, p. 80)'],
          ['Hoghog vỹ ogsã prãg tũ nĩ.', '“O cachorro não mordeu o cateto.” (Almeida 2008, em Zilli, p. 54)'],
        ],
      },
      {
        heading: '“vãnh”: nunca, não costuma',
        // FE21 p. 78–79 (vãnh: em nenhum intervalo de tempo; tũ: pontual); ZI24 p. 72 (não querer, não
        // poder, não estar acostumado)
        text:
          '“Tũ” nega uma vez; “vãnh” nega sempre. Ferro explica que “vãnh” quer dizer “nunca, em nenhum momento”. Zilli acrescenta: também “não costumar”, “não poder”, “não conseguir”.',
        examples: [
          ['João vỹ kakanẽ ko vãnh nĩ.', '“João não come frutas.” (nunca come; Ferro, p. 78)'],
          ['Gĩr ag kãpa vãnh han ke mũ.', '“As crianças não podem sair ainda.” (Felisbino, em Zilli, p. 73)'],
        ],
      },
      {
        heading: 'Quando: marcas no fim da frase',
        // DA p. 5 (o verbo não muda com o sujeito; huri ‘já’; mũ durativo; tĩ habitual); LI23 p. 64–65
        // (Almeida 2008: o tempo é marcado sobretudo por palavras; “ke mũ” futuro); ZI24 p. 55 (Domingues
        // 2013: futuro negativo)
        text:
          'D\'Angelis lembra que o verbo kaingang quase não muda: “krãn” (plantar) é igual para “ele” e para “nós”. Quem diz “quando” são palavrinhas no fim da frase: “huri” (já), “mũ” (ação em andamento), “tĩ” (costume) e “ke mũ” (vai acontecer).',
        table: {
          head: ['Marca', 'Sentido', 'Exemplo'],
          rows: [
            ['huri', 'já aconteceu', 'Ẽg tóg rãgró krãn huri. — Nós já plantamos o feijão. (D\'Angelis, p. 5)'],
            ['mũ', 'em andamento', 'Kyrũ tóg se tãnh sór mũ. — O rapaz estava querendo matar o quati. (p. 5)'],
            ['tĩ', 'costume', 'Ẽg gufã ag tóg kyfe kron tĩ. — Os nossos antigos tomavam kyfe. (p. 5)'],
            ['ke mũ', 'vai acontecer', 'Gĩr vỹ ĩn ra tĩg ke mũ. — O menino irá para casa. (Almeida 2008, em Lima, p. 65)'],
          ],
        },
        examples: [
          ['Jandira fi gãr fãg tũ nĩ ke mũ.', '“Jandira não colherá o milho.” (Domingues 2013, em Zilli, p. 55)'],
          ["Inh rãnhrãj tũg inh huri!", '“Já acabei meu trabalho.” — aqui “tũg” é o verbo “acabar” (Felisbino, em Zilli, p. 58)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “não” antes do verbo, como em português: “tũ” vem depois (“jun tũ nĩ”).',
      'Esquecer que, com pronome, ele entra no meio: “Jun tũ ti nĩ.” (ele não chegou).',
      'Confundir o “tũg” da negação com o verbo “tũg” (acabar): em “Inh rãnhrãj tũg inh huri!”, é o verbo.',
    ],
    quiz: [
      {
        question: 'Como se diz “Maria não chegou”?',
        options: ['Maria fi vỹ jun tũ nĩ.', 'Maria fi vỹ tũ jun nĩ.', 'Tũ Maria fi jun.'],
        answer: 'Maria fi vỹ jun tũ nĩ.',
        explanation: '“Tũ” vem depois do verbo, seguido de “nĩ” (Ferro, p. 78).',
      },
      {
        question: 'Qual palavra nega um costume (“nunca come frutas”)?',
        options: ['vãnh', 'huri', 'mũ'],
        answer: 'vãnh',
        explanation: '“Vãnh” é a negação de nenhum momento (Ferro, p. 78–79). “Huri” é “já”; “mũ”, ação em andamento.',
      },
      {
        question: 'O que “huri” acrescenta em “Ti tóg rãgró krãn huri”?',
        options: ['Que a ação já aconteceu', 'Que a ação vai acontecer', 'Que é uma pergunta'],
        answer: 'Que a ação já aconteceu',
        explanation: 'D\'Angelis traduz a frase como “Ele já plantou o feijão”: “huri” é “já”.',
      },
    ],
  },
];
