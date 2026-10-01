import type { LanguageVariant } from '../types';

/** Variantes do romeno: o padrão da Romênia e o romeno da República da Moldávia. */
export const VARIANTS_RO: LanguageVariant[] = [
  {
    code: 'ro-RO',
    country: 'ROU',
    name: 'Romeno da Romênia (padrão)',
    flag: '🇷🇴',
    summary: 'A norma literária usada na escola, na mídia e nos documentos, na Romênia e também na Moldávia.',
  },
  {
    code: 'ro-MD',
    country: 'MDA',
    name: 'Romeno da Moldávia',
    flag: '🇲🇩',
    summary:
      'A língua oficial da República da Moldávia é o romeno: a norma escrita é a mesma da Romênia, mas a fala do dia a dia tem sotaque, palavras regionais e empréstimos coloquiais do russo.',
    card: {
      id: 'ro-md-c1',
      title: 'O romeno de Chișinău',
      emoji: '🇲🇩',
      history:
        'A República da Moldávia declarou independência em 27 de agosto de 1991. Em 1989 a língua voltou a ser escrita com alfabeto latino, depois de décadas em cirílico; por isso o dia 31 de agosto é feriado nacional, “Limba noastră” (Nossa língua). Em 2023 o Parlamento substituiu a expressão “limba moldovenească” por “limba română” na legislação. Parte da população é bilíngue romeno-russo, e no país vivem também comunidades de língua ucraniana, gagauz e búlgara.',
      culture_tip:
        'Na escola, na TV e nos documentos o romeno da Moldávia segue a mesma norma da Romênia, então tudo o que você aprendeu no app serve. As diferenças aparecem na conversa: sotaque, palavras regionais (várias também usadas na região da Moldávia romena, em Iași) e gírias vindas do russo. Entenda-as, mas não as imite para brincar: sotaque não é piada. E na mesa, “plăcinte” são pastéis finos de massa esticada, com recheio de queijo, repolho ou batata.',
      grammar_why:
        'A gramática é a mesma do padrão, mas a fala coloquial tem marcas próprias: (1) no pretérito composto, a 3ª pessoa usa o auxiliar “o” tanto no singular quanto no plural: “o venit” (padrão: “a venit” / “au venit”); (2) “îs” substitui “sunt” (eu sou / eles são), e “îi” ou “-i” substitui “este”; (3) demonstrativos “aista, aiasta” no lugar de “acesta, aceasta”; (4) “amu” no lugar de “acum”; (5) palavrinhas do russo no meio da frase, como “davai” (vamos, bora) e “ladna” (tá bom). Na escrita formal, use sempre o padrão.',
      grammar_examples: [
        ['Ei o venit ieri. (padrão: Ei au venit ieri.)', 'Eles vieram ontem.'],
        ['Mama o făcut plăcinte. (padrão: Mama a făcut plăcinte.)', 'A mãe fez plăcinte.'],
        ['Îs acasă amu. (padrão: Sunt acasă acum.)', 'Estou em casa agora.'],
        ['Aista-i fratele meu. (padrão: Acesta e fratele meu.)', 'Este é o meu irmão.'],
        ['Cartea îi pe masă. (padrão: Cartea e pe masă.)', 'O livro está na mesa.'],
        ['Davai, ne vedem mâine! (padrão: Hai, ne vedem mâine!)', 'Bora, a gente se vê amanhã!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      '“ce, ci, ge, gi” perdem o “t/d” inicial e viram chiado: [ʃ] e [ʒ]. “Ce faci?” soa como “Șe faș?”, e “cinci” como “șinși”.',
      'Palatalização das labiais na fala popular: “b, p, f” antes de “i/e” soam como “gh, ch, h”. “Bine” vira “ghine”, “picior” vira “chicior”, “fir” vira “hir”.',
      '“e” final átono fecha em “i”: “bine” vira “ghini”, “pe” vira “pi”, “mare” vira “mari”. Por isso o clássico “Ghini, mulțămesc!”.',
      'Depois de “s, z, ș, ț”, o “e” vira “ă” (a consoante fica “dura”): “zece” soa “zăci”, “seară” soa “sară”, “semn” soa “sămn”.',
      'Esses traços são mais fortes no campo e entre os mais velhos; em Chișinău, no rádio e na TV predomina a pronúncia padrão. Para você, a meta é entender, não imitar.',
    ],
    vocab: [
      ['cartofi', 'barabule', 'batatas', 'regional'],
      ['roșii', 'pătlăgele roșii', 'tomates', 'regional; também existe em partes da Romênia'],
      ['vinete', 'pătlăgele vinete', 'berinjelas', 'regional'],
      ['porumb', 'păpușoi', 'milho', 'regional; “mămăligă de păpușoi”'],
      ['varză', 'curechi', 'repolho', 'regional; também na Moldávia romena'],
      ['pepene verde', 'harbuz', 'melancia', 'regional'],
      ['struguri', 'poamă', 'uvas', 'regional; “a culege poama” = vindimar'],
      ['ciorbă de pui', 'zeamă', 'sopa de galinha azedinha, com macarrão caseiro', 'prato típico'],
      ['bunic', 'bunel', 'avô', 'regional; “bunica” continua igual'],
      ['fiu', 'fecior', 'filho', 'regional; também “rapaz”'],
      ['pisică', 'mâță', 'gato', 'regional; também na Transilvânia'],
      ['porumbel', 'hulub', 'pombo', 'regional'],
      ['cocoș', 'cucoș', 'galo', 'regional'],
      ['curte', 'ogradă', 'quintal, pátio da casa', 'regional'],
      ['cameră', 'odaie', 'cômodo, quarto', 'regional; também ouvido na Romênia'],
      ['bucătărie', 'cuhnie', 'cozinha', 'regional, coloquial'],
      ['acum', 'amu', 'agora', 'regional'],
      ['acesta / aceasta', 'aista / aiasta', 'este / esta', 'regional'],
      ['foarte', 'tare', 'muito (intensificador)', 'coloquial: “tare frumos”; existe também na Romênia'],
      ['sunt', 'îs', 'sou / são', 'coloquial'],
      ['a venit / au venit', 'o venit', 'veio / vieram', 'coloquial: auxiliar “o” na 3ª pessoa'],
      ['microbuz, maxi-taxi', 'rutieră', 'van de linha urbana', 'usual em Chișinău'],
      ['farmacie', 'aptecă', 'farmácia', 'coloquial, do russo'],
      ['frigider', 'holodilnic', 'geladeira', 'coloquial, do russo'],
      ['aspirator', 'pâlesos', 'aspirador de pó', 'coloquial, do russo'],
      ['renovare', 'remont', 'reforma (da casa)', 'coloquial, do russo: “facem remont”'],
      ['pungă', 'pachet', 'sacola plástica', 'coloquial, do russo; na Romênia “pachet” é “pacote”'],
      ['apartament', 'cvartiră', 'apartamento', 'coloquial, do russo'],
      ['permis de conducere', 'prava', 'carteira de motorista', 'coloquial, do russo'],
      ['geacă', 'curtcă', 'jaqueta', 'coloquial, do russo'],
      ['încărcător', 'zareadcă', 'carregador (do celular)', 'coloquial, do russo'],
      ['priză', 'rozetcă', 'tomada', 'coloquial, do russo'],
      ['rest (bani)', 'sdacea', 'troco', 'coloquial, do russo'],
      ['hai', 'davai', 'vamos, bora', 'coloquial, do russo'],
      ['bine, în regulă', 'ladna', 'tá bom, beleza', 'coloquial, do russo'],
      ['pe scurt', 'coroce', 'resumindo', 'coloquial, do russo'],
      ['în general', 'voobșe', 'em geral, de modo geral', 'coloquial, do russo'],
      ['adică, cam', 'tipa', 'tipo, meio que', 'coloquial, do russo'],
    ],
    stories: [
      {
        id: 'ro-md-h1',
        variant: 'ro-MD',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Linu la Piața Centrală',
        emoji: '🥔',
        summary: 'Linu vai ao mercado de Chișinău fazer compras para um jantar e descobre que lá batata se chama “barabule”.',
        cultural_context:
          'A Piața Centrală é o grande mercado do centro de Chișinău. A zeamă, sopa de galinha azedinha com macarrão caseiro e levístico, é um dos pratos mais típicos da Moldávia.',
        start: 'start',
        glossary: [
          ['rutieră', 'van de linha (Moldávia)'],
          ['barabule', 'batatas (Moldávia)'],
          ['pătlăgele roșii', 'tomates (Moldávia)'],
          ['harbuz', 'melancia (Moldávia)'],
          ['îi', 'é, está (coloquial, = este)'],
          ['îs', 'são (coloquial, = sunt)'],
          ['mai… decât', 'mais… (do) que'],
          ['o să gătească', 'vai cozinhar'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'Mâine vine în vizită prietena lui Linu, Doina. Linu o să gătească zeamă și barabule la cuptor, ca în Moldova. Doina îi scrie: “Du-te la Piața Centrală! Ia rutiera, e mai rapidă decât troleibuzul.”',
            translation:
              'Amanhã a amiga do Linu, Doina, vem visitá-lo. Linu vai cozinhar zeamă e batatas assadas, como na Moldávia. Doina escreve: “Vá à Piața Centrală! Pegue a rutieră, é mais rápida que o trólebus.”',
            choices: [
              { text: 'Ia rutiera.', translation: 'Pega a rutieră.', next: 'rutiera' },
              { text: 'Merge pe jos pe bulevardul Ștefan cel Mare.', translation: 'Vai a pé pelo bulevar Ștefan cel Mare.', next: 'pe_jos' },
              {
                text: 'Ia troleibuzul, pentru că e mai rapid.',
                translation: 'Pega o trólebus, porque é mais rápido.',
                wrong: 'Doina disse o contrário: a rutieră é “mai rapidă decât troleibuzul”, mais rápida que o trólebus.',
              },
            ],
          },
          rutiera: {
            emoji: '🚐',
            text: 'În rutieră e cald și plin de oameni. Șoferul strigă: “Piața Centrală! Coborâți aici!” Linu coboară și vede o mulțime de tarabe.',
            translation: 'Na rutieră está quente e cheio de gente. O motorista grita: “Piața Centrală! Desçam aqui!” Linu desce e vê um monte de bancas.',
            choices: [{ text: 'Intră în piață.', translation: 'Entra no mercado.', next: 'piata' }],
          },
          pe_jos: {
            emoji: '🚶',
            text: 'Bulevardul e frumos, cu mulți copaci. Dar drumul e mai lung decât credea Linu. Ajunge la piață după o oră, obosit.',
            translation:
              'O bulevar é bonito, com muitas árvores. Mas o caminho é mais longo do que Linu pensava. Ele chega ao mercado depois de uma hora, cansado.',
            choices: [{ text: 'Intră în piață.', translation: 'Entra no mercado.', next: 'piata' }],
          },
          piata: {
            emoji: '🧺',
            text: 'La o tarabă, o bunicuță vinde legume. “Ce-ți trebuie, dragă?” Linu citește lista lui: cartofi, roșii, ceapă. Dar pe tarabă scrie: “Barabule” și “Pătlăgele roșii”.',
            translation:
              'Numa banca, uma senhorinha vende legumes. “Do que você precisa, querido?” Linu lê a lista dele: batatas, tomates, cebola. Mas na banca está escrito: “Barabule” e “Pătlăgele roșii”.',
            choices: [
              { text: 'Cumpără barabule, pătlăgele roșii și ceapă.', translation: 'Compra batatas, tomates e cebola.', next: 'barabule' },
              {
                text: 'Pleacă supărat: aici nu vând cartofi.',
                translation: 'Vai embora chateado: aqui não vendem batatas.',
                wrong: '“Barabule” são batatas! No falar da Moldávia, “barabule” = “cartofi” e “pătlăgele roșii” = “roșii”. Está tudo na banca.',
              },
            ],
          },
          barabule: {
            emoji: '🍉',
            text: 'Bunicuța râde: “Barabulele mele îs mai bune decât cele de la magazin! Ia și un harbuz, îi dulce ca mierea.” Harbuzul e mare și greu.',
            translation:
              'A senhorinha ri: “Minhas batatas são melhores que as da loja! Leve também uma melancia, está doce como mel.” A melancia é grande e pesada.',
            choices: [
              { text: 'Cumpără și harbuzul.', translation: 'Compra também a melancia.', next: 'harbuz' },
              { text: '“Mulțumesc, altă dată!”', translation: '“Obrigado, fica para outra vez!”', next: 'final_fara' },
            ],
          },
          harbuz: {
            emoji: '💪',
            text: 'Linu ține harbuzul cu ambele aripi. Bunicuța îi dă un sfat: “Nu merge pe jos! Ia rutiera, o să ajungi mai repede.”',
            translation: 'Linu segura a melancia com as duas asas. A senhorinha dá um conselho: “Não vá a pé! Pegue a rutieră, você vai chegar mais rápido.”',
            choices: [{ text: 'Ia rutiera spre casă.', translation: 'Pega a rutieră para casa.', next: 'final_bom' }],
          },
          final_bom: {
            emoji: '🎉',
            text: 'Seara, Doina gustă zeama și zice: “E mai bună decât a mamei mele! Dar să nu-i spui!” La desert, mănâncă harbuz rece.',
            translation: 'À noite, Doina prova a zeamă e diz: “Está melhor que a da minha mãe! Mas não conte para ela!” De sobremesa, comem melancia gelada.',
            ending: {
              tone: 'bom',
              title: 'Jantar moldavo',
              message: 'Você entendeu o mercado de Chișinău: barabule, pătlăgele roșii e harbuz já estão no seu vocabulário.',
            },
          },
          final_fara: {
            emoji: '🙂',
            text: 'Linu ajunge acasă ușor. Seara vine Doina, cu un harbuz mare în brațe: “Data viitoare, cumpără-l tu!”',
            translation: 'Linu chega em casa sem esforço. À noite chega Doina, com uma melancia grande nos braços: “Da próxima vez, compre você!”',
            ending: {
              tone: 'neutro',
              title: 'Sobremesa trazida',
              message: 'O jantar deu certo, mas foi a Doina quem carregou a melancia. Da próxima vez, aceite o harbuz!',
            },
          },
        },
      },
      {
        id: 'ro-md-h2',
        variant: 'ro-MD',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Bunelul de la Orheiul Vechi',
        emoji: '⛪',
        summary: 'Numa pousada perto de Orheiul Vechi, um avô conta a Linu como era a aldeia antigamente — e o convida para a vindima.',
        cultural_context:
          'Orheiul Vechi é um complexo histórico e natural no vale do rio Răut, com um mosteiro escavado na rocha do penhasco. Ao lado fica a aldeia de Butuceni, conhecida pelo turismo rural.',
        start: 'start',
        glossary: [
          ['bunel', 'avô (Moldávia)'],
          ['ogradă', 'quintal (Moldávia)'],
          ['amu', 'agora (Moldávia)'],
          ['poamă', 'uvas (Moldávia)'],
          ['păpușoi', 'milho (Moldávia)'],
          ['o plecat', 'foram embora (coloquial, = au plecat)'],
          ['când eram copil', 'quando eu era criança'],
          ['a culege', 'colher'],
        ],
        nodes: {
          start: {
            emoji: '🏡',
            text: 'Linu a ajuns la o pensiune din Butuceni, lângă Orheiul Vechi. În ogradă, un bătrân cu pălărie stă pe o bancă, la umbra unui nuc. “Eu îs bunelul Ion”, zice el. “Șezi, că amu îți povestesc cum era satul pe vremuri.”',
            translation:
              'Linu chegou a uma pousada em Butuceni, perto de Orheiul Vechi. No quintal, um velho de chapéu está sentado num banco, à sombra de uma nogueira. “Eu sou o vovô Ion”, diz ele. “Sente-se, que agora eu te conto como era a aldeia antigamente.”',
            choices: [
              { text: 'Se așază și ascultă.', translation: 'Senta-se e escuta.', next: 'poveste' },
              { text: 'Pleacă direct spre mănăstire.', translation: 'Vai direto para o mosteiro.', next: 'singur' },
            ],
          },
          singur: {
            emoji: '🥵',
            text: 'Soarele ardea, iar poteca era abruptă și plină de pietre. Linu nu știa pe unde se intră în mănăstirea din stâncă. După o jumătate de oră, se întoarce la pensiune, obosit.',
            translation:
              'O sol ardia, e a trilha era íngreme e cheia de pedras. Linu não sabia por onde se entra no mosteiro da rocha. Depois de meia hora, ele volta para a pousada, cansado.',
            choices: [{ text: 'Se așază lângă bunel și ascultă.', translation: 'Senta-se ao lado do vovô e escuta.', next: 'poveste' }],
          },
          poveste: {
            emoji: '👴',
            text: '“Când eram copil, nu aveam televizor. Seara ne adunam toți în ogradă, iar bunica mea cânta. Toamna, tot satul culegea poama împreună, și după aceea mâncam mămăligă de păpușoi cu brânză.”',
            translation:
              '“Quando eu era criança, não tínhamos televisão. À noite nos reuníamos todos no quintal, e a minha avó cantava. No outono, a aldeia inteira colhia as uvas junta, e depois comíamos polenta de milho com queijo.”',
            choices: [
              { text: '“Și amu mai culegeți poama împreună?”', translation: '“E agora vocês ainda colhem as uvas juntos?”', next: 'poama' },
              {
                text: '“Deci diseară bunica dumneavoastră o să cânte în ogradă?”',
                translation: '“Então hoje à noite a sua avó vai cantar no quintal?”',
                wrong: '“Cânta” está no imperfeito: a avó cantava quando ele era criança, era um hábito do passado, não um plano para hoje à noite.',
              },
            ],
          },
          poama: {
            emoji: '🍇',
            text: '“Amu mai rar”, oftează bunelul. “Pe vremuri eram zeci de oameni la cules, dar mulți tineri o plecat la oraș.” Apoi zâmbește: “Mâine vine nepotul meu din Chișinău și culegem poama din vie. Ne ajuți?”',
            translation:
              '“Agora mais raramente”, suspira o vovô. “Antigamente éramos dezenas de pessoas na colheita, mas muitos jovens foram para a cidade.” Depois sorri: “Amanhã meu neto vem de Chișinău e vamos colher as uvas da vinha. Você nos ajuda?”',
            choices: [
              { text: '“Da, vin cu plăcere la cules!”', translation: '“Sim, vou com prazer à colheita!”', next: 'cules' },
              { text: '“Aș prefera să văd mănăstirea.”', translation: '“Eu preferiria ver o mosteiro.”', next: 'manastire' },
            ],
          },
          manastire: {
            emoji: '⛰️',
            text: 'A doua zi, bunelul îl conduce pe o potecă spre stâncă. Pe drum îi arată: “Aici era fântâna satului. Femeile veneau dimineața cu gălețile și stăteau de vorbă ore întregi.” De sus se vede toată valea Răutului.',
            translation:
              'No dia seguinte, o vovô o leva por uma trilha até a rocha. No caminho ele mostra: “Aqui ficava o poço da aldeia. As mulheres vinham de manhã com os baldes e ficavam conversando horas a fio.” Lá de cima se vê todo o vale do Răut.',
            choices: [
              { text: 'Intră în mănăstire, în liniște.', translation: 'Entra no mosteiro, em silêncio.', next: 'final_manastire' },
              { text: 'Se întoarce în sat, la cules.', translation: 'Volta para a aldeia, para a colheita.', next: 'cules' },
            ],
          },
          cules: {
            emoji: '✂️',
            text: 'Dimineața, via e plină de rouă. Nepotul bunelului, Andrei, îi dă lui Linu o foarfecă și o găleată. Pe când lucrau, bunelul le povestea cum cărau pe vremuri poama cu căruța, iar toți râdeau.',
            translation:
              'De manhã, a vinha está cheia de orvalho. O neto do vovô, Andrei, dá ao Linu uma tesoura e um balde. Enquanto trabalhavam, o vovô contava como antigamente levavam as uvas de carroça, e todos riam.',
            choices: [
              { text: 'Lucrează până seara.', translation: 'Trabalha até a noite.', next: 'final_cules' },
              { text: 'Gustă poama… și iar o gustă.', translation: 'Prova as uvas… e prova de novo.', next: 'final_gustat' },
            ],
          },
          final_cules: {
            emoji: '🎉',
            text: 'Seara, în ogradă, mănâncă toți zeamă și mămăligă. Bunelul ridică paharul: “Pe vremuri, așa era în fiecare toamnă. Amu, cu voi, o fost iar ca atunci.”',
            translation:
              'À noite, no quintal, todos comem zeamă e polenta. O vovô ergue o copo: “Antigamente era assim todo outono. Agora, com vocês, foi de novo como naquele tempo.”',
            ending: {
              tone: 'bom',
              title: 'Vindima em família',
              message: 'Você acompanhou as lembranças do vovô no imperfeito e ajudou a trazer o passado de volta por uma noite.',
            },
          },
          final_gustat: {
            emoji: '😅',
            text: 'Linu gustă o boabă, apoi încă una, apoi un ciorchine întreg. La prânz, găleata lui era aproape goală, iar el era tare sătul. Andrei râde: “Și eu făceam la fel când eram mic!”',
            translation:
              'Linu prova um bago, depois outro, depois um cacho inteiro. Na hora do almoço, o balde dele estava quase vazio, e ele estava muito cheio. Andrei ri: “Eu também fazia isso quando era pequeno!”',
            ending: {
              tone: 'neutro',
              title: 'Colheita saborosa',
              message: 'Pouca uva no balde, muita na barriga. Pelo menos você entendeu que “făceam” é um hábito de criança!',
            },
          },
          final_manastire: {
            emoji: '🕯️',
            text: 'În biserica săpată în stâncă e răcoare și liniște. Bunelul șoptește: “Mama mă aducea aici când eram mic. Veneam pe jos din sat și ne opream la fântână să bem apă.”',
            translation:
              'Na igreja escavada na rocha está fresco e silencioso. O vovô sussurra: “Minha mãe me trazia aqui quando eu era pequeno. Vínhamos a pé da aldeia e parávamos no poço para beber água.”',
            ending: {
              tone: 'bom',
              title: 'Memórias na rocha',
              message: 'Você viu Orheiul Vechi pelos olhos de quem cresceu ali, com todos os hábitos do passado no imperfeito.',
            },
          },
        },
      },
      {
        id: 'ro-md-h3',
        variant: 'ro-MD',
        level: 'B2.1',
        cefr: 'B2',
        title: 'Rătăcit la Cricova',
        emoji: '🍷',
        summary: 'Numa visita às adegas subterrâneas de Cricova, Linu se distrai, perde o grupo e precisa achar o caminho entre ruas com nome de vinho.',
        cultural_context:
          'As adegas de Cricova, perto de Chișinău, ocupam galerias subterrâneas de antigas minas de calcário, com dezenas de quilômetros de “ruas” batizadas com nomes de vinhos. Lá embaixo a temperatura fica estável e fresca o ano todo.',
        start: 'start',
        glossary: [
          ['își uitase', 'tinha esquecido'],
          ['dispăruse', 'tinha desaparecido'],
          ['curtcă', 'jaqueta (coloquial, do russo)'],
          ['ladna', 'tá bom (coloquial, do russo)'],
          ['davai', 'vamos, anda (coloquial, do russo)'],
          ['totuși', 'mesmo assim, contudo'],
          ['deși', 'embora'],
          ['prin urmare', 'por conseguinte, portanto'],
          ['în schimb', 'em compensação, por outro lado'],
        ],
        nodes: {
          start: {
            emoji: '🚐',
            text: 'Linu ajunsese la Cricova cu zece minute înainte de tur, deși plecase târziu din Chișinău. Doamna Victoria, ghidul, se uită la tricoul lui și zâmbește: “Jos e răcoare tot anul. Ai luat o curtcă?” Abia atunci își dă seama Linu că își uitase geaca în rutieră.',
            translation:
              'Linu tinha chegado a Cricova dez minutos antes do passeio, embora tivesse saído tarde de Chișinău. A senhora Victoria, a guia, olha para a camiseta dele e sorri: “Lá embaixo é fresco o ano todo. Trouxe uma jaqueta?” Só então Linu percebe que tinha esquecido o casaco na rutieră.',
            choices: [
              { text: 'Își cumpără un pulover de la magazinul vinăriei.', translation: 'Compra um pulôver na loja da vinícola.', next: 'pulover' },
              { text: 'Coboară totuși în tricou.', translation: 'Desce mesmo assim de camiseta.', next: 'tricou' },
              {
                text: 'Fuge acasă după geacă, fiindcă a lăsat-o în cuier.',
                translation: 'Corre para casa buscar o casaco, porque o deixou no cabide.',
                wrong:
                  'Linu tinha esquecido o casaco na rutieră (a van), não em casa: “își uitase geaca în rutieră”. Além disso, o passeio começa em dez minutos.',
              },
            ],
          },
          pulover: {
            emoji: '🧶',
            text: 'Puloverul e scump; în schimb, e gros și cald. Grupul urcă în niște mașinuțe electrice și intră în galerii. Pe pereți apar plăcuțe cu nume de străzi: “Strada Cabernet”, “Strada Sauvignon”.',
            translation:
              'O pulôver é caro; em compensação, é grosso e quente. O grupo sobe em carrinhos elétricos e entra nas galerias. Nas paredes aparecem placas com nomes de ruas: “Rua Cabernet”, “Rua Sauvignon”.',
            choices: [{ text: 'Ascultă ghidul.', translation: 'Escuta a guia.', next: 'galerii' }],
          },
          tricou: {
            emoji: '🥶',
            text: 'Jos e frig, iar Linu tremură tot; prin urmare, abia aude ce spune ghidul. Doamna Victoria îi dă totuși eșarfa ei: “Ladna, ia-o, dar data viitoare vii îmbrăcat!” Grupul intră cu mașinuțe electrice pe “Strada Cabernet”.',
            translation:
              'Lá embaixo está frio, e Linu treme inteiro; por conseguinte, mal ouve o que a guia diz. A senhora Victoria mesmo assim lhe dá a echarpe dela: “Tá bom, pegue, mas da próxima vez venha agasalhado!” O grupo entra de carrinho elétrico na “Rua Cabernet”.',
            choices: [{ text: 'Ascultă ghidul.', translation: 'Escuta a guia.', next: 'galerii' }],
          },
          galerii: {
            emoji: '🍾',
            text: 'Ghidul explică: “Aceste galerii fuseseră la început mine de calcar; abia mai târziu au devenit pivnițe pentru vin.” La începutul turului, le spusese tuturor: “Dacă vă pierdeți, nu vă mișcați din loc!” Linu rămâne în urmă să fotografieze o sticlă foarte veche. Când ridică ochii, grupul dispăruse.',
            translation:
              'A guia explica: “Estas galerias tinham sido, no começo, minas de calcário; só mais tarde viraram adegas de vinho.” No começo do passeio, ela tinha dito a todos: “Se vocês se perderem, não saiam do lugar!” Linu fica para trás para fotografar uma garrafa muito antiga. Quando levanta os olhos, o grupo tinha desaparecido.',
            choices: [
              { text: 'Rămâne pe loc, cum le spusese ghidul.', translation: 'Fica no lugar, como a guia tinha dito.', next: 'asteapta' },
              { text: 'Pornește singur pe o stradă laterală.', translation: 'Sai sozinho por uma rua lateral.', next: 'singur' },
              {
                text: 'Aleargă după grup, pe care îl vede la capătul străzii.',
                translation: 'Corre atrás do grupo, que ele vê no fim da rua.',
                wrong: '“Grupul dispăruse”: quando Linu levantou os olhos, o grupo já tinha desaparecido (mais-que-perfeito). Ele não consegue mais vê-lo.',
              },
            ],
          },
          singur: {
            emoji: '🧭',
            text: 'Linu merge pe “Strada Pinot”, apoi pe “Strada Aligoté”, însă toate galeriile par la fel. Deși e puțin speriat, observă pe jos urme proaspete de roți. Își amintește totuși că ghidul îi rugase să nu se miște din loc.',
            translation:
              'Linu anda pela “Rua Pinot”, depois pela “Rua Aligoté”, mas todas as galerias parecem iguais. Embora esteja um pouco assustado, ele nota no chão marcas frescas de rodas. Mesmo assim, lembra que a guia tinha pedido para não saírem do lugar.',
            choices: [
              { text: 'Urmează urmele de roți.', translation: 'Segue as marcas de rodas.', next: 'iesire' },
              { text: 'Se întoarce lângă sticla veche și așteaptă.', translation: 'Volta para perto da garrafa antiga e espera.', next: 'asteapta' },
            ],
          },
          asteapta: {
            emoji: '⏳',
            text: 'Linu așteaptă lângă un butoi uriaș. Deși trec doar zece minute, i se par o oră. În sfârșit, aude o voce cunoscută: “Davai, davai, te căutăm peste tot!” Era doamna Victoria, care observase lipsa lui când numărase turiștii.',
            translation:
              'Linu espera ao lado de um barril enorme. Embora passem só dez minutos, parecem uma hora. Finalmente, ouve uma voz conhecida: “Anda, anda, estamos te procurando por toda parte!” Era a senhora Victoria, que tinha notado a falta dele quando contara os turistas.',
            choices: [{ text: 'Îi mulțumește și se alătură grupului.', translation: 'Agradece e se junta ao grupo.', next: 'degustare' }],
          },
          iesire: {
            emoji: '🚪',
            text: 'Urmele îl duc, după o jumătate de oră, la ieșire. Afară e soare, dar autocarul grupului plecase deja, iar degustarea se terminase. Prin urmare, Linu ia o rutieră înapoi spre Chișinău, cu pozele lui și fără nicio poveste de la ghid.',
            translation:
              'As marcas o levam, depois de meia hora, até a saída. Lá fora faz sol, mas o ônibus do grupo já tinha ido embora, e a degustação tinha terminado. Por conseguinte, Linu pega uma rutieră de volta para Chișinău, com suas fotos e sem nenhuma história da guia.',
            ending: {
              tone: 'neutro',
              title: 'Turista solitário',
              message: 'Você achou a saída sozinho, mas perdeu o melhor do passeio. Às vezes, seguir a regra combinada antes é o caminho mais curto.',
            },
          },
          degustare: {
            emoji: '🥂',
            text: 'Grupul intră într-o sală de degustare, sub bolți de piatră. Somelierul toarnă un vin spumant și explică faptul că acesta fermentează a doua oară chiar în sticlă. Doamna Victoria se întoarce spre Linu: “Ei, ți-a plăcut, deși te-ai rătăcit?”',
            translation:
              'O grupo entra numa sala de degustação, sob abóbadas de pedra. O sommelier serve um vinho espumante e explica que ele fermenta pela segunda vez na própria garrafa. A senhora Victoria se vira para Linu: “E aí, gostou, embora tenha se perdido?”',
            choices: [
              {
                text: '“Tare mi-a plăcut! În schimb, data viitoare nu mai rămân în urmă.”',
                translation: '“Gostei muito! Em compensação, da próxima vez não fico mais para trás.”',
                next: 'final_bom',
              },
              { text: 'Îi arată poza cu sticla veche.', translation: 'Mostra a ela a foto da garrafa antiga.', next: 'final_poza' },
            ],
          },
          final_bom: {
            emoji: '🎉',
            text: 'Toți râd, iar Victoria îi face cu ochiul: “Ladna, te iertăm.” La plecare, Linu cumpără o sticlă de spumant pentru bunelul Ion din Butuceni. Deși se rătăcise, ziua fusese una dintre cele mai frumoase din călătorie.',
            translation:
              'Todos riem, e Victoria pisca para ele: “Tá bom, está perdoado.” Na saída, Linu compra uma garrafa de espumante para o vovô Ion de Butuceni. Embora tivesse se perdido, o dia tinha sido um dos mais bonitos da viagem.',
            ending: {
              tone: 'bom',
              title: 'Perdido e achado',
              message: 'Você acompanhou o mais-que-perfeito e os conectores do começo ao fim, e ainda saiu com um presente.',
            },
          },
          final_poza: {
            emoji: '📸',
            text: 'Victoria privește poza și rămâne surprinsă: “Nu știam că sticla asta e atât de fotogenică!” Îi cere voie s-o pună pe pagina vinăriei, iar Linu acceptă bucuros. Totuși, îi promite că data viitoare va face pozele fără să piardă grupul.',
            translation:
              'Victoria olha a foto e fica surpresa: “Eu não sabia que essa garrafa era tão fotogênica!” Ela pede permissão para colocá-la na página da vinícola, e Linu aceita contente. Mesmo assim, promete que da próxima vez vai tirar as fotos sem perder o grupo.',
            ending: {
              tone: 'bom',
              title: 'Fotógrafo das adegas',
              message: 'A distração virou uma boa foto. Você entendeu tudo o que tinha acontecido antes, graças ao mais-que-perfeito.',
            },
          },
        },
      },
    ],
  },
];
