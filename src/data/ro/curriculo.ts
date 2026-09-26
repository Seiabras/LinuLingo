import type { UnitSeed } from '../types';

/**
 * Trilha CEFR do romeno. Cada unidade abre com um card "Aprenda primeiro"
 * (história, cultura, gramática e escrita) e segue com lições, um desafio de
 * voz e a prova da unidade. A prova junta o conteúdo das outras lições.
 */
export const UNITS_RO: UnitSeed[] = [
  {
    id: 'ro-u1',
    cefr: 'A1',
    title: 'Primeiros passos',
    emoji: '👋',
    card: {
      id: 'ro-c1',
      title: 'Uma ilha latina no Leste Europeu',
      emoji: '🏛️',
      history:
        'Em 106 d.C. o imperador Trajano conquistou a Dácia. O latim falado por colonos e soldados se misturou ao falar local e deu origem ao romeno, a única grande língua românica do Leste Europeu, cercada por línguas eslavas, pelo húngaro e pelo grego. Por isso apă, pâine e casă soam tão familiares a quem fala português.',
      culture_tip:
        '«Bună!» é o «oi» do dia a dia. Com desconhecidos e pessoas mais velhas, use «Bună ziua» (bom dia / boa tarde). Para se despedir, «La revedere»; entre amigos, «Pa!».',
      grammar_why:
        'Por que «Bună» e não «Bun»? A saudação vem de «bună ziua», e zi (dia) é feminino, então o adjetivo concorda: bun (m) → bună (f). É o mesmo mecanismo do português: bom dia, mas boa tarde.',
      grammar_examples: [
        ['Bună ziua!', 'Bom dia! / Boa tarde!'],
        ['Bună seara!', 'Boa noite! (ao chegar)'],
        ['Noapte bună!', 'Boa noite! (ao dormir)'],
      ],
      character_guide: [
        ['ă', 'vogal neutra, como o «a» átono de «casa»', 'casă'],
        ['â / î', '«i» dito com a língua recuada, sem arredondar os lábios', 'mâine, în'],
        ['ș', '«ch» de «chave»', 'școală'],
        ['ț', '«ts» de «tsunami»', 'țară'],
        ['ce / ci', '«tche» / «tchi», como em «tchau»', 'ce, cinci'],
        ['che / chi', '«que» / «qui» (som de k)', 'cheie'],
        ['ge / gi', '«dje» / «dji»', 'a merge'],
      ],
    },
    lessons: [
      {
        id: 'ro-u1-l1',
        title: 'Oi, tudo bem?',
        kind: 'licao',
        words: ['bună', 'mulțumesc', 'da', 'nu', 'la revedere', 'vă rog'],
        cloze: [
          { sentence: 'Sunt ___, mulțumesc.', answer: 'bine', options: ['bine', 'casă', 'tren'], translation: 'Estou bem, obrigado.' },
          { sentence: '___ frumos pentru ajutor!', answer: 'Mulțumesc', options: ['Mulțumesc', 'Bună', 'Nu'], translation: 'Muito obrigado pela ajuda!' },
          { sentence: 'O cafea, ___ rog.', answer: 'vă', options: ['vă', 'eu', 'nu'], translation: 'Um café, por favor.' },
        ],
        voice: {
          bot: 'Bună! Ce faci?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bine, mulțumesc!', 'bine', 'foarte bine', 'sunt bine'],
          hint: 'Diga que está bem e agradeça.',
        },
        communityPrompt: 'Cumprimente alguém e diga como você está (2 frases).',
      },
      {
        id: 'ro-u1-l2',
        title: 'Eu sou do Brasil',
        kind: 'licao',
        words: ['eu', 'tu', 'el', 'ea', 'noi', 'nume'],
        cloze: [
          { sentence: 'Eu ___ din Brazilia.', answer: 'sunt', options: ['sunt', 'ești', 'este'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Tu ___ din Portugalia?', answer: 'ești', options: ['ești', 'sunt', 'suntem'], translation: 'Você é de Portugal?' },
          { sentence: 'Ea se ___ Ana.', answer: 'numește', options: ['numește', 'face', 'are'], translation: 'Ela se chama Ana.' },
        ],
        voice: {
          bot: 'Cum te numești?',
          botTranslation: 'Como você se chama?',
          expected: ['Mă numesc Ana.', 'mă numesc', 'numele meu este', 'sunt'],
          hint: 'Comece com «Mă numesc…» (Eu me chamo…).',
        },
        communityPrompt: 'Apresente-se: nome, de onde você é e onde mora.',
      },
      {
        id: 'ro-u1-l3',
        title: 'Desafio de voz: primeira conversa',
        kind: 'voz',
        words: ['a vorbi', 'a înțelege', 'limbă', 'cuvânt', 'scuzați', 'a spune'],
        cloze: [
          { sentence: 'Vorbiți ___?', answer: 'engleză', options: ['engleză', 'masă', 'apă'], translation: 'O senhor fala inglês?' },
          { sentence: 'Nu ___. Mai încet, vă rog.', answer: 'înțeleg', options: ['înțeleg', 'mănânc', 'plec'], translation: 'Não entendo. Mais devagar, por favor.' },
          { sentence: 'Cum se ___ „obrigado” în română?', answer: 'spune', options: ['spune', 'bea', 'vede'], translation: 'Como se diz «obrigado» em romeno?' },
        ],
        voice: {
          bot: 'Vorbești română?',
          botTranslation: 'Você fala romeno?',
          expected: ['Da, puțin!', 'puțin', 'vorbesc', 'da', 'nu'],
          hint: 'Responda «Da, puțin!» (Sim, um pouco!).',
        },
        communityPrompt: 'Grave-se dizendo «Vorbesc puțin română» e mais uma frase sua.',
      },
      {
        id: 'ro-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bună ziua! De unde sunteți?',
          botTranslation: 'Bom dia! De onde o(a) senhor(a) é?',
          expected: ['Sunt din Brazilia.', 'sunt din', 'din'],
          hint: 'Diga de onde você é: «Sunt din…».',
        },
        communityPrompt: 'Escreva uma pequena apresentação completa: saudação, nome, origem e despedida.',
      },
    ],
  },
  {
    id: 'ro-u2',
    cefr: 'A1',
    title: 'No café e no restaurante',
    emoji: '🍽️',
    card: {
      id: 'ro-c2',
      title: 'Mesa romena: mămăligă, sarmale e «Poftă bună!»',
      emoji: '🥘',
      history:
        'A cozinha romena é um mapa de influências. A mămăligă (polenta de milho) se espalhou com o milho vindo das Américas e virou o «pão» do camponês. As sarmale vêm da cozinha otomana (turco sarma, «enrolado»). A ciorbă, sopa azedada com borș (farelo fermentado) ou limão, também tem nome de origem turca.',
      culture_tip:
        'Antes de comer, deseje «Poftă bună!» (bom apetite). No brinde, olhe nos olhos e diga «Noroc!» (sorte / saúde). Para chamar o garçom, levante a mão e diga «Scuzați!». Estalar os dedos é falta de educação. A gorjeta costuma ficar em torno de 10%.',
      grammar_why:
        'Por que «vinul» e «cafeaua»? Em romeno o artigo definido vem colado no FIM da palavra: vin → vinul (o vinho), masă → masa (a mesa). O artigo indefinido continua antes: un vin, o cafea. Essa posição final é um traço balcânico, e o búlgaro e o albanês fazem o mesmo.',
      grammar_examples: [
        ['un vin → vinul', 'um vinho → o vinho'],
        ['o masă → masa', 'uma mesa → a mesa'],
        ['un meniu → meniul', 'um cardápio → o cardápio'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u2-l1',
        title: 'Um café, por favor',
        kind: 'licao',
        words: ['cafea', 'apă', 'ceai', 'lapte', 'bere', 'vin'],
        cloze: [
          { sentence: 'O ___ cu lapte, vă rog.', answer: 'cafea', options: ['cafea', 'stradă', 'cheie'], translation: 'Um café com leite, por favor.' },
          { sentence: 'Un pahar de ___, vă rog.', answer: 'apă', options: ['apă', 'pat', 'tren'], translation: 'Um copo de água, por favor.' },
          { sentence: 'O bere ___, vă rog.', answer: 'rece', options: ['rece', 'albastru', 'obosit'], translation: 'Uma cerveja gelada, por favor.' },
        ],
        voice: {
          bot: 'Bună ziua! Ce doriți să beți?',
          botTranslation: 'Boa tarde! O que deseja beber?',
          expected: ['O cafea, vă rog.', 'cafea', 'ceai', 'bere', 'apă', 'vin'],
          hint: 'Peça uma bebida e termine com «vă rog».',
        },
        communityPrompt: 'Peça sua bebida favorita num café de Bucareste.',
      },
      {
        id: 'ro-u2-l2',
        title: 'Pratos típicos',
        kind: 'licao',
        words: ['mămăligă', 'sarmale', 'ciorbă', 'brânză', 'pâine', 'carne'],
        cloze: [
          { sentence: 'Mămăligă cu ___ și smântână.', answer: 'brânză', options: ['brânză', 'ușă', 'muncă'], translation: 'Polenta com queijo e creme azedo.' },
          { sentence: 'De Crăciun mâncăm ___.', answer: 'sarmale', options: ['sarmale', 'bilete', 'ferestre'], translation: 'No Natal comemos sarmale.' },
          { sentence: 'Îmi aduceți ___, vă rog?', answer: 'meniul', options: ['meniul', 'meniu', 'o meniu'], translation: 'Pode me trazer o cardápio, por favor?' },
        ],
        voice: {
          bot: 'Ce doriți să mâncați?',
          botTranslation: 'O que deseja comer?',
          expected: ['Aș dori sarmale, vă rog.', 'sarmale', 'ciorbă', 'mămăligă', 'carne', 'pește', 'aș dori', 'vreau'],
          hint: '«Aș dori…» = «Eu gostaria de…».',
        },
        communityPrompt: 'Descreva seu prato favorito em romeno (2 ou 3 frases).',
      },
      {
        id: 'ro-u2-l3',
        title: 'Desafio de voz: a conta',
        kind: 'voz',
        words: ['notă', 'ospătar', 'a plăti', 'bani', 'leu', 'poftă bună'],
        cloze: [
          { sentence: '___, vă rog.', answer: 'Nota', options: ['Nota', 'Poarta', 'Gara'], translation: 'A conta, por favor.' },
          { sentence: 'Pot să ___ cu cardul?', answer: 'plătesc', options: ['plătesc', 'dorm', 'beau'], translation: 'Posso pagar com cartão?' },
          { sentence: 'Costă zece ___.', answer: 'lei', options: ['lei', 'leu', 'leul'], translation: 'Custa dez lei.' },
        ],
        voice: {
          bot: 'A fost bine? Mai doriți ceva?',
          botTranslation: 'Estava bom? Deseja mais alguma coisa?',
          expected: ['Nu, mulțumesc. Nota, vă rog.', 'nota', 'nu, mulțumesc', 'mulțumesc'],
          hint: 'Agradeça e peça a conta.',
        },
        communityPrompt: 'Escreva o que você diria ao garçom para elogiar a comida e pedir a conta.',
      },
      {
        id: 'ro-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Noroc!',
          botTranslation: 'Saúde!',
          expected: ['Noroc!', 'noroc'],
          hint: 'Responda ao brinde.',
        },
        communityPrompt: 'Conte em romeno o que você comeu e bebeu hoje.',
      },
    ],
  },
  {
    id: 'ro-u3',
    cefr: 'A2',
    title: 'Viagens e check-in no hotel',
    emoji: '✈️',
    card: {
      id: 'ro-c3',
      title: '«Dumneavoastră»: o senhor que virou pronome',
      emoji: '🎩',
      history:
        'O tratamento formal «dumneavoastră» vem do latim «domina vostra» (vossa senhoria), a mesma ideia do nosso «Vossa Mercê», que virou «você». Em português ele ficou informal, mas em romeno continua plenamente formal.',
      culture_tip:
        'Na recepção, no aeroporto e com pessoas mais velhas, use o registro formal: «vă rog» em vez de «te rog» e o verbo no plural («aveți», «puteți»). Tratar um desconhecido por «tu» soa íntimo demais.',
      grammar_why:
        'Por que «aveți» e não «ai»? O tratamento formal usa o verbo na 2ª pessoa do plural, como o «vous» do francês: tu ai (você tem, informal) → dumneavoastră aveți (o senhor tem). O mesmo vale para «te rog» (informal) → «vă rog» (formal).',
      grammar_examples: [
        ['Ai o rezervare?', 'Você tem uma reserva? (informal)'],
        ['Aveți o rezervare?', 'O senhor tem uma reserva? (formal)'],
        ['Puteți să mă ajutați?', 'O senhor pode me ajudar?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u3-l1',
        title: 'No aeroporto',
        kind: 'licao',
        words: ['aeroport', 'avion', 'zbor', 'bilet', 'pașaport', 'valiză'],
        cloze: [
          { sentence: 'Avionul pleacă de la ___ patru.', answer: 'poarta', options: ['poarta', 'masa', 'cartea'], translation: 'O avião sai do portão quatro.' },
          { sentence: 'Zborul are ___.', answer: 'întârziere', options: ['întârziere', 'cafea', 'zăpadă'], translation: 'O voo está atrasado.' },
          { sentence: '___, vă rog.', answer: 'Pașaportul', options: ['Pașaportul', 'Pașaport', 'Un pașaport'], translation: 'O passaporte, por favor.' },
        ],
        voice: {
          bot: 'Bună ziua! Pașaportul, vă rog.',
          botTranslation: 'Bom dia! O passaporte, por favor.',
          expected: ['Poftiți!', 'poftiți', 'poftim', 'da'],
          hint: '«Poftiți!» = «Aqui está!» (formal).',
        },
        communityPrompt: 'Conte em 2 frases para onde você viajaria na Romênia e por quê.',
      },
      {
        id: 'ro-u3-l2',
        title: 'Reservas no hotel',
        kind: 'licao',
        words: ['hotel', 'cameră', 'rezervare', 'cheie', 'recepție', 'mic dejun'],
        cloze: [
          { sentence: 'Am o ___ pe numele Ana.', answer: 'rezervare', options: ['rezervare', 'ploaie', 'soră'], translation: 'Tenho uma reserva em nome de Ana.' },
          { sentence: 'Micul dejun este ___?', answer: 'inclus', options: ['inclus', 'trist', 'verde'], translation: 'O café da manhã está incluído?' },
          { sentence: 'Aveți o ___ liberă?', answer: 'cameră', options: ['cameră', 'carte', 'cină'], translation: 'O senhor tem um quarto livre?' },
        ],
        voice: {
          bot: 'Bună seara! Cu ce vă pot ajuta?',
          botTranslation: 'Boa noite! Como posso ajudá-lo?',
          expected: ['Am o rezervare pe numele Silva.', 'rezervare', 'cameră'],
          hint: '«Am o rezervare pe numele…» = «Tenho uma reserva em nome de…».',
        },
        communityPrompt: 'Escreva uma mensagem curta e formal pedindo um quarto para duas noites.',
      },
      {
        id: 'ro-u3-l3',
        title: 'Desafio de voz: de trem',
        kind: 'voz',
        words: ['tren', 'gară', 'autobuz', 'mașină', 'drum', 'stradă'],
        cloze: [
          { sentence: 'Unde este ___?', answer: 'gara', options: ['gara', 'gară', 'o gară'], translation: 'Onde fica a estação?' },
          { sentence: 'Trenul ___ la ora trei.', answer: 'ajunge', options: ['ajunge', 'mănâncă', 'doarme'], translation: 'O trem chega às três.' },
          { sentence: '___ bun!', answer: 'Drum', options: ['Drum', 'Pat', 'Ou'], translation: 'Boa viagem!' },
        ],
        voice: {
          bot: 'Un bilet pentru Brașov? Dus sau dus-întors?',
          botTranslation: 'Uma passagem para Brașov? Só ida ou ida e volta?',
          expected: ['Dus-întors, vă rog.', 'dus-întors', 'dus', 'întors'],
          hint: '«Dus» = só ida; «dus-întors» = ida e volta.',
        },
        communityPrompt: 'Descreva como você vai do aeroporto até o hotel.',
      },
      {
        id: 'ro-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'La ce oră pleacă trenul?',
          botTranslation: 'A que horas sai o trem?',
          expected: ['La ora zece.', 'la ora', 'ora'],
          hint: '«La ora…» = «Às … horas».',
        },
        communityPrompt: 'Escreva um diálogo curto de check-in em registro formal.',
      },
    ],
  },
  {
    id: 'ro-u4',
    cefr: 'A2',
    title: 'Família e sentimentos',
    emoji: '❤️',
    card: {
      id: 'ro-c4',
      title: '«Dor»: a saudade romena',
      emoji: '🥺',
      history:
        '«Dor» vem do latim tardio dolus (dor, sofrimento), a mesma origem do nosso «dor», mas em romeno virou a palavra da saudade: «Mi-e dor de tine» = «Tenho saudade de você». A doina, canto melancólico tradicional, é o canto do dor por excelência e foi reconhecida pela UNESCO como Patrimônio Imaterial.',
      culture_tip:
        'A família estendida é central: o almoço de domingo na casa da bunica (avó) é quase sagrado. Ao visitar alguém, leve flores em número ímpar, porque número par é para funerais.',
      grammar_why:
        'Por que «mama mea» e não «mea mamă»? O possessivo vem depois do substantivo com artigo: mamă → mama (a mãe) → mama mea (literalmente «a mãe minha»). E o romeno tem 3 gêneros: além de masculino e feminino, há o NEUTRO, com palavras masculinas no singular e femininas no plural (un tren, două trenuri).',
      grammar_examples: [
        ['mama mea', 'minha mãe'],
        ['tatăl meu', 'meu pai'],
        ['un ou → două ouă', 'um ovo → dois ovos (neutro)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u4-l1',
        title: 'Minha família',
        kind: 'licao',
        words: ['familie', 'mamă', 'tată', 'frate', 'soră', 'bunică'],
        cloze: [
          { sentence: 'Mama ___ se numește Maria.', answer: 'mea', options: ['mea', 'meu', 'mei'], translation: 'Minha mãe se chama Maria.' },
          { sentence: 'Am doi ___.', answer: 'frați', options: ['frați', 'frate', 'fratele'], translation: 'Tenho dois irmãos.' },
          { sentence: '___ face cele mai bune sarmale.', answer: 'Bunica', options: ['Bunica', 'Bunică', 'O bunică'], translation: 'A vovó faz os melhores sarmale.' },
        ],
        voice: {
          bot: 'Ai frați sau surori?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Am un frate și o soră.', 'am', 'nu am', 'frate', 'soră'],
          hint: '«Am un frate» = «Tenho um irmão»; «o soră» = «uma irmã».',
        },
        communityPrompt: 'Apresente sua família em 3 frases.',
      },
      {
        id: 'ro-u4-l2',
        title: 'Como você se sente?',
        kind: 'licao',
        words: ['fericit', 'trist', 'obosit', 'dor', 'inimă', 'a iubi'],
        cloze: [
          { sentence: 'Mi-e ___ de tine.', answer: 'dor', options: ['dor', 'masă', 'tren'], translation: 'Tenho saudade de você.' },
          { sentence: 'Am dormit puțin, sunt ___.', answer: 'obosit', options: ['obosit', 'ieftin', 'verde'], translation: 'Dormi pouco, estou cansado.' },
          { sentence: '___ iubesc.', answer: 'Te', options: ['Te', 'Tu', 'Eu'], translation: 'Eu te amo.' },
        ],
        voice: {
          bot: 'Cum te simți azi?',
          botTranslation: 'Como você se sente hoje?',
          expected: ['Sunt fericit!', 'fericit', 'fericită', 'obosit', 'obosită', 'trist', 'tristă', 'bine'],
          hint: '«Sunt fericit» (masc.) / «Sunt fericită» (fem.).',
        },
        communityPrompt: 'Escreva uma mensagem curta dizendo que sente saudade de alguém.',
      },
      {
        id: 'ro-u4-l3',
        title: 'Desafio de voz: quem é quem',
        kind: 'voz',
        words: ['copil', 'prieten', 'a cunoaște', 'om', 'femeie', 'bărbat'],
        cloze: [
          { sentence: 'Mă bucur să te ___.', answer: 'cunosc', options: ['cunosc', 'beau', 'plec'], translation: 'Prazer em te conhecer.' },
          { sentence: 'Este cel mai bun ___ al meu.', answer: 'prieten', options: ['prieten', 'prietenă', 'prietenul'], translation: 'É o meu melhor amigo.' },
          { sentence: 'Copilul se ___ în parc.', answer: 'joacă', options: ['joacă', 'plătește', 'închide'], translation: 'A criança brinca no parque.' },
        ],
        voice: {
          bot: 'Cine este în fotografie?',
          botTranslation: 'Quem está na foto?',
          expected: ['Este mama mea.', 'este', 'mama', 'tata', 'fratele', 'sora', 'prietenul', 'bunica'],
          hint: '«Este…» = «É…».',
        },
        communityPrompt: 'Descreva uma foto de família ou de amigos.',
      },
      {
        id: 'ro-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mi-e dor de tine!',
          botTranslation: 'Tenho saudade de você!',
          expected: ['Și mie mi-e dor de tine!', 'și mie', 'și eu', 'dor'],
          hint: '«Și mie…» = «Eu também…».',
        },
        communityPrompt: 'Escreva um bilhete carinhoso para alguém da sua família.',
      },
    ],
  },
  {
    id: 'ro-u5',
    cefr: 'B1',
    title: 'Pela cidade: Bucareste e Transilvânia',
    emoji: '🏰',
    card: {
      id: 'ro-c5',
      title: 'Castelo de Bran: Drácula, mito e história',
      emoji: '🦇',
      history:
        'O Castelo de Bran, na Transilvânia, ficou famoso como «castelo do Drácula», mas Bram Stoker nunca esteve na Romênia. O personagem se inspira de leve em Vlad III, o Empalador (séc. XV), príncipe da Valáquia, lembrado no país como governante duro que resistiu aos otomanos, e não como vampiro. Bucareste, por sua vez, ganhou no entreguerras o apelido de «Pequena Paris».',
      culture_tip:
        'Para pedir direções, comece com «Scuzați…» e use o formal. As indicações costumam usar pontos de referência («după biserică», depois da igreja). No dia 1º de março se dá o mărțișor, um amuleto de fio vermelho e branco que celebra a chegada da primavera.',
      grammar_why:
        'Por que «Muzeul Satului» (Museu da Aldeia)? O romeno conservou casos do latim, e o genitivo marca a posse com uma terminação própria: sat (aldeia) → satul (a aldeia) → satului (da aldeia). É por isso que placas e nomes de ruas mudam o fim das palavras: «Strada Florilor» = Rua das Flores (flori → florilor).',
      grammar_examples: [
        ['Muzeul Satului', 'Museu da Aldeia'],
        ['Strada Florilor', 'Rua das Flores'],
        ['casa mamei', 'a casa da mãe'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u5-l1',
        title: 'Pedindo direções',
        kind: 'licao',
        words: ['stânga', 'dreapta', 'aproape', 'departe', 'stradă', 'piață'],
        cloze: [
          { sentence: 'Luați-o la ___ după biserică.', answer: 'stânga', options: ['stânga', 'masă', 'zăpadă'], translation: 'Vire à esquerda depois da igreja.' },
          { sentence: 'Muzeul este ___, la cinci minute.', answer: 'aproape', options: ['aproape', 'departe', 'ieri'], translation: 'O museu fica perto, a cinco minutos.' },
          { sentence: 'Scuzați, ___ este farmacia?', answer: 'unde', options: ['unde', 'când', 'cât'], translation: 'Com licença, onde fica a farmácia?' },
        ],
        voice: {
          bot: 'Vă pot ajuta cu ceva?',
          botTranslation: 'Posso ajudá-lo em algo?',
          expected: ['Da, unde este muzeul?', 'unde este', 'caut', 'da'],
          hint: 'Pergunte onde fica um lugar: «Unde este…?».',
        },
        communityPrompt: 'Explique como chegar da sua casa até a padaria mais próxima.',
      },
      {
        id: 'ro-u5-l2',
        title: 'Turismo na Transilvânia',
        kind: 'licao',
        words: ['castel', 'munte', 'pădure', 'urs', 'biserică', 'muzeu'],
        cloze: [
          { sentence: 'Castelul ___ este celebru.', answer: 'Bran', options: ['Bran', 'Brazilia', 'Paris'], translation: 'O Castelo de Bran é famoso.' },
          { sentence: 'În Carpați trăiesc mulți ___.', answer: 'urși', options: ['urși', 'urs', 'ursul'], translation: 'Nos Cárpatos vivem muitos ursos.' },
          { sentence: 'Muzeul este închis ___.', answer: 'lunea', options: ['lunea', 'marea', 'cheia'], translation: 'O museu fecha às segundas.' },
        ],
        voice: {
          bot: 'Ce ați vrea să vizitați în România?',
          botTranslation: 'O que o senhor gostaria de visitar na Romênia?',
          expected: ['Aș vrea să vizitez Castelul Bran.', 'aș vrea', 'vreau', 'castel', 'bran', 'munte', 'mare', 'muzeu', 'bucurești'],
          hint: '«Aș vrea să vizitez…» = «Eu gostaria de visitar…».',
        },
        communityPrompt: 'Monte um roteiro de 2 dias na Romênia em 3 frases.',
      },
      {
        id: 'ro-u5-l3',
        title: 'Desafio de voz: compras',
        kind: 'voz',
        words: ['magazin', 'a costa', 'scump', 'ieftin', 'farmacie', 'a deschide'],
        cloze: [
          { sentence: 'Cât ___ biletul?', answer: 'costă', options: ['costă', 'merge', 'doarme'], translation: 'Quanto custa a passagem?' },
          { sentence: 'Este prea ___. Aveți ceva mai ieftin?', answer: 'scump', options: ['scump', 'ieftin', 'mic'], translation: 'É caro demais. Tem algo mais barato?' },
          { sentence: 'Magazinul se ___ la nouă.', answer: 'deschide', options: ['deschide', 'mănâncă', 'iubește'], translation: 'A loja abre às nove.' },
        ],
        voice: {
          bot: 'Bună ziua! Ce vă pot oferi?',
          botTranslation: 'Bom dia! O que posso lhe oferecer?',
          expected: ['Cât costă mărțișorul acesta?', 'cât costă', 'aș vrea', 'vreau', 'caut'],
          hint: 'Pergunte o preço: «Cât costă…?».',
        },
        communityPrompt: 'Escreva um diálogo de compra numa feira de artesanato.',
      },
      {
        id: 'ro-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vă place Bucureștiul?',
          botTranslation: 'O senhor gosta de Bucareste?',
          expected: ['Da, îmi place foarte mult!', 'îmi place', 'da', 'frumos'],
          hint: '«Îmi place» = «Eu gosto».',
        },
        communityPrompt: 'Escreva um cartão-postal de Bucareste para um amigo.',
      },
    ],
  },
];
