import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_IS } from './pronuncia';

/**
 * O islandês padrão, com a pronúncia de Reykjavík, e o islandês ocidental (vesturíslenska), dos
 * descendentes dos emigrantes que foram para o Canadá entre 1870 e 1914. A escrita é a mesma; a voz das
 * duas é a da Islândia.
 */
export const VARIANTS_IS: LanguageVariant[] = [
  {
    code: 'is-IS',
    country: 'ISL',
    speechLocale: 'is-IS',
    ipa: (t) => lexiconIpa(t, IPA_IS),
    name: 'Islandês da Islândia',
    flag: '🇮🇸',
    summary: 'O padrão do app: o islandês padrão, com a pronúncia do sul do país, a de Reykjavík, como referência.',
    card: {
      id: 'is-is-c1',
      title: 'Por que o islandês padrão?',
      emoji: '🇮🇸',
      history:
        'A Islândia foi povoada entre cerca de 870 e 930, sobretudo por gente vinda da Noruega, e em 930 os colonos criaram o Alþingi, a assembleia que se reunia ao ar livre em Þingvellir. Nos séculos XIII e XIV, os islandeses escreveram as sagas, e a língua escrita mudou tão pouco desde então que um estudante de hoje consegue ler esses textos com algum esforço. Do século XIX em diante, um forte movimento purista trocou empréstimos estrangeiros, sobretudo dinamarqueses, por palavras criadas com raízes islandesas: “tölva” (computador), “sími” (telefone). Hoje a língua tem cerca de 350 mil falantes nativos, e o Instituto Árni Magnússon de Estudos Islandeses cuida da ortografia e do vocabulário novo. Desde 1996, o dia 16 de novembro, aniversário do poeta Jónas Hallgrímsson, é o Dia da Língua Islandesa.',
      culture_tip:
        'Na Islândia, quase ninguém tem sobrenome de família: a pessoa leva o nome do pai (às vezes da mãe) mais “-son” (filho) ou “-dóttir” (filha). O filho de Jón é Jónsson; a filha, Jónsdóttir. Por isso todo mundo se trata pelo primeiro nome, do vizinho ao presidente, e até a lista telefônica é organizada pelo primeiro nome. Duas frases que explicam o país: “Þetta reddast” (vai dar tudo certo, de algum jeito) e “Takk fyrir mig” (obrigado por me receber), dita ao sair da casa de alguém depois de comer. E o ponto de encontro de todo mundo é a piscina pública aquecida, a “sundlaug”.',
      grammar_why:
        'Quatro marcas do islandês que o app ensina: (1) quatro casos, nominativo, acusativo, dativo e genitivo, que mudam substantivos, adjetivos, artigos e pronomes: “hestur, hest, hesti, hests”; (2) três gêneros, com o artigo definido grudado no fim: “hestur → hesturinn” (o cavalo), “kona → konan” (a mulher), “barn → barnið” (a criança); (3) ordem V2: o verbo conjugado é o segundo elemento da oração principal: “Í dag fer ég til Akureyrar”; (4) sujeitos em dativo ou acusativo com certos verbos: “Mér er kalt” (estou com frio, literalmente “a mim está frio”), “Mig langar í kaffi” (estou com vontade de café). Na pronúncia, a tônica cai sempre na primeira sílaba, e o “pp”, o “tt” e o “kk” vêm com um sopro antes: a pré-aspiração de “kappi” [ˈkʰaʰpɪ].',
      grammar_examples: [
        ['Í dag fer ég til Akureyrar.', 'Hoje eu vou para Akureyri.'],
        ['Ég á hest. Hesturinn er brúnn.', 'Eu tenho um cavalo. O cavalo é marrom.'],
        ['Mér er kalt. Mig langar í kaffi.', 'Estou com frio. Estou com vontade de um café.'],
        ['Hún heitir Anna Jónsdóttir.', 'Ela se chama Anna Jónsdóttir.'],
        ['Þetta reddast!', 'Vai dar tudo certo!'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'is-CA',
    country: 'CAN',
    speechLocale: 'is-IS',
    ipa: (t) => lexiconIpa(t, IPA_IS),
    name: 'Islandês ocidental (Canadá)',
    flag: '🇨🇦',
    summary:
      'A vesturíslenska, o islandês dos descendentes dos emigrantes que foram para a América do Norte entre 1870 e 1914, sobretudo para Manitoba, no Canadá: a mesma língua, com empréstimos do inglês, hoje falada por poucas pessoas, quase todas idosas.',
    card: {
      id: 'is-ca-c1',
      title: 'Os islandeses do lago Winnipeg',
      emoji: '🛶',
      history:
        'Entre 1870 e 1914, calcula-se que entre 15 e 20 mil islandeses emigraram para a América do Norte, uma parte grande da população do país naquela época (os números variam conforme a fonte). Fugiam de invernos duríssimos, da pobreza e da falta de terra; em 1875, a erupção do vulcão Askja cobriu de cinzas as fazendas do leste e empurrou muita gente para a viagem. Naquele mesmo ano, um grupo fundou a Nova Islândia (Nýja-Ísland) na margem oeste do lago Winnipeg, em Manitoba, com o povoado de Gimli, nome tirado da mitologia nórdica. O primeiro inverno foi duro, e em 1876 e 1877 uma epidemia de varíola matou muitos colonos. Mesmo assim, a comunidade criou escolas, igrejas e jornais: o Heimskringla (1886) e o Lögberg (1888), que em 1959 se fundiram no Lögberg-Heimskringla. Muitos imigrantes se mudaram depois para Winnipeg, para outras províncias do Canadá e para os Estados Unidos.',
      culture_tip:
        'Todo ano, no primeiro fim de semana de agosto, Gimli recebe o Íslendingadagurinn, o Dia dos Islandeses: a festa começou em Winnipeg em 1890 e acontece em Gimli desde 1932. Tem desfile, música e o discurso da Fjallkonan, a Senhora da Montanha, a figura que simboliza a Islândia. Na mesa, não pode faltar a vínarterta, um bolo de várias camadas com recheio de ameixa, que as famílias guardaram como herança e que hoje é mais típico do Canadá do que da própria Islândia. Nos nomes, a tradição mudou: os patronímicos viraram sobrenomes fixos de família, muitas vezes com grafia inglesa, como Johnson ou Thorsteinson.',
      grammar_why:
        'A gramática é a do islandês padrão, com os quatro casos e os três gêneros. O que marca o islandês ocidental é o contato com o inglês: palavras emprestadas que ganham gênero e terminações islandesas, decalques e a troca de língua no meio da frase. Os estudos também registram, na fala de muitos falantes, casos mais simplificados, como o dativo no lugar do acusativo ou do genitivo. Uma ressalva importante: hoje quase só os mais velhos ainda falam islandês em casa, o uso varia muito de família para família, e as palavras abaixo aparecem nos estudos, mas nem todos os falantes as usam. O app ensina o islandês padrão; esta variante mostra como ele viveu, e ainda vive, do outro lado do oceano.',
      grammar_examples: [
        ['Langafi minn kom frá Íslandi árið 1876.', 'Meu bisavô veio da Islândia em 1876.'],
        ['Við búum á Gimli, við Winnipegvatn.', 'A gente mora em Gimli, perto do lago Winnipeg.'],
        ['Amma mín talaði alltaf íslensku við okkur.', 'Minha avó sempre falava islandês com a gente.'],
        ['Komdu á Íslendingadaginn í ágúst!', 'Venha para o Dia dos Islandeses em agosto!'],
        ['Viltu sneið af vínartertu?', 'Você quer uma fatia de vínarterta?'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A escrita é a do islandês padrão, e a voz do app é a da Islândia. Os falantes que restam aprenderam a língua em casa, com os pais e os avós, e usaram o inglês na escola e no trabalho; por isso a melodia e o “r” costumam soar mais ingleses.',
      'As palavras emprestadas do inglês seguem a regra islandesa da tônica na primeira sílaba e recebem terminações islandesas.',
      'A pronúncia varia muito de uma pessoa para outra: traços como a pré-aspiração e o “ll” [tl̥] de “fjall” podem ser mais fracos na fala de alguns, mais fortes na de outros.',
      'Nos sobrenomes, a grafia inglesa venceu: o “þ” virou “th”, e o “ð” costuma virar “d”: “Þorsteinsson” virou “Thorsteinson”; “Guðmundsson”, “Goodman” ou “Gudmundson”.',
    ],
    vocab: [
      ['bíll', 'kar', 'carro', 'do inglês “car”; registrado nos estudos, ao lado do padrão “bíll”; o uso variava de família para família'],
      ['girðing', 'fens', 'cerca', 'do inglês “fence”, com gênero e terminações islandesas; registrado nos estudos, a forma exata varia'],
      ['vandræði', 'trobbl', 'problema, encrenca', 'do inglês “trouble”; registrado nos estudos, a grafia varia'],
      ['önnum kafinn', 'bísí', 'ocupado', 'do inglês “busy”; registrado nos estudos, a grafia varia'],
      ['búð; verslun', 'stór', 'loja', 'do inglês “store”; cuidado: no islandês padrão, “stór” quer dizer grande'],
      ['lest', 'trein', 'trem', 'do inglês “train”; registrado nos estudos, a grafia varia'],
      ['Vestur-Íslendingur', 'Vestur-Íslendingur', 'islandês do oeste', 'o descendente dos emigrantes que foram para a América do Norte'],
      ['Nýja-Ísland', 'Nýja-Ísland', 'a Nova Islândia', 'a colônia fundada em 1875 na margem oeste do lago Winnipeg'],
      ['Winnipegvatn', 'Winnipegvatn', 'o lago Winnipeg', 'onde os colonos pescavam, também no inverno, pelo gelo'],
      ['Íslendingadagurinn', 'Íslendingadagurinn', 'o Dia dos Islandeses', 'a festa de agosto, em Gimli desde 1932'],
      ['Fjallkonan', 'Fjallkonan', 'a Senhora da Montanha', 'a figura que simboliza a Islândia e faz o discurso da festa'],
      ['vínarterta', 'vínarterta', 'bolo em camadas com recheio de ameixa', 'o doce símbolo dos islandeses do Canadá'],
      ['föðurnafn', 'ættarnafn', 'patronímico; sobrenome de família', 'no Canadá, o patronímico virou sobrenome fixo, passado de pai para filho: “Jónsson” virou “Johnson”'],
    ],
    stories: [
      {
        id: 'is-ca-h1',
        variant: 'is-CA',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Á Gimli',
        emoji: '🗿',
        summary: 'Linu visita a amiga Guðrún em Gimli, no Canadá, e conhece a história da Nova Islândia, a estátua do viking e a vínarterta.',
        cultural_context:
          'Gimli fica na margem oeste do lago Winnipeg, em Manitoba. Foi fundada em 1875 por imigrantes islandeses, como centro da Nova Islândia (Nýja-Ísland), e o nome vem da mitologia nórdica. A estátua do viking, erguida em 1967, no centenário do Canadá, virou o símbolo da cidade.',
        start: 'start',
        glossary: [
          ['lítils bæjar', 'de uma cidadezinha (genitivo)'],
          ['bréf landnemanna', 'as cartas dos colonos (genitivo plural)'],
          ['Hvað viltu gera?', 'O que você quer fazer?'],
          ['Sjáðu!', 'Olhe! (imperativo)'],
          ['við skulum…', 'vamos… (convite)'],
          ['þú verður að smakka', 'você tem que provar'],
          ['ég ætla að fá…', 'eu vou querer… (futuro com “ætla”)'],
          ['þú mátt ekki missa af honum', 'você não pode perder'],
        ],
        nodes: {
          start: {
            emoji: '🏘️',
            text: 'Linu er kominn til Gimli, lítils bæjar við vesturströnd Winnipegvatns í Kanada. Vinkona hans, Guðrún, bíður á aðalgötunni. “Velkominn til Nýja-Íslands! Langafi minn fæddist hér, en foreldrar hans komu frá Íslandi. Hvað viltu gera fyrst?”',
            translation:
              'Linu chegou a Gimli, uma cidadezinha na margem oeste do lago Winnipeg, no Canadá. A amiga dele, Guðrún, está esperando na rua principal. “Bem-vindo à Nova Islândia! Meu bisavô nasceu aqui, mas os pais dele vieram da Islândia. O que você quer fazer primeiro?”',
            choices: [
              { text: '“Mig langar að sjá víkingastyttuna!”', translation: '“Quero ver a estátua do viking!”', next: 'stytta' },
              { text: '“Getum við farið á safnið?”', translation: '“A gente pode ir ao museu?”', next: 'safn' },
              {
                text: '“Þá fæddist langafi þinn á Íslandi?”',
                translation: '“Então seu bisavô nasceu na Islândia?”',
                wrong: 'Não: ele nasceu ali mesmo, em Gimli (“fæddist hér”); quem veio da Islândia foram os pais dele.',
              },
            ],
          },
          stytta: {
            emoji: '🗿',
            text: 'Í litlum garði stendur stór stytta af víkingi. “Sjáðu, hvað hann er stór!” segir Guðrún. “Styttan var reist árið 1967, á hundrað ára afmæli Kanada. Komdu, við skulum taka mynd!”',
            translation:
              'Num pequeno parque há uma grande estátua de um viking. “Olhe como ele é grande!”, diz Guðrún. “A estátua foi erguida em 1967, no centenário do Canadá. Vem, vamos tirar uma foto!”',
            choices: [{ text: 'Eftir myndatökuna fara þau á safnið.', translation: 'Depois da foto, eles vão ao museu.', next: 'safn' }],
          },
          safn: {
            emoji: '🏛️',
            text: 'Á safninu sér Linu gamlar ljósmyndir og bréf landnemanna. Guðrún útskýrir: “Fyrstu landnemarnir komu hingað haustið 1875. Fyrsti veturinn var harður, og árið eftir kom bólusótt. En fólkið gafst ekki upp: það byggði hús, skóla og kirkjur.”',
            translation:
              'No museu, Linu vê fotografias antigas e cartas dos colonos. Guðrún explica: “Os primeiros colonos chegaram aqui no outono de 1875. O primeiro inverno foi duro, e no ano seguinte veio a varíola. Mas o povo não desistiu: construiu casas, escolas e igrejas.”',
            choices: [
              { text: '“Hvað ætlar þú að sýna mér næst?”', translation: '“O que você vai me mostrar agora?”', next: 'kaffihus' },
              {
                text: '“Þá hafa þau örugglega farið strax aftur heim.”',
                translation: '“Então eles certamente voltaram logo para casa.”',
                wrong: 'Pelo contrário: o povo não desistiu (“gafst ekki upp”) e construiu casas, escolas e igrejas.',
              },
            ],
          },
          kaffihus: {
            emoji: '☕',
            text: 'Guðrún fer með Linu á lítið kaffihús. “Hér verður þú að smakka vínartertu”, segir hún. “Þetta er kaka með sveskjusultu á milli laganna. Íslendingar hér í Kanada hafa bakað hana í meira en hundrað ár. Viltu kaffi með?”',
            translation:
              'Guðrún leva Linu a um cafezinho. “Aqui você tem que provar a vínarterta”, diz ela. “É um bolo com geleia de ameixa entre as camadas. Os islandeses aqui do Canadá fazem esse bolo há mais de cem anos. Quer um café junto?”',
            choices: [
              { text: '“Já, ég ætla að fá eina sneið og kaffi, takk!”', translation: '“Sim, vou querer uma fatia e um café, obrigado!”', next: 'final_kaffi' },
              { text: '“Ég ætla að fá mér alla kökuna!”', translation: '“Eu vou querer o bolo inteiro!”', next: 'final_kaka' },
            ],
          },
          final_kaffi: {
            emoji: '👵',
            text: 'Við næsta borð situr gömul kona. Hún heyrir þau tala íslensku og brosir: “Það er gaman að heyra íslensku! Ég lærði hana hjá ömmu minni.” Svo bætir hún við: “Komdu aftur í ágúst, þá höldum við Íslendingadaginn. Þú mátt ekki missa af honum!”',
            translation:
              'Na mesa ao lado está sentada uma senhora. Ela ouve os dois falando islandês e sorri: “Que bom ouvir islandês! Eu aprendi com a minha avó.” Depois ela acrescenta: “Volte em agosto, que é quando a gente celebra o Dia dos Islandeses. Você não pode perder!”',
            ending: {
              tone: 'bom',
              title: 'Vínarterta e islandês',
              message: 'Você acompanhou o genitivo (“lítils bæjar”, “bréf landnemanna”), os modais (“verður að”, “mátt ekki”, “getum”), o futuro com “ætla” e o imperativo (“Sjáðu!”, “Komdu!”).',
            },
          },
          final_kaka: {
            emoji: '🍰',
            text: 'Linu borðar fjórar sneiðar af vínartertu. Þá verður hann svo saddur að hann sofnar í stólnum. “Vaknaðu, Linu!” hlær Guðrún. “Við ætluðum að ganga niður að vatninu!”',
            translation:
              'Linu come quatro fatias de vínarterta. Aí fica tão cheio que dorme na cadeira. “Acorda, Linu!”, ri Guðrún. “A gente ia descer até o lago!”',
            ending: { tone: 'neutro', title: 'Bolo demais', message: 'A vínarterta é ótima, mas o lago Winnipeg também esperava por você. Da próxima vez, uma fatia só!' },
          },
        },
      },
      {
        id: 'is-ca-h2',
        variant: 'is-CA',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Á Winnipegvatni',
        emoji: '🎣',
        summary: 'Linu passa uma manhã pescando no lago Winnipeg com Stefán, o avô de Guðrún, e ouve histórias dos colonos islandeses.',
        cultural_context:
          'O lago Winnipeg é um dos maiores lagos de água doce do Canadá. Os colonos islandeses da Nova Islândia viviam em boa parte da pesca, também no inverno, com redes lançadas por buracos no gelo. A grande ilha do lago, que em inglês se chama Hecla, em homenagem ao vulcão Hekla, era chamada pelos colonos de Mikley, a ilha grande.',
        start: 'start',
        glossary: [
          ['eitt af stærstu vötnum Kanada', 'um dos maiores lagos do Canadá (superlativo)'],
          ['miklu stærra en', 'muito maior que (comparativo)'],
          ['fiskimaður sem hefur veitt…', 'um pescador que pesca… (relativo “sem”)'],
          ['sá stærsti sem ég hef veitt', 'o maior que eu já pesquei'],
          ['Afi minn sagði að veturnir hefðu verið…', 'Meu avô dizia que os invernos eram… (discurso indireto)'],
          ['sléttara, kaldari', 'mais liso, mais frio'],
          ['netið', 'a rede'],
          ['sleipari en hann hélt', 'mais escorregadio do que ele pensava'],
        ],
        nodes: {
          start: {
            emoji: '⛵',
            text: 'Snemma morguns fer Linu með Stefáni, afa Guðrúnar, niður að höfninni á Gimli. Stefán er gamall fiskimaður sem hefur veitt á vatninu í fimmtíu ár. “Winnipegvatn er eitt af stærstu vötnum Kanada”, segir hann. “Það er miklu stærra en Þingvallavatn, stærsta náttúrulega stöðuvatn Íslands. Eigum við að sigla út á vatnið eða ganga meðfram ströndinni?”',
            translation:
              'De manhã cedo, Linu desce até o porto de Gimli com Stefán, o avô de Guðrún. Stefán é um velho pescador que pesca no lago há cinquenta anos. “O lago Winnipeg é um dos maiores lagos do Canadá”, diz ele. “É muito maior que o Þingvallavatn, o maior lago natural da Islândia. A gente sai de barco pelo lago ou caminha pela margem?”',
            choices: [
              { text: '“Siglum út á vatnið!”', translation: '“Vamos sair de barco!”', next: 'batur' },
              { text: '“Göngum meðfram ströndinni.”', translation: '“Vamos caminhar pela margem.”', next: 'strond' },
              {
                text: 'Linu segir að Winnipegvatn sé minna en Þingvallavatn.',
                translation: 'Linu diz que o lago Winnipeg é menor que o Þingvallavatn.',
                wrong: 'Stefán acabou de dizer o contrário: o lago Winnipeg é muito maior (“miklu stærra”) que o Þingvallavatn.',
              },
            ],
          },
          batur: {
            emoji: '🏝️',
            text: 'Þeir sigla út á vatnið. Vatnið er sléttara en í gær, en vindurinn er kaldari. Stefán bendir á stóra eyju: “Landnemarnir kölluðu hana Mikley, en á ensku heitir hún Hecla, eftir eldfjallinu Heklu. Þar bjuggu líka íslenskir landnemar.”',
            translation:
              'Eles saem de barco pelo lago. A água está mais lisa que ontem, mas o vento está mais frio. Stefán aponta para uma ilha grande: “Os colonos a chamavam de Mikley, mas em inglês ela se chama Hecla, por causa do vulcão Hekla. Lá também viviam colonos islandeses.”',
            choices: [{ text: 'Stefán stöðvar bátinn við netið sitt.', translation: 'Stefán para o barco perto da rede dele.', next: 'net' }],
          },
          strond: {
            emoji: '❄️',
            text: 'Þeir ganga meðfram ströndinni. Stefán segir frá: “Afi minn sagði að veturnir hérna hefðu verið kaldari en á Íslandi. Á veturna veiddu menn fisk í gegnum ísinn.” Svo fara þeir um borð í bátinn hans, sem liggur við bryggjuna.',
            translation:
              'Eles caminham pela margem. Stefán conta: “Meu avô dizia que os invernos aqui eram mais frios que na Islândia. No inverno, os homens pescavam pelo gelo.” Depois eles saem no barco dele, que está no cais.',
            choices: [{ text: 'Þeir sigla að netinu hans Stefáns.', translation: 'Eles vão de barco até a rede do Stefán.', next: 'net' }],
          },
          net: {
            emoji: '🐟',
            text: 'Stefán dregur netið upp. Í því eru margir fiskar, og einn er stærri en allir hinir. “Þetta er sá stærsti sem ég hef veitt í ár!” segir hann og hlær. “Hvað eigum við að gera við hann?”',
            translation:
              'Stefán puxa a rede. Nela há muitos peixes, e um é maior que todos os outros. “Este é o maior que eu pesquei este ano!”, diz ele, rindo. “O que a gente faz com ele?”',
            choices: [
              { text: '“Gefum Guðrúnu fiskinn! Hún eldar best af öllum.”', translation: '“Vamos dar para a Guðrún! Ela é quem cozinha melhor.”', next: 'final_matur' },
              { text: '“Ég ætla að halda á honum sjálfur!”', translation: '“Eu mesmo vou segurar o peixe!”', next: 'final_fiskur' },
              {
                text: '“Þetta er minnsti fiskurinn í netinu.”',
                translation: '“Esse é o menor peixe da rede.”',
                wrong: 'Pelo contrário: é o maior de todos (“stærri en allir hinir”).',
              },
            ],
          },
          final_matur: {
            emoji: '🍽️',
            text: 'Um kvöldið eldar Guðrún fiskinn. Stefán segir henni að Linu hafi hjálpað honum með netið. “Hann er besti aðstoðarmaður sem ég hef haft”, bætir hann við. Linu er stoltari en nokkru sinni fyrr.',
            translation:
              'À noite, Guðrún prepara o peixe. Stefán conta para ela que Linu o ajudou com a rede. “Ele é o melhor ajudante que eu já tive”, acrescenta. Linu está mais orgulhoso do que nunca.',
            ending: {
              tone: 'bom',
              title: 'O melhor ajudante do lago',
              message: 'Você acompanhou o comparativo e o superlativo (“stærra”, “kaldari”, “stærsta”, “besti”), os relativos com “sem” e o discurso indireto (“Afi minn sagði að…”, “Stefán segir henni að…”).',
            },
          },
          final_fiskur: {
            emoji: '💦',
            text: 'Linu tekur fiskinn í fangið, en fiskurinn er sleipari en hann hélt. Hann rennur úr höndunum á Linu og stekkur aftur út í vatnið. “Jæja”, segir Stefán og brosir, “hann var of stór fyrir þig.”',
            translation:
              'Linu pega o peixe nos braços, mas o peixe é mais escorregadio do que ele pensava. Ele escapa das mãos do Linu e pula de volta para o lago. “Bom”, diz Stefán, sorrindo, “ele era grande demais para você.”',
            ending: { tone: 'neutro', title: 'O peixe que fugiu', message: 'O maior peixe do ano voltou para o lago. Da próxima vez, deixe o pescador segurar!' },
          },
        },
      },
      {
        id: 'is-ca-h3',
        variant: 'is-CA',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Íslendingadagurinn',
        emoji: '🎉',
        summary: 'Linu recebe um convite formal para o Dia dos Islandeses, em Gimli, responde por e-mail e, na festa, descobre o que aconteceu com os patronímicos no Canadá.',
        cultural_context:
          'O Íslendingadagurinn, o Dia dos Islandeses, é celebrado desde 1890 e, desde 1932, em Gimli, no primeiro fim de semana de agosto. O ponto alto é o discurso da Fjallkonan, a Senhora da Montanha, que simboliza a Islândia. No Canadá, os patronímicos islandeses viraram sobrenomes fixos, muitas vezes com grafia inglesa.',
        start: 'start',
        glossary: [
          ['Heill og sæll / Heil og sæl', 'Prezado / Prezada (saudação formal, para homem e para mulher)'],
          ['hér með', 'por meio desta'],
          ['Vinsamlegast staðfestu…', 'Por favor, confirme…'],
          ['Virðingarfyllst', 'Atenciosamente'],
          ['fyrir hönd nefndarinnar', 'em nome da comissão'],
          ['ættarnafn', 'sobrenome de família'],
          ['föðurnafn', 'patronímico'],
          ['að þúa', 'tratar alguém por “þú” (você)'],
        ],
        nodes: {
          start: {
            emoji: '📧',
            text: 'Linu fær tölvupóst: “Heill og sæll, Linu. Íslendingadagsnefndin býður þér hér með á hátíðina á Gimli fyrstu helgina í ágúst. Vinsamlegast staðfestu komu þína fyrir 20. júlí. Virðingarfyllst, fyrir hönd nefndarinnar, Ragnheiður Einarsdóttir.”',
            translation:
              'Linu recebe um e-mail: “Prezado Linu, a comissão do Dia dos Islandeses o convida, por meio desta, para a festa em Gimli, no primeiro fim de semana de agosto. Por favor, confirme sua presença até 20 de julho. Atenciosamente, em nome da comissão, Ragnheiður Einarsdóttir.”',
            choices: [
              {
                text: '“Heil og sæl, Ragnheiður. Ég þakka kærlega fyrir boðið og staðfesti hér með komu mína. Bestu kveðjur, Linu.”',
                translation: '“Prezada Ragnheiður, agradeço muito o convite e confirmo, por meio desta, a minha presença. Um abraço, Linu.”',
                next: 'hatid',
              },
              { text: '“Hæ! Ég kem pottþétt! Bless!”', translation: '“Oi! Vou com certeza! Tchau!”', next: 'svar' },
              {
                text: 'Linu heldur að hátíðin sé í desember.',
                translation: 'Linu acha que a festa é em dezembro.',
                wrong: 'O e-mail diz outra coisa: a festa é no primeiro fim de semana de agosto (“fyrstu helgina í ágúst”).',
              },
            ],
          },
          svar: {
            emoji: '✍️',
            text: 'Guðrún les svarið og hlær. “Þetta er boð frá nefnd, Linu. Þá skrifar maður aðeins formlegra: ‘Heil og sæl’, ‘ég þakka fyrir boðið’ og ‘bestu kveðjur’.” Linu skrifar nýtt svar, og nokkrum vikum síðar fer hann á hátíðina.',
            translation:
              'Guðrún lê a resposta e ri. “É um convite de uma comissão, Linu. Aí a gente escreve de um jeito um pouco mais formal: ‘Prezada’, ‘agradeço o convite’ e ‘um abraço’.” Linu escreve uma nova resposta e, algumas semanas depois, vai para a festa.',
            choices: [{ text: 'Linu fer á Íslendingadaginn.', translation: 'Linu vai ao Dia dos Islandeses.', next: 'hatid' }],
          },
          hatid: {
            emoji: '🎪',
            text: 'Á hátíðinni er skrúðganga, tónlist og fánar alls staðar. Kona í íslenskum hátíðarbúningi gengur upp á sviðið. “Þetta er Fjallkonan”, hvíslar Guðrún. “Hún flytur ávarp á hverri hátíð. Íslendingadagurinn hefur verið haldinn hér á Gimli síðan 1932.”',
            translation:
              'Na festa há desfile, música e bandeiras por toda parte. Uma mulher com um traje de festa islandês sobe ao palco. “Essa é a Fjallkonan, a Senhora da Montanha”, sussurra Guðrún. “Ela faz um discurso em toda festa. O Dia dos Islandeses é celebrado aqui em Gimli desde 1932.”',
            choices: [
              { text: 'Linu hlustar á ávarpið.', translation: 'Linu escuta o discurso.', next: 'nofn' },
              { text: '“Förum frekar í matartjaldið!”', translation: '“Vamos antes para a tenda de comida!”', next: 'final_tjald' },
            ],
          },
          nofn: {
            emoji: '🤝',
            text: 'Eftir ávarpið kemur eldri maður til þeirra. “Góðan dag. Ég heiti Bill Thorsteinson”, segir hann á hægri og vandaðri íslensku. “Langafi minn hét Jón Þorsteinsson. Hér í Kanada varð föðurnafnið hans að ættarnafni fjölskyldunnar. Á Íslandi hefði ég borið föðurnafn eftir pabba mínum.”',
            translation:
              'Depois do discurso, um senhor se aproxima deles. “Bom dia. Eu me chamo Bill Thorsteinson”, diz ele, num islandês lento e cuidadoso. “Meu bisavô se chamava Jón Þorsteinsson. Aqui no Canadá, o patronímico dele virou o sobrenome da família. Na Islândia, eu teria um patronímico com o nome do meu pai.”',
            choices: [
              { text: '“Komdu sæll, Bill. Gaman að kynnast þér.”', translation: '“Olá, Bill. Prazer em conhecer você.”', next: 'final_bill' },
              { text: '“Gaman að kynnast yður, herra Thorsteinson.”', translation: '“Muito prazer em conhecê-lo, senhor Thorsteinson.”', next: 'herra' },
              {
                text: '“Þá heitir pabbi þinn Jón, er það ekki?”',
                translation: '“Então seu pai se chama Jón, não é?”',
                wrong: 'Não: Jón era o bisavô. No Canadá, “Thorsteinson” virou sobrenome fixo e passou de geração em geração, sem mudar com o nome do pai.',
              },
            ],
          },
          herra: {
            emoji: '😄',
            text: 'Bill hlær. “Herra Thorsteinson? Nei, nei! Á íslensku þúa allir alla og nota skírnarnafnið, hvort sem það er nágranni, kennari eða forsetinn. Kallaðu mig bara Bill.”',
            translation:
              'Bill ri. “Senhor Thorsteinson? Não, não! Em islandês, todo mundo trata todo mundo por ‘þú’ e usa o primeiro nome, seja o vizinho, o professor ou o presidente. Me chame só de Bill.”',
            choices: [{ text: '“Allt í lagi, Bill!”', translation: '“Tudo bem, Bill!”', next: 'final_bill' }],
          },
          final_bill: {
            emoji: '📇',
            text: 'Bill segir þeim sögur af afa sínum og ömmu. Í lokin réttir hann Linu nafnspjald: “Skrifaðu mér ef þú kemur aftur. Og ekkert ‘virðingarfyllst’ á milli vina!”',
            translation:
              'Bill conta histórias do avô e da avó dele. No fim, entrega um cartão de visita ao Linu: “Me escreva se você voltar. E nada de ‘atenciosamente’ entre amigos!”',
            ending: {
              tone: 'bom',
              title: 'Entre amigos, pelo primeiro nome',
              message: 'Você acompanhou o registro formal (“Heill og sæll”, “hér með”, “Vinsamlegast”, “Virðingarfyllst”), os patronímicos que viraram sobrenomes no Canadá e o tratamento pelo primeiro nome.',
            },
          },
          final_tjald: {
            emoji: '🥞',
            text: 'Í matartjaldinu borða Linu og Guðrún pönnukökur og kleinur. Þegar þau koma út aftur er ávarpinu lokið og Fjallkonan farin af sviðinu.',
            translation:
              'Na tenda de comida, Linu e Guðrún comem panquecas e kleinur, uns bolinhos fritos trançados. Quando eles saem, o discurso já terminou, e a Fjallkonan já saiu do palco.',
            ending: { tone: 'neutro', title: 'Discurso perdido', message: 'As pönnukökur estavam ótimas, mas o discurso da Fjallkonan é o coração da festa. No ano que vem, escute primeiro e coma depois!' },
          },
        },
      },
    ],
  },
];
