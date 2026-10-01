import type { UnitSeed } from '../types';

/**
 * Trilha do siciliano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SCN: UnitSeed[] = [
  {
    id: 'scn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bongiornu! Li primi passi',
    emoji: '👋',
    card: {
      id: 'scn-c1',
      title: 'A língua da Scuola Siciliana',
      emoji: '🌋',
      history:
        'O siciliano (sicilianu) é falado na Sicília e em partes do sul da Calábria. É uma língua românica própria, não um dialeto do italiano: a UNESCO o lista como língua distinta, e ele tem a tradição literária escrita mais antiga entre as línguas itálico-românicas depois do toscano — a Scuola Siciliana, na corte do imperador Frederico II, no século XIII, que influenciou até Dante. Não tem uma norma ortográfica oficial única; aqui se usa a convenção tradicional, com o dígrafo “ḍḍ” para um som retroflexo que o italiano não tem.',
      culture_tip:
        '“Bongiornu” serve de manhã e começo da tarde; “bona sira” quando o dia já virou noite. Para agradecer se diz “grazzi”, e para se despedir, “addiu” (também usado informalmente, sem o peso de “adeus” em português). Com desconhecidos e em situações formais usa-se “vuàtri” em vez de “tu”.',
      grammar_why:
        'O siciliano diz o nome com “mi chiamu”, como o italiano “mi chiamo”: “Mi chiamu Ana”, “Comu ti chiami?”. O verbo ser/estar é “èssiri”: “iu sugnu”, “tu si”, “iddu è”.',
      grammar_examples: [
        ['Bongiornu! Mi chiamu Ana.', 'Bom dia! Eu me chamo Ana.'],
        ['Comu ti chiami?', 'Como você se chama?'],
        ['Di unni si?', 'De onde você é?'],
        ['Bonu, grazzi!', 'Bem, obrigado!'],
      ],
      character_guide: [
        ['ḍḍ (ou dd)', 'som retroflexo, sem equivalente no italiano, vindo do -LL- latino', 'beḍḍu (bonito), cavaḍḍu (cavalo)'],
        ['j', 'como o “i” de “pai” no início de sílaba, quase um “i” consoante', 'jiri (ir), joviri (quinta-feira)'],
        ['ç/z', 'como “ts” ou “dz”', 'chiazza (praça)'],
        ['u final', 'onde o italiano teria “o”', 'nomu (nome), amicu (amigo)'],
        ['i final', 'onde o italiano teria “e”', 'pani (pão), cani (cachorro)'],
      ],
    },
    lessons: [
      {
        id: 'scn-u1-l1',
        title: 'Bongiornu, grazzi, addiu!',
        kind: 'licao',
        words: ['bongiornu', 'bona sira', 'bona notti', 'addiu', 'grazzi', 'pi favuri'],
        cloze: [
          { sentence: '___, Anna! Comu va?', answer: 'Bongiornu', options: ['Bongiornu', 'Addiu', 'Grazzi'], translation: 'Bom dia, Ana! Como vai?' },
          { sentence: 'È notti: ___!', answer: 'bona notti', options: ['bona notti', 'bongiornu', 'grazzi'], translation: 'É noite: boa noite!' },
          { sentence: 'Un cafè, ___.', answer: 'pi favuri', options: ['pi favuri', 'addiu', 'bongiornu'], translation: 'Um café, por favor.' },
        ],
        voice: {
          bot: 'Bongiornu! Comu va?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Bonu, grazzi! E tu?', 'bonu', 'grazzi'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bonu, grazzi! E tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em siciliano: um de dia (“Bongiornu…”), um à noite (“Bona sira…”) e uma despedida (“Addiu”).',
      },
      {
        id: 'scn-u1-l2',
        title: 'Iu, tu, iddu, idda',
        kind: 'licao',
        words: ['iu', 'tu', 'iddu', 'idda', 'mi chiamu', 'nomu'],
        cloze: [
          { sentence: '___ mi chiamu Sara.', answer: 'Iu', options: ['Iu', 'Tu', 'Iddu'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Comu ti ___?', answer: 'chiami', options: ['chiami', 'è', 'havi'], translation: 'Como você se chama?' },
          { sentence: '___ è di Catania.', answer: 'Iddu', options: ['Iddu', 'Iu', 'Tu'], translation: 'Ele é de Catânia.' },
        ],
        voice: {
          bot: 'Bongiornu! Comu ti chiami?',
          botTranslation: 'Bom dia! Como você se chama?',
          expected: ['Mi chiamu Ana. E tu?', 'mi chiamu', 'e tu'],
          hint: 'Diga o seu nome com “Mi chiamu…” e devolva a pergunta com “E tu?”.',
        },
        communityPrompt: 'Apresente-se em siciliano: diga o seu nome com “Mi chiamu…” e pergunte o nome de alguém com “Comu ti chiami?”.',
      },
      {
        id: 'scn-u1-l3',
        title: 'Pruva: li primi passi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bongiornu! Mi chiamu Turi. Comu ti chiami e di unni si?',
          botTranslation: 'Bom dia! Eu me chamo Turi. Como você se chama e de onde você é?',
          expected: ['Bongiornu! Mi chiamu Lucia e sugnu di Sampaulu.', 'mi chiamu', 'sugnu di', 'bongiornu'],
          hint: 'Devolva o cumprimento (“Bongiornu!”), diga o nome com “Mi chiamu…” e a cidade com “Sugnu di…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mi chiamu…”, cidade com “Sugnu di…” e uma despedida.',
      },
    ],
  },
  {
    id: 'scn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiglia e la casa',
    emoji: '👪',
    card: {
      id: 'scn-c2',
      title: 'U, a, i e o verbo aviri',
      emoji: '🧭',
      history:
        'O siciliano guardou palavras do grego e do árabe de épocas em que a ilha foi governada por bizantinos e depois por emires muçulmanos (séculos IX a XI), antes dos normandos. “Giuggiulena” (gergelim) e muitos nomes de doces, como a “cassata”, vêm dessa camada árabe; outras palavras do dia a dia vêm do grego antigo, falado na Sicília desde a colonização helênica.',
      culture_tip:
        'A mesa sempre tem lugar de honra na cultura siciliana: pani e caciu (pão e queijo) são a base simples do dia a dia, enquanto doces como a cassata e o cannolo marcam as festas. Oferecer comida é um jeito comum de receber bem alguém.',
      grammar_why:
        'O artigo definido é “u” (masculino) e “a” (feminino), no plural “i” para os dois: “u pani” (o pão), “a casa” (a casa), “i casi” (as casas). O verbo ter é “aviri”: “haju”, “hai”, “havi”.',
      grammar_examples: [
        ['A me famiglia è granni.', 'A minha família é grande.'],
        ['Haju un frati e na soru.', 'Tenho um irmão e uma irmã.'],
        ['U latti è jancu.', 'O leite é branco.'],
        ['Non sacciu.', 'Eu não sei.'],
      ],
      character_guide: [
        ['u / a / i', 'artigo definido: masculino, feminino, plural (os dois gêneros)', 'u pani, a casa, i casi'],
        ['n’ / l’', 'u/a perdem a vogal antes de palavra que começa com vogal', 'n’acqua (a água), l’amicu (o amigo)'],
      ],
    },
    lessons: [
      {
        id: 'scn-u2-l1',
        title: 'A me famiglia',
        kind: 'licao',
        words: ['famiglia', 'matri', 'patri', 'frati', 'soru', 'aviri'],
        cloze: [
          { sentence: 'A me ___ si chiama Rosa.', answer: 'matri', options: ['matri', 'patri', 'frati'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Iu ___ un frati.', answer: 'haju', options: ['haju', 'sugnu', 'vaju'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Me ___ è di Catania.', answer: 'patri', options: ['patri', 'soru', 'matri'], translation: 'O meu pai é de Catânia.' },
        ],
        voice: {
          bot: 'Hai frati o suruzzi?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, haju un frati e na soru.', 'haju', 'frati', 'soru'],
          hint: 'Responda com “Sì, haju…” ou “No, non haju frati”.',
        },
        communityPrompt: 'Descreva a sua família em siciliano: quantos irmãos (frati) e irmãs (suruzzi) você tem e como se chamam os seus pais.',
      },
      {
        id: 'scn-u2-l2',
        title: 'A casa',
        kind: 'licao',
        words: ['casa', 'acqua', 'pani', 'latti', 'caciu', 'vulirisi beni'],
        cloze: [
          { sentence: 'A me ___ è nica.', answer: 'casa', options: ['casa', 'acqua', 'pani'], translation: 'A minha casa é pequena.' },
          { sentence: 'Iu viu ___.', answer: 'acqua', options: ['acqua', 'pani', 'caciu'], translation: 'Eu bebo água.' },
          { sentence: 'Iu manciu pani e ___.', answer: 'caciu', options: ['caciu', 'acqua', 'latti'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Chi manci?',
          botTranslation: 'O que você come?',
          expected: ['Iu manciu pani e caciu.', 'manciu', 'pani', 'caciu'],
          hint: 'Diga o que come com “Iu manciu…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Iu manciu…” e “Iu viu…”.',
      },
      {
        id: 'scn-u2-l3',
        title: 'Pruva: famiglia e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cuntami di la to famiglia: hai frati o suruzzi?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Sì, haju na soru. Idda si chiama Maria.', 'haju', 'si chiama'],
          hint: 'Diga quantos irmãos tem (“haju…”) e o nome deles (“iddu/idda si chiama…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “haju”, “si chiama” e “è”.',
      },
    ],
  },
];
