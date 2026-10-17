import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do guarani mbyá, do A1.1 ao A2.2.
 *
 * A2 (17/10/2026): os paradigmas vêm de [Martins 2003] Marci Fileti Martins, «Descrição e análise de
 * aspectos da gramática do Guarani Mbyá», tese de doutorado, Unicamp, 2003 (variedade de Morro dos
 * Cavalos e Maciambu, SC; PDF da Biblioteca Digital Curt Nimuendajú, páginas lidas na imagem; cito a
 * página impressa): Quadro 1, p. 36 (prefixos ativos e inativos), Quadro 3, p. 45 (pronomes livres e
 * clíticos), Quadro 4, p. 50. Os exemplos e as regras de detalhe vêm de [Dooley 2006], o léxico
 * guarani-português do dialeto mbyá (SIL), que traz notas gramaticais nos verbetes dos prefixos e
 * partículas; cada forma está com a página e foi conferida na imagem quando o texto extraído perde
 * letras (ẽ, ĩ, ỹ). Nenhuma forma foi montada: todas as conjugações das tabelas aparecem no léxico.
 *
 * A1 (antes): Traços
 * conferidos especificamente para o mbyá (não copiados do guarani paraguaio nem do nheengatu):
 * Wikipédia em inglês («Mbyá Guaraní language», citando Guillaume Thomas e Robert A. Dooley),
 * Wikipédia em português («Língua guarani mbyá»), o Wiktionary em inglês (categoria «Mbya Guarani»,
 * citando Dooley 2016) e Sérgio Florentino da Silva, «O Sistema De Contagem Guarani» (REVEMAT,
 * UFSC, 2018), sobre as aldeias mbyá Itaty/Morro dos Cavalos e M'Biguaçu (SC).
 */
