import type { UnitSeed } from '../types';

/**
 * Trilha do inglês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_EN: UnitSeed[] = [
  {
    id: 'en-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hello! First steps',
    emoji: '👋',
    card: {
      id: 'en-c1',
      title: 'A língua germânica cheia de palavras latinas',
      emoji: '🗺️',
      history:
        'O inglês nasceu das línguas germânicas trazidas à Grã-Bretanha por anglos, saxões e jutos a partir do século V. Em 1066, a conquista normanda trouxe um enxurrado de palavras do francês antigo, que se somaram ao vocabulário germânico original: por isso o inglês tem, para o mesmo conceito, uma palavra "do povo" germânica (cow, sheep) e outra "de mesa" francesa (beef, mutton). Hoje o inglês é a língua mais estudada como segunda língua no mundo, com mais falantes não nativos do que nativos.',
      culture_tip:
        'O cumprimento mais neutro é «hello»; «hi» é mais informal, entre amigos e colegas. Para agradecer, «thanks» (informal) ou «thank you» (mais neutro); a resposta típica é «you\'re welcome» ou, de forma mais casual, «no problem». Diferente do português, o inglês não distingue tratamento formal e informal no pronome («you» serve para todo mundo) — a formalidade aparece no tom, no vocabulário e em fórmulas como «please» e «would you mind…?».',
      grammar_why:
        'Ao contrário do português, o inglês quase não conjuga os verbos: «I speak, you speak, we speak, they speak» — só a terceira pessoa do singular muda («he/she speaks», com -s). Por isso o pronome de sujeito NUNCA pode ficar de fora da frase, diferente do português, que dispensa o pronome porque a terminação verbal já diz quem fala.',
      grammar_examples: [
        ['I am from Brazil.', 'Eu sou do Brasil.'],
        ['You speak English very well.', 'Você fala inglês muito bem.'],
        ['She lives in Dublin.', 'Ela mora em Dublin.'],
        ['They are from London.', 'Eles são de Londres.'],
      ],
      character_guide: [
        ['th (voiceless)', 'língua entre os dentes, soprando, sem vibrar: não existe em português', 'thanks, three, think'],
        ['th (voiced)', 'igual, mas vibrando as cordas vocais', 'this, that, mother'],
        ['h', 'sempre soprado no começo da palavra, nunca mudo como em português', 'hello, house, he'],
        ['r', 'a língua não toca o céu da boca: um som "engolido", bem diferente do r do português', 'red, very, sorry'],
        ['w', 'lábios arredondados, como o começo de "quando" sem o q', 'we, water, welcome'],
      ],
    },
    lessons: [
      {
        id: 'en-u1-l1',
        title: 'Hello, thanks, goodbye!',
        kind: 'licao',
        words: ['hello', 'good morning', 'good afternoon', 'good night', 'goodbye', 'thanks'],
        cloze: [
          { sentence: '___, Ana! How are you?', answer: 'Hello', options: ['Hello', 'Goodbye', 'Thanks'], translation: 'Oi, Ana! Como você está?' },
          { sentence: 'It\'s late: ___!', answer: 'good night', options: ['good night', 'good morning', 'good afternoon'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ for your help!', answer: 'Thanks', options: ['Thanks', 'Goodbye', 'Hello'], translation: 'Obrigado pela sua ajuda!' },
        ],
        voice: {
          bot: 'Hello! How are you?',
          botTranslation: 'Oi! Como você está?',
          expected: ['I\'m fine, thanks! And you?', 'fine', 'thanks'],
          hint: 'Responda que está bem e devolva a pergunta: «I\'m fine, thanks! And you?». O «th» de «thanks» soa com a língua entre os dentes.',
        },
        communityPrompt: 'Escreva três cumprimentos em inglês: um de manhã («Good morning…»), um à tarde («Good afternoon…») e uma despedida com «Goodbye» ou «See you later».',
      },
      {
        id: 'en-u1-l2',
        title: 'I, you, he, she',
        kind: 'licao',
        words: ['I', 'you', 'he', 'she', 'to be', 'name'],
        cloze: [
          { sentence: '___ am Sara.', answer: 'I', options: ['I', 'You', 'He'], translation: 'Eu sou a Sara.' },
          { sentence: 'And ___, what\'s your name?', answer: 'you', options: ['you', 'he', 'we'], translation: 'E você, qual é o seu nome?' },
          { sentence: 'What\'s your ___?', answer: 'name', options: ['name', 'thanks', 'goodbye'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Hi! What\'s your name?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['My name is Ana. And you?', 'my name is', 'and you'],
          hint: 'Diga o seu nome com «My name is…» e devolva a pergunta com «And you?».',
        },
        communityPrompt: 'Apresente-se em inglês: diga o seu nome com «My name is…» e pergunte o nome de outra pessoa com «And you, what\'s your name?».',
      },
      {
        id: 'en-u1-l3',
        title: 'Prova: first steps',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hello! My name is John. And you, what\'s your name, and where are you from?',
          botTranslation: 'Oi! Meu nome é John. E você, qual é o seu nome, e de onde você é?',
          expected: ['Hello! My name is Lucia, and I\'m from Brazil. Nice to meet you!', 'my name is', 'i\'m from', 'hello'],
          hint: 'Devolva o cumprimento («Hello!»), diga o seu nome com «My name is…», a origem com «I\'m from…» e feche com «Nice to meet you!».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «My name is…», origem com «I\'m from…» e uma despedida.',
      },
    ],
  },
  {
    id: 'en-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Family and home',
    emoji: '👪',
    card: {
      id: 'en-c2',
      title: 'To be × to have: dois verbos essenciais',
      emoji: '🧭',
      history:
        'Diferente do português, o inglês usa só o verbo «to be» tanto para «ser» quanto para «estar» — não existe a distinção que o português (e o galego, o espanhol) fazem entre os dois. «I am tired» pode significar «estou cansado», nunca «sou cansado» como um traço permanente, mas gramaticalmente é o mesmo verbo. É um dos primeiros hábitos que o aluno lusófono precisa desconstruir: em inglês, um só verbo cobre os dois sentidos.',
      culture_tip:
        'Nos países de língua inglesa, perguntar sobre a família («Do you have brothers or sisters?») é um jeito comum de puxar assunto em situações informais. Já perguntar a idade diretamente pode soar indiscreto entre adultos, ao contrário do que é comum no Brasil — melhor deixar a pessoa oferecer essa informação.',
      grammar_why:
        'O artigo indefinido tem duas formas: «a» antes de consoante (a house) e «an» antes de vogal (an apple). Não há concordância de gênero como em português — «the» serve para tudo, e os substantivos não têm gênero gramatical. O plural, na maioria dos casos, só acrescenta -s (house → houses), com algumas irregularidades (child → children).',
      grammar_examples: [
        ['My family is big.', 'A minha família é grande.'],
        ['I have two brothers and one sister.', 'Eu tenho dois irmãos e uma irmã.'],
        ['I like this coffee very much.', 'Eu gosto muito deste café.'],
        ['This is a house. That is an apple.', 'Esta é uma casa. Aquela é uma maçã.'],
      ],
      character_guide: [
        ['a / an', 'artigo indefinido: «a» antes de consoante, «an» antes de vogal', 'a house, an apple'],
        ['-s do plural', 'soa «s» ou «z» dependendo do som anterior', 'cats [s], dogs [z]'],
      ],
    },
    lessons: [
      {
        id: 'en-u2-l1',
        title: 'My family',
        kind: 'licao',
        words: ['family', 'mother', 'father', 'brother', 'sister', 'to have'],
        cloze: [
          { sentence: 'My ___ is from Bristol.', answer: 'mother', options: ['mother', 'father', 'family'], translation: 'A minha mãe é de Bristol.' },
          { sentence: 'I ___ two brothers and one sister.', answer: 'have', options: ['have', 'am', 'like'], translation: 'Eu tenho dois irmãos e uma irmã.' },
          { sentence: 'My ___ is called Tom.', answer: 'brother', options: ['brother', 'sister', 'father'], translation: 'O meu irmão se chama Tom.' },
        ],
        voice: {
          bot: 'Do you have any brothers or sisters?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Yes, I have one brother and one sister.', 'i have', 'brother', 'sister'],
          hint: 'Responda com «I have…» e o número/tipo de irmãos, ou «I don\'t have any siblings» se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em inglês: quantos irmãos você tem, e como se chamam os seus pais.',
      },
      {
        id: 'en-u2-l2',
        title: 'At home',
        kind: 'licao',
        words: ['house', 'water', 'bread', 'coffee', 'to like', 'good'],
        cloze: [
          { sentence: 'My ___ is small but very nice.', answer: 'house', options: ['house', 'family', 'water'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'A glass of ___, please.', answer: 'water', options: ['water', 'bread', 'coffee'], translation: 'Um copo de água, por favor.' },
          { sentence: 'I ___ this coffee very much.', answer: 'like', options: ['like', 'have', 'am'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Do you like coffee?',
          botTranslation: 'Você gosta de café?',
          expected: ['Yes, I like it very much, it\'s very good!', 'i like', 'very good'],
          hint: 'Use «I like…» e o adjetivo «good» para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'en-u2-l3',
        title: 'Prova: family and home',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tell me about your family: how many are you, and what is your house like?',
          botTranslation: 'Me conte sobre a sua família: quantos são, e como é a sua casa?',
          expected: ['There are four of us in my family: my mother, my father, my brother and I. Our house is small but very nice.', 'my family', 'our house'],
          hint: 'Diga quantas pessoas há na família com «there are…», nomeie alguns parentes e descreva a casa com «our house is…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
