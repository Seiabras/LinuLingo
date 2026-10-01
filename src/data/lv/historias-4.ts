import type { StorySeed } from '../types';

/** Histórias interativas em letão, B2.1 e B2.2 (lv-h26 … lv-h30): condicional, hipóteses e registro formal. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'lv-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Ja māls varētu runāt',
    emoji: '🏺',
    summary: 'Em Rēzekne, o Linu passa uma tarde na oficina de uma ceramista da Latgália e descobre que o barro não obedece a quem tem pressa.',
    cultural_context:
      'A cerâmica da Latgália, no leste da Letônia, é uma tradição de séculos: tigelas, jarros e castiçais de muitos braços, com esmaltes em verde, marrom e amarelo, feitos no torno por famílias de oleiros. Rēzekne, a maior cidade do centro da Latgália, tem oficinas e exposições de cerâmica, e muitos oleiros ainda queimam as peças em fornos a lenha.',
    start: 'start',
    glossary: [
      ['māls', 'barro, argila'],
      ['podnieks, podniece', 'oleiro, oleira'],
      ['virpa', 'torno (de oleiro)'],
      ['glazūra', 'esmalte'],
      ['svečturis', 'castiçal'],
      ['apdedzināt', 'queimar (no forno)'],
      ['ja tu steigtos', 'se você se apressasse'],
    ],
    nodes: {
      start: {
        emoji: '🏺',
        text: 'Rēzeknes nomalē, mazā koka mājā, strādāja podniece Irēna. Plauktos stāvēja zaļi un brūni trauki un svečturi ar daudzām rokām. “Ja tev būtu vairāk laika, es tevi iemācītu uztaisīt bļodu”, viņa teica Linu. “Man ir visa pēcpusdiena”, atbildēja Linu.',
        translation: 'Na periferia de Rēzekne, numa casinha de madeira, trabalhava a oleira Irēna. Nas prateleiras havia louças verdes e marrons e castiçais de muitos braços. “Se você tivesse mais tempo, eu te ensinaria a fazer uma tigela”, disse ela ao Linu. “Tenho a tarde inteira”, respondeu o Linu.',
        choices: [
          { text: 'Linu uzreiz apsēdās pie virpas.', translation: 'O Linu sentou-se logo ao torno.', next: 'virpa' },
          { text: 'Linu vispirms palūdza parādīt, kā strādā pati Irēna.', translation: 'O Linu primeiro pediu que a própria Irēna mostrasse como trabalha.', next: 'paraugs' },
        ],
      },
      paraugs: {
        emoji: '👐',
        text: 'Irēna uzlika māla kumosu virpas vidū un mierīgi to spieda ar slapjām rokām. Pēc dažām minūtēm no pelēkā kumosa izauga augsta krūze. “Ja tu spiestu pārāk stipri, māls saplīstu; ja pārāk vāji, tas aizbēgtu”, viņa paskaidroja.',
        translation: 'A Irēna colocou um bolo de barro no centro do torno e o apertou com calma, com as mãos molhadas. Em poucos minutos, do bolo cinzento surgiu um jarro alto. “Se você apertasse forte demais, o barro rasgaria; se apertasse fraco demais, ele fugiria”, explicou ela.',
        choices: [{ text: 'Linu teica, ka tagad gribētu pamēģināt pats.', translation: 'O Linu disse que agora gostaria de tentar sozinho.', next: 'virpa' }],
      },
      virpa: {
        emoji: '🌀',
        text: 'Virpa griezās, un māls slīdēja zem Linu spārniem. Bļoda jau sāka rasties, bet tās mala bija šķība. Irēna vēroja un smaidīja: “Ja tu steigtos mazāk, tā būtu taisna.”',
        translation: 'O torno girava, e o barro deslizava sob as asas do Linu. A tigela já começava a aparecer, mas a borda estava torta. A Irēna observava e sorria: “Se você se apressasse menos, ela ficaria reta.”',
        choices: [
          { text: 'Linu palēnināja virpu un elpoja dziļi.', translation: 'O Linu diminuiu a velocidade do torno e respirou fundo.', next: 'lenam' },
          { text: 'Linu griezā virpu vēl ātrāk, lai ātrāk pabeigtu.', translation: 'O Linu girou o torno ainda mais rápido, para terminar logo.', next: 'saplisa' },
          {
            text: 'Linu priecājās, ka Irēna uzslavēja taisno bļodas malu.',
            translation: 'O Linu ficou feliz porque a Irēna elogiou a borda reta da tigela.',
            wrong: 'A borda estava “šķība”, torta. A Irēna disse que ela SÓ ficaria reta se ele se apressasse menos: “ja tu steigtos mazāk, tā būtu taisna”.',
          },
        ],
      },
      saplisa: {
        emoji: '💥',
        text: 'Māls nevarēja izturēt tādu ātrumu, bļodas mala saplīsa un aizlidoja pret sienu. Irēna iesmējās: “Ja es par katru saplīsušu bļodu saņemtu eiro, es būtu bagāta.” Viņa iedeva Linu jaunu māla kumosu.',
        translation: 'O barro não aguentou tanta velocidade: a borda da tigela rasgou e voou contra a parede. A Irēna riu: “Se eu ganhasse um euro por cada tigela rasgada, estaria rica.” E deu ao Linu um novo bolo de barro.',
        choices: [{ text: 'Linu sāka no jauna, šoreiz lēnām.', translation: 'O Linu começou de novo, desta vez devagar.', next: 'lenam' }],
      },
      lenam: {
        emoji: '🥣',
        text: 'Šoreiz bļoda izdevās apaļa un gluda. Irēna paskaidroja, ka tagad tai jāžūst vairākas dienas, pēc tam to pārklās ar glazūru un apdedzinās krāsnī. “Kādā krāsā tu to gribētu?” viņa jautāja.',
        translation: 'Desta vez a tigela saiu redonda e lisa. A Irēna explicou que agora ela precisa secar vários dias; depois vão cobri-la de esmalte e queimá-la no forno. “De que cor você gostaria dela?”, perguntou.',
        choices: [
          { text: 'Linu izvēlējās zaļo glazūru, kā Latgales traukiem.', translation: 'O Linu escolheu o esmalte verde, como o da louça da Latgália.', next: 'final_bom' },
          { text: 'Linu teica, ka viņam vienalga, jo viņš tik un tā aizbrauks.', translation: 'O Linu disse que tanto fazia, porque de qualquer jeito ia embora.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🟢',
        text: 'Pēc divām nedēļām Rīgā pienāca paciņa. Iekšā bija zaļa bļoda ar mazliet nelīdzenu malu un zīmīte: “Ja tu atbrauktu vēlreiz, mēs taisītu svečturi.” Linu nolika bļodu uz galda un nolēma, ka noteikti atbrauks.',
        translation: 'Duas semanas depois, chegou um pacote em Riga. Dentro havia uma tigela verde, de borda um pouco irregular, e um bilhete: “Se você viesse de novo, faríamos um castiçal.” O Linu pôs a tigela na mesa e decidiu que com certeza voltaria.',
        ending: { tone: 'bom', title: 'A tigela verde', message: 'Devagar e com as mãos molhadas: o Linu aprendeu o ritmo do barro e ganhou um convite para voltar.' },
      },
      final_neutro: {
        emoji: '🌫️',
        text: 'Irēna pamāja ar galvu un teica, ka tad bļoda paliks nekrāsota. Linu aizbrauca, un viņa bļoda palika Irēnas plauktā starp citiem traukiem. Vilcienā viņš domāja, ka būtu jauki, ja tā tagad stāvētu viņa virtuvē.',
        translation: 'A Irēna fez que sim com a cabeça e disse que então a tigela ficaria sem cor. O Linu foi embora, e a tigela dele ficou na prateleira da Irēna, entre outras louças. No trem, ele pensou que seria bom se ela estivesse agora na cozinha dele.',
        ending: { tone: 'neutro', title: 'Tigela sem dono', message: 'O trabalho ficou pela metade: na cerâmica, esperar a secagem e o forno faz parte da arte.' },
      },
    },
  },
  {
    id: 'lv-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Āliņģis Lubāna ledū',
    emoji: '🎣',
    summary: 'Num sábado de fevereiro, o Linu vai pescar no gelo do lago Lubāns com o avô de uma amiga e aprende que, no gelo, os “se” são questão de segurança.',
    cultural_context:
      'O Lubāns, no leste da Letônia, é o maior lago do país em área, e é raso. No inverno, quando o gelo fica grosso, os pescadores abrem buracos (āliņģi) com uma broca manual e pescam sentados em banquinhos, às vezes horas a fio. Todo ano os serviços de resgate lembram que só se deve entrar em gelo firme e grosso, nunca perto de canais e juncos, e sempre acompanhado.',
    start: 'start',
    glossary: [
      ['āliņģis', 'buraco no gelo'],
      ['ledus urbis', 'broca de gelo'],
      ['zemledus makšķerēšana', 'pesca no gelo'],
      ['plāns ledus', 'gelo fino'],
      ['asari', 'percas (peixe)'],
      ['ja ledus ielūztu', 'se o gelo quebrasse'],
      ['glābšanas dienests', 'serviço de resgate'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Pulkstenis bija seši no rīta, un termometrs rādīja divpadsmit grādu salu. Vectēvs Arvīds jau gaidīja pie Lubāna krasta ar ledus urbi un diviem soliņiem. “Ja mēs nāktu vēlāk, labākās vietas būtu aizņemtas”, viņš teica.',
        translation: 'Eram seis da manhã, e o termômetro marcava doze graus negativos. O vovô Arvīds já esperava na margem do Lubāns, com a broca de gelo e dois banquinhos. “Se viéssemos mais tarde, os melhores lugares estariam ocupados”, disse ele.',
        choices: [
          { text: 'Linu jautāja, cik biezs ir ledus.', translation: 'O Linu perguntou qual era a espessura do gelo.', next: 'biezums' },
          { text: 'Linu tūlīt skrēja uz ezera vidu.', translation: 'O Linu correu logo para o meio do lago.', next: 'skrien' },
        ],
      },
      skrien: {
        emoji: '⚠️',
        text: '“Stāt!” iesaucās Arvīds. “Ja ledus ielūztu, tevi neviens nepaspētu izvilkt.” Viņš paskaidroja, ka pie niedrēm un pie upes ietekas ledus bieži ir plānāks, pat ja virspusē izskatās stiprs.',
        translation: '“Pare!”, gritou o Arvīds. “Se o gelo quebrasse, ninguém conseguiria te tirar a tempo.” Ele explicou que perto dos juncos e da foz do rio o gelo costuma ser mais fino, mesmo que por cima pareça forte.',
        choices: [{ text: 'Linu atvainojās un atgriezās pie Arvīda.', translation: 'O Linu pediu desculpas e voltou para perto do Arvīds.', next: 'biezums' }],
      },
      biezums: {
        emoji: '📏',
        text: 'Arvīds izurba pirmo āliņģi un iebāza tajā mērlenti. “Piecpadsmit centimetri. Ja būtu mazāk par desmit, es uz ezera neietu”, viņš teica. Tad viņš iedeva Linu mazu makšķeri un kārbiņu ar tārpiem.',
        translation: 'O Arvīds abriu o primeiro buraco com a broca e enfiou nele uma trena. “Quinze centímetros. Se fossem menos de dez, eu não entraria no lago”, disse. Depois deu ao Linu uma varinha e uma caixinha de minhocas.',
        choices: [
          { text: 'Linu apsēdās uz soliņa un pacietīgi gaidīja.', translation: 'O Linu sentou no banquinho e esperou com paciência.', next: 'gaida' },
          {
            text: 'Linu nobijās, jo ledus bija tikai piecus centimetrus biezs.',
            translation: 'O Linu se assustou porque o gelo tinha só cinco centímetros.',
            wrong: 'O gelo tinha “piecpadsmit centimetri”, quinze centímetros. O Arvīds disse que só NÃO entraria se fosse menos de dez.',
          },
        ],
      },
      gaida: {
        emoji: '⏳',
        text: 'Pagāja stunda, tad otra. Linu spārni sala, un viņš domāja, ka tagad labprāt sēdētu pie siltas krāsns. Arvīds stāstīja, ka viņa tēvs šeit makšķerēja jau pirms kara un ka Lubāns ziemā viņam esot mīļāks nekā vasarā.',
        translation: 'Passou uma hora, depois outra. As asas do Linu congelavam, e ele pensava que agora estaria sentado de bom grado junto a um fogão quente. O Arvīds contou que o pai dele já pescava ali antes da guerra e que dizia gostar mais do Lubāns no inverno do que no verão.',
        choices: [
          { text: 'Linu palika un turpināja gaidīt.', translation: 'O Linu ficou e continuou esperando.', next: 'zivs' },
          { text: 'Linu teica, ka ietu sildīties uz mašīnu.', translation: 'O Linu disse que iria se esquentar no carro.', next: 'final_neutro' },
        ],
      },
      zivs: {
        emoji: '🐟',
        text: 'Pēkšņi makšķere noliecās. Linu vilka lēnām, kā Arvīds bija mācījis, un no āliņģa parādījās svītrains asaris. “Ja tu būtu aizgājis, tas būtu mans”, smējās Arvīds.',
        translation: 'De repente a vara se curvou. O Linu puxou devagar, como o Arvīds tinha ensinado, e do buraco surgiu uma perca listrada. “Se você tivesse ido embora, ela seria minha”, riu o Arvīds.',
        choices: [{ text: 'Linu lepni turēja zivi rokās.', translation: 'O Linu segurou o peixe com orgulho.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🍲',
        text: 'Vakarā Arvīda sieva no asariem uzvārīja zivju zupu. Linu ēda un teica, ka nekad nebūtu domājis, ka divpadsmit grādu salā var būt tik laimīgs. “Ja tu atbrauktu arī nākamgad, tev būtu savs soliņš”, sacīja Arvīds.',
        translation: 'À noite, a mulher do Arvīds fez uma sopa de peixe com as percas. O Linu comia e dizia que nunca teria imaginado que a doze graus negativos alguém pudesse ser tão feliz. “Se você viesse também no ano que vem, teria o seu próprio banquinho”, disse o Arvīds.',
        ending: { tone: 'bom', title: 'Uma perca no Lubāns', message: 'Paciência e respeito pelo gelo: o Linu seguiu as regras de segurança e pescou o próprio jantar.' },
      },
      final_neutro: {
        emoji: '🚗',
        text: 'Mašīnā bija silti, un Linu drīz aizmiga. Kad viņš pamodās, Arvīds jau lika spainī piecus asarus. “Ja tu būtu palicis, viens būtu tavs”, viņš teica bez ļaunuma.',
        translation: 'No carro estava quente, e o Linu logo pegou no sono. Quando acordou, o Arvīds já punha cinco percas no balde. “Se você tivesse ficado, uma seria sua”, disse ele, sem maldade.',
        ending: { tone: 'neutro', title: 'Quentinho e sem peixe', message: 'O frio venceu desta vez. Na pesca no gelo, quem fica mais tempo é quem leva o peixe.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'lv-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Brīvprātīgais Mežaparka estrādē',
    emoji: '🎶',
    summary: 'Na Festa da Canção, o Linu trabalha como voluntário no grande palco de Mežaparks e precisa falar formalmente com a coordenação, com um maestro e com uma senhora perdida.',
    cultural_context:
      'A Festa da Canção e da Dança da Letônia acontece desde 1873, em geral a cada cinco anos, e é Patrimônio Imaterial da UNESCO junto com as da Estônia e da Lituânia. O concerto final reúne dezenas de milhares de cantores no grande palco ao ar livre de Mežaparks, em Riga, e o público costuma cantar junto até tarde da noite. Antes disso, os coros de todo o país desfilam pelo centro da cidade com os trajes típicos.',
    start: 'start',
    glossary: [
      ['brīvprātīgais', 'voluntário'],
      ['estrāde', 'palco ao ar livre'],
      ['koordinatore', 'coordenadora'],
      ['diriģents', 'maestro, regente'],
      ['virsdiriģents', 'regente principal'],
      ['Vai Jūs, lūdzu, varētu…?', 'O senhor poderia, por favor…?'],
      ['gājiens', 'desfile'],
    ],
    nodes: {
      start: {
        emoji: '🪪',
        text: 'Linu ieradās Mežaparkā agri no rīta ar brīvprātīgā karti uz kakla. Koordinatore, stingra kundze ar planšeti rokā, viņu uzrunāja: “Labrīt! Jūs esat Linu? Lūdzu, pastāstiet, kādās valodās Jūs runājat.”',
        translation: 'O Linu chegou a Mežaparks de manhã cedo, com o crachá de voluntário no pescoço. A coordenadora, uma senhora séria com um tablet na mão, dirigiu-se a ele: “Bom dia! O senhor é o Linu? Por favor, diga em que línguas o senhor fala.”',
        choices: [
          { text: '“Labrīt! Es runāju portugāliski, angliski un mazliet latviski.”', translation: '“Bom dia! Eu falo português, inglês e um pouco de letão.”', next: 'uzdevums' },
          { text: '“Čau! Nu, visādās, davai, ko darīt?”', translation: '“E aí! Ah, várias, bora, o que é pra fazer?”', next: 'neformals' },
        ],
      },
      neformals: {
        emoji: '🤨',
        text: 'Koordinatore pacēla uzacis. “Šeit mēs runājam ar ‘Jūs’, it īpaši ar skatītājiem un diriģentiem”, viņa mierīgi teica. “Tagad, lūdzu, vēlreiz.” Linu nosarka un sāka no jauna.',
        translation: 'A coordenadora ergueu as sobrancelhas. “Aqui nós falamos com ‘Jūs’, principalmente com o público e os maestros”, disse com calma. “Agora, por favor, de novo.” O Linu ficou vermelho e recomeçou.',
        choices: [{ text: '“Atvainojiet! Es runāju portugāliski, angliski un mazliet latviski.”', translation: '“Desculpe! Eu falo português, inglês e um pouco de letão.”', next: 'uzdevums' }],
      },
      uzdevums: {
        emoji: '📋',
        text: '“Lieliski. Jūs palīdzēsiet pie informācijas telts”, teica koordinatore. “Ja kāds Jums uzdos jautājumu, uz kuru Jūs nezināt atbildi, lūdzu, sūtiet viņu pie manis.” Drīz pie telts pienāca kāds vecs kungs ar koristu karti.',
        translation: '“Ótimo. O senhor vai ajudar na tenda de informações”, disse a coordenadora. “Se alguém lhe fizer uma pergunta cuja resposta o senhor não saiba, por favor, mande a pessoa até mim.” Logo chegou à tenda um senhor idoso, com crachá de corista.',
        choices: [
          { text: '“Labdien! Ar ko es varu Jums palīdzēt?”', translation: '“Boa tarde! Em que posso ajudar o senhor?”', next: 'korists' },
          {
            text: '“Ko tev vajag, vecīt?”',
            translation: '“Do que você precisa, velhinho?”',
            wrong: 'Com um senhor desconhecido, e ainda mais trabalhando no festival, o tratamento é “Jūs”, nunca “tu” nem “vecīt” (velhinho), que soaria íntimo e desrespeitoso.',
          },
        ],
      },
      korists: {
        emoji: '👴',
        text: 'Kungs paskaidroja, ka viņa koris dzied jau piecdesmit gadus un ka šie esot viņa desmitie svētki. “Vai Jūs, lūdzu, varētu man parādīt, kur ir Kurzemes koru sektors?” Linu atrada karti un parādīja ceļu.',
        translation: 'O senhor explicou que o coro dele canta há cinquenta anos e que aquela seria a sua décima festa. “O senhor poderia, por favor, me mostrar onde fica o setor dos coros da Kurzeme?” O Linu achou o mapa e mostrou o caminho.',
        choices: [
          { text: 'Linu piedāvāja kungu pavadīt līdz sektoram.', translation: 'O Linu ofereceu-se para acompanhar o senhor até o setor.', next: 'pavada' },
          { text: 'Linu tikai norādīja virzienu ar spārnu.', translation: 'O Linu só apontou a direção com a asa.', next: 'koncerts' },
        ],
      },
      pavada: {
        emoji: '🚶',
        text: 'Pa ceļam kungs stāstīja, ka pirmo reizi uz svētkiem viņš braucis kā puika un ka toreiz visi dziedājuši, turot rokās svecītes. Pie sektora viņu sagaidīja koris, un diriģente pateicās Linu: “Liels paldies, ka Jūs viņu atvedāt.”',
        translation: 'No caminho, o senhor contou que tinha ido à festa pela primeira vez ainda menino e que naquela época todos cantavam segurando velinhas. No setor, o coro o recebeu, e a regente agradeceu ao Linu: “Muito obrigada por tê-lo trazido.”',
        choices: [{ text: 'Linu atgriezās pie telts, jo sākās koncerts.', translation: 'O Linu voltou à tenda, porque o concerto ia começar.', next: 'koncerts' }],
      },
      koncerts: {
        emoji: '🌅',
        text: 'Vakarā uz estrādes stāvēja desmitiem tūkstošu dziedātāju. Kad virsdiriģents pacēla rokas, iestājās klusums, un tad sākās dziesma, ko dziedāja gan koris, gan skatītāji. Koordinatore piegāja pie Linu un teica: “Šodien Jūs strādājāt ļoti labi.”',
        translation: 'À noite, dezenas de milhares de cantores estavam no palco. Quando o regente principal ergueu os braços, fez-se silêncio, e então começou uma canção cantada tanto pelo coro quanto pelo público. A coordenadora foi até o Linu e disse: “Hoje o senhor trabalhou muito bem.”',
        choices: [
          { text: '“Paldies! Man bija liels gods šeit palīdzēt.”', translation: '“Obrigado! Foi uma grande honra ajudar aqui.”', next: 'final_bom' },
          { text: 'Linu tikai pamāja ar galvu un aizgāja mājās.', translation: 'O Linu só acenou com a cabeça e foi para casa.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎤',
        text: 'Koordinatore pasmaidīja un piedāvāja Linu palikt līdz rītam, kad dziedās visi kopā. Līdz saullēktam Linu stāvēja pūlī un dziedāja līdzi dziesmām, kuru vārdus vēl nezināja. Viņam likās, ka dzied visa valsts.',
        translation: 'A coordenadora sorriu e convidou o Linu a ficar até a manhã, quando todos cantam juntos. Até o nascer do sol, o Linu ficou na multidão, cantando junto canções cuja letra ainda não sabia. Parecia-lhe que o país inteiro cantava.',
        ending: { tone: 'bom', title: 'Uma noite de coro', message: 'Com o “Jūs” no lugar certo e um pouco de gentileza, o Linu ganhou a confiança da coordenação e a noite mais musical da vida.' },
      },
      final_neutro: {
        emoji: '🚋',
        text: 'Tramvajā uz centru Linu dzirdēja, ka no Mežaparka vēl skan dziesmas. Viņš domāja, ka varbūt vajadzēja palikt ilgāk. Nākamreiz, viņš nolēma, viņš paliks līdz rītam.',
        translation: 'No bonde para o centro, o Linu ouvia que de Mežaparks ainda vinham canções. Ele pensou que talvez devesse ter ficado mais tempo. Da próxima vez, decidiu, ficaria até de manhã.',
        ending: { tone: 'neutro', title: 'Canções ao longe', message: 'Trabalho bem feito, mas o melhor da festa é a noite inteira de canto. Fica para a próxima.' },
      },
    },
  },
  {
    id: 'lv-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Klēts, pirts un vējdzirnavas',
    emoji: '🏚️',
    summary: 'No Museu Etnográfico ao Ar Livre, à beira do lago Jugla, o Linu faz perguntas formais a uma guia e escreve um pedido oficial para fotografar um moinho por dentro.',
    cultural_context:
      'O Museu Etnográfico ao Ar Livre da Letônia, fundado em 1924 às margens do lago Jugla, em Riga, é um dos mais antigos e maiores museus do gênero na Europa. Ali há casas de fazenda, celeiros (klētis), saunas, igrejas de madeira e moinhos de vento trazidos de todas as regiões do país. No começo de junho, o museu recebe uma grande feira de artesanato.',
    start: 'start',
    glossary: [
      ['brīvdabas muzejs', 'museu ao ar livre'],
      ['klēts', 'celeiro (de guardar grãos e roupas)'],
      ['vējdzirnavas', 'moinho de vento'],
      ['gide', 'guia (mulher)'],
      ['atļauja', 'autorização'],
      ['iesniegums', 'requerimento'],
      ['Ar cieņu', 'Atenciosamente'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Brīvdabas muzejā starp priedēm stāvēja vecas koka mājas no visas Latvijas. Pie ieejas Linu sagaidīja gide ar lakatu galvā. “Labdien! Vai Jūs vēlaties ekskursiju latviešu vai angļu valodā?” viņa jautāja.',
        translation: 'No museu ao ar livre, entre pinheiros, havia casas antigas de madeira de toda a Letônia. Na entrada, uma guia de lenço na cabeça recebeu o Linu. “Boa tarde! O senhor deseja a visita em letão ou em inglês?”, perguntou.',
        choices: [
          { text: '“Labdien! Latviešu valodā, lūdzu, bet, ja drīkst, runājiet lēnām.”', translation: '“Boa tarde! Em letão, por favor, mas, se possível, fale devagar.”', next: 'klets' },
          { text: '“Angliski, lūdzu, latviešu valoda man vēl ir par grūtu.”', translation: '“Em inglês, por favor, o letão ainda é difícil demais para mim.”', next: 'angliski' },
        ],
      },
      angliski: {
        emoji: '🙂',
        text: 'Gide pasmaidīja un sāka angliski, bet pēc brīža ievēroja, ka Linu saprot arī latviešu vārdus. “Ja Jūs neiebilstat, es mēģināšu runāt latviski un lēnām”, viņa ierosināja.',
        translation: 'A guia sorriu e começou em inglês, mas logo percebeu que o Linu também entendia as palavras em letão. “Se o senhor não se opuser, vou tentar falar em letão e devagar”, propôs.',
        choices: [{ text: '“Ar lielāko prieku, paldies!”', translation: '“Com o maior prazer, obrigado!”', next: 'klets' }],
      },
      klets: {
        emoji: '🏚️',
        text: 'Viņi apstājās pie klēts ar niedru jumtu. Gide paskaidroja, ka klētī glabāja graudus un pūru, tas ir, meitas drēbes un segas, ko viņa krāja kāzām. “Vai Jums ir jautājumi?” viņa pieklājīgi vaicāja.',
        translation: 'Eles pararam diante de um celeiro de telhado de junco. A guia explicou que no celeiro se guardavam os grãos e o enxoval, isto é, as roupas e cobertas que a moça juntava para o casamento. “O senhor tem perguntas?”, perguntou ela, educada.',
        choices: [
          { text: '“Jā. Vai drīkstu jautāt, cik veca ir šī klēts?”', translation: '“Sim. Posso perguntar quantos anos tem este celeiro?”', next: 'dzirnavas' },
          {
            text: '“Klēts ir vieta, kur cepa maizi, vai ne?”',
            translation: '“O celeiro é o lugar onde se assava o pão, não é?”',
            wrong: 'A guia disse que no celeiro se guardavam os grãos e o enxoval (“glabāja graudus un pūru”). O pão se assava no forno da casa, não na klēts.',
          },
        ],
      },
      dzirnavas: {
        emoji: '🌬️',
        text: '“Tā ir no deviņpadsmitā gadsimta”, atbildēja gide un aizveda Linu līdz vējdzirnavām. Tās bija slēgtas. “Iekšā fotografēt drīkst tikai ar muzeja atļauju”, viņa piebilda. “Ja Jūs vēlaties, varat uzrakstīt iesniegumu administrācijai.”',
        translation: '“É do século XIX”, respondeu a guia, e levou o Linu até o moinho de vento. Estava fechado. “Lá dentro só se pode fotografar com autorização do museu”, acrescentou. “Se o senhor desejar, pode escrever um requerimento à administração.”',
        choices: [
          { text: 'Linu nolēma uzrakstīt oficiālu iesniegumu.', translation: 'O Linu decidiu escrever um requerimento formal.', next: 'iesniegums' },
          { text: 'Linu nofotografēja dzirnavas pa atslēgas caurumu.', translation: 'O Linu fotografou o moinho pelo buraco da fechadura.', next: 'final_neutro' },
        ],
      },
      iesniegums: {
        emoji: '📝',
        text: 'Muzeja birojā Linu uzrakstīja: “Cienījamā administrācija! Lūdzu atļauju fotografēt vējdzirnavu iekštelpas izglītības nolūkā. Ar cieņu, Linu.” Darbiniece izlasīja un pamāja: “Iesniegums ir pareizi noformēts. Atbildi saņemsiet šodien.”',
        translation: 'No escritório do museu, o Linu escreveu: “Prezada administração, solicito autorização para fotografar o interior do moinho de vento, para fins educativos. Atenciosamente, Linu.” A funcionária leu e fez que sim: “O requerimento está redigido corretamente. O senhor receberá a resposta hoje.”',
        choices: [{ text: 'Linu pateicās un gaidīja.', translation: 'O Linu agradeceu e esperou.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📸',
        text: 'Pēc stundas gide atnāca ar atslēgu. Dzirnavās smaržoja pēc veca koka un miltiem, un caur spraugām spīdēja saule. “Jūsu iesniegums bija ļoti pieklājīgs”, viņa teica. “Ne visi tūristi tā raksta.”',
        translation: 'Uma hora depois, a guia chegou com a chave. Dentro do moinho cheirava a madeira velha e farinha, e o sol entrava pelas frestas. “O seu requerimento foi muito educado”, disse ela. “Nem todos os turistas escrevem assim.”',
        ending: { tone: 'bom', title: 'Chave do moinho', message: 'Fórmulas formais bem usadas abriram uma porta, literalmente: o Linu fotografou o moinho por dentro.' },
      },
      final_neutro: {
        emoji: '🔒',
        text: 'Bildē bija redzama tikai tumsa un viens koka ritenis. Gide, to redzējusi, pieklājīgi atgādināja, ka nākamreiz labāk būtu palūgt atļauju. Linu atvainojās un devās uz izeju.',
        translation: 'Na foto só se via escuridão e uma roda de madeira. A guia, ao ver aquilo, lembrou educadamente que da próxima vez seria melhor pedir autorização. O Linu pediu desculpas e foi para a saída.',
        ending: { tone: 'neutro', title: 'Foto pelo buraco', message: 'Atalho sem graça: com um requerimento formal, a porta do moinho teria se aberto.' },
      },
    },
  },
  {
    id: 'lv-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Svētceļojums uz Aglonu',
    emoji: '⛪',
    summary: 'Em agosto, o Linu caminha com peregrinos até a basílica de Aglona, na Latgália, e precisa pedir abrigo, informações e desculpas com toda a cortesia.',
    cultural_context:
      'A basílica de Aglona, na Latgália, é o principal santuário católico da Letônia. Todo ano, em 15 de agosto, festa da Assunção, milhares de peregrinos chegam a pé, alguns depois de caminhar vários dias, e a missa ao ar livre reúne gente de todo o país e dos países vizinhos. Dois papas já visitaram o santuário. A Latgália é a região mais católica da Letônia, enquanto no resto do país predominam os luteranos e, em várias cidades, os ortodoxos.',
    start: 'start',
    glossary: [
      ['svētceļnieks', 'peregrino'],
      ['svētceļojums', 'peregrinação'],
      ['bazilika', 'basílica'],
      ['naktsmājas', 'pouso, lugar para dormir'],
      ['Vai Jūs būtu tik laipni…?', 'O senhor teria a gentileza de…?'],
      ['mise', 'missa'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Svētceļnieku grupa jau trešo dienu gāja pa Latgales ceļiem. Vakarā viņi apstājās kādā ciemā, un grupas vadītājs lūdza Linu: “Vai Jūs būtu tik laipns un pajautātu tai saimniecei, vai mēs drīkstētu pārnakšņot viņas šķūnī?”',
        translation: 'O grupo de peregrinos caminhava havia três dias pelas estradas da Latgália. À noite, pararam numa aldeia, e o líder do grupo pediu ao Linu: “O senhor teria a gentileza de perguntar àquela dona da casa se poderíamos pernoitar no celeiro dela?”',
        choices: [
          { text: '“Labvakar! Atvainojiet, vai mēs drīkstētu šonakt pārnakšņot Jūsu šķūnī?”', translation: '“Boa noite! Desculpe, poderíamos pernoitar esta noite no seu celeiro?”', next: 'saimniece' },
          { text: '“Mēs gulēsim tavā šķūnī, labi?”', translation: '“A gente vai dormir no teu celeiro, tá?”', next: 'rupji' },
        ],
      },
      rupji: {
        emoji: '😕',
        text: 'Saimniece sarauca pieri un neko neatbildēja. Grupas vadītājs ātri pienāca klāt, atvainojās un atkārtoja lūgumu pieklājīgi. Tikai tad saimniece pasmaidīja un atvēra šķūņa durvis.',
        translation: 'A dona da casa franziu a testa e não respondeu nada. O líder do grupo se aproximou depressa, pediu desculpas e repetiu o pedido com educação. Só então a senhora sorriu e abriu a porta do celeiro.',
        choices: [{ text: 'Linu arī atvainojās saimniecei.', translation: 'O Linu também pediu desculpas à senhora.', next: 'saimniece' }],
      },
      saimniece: {
        emoji: '🏡',
        text: '“Protams, nāciet iekšā”, teica saimniece. “Katru gadu šeit pārnakšņo svētceļnieki.” Viņa atnesa pienu un maizi un pastāstīja, ka viņas vecāmāte uz Aglonu gājusi kājām katru augustu, pat padomju laikā, kad tas nebija vēlams.',
        translation: '“Claro, entrem”, disse a senhora. “Todo ano pernoitam peregrinos aqui.” Ela trouxe leite e pão e contou que a avó dela ia a pé para Aglona todo mês de agosto, mesmo na época soviética, quando isso não era bem-visto.',
        choices: [
          { text: '“Sirsnīgs paldies par Jūsu viesmīlību!”', translation: '“Muito obrigado pela sua hospitalidade!”', next: 'rits' },
          {
            text: '“Kāpēc padomju laikā visi brauca uz Aglonu ar autobusiem?”',
            translation: '“Por que na época soviética todo mundo ia de ônibus para Aglona?”',
            wrong: 'A senhora não falou de ônibus: disse que a avó ia a pé (“gājusi kājām”) todo agosto, mesmo quando a peregrinação “nebija vēlama”, não era bem-vista pelas autoridades.',
          },
        ],
      },
      rits: {
        emoji: '🌄',
        text: 'Nākamajā rītā grupa sasniedza Aglonu. Ap baziliku jau stāvēja tūkstošiem cilvēku. Kāda sieviete ar ratiņkrēslu nevarēja tikt cauri pūlim un lūdzoši paskatījās uz Linu.',
        translation: 'Na manhã seguinte, o grupo chegou a Aglona. Em volta da basílica já havia milhares de pessoas. Uma senhora de cadeira de rodas não conseguia passar pela multidão e olhou para o Linu como quem pede ajuda.',
        choices: [
          { text: '“Vai drīkstu Jums palīdzēt? Es palūgšu cilvēkus palaist mūs garām.”', translation: '“Posso ajudar a senhora? Vou pedir às pessoas que nos deixem passar.”', next: 'palidz' },
          { text: 'Linu steidzās uz priekšu, lai dabūtu labāku vietu.', translation: 'O Linu correu para a frente para conseguir um lugar melhor.', next: 'final_neutro' },
        ],
      },
      palidz: {
        emoji: '♿',
        text: '“Atvainojiet, lūdzu, vai Jūs varētu mazliet pavirzīties?” Linu atkārtoja atkal un atkal, un cilvēki laipni pakāpās malā. Sieviete pateicās un pastāstīja, ka atbraukusi no Lietuvas, jo arī viņas ģimene katru gadu brauc uz Aglonu.',
        translation: '“Com licença, por favor, os senhores poderiam chegar um pouco para o lado?”, repetia o Linu, e as pessoas se afastavam com gentileza. A senhora agradeceu e contou que tinha vindo da Lituânia, porque a família dela também vai a Aglona todo ano.',
        choices: [{ text: 'Linu palika viņai blakus visas mises laikā.', translation: 'O Linu ficou ao lado dela durante toda a missa.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🕯️',
        text: 'Pēc mises sieviete iedeva Linu mazu svētbildīti un teica: “Jūs esat ļoti pieklājīgs jauns pingvīns.” Linu atgriezās pie grupas ar siltu sajūtu sirdī, kaut arī visu misi bija stāvējis pašā malā.',
        translation: 'Depois da missa, a senhora deu ao Linu um santinho e disse: “O senhor é um jovem pinguim muito educado.” O Linu voltou para o grupo com o coração aquecido, embora tivesse passado a missa inteira bem na beirada.',
        ending: { tone: 'bom', title: 'Com licença, por favor', message: 'Cortesia e ajuda andaram juntas: o “Jūs” e o “atvainojiet” abriram caminho na multidão.' },
      },
      final_neutro: {
        emoji: '🙁',
        text: 'Linu atrada vietu tuvu altārim, bet visu laiku domāja par sievieti ratiņkrēslā. Pēc mises viņš to meklēja, taču pūlī vairs neatrada.',
        translation: 'O Linu achou um lugar perto do altar, mas o tempo todo pensou na senhora da cadeira de rodas. Depois da missa, procurou por ela, mas não a encontrou mais na multidão.',
        ending: { tone: 'neutro', title: 'Lugar na frente', message: 'Um bom lugar, mas uma chance perdida de gentileza — e de praticar as fórmulas de cortesia.' },
      },
    },
  },
];
