import type { UnitSeed } from '../types';

/**
 * Trilha do corso: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_CO: UnitSeed[] = [
  {
    id: 'co-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonghjornu! I prima passi',
    emoji: '👋',
    card: {
      id: 'co-c1',
      title: 'A língua da Córsega',
      emoji: '🏝️',
      history:
        'O corso (lingua corsa) é uma língua românica falada na Córsega, ilha francesa no Mediterrâneo. É muito próximo do toscano e do italiano antigo — tanto que, por séculos, muitos linguistas o trataram como um dialeto italiano, já que a ilha pertenceu à República de Gênova até 1768, quando passou à França. O cismontanu, falado no norte da ilha (em torno de Bastia), é a variedade mais próxima do toscano e a usada aqui; o pumontincu (ou oltramontanu), no sul (em torno de Sartè), tem traços mais parecidos com o sardo. Hoje o corso é reconhecido como língua regional da França e tem ensino opcional nas escolas da ilha; a Università di Corsica Pasquale Paoli mantém o INFCOR (Banca di Dati di Lingua Corsa), a norma ortográfica usada neste curso.',
      culture_tip:
        '«Bonghjornu!» vale para cumprimentar de dia, e também serve como «oi». «Avvedeci» é a despedida mais comum; entre amigos, muitos dizem apenas «ciao», emprestado do italiano. Com desconhecidos e em situações formais, usa-se «voi» no lugar de «tù», como o «vous» francês.',
      grammar_why:
        'O corso diz o nome com o verbo reflexivo «chjamassi» (chamar-se): «mi chjamu Anna» é «eu me chamo Anna». E um único verbo, «esse», cobre o nosso ser e o nosso estar: «sò di Bastia» (sou de Bastia) e «sò bè» (estou bem).',
      grammar_examples: [
        ['Bonghjornu! Mi chjamu Anna.', 'Bom dia! Eu me chamo Anna.'],
        ['Cumu ti chjami?', 'Como você se chama?'],
        ['Ellu hè di Bastia, ella hè di Corti.', 'Ele é de Bastia, ela é de Corti.'],
        ['Bè, grazie. È tù?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ghj', 'som parecido com o nosso «dj»', 'ghjattu (gato), ghjovi (quinta-feira)'],
        ['chj', 'som parecido com o nosso «tch»', 'chjucu (pequeno), chjamassi (chamar-se)'],
        ['sg', 'antes de e/i, soa como o nosso «j»', 'casgiu (queijo)'],
        ['u / a final', 'marca masculino e feminino na maioria das palavras', 'chjucu (m.) / chjuca (f.)'],
        ['ù', 'o acento grave marca a vogal tônica em palavras que terminam em vogal forte', 'ùn (não, antes do verbo)'],
      ],
    },
    lessons: [
      {
        id: 'co-u1-l1',
        title: 'Bonghjornu, grazie, avvedeci!',
        kind: 'licao',
        words: ['bonghjornu', 'bona sera', 'bona notte', 'avvedeci', 'grazie', 'per piacè'],
        cloze: [
          { sentence: '___, Anna! Cumu va?', answer: 'Bonghjornu', options: ['Bonghjornu', 'Avvedeci', 'Grazie'], translation: 'Bom dia, Anna! Como vai?' },
          { sentence: 'Hè notte: ___!', answer: 'bona notte', options: ['bona notte', 'bona sera', 'grazie'], translation: 'É noite: boa noite!' },
          { sentence: '___ mille!', answer: 'Grazie', options: ['Grazie', 'Bonghjornu', 'Avvedeci'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Bonghjornu! Cumu va?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Bè, grazie! È tù?', 'bè', 'grazie'],
          hint: 'Responda que vai bem e devolva a pergunta: «Bè, grazie! È tù?».',
        },
        communityPrompt: 'Escreva três cumprimentos em corso: um de dia («Bonghjornu…»), um à noite («Bona sera…») e uma despedida («Avvedeci»).',
      },
      {
        id: 'co-u1-l2',
        title: 'Eiu, tù, ellu, ella',
        kind: 'licao',
        words: ['eiu', 'tù', 'ellu', 'ella', 'chjamassi', 'nome'],
        cloze: [
          { sentence: '___ sò di Rio.', answer: 'Eiu', options: ['Eiu', 'Tù', 'Ellu'], translation: 'Eu sou do Rio.' },
          { sentence: 'Cumu ti ___?', answer: 'chjami', options: ['chjami', 'sì', 'ai'], translation: 'Como você se chama?' },
          { sentence: '___ hè di Bastia.', answer: 'Ellu', options: ['Ellu', 'Eiu', 'Tù'], translation: 'Ele é de Bastia.' },
        ],
        voice: {
          bot: 'Bonghjornu! Cumu ti chjami?',
          botTranslation: 'Bom dia! Como você se chama?',
          expected: ['Mi chjamu Ana. È tù?', 'mi chjamu', 'è tù'],
          hint: 'Diga o seu nome com «Mi chjamu…» e devolva a pergunta com «È tù?».',
        },
        communityPrompt: 'Apresente-se em corso: diga o seu nome com «Mi chjamu…» e pergunte o nome de alguém com «Cumu ti chjami?».',
      },
      {
        id: 'co-u1-l3',
        title: 'Prova: i prima passi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonghjornu! Mi chjamu Ghjuvanni. Cumu ti chjami è di induve sì?',
          botTranslation: 'Bom dia! Eu me chamo Ghjuvanni. Como você se chama e de onde você é?',
          expected: ['Bonghjornu! Mi chjamu Lucia è sò di San Paulu.', 'mi chjamu', 'sò di', 'bonghjornu'],
          hint: 'Devolva o cumprimento («Bonghjornu!»), diga o nome com «Mi chjamu…» e a cidade com «Sò di…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Mi chjamu…», cidade com «Sò di…» e uma despedida.',
      },
    ],
  },
  {
    id: 'co-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A famiglia è a casa',
    emoji: '👪',
    card: {
      id: 'co-c2',
      title: 'U, a, i, e e o verbo avè',
      emoji: '🧭',
      history:
        'Como boa parte das línguas românicas do Mediterrâneo, o corso trocou palavras com os povos vizinhos: do genovês (ligure), da época em que a ilha era de Gênova; do francês, desde 1768; e até do árabe-siciliano, por causa do comércio marítimo medieval. Mesmo assim, a base do vocabulário e da gramática continua latina, bem próxima do toscano antigo — por isso quem já estudou italiano reconhece muita coisa no corso.',
      culture_tip:
        'As aldeias de montanha da Córsega (como Corti, no centro da ilha) guardam a tradição do canto polifônico «paghjella», reconhecido pela UNESCO como patrimônio imaterial da humanidade. É comum perguntar «di induve sì?» (de onde você é?) e a resposta trazer o nome do paese (vilarejo) da família, mesmo para quem mora na cidade grande.',
      grammar_why:
        'O artigo definido é «u» (masculino) e «a» (feminino), no plural «i» e «e»: «u pane» (o pão), «a casa» (a casa), «i cani» (os cachorros), «e case» (as casas). O possessivo vai antes do nome e tem artigo: «u mio babbu» (o meu pai), «a mio mamma» (a minha mãe). Para negar, o corso usa «ùn» antes do verbo (e às vezes «micca» depois, para reforçar): «ùn socu micca» (eu não sei).',
      grammar_examples: [
        ['A mio famiglia hè grande.', 'A minha família é grande.'],
        ['Aghju un fratellu è una surella.', 'Tenho um irmão e uma irmã.'],
        ['U latte hè biancu.', 'O leite é branco.'],
        ['Ùn socu micca.', 'Eu não sei.'],
      ],
      character_guide: [
        ['u / a / i / e', 'artigos definidos: masculino, feminino, plural masculino, plural feminino', 'u cane, a casa, i cani, e case'],
        ['ùn… (micca)', 'negação antes do verbo, com reforço opcional depois', 'ùn socu micca (não sei)'],
      ],
    },
    lessons: [
      {
        id: 'co-u2-l1',
        title: 'A mio famiglia',
        kind: 'licao',
        words: ['famiglia', 'mamma', 'babbu', 'fratellu', 'surella', 'avè'],
        cloze: [
          { sentence: 'A mio ___ si chjama Rosa.', answer: 'mamma', options: ['mamma', 'babbu', 'fratellu'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Eiu ___ un fratellu.', answer: 'aghju', options: ['aghju', 'sò', 'vò'], translation: 'Eu tenho um irmão.' },
          { sentence: 'U mio ___ hè di Corti.', answer: 'babbu', options: ['babbu', 'surella', 'mamma'], translation: 'O meu pai é de Corti.' },
        ],
        voice: {
          bot: 'Ai fratelli o surelle?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Iè, aghju un fratellu è una surella.', 'aghju', 'fratellu', 'surella'],
          hint: 'Responda com «Iè, aghju…» ou «Nò, ùn aghju micca fratelli».',
        },
        communityPrompt: 'Descreva a sua família em corso: quantos irmãos (fratelli) e irmãs (surelle) você tem e como se chamam os seus pais.',
      },
      {
        id: 'co-u2-l2',
        title: 'In casa',
        kind: 'licao',
        words: ['casa', 'acqua', 'pane', 'latte', 'casgiu', 'piace'],
        cloze: [
          { sentence: 'A mio ___ hè chjuca.', answer: 'casa', options: ['casa', 'acqua', 'pane'], translation: 'A minha casa é pequena.' },
          { sentence: 'Bevu ___.', answer: 'acqua', options: ['acqua', 'pane', 'casgiu'], translation: 'Eu bebo água.' },
          { sentence: 'Manghju pane è ___.', answer: 'casgiu', options: ['casgiu', 'acqua', 'latte'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Chì manghji?',
          botTranslation: 'O que você come?',
          expected: ['Manghju pane è casgiu.', 'manghju', 'pane', 'casgiu'],
          hint: 'Diga o que come com «Manghju…».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Manghju…» e «Bevu…».',
      },
      {
        id: 'co-u2-l3',
        title: 'Prova: a famiglia è a casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Parlami di a to famiglia: ai fratelli o surelle?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Iè, aghju una surella. Si chjama Maria.', 'aghju', 'si chjama'],
          hint: 'Diga quantos irmãos tem («aghju…») e o nome deles («si chjama…»).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «aghju», «si chjama» e «hè».',
      },
    ],
  },
];
