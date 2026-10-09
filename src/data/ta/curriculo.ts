import type { UnitSeed } from '../types';

/**
 * Trilha do tâmil: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1 em diante). Fontes adicionais das unidades 3 e 4: Wikipédia em inglês
 * («Chennai», «Madras») e, para o monção do nordeste em Tamil Nadu, os dados do Departamento
 * Meteorológico da Índia (IMD) citados por reportagens especializadas (ver comentário na unidade).
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
  {
    id: 'ta-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'நகரத்தில் என் உணர்வுகள்',
    emoji: '📍',
    card: {
      id: 'ta-c3',
      title: 'De Madras a Chennai',
      emoji: '🏙️',
      history:
        'Até 1996, a capital de Tamil Nadu se chamava Madras. Em julho daquele ano, o governo do estado mudou oficialmente o nome para Chennai — embora “Madras” ainda apareça, até hoje, em nomes de lugares e de coisas batizadas antes da troca.',
      culture_tip:
        'Para dizer onde está, o tâmil usa o sufixo locativo “-இல்” grudado no substantivo: “நான் நகரத்தில் இருக்கின்றேன்” (eu estou na cidade) — nunca uma palavra separada para “em”.',
      grammar_why:
        'O sufixo locativo “-இல்” marca “em, dentro de” (நகரத்தில், கடையில், பள்ளியில்). E sentimentos como fome, sede e medo seguem a mesma lógica da posse: quem sente vai no dativo (எனக்கு), com “உண்டு” no final — “எனக்கு பசி உண்டு” é “estou com fome”.',
      grammar_examples: [
        ['நான் நகரத்தில் இருக்கின்றேன்.', 'Eu estou na cidade.'],
        ['நான் கடையில் இருக்கின்றேன்.', 'Eu estou na loja.'],
        ['எனக்கு பசி உண்டு.', 'Estou com fome.'],
        ['எனக்கு பயம் உண்டு.', 'Estou com medo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ta-u3-l1',
        title: 'நகரத்தில்',
        kind: 'licao',
        words: ['நகரம்', 'தெரு', 'கடை', 'பள்ளி', 'மருத்துவர்', 'ஆசிரியர்'],
        cloze: [
          { sentence: 'நான் ___ இருக்கின்றேன்.', answer: 'நகரத்தில்', options: ['நகரத்தில்', 'கடையில்', 'பள்ளியில்'], translation: 'Eu estou na cidade.' },
          { sentence: 'நான் ___ இருக்கின்றேன்.', answer: 'கடையில்', options: ['கடையில்', 'பள்ளியில்', 'நகரத்தில்'], translation: 'Eu estou na loja.' },
          { sentence: 'நான் ___ இருக்கின்றேன்.', answer: 'பள்ளியில்', options: ['பள்ளியில்', 'கடையில்', 'நகரத்தில்'], translation: 'Eu estou na escola.' },
        ],
        voice: {
          bot: 'நீங்கள் எங்கே இருக்கின்றீர்கள்?',
          botTranslation: 'Onde você está?',
          expected: ['நான் நகரத்தில் இருக்கின்றேன்.', 'நகரத்தில்'],
          hint: 'Responda com o lugar e “-இல்” mais “இருக்கின்றேன்”: “நான் … இல் இருக்கின்றேன்.”',
        },
        communityPrompt: 'Escreva três frases dizendo onde você está, usando “நான் … இல் இருக்கின்றேன்.” com “நகரம்”, “கடை” ou “பள்ளி”.',
      },
      {
        id: 'ta-u3-l2',
        title: 'எனக்கு பசி உண்டு',
        kind: 'licao',
        words: ['பசி', 'தாகம்', 'பயம்', 'சந்தோஷம்', 'துக்கம்', 'சோர்'],
        cloze: [
          { sentence: 'எனக்கு ___ உண்டு.', answer: 'பசி', options: ['பசி', 'தாகம்', 'பயம்'], translation: 'Estou com fome.' },
          { sentence: 'எனக்கு ___ உண்டு.', answer: 'தாகம்', options: ['தாகம்', 'பசி', 'சந்தோஷம்'], translation: 'Estou com sede.' },
          { sentence: 'நான் ___.', answer: 'சோர்கிறேன்', options: ['சோர்கிறேன்', 'பசி', 'பயம்'], translation: 'Estou ficando cansado.' },
        ],
        voice: {
          bot: 'உங்களுக்கு பசி உண்டா?',
          botTranslation: 'Você está com fome?',
          expected: ['ஆம், எனக்கு பசி உண்டு.', 'எனக்கு பசி உண்டு'],
          hint: 'Responda com “எனக்கு பசி உண்டு.” ou “இல்லை.”',
        },
        communityPrompt: 'Escreva três frases sobre como você está, usando “எனக்கு … உண்டு” com “பசி”, “தாகம்”, “பயம்”, “சந்தோஷம்” ou “துக்கம்”.',
      },
      {
        id: 'ta-u3-l3',
        title: 'பரீட்சை: நகரத்தில் என் உணர்வுகள்',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'நீங்கள் எங்கே இருக்கின்றீர்கள்? உங்களுக்கு பசி உண்டா?',
          botTranslation: 'Onde você está? Você está com fome?',
          expected: ['நான் நகரத்தில் இருக்கின்றேன். ஆம், எனக்கு பசி உண்டு.', 'நகரத்தில்', 'பசி உண்டு'],
          hint: 'Diga onde está com “… இல் இருக்கின்றேன்.” e se está com fome com “எனக்கு பசி உண்டு.”',
        },
        communityPrompt: 'Escreva um parágrafo curto contando onde você está (நகரம்/கடை/பள்ளி) e como você está se sentindo (பசி/தாகம்/சந்தோஷம்/துக்கம்/பயம்).',
      },
    ],
  },
  {
    id: 'ta-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'நாளை மழை இருக்கும்',
    emoji: '🔮',
    card: {
      id: 'ta-c4',
      title: 'O monção que falta na maior parte da Índia',
      emoji: '🌧️',
      history:
        'A maior parte da Índia recebe chuva com o monção do sudoeste, entre junho e setembro. Mas Tamil Nadu fica do outro lado dos Ghats Ocidentais, que bloqueiam boa parte dessa chuva — por isso o estado depende, em especial, do monção do nordeste (outubro a dezembro), responsável por cerca de 48% da chuva anual ali, segundo dados do Departamento Meteorológico da Índia (IMD).',
      culture_tip:
        'Para falar do tempo (clima), o tâmil usa a forma neutra do futuro de “இரு”: “நாளை மழை இருக்கும்” (vai chover amanhã) usa “இருக்கும்”, a mesma forma usada para “isso” (அது) no futuro.',
      grammar_why:
        'O futuro de “இரு” (ser/estar/existir) tem uma raiz própria: இருப்பேன் (eu), இருப்பாய் (tu), இருப்பான்/இருப்பாள் (ele/ela) e இருக்கும் (neutro, usado para o clima e as coisas em geral).',
      grammar_examples: [
        ['நாளை மழை இருக்கும்.', 'Vai chover amanhã.'],
        ['நாளை குளிர் இருக்கும்.', 'Vai estar frio amanhã.'],
        ['நான் நாளை நகரத்தில் இருப்பேன்.', 'Eu vou estar na cidade amanhã.'],
        ['இது என் தொப்பி.', 'Este é o meu boné.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ta-u4-l1',
        title: 'நாளை மழை',
        kind: 'licao',
        words: ['மழை', 'காற்று', 'மேகம்', 'வெயில்', 'சூடு', 'குளிர்'],
        cloze: [
          { sentence: 'நாளை ___ இருக்கும்.', answer: 'மழை', options: ['மழை', 'காற்று', 'மேகம்'], translation: 'Amanhã vai chover.' },
          { sentence: 'நாளை ___ இருக்கும்.', answer: 'சூடு', options: ['சூடு', 'குளிர்', 'மேகம்'], translation: 'Amanhã vai estar calor.' },
          { sentence: 'நாளை ___ இருக்கும்.', answer: 'குளிர்', options: ['குளிர்', 'சூடு', 'காற்று'], translation: 'Amanhã vai estar frio.' },
        ],
        voice: {
          bot: 'நாளை குளிர் இருக்குமா?',
          botTranslation: 'Vai estar frio amanhã?',
          expected: ['ஆம், நாளை குளிர் இருக்கும்.', 'குளிர் இருக்கும்'],
          hint: 'Responda com “ஆம், நாளை குளிர் இருக்கும்.” ou “இல்லை, நாளை சூடு இருக்கும்.”',
        },
        communityPrompt: 'Escreva sobre o tempo de amanhã usando “நாளை … இருக்கும்” com “மழை”, “காற்று”, “மேகம்”, “சூடு” ou “குளிர்”.',
      },
      {
        id: 'ta-u4-l2',
        title: 'என் உடைகள்',
        kind: 'licao',
        words: ['உடை', 'தொப்பி', 'புடவை', 'செருப்பு', 'கால்', 'காது'],
        cloze: [
          { sentence: 'இது என் ___.', answer: 'உடை', options: ['உடை', 'தொப்பி', 'செருப்பு'], translation: 'Esta é a minha roupa.' },
          { sentence: 'இது என் ___.', answer: 'செருப்பு', options: ['செருப்பு', 'உடை', 'புடவை'], translation: 'Este é o meu chinelo.' },
          { sentence: 'இது என் ___.', answer: 'கால்', options: ['கால்', 'காது', 'தலை'], translation: 'Este é o meu pé.' },
        ],
        voice: {
          bot: 'இது உங்கள் தொப்பி?',
          botTranslation: 'Este é o seu boné?',
          expected: ['ஆம், இது என் தொப்பி.', 'இது என் தொப்பி'],
          hint: 'Responda com “ஆம், இது என் தொப்பி.” ou “இல்லை.”',
        },
        communityPrompt: 'Escreva sobre as suas roupas, usando “இது என் …” com “உடை”, “தொப்பி”, “புடவை” ou “செருப்பு”.',
      },
      {
        id: 'ta-u4-l3',
        title: 'பரீட்சை: நாளை மழை இருக்கும்',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'நாளை மழை இருக்குமா? இது உங்கள் செருப்பு?',
          botTranslation: 'Vai chover amanhã? Este é o seu chinelo?',
          expected: ['ஆம், நாளை மழை இருக்கும். ஆம், இது என் செருப்பு.', 'மழை இருக்கும்', 'என் செருப்பு'],
          hint: 'Diga o tempo de amanhã com “… இருக்கும்.” e confirme o objeto com “இது என் …”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o tempo de amanhã e o que você vai vestir, usando “இருக்கும்” e “இது என் …”.',
      },
    ],
  },
];
