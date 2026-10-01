import type { StorySeed } from '../types';

/** Histórias interativas em letão (lv-h31 … lv-h45): 3 por subnível, do B2.3 ao C2, cada uma num lugar diferente. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'lv-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Gailenītes no tantiņas groziņa',
    emoji: '🍄',
    summary: 'No Mercado Central de Riga, o Linu tenta comprar cantarelos de uma senhorinha que fala tudo no diminutivo — e que jura que o vendedor ao lado “sopra patinhos”.',
    cultural_context:
      'O Mercado Central de Riga funciona desde 1930 em pavilhões montados com as estruturas de antigos hangares militares alemães de zepelins, e faz parte do centro histórico de Riga, Patrimônio Mundial da UNESCO. Os diminutivos (-iņš, -īte, -iņa) são tão comuns em letão que aparecem em toda parte, das canções populares (saulīte, “solzinho”) à fala de todo dia (māmiņa, “mãezinha”).',
    start: 'start',
    glossary: [
      ['gailene', 'cantarelo (cogumelo)'],
      ['tantiņa', 'senhorinha, tiazinha (diminutivo carinhoso de tante)'],
      ['-iņš, -īte, -iņa', 'sufixos de diminutivo'],
      ['pūst pīlītes', 'contar lorota (lit.: soprar patinhos)'],
      ['augt kā sēnes pēc lietus', 'brotar como cogumelo depois da chuva'],
      ['iet kā pa sviestu', 'correr às mil maravilhas (lit.: ir como sobre manteiga)'],
      ['zelta puisis', 'rapaz de ouro, querido'],
      ['gara mēle', 'língua comprida (de quem fala demais)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Sestdienas rītā Linu devās uz Rīgas Centrāltirgu, kura milzīgie paviljoni savulaik bija cepelīnu angāri. Starp sēņu un ogu galdiem viņu uzrunāja maza, apaļa sieviņa lakatiņā: “Nāc šurp, puisīt, man ir vislabākās gailenītes visā tirgū!” Viņas galds bija pilns ar groziņiem, burciņām un saišķīšiem, un katrs vārds, ko viņa teica, šķita mazliet samīļots. Linu pamanīja, ka šī tantiņa gandrīz visus vārdus saka pamazināmajā formā.',
        translation:
          'Num sábado de manhã, o Linu foi ao Mercado Central de Riga, cujos pavilhões enormes já foram hangares de zepelins. Entre as bancas de cogumelos e frutas silvestres, uma senhora pequena e rechonchuda de lenço na cabeça o chamou: “Vem cá, mocinho, tenho os melhores cantarelozinhos de todo o mercado!” A mesa dela estava cheia de cestinhos, potinhos e maçinhos, e cada palavra que ela dizia soava um pouco acarinhada. O Linu percebeu que aquela tiazinha dizia quase todas as palavras no diminutivo.',
        choices: [
          { text: 'Paprasīt, cik maksā gailenītes.', translation: 'Perguntar quanto custam os cantarelos.', next: 'gailenes' },
          { text: 'Paprasīt, kas ir tajās burciņās.', translation: 'Perguntar o que há naqueles potinhos.', next: 'burcinas' },
        ],
      },
      burcinas: {
        emoji: '🥒',
        text: '“Tās ir mana medutiņa burciņas”, sieviņa lepni sacīja, “un tur, blakus, ir skābi gurķīši pēc manas vecmāmiņas receptes.” Linu paskatījās uz gurķiem un izbrīnījās, jo tie nemaz nebija mazi, drīzāk gan lieli un resni. Tantiņa iesmējās un paskaidroja, ka latviešu valodā piedēklis -iņš vai -īte ne vienmēr nozīmē, ka lieta ir maza. “Tas ir tāpat kā samīļot vārdu: kad es saku ‘gurķītis’, es saku, ka man tas gurķis patīk”, viņa teica.',
        translation:
          '“São os potinhos do meu melzinho”, disse a senhora, orgulhosa, “e ali do lado tem pepininhos em conserva da receita da minha avó.” O Linu olhou para os pepinos e se espantou, porque não eram nada pequenos — eram, na verdade, grandes e grossos. A tiazinha riu e explicou que, em letão, o sufixo -iņš ou -īte nem sempre quer dizer que a coisa é pequena. “É como fazer carinho na palavra: quando eu digo ‘pepininho’, estou dizendo que gosto desse pepino”, disse ela.',
        choices: [
          {
            text: 'Palūgt lielākus gurķus, jo šie esot tikai gurķīši.',
            translation: 'Pedir pepinos maiores, porque estes seriam só pepininhos.',
            wrong: 'A tantiņa acabou de explicar que o diminutivo em letão muitas vezes não indica tamanho, e sim carinho: “gurķītis” é um pepino de que ela gosta — e os pepinos eram grandes e grossos.',
          },
          { text: 'Nopirkt burciņu gurķīšu un paprasīt par gailenēm.', translation: 'Comprar um potinho de pepinos e perguntar pelos cantarelos.', next: 'gailenes' },
        ],
      },
      gailenes: {
        emoji: '🧺',
        text: '“Gailenītes šodien maksā septiņus eiro par kilogramu, bet tev, zelta puisīt, atdošu lētāk”, tantiņa teica un piemiedza ar aci. Viņa stāstīja, ka sēnes lasījusi pati, agri no rīta mežā pie Siguldas, kur viņai ir sava slepena vietiņa. “Tur gailenes aug kā sēnes pēc lietus — nu jā, tās jau arī ir sēnes!” viņa smējās pati par savu joku. Tad viņa pieliecās tuvāk un pačukstēja: “Bet tas vīrs pie blakus galda gan pūš pīlītes: saka, ka pats lasījis, bet es zinu labāk.”',
        translation:
          '“Os cantarelozinhos hoje estão a sete euros o quilo, mas para você, rapaz de ouro, faço mais barato”, disse a tiazinha, piscando o olho. Contou que ela mesma tinha colhido os cogumelos, de madrugada, num bosque perto de Sigulda, onde tem o seu cantinho secreto. “Lá os cantarelos brotam como cogumelo depois da chuva — bom, eles já são cogumelos mesmo!”, riu ela da própria piada. Então se inclinou e cochichou: “Mas aquele homem da banca ao lado, esse sopra patinhos: diz que colheu ele mesmo, mas eu sei muito bem.”',
        choices: [
          { text: '“Tātad kaimiņš stāsta nepatiesību?”', translation: '“Então o vizinho está contando mentira?”', next: 'kaimins' },
          {
            text: '“Kaimiņam mājās ir pīles?”',
            translation: '“O vizinho tem patos em casa?”',
            wrong: '“Pūst pīlītes” (lit.: soprar patinhos) é uma expressão idiomática: contar lorota, inventar histórias. A tantiņa quis dizer que o vizinho mente sobre de onde vêm os cogumelos — não que ele cria patos.',
          },
        ],
      },
      kaimins: {
        emoji: '🍵',
        text: '“Nu, tā jau es neteicu”, tantiņa ātri atkāpās, “es tikai saku, ka viņam ir gara mēle.” Tieši tajā brīdī pie galda pienāca pats kaimiņš — garš, sirms vīrs ar platu smaidu — un pasniedza viņai krūzīti karstas tējiņas. “Velta atkal stāsta, ka es melojot?” viņš jautāja, un abi sāka skaļi smieties. Izrādījās, ka viņi ir brālis un māsa, jau trīsdesmit gadus tirgojas blakus un strīdas tikai pa jokam.',
        translation:
          '“Bom, eu não disse bem isso”, recuou depressa a tiazinha, “só digo que ele tem a língua comprida.” Bem nessa hora chegou à banca o próprio vizinho — um homem alto, grisalho, de sorriso largo — e entregou a ela uma canequinha de chazinho quente. “A Velta está de novo dizendo que eu minto?”, perguntou ele, e os dois caíram na gargalhada. Descobriu-se que eram irmão e irmã, vendiam lado a lado havia trinta anos e só brigavam de brincadeira.',
        choices: [
          { text: 'Nopirkt gailenes no abiem — pusi no Veltas, pusi no brāļa.', translation: 'Comprar cantarelos dos dois — metade da Velta, metade do irmão.', next: 'final_bom' },
          { text: 'Aiziet prom bez sēnēm, jo vairs nezina, kam ticēt.', translation: 'Ir embora sem cogumelos, porque já não sabe em quem acreditar.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍳',
        text: 'Velta nosvēra pusi kilograma, brālis — otru pusi, un Linu aizgāja ar pilnu groziņu un vēl ar burciņu medutiņa dāvanā. “Nāc atkal, zelta puisīt!” abi sauca viņam pakaļ vienā balsī. Mājās Linu cepa gailenes ar sīpoliem un krējumu, un viss gāja kā pa sviestu — pat burtiski. Tagad viņš zināja, ka Centrāltirgū neviens nav “tikai” pārdevējs: katram ir savs stāsts un savi mīļie vārdiņi.',
        translation:
          'A Velta pesou meio quilo, o irmão a outra metade, e o Linu foi embora com o cestinho cheio e ainda um potinho de melzinho de presente. “Volte sempre, rapaz de ouro!”, gritaram os dois atrás dele, numa só voz. Em casa, o Linu fritou os cantarelos com cebola e creme de leite azedo, e tudo correu como sobre manteiga — até ao pé da letra. Agora ele sabia que, no Mercado Central, ninguém é “só” vendedor: cada um tem a sua história e as suas palavrinhas queridas.',
        ending: { tone: 'bom', title: 'Cestinho cheio', message: 'Você entendeu que os diminutivos da tantiņa eram carinho, não tamanho, sacou o “pūst pīlītes” e caiu na brincadeira dos irmãos — e levou cantarelos dos dois.' },
      },
      final_neutro: {
        emoji: '🍞',
        text: 'Linu nolēma, ka pēc visām šīm pīlītēm vairs nezina, kam ticēt, un aizgāja no tirgus ar tukšām rokām. Velta un viņas brālis tikai paraustīja plecus un turpināja savu jautro strīdiņu. Vakarā Linu ēda sausu maizi un domāja par gailenēm, kas palika tantiņas groziņā. Viņš sev apsolīja, ka nākamreiz neņems katru joku tik nopietni.',
        translation:
          'O Linu concluiu que, depois de tantos patinhos, já não sabia em quem acreditar, e saiu do mercado de mãos vazias. A Velta e o irmão só deram de ombros e continuaram a sua briguinha alegre. À noite, o Linu comeu pão seco pensando nos cantarelos que ficaram no cestinho da tiazinha. Prometeu a si mesmo que, da próxima vez, não levaria toda piada tão a sério.',
        ending: { tone: 'neutro', title: 'Mãos vazias', message: 'Os irmãos só brincavam: no Mercado Central, “soprar patinhos” às vezes é só implicância carinhosa.' },
      },
    },
  },
  {
    id: 'lv-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Smilšu Milda un karstā ūdenī vārītā Līga',
    emoji: '🏖️',
    summary: 'Num concurso de esculturas de areia na praia de Jūrmala, o Linu e a impaciente Līga constroem um Monumento da Liberdade — até que chove “como de balde”, vindo “do ar azul”.',
    cultural_context:
      'Jūrmala, cidade balneária no golfo de Riga, tem cerca de 33 km de praia e é famosa pelas casas de veraneio de madeira dos séculos XIX e XX; a Jomas iela, em Majori, é a sua rua de pedestres. O Monumento da Liberdade, em Riga, foi inaugurado em 1935, e a figura feminina que ergue três estrelas no alto é chamada carinhosamente de “Milda”.',
    start: 'start',
    glossary: [
      ['karstā ūdenī vārīts', 'esquentado, impaciente (lit.: cozido em água quente)'],
      ['ne zivs, ne gaļa', 'nem uma coisa nem outra (lit.: nem peixe, nem carne)'],
      ['no zila gaisa', 'do nada, de repente (lit.: do ar azul)'],
      ['līt kā no spaiņa', 'chover canivete (lit.: como de um balde)'],
      ['sēdēt kā uz adatām', 'estar com o coração na mão (lit.: sentado como sobre agulhas)'],
      ['zelta rokas', 'mãos de fada, habilidade manual (lit.: mãos de ouro)'],
      ['turēt īkšķus', 'torcer, cruzar os dedos (lit.: segurar os polegares)'],
      ['lāpstiņa', 'pazinha'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Kādā jūlija svētdienā Linu un viņa draudzene Līga ieradās Jūrmalas pludmalē Majoros, kur notika smilšu skulptūru konkurss. Līga jau no paša rīta bija karstā ūdenī vārīta: viņa skrēja no vienas vietas uz otru, gribēja visu uzreiz un nevarēja nostāvēt uz vietas. “Mums jāuzceļ vislielākā pils visā pludmalē, un tūlīt!” viņa sauca, vēl pirms bija izlasījusi noteikumus. Linu pa to laiku mierīgi lasīja lapiņu, kurā bija rakstīts, ka darbi jāpabeidz līdz pulksten trijiem.',
        translation:
          'Num domingo de julho, o Linu e a amiga Līga chegaram à praia de Jūrmala, em Majori, onde havia um concurso de esculturas de areia. Desde cedo a Līga estava “cozida em água quente”: corria de um lado para o outro, queria tudo ao mesmo tempo e não conseguia ficar parada. “Temos de construir o maior castelo da praia inteira, e já!”, gritava ela, antes mesmo de ler o regulamento. Enquanto isso, o Linu lia com calma o folhetinho, onde estava escrito que os trabalhos tinham de ficar prontos até as três horas.',
        choices: [
          {
            text: 'Uztraukties, vai Līga nav apdedzinājusies ar karstu ūdeni.',
            translation: 'Ficar preocupado se a Līga não se queimou com água quente.',
            wrong: 'Ninguém se queimou: “karstā ūdenī vārīts” (lit.: cozido em água quente) é expressão idiomática para pessoa esquentada, impaciente. Por isso a Līga corria de um lado para o outro e queria tudo na hora.',
          },
          { text: 'Nomierināt Līgu un izstāstīt noteikumus.', translation: 'Acalmar a Līga e contar o regulamento.', next: 'noteikumi' },
          { text: 'Uzreiz sākt rakt, lai Līga būtu priecīga.', translation: 'Começar a cavar na hora, para a Līga ficar contente.', next: 'rakt' },
        ],
      },
      noteikumi: {
        emoji: '📋',
        text: 'Linu paskaidroja, ka laika ir pietiekami un ka žūrija vērtēs ne tikai lielumu, bet arī ideju. Līga dziļi ievilka elpu un atzina, ka viņas plāns bija ne zivs, ne gaļa — kaut kas starp pili un jūras briesmoni. Viņi vienojās, ka būvēs Brīvības pieminekli, jo to pazīst katrs latvietis. Izrādījās, ka Līgai ir zelta rokas: viņa veidoja smiltis tik smalki, ka garāmgājēji apstājās paskatīties.',
        translation:
          'O Linu explicou que havia tempo de sobra e que o júri avaliaria não só o tamanho, mas também a ideia. A Līga respirou fundo e admitiu que o plano dela era nem peixe, nem carne — uma coisa entre castelo e monstro marinho. Combinaram construir o Monumento da Liberdade, porque todo letão o conhece. E descobriu-se que a Līga tinha mãos de ouro: modelava a areia com tanta delicadeza que quem passava parava para olhar.',
        choices: [{ text: 'Palīdzēt veidot Mildu pieminekļa galotnē.', translation: 'Ajudar a modelar a Milda no alto do monumento.', next: 'lietus' }],
      },
      rakt: {
        emoji: '⛏️',
        text: 'Linu bez vārda paķēra lāpstiņu un sāka rakt, un Līga metās viņam palīgā. Pēc pusstundas viņiem bija liela, bet diezgan bezveidīga kaudze, kas nebija ne zivs, ne gaļa — ne pils, ne kalns. Līga to aplūkoja un nopūtās: “Laikam mēs sākām no nepareizā gala.” Tad viņa pasmaidīja un parādīja, ka viņai ir zelta rokas: dažās minūtēs kaudze sāka izskatīties pēc Brīvības pieminekļa.',
        translation:
          'O Linu pegou a pazinha sem dizer nada e começou a cavar, e a Līga correu para ajudar. Meia hora depois, tinham um monte grande, mas bem disforme, que não era nem peixe, nem carne — nem castelo, nem morro. A Līga olhou para aquilo e suspirou: “Acho que começamos pela ponta errada.” Então sorriu e mostrou que tinha mãos de ouro: em poucos minutos, o monte começou a parecer o Monumento da Liberdade.',
        choices: [{ text: 'Palīdzēt veidot Mildu pieminekļa galotnē.', translation: 'Ajudar a modelar a Milda no alto do monumento.', next: 'lietus' }],
      },
      lietus: {
        emoji: '🌧️',
        text: 'Pusdienlaikā debesis vēl bija gluži zilas, bet tad no zila gaisa sacēlās vējš un sāka līt kā no spaiņa. Visi dalībnieki metās slēpties zem lielas nojumes, un Līga sēdēja kā uz adatām, skatīdamās, kā ūdens tek pār viņu Mildu. Linu pamanīja, ka daži citi dalībnieki savus darbus jau bija apsedzuši ar plēvi. “Mums arī vajadzēja tā darīt”, viņš klusi teica, “bet varbūt vēl nav par vēlu.”',
        translation:
          'Na hora do almoço o céu ainda estava todo azul, mas então, do nada, levantou-se um vento e começou a chover canivete. Todos os participantes correram para se abrigar debaixo de uma grande cobertura, e a Līga estava sentada como sobre agulhas, olhando a água escorrer pela Milda deles. O Linu reparou que alguns outros participantes já tinham coberto seus trabalhos com lona plástica. “A gente também devia ter feito isso”, disse ele baixinho, “mas talvez ainda não seja tarde.”',
        choices: [
          { text: 'Skriet lietū un apsegt pieminekli ar dvieļiem.', translation: 'Correr na chuva e cobrir o monumento com as toalhas.', next: 'glabt' },
          { text: 'Palikt zem nojumes un gaidīt, kamēr lietus beigsies.', translation: 'Ficar debaixo da cobertura e esperar a chuva passar.', next: 'gaidit' },
        ],
      },
      glabt: {
        emoji: '🧣',
        text: 'Linu un Līga izskrēja lietū un uzmeta piemineklim virsū abus savus pludmales dvieļus. Kad pēc desmit minūtēm lietus tikpat pēkšņi beidzās, izrādījās, ka Milda palikusi gandrīz vesela, tikai nedaudz noslīdējusi uz vienu pusi. Līga to ātri salaboja ar savām zelta rokām, un pulksten trijos viņi bija gatavi. “Tagad tikai jātur īkšķi”, viņa teica, kad pie viņiem pienāca žūrija.',
        translation:
          'O Linu e a Līga saíram correndo na chuva e jogaram as duas toalhas de praia por cima do monumento. Quando, dez minutos depois, a chuva parou tão de repente quanto tinha começado, viram que a Milda estava quase inteira, só um pouco escorregada para um lado. A Līga consertou tudo rapidinho com suas mãos de ouro, e às três horas estavam prontos. “Agora é só segurar os polegares”, disse ela quando o júri se aproximou.',
        choices: [
          { text: 'Sažņaugt dūres ar īkšķiem iekšā un klusi gaidīt.', translation: 'Fechar as mãos com os polegares dentro e esperar em silêncio.', next: 'final_bom' },
          {
            text: 'Rādīt žūrijai īkšķi uz augšu, lai tā dotu vairāk punktu.',
            translation: 'Fazer joinha para o júri, para ele dar mais pontos.',
            wrong: '“Turēt īkšķus” (lit.: segurar os polegares) é o nosso “torcer”, “cruzar os dedos”: a Līga quis dizer que só restava torcer pelo resultado — os letões, aliás, fazem isso escondendo o polegar dentro da mão fechada. Não era para fazer joinha para o júri.',
          },
        ],
      },
      gaidit: {
        emoji: '🫠',
        text: 'Viņi palika sausi zem nojumes, bet, kad lietus beidzās, no Mildas bija palikusi tikai mīksta smilšu kaudzīte. Līga sākumā bija gatava raudāt, bet tad sasita plaukstas: “Nu, tad celsim no jauna, un ātri!” Šoreiz viņas karstais raksturs bija tieši tas, kas vajadzīgs. Pulksten trijos viņu Milda bija mazāka un mazliet šķība, bet tomēr stāvēja.',
        translation:
          'Ficaram secos debaixo da cobertura, mas, quando a chuva parou, da Milda só restava um montinho mole de areia. No começo a Līga estava a ponto de chorar, mas depois bateu palmas: “Então vamos construir de novo, e rápido!” Dessa vez, o gênio esquentado dela era exatamente o que precisavam. Às três horas, a Milda deles estava menor e um pouco torta, mas de pé.',
        choices: [{ text: 'Gaidīt žūrijas lēmumu.', translation: 'Esperar a decisão do júri.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Žūrija ilgi staigāja ap viņu darbu, un Linu un Līga sēdēja kā uz adatām. Beigās viņiem piešķīra otro vietu un balvu — divas biļetes uz koncertu Dzintaru koncertzālē. “Redzi, turēt īkšķus palīdz!” Līga smējās. Vakarā viņi gāja pa Jomas ielu ar saldējumu rokās, un Līgai pirmo reizi visā dienā nekur nebija jāsteidzas.',
        translation:
          'O júri deu muitas voltas em torno do trabalho deles, e o Linu e a Līga estavam como sobre agulhas. No fim, ganharam o segundo lugar e um prêmio — dois ingressos para um concerto na sala de concertos de Dzintari. “Viu? Segurar os polegares funciona!”, riu a Līga. À noite, passearam pela Jomas iela de sorvete na mão, e pela primeira vez no dia a Līga não tinha pressa de chegar a lugar nenhum.',
        ending: { tone: 'bom', title: 'Milda de areia', message: 'Você decifrou o “cozido em água quente”, o “ar azul”, a chuva “de balde” e os polegares — e salvou a Milda a tempo.' },
      },
      final_neutro: {
        emoji: '🐉',
        text: 'Žūrija pagāja garām viņu mazajai Mildai, laipni pasmaidīja un devās tālāk. Uzvarēja kāda ģimene, kas bija uzbūvējusi milzīgu smilšu pūķi un to laikus apsegusi ar plēvi. Līga paraustīja plecus un teica, ka nākamgad viņi būs gudrāki. “Un es būšu mazāk karstā ūdenī vārīta”, viņa piebilda, bet pat pati tam neticēja.',
        translation:
          'O júri passou pela pequena Milda deles, sorriu com simpatia e seguiu adiante. Venceu uma família que tinha construído um enorme dragão de areia e o cobrira com lona a tempo. A Līga deu de ombros e disse que no ano seguinte seriam mais espertos. “E eu vou ser menos cozida em água quente”, acrescentou — mas nem ela acreditou.',
        ending: { tone: 'neutro', title: 'Lição da chuva', message: 'A Milda ficou de pé, mas a chuva “do ar azul” ensinou: na praia de Jūrmala, lona vale mais que pressa.' },
      },
    },
  },
  {
    id: 'lv-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Baigi forša diena Vidzemes Šveicē',
    emoji: '🚡',
    summary: 'O Linu acompanha uma turma de adolescentes de Riga numa excursão a Sigulda e precisa decifrar a gíria deles — do “kruti” ao “baigi” — entre o bondinho sobre o Gauja e a lenda da Rosa de Turaida.',
    cultural_context:
      'Sigulda, no vale do rio Gauja, é chamada de “Suíça de Vidzeme” por seus penhascos de arenito e florestas; um bondinho aéreo atravessa o vale até Krimulda, e o castelo de Turaida, de tijolos vermelhos, domina a paisagem. Segundo a lenda, a jovem Maija, a “Rosa de Turaida”, preferiu morrer a perder a honra, e seu túmulo fica sob uma velha tília perto do castelo; a gíria dos jovens de Riga mistura palavras vindas do russo (davai, kruti) e do inglês (čilot).',
    start: 'start',
    glossary: [
      ['kruti, forši', 'legal, massa (gíria)'],
      ['baigi', 'muito, demais (gíria; em letão padrão, baigs = sinistro)'],
      ['čalis, džeks', 'cara, rapaz (gíria)'],
      ['vecīt!', 'mano!, velho! (lit.: velhinho, vocativo)'],
      ['davai', 'bora, vamos lá (do russo)'],
      ['čilot', 'relaxar, “chilar” (do inglês)'],
      ['gaisa trošu vagoniņš', 'bondinho aéreo'],
      ['senleja', 'vale antigo de rio'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu brīvprātīgi pieteicās pavadīt Rīgas skolēnu klasi ekskursijā uz Siguldu, ko mēdz dēvēt par Vidzemes Šveici. Jau autobusā divi pusaudži, Kristaps un Madara, sāka runāt tā, ka Linu saprata tikai pusi. “Čau, vecīt! Tu esi tas pingvīns? Kruti!” Kristaps iesaucās, un Madara piebilda: “Davai, sēdies pie mums, būs forši.”',
        translation:
          'O Linu se ofereceu como voluntário para acompanhar uma turma de alunos de Riga numa excursão a Sigulda, que costumam chamar de Suíça de Vidzeme. Já no ônibus, dois adolescentes, o Kristaps e a Madara, começaram a falar de um jeito que o Linu só entendia a metade. “E aí, mano! Você é o tal pinguim? Massa!”, exclamou o Kristaps, e a Madara completou: “Bora, senta com a gente, vai ser legal.”',
        choices: [
          { text: 'Apsēsties pie viņiem un paprasīt, ko nozīmē “kruti”.', translation: 'Sentar com eles e perguntar o que quer dizer “kruti”.', next: 'vardnica' },
          { text: 'Apsēsties priekšā pie skolotājas.', translation: 'Sentar na frente, com a professora.', next: 'skolotaja' },
        ],
      },
      vardnica: {
        emoji: '📓',
        text: 'Kristaps smējās un paskaidroja, ka “kruti” un “forši” nozīmē “lieliski”, bet “čalis” vai “džeks” ir vienkārši puisis. “Daudzi vārdi mums ir no krievu valodas, piemēram, ‘davai’ — nu, aiziet, sākam”, Madara piebilda, “bet daži no angļu, kā ‘čilot’ — atpūsties.” Linu visu rūpīgi pierakstīja savā kladē. Pusaudži bija ļoti apmierināti, ka beidzot var kaut ko iemācīt pieaugušajam.',
        translation:
          'O Kristaps riu e explicou que “kruti” e “forši” querem dizer “ótimo”, e que “čalis” ou “džeks” é simplesmente um rapaz. “Muitas palavras a gente tem do russo, tipo ‘davai’ — bora, vamos começar”, completou a Madara, “mas algumas vêm do inglês, como ‘čilot’ — relaxar.” O Linu anotou tudo com cuidado no caderno. Os adolescentes ficaram muito satisfeitos de, enfim, poder ensinar alguma coisa a um adulto.',
        choices: [{ text: 'Izkāpt Siguldā kopā ar klasi.', translation: 'Descer em Sigulda com a turma.', next: 'gaisa' }],
      },
      skolotaja: {
        emoji: '👩‍🏫',
        text: 'Skolotāja, mierīga sieviete vārdā Inese, pasmaidīja: “Neuztraucies, viņi runā parastu Rīgas jauniešu valodu.” Viņa paskaidroja, ka tajā ir daudz vārdu no krievu un angļu valodas un ka stundās viņa cenšas, lai skolēni zinātu arī, kā to pašu pateikt literārajā valodā. “Bet ekskursijā lai runā, kā grib — galvenais, lai runā latviski”, viņa piebilda. Linu nolēma, ka iemācīsies abas valodas — gan skolas, gan autobusa.',
        translation:
          'A professora, uma mulher tranquila chamada Inese, sorriu: “Não se preocupe, eles falam a linguagem normal dos jovens de Riga.” Explicou que nela há muitas palavras do russo e do inglês e que, nas aulas, ela se esforça para que os alunos saibam também dizer a mesma coisa na língua padrão. “Mas na excursão, que falem como quiserem — o principal é que falem letão”, acrescentou. O Linu decidiu que ia aprender as duas línguas — a da escola e a do ônibus.',
        choices: [{ text: 'Izkāpt Siguldā kopā ar klasi.', translation: 'Descer em Sigulda com a turma.', next: 'gaisa' }],
      },
      gaisa: {
        emoji: '🍂',
        text: 'Siguldā visa klase devās uz gaisa trošu vagoniņu, kas pārved pāri Gaujas senlejai uz Krimuldu. Vagoniņš lēnām slīdēja virs rudenīgi krāsainajiem kokiem, un Madara, piespiedusi degunu pie loga, klusi teica: “Tas ir baigi skaisti.” Kristaps piekrita: “Jā, baigais skats, vecīt.” Pat skolotāja Inese, kas šeit bija braukusi jau desmit reizes, uz brīdi apklusa.',
        translation:
          'Em Sigulda, a turma toda foi para o bondinho aéreo que atravessa o vale do Gauja até Krimulda. A cabine deslizava devagar sobre as árvores coloridas de outono, e a Madara, com o nariz colado na janela, disse baixinho: “Isso é lindo demais.” O Kristaps concordou: “É, vista irada, mano.” Até a professora Inese, que já tinha andado ali umas dez vezes, ficou calada por um instante.',
        choices: [
          { text: '“Jā, tiešām ļoti skaisti!”', translation: '“É, lindo mesmo!”', next: 'turaida' },
          {
            text: 'Pajautāt Madarai, kāpēc viņai ir bail no skata.',
            translation: 'Perguntar à Madara por que ela tem medo da vista.',
            wrong: '“Baigi” vem de “baigs” (sinistro, assustador), mas na gíria virou só um intensificador: “baigi skaisti” é “lindo demais”, e “baigais skats” é “vista irada”. A Madara estava encantada, com o nariz colado na janela — e não com medo.',
          },
        ],
      },
      turaida: {
        emoji: '🌹',
        text: 'Otrā krastā viņi uzkāpa līdz Turaidas pilij, kuras sarkanie ķieģeļu torņi pacēlās virs meža. Gids izstāstīja leģendu par Turaidas Rozi — jaunu meiteni vārdā Maija, kura drīzāk izvēlējās mirt nekā zaudēt godu, un parādīja viņas kapu zem vecas liepas. Kristaps, kurš visu dienu bija jokojis, pēkšņi kļuva nopietns. “Nu, tas nav nekāds prikols”, viņš nomurmināja, “tas ir baigi skumji.”',
        translation:
          'Na outra margem, subiram até o castelo de Turaida, cujas torres de tijolo vermelho se erguiam acima da floresta. O guia contou a lenda da Rosa de Turaida — uma moça chamada Maija, que preferiu morrer a perder a honra — e mostrou o túmulo dela debaixo de uma velha tília. O Kristaps, que tinha passado o dia inteiro fazendo piada, de repente ficou sério. “Pô, isso não tem graça nenhuma”, murmurou, “isso é triste demais.”',
        choices: [
          { text: 'Pajautāt Kristapam, ko viņš domā par leģendu.', translation: 'Perguntar ao Kristaps o que ele acha da lenda.', next: 'saruna' },
          { text: 'Mudināt visus ātri iet uz Gūtmaņa alu.', translation: 'Apressar todo mundo para ir à gruta de Gūtmanis.', next: 'ala' },
        ],
      },
      saruna: {
        emoji: '💬',
        text: 'Kristaps atzina, ka skolā leģendu bija lasījis, bet tā bija šķitusi garlaicīga — tikai vēl viens uzdevums. “Te, pie kapa, tas ir citādi”, viņš teica, “it kā tā meitene būtu bijusi īsta.” Madara pielika roku viņam uz pleca un teica, ka tieši tāpēc ekskursijas ir foršākas par stundām. Linu nodomāja, ka arī nopietnas domas var pateikt slengā un ka tās no tā nekļūst mazāk patiesas.',
        translation:
          'O Kristaps admitiu que tinha lido a lenda na escola, mas que ela tinha parecido chata — só mais uma tarefa. “Aqui, junto do túmulo, é diferente”, disse ele, “como se a moça tivesse existido de verdade.” A Madara pôs a mão no ombro dele e disse que era exatamente por isso que excursão é mais legal que aula. O Linu pensou que pensamentos sérios também podem ser ditos em gíria, e que nem por isso ficam menos verdadeiros.',
        choices: [{ text: 'Braukt atpakaļ uz Rīgu.', translation: 'Voltar para Riga.', next: 'final_bom' }],
      },
      ala: {
        emoji: '🪨',
        text: 'Linu aizveda visus uz Gūtmaņa alu, kuras smilšakmens sienās gadsimtu gaitā cilvēki bija iegrebuši vārdus un gadskaitļus. Kristaps tūlīt gribēja iegrebt arī savu vārdu, bet skolotāja Inese viņu apturēja: tagad tas ir aizliegts. “Nu, garlaicīgi”, Kristaps norūca, un Madara viņam uzsauca: “Davai, nomierinies, vecīt, tā ir vēsture!” Pārējā ceļā viņš runāja maz.',
        translation:
          'O Linu levou todos à gruta de Gūtmanis, em cujas paredes de arenito as pessoas, ao longo dos séculos, gravaram nomes e datas. O Kristaps quis gravar o nome dele também, mas a professora Inese o impediu: hoje isso é proibido. “Ah, que chato”, resmungou o Kristaps, e a Madara gritou para ele: “Bora, se acalma, mano, isso é história!” No resto do passeio, ele falou pouco.',
        choices: [{ text: 'Braukt atpakaļ uz Rīgu.', translation: 'Voltar para Riga.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🤝',
        text: 'Autobusā uz Rīgu Kristaps un Madara mācīja Linu vēl jaunus vārdus, un viņš tos lietoja tik nepareizi, ka visi smējās līdz asarām. Atvadoties Madara viņam pastiepa roku: “Tu esi baigi foršs čalis, Linu.” Kristaps piebilda, ka nākamreiz viņi paši viņam izrādīs Rīgu — “nevis tūristu Rīgu, bet īsto”. Linu brauca mājās ar pilnu kladi un pilnu sirdi.',
        translation:
          'No ônibus de volta a Riga, o Kristaps e a Madara ensinaram ao Linu mais palavras novas, e ele as usava tão errado que todos riram até chorar. Na despedida, a Madara estendeu a mão para ele: “Você é um cara muito massa, Linu.” O Kristaps acrescentou que da próxima vez eles mesmos iam mostrar Riga para ele — “não a Riga dos turistas, e sim a de verdade”. O Linu voltou para casa com o caderno cheio e o coração também.',
        ending: { tone: 'bom', title: 'Gíria e lenda', message: 'Você entendeu que “baigi” é elogio e não medo, e deixou o Kristaps falar sério em gíria — e ganhou dois guias para a Riga de verdade.' },
      },
      final_neutro: {
        emoji: '🎧',
        text: 'Atpakaļceļā nogurušie pusaudži autobusā snauda, un Kristaps visu ceļu klausījās mūziku austiņās. Linu vēl mēģināja ar viņu parunāt slengā, bet saņēma tikai īsu “nu, okei”. Skolotāja Inese mierināja, ka pusaudži ātri apvainojas un vēl ātrāk aizmirst. Linu tomēr nožēloja, ka nebija ļāvis Kristapam izstāstīt, ko viņš domā pie Turaidas Rozes kapa.',
        translation:
          'Na volta, os adolescentes cansados cochilavam no ônibus, e o Kristaps passou a viagem inteira ouvindo música de fone. O Linu ainda tentou puxar conversa em gíria, mas só recebeu um curto “tá, ok”. A professora Inese consolou dizendo que adolescente se ofende rápido e esquece mais rápido ainda. Mesmo assim, o Linu se arrependeu de não ter deixado o Kristaps contar o que pensava junto ao túmulo da Rosa de Turaida.',
        ending: { tone: 'neutro', title: 'Silêncio no ônibus', message: 'A gíria você pegou, mas a pressa cortou o único momento sério do Kristaps.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'lv-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Debates par Karostas sarkanajiem ķieģeļiem',
    emoji: '🎤',
    summary: 'Num clube de debates de uma escola de Liepāja, o Linu prepara um discurso sobre os prédios militares abandonados de Karosta — e aprende que “tomēr”, “turklāt”, “tāpēc” e as vírgulas mudam tudo.',
    cultural_context:
      'Karosta, bairro ao norte de Liepāja, foi construído no fim do século XIX pelo Império Russo como base naval e, no período soviético, era uma cidade militar fechada; hoje atrai visitantes com a Catedral Naval Ortodoxa de São Nicolau, de cúpulas douradas, e a antiga prisão militar. Em letão, a vírgula antes de “ka” (que), “jo” (porque) e “lai” (para que) é obrigatória, porque toda oração subordinada é separada por vírgula.',
    start: 'start',
    glossary: [
      ['tomēr', 'no entanto, contudo'],
      ['turklāt', 'além disso'],
      ['tāpēc', 'por isso, portanto'],
      ['pirmkārt, otrkārt', 'em primeiro lugar, em segundo lugar'],
      ['palīgteikums', 'oração subordinada'],
      ['komats', 'vírgula'],
      ['pieturzīmes', 'sinais de pontuação'],
      ['liecība', 'testemunho, prova'],
    ],
    nodes: {
      start: {
        emoji: '🌬️',
        text: 'Liepājā, pilsētā, kur vējš pūš gandrīz katru dienu, Linu pievienojās kādas vidusskolas debašu klubam. Šonedēļ tēma bija: “Vai Karostas pamestās kara ēkas jānojauc vai jāsaglabā?” Klubu vadīja skolotājs Arnis, kurš mēdza teikt, ka labs arguments ir kā labs tilts: tam vajag stiprus balstus un drošus savienojumus. “Mūsu savienojumi ir vārdi ‘tāpēc’, ‘tomēr’, ‘turklāt’ — un, protams, pieturzīmes”, viņš teica, rakstīdams tos uz tāfeles.',
        translation:
          'Em Liepāja, cidade onde venta quase todo dia, o Linu entrou no clube de debates de uma escola de ensino médio. O tema da semana era: “Os prédios militares abandonados de Karosta devem ser demolidos ou preservados?” Quem dirigia o clube era o professor Arnis, que costumava dizer que um bom argumento é como uma boa ponte: precisa de pilares fortes e junções seguras. “Nossas junções são as palavras ‘por isso’, ‘no entanto’, ‘além disso’ — e, claro, a pontuação”, disse ele, escrevendo-as no quadro.',
        choices: [
          { text: 'Pieteikties aizstāvēt ēku saglabāšanu.', translation: 'Candidatar-se a defender a preservação dos prédios.', next: 'saglabat' },
          { text: 'Pieteikties aizstāvēt ēku nojaukšanu.', translation: 'Candidatar-se a defender a demolição dos prédios.', next: 'nojaukt' },
        ],
      },
      saglabat: {
        emoji: '⛪',
        text: 'Linu kopā ar klusu meiteni vārdā Laura sāka gatavot runu par saglabāšanu. Laura ieteica sākt ar faktiem: Karostu 19. gadsimta beigās uzcēla Krievijas impērija kā kara ostu, un padomju laikā tā bija slēgta militārā pilsēta. “Tāpēc tā ir unikāla”, Laura teica, “turklāt tūristi jau tagad brauc skatīties Jūras katedrāli un veco cietumu.” Linu pierakstīja: “Pirmkārt, vēsture; otrkārt, tūrisms.”',
        translation:
          'O Linu, junto com uma moça calada chamada Laura, começou a preparar o discurso pela preservação. A Laura sugeriu começar pelos fatos: Karosta foi construída no fim do século XIX pelo Império Russo como porto militar, e no período soviético era uma cidade militar fechada. “Por isso ela é única”, disse a Laura, “além disso, os turistas já vêm ver a Catedral Naval e a antiga prisão.” O Linu anotou: “Em primeiro lugar, a história; em segundo, o turismo.”',
        choices: [{ text: 'Doties uz debatēm.', translation: 'Ir para o debate.', next: 'piemers' }],
      },
      nojaukt: {
        emoji: '🏚️',
        text: 'Linu kopā ar enerģisku puisi vārdā Rihards sāka gatavot runu par nojaukšanu. Rihards bija pārliecināts, ka daudzas ēkas ir tik sabrukušas, ka ir bīstamas bērniem, kuri tur spēlējas. “Tāpēc tās jānojauc”, viņš teica, “turklāt to vietā varētu būt parks vai jauni dzīvokļi.” Linu gan mazliet šaubījās, jo Karosta viņam likās ļoti īpaša, taču viņš bija izvēlējies šo pusi un gribēja to aizstāvēt godīgi.',
        translation:
          'O Linu, junto com um rapaz enérgico chamado Rihards, começou a preparar o discurso pela demolição. O Rihards estava convencido de que muitos prédios estavam tão arruinados que eram perigosos para as crianças que brincam lá. “Por isso têm de ser demolidos”, disse ele, “além disso, no lugar deles poderia haver um parque ou apartamentos novos.” O Linu até duvidava um pouco, porque achava Karosta muito especial, mas tinha escolhido esse lado e queria defendê-lo com honestidade.',
        choices: [{ text: 'Doties uz debatēm.', translation: 'Ir para o debate.', next: 'piemers' }],
      },
      piemers: {
        emoji: '📰',
        text: 'Pirms debatēm skolotājs Arnis nolasīja piemēru no kāda vietējā laikraksta: “Daudzas Karostas ēkas ir sabrukušas un bīstamas, tomēr tās ir mūsu vēstures liecība. Protams, visas izglābt nav iespējams. Tāpēc mēs iesakām saglabāt svarīgākās, bet pārējās droši nojaukt.” Tad viņš pagriezās pret Linu un jautāja: “Nu, ko autors īsti domā?”',
        translation:
          'Antes do debate, o professor Arnis leu um exemplo tirado de um jornal local: “Muitos prédios de Karosta estão em ruínas e são perigosos; no entanto, são um testemunho da nossa história. Claro, não é possível salvar todos. Por isso, recomendamos preservar os mais importantes e demolir os demais com segurança.” Então se virou para o Linu e perguntou: “E aí, o que o autor pensa de fato?”',
        choices: [
          { text: '“Autors grib saglabāt svarīgākās ēkas un pārējās nojaukt.”', translation: '“O autor quer preservar os prédios mais importantes e demolir os demais.”', next: 'komati' },
          {
            text: '“Autors grib visas ēkas nojaukt, jo tās ir bīstamas.”',
            translation: '“O autor quer demolir todos os prédios, porque são perigosos.”',
            wrong: 'Repare no “tomēr” (no entanto): os prédios estão em ruínas e são perigosos, NO ENTANTO são testemunho da história — o “tomēr” vira o argumento. Depois, o “tāpēc” (por isso) traz a conclusão: preservar os mais importantes e demolir os demais. Não é demolir tudo.',
          },
        ],
      },
      komati: {
        emoji: '✏️',
        text: 'Arnis pamāja un teica, ka tieši tā strādā savienojumi: “tomēr” pagriež domu, “turklāt” pieliek vēl vienu argumentu, bet “tāpēc” ved pie secinājuma. Tad viņš paņēma Linu runas lapu un pasmaidīja: “Saturs labs, bet paskaties uz komatiem.” Lapā bija rakstīts: “Es domāju ka par Karostu jārunā godīgi jo tā ir daļa no Liepājas.” “Latviešu valodā palīgteikumu vienmēr atdala ar komatu, tāpēc pirms ‘ka’ un ‘jo’ tas ir obligāts”, Arnis paskaidroja.',
        translation:
          'O Arnis fez que sim e disse que é exatamente assim que funcionam as junções: “tomēr” vira a ideia, “turklāt” acrescenta mais um argumento, e “tāpēc” leva à conclusão. Então pegou a folha do discurso do Linu e sorriu: “O conteúdo está bom, mas olha as vírgulas.” Na folha estava escrito: “Eu penso que sobre Karosta é preciso falar com honestidade porque ela é parte de Liepāja.” “Em letão, a oração subordinada sempre é separada por vírgula, por isso antes de ‘ka’ e de ‘jo’ ela é obrigatória”, explicou o Arnis.',
        choices: [
          { text: 'Salabot: “Es domāju, ka par Karostu jārunā godīgi, jo tā ir daļa no Liepājas.”', translation: 'Corrigir: “Eu penso que sobre Karosta é preciso falar com honestidade, porque ela é parte de Liepāja.”', next: 'final_bom' },
          { text: 'Teikt, ka komati nav svarīgi, jo klausītāji tos nedzird.', translation: 'Dizer que vírgula não importa, porque a plateia não a ouve.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏅',
        text: 'Linu salaboja komatus un, runājot, katra komata vietā ieturēja īsu pauzi. Viņa runa bija skaidra, un katrs savienojuma vārds stāvēja savā vietā kā balsts zem tilta. Žūrija uzvaru gan piešķīra otrai komandai, tomēr Linu saņēma balvu par skaidrāko runu. Vakarā, ejot pa vējaino jūrmalu, viņš domāja, ka komati ir kā elpas vilcieni: bez tiem teikums aizrijas.',
        translation:
          'O Linu corrigiu as vírgulas e, ao falar, fez uma pequena pausa no lugar de cada uma. O discurso ficou claro, e cada palavra de ligação estava no seu lugar, como um pilar debaixo da ponte. A vitória, é verdade, foi para a outra equipe; no entanto, o Linu ganhou o prêmio de discurso mais claro. À noite, andando pela beira-mar cheia de vento, pensou que as vírgulas são como tomar fôlego: sem elas, a frase se engasga.',
        ending: { tone: 'bom', title: 'O discurso mais claro', message: 'Você leu o “tomēr” e o “tāpēc” do jeito certo e pôs a vírgula antes do “ka” e do “jo” — uma ponte com todos os pilares.' },
      },
      final_neutro: {
        emoji: '😮‍💨',
        text: '“Klausītāji komatus nedzird, bet viņi dzird pauzes”, Arnis atbildēja, “un komats bieži ir tieši tā pauze.” Linu negribīgi salaboja lapu, taču runājot steidzās un saskrēja visus teikumus vienā garā virtenē. Žūrija viņu uzslavēja par argumentiem, bet piebilda, ka klausīties bija grūti. Linu saprata, ka pieturzīmes nav tikai rakstu darbu lieta.',
        translation:
          '“A plateia não ouve as vírgulas, mas ouve as pausas”, respondeu o Arnis, “e a vírgula muitas vezes é justamente essa pausa.” O Linu corrigiu a folha a contragosto, mas, na hora de falar, se apressou e emendou todas as frases numa só fieira comprida. O júri elogiou os argumentos, mas comentou que tinha sido difícil acompanhar. O Linu entendeu que a pontuação não é só coisa de redação.',
        ending: { tone: 'neutro', title: 'Sem fôlego', message: 'Os argumentos estavam bons, mas sem as pausas das vírgulas a ponte balançou.' },
      },
    },
  },
  {
    id: 'lv-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Drupas vai jumts: vēstule Cēsu avīzei',
    emoji: '🏰',
    summary: 'Em Cēsis, depois de subir de lanterna a torre do castelo medieval, o Linu assiste a uma audiência pública sobre o futuro das ruínas e escreve uma carta ao jornal local — com tese, argumentos e contra-argumento.',
    cultural_context:
      'O castelo medieval de Cēsis foi erguido no século XIII pela Ordem dos Irmãos da Espada; em 1577, na Guerra da Livônia, as tropas de Ivã, o Terrível, cercaram a cidade, e hoje os visitantes sobem a Torre Oeste carregando lanternas de vela. Cēsis também é considerada o berço da bandeira letã: uma crônica rimada do século XIII menciona um estandarte vermelho com uma faixa branca usado por guerreiros daquela região.',
    start: 'start',
    glossary: [
      ['drupas', 'ruínas'],
      ['no vienas puses…, no otras puses…', 'por um lado…, por outro lado…'],
      ['tā kā', 'já que, uma vez que'],
      ['līdz ar to', 'consequentemente'],
      ['lai gan', 'embora'],
      ['manuprāt', 'na minha opinião'],
      ['pretarguments', 'contra-argumento'],
      ['apspriešana', 'audiência, consulta pública'],
    ],
    nodes: {
      start: {
        emoji: '🕯️',
        text: 'Rudens vakarā Linu ar sveču laternu rokā kāpa pa šaurām kāpnēm Cēsu viduslaiku pils Rietumu tornī. Augšā gide Dace, pēc profesijas arheoloģe, stāstīja, ka pils celta 13. gadsimtā un ka 1577. gadā tās aizstāvji, negribēdami padoties Ivana Bargā karaspēkam, esot uzspridzinājuši paši sevi. “Tagad pilsētā strīdas, ko ar drupām darīt tālāk”, viņa teica. “Rīt būs publiska apspriešana, un tu kā ārzemnieks varētu uzrakstīt vēstuli vietējai avīzei.”',
        translation:
          'Numa noite de outono, o Linu, com uma lanterna de vela na mão, subia a escada estreita da Torre Oeste do castelo medieval de Cēsis. Lá em cima, a guia Dace, arqueóloga de profissão, contou que o castelo foi construído no século XIII e que em 1577 seus defensores, para não se renderem às tropas de Ivã, o Terrível, teriam se explodido junto com ele. “Agora a cidade discute o que fazer com as ruínas”, disse ela. “Amanhã tem audiência pública, e você, como estrangeiro, podia escrever uma carta para o jornal local.”',
        choices: [
          { text: 'Iet uz apspriešanu un vispirms klausīties.', translation: 'Ir à audiência e primeiro escutar.', next: 'apspriesana' },
          { text: 'Uzreiz sākt rakstīt vēstuli, sēžot tornī.', translation: 'Começar a escrever a carta ali mesmo, sentado na torre.', next: 'melnraksts' },
        ],
      },
      melnraksts: {
        emoji: '📝',
        text: 'Linu apsēdās uz akmens soliņa un sveces gaismā uzrakstīja: “Drupas ir skaistas. Tās nevajag aiztikt. Visi, kas domā citādi, nesaprot vēsturi.” Dace izlasīja un pakratīja galvu: “Tas ir viedoklis, bet ne arguments. Turklāt tu apvaino tos, kuri tev nepiekrīt.” Viņa ieteica rīt vispirms uzklausīt abas puses un tikai tad rakstīt.',
        translation:
          'O Linu sentou num banquinho de pedra e, à luz da vela, escreveu: “As ruínas são bonitas. Não se deve mexer nelas. Todos os que pensam diferente não entendem de história.” A Dace leu e balançou a cabeça: “Isso é uma opinião, mas não um argumento. Além disso, você ofende quem não concorda com você.” Ela sugeriu que amanhã ele primeiro ouvisse os dois lados e só depois escrevesse.',
        choices: [{ text: 'Nākamajā dienā iet uz apspriešanu.', translation: 'No dia seguinte, ir à audiência.', next: 'apspriesana' }],
      },
      apspriesana: {
        emoji: '🗣️',
        text: 'Nākamajā dienā pils pagalmā sanāca kādi piecdesmit cilvēki. Uzņēmējs Valdis runāja pirmais: “No vienas puses, drupas ir skaistas; no otras puses, tās lēnām brūk. Tā kā mūri katru ziemu cieš no sala, bez jumta mēs tos zaudēsim. Līdz ar to vismaz vienu torni vajadzētu atjaunot pilnībā.” Tad runāja Dace: “Lai gan jumts drupas pasargātu, atjaunots tornis vairs nebūtu īsts viduslaiku tornis, bet gan mūsdienu kopija.”',
        translation:
          'No dia seguinte, umas cinquenta pessoas se reuniram no pátio do castelo. O empresário Valdis falou primeiro: “Por um lado, as ruínas são bonitas; por outro, estão desmoronando aos poucos. Já que os muros sofrem com o gelo todo inverno, sem telhado vamos perdê-los. Consequentemente, pelo menos uma torre deveria ser reconstruída por inteiro.” Depois falou a Dace: “Embora um telhado protegesse as ruínas, uma torre reconstruída já não seria uma torre medieval de verdade, e sim uma cópia moderna.”',
        choices: [
          { text: 'Pierakstīt: Dace atzīst, ka jumts pasargātu, taču baidās no kopijas.', translation: 'Anotar: a Dace admite que um telhado protegeria, mas teme a cópia.', next: 'vestule' },
          {
            text: 'Pierakstīt: Dace grib jumtu, jo tas drupas pasargās.',
            translation: 'Anotar: a Dace quer o telhado, porque ele vai proteger as ruínas.',
            wrong: '“Lai gan” quer dizer “embora”: introduz uma concessão, não a opinião principal. A Dace admite que o telhado protegeria as ruínas — mas o peso da frase vem depois: uma torre reconstruída seria cópia moderna. Ela é contra a reconstrução.',
          },
        ],
      },
      vestule: {
        emoji: '✉️',
        text: 'Vakarā Linu sāka rakstīt vēstuli no jauna, šoreiz ar plānu: tēze, argumenti, pretarguments, secinājums. Viņš uzrakstīja: “Manuprāt, drupas jāsaglabā tādas, kādas tās ir, tomēr tās ir jāaizsargā. Pirmkārt, tās ir īstas; otrkārt, tūristi brauc tieši uz drupām. Lai gan jumts būtu praktisks, pilnīgi atjaunots tornis būtu tikai kopija.” Dace izlasīja un teica, ka trūkst tikai viena — konkrēta priekšlikuma.',
        translation:
          'À noite, o Linu começou a carta de novo, dessa vez com um plano: tese, argumentos, contra-argumento, conclusão. Escreveu: “Na minha opinião, as ruínas devem ser preservadas como estão; no entanto, precisam ser protegidas. Em primeiro lugar, são autênticas; em segundo, os turistas vêm justamente pelas ruínas. Embora um telhado fosse prático, uma torre toda reconstruída seria só uma cópia.” A Dace leu e disse que faltava só uma coisa — uma proposta concreta.',
        choices: [
          { text: 'Pievienot kompromisu: vieglu jumtu, ko var noņemt.', translation: 'Acrescentar um meio-termo: um telhado leve, que pode ser retirado.', next: 'final_bom' },
          { text: 'Izsvītrot pretargumentu, lai vēstule būtu stingrāka.', translation: 'Riscar o contra-argumento, para a carta ficar mais firme.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: 'Linu pievienoja teikumu: “Tāpēc es iesaku vieglu stikla jumtu, kas mūrus pasargā, bet ko nākotnē var noņemt, neko nesabojājot.” Pēc nedēļas vēstule parādījās avīzē, un uz to atbildēja gan Valdis, gan Dace — abi rakstīja, ka kompromiss ir sarunas vērts. Dace uzaicināja Linu vēlreiz uzkāpt tornī ar laternu. “Tagad tu runā kā īsts cēsnieks”, viņa smējās.',
        translation:
          'O Linu acrescentou a frase: “Por isso, proponho um telhado leve de vidro, que proteja os muros, mas que no futuro possa ser retirado sem estragar nada.” Uma semana depois a carta saiu no jornal, e tanto o Valdis quanto a Dace responderam — os dois escreveram que o meio-termo merecia ser discutido. A Dace convidou o Linu a subir de novo a torre com a lanterna. “Agora você fala como um verdadeiro morador de Cēsis”, riu ela.',
        ending: { tone: 'bom', title: 'Carta publicada', message: 'Você entendeu o “lai gan” da Dace, ouviu os dois lados e fechou a carta com um “tāpēc” e uma proposta — argumentação de verdade.' },
      },
      final_neutro: {
        emoji: '📉',
        text: 'Bez pretargumenta vēstule izskatījās stingra, bet vienpusīga. Avīze to publicēja, taču nākamajā numurā Valdis atbildēja, ka ārzemnieks nav pat mēģinājis saprast otras puses argumentus. Linu lasīja atbildi un saprata, ka pats sev bija atņēmis spēcīgāko argumentu — to, ka viņš bija uzklausījis abas puses. Dace viņu mierināja: “Nākamreiz. Debates Cēsīs nebeidzas nekad.”',
        translation:
          'Sem o contra-argumento, a carta parecia firme, mas unilateral. O jornal a publicou, mas na edição seguinte o Valdis respondeu que o estrangeiro nem tinha tentado entender os argumentos do outro lado. O Linu leu a resposta e percebeu que ele mesmo tinha jogado fora o seu argumento mais forte — o de ter ouvido os dois lados. A Dace o consolou: “Da próxima vez. Os debates em Cēsis nunca terminam.”',
        ending: { tone: 'neutro', title: 'Firme, mas de um lado só', message: 'Riscar o contra-argumento deixou a carta mais fraca, não mais forte: quem mostra que ouviu o outro lado convence mais.' },
      },
    },
  },
  {
    id: 'lv-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Tilts pār Ventu: Kuldīgas raidieraksts',
    emoji: '🎙️',
    summary: 'Na ponte de tijolos de Kuldīga, o Linu grava um podcast com uma dona de café que defende o turismo e um professor aposentado que quer turismo “com medida” — e precisa resumir os dois lados sem trocar os conectores.',
    cultural_context:
      'A cidade velha de Kuldīga, no vale do rio Venta, entrou para o Patrimônio Mundial da UNESCO em 2023; ali fica a Ventas rumba, frequentemente chamada de a queda-d’água mais larga da Europa, onde na primavera os peixes chamados vimbas saltam contra a correnteza. A ponte de tijolos sobre o Venta é de 1874, e o riacho Alekšupīte corre entre as casas de madeira da cidade velha.',
    start: 'start',
    glossary: [
      ['savukārt', 'por sua vez, já (contraste)'],
      ['proti', 'a saber, ou seja'],
      ['tātad', 'portanto, então'],
      ['ar mēru', 'com moderação, com medida'],
      ['ieguvums', 'ganho, benefício'],
      ['raidieraksts', 'podcast'],
      ['rumba', 'corredeira, queda-d’água baixa'],
      ['vimba', 'vimba (peixe de rio)'],
    ],
    nodes: {
      start: {
        emoji: '🐟',
        text: 'Pavasara rītā Linu stāvēja uz vecā ķieģeļu tilta pār Ventu un skatījās, kā pie Ventas rumbas lec vimbas. Viņš bija ieradies Kuldīgā ierakstīt raidierakstu par to, kā pilsēta mainījusies, kopš tās vecpilsēta 2023. gadā tika iekļauta UNESCO Pasaules mantojuma sarakstā. Uz tilta viņš satika divus cilvēkus, kuri jau no rīta strīdējās: kafejnīcas īpašnieci Ilzi un pensionētu skolotāju Jāni. “Lieliski”, Linu nodomāja, “man būs abas puses vienā ierakstā.”',
        translation:
          'Numa manhã de primavera, o Linu estava na velha ponte de tijolos sobre o Venta, olhando as vimbas saltarem na Ventas rumba. Tinha vindo a Kuldīga gravar um podcast sobre como a cidade mudou desde que sua cidade velha entrou, em 2023, na lista do Patrimônio Mundial da UNESCO. Na ponte, encontrou duas pessoas que discutiam desde cedo: a dona de café Ilze e o professor aposentado Jānis. “Ótimo”, pensou o Linu, “vou ter os dois lados numa gravação só.”',
        choices: [
          { text: 'Vispirms uzdot jautājumu Ilzei.', translation: 'Fazer a primeira pergunta à Ilze.', next: 'ilze' },
          { text: 'Vispirms uzdot jautājumu Jānim.', translation: 'Fazer a primeira pergunta ao Jānis.', next: 'janis' },
        ],
      },
      ilze: {
        emoji: '☕',
        text: '“Tūristi ir šīs pilsētas asinis”, Ilze sāka bez vilcināšanās. “Pirmkārt, viņi dod darbu jauniešiem, kuri citādi aizbrauktu uz Rīgu vai uz ārzemēm; otrkārt, par viņu naudu tiek atjaunotas vecās koka mājas. Turklāt, ja mēs viņus ierobežosim, viņi vienkārši brauks uz citu pilsētu.” Jānis tikmēr stāvēja blakus un klusi grozīja galvu.',
        translation:
          '“Os turistas são o sangue desta cidade”, começou a Ilze, sem hesitar. “Em primeiro lugar, dão trabalho aos jovens, que de outro modo iriam para Riga ou para o exterior; em segundo, é com o dinheiro deles que as velhas casas de madeira são restauradas. Além disso, se a gente os limitar, eles simplesmente vão para outra cidade.” Enquanto isso, o Jānis estava ao lado, balançando a cabeça em silêncio.',
        choices: [{ text: 'Tagad uzdot jautājumu Jānim.', translation: 'Agora fazer a pergunta ao Jānis.', next: 'abi' }],
      },
      janis: {
        emoji: '🏘️',
        text: '“Es šeit dzīvoju jau septiņdesmit gadus”, Jānis teica, “un vēl nekad pie mana loga nav stāvējuši tik daudzi svešinieki ar telefoniem.” Viņš paskaidroja, ka vasarā pie Alekšupītes nevar izbraukt no pagalma, ka maizes veikala vietā tagad ir suvenīru bodīte un ka jaunas ģimenes nevar atļauties dzīvokļus vecpilsētā. “Tāpēc es saku: tūrisms — jā, bet ar mēru.” Ilze tikmēr nepacietīgi mīņājās uz vietas.',
        translation:
          '“Eu moro aqui há setenta anos”, disse o Jānis, “e nunca tinha tido tanto estranho de celular parado na frente da minha janela.” Explicou que no verão, perto do Alekšupīte, não dá para tirar o carro do quintal, que no lugar da padaria agora há uma lojinha de suvenires e que as famílias jovens não conseguem pagar apartamento na cidade velha. “Por isso eu digo: turismo, sim, mas com medida.” Enquanto isso, a Ilze se remexia, impaciente.',
        choices: [{ text: 'Tagad uzdot jautājumu Ilzei.', translation: 'Agora fazer a pergunta à Ilze.', next: 'abi' }],
      },
      abi: {
        emoji: '⚖️',
        text: 'Kad bija runājuši abi, Linu lūdza katram vienā teikumā pateikt galveno. Ilze teica: “Tūristi pilsētai dod dzīvību, un to nedrīkst apturēt.” Jānis savukārt sacīja: “Pilsēta nav muzejs; tai jāpaliek vietai, kur cilvēki dzīvo, proti, strādā, iepērkas un audzina bērnus.” Linu noklausījās ierakstu un domāja, kā abus viedokļus apkopot beigās.',
        translation:
          'Depois que os dois falaram, o Linu pediu a cada um que dissesse o principal numa frase. A Ilze disse: “Os turistas dão vida à cidade, e isso não pode ser freado.” O Jānis, por sua vez, disse: “A cidade não é museu; tem de continuar sendo um lugar onde as pessoas vivem, ou seja, trabalham, fazem compras e criam os filhos.” O Linu ouviu a gravação e pensou em como resumir as duas opiniões no fim.',
        choices: [
          { text: 'Apkopot: “Ilze uzsver ieguvumus, Jānis savukārt — dzīves kvalitāti vecpilsētā.”', translation: 'Resumir: “A Ilze destaca os benefícios; o Jānis, por sua vez, a qualidade de vida na cidade velha.”', next: 'apkopojums' },
          {
            text: 'Apkopot: “Jānis savukārt pilnībā piekrīt Ilzei.”',
            translation: 'Resumir: “O Jānis, por sua vez, concorda totalmente com a Ilze.”',
            wrong: '“Savukārt” quer dizer “por sua vez”, “já” — marca contraste, não concordância. E o Jānis disse outra coisa: a cidade não é museu e tem de continuar sendo lugar onde se vive. Ele quer turismo “com medida”, não concorda totalmente com a Ilze.',
          },
        ],
      },
      apkopojums: {
        emoji: '🤝',
        text: 'Linu ierunāja noslēgumu: “Ilze uzsver ieguvumus, proti, darbu un naudu atjaunošanai, Jānis savukārt — dzīves kvalitāti tiem, kas šeit dzīvo. Tātad jautājums nav ‘tūrisms vai ne’, bet gan ‘kāds tūrisms’.” Ilze un Jānis pēkšņi abi pamāja. “Nu, ja tā pasaka, tad jā”, Jānis norūca. Ilze ierosināja turpināt sarunu viņas kafejnīcā.',
        translation:
          'O Linu gravou o fechamento: “A Ilze destaca os benefícios, ou seja, emprego e dinheiro para restauração; o Jānis, por sua vez, a qualidade de vida de quem mora aqui. Portanto, a questão não é ‘turismo ou não’, e sim ‘que turismo’.” De repente, a Ilze e o Jānis concordaram com a cabeça, os dois. “Bom, dito assim, é isso mesmo”, resmungou o Jānis. A Ilze propôs continuar a conversa no café dela.',
        choices: [
          { text: 'Pieņemt ielūgumu un turpināt ierakstu kafejnīcā.', translation: 'Aceitar o convite e continuar a gravação no café.', next: 'final_bom' },
          { text: 'Pateikties un steigties uz autobusu, lai ierakstu ātri publicētu.', translation: 'Agradecer e correr para o ônibus, para publicar logo a gravação.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🥧',
        text: 'Kafejnīcā pie kafijas un rabarberu pīrāga strīds pārvērtās sarunā. Jānis ieteica ierobežot tūristu autobusu stāvvietas pie Alekšupītes, bet Ilze — pieņemt darbā vietējos jauniešus un pārdot vietējo maizi. Galu galā viņi vienojās, ka pilsētai vajag gan tūristus, gan iedzīvotājus, turklāt ka viņiem pašiem vajadzētu biežāk uzklausīt vienam otru. Linu raidieraksts saucās “Tilts pār Ventu”, un tas kļuva par viņa klausītāko ierakstu.',
        translation:
          'No café, com café e torta de ruibarbo, a discussão virou conversa. O Jānis sugeriu limitar as vagas para ônibus de turismo perto do Alekšupīte, e a Ilze, contratar jovens da cidade e vender pão local. No fim, concordaram que a cidade precisa tanto de turistas quanto de moradores, e além disso que eles mesmos deviam se ouvir mais vezes. O podcast do Linu se chamou “Ponte sobre o Venta” e virou a gravação mais ouvida dele.',
        ending: { tone: 'bom', title: 'Ponte sobre o Venta', message: 'Você resumiu os dois lados com “savukārt”, “proti” e “tātad” no lugar certo — e ficou para ouvir como o debate terminou.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Linu publicēja ierakstu jau tajā pašā vakarā, un klausītāji to uzslavēja par skaidru apkopojumu. Tomēr vēlāk viņš uzzināja, ka kafejnīcā Ilze un Jānis bija nosēdējuši divas stundas un izdomājuši veselu plānu vecpilsētai. Viņš bija ierakstījis strīdu, bet palaidis garām to, kā strīds beidzās. “Nākamreiz”, viņš sev apsolīja, “es palikšu līdz beigām.”',
        translation:
          'O Linu publicou a gravação naquela mesma noite, e os ouvintes elogiaram o resumo claro. No entanto, depois ficou sabendo que no café a Ilze e o Jānis tinham ficado duas horas sentados e bolado um plano inteiro para a cidade velha. Ele tinha gravado a briga, mas perdido o jeito como a briga terminou. “Da próxima vez”, prometeu a si mesmo, “fico até o fim.”',
        ending: { tone: 'neutro', title: 'Metade da história', message: 'O resumo estava certo, mas a pressa fez você perder o melhor: o acordo depois da discussão.' },
      },
    },
  },
];
