import type { UnitSeed } from '../types';

/**
 * Trilha do kichwa: por enquanto só as duas unidades do nível A1 (curso incompleto — ver `incomplete`
 * em index.ts). Fontes no cabeçalho de vocabulario.ts: [KN], [OMNI], [WIKI].
 *
 * Todas as frases são do [KN] (as aulas “Napaykuna”, “Rimanakuy”, “En la familia”, “En la cocina”, “En
 * el mercado”) e do [OMNI], com a tradução que eles dão. Nenhuma frase com gramática nova foi montada
 * por nós: fora as das fontes, só há palavras soltas lado a lado (“Yupaychani, mashi!”).
 */
export const UNITS_COLO1257: UnitSeed[] = [
  {
    id: 'colo1257-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Imanalla, mashi!',
    emoji: '👋',
    card: {
      id: 'colo1257-c1',
      title: 'O kichwa unificado',
      emoji: '🏔️',
      // [KN] “Llika” (o kichwa não tinha escrita própria; a DINEIB e a CONAIE normalizaram a escrita, o
      // kichwa unificado; 20 letras, só as vogais a, i, u); [WIKI] «Kichwa language» (os dialetos mais
      // falados são os da serra: Chimborazo, Imbabura e Cañar; o kichwa do Equador e da Colômbia perdeu os
      // sufixos possessivos e a diferença entre o “nós” inclusivo e o exclusivo) e «Kichwa» em espanhol
      // (ñuka × ñuqa; o quéchua do norte, parente do quéchua do sul).
      history:
        'O kichwa é o quéchua do Equador, parente do quéchua do sul falado no Peru e na Bolívia. Os dialetos mais falados são os da serra, como os de Chimborazo e de Imbabura, mas a língua também é falada na Amazônia. Por muito tempo, o kichwa se escreveu com as letras e as regras do espanhol, cada um do seu jeito; foram a Direção Nacional de Educação Intercultural Bilíngue (DINEIB) e a CONAIE, a confederação indígena do Equador, que normalizaram a escrita: o kichwa unificado, uma forma só de escrever, embora cada lugar pronuncie de um jeito. Ele tem 20 letras e só três vogais: a, i, u.',
      culture_tip:
        'Para cumprimentar um amigo, diz-se “Imanalla, mashi!”. E com quem pede respeito, usa-se “kikin” (o senhor, a senhora) no lugar de “kan” (você): “Kikinka imanallatak kanki?”, como o senhor está?',
      grammar_why:
        'O kichwa cola pedaços no fim da palavra. -ka marca de quem se fala (“Ñukaka”, eu), e o verbo “kana” (ser, estar) muda com a pessoa: “kani” (eu sou), “kanki” (você é), “kan” (ele, ela é). Por isso “Ñukaka yachakuk kani” é “eu sou estudante”. O -manta quer dizer “de, vindo de”: “Otavalo llaktamantami kani”, sou de Otavalo.',
      grammar_examples: [
        ['Allimi kani.', 'Estou bem.'],
        ['Ñukaka yachakuk kani.', 'Eu sou estudante.'],
        ['Otavalo llaktamantami kani.', 'Sou de Otavalo.'],
      ],
      character_guide: [
        ['a, i, u', 'só três vogais: o kichwa não tem “e” nem “o”', 'Imanalla (olá)'],
        ['k', 'no lugar do “c”, do “q” e do “g” do espanhol', 'kikin (o senhor)'],
        ['h', 'soa como o “j” do espanhol, um “rr” suave', 'hatun (grande)'],
        ['ll', 'soa parecido com o “y” do espanhol', 'killa (lua)'],
        ['sh', 'o “ch” do português, de “chá”', 'mashi (amigo)'],
        ['ts', 'um “t” seguido de “s”, junto', 'tsini (urtiga)'],
      ],
    },
    lessons: [
      {
        id: 'colo1257-u1-l1',
        title: 'Imanalla!',
        kind: 'licao',
        words: ['Imanalla', 'Imanallatak kanki?', 'Allimi kani', 'Alli puncha', 'Yupaychani', 'Minchakaman'],
        cloze: [
          { sentence: '___ mashi!', answer: 'Imanalla', options: ['Imanalla', 'Minchakaman', 'Yupaychani'], translation: 'Olá, amigo!' },
          { sentence: '___ kani.', answer: 'Allimi', options: ['Allimi', 'Imanalla', 'Kayakaman'], translation: 'Estou bem.' },
          { sentence: 'Kikinka ___ kanki?', answer: 'imanallatak', options: ['imanallatak', 'yupaychani', 'minchakaman'], translation: 'Como o senhor está?' },
        ],
        voice: {
          bot: 'Imanallatak kanki?',
          botTranslation: 'Como você está?',
          expected: ['Allimi kani.', 'Allimi kani', 'allimi kani', 'Shina shinalla'],
          hint: 'Diga que está bem: “Allimi kani”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Imanalla!”), a pergunta “Imanallatak kanki?” e a resposta.',
      },
      {
        id: 'colo1257-u1-l2',
        title: 'Ima shutitak kanki?',
        kind: 'licao',
        words: ['Ima shutitak kanki?', 'Maymantatak kanki?', 'ñuka', 'kikin', 'yachakuk', 'mashi'],
        cloze: [
          { sentence: 'Ñukaka ___ kani.', answer: 'yachakuk', options: ['yachakuk', 'imanalla', 'minchakaman'], translation: 'Eu sou estudante.' },
          { sentence: 'Otavalo ___ kani.', answer: 'llaktamantami', options: ['llaktamantami', 'yupaychani', 'imanallatak'], translation: 'Sou de Otavalo.' },
          { sentence: 'Kanka ñuka ___ kanki.', answer: 'mashimi', options: ['mashimi', 'mamami', 'kikinmi'], translation: 'Você é meu amigo.' },
        ],
        voice: {
          bot: 'Kikinka maymantatak kanki?',
          botTranslation: 'De onde o senhor é?',
          expected: ['Otavalo llaktamantami kani.', 'Otavalo llaktamantami kani', 'llaktamantami kani'],
          hint: 'Diga de onde é: “Otavalo llaktamantami kani” (sou de Otavalo).',
        },
        communityPrompt: 'Apresente-se: “Ñukaka … kani” (eu sou …) e diga de onde você é: “… llaktamantami kani”.',
      },
      {
        id: 'colo1257-u1-l3',
        title: 'Prova: Imanalla, mashi!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Alli shamushka!',
          botTranslation: 'Bem-vindo!',
          expected: ['Yupaychani!', 'Yupaychani', 'yupaychani', 'Pay pay'],
          hint: 'Agradeça a acolhida: “Yupaychani!”.',
        },
        communityPrompt: 'Escreva uma chegada: “Imanalla!”, “Imanallatak kanki?”, “Allimi kani. Yupaychani!”.',
      },
    ],
  },
  {
    id: 'colo1257-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mikunata munani',
    emoji: '🌽',
    card: {
      id: 'colo1257-c2',
      title: 'Quatro palavras para “irmão”',
      emoji: '👫',
      // [WIKI] «Kichwa language», Vocabulary (ñaña, turi, pani, wawki, com o exemplo de Pedro, Manuel, Sisa
      // e Elena); [KN] “Ayllu” (a família) e “Murukuna” (o milho e as cores do milho).
      history:
        'Como todas as línguas quéchuas, o kichwa tem quatro palavras para irmãos, conforme quem fala: “wawki” é o irmão de um homem, “turi” é o irmão de uma mulher, “pani” é a irmã de um homem e “ñaña” é a irmã de uma mulher. Assim, se Pedro tem um irmão, Manuel, e duas irmãs, Sisa e Elena, Pedro é o “wawki” de Manuel e o “turi” de Sisa; Sisa é a “pani” de Manuel e a “ñaña” de Elena. E na mesa da família não falta o milho, “sara”, de muitas cores: “yurak sara” (branco), “killu sara” (amarelo), “puka sara” (vermelho) e “yana sara” (preto).',
      culture_tip:
        'Para convidar alguém para comer, diz-se “Haku mikushun!”, vamos comer. E depois da refeição agradece-se a comida: “Mikunamanta yupaychani”, obrigado pelo almoço.',
      grammar_why:
        'Em kichwa, o objeto leva -ta: “Mikunata munani”, quero comida (quero comer); “Shuk dólar tantata munani”, quero um dólar de pão. E o verbo “munana” (querer) muda com a pessoa como os outros: “munani” (eu quero), “munanki” (você quer). Para dizer “nós vamos”, o fim é -shun: “Haku mikushun!”, vamos comer!',
      grammar_examples: [
        ['Mikunata munani.', 'Quero comer.'],
        ['Shuk dólar tantata munani.', 'Quero um dólar de pão.'],
        ['Haku mikushun.', 'Vamos comer.'],
      ],
      character_guide: [
        ['-ta', 'o objeto, a coisa que se quer ou se faz', 'tantata (o pão)'],
        ['-ni', 'eu (no verbo)', 'munani (eu quero)'],
        ['-shun', 'vamos (nós)', 'mikushun (vamos comer)'],
      ],
    },
    lessons: [
      {
        id: 'colo1257-u2-l1',
        title: 'Ayllu',
        kind: 'licao',
        words: ['mama', 'tayta', 'wawki', 'pani', 'ñaña', 'turi'],
        cloze: [
          { sentence: 'Ñuka ___ José shutimi.', answer: 'taytaka', options: ['taytaka', 'mamaka', 'panika'], translation: 'Meu pai se chama José.' },
          { sentence: 'Ñuka ___ Genoveva shutimi.', answer: 'mamaka', options: ['mamaka', 'wawkika', 'taytaka'], translation: 'Minha mãe se chama Genoveva.' },
          { sentence: 'Ñuka ___ Luis shutimi.', answer: 'wawkika', options: ['wawkika', 'panika', 'mamaka'], translation: 'Meu irmão se chama Luis (fala um homem).' },
        ],
        voice: {
          bot: 'Mamaka?',
          botTranslation: 'E a sua mãe?',
          expected: ['Allimi kani.', 'Allimi', 'allimi', 'Shina shinalla'],
          hint: 'Diga que está bem: “Allimi”.',
        },
        communityPrompt: 'Apresente a sua família: “Ñuka mamaka … shutimi”, “Ñuka taytaka … shutimi”.',
      },
      {
        id: 'colo1257-u2-l2',
        title: 'Hatuna pampapi',
        kind: 'licao',
        words: ['tanta', 'sara', 'aycha', 'mikuy', 'munana', 'Mashnatak?'],
        cloze: [
          { sentence: 'Shuk dólar ___ munani.', answer: 'tantata', options: ['tantata', 'tanta', 'tantaka'], translation: 'Quero um dólar de pão.' },
          { sentence: 'Kay mikunaka ___.', answer: 'sumakmi', options: ['sumakmi', 'munani', 'mashnatak'], translation: 'Esta comida é gostosa.' },
          { sentence: 'Haku ___!', answer: 'mikushun', options: ['mikushun', 'mikuni', 'munani'], translation: 'Vamos comer!' },
        ],
        voice: {
          bot: 'Mashnatak?',
          botTranslation: 'Quanto custa?',
          expected: ['Shuk dólar.', 'Shuk dólar', 'shuk dolar', 'Ishkay', 'Kimsa'],
          hint: 'Responda com um número: “Shuk dólar” (um dólar).',
        },
        communityPrompt: 'Escreva o que você quer comprar no mercado: “… -ta munani”.',
      },
      {
        id: 'colo1257-u2-l3',
        title: 'Prova: Mikunata munani',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Haku mikushun!',
          botTranslation: 'Vamos comer!',
          expected: ['Yupaychani!', 'Yupaychani', 'yupaychani', 'Ari', 'Mikunata munani'],
          hint: 'Aceite e agradeça: “Ari, yupaychani!”.',
        },
        communityPrompt: 'Conte de um a cinco em kichwa: “shuk, ishkay, kimsa, chusku, pichka”.',
      },
    ],
  },
];
