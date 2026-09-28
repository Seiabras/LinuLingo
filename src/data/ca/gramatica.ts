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
  {
    id: 'ca-g10',
    level: 'A2.2',
    title: 'Pretérito imperfeito e pretérito perfeito composto',
    emoji: '⏳',
    summary: 'O imperfeito descreve rotinas e cenários do passado; o perfeito composto fala de ações concluídas dentro de um período que ainda inclui o presente (hoje, esta semana).',
    sections: [
      {
        heading: 'Pretérito imperfeito (pretèrit imperfet)',
        text: 'Descreve estados, cenários ou hábitos passados («falava», «comia»). Os verbos em «-ar» usam «-av-»; os em «-re/-er» e «-ir» usam «-i-». Atenção ao acento obrigatório em «nosaltres»/«vosaltres».',
        table: {
          head: ['Pronome', '-ar: parlar', '-re: perdre', '-ir: dormir'],
          rows: [
            ['jo', 'parlava', 'perdia', 'dormia'],
            ['tu', 'parlaves', 'perdies', 'dormies'],
            ['ell/ella/vostè', 'parlava', 'perdia', 'dormia'],
            ['nosaltres', 'parlàvem', 'perdíem', 'dormíem'],
            ['vosaltres', 'parlàveu', 'perdíeu', 'dormíeu'],
            ['ells/elles/vostès', 'parlaven', 'perdien', 'dormien'],
          ],
        },
        examples: [
          ['Quan era petit, vivia a Girona.', 'Quando eu era pequeno, morava em Girona.'],
          ['Cada dia, en Marc jugava al futbol.', 'Todo dia, o Marc jogava futebol.'],
          ['Nosaltres anàvem a la platja cada estiu.', 'Nós íamos à praia todo verão.'],
        ],
      },
      {
        heading: 'Pretérito perfeito composto (pretèrit perfet compost)',
        text: 'Presente de «haver» + particípio do verbo principal. Usa-se para ações passadas num período ainda não concluído (hoje, esta semana, este ano) ou com relevância no presente.',
        table: {
          head: ['Pronome', 'haver', 'Particípio (-at/-ut/-it)', 'Exemplo'],
          rows: [
            ['jo', 'he', 'parlat/perdut/dormit', 'he parlat (falei)'],
            ['tu', 'has', 'parlat/perdut/dormit', 'has perdut (perdeste)'],
            ['ell/ella/vostè', 'ha', 'parlat/perdut/dormit', 'ha dormit (dormiu)'],
            ['nosaltres', 'hem', 'parlat/perdut/dormit', 'hem parlat (falamos)'],
            ['vosaltres', 'heu', 'parlat/perdut/dormit', 'heu perdut (perdestes)'],
            ['ells/elles/vostès', 'han', 'parlat/perdut/dormit', 'han dormit (dormiram)'],
          ],
        },
        examples: [
          ['Aquesta setmana he treballat molt.', 'Esta semana trabalhei muito.'],
          ['Avui hem vist en Joan.', 'Hoje vimos o Joan.'],
          ['Què has fet avui?', 'O que você fez hoje? (particípio irregular: fer → fet)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o acento em «nosaltres»/«vosaltres» do imperfeito (escrever «parlavem» em vez de «parlàvem»).',
      'Confundir o passat perifràstic («vaig parlar», passado pontual) com o perfet compost («he parlat», período ainda não concluído como «avui»).',
      'Errar particípios irregulares comuns: «fet» (fer), «vist» (veure), «escrit» (escriure).',
    ],
    quiz: [
      {
        question: 'Qual é a forma do imperfeito de «parlar» para «nosaltres»?',
        options: ['parlavem', 'parlàvem', 'parlíem'],
        answer: 'parlàvem',
        explanation: '1ª pessoa do plural do imperfeito de verbos em «-ar»: acento grave, «parlàvem».',
      },
      {
        question: 'Como se diz «Hoje eu trabalhei muito»?',
        options: ['Ahir vaig treballar molt', 'Avui he treballat molt', 'Avui treballava molt'],
        answer: 'Avui he treballat molt',
        explanation: 'Período que ainda inclui o presente («avui»): perfeito composto, «he treballat».',
      },
    ],
  },
  {
    id: 'ca-g11',
    level: 'A2.2',
    title: 'Futuro e condicional simples',
    emoji: '🔮',
    summary: 'O futuro simples para planos e previsões, o condicional simples para pedidos corteses e hipóteses, e as raízes irregulares que os dois tempos compartilham.',
    sections: [
      {
        heading: 'Futuro simples (futur simple)',
        text: 'Terminações -é/-às/-à/-em/-eu/-an direto no infinitivo (verbos em -re perdem o «e» final antes).',
        table: {
          head: ['Pronome', 'parlar', 'perdre', 'dormir'],
          rows: [
            ['jo', 'parlaré', 'perdré', 'dormiré'],
            ['tu', 'parlaràs', 'perdràs', 'dormiràs'],
            ['ell/ella/vostè', 'parlarà', 'perdrà', 'dormirà'],
            ['nosaltres', 'parlarem', 'perdrem', 'dormirem'],
            ['vosaltres', 'parlareu', 'perdreu', 'dormireu'],
            ['ells/elles/vostès', 'parlaran', 'perdran', 'dormiran'],
          ],
        },
        examples: [
          ['Demà viatjaré a València.', 'Amanhã viajarei para Valência.'],
          ['El mes vinent comprarem un cotxe.', 'No mês que vem compraremos um carro.'],
          ['On aniràs les pròximes vacances?', 'Aonde você irá nas próximas férias?'],
        ],
      },
      {
        heading: 'Condicional simples (condicional simple)',
        text: 'Terminações -ia/-ies/-ia/-íem/-íeu/-ien no infinitivo. Muito usado em pedidos corteses.',
        table: {
          head: ['Pronome', 'parlar', 'ser'],
          rows: [
            ['jo', 'parlaria', 'seria'],
            ['tu', 'parlaries', 'series'],
            ['ell/ella/vostè', 'parlaria', 'seria'],
            ['nosaltres', 'parlaríem', 'seríem'],
            ['vosaltres', 'parlaríeu', 'seríeu'],
            ['ells/elles/vostès', 'parlarien', 'serien'],
          ],
        },
        examples: [
          ['Voldria un cafè, per favor.', 'Eu gostaria de um café, por favor. (condicional de voler)'],
          ['Em podries ajudar?', 'Você poderia me ajudar?'],
          ['Jo viuria a la muntanya.', 'Eu moraria na montanha.'],
        ],
      },
      {
        heading: 'Raízes irregulares compartilhadas (futuro e condicional)',
        text: 'Alguns verbos mudam a raiz no futuro e no condicional, mas mantêm as mesmas terminações.',
        table: {
          head: ['Verbo', 'Raiz', 'Futuro (jo)', 'Condicional (jo)'],
          rows: [
            ['fer (fazer)', 'far-', 'faré', 'faria'],
            ['tenir (ter)', 'tindr-', 'tindré', 'tindria'],
            ['venir (vir)', 'vindr-', 'vindré', 'vindria'],
            ['poder (poder)', 'podr-', 'podré', 'podria'],
            ['voler (querer)', 'voldr-', 'voldré', 'voldria'],
          ],
        },
      },
    ],
    pitfalls: [
      'Confundir a acentuação do futuro (agudo no singular: -é, -às, -à) com a do condicional (-ia, -íem, -íeu).',
      'Esquecer as raízes irregulares com «-dr-»: «tenir» → «tindré», «venir» → «vindré», «voler» → «voldré».',
      'Usar o presente pra pedidos corteses («vull un cafè» soa direto demais) em vez do condicional («voldria», «m\'agradaria»).',
    ],
    quiz: [
      {
        question: 'Qual é o futuro de «tenir» (ter) para «jo»?',
        options: ['teniré', 'tindré', 'tendré'],
        answer: 'tindré',
        explanation: '«Tenir» tem raiz irregular «tindr-» no futuro: «jo tindré».',
      },
      {
        question: 'Como pedir algo com cortesia, com «m\'agradar» (gostar)?',
        options: ["M'agrada un cafè", "M'agradaria un cafè", "M'agradarà un cafè"],
        answer: "M'agradaria un cafè",
        explanation: '«M\'agradaria» é o condicional, usado para pedir de forma educada.',
      },
    ],
  },
  {
    id: 'ca-g12',
    level: 'A2.2',
    title: 'Graus do adjetivo: comparativos e superlativos',
    emoji: '⚖️',
    summary: 'Comparações de superioridade, inferioridade e igualdade, e como intensificar qualidades com o superlativo.',
    sections: [
      {
        heading: 'Estrutura dos comparativos',
        text: 'Superioridade: «més» + adjetivo + «que». Inferioridade: «menys» + adjetivo + «que». Igualdade: «tan» + adjetivo + «com» (NUNCA «tan...que»).',
        table: {
          head: ['Grau', 'Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['Superioridade', 'més + adj. + que', 'En Marc és més alt que en Pau.', 'Marc é mais alto que Pau.'],
            ['Inferioridade', 'menys + adj. + que', 'Aquest cotxe és menys ràpid que aquell.', 'Este carro é menos rápido que aquele.'],
            ['Igualdade', 'tan + adj. + com', 'La meva casa és tan gran com la teva.', 'A minha casa é tão grande quanto a tua.'],
          ],
        },
        examples: [
          ['Barcelona és més gran que Girona.', 'Barcelona é maior que Girona.'],
          ["Aquest exercici és tan fàcil com l'altre.", 'Este exercício é tão fácil quanto o outro.'],
        ],
      },
      {
        heading: 'Comparativos irregulares',
        text: 'Alguns adjetivos têm forma comparativa própria, sem «més».',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Tradução'],
          rows: [
            ['bon/bo (bom)', 'millor', 'melhor'],
            ['dolent (mau)', 'pitjor', 'pior'],
            ['gran (grande/velho)', 'més gran / major', 'maior/mais velho'],
            ['petit (pequeno/novo)', 'més petit / menor', 'menor/mais novo'],
          ],
        },
        examples: [
          ['Aquest vi és millor que aquell.', 'Este vinho é melhor que aquele.'],
          ["El temps avui és pitjor que ahir.", 'O tempo hoje está pior que ontem.'],
        ],
      },
      {
        heading: 'Superlativos (absoluto e relativo)',
        text: 'O absoluto usa «molt» + adjetivo ou o sufixo «-íssim/-íssima». O relativo destaca um elemento dentro de um grupo, com «de».',
        examples: [
          ['Un llibre molt interessant / interessantíssim.', 'Um livro muito interessante/interessantíssimo.'],
          ['És el noi més alt de la classe.', 'É o rapaz mais alto da turma. (superlativo relativo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar «que» em vez de «com» na comparação de igualdade («tan gran que» em vez de «tan gran com»).',
      'Usar «més bo» onde o padrão é «millor».',
      'Esquecer a concordância do sufixo superlativo: «-íssim/-íssima/-íssims/-íssimes».',
    ],
    quiz: [
      {
        question: 'Como se diz «Ela é tão simpática quanto a irmã»?',
        options: ['Ella és tan simpàtica que la seva germana', 'Ella és tan simpàtica com la seva germana', 'Ella és més simpàtica com la seva germana'],
        answer: 'Ella és tan simpàtica com la seva germana',
        explanation: 'Igualdade em catalão: «tan + adjetivo + com».',
      },
      {
        question: 'Qual é o comparativo irregular de «bon» (bom)?',
        options: ['més bo', 'millor', 'pitjor'],
        answer: 'millor',
        explanation: 'O comparativo de superioridade irregular de «bon» é «millor».',
      },
    ],
  },
  {
    id: 'ca-g13',
    level: 'B1.1',
    title: 'Presente do subjuntivo',
    emoji: '💭',
    summary: 'O modo usado para desejo, dúvida, necessidade e sentimento em orações subordinadas.',
    sections: [
      {
        heading: 'Formação regular',
        text: 'No catalão central, a 1ª conjugação (-ar) usa a vogal «-i-» em todas as pessoas; a 2ª (-re/-er) e a 3ª (-ir) usam «-i-»/«-in» no singular e na 3ª do plural, mas «nosaltres»/«vosaltres» coincidem com o indicativo. Verbos incoativos levam «-eix-».',
        table: {
          head: ['Pronome', '-ar: parlar', '-re: perdre', 'Incoativo: servir'],
          rows: [
            ['jo', 'parli', 'perdi', 'serveixi'],
            ['tu', 'parlis', 'perdis', 'serveixis'],
            ['ell/ella/vostè', 'parli', 'perdi', 'serveixi'],
            ['nosaltres', 'parlim', 'perdem', 'servim'],
            ['vosaltres', 'parliu', 'perdeu', 'serviu'],
            ['ells/elles/vostès', 'parlin', 'perdin', 'serveixin'],
          ],
        },
        examples: [
          ['Vull que parlis amb el director.', 'Quero que você fale com o diretor.'],
          ['És millor que perdem la por.', 'É melhor que percamos o medo.'],
          ['Esperem que serveixin el cafè aviat.', 'Esperamos que sirvam o café logo.'],
        ],
      },
      {
        heading: 'Gatilhos comuns do subjuntivo',
        text: 'Verbos e estruturas de desejo, dúvida, necessidade e sentimento seguidos de «que» pedem subjuntivo.',
        table: {
          head: ['Categoria', 'Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['Desejo', 'voler que / desitjar que', 'Vull que vinguis.', 'Quero que você venha.'],
            ['Dúvida/negação', 'dubtar que / no creure que', 'No crec que sigui veritat.', 'Não creio que seja verdade.'],
            ['Necessidade', 'cal que / és important que', 'Cal que estudiïs més.', 'É necessário que você estude mais.'],
            ['Sentimento', 'esperar que / sentir que', 'Espero que tinguis sort.', 'Espero que você tenha sorte.'],
          ],
        },
      },
      {
        heading: 'Verbos irregulares essenciais',
        text: 'Vários verbos de alta frequência mudam a raiz no subjuntivo.',
        table: {
          head: ['Infinitivo', 'jo', 'nosaltres'],
          rows: [
            ['ésser/ser', 'sigui', 'siguem'],
            ['estar', 'estigui', 'estiguem'],
            ['anar', 'vagi', 'anem'],
            ['fer', 'faci', 'fem'],
            ['tenir', 'tingui', 'tinguem'],
          ],
        },
        examples: [
          ['No vol que jo vagi sol.', 'Não quer que eu vá sozinho.'],
          ['És necessari que tinguem paciència.', 'É necessário que tenhamos paciência.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o indicativo depois de verbo de desejo («Vull que ve» em vez de «Vull que vingui»).',
      'Confundir a terminação catalã «-i» («parli», «parlis») com a espanhola «-e» («hable», «hables»).',
      'Esquecer o «-eix-» no subjuntivo de verbos incoativos em -ir («servi» em vez de «serveixi»).',
    ],
    quiz: [
      {
        question: '«Vull que tu ___ (parlar) amb ell»: qual é a forma certa?',
        options: ['parles', 'parlis', 'parle'],
        answer: 'parlis',
        explanation: '2ª pessoa do singular do subjuntivo de verbos em «-ar» termina em «-is».',
      },
      {
        question: 'Como se diz «Não acho que seja verdade», com o verbo «ser»?',
        options: ['No crec que és veritat', 'No crec que sigui veritat', 'No crec que serà veritat'],
        answer: 'No crec que sigui veritat',
        explanation: '«No creure que» pede subjuntivo; a 3ª pessoa de «ser» no subjuntivo é «sigui».',
      },
    ],
  },
  {
    id: 'ca-g14',
    level: 'B1.1',
    title: 'Imperativo afirmativo e negativo',
    emoji: '📣',
    summary: 'O imperativo afirmativo tem formas próprias; o negativo usa sempre o presente do subjuntivo.',
    sections: [
      {
        heading: 'Imperativo afirmativo',
        text: '«tu» geralmente coincide com a 3ª pessoa do indicativo. As formas formais («vostè», «vostès») e «nosaltres» usam o subjuntivo.',
        table: {
          head: ['Pessoa', '-ar: parlar', '-re: perdre', 'Incoativo: servir'],
          rows: [
            ['(tu)', 'parla', 'perd', 'serveix'],
            ['(vostè)', 'parli', 'perdi', 'serveixi'],
            ['(nosaltres)', 'parlem', 'perdem', 'servim'],
            ['(vosaltres)', 'parleu', 'perdeu', 'serviu'],
            ['(vostès)', 'parlin', 'perdin', 'serveixin'],
          ],
        },
        examples: [
          ['Parla més a poc a poc, per favor!', 'Fale mais devagar, por favor!'],
          ['Escolteu amb atenció!', 'Escutem com atenção! (vosaltres)'],
          ['Entri vostè, per favor.', 'Entre o(a) senhor(a), por favor.'],
        ],
      },
      {
        heading: 'Imperativo negativo (proibição)',
        text: 'Para proibir: «no» + presente do subjuntivo, em todas as pessoas.',
        table: {
          head: ['Pessoa', 'Afirmativo', 'Negativo (no + subjuntiu)'],
          rows: [
            ['tu', 'parla', 'no parlis'],
            ['vostè', 'parli', 'no parli'],
            ['nosaltres', 'parlem', 'no parlem'],
            ['vosaltres', 'parleu', 'no parleu'],
            ['vostès', 'parlin', 'no parlin'],
          ],
        },
        examples: [
          ['No parlis tan ràpid!', 'Não fale tão rápido!'],
          ['No perdis les claus!', 'Não perca as chaves!'],
          ['No marxeu encara!', 'Não vão embora ainda!'],
        ],
      },
      {
        heading: 'Imperativo com pronomes fracos',
        text: 'No afirmativo, o pronome vem DEPOIS do verbo (hífen ou apóstrofo). No negativo, vem ANTES.',
        examples: [
          ["Compra'm el pa! (afirmativo)", 'Compra-me o pão!'],
          ['No em compris el pa! (negativo)', 'Não me compres o pão!'],
          ['Digues-me la veritat! (afirmativo)', 'Diga-me a verdade! (dir → imperativo irregular «digues»; termina em consoante, por isso hífen, não apóstrofo)'],
          ['No em diguis mentides! (negativo)', 'Não me digas mentiras!'],
        ],
      },
    ],
    pitfalls: [
      'Usar a forma afirmativa na negação («no parla!» em vez de «no parlis!»).',
      'Pôr o pronome depois do verbo no imperativo negativo («no compra\'m» em vez de «no em compris»).',
      'Esquecer que «dir» tem imperativo irregular «digues» (não «diga», que é espanhol).',
    ],
    quiz: [
      {
        question: 'Qual é o imperativo negativo de «parlar» para «tu»?',
        options: ['no parla', 'no parlis', 'no parles'],
        answer: 'no parlis',
        explanation: 'O imperativo negativo usa o presente do subjuntivo: «no parlis».',
      },
      {
        question: 'Como se diz «Escute-me!» (tu) no imperativo afirmativo?',
        options: ["Escolta'm!", 'Em escolta!', "No m'escoltis!"],
        answer: "Escolta'm!",
        explanation: 'No afirmativo, o pronome vem depois do verbo, ligado por apóstrofo.',
      },
    ],
  },
  {
    id: 'ca-g15',
    level: 'B1.1',
    title: 'Orações relativas e pronomes relativos',
    emoji: '🔗',
    summary: 'O relativo invariável «que», «qui» (pessoas com preposição), «on» (lugar) e as formas compostas «el qual/la qual».',
    sections: [
      {
        heading: 'O relativo invariável «que»',
        text: 'O relativo mais usado. Sem acento, invariável em gênero e número; funciona como sujeito ou objeto direto.',
        examples: [
          ['El llibre que llegeixo és molt bo.', 'O livro que estou lendo é muito bom.'],
          ['La noia que ve per allà és la meva germana.', 'A garota que vem por ali é minha irmã.'],
          ['Els cotxes que fan soroll són vells.', 'Os carros que fazem barulho são velhos.'],
        ],
      },
      {
        heading: 'Os relativos «qui» e «on»',
        text: '«qui» para pessoas depois de preposição simples (a, de, amb, en, per). «on» para antecedente de lugar.',
        table: {
          head: ['Relativo', 'Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['qui', 'pessoas (após preposição)', 'El noi de qui et parlava és metge.', 'O rapaz de quem te falava é médico.'],
            ['on', 'lugar', 'La ciutat on visc és tranquil·la.', 'A cidade onde moro é tranquila.'],
          ],
        },
        examples: [
          ["L'amiga amb qui vaig sortir ahir.", 'A amiga com quem saí ontem.'],
          ['El restaurant on hem dinat.', 'O restaurante onde almoçamos.'],
        ],
      },
      {
        heading: 'O composto «el qual/la qual/els quals/les quals»',
        text: 'Variável, concorda com o antecedente. Obrigatório depois de preposição composta, ou para evitar ambiguidade sobre a qual antecedente a frase se refere.',
        examples: [
          ['La taula a sobre de la qual hi ha el llibre.', 'A mesa em cima da qual está o livro.'],
          ['El pare de la Maria, el qual viu a Girona.', 'O pai da Maria, o qual mora em Girona.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «que» logo depois de preposição para pessoa («el noi de que parlo» em vez de «el noi de qui parlo»).',
      'Pôr acento em «que» relativo: nunca leva.',
      'Esquecer de concordar «el qual/la qual/els quals/les quals» com o antecedente.',
    ],
    quiz: [
      {
        question: '«La noia amb ___ vaig parlar és simpàtica»: qual pronome?',
        options: ['que', 'qui', 'on'],
        answer: 'qui',
        explanation: 'Depois de preposição («amb») referindo pessoa, usa-se «qui».',
      },
      {
        question: 'Como se diz «A cidade onde nasci»?',
        options: ['La ciutat que vaig néixer', 'La ciutat on vaig néixer', 'La ciutat de qui vaig néixer'],
        answer: 'La ciutat on vaig néixer',
        explanation: 'Antecedente de lugar: relativo «on».',
      },
    ],
  },
  {
    id: 'ca-g16',
    level: 'B1.2',
    title: 'Pretérito imperfeito do subjuntivo',
    emoji: '💭',
    summary: 'Usado para hipóteses, situações irrealizáveis no presente, desejos improváveis, e para concordar com verbo de intenção/sentimento no passado.',
    sections: [
      {
        heading: 'Formação regular',
        text: 'Terminações «-és» (1ª e 2ª conjugação) e «-ís» (3ª conjugação). Atenção ao acento em «nosaltres»/«vosaltres».',
        table: {
          head: ['Pronome', '-ar: parlar', '-re: perdre', '-ir: dormir'],
          rows: [
            ['jo', 'parlés', 'perdés', 'dormís'],
            ['tu', 'parlessis', 'perdessis', 'dormissis'],
            ['ell/ella/vostè', 'parlés', 'perdés', 'dormís'],
            ['nosaltres', 'parléssim', 'perdéssim', 'dormíssim'],
            ['vosaltres', 'parléssiu', 'perdéssiu', 'dormíssiu'],
            ['ells/elles/vostès', 'parlessin', 'perdessin', 'dormissin'],
          ],
        },
        examples: [
          ['Volia que tu parlessis amb ell.', 'Eu queria que você falasse com ele.'],
          ['Si dormíssim més, estaríem menys cansats.', 'Se dormíssemos mais, estaríamos menos cansados.'],
          ["L'entrenador va demanar que perdessin la por.", 'O treinador pediu que perdessem o medo.'],
        ],
      },
      {
        heading: 'Verbos irregulares principais',
        text: 'Vários verbos de alta frequência têm raiz irregular no imperfeito do subjuntivo.',
        table: {
          head: ['Verbo', 'jo', 'nosaltres'],
          rows: [
            ['ésser/ser', 'fos', 'fóssim'],
            ['estar', 'estigués', 'estiguéssim'],
            ['fer', 'fes', 'féssim'],
            ['anar', 'anés', 'anéssim'],
            ['tenir', 'tingués', 'tinguéssim'],
            ['saber', 'sabés', 'sabéssim'],
          ],
        },
        examples: [
          ['Si jo fos tu, no ho faria.', 'Se eu fosse você, não faria isso.'],
          ['Tant de bo tinguéssim més temps.', 'Tomara que tivéssemos mais tempo.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o acento em «nosaltres»/«vosaltres» («parléssim», «parléssiu»).',
      'Confundir as formas catalãs em «-és» com o espanhol «-ara/-iera» («hablara», «comiera»).',
      'Confundir o imperfeito do subjuntivo de «ser» («fos») com o de «fer» («fes»).',
    ],
    quiz: [
      {
        question: 'Qual é o imperfeito do subjuntivo de «ser» para «jo»?',
        options: ['fos', 'faria', 'sigui'],
        answer: 'fos',
        explanation: 'A forma irregular de «ésser/ser» no imperfeito do subjuntivo, 1ª pessoa, é «fos».',
      },
      {
        question: 'Qual é «nosaltres» de «tenir» no imperfeito do subjuntivo?',
        options: ['tinguéssim', 'tinguem', 'teníem'],
        answer: 'tinguéssim',
        explanation: '«Tenir» forma «tinguéssim» na 1ª pessoa do plural do imperfeito do subjuntivo.',
      },
    ],
  },
  {
    id: 'ca-g17',
    level: 'B1.2',
    title: 'Condicionais de 2º tipo (hipóteses no presente)',
    emoji: '🔀',
    summary: '«si» + imperfeito do subjuntivo na oração condicional, com a principal no condicional simples — para hipóteses irrealizáveis no presente.',
    sections: [
      {
        heading: 'Estrutura',
        text: 'Oração com «si» (imperfeito do subjuntivo) + oração principal (condicional simples).',
        table: {
          head: ['Oração com si', 'Oração principal', 'Tradução'],
          rows: [
            ['Si tingués diners,', 'compraria un cotxe.', 'Se eu tivesse dinheiro, compraria um carro.'],
            ['Si visquéssim a Barcelona,', 'aniríem a la platja.', 'Se morássemos em Barcelona, iríamos à praia.'],
            ['Si tu fossis més atent,', 'no cometries tants errors.', 'Se você fosse mais atento, não cometeria tantos erros.'],
          ],
        },
        examples: [
          ['Si plogués, no sortiríem de casa.', 'Se chovesse, não sairíamos de casa.'],
          ["Què faries si tinguessis un milió d'euros?", 'O que você faria se tivesse um milhão de euros?'],
          ['Si em demanessis ajuda, te la donaria.', 'Se você me pedisse ajuda, eu te daria.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o condicional logo depois de «si» («Si tindria diners» é erro grave; o certo é «Si tingués diners»).',
      'Usar o presente na oração principal quando a condição está no imperfeito do subjuntivo.',
      'Trocar a ordem das orações sem ajustar a pontuação (invertida, não precisa de vírgula).',
    ],
    quiz: [
      {
        question: '«Si jo ___ (tenir) temps, aniria al cinema»: qual é a forma certa?',
        options: ['tinc', 'tindria', 'tingués'],
        answer: 'tingués',
        explanation: 'Depois de «si» em hipótese no presente, exige-se o imperfeito do subjuntivo.',
      },
      {
        question: '«Si tu estiguessis cansat, ___ (dormir) més»: complete.',
        options: ['dormiries', 'dorms', 'dormíssis'],
        answer: 'dormiries',
        explanation: 'A oração principal (o resultado hipotético) vai no condicional simples.',
      },
    ],
  },
  {
    id: 'ca-g18',
    level: 'B1.2',
    title: 'Combinação de pronomes fracos (CI + CD)',
    emoji: '🧩',
    summary: 'Quando dois pronomes fracos acompanham o mesmo verbo, combinam-se numa ordem fixa, com regras próprias de apostrofação.',
    sections: [
      {
        heading: 'Ordem dos pronomes',
        text: 'A ordem padrão é complemento indireto (CI) antes do direto (CD), com exceção do reflexivo «se», que vem antes de qualquer outro.',
        table: {
          head: ['Regra', 'Estrutura', 'Exemplo'],
          rows: [
            ['Geral', 'CI + CD', "me + el → me'l"],
            ['Reflexivo', 'se + CI/CD', 'se + li → se li'],
          ],
        },
      },
      {
        heading: 'Combinações mais comuns antes do verbo',
        text: 'Diante de verbo com consoante inicial. Note que «li» + CD de 3ª pessoa vira «hi» — nunca «li» somado direto ao outro pronome.',
        table: {
          head: ['CI', 'CD (el)', 'CD (la)', 'CD (els)', 'CD (les)', 'Exemplo'],
          rows: [
            ['em (me)', "me'l", 'me la', "me'ls", 'me les', "Me'l dóna. (Ele me dá o objeto.)"],
            ['et (te)', "te'l", 'te la', "te'ls", 'te les', "Te'l compro. (Eu compro para você.)"],
            ['li (lhe)', "l'hi", 'la hi', 'els hi', 'les hi', "L'hi dono. (Eu dou a ele/ela.)"],
          ],
        },
        examples: [
          ["Aquest llibre? Me'l compres? — Sí, te'l compro.", 'Este livro? Você compra para mim? — Sim, compro para você.'],
          ['Dones la carta a la Maria? — Sí, la hi dono.', 'Você dá a carta para a Maria? — Sim, dou para ela. (la + li → la hi)'],
          ['Qui te les ha portat?', 'Quem trouxe elas para você?'],
        ],
      },
    ],
    pitfalls: [
      'Inverter a ordem, pondo o CD antes do CI («el em dóna» em vez de «me\'l dóna»).',
      'Errar a combinação «li + el», que vira «l\'hi» (não «li\'l»).',
      'Esquecer a apostrofação quando o segundo pronome é «el» ou começa por vogal («me\'l», «te\'l»).',
    ],
    quiz: [
      {
        question: 'Como fica «em» (CI) + «el» (CD) antes de «donar»?',
        options: ['el em dóna', "me'l dóna", 'em el dóna'],
        answer: "me'l dóna",
        explanation: 'O indireto «em» precede o direto «el» e se junta por apóstrofo: «me\'l».',
      },
      {
        question: 'Como substituir «la carta» (la) + «a en Marc» (li) em «Dono la carta a en Marc»?',
        options: ['li la dono', 'la hi dono', "l'hi dono"],
        answer: 'la hi dono',
        explanation: 'CD feminino «la» + CI «li» dá «la hi» (o «l\'hi» é só para o masculino «el»).',
      },
    ],
  },
  {
    id: 'ca-g19',
    level: 'B2.1',
    title: 'Voz passiva e construções impessoais',
    emoji: '🔄',
    summary: 'A passiva analítica (ésser + particípio), a passiva pronominal («es» + verbo) e a construção impessoal, comuns em textos formais e jornalísticos.',
    sections: [
      {
        heading: 'Passiva analítica (ésser/ser + particípio)',
        text: 'Auxiliar «ésser»/«ser» no tempo certo + particípio do verbo principal. O particípio concorda em gênero e número com o sujeito paciente. O agente vem com «per» (ou «per part de») — nunca «por».',
        table: {
          head: ['Tempo', 'Exemplo', 'Tradução'],
          rows: [
            ['Presente', 'El discurs és llegit pel president.', 'O discurso é lido pelo presidente.'],
            ['Passat perifràstic', 'Les lleis van ser aprovades pel parlament.', 'As leis foram aprovadas pelo parlamento.'],
            ['Futuro', 'Les propostes seran examinades per la comissió.', 'As propostas serão examinadas pela comissão.'],
          ],
        },
        examples: [
          ['Aquesta novel·la va ser escrita per Mercè Rodoreda.', 'Este romance foi escrito por Mercè Rodoreda.'],
          ['Les cartes van ser enviades ahir.', 'As cartas foram enviadas ontem.'],
        ],
      },
      {
        heading: 'Passiva pronominal e impessoalidade com «es»',
        text: 'Na fala e na escrita informal/média, prefere-se «es» + verbo (3ª pessoa) à passiva analítica. Na passiva pronominal, o verbo concorda com o objeto paciente.',
        table: {
          head: ['Tipo', 'Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['Passiva pronominal', 'es + verbo 3ª pl. + substantivo plural', 'Es venen pisos al centre.', 'Vendem-se apartamentos no centro.'],
            ['Passiva pronominal', 'es + verbo 3ª sing. + substantivo singular', 'Es busca cambrer.', 'Procura-se garçom.'],
            ['Impessoal', 'es + verbo 3ª sing. (sem sujeito)', 'Es viu molt bé aquí.', 'Vive-se muito bem aqui.'],
          ],
        },
        examples: [
          ['Es van aprovar totes les esmenes.', 'Aprovaram-se todas as emendas.'],
          ['En aquesta ciutat es parla català i castellà.', 'Nesta cidade fala-se catalão e espanhol.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a concordância do particípio na passiva analítica («les lleis van ser aprovat» em vez de «aprovades»).',
      'Usar «por» (espanhol) para o agente da passiva em vez de «per».',
      'Não pôr o verbo no plural na passiva pronominal («es ven pisos» em vez de «es venen pisos»).',
    ],
    quiz: [
      {
        question: 'Qual é a passiva analítica correta de «As propostas serão examinadas pela comissão»?',
        options: ['Les propostes seran examinat per la comissió', 'Les propostes seran examinades per la comissió', 'Les propostes seran examinats per la comissió'],
        answer: 'Les propostes seran examinades per la comissió',
        explanation: 'O particípio concorda em feminino plural com «les propostes»: «examinades».',
      },
      {
        question: 'Qual frase concorda certo na passiva pronominal com substantivo plural?',
        options: ['Es ven pisos al centre', 'Es venen pisos al centre', 'Es venent pisos al centre'],
        answer: 'Es venen pisos al centre',
        explanation: 'O verbo no plural («venen») concorda com o sujeito paciente plural («pisos»).',
      },
    ],
  },
  {
    id: 'ca-g20',
    level: 'B2.1',
    title: 'Mais-que-perfeito do subjuntivo e condicional composto',
    emoji: '⏪',
    summary: 'A condicional de 3º tipo, para hipóteses irrealizáveis no passado: «si» + mais-que-perfeito do subjuntivo, principal no condicional composto.',
    sections: [
      {
        heading: 'Formação dos tempos compostos',
        text: 'Mais-que-perfeito do subjuntivo: imperfeito do subjuntivo de «haver» + particípio. Condicional composto: condicional simples de «haver» + particípio.',
        table: {
          head: ['Pronome', 'Mais-que-perfeito subj. (haver)', 'Condicional composto (haver)', 'Particípio'],
          rows: [
            ['jo', 'hagués', 'hauria', 'parlat/fet/vist'],
            ['tu', 'haguessis', 'hauries', 'parlat/fet/vist'],
            ['ell/ella/vostè', 'hagués', 'hauria', 'parlat/fet/vist'],
            ['nosaltres', 'haguéssim', 'hauríem', 'parlat/fet/vist'],
            ['vosaltres', 'haguéssiu', 'hauríeu', 'parlat/fet/vist'],
            ['ells/elles/vostès', 'haguessin', 'haurien', 'parlat/fet/vist'],
          ],
        },
      },
      {
        heading: 'Condicionais de 3º tipo (hipóteses no passado)',
        text: 'Para situações irrealizáveis ou lamentações sobre o passado. A oração com «si» pede o mais-que-perfeito do subjuntivo; a principal, o condicional composto.',
        examples: [
          ["Si hagués sabut la veritat, m'hauria quedat a casa.", 'Se eu soubesse a verdade, teria ficado em casa.'],
          ['Si haguéssim agafat el tren, hauríem arribat a temps.', 'Se tivéssemos pego o trem, teríamos chegado a tempo.'],
          ["Si haguessis estudiat més, hauries aprovat l'examen.", 'Se você tivesse estudado mais, teria passado no exame.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o condicional composto logo depois de «si» («Si hauria sabut» é erro grave; o certo é «Si hagués sabut»).',
      'Esquecer o acento nas formas de «nosaltres»/«vosaltres» («haguéssim/haguéssiu», «hauríem/hauríeu»).',
      'Confundir a raiz catalã de «haver» no subjuntivo («hagués») com a espanhola («hubiera»).',
    ],
    quiz: [
      {
        question: 'Como se diz «Se eu tivesse sabido a verdade, teria vindo»?',
        options: ['Si hauria sabut la veritat, hauria vingut', 'Si hagués sabut la veritat, hauria vingut', 'Si hagués sabut la veritat, hagués vingut'],
        answer: 'Si hagués sabut la veritat, hauria vingut',
        explanation: '«si» pede mais-que-perfeito do subjuntivo («hagués sabut»); a principal, condicional composto («hauria vingut»).',
      },
      {
        question: 'Qual é «nosaltres» de «haver» no mais-que-perfeito do subjuntivo?',
        options: ['haguéssim', 'hauríem', 'haguem'],
        answer: 'haguéssim',
        explanation: '1ª pessoa do plural de «haver» no mais-que-perfeito do subjuntivo: «haguéssim».',
      },
    ],
  },
  {
    id: 'ca-g21',
    level: 'B2.1',
    title: 'Conectores avançados: causa, concessão e finalidade',
    emoji: '🪢',
    summary: 'Conectores causais, concessivos e de finalidade, e quando cada um pede indicativo ou subjuntivo.',
    sections: [
      {
        heading: 'Conectores causais (pedem indicativo)',
        text: 'Expressam causa de um fato real: «perquè» (porque), «ja que» (já que), «atès que» (visto que) e «com que» (como/visto que — obrigatoriamente no início da frase).',
        table: {
          head: ['Conector', 'Posição', 'Exemplo', 'Tradução'],
          rows: [
            ['perquè / ja que', 'meio ou fim da oração', 'No vaig venir perquè plovia.', 'Não vim porque chovia.'],
            ['com que', 'início (obrigatório)', 'Com que era tard, vam agafar un taxi.', 'Como estava tarde, pegamos um táxi.'],
            ['atès que', 'registro formal', 'Atès que no hi ha preguntes, cloem la sessió.', 'Visto que não há perguntas, encerramos a sessão.'],
          ],
        },
      },
      {
        heading: 'Conectores concessivos e finais',
        text: '«tot i que»/«malgrat que» (concessivo, fato real) pedem indicativo; «encara que» pode pedir subjuntivo quando é hipótese. Conectores de finalidade («perquè», «per tal que», com sentido de «para que») pedem SEMPRE subjuntivo — cuidado: «perquè» serve tanto de causa (indicativo) quanto de finalidade (subjuntivo).',
        table: {
          head: ['Tipo', 'Conector', 'Modo', 'Exemplo'],
          rows: [
            ['Concessivo (fato real)', 'tot i que / malgrat que', 'indicatiu', 'Tot i que plou, sortirem a passejar.'],
            ['Concessivo (hipótese)', 'encara que', 'subjuntiu', 'Encara que plogui demà, sortirem.'],
            ['Finalidade', 'perquè / per tal que', 'subjuntiu (sempre)', "T'ho explico perquè ho entenguis."],
          ],
        },
        examples: [
          ['Et truco per tal que sàpigues la notícia.', 'Ligo para você para que saiba da notícia.'],
          ['Malgrat que fa fred, hem anat a la platja.', 'Apesar de estar frio, fomos à praia.'],
        ],
      },
    ],
    pitfalls: [
      'Usar indicativo depois de conector de finalidade («perquè ho entens» em vez de «perquè ho entenguis»).',
      'Confundir «com que» (causal, início de frase) com o «com» simples.',
      'Começar frase causal com «perquè»: prefira «com que» quando a causa vem primeiro.',
    ],
    quiz: [
      {
        question: 'Que modo verbal vem depois de «per tal que»?',
        options: ['Indicatiu', 'Subjuntiu', 'Infinitiu'],
        answer: 'Subjuntiu',
        explanation: 'Conectores de finalidade («per tal que», «perquè» com sentido de propósito) sempre pedem subjuntivo.',
      },
      {
        question: 'Qual conector causal abre a frase «___ era tard, vam agafar un taxi»?',
        options: ['Com que', 'Perquè', 'Per tal que'],
        answer: 'Com que',
        explanation: '«Com que» é o conector causal próprio para abrir a oração.',
      },
    ],
  },
  {
    id: 'ca-g22',
    level: 'B2.2',
    title: 'Discurso indireto e concordância temporal',
    emoji: '🗣️',
    summary: 'Relatar o que alguém disse ajustando tempo verbal, pronomes e advérbios de tempo/lugar conforme a mudança de ponto de vista.',
    sections: [
      {
        heading: 'Mudanças nos tempos verbais',
        text: 'Quando o verbo introdutório está no passado («va dir», «va comentar»), os tempos da oração citada mudam sistematicamente.',
        table: {
          head: ['Discurso direto', 'Discurso indireto (após verbo no passado)', 'Direto', 'Indireto'],
          rows: [
            ['Presente do indicativo', 'Imperfeito do indicativo', '"Tinc fam"', 'Va dir que tenia fam.'],
            ['Passat perifràstic/perfet', 'Mais-que-perfeito do indicativo', '"He comprat pa"', 'Va dir que havia comprat pa.'],
            ['Futuro simples', 'Condicional simples', '"Vindré demà"', "Va dir que vindria l'endemà."],
            ['Presente do subjuntivo', 'Imperfeito do subjuntivo', '"Vull que vinguis"', 'Va dir que volia que vingués.'],
          ],
        },
      },
      {
        heading: 'Mudanças de advérbios de tempo/lugar',
        text: 'A passagem ao discurso indireto ajusta os marcadores de tempo e lugar à nova perspectiva.',
        table: {
          head: ['Direto', 'Indireto', 'Tradução'],
          rows: [
            ['ara', 'aleshores / en aquell moment', 'agora → então/naquele momento'],
            ['avui', 'aquell dia', 'hoje → aquele dia'],
            ['ahir', 'el dia abans', 'ontem → o dia anterior'],
            ['demà', "l'endemà", 'amanhã → o dia seguinte'],
            ['aquí / ací', 'allà / allí', 'aqui → lá'],
          ],
        },
        examples: [
          ['"Ahir vaig veure en Marc" → Va dir que el dia abans havia vist en Marc.', '"Ontem vi o Marc" → Disse que no dia anterior tinha visto o Marc.'],
          ["\"Demà anirem a la platja\" → Van comentar que l'endemà anirien a la platja.", '"Amanhã iremos à praia" → Comentaram que no dia seguinte iriam à praia.'],
        ],
      },
    ],
    pitfalls: [
      'Manter os advérbios do discurso direto sem ajustar («Va dir que vindria demà» em vez de «l\'endemà»).',
      'Esquecer de mudar presente para imperfeito ao relatar no passado.',
      'Manter pronome de 1ª pessoa quando a pessoa relatada é 3ª pessoa.',
    ],
    quiz: [
      {
        question: '«Aniré a Girona demà», dita por en Joan ontem: como fica no indireto?',
        options: ["En Joan va dir que aniria a Girona l'endemà", 'En Joan va dir que aniré a Girona demà', 'En Joan va dir que anava a Girona avui'],
        answer: "En Joan va dir que aniria a Girona l'endemà",
        explanation: 'Futuro «aniré» vira condicional «aniria»; «demà» vira «l\'endemà».',
      },
      {
        question: 'Qual advérbio substitui «avui» no discurso indireto no passado?',
        options: ['aleshores', 'aquell dia', "l'endemà"],
        answer: 'aquell dia',
        explanation: '«Avui» (hoje) vira «aquell dia» (aquele dia) no discurso indireto.',
      },
    ],
  },
  {
    id: 'ca-g23',
    level: 'B2.2',
    title: 'Formação de palavras e o pronome neutro «ho»',
    emoji: '🧱',
    summary: 'Sufixos para formar substantivos a partir de verbos/adjetivos, e o pronome neutro «ho», que substitui atributos e orações inteiras.',
    sections: [
      {
        heading: 'Sufixação e derivação de substantivos',
        text: 'Sufixos comuns para formar substantivos abstratos, de ação ou de qualidade.',
        table: {
          head: ['Sufixo', 'Função', 'Origem', 'Derivado'],
          rows: [
            ['-ment', 'ação/resultado', 'pensar', 'pensament (pensamento)'],
            ['-ció/-sió', 'processo/estado', 'organitzar', 'organització (organização)'],
            ['-etat/-itat', 'qualidade abstrata', 'real', 'realitat (realidade)'],
            ['-esa', 'qualidade de adjetivo', 'vell (velho)', 'vellesa (velhice)'],
          ],
        },
      },
      {
        heading: 'O pronome neutro «ho»',
        text: '«ho» é invariável: substitui atributo com verbo copulativo (ser/estar/semblar) ou oração inteira/demonstrativo neutro (això/allò).',
        examples: [
          ['Ets feliç? — Sí, ho soc.', 'Você é feliz? — Sim, sou. (ho = «feliç»)'],
          ['Sabies que en Marc es casa? — No, no ho sabia.', 'Você sabia que o Marc vai casar? — Não sabia. (ho = a oração toda)'],
          ['Volen fer això? — Sí, volen fer-ho.', 'Eles querem fazer isso? — Sim, querem fazê-lo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «el» para substituir atributo/oração neutra em vez de «ho» («Sí, el soc» em vez de «Sí, ho soc»).',
      'Confundir o sufixo nominal «-esa» (qualidade) com o adjetival «-ès» (nacionalidade).',
      'Esquecer a troca «-itzar» → «-ització» em verbos eruditos («organitzar» → «organització»).',
    ],
    quiz: [
      {
        question: 'Qual pronome substitui «[que la reunió s\'havia cancel·lat]» em «No sabia ___»?',
        options: ['el', 'la', 'ho'],
        answer: 'ho',
        explanation: 'Oração subordinada inteira ou ideia abstrata: pronome neutro «ho».',
      },
      {
        question: 'Qual é o substantivo abstrato de «vell» por sufixação?',
        options: ['vellesa', 'vellitat', 'vellament'],
        answer: 'vellesa',
        explanation: '«-esa» forma substantivo abstrato de qualidade a partir de adjetivo: «vellesa».',
      },
    ],
  },
  {
    id: 'ca-g24',
    level: 'B2.2',
    title: 'Combinação avançada de pronomes fracos (hi/en + CD/CI)',
    emoji: '🧩',
    summary: 'Como «hi» e «en» se combinam com pronomes de complemento direto e indireto no mesmo verbo.',
    sections: [
      {
        heading: '«Hi» combinado com CD e CI',
        text: 'Combinando «hi» com el/la/els/les (CD) ou li (CI), há fusões próprias.',
        table: {
          head: ['Combinação', 'Resultado', 'Exemplo', 'Tradução'],
          rows: [
            ['el + hi', "l'hi", "L'hi vaig portar.", 'Eu o levei lá.'],
            ['la + hi', 'la hi', 'La hi vaig portar.', 'Eu a levei lá.'],
            ['els + hi', 'els hi', 'Els hi vaig portar.', 'Eu os levei lá.'],
            ['les + hi', 'les hi', 'Les hi vaig portar.', 'Eu as levei lá.'],
          ],
        },
      },
      {
        heading: '«En» combinado com outros pronomes',
        text: '«en» (origem ou quantidade) vem por último na sequência.',
        examples: [
          ["Se'n va anar d'hora.", 'Ele/ela foi embora cedo. (se + en → se\'n)'],
          ["Me'n dones un poc? — Sí, te'n dono.", 'Você me dá um pouco disso? — Sim, te dou um pouco. (me+en→me\'n; te+en→te\'n)'],
          ['Canta cançons als nens? — Sí, els en canta.', 'Canta canções para as crianças? — Sim, canta-lhes algumas. (els + en, sem elisão)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr «en»/«hi» antes do pronome de pessoa («en me dóna» em vez de «me\'n dóna»).',
      'Confundir «l\'hi» (el + hi) com o simples «li».',
      'Esquecer o apóstrofo ao combinar «se»/«me»/«te» com «en» («se\'n», «me\'n», «te\'n»).',
    ],
    quiz: [
      {
        question: 'Como fica «me» + «en» em «Você me dá um pouco disso?»?',
        options: ["Me'n dones?", 'En me dones?', 'Me en dones?'],
        answer: "Me'n dones?",
        explanation: '«me» precede «en», unidos por apóstrofo: «me\'n».',
      },
      {
        question: 'Como fica «Eu o levei até lá» (el = objeto, hi = lá)?',
        options: ["L'hi vaig portar", 'El hi vaig portar', 'Li vaig portar'],
        answer: "L'hi vaig portar",
        explanation: '«el» + «hi» dá a forma apostrofada «l\'hi».',
      },
    ],
  },
  {
    id: 'ca-g25',
    level: 'B1.3',
    title: 'Preposições «per» e «per a»: causa, meio, destino e finalidade',
    emoji: '🎯',
    summary: 'Um dos pontos mais sensíveis do catalão: «per» é causa, meio, lugar de passagem ou tempo aproximado; «per a» é destinatário, finalidade e prazo.',
    sections: [
      {
        heading: 'Usos de «per»',
        text: 'Introduz causa/motivo, meio/instrumento, passagem por lugar, troca/preço e o agente da passiva.',
        table: {
          head: ['Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['Causa/motivo', "Ho fa per por d'equivocar-se.", 'Faz por medo de errar.'],
            ['Meio/instrumento', 'Li ho vaig dir per telèfon.', 'Disse a ele por telefone.'],
            ['Lugar/passagem', 'Vam passejar per la platja.', 'Passeamos pela praia.'],
            ['Troca/preço', 'Ho vaig comprar per deu euros.', 'Comprei por dez euros.'],
            ['Agente da passiva', 'Un quadre pintat per Miró.', 'Um quadro pintado por Miró.'],
          ],
        },
        examples: [
          ['No hem pogut sortir per la pluja.', 'Não pudemos sair por causa da chuva. (causa)'],
          ['Envio l\'informe per correu electrònic.', 'Envio o relatório por e-mail. (meio)'],
        ],
      },
      {
        heading: 'Usos de «per a»',
        text: 'Reservada para destinatário/beneficiário, finalidade e prazo/data limite.',
        table: {
          head: ['Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['Destinatário', 'Aquest regal és per a la mare.', 'Este presente é para a mãe.'],
            ['Finalidade (+ substantivo)', 'Una eina per a la fusteria.', 'Uma ferramenta para a marcenaria.'],
            ['Prazo/data limite', 'He de tenir la feina feta per a demà.', 'Tenho que ter o trabalho pronto para amanhã.'],
          ],
        },
        examples: [
          ['Aquesta carta és per a tu.', 'Esta carta é para você. (destinatário)'],
          ['Necessitem diners per a la reforma.', 'Precisamos de dinheiro para a reforma. (finalidade)'],
        ],
      },
      {
        heading: 'Contrastes de sentido e um ponto debatido',
        text: 'A escolha entre «per» e «per a» pode mudar o sentido da frase. Um ponto sem consenso total: a gramática tradicional (Pompeu Fabra) prescreve «per» (sem «a») antes de infinitivo quando o sujeito da ação e do infinitivo é o mesmo («Estudio per aprendre»); mas «per a» antes de infinitivo («Estudio per a aprendre») é muito comum na prática atual, inclusive em registros cuidados — trate os dois como aceitos, sem apresentar um como certo e outro como errado.',
        examples: [
          ['Ho faig per tu.', 'Faço por você. (por sua causa/em seu lugar — causa)'],
          ['Ho faig per a tu.', 'Faço para você. (em seu benefício — destinatário)'],
          ['Treballa per la pau.', 'Trabalha pela paz. (causa/ideal)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir causa («per tu» = por você/por sua causa) com destinatário («per a tu» = para você).',
      'Usar «per» sozinho para prazo (o certo é «per a demà», «per al mes vinent»).',
      'Confundir as contrações: «per + el = pel» (pelo), mas «per a + el = per al» (para o).',
      'A fala cotidiana do catalão central costuma reduzir «per a» para «per» antes de infinitivo/vogal, mas a norma escrita culta mantém a distinção de sentido.',
    ],
    quiz: [
      {
        question: '«L\'informe ha d\'estar a punt ___ demà»: qual preposição?',
        options: ['per a', 'per', 'per de'],
        answer: 'per a',
        explanation: 'Prazo/data limite no futuro pede «per a».',
      },
      {
        question: 'Qual é a diferença entre «Ho faig per tu» e «Ho faig per a tu»?',
        options: [
          '«per tu» indica causa/motivo; «per a tu» indica destinatário/benefício.',
          '«per tu» indica futuro; «per a tu» indica passado.',
          'Não há diferença, são intercambiáveis.',
        ],
        answer: '«per tu» indica causa/motivo; «per a tu» indica destinatário/benefício.',
        explanation: '«per» expressa causa/motivo; «per a» assinala o destinatário ou beneficiário.',
      },
    ],
  },
  {
    id: 'ca-g26',
    level: 'B1.3',
    title: 'Indefinidos, «no... pas» e «tampoc»',
    emoji: '🔍',
    summary: 'Pronomes e advérbios indefinidos (algú, ningú, res, cap, tothom) e os recursos catalães de negação enfática («no... pas») e concordância negativa («tampoc»).',
    sections: [
      {
        heading: 'Indefinidos de pessoa, coisa e quantidade',
        text: 'Opõem formas afirmativas/existenciais a formas negativas/de ausência total.',
        table: {
          head: ['Categoria', 'Afirmativo', 'Negativo', 'Exemplo'],
          rows: [
            ['Pessoa', 'algú (alguém)', 'ningú (ninguém)', 'Algú truca. / No hi ha ningú.'],
            ['Coisa', 'alguna cosa (algo)', 'res (nada)', 'Vols alguna cosa? / No sé res.'],
            ['Pessoas (total)', 'tothom (todo mundo)', '—', 'Tothom ho sap. (verbo sempre singular)'],
            ['Substantivo', 'algun/alguna/alguns/algunes', 'cap (nenhum)', 'Alguns llibres. / Cap llibre.'],
            ['Totalidade', 'tot/tota/tots/totes', '—', 'Tota la classe.'],
          ],
        },
        examples: [
          ['Tothom està a punt per a la reunió.', 'Todo mundo está pronto para a reunião.'],
          ['No hi ha cap dubte sobre la decisió.', 'Não há nenhuma dúvida sobre a decisão.'],
        ],
      },
      {
        heading: 'Valor positivo de «cap», «res» e «ningú»',
        text: 'Em pergunta, dúvida ou condição, «cap», «res» e «ningú» perdem a carga negativa e viram indefinidos afirmativos («algum», «algo», «alguém»).',
        examples: [
          ['Tens cap pregunta?', 'Você tem alguma pergunta? (não «nenhuma»)'],
          ['Has vist ningú al passadís?', 'Viu alguém no corredor?'],
          ["Si necessites res, avisa'm.", 'Se precisar de alguma coisa, me avise.'],
        ],
      },
      {
        heading: 'A negação enfática «no... pas» e o advérbio «tampoc»',
        text: 'Estruturas catalãs próprias para matizar ou reforçar a negação.',
        table: {
          head: ['Estrutura', 'Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['no... pas', 'reforça a negação, contradiz expectativa do ouvinte', 'No és pas tan difícil com sembla.', 'Não é (de jeito nenhum) tão difícil quanto parece.'],
            ['tampoc (antes do verbo)', 'concordância negativa sem «no»', 'Jo tampoc ho sé.', 'Eu também não sei.'],
            ['tampoc (depois do verbo)', 'concordância negativa, precisa de «no» antes', 'No ho sé jo tampoc.', 'Não sei eu tampouco.'],
          ],
        },
        examples: [
          ["No vull pas ofendre't.", 'Não quero (de jeito nenhum) te ofender.'],
          ['Ell no ve i jo tampoc.', 'Ele não vem e eu também não.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o verbo no plural com «tothom» («tothom saben» em vez de «tothom sap»).',
      'Usar «nada»/«nadie» (espanhol) em vez de «res»/«ningú».',
      'Confundir o determinante «cap» (invariável: «cap idea», «cap llibre») com a preposição de direção «cap a».',
      'Achar que «no... pas» é obrigatório em toda negativa: é um recurso expressivo, não regra geral.',
    ],
    quiz: [
      {
        question: 'Como fica «Todo mundo concorda» com «tothom»?',
        options: ["Tothom hi està d'acord", 'Tothom hi estan d\'acord', "Tots tothom hi estan d'acord"],
        answer: "Tothom hi està d'acord",
        explanation: '«tothom» sempre pede o verbo na 3ª pessoa do singular.',
      },
      {
        question: 'Em «Tens cap dubte?», o que «cap» quer dizer?',
        options: ['Alguma', 'Nenhuma', 'Muita'],
        answer: 'Alguma',
        explanation: 'Em pergunta/condição, «cap» tem valor afirmativo de «algum(a)».',
      },
    ],
  },
  {
    id: 'ca-g27',
    level: 'B1.4',
    title: 'Perífrases de obrigação, necessidade e probabilidade',
    emoji: '📌',
    summary: 'Obrigação pessoal com «haver de», necessidade com o impessoal «caldre», e dedução lógica com «deure».',
    sections: [
      {
        heading: 'Obrigação pessoal: haver de + infinitiu',
        text: 'Obrigação/necessidade atribuída a um sujeito. No catalão padrão (IEC), evite «tenir que».',
        table: {
          head: ['Pronome', 'Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['jo', 'he de + infinitiu', 'He de redactar una queixa.', 'Tenho que redigir uma reclamação.'],
            ['tu', 'has de + infinitiu', 'Has de signar el document.', 'Você tem que assinar o documento.'],
            ['ell/ella', 'ha de + infinitiu', 'Ha de prendre una decisió.', 'Ele/ela tem que tomar uma decisão.'],
            ['nosaltres', 'hem de + infinitiu', 'Hem de demanar explicacions.', 'Temos que pedir explicações.'],
            ['vosaltres', 'heu de + infinitiu', 'Heu de presentar la sol·licitud.', 'Vocês têm que apresentar a solicitação.'],
            ['ells/elles', 'han de + infinitiu', 'Han de respondre aviat.', 'Eles/elas têm que responder logo.'],
          ],
        },
        examples: [
          ['Avui he de parlar amb el director.', 'Hoje tenho que falar com o diretor.'],
          ['Hem de justificar aquesta despesa.', 'Temos que justificar essa despesa.'],
        ],
      },
      {
        heading: 'Necessidade impessoal e específica: caldre',
        text: '«caldre» é impessoal (3ª pessoa singular «cal»/«calia»), com duas estruturas: sem sujeito específico, ou com sujeito e subjuntivo.',
        table: {
          head: ['Estrutura', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['cal + infinitiu', 'necessidade geral', 'Cal respectar les normes.', 'É preciso respeitar as normas.'],
            ['cal que + subjuntiu', 'necessidade com sujeito', 'Cal que enviïs el correu avui.', 'É necessário que você envie o e-mail hoje.'],
          ],
        },
        examples: [
          ["Cal millorar l'atenció al client.", 'É necessário melhorar o atendimento ao cliente.'],
          ['Cal que tots nosaltres hi siguem presents.', 'É necessário que todos nós estejamos presentes.'],
        ],
      },
      {
        heading: 'Probabilidade: deure + infinitiu',
        text: 'Hipótese/estimativa no presente ou passado: «deure + infinitiu», SEM preposição no catalão padrão.',
        table: {
          head: ['Contexto', 'Exemplo', 'Sentido'],
          rows: [
            ['Presente (estimativa)', 'Deuen ser les deu de la nit.', 'Devem ser dez da noite.'],
            ['Presente (dedução)', 'En Marc no ve; deu estar malalt.', 'O Marc não vem; deve estar doente.'],
            ['Passado (hipótese)', 'Deu haver tingut un problema.', 'Deve ter tido um problema.'],
          ],
        },
        examples: [
          ['Quant costa aquest cotxe? — Deu costar molts diners.', 'Quanto custa esse carro? — Deve custar muito dinheiro.'],
          ['No respon al telèfon; deu haver sortit.', 'Não atende o telefone; deve ter saído.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «tenir que» em vez de «haver de» para obrigação («tinc que estudiar» em vez de «he d\'estudiar»).',
      'Pôr «de» depois de «deure» para probabilidade («deu de ser» é erro comum por influência do espanhol; o certo é «deu ser»).',
      'Esquecer que «cal que» exige subjuntivo («cal que facis», nunca «cal que fas»).',
      'A fala coloquial usa «deu de» com frequência, mas a norma culta (IEC) exige a forma sem preposição.',
    ],
    quiz: [
      {
        question: 'Qual é a forma culta de «Tenho que enviar a carta»?',
        options: ['Tinc que enviar la carta', "He d'enviar la carta", 'Cal de enviar la carta'],
        answer: "He d'enviar la carta",
        explanation: 'Obrigação pessoal: «haver de + infinitiu». «Tenir que» não é catalão padrão.',
      },
      {
        question: 'Como se diz «Devem ser cinco horas» na norma culta?',
        options: ['Deuen de ser les cinc', 'Deuen ser les cinc', 'Han de ser les cinc'],
        answer: 'Deuen ser les cinc',
        explanation: '«deure + infinitiu» não aceita a preposição «de» na norma culta.',
      },
    ],
  },
  {
    id: 'ca-g28',
    level: 'B1.4',
    title: 'Conectores de causa e consequência',
    emoji: '🔗',
    summary: 'Conectores causais («perquè», «com que», «ja que») e consecutivos/conclusivos («per tant», «doncs», «per això»), e o uso correto de «doncs».',
    sections: [
      {
        heading: 'Conectores causais',
        text: 'Apresentam a razão de um fato.',
        table: {
          head: ['Conector', 'Posição', 'Exemplo', 'Tradução'],
          rows: [
            ['perquè', 'meio ou fim da oração', 'No he vingut perquè estava malalt.', 'Não vim porque estava doente.'],
            ['com que', 'exclusivamente no início', 'Com que plovia, hem agafat un taxi.', 'Como chovia, pegamos um táxi.'],
            ['ja que / atès que', 'início ou meio, registro formal', 'Ja que no hi ha acord, ajornem la reunió.', 'Já que não há acordo, adiamos a reunião.'],
          ],
        },
        examples: [
          ['Com que fa fred, tancaré la finestra.', 'Como está frio, vou fechar a janela.'],
          ["Hem ajornat l'acte atès que plovia.", 'Adiamos o evento visto que chovia.'],
        ],
      },
      {
        heading: 'Conectores consecutivos e conclusivos',
        text: 'Introduzem resultado, consequência ou conclusão lógica.',
        table: {
          head: ['Conector', 'Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['per tant', 'conclusão lógica formal', 'No tenim diners; per tant, no comprarem el pis.', 'Não temos dinheiro; portanto, não compraremos o apartamento.'],
            ['doncs', 'consequência/dedução imediata', "Plou? Doncs agafa el paraigua.", 'Está chovendo? Então pegue o guarda-chuva.'],
            ['per això', 'explicação do resultado', 'No va estudiar; per això va suspendre.', 'Não estudou; por isso reprovou.'],
          ],
        },
        examples: [
          ['El servei ha estat dolent; per tant, demano la devolució.', 'O serviço foi ruim; portanto, peço o reembolso.'],
          ['Vols millorar el teu nivell? Doncs has de practicar diàriament.', 'Quer melhorar seu nível? Então tem que praticar todo dia.'],
        ],
      },
      {
        heading: 'A regra de ouro sobre «doncs»',
        text: 'No catalão padrão, «doncs» é SEMPRE consecutivo/conclusivo («então», «portanto»). NUNCA introduz causa («porque»).',
        examples: [
          ['Errado: No vinc doncs estic cansat. — Certo: No vinc perquè estic cansat.', 'Não venho porque estou cansado.'],
          ['Certo: Estàs cansat? Doncs descansa!', 'Você está cansado? Então descanse!'],
        ],
      },
    ],
    pitfalls: [
      'Usar «doncs» como causa («no vinc doncs estic cansat» é erro grave; use «perquè» ou «ja que»).',
      'Começar oração causal com «perquè» em vez de «com que» quando a causa vem primeiro.',
      'Escrever «per tant» junto («pertant»): são duas palavras.',
      'A fala informal de algumas regiões usa «doncs» como causa por contaminação, mas o IEC não aceita isso em registro normativo.',
    ],
    quiz: [
      {
        question: 'Qual conector causal abre «___ fa mal temps, ens quedarem a casa»?',
        options: ['Perquè', 'Com que', 'Doncs'],
        answer: 'Com que',
        explanation: '«com que» é o conector causal para abrir a oração.',
      },
      {
        question: 'Qual frase usa «doncs» corretamente?',
        options: ['No he anat a la festa doncs tenia molta feina', 'Has acabat la feina? Doncs ja pots marxar', "M'agrada el català doncs és molt bonic"],
        answer: 'Has acabat la feina? Doncs ja pots marxar',
        explanation: '«doncs» expressa consequência/dedução, nunca causa.',
      },
    ],
  },
];
