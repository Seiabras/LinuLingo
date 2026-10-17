import type { UnitSeed } from '../types';

/**
 * Trilha do guarani mbyá, do A1.1 ao A2.2 (curso completo até o teto A2 — ver `incomplete` em
 * index.ts). A1.1 ganhou duas lições extras (gun-u1-l4 e gun-u1-l5) e o A2 tem as unidades 3 e 4
 * (17/10/2026). Nas lições novas, toda frase em mbyá é um exemplo do léxico de Robert A. Dooley
 * («Léxico Guarani, dialeto Mbyá», SIL, versão de 2006), com a página no comentário; as frases com ẽ, ĩ
 * ou ỹ foram lidas na imagem da página. Nenhuma frase foi montada: os diálogos dos exercícios de voz
 * juntam duas frases do léxico, cada uma do jeito que está lá.
 *
 * Unidades 1 e 2 (antes): Fontes: ver o cabeçalho de vocabulario.ts e o relatório da tarefa.
 * As frases evitam qualquer morfologia que não tenha sido confirmada nas fontes (não há, nas fontes
 * consultadas, uma partícula de pergunta nem a conjugação completa dos verbos ativos do mbyá): por
 * isso os diálogos giram em torno de saudações, pronomes e frases sem cópula («Kova'e tekoa porã.»,
 * no padrão confirmado para a língua), nunca de perguntas construídas por semelhança com o guarani
 * paraguaio.
 */
