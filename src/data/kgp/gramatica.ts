import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kaingang, do A1.1 ao B1.4. No A1, as informações
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
          // montada (nome + adjetivo: Tabosa 2014, p. 164, “mĩg jũ” ‘onça braba’; e p. 161, “Ũn tỹtá fi
          // sĩnvĩ.” ‘A mulher é bonita.’)
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
        // Ferro (UEL, 2021), p. 80 (no lugar de “Inh kanhgág.” e “Ti kófa, fi sĩnvĩ.”, montadas)
        examples: [
          ['Jun inh.', '“Eu cheguei.” (Ferro, 2021, p. 80)'],
          ['Jun ti. Jun fi.', '“Ele chegou. Ela chegou.” (p. 80)'],
        ],
      },
      {
        heading: 'Gênero só na 3ª pessoa',
        text:
          'Diferente do português, o kaingang não marca gênero gramatical em substantivos nem em adjetivos (não existe “o/a”, “bonito/bonita”): a única distinção de gênero que a língua faz é entre “ti” (ele) e “fi” (ela), e entre “ag” (eles) e “fag” (elas), nos pronomes de 3ª pessoa.',
        // Tabosa, “Orações complexas da língua kaingang” (UEL, 2014), p. 161 (no lugar de “Ti mág.” e
        // “Fi mág.”, montadas)
        examples: [
          ['Ũn tỹtá fi sĩnvĩ.', '“A mulher é bonita.” — “sĩnvĩ” não ganha terminação feminina (Tabosa, 2014, p. 161).'],
          ['Ẽgkrénh tĩ vỹ tar ja ti.', '“O caçador era forte.” — e “tar” (forte) também não muda (p. 161).'],
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
          ['Mĩg vỹ vẽnhvó tĩ.', '“A onça corre” (com a partícula de aspecto habitual “tĩ”).'],
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
  // ══ B1.1 a B1.4 (17/10/2026) ══
  // Fontes, com a página impressa: Tabosa, “Orações complexas da língua kaingang” (tese, UEL, 2014) =
  // TA14; Tabosa, “Construções causativas da língua kaingang” (dissertação, UEL, 2006) = TA06; Tabosa e
  // Santos, “Coordenação na língua kaingang” (Entretextos, 2013) e “Relativização na língua Kaingang”
  // (Signum, 2013) = TS13; as narrativas de Ferro (UEL, 2021, p. 85–99) = FE21. Todos os dados são de
  // falantes da Terra Indígena Apucaraninha (PR). Os paradigmas e as frases são das fontes, com a
  // tradução delas; nenhuma frase foi montada.
  {
    id: 'kgp-g9',
    level: 'B1.1',
    title: 'E, ou, mas: juntar frases',
    emoji: '🔗',
    summary:
      'Para juntar nomes, o kaingang usa “mré” (com). Para juntar frases, “kar kỹ” (depois) e “kỹ” (então) abrem a segunda frase. O “ou” da pergunta é “vó”, no fim. O “mas” é “hã ra” ou “jãvo”, e “hã kỹ” é “por isso”.',
    sections: [
      {
        heading: '“mré” entre nomes',
        // TA14 p. 197–202 (ex. 1, 15, 18, 9 e 10); p. 202 (“mré” liga a primeira unidade à segunda e
        // “kar kỹ” a segunda à terceira)
        text:
          'Tabosa (2014) mostra que “mré”, a mesma palavra de “com”, vira o “e” entre dois nomes. Com três nomes, a língua não repete o “mré”: ele liga o primeiro ao segundo, e “kar kỹ” liga o segundo ao terceiro.',
        table: {
          head: ['Kaingang', 'Português', 'Página'],
          rows: [
            ['Pedro mré Ludoviko vỹ ẽmĩ kó.', 'O Pedro e o Ludoviko comeram bolo.', 'Tabosa, p. 197'],
            ['João mré José ag vỹ junjun.', 'João e José chegaram.', 'p. 201'],
            ['Pedro vỹ aronh mré mandioca kó.', 'Pedro comeu arroz e mandioca.', 'p. 201'],
            ['Pedro mré Manoel, kar kỹ Ludovico ag vim kenh mũ jẽg.', 'Pedro, Manuel e Ludoviko foram pescar no rio.', 'p. 198'],
          ],
        },
      },
      {
        heading: '“kar kỹ” e “kỹ” entre frases',
        // TA14 p. 202–205 (ex. 22, 24, 27, 30 e 31); p. 202–203 (o sujeito igual não se repete)
        text:
          'Entre frases, “kar kỹ” (depois) e “kỹ” (então) vêm no começo da segunda. Quando o sujeito é o mesmo, ele não se repete. Com “tũ nĩ” nas duas frases, o “e” vira “nem”.',
        examples: [
          ['Gĩr vỹ mro, kar kỹ vim ke, kar kỹ ẽkrénh.', '“O menino nadou, pescou e caçou.” (Tabosa, p. 202)'],
          ['Ẽkrénh tĩ vỹ mĩg tãnh kar kỹ pỹn tãnh gé.', '“O caçador matou a onça e matou a cobra.” (p. 203)'],
          ['Gĩr vỹ vim ke kỹ João vỹ pirã kó.', '“O menino pescou e João comeu o peixe.” (p. 205)'],
          ['Gĩr vỹ ẽmĩ ko tũ nĩ, kar kỹ ti goj kron tũ nĩ.', '“O menino não comeu bolo nem bebeu água.” (p. 203)'],
        ],
      },
      {
        heading: '“ou”: “vó” no fim da pergunta',
        // TA14 p. 197 (ex. 7), p. 207 (ex. 36), p. 206 (ex. 35: “ke tũ nĩg … kỹ” na afirmativa); TS13
        // Entretextos p. 205 (vó, ‘será que não é?’, segundo Wiesemann)
        text:
          'Na pergunta “isto ou aquilo?”, “vó” vai no fim, depois da segunda opção. Wiesemann traduz esse “vó” como “será que não é?”. Numa frase que não é pergunta, Tabosa registrou outro jeito: “ke tũ nĩg” no fim da primeira opção e “kỹ” antes da segunda.',
        examples: [
          ['Gĩr mỹ gãr kó, goj kron vó?', '“O menino comeu o milho ou bebeu água?” (Tabosa, p. 197)'],
          ['Ã mỹ gãr génh, ka nin vó?', '“Você quer milho ou mandioca?” (p. 207)'],
          ['Pedro vỹ igreja ra tĩg mũ, ke tũ nĩg, kỹ escola ra.', '“Pedro vai à igreja ou à escola.” (p. 206)'],
        ],
      },
      {
        heading: '“mas” e “por isso”',
        // TS13 Entretextos p. 208 (hã ra seguido de tóg, sujeito já mencionado) e p. 210–211 (jãvo traduzido
        // como “e”); TA14 p. 210–214 (ex. 45, 47, 53, 58)
        text:
          '“Hã ra” é o “mas”. Muitas vezes vem seguido de “tóg”, que retoma quem já apareceu na frase anterior. “Jãvo” também é “mas” no dicionário, mas o colaborador de Tabosa o usou para juntar duas coisas diferentes, como um “e”. E “hã kỹ” é “por isso”.',
        examples: [
          ['Pedro vỹ Manoel vé, hã ra tóg João vég tũ nĩ.', '“Pedro viu Manoel, mas não viu João.” (Tabosa, p. 210)'],
          ['Mĩg vỹ sĩ vẽvẽ, hã ra ti tar ti.', '“A onça é pequena, mas é forte.” (p. 211)'],
          ['Manoel vỹ tỹ professor nĩ, jãvo gĩr vỹ tỹ aluno jẽ.', '“O Manoel é professor e o menino, aluno.” (p. 213)'],
          ['Ta vỹ kutẽ mág, hã kỹ Pedro tóg kãtĩ tũ nĩ.', '“Choveu muito, por isso o Pedro não veio.” (p. 214)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “e” entre frases no fim, como uma posposição: “kar kỹ” e “kỹ” abrem a segunda frase (“…, kar kỹ vim ke”).',
      'Usar “vó” no começo, como o “ou” do português: ele fecha a pergunta, depois da segunda opção.',
      'Repetir o sujeito em toda frase: quando é o mesmo, o kaingang o deixa de fora (“Gĩr vỹ mro, kar kỹ vim ke”).',
    ],
    quiz: [
      {
        question: 'Como se diz “O Pedro e o Ludoviko comeram bolo”?',
        options: ['Pedro mré Ludoviko vỹ ẽmĩ kó.', 'Pedro kar kỹ Ludoviko vỹ ẽmĩ kó.', 'Pedro vó Ludoviko vỹ ẽmĩ kó.'],
        answer: 'Pedro mré Ludoviko vỹ ẽmĩ kó.',
        explanation: 'Entre dois nomes, o “e” é “mré” (Tabosa, 2014, p. 197). “Kar kỹ” liga frases; “vó” é o “ou” da pergunta.',
      },
      {
        question: 'Onde fica o “vó” em “O menino comeu o milho ou bebeu água?”?',
        options: ['No fim: Gĩr mỹ gãr kó, goj kron vó?', 'No começo: Vó gĩr mỹ gãr kó, goj kron?', 'Entre as opções: Gĩr mỹ gãr kó vó goj kron?'],
        answer: 'No fim: Gĩr mỹ gãr kó, goj kron vó?',
        explanation: '“Vó” fecha a pergunta, depois da segunda opção (Tabosa, 2014, p. 197).',
      },
      {
        question: 'O que quer dizer “hã kỹ”?',
        options: ['por isso', 'mas', 'depois'],
        answer: 'por isso',
        explanation: '“Ta vỹ kutẽ mág, hã kỹ Pedro tóg kãtĩ tũ nĩ.” é “Choveu muito, por isso o Pedro não veio” (Tabosa, 2014, p. 214).',
      },
    ],
  },
  {
    id: 'kgp-g10',
    level: 'B1.1',
    title: 'Contar o que aconteceu: “kỹ”, “sir”, “tóg” e “Kỹ hã vẽ”',
    emoji: '🗣️',
    summary:
      'Nas cinco histórias que Ferro gravou em Apucaraninha, quase toda frase começa com “kỹ” (então) ou “kar kỹ” (depois), o “sir” faz o papel do “daí”, o “tóg” retoma quem já entrou na história, “he mũ” é “disse” e a história termina com “Kỹ hã vẽ.” (então é isso).',
    sections: [
      {
        heading: 'Começar cada frase: “kỹ”, “kar kỹ”, “hãra”',
        // FE21 p. 85 (marcadores conversacionais; “sir” corresponde ao “daí”), p. 87–89 (narrativa B)
        text:
          'Ferro explica que as narrativas são fala quase natural, com repetições e hesitações, e com palavras como “sir”, que corresponde ao “daí” do português. A história anda frase a frase: “kỹ” (então), “kar kỹ” (depois) e “hãra” (mas), que Tabosa escreve “hã ra”.',
        examples: [
          ['Kỹ isóg sir... Kỹ inh sir vẽnh kypé.', '“Então eu daí... Então, tomei banho.” (Ferro, 2021, p. 87)'],
          ['Kar kỹ inh kur rĩnh kar kỹ sir vãhã inh vẽnhrá vigve.', '“Depois vesti minhas roupas, daí dei uma olhada nos meus cadernos.” (p. 87)'],
          ['Kỹ isóg sir vẽnhránrán kar kỹ kãtĩ mũ.', '“Depois de estudar voltei.” (p. 89)'],
        ],
      },
      {
        heading: '“tóg”: retomar quem já está na história',
        // FE21 p. 85–86 (hipótese: tóg retoma o sujeito; “função pronominal, mas não é um pronome”, segundo
        // a colaboradora), p. 88 (B8: tóg como “ele”, retomando “meu pai”), p. 101 (tóg é o mais frequente
        // nas narrativas, e nenhum nas frases elicitadas)
        text:
          'Nas narrativas, o marcador mais comum é “tóg”, que não apareceu nenhuma vez nas frases soltas que Ferro pediu. A hipótese dela é que “tóg” retoma quem já está na história. A colaboradora disse que ele funciona como um pronome, mas não é um pronome. Às vezes, sozinho, faz o papel de “ele”.',
        examples: [
          ['Ijóg vỹ ijo vyr ũnĩmũ ũ kãmĩ.', '“Meu pai foi antes de mim com outro ônibus.” — o pai entra na história com “vỹ” (Ferro, p. 88)'],
          ['Jãvo tóg sir rãnhrãj jé tĩg.', '“E ele foi trabalhar.” — “tóg” retoma o pai (p. 88)'],
          ['Kỹ ag tóg ẽg mré patan sir.', '“Então eles empataram com nós.” (p. 93)'],
        ],
      },
      {
        heading: 'Contar o que disseram: “he mũ”',
        // FE21 p. 86 (A1, A4), p. 94 (E1), p. 95 (E7)
        text:
          'Para contar o que alguém disse, a fala vem primeiro e “he mũ” (disse) vem depois. A fala pode vir entre aspas, como no português.',
        examples: [
          ['Kỹ fi tóg “isi”, he mũ.', '“Então ela disse ‘vixi’.” (Ferro, p. 86)'],
          ['Samano kã ag tóg inh mỹ: “mora hé jé” he mũ.', '“Naquele sábado eles me disseram ‘vamos jogar bola’, disseram.” (p. 94)'],
        ],
      },
      {
        heading: 'Terminar: “Kỹ hã vẽ.”',
        // FE21 p. 86 (A6), p. 89 (B12), p. 94 (D10), p. 99 (E29); p. 91 (C15, “Kỹ hã vẽ ha.”)
        text: 'As cinco narrativas terminam do mesmo jeito: “Kỹ hã vẽ.”, “então é isso”.',
        examples: [
          ['Kỹ hã vẽ.', '“Então é isso.” (Ferro, p. 86, 89, 94 e 99)'],
          ['Kỹ hã vẽ ha.', '“Então é isso.” (fim da narrativa C, p. 91)'],
        ],
      },
    ],
    pitfalls: [
      // TS13 Entretextos p. 195 (Almeida 2008: só o futuro é marcado; o não futuro fica sem marca)
      'Esperar um verbo conjugado no passado: segundo Almeida (2008), citada por Tabosa e Santos, o kaingang só marca o futuro. O resto fica sem marca, e numa história quem mostra o que já aconteceu é o contexto, frase a frase.',
      'Achar que “tóg” é um pronome como “ti”: segundo a colaboradora de Ferro, ele funciona como um, mas não é.',
      'Pôr o “he mũ” antes da fala: primeiro vem o que foi dito, depois o “disse”.',
    ],
    quiz: [
      {
        question: 'Como terminam as narrativas que Ferro gravou?',
        options: ['Kỹ hã vẽ.', 'Mũ jé!', 'Ha tĩg.'],
        answer: 'Kỹ hã vẽ.',
        explanation: '“Kỹ hã vẽ.” (então é isso) fecha as cinco narrativas (Ferro, 2021, p. 85–99).',
      },
      {
        question: 'Em “Kỹ fi tóg “isi”, he mũ.”, o que “he mũ” quer dizer?',
        options: ['disse', 'então', 'depois'],
        answer: 'disse',
        explanation: 'A fala vem primeiro e “he mũ” (disse) depois: “Então ela disse ‘vixi’” (Ferro, p. 86).',
      },
      {
        question: 'Segundo Ferro, a que corresponde o “sir” das narrativas?',
        options: ['Ao “daí” do português', 'Ao “não” do português', 'Ao “você” do português'],
        answer: 'Ao “daí” do português',
        explanation: 'Ferro (2021, p. 85) diz que “sir” corresponde ao “daí” da fala em português.',
      },
    ],
  },
  {
    id: 'kgp-g11',
    level: 'B1.2',
    title: '“O menino que chutou a bola”: as orações relativas',
    emoji: '🧩',
    summary:
      'O kaingang não tem um “que” para as relativas. A frase inteira (“o menino chutou a bola”) entra no lugar do nome e termina com “mũ”. Dentro dela, quem faz a ação pode levar “tỹ”; fora, a frase inteira leva “vỹ”.',
    sections: [
      {
        heading: 'Sem “que”: a frase entra no lugar do nome',
        // TS13 Signum p. 304–306 (relativas internas, sem relativizador, estratégia de não redução); TA14
        // p. 152, 156 e 172
        text:
          'Tabosa e Santos (2013) mostram que o kaingang não usa nenhuma palavra como o “que” do português. A frase que descreve o nome fica completa, com o nome dentro dela, e ocupa o lugar que o nome ocuparia: de sujeito ou de objeto. No fim dela, quase sempre, vem “mũ”.',
        table: {
          head: ['Kaingang', 'Português', 'Página (Tabosa, 2014)'],
          rows: [
            ['Gĩr fỹ mũ vỹ nũr.', 'O menino que chorou dormiu.', 'p. 156'],
            ['Gĩr tỹ mora nig mũ vỹ pévé.', 'O menino que chutou a bola caiu.', 'p. 152'],
            ['Pedro vỹ mĩg tỹ gĩr prãg mũ tãnh.', 'Pedro matou a onça que mordeu o menino.', 'p. 172'],
            ['Pedro vỹ ũn gré rĩr mũ vé.', 'Pedro viu o homem que acordou.', 'p. 170'],
          ],
        },
      },
      {
        heading: '“tỹ” dentro, “vỹ” fora',
        // TA14 p. 111–113 e 158; TS13 Signum p. 308 (o sujeito do verbo intransitivo fica sem marca na
        // relativa; o do transitivo leva tỹ; a oração principal usa vỹ)
        text:
          'Dentro da relativa, quem faz a ação de um verbo com objeto (morder, chutar) leva “tỹ”. Com um verbo sem objeto (chorar, correr), fica sem marca. Fora, a frase inteira é o sujeito e leva o “vỹ” de sempre.',
        examples: [
          ['Gĩr vẽnhvãg mũ vỹ prẽr.', '“O menino que correu gritou.” — sem marca dentro (Tabosa, p. 156)'],
          ['Pỹn tỹ mĩg prãg mũ vỹ pẽngre tãnh.', '“A cobra que mordeu a onça matou a galinha.” — “tỹ” dentro, “vỹ” fora (p. 169)'],
          ['Ũn tỹtá tỹ vẽjẽn han mũ fi sĩnvĩ fi.', '“A mulher que fez a comida é bonita.” (p. 161)'],
        ],
      },
      {
        heading: '“ẽn”, aquele',
        // TS13 Signum p. 308 (ẽn retoma a relativa, por ênfase, e não é obrigatório); TA14 p. 156 e 163
        text: 'Depois da relativa pode vir “ẽn” (aquele), que a retoma. Segundo Tabosa e Santos, ele não é obrigatório: dá ênfase.',
        examples: [
          ['Ũn prẽr mũ ẽn vỹ vẽnhavã.', '“Aquele que gritou correu.” (Tabosa, p. 156)'],
          ['Pedro tỹ livro kajãm mũ ẽn vỹ éhé nĩ.', '“O livro que Pedro comprou é grande.” (p. 163)'],
        ],
      },
      {
        heading: 'Quem morreu, a onça ou o menino?',
        // TS13 Signum p. 309–310 (as duas leituras têm a mesma forma; o falante distingue pela entonação e
        // pelo contexto); TA14 p. 159 e 162
        text:
          '“Mĩg tỹ gĩr prãg mũ vỹ ter.” pode ser “a onça que mordeu o menino morreu” ou “o menino que a onça mordeu morreu”: a frase é a mesma. O colaborador de Tabosa explicou que a diferença está no jeito de falar. Lendo as duas, ele deu mais ênfase ao nome de quem morreu. Fora disso, quem decide é o contexto.',
        examples: [
          ['Mĩg tỹ gĩr prãg mũ vỹ ter.', '“A onça que mordeu o menino morreu.” (Tabosa, p. 159)'],
          ['Mĩg tỹ gĩr prãg mũ vỹ ter.', '“O menino que a onça mordeu morreu.” (p. 162)'],
          ['Gĩr jóg ter mũ vỹ fỹ.', '“O menino cujo pai morreu chorou.” (p. 167)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “que” para pôr depois do nome: não existe. A frase inteira entra no lugar do nome.',
      'Esquecer o “tỹ” dentro da relativa com verbo que tem objeto: é “gĩr tỹ mora nig mũ”, com “tỹ”, e o “vỹ” fica para fora.',
      'Achar que a frase está errada por ter duas leituras: no kaingang, a entonação e o contexto resolvem.',
    ],
    quiz: [
      {
        question: 'Como se diz “O menino que chutou a bola caiu”?',
        options: ['Gĩr tỹ mora nig mũ vỹ pévé.', 'Gĩr vỹ mora nig, pévé.', 'Gĩr vỹ pévé mora nig.'],
        answer: 'Gĩr tỹ mora nig mũ vỹ pévé.',
        explanation: 'A relativa “gĩr tỹ mora nig mũ” entra no lugar do sujeito e leva o “vỹ” (Tabosa, 2014, p. 152).',
      },
      {
        question: 'Qual palavra pode retomar a relativa, como “aquele”?',
        options: ['ẽn', 'mré', 'vó'],
        answer: 'ẽn',
        explanation: '“Ũn prẽr mũ ẽn vỹ vẽnhavã.” é “Aquele que gritou correu” (Tabosa, 2014, p. 156).',
      },
      {
        question: 'Segundo Tabosa e Santos, como o falante mostra de quem a relativa fala, quando há duas leituras?',
        options: ['Pela entonação e pelo contexto', 'Com a palavra “que”', 'Mudando a ordem das palavras'],
        answer: 'Pela entonação e pelo contexto',
        explanation: 'A frase é a mesma; o colaborador deu mais ênfase ao nome de quem a relativa fala (Signum, 2013, p. 309–310).',
      },
    ],
  },
  {
    id: 'kgp-g12',
    level: 'B1.2',
    title: 'Dizer, ver, ouvir, saber e querer: uma frase dentro da outra',
    emoji: '💬',
    summary:
      'Para “disse que”, “viu que”, “ouviu”, a frase do que foi dito ou visto vem inteira antes do verbo “dizer” (hé), “ver” (vé) ou “ouvir” (mẽ). “Querer” e “tentar” são “sór mũ” depois do verbo, e “mandar” ou “pedir” levam “mỹ” (para) e “hé” no fim.',
    sections: [
      {
        heading: 'Dizer e achar',
        // TA14 p. 124 (ex. 2), p. 126 (ex. 6: discurso direto), p. 127 (ex. 10: hã hỹnỹ ‘achar’)
        text:
          'Tabosa (2014) mostra que o que foi dito vem inteiro, como uma frase completa, e “hé” (dizer) fecha tudo. A fala também pode vir direta, com “eu”. E, com “hã hỹnỹ” dentro, “dizer” vira “achar”.',
        examples: [
          ['Ũn tỹtá fi gĩr vỹ pẽngre péju hé.', '“A mulher disse que o menino roubou a galinha.” (Tabosa, p. 124)'],
          ['Ũn tỹtá fi vỹ pẽngre péju inh hé.', '“A mulher disse: ‘Eu roubei a galinha.’” (p. 126)'],
          ['Maria fi vỹ gĩr hã hỹnỹ pẽngre péju mũ hé.', '“Maria acha que o menino roubou a galinha.” (p. 127)'],
        ],
      },
      {
        heading: 'Ver, ouvir e conhecer',
        // TA14 p. 136–137 (ex. 29, 32, 34, 35); p. 175 (ex. 52a); TA14 p. 113 (sujeito da subordinada com tỹ)
        text:
          'Com “vé” (ver) e “mẽ” (ouvir), o que foi visto ou ouvido vem antes do verbo. Quem faz a ação lá dentro leva “tỹ”, como na relativa.',
        examples: [
          ['Pedro vỹ mĩg tỹ gĩr pra vé.', '“Pedro viu a onça morder o menino.” (Tabosa, p. 136)'],
          ['Ũn gré vỹ gĩr tỹ pẽngre péju vé.', '“O homem viu o menino roubar a galinha.” (p. 137)'],
          ['Gĩr vỹ ti professora fi vĩ mẽ.', '“O menino ouviu a professora falar.” (p. 137)'],
          ['Manoel vỹ gĩr ki kanhró nĩ.', '“Manoel conhece o menino.” (p. 175)'],
        ],
      },
      {
        heading: 'Querer e tentar: “sór mũ”',
        // TA14 p. 131–132 (ex. 18–20), p. 145 (ex. 56: sór mũ também ‘tentar’)
        text:
          '“Sór mũ”, depois do verbo, é “querer”. A mesma construção aparece traduzida como “tentar”: o contexto decide.',
        examples: [
          ['Luciana vỹ fi livro kajãm sór mũ.', '“Luciana queria comprar um livro.” (Tabosa, p. 131)'],
          ['Luciana fi kanhgág vĩ to ki kanhrãn sór mũ.', '“Luciana quer aprender a falar kaingang.” (p. 132)'],
          ['Luciana fi kanhgág vĩ tó sór mũ.', '“Luciana tentou falar kaingang.” (p. 145)'],
        ],
      },
      {
        heading: 'Mandar e pedir',
        // TA14 p. 133 (ex. 21 e 23)
        text: 'Para mandar ou pedir, a pessoa que recebe o pedido leva “mỹ” (para), o pedido vem depois, às vezes com o “rỹ” da ordem, e “hé” fecha a frase.',
        examples: [
          ['Gĩr nỹ fi ti mỹ kur vẽnh kypé hé.', '“A mãe mandou o menino tomar banho.” (Tabosa, p. 133)'],
          ['Professora fi gĩr mỹ livro tugtó rỹ hé.', '“A professora pediu para o menino ler o livro.” (p. 133)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “hé” (dizer) logo depois de quem fala, como no português: ele vem no fim, depois de tudo o que foi dito.',
      'Esquecer o “tỹ” de quem faz a ação dentro do que foi visto: “gĩr tỹ pẽngre péju vé”.',
      'Procurar um verbo “querer” separado: é “sór mũ”, depois do verbo.',
    ],
    quiz: [
      {
        question: 'Onde fica o “hé” em “A mulher disse que o menino roubou a galinha”?',
        options: ['No fim: Ũn tỹtá fi gĩr vỹ pẽngre péju hé.', 'Logo depois da mulher: Ũn tỹtá fi hé gĩr vỹ pẽngre péju.', 'No começo: Hé ũn tỹtá fi gĩr vỹ pẽngre péju.'],
        answer: 'No fim: Ũn tỹtá fi gĩr vỹ pẽngre péju hé.',
        explanation: 'O que foi dito vem inteiro, e “hé” fecha a frase (Tabosa, 2014, p. 124).',
      },
      {
        question: 'Como se diz “Pedro queria pescar um peixe”?',
        options: ['Pedro vỹ tóg pirã sam sór mũ.', 'Pedro vỹ sór pirã sam.', 'Sór Pedro vỹ pirã sam.'],
        answer: 'Pedro vỹ tóg pirã sam sór mũ.',
        explanation: '“Sór mũ” vem depois do verbo (Tabosa, 2014, p. 131).',
      },
    ],
  },
  {
    id: 'kgp-g13',
    level: 'B1.3',
    title: 'Quando, se, para, porque, antes e depois',
    emoji: '⏱️',
    summary:
      'A frase de “quando”, “se”, “para” ou “porque” termina com a palavra que liga: “kỹ” (quando, porque), “mũra” (quando, mesmo que), “ra” (se), “jé” (para), “ke jo” (antes de), “kar kỹ” (depois que). Dentro dela, quem faz a ação leva “tỹ”.',
    sections: [
      {
        heading: 'A palavra que liga vem no fim',
        // TA14 p. 184 (“Para indicar tempo, kỹ significa ‘quando’ e ocorre no fim da oração subordinada”), p. 122
        // (quadro 15: hã ra, jãvo, jé, kỹ, mũra, ra)
        text:
          'Tabosa (2014) mostra que, ao contrário do português, a palavra que liga não abre a frase de “quando” ou de “se”: ela a fecha. E essa frase costuma vir primeiro. “Kỹ”, sozinho, pode ser “quando” ou “porque”, conforme o sentido.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo (Tabosa, 2014)'],
          rows: [
            ['kỹ', 'quando', 'Gĩr tỹ mĩg vé kỹ, ti vẽnhvã. — Quando o menino viu a onça, ele correu. (p. 184)'],
            ['mũra', 'quando', 'Gislaine fi jun mũra, hã Luciana fi tĩg. — Quando a Gislaine chegou, a Luciana saiu. (p. 186)'],
            ['kar kỹ', 'depois que', 'Gĩr vỹ ti tỹ bolo ko kar kỹ nũr. — Depois que o menino comeu o bolo, ele foi dormir. (p. 186)'],
            ['ke jo', 'antes de', 'Gĩr vỹ ti nũr ke jo vẽjẽn kó. — Antes de dormir, o menino comeu a comida. (p. 187)'],
            ['jé', 'para', 'Maria fi gãr kygfa fi tỹ bolo han jé. — Maria colheu milho para fazer bolo. (p. 188)'],
            ['kỹ', 'porque', 'Gĩr vỹ fỹ, ti pév kỹ. — O menino chorou porque caiu. (p. 189)'],
            ['ra', 'se', 'Caçador tỹ mĩg tãnh ra, ti pijé gĩr pranh mũ vẽ. — Se o caçador tivesse matado a onça, ela não morderia o menino. (p. 192)'],
          ],
        },
      },
      {
        heading: 'Se vai chover, se tivesse chovido',
        // TA14 p. 185 (ex. 7: kỹ com sentido de “se”), p. 190–191 (Wiesemann 2007, p. 138–139: “ra” com “vẽ”
        // no fim, o que não aconteceu), p. 191 (ex. 27–28: mũra ‘mesmo que’)
        text:
          'Wiesemann registrou o par: com “ra”, é “se ela chegar, eu vou”; com “vẽ” no fim, é “se ela chegasse, eu iria (mas não chegou)”. As frases de Wiesemann são de outra região, por isso o “eu” é “sóg”. Em Apucaraninha, Tabosa ouviu também “mũra” com sentido de “mesmo que”.',
        examples: [
          ['Fi kãtig mũ ra, sóg tĩg mũ.', '“Se ela chegar (aqui), eu vou embora.” (Wiesemann, 2007, em Tabosa, p. 190)'],
          ['Fi kãtig mũ ra, sóg tĩg mũ vẽ.', '“Se ela chegasse, eu iria (mas não chegou).” (Wiesemann, 2007, em Tabosa, p. 191)'],
          ['Ta kutẽ mág tĩ kỹ, goj nỹ var mũ.', '“Se chover bastante, o rio vai encher.” (Tabosa, p. 185)'],
          ['Ẽpry tỹ mrér sa mũra, Pedro nỹ moto kri kãtĩg mũ.', '“Mesmo que a estrada esteja molhada, o Pedro virá de moto.” (p. 191)'],
        ],
      },
      {
        heading: '“tỹ” dentro da frase que liga',
        // TA14 p. 184 (ex. 1–3: sujeito com tỹ na subordinada), p. 188 (ex. 18–20: o sujeito da frase de
        // “para” com tỹ)
        text:
          'Como nas relativas, quem faz a ação dentro da frase de “quando” ou de “para” leva “tỹ”. Na frase principal, volta o “vỹ” ou o pronome.',
        examples: [
          ['Caçador tỹ mĩg pénũ kỹ, ti ter.', '“Assim que o caçador atirou na onça, ela morreu.” (Tabosa, p. 184)'],
          ['Pedro vỹ rãgró kajãm, Otilia fi tỹ nén jé.', '“Pedro comprou feijão para Otília fazer.” (p. 188)'],
        ],
      },
    ],
    pitfalls: [
      'Começar a frase com a palavra que liga, como o “quando” e o “se” do português: “kỹ”, “mũra”, “ra” e “jé” vêm no fim dela.',
      'Achar que “kỹ” é sempre “então”: no fim de uma frase que vem antes de outra, ele é “quando”; numa frase que vem depois, “porque”.',
      'Esquecer o “tỹ” de quem faz a ação na frase de “quando” ou de “para”.',
    ],
    quiz: [
      {
        question: 'Onde fica o “kỹ” em “Quando o menino viu a onça, ele correu”?',
        options: ['No fim da frase do “quando”: Gĩr tỹ mĩg vé kỹ, ti vẽnhvã.', 'No começo: Kỹ gĩr tỹ mĩg vé, ti vẽnhvã.', 'No fim de tudo: Gĩr tỹ mĩg vé, ti vẽnhvã kỹ.'],
        answer: 'No fim da frase do “quando”: Gĩr tỹ mĩg vé kỹ, ti vẽnhvã.',
        explanation: 'Para dizer “quando”, “kỹ” fecha a frase subordinada (Tabosa, 2014, p. 184).',
      },
      {
        question: 'Qual palavra é “para” (finalidade)?',
        options: ['jé', 'ra', 'jo'],
        answer: 'jé',
        explanation: '“Maria fi gãr kygfa fi tỹ bolo han jé.” é “Maria colheu milho para fazer bolo” (Tabosa, 2014, p. 188). “Ra” é “se”; “ke jo”, “antes de”.',
      },
      {
        question: 'O que o “vẽ” no fim acrescenta em “Fi kãtig mũ ra, sóg tĩg mũ vẽ”?',
        options: ['Que ela não chegou: “se ela chegasse…”', 'Que ela já chegou', 'Que é uma pergunta'],
        answer: 'Que ela não chegou: “se ela chegasse…”',
        explanation: 'Wiesemann traduz: “Se ela chegasse eu iria (mas não chegou)” (citada por Tabosa, 2014, p. 191).',
      },
    ],
  },
  {
    id: 'kgp-g14',
    level: 'B1.4',
    title: 'Fazer alguém fazer: “han” e os pares -n e -r',
    emoji: '⚙️',
    summary:
      '“Fazer alguém fazer” é “han” no fim: “Nẽko vỹ sẽsĩ tẽ han.” (Manoel fez o pássaro voar). E muitos verbos têm um par: “rĩn” (acordar alguém) e “rĩr” (acordar), “pũn” (queimar algo) e “pũr” (queimar-se), “nón” (abrir algo) e “nor” (abrir-se).',
    sections: [
      {
        heading: '“han”: fazer alguém fazer',
        // TA06 p. 72–79 (causativo analítico com o verbo “fazer”; o causado é sujeito da subordinada, com tỹ
        // quando o verbo tem objeto; ex. 102–119)
        text:
          'Tabosa (2006) mostra que o kaingang faz como o português: põe a ação inteira antes de “han” (fazer). Quem é levado a agir é o sujeito da ação de dentro. Se essa ação tem objeto (beber água, comer banana), ele ganha “tỹ”. O verbo de dentro não muda.',
        table: {
          head: ['Frase simples', 'Com “han”', 'Página (Tabosa, 2006)'],
          rows: [
            ['Sẽsĩ vỹ tẽ. (O pássaro voou.)', 'Nẽko vỹ sẽsĩ tẽ han. (Manoel fez o pássaro voar.)', 'p. 73'],
            ['Gĩr vỹ nũr. (O menino dormiu.)', 'Gĩr nỹ fi vỹ ti nũr han. (A mãe fez o menino dormir.)', 'p. 73'],
            ['Gĩr vỹ goj kron. (O menino bebeu água.)', 'Gĩr nỹ fi vỹ ti tỹ goj kron han. (A mãe fez o menino beber água.)', 'p. 75'],
            ['Jandira fi gĩr mỹ vẽjẽn nĩm. (Jandira deu comida para o menino.)', 'Nẽko vỹ Jandira fi tỹ gĩr mỹ vẽjẽn nĩm han. (Manoel fez Jandira dar comida para o menino.)', 'p. 77'],
          ],
        },
      },
      {
        heading: 'Os pares: -n (alguém faz) e -r (acontece sozinho)',
        // TA06 p. 57–64 (ex. 57–81 e quadro da p. 64; na maioria, -n na forma com agente e -r na forma sem
        // agente)
        text:
          'Para “o menino abriu a porta” e “a porta abriu”, o kaingang muda o fim do verbo. Na maioria dos pares, a forma com quem faz termina em “-n” e a forma em que a coisa muda sozinha termina em “-r”. Outros pares mudam de outro jeito.',
        table: {
          head: ['Alguém faz', 'Acontece sozinho', 'Sentido'],
          rows: [
            ['rĩn', 'rĩr', 'acordar'],
            ['pũn', 'pũr', 'queimar'],
            ['tĩn', 'tĩr', 'rolar'],
            ['nón', 'nor', 'abrir'],
            ['jãn', 'jar', 'rasgar'],
            ['tén', 'ter', 'matar / morrer'],
            ['mranh', 'mráj', 'quebrar'],
            ['nĩfénh', 'nĩfe', 'fechar'],
            ['kutẽm', 'kutẽ', 'derrubar / cair'],
          ],
        },
        examples: [
          ['Gĩr vỹ jãnkã nón. — Jãnkã vỹ nor.', '“O menino abriu a porta. — A porta abriu.” (Tabosa, 2006, p. 61)'],
          ['Ũn gré vỹ ĩn pũn. — Ĩn vỹ pũr.', '“O homem queimou a casa. — A casa queimou.” (p. 60)'],
          ['Gĩr vỹ inh tẽja jãn. — Inh tẽja vỹ jar.', '“O menino rasgou minha rede. — Minha rede rasgou.” (p. 62)'],
        ],
      },
      {
        heading: 'Matar: “tén” ou “tãnh”',
        // TA06 p. 62 (tãnh ‘matar a pauladas’, tén ‘matar, embebedar’) e p. 71 (tãnh × ter, causativo lexical)
        text: 'Há dois verbos para “matar”. “Tén” é o par de “ter” (morrer) e quer dizer “matar” ou “embebedar”. “Tãnh”, que já apareceu no curso, é outra palavra, e Tabosa traduz como “matar a pauladas”.',
        examples: [
          ['Veneno vỹ mĩg tén.', '“Um veneno matou a onça.” (Tabosa, 2006, p. 62)'],
          ['Ẽg krénh tĩ vỹ mĩg tãnh.', '“O caçador matou a onça.” (p. 71)'],
        ],
      },
      {
        heading: 'Foi quebrado por: “mỹ”',
        // TA06 p. 65–66 (ex. 86–91: a passiva usa a forma sem agente e quem fez com “mỹ”)
        text: 'Para “foi quebrado pelo menino”, usa-se a forma de “acontece sozinho”, e quem fez a ação vem com “mỹ”.',
        examples: [
          ['Pratu vỹ gĩr mỹ góv.', '“O prato foi quebrado pelo menino.” (Tabosa, 2006, p. 65)'],
          ['Tẽja vỹ gĩr mỹ jar.', '“A rede foi rasgada pelo menino.” (p. 66)'],
        ],
      },
    ],
    pitfalls: [
      'Mudar o verbo de dentro com “han”: ele fica igual (“sẽsĩ tẽ” → “sẽsĩ tẽ han”).',
      'Esquecer o “tỹ” quando a ação de dentro tem objeto: “ti tỹ goj kron han”.',
      'Usar a forma em “-r” com quem faz: “Gĩr vỹ jãnkã nón”, não “nor”, que é a porta abrindo sozinha.',
    ],
    quiz: [
      {
        question: 'Como se diz “Manoel fez o pássaro voar”?',
        options: ['Nẽko vỹ sẽsĩ tẽ han.', 'Nẽko vỹ han sẽsĩ tẽ.', 'Sẽsĩ vỹ Nẽko tẽ.'],
        answer: 'Nẽko vỹ sẽsĩ tẽ han.',
        explanation: 'A ação inteira (“sẽsĩ tẽ”) vem antes de “han” (Tabosa, 2006, p. 73).',
      },
      {
        question: 'Qual frase diz “A porta abriu” (sozinha)?',
        options: ['Jãnkã vỹ nor.', 'Jãnkã vỹ nón.', 'Gĩr vỹ jãnkã nor.'],
        answer: 'Jãnkã vỹ nor.',
        explanation: '“Nón” é abrir algo; “nor”, abrir-se (Tabosa, 2006, p. 61).',
      },
      {
        question: 'Qual é o par de “rĩr” (acordar)?',
        options: ['rĩn (acordar alguém)', 'rĩnh', 'rĩgrĩg'],
        answer: 'rĩn (acordar alguém)',
        explanation: '“Ũn sĩ nỹ fi vỹ ti rĩn.” é “A mãe acordou o menino”; “Ũn sĩ vỹ rĩr.”, “O menino acordou” (Tabosa, 2006, p. 60).',
      },
    ],
  },
  {
    id: 'kgp-g15',
    level: 'B1.4',
    title: 'Começar, parar, terminar e gostar; a si mesmo e um ao outro',
    emoji: '🔁',
    summary:
      '“Começar” é “pẽnjẽg huri” ou “mũ ha”; “parar” é “mãn tũ nĩ ha” (não… de novo agora); “terminar” é “kãn huri”. “Gostar” se diz com “mẽ”. “Vẽnh” é “a si mesmo” e “jagnẽ”, “um ao outro”.',
    sections: [
      {
        heading: 'Começar, continuar, parar, terminar',
        // TA14 p. 138–142 (ex. 36–48)
        text: 'Tabosa (2014) reuniu as frases que dizem em que ponto a ação está. “Parar” se diz pela negação: “não… de novo agora”.',
        table: {
          head: ['Kaingang', 'Português', 'Página (Tabosa, 2014)'],
          rows: [
            ['Gĩr vỹ fỹ mũ ha.', 'O menino começou a chorar.', 'p. 139'],
            ['Manoel vỹ ĩn han pẽnjẽg huri.', 'Manoel começou a construir sua casa.', 'p. 139'],
            ['Professora fi vĩ jẽ nĩ.', 'A professora continua falando.', 'p. 140'],
            ['Gĩr vỹ fỹ mã tũ nĩ ha.', 'O menino parou de chorar.', 'p. 141'],
            ['Ludoviko vỹ vãju mãn tũ nĩ ha.', 'Ludoviko parou de fumar.', 'p. 141'],
            ['Manoel vỹ ĩn han kãn huri.', 'Manoel terminou de construir a casa.', 'p. 142'],
          ],
        },
      },
      {
        heading: 'Gostar, poder, ter medo',
        // TA14 p. 143 (ex. 50–52), p. 146 (ex. 58), p. 147 (ex. 60–61)
        text: 'Com “mẽ” depois do verbo, a ação é algo de que se gosta. “Ke mũ” é “poder”, e “ke vẽ”, “dever”. “Ter medo de” é “kamẽg”, depois da ação temida.',
        examples: [
          ['Luciana fi bolo ko mẽ nĩ.', '“Luciana gosta de comer bolo.” (Tabosa, p. 143)'],
          ['Gĩr vỹ ẽmĩ konh ke mũ.', '“O menino pode comer bolo.” (p. 147)'],
          ['Gĩr tỹ vẽnh kanhrãn ke vẽ.', '“O menino deve estudar.” (p. 147)'],
          ['José vỹ pỹn tỹ ti pranh ke kamẽg.', '“José ficou com medo de a cobra picá-lo.” (p. 146)'],
        ],
      },
      {
        heading: '“vẽnh”: a si mesmo; “jagnẽ”: um ao outro',
        // TA06 p. 67–69 (ex. 92–99: o verbo não muda; jagnẽ marca a reciprocidade e vẽnh, o reflexivo)
        text: 'Para “se lavar”, “se pentear”, o verbo não muda: entra “vẽnh” no lugar do objeto. Para “se encontraram”, entra “jagnẽ”.',
        examples: [
          ['Margarida fi gĩr rem. — Gĩr vỹ vẽnh rem.', '“Margarida penteou o menino. — O menino se penteou.” (Tabosa, 2006, p. 69)'],
          ['Jandira fi vỹ gĩr ku pé. — Gĩr vỹ vẽnh ku pé.', '“Jandira lavou o menino. — O menino se lavou.” (p. 68–69)'],
          ['Manoel mré Jandira fag vỹ jagnẽ ka to tẽ.', '“Manoel e Jandira se encontraram.” (p. 67)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “parar”: o kaingang diz “não… de novo agora” (“mãn tũ nĩ ha”).',
      'Esquecer o “vẽnh” em “se pentear”: sem ele, “Gĩr vỹ rem” não diz quem foi penteado.',
      'Confundir “vẽnh” (a si mesmo) com “jagnẽ” (um ao outro): “jagnẽ” precisa de duas pessoas ou mais.',
    ],
    quiz: [
      {
        question: 'Como se diz “O menino se penteou”?',
        options: ['Gĩr vỹ vẽnh rem.', 'Gĩr vỹ jagnẽ rem.', 'Gĩr vỹ rem han.'],
        answer: 'Gĩr vỹ vẽnh rem.',
        explanation: '“Vẽnh” é o reflexivo: “a si mesmo” (Tabosa, 2006, p. 69).',
      },
      {
        question: 'O que quer dizer “Ludoviko vỹ vãju mãn tũ nĩ ha”?',
        options: ['Ludoviko parou de fumar.', 'Ludoviko começou a fumar.', 'Ludoviko gosta de fumar.'],
        answer: 'Ludoviko parou de fumar.',
        explanation: '“Mãn tũ nĩ ha” é “não… de novo agora”: parou (Tabosa, 2014, p. 141).',
      },
    ],
  },
];
