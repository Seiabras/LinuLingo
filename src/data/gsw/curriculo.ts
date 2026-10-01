import type { UnitSeed } from '../types';

/**
 * Trilha do suíço-alemão: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_GSW: UnitSeed[] = [
  {
    id: 'gsw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Grüezi! Die earschte Schritt',
    emoji: '👋',
    card: {
      id: 'gsw-c1',
      title: 'Uma língua que quase não se escreve',
      emoji: '🏔️',
      history:
        'O suíço-alemão (Schwiizertüütsch) não é uma língua só: é o nome que se dá ao conjunto de dialetos alemânicos falados na Suíça de língua alemã, que mudam de cidade para cidade — o de Zurique (Züritüütsch, ensinado aqui), o de Berna, o de Basileia e outros soam bem diferentes entre si. O alemão padrão continua sendo a língua escrita oficial (jornais, livros, documentos); o dialeto é a língua do dia a dia, falada por todo mundo, de qualquer classe social, em qualquer situação — até na televisão e no parlamento cantonal. Como quase não se escreve, não existe uma ortografia oficial: cada pessoa escreve um pouco do seu jeito quando manda uma mensagem. Aqui se usa uma grafia informal comum (chamada “Dieth”), só para o dialeto de Zurique.',
      culture_tip:
        '“Grüezi” é o cumprimento formal, usado com desconhecidos; “Hoi” é informal, entre amigos. Para agradecer, os suíços alemães costumam usar “Merci”, emprestado do francês — um lembrete de que a Suíça tem quatro línguas oficiais (alemão, francês, italiano e romanche) e elas se misturam no dia a dia.',
      grammar_why:
        'O suíço-alemão diz o nome com “heisse” (chamar-se): “Ich heisse Linu”, “Wie heisch’ du?”. E o verbo “sii” (ser/estar) muda bastante do alemão padrão: “ich bi”, “du bisch”, “er/sie isch” — sem o “bin”/“bist”/“ist” que quem já estudou alemão vai esperar.',
      grammar_examples: [
        ['Grüezi! Ich heisse Anna.', 'Olá! Eu me chamo Anna.'],
        ['Wie heisch’ du?', 'Como você se chama?'],
        ['Ich bi vo Brasilie.', 'Eu sou do Brasil.'],
        ['Guet, merci. Und du?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ch', 'som gutural, raspado no fundo da garganta (não existe em português)', 'Chind (criança), Chäs (queijo)'],
        ['üe', 'ditongo próprio, “u” deslizando para “e”', 'Brüeder (irmão), Mueter (mãe)'],
        ['ü / ö', 'vogais arredondadas, como no alemão padrão', 'grüen (verde), schöön (bonito)'],
        ['sch', 'como o “x” de “xícara”', 'Schwöschter (irmã), Fisch (peixe)'],
        ['-e final', 'quase sempre mudo ou muito fraco (ao contrário do alemão padrão)', 'Chatz (gato, de “Katze”)'],
      ],
    },
    lessons: [
      {
        id: 'gsw-u1-l1',
        title: 'Grüezi, merci, adie!',
        kind: 'licao',
        words: ['grüezi', 'hoi', 'guete morge', 'guete abig', 'uf widerluege', 'merci'],
        cloze: [
          { sentence: '___, Anna! Wie gaht’s?', answer: 'Grüezi', options: ['Grüezi', 'Adie', 'Merci'], translation: 'Olá, Anna! Como vai?' },
          { sentence: 'Es isch spaat: ___!', answer: 'guete abig', options: ['guete abig', 'guete morge', 'merci'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ vilmal!', answer: 'Merci', options: ['Merci', 'Grüezi', 'Uf Widerluege'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Grüezi! Wie gaht’s?',
          botTranslation: 'Olá! Como vai?',
          expected: ['Guet, merci! Und du?', 'guet', 'merci'],
          hint: 'Responda que vai bem e devolva a pergunta: “Guet, merci! Und du?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em suíço-alemão: um de manhã (“Guete Morge…”), um à noite (“Guete Abig…”) e uma despedida (“Uf Widerluege”).',
      },
      {
        id: 'gsw-u1-l2',
        title: 'Ich, du, er, sie',
        kind: 'licao',
        words: ['ich', 'du', 'er', 'sie', 'heisse', 'name'],
        cloze: [
          { sentence: '___ heisse Sara.', answer: 'Ich', options: ['Ich', 'Du', 'Er'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Wie ___ du?', answer: 'heisch’', options: ['heisch’', 'isch', 'häsch'], translation: 'Como você se chama?' },
          { sentence: '___ isch vo Züri.', answer: 'Er', options: ['Er', 'Ich', 'Du'], translation: 'Ele é de Zurique.' },
        ],
        voice: {
          bot: 'Grüezi! Wie heisch’ du?',
          botTranslation: 'Olá! Como você se chama?',
          expected: ['Ich heisse Ana. Und du?', 'ich heisse', 'und du'],
          hint: 'Diga o seu nome com “Ich heisse…” e devolva a pergunta com “Und du?”.',
        },
        communityPrompt: 'Apresente-se em suíço-alemão: diga o seu nome com “Ich heisse…” e pergunte o nome de alguém com “Wie heisch’ du?”.',
      },
      {
        id: 'gsw-u1-l3',
        title: 'Prüefig: die earschte Schritt',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Grüezi! Ich heisse Gian. Wie heisch’ du, und vo wo bisch du?',
          botTranslation: 'Olá! Eu me chamo Gian. Como você se chama, e de onde você é?',
          expected: ['Grüezi! Ich heisse Lucia und ich bi vo São Paulo.', 'ich heisse', 'ich bi vo', 'grüezi'],
          hint: 'Devolva o cumprimento (“Grüezi!”), diga o nome com “Ich heisse…” e a cidade com “Ich bi vo…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ich heisse…”, cidade com “Ich bi vo…” e uma despedida.',
      },
    ],
  },
  {
    id: 'gsw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'D’Familie und s’Huus',
    emoji: '👪',
    card: {
      id: 'gsw-c2',
      title: 'O verbo “ha” e a família',
      emoji: '🧭',
      history:
        'A fronteira entre os dialetos suíço-alemães e o alemão padrão da Alemanha é chamada de “Röstigraben” só quando se fala da fronteira com o francês — para o alemão padrão, o que separa de verdade é a diglossia: suíços usam o dialeto para falar e o alemão padrão (chamado por eles de “Schriftdeutsch”, alemão escrito) para escrever. Essa divisão é tão forte que crianças suíças aprendem o alemão padrão como se fosse quase uma segunda língua na escola, mesmo já falando um dialeto alemânico em casa.',
      culture_tip:
        'A família tem papel central na vida suíça, e perguntar pelos “Gschwüschterti” (irmãos, no plural) é comum ao conhecer alguém. Os suíços alemães costumam ser mais reservados no início, mas fazer um esforço para falar o dialeto (em vez de só alemão padrão) costuma ser muito bem recebido.',
      grammar_why:
        'O verbo “ha” (ter) é irregular e bem diferente do “haben” do alemão padrão: “ich ha”, “du häsch”, “er/sie hät”, “mir händ”. Ele serve tanto para posse (“ich ha en Brüeder”) quanto para gostar, com “gärn ha”: “ich ha Kafi gärn” é, palavra por palavra, “eu tenho café com gosto”.',
      grammar_examples: [
        ['Ich ha en Brüeder und e Schwöschter.', 'Tenho um irmão e uma irmã.'],
        ['D’Familie isch gross.', 'A família é grande.'],
        ['Ich ha Chäs gärn.', 'Eu gosto de queijo.'],
        ['Ich weiss es nöd.', 'Eu não sei.'],
      ],
      character_guide: [
        ['nöd', 'a negação suíço-alemã (o alemão padrão usa “nicht”)', 'Ich weiss es nöd.'],
        ['s’ / d’', 'formas reduzidas do artigo antes de substantivo (das → s’, die → d’)', 's’Chind, d’Chatz, d’Familie'],
      ],
    },
    lessons: [
      {
        id: 'gsw-u2-l1',
        title: 'D’Familie',
        kind: 'licao',
        words: ['familie', 'mueter', 'vater', 'brüeder', 'schwöschter', 'ha'],
        cloze: [
          { sentence: 'Mini ___ heisst Rosa.', answer: 'Mueter', options: ['Mueter', 'Vater', 'Brüeder'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ich ___ en Brüeder.', answer: 'ha', options: ['ha', 'bi', 'gah'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Min ___ isch vo Bärn.', answer: 'Vater', options: ['Vater', 'Schwöschter', 'Mueter'], translation: 'O meu pai é de Berna.' },
        ],
        voice: {
          bot: 'Häsch du Gschwüschterti?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Ja, ich ha en Brüeder und e Schwöschter.', 'ich ha', 'brüeder', 'schwöschter'],
          hint: 'Responda com “Ja, ich ha…” e diga quantos irmãos (Brüeder) e irmãs (Schwöschter) você tem.',
        },
        communityPrompt: 'Descreva a sua família em suíço-alemão: quantos irmãos (Brüeder) e irmãs (Schwöschter) você tem, usando “ich ha”.',
      },
      {
        id: 'gsw-u2-l2',
        title: 'Dihei',
        kind: 'licao',
        words: ['huus', 'wasser', 'brot', 'chäs', 'gärn ha', 'chind'],
        cloze: [
          { sentence: 'Mis ___ isch chli.', answer: 'Huus', options: ['Huus', 'Wasser', 'Chäs'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ich trink ___.', answer: 'Wasser', options: ['Wasser', 'Brot', 'Chäs'], translation: 'Eu bebo água.' },
          { sentence: 'Ich ha Chäs ___.', answer: 'gärn', options: ['gärn', 'nöd', 'vilmal'], translation: 'Eu gosto de queijo.' },
        ],
        voice: {
          bot: 'Was ässisch’ du gärn?',
          botTranslation: 'O que você gosta de comer?',
          expected: ['Ich ha Brot und Chäs gärn.', 'ich ha', 'gärn', 'brot'],
          hint: 'Diga o que gosta de comer com “Ich ha… gärn”.',
        },
        communityPrompt: 'Escreva o que você gosta de comer e beber: “Ich ha… gärn” e “Ich trink…”.',
      },
      {
        id: 'gsw-u2-l3',
        title: 'Prüefig: d’Familie und s’Huus',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Häsch du Gschwüschterti? Was ässisch’ du gärn?',
          botTranslation: 'Você tem irmãos? O que você gosta de comer?',
          expected: ['Ich ha e Schwöschter und ich ha Chäs gärn.', 'ich ha', 'gärn'],
          hint: 'Diga quem você tem na família com “ich ha…” e o que gosta de comer com “ich ha… gärn”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ich ha”, “isch” e “gärn”.',
      },
    ],
  },
];
