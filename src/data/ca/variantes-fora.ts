import type { LanguageVariant } from '../types';
import { ipaCaDe } from './tracos';

/**
 * Os dialetos do catalão fora da Espanha e de Andorra (decisão do dono, 09/10/2026): o rossellonês,
 * da Catalunha do Norte (França), e o alguerês, de l'Alguer (Sardenha, Itália). Vocabulário no formato
 * [central, dialeto, explicação, nota]. Nas histórias, a narração segue o padrão e as falas trazem as
 * formas de lá documentadas nas fontes (o “pas”, o “belleu”, o “lo”, o “jo parl”…); o resto da fala
 * fica no catalão comum, para não inventar formas.
 *
 * Fontes: Wikipédia em catalão («Rossellonès», «Alguerès», «Tractat dels Pirineus», «Flama del
 * Canigó», consultadas em 09/10/2026) e o que elas citam: Blasco Ferrer para o alguerês e a pesquisa
 * de usos linguísticos de l'Alguer de 2015 (Generalitat de Catalunya e Região da Sardenha).
 */
export const VARIANTS_CA_FORA: LanguageVariant[] = [
  // ───────────────────────────── CATALUNHA DO NORTE (FRANÇA) ─────────────────────────────
  {
    code: 'ca-FR',
    country: 'FRA',
    kind: 'dialeto',
    speechLocale: 'ca-ES',
    ipa: ipaCaDe('ca-FR'),
    name: 'Rossellonês (Catalunha do Norte, França)',
    flag: '🇫🇷',
    summary:
      'O catalão do departamento francês dos Pirenéus Orientais, a Catalunha do Norte, que passou à França em 1659. Convive há mais de três séculos com o francês, que lhe deu palavras e a negação com “pas”, e guarda formas antigas que o sul perdeu.',
    card: {
      id: 'ca-fr-c1',
      title: 'Do outro lado dos Pireneus',
      emoji: '⛰️',
      history:
        'Na Idade Média, Perpinyà (Perpignan) foi uma das capitais do Reino de Maiorca, e o Palácio dos Reis de Maiorca ainda domina a cidade. Em 1659, o Tratado dos Pireneus, que encerrou uma guerra entre a Espanha e a França, passou para a França o Rosselló, o Conflent, o Vallespir, o Capcir e parte da Cerdanya. Em 1700, um édito de Luís XIV proibiu o catalão nos documentos públicos, e a escola francesa, obrigatória a partir do fim do século XIX, fez do francês a língua da rua. Separado do resto do domínio linguístico, o rossellonês seguiu o seu caminho: guardou formas antigas e tomou muitas palavras do francês. Hoje o catalão não tem status oficial na França; é falado sobretudo pelos mais velhos, mas há escolas de imersão, como as da Bressola, fundada em 1976, e o catalão também se estuda na Universidade de Perpinyà.',
      culture_tip:
        'O Canigó, a montanha de 2.784 metros que se vê de toda a planície, é o símbolo da Catalunha do Norte (os rossellonenses dizem “Canigú”). Na véspera de São João, 23 de junho, uma chama acesa no alto do Canigó desce para acender as fogueiras de toda a terra catalã: é a Flama del Canigó, tradição desde os anos 1950. Em Cotlliure (Collioure), as anchovas salgadas são famosas, e foi ali que Matisse e Derain pintaram, em 1905, os quadros que deram início ao fauvismo. E nos estádios de rúgbi de Perpinyà, as bandeiras de quatro listras vermelhas sobre fundo amarelo estão por toda parte.',
      grammar_why:
        'O rossellonês é do bloco oriental, como o central, mas com traços próprios: (1) a negação basta com “pas”, como no francês falado: “Ton pare menja pas” (o teu pai não come); (2) a primeira pessoa do presente termina em “-i”: “jo canti”, “jo perdi”; (3) os pronomes ficam na forma plena antes do verbo: “me fa pena”; (4) alguns infinitivos ganham um “e”: “dire”, “fere”, “sere” (dizer, fazer, ser); (5) palavras próprias e do francês: “belleu” (talvez), “nalt” (alto), “espiar” (olhar), “assieta” (prato), “usina” (fábrica).',
      grammar_examples: [
        ['Ton pare menja pas.', 'O teu pai não come. (central: El teu pare no menja.)'],
        ['Jo canti a la coral.', 'Eu canto no coral. (central: jo canto)'],
        ['Me fa pena.', 'Me dá pena. (central: em fa pena)'],
        ['Belleu plourà demà.', 'Talvez chova amanhã. (central: potser)'],
        ['Espia el Canigó, que és ben nalt!', 'Olha o Canigó, como é alto! (central: mira, alt)'],
        ['Posa les assietes a taula.', 'Põe os pratos na mesa. (central: plats; do francês “assiette”)'],
      ],
      character_guide: [
        ['ó → u', 'o “o” fechado tônico soa “u”', 'Canigó [kəniˈɡu]'],
        ['-r', 'o “r” final soa', 'car, clar'],
        ['-x', 'o “x” depois de vogal pode sumir', 'peix [pej]'],
        ['lt', 'o “l” antes de “t” cai na fala', 'escoltar → [əskuˈta]'],
      ],
    },
    pronunciation: [
      'O “o” fechado tônico soa “u”: Canigó vira “Canigú”. É a marca que qualquer catalão reconhece no rossellonês.',
      'As vogais átonas se reduzem, como em Barcelona: “a” e “e” soam [ə], e “o” soa [u].',
      'O “r” final soa: car, clar, e às vezes com um [ə] de apoio depois.',
      'O “l” antes de “t” costuma cair: escoltar soa “escotar”.',
      'O “x” depois de vogal pode sumir, deixando só o “i”: peix soa [pej].',
      'Muitos falantes têm a melodia e o “r” do francês, a língua da escola há mais de um século.',
    ],
    vocab: [
      ['no … (negação)', '… pas', 'não', '“Ton pare menja pas”: o “pas” sozinho basta, como no francês falado'],
      ['jo canto', 'jo canti', 'eu canto', 'a primeira pessoa em “-i”: jo perdi, jo parli'],
      ['em fa pena', 'me fa pena', 'me dá pena', 'o pronome na forma plena antes do verbo'],
      ['dir, fer', 'dire, fere', 'dizer, fazer', 'infinitivos com um “e” no fim; também “sere” (ser)'],
      ['potser', 'belleu', 'talvez', 'parente do occitano; uma das palavras mais típicas do rossellonês'],
      ['alt', 'nalt', 'alto', 'com um “n” no começo'],
      ['mirar', 'espiar', 'olhar', 'cuidado: no central, “espiar” é espionar'],
      ['paleta', 'peirer', 'pedreiro', 'de “pedra”, como o occitano'],
      ['graella', 'gravila', 'grelha'],
      ['clatell', 'cogot', 'nuca'],
      ['plat', 'assieta', 'prato', 'do francês “assiette”'],
      ['fàbrica', 'usina', 'fábrica', 'do francês “usine”'],
      ['el teu pare', 'ton pare', 'o teu pai', 'o possessivo átono antigo, vivo no rossellonês'],
    ],
    stories: [
      {
        id: 'ca-h50',
        variant: 'ca-FR',
        level: 'B1.2',
        cefr: 'B1',
        title: 'El mercat de Perpinyà',
        emoji: '🧺',
        summary: 'Num sábado de manhã em Perpinyà, Linu procura alguém que fale catalão no mercado e encontra o senhor Pere, que vende pêssegos e fala o catalão do Rosselló.',
        cultural_context:
          'Perpinyà (Perpignan) é a principal cidade da Catalunha do Norte, o departamento francês dos Pirenéus Orientais. Desde 1659 a região é francesa, e o francês é a língua da maioria. O catalão ainda se ouve nos mercados e entre os mais velhos, com traços próprios: a negação com “pas”, palavras como “belleu” (talvez) e muitos empréstimos do francês. As placas da cidade costumam ter o nome em catalão abaixo do francês.',
        start: 'start',
        glossary: [
          ['… pas', 'não (negação do rossellonês)'],
          ['belleu', 'talvez'],
          ['espiar', 'olhar'],
          ['nalt', 'alto'],
          ['assieta', 'prato (do francês)'],
          ['jo canti', 'eu canto (1ª pessoa em -i)'],
          ['préssecs', 'pêssegos'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: 'Linu passeja per Perpinyà un dissabte al matí. Al carrer, tothom parla francès. Al costat del Castellet, veu un cartell en dues llengües: “Place de la Loge / Plaça de la Llotja”. —Aquí encara es parla català? —es pregunta.',
            translation:
              'Linu passeia por Perpinyà num sábado de manhã. Na rua, todo mundo fala francês. Perto do Castellet, vê uma placa em duas línguas: “Place de la Loge / Plaça de la Llotja”. — Será que aqui ainda se fala catalão? — ele se pergunta.',
            choices: [
              { text: 'Linu va al mercat a buscar-ho.', translation: 'Linu vai ao mercado para descobrir.', next: 'mercat' },
            ],
          },
          mercat: {
            emoji: '🍑',
            text: 'En una parada de fruita, un senyor gran crida: —Préssecs del Rosselló! Préssecs bons! Linu s’hi acosta i diu en català: —Bon dia! Quant valen els préssecs? El senyor somriu: —Ah, un que parla català! Aquí els joves ho parlen pas gaire. Jo soc en Pere.',
            translation:
              'Numa barraca de frutas, um senhor de idade grita: — Pêssegos do Rosselló! Pêssegos bons! Linu se aproxima e diz em catalão: — Bom dia! Quanto custam os pêssegos? O senhor sorri: — Ah, alguém que fala catalão! Aqui os jovens não falam muito. Eu sou o Pere.',
            choices: [
              {
                text: '—Per què diu “ho parlen pas”?',
                translation: '— Por que o senhor diz “ho parlen pas”?',
                next: 'pas',
              },
              {
                text: 'Linu entén que els joves parlen molt el català.',
                translation: 'Linu entende que os jovens falam muito catalão.',
                wrong: 'É o contrário: “ho parlen pas gaire” quer dizer “não falam muito”. No rossellonês, o “pas” sozinho já faz a negação.',
              },
            ],
          },
          pas: {
            emoji: '🗣️',
            text: '—Aquí diem “pas”, com els francesos. “Menjo pas”, “sé pas”… A Barcelona diuen “no menjo”, però nosaltres, des de 1659, vivim amb el francès. —En Pere li dona un préssec—. Té, tasta. Belleu és el millor de l’estiu!',
            translation:
              '— Aqui a gente diz “pas”, como os franceses. “Menjo pas” (não como), “sé pas” (não sei)… Em Barcelona dizem “no menjo”, mas nós, desde 1659, vivemos com o francês. — O Pere lhe dá um pêssego. — Toma, prova. Talvez seja o melhor do verão!',
            choices: [
              { text: '—Boníssim! Què vol dir “belleu”?', translation: '— Delicioso! O que quer dizer “belleu”?', next: 'belleu' },
            ],
          },
          belleu: {
            emoji: '⛰️',
            text: '—“Belleu” vol dir “potser”. És ben nostre! —En Pere assenyala el sud, on es veu una muntanya alta amb neu al cim—. I espia allà: el Canigú! És ben nalt, eh? Per Sant Joan, la flama baixa d’allà dalt per encendre els focs de tot el país.',
            translation:
              '— “Belleu” quer dizer “talvez”. É bem nosso! — O Pere aponta para o sul, onde se vê uma montanha alta com neve no topo. — E olha lá: o Canigó! É bem alto, hein? No São João, a chama desce lá de cima para acender as fogueiras do país inteiro.',
            choices: [
              {
                text: '—“Espia”? Hem d’espiar algú?',
                translation: '— “Espia”? A gente tem de espionar alguém?',
                wrong: 'No rossellonês, “espiar” é “olhar” (no central, “mirar”). O Pere só pediu para o Linu olhar o Canigó.',
              },
              {
                text: '—Que bonic! Compro un quilo de préssecs.',
                translation: '— Que bonito! Vou levar um quilo de pêssegos.',
                next: 'compra',
              },
            ],
          },
          compra: {
            emoji: '🛍️',
            text: 'En Pere posa els préssecs en una bossa. —I si vens diumenge a la plaça, ballem sardanes. Jo hi vaig cada setmana i canti amb la cobla quan em deixen!',
            translation:
              'O Pere põe os pêssegos num saco. — E se você vier domingo à praça, a gente dança sardana. Eu vou toda semana e canto com a banda quando me deixam!',
            choices: [
              { text: '—Diumenge hi seré!', translation: '— Domingo eu estou lá!', next: 'final_bom' },
              { text: '—Diumenge marxo cap a Barcelona, ho sento.', translation: '— Domingo eu vou para Barcelona, sinto muito.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '💃',
            text: 'Diumenge, Linu balla la sardana a la plaça, de la mà d’en Pere i dels seus amics. Ningú no és jove, però tothom riu i parla català. —Tornaràs? —pregunta en Pere. —Belleu! —respon Linu, i tots riuen.',
            translation:
              'No domingo, Linu dança a sardana na praça, de mãos dadas com o Pere e os amigos dele. Ninguém ali é jovem, mas todo mundo ri e fala catalão. — Você volta? — pergunta o Pere. — Belleu! — responde Linu, e todos riem.',
            ending: {
              tone: 'bom',
              title: 'Belleu!',
              message:
                'Você encontrou o catalão do Rosselló e as suas marcas: a negação com “pas”, “belleu” (talvez), “espiar” (olhar), “nalt” (alto) e a primeira pessoa em “-i” (“canti”).',
            },
          },
          final_neutro: {
            emoji: '🚆',
            text: 'En Pere arronsa les espatlles: —Llavors, bon viatge! I digues a Barcelona que aquí també parlem català, eh? Linu se’n va amb els préssecs i amb ganes de tornar.',
            translation:
              'O Pere dá de ombros: — Então, boa viagem! E diz lá em Barcelona que aqui a gente também fala catalão, viu? Linu vai embora com os pêssegos e com vontade de voltar.',
            ending: {
              tone: 'neutro',
              title: 'Recado para Barcelona',
              message: 'O catalão do Rosselló vive sobretudo entre os mais velhos: cada conversa conta. Na próxima, fique para a sardana!',
            },
          },
        },
      },
      {
        id: 'ca-h51',
        variant: 'ca-FR',
        level: 'B2.2',
        cefr: 'B2',
        title: 'La flama baixa del Canigó',
        emoji: '🔥',
        summary: 'Na véspera de São João, Linu acompanha a família da amiga Joana, que leva a chama do Canigó até a fogueira da aldeia, e ouve da avó como era ser proibida de falar catalão na escola.',
        cultural_context:
          'Todo ano, em 23 de junho, véspera de São João, uma chama que fica guardada em Perpinyà sobe até o alto do Canigó e de lá é levada por revezamento a cidades e aldeias de toda a terra catalã, onde acende as fogueiras da noite. A tradição, a Flama del Canigó, começou nos anos 1950. Para muita gente da Catalunha do Norte, é um símbolo de que a língua e a cultura continuam vivas dos dois lados da fronteira.',
        start: 'start',
        glossary: [
          ['flama', 'chama'],
          ['foguera', 'fogueira'],
          ['revetlla de Sant Joan', 'a noite da véspera de São João'],
          ['me feia vergonya', 'me dava vergonha (pronome pleno)'],
          ['… pas', 'não'],
          ['mestre', 'professor'],
          ['si + imperfeito do subjuntivo', 'se eu falasse…'],
        ],
        nodes: {
          start: {
            emoji: '🏘️',
            text: 'És 23 de juny i a Prades, al peu del Canigó, tot el poble espera la flama. La Joana porta en Linu a casa de la seva àvia, la Rosa, que té noranta anys i parla un català ple de paraules antigues. —Avui pujarem la flama a la foguera de la plaça —diu la Joana—. Però abans, la iaia ens vol explicar una cosa.',
            translation:
              'É 23 de junho e, em Prades, ao pé do Canigó, a aldeia inteira espera a chama. A Joana leva o Linu à casa da avó dela, a Rosa, que tem noventa anos e fala um catalão cheio de palavras antigas. — Hoje vamos levar a chama até a fogueira da praça — diz a Joana. — Mas antes a vovó quer nos contar uma coisa.',
            choices: [
              { text: 'Linu s’asseu al costat de la iaia Rosa.', translation: 'Linu se senta ao lado da vó Rosa.', next: 'escola' },
            ],
          },
          escola: {
            emoji: '🏫',
            text: '—Quan era petita, a l’escola el mestre volia pas sentir ni una paraula de català —comença la Rosa—. Si parlaves català al pati, et castigaven. A casa parlàvem català, i a l’escola, francès. Me feia vergonya parlar com els meus pares.',
            translation:
              '— Quando eu era pequena, na escola o professor não queria ouvir nenhuma palavra de catalão — começa a Rosa. — Se você falasse catalão no recreio, era castigado. Em casa a gente falava catalão e, na escola, francês. Me dava vergonha falar como os meus pais.',
            choices: [
              {
                text: '—Llavors vostè va deixar de parlar català?',
                translation: '— Então a senhora deixou de falar catalão?',
                next: 'fills',
              },
              {
                text: 'Linu entén que el mestre ensenyava en català.',
                translation: 'Linu entende que o professor ensinava em catalão.',
                wrong: 'É o contrário: “volia pas sentir ni una paraula de català” é “não queria ouvir nenhuma palavra de catalão”. Na escola francesa, o catalão era castigado.',
              },
            ],
          },
          fills: {
            emoji: '👩‍👧',
            text: '—Jo, pas! Però als meus fills els vaig parlar en francès. Pensàvem que el català servia pas per a res. És el que més em sap greu de la meva vida. —La Rosa agafa la mà de la Joana—. I mira: la meva néta l’ha après a la Bressola, i ara me’l parla a mi!',
            translation:
              '— Eu, não! Mas com os meus filhos eu falei em francês. A gente achava que o catalão não servia para nada. É o que eu mais lamento na minha vida. — A Rosa segura a mão da Joana. — E olha: a minha neta aprendeu na Bressola e agora fala comigo em catalão!',
            choices: [
              {
                text: '—Què és la Bressola?',
                translation: '— O que é a Bressola?',
                next: 'bressola',
              },
              {
                text: '—Llavors la Joana va aprendre el català amb els seus pares.',
                translation: '— Então a Joana aprendeu catalão com os pais.',
                wrong: 'Não: a Rosa falou em francês com os filhos, então os pais da Joana cresceram em francês. A Joana aprendeu catalão na escola, na Bressola.',
              },
            ],
          },
          bressola: {
            emoji: '🎒',
            text: '—Són escoles on tot es fa en català, des dels dos anys —explica la Joana—. Van començar el 1976 amb poquets nens. Jo hi vaig anar, i ara faig de monitora a l’estiu. Si la iaia no m’hagués parlat mai en català, ara no sabria el que em perdia.',
            translation:
              '— São escolas onde tudo é feito em catalão, desde os dois anos — explica a Joana. — Começaram em 1976 com pouquinhas crianças. Eu estudei lá e agora sou monitora no verão. Se a vovó nunca tivesse falado comigo em catalão, hoje eu não saberia o que estava perdendo.',
            choices: [
              { text: 'S’escolten els tambors: arriba la flama!', translation: 'Ouvem-se os tambores: a chama está chegando!', next: 'flama' },
            ],
          },
          flama: {
            emoji: '🔥',
            text: 'A la plaça, uns joves arriben corrent amb una torxa. La gent aplaudeix i algú llegeix un missatge en català i en francès. La Joana dona una espelma a la iaia Rosa i una altra a en Linu. —Vols encendre-la amb nosaltres?',
            translation:
              'Na praça, uns jovens chegam correndo com uma tocha. As pessoas aplaudem, e alguém lê uma mensagem em catalão e em francês. A Joana dá uma vela à vó Rosa e outra ao Linu. — Quer acender com a gente?',
            choices: [
              { text: '—Amb molt de gust!', translation: '— Com muito prazer!', next: 'final_bom' },
              { text: '—Prefereixo mirar-ho des d’aquí.', translation: '— Prefiro olhar daqui.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌟',
            text: 'Els tres encenen les espelmes a la flama i després la foguera s’alça cap al cel. La iaia Rosa canta una cançó antiga que la Joana també sap. —Ho veus? —diu la Rosa a en Linu—. El català s’apaga pas.',
            translation:
              'Os três acendem as velas na chama, e depois a fogueira sobe para o céu. A vó Rosa canta uma canção antiga que a Joana também sabe. — Está vendo? — diz a Rosa ao Linu. — O catalão não se apaga.',
            ending: {
              tone: 'bom',
              title: 'A chama não se apaga',
              message:
                'Você ouviu a história do catalão na França: a escola que o proibia, os pais que deixaram de transmiti-lo e as escolas de imersão que o trouxeram de volta. E reparou no rossellonês da Rosa: “volia pas”, “s’apaga pas”, “me feia vergonya”.',
            },
          },
          final_neutro: {
            emoji: '👀',
            text: 'En Linu mira la foguera des d’un racó. La iaia Rosa i la Joana canten juntes, i ell entén poques paraules. L’any que ve, pensa, s’acostarà més.',
            translation:
              'Linu olha a fogueira de um canto. A vó Rosa e a Joana cantam juntas, e ele entende poucas palavras. Ano que vem, pensa, vai chegar mais perto.',
            ending: {
              tone: 'neutro',
              title: 'Da próxima vez, mais perto',
              message: 'A Flama del Canigó é para ser vivida de perto. No ano que vem, acenda a vela com elas!',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── L'ALGUER (ITÁLIA) ─────────────────────────────
  {
    code: 'ca-IT',
    country: 'ITA',
    kind: 'dialeto',
    speechLocale: 'ca-ES',
    ipa: ipaCaDe('ca-IT'),
    name: 'Alguerês (l’Alguer, Itália)',
    flag: '🇮🇹',
    summary:
      'Uma ilha de catalão na Sardenha: a fala de l’Alguer (Alghero), levada por colonos catalães em 1354 e cercada há mais de seiscentos anos pelo sardo e pelo italiano, que lhe deram muitas palavras e um som próprio. Hoje é língua de casa de cerca de um quarto da cidade.',
    card: {
      id: 'ca-it-c1',
      title: 'Uma cidade catalã na Sardenha',
      emoji: '🪸',
      history:
        'Em 1354, o rei Pere el Cerimoniós tomou l’Alguer, expulsou boa parte dos moradores sardos e repovoou a cidade com colonos da Catalunha, sobretudo da região de Tarragona e do Penedès. Vieram depois ondas de lígures e napolitanos. Depois da Guerra de Sucessão Espanhola, a Sardenha passou à Casa de Savoia (1720), o castelhano e depois o italiano viraram as línguas oficiais, e o catalão ficou como língua de casa. A lei italiana de 1999 reconheceu o catalão de l’Alguer como minoria linguística, e uma lei da Sardenha de 2018 permite o seu ensino e o seu uso na administração. Segundo a pesquisa de 2015, 88% dos moradores entendem o alguerês, metade sabe falá-lo, mas só 18,5% o usam no dia a dia, e quase nenhum pai jovem o fala com os filhos.',
      culture_tip:
        'As placas das ruas do centro histórico estão em italiano e em catalão. A cidade é famosa pelo coral vermelho, que deu à costa o nome de Riviera del Corallo, e pela lagosta “à catalã”, com tomate e cebola crus. Na noite de Natal, na catedral de Santa Maria, canta-se o Cant de la Sibil·la, um canto medieval que também sobrevive em Maiorca e em Valência. A cantora Franca Masu é uma das vozes que levaram a música em alguerês para fora da ilha.',
      grammar_why:
        'O alguerês é do bloco oriental, mas com muitos traços próprios: (1) nas átonas, “a” e “e” soam [a], e “o” e “u” soam [u]; (2) o “l” e o “d” entre vogais viram “r” (rotacismo, por influência do sardo): ala [ˈaɾa], escola [asˈkɔɾa]; (3) o “r” no fim da sílaba vira “l”: porta [ˈpɔlta]; (4) os artigos antigos “lo, los”; (5) a primeira pessoa do presente sem terminação: “jo parl”; (6) o imperfeito com “-v-” em todas as conjugações: “voliva” (queria); (7) possessivos antigos e próprios: “la tua”, “lo nòstron”; (8) palavras do sardo e do italiano.',
      grammar_examples: [
        ['Jo parl alguerès i italià.', 'Eu falo alguerês e italiano. (central: jo parlo)'],
        ['Lo pare voliva anar a pescar.', 'O pai queria ir pescar. (central: el pare volia)'],
        ['Almanco assaja la llagosta!', 'Pelo menos prova a lagosta! (central: almenys, tasta)'],
        ['La mare me baralla sempre.', 'A minha mãe sempre me dá bronca. (central: em renya)'],
      ],
      character_guide: [
        ['l, d → r', 'entre vogais, o “l” e o “d” soam “r”', 'ala [ˈaɾa], escola [asˈkɔɾa]'],
        ['r → l', 'o “r” no fim da sílaba soa “l”', 'porta [ˈpɔlta]'],
        ['v', 'o “v” é labiodental, diferente do “b”', 'vida, vi'],
        ['j, g', '“j” e “g” antes de “e” e “i” soam “dj”', 'jove, gent'],
      ],
    },
    pronunciation: [
      'Nas sílabas átonas, “a” e “e” soam [a], e “o” e “u” soam [u]: pare [ˈpaɾa], escola [asˈkɔɾa].',
      'O “l” e o “d” entre vogais viram um “r” brando, por influência do sardo: ala [ˈaɾa], escola [asˈkɔɾa].',
      'O “r” no fim da sílaba vira “l”: porta [ˈpɔlta].',
      'O “v” continua labiodental, como no português, e o “j” e o “g” antes de “e” e “i” soam “dj”: jove [ˈdʒɔva].',
      'O “e” tônico que vem do “e” fechado latino continua fechado, ao contrário do central.',
      'A melodia lembra a do italiano e a do sardo, as línguas com que o alguerês convive há séculos.',
    ],
    vocab: [
      ['el, els', 'lo, los', 'o, os (artigo)', 'o feminino é igual ao central: la, les'],
      ['jo parlo', 'jo parl', 'eu falo', 'a primeira pessoa do presente sem terminação'],
      ['volia', 'voliva', 'queria', 'o imperfeito com “-v-” em todas as conjugações'],
      ['el teu', 'lo tou', 'o teu', 'possessivo antigo; o feminino é “la tua”'],
      ['el nostre', 'lo nòstron', 'o nosso', 'forma própria do alguerês; também “vòstron” (vosso)'],
      ['tastar', 'assajar', 'provar (um sabor)', 'no central, “assajar” é ensaiar'],
      ['renyar', 'barallar', 'dar bronca', 'no central, “barallar-se” é brigar'],
      ['almenys', 'almanco', 'pelo menos', 'forma antiga, parente do castelhano “al menos”'],
      ['espatlla', 'coddu', 'ombro', 'do sardo'],
      ['camp', 'alboni', 'campo', 'do sardo'],
      ['-et, -eta', '-utxo, -eddu', 'sufixos de diminutivo', '“-eddu” vem do sardo'],
    ],
    stories: [
      {
        id: 'ca-h52',
        variant: 'ca-IT',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Corall i llagosta a l’Alguer',
        emoji: '🦞',
        summary: 'No porto de l’Alguer, Linu descobre placas em catalão no meio da Itália e conhece o pescador Tonino, que fala um catalão que soa a italiano.',
        cultural_context:
          'L’Alguer (Alghero), no noroeste da Sardenha, é a única cidade da Itália onde se fala catalão, trazido por colonos em 1354. As placas das ruas do centro estão em italiano e em catalão. A cidade vive do mar: o coral vermelho deu à costa o nome de Riviera del Corallo, e a lagosta “à catalã” é o prato mais famoso.',
        start: 'start',
        glossary: [
          ['corall', 'coral'],
          ['llagosta', 'lagosta'],
          ['lo, los', 'o, os (artigo do alguerês)'],
          ['jo parl', 'eu falo (alguerês)'],
          ['almanco', 'pelo menos'],
          ['assajar', 'provar (um sabor)'],
          ['voliva', 'queria (alguerês)'],
        ],
        nodes: {
          start: {
            emoji: '🪧',
            text: 'Linu arriba a l’Alguer, a Sardenya. Al centre històric veu un cartell amb dos noms: “Via Carlo Alberto” i, a sota, “Carrer Major”. —Català, a Itàlia? —diu sorprès.',
            translation:
              'Linu chega a l’Alguer, na Sardenha. No centro histórico, vê uma placa com dois nomes: “Via Carlo Alberto” e, embaixo, “Carrer Major”. — Catalão, na Itália? — diz, surpreso.',
            choices: [
              { text: 'Linu baixa al port a preguntar-ho.', translation: 'Linu desce até o porto para perguntar.', next: 'port' },
              {
                text: 'Linu pensa que el cartell és per als turistes de Barcelona.',
                translation: 'Linu acha que a placa é para os turistas de Barcelona.',
                wrong: 'A placa não é para turistas: o catalão é falado em l’Alguer desde 1354, quando chegaram os colonos catalães. É a língua da cidade, ao lado do italiano.',
              },
            ],
          },
          port: {
            emoji: '⚓',
            text: 'Al port, un pescador arregla les xarxes. Linu li pregunta en català: —Bon dia! Vostè parla català? El pescador riu: —Jo parl alguerès, que és lo català de l’Alguer! Me dic Tonino. Lo meu avi ja pescava aquí.',
            translation:
              'No porto, um pescador conserta as redes. Linu pergunta em catalão: — Bom dia! O senhor fala catalão? O pescador ri: — Eu falo alguerês, que é o catalão de l’Alguer! Eu me chamo Tonino. O meu avô já pescava aqui.',
            choices: [
              {
                text: '—“Jo parl”? A Barcelona diuen “jo parlo”.',
                translation: '— “Jo parl”? Em Barcelona dizem “jo parlo”.',
                next: 'parl',
              },
            ],
          },
          parl: {
            emoji: '🗣️',
            text: '—Aquí no posem res: jo parl, jo pesc, jo cant. I diem “lo” i “los”, com abans. —Tonino assenyala una barca—. Avui he pescat llagostes. Lo meu fill voliva vendre-les totes al restaurant, però una és per a tu. Almanco assaja-la!',
            translation:
              '— Aqui a gente não põe nada: jo parl, jo pesc, jo cant. E a gente diz “lo” e “los”, como antigamente. — O Tonino aponta para um barco. — Hoje eu pesquei lagostas. O meu filho queria vender todas para o restaurante, mas uma é para você. Pelo menos prova!',
            choices: [
              {
                text: '—Gràcies! Però què vol dir “assaja-la”?',
                translation: '— Obrigado! Mas o que quer dizer “assaja-la”?',
                next: 'assajar',
              },
              {
                text: 'Linu entén que ha d’assajar una cançó.',
                translation: 'Linu entende que tem de ensaiar uma música.',
                wrong: 'Em alguerês, “assajar” é “provar um sabor” (no central, “tastar”). O Tonino quer que o Linu prove a lagosta.',
              },
            ],
          },
          assajar: {
            emoji: '🦞',
            text: '—“Assajar” és “tastar”, com dieu vosaltres. A la catalana: tomàquet, ceba i oli, i res més! —A la tarda, la dona d’en Tonino cuina la llagosta. Quan Linu la tasta, tots esperen la seva opinió.',
            translation:
              '— “Assajar” é “tastar” (provar), como vocês dizem. À catalã: tomate, cebola e azeite, e mais nada! — À tarde, a mulher do Tonino cozinha a lagosta. Quando Linu prova, todos esperam a opinião dele.',
            choices: [
              { text: '—És la millor llagosta de la meva vida!', translation: '— É a melhor lagosta da minha vida!', next: 'final_bom' },
              { text: '—No m’agrada gaire el marisc, ho sento.', translation: '— Eu não gosto muito de frutos do mar, desculpe.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🪸',
            text: 'Tonino riu i li regala un corall petit: —Per a recordar l’Alguer! I quan tornis, parla’m en alguerès. Linu promet que la pròxima vegada dirà “jo parl”.',
            translation:
              'O Tonino ri e lhe dá um coralzinho de presente: — Para lembrar de l’Alguer! E quando voltar, fale comigo em alguerês. Linu promete que da próxima vez vai dizer “jo parl”.',
            ending: {
              tone: 'bom',
              title: 'Jo parl alguerès',
              message:
                'Você conheceu o catalão da Sardenha: o “jo parl” sem terminação, o artigo “lo”, o imperfeito “voliva”, o “almanco” e o “assajar” (provar). E viu que em l’Alguer o catalão está nas placas e no porto.',
            },
          },
          final_neutro: {
            emoji: '🍝',
            text: 'La dona d’en Tonino riu: —Cap problema! Almanco assaja la pasta. Linu menja un plat de pasta amb tomàquet i promet tornar.',
            translation:
              'A mulher do Tonino ri: — Sem problema! Pelo menos prova a massa. Linu come um prato de massa com tomate e promete voltar.',
            ending: {
              tone: 'neutro',
              title: 'Pelo menos a massa',
              message: 'Nem todo mundo gosta de lagosta, mas a conversa valeu: você aprendeu “almanco” e “assajar”. Na próxima, peça a receita!',
            },
          },
        },
      },
      {
        id: 'ca-h53',
        variant: 'ca-IT',
        level: 'B2.2',
        cefr: 'B2',
        title: 'El Cant de la Sibil·la',
        emoji: '🕯️',
        summary: 'Na noite de Natal, Linu vai com a senhora Maria e a neta dela, Giulia, ouvir o Cant de la Sibil·la na catedral de l’Alguer, e as duas falam do futuro do alguerês.',
        cultural_context:
          'O Cant de la Sibil·la é um canto medieval sobre o fim do mundo, cantado na noite de Natal. Sobreviveu em poucos lugares: Maiorca, alguns pontos de Valência e l’Alguer, onde é cantado na catedral de Santa Maria. A pesquisa de 2015 mostrou que, em l’Alguer, 88% entendem o catalão, mas só 3,6% dos pais jovens o falam com os filhos.',
        start: 'start',
        glossary: [
          ['Sibil·la', 'Sibila, profetisa que anuncia o fim do mundo no canto'],
          ['la nit de Nadal', 'a noite de Natal'],
          ['néta', 'neta'],
          ['me parlava', 'falava comigo (pronome pleno)'],
          ['barallar', 'dar bronca (alguerês)'],
          ['si + imperfeito do subjuntivo', 'se nós não falássemos…'],
          ['caldria que', 'seria preciso que'],
        ],
        nodes: {
          start: {
            emoji: '⛪',
            text: 'És la nit de Nadal. La senyora Maria, una veïna de setanta anys, porta en Linu i la seva néta Giulia a la catedral de Santa Maria. —Aquesta nit sentiràs una cosa que no hi és en tot Itàlia —diu la Maria—. Lo Cant de la Sibil·la.',
            translation:
              'É noite de Natal. A senhora Maria, uma vizinha de setenta anos, leva o Linu e a neta dela, Giulia, à catedral de Santa Maria. — Hoje à noite você vai ouvir uma coisa que não existe em nenhum outro lugar da Itália — diz a Maria. — O Canto da Sibila.',
            choices: [
              { text: '—Què és la Sibil·la?', translation: '— O que é a Sibila?', next: 'sibil' },
            ],
          },
          sibil: {
            emoji: '🕯️',
            text: '—Una profetessa que anuncia el judici final —explica la Maria—. És un cant de l’Edat Mitjana, i a l’Alguer el cantem en català des de fa segles, com a Mallorca. —Quan s’apaguen els llums, una veu sola canta a la penombra. La Giulia xiuxiueja a en Linu: —Jo l’entenc tot, però me costa parlar-lo.',
            translation:
              '— Uma profetisa que anuncia o juízo final — explica a Maria. — É um canto da Idade Média, e em l’Alguer a gente canta em catalão há séculos, como em Maiorca. — Quando as luzes se apagam, uma voz sozinha canta na penumbra. A Giulia cochicha para o Linu: — Eu entendo tudo, mas tenho dificuldade de falar.',
            choices: [
              {
                text: 'Després del cant, Linu pregunta a la Giulia per què li costa parlar-lo.',
                translation: 'Depois do canto, Linu pergunta à Giulia por que ela tem dificuldade de falar.',
                next: 'giulia',
              },
              {
                text: 'Linu pensa que la Giulia no entén el català.',
                translation: 'Linu acha que a Giulia não entende catalão.',
                wrong: 'Ela entende tudo (“l’entenc tot”); o difícil é falar. É o caso da maioria em l’Alguer: quase todos entendem, mas só metade sabe falar.',
              },
            ],
          },
          giulia: {
            emoji: '👧',
            text: '—Els meus pares sempre m’han parlat en italià —diu la Giulia—. Només la iaia me parlava en alguerès, i quan jo responia en italià, me barallava! —La Maria riu—. Si no barallés, a casa tot seria en italià.',
            translation:
              '— Os meus pais sempre falaram comigo em italiano — diz a Giulia. — Só a vovó falava comigo em alguerês e, quando eu respondia em italiano, ela me dava bronca! — A Maria ri. — Se eu não desse bronca, em casa seria tudo em italiano.',
            choices: [
              {
                text: '—Barallar? Vos barallàveu?',
                translation: '— Barallar? Vocês brigavam?',
                wrong: 'Em alguerês, “barallar” é “dar bronca” (no central, “renyar”). A avó não brigava com a Giulia: só dava bronca quando ela respondia em italiano.',
              },
              {
                text: '—I ara, Giulia, el parlaràs amb els teus fills?',
                translation: '— E agora, Giulia, você vai falar alguerês com os seus filhos?',
                next: 'futur',
              },
            ],
          },
          futur: {
            emoji: '🌱',
            text: 'La Giulia s’ho pensa. —Abans deia que no. Però des que hi ha la llei del 2018, a l’escola fem hores d’alguerès, i m’agrada. Caldria que els joves el parléssim entre nosaltres, no només amb els avis. Si no, d’aquí a cinquanta anys ningú no cantarà la Sibil·la.',
            translation:
              'A Giulia pensa um pouco. — Antes eu dizia que não. Mas desde que existe a lei de 2018, a gente tem aulas de alguerês na escola, e eu gosto. Seria preciso que nós, os jovens, falássemos entre nós, não só com os avós. Senão, daqui a cinquenta anos, ninguém vai cantar a Sibila.',
            choices: [
              {
                text: '—Llavors comença ara: parla’m en alguerès!',
                translation: '— Então comece agora: fale comigo em alguerês!',
                next: 'final_bom',
              },
              {
                text: '—Bé, l’italià també és bonic.',
                translation: '— Bom, o italiano também é bonito.',
                next: 'final_neutro',
              },
            ],
          },
          final_bom: {
            emoji: '🎄',
            text: 'La Giulia riu i, pel camí de tornada, li parla en alguerès tota l’estona, una mica a poc a poc. La Maria camina darrere, contenta. A casa, la Giulia diu: —Bon Nadal, Linu! L’any que ve, potser la Sibil·la la cant jo.',
            translation:
              'A Giulia ri e, no caminho de volta, fala em alguerês com ele o tempo todo, um pouco devagar. A Maria vem atrás, contente. Em casa, a Giulia diz: — Feliz Natal, Linu! Ano que vem, quem sabe quem canta a Sibila sou eu.',
            ending: {
              tone: 'bom',
              title: 'Uma voz nova para a Sibila',
              message:
                'Você ouviu o Cant de la Sibil·la e entendeu a situação do alguerês: todos entendem, poucos falam, quase ninguém o passa aos filhos. E reconheceu as formas de lá: lo Cant, me parlava, me barallava.',
            },
          },
          final_neutro: {
            emoji: '🌙',
            text: 'La Giulia arronsa les espatlles: —Sí, és clar. La Maria no diu res, però mira la catedral amb tristesa. Linu pensa que potser no ha dit el que calia.',
            translation:
              'A Giulia dá de ombros: — É, claro. A Maria não diz nada, mas olha a catedral com tristeza. Linu pensa que talvez não tenha dito a coisa certa.',
            ending: {
              tone: 'neutro',
              title: 'O que faltou dizer',
              message: 'O italiano é bonito, mas o alguerês só sobrevive se os jovens o falarem. Na próxima, incentive a Giulia!',
            },
          },
        },
      },
    ],
  },
];
