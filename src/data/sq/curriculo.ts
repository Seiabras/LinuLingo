import type { UnitSeed } from '../types';

/**
 * Trilha do albanês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SQ: UnitSeed[] = [
  {
    id: 'sq-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Përshëndetje! Hapat e parë',
    emoji: '👋',
    card: {
      id: 'sq-c1',
      title: 'Um ramo só no tronco indo-europeu',
      emoji: '🏔️',
      history:
        'O albanês é a única língua viva do seu próprio ramo da família indo-europeia — não tem “primas” próximas como o português tem o espanhol. Os linguistas debatem se ele descende do ilírio, do trácio ou de uma língua balcânica hoje desaparecida, mas a documentação antiga é escassa demais para ter certeza. O primeiro texto conhecido em albanês é uma fórmula de batismo de 1462. Hoje é falado na Albânia, em Kosovo (onde é língua oficial ao lado do sérvio), no norte da Macedônia do Norte, em Montenegro e por uma antiga diáspora no sul da Itália, os arbëreshë, que preservam uma variedade da língua desde o século XV.',
      culture_tip:
        'Um costume que confunde muito turista: tradicionalmente, o albanês balança a cabeça de um lado para o outro para dizer “sim” e abaixa e levanta a cabeça (um aceno comum em outros países) para dizer “não” — o oposto do que a maioria do mundo faz. O gesto ainda é usado, embora o contato com turistas esteja deixando mais gente trocando para o jeito “internacional”.',
      grammar_why:
        'O albanês diz o nome com um verbo reflexivo, “quhem” (algo como “sou chamado”): “Unë quhem Ana”, “Si quheni?” (formal) ou “Si quhesh?” (informal). E para dizer “eu sou”, usa o verbo irregular “jam”.',
      grammar_examples: [
        ['Përshëndetje! Unë quhem Ana.', 'Oi! Eu me chamo Ana.'],
        ['Si quheni?', 'Como você se chama? (formal)'],
        ['Ai është nga Tirana, ajo është nga Shkodra.', 'Ele é de Tirana, ela é de Shkodra.'],
        ['Mirë, faleminderit. Po ju?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['dh', 'como o “th” de “this” em inglês (IPA /ð/)', 'dhe (e)'],
        ['gj', 'som suave, entre “d” e “j” (IPA /ɟ/)', 'gjashtë (seis)'],
        ['ll', 'um “l” grosso, puxado para trás (IPA /ɫ/)', 'mollë (maçã)'],
        ['nj', 'como o “nh” do português', 'një (um)'],
        ['rr', '“r” vibrante forte, como o espanhol “perro”', 'rrugë (rua)'],
        ['sh', 'como o “x” de “xadrez”', 'shtëpi (casa)'],
        ['th', 'como o “th” de “think” em inglês (IPA /θ/)', 'djathë (queijo)'],
        ['xh', 'como o “j” do inglês “jungle”', 'xhaxhai (tio, irmão do pai)'],
        ['ë', 'vogal neutra, parecida com o “e” mudo do francês', 'vëlla (irmão)'],
      ],
    },
    lessons: [
      {
        id: 'sq-u1-l1',
        title: 'Përshëndetje, faleminderit, mirupafshim!',
        kind: 'licao',
        words: ['përshëndetje', 'mirëmëngjes', 'mirëmbrëma', 'natën e mirë', 'mirupafshim', 'faleminderit'],
        cloze: [
          { sentence: '___, si jeni?', answer: 'Përshëndetje', options: ['Përshëndetje', 'Mirupafshim', 'Faleminderit'], translation: 'Olá, como vai (formal)?' },
          { sentence: 'Tani është natë: ___!', answer: 'natën e mirë', options: ['natën e mirë', 'mirëmëngjes', 'faleminderit'], translation: 'Agora é noite: boa noite!' },
          { sentence: '___ shumë!', answer: 'faleminderit', options: ['faleminderit', 'përshëndetje', 'mirupafshim'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Përshëndetje! Si jeni?',
          botTranslation: 'Olá! Como vai (formal)?',
          expected: ['Mirë, faleminderit! Po ju?', 'mirë', 'faleminderit'],
          hint: 'Responda que vai bem e devolva a pergunta: “Mirë, faleminderit! Po ju?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em albanês: um de manhã (“Mirëmëngjes…”), um à noite (“Natën e mirë…”) e uma despedida (“Mirupafshim”).',
      },
      {
        id: 'sq-u1-l2',
        title: 'Unë, ti, ai, ajo',
        kind: 'licao',
        words: ['unë', 'ti', 'ai', 'ajo', 'quhem', 'emër'],
        cloze: [
          { sentence: '___ quhem Sara.', answer: 'Unë', options: ['Unë', 'Ti', 'Ai'], translation: 'Eu me chamo Sara.' },
          { sentence: '___ je nga Tirana?', answer: 'Ti', options: ['Ti', 'Ai', 'Ajo'], translation: 'Você é de Tirana?' },
          { sentence: '___ është nga Shkodra.', answer: 'Ajo', options: ['Ajo', 'Unë', 'Ti'], translation: 'Ela é de Shkodra.' },
        ],
        voice: {
          bot: 'Si quheni?',
          botTranslation: 'Como você se chama? (formal)',
          expected: ['Unë quhem Ana. Po ju?', 'quhem', 'unë'],
          hint: 'Diga seu nome com “Unë quhem…” e devolva a pergunta com “Po ju?”.',
        },
        communityPrompt: 'Apresente-se em albanês: diga seu nome com “Unë quhem…” e sua cidade com “Unë jam nga…”.',
      },
      {
        id: 'sq-u1-l3',
        title: 'Testi: hapat e parë',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Përshëndetje! Unë quhem Arben. Si quheni ju dhe nga jeni?',
          botTranslation: 'Olá! Eu me chamo Arben. Como você se chama e de onde você é?',
          expected: ['Përshëndetje! Unë quhem Lúcia dhe jam nga Sao Paulo.', 'quhem', 'jam nga', 'përshëndetje'],
          hint: 'Devolva o cumprimento (“Përshëndetje!”), diga seu nome com “Unë quhem…” e a cidade com “Jam nga…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Unë quhem…”, cidade com “Jam nga…” e uma despedida.',
      },
    ],
  },
  {
    id: 'sq-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familja dhe shtëpia',
    emoji: '👪',
    card: {
      id: 'sq-c2',
      title: 'Dois dialetos, uma língua escrita',
      emoji: '🧭',
      history:
        'Até o século XX, o albanês não tinha uma ortografia unificada: havia dois grandes dialetos, o guego (gheg) ao norte do rio Shkumbin e o tosco (tosk) ao sul, cada um com a sua tradição escrita própria. O Congresso de Ortografia de Tirana, em 1972, sob o lema “Uma Nação, Uma Língua”, fixou um padrão escrito único baseado sobretudo no tosk do norte, incorporando só alguns traços do gheg. Foi a primeira vez, em toda a história da língua, que o albanês teve um único registro escrito — o mesmo que o app ensina aqui. O gheg continua vivo na fala, sobretudo em Kosovo e no norte da Albânia.',
      culture_tip:
        'A “besa” é um conceito central na cultura albanesa tradicional: uma palavra de honra que, uma vez dada, é inquebrável. A hospitalidade também é levada a sério: receber uma visita com comida e bebida de boa vontade é quase uma obrigação moral.',
      grammar_why:
        'Para negar um verbo, basta pôr “nuk” (ou, na fala, “s’”) antes dele, em qualquer pessoa e tempo: “Nuk di” (não sei), “Ne nuk flasim shqip” (nós não falamos albanês). É uma das partes mais simples da gramática albanesa.',
      grammar_examples: [
        ['Nuk e di.', 'Não sei.'],
        ['Unë nuk kuptoj.', 'Eu não entendo.'],
        ['Qumështi është i bardhë.', 'O leite é branco.'],
        ['Kam një motër dhe një vëlla.', 'Tenho uma irmã e um irmão.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sq-u2-l1',
        title: 'Familja ime',
        kind: 'licao',
        words: ['familje', 'nënë', 'baba', 'vëlla', 'motër', 'kam'],
        cloze: [
          { sentence: 'Kam një ___.', answer: 'motër', options: ['motër', 'baba', 'familje'], translation: 'Tenho uma irmã.' },
          { sentence: '___ është nga Shkodra.', answer: 'Baba', options: ['Baba', 'Motër', 'Familje'], translation: 'Papai é de Shkodra.' },
          { sentence: 'Kam një ___ të madhe.', answer: 'familje', options: ['familje', 'motër', 'shtëpi'], translation: 'Tenho uma família grande.' },
        ],
        voice: {
          bot: 'A ke vëllezër apo motra?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Po, kam një vëlla dhe një motër.', 'kam', 'vëlla', 'motër'],
          hint: 'Responda com “Po, kam…” ou “Jo, nuk kam…”.',
        },
        communityPrompt: 'Descreva sua família em albanês: quantos irmãos (vëllezër) e irmãs (motra) você tem, usando “kam”.',
      },
      {
        id: 'sq-u2-l2',
        title: 'Në shtëpi',
        kind: 'licao',
        words: ['shtëpi', 'ujë', 'bukë', 'djathë', 'kafe', 'pi'],
        cloze: [
          { sentence: 'Unë kam një ___ të vogël.', answer: 'shtëpi', options: ['shtëpi', 'kafe', 'bukë'], translation: 'Eu tenho uma casa pequena.' },
          { sentence: 'Unë ___ ujë.', answer: 'pi', options: ['pi', 'ha', 'jam'], translation: 'Eu bebo água.' },
          { sentence: 'Ha bukë me ___.', answer: 'djathë', options: ['djathë', 'ujë', 'kafe'], translation: 'Como pão com queijo.' },
        ],
        voice: {
          bot: 'Çfarë ha ti?',
          botTranslation: 'O que você come?',
          expected: ['Ha bukë me djathë.', 'ha', 'bukë', 'djathë'],
          hint: 'Diga o que come com “Ha…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Unë ha…” e “Unë pi…”.',
      },
      {
        id: 'sq-u2-l3',
        title: 'Testi: familja dhe shtëpia',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'A ke vëllezër apo motra? Çfarë ha në mëngjes?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come de manhã?',
          expected: ['Kam një motër dhe ha bukë me djathë.', 'kam', 'ha'],
          hint: 'Diga quem você tem na família com “kam…” e o que come com “ha…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e sua casa, usando “kam”, “jam” e “është”.',
      },
    ],
  },
];
