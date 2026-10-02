import type { UnitSeed } from '../types';

/**
 * Trilha do tâmil: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Da A2 ao C2 chega depois.
 */
export const UNITS_TA: UnitSeed[] = [
  {
    id: 'ta-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'வணக்கம்! முதல் அடிகள்',
    emoji: '🙏',
    card: {
      id: 'ta-c1',
      title: 'Mais de dois mil anos de literatura',
      emoji: '📜',
      history:
        'O tâmil é falado por cerca de 86 milhões de pessoas (79 milhões como língua materna, mais 7,6 milhões como segunda língua) e é língua oficial de Tamil Nadu e de Puducherry, na Índia, além do Sri Lanka (ao lado do cingalês) e de Singapura. Em 2004 foi a primeira língua da Índia a receber o título oficial de “língua clássica”. A literatura Sangam, mais de 2 mil poemas, data de entre o século 1 a.C. e o século 5 d.C.; e o Tholkappiyam, um tratado de gramática tâmil, pode ser ainda mais antigo, do fim do século 2 a.C. — uma das tradições literárias contínuas mais antigas do mundo.',
      culture_tip:
        'O cumprimento “வணக்கம்” (vaṇakkam) vem do verbo “வணங்கு”, que quer dizer “curvar-se, reverenciar, adorar”: dizer “oi” em tâmil carrega, na origem, um gesto de respeito — tradicionalmente feito com as duas mãos unidas, como em outras línguas do sul da Ásia.',
      grammar_why:
        'O tâmil não usa nenhum verbo para apresentar nome ou identidade: “என் பெயர் கவிதா” é, ao pé da letra, “meu nome Kavitha” — sem nada equivalente a “é”. Esse predicado de cópula zero só vale quando o predicado é um substantivo; para existência, posse e localização, o tâmil usa os verbos “இரு” e “உண்டு” (ver gramática).',
      grammar_examples: [
        ['வணக்கம், என் பெயர் கவிதா.', 'Olá, meu nome é Kavitha.'],
        ['உங்கள் பெயர் என்ன?', 'Qual é o seu nome? (formal)'],
        ['நீங்கள் எப்படி இருக்கின்றீர்கள்?', 'Como você está? (formal)'],
        ['நான் நல்லா இருக்கின்றேன்.', 'Eu estou bem.'],
      ],
      character_guide: [
        ['அ', 'um “a” curto, como em “casa”', 'வணக்கம் (vaṇakkam, “olá”)'],
        ['வ', 'como o “v” do português', 'வணக்கம் (vaṇakkam)'],
        ['க', 'soa [k] no início, mas costuma amolecer para [g] ou [x] no meio da palavra', 'வணக்கம் (o “க” do meio soa como [g])'],
        ['ந', 'um “n” dental, língua tocando os dentes', 'நன்றி (naṉṟi, “obrigado”)'],
      ],
    },
    lessons: [
      {
        id: 'ta-u1-l1',
        title: 'வணக்கம், நன்றி',
        kind: 'licao',
        words: ['வணக்கம்', 'நன்றி', 'தயவுசெய்து', 'ஆம்', 'இல்லை', 'எப்படி'],
        cloze: [
          { sentence: '___, கவிதா! நீங்கள் எப்படி இருக்கின்றீர்கள்?', answer: 'வணக்கம்', options: ['வணக்கம்', 'நன்றி', 'தயவுசெய்து'], translation: 'Olá, Kavitha! Como você está?' },
          { sentence: 'தண்ணீர், ___.', answer: 'தயவுசெய்து', options: ['தயவுசெய்து', 'நன்றி', 'வணக்கம்'], translation: 'Água, por favor.' },
          { sentence: 'மிக ___!', answer: 'நன்றி', options: ['நன்றி', 'ஆம்', 'இல்லை'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'வணக்கம்! நீங்கள் எப்படி இருக்கின்றீர்கள்?',
          botTranslation: 'Olá! Como você está?',
          expected: ['நான் நல்லா இருக்கின்றேன், நன்றி.', 'நல்லா இருக்கின்றேன்', 'நன்றி'],
          hint: 'Responda que está bem e agradeça: “நான் நல்லா இருக்கின்றேன், நன்றி.”',
        },
        communityPrompt: 'Escreva três palavras tâmil do dia a dia: um cumprimento (“வணக்கம்”), um agradecimento (“நன்றி”) e um pedido educado (“தயவுசெய்து”).',
      },
      {
        id: 'ta-u1-l2',
        title: 'நான், நீ, நீங்கள்',
        kind: 'licao',
        words: ['நான்', 'நீ', 'நீங்கள்', 'பெயர்', 'இரு', 'யார்'],
        cloze: [
          { sentence: 'என் ___ கவிதா.', answer: 'பெயர்', options: ['பெயர்', 'வீடு', 'குடும்பம்'], translation: 'Meu nome é Kavitha.' },
          { sentence: '___ நல்லா இருக்கின்றேன்.', answer: 'நான்', options: ['நான்', 'நீ', 'நீங்கள்'], translation: 'Eu estou bem.' },
          { sentence: 'அவன் ___?', answer: 'யார்', options: ['யார்', 'என்ன', 'எங்கே'], translation: 'Quem é ele?' },
        ],
        voice: {
          bot: 'உங்கள் பெயர் என்ன?',
          botTranslation: 'Qual é o seu nome? (formal)',
          expected: ['என் பெயர் ... .', 'என் பெயர்'],
          hint: 'Diga o seu nome com “என் பெயர் … .”.',
        },
        communityPrompt: 'Apresente-se em tâmil: diga o seu nome com “என் பெயர் … .”.',
      },
      {
        id: 'ta-u1-l3',
        title: 'பரீட்சை: முதல் அடிகள்',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'வணக்கம், என் பெயர் முருகன். உங்கள் பெயர் என்ன?',
          botTranslation: 'Olá, meu nome é Murugan. Qual é o seu nome?',
          expected: ['வணக்கம், என் பெயர் ... .', 'என் பெயர்'],
          hint: 'Devolva o cumprimento e diga o seu nome com “என் பெயர் … .”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em tâmil: cumprimento (“வணக்கம்”) e nome (“என் பெயர் … ”).',
      },
    ],
  },
  {
    id: 'ta-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'என் குடும்பமும் வீடும்',
    emoji: '👪',
    card: {
      id: 'ta-c2',
      title: 'Pongal: a festa da colheita',
      emoji: '🌾',
      history:
        'O Pongal é a festa da colheita do tâmil, celebrada em janeiro, por volta do dia 14 ou 15, marcando o fim do solstício de inverno. Tradicionalmente dura três ou quatro dias — Bhogi, Thai Pongal, Mattu Pongal e Kaanum Pongal —, e homenageia o sol (o deus Surya), o gado e as pessoas que trabalham na lavoura. O prato que dá nome à festa, o próprio “pongal” (“transbordar, ferver até transbordar”, em tâmil), é feito fervendo arroz com leite e melaço até a panela transbordar — um símbolo de fartura para o ano novo.',
      culture_tip:
        'Durante o Pongal, é comum deixar a panela de arroz e leite ferver até a mistura transbordar na frente da casa, enquanto todos gritam “Pongalo Pongal!” — um costume que celebra literalmente a “fartura transbordando”.',
      grammar_why:
        'Para dizer que tem um parente, o tâmil usa o caso dativo (எனக்கு, “para mim”) com o verbo invariável “உண்டு” (existir, haver): “எனக்கு ஒரு அண்ணன் உண்டு” é, ao pé da letra, “para mim um irmão-mais-velho existe”. A negação troca உண்டு por “இல்லை”, a mesma palavra que nega “não ser” na fala do dia a dia (ver gramática).',
      grammar_examples: [
        ['எனக்கு ஒரு அண்ணன் உண்டு.', 'Eu tenho um irmão mais velho.'],
        ['எனக்கு ஒரு தங்கை இல்லை.', 'Eu não tenho irmã mais nova.'],
        ['இது என் வீடு.', 'Esta é a minha casa.'],
        ['எனக்கு தண்ணீர் வேண்டும்.', 'Eu quero/preciso de água.'],
      ],
      character_guide: [
        ['ண', 'um “n” retroflexo, língua curvada para trás — diferente do “ந” dental', 'அண்ணன் (aṇṇaṉ, “irmão mais velho”)'],
        ['ழ', 'um som só do tâmil e do malaiala, sem equivalente no português — a língua se curva bem para trás; aparece no nome da própria língua, “தமிழ்”', 'பழம் (paḻam, “fruta”)'],
        ['ர', 'um toque rápido da língua, mais suave que o “ற”', 'பெயர் (peyar, “nome”)'],
        ['த', 'um “t” dental, língua tocando os dentes', 'தலை (talai, “cabeça”)'],
      ],
    },
    lessons: [
      {
        id: 'ta-u2-l1',
        title: 'என் குடும்பம்',
        kind: 'licao',
        words: ['அம்மா', 'அப்பா', 'அண்ணன்', 'அக்கா', 'தம்பி', 'தங்கை'],
        cloze: [
          { sentence: 'எனக்கு ஒரு ___ உண்டு.', answer: 'அண்ணன்', options: ['அண்ணன்', 'அக்கா', 'தங்கை'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: 'எனக்கு ஒரு ___ உண்டு.', answer: 'தங்கை', options: ['தங்கை', 'அண்ணன்', 'தம்பி'], translation: 'Eu tenho uma irmã mais nova.' },
          { sentence: 'அவன் என் ___.', answer: 'அப்பா', options: ['அப்பா', 'அம்மா', 'அக்கா'], translation: 'Ele é meu pai.' },
        ],
        voice: {
          bot: 'உங்களுக்கு ஒரு அண்ணன் உண்டா?',
          botTranslation: 'Você tem um irmão mais velho?',
          expected: ['ஆம், எனக்கு ஒரு அண்ணன் உண்டு.', 'எனக்கு ஒரு அண்ணன் உண்டு', 'இல்லை'],
          hint: 'Responda com “எனக்கு ஒரு அண்ணன் உண்டு.” ou “இல்லை.”.',
        },
        communityPrompt: 'Fale sobre a sua família em tâmil: quantos irmãos você tem, usando “எனக்கு ஒரு அண்ணன்/அக்கா/தம்பி/தங்கை உண்டு.”.',
      },
      {
        id: 'ta-u2-l2',
        title: 'வீடும் சாப்பாடும்',
        kind: 'licao',
        words: ['வீடு', 'தண்ணீர்', 'பால்', 'சோறு', 'சாப்பிடு', 'குடி'],
        cloze: [
          { sentence: 'இது என் ___.', answer: 'வீடு', options: ['வீடு', 'பால்', 'சோறு'], translation: 'Esta é a minha casa.' },
          { sentence: 'எனக்கு ___ வேண்டும்.', answer: 'தண்ணீர்', options: ['தண்ணீர்', 'பால்', 'சோறு'], translation: 'Eu quero água.' },
          { sentence: 'சோறு ___!', answer: 'சாப்பிடு', options: ['சாப்பிடு', 'குடி', 'இரு'], translation: 'Coma a comida! (imperativo informal)' },
        ],
        voice: {
          bot: 'உங்களுக்கு என்ன வேண்டும்?',
          botTranslation: 'O que você quer?',
          expected: ['எனக்கு தண்ணீர் வேண்டும்.', 'எனக்கு … வேண்டும்'],
          hint: 'Diga o que você quer com “எனக்கு … வேண்டும்.”.',
        },
        communityPrompt: 'Escreva o que você quer comer e beber, usando “எனக்கு … வேண்டும்.”.',
      },
      {
        id: 'ta-u2-l3',
        title: 'பரீட்சை: குடும்பமும் வீடும்',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'உங்கள் அம்மா பெயர் என்ன?',
          botTranslation: 'Qual é o nome da sua mãe?',
          expected: ['என் அம்மா பெயர் ... .', 'என் அம்மா பெயர்'],
          hint: 'Diga o nome da sua mãe com “என் அம்மா பெயர் … .”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “என் … பெயர் … .”, “எனக்கு … உண்டு/இல்லை” e “இது என் வீடு.”.',
      },
    ],
  },
];
