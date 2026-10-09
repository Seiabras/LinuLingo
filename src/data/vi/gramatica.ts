import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do vietnamita — A1 completo, mais A2 (g5-g7). Fontes das construções do A2:
 * Wikcionário em inglês (en.wiktionary.org, verbetes "đã", "đang", "sẽ", "hơn", "nhất", "hãy" e
 * "đừng": partículas de tempo/aspecto, comparativo/superlativo e o imperativo).
 */
export const GRAMMAR_VI: GrammarTopic[] = [
  {
    id: 'vi-g1',
    level: 'A1.1',
    title: 'Os seis tons do vietnamita',
    emoji: '🎵',
    summary: 'A mesma sílaba muda de sentido conforme o tom com que é dita — no dialeto do Norte (Hanói, a referência deste curso), são seis tons diferentes.',
    sections: [
      {
        table: {
          head: ['Marca', 'Nome', 'Como soa', 'Exemplo'],
          rows: [
            ['(nenhuma)', 'ngang', 'nível, sem subir nem descer', 'ma (fantasma)'],
            ['̀', 'huyền', 'grave, descendo suave', 'mà (mas)'],
            ['́', 'sắc', 'ascendente, como uma pergunta curta', 'má (bochecha; mãe no Sul)'],
            ['̉', 'hỏi', 'desce e depois sobe, hesitante', 'mả (túmulo)'],
            ['̃', 'ngã', 'quebrado, com uma pausa no meio', 'mã (código)'],
            ['̣', 'nặng', 'baixo e cortado seco', 'mạ (muda de arroz)'],
          ],
        },
        text: 'Não existe um jeito de "ler" o tom certo sem praticar de ouvido: os áudios de cada palavra do vocabulário mostram o tom na prática, sílaba por sílaba.',
      },
    ],
    pitfalls: ['Ignorar o tom achando que é só um "acento decorativo": trocar o tom troca completamente a palavra, como “ma” (fantasma) virando “mã” (código).'],
    quiz: [{ question: 'O que diferencia "má" de "mà" em vietnamita?', options: ['o tom', 'o significado é o mesmo', 'a letra inicial'], answer: 'o tom', explanation: 'A única diferença entre as duas palavras é o tom com que são ditas — e isso muda completamente o sentido.' }],
  },
  {
    id: 'vi-g2',
    level: 'A1.1',
    title: 'Sem conjugação: o verbo "là"',
    emoji: '🙋',
    summary: 'Como o indonésio, o verbo vietnamita nunca muda de forma — a mesma palavra serve para qualquer pessoa.',
    sections: [
      {
        text: 'O verbo “là” (ser) é sempre igual: “tôi là” (eu sou), “bạn là” (você é), “anh ấy là” (ele é). O sujeito nunca pode ficar de fora, já que não há terminação verbal para indicar quem fala.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['tôi', 'eu'],
            ['bạn', 'você'],
            ['anh ấy / cô ấy', 'ele / ela'],
            ['chúng tôi', 'nós'],
            ['họ', 'eles / elas'],
          ],
        },
        examples: [
          ['Tôi đến từ Brazil.', 'Eu sou do Brasil.'],
          ['Anh ấy đến từ Hà Nội.', 'Ele é de Hanói.'],
        ],
      },
    ],
    pitfalls: ['Procurar formas verbais diferentes por pessoa, como em português: o verbo vietnamita nunca conjuga.'],
    quiz: [{ question: 'Como muda o verbo "là" entre "eu" e "ele"?', options: ['não muda: "tôi là" e "anh ấy là"', 'vira "làm" na terceira pessoa', 'vira "lài"'], answer: 'não muda: "tôi là" e "anh ấy là"', explanation: 'Os verbos vietnamitas nunca conjugam por pessoa.' }],
  },
  {
    id: 'vi-g3',
    level: 'A1.2',
    title: 'Anh trai, chị gái, em trai, em gái',
    emoji: '👪',
    summary: 'O vietnamita tem uma palavra diferente para cada combinação de idade relativa e sexo do irmão — quatro palavras onde o português usa só duas.',
    sections: [
      {
        table: {
          head: ['', 'Mais velho(a)', 'Mais novo(a)'],
          rows: [
            ['Homem', 'anh trai', 'em trai'],
            ['Mulher', 'chị gái', 'em gái'],
          ],
        },
        text: 'Essas palavras também funcionam como formas de tratamento respeitoso para pessoas próximas em idade, mesmo sem parentesco — parecido com o “kakak”/“adik” do indonésio, mas distinguindo também o sexo.',
        examples: [['Tôi có một anh trai và một em gái.', 'Eu tenho um irmão mais velho e uma irmã mais nova.']],
      },
    ],
    pitfalls: ['Tentar traduzir "irmão" com uma palavra só: em vietnamita, sempre depende da idade relativa E do sexo.'],
    quiz: [{ question: 'Como se diz "irmã mais nova" em vietnamita?', options: ['em gái', 'chị gái', 'em trai'], answer: 'em gái', explanation: '"Em" marca mais novo(a), e "gái" marca mulher.' }],
  },
  {
    id: 'vi-g4',
    level: 'A1.2',
    title: 'O plural e os classificadores',
    emoji: '📘',
    summary: 'Como o indonésio, o substantivo vietnamita geralmente não muda no plural; em vez disso, usa-se uma "palavra contadora" (classificador) antes dele.',
    sections: [
      {
        text: 'Cada tipo de coisa tem o seu classificador: “con” para animais (con mèo, o/um gato), “cái” para objetos (cái nhà, a/uma casa), “người” para pessoas (người bạn, o/um amigo). No plural, acrescenta-se “những” ou “các” antes do classificador: “những con mèo” (os gatos).',
        examples: [
          ['một con mèo', 'um gato'],
          ['những con mèo', 'os gatos'],
        ],
      },
    ],
    pitfalls: ['Esperar um -s de plural como em português: o substantivo vietnamita não muda; o que muda é a palavra antes dele.'],
    quiz: [{ question: 'Como se diz "os gatos" em vietnamita?', options: ['những con mèo', 'con mèos', 'mèo nhiều'], answer: 'những con mèo', explanation: '“Những” marca o plural antes do classificador “con”, e o substantivo “mèo” não muda.' }],
  },
  {
    id: 'vi-g5',
    level: 'A2.1',
    title: 'Đã, đang, sẽ, chưa: o tempo sem conjugar',
    emoji: '⏳',
    summary: 'Como o verbo vietnamita nunca muda de forma, o tempo aparece em palavrinhas antes dele: "đã" (já aconteceu), "đang" (está acontecendo agora), "sẽ" (vai acontecer) e "chưa" (ainda não).',
    sections: [
      {
        text: 'Essas palavrinhas vêm sempre ANTES do verbo, que continua exatamente igual.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['đã', 'já (passado/completo)', 'Tôi đã làm việc.'],
            ['đang', 'agora, neste momento', 'Tôi đang làm việc.'],
            ['sẽ', 'vai (futuro)', 'Tôi sẽ làm việc.'],
            ['chưa', 'ainda não', 'Tôi chưa làm việc.'],
          ],
        },
        examples: [
          ['Ngày mai sẽ mưa.', 'Vai chover amanhã.'],
          ['Tôi đang nhìn con chim.', 'Eu estou olhando um pássaro agora.'],
          ['Tôi chưa mua áo khoác mới.', 'Eu ainda não comprei uma jaqueta nova.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr "đã", "đang", "sẽ" ou "chưa" depois do verbo: em vietnamita elas vêm sempre antes.',
      'Confundir "chưa" (ainda não, deixa a porta aberta) com "không" (não, nega de vez).',
    ],
    quiz: [{ question: 'Como se diz "eu vou comprar uma jaqueta" em vietnamita?', options: ['Tôi sẽ mua áo khoác.', 'Tôi đã mua áo khoác.', 'Tôi mua sẽ áo khoác.'], answer: 'Tôi sẽ mua áo khoác.', explanation: '"Sẽ" marca o futuro e vem antes do verbo "mua".' }],
  },
  {
    id: 'vi-g6',
    level: 'A2.1',
    title: 'Hơn, nhất: comparativo e superlativo',
    emoji: '📊',
    summary: 'Para comparar, o vietnamita põe "hơn" (mais) depois do adjetivo; para o superlativo, põe "nhất" (o mais) depois do adjetivo.',
    sections: [
      {
        text: '"adjetivo + hơn (+ algo)" forma o comparativo. "adjetivo + nhất" forma o superlativo.',
        examples: [
          ['Giày này to hơn giày đó.', 'Este sapato é maior que aquele sapato.'],
          ['Anh ấy cao nhất trong gia đình tôi.', 'Ele é o mais alto da minha família.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr "hơn" antes do adjetivo, como em português ("mais grande"): em vietnamita é "to hơn", o adjetivo primeiro.',
      'Usar "hơn" no superlativo: o superlativo é com "nhất", não "hơn".',
    ],
    quiz: [{ question: 'Como se diz "este sapato é maior que aquele" em vietnamita?', options: ['Giày này to hơn giày đó.', 'Giày này to nhất.', 'Giày này hơn to giày đó.'], answer: 'Giày này to hơn giày đó.', explanation: '"To hơn" é a estrutura do comparativo: adjetivo + hơn.' }],
  },
  {
    id: 'vi-g7',
    level: 'A2.2',
    title: 'Hãy, đừng: pedidos e proibições',
    emoji: '🙏',
    summary: '"Hãy" antes do verbo faz um pedido educado ou uma sugestão; "đừng" antes do verbo pede para NÃO fazer algo.',
    sections: [
      {
        text: '"Hãy + verbo" é mais educado que o imperativo direto, como "por favor, faça…". "Đừng + verbo" é a forma de proibir ou pedir que algo não aconteça — diferente de "không", que só nega um fato.',
        examples: [
          ['Hãy đọc sách này.', 'Leia este livro, por favor.'],
          ['Đừng sợ.', 'Não tenha medo.'],
        ],
      },
    ],
    pitfalls: ['Usar "không" para pedir que alguém não faça algo: "không" só nega um fato ("tôi không sợ", eu não tenho medo); para um pedido ou proibição, o certo é "đừng".'],
    quiz: [{ question: 'Como se diz "não tenha medo" (como um pedido) em vietnamita?', options: ['Đừng sợ.', 'Không sợ.', 'Hãy sợ.'], answer: 'Đừng sợ.', explanation: '"Đừng" antes do verbo pede que algo não aconteça; "không" só nega um fato.' }],
  },
];
