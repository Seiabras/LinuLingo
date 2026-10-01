import type { UnitSeed } from '../types';

/**
 * Trilha do valão: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_WA: UnitSeed[] = [
  {
    id: 'wa-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondjoû! Les prumîs pas',
    emoji: '👋',
    card: {
      id: 'wa-c1',
      title: 'Uma língua d’oïl bem diferente do francês',
      emoji: '⚒️',
      history:
        'O valão (walon) é falado na Valônia, o sul da Bélgica, e vem do latim como o francês — mas é uma língua d’oïl à parte, não um dialeto francês: separou-se cedo e guardou sons e palavras próprios. Durante séculos ficou só falado, numa região de minas e indústria pesada; a escrita cresceu no teatro e na canção popular do século XIX. Tem quatro grandes variedades (de Liège, Namur, Charleroi e do oeste valão), unidas desde os anos 1990 por uma grafia comum, a Rfondou walon, usada aqui. Hoje a Unesco considera o valão seriamente ameaçado: a maioria dos falantes é idosa, mas há um movimento de revitalização com rádios, quadrinhos e aulas.',
      culture_tip:
        '“Bondjoû” serve do começo ao fim do dia. Uma marca bem valona é repetir o pronome no fim da frase para dar ênfase: “Dji n’ sai nén, mi” (eu não sei, eu não) ou “Cmint esti-ve, vos?” (como vai o(a) senhor(a)?). Para quem já estuda francês, o valão soa ao mesmo tempo familiar e estranho.',
      grammar_why:
        'O valão diz o nome com “si lomer” (“se chamar”): “Dji m’ lome Ana”, “Cmint v’ lomez-ve?”. E tem um só verbo, “esse”, para o nosso ser e estar: “dji so di Sao Polo” (sou de São Paulo) e “dji so bén” (estou bem).',
      grammar_examples: [
        ['Bondjoû! Dji m’ lome Ana.', 'Oi! Eu me chamo Ana.'],
        ['Cmint v’ lomez-ve?', 'Como você se chama?'],
        ['I est di Nameur, ele est di Lidje.', 'Ele é de Namur, ela é de Liège.'],
        ['Bén, merci. Et vos?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['å', 'um “a” mais fechado, quase um “o” curto', 'måjhon (casa), å r’vey (até logo)'],
        ['dj', 'como o “dj” de “adjetivo”, nunca separado', 'dji (eu), djåser (falar)'],
        ['tch', 'como o “tch” de “tchau”', 'tchén (cachorro), tchet (gato)'],
        ['xh', 'um som só do valão, entre “h” aspirado e “sh”; não aparece nas palavras deste bloco, mas é a letra mais famosa da língua', 'ex.: mwaxhî (lavar roupa)'],
        ['j final mudo', 'o “i” e o apóstrofo marcam elisão, comum na fala rápida', 'dj’ a (eu tenho), s’i vs plait (por favor)'],
      ],
    },
    lessons: [
      {
        id: 'wa-u1-l1',
        title: 'Bondjoû, merci, å r’vey!',
        kind: 'licao',
        words: ['bondjoû', 'bon vesprêye', 'bone nute', 'å r’vey', 'merci', 's’i vs plait'],
        cloze: [
          { sentence: '___, Anna! Cmint va?', answer: 'Bondjoû', options: ['Bondjoû', 'Å r’vey', 'Merci'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'C’ est l’ nute: ___!', answer: 'bone nute', options: ['bone nute', 'bon vesprêye', 'merci'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ fwärt!', answer: 'Merci', options: ['Merci', 'Bondjoû', 'Å r’vey'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Bondjoû! Cmint va?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bén, merci! Et vos?', 'bén', 'merci'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bén, merci! Et vos?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em valão: um de dia (“Bondjoû…”), um à noite (“Bon vesprêye…”) e uma despedida (“Å r’vey”).',
      },
      {
        id: 'wa-u1-l2',
        title: 'Dji, ti, i, ele',
        kind: 'licao',
        words: ['dji', 'ti', 'i', 'ele', 'si lomer', 'no'],
        cloze: [
          { sentence: '___ m’ lome Sara.', answer: 'Dji', options: ['Dji', 'Ti', 'I'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Cmint v’ ___-ve?', answer: 'lomez', options: ['lomez', 'esse', 'sai'], translation: 'Como você se chama?' },
          { sentence: '___ est di Nameur.', answer: 'I', options: ['I', 'Dji', 'Ti'], translation: 'Ele é de Namur.' },
        ],
        voice: {
          bot: 'Bondjoû! Cmint v’ lomez-ve?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Dji m’ lome Ana. Et vos?', 'dji m’ lome', 'et vos'],
          hint: 'Diga o seu nome com “Dji m’ lome…” e devolva a pergunta com “Et vos?”.',
        },
        communityPrompt: 'Apresente-se em valão: diga o seu nome com “Dji m’ lome…” e pergunte o nome de alguém com “Cmint v’ lomez-ve?”.',
      },
      {
        id: 'wa-u1-l3',
        title: 'Saye: les prumîs pas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bondjoû! Dji m’ lome Djan. Cmint v’ lomez-ve, et di wice esti-ve?',
          botTranslation: 'Oi! Eu me chamo Jean. Como você se chama, e de onde você é?',
          expected: ['Bondjoû! Dji m’ lome Lucia eyet dji so di Sao Polo.', 'dji m’ lome', 'dji so di', 'bondjoû'],
          hint: 'Devolva o cumprimento (“Bondjoû!”), diga o nome com “Dji m’ lome…” e a cidade com “Dji so di…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Dji m’ lome…”, cidade com “Dji so di…” e uma despedida.',
      },
    ],
  },
  {
    id: 'wa-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Li famile eyet l’ måjhon',
    emoji: '👪',
    card: {
      id: 'wa-c2',
      title: 'Palavras repetidas e cognatos do francês',
      emoji: '🧭',
      history:
        'Como o valão e o francês vêm do mesmo latim da Gália, muitas palavras ficam fáceis de reconhecer para quem já viu francês: “pan” (pain, pão), “vin” (vin, vinho), “famile” (famille, família). Mas a pronúncia e várias palavras do dia a dia mudaram por um caminho diferente, e o valão também ficou marcado pelo mundo das minas de carvão e da indústria do ferro, que deram à língua um vocabulário técnico próprio nos séculos XIX e XX.',
      culture_tip:
        'Repetir o sujeito é uma marca valona que o francês não tem: “Dji n’ sai nén, mi” (eu não sei, eu não) reforça o “eu”. É comum ouvir isso no dia a dia, principalmente para discordar ou insistir em algo.',
      grammar_why:
        'O artigo é “li” (masculino) e “l’” antes de vogal; o feminino costuma usar “li” também, com o adjetivo mudando de forma (grand → grande). O possessivo vai antes do nome: “mi popa” (meu pai), “mi moman” (minha mãe). Para negar, o valão usa duas partes ao redor do verbo, como o francês: “dji n’ sai nén” (eu não sei).',
      grammar_examples: [
        ['Mi famile est grande.', 'A minha família é grande.'],
        ['Dj’ a on frére eyet ene soûr.', 'Tenho um irmão e uma irmã.'],
        ['Li lacê est blanc.', 'O leite é branco.'],
        ['Dji n’ sai nén.', 'Eu não sei.'],
      ],
      character_guide: [
        ['nén', 'a segunda parte da negação, depois do verbo', 'dji n’ sai nén (não sei)'],
        ['l’', 'o artigo perde a vogal antes de vogal', 'l’ erbe (a grama), l’ eure (a hora)'],
      ],
    },
    lessons: [
      {
        id: 'wa-u2-l1',
        title: 'Mi famile',
        kind: 'licao',
        words: ['famile', 'moman', 'popa', 'frére', 'soûr', 'awè'],
        cloze: [
          { sentence: 'Mi ___ s’ lome Rose.', answer: 'moman', options: ['moman', 'popa', 'frére'], translation: 'A minha mãe se chama Rose.' },
          { sentence: 'Dj’ ___ on frére.', answer: 'a', options: ['a', 'so', 'va'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mi ___ est di Nameur.', answer: 'popa', options: ['popa', 'soûr', 'moman'], translation: 'O meu pai é de Namur.' },
        ],
        voice: {
          bot: 'Avoz des frères ou des soûrs?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Oyi, dj’ a on frére eyet ene soûr.', 'dj’ a', 'frére', 'soûr'],
          hint: 'Responda com “Oyi, dj’ a…” ou “Neni, dji n’ a nén di frére”.',
        },
        communityPrompt: 'Descreva a sua família em valão: quantos irmãos (frères) e irmãs (soûrs) você tem e como se chamam os seus pais.',
      },
      {
        id: 'wa-u2-l2',
        title: 'El måjhon',
        kind: 'licao',
        words: ['måjhon', 'êwe', 'pan', 'lacê', 'fromadje', 'plaire'],
        cloze: [
          { sentence: 'Mi ___ est p’tite.', answer: 'måjhon', options: ['måjhon', 'êwe', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Dji bwa di l’ ___.', answer: 'êwe', options: ['êwe', 'pan', 'fromadje'], translation: 'Eu bebo água.' },
          { sentence: 'Dji magne pan eyet ___.', answer: 'fromadje', options: ['fromadje', 'êwe', 'lacê'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Qwè magnî-ve?',
          botTranslation: 'O que você come?',
          expected: ['Dji magne pan eyet fromadje.', 'dji magne', 'pan', 'fromadje'],
          hint: 'Diga o que come com “Dji magne…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Dji magne…” e “Dji bwa…”.',
      },
      {
        id: 'wa-u2-l3',
        title: 'Saye: famile eyet måjhon',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Avoz des frères ou des soûrs? Qwè magnî-ve?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come?',
          expected: ['Dj’ a ene soûr eyet dji magne pan eyet fromadje.', 'dj’ a', 'dji magne'],
          hint: 'Diga quem você tem na família com “dj’ a…” e o que come com “dji magne…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “dj’ a”, “si lome” e “est”.',
      },
    ],
  },
];
