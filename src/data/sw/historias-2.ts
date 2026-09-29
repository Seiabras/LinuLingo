import type { StorySeed } from '../types';

/** Histórias interativas em suaíli, B2.1 a C2 (uma por subnível). */
export const STORIES_SW_2: StorySeed[] = [
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'sw-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Nyumbu wanavuka mto',
    emoji: '🦓',
    summary: 'No Serengeti, o Linu acompanha uma guarda-parque durante a grande migração e aprende as extensões do verbo: fazer para alguém, ser feito, fazer fazer.',
    cultural_context:
      'O Parque Nacional do Serengeti, no norte da Tanzânia, é Patrimônio Mundial da UNESCO. Todos os anos, mais de um milhão de gnus, acompanhados de zebras e gazelas, fazem um grande círculo entre o Serengeti e a reserva Maasai Mara, no Quênia, atrás do capim novo que as chuvas fazem brotar. A travessia dos rios, onde esperam os crocodilos, é o momento mais dramático da migração.',
    start: 'start',
    glossary: [
      ['nyumbu', 'gnu'],
      ['uhamaji', 'migração'],
      ['kuvuka', 'atravessar'],
      ['walinzi wa hifadhi', 'guardas do parque'],
      ['alimletea', 'trouxe para ele (-le-: aplicativo)'],
      ['wanaliwa', 'são comidos (-w-: passivo)'],
      ['inawafanya', 'os faz, os torna (causativo)'],
    ],
    nodes: {
      start: {
        emoji: '🚙',
        text: 'Mlinzi wa hifadhi, Bi Neema, alimletea Linu darubini na kumwambia: «Leo tutaona uhamaji mkuu. Nyumbu wanafuata mvua, kwa sababu mvua inaotesha majani mapya.»',
        translation: 'A guarda-parque, dona Neema, trouxe um binóculo para o Linu e lhe disse: «Hoje vamos ver a grande migração. Os gnus seguem a chuva, porque a chuva faz brotar capim novo.»',
        choices: [
          { text: 'Linu aliuliza kwa nini nyumbu wanavuka mto hatari.', translation: 'O Linu perguntou por que os gnus atravessam um rio perigoso.', next: 'mto' },
          { text: 'Linu aliomba kukaribia kundi zaidi.', translation: 'O Linu pediu para chegar mais perto da manada.', next: 'karibu' },
        ],
      },
      karibu: {
        emoji: '⚠️',
        text: 'Bi Neema alisimamisha gari. «Hatukaribii zaidi. Wanyama wakitishwa, wanaweza kukimbia na kuumizana. Sheria za hifadhi zinatulazimisha kukaa mbali.»',
        translation: 'Dona Neema parou o carro. «Não chegamos mais perto. Se os animais forem assustados, podem correr e se machucar uns aos outros. As regras do parque nos obrigam a ficar longe.»',
        choices: [{ text: 'Linu alielewa na kuuliza kuhusu mto.', translation: 'O Linu entendeu e perguntou sobre o rio.', next: 'mto' }],
      },
      mto: {
        emoji: '🐊',
        text: '«Upande ule wa mto kuna majani mengi», alieleza Bi Neema. «Nyumbu wanavuka kwa maelfu. Baadhi yao wanaliwa na mamba, lakini wengi wanafaulu. Njaa inawafanya wajasiri.»',
        translation: '«Do outro lado do rio há muito capim», explicou dona Neema. «Os gnus atravessam aos milhares. Alguns deles são comidos pelos crocodilos, mas a maioria consegue. A fome os torna corajosos.»',
        choices: [
          { text: 'Linu alishika darubini na kutazama kwa makini.', translation: 'O Linu pegou o binóculo e observou com atenção.', next: 'kuvuka' },
          {
            text: 'Linu alisema: «Kwa hiyo mamba wanaliwa na nyumbu!»',
            translation: 'O Linu disse: «Então os crocodilos são comidos pelos gnus!»',
            wrong: 'É o contrário: «wanaliwa na mamba», os gnus SÃO COMIDOS pelos crocodilos. Na passiva (-w-), quem faz a ação vem depois de «na».',
          },
        ],
      },
      kuvuka: {
        emoji: '🌊',
        text: 'Nyumbu wa kwanza aliruka majini, na wengine wakamfuata kwa kelele kubwa. Maji yalichafuka, vumbi likapanda juu. Bi Neema alinong’ona: «Hili ni tukio linaloweza kuonekana mara chache tu maishani.»',
        translation: 'O primeiro gnu pulou na água, e os outros o seguiram com um barulho enorme. A água ficou turva, a poeira subiu. Dona Neema sussurrou: «Isto é algo que se pode ver poucas vezes na vida.»',
        choices: [
          { text: 'Linu alipiga picha bila kelele.', translation: 'O Linu fotografou sem fazer barulho.', next: 'final_bom' },
          { text: 'Linu alipiga kelele kwa furaha.', translation: 'O Linu gritou de alegria.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📸',
        text: 'Jioni, karibu na moto wa kambi, Bi Neema aliziangalia picha za Linu. «Umezipiga vizuri sana», alisema. «Nitakutumia picha za mwaka jana pia.»',
        translation: 'À noite, perto da fogueira do acampamento, dona Neema olhou as fotos do Linu. «Você as tirou muito bem», disse. «Vou te mandar as fotos do ano passado também.»',
        ending: { tone: 'bom', title: 'A grande travessia', message: 'O Linu respeitou as regras do parque e entendeu as extensões do verbo: alimletea (trouxe para ele), wanaliwa (são comidos), inawafanya (os faz).' },
      },
      final_neutro: {
        emoji: '🙊',
        text: 'Nyumbu wachache waligeuka nyuma kwa hofu. Bi Neema alimwangalia Linu kwa ukali: «Hapa tunanyamaza. Kelele zinaweza kuwavuruga wanyama.»',
        translation: 'Alguns gnus voltaram para trás, assustados. Dona Neema olhou séria para o Linu: «Aqui a gente fica quieto. O barulho pode atrapalhar os animais.»',
        ending: { tone: 'neutro', title: 'Silêncio no safári', message: 'Emoção compreensível, mas num parque o silêncio protege os animais.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'sw-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Kama tungepanda miti',
    emoji: '🌳',
    summary: 'Perto de Nyeri, no Quênia, o Linu planta árvores com um grupo de mulheres e discute, no hipotético, como a paisagem seria sem elas.',
    cultural_context:
      'Wangari Maathai (1940–2011), nascida perto de Nyeri, no centro do Quênia, fundou em 1977 o Movimento Cinturão Verde, que organizou mulheres do campo para plantar dezenas de milhões de árvores, combater a erosão e proteger as fontes de água. Em 2004, ela se tornou a primeira mulher africana a receber o Prêmio Nobel da Paz. A região de Nyeri fica ao pé do monte Quênia, onde nascem rios importantes do país.',
    start: 'start',
    glossary: [
      ['kupanda miti', 'plantar árvores'],
      ['mmomonyoko wa udongo', 'erosão do solo'],
      ['kama tungepanda', 'se plantássemos'],
      ['kama tusingepanda', 'se não tivéssemos plantado'],
      ['kusaidiana', 'ajudar-se uns aos outros'],
      ['chemchemi', 'nascente'],
    ],
    nodes: {
      start: {
        emoji: '🌱',
        text: 'Mama Wairimu aliwaonyesha wageni kitalu cha miche. «Miaka thelathini iliyopita, kilima hiki kilikuwa kitupu», alisema. «Kama tusingepanda miti, mvua ingeondoa udongo wote.»',
        translation: 'Mama Wairimu mostrou aos visitantes o viveiro de mudas. «Trinta anos atrás, este morro era pelado», disse. «Se não tivéssemos plantado árvores, a chuva teria levado o solo todo.»',
        choices: [
          { text: 'Linu aliuliza jinsi walivyoanza.', translation: 'O Linu perguntou como elas começaram.', next: 'mwanzo' },
          { text: 'Linu alichukua jembe mara moja.', translation: 'O Linu pegou a enxada na hora.', next: 'kupanda' },
        ],
      },
      mwanzo: {
        emoji: '👩‍🌾',
        text: '«Tulianza wanawake wachache tu, tukisaidiana», alieleza Mama Wairimu. «Tulijifunza kutoka kwa Wangari Maathai kwamba mti mmoja ni mwanzo wa msitu. Kama kila mtu angepanda mti mmoja, dunia ingebadilika.»',
        translation: '«Começamos só algumas mulheres, ajudando-nos umas às outras», explicou Mama Wairimu. «Aprendemos com Wangari Maathai que uma árvore é o começo de uma floresta. Se cada pessoa plantasse uma árvore, o mundo mudaria.»',
        choices: [{ text: 'Linu alichukua jembe na miche.', translation: 'O Linu pegou a enxada e as mudas.', next: 'kupanda' }],
      },
      kupanda: {
        emoji: '⛏️',
        text: 'Linu alichimba shimo, lakini miche ilikuwa mingi. Kijana mmoja alisema: «Tukisaidiana, tutamaliza kabla ya jua kuzama.» Walifanya kazi pamoja wakiimba.',
        translation: 'O Linu cavou um buraco, mas as mudas eram muitas. Um rapaz disse: «Se nos ajudarmos, terminamos antes do pôr do sol.» Trabalharam juntos, cantando.',
        choices: [
          { text: 'Linu alisema: «Ningejua, ningeleta marafiki zaidi!»', translation: 'O Linu disse: «Se eu soubesse, teria trazido mais amigos!»', next: 'chemchemi' },
          {
            text: 'Linu alisema: «Tungekuwa peke yetu, tungemaliza haraka zaidi.»',
            translation: 'O Linu disse: «Se estivéssemos sozinhos, terminaríamos mais rápido.»',
            wrong: 'O rapaz disse o contrário: «tukisaidiana» (ajudando-nos uns aos outros) é que terminariam antes do pôr do sol. O recíproco -ana é a chave da história.',
          },
        ],
      },
      chemchemi: {
        emoji: '💧',
        text: 'Jioni walitembea hadi chemchemi iliyo chini ya kilima. Mama Wairimu alisema: «Kabla ya miti, chemchemi hii ilikauka kila kiangazi. Sasa inatoa maji mwaka mzima.»',
        translation: 'À tarde, caminharam até a nascente que fica ao pé do morro. Mama Wairimu disse: «Antes das árvores, esta nascente secava todo verão. Agora ela dá água o ano inteiro.»',
        choices: [
          { text: 'Linu aliahidi kupanda miti Brazili pia.', translation: 'O Linu prometeu plantar árvores no Brasil também.', next: 'final_bom' },
          { text: 'Linu alisema kazi ilikuwa ngumu mno.', translation: 'O Linu disse que o trabalho era pesado demais.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌳',
        text: 'Mama Wairimu alimpa Linu mche mdogo wa mti wa asili. «Ungeupanda nyumbani, ungekumbuka siku hii kila unapouona», alisema kwa tabasamu.',
        translation: 'Mama Wairimu deu ao Linu uma pequena muda de árvore nativa. «Se você a plantasse em casa, lembraria deste dia toda vez que a visse», disse ela, sorrindo.',
        ending: { tone: 'bom', title: 'Uma árvore é o começo', message: 'O Linu plantou, ajudou e usou o hipotético (-nge-, -singe-) e o recíproco (-ana) para falar do que muda quando as pessoas se ajudam.' },
      },
      final_neutro: {
        emoji: '😓',
        text: 'Mama Wairimu alicheka: «Ni ngumu, ndiyo. Lakini tungeacha, kilima kingekuwa kitupu tena.» Linu aliona aibu kidogo.',
        translation: 'Mama Wairimu riu: «É pesado, sim. Mas, se parássemos, o morro ficaria pelado de novo.» O Linu ficou um pouco envergonhado.',
        ending: { tone: 'neutro', title: 'Trabalho pesado', message: 'O cansaço é real, mas o resultado está na nascente que não seca mais.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'sw-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Usiku wa taarab',
    emoji: '🎻',
    summary: 'Numa noite de taarab em Zanzibar, o Linu tenta entender as letras cheias de duplo sentido e aprende provérbios com uma cantora veterana.',
    cultural_context:
      'O taarab é uma música de Zanzibar e da costa suaíli que mistura tradições árabes, indianas e africanas, com violino, alaúde (udi), acordeão e percussão. As letras são poesia em suaíli, cheias de imagens e de recados indiretos: uma canção sobre uma fruta ou uma flor pode falar de amor ou de ciúme. Siti binti Saad, nascida no fim do século XIX, foi a primeira grande estrela do taarab e uma das primeiras cantoras da África Oriental a gravar discos.',
    start: 'start',
    glossary: [
      ['taarab', 'taarab, música poética da costa'],
      ['mwimbaji', 'cantor, cantora'],
      ['beti', 'estrofes'],
      ['mafumbo', 'enigmas, sentidos escondidos'],
      ['methali', 'provérbio'],
      ['ukumbini', 'no salão'],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: 'Ukumbini mwa klabu ya zamani, Stone Town, okestra ilianza kupiga fidla na udi. Mwimbaji mzee, Bi Mwanaisha, aliimba kuhusu «embe lililoiva mtini». Watu walicheka na kupiga makofi.',
        translation: 'No salão de um clube antigo de Stone Town, a orquestra começou a tocar violino e alaúde. Uma cantora veterana, dona Mwanaisha, cantava sobre «a manga que amadureceu na árvore». As pessoas riam e aplaudiam.',
        choices: [
          { text: 'Linu alimwuliza jirani yake kwa nini watu wanacheka.', translation: 'O Linu perguntou ao vizinho por que as pessoas riam.', next: 'mafumbo' },
          { text: 'Linu aliandika maneno ya wimbo daftarini.', translation: 'O Linu anotou a letra da canção no caderno.', next: 'daftari' },
        ],
      },
      daftari: {
        emoji: '📓',
        text: 'Linu aliandika: «embe lililoiva». Alifikiri wimbo unahusu matunda tu. Lakini watu walipocheka tena, alitambua kwamba kuna jambo zaidi.',
        translation: 'O Linu anotou: «a manga madura». Achou que a canção falava só de frutas. Mas, quando as pessoas riram de novo, percebeu que havia algo mais.',
        choices: [{ text: 'Linu alimwuliza jirani yake.', translation: 'O Linu perguntou ao vizinho.', next: 'mafumbo' }],
      },
      mafumbo: {
        emoji: '🤫',
        text: 'Jirani alinong’ona: «Katika taarab, maneno yana mafumbo. Embe lililoiva linaweza kuwa msichana mrembo ambaye wengi wanamtaka. Ukisikiliza kwa makini, utaelewa ujumbe uliofichwa.»',
        translation: 'O vizinho sussurrou: «No taarab, as palavras têm sentidos escondidos. A manga madura pode ser uma moça bonita que muitos querem. Se você ouvir com atenção, vai entender o recado escondido.»',
        choices: [
          { text: 'Linu alisubiri mapumziko ili azungumze na mwimbaji.', translation: 'O Linu esperou o intervalo para conversar com a cantora.', next: 'mwimbaji' },
          {
            text: 'Linu aliamua kwamba wimbo unahusu bei ya maembe sokoni.',
            translation: 'O Linu concluiu que a canção era sobre o preço das mangas no mercado.',
            wrong: 'O vizinho explicou que no taarab as palavras têm «mafumbo», sentidos escondidos: a manga madura pode ser uma moça, não uma mercadoria.',
          },
        ],
      },
      mwimbaji: {
        emoji: '🎤',
        text: 'Wakati wa mapumziko, Bi Mwanaisha alikaa karibu na mlango. Linu alimsalimu kwa heshima: «Shikamoo, bibi. Wimbo wako ulikuwa mzuri mno.» Alitabasamu: «Marahaba. Ukitaka kuelewa taarab, jifunze methali kwanza. Methali ni ufunguo.»',
        translation: 'No intervalo, dona Mwanaisha sentou-se perto da porta. O Linu a cumprimentou com respeito: «Meus respeitos, senhora. A sua canção foi lindíssima.» Ela sorriu: «Obrigada. Se quiser entender o taarab, aprenda primeiro os provérbios. O provérbio é a chave.»',
        choices: [
          { text: 'Tafadhali, nifundishe methali moja.', translation: 'Por favor, me ensine um provérbio.', next: 'methali' },
          { text: 'Linu alirudi kwenye kiti chake.', translation: 'O Linu voltou para a cadeira dele.', next: 'final_neutro' },
        ],
      },
      methali: {
        emoji: '📜',
        text: '«Mchelea mwana kulia hulia yeye», alisema Bi Mwanaisha. «Anayeogopa mtoto wake kulia, mwishowe hulia yeye mwenyewe. Maana yake: usipomfundisha mtoto nidhamu leo, utajuta kesho.»',
        translation: '«Quem teme que a criança chore acaba chorando ele mesmo», disse dona Mwanaisha. «Quem tem medo de deixar a criança chorar, no fim chora ele próprio. Quer dizer: se você não ensina disciplina à criança hoje, vai se arrepender amanhã.»',
        choices: [{ text: 'Linu aliiandika methali na kuirudia mara tatu.', translation: 'O Linu anotou o provérbio e o repetiu três vezes.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Sehemu ya pili ilipoanza, Linu alisikiliza kwa makini zaidi. Aliposikia mstari wenye methali, alitabasamu: sasa aliweza kuona maana iliyofichwa nyuma ya maneno.',
        translation: 'Quando começou a segunda parte, o Linu ouviu com mais atenção. Quando ouviu um verso com um provérbio, sorriu: agora conseguia ver o sentido escondido por trás das palavras.',
        ending: { tone: 'bom', title: 'A chave do taarab', message: 'O Linu descobriu que o taarab fala por imagens e provérbios, e aprendeu um deles com uma mestra.' },
      },
      final_neutro: {
        emoji: '🪑',
        text: 'Linu alisikiliza nyimbo zilizobaki, lakini maneno mengi yalimpita bila kuyaelewa. «Nitarudi siku nyingine nikiwa nimejifunza methali», alijiahidi.',
        translation: 'O Linu ouviu as canções que faltavam, mas muitas palavras passaram sem que ele as entendesse. «Volto outro dia, depois de ter aprendido provérbios», prometeu a si mesmo.',
        ending: { tone: 'neutro', title: 'Palavras que passam', message: 'Sem os provérbios, o taarab fica pela metade. Vale voltar com a chave na mão.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'sw-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Barua kwa mhariri',
    emoji: '✉️',
    summary: 'Em Dar es Salaam, o Linu escreve uma carta ao editor de um jornal sobre o lixo na praia e aprende a narrar com -ka- e a falar de hábitos com hu-.',
    cultural_context:
      'Os jornais em suaíli têm longa tradição na Tanzânia e no Quênia, e as cartas dos leitores (barua za wasomaji) são um espaço importante de debate público. Num texto formal, a carta começa com «Mhariri,» ou «Ndugu Mhariri,», apresenta o problema, dá exemplos e propõe soluções, e termina com o nome e a cidade do autor. Na narração, o suaíli encadeia ações com -ka- («alienda akaona», foi e viu), e fala de hábitos com hu- («watu hutupa taka», as pessoas costumam jogar lixo).',
    start: 'start',
    glossary: [
      ['mhariri', 'editor'],
      ['barua', 'carta'],
      ['taka', 'lixo'],
      ['ufukweni', 'na praia'],
      ['hutupa', 'costumam jogar (hu-: hábito)'],
      ['nikaona', 'e vi (-ka-: ação seguinte)'],
      ['ninapendekeza', 'proponho'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Jumamosi asubuhi Linu alienda ufukweni Coco, akakuta chupa za plastiki na mifuko kila mahali. Watu wengi hutembea pale jioni, na baadhi yao hutupa taka mchangani. Linu aliamua kumwandikia mhariri wa gazeti.',
        translation: 'No sábado de manhã, o Linu foi à praia de Coco e encontrou garrafas plásticas e sacolas por toda parte. Muita gente costuma passear ali ao entardecer, e alguns jogam lixo na areia. O Linu decidiu escrever ao editor do jornal.',
        choices: [
          { text: 'Linu alianza: «Ndugu Mhariri,»', translation: 'O Linu começou: «Prezado Editor,»', next: 'utangulizi' },
          { text: 'Linu alianza: «Mambo vipi, mhariri!»', translation: 'O Linu começou: «E aí, beleza, editor!»', next: 'isiyo_rasmi' },
        ],
      },
      isiyo_rasmi: {
        emoji: '🙅',
        text: 'Rafiki yake Zawadi alisoma na kucheka: «Hii si barua ya gazeti, ni ujumbe wa simu! Barua rasmi huanza kwa “Ndugu Mhariri”.» Linu akafuta na kuanza upya.',
        translation: 'A amiga dele, Zawadi, leu e riu: «Isso não é carta de jornal, é mensagem de celular! Carta formal começa com “Prezado Editor”.» O Linu apagou e recomeçou.',
        choices: [{ text: 'Linu aliandika: «Ndugu Mhariri,»', translation: 'O Linu escreveu: «Prezado Editor,»', next: 'utangulizi' }],
      },
      utangulizi: {
        emoji: '📝',
        text: 'Linu aliandika: «Jumamosi iliyopita nilienda ufukweni Coco, nikaona taka nyingi mchangani. Wakazi na wageni hutembea hapo kila siku, lakini hakuna mapipa ya kutosha ya kutupia taka.»',
        translation: 'O Linu escreveu: «No sábado passado fui à praia de Coco e vi muito lixo na areia. Moradores e visitantes caminham ali todos os dias, mas não há latas de lixo suficientes.»',
        choices: [
          { text: 'Linu aliongeza pendekezo.', translation: 'O Linu acrescentou uma proposta.', next: 'pendekezo' },
          {
            text: 'Linu aliandika kwamba ufukwe ulikuwa safi kabisa.',
            translation: 'O Linu escreveu que a praia estava totalmente limpa.',
            wrong: 'O Linu encontrou garrafas e sacolas «kila mahali», por toda parte. A carta existe justamente porque a praia NÃO estava limpa.',
          },
        ],
      },
      pendekezo: {
        emoji: '💡',
        text: '«Ninapendekeza mambo mawili», aliandika. «Kwanza, halmashauri iweke mapipa zaidi. Pili, shule zifanye usafi wa ufukwe mara moja kwa mwezi. Hivyo, sote tutajifunza kuulinda ufukwe wetu.»',
        translation: '«Proponho duas coisas», escreveu. «Primeiro, que a prefeitura coloque mais latas de lixo. Segundo, que as escolas façam uma limpeza da praia uma vez por mês. Assim, todos aprenderemos a proteger a nossa praia.»',
        choices: [
          { text: 'Linu alimaliza: «Wako, Linu, Dar es Salaam.»', translation: 'O Linu terminou: «Atenciosamente, Linu, Dar es Salaam.»', next: 'final_bom' },
          { text: 'Linu alituma barua bila jina lake.', translation: 'O Linu mandou a carta sem o nome dele.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: 'Wiki iliyofuata, barua ya Linu ilichapishwa gazetini. Jumamosi hiyo, wanafunzi thelathini walikuja ufukweni wakiwa na mifuko na glavu, wakafanya usafi pamoja naye.',
        translation: 'Na semana seguinte, a carta do Linu foi publicada no jornal. Naquele sábado, trinta estudantes vieram à praia com sacos e luvas e fizeram a limpeza junto com ele.',
        ending: { tone: 'bom', title: 'Carta publicada', message: 'Com o formato formal, o -ka- na narração e o hu- para os hábitos, a carta do Linu virou ação.' },
      },
      final_neutro: {
        emoji: '📭',
        text: 'Mhariri alijibu kwa barua pepe: «Samahani, hatuchapishi barua zisizo na jina la mwandishi.» Linu alitambua kosa lake.',
        translation: 'O editor respondeu por e-mail: «Desculpe, não publicamos cartas sem o nome do autor.» O Linu percebeu o erro.',
        ending: { tone: 'neutro', title: 'Carta sem assinatura', message: 'Boa carta, mas sem o nome e a cidade do autor o jornal não publica.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'sw-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Maneno ya Kireno Fort Jesus',
    emoji: '🏰',
    summary: 'No Forte Jesus, em Mombasa, o Linu descobre com uma historiadora as palavras que o suaíli herdou do português e discute como as línguas guardam a história.',
    cultural_context:
      'O Forte Jesus, em Mombasa, foi construído pelos portugueses entre 1593 e 1596 para controlar o comércio no oceano Índico, e mudou de mãos várias vezes entre portugueses, omanis e britânicos; hoje é museu e Patrimônio Mundial da UNESCO. Dos quase dois séculos de presença portuguesa na costa, o suaíli guardou algumas dezenas de palavras, como meza (mesa), bendera (bandeira), leso (lenço), gereza (prisão) e pipa (barril).',
    start: 'start',
    glossary: [
      ['ngome', 'forte, fortaleza'],
      ['mwanahistoria', 'historiador(a)'],
      ['maneno ya mkopo', 'empréstimos (palavras emprestadas)'],
      ['Wareno', 'os portugueses'],
      ['gereza', 'prisão (do português «igreja»)'],
      ['athari', 'influência, marca'],
    ],
    nodes: {
      start: {
        emoji: '🧱',
        text: 'Ndani ya ngome ya Fort Jesus, Dkt. Halima, mwanahistoria wa makumbusho, alimwonyesha Linu mizinga ya zamani. «Wareno walijenga ngome hii karne ya kumi na sita», alieleza. «Hawakuacha majengo tu, bali pia maneno.»',
        translation: 'Dentro do Forte Jesus, a doutora Halima, historiadora do museu, mostrou ao Linu os canhões antigos. «Os portugueses construíram este forte no século XVI», explicou. «Não deixaram só prédios, mas também palavras.»',
        choices: [
          { text: 'Linu aliomba mifano ya maneno hayo.', translation: 'O Linu pediu exemplos dessas palavras.', next: 'mifano' },
          { text: 'Linu aliuliza kwa nini ngome ilibadilisha wamiliki mara nyingi.', translation: 'O Linu perguntou por que o forte mudou tantas vezes de dono.', next: 'historia' },
        ],
      },
      historia: {
        emoji: '⚔️',
        text: '«Pwani hii ilikuwa njia muhimu ya biashara ya Bahari ya Hindi», alisema Dkt. Halima. «Wareno, Waomani na hatimaye Waingereza wote waliitaka. Kila mmoja aliacha athari katika utamaduni na lugha ya watu wa pwani.»',
        translation: '«Esta costa era uma rota importante do comércio do oceano Índico», disse a doutora Halima. «Portugueses, omanis e por fim britânicos, todos a queriam. Cada um deixou marcas na cultura e na língua do povo da costa.»',
        choices: [{ text: 'Linu aliomba mifano ya maneno ya Kireno.', translation: 'O Linu pediu exemplos de palavras portuguesas.', next: 'mifano' }],
      },
      mifano: {
        emoji: '📋',
        text: 'Dkt. Halima alihesabu kwa vidole: «Meza, bendera, leso, pipa… na gereza. Unajua kwa nini gereza inamaanisha jela?» Linu alifikiri: «gereza» ilifanana na neno fulani la Kireno.',
        translation: 'A doutora Halima contou nos dedos: «Meza, bendera, leso, pipa… e gereza. Você sabe por que gereza quer dizer prisão?» O Linu pensou: «gereza» lembrava alguma palavra portuguesa.',
        choices: [
          { text: '«Inatoka “igreja”? Labda kanisa la ngome lilitumika kama jela.»', translation: '«Vem de “igreja”? Talvez a igreja do forte tenha sido usada como prisão.»', next: 'gereza' },
          {
            text: '«Inatoka Kiarabu, kwa sababu maneno yote ya pwani ni ya Kiarabu.»',
            translation: '«Vem do árabe, porque todas as palavras da costa são árabes.»',
            wrong: 'A doutora acabou de dizer que gereza é uma das palavras portuguesas. E nem todas as palavras da costa são árabes: o suaíli é uma língua banta com empréstimos de várias línguas.',
          },
        ],
      },
      gereza: {
        emoji: '⛪',
        text: '«Hivyo ndivyo wataalamu wengi wanavyoeleza», alijibu Dkt. Halima. «Neno la Kireno “igreja” liliingia Kiswahili likimaanisha jengo la ngome la Wareno, na baadaye likapata maana ya jela. Lugha huhifadhi historia ambayo vitabu vimeisahau.»',
        translation: '«É assim que muitos especialistas explicam», respondeu a doutora Halima. «A palavra portuguesa “igreja” entrou no suaíli designando o prédio fortificado dos portugueses e depois ganhou o sentido de prisão. A língua guarda a história que os livros esqueceram.»',
        choices: [
          { text: 'Linu alipendekeza kutengeneza orodha ya maneno haya kwa wanafunzi wa Kibrazili.', translation: 'O Linu propôs fazer uma lista dessas palavras para estudantes brasileiros.', next: 'final_bom' },
          { text: 'Linu alisema kwamba maneno ya mkopo huharibu lugha.', translation: 'O Linu disse que os empréstimos estragam a língua.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📚',
        text: 'Dkt. Halima alifurahi: «Wazo zuri! Wanafunzi wa Kibrazili watagundua kwamba tayari wanajua baadhi ya maneno ya Kiswahili.» Walikaa mpaka jioni wakiandika orodha, huku jua likizama nyuma ya mji.',
        translation: 'A doutora Halima ficou contente: «Boa ideia! Os estudantes brasileiros vão descobrir que já sabem algumas palavras de suaíli.» Ficaram até o fim da tarde escrevendo a lista, enquanto o sol se punha atrás da cidade.',
        ending: { tone: 'bom', title: 'Palavras de ida e volta', message: 'O Linu entendeu como os empréstimos contam a história da costa e transformou isso numa ponte para outros brasileiros.' },
      },
      final_neutro: {
        emoji: '🤨',
        text: 'Dkt. Halima alitikisa kichwa: «Kila lugha hukopa. Kiswahili kimekopa kutoka Kiarabu, Kireno, Kiingereza na lugha nyingine, lakini bado ni Kibantu kwa sarufi yake.» Linu alinyamaza, akifikiri.',
        translation: 'A doutora Halima balançou a cabeça: «Toda língua empresta. O suaíli emprestou do árabe, do português, do inglês e de outras, mas continua banto na gramática.» O Linu ficou calado, pensando.',
        ending: { tone: 'neutro', title: 'Toda língua empresta', message: 'Os empréstimos não estragam uma língua: o suaíli recebeu palavras de muitas línguas e manteve a gramática banta.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'sw-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Mjadala Butiama',
    emoji: '🏛️',
    summary: 'Em Butiama, terra natal de Julius Nyerere, o Linu participa de um debate de estudantes sobre a língua do ensino e precisa argumentar em registro formal.',
    cultural_context:
      'Julius Kambarage Nyerere (1922–1999), o primeiro presidente da Tanzânia, nasceu em Butiama, perto do lago Vitória, onde hoje há um museu sobre ele. Chamado de «Mwalimu» (professor), ele fez do suaíli a língua nacional e da administração, o que ajudou a unir um país de mais de cem grupos étnicos; ele próprio traduziu peças de Shakespeare para o suaíli. Até hoje se discute se o ensino médio e a universidade devem ser em suaíli ou em inglês.',
    start: 'start',
    glossary: [
      ['mjadala', 'debate'],
      ['lugha ya kufundishia', 'língua de ensino'],
      ['hoja', 'argumento'],
      ['kwa upande mmoja… kwa upande mwingine', 'por um lado… por outro'],
      ['ninaunga mkono', 'apoio, sou a favor'],
      ['Mwalimu', 'o Professor (título de Nyerere)'],
    ],
    nodes: {
      start: {
        emoji: '🎓',
        text: 'Katika ukumbi wa shule karibu na makumbusho ya Mwalimu Nyerere, mwenyekiti wa mjadala alitangaza hoja: «Elimu ya sekondari itolewe kwa Kiswahili.» Kisha akamgeukia Linu: «Mgeni wetu, ungependa kuanza?»',
        translation: 'No salão de uma escola perto do museu do Mwalimu Nyerere, o presidente do debate anunciou a moção: «Que o ensino médio seja dado em suaíli.» Depois virou-se para o Linu: «Nosso convidado, gostaria de começar?»',
        choices: [
          { text: '«Mheshimiwa mwenyekiti, ndugu wanafunzi, ninaomba kuanza kwa kueleza pande zote mbili.»', translation: '«Senhor presidente, caros estudantes, peço para começar expondo os dois lados.»', next: 'pande' },
          { text: '«Kiingereza ni bora tu, basi!»', translation: '«O inglês é melhor e pronto!»', next: 'haraka' },
        ],
      },
      haraka: {
        emoji: '😶',
        text: 'Ukumbi ulinyamaza. Mwenyekiti alisema kwa upole: «Katika mjadala tunatoa hoja na ushahidi, si maamuzi tu. Tafadhali, eleza sababu zako.»',
        translation: 'O salão ficou em silêncio. O presidente disse com calma: «Num debate, apresentamos argumentos e evidências, não só conclusões. Por favor, explique as suas razões.»',
        choices: [{ text: 'Linu aliomba radhi na kuanza upya kwa utaratibu.', translation: 'O Linu pediu desculpas e recomeçou com ordem.', next: 'pande' }],
      },
      pande: {
        emoji: '⚖️',
        text: '«Kwa upande mmoja», Linu alisema, «wanafunzi huelewa vizuri zaidi wanapofundishwa kwa lugha wanayoitumia kila siku. Kwa upande mwingine, Kiingereza hufungua milango ya vitabu na vyuo vya nje.»',
        translation: '«Por um lado», disse o Linu, «os alunos entendem melhor quando são ensinados na língua que usam todo dia. Por outro lado, o inglês abre as portas de livros e universidades de fora.»',
        choices: [
          { text: 'Linu alitoa mfano wa Brazili.', translation: 'O Linu deu o exemplo do Brasil.', next: 'brazili' },
          {
            text: 'Linu alisema Nyerere alipiga marufuku Kiswahili.',
            translation: 'O Linu disse que Nyerere proibiu o suaíli.',
            wrong: 'Foi o contrário: Nyerere fez do suaíli a língua nacional e da administração, e até traduziu Shakespeare para o suaíli.',
          },
        ],
      },
      brazili: {
        emoji: '🇧🇷',
        text: '«Nchini Brazili, tunasoma kila kitu kwa Kireno, hata chuo kikuu», alieleza Linu, «na bado tunajifunza lugha za kigeni kama masomo. Labda njia hiyo inaweza kufikiriwa hapa pia.» Mwanafunzi mmoja alisimama kujibu.',
        translation: '«No Brasil, estudamos tudo em português, até na universidade», explicou o Linu, «e mesmo assim aprendemos línguas estrangeiras como matérias. Talvez esse caminho também possa ser considerado aqui.» Um estudante se levantou para responder.',
        choices: [
          { text: 'Linu alisikiliza hoja yake kwa makini na kuijibu kwa heshima.', translation: 'O Linu ouviu o argumento dele com atenção e respondeu com respeito.', next: 'final_bom' },
          { text: 'Linu alimkatiza mwanafunzi kabla hajamaliza.', translation: 'O Linu interrompeu o estudante antes que terminasse.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '👏',
        text: 'Mwisho wa mjadala, mwenyekiti alisema: «Mgeni wetu ametukumbusha kwamba lugha si chombo cha mawasiliano tu, bali pia ni utambulisho.» Wanafunzi walipiga makofi, na mzee mmoja akasema: «Mwalimu angefurahi.»',
        translation: 'No fim do debate, o presidente disse: «O nosso convidado nos lembrou que a língua não é só um instrumento de comunicação, mas também identidade.» Os estudantes aplaudiram, e um senhor disse: «O Mwalimu ficaria contente.»',
        ending: { tone: 'bom', title: 'Debate de ideias', message: 'Registro formal, argumentos dos dois lados e escuta respeitosa: o Linu debateu como se debate em suaíli.' },
      },
      final_neutro: {
        emoji: '🔔',
        text: 'Mwenyekiti aligonga kengele: «Tafadhali, kila mmoja apewe nafasi.» Linu aliomba radhi, lakini muda wake ulikuwa umekwisha.',
        translation: 'O presidente tocou a sineta: «Por favor, que cada um tenha a sua vez.» O Linu pediu desculpas, mas o tempo dele já tinha acabado.',
        ending: { tone: 'neutro', title: 'A vez do outro', message: 'Os argumentos eram bons, mas interromper custou a palavra. No debate formal, escutar faz parte.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'sw-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Mizani na vina',
    emoji: '🖋️',
    summary: 'Em Tanga, na terra do poeta Shaaban Robert, o Linu participa de uma oficina de poesia e tenta compor uma estrofe com a métrica e as rimas do shairi.',
    cultural_context:
      'A poesia é a arte mais prestigiada da língua suaíli, escrita há séculos, primeiro em letras árabes. O shairi clássico tem estrofes de quatro versos; cada verso tem dezesseis sílabas (mizani), divididas em duas metades de oito, com rimas no meio e no fim (vina). Shaaban Robert (1909–1962), nascido perto de Tanga, é considerado um dos maiores escritores do suaíli moderno, autor de poemas, ensaios e romances, e defensor da língua como patrimônio da África Oriental.',
    start: 'start',
    glossary: [
      ['shairi', 'poema (de forma clássica)'],
      ['ubeti, beti', 'estrofe, estrofes'],
      ['mizani', 'as sílabas contadas do verso'],
      ['vina', 'rimas (do meio e do fim)'],
      ['kipande', 'meia linha, hemistíquio'],
      ['mshairi', 'poeta'],
      ['kituo', 'refrão, verso final repetido'],
    ],
    nodes: {
      start: {
        emoji: '📖',
        text: 'Katika warsha ya ushairi mjini Tanga, mshairi mzee, Mwalimu Salim, aliandika ubeti ubaoni na kueleza: «Kila mstari una mizani kumi na sita, vipande viwili vya mizani minane. Vina vya kati na vya mwisho lazima vilingane katika ubeti mzima.»',
        translation: 'Numa oficina de poesia na cidade de Tanga, um poeta idoso, o professor Salim, escreveu uma estrofe no quadro e explicou: «Cada verso tem dezesseis sílabas, duas metades de oito. As rimas do meio e do fim têm de combinar na estrofe inteira.»',
        choices: [
          { text: 'Linu alianza kuhesabu mizani kwa vidole.', translation: 'O Linu começou a contar as sílabas nos dedos.', next: 'kuhesabu' },
          { text: 'Linu aliuliza kuhusu Shaaban Robert.', translation: 'O Linu perguntou sobre Shaaban Robert.', next: 'shaaban' },
        ],
      },
      shaaban: {
        emoji: '🏅',
        text: '«Shaaban Robert alizaliwa karibu na hapa», alisema Mwalimu Salim. «Aliamini kwamba Kiswahili ni hazina ya Afrika Mashariki, na aliandika mashairi, insha na riwaya zinazosomwa shuleni hadi leo. Tunamkumbuka kwa kuendelea kuandika.»',
        translation: '«Shaaban Robert nasceu perto daqui», disse o professor Salim. «Ele acreditava que o suaíli é um tesouro da África Oriental e escreveu poemas, ensaios e romances que são lidos nas escolas até hoje. Nós o lembramos continuando a escrever.»',
        choices: [{ text: 'Linu alianza kuhesabu mizani.', translation: 'O Linu começou a contar as sílabas.', next: 'kuhesabu' }],
      },
      kuhesabu: {
        emoji: '✋',
        text: 'Linu alihesabu mstari wa kwanza: «Lu-gha ye-tu ni ha-zi-na» — mizani minane. Kisha kipande cha pili. Mwalimu Salim aliuliza: «Vina vya kati katika mstari huu ni vipi?»',
        translation: 'O Linu contou o primeiro verso: «Lu-gha ye-tu ni ha-zi-na» — oito sílabas. Depois, a segunda metade. O professor Salim perguntou: «Qual é a rima do meio neste verso?»',
        choices: [
          { text: '«Ni silabi ya mwisho ya kipande cha kwanza: -na.»', translation: '«É a última sílaba da primeira metade: -na.»', next: 'kutunga' },
          {
            text: '«Ni neno la kwanza la mstari: lugha.»',
            translation: '«É a primeira palavra do verso: lugha.»',
            wrong: 'A rima do meio (kina cha kati) está no FIM da primeira metade do verso, não no começo: em «Lugha yetu ni hazina», é o «-na».',
          },
        ],
      },
      kutunga: {
        emoji: '✍️',
        text: 'Mwalimu Salim aliandika mstari mzima: «Lugha yetu ni hazina, tuitunze kwa makini.» Kisha akampa Linu kazi: «Tunga mstari wa pili wenye vina vilevile: -na katikati na -ni mwishoni, na mizani kumi na sita.»',
        translation: 'O professor Salim escreveu o verso inteiro: «A nossa língua é um tesouro, cuidemos dela com atenção.» Depois deu uma tarefa ao Linu: «Componha o segundo verso com as mesmas rimas: -na no meio e -ni no fim, e dezesseis sílabas.»',
        choices: [
          { text: '«Nimetoka mbali sana, na sasa niko Tangani.»', translation: '«Vim de muito longe, e agora estou em Tanga.»', next: 'kuhakiki' },
          { text: '«Nimetoka Brazili, nimefika Tanga leo.»', translation: '«Vim do Brasil, cheguei a Tanga hoje.»', next: 'final_neutro' },
        ],
      },
      kuhakiki: {
        emoji: '🔍',
        text: 'Mwalimu Salim alihesabu kwa sauti: «Ni-me-to-ka mba-li sa-na: minane. Na sa-sa ni-ko Ta-nga-ni: minane.» Alitabasamu: «Vina -na na -ni viko sawa. Sasa maana: mstari wa kwanza unasema lugha ni hazina, na wako unasema umetoka mbali. Unaweza kuviunganisha?»',
        translation: 'O professor Salim contou em voz alta: «Ni-me-to-ka mba-li sa-na: oito. Na sa-sa ni-ko Ta-nga-ni: oito.» E sorriu: «As rimas -na e -ni estão certas. Agora, o sentido: o primeiro verso diz que a língua é um tesouro, e o seu diz que você veio de longe. Consegue ligar os dois?»',
        choices: [
          { text: 'Linu alieleza: «Nimetoka mbali kwa sababu ya hazina hiyo — lugha.»', translation: 'O Linu explicou: «Vim de longe por causa desse tesouro — a língua.»', next: 'final_bom' },
          {
            text: 'Linu alisema kwamba mstari wake una mizani ishirini.',
            translation: 'O Linu disse que o verso dele tinha vinte sílabas.',
            wrong: 'O professor acabou de contar: oito sílabas em cada metade, dezesseis ao todo (kumi na sita), exatamente a medida do shairi.',
          },
        ],
      },
      final_bom: {
        emoji: '📜',
        text: 'Mwalimu Salim alisoma beti mbili kwa sauti mbele ya darasa, na wanafunzi walipiga makofi. «Mshairi hufuata mizani na vina, lakini zaidi ya hayo, hufuata moyo», alisema. «Leo umeanza safari ya ushairi.»',
        translation: 'O professor Salim leu os dois versos em voz alta para a turma, e os alunos aplaudiram. «O poeta segue a métrica e as rimas, mas, acima disso, segue o coração», disse ele. «Hoje você começou a viagem da poesia.»',
        ending: { tone: 'bom', title: 'O começo de um poeta', message: 'O Linu contou as mizani, acertou os vina e ligou a forma ao sentido, como pede o shairi clássico.' },
      },
      final_neutro: {
        emoji: '🙂',
        text: 'Mwalimu Salim alitabasamu: «Maana ni nzuri, lakini mstari huu hauna vina wala mizani ya shairi. Hesabu tena, silabi kwa silabi.» Linu aliahidi kurudi kesho na daftari jipya.',
        translation: 'O professor Salim sorriu: «O sentido é bonito, mas este verso não tem nem as rimas nem a métrica do shairi. Conte de novo, sílaba por sílaba.» O Linu prometeu voltar amanhã com um caderno novo.',
        ending: { tone: 'neutro', title: 'Conte de novo', message: 'No shairi, o sentido não basta: cada verso precisa das dezesseis sílabas e das rimas do meio e do fim.' },
      },
    },
  },
];
