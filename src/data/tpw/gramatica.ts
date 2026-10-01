import type { GrammarTopic } from '../types';

/** Tópicos de gramática do tupi antigo — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_TPW: GrammarTopic[] = [
  {
    id: 'tpw-g1',
    level: 'A1.1',
    title: 'Pronúncia e a ortografia de Navarro',
    emoji: '🔤',
    summary:
      'Este curso usa a ortografia moderna criada por Eduardo de Almeida Navarro para o tupi antigo (a mesma do seu “Método Moderno de Tupi Antigo” e do “Dicionário de Tupi Antigo”), com apóstrofo para a oclusiva glotal e til para marcar as vogais nasais.',
    sections: [
      {
        text:
          'Os textos originais dos séculos XVI e XVII (Anchieta, os catecismos jesuíticos) usavam uma grafia pouco padronizada, cheia de variações entre um escriba e outro. No século XX, o padre Lemos Barbosa propôs uma ortografia mais regular para o ensino, que Eduardo Navarro revisou e tornou a referência usada hoje nos cursos de tupi antigo — inclusive na USP, onde Navarro dá aulas da língua desde 1993.',
      },
      {
        heading: 'As letras e marcas que mais confundem quem já fala português',
        table: {
          head: ['Letra/marca', 'Som', 'Exemplo'],
          rows: [
            ["'", 'oclusiva glotal: uma pequena parada no ar (como a pausa de “uh-oh”)', "ta'yra (filho, dito pelo pai)"],
            ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasalada, como em “mãe” ou “você”', 'kûarahy (sol)'],
            ['y', 'vogal própria do tupi, entre o “i” e o “u”, com a língua puxada para trás', "'y (água)"],
            ['x', 'sempre “ch” (como em Portugal), nunca “cs” nem “z”', 'xe (eu, meu)'],
            ['gû, kû', 'g/k com um “u” bem curto grudado, quase “gw”/“kw”', 'gûasu (grande)'],
          ],
        },
        examples: [
          ['Oka gûasu.', 'A casa é grande. (gû = “gua”, não “gu” nem “gü”)'],
          ["Ta'yra mirĩ.", 'Um filho pequeno. (o apóstrofo marca a pequena pausa antes do “y”)'],
        ],
      },
    ],
    pitfalls: [
      'Ler o apóstrofo como pontuação decorativa: ele marca um som de verdade, a oclusiva glotal — “ta\'yra” e “tayra” não soam igual.',
      'Nasalizar só a vogal que tem til e esquecer que ela nasaliza a sílaba inteira: em “kûarahy”, o “ã” nasala toda aquela sílaba, não só a letra.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo representa na ortografia de Navarro para o tupi antigo?',
        options: ['Uma oclusiva glotal (uma pequena parada no ar)', 'Um acento tônico', 'A letra muda, só de enfeite'],
        answer: 'Uma oclusiva glotal (uma pequena parada no ar)',
        explanation: 'O apóstrofo marca um som consonantal real, a oclusiva glotal, como em “ta\'yra”.',
      },
      {
        question: 'Como soa a letra “x” no tupi antigo?',
        options: ['Como “ch” (ex.: xe)', 'Como “cs”', 'Como “z”'],
        answer: 'Como “ch” (ex.: xe)',
        explanation: 'Diferente do português do Brasil, o “x” do tupi antigo é sempre o som de “ch”.',
      },
    ],
  },
  {
    id: 'tpw-g2',
    level: 'A1.1',
    title: 'Os pronomes pessoais',
    emoji: '🙋',
    summary:
      'O tupi antigo tem duas séries de pronomes pessoais: uma para o sujeito independente (ixé, endé, a\'e…) e uma de prefixos usados com nomes e verbos (xe, nde, i-…). E tem dois “nós” diferentes: um que inclui a pessoa com quem se fala e outro que não inclui.',
    sections: [
      {
        heading: 'Pronomes independentes',
        text: 'Usados sozinhos, como sujeito de uma frase ou para dar ênfase.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ixé', 'eu'],
            ['endé', 'tu, você'],
            ["a'e", 'ele, ela'],
            ['oré', 'nós (sem quem ouve)'],
            ['îandé', 'nós (com quem ouve)'],
            ['peẽ', 'vocês'],
          ],
        },
        examples: [
          ['Ixé, xe rera Linu.', 'Eu, meu nome é Linu.'],
          ['Oré oroîkó óka pupé.', 'Nós (sem você) estamos em casa.'],
        ],
      },
      {
        heading: 'Dois “nós”: oré × îandé',
        text:
          'Como em vários idiomas indígenas do Brasil, o tupi antigo distingue um “nós” que inclui a pessoa com quem se fala (“îandé”, nós e você) de um “nós” que a exclui (“oré”, nós mas não você) — uma diferença que o português não marca.',
        examples: [['Taîasó, îandé!', 'Vamos (nós e você)!'], ['Oré oroîkó óka pupé.', 'Nós (sem você) estamos em casa.']],
      },
    ],
    pitfalls: [
      'Usar sempre “oré” para “nós”: se a pessoa com quem você fala está incluída, o certo é “îandé”.',
      'Confundir “endé” (tu/você, pronome independente) com “nde” (teu/seu, prefixo possessivo) — são formas relacionadas, mas com papéis diferentes na frase.',
    ],
    quiz: [
      {
        question: 'Qual “nós” inclui a pessoa com quem você está falando?',
        options: ['îandé', 'oré', 'peẽ'],
        answer: 'îandé',
        explanation: '“Îandé” é o “nós” inclusivo (eu + você); “oré” é o exclusivo (eu + outros, sem você).',
      },
    ],
  },
  {
    id: 'tpw-g3',
    level: 'A1.2',
    title: 'Sem verbo “ser”: o adjetivo funciona como verbo',
    emoji: '🧭',
    summary:
      'O tupi antigo não tem um verbo equivalente a “ser”/“estar” para ligar um nome a uma qualidade: o próprio adjetivo se comporta como um verbo, sem precisar de nenhuma palavra de ligação.',
    sections: [
      {
        text:
          'Em português, “a casa é grande” precisa do verbo “ser”. Em tupi antigo, basta encostar o substantivo no adjetivo: “oka gûasu” já significa “a casa é grande” (literalmente algo como “casa grande[-é]”). O mesmo vale para identificar alguém: “Pirá katu” é ao mesmo tempo “peixe bom” e “o peixe é bom”, dependendo do contexto.',
        examples: [
          ['Oka gûasu.', 'A casa é grande.'],
          ['Pirá katu.', 'O peixe é bom.'],
          ['Kunhã porang.', 'A mulher é bonita.'],
          ["A'e katu.", 'Ele/ela é bom(oa).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra tupi para “ser”/“estar” antes do adjetivo: no tupi antigo ela simplesmente não existe — o adjetivo já faz esse trabalho sozinho.',
      'Achar que “katu” só quer dizer “bom” como adjetivo solto: em frases como “pirá katu”, ele também carrega o sentido de “é bom”.',
    ],
    quiz: [
      {
        question: 'Como se diz “a casa é grande” em tupi antigo?',
        options: ['Oka gûasu.', 'Oka é gûasu.', 'Oka ikó gûasu.'],
        answer: 'Oka gûasu.',
        explanation: 'Não existe verbo “ser” no tupi antigo: o adjetivo “gûasu” (grande) já funciona como predicado, sem nenhuma palavra de ligação.',
      },
    ],
  },
  {
    id: 'tpw-g4',
    level: 'A1.2',
    title: 'Prefixos dos verbos e a alternância t/r na posse',
    emoji: '📘',
    summary:
      'Os verbos ativos levam um prefixo que marca a pessoa (a-, ere-, o-…), e alguns substantivos trocam a consoante inicial quando aparecem possuídos (tuba → xe ruba). O tupi antigo também só tinha numerais nativos de um a quatro.',
    sections: [
      {
        heading: 'Prefixos pessoais dos verbos ativos',
        text: "Verbos como “'u” (comer), “ikó” (estar) e “só” (ir) recebem um prefixo que já diz quem é o sujeito — por isso o pronome independente costuma ficar de fora, como em português.",
        table: {
          head: ['Pessoa', 'Prefixo', 'Exemplo com “só” (ir)'],
          rows: [
            ['eu', 'a-', 'asó (eu vou)'],
            ['tu/você', 'ere-', 'ereîur (tu vens)'],
            ['ele/ela', 'o-', 'osó (ele/ela vai)'],
            ['nós (sem você)', 'oro-', 'oroîkó (nós estamos)'],
            ['nós (com você)', 'îa-', 'taîasó (vamos! — com o prefixo exortativo ta-)'],
            ['vocês', 'pe-', 'pe\'u (vocês comem)'],
          ],
        },
        examples: [
          ["A'u pirá.", 'Eu como peixe.'],
          ['Aîkó óka pupé.', 'Eu estou em casa.'],
          ['Taîasó!', 'Vamos! (prefixo exortativo ta- + îa-, “nós”)'],
        ],
      },
      {
        heading: 'A alternância t/r na posse',
        text:
          'Alguns substantivos mudam a consoante inicial quando possuídos: “tuba” (pai) sozinho começa com t-, mas “meu pai” se diz “xe ruba”, com r- no lugar do t-. É um traço bem conhecido das línguas da família tupi-guarani.',
        examples: [
          ['tuba', 'pai (forma isolada, com t-)'],
          ['Xe ruba gûasu.', 'Meu pai é grande. (com r-, possuído)'],
        ],
      },
      {
        heading: 'Números: só de um a quatro',
        text:
          'O tupi antigo só tinha numerais nativos para contar de um a quatro (oîepé, mokõî, mosapyr, irundyk) — não por limitação da língua, mas porque a vida da aldeia não exigia contagens mais precisas que isso; para “muitos”, usava-se a palavra “etá”, sem precisar de um número exato.',
        examples: [
          ['Mokõî membyra.', 'Dois filhos.'],
          ['Mosapyr abá.', 'Três homens.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo do verbo e usá-lo "pelado", como em português: em tupi antigo, um verbo sem prefixo de pessoa soa incompleto.',
      'Tentar inventar numerais tupi acima de quatro: a língua simplesmente não os tinha — o certo, historicamente, era dizer "etá" (muitos).',
    ],
    quiz: [
      {
        question: 'Como se diz “meu pai” em tupi antigo?',
        options: ['xe ruba', 'xe tuba', 'tuba xe'],
        answer: 'xe ruba',
        explanation: '“Tuba” troca o t- por r- quando possuído: “xe ruba” (meu pai), não “xe tuba”.',
      },
      {
        question: 'Até quanto o tupi antigo contava com numerais nativos?',
        options: ['Até quatro (depois, usava-se "etá", muitos)', 'Até dez', 'Não tinha numerais'],
        answer: 'Até quatro (depois, usava-se "etá", muitos)',
        explanation: 'Os numerais nativos documentados vão só até "irundyk" (quatro); de resto, dizia-se "etá" (muitos), sem precisão numérica.',
      },
    ],
  },
];
