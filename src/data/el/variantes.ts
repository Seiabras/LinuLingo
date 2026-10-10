import type { LanguageVariant } from '../types';

/**
 * Os dialetos do grego (decisão do dono, 10/10/2026): a Grécia (o padrão do curso, o grego moderno
 * comum) e Chipre, onde o grego é língua oficial e o cipriota é a fala do dia a dia. Vocabulário no
 * formato [padrão, cipriota, explicação, nota]; nas histórias, a narração segue o padrão e as falas
 * trazem o cipriota, na grafia mais comum. Como o curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em grego e em inglês («Κυπριακή διάλεκτος», «Cypriot Greek», «Standard Modern
 * Greek», «Halloumi», «Kataklysmos», consultadas em 10/10/2026).
 */
export const VARIANTS_EL: LanguageVariant[] = [
  {
    code: 'el-GR',
    country: 'GRC',
    kind: 'dialeto',
    speechLocale: 'el-GR',
    name: 'Grego da Grécia',
    flag: '🇬🇷',
    summary: 'O padrão do curso: o grego moderno comum (κοινή νεοελληνική), com a pronúncia de Atenas, o da escola, da TV e dos jornais.',
    card: {
      id: 'el-gr-c1',
      title: 'Por que o grego de Atenas?',
      emoji: '🇬🇷',
      history:
        'O grego tem a história escrita mais longa da Europa, de mais de três mil anos. Depois da independência da Grécia, no século XIX, o país viveu a “questão da língua”: a escola e o governo usavam a katharévoussa, uma forma “purificada” e arcaica, e o povo falava a demótica. Só em 1976 a demótica virou a língua oficial, e em 1982 o país abandonou os vários acentos antigos e passou ao sistema monotônico, com um acento só. O padrão de hoje tem como base a fala do sul, do Peloponeso e de Atenas.',
      culture_tip:
        'Na Grécia, o “sim” é “ναι” (né), que soa como um “não” para quem fala português, e o “não” é “όχι” (óhi), às vezes dito só com um levantar de sobrancelhas e um estalo de língua. O dia do santo do nome (ονομαστική γιορτή) é comemorado como um aniversário. E o café se toma devagar: um frappé ou um freddo pode durar a tarde inteira.',
      grammar_why:
        'O padrão do curso: o “και” (e) dito [ce], o “είναι” (é, são), o “τι” (o quê), o “εδώ” e o “εκεί” (aqui, ali). Em Chipre, cada um desses muda.',
      grammar_examples: [
        ['Τι κάνεις; Είσαι καλά;', 'Como vai? Tudo bem? (ti kánis? íse kalá?)'],
        ['Ο καφές είναι εδώ.', 'O café está aqui. (o kafés íne edó)'],
        ['Ναι, πάμε!', 'Sim, vamos! (ne, páme!)'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── CHIPRE ─────────────────────────────
  {
    code: 'el-CY',
    country: 'CYP',
    kind: 'dialeto',
    speechLocale: 'el-GR',
    name: 'Grego de Chipre (cipriota)',
    flag: '🇨🇾',
    summary:
      'O grego de Chipre: o padrão na escola e no governo, e o cipriota na fala de todo dia, com consoantes duplas, o “κ” que vira “tch” antes de “e” e “i”, o “-ν” do fim que não cai e palavras próprias: ήντα, έν, ποδά, ποτζιεί.',
    card: {
      id: 'el-cy-c1',
      title: 'Ήντα μου λαλείς;',
      emoji: '🇨🇾',
      history:
        'O grego é falado em Chipre há mais de três mil anos. Separado da Grécia pelo mar, o cipriota guardou formas antigas, como as consoantes duplas e o “-ν” do fim das palavras, e recebeu palavras do francês dos cruzados, do italiano dos venezianos, do turco dos otomanos e do inglês dos britânicos, que governaram a ilha até a independência, em 1960. A República de Chipre tem duas línguas oficiais, o grego e o turco. Na escola e no governo se usa o grego padrão, e na fala do dia a dia, o cipriota: os cipriotas passam de um para o outro conforme a situação.',
      culture_tip:
        'O queijo halloumi (χαλλούμι), que se come grelhado, é cipriota, com denominação de origem protegida pela União Europeia. Nas tavernas se pede o “μεζέ”, uma sequência de pequenos pratos que pode chegar a vinte. E na festa do Κατακλυσμός, no Pentecostes, as cidades do litoral fazem festa à beira-mar, com jogos de água e poesia improvisada, os τσιαττιστά.',
      grammar_why:
        'O cipriota tem gramática e palavras próprias: (1) “έν” no lugar de “είναι” (é, são): “Έν καλό” (é bom); (2) “ήντα” no lugar de “τι” (o quê): “Ήντα κάμνεις;” (o que você está fazendo?); (3) “ποδά” e “ποτζιεί” no lugar de “εδώ” e “εκεί” (aqui, ali); (4) o “-ν” do fim continua: “πάμεν” (vamos), “θέλουμεν” (queremos); (5) “τζιαι” no lugar de “και” (e), com o “κ” que vira “tch”.',
      grammar_examples: [
        ['Ήντα κάμνεις;', 'O que você está fazendo? / Como vai? (padrão: Τι κάνεις;)'],
        ['Έν καλό το χαλλούμι!', 'O halloumi é bom! (padrão: Είναι καλό)'],
        ['Έλα ποδά!', 'Vem aqui! (padrão: Έλα εδώ!)'],
        ['Πάμεν ποτζιεί τζιαι τρώμεν.', 'Vamos lá e comemos. (padrão: Πάμε εκεί και τρώμε.)'],
      ],
      character_guide: [
        ['τζ / τσ', 'o “κ” antes de “e” e “i” soa “tch”, e o cipriota escreve “τζ”', 'τζιαι (και), ποτζιεί (εκεί)'],
        ['λλ, ττ, κκ', 'consoantes duplas, que se pronunciam mais longas', 'χαλλούμι, κκελλέ'],
      ],
    },
    pronunciation: [
      'As consoantes duplas são pronunciadas duplas, mais longas e fortes: “χαλλούμι” tem um “l” comprido.',
      'O “κ” antes de “e” e “i” vira um “tch”: “και” soa “tche”, “εκεί” soa “etchí”.',
      'O “-ν” do fim das palavras, que o padrão perdeu, continua: “πάμεν”, “θέλουμεν”.',
      'O “σ” e o “ζ” antes de “i” podem soar como “ch” e “j”.',
      'A melodia é própria, e um grego da Grécia reconhece um cipriota na primeira frase.',
    ],
    vocab: [
      ['είναι', 'έν', 'é, são', 'a cópula do cipriota'],
      ['τι', 'ήντα', 'o quê', '“Ήντα κάμνεις;”'],
      ['εδώ', 'ποδά', 'aqui'],
      ['εκεί', 'ποτζιεί', 'ali, lá'],
      ['και', 'τζιαι', 'e', 'o “κ” que vira “tch”'],
      ['κάνω', 'κάμνω', 'fazer', 'forma antiga, com o “μ”'],
      ['πάμε', 'πάμεν', 'vamos', 'o “-ν” do fim que não cai'],
      ['κεφάλι', 'κκελλέ', 'cabeça', 'do turco “kelle”'],
      ['λέω', 'λαλώ', 'dizer, falar', '“Ήντα μου λαλείς;” = o que você está me dizendo?'],
    ],
    stories: [
      {
        id: 'el-h5',
        variant: 'el-CY',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Χαλλούμι στη Λευκωσία',
        emoji: '🧀',
        summary: 'Em Nicósia, o amigo Andreas leva Linu a uma taverna para comer meze, e Linu aprende o cipriota da mesa: ήντα, έν, τζιαι.',
        cultural_context:
          'Nas tavernas de Chipre, pede-se o meze, uma sequência de pratinhos que vai chegando sem parar: halloumi grelhado, azeitonas, salada, carne. O cipriota é a fala do dia a dia, e o grego padrão é o da escola.',
        start: 'start',
        glossary: [
          ['μεζές', 'meze, a sequência de pratinhos'],
          ['χαλλούμι', 'halloumi, o queijo de Chipre'],
          ['ήντα', 'o quê (padrão: τι)'],
          ['έν', 'é (padrão: είναι)'],
          ['τζιαι', 'e (padrão: και)'],
        ],
        nodes: {
          start: {
            emoji: '🏺',
            text: 'Ο Λίνου είναι στη Λευκωσία με τον φίλο του, τον Αντρέα. Ο Αντρέας λέει: «Ήντα θέλεις να φάμεν; Μεζέ;»',
            translation: 'Linu está em Nicósia com o amigo Andreas. Andreas diz: “O que você quer comer? Meze?”',
            choices: [
              { text: '«Ήντα; Τι σημαίνει ήντα;»', translation: '“Ínta? O que quer dizer ínta?”', next: 'inta' },
            ],
          },
          inta: {
            emoji: '😄',
            text: 'Ο Αντρέας γελάει: «Στην Κύπρο λέμε ήντα. Έν το “τι”!» Ο σερβιτόρος φέρνει χαλλούμι, ελιές και σαλάτα.',
            translation: 'Andreas ri: “Em Chipre a gente diz ínta. É o ‘ti’ (o quê)!” O garçom traz halloumi, azeitonas e salada.',
            choices: [
              { text: 'Ο Λίνου τρώει το χαλλούμι.', translation: 'Linu come o halloumi.', next: 'come' },
              {
                text: 'Ο Λίνου νομίζει ότι το χαλλούμι είναι γλυκό.',
                translation: 'Linu acha que o halloumi é um doce.',
                wrong: 'O halloumi é um queijo salgado de Chipre, que se come grelhado. Não é doce!',
              },
            ],
          },
          come: {
            emoji: '🧀',
            text: '«Πολύ ωραίο!» λέει ο Λίνου. Ο Αντρέας απαντά: «Έν το καλύτερο χαλλούμι της Κύπρου!» Μετά έρχονται κι άλλα πιάτα.',
            translation: '“Muito bom!”, diz Linu. Andreas responde: “É o melhor halloumi de Chipre!” Depois chegam mais pratos.',
            choices: [
              { text: '«Έν πολλά καλό!»', translation: '“É muito bom!” (em cipriota)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🇨🇾',
            text: 'Ο Αντρέας χειροκροτεί: «Μιλάς κυπριακά τζιόλας!»',
            translation: 'Andreas bate palmas: “Você já fala cipriota!”',
            ending: {
              tone: 'bom',
              title: 'Έν πολλά καλό!',
              message: 'Você comeu meze em Nicósia e aprendeu o cipriota da mesa: ήντα, έν, τζιαι e πάμεν.',
            },
          },
        },
      },
      {
        id: 'el-h6',
        variant: 'el-CY',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Ποδά ή ποτζιεί;',
        emoji: '🗺️',
        summary: 'Em Limassol, Linu se perde a caminho da praia e uma senhora explica o caminho em cipriota, com ποδά e ποτζιεί.',
        cultural_context:
          'Limassol é a segunda maior cidade de Chipre, à beira-mar. Os cipriotas dizem “ποδά” (aqui) e “ποτζιεί” (lá), onde o grego padrão diz “εδώ” e “εκεί”.',
        start: 'start',
        glossary: [
          ['ποδά', 'aqui (padrão: εδώ)'],
          ['ποτζιεί', 'lá, ali (padrão: εκεί)'],
          ['η θάλασσα', 'o mar'],
          ['δεξιά, αριστερά', 'direita, esquerda'],
        ],
        nodes: {
          start: {
            emoji: '🏖️',
            text: 'Ο Λίνου είναι στη Λεμεσό και θέλει να πάει στη θάλασσα. Ρωτάει μια κυρία: «Συγγνώμη, πού είναι η θάλασσα;»',
            translation: 'Linu está em Limassol e quer ir ao mar. Ele pergunta a uma senhora: “Com licença, onde fica o mar?”',
            choices: [
              { text: 'Η κυρία απαντά.', translation: 'A senhora responde.', next: 'resposta' },
            ],
          },
          resposta: {
            emoji: '👵',
            text: 'Η κυρία λέει: «Η θάλασσα έν ποτζιεί, δεξιά. Ποδά έν ο δρόμος για την αγορά.»',
            translation: 'A senhora diz: “O mar fica lá, à direita. Aqui é o caminho para o mercado.”',
            choices: [
              {
                text: 'Ο Λίνου πάει δεξιά.',
                translation: 'Linu vai para a direita.',
                next: 'mar',
              },
              {
                text: 'Ο Λίνου μένει ποδά, στον δρόμο της αγοράς.',
                translation: 'Linu fica aqui, no caminho do mercado.',
                wrong: 'A senhora disse que o mar fica “ποτζιεί” (lá), à direita. “Ποδά” (aqui) é o caminho do mercado.',
              },
            ],
          },
          mar: {
            emoji: '🌊',
            text: 'Μετά από πέντε λεπτά, ο Λίνου βλέπει τη θάλασσα. Γυρίζει και φωνάζει στην κυρία: «Ευχαριστώ πολλά!»',
            translation: 'Depois de cinco minutos, Linu vê o mar. Ele se vira e grita para a senhora: “Muito obrigado!”',
            choices: [
              { text: 'Η κυρία απαντά: «Να ’σαι καλά, γιε μου!»', translation: 'A senhora responde: “De nada, meu filho!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: 'Ο Λίνου γελάει και κάθεται στην παραλία. Τώρα ξέρει: ποδά έν εδώ, ποτζιεί έν εκεί!',
            translation: 'Linu ri e se senta na praia. Agora ele sabe: ποδά é aqui, ποτζιεί é lá!',
            ending: {
              tone: 'bom',
              title: 'Ποδά και ποτζιεί',
              message: 'Você aprendeu os advérbios do cipriota, ποδά (aqui) e ποτζιεί (lá), e o έν (é).',
            },
          },
        },
      },
    ],
  },
];
