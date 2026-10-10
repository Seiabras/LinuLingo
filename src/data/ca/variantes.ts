import type { LanguageVariant } from '../types';
import { ipaCaDe } from './tracos';
import { VARIANTS_CA_FORA } from './variantes-fora';

/**
 * Os dialetos do catalão (decisão do dono, 09/10/2026): o central da Catalunha (o do curso), o
 * valenciano, grupo grande com academia própria, e Andorra, o único país onde o catalão é a única
 * língua oficial. O rossellonês (França) e o alguerês (Itália) estão em variantes-fora.ts. Os falares
 * de Lleida e das Baleares ficam como sotaques do central. Vocabulário no formato [central, dialeto,
 * explicação, nota]; nas histórias, o texto está no catalão de lá e a tradução em português.
 *
 * Fontes: Wikipédia em catalão («Valencià», «Català nord-occidental», «Tribunal de les Aigües de
 * València», «Casa de la Vall», consultadas em 09/10/2026) e em inglês («Languages of Andorra», com a
 * pesquisa de usos linguísticos do governo de Andorra de 2022); o dictamen da Acadèmia Valenciana de
 * la Llengua (2005); a Constituição de Andorra (1993), art. 2.
 */
export const VARIANTS_CA: LanguageVariant[] = [
  {
    code: 'ca-ES',
    country: 'ESP',
    kind: 'dialeto',
    speechLocale: 'ca-ES',
    name: 'Catalão central (Catalunha)',
    flag: '🇪🇸',
    summary:
      'O padrão do curso: o catalão da Catalunha, com a pronúncia de Barcelona e a norma do Institut d’Estudis Catalans. É o das escolas, da TV3 e dos jornais da Catalunha.',
    card: {
      id: 'ca-es-c1',
      title: 'Por que o catalão de Barcelona?',
      emoji: '🏙️',
      history:
        'O catalão nasceu do latim nos Pireneus e se espalhou para o sul com a conquista de Valência e das Baleares, no século XIII. Foi língua de chancelaria e de grande literatura na Idade Média, de Ramon Llull a Ausiàs March. Depois de séculos de prestígio menor, a Renaixença do século XIX o devolveu à literatura, e no começo do século XX o Institut d’Estudis Catalans (1907) e o linguista Pompeu Fabra fixaram a norma: a ortografia de 1913, a gramática de 1918 e o dicionário de 1932. Na ditadura de Franco (1939–1975), o catalão foi expulso da escola e da vida pública. Com a democracia, voltou como língua oficial da Catalunha, e desde os anos 1980 é a língua principal da escola catalã. A pronúncia de referência é a de Barcelona, a mais falada, mas a norma aceita as formas de cada região.',
      culture_tip:
        'Em 23 de abril, dia de Sant Jordi, as ruas da Catalunha se enchem de bancas de livros e de rosas, e o costume é dar uma rosa e um livro a quem se gosta. Os castells, torres humanas de até dez andares, são Patrimônio Imaterial da Humanidade desde 2010. No Natal, as crianças batem com pau no caga tió, um tronco com cara sorridente, para ele “soltar” doces. E em muitas cidades se dança a sardana em roda, de mãos dadas, no domingo de manhã.',
      grammar_why:
        'Três marcas do central que mudam nos outros dialetos: (1) as vogais átonas se reduzem: “a” e “e” soam [ə] e “o” soa [u] (Barcelona [bərsəˈlonə]); (2) a primeira pessoa do presente termina em “-o”: “jo parlo”; (3) o passado do dia a dia é perifrástico: “vaig anar” (fui), “vam menjar” (comemos). O valenciano, o andorrano, o rossellonês e o alguerês mudam justamente esses pontos.',
      grammar_examples: [
        ['Jo parlo català i portuguès.', 'Eu falo catalão e português.'],
        ['Aquesta noia és la meva germana.', 'Esta moça é a minha irmã.'],
        ['Ahir vaig anar a la platja.', 'Ontem eu fui à praia.'],
        ['Avui sortim a sopar.', 'Hoje vamos sair para jantar.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── VALENCIANO ─────────────────────────────
  {
    code: 'ca-VC',
    country: 'ESP',
    kind: 'dialeto',
    speechLocale: 'ca-ES',
    ipa: ipaCaDe('ca-VC'),
    name: 'Valenciano (País Valencià)',
    flag: '🍊',
    summary:
      'O catalão da Comunidade Valenciana, onde o nome oficial da língua é “valencià”. Cerca de 2,4 milhões de falantes nativos, uma academia própria, a Acadèmia Valenciana de la Llengua, e formas bem conhecidas: jo parle, este, la meua, hui, eixir.',
    card: {
      id: 'ca-vc-c1',
      title: 'Valencià: a mesma língua, outro nome',
      emoji: '🍊',
      history:
        'Em 1238, o rei Jaume I conquistou Valência, e o novo reino foi povoado sobretudo por gente da Catalunha, que levou a língua; o interior oeste recebeu aragoneses e até hoje fala castelhano. No século XV, Valência viveu o seu Século de Ouro: ali escreveram Ausiàs March e Joanot Martorell, autor do “Tirant lo Blanc” (1490), que Cervantes elogia no “Dom Quixote”. Com os decretos de Nueva Planta (1707), o castelhano virou a língua oficial. Em 1932, as Normes de Castelló adaptaram ao valenciano a ortografia de Fabra. O Estatuto de Autonomia de 1982 chama a língua de “valencià”, e em 1998 nasceu a Acadèmia Valenciana de la Llengua (AVL), que em 2005 declarou que a língua dos valencianos é, do ponto de vista da linguística, a mesma da Catalunha, das Baleares e de Andorra. O nome, porém, é tema sensível: para muitos valencianos, a língua é “valencià”, e ponto.',
      culture_tip:
        'Em março, Valência vive as Falles: monumentos enormes de papelão e madeira tomam as ruas, todo dia às duas da tarde a mascletà, uma sequência de rojões, faz o chão tremer na praça da prefeitura, e na noite de 19 de março, dia de São José, quase tudo vira fogueira (la cremà). As Falles são Patrimônio Imaterial da Humanidade desde 2016. A paella nasceu nos arrozais em volta da Albufera, e a valenciana leva frango, coelho e feijão-branco grande (garrofó), nada de frutos do mar. No verão, a bebida é a orxata, de chufa, com fartons para molhar.',
      grammar_why:
        'O valenciano segue a gramática comum do catalão, com formas próprias que a AVL aceita como padrão: (1) a primeira pessoa do presente termina em “-e”: “jo parle”, “jo cante”; (2) o subjuntivo em “-e” e “-a”: “que parle”, “que faces” (no central, “que parli”, “que facis”); (3) os demonstrativos “este, eixe, aquell” e os possessivos “meua, teua, seua”; (4) os numerais “huit” e “dènou”; (5) o passado simples continua vivo na fala: “aní” (fui), ao lado do “vaig anar”; (6) a acentuação com “é” fechado: “francés”, “anglés”, “café”.',
      grammar_examples: [
        ['Jo parle valencià i francés.', 'Eu falo valenciano e francês. (central: parlo, francès)'],
        ['Esta xiqueta és la meua filla.', 'Esta menina é a minha filha. (central: aquesta nena, la meva)'],
        ['Hui eixim a sopar.', 'Hoje vamos sair para jantar. (central: avui sortim)'],
        ['Vull que ho faces tu.', 'Quero que você faça isso. (central: facis)'],
        ['El meu fill té huit anys.', 'O meu filho tem oito anos. (central: vuit)'],
        ['Ahir aní a la platja.', 'Ontem eu fui à praia. (central: vaig anar)'],
      ],
      character_guide: [
        ['x', 'no começo da palavra e depois de consoante, soa “tch”', 'xiquet, xocolate, panxa'],
        ['j, g', '“j” e “g” antes de “e” e “i” soam “dj”, como o “di” carioca', 'jove, gent, menjar'],
        ['é', 'o valenciano escreve “é” fechado onde o central põe “è”', 'francés, anglés, café'],
        ['-r', 'o “r” final dos infinitivos soa', 'parlar, menjar, eixir'],
      ],
    },
    pronunciation: [
      'As vogais átonas não se reduzem: “Barcelona” soa [barseˈlona], e “pare”, [ˈpaɾe]. É a maior diferença para o ouvido de quem aprendeu o central.',
      'O “x” no começo da palavra e depois de consoante soa “tch”: xiquet [tʃiˈket], panxa [ˈpantʃa].',
      'O “j” e o “g” antes de “e” e “i” soam “dj”: jove [ˈdʒove], gent [dʒent].',
      'O “i” de “ix” soa: caixa [ˈkajʃa], peix [pejʃ], eixir [ejˈʃiɾ].',
      'O “r” final dos infinitivos soa na maior parte do território: parlar [paɾˈlaɾ].',
      'No sul e na norma da AVL, o “v” é labiodental, como no português: vaca [ˈvaka]. Na cidade de Valência, muita gente o pronuncia como “b”.',
    ],
    vocab: [
      ['noi, nen', 'xiquet', 'menino', 'a palavra mais conhecida do valenciano; “xiqueta” é menina'],
      ['sortir', 'eixir', 'sair', '“eixim” (saímos), “ix” (sai)'],
      ['avui', 'hui', 'hoje', 'do latim “hodie”, como o “hoje” do português'],
      ['mirall', 'espill', 'espelho', 'também em Lleida e Andorra'],
      ['patata', 'creïlla', 'batata', 'a palavra da AVL; na fala também se ouve “patata”'],
      ['maduixa', 'fraula', 'morango', 'parente do francês “fraise”'],
      ['escombra', 'granera', 'vassoura', 'de “gra” (grão): era feita de palha de sorgo'],
      ['préssec', 'bresquilla', 'pêssego', 'uma das palavras que um valenciano reconhece de longe'],
      ['blat de moro', 'dacsa', 'milho', 'do árabe; a “coca de dacsa” é um pão chato de milho'],
      ['mongeta tendra', 'bajoca', 'vagem', 'vai na paella valenciana'],
      ['guineu', 'rabosa', 'raposa', 'as duas são catalão padrão; cada região prefere uma'],
      ['petit', 'xicotet', 'pequeno', 'parente de “xic” (menino), do bloco ocidental'],
      ['tomàquet', 'tomaca', 'tomate', 'no feminino, como o “tomata” de outras línguas'],
      ['aquest, aquesta', 'este, esta', 'este, esta', 'forma antiga, aceita pela AVL'],
      ['la meva', 'la meua', 'a minha', 'também “la teua”, “la seua”'],
      ['vuit', 'huit', 'oito', 'e “dènou” (dezenove), “desset” (dezessete)'],
      ['veure', 'vore', 'ver', 'a forma da fala, que a AVL aceita'],
    ],
    stories: [
      {
        id: 'ca-h46',
        variant: 'ca-VC',
        level: 'B1.2',
        cefr: 'B1',
        title: 'La mascletà de les dos',
        emoji: '🎆',
        summary: 'Em plenas Falles, Linu chega a Valência e a amiga Neus o leva para ver a mascletà, comer bunyols e entender o que é “la cremà”.',
        cultural_context:
          'As Falles de Valência vão de 1º a 19 de março. Todo dia, às duas da tarde, a mascletà, uma sequência ensurdecedora de rojões, enche a Plaça de l’Ajuntament. Os monumentos, chamados de “falles”, são queimados na noite de 19 de março, la cremà; só se salva um bonequinho, o “ninot indultat”, escolhido por votação. A festa é Patrimônio Imaterial da Humanidade desde 2016.',
        start: 'start',
        glossary: [
          ['falla', 'monumento de papelão e madeira das Falles'],
          ['mascletà', 'sequência de rojões ao meio-dia'],
          ['la cremà', 'a queima dos monumentos, em 19 de março'],
          ['ninot', 'boneco de uma falla'],
          ['bunyols', 'bolinhos fritos de abóbora'],
          ['hui', 'hoje'],
          ['xiquet, xiqueta', 'menino, menina'],
          ['eixir', 'sair'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: 'Linu arriba a València un matí de març. A l’estació l’espera la seua amiga Neus. —Benvingut! Hui és el millor dia: a les dos hi ha mascletà. Però abans hem de vore les falles.',
            translation:
              'Linu chega a Valência numa manhã de março. Na estação, a amiga Neus está esperando por ele. — Bem-vindo! Hoje é o melhor dia: às duas tem mascletà. Mas antes a gente precisa ver as falles.',
            choices: [
              { text: '—Què és una falla?', translation: '— O que é uma falla?', next: 'falla' },
              {
                text: '—Hui? No era demà?',
                translation: '— Hoje? Não era amanhã?',
                wrong: '“Hui” é “hoje” em valenciano (no central, “avui”). A Neus disse que a mascletà é hoje, às duas.',
              },
            ],
          },
          falla: {
            emoji: '🎭',
            text: 'Al carrer hi ha un monument enorme de cartó i fusta, ple de ninots de colors. —Això és una falla —explica Neus—. Cada barri en fa una. Es riuen dels polítics, dels famosos, de tot. I el dia de Sant Josep, a la nit, les cremem.',
            translation:
              'Na rua há um monumento enorme de papelão e madeira, cheio de bonecos coloridos. — Isso é uma falla — explica a Neus. — Cada bairro faz a sua. Elas zombam dos políticos, dos famosos, de tudo. E na noite de São José a gente queima todas.',
            choices: [
              { text: '—Les cremeu? Totes?', translation: '— Vocês queimam? Todas?', next: 'ninot' },
              {
                text: '—Llavors les guardeu en un museu, no?',
                translation: '— Então vocês guardam num museu, né?',
                wrong: 'Não: a Neus disse que no dia de São José, à noite, as falles são queimadas (“les cremem”). Só um bonequinho escapa.',
              },
            ],
          },
          ninot: {
            emoji: '🔥',
            text: '—Totes! Només se salva un ninot, el ninot indultat, que la gent tria votant. Va al Museu Faller. —Neus mira el rellotge—. Ui, són quasi les dos! Corre, que la plaça s’ompli de gent.',
            translation:
              '— Todas! Só se salva um boneco, o “ninot indultat”, que o povo escolhe por votação. Ele vai para o Museu Faller. — A Neus olha o relógio. — Nossa, já são quase duas! Corre, que a praça enche de gente.',
            choices: [
              { text: 'Linu corre darrere de Neus.', translation: 'Linu corre atrás da Neus.', next: 'mascleta' },
            ],
          },
          mascleta: {
            emoji: '🎆',
            text: 'A la Plaça de l’Ajuntament hi ha milers de persones. A les dos en punt comença: pam, pam, PAM! El terra tremola, el fum ho cobrix tot i el soroll puja i puja fins al final. La gent aplaudix i crida. Un xiquet al costat de Linu salta d’alegria.',
            translation:
              'Na Plaça de l’Ajuntament há milhares de pessoas. Às duas em ponto começa: pam, pam, PAM! O chão treme, a fumaça cobre tudo e o barulho sobe, sobe, até o final. As pessoas aplaudem e gritam. Um menino ao lado do Linu pula de alegria.',
            choices: [
              { text: '—Increïble! Neus, tinc fam. Què mengem?', translation: '— Incrível! Neus, estou com fome. O que a gente come?', next: 'bunyols' },
              { text: '—Massa soroll per a mi. Me’n vaig a l’hotel.', translation: '— Barulho demais para mim. Vou para o hotel.', next: 'final_hotel' },
            ],
          },
          bunyols: {
            emoji: '🍩',
            text: '—En Falles, bunyols de carabassa amb xocolate! —Neus compra una dotzena en una parada—. I esta nit, si vols, eixim a vore els llums de Russafa.',
            translation:
              '— Nas Falles, bolinhos de abóbora com chocolate quente! — A Neus compra uma dúzia numa barraca. — E hoje à noite, se você quiser, a gente sai para ver as luzes de Russafa.',
            choices: [
              { text: '—Clar que sí! Eixim esta nit.', translation: '— Claro que sim! A gente sai hoje à noite.', next: 'final_bom' },
              {
                text: '—“Eixim”? Vols dir que ens quedem a casa?',
                translation: '— “Eixim”? Você quer dizer que a gente fica em casa?',
                wrong: '“Eixir” é “sair” em valenciano (no central, “sortir”): “eixim” é “saímos”. A Neus está convidando para sair à noite.',
              },
            ],
          },
          final_bom: {
            emoji: '✨',
            text: 'Aquella nit, Linu i Neus passegen per Russafa entre llums de colors, bunyols i música. —L’any que ve tornes per a la cremà? —pregunta Neus. —Segur! —respon Linu, que ja diu “hui” i “eixim” com un valencià.',
            translation:
              'Naquela noite, Linu e Neus passeiam por Russafa entre luzes coloridas, bolinhos e música. — Ano que vem você volta para a cremà? — pergunta a Neus. — Com certeza! — responde Linu, que já diz “hui” e “eixim” como um valenciano.',
            ending: {
              tone: 'bom',
              title: 'Faller de cor',
              message:
                'Você viveu as Falles e aprendeu palavras do valenciano: hui (hoje), eixir (sair), xiquet (menino), além de “esta nit” e “la seua amiga”, com os demonstrativos e possessivos de lá.',
            },
          },
          final_hotel: {
            emoji: '🏨',
            text: 'Linu torna a l’hotel amb el cap ple de soroll. Des de la finestra veu el fum de la plaça i sent la gent cridar. Neus li envia un missatge: “Demà a les dos, una altra!”',
            translation:
              'Linu volta para o hotel com a cabeça cheia de barulho. Da janela, vê a fumaça da praça e ouve o povo gritar. A Neus manda uma mensagem: “Amanhã às duas, tem outra!”',
            ending: {
              tone: 'neutro',
              title: 'Amanhã às duas',
              message: 'A mascletà assusta mesmo na primeira vez. Ainda bem que nas Falles tem uma por dia: amanhã você volta e prova os bunyols!',
            },
          },
        },
      },
      {
        id: 'ca-h47',
        variant: 'ca-VC',
        level: 'B2.2',
        cefr: 'B2',
        title: 'El dijous a la porta dels Apòstols',
        emoji: '💧',
        summary: 'Numa quinta-feira ao meio-dia, Linu acompanha o lavrador Vicent ao Tribunal de les Aigües, na porta da catedral de Valência, onde há mil anos se julgam as brigas pela água da horta.',
        cultural_context:
          'O Tribunal de les Aigües de València se reúne toda quinta-feira ao meio-dia na Porta dels Apòstols da catedral. Os oito síndicos, um por canal de irrigação (séquia) da horta, julgam as queixas dos lavradores sobre o uso da água. O julgamento é oral, em valenciano, sem papel nem advogado, e a decisão é definitiva. É considerado uma das instituições de justiça mais antigas da Europa e é Patrimônio Imaterial da Humanidade desde 2009.',
        start: 'start',
        glossary: [
          ['l’horta', 'a planície irrigada em volta de Valência'],
          ['séquia', 'canal de irrigação'],
          ['síndic', 'representante eleito de uma séquia, juiz do tribunal'],
          ['llaurador', 'lavrador, agricultor'],
          ['torn', 'a vez de cada um usar a água'],
          ['denúncia', 'queixa'],
          ['multa', 'multa'],
          ['que + subjuntivo em -e/-a', 'que vinga, que faça (valenciano)'],
        ],
        nodes: {
          start: {
            emoji: '🌾',
            text: 'Vicent és llaurador a l’horta de València, com son pare i son avi. Un dimecres, mentre rega les bajoques, li conta a Linu el seu problema: —El veí ha obert la seua parada abans d’hora i m’ha furtat l’aigua del meu torn. Demà a les dotze vaig al Tribunal. Vols vindre?',
            translation:
              'Vicent é lavrador na horta de Valência, como o pai e o avô dele. Numa quarta-feira, enquanto rega as vagens, conta ao Linu o seu problema: — O vizinho abriu a comporta dele antes da hora e roubou a água da minha vez. Amanhã ao meio-dia eu vou ao Tribunal. Quer vir?',
            choices: [
              { text: '—Sí! Però on és el Tribunal?', translation: '— Quero! Mas onde fica o Tribunal?', next: 'catedral' },
              {
                text: '—Has de buscar un advocat, llavors.',
                translation: '— Então você precisa arrumar um advogado.',
                wrong: 'No Tribunal de les Aigües não há advogados nem papéis: cada lavrador fala por si, em valenciano, e os síndicos decidem ali mesmo.',
              },
            ],
          },
          catedral: {
            emoji: '⛪',
            text: '—A la porta de la catedral, al carrer! —riu Vicent—. Fa més de mil anys que es reunix allí, tots els dijous. Huit síndics, un per cada séquia, seuen en cadires davant de la porta dels Apòstols. Ningú no escriu res: tot es diu de paraula.',
            translation:
              '— Na porta da catedral, na rua! — ri o Vicent. — Faz mais de mil anos que ele se reúne lá, toda quinta-feira. Oito síndicos, um para cada séquia, se sentam em cadeiras diante da Porta dos Apóstolos. Ninguém escreve nada: tudo é dito de boca.',
            choices: [
              { text: 'L’endemà, Linu acompanya Vicent a la plaça.', translation: 'No dia seguinte, Linu acompanha o Vicent até a praça.', next: 'judici' },
            ],
          },
          judici: {
            emoji: '⚖️',
            text: 'A les dotze en punt, l’agutzil crida els denunciats de cada séquia. Quan diu el nom del veí, Vicent s’alça i explica: —Dimarts, el meu torn era de les cinc a les set del matí. Quan vaig arribar, la parada del veí ja estava oberta i el meu camp, sec. El veí respon que s’havia equivocat d’hora. Els síndics parlen en veu baixa entre ells.',
            translation:
              'Ao meio-dia em ponto, o oficial chama os denunciados de cada séquia. Quando ele diz o nome do vizinho, o Vicent se levanta e explica: — Na terça, a minha vez era das cinco às sete da manhã. Quando eu cheguei, a comporta do vizinho já estava aberta e o meu campo, seco. O vizinho responde que tinha se enganado de hora. Os síndicos conversam em voz baixa entre si.',
            choices: [
              {
                text: 'Linu pregunta en veu baixa: —I ara què passa?',
                translation: 'Linu pergunta baixinho: — E agora, o que acontece?',
                next: 'sentencia',
              },
              {
                text: 'Linu pensa que el veí haurà d’anar a un altre tribunal per a apel·lar.',
                translation: 'Linu pensa que o vizinho vai ter de ir a outro tribunal para recorrer.',
                wrong: 'A decisão do Tribunal de les Aigües é definitiva: não há recurso. É por isso que todo mundo respeita o que os síndicos decidem.',
              },
            ],
          },
          sentencia: {
            emoji: '📜',
            text: 'Un home gran al costat de Linu li explica: —Ara decidixen. El síndic de la séquia del denunciat no vota, perquè no siga jutge i part. Després, el president dirà la sentència i s’acabarà. Ací no hi ha apel·lació. Al cap d’uns minuts, el president parla: el veí ha de pagar una multa i, la setmana que ve, Vicent tindrà una hora més d’aigua.',
            translation:
              'Um senhor ao lado do Linu explica: — Agora eles decidem. O síndico da séquia do denunciado não vota, para que não seja juiz e parte. Depois o presidente diz a sentença e acabou. Aqui não tem recurso. Depois de alguns minutos, o presidente fala: o vizinho tem de pagar uma multa e, na semana que vem, o Vicent vai ter uma hora a mais de água.',
            choices: [
              {
                text: 'Linu felicita Vicent i també saluda el veí.',
                translation: 'Linu cumprimenta o Vicent e também cumprimenta o vizinho.',
                next: 'final_bom',
              },
              {
                text: 'Linu se’n va de pressa sense dir res.',
                translation: 'Linu vai embora depressa, sem dizer nada.',
                next: 'final_neutro',
              },
            ],
          },
          final_bom: {
            emoji: '🤝',
            text: 'El veí arriba, una mica avergonyit, i li dona la mà a Vicent: —Tens raó, Vicent. Que no torne a passar. —Vinga, home —respon Vicent—. Diumenge fem una paella a l’alqueria i vos espere a tots dos.',
            translation:
              'O vizinho chega, um pouco envergonhado, e aperta a mão do Vicent: — Você tem razão, Vicent. Que isso não se repita. — Que nada, homem — responde o Vicent. — Domingo a gente faz uma paella na casa de campo, e espero vocês dois.',
            ending: {
              tone: 'bom',
              title: 'Justiça de mil anos',
              message:
                'Você acompanhou um julgamento oral em valenciano e o subjuntivo de lá (“que no torne”, “perquè no siga”), além do vocabulário da horta: séquia, torn, parada, llaurador. E viu que, na horta, depois da sentença vem a paella.',
            },
          },
          final_neutro: {
            emoji: '🚶',
            text: 'Linu se’n va cap al centre. A la tarda, Vicent li envia un missatge: “El veí i jo hem fet les paus. Diumenge paella a l’alqueria. Vens?”',
            translation:
              'Linu vai para o centro. À tarde, o Vicent manda uma mensagem: “Eu e o vizinho fizemos as pazes. Domingo tem paella na casa de campo. Você vem?”',
            ending: {
              tone: 'neutro',
              title: 'A paella fica para domingo',
              message: 'Na horta, a briga acaba no tribunal e a amizade continua na mesa. Aceite o convite do Vicent!',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── ANDORRA ─────────────────────────────
  {
    code: 'ca-AD',
    country: 'AND',
    kind: 'dialeto',
    speechLocale: 'ca-ES',
    ipa: ipaCaDe('ca-AD'),
    name: 'Catalão de Andorra',
    flag: '🇦🇩',
    summary:
      'O único país do mundo onde o catalão é a única língua oficial. A fala é do bloco ocidental, como a de Lleida, e convive no dia a dia com o castelhano, o português e o francês de quem mora ou passa pelos vales.',
    card: {
      id: 'ca-ad-c1',
      title: 'Um país, sete paróquias, dois copríncipes',
      emoji: '🏔️',
      history:
        'Andorra é um principado nos Pireneus, entre a Espanha e a França, com cerca de 85 mil habitantes. A sua forma de governo vem dos Pareatges de 1278, um acordo entre o bispo de Urgell e o conde de Foix que dividiu entre os dois a soberania dos vales. Por isso o país tem até hoje dois chefes de Estado, os copríncipes: o bispo de Urgell e, herdeiro dos condes de Foix, o presidente da França. Em 1419 nasceu o Consell de la Terra, origem do parlamento, o Consell General. A Constituição de 1993 fez de Andorra um Estado de direito democrático, que no mesmo ano entrou na ONU, e declarou no artigo 2: a língua oficial do Estado é o catalão. A fala dos andorranos é do bloco ocidental, parente da do Pallars e de Lleida.',
      culture_tip:
        'O país é dividido em sete paróquias (parròquies), cada uma com o seu comú, a prefeitura, chefiado por um cònsol major. Na Casa de la Vall, a antiga sede do parlamento, fica o “armari de les set claus”, um armário com os documentos históricos que só se abre com as sete chaves, uma de cada paróquia. Em 8 de setembro, dia de Nossa Senhora de Meritxell, padroeira do país, é feriado nacional. Na mesa, a escudella, um cozido de inverno, e o trinxat, de repolho e batata. E como só cerca de 44% dos moradores têm a nacionalidade andorrana, ouve-se muito castelhano, português e francês: o catalão é a língua de casa de 44% das pessoas, o castelhano de 40%, e o português de 13,5%, segundo a pesquisa do governo de 2022.',
      grammar_why:
        'A gramática é a do catalão padrão; a fala tem os traços do bloco ocidental: (1) as vogais átonas não se reduzem: “passar” soa [paˈsa], e “besar”, [beˈza]; (2) o “a” final dos verbos soa como um “e” fechado: “(ell) torna” [ˈtorne]; (3) o artigo antigo “lo, los” convive com “el, els” na fala; (4) os pronomes antes de consoante ficam na forma plena: “me dutxo”, “te dic” (no central, “em dutxo”, “et dic”); (5) o “x” soa “tch”: xocolata [tʃokoˈlata]; (6) o “r” final dos infinitivos não soa. E a vida pública tem nomes próprios: copríncep, Consell General, comú, cònsol.',
      grammar_examples: [
        ['Lo meu germà treballa a Andorra la Vella.', 'O meu irmão trabalha em Andorra la Vella. (central: el meu germà)'],
        ['Me dutxo i baixo a esmorzar.', 'Eu tomo banho e desço para tomar o café da manhã. (central: em dutxo)'],
        ['Te dic que neva al port.', 'Estou te dizendo que está nevando no passo da montanha. (central: et dic)'],
        ['El cònsol major del comú d’Ordino parla al Consell General.', 'O prefeito de Ordino fala no parlamento.'],
        ['El 8 de setembre és la festa de Meritxell.', 'O 8 de setembro é a festa de Meritxell.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'As vogais átonas não se reduzem, como em Lleida e em Valência: “Andorra la Vella” soa [anˈdora la ˈbeʎa], e não [ənˈdorə lə ˈβeʎə], como em Barcelona.',
      'O “a” final dos verbos soa como um “e” fechado: “(ell) parla” [ˈparle], “(ella) torna” [ˈtorne].',
      'O “x” no começo da palavra e depois de consoante soa “tch”: xocolata, xic.',
      'O “r” final dos infinitivos não soa, como no central: parlar [parˈla].',
      'O “e” tônico que vem do “e” fechado do latim continua fechado, onde Barcelona o abre.',
      'Quem cresceu em casa falando castelhano ou português costuma trazer a pronúncia dessas línguas para o catalão: é comum ouvir um catalão com sotaque português nas lojas e nos hotéis.',
    ],
    vocab: [
      // a fala do bloco ocidental
      ['el, els', 'lo, los', 'o, os (artigo)', 'na fala; na escrita formal, “el, els”'],
      ['em dutxo', 'me dutxo', 'eu tomo banho', 'o pronome antes de consoante fica na forma plena'],
      ['et dic', 'te dic', 'eu te digo', 'a mesma regra'],
      ['mirall', 'espill', 'espelho', 'palavra do bloco ocidental, também em Valência'],
      ['noi', 'xic', 'rapaz, menino', '“xica” é moça; “xicot” é namorado'],
      ['xai', 'corder', 'cordeiro', 'palavra do bloco ocidental'],
      // a vida pública
      ['ajuntament', 'comú', 'prefeitura', 'cada uma das sete paróquias tem o seu comú'],
      ['alcalde', 'cònsol major', 'prefeito', 'o vice é o “cònsol menor”'],
      ['municipi', 'parròquia', 'município', 'Andorra tem sete: Canillo, Encamp, Ordino, la Massana, Andorra la Vella, Sant Julià de Lòria e Escaldes-Engordany'],
      ['parlament', 'Consell General', 'parlamento', 'herdeiro do Consell de la Terra, de 1419'],
      ['president del govern', 'cap de Govern', 'chefe do governo', 'o primeiro-ministro de Andorra'],
      ['cap d’Estat', 'copríncep', 'chefe de Estado', 'são dois: o bispo de Urgell e o presidente da França'],
      // a montanha e a mesa
      ['cabana de pedra', 'borda', 'casa de pedra da montanha', 'antigo celeiro e estábulo; hoje muitas viraram restaurantes'],
      ['coll de muntanya', 'port', 'passo de montanha', 'o Port d’Envalira é o passo asfaltado mais alto dos Pireneus'],
    ],
    stories: [
      {
        id: 'ca-h48',
        variant: 'ca-AD',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Una escudella a la borda',
        emoji: '🏔️',
        summary: 'Depois de uma trilha no vale de Incles, Linu para numa borda para comer escudella e descobre que, em Andorra, o garçom pode ser português e a conversa, em catalão.',
        cultural_context:
          'As bordas são antigas casas de pedra da montanha andorrana, que serviam de celeiro e estábulo. Hoje muitas viraram restaurantes de comida da terra, como a escudella, um cozido de inverno com carne, legumes e macarrão. Andorra tem uma grande comunidade portuguesa: o português é a língua de casa de 13,5% dos moradores, mas a língua oficial, a do trabalho e da escola, é o catalão.',
        start: 'start',
        glossary: [
          ['borda', 'casa de pedra da montanha, hoje restaurante'],
          ['escudella', 'cozido de inverno'],
          ['trinxat', 'prato de repolho e batata'],
          ['lo, los', 'o, os (na fala de Andorra)'],
          ['me, te', 'me, te (pronomes na forma plena)'],
          ['xic', 'rapaz'],
          ['port', 'passo de montanha'],
        ],
        nodes: {
          start: {
            emoji: '🥾',
            text: 'Després de tot el matí caminant per la vall d’Incles, Linu té fred i molta gana. Al costat del riu veu una borda de pedra amb fum a la xemeneia. A la porta, un cartell: “Escudella i trinxat”.',
            translation:
              'Depois de uma manhã inteira caminhando pelo vale de Incles, Linu está com frio e muita fome. Na beira do rio, vê uma borda de pedra com fumaça na chaminé. Na porta, uma placa: “Escudella e trinxat”.',
            choices: [
              { text: 'Linu entra a la borda.', translation: 'Linu entra na borda.', next: 'entrar' },
              {
                text: 'Linu pensa que una borda és una botiga de roba.',
                translation: 'Linu acha que uma borda é uma loja de roupas.',
                wrong: 'A borda é uma casa de pedra da montanha. Esta virou restaurante: a placa anuncia escudella e trinxat, e sai fumaça da chaminé.',
              },
            ],
          },
          entrar: {
            emoji: '🍲',
            text: 'Un xic jove s’acosta a la taula. —Bon dia! Què li poso? Avui tenim escudella. Linu llegeix el seu nom a la camisa: Tiago. —Tiago? Ets portuguès? —Sí, de Braga! Però aquí treballo en català: és la llengua del país.',
            translation:
              'Um rapaz jovem se aproxima da mesa. — Bom dia! O que vai ser? Hoje temos escudella. Linu lê o nome dele na camisa: Tiago. — Tiago? Você é português? — Sou, de Braga! Mas aqui eu trabalho em catalão: é a língua do país.',
            choices: [
              { text: '—Doncs parlem en català! Una escudella, si us plau.', translation: '— Então vamos falar em catalão! Uma escudella, por favor.', next: 'escudella' },
              { text: '—Que bom, então falamos em português!', translation: '— Que bom, então falamos em português!', next: 'portugues' },
            ],
          },
          portugues: {
            emoji: '😄',
            text: 'Tiago riu: —Podem parlar portuguès, eh! Però tu has vingut a aprendre català, no? Aquí és la llengua oficial, l’única. Practica amb mi! Linu accepta, una mica vermell.',
            translation:
              'O Tiago ri: — A gente pode falar português, viu! Mas você veio aprender catalão, não veio? Aqui ela é a língua oficial, a única. Pratique comigo! Linu aceita, meio vermelho.',
            choices: [{ text: '—D’acord. Una escudella, si us plau.', translation: '— Combinado. Uma escudella, por favor.', next: 'escudella' }],
          },
          escudella: {
            emoji: '🥘',
            text: 'L’escudella arriba ben calenta: brou, carn, cigrons, verdures i pasta. A la taula del costat, un senyor gran explica als seus néts: —Lo meu avi pujava a aquesta borda amb les vaques. Ara me dutxo a casa amb aigua calenta, però ell ho feia al riu!',
            translation:
              'A escudella chega bem quente: caldo, carne, grão-de-bico, legumes e macarrão. Na mesa ao lado, um senhor de idade explica aos netos: — O meu avô subia até esta borda com as vacas. Hoje eu tomo banho em casa com água quente, mas ele tomava no rio!',
            choices: [
              {
                text: 'Linu pregunta a Tiago: —Per què el senyor diu “lo meu avi” i “me dutxo”?',
                translation: 'Linu pergunta ao Tiago: — Por que o senhor diz “lo meu avi” e “me dutxo”?',
                next: 'parla',
              },
              {
                text: 'Linu pensa que el senyor parla castellà.',
                translation: 'Linu acha que o senhor está falando castelhano.',
                wrong: 'É catalão, sim: “lo” é o artigo antigo do bloco ocidental (no central, “el”), e “me dutxo” é a forma plena do pronome (no central, “em dutxo”).',
              },
            ],
          },
          parla: {
            emoji: '🗣️',
            text: '—És la parla d’aquí, com la de Lleida: “lo” en lloc d’“el”, “me” en lloc d’“em”. I no se mengen les vocals: diuen “Andorra” amb una “a” ben clara! —explica Tiago—. Jo encara tinc accent portuguès, però em fan cas igual.',
            translation:
              '— É o jeito de falar daqui, como o de Lleida: “lo” em vez de “el”, “me” em vez de “em”. E eles não engolem as vogais: dizem “Andorra” com um “a” bem claro! — explica o Tiago. — Eu ainda tenho sotaque português, mas me entendem do mesmo jeito.',
            choices: [
              { text: '—Moltes gràcies, Tiago. L’escudella és boníssima!', translation: '— Muito obrigado, Tiago. A escudella está ótima!', next: 'final_bom' },
              { text: 'Linu paga i se’n va de pressa, perquè comença a nevar.', translation: 'Linu paga e vai embora depressa, porque começa a nevar.', next: 'final_neu' },
            ],
          },
          final_bom: {
            emoji: '☕',
            text: 'Tiago porta dos cafès i s’asseu un moment. Parlen del país, de les set parròquies i de la festa de Meritxell. Quan Linu surt, el senyor gran li diu: —Fins aviat, xic! Torna quan vulgues.',
            translation:
              'O Tiago traz dois cafés e se senta um pouco. Eles conversam sobre o país, as sete paróquias e a festa de Meritxell. Quando Linu sai, o senhor de idade lhe diz: — Até logo, rapaz! Volte quando quiser.',
            ending: {
              tone: 'bom',
              title: 'Xic de la borda',
              message:
                'Você conversou em catalão num restaurante andorrano e reconheceu a fala do bloco ocidental: lo meu avi, me dutxo, xic. E viu que em Andorra o catalão é a língua comum de quem vem de todo lado.',
            },
          },
          final_neu: {
            emoji: '❄️',
            text: 'Linu baixa la vall amb la neu a la cara. Al cotxe, pensa que no ha preguntat res més a Tiago. La setmana que ve hi tornarà.',
            translation:
              'Linu desce o vale com a neve no rosto. No carro, pensa que não perguntou mais nada ao Tiago. Na semana que vem, ele volta lá.',
            ending: {
              tone: 'neutro',
              title: 'A neve chegou primeiro',
              message: 'Na montanha, o tempo manda. Da próxima vez, fique para o café e a conversa: é ali que se aprende o catalão de Andorra.',
            },
          },
        },
      },
      {
        id: 'ca-h49',
        variant: 'ca-AD',
        level: 'B2.2',
        cefr: 'B2',
        title: 'L’armari de les set claus',
        emoji: '🗝️',
        summary: 'Na Casa de la Vall, em Andorra la Vella, a guia Meritxell mostra a Linu e a um grupo de visitantes como um país tão pequeno guardou por séculos as suas leis com sete chaves.',
        cultural_context:
          'A Casa de la Vall, uma casa senhorial de pedra do século XVI em Andorra la Vella, foi por séculos a sede do Consell General, o parlamento andorrano, até a mudança para um prédio novo, em 2011. Ali fica o “armari de les set claus”, o armário onde se guardavam os documentos mais importantes do país: só se abria com as sete chaves, uma de cada paróquia, e por isso nenhuma paróquia podia abri-lo sozinha.',
        start: 'start',
        glossary: [
          ['Casa de la Vall', 'a antiga sede do parlamento andorrano'],
          ['Consell General', 'o parlamento de Andorra'],
          ['parròquia', 'cada uma das sete divisões de Andorra'],
          ['copríncep', 'cada um dos dois chefes de Estado'],
          ['Pareatges', 'os acordos de 1278 entre o bispo de Urgell e o conde de Foix'],
          ['clau', 'chave'],
          ['havia de + infinitivo', 'tinha de, devia'],
          ['sense que + subjuntivo', 'sem que'],
        ],
        nodes: {
          start: {
            emoji: '🏛️',
            text: 'La guia, que es diu Meritxell com la patrona del país, rep el grup a la porta de la Casa de la Vall. —Aquesta casa de pedra és del segle XVI. Durant segles hi va treballar el Consell General, el nostre parlament. Abans d’entrar, una pregunta: qui creieu que és el cap d’Estat d’Andorra?',
            translation:
              'A guia, que se chama Meritxell como a padroeira do país, recebe o grupo na porta da Casa de la Vall. — Esta casa de pedra é do século XVI. Durante séculos, o Consell General, o nosso parlamento, trabalhou aqui. Antes de entrar, uma pergunta: quem vocês acham que é o chefe de Estado de Andorra?',
            choices: [
              { text: '—Són dos, no? Els coprínceps.', translation: '— São dois, não são? Os copríncipes.', next: 'coprinceps' },
              {
                text: '—El rei d’Espanya.',
                translation: '— O rei da Espanha.',
                wrong: 'Não: Andorra tem dois chefes de Estado, os copríncipes: o bispo de Urgell e o presidente da França, herdeiro dos condes de Foix.',
              },
            ],
          },
          coprinceps: {
            emoji: '👑',
            text: '—Exacte! El bisbe d’Urgell i el president de França. Tot va començar el 1278, amb els Pareatges: el bisbe i el comte de Foix es barallaven per les valls i van decidir compartir-les. Els drets dels comtes de Foix van passar als reis de França i, després, als presidents de la República.',
            translation:
              '— Exatamente! O bispo de Urgell e o presidente da França. Tudo começou em 1278, com os Pareatges: o bispo e o conde de Foix brigavam pelos vales e decidiram dividi-los. Os direitos dos condes de Foix passaram para os reis da França e, depois, para os presidentes da República.',
            choices: [
              { text: 'El grup puja a la sala del Consell.', translation: 'O grupo sobe para a sala do Conselho.', next: 'armari' },
            ],
          },
          armari: {
            emoji: '🗝️',
            text: 'En una paret de la sala hi ha un armari de fusta amb set panys. —És l’armari de les set claus —diu Meritxell—. Hi guardaven els documents més importants del país. Cada parròquia en tenia una clau, i per obrir-lo hi havien de ser totes set. Així cap parròquia no podia tocar els papers sense que les altres ho sabessin.',
            translation:
              'Numa parede da sala há um armário de madeira com sete fechaduras. — É o armário das sete chaves — diz a Meritxell. — Aqui se guardavam os documentos mais importantes do país. Cada paróquia tinha uma chave, e para abri-lo as sete tinham de estar presentes. Assim nenhuma paróquia podia mexer nos papéis sem que as outras soubessem.',
            choices: [
              {
                text: '—És a dir, ningú no el podia obrir tot sol.',
                translation: '— Ou seja, ninguém conseguia abri-lo sozinho.',
                next: 'constitucio',
              },
              {
                text: '—Llavors el cònsol de la Massana el podia obrir quan volia.',
                translation: '— Então o cônsul de la Massana podia abri-lo quando quisesse.',
                wrong: 'Não: cada paróquia tinha só uma das sete chaves, e o armário só abria com as sete juntas. Nenhuma paróquia mexia nos papéis sem as outras.',
              },
            ],
          },
          constitucio: {
            emoji: '📘',
            text: '—Això mateix. És una manera de pensar molt andorrana: decidir junts —somriu Meritxell—. El 1993 vam votar la Constitució, i el seu article 2 diu que la llengua oficial de l’Estat és el català. Per això, encara que aquí visqui gent de tot arreu, l’escola, el Govern i el Consell parlen en català.',
            translation:
              '— Isso mesmo. É um jeito de pensar bem andorrano: decidir juntos — sorri a Meritxell. — Em 1993 nós votamos a Constituição, e o artigo 2 dela diz que a língua oficial do Estado é o catalão. Por isso, embora aqui viva gente de todo lugar, a escola, o Governo e o Conselho falam em catalão.',
            choices: [
              {
                text: 'Linu pregunta: —I a casa, quina llengua parla la gent?',
                translation: 'Linu pergunta: — E em casa, que língua as pessoas falam?',
                next: 'casa',
              },
              {
                text: 'Linu fa una foto de l’armari i surt al carrer.',
                translation: 'Linu tira uma foto do armário e sai para a rua.',
                next: 'final_neutro',
              },
            ],
          },
          casa: {
            emoji: '🏠',
            text: '—De tot! —riu Meritxell—. Segons l’enquesta del Govern de 2022, a casa el 44% parla català, el 40% castellà, i molts parlen portuguès o francès. Jo, per exemple, parlo català amb el meu pare i portuguès amb la meva mare, que és de Viseu. Però al carrer, el català ens uneix a tots.',
            translation:
              '— De tudo! — ri a Meritxell. — Segundo a pesquisa do Governo de 2022, em casa 44% falam catalão, 40% castelhano, e muitos falam português ou francês. Eu, por exemplo, falo catalão com o meu pai e português com a minha mãe, que é de Viseu. Mas na rua o catalão une todos nós.',
            choices: [{ text: '—Llavors tu ets com l’armari: tens més d’una clau!', translation: '— Então você é como o armário: tem mais de uma chave!', next: 'final_bom' }],
          },
          final_bom: {
            emoji: '😄',
            text: 'Tot el grup riu. Meritxell li dona la mà a Linu: —Aquesta frase me la quedo per a les pròximes visites! Quan surten, les campanes de Sant Esteve toquen les dotze, i Linu pensa que un país petit pot guardar coses molt grans.',
            translation:
              'O grupo inteiro ri. A Meritxell aperta a mão do Linu: — Essa frase eu vou guardar para as próximas visitas! Quando eles saem, os sinos de Sant Esteve batem meio-dia, e Linu pensa que um país pequeno pode guardar coisas muito grandes.',
            ending: {
              tone: 'bom',
              title: 'Mais de uma chave',
              message:
                'Você entendeu a história dos copríncipes e dos Pareatges, o armário das sete chaves, o “havien de” (tinham de) e o “sense que” com subjuntivo, e viu por que o catalão é a língua comum de Andorra.',
            },
          },
          final_neutro: {
            emoji: '📸',
            text: 'Al carrer, Linu mira la foto de l’armari i s’adona que no sap per a què servien les set claus. La pròxima visita comença d’aquí a una hora.',
            translation:
              'Na rua, Linu olha a foto do armário e percebe que não sabe para que serviam as sete chaves. A próxima visita começa daqui a uma hora.',
            ending: {
              tone: 'neutro',
              title: 'A foto sem a história',
              message: 'O armário só faz sentido com a história dele: sete paróquias, sete chaves, uma decisão conjunta. Volte para a próxima visita!',
            },
          },
        },
      },
    ],
  },

  ...VARIANTS_CA_FORA,
];
