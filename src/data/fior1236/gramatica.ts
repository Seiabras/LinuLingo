import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do toscano antigo/florentino — por enquanto só A1.1 e A1.2 (pacote
 * incompleto). A morfologia nominal e verbal básica (concordância de gênero/número, conjugação
 * regular) continua igual ao italiano moderno (pacote `it`, já completo) — as diferenças reais são
 * de vocabulário e de algumas formas específicas: a síncope poética (apócope), palavras com sentido
 * arcaico, e advérbios/conjunções/pronomes que caíram em desuso no italiano padrão. Fontes gerais:
 * Wiktionary (en.wiktionary.org, seção "Italian" de cada palavra, conferida uma a uma — nunca uma
 * seção "Old Italian" separada, que não existe lá: o código interno "roa-oit" é só "etimologia-
 * apenas", usado em notas de origem de palavras de OUTRAS línguas, confirmado buscando
 * `insource:"roa-oit"` no próprio Wiktionary); Dante Alighieri, Divina Commedia (Inferno, Purgatorio),
 * conferida via Wiktionary (citações datadas, geralmente da edição de Giorgio Petrocchi) e, para
 * "Fiorenza", direto no texto via Wikisource italiano (it.wikisource.org); Dante Alighieri, Vita
 * Nuova (soneto "Tanto gentile e tanto onesta pare", seção 26), conferido via WebSearch.
 */
