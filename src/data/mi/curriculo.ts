import type { UnitSeed } from '../types';

/**
 * Trilha do maori: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_MI: UnitSeed[] = [
  {
    id: 'mi-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kia ora! Ngā kupu tuatahi',
    emoji: '👋',
    card: {
      id: 'mi-c1',
      title: 'Kia ora! Uma língua em renascimento',
      emoji: '🌱',
      history:
        'Te reo Māori é a língua indígena da Aotearoa Nova Zelândia, da família austronésia (ramo polinésio), trazida pelos navegadores polinésios que chegaram às ilhas há cerca de 700 anos. Depois de décadas de repressão colonial — que chegou a proibir a língua nas escolas —, um forte movimento de revitalização começou nos anos 1980 com os “kōhanga reo” (ninhos de língua: creches de imersão total) e as escolas “kura kaupapa Māori”. Em 1987 o te reo Māori se tornou uma das línguas oficiais da Nova Zelândia, ao lado do inglês e da língua de sinais neozelandesa. Hoje cerca de 185 mil pessoas falam a língua.',
      culture_tip:
        '“Kia ora” é a saudação mais usada em te reo Māori: serve para “oi”, para “obrigado” e até para confirmar algo (“combinado!”). Para uma pessoa só, de forma mais formal, usa-se “tēnā koe”. Na despedida, cada lado tem a sua palavra: quem fica diz “haere rā” (vá bem) para quem vai embora.',
      grammar_why:
        'O te reo Māori não conjuga verbos como o português — em vez de mudar a terminação do verbo, ele usa pequenas partículas antes dele para marcar o tempo. “Kei te” marca uma ação acontecendo agora (“kei te kai au”, eu estou comendo), “i” marca o passado, “ka” marca o futuro e “kua” marca uma ação já concluída. O verbo nunca muda — só a partícula na frente dele.',
      grammar_examples: [
        ['Kei te pai ahau.', 'Eu estou bem.'],
        ['Kia ora! Kei te pēhea koe?', 'Oi! Como você está?'],
        ['Kāore au i te mōhio.', 'Eu não sei.'],
        ['Ko Ana tōku ingoa.', 'Ana é o meu nome. (lit. “é Ana o meu nome”)'],
      ],
      character_guide: [
        ['wh', 'na maioria dos dialetos soa como o “f” do português', 'whānau (família), whare (casa)'],
        ['ng', 'som nasal único, como o “ng” de “sing” em inglês, nunca “n” + “g” separados', 'ngahere (floresta), rangatira (chefe)'],
        ['ā, ē, ī, ō, ū (macron)', 'vogal longa: segura o som por mais tempo, e muda o sentido da palavra', 'keke (bolo, empréstimo do inglês) × kēkē (axila)'],
        ['wai × whai', 'cuidado: palavras parecidas, mas o “wh” muda tudo', 'wai (água) × whai (seguir; também “arraia”)'],
      ],
    },
    lessons: [
      {
        id: 'mi-u1-l1',
        title: 'Kia ora, haere rā!',
        kind: 'licao',
        words: ['kia ora', 'tēnā koe', 'haere mai', 'haere rā', 'ka kite anō', 'kei te pai'],
        cloze: [
          { sentence: '___! Kei te pēhea koe?', answer: 'Kia ora', options: ['Kia ora', 'Haere rā', 'Kāo'], translation: 'Oi! Como você está?' },
          { sentence: '___, e te rangatira.', answer: 'Tēnā koe', options: ['Tēnā koe', 'Haere mai', 'Ka kite anō'], translation: 'Olá (formal), chefe.' },
          { sentence: '___! Ka kite anō.', answer: 'Haere rā', options: ['Haere rā', 'Haere mai', 'Kia ora'], translation: 'Vá bem (tchau)! Até logo.' },
        ],
        voice: {
          bot: 'Kia ora! Kei te pēhea koe?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Kei te pai, kei te pēhea koe?', 'kei te pai', 'kia ora'],
          hint: 'Responda que está bem com “kei te pai” e devolva a pergunta com “kei te pēhea koe?”.',
        },
        communityPrompt: 'Escreva uma saudação e uma despedida em te reo Māori: um “kia ora” e um “haere rā” ou “ka kite anō”.',
      },
      {
        id: 'mi-u1-l2',
        title: 'Ko wai tō ingoa?',
        kind: 'licao',
        words: ['au', 'koe', 'ia', 'ingoa', 'āe', 'kāo'],
        cloze: [
          { sentence: 'Ko Ana tōku ___.', answer: 'ingoa', options: ['ingoa', 'whānau', 'kāinga'], translation: 'Ana é o meu nome.' },
          { sentence: 'He pai tēnei? ___!', answer: 'Āe', options: ['Āe', 'Kāo', 'Kāore'], translation: 'Isso é bom? Sim!' },
          { sentence: 'Kei te pai ___?', answer: 'koe', options: ['koe', 'au', 'ia'], translation: 'Você está bem?' },
        ],
        voice: {
          bot: 'Ko wai tō ingoa?',
          botTranslation: 'Qual é o seu nome? (lit. “quem é o seu nome”)',
          expected: ['Ko Maya tōku ingoa.', 'tōku ingoa'],
          hint: 'Diga o seu nome com a fórmula “Ko … tōku ingoa.”.',
        },
        communityPrompt: 'Apresente-se em te reo Māori: diga o seu nome com “Ko … tōku ingoa” e responda “āe” ou “kāo” a uma pergunta simples.',
      },
      {
        id: 'mi-u1-l3',
        title: 'Prova: ngā kupu tuatahi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kia ora! Ko wai tō ingoa, ā, kei te pēhea koe?',
          botTranslation: 'Oi! Qual é o seu nome, e como você está?',
          expected: ['Kia ora! Ko Maya tōku ingoa, kei te pai ahau.', 'tōku ingoa', 'kei te pai'],
          hint: 'Devolva o cumprimento, diga o seu nome com “Ko … tōku ingoa” e diga que está bem com “kei te pai”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento com “kia ora”, nome com “Ko … tōku ingoa” e uma despedida.',
      },
    ],
  },
  {
    id: 'mi-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tōku whānau me tōku kāinga',
    emoji: '👪',
    card: {
      id: 'mi-c2',
      title: 'Whānau: a palavra que também significa “nascer”',
      emoji: '🤱',
      history:
        '“Whānau” (família) vem do verbo whānau, “nascer, dar à luz” — a mesma palavra que nomeia o grupo nomeia também o ato que o cria. Na sociedade maori tradicional, o whānau é a unidade mais próxima (pais, filhos, avós, tios morando perto), que se liga a um hapū (subtribo) e a um iwi (tribo maior). Hoje “whānau” também é usado de forma mais ampla em inglês neozelandês para qualquer grupo próximo de pessoas, não só parentes de sangue.',
      culture_tip:
        'Visitar um marae (o pátio de encontros de um iwi ou hapū) segue um protocolo: os visitantes (manuhiri) são recebidos com um pōwhiri, cerimônia de boas-vindas com discursos, karakia (orações/encantamentos rituais) e waiata (canções). Esse acolhimento vem da manaakitanga, o valor maori de hospitalidade, generosidade e cuidado com quem chega.',
      grammar_why:
        'O maori tem dois jeitos de dizer “meu”: “tāku”/“tōku” (e “tāu”/“tōu”, “tāna”/“tōna”…). A categoria com “a” marca o que você controla ou é responsável por (filhos, animais de estimação, comida); a categoria com “o” marca o que você não controla do mesmo jeito (pais, parentes, sentimentos, casa, água). Por isso “tōku māmā” (minha mãe, categoria o) mas “tāku kurī” (meu cachorro, categoria a) — ver o tópico de gramática “A categoria a/o” para a lista completa.',
      grammar_examples: [
        ['He nui tōku whānau.', 'Minha família é grande. (whānau: categoria o)'],
        ['He kurī pai tāku.', 'Tenho um cachorro bom. (kurī: categoria a)'],
        ['Kei tōku kāinga au.', 'Estou no meu lar. (kāinga: categoria o)'],
        ['He hoa pai ia nōku.', 'Ele/ela é um bom amigo meu. (hoa: categoria o)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mi-u2-l1',
        title: 'Tōku whānau',
        kind: 'licao',
        words: ['whānau', 'māmā', 'pāpā', 'tuakana', 'teina', 'tamaiti'],
        cloze: [
          { sentence: 'He nui tōku ___.', answer: 'whānau', options: ['whānau', 'kāinga', 'ingoa'], translation: 'Minha família é grande.' },
          { sentence: 'Ko Rina tōku ___.', answer: 'māmā', options: ['māmā', 'pāpā', 'teina'], translation: 'Rina é minha mãe.' },
          { sentence: 'Ko ia tōku ___.', answer: 'tuakana', options: ['tuakana', 'teina', 'tamaiti'], translation: 'Ele/ela é meu irmão/minha irmã mais velho(a).' },
        ],
        voice: {
          bot: 'He nui tōu whānau?',
          botTranslation: 'Sua família é grande?',
          expected: ['Āe, he nui tōku whānau.', 'he nui tōku whānau', 'he iti tōku whānau'],
          hint: 'Responda com “Āe, he nui tōku whānau” (sim, grande) ou “Kāo, he iti tōku whānau” (não, pequena).',
        },
        communityPrompt: 'Descreva a sua família em te reo Māori: diga se é grande (“he nui”) ou pequena (“he iti”), e nomeie a sua māmā, pāpā, tuakana ou teina.',
      },
      {
        id: 'mi-u2-l2',
        title: 'Tōku kāinga',
        kind: 'licao',
        words: ['kāinga', 'whare', 'kai', 'wai', 'nui', 'iti'],
        cloze: [
          { sentence: 'Kei tōku ___ au.', answer: 'kāinga', options: ['kāinga', 'whānau', 'ingoa'], translation: 'Estou no meu lar.' },
          { sentence: 'Kei te kai au i te ___.', answer: 'kai', options: ['kai', 'wai', 'whare'], translation: 'Estou comendo comida.' },
          { sentence: 'He kāinga ___ tōku.', answer: 'iti', options: ['iti', 'nui', 'pai'], translation: 'Meu lar é pequeno.' },
        ],
        voice: {
          bot: 'He pai tōu kāinga?',
          botTranslation: 'Seu lar é bom?',
          expected: ['Āe, he pai tōku kāinga.', 'he pai tōku kāinga'],
          hint: 'Responda com “Āe, he pai tōku kāinga” e descreva com “he nui” (grande) ou “he iti” (pequeno).',
        },
        communityPrompt: 'Descreva o seu lar (“kāinga”) ou casa (“whare”) em duas frases: se é grande ou pequeno, e o que você gosta de comer ou beber lá.',
      },
      {
        id: 'mi-u2-l3',
        title: 'Prova: tōku whānau me tōku kāinga',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kōrero mai mō tō whānau me tō kāinga.',
          botTranslation: 'Me conte sobre a sua família e o seu lar.',
          expected: ['He nui tōku whānau, ko Rina tōku māmā. He pai tōku kāinga.', 'tōku whānau', 'tōku kāinga'],
          hint: 'Diga se a sua família é grande ou pequena, nomeie um parente e descreva o seu lar com “tōku kāinga…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em te reo Māori apresentando a sua família e o seu lar, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
