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
        text: 'O catalão tem 7 sons vocálicos tônicos (a, e aberto, e fechado, i, o aberto, o fechado, u). No catalão oriental (a fala padrão de Barcelona e das Baleares), as vogais “a” e “e” átonas (sem acento tônico) viram uma “vogal neutra” — um som entre o A e o E, parecido com o “a” final de “mesa” no português. As vogais “o” e “u” átonas geralmente soam “u”.',
        examples: [
          ['casa', 'casa (o “a” final soa como vogal neutra)'],
          ['pare', 'pai (o “e” final soa como vogal neutra)'],
          ['mare', 'mãe (o “e” final soa como vogal neutra)'],
          ['poma', 'maçã (o “a” final soa como vogal neutra; o “o” inicial é tônico, então fica aberto, não reduz)'],
        ],
      },
      {
        heading: 'Símbolos gráficos e sons únicos',
        text: 'O catalão usa letras e combinações exclusivas que o diferenciam de outras línguas românicas.',
        table: {
          head: ['Grafia', 'Nome', 'Como soa'],
          rows: [
            ['l·l', 'ela geminada', 'l duplo e prolongado, com uma pequena pausa antes (ex.: “col·legi”)'],
            ['ny', 'ena i grega', 'igual ao “nh” do português (ex.: “Catalunya”)'],
            ['ç', 'c trencada', 'igual ao “ç” do português, um “s” surdo (ex.: “Barça”)'],
            ['ix', '—', 'som de “x”/“ch” do português depois de vogal (ex.: “caixa”)'],
            ['tg / tj', '—', 'parecido com o “dj” de “dia” no português do Brasil (ex.: “platja”)'],
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
        text: 'Quando o artigo definido masculino “el” ou feminino “la” vem antes de palavra que começa com vogal ou h mudo, a vogal do artigo some e vira apóstrofo (“l\'”). É para não ter pausa entre duas vogais.',
        examples: [
          ["l'home", 'o homem (el + home)'],
          ["l'aigua", 'a água (la + aigua)'],
          ["l'estació", 'a estação (la + estació)'],
          ["l'amiga", 'a amiga (la + amiga)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o “l·l” (ponto geminado) com “ll” junto: “ll” sem ponto soa “lh” português (ex.: “llit” = cama), “l·l” é um l duplo prolongado.',
      'Separar o “ny” em “n” + “y”: é um dígrafo só, com som de “nh”.',
      'Esquecer de apostrofar o artigo antes de vogal ou h mudo (escrever “el home” em vez de “l\'home”).',
    ],
    quiz: [
      {
        question: 'Qual é a forma correta do artigo masculino “el” antes de “home” (homem)?',
        options: ['el home', "l'home", 'la home'],
        answer: "l'home",
        explanation: 'Antes de palavra que começa com vogal ou h mudo, “el” sofre elisão e vira “l\'”.',
      },
      {
        question: 'Como se pronuncia “ny”, como em “Catalunya”?',
        options: ['Como o “lh” do português', 'Como o “nh” do português', 'Como o “rr” do português'],
        answer: 'Como o “nh” do português',
        explanation: 'O dígrafo “ny” do catalão é igual ao “nh” do português.',
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
        text: 'A regra geral é acrescentar “-s”; palavras femininas terminadas em “-a” trocam a terminação por “-es”; palavras terminadas em vogal tônica ou sibilante acrescentam “-os”.',
        examples: [
          ['llibre → llibres', 'livro → livros (regra geral: acrescenta -s)'],
          ['casa → cases', 'casa → casas (feminino em -a muda para -es)'],
          ['porta → portes', 'porta → portas (feminino em -a muda para -es)'],
          ['autobús → autobusos', 'ônibus → ônibus (terminada em vogal tônica/sibilante: acrescenta -os)'],
        ],
      },
      {
        heading: 'Preposições e contrações',
        text: 'As preposições “a”, “de” e “per” se contraem com o artigo masculino “el”/“els”. Se o artigo estiver apostrofado (“l\'”), a contração NÃO acontece.',
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
          ["De l'home.", 'Do homem (sem contração “del”, porque o artigo está apostrofado: de + l\'home).'],
        ],
      },
    ],
    pitfalls: [
      'Formar o plural feminino em -a só com -s (escrever “casas” em vez de “cases”).',
      'Tentar contrair “de” com um artigo apostrofado formando “del” (o certo é “de l\'aigua”, nunca “del aigua”).',
      'Confundir a preposição “a” com o artigo: o artigo feminino singular é “la”.',
    ],
    quiz: [
      {
        question: 'Qual é o plural correto de “taula” (mesa)?',
        options: ['taulas', 'taules', 'taulos'],
        answer: 'taules',
        explanation: 'Substantivos femininos terminados em “-a” trocam a terminação por “-es” no plural.',
      },
      {
        question: 'Como fica “de” + “el” em “El cotxe ___ professor”?',
        options: ['do', 'del', "de l'"],
        answer: 'del',
        explanation: 'A preposição “de” com o artigo masculino “el” forma a contração “del”.',
      },
    ],
  },
  {
    id: 'ca-g3',
    level: 'A1.1',
    title: 'Os verbos ésser/ser e estar',
    emoji: '👥',
    summary: 'Como o português, o catalão tem dois verbos para existência e estado: “ésser”/“ser” e “estar”. A conjugação no presente e quando usar cada um.',
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
        text: 'A distinção lembra a do português: identidade, nacionalidade, profissão e características permanentes usam “ésser/ser”; localização temporária e estados físicos/emocionais usam “estar”.',
        examples: [
          ['La Maria és alta i simpàtica.', 'A Maria é alta e simpática. (identidade/característica: ser)'],
          ['Aquest llibre és del Joan.', 'Este livro é do Joan. (origem/posse: ser)'],
          ['El cotxe està al garatge.', 'O carro está na garagem. (localização temporária: estar)'],
          ['Avui estic molt content.', 'Hoje estou muito contente. (estado temporário: estar)'],
        ],
      },
    ],
    pitfalls: [
      'Usar as formas do espanhol “soy”/“estoy” — em catalão é “soc” e “estic”.',
      'Esquecer o acento na 3ª pessoa do plural de ser: “són” (eles são).',
      'Confundir “soc” (eu sou) com a palavra espanhola “sois” (vocês são).',
    ],
    quiz: [
      {
        question: 'Como se diz “Eu sou brasileiro” em catalão?',
        options: ['Jo estic brasiler', 'Jo soc brasiler', 'Jo soy brasiler'],
        answer: 'Jo soc brasiler',
        explanation: 'Nacionalidade e origem usam “ésser/ser”: 1ª pessoa do singular “soc”.',
      },
      {
        question: 'Qual é a forma de “estar” para “nosaltres” (nós) no presente?',
        options: ['som', 'estem', 'estan'],
        answer: 'estem',
        explanation: '“Nosaltres estem” é a 1ª pessoa do plural do presente de “estar”.',
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
        text: 'Para o tratamento formal (“o senhor”, “a senhora”), usa-se “vostè” no singular e “vostès” no plural — os dois conjugam o verbo na 3ª pessoa.',
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
        text: 'No catalão padrão, é obrigatório pôr o artigo definido antes do possessivo: “el meu llibre”, “la meva casa” — nunca só “meu llibre”.',
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
        text: 'O artigo só some antes do possessivo em vocativo, em parentesco em fórmula fixa (“pare meu!”) ou na expressão de lugar “a casa meva/teva/seva” (em minha/tua/sua casa) — diferente de “la meva casa” (minha casa, o prédio), que mantém o artigo.',
        examples: [
          ['Vine a casa meva.', 'Vem à minha casa.'],
          ['Mare meva!', 'Minha nossa!'],
        ],
      },
    ],
    pitfalls: [
      'Não usar o artigo antes do possessivo (“meu pare” em vez de “el meu pare”); a omissão só vale em vocativo ou expressão fixa (“pare meu!”, “a casa meva”).',
      'Confundir “meva/teva/seva” (feminino) com as formas espanholas “mi/tu/su”.',
      'Conjugar na 2ª pessoa ao falar com “vostè”: o certo é a 3ª pessoa.',
    ],
    quiz: [
      {
        question: 'Como se diz “a minha amiga” em catalão correto?',
        options: ['mi amiga', 'meva amiga', 'la meva amiga'],
        answer: 'la meva amiga',
        explanation: 'É obrigatório o artigo definido (“la”) antes do possessivo (“meva”).',
      },
      {
        question: 'Qual pronome é o tratamento formal no singular?',
        options: ['vostè', 'tu', 'vosaltres'],
        answer: 'vostè',
        explanation: '“Vostè” é o pronome formal singular, e concorda com o verbo na 3ª pessoa do singular.',
      },
    ],
  },
  {
    id: 'ca-g5',
    level: 'A1.2',
    title: 'Presente do indicativo: verbos regulares',
    emoji: '⏱️',
    summary: 'As três conjugações regulares do presente (-ar, -re/-er, -ir) e o grupo especial dos verbos “incoativos” em -ir, que ganham um “-eix-” na raiz.',
    sections: [
      {
        heading: '1ª e 2ª conjugações (-ar, -re/-er)',
        text: 'A 1ª conjugação reúne os verbos em “-ar” (como “parlar”, falar); a 2ª, os verbos em “-re” ou “-er” (como “perdre”, perder).',
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
        text: 'A 3ª conjugação (-ir) tem dois tipos: os puros (como “dormir”), com a terminação direta, e os incoativos (como “servir”, “llegir” = ler), que ganham “-eix-” na raiz no singular e na 3ª pessoa do plural.',
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
      'Esquecer o “-o” da 1ª pessoa do singular no dialeto central (escrever “parl” em vez de “parlo” — noutros dialetos, como o valenciano, “parl” é a forma normal).',
      'Não pôr o “-eix-” nos verbos em -ir que pedem essa forma (dizer “serv” em vez de “serveixo”).',
      'Pôr o “-eix-” em “nosaltres”/“vosaltres”, que não levam: são “servim” e “serviu”.',
      'Confundir “voler”/“poder” com as formas espanholas “quiero”/“puedo”.',
    ],
    quiz: [
      {
        question: 'Qual é a forma de “jo” do verbo “parlar”?',
        options: ['jo parla', 'jo parlo', 'jo parles'],
        answer: 'jo parlo',
        explanation: 'A 1ª pessoa do singular dos verbos em “-ar” termina em “-o” no presente.',
      },
      {
        question: 'Como se conjuga “llegir” (ler) para “jo”?',
        options: ['jo llego', 'jo llegim', 'jo llegeixo'],
        answer: 'jo llegeixo',
        explanation: 'Verbo incoativo em -ir: ganha “-eix-” na 1ª pessoa do singular.',
      },
      {
        question: 'Qual é a forma de “jo” do verbo “voler” (querer)?',
        options: ['jo quiero', 'jo vull', 'jo vol'],
        answer: 'jo vull',
        explanation: '“Voler” é irregular: a 1ª pessoa do singular é “vull”.',
      },
    ],
  },
  {
    id: 'ca-g6',
    level: 'A1.2',
    title: 'Demonstrativos e expressões de lugar',
    emoji: '📍',
    summary: 'Os demonstrativos “aquest”/“aquell” (este/aquele) e as principais preposições e advérbios de lugar.',
    sections: [
      {
        heading: 'Demonstrativos: aquest / aquell',
        text: 'O catalão padrão moderno usa dois graus de distância: “aquest” para perto (este/esta/esse/essa) e “aquell” para longe (aquele/aquela) — o grau intermediário do catalão antigo (aqueix) só sobrevive, sobretudo, no valenciano.',
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
        text: 'As locuções de lugar levam “de” antes de um substantivo (que costuma contrair com o artigo: “del”, “dels”).',
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
      'Tentar usar três graus como em português (este, esse, aquele): o catalão padrão moderno usa só dois (“aquest”, “aquell”).',
      'Esquecer o “de” nas locuções de lugar antes de substantivo (dizer “a prop el parc” em vez de “a prop del parc”).',
      'Escrever o plural masculino de “aquest” como o espanhol “estos”: em catalão é “aquests”.',
    ],
    quiz: [
      {
        question: 'Como se diz “esta mesa” em catalão?',
        options: ['esta taula', 'aquesta taula', 'aquella taula'],
        answer: 'aquesta taula',
        explanation: '“Aquesta” é o demonstrativo feminino singular para o que está perto.',
      },
      {
        question: 'Qual é a tradução de “perto do restaurante”?',
        options: ['a prop del restaurant', 'a prop el restaurant', 'lluny del restaurant'],
        answer: 'a prop del restaurant',
        explanation: '“A prop de” exige “de”, que contrai com o artigo “el”: “del”.',
      },
    ],
  },
  {
    id: 'ca-g7',
    level: 'A2.1',
    title: 'Passado perifrástico (passat perifràstic)',
    emoji: '📜',
    summary: 'No catalão falado e escrito de hoje, o passado simples mais comum não é uma forma verbal só: é uma perífrase com o verbo “anar” conjugado + o infinitivo do verbo principal.',
    sections: [
      {
        heading: 'Estrutura e funcionamento',
        text: 'O passado perifrástico equivale ao pretérito perfeito do português (“eu comi”, “ele falou”): o auxiliar “anar” numa forma especial de passado + o verbo principal no infinitivo. Apesar de usar “anar” (ir), a estrutura NÃO é futuro — é uma ação concluída no passado.',
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
      'Confundir o passado perifrástico com futuro imediato (“vaig menjar” é “comi”, NUNCA “vou comer”).',
      'Achar que “vaig anar” é redundante: é correto, e significa “fui, fui a algum lugar”.',
      'Trocar as formas curtas “vam”/“vau” pelas variantes erradas “vem”/“veu” (que não existem em catalão padrão).',
    ],
    quiz: [
      {
        question: 'O que significa “Ell va menjar una paella”?',
        options: ['Ele vai comer uma paella', 'Ele comeu uma paella', 'Ele comeria uma paella'],
        answer: 'Ele comeu uma paella',
        explanation: '“va + infinitivo” é o passado perifrástico, equivalente ao pretérito perfeito.',
      },
      {
        question: 'Qual é a forma de “jo” do passado perifrástico com “comprar”?',
        options: ['jo voy comprar', 'jo vaig comprar', 'jo iré comprar'],
        answer: 'jo vaig comprar',
        explanation: 'A 1ª pessoa do singular do auxiliar é “vaig” + o infinitivo “comprar”.',
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
      'Esquecer de elidir o pronome antes de verbo com vogal (escrever “et escolto” em vez de “t\'escolto”).',
      'Usar a forma espanhola “le” para complemento indireto em vez do catalão “li”.',
      'Pôr o pronome antes do verbo no imperativo afirmativo ou no infinitivo — o certo é depois.',
    ],
    quiz: [
      {
        question: 'Como se escreve “Eu te escuto” com o verbo “escoltar”?',
        options: ['et escolto', "t'escolto", 'te escolto'],
        answer: "t'escolto",
        explanation: '“et” elide e vira “t\'” antes de verbo com vogal.',
      },
      {
        question: 'Qual pronome substitui “a la Maria” em “Dono un regal a la Maria”?',
        options: ['el', 'la', 'li'],
        answer: 'li',
        explanation: 'O complemento indireto de 3ª pessoa do singular é substituído por “li”.',
      },
    ],
  },
  {
    id: 'ca-g9',
    level: 'A2.1',
    title: 'Os pronomes “hi” e “en”',
    emoji: '🧩',
    summary: 'Os pronomes “hi” e “en” são uma marca do catalão: substituem lugares, quantidades e complementos com preposição, evitando repetição.',
    sections: [
      {
        heading: 'O pronome “hi”',
        text: '“hi” substitui complemento de lugar com “a”, “en”, “per”, “sobre” (destino ou permanência). É parte fixa de “hi ha” (há, existe).',
        examples: [
          ['Vas a Barcelona? — Sí, hi vaig.', 'Você vai a Barcelona? — Sim, vou lá. (hi = a Barcelona)'],
          ['Ets a casa? — Sí, hi soc.', 'Você está em casa? — Sim, estou lá. (hi = a casa)'],
          ['Hi ha molta gent.', 'Há muita gente.'],
        ],
      },
      {
        heading: 'O pronome “en”',
        text: '“en” substitui complemento com a preposição “de” (origem, posse, causa) e complemento direto indeterminado com quantidade.',
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
      'Omitir “hi” ao responder sobre lugar (responder só “Sí, vaig” em vez de “Sí, hi vaig”).',
      'Omitir “en” ao indicar quantidade (dizer “Tinc dos” em vez de “En tinc dos”).',
      'Usar “hi” para origem com “de”: origem com “de” pede sempre “en”.',
    ],
    quiz: [
      {
        question: '“Vols poma?” — “Sí, ___ vull una.”: qual pronome?',
        options: ['hi', 'en', 'la'],
        answer: 'en',
        explanation: 'Quantidade com objeto indeterminado (“uma maçã”) pede “en”.',
      },
      {
        question: '“Vas a la platja?”: qual é a resposta afirmativa correta?',
        options: ['Sí, hi vaig', 'Sí, en vaig', 'Sí, vaig la platja'],
        answer: 'Sí, hi vaig',
        explanation: '“hi” substitui o complemento de lugar com “a” (a la platja).',
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
        text: 'Descreve estados, cenários ou hábitos passados (“falava”, “comia”). Os verbos em “-ar” usam “-av-”; os em “-re/-er” e “-ir” usam “-i-”. Atenção ao acento obrigatório em “nosaltres”/“vosaltres”.',
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
        text: 'Presente de “haver” + particípio do verbo principal. Usa-se para ações passadas num período ainda não concluído (hoje, esta semana, este ano) ou com relevância no presente.',
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
      'Esquecer o acento em “nosaltres”/“vosaltres” do imperfeito (escrever “parlavem” em vez de “parlàvem”).',
      'Confundir o passat perifràstic (“vaig parlar”, passado pontual) com o perfet compost (“he parlat”, período ainda não concluído como “avui”).',
      'Errar particípios irregulares comuns: “fet” (fer), “vist” (veure), “escrit” (escriure).',
    ],
    quiz: [
      {
        question: 'Qual é a forma do imperfeito de “parlar” para “nosaltres”?',
        options: ['parlavem', 'parlàvem', 'parlíem'],
        answer: 'parlàvem',
        explanation: '1ª pessoa do plural do imperfeito de verbos em “-ar”: acento grave, “parlàvem”.',
      },
      {
        question: 'Como se diz “Hoje eu trabalhei muito”?',
        options: ['Ahir vaig treballar molt', 'Avui he treballat molt', 'Avui treballava molt'],
        answer: 'Avui he treballat molt',
        explanation: 'Período que ainda inclui o presente (“avui”): perfeito composto, “he treballat”.',
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
        text: 'Terminações -é/-às/-à/-em/-eu/-an direto no infinitivo (verbos em -re perdem o “e” final antes).',
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
      'Esquecer as raízes irregulares com “-dr-”: “tenir” → “tindré”, “venir” → “vindré”, “voler” → “voldré”.',
      'Usar o presente pra pedidos corteses (“vull un cafè” soa direto demais) em vez do condicional (“voldria”, “m\'agradaria”).',
    ],
    quiz: [
      {
        question: 'Qual é o futuro de “tenir” (ter) para “jo”?',
        options: ['teniré', 'tindré', 'tendré'],
        answer: 'tindré',
        explanation: '“Tenir” tem raiz irregular “tindr-” no futuro: “jo tindré”.',
      },
      {
        question: 'Como pedir algo com cortesia, com “m\'agradar” (gostar)?',
        options: ["M'agrada un cafè", "M'agradaria un cafè", "M'agradarà un cafè"],
        answer: "M'agradaria un cafè",
        explanation: '“M\'agradaria” é o condicional, usado para pedir de forma educada.',
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
        text: 'Superioridade: “més” + adjetivo + “que”. Inferioridade: “menys” + adjetivo + “que”. Igualdade: “tan” + adjetivo + “com” (NUNCA “tan...que”).',
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
        text: 'Alguns adjetivos têm forma comparativa própria, sem “més”.',
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
        text: 'O absoluto usa “molt” + adjetivo ou o sufixo “-íssim/-íssima”. O relativo destaca um elemento dentro de um grupo, com “de”.',
        examples: [
          ['Un llibre molt interessant / interessantíssim.', 'Um livro muito interessante/interessantíssimo.'],
          ['És el noi més alt de la classe.', 'É o rapaz mais alto da turma. (superlativo relativo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “que” em vez de “com” na comparação de igualdade (“tan gran que” em vez de “tan gran com”).',
      'Usar “més bo” onde o padrão é “millor”.',
      'Esquecer a concordância do sufixo superlativo: “-íssim/-íssima/-íssims/-íssimes”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Ela é tão simpática quanto a irmã”?',
        options: ['Ella és tan simpàtica que la seva germana', 'Ella és tan simpàtica com la seva germana', 'Ella és més simpàtica com la seva germana'],
        answer: 'Ella és tan simpàtica com la seva germana',
        explanation: 'Igualdade em catalão: “tan + adjetivo + com”.',
      },
      {
        question: 'Qual é o comparativo irregular de “bon” (bom)?',
        options: ['més bo', 'millor', 'pitjor'],
        answer: 'millor',
        explanation: 'O comparativo de superioridade irregular de “bon” é “millor”.',
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
        text: 'No catalão central, a 1ª conjugação (-ar) usa a vogal “-i-” em todas as pessoas; a 2ª (-re/-er) e a 3ª (-ir) usam “-i-”/“-in” no singular e na 3ª do plural, mas “nosaltres”/“vosaltres” coincidem com o indicativo. Verbos incoativos levam “-eix-”.',
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
        text: 'Verbos e estruturas de desejo, dúvida, necessidade e sentimento seguidos de “que” pedem subjuntivo.',
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
      'Usar o indicativo depois de verbo de desejo (“Vull que ve” em vez de “Vull que vingui”).',
      'Confundir a terminação catalã “-i” (“parli”, “parlis”) com a espanhola “-e” (“hable”, “hables”).',
      'Esquecer o “-eix-” no subjuntivo de verbos incoativos em -ir (“servi” em vez de “serveixi”).',
    ],
    quiz: [
      {
        question: '“Vull que tu ___ (parlar) amb ell”: qual é a forma certa?',
        options: ['parles', 'parlis', 'parle'],
        answer: 'parlis',
        explanation: '2ª pessoa do singular do subjuntivo de verbos em “-ar” termina em “-is”.',
      },
      {
        question: 'Como se diz “Não acho que seja verdade”, com o verbo “ser”?',
        options: ['No crec que és veritat', 'No crec que sigui veritat', 'No crec que serà veritat'],
        answer: 'No crec que sigui veritat',
        explanation: '“No creure que” pede subjuntivo; a 3ª pessoa de “ser” no subjuntivo é “sigui”.',
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
        text: '“tu” geralmente coincide com a 3ª pessoa do indicativo. As formas formais (“vostè”, “vostès”) e “nosaltres” usam o subjuntivo.',
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
        text: 'Para proibir: “no” + presente do subjuntivo, em todas as pessoas.',
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
          ['Digues-me la veritat! (afirmativo)', 'Diga-me a verdade! (dir → imperativo irregular “digues”; termina em consoante, por isso hífen, não apóstrofo)'],
          ['No em diguis mentides! (negativo)', 'Não me digas mentiras!'],
        ],
      },
    ],
    pitfalls: [
      'Usar a forma afirmativa na negação (“no parla!” em vez de “no parlis!”).',
      'Pôr o pronome depois do verbo no imperativo negativo (“no compra\'m” em vez de “no em compris”).',
      'Esquecer que “dir” tem imperativo irregular “digues” (não “diga”, que é espanhol).',
    ],
    quiz: [
      {
        question: 'Qual é o imperativo negativo de “parlar” para “tu”?',
        options: ['no parla', 'no parlis', 'no parles'],
        answer: 'no parlis',
        explanation: 'O imperativo negativo usa o presente do subjuntivo: “no parlis”.',
      },
      {
        question: 'Como se diz “Escute-me!” (tu) no imperativo afirmativo?',
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
    summary: 'O relativo invariável “que”, “qui” (pessoas com preposição), “on” (lugar) e as formas compostas “el qual/la qual”.',
    sections: [
      {
        heading: 'O relativo invariável “que”',
        text: 'O relativo mais usado. Sem acento, invariável em gênero e número; funciona como sujeito ou objeto direto.',
        examples: [
          ['El llibre que llegeixo és molt bo.', 'O livro que estou lendo é muito bom.'],
          ['La noia que ve per allà és la meva germana.', 'A garota que vem por ali é minha irmã.'],
          ['Els cotxes que fan soroll són vells.', 'Os carros que fazem barulho são velhos.'],
        ],
      },
      {
        heading: 'Os relativos “qui” e “on”',
        text: '“qui” para pessoas depois de preposição simples (a, de, amb, en, per). “on” para antecedente de lugar.',
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
        heading: 'O composto “el qual/la qual/els quals/les quals”',
        text: 'Variável, concorda com o antecedente. Obrigatório depois de preposição composta, ou para evitar ambiguidade sobre a qual antecedente a frase se refere.',
        examples: [
          ['La taula a sobre de la qual hi ha el llibre.', 'A mesa em cima da qual está o livro.'],
          ['El pare de la Maria, el qual viu a Girona.', 'O pai da Maria, o qual mora em Girona.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “que” logo depois de preposição para pessoa (“el noi de que parlo” em vez de “el noi de qui parlo”).',
      'Pôr acento em “que” relativo: nunca leva.',
      'Esquecer de concordar “el qual/la qual/els quals/les quals” com o antecedente.',
    ],
    quiz: [
      {
        question: '“La noia amb ___ vaig parlar és simpàtica”: qual pronome?',
        options: ['que', 'qui', 'on'],
        answer: 'qui',
        explanation: 'Depois de preposição (“amb”) referindo pessoa, usa-se “qui”.',
      },
      {
        question: 'Como se diz “A cidade onde nasci”?',
        options: ['La ciutat que vaig néixer', 'La ciutat on vaig néixer', 'La ciutat de qui vaig néixer'],
        answer: 'La ciutat on vaig néixer',
        explanation: 'Antecedente de lugar: relativo “on”.',
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
        text: 'Terminações “-és” (1ª e 2ª conjugação) e “-ís” (3ª conjugação). Atenção ao acento em “nosaltres”/“vosaltres”.',
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
      'Esquecer o acento em “nosaltres”/“vosaltres” (“parléssim”, “parléssiu”).',
      'Confundir as formas catalãs em “-és” com o espanhol “-ara/-iera” (“hablara”, “comiera”).',
      'Confundir o imperfeito do subjuntivo de “ser” (“fos”) com o de “fer” (“fes”).',
    ],
    quiz: [
      {
        question: 'Qual é o imperfeito do subjuntivo de “ser” para “jo”?',
        options: ['fos', 'faria', 'sigui'],
        answer: 'fos',
        explanation: 'A forma irregular de “ésser/ser” no imperfeito do subjuntivo, 1ª pessoa, é “fos”.',
      },
      {
        question: 'Qual é “nosaltres” de “tenir” no imperfeito do subjuntivo?',
        options: ['tinguéssim', 'tinguem', 'teníem'],
        answer: 'tinguéssim',
        explanation: '“Tenir” forma “tinguéssim” na 1ª pessoa do plural do imperfeito do subjuntivo.',
      },
    ],
  },
  {
    id: 'ca-g17',
    level: 'B1.2',
    title: 'Condicionais de 2º tipo (hipóteses no presente)',
    emoji: '🔀',
    summary: '“si” + imperfeito do subjuntivo na oração condicional, com a principal no condicional simples — para hipóteses irrealizáveis no presente.',
    sections: [
      {
        heading: 'Estrutura',
        text: 'Oração com “si” (imperfeito do subjuntivo) + oração principal (condicional simples).',
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
      'Usar o condicional logo depois de “si” (“Si tindria diners” é erro grave; o certo é “Si tingués diners”).',
      'Usar o presente na oração principal quando a condição está no imperfeito do subjuntivo.',
      'Trocar a ordem das orações sem ajustar a pontuação (invertida, não precisa de vírgula).',
    ],
    quiz: [
      {
        question: '“Si jo ___ (tenir) temps, aniria al cinema”: qual é a forma certa?',
        options: ['tinc', 'tindria', 'tingués'],
        answer: 'tingués',
        explanation: 'Depois de “si” em hipótese no presente, exige-se o imperfeito do subjuntivo.',
      },
      {
        question: '“Si tu estiguessis cansat, ___ (dormir) més”: complete.',
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
        text: 'A ordem padrão é complemento indireto (CI) antes do direto (CD), com exceção do reflexivo “se”, que vem antes de qualquer outro.',
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
        text: 'Diante de verbo com consoante inicial. Note que “li” + CD de 3ª pessoa vira “hi” — nunca “li” somado direto ao outro pronome.',
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
      'Inverter a ordem, pondo o CD antes do CI (“el em dóna” em vez de “me\'l dóna”).',
      'Errar a combinação “li + el”, que vira “l\'hi” (não “li\'l”).',
      'Esquecer a apostrofação quando o segundo pronome é “el” ou começa por vogal (“me\'l”, “te\'l”).',
    ],
    quiz: [
      {
        question: 'Como fica “em” (CI) + “el” (CD) antes de “donar”?',
        options: ['el em dóna', "me'l dóna", 'em el dóna'],
        answer: "me'l dóna",
        explanation: 'O indireto “em” precede o direto “el” e se junta por apóstrofo: “me\'l”.',
      },
      {
        question: 'Como substituir “la carta” (la) + “a en Marc” (li) em “Dono la carta a en Marc”?',
        options: ['li la dono', 'la hi dono', "l'hi dono"],
        answer: 'la hi dono',
        explanation: 'CD feminino “la” + CI “li” dá “la hi” (o “l\'hi” é só para o masculino “el”).',
      },
    ],
  },
  {
    id: 'ca-g19',
    level: 'B2.1',
    title: 'Voz passiva e construções impessoais',
    emoji: '🔄',
    summary: 'A passiva analítica (ésser + particípio), a passiva pronominal (“es” + verbo) e a construção impessoal, comuns em textos formais e jornalísticos.',
    sections: [
      {
        heading: 'Passiva analítica (ésser/ser + particípio)',
        text: 'Auxiliar “ésser”/“ser” no tempo certo + particípio do verbo principal. O particípio concorda em gênero e número com o sujeito paciente. O agente vem com “per” (ou “per part de”) — nunca “por”.',
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
        heading: 'Passiva pronominal e impessoalidade com “es”',
        text: 'Na fala e na escrita informal/média, prefere-se “es” + verbo (3ª pessoa) à passiva analítica. Na passiva pronominal, o verbo concorda com o objeto paciente.',
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
      'Esquecer a concordância do particípio na passiva analítica (“les lleis van ser aprovat” em vez de “aprovades”).',
      'Usar “por” (espanhol) para o agente da passiva em vez de “per”.',
      'Não pôr o verbo no plural na passiva pronominal (“es ven pisos” em vez de “es venen pisos”).',
    ],
    quiz: [
      {
        question: 'Qual é a passiva analítica correta de “As propostas serão examinadas pela comissão”?',
        options: ['Les propostes seran examinat per la comissió', 'Les propostes seran examinades per la comissió', 'Les propostes seran examinats per la comissió'],
        answer: 'Les propostes seran examinades per la comissió',
        explanation: 'O particípio concorda em feminino plural com “les propostes”: “examinades”.',
      },
      {
        question: 'Qual frase concorda certo na passiva pronominal com substantivo plural?',
        options: ['Es ven pisos al centre', 'Es venen pisos al centre', 'Es venent pisos al centre'],
        answer: 'Es venen pisos al centre',
        explanation: 'O verbo no plural (“venen”) concorda com o sujeito paciente plural (“pisos”).',
      },
    ],
  },
  {
    id: 'ca-g20',
    level: 'B2.1',
    title: 'Mais-que-perfeito do subjuntivo e condicional composto',
    emoji: '⏪',
    summary: 'A condicional de 3º tipo, para hipóteses irrealizáveis no passado: “si” + mais-que-perfeito do subjuntivo, principal no condicional composto.',
    sections: [
      {
        heading: 'Formação dos tempos compostos',
        text: 'Mais-que-perfeito do subjuntivo: imperfeito do subjuntivo de “haver” + particípio. Condicional composto: condicional simples de “haver” + particípio.',
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
        text: 'Para situações irrealizáveis ou lamentações sobre o passado. A oração com “si” pede o mais-que-perfeito do subjuntivo; a principal, o condicional composto.',
        examples: [
          ["Si hagués sabut la veritat, m'hauria quedat a casa.", 'Se eu soubesse a verdade, teria ficado em casa.'],
          ['Si haguéssim agafat el tren, hauríem arribat a temps.', 'Se tivéssemos pego o trem, teríamos chegado a tempo.'],
          ["Si haguessis estudiat més, hauries aprovat l'examen.", 'Se você tivesse estudado mais, teria passado no exame.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o condicional composto logo depois de “si” (“Si hauria sabut” é erro grave; o certo é “Si hagués sabut”).',
      'Esquecer o acento nas formas de “nosaltres”/“vosaltres” (“haguéssim/haguéssiu”, “hauríem/hauríeu”).',
      'Confundir a raiz catalã de “haver” no subjuntivo (“hagués”) com a espanhola (“hubiera”).',
    ],
    quiz: [
      {
        question: 'Como se diz “Se eu tivesse sabido a verdade, teria vindo”?',
        options: ['Si hauria sabut la veritat, hauria vingut', 'Si hagués sabut la veritat, hauria vingut', 'Si hagués sabut la veritat, hagués vingut'],
        answer: 'Si hagués sabut la veritat, hauria vingut',
        explanation: '“si” pede mais-que-perfeito do subjuntivo (“hagués sabut”); a principal, condicional composto (“hauria vingut”).',
      },
      {
        question: 'Qual é “nosaltres” de “haver” no mais-que-perfeito do subjuntivo?',
        options: ['haguéssim', 'hauríem', 'haguem'],
        answer: 'haguéssim',
        explanation: '1ª pessoa do plural de “haver” no mais-que-perfeito do subjuntivo: “haguéssim”.',
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
        text: 'Expressam causa de um fato real: “perquè” (porque), “ja que” (já que), “atès que” (visto que) e “com que” (como/visto que — obrigatoriamente no início da frase).',
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
        text: '“tot i que”/“malgrat que” (concessivo, fato real) pedem indicativo; “encara que” pode pedir subjuntivo quando é hipótese. Conectores de finalidade (“perquè”, “per tal que”, com sentido de “para que”) pedem SEMPRE subjuntivo — cuidado: “perquè” serve tanto de causa (indicativo) quanto de finalidade (subjuntivo).',
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
      'Usar indicativo depois de conector de finalidade (“perquè ho entens” em vez de “perquè ho entenguis”).',
      'Confundir “com que” (causal, início de frase) com o “com” simples.',
      'Começar frase causal com “perquè”: prefira “com que” quando a causa vem primeiro.',
    ],
    quiz: [
      {
        question: 'Que modo verbal vem depois de “per tal que”?',
        options: ['Indicatiu', 'Subjuntiu', 'Infinitiu'],
        answer: 'Subjuntiu',
        explanation: 'Conectores de finalidade (“per tal que”, “perquè” com sentido de propósito) sempre pedem subjuntivo.',
      },
      {
        question: 'Qual conector causal abre a frase “___ era tard, vam agafar un taxi”?',
        options: ['Com que', 'Perquè', 'Per tal que'],
        answer: 'Com que',
        explanation: '“Com que” é o conector causal próprio para abrir a oração.',
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
        text: 'Quando o verbo introdutório está no passado (“va dir”, “va comentar”), os tempos da oração citada mudam sistematicamente.',
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
      'Manter os advérbios do discurso direto sem ajustar (“Va dir que vindria demà” em vez de “l\'endemà”).',
      'Esquecer de mudar presente para imperfeito ao relatar no passado.',
      'Manter pronome de 1ª pessoa quando a pessoa relatada é 3ª pessoa.',
    ],
    quiz: [
      {
        question: '“Aniré a Girona demà”, dita por en Joan ontem: como fica no indireto?',
        options: ["En Joan va dir que aniria a Girona l'endemà", 'En Joan va dir que aniré a Girona demà', 'En Joan va dir que anava a Girona avui'],
        answer: "En Joan va dir que aniria a Girona l'endemà",
        explanation: 'Futuro “aniré” vira condicional “aniria”; “demà” vira “l\'endemà”.',
      },
      {
        question: 'Qual advérbio substitui “avui” no discurso indireto no passado?',
        options: ['aleshores', 'aquell dia', "l'endemà"],
        answer: 'aquell dia',
        explanation: '“Avui” (hoje) vira “aquell dia” (aquele dia) no discurso indireto.',
      },
    ],
  },
  {
    id: 'ca-g23',
    level: 'B2.2',
    title: 'Formação de palavras e o pronome neutro “ho”',
    emoji: '🧱',
    summary: 'Sufixos para formar substantivos a partir de verbos/adjetivos, e o pronome neutro “ho”, que substitui atributos e orações inteiras.',
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
        heading: 'O pronome neutro “ho”',
        text: '“ho” é invariável: substitui atributo com verbo copulativo (ser/estar/semblar) ou oração inteira/demonstrativo neutro (això/allò).',
        examples: [
          ['Ets feliç? — Sí, ho soc.', 'Você é feliz? — Sim, sou. (ho = “feliç”)'],
          ['Sabies que en Marc es casa? — No, no ho sabia.', 'Você sabia que o Marc vai casar? — Não sabia. (ho = a oração toda)'],
          ['Volen fer això? — Sí, volen fer-ho.', 'Eles querem fazer isso? — Sim, querem fazê-lo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “el” para substituir atributo/oração neutra em vez de “ho” (“Sí, el soc” em vez de “Sí, ho soc”).',
      'Confundir o sufixo nominal “-esa” (qualidade) com o adjetival “-ès” (nacionalidade).',
      'Esquecer a troca “-itzar” → “-ització” em verbos eruditos (“organitzar” → “organització”).',
    ],
    quiz: [
      {
        question: 'Qual pronome substitui “[que la reunió s\'havia cancel·lat]” em “No sabia ___”?',
        options: ['el', 'la', 'ho'],
        answer: 'ho',
        explanation: 'Oração subordinada inteira ou ideia abstrata: pronome neutro “ho”.',
      },
      {
        question: 'Qual é o substantivo abstrato de “vell” por sufixação?',
        options: ['vellesa', 'vellitat', 'vellament'],
        answer: 'vellesa',
        explanation: '“-esa” forma substantivo abstrato de qualidade a partir de adjetivo: “vellesa”.',
      },
    ],
  },
  {
    id: 'ca-g24',
    level: 'B2.2',
    title: 'Combinação avançada de pronomes fracos (hi/en + CD/CI)',
    emoji: '🧩',
    summary: 'Como “hi” e “en” se combinam com pronomes de complemento direto e indireto no mesmo verbo.',
    sections: [
      {
        heading: '“Hi” combinado com CD e CI',
        text: 'Combinando “hi” com el/la/els/les (CD) ou li (CI), há fusões próprias.',
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
        heading: '“En” combinado com outros pronomes',
        text: '“en” (origem ou quantidade) vem por último na sequência.',
        examples: [
          ["Se'n va anar d'hora.", 'Ele/ela foi embora cedo. (se + en → se\'n)'],
          ["Me'n dones un poc? — Sí, te'n dono.", 'Você me dá um pouco disso? — Sim, te dou um pouco. (me+en→me\'n; te+en→te\'n)'],
          ['Canta cançons als nens? — Sí, els en canta.', 'Canta canções para as crianças? — Sim, canta-lhes algumas. (els + en, sem elisão)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “en”/“hi” antes do pronome de pessoa (“en me dóna” em vez de “me\'n dóna”).',
      'Confundir “l\'hi” (el + hi) com o simples “li”.',
      'Esquecer o apóstrofo ao combinar “se”/“me”/“te” com “en” (“se\'n”, “me\'n”, “te\'n”).',
    ],
    quiz: [
      {
        question: 'Como fica “me” + “en” em “Você me dá um pouco disso?”?',
        options: ["Me'n dones?", 'En me dones?', 'Me en dones?'],
        answer: "Me'n dones?",
        explanation: '“me” precede “en”, unidos por apóstrofo: “me\'n”.',
      },
      {
        question: 'Como fica “Eu o levei até lá” (el = objeto, hi = lá)?',
        options: ["L'hi vaig portar", 'El hi vaig portar', 'Li vaig portar'],
        answer: "L'hi vaig portar",
        explanation: '“el” + “hi” dá a forma apostrofada “l\'hi”.',
      },
    ],
  },
  {
    id: 'ca-g25',
    level: 'B1.3',
    title: 'Preposições “per” e “per a”: causa, meio, destino e finalidade',
    emoji: '🎯',
    summary: 'Um dos pontos mais sensíveis do catalão: “per” é causa, meio, lugar de passagem ou tempo aproximado; “per a” é destinatário, finalidade e prazo.',
    sections: [
      {
        heading: 'Usos de “per”',
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
        heading: 'Usos de “per a”',
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
        text: 'A escolha entre “per” e “per a” pode mudar o sentido da frase. Um ponto sem consenso total: a gramática tradicional (Pompeu Fabra) prescreve “per” (sem “a”) antes de infinitivo quando o sujeito da ação e do infinitivo é o mesmo (“Estudio per aprendre”); mas “per a” antes de infinitivo (“Estudio per a aprendre”) é muito comum na prática atual, inclusive em registros cuidados — trate os dois como aceitos, sem apresentar um como certo e outro como errado.',
        examples: [
          ['Ho faig per tu.', 'Faço por você. (por sua causa/em seu lugar — causa)'],
          ['Ho faig per a tu.', 'Faço para você. (em seu benefício — destinatário)'],
          ['Treballa per la pau.', 'Trabalha pela paz. (causa/ideal)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir causa (“per tu” = por você/por sua causa) com destinatário (“per a tu” = para você).',
      'Usar “per” sozinho para prazo (o certo é “per a demà”, “per al mes vinent”).',
      'Confundir as contrações: “per + el = pel” (pelo), mas “per a + el = per al” (para o).',
      'A fala cotidiana do catalão central costuma reduzir “per a” para “per” antes de infinitivo/vogal, mas a norma escrita culta mantém a distinção de sentido.',
    ],
    quiz: [
      {
        question: '“L\'informe ha d\'estar a punt ___ demà”: qual preposição?',
        options: ['per a', 'per', 'per de'],
        answer: 'per a',
        explanation: 'Prazo/data limite no futuro pede “per a”.',
      },
      {
        question: 'Qual é a diferença entre “Ho faig per tu” e “Ho faig per a tu”?',
        options: [
          '“per tu” indica causa/motivo; “per a tu” indica destinatário/benefício.',
          '“per tu” indica futuro; “per a tu” indica passado.',
          'Não há diferença, são intercambiáveis.',
        ],
        answer: '“per tu” indica causa/motivo; “per a tu” indica destinatário/benefício.',
        explanation: '“per” expressa causa/motivo; “per a” assinala o destinatário ou beneficiário.',
      },
    ],
  },
  {
    id: 'ca-g26',
    level: 'B1.3',
    title: 'Indefinidos, “no... pas” e “tampoc”',
    emoji: '🔍',
    summary: 'Pronomes e advérbios indefinidos (algú, ningú, res, cap, tothom) e os recursos catalães de negação enfática (“no... pas”) e concordância negativa (“tampoc”).',
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
        heading: 'Valor positivo de “cap”, “res” e “ningú”',
        text: 'Em pergunta, dúvida ou condição, “cap”, “res” e “ningú” perdem a carga negativa e viram indefinidos afirmativos (“algum”, “algo”, “alguém”).',
        examples: [
          ['Tens cap pregunta?', 'Você tem alguma pergunta? (não “nenhuma”)'],
          ['Has vist ningú al passadís?', 'Viu alguém no corredor?'],
          ["Si necessites res, avisa'm.", 'Se precisar de alguma coisa, me avise.'],
        ],
      },
      {
        heading: 'A negação enfática “no... pas” e o advérbio “tampoc”',
        text: 'Estruturas catalãs próprias para matizar ou reforçar a negação.',
        table: {
          head: ['Estrutura', 'Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['no... pas', 'reforça a negação, contradiz expectativa do ouvinte', 'No és pas tan difícil com sembla.', 'Não é (de jeito nenhum) tão difícil quanto parece.'],
            ['tampoc (antes do verbo)', 'concordância negativa sem “no”', 'Jo tampoc ho sé.', 'Eu também não sei.'],
            ['tampoc (depois do verbo)', 'concordância negativa, precisa de “no” antes', 'No ho sé jo tampoc.', 'Não sei eu tampouco.'],
          ],
        },
        examples: [
          ["No vull pas ofendre't.", 'Não quero (de jeito nenhum) te ofender.'],
          ['Ell no ve i jo tampoc.', 'Ele não vem e eu também não.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o verbo no plural com “tothom” (“tothom saben” em vez de “tothom sap”).',
      'Usar “nada”/“nadie” (espanhol) em vez de “res”/“ningú”.',
      'Confundir o determinante “cap” (invariável: “cap idea”, “cap llibre”) com a preposição de direção “cap a”.',
      'Achar que “no... pas” é obrigatório em toda negativa: é um recurso expressivo, não regra geral.',
    ],
    quiz: [
      {
        question: 'Como fica “Todo mundo concorda” com “tothom”?',
        options: ["Tothom hi està d'acord", 'Tothom hi estan d\'acord', "Tots tothom hi estan d'acord"],
        answer: "Tothom hi està d'acord",
        explanation: '“tothom” sempre pede o verbo na 3ª pessoa do singular.',
      },
      {
        question: 'Em “Tens cap dubte?”, o que “cap” quer dizer?',
        options: ['Alguma', 'Nenhuma', 'Muita'],
        answer: 'Alguma',
        explanation: 'Em pergunta/condição, “cap” tem valor afirmativo de “algum(a)”.',
      },
    ],
  },
  {
    id: 'ca-g27',
    level: 'B1.4',
    title: 'Perífrases de obrigação, necessidade e probabilidade',
    emoji: '📌',
    summary: 'Obrigação pessoal com “haver de”, necessidade com o impessoal “caldre”, e dedução lógica com “deure”.',
    sections: [
      {
        heading: 'Obrigação pessoal: haver de + infinitiu',
        text: 'Obrigação/necessidade atribuída a um sujeito. No catalão padrão (IEC), evite “tenir que”.',
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
        text: '“caldre” é impessoal (3ª pessoa singular “cal”/“calia”), com duas estruturas: sem sujeito específico, ou com sujeito e subjuntivo.',
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
        text: 'Hipótese/estimativa no presente ou passado: “deure + infinitiu”, SEM preposição no catalão padrão.',
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
      'Usar “tenir que” em vez de “haver de” para obrigação (“tinc que estudiar” em vez de “he d\'estudiar”).',
      'Pôr “de” depois de “deure” para probabilidade (“deu de ser” é erro comum por influência do espanhol; o certo é “deu ser”).',
      'Esquecer que “cal que” exige subjuntivo (“cal que facis”, nunca “cal que fas”).',
      'A fala coloquial usa “deu de” com frequência, mas a norma culta (IEC) exige a forma sem preposição.',
    ],
    quiz: [
      {
        question: 'Qual é a forma culta de “Tenho que enviar a carta”?',
        options: ['Tinc que enviar la carta', "He d'enviar la carta", 'Cal de enviar la carta'],
        answer: "He d'enviar la carta",
        explanation: 'Obrigação pessoal: “haver de + infinitiu”. “Tenir que” não é catalão padrão.',
      },
      {
        question: 'Como se diz “Devem ser cinco horas” na norma culta?',
        options: ['Deuen de ser les cinc', 'Deuen ser les cinc', 'Han de ser les cinc'],
        answer: 'Deuen ser les cinc',
        explanation: '“deure + infinitiu” não aceita a preposição “de” na norma culta.',
      },
    ],
  },
  {
    id: 'ca-g28',
    level: 'B1.4',
    title: 'Conectores de causa e consequência',
    emoji: '🔗',
    summary: 'Conectores causais (“perquè”, “com que”, “ja que”) e consecutivos/conclusivos (“per tant”, “doncs”, “per això”), e o uso correto de “doncs”.',
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
        heading: 'A regra de ouro sobre “doncs”',
        text: 'No catalão padrão, “doncs” é SEMPRE consecutivo/conclusivo (“então”, “portanto”). NUNCA introduz causa (“porque”).',
        examples: [
          ['Errado: No vinc doncs estic cansat. — Certo: No vinc perquè estic cansat.', 'Não venho porque estou cansado.'],
          ['Certo: Estàs cansat? Doncs descansa!', 'Você está cansado? Então descanse!'],
        ],
      },
    ],
    pitfalls: [
      'Usar “doncs” como causa (“no vinc doncs estic cansat” é erro grave; use “perquè” ou “ja que”).',
      'Começar oração causal com “perquè” em vez de “com que” quando a causa vem primeiro.',
      'Escrever “per tant” junto (“pertant”): são duas palavras.',
      'A fala informal de algumas regiões usa “doncs” como causa por contaminação, mas o IEC não aceita isso em registro normativo.',
    ],
    quiz: [
      {
        question: 'Qual conector causal abre “___ fa mal temps, ens quedarem a casa”?',
        options: ['Perquè', 'Com que', 'Doncs'],
        answer: 'Com que',
        explanation: '“com que” é o conector causal para abrir a oração.',
      },
      {
        question: 'Qual frase usa “doncs” corretamente?',
        options: ['No he anat a la festa doncs tenia molta feina', 'Has acabat la feina? Doncs ja pots marxar', "M'agrada el català doncs és molt bonic"],
        answer: 'Has acabat la feina? Doncs ja pots marxar',
        explanation: '“doncs” expressa consequência/dedução, nunca causa.',
      },
    ],
  },
  {
    id: 'ca-g29',
    level: 'B2.3',
    title: 'Perífrases aspectuais avançadas',
    emoji: '⏳',
    summary: '“anar + gerundi” (progressão gradual), “portar + tempo + gerundi” (duração), “deixar de”/“tornar a” + infinitivo (interrupção e repetição).',
    sections: [
      {
        heading: 'Progressão gradual: anar + gerundi',
        text: 'Indica um processo gradual e contínuo ao longo do tempo.',
        table: {
          head: ['Perífrase', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['anar + gerundi', 'ação gradual', "El deute de l'empresa va augmentant.", 'A dívida da empresa vai aumentando.'],
            ['anar + gerundi', 'aproximação progressiva', 'Els negociadors van acostant posicions.', 'Os negociadores vão aproximando posições.'],
          ],
        },
        examples: [
          ['La situació econòmica va millorant a poc a poc.', 'A situação econômica vai melhorando aos poucos.'],
          ['Les despeses van creixent mes rere mes.', 'As despesas vão crescendo mês após mês.'],
        ],
      },
      {
        heading: 'Duração continuada: portar + tempo + gerundi',
        text: 'Duração de uma ação iniciada no passado que continua no presente — sem a preposição “de” (decalque do espanhol).',
        examples: [
          ['Portem tres mesos negociant aquest contracte.', 'Estamos há três meses negociando esse contrato.'],
          ['Quant temps portes treballant en aquest projecte?', 'Há quanto tempo você está trabalhando neste projeto?'],
        ],
      },
      {
        heading: 'Interrupção e repetição: deixar de / tornar a + infinitivo',
        text: '“deixar de + infinitiu”: cessação de hábito/processo. “tornar a + infinitiu”: repetição do evento.',
        table: {
          head: ['Estrutura', 'Função', 'Exemplo', 'Tradução'],
          rows: [
            ['deixar de + infinitiu', 'interrupção', 'Han deixat de negociar amb els proveïdors.', 'Deixaram de negociar com os fornecedores.'],
            ['tornar a + infinitiu', 'repetição', 'Tornarem a analitzar la proposta demà.', 'Voltaremos a analisar a proposta amanhã.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Pôr “de” depois de “portar” + tempo + gerúndio (“porto de tres anys treballant” em vez de “porto tres anys treballant”).',
      'Confundir “anar + gerundi” (ação gradual) com o passat perifràstic “anar + infinitiu” (ação pontual concluída: “vaig parlar”).',
      'Usar “volver a” (espanhol) em vez de “tornar a”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Estamos há seis meses analisando o mercado”?',
        options: ['Portem sis mesos analitzant el mercat', 'Portem de sis mesos analitzant el mercat', 'Anem sis mesos analitzant el mercat'],
        answer: 'Portem sis mesos analitzant el mercat',
        explanation: '“portar + tempo + gerundi”, sem preposição no meio.',
      },
      {
        question: 'Qual perífrase indica mudança gradual e progressiva?',
        options: ['tornar a + infinitiu', 'anar + gerundi', 'deixar de + infinitiu'],
        answer: 'anar + gerundi',
        explanation: '“anar + gerundi” expressa ação que se desenvolve aos poucos.',
      },
    ],
  },
  {
    id: 'ca-g30',
    level: 'B2.3',
    title: 'Verbos de mudança (esdevenir, fer-se, posar-se, quedar, convertir-se en)',
    emoji: '🔄',
    summary: 'Verbos pseudocopulativos de mudança de estado — cada um para um tipo de transformação (rápida, gradual, formal, radical).',
    sections: [
      {
        heading: 'Mudanças rápidas ou involuntárias: posar-se e quedar',
        text: '“posar-se + adj.”: mudança física/emocional rápida e transitória. “quedar”/“quedar-se”: estado resultante de uma ação, acidente ou perda.',
        table: {
          head: ['Verbo', 'Tipo', 'Exemplo', 'Tradução'],
          rows: [
            ['posar-se + adj.', 'físico/emocional momentâneo', 'Es va posar vermell de vergonya.', 'Ficou vermelho de vergonha.'],
            ['posar-se + adj.', 'saúde, rápido', "S'ha posat malalt aquest cap de setmana.", 'Ficou doente neste fim de semana.'],
            ['quedar/quedar-se', 'estado resultante', 'Va quedar orfe a deu anys.', 'Ficou órfão aos dez anos.'],
            ['quedar + adj.', 'resultado de evento', 'Tots van quedar sorpresos amb la notícia.', 'Todos ficaram surpresos com a notícia.'],
          ],
        },
        examples: [
          ['Quan li van fer la pregunta, es va posar nerviós.', 'Quando lhe fizeram a pergunta, ficou nervoso.'],
          ['Després de l\'accident, va quedar incapaç de caminar.', 'Depois do acidente, ficou incapaz de caminhar.'],
        ],
      },
      {
        heading: 'Mudanças graduais, profissionais ou ideológicas: fer-se e esdevenir',
        text: '“fer-se”: transformação gradual, por vontade, tempo ou evolução (profissão, idade, ideologia, religião). “esdevenir” (formal): mudança de natureza, resultado final.',
        table: {
          head: ['Verbo', 'Uso', 'Exemplo', 'Tradução'],
          rows: [
            ['fer-se + nom/adj.', 'profissão, idade, ideologia', 'Es va fer metge després de molts anys.', 'Tornou-se médico depois de muitos anos.'],
            ['fer-se + adj.', 'evolução natural do tempo', "S'ha fet gran molt de pressa.", 'Ficou grande muito rápido.'],
            ['esdevenir + nom/adj.', 'mudança formal/resultado', 'El projecte va esdevenir un èxit total.', 'O projeto se tornou um sucesso total.'],
          ],
        },
        examples: [
          ['Es va fer vegetarià fa dos anys.', 'Tornou-se vegetariano há dois anos.'],
          ['Aquest petit poble ha esdevingut un centre turístic.', 'Esse pequeno povoado se tornou um centro turístico.'],
        ],
      },
      {
        heading: 'Transformação radical: convertir-se en / transformar-se en',
        text: 'Sempre com a preposição “en”: mudança profunda de natureza, substância ou categoria.',
        examples: [
          ['L\'aigua es converteix en gel a zero graus.', 'A água se converte em gelo a zero graus.'],
          ["L'antiga fàbrica s'ha convertit en un museu.", 'A antiga fábrica se converteu num museu.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “tornar-se” com “en” antes de adjetivo simples (“es va tornar en vermell” em vez de “es va posar/tornar vermell”).',
      'Omitir o “en” com “convertir-se” (“convertir-se una ciutat” em vez de “convertir-se en una ciutat”).',
      'Confundir “quedar” (resultar/ficar após um processo) com “quedar-se” (permanecer num lugar ou guardar algo).',
    ],
    quiz: [
      {
        question: 'Qual verbo para uma reação emocional instantânea (“Ele ficou muito nervoso”)?',
        options: ['Es va fer molt nerviós', 'Es va posar molt nerviós', 'Va esdevenir molt nerviós'],
        answer: 'Es va posar molt nerviós',
        explanation: 'Estado físico/emocional rápido e passageiro: “posar-se + adjetivo”.',
      },
      {
        question: '“Aquesta decisió ___ un problema per a tots nosaltres” (tornou-se, formal): complete.',
        options: ['va esdevenir', "va posar-se", 'va quedar-se'],
        answer: 'va esdevenir',
        explanation: '“esdevenir” é o verbo formal para transformação num novo estado/resultado.',
      },
    ],
  },
  {
    id: 'ca-g31',
    level: 'B2.4',
    title: 'Marcadores de contraste, reformulação e modalização',
    emoji: '🧭',
    summary: 'Conectores avançados de oposição (“en canvi”, “mentre que”), concessão (“així i tot”), reformulação (“és a dir”) e confirmação (“de fet”).',
    sections: [
      {
        heading: 'Conectores de oposição e contraste',
        text: 'Contrapõem duas ideias ou restringem algo dito antes.',
        table: {
          head: ['Conector', 'Função', 'Exemplo', 'Tradução'],
          rows: [
            ['en canvi / per contra', 'contraste direto', 'En Marc és molt xerraire; en canvi, el seu germà és callat.', 'O Marc é muito falante; em contrapartida, o irmão é calado.'],
            ['mentre que', 'comparação simultânea', 'Ell vol viatjar, mentre que ella prefereix quedar-se a casa.', 'Ele quer viajar, enquanto ela prefere ficar em casa.'],
            ['no obstant això / així i tot', 'concessão forte', 'Plovia molt; així i tot, vam sortir a passejar.', 'Chovia muito; mesmo assim, saímos para passear.'],
          ],
        },
        examples: [
          ['El primer equip va guanyar; per contra, el filial va perdre.', 'O primeiro time venceu; por outro lado, o time reserva perdeu.'],
          ["Hi havia moltes dificultats; no obstant això, vam assolir l'objectiu.", 'Havia muitas dificuldades; não obstante, alcançamos o objetivo.'],
        ],
      },
      {
        heading: 'Reformulação, precisão e modalização',
        text: 'Para reexplicar, confirmar, corrigir ou matizar o que foi dito.',
        table: {
          head: ['Conector', 'Função', 'Exemplo', 'Tradução'],
          rows: [
            ['de fet / en efecte', 'confirmação', 'És un bon especialista; de fet, ha escrit diversos llibres.', 'É um bom especialista; de fato, escreveu vários livros.'],
            ['és a dir / o sigui', 'esclarecimento', 'És un contracte indefinit; és a dir, no té data de finalització.', 'É um contrato por prazo indeterminado; ou seja, não tem data de término.'],
            ['més aviat', 'correção de matiz', 'No estic enfadat, sinó més aviat sorprès.', 'Não estou bravo, mas sim surpreso.'],
            ['així com', 'adição paralela', 'L\'alcalde, així com els regidors, va assistir a l\'acte.', 'O prefeito, assim como os vereadores, compareceu ao evento.'],
          ],
        },
        examples: [
          ['No és una crisi, sinó més aviat un canvi de tendència.', 'Não é uma crise, mas sim uma mudança de tendência.'],
          ['Tots els socis, així com els convidats, han de signar el registre.', 'Todos os sócios, assim como os convidados, devem assinar o registro.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “en canvi de” (espanhol) para “em vez de”: o certo é “en comptes de”/“en lloc de”. “En canvi” sozinho significa “em contrapartida”.',
      'Confundir “així com” (assim como) com “així com així” (de qualquer jeito).',
      'Escrever só “no obstant” como conector: a norma escrita culta pede “no obstant això”.',
    ],
    quiz: [
      {
        question: '“O João gosta de praia; ___, a Maria prefere a montanha”: qual conector?',
        options: ['en canvi', 'així com', 'de fet'],
        answer: 'en canvi',
        explanation: '“en canvi” é o conector padrão para contraste direto entre dois elementos.',
      },
      {
        question: 'Como se diz “Ele é muito inteligente; de fato, ganhou o primeiro prêmio”?',
        options: ['És molt intel·ligent; de fet, va guanyar el primer premi', 'És molt intel·ligent; en canvi, va guanyar el primer premi', 'És molt intel·ligent; així com va guanyar el primer premi'],
        answer: 'És molt intel·ligent; de fet, va guanyar el primer premi',
        explanation: '“de fet” confirma/reforça o que foi dito antes.',
      },
    ],
  },
  {
    id: 'ca-g32',
    level: 'B2.4',
    title: '“Que” e “què”: quando acentuar',
    emoji: '✍️',
    summary: 'A distinção ortográfica e sintática entre “que” (conjunção/relativo sem preposição) e “què” (interrogativo, exclamativo, relativo com preposição, substantivo).',
    sections: [
      {
        heading: '“Que” (sem acento)',
        text: 'Conjunção integrante, relativo sem preposição, conjunção causal/explicativa, ou partícula enfática/interrogativa.',
        table: {
          head: ['Função', 'Exemplo', 'Tradução'],
          rows: [
            ['conjunção integrante', 'Sé que vindràs demà.', 'Sei que você virá amanhã.'],
            ['relativo (sem preposição)', 'El llibre que he llegit és molt bo.', 'O livro que li é muito bom.'],
            ['conjunção causal/explicativa', 'Tanca la finestra, que fa fred.', 'Feche a janela, que está frio.'],
            ['partícula enfática', 'Que vols venir amb nosaltres?', 'Quer vir com a gente? (ênfase)'],
          ],
        },
        examples: [
          ['Espero que tot vagi bé.', 'Espero que tudo corra bem.'],
          ['L\'home que parla és el meu oncle.', 'O homem que fala é meu tio.'],
        ],
      },
      {
        heading: '“Què” (com acento)',
        text: 'Interrogativo, exclamativo, relativo precedido de preposição fraca (a/de/en/amb), ou substantivo masculino.',
        table: {
          head: ['Função', 'Exemplo', 'Tradução'],
          rows: [
            ['interrogativo direto/indireto', 'Què vols fer? / No sé què dir.', 'O que você quer fazer? / Não sei o que dizer.'],
            ['exclamativo', 'Què bonic que és aquest paisatge!', 'Que bonita é essa paisagem!'],
            ['relativo + preposição fraca', 'Aquest és el tema de què parlàvem.', 'Este é o tema de que falávamos.'],
            ['substantivo (o porquê)', 'Vull saber el què i el com de la qüestió.', 'Quero saber o porquê e o como da questão.'],
          ],
        },
        examples: [
          ['No sé què cal fer en aquesta situació.', 'Não sei o que é preciso fazer nessa situação.'],
          ["La cadira en què t'has assegut està trencada.", 'A cadeira em que você se sentou está quebrada.'],
        ],
      },
    ],
    pitfalls: [
      'Acentuar “que” relativo sem preposição (“el llibre què he llegit” está errado; o certo é “que”).',
      'Esquecer o acento de “què” em pergunta indireta (“no sé que fer” em vez de “no sé què fer”).',
      'Confundir a partícula enfática “que” (“que fa fred!”) com o interrogativo “què” (“què dius?”).',
    ],
    quiz: [
      {
        question: '“No sé ___ he de dir en aquesta reunió”: qual forma?',
        options: ['què', 'que', "que d'"],
        answer: 'què',
        explanation: 'Pergunta indireta com sentido de “o que”: forma tônica “què”.',
      },
      {
        question: 'Por que em “El pis en què visc és molt lluminós” leva acento?',
        options: ['Porque é relativo precedido de preposição fraca (“en”).', 'Porque é conjunção integrante.', 'Porque está no início de oração subordinada.'],
        answer: 'Porque é relativo precedido de preposição fraca (“en”).',
        explanation: 'Relativo de coisa com preposição fraca (a/de/en/amb) antes: “què”.',
      },
    ],
  },
  {
    id: 'ca-g33',
    level: 'C1.1',
    title: 'Duplicação de pronomes e deslocamento (dislocació)',
    emoji: '🔂',
    summary: 'Quando o pronome fraco precisa (ou não pode) retomar um complemento deslocado para o início ou o fim da frase.',
    sections: [
      {
        heading: 'Deslocamento à esquerda (dislocació a l\'esquerra)',
        text: 'Quando um complemento vai para o início da frase como tópico, é OBRIGATÓRIO retomá-lo com o pronome fraco correspondente.',
        table: {
          head: ['Complemento anteposto', 'Pronome de retomada', 'Exemplo', 'Tradução'],
          rows: [
            ['CD determinado', 'el/la/els/les', 'Aquest llibre, el vaig comprar ahir.', 'Este livro, eu o comprei ontem.'],
            ['CD indeterminado', 'en', 'De pa, no en queda gens.', 'Pão, não sobrou nada.'],
            ['CI', 'li/els', 'A en Marc, li van entregar el premi.', 'Ao Marc, entregaram-lhe o prêmio.'],
            ['Circunstancial/regido', 'hi/en', 'A Girona, hi anirem el cap de setmana.', 'A Girona, iremos lá no fim de semana.'],
          ],
        },
        examples: [
          ['A les teves amigues, no les he vistes avui.', 'Suas amigas, não as vi hoje.'],
          ["D'aquesta qüestió, no se n'ha parlat gens.", 'Dessa questão, não se falou nada.'],
        ],
      },
      {
        heading: 'Deslocamento à direita (dislocació a la dreta)',
        text: 'Quando o complemento vem no final, como esclarecimento depois de uma pausa, o pronome fraco antecipa esse complemento.',
        examples: [
          ['Ja li ho vaig dir, a la teva germana.', 'Já disse isso a ela, à sua irmã.'],
          ['No hi vull tornar, a aquest restaurant.', 'Não quero voltar lá, a esse restaurante.'],
        ],
      },
      {
        heading: 'Quando NÃO duplicar (pleonasmo incorreto)',
        text: 'Na ordem neutra (sem deslocamento nem vírgula), ou quando o antecedente já é um pronome relativo, duplicar o pronome é um pleonasmo que a norma culta não aceita.',
        table: {
          head: ['Errado', 'Certo', 'Explicação'],
          rows: [
            ['El llibre que el vaig llegir', 'El llibre que vaig llegir', 'O relativo “que” já faz a função de complemento.'],
            ['On hi vas?', 'On vas?', '“on” já é locativo; não precisa de “hi” também.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Duplicar o pronome quando o complemento direto já vem de um relativo (“la carta que la vaig enviar” em vez de “la carta que vaig enviar”).',
      'Omitir o pronome de retomada no deslocamento à esquerda (“A la Maria vaig veure ahir” em vez de “A la Maria, la vaig veure ahir”).',
      'Pôr “a” antes de complemento direto de pessoa por interferência do espanhol (“Vaig veure a en Joan” em vez de “Vaig veure en Joan” — o catalão não tem "a" pessoal).',
    ],
    quiz: [
      {
        question: 'Qual opção está certa, com deslocamento à esquerda?',
        options: ['Aquestes claus, vaig trobar al passadís', 'Aquestes claus, les vaig trobar al passadís', 'Aquestes claus, se les vaig trobar al passadís'],
        answer: 'Aquestes claus, les vaig trobar al passadís',
        explanation: 'Complemento direto determinado anteposto exige retomada pelo pronome (“les”).',
      },
      {
        question: 'Por que “El document que el vas signar ahir ja està tramitat” tem um erro?',
        options: ['O verbo “signar” deveria estar no subjuntivo.', 'É errado duplicar o CD com “el” quando já existe o relativo “que”.', 'Falta a preposição “a” antes de “el document”.'],
        answer: 'É errado duplicar o CD com “el” quando já existe o relativo “que”.',
        explanation: 'O relativo “que” já cumpre a função de complemento; “el” junto é pleonasmo incorreto.',
      },
    ],
  },
  {
    id: 'ca-g34',
    level: 'C1.1',
    title: 'Valores modais e estilísticos dos tempos verbais',
    emoji: '🎭',
    summary: 'Usos pragmáticos avançados: imperfeito de cortesia, futuro/condicional de probabilidade, e o condicional de boato (estilo jornalístico).',
    sections: [
      {
        heading: 'Imperfeito de cortesia',
        text: 'O imperfeito do indicativo, em registro formal, suaviza pedidos, vontades ou intenções recentes.',
        table: {
          head: ['Uso', 'Exemplo', 'Sentido'],
          rows: [
            ['pedido cortês', 'Volia demanar-li si em pot atendre.', 'Queria pedir-lhe se pode me atender (mais suave que “vull”).'],
            ['ação prevista não realizada', 'Ara mateix et trucava!', 'Eu já ia te ligar agora! (intenção iminente)'],
            ['conselho/hipótese (coloquial)', 'Jo de tu hi anava sense pensar-ho.', 'Eu, no seu lugar, iria sem pensar.'],
          ],
        },
        examples: [
          ['Venia a saber si teniu els resultats de la prova.', 'Vinha saber se vocês têm os resultados do exame.'],
          ['Què volia el senyor?', 'O que o senhor desejava? (atendimento cortês)'],
        ],
      },
      {
        heading: 'Futuro e condicional de probabilidade',
        text: 'O futuro simples estima um fato do presente; o condicional simples, um fato do passado.',
        table: {
          head: ['Tempo', 'Valor', 'Exemplo', 'Tradução'],
          rows: [
            ['futuro simples', 'probabilidade no presente', 'Seran prop de les deu de la nit.', 'Devem ser quase dez da noite.'],
            ['futuro composto', 'probabilidade sobre fato concluído', 'Haurà perdut l\'autobús.', 'Deve ter perdido o ônibus.'],
            ['condicional simples', 'estimativa no passado', 'Serien les cinc quan va arribar.', 'Seriam umas cinco horas quando chegou.'],
          ],
        },
      },
      {
        heading: 'Condicional de boato (estilo jornalístico)',
        text: 'No jornalismo e em relatórios formais, o condicional atribui a informação a terceiros, sem o emissor assumir a veracidade do fato.',
        examples: [
          ['Segons fonts del ministeri, el govern aprovaria demà el decret.', 'Segundo fontes do ministério, o governo aprovaria amanhã o decreto. (não confirmado)'],
          ["L'accident hauria provocat diversos ferits greus.", 'O acidente teria provocado vários feridos graves.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o futuro de conjectura sobre o presente (“Seran les deu” = devem ser dez horas) com uma afirmação categórica de futuro (“Demà a les deu serem allà”).',
      'Usar o presente sem atenuante em pedido formal (“Vull parlar amb el director” em vez de “Volia/Voldria parlar amb el director”).',
      'Abusar do condicional de boato em texto acadêmico/jurídico, onde se exige dado confirmado ou citação direta.',
    ],
    quiz: [
      {
        question: 'Em “El comitè hauria acceptat la dimissió del director”, o que expressa o condicional composto?',
        options: ['Um desejo do jornalista.', 'Uma informação de boato, não confirmada por fontes oficiais.', 'Uma condição obrigatória do passado.'],
        answer: 'Uma informação de boato, não confirmada por fontes oficiais.',
        explanation: 'O condicional de boato reporta fatos pendentes de confirmação oficial — comum no jornalismo.',
      },
      {
        question: 'Qual frase usa o imperfeito com valor de cortesia?',
        options: ['Ahir estudiava quan vas trucar', 'Volia saber si em pot confirmar la data de la reunió', 'Quan era petit jugava a futbol'],
        answer: 'Volia saber si em pot confirmar la data de la reunió',
        explanation: '“Volia” no lugar do presente “vull” suaviza e deixa o pedido mais educado.',
      },
    ],
  },
  {
    id: 'ca-g35',
    level: 'C1.2',
    title: 'Concordância do particípio com o complemento direto',
    emoji: '🧩',
    summary: 'Quando o particípio dos tempos compostos concorda (e quando não concorda) com um pronome fraco de complemento direto anteposto.',
    sections: [
      {
        heading: 'Concordância com pronome fraco de CD anteposto',
        text: 'Na norma culta (IEC), quando o complemento direto vem antes do verbo como pronome fraco de 3ª pessoa (el/la/els/les) ou partitivo (en), o particípio concorda em gênero e número com ele.',
        table: {
          head: ['Pronome CD anteposto', 'Concordância', 'Exemplo', 'Tradução'],
          rows: [
            ['la/les (feminino)', 'obrigatória/recomendada', "L'he escrita.", 'Eu a escrevi.'],
            ['els/les (plural)', 'obrigatória/recomendada', 'Les meves germanes, no les he vistes.', 'Minhas irmãs, não as vi.'],
            ['en (partitivo)', 'concorda com a quantidade', "De pomes, n'hem menjades dues.", 'De maçãs, comemos duas.'],
            ['el/ho (masc./neutro)', 'masculino singular', "El document? Ja l'hem signat.", 'O documento? Já o assinamos.'],
          ],
        },
        examples: [
          ["Quantes faldilles s'ha comprat? — Se n'ha comprades tres.", 'Quantas saias ela comprou? — Comprou três.'],
          ['Aquestes propostes, ja les havíem acceptades.', 'Essas propostas, já as tínhamos aceitado.'],
        ],
      },
      {
        heading: 'Quando o particípio fica invariável',
        text: 'Fica invariável no masculino singular em três casos.',
        table: {
          head: ['Contexto', 'Regra', 'Exemplo', 'Tradução'],
          rows: [
            ['CD depois do verbo', 'nunca concorda', 'Hem escrit les cartes (não “escriptes”).', 'Escrevemos as cartas.'],
            ['Relativo “que” (uso moderno)', 'invariável', 'Les cartes que he escrit són per a tu.', 'As cartas que escrevi são para você.'],
            ['Particípio + infinitivo', 'invariável', 'Les cançons que he sentit cantar.', 'As músicas que ouvi cantarem.'],
          ],
        },
        examples: [
          ['Les noies que hem vist sortir de classe.', 'As garotas que vimos sair da aula. (sem concordância)'],
          ['Hem trobat les claus que havies perdut.', 'Encontramos as chaves que você tinha perdido.'],
        ],
      },
    ],
    pitfalls: [
      'Concordar o particípio com o SUJEITO em vez do complemento direto (“haver” não faz concordância de sujeito, ao contrário de “ésser” na passiva).',
      'Concordar quando o CD vem DEPOIS do verbo (“hem menjades les pomes” é erro grave; o certo é “hem menjat les pomes”).',
      'Flexionar o particípio antes de infinitivo (“les he vistes sortir” em vez de “les he vist sortir”).',
    ],
    quiz: [
      {
        question: 'Como responder “Has llegit les revistes?” usando “les”?',
        options: ['Sí, les he llegides totes', 'Sí, les he llegit totes', 'Sí, les he llegits totes'],
        answer: 'Sí, les he llegides totes',
        explanation: 'CD anteposto feminino plural: o particípio concorda (“llegides”).',
      },
      {
        question: 'Em qual frase o particípio fica INVARIÁVEL?',
        options: ['Les noies, les hem vistes al parc', 'Les cançons que he sentit cantar eren boniques', "De pomes, n'ha collides moltes"],
        answer: 'Les cançons que he sentit cantar eren boniques',
        explanation: 'Particípio seguido de infinitivo (“sentit cantar”): fica invariável, masculino singular.',
      },
    ],
  },
  {
    id: 'ca-g36',
    level: 'C1.2',
    title: 'Mudança de preposição antes de infinitivo',
    emoji: '🔄',
    summary: 'Alguns verbos trocam a preposição que regem quando o complemento é um infinitivo em vez de um substantivo.',
    sections: [
      {
        heading: 'Verbos que mudam de preposição diante de infinitivo',
        text: 'Alguns verbos regidos por “en” ou “amb” diante de substantivo trocam essa preposição diante de infinitivo. Dois exemplos bem estabelecidos:',
        table: {
          head: ['Regência com substantivo', 'Diante de infinitivo', 'Exemplo', 'Tradução'],
          rows: [
            ['trigar en (demorar em)', 'en → a', 'Ha trigat molt a respondre.', 'Demorou muito para responder.'],
            ['amenaçar amb (ameaçar com)', 'amb → de', 'Amenaça de dimitir.', 'Ameaça se demitir.'],
          ],
        },
        examples: [
          ["L'acusat amenaça de dir la veritat.", 'O acusado ameaça contar a verdade.'],
        ],
      },
      {
        heading: 'Nem todo verbo muda: cuidado para não generalizar',
        text: 'Esse fenômeno (“canvi de preposició”) é específico de cada verbo, não uma regra geral — muitos verbos que regem preposição com substantivo simplesmente usam o infinitivo direto, sem preposição nenhuma. É o caso de “pensar” no sentido de pretender: “Penso anar-hi demà” (não “penso a anar-hi” nem “penso en anar-hi”). Vale checar um dicionário de regência verbal para cada verbo novo, em vez de aplicar “en/amb → a/de” automaticamente.',
        examples: [
          ['Penso anar-hi demà.', 'Pretendo ir lá amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Manter “en” antes de infinitivo por decalque do espanhol/português (“pensa en anar-hi” — mas “pensar” nem muda pra “a”: o certo aqui é sem preposição, “pensa anar-hi”).',
      'Usar “amb” direto antes de infinitivo (“amenaça amb marxar” em vez de “amenaça de marxar”).',
      'Generalizar o “canvi de preposició” para todo verbo: é específico, verbo por verbo — confira um dicionário de regência.',
    ],
    quiz: [
      {
        question: 'Como se diz “Ele demorou muito para responder”?',
        options: ['Ha trigat molt en respondre', 'Ha trigat molt a respondre', 'Ha trigat molt de respondre'],
        answer: 'Ha trigat molt a respondre',
        explanation: '“trigar” rege “en” com substantivo, mas muda para “a” diante de infinitivo.',
      },
      {
        question: '“El director amenaça ___ tancar la fàbrica”: complete.',
        options: ['amb', 'de', 'en'],
        answer: 'de',
        explanation: '“amenaçar amb” muda para “amenaçar de” diante de infinitivo.',
      },
    ],
  },
  {
    id: 'ca-g37',
    level: 'C2',
    title: 'Condicionais e concessivas cultas (sols que, posat que, a condició que, sens que)',
    emoji: '👑',
    summary: 'Conectores subordinativos de registro formal, jurídico e literário — a maioria pede obrigatoriamente o subjuntivo.',
    sections: [
      {
        heading: 'Condicionais cultos e restritivos',
        text: 'Em registro formal, jurídico e acadêmico, conectores condicionais especializados pedem sempre o subjuntivo.',
        table: {
          head: ['Conector', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['sols que / solament que', 'condição mínima suficiente (“basta que”)', 'Sols que em donis un senyal, vindré.', 'Basta que você me dê um sinal, eu virei.'],
            ['posat que', 'hipótese formulada (“supondo que”)', 'Posat que la proposta sigui acceptada...', 'Supondo que a proposta seja aceita...'],
            ['a menys que / a menys de', 'exceção (“a menos que”)', 'No signarem a menys que hi hagi canvis.', 'Não assinaremos a menos que haja mudanças.'],
            ['a condició que', 'exigência estrita', 'Aprovarem el crèdit a condició que presenteu aval.', 'Aprovaremos o crédito sob condição de que apresentem aval.'],
          ],
        },
        examples: [
          ['Sols que haguéssim tingut cinc minuts més, hauríem acabat.', 'Bastava termos tido mais cinco minutos, e teríamos terminado.'],
          ["Posat que no hi hagi quòrum, s'ajornarà la sessió.", 'Supondo que não haja quórum, a sessão será adiada.'],
        ],
      },
      {
        heading: 'Concessivos e causais formais/literários',
        text: 'Locuções de alto registro para ensaios, textos jurídicos e discursos.',
        table: {
          head: ['Conector', 'Modo', 'Exemplo', 'Tradução'],
          rows: [
            ['per bé que', 'indicativo ou subjuntivo', 'Per bé que no ho admeti, sap que té culpa.', 'Embora não admita, sabe que tem culpa.'],
            ['com sigui que', 'causal (“visto que”) ou concessivo', 'Com sigui que la situació és greu, actuarem.', 'Visto que a situação é grave, agiremos.'],
            ['sens que (= sense que)', 'sempre subjuntivo', 'Va aprovar la llei sens que ningú protestés.', 'Aprovou a lei sem que ninguém protestasse.'],
          ],
        },
        examples: [
          ['Per bé que la inversió és elevada, el retorn serà ràpid.', 'Embora o investimento seja elevado, o retorno será rápido.'],
          ["Va marxar de la sala sens que ningú se n'adonés.", 'Saiu da sala sem que ninguém percebesse.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “sols que” (culto, com subjuntivo: “basta que”) com o advérbio simples “solament” (“somente”).',
      'Usar “a menys de” com verbo conjugado (“a menys de vingui” é errado; “a menys de” pede infinitivo, “a menys que” pede verbo conjugado).',
      '“sens que” é forma literária de “sense que” e sempre pede subjuntivo.',
    ],
    quiz: [
      {
        question: 'Qual conector formal significa “basta que/contanto que” e pede subjuntivo?',
        options: ['Sols que', 'Per bé que', 'Així com'],
        answer: 'Sols que',
        explanation: '“sols que” introduz uma condição mínima suficiente.',
      },
      {
        question: 'Qual frase está certa para concessão em registro culto?',
        options: ['Per bé que la situació sigui complexa, trobarem la solució', 'Sens que la situació és complexa, trobarem la solució', 'Com sigui de la situació és complexa, trobarem la solució'],
        answer: 'Per bé que la situació sigui complexa, trobarem la solució',
        explanation: '“per bé que” é a locução concessiva culta equivalente a “embora”.',
      },
    ],
  },
  {
    id: 'ca-g38',
    level: 'C2',
    title: 'Registro literário: passat simple sintético e a variação -és/-ara do subjuntivo',
    emoji: '📜',
    summary: 'Duas marcas do catalão mais literário/formal: o passat simple sintético (em vez de “vaig + infinitiu”) e a variante ocidental do imperfeito do subjuntivo em “-ara/-era”. São formas de RECONHECIMENTO, raramente produzidas até por falantes nativos.',
    sections: [
      {
        heading: 'Passat simple sintético',
        text: 'Em textos literários, historiográficos e na norma valenciana, o passado simples pode usar formas conjugadas próprias em vez do passat perifràstic (“vaig dir”). A 3ª pessoa do singular leva sempre acento gráfico.',
        table: {
          head: ['Pessoa', 'cantar', 'perdre', 'dormir'],
          rows: [
            ['jo', 'cantí', 'perdí', 'dormí'],
            ['ell/ella', 'cantà', 'perdé', 'dormí'],
            ['nosaltres', 'cantàrem', 'perdérem', 'dormírem'],
          ],
        },
        examples: [
          ["El rei signà el decret i sortí del palau.", 'O rei assinou o decreto e saiu do palácio.'],
        ],
      },
      {
        heading: 'A variação -és/-às × -ara/-era no imperfeito do subjuntivo',
        text: 'Ao lado das formas em “-és”/“-às” (ensinadas em B1.2/B1.3, as de uso geral), existe uma variante em “-ara”/“-era”, própria do valenciano e de registros literários, com o MESMO valor de imperfeito do subjuntivo — nunca de condicional.',
        table: {
          head: ['Forma geral (B1.2)', 'Variante valenciana/literária', 'Sentido'],
          rows: [
            ['Si jo cantés', 'Si jo cantara', 'Se eu cantasse'],
            ['Si ell fos', 'Si ell fóra', 'Se ele fosse'],
          ],
        },
        examples: [
          ["Volia que ell digués la darrera paraula. / Volia que ell diguera la darrera paraula.", 'Queria que ele dissesse a última palavra.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “-ara/-era” é condicional: é imperfeito do subjuntivo (“cantara” = “cantasse”, nunca “cantaria”).',
      'Esquecer o acento na 3ª pessoa do singular do passat simple sintético (“cantà”, “perdé”, “dormí”).',
      'Misturar passat simple sintético com o passat perifràstic (vaig + infinitiu) no mesmo texto sem critério — são registros diferentes.',
    ],
    quiz: [
      {
        question: 'O que significa a forma literária/valenciana “cantara”?',
        options: ['Eu cantaria (condicional)', 'Eu cantasse (imperfeito do subjuntivo)', 'Eu cantava (imperfeito do indicativo)'],
        answer: 'Eu cantasse (imperfeito do subjuntivo)',
        explanation: '“-ara/-era” é variante literária/valenciana do imperfeito do subjuntivo, equivalente a “-és/-às”.',
      },
      {
        question: 'Qual forma do passat simple sintético (3ª pessoa singular) está correta?',
        options: ['El president signa el document ahir', 'El president signà el document ahir', 'El president va signà el document ahir'],
        answer: 'El president signà el document ahir',
        explanation: '3ª pessoa singular do passat simple sintético de verbos em “-ar” leva acento grave: “signà”.',
      },
    ],
  },
  {
    id: 'ca-g40',
    level: 'B2.4',
    title: 'Sufixos avaluatius: diminutius, augmentatius i valors afectius (-et, -às, -ot, -ó)',
    emoji: '🧸',
    summary:
      'Compreenda a formação, os matizes afetivos e as alterações semânticas dos sufixos avaliativos em catalão: diminutivos (-et/-eta), aumentativos (-às/-assa), sufixos ambivalentes entre pejorativo e afetivo (-ot/-ota) e formas lexicalizadas (-ó/-ona e outras).',
    sections: [
      {
        heading: 'Diminutius i valors afectius: -et/-eta',
        text: 'O sufixo diminutivo mais comum e produtivo em catalão é -et / -eta (plural: -ets / -etes). É usado tanto para indicar tamanho reduzido real quanto para expressar carinho, intimidade ou atenuação (valor afetivo), e também para formar hipocorísticos de nomes próprios.',
        table: {
          head: ['Sufixo', 'Valor/Função', 'Exemplo em catalão', 'Tradução em português'],
          rows: [
            ['-et / -eta', 'Tamanho pequeno real', 'un cotxet de joguina', 'um carrinho de brinquedo'],
            ['-et / -eta', 'Afeição/carinho', 'la meva noieta', 'minha garotinha/filhinha'],
            ['-et / -eta', 'Atenuação/polidez', 'espera un momentet', 'espere um momentinho'],
            ['-et / -eta', 'Hipocorístico de nome próprio', 'en Pau → en Paulet', 'Paulo → Paulinho'],
          ],
        },
        examples: [
          ['Aquest gosset és molt juganer i afectuós.', 'Este cachorrinho é muito brincalhão e carinhoso.'],
          ['Pren una miqueta de te per recuperar-te.', 'Tome um pouquinho de chá para se recuperar.'],
        ],
      },
      {
        heading: 'Augmentatius i sufixos ambivalents: -às/-assa i -ot/-ota',
        text: 'O sufixo -às / -assa expressa dimensão grande, força ou admiração. Já -ot / -ota é ambivalente: pode soar depreciativo, tosco ou vulgar (“paraulota” = palavrão), mas com outras palavras soa afetivo, quase carinhoso (“cadirota” pode ser “aquela cadeirona confortável e querida”, não uma crítica).',
        table: {
          head: ['Sufixo', 'Matiz', 'Exemplo em catalão', 'Tradução em português'],
          rows: [
            ['-às / -assa', 'Aumentativo de admiração/porte', 'un cotxàs espectacular', 'um carrão/carraço espetacular'],
            ['-às / -assa', 'Força/robustez', 'un homenàs molt alt', 'um homenzarrão muito alto'],
            ['-ot / -ota', 'Depreciativo/vulgar', 'dient paraulotes', 'dizendo palavrões'],
            ['-ot / -ota', 'Dimensão tosca ou pouco refinada', 'un llibrot de centenars de pàgines', 'um calhamaço de centenas de páginas'],
            ['-ot / -ota', 'Afetivo (não pejorativo, depende da palavra)', 'quina cadirota més còmoda!', 'que cadeirona mais confortável!'],
          ],
        },
        examples: [
          ["Quina veuassa que té aquest cantant d'òpera!", 'Que vozeirão tem esse cantor de ópera!'],
          ['Seu en aquesta cadirota, que hi estaràs més còmode.', 'Sente nessa cadeirona, que você vai ficar mais confortável.'],
        ],
      },
      {
        heading: 'O sufixo ambíguo -ó/-ona e as mudanças de sentido (lexicalização)',
        text: 'O sufixo -ó / -ona tem natureza dupla: pode funcionar como diminutivo/afetivo em alguns termos. Além disso, vários sufixos avaliativos (não só -ó) perdem o valor de tamanho e criam palavras com sentido próprio (lexicalização), que já não significam apenas “versão pequena de”.',
        table: {
          head: ['Fenômeno/sufixo', 'Base → derivado', 'Sentido', 'Tradução em português'],
          rows: [
            ['-ó/-ona (diminutivo lexicalizado)', 'carrer → carreró', 'beco/travessa estreita', 'rua → beco/travessa'],
            ['-ó/-ona (afetivo)', 'petit → petitó/petitona', 'atenuação carinhosa', 'pequeno → pequenino/bonitinho'],
            ['Lexicalização (-eta)', 'camisa → camiseta', 'nova peça de roupa', 'camisa → camiseta'],
            ['Lexicalização (-eta)', 'taula → tauleta', 'móvel de cabeceira / tablet', 'mesa → mesinha de cabeceira / tablet'],
            ['Lexicalização (-illa)', 'forca → forquilla', 'novo objeto (talher)', 'forca (forcado agrícola) → garfo'],
          ],
        },
        examples: [
          ['Hem passejat pels carrerons del barri antic.', 'Passeamos pelos becos do bairro antigo.'],
          ['La nena és molt petitona i eixerida.', 'A menina é bem pequenininha e esperta.'],
        ],
      },
    ],
    pitfalls: [
      'Não confundir o diminutivo espanhol “-ito/-ita” com o catalão “-et/-eta”: são sistemas diferentes, mesmo tendo função parecida.',
      'Evitar usar “-às” ou “-ot” sem considerar o contexto: “cotxàs” é elogio a um carro grande, mas “paraulota” é sempre pejorativo — o mesmo sufixo “-ot/-ota” pode soar tanto carinhoso (“cadirota”) quanto depreciativo (“llibrot”), depende da palavra.',
      'Atenção às formas lexicalizadas: “forquilla” (garfo) ou “tauleta” (mesinha de cabeceira/tablet) já não significam “versão pequena” da palavra de origem, mas objetos com sentido próprio.',
      'Cuidado com concordância de gênero no aumentativo: “veu” é palavra feminina, então é “veuassa” (não “veuàs”).',
    ],
    quiz: [
      {
        question: 'Qual é o sufixo diminutivo mais comum e produtivo em catalão padrão para indicar tamanho pequeno ou carinho (ex: “un gosset”, “una noieta”)?',
        options: ['-et / -eta', '-ito / -ita', '-às / -assa'],
        answer: '-et / -eta',
        explanation: 'O sufixo -et / -eta é a forma diminutiva por excelência do catalão, usada tanto para indicar tamanho reduzido real quanto afetividade.',
      },
      {
        question: 'Em qual das frases a palavra formada por um sufixo tem nuance claramente pejorativa ou vulgar?',
        options: [
          'Aquella xicota no para de dir paraulotes.',
          'En Marc s\'ha comprat un cotxet de col·lecció.',
          'La meva àvia viu en un carreró molt tranquil.',
        ],
        answer: 'Aquella xicota no para de dir paraulotes.',
        explanation: 'O sufixo -ot/-ota em “paraulotes” (palavrões) adiciona uma nuance depreciativa e vulgar à palavra base “paraula”.',
      },
    ],
  },
  {
    id: "ca-g41",
    level: "A1.1",
    title: "Pronúncia: a vogal neutra, os acentos e as consoantes do catalão",
    emoji: "🔤",
    summary: "O catalão se lê com regras claras. O que mais surpreende o brasileiro: fora da sílaba tônica, “a” e “e” viram um som neutro, [ə], e “o” vira [u] (no catalão central); e há sons conhecidos escritos de outro jeito: ll é o nosso “lh”, ny é o “nh”, x é o “x” de “xícara”.",
    sections: [
      {
        heading: "A sílaba tônica e os acentos",
        text: "Palavras terminadas em vogal, em -es, -en ou -in são paroxítonas (CA-sa, PA-res, e-XA-men); as outras são oxítonas (par-LAR, se-NYOR, ciu-TAT). Quando a palavra foge dessa regra, leva acento gráfico: cafè, català, música, telèfon. O acento também mostra o timbre: à é sempre aberto; è e ò são abertos (cafè, òpera); é e ó são fechados (bé, cançó); í e ú não mudam o som.",
        table: {
          head: ["Palavra", "IPA", "Português", "Por quê"],
          rows: [
            ["casa", "[ˈkazə]", "casa", "termina em vogal: paroxítona"],
            ["parlar", "[pərˈla]", "falar", "termina em -r: oxítona"],
            ["ciutat", "[siwˈtat]", "cidade", "termina em -t: oxítona"],
            ["cafè", "[kəˈfɛ]", "café", "oxítona terminada em vogal: acento; è aberto"],
            ["cançó", "[kənˈso]", "canção", "oxítona em vogal; ó fechado"],
            ["música", "[ˈmuzikə]", "música", "proparoxítona: sempre com acento"],
            ["telèfon", "[təˈlɛfun]", "telefone", "paroxítona terminada em -n (não em -en, -in): acento"],
          ],
        },
      },
      {
        heading: "As vogais átonas: o [ə] e o [u]",
        text: "No catalão central (Barcelona, Girona, Tarragona), o “a” e o “e” sem tônica soam iguais, como um “â” fraco: [ə]. O “o” sem tônica soa [u]. Por isso “pare” (pai) soa [ˈpaɾə] e “Barcelona” soa [bərsəˈlonə]. Na parte ocidental (Lleida, Valência), o “a” e o “e” átonos continuam distintos: o valenciano diz [ˈpaɾe]. Os dois jeitos são corretos.",
        table: {
          head: ["Palavra", "IPA (central)", "Português"],
          rows: [
            ["pare", "[ˈpaɾə]", "pai"],
            ["mare", "[ˈmaɾə]", "mãe"],
            ["porta", "[ˈpɔɾtə]", "porta"],
            ["cosí", "[kuˈzi]", "primo"],
            ["escola", "[əsˈkɔlə]", "escola"],
          ],
        },
        examples: [
          ["La meva mare parla català.", "A minha mãe fala catalão."],
          ["Barcelona és a la costa.", "Barcelona fica no litoral."],
        ],
      },
      {
        heading: "As consoantes que enganam",
        table: {
          head: ["Grafia", "IPA", "Como soa", "Exemplos"],
          rows: [
            ["ll", "[ʎ]", "“lh” de “filho”", "llet, cavall, llengua"],
            ["l·l", "[lː]", "um “l” dobrado (a ela geminada)", "col·legi, il·lusió"],
            ["ny", "[ɲ]", "“nh” de “ninho”", "any, Catalunya, muntanya"],
            ["x (no início, depois de consoante e de i)", "[ʃ]", "“x” de “xícara”", "xocolata, caixa, panxa"],
            ["tx; -ig no fim", "[tʃ]", "“tch”", "cotxe, mig, maig"],
            ["tj, tg", "[dʒ]", "“dj”", "platja, metge"],
            ["j; g + e, i", "[ʒ]", "“j” de “janela”", "jo, gent, girar"],
            ["s entre vogais; z", "[z]", "“z”", "casa, zero, onze"],
            ["ss; ç; c + e, i", "[s]", "“s” de “sapo”", "massa, plaça, cel"],
            ["v (catalão central)", "[b]", "como b", "vi, vaca, avió"],
            ["h", "—", "nunca soa", "hora, home, ahir"],
            ["qu, gu + e, i", "[k], [ɡ]", "o u não soa; com trema (qü, gü), soa", "que, guerra; qüestió, pingüí"],
          ],
        },
      },
      {
        heading: "Letras que não soam",
        text: "Algumas letras finais caem. No catalão central: o t depois de n ou l (gent [ʒɛn], molt [mol]); o r de muitas palavras oxítonas, como os infinitivos (menjar [mənˈʒa], senyor [səˈɲo]); e o i do “ix” depois de vogal (caixa [ˈkaʃə], peix [peʃ]). E, como em alemão, as consoantes finais sonoras ficam surdas: verd [bɛɾt], fred [fɾɛt].",
        examples: [
          ["Tinc molt de fred.", "Estou com muito frio."],
          ["El senyor menja peix.", "O senhor come peixe."],
        ],
      },
    ],
    pitfalls: [
      "No catalão central, não pronuncie o “a” átono como “a” cheio: “casa” é [ˈkazə], com o final fraco.",
      "“ll” é o nosso “lh”, e “l·l” (com o ponto no meio) é um l dobrado: “col·legi” não tem som de “lh”.",
      "O “x” depois de vogal leva um “i” que não soa: “caixa” soa [ˈkaʃə], não “caicha”.",
      "“tj” e “tg” soam “dj”: “platja” é [ˈpladʒə], não “plátia”.",
    ],
    quiz: [
      { question: "Qual palavra é oxítona (tônica na última sílaba)?", options: ["parlar", "casa", "parles"], answer: "parlar", explanation: "Termina em -r, então é oxítona: par-LAR. “casa” termina em vogal e “parles” em -es: paroxítonas." },
      { question: "Como soa o “ny” de “Catalunya”?", options: ["como o “nh” de “ninho”", "como o “ni” de “nível”", "como o “n” de “nada”"], answer: "como o “nh” de “ninho”", explanation: "“ny” é o som [ɲ], o nosso “nh”." },
      { question: "Em “cotxe” (carro), o “tx” soa…", options: ["“tch”", "“x” de “xícara”", "“ks”"], answer: "“tch”", explanation: "“tx” é [tʃ]: [ˈkɔtʃə]." },
      { question: "Que acento marca um “e” aberto, como o de “café” do português?", options: ["è", "é", "ë"], answer: "è", explanation: "O grave (è) marca o “é” aberto: cafè, vèncer. O agudo (é) marca o “ê” fechado: bé, més." },
    ],
  },
  {
    id: "ca-g42",
    level: "A1.1",
    title: "Saudações, pronomes pessoais e tu × vostè",
    emoji: "👋",
    summary: "Os pronomes do catalão lembram os do português, com duas diferenças: o plural é “nosaltres” e “vosaltres” (nós outros, vós outros), e o tratamento formal é “vostè”, que conjuga como a 3ª pessoa — como o nosso “o senhor”.",
    sections: [
      {
        heading: "Os pronomes pessoais",
        text: "Como no português, o sujeito costuma ficar oculto, porque o verbo já mostra a pessoa: “Parlo català” (falo catalão). O pronome aparece para dar ênfase ou contrastar: “Jo soc de Recife i ella és de Girona”.",
        table: {
          head: ["Catalão", "Português", "Nota"],
          rows: [
            ["jo", "eu", ""],
            ["tu", "você (informal)", "amigos, família, colegas, crianças"],
            ["ell / ella", "ele / ela", ""],
            ["vostè", "o senhor / a senhora", "formal; verbo na 3ª pessoa"],
            ["nosaltres", "nós", ""],
            ["vosaltres", "vocês (informal)", ""],
            ["ells / elles", "eles / elas", ""],
            ["vostès", "os senhores / as senhoras", "formal; verbo na 3ª pessoa do plural"],
          ],
        },
      },
      {
        heading: "Tu, vostè e vós",
        text: "O “tu” é bem mais usado do que o nosso “tu”: entre colegas de trabalho, com vizinhos e muitas vezes até com professores. “Vostè” fica para desconhecidos mais velhos, atendimento ao público e situações formais. Existe ainda “vós”, um tratamento respeitoso com o verbo no plural (vós sou, vós teniu), que se lê em textos antigos e em cartas muito formais e que ainda sobrevive na fala de algumas zonas rurais e em Eivissa, entre gerações mais velhas.",
        examples: [
          ["Com et dius? —Em dic Marta.", "Como você se chama? — Eu me chamo Marta."],
          ["Com es diu vostè?", "Como o senhor se chama?"],
          ["Vostès són del Brasil?", "Os senhores são do Brasil?"],
        ],
      },
      {
        heading: "Cumprimentos do dia a dia",
        table: {
          head: ["Catalão", "Português", "Quando"],
          rows: [
            ["Hola!", "Oi! / Olá!", "a qualquer hora"],
            ["Bon dia!", "Bom dia!", "até a hora do almoço (por volta das 14h)"],
            ["Bona tarda!", "Boa tarde!", "do almoço até escurecer"],
            ["Bon vespre!", "Boa noite! (ao chegar)", "no começo da noite"],
            ["Bona nit!", "Boa noite!", "à noite e para se despedir"],
            ["Adéu!", "Tchau!", ""],
            ["Fins demà!", "Até amanhã!", ""],
            ["Què tal?", "Tudo bem?", "informal"],
          ],
        },
        examples: [
          ["Bon dia, senyora Puig! Com està?", "Bom dia, senhora Puig! Como a senhora está?"],
          ["Hola, Pau! Què tal?", "Oi, Pau! Tudo bem?"],
        ],
      },
    ],
    pitfalls: [
      "Com “vostè”, o verbo vai para a 3ª pessoa: “Vostè és…”, não “Vostè ets…”.",
      "“Nosaltres” e “vosaltres” são as formas normais do plural: “Nosaltres som brasilers”.",
      "“Bona nit” serve também para se despedir à noite; para chegar à noite, diz-se também “bon vespre”.",
    ],
    quiz: [
      { question: "Como se diz “o senhor é de Girona?”", options: ["Vostè és de Girona?", "Vostè ets de Girona?", "Tu és de Girona?"], answer: "Vostè és de Girona?", explanation: "“Vostè” conjuga como a 3ª pessoa: és." },
      { question: "Qual é o pronome catalão para “nós”?", options: ["nosaltres", "nosotros", "nós"], answer: "nosaltres", explanation: "Em catalão, “nosaltres”; “nosotros” é castelhano." },
      { question: "São 11 da manhã. Como você cumprimenta?", options: ["Bon dia!", "Bona tarda!", "Bona nit!"], answer: "Bon dia!", explanation: "“Bon dia” vale até a hora do almoço." },
      { question: "Você acaba de conhecer um colega de curso da sua idade. O mais natural é…", options: ["tu", "vostè", "vós"], answer: "tu", explanation: "Entre colegas, o “tu” é o normal." },
    ],
  },
  {
    id: "ca-g43",
    level: "A1.2",
    title: "Contrações (al, del, pel), “can” e “hi ha”",
    emoji: "🔗",
    summary: "As preposições a, de e per se juntam com el e els: al, als, del, dels, pel, pels — como o nosso “ao”, “do”, “pelo”. Com la, les e l' não há contração.",
    sections: [
      {
        text: "A contração é obrigatória: “Vaig al cinema”. Mas diante de l' não há contração: “Vaig a l'hotel”, “la porta de l'escola”.",
        table: {
          head: ["", "+ el", "+ els", "+ la / l'", "+ les"],
          rows: [
            ["a", "al", "als", "a la / a l'", "a les"],
            ["de", "del", "dels", "de la / de l'", "de les"],
            ["per", "pel", "pels", "per la / per l'", "per les"],
          ],
        },
        examples: [
          ["Anem al mercat i després a la platja.", "Vamos ao mercado e depois à praia."],
          ["El gat del veí passeja pel jardí.", "O gato do vizinho passeia pelo jardim."],
          ["Vinc de l'escola.", "Venho da escola."],
        ],
      },
      {
        heading: "Can: a casa de",
        text: "“Can” vem de “ca” (casa) + “en”: “can Joan” é a casa do Joan; com mulheres, “ca la Maria”. Muitos restaurantes, masias e bairros têm nome com “Can”, porque eram a casa de alguma família.",
        examples: [["Sopem a can Pere?", "Vamos jantar na casa do Pere?"]],
      },
      {
        heading: "Hi ha: há, tem",
        text: "“Hi ha” corresponde ao nosso “há” ou “tem” (de existência) e, na língua padrão, não muda no plural: “Hi ha un bar”, “Hi ha dos bars”. No passado, “hi havia”; no futuro, “hi haurà”. Na fala de várias regiões se ouve “hi han” no plural, mas a norma culta prefere “hi ha”.",
        examples: [
          ["Hi ha una farmàcia a prop?", "Tem uma farmácia perto?"],
          ["Ahir hi havia molta gent a la plaça.", "Ontem havia muita gente na praça."],
        ],
      },
    ],
    pitfalls: [
      "Contraia sempre: “al”, “del”, “pel” — “a el” e “de el” estão errados.",
      "Mas não contraia com l': “a l'hotel”, “de l'aigua”.",
      "“Hi ha” fica igual no plural na norma: “hi ha dues botigues”.",
    ],
    quiz: [
      { question: "Complete: “Anem ___ cinema.”", options: ["al", "a la", "als"], answer: "al", explanation: "a + el = al." },
      { question: "Complete: “La porta ___ escola.”", options: ["de l'", "del", "dels"], answer: "de l'", explanation: "Com l' não há contração." },
      { question: "“Tem dois bancos na praça” fica…", options: ["Hi ha dos bancs a la plaça.", "Són dos bancs a la plaça.", "Té dos bancs a la plaça."], answer: "Hi ha dos bancs a la plaça.", explanation: "Para existência: hi ha, que não muda no plural." },
      { question: "O que é “can Pere”?", options: ["a casa do Pere", "o cachorro do Pere", "o carro do Pere"], answer: "a casa do Pere", explanation: "“can” = ca (casa) + en." },
    ],
  },
  {
    id: "ca-g44",
    level: "B2.2",
    title: "Registro formal: cartas, e-mails e documentos",
    emoji: "✉️",
    summary: "A carta formal em catalão tem fórmulas fixas: “Benvolgut senyor” para começar, “Atentament” para terminar, e o tratamento de “vostè” (ou “vosaltres”, quando se escreve a uma instituição). Datas, abreviações e endereços também seguem convenções próprias.",
    sections: [
      {
        heading: "A estrutura da carta",
        table: {
          head: ["Parte", "Exemplo", "Português"],
          rows: [
            ["lugar e data", "Girona, 3 de març de 2025", "Girona, 3 de março de 2025"],
            ["saudação", "Benvolgut senyor, / Benvolguda senyora, / Senyores i senyors,", "Prezado senhor / Prezada senhora / Senhoras e senhores"],
            ["abertura", "Li escric per sol·licitar-li informació sobre…", "Escrevo para solicitar informações sobre…"],
            ["pedido", "Li agrairia que em fes arribar…", "Eu agradeceria se me enviasse…"],
            ["fecho", "Resto a la seva disposició per a qualsevol aclariment.", "Fico à disposição para qualquer esclarecimento."],
            ["despedida", "Atentament, / Cordialment,", "Atenciosamente / Cordialmente"],
          ],
        },
        text: "Escrevendo a uma empresa ou instituição (e não a uma pessoa), é comum o plural “vosaltres”: “Us escric per…”, “Us agrairia que…”. Com uma pessoa, “vostè”: “Li escric per…”.",
      },
      {
        heading: "Abreviações e convenções",
        table: {
          head: ["Abreviação", "Significado"],
          rows: [
            ["Sr., Sra.", "senyor, senyora"],
            ["Dr., Dra.", "doctor, doctora"],
            ["c/", "carrer (rua)"],
            ["pl.", "plaça"],
            ["núm.", "número"],
            ["tel.", "telèfon"],
            ["a/e", "adreça electrònica (e-mail)"],
          ],
        },
        text: "Nas datas, “de” antes do mês e do ano: “el 5 de maig de 2024”. As horas se escrevem “a les 10 h” ou “a les 10.30 h”. E o vocabulário dos trâmites: sol·licitud (requerimento), termini (prazo), expedient (processo), certificat (certidão), empadronament (registro de residência).",
        examples: [
          ["Benvolguda senyora Soler, li escric per demanar-li una cita.", "Prezada senhora Soler, escrevo para pedir-lhe um horário."],
          ["Us agrairíem que ens enviéssiu el certificat abans del 15 de juny.", "Agradeceríamos se vocês nos enviassem a certidão antes de 15 de junho."],
          ["Atentament,", "Atenciosamente,"],
        ],
      },
    ],
    pitfalls: [
      "Numa carta formal, nada de “Hola”: comece com “Benvolgut/Benvolguda”.",
      "Não misture tratamentos: se começou com “vostè” (li escric), não passe para “tu” (et demano).",
      "Data com “de”: “3 de març de 2025”, não “3 març 2025”.",
    ],
    quiz: [
      { question: "Como começar uma carta formal a um senhor?", options: ["Benvolgut senyor,", "Hola, senyor!", "Estimat amic,"], answer: "Benvolgut senyor,", explanation: "Saudação formal: Benvolgut / Benvolguda." },
      { question: "Uma despedida formal é…", options: ["Atentament,", "Petons,", "Fins aviat!"], answer: "Atentament,", explanation: "Atentament ou Cordialment." },
      { question: "O que significa “c/ Major, 12”?", options: ["carrer Major, 12", "casa Major, 12", "carta Major, 12"], answer: "carrer Major, 12", explanation: "c/ = carrer (rua)." },
      { question: "Escrevendo a uma pessoa com “vostè”, o pedido educado é…", options: ["Li agrairia que em respongués.", "T'agrairia que em responguessis.", "Us agraeixo que respongueu ja."], answer: "Li agrairia que em respongués.", explanation: "vostè = 3ª pessoa (li), condicional + imperfeito do subjuntivo." },
    ],
  },
  {
    id: "ca-g45",
    level: "B2.3",
    title: "Gerúndio e particípio: os usos certos e os errados",
    emoji: "🏃",
    summary: "O gerúndio (parlant, bevent, dormint) indica ação em curso ou o modo, como no português. Mas há usos copiados do castelhano que a norma evita, como o gerúndio de consequência (“va caure, trencant-se el braç”). O particípio concorda como adjetivo e forma frases curtas: “Acabada la feina, vam sortir”.",
    sections: [
      {
        heading: "As formas do gerúndio",
        table: {
          head: ["Infinitivo", "Gerúndio", "Infinitivo", "Gerúndio"],
          rows: [
            ["parlar", "parlant", "fer", "fent"],
            ["perdre", "perdent", "dir", "dient"],
            ["dormir", "dormint", "veure", "veient"],
            ["ser", "sent (essent)", "escriure", "escrivint"],
            ["tenir", "tenint", "beure", "bevent"],
          ],
        },
      },
      {
        heading: "Usos certos e usos a evitar",
        text: "Certos: ação em curso (Estic llegint), modo (Va arribar corrent), simultaneidade (Caminant pel carrer, vaig veure la Rosa) e progressão com “anar” (La cosa va millorant). A evitar: o gerúndio de consequência posterior (“Va caure, trencant-se el braç” → “Va caure i es va trencar el braç”) e o gerúndio como adjetivo (“una caixa contenint llibres” → “una caixa que conté llibres”).",
        examples: [
          ["Estic escrivint un correu.", "Estou escrevendo um e-mail."],
          ["Va entrar cantant.", "Entrou cantando."],
          ["El temps va millorant.", "O tempo vai melhorando."],
        ],
      },
      {
        heading: "O particípio",
        text: "Como adjetivo, concorda: “les portes obertes”, “la feina acabada”. Com haver, não concorda com o sujeito, mas pode concordar com os pronomes la e les: “Les he vistes” ou “Les he vist”. Numa construção absoluta, resume uma ação anterior: “Acabat el sopar, vam sortir” (terminado o jantar, saímos).",
        examples: [
          ["Un cop acabada la reunió, anirem a dinar.", "Depois de terminada a reunião, iremos almoçar."],
          ["La finestra està oberta.", "A janela está aberta."],
        ],
      },
    ],
    pitfalls: [
      "Nada de gerúndio para consequência posterior: “Va caure i es va trencar el braç”.",
      "Nada de gerúndio como adjetivo: “un sobre que conté documents”.",
      "Para o tempo decorrido, prefira “fa … que”: “Fa dues hores que t'espero”.",
    ],
    quiz: [
      { question: "Gerúndio de “fer”:", options: ["fent", "fant", "fient"], answer: "fent", explanation: "fer → fent." },
      { question: "Qual frase segue a norma?", options: ["Va caure i es va fer mal al peu.", "Va caure, fent-se mal al peu.", "Va caure fent-se després mal al peu."], answer: "Va caure i es va fer mal al peu.", explanation: "A consequência posterior se liga com “i”, não com gerúndio." },
      { question: "Complete: “Tenim les finestres ___.” (obrir)", options: ["obertes", "obert", "obrint"], answer: "obertes", explanation: "Particípio como adjetivo, concordando: obertes." },
      { question: "Qual frase segue a norma?", options: ["Tinc una capsa que conté fotos.", "Tinc una capsa contenint fotos.", "Tinc una capsa continguent fotos."], answer: "Tinc una capsa que conté fotos.", explanation: "Gerúndio como adjetivo se evita: use uma oração com “que”." },
    ],
  },
  {
    id: "ca-g46",
    level: "B2.3",
    title: "Expressões idiomáticas",
    emoji: "🌧️",
    summary: "As expressões idiomáticas dão cor à língua e muitas não se traduzem ao pé da letra: “ploure a bots i barrals” é chover canivetes, e “fer campana” é matar aula. Conhecê-las ajuda a entender a conversa do dia a dia.",
    sections: [
      {
        heading: "Expressões do dia a dia",
        table: {
          head: ["Catalão", "Ao pé da letra", "Sentido"],
          rows: [
            ["ploure a bots i barrals", "chover a odres e barris", "chover canivetes"],
            ["fer-la petar", "fazê-la estourar", "bater papo"],
            ["anar de bòlit", "ir como um pião", "estar na correria"],
            ["estar fet pols", "estar feito pó", "estar morto de cansaço"],
            ["tocar el dos", "tocar o dois", "dar no pé, ir embora"],
            ["fer campana", "fazer sino", "matar aula"],
            ["fer dissabte", "fazer sábado", "fazer faxina geral"],
            ["estar a la lluna de València", "estar na lua de Valência", "estar no mundo da lua"],
            ["costar un ull de la cara", "custar um olho da cara", "custar os olhos da cara"],
            ["ser un pa sense sal", "ser um pão sem sal", "ser uma pessoa sem graça"],
            ["no tenir ni cinc", "não ter nem cinco", "estar sem um tostão"],
            ["posar-se les piles", "pôr as pilhas", "acordar, entrar em ação"],
            ["ficar-se de peus a la galleda", "enfiar os pés no balde", "meter os pés pelas mãos"],
            ["tallar el bacallà", "cortar o bacalhau", "mandar, dar as cartas"],
          ],
        },
        examples: [
          ["Ahir vam fer-la petar fins a les tantes.", "Ontem ficamos batendo papo até altas horas."],
          ["Aquest mes no tinc ni cinc.", "Este mês estou sem um tostão."],
          ["Posa't les piles, que l'examen és demà!", "Acorda, que a prova é amanhã!"],
        ],
      },
      {
        heading: "Interjeições",
        text: "Algumas palavras curtas resumem uma reação: “Ostres!” (puxa!), “Déu n'hi do!” (nossa, e como!), “Mare de Déu!” (minha nossa!), “Au!” (vamos!), “Apa!” (vamos!, olha só!), “Vinga!” (vamos!, anda!). “Home!” e “Dona!” servem para chamar a atenção, como o nosso “cara!”.",
        examples: [["Déu n'hi do, quina calor que fa!", "Nossa, que calor que está fazendo!"]],
      },
    ],
    pitfalls: [
      "Não traduza ao pé da letra: “tocar el dos” não tem nada a ver com o número dois.",
      "Muitas expressões são informais: evite-as numa carta formal.",
      "“Fer dissabte” (faxina) não quer dizer “fazer algo no sábado”.",
    ],
    quiz: [
      { question: "O que quer dizer “fer campana”?", options: ["matar aula", "tocar o sino", "fazer festa"], answer: "matar aula", explanation: "Fer campana = faltar à aula sem motivo." },
      { question: "“Estou morto de cansaço” fica…", options: ["Estic fet pols.", "Estic fet pa.", "Estic a la lluna."], answer: "Estic fet pols.", explanation: "Estar fet pols = estar exausto." },
      { question: "O que quer dizer “tallar el bacallà”?", options: ["mandar, dar as cartas", "cozinhar peixe", "cortar gastos"], answer: "mandar, dar as cartas", explanation: "Quem talla el bacallà é quem decide." },
      { question: "“Chover canivetes” em catalão é…", options: ["ploure a bots i barrals", "ploure ganivets", "fer campana"], answer: "ploure a bots i barrals", explanation: "Bots e barrals são odres e barris." },
    ],
  },
  {
    id: "ca-g47",
    level: "B2.3",
    title: "Barbarismos: as formas do padrão",
    emoji: "🧹",
    summary: "Toda língua em contato com outra empresta palavras e construções. A norma do catalão registra, para vários empréstimos recentes do castelhano, qual é a forma do padrão: “haver de” em vez de “tenir que”, “adonar-se” em vez de “donar-se compte”. Na fala informal eles aparecem; em textos, prefere-se a forma catalã.",
    sections: [
      {
        heading: "As trocas mais comuns",
        table: {
          head: ["Evite", "Use", "Português"],
          rows: [
            ["tenir que", "haver de", "ter que"],
            ["hi ha que", "cal, s'ha de", "é preciso"],
            ["donar-se compte", "adonar-se", "perceber"],
            ["enterar-se", "assabentar-se", "ficar sabendo"],
            ["per suposat", "per descomptat", "é claro"],
            ["en quant a", "quant a, pel que fa a", "quanto a"],
            ["desde", "des de", "desde"],
            ["bueno", "bé, doncs", "bom, então"],
            ["vale", "d'acord, entesos", "tá bom"],
            ["tonteria", "ximpleria, bajanada", "bobagem"],
            ["dormir la siesta", "fer la migdiada", "tirar a sesta"],
            ["vaig a fer (futuro)", "faré", "vou fazer"],
          ],
        },
      },
      {
        heading: "Nem tudo que parece castelhano é barbarismo",
        text: "Muitas palavras são iguais nas duas línguas porque vêm do mesmo latim: “buscar”, “enfadar-se”, “mercat” estão corretas. Na dúvida, os dicionários do IEC e da AVL e o serviço de consultas Optimot mostram a forma recomendada.",
        examples: [
          ["He d'acabar aquest informe avui.", "Tenho que terminar este relatório hoje."],
          ["No m'havia adonat que era tan tard.", "Eu não tinha percebido que era tão tarde."],
          ["Cal portar el passaport.", "É preciso levar o passaporte."],
        ],
      },
    ],
    pitfalls: [
      "“Tenir que” → “haver de”: “He de marxar”.",
      "“Hi ha que” → “cal”: “Cal esperar”.",
      "Na conversa informal essas formas se ouvem muito; em textos, na escola e na imprensa, use a do padrão.",
    ],
    quiz: [
      { question: "Forma do padrão para “tenho que estudar”:", options: ["He d'estudiar.", "Tinc que estudiar.", "Hi ha que estudiar."], answer: "He d'estudiar.", explanation: "Obrigação: haver de." },
      { question: "Forma do padrão para “perceber”:", options: ["adonar-se", "donar-se compte", "enterar-se"], answer: "adonar-se", explanation: "adonar-se: “No me n'havia adonat”." },
      { question: "Forma do padrão para “é claro”:", options: ["per descomptat", "per suposat", "per supost"], answer: "per descomptat", explanation: "per descomptat (ou és clar)." },
      { question: "Qual destas palavras é catalã padrão?", options: ["buscar", "enterar-se", "desde"], answer: "buscar", explanation: "“buscar” é catalão correto; as outras têm forma própria (assabentar-se, des de)." },
    ],
  },
  {
    id: "ca-g48",
    level: "C1.1",
    title: "Os dialetos: oriental e ocidental",
    emoji: "🗺️",
    summary: "O catalão costuma ser dividido em dois blocos, numa classificação proposta por Manuel Milà i Fontanals em 1861: o oriental (central, balear, rossellonês e alguerês) e o ocidental (nord-occidental e valenciano). A diferença mais fácil de ouvir está nas vogais átonas.",
    sections: [
      {
        heading: "As vogais",
        text: "No oriental, o “a” e o “e” átonos se fundem num [ə] (“pare” [ˈpaɾə]); no central, o “o” átono soa [u] (“poma” e “cosí” [kuˈzi]). No ocidental, as vogais átonas continuam distintas: “pare” [ˈpaɾe], “cosí” [koˈzi]. O maiorquino tem ainda um [ə] tônico que os outros não têm.",
        table: {
          head: ["Palavra", "Central (Barcelona)", "Valenciano (Valência)", "Nord-occidental (Lleida)"],
          rows: [
            ["pare", "[ˈpaɾə]", "[ˈpaɾe]", "[ˈpaɾe]"],
            ["cosí", "[kuˈzi]", "[koˈzi]", "[koˈzi]"],
            ["mare", "[ˈmaɾə]", "[ˈmaɾe]", "[ˈmaɾe]"],
          ],
        },
      },
      {
        heading: "A 1ª pessoa do presente e outras marcas",
        table: {
          head: ["", "Central", "Nord-occidental", "Valenciano", "Balear"],
          rows: [
            ["eu falo", "parlo", "parlo", "parle", "parl"],
            ["eu canto", "canto", "canto", "cante", "cant"],
            ["hoje", "avui", "avui", "hui", "avui"],
            ["sair", "sortir", "eixir / sortir", "eixir", "sortir"],
          ],
        },
        text: "No nord-occidental ainda se ouve o artigo antigo “lo” (lo pare, lo gos), o mesmo de “Tirant lo Blanc”. Todas essas formas são corretas na sua região; a língua padrão escolhe umas para a escrita comum, sem torná-las “mais certas” que as outras.",
        examples: [
          ["Jo parlo català (Barcelona). Jo parle valencià (València).", "Eu falo catalão. Eu falo valenciano."],
          ["Lo meu germà viu a Lleida.", "O meu irmão mora em Lleida (com o artigo “lo” da região)."],
        ],
      },
    ],
    pitfalls: [
      "Não trate as variedades como “erradas”: “parle” é a forma normal em Valência.",
      "A divisão em oriental e ocidental é uma classificação dos linguistas; a língua é uma só.",
      "O [ə] das vogais átonas é típico do oriental; no valenciano o “e” átono soa [e].",
    ],
    quiz: [
      { question: "Como se diz “eu falo” em Valência?", options: ["parle", "parlo", "parl"], answer: "parle", explanation: "No valenciano, a 1ª pessoa do presente termina em -e." },
      { question: "E em Maiorca?", options: ["parl", "parle", "parli"], answer: "parl", explanation: "No balear, a 1ª pessoa não tem terminação: parl, cant." },
      { question: "“Hoje” no valenciano é…", options: ["hui", "avui", "ahir"], answer: "hui", explanation: "Valenciano: hui; central: avui." },
      { question: "Qual destes dialetos é ocidental?", options: ["valencià", "balear", "rossellonès"], answer: "valencià", explanation: "Ocidental: nord-occidental e valenciano." },
    ],
  },
  {
    id: "ca-g49",
    level: "C1.1",
    title: "O valenciano e as duas academias",
    emoji: "🍊",
    summary: "Na Comunidade Valenciana, o nome oficial da língua é “valencià”, e a norma é cuidada pela Acadèmia Valenciana de la Llengua (AVL), criada por lei em 1998. No resto do território, a referência é o Institut d'Estudis Catalans (IEC), fundado em 1907. As duas normas são muito próximas e aceitam formas uma da outra.",
    sections: [
      {
        heading: "Uma história de normas",
        text: "Em 1913 o IEC publicou as Normes ortogràfiques, preparadas por Pompeu Fabra. Em 1932, escritores e instituições valencianas assinaram em Castelló as “Normes de Castelló”, que adaptavam essa ortografia ao valenciano. Em 2005, um parecer da AVL afirmou que a língua própria dos valencianos é a mesma que se fala na Catalunha, nas Ilhas Baleares e em Andorra — por isso o app ensina tudo como uma língua só, mostrando as variantes. Na sociedade valenciana o nome e a identidade da língua ainda geram debate, e muitos falantes preferem dizer que falam valenciano.",
      },
      {
        heading: "Formas próprias do padrão valenciano",
        table: {
          head: ["Padrão do IEC (central)", "Padrão valenciano (AVL)", "Português"],
          rows: [
            ["parlo", "parle", "falo"],
            ["aquest, aquesta", "este, esta (ou aquest)", "este, esta"],
            ["aqueix (pouco usado)", "eixe, eixa", "esse, essa"],
            ["la meva, la teva", "la meua, la teua", "a minha, a sua"],
            ["tenir, venir", "tindre, vindre (ou tenir, venir)", "ter, vir"],
            ["que parlés", "que parlara (ou parlés)", "que falasse"],
            ["anglès, conèixer", "anglés, conéixer", "inglês, conhecer"],
            ["avui", "hui", "hoje"],
          ],
        },
        text: "No vocabulário do dia a dia também há diferenças: xiquet (nen), creïlla (patata), espill (mirall), granera (escombra), eixir (sortir). Muitas dessas palavras também aparecem nos dicionários do IEC.",
        examples: [
          ["Hui eixim a sopar amb els xiquets.", "Hoje vamos sair para jantar com as crianças. (valenciano)"],
          ["Esta és la meua casa.", "Esta é a minha casa. (valenciano)"],
        ],
      },
    ],
    pitfalls: [
      "“Este” e “meua” não são erros: são as formas do padrão valenciano.",
      "O acento de “anglés” (AVL) e “anglès” (IEC) mostra a pronúncia de cada região; as duas grafias são normativas.",
      "Sobre o nome da língua, siga o costume do lugar: em Valência, “valencià”.",
    ],
    quiz: [
      { question: "Quem cuida da norma na Comunidade Valenciana?", options: ["a AVL", "o IEC", "a RAE"], answer: "a AVL", explanation: "A Acadèmia Valenciana de la Llengua, criada por lei em 1998." },
      { question: "“A minha casa” no padrão valenciano é…", options: ["la meua casa", "la mia casa", "la meva casa de"], answer: "la meua casa", explanation: "Possessivo valenciano: meua, teua, seua." },
      { question: "Em que ano foram assinadas as Normes de Castelló?", options: ["1932", "1913", "1998"], answer: "1932", explanation: "1913: normas do IEC; 1932: Castelló; 1998: lei da AVL." },
      { question: "“Xiquet” quer dizer…", options: ["nen", "xic", "gos"], answer: "nen", explanation: "Xiquet = nen (menino, criança)." },
    ],
  },
  {
    id: "ca-g50",
    level: "C1.1",
    title: "Baleares, Alguer e Rossilhão; e o aranês, uma língua vizinha",
    emoji: "🏝️",
    summary: "O balear tem o artigo “salat” (es, sa), o alguerês é falado numa cidade da Sardenha desde o século XIV e o rossellonês convive com o francês desde 1659. No Vale de Aran, dentro da Catalunha, fala-se aranês, que não é catalão: é uma variedade do occitano.",
    sections: [
      {
        heading: "O balear",
        text: "O artigo vem do latim “ipse”: es, sa, ses (es cotxe, sa casa, ses cases); antes de vogal, s' (s'aigua). Há também o artigo pessoal “en” e “na” (en Joan, na Maria). A 1ª pessoa do presente não tem terminação (jo cant, jo parl), e muitas palavras são próprias: al·lot (menino), moix (gato), ca (cachorro), horabaixa (fim de tarde), idò (então). Restos do artigo salat existem também em alguns pontos da Costa Brava.",
        examples: [
          ["Idò, anam a sa platja?", "Então, vamos à praia? (maiorquino)"],
          ["S'al·lot juga amb es moix.", "O menino brinca com o gato. (maiorquino)"],
        ],
      },
      {
        heading: "O alguerês e o rossellonês",
        text: "Em Alghero (em catalão, l'Alguer), na Sardenha, o catalão chegou com colonos no século XIV e sobreviveu até hoje, cercado pelo sardo e pelo italiano; a lei italiana de 1999 sobre minorias linguísticas o reconhece. Tem traços próprios, como o l entre vogais que pode soar como r. No Rossilhão, a Catalunha do Norte, que passou à França com o Tratado dos Pireneus (1659), o catalão convive com o francês e usa muito a negação com “pas”: “No ho sé pas”.",
      },
      {
        heading: "O aranês",
        text: "No Vale de Aran, nos Pireneus, fala-se aranês, uma variedade do gascão, que é um dialeto do occitano — a língua dos trovadores medievais do sul da França. Desde o Estatuto de 2006, o occitano (aranês em Aran) é língua oficial na Catalunha, ao lado do catalão e do castelhano. Parece catalão em muitas palavras, mas tem gramática e ortografia próprias: “obrigado” é “mercés”.",
      },
    ],
    pitfalls: [
      "“Es” e “sa” no balear são artigos, não pronomes: “sa platja” é “a praia”.",
      "O aranês não é um dialeto do catalão, e sim do occitano.",
      "No Rossilhão, o “pas” da negação é normal, não um erro.",
    ],
    quiz: [
      { question: "O que quer dizer “sa casa” em maiorquino?", options: ["la casa", "la seva casa", "aquesta casa"], answer: "la casa", explanation: "Artigo salat: sa = la." },
      { question: "O aranês é uma variedade de qual língua?", options: ["occità", "català", "basc"], answer: "occità", explanation: "Aranês = gascão, dialeto do occitano." },
      { question: "Em que ano o Rossilhão passou à França?", options: ["1659", "1714", "1492"], answer: "1659", explanation: "Tratado dos Pireneus, 1659." },
      { question: "“Moix” em maiorquino é…", options: ["gat", "gos", "noi"], answer: "gat", explanation: "Moix = gato; ca = cachorro." },
    ],
  },
  {
    id: "ca-g51",
    level: "C1.2",
    title: "A nominalização e o estilo científico",
    emoji: "🔬",
    summary: "Os textos científicos e técnicos preferem substantivos a verbos (la reducció del consum em vez de “reduir el consum”), a passiva pronominal (s'observa, es constata) e uma terminologia própria, coordenada pelo TERMCAT.",
    sections: [
      {
        heading: "Do verbo ao substantivo",
        table: {
          head: ["Verbo", "Substantivo", "Português"],
          rows: [
            ["investigar", "la investigació", "a pesquisa"],
            ["créixer", "el creixement", "o crescimento"],
            ["analitzar", "l'anàlisi (f.)", "a análise"],
            ["reduir", "la reducció", "a redução"],
            ["augmentar", "l'augment", "o aumento"],
            ["disminuir", "la disminució", "a diminuição"],
            ["descobrir", "el descobriment", "a descoberta"],
          ],
        },
        examples: [
          ["La reducció de les emissions és l'objectiu principal.", "A redução das emissões é o objetivo principal."],
          ["S'observa un augment del 12 % en les temperatures mitjanes.", "Observa-se um aumento de 12% nas temperaturas médias."],
        ],
      },
      {
        heading: "Termos, números e cautela",
        text: "O TERMCAT propõe termos catalães para conceitos novos: maquinari (hardware), programari (software), correu brossa (spam), en línia (on-line). Os números usam vírgula decimal e o símbolo de porcentagem separado por espaço: “el 12,5 %”, ou por extenso, “un 12,5 per cent”. E o texto científico evita certezas absolutas: “sembla que”, “les dades indiquen”, “podria explicar”.",
        examples: [
          ["Segons les dades, el fenomen podria estar relacionat amb el clima.", "Segundo os dados, o fenômeno poderia estar relacionado com o clima."],
          ["Cal instal·lar el programari abans de connectar el maquinari.", "É preciso instalar o software antes de conectar o hardware."],
        ],
      },
    ],
    pitfalls: [
      "“L'anàlisi” é feminino: “una anàlisi detallada”.",
      "Porcentagem com espaço: “12 %”.",
      "Prefira o termo catalão quando existe: “programari”, “en línia”.",
    ],
    quiz: [
      { question: "Substantivo de “créixer”:", options: ["el creixement", "la creixença", "el crescut"], answer: "el creixement", explanation: "créixer → el creixement." },
      { question: "Complete: “Es va fer ___ anàlisi molt detallada.”", options: ["una", "un", "uns"], answer: "una", explanation: "anàlisi é feminino." },
      { question: "“Software” em catalão padrão é…", options: ["programari", "maquinari", "programació"], answer: "programari", explanation: "programari = software; maquinari = hardware." },
      { question: "Complete: “___ un augment de la temperatura.”", options: ["S'observa", "Observa", "Se observa"], answer: "S'observa", explanation: "Passiva pronominal: s'observa." },
    ],
  },
  {
    id: "ca-g52",
    level: "C1.2",
    title: "Estilo jornalístico e administrativo",
    emoji: "📰",
    summary: "A notícia vai direto ao fato, com manchete no presente e as fontes citadas. O texto administrativo segue fórmulas fixas, como a “instància” com as partes EXPOSO e SOL·LICITO, e evita expressões vagas como “a nivell de” ou “en base a”.",
    sections: [
      {
        heading: "A notícia",
        text: "Manchetes no presente e sem artigos desnecessários: “El Parlament aprova la llei de residus”. O primeiro parágrafo responde qui, què, quan, on i per què. As declarações se atribuem com verbos variados: ha declarat, ha explicat, ha afirmat, segons fonts de…",
        examples: [
          ["L'Ajuntament de Girona obre una nova biblioteca al barri de Sant Narcís.", "A Prefeitura de Girona abre uma nova biblioteca no bairro de Sant Narcís."],
          ["Segons ha explicat la directora, el centre obrirà cada dia.", "Segundo explicou a diretora, o centro abrirá todos os dias."],
        ],
      },
      {
        heading: "A instância",
        text: "O requerimento formal à administração tem partes fixas: os dados de quem pede; EXPOSO (os fatos, em frases numeradas: “Que vaig presentar la sol·licitud el dia…”); SOL·LICITO (o pedido: “Que se'm concedeixi…”); lugar, data e assinatura; e o órgão a quem se dirige.",
        table: {
          head: ["Evite", "Use", "Português"],
          rows: [
            ["a nivell de", "pel que fa a, en l'àmbit de", "no que diz respeito a"],
            ["en base a", "a partir de, sobre la base de", "com base em"],
            ["de cara a", "per a, amb vista a", "tendo em vista"],
            ["hi ha que", "cal", "é preciso"],
            ["és per això que", "per això", "é por isso que"],
          ],
        },
        examples: [["Sol·licito: Que se'm concedeixi la beca d'estudis.", "Solicito: Que me seja concedida a bolsa de estudos."]],
      },
    ],
    pitfalls: [
      "Manchete no presente: “El Govern presenta…”, não “El Govern ha presentat…”.",
      "Na instância, EXPOSO (fatos) vem antes de SOL·LICITO (pedido).",
      "Troque “a nivell de” por “pel que fa a”.",
    ],
    quiz: [
      { question: "Na instância, qual parte traz o pedido?", options: ["Sol·licito", "Exposo", "Atentament"], answer: "Sol·licito", explanation: "Exposo = fatos; Sol·licito = pedido." },
      { question: "Forma recomendada no lugar de “en base a”:", options: ["a partir de", "a nivell de", "de cara a"], answer: "a partir de", explanation: "“en base a” se troca por “a partir de” ou “sobre la base de”." },
      { question: "Qual manchete segue o estilo jornalístico?", options: ["El Parlament aprova la llei.", "El Parlament ha aprovat la llei ahir.", "El Parlament aprovarà ahir la llei."], answer: "El Parlament aprova la llei.", explanation: "Manchete no presente, curta." },
      { question: "Forma recomendada no lugar de “a nivell de salut”:", options: ["pel que fa a la salut", "de cara a la salut", "en base a la salut"], answer: "pel que fa a la salut", explanation: "“a nivell de” só se usa para níveis de verdade (a nivell del mar)." },
    ],
  },
  {
    id: "ca-g53",
    level: "C2",
    title: "Os clássicos: de Llull a Maragall",
    emoji: "✒️",
    summary: "A literatura catalã tem oito séculos. Três momentos para conhecer: a Idade Média de Ramon Llull, o “Segle d'Or” valenciano do século XV (Ausiàs March, “Tirant lo Blanc”) e a Renaixença do século XIX (Verdaguer, e depois Maragall).",
    sections: [
      {
        heading: "Idade Média e Segle d'Or",
        text: "Ramon Llull (c. 1232–1316), de Maiorca, escreveu em catalão, latim e árabe; o “Blanquerna” e o “Llibre de meravelles” usam o catalão para a filosofia e para o romance. No século XV, Valência viveu o seu “Segle d'Or”. Ausiàs March renovou a poesia amorosa e moral; Joanot Martorell escreveu “Tirant lo Blanc”, publicado em Valência em 1490, que Cervantes, no “Dom Quixote”, fez um personagem chamar de o melhor livro do mundo no seu estilo. Um verso de March muito citado:",
        examples: [
          ["Veles e vents han mos desigs complir, / faent camins dubtosos per la mar.", "Velas e ventos hão de cumprir os meus desejos, / fazendo caminhos incertos pelo mar. (Ausiàs March, século XV)"],
        ],
      },
      {
        heading: "Renaixença e Modernisme",
        text: "Depois de séculos em que a literatura culta se escreveu sobretudo em castelhano, a Renaixença do século XIX recuperou o catalão literário. Os Jocs Florals, restaurados em Barcelona em 1859, premiaram Jacint Verdaguer, autor dos poemas épicos “L'Atlàntida” (1877) e “Canigó” (1886). Joan Maragall (1860–1911) defendeu a “paraula viva”, a poesia próxima da fala; “La vaca cega” começa assim:",
        examples: [
          ["Topant de cap en una i altra soca, / avançant d'esma pel camí de l'aigua, / se'n ve la vaca tota sola. És cega.", "Batendo a cabeça num e noutro tronco, / avançando por instinto pelo caminho da água, / vem a vaca sozinha. É cega. (Joan Maragall)"],
        ],
      },
      {
        heading: "Século XX",
        text: "No século XX, a literatura catalã seguiu viva apesar das proibições do franquismo. Um romance muito traduzido é “La plaça del Diamant” (1962), de Mercè Rodoreda, sobre a vida de uma mulher em Barcelona antes, durante e depois da Guerra Civil.",
      },
    ],
    pitfalls: [
      "Os textos medievais têm ortografia antiga (“e” por “i”, “mos” por “els meus”): leia em edição anotada.",
      "“Tirant lo Blanc” usa o artigo antigo “lo”, ainda vivo em Lleida.",
      "Verdaguer e Maragall são do século XIX; Llull, do XIII; March e Martorell, do XV.",
    ],
    quiz: [
      { question: "Quem escreveu “Tirant lo Blanc”?", options: ["Joanot Martorell", "Ramon Llull", "Jacint Verdaguer"], answer: "Joanot Martorell", explanation: "Publicado em Valência em 1490." },
      { question: "Em que século viveu Ausiàs March?", options: ["segle XV", "segle XIII", "segle XIX"], answer: "segle XV", explanation: "O Segle d'Or valenciano." },
      { question: "Quem escreveu “Canigó”?", options: ["Jacint Verdaguer", "Joan Maragall", "Ausiàs March"], answer: "Jacint Verdaguer", explanation: "Canigó, 1886." },
      { question: "O que defendia Maragall?", options: ["la paraula viva", "l'article salat", "les Normes de Castelló"], answer: "la paraula viva", explanation: "A poesia próxima da fala." },
    ],
  },
  {
    id: "ca-g54",
    level: "C2",
    title: "Provérbios e o catalão antigo",
    emoji: "🏺",
    summary: "Os provérbios (“refranys”) guardam a sabedoria do campo e do mar, e o catalão antigo aparece em textos desde o século XII, como as Homilies d'Organyà. Conhecer os dois ajuda a ler literatura e a entender as conversas dos mais velhos.",
    sections: [
      {
        heading: "Refranys",
        table: {
          head: ["Refrany", "Sentido", "Equivalente em português"],
          rows: [
            ["De mica en mica s'omple la pica.", "pouco a pouco se chega lá", "De grão em grão a galinha enche o papo."],
            ["Qui no vulgui pols, que no vagi a l'era.", "quem não aceita as consequências não se meta", "Quem sai na chuva é pra se molhar."],
            ["Qui matina, fa farina.", "quem acorda cedo produz mais", "Deus ajuda quem cedo madruga."],
            ["No diguis blat fins que no sigui al sac i ben lligat.", "não conte com algo antes de tê-lo", "Não conte com o ovo antes da galinha."],
            ["Val més un boig conegut que un savi per conèixer.", "melhor o conhecido que o incerto", "Mais vale um pássaro na mão…"],
            ["Qui dia passa, any empeny.", "um dia de cada vez", "Um dia de cada vez."],
            ["On menja un, mengen dos.", "sempre dá para dividir", "Onde come um, comem dois."],
            ["A l'abril, cada gota val per mil.", "a chuva de abril é preciosa para o campo", "Chuva de abril vale ouro."],
          ],
        },
      },
      {
        heading: "O catalão antigo",
        text: "As Homilies d'Organyà, sermões do fim do século XII encontrados em 1904 na casa paroquial de Organyà, estão entre os textos mais antigos inteiramente em catalão. No século XIII, o rei Jaume I ditou o “Llibre dels fets”, a primeira das quatro grandes crônicas medievais. No catalão antigo, “e” era a conjunção “i”, o artigo masculino era muitas vezes “lo” e havia formas como “mos” (os meus) e “llur” (deles).",
        examples: [
          ["Qui no vulgui pols, que no vagi a l'era.", "Quem não quer poeira que não vá à eira."],
          ["Qui matina, fa farina.", "Quem madruga faz farinha."],
        ],
      },
    ],
    pitfalls: [
      "Os refranys não se traduzem palavra por palavra: procure o equivalente.",
      "“Era” no provérbio é a eira (lugar de debulhar), não o verbo ser.",
      "No catalão antigo, “e” = “i” (e); não confunda com o “e” átono de hoje.",
    ],
    quiz: [
      { question: "Qual refrany corresponde a “Deus ajuda quem cedo madruga”?", options: ["Qui matina, fa farina.", "On menja un, mengen dos.", "Qui dia passa, any empeny."], answer: "Qui matina, fa farina.", explanation: "Matinar = madrugar." },
      { question: "As Homilies d'Organyà são do…", options: ["segle XII", "segle XV", "segle XIX"], answer: "segle XII", explanation: "Fim do século XII; encontradas em 1904." },
      { question: "Quem ditou o “Llibre dels fets”?", options: ["Jaume I", "Ramon Llull", "Ausiàs March"], answer: "Jaume I", explanation: "O rei Jaume I, no século XIII." },
      { question: "Complete: “De mica en mica s'omple la ___.”", options: ["pica", "casa", "boca"], answer: "pica", explanation: "A pica é a pia (de pedra)." },
    ],
  },
  {
    id: 'ca-g39',
    level: 'B2.4',
    title: "Numerais, expressão da hora (sistema de quarts) e datas",
    emoji: '🔢',
    summary:
      'A regra do hífen nos numerais (entre dezena e unidade, e entre unidade e centena — mas com espaço entre o bloco da centena e o que vem depois), a concordância de gênero dos cardinais, o sistema tradicional catalão de horas por quartos ("sistema de quarts") e a sintaxe culta na indicação de datas e anos.',
    sections: [
      {
        heading: 'Numerais cardinais, concordância e o hífen',
        text: "Os numerais em catalão concordam em gênero no “2” (dos/dues) e nas centenas (dos-cents/dues-centes). O hífen aparece em dois lugares: entre dezena e unidade (“trenta-quatre”; só o “vint” usa “-i-”: “vint-i-dos”) e entre unidade e centena, para formar a própria centena (“dos-cents”, “cinc-centes”). Mas depois do bloco da centena, antes da dezena/unidade seguinte, fica um espaço, não hífen: “dos-cents quaranta-tres”, não “dos-cents-quaranta-tres”.",
        table: {
          head: ['Numeral/regra', 'Exemplo em catalão', 'Explicação'],
          rows: [
            ['Concordância de gênero (2)', 'dos homes / dues dones', 'usam-se “dos” (masc.) e “dues” (fem.)'],
            ['Concordância nas centenas', 'dos-cents euros / dues-centes pàgines', 'a centena flexiona em gênero, com hífen interno'],
            ['Hífen entre dezena e unidade', 'vint-i-dos / trenta-quatre', 'hífen sempre; só “vint” leva “-i-”'],
            ['Espaço entre centena e o resto', 'dos-cents quaranta-tres', 'depois do bloco da centena vem um espaço, não hífen'],
          ],
        },
        examples: [
          ['Tinc dues-centes trenta-dues pàgines per llegir.', 'Tenho duzentas e trinta e duas páginas para ler.'],
          ['A la reunió hi havia quatre-cents cinquanta assistents.', 'Na reunião havia quatrocentos e cinquenta participantes.'],
        ],
      },
      {
        heading: 'A hora: o sistema tradicional de quartos ("sistema de quarts")',
        text: 'O catalão tem um sistema tradicional, muito usado na fala e na mídia, que conta quantos quartos de hora já passaram a caminho da PRÓXIMA hora: [quantidade de quartos] + “de” + [hora seguinte]. Para os minutos que não caem exatamente num quarto, soma-se “i cinc” ou “i deu” (sempre somando, nunca subtraindo).',
        table: {
          head: ['Hora', 'Sistema de quarts', 'Lógica'],
          rows: [
            ['03:15', 'un quart de quatre', '1 quarto a caminho das 4'],
            ['03:30', 'dos quarts de quatre', '2 quartos a caminho das 4'],
            ['03:45', 'tres quarts de quatre', '3 quartos a caminho das 4'],
            ['03:20', 'un quart i cinc de quatre', '1 quarto + 5 min a caminho das 4'],
            ['03:40', 'dos quarts i deu de quatre', '2 quartos + 10 min a caminho das 4'],
          ],
        },
        examples: [
          ['Ens trobarem a dos quarts de deu del vespre.', 'Nos encontraremos às nove e meia da noite.'],
          ["El tren surt a tres quarts d'una.", 'O trem sai ao meio-dia e quarenta e cinco (ou 0h45).'],
        ],
      },
      {
        heading: 'Datas, dias da semana e anos',
        text: 'O ano não leva “en” (isso é castelhano): usa-se o artigo, “el 2026”, ou “l\'any 2026”. Nas datas completas, “el” + dia + “de” + mês. Para um dia específico da semana, artigo no singular (“el dilluns”); para algo que se repete toda semana, artigo no plural (“els dissabtes”).',
        table: {
          head: ['Elemento', 'Exemplo em catalão', 'Tradução'],
          rows: [
            ['Ano (sem “en”)', "El concert serà el 2026 (ou l'any 2026).", 'O show será em 2026.'],
            ['Data completa', 'Avui és el 28 de setembre.', 'Hoje é 28 de setembro.'],
            ['Dia específico', 'El dilluns tinc examen de català.', 'Na segunda-feira tenho prova de catalão.'],
            ['Recorrência', 'Els dissabtes faig esport.', 'Aos sábados faço esporte.'],
          ],
        },
        examples: [
          ["L'empresa es va fundar l'any 1998.", 'A empresa foi fundada no ano de 1998.'],
          ['Ens veiem el divendres que ve a les tres.', 'Nos vemos na próxima sexta-feira às três horas.'],
        ],
      },
    ],
    pitfalls: [
      'Nada de “en” antes do ano: “el 2026” ou “l\'any 2026”, nunca “en 2026”.',
      "“Dos” é masculino: nas horas, sempre feminino, “són les dues”, nunca “són les dos”.",
      "Entre o bloco da centena e o que vem depois é espaço, não hífen: “dos-cents quaranta-tres”, não “dos-cents-quaranta-tres”.",
    ],
    quiz: [
      {
        question: 'Como se diz 07:30 no sistema tradicional de quartos?',
        options: ['dos quarts de vuit', "dos quarts d'vuit", 'set i mitja'],
        answer: 'dos quarts de vuit',
        explanation: '07:30 é “dois quartos a caminho das oito”. “Vuit” começa com consoante (som [b]), então não há elisão: “de vuit”, não “d\'vuit”.',
      },
      {
        question: 'Como se diz corretamente “faremos a viagem em 2025”?',
        options: ['Farem el viatge en 2025.', 'Farem el viatge el 2025.', 'Farem el viatge a 2025.'],
        answer: 'Farem el viatge el 2025.',
        explanation: 'Catalão não usa “en” com anos isolados: “el 2025” ou “l\'any 2025”.',
      },
    ],
  },
];
