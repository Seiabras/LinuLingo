import type { UnitSeed } from '../types';

/**
 * Trilha do vietnamita: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_VI: UnitSeed[] = [
  {
    id: 'vi-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Xin chào! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'vi-c1',
      title: 'Uma língua de seis tons, sem conjugação',
      emoji: '🗺️',
      history:
        'O vietnamita pertence ao tronco austro-asiático e é falado por mais de 85 milhões de pessoas. Foi escrito por séculos com caracteres chineses adaptados (chữ Nôm); a escrita latina atual, o quốc ngữ, foi criada por missionários no século XVII e virou oficial só no século XX, depois de simplificar o acesso à alfabetização. Como o indonésio, o vietnamita não conjuga verbos — mas soma a isso um sistema de seis tons (no dialeto do Norte, referência deste curso) que muda completamente o significado da mesma sílaba.',
      culture_tip:
        '«Xin chào» é o cumprimento mais neutro, usado a qualquer hora do dia. «Cảm ơn» é obrigado; a resposta comum é «không có gì» (não é nada). O tratamento no vietnamita usa palavras de parentesco mesmo com estranhos (anh para um homem jovem, chị para uma mulher jovem, em para alguém mais novo) — este curso simplifica com «tôi» (eu) e «bạn» (você) neutros, para começar, mas você vai encontrar o sistema real de tratamento em unidades futuras.',
      grammar_why:
        'Como o indonésio, o verbo vietnamita nunca muda de forma: «tôi là» (eu sou), «bạn là» (você é), «anh ấy là» (ele é) usam sempre a mesma palavra «là». A diferença crucial é o TOM: a mesma sílaba com tons diferentes vira palavras completamente diferentes. «ma» sem marca é «fantasma»; «má» (tom ascendente) é «bochecha» ou «mãe» (no Sul); «mà» (tom grave) é «mas»; «mả» é «túmulo»; «mã» é «cavalo» (em chinês-vietnamita) ou «código»; «mạ» é «muda de arroz».',
      grammar_examples: [
        ['Tôi đến từ Brazil.', 'Eu sou do Brasil. (literalmente: eu venho de Brasil)'],
        ['Bạn tên là gì?', 'Qual é o seu nome?'],
        ['Anh ấy đến từ Hà Nội.', 'Ele é de Hanói.'],
      ],
      character_guide: [
        ['dấu sắc ( ́ )', 'tom ascendente, como uma pergunta curta', 'má (bochecha)'],
        ['dấu huyền ( ̀ )', 'tom grave, descendo suave', 'mà (mas)'],
        ['dấu hỏi ( ̉ )', 'tom descendente e depois subindo, como uma pergunta hesitante', 'mả (túmulo)'],
        ['dấu ngã ( ̃ )', 'tom quebrado, com uma interrupção glotal no meio', 'mã (código)'],
        ['dấu nặng ( ̣ )', 'tom baixo e curto, cortado seco', 'mạ (muda de arroz)'],
        ['đ', 'como o d do português, mas com a língua batendo mais atrás', 'đi (ir)'],
        ['d, gi', 'no Norte, soam como o "z" do português', 'da (pele), gia đình (família)'],
      ],
    },
    lessons: [
      {
        id: 'vi-u1-l1',
        title: 'Xin chào, cảm ơn, tạm biệt!',
        kind: 'licao',
        words: ['xin chào', 'tạm biệt', 'cảm ơn', 'không có gì', 'làm ơn', 'xin lỗi'],
        cloze: [
          { sentence: '___, Lan! Bạn khỏe không?', answer: 'Xin chào', options: ['Xin chào', 'Tạm biệt', 'Cảm ơn'], translation: 'Oi, Lan! Você está bem?' },
          { sentence: '___ vì đã giúp tôi!', answer: 'Cảm ơn', options: ['Cảm ơn', 'Tạm biệt', 'Xin chào'], translation: 'Obrigado por me ajudar!' },
          { sentence: '— Cảm ơn! — ___', answer: 'Không có gì', options: ['Không có gì', 'Xin lỗi', 'Làm ơn'], translation: '— Obrigado! — De nada.' },
        ],
        voice: {
          bot: 'Xin chào! Bạn khỏe không?',
          botTranslation: 'Oi! Você está bem?',
          expected: ['Tôi khỏe, cảm ơn! Còn bạn?', 'khỏe', 'cảm ơn'],
          hint: 'Responda que está bem («tôi khỏe») e devolva a pergunta com «còn bạn?».',
        },
        communityPrompt: 'Escreva um cumprimento e uma despedida em vietnamita: «Xin chào…» e «Tạm biệt…».',
      },
      {
        id: 'vi-u1-l2',
        title: 'Tôi, bạn, anh ấy',
        kind: 'licao',
        words: ['tôi', 'bạn', 'anh ấy', 'cô ấy', 'là', 'tên'],
        cloze: [
          { sentence: '___ đến từ Brazil.', answer: 'Tôi', options: ['Tôi', 'Bạn', 'Anh ấy'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Bạn ___ là gì?', answer: 'tên', options: ['tên', 'là', 'ấy'], translation: 'Qual é o seu nome?' },
          { sentence: '___ đến từ Hà Nội.', answer: 'Cô ấy', options: ['Cô ấy', 'Tôi', 'Bạn'], translation: 'Ela é de Hanói.' },
        ],
        voice: {
          bot: 'Xin chào! Bạn tên là gì?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Tôi tên là Ana. Còn bạn?', 'tôi tên là', 'còn bạn'],
          hint: 'Diga o seu nome com «Tôi tên là…» e devolva a pergunta com «Còn bạn?».',
        },
        communityPrompt: 'Apresente-se em vietnamita: diga o seu nome com «Tôi tên là…» e pergunte o nome de outra pessoa.',
      },
      {
        id: 'vi-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Xin chào! Tôi tên là Minh. Bạn tên là gì, và bạn đến từ đâu?',
          botTranslation: 'Oi! Meu nome é Minh. Qual é o seu nome, e de onde você é?',
          expected: ['Xin chào! Tôi tên là Lucia, và tôi đến từ Brazil. Rất vui được gặp bạn!', 'tôi tên là', 'tôi đến từ', 'xin chào'],
          hint: 'Devolva o cumprimento («Xin chào!»), diga o seu nome com «Tôi tên là…», a origem com «Tôi đến từ…» e feche com «Rất vui được gặp bạn!».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome, origem com «Tôi đến từ…» e uma despedida.',
      },
    ],
  },
  {
    id: 'vi-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Gia đình và nhà',
    emoji: '👪',
    card: {
      id: 'vi-c2',
      title: 'Irmãos: idade e sexo juntos',
      emoji: '🧭',
      history:
        'O vietnamita leva a lógica do indonésio kakak/adik um passo além: além de distinguir irmão mais velho de mais novo, também distingue o sexo em cada caso, resultando em quatro palavras diferentes onde o português usa só duas: anh trai (irmão mais velho), chị gái (irmã mais velha), em trai (irmão mais novo) e em gái (irmã mais nova). Essa precisão vem da importância da hierarquia familiar por idade na cultura vietnamita, que também aparece nos pronomes de tratamento do dia a dia.',
      culture_tip:
        'A família estendida é o centro da vida social vietnamita, e o culto aos ancestrais é praticado em quase todos os lares, com um pequeno altar familiar. Perguntar sobre a família de alguém («Bạn có anh chị em không?», você tem irmãos?) é uma forma comum e bem-vinda de puxar assunto.',
      grammar_why:
        'O plural em vietnamita, como no indonésio, geralmente não muda a palavra: o contexto (ou uma palavra contadora antes do substantivo) já diz se é singular ou plural. «một con mèo» é «um gato»; «những con mèo» é «os gatos» — o classificador «con» (usado para animais) aparece nos dois casos.',
      grammar_examples: [
        ['Gia đình tôi rất đông.', 'A minha família é grande. (literalmente: muito numerosa)'],
        ['Tôi có một anh trai và một em gái.', 'Eu tenho um irmão mais velho e uma irmã mais nova.'],
        ['Tôi rất thích cà phê này.', 'Eu gosto muito deste café.'],
      ],
      character_guide: [
        ['ph', 'como o "f" do português', 'phở (o famoso caldo vietnamita), cà phê'],
        ['nh', 'como o nh do português', 'nhà (casa)'],
        ['tr', 'no Norte, parecido com o "tch"', 'trắng (branco)'],
      ],
    },
    lessons: [
      {
        id: 'vi-u2-l1',
        title: 'Gia đình tôi',
        kind: 'licao',
        words: ['gia đình', 'mẹ', 'bố', 'anh trai', 'em gái', 'có'],
        cloze: [
          { sentence: '___ tôi đến từ Huế.', answer: 'Mẹ', options: ['Mẹ', 'Bố', 'Gia đình'], translation: 'A minha mãe é de Huế.' },
          { sentence: 'Tôi ___ một anh trai và một em gái.', answer: 'có', options: ['có', 'là', 'thích'], translation: 'Eu tenho um irmão mais velho e uma irmã mais nova.' },
          { sentence: '___ tôi tên là Minh.', answer: 'Anh trai', options: ['Anh trai', 'Em gái', 'Bố'], translation: 'O meu irmão mais velho se chama Minh.' },
        ],
        voice: {
          bot: 'Bạn có anh chị em không?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Có, tôi có một anh trai và một em gái.', 'tôi có', 'anh trai', 'em gái'],
          hint: 'Responda com «tôi có…» e o tipo de irmão, ou «tôi không có anh chị em» se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em vietnamita: quantos irmãos você tem (mais velhos ou mais novos, homens ou mulheres), e como se chamam os seus pais.',
      },
      {
        id: 'vi-u2-l2',
        title: 'Ở nhà',
        kind: 'licao',
        words: ['nhà', 'nước', 'bánh mì', 'cà phê', 'thích', 'tốt'],
        cloze: [
          { sentence: '___ tôi nhỏ nhưng rất đẹp.', answer: 'Nhà', options: ['Nhà', 'Gia đình', 'Nước'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'Một cốc ___, làm ơn.', answer: 'nước', options: ['nước', 'bánh mì', 'cà phê'], translation: 'Um copo de água, por favor.' },
          { sentence: 'Tôi rất ___ cà phê này.', answer: 'thích', options: ['thích', 'có', 'là'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Bạn có thích cà phê Việt Nam không?',
          botTranslation: 'Você gosta do café vietnamita?',
          expected: ['Có, tôi rất thích, nó rất tốt!', 'tôi thích', 'rất tốt'],
          hint: 'Use «tôi thích» (eu gosto) e o adjetivo «tốt» para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'vi-u2-l3',
        title: 'Prova: gia đình và nhà',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kể cho tôi nghe về gia đình bạn: có bao nhiêu người, và nhà bạn thế nào?',
          botTranslation: 'Me conte sobre a sua família: quantas pessoas, e como é a sua casa?',
          expected: ['Gia đình tôi có bốn người: mẹ, bố, anh trai tôi và tôi. Nhà chúng tôi nhỏ nhưng rất đẹp.', 'gia đình tôi', 'nhà chúng tôi'],
          hint: 'Diga quantas pessoas há na família, nomeie alguns parentes e descreva a casa com «nhà chúng tôi…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