export const UNITS_GUN: UnitSeed[] = [
  {
    id: 'gun-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete! Ñepyrũ',
    emoji: '👋',
    card: {
      id: 'gun-c1',
      title: 'Mbya: uma língua viva nas aldeias do Brasil',
      emoji: '🌿',
      history:
        'O guarani mbyá (nhandeayvu, “nossa língua”, ou ayvu, “fala”) é uma língua tupi-guarani viva, falada por cerca de 49 mil pessoas em aldeias (tekoa) do litoral e do sul do Brasil — do Espírito Santo ao Rio Grande do Sul, passando por São Paulo, Paraná e Santa Catarina — além da Argentina (Misiones, Corrientes) e do Paraguai oriental. É cerca de 75% parecida em vocabulário com o guarani paraguaio (avañe\'ẽ, pacote “gn” deste app), já que as duas pertencem ao mesmo subgrupo I da família tupi-guarani — primas próximas, não a mesma língua: o mbyá nunca teve uma academia oficial como a do Paraguai, e foi documentado sobretudo por linguistas como Robert A. Dooley (SIL Brasil), autor do léxico guarani-português de referência sobre o dialeto mbyá. A Unesco classifica o mbyá como língua vulnerável no Atlas Mundial das Línguas em Perigo (2010).',
      culture_tip:
        'Ao chegar numa tekoa, é comum ouvir “Aguyjevete!” dito de mãos erguidas — uma palavra sagrada que funciona como saudação de boas-vindas e, ao mesmo tempo, como agradecimento profundo a Nhanderu. No dia a dia, o agradecimento mais simples é “Ha\'evete”. Entre as tekoa mais conhecidas estão Jaraguá e Tenondé Porã (São Paulo), Piraí e Itaty/Morro dos Cavalos (Santa Catarina) e Tekoa Pindó Mirim, em Itapuã (Viamão, Rio Grande do Sul).',
      grammar_why:
        'O guarani mbyá não tem um verbo “ser” como o português: duas palavras lado a lado já formam uma frase completa. “Xee kunha” já quer dizer “Eu sou mulher” (lit. “eu mulher”), e um exemplo registrado pelos linguistas mostra o mesmo padrão com adjetivo: “kunha ipuku” (lit. “mulher ela-alta”) é como se diz “a mulher é alta”. Os pronomes também marcam uma distinção que o português não tem: “nhande” é o “nós” que inclui quem ouve, e “ore” é o “nós” que não inclui.',
      grammar_examples: [
        ['Aguyjevete, xaryi!', 'Bem-vinda / muito obrigado, avó!'],
        ['Xee kunha.', 'Eu sou mulher.'],
        ['Ndee ava.', 'Você é homem.'],
        ['Ha\'e xamoi.', 'Ele é o ancião.'],
      ],
      character_guide: [
        ['ã, ẽ, ĩ, õ, ũ', 'vogal nasal: sai pelo nariz', 'xee nhandeayvu (minha língua), tekoa'],
        ['\' (puso)', 'uma pausa curta na garganta (oclusiva glotal)', 'ha\'e (ele, ela), tapi\'i (anta)'],
        ['x', 'som parecido com o “ch” do francês ou o “sh” do inglês', 'xee (eu), xamoi (avô), xondaro (guardião)'],
        ['nh', 'som do “nh” de “ninho”', 'nhe\'e (espírito), nhanderu (Deus)'],
        ['y', 'uma vogal só do guarani, entre o “u” e o “i”', 'y (água), yvy (terra)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u1-l1',
        title: 'Aguyjevete, ha\'evete, jurua',
        kind: 'licao',
        words: ['aguyjevete', 'ha\'evete', 'xee', 'ndee', 'ha\'e', 'jurua'],
        cloze: [
          { sentence: '“___, xaryi!” (chegando na tekoa)', answer: 'Aguyjevete', options: ['Aguyjevete', 'Jurua', 'Ndee'], translation: '“Bem-vinda, avó!” (chegando na aldeia)' },
          { sentence: '___ kunha.', answer: 'Ha\'e', options: ['Ha\'e', 'Xee', 'Ndee'], translation: 'Ela é mulher.' },
          { sentence: 'Ha\'e ___.', answer: 'jurua', options: ['jurua', 'xamoi', 'xaryi'], translation: 'Ele é um juruá (não indígena).' },
        ],
        voice: {
          bot: 'Aguyjevete!',
          botTranslation: 'Bem-vindo(a)!',
          expected: ['Aguyjevete! Ha\'evete.', 'aguyjevete', 'ha\'evete'],
          hint: 'Devolva a saudação com “Aguyjevete!” e agradeça com “Ha\'evete”.',
        },
        communityPrompt: 'Escreva uma saudação em guarani mbyá: cumprimente com “Aguyjevete”, diga quem você é com “Xee…” e aponte alguém com “Ha\'e…”.',
      },
      {
        id: 'gun-u1-l2',
        title: 'Nhande, ore, peẽ, ava',
        kind: 'licao',
        words: ['nhande', 'ore', 'peẽ', 'ava', 'kunha', 'mitã'],
        cloze: [
          { sentence: '___ reko.', answer: 'Nhande', options: ['Nhande', 'Ore', 'Peẽ'], translation: 'Nosso jeito de ser (de todos nós, incluindo quem ouve).' },
          { sentence: '___ ava.', answer: 'Peẽ', options: ['Peẽ', 'Ore', 'Nhande'], translation: 'Vocês são homens.' },
          { sentence: 'Ha\'e kuery ___.', answer: 'mitã', options: ['mitã', 'kunha', 'ava'], translation: 'Eles são crianças.' },
        ],
        voice: {
          bot: 'Nhande reko.',
          botTranslation: 'Nosso jeito de ser (de todos nós).',
          expected: ['Ore reko.', 'ore', 'nhande'],
          hint: 'Troque “nhande” (nós incluindo quem ouve) por “ore” (nós sem incluir quem ouve).',
        },
        communityPrompt: 'Escreva frases com “nhande” e “ore”, e descreva pessoas da aldeia com “ava”, “kunha” e “mitã”.',
      },
      {
        // lição extra (17/10/2026): cumprimentos e pessoas; Dooley 2006, p. 192 (javy ju), p. 135 (Erevy porã
        // pa?), p. 93 (kunumi, kunhataĩ, lidos na imagem)
        id: 'gun-u1-l4',
        title: 'Javy ju! Os mais velhos e os jovens',
        kind: 'licao',
        words: ['javy ju', 'Erevy porã pa?', 'xamoi', 'xaryi', 'kunumi', 'kunhataĩ'],
        cloze: [
          // Dooley 2006, p. 135
          { sentence: '___ porã pa?', answer: 'Erevy', options: ['Erevy', 'Javy ju', 'Xamoi'], translation: 'Você se levantou bem?' },
          // Dooley 2006, p. 93 (peteĩ kunumi, um jovem)
          { sentence: 'Peteĩ ___.', answer: 'kunumi', options: ['kunumi', 'xaryi', 'kunhataĩ'], translation: 'Um rapaz.' },
          // Dooley 2006, p. 93 (kunhataĩgue, moças: -gue é o plural)
          { sentence: '___gue.', answer: 'Kunhataĩ', options: ['Kunhataĩ', 'Kunumi', 'Xamoi'], translation: 'Moças.' },
        ],
        voice: {
          bot: 'Javy ju!',
          botTranslation: 'Saudação: “levantamo-nos de novo”.',
          expected: ['Javy ju!', 'javy ju', 'Erevy porã pa?'],
          hint: 'Devolva a saudação com “Javy ju!” ou pergunte “Erevy porã pa?” (você se levantou bem?).',
        },
        communityPrompt: 'Cumprimente em guarani mbyá com “Javy ju!” e “Erevy porã pa?”, e diga quem mora com você: xamoi (avô), xaryi (avó), kunumi (rapaz), kunhataĩ (moça).',
      },
      {
        // lição extra (17/10/2026): o nome e a língua; Dooley 2006, p. 135 e p. 39 (Marã rami pa nderery?), p.
        // 76 e p. 26 (jurua ayvu py), p. 122 (nhandeayvu py)
        id: 'gun-u1-l5',
        title: 'Marã rami pa nderery? O nome e a língua',
        kind: 'licao',
        words: ['Marã rami pa nderery?', 'jurua ayvu', 'nhandeayvu', 'ayvu', 'kova\'e', 'ha\'e kuery'],
        cloze: [
          // Dooley 2006, p. 135
          { sentence: 'Marã rami pa ___?', answer: 'nderery', options: ['nderery', 'nhandeayvu', 'jurua'], translation: 'Qual é o seu nome?' },
          // Dooley 2006, p. 26 (jurua ayvu py ijayvu, falou em português)
          { sentence: '___ ayvu py ijayvu.', answer: 'Jurua', options: ['Jurua', 'Kova\'e', 'Xamoi'], translation: 'Falou em português (na fala do juruá).' },
          // Dooley 2006, p. 26 (nhandeayvu py ijayvu, falou em nossa língua)
          { sentence: '___ py ijayvu.', answer: 'Nhandeayvu', options: ['Nhandeayvu', 'Kova\'e', 'Ha\'e kuery'], translation: 'Falou em nossa língua (o guarani).' },
        ],
        voice: {
          bot: 'Marã rami pa nderery?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Marã rami pa nderery?', 'nderery'],
          hint: 'Repita a pergunta: “nderery” é “o teu nome”, e “pa” fecha a pergunta.',
        },
        communityPrompt: 'Escreva em que língua você fala no dia a dia: “jurua ayvu py” (em português) ou “nhandeayvu py” (em nossa língua, o guarani). E pergunte o nome de alguém: “Marã rami pa nderery?”.',
      },
      {
        id: 'gun-u1-l3',
        title: 'Test: ñepyrũ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Xee xamoi.',
          botTranslation: 'Bem-vindo! Eu sou o ancião.',
          expected: ['Aguyjevete, xamoi! Xee kunha.', 'aguyjevete', 'ha\'evete'],
          hint: 'Devolva a saudação com “Aguyjevete” e diga quem você é com “Xee…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: saudação com “Aguyjevete”, quem você é (“Xee…”) e outra pessoa (“Ha\'e…”).',
      },
    ],
  },
  {
    id: 'gun-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Yvy, kuaray, tata',
    emoji: '🌞',
    card: {
      id: 'gun-c2',
      title: 'Nhe\'e, nhanderu, tekoa: o mundo e o espírito',
      emoji: '✨',
      history:
        'Para o povo mbyá, cada pessoa recebe de Nhanderu (nosso Pai Supremo, Deus Criador) um nhe\'e — espírito ou alma — que só se completa quando a criança recebe seu nome verdadeiro (tery) no ritual do nhemongarai, celebrado na opy\'i (casa de reza) com o petyngua (cachimbo sagrado). O mesmo ritual batiza também o milho e a erva-mate sagrada (ka\'a\'i) antes da colheita. Por trás disso está o nhandereko: o modo de ser mbyá, a relação entre a vida, o território e a espiritualidade — o que o jurua (não indígena) chamaria de “cultura”. A busca histórica por um território sagrado sem sofrimento, a yvy marã e\'ỹ (“terra sem mal”), explica em parte por que os mbyá vivem espalhados em muitas tekoa pequenas, em vez de um território único e contínuo.',
      culture_tip:
        'A contagem mbyá tradicional usa como base o número cinco (os dedos de uma mão) e forma pares dentro de cada grupo de cinco — porque, para os mbyá, várias coisas do mundo vêm aos pares: o sol e a lua, o homem e a mulher, as duas orelhas. Por isso “peteĩ” (um) quer dizer “sem par”, “mokoĩ” (dois) é “um par” e “mboapy” (três) já é o “início de um novo par”.',
      grammar_why:
        'Assim como os pronomes, os substantivos de natureza não precisam de artigo nem de verbo “ser”: “kuaray porã” já é “o sol é bonito” ou “o sol está bom”. Para apontar algo, o mbyá usa o demonstrativo “kova\'e” (este, esta, isto) antes do nome, como no exemplo registrado pelos linguistas “kova\'e oo porã” (esta casa bonita). O adjetivo vem sempre depois do substantivo que descreve, nunca antes.',
      grammar_examples: [
        ['Kova\'e tekoa porã.', 'Esta é uma aldeia bonita. / Esta aldeia é bonita.'],
        ['Yva pytã.', 'O céu é vermelho.'],
        ['Jagua guaxu.', 'O cachorro é grande.'],
        ['Mokoĩ ava.', 'Dois homens.'],
      ],
      character_guide: [
        ['nh', 'som do “nh” de “ninho”, em quase toda palavra sagrada', 'nhe\'e, nhanderu, nhemongarai, nhandereko'],
        ['\' (puso)', 'pausa curta na garganta', 'opy\'i (casa de reza), ka\'i (macaco)'],
        ['x', 'som parecido com “ch”/“sh”', 'tapi\'i tem puso, e xondaro e xamoi usam o x'],
        ['y', 'vogal própria do guarani', 'y (água), yvy (terra), yva (céu)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u2-l1',
        title: 'Tekoa, kuaray, jaxy, y',
        kind: 'licao',
        words: ['tekoa', 'kuaray', 'jaxy', 'ára', 'y', 'yvy'],
        cloze: [
          { sentence: 'Kova\'e ___.', answer: 'kuaray', options: ['kuaray', 'jaxy', 'ára'], translation: 'Isto é o sol.' },
          { sentence: 'Kova\'e ___.', answer: 'y', options: ['y', 'yvy', 'jaxy'], translation: 'Isto é a água.' },
          { sentence: 'Kova\'e ___.', answer: 'tekoa', options: ['tekoa', 'yvy', 'yva'], translation: 'Isto é a aldeia.' },
        ],
        voice: {
          bot: 'Kova\'e tekoa.',
          botTranslation: 'Esta é a aldeia.',
          expected: ['Kova\'e yvy.', 'yvy', 'tekoa'],
          hint: 'Aponte para outra coisa com “Kova\'e…”, como a terra (“yvy”).',
        },
        communityPrompt: 'Aponte coisas da natureza com “Kova\'e…”: o sol (kuaray), a lua (jaxy), a água (y) e a terra (yvy).',
      },
      {
        id: 'gun-u2-l2',
        title: 'Tata, pytũ, jagua, porã',
        kind: 'licao',
        words: ['tata', 'pytũ', 'jagua', 'guyra', 'mboi', 'porã'],
        cloze: [
          { sentence: 'Kova\'e ___.', answer: 'tata', options: ['tata', 'pytũ', 'jagua'], translation: 'Isto é o fogo.' },
          { sentence: 'Kova\'e jagua ___.', answer: 'porã', options: ['porã', 'vaikue', 'guaxu'], translation: 'Este cachorro é bonito.' },
          { sentence: 'Kova\'e ___.', answer: 'guyra', options: ['guyra', 'mboi', 'jagua'], translation: 'Isto é o pássaro.' },
        ],
        voice: {
          bot: 'Kova\'e pytũ.',
          botTranslation: 'Isto é a noite (a escuridão).',
          expected: ['Kova\'e tata.', 'tata', 'pytũ'],
          hint: 'Fale de outra coisa com “Kova\'e…”, como o fogo (“tata”) que ilumina a noite.',
        },
        communityPrompt: 'Descreva os animais da aldeia com “Kova\'e…”: o cachorro (jagua), o pássaro (guyra), a cobra (mboi) — diga se são “porã” (bonitos).',
      },
      {
        id: 'gun-u2-l3',
        title: 'Test: yvy ha\'e tekoa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Kova\'e tekoa, kova\'e kuaray, kova\'e y.',
          botTranslation: 'Bem-vindo! Esta é a aldeia, este é o sol, esta é a água.',
          expected: ['Aguyjevete! Kova\'e tata, kova\'e jagua.', 'kova\'e', 'aguyjevete'],
          hint: 'Responda à saudação e aponte mais coisas da aldeia e da natureza com “Kova\'e…”.',
        },
        communityPrompt: 'Escreva seis frases com “Kova\'e…” sobre a natureza e os animais da tekoa, usando pelo menos quatro palavras desta unidade.',
      },
    ],
  },
  {
    id: 'gun-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Aexa, akaru, ake: o dia e a família',
    emoji: '🏠',
    card: {
      id: 'gun-c3',
      title: 'Jakaru jojavi: a família e a língua reconhecida',
      emoji: '👨‍👩‍👧',
      // CTI, «Língua Guarani Mbya reconhecida como referência cultural brasileira» (Rafael Nakamura, 25/09/2014):
      // INDL/IPHAN, inventário do IPOL em 69 comunidades do ES ao RS; ISA, Povos Indígenas no Brasil, «Guarani
      // Mbya» (Maria Inês Ladeira), seção sobre a língua: escrita nas aldeias a partir de 1997, escolas
      // bilíngues, reações favoráveis e contrárias
      history:
        'Em 2014, o IPHAN reconheceu o guarani mbyá como referência cultural brasileira, pelo Inventário Nacional da Diversidade Linguística. Para isso, uma equipe do IPOL visitou 69 comunidades guarani, do Espírito Santo ao Rio Grande do Sul, e perguntou aos próprios falantes como eles definem a língua e como ela passa de pais para filhos. A escrita em guarani entrou com mais força nas aldeias a partir de 1997, com as escolas bilíngues. Entre os mbyá, há quem goste e há quem desconfie: alguns acham que a criança alfabetizada muito cedo em guarani perde a fluência e a entonação da língua da família.',
      // ISA, «Guarani Mbya», seção sobre a organização social: família extensa (casal, filhas, genros e netos);
      // liderança espiritual do tamõi (avô, genérico) e da kunhã karai
      culture_tip:
        'A família mbyá tradicional é grande: o casal, as filhas, os genros e os netos, que trabalham e comem juntos. Quem guia a vida espiritual da aldeia é o tamõi, palavra que quer dizer “avô”, e também pode ser uma mulher, a kunhã karai. Por isso as palavras de família são tão importantes: no mbyá, “pai” nunca vem sozinho, vem sempre com o dono, “xeru”, meu pai.',
      // Martins 2003, p. 36 (Quadro 1) e p. 37; Dooley 2006, p. 1 (a-), p. 181 (-u1)
      grammar_why:
        'O verbo mbyá não muda no fim, como o português: muda no começo. Um prefixo diz quem faz a ação: “aexa” (eu vi), “erexa” (você viu), “oexa” (ele viu), “jaexa” (nós vimos, com você), “oroexa” (nós vimos, sem você), “pexa” (vocês viram). Os nomes de família e do corpo levam outra série de prefixos, a do dono: “xeru” (meu pai), “nderery” (teu nome), “pendeayvu” (a língua de vocês).',
      grammar_examples: [
        // Dooley 2006, p. 122 e p. 132 (lidos na imagem)
        ['Nhande pavẽ jaexa tata.', 'Todos nós (vocês também) vimos o fogo.'],
        ['Ore pavẽ oroexa.', 'Todos nós (mas não vocês) vimos.'],
        // Dooley 2006, p. 129
        ['Aa ta xero py.', 'Vou à minha casa.'],
        // Dooley 2006, p. 87
        ['Aikuaaxe pendeayvu.', 'Quero saber a língua de vocês.'],
      ],
      // Martins 2003, p. 36; Dooley 2006, pp. 1, 28, 75, 84, 99, 119, 122, 132, 181
      character_guide: [
        ['a-', 'eu (no verbo)', 'aexa (vi), akaru (comi), ake (dormi)'],
        ['ere- / re-', 'você', 'erexa (você viu), reju (você vem)'],
        ['o-', 'ele, ela, eles, elas', 'oexa (viu)'],
        ['ja- / nha-', 'nós, com quem ouve (nha- antes de som nasal)', 'jaexa (vimos), nhamba\'eapo (trabalhamos)'],
        ['oro- / ro-', 'nós, sem quem ouve', 'oroexa (vimos)'],
        ['pe-', 'vocês', 'pexa (vocês viram)'],
        ['xe- / nde-', 'meu / teu (no nome)', 'xeru (meu pai), nderery (teu nome)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u3-l1',
        title: 'Aexa, akaru, ake: os verbos do dia',
        kind: 'licao',
        words: ['exa', 'karu', 'ke', 'ju', 'mba\'eapo', 'kuaa'],
        cloze: [
          // Dooley 2006, p. 72
          { sentence: '___ jojavi.', answer: 'Jakaru', options: ['Jakaru', 'Ake', 'Aju'], translation: 'Comemos todos juntos.' },
          // Dooley 2006, p. 122 (lido na imagem)
          { sentence: 'Nhande pavẽ ___ tata.', answer: 'jaexa', options: ['jaexa', 'oroexa', 'pexa'], translation: 'Todos nós (vocês também) vimos o fogo.' },
          // Dooley 2006, p. 104
          { sentence: '___ atã va\'e.', answer: 'Amba\'eapo', options: ['Amba\'eapo', 'Akaru', 'Ake'], translation: 'Sou um que trabalha duro.' },
        ],
        // Dooley 2006, p. 4 (aa ta akaru, vou comer) e p. 72 (jakaru jojavi): duas frases do léxico
        voice: {
          bot: 'Aa ta akaru.',
          botTranslation: 'Vou comer.',
          expected: ['Jakaru jojavi.', 'jakaru'],
          hint: 'Convide para comer junto: “Jakaru jojavi” (comemos todos juntos), com ja- de “nós com você”.',
        },
        communityPrompt: 'Conte o seu dia com os verbos da lição: akaru (comi), ake (dormi), amba\'eapo (trabalhei), aexa (vi). Depois troque a- por ja- para falar de “nós”.',
      },
      {
        id: 'gun-u3-l2',
        title: 'Xeru, ha\'i, xera\'y: a família e a casa',
        kind: 'licao',
        words: ['xeru', 'ha\'i', 'xera\'y', 'xememby', 'oo', 'tembi\'u'],
        cloze: [
          // Dooley 2006, p. 129
          { sentence: 'Aa ta ___ py.', answer: 'xero', options: ['xero', 'xeru', 'ha\'i'], translation: 'Vou à minha casa.' },
          // Dooley 2006, p. 43
          { sentence: 'Aexaxe vaipa ___.', answer: 'xera\'y', options: ['xera\'y', 'tembi\'u', 'oo'], translation: 'Tenho saudades de ver o meu filho.' },
          // Dooley 2006, p. 30
          { sentence: '___ hee va\'e.', answer: 'Tembi\'u', options: ['Tembi\'u', 'Oo', 'Xememby'], translation: 'Comida gostosa.' },
        ],
        // Dooley 2006, p. 39 (mbojape aru ndevy); a resposta é a palavra do A1 (TCC de Karai Nhe'ery)
        voice: {
          bot: 'Mbojape aru ndevy.',
          botTranslation: 'Eu trouxe pão para você.',
          expected: ['Ha\'evete!', 'ha\'evete', 'aguyjevete'],
          hint: 'Agradeça: “Ha\'evete!”.',
        },
        communityPrompt: 'Apresente a sua família em mbyá: xeru (meu pai), ha\'i (minha mãe), xera\'y (meu filho, dito pelo pai), xememby (minha filha, dito pela mãe). E diga o que tem na sua casa (oo).',
      },
      {
        id: 'gun-u3-l3',
        title: 'Teste: Marã rami pa pendeka\'aru?',
        kind: 'prova',
        words: [],
        cloze: [],
        // Dooley 2006, p. 83: pergunta e resposta do mesmo verbete (ka'aru)
        voice: {
          bot: 'Marã rami pa pendeka\'aru?',
          botTranslation: 'Como vocês estão passando a tarde?',
          expected: ['Nhandeka\'aru porãmba rei.', 'nhandeka\'aru', 'porãmba'],
          hint: 'Responda que todos estão passando bem a tarde: “Nhandeka\'aru porãmba rei.”',
        },
        communityPrompt: 'Escreva uma tarde na tekoa: quem veio (aju, ou), o que comeram (jakaru) e quem dançou (ojeroky). Use xe- e nde- para a família.',
      },
    ],
  },
  {
    id: 'gun-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mamo pa ereo? A mata e o tempo',
    emoji: '🌳',
    card: {
      id: 'gun-c4',
      title: 'Ára pyau, ára yma: o tempo novo e o tempo velho',
      emoji: '🌦️',
      // ISA, «Guarani Mbya» (Maria Inês Ladeira): dois tempos, ara pyau («calor», primavera-verão) e ara yma
      // («frio», outono-inverno); o nhemongarai coincide com os «tempos novos» (ara pyau), de fortes temporais;
      // «Kayguá» de ka'aguygua, «habitantes das matas»; Dooley 2006, p. 17 (ára pyau: começo do ano novo, a
      // primavera, geralmente em agosto ou setembro; ára yma: o fim do ano velho, o inverno)
      history:
        'Para os mbyá, o ano tem dois tempos: “ára pyau”, o tempo novo, do calor (primavera e verão), e “ára yma”, o tempo velho, do frio (outono e inverno). O ano novo começa por volta de agosto ou setembro. É no tempo novo, com as chuvas fortes do verão, que se faz o nhemongarai, quando o milho é colhido e abençoado e as crianças recebem o nome. A mata também marca a história do povo: nos séculos XVIII e XIX, os guarani que fugiram das missões e dos colonos foram chamados de “caaiguás”, de “ka\'aguygua”, os habitantes das matas.',
      // ISA, «Guarani Mbya»: a tekoa precisa de mata preservada, terra para a roça e nascentes; a caça não é
      // corriqueira, tem regras rigorosas e vem diminuindo com a fragmentação da Mata Atlântica
      culture_tip:
        'Uma tekoa precisa de mata preservada, de terra boa para a roça e de nascentes de água. A caça não é coisa de todo dia: tem regras rigorosas sobre o que comer e em que época, e vem diminuindo porque a Mata Atlântica foi cortada em pedaços. Por isso, nas histórias e nas falas, “ka\'aguy” (a mata) aparece quase sempre ligada à vida da aldeia.',
      // Dooley 2006, p. 118-119 (nda-…-i), p. 13 (any), p. 163 ('rã), p. 135 (pa)
      grammar_why:
        'Para negar, o verbo fica entre “nda-” e “-i”: “aexa” (vi) vira “ndaexai” (não vi). Para responder só “não”, basta “any”. O futuro não muda o verbo: vem a partícula “\'rã” depois dele, como em “nda\'okyi \'rã” (não vai chover). E para perguntar “sim ou não”, entra “pa”: “Ereru pa peráta?” (você trouxe o dinheiro?).',
      grammar_examples: [
        // Dooley 2006, p. 195
        ['Xee ndaexai mba\'eve rei.', 'Eu não vi nada.'],
        // Dooley 2006, p. 163
        ['Nda\'okyi \'rã.', 'Não vai chover.'],
        // Dooley 2006, p. 99
        ['Mamo pa ereo?', 'Para onde você vai?'],
        // Dooley 2006, p. 103
        ['Mba\'e re tu peju?', 'Por que vocês vieram?'],
      ],
      // Dooley 2006, pp. 13, 97, 99, 100, 103, 118, 135, 163, 172
      character_guide: [
        ['nda- … -i', 'não (no verbo)', 'ndaexai (não vi), ndaai (não vou)'],
        ['any', 'não (resposta)', 'Xee any. (eu não)'],
        ['ma', 'já', 'Xee aa ta ma. (eu já vou)'],
        ['\'rã', 'futuro', 'Nda\'okyi \'rã. (não vai chover)'],
        ['pa', 'pergunta', 'Ereru pa peráta? (trouxe o dinheiro?)'],
        ['mamo / mava\'e', 'onde / quem', 'Mamo pa ereo? (para onde vai?)'],
      ],
    },
    lessons: [
      {
        id: 'gun-u4-l1',
        title: 'Ka\'aguy re: na mata',
        kind: 'licao',
        words: ['ka\'aguy', 'yvyra', 'ita', 'xivi', 'pira', 'tape'],
        cloze: [
          // Dooley 2006, p. 82
          { sentence: 'Aa ta ___ re.', answer: 'ka\'aguy', options: ['ka\'aguy', 'ita', 'pira'], translation: 'Vou para a floresta.' },
          // Dooley 2006, p. 39 (guaxu é também o veado: p. 47, guaxu2)
          { sentence: 'Xivi oguero\'a ___.', answer: 'guaxu', options: ['guaxu', 'pira', 'ita'], translation: 'A onça agarrou o veado.' },
          // Dooley 2006, p. 13
          { sentence: '___ rupi.', answer: 'Tape', options: ['Tape', 'Yvyra', 'Ita'], translation: 'Pelo caminho.' },
        ],
        // Dooley 2006, p. 99 (Mamo pa ereo?) e p. 82 (aa ta ka'aguy re): duas frases do léxico
        voice: {
          bot: 'Mamo pa ereo?',
          botTranslation: 'Para onde você vai?',
          expected: ['Aa ta ka\'aguy re.', 'ka\'aguy'],
          hint: 'Diga que vai para a mata: “Aa ta ka\'aguy re.”',
        },
        communityPrompt: 'Descreva um passeio na mata em mbyá: ka\'aguy (mata), yvyra (árvore), ita (pedra), tape (caminho), e os bichos que você viu: xivi (onça), pira (peixe).',
      },
      {
        id: 'gun-u4-l2',
        title: 'Kuee, ange, ko\'ẽ rã: ontem, hoje, amanhã',
        kind: 'licao',
        words: ['kuee', 'ange', 'ko\'ẽ rã', 'oky', 'yvytu', 'any'],
        cloze: [
          // Dooley 2006, p. 163
          { sentence: 'Nda\'okyi ___.', answer: '\'rã', options: ['\'rã', 'ma', 'pa'], translation: 'Não vai chover.' },
          // Dooley 2006, p. 139
          { sentence: '___ oipeju atã.', answer: 'Yvytu', options: ['Yvytu', 'Oky', 'Ita'], translation: 'O vento soprou com força.' },
          // Dooley 2006, p. 83 (lido na imagem)
          { sentence: '___ ka\'aru\'i xero katy aa vy aexa mboi.', answer: 'Kuee', options: ['Kuee', 'Ange', 'Ko\'ẽ rã'], translation: 'Ontem à tardinha, indo para minha casa, vi uma cobra.' },
        ],
        // Dooley 2006, p. 135 (Ereru pa peráta?) e p. 13 (any, resposta): duas entradas do léxico
        voice: {
          bot: 'Ereru pa peráta?',
          botTranslation: 'Você trouxe o dinheiro?',
          expected: ['Any.', 'any', 'tá'],
          hint: 'Responda “não” com “Any.” (ou “sim” com “Tá.”).',
        },
        communityPrompt: 'Escreva três frases sobre o tempo: uma com kuee (ontem), uma com ange (hoje) e uma com ko\'ẽ rã (amanhã). Vai chover (oky)? Diga com “\'rã” ou negue com “nda-…-i”.',
      },
      {
        id: 'gun-u4-l3',
        title: 'Teste: Mamo pa ereo?',
        kind: 'prova',
        words: [],
        cloze: [],
        // Dooley 2006, p. 99 e p. 129: duas frases do léxico
        voice: {
          bot: 'Mamo pa ereo?',
          botTranslation: 'Para onde você vai?',
          expected: ['Aa ta xero py.', 'xero py', 'ka\'aguy'],
          hint: 'Diga que vai para casa: “Aa ta xero py.”',
        },
        communityPrompt: 'Escreva uma conversa curta em mbyá: pergunte com “Mamo pa ereo?” ou “Mava\'e…?”, responda com “any” ou “tá”, e diga o que vai acontecer amanhã com “ko\'ẽ rã” e “\'rã”.',
      },
    ],
  },
];
