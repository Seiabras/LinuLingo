import type { UnitSeed } from '../types';

/**
 * Trilha do judeu-espanhol: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_LAD: UnitSeed[] = [
  {
    id: 'lad-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ke haber? Los primeros pasos',
    emoji: '👋',
    card: {
      id: 'lad-c1',
      title: 'O espanhol que viajou 500 anos',
      emoji: '📜',
      history:
        'O judeu-espanhol (djudeo-espanyol, também chamado ladino) é a língua dos judeus sefarditas, expulsos da Espanha em 1492 e de Portugal poucos anos depois. Eles levaram o castelhano da época para o Império Otomano (Istambul, Salônica, Esmirna, Sarajevo), para o norte da África e para outras partes do Mediterrâneo, e ali a língua seguiu o seu próprio caminho, recebendo palavras do hebraico, do turco, do grego, do italiano, do francês e até do português. Depois do Holocausto, que destruiu comunidades inteiras como a de Salônica, e da mudança de muitos falantes para Israel e para as Américas, o número de falantes caiu muito: hoje são algumas dezenas de milhares, a maioria idosos. Em Israel, a Autoridad Nasionala del Ladino (criada em 1997) cuida da língua.',
      culture_tip:
        '«Ke haber?» (quais são as novidades?) é o cumprimento mais típico entre amigos. Para agradecer, tanto «grasias» quanto «mersi», herança do francês ensinado nas escolas judaicas do Império Otomano. Muitas famílias misturam o ladino com o hebraico, o turco ou o espanhol moderno na mesma conversa.',
      grammar_why:
        'Quem fala português ou espanhol entende boa parte do ladino, mas algumas formas são antigas ou próprias: «mozotros» (nós), «mueve» (nove), «avlar» (falar, do antigo «fablar») e o verbo «ser» com «so» e «sos» (sou, és). A grafia é fonética: o que soa k se escreve k (kaza, kafe), o som de «x» português se escreve sh (sesh = seis).',
      grammar_examples: [
        ['Ke haber? Me yamo Rashel.', 'E aí? Eu me chamo Rachel.'],
        ['I tu, komo te yamas?', 'E você, como se chama?'],
        ['El es de Estambol, eya es de Izmir.', 'Ele é de Istambul, ela é de Esmirna.'],
        ['Bien, grasias. I tu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['k', 'sempre o som de k, também antes de e e i', 'kaza (casa), ke (que)'],
        ['sh', 'como o «x» de «xícara»', 'sesh (seis)'],
        ['j', 'como o «j» do português (nunca como o j espanhol)', 'mujer (mulher)'],
        ['dj', 'como «dj» em «adjetivo»', 'djueves (quinta-feira)'],
        ['ny', 'como o «nh» do português', 'anyo (ano)'],
        ['y', 'como o «i» de «iogurte»', 'yamarse (chamar-se), eya (ela)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u1-l1',
        title: 'Buenos dias, grasias, adio!',
        kind: 'licao',
        words: ['buenos dias', 'ke haber?', 'buenas tardes', 'buenas noches', 'adio', 'grasias'],
        cloze: [
          { sentence: '___, Moshe? Komo estas?', answer: 'Ke haber', options: ['Ke haber', 'Adio', 'Grasias'], translation: 'E aí, Moisés? Como você está?' },
          { sentence: 'Ya es tadre: ___!', answer: 'buenas noches', options: ['buenas noches', 'buenos dias', 'grasias'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ por todo!', answer: 'Grasias', options: ['Grasias', 'Adio', 'Buenos dias'], translation: 'Obrigado por tudo!' },
        ],
        voice: {
          bot: 'Ke haber? Komo estas?',
          botTranslation: 'E aí? Como você está?',
          expected: ['Bien, grasias! I tu?', 'bien', 'grasias'],
          hint: 'Responda que está bem e devolva a pergunta: «Bien, grasias! I tu?».',
        },
        communityPrompt: 'Escreva três cumprimentos em ladino: um de manhã («Buenos dias…»), um entre amigos («Ke haber?») e uma despedida («Adio»).',
      },
      {
        id: 'lad-u1-l2',
        title: 'Yo, tu, el, eya',
        kind: 'licao',
        words: ['yo', 'tu', 'el', 'eya', 'yamarse', 'nombre'],
        cloze: [
          { sentence: '___ me yamo Sara.', answer: 'Yo', options: ['Yo', 'Tu', 'El'], translation: 'Eu me chamo Sara.' },
          { sentence: 'I ___, komo te yamas?', answer: 'tu', options: ['tu', 'el', 'eya'], translation: 'E você, como se chama?' },
          { sentence: '___ es de Izmir.', answer: 'Eya', options: ['Eya', 'Yo', 'Tu'], translation: 'Ela é de Esmirna.' },
        ],
        voice: {
          bot: 'Ke haber! Komo te yamas?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Me yamo Ana. I tu?', 'me yamo', 'i tu'],
          hint: 'Diga o seu nome com «Me yamo…» e devolva a pergunta com «I tu?».',
        },
        communityPrompt: 'Apresente-se em ladino: diga o seu nome com «Me yamo…» e pergunte o nome de alguém com «Komo te yamas?».',
      },
      {
        id: 'lad-u1-l3',
        title: 'Prova: los primeros pasos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Buenos dias! Me yamo Moshe. I tu, komo te yamas? De ande sos?',
          botTranslation: 'Bom dia! Eu me chamo Moisés. E você, como se chama? De onde você é?',
          expected: ['Buenos dias! Me yamo Lusia i so de São Paulo.', 'me yamo', 'so de', 'buenos dias'],
          hint: 'Devolva o cumprimento, diga o nome com «Me yamo…» e a cidade com «So de…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Me yamo…», cidade com «So de…» e «Adio!» no fim.',
      },
    ],
  },
  {
    id: 'lad-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiya i la kaza',
    emoji: '👪',
    card: {
      id: 'lad-c2',
      title: 'Palavras de muitos caminhos',
      emoji: '🧭',
      history:
        'A família sefardita guardou por séculos os romances (baladas) e os provérbios trazidos da Península Ibérica, cantados em casa, sobretudo pelas mulheres. Muitas palavras mostram o caminho da comunidade: «alhad» (domingo) vem do árabe, «preto» (preto) lembra o português, e o «mersi» do francês convive com o «grasias» espanhol.',
      culture_tip:
        'Na cozinha sefardita não faltam as «burekas» (pastéis de massa folhada, muitas vezes recheados de queijo, «kezo») e as receitas guardadas para o shabat, o dia de descanso, que vai do pôr do sol de sexta ao de sábado.',
      grammar_why:
        'O artigo é o mesmo do espanhol: «el» e «la», no plural «los» e «las». O possessivo vem antes do nome, sem artigo: «mi madre», «tu ermano». E o verbo «tener» (ter) é regular no presente: tengo, tienes, tiene…',
      grammar_examples: [
        ['Mi famiya es grande.', 'A minha família é grande.'],
        ['Tengo un ermano i una ermana.', 'Tenho um irmão e uma irmã.'],
        ['Mi padre es de Izmir.', 'O meu pai é de Esmirna.'],
        ['Komo pan i kezo.', 'Eu como pão e queijo.'],
      ],
      character_guide: [
        ['i', 'é a conjunção «e» (não «y», como em espanhol)', 'pan i kezo (pão e queijo)'],
        ['-sh', 'terminação da 2ª pessoa do plural (vocês)', 'avlash (vocês falam)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u2-l1',
        title: 'Mi famiya',
        kind: 'licao',
        words: ['famiya', 'madre', 'padre', 'ermano', 'ermana', 'tener'],
        cloze: [
          { sentence: 'Mi ___ se yama Rashel.', answer: 'madre', options: ['madre', 'padre', 'ermano'], translation: 'A minha mãe se chama Rachel.' },
          { sentence: '___ un ermano.', answer: 'Tengo', options: ['Tengo', 'So', 'Esto'], translation: 'Tenho um irmão.' },
          { sentence: 'Mi ___ es de Izmir.', answer: 'padre', options: ['padre', 'ermana', 'madre'], translation: 'O meu pai é de Esmirna.' },
        ],
        voice: {
          bot: 'Tienes ermanos o ermanas?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Si, tengo un ermano i una ermana.', 'tengo', 'ermano', 'ermana'],
          hint: 'Responda com «Si, tengo…» e diga quantos irmãos você tem.',
        },
        communityPrompt: 'Descreva a sua família em ladino: quantos irmãos você tem e de onde são os seus pais.',
      },
      {
        id: 'lad-u2-l2',
        title: 'En kaza',
        kind: 'licao',
        words: ['kaza', 'agua', 'pan', 'leche', 'kezo', 'komer'],
        cloze: [
          { sentence: 'Mi ___ es chika.', answer: 'kaza', options: ['kaza', 'agua', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Bevo ___.', answer: 'agua', options: ['agua', 'pan', 'kezo'], translation: 'Eu bebo água.' },
          { sentence: 'Komo pan i ___.', answer: 'kezo', options: ['kezo', 'agua', 'leche'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ke komes oy?',
          botTranslation: 'O que você come hoje?',
          expected: ['Komo pan i kezo.', 'komo', 'pan', 'kezo'],
          hint: 'Diga o que come com «Komo…».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Komo…» e «Bevo…».',
      },
      {
        id: 'lad-u2-l3',
        title: 'Prova: la famiya i la kaza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kontame de tu famiya: tienes ermanos?',
          botTranslation: 'Me conte da sua família: você tem irmãos?',
          expected: ['Si, tengo una ermana. Se yama Maria.', 'tengo', 'se yama'],
          hint: 'Diga quantos irmãos tem («tengo…») e como se chamam («se yama…»).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «tengo», «se yama» e «es».',
      },
    ],
  },
];
