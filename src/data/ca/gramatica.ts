import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do catalão, do A1.1 ao C2 (em andamento). */
export const GRAMMAR_CA: GrammarTopic[] = [
  {
    id: 'ca-g1',
    level: 'A1.1',
    title: 'Pronúncia e ortografia básica',
    emoji: '🔤',
    summary:
      'O catalão tem um sistema gráfico próprio e sons bem específicos. As regras essenciais de pronúncia das vogais, símbolos gráficos únicos como o ponto geminado (l·l) e o fenômeno da apostrofação do artigo.',
    sections: [
      {
        heading: 'As vogais e a vogal neutra',
        text: 'O catalão tem 7 sons vocálicos tônicos (a, e aberto, e fechado, i, o aberto, o fechado, u). No catalão oriental (a fala padrão de Barcelona e das Baleares), as vogais «a» e «e» átonas (sem acento tônico) viram uma «vogal neutra» — um som entre o A e o E, parecido com o «a» final de «mesa» no português. As vogais «o» e «u» átonas geralmente soam «u».',
        examples: [
          ['casa', 'casa (o «a» final soa como vogal neutra)'],
          ['pare', 'pai (o «e» final soa como vogal neutra)'],
          ['mare', 'mãe (o «e» final soa como vogal neutra)'],
          ['poma', 'maçã (o «a» final soa como vogal neutra; o «o» inicial é tônico, então fica aberto, não reduz)'],
        ],
      },
      {
        heading: 'Símbolos gráficos e sons únicos',
        text: 'O catalão usa letras e combinações exclusivas que o diferenciam de outras línguas românicas.',
        table: {
          head: ['Grafia', 'Nome', 'Como soa'],
          rows: [
            ['l·l', 'ela geminada', 'l duplo e prolongado, com uma pequena pausa antes (ex.: «col·legi»)'],
            ['ny', 'ena i grega', 'igual ao «nh» do português (ex.: «Catalunya»)'],
            ['ç', 'c trencada', 'igual ao «ç» do português, um «s» surdo (ex.: «Barça»)'],
            ['ix', '—', 'som de «x»/«ch» do português depois de vogal (ex.: «caixa»)'],
            ['tg / tj', '—', 'parecido com o «dj» de «dia» no português do Brasil (ex.: «platja»)'],
          ],
        },
        examples: [
          ['col·legi', 'colégio'],
          ['Catalunya', 'Catalunha'],
          ['caixa', 'caixa'],
          ['platja', 'praia'],
        ],
      },
      {
        heading: 'Apostrofação (elisió)',
        text: 'Quando o artigo definido masculino «el» ou feminino «la» vem antes de palavra que começa com vogal ou h mudo, a vogal do artigo some e vira apóstrofo («l\'»). É para não ter pausa entre duas vogais.',
        examples: [
          ["l'home", 'o homem (el + home)'],
          ["l'aigua", 'a água (la + aigua)'],
          ["l'estació", 'a estação (la + estació)'],
          ["l'amiga", 'a amiga (la + amiga)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o «l·l» (ponto geminado) com «ll» junto: «ll» sem ponto soa «lh» português (ex.: «llit» = cama), «l·l» é um l duplo prolongado.',
      'Separar o «ny» em «n» + «y»: é um dígrafo só, com som de «nh».',
      'Esquecer de apostrofar o artigo antes de vogal ou h mudo (escrever «el home» em vez de «l\'home»).',
    ],
    quiz: [
      {
        question: 'Qual é a forma correta do artigo masculino «el» antes de «home» (homem)?',
        options: ['el home', "l'home", 'la home'],
        answer: "l'home",
        explanation: 'Antes de palavra que começa com vogal ou h mudo, «el» sofre elisão e vira «l\'».',
      },
      {
        question: 'Como se pronuncia «ny», como em «Catalunya»?',
        options: ['Como o «lh» do português', 'Como o «nh» do português', 'Como o «rr» do português'],
        answer: 'Como o «nh» do português',
        explanation: 'O dígrafo «ny» do catalão é igual ao «nh» do português.',
      },
    ],
  },
  {
    id: 'ca-g2',
    level: 'A1.1',
    title: 'Artigos, gênero e plural',
    emoji: '📦',
    summary: 'As regras de gênero e número dos substantivos em catalão, os artigos definidos e indefinidos, e as contrações obrigatórias com as preposições mais comuns.',
    sections: [
      {
        heading: 'Artigos definidos e indefinidos',
        text: 'O catalão tem artigos masculinos e femininos, no singular e no plural. Os artigos singulares definidos sofrem apostrofação antes de vogal ou h mudo.',
        table: {
          head: ['Gênero/número', 'Definido', 'Definido (antes de vogal/h)', 'Indefinido'],
          rows: [
            ['Masculino singular', 'el', "l'", 'un'],
            ['Feminino singular', 'la', "l'", 'una'],
            ['Masculino plural', 'els', 'els', 'uns'],
            ['Feminino plural', 'les', 'les', 'unes'],
          ],
        },
        examples: [
          ['el llibre', 'o livro'],
          ['un llibre', 'um livro'],
          ['la taula', 'a mesa'],
          ['una taula', 'uma mesa'],
          ['els llibres', 'os livros'],
          ['les taules', 'as mesas'],
        ],
      },
      {
        heading: 'Regras principais de plural',
        text: 'A regra geral é acrescentar «-s»; palavras femininas terminadas em «-a» trocam a terminação por «-es»; palavras terminadas em vogal tônica ou sibilante acrescentam «-os».',
        examples: [
          ['llibre → llibres', 'livro → livros (regra geral: acrescenta -s)'],
          ['casa → cases', 'casa → casas (feminino em -a muda para -es)'],
          ['porta → portes', 'porta → portas (feminino em -a muda para -es)'],
          ['autobús → autobusos', 'ônibus → ônibus (terminada em vogal tônica/sibilante: acrescenta -os)'],
        ],
      },
      {
        heading: 'Preposições e contrações',
        text: 'As preposições «a», «de» e «per» se contraem com o artigo masculino «el»/«els». Se o artigo estiver apostrofado («l\'»), a contração NÃO acontece.',
        table: {
          head: ['Preposição + artigo', 'Contração', 'Exemplo', 'Tradução'],
          rows: [
            ['a + el', 'al', 'al parc', 'ao parque'],
            ['a + els', 'als', 'als parcs', 'aos parques'],
            ['de + el', 'del', 'del cotxe', 'do carro'],
            ['de + els', 'dels', 'dels cotxes', 'dos carros'],
            ['per + el', 'pel', 'pel camí', 'pelo caminho'],
            ['per + els', 'pels', 'pels camins', 'pelos caminhos'],
          ],
        },
        examples: [
          ['Vaig al mercat.', 'Vou ao mercado.'],
          ['El llibre del professor.', 'O livro do professor.'],
          ["De l'home.", 'Do homem (sem contração «del», porque o artigo está apostrofado: de + l\'home).'],
        ],
      },
    ],
    pitfalls: [
      'Formar o plural feminino em -a só com -s (escrever «casas» em vez de «cases»).',
      'Tentar contrair «de» com um artigo apostrofado formando «del» (o certo é «de l\'aigua», nunca «del aigua»).',
      'Confundir a preposição «a» com o artigo: o artigo feminino singular é «la».',
    ],
    quiz: [
      {
        question: 'Qual é o plural correto de «taula» (mesa)?',
        options: ['taulas', 'taules', 'taulos'],
        answer: 'taules',
        explanation: 'Substantivos femininos terminados em «-a» trocam a terminação por «-es» no plural.',
      },
      {
        question: 'Como fica «de» + «el» em «El cotxe ___ professor»?',
        options: ['do', 'del', "de l'"],
        answer: 'del',
        explanation: 'A preposição «de» com o artigo masculino «el» forma a contração «del».',
      },
    ],
  },
  {
    id: 'ca-g3',
    level: 'A1.1',
    title: 'Os verbos ésser/ser e estar',
    emoji: '👥',
    summary: 'Como o português, o catalão tem dois verbos para existência e estado: «ésser»/«ser» e «estar». A conjugação no presente e quando usar cada um.',
    sections: [
      {
        heading: 'Conjugação no presente do indicativo',
        text: 'As formas conjugadas no presente, para todas as pessoas.',
        table: {
          head: ['Pronome', 'ésser/ser', 'estar'],
          rows: [
            ['jo (eu)', 'soc', 'estic'],
            ['tu (tu/você)', 'ets', 'estàs'],
            ['ell/ella/vostè (ele/ela/o(a) senhor(a))', 'és', 'està'],
            ['nosaltres (nós)', 'som', 'estem'],
            ['vosaltres (vós/vocês)', 'sou', 'esteu'],
            ['ells/elles/vostès (eles/elas)', 'són', 'estan'],
          ],
        },
        examples: [
          ['Jo soc brasiler.', 'Eu sou brasileiro.'],
          ['Tu ets estudiant.', 'Você é estudante.'],
          ['Ell és de Barcelona.', 'Ele é de Barcelona.'],
          ['Nosaltres estem cansats.', 'Nós estamos cansados.'],
          ['On estàs?', 'Onde você está?'],
        ],
      },
      {
        heading: 'Quando usar ésser/ser × estar',
        text: 'A distinção lembra a do português: identidade, nacionalidade, profissão e características permanentes usam «ésser/ser»; localização temporária e estados físicos/emocionais usam «estar».',
        examples: [
          ['La Maria és alta i simpàtica.', 'A Maria é alta e simpática. (identidade/característica: ser)'],
          ['Aquest llibre és del Joan.', 'Este livro é do Joan. (origem/posse: ser)'],
          ['El cotxe està al garatge.', 'O carro está na garagem. (localização temporária: estar)'],
          ['Avui estic molt content.', 'Hoje estou muito contente. (estado temporário: estar)'],
        ],
      },
    ],
    pitfalls: [
      'Usar as formas do espanhol «soy»/«estoy» — em catalão é «soc» e «estic».',
      'Esquecer o acento na 3ª pessoa do plural de ser: «són» (eles são).',
      'Confundir «soc» (eu sou) com a palavra espanhola «sois» (vocês são).',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu sou brasileiro» em catalão?',
        options: ['Jo estic brasiler', 'Jo soc brasiler', 'Jo soy brasiler'],
        answer: 'Jo soc brasiler',
        explanation: 'Nacionalidade e origem usam «ésser/ser»: 1ª pessoa do singular «soc».',
      },
      {
        question: 'Qual é a forma de «estar» para «nosaltres» (nós) no presente?',
        options: ['som', 'estem', 'estan'],
        answer: 'estem',
        explanation: '«Nosaltres estem» é a 1ª pessoa do plural do presente de «estar».',
      },
    ],
  },
  {
    id: 'ca-g4',
    level: 'A1.2',
    title: 'Pronomes pessoais e adjetivos possessivos',
    emoji: '🙋‍♂️',
    summary: 'Os pronomes que funcionam como sujeito e os adjetivos possessivos — que em catalão quase sempre pedem o artigo definido antes.',
    sections: [
      {
        heading: 'Pronomes pessoais sujeito',
        text: 'Para o tratamento formal («o senhor», «a senhora»), usa-se «vostè» no singular e «vostès» no plural — os dois conjugam o verbo na 3ª pessoa.',
        table: {
          head: ['Pessoa', 'Singular', 'Plural'],
          rows: [
            ['1ª pessoa', 'jo (eu)', 'nosaltres (nós)'],
            ['2ª pessoa', 'tu (tu/você)', 'vosaltres (vós/vocês)'],
            ['3ª pessoa', 'ell/ella (ele/ela)', 'ells/elles (eles/elas)'],
            ['Formal (3ª p.)', 'vostè (o(a) senhor(a))', 'vostès (os senhores/as senhoras)'],
          ],
        },
        examples: [
          ["Jo soc d'aquí.", 'Eu sou daqui.'],
          ['Nosaltres parlem català.', 'Nós falamos catalão.'],
          ['Com es diu vostè?', 'Como o(a) senhor(a) se chama?'],
        ],
      },
      {
        heading: 'Adjetivos possessivos com artigo definido',
        text: 'No catalão padrão, é obrigatório pôr o artigo definido antes do possessivo: «el meu llibre», «la meva casa» — nunca só «meu llibre».',
        table: {
          head: ['Possuidor', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          rows: [
            ['jo (meu)', 'el meu', 'la meva', 'els meus', 'les meves'],
            ['tu (teu)', 'el teu', 'la teva', 'els teus', 'les teves'],
            ['ell/ella (seu)', 'el seu', 'la seva', 'els seus', 'les seves'],
            ['nosaltres (nosso)', 'el nostre', 'la nostra', 'els nostres', 'les nostres'],
            ['vosaltres (vosso)', 'el vostre', 'la vostra', 'els vostres', 'les vostres'],
            ['ells/elles (seu, deles)', 'el seu', 'la seva', 'els seus', 'les seves'],
          ],
        },
        examples: [
          ['El meu pare és professor.', 'O meu pai é professor.'],
          ['La meva mare es diu Anna.', 'A minha mãe se chama Anna.'],
          ['Els meus amics viuen a Girona.', 'Os meus amigos moram em Girona.'],
          ['On és el teu cotxe?', 'Onde está o teu carro?'],
        ],
      },
      {
        heading: 'Omissão excepcional do artigo',
        text: 'O artigo só some antes do possessivo em vocativo, em parentesco em fórmula fixa («pare meu!») ou na expressão de lugar «a casa meva/teva/seva» (em minha/tua/sua casa) — diferente de «la meva casa» (minha casa, o prédio), que mantém o artigo.',
        examples: [
          ['Vine a casa meva.', 'Vem à minha casa.'],
          ['Mare meva!', 'Minha nossa!'],
        ],
      },
    ],
    pitfalls: [
      'Não usar o artigo antes do possessivo («meu pare» em vez de «el meu pare»); a omissão só vale em vocativo ou expressão fixa («pare meu!», «a casa meva»).',
      'Confundir «meva/teva/seva» (feminino) com as formas espanholas «mi/tu/su».',
      'Conjugar na 2ª pessoa ao falar com «vostè»: o certo é a 3ª pessoa.',
    ],
    quiz: [
      {
        question: 'Como se diz «a minha amiga» em catalão correto?',
        options: ['mi amiga', 'meva amiga', 'la meva amiga'],
        answer: 'la meva amiga',
        explanation: 'É obrigatório o artigo definido («la») antes do possessivo («meva»).',
      },
      {
        question: 'Qual pronome é o tratamento formal no singular?',
        options: ['vostè', 'tu', 'vosaltres'],
        answer: 'vostè',
        explanation: '«Vostè» é o pronome formal singular, e concorda com o verbo na 3ª pessoa do singular.',
      },
    ],
  },
  {
    id: 'ca-g5',
    level: 'A1.2',
    title: 'Presente do indicativo: verbos regulares',
    emoji: '⏱️',
    summary: 'As três conjugações regulares do presente (-ar, -re/-er, -ir) e o grupo especial dos verbos «incoativos» em -ir, que ganham um «-eix-» na raiz.',
    sections: [
      {
        heading: '1ª e 2ª conjugações (-ar, -re/-er)',
        text: 'A 1ª conjugação reúne os verbos em «-ar» (como «parlar», falar); a 2ª, os verbos em «-re» ou «-er» (como «perdre», perder).',
        table: {
          head: ['Pronome', '-ar: parlar', '-re: perdre'],
          rows: [
            ['jo', 'parlo', 'perdo'],
            ['tu', 'parles', 'perds'],
            ['ell/ella/vostè', 'parla', 'perd'],
            ['nosaltres', 'parlem', 'perdem'],
            ['vosaltres', 'parleu', 'perdeu'],
            ['ells/elles/vostès', 'parlen', 'perden'],
          ],
        },
        examples: [
          ['Jo parlo català i castellà.', 'Eu falo catalão e espanhol.'],
          ['Nosaltres perdem el tren.', 'Nós perdemos o trem.'],
          ['Ells parlen amb el professor.', 'Eles falam com o professor.'],
        ],
      },
      {
        heading: '3ª conjugação (-ir): verbos puros e incoativos',
        text: 'A 3ª conjugação (-ir) tem dois tipos: os puros (como «dormir»), com a terminação direta, e os incoativos (como «servir», «llegir» = ler), que ganham «-eix-» na raiz no singular e na 3ª pessoa do plural.',
        table: {
          head: ['Pronome', 'Puro: dormir', 'Incoativo: servir'],
          rows: [
            ['jo', 'dormo', 'serveixo'],
            ['tu', 'dorms', 'serveixes'],
            ['ell/ella/vostè', 'dorm', 'serveix'],
            ['nosaltres', 'dormim', 'servim'],
            ['vosaltres', 'dormiu', 'serviu'],
            ['ells/elles/vostès', 'dormen', 'serveixen'],
          ],
        },
        examples: [
          ['Jo dormo vuit hores.', 'Eu durmo oito horas.'],
          ['Jo llegeixo un llibre.', 'Eu leio um livro. (llegir → llegeixo, incoativo)'],
          ['Ells serveixen el dinar.', 'Eles servem o almoço.'],
        ],
      },
      {
        heading: 'Verbos irregulares de alta frequência',
        text: 'Fundamentais para desejo, capacidade, ações diárias e locomoção.',
        table: {
          head: ['Pronome', 'anar (ir)', 'fer (fazer)', 'voler (querer)', 'poder (poder)'],
          rows: [
            ['jo', 'vaig', 'faig', 'vull', 'puc'],
            ['tu', 'vas', 'fas', 'vols', 'pots'],
            ['ell/ella/vostè', 'va', 'fa', 'vol', 'pot'],
            ['nosaltres', 'anem', 'fem', 'volem', 'podem'],
            ['vosaltres', 'aneu', 'feu', 'voleu', 'podeu'],
            ['ells/elles/vostès', 'van', 'fan', 'volen', 'poden'],
          ],
        },
        examples: [
          ['Jo vaig a la feina.', 'Eu vou ao trabalho.'],
          ['Què fas avui?', 'O que você está fazendo hoje?'],
          ['Vull un cafè, per favor.', 'Quero um café, por favor.'],
          ['No puc venir demà.', 'Não posso vir amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o «-o» da 1ª pessoa do singular no dialeto central (escrever «parl» em vez de «parlo» — noutros dialetos, como o valenciano, «parl» é a forma normal).',
      'Não pôr o «-eix-» nos verbos em -ir que pedem essa forma (dizer «serv» em vez de «serveixo»).',
      'Pôr o «-eix-» em «nosaltres»/«vosaltres», que não levam: são «servim» e «serviu».',
      'Confundir «voler»/«poder» com as formas espanholas «quiero»/«puedo».',
    ],
    quiz: [
      {
        question: 'Qual é a forma de «jo» do verbo «parlar»?',
        options: ['jo parla', 'jo parlo', 'jo parles'],
        answer: 'jo parlo',
        explanation: 'A 1ª pessoa do singular dos verbos em «-ar» termina em «-o» no presente.',
      },
      {
        question: 'Como se conjuga «llegir» (ler) para «jo»?',
        options: ['jo llego', 'jo llegim', 'jo llegeixo'],
        answer: 'jo llegeixo',
        explanation: 'Verbo incoativo em -ir: ganha «-eix-» na 1ª pessoa do singular.',
      },
      {
        question: 'Qual é a forma de «jo» do verbo «voler» (querer)?',
        options: ['jo quiero', 'jo vull', 'jo vol'],
        answer: 'jo vull',
        explanation: '«Voler» é irregular: a 1ª pessoa do singular é «vull».',
      },
    ],
  },
  {
    id: 'ca-g6',
    level: 'A1.2',
    title: 'Demonstrativos e expressões de lugar',
    emoji: '📍',
    summary: 'Os demonstrativos «aquest»/«aquell» (este/aquele) e as principais preposições e advérbios de lugar.',
    sections: [
      {
        heading: 'Demonstrativos: aquest / aquell',
        text: 'O catalão padrão moderno usa dois graus de distância: «aquest» para perto (este/esta/esse/essa) e «aquell» para longe (aquele/aquela) — o grau intermediário do catalão antigo (aqueix) só sobrevive, sobretudo, no valenciano.',
        table: {
          head: ['Distância', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          rows: [
            ['Perto/médio', 'aquest', 'aquesta', 'aquests', 'aquestes'],
            ['Longe', 'aquell', 'aquella', 'aquells', 'aquelles'],
          ],
        },
        examples: [
          ['Aquest llibre és molt bo.', 'Este livro é muito bom.'],
          ['Aquesta cadira és còmoda.', 'Esta cadeira é confortável.'],
          ["Aquell noi d'allà és en Marc.", 'Aquele rapaz dali é o Marc.'],
        ],
      },
      {
        heading: 'Advérbios e preposições de lugar',
        text: 'As locuções de lugar levam «de» antes de um substantivo (que costuma contrair com o artigo: «del», «dels»).',
        table: {
          head: ['Catalão', 'Português', 'Exemplo'],
          rows: [
            ['aquí / ací', 'aqui', 'Soc aquí. (Estou aqui.)'],
            ['allí / allà', 'ali/lá/acolá', 'El cotxe és allà. (O carro está lá.)'],
            ['a prop de', 'perto de', 'A prop de casa. (Perto de casa.)'],
            ['lluny de', 'longe de', 'Lluny de la ciutat. (Longe da cidade.)'],
            ['a sobre de / damunt de', 'em cima de', 'A sobre de la taula. (Em cima da mesa.)'],
            ['a sota de / sota de', 'embaixo de', 'Sota de la cadira. (Debaixo da cadeira.)'],
            ['davant de', 'em frente a', "Davant de l'estació. (Em frente à estação.)"],
            ['darrere de', 'atrás de', "Darrere de l'església. (Atrás da igreja.)"],
          ],
        },
        examples: [
          ['El gat és sota de la taula.', 'O gato está debaixo da mesa.'],
          ["L'hotel és a prop de l'estació.", 'O hotel é perto da estação.'],
          ["La farmàcia és lluny d'aquí.", 'A farmácia é longe daqui.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar três graus como em português (este, esse, aquele): o catalão padrão moderno usa só dois («aquest», «aquell»).',
      'Esquecer o «de» nas locuções de lugar antes de substantivo (dizer «a prop el parc» em vez de «a prop del parc»).',
      'Escrever o plural masculino de «aquest» como o espanhol «estos»: em catalão é «aquests».',
    ],
    quiz: [
      {
        question: 'Como se diz «esta mesa» em catalão?',
        options: ['esta taula', 'aquesta taula', 'aquella taula'],
        answer: 'aquesta taula',
        explanation: '«Aquesta» é o demonstrativo feminino singular para o que está perto.',
      },
      {
        question: 'Qual é a tradução de «perto do restaurante»?',
        options: ['a prop del restaurant', 'a prop el restaurant', 'lluny del restaurant'],
        answer: 'a prop del restaurant',
        explanation: '«A prop de» exige «de», que contrai com o artigo «el»: «del».',
      },
    ],
  },
  {
    id: 'ca-g7',
    level: 'A2.1',
    title: 'Passado perifrástico (passat perifràstic)',
    emoji: '📜',
    summary: 'No catalão falado e escrito de hoje, o passado simples mais comum não é uma forma verbal só: é uma perífrase com o verbo «anar» conjugado + o infinitivo do verbo principal.',
    sections: [
      {
        heading: 'Estrutura e funcionamento',
        text: 'O passado perifrástico equivale ao pretérito perfeito do português («eu comi», «ele falou»): o auxiliar «anar» numa forma especial de passado + o verbo principal no infinitivo. Apesar de usar «anar» (ir), a estrutura NÃO é futuro — é uma ação concluída no passado.',
        table: {
          head: ['Pronome', 'Auxiliar (curta/longa)', 'Exemplo com parlar', 'Tradução'],
          rows: [
            ['jo', 'vaig', 'vaig parlar', 'falei'],
            ['tu', 'vas / vares', 'vas parlar / vares parlar', 'falaste/você falou'],
            ['ell/ella/vostè', 'va', 'va parlar', 'falou'],
            ['nosaltres', 'vam / vàrem', 'vam parlar / vàrem parlar', 'falamos'],
            ['vosaltres', 'vau / vàreu', 'vau parlar / vàreu parlar', 'falastes/vocês falaram'],
            ['ells/elles/vostès', 'van / varen', 'van parlar / varen parlar', 'falaram'],
          ],
        },
        examples: [
          ['Jo vaig menjar una poma.', 'Eu comi uma maçã.'],
          ['Ahir, ell va anar al metge.', 'Ontem ele foi ao médico. (va + anar = foi)'],
          ['Nosaltres vàrem comprar el pa.', 'Nós compramos o pão.'],
          ['Ells van arribar tard.', 'Eles chegaram tarde.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o passado perifrástico com futuro imediato («vaig menjar» é «comi», NUNCA «vou comer»).',
      'Achar que «vaig anar» é redundante: é correto, e significa «fui, fui a algum lugar».',
      'Trocar as formas curtas «vam»/«vau» pelas variantes erradas «vem»/«veu» (que não existem em catalão padrão).',
    ],
    quiz: [
      {
        question: 'O que significa «Ell va menjar una paella»?',
        options: ['Ele vai comer uma paella', 'Ele comeu uma paella', 'Ele comeria uma paella'],
        answer: 'Ele comeu uma paella',
        explanation: '«va + infinitivo» é o passado perifrástico, equivalente ao pretérito perfeito.',
      },
      {
        question: 'Qual é a forma de «jo» do passado perifrástico com «comprar»?',
        options: ['jo voy comprar', 'jo vaig comprar', 'jo iré comprar'],
        answer: 'jo vaig comprar',
        explanation: 'A 1ª pessoa do singular do auxiliar é «vaig» + o infinitivo «comprar».',
      },
    ],
  },
  {
    id: 'ca-g8',
    level: 'A2.1',
    title: 'Pronomes átonos (pronoms febles)',
    emoji: '🔗',
    summary: 'Os pronomes fracos substituem complementos diretos e indiretos para evitar repetição. Mudam de forma conforme vêm antes ou depois do verbo, e se o verbo começa com vogal ou consoante.',
    sections: [
      {
        heading: 'Formas e apostrofação antes do verbo',
        text: 'Antes do verbo conjugado, os pronomes elidem (viram apóstrofo) se o verbo começa com vogal ou h mudo.',
        table: {
          head: ['Pessoa/função', 'Antes de consoante', 'Antes de vogal', 'Exemplo'],
          rows: [
            ['1ª sing. (me)', 'em', "m'", "m'agrada (me agrada)"],
            ['2ª sing. (te)', 'et', "t'", "t'escolto (te escuto)"],
            ['3ª CD masc. (o)', 'el', "l'", "l'ajudo (o ajudo)"],
            ['3ª CD fem. (a)', 'la', "l'", "l'estimo (a amo)"],
            ['3ª CI (lhe)', 'li', 'li (não elide)', 'li faig un regal (faço-lhe um presente)'],
            ['1ª plur. (nos)', 'ens', 'ens (não elide)', 'ens mira (nos olha)'],
            ['2ª plur. (vos)', 'us', 'us (não elide)', 'us veig (vejo vocês)'],
            ['3ª CD plur. masc. (os)', 'els', 'els (não elide)', 'els compro (os compro)'],
          ],
        },
        examples: [
          ['Em dic Marc.', 'Me chamo Marc.'],
          ["T'escolto amb atenció.", 'Te escuto com atenção.'],
          ["L'he vist al carrer.", 'Eu o/a vi na rua.'],
          ['Li dono el llibre.', 'Dou-lhe o livro.'],
        ],
      },
      {
        heading: 'Posição do pronome: próclise e ênclise',
        text: 'O pronome vem antes do verbo na maioria dos tempos. Mas vem DEPOIS do verbo (ligado por hífen ou apóstrofo) em três casos: infinitivo, gerúndio e imperativo afirmativo.',
        examples: [
          ["Vull veure'l.", "Quero vê-lo. (infinitivo: veure + el → veure'l)"],
          ['Menjant-ho.', 'Comendo isso. (gerúndio + pronome ho)'],
          ["Compra'm el pa!", 'Compra-me o pão! (imperativo + pronome em)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer de elidir o pronome antes de verbo com vogal (escrever «et escolto» em vez de «t\'escolto»).',
      'Usar a forma espanhola «le» para complemento indireto em vez do catalão «li».',
      'Pôr o pronome antes do verbo no imperativo afirmativo ou no infinitivo — o certo é depois.',
    ],
    quiz: [
      {
        question: 'Como se escreve «Eu te escuto» com o verbo «escoltar»?',
        options: ['et escolto', "t'escolto", 'te escolto'],
        answer: "t'escolto",
        explanation: '«et» elide e vira «t\'» antes de verbo com vogal.',
      },
      {
        question: 'Qual pronome substitui «a la Maria» em «Dono un regal a la Maria»?',
        options: ['el', 'la', 'li'],
        answer: 'li',
        explanation: 'O complemento indireto de 3ª pessoa do singular é substituído por «li».',
      },
    ],
  },
  {
    id: 'ca-g9',
    level: 'A2.1',
    title: 'Os pronomes «hi» e «en»',
    emoji: '🧩',
    summary: 'Os pronomes «hi» e «en» são uma marca do catalão: substituem lugares, quantidades e complementos com preposição, evitando repetição.',
    sections: [
      {
        heading: 'O pronome «hi»',
        text: '«hi» substitui complemento de lugar com «a», «en», «per», «sobre» (destino ou permanência). É parte fixa de «hi ha» (há, existe).',
        examples: [
          ['Vas a Barcelona? — Sí, hi vaig.', 'Você vai a Barcelona? — Sim, vou lá. (hi = a Barcelona)'],
          ['Ets a casa? — Sí, hi soc.', 'Você está em casa? — Sim, estou lá. (hi = a casa)'],
          ['Hi ha molta gent.', 'Há muita gente.'],
        ],
      },
      {
        heading: 'O pronome «en»',
        text: '«en» substitui complemento com a preposição «de» (origem, posse, causa) e complemento direto indeterminado com quantidade.',
        table: {
          head: ['Pronome', 'Substitui', 'Exemplo', 'Tradução'],
          rows: [
            ['hi', 'lugar (com a/en/per)', 'Hi vaig demà.', 'Vou lá amanhã.'],
            ['en', 'origem (com de)', 'Vens de Vic? — Sí, en vinc.', 'Você vem de Vic? — Sim, venho de lá.'],
            ['en', 'quantidade/indeterminado', 'Vols pa? — Sí, en vull un tros.', 'Quer pão? — Sim, quero um pedaço.'],
          ],
        },
        examples: [
          ['Quants llibres tens? — En tinc dos.', 'Quantos livros você tem? — Tenho dois.'],
          ['Tornes de la feina? — Sí, en torno.', 'Está voltando do trabalho? — Sim, estou voltando de lá.'],
        ],
      },
    ],
    pitfalls: [
      'Omitir «hi» ao responder sobre lugar (responder só «Sí, vaig» em vez de «Sí, hi vaig»).',
      'Omitir «en» ao indicar quantidade (dizer «Tinc dos» em vez de «En tinc dos»).',
      'Usar «hi» para origem com «de»: origem com «de» pede sempre «en».',
    ],
    quiz: [
      {
        question: '«Vols poma?» — «Sí, ___ vull una.»: qual pronome?',
        options: ['hi', 'en', 'la'],
        answer: 'en',
        explanation: 'Quantidade com objeto indeterminado («uma maçã») pede «en».',
      },
      {
        question: '«Vas a la platja?»: qual é a resposta afirmativa correta?',
        options: ['Sí, hi vaig', 'Sí, en vaig', 'Sí, vaig la platja'],
        answer: 'Sí, hi vaig',
        explanation: '«hi» substitui o complemento de lugar com «a» (a la platja).',
      },
    ],
  },
];
