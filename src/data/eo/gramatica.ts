import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do esperanto — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). O esperanto foi desenhado de propósito pra ter o mínimo de exceções: cada terminação
 * (-o, -a, -as, -n...) faz sempre a mesma coisa, em toda palavra. Fontes: L. L. Zamenhof,
 * "Fundamento de Esperanto" (1887, as 16 regras originais da gramática); Bertilo Wennergren, PMEG —
 * "Plena Manlibro de Esperanta Gramatiko" (lernu.net/pmeg); Wikipedia, "Esperanto grammar",
 * "Esperanto orthography" e "Esperanto grammar" (seção de participios e comparativo).
 */
export const GRAMMAR_EO: GrammarTopic[] = [
  {
    id: 'eo-g1',
    level: 'A1.1',
    title: 'Uma letra, um som só — e o acento sempre na penúltima',
    emoji: '🔤',
    summary: 'No esperanto, cada letra tem exatamente UM som, sempre — regra 1 do Fundamento de Zamenhof. E o acento tônico é sempre na penúltima sílaba, sem nenhuma exceção.',
    sections: [
      {
        text: 'Zamenhof desenhou o esperanto para não ter as irregularidades de pronúncia que o português, o inglês ou o francês têm: nenhuma letra muda de som dependendo da palavra, e nenhum som tem mais de uma letra para escrevê-lo. "C" é sempre "ts"; "g" é sempre "g" duro, mesmo antes de "e"/"i" (diferente do português, em que "gelo" tem o "g" como "j"). Veja o alfabeto completo na aba Alfabeto.',
        examples: [
          ['Granda. Giganta.', '"g" sempre duro, mesmo antes de "i" — diferente de "gigante" em português.'],
          ['Centro.', '"c" sempre "ts": "TSEN-tro".'],
        ],
      },
      {
        heading: 'O acento tônico: sempre na penúltima sílaba',
        text: 'Essa é outra regra sem exceção nenhuma: a sílaba tônica de QUALQUER palavra do esperanto, de qualquer tamanho, é sempre a penúltima. "Esperanto" se divide es-pe-RAN-to (acento no "ran"); "amiko" é a-MI-ko; "universitato" é u-ni-ver-si-TA-to.',
        examples: [
          ['Esperanto', 'es-pe-RAN-to'],
          ['amiko', 'a-MI-ko (amigo)'],
        ],
      },
    ],
    pitfalls: [
      'Ler "g" como "j" antes de "e"/"i", pelo hábito do português ("gelo", "giro"): no esperanto "g" é SEMPRE duro, como em "gato".',
      'Procurar uma exceção à regra do acento: não existe nenhuma palavra do esperanto com acento fora da penúltima sílaba.',
    ],
    quiz: [
      {
        question: 'Onde fica o acento tônico de "amiko" (amigo)?',
        options: ['Na penúltima sílaba: a-MI-ko', 'Na última sílaba: a-mi-KO', 'Na primeira sílaba: A-mi-ko'],
        answer: 'Na penúltima sílaba: a-MI-ko',
        explanation: 'No esperanto, o acento tônico é SEMPRE na penúltima sílaba, sem exceção — diferente do português, que varia de palavra para palavra.',
      },
    ],
  },
  {
    id: 'eo-g2',
    level: 'A1.1',
    title: 'Substantivos em -o, plural -oj; adjetivos em -a',
    emoji: '📘',
    summary: 'Todo substantivo termina em -o (plural: -oj). Todo adjetivo termina em -a, e concorda em número com o substantivo que acompanha — mas sem gênero, porque o esperanto não tem gênero gramatical.',
    sections: [
      {
        text: 'A terminação -o marca substantivo, sempre: "domo" (casa), "hundo" (cachorro), "amiko" (amigo). Para o plural, basta acrescentar -j: "domoj" (casas), "hundoj" (cachorros). Não existe artigo indefinido ("um", "uma") no esperanto — só o definido "la" ("o"/"a"/"os"/"as"), que nem varia por gênero ou número.',
        table: {
          head: ['Esperanto', 'Tradução'],
          rows: [
            ['domo', 'casa (uma casa)'],
            ['la domo', 'a casa'],
            ['domoj', 'casas'],
            ['la domoj', 'as casas'],
          ],
        },
        examples: [
          ['Mi havas du hundojn.', 'Eu tenho dois cachorros. (vai ter o -n do acusativo — outro tópico)'],
          ['La amikoj estas bonaj.', 'Os amigos são bons.'],
        ],
      },
      {
        heading: 'O adjetivo em -a concorda em número (nunca em gênero)',
        text: 'O adjetivo sempre termina em -a: "granda" (grande), "bona" (bom/boa — a MESMA palavra serve pros dois, porque não há gênero gramatical). Quando o substantivo vai pro plural, o adjetivo acompanha com -aj.',
        examples: [
          ['La domo estas granda.', 'A casa é grande.'],
          ['La domoj estas grandaj.', 'As casas são grandes.'],
        ],
      },
      {
        heading: 'A quarta terminação de classe: -e, o advérbio',
        text: 'Junto com -o (substantivo), -a (adjetivo) e -j (plural), existe -e: a terminação do ADVÉRBIO. Troca-se o -a do adjetivo por -e: "bona" (bom) → "bone" (bem); "rapida" (rápido) → "rapide" (rapidamente). O advérbio não concorda em número nem em caso — é sempre invariável.',
        examples: [['Ŝi parolas bone kaj rapide.', 'Ela fala bem e rápido.']],
      },
    ],
    pitfalls: [
      'Procurar um artigo indefinido ("um"/"uma"): não existe — "domo" sozinha já pode ser "casa" ou "uma casa".',
      'Tentar flexionar o adjetivo por gênero (como "bom"/"boa" em português): no esperanto é sempre "bona" para os dois — só o número muda, com -j.',
    ],
    quiz: [
      {
        question: 'Como fica "os cachorros grandes" em esperanto?',
        options: ['la grandaj hundoj', 'la granda hundo', 'la grandoj hundaj'],
        answer: 'la grandaj hundoj',
        explanation: '"hundo" (cachorro) vai pro plural com -oj; o adjetivo "granda" concorda em número com -aj. A ordem adjetivo-substantivo é livre, mas a concordância em -j é obrigatória nos dois.',
      },
    ],
  },
  {
    id: 'eo-g3',
    level: 'A1.2',
    title: 'O caso acusativo: -n no objeto direto',
    emoji: '🎯',
    summary: 'Quem RECEBE a ação (o objeto direto) ganha -n no final — tanto o substantivo quanto o adjetivo que o acompanha. O sujeito da frase NUNCA leva -n.',
    sections: [
      {
        text: 'O esperanto marca o objeto direto com a terminação -n, chamada caso acusativo. Compare: em "Hundo kuras" (o cachorro corre), "hundo" é sujeito, sem -n. Em "Mi vidas hundon" (eu vejo um cachorro), "hundon" é objeto direto, com -n. No plural, o -n vem depois do -j: "Mi vidas hundojn" (eu vejo cachorros).',
        table: {
          head: ['Função', 'Esperanto', 'Tradução'],
          rows: [
            ['Sujeito (sem -n)', 'La hundo manĝas.', 'O cachorro come.'],
            ['Objeto direto (com -n)', 'Mi havas hundon.', 'Eu tenho um cachorro.'],
            ['Objeto direto no plural (-ojn)', 'Mi havas du hundojn.', 'Eu tenho dois cachorros.'],
          ],
        },
        examples: [
          ['Mi amas mian familion.', 'Eu amo a minha família.'],
          ['Ŝi trinkas akvon.', 'Ela bebe água.'],
        ],
      },
      {
        heading: 'O adjetivo que descreve o objeto direto também leva -n',
        text: 'Se um adjetivo acompanha o objeto direto, ele também recebe -n, pra concordar: "Mi havas grandan hundon" (eu tenho um cachorro grande) — "grandan", não "granda".',
        examples: [['Mi vidas malgrandan katon.', 'Eu vejo um gato pequeno.']],
      },
      {
        heading: 'O -n também marca direção, depois de preposição',
        text: 'Depois de uma preposição de lugar, o substantivo normalmente NÃO leva -n — mas o -n volta para marcar movimento, "para dentro de": "en la domo" é "dentro da casa" (onde já está); "en la domon" é "para dentro da casa" (para onde vai). A mesma preposição, com ou sem -n, muda "onde está" para "para onde vai".',
        examples: [['La kato saltas sur la tablon.', 'O gato salta para cima da mesa. (o -n mostra que ele não estava lá: foi pra lá)']],
      },
    ],
    pitfalls: [
      'Esquecer o -n no objeto direto: "Mi havas hundo" está errado — precisa ser "Mi havas hundon".',
      'Pôr -n no sujeito da frase: o sujeito NUNCA leva -n, só quem recebe a ação.',
      'Esquecer o -n no adjetivo que descreve o objeto direto: "grandan hundon", não "granda hundon".',
      'Esquecer que, depois de preposição de lugar, o -n muda o sentido para "movimento para": "en la domo" (dentro da casa) não é o mesmo que "en la domon" (para dentro da casa).',
    ],
    quiz: [
      {
        question: 'Qual frase está certa para "eu vejo um cachorro grande"?',
        options: ['Mi vidas grandan hundon.', 'Mi vidas granda hundo.', 'Mi vidas grandan hundo.'],
        answer: 'Mi vidas grandan hundon.',
        explanation: '"Hundo" é o objeto direto (quem recebe a ação de "ver"), então leva -n: "hundon". O adjetivo "granda" concorda com ele e também leva -n: "grandan".',
      },
    ],
  },
  {
    id: 'eo-g4',
    level: 'A1.2',
    title: 'Os três tempos verbais: -as, -is, -os',
    emoji: '⏰',
    summary: 'O verbo esperanto NUNCA muda por pessoa — "mi estas", "vi estas", "li estas" são todos "estas". Só o TEMPO muda a terminação: -as (presente), -is (passado), -os (futuro).',
    sections: [
      {
        text: 'Essa é uma das maiores diferenças do esperanto com o português: o verbo não conjuga por pessoa (eu/tu/ele/nós...) — a mesma forma serve para todo mundo, e o pronome é que diz quem é o sujeito. Só muda o TEMPO: presente -as, passado -is, futuro -os.',
        table: {
          head: ['Pronome', 'esti (ser/estar)', 'paroli (falar)'],
          rows: [
            ['mi/vi/li/ŝi/ni/ili', 'estas (presente)', 'parolas'],
            ['mi/vi/li/ŝi/ni/ili', 'estis (passado)', 'parolis'],
            ['mi/vi/li/ŝi/ni/ili', 'estos (futuro)', 'parolos'],
          ],
        },
        examples: [
          ['Mi estas, vi estas, li estas — ĉiuj estas "estas".', 'Eu sou, você é, ele é — todos são "estas".'],
          ['Hieraŭ mi parolis. Hodiaŭ mi parolas. Morgaŭ mi parolos.', 'Ontem eu falei. Hoje eu falo. Amanhã eu falarei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação por pessoa, como em português ("eu falo", "tu falas", "ele fala"): no esperanto é sempre a MESMA forma — só o pronome muda.',
      'Misturar as terminações de tempo com as de substantivo/adjetivo: -as/-is/-os são SEMPRE verbo; -o é substantivo; -a é adjetivo — nunca se confundem.',
    ],
    quiz: [
      {
        question: 'Como se diz "nós comemos" (no presente) em esperanto?',
        options: ['Ni manĝas.', 'Ni manĝis.', 'Ni manĝos.'],
        answer: 'Ni manĝas.',
        explanation: 'Presente é sempre -as, pra qualquer pessoa: "manĝas" serve pra "eu como", "você come", "nós comemos" etc. — o pronome "ni" já diz quem é o sujeito.',
      },
    ],
  },
  {
    id: 'eo-g5',
    level: 'A1.2',
    title: 'Afixos que multiplicam o vocabulário: mal-, -ino, -et-, -eg-',
    emoji: '🧩',
    summary: 'Um punhado de afixos reaproveitáveis cria palavras novas sem precisar de raiz nova: mal- (o oposto), -ino (feminino), -et- (diminutivo) e -eg- (aumentativo) funcionam em qualquer palavra que fizer sentido.',
    sections: [
      {
        text: 'O prefixo mal- inverte o sentido de qualquer adjetivo ou verbo: "bona" (bom) → "malbona" (mau); "granda" (grande) → "malgranda" (pequeno); "malami" (odiar, de "ami", amar). É um dos afixos mais usados do esperanto — aprender UM afixo dá acesso a centenas de palavras novas.',
        table: {
          head: ['Raiz', 'Com mal-', 'Tradução'],
          rows: [
            ['bona (bom)', 'malbona', 'mau/ruim'],
            ['granda (grande)', 'malgranda', 'pequeno'],
            ['ami (amar)', 'malami', 'odiar'],
          ],
        },
        examples: [['La vetero estas malbona.', 'O tempo (clima) está ruim.']],
      },
      {
        heading: '-ino faz o feminino: não é gênero gramatical, é derivação',
        text: 'O esperanto não tem gênero gramatical (substantivo e adjetivo não concordam em masculino/feminino, só em número). Mas o sufixo -ino cria a forma feminina de uma palavra de pessoa/animal quando faz sentido: "patro" (pai) → "patrino" (mãe); "frato" (irmão) → "fratino" (irmã); "filo" (filho) → "filino" (filha).',
        examples: [['Mia fratino estas pli juna ol mi.', 'Minha irmã é mais jovem do que eu.']],
      },
      {
        heading: '-et- (diminutivo) e -eg- (aumentativo)',
        text: 'Encaixados ENTRE a raiz e a terminação final, -et- diminui ("domo" casa → "dometo" casinha) e -eg- aumenta ("domo" → "domego" casarão). Funcionam em substantivos e adjetivos.',
        examples: [
          ['dometo', 'casinha (domo + -et- + -o)'],
          ['granda → grandega', 'grande → enorme'],
        ],
      },
      {
        heading: 'ge- junta os dois sexos',
        text: 'O prefixo ge- faz o oposto de -ino: junta masculino e feminino numa só palavra de grupo. "Patro" (pai) + "patrino" (mãe) → "gepatroj" (os pais, pai e mãe juntos); "frato" + "fratino" → "gefratoj" (irmãos e irmãs, o grupo).',
        examples: [['Miaj gepatroj estas bonaj.', 'Meus pais (pai e mãe) são bons.']],
      },
    ],
    pitfalls: [
      'Achar que -ino marca gênero gramatical do jeito que o português faz: no esperanto é um sufixo opcional de DERIVAÇÃO (cria uma palavra nova), não uma concordância obrigatória.',
      'Esquecer que mal-, -et- e -eg- vêm ANTES da terminação final (-o/-a/-as): "malgranda", não "grandamal"; "dometo", não "domoet".',
      'Confundir ge- (junta os dois sexos num grupo: "gepatroj", pai e mãe) com -ino (só faz o feminino de uma palavra): são afixos opostos.',
    ],
    quiz: [
      {
        question: 'Qual é o oposto de "bona" (bom) em esperanto?',
        options: ['malbona', 'bonino', 'bonega'],
        answer: 'malbona',
        explanation: 'O prefixo mal- inverte o sentido de qualquer adjetivo: mal- + bona = malbona (mau/ruim). "-ino" faria o feminino (não se aplica a adjetivo de qualidade), e "-eg-" aumentaria ("bonega" = ótimo).',
      },
    ],
  },
  {
    id: 'eo-g6',
    level: 'A1.2',
    title: 'Mais dois modos verbais: -us (condicional) e -u (imperativo)',
    emoji: '🪄',
    summary: 'Além dos três tempos (-as/-is/-os), o verbo esperanto tem -us para o condicional ("eu faria") e -u para o imperativo ("faça!") — as mesmas seis terminações servem para qualquer verbo, sem exceção.',
    sections: [
      {
        text: 'O infinitivo (-i) e os cinco modos/tempos (-as, -is, -os, -us, -u) formam as seis terminações verbais do esperanto. O condicional -us expressa algo hipotético ou educado; o imperativo -u dá uma ordem, um pedido ou uma sugestão — e também serve para "vamos" (ni + -u).',
        table: {
          head: ['Terminação', 'Modo/tempo', 'Exemplo'],
          rows: [
            ['-us', 'condicional', 'mi lernus — eu aprenderia'],
            ['-u', 'imperativo', 'lernu! — aprenda!'],
          ],
        },
        examples: [
          ['Se mi havus tempon, mi lernus Esperanton.', 'Se eu tivesse tempo, eu aprenderia esperanto.'],
          ['Bonvolu sidiĝi! / Ni iru!', 'Por favor, sente-se! / Vamos!'],
        ],
      },
    ],
    pitfalls: ['Confundir -us (condicional, "faria") com -os (futuro, "fará"): só uma letra muda, mas o sentido é bem diferente.'],
    quiz: [
      {
        question: 'Como se diz "nós seríamos" em esperanto?',
        options: ['ni estus', 'ni estos', 'ni estas'],
        answer: 'ni estus',
        explanation: 'O condicional usa -us em qualquer verbo, para qualquer pessoa: "ni estus" é "nós seríamos".',
      },
    ],
  },
  {
    id: 'eo-g7',
    level: 'A1.2',
    title: 'Mais afixos: -ej- (lugar), -ist- (profissão), -ul- (pessoa)',
    emoji: '🏗️',
    summary: 'Como mal-, -ino, -et- e -eg-, estes três afixos encaixam entre a raiz e a terminação e criam uma família de palavras a partir de uma raiz só: -ej- faz o lugar, -ist- a profissão, -ul- a pessoa com a característica.',
    sections: [
      {
        text: '-ej- transforma uma ação ou coisa no LUGAR onde ela acontece: "lerni" (aprender) → "lernejo" (escola); "manĝi" (comer) → "manĝejo" (refeitório). -ist- transforma uma coisa na PROFISSÃO de quem trabalha com ela: "dento" (dente) → "dentisto" (dentista). -ul- transforma uma qualidade na PESSOA que a tem: "juna" (jovem) → "junulo" (um jovem).',
        table: {
          head: ['Afixo', 'Sentido', 'Exemplo'],
          rows: [
            ['-ej-', 'lugar', 'lernejo (escola), manĝejo (refeitório)'],
            ['-ist-', 'profissão', 'dentisto (dentista)'],
            ['-ul-', 'pessoa com a característica', 'junulo (um jovem)'],
          ],
        },
        examples: [['Mia frato estas dentisto kaj laboras en granda ĉambro.', 'Meu irmão é dentista e trabalha numa sala grande.']],
      },
    ],
    pitfalls: ['Trocar -ist- (profissão) com -ul- (pessoa com uma qualidade): "dentisto" é quem trabalha com dentes; "junulo" é só alguém jovem, sem profissão nenhuma envolvida.'],
    quiz: [
      {
        question: 'Se "kuiri" é cozinhar, o que é "kuirejo"?',
        options: ['A cozinha', 'O cozinheiro', 'A comida'],
        answer: 'A cozinha',
        explanation: '-ej- forma o LUGAR da ação: "kuiri" (cozinhar) + -ej- + -o = "kuirejo", a cozinha (o lugar onde se cozinha).',
      },
    ],
  },
  {
    id: 'eo-g8',
    level: 'A1.2',
    title: 'A tabela mágica dos correlativos',
    emoji: '🧮',
    summary: 'As palavras de pergunta e as que respondem a elas seguem uma grade: um começo (ki- pergunta, ti- aponta, ĉi- todos, neni- nenhum, i- algum) mais um final (-o coisa, -u pessoa, -e lugar, -am tempo, -el modo, -al razão). 5 começos × 9 finais = 45 palavras de uma tabela só.',
    sections: [
      {
        text: 'Em vez de memorizar 45 palavras soltas, basta aprender a grade: a primeira parte diz "que tipo" de correlativo é (pergunta, aponta, abrange todos, nega, ou é indefinido) e a segunda parte diz "sobre o quê" ele fala (coisa, pessoa, lugar, tempo, modo, razão...).',
        table: {
          head: ['Começo', 'kio?/tio (coisa)', 'kiu?/tiu (pessoa)', 'kie?/tie (lugar)', 'kiam?/tiam (tempo)'],
          rows: [
            ['ki- (pergunta)', 'kio? — o quê?', 'kiu? — quem?', 'kie? — onde?', 'kiam? — quando?'],
            ['ti- (aponta)', 'tio — isso', 'tiu — aquele', 'tie — lá', 'tiam — então'],
            ['ĉi- (todos)', 'ĉio — tudo', 'ĉiu — cada um', 'ĉie — em todo lugar', 'ĉiam — sempre'],
            ['neni- (nenhum)', 'nenio — nada', 'neniu — ninguém', 'nenie — em lugar nenhum', 'neniam — nunca'],
          ],
        },
        examples: [
          ['Neniu venis, sed ĉiu scias kial.', 'Ninguém veio, mas todos sabem por quê.'],
          ['Kiel vi fartas? Kiel ĉiam, mi fartas bone.', 'Como você vai? Como sempre, eu vou bem.'],
        ],
      },
    ],
    pitfalls: ['Decorar as 45 palavras uma a uma: é mais rápido aprender os 5 começos e os finais (-o/-u/-e/-am/-el/-al/-es/-om) separados, e combinar.'],
    quiz: [
      {
        question: 'Se "kiam" é "quando?", o que é "neniam"?',
        options: ['nunca', 'sempre', 'agora'],
        answer: 'nunca',
        explanation: 'O começo "neni-" nega: "neni-" + "-am" (tempo) = "neniam", nunca.',
      },
    ],
  },
  {
    id: 'eo-g9',
    level: 'A2.1',
    title: 'Os participios: 6 formas para o tempo e a voz de uma ação',
    emoji: '🎭',
    summary: 'Três terminações ativas (-ant-, em curso; -int-, concluída; -ont-, por vir) e três passivas (-at-, -it-, -ot-, as mesmas três situações, mas sofridas por quem recebe a ação), combinadas com -a (adjetivo), -o (substantivo/pessoa) ou -e (advérbio).',
    sections: [
      {
        text: 'O verbo "legi" (ler) mostra as seis formas: quem lê, em curso, é "leganta" (adjetivo) ou "leganto" (substantivo, "o que lê"); quem já leu é "leginta"; quem vai ler é "legonta". E o que é lido? Isso usa a voz PASSIVA: "legata" (sendo lido agora), "legita" (já lido) e "legota" (vai ser lido).',
        table: {
          head: ['Aspecto', 'Ativo (quem faz)', 'Passivo (quem recebe)'],
          rows: [
            ['Em curso', 'leganta (lendo)', 'legata (sendo lido)'],
            ['Concluído', 'leginta (que leu)', 'legita (lido, já)'],
            ['Por vir', 'legonta (que vai ler)', 'legota (que vai ser lido)'],
          ],
        },
        examples: [
          ['La leganta knabo estas mia frato.', 'O menino que está lendo é meu irmão. (ativo, em curso)'],
          ['La libro, legita de mi, estis bona.', 'O livro, lido por mim, era bom. (passivo, concluído)'],
        ],
      },
      {
        heading: 'Um fato curioso: o próprio nome "Esperanto" é um participio',
        text: '"Esperanto" vem de "esperi" (esperar/ter esperança) + -ant- (participio ativo em curso) + -o (substantivo/pessoa): literalmente, "aquele que espera" — foi o pseudônimo que Zamenhof usou para publicar o primeiro livro da língua em 1887, e o nome pegou para a língua toda.',
        examples: [['Esperanto = esperi + -ant- + -o', '"aquele que espera" (o pseudônimo de Zamenhof)']],
      },
    ],
    pitfalls: [
      'Confundir -ant-/-int-/-ont- (ativo, quem FAZ a ação) com -at-/-it-/-ot- (passivo, quem RECEBE a ação): "leganto" é quem lê; "legato" seria o texto sendo lido (precisa ser transitivo).',
      'Esquecer que só verbos TRANSITIVOS (que têm objeto direto) têm as três formas passivas: um verbo como "iri" (ir) não tem "irata/irita/irota".',
    ],
    quiz: [
      {
        question: 'Que participio descreve "o livro que JÁ foi lido"?',
        options: ['legita', 'leganta', 'legonta'],
        answer: 'legita',
        explanation: '"-it-" é o passivo CONCLUÍDO: o livro já recebeu a ação de ser lido. "Leganta" seria ativo (quem lê), e "legonta" seria o futuro ativo.',
      },
    ],
  },
  {
    id: 'eo-g10',
    level: 'A2.1',
    title: 'Comparativo e superlativo: pli... ol, la plej...',
    emoji: '⚖️',
    summary: '"Pli" (mais) + adjetivo/advérbio + "ol" (do que) faz o comparativo; "la plej" (o mais) faz o superlativo; "tiel... kiel" (tão... quanto) faz a igualdade.',
    sections: [
      {
        table: {
          head: ['Esperanto', 'Tradução'],
          rows: [
            ['pli granda ol', 'maior do que'],
            ['la plej granda', 'o maior'],
            ['tiel granda kiel', 'tão grande quanto'],
            ['malpli granda ol', 'menor do que (literalmente: "menos grande do que")'],
          ],
        },
        text: 'Esse sistema usa só palavras que você já conhece: "pli" e "plej" (relacionadas aos correlativos ki-/ti-), "ol" (do que) e "mal-" (o oposto). Não existem formas irregulares como "melhor"/"pior" em português — tudo segue o mesmo padrão regular.',
        examples: [
          ['Mia frato estas pli alta ol mi.', 'Meu irmão é mais alto do que eu.'],
          ['Ŝi estas la plej feliĉa persono, kiun mi konas.', 'Ela é a pessoa mais feliz que eu conheço.'],
          ['Mi estas tiel laca kiel vi.', 'Eu estou tão cansado quanto você.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma forma irregular como "melhor"/"pior": o esperanto usa sempre "pli bona" (mais bom) e "la plej bona" (o mais bom), nunca uma palavra nova.'],
    quiz: [
      {
        question: 'Como se diz "ela é a mais feliz" em esperanto?',
        options: ['Ŝi estas la plej feliĉa.', 'Ŝi estas pli feliĉa.', 'Ŝi estas tiel feliĉa.'],
        answer: 'Ŝi estas la plej feliĉa.',
        explanation: '"La plej" + adjetivo forma o superlativo: "a mais feliz". "Pli" sozinho seria só o comparativo ("mais feliz", sem "do que" especificado aqui).',
      },
    ],
  },
  {
    id: 'eo-g11',
    level: 'A2.2',
    title: 'A oração relativa com kiu',
    emoji: '🔗',
    summary: '"Kiu" ("que"/"o qual") liga uma oração a um substantivo anterior, e concorda com ele em número (kiu/kiuj) e em caso (kiu/kiun) — mas o caso vem da função de "kiu" DENTRO da oração relativa, não da palavra que ele substitui.',
    sections: [
      {
        text: '"Kiu" funciona como sujeito ou objeto da própria oração relativa. Se "kiu" é o sujeito da oração relativa, fica sem -n; se é o objeto, leva -n — mesmo que a palavra principal da frase não leve.',
        table: {
          head: ['Função de "kiu" na oração relativa', 'Forma', 'Exemplo'],
          rows: [
            ['Sujeito', 'kiu / kiuj', 'La viro, kiu laboras ĉi tie, estas mia amiko.'],
            ['Objeto direto', 'kiun / kiujn', 'La libroj, kiujn mi legas, estas bonaj.'],
          ],
        },
        examples: [
          ['La hundo, kiu kuras, estas mia.', 'O cachorro que está correndo é meu. ("kiu" é sujeito de "kuras")'],
          ['La amiko, kiun mi vidis, estas de Brazilo.', 'O amigo que eu vi é do Brasil. ("kiun" é objeto de "vidis")'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o caso do substantivo principal da frase, em vez de olhar a função de "kiu" dentro da oração relativa: em "la libroj, kiujn mi legas, estas bonaj", "libroj" (sujeito da frase principal) não tem -n, mas "kiujn" tem, porque dentro da oração relativa ele é o OBJETO de "legas".',
    ],
    quiz: [
      {
        question: 'Qual frase está certa para "o amigo que eu vi é do Brasil"?',
        options: ['La amiko, kiun mi vidis, estas de Brazilo.', 'La amiko, kiu mi vidis, estas de Brazilo.', 'La amikon, kiun mi vidis, estas de Brazilo.'],
        answer: 'La amiko, kiun mi vidis, estas de Brazilo.',
        explanation: '"Amiko" é o sujeito da frase principal (sem -n), mas dentro da oração relativa, "kiun" é o objeto de "vidis" (eu vi ELE) — por isso leva -n.',
      },
    ],
  },
];
