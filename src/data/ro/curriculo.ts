import type { UnitSeed } from '../types';

/**
 * Trilha CEFR do romeno. Cada unidade abre com um card "Aprenda primeiro"
 * (história, cultura, gramática e escrita) e segue com lições, um desafio de
 * voz e a prova da unidade. A prova junta o conteúdo das outras lições.
 */
export const UNITS_RO: UnitSeed[] = [
  {
    id: 'ro-u1',
    level: 'A1.1',
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
          {
            sentence: 'Nu ___. Mai încet, vă rog.',
            answer: 'înțeleg',
            options: ['înțeleg', 'mănânc', 'plec'],
            translation: 'Não entendo. Mais devagar, por favor.',
          },
          {
            sentence: 'Cum se ___ „obrigado” în română?',
            answer: 'spune',
            options: ['spune', 'bea', 'vede'],
            translation: 'Como se diz «obrigado» em romeno?',
          },
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
    level: 'A1.2',
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
          {
            sentence: 'Îmi aduceți ___, vă rog?',
            answer: 'meniul',
            options: ['meniul', 'meniu', 'o meniu'],
            translation: 'Pode me trazer o cardápio, por favor?',
          },
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
    level: 'A2.1',
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
          {
            sentence: 'Avionul pleacă de la ___ patru.',
            answer: 'poarta',
            options: ['poarta', 'masa', 'cartea'],
            translation: 'O avião sai do portão quatro.',
          },
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
          {
            sentence: 'Am o ___ pe numele Ana.',
            answer: 'rezervare',
            options: ['rezervare', 'ploaie', 'soră'],
            translation: 'Tenho uma reserva em nome de Ana.',
          },
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
    level: 'A2.2',
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
          {
            sentence: '___ face cele mai bune sarmale.',
            answer: 'Bunica',
            options: ['Bunica', 'Bunică', 'O bunică'],
            translation: 'A vovó faz os melhores sarmale.',
          },
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
    level: 'B1.1',
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
          {
            sentence: 'Luați-o la ___ după biserică.',
            answer: 'stânga',
            options: ['stânga', 'masă', 'zăpadă'],
            translation: 'Vire à esquerda depois da igreja.',
          },
          {
            sentence: 'Muzeul este ___, la cinci minute.',
            answer: 'aproape',
            options: ['aproape', 'departe', 'ieri'],
            translation: 'O museu fica perto, a cinco minutos.',
          },
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
          {
            sentence: 'Este prea ___. Aveți ceva mai ieftin?',
            answer: 'scump',
            options: ['scump', 'ieftin', 'mic'],
            translation: 'É caro demais. Tem algo mais barato?',
          },
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
  {
    id: 'ro-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Infância na aldeia',
    emoji: '🏡',
    card: {
      id: 'ro-c6',
      title: 'A aldeia romena: avós, colinde e verões no campo',
      emoji: '👵',
      history:
        'Até hoje quase metade dos romenos vive em áreas rurais, e muitas famílias da cidade ainda têm raízes numa aldeia. Nas noites de inverno, as mulheres se reuniam na șezătoare para fiar, bordar e contar histórias. No Natal, grupos de rapazes e crianças iam de casa em casa cantando colinde e ganhavam nozes, maçãs e cozonac; o colindat em grupo de homens, da Romênia e da Moldávia, foi reconhecido pela UNESCO em 2013. Em Bucareste, o Museu da Aldeia, aberto em 1936, reúne casas camponesas trazidas de todas as regiões do país.',
      culture_tip:
        'Passar as férias de verão «la bunici, la țară» (na casa dos avós, no interior) é uma lembrança comum a gerações de romenos. Ao visitar uma casa na aldeia, aceite o que lhe oferecerem: recusar comida pode soar como desfeita. Tire os sapatos na entrada e, no fim da refeição, agradeça com «Mulțumesc, a fost foarte bun!».',
      grammar_why:
        'O imperfeito romeno funciona quase como o pretérito imperfeito do português: descreve hábitos e cenários do passado («eu ia», «ela fazia»). As terminações são regulares: -am, -ai, -a, -am, -ați, -au (mergeam, mergeai, mergea…); a fi fica eram, erai, era, eram, erați, erau. Atenção: a 1ª pessoa do singular e a do plural são iguais (mergeam = eu ia / nós íamos), e o contexto decide. Já o perfect compus (am mers, am mâncat) marca um fato único e concluído, como o nosso pretérito perfeito. Juntos, um faz o cenário e o outro o acontecimento: «Mâncam când a sunat telefonul» = «Eu estava comendo quando o telefone tocou».',
      grammar_examples: [
        ['În fiecare vară mergeam la bunici.', 'Todo verão eu ia para a casa dos avós.'],
        ['Bunica făcea plăcinte duminica.', 'A avó fazia tortas aos domingos.'],
        ['Eram mici și ne jucam toată ziua.', 'Éramos pequenos e brincávamos o dia todo.'],
        ['Mâncam când a sunat telefonul.', 'Eu estava comendo quando o telefone tocou.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u6-l1',
        title: 'Férias na casa dos avós',
        kind: 'licao',
        words: ['bunic', 'copilărie', 'sat', 'grădină', 'bucătărie', 'fântână'],
        cloze: [
          {
            sentence: 'În copilărie ___ în fiecare vară la bunici.',
            answer: 'mergeam',
            options: ['mergeam', 'voi merge', 'merg'],
            translation: 'Na infância eu ia todo verão para a casa dos avós.',
          },
          {
            sentence: 'Bunicul ___ apă de la fântână dimineața.',
            answer: 'aducea',
            options: ['aducea', 'aduceam', 'aduceau'],
            translation: 'O avô trazia água do poço de manhã.',
          },
          {
            sentence: 'Casa bunicilor ___ mică, dar avea o grădină mare.',
            answer: 'era',
            options: ['era', 'eram', 'erau'],
            translation: 'A casa dos avós era pequena, mas tinha uma horta grande.',
          },
        ],
        voice: {
          bot: 'Unde îți petreceai verile când erai copil?',
          botTranslation: 'Onde você passava os verões quando era criança?',
          expected: ['Îmi petreceam verile la bunici, la țară.', 'îmi petreceam', 'mergeam', 'la bunici', 'la țară'],
          hint: 'Use o imperfeito: «Îmi petreceam verile…» ou «Mergeam la…».',
        },
        communityPrompt: 'Descreva, em 3 frases no imperfeito, como era a casa dos seus avós (ou de um parente) quando você era criança.',
      },
      {
        id: 'ro-u6-l2',
        title: 'Festas e tradições',
        kind: 'licao',
        words: ['sărbătoare', 'horă', 'colind', 'nuntă', 'Crăciun', 'cântec'],
        cloze: [
          {
            sentence: 'De Crăciun copiii ___ colinde din casă în casă.',
            answer: 'cântau',
            options: ['cântau', 'cânta', 'cântam'],
            translation: 'No Natal as crianças cantavam colinde de casa em casa.',
          },
          {
            sentence: 'La nunțile din sat toată lumea ___ hora.',
            answer: 'juca',
            options: ['juca', 'jucau', 'jucai'],
            translation: 'Nos casamentos da aldeia todo mundo dançava a hora.',
          },
          {
            sentence: 'Jucam hora când ___ să plouă.',
            answer: 'a început',
            options: ['a început', 'va începe', 'începem'],
            translation: 'Estávamos dançando a hora quando começou a chover.',
          },
        ],
        voice: {
          bot: 'Cum sărbătorea familia ta Crăciunul?',
          botTranslation: 'Como a sua família comemorava o Natal?',
          expected: ['Ne adunam toți la masă și cântam colinde.', 'ne adunam', 'cântam', 'mâncam', 'colinde'],
          hint: 'Descreva o costume no imperfeito: «ne adunam», «mâncam», «cântam».',
        },
        communityPrompt:
          'Conte como sua família comemorava uma festa (Natal, São João, aniversários) quando você era criança. Use pelo menos 3 verbos no imperfeito.',
      },
      {
        id: 'ro-u6-l3',
        title: 'Desafio de voz: um dia no campo',
        kind: 'voz',
        words: ['vacă', 'găină', 'câmp', 'livadă', 'fân', 'a-și aduce aminte'],
        cloze: [
          {
            sentence: 'Bunica ___ vaca în fiecare dimineață.',
            answer: 'mulgea',
            options: ['mulgea', 'mulgeam', 'mulgeau'],
            translation: 'A avó ordenhava a vaca toda manhã.',
          },
          {
            sentence: 'Vara noi ___ la câmp, unde bunicul strângea fânul.',
            answer: 'mergeam',
            options: ['mergeam', 'mergeați', 'mergeau'],
            translation: 'No verão nós íamos para o campo, onde o avô juntava o feno.',
          },
          {
            sentence: 'Într-o zi, o găină ___ în livadă și n-am mai găsit-o.',
            answer: 'a fugit',
            options: ['a fugit', 'fugea', 'fuge'],
            translation: 'Um dia, uma galinha fugiu para o pomar e nunca mais a encontramos.',
          },
        ],
        voice: {
          bot: 'Ce îți aduci aminte despre satul bunicilor?',
          botTranslation: 'Do que você se lembra da aldeia dos seus avós?',
          expected: ['Îmi aduc aminte că bunica avea o vacă și multe găini.', 'îmi aduc aminte', 'avea', 'era', 'mergeam'],
          hint: 'Comece com «Îmi aduc aminte că…» e continue no imperfeito (avea, era, mergeam).',
        },
        communityPrompt: 'Grave-se descrevendo um lugar da sua infância: como era, o que havia lá e o que você fazia (tudo no imperfeito).',
      },
      {
        id: 'ro-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Povestește-mi o amintire din copilărie. Cum era o zi obișnuită și ce s-a întâmplat într-o zi specială?',
          botTranslation: 'Conte-me uma lembrança da infância. Como era um dia comum e o que aconteceu num dia especial?',
          expected: [
            'Când eram mic, mă trezeam devreme și mergeam cu bunicul la câmp. Într-o zi am văzut un cal alb lângă râu.',
            'când eram',
            'mergeam',
            'într-o zi',
            'am văzut',
          ],
          hint: 'Imperfeito para a rotina (eram, mergeam); perfect compus para o fato único (am văzut, a venit).',
        },
        communityPrompt:
          'Escreva um parágrafo de 5–6 frases sobre as férias da sua infância: descreva a rotina no imperfeito e conte um acontecimento marcante no perfect compus.',
      },
    ],
  },
  {
    id: 'ro-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'No trabalho: entrevistas e pedidos educados',
    emoji: '💼',
    card: {
      id: 'ro-c7',
      title: 'Escritório romeno: «Aș vrea…» e «Vă rog frumos»',
      emoji: '🤝',
      history:
        'Na Romênia as relações de trabalho são regidas pelo Código do Trabalho (Codul muncii), de 2003. A jornada normal é de 8 horas por dia e 40 por semana, e todo empregado tem direito a pelo menos 20 dias úteis de férias remuneradas por ano. Em 2011 a antiga carteira de trabalho de papel (carnetul de muncă) foi substituída por um registro eletrônico. Cidades como Bucareste, Cluj-Napoca e Iași se tornaram polos de tecnologia e de serviços.',
      culture_tip:
        'Em entrevistas e no escritório, use o tratamento formal (dumneavoastră, verbo na 2ª pessoa do plural) e «domnule / doamnă» + sobrenome, até que proponham o «tu». Para pedir algo, suavize com «Aș vrea…», «Ați putea…» e «vă rog frumos». Chegue alguns minutos antes: em entrevista, pontualidade conta muito.',
      grammar_why:
        'O condicional romeno equivale ao nosso futuro do pretérito («eu gostaria», «o senhor poderia»). Forma-se com um auxiliar curto + infinitivo sem «a»: aș, ai, ar, am, ați, ar + vrea / putea / avea. Em pedidos, ele suaviza o tom: «Ați putea…?» soa mais educado que «Puteți…?». Diferente do português, depois de «dacă» (se) também vem o condicional: «Dacă aș avea timp, aș veni» = «Se eu tivesse tempo, eu viria». No discurso indireto, «a spus că…» mantém o tempo da fala original: «Vin mâine» → «A spus că vine mâine» (disse que vinha amanhã).',
      grammar_examples: [
        ['Aș vrea să vorbesc cu doamna director.', 'Eu gostaria de falar com a diretora.'],
        ['Ați putea să-mi trimiteți contractul?', 'O senhor poderia me enviar o contrato?'],
        ['Dacă aș avea mai mult timp, aș termina raportul azi.', 'Se eu tivesse mais tempo, terminaria o relatório hoje.'],
        ['Șeful a spus că ședința începe la zece.', 'O chefe disse que a reunião começa às dez.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u7-l1',
        title: 'Entrevista de emprego',
        kind: 'licao',
        words: ['angajare', 'angajator', 'salariu', 'contract', 'serviciu', 'a lucra'],
        cloze: [
          {
            sentence: 'Eu ___ vrea să lucrez în echipa dumneavoastră.',
            answer: 'aș',
            options: ['aș', 'ar', 'ați'],
            translation: 'Eu gostaria de trabalhar na sua equipe.',
          },
          {
            sentence: 'Dacă aș primi oferta, ___ să încep de luni.',
            answer: 'aș putea',
            options: ['aș putea', 'ați putea', 'am putea'],
            translation: 'Se eu recebesse a oferta, poderia começar a partir de segunda.',
          },
          {
            sentence: 'Am semnat ___ de muncă pe doi ani.',
            answer: 'contractul',
            options: ['contractul', 'salariul', 'angajatorul'],
            translation: 'Assinei o contrato de trabalho por dois anos.',
          },
        ],
        voice: {
          bot: 'De ce ați vrea să lucrați la firma noastră?',
          botTranslation: 'Por que o senhor gostaria de trabalhar na nossa empresa?',
          expected: ['Aș vrea să lucrez aici pentru că aș putea să învăț multe și să cresc profesional.', 'aș vrea', 'aș putea', 'pentru că', 'să lucrez'],
          hint: 'Responda com «Aș vrea să lucrez aici pentru că…».',
        },
        communityPrompt: 'Escreva 3 frases para uma entrevista dizendo o que você gostaria de fazer no cargo, usando «aș vrea», «aș putea» e «dacă aș…».',
      },
      {
        id: 'ro-u7-l2',
        title: 'Pedidos no escritório',
        kind: 'licao',
        words: ['birou', 'șef', 'ședință', 'raport', 'termen', 'departament'],
        cloze: [
          {
            sentence: '___ putea să-mi trimiteți raportul până vineri?',
            answer: 'Ați',
            options: ['Ați', 'Aș', 'Ar'],
            translation: 'O senhor poderia me enviar o relatório até sexta?',
          },
          {
            sentence: 'Colega mea a spus ___ va întârzia puțin la ședință.',
            answer: 'că',
            options: ['că', 'să', 'ce'],
            translation: 'Minha colega disse que vai se atrasar um pouco para a reunião.',
          },
          {
            sentence: 'Dacă termenul ar fi mai lung, eu ___ termina raportul fără stres.',
            answer: 'aș',
            options: ['aș', 'ar', 'ați'],
            translation: 'Se o prazo fosse maior, eu terminaria o relatório sem estresse.',
          },
        ],
        voice: {
          bot: 'Ședința de mâine se mută la ora trei. Aveți vreo problemă?',
          botTranslation: 'A reunião de amanhã passou para as três. O senhor tem algum problema com isso?',
          expected: ['Nicio problemă, dar ați putea să-mi trimiteți ordinea de zi, vă rog?', 'nicio problemă', 'ați putea', 'vă rog'],
          hint: 'Aceite e faça um pedido educado: «Ați putea…, vă rog?».',
        },
        communityPrompt: 'Escreva um e-mail curto ao chefe pedindo mais prazo para um relatório, com «Aș vrea…», «Ați putea…» e uma frase com «dacă aș…».',
      },
      {
        id: 'ro-u7-l3',
        title: 'Desafio de voz: recados e pedidos',
        kind: 'voz',
        words: ['concediu', 'agendă', 'a programa', 'dosar', 'a semna', 'adeverință'],
        cloze: [
          {
            sentence: 'Aș vrea să ___ concediu în august.',
            answer: 'iau',
            options: ['iau', 'luam', 'luat'],
            translation: 'Eu gostaria de tirar férias em agosto.',
          },
          {
            sentence: 'Doamna Popescu a spus că ea ___ adeverința mâine.',
            answer: 'semnează',
            options: ['semnează', 'semnez', 'semnăm'],
            translation: 'A senhora Popescu disse que vai assinar a declaração amanhã.',
          },
          {
            sentence: 'Dacă eu ___ timp, aș verifica dosarul azi.',
            answer: 'aș avea',
            options: ['aș avea', 'ați avea', 'ar avea'],
            translation: 'Se eu tivesse tempo, verificaria a pasta hoje.',
          },
        ],
        voice: {
          bot: 'Domnul director nu este în birou. Doriți să-i las un mesaj?',
          botTranslation: 'O diretor não está no escritório. O senhor quer que eu deixe um recado para ele?',
          expected: ['Da, vă rog. Spuneți-i că aș vrea să programăm o întâlnire săptămâna viitoare.', 'spuneți-i că', 'aș vrea', 'o întâlnire', 'vă rog'],
          hint: 'Peça que transmitam o recado: «Spuneți-i că aș vrea…».',
        },
        communityPrompt: 'Grave um recado de voz para um colega: conte o que o chefe disse («a spus că…») e faça um pedido com «ați putea».',
      },
      {
        id: 'ro-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vă mulțumim pentru interviu. Dacă v-am oferi postul, când ați putea începe și ce ați schimba în departamentul nostru?',
          botTranslation: 'Obrigado pela entrevista. Se lhe oferecêssemos o cargo, quando o senhor poderia começar e o que mudaria no nosso departamento?',
          expected: [
            'Dacă mi-ați oferi postul, aș putea începe luna viitoare. Aș schimba organizarea ședințelor și aș vrea să respectăm mai bine termenele.',
            'aș putea',
            'aș vrea',
            'aș schimba',
            'dacă mi-ați oferi',
          ],
          hint: 'Responda às duas perguntas no condicional: «Aș putea începe…», «Aș schimba…».',
        },
        communityPrompt:
          'Escreva um e-mail de 5–6 frases a um amigo contando a entrevista: o que o entrevistador disse («a spus că…», «m-a întrebat dacă…») e o que você faria se conseguisse a vaga.',
      },
    ],
  },
  {
    id: 'ro-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Saúde: no médico e na farmácia',
    emoji: '🩺',
    card: {
      id: 'ro-c8',
      title: '«Sănătate!»: saúde à romena',
      emoji: '💊',
      history:
        'Em 1888, o médico romeno Victor Babeș descreveu no sangue do gado os parasitas que hoje formam o gênero Babesia, batizado em sua homenagem. Em 1921, o fisiologista Nicolae Paulescu publicou estudos sobre um extrato de pâncreas, que chamou de pancreina, capaz de baixar o açúcar no sangue. Em 1974, Emil Palade, nascido em Iași, dividiu o Nobel de Medicina por suas descobertas sobre a organização interna da célula.',
      culture_tip:
        'Quando alguém espirra, os romenos dizem «Sănătate!» (saúde!), e a resposta é «Mulțumesc!». No sistema público, a porta de entrada é o medic de familie, que dá a trimitere (encaminhamento) para especialistas. Antibióticos só são vendidos com rețetă (receita). Em emergência, ligue 112.',
      grammar_why:
        'O genitivo (de quem?) e o dativo (a quem?) têm a mesma forma em romeno e se juntam ao artigo no fim da palavra: medicul → medicului, capul → capului, rețeta → rețetei, mama → mamei; no plural, -lor (medicilor). Onde o português usa «do/da» ou «ao/à», o romeno muda a terminação: rețeta medicului = a receita do médico. Com o dativo, o romeno costuma repetir o pronome átono: i-am dat pacientului = (lhe) dei ao paciente. Nas relativas, «care» é sujeito e «pe care» é objeto direto, com clítico (pe care l-am luat). «Al cărui / a cărei» é o nosso «cujo/cuja»: al/a concorda com a coisa possuída, e cărui/cărei com o dono.',
      grammar_examples: [
        ['Rețeta medicului e pe masă.', 'A receita do médico está na mesa.'],
        ['I-am dat pacientului un calmant.', 'Dei um analgésico ao paciente.'],
        ['Medicamentul pe care l-am luat m-a ajutat.', 'O remédio que eu tomei me ajudou.'],
        ['Acesta e medicul al cărui cabinet e la etajul doi.', 'Este é o médico cujo consultório fica no segundo andar.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u8-l1',
        title: 'Sintomas no consultório',
        kind: 'licao',
        words: ['durere de cap', 'febră', 'tuse', 'gripă', 'amețeală', 'medic de familie'],
        cloze: [
          {
            sentence: 'Temperatura ___ a crescut la 39 de grade.',
            answer: 'copilului',
            options: ['copilului', 'copilul', 'copii'],
            translation: 'A temperatura da criança subiu para 39 graus.',
          },
          {
            sentence: 'I-am spus ___ că am tuse de o săptămână.',
            answer: 'doctoriței',
            options: ['doctoriței', 'doctorița', 'doctorițele'],
            translation: 'Eu disse à médica que estou com tosse há uma semana.',
          },
          {
            sentence: 'Simptomele ___ sunt febra, tusea și durerile de cap.',
            answer: 'gripei',
            options: ['gripei', 'gripa', 'gripă'],
            translation: 'Os sintomas da gripe são febre, tosse e dores de cabeça.',
          },
        ],
        voice: {
          bot: 'Bună ziua! Luați loc. Ce simptome aveți?',
          botTranslation: 'Bom dia! Sente-se. Que sintomas o(a) senhor(a) tem?',
          expected: ['Am febră, tuse și o durere de cap de două zile.', 'febră', 'tuse', 'durere de cap', 'amețeală'],
          hint: 'Liste seus sintomas com «Am…» e diga há quanto tempo: «de două zile».',
        },
        communityPrompt:
          'Descreva ao médico os sintomas de alguém da sua família usando um genitivo (ex.: «tusea fratelui meu…») e um dativo com clítico (ex.: «i-am dat…»).',
      },
      {
        id: 'ro-u8-l2',
        title: 'Na farmácia',
        kind: 'licao',
        words: ['medicament', 'pastilă', 'antibiotic', 'picături', 'prospect', 'a prescrie'],
        cloze: [
          {
            sentence: 'Farmacista ___ explică pacientului cum să ia pastilele.',
            answer: 'îi',
            options: ['îi', 'îl', 'le'],
            translation: 'A farmacêutica explica ao paciente como tomar os comprimidos.',
          },
          {
            sentence: 'Acesta este medicamentul ___ mi l-a prescris medicul.',
            answer: 'pe care',
            options: ['pe care', 'care', 'al cărui'],
            translation: 'Este é o remédio que o médico me receitou.',
          },
          {
            sentence: 'Înainte să iau pastilele, am citit prospectul ___.',
            answer: 'medicamentului',
            options: ['medicamentului', 'medicamentul', 'medicamente'],
            translation: 'Antes de tomar os comprimidos, li a bula do remédio.',
          },
        ],
        voice: {
          bot: 'Bună ziua! Aveți rețetă pentru antibiotic?',
          botTranslation: 'Bom dia! O(a) senhor(a) tem receita para o antibiótico?',
          expected: ['Da, poftiți rețeta medicului de familie.', 'rețeta', 'medicului', 'poftiți', 'da'],
          hint: 'Diga que sim e entregue «a receita do médico» usando o genitivo: rețeta medicului.',
        },
        communityPrompt: 'Escreva um bilhete explicando a alguém como tomar um remédio, com uma relativa com «pe care» e um dativo (ex.: «Dă-i copilului…»).',
      },
      {
        id: 'ro-u8-l3',
        title: 'Desafio de voz: marcando consulta',
        kind: 'voz',
        words: ['cap', 'picior', 'braț', 'ureche', 'programare', 'consultație'],
        cloze: [
          {
            sentence: 'Pacientul ___ braț e rupt așteaptă radiografia.',
            answer: 'al cărui',
            options: ['al cărui', 'a cărei', 'care'],
            translation: 'O paciente cujo braço está quebrado espera o raio-X.',
          },
          {
            sentence: 'Doctorița ___ am programare lucrează la policlinica din cartier.',
            answer: 'la care',
            options: ['la care', 'pe care', 'care'],
            translation: 'A médica com quem tenho consulta marcada trabalha na policlínica do bairro.',
          },
          {
            sentence: 'Medicul a consultat urechea ___.',
            answer: 'fetiței',
            options: ['fetiței', 'fetița', 'fetițele'],
            translation: 'O médico examinou o ouvido da menina.',
          },
        ],
        voice: {
          bot: 'Policlinica, bună ziua. Pentru ce doriți o programare?',
          botTranslation: 'Policlínica, bom dia. Para que o(a) senhor(a) deseja marcar uma consulta?',
          expected: ['Aș dori o programare la medicul de familie, pentru că mă doare urechea.', 'programare', 'mă doare', 'medicul de familie', 'urechea'],
          hint: 'Peça a consulta com «Aș dori o programare…» e diga o que dói: «mă doare…».',
        },
        communityPrompt: 'Descreva uma dor ou um machucado usando «care» ou «al cărui / a cărei» (ex.: «Am un prieten al cărui picior…»).',
      },
      {
        id: 'ro-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Deci aveți febră de trei zile. Ce medicament ați luat și cine vi l-a recomandat?',
          botTranslation: 'Então o(a) senhor(a) está com febre há três dias. Que remédio tomou e quem o recomendou?',
          expected: ['Am luat un calmant pe care mi l-a recomandat farmacista.', 'pe care', 'mi l-a recomandat', 'calmant', 'farmacista'],
          hint: 'Diga o remédio e use uma relativa: «…pe care mi l-a recomandat…».',
        },
        communityPrompt:
          'Conte uma ida ao médico e à farmácia (5–6 frases), com pelo menos dois genitivos, um dativo com clítico («i-am spus medicului…») e duas relativas («pe care», «al cărui / a cărei»).',
      },
    ],
  },
  {
    id: 'ro-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'História do século XX: 1918 e 1989',
    emoji: '🕰️',
    card: {
      id: 'ro-c9',
      title: 'Dois dezembros que mudaram a Romênia',
      emoji: '📜',
      history:
        'Em 1º de dezembro de 1918, uma grande assembleia reunida em Alba Iulia proclamou a união da Transilvânia com o Reino da Romênia; no mesmo ano, a Bessarábia (em 27 de março) e a Bucovina (em novembro) já tinham votado a união. O conjunto ficou conhecido como a Grande União (Marea Unire), e a união da Transilvânia foi reconhecida pelo Tratado de Trianon, em 1920. Em dezembro de 1989, protestos iniciados em Timișoara no dia 16 chegaram a Bucareste; no dia 22, Nicolae Ceaușescu fugiu da sede do Comitê Central, e o regime comunista caiu. Os confrontos daqueles dias deixaram mais de mil mortos. Desde 1990, o 1º de dezembro é o Dia Nacional da Romênia.',
      culture_tip:
        'No 1º de dezembro há desfile militar em Bucareste, sob o Arco do Triunfo, e festa em Alba Iulia; é tradição comer fasole cu cârnați (feijão com linguiça). A antiga Piața Palatului, onde ocorreu o último comício de Ceaușescu, hoje se chama Piața Revoluției. Ao falar de 1989, lembre que muitas famílias viveram aqueles dias de perto: ouça mais do que opine.',
      grammar_why:
        'O mais-que-perfeito (plecasem = eu tinha partido, eu partira) marca uma ação anterior a outra já passada. O português tem a forma simples «partira», mas no Brasil usamos quase só «tinha partido»; o romeno usa a forma simples também na fala. Tira-se o -t do particípio (plecat → pleca-) e acrescenta-se -sem, -seși, -se, -serăm, -serăți, -seră; particípios em -s ganham um -e-: ajuns → ajunsesem, ajunseseră. Os conectores organizam o texto: deși (embora — atenção: com indicativo, não com subjuntivo como em português), totuși (mesmo assim), prin urmare (portanto), în schimb (em compensação, já).',
      grammar_examples: [
        ['Când am ajuns la gară, trenul plecase deja.', 'Quando cheguei à estação, o trem já tinha partido.'],
        ['Delegații ajunseseră la Alba Iulia din toată Transilvania.', 'Os delegados tinham chegado a Alba Iulia de toda a Transilvânia.'],
        ['Deși era frig, oamenii au ieșit în stradă.', 'Embora fizesse frio, as pessoas saíram às ruas.'],
        ['Regimul căzuse; prin urmare, țara avea nevoie de o nouă constituție.', 'O regime tinha caído; portanto, o país precisava de uma nova constituição.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u9-l1',
        title: 'Alba Iulia, 1º de dezembro de 1918',
        kind: 'licao',
        words: ['istorie', 'război', 'rege', 'regină', 'capitală', 'drapel'],
        cloze: [
          {
            sentence: 'Când s-a adunat mulțimea la Alba Iulia, Basarabia și Bucovina ___ deja unirea.',
            answer: 'votaseră',
            options: ['votaseră', 'votăm', 'vor vota'],
            translation: 'Quando a multidão se reuniu em Alba Iulia, a Bessarábia e a Bucovina já tinham votado a união.',
          },
          {
            sentence: 'Frontul se apropiase de București; ___, la sfârșitul lui 1916 guvernul s-a mutat la Iași.',
            answer: 'prin urmare',
            options: ['prin urmare', 'deși', 'în schimb'],
            translation: 'A frente tinha se aproximado de Bucareste; por isso, no fim de 1916 o governo se mudou para Iași.',
          },
          {
            sentence: '___ unirea fusese proclamată în 1918, regele Ferdinand și regina Maria au fost încoronați la Alba Iulia abia în 1922.',
            answer: 'Deși',
            options: ['Deși', 'Prin urmare', 'Totuși'],
            translation: 'Embora a união tivesse sido proclamada em 1918, o rei Ferdinand e a rainha Maria só foram coroados em Alba Iulia em 1922.',
          },
        ],
        voice: {
          bot: 'Pe 1 decembrie 1918, ce alte provincii se uniseră deja cu România?',
          botTranslation: 'Em 1º de dezembro de 1918, que outras províncias já tinham se unido à Romênia?',
          expected: ['Basarabia și Bucovina se uniseră deja cu România.', 'Basarabia', 'Bucovina', 'se uniseră', 'deja'],
          hint: 'Cite as duas províncias e use o mais-que-perfeito: «se uniseră deja».',
        },
        communityPrompt: 'Escreva 3 frases sobre a Grande União usando o mais-que-perfeito para o que já tinha acontecido antes de 1º de dezembro de 1918.',
      },
      {
        id: 'ro-u9-l2',
        title: 'Dezembro de 1989',
        kind: 'licao',
        words: ['protest', 'a protesta', 'soldat', 'televiziune', 'schimbare', 'discurs'],
        cloze: [
          {
            sentence: 'Pe 21 decembrie, când Ceaușescu și-a început discursul, protestele din Timișoara ___ cu cinci zile înainte.',
            answer: 'începuseră',
            options: ['începuseră', 'începeau', 'vor începe'],
            translation: 'Em 21 de dezembro, quando Ceaușescu começou o discurso, os protestos em Timișoara tinham começado cinco dias antes.',
          },
          {
            sentence: 'Mitingul fusese organizat ca sprijin pentru regim; ___, mulțimea a început să-l huiduie pe Ceaușescu.',
            answer: 'totuși',
            options: ['totuși', 'prin urmare', 'deși'],
            translation: 'O comício tinha sido organizado como apoio ao regime; mesmo assim, a multidão começou a vaiar Ceaușescu.',
          },
          {
            sentence: 'Pe 22 decembrie, televiziunea a anunțat că Ceaușescu ___ cu elicopterul.',
            answer: 'fugise',
            options: ['fugise', 'fugiseră', 'fugiserăm'],
            translation: 'Em 22 de dezembro, a televisão anunciou que Ceaușescu tinha fugido de helicóptero.',
          },
        ],
        voice: {
          bot: 'Unde și când începuseră protestele din decembrie 1989?',
          botTranslation: 'Onde e quando tinham começado os protestos de dezembro de 1989?',
          expected: ['Protestele începuseră la Timișoara, pe 16 decembrie.', 'Timișoara', 'începuseră', '16 decembrie'],
          hint: 'Responda com o mais-que-perfeito: «Protestele începuseră la…».',
        },
        communityPrompt:
          'Conte, em 3–4 frases e em tom neutro, a sequência de 16 a 22 de dezembro de 1989, usando o mais-que-perfeito e pelo menos um conector (deși, totuși, prin urmare).',
      },
      {
        id: 'ro-u9-l3',
        title: 'Desafio de voz: o que veio depois',
        kind: 'voz',
        words: ['constituție', 'parlament', 'vot', 'referendum', 'monument', 'a sărbători'],
        cloze: [
          {
            sentence: 'În decembrie 1991, românii au aprobat prin referendum constituția pe care parlamentul o ___ în noiembrie.',
            answer: 'adoptase',
            options: ['adoptase', 'adopta', 'va adopta'],
            translation: 'Em dezembro de 1991, os romenos aprovaram em referendo a constituição que o parlamento tinha adotado em novembro.',
          },
          {
            sentence: 'Când parlamentul a adoptat constituția, primele alegeri libere ___ deja loc, în mai 1990.',
            answer: 'avuseseră',
            options: ['avuseseră', 'aveau', 'vor avea'],
            translation: 'Quando o parlamento adotou a constituição, as primeiras eleições livres já tinham acontecido, em maio de 1990.',
          },
          {
            sentence: 'Pe 1 decembrie se sărbătorește Unirea; ___, tot în decembrie, sunt comemorate victimele Revoluției din 1989.',
            answer: 'în schimb',
            options: ['în schimb', 'deși', 'prin urmare'],
            translation: 'Em 1º de dezembro comemora-se a União; por outro lado, também em dezembro, são lembradas as vítimas da Revolução de 1989.',
          },
        ],
        voice: {
          bot: 'Ce sărbătoresc românii pe 1 decembrie?',
          botTranslation: 'O que os romenos comemoram em 1º de dezembro?',
          expected: ['Pe 1 decembrie românii sărbătoresc Marea Unire din 1918.', 'Marea Unire', '1918', 'Ziua Națională', 'unirea'],
          hint: 'Diga o nome do acontecimento e o ano: «Marea Unire din…».',
        },
        communityPrompt: 'Compare as duas datas (1918 e 1989) em 3–4 frases, usando «în schimb» e «deși».',
      },
      {
        id: 'ro-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Povestiți pe scurt ce se întâmplase în România înainte de 22 decembrie 1989.',
          botTranslation: 'Conte brevemente o que tinha acontecido na Romênia antes de 22 de dezembro de 1989.',
          expected: [
            'Deși regimul părea puternic, protestele începuseră la Timișoara pe 16 decembrie și ajunseseră la București pe 21 decembrie.',
            'începuseră',
            'ajunseseră',
            'Timișoara',
            'București',
            'deși',
          ],
          hint: 'Use o mais-que-perfeito (începuseră, ajunseseră) e abra com «Deși…».',
        },
        communityPrompt:
          'Escreva um texto neutro e factual (6–8 frases) ligando 1918 e 1989, com o mais-que-perfeito pelo menos três vezes e os quatro conectores: totuși, deși, prin urmare, în schimb.',
      },
    ],
  },
  {
    id: 'ro-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Burocracia e instituições',
    emoji: '🏛️',
    card: {
      id: 'ro-c10',
      title: 'Primăria, buletinul e o leu',
      emoji: '📑',
      history:
        'A Romênia se divide em 41 condados (județe) mais o município de Bucareste, e cada cidade ou comuna tem a sua primărie, chefiada por um prefeito (primar) eleito. O documento de identidade oficial se chama carte de identitate, mas todo mundo ainda o chama de «buletin», herança do antigo «buletin de identitate». O país entrou na União Europeia em 2007, mas manteve a própria moeda, o leu. Em 2005 o leu foi redenominado: 10.000 lei antigos passaram a valer 1 leu novo.',
      culture_tip:
        'Num e-mail ou carta formal, comece com «Stimate domnule…» ou «Stimată doamnă…» e termine com «Cu stimă» ou «Cu respect». Trate o destinatário sempre por «dumneavoastră». Ao ir a um guichê, leve cópias de todos os documentos: pedir «o copie xerox» ainda é muito comum.',
      grammar_why:
        'A voz passiva romena funciona como a do português: a fi + particípio, e o particípio concorda com o sujeito. Como cerere é feminino, diz-se «Cererea a fost aprobată», assim como dizemos «a solicitação foi aprovada»; no neutro plural, «actele au fost aprobate». O agente vem com «de» ou, no registro formal, «de către». O «se» passivo também é igual ao nosso: «Se completează formularul» = «Preenche-se o formulário». Em textos formais, os pedidos vêm com «Vă rugăm să…» + subjuntivo, como «Pedimos que…».',
      grammar_examples: [
        ['Cererea a fost aprobată de către primărie.', 'O pedido foi aprovado pela prefeitura.'],
        ['Formularul se completează cu majuscule.', 'O formulário é preenchido em letras maiúsculas.'],
        ['Actele vor fi eliberate în zece zile.', 'Os documentos serão emitidos em dez dias.'],
        ['Stimate domnule, vă rugăm să ne trimiteți o copie.', 'Prezado senhor, pedimos que nos envie uma cópia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u10-l1',
        title: 'Na prefeitura',
        kind: 'licao',
        words: ['primărie', 'formular', 'a completa', 'adeverință', 'certificat', 'act de identitate'],
        cloze: [
          {
            sentence: 'Formularul ___ completează la ghișeul trei.',
            answer: 'se',
            options: ['se', 'își', 'o'],
            translation: 'O formulário é preenchido no guichê três.',
          },
          {
            sentence: 'Certificatul de naștere a fost ___ ieri.',
            answer: 'eliberat',
            options: ['eliberat', 'eliberată', 'eliberați'],
            translation: 'A certidão de nascimento foi emitida ontem.',
          },
          {
            sentence: 'Adeverința ___ semnată de primar.',
            answer: 'a fost',
            options: ['a fost', 'au fost', 'am fost'],
            translation: 'A declaração foi assinada pelo prefeito.',
          },
        ],
        voice: {
          bot: 'Bună ziua! Pentru certificatul de naștere trebuie completat acest formular. Aveți actul de identitate la dumneavoastră?',
          botTranslation: 'Bom dia! Para a certidão de nascimento é preciso preencher este formulário. O senhor está com o documento de identidade?',
          expected: ['Da, poftiți buletinul. Unde se completează formularul?', 'poftiți', 'buletinul', 'actul de identitate', 'se completează'],
          hint: 'Entregue o documento («Poftiți…») e pergunte onde se preenche o formulário, com o «se» passivo.',
        },
        communityPrompt: 'Descreva em 3 frases como se tira um documento no Brasil usando o «se» passivo (se completează, se plătește, se depune).',
      },
      {
        id: 'ro-u10-l2',
        title: 'O e-mail formal',
        kind: 'licao',
        words: ['e-mail', 'a trimite', 'a aproba', 'a respinge', 'a confirma', 'termen'],
        cloze: [
          {
            sentence: 'Stimate domnule, ___ rugăm să ne trimiteți documentele până vineri.',
            answer: 'vă',
            options: ['vă', 'te', 'îți'],
            translation: 'Prezado senhor, pedimos que nos envie os documentos até sexta-feira.',
          },
          {
            sentence: 'Solicitarea dumneavoastră a fost ___.',
            answer: 'aprobată',
            options: ['aprobată', 'aprobat', 'aprobate'],
            translation: 'A sua solicitação foi aprovada.',
          },
          {
            sentence: 'Cererile trimise după termen vor fi ___.',
            answer: 'respinse',
            options: ['respinse', 'respins', 'respinsă'],
            translation: 'Os pedidos enviados depois do prazo serão rejeitados.',
          },
        ],
        voice: {
          bot: 'Bună ziua, am primit e-mailul dumneavoastră. Doriți să vă confirmăm programarea prin e-mail sau prin telefon?',
          botTranslation: 'Bom dia, recebemos o seu e-mail. O senhor deseja que confirmemos o agendamento por e-mail ou por telefone?',
          expected: ['Vă rog să mi-o confirmați prin e-mail. Vă mulțumesc!', 'prin e-mail', 'vă rog să', 'confirmați', 'vă mulțumesc'],
          hint: 'Responda no registro formal: «Vă rog să…» + subjuntivo terminado em -ți.',
        },
        communityPrompt: 'Escreva um e-mail formal curto à prefeitura (Stimate domnule… / Stimată doamnă… — Cu stimă) pedindo um documento com «Vă rog să…».',
      },
      {
        id: 'ro-u10-l3',
        title: 'Desafio de voz: no banco',
        kind: 'voz',
        words: ['bancă', 'cont bancar', 'card', 'semnătură', 'împrumut', 'dobândă'],
        cloze: [
          {
            sentence: 'Contul bancar ___ deschis în aceeași zi.',
            answer: 'va fi',
            options: ['va fi', 'vor fi', 'veți fi'],
            translation: 'A conta bancária será aberta no mesmo dia.',
          },
          {
            sentence: 'Cardul ___ trimite prin poștă în cinci zile lucrătoare.',
            answer: 'se',
            options: ['se', 'își', 'o'],
            translation: 'O cartão é enviado pelo correio em cinco dias úteis.',
          },
          {
            sentence: 'Împrumutul a fost aprobat, iar dobânda a fost ___ la 7%.',
            answer: 'stabilită',
            options: ['stabilită', 'stabilit', 'stabilite'],
            translation: 'O empréstimo foi aprovado, e os juros foram fixados em 7%.',
          },
        ],
        voice: {
          bot: 'Bună ziua! Pentru deschiderea unui cont bancar avem nevoie de actul de identitate și de semnătura dumneavoastră aici. Doriți și un card?',
          botTranslation:
            'Bom dia! Para abrir uma conta bancária precisamos do seu documento de identidade e da sua assinatura aqui. O senhor deseja também um cartão?',
          expected: ['Da, vă rog. În cât timp va fi trimis cardul?', 'da, vă rog', 'va fi trimis', 'cardul', 'în cât timp'],
          hint: 'Aceite e pergunte o prazo com a passiva: «În cât timp va fi trimis cardul?».',
        },
        communityPrompt:
          'Escreva 3 frases sobre o que acontece quando alguém abre uma conta: use a passiva com «a fi» (este verificat, va fi trimis) e o «se» passivo.',
      },
      {
        id: 'ro-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Stimate domnule, vă informăm că cererea dumneavoastră nu a putut fi aprobată, deoarece lipsește adeverința de la locul de muncă. Ce doriți să faceți?',
          botTranslation:
            'Prezado senhor, informamos que o seu pedido não pôde ser aprovado, pois falta a declaração do local de trabalho. O que o senhor deseja fazer?',
          expected: [
            'Vă rog să-mi spuneți până când trebuie depusă adeverința, ca dosarul să fie analizat din nou.',
            'vă rog să',
            'trebuie depusă',
            'adeverința',
            'să fie analizat',
            'din nou',
          ],
          hint: 'Peça o prazo no registro formal e use a passiva: «…trebuie depusă», «…să fie analizat».',
        },
        communityPrompt:
          'Escreva um e-mail formal completo ao banco ou à prefeitura: saudação, pedido com «Vă rugăm să…», uma frase na voz passiva, uma com o «se» passivo e o fecho «Cu stimă».',
      },
    ],
  },
  {
    id: 'ro-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Natureza selvagem',
    emoji: '🏔️',
    card: {
      id: 'ro-c11',
      title: 'Cárpatos e Delta: a Romênia selvagem',
      emoji: '🐻',
      history:
        'Os Cárpatos atravessam a Romênia em arco, e o ponto mais alto do país é o Pico Moldoveanu, com 2.544 m. Nas suas florestas vive a maior população de ursos-pardos da Europa fora da Rússia, além de lobos e linces. No outro extremo do país, o Danúbio se abre em três braços principais (Chilia, Sulina e Sfântu Gheorghe) antes de desaguar no Mar Negro. O Delta do Danúbio, uma das maiores áreas úmidas da Europa, é Patrimônio Mundial da UNESCO desde 1991 e abriga colônias de pelicanos-brancos e pelicanos-crespos.',
      culture_tip:
        'As trilhas de montanha são sinalizadas com marcas coloridas (faixa, cruz, triângulo ou ponto em vermelho, azul ou amarelo). Em área de urso, nunca deixe comida exposta, faça barulho ao caminhar e jamais alimente os animais. Em emergência, ligue 112, que aciona o resgate de montanha (Salvamont).',
      grammar_why:
        'O gerúndio romeno termina em -ând ou -ind: merge → mergând (andando), privi → privind (olhando). Ele indica como ou quando algo acontece, como o nosso: «Mergând pe potecă…» = «Andando pela trilha…». Diferença importante: o romeno NÃO usa gerúndio para a ação em curso; «estou andando» é só «merg». Os pronomes se colam no fim com hífen: văzându-l (vendo-o). Já o particípio, usado como adjetivo, concorda em gênero e número: o zonă protejată, urși speriați. E as expressões idiomáticas mudam o sentido das palavras: a da de (topar com), a-și face griji (preocupar-se), a o lua la sănătoasa (dar no pé).',
      grammar_examples: [
        ['Mergând pe potecă, am dat de un urs.', 'Andando pela trilha, dei de cara com um urso.'],
        ['Privind pelicanii, am uitat de oboseală.', 'Olhando os pelicanos, esqueci o cansaço.'],
        ['Delta Dunării este o zonă protejată.', 'O Delta do Danúbio é uma área protegida.'],
        ['Văzându-ne, lupul a luat-o la sănătoasa.', 'Ao nos ver, o lobo deu no pé.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u11-l1',
        title: 'Trilhas nos Cárpatos',
        kind: 'licao',
        words: ['drumeție', 'traseu', 'vârf', 'rucsac', 'cort', 'a se rătăci'],
        cloze: [
          {
            sentence: '___ pe traseul marcat, nu te poți rătăci.',
            answer: 'Mergând',
            options: ['Mergând', 'Mers', 'Merge'],
            translation: 'Seguindo pela trilha marcada, você não tem como se perder.',
          },
          {
            sentence: 'Traseul ___ cu roșu duce până pe vârf.',
            answer: 'marcat',
            options: ['marcat', 'marcată', 'marcând'],
            translation: 'A trilha marcada em vermelho leva até o pico.',
          },
          {
            sentence: 'Ne-am rătăcit, dar până la urmă am ___ de o cabană.',
            answer: 'dat',
            options: ['dat', 'luat', 'făcut'],
            translation: 'Nós nos perdemos, mas no fim topamos com um refúgio.',
          },
        ],
        voice: {
          bot: 'Mâine urcăm pe Vârful Moldoveanu. Ce ai pus în rucsac?',
          botTranslation: 'Amanhã subimos o Pico Moldoveanu. O que você colocou na mochila?',
          expected: ['Am pus apă, mâncare și o hartă. Mergând încet, ajungem sus până la prânz.', 'am pus', 'hartă', 'mergând', 'apă', 'cortul'],
          hint: 'Diga o que levou e acrescente um gerúndio: «Mergând încet…».',
        },
        communityPrompt: 'Conte em 3 frases uma trilha que você fez, usando pelo menos dois gerúndios (mergând, urcând, privind).',
      },
      {
        id: 'ro-u11-l2',
        title: 'Ursos, lobos e javalis',
        kind: 'licao',
        words: ['lup', 'mistreț', 'cerb', 'sălbatic', 'a se speria', 'a-și face griji'],
        cloze: [
          {
            sentence: '___ urmele ursului, pădurarul a înțeles că animalul era aproape.',
            answer: 'Văzând',
            options: ['Văzând', 'Văzut', 'Vede'],
            translation: 'Vendo as pegadas do urso, o guarda florestal entendeu que o animal estava perto.',
          },
          {
            sentence: 'Nu-ți face ___, lupii îi evită pe oameni.',
            answer: 'griji',
            options: ['griji', 'grijă', 'grijile'],
            translation: 'Não se preocupe, os lobos evitam as pessoas.',
          },
          {
            sentence: 'Mistrețul speriat a luat-o la ___.',
            answer: 'sănătoasa',
            options: ['sănătoasa', 'sănătate', 'sănătos'],
            translation: 'O javali assustado deu no pé.',
          },
        ],
        voice: {
          bot: 'Am auzit că în munții aceștia sunt mulți urși. Nu ți-e frică?',
          botTranslation: 'Ouvi dizer que nestas montanhas há muitos ursos. Você não tem medo?',
          expected: ['Nu-mi fac griji. Făcând zgomot pe traseu, îi țin pe urși departe.', 'nu-mi fac griji', 'făcând zgomot', 'nu mi-e frică', 'zgomot'],
          hint: 'Tranquilize com «Nu-mi fac griji» e explique com um gerúndio: «Făcând zgomot…».',
        },
        communityPrompt:
          'Escreva o que fazer se você der de cara com um animal selvagem: use «a da de», um gerúndio e um particípio como adjetivo (speriat, rătăcit).',
      },
      {
        id: 'ro-u11-l3',
        title: 'Desafio de voz: no Delta do Danúbio',
        kind: 'voz',
        words: ['deltă', 'pelican', 'stuf', 'mlaștină', 'fluviu', 'a zbura'],
        cloze: [
          {
            sentence: 'Pelicanii zburau deasupra noastră, ___ spre mare.',
            answer: 'îndreptându-se',
            options: ['îndreptându-se', 'îndreptat', 'se îndreaptă'],
            translation: 'Os pelicanos voavam acima de nós, rumando para o mar.',
          },
          {
            sentence: 'Delta este acoperită de ___ și de lacuri.',
            answer: 'stuf',
            options: ['stuf', 'nisip', 'zăpadă'],
            translation: 'O Delta é coberto de caniço e de lagos.',
          },
          {
            sentence: 'Fluviul se ___ în Marea Neagră prin trei brațe.',
            answer: 'varsă',
            options: ['varsă', 'vărsat', 'vărsând'],
            translation: 'O rio deságua no Mar Negro por três braços.',
          },
        ],
        voice: {
          bot: 'Ai fost vreodată în Delta Dunării? Ce ai văzut acolo?',
          botTranslation: 'Você já foi ao Delta do Danúbio? O que você viu lá?',
          expected: [
            'Da, plimbându-mă cu barca, am văzut sute de pelicani zburând deasupra stufului.',
            'plimbându-mă',
            'am văzut',
            'pelicani',
            'zburând',
            'barca',
          ],
          hint: 'Conte o passeio com gerúndios: «plimbându-mă cu barca…», «…zburând».',
        },
        communityPrompt: 'Descreva um passeio de barco pelo Delta em 3–4 frases, com dois gerúndios e um particípio como adjetivo (ex.: o zonă protejată).',
      },
      {
        id: 'ro-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Organizăm o excursie: trei zile în Carpați sau trei zile în Deltă. Tu ce alegi și de ce?',
          botTranslation: 'Estamos organizando uma excursão: três dias nos Cárpatos ou três dias no Delta. O que você escolhe e por quê?',
          expected: [
            'Aleg Carpații, pentru că, mergând pe trasee marcate, poți vedea urși și lupi fără să-ți faci griji.',
            'aleg',
            'mergând',
            'pentru că',
            'griji',
            'delta',
            'carpații',
          ],
          hint: 'Escolha, justifique com um gerúndio e encaixe uma expressão idiomática da unidade.',
        },
        communityPrompt:
          'Escreva um relato de 5–6 frases de uma aventura na natureza romena: use gerúndios, particípios como adjetivo e pelo menos duas expressões (a-și face griji, a da de, a o lua la sănătoasa).',
      },
    ],
  },
  {
    id: 'ro-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Debates: os dois lados da questão',
    emoji: '🗞️',
    card: {
      id: 'ro-c12',
      title: 'Ficar ou partir? A Romênia em debate',
      emoji: '⚖️',
      history:
        'A Romênia entrou na União Europeia em 1º de janeiro de 2007, e os últimos países do bloco retiraram as restrições ao trabalho de romenos em 2014. Desde então, milhões de romenos vivem no exterior, e a diáspora romena está entre as maiores da Europa; entre as comunidades mais numerosas estão as da Itália, da Espanha e da Alemanha. Ao mesmo tempo, cidades como Cluj-Napoca e Bucareste se tornaram polos de tecnologia da informação. E quase metade da população ainda vive no meio rural, o que mantém vivo o debate sobre cidade × campo.',
      culture_tip:
        'Romenos adoram discutir à mesa, e todo mundo «își dă cu părerea» (dá seu pitaco). Para discordar sem ofender, reconheça antes o outro lado: «Aveți dreptate într-o privință, totuși…». Emigração é um tema pessoal: quase toda família tem alguém «afară» (no exterior), então evite rótulos pejorativos e generalizações.',
      grammar_why:
        'Para dar opinião, use «consider că», «cred că» ou «din punctul meu de vedere» + indicativo; ao contrário do português («não acho que SEJA»), o romeno normalmente mantém o indicativo mesmo na negação: «nu cred că e». Já depois de expressões impessoais (e important, e necesar, e posibil, e bine) vem «să» + subjuntivo, onde o português usa «que» + subjuntivo ou infinitivo. Se o sujeito aparece antes do verbo, entra «ca … să»: «e important ca tinerii să rămână». Na 3ª pessoa o subjuntivo troca a vogal final: pleacă → să plece, lucrează → să lucreze, are → să aibă, este → să fie. Os conectores organizam o argumento: pe de o parte… pe de altă parte, în primul rând, totuși, în schimb, prin urmare.',
      grammar_examples: [
        ['Consider că munca de acasă are multe avantaje.', 'Considero que o trabalho remoto tem muitas vantagens.'],
        ['E important ca tinerii să aibă oportunități în țară.', 'É importante que os jovens tenham oportunidades no país.'],
        [
          'Pe de o parte, salariile sunt mai mari în străinătate; pe de altă parte, familia rămâne acasă.',
          'Por um lado, os salários são maiores no exterior; por outro, a família fica em casa.',
        ],
        ['Nu sunt de acord că satul nu mai are viitor.', 'Não concordo que a aldeia não tenha mais futuro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u12-l1',
        title: 'Ficar ou partir?',
        kind: 'licao',
        words: ['țară', 'oraș', 'salariu', 'a-i fi dor de', 'identitate', 'globalizare'],
        cloze: [
          {
            sentence: 'E important ca tinerii să ___ oportunități în țară.',
            answer: 'aibă',
            options: ['aibă', 'au', 'avea'],
            translation: 'É importante que os jovens tenham oportunidades no país.',
          },
          {
            sentence: 'Din punctul meu de ___, plecarea în străinătate e o decizie grea.',
            answer: 'vedere',
            options: ['vedere', 'părere', 'gând'],
            translation: 'Do meu ponto de vista, ir para o exterior é uma decisão difícil.',
          },
          {
            sentence: 'Pe de o parte, salariul e mai mare; pe de ___ parte, îți e dor de familie.',
            answer: 'altă',
            options: ['altă', 'alta', 'o'],
            translation: 'Por um lado, o salário é maior; por outro, você sente saudade da família.',
          },
        ],
        voice: {
          bot: 'Mulți români au plecat în străinătate în ultimii douăzeci de ani. Dumneavoastră ce credeți: e un câștig sau o pierdere pentru țară?',
          botTranslation: 'Muitos romenos foram para o exterior nos últimos vinte anos. O que o senhor acha: é um ganho ou uma perda para o país?',
          expected: [
            'Din punctul meu de vedere, e și un câștig, și o pierdere: pe de o parte, oamenii câștigă mai bine; pe de altă parte, țara pierde tineri.',
            'din punctul meu de vedere',
            'pe de o parte',
            'pe de altă parte',
            'consider că',
          ],
          hint: 'Mostre os dois lados com «pe de o parte… pe de altă parte» e diga sua opinião.',
        },
        communityPrompt: 'Escreva 3–4 frases sobre emigração usando «pe de o parte… pe de altă parte» e uma frase com «e important ca… să…».',
      },
      {
        id: 'ro-u12-l2',
        title: 'Tecnologia: aliada ou ameaça?',
        kind: 'licao',
        words: ['tehnologie', 'digitalizare', 'automatizare', 'rețea de socializare', 'confidențialitate', 'inovație'],
        cloze: [
          {
            sentence: 'Consider ___ rețelele de socializare ne apropie de cei dragi.',
            answer: 'că',
            options: ['că', 'să', 'ca'],
            translation: 'Considero que as redes sociais nos aproximam das pessoas queridas.',
          },
          {
            sentence: 'E necesar ca statul să ___ confidențialitatea datelor.',
            answer: 'protejeze',
            options: ['protejeze', 'protejează', 'proteja'],
            translation: 'É necessário que o Estado proteja a privacidade dos dados.',
          },
          {
            sentence: 'Automatizarea creează locuri de muncă noi; ___, multe meserii vechi dispar.',
            answer: 'totuși',
            options: ['totuși', 'deci', 'deoarece'],
            translation: 'A automação cria novos empregos; ainda assim, muitas profissões antigas desaparecem.',
          },
        ],
        voice: {
          bot: 'Am citit un articol care spune că inteligența artificială va lua locul multor profesori. Sunteți de acord?',
          botTranslation: 'Li um artigo que diz que a inteligência artificial vai tomar o lugar de muitos professores. O senhor concorda?',
          expected: [
            'Nu sunt de acord în totalitate. Consider că tehnologia îi poate ajuta pe profesori, dar e important ca elevii să aibă și un om în fața lor.',
            'nu sunt de acord',
            'sunt de acord',
            'consider că',
            'e important',
          ],
          hint: 'Concorde ou discorde («sunt / nu sunt de acord») e justifique com «consider că…».',
        },
        communityPrompt:
          'Dê sua opinião sobre redes sociais para adolescentes: use «consider că», um conector de contraste (totuși, în schimb) e «e necesar ca… să…».',
      },
      {
        id: 'ro-u12-l3',
        title: 'Desafio de voz: cidade ou campo?',
        kind: 'voz',
        words: ['sat', 'câmp', 'urbanizare', 'infrastructură', 'a avea dreptate', 'a fi de acord'],
        cloze: [
          {
            sentence: 'Aveți ___ în privința aerului curat, dar la sat lipsesc spitalele.',
            answer: 'dreptate',
            options: ['dreptate', 'drept', 'dreapta'],
            translation: 'O senhor tem razão quanto ao ar puro, mas na aldeia faltam hospitais.',
          },
          {
            sentence: 'E posibil ca tot mai mulți oameni să se ___ la țară.',
            answer: 'mute',
            options: ['mute', 'mută', 'muta'],
            translation: 'É possível que cada vez mais pessoas se mudem para o interior.',
          },
          {
            sentence: 'Nu ___ de acord că orașul e singura soluție.',
            answer: 'sunt',
            options: ['sunt', 'fiu', 'este'],
            translation: 'Não concordo que a cidade seja a única solução.',
          },
        ],
        voice: {
          bot: 'Dacă ați avea de ales, ați locui la oraș sau la sat? Argumentați.',
          botTranslation: 'Se o senhor tivesse de escolher, moraria na cidade ou na aldeia? Argumente.',
          expected: [
            'Aș locui la sat. În primul rând, viața e mai liniștită; în al doilea rând, aerul e mai curat. Totuși, e important ca satul să aibă o infrastructură bună.',
            'aș locui',
            'în primul rând',
            'totuși',
            'e important',
          ],
          hint: 'Escolha um lado, dê dois motivos («în primul rând… în al doilea rând») e faça uma ressalva com «totuși».',
        },
        communityPrompt: 'Defenda o lado oposto ao seu no debate cidade × campo em 3 frases, usando «nu sunt de acord că…» e «e posibil ca… să…».',
      },
      {
        id: 'ro-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Suntem în direct la radio, la o dezbatere. Tema de azi: «Ar trebui tinerii să rămână în țară?» Aveți un minut: prezentați ambele părți și apoi concluzia dumneavoastră.',
          botTranslation:
            'Estamos ao vivo no rádio, num debate. O tema de hoje: «Os jovens deveriam ficar no país?» O senhor tem um minuto: apresente os dois lados e depois a sua conclusão.',
          expected: [
            'Pe de o parte, e firesc ca tinerii să caute salarii mai mari în străinătate; pe de altă parte, țara are nevoie de ei. Din punctul meu de vedere, e important ca statul să le ofere motive să rămână.',
            'pe de o parte',
            'pe de altă parte',
            'din punctul meu de vedere',
            'e important ca',
          ],
          hint: 'Apresente os dois lados, conclua com sua opinião e use pelo menos um «e important ca… să…».',
        },
        communityPrompt:
          'Escreva um pequeno artigo de opinião (5–6 frases) sobre emigração, tecnologia ou cidade × campo, com argumentos dos dois lados, conectores (în primul rând, totuși, prin urmare) e uma conclusão com «consider că».',
      },
    ],
  },
  {
    id: 'ro-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Humor, ironia e registro',
    emoji: '😄',
    card: {
      id: 'ro-c13',
      title: 'Bulă, bancuri e a arte da ironia',
      emoji: '😏',
      history:
        'O «banc» é a piada curta que corre de boca em boca, e o personagem mais famoso delas é Bulă, o aluno trapalhão e malandro que tira a professora do sério, parente próximo do nosso Joãozinho. Durante o regime comunista, as piadas políticas circulavam em voz baixa e funcionavam como uma válvula de escape, porque contá-las em público podia trazer problemas. Muito antes disso, o folclore já tinha Păcală, o esperto que engana todo mundo, e Tândală, seu companheiro ingênuo, reunidos em versos por Petre Dulfu em «Isprăvile lui Păcală». Esse gosto pela autoironia continua forte no humor romeno de hoje.',
      culture_tip:
        'O humor romeno é seco e cheio de autoironia; a frase «Las’ că merge și așa» («deixa, assim mesmo já serve») virou símbolo do jeitinho local. Por escrito, a ironia é traiçoeira: um «Bravo!» ou «Super, mersi!» sem contexto pode soar sarcástico. Com pessoas mais velhas, não passe para o «tu» antes de ser convidado, e cuidado com «dumneata»: dito por um jovem, pode soar condescendente.',
      grammar_why:
        'O romeno tem três degraus de tratamento. «Tu» é íntimo, como o nosso «você» entre amigos. «Dumneavoastră» é o formal, «o senhor / a senhora», com o verbo na 2ª pessoa do plural: «Dumneavoastră ce credeți?». No meio fica «dumneata», com verbo na 2ª do singular («Dumneata ce crezi?»): respeitoso mas familiar, típico de gente mais velha ou do interior. A fala coloquial se apoia em partículas: «păi» (ué, bom…, abre respostas óbvias), «ia» (anda, vai: «Ia zi!»), «cică» (dizem que, parece que, o «diz que» do português) e «las’ că» (deixa estar, para consolar ou ameaçar de brincadeira). Os diminutivos (-uț, -el, -ică, -iță) dão carinho, «cafeluță», «băiețel», mas, ditos com o tom certo, viram ironia pura, como o nosso «espertinho».',
      grammar_examples: [
        ['Tu vii? / Dumneata vii? / Dumneavoastră veniți?', 'Você vem? / O senhor vem? (familiar) / O senhor vem? (formal)'],
        ['Ia zi, ce s-a întâmplat?', 'Anda, conta: o que aconteceu?'],
        ['Cică mâine ninge.', 'Diz que amanhã vai nevar.'],
        ['Las’ că te prind eu, deșteptule!', 'Deixa estar que eu te pego, espertinho!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u13-l1',
        title: 'Bulă e os bancuri',
        kind: 'licao',
        words: ['a face glume', 'glumeț', 'râs', 'a se amuza', 'a se face de râs', 'la mintea cocoșului'],
        cloze: [
          {
            sentence: '___ Bulă a luat zece la matematică. — Nu mai spune!',
            answer: 'Cică',
            options: ['Cică', 'Ia', 'Las’ că'],
            translation: 'Diz que o Bulă tirou dez em matemática. — Não diga!',
          },
          {
            sentence: '— De ce n-ai făcut tema, Bulă? — ___, doamnă învățătoare, n-am avut curent!',
            answer: 'Păi',
            options: ['Păi', 'Ia', 'Cică'],
            translation: '— Por que você não fez a lição, Bulă? — Ué, professora, faltou luz!',
          },
          { sentence: '___ zi bancul cu Bulă la doctor!', answer: 'Ia', options: ['Ia', 'Păi', 'Cică'], translation: 'Anda, conta a piada do Bulă no médico!' },
        ],
        voice: {
          bot: 'Ia zi, știi vreun banc bun cu Bulă? Că azi am chef de râs.',
          botTranslation: 'Anda, você sabe alguma piada boa do Bulă? Porque hoje estou a fim de rir.',
          expected: [
            'Păi, știu unul! Învățătoarea îl întreabă pe Bulă: «Cât fac doi și cu doi?» Bulă: «Depinde, doamnă: cumpărăm sau vindem?»',
            'păi',
            'știu unul',
            'Bulă',
            'banc',
          ],
          hint: 'Comece com «Păi, știu unul!» e conte uma piada curta com diálogo.',
        },
        communityPrompt: 'Conte (ou invente) um banc curto com o Bulă, começando com «Păi…» ou «Cică…».',
      },
      {
        id: 'ro-u13-l2',
        title: 'Tu, dumneata ou dumneavoastră?',
        kind: 'licao',
        words: ['Sărut mâna', 'a face cunoștință', 'a-și cere scuze', 'jenat', 'a lua loc', 'Cu drag'],
        cloze: [
          {
            sentence: 'Doamnă profesoară, dumneavoastră ce ___?',
            answer: 'credeți',
            options: ['credeți', 'crezi', 'crede'],
            translation: 'Professora, o que a senhora acha?',
          },
          {
            sentence: 'Dumneata ___ de mult în cartierul ăsta, nene Ioane?',
            answer: 'stai',
            options: ['stai', 'stați', 'stă'],
            translation: 'O senhor mora há muito tempo neste bairro, seu João?',
          },
          {
            sentence: 'Îmi cer scuze, n-am vrut să vă ___.',
            answer: 'tutuiesc',
            options: ['tutuiesc', 'tutuiești', 'tutuiască'],
            translation: 'Desculpe, não quis tratar o senhor por «tu».',
          },
        ],
        voice: {
          bot: 'Auzi, tinere, de când ne tutuim noi doi? Eu am vârsta bunicii tale!',
          botTranslation: 'Escuta, rapaz, desde quando a gente se trata por «tu»? Eu tenho a idade da sua avó!',
          expected: [
            'Sărut mâna, doamnă, îmi cer scuze! N-am vrut să fiu nepoliticos. Dumneavoastră cum vă simțiți azi?',
            'îmi cer scuze',
            'sărut mâna',
            'dumneavoastră',
            'vă rog să mă scuzați',
          ],
          hint: 'Peça desculpas com «Sărut mâna» e «îmi cer scuze» e passe para «dumneavoastră».',
        },
        communityPrompt: 'Escreva a mesma pergunta («Você quer um café?») em três registros, com tu, dumneata e dumneavoastră, e diga a quem diria cada uma.',
      },
      {
        id: 'ro-u13-l3',
        title: 'Desafio de voz: ironia e mal-entendidos',
        kind: 'voz',
        words: ['ironic', 'a-și bate joc de', 'a scoate din sărite', 'a-i sări țandăra', 'Nu mai spune!', 'a face din țânțar armăsar'],
        cloze: [
          {
            sentence: 'Bravo, ___, iar ai uitat cheile!',
            answer: 'deșteptule',
            options: ['deșteptule', 'deștept', 'deșteaptă'],
            translation: 'Parabéns, gênio, esqueceu as chaves de novo!',
          },
          {
            sentence: '___ că nu-i nimic, mâine e altă zi!',
            answer: 'Las’',
            options: ['Las’', 'Ia', 'Păi'],
            translation: 'Deixa pra lá, não foi nada, amanhã é outro dia!',
          },
          {
            sentence: 'Nu te supăra, a fost doar o glumă; nu mi-am bătut joc ___ tine!',
            answer: 'de',
            options: ['de', 'cu', 'pe'],
            translation: 'Não fica bravo, foi só uma brincadeira; eu não zombei de você!',
          },
        ],
        voice: {
          bot: 'Ți-am scris «Super, mersi mult!» și tu te-ai supărat. Chiar ai crezut că eram ironic?',
          botTranslation: 'Eu te escrevi «Super, valeu mesmo!» e você ficou chateado. Você achou mesmo que eu estava sendo irônico?',
          expected: [
            'Păi, da! În mesaj părea ironic. Las’ că nu-i nimic, poate am făcut din țânțar armăsar.',
            'păi',
            'ironic',
            'nu-i nimic',
            'din țânțar armăsar',
          ],
          hint: 'Explique o mal-entendido com «păi» e ponha panos quentes com «las’ că nu-i nimic».',
        },
        communityPrompt: 'Escreva uma mensagem que poderia soar irônica em romeno e depois reescreva-a sem deixar dúvida, usando um diminutivo afetivo.',
      },
      {
        id: 'ro-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ia zi, dumneata, cică în Brazilia e carnaval tot anul și nu muncește nimeni, așa-i?',
          botTranslation: 'Anda, me conta: diz que no Brasil é carnaval o ano inteiro e ninguém trabalha, é isso?',
          expected: [
            'Păi, nu chiar, domnule! Carnavalul ține doar câteva zile, în rest muncim ca toată lumea. Dar las’ că vă invit și vedeți cu ochii dumneavoastră!',
            'păi',
            'nu chiar',
            'las’ că',
            'dumneavoastră',
          ],
          hint: 'Responda com humor e sem ofender: desfaça o «cică» com «Păi, nu chiar…» e trate o senhor por «dumneavoastră».',
        },
        communityPrompt:
          'Escreva um diálogo curto em dois registros: primeiro entre amigos (tu, păi, ia, um diminutivo), depois com um desconhecido mais velho (dumneavoastră), mantendo a mesma piada.',
      },
    ],
  },
  {
    id: 'ro-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Ciência e inovação romenas',
    emoji: '🔬',
    card: {
      id: 'ro-c14',
      title: 'De Vuia a Paulescu: a Romênia no laboratório',
      emoji: '🧪',
      history:
        'Em 1906, perto de Paris, Traian Vuia fez voar por cerca de 12 metros um monoplano que decolou por meios próprios, sem catapulta. Henri Coandă apresentou no Salão Aeronáutico de Paris de 1910 o Coandă-1910, um avião experimental sem hélice, e deu nome ao efeito Coandă: a tendência de um jato de fluido acompanhar uma superfície curva próxima. O principal aeroporto de Bucareste leva o nome dele. Em 1921, o fisiologista Nicolae Paulescu publicou seus resultados com a «pancreína», um extrato de pâncreas que baixava o açúcar no sangue de cães diabéticos; o Nobel de 1923 pela insulina, porém, foi para Banting e Macleod. Victor Babeș, um dos pioneiros da bacteriologia, é lembrado no gênero de parasitas Babesia e no nome da Universidade Babeș-Bolyai, em Cluj.',
      culture_tip:
        'Em artigos e relatórios romenos, a primeira pessoa quase some: prefere-se «se observă că», «s-a constatat» ou o «noi» de modéstia («considerăm că»). Em e-mails a professores e pesquisadores, abra com «Stimate domnule profesor» ou «Stimată doamnă doctor» e feche com «Cu stimă». Títulos acadêmicos pesam: chamar um doutor de «domnule doctor» é sinal de respeito.',
      grammar_why:
        'O texto técnico romeno se apoia em três ferramentas. A primeira é a nominalização: o infinitivo longo em -are, -ere, -ire vira substantivo feminino (a dezvolta → dezvoltarea, a cerceta → cercetarea, a descoperi → descoperirea), como o nosso «desenvolvimento» ou «pesquisa». A segunda é a voz passiva e impessoal: «a fost descoperită» (foi descoberta, com o particípio concordando) ou o «se» passivo, «se consideră», «s-a demonstrat», igual ao «considera-se» do português formal. A terceira é o genitivo em cadeia: cada possuidor leva -ului, -ei ou -ilor, e quando ele não vem colado a um substantivo com artigo entra o artigo possessivo al/a/ai/ale. Assim, «rezultatele cercetării echipei» são «os resultados da pesquisa da equipe», e «o descoperire a lui Paulescu» é «uma descoberta de Paulescu».',
      grammar_examples: [
        ['Dezvoltarea industriei aeronautice a țării', 'O desenvolvimento da indústria aeronáutica do país'],
        ['Insulina a fost descoperită în anii 1920.', 'A insulina foi descoberta nos anos 1920.'],
        ['Se consideră că rezultatele cercetării sunt valide.', 'Considera-se que os resultados da pesquisa são válidos.'],
        ['o descoperire importantă a lui Paulescu', 'uma descoberta importante de Paulescu'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u14-l1',
        title: 'Vuia, Coandă e o voo',
        kind: 'licao',
        words: ['invenție', 'a inventa', 'inginer', 'pilot', 'a zbura', 'experiment'],
        cloze: [
          {
            sentence: 'Primul avion al lui Traian Vuia a fost ___ în Franța.',
            answer: 'construit',
            options: ['construit', 'construită', 'construiți'],
            translation: 'O primeiro avião de Traian Vuia foi construído na França.',
          },
          {
            sentence: 'Tendința unui jet de fluid de a urma o suprafață curbă ___ «efectul Coandă».',
            answer: 'se numește',
            options: ['se numește', 'se numesc', 'numește'],
            translation: 'A tendência de um jato de fluido de acompanhar uma superfície curva se chama «efeito Coandă».',
          },
          {
            sentence: 'Zborul din 1906 ___ lui Traian Vuia a intrat în istoria aviației.',
            answer: 'al',
            options: ['al', 'a', 'ale'],
            translation: 'O voo de 1906 de Traian Vuia entrou para a história da aviação.',
          },
        ],
        voice: {
          bot: 'Ați putea explica, pe scurt și într-un registru științific, în ce constă efectul Coandă?',
          botTranslation: 'O senhor poderia explicar, resumidamente e em registro científico, em que consiste o efeito Coandă?',
          expected: [
            'Efectul Coandă constă în tendința unui jet de fluid de a urma o suprafață curbă din apropiere, fenomen studiat sistematic de inginerul Henri Coandă.',
            'constă în',
            'tendința',
            'suprafață curbă',
            'jet',
          ],
          hint: 'Comece com «Efectul Coandă constă în…» e use uma nominalização como «tendința».',
        },
        communityPrompt:
          'Escreva 3–4 frases em romeno, em estilo de enciclopédia, sobre Vuia ou Coandă, com pelo menos uma passiva (a fost + particípio) e uma nominalização em -are/-ere/-ire.',
      },
      {
        id: 'ro-u14-l2',
        title: 'Paulescu, Babeș e a medicina',
        kind: 'licao',
        words: ['descoperire', 'cercetător', 'laborator', 'medicină', 'bacterie', 'celulă'],
        cloze: [
          {
            sentence: 'În 1921, Nicolae Paulescu a publicat rezultatele ___ sale privind extractul pancreatic.',
            answer: 'cercetărilor',
            options: ['cercetărilor', 'cercetările', 'cercetare'],
            translation: 'Em 1921, Nicolae Paulescu publicou os resultados de suas pesquisas sobre o extrato pancreático.',
          },
          {
            sentence: 'Premiul Nobel din 1923 ___ lui Banting și lui Macleod.',
            answer: 'a fost acordat',
            options: ['a fost acordat', 'a fost acordată', 'au fost acordați'],
            translation: 'O Prêmio Nobel de 1923 foi concedido a Banting e a Macleod.',
          },
          {
            sentence: 'Genul de paraziți Babesia poartă numele ___ Victor Babeș.',
            answer: 'lui',
            options: ['lui', 'al', 'a'],
            translation: 'O gênero de parasitas Babesia leva o nome de Victor Babeș.',
          },
        ],
        voice: {
          bot: 'De ce credeți că numele lui Paulescu este mai puțin cunoscut decât ar merita în istoria insulinei?',
          botTranslation: 'Por que o senhor acha que o nome de Paulescu é menos conhecido do que mereceria na história da insulina?',
          expected: [
            'Deși rezultatele cercetărilor sale au fost publicate în 1921, Premiul Nobel a fost acordat în 1923 lui Banting și Macleod, iar contribuția lui Paulescu a fost recunoscută abia mai târziu.',
            'au fost publicate',
            'Premiul Nobel',
            'contribuția',
            'recunoscută',
          ],
          hint: 'Use a passiva («au fost publicate», «a fost acordat») e um genitivo («contribuția lui Paulescu»).',
        },
        communityPrompt:
          'Resuma em 4 frases a história da descoberta da insulina, com um genitivo em cadeia (ex.: «rezultatele cercetărilor lui Paulescu») e a construção «se consideră că».',
      },
      {
        id: 'ro-u14-l3',
        title: 'Desafio de voz: o relatório técnico',
        kind: 'voz',
        words: ['dezvoltare', 'cercetare', 'inovație', 'industrie', 'investiție', 'creștere'],
        cloze: [
          {
            sentence: 'În ultimii ani ___ o creștere a investițiilor în cercetare și dezvoltare.',
            answer: 's-a înregistrat',
            options: ['s-a înregistrat', 's-au înregistrat', 'a înregistrat'],
            translation: 'Nos últimos anos registrou-se um aumento dos investimentos em pesquisa e desenvolvimento.',
          },
          {
            sentence: 'Se ___ că inovația este principalul motor al dezvoltării economice.',
            answer: 'consideră',
            options: ['consideră', 'consider', 'considerăm'],
            translation: 'Considera-se que a inovação é o principal motor do desenvolvimento econômico.',
          },
          {
            sentence: '___ infrastructurii digitale a devenit o prioritate pentru multe întreprinderi.',
            answer: 'Dezvoltarea',
            options: ['Dezvoltarea', 'A dezvolta', 'Dezvoltat'],
            translation: 'O desenvolvimento da infraestrutura digital tornou-se uma prioridade para muitas empresas.',
          },
        ],
        voice: {
          bot: 'Vă rog să prezentați, într-un registru formal, concluziile raportului despre inovație: ce s-a constatat și ce se recomandă?',
          botTranslation: 'Por favor, apresente em registro formal as conclusões do relatório sobre inovação: o que se constatou e o que se recomenda?',
          expected: [
            'Din raport reiese că s-a înregistrat o creștere a investițiilor în cercetare, iar pentru dezvoltarea sectorului se recomandă o colaborare mai strânsă între universități și industrie.',
            's-a înregistrat',
            'se recomandă',
            'creștere',
            'dezvoltarea',
          ],
          hint: 'Fale sem «eu»: «Din raport reiese că…», «s-a înregistrat…», «se recomandă…».',
        },
        communityPrompt:
          'Escreva o parágrafo de conclusão de um relatório técnico fictício sobre inovação usando só construções impessoais (se constată, s-a înregistrat, se recomandă).',
      },
      {
        id: 'ro-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sunteți invitat la o conferință. Prezentați, în câteva fraze, contribuția unui om de știință român și impactul descoperirii sale asupra dezvoltării domeniului.',
          botTranslation:
            'O senhor foi convidado para uma conferência. Apresente, em poucas frases, a contribuição de um cientista romeno e o impacto de sua descoberta no desenvolvimento da área.',
          expected: [
            'Contribuția lui Nicolae Paulescu la descoperirea insulinei este considerată esențială: extractul pancreatic a fost testat pe câini diabetici, iar rezultatele cercetărilor sale au fost publicate în 1921.',
            'contribuția',
            'a fost',
            'descoperirea',
            'cercetărilor',
          ],
          hint: 'Junte tudo: nominalização («descoperirea»), passiva («a fost testat») e genitivo em cadeia.',
        },
        communityPrompt:
          'Escreva um resumo acadêmico (abstract) de 6–8 frases sobre um cientista romeno à sua escolha, combinando nominalizações, passiva, construções com «se» e ao menos dois genitivos em cadeia.',
      },
    ],
  },
  {
    id: 'ro-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Literatura e sabedoria popular',
    emoji: '📜',
    card: {
      id: 'ro-c15',
      title: 'Eminescu, Creangă e a voz do povo',
      emoji: '🪶',
      history:
        'Mihai Eminescu (1850–1889) é considerado o poeta nacional da Romênia; o longo poema «Luceafărul» (1883) é um marco da língua literária, e o dia do seu nascimento, 15 de janeiro, é o Dia da Cultura Nacional. Seu amigo Ion Creangă (1837–1889), de Humulești, foi diácono e professor primário e escreveu «Amintiri din copilărie» (Memórias da infância) e contos como «Capra cu trei iezi», num romeno moldavo saboroso e cheio de ditados. A balada popular «Miorița», recolhida e publicada por Vasile Alecsandri no século XIX, conta a história de um pastor moldavo avisado por sua ovelhinha de que os outros dois pastores planejam matá-lo. Em vez de fugir, ele pede para ser enterrado perto do rebanho e pede à ovelhinha que conte ao rebanho que ele se casou com uma rainha, «a noiva do mundo» (a morte), e à mãe, que se casou com uma filha de rei.',
      culture_tip:
        'Os romenos citam provérbios o tempo todo, e um provérbio bem colocado impressiona. Atenção aos regionalismos: na Transilvânia, «no» é uma interjeição («No, hai!» = «Bom, vamos!») e o pão pode ser «pită»; na Moldávia, a melancia é «harbuz»; no Banat, o tomate é «paradaisă». Imitar o sotaque de uma região pode soar como deboche; perguntar com curiosidade soa como carinho.',
      grammar_why:
        'O perfeito simples (perfectul simplu) é um passado de uma palavra só, como o nosso «partiu», «disse», «vieram»: plecă, zise, veniră. No romeno padrão falado ele foi substituído pelo perfeito composto (a plecat, a zis), mas continua vivo na narrativa literária, nos contos de fadas e na fala da Oltênia. Na 3ª pessoa do singular, os verbos em -a terminam em -ă tônico (plecă, cântă), os em -i terminam em -i (veni, dormi) e muitos outros em -u ou -se (făcu, fu, zise, spuse); no plural acrescenta-se -ră (plecară, veniră, ziseră, făcură). Na 1ª pessoa do singular, a forma termina em -i: plecai, venii, făcui, zisei (e, na Oltênia, «mă dusei»). Quem lê Creangă ou contos populares precisa reconhecer essas formas, assim como um brasileiro reconhece o «fizera» e o «dissera» dos romances antigos.',
      grammar_examples: [
        ['Împăratul se sculă, plecă la vânătoare și nu se mai întoarse.', 'O imperador se levantou, partiu para a caça e não voltou mais.'],
        ['Atunci ciobanul zise mioriței: «Spune-mi ce te doare.»', 'Então o pastor disse à ovelhinha: «Me diz o que te dói.»'],
        ['Veniră oaspeții și se așezară la masă.', 'Vieram os convidados e se sentaram à mesa.'],
        ['Și fu o nuntă mare, cum nu se mai văzuse.', 'E houve um grande casamento, como nunca se vira.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ro-u15-l1',
        title: 'Eminescu: lago, tílias e estrelas',
        kind: 'licao',
        words: ['poet', 'poezie', 'stea', 'lac', 'tei', 'codru'],
        cloze: [
          {
            sentence: 'Poetul ___ singur pe malul lacului, sub teii înfloriți.',
            answer: 'se opri',
            options: ['se opri', 'se opriră', 'mă oprii'],
            translation: 'O poeta parou sozinho à beira do lago, sob as tílias em flor.',
          },
          {
            sentence: 'Stelele ___ pe cer, iar codrul tăcu.',
            answer: 'răsăriră',
            options: ['răsăriră', 'răsări', 'răsării'],
            translation: 'As estrelas surgiram no céu, e a floresta se calou.',
          },
          {
            sentence: 'Eminescu ___ «Luceafărul» în 1883, într-un almanah de la Viena.',
            answer: 'publică',
            options: ['publică', 'publicară', 'publicai'],
            translation: 'Eminescu publicou «Luceafărul» em 1883, num almanaque de Viena.',
          },
        ],
        voice: {
          bot: 'Continuați povestea în stil literar, la perfectul simplu: «Într-o seară de vară, tânărul poet ieși din sat și…»',
          botTranslation: 'Continue a história em estilo literário, no perfeito simples: «Numa noite de verão, o jovem poeta saiu da aldeia e…»',
          expected: [
            'Într-o seară de vară, tânărul poet ieși din sat, se opri lângă lac și privi îndelung stelele care răsăriră deasupra codrului.',
            'se opri',
            'privi',
            'răsăriră',
            'lângă lac',
          ],
          hint: 'Encadeie verbos no perfeito simples: «se opri», «privi», «ascultă».',
        },
        communityPrompt:
          'Escreva 4–6 linhas de prosa poética em romeno à maneira de Eminescu (lago, tílias, estrelas, floresta), narrando com o perfeito simples (ex.: se opri, privi, tăcu).',
      },
      {
        id: 'ro-u15-l2',
        title: 'Creangă e a Miorița',
        kind: 'licao',
        words: ['basm', 'copilărie', 'scriitor', 'cioban', 'turmă', 'oaie'],
        cloze: [
          {
            sentence: 'Și ___ Nică la scăldat, deși mama îi spusese să rămână acasă.',
            answer: 'plecă',
            options: ['plecă', 'plecai', 'plecară'],
            translation: 'E Nică foi nadar no rio, embora a mãe lhe tivesse dito para ficar em casa.',
          },
          {
            sentence: 'Ciobanul moldovean ___ de la miorița lui că ceilalți doi voiau să-l omoare.',
            answer: 'află',
            options: ['află', 'aflară', 'aflai'],
            translation: 'O pastor moldavo soube pela sua ovelhinha que os outros dois queriam matá-lo.',
          },
          {
            sentence: 'Cei doi ciobani ___ între ei să-l omoare pe moldovean la apusul soarelui.',
            answer: 'se sfătuiră',
            options: ['se sfătuiră', 'se sfătui', 'ne sfătuirăm'],
            translation: 'Os dois pastores combinaram entre si matar o moldavo ao pôr do sol.',
          },
        ],
        voice: {
          bot: 'Povestiți pe scurt, ca un bătrân la gura sobei, ce află ciobanul moldovean de la mioriță și ce ceru el.',
          botTranslation: 'Conte em poucas palavras, como um velho ao pé do fogão, o que o pastor moldavo soube pela ovelhinha e o que ele pediu.',
          expected: [
            'Miorița îi spuse ciobanului că ceilalți doi se sfătuiseră să-l omoare, iar el, în loc să fugă, ceru să fie îngropat lângă stână și să i se spună mamei lui că s-a însurat cu o fată de crai.',
            'spuse',
            'ceru',
            'îngropat',
            'fată de crai',
          ],
          hint: 'Narre no perfeito simples: «Miorița îi spuse…», «el ceru…».',
        },
        communityPrompt: 'Reconte a balada «Miorița» em 5 frases no perfeito simples, como um contador de histórias de aldeia (plecă, află, zise, ceru…).',
      },
      {
        id: 'ro-u15-l3',
        title: 'Desafio de voz: provérbios e regionalismos',
        kind: 'voz',
        words: ['câine', 'a lătra', 'lup', 'carte', 'a tăcea', 'vrabie'],
        cloze: [
          {
            sentence: 'Câinele care ___ nu mușcă.',
            answer: 'latră',
            options: ['latră', 'lătră', 'lătrară'],
            translation: 'Cão que ladra não morde.',
          },
          {
            sentence: 'Mai bine o ___ în mână decât o cioară pe gard.',
            answer: 'vrabie',
            options: ['vrabie', 'carte', 'lup'],
            translation: 'Mais vale um pardal na mão do que uma gralha na cerca. (Mais vale um pássaro na mão do que dois voando.)',
          },
          {
            sentence: 'Un bătrân din Oltenia povestea: «Ieri mă ___ la târg și cumpărai o vacă.»',
            answer: 'dusei',
            options: ['dusei', 'duse', 'duseră'],
            translation: 'Um velho da Oltênia contava: «Ontem fui à feira e comprei uma vaca.»',
          },
        ],
        voice: {
          bot: 'No, ce zici, dragă? Știi vreo vorbă din bătrâni despre tăcere?',
          botTranslation: 'Bom, o que me diz, querido(a)? Conhece algum ditado dos antigos sobre o silêncio?',
          expected: [
            'Știu una: «Vorba e de argint, tăcerea e de aur.» Adică uneori e mai înțelept să taci decât să vorbești.',
            'tăcerea e de aur',
            'vorba',
            'argint',
            'să taci',
          ],
          hint: 'Cite um provérbio sobre o silêncio e explique-o. «No» é o «bom / então» da Transilvânia.',
        },
        communityPrompt:
          'Escolha dois provérbios romenos, explique o sentido de cada um em romeno e dê o equivalente brasileiro. Bônus: use numa frase uma palavra regional (pită, harbuz ou paradaisă).',
      },
      {
        id: 'ro-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sunteți la un cenaclu literar. Povestiți, la perfectul simplu, o scurtă legendă inventată de dumneavoastră și încheiați-o cu un proverb potrivit.',
          botTranslation:
            'O senhor está num círculo literário. Conte, no perfeito simples, uma lenda curta inventada pelo senhor e termine com um provérbio adequado.',
          expected: [
            'A fost odată un cioban care se grăbi să treacă muntele înainte de noapte; nu-și numără oile și pierdu jumătate din turmă. De atunci se zice: «Graba strică treaba.»',
            'a fost odată',
            'se zice',
            'de atunci',
            'pierdu',
          ],
          hint: 'Abra com «A fost odată…», narre no perfeito simples e feche com «De atunci se zice: …».',
        },
        communityPrompt:
          'Escreva um conto curto (8–10 frases) em estilo de basm, todo no perfeito simples, com uma fala de personagem entre « », uma palavra regional explicada e um provérbio no final.',
      },
    ],
  },
];
