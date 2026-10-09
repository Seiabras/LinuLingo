import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do malgaxe — A1.1, A1.2 e, a partir daqui, A2.1 e A2.2 (pacote ainda
 * incompleto depois disso). Fontes do A1: o apêndice "Malagasy Swadesh list" do Wiktionary (ordem
 * VOS, exemplo "Nahita ny voalavo ny akoho"), a tese de Keenan & Ralalaoherivony sobre pronomes
 * possessivos (sufixos -ko/-nao/-ny), a base de tipologia WALS (ordem substantivo-adjetivo) e o
 * dicionário malagasyword.org (padrão de tempo mi-/ni-/hi- nos verbos ativos, confirmado em várias
 * entradas, como mihinana/nihinana/hihinana).
 *
 * Fontes do A2 (tópicos mg-g5 a mg-g7): malagasyword.org (entradas "telopolo"/"efapolo"/.../"zato"/
 * "arivo" para as dezenas e centena/milhar, e a entrada "amy", que já traz o exemplo "miainga
 * amin'ny fito maraina", sai às sete da manhã) e o curso de malgaxe da Universidade de
 * Wisconsin-Madison (wisc.pb.unizin.org/lctlresources), que confirma a pergunta "Amin'ny firy
 * izao?" (que horas são agora?) e a negação com "tsy" antes do verbo.
 */
export const GRAMMAR_MG: GrammarTopic[] = [
  {
    id: 'mg-g1',
    level: 'A1.1',
    title: 'A ordem VOS: o predicado vem primeiro',
    emoji: '🔀',
    summary: 'Em malgaxe, o predicado (verbo ou adjetivo) vem no início da frase, e quem faz ou é aquilo vem no final — o oposto da ordem sujeito-verbo-objeto do português.',
    sections: [
      {
        text: 'O malgaxe é classificado como VOS (verbo-objeto-sujeito): o predicado abre a frase, e o sujeito fecha. Com um adjetivo como predicado, a lógica é a mesma: “Tsara izy” não é “bem ele”, é “Ele está bem” — “tsara” (bem/bom) é o predicado, “izy” (ele/ela) é quem está assim.',
        examples: [
          ['Tsara izy.', 'Ele/ela está bem.'],
          ['Mihinana vary isika.', 'Nós comemos arroz. (lit. “come arroz nós”)'],
        ],
      },
      {
        heading: 'A pergunta de sim/não: a partícula “ve”',
        text: 'Para fazer uma pergunta de sim/não, o malgaxe não muda a ordem da frase: só acrescenta a partícula “ve” logo depois do predicado (com tudo que o acompanha, como o objeto), antes do sujeito.',
        examples: [['Tia vary ve ianao?', 'Você gosta de arroz? (lit. “gosta arroz [pergunta] você”)']],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra na ordem do português: “Tsara izy” não é “Bem ele”, é “Ele está bem” — o predicado vem primeiro, não o sujeito.'],
    quiz: [
      {
        question: 'Em “Tsara izy”, qual palavra é o predicado (o que vem primeiro em malgaxe)?',
        options: ['tsara (bem/bom)', 'izy (ele/ela)', 'as duas, juntas'],
        answer: 'tsara (bem/bom)',
        explanation: 'O malgaxe é VOS: o predicado (aqui, o adjetivo “tsara”) vem primeiro, e o sujeito (“izy”) vem depois.',
      },
    ],
  },
  {
    id: 'mg-g2',
    level: 'A1.1',
    title: 'Aho, ianao, izy: os pronomes depois do predicado',
    emoji: '🙋',
    summary: 'Os pronomes pessoais mais comuns (“aho”, “ianao”, “izy”…) aparecem depois do predicado, encaixando na ordem VOS — e “nós” tem duas palavras diferentes, segundo quem está incluído.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['aho', 'eu'],
            ['ianao', 'você'],
            ['izy', 'ele / ela'],
            ['isika', 'nós (inclui quem ouve)'],
          ],
        },
        text: '“Aho” (eu) é usado depois do predicado, como nos exemplos deste curso (“Tsara aho”, eu estou bem) — existe também “izaho”, usado antes do predicado, mas esse uso não entra nesta primeira versão.',
        examples: [
          ['Tsara aho, misaotra!', 'Eu estou bem, obrigado!'],
          ['Manao ahoana ianao?', 'Como você está?'],
        ],
      },
      {
        heading: '“Nós” tem duas palavras',
        text: 'O malgaxe distingue um “nós” que inclui a pessoa com quem se fala (“isika”, ensinado neste curso) de um “nós” que a exclui (“izahay”, fora desta primeira versão) — uma distinção que o português não faz.',
      },
    ],
    pitfalls: ['Colocar o pronome antes do predicado, como em português (“Eu tsara” em vez de “Tsara aho”): em malgaxe, ele vem depois.'],
    quiz: [
      {
        question: 'Qual é a tradução de “isika”?',
        options: ['nós (incluindo quem ouve)', 'eu', 'eles/elas'],
        answer: 'nós (incluindo quem ouve)',
        explanation: '“Isika” é o “nós” inclusivo; existe também “izahay”, o “nós” exclusivo, que não entra nesta versão do curso.',
      },
    ],
  },
  {
    id: 'mg-g3',
    level: 'A1.2',
    title: 'Substantivo + adjetivo: a ordem invertida',
    emoji: '📐',
    summary: 'Dentro de um grupo de palavras (não como predicado da frase), o adjetivo vem DEPOIS do substantivo em malgaxe: “trano lehibe” é “casa grande”, nesta ordem, sempre.',
    sections: [
      {
        text: 'Quando o adjetivo descreve um substantivo dentro do mesmo grupo de palavras (não como predicado de uma frase inteira), a ordem é substantivo primeiro, adjetivo depois — sem exceção, diferente do português, que às vezes aceita as duas ordens (“casa grande”/“grande casa”).',
        examples: [['trano lehibe', 'casa grande']],
      },
      {
        heading: 'E como predicado, o adjetivo pula pra frente',
        text: 'Quando o mesmo adjetivo é o predicado da frase (não só descreve um substantivo), ele pula pra frente de tudo, pela ordem VOS já vista na unidade 1: “Lehibe ny trano” (a casa é grande) tem “lehibe” primeiro, porque agora ele é o predicado, não só um descritor dentro do grupo.',
        examples: [['Lehibe ny trano.', 'A casa é grande.']],
      },
    ],
    pitfalls: ['Esperar a ordem do português (adjetivo às vezes antes do substantivo): em malgaxe, dentro do grupo de palavras, o adjetivo é sempre depois.'],
    quiz: [
      {
        question: 'Como se diz “casa grande” em malgaxe?',
        options: ['trano lehibe', 'lehibe trano', 'as duas formas valem'],
        answer: 'trano lehibe',
        explanation: 'Dentro do grupo de palavras, o substantivo vem primeiro e o adjetivo depois: “trano lehibe”, nunca o contrário.',
      },
    ],
  },
  {
    id: 'mg-g4',
    level: 'A1.2',
    title: 'O tempo do verbo é um prefixo: mi-, ni-, hi-',
    emoji: '⏱️',
    summary: 'Muitos verbos do malgaxe trocam a primeira letra do prefixo para marcar o tempo: “m” no presente, “n” no passado, “h” no futuro — a raiz da palavra não muda.',
    sections: [
      {
        table: {
          head: ['Tempo', 'Prefixo', 'Exemplo (comer)'],
          rows: [
            ['presente', 'mi-', 'mihinana (como/comes/come)'],
            ['passado', 'ni-', 'nihinana (comi/comeu)'],
            ['futuro', 'hi-', 'hihinana (vou comer/vai comer)'],
          ],
        },
        text: 'A raiz do verbo fica a mesma nos três tempos (aqui, “-hinana”); só o começo do prefixo muda: “m” no presente, “n” no passado, “h” no futuro. O mesmo padrão vale para “misotro” (beber): “nisotro” no passado, “hisotro” no futuro.',
        examples: [
          ['Mihinana vary aho.', 'Eu como arroz.'],
          ['Omaly, nihinana vary aho.', 'Ontem, eu comi arroz.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra de tempo separada, como “comi” em português: em malgaxe o tempo mora dentro do prefixo do próprio verbo.'],
    quiz: [
      {
        question: 'Como fica “mihinana” (comer) no passado?',
        options: ['nihinana', 'hihinana', 'tsy mihinana'],
        answer: 'nihinana',
        explanation: 'O presente troca o “m” do prefixo por “n” no passado: mihinana → nihinana.',
      },
    ],
  },
  {
    id: 'mg-g5',
    level: 'A2.1',
    title: 'De trinta a mil: a dezena colada em “-polo”',
    emoji: '🔢',
    summary: 'Depois do vinte (“roapolo”), cada dezena nova é só o dígito colado em “-polo” (de “folo”, dez) — sem palavra nova pra aprender, só juntar o que já existe.',
    sections: [
      {
        table: {
          head: ['Número', 'Palavra', 'Por dentro'],
          rows: [
            ['30', 'telopolo', 'telo (três) + polo'],
            ['40', 'efapolo', 'efatra (quatro) + polo'],
            ['50', 'dimampolo', 'dimy (cinco) + polo'],
            ['60', 'enimpolo', 'enina (seis) + polo'],
            ['70', 'fitopolo', 'fito (sete) + polo'],
            ['80', 'valopolo', 'valo (oito) + polo'],
            ['90', 'sivifolo', 'sivy (nove) + folo'],
          ],
        },
        text: 'A mesma lógica do “roapolo” (vinte, “roa” + “polo”) continua até o noventa: o dígito de 3 a 9 cola direto no final de “-polo” (variação de “folo”, dez), sem espaço. “Cem” (“zato”) e “mil” (“arivo”) já são palavras próprias, não compostas.',
        examples: [
          ['Telopolo taona aho.', 'Eu tenho trinta anos. (lit. “trinta anos eu”)'],
          ['Zato taona ny trano.', 'A casa tem cem anos.'],
        ],
      },
    ],
    pitfalls: ['Esperar uma palavra nova e diferente para cada dezena, como em português: em malgaxe, de 30 a 90, é sempre o dígito + “-polo”/“-folo”.'],
    quiz: [
      {
        question: 'Como se diz “setenta” em malgaxe, juntando “fito” (sete) com a terminação das dezenas?',
        options: ['fitopolo', 'folofito', 'fito folo roa'],
        answer: 'fitopolo',
        explanation: '“Fitopolo” é “fito” (sete) colado em “-polo” — o mesmo padrão de “telopolo” (30) e “efapolo” (40).',
      },
    ],
  },
  {
    id: 'mg-g6',
    level: 'A2.2',
    title: 'Amin\'ny + hora: dizer a que horas',
    emoji: '🕐',
    summary: 'Para perguntar e dizer a hora, o malgaxe usa a palavra “amin\'ny” antes do número da hora, seguida da parte do dia (“maraina”, manhã; “hariva”, fim de tarde; “alina”, noite).',
    sections: [
      {
        text: 'A pergunta “Amin\'ny firy izao?” (que horas são agora?) é a forma padrão de perguntar a hora — “firy” aqui é o mesmo “quantos” já visto no mercado, e “izao” é “agora”. Para responder, o número da hora vem logo depois de “amin\'ny”, e a parte do dia fecha a frase.',
        examples: [
          ['Amin\'ny firy izao?', 'Que horas são agora?'],
          ['Mifoha amin\'ny enina maraina aho.', 'Eu me levanto às seis da manhã.'],
        ],
      },
      {
        heading: 'Essa versão do curso fica nas horas cheias',
        text: 'O malgaxe tem um jeito próprio de contar os minutos (“sy” para “e” e “latsaka” para “menos”, com palavras específicas para quarto e meia) — mais complicado do que esta unidade cobre. Por enquanto, as horas aqui são sempre cheias: “amin\'ny roa hariva” (às duas da tarde), nunca “às duas e quinze”.',
        examples: [['Miasa amin\'ny roa hariva aho.', 'Eu trabalho às duas da tarde.']],
      },
    ],
    pitfalls: ['Esquecer o “amin\'ny” antes do número: sem ele, “roa hariva” sozinho não vira automaticamente “às duas da tarde” nas frases deste curso.'],
    quiz: [
      {
        question: 'Como se pergunta “Que horas são agora?” em malgaxe?',
        options: ['Amin\'ny firy izao?', 'Firy izao ve?', 'Inona ny ora?'],
        answer: 'Amin\'ny firy izao?',
        explanation: '“Amin\'ny firy izao?” é a pergunta confirmada para a hora: “amin\'ny firy” (a que quantidade de horas) + “izao” (agora).',
      },
    ],
  },
  {
    id: 'mg-g7',
    level: 'A2.2',
    title: '“Tsy”: a palavra que nega a frase',
    emoji: '🚫',
    summary: 'Para negar uma frase em malgaxe, basta colocar “tsy” logo antes do predicado (verbo ou adjetivo) — sem mudar mais nada na ordem da frase.',
    sections: [
      {
        text: '“Tsy” vem sempre antes do predicado, no mesmo lugar onde a ordem VOS já colocava o verbo ou o adjetivo. A unidade 1 já usava isso sem explicar: “Tsy mahafantatra aho” (eu não sei/entendo) é “tsy” + o verbo “mahafantatra” (saber/entender) + o sujeito “aho”.',
        examples: [
          ['Tsy mahafantatra aho.', 'Eu não sei/entendo.'],
          ['Tsy manana vola aho.', 'Eu não tenho dinheiro.'],
        ],
      },
      {
        heading: 'Também nega adjetivo',
        text: 'Do mesmo jeito que um verbo, um adjetivo-predicado também aceita o “tsy” na frente, porque na ordem VOS os dois ocupam o mesmo lugar, no início da frase.',
        examples: [['Tsy lafo ny mofo.', 'O pão não é caro.']],
      },
    ],
    pitfalls: ['Colocar “tsy” perto do sujeito, como a negação em português (“eu não sei”): em malgaxe “tsy” fica colado ao predicado, no começo da frase, não perto do sujeito no final.'],
    quiz: [
      {
        question: 'Como se diz “Eu não tenho dinheiro” em malgaxe, usando “tsy”, “manana” (ter) e “vola” (dinheiro)?',
        options: ['Tsy manana vola aho.', 'Manana tsy vola aho.', 'Aho tsy manana vola.'],
        answer: 'Tsy manana vola aho.',
        explanation: '“Tsy” vem antes do predicado (“manana vola”, tem dinheiro), e o sujeito “aho” continua no final, como na ordem VOS.',
      },
    ],
  },
];
