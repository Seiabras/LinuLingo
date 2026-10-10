import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do francês antigo — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wiktionary (seção "Old French" de cada palavra citada, com tabela de declinação/
 * conjugação — chevalier, rei, grant, petit, estre, avoir, le/la/li, mon/ma); Wikipedia (inglês)
 * "Old French", seção de gramática (dois casos, nascimento do artigo); "Old French Online"
 * (UT Austin, lrc.la.utexas.edu/eieol/ofrol), lições 1 e 2, que mostram o caso reto/oblíquo com
 * exemplos reais da Chanson de Roland e documentam a perda do sistema já dentro do próprio texto.
 */
export const GRAMMAR_FRO: GrammarTopic[] = [
  {
    id: 'fro-g1',
    level: 'A1.1',
    title: 'Ortografia: uma língua sem padrão fixo',
    emoji: '🪶',
    summary: 'O francês antigo não tinha ortografia padronizada — a mesma palavra aparece escrita de jeitos diferentes em manuscritos diferentes, até dentro do mesmo texto.',
    sections: [
      {
        text: 'Não havia uma academia ou um dicionário ditando “a” forma certa de escrever: cada escriba (muitas vezes influenciado pelo seu próprio dialeto regional) grafava do jeito que fazia sentido para ele. Por isso o Wiktionary lista várias formas “alternativas” para a mesma palavra do francês antigo — não são erros, são variações legítimas de manuscrito.',
        table: {
          head: ['Palavra (forma mais comum)', 'Outras grafias atestadas', 'Tradução'],
          rows: [
            ['pere', 'pedre', 'pai'],
            ['mere', 'medre', 'mãe'],
            ['frere', 'fredre', 'irmão'],
            ['franceis', 'françois, fraunceis', '(o idioma) francês'],
          ],
        },
        examples: [['Mon pere est chevalier.', 'Meu pai é cavaleiro.']],
      },
      {
        heading: 'Letras pronunciadas que o francês moderno perdeu',
        text: 'O "-s" final de "chevaliers" e o "-e" final de "meson" eram sempre pronunciados no francês antigo — foi só mais tarde, já no francês médio e moderno, que boa parte das consoantes finais virou muda.',
        examples: [['Li chevaliers est ci.', '(Aqui) o cavaleiro está.']],
      },
    ],
    pitfalls: ['Achar que uma grafia alternativa (como “pedre” em vez de “pere”) é erro: no francês antigo, as duas formas existiam de verdade, às vezes no mesmo texto.'],
    quiz: [
      {
        question: 'Por que o Wiktionary lista várias grafias diferentes para a mesma palavra do francês antigo?',
        options: ['Porque não havia ortografia padronizada — cada manuscrito escrevia do seu jeito', 'Porque são palavras diferentes com o mesmo significado', 'Porque uma das grafias está errada'],
        answer: 'Porque não havia ortografia padronizada — cada manuscrito escrevia do seu jeito',
        explanation: 'Sem uma autoridade central de ortografia, cada escriba (e cada região) grafava a palavra à sua maneira — por isso “pere” e “pedre” convivem como formas igualmente válidas.',
      },
    ],
  },
  {
    id: 'fro-g2',
    level: 'A1.1',
    title: 'O sistema de dois casos: reto e oblíquo',
    emoji: '⚔️',
    summary: 'O francês antigo ainda guardava dois dos seis casos do latim: o caso RETO (sujeito) e o caso OBLÍQUO (quase todo o resto) — muitos masculinos ganham um "-s" só no reto.',
    sections: [
      {
        text: 'O latim clássico tinha seis casos gramaticais; o francês antigo simplificou isso para só dois. O caso RETO (ou nominativo) marca o sujeito da frase; o caso OBLÍQUO serve para o objeto e depois de preposição. Muitos substantivos e adjetivos masculinos ganham um "-s" extra só no caso reto.',
        table: {
          head: ['Palavra', 'Caso reto (sujeito)', 'Caso oblíquo (objeto)'],
          rows: [
            ['cavaleiro', 'chevaliers', 'chevalier'],
            ['rei', 'reis', 'rei'],
            ['grande', 'granz', 'grant'],
            ['pequeno', 'petiz', 'petit'],
          ],
        },
        examples: [
          ['Li reis a un chevalier.', 'O rei (sujeito, reto) tem um cavaleiro (objeto, oblíquo).'],
          ['Li chevaliers est granz.', 'O cavaleiro (sujeito) é grande (também no reto, concordando).'],
        ],
      },
      {
        heading: 'Um sistema que já estava desmoronando',
        text: 'O curso acadêmico “Old French Online” (UT Austin) mostra que, já em trechos mais tardios da própria Chanson de Roland, as marcas de caso aparecem usadas de forma errada ou nem aparecem — prova de que a distinção reto/oblíquo estava se perdendo dentro do próprio período do francês antigo, não só depois dele.',
      },
    ],
    pitfalls: [
      'Achar que o "-s" do caso reto é marca de plural: “chevaliers” sozinho, no singular, já leva "-s" quando é sujeito — é caso, não número.',
      'Esperar que todo substantivo tenha essa distinção tão clara: muitas palavras (como "ami") têm formas reta e oblíqua iguais ou quase iguais.',
    ],
    quiz: [
      {
        question: 'Em “Li reis a un chevalier” (o rei tem um cavaleiro), por que “chevalier” não tem "-s"?',
        options: ['Porque é objeto (caso oblíquo), não sujeito', 'Porque está no plural', 'Porque é um erro do escriba'],
        answer: 'Porque é objeto (caso oblíquo), não sujeito',
        explanation: '"Chevalier" é o objeto do verbo "a" (tem) — caso oblíquo, sem o "-s" que só aparece no caso reto (sujeito), como em "li chevaliers".',
      },
    ],
  },
  {
    id: 'fro-g3',
    level: 'A1.2',
    title: 'O verbo estre (ser/estar)',
    emoji: '🧑',
    summary: 'Igual em português, o pronome de sujeito pode desaparecer: a terminação de "estre" já diz quem fala — sui, es, est, somes, estes, sont.',
    sections: [
      {
        text: 'Como em português, dizer “sui chevalier” já basta pra dizer “(eu) sou cavaleiro” — a terminação do verbo entrega a pessoa. O francês antigo distinguia “tu” (íntimo) de “vos” (cortês) desde essa época — a mesma distinção que o francês moderno guarda até hoje entre “tu” e “vous”.',
        table: {
          head: ['Pronome', 'Tradução', 'estre (presente)'],
          rows: [
            ['jo', 'eu', 'sui'],
            ['tu', 'tu (íntimo)', 'es'],
            ['il / ele', 'ele / ela', 'est'],
            ['nos', 'nós', 'somes'],
            ['vos', 'vós / você (cortês)', 'estes'],
            ['il (pl.)', 'eles', 'sont'],
          ],
        },
        examples: [
          ['Jo sui Linu.', 'Eu sou Linu.'],
          ['Vos estes chevalier.', 'Você é cavaleiro (tratamento cortês).'],
        ],
      },
    ],
    pitfalls: ['Confundir “es” (tu és, íntimo) com “est” (ele/ela é): são pessoas diferentes do mesmo verbo, parecidas na escrita.'],
    quiz: [
      {
        question: 'Como se diz “nós somos amigos” em francês antigo?',
        options: ['Nos somes ami.', 'Nos estes ami.', 'Vos somes ami.'],
        answer: 'Nos somes ami.',
        explanation: '"Nos" é a primeira pessoa do plural, com a forma "somes" do verbo "estre".',
      },
    ],
  },
  {
    id: 'fro-g4',
    level: 'A1.2',
    title: 'O verbo avoir (ter) e o artigo que nasceu',
    emoji: '🤲',
    summary: 'O verbo "avoir" (ter) já se conjuga quase como no francês moderno; e o artigo definido (le/la/li) é uma invenção do francês antigo — o latim clássico não tinha nenhum artigo.',
    sections: [
      {
        text: 'O latim clássico não tinha artigo definido nem indefinido: nem "o", nem "a", nem "um". O francês antigo criou o artigo "le/la/li" a partir do demonstrativo latino "ille" ("aquele") — e, como os substantivos, o artigo também muda pelo caso: "li" no reto (sujeito), "le" no oblíquo (objeto), "la" no feminino.',
        table: {
          head: ['Pronome', 'avoir (presente)'],
          rows: [
            ['jo', 'ai'],
            ['tu', 'as'],
            ['il / ele', 'a'],
            ['nos', 'avons'],
            ['vos', 'avez'],
            ['il (pl.)', 'ont'],
          ],
        },
        examples: [
          ['Jo ai un chien.', 'Eu tenho um cachorro.'],
          ['Li chevaliers a une meson.', 'O cavaleiro tem uma casa.'],
        ],
      },
      {
        heading: 'Do latim sem artigo ao francês com artigo',
        text: 'Essa é uma das poucas vezes em que dá pra ver, documentado em texto real, um artigo definido nascendo numa língua românica — o latim, já no aplicativo, nunca teve essa palavrinha pequena que hoje parece tão básica em português, francês, italiano e espanhol.',
      },
    ],
    pitfalls: ['Tentar usar "le/la/li" como se fosse só um "the" sem variação: a forma muda pelo caso (reto × oblíquo) e pelo gênero, ao contrário do artigo do francês moderno, que só varia por gênero.'],
    quiz: [
      {
        question: 'O latim clássico tinha artigo definido (“o”, “a”)?',
        options: ['Não — o artigo nasceu depois, no francês antigo', 'Sim, igual ao francês moderno', 'Só no plural'],
        answer: 'Não — o artigo nasceu depois, no francês antigo',
        explanation: 'O latim clássico não tinha artigos; "le/la/li" vêm do demonstrativo latino "ille" e se gramaticalizaram já dentro do período do francês antigo.',
      },
    ],
  },
  {
    id: 'fro-g5',
    level: 'A2.1',
    title: 'O caso no plural: li chevalier, les chevaliers',
    emoji: '👥',
    summary: 'O sistema reto/oblíquo (fro-g2) também vale no plural — e, de um jeito que confunde todo aluno, as marcas se invertem: o reto plural fica SEM "-s", e o oblíquo plural GANHA "-s".',
    sections: [
      {
        text: 'O curso acadêmico "Old French Online" (UT Austin) mostra o paradigma completo da declinação masculina regular (tipo "mur"): no SINGULAR, o reto leva "-s" e o oblíquo não; no PLURAL, é o oposto — o reto não leva "-s" e o oblíquo leva.',
        table: {
          head: ['Caso', 'Singular', 'Plural'],
          rows: [
            ['Reto (sujeito)', 'li chevaliers', 'li chevalier'],
            ['Oblíquo (objeto)', 'le chevalier', 'les chevaliers'],
          ],
        },
        examples: [
          ['Li chevalier sunt forz.', 'Os cavaleiros (sujeito) são fortes.'],
          ['Jo vei les chevaliers.', 'Eu vejo os cavaleiros (objeto).'],
        ],
      },
      {
        heading: 'Por que isso confunde',
        text: 'No francês moderno, o "-s" do plural é só silencioso e sempre está lá, sem exceção. No francês antigo, o "-s" tinha duas funções diferentes acumuladas (caso E número), e o resultado é que a MESMA palavra, "chevaliers", pode ser plural reto (sem -s: "chevalier") ou plural oblíquo (com -s): tudo depende do papel na frase, não só da quantidade.',
      },
    ],
    pitfalls: ['Achar que "li chevalier" (sem -s) é singular: no caso reto plural, é exatamente o contrário — o "-s" desaparece quando são VÁRIOS cavaleiros sujeitos da frase.'],
    quiz: [
      {
        question: 'Como se diz "os cavaleiros são fortes" (os cavaleiros como SUJEITO, plural)?',
        options: ['Li chevalier sunt forz.', 'Li chevaliers sunt forz.', 'Les chevaliers sunt forz.'],
        answer: 'Li chevalier sunt forz.',
        explanation: 'No caso reto PLURAL, a marca "-s" desaparece — o oposto do singular, em que "-s" marca justamente o reto.',
      },
    ],
  },
  {
    id: 'fro-g6',
    level: 'A2.1',
    title: 'Cist, cil: os demonstrativos "este" e "aquele"',
    emoji: '👉',
    summary: 'O francês antigo distingue dois demonstrativos que o moderno fundiu em só um "ce": "cist/cest" (este, perto) e "cil/cel" (aquele, longe) — e cada um também varia pelo caso.',
    sections: [
      {
        text: 'Como os substantivos, os demonstrativos têm forma reta e oblíqua: "cist" (reto) e "cest" (oblíquo) para o que está perto; "cil" (reto) e "cel" (oblíquo) para o que está longe. É dessas formas oblíquas, "cest" e "cel", que vêm o "ce"/"cet" e o "cel/celui" do francês moderno.',
        table: {
          head: ['Distância', 'Reto (sujeito)', 'Oblíquo (objeto)'],
          rows: [
            ['Perto (este)', 'cist chevaliers', 'cest chevalier'],
            ['Longe (aquele)', 'cil reis', 'cel rei'],
          ],
        },
        examples: [
          ['Cist chevaliers est mes amis.', 'Este cavaleiro é meu amigo.'],
          ['Jo vei cel rei.', 'Eu vejo aquele rei.'],
        ],
      },
    ],
    pitfalls: ['Confundir "cist"/"cil" (reto) com "cest"/"cel" (oblíquo): a escolha segue a mesma lógica de caso de "chevaliers"/"chevalier" (fro-g2), não é uma variação livre.'],
    quiz: [
      {
        question: 'Qual demonstrativo francês antigo indica algo LONGE (aquele), no caso reto?',
        options: ['cil', 'cist', 'cel'],
        answer: 'cil',
        explanation: '"Cil" é o reto de longe (aquele); "cist" é o reto de perto (este); "cel" é o oblíquo de longe.',
      },
    ],
  },
  {
    id: 'fro-g7',
    level: 'A2.2',
    title: 'O imperfeito: ere, estoie, avoie',
    emoji: '🕰️',
    summary: 'O imperfeito do francês antigo já tem a terminação "-oi-" que sobrevive no francês moderno ("j\'avais", eu tinha) — mas "estre" guarda, ao lado da forma regular, uma forma mais curta e mais antiga: "ere".',
    sections: [
      {
        text: 'O Wiktionary (seção "Old French", tabela de conjugação de "estre" e "avoir") documenta duas séries pro imperfeito de "estre": a mais arcaica, com "er-" ("ere", eu era), e a mais nova, com "estoi-" ("estoie"), que é a que sobrevive no francês moderno ("j\'étais"). Já "avoir" segue só a série regular com "-oi-": "avoie" (eu tinha).',
        table: {
          head: ['Pronome', 'estre (imperfeito, forma antiga)', 'avoir (imperfeito)'],
          rows: [
            ['jo', 'ere / estoie', 'avoie'],
            ['tu', 'eres / estoies', 'avoies'],
            ['il', 'ert / estoit', 'avoit'],
          ],
        },
        examples: [
          ['Jadis ert uns reis riches.', 'Antigamente havia (era) um rei rico.'],
          ['Jo avoie un chevalier.', 'Eu tinha um cavaleiro.'],
        ],
      },
    ],
    pitfalls: ['Achar que "ere" é um verbo diferente de "estre": é só uma forma mais antiga do imperfeito do MESMO verbo, ao lado de "estoie".'],
    quiz: [
      {
        question: 'Qual é a forma mais antiga do imperfeito "eu era", de "estre"?',
        options: ['ere', 'estoie', 'avoie'],
        answer: 'ere',
        explanation: '"Ere" é a forma mais arcaica, documentada ao lado da mais nova "estoie" (que é a que sobrevive no francês moderno "j\'étais").',
      },
    ],
  },
  {
    id: 'fro-g8',
    level: 'A2.2',
    title: '"Ne...mie": o reforço que a negação ainda não precisava',
    emoji: '🚫',
    summary: 'No francês antigo, "ne" já bastava pra negar sozinho — mas já aparecia reforçado por palavras como "mie" (originalmente "migalha") e "pas" (originalmente "passo"), o início de um processo que terminaria no "ne...pas" do francês moderno.',
    sections: [
      {
        text: 'Esse processo (um advérbio comum virando parte obrigatória da negação, com o tempo) é bem documentado na história do francês e chamado de "ciclo de Jespersen". No francês antigo, "ne" sozinho ("jo ne sui chevaliers", eu não sou cavaleiro) já era uma negação completa e correta — "mie"/"pas" eram só reforços OPCIONAIS, usados pra dar ênfase, do jeito que "nem um pouco" reforça um "não" em português.',
        table: {
          head: ['Negação', 'Sentido literal original', 'Uso'],
          rows: [
            ['ne...mie', '"não...uma migalha" (nem um pouco)', 'reforço opcional, comum no francês antigo'],
            ['ne...pas', '"não...um passo"', 'reforço opcional, que se tornaria obrigatório só depois'],
          ],
        },
        examples: [
          ['Jo ne sui mie chevaliers.', 'Eu não sou cavaleiro (de jeito nenhum).'],
          ['Il ne vait pas a l\'eglise.', 'Ele não vai à igreja (nem um passo).'],
        ],
      },
      {
        heading: 'Um processo que ainda não tinha terminado',
        text: 'No francês moderno, "pas" se tornou obrigatório na fala ("je ne sais pas"), e "mie" caiu totalmente em desuso. No francês antigo, estamos ainda no início desse processo: "ne" sozinho já nega, e "mie"/"pas" são só um extra, não uma obrigação gramatical.',
      },
    ],
    pitfalls: ['Achar que "ne" sozinho, sem "mie"/"pas", é uma negação incompleta: no francês antigo, "ne" sozinho já é uma negação perfeitamente correta e comum.'],
    quiz: [
      {
        question: 'No francês antigo, "mie" e "pas" depois de "ne" eram...',
        options: ['Reforços opcionais, usados pra dar ênfase', 'Obrigatórios, como no francês moderno', 'Palavras sem nenhum sentido'],
        answer: 'Reforços opcionais, usados pra dar ênfase',
        explanation: '"Ne" já bastava sozinho pra negar; "mie" (migalha) e "pas" (passo) eram reforços opcionais — o início do processo que, só depois, tornaria "pas" obrigatório.',
      },
    ],
  },
];