export const GRAMMAR_FIOR1236: GrammarTopic[] = [
  {
    id: 'fior1236-g1',
    level: 'A1.1',
    title: 'Core, amor, onor: a síncope poética que apara a vogal final',
    emoji: '✂️',
    summary:
      'A marca mais fácil de reconhecer no florentino antigo é a APÓCOPE (ou síncope poética): a queda da vogal final de certas palavras, sobretudo por exigência do verso. "Core" (coração) vira "cor", "amore" vira "amor", "onore" vira "onor".',
    sections: [
      {
        text:
          'O Wiktionary rotula "apocopated" ("apocopado", forma encurtada) estas e várias outras palavras: "core" → "cor", "amore" → "amor", "onore" → "onor", "fiore" → "fior", "cielo" → "ciel", "uomo" → "uom", "vedere" → "veder", "dire" → "dir", "amare" → "amar", "andare" → "andar", e até o verbo "sono" (eu sou) → "son". Dante usa essa forma no verso mais dramático de todo o Purgatório, quando Beatriz se revela: "Ben son, ben son Beatrice" (sou mesmo, sou mesmo Beatriz!, Purgatorio, Canto XXX, verso 73).',
        table: {
          head: ['Forma plena (italiano moderno)', 'Forma apocopada (toscano antigo)', 'Tradução'],
          rows: [
            ['core', 'cor', 'coração'],
            ['amore', 'amor', 'amor'],
            ['onore', 'onor', 'honra'],
            ['sono', 'son', 'eu sou/são'],
          ],
        },
        examples: [
          ['Ben son, ben son Beatrice.', 'Sou mesmo, sou mesmo Beatriz. (Dante, Purgatório, Canto XXX, verso 73)'],
          ["M'avea di paura il cor compunto.", 'Havia-me compungido o coração de medo. (Dante, Inferno, Canto I, versos 13-15)'],
        ],
      },
      {
        heading: 'Ainda viva na poesia e na música italiana de hoje',
        text:
          'A apócope não desapareceu: é um recurso estilístico que a poesia e a canção italiana ainda usam até hoje, justamente para encaixar a métrica do verso. Quem já ouviu uma ópera italiana provavelmente já ouviu "amor" ou "cor" nessa forma encurtada, mesmo sem saber que a origem é esta.',
      },
    ],
    pitfalls: [
      'Achar que "cor" e "amor" são palavras DIFERENTES de "core" e "amore": são a MESMA palavra, só sem a vogal final — a apócope é um recurso de estilo, não uma mudança de sentido.',
    ],
    quiz: [
      {
        question: 'O que é a apócope (síncope poética) usada em palavras como "cor" e "amor"?',
        options: [
          'A queda da vogal final de certas palavras, por exigência do verso',
          'Um empréstimo de outra língua',
          'Um erro comum de quem não sabia escrever',
        ],
        answer: 'A queda da vogal final de certas palavras, por exigência do verso',
        explanation: 'O Wiktionary rotula essas formas "apocopated" — a vogal final cai, mas o sentido da palavra continua o mesmo de "core"/"amore" por extenso.',
      },
    ],
  },
  {
    id: 'fior1236-g2',
    level: 'A1.1',
    title: '"Donna", "uom": a mesma palavra, sentido diferente de hoje',
    emoji: '👑',
    summary:
      '"Donna" não significava só "mulher" como hoje: era um título de respeito, "dona/senhora" — por isso Dante chama Beatriz de "la donna mia" (a minha dona), não "la mia donna" no sentido comum de "minha mulher".',
    sections: [
      {
        text:
          'O Wiktionary lista, para "donna", o sentido 1 "mulher" (moderno) ao LADO do sentido 2, rotulado "(Archaic) Lady" — dona, senhora, um título de respeito cortês, do latim tardio "domna", forma encurtada de "domina" (senhora, dona de casa). É esse o sentido do título de toda a poesia de amor cortês de Dante e dos outros poetas florentinos: "la donna mia" não é "minha mulher" no sentido de esposa, é "minha dona/senhora" — um título de reverência.',
        examples: [
          ['La donna mia è bella.', 'A minha dona é bela.'],
          ['Qui è l\'uom felice.', 'Aqui o homem é feliz. (Dante, Purgatório, Canto XXX, verso 75)'],
        ],
      },
      {
        heading: '"Uom" não é uma palavra nova',
        text:
          '"Uom" (homem) é só a forma apocopada de "uomo" — não é um sentido novo, é a mesma palavra do tópico anterior (fior1236-g1), encaixada aqui porque aparece no mesmo verso de Beatriz no Purgatório.',
      },
    ],
    pitfalls: [
      'Traduzir "la donna mia" como "minha mulher" no sentido de esposa: no cenário deste pacote (a poesia de amor cortês), é sempre um título de respeito — "minha dona/senhora" — nunca uma relação de casamento.',
    ],
    quiz: [
      {
        question: 'Qual é o sentido arcaico de "donna", ao lado do sentido moderno "mulher"?',
        options: ['Dona/senhora, um título de respeito cortês', 'Rainha', 'Serva'],
        answer: 'Dona/senhora, um título de respeito cortês',
        explanation: 'O Wiktionary rotula esse sentido "(Archaic) Lady" — é o título que Dante usa para Beatriz em toda a Vita Nuova.',
      },
    ],
  },
  {
    id: 'fior1236-g3',
    level: 'A1.2',
    title: '"Quivi", "unque", "ca": advérbios e conjunções que desapareceram',
    emoji: '🕰️',
    summary:
      'Palavras inteiras de função gramatical (advérbios, conjunções) saíram de uso no italiano padrão depois de Dante: "quivi" (ali/lá), "unque" (jamais) e "ca" (porque/que) soam hoje tão arcaicas em italiano quanto formas antigas soariam em português.',
    sections: [
      {
        text:
          'O Wiktionary rotula "quivi" como "dated" (ali/lá, do latim tardio "eccum ibi"), "unque" como "archaic" (jamais/nunca, com citação de Dante no Purgatório, Canto III, versos 103-105, edição Petrocchi: "pon mente se di là mi vedesti unque") e "ca" como "archaic or dialectal" (porque/que, do latim "quam" + "quia"). Nenhuma das três é usada no italiano padrão de hoje — foram substituídas por "lì"/"là", "mai" e "perché"/"che".',
        table: {
          head: ['Toscano antigo', 'Italiano moderno', 'Tradução'],
          rows: [
            ['quivi', 'lì / là', 'ali/lá'],
            ['unque', 'mai', 'jamais'],
            ['ca', 'perché / che', 'porque/que'],
          ],
        },
        examples: [
          ['La donna è quivi.', 'A dona está ali.'],
          ['Non vidi unque tal cosa.', 'Nunca vi tal coisa.'],
          ['Ca tu sei poeta.', 'Porque você é poeta.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar "quivi", "unque" ou "ca" numa frase de italiano moderno: um falante de hoje reconheceria a palavra (pela raiz latina comum), mas a acharia tão antiga quanto "vossa mercê" soaria em português — são exclusivas do registro literário/arcaico.',
    ],
    quiz: [
      {
        question: 'Qual destas é a forma arcaica de "mai" (jamais), confirmada com citação de Dante no Purgatório?',
        options: ['unque', 'quivi', 'ca'],
        answer: 'unque',
        explanation: 'O Wiktionary rotula "unque" como "archaic", com o verso de Dante "pon mente se di là mi vedesti unque" (Purgatório, Canto III).',
      },
    ],
  },
  {
    id: 'fior1236-g4',
    level: 'A1.2',
    title: '"Altrui": o pronome que sobrevive só na poesia',
    emoji: '🫂',
    summary:
      '"Altrui" (outrem, outras pessoas) ainda existe no italiano de hoje, mas o Wiktionary rotula "literary" o seu uso como pronome sem preposição — exatamente como Dante usa duas vezes nos textos deste pacote.',
    sections: [
      {
        text:
          'O Wiktionary lista "altrui" como adjetivo possessivo comum ("de outra pessoa") e como pronome "(literary)" ("outrem"/"outras pessoas"), citando Dante, Inferno, Canto I, versos 16-18: "che mena dritto altrui per ogne calle" (que leva outrem direito por toda vereda). É a MESMA palavra do verso mais famoso da Vita Nuova, o soneto "Tanto gentile": "la donna mia quand\'ella altrui saluta" (minha dona quando ela saúda outrem) — descrevendo o efeito que Beatriz tinha sobre quem a via passar pelas ruas de Fiorenza.',
        examples: [
          ['Saluta altrui con pace.', 'Saúda outrem com paz.'],
          ["La donna mia quand'ella altrui saluta.", 'Minha dona quando ela saúda outrem. (Dante, Vita Nuova, soneto 26)'],
        ],
      },
      {
        heading: 'Etimologia curiosa',
        text:
          '"Altrui" vem do latim vulgar "*alterūi", moldado no mesmo padrão terminado em "-ui" de "lui" e "colui" — uma terminação que, segundo o Wiktionary, remonta ao latim "cui". O francês "autrui" é formado do mesmo jeito.',
      },
    ],
    pitfalls: [
      'Achar que "altrui" é uma palavra que só existe no toscano antigo: ela continua no italiano de hoje, mas o uso SEM preposição, como pronome de objeto direto/indireto (o sentido rotulado "literary" no Wiktionary), é que ficou restrito à poesia e ao registro literário.',
    ],
    quiz: [
      {
        question: 'No soneto "Tanto gentile" da Vita Nuova, o que "altrui" significa quando Beatriz "altrui saluta"?',
        options: ['Outrem/outras pessoas (quem a vê passar)', 'Seu pai', 'A própria Beatriz'],
        answer: 'Outrem/outras pessoas (quem a vê passar)',
        explanation: 'O verso descreve o efeito do cumprimento de Beatriz sobre QUEM A VÊ passar pela rua — "altrui" é essa outra pessoa, não ela mesma.',
      },
    ],
  },
];
