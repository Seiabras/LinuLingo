import type { UnitSeed } from '../types';

/**
 * Trilha do vêneto: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_VEC: UnitSeed[] = [
  {
    id: 'vec-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondì! I primi passi',
    emoji: '👋',
    card: {
      id: 'vec-c1',
      title: 'A língua da República de Veneza',
      emoji: '🦁',
      history:
        'O vêneto é uma língua românica do nordeste da Itália, falada principalmente nas regiões do Vêneto, Trentino e Friul-Venezia Giulia. Foi a língua de prestígio da República de Veneza (697–1797), um dos maiores poderes comerciais e marítimos da Idade Média e do Renascimento, e por isso deixou palavras em vários idiomas do Mediterrâneo — até o português tem “gôndola” e “arsenal”, vindos do vêneto. Hoje a Unesco classifica o vêneto como uma língua vulnerável: a maioria dos falantes também fala italiano padrão no dia a dia, e a transmissão às crianças vem caindo. Não existe uma única ortografia oficial; aqui se usa a Grafia Veneta Unitaria (GVU), de 1995, a mais adotada em publicações recentes.',
      culture_tip:
        '“Ciao” (de onde vem o “ciao” usado em tantas línguas do mundo) nasceu justamente do vêneto, de “s-ciavo”, “escravo” — um jeito antigo e exagerado de dizer “seu servo” entre conhecidos. Hoje serve tanto para “oi” quanto para “tchau”. Em situações mais formais, prefira “bondì” e “bonasera”.',
      grammar_why:
        'O vêneto diz o nome com um verbo de posse-reflexivo, “ciamarse”: “mi me ciamo Ana” é, palavra por palavra, algo como “eu me chamo Ana”. E um único verbo, “essar”, cobre o nosso ser e o nosso estar: “mi son de Venesia” (sou de Veneza) e “mi son ben” (estou bem).',
      grammar_examples: [
        ['Bondì! Mi me ciamo Ana.', 'Oi! Eu me chamo Ana.'],
        ['Come te ciamito?', 'Como você se chama?'],
        ['Elo xe de Verona, ela xe de Padova.', 'Ele é de Verona, ela é de Pádua.'],
        ['Ben, grasie. E ti?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['x', 'som de “z” de “zero” (não existe em português)', 'xe (é/são), caxa (casa)'],
        ['ƚ', 'um “l” bem fraco, que em muitas falas quase não se ouve', 'beƚo (bonito, cognato de “belo”)'],
        ['s / ss', 'o “s” entre vogais é sempre surdo, como em “caça”', 'cossa (o que), rosso (vermelho)'],
        ['consoantes simples', 'o vêneto não dobra consoantes como o italiano (bello → beƚo)', 'formajo (queijo, cf. it. formaggio)'],
        ['é / è', 'o acento marca a vogal aberta ou fechada', 'cafè, mèrcore'],
      ],
    },
    lessons: [
      {
        id: 'vec-u1-l1',
        title: 'Bondì, grasie, ciao!',
        kind: 'licao',
        words: ['bondì', 'bonasera', 'bonanote', 'ciao', 'grasie', 'par piaser'],
        cloze: [
          { sentence: '___, Ana! Come stu?', answer: 'Bondì', options: ['Bondì', 'Ciao', 'Grasie'], translation: 'Bom dia, Ana! Como vai?' },
          { sentence: 'Xe note: ___!', answer: 'bonanote', options: ['bonanote', 'bondì', 'grasie'], translation: 'É noite: boa noite!' },
          { sentence: '___ mile!', answer: 'Grasie', options: ['Grasie', 'Ciao', 'Bondì'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Bondì! Come stu?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Ben, grasie! E ti?', 'ben', 'grasie'],
          hint: 'Responda que vai bem e devolva a pergunta: “Ben, grasie! E ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em vêneto: um de dia (“Bondì…”), um à noite (“Bonasera…”) e uma despedida (“Ciao”).',
      },
      {
        id: 'vec-u1-l2',
        title: 'Mi, ti, elo, ela',
        kind: 'licao',
        words: ['mi', 'ti', 'elo', 'ela', 'ciamarse', 'nome'],
        cloze: [
          { sentence: '___ son de Rio.', answer: 'Mi', options: ['Mi', 'Ti', 'Elo'], translation: 'Eu sou do Rio.' },
          { sentence: 'Come te ___?', answer: 'ciamito', options: ['ciamito', 'sito', 'ghèto'], translation: 'Como você se chama?' },
          { sentence: '___ xe de Venesia.', answer: 'Elo', options: ['Elo', 'Mi', 'Ti'], translation: 'Ele é de Veneza.' },
        ],
        voice: {
          bot: 'Bondì! Come te ciamito?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Mi me ciamo Ana. E ti?', 'mi me ciamo', 'e ti'],
          hint: 'Diga o seu nome com “Mi me ciamo…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em vêneto: diga o seu nome com “Mi me ciamo…” e pergunte o nome de alguém com “Come te ciamito?”.',
      },
      {
        id: 'vec-u1-l3',
        title: 'Esame: i primi passi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bondì! Mi me ciamo Marco. Come te ciamito e da dove sito?',
          botTranslation: 'Oi! Eu me chamo Marco. Como você se chama e de onde você é?',
          expected: ['Bondì! Mi me ciamo Lucia e son de San Paulo.', 'mi me ciamo', 'son de', 'bondì'],
          hint: 'Devolva o cumprimento (“Bondì!”), diga o nome com “Mi me ciamo…” e a cidade com “Son de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mi me ciamo…”, cidade com “Son de…” e uma despedida.',
      },
    ],
  },
  {
    id: 'vec-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La fameja e la caxa',
    emoji: '👪',
    card: {
      id: 'vec-c2',
      title: 'El, la e o verbo gaver',
      emoji: '🧭',
      history:
        'O vêneto espalhou falantes para fora da Itália: entre o fim do século XIX e o início do XX, centenas de milhares de vênetos emigraram para o Brasil, fugindo da pobreza no campo. No Rio Grande do Sul e em Santa Catarina, os descendentes desenvolveram o talian (ou vêneto brasileiro), uma variedade própria que hoje é reconhecida como patrimônio cultural em vários municípios — é parente, mas não é exatamente igual ao vêneto padrão deste pacote.',
      culture_tip:
        'O pão (pan) e o queijo (formajo) aparecem em quase toda refeição simples vêneta, junto com o vinho (vin) da região — o Vêneto é um dos maiores produtores de vinho da Itália, de onde vem, por exemplo, o prosecco.',
      grammar_why:
        'O artigo definido é “el” (masculino) e “la” (feminino), no plural “i” e “łe” (ou “le”); o indefinido é “un” e “na”. O possessivo vem antes do nome, com artigo: “el me papà” (o meu pai), “la me mama” (a minha mãe). O verbo “gaver” (ter) também forma o pretérito perfeito, como o “avere” italiano ou o “haver” arcaico do português.',
      grammar_examples: [
        ['La me fameja xe granda.', 'A minha família é grande.'],
        ['Mi go un fradeo e na sorela.', 'Tenho um irmão e uma irmã.'],
        ['El late xe bianco.', 'O leite é branco.'],
        ['No so.', 'Eu não sei.'],
      ],
      character_guide: [
        ['el / la', 'artigo definido masculino/feminino', 'el can (o cachorro), la caxa (a casa)'],
        ['i / łe', 'artigo definido plural masculino/feminino', 'i fioi (os filhos), łe sorele (as irmãs)'],
        ['no', 'nega o verbo, sozinho, sem segunda palavra (diferente do francês)', 'no so (não sei), no go tempo (não tenho tempo)'],
      ],
    },
    lessons: [
      {
        id: 'vec-u2-l1',
        title: 'La me fameja',
        kind: 'licao',
        words: ['fameja', 'mama', 'papà', 'fradeo', 'sorela', 'gaver'],
        cloze: [
          { sentence: 'Me ___ se ciama Rosa.', answer: 'mama', options: ['mama', 'papà', 'fradeo'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Mi ___ un fradeo.', answer: 'go', options: ['go', 'son', 'vago'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Me ___ xe de Verona.', answer: 'papà', options: ['papà', 'sorela', 'mama'], translation: 'O meu pai é de Verona.' },
        ],
        voice: {
          bot: 'Gheto fradei o sorele?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, go un fradeo e na sorela.', 'go', 'fradeo', 'sorela'],
          hint: 'Responda com “Sì, go…” ou “No, no go gnente fradei”.',
        },
        communityPrompt: 'Descreva a sua família em vêneto: quantos irmãos (fradei) e irmãs (sorele) você tem e como se chamam os seus pais.',
      },
      {
        id: 'vec-u2-l2',
        title: 'In caxa',
        kind: 'licao',
        words: ['caxa', 'acqua', 'pan', 'late', 'formajo', 'magnar'],
        cloze: [
          { sentence: 'La me ___ xe picola.', answer: 'caxa', options: ['caxa', 'acqua', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Mi bevo ___.', answer: 'acqua', options: ['acqua', 'pan', 'formajo'], translation: 'Eu bebo água.' },
          { sentence: 'Mi magno pan e ___.', answer: 'formajo', options: ['formajo', 'acqua', 'late'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Cossa magnito?',
          botTranslation: 'O que você come?',
          expected: ['Mi magno pan e formajo.', 'mi magno', 'pan', 'formajo'],
          hint: 'Diga o que come com “Mi magno…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Mi magno…” e “Mi bevo…”.',
      },
      {
        id: 'vec-u2-l3',
        title: 'Esame: fameja e caxa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Contame de la to fameja: gheto fradei o sorele?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Sì, go na sorela. Ela se ciama Maria.', 'go', 'se ciama'],
          hint: 'Diga quantos irmãos tem (“go…”) e o nome deles (“elo/ela se ciama…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “go”, “se ciama” e “xe”.',
      },
    ],
  },
];
