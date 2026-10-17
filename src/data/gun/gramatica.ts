import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do guarani mbyá, do A1.1 ao B1.4.
 *
 * B1 (17/10/2026): subordinação, nominalização, causativos, reflexivo/recíproco, fala citada e evidenciais, todos
 * pelas notas gramaticais dos verbetes de [Dooley 2006], com a página e conferidos na imagem. Exemplos de outras fontes,
 * sempre marcados: o «Ayvu Rapyta» de León Cadogan (1959; mbyá do Guairá, Paraguai), só os contos e cantos infantis do cap. XVIII, com a grafia convertida
 * pela regra declarada em gun-g15.
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
            ['nh', 'como o “nh” de “ninho”', 'nhe\'ẽ (espírito), nhanderu (Deus)'],
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
        // revisão (17/10/2026): «tekoa porã», «jagua guaxu», «yva pytã» são nome + adjetivo (um sintagma), não frases
        // com «é». Dooley 2006, p. 148 (porã: «(EM FUNÇÃO PREDICATIVA) … kova'e ára ma iporã vaipa este dia é muito
        // bom»; «(EM FUNÇÃO ADJETIVA) Bom, agradável: ayvu porã palavra ou mensagem boa»); p. 157 (pytã: «ava'i ma ipytã
        // rei va'e o menino é bem ruivo»); p. 47 (guaxu: «um dos poucos que ocorre em função adjetiva mas não em função
        // predicativa»). As traduções antigas («Esta aldeia é bonita», «O cachorro é grande») contradiziam a g6.
        text: 'Para apontar ou apresentar algo, o mbyá usa o demonstrativo “kova\'e” antes do nome: um exemplo registrado pelos linguistas é “kova\'e oo porã” (esta casa bonita). Repare na ordem: primeiro o demonstrativo, depois o substantivo, e só então o adjetivo — nunca o adjetivo antes do nome, como às vezes acontece em português (“uma bonita casa”). Nome e adjetivo juntos formam um nome maior: “tekoa porã” é “aldeia bonita”, não “a aldeia é bonita”. Para dizer que algo é bonito, “porã” leva o prefixo i-: “iporã” (você vê isso no A2).',
        table: {
          head: ['Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['kova\'e + substantivo', 'Kova\'e tekoa.', 'Esta é a aldeia.'],
            ['kova\'e + substantivo + adjetivo', 'Kova\'e tekoa porã.', 'Esta é uma aldeia bonita.'],
            ['substantivo + adjetivo (sem demonstrativo)', 'Jagua guaxu.', 'Cachorro grande.'],
          ],
        },
        examples: [
          ['Kova\'e y.', 'Isto é a água.'],
          ['Yva pytã.', 'Céu vermelho.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o adjetivo antes do substantivo, como em português: no mbyá ele vem sempre depois.',
      'Usar “kova\'e” sozinho esperando que ele já signifique “é”: ele só aponta (“este/esta/isto”), quem liga a frase é a ordem das palavras.',
      'Ler “tekoa porã” como “a aldeia é bonita”: é “aldeia bonita”. Para “é bonita”, o mbyá diz “iporã”; e “guaxu” (grande) só vem colado ao nome, nunca sozinho como predicado.',
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
            // revisão: «ereo» (você vai) está no próprio léxico, p. 99 (Mamo pa ereo?)
            ['você', 'ereo', 'reju'],
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
        // com sede»), p. 8 (-akã raxy: «xeakã raxy tenho dor de cabeça»); p. 148 (porã: «kova'e ára ma iporã vaipa
        // este dia é muito bom»; «orovy'a porã ficamos muito alegres»; «ayvu porã palavra boa»)
        text: 'As palavras que o português traduz por “ser bonito”, “estar com sede” ou “ter dor de cabeça” levam os prefixos de dono, não os do verbo: “neporã” é “você é bom”, “xey\'uvei” é “estou com sede”. Sem prefixo, “porã” vem depois de um nome (“tekoa porã”) ou de um verbo, como “bem, muito” (“orovy\'a porã”, ficamos muito alegres); para “ele é bom”, entra o prefixo i-: “iporã”.',
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
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'gun-g9',
    level: 'B1.1',
    title: 'Quando: vy (o mesmo sujeito) e ramo (outro sujeito)',
    emoji: '🔗',
    summary: 'Para ligar “quando, porque, ao” a outra ação, o mbyá põe vy ou ramo no fim da primeira oração: vy se as duas ações são da mesma pessoa, ramo (ou rã) se são de pessoas diferentes.',
    sections: [
      {
        // Dooley 2006, p. 192 (vy: «Indica que o sujeito da oração subordinada é o mesmo que ocorre na oração matriz:
        // xeryvy oo vy mboi oexa quando meu irmão foi, viu uma cobra»; nota 2: vy é mais comum que ramo, 57% a 43%,
        // nos textos); p. 165 (ramo1: «Indica que o sujeito da oração subordinada é diferente daquele que ocorre na
        // oração matriz: ixupe aporandu ramo nombovai quando lhe perguntei, ele(a) não respondeu»)
        text: 'O português usa “quando” no começo da oração. O mbyá faz o contrário: a oração vem primeiro e a palavra de ligação fecha a oração. E ele escolhe a palavra conforme quem faz as ações. Se é a mesma pessoa nas duas, entra “vy”. Se muda a pessoa, entra “ramo”. Nos textos mbyá que Dooley contou, “vy” aparece mais que “ramo”: 57% contra 43%.',
        table: {
          head: ['Ligação', 'Quando usar', 'Exemplo', 'Tradução'],
          rows: [
            // Dooley 2006, p. 192
            ['vy', 'mesmo sujeito', 'Xeryvy oo vy mboi oexa.', 'Quando meu irmão foi, (ele) viu uma cobra.'],
            // Dooley 2006, p. 165
            ['ramo', 'outro sujeito', 'Ixupe aporandu ramo nombovai.', 'Quando (eu) lhe perguntei, (ele) não respondeu.'],
            // Dooley 2006, p. 162 (rã1, lido na imagem)
            ['rã', 'outro sujeito (forma curta)', 'Ixupe aporandu rã nombovai.', 'Quando eu lhe perguntei, não respondeu.'],
          ],
        },
        examples: [
          // Dooley 2006, p. 192 (nota 1), sem verbo: «quando junto com meu pai, não fico com medo»
          ['Xeru reve vy ndakyjei.', 'Quando estou com meu pai, não tenho medo.'],
          // Dooley 2006, p. 192 (ha'e vy), lido na imagem
          ['Oo. Ha\'e vy ovaẽ.', 'Foi. Então chegou.'],
        ],
      },
      {
        heading: 'Logo que, mesmo que, por causa disso',
        // Dooley 2006, p. 192 (vyve: «Logo que: avaẽ vyve akaru»; vy jepe, concessão; vy ae: «anhembo'e vy ae aexa kuaa
        // kuaxia para»); p. 165 (ramove: «kunha va'e ovaẽ ramove aexa kuaa»; ramo jepe: «ha'eve ri ereo e'ỹ ramo
        // jepe»), lidos na imagem
        text: 'As duas palavras aceitam um pedacinho a mais. Com “-ve”, viram “logo que”: “vyve”, “ramove”. Com “jepe”, viram “mesmo que”. Com “ae”, “por isso mesmo”.',
        table: {
          head: ['Forma', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['vyve', 'logo que (mesmo sujeito)', 'Avaẽ vyve akaru.', 'Logo que cheguei, comi.'],
            ['ramove', 'logo que (outro sujeito)', 'Kunha va\'e ovaẽ ramove aexa kuaa.', 'Logo que a mulher chegou, eu a reconheci.'],
            ['ramo jepe', 'mesmo que', 'Ha\'eve ri ereo e\'ỹ ramo jepe.', 'Está bem, ainda que você não vá.'],
            ['vy ae', 'por isso mesmo', 'Anhembo\'e vy ae aexa kuaa kuaxia para.', 'É por estudar que sei ler a escrita.'],
          ],
        },
        // revisão (17/10/2026): saíram os dois exemplos do Novo Testamento mbyá (Marcos 1.16, Lucas 15.20): o texto
        // está no eBible.org sob CC BY-NC-ND, e o LinuLingo só usa frases de terceiros com licença livre. Ficam os do
        // Dooley 2006, p. 192 (vy jepe; ha'e vyve) e p. 4 (ake vy aju), lidos na imagem
        examples: [
          ['Pe kuery orereve ndapeoi vy jepe pendexarai eme ke orere.', 'Ainda que vocês não forem conosco, não se esqueçam de nós.'],
          ['Ake vy aju.', 'É para dormir que vim.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “vy” ou “ramo” no começo, como o “quando” do português: eles fecham a oração, depois do verbo.',
      'Usar “vy” quando a pessoa muda: “aporandu ramo nombovai” (eu perguntei, ele não respondeu) pede “ramo”.',
      'Achar que “vy” é sempre “quando”: também é “ao”, “porque”, “e então”. O contexto decide.',
    ],
    quiz: [
      {
        question: 'Em “Xeryvy oo vy mboi oexa”, por que entra “vy”?',
        options: ['Porque quem foi e quem viu é a mesma pessoa', 'Porque é passado', 'Porque é pergunta'],
        answer: 'Porque quem foi e quem viu é a mesma pessoa',
        explanation: '“Vy” liga duas ações do mesmo sujeito: o irmão foi e o irmão viu.',
      },
      {
        question: 'Qual ligação completa “Ixupe aporandu ___ nombovai” (eu perguntei, ele não respondeu)?',
        options: ['ramo', 'vy', 'pa'],
        answer: 'ramo',
        explanation: 'A pessoa muda (eu → ele), então entra “ramo” (ou a forma curta “rã”).',
      },
      {
        question: 'O que “vyve” acrescenta em “Avaẽ vyve akaru”?',
        options: ['“logo que”', '“mesmo que”', '“para”'],
        answer: '“logo que”',
        explanation: 'Logo que cheguei, comi.',
      },
    ],
  },
  {
    id: 'gun-g10',
    level: 'B1.1',
    title: 'Enquanto, depois, para: jave, rire, aguã',
    emoji: '⏳',
    summary: 'Jave é “enquanto, durante”; rire é “depois de” (muitas vezes “já que”); aguã é “para”, a intenção.',
    sections: [
      {
        // Dooley 2006, p. 62 (jave1: «Enquanto, quando: ndee eremba'eapo jave xee avaẽ»; «yro'y jave py no tempo do
        // frio»; «Mba'e jave pa ereo?»); p. 169 (rire: «Depois de (muitas vezes com o sentido de causa), já que:
        // nhama'etỹ e'ỹ rire ndajakarui»), lidos na imagem
        text: '“Jave” diz que duas coisas acontecem no mesmo tempo: enquanto uma durava, a outra aconteceu. “Rire” diz que uma vem depois da outra, e muitas vezes que a primeira é a causa da segunda. Como “vy” e “ramo”, as duas vêm no fim da oração.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['jave', 'enquanto, quando', 'Ndee eremba\'eapo jave xee avaẽ.', 'Quando você estava trabalhando, eu cheguei.'],
            ['jave py', 'no tempo de', 'Yro\'y jave py.', 'No tempo do frio.'],
            ['rire', 'depois de, já que', 'Nhama\'etỹ e\'ỹ rire ndajakarui.', 'Depois de não plantarmos, não comeremos.'],
            ['mba\'e jave', 'a que hora', 'Mba\'e jave pa ereo?', 'A que hora você vai?'],
          ],
        },
        // revisão (17/10/2026): saiu o exemplo do Novo Testamento mbyá (Marcos 1.21, CC BY-NC-ND); fica o do Dooley
        // 2006, p. 4 (ha'e rire ae: «Só depois: ha'e rire ae só depois daquilo»)
        examples: [
          ['Ha\'e rire ae.', 'Só depois daquilo.'],
        ],
      },
      {
        heading: 'Aguã: para',
        // Dooley 2006, p. 4 (aguã: «Para (indica propósito, intenção): aju ake aguã vim para dormir»; «Quando o verbo
        // principal designar moção (‘ir’, ‘vir’, etc.) … é freqüentemente substituído pela conjunção subordinativa vy
        // ou simplesmente excluído: ake vy aju ‘é para dormir que vim’, aa ta akaru ‘vou comer’»; «ndaikuaai anhombo'e
        // aguã não sei ensinar; narõi ereju aguã eu não esperava que você viesse»; «akaru aguã rami ma aiko já preciso
        // comer»), lidos na imagem
        text: '“Aguã” fecha a oração que diz para quê: “aju ake aguã”, vim para dormir. Com verbos de movimento (ir, vir), o mbyá muitas vezes troca “aguã” por “vy” ou nem usa nada: “aa ta akaru”, vou comer. Depois de verbos como “saber” e “esperar”, “aguã” liga o que se sabe ou se espera.',
        table: {
          head: ['Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['para (intenção)', 'Aju ake aguã.', 'Vim para dormir.'],
            ['com “ir, vir”: vy', 'Ake vy aju.', 'É para dormir que vim.'],
            ['depois de “saber”', 'Ndaikuaai anhombo\'e aguã.', 'Não sei ensinar.'],
            ['depois de “esperar”', 'Narõi ereju aguã.', 'Eu não esperava que você viesse.'],
            ['aguã rami: precisar', 'Akaru aguã rami ma aiko.', 'Já preciso comer.'],
          ],
        },
        examples: [
          // Dooley 2006, p. 4 (aa ta akaru, sem aguã)
          ['Aa ta akaru.', 'Vou comer.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “jave” (ao mesmo tempo) com “rire” (depois).',
      'Esquecer que “rire” costuma trazer a causa: “nhama\'etỹ e\'ỹ rire ndajakarui” é “já que não plantamos, não comeremos”.',
      'Forçar “aguã” depois de “ir” e “vir”: o mbyá prefere “ake vy aju” ou “aa ta akaru”.',
    ],
    quiz: [
      {
        question: 'Como se diz “vim para dormir”?',
        options: ['Aju ake aguã.', 'Aju ake rire.', 'Aju ake jave.'],
        answer: 'Aju ake aguã.',
        explanation: '“Aguã” marca a intenção, o “para”.',
      },
      {
        question: '“Ndee eremba\'eapo jave xee avaẽ” quer dizer…',
        options: ['Quando você estava trabalhando, eu cheguei.', 'Depois que você trabalhou, eu cheguei.', 'Para você trabalhar, eu cheguei.'],
        answer: 'Quando você estava trabalhando, eu cheguei.',
        explanation: '“Jave” é “enquanto, quando”: as duas coisas no mesmo tempo.',
      },
      {
        question: 'Que palavra diz “depois de, já que”?',
        options: ['rire', 'jave', 'aguã'],
        answer: 'rire',
        explanation: '“Nhama\'etỹ e\'ỹ rire ndajakarui”: depois de não plantarmos, não comeremos.',
      },
    ],
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'gun-g11',
    level: 'B1.2',
    title: 'Quem, o que: va\'e, va\'ekue e va\'erã',
    emoji: '🧩',
    summary: 'Va\'e depois de uma oração faz dela um nome: “quem…, o que…”. Va\'ekue é o mesmo no passado; va\'erã, no futuro.',
    sections: [
      {
        // Dooley 2006, p. 186-187 (va'e: «Ocorrendo após uma oração, esta palavra forma um nome … semelhante ao pronome
        // que ou quem em português»; «nominaliza uma oração inteira, com todos os seus termos: oo py ava voxa oguereko
        // va'e»; «imba'eaxy va'e oĩ xero py»; «kova'e yvyra ma hi'a va'e»; «ava imba'eaxy va'e oĩ xero py»; «oo re
        // opena va'e»; «mbojape ogueraa va'e quem leva o pão»), lidos na imagem
        text: 'Em português, “quem” e “que” vêm antes: “o homem que está doente”. No mbyá, a oração vem inteira e “va\'e” fecha: “imba\'eaxy va\'e”, quem está doente, o doente. A oração com “va\'e” funciona como um nome: pode ser o assunto da frase, pode vir depois de outro nome, como um adjetivo, e pode ser o próprio predicado.',
        table: {
          head: ['Função', 'Exemplo', 'Tradução'],
          rows: [
            ['nome sozinho', 'Imba\'eaxy va\'e oĩ xero py.', 'O doente está na minha casa.'],
            ['depois de um nome', 'Ava imba\'eaxy va\'e oĩ xero py.', 'O homem que está doente está na minha casa.'],
            ['predicado', 'Kova\'e yvyra ma hi\'a va\'e.', 'Esta árvore é frutífera (é das que dão fruta).'],
            ['quem faz', 'Mbojape ogueraa va\'e.', 'Quem leva o pão.'],
            ['quem cuida', 'Oo re opena va\'e.', 'Aquele que está cuidando da casa.'],
          ],
        },
        examples: [
          ['Oo py ava voxa oguereko va\'e.', 'A bolsa que o homem tem dentro da casa.'],
          // Dooley 2006, p. 187 (com «peteĩ», indefinido), lido na imagem
          ['Peteĩ imba\'eaxy va\'e oĩ xero py.', 'Um doente está na minha casa.'],
        ],
      },
      {
        heading: 'Va\'ekue (já foi) e va\'erã (ainda vai ser)',
        // Dooley 2006, p. 188 (va'ekue: «Nominaliza a oração e indica que a situação vigorou no passado: popo xiĩ
        // va'ekue borboleta que era branca; orekuai va'ekue nós que estávamos (ali); oro'u va'ekue o que já comemos;
        // xereraa va'ekue quem me levou»; va'erã: «oro'u va'erã o que comeremos»); p. 187 («ajouxe xepytyvõ va'erã
        // quero achar quem me ajude»); p. 86 («kova'e yvyra'a ma ja'u va'erã e'ỹ»), lidos na imagem
        text: 'O mesmo “va\'e” leva o tempo: “-kue” para o que já foi, “-rã” para o que ainda vai ser. “Oro\'u va\'ekue” é “o que já comemos”; “oro\'u va\'erã”, “o que vamos comer”.',
        table: {
          head: ['Forma', 'Tempo', 'Exemplo', 'Tradução'],
          rows: [
            ['va\'e', 'agora, sempre', 'oro\'u va\'e', 'o que estamos comendo'],
            ['va\'ekue', 'passado', 'oro\'u va\'ekue', 'o que já comemos'],
            ['va\'erã', 'futuro', 'oro\'u va\'erã', 'o que vamos comer'],
            ['va\'ekue', 'passado', 'xereraa va\'ekue', 'quem me levou'],
            ['va\'erã', 'futuro', 'ajouxe xepytyvõ va\'erã', 'quero achar quem me ajude'],
          ],
        },
        examples: [
          ['Kova\'e yvyra\'a ma ja\'u va\'erã e\'ỹ.', 'Esta fruta não é para comer.'],
          // Dooley 2006, p. 188 (va'ekue como tempo passado e hábito), lido na imagem
          ['Yma xekyrĩ jave ma xee xeapu rei va\'ekue.', 'Antigamente, quando eu era menino, eu mentia demais.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “que” antes da oração: no mbyá, “va\'e” vem no fim.',
      'Esquecer que a oração inteira entra antes de “va\'e”: “oo py ava voxa oguereko va\'e” é uma coisa só, “a bolsa que o homem tem dentro da casa”.',
      'Trocar “va\'ekue” (o que já foi) por “va\'erã” (o que vai ser).',
    ],
    quiz: [
      {
        question: 'Como se diz “o doente” (quem está doente)?',
        options: ['imba\'eaxy va\'e', 'va\'e imba\'eaxy', 'imba\'eaxy ramo'],
        answer: 'imba\'eaxy va\'e',
        explanation: 'A oração vem primeiro e “va\'e” fecha.',
      },
      {
        question: '“Oro\'u va\'ekue” quer dizer…',
        options: ['o que já comemos', 'o que vamos comer', 'vamos comer'],
        answer: 'o que já comemos',
        explanation: '“Va\'ekue” leva o “-kue” do passado; “va\'erã” seria o futuro.',
      },
      {
        question: 'Em “Ajouxe xepytyvõ va\'erã”, o que a pessoa procura?',
        options: ['alguém que a ajude', 'alguém que a ajudou', 'ajudar alguém'],
        answer: 'alguém que a ajude',
        explanation: '“Va\'erã” olha para o futuro: quem vai me ajudar.',
      },
    ],
  },
  {
    id: 'gun-g12',
    level: 'B1.2',
    title: '-gua: de onde, de quando, para quê',
    emoji: '🏷️',
    summary: 'O sufixo -gua transforma um lugar ou um tempo em gente ou coisa de lá: tetã pygua (habitante da cidade), mombyry guigua (alguém que vem de longe), yma guare (coisa antiga).',
    sections: [
      {
        // Dooley 2006, p. 46 (-gua1: «Algo ou alguém que pertence ao tempo ou ao lugar referido: tetã pygua habitante da
        // cidade (uma pessoa que mora na cidade, tetã py); mombyry guigua alguém que vem de longe; … xekyrĩ javegua
        // algo que aconteceu quando eu era jovem, ou alguém daquela época; kyrĩgue jojavegua crianças da mesma faixa de
        // idade»; guarã: «ojogua xapeo xevy guarã»; guare: «yma guare pessoa, coisa ou acontecimento dos tempos
        // antigos»), lidos na imagem
        text: '“-gua” vem depois de uma expressão de lugar ou de tempo e faz dela um nome: quem é de lá, o que é daquele tempo. “Tetã py” é “na cidade”; “tetã pygua”, quem mora na cidade. Com o passado “-re” (guare) e o futuro “-rã” (guarã), dá “o que foi de” e “o que vai ser de”.',
        table: {
          head: ['Forma', 'De onde vem', 'Tradução'],
          rows: [
            ['tetã pygua', 'tetã py (na cidade)', 'habitante da cidade'],
            ['mombyry guigua', 'mombyry gui (de longe)', 'alguém que vem de longe'],
            ['xekyrĩ javegua', 'xekyrĩ jave (quando eu era pequeno)', 'algo ou alguém do tempo em que eu era jovem'],
            ['yma guare', 'yma (antigamente)', 'pessoa, coisa ou acontecimento antigo'],
            ['xevy guarã', 'xevy (para mim)', 'o que vai ser para mim'],
          ],
        },
        examples: [
          ['Ojogua xapeo xevy guarã.', 'Comprou um chapéu que vai ser meu.'],
          // Dooley 2006, p. 200
          ['Mba\'eypy yma guare.', 'Uma história antiga.'],
        ],
      },
      {
        heading: 'O instrumento: kygua, ka\'ygua, petỹgua',
        // Dooley 2006, p. 46 (-gua1, «com uma pequena classe de nomes … instrumento ou receptáculo cujo uso é ligado com
        // o nome: kygua pente [lit., ‘instrumento para pulgas’]; ka'ygua cuia para chimarrão; petỹgua cachimbo»), lido
        // na imagem
        text: 'Com alguns nomes, “-gua” forma o objeto que serve para aquilo: “ky” (piolho; “jagua ky”, a pulga) dá “kygua”, o pente; “ka\'a” (erva-mate) dá “ka\'ygua”, a cuia; “petỹ” (fumo) dá “petỹgua”, o cachimbo. O “petyngua” do A1, o cachimbo sagrado, é a mesma palavra.',
        table: {
          head: ['Nome', 'Com -gua', 'Tradução'],
          rows: [
            ['ky', 'kygua', 'pente'],
            ['ka\'a', 'ka\'ygua', 'cuia de chimarrão'],
            ['petỹ', 'petỹgua', 'cachimbo'],
          ],
        },
        examples: [['Kygua.', 'Pente (lit. “instrumento para pulgas”).']],
      },
    ],
    pitfalls: [
      'Esquecer o “py” ou o “gui” de antes: é “tetã pygua” (de “tetã py”), não “tetã gua”.',
      'Confundir “-gua” com “va\'e”: “-gua” vem depois de lugar ou tempo; “va\'e”, depois de uma oração com verbo.',
    ],
    quiz: [
      {
        question: 'Como se diz “habitante da cidade”?',
        options: ['tetã pygua', 'tetã va\'e', 'tetã rire'],
        answer: 'tetã pygua',
        explanation: '“Tetã py” é “na cidade”; com “-gua”, vira quem é de lá.',
      },
      {
        question: '“Yma guare” é…',
        options: ['uma coisa ou pessoa dos tempos antigos', 'o que vai acontecer', 'quem vem de longe'],
        answer: 'uma coisa ou pessoa dos tempos antigos',
        explanation: '“Guare” é “-gua” com o passado.',
      },
    ],
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'gun-g13',
    level: 'B1.3',
    title: 'Fazer fazer: mbo-, -uka e ero-',
    emoji: '🎛️',
    summary: 'Mbo- (mo- antes de som nasal) faz alguém ou algo fazer ou ficar; -uka é mandar outra pessoa fazer; ero- é fazer junto, acompanhando.',
    sections: [
      {
        // Dooley 2006, p. 106 (mbo-1: «A partir de um radical de v. i. … este prefixo forma um radical de v. t. direto,
        // causativo … -mboaku esquentar … mbo- ocorre antes dos segmentos orais, mo- antes dos segmentos nasais ou
        // nasalizados»; «n- … mbo- … -i … Proibir, impedir: namboui xera'y aỹ»), lido na imagem; p. 9 (aku, quente;
        // -mboaku, esquentar); p. 111 (-mbo'e, «ensinar [lit., ‘fazer falar’]», de -'e, dizer); p. 136 (-mbopara)
        text: '“Mbo-” na frente de um verbo quer dizer “fazer ficar” ou “fazer fazer”: de “aku” (quente) sai “-mboaku”, esquentar; de “-\'e” (dizer, falar) sai “-mbo\'e”, ensinar, que é literalmente “fazer falar”. Antes de som nasal, “mbo-” vira “mo-”. Com a negação em volta, vira “proibir”: “namboui xera\'y aỹ”, proibi meu filho de vir agora.',
        table: {
          head: ['Base', 'Com mbo-', 'Tradução'],
          rows: [
            ['aku (quente)', '-mboaku', 'esquentar'],
            ['-\'e (dizer)', '-mbo\'e', 'ensinar (“fazer falar”)'],
            ['para (enfeite)', '-mbopara', 'enfeitar; escrever'],
            ['-ju (vir), negado', 'namboui', 'proibi que viesse'],
          ],
        },
        examples: [
          ['Xembo\'e ke mba\'emo re.', 'Ensine-me alguma coisa.'],
          ['Namboui xera\'y aỹ.', 'Proibi que meu filho viesse agora.'],
        ],
      },
      {
        heading: '-uka: mandar alguém fazer',
        // Dooley 2006, p. 182 (-uka: «causativo, indicando que o sujeito age indiretamente, através de outra pessoa:
        // Fazer, pedir, mandar … xero re apena uka xeryvy pe mandei que meu irmão cuidasse da minha casa»; «Este sufixo
        // acrescenta um objeto indireto que é indicado pela posposição dativa pe»; «a forma com mbo- indica um grau de
        // controle maior»); p. 34 (-enduka: «Avisar: aenduka ixupe»), lidos na imagem
        text: '“-uka” vai no fim do verbo e quer dizer que outra pessoa faz a ação a mando de quem fala. Quem recebe a ordem vem com “pe”: “xero re apena uka xeryvy pe”, mandei meu irmão cuidar da minha casa. Dooley observa que, quando o mesmo verbo aceita “mbo-” e “-uka”, “mbo-” mostra mais controle de quem manda.',
        table: {
          head: ['Verbo', 'Com -uka', 'Tradução'],
          rows: [
            ['-pena (cuidar)', 'apena uka', 'mandei cuidar'],
            ['-endu (ouvir)', 'aenduka', 'avisei (“fiz ouvir”)'],
          ],
        },
        examples: [
          ['Xero re apena uka xeryvy pe.', 'Mandei meu irmão cuidar da minha casa.'],
          ['Aenduka ixupe.', 'Avisei-o.'],
        ],
      },
      {
        heading: 'Ero-: fazer junto',
        // Dooley 2006, p. 37-38 (ero-: «semântica comitativa ou associativa, ou seja, o sujeito participa na mesma ação
        // na qual o objeto direto está envolvido: kavaju aronha, yvate rupi aropo fiz o cavalo correr (acompanhando-o),
        // fi-lo pular alto (acompanhando-o)»; variantes ro-, guero-…; «guero- ocorre após prefixos que terminam com o»);
        // p. 48 (guero-: «ava ogueronha kavaju o homem fez o cavalo correr, montado nele»); p. 68 («arojevy xera'y tetã
        // gui voltei da cidade junto com meu filho»), lidos na imagem; p. 39 (-eru, trazer, de ero- + -u, vir)
        text: '“Ero-” (com as formas ro-, guero-) também faz alguém fazer algo, mas com quem fala junto, fazendo a mesma coisa. “Aronha” não é só “fiz correr”: é “fiz o cavalo correr, correndo com ele”. Depois do prefixo o-, a forma é “guero-”. “-Eru”, trazer, é “vir junto com”: ero- + -u (vir).',
        table: {
          head: ['Verbo', 'Com ero-', 'Tradução'],
          rows: [
            ['-nha (correr)', 'aronha', 'fiz correr (correndo junto)'],
            ['-nha (correr)', 'ogueronha', 'fez correr (montado nele)'],
            ['-jevy (voltar)', 'arojevy', 'voltei junto com'],
          ],
        },
        examples: [
          ['Kavaju aronha, yvate rupi aropo.', 'Fiz o cavalo correr e pular alto, junto com ele.'],
          ['Arojevy xera\'y tetã gui.', 'Voltei da cidade junto com meu filho.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que “mbo-” vira “mo-” antes de som nasal.',
      'Usar “-uka” sem dizer a quem se mandou: quem recebe a ordem vem com “pe”.',
      'Traduzir “ero-” como “mbo-”: com “ero-”, quem fala faz junto.',
    ],
    quiz: [
      {
        question: 'O que “-mbo\'e” (ensinar) quer dizer ao pé da letra?',
        options: ['fazer falar', 'fazer ouvir', 'falar junto'],
        answer: 'fazer falar',
        explanation: 'É “mbo-” (fazer) + “-\'e” (dizer, falar).',
      },
      {
        question: 'Em “Xero re apena uka xeryvy pe”, quem cuida da casa?',
        options: ['o irmão', 'quem fala', 'o pai'],
        answer: 'o irmão',
        explanation: '“-uka” é mandar outra pessoa fazer; quem recebe a ordem vem com “pe”.',
      },
      {
        question: '“Kavaju aronha” é…',
        options: ['fiz o cavalo correr, correndo junto', 'o cavalo correu sozinho', 'mandei alguém fazer o cavalo correr'],
        answer: 'fiz o cavalo correr, correndo junto',
        explanation: '“Ero-” (aqui “ro-”) é o “fazer junto”.',
      },
    ],
  },
  {
    id: 'gun-g14',
    level: 'B1.3',
    title: 'A si mesmo e uns aos outros: je- e jo-',
    emoji: '🪞',
    summary: 'Je- (nhe- antes de som nasal) volta a ação para quem faz: ajejoi, eu me lavei. Jo- (nho-) é “uns aos outros”: jajoguero\'a, brigamos uns com os outros.',
    sections: [
      {
        // Dooley 2006, p. 63-64 (je-: «Faz referência reflexiva … je- ocorre antes dos segmentos orais, e nhe- antes dos
        // segmentos nasais ou nasalizados»; «Indica o sentido de passivo: -jejuka ser morto [lit., ‘matar-se’]; -jepe'a
        // estar aberto [lit., ‘abrir-se’]»; «ao omboi ojegui tirou a sua própria roupa»; «xejeupe ae xeayvu eu falava a
        // mim mesmo»); p. 70 («ajejoi ‘eu me lavei’»; «onhemi ‘escondeu-se’»; «onheno ‘deitou-se’ (compare o v. t.
        // onhono ‘deitou’)»); p. 188 («xejejoko vy mba'eve nda'ei va'ekue»); p. 53 («Ha'e rami py ojeapo yakã guaxu»),
        // lidos na imagem
        text: '“Je-” diz que quem faz a ação é também quem a recebe: “ajejoi”, eu me lavei. Antes de som nasal vira “nhe-”: “onhemi”, escondeu-se; “onheno”, deitou-se. Às vezes “je-” dá um sentido de passiva: “-jepe\'a”, estar aberto (“abrir-se”); “ojeapo”, faz-se, é feito.',
        table: {
          head: ['Verbo', 'Com je- / nhe-', 'Tradução'],
          rows: [
            ['-joi (lavar)', 'ajejoi', 'eu me lavei'],
            ['-mi (esconder)', 'onhemi', 'escondeu-se'],
            ['-no (deitar)', 'onheno', 'deitou-se'],
            ['-joko (bloquear)', 'xejejoko', 'controlando-me'],
            ['-apo (fazer)', 'ojeapo', 'faz-se, é feito'],
          ],
        },
        examples: [
          ['Ao omboi ojegui.', 'Tirou a sua própria roupa.'],
          ['Xejejoko vy mba\'eve nda\'ei va\'ekue.', 'Controlando-me, não disse nada.'],
          ['Ha\'e rami py ojeapo yakã guaxu.', 'Desse modo se faz um rio grande.'],
        ],
      },
      {
        heading: 'Jo-: uns aos outros',
        // Dooley 2006, p. 70 (jo-2: «Faz referência recíproca (uns aos outros) ou alheia»; «jo-2 ocorre antes de
        // segmentos orais, nho-2 antes de segmentos nasais»; «jajoguero'a brigamos uns com os outros ou com alguém;
        // vamos brigar; jajogueroayvu combinamos uns com os outros … vamos conversar ou combinar»; «avakue ovaẽ joo py
        // os homens chegaram cada um na casa do outro»; «joa py no mesmo lugar, num só lugar»); p. 94 («kuri ka'arukue
        // jajoexa ju 'rã»), lidos na imagem
        text: '“Jo-” (nho- antes de som nasal) diz que a ação vai e volta entre várias pessoas: “jajoexa”, nos vemos (uns aos outros). Com um nome, “jo-” é “do outro”: “joo”, a casa do outro.',
        table: {
          head: ['Verbo ou nome', 'Com jo-', 'Tradução'],
          rows: [
            ['-ero\'a (agarrar e derrubar)', 'jajoguero\'a', 'brigamos uns com os outros'],
            ['-eroayvu (falar com alguém, combinar)', 'jajogueroayvu', 'conversamos, combinamos'],
            ['-exa (ver)', 'jajoexa', 'nos vemos'],
            ['-o (casa)', 'joo', 'a casa do outro'],
          ],
        },
        examples: [
          ['Kuri ka\'arukue jajoexa ju \'rã.', 'Hoje à tarde vamos nos ver outra vez.'],
          ['Avakue ovaẽ joo py.', 'Os homens chegaram cada um na casa do outro.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que “je-” vira “nhe-” antes de som nasal (e “jo-” vira “nho-”).',
      'Trocar “je-” (a si mesmo) por “jo-” (uns aos outros): “ajejoi” é “eu me lavei”, não “lavamos uns aos outros”.',
      'Ler todo “je-” como “a si mesmo”: às vezes é passiva, como em “ojeapo”, “é feito”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu me lavei”?',
        options: ['ajejoi', 'ajojoi', 'amboi'],
        answer: 'ajejoi',
        explanation: '“Je-” volta a ação para quem faz.',
      },
      {
        question: '“Jajogueroayvu” quer dizer…',
        options: ['conversamos uns com os outros', 'falei sozinho', 'mandei falar'],
        answer: 'conversamos uns com os outros',
        explanation: '“Jo-” é o recíproco: uns com os outros.',
      },
      {
        question: 'Por que é “onheno” (deitou-se), e não “ojeno”?',
        options: ['Porque “-no” tem som nasal, e je- vira nhe-', 'Porque é passado', 'Porque é plural'],
        answer: 'Porque “-no” tem som nasal, e je- vira nhe-',
        explanation: 'Antes de som nasal, “je-” vira “nhe-”.',
      },
    ],
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'gun-g15',
    level: 'B1.4',
    title: 'Disse: o verbo -\'e e a fala citada',
    emoji: '💬',
    summary: 'Para contar o que alguém disse, o mbyá cita a fala e fecha com he\'i (disse) ou abre com aipoe\'i (disse assim). O verbo -\'e (dizer) muda com a pessoa: ha\'e, \'ere, he\'i, ja\'e, peje, oro\'e.',
    sections: [
      {
        // Dooley 2006, p. 29 (-'e: «Dizer: Tupã aipoe'i: — Ejo ke — he'i … nda'ei não o digo; ha'e uka Vera ou aguã
        // mandei dizer que Verá viesse; xerenoẽ vy — Eju — he'i va'ekue chamando-me, disse — Venha»; «Átona quando o
        // verbo ocorre após uma citação direta»; «Seu objeto direto é a própria citação»; paradigma: «a'e, ha'e (eu) digo;
        // 'ere, 're (você) diz ou diga!; e'i, he'i (ele ou ela) diz, (eles ou elas) dizem; ja'e (nós inclusivo) dizemos;
        // peje (vocês) dizem ou digam!; oro'e, ro'e (nós exclusivo) dizemos»; «Tereo porã — he'i imondovy»), lidos na
        // imagem
        text: 'O mbyá conta uma conversa citando as palavras do jeito que foram ditas. Depois da fala vem “he\'i” (disse), sem força, quase colado. Antes da fala pode vir “aipoe\'i” (disse assim). O verbo “-\'e” é irregular: veja as formas na tabela.',
        table: {
          head: ['Pessoa', '-\'e (dizer)', 'Tradução'],
          rows: [
            ['eu', 'a\'e, ha\'e', 'digo, disse'],
            ['você', '\'ere, \'re', 'diz; diga!'],
            ['ele, ela, eles', 'e\'i, he\'i', 'diz, disse, dizem'],
            ['nós (com você)', 'ja\'e', 'dizemos'],
            ['nós (sem você)', 'oro\'e, ro\'e', 'dizemos'],
            ['vocês', 'peje', 'dizem; digam!'],
          ],
        },
        examples: [
          ['Xerenoẽ vy — Eju — he\'i va\'ekue.', 'Chamando-me, disse: — Venha.'],
          ['Tereo porã — he\'i imondovy.', '“Vá bem”, disse em despedida.'],
          ['“Peju” ha\'e va\'ekue.', 'Eu disse: “Venham”.'],
          // revisão (17/10/2026): no lugar de Lucas 15.12 (Novo Testamento mbyá, CC BY-NC-ND, fora da regra de licença
          // livre), o exemplo do próprio Dooley 2006, p. 6 (aipoe'i: «a forma sem aipo fecha a citação: Poty aipoe'i:
          // — Xee ndaa reguai — he'i»)
          ['Poty aipoe\'i: — Xee ndaa reguai — he\'i.', 'Poty disse: — Eu não posso ir — disse.'],
        ],
      },
      {
        heading: 'Um conto do Guairá, na grafia convertida',
        // Cadogan 1959 («Ayvu Rapyta», Boletim 227 da FFCL-USP), cap. XVIII, «Cuentos»: conto da moça que procura quem
        // canta bonito (PDF da USP, p. 176, lido na imagem): «-Ndeé pa reporaéi va'e? e'i kyjúpe. / -Aporaéi ko, avei,
        // e'i kyju. / -Eporaéi avy, a'e ramo, ñaendu, e'i iengue». Mbyá do Guairá (Paraguai), outra variedade. Regra de
        // conversão para a grafia de Dooley: (1) tiram-se os acentos de tonicidade que Cadogan escreve (Dooley não
        // marca a tônica); (2) «ñ» → «nh»; (3) «ch» → «x»; (4) a posposição «pe», que Cadogan escreve colada, vai
        // separada, como em Dooley. As palavras ficam as de Cadogan («a'e» é o «ha'e» de Dooley). Conteúdo escolhido
        // entre os contos infantis do cap. XVIII: o curso deixa de fora os textos sagrados do livro (cap. I a XVI).
        text: 'Em 1959, o paraguaio León Cadogan publicou o “Ayvu Rapyta”, textos que os mbyá do Guairá ditaram a ele. A maior parte do livro são textos sagrados, que os mbyá guardavam em segredo: o curso deixa esses de fora. Do capítulo dos contos infantis vem este diálogo: uma moça procura quem canta bonito e pergunta a cada bicho. A grafia foi convertida para a de Dooley por regras simples: sem os acentos que Cadogan escreve, “ñ” vira “nh”, “ch” vira “x”. E é outra variedade do mbyá, a do Paraguai.',
        examples: [
          ['Ndee pa reporaei va\'e? e\'i kyju pe.', '“É você quem canta?”, disse ao grilo. (Cadogan, “Ayvu Rapyta”, 1959)'],
          ['Aporaei ko, avei, e\'i kyju.', '“Eu também costumo cantar”, disse o grilo. (Cadogan, 1959)'],
          ['Eporaei avy, a\'e ramo, nhaendu, e\'i iengue.', '“Canta, então, para que eu escute”, disse a moça. (Cadogan, 1959)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar aspas de “discurso indireto”: o mbyá prefere citar a fala como foi dita e fechar com “he\'i”.',
      'Achar que “he\'i” e “e\'i” são palavras diferentes: são o mesmo “disse”.',
      'Ler “ha\'e” sempre como “ele” ou “e”: depois de uma fala citada, “ha\'e” é “eu disse”.',
    ],
    quiz: [
      {
        question: 'O que vem depois de uma fala citada para dizer “disse”?',
        options: ['he\'i', 'ramo', 'va\'e'],
        answer: 'he\'i',
        explanation: '“— Eju — he\'i”: “Venha”, disse.',
      },
      {
        question: 'Como fica “-\'e” (dizer) com “vocês”?',
        options: ['peje', 'pe\'e', 'he\'i'],
        answer: 'peje',
        explanation: 'O léxico dá “peje”: vocês dizem, ou “digam!”.',
      },
    ],
  },
  {
    id: 'gun-g16',
    level: 'B1.4',
    title: 'Como eu sei? je, ra\'e, kuri, raka\'e, nda\'u',
    emoji: '🔍',
    summary: 'O mbyá marca de onde vem o que se conta: je (ouvi dizer), ra\'e (acabei de descobrir), kuri (vi hoje), raka\'e (antigamente, não vi), nda\'u (será que…?).',
    sections: [
      {
        // Dooley 2006, p. 63 (je: «Indica fonte indireta de informação»; «xeryvy je oexa kuri mboi dizem que meu irmão viu
        // uma cobra; ha'e ranhe je ijayvu foi ele que falou primeiro, se diz»; «xeryvy oiko tema je ka'aguy re»); p. 167
        // (ra'e: «Indica um descobrimento, isto é, indica que um fato é constatado apenas no instante relatado: avaẽ rã oo
        // ra'e quando cheguei, descobri que ele tinha ido; opa ra'e»); p. 94 (kuri2: «Hoje mais cedo ou mais tarde (ação
        // presenciada pelo falante): aju kuri vim hoje»); p. 164 (raka'e: «antigamente (não presenciado pelo falante):
        // mboi avi oiko raka'e»); p. 119 (nda'u); p. 65 (jekue: «aendu jekue rive'i é apenas algo que ouço dizer»),
        // lidos na imagem
        text: 'Em português, quem conta pode dizer “parece”, “dizem que”, “olha só”. O mbyá tem palavrinhas próprias para isso, logo depois do verbo ou da palavra em destaque. Elas dizem se quem fala viu, ouviu contar ou só agora descobriu.',
        table: {
          head: ['Palavra', 'De onde vem a notícia', 'Exemplo', 'Tradução'],
          rows: [
            ['je', 'ouvi dizer', 'Xeryvy je oexa kuri mboi.', 'Dizem que meu irmão viu uma cobra.'],
            ['ra\'e', 'acabei de descobrir', 'Avaẽ rã oo ra\'e.', 'Quando cheguei, vi que ele tinha ido.'],
            ['kuri', 'vi, hoje', 'Aju kuri.', 'Vim hoje.'],
            ['raka\'e', 'antigamente, não vi', 'Mboi avi oiko raka\'e.', 'A cobra também existia antigamente.'],
            ['nda\'u', 'será que…?', 'Ndee mba\'eve ri nda\'u nderejapoi?', 'Será que você não fez nada?'],
          ],
        },
        examples: [
          ['Ha\'e ranhe je ijayvu.', 'Foi ele que falou primeiro, dizem.'],
          ['Aendu jekue rive\'i.', 'É só algo que ouço dizer.'],
          // Dooley 2006, p. 100-101 (-ma'ẽ guaxu), lido na imagem
          ['Urukure\'a kuery je oma\'ẽ guaxu \'rã oke vy.', 'Dizem que as corujas, dormindo, ficam com os olhos bem abertos.'],
        ],
      },
      {
        heading: 'No Guairá: ndaje',
        // Cadogan 1959, cap. XVIII, «Poraéi kunumingue oñevanga a» (cantos com que as crianças acompanham as
        // brincadeiras), PDF da USP, p. 177, lido na imagem: «Parakáo ndaje omano. / Mba'ére nda omano? / Endy rei
        // omano.» («Dicen que el loro ha muerto. ¿Porqué será que murió? Estalló en llamas y murió.»). Grafia convertida
        // pela regra declarada em gun-g15 (sem os acentos; «parakáo» vai como «parakau», a grafia do léxico de Dooley,
        // p. 136). Dooley registra «je» como a partícula; a forma «ndaje» é a do texto de Cadogan.
        text: 'Num canto de brincadeira das crianças mbyá do Guairá, registrado por Cadogan em 1959, o “ouvi dizer” aparece como “ndaje”. A grafia foi convertida para a de Dooley; a palavra “ndaje” é a do Guairá.',
        examples: [
          ['Parakau ndaje omano.', 'Dizem que o papagaio morreu. (Cadogan, “Ayvu Rapyta”, 1959)'],
          ['Endy rei omano.', 'Pegou fogo e morreu. (Cadogan, 1959)'],
        ],
      },
    ],
    pitfalls: [
      'Contar com “je” algo que você mesmo viu: “je” é “ouvi dizer”.',
      'Confundir “kuri” (hoje, e quem fala viu) com “raka\'e” (antigamente, sem ter visto).',
      'Achar que “ra\'e” é passado: ele marca a surpresa de quem só agora descobriu.',
    ],
    quiz: [
      {
        question: 'Qual palavra diz “dizem que, ouvi dizer”?',
        options: ['je', 'kuri', 'ra\'e'],
        answer: 'je',
        explanation: '“Xeryvy je oexa kuri mboi”: dizem que meu irmão viu uma cobra.',
      },
      {
        question: '“Opa ra\'e” quer dizer…',
        options: ['Já terminou (e só agora percebo)', 'Vai terminar', 'Dizem que terminou'],
        answer: 'Já terminou (e só agora percebo)',
        explanation: '“Ra\'e” marca a descoberta no momento.',
      },
      {
        question: 'Qual destas é para o que aconteceu antigamente, sem quem fala ter visto?',
        options: ['raka\'e', 'kuri', 'nda\'u'],
        answer: 'raka\'e',
        explanation: '“Mboi avi oiko raka\'e”: a cobra também existia antigamente.',
      },
    ],
  },
];
