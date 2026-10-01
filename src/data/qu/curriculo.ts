import type { UnitSeed } from '../types';

/**
 * Trilha do quéchua sulenho (Qusqu-Qullaw) — por enquanto só as duas unidades do nível A1 (o pacote
 * está marcado como incompleto — ver `incomplete` em index.ts). Da A2.1 ao C2 chega depois.
 */
export const UNITS_QU: UnitSeed[] = [
  {
    id: 'qu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Napaykullayki!',
    emoji: '👋',
    card: {
      id: 'qu-c1',
      title: 'A língua do Tawantinsuyu, hoje falada por milhões',
      emoji: '🏔️',
      history:
        'O quéchua (Runasimi, “a língua das pessoas”) foi a língua administrativa do império inca e continua viva hoje, falada por 8 a 10 milhões de pessoas nos Andes — é língua cooficial no Peru, na Bolívia e no Equador. Não existe “um” quéchua só: há várias variedades pouco inteligíveis entre si, divididas em dois grandes ramos, Quéchua I (central) e Quéchua II (periférico). Este curso ensina o quéchua sulenho (Quéchua II-C, também chamado “Qusqu-Qullaw”), falado em Cusco, Puno, na Bolívia e no noroeste da Argentina — a variedade mais documentada e mais ensinada, a mesma dos cursos universitários e da Academia Mayor de la Lengua Quechua, em Cusco.',
      culture_tip:
        '“Napaykullayki” e “Rimaykullayki” são as formas mais completas de dizer “olá” (literalmente, algo como “eu te saúdo”). No dia a dia, “¿Allillanchu?” (você está bem?) já funciona como cumprimento, respondido com “Allinmi” (estou bem). Chamar alguém de “taytay” (meu pai) ou “mamay” (minha mãe) é um jeito comum e respeitoso de dizer “senhor” e “senhora”, mesmo sem parentesco nenhum.',
      grammar_why:
        'O quéchua tem sete pronomes pessoais, e um deles não existe em português: “ñuqanchik” é o “nós” que inclui a pessoa com quem você fala, e “ñuqayku” é o “nós” que a exclui. O verbo “kay” (ser, estar) muda para cada um: “ñuqa kani” (eu sou/estou), “qam kanki” (tu és/estás), “pay kan” (ele/ela é/está).',
      grammar_examples: [
        ['Napaykullayki!', 'Olá! (lit. “eu te saúdo”)'],
        ['¿Allillanchu?', 'Você está bem?'],
        ['Allinmi, sulpayki.', 'Estou bem, obrigado.'],
        ['Ñuqa Qusqumanta kani.', 'Eu sou de Cusco.'],
      ],
      character_guide: [
        ['ñ', 'como o “nh” do português', 'ñuqa (eu)'],
        ["p', t', ch', k', q'", 'consoantes ejetivas: soltam um ar comprimido logo depois da consoante, sem soprar', "t'anta (pão), ch'arki (charque)"],
        ['ph, th, chh, kh, qh', 'consoantes aspiradas: um sopro de ar depois da consoante', 'phawan (voa)'],
        ['q', 'um “k” mais fundo na garganta, diferente do “k” comum (k)', 'qucha (lago)'],
      ],
    },
    lessons: [
      {
        id: 'qu-u1-l1',
        title: 'Napaykullayki, sulpayki!',
        kind: 'licao',
        words: ['napaykullayki', 'allillanchu', 'allinmi', "allin p'unchay", 'allin tuta', 'sulpayki'],
        cloze: [
          { sentence: '___, taytay!', answer: 'Napaykullayki', options: ['Napaykullayki', 'Sulpayki', 'Allin tuta'], translation: 'Olá, senhor!' },
          { sentence: '¿Allillanchu? — ___.', answer: 'Allinmi', options: ['Allinmi', 'Mana', "Allin p'unchay"], translation: '— Você está bem? — Estou bem.' },
          { sentence: '___, mamay!', answer: 'Sulpayki', options: ['Sulpayki', 'Mana', 'Arí'], translation: 'Obrigado, senhora!' },
        ],
        voice: {
          bot: '¿Allillanchu?',
          botTranslation: 'Você está bem?',
          expected: ['Allinmi, sulpayki. ¿Qamrí?', 'allinmi', 'sulpayki'],
          hint: 'Responda que está bem e agradeça: “Allinmi, sulpayki.”',
        },
        communityPrompt: 'Escreva três cumprimentos em quéchua: um de manhã (“Allin p\'unchay”), um à noite (“Allin tuta”) e a pergunta “¿Allillanchu?”.',
      },
      {
        id: 'qu-u1-l2',
        title: 'Ñuqa, qam, pay',
        kind: 'licao',
        words: ['ñuqa', 'qam', 'pay', 'suti', 'arí', 'mana'],
        cloze: [
          { sentence: '___ Qusqumanta kani.', answer: 'Ñuqa', options: ['Ñuqa', 'Qam', 'Pay'], translation: 'Eu sou de Cusco.' },
          { sentence: '¿___ allinmi kanki?', answer: 'Qam', options: ['Qam', 'Pay', 'Ñuqa'], translation: 'Você está bem?' },
          { sentence: '¿Allillanchu? — ___, allinmi.', answer: 'Arí', options: ['Arí', 'Mana', 'Pay'], translation: '— Você está bem? — Sim, estou bem.' },
        ],
        voice: {
          bot: '¿Imataq sutiyki?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Linu sutiymi.', 'sutiymi'],
          hint: 'Diga o seu nome com “… sutiymi.”',
        },
        communityPrompt: 'Apresente-se em quéchua: diga o seu nome com “… sutiymi” e de onde você é com “Ñuqa …manta kani.”',
      },
      {
        id: 'qu-u1-l3',
        title: 'Test: napaykullayki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¡Napaykullayki! Linu sutiymi. ¿Imataq sutiyki?',
          botTranslation: 'Olá! Meu nome é Linu. Qual é o seu nome?',
          expected: ['Napaykullayki! Ana sutiymi.', 'sutiymi', 'napaykullayki'],
          hint: 'Devolva o cumprimento (“Napaykullayki!”) e diga o seu nome com “… sutiymi.”',
        },
        communityPrompt: 'Escreva uma apresentação completa em quéchua: cumprimento, nome com “… sutiymi” e de onde você é com “Ñuqa …manta kani.”',
      },
    ],
  },
  {
    id: 'qu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ayllu, wasipi',
    emoji: '👪',
    card: {
      id: 'qu-c2',
      title: 'Família e parentesco no mundo andino',
      emoji: '🧭',
      history:
        'Nos Andes, a unidade social mais importante não é só a família nuclear: é o “ayllu”, um grupo de parentesco e vizinhança que compartilha terra e trabalho — um conceito mais largo do que a nossa ideia de “família”, e que vem de muito antes do império inca. Até hoje, muitas comunidades quéchuas organizam o trabalho agrícola (sobretudo o cultivo da batata, do milho e da quinoa) em volta do ayllu.',
      culture_tip:
        'Uma curiosidade genuína do quéchua: as palavras para irmão e irmã mudam conforme quem fala. Um homem chama o irmão de “wawqi” e a irmã de “pana”; uma mulher chama o irmão de “tura” e a irmã de “ñaña”. Não existe um “irmão” ou “irmã” neutros — a palavra já diz o gênero de quem fala, não só o da pessoa de quem se fala.',
      grammar_why:
        'A posse em quéchua é um sufixo grudado na palavra, não uma palavra separada como o nosso “meu”: “wasi” é casa, “wasi-y” é minha casa; “wasi-yki” é tua casa; “wasi-n” é a casa dele ou dela. É o mesmo sufixo em qualquer palavra: “tayta-y” (meu pai), “pana-y” (minha irmã, dita por um homem).',
      grammar_examples: [
        ['Wasiy hatunmi.', 'Minha casa é grande.'],
        ['Wawqiy allinmi kan.', 'Meu irmão (dito por um homem) está bem.'],
        ['¿Imataq sutiyki?', 'Qual é o seu nome?'],
        ['Taytay Qusqumanta kan.', 'Meu pai é de Cusco.'],
      ],
      character_guide: [
        ['wawqi / pana', 'irmão / irmã, ditos por um homem', 'Wawqiy allinmi kan.'],
        ['tura / ñaña', 'irmão / irmã, ditos por uma mulher', 'Ñañay allinmi kan.'],
      ],
    },
    lessons: [
      {
        id: 'qu-u2-l1',
        title: 'Ayllu, wasipi',
        kind: 'licao',
        words: ['ayllu', 'mama', 'tayta', 'wawqi', 'ñaña', 'wasi'],
        cloze: [
          { sentence: 'Aylluy ___.', answer: 'hatunmi', options: ['hatunmi', 'allqu', 'yaku'], translation: 'Minha família é grande.' },
          { sentence: '___ allinmi.', answer: 'Mamay', options: ['Mamay', 'Taytay', 'Wasiy'], translation: 'Minha mãe está bem.' },
          { sentence: '___ wasipi kan.', answer: 'Ñañay', options: ['Ñañay', 'Wawqiy', 'Ayllu'], translation: 'Minha irmã (dita por uma mulher) está em casa.' },
        ],
        voice: {
          bot: '¿Pi wasipi kan?',
          botTranslation: 'Quem está em casa?',
          expected: ['Mamay wasipi kan.', 'mamay', 'wasipi'],
          hint: 'Diga quem está em casa com “…y wasipi kan.”',
        },
        communityPrompt: 'Descreva a sua ayllu (família) em quéchua: quantos wawqi/pana (se você é homem) ou tura/ñaña (se você é mulher) você tem, e quem está “wasipi” (em casa).',
      },
      {
        id: 'qu-u2-l2',
        title: 'Mikhuna, yaku',
        kind: 'licao',
        words: ['yaku', "t'anta", 'aycha', 'papa', 'mikhuy', 'upyay'],
        cloze: [
          { sentence: 'Ñuqa ___ upyani.', answer: 'yakuta', options: ['yakuta', "t'antata", 'aychata'], translation: 'Eu bebo água.' },
          { sentence: 'Ñuqa ___ mikhuni.', answer: "t'antata", options: ["t'antata", 'yakuta', 'papata'], translation: 'Eu como pão.' },
          { sentence: 'Qam ___ mikhunki.', answer: 'papata', options: ['papata', 'yakuta', 'aychata'], translation: 'Você come batata.' },
        ],
        voice: {
          bot: '¿Imata mikhunki?',
          botTranslation: 'O que você come?',
          expected: ['Papata mikhuni.', 'mikhuni'],
          hint: 'Diga o que você come com “…ta mikhuni.”',
        },
        communityPrompt: 'Escreva o que você come e bebe em quéchua: “…ta mikhuni” e “…ta upyani.”',
      },
      {
        id: 'qu-u2-l3',
        title: 'Test: ayllu e mikhuna',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¿Imataq sutiyki, maymantataq kanki?',
          botTranslation: 'Qual é o seu nome, de onde você é?',
          expected: ['Ana sutiymi, Qusqumanta kani.', 'sutiymi', 'kani'],
          hint: 'Diga o seu nome com “…sutiymi” e de onde você é com “…manta kani.”',
        },
        communityPrompt: 'Escreva cinco frases sobre você e a sua família em quéchua, usando “sutiymi”, “kani” e os parentes que você aprendeu (“mamay”, “taytay”, “wawqiy/panay” ou “turay/ñañay”).',
      },
    ],
  },
];