export const GRAMMAR_GUN: GrammarTopic[] = [
  {
    id: 'gun-g1',
    level: 'A1.1',
    title: 'Vogais nasais, puso e o som do x',
    emoji: '🔤',
    summary: 'O guarani mbyá tem doze vogais (seis orais e seis nasais), uma pausa na garganta (puso) e o som “x”, parecido com “ch”/“sh”.',
    sections: [
      {
        text: 'O mbyá tem 12 fonemas vocálicos: seis orais e seis nasais — a nasalidade muda o som da vogal inteira, não é só um acento. O apóstrofo (chamado puso) marca uma pausa curta na garganta (uma oclusiva glotal), um som próprio da língua, não um sinal de pontuação: “ha\'e” (ele, ela) e “tapi\'i” (anta) soariam diferente sem ele. A letra “x” representa um som parecido com o “ch” do francês ou o “sh” do inglês, como em “xee” (eu) e “xamoi” (avô). O acento de intensidade cai quase sempre na última sílaba (oxítona).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ã, ẽ, ĩ, õ, ũ', 'vogal nasal (sai pelo nariz)', 'xee nhandeayvu (minha língua)'],
            ['\' (puso)', 'pausa curta na garganta', 'ha\'e (ele, ela), ka\'i (macaco)'],
            ['x', 'como “ch”/“sh”', 'xee (eu), xondaro (guardião)'],
            ['nh', 'como o “nh” de “ninho”', 'nhe\'e (espírito), nhanderu (Deus)'],
            ['y', 'vogal própria do guarani, entre “u” e “i”', 'y (água), yvy (terra)'],
          ],
        },
        examples: [
          ['Aguyjevete!', 'Bem-vindo(a)! / Muito obrigado(a)!'],
          ['Nhandeayvu.', 'Nossa língua.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o puso (\'): sem ele, palavras como “ha\'e” e “tapi\'i” perdem a pausa que as distingue.',
      'Ler o “x” como a letra “x” do português (de “táxi” ou “exame”): no mbyá ele sempre soa como “ch”/“sh”.',
    ],
    quiz: [
      {
        question: 'Quantos fonemas vocálicos tem o guarani mbyá, segundo a linguística?',
        options: ['12 (seis orais e seis nasais)', '5, como o português', '20'],
        answer: '12 (seis orais e seis nasais)',
        explanation: 'A língua distingue sistematicamente vogais orais e nasais, o que dobra o número de vogais em relação ao português.',
      },
      {
        question: 'Como soa a letra “x” no guarani mbyá?',
        options: ['Como “ch”/“sh”', 'Como o “x” de “táxi”', 'É muda'],
        answer: 'Como “ch”/“sh”',
        explanation: 'Palavras como “xee” (eu) e “xamoi” (avô) usam esse som, diferente do “x” do português.',
      },
    ],
  },
  {
    id: 'gun-g2',
    level: 'A1.1',
    title: 'Pronomes e frases sem o verbo “ser”',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais (com um “nós” que inclui quem ouve e outro que não inclui) e frases que dispensam um verbo “ser”.',
    sections: [
      {
        text: 'O guarani mbyá não tem um verbo equivalente a “ser”: duas palavras lado a lado já formam uma frase completa, como em “xee kunha” (eu [sou] mulher). Um exemplo documentado pelos linguistas mostra o mesmo padrão com um adjetivo: “kunha ipuku” (lit. “mulher ela-alta”) equivale a “a mulher é alta”. Os pronomes distinguem dois tipos de “nós”, uma marca que o português não faz: “nhande” inclui a pessoa com quem se fala, e “ore” não inclui.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['xee', 'eu'],
            ['ndee', 'tu, você'],
            ['ha\'e', 'ele, ela'],
            ['nhande', 'nós (incluindo quem ouve)'],
            ['ore', 'nós (sem incluir quem ouve)'],
            ['peẽ', 'vocês'],
            ['ha\'e kuery', 'eles, elas'],
          ],
        },
        examples: [
          ['Xee kunha.', 'Eu sou mulher.'],
          ['Ha\'e xamoi.', 'Ele é o ancião.'],
          ['Nhande reko.', 'Nosso jeito de ser (de todos nós).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “ser”/“estar”: no mbyá a frase se monta só com as duas palavras, sem verbo de ligação.',
      'Confundir “nhande” (nós incluindo quem ouve) com “ore” (nós sem incluir quem ouve): trocar um pelo outro muda quem está incluído na frase.',
    ],
    quiz: [
      { question: 'Como se diz “eu sou mulher”?', options: ['Xee kunha.', 'Xee ha\'e kunha.', 'Kunha xee ikatu.'], answer: 'Xee kunha.', explanation: 'O mbyá não usa verbo “ser”: pronome e predicado ficam lado a lado.' },
      { question: '“Nhande” é usado quando…', options: ['quem ouve está incluído no “nós”', 'quem ouve não está incluído', 'só se fala de uma pessoa'], answer: 'quem ouve está incluído no “nós”', explanation: 'Para excluir quem ouve, usa-se “ore”.' },
    ],
  },
  {
    id: 'gun-g3',
    level: 'A1.2',
    title: 'Kova\'e e o adjetivo depois do nome',
    emoji: '👉',
    summary: 'O demonstrativo “kova\'e” (este, esta, isto) aponta para algo, e o adjetivo vem sempre depois do substantivo que descreve.',
    sections: [
      {
        text: 'Para apontar ou apresentar algo, o mbyá usa o demonstrativo “kova\'e” antes do nome: um exemplo registrado pelos linguistas é “kova\'e oo porã” (esta casa bonita). Repare na ordem: primeiro o demonstrativo, depois o substantivo, e só então o adjetivo — nunca o adjetivo antes do nome, como às vezes acontece em português (“uma bonita casa”).',
        table: {
          head: ['Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['kova\'e + substantivo', 'Kova\'e tekoa.', 'Esta é a aldeia.'],
            ['kova\'e + substantivo + adjetivo', 'Kova\'e tekoa porã.', 'Esta aldeia é bonita.'],
            ['substantivo + adjetivo (sem demonstrativo)', 'Jagua guaxu.', 'O cachorro é grande.'],
          ],
        },
        examples: [
          ['Kova\'e y.', 'Isto é a água.'],
          ['Yva pytã.', 'O céu é vermelho.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o adjetivo antes do substantivo, como em português: no mbyá ele vem sempre depois.',
      'Usar “kova\'e” sozinho esperando que ele já signifique “é”: ele só aponta (“este/esta/isto”), quem liga a frase é a ordem das palavras.',
    ],
    quiz: [
      { question: 'Qual é a ordem certa para “esta aldeia bonita”?', options: ['Kova\'e tekoa porã.', 'Kova\'e porã tekoa.', 'Porã kova\'e tekoa.'], answer: 'Kova\'e tekoa porã.', explanation: 'Demonstrativo, depois substantivo, depois adjetivo — essa é a ordem documentada para o mbyá.' },
      { question: 'O que “kova\'e” quer dizer?', options: ['Este, esta, isto', 'Muito', 'Sim'], answer: 'Este, esta, isto', explanation: 'É o demonstrativo usado para apontar algo perto de quem fala.' },
    ],
  },
  {
    id: 'gun-g4',
    level: 'A1.2',
    title: 'Contar de cinco em cinco: peteĩ, mokoĩ, mboapy, irundy',
    emoji: '✋',
    summary: 'A contagem tradicional mbyá tem como base o número cinco e organiza os números em pares.',
    sections: [
      {
        text: 'Uma pesquisa de campo nas aldeias mbyá Itaty (Morro dos Cavalos) e M\'Biguaçu, em Santa Catarina, registrou que a contagem tradicional é feita de cinco em cinco — o número de dedos de uma mão — e que, dentro de cada grupo de cinco, os mbyá contam formando pares, porque várias coisas do mundo vêm aos pares: o sol e a lua, o homem e a mulher, as duas orelhas. Por isso “peteĩ” (um) significa literalmente “um só, sem par”, “mokoĩ” (dois) é “um par”, “mboapy” (três) é o “início de um novo par” e “irundy” (quatro) é “dois pares”. O número cinco fecha a contagem e começa um novo grupo de cinco.',
        table: {
          head: ['Número', 'Palavra', 'Sentido literal'],
          rows: [
            ['1', 'peteĩ', 'um só, sem par'],
            ['2', 'mokoĩ', 'um par'],
            ['3', 'mboapy', 'início de um novo par'],
            ['4', 'irundy', 'dois pares'],
          ],
        },
        examples: [
          ['Peteĩ jagua.', 'Um cachorro.'],
          ['Mokoĩ ava.', 'Dois homens.'],
          ['Irundy mitã.', 'Quatro crianças.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a lógica da contagem mbyá é igual à do guarani paraguaio: no dia a dia do Paraguai, a maioria usa os números do espanhol a partir do quatro; a contagem tradicional mbyá, em vez disso, é pensada em pares dentro de grupos de cinco.',
      'Traduzir “mboapy” só como “três”, sem perceber que a própria palavra guarda a ideia de “começar um novo par”.',
    ],
    quiz: [
      { question: 'Em que número a contagem tradicional mbyá é baseada?', options: ['Cinco', 'Dez', 'Vinte'], answer: 'Cinco', explanation: 'A base cinco vem do número de dedos de uma mão, segundo a pesquisa de campo nas aldeias Itaty e M\'Biguaçu (SC).' },
      { question: 'O que “mokoĩ” significa literalmente?', options: ['Um par', 'Sem par', 'Dois pares'], answer: 'Um par', explanation: '“Mokoĩ” (dois) é entendido como a formação do primeiro par dentro do grupo de cinco.' },
    ],
  },

  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'gun-g5',
    level: 'A2.1',
    title: 'O verbo e a pessoa: a-, ere-, o-, ja-, oro-, pe-',
    emoji: '🧑‍🤝‍🧑',
    summary: 'O verbo mbyá sempre leva na frente um prefixo que diz quem faz a ação: a- (eu), ere- (você), o- (ele, eles), ja- (nós com você), oro- (nós sem você), pe- (vocês).',
    sections: [
      {
        // Martins 2003, p. 36 (Quadro 1, «pronomes ativos»: a-, ja-, oro-(ro-), ere-(re-), pe-, o-) e p. 50;
        // Dooley 2006: a- (p. 1, «Indica sujeito da 1a pessoa do singular»), -exa (p. 42), -karu (p. 81)
        text: 'No léxico, o verbo aparece só pela raiz, com um hífen: “-exa” (ver), “-karu” (comer), “-ke” (dormir). O hífen avisa que falta alguma coisa na frente: o prefixo de pessoa. Sem ele, o verbo não se usa. São seis prefixos, e o da terceira pessoa (o-) serve tanto para “ele, ela” como para “eles, elas”. Como nos pronomes, há dois “nós”: ja- inclui quem ouve, oro- não inclui. Não há tempo verbal no prefixo: “aexa” pode ser “vejo” ou “vi”, e o contexto decide.',
        // todas as formas de -exa estão no léxico: aexa (p. 12, «ange ygua py avaẽ vy aexa»), erexa (p. 119),
        // oexa (p. 35, «oexa peteĩ ava viu um homem»), jaexa (p. 122), oroexa (p. 132), pexa (p. 99)
        table: {
          head: ['Pessoa', 'Prefixo', '-exa (ver)', 'Tradução'],
          rows: [
            ['eu', 'a-', 'aexa', 'eu vi'],
            ['você', 'ere- (re-)', 'erexa', 'você viu'],
            ['ele, ela, eles, elas', 'o-', 'oexa', 'viu, viram'],
            ['nós (com quem ouve)', 'ja- (nha-)', 'jaexa', 'vimos'],
            ['nós (sem quem ouve)', 'oro- (ro-)', 'oroexa', 'vimos'],
            ['vocês', 'pe-', 'pexa', 'vocês viram'],
          ],
        },
        examples: [
          // Dooley 2006, p. 122 (nhande) e p. 132 (ore), lidos na imagem (pavẽ)
          ['Nhande pavẽ jaexa tata.', 'Todos nós (vocês também) vimos o fogo.'],
          ['Ore pavẽ oroexa.', 'Todos nós (mas não vocês) vimos.'],
          // Dooley 2006, p. 119
          ['Ndee pa erexa mboi?', 'Você viu a cobra?'],
          // Dooley 2006, p. 99
          ['Mamogua pa pexa?', 'Vocês viram um habitante de onde?'],
        ],
      },
      {
        heading: 'Nha- antes de som nasal, e as ordens',
        // Dooley 2006, p. 74 (-jou): «nhamba'eapo vy jajou va'erã peráta»; p. 28 (e-: «Indica sujeito da 2ª
        // pessoa do singular (no modo imperativo): eguapy ke sente-se»); p. 83 (ke: «Eike ke! Entre!»;
        // «hu'y ke pejapo reta façam muitas flechas»)
        text: 'Diante de um som nasal, o “nós com você” vira nha-: “nhamba\'eapo” (trabalhamos), mas “jajou” (achamos). As duas formas aparecem na mesma frase do léxico. Para dar uma ordem a uma pessoa, o prefixo é e-, quase sempre com a partícula “ke” depois; para várias pessoas, pe-.',
        examples: [
          ['Nhamba\'eapo vy jajou va\'erã peráta.', 'Trabalhando, vamos obter dinheiro.'],
          ['Eguapy ke.', 'Sente-se.'],
          ['Eike ke!', 'Entre!'],
          ['Hu\'y ke pejapo reta.', 'Façam muitas flechas.'],
        ],
      },
      {
        heading: 'Dois verbos que fogem da regra: ir e vir',
        // Dooley 2006, p. 130 (-o2: «aa ‘vou’; jaa ‘nós (inclusivo) fomos’; tereo ‘vá’»; «oo ta ma já vai»);
        // p. 75 (-ju1: «kavõ re aju»; «reju atã reiny»; «ou ‘veio’, ejo ‘venha’; pejo ‘venham’»)
        text: '“-o” (ir) e “-ju” (vir) mudam de forma. De “-o” saem “aa” (vou), “jaa” (fomos), “oo” (vai, foi) e a ordem “tereo” (vá). De “-ju” saem “aju” (vim), “reju” (você vem), mas “ou” (veio) na terceira pessoa e “ejo” (venha) na ordem.',
        table: {
          head: ['', '-o (ir)', '-ju (vir)'],
          rows: [
            ['eu', 'aa', 'aju'],
            ['você', '—', 'reju'],
            ['ele, ela', 'oo', 'ou'],
            ['nós (com você)', 'jaa', '—'],
            ['ordem', 'tereo (vá)', 'ejo (venha), pejo (venham)'],
          ],
        },
        examples: [
          // Dooley 2006, p. 97 (ma1)
          ['Xee aa ta ma.', 'Eu já vou.'],
          // Dooley 2006, p. 75
          ['Kavõ re aju.', 'Vim para buscar sabão.'],
        ],
      },
    ],
    pitfalls: [
      'Usar a raiz sozinha (“exa”, “karu”): o verbo sempre leva o prefixo de pessoa.',
      'Trocar ja- por oro-: “jaexa” inclui quem ouve; “oroexa” deixa quem ouve de fora.',
      'Procurar o tempo no prefixo: “akaru” pode ser “como” ou “comi”. O futuro e o passado vêm de outras palavras (ver o A2.2).',
      'Achar que “pexa” está errado por ter um e só: pe- + -exa dá “pexa”, como está no léxico.',
    ],
    quiz: [
      {
        question: 'Qual prefixo diz “nós, sem incluir quem ouve”?',
        options: ['oro-', 'ja-', 'pe-'],
        answer: 'oro-',
        explanation: '“Oroexa” é “nós (sem você) vimos”; “jaexa” incluiria quem ouve.',
      },
      {
        question: 'Como fica “-exa” (ver) com “você”?',
        options: ['erexa', 'aexa', 'oexa'],
        answer: 'erexa',
        explanation: 'O prefixo de “você” é ere-: “Ndee pa erexa mboi?” (Você viu a cobra?).',
      },
      {
        question: 'Qual é a forma de “ele veio”?',
        options: ['ou', 'oju', 'aju'],
        answer: 'ou',
        explanation: '“-ju” (vir) é irregular na terceira pessoa: “ou”.',
      },
    ],
  },
  {
    id: 'gun-g6',
    level: 'A2.1',
    title: 'Meu, teu, nosso: xe-, nde-, nhande-, ore-, pende-',
    emoji: '🏠',
    summary: 'Os nomes de parentesco, do corpo e da casa precisam de dono: xeru (meu pai), nderery (teu nome), pendeayvu (a língua de vocês). Os mesmos prefixos servem para “sou bonito”, “estou com sede”.',
    sections: [
      {
        // Martins 2003, p. 36 (Quadro 1, «pronomes inativos»: xe, nhande, ore, nde (ne), pende (pene)) e p. 37
        // (nomes inalienáveis: parentesco, partes do corpo, «caminho», «fogo»…; «mbojape / xe=mbojape»)
        text: 'Uma segunda série de prefixos diz de quem é a coisa. Com nomes de parentesco e de partes do corpo, o dono é obrigatório: não se diz “pai” solto, diz-se “meu pai”, “teu pai”, “o pai dele”. Outros nomes, como “mbojape” (pão), podem ter dono ou não. Também aqui há dois “nós”: nhande- (com você) e ore- (sem você).',
        table: {
          head: ['Dono', 'Prefixo', 'Exemplo', 'Tradução'],
          rows: [
            // Dooley 2006, p. 181 (-u1, pai); p. 2 (xerua py)
            ['eu', 'xe-', 'xeru', 'meu pai'],
            // Dooley 2006, p. 39 e p. 135 (Marã rami pa nderery?)
            ['você', 'nde- (ne-)', 'nderery', 'teu nome'],
            // Dooley 2006, p. 39 (hery Cravo, «tinha o nome de Cravo»); p. 181 e p. 178 (tuu); p. 129 (hoo)
            ['ele, ela', 'i-, h- ou t-', 'hery, tuu, hoo', 'o nome dele, o pai dele, a casa dele'],
            // Dooley 2006, p. 31 (-eko)
            ['nós (com você)', 'nhande-', 'nhandereko', 'nosso modo de viver'],
            // Dooley 2006, p. 132 (ore-)
            ['nós (sem você)', 'ore-', 'orembo\'ea', 'nosso professor'],
            // Dooley 2006, p. 87 (-kuaa)
            ['vocês', 'pende- (pene-)', 'pendeayvu', 'a língua de vocês'],
          ],
        },
        examples: [
          // Dooley 2006, p. 2
          ['Aa ta xerua py.', 'Vou aonde está o meu pai.'],
          // Dooley 2006, p. 87
          ['Aikuaaxe pendeayvu.', 'Quero saber a língua de vocês.'],
          // Dooley 2006, p. 56 (-ĩ), lido na imagem
          ['Nderu oĩ pa?', 'Teu pai está (em casa)?'],
        ],
      },
      {
        heading: 'Casa, pai e mãe: as formas que mudam',
        // Dooley 2006, p. 129 (-o1: «aa ta xero py vou à minha casa»; forma não-relacional «oo»; 3ª pessoa
        // «hoo»); p. 181 e p. 178 (tuu: forma não-relacional e 3ª pessoa de -u); p. 54 e p. 197 (ha'i)
        text: 'Alguns nomes mudam de forma com o dono. “Casa” é “oo” quando não tem dono, “xero” quando é minha e “hoo” quando é dele. “Pai” é “xeru” (meu pai) e “tuu” (pai, o pai dele). E “minha mãe” é uma palavra própria, “ha\'i”: no mbyá ela toma o lugar de “xexy”, que quase não se usa.',
        table: {
          head: ['Nome', 'Sem dono', 'Meu', 'Dele'],
          rows: [
            ['casa', 'oo', 'xero', 'hoo'],
            ['pai', 'tuu', 'xeru', 'tuu'],
            ['mãe', '—', 'ha\'i', '—'],
          ],
        },
        examples: [
          // Dooley 2006, p. 129
          ['Aa ta xero py.', 'Vou à minha casa.'],
          // Dooley 2006, p. 88 (-kuavã)
          ['Tuu oikuavã gua\'y.', 'O pai abraçou o seu filho.'],
        ],
      },
      {
        heading: 'Os mesmos prefixos com “ser” e “estar”',
        // Martins 2003, p. 37 (2c: «ne=porã 2sg=bom ‘você é bom’»); Dooley 2006, p. 206 (-y'uvei: «xey'uvei estou
        // com sede»), p. 8 (-akã raxy: «xeakã raxy tenho dor de cabeça»)
        text: 'As palavras que o português traduz por “ser bonito”, “estar com sede” ou “ter dor de cabeça” levam os prefixos de dono, não os do verbo: “neporã” é “você é bom”, “xey\'uvei” é “estou com sede”. Por isso “porã” aparece sozinho só depois de um nome (“tekoa porã”).',
        examples: [
          ['Neporã.', 'Você é bom.'],
          ['Xey\'uvei.', 'Estou com sede.'],
          ['Xeakã raxy.', 'Estou com dor de cabeça.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer um nome de parentesco sem dono: o mbyá pede “xeru” (meu pai), não “ru” sozinho.',
      'Usar a- com “estar com sede”: é “xey\'uvei”, com o prefixo de dono xe-.',
      'Esquecer que “minha mãe” tem palavra própria: “ha\'i”.',
    ],
    quiz: [
      {
        question: 'Como se diz “meu pai”?',
        options: ['xeru', 'aru', 'nderu'],
        answer: 'xeru',
        explanation: 'xe- é o prefixo de dono da primeira pessoa; “nderu” é “teu pai”.',
      },
      {
        question: '“Pendeayvu” quer dizer…',
        options: ['a língua de vocês', 'a nossa língua', 'eu falo'],
        answer: 'a língua de vocês',
        explanation: 'pende- é “de vocês”; “nossa língua” é “nhandeayvu”.',
      },
      {
        question: 'Qual é a forma da casa quando não tem dono?',
        options: ['oo', 'xero', 'hoo'],
        answer: 'oo',
        explanation: '“Xero” é “minha casa” e “hoo”, “a casa dele”.',
      },
    ],
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'gun-g7',
    level: 'A2.2',
    title: 'Não, já e vai: nda-…-i, any, ma e \'rã',
    emoji: '🚫',
    summary: 'A negação abraça o verbo (nda- na frente, -i atrás); “any” é o “não” das respostas; “ma” é “já” e “\'rã”, o futuro.',
    sections: [
      {
        // Dooley 2006, p. 118-119 (nda-: com -i2, «indica a negação afixal»; j- antes de i, nd- antes de vogal,
        // nda- antes de consoante; nh-, n-, na- antes de som nasal); p. 56 (-i2); exemplos: p. 195, p. 56, p. 51
        text: 'Para negar, o verbo ganha duas partes: “nda-” na frente e “-i” atrás. Diante de vogal, o prefixo vira “nd-”; diante de som nasal, “n-” ou “na-”. Tudo o que fica entre as duas partes é o que se nega.',
        table: {
          head: ['Afirmativo', 'Negativo', 'Tradução'],
          rows: [
            // aexa: p. 12; ndaexai: p. 195
            ['aexa', 'ndaexai', 'eu (não) vi'],
            // jakaru: p. 72; ndajakarui: p. 51
            ['jakaru', 'ndajakarui', 'nós (não) comemos'],
            // aa: p. 130; ndaai: p. 56
            ['aa', 'ndaai', 'eu (não) vou'],
            // amba'eapo: p. 104; namba'eapoi: p. 59 (som nasal: na-)
            ['amba\'eapo', 'namba\'eapoi', 'eu (não) trabalho'],
          ],
        },
        examples: [
          // Dooley 2006, p. 195
          ['Xee ndaexai mba\'eve rei.', 'Eu não vi nada.'],
          // Dooley 2006, p. 51 (ha'e como conjunção)
          ['Japytu\'u rive, ha\'e ndajakarui.', 'Vamos apenas descansar, e não vamos comer.'],
        ],
      },
      {
        heading: 'Any: o “não” das respostas, e o “não” dos nomes',
        // Dooley 2006, p. 13 (any: «xee any eu não (em resposta a uma pergunta tal como ‘Você vai à cidade?’)»);
        // p. 45 (e'ỹ: «xemba'e e'ỹ não é meu»); p. 86 (kova'e: «kova'e ma ja'u va'erã e'ỹ isto não é para comer»),
        // lidos na imagem; p. 172 (tá1: «Sim. Empréstimo do port.»)
        text: 'Para responder “não” a uma pergunta, o mbyá usa “any”, que pode até ficar no lugar do verbo: “Xee any” (eu não). Para dizer que uma coisa “não é”, usa “e\'ỹ” depois do nome. E o “sim” mais comum no léxico é “tá”, que veio do português.',
        examples: [
          ['Xee any.', 'Eu não.'],
          ['Xemba\'e e\'ỹ.', 'Não é meu.'],
          ['Kova\'e ma ja\'u va\'erã e\'ỹ.', 'Isto não é para comer.'],
        ],
      },
      {
        heading: 'Ma (já), ta (logo), \'rã (vai) e va\'ekue (antes)',
        // Dooley 2006, p. 97 (ma1: «Já: haku ma já está quente; xee aa ta ma eu já vou»); p. 172 (ta2: presteza,
        // intento, iminência: «ko'ẽ rã aguata ta», «oky ta está para chover», lidos na imagem); p. 163 ('rã:
        // «forma reduzida de va'erã», «nda'okyi 'rã não vai chover»); p. 188 (va'ekue: «oro'u va'ekue o que já
        // comemos»)
        text: 'O verbo não muda para o futuro ou o passado: quem marca o tempo são palavrinhas depois dele. “Ma” é “já”. “Ta” diz que algo vai acontecer logo ou que se tem a intenção. “\'Rã” (forma curta de “va\'erã”) marca o futuro. “Va\'ekue” marca o que foi antes.',
        table: {
          head: ['Partícula', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['ma', 'já', 'Haku ma.', 'Já está quente.'],
            ['ta', 'logo, pretendo', 'Ko\'ẽ rã aguata ta.', 'Estou prestes a viajar amanhã.'],
            ['\'rã', 'futuro', 'Nda\'okyi \'rã.', 'Não vai chover.'],
            ['va\'ekue', 'passado', 'oro\'u va\'ekue', 'o que já comemos'],
          ],
        },
        examples: [
          ['Oky ta.', 'Está para chover.'],
          ['Xee ndaai \'rã.', 'Eu não vou.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o -i do fim: a negação tem duas partes, “nda-…-i”.',
      'Responder uma pergunta com “nda-…-i” sozinho: para “não” curto, use “any”.',
      'Procurar uma forma de futuro no verbo: o futuro vem de “\'rã” ou “ta”, depois do verbo.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu não vi”?',
        options: ['ndaexai', 'aexa e\'ỹ', 'any aexa'],
        answer: 'ndaexai',
        explanation: 'nda- na frente e -i atrás: “xee ndaexai mba\'eve rei”, eu não vi nada.',
      },
      {
        question: 'O que “\'rã” acrescenta em “nda\'okyi \'rã”?',
        options: ['o futuro: “não vai chover”', 'o passado: “não choveu”', 'uma pergunta'],
        answer: 'o futuro: “não vai chover”',
        explanation: '“\'Rã” é a forma curta de “va\'erã”, o futuro.',
      },
      {
        question: 'Qual palavra é o “sim” emprestado do português?',
        options: ['tá', 'any', 'ma'],
        answer: 'tá',
        explanation: 'O léxico registra “tá” como resposta “sim”, empréstimo do português; “any” é “não”.',
      },
    ],
  },
  {
    id: 'gun-g8',
    level: 'A2.2',
    title: 'Perguntas: pa, mamo, mava\'e, mba\'e re',
    emoji: '❓',
    summary: 'A pergunta de sim ou não leva “pa”; as outras começam por mamo (onde), mava\'e (quem), mba\'e re (por quê), mba\'exa (como) ou marã rami (como, qual).',
    sections: [
      {
        // Dooley 2006, p. 135 (pa: «partícula interrogativa … Erevy porã pa? … Ereru pa peráta?»; «pode ser
        // deslocado para ocorrer com o foco (o elemento que está sendo interrogado)»); p. 119 (Ndee pa erexa
        // mboi?)
        text: 'Para perguntar “sim ou não”, basta pôr a partícula “pa” depois do verbo: “Ereru pa peráta?” (Você trouxe o dinheiro?). Ela também pode ir logo depois do que se pergunta: “Ndee pa erexa mboi?” põe o foco em “você”.',
        examples: [
          ['Ereru pa peráta?', 'Você trouxe o dinheiro?'],
          ['Erevy porã pa?', 'Você se levantou bem?'],
          ['Ndee pa erexa mboi?', 'Foi você que viu a cobra?'],
        ],
      },
      {
        heading: 'As palavras de pergunta',
        // Dooley 2006, p. 99 (mamo), p. 100 (mava'e), p. 103 (mba'e re, mba'erã), p. 105 (mba'exa), p. 135
        // (marã rami pa); p. 178 (tu: «Comumente ocorre em frases interrogativas como partícula interrogativa»);
        // p. 119 (nda'u: «pergunta tipo ‘será quê?’»)
        text: 'A palavra de pergunta vem no começo, e logo depois vem uma partícula: “pa”, “tu” (mais forte) ou “nda\'u” (“será que…?”).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['mamo', 'onde', 'Mamo pa ereo?', 'Para onde você vai?'],
            ['mava\'e', 'quem, qual', 'Mava\'e nda\'u xerymba poryko ojuka?', 'Quem será que matou o meu porco?'],
            ['mba\'e re', 'por quê', 'Mba\'e re tu peju?', 'Por que vocês vieram?'],
            ['mba\'erã', 'para quê', 'Mba\'erã tu peju?', 'Para que vocês vieram?'],
            ['mba\'exa', 'como', 'Mba\'e xa pa oenduve?', 'Como é que ele soube mais?'],
            ['marã rami', 'como, qual', 'Marã rami pa nderery?', 'Qual é o seu nome?'],
          ],
        },
        examples: [
          // Dooley 2006, p. 83
          ['Marã rami pa pendeka\'aru?', 'Como vocês estão passando a tarde?'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a partícula depois da palavra de pergunta: “Mamo pa ereo?”, não “Mamo ereo?”.',
      'Traduzir “Marã rami pa nderery?” palavra por palavra: é o jeito mbyá de perguntar o nome (“como é o seu nome?”).',
      'Confundir “mba\'e re” (por quê) com “mba\'erã” (para quê).',
    ],
    quiz: [
      {
        question: 'Qual partícula transforma uma frase em pergunta de “sim ou não”?',
        options: ['pa', 'ma', 'ta'],
        answer: 'pa',
        explanation: '“Ereru pa peráta?” — você trouxe o dinheiro?',
      },
      {
        question: '“Mamo pa ereo?” pergunta…',
        options: ['para onde você vai', 'quem você é', 'por que você veio'],
        answer: 'para onde você vai',
        explanation: '“Mamo” é “onde”; “ereo” vem de “-o”, ir.',
      },
      {
        question: 'Como se pergunta “por quê”?',
        options: ['mba\'e re', 'mava\'e', 'mamo'],
        answer: 'mba\'e re',
        explanation: '“Mba\'e re tu peju?” — por que vocês vieram?',
      },
    ],
  },
];
