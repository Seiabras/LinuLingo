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
  {
    id: 'fior1236-g5',
    level: 'A2.1',
    title: 'Sol, mar, pan, gran: a apócope continua produtiva',
    emoji: '✂️',
    summary: 'A mesma apócope de "cor"/"amor"/"onor" (fior1236-g1) aparece numa família inteira de palavras novas: "sol" (sole), "mar" (mare), "pan" (pane), "gran" (grande), "tal" (tale), "qual" (quale) e "buon" (buono).',
    sections: [
      {
        text: 'O Wiktionary rotula "apocopated" cada uma destas formas, igual fez com "cor" e "amor". A regra muda um pouco de palavra pra palavra (algumas perdem só a vogal final, "gran" perde a sílaba inteira "-de"), mas o efeito poético é o mesmo: encaixar a métrica do verso ou simplesmente abreviar a fala.',
        table: {
          head: ['Forma plena', 'Forma apocopada', 'Tradução'],
          rows: [
            ['sole', 'sol', 'sol'],
            ['mare', 'mar', 'mar'],
            ['pane', 'pan', 'pão'],
            ['grande', 'gran', 'grande'],
          ],
        },
        examples: [
          ['Il sol è bello.', 'O sol é belo.'],
          ['Un gran poeta.', 'Um grande poeta.'],
        ],
      },
      {
        heading: 'Ainda viva no italiano de hoje',
        text: 'Diferente de "cor"/"amor" (restritas à poesia), "gran", "qual" e "buon" sobrevivem no italiano moderno em combinações fixas: "un gran uomo" (um grande homem), "qual è" (qual é), "buon giorno" (bom dia) — a apócope, aqui, nunca saiu de uso.',
      },
    ],
    pitfalls: ['Achar que "gran" é uma palavra diferente de "grande": é a mesma palavra, só que apocopada antes de um substantivo — "gran poeta" é "grande poeta".'],
    quiz: [
      {
        question: 'Qual destas é a forma apocopada de "pane" (pão)?',
        options: ['pan', 'pal', 'par'],
        answer: 'pan',
        explanation: 'O Wiktionary rotula "pan" "apocopated", a mesma queda da vogal final que "cor" (core) e "amor" (amore) já mostraram.',
      },
    ],
  },
  {
    id: 'fior1236-g6',
    level: 'A2.1',
    title: '"Mercatante": o mercador antes da palavra moderna',
    emoji: '🧳',
    summary: 'Fiorenza era uma cidade de banqueiros e comerciantes: "mercatante" (mercador) é a forma antiga de "mercante" — a mesma que abre dezenas de contos no Decameron de Boccaccio.',
    sections: [
      {
        text: 'O Wiktionary rotula "mercatante" "archaic/obsolete", forma antiga de "mercante". Boccaccio usa a palavra o tempo todo no Decameron: muitos contos começam com "Un mercatante..." (Um mercador...). A riqueza desses mercadores vinha, em boa parte, do comércio de lã e do câmbio de moedas — e Fiorenza cunhava a sua própria, o "fiorino" (florim), moeda de ouro criada em 1252, tão confiável que circulava por toda a Europa.',
        examples: [
          ['Il mercatante è ricco.', 'O mercador é rico.'],
          ["Un fiorino d'oro.", 'Um florim de ouro.'],
        ],
      },
      {
        heading: 'A guilda que governava a cidade',
        text: 'A palavra "arte", em Fiorenza, também significava "guilda/corporação de ofício" — as Arti Maggiori (guildas maiores, como a dos mercadores de lã) e Arti Minori governavam boa parte da vida política da cidade, um fato bem documentado da história florentina medieval.',
      },
    ],
    pitfalls: ['Achar que "mercatante" é erro de grafia de "mercante": é a forma mais antiga da mesma palavra, usada sem problema por Boccaccio.'],
    quiz: [
      {
        question: 'O que "mercatante" significa, e de onde vem essa forma?',
        options: ['Mercador — forma antiga e comum em Boccaccio', 'Mercado — o lugar de comprar e vender', 'Mercadoria — o produto vendido'],
        answer: 'Mercador — forma antiga e comum em Boccaccio',
        explanation: 'O Wiktionary rotula "mercatante" "archaic/obsolete", forma antiga de "mercante" — Boccaccio a usa dezenas de vezes no Decameron.',
      },
    ],
  },
  {
    id: 'fior1236-g7',
    level: 'A2.2',
    title: '"Fia": um futuro de "essere" que desapareceu',
    emoji: '🔮',
    summary: 'Ao lado do "son" apocopado (fior1236-g1), o florentino antigo tinha outra forma arcaica do verbo "essere": "fia" (será), usada por Dante em versos proféticos da Commedia.',
    sections: [
      {
        text: 'O Wiktionary rotula "fia" "archaic/obsolete", forma antiga do futuro "sarà" (será) do verbo "essere". Dante usa essa forma em momentos de profecia na Commedia, quando um personagem anuncia o que vai acontecer no futuro — um uso quase solene, reservado pra previsões.',
        examples: [
          ['Tal fia la fine.', 'Tal será o fim.'],
          ["Tal fia di lui l'onor quale fu 'l core.", 'Tal será a honra dele qual foi o coração.'],
        ],
      },
    ],
    pitfalls: ['Confundir "fia" (será, futuro) com "fu" (foi, passado) — são tempos verbais diferentes do mesmo verbo "essere".'],
    quiz: [
      {
        question: 'O que "fia" significa no florentino antigo de Dante?',
        options: ['Será (futuro arcaico de "essere")', 'Era (passado)', 'Seja (subjuntivo)'],
        answer: 'Será (futuro arcaico de "essere")',
        explanation: 'O Wiktionary rotula "fia" "archaic/obsolete" como forma antiga de "sarà" — Dante a usa em versos de profecia na Commedia.',
      },
    ],
  },
  {
    id: 'fior1236-g8',
    level: 'A2.2',
    title: '"Poscia", "guari": mais palavras que a poesia guardou',
    emoji: '🕰️',
    summary: 'Igual "quivi" e "unque" (fior1236-g3), outras duas palavras de função sumiram do italiano padrão: "poscia" (depois/então) e "guari" (muito, quase só na negativa "non guari").',
    sections: [
      {
        text: 'O Wiktionary rotula "poscia" "archaic/literary" (sinônimo de "poi") — Dante a usa com frequência: "e poscia che la sua parola fu restata" (Inferno V). Já "guari" é rotulado "archaic", de origem germânica (franco "waigaro"), quase sempre dentro da expressão negativa "non guari" (não muito).',
        table: {
          head: ['Toscano antigo', 'Italiano moderno', 'Tradução'],
          rows: [
            ['poscia', 'poi', 'depois/então'],
            ['non guari', 'non molto', 'não muito'],
          ],
        },
        examples: [
          ['Poscia dirò.', 'Depois direi.'],
          ['Non vidi guari.', 'Não vi muito.'],
        ],
      },
    ],
    pitfalls: ['Usar "guari" fora de uma negativa: na prática, o Wiktionary só documenta esse uso dentro de expressões como "non guari" — raramente aparece sozinho de forma afirmativa.'],
    quiz: [
      {
        question: 'Qual é o sentido de "poscia" no florentino antigo de Dante?',
        options: ['Depois/então (sinônimo de "poi")', 'Nunca', 'Talvez'],
        answer: 'Depois/então (sinônimo de "poi")',
        explanation: 'O Wiktionary rotula "poscia" "archaic/literary" — Dante a usa no sentido de "poi" (depois) na Commedia.',
      },
    ],
  },
];
