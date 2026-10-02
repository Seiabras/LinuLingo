import type { UnitSeed } from '../types';

/**
 * Trilha do persa (fārsi do Irã): por enquanto só as duas unidades do nível A1 (pacote marcado
 * como incompleto — ver `incomplete` em index.ts). Da A2 ao C2 chega depois.
 *
 * Fontes das notas culturais e gramaticais:
 * - Wikipedia, «Persian language» (classificação, países, pluricentrismo)
 *   ‹https://en.wikipedia.org/wiki/Persian_language›
 * - Wikipedia, «Persian grammar» (sem gênero, ordem SOV, ezāfe)
 *   ‹https://en.wikipedia.org/wiki/Persian_grammar›
 * - Wikipedia, «Ezafe» ‹https://en.wikipedia.org/wiki/Ezafe›
 * - Wikipedia, «Persian alphabet» (پ چ ژ گ) ‹https://en.wikipedia.org/wiki/Persian_alphabet›
 * - Wikipedia, «Taarof» (cortesia de insistir/recusar) ‹https://en.wikipedia.org/wiki/Taarof›
 * - Wikipedia, «Grand Bazaar, Tehran» ‹https://en.wikipedia.org/wiki/Grand_Bazaar,_Tehran›
 */
export const UNITS_FA: UnitSeed[] = [
  {
    id: 'fa-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام! اولین قدم‌ها',
    emoji: '👋',
    card: {
      id: 'fa-c1',
      title: 'Uma língua sem gênero gramatical',
      emoji: '🗣️',
      history:
        'O persa (فارسی, fārsi) é uma língua indo-europeia do ramo iraniano ocidental, parente distante do português. É a língua nacional do Irã e, sob outros nomes, também língua oficial no Afeganistão (dari) e no Tajiquistão (tajique, escrito em alfabeto cirílico): os três formam uma única língua pluricêntrica, com variantes faladas que se entendem entre si. O persa médio, entre o persa antigo e o moderno, perdeu o número dual e todo o gênero gramatical que a língua tinha — por isso o persa de hoje é uma das poucas línguas indo-europeias sem gênero gramatical algum, nem mesmo nos pronomes.',
      culture_tip:
        'No Irã existe o “taarof” (تعارف): um jogo de cortesia em que um convite ou uma oferta costuma ser recusado educadamente antes de aceito — às vezes repetindo-se três vezes — e recusar pagamento (um motorista de táxi, por exemplo) também é parte do ritual. Entender o taarof é tão importante quanto o vocabulário pra entender uma conversa real.',
      grammar_why:
        'Em persa, um único pronome, “او” (u), cobre “ele”, “ela” e até “isso” — não existe distinção de gênero gramatical nenhuma. E o verbo “ser/estar” não é uma palavra separada no presente: vira uma terminação grudada na palavra anterior (-am “eu sou”, -i “tu és”, -ast “ele/ela é”).',
      grammar_examples: [
        ['سلام! من خوب هستم.', 'Oi! Eu estou bem.'],
        ['او از ایران است.', 'Ele/ela é do Irã.'],
        ['نامِ شما چیست؟', 'Qual é o seu nome?'],
        ['تو خوب هستی؟', 'Você está bem?'],
      ],
      character_guide: [
        ['پ', 'som de “p”: uma das 4 letras que o árabe não tem', 'پدر (pedar, pai)'],
        ['چ', 'som de “tch”: outra letra que o árabe não tem', 'چای (chây, chá)'],
        ['ژ', 'som do “j” do francês (como em “jamais”): também não existe no árabe', 'ژاله (nome próprio)'],
        ['گ', 'som de “g” duro: a quarta letra extra do persa', 'گربه (gorbe, gato)'],
        ['ا / آ', 'vogal “a”/“â”; a escrita persa corre da direita pra esquerda', 'آب (âb, água)'],
      ],
    },
    lessons: [
      {
        id: 'fa-u1-l1',
        title: 'سلام، لطفاً، ممنون',
        kind: 'licao',
        words: ['سلام', 'خداحافظ', 'لطفاً', 'خیلی ممنون', 'ببخشید', 'بله'],
        cloze: [
          { sentence: '___ ! حالِ شما چطور است؟', answer: 'سلام', options: ['سلام', 'خداحافظ', 'بله'], translation: 'Oi! Como vai (formal)?' },
          { sentence: 'یک چای، ___ .', answer: 'لطفاً', options: ['لطفاً', 'بله', 'ببخشید'], translation: 'Um chá, por favor.' },
          { sentence: '___ ، خداحافظ!', answer: 'خیلی ممنون', options: ['خیلی ممنون', 'ببخشید', 'بله'], translation: 'Muito obrigado, tchau!' },
        ],
        voice: {
          bot: 'سلام! حالِ شما چطور است؟',
          botTranslation: 'Oi! Como você está (formal)?',
          expected: ['من خوب هستم. خیلی ممنون.', 'خوب هستم', 'خیلی ممنون'],
          hint: 'Responda que está bem (“man xub hastam”) e agradeça (“xeyli mamnun”).',
        },
        communityPrompt: 'Escreva três frases em persa: um cumprimento (“سلام”), uma pergunta de como vai (“حالِ شما چطور است؟”) e uma despedida (“خداحافظ”).',
      },
      {
        id: 'fa-u1-l2',
        title: 'من، تو، او',
        kind: 'licao',
        words: ['من', 'تو', 'او', 'نام', 'شما', 'نه'],
        cloze: [
          { sentence: '___ خوب هستم.', answer: 'من', options: ['من', 'تو', 'او'], translation: 'Eu estou bem.' },
          { sentence: 'نامِ ___ چیست؟', answer: 'شما', options: ['شما', 'من', 'او'], translation: 'Qual é o seu nome (formal)?' },
          { sentence: '___ ، خیلی ممنون.', answer: 'نه', options: ['نه', 'بله', 'او'], translation: 'Não, muito obrigado.' },
        ],
        voice: {
          bot: 'نامِ شما چیست؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['نامِ من آنا است.', 'نامِ من', 'است'],
          hint: 'Diga seu nome com “nâm-e man … ast” (“nâm-e man Ana ast”).',
        },
        communityPrompt: 'Apresente-se em persa: diga seu nome com “نامِ من … است” e pergunte o nome de alguém com “نامِ شما چیست؟”.',
      },
      {
        id: 'fa-u1-l3',
        title: 'Test: اولین قدم‌ها',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سلام! نامِ من مریم است. نامِ شما چیست؟',
          botTranslation: 'Oi! Meu nome é Maryam. Qual é o seu nome?',
          expected: ['سلام! نامِ من آنا است.', 'نامِ من', 'سلام'],
          hint: 'Devolva o cumprimento (“سلام”) e diga seu nome com “نامِ من … است”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“سلام”), nome (“نامِ من … است”) e despedida (“خداحافظ”).',
      },
    ],
  },
  {
    id: 'fa-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'خانواده و بازار',
    emoji: '👪',
    card: {
      id: 'fa-c2',
      title: 'A ezāfe: o “-e” que liga as palavras',
      emoji: '🔗',
      history:
        'Quando o persa perdeu seu antigo sistema de casos gramaticais, sobrou um jeito só de ligar um substantivo ao que vem depois dele — pra indicar posse, descrição ou outra relação: a “ezāfe”, um “-e” átono (“-ye” depois de vogal) que quase nunca aparece escrito no alfabeto persa, mas se pronuncia sempre. No Irã, um dos lugares onde se ouve mais ezāfe por minuto é o Grande Bazar de Teerã: um labirinto de corredores com mais de 10 km de extensão ao todo, que já era ponto de comércio desde a conquista muçulmana da Pérsia (séc. 7) e cresceu sobretudo a partir da época safávida.',
      culture_tip:
        'O mesmo “taarof” da primeira unidade vale pro bazar: um convite ou uma oferta de um vendedor conhecido pode vir acompanhada da mesma cortesia de insistir e recusar educadamente antes de fechar negócio.',
      grammar_why:
        'A ezāfe liga um substantivo ao que vem depois: um possuidor (“برادرِ مریم”, o irmão da Maryam), um adjetivo (“خانه‌ی کوچک”, a casa pequena) ou outro substantivo. Depois de consoante ela soa “-e”; depois de vogal, “-ye” — e aí aparece escrita como “ی”, como em “پایِ او” (o pé dele/dela).',
      grammar_examples: [
        ['خانه‌ی من کوچک است.', 'Minha casa é pequena.'],
        ['برادرِ مریم بزرگ است.', 'O irmão da Maryam é grande.'],
        ['پایِ او کوچک است.', 'O pé dele/dela é pequeno.'],
        ['من یک برادر دارم.', 'Eu tenho um irmão.'],
      ],
      character_guide: [
        ['-ِ', 'a ezāfe depois de consoante: quase nunca é escrita, mas sempre se pronuncia “-e”', 'برادرِ (barâdar-e, irmão de)'],
        ['-ی', 'a ezāfe depois de vogal: essa sim aparece escrita, como “-ye”', 'خانه‌ی / پایِ (xâne-ye, pâ-ye)'],
      ],
    },
    lessons: [
      {
        id: 'fa-u2-l1',
        title: 'خانواده‌ی من',
        kind: 'licao',
        words: ['خانواده', 'مادر', 'پدر', 'برادر', 'خواهر', 'داشتن'],
        cloze: [
          { sentence: 'من یک ___ دارم.', answer: 'برادر', options: ['برادر', 'مادر', 'پدر'], translation: 'Eu tenho um irmão.' },
          { sentence: 'او ___ من است.', answer: 'مادر', options: ['مادر', 'پدر', 'خواهر'], translation: 'Ela é minha mãe.' },
          { sentence: 'این ___ بزرگ است.', answer: 'خانواده', options: ['خانواده', 'خانه', 'بازار'], translation: 'Esta família é grande.' },
        ],
        voice: {
          bot: 'شما خواهر یا برادر دارید؟',
          botTranslation: 'Você tem irmã ou irmão (formal)?',
          expected: ['بله، من یک برادر دارم.', 'من یک برادر دارم', 'بله'],
          hint: 'Responda com “بله، من یک … دارم” ou “نه”.',
        },
        communityPrompt: 'Descreva sua família em persa: quantos irmãos (برادر) e irmãs (خواهر) você tem, usando “من … دارم”.',
      },
      {
        id: 'fa-u2-l2',
        title: 'در بازار',
        kind: 'licao',
        words: ['بازار', 'خانه', 'نان', 'چای', 'برنج', 'خوردن'],
        cloze: [
          { sentence: '___ بزرگ است.', answer: 'بازار', options: ['بازار', 'خانه', 'نان'], translation: 'O bazar é grande.' },
          { sentence: 'من ___ می‌خورم.', answer: 'نان', options: ['نان', 'چای', 'برنج'], translation: 'Eu como pão.' },
          { sentence: '___ سفید است.', answer: 'برنج', options: ['برنج', 'نان', 'چای'], translation: 'O arroz é branco.' },
        ],
        voice: {
          bot: 'شما چه می‌خورید؟',
          botTranslation: 'O que você come (formal)?',
          expected: ['من نان می‌خورم.', 'من نان می‌خورم', 'نان'],
          hint: 'Diga o que come com “من … می‌خورم”.',
        },
        communityPrompt: 'Escreva o que você come, usando “من … می‌خورم” com نان، برنج ou outra palavra de comida.',
      },
      {
        id: 'fa-u2-l3',
        title: 'Test: خانواده و بازار',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'شما خواهر یا برادر دارید؟ نامِ او چیست؟',
          botTranslation: 'Você tem irmã ou irmão (formal)? Qual é o nome dele/dela?',
          expected: ['بله، من یک خواهر دارم. نامِ او مریم است.', 'من یک خواهر دارم', 'نامِ او'],
          hint: 'Diga quantos irmãos tem (“من … دارم”) e o nome (“نامِ او … است”).',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e sua casa, usando “من … دارم”, “نامِ …” e “است”.',
      },
    ],
  },
];
