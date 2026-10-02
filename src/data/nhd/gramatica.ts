import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ñandeva — por enquanto só A1.1 e A1.2 (pacote incompleto). Traços
 * conferidos especificamente para o ñandeva (não copiados do guarani paraguaio, do mbyá nem do
 * kaiowá): Edson Amaurílio, «Elementos para uma Sociolinguística do Guarani: o Ñandeva falado na
 * Reserva Indígena de Porto Lindo-Japorã-MS» (dissertação de mestrado, UFGD, 2019) — que compara o
 * Ñandeva-PL (Porto Lindo, Mato Grosso do Sul) com o kaiowá e o avañe'ẽ (guarani paraguaio) ponto a
 * ponto — e Consuelo de Paiva Godinho Costa, «Nhandewa Aywu» (dissertação de mestrado, Unicamp,
 * 2003), sobre o nhandewa de São Paulo e do Paraná (mesma língua, nhd).
 */
export const GRAMMAR_NHD: GrammarTopic[] = [
  {
    id: 'nhd-g1',
    level: 'A1.1',
    title: 'Sons do ñandeva de Porto Lindo',
    emoji: '🔤',
    summary: 'Seis vogais orais e seis nasais, uma pausa na garganta marcada por apóstrofo, e uma diferença que distingue o ñandeva de Porto Lindo do nhandewa de São Paulo e do Paraná.',
    sections: [
      {
        text: 'O ñandeva de Porto Lindo (Ñandeva-PL) tem seis vogais orais (i, ɨ — escrita “y” —, u, e, o, a) e as mesmas seis nasalizadas (ĩ, ỹ, ũ, ẽ, õ, ã), segundo o quadro fonético de Amaurílio (2019). O apóstrofo marca uma pausa curta na garganta: “mba\'e” (o que, coisa) soa diferente sem ele. Um traço que distingue claramente o Ñandeva-PL do nhandewa falado em São Paulo e no Paraná: palavras de uma sílaba só tônica, como “xe” (eu), não dobram a vogal no Ñandeva-PL — mas dobram na variedade paulista/paranaense, que diz “txe\'e”. É um dos sinais fonéticos que, segundo Amaurílio, aproximam o Ñandeva-PL do kaiowá e do avañe\'ẽ (guarani paraguaio), e o afastam do nhandewa de São Paulo e do Paraná.',
        table: {
          head: ['Traço', 'Ñandeva-PL (Porto Lindo, MS)', 'Nhandewa (São Paulo/Paraná)'],
          rows: [
            ['“eu”', 'xe', 'txe\'e (vogal duplicada)'],
            ['“você”', 'nde', 'nde\'e (vogal duplicada)'],
            ['“água”', 'y', 'y\'y (vogal duplicada)'],
          ],
        },
        examples: [
          ['Xe ava.', 'Eu sou gente (indígena).'],
          ['Mba\'e kuaa?', 'O que (você) sabe?'],
        ],
      },
    ],
    pitfalls: [
      'Duplicar a vogal de palavras como “xe” e “nde”: essa duplicação existe no ñandeva de São Paulo e do Paraná, mas não no Ñandeva-PL de Porto Lindo (MS), que é a variedade ensinada aqui.',
      'Esquecer o apóstrofo em palavras como “mba\'e” e “araka\'e”: sem ele, a pausa na garganta desaparece e a palavra muda de som.',
    ],
    quiz: [
      {
        question: 'No Ñandeva-PL (Porto Lindo, MS), como se diz “eu”?',
        options: ['Xe', 'Txe\'e', 'Ñandeva'],
        answer: 'Xe',
        explanation: '“Txe\'e”, com a vogal duplicada, é a forma do nhandewa de São Paulo e do Paraná — a mesma língua, mas outra variedade regional.',
      },
      {
        question: 'O que o apóstrofo marca em “mba\'e”?',
        options: ['Uma pausa curta na garganta', 'Que a vogal é nasal', 'Nada: é decoração'],
        answer: 'Uma pausa curta na garganta',
        explanation: 'Essa pausa (oclusiva glotal) é um som próprio do ñandeva, igual em várias línguas da família tupi-guarani.',
      },
    ],
  },
  {
    id: 'nhd-g2',
    level: 'A1.1',
    title: 'Xe, nde, nhande: pronomes e posse sem verbo “ser”',
    emoji: '🙋',
    summary: 'Pronomes curtos — xe, nde, nhande — e uma frase inteira formada só com duas palavras lado a lado, sem precisar de um verbo equivalente a “ser”.',
    sections: [
      {
        text: 'Em Ñandeva-PL, “xe” é “eu” e “nde” é “você/tu” (Amaurílio, 2019); “nhande”, registrado por Costa (2003) para o nhandewa de São Paulo e do Paraná, é o “nós” que inclui a pessoa com quem se fala. Para apresentar alguém ou descrever algo, duas palavras lado a lado já formam uma frase completa: colocar um pronome ou um substantivo diretamente antes de outro substantivo já indica posse, sem nenhuma palavra equivalente a “ser” ou a “de”. “Nhande tamõi” já é “nosso avô”, e “xe ava” já é “eu sou gente (indígena)”.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['xe', 'eu'],
            ['nde', 'tu, você'],
            ['nhande', 'nós (incluindo quem ouve)'],
          ],
        },
        examples: [
          ['Xe ava.', 'Eu sou gente (indígena).'],
          ['Nhande tamõi.', 'Nosso avô.'],
          ['Nhande jari.', 'Nossa avó.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo para “ser” numa descrição simples: no ñandeva, como em outras línguas tupi-guarani, duas palavras lado a lado já bastam.',
      'Trocar “nhande” por “xe” ao falar de uma pessoa da família que também pertence a quem ouve: “nhande tamõi” inclui o avô de quem fala E de quem ouve.',
    ],
    quiz: [
      { question: 'Como se diz “nosso avô” sem inventar um verbo “ser”?', options: ['Nhande tamõi.', 'Nhande ha\'e tamõi.', 'Tamõi iko nhande.'], answer: 'Nhande tamõi.', explanation: 'O pronome vem direto antes do substantivo, marcando posse sem verbo nenhum.' },
      { question: '“Nde”, no Ñandeva-PL, quer dizer…', options: ['tu, você', 'nós', 'eles, elas'], answer: 'tu, você', explanation: '“Nhande” é que reúne “nós”, incluindo quem ouve.' },
    ],
  },
  {
    id: 'nhd-g3',
    level: 'A1.2',
    title: 'Perguntas sem partícula extra',
    emoji: '❓',
    summary: 'Maã, moõ, mba\'e, araka\'e e mba\'echa perguntam sozinhos — sem as partículas “-ti” do kaiowá nem “-pa”/“piko” do avañe\'ẽ, que o Ñandeva-PL não usa.',
    sections: [
      {
        text: 'Amaurílio (2019) comparou as palavras interrogativas do Ñandeva-PL com as do kaiowá e do avañe\'ẽ (guarani paraguaio) e encontrou uma diferença clara: o kaiowá costuma acrescentar a partícula “-ti” (“ki-va\'e ti”, quem) e o avañe\'ẽ acrescenta “-pa” ou “piko” (“mba\'eicha-pa”, como; “mava piko”, quem) — nenhuma dessas partículas aparece nos dados do Ñandeva-PL, onde a palavra interrogativa pergunta sozinha: “maã” (quem), “moõ” (onde), “mba\'e” (o que, coisa), “araka\'e” (quando) e “mba\'echa” (como, sem o “-pa” do avañe\'ẽ).',
        table: {
          head: ['Pergunta', 'Ñandeva-PL', 'Kaiowá', 'Avañe\'ẽ'],
          rows: [
            ['quem', 'maã', 'ki-va\'e ti', 'mava piko'],
            ['como', 'mba\'echa', 'mba\'echa', 'mba\'eicha(pa)'],
          ],
        },
        examples: [
          ['Maã ava?', 'Quem (é essa) pessoa?'],
          ['Moõ tekoha?', 'Onde (fica) a aldeia?'],
          ['Mba\'echa nde?', 'Como (está) você?'],
        ],
      },
    ],
    pitfalls: [
      'Acrescentar “-pa” ou “-ti” depois da palavra interrogativa, por semelhança com o avañe\'ẽ ou o kaiowá: no Ñandeva-PL, a pergunta não leva essa partícula extra.',
      'Confundir “moõ” (onde) com “mba\'e” (o que, coisa): são perguntas diferentes, sobre lugar e sobre coisa.',
    ],
    quiz: [
      { question: 'No Ñandeva-PL, como se pergunta “como”?', options: ['Mba\'echa', 'Mba\'eicha-pa', 'Mba\'echa-ti'], answer: 'Mba\'echa', explanation: '“-pa” é do avañe\'ẽ (guarani paraguaio) e “-ti” é do kaiowá: nenhuma das duas aparece no Ñandeva-PL.' },
      { question: '“Moõ” pergunta sobre…', options: ['lugar (onde)', 'pessoa (quem)', 'tempo (quando)'], answer: 'lugar (onde)', explanation: 'Para “quando”, o Ñandeva-PL usa “araka\'e”.' },
    ],
  },
  {
    id: 'nhd-g4',
    level: 'A1.2',
    title: 'Numeral antes, adjetivo depois',
    emoji: '🔢',
    summary: 'Para contar, o numeral vem sempre antes do substantivo; para descrever, o adjetivo vem sempre depois — a mesma ordem que aparece no resumo da própria dissertação de Amaurílio, escrito em ñandeva.',
    sections: [
      {
        text: 'No resumo em ñandeva da sua própria dissertação, Amaurílio (2019) escreve “mbohapy ambue ñe\'e” (“três outras línguas”) e “petei mba\'e iporãva” (“uma coisa boa”): o numeral (“mbohapy”, três; “petei”, um) vem sempre antes do substantivo que conta, e o adjetivo (aqui, “porã”, bom/bonito, com o sufixo “-va”) vem depois. É a mesma ordem usada em frases mais simples, sem esse sufixo: “ywy porã” (a terra é boa) nunca “porã ywy”, e “mbohapy ava” (três pessoas) nunca “ava mbohapy”.',
        table: {
          head: ['Palavra', 'Posição', 'Exemplo'],
          rows: [
            ['numeral (petei, mbohapy)', 'antes do substantivo', 'mbohapy ava, “três pessoas”'],
            ['adjetivo (porã, pytã, ãtã)', 'depois do substantivo', 'ywy porã, “a terra é boa”'],
          ],
        },
        examples: [
          ['Mbohapy ava.', 'Três pessoas.'],
          ['Ywy porã.', 'A terra é boa.'],
          ['Jaguaretê pytã.', 'Onça vermelha.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o adjetivo antes do substantivo, como em português (“uma bonita terra”): no ñandeva, ele vem sempre depois.',
      'Colocar o numeral depois do substantivo: no ñandeva, ele vem sempre antes, como mostra o próprio resumo da dissertação de Amaurílio (2019).',
    ],
    quiz: [
      { question: 'Qual é a ordem certa para “três pessoas”?', options: ['Mbohapy ava.', 'Ava mbohapy.', 'Ava porã mbohapy.'], answer: 'Mbohapy ava.', explanation: 'O numeral vem sempre antes do substantivo no ñandeva.' },
      { question: 'Em “ywy porã”, qual é a ordem das palavras?', options: ['Substantivo + adjetivo', 'Adjetivo + substantivo', 'Numeral + substantivo'], answer: 'Substantivo + adjetivo', explanation: '“Ywy” (terra) vem primeiro, “porã” (boa) depois — a ordem do ñandeva.' },
    ],
  },
];
