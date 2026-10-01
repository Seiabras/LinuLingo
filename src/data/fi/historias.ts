import type { StorySeed } from '../types';

/** Histórias interativas em finlandês: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_FI: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'fi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moi, Kauppatori!',
    emoji: '🍓',
    summary: 'Na praça do mercado de Helsinque, à beira do mar, o Linu conhece a Aino e compra morangos.',
    cultural_context:
      'A Kauppatori é a praça do mercado de Helsinque, junto ao porto do centro. No verão, as barracas vendem morangos, ervilhas frescas, peixe e artesanato, e dali também saem as balsas para a fortaleza de Suomenlinna.',
    start: 'start',
    glossary: [
      ['Moi! / Hei hei!', 'Oi! / Tchau!'],
      ['Minä olen… / Kuka sinä olet?', 'Eu sou… / Quem é você? (a tônica é sempre na primeira sílaba: MI-nä, KU-ka)'],
      ['nälkäinen', 'com fome (o “ä” soa como o “é” aberto de “pé”)'],
      ['mansikka', 'morango (o “kk” é longo: segure o “k” um instante)'],
      ['kiitos', 'obrigado'],
      ['viisi / kymmenen', 'cinco / dez (o “ii” e o “mm” são longos)'],
      ['euroa', 'euros (depois de número, o substantivo vai no partitivo: “viisi euroa”)'],
      ['Ole hyvä!', 'Aqui está! / Por favor! (ao entregar algo)'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Helsinki, Kauppatori. On kesä, ja aurinko paistaa. Linu on nälkäinen.',
        translation: 'Helsinque, praça do mercado. É verão, e o sol está brilhando. O Linu está com fome.',
        choices: [
          { text: 'Linu menee mansikkakojulle.', translation: 'O Linu vai até a barraca de morangos.', next: 'koju' },
          { text: 'Linu katsoo merta.', translation: 'O Linu olha o mar.', next: 'meri' },
        ],
      },
      meri: {
        emoji: '🌊',
        text: 'Meri on sininen ja kaunis. Lokki huutaa: “Kiiik!”',
        translation: 'O mar é azul e bonito. Uma gaivota grita: “Quiiic!”',
        choices: [{ text: '“Hei, lokki! Nyt ruokaa!”', translation: '“Oi, gaivota! Agora, comida!”', next: 'koju' }],
      },
      koju: {
        emoji: '👩',
        text: '“Moi! Minä olen Aino. Kuka sinä olet?”',
        translation: '“Oi! Eu sou a Aino. Quem é você?”',
        choices: [
          { text: '“Moi! Minä olen Linu.”', translation: '“Oi! Eu sou o Linu.”', next: 'hinta' },
          {
            text: '“Hei hei, Aino!”',
            translation: '“Tchau, Aino!”',
            wrong: 'A Aino disse “Moi!” (Oi!) e perguntou “Kuka sinä olet?” (Quem é você?). “Hei hei” é “tchau”: o Linu nem se apresentou ainda! Responda “Minä olen Linu”.',
          },
        ],
      },
      hinta: {
        emoji: '🧺',
        text: '“Tässä on mansikoita. Yksi litra on kymmenen euroa.”',
        translation: '“Aqui tem morangos. Um litro custa dez euros.”',
        choices: [
          { text: '“Yksi litra, kiitos! Tässä on kymmenen euroa.”', translation: '“Um litro, por favor! Aqui estão dez euros.”', next: 'mansikat' },
          {
            text: 'Linu antaa kaksi euroa.',
            translation: 'O Linu dá dois euros.',
            wrong: 'A Aino disse “kymmenen euroa”: DEZ euros, não dois (“kaksi”). Conte de novo: yksi, kaksi, kolme… kymmenen!',
          },
        ],
      },
      mansikat: {
        emoji: '🍓',
        text: '“Ole hyvä!” Mansikat ovat punaisia ja makeita.',
        translation: '“Aqui está!” Os morangos são vermelhos e doces.',
        choices: [
          { text: '“Aino, ota sinäkin!”', translation: '“Aino, pegue você também!”', next: 'final_bom' },
          { text: 'Linu syö kaikki mansikat.', translation: 'O Linu come todos os morangos.', next: 'final_ahne' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ja Aino syövät mansikoita yhdessä. Nam, hyvää!',
        translation: 'O Linu e a Aino comem morangos juntos. Hum, que gostoso!',
        ending: { tone: 'bom', title: 'Morangos divididos', message: 'O Linu dividiu os morangos e ganhou uma amiga em Helsinque.' },
      },
      final_ahne: {
        emoji: '😅',
        text: 'Kaikki mansikat! Nyt Linu on täynnä, ja Aino on nälkäinen.',
        translation: 'Todos os morangos! Agora o Linu está cheio, e a Aino está com fome.',
        ending: { tone: 'neutro', title: 'Pinguim guloso', message: 'Da próxima vez, ofereça: “Ota sinäkin!” (Pegue você também!).' },
      },
    },
  },
  {
    id: 'fi-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Napapiirillä',
    emoji: '❄️',
    summary: 'Em Rovaniemi, na Lapônia, o Linu atravessa a linha do Círculo Polar Ártico num frio de vinte graus negativos.',
    cultural_context:
      'Rovaniemi é a capital da Lapônia finlandesa. Bem perto da cidade passa o Círculo Polar Ártico (napapiiri), marcado no chão por uma linha branca: ao norte dela, há dias de inverno em que o sol não nasce e noites de verão em que ele não se põe.',
    start: 'start',
    glossary: [
      ['napapiiri', 'o Círculo Polar Ártico'],
      ['kylmä', 'frio'],
      ['miinus kaksikymmentä', 'menos vinte (kaksi + kymmentä: “dois dez”)'],
      ['Oletko sinä…?', 'Você é…? (o “-ko” transforma a frase em pergunta)'],
      ['poro', 'rena'],
      ['kolme', 'três'],
      ['kuva', 'foto'],
      ['iloinen', 'alegre, contente'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Rovaniemi, talvi. On kylmä: miinus kaksikymmentä astetta! Linu on iloinen.',
        translation: 'Rovaniemi, inverno. Está frio: vinte graus negativos! O Linu está contente.',
        choices: [
          { text: 'Linu menee ulos.', translation: 'O Linu sai.', next: 'ulkona' },
          { text: 'Linu juo kuumaa kaakaota.', translation: 'O Linu toma chocolate quente.', next: 'kaakao' },
        ],
      },
      kaakao: {
        emoji: '☕',
        text: 'Kaakao on kuuma ja hyvä. Nyt: napapiiri!',
        translation: 'O chocolate está quente e gostoso. Agora: o Círculo Polar!',
        choices: [{ text: 'Linu menee ulos.', translation: 'O Linu sai.', next: 'ulkona' }],
      },
      ulkona: {
        emoji: '🧑',
        text: 'Tässä on valkoinen viiva. Mies sanoo: “Hei! Minä olen Mikko. Oletko sinä turisti?”',
        translation: 'Aqui há uma linha branca. Um homem diz: “Oi! Eu sou o Mikko. Você é turista?”',
        choices: [
          { text: '“Hei! Minä olen Linu. Olen turisti ja pingviini!”', translation: '“Oi! Eu sou o Linu. Sou turista e pinguim!”', next: 'viiva' },
          {
            text: '“Hei! Minä olen Mikko.”',
            translation: '“Oi! Eu sou o Mikko.”',
            wrong: '“Minä olen Mikko” é o que o HOMEM disse: Mikko é o nome dele. O Linu tem que dizer o próprio nome: “Minä olen Linu”.',
          },
        ],
      },
      viiva: {
        emoji: '⬜',
        text: '“Linu, tämä viiva on napapiiri. Nyt sinä olet napapiirillä!”',
        translation: '“Linu, esta linha é o Círculo Polar Ártico. Agora você está no Círculo Polar!”',
        choices: [
          { text: '“Hauskaa! Kuva, kiitos!”', translation: '“Que legal! Uma foto, por favor!”', next: 'kuva' },
          { text: '“Missä ovat porot?”', translation: '“Onde estão as renas?”', next: 'porot' },
        ],
      },
      porot: {
        emoji: '🦌',
        text: '“Tuolla on kolme poroa. Ne ovat kilttejä.”',
        translation: '“Ali há três renas. Elas são mansas.”',
        choices: [{ text: '“Moi, porot! Mikko, kuva, kiitos!”', translation: '“Oi, renas! Mikko, uma foto, por favor!”', next: 'kuva' }],
      },
      kuva: {
        emoji: '📷',
        text: 'Mikko ottaa kuvan. Linu on napapiirillä. Hän on onnellinen.',
        translation: 'O Mikko tira uma foto. O Linu está no Círculo Polar. Ele está feliz.',
        choices: [
          { text: '“Kiitos, Mikko! Hei hei!”', translation: '“Obrigado, Mikko! Tchau!”', next: 'final_bom' },
          { text: 'Linu makaa lumessa.', translation: 'O Linu se deita na neve.', next: 'final_lumi' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kuva on kaunis: Linu, lumi ja napapiiri.',
        translation: 'A foto ficou bonita: o Linu, a neve e o Círculo Polar.',
        ending: { tone: 'bom', title: 'No topo do mundo', message: 'O Linu cruzou o Círculo Polar Ártico e ganhou uma foto para guardar.' },
      },
      final_lumi: {
        emoji: '⛄',
        text: 'Kuvassa on vain lunta ja kaksi silmää. Mikko nauraa.',
        translation: 'Na foto só aparecem neve e dois olhos. O Mikko ri.',
        ending: { tone: 'neutro', title: 'Pinguim camuflado', message: 'Um pinguim deitado na neve some na foto! Tente de novo, em pé ao lado da linha.' },
      },
    },
  },
  {
    id: 'fi-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Föri Turussa',
    emoji: '⛴️',
    summary: 'Em Turku, o Linu atravessa o rio Aura no Föri, uma balsinha antiga, e faz amizade com uma menina de cinco anos.',
    cultural_context:
      'Turku, no sudoeste, é a cidade mais antiga da Finlândia e foi a capital do país até 1812. O rio Aura corta o centro, e o Föri, uma pequena balsa que funciona desde o começo do século XX, leva pedestres e ciclistas de uma margem à outra de graça.',
    start: 'start',
    glossary: [
      ['joki', 'rio (Aurajoki = o rio Aura)'],
      ['lautta', 'balsa (o “tt” é longo)'],
      ['ilmainen', 'gratuito, de graça'],
      ['Päivää!', 'Bom dia! / Boa tarde! (cumprimento do dia inteiro)'],
      ['Minä olen viisivuotias.', 'Eu tenho cinco anos. (viisi = cinco, vuotias = “de anos”)'],
      ['lintu', 'pássaro, ave'],
      ['perhe', 'família'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Turku. Tämä on Aurajoki. Joki on pitkä ja rauhallinen.',
        translation: 'Turku. Este é o rio Aura. O rio é comprido e tranquilo.',
        choices: [
          { text: 'Linu odottaa lauttaa.', translation: 'O Linu espera a balsa.', next: 'lautta' },
          { text: 'Linu menee kahvilaan.', translation: 'O Linu vai a um café.', next: 'kahvila' },
        ],
      },
      kahvila: {
        emoji: '☕',
        text: 'Kahvi on hyvä ja pulla on iso. Mutta nyt: lautta!',
        translation: 'O café é bom e o pão doce é grande. Mas agora: a balsa!',
        choices: [{ text: 'Linu odottaa lauttaa.', translation: 'O Linu espera a balsa.', next: 'lautta' }],
      },
      lautta: {
        emoji: '⛴️',
        text: 'Tämä on Föri, pieni ja vanha lautta. Kuljettaja sanoo: “Päivää! Föri on ilmainen.”',
        translation: 'Este é o Föri, uma balsa pequena e velha. O condutor diz: “Bom dia! O Föri é gratuito.”',
        choices: [
          { text: '“Päivää! Kiitos!”', translation: '“Bom dia! Obrigado!”', next: 'matka' },
          {
            text: 'Linu antaa kuljettajalle kymmenen euroa.',
            translation: 'O Linu dá dez euros ao condutor.',
            wrong: 'O condutor disse “Föri on ilmainen”: o Föri é GRATUITO! Não precisa pagar nada.',
          },
        ],
      },
      matka: {
        emoji: '👨‍👩‍👧‍👦',
        text: 'Lautalla on perhe: äiti, isä ja kolme lasta. Pieni tyttö sanoo: “Moi! Minä olen Emma. Minä olen viisivuotias.”',
        translation: 'Na balsa há uma família: mãe, pai e três crianças. Uma menina pequena diz: “Oi! Eu sou a Emma. Eu tenho cinco anos.”',
        choices: [
          { text: '“Moi, Emma! Minä olen Linu.”', translation: '“Oi, Emma! Eu sou o Linu.”', next: 'emma' },
          {
            text: '“Moi! Oletko sinä kymmenen?”',
            translation: '“Oi! Você tem dez anos?”',
            wrong: 'A Emma acabou de dizer “Minä olen viisivuotias”: ela tem CINCO anos (viisi), não dez (kymmenen).',
          },
        ],
      },
      emma: {
        emoji: '🐧',
        text: '“Oletko sinä lintu?” “Olen! Minä olen pingviini.” Emma on iloinen.',
        translation: '“Você é um passarinho?” “Sou! Eu sou um pinguim.” A Emma fica contente.',
        choices: [{ text: 'Lautta on nyt rannalla.', translation: 'A balsa agora chegou à margem.', next: 'ranta' }],
      },
      ranta: {
        emoji: '👋',
        text: 'Perhe menee pois. Emma sanoo: “Hei hei, Linu!”',
        translation: 'A família desce. A Emma diz: “Tchau, Linu!”',
        choices: [
          { text: '“Hei hei, Emma! Kiitos, Föri!”', translation: '“Tchau, Emma! Obrigado, Föri!”', next: 'final_bom' },
          { text: 'Linu on lautalla. Hän on väsynyt.', translation: 'O Linu fica na balsa. Ele está cansado.', next: 'final_taas' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu on joen toisella puolella. Turku on kaunis!',
        translation: 'O Linu está do outro lado do rio. Turku é linda!',
        ending: { tone: 'bom', title: 'Travessia feita', message: 'O Linu cruzou o rio Aura de graça e ainda fez uma amiguinha.' },
      },
      final_taas: {
        emoji: '🔁',
        text: 'Föri menee taas. Linu on taas samalla puolella!',
        translation: 'O Föri parte de novo. O Linu está outra vez do mesmo lado!',
        ending: { tone: 'neutro', title: 'Vai e volta', message: 'O Föri vai e volta o dia todo: quem não desce faz a travessia de novo. Tente descer na margem!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'fi-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Munkki Pyynikillä',
    emoji: '🍩',
    summary: 'Em Tampere, o Linu procura a torre de observação de Pyynikki, famosa pelos sonhos, e descobre que o dinheiro não dá.',
    cultural_context:
      'Tampere fica entre dois grandes lagos, o Näsijärvi e o Pyhäjärvi, e já foi a grande cidade das fábricas têxteis da Finlândia. Na colina arborizada de Pyynikki há uma torre de observação cujo café é famoso pelos sonhos (munkki) fritos na hora.',
    start: 'start',
    glossary: [
      ['munkki', 'sonho, rosquinha frita (munkki → munkkeja: “sonhos”, no partitivo)'],
      ['torni / näkötorni', 'torre / torre de observação'],
      ['Tiedätkö…?', 'Você sabe…? (tiedät + -kö; com “ä”, o sufixo vira “-kö”)'],
      ['en tiedä / ei tiedä', 'eu não sei / ele não sabe (a negação é um verbo: en, et, ei…)'],
      ['Minulla on… / Minulla ei ole…', 'Eu tenho… / Eu não tenho… (literalmente: “comigo há”)'],
      ['maksaa', 'custar; pagar'],
      ['Ei hätää!', 'Sem problema! / Não se preocupe!'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu on Tampereella. Hän kävelee Pyynikillä ja etsii näkötornia. Hän ei tiedä, missä se on.',
        translation: 'O Linu está em Tampere. Ele caminha em Pyynikki e procura a torre de observação. Ele não sabe onde ela fica.',
        choices: [
          { text: 'Linu kysyy naiselta: “Anteeksi, tiedätkö, missä torni on?”', translation: 'O Linu pergunta a uma mulher: “Com licença, você sabe onde fica a torre?”', next: 'nainen' },
          { text: 'Linu katsoo karttaa.', translation: 'O Linu olha o mapa.', next: 'kartta' },
        ],
      },
      kartta: {
        emoji: '🗺️',
        text: 'Kartta on pieni, eikä Linu ymmärrä sitä. Tuolla kävelee nainen.',
        translation: 'O mapa é pequeno, e o Linu não o entende. Ali vai passando uma mulher.',
        choices: [{ text: '“Anteeksi, tiedätkö, missä torni on?”', translation: '“Com licença, você sabe onde fica a torre?”', next: 'nainen' }],
      },
      nainen: {
        emoji: '👩',
        text: 'Nainen hymyilee. “Tiedän! Torni on tuolla ylhäällä. Minäkin menen sinne. Syötkö sinä munkkeja?”',
        translation: 'A mulher sorri. “Sei! A torre fica lá em cima. Eu também vou para lá. Você come sonhos?”',
        choices: [
          { text: '“Syön! Minä rakastan munkkeja.”', translation: '“Como! Eu adoro sonhos.”', next: 'torni' },
          {
            text: '“Sinäkään et tiedä? Voi ei.”',
            translation: '“Você também não sabe? Ah, não.”',
            wrong: 'A mulher disse “Tiedän!” (Eu sei!), sem negação: se não soubesse, diria “En tiedä”. E ainda explicou que a torre fica “tuolla ylhäällä” (lá em cima).',
          },
        ],
      },
      torni: {
        emoji: '🗼',
        text: 'Tornissa on kahvila. Nainen sanoo: “Minä olen Leena. Täällä on tosi hyviä munkkeja!” Linu katsoo lompakkoa: hänellä on vain kaksi euroa.',
        translation: 'Na torre há um café. A mulher diz: “Eu sou a Leena. Aqui tem sonhos muito bons!” O Linu olha a carteira: ele tem só dois euros.',
        choices: [{ text: '“Anteeksi, paljonko munkki maksaa?”', translation: '“Com licença, quanto custa um sonho?”', next: 'hinta' }],
      },
      hinta: {
        emoji: '💶',
        text: 'Myyjä sanoo: “Munkki maksaa kolme euroa.” Linu on vähän surullinen.',
        translation: 'O vendedor diz: “O sonho custa três euros.” O Linu fica um pouco triste.',
        choices: [
          { text: '“Minulla on vain kaksi euroa. Se ei riitä.”', translation: '“Eu só tenho dois euros. Não dá.”', next: 'leena' },
          {
            text: '“Yksi munkki, kiitos!” Linu maksaa.',
            translation: '“Um sonho, por favor!” O Linu paga.',
            wrong: 'O Linu tem só dois euros (“hänellä on vain kaksi euroa”) e o sonho custa três (“maksaa kolme euroa”). O dinheiro não dá!',
          },
        ],
      },
      leena: {
        emoji: '😊',
        text: 'Leena sanoo: “Ei hätää! Minulla on rahaa. Otatko munkin ja kahvin?”',
        translation: 'A Leena diz: “Sem problema! Eu tenho dinheiro. Você quer um sonho e um café?”',
        choices: [
          { text: '“Otan! Kiitos, Leena!”', translation: '“Quero! Obrigado, Leena!”', next: 'final_bom' },
          { text: '“En, kiitos. En ota mitään.”', translation: '“Não, obrigado. Não quero nada.”', next: 'final_ei' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'He istuvat ja syövät munkkeja. Tornista näkyy kaksi järveä.',
        translation: 'Eles se sentam e comem sonhos. Da torre dá para ver dois lagos.',
        ending: { tone: 'bom', title: 'Sonho com vista', message: 'O Linu aceitou a gentileza e comeu o sonho mais famoso de Tampere.' },
      },
      final_ei: {
        emoji: '😋',
        text: 'Leena syö munkin. Linu katsoo, ja hänellä on nälkä.',
        translation: 'A Leena come o sonho. O Linu fica olhando, com fome.',
        ending: { tone: 'neutro', title: 'Orgulho de pinguim', message: 'O Linu disse “En ota mitään” (não quero nada)… e ficou com água na boca. Às vezes vale dizer “Otan, kiitos!”.' },
      },
    },
  },
  {
    id: 'fi-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pyörällä Oulussa',
    emoji: '🚲',
    summary: 'Numa manhã escura de janeiro em Oulu, o ônibus não vem, e o vizinho Ville oferece ao Linu uma bicicleta de inverno.',
    cultural_context:
      'Oulu, no norte da Finlândia, é conhecida como cidade de ciclistas: tem uma rede enorme de ciclovias, limpas de neve no inverno, e muita gente pedala o ano inteiro, com pneus de cravos (nastarenkaat) para não escorregar no gelo.',
    start: 'start',
    glossary: [
      ['bussi ei tule', 'o ônibus não vem'],
      ['odottaa', 'esperar (odotan, odotat, odottaa: o “tt” vira “t” em algumas pessoas)'],
      ['pyörä / pyöräillä', 'bicicleta / andar de bicicleta'],
      ['Onko sinulla…?', 'Você tem…?'],
      ['Minulla ei ole pyörää.', 'Eu não tenho bicicleta. (na negação, o objeto vai para o partitivo)'],
      ['Linulla on kylmä.', 'O Linu está com frio. (literalmente: “com o Linu há frio”)'],
      ['nastarenkaat', 'pneus com cravos'],
    ],
    nodes: {
      start: {
        emoji: '🌑',
        text: 'Oulu, tammikuu. On aamu, mutta on vielä pimeää. Linu odottaa bussia, mutta bussi ei tule.',
        translation: 'Oulu, janeiro. É de manhã, mas ainda está escuro. O Linu espera o ônibus, mas o ônibus não vem.',
        choices: [
          { text: 'Linu odottaa vielä.', translation: 'O Linu espera mais um pouco.', next: 'odotus' },
          { text: 'Linu soittaa Villelle.', translation: 'O Linu liga para o Ville.', next: 'ville' },
        ],
      },
      odotus: {
        emoji: '🥶',
        text: 'Linu odottaa kymmenen minuuttia. Bussi ei vieläkään tule. Nyt Linulla on kylmä.',
        translation: 'O Linu espera dez minutos. O ônibus ainda não vem. Agora o Linu está com frio.',
        choices: [{ text: 'Linu soittaa naapurille, Villelle.', translation: 'O Linu liga para o vizinho, o Ville.', next: 'ville' }],
      },
      ville: {
        emoji: '📱',
        text: 'Ville vastaa: “Moi! Minä pyöräilen nyt töihin. Onko sinulla pyörä?”',
        translation: 'O Ville atende: “Oi! Eu estou indo de bicicleta para o trabalho. Você tem bicicleta?”',
        choices: [
          { text: '“Ei ole. Minulla ei ole pyörää.”', translation: '“Não tenho. Eu não tenho bicicleta.”', next: 'pyora' },
          {
            text: '“Ei hätää, bussi tulee nyt!”',
            translation: '“Sem problema, o ônibus está chegando!”',
            wrong: 'O texto disse “bussi ei tule”: o ônibus NÃO vem. O “ei” antes do verbo é a negação.',
          },
        ],
      },
      pyora: {
        emoji: '🚲',
        text: '“Ei hätää! Minulla on kaksi pyörää. Pyörissä on nastarenkaat.” Ville tulee. “Pyöräiletkö sinä usein?”',
        translation: '“Sem problema! Eu tenho duas bicicletas. Elas têm pneus com cravos.” O Ville chega. “Você anda de bicicleta com frequência?”',
        choices: [
          { text: '“En pyöräile usein, mutta minä yritän!”', translation: '“Não ando muito, mas vou tentar!”', next: 'final_bom' },
          { text: '“En osaa pyöräillä.”', translation: '“Eu não sei andar de bicicleta.”', next: 'kavely' },
        ],
      },
      kavely: {
        emoji: '🚶',
        text: 'Ville nauraa. “Ei se mitään. Me kävelemme yhdessä.”',
        translation: 'O Ville ri. “Não tem problema. A gente vai a pé juntos.”',
        choices: [{ text: '“Kiitos, Ville!”', translation: '“Obrigado, Ville!”', next: 'final_myohassa' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'He pyöräilevät lumessa. Tie on valkoinen, ja Linu on ajoissa töissä. “Tämä on hauskaa!”',
        translation: 'Eles pedalam na neve. O caminho está branco, e o Linu chega ao trabalho na hora. “Que divertido!”',
        ending: { tone: 'bom', title: 'Ciclista do norte', message: 'O Linu descobriu que em Oulu a bicicleta funciona até no inverno.' },
      },
      final_myohassa: {
        emoji: '⏰',
        text: 'Linu ja Ville kävelevät. Matka on pitkä, ja he ovat myöhässä. Mutta Linu ei ole yksin!',
        translation: 'O Linu e o Ville vão a pé. O caminho é longo, e eles chegam atrasados. Mas o Linu não está sozinho!',
        ending: { tone: 'neutro', title: 'Devagar e acompanhado', message: 'Chegaram atrasados, mas juntos. Que tal aprender a pedalar na primavera?' },
      },
    },
  },
  {
    id: 'fi-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mustikoita Nuuksiossa',
    emoji: '🫐',
    summary: 'No parque nacional de Nuuksio, o Linu conhece a Sanna, que colhe mirtilos, e aprende que na Finlândia todo mundo pode colher frutas silvestres.',
    cultural_context:
      'Nuuksio é um parque nacional de florestas, rochas e lagos pertinho de Helsinque e Espoo. Pelo “direito de todos” (jokamiehenoikeus), qualquer pessoa pode andar pela natureza e colher frutas silvestres e cogumelos, mesmo em terras alheias, desde que não cause danos.',
    start: 'start',
    glossary: [
      ['metsä', 'floresta, mato'],
      ['polku', 'trilha (polku → polulla: “na trilha”, o “k” some)'],
      ['mustikka', 'mirtilo'],
      ['poimia', 'colher'],
      ['Saanko…?', 'Posso…? (saan + -ko)'],
      ['Onko täällä ketään?', 'Tem alguém aqui?'],
      ['kuppi / kori', 'copo, caneca / cesto'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu on Nuuksiossa. Metsä on hiljainen ja vihreä. Linulla on reppu, mutta hänellä ei ole karttaa.',
        translation: 'O Linu está em Nuuksio. A floresta é silenciosa e verde. O Linu tem uma mochila, mas não tem mapa.',
        choices: [
          { text: 'Linu kävelee polkua pitkin.', translation: 'O Linu segue pela trilha.', next: 'polku' },
          { text: 'Linu menee metsään ilman polkua.', translation: 'O Linu entra na mata sem trilha.', next: 'eksyksissa' },
        ],
      },
      eksyksissa: {
        emoji: '😟',
        text: 'Puita, puita, puita… Missä polku on? Linu ei tiedä.',
        translation: 'Árvores, árvores, árvores… Onde está a trilha? O Linu não sabe.',
        choices: [{ text: 'Linu huutaa: “Haloo! Onko täällä ketään?”', translation: 'O Linu grita: “Alô! Tem alguém aqui?”', next: 'sanna' }],
      },
      polku: {
        emoji: '🎶',
        text: 'Polku on kapea ja kaunis. Joku laulaa metsässä.',
        translation: 'A trilha é estreita e bonita. Alguém está cantando na floresta.',
        choices: [{ text: 'Linu menee katsomaan.', translation: 'O Linu vai ver.', next: 'sanna' }],
      },
      sanna: {
        emoji: '👩',
        text: 'Linu näkee naisen. Hänellä on kori. “Hei! Minä olen Sanna. Minä poimin mustikoita.”',
        translation: 'O Linu vê uma mulher. Ela tem um cesto. “Oi! Eu sou a Sanna. Estou colhendo mirtilos.”',
        choices: [
          { text: '“Hei! Saanko minäkin poimia?”', translation: '“Oi! Posso colher também?”', next: 'oikeus' },
          {
            text: '“Hei! Poimitko sinä sieniä?”',
            translation: '“Oi! Você está colhendo cogumelos?”',
            wrong: 'A Sanna já disse: “Minä poimin mustikoita”, eu colho MIRTILOS (“mustikka”), não cogumelos (“sieni”).',
          },
        ],
      },
      oikeus: {
        emoji: '🌿',
        text: '“Saat! Suomessa jokainen saa poimia marjoja metsästä. Onko sinulla kuppi?”',
        translation: '“Pode! Na Finlândia todo mundo pode colher frutinhas na floresta. Você tem uma caneca?”',
        choices: [
          { text: '“On! Minulla on kuppi repussa.”', translation: '“Tenho! Tenho uma caneca na mochila.”', next: 'final_bom' },
          { text: '“Ei ole. Minä syön heti!”', translation: '“Não tenho. Vou comer na hora!”', next: 'final_sininen' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kuppi on pian täynnä. Linu ja Sanna istuvat kivellä ja syövät mustikoita.',
        translation: 'Logo a caneca está cheia. O Linu e a Sanna se sentam numa pedra e comem mirtilos.',
        ending: { tone: 'bom', title: 'Caneca cheia', message: 'O Linu aprendeu o “direito de todos” e voltou da floresta com uma amiga e mirtilos.' },
      },
      final_sininen: {
        emoji: '🫐',
        text: 'Linu syö ja syö. Nyt hänen nokkansa on sininen! Sanna nauraa.',
        translation: 'O Linu come e come. Agora o bico dele está azul! A Sanna ri.',
        ending: { tone: 'neutro', title: 'Bico azul', message: 'Sem caneca, os mirtilos foram direto para o bico, que ficou azul. Da próxima vez, leve um “kuppi”!' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'fi-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Lautalla Suomenlinnaan',
    emoji: '🏰',
    summary: 'O Linu pega a balsa para a fortaleza de Suomenlinna, onde o amigo Onni o espera, e precisa prestar atenção ao lugar do reencontro.',
    cultural_context:
      'Suomenlinna é uma fortaleza marítima construída a partir de 1748, quando a Finlândia fazia parte do reino da Suécia, sobre um grupo de ilhas em frente a Helsinque. É Patrimônio Mundial da UNESCO desde 1991, e as balsas saem da praça do mercado, a Kauppatori.',
    start: 'start',
    glossary: [
      ['laituri → laiturilla / laiturilta / laiturille', 'o cais → no cais / do cais / para o cais (-lla, -lta, -lle: lugares “abertos”, superfícies)'],
      ['Suomenlinnassa / Suomenlinnaan', 'em Suomenlinna / para Suomenlinna (-ssa: dentro; -an: para dentro)'],
      ['kauppahalli', 'mercado coberto'],
      ['muuri → muurilla', 'a muralha → sobre a muralha'],
      ['museo → museossa / museoon', 'o museu → no museu / para o museu'],
      ['Tavataan…!', 'Vamos nos encontrar…!'],
      ['kello kuusi', 'às seis horas'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu seisoo Kauppatorilla ja katsoo merelle. Ystävä Onni odottaa häntä Suomenlinnassa. Lautta lähtee laiturilta kymmenen minuutin päästä.',
        translation: 'O Linu está na praça do mercado e olha para o mar. O amigo Onni o espera em Suomenlinna. A balsa sai do cais daqui a dez minutos.',
        choices: [
          { text: 'Linu menee suoraan laiturille.', translation: 'O Linu vai direto para o cais.', next: 'lautta' },
          { text: 'Linu menee ensin kauppahalliin.', translation: 'O Linu vai primeiro ao mercado coberto.', next: 'halli' },
        ],
      },
      halli: {
        emoji: '🥐',
        text: 'Kauppahallissa on kalaa, leipää ja kahvia. Linu ostaa korvapuustin ja juoksee laiturille. Lautta on juuri lähdössä!',
        translation: 'No mercado coberto há peixe, pão e café. O Linu compra um pão de canela e corre para o cais. A balsa está saindo!',
        choices: [{ text: 'Linu hyppää lautalle.', translation: 'O Linu pula para dentro da balsa.', next: 'lautta' }],
      },
      lautta: {
        emoji: '⛴️',
        text: 'Lautalla on paljon turisteja. Matka Suomenlinnaan kestää noin viisitoista minuuttia. Linu katsoo ikkunasta pieniä saaria.',
        translation: 'Na balsa há muitos turistas. A viagem até Suomenlinna leva uns quinze minutos. O Linu olha as ilhotas pela janela.',
        choices: [{ text: 'Lautta tulee saarelle.', translation: 'A balsa chega à ilha.', next: 'saari' }],
      },
      saari: {
        emoji: '🧑',
        text: 'Onni odottaa laiturilla. “Tervetuloa Suomenlinnaan! Mennäänkö ensin muurille vai museoon?”',
        translation: 'O Onni espera no cais. “Bem-vindo a Suomenlinna! Vamos primeiro para a muralha ou para o museu?”',
        choices: [
          { text: '“Muurille! Haluan nähdä meren.”', translation: '“Para a muralha! Quero ver o mar.”', next: 'muuri' },
          { text: '“Museoon! Haluan kuulla linnoituksesta.”', translation: '“Para o museu! Quero ouvir sobre a fortaleza.”', next: 'museo' },
        ],
      },
      museo: {
        emoji: '🏛️',
        text: 'Museossa Onni kertoo: “Linnoitus on 1700-luvulta. Silloin Suomi oli osa Ruotsia.” Museosta he kävelevät muurille.',
        translation: 'No museu, o Onni conta: “A fortaleza é do século XVIII. Naquela época, a Finlândia fazia parte da Suécia.” Do museu, eles caminham até a muralha.',
        choices: [{ text: '“Nyt muurille!”', translation: '“Agora, à muralha!”', next: 'muuri' }],
      },
      muuri: {
        emoji: '🌊',
        text: 'Muurilta näkyy meri ja Helsinki. Onni sanoo: “Minun täytyy nyt mennä kirjastoon. Lautta lähtee laiturilta kello kuusi. Tavataan siellä!”',
        translation: 'Da muralha se vê o mar e Helsinque. O Onni diz: “Agora preciso ir à biblioteca. A balsa sai do cais às seis. A gente se encontra lá!”',
        choices: [
          { text: 'Linu menee kahvilaan ja odottaa.', translation: 'O Linu vai a um café e espera.', next: 'kahvila' },
          {
            text: 'Linu menee museoon ja odottaa Onnia siellä.',
            translation: 'O Linu vai ao museu e espera o Onni lá.',
            wrong: 'O Onni disse “laiturilta” (do cais) e “Tavataan siellä” (a gente se encontra lá): o encontro é no cais, de onde sai a balsa, não no museu.',
          },
        ],
      },
      kahvila: {
        emoji: '☕',
        text: 'Kahvilassa Linu juo kaakaota ja katsoo kelloa. Kello on puoli kuusi. Kahvilan vieressä on pieni matkamuistokauppa.',
        translation: 'No café, o Linu toma chocolate quente e olha o relógio. São cinco e meia. Ao lado do café há uma lojinha de lembranças.',
        choices: [
          { text: 'Linu kävelee laiturille.', translation: 'O Linu caminha até o cais.', next: 'final_bom' },
          { text: 'Linu menee vielä kauppaan.', translation: 'O Linu ainda entra na loja.', next: 'final_myoha' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Onni odottaa jo laiturilla. He nousevat lautalle ja katsovat, kuinka Suomenlinna jää taakse.',
        translation: 'O Onni já espera no cais. Eles embarcam e veem Suomenlinna ficando para trás.',
        ending: { tone: 'bom', title: 'Encontro no cais', message: 'O Linu entendeu o “-lla/-lta” e chegou certinho ao lugar combinado.' },
      },
      final_myoha: {
        emoji: '⏰',
        text: 'Kaupassa on paljon kivoja tavaroita. Kun Linu tulee laiturille, lautta on jo merellä. Onni soittaa: “Missä sinä olet?”',
        translation: 'Na loja há muitas coisas bonitinhas. Quando o Linu chega ao cais, a balsa já está no mar. O Onni liga: “Onde você está?”',
        ending: { tone: 'neutro', title: 'Ficou na ilha', message: 'A balsa das seis foi embora sem o Linu. Ainda bem que há outra mais tarde!' },
      },
    },
  },
  {
    id: 'fi-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Runebergin päivä Porvoossa',
    emoji: '🧁',
    summary: 'No dia 5 de fevereiro, o Linu vai a Porvoo, a cidade do poeta Runeberg, para provar o bolinho que leva o nome dele.',
    cultural_context:
      'Porvoo tem um centro antigo de ruas de pedra e, à beira do rio, os armazéns de madeira pintados de vermelho. Ali viveu o poeta Johan Ludvig Runeberg, autor da letra do hino nacional; no aniversário dele, 5 de fevereiro, os finlandeses comem a runebergintorttu, um bolinho com geleia de framboesa por cima — segundo a tradição, criado pela esposa dele, Fredrika.',
    start: 'start',
    glossary: [
      ['Porvoossa / Porvooseen', 'em Porvoo / para Porvoo'],
      ['leipomo → leipomossa / leipomoon', 'padaria → na padaria / para a padaria'],
      ['joki → joella / joen rannalla', 'rio → no rio / à beira do rio'],
      ['hylly → hyllyllä / hyllyltä', 'prateleira → na prateleira / da prateleira (palavras com ä, ö, y levam -llä, -ltä: harmonia vocálica)'],
      ['vitriini → vitriinissä', 'vitrine → na vitrine (sem ä ö y, nem a o u: a vogal de fora é “ä”)'],
      ['torttu', 'bolinho, tortinha'],
      ['mukaan', 'para levar'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'On helmikuun viides päivä. Linu tulee bussilla Helsingistä Porvooseen. Vanhassa kaupungissa on lunta ja punaisia taloja.',
        translation: 'É dia cinco de fevereiro. O Linu vem de ônibus de Helsinque para Porvoo. Na cidade velha há neve e casas vermelhas.',
        choices: [
          { text: 'Linu kävelee joelle.', translation: 'O Linu caminha até o rio.', next: 'joki' },
          { text: 'Linu menee leipomoon.', translation: 'O Linu vai à padaria.', next: 'leipomo' },
        ],
      },
      joki: {
        emoji: '🏘️',
        text: 'Joen rannalla on vanhoja punaisia aittoja. Linu ottaa kuvan sillalta. Nyt hänellä on nälkä.',
        translation: 'À beira do rio há velhos armazéns vermelhos. O Linu tira uma foto da ponte. Agora ele está com fome.',
        choices: [{ text: 'Linu menee leipomoon.', translation: 'O Linu vai à padaria.', next: 'leipomo' }],
      },
      leipomo: {
        emoji: '🥖',
        text: 'Leipomossa on lämmin. Myyjä sanoo: “Tänään on Runebergin päivä. Runebergintortut ovat tuolla hyllyllä, eivät vitriinissä.”',
        translation: 'Na padaria está quentinho. A vendedora diz: “Hoje é o dia de Runeberg. Os bolinhos de Runeberg estão ali na prateleira, não na vitrine.”',
        choices: [
          { text: 'Linu ottaa tortun hyllyltä.', translation: 'O Linu pega um bolinho da prateleira.', next: 'osto' },
          { text: '“Mikä on runebergintorttu?”', translation: '“O que é um bolinho de Runeberg?”', next: 'torttu' },
          {
            text: 'Linu etsii torttua vitriinistä.',
            translation: 'O Linu procura o bolinho na vitrine.',
            wrong: 'A vendedora disse “hyllyllä” (na prateleira) e “eivät vitriinissä” (não na vitrine). O “-llä” é “em cima de”, o “-ssä” é “dentro de”.',
          },
        ],
      },
      torttu: {
        emoji: '📜',
        text: '“Runeberg oli suomalainen runoilija. Hän asui täällä Porvoossa. Tänään on hänen syntymäpäivänsä, ja kaikki syövät torttuja.”',
        translation: '“Runeberg foi um poeta finlandês. Ele morou aqui em Porvoo. Hoje é o aniversário dele, e todo mundo come esses bolinhos.”',
        choices: [{ text: '“Kuulostaa hyvältä! Otan yhden hyllyltä.”', translation: '“Parece bom! Vou pegar um da prateleira.”', next: 'osto' }],
      },
      osto: {
        emoji: '💬',
        text: 'Kassalla myyjä kysyy: “Syötkö täällä vai otatko mukaan?”',
        translation: 'No caixa, a vendedora pergunta: “Vai comer aqui ou vai levar?”',
        choices: [
          { text: '“Syön täällä.”', translation: '“Vou comer aqui.”', next: 'poyta' },
          { text: '“Otan mukaan. Syön kadulla.”', translation: '“Vou levar. Como na rua.”', next: 'final_lumi' },
        ],
      },
      poyta: {
        emoji: '👵',
        text: 'Pöydän ääressä istuu vanha nainen. “Minä syön tortun tänä päivänä joka vuosi”, hän sanoo. “Tervetuloa Porvooseen!”',
        translation: 'À mesa está sentada uma senhora. “Eu como um bolinho neste dia todo ano”, diz ela. “Bem-vindo a Porvoo!”',
        choices: [{ text: '“Kiitos! Torttu on tosi hyvä.”', translation: '“Obrigado! O bolinho é muito bom.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ja nainen juovat kahvia ja syövät torttuja. Ulkona sataa lunta vanhaan kaupunkiin.',
        translation: 'O Linu e a senhora tomam café e comem bolinhos. Lá fora, a neve cai sobre a cidade velha.',
        ending: { tone: 'bom', title: 'Doce tradição', message: 'O Linu comemorou o dia de Runeberg do jeito certo: com bolinho, café e boa companhia.' },
      },
      final_lumi: {
        emoji: '😢',
        text: 'Linu kävelee kadulla ja syö. Hups! Torttu putoaa lumeen.',
        translation: 'O Linu anda pela rua comendo. Opa! O bolinho cai na neve.',
        ending: { tone: 'neutro', title: 'Bolinho na neve', message: 'Rua escorregadia e bolinho na mão não combinam. Da próxima vez, coma “leipomossa”, na padaria!' },
      },
    },
  },
  {
    id: 'fi-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kalakukko ja Puijo',
    emoji: '🐟',
    summary: 'Em Kuopio, o Linu compra um kalakukko na praça do mercado e sobe à torre de Puijo para comê-lo com vista para os lagos.',
    cultural_context:
      'Kuopio fica no coração da região da Savônia, cercada pelo lago Kallavesi. O prato típico é o kalakukko: peixinhos (tradicionalmente muikku) e toucinho assados por horas dentro de uma casca de pão de centeio. Do alto da torre de Puijo, numa colina da cidade, vê-se um mar de lagos e florestas.',
    start: 'start',
    glossary: [
      ['torilla / torilta', 'na praça do mercado / da praça'],
      ['Puijolle', 'para Puijo'],
      ['leivän sisällä', 'dentro do pão'],
      ['ruisleipä', 'pão de centeio'],
      ['kala / silava', 'peixe / toucinho'],
      ['Mistä sinä tulet?', 'De onde você vem? (-sta: “de dentro de”)'],
      ['pala', 'pedaço'],
    ],
    nodes: {
      start: {
        emoji: '🛒',
        text: 'Linu on Kuopion torilla. Torilla on paljon myyjiä ja ihmisiä. Eräs myyjä huutaa: “Kalakukkoa! Tuoretta kalakukkoa!”',
        translation: 'O Linu está na praça do mercado de Kuopio. Na praça há muitos vendedores e muita gente. Um vendedor grita: “Kalakukko! Kalakukko fresquinho!”',
        choices: [
          { text: 'Linu menee myyjän luo.', translation: 'O Linu vai até o vendedor.', next: 'myyja' },
          { text: 'Linu kysyy naiselta tietä Puijolle.', translation: 'O Linu pergunta a uma mulher o caminho para Puijo.', next: 'tie' },
        ],
      },
      tie: {
        emoji: '🚌',
        text: 'Nainen sanoo: “Puijolle? Bussi lähtee torilta. Mutta osta ensin kalakukko, se on Kuopion herkku!”',
        translation: 'A mulher diz: “Para Puijo? O ônibus sai da praça. Mas compre primeiro um kalakukko, é a delícia de Kuopio!”',
        choices: [{ text: 'Linu menee myyjän luo.', translation: 'O Linu vai até o vendedor.', next: 'myyja' }],
      },
      myyja: {
        emoji: '🍞',
        text: 'Myyjä selittää: “Kalakukko on iso ruisleipä. Leivän sisällä on kalaa ja silavaa.”',
        translation: 'O vendedor explica: “O kalakukko é um pão de centeio grande. Dentro do pão há peixe e toucinho.”',
        choices: [
          { text: '“Otan yhden!”', translation: '“Vou levar um!”', next: 'puijo' },
          {
            text: '“Ahaa, kala on siis leivän vieressä.”',
            translation: '“Ah, então o peixe vai ao lado do pão.”',
            wrong: 'O vendedor disse “leivän sisällä”: DENTRO do pão. O peixe fica escondido na casca de centeio, como um recheio.',
          },
        ],
      },
      puijo: {
        emoji: '🗼',
        text: 'Linu menee bussilla torilta Puijolle. Tornin huipulla on ravintola. Ikkunasta näkyy järviä ja metsiä joka puolella.',
        translation: 'O Linu vai de ônibus da praça até Puijo. No alto da torre há um restaurante. Pela janela se veem lagos e florestas por todo lado.',
        choices: [
          { text: 'Linu syö kalakukkoa ravintolassa.', translation: 'O Linu come o kalakukko no restaurante.', next: 'ravintola' },
          { text: 'Linu menee ulos näköalatasanteelle.', translation: 'O Linu sai para o mirante.', next: 'ulos' },
        ],
      },
      ravintola: {
        emoji: '🙅',
        text: 'Tarjoilija tulee pöytään. “Anteeksi, ravintolassa ei saa syödä omia eväitä.”',
        translation: 'O garçom vem até a mesa. “Desculpe, no restaurante não é permitido comer a própria comida.”',
        choices: [{ text: '“Anteeksi! Menen ulos.”', translation: '“Desculpe! Vou lá para fora.”', next: 'ulos' }],
      },
      ulos: {
        emoji: '🌬️',
        text: 'Ulkona tuulee. Vieressä seisoo vanha mies. “Mistä sinä tulet?” “Brasiliasta!” Mies katsoo kalakukkoa ja hymyilee.',
        translation: 'Lá fora venta. Ao lado está um senhor. “De onde você vem?” “Do Brasil!” O senhor olha o kalakukko e sorri.',
        choices: [
          { text: 'Linu antaa miehelle palan.', translation: 'O Linu dá um pedaço ao senhor.', next: 'final_bom' },
          { text: 'Linu syö kaiken yksin.', translation: 'O Linu come tudo sozinho.', next: 'final_yksin' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Mies maistaa ja sanoo: “Hyvää! Tämä on kuin mummon kalakukko.” He syövät yhdessä ja katsovat järville.',
        translation: 'O senhor prova e diz: “Bom! É como o kalakukko da minha avó.” Eles comem juntos olhando os lagos.',
        ending: { tone: 'bom', title: 'Pão dividido', message: 'O Linu dividiu a especialidade de Kuopio e ganhou uma conversa lá no alto.' },
      },
      final_yksin: {
        emoji: '😮‍💨',
        text: 'Kalakukko on iso. Linu syö ja syö, ja lopuksi hän on liian täynnä. Mies on jo lähtenyt.',
        translation: 'O kalakukko é grande. O Linu come e come e, no fim, fica cheio demais. O senhor já foi embora.',
        ending: { tone: 'neutro', title: 'Cheio demais', message: 'Um kalakukko inteiro é muito para um pinguim só. Dividir teria sido melhor!' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'fi-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Norppia Saimaalla',
    emoji: '🦭',
    summary: 'Num barquinho a remo no lago Saimaa, o Linu e a pesquisadora Kaisa procuram a foca mais rara da Finlândia.',
    cultural_context:
      'A foca-anelada-do-saimaa (saimaannorppa) vive só no lago Saimaa, no leste da Finlândia: ficou presa ali quando o gelo recuou, depois da última era glacial. Restam apenas algumas centenas, e ela é protegida por lei; as redes de pesca estão entre as maiores ameaças aos filhotes.',
    start: 'start',
    glossary: [
      ['norppa → norpan / norppia', 'foca-anelada → da foca / focas (partitivo plural): o “pp” vira “p” em sílaba fechada'],
      ['kolme norppaa', 'três focas (depois de número, partitivo singular)'],
      ['kivi → kivellä', 'pedra → na pedra'],
      ['kiikarit', 'binóculo (em finlandês é plural, como “óculos”)'],
      ['poikanen → poikaset', 'filhote → filhotes'],
      ['Ole hiljaa!', 'Fique quieto!'],
      ['vene', 'barco'],
    ],
    nodes: {
      start: {
        emoji: '🚣',
        text: 'Linu on Saimaalla. Hän istuu pienessä veneessä, ja tutkija Kaisa soutaa. Järvellä on satoja saaria ja kiviä.',
        translation: 'O Linu está no Saimaa. Ele está sentado num barquinho, e a pesquisadora Kaisa rema. No lago há centenas de ilhas e pedras.',
        choices: [
          { text: '“Mitä me etsimme?”', translation: '“O que estamos procurando?”', next: 'kaisa' },
          { text: 'Linu ottaa esiin eväät: leipää ja makkaraa.', translation: 'O Linu tira o lanche da mochila: pão e salsicha.', next: 'evaat' },
        ],
      },
      evaat: {
        emoji: '🥪',
        text: 'Kaisa nauraa. “Syödään myöhemmin! Nyt etsimme norppia.”',
        translation: 'A Kaisa ri. “Vamos comer mais tarde! Agora estamos procurando focas.”',
        choices: [{ text: '“Norppia? Mitä ne ovat?”', translation: '“Norppas? O que é isso?”', next: 'kaisa' }],
      },
      kaisa: {
        emoji: '👩‍🔬',
        text: '“Norpat ovat hylkeitä, ja niitä on vain täällä Saimaassa. Ne pelkäävät kovia ääniä. Ole siis hiljaa!”',
        translation: '“As norppas são focas, e elas só existem aqui no Saimaa. Elas têm medo de barulhos altos. Então fique quieto!”',
        choices: [
          { text: 'Linu nyökkää eikä sano mitään.', translation: 'O Linu faz que sim com a cabeça e não diz nada.', next: 'kivi' },
          {
            text: 'Linu laulaa kovaa, jotta norpat tulevat.',
            translation: 'O Linu canta alto para as focas virem.',
            wrong: 'A Kaisa disse que as focas “pelkäävät kovia ääniä” (têm medo de barulhos altos) e pediu “Ole hiljaa!” (fique quieto).',
          },
        ],
      },
      kivi: {
        emoji: '🪨',
        text: 'Kaukana on iso kivi. Kivellä makaa jotain harmaata. Kaisa antaa Linulle kiikarit.',
        translation: 'Lá longe há uma pedra grande. Sobre a pedra está deitada alguma coisa cinzenta. A Kaisa dá o binóculo ao Linu.',
        choices: [{ text: 'Linu katsoo kiikareilla.', translation: 'O Linu olha com o binóculo.', next: 'norppa' }],
      },
      norppa: {
        emoji: '🦭',
        text: 'Kivellä on kolme norppaa! Yksi on iso, ja kaksi muuta ovat pieniä. Kaisa kuiskaa: “Pienet ovat poikasia.”',
        translation: 'Na pedra há três focas! Uma é grande, e as outras duas são pequenas. A Kaisa sussurra: “As pequenas são filhotes.”',
        choices: [
          { text: '“Kuinka monta norppaa Saimaassa on?”', translation: '“Quantas focas há no Saimaa?”', next: 'tieto' },
          {
            text: '“Neljä isoa norppaa!”',
            translation: '“Quatro focas grandes!”',
            wrong: 'O texto diz “kolme norppaa” (três focas), e só uma é grande: “kaksi muuta ovat pieniä”, as outras duas são pequenas.',
          },
        ],
      },
      tieto: {
        emoji: '📊',
        text: '“Vain muutamia satoja. Siksi suojelemme niitä.” Yhtäkkiä kalastajan vene tulee lähemmäs. Moottori pitää kovaa ääntä.',
        translation: '“Só algumas centenas. Por isso nós as protegemos.” De repente, o barco de um pescador se aproxima. O motor faz muito barulho.',
        choices: [
          { text: 'Linu viittoo kalastajalle hiljaa: “Sammuta moottori, täällä on norppia!”', translation: 'O Linu faz sinais ao pescador, em voz baixa: “Desligue o motor, aqui tem focas!”', next: 'final_bom' },
          { text: 'Linu huutaa: “Hei! Katso, norppia!”', translation: 'O Linu grita: “Ei! Olhe, focas!”', next: 'final_pako' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kalastaja sammuttaa moottorin ja soutaa pois. Norpat nukkuvat kivellä rauhassa. Kaisa hymyilee: “Hyvä, Linu!”',
        translation: 'O pescador desliga o motor e se afasta remando. As focas dormem em paz na pedra. A Kaisa sorri: “Muito bem, Linu!”',
        ending: { tone: 'bom', title: 'Guardião das focas', message: 'O Linu ajudou a proteger uma das focas mais raras do mundo.' },
      },
      final_pako: {
        emoji: '💦',
        text: 'Huuto on liian kova. Norpat hyppäävät veteen ja katoavat. “Ne tulevat takaisin huomenna”, Kaisa sanoo.',
        translation: 'O grito é alto demais. As focas pulam na água e desaparecem. “Elas voltam amanhã”, diz a Kaisa.',
        ending: { tone: 'neutro', title: 'Mergulho', message: 'Com o grito, as focas fugiram. No Saimaa, a regra é silêncio!' },
      },
    },
  },
  {
    id: 'fi-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Oopperailta Olavinlinnassa',
    emoji: '🎭',
    summary: 'Em Savonlinna, o Linu compra ingressos para uma ópera dentro de um castelo medieval cercado de água.',
    cultural_context:
      'Olavinlinna, em Savonlinna, é um castelo medieval fundado em 1475, erguido numa ilhota entre dois lagos do sistema do Saimaa. Todo verão ele recebe o Festival de Ópera de Savonlinna, com espetáculos no pátio do castelo. Na praça do mercado da cidade, a especialidade é o lörtsy, um pastel frito recheado de carne ou de maçã.',
    start: 'start',
    glossary: [
      ['lippu → lipun / lippuja', 'ingresso → do ingresso / ingressos (partitivo plural); “pp” vira “p” em sílaba fechada'],
      ['kaksi lippua', 'dois ingressos (número + partitivo singular)'],
      ['linna → linnaan / linnassa', 'castelo → para o castelo / no castelo'],
      ['silta → sillan yli', 'ponte → por cima da ponte (o “lt” vira “ll” em sílaba fechada)'],
      ['portaat', 'escada (plural, como em português “as escadas”)'],
      ['villapaita', 'suéter de lã'],
      ['palella', 'passar frio'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu on Savonlinnassa heinäkuussa. Olavinlinna seisoo saarella keskellä vettä. Illalla linnassa on ooppera!',
        translation: 'O Linu está em Savonlinna em julho. Olavinlinna se ergue numa ilha no meio da água. À noite há ópera no castelo!',
        choices: [
          { text: 'Linu menee heti lippukassalle.', translation: 'O Linu vai direto à bilheteria.', next: 'kassa' },
          { text: 'Linu menee ensin torille ja syö lörtsyn.', translation: 'O Linu vai primeiro à praça do mercado e come um lörtsy.', next: 'lortsy' },
        ],
      },
      lortsy: {
        emoji: '🥟',
        text: 'Torilla myydään lörtsyjä. Linu syö omenalörtsyn ja juo kahvia. Sitten hän kävelee kassalle.',
        translation: 'Na praça vendem lörtsys. O Linu come um lörtsy de maçã e toma café. Depois vai até a bilheteria.',
        choices: [{ text: 'Linu menee lippukassalle.', translation: 'O Linu vai à bilheteria.', next: 'kassa' }],
      },
      kassa: {
        emoji: '🎟️',
        text: 'Kassalla on pitkä jono. Myyjä sanoo: “Lippuja on enää vähän. Montako lippua haluat?”',
        translation: 'Na bilheteria há uma fila comprida. A vendedora diz: “Restam poucos ingressos. Quantos ingressos você quer?”',
        choices: [{ text: '“Kaksi lippua, kiitos. Ystävä tulee myös.”', translation: '“Dois ingressos, por favor. Uma amiga também vem.”', next: 'ystava' }],
      },
      ystava: {
        emoji: '👩',
        text: 'Illalla Linun ystävä Hanna tulee sillalle. “Hei! Onko sinulla liput?”',
        translation: 'À noite, a amiga do Linu, a Hanna, chega à ponte. “Oi! Você está com os ingressos?”',
        choices: [
          { text: '“On! Kaksi lippua, tässä.”', translation: '“Estou! Dois ingressos, aqui.”', next: 'linna' },
          {
            text: '“Ei ole. Lippuja ei ollut enää.”',
            translation: '“Não estou. Não tinha mais ingressos.”',
            wrong: 'Na bilheteria havia “vähän” (poucos) ingressos, não nenhum, e o Linu pediu “kaksi lippua”. Ele TEM os dois ingressos!',
          },
        ],
      },
      linna: {
        emoji: '🧱',
        text: 'He kävelevät sillan yli linnaan. Linnassa on paksuja kiviseiniä ja kapeita portaita. Hanna sanoo: “Täällä on illalla viileää. Onko sinulla villapaita?”',
        translation: 'Eles atravessam a ponte e entram no castelo. No castelo há paredes grossas de pedra e escadas estreitas. A Hanna diz: “Aqui fica fresco à noite. Você tem um suéter?”',
        choices: [
          { text: '“On! Minulla on kaksi villapaitaa repussa.”', translation: '“Tenho! Tenho dois suéteres na mochila.”', next: 'final_bom' },
          { text: '“Ei ole. Minulla on vain T-paita.”', translation: '“Não tenho. Só tenho uma camiseta.”', next: 'final_kylma' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu antaa toisen villapaidan Hannalle. Laulajat laulavat, ja kivet kaikuvat. Mikä ilta!',
        translation: 'O Linu dá o outro suéter para a Hanna. Os cantores cantam, e as pedras ecoam. Que noite!',
        ending: { tone: 'bom', title: 'Noite de ópera', message: 'Quentinhos e com os ingressos na mão, o Linu e a Hanna curtiram a ópera no castelo.' },
      },
      final_kylma: {
        emoji: '🥶',
        text: 'Ooppera on kaunis, mutta Linu palelee koko illan. Hanna antaa hänelle huivin.',
        translation: 'A ópera é linda, mas o Linu passa frio a noite inteira. A Hanna lhe dá um cachecol.',
        ending: { tone: 'neutro', title: 'Arrepios', message: 'Arrepios de emoção… e de frio! Nas noites de verão finlandesas, leve sempre um “villapaita”.' },
      },
    },
  },
  {
    id: 'fi-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Poroja Inarissa',
    emoji: '🦌',
    summary: 'Em Inari, no norte da Lapônia, o Linu alimenta as renas do criador sámi Niila e espera a aurora boreal.',
    cultural_context:
      'Inari é o centro da cultura sámi na Finlândia: ali ficam o museu Siida e o centro cultural Sajos, sede do Parlamento Sámi. No país se falam três línguas sámi (o sámi do norte, o de Inari e o skolt). As renas vivem soltas, mas todas têm dono, e no inverno comem sobretudo líquen.',
    start: 'start',
    glossary: [
      ['poro → poroja', 'rena → renas (partitivo plural)'],
      ['jäkälä → jäkälää', 'líquen (partitivo: uma quantidade de)'],
      ['säkki → säkistä', 'saco → do saco (kk vira k)'],
      ['kota → kodassa', 'cabana lapona → na cabana (t vira d)'],
      ['saamelainen', 'sámi (pessoa do povo sámi)'],
      ['poromies', 'criador de renas'],
      ['revontulet', 'aurora boreal (literalmente “fogos da raposa”; sempre no plural)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu on Inarissa, Lapissa. On maaliskuu, ja lunta on paljon. Porotila on järven rannalla.',
        translation: 'O Linu está em Inari, na Lapônia. É março, e há muita neve. A fazenda de renas fica à beira de um lago.',
        choices: [
          { text: 'Linu menee suoraan porotilalle.', translation: 'O Linu vai direto para a fazenda de renas.', next: 'tila' },
          { text: 'Linu menee ensin museoon.', translation: 'O Linu vai primeiro ao museu.', next: 'museo' },
        ],
      },
      museo: {
        emoji: '🏛️',
        text: 'Museossa Linu oppii, että Suomessa puhutaan kolmea saamen kieltä. Hän ostaa kaksi postikorttia. Sitten hän lähtee tilalle.',
        translation: 'No museu, o Linu aprende que na Finlândia se falam três línguas sámi. Ele compra dois cartões-postais. Depois vai para a fazenda.',
        choices: [{ text: 'Linu kävelee porotilalle.', translation: 'O Linu caminha até a fazenda de renas.', next: 'tila' }],
      },
      tila: {
        emoji: '🧔',
        text: 'Tilalla asuu Niila. Hän on saamelainen poromies. “Tervetuloa! Haluatko ruokkia poroja?”',
        translation: 'Na fazenda mora o Niila. Ele é um criador de renas sámi. “Bem-vindo! Quer alimentar as renas?”',
        choices: [{ text: '“Haluan! Mitä porot syövät?”', translation: '“Quero! O que as renas comem?”', next: 'jakala' }],
      },
      jakala: {
        emoji: '🌿',
        text: '“Talvella porot syövät jäkälää. Ota jäkälää tästä säkistä ja anna sitä poroille.”',
        translation: '“No inverno as renas comem líquen. Pegue líquen deste saco e dê às renas.”',
        choices: [
          { text: 'Linu antaa poroille jäkälää.', translation: 'O Linu dá líquen às renas.', next: 'porot' },
          {
            text: 'Linu antaa poroille leipää.',
            translation: 'O Linu dá pão às renas.',
            wrong: 'O Niila disse que no inverno as renas comem “jäkälää” (líquen) e mandou pegar do saco (“säkistä”). Pão não!',
          },
        ],
      },
      porot: {
        emoji: '🦌',
        text: 'Poroja tulee paljon: kymmenen, viisitoista, kaksikymmentä! Yksi poro on valkoinen. Niila sanoo: “Valkoinen poro tuo onnea.”',
        translation: 'Vêm muitas renas: dez, quinze, vinte! Uma rena é branca. O Niila diz: “Rena branca traz sorte.”',
        choices: [
          { text: 'Linu ottaa kuvan valkoisesta porosta.', translation: 'O Linu tira uma foto da rena branca.', next: 'kota' },
          { text: 'Linu yrittää silittää valkoista poroa.', translation: 'O Linu tenta fazer carinho na rena branca.', next: 'karkaa' },
        ],
      },
      karkaa: {
        emoji: '💨',
        text: 'Poro säikähtää ja juoksee pois. Niila sanoo: “Porot eivät ole lemmikkejä. Niitä ei silitetä.”',
        translation: 'A rena se assusta e sai correndo. O Niila diz: “Renas não são bichos de estimação. Não se faz carinho nelas.”',
        choices: [{ text: '“Anteeksi! En tiennyt.”', translation: '“Desculpe! Eu não sabia.”', next: 'kota' }],
      },
      kota: {
        emoji: '🔥',
        text: 'Illalla he istuvat kodassa. Tulella kiehuu kahvi, ja kodan katossa on reikä. Niila sanoo: “Tänä yönä taivas on kirkas.”',
        translation: 'À noite eles se sentam na cabana. Sobre o fogo ferve o café, e no teto da cabana há um buraco. O Niila diz: “Esta noite o céu está limpo.”',
        choices: [
          { text: 'Linu menee ulos katsomaan taivasta.', translation: 'O Linu sai para olhar o céu.', next: 'final_bom' },
          { text: 'Linu jää tulen ääreen ja nukahtaa.', translation: 'O Linu fica junto ao fogo e pega no sono.', next: 'final_uni' },
        ],
      },
      final_bom: {
        emoji: '🌌',
        text: 'Taivaalla on revontulia: vihreitä ja violetteja valoja! Linu katsoo niitä pitkään.',
        translation: 'No céu há aurora boreal: luzes verdes e violeta! O Linu fica olhando por muito tempo.',
        ending: { tone: 'bom', title: 'Fogos da raposa', message: 'O Linu viu a aurora boreal no céu de Inari. Uma noite para nunca esquecer.' },
      },
      final_uni: {
        emoji: '😴',
        text: 'Linu nukkuu lämpimässä kodassa. Aamulla Niila kertoo: “Yöllä oli upeita revontulia!” Voi ei!',
        translation: 'O Linu dorme na cabana quentinha. De manhã, o Niila conta: “À noite teve uma aurora boreal incrível!” Ah, não!',
        ending: { tone: 'neutro', title: 'Dormiu no ponto', message: 'Quentinho e dormindo, o Linu perdeu a aurora. Quando o céu está limpo, vale a pena sair!' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'fi-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Rengas puhki Ahvenanmaalla',
    emoji: '🚲',
    summary: 'Pedalando pelas ilhas Åland, o Linu fura um pneu e é socorrido por um senhor que fala sueco — e um pouco de finlandês.',
    cultural_context:
      'Åland (em finlandês, Ahvenanmaa) é um arquipélago autônomo da Finlândia, desmilitarizado, cuja única língua oficial é o sueco. Chega-se lá de navio a partir de Turku, as estradas planas atraem ciclistas, e há várias igrejas medievais de pedra. O doce típico é a panqueca de Åland, servida com creme de ameixa e chantili.',
    start: 'start',
    glossary: [
      ['tuli / vuokrasi / ajoi', 'veio / alugou / andou, dirigiu (imperfeito: o passado da narração)'],
      ['rengas on puhki', 'o pneu está furado'],
      ['Käännä pyörä ylösalaisin!', 'Vire a bicicleta de cabeça para baixo! (imperativo)'],
      ['Ota rengas pois ja anna se minulle.', 'Tire o pneu e me dê. (objeto inteiro: no imperativo fica na forma básica)'],
      ['paikata', 'remendar'],
      ['Puhutteko suomea?', 'O senhor fala finlandês? (“te” de cortesia)'],
      ['pannukakku', 'panqueca de forno'],
      ['satama', 'porto'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu tuli aamulla laivalla Turusta Ahvenanmaalle. Hän vuokrasi pyörän Maarianhaminasta ja ajoi maaseudulle. Tiet olivat hiljaisia, ja pellot kukkivat.',
        translation: 'O Linu chegou de manhã de navio de Turku a Åland. Ele alugou uma bicicleta em Mariehamn e foi pedalando para o campo. As estradas estavam tranquilas, e os campos estavam em flor.',
        choices: [
          { text: 'Linu pysähtyi vanhalle kirkolle.', translation: 'O Linu parou numa igreja antiga.', next: 'kirkko' },
          { text: 'Linu ajoi suoraan kohti rantaa.', translation: 'O Linu pedalou direto em direção à praia.', next: 'rengas' },
        ],
      },
      kirkko: {
        emoji: '⛪',
        text: 'Linu näki vanhan kivikirkon ja meni sisään. Kirkossa oli viileää ja hiljaista. Sitten hän jatkoi matkaa kohti rantaa.',
        translation: 'O Linu viu uma velha igreja de pedra e entrou. Lá dentro estava fresco e silencioso. Depois ele continuou a viagem em direção à praia.',
        choices: [{ text: 'Linu nousi taas pyörän selkään.', translation: 'O Linu montou de novo na bicicleta.', next: 'rengas' }],
      },
      rengas: {
        emoji: '💥',
        text: 'Yhtäkkiä kuului “pssss”: takarengas oli puhki! Linu katsoi ympärilleen. Lähellä oli punainen talo, ja pihalla seisoi vanha mies.',
        translation: 'De repente se ouviu “psssss”: o pneu de trás estava furado! O Linu olhou em volta. Perto dali havia uma casa vermelha, e no quintal estava um senhor.',
        choices: [{ text: 'Linu talutti pyörän talolle.', translation: 'O Linu levou a bicicleta empurrando até a casa.', next: 'mies' }],
      },
      mies: {
        emoji: '👴',
        text: 'Mies sanoi: “Hej!” Linu vastasi suomeksi: “Anteeksi, puhutteko suomea?” Mies hymyili: “Vähän. Täällä puhutaan ruotsia, mutta opin suomea koulussa.”',
        translation: 'O homem disse: “Hej!” (Oi!, em sueco). O Linu respondeu em finlandês: “Desculpe, o senhor fala finlandês?” O homem sorriu: “Um pouco. Aqui se fala sueco, mas aprendi finlandês na escola.”',
        choices: [
          { text: '“Pyörän rengas meni puhki. Voitteko auttaa?”', translation: '“O pneu da bicicleta furou. O senhor pode ajudar?”', next: 'apu' },
          {
            text: '“Ai, te ette puhu suomea. Hei hei!”',
            translation: '“Ah, o senhor não fala finlandês. Tchau!”',
            wrong: 'O homem respondeu “Vähän” (um pouco) e contou “opin suomea koulussa”: aprendeu finlandês na escola. Ele fala, sim!',
          },
        ],
      },
      apu: {
        emoji: '🔧',
        text: 'Mies toi pumpun ja paikkaussarjan. “Käännä pyörä ylösalaisin”, hän neuvoi. “Ota sitten rengas pois ja anna se minulle.”',
        translation: 'O homem trouxe uma bomba e um kit de remendo. “Vire a bicicleta de cabeça para baixo”, orientou ele. “Depois tire o pneu e me dê.”',
        choices: [
          { text: 'Linu käänsi pyörän, otti renkaan pois ja antoi sen miehelle.', translation: 'O Linu virou a bicicleta, tirou o pneu e o entregou ao homem.', next: 'korjaus' },
          {
            text: 'Linu antoi miehelle koko pyörän.',
            translation: 'O Linu deu a bicicleta inteira ao homem.',
            wrong: 'O homem pediu “Ota rengas pois ja anna se minulle”: tire o PNEU e me dê o pneu (“se” = ele, o pneu). Não a bicicleta inteira!',
          },
        ],
      },
      korjaus: {
        emoji: '🥞',
        text: 'Mies paikkasi reiän, ja Linu pumppasi renkaan täyteen. Sitten mies kysyi: “Haluatko kahvia? Vaimo teki eilen ahvenanmaalaista pannukakkua.”',
        translation: 'O homem remendou o furo, e o Linu encheu o pneu. Depois o homem perguntou: “Quer um café? Minha esposa fez ontem panqueca de Åland.”',
        choices: [
          { text: '“Kyllä, kiitos!”', translation: '“Quero, obrigado!”', next: 'kahvi' },
          { text: '“Kiitos, mutta minun täytyy jatkaa. Laiva lähtee illalla.”', translation: '“Obrigado, mas preciso continuar. O navio sai à noite.”', next: 'final_laiva' },
        ],
      },
      kahvi: {
        emoji: '☕',
        text: 'Linu söi pannukakkua luumukiisselin ja kermavaahdon kanssa. Mies kertoi saarten historiasta, ja aika kului nopeasti. Yhtäkkiä Linu huomasi, että kello oli jo kuusi!',
        translation: 'O Linu comeu panqueca com creme de ameixa e chantili. O homem contou a história das ilhas, e o tempo passou depressa. De repente, o Linu percebeu que já eram seis horas!',
        choices: [
          { text: 'Linu kiitti ja lähti heti satamaan.', translation: 'O Linu agradeceu e foi logo para o porto.', next: 'final_bom' },
          { text: 'Linu otti vielä toisen palan.', translation: 'O Linu pegou mais um pedaço.', next: 'final_myoha' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ehti laivaan viime hetkellä. Kannella hän katsoi, kuinka saaret katosivat iltaruskoon.',
        translation: 'O Linu alcançou o navio no último minuto. No convés, ele viu as ilhas sumirem no crepúsculo.',
        ending: { tone: 'bom', title: 'Pneu, panqueca e navio', message: 'O Linu entendeu as instruções, fez um amigo em Åland e ainda pegou o navio.' },
      },
      final_myoha: {
        emoji: '🌙',
        text: 'Kun Linu tuli satamaan, laiva oli jo lähtenyt. Hän soitti miehelle, ja mies sanoi: “Tule takaisin. Meillä on vierashuone.”',
        translation: 'Quando o Linu chegou ao porto, o navio já tinha partido. Ele ligou para o homem, que disse: “Volte. Temos um quarto de hóspedes.”',
        ending: { tone: 'neutro', title: 'Mais uma noite em Åland', message: 'O Linu perdeu o navio por causa da panqueca, mas ganhou mais uma noite nas ilhas.' },
      },
      final_laiva: {
        emoji: '⛴️',
        text: 'Linu kiitti ja ajoi satamaan. Hän ehti laivaan hyvissä ajoin, mutta pannukakku jäi maistamatta.',
        translation: 'O Linu agradeceu e pedalou até o porto. Chegou ao navio com folga, mas ficou sem provar a panqueca.',
        ending: { tone: 'neutro', title: 'Pontual demais', message: 'O navio não foi perdido, mas a panqueca de Åland sim. Às vezes dá tempo para um café!' },
      },
    },
  },
  {
    id: 'fi-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Auringonnousu Kolilla',
    emoji: '🌅',
    summary: 'Em Koli, na Carélia do Norte, o amigo Tuomas acorda o Linu às quatro da manhã para ver o nascer do sol sobre o lago Pielinen.',
    cultural_context:
      'O parque nacional de Koli, na Carélia do Norte, tem colinas cobertas de floresta sobre o grande lago Pielinen. A vista do topo, o Ukko-Koli, inspirou pintores e artistas finlandeses do fim do século XIX, como Eero Järnefelt, e é considerada uma das paisagens nacionais da Finlândia.',
    start: 'start',
    glossary: [
      ['heräsi / nousi', 'acordou / levantou-se (imperfeito)'],
      ['Nouse!', 'Levante-se! (imperativo)'],
      ['Älä unohda sitä!', 'Não esqueça isso! (“älä” + verbo: imperativo negativo)'],
      ['Ota otsalamppu!', 'Pegue a lanterna de cabeça! (objeto do imperativo na forma básica)'],
      ['Pidä kiinni kaiteesta!', 'Segure no corrimão!'],
      ['huippu → huipulle', 'topo → para o topo (pp vira p)'],
      ['auringonnousu', 'nascer do sol'],
    ],
    nodes: {
      start: {
        emoji: '⏰',
        text: 'Linu heräsi kello neljä, kun ystävä Tuomas koputti oveen. “Nouse!” Tuomas sanoi. “Kiipeämme Ukko-Kolille katsomaan auringonnousua.”',
        translation: 'O Linu acordou às quatro horas, quando o amigo Tuomas bateu à porta. “Levante-se!”, disse o Tuomas. “Vamos subir o Ukko-Koli para ver o nascer do sol.”',
        choices: [
          { text: 'Linu nousi heti ja puki vaatteet päälle.', translation: 'O Linu se levantou na hora e se vestiu.', next: 'lahto' },
          { text: '“Viisi minuuttia vielä…” Linu nukahti uudelleen.', translation: '“Só mais cinco minutos…” O Linu dormiu de novo.', next: 'uni' },
        ],
      },
      uni: {
        emoji: '😴',
        text: 'Tuomas odotti ja odotti. Lopulta hän tuli sisään ja veti peiton pois. “Nyt! Aurinko ei odota pingviiniä.”',
        translation: 'O Tuomas esperou e esperou. Por fim, entrou e puxou o cobertor. “Agora! O sol não espera pinguim.”',
        choices: [{ text: 'Linu nousi ja puki vaatteet päälle.', translation: 'O Linu se levantou e se vestiu.', next: 'lahto' }],
      },
      lahto: {
        emoji: '🔦',
        text: 'Ulkona oli vielä hämärää ja viileää. “Ota otsalamppu ja vesipullo”, Tuomas sanoi. “Kamera on pöydällä. Älä unohda sitä!”',
        translation: 'Lá fora ainda estava escuro e fresco. “Pegue a lanterna de cabeça e a garrafa de água”, disse o Tuomas. “A câmera está na mesa. Não a esqueça!”',
        choices: [
          { text: 'Linu otti lampun, pullon ja kameran.', translation: 'O Linu pegou a lanterna, a garrafa e a câmera.', next: 'polku' },
          {
            text: 'Linu jätti kameran pöydälle, niin kuin Tuomas sanoi.',
            translation: 'O Linu deixou a câmera na mesa, como o Tuomas disse.',
            wrong: 'O Tuomas disse “Älä unohda sitä!”: NÃO a esqueça! “Älä” é o imperativo negativo. Ele pediu para LEVAR a câmera.',
          },
        ],
      },
      polku: {
        emoji: '🥾',
        text: 'Polku nousi jyrkästi metsän läpi. Kivet olivat märkiä, ja Linu liukastui kerran. “Pidä kiinni kaiteesta!” Tuomas huusi.',
        translation: 'A trilha subia íngreme pela floresta. As pedras estavam molhadas, e o Linu escorregou uma vez. “Segure no corrimão!”, gritou o Tuomas.',
        choices: [
          { text: 'Linu piti kiinni kaiteesta ja käveli varovasti.', translation: 'O Linu segurou no corrimão e caminhou com cuidado.', next: 'huippu' },
          { text: 'Linu alkoi juosta, koska taivas oli jo vaalea.', translation: 'O Linu começou a correr, porque o céu já estava clareando.', next: 'kaatuminen' },
        ],
      },
      kaatuminen: {
        emoji: '🤕',
        text: 'Linu kaatui märälle kivelle ja satutti siipensä. Onneksi mitään ei mennyt rikki. Loppumatkan hän käveli hitaasti ja piti kiinni kaiteesta.',
        translation: 'O Linu caiu na pedra molhada e machucou a asa. Por sorte, nada quebrou. No resto do caminho, ele andou devagar, segurando no corrimão.',
        choices: [{ text: '“Olit oikeassa, Tuomas.”', translation: '“Você tinha razão, Tuomas.”', next: 'huippu' }],
      },
      huippu: {
        emoji: '🏞️',
        text: 'He tulivat huipulle juuri ajoissa. Alhaalla oli Pielinen saarineen, ja taivas muuttui punaiseksi. “Ota kuva nyt!” Tuomas kuiskasi.',
        translation: 'Eles chegaram ao topo bem na hora. Lá embaixo estava o Pielinen com suas ilhas, e o céu ficou vermelho. “Tire a foto agora!”, sussurrou o Tuomas.',
        choices: [
          { text: 'Linu otti kameran esiin ja kuvasi auringonnousun.', translation: 'O Linu pegou a câmera e fotografou o nascer do sol.', next: 'final_bom' },
          { text: 'Linu vain katsoi maisemaa eikä ottanut kuvaa.', translation: 'O Linu só olhou a paisagem e não tirou foto.', next: 'final_muisto' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kuvassa oli punainen taivas, sininen järvi ja tummat metsät. Tuomas sanoi: “Tämä kuva on kuin maalaus.”',
        translation: 'Na foto havia o céu vermelho, o lago azul e as florestas escuras. O Tuomas disse: “Esta foto parece uma pintura.”',
        ending: { tone: 'bom', title: 'Paisagem nacional', message: 'O Linu acordou cedo, seguiu as instruções e guardou o nascer do sol de Koli na câmera.' },
      },
      final_muisto: {
        emoji: '🌄',
        text: 'Aurinko nousi, ja hetki oli ohi. Linulla ei ollut kuvaa, mutta hän muisti värit pitkään.',
        translation: 'O sol nasceu, e o momento passou. O Linu não tinha foto, mas se lembrou das cores por muito tempo.',
        ending: { tone: 'neutro', title: 'Só na memória', message: 'O Tuomas disse “Ota kuva nyt!” e a câmera ficou na mochila. Pelo menos a lembrança ninguém tira!' },
      },
    },
  },
  {
    id: 'fi-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Hämeen linnan salaisuus',
    emoji: '🏯',
    summary: 'Numa visita guiada ao castelo de Häme, em Hämeenlinna, o Linu esquece o cachecol na torre e precisa decidir como buscá-lo.',
    cultural_context:
      'O castelo de Häme, em Hämeenlinna, começou a ser construído no fim do século XIII, quando a região estava sob domínio sueco, e fica à beira do lago Vanajavesi. Mais tarde, por muito tempo, serviu de prisão. Hämeenlinna é também a cidade natal do compositor Jean Sibelius, e a casa onde ele nasceu hoje é um museu.',
    start: 'start',
    glossary: [
      ['matkusti / käveli / näytti', 'viajou / caminhou / parecia (imperfeito)'],
      ['Seuratkaa minua!', 'Sigam-me! (imperativo plural)'],
      ['Älkää avatko ovia!', 'Não abram as portas! (“älkää” + -ko/-kö: imperativo negativo no plural)'],
      ['kaulahuivi', 'cachecol'],
      ['jäi torniin', 'ficou (esquecido) na torre'],
      ['hakea', 'ir buscar'],
      ['syntymäkoti', 'casa natal'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Lauantaina Linu matkusti junalla Helsingistä Hämeenlinnaan. Asemalta hän käveli järven rantaa pitkin linnalle. Punatiilinen linna näytti vanhalta ja mahtavalta.',
        translation: 'No sábado, o Linu viajou de trem de Helsinque a Hämeenlinna. Da estação, foi caminhando pela beira do lago até o castelo. O castelo de tijolos vermelhos parecia antigo e imponente.',
        choices: [
          { text: 'Linu lähti opastetulle kierrokselle.', translation: 'O Linu entrou numa visita guiada.', next: 'opas' },
          { text: 'Linu kiersi linnaa ensin yksin.', translation: 'O Linu andou pelo castelo primeiro sozinho.', next: 'yksin' },
        ],
      },
      yksin: {
        emoji: '🚶',
        text: 'Linu käveli pitkiä käytäviä ja katsoi vanhoja huoneita. Hän ei ymmärtänyt kaikkia kylttejä. Sitten hän kuuli oppaan äänen ja meni ryhmän luo.',
        translation: 'O Linu andou por corredores compridos e olhou salas antigas. Ele não entendeu todas as placas. Então ouviu a voz de uma guia e foi até o grupo.',
        choices: [{ text: 'Linu liittyi ryhmään.', translation: 'O Linu se juntou ao grupo.', next: 'opas' }],
      },
      opas: {
        emoji: '👩‍🏫',
        text: 'Opas kertoi: “Ruotsalaiset rakensivat linnan 1200-luvun lopulla. Myöhemmin täällä oli pitkään vankila.” Sitten hän sanoi ryhmälle: “Seuratkaa minua ja pysykää yhdessä. Älkää avatko ovia!”',
        translation: 'A guia contou: “Os suecos construíram o castelo no fim do século XIII. Mais tarde, por muito tempo, aqui funcionou uma prisão.” Depois ela disse ao grupo: “Sigam-me e fiquem juntos. Não abram as portas!”',
        choices: [
          { text: 'Linu seurasi opasta portaita ylös.', translation: 'O Linu seguiu a guia escada acima.', next: 'torni' },
          {
            text: 'Linu avasi pienen oven ja katsoi sisään.',
            translation: 'O Linu abriu uma portinha e olhou para dentro.',
            wrong: 'A guia disse “Älkää avatko ovia!”: NÃO abram as portas! “Älkää” é o imperativo negativo no plural, para o grupo todo.',
          },
        ],
      },
      torni: {
        emoji: '🧣',
        text: 'Tornissa oli kuuma, joten Linu otti kaulahuivin pois ja pani sen penkille. Ikkunasta näkyi Vanajavesi. Sitten ryhmä lähti alas pihalle.',
        translation: 'Na torre estava quente, então o Linu tirou o cachecol e o pôs num banco. Pela janela se via o lago Vanajavesi. Depois o grupo desceu para o pátio.',
        choices: [{ text: 'Linu lähti muiden mukana.', translation: 'O Linu desceu com os outros.', next: 'piha' }],
      },
      piha: {
        emoji: '😳',
        text: 'Pihalla opas sanoi: “Kierros päättyi. Kiitos!” Silloin Linu huomasi, että kaulahuivi puuttui. Se jäi torniin!',
        translation: 'No pátio, a guia disse: “A visita terminou. Obrigada!” Nesse momento o Linu percebeu que o cachecol estava faltando. Tinha ficado na torre!',
        choices: [
          { text: '“Anteeksi, voinko hakea huivin tornista?”', translation: '“Com licença, posso buscar o cachecol na torre?”', next: 'avain' },
          { text: 'Linu juoksi yksin takaisin torniin.', translation: 'O Linu correu sozinho de volta para a torre.', next: 'final_lukko' },
          {
            text: 'Linu etsi huivia pihalta.',
            translation: 'O Linu procurou o cachecol no pátio.',
            wrong: 'O Linu pôs o cachecol “penkille” (num banco) lá na TORRE, e o texto diz “Se jäi torniin”: ficou na torre, não no pátio.',
          },
        ],
      },
      avain: {
        emoji: '🗝️',
        text: 'Opas hymyili: “Tietysti. Tule mukaan, minulla on avain.” He hakivat huivin yhdessä. Portailla opas kertoi, että Jean Sibelius syntyi Hämeenlinnassa.',
        translation: 'A guia sorriu: “Claro. Venha comigo, eu tenho a chave.” Eles buscaram o cachecol juntos. Na escada, a guia contou que Jean Sibelius nasceu em Hämeenlinna.',
        choices: [
          { text: '“Todellako? Menen katsomaan hänen syntymäkotiaan!”', translation: '“Sério? Vou visitar a casa onde ele nasceu!”', next: 'final_bom' },
          { text: '“Kiitos! Nyt minun täytyy mennä junaan.”', translation: '“Obrigado! Agora preciso pegar o trem.”', next: 'final_juna' },
        ],
      },
      final_bom: {
        emoji: '🎻',
        text: 'Linu kävi Sibeliuksen syntymäkodissa, joka on nyt museo. Illalla junassa hän kuunteli Finlandiaa ja katsoi ikkunasta pimeitä metsiä.',
        translation: 'O Linu visitou a casa natal de Sibelius, que hoje é um museu. À noite, no trem, ele ouviu a “Finlandia” e olhou as florestas escuras pela janela.',
        ending: { tone: 'bom', title: 'Castelo e música', message: 'O Linu pediu ajuda, recuperou o cachecol e ainda descobriu a cidade de Sibelius.' },
      },
      final_juna: {
        emoji: '🚆',
        text: 'Linu kiitti opasta ja käveli asemalle. Junassa hän kietoi huivin kaulaan ja nukahti.',
        translation: 'O Linu agradeceu à guia e foi a pé até a estação. No trem, enrolou o cachecol no pescoço e pegou no sono.',
        ending: { tone: 'bom', title: 'Cachecol de volta', message: 'Pedir com educação abriu a porta — literalmente. O cachecol voltou para casa.' },
      },
      final_lukko: {
        emoji: '🔒',
        text: 'Tornin ovi oli jo lukossa. Linu odotti oven takana puoli tuntia, kunnes vartija tuli. Huivi löytyi, mutta Linun juna meni ilman häntä.',
        translation: 'A porta da torre já estava trancada. O Linu esperou atrás da porta meia hora, até que um vigia apareceu. O cachecol foi encontrado, mas o trem do Linu partiu sem ele.',
        ending: { tone: 'neutro', title: 'Porta trancada', message: 'Correr sozinho não adiantou: a torre estava fechada. A guia tinha a chave — era só pedir!' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'fi-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Suomenlinnan muureilla',
    emoji: '🏰',
    summary: 'Em Helsinque, o Linu pega a balsa para a fortaleza de Suomenlinna com o amigo Mikko, que já esteve lá muitas vezes.',
    cultural_context:
      'Suomenlinna é uma fortaleza marítima construída a partir de 1748, quando a Finlândia fazia parte do reino da Suécia, sobre ilhas na entrada do porto de Helsinque. É Patrimônio Mundial da UNESCO desde 1991, e uma balsa a liga à Praça do Mercado (Kauppatori) o ano inteiro.',
    start: 'start',
    glossary: [
      ['lautta', 'balsa'],
      ['linnoitus', 'fortaleza'],
      ['olen käynyt / en ole käynyt', 'já estive / não estive (perfeito de “käydä”: “olla” + particípio)'],
      ['oli jättänyt', 'tinha deixado (mais-que-perfeito: “olla” no passado + particípio)'],
      ['lippuni / lippusi / lippunsa', 'minha / sua / a passagem dele (sufixos possessivos)'],
      ['ystävänsä', 'o amigo dele'],
      ['tykki', 'canhão'],
      ['muuri', 'muralha'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Oli aurinkoinen kesäpäivä Helsingissä. Linu ja hänen ystävänsä Mikko odottivat lauttaa Kauppatorin laiturilla. Mikko on käynyt Suomenlinnassa jo kymmenen kertaa, mutta Linu ei ole koskaan käynyt siellä.',
        translation: 'Era um dia ensolarado de verão em Helsinque. O Linu e o amigo dele, o Mikko, esperavam a balsa no cais da Praça do Mercado. O Mikko já foi a Suomenlinna dez vezes, mas o Linu nunca esteve lá.',
        choices: [
          { text: 'Linu tarkisti, oliko hänen lippunsa taskussa.', translation: 'O Linu conferiu se a passagem dele estava no bolso.', next: 'lippu' },
          { text: 'Linu osti kahvit torilta ennen lähtöä.', translation: 'O Linu comprou cafés na feira antes da partida.', next: 'kahvi' },
          {
            text: 'Linu sanoi Mikolle: “Minäkin olen käynyt siellä monta kertaa!”',
            translation: 'O Linu disse ao Mikko: “Eu também já estive lá muitas vezes!”',
            wrong: 'O texto diz que o Linu “ei ole koskaan käynyt” lá: ele NUNCA esteve em Suomenlinna. O perfeito negativo se faz com o “ei” conjugado + “ole” + particípio (en ole käynyt, et ole käynyt, ei ole käynyt).',
          },
        ],
      },
      kahvi: {
        emoji: '☕',
        text: 'Torilla Linu osti kaksi kahvia ja kaksi munkkia. Kun hän palasi laiturille, lautta oli jo saapunut, ja ihmiset nousivat kyytiin. Mikko huusi: “Tule nopeasti! Onhan sinulla lippusi?”',
        translation: 'Na feira, o Linu comprou dois cafés e dois sonhos. Quando voltou ao cais, a balsa já tinha chegado, e as pessoas estavam embarcando. O Mikko gritou: “Venha rápido! Você está com a sua passagem, né?”',
        choices: [{ text: 'Linu etsi lippuaan taskuistaan.', translation: 'O Linu procurou a passagem nos bolsos.', next: 'lippu' }],
      },
      lippu: {
        emoji: '🎫',
        text: 'Linu etsi lippuaan kaikista taskuistaan, mutta ei löytänyt sitä. Sitten hän muisti, että hän oli jättänyt lipun hotellihuoneensa pöydälle. Mikko sanoi rauhallisesti, että lipun voi ostaa myös automaatista laiturilla.',
        translation: 'O Linu procurou a passagem em todos os bolsos, mas não a encontrou. Então lembrou que tinha deixado a passagem na mesa do quarto do hotel. O Mikko disse com calma que dá para comprar a passagem também na máquina do cais.',
        choices: [
          { text: 'Linu osti uuden lipun automaatista.', translation: 'O Linu comprou uma passagem nova na máquina.', next: 'lautta' },
          { text: 'Linu juoksi takaisin hotelliin hakemaan lippunsa.', translation: 'O Linu correu de volta ao hotel para buscar a passagem.', next: 'hotelli' },
        ],
      },
      hotelli: {
        emoji: '🏨',
        text: 'Hotelli oli kauempana kuin Linu muisti. Kun hän palasi lippunsa kanssa, lautta oli jo lähtenyt, ja Mikko oli mennyt sen mukana. Mikko lähetti viestin: “Odotan sinua linnoituksen portilla!”',
        translation: 'O hotel ficava mais longe do que o Linu lembrava. Quando ele voltou com a passagem, a balsa já tinha saído, e o Mikko tinha ido nela. O Mikko mandou uma mensagem: “Te espero no portão da fortaleza!”',
        ending: { tone: 'neutro', title: 'A balsa não esperou', message: 'Enquanto o Linu buscava a passagem, a balsa partiu. Era só comprar outra na máquina! Agora ele vai na próxima.' },
      },
      lautta: {
        emoji: '🌊',
        text: 'Lautta lähti, ja pian Helsingin rannat jäivät taakse. Matka kesti vain noin viisitoista minuuttia. Mikko kertoi, että hänen isoisänsä oli tehnyt asepalveluksensa Suomenlinnassa nuorena miehenä.',
        translation: 'A balsa partiu, e logo as margens de Helsinque ficaram para trás. A viagem levou só uns quinze minutos. O Mikko contou que o avô dele tinha feito o serviço militar em Suomenlinna quando era jovem.',
        choices: [
          { text: 'Linu halusi nähdä tykit ensin.', translation: 'O Linu quis ver os canhões primeiro.', next: 'tykit' },
          { text: 'Linu halusi kävellä muureilla.', translation: 'O Linu quis andar sobre as muralhas.', next: 'muurit' },
        ],
      },
      tykit: {
        emoji: '💣',
        text: 'Rannalla oli vanhoja tykkejä, jotka osoittivat merelle. Mikko kertoi, että ruotsalaiset olivat alkaneet rakentaa linnoitusta vuonna 1748, kun Suomi oli vielä osa Ruotsia. Linu otti tykistä kuvan ja lähetti sen äidilleen.',
        translation: 'Na margem havia canhões antigos apontados para o mar. O Mikko contou que os suecos tinham começado a construir a fortaleza em 1748, quando a Finlândia ainda fazia parte da Suécia. O Linu tirou uma foto do canhão e mandou para a mãe.',
        choices: [
          { text: 'Sen jälkeen he nousivat muureille.', translation: 'Depois disso, eles subiram nas muralhas.', next: 'muurit' },
          {
            text: 'Linu kysyi, oliko Mikon isoisä rakentanut koko linnoituksen.',
            translation: 'O Linu perguntou se o avô do Mikko tinha construído a fortaleza inteira.',
            wrong: 'Quem começou a construir a fortaleza foram os suecos, em 1748: “ruotsalaiset olivat alkaneet rakentaa”. O avô do Mikko só tinha feito o serviço militar lá (“oli tehnyt asepalveluksensa”).',
          },
        ],
      },
      muurit: {
        emoji: '🧱',
        text: 'Linu ja Mikko kävelivät vanhoilla muureilla, ja mereltä puhalsi kova tuuli. Yhtäkkiä Linu huomasi, että tuuli oli vienyt hänen hattunsa muurin alle nurmikolle. Mikko sanoi: “Älä hyppää! Tuolla on portaat.”',
        translation: 'O Linu e o Mikko andavam pelas muralhas antigas, e um vento forte soprava do mar. De repente, o Linu percebeu que o vento tinha levado o chapéu dele para o gramado, lá embaixo da muralha. O Mikko disse: “Não pule! Ali tem uma escada.”',
        choices: [
          { text: 'Linu käveli portaita alas ja haki hattunsa.', translation: 'O Linu desceu a escada e pegou o chapéu.', next: 'final_bom' },
          { text: 'Linu hyppäsi suoraan muurilta alas.', translation: 'O Linu pulou direto da muralha.', next: 'hyppy' },
        ],
      },
      hyppy: {
        emoji: '🤕',
        text: 'Muuri oli korkeampi kuin Linu oli luullut. Hän laskeutui nurmikolle, mutta hänen jalkaansa alkoi särkeä. Mikko auttoi ystävänsä penkille ja sanoi, että loput linnoituksesta he katsovat ensi kerralla.',
        translation: 'A muralha era mais alta do que o Linu tinha pensado. Ele caiu no gramado, mas o pé começou a doer. O Mikko ajudou o amigo a chegar a um banco e disse que o resto da fortaleza eles veriam da próxima vez.',
        ending: { tone: 'neutro', title: 'Um pulo alto demais', message: 'O Mikko avisou que havia escada. Da próxima vez, o Linu desce com calma e vê a fortaleza inteira.' },
      },
      final_bom: {
        emoji: '✨',
        text: 'Linu haki hattunsa ja painoi sen tiukasti päähänsä. Illalla, kun he istuivat lautalla matkalla takaisin, Linu sanoi: “Nyt minäkin olen käynyt Suomenlinnassa!” Mikko hymyili ja vastasi, että yksi kerta ei riitä.',
        translation: 'O Linu pegou o chapéu e o enfiou bem firme na cabeça. À noite, sentados na balsa de volta, o Linu disse: “Agora eu também já estive em Suomenlinna!” O Mikko sorriu e respondeu que uma vez só não basta.',
        ending: { tone: 'bom', title: 'Primeira visita', message: 'O Linu conheceu a fortaleza do mar de Helsinque e agora pode dizer “olen käynyt Suomenlinnassa”.' },
      },
    },
  },
  {
    id: 'fi-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Mummon runebergintortut',
    emoji: '🧁',
    summary: 'No dia 5 de fevereiro, o Linu vai a Porvoo comer as tortas de Runeberg que a avó da amiga Aino passou a manhã assando.',
    cultural_context:
      'Johan Ludvig Runeberg, o poeta nacional da Finlândia, morou em Porvoo de 1852 até morrer, em 1877, e a casa dele virou museu. No aniversário do poeta, 5 de fevereiro, os finlandeses comem a “runebergintorttu”, um bolinho de amêndoas com geleia de framboesa e um anel de glacê por cima.',
    start: 'start',
    glossary: [
      ['mummo / mummoni', 'vovó / minha avó (sufixo possessivo -ni)'],
      ['on leiponut', 'assou, tem assado (perfeito de “leipoa”)'],
      ['oli asunut', 'tinha morado (mais-que-perfeito)'],
      ['kuolemaansa asti', 'até a morte dele (sufixo possessivo -an/-än da 3ª pessoa)'],
      ['aitta', 'depósito de madeira; em Porvoo, os armazéns vermelhos da beira do rio'],
      ['vadelmahillo', 'geleia de framboesa'],
      ['resepti', 'receita'],
      ['kansallisrunoilija', 'poeta nacional'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Oli helmikuun viides päivä, ja Linu oli tullut bussilla Helsingistä Porvooseen. Hänen ystävänsä Aino oli kutsunut hänet mummonsa luo syömään runebergintorttuja. Aino oli kirjoittanut viestiin: “Mummoni on leiponut torttuja koko aamun!”',
        translation: 'Era 5 de fevereiro, e o Linu tinha vindo de ônibus de Helsinque para Porvoo. A amiga dele, a Aino, tinha convidado o Linu para ir à casa da avó dela comer tortas de Runeberg. A Aino tinha escrito na mensagem: “Minha avó passou a manhã inteira assando tortas!”',
        choices: [
          { text: 'Linu lähti suoraan mummon luo.', translation: 'O Linu foi direto para a casa da avó.', next: 'mummo' },
          { text: 'Linu kävi ensin katsomassa vanhaa kaupunkia.', translation: 'O Linu foi primeiro dar uma olhada na cidade velha.', next: 'vanha' },
          {
            text: 'Linu ajatteli, että Aino itse oli leiponut tortut.',
            translation: 'O Linu pensou que a própria Aino tinha assado as tortas.',
            wrong: 'A mensagem diz “Mummoni on leiponut”: “a MINHA avó assou”. O sufixo -ni em “mummoni” quer dizer “minha”; foi a avó da Aino quem fez as tortas.',
          },
        ],
      },
      vanha: {
        emoji: '🏘️',
        text: 'Vanhassa kaupungissa kadut olivat kapeita ja talot puisia. Joen rannalla seisoi pitkä rivi punaisia aittoja, joiden katoilla oli lunta. Linu otti niin monta kuvaa, että hänen puhelimensa akku loppui.',
        translation: 'Na cidade velha, as ruas eram estreitas e as casas de madeira. Na beira do rio havia uma longa fileira de armazéns vermelhos com neve nos telhados. O Linu tirou tantas fotos que a bateria do celular acabou.',
        choices: [
          { text: 'Linu kysyi tietä ohikulkijalta.', translation: 'O Linu pediu informação a um passante.', next: 'kysy' },
          { text: 'Linu yritti muistaa osoitteen itse.', translation: 'O Linu tentou lembrar o endereço sozinho.', next: 'eksyi' },
        ],
      },
      kysy: {
        emoji: '👴',
        text: 'Vanha mies pysähtyi ja kuunteli Linua. Kun Linu kertoi, että hän oli menossa Ainon mummon luo Jokikadulle, mies hymyili, sillä hän tunsi mummon hyvin. Mies saattoi Linun ovelle asti.',
        translation: 'Um senhor parou e escutou o Linu. Quando o Linu contou que estava indo à casa da avó da Aino, na rua Jokikatu, o homem sorriu, pois conhecia bem a avó. Ele acompanhou o Linu até a porta.',
        choices: [{ text: 'Linu kiitti miestä ja soitti ovikelloa.', translation: 'O Linu agradeceu ao homem e tocou a campainha.', next: 'mummo' }],
      },
      eksyi: {
        emoji: '🌆',
        text: 'Linu käveli ylös ja alas mäkisiä katuja, mutta kaikki punaiset talot näyttivät samanlaisilta. Kun hän vihdoin löysi oikean oven, oli jo pimeää. Aino kertoi, että hän oli soittanut Linulle kymmenen kertaa ja että tortut oli jo syöty.',
        translation: 'O Linu subiu e desceu as ruas cheias de ladeiras, mas todas as casas vermelhas pareciam iguais. Quando finalmente achou a porta certa, já estava escuro. A Aino contou que tinha ligado para ele dez vezes e que as tortas já tinham sido comidas.',
        ending: { tone: 'neutro', title: 'Perdido na cidade velha', message: 'Sem bateria e sem endereço, o Linu se perdeu. Era só pedir informação: em Porvoo todo mundo se conhece!' },
      },
      mummo: {
        emoji: '👵',
        text: 'Ainon mummo avasi oven ja halasi Linua lämpimästi. Keittiössä tuoksuivat manteli ja vadelmahillo, ja pöydällä oli iso lautasellinen torttuja. Mummo kertoi, että hän on leiponut runebergintorttuja joka vuosi jo viisikymmentä vuotta.',
        translation: 'A avó da Aino abriu a porta e deu um abraço caloroso no Linu. A cozinha cheirava a amêndoa e geleia de framboesa, e na mesa havia um pratão de tortas. A avó contou que assa tortas de Runeberg todo ano, há cinquenta anos.',
        choices: [
          { text: 'Linu kysyi, kuka Runeberg oli.', translation: 'O Linu perguntou quem era Runeberg.', next: 'runeberg' },
          { text: 'Linu otti heti tortun ja haukkasi sitä.', translation: 'O Linu pegou logo uma torta e deu uma mordida.', next: 'torttu' },
        ],
      },
      runeberg: {
        emoji: '📜',
        text: 'Mummo kertoi, että Johan Ludvig Runeberg oli Suomen kansallisrunoilija ja että hän oli asunut Porvoossa kuolemaansa asti. Hänen kotinsa on nykyään museo. Aino lisäsi, että tarinan mukaan tortun resepti on peräisin Runebergin kotoa.',
        translation: 'A avó contou que Johan Ludvig Runeberg era o poeta nacional da Finlândia e que tinha morado em Porvoo até a morte. A casa dele hoje é um museu. A Aino acrescentou que, segundo a tradição, a receita da torta vem da casa de Runeberg.',
        choices: [
          { text: 'Linu maistoi vihdoin torttua.', translation: 'O Linu finalmente provou a torta.', next: 'torttu' },
          {
            text: 'Linu kysyi, asuuko Runeberg yhä samassa talossa.',
            translation: 'O Linu perguntou se Runeberg ainda mora na mesma casa.',
            wrong: 'A avó disse que Runeberg “oli asunut Porvoossa kuolemaansa asti”: tinha morado em Porvoo ATÉ A MORTE DELE (o -an de “kuolemaansa” é o possessivo da 3ª pessoa). A casa dele hoje é museu.',
          },
        ],
      },
      torttu: {
        emoji: '🍓',
        text: 'Torttu oli mehevä ja makea, ja sen päällä oli vadelmahilloa ja sokerirengas. Linu söi ensimmäisen tortun niin nopeasti, että mummo nauroi. “Oletko koskaan ennen syönyt runebergintorttua?” mummo kysyi.',
        translation: 'A torta era úmida e doce, e por cima tinha geleia de framboesa e um anel de açúcar. O Linu comeu a primeira tão depressa que a avó riu. “Você já tinha comido torta de Runeberg antes?”, perguntou a avó.',
        choices: [
          { text: 'Linu vastasi, ettei hän ollut koskaan maistanut mitään yhtä hyvää.', translation: 'O Linu respondeu que nunca tinha provado nada tão bom.', next: 'resepti' },
          { text: 'Linu otti vielä kolme torttua.', translation: 'O Linu pegou mais três tortas.', next: 'liikaa' },
        ],
      },
      resepti: {
        emoji: '📝',
        text: 'Mummo ilahtui niin paljon, että hän kirjoitti reseptinsä paperille Linulle. Hän neuvoi, että tortut kannattaa leipoa jo edellisenä päivänä, koska silloin ne ovat mehevämpiä. Linu laittoi paperin varovasti lompakkoonsa.',
        translation: 'A avó ficou tão contente que escreveu a receita dela num papel para o Linu. Ela aconselhou assar as tortas já na véspera, porque assim ficam mais úmidas. O Linu guardou o papel com cuidado na carteira.',
        choices: [{ text: 'Linu kiitti mummoa ja lähti bussille.', translation: 'O Linu agradeceu à avó e foi pegar o ônibus.', next: 'final_bom' }],
      },
      liikaa: {
        emoji: '😵',
        text: 'Neljännen tortun jälkeen Linun vatsa oli niin täynnä, ettei hän jaksanut enää puhua. Hän makasi sohvalla koko illan, kun Aino ja mummo joivat teetä keittiössä. Bussissa Linu lupasi itselleen, että ensi vuonna hän syö vain kaksi.',
        translation: 'Depois da quarta torta, a barriga do Linu estava tão cheia que ele nem tinha forças para falar. Ele passou a noite deitado no sofá enquanto a Aino e a avó tomavam chá na cozinha. No ônibus, o Linu prometeu a si mesmo que no ano que vem comeria só duas.',
        ending: { tone: 'neutro', title: 'Torta demais', message: 'A torta de Runeberg é pequena, mas pesada! O Linu perdeu a conversa e a receita da avó.' },
      },
      final_bom: {
        emoji: '✨',
        text: 'Illalla bussissa Linu katsoi ikkunasta pimeää metsää ja hymyili. Hän oli nähnyt vanhan Porvoon, oppinut uutta Runebergista ja saanut mummon oman reseptin. Hän kirjoitti Ainolle: “Kiitos! Ensi vuonna minä leivon tortut sinulle.”',
        translation: 'À noite, no ônibus, o Linu olhava a floresta escura pela janela e sorria. Ele tinha visto a velha Porvoo, aprendido coisas novas sobre Runeberg e ganhado a receita da própria avó. Escreveu para a Aino: “Obrigado! No ano que vem, eu asso as tortas para você.”',
        ending: { tone: 'bom', title: 'A receita da vovó', message: 'O Linu comemorou o dia de Runeberg do jeito finlandês e voltou para casa com a receita da família.' },
      },
    },
  },
  {
    id: 'fi-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Revontulet Rovaniemellä',
    emoji: '🌌',
    summary: 'Em Rovaniemi, na Lapônia, o Linu sai à noite com a guia Sanna para ver a aurora boreal, a vinte e cinco graus abaixo de zero.',
    cultural_context:
      'Rovaniemi, a capital da Lapônia finlandesa, fica praticamente sobre o Círculo Polar Ártico. A aurora boreal se chama em finlandês “revontulet”, “os fogos da raposa”: segundo uma lenda antiga, uma raposa que corria pelos montes da Lapônia levantava faíscas até o céu com o rabo.',
    start: 'start',
    glossary: [
      ['revontulet', 'aurora boreal (lit. “os fogos da raposa”)'],
      ['on ollut pilvessä', 'tem estado nublado (perfeito)'],
      ['oli jättänyt', 'tinha deixado (mais-que-perfeito)'],
      ['hanskansa / siipensä', 'as luvas dele / as asas dele (sufixo possessivo)'],
      ['pakkanen', 'frio abaixo de zero, geada'],
      ['tunturi', 'monte arredondado e sem árvores da Lapônia'],
      ['tulikettu', 'raposa de fogo'],
      ['kipinä', 'faísca'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu oli matkustanut yöjunalla Helsingistä Rovaniemelle, koska hän halusi nähdä revontulet. Hänen oppaansa Sanna kertoi, että taivas on ollut pilvessä koko viikon. Tänä iltana sääennuste lupasi kuitenkin kirkasta taivasta.',
        translation: 'O Linu tinha viajado de trem noturno de Helsinque a Rovaniemi porque queria ver a aurora boreal. A guia dele, a Sanna, contou que o céu esteve nublado a semana inteira. Mas, para aquela noite, a previsão do tempo prometia céu limpo.',
        choices: [
          { text: 'Linu pukeutui lämpimästi ja lähti Sannan kanssa ulos.', translation: 'O Linu se agasalhou bem e saiu com a Sanna.', next: 'ulos' },
          { text: 'Linu halusi ensin syödä jotain lämmintä.', translation: 'O Linu quis primeiro comer alguma coisa quente.', next: 'ruoka' },
          {
            text: 'Linu sanoi: “Hienoa, sitten revontulia on näkynyt joka ilta!”',
            translation: 'O Linu disse: “Que ótimo, então a aurora apareceu todas as noites!”',
            wrong: 'A Sanna disse que “taivas on ollut pilvessä koko viikon”: o céu ESTEVE NUBLADO a semana toda. Com nuvens não se vê a aurora; só para hoje a previsão prometia céu limpo.',
          },
        ],
      },
      ruoka: {
        emoji: '🍲',
        text: 'Ravintolassa Linu söi poronkäristystä ja perunamuusia. Ruoka oli niin hyvää, että hän unohti katsoa kelloa. Kun hän tuli ulos, Sanna odotti jo autossa: “Missä olet ollut? Olen odottanut puoli tuntia!”',
        translation: 'No restaurante, o Linu comeu picadinho de rena com purê de batata. A comida estava tão boa que ele esqueceu de olhar o relógio. Quando saiu, a Sanna já esperava no carro: “Onde você estava? Estou esperando há meia hora!”',
        choices: [{ text: 'Linu pyysi anteeksi ja nousi autoon.', translation: 'O Linu pediu desculpas e entrou no carro.', next: 'ulos' }],
      },
      ulos: {
        emoji: '❄️',
        text: 'He ajoivat kaupungin ulkopuolelle, pois katuvaloista, ja kävelivät lumista polkua pienelle mäelle. Pakkasta oli kaksikymmentäviisi astetta. Mäen päällä Linu huomasi, että hän oli jättänyt hanskansa autoon.',
        translation: 'Eles foram de carro para fora da cidade, longe da iluminação das ruas, e subiram a pé uma trilha nevada até um pequeno morro. Fazia vinte e cinco graus abaixo de zero. No alto do morro, o Linu percebeu que tinha deixado as luvas no carro.',
        choices: [
          { text: 'Linu juoksi takaisin autolle hakemaan hanskojaan.', translation: 'O Linu correu de volta ao carro para buscar as luvas.', next: 'hanskat' },
          { text: 'Linu pani siipensä taskuihinsa ja jäi odottamaan.', translation: 'O Linu enfiou as asas nos bolsos e ficou esperando.', next: 'odotus' },
        ],
      },
      hanskat: {
        emoji: '🧤',
        text: 'Polku oli liukas, ja matka autolle kesti kauemmin kuin Linu oli ajatellut. Kun hän palasi hanskat kädessään, Sanna osoitti taivaalle. Pohjoisella taivaalla näkyi ohut vihreä viiva.',
        translation: 'A trilha estava escorregadia, e a ida até o carro levou mais tempo do que o Linu tinha imaginado. Quando ele voltou com as luvas na mão, a Sanna apontou para o céu. No céu do norte aparecia uma linha verde e fina.',
        choices: [{ text: 'Linu katsoi ylös.', translation: 'O Linu olhou para cima.', next: 'valot' }],
      },
      odotus: {
        emoji: '⭐',
        text: 'Sanna antoi Linulle termospullosta kuumaa mustikkamehua. He seisoivat hiljaa ja katselivat tähtiä, jotka loistivat kirkkaina. Linun siipiä alkoi kuitenkin palella.',
        translation: 'A Sanna deu ao Linu suco quente de mirtilo da garrafa térmica. Os dois ficaram em silêncio olhando as estrelas, que brilhavam fortes. Mas as asas do Linu começaram a gelar.',
        choices: [
          { text: 'Linu hyppi paikallaan pysyäkseen lämpimänä.', translation: 'O Linu ficou pulando no lugar para se manter aquecido.', next: 'valot' },
          { text: 'Linu sanoi, että hänellä oli liian kylmä, ja halusi palata hotelliin.', translation: 'O Linu disse que estava com frio demais e quis voltar para o hotel.', next: 'hotelli' },
        ],
      },
      hotelli: {
        emoji: '🏨',
        text: 'Sanna ymmärsi, ettei Linu ollut tottunut Lapin pakkaseen, vaikka hän oli pingviini. He ajoivat takaisin kaupunkiin, ja Linu joi hotellissa kuumaa kaakaota. Aamulla hän kuuli, että revontulet olivat näkyneet koko yön.',
        translation: 'A Sanna entendeu que o Linu não estava acostumado ao frio da Lapônia, mesmo sendo pinguim. Eles voltaram para a cidade, e o Linu tomou chocolate quente no hotel. De manhã, ele soube que a aurora tinha aparecido a noite inteira.',
        ending: { tone: 'neutro', title: 'Chocolate quente', message: 'O Linu desistiu cedo demais: a aurora apareceu logo depois. Na Lapônia, é preciso paciência (e luvas)!' },
      },
      valot: {
        emoji: '🌌',
        text: 'Vihreä valo kasvoi ja alkoi liikkua kuin verho tuulessa. Sanna kertoi, että hänen isoisänsä oli kertonut hänelle lapsena tarinan tuliketusta: kettu juoksi tuntureilla, ja sen häntä nosti kipinöitä taivaalle. Siksi valoja kutsutaan revontuliksi.',
        translation: 'A luz verde cresceu e começou a se mexer como uma cortina ao vento. A Sanna contou que o avô dela lhe tinha contado, quando ela era criança, a história da raposa de fogo: a raposa corria pelos montes, e o rabo dela levantava faíscas até o céu. Por isso as luzes se chamam “os fogos da raposa”.',
        choices: [
          { text: 'Linu otti kuvan puhelimellaan.', translation: 'O Linu tirou uma foto com o celular.', next: 'kuva' },
          { text: 'Linu vain katsoi ja nautti.', translation: 'O Linu só ficou olhando e aproveitando.', next: 'final_bom' },
          {
            text: 'Linu kysyi, oliko Sanna itse nähnyt tuliketun tuntureilla.',
            translation: 'O Linu perguntou se a Sanna tinha visto a raposa de fogo pessoalmente nos montes.',
            wrong: 'A raposa de fogo é uma lenda que o avô da Sanna “oli kertonut hänelle lapsena”: TINHA CONTADO a ela quando criança. É uma história, não algo que ela viu.',
          },
        ],
      },
      kuva: {
        emoji: '📱',
        text: 'Kuvassa näkyi pelkkää mustaa, koska puhelin ei osannut kuvata pimeässä. Sanna neuvoi Linua laittamaan puhelimen hetkeksi pois ja katsomaan omilla silmillään. Linu totteli, ja juuri silloin taivas muuttui vihreästä violetiksi.',
        translation: 'Na foto só aparecia preto, porque o celular não conseguia fotografar no escuro. A Sanna aconselhou o Linu a guardar o celular um pouco e olhar com os próprios olhos. O Linu obedeceu, e bem nessa hora o céu passou de verde a violeta.',
        choices: [{ text: 'Linu jäi katsomaan taivasta.', translation: 'O Linu ficou olhando o céu.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Revontulet tanssivat taivaalla lähes tunnin, kunnes ne hiljalleen sammuivat. Autossa Linu sanoi, että hän on nähnyt maailmassa monta ihmettä, mutta ei koskaan mitään tällaista. Sanna hymyili: “Nyt olet nähnyt oikean Lapin.”',
        translation: 'A aurora dançou no céu por quase uma hora, até se apagar devagar. No carro, o Linu disse que já viu muitas maravilhas no mundo, mas nunca nada parecido. A Sanna sorriu: “Agora você viu a Lapônia de verdade.”',
        ending: { tone: 'bom', title: 'Os fogos da raposa', message: 'O Linu aguentou o frio e viu a aurora boreal dançar sobre a Lapônia.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'fi-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Löylyä Pispalassa',
    emoji: '🧖',
    summary: 'Em Tampere, o amigo Juho leva o Linu à sauna pública mais antiga da Finlândia, onde ele aprende as regras não escritas do vapor.',
    cultural_context:
      'A Rajaportti, no bairro de Pispala, em Tampere, é a sauna pública mais antiga da Finlândia ainda em funcionamento: abriu em 1906. A cultura da sauna finlandesa entrou em 2020 na lista do Patrimônio Cultural Imaterial da UNESCO; “löyly” é o vapor que sobe quando se joga água nas pedras quentes do fogão (kiuas).',
    start: 'start',
    glossary: [
      ['löyly', 'o vapor da sauna'],
      ['kiuas / kiukaalle', 'o fogão de pedras da sauna / para cima do fogão'],
      ['lauteet', 'os bancos de madeira da sauna'],
      ['vihta', 'feixe de galhos de bétula para bater de leve nas costas'],
      ['saunotaan / ei käytetä', 'faz-se sauna / não se usa (passivo)'],
      ['Saisiko olla…?', 'Poderia ter…? (condicional: pedido educado)'],
      ['jos minulla olisi…, tekisin…', 'se eu tivesse…, eu faria… (condicional)'],
      ['vilvoitella', 'refrescar-se entre uma rodada e outra de sauna'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'Linu oli tullut Tampereelle, ja hänen ystävänsä Juho vei hänet Pispalaan, Rajaportin saunaan. “Tämä on Suomen vanhin yleinen sauna, joka on yhä käytössä”, Juho kertoi. “Täällä saunotaan samalla tavalla kuin sata vuotta sitten.”',
        translation: 'O Linu tinha chegado a Tampere, e o amigo dele, o Juho, o levou a Pispala, à sauna Rajaportti. “Esta é a sauna pública mais antiga da Finlândia que ainda funciona”, contou o Juho. “Aqui se faz sauna do mesmo jeito que cem anos atrás.”',
        choices: [
          { text: 'Linu näki kassalla vihtoja ja kysyi, mitä niillä tehdään.', translation: 'O Linu viu feixes de bétula no caixa e perguntou o que se faz com eles.', next: 'vihta' },
          { text: 'Linu meni suoraan pukuhuoneeseen.', translation: 'O Linu foi direto para o vestiário.', next: 'puku' },
        ],
      },
      vihta: {
        emoji: '🌿',
        text: 'Juho selitti, että vihta tehdään kesällä koivun oksista. Saunassa sillä lyödään kevyesti selkää, ja koivun tuoksu täyttää koko huoneen. “Jos minulla olisi oma kesämökki, tekisin vihtoja joka juhannus”, Juho sanoi.',
        translation: 'O Juho explicou que o feixe é feito no verão com galhos de bétula. Na sauna, bate-se de leve com ele nas costas, e o cheiro de bétula enche a sala inteira. “Se eu tivesse um chalé de verão, faria feixes todo solstício”, disse o Juho.',
        choices: [{ text: 'Linu osti vihdan ja meni pukuhuoneeseen.', translation: 'O Linu comprou um feixe e foi para o vestiário.', next: 'puku' }],
      },
      puku: {
        emoji: '🩳',
        text: 'Pukuhuoneessa Linu otti uimahousut repustaan. Juho nauroi: “Suomalaisessa saunassa ei yleensä käytetä uimapukua. Yleisissä saunoissa miehet ja naiset saunovat erikseen, ja ennen saunaa käydään suihkussa.”',
        translation: 'No vestiário, o Linu tirou a sunga da mochila. O Juho riu: “Na sauna finlandesa, em geral não se usa roupa de banho. Nas saunas públicas, homens e mulheres ficam separados, e antes da sauna se toma uma ducha.”',
        choices: [
          { text: 'Linu jätti uimahousut kaappiin ja kävi suihkussa.', translation: 'O Linu deixou a sunga no armário e tomou uma ducha.', next: 'lauteet' },
          {
            text: 'Linu puki uimahousut, koska Juho oli sanonut, että niitä käytetään aina.',
            translation: 'O Linu vestiu a sunga, porque o Juho tinha dito que ela é sempre usada.',
            wrong: 'O Juho disse o contrário: “ei yleensä käytetä uimapukua”, em geral NÃO SE USA roupa de banho. “Käytetään” é o passivo (usa-se), e a negação é “ei käytetä”.',
          },
        ],
      },
      lauteet: {
        emoji: '🔥',
        text: 'Saunassa oli kuumaa ja hämärää, ja lauteilla istui jo kolme vanhaa miestä. Yksi heistä kysyi ystävällisesti: “Saisiko olla vähän lisää löylyä?” Kaikki katsoivat Linua, joka istui lähimpänä kiuasta ja vesiämpäriä.',
        translation: 'Na sauna estava quente e escuro, e três senhores já estavam sentados nos bancos. Um deles perguntou, gentil: “Poderia ter um pouco mais de vapor?” Todos olharam para o Linu, que estava sentado mais perto do fogão e do balde de água.',
        choices: [
          { text: 'Linu heitti yhden kauhallisen vettä kiukaalle.', translation: 'O Linu jogou uma concha de água no fogão.', next: 'loyly' },
          { text: 'Linu kaatoi kiukaalle koko ämpärillisen.', translation: 'O Linu despejou o balde inteiro no fogão.', next: 'liikaa' },
          {
            text: 'Linu lähti saunasta, koska mies oli käskenyt hänen mennä ulos.',
            translation: 'O Linu saiu da sauna, porque o homem tinha mandado ele ir embora.',
            wrong: 'Ninguém mandou o Linu sair: o homem perguntou, educado, “Saisiko olla vähän lisää löylyä?”, “Poderia ter um pouco mais de vapor?”. O condicional (-isi-) deixa o pedido gentil, e era o Linu quem estava perto do balde.',
          },
        ],
      },
      liikaa: {
        emoji: '♨️',
        text: 'Kiuas sihisi, ja polttava höyry täytti saunan hetkessä. Vanhat miehet nousivat lauteilta yksi toisensa jälkeen, ja yksi heistä sanoi: “Poika, löylyä heitetään vähän kerrallaan.” Pian Linu istui yksin kuumassa saunassa punaisena ja nolona.',
        translation: 'O fogão chiou, e um vapor ardente encheu a sauna num instante. Os senhores foram saindo dos bancos um atrás do outro, e um deles disse: “Rapaz, vapor se joga um pouco de cada vez.” Logo o Linu estava sozinho na sauna quente, vermelho e sem graça.',
        ending: { tone: 'neutro', title: 'Vapor demais', message: 'Um balde inteiro nas pedras expulsou todo mundo da sauna. Löyly se joga aos pouquinhos, uma concha por vez!' },
      },
      loyly: {
        emoji: '💨',
        text: 'Kiuas sihisi, ja pehmeä löyly levisi saunaan. Miehet huokaisivat tyytyväisinä, ja yksi heistä kehui: “Hyvin heitetty!” Juho kuiskasi, että Linu voisi melkein olla suomalainen.',
        translation: 'O fogão chiou, e um vapor macio se espalhou pela sauna. Os homens suspiraram satisfeitos, e um deles elogiou: “Bem jogado!” O Juho cochichou que o Linu quase poderia ser finlandês.',
        choices: [
          { text: 'Linu jäi juttelemaan miesten kanssa.', translation: 'O Linu ficou conversando com os homens.', next: 'jutut' },
          { text: 'Linu lähti vilvoittelemaan ulos.', translation: 'O Linu saiu para se refrescar.', next: 'ulos' },
        ],
      },
      jutut: {
        emoji: '🗣️',
        text: 'Miehet kertoivat, että tässä samassa saunassa on saunottu jo yli sata vuotta. Ennen monessa Pispalan kodissa ei ollut omaa pesuhuonetta, joten yleisessä saunassa käytiin peseytymässä. “Nykyään tänne tullaan juttelemaan”, yksi miehistä nauroi.',
        translation: 'Os homens contaram que nesta mesma sauna se faz sauna há mais de cem anos. Antigamente, muitas casas de Pispala não tinham banheiro próprio, então as pessoas iam se lavar na sauna pública. “Hoje em dia se vem aqui para bater papo”, riu um deles.',
        choices: [{ text: 'Sitten Linu meni ulos vilvoittelemaan.', translation: 'Depois o Linu saiu para se refrescar.', next: 'ulos' }],
      },
      ulos: {
        emoji: '🌙',
        text: 'Ulkona Linu istui penkillä pyyhe ympärillään, ja iltailma tuntui ihanan viileältä. Juho toi kaksi pulloa kivennäisvettä. “Menisimmekö vielä kerran lauteille?” hän kysyi.',
        translation: 'Lá fora, o Linu sentou num banco enrolado na toalha, e o ar da noite estava deliciosamente fresco. O Juho trouxe duas garrafas de água mineral. “Que tal voltarmos mais uma vez para os bancos?”, ele perguntou.',
        choices: [{ text: 'Linu vastasi: “Mennään!”', translation: 'O Linu respondeu: “Vamos!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'He saunoivat vielä kaksi kertaa, ja joka kerta Linu heitti löylyä vähän kerrallaan. Kotimatkalla hän sanoi, että jos Brasiliassa olisi yhtä hyviä saunoja, hän saunoisi joka viikko. Juho vastasi, että monessa suomalaisessa perheessä niin tehdäänkin.',
        translation: 'Eles fizeram sauna mais duas vezes, e toda vez o Linu jogou o vapor aos pouquinhos. No caminho de volta, ele disse que, se no Brasil houvesse saunas tão boas, ele faria sauna toda semana. O Juho respondeu que em muitas famílias finlandesas é exatamente isso que se faz.',
        ending: { tone: 'bom', title: 'Bem jogado!', message: 'O Linu aprendeu as regras da sauna finlandesa e ganhou elogios dos veteranos de Pispala.' },
      },
    },
  },
  {
    id: 'fi-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Joulurauha Turussa',
    emoji: '🎄',
    summary: 'Na véspera de Natal em Turku, o Linu tenta comer o mingau de arroz da família da Elina e ainda chegar a tempo para a proclamação da Paz de Natal.',
    cultural_context:
      'Todo 24 de dezembro, ao meio-dia, a Paz de Natal (joulurauha) é proclamada em Turku, a cidade mais antiga da Finlândia e capital do país até 1812, da sacada da casa Brinkkala, na Praça do Mercado Velho. A tradição vem da Idade Média, e a cerimônia é transmitida para todo o país. No café da manhã da véspera, muitas famílias comem mingau de arroz com uma amêndoa escondida: quem a encontra terá sorte.',
    start: 'start',
    glossary: [
      ['jouluaatto', 'véspera de Natal'],
      ['joulurauha julistetaan', 'a Paz de Natal é proclamada (passivo)'],
      ['on piilotettu', 'foi escondido (passivo perfeito)'],
      ['riisipuuro', 'mingau de arroz'],
      ['manteli', 'amêndoa'],
      ['jos lähtisimme…, ehtisimme', 'se saíssemos…, daria tempo (condicional)'],
      ['glögi', 'vinho quente com especiarias'],
      ['parveke', 'sacada, varanda'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Oli jouluaatto Turussa, ja lunta satoi hiljalleen. Linun ystävä Elina sanoi aamulla: “Kello kaksitoista joulurauha julistetaan Vanhalla Suurtorilla. Jos lähtisimme puoli kahdeltatoista, ehtisimme hyvin.”',
        translation: 'Era véspera de Natal em Turku, e a neve caía devagar. De manhã, a amiga do Linu, a Elina, disse: “Ao meio-dia, a Paz de Natal é proclamada na Praça do Mercado Velho. Se saíssemos às onze e meia, daria tempo com folga.”',
        choices: [
          { text: 'Linu jäi syömään aamupuuroa perheen kanssa.', translation: 'O Linu ficou para comer o mingau do café da manhã com a família.', next: 'puuro' },
          { text: 'Linu halusi lähteä torille heti, jotta he saisivat hyvän paikan.', translation: 'O Linu quis ir para a praça na hora, para eles conseguirem um bom lugar.', next: 'aikaisin' },
          {
            text: 'Linu ajatteli, että joulurauha julistetaan vasta illalla.',
            translation: 'O Linu pensou que a Paz de Natal só seria proclamada à noite.',
            wrong: 'A Elina disse “kello kaksitoista”: ao MEIO-DIA. “Julistetaan” é o passivo presente, “é proclamada”; e “jos lähtisimme…, ehtisimme” é o condicional: “se saíssemos…, daria tempo”.',
          },
        ],
      },
      puuro: {
        emoji: '🥣',
        text: 'Riisipuuro oli kuumaa, ja sen päällä oli kanelia ja sokeria. Elinan äiti kertoi, että puuroon on piilotettu yksi manteli, ja joka sen löytää, saa onnea koko vuodeksi. Linu söi hitaasti ja etsi mantelia lusikallaan.',
        translation: 'O mingau de arroz estava quente, com canela e açúcar por cima. A mãe da Elina contou que uma amêndoa foi escondida no mingau, e quem a encontrar terá sorte o ano todo. O Linu comia devagar, procurando a amêndoa com a colher.',
        choices: [
          { text: 'Linu otti vielä toisen lautasellisen.', translation: 'O Linu pegou mais um prato.', next: 'manteli' },
          { text: 'Linu katsoi kelloa ja nousi pöydästä.', translation: 'O Linu olhou o relógio e se levantou da mesa.', next: 'tori' },
        ],
      },
      manteli: {
        emoji: '🌰',
        text: 'Toisen lautasen pohjalta Linu löysi mantelin! Koko perhe taputti, ja Elinan pikkuveli sanoi, että hän olisi halunnut löytää sen itse. Kello oli kuitenkin jo puoli kaksitoista.',
        translation: 'No fundo do segundo prato, o Linu achou a amêndoa! A família toda aplaudiu, e o irmãozinho da Elina disse que queria ter achado ele mesmo. Mas já eram onze e meia.',
        choices: [
          { text: 'Linu antoi mantelin pikkuveljelle ja lähti kiireesti.', translation: 'O Linu deu a amêndoa ao irmãozinho e saiu correndo.', next: 'tori' },
          { text: 'Linu sanoi, että hän ehtisi vielä juoda kahvin.', translation: 'O Linu disse que ainda daria tempo de tomar um café.', next: 'myohassa' },
        ],
      },
      myohassa: {
        emoji: '📺',
        text: 'Kahvi oli hyvää, mutta kun he vihdoin pääsivät torille, sinne oli kokoontunut niin paljon ihmisiä, ettei Linu nähnyt mitään. Hän kuuli vain kaiuttimista, kuinka joulurauha julistettiin. Elina lohdutti häntä: “Julistus näytetään myös televisiossa. Voisimme katsoa sen illalla tallenteena.”',
        translation: 'O café estava bom, mas quando eles finalmente chegaram à praça, havia tanta gente que o Linu não viu nada. Ele só ouviu pelos alto-falantes a Paz de Natal sendo proclamada. A Elina o consolou: “A proclamação também passa na televisão. Poderíamos ver a gravação à noite.”',
        ending: { tone: 'neutro', title: 'Um café a mais', message: 'O café custou a vista da sacada. Na Finlândia, horário é horário, ainda mais ao meio-dia de 24 de dezembro!' },
      },
      aikaisin: {
        emoji: '⏰',
        text: 'Linu ja Elina lähtivät torille jo kymmeneltä. Tori oli vielä melkein tyhjä, ja he saivat paikan aivan Brinkkalan talon edestä. Pakkasta oli kuitenkin kymmenen astetta, ja kahden tunnin odotus tuntui pitkältä.',
        translation: 'O Linu e a Elina foram para a praça já às dez. A praça ainda estava quase vazia, e eles conseguiram um lugar bem na frente da casa Brinkkala. Mas fazia dez graus abaixo de zero, e duas horas de espera pareciam muito.',
        choices: [
          { text: 'Linu odotti kärsivällisesti paikallaan.', translation: 'O Linu esperou pacientemente no lugar.', next: 'julistus' },
          { text: 'Linu ehdotti, että he joisivat glögiä kahvilassa.', translation: 'O Linu sugeriu que eles tomassem um vinho quente num café.', next: 'glogi' },
        ],
      },
      glogi: {
        emoji: '🍷',
        text: 'Kahvilassa oli lämmintä, ja glögi tuoksui neilikalta ja kanelilta. Elina kertoi, että Turku on Suomen vanhin kaupunki ja että se oli pääkaupunki vuoteen 1812 asti. Kun he palasivat torille vähän ennen kahtatoista, heidän paikkansa oli yhä vapaana.',
        translation: 'No café estava quentinho, e o vinho quente cheirava a cravo e canela. A Elina contou que Turku é a cidade mais antiga da Finlândia e que foi a capital até 1812. Quando eles voltaram à praça um pouco antes do meio-dia, o lugar deles ainda estava livre.',
        choices: [{ text: 'He asettuivat paikoilleen.', translation: 'Eles se ajeitaram nos seus lugares.', next: 'julistus' }],
      },
      tori: {
        emoji: '🏃',
        text: 'He kävelivät nopeasti Aurajoen rantaa pitkin Vanhalle Suurtorille. Tori oli jo täynnä ihmisiä, mutta Elinan setä oli pitänyt heille paikkaa lähellä Brinkkalan taloa. “Olisitte voineet tulla aikaisemmin!” hän sanoi nauraen.',
        translation: 'Eles andaram depressa pela margem do rio Aura até a Praça do Mercado Velho. A praça já estava lotada, mas o tio da Elina tinha guardado lugar para eles perto da casa Brinkkala. “Vocês podiam ter vindo mais cedo!”, ele disse rindo.',
        choices: [{ text: 'Linu kiitti setää ja katsoi parvekkeelle.', translation: 'O Linu agradeceu ao tio e olhou para a sacada.', next: 'julistus' }],
      },
      julistus: {
        emoji: '📜',
        text: 'Tasan kello kaksitoista Brinkkalan talon parvekkeelle astui mies, joka luki julistuksen vanhalla, juhlallisella kielellä. Julistuksessa toivotettiin kaikille rauhallista joulua ja muistutettiin, ettei joulurauhaa saa rikkoa. Tori hiljeni hetkeksi, ja sitten ihmiset alkoivat laulaa.',
        translation: 'Ao meio-dia em ponto, um homem apareceu na sacada da casa Brinkkala e leu a proclamação numa língua antiga e solene. Na proclamação, desejava-se a todos um Natal tranquilo e lembrava-se que a Paz de Natal não pode ser quebrada. A praça ficou em silêncio por um momento, e então o povo começou a cantar.',
        choices: [
          { text: 'Linu kysyi Elinalta, mitä joulurauha oikeastaan tarkoittaa.', translation: 'O Linu perguntou à Elina o que a Paz de Natal quer dizer, na verdade.', next: 'final_bom' },
          {
            text: 'Linu sanoi, että mies oli toivottanut rauhaa vain turkulaisille.',
            translation: 'O Linu disse que o homem tinha desejado paz só aos moradores de Turku.',
            wrong: 'A proclamação desejava um Natal tranquilo “kaikille”, a TODOS. “Toivotettiin” é o passivo no passado: “desejou-se”, sem dizer quem fez a ação.',
          },
        ],
      },
      final_bom: {
        emoji: '🕯️',
        text: 'Elina selitti, että jouluna kaikkien pitäisi elää sovussa ja levätä. Illalla perhe vei kynttilöitä hautausmaalle ja kävi sen jälkeen saunassa. Linu ajatteli, että jos hän saisi valita, hän viettäisi joka joulun Turussa.',
        translation: 'A Elina explicou que, no Natal, todos deveriam viver em paz e descansar. À noite, a família levou velas ao cemitério e depois foi à sauna. O Linu pensou que, se pudesse escolher, passaria todo Natal em Turku.',
        ending: { tone: 'bom', title: 'Paz de Natal', message: 'O Linu ouviu de perto a proclamação que a Finlândia escuta desde a Idade Média e viveu uma véspera de Natal finlandesa completa.' },
      },
    },
  },
  {
    id: 'fi-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Kalakukko Kuopion torilta',
    emoji: '🐟',
    summary: 'Na feira de Kuopio, o Linu precisa comprar um kalakukko, o pão recheado de peixe da Savônia, para o jantar no chalé do amigo Veikko.',
    cultural_context:
      'O kalakukko é o prato típico de Kuopio, na região da Savônia: peixinhos de lago (como a muikku) e toucinho assados por horas dentro de uma casca grossa de pão de centeio, que os conserva por dias. Do alto da torre do morro Puijo se veem os lagos que cercam a cidade.',
    start: 'start',
    glossary: [
      ['kalakukko', 'pão de centeio recheado de peixe e toucinho'],
      ['muikku / ahven', 'peixinho de lago (espécie de corégono) / perca'],
      ['ruoto', 'espinha de peixe'],
      ['Mitä saisi olla?', 'O que vai ser? (condicional educado do vendedor)'],
      ['haluaisin / ottaisin', 'eu gostaria / eu levaria (condicional)'],
      ['jos minä saisin valita', 'se eu pudesse escolher'],
      ['pitäisi', 'deveria (condicional de “pitää”)'],
      ['mökki', 'chalé, casinha de campo'],
    ],
    nodes: {
      start: {
        emoji: '🛒',
        text: 'Oli lauantaiaamu, ja Linu seisoi Kuopion torilla. Hänen ystävänsä Veikko oli pyytänyt häntä ostamaan kalakukon illaksi mökille. Linu ei tiennyt, miltä kalakukko näyttäisi, joten hän katseli ympärilleen.',
        translation: 'Era sábado de manhã, e o Linu estava na feira de Kuopio. O amigo dele, o Veikko, tinha pedido que ele comprasse um kalakukko para a noite no chalé. O Linu não sabia como seria um kalakukko, então olhou em volta.',
        choices: [
          { text: 'Linu meni leipäkojulle kysymään apua.', translation: 'O Linu foi até a barraca de pães pedir ajuda.', next: 'koju' },
          { text: 'Linu meni ensin kauppahalliin.', translation: 'O Linu foi primeiro ao mercado coberto.', next: 'halli' },
        ],
      },
      halli: {
        emoji: '🏛️',
        text: 'Kauppahallissa oli kalaa, lihaa ja juustoa, mutta ei yhtään kalakukkoa. Kalakauppias neuvoi: “Minä menisin torille. Siellä leipäkojussa niitä myydään joka aamu.” Linu kiitti ja kiirehti ulos.',
        translation: 'No mercado coberto havia peixe, carne e queijo, mas nenhum kalakukko. O peixeiro aconselhou: “Eu iria à feira. Lá, na barraca de pães, eles são vendidos toda manhã.” O Linu agradeceu e saiu apressado.',
        choices: [{ text: 'Linu meni torin leipäkojulle.', translation: 'O Linu foi à barraca de pães da feira.', next: 'koju' }],
      },
      koju: {
        emoji: '🥖',
        text: 'Myyjä oli iloinen vanha nainen. “Mitäs saisi olla?” hän kysyi. Linu vastasi, että hän haluaisi kalakukon, mutta ei tiennyt, kumpi olisi parempi: muikkukukko vai ahvenkukko.',
        translation: 'A vendedora era uma senhora alegre. “E aí, o que vai ser?”, ela perguntou. O Linu respondeu que gostaria de um kalakukko, mas não sabia qual seria melhor: o de muikku ou o de perca.',
        choices: [
          { text: 'Linu pyysi myyjää kertomaan eron.', translation: 'O Linu pediu à vendedora que explicasse a diferença.', next: 'ero' },
          { text: 'Linu osti suurimman kukon, koska se näytti komeimmalta.', translation: 'O Linu comprou o maior, porque parecia o mais bonito.', next: 'iso' },
        ],
      },
      ero: {
        emoji: '🐠',
        text: 'Myyjä selitti, että muikut ovat pieniä ja pehmeitä, mutta ahvenkukossa on enemmän ruotoja. “Jos minä saisin valita, ottaisin muikkukukon”, hän sanoi. Hän lisäsi, että kukko pitäisi lämmittää uunissa ennen syömistä.',
        translation: 'A vendedora explicou que as muikku são pequenas e macias, mas o de perca tem mais espinhas. “Se eu pudesse escolher, levaria o de muikku”, ela disse. E acrescentou que o kalakukko deveria ser esquentado no forno antes de comer.',
        choices: [
          { text: 'Linu osti muikkukukon.', translation: 'O Linu comprou o de muikku.', next: 'muikku' },
          {
            text: 'Linu osti ahvenkukon, koska myyjä oli suositellut sitä.',
            translation: 'O Linu comprou o de perca, porque a vendedora o tinha recomendado.',
            wrong: 'A vendedora disse “Jos minä saisin valita, ottaisin muikkukukon”: “Se EU pudesse escolher, LEVARIA O DE MUIKKU”. O -isi- de “saisin” e “ottaisin” é o condicional; o de perca, segundo ela, tem mais espinhas.',
          },
        ],
      },
      iso: {
        emoji: '🪨',
        text: 'Suuri kalakukko oli painava kuin kivi. Linu kantoi sitä koko päivän, ja kun hän illalla nousi bussista Veikon mökin lähellä, hänen siipiään särki. Veikko nauroi: “Tällä ruokkisimme koko kylän!”',
        translation: 'O kalakukko grande era pesado como uma pedra. O Linu o carregou o dia inteiro, e quando desceu do ônibus à noite, perto do chalé do Veikko, as asas dele doíam. O Veikko riu: “Com isso daríamos de comer à vila inteira!”',
        choices: [{ text: 'He kävelivät yhdessä mökille.', translation: 'Eles foram juntos a pé até o chalé.', next: 'mokki' }],
      },
      muikku: {
        emoji: '🧺',
        text: 'Linu maksoi, ja myyjä kääri kukon paperiin. Bussin lähtöön oli vielä kolme tuntia. Linu mietti, kävisikö hän Puijon tornissa vai lähtisikö suoraan mökille.',
        translation: 'O Linu pagou, e a vendedora embrulhou o kalakukko em papel. Faltavam ainda três horas para o ônibus sair. O Linu ficou pensando se iria à torre do Puijo ou se iria direto para o chalé.',
        choices: [
          { text: 'Linu kävi Puijon tornissa.', translation: 'O Linu foi à torre do Puijo.', next: 'puijo' },
          { text: 'Linu lähti suoraan Veikon mökille.', translation: 'O Linu foi direto para o chalé do Veikko.', next: 'mokki' },
        ],
      },
      puijo: {
        emoji: '🗼',
        text: 'Puijon tornin huipulta näkyi järviä joka suuntaan, ja metsät olivat syksyn väreissä. Linu ajatteli, että jos pingviinit osaisivat lentää, hän lentäisi järveltä järvelle. Maisema oli niin kaunis, että hän melkein myöhästyi bussista.',
        translation: 'Do alto da torre do Puijo se viam lagos para todos os lados, e as florestas estavam com as cores do outono. O Linu pensou que, se os pinguins soubessem voar, ele voaria de lago em lago. A paisagem era tão bonita que ele quase perdeu o ônibus.',
        choices: [{ text: 'Linu ehti viime hetkellä bussiin.', translation: 'O Linu pegou o ônibus no último minuto.', next: 'mokki' }],
      },
      mokki: {
        emoji: '🛖',
        text: 'Veikon mökki oli järven rannalla keskellä metsää. Veikko oli jo lämmittänyt saunan ja sanoi, että kukko pitäisi laittaa uuniin tunniksi. Nälkäinen Linu kysyi, eikö sitä voisi syödä heti kylmänä.',
        translation: 'O chalé do Veikko ficava na beira do lago, no meio da floresta. O Veikko já tinha esquentado a sauna e disse que o kalakukko deveria ir ao forno por uma hora. Com fome, o Linu perguntou se não dava para comer frio mesmo, na hora.',
        choices: [
          { text: 'Linu odotti kärsivällisesti, kun kukko lämpeni uunissa.', translation: 'O Linu esperou com paciência enquanto o kalakukko esquentava no forno.', next: 'final_bom' },
          { text: 'Linu leikkasi kylmästä kukosta heti ison palan.', translation: 'O Linu cortou na hora um pedaço grande do kalakukko frio.', next: 'kylma' },
          {
            text: 'Linu sanoi, että Veikko oli jo laittanut kukon uuniin.',
            translation: 'O Linu disse que o Veikko já tinha colocado o kalakukko no forno.',
            wrong: 'O Veikko já tinha esquentado a SAUNA (“oli jo lämmittänyt saunan”). O kalakukko ainda “pitäisi laittaa uuniin”: DEVERIA ir ao forno. “Pitäisi” é o condicional de “pitää”, dever.',
          },
        ],
      },
      kylma: {
        emoji: '🥶',
        text: 'Kylmä kuori oli niin kova, että tuntui kuin olisi syönyt puuta. Veikko pudisti päätään: “Olisit odottanut tunnin!” Linu söi illalla vain makkaraa, ja kalakukko pääsi uuniin vasta seuraavana päivänä.',
        translation: 'A casca fria estava tão dura que parecia comer madeira. O Veikko balançou a cabeça: “Era só ter esperado uma hora!” O Linu jantou só linguiça, e o kalakukko foi para o forno só no dia seguinte.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Kalakukko frio é duro como madeira. A vendedora e o Veikko avisaram: primeiro, uma hora no forno!' },
      },
      final_bom: {
        emoji: '✨',
        text: 'Tunnin päästä Veikko avasi kukon kuoren, ja mökki täyttyi herkullisesta tuoksusta. Kalat olivat niin pehmeitä, että ne voi syödä ruotoineen. Linu sanoi, että jos hän asuisi Kuopiossa, hän söisi kalakukkoa joka lauantai.',
        translation: 'Uma hora depois, o Veikko abriu a casca do kalakukko, e o chalé se encheu de um cheiro delicioso. Os peixes estavam tão macios que dava para comer com espinha e tudo. O Linu disse que, se morasse em Kuopio, comeria kalakukko todo sábado.',
        ending: { tone: 'bom', title: 'Sabor da Savônia', message: 'O Linu escolheu bem, esperou o forno e provou o prato mais famoso de Kuopio como manda a tradição.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'fi-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Norppaa etsimässä',
    emoji: '🦭',
    summary: 'De canoa pelo lago Saimaa, o Linu e a guia Liisa procuram a foca-anelada-do-saimaa, uma das focas mais raras do mundo.',
    cultural_context:
      'O Saimaa é o maior lago da Finlândia, com milhares de ilhas. Nele vive a foca-anelada-do-saimaa (saimaannorppa), que ficou presa em água doce quando o lago se separou do mar depois da última Era do Gelo; é uma das focas mais ameaçadas do mundo, com apenas algumas centenas de animais, e as redes de pesca são um dos maiores perigos para os filhotes.',
    start: 'start',
    glossary: [
      ['norppa / saimaannorppa', 'foca-anelada / foca-anelada-do-saimaa'],
      ['suurin / harvinaisin', 'o maior / o mais raro (superlativo -in)'],
      ['nopeampi kuin', 'mais rápido que (comparativo -mpi)'],
      ['joka / jonka / joihin', 'que, o qual (pronome relativo, flexionado)'],
      ['pitää katsoa', 'é preciso olhar (“pitää” + infinitivo)'],
      ['meloa / mela', 'remar / o remo (de canoa)'],
      ['kiikari', 'binóculo'],
      ['jääkausi', 'a Era do Gelo'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Linu meloi kanootilla Saimaalla yhdessä oppaansa Liisan kanssa. Liisa kertoi, että Saimaa on Suomen suurin järvi, jossa on tuhansia saaria. Linu halusi nähdä saimaannorpan, joka on yksi maailman harvinaisimmista hylkeistä.',
        translation: 'O Linu remava de canoa no Saimaa com a guia dele, a Liisa. A Liisa contou que o Saimaa é o maior lago da Finlândia, onde há milhares de ilhas. O Linu queria ver a foca-anelada-do-saimaa, que é uma das focas mais raras do mundo.',
        choices: [
          { text: 'Linu kysyi, mistä norpan voisi löytää.', translation: 'O Linu perguntou onde se poderia encontrar a foca.', next: 'missa' },
          { text: 'Linu päätti meloa nopeammin kuin Liisa.', translation: 'O Linu resolveu remar mais rápido que a Liisa.', next: 'kilpa' },
        ],
      },
      missa: {
        emoji: '🪨',
        text: 'Liisa selitti, että norpat lepäävät usein kivillä, jotka ovat kaukana rannasta. Keväällä poikaset syntyvät lumipesiin, joita emo kaivaa rannan lähelle kinoksiin. “Norppaa pitää katsoa kaukaa, koska se pelästyy helposti”, Liisa sanoi.',
        translation: 'A Liisa explicou que as focas descansam muitas vezes em pedras que ficam longe da margem. Na primavera, os filhotes nascem em tocas de neve, que a mãe cava em montes de neve perto da margem. “A foca tem que ser olhada de longe, porque ela se assusta fácil”, disse a Liisa.',
        choices: [
          { text: 'Linu otti kiikarin esiin.', translation: 'O Linu pegou o binóculo.', next: 'kiikari' },
          {
            text: 'Linu ehdotti, että he meloisivat mahdollisimman lähelle norppaa.',
            translation: 'O Linu sugeriu que eles remassem o mais perto possível da foca.',
            wrong: 'A Liisa disse “Norppaa pitää katsoa kaukaa”: é preciso olhar a foca DE LONGE, porque ela se assusta fácil. “Pitää” + infinitivo (“katsoa”) quer dizer “ter que” fazer algo.',
          },
        ],
      },
      kilpa: {
        emoji: '💨',
        text: 'Linu meloi niin kovaa kuin pystyi, ja hetken hän oli nopeampi kuin Liisa. Pian hänen siipensä kuitenkin väsyivät, ja kanootti alkoi kiertää ympyrää. Liisa meloi viereen ja sanoi, että järvellä hitain meloja näkee eniten.',
        translation: 'O Linu remou o mais forte que conseguiu e, por um momento, foi mais rápido que a Liisa. Mas logo as asas dele cansaram, e a canoa começou a girar em círculos. A Liisa remou até o lado dele e disse que, no lago, quem rema mais devagar é quem vê mais.',
        choices: [
          { text: 'Linu alkoi meloa rauhallisemmin.', translation: 'O Linu começou a remar com mais calma.', next: 'kiikari' },
          { text: 'Linu jatkoi kilpailua.', translation: 'O Linu continuou a corrida.', next: 'vasynyt' },
        ],
      },
      vasynyt: {
        emoji: '😮‍💨',
        text: 'Linu meloi yhä kovempaa, kunnes hän ei enää jaksanut nostaa melaa. Liisan täytyi hinata hänen kanoottinsa takaisin rantaan. Norppaa he eivät nähneet, mutta Linu oppi, että Saimaalla kiire on huonoin kaveri.',
        translation: 'O Linu remou cada vez mais forte, até não aguentar mais levantar o remo. A Liisa teve que rebocar a canoa dele de volta à margem. Eles não viram a foca, mas o Linu aprendeu que, no Saimaa, a pressa é a pior companheira.',
        ending: { tone: 'neutro', title: 'A pior companheira', message: 'Corrida no lago só cansa as asas. Quem rema mais devagar vê mais: a Liisa tinha avisado!' },
      },
      kiikari: {
        emoji: '🔭',
        text: 'Kiikarilla Linu näki kaukana harmaan kiven, jonka päällä oli jotain tummaa. Se oli pyöreämpi ja kiiltävämpi kuin kivi. “Mikä tuo on?” Linu kuiskasi.',
        translation: 'Com o binóculo, o Linu viu ao longe uma pedra cinza com uma coisa escura em cima. Era mais redonda e mais brilhante que uma pedra. “O que é aquilo?”, cochichou o Linu.',
        choices: [
          { text: 'Linu ojensi kiikarin Liisalle.', translation: 'O Linu passou o binóculo para a Liisa.', next: 'norppa' },
          { text: 'Linu huusi innoissaan: “Norppa!”', translation: 'O Linu gritou, empolgado: “Uma foca!”', next: 'huuto' },
        ],
      },
      huuto: {
        emoji: '💦',
        text: 'Ääni kantautui veden yli, ja tumma möykky liukui hetkessä järveen. Liisa huokaisi: “Se oli norppa, mutta nyt se on poissa.” He odottivat tunnin, mutta norppa ei palannut kivelle.',
        translation: 'O som atravessou a água, e a bolota escura escorregou para o lago num instante. A Liisa suspirou: “Era uma foca, mas agora ela foi embora.” Eles esperaram uma hora, mas a foca não voltou para a pedra.',
        ending: { tone: 'neutro', title: 'Um grito a mais', message: 'A foca do Saimaa se assusta fácil: bastou um grito para ela mergulhar. Silêncio é tudo!' },
      },
      norppa: {
        emoji: '🦭',
        text: 'Liisa katsoi kiikarilla ja hymyili. “Se on norppa, ja vielä suurin, jonka olen tänä kesänä nähnyt”, hän kuiskasi. Norppa makasi kivellä silmät kiinni ja näytti maailman tyytyväisimmältä eläimeltä.',
        translation: 'A Liisa olhou pelo binóculo e sorriu. “É uma foca, e a maior que eu vi neste verão”, ela cochichou. A foca estava deitada na pedra de olhos fechados e parecia o bicho mais satisfeito do mundo.',
        choices: [
          { text: 'Linu kysyi hiljaa, miksi norppia on niin vähän.', translation: 'O Linu perguntou baixinho por que existem tão poucas focas.', next: 'miksi' },
          { text: 'Linu piirsi norpan muistikirjaansa.', translation: 'O Linu desenhou a foca no caderninho dele.', next: 'final_bom' },
        ],
      },
      miksi: {
        emoji: '🧊',
        text: 'Liisa kertoi, että norpat jäivät Saimaaseen jääkauden jälkeen, kun maa kohosi ja järvi erottui merestä. Yksi suurimmista vaaroista ovat kalaverkot, joihin nuoret norpat voivat takertua. Suojelun ansiosta norppia on nyt enemmän kuin 1980-luvulla.',
        translation: 'A Liisa contou que as focas ficaram presas no Saimaa depois da Era do Gelo, quando a terra subiu e o lago se separou do mar. Um dos maiores perigos são as redes de pesca, nas quais as focas jovens podem se enroscar. Graças à proteção, hoje há mais focas do que nos anos 1980.',
        choices: [
          { text: 'Linu lupasi kertoa norpasta kaikille ystävilleen.', translation: 'O Linu prometeu contar sobre a foca a todos os amigos.', next: 'final_bom' },
          {
            text: 'Linu sanoi, että norpat olivat uineet Saimaaseen merestä viime vuonna.',
            translation: 'O Linu disse que as focas tinham nadado do mar para o Saimaa no ano passado.',
            wrong: 'As focas ficaram no Saimaa “jääkauden jälkeen”, DEPOIS DA ERA DO GELO, quando o lago se separou do mar. Isso foi há milhares de anos: hoje elas não têm como ir e voltar do mar.',
          },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'He meloivat hiljaa takaisin kohti rantaa, ja aurinko laski saarten taakse. Linu sanoi, että tämä oli hänen elämänsä kaunein päivä järvellä. Liisa vastasi, että parhaat hetket ovat usein niitä, jolloin ollaan hiljaa.',
        translation: 'Eles remaram em silêncio de volta à margem, e o sol se pôs atrás das ilhas. O Linu disse que aquele tinha sido o dia mais bonito da vida dele num lago. A Liisa respondeu que os melhores momentos muitas vezes são aqueles em que se fica em silêncio.',
        ending: { tone: 'bom', title: 'A foca do Saimaa', message: 'Com calma e silêncio, o Linu viu de longe um dos animais mais raros do mundo.' },
      },
    },
  },
  {
    id: 'fi-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Ooppera Olavinlinnassa',
    emoji: '🎭',
    summary: 'Em Savonlinna, o Linu passa o dia no castelo medieval de Olavinlinna antes de assistir à ópera no pátio dele à noite.',
    cultural_context:
      'O castelo de Olavinlinna, em Savonlinna, foi fundado em 1475, numa ilhota entre dois lagos, para proteger a fronteira leste do reino sueco, e leva o nome de Santo Olavo. Desde 1912, o pátio do castelo recebe no verão o Festival de Ópera de Savonlinna. Na feira da cidade se vende o “lörtsy”, um pastel frito típico, doce ou salgado.',
    start: 'start',
    glossary: [
      ['linna', 'castelo'],
      ['tunnetuin / kaunein', 'o mais famoso / o mais bonito (superlativo)'],
      ['viileämpää kuin', 'mais fresco que (comparativo)'],
      ['joka / jonka / joista', 'que, o qual (pronome relativo)'],
      ['suojelemaan', 'para proteger (infinitivo de finalidade)'],
      ['oopperajuhlat', 'festival de ópera'],
      ['katos', 'cobertura, toldo'],
      ['lörtsy', 'pastel frito de Savonlinna'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu saapui Savonlinnaan heinäkuussa, koska hän oli ostanut lipun oopperajuhlille. Esitys alkaisi vasta illalla, joten hänellä oli koko päivä aikaa tutustua kaupunkiin. Kaupungin tunnetuin nähtävyys on Olavinlinna, joka seisoo pienellä saarella kahden järven välisessä salmessa.',
        translation: 'O Linu chegou a Savonlinna em julho, porque tinha comprado um ingresso para o festival de ópera. O espetáculo só começaria à noite, então ele tinha o dia inteiro para conhecer a cidade. A atração mais famosa da cidade é Olavinlinna, que fica numa ilhota, no estreito entre dois lagos.',
        choices: [
          { text: 'Linu lähti linnan opastetulle kierrokselle.', translation: 'O Linu foi fazer a visita guiada do castelo.', next: 'kierros' },
          { text: 'Linu meni ensin torille syömään.', translation: 'O Linu foi primeiro comer na feira.', next: 'lortsy' },
        ],
      },
      lortsy: {
        emoji: '🥟',
        text: 'Torilla myytiin lörtsyjä, jotka ovat Savonlinnan tunnetuin herkku. Myyjä kysyi, haluaisiko Linu lihalörtsyn vai omenalörtsyn. Linu valitsi omenalörtsyn, joka oli makeampi ja vielä lämmin.',
        translation: 'Na feira vendiam lörtsy, que são a gostosura mais famosa de Savonlinna. O vendedor perguntou se o Linu queria um lörtsy de carne ou de maçã. O Linu escolheu o de maçã, que era mais doce e ainda estava quente.',
        choices: [{ text: 'Sitten Linu käveli linnalle.', translation: 'Depois o Linu foi a pé até o castelo.', next: 'kierros' }],
      },
      kierros: {
        emoji: '🧭',
        text: 'Opas Antti kertoi, että linna perustettiin vuonna 1475 suojelemaan Ruotsin valtakunnan itärajaa ja että se sai nimensä pyhän Olavin mukaan. Hänen mielestään paras tapa ymmärtää linnaa on kiivetä sen torneihin. Kierroksen lopuksi ryhmä pääsi myös linnan pihalle.',
        translation: 'O guia Antti contou que o castelo foi fundado em 1475 para proteger a fronteira leste do reino da Suécia e que ganhou o nome em homenagem a Santo Olavo. Para ele, o melhor jeito de entender o castelo é subir nas torres. No fim da visita, o grupo também podia entrar no pátio do castelo.',
        choices: [
          { text: 'Linu kiipesi kapeita portaita torniin.', translation: 'O Linu subiu as escadas estreitas até a torre.', next: 'torni' },
          { text: 'Linu meni suoraan pihalle.', translation: 'O Linu foi direto para o pátio.', next: 'piha' },
          {
            text: 'Linu kysyi, oliko linna rakennettu oopperaa varten.',
            translation: 'O Linu perguntou se o castelo tinha sido construído para a ópera.',
            wrong: 'O Antti disse que o castelo foi fundado em 1475 “suojelemaan” a fronteira leste do reino: PARA PROTEGER. O infinitivo em -maan aqui indica finalidade. A ópera veio séculos depois.',
          },
        ],
      },
      torni: {
        emoji: '🪟',
        text: 'Portaat olivat jyrkemmät ja kapeammat kuin missään muualla, missä Linu oli käynyt. Tornin ikkunasta näkyi järvi, jonka vesi kimalsi auringossa. Antti kertoi, että sotilaat olivat vartioineet täältä rajaa satoja vuosia.',
        translation: 'A escada era mais íngreme e mais estreita que em qualquer outro lugar onde o Linu já tinha estado. Da janela da torre se via o lago, cuja água brilhava ao sol. O Antti contou que soldados tinham vigiado a fronteira dali por centenas de anos.',
        choices: [
          { text: 'Linu kurkotti ikkunasta ottaakseen paremman kuvan.', translation: 'O Linu se debruçou na janela para tirar uma foto melhor.', next: 'lippu' },
          { text: 'Linu laskeutui varovasti alas pihalle.', translation: 'O Linu desceu com cuidado até o pátio.', next: 'piha' },
        ],
      },
      lippu: {
        emoji: '🎫',
        text: 'Kun Linu kurkotti, hänen taskustaan putosi jotain valkoista suoraan järveen. Se oli hänen oopperalippunsa! Antti sanoi, että lipputoimistossa voisi vielä kysyä, mutta illan esitys oli melkein loppuunmyyty.',
        translation: 'Quando o Linu se debruçou, uma coisa branca caiu do bolso dele direto no lago. Era o ingresso da ópera! O Antti disse que dava para perguntar na bilheteria, mas o espetáculo da noite estava quase esgotado.',
        choices: [{ text: 'Linu kiirehti lipputoimistoon.', translation: 'O Linu correu para a bilheteria.', next: 'toimisto' }],
      },
      toimisto: {
        emoji: '🎶',
        text: 'Lipputoimistossa kerrottiin, että viimeinenkin lippu oli juuri myyty. Illalla Linu istui rannalla linnan ulkopuolella, josta musiikki kuului vain hiljaa. Se oli kaunista, mutta hän olisi halunnut nähdä laulajat.',
        translation: 'Na bilheteria disseram que até o último ingresso tinha acabado de ser vendido. À noite, o Linu ficou sentado na margem, do lado de fora do castelo, de onde a música se ouvia só baixinho. Era bonito, mas ele queria ter visto os cantores.',
        ending: { tone: 'neutro', title: 'Ópera do lado de fora', message: 'O ingresso foi parar no lago! Da próxima vez, o Linu guarda o bilhete no bolso de dentro antes de subir na torre.' },
      },
      piha: {
        emoji: '🧥',
        text: 'Linnan pihalla työntekijät valmistelivat illan esitystä, ja pihan yllä oli suuri katos sateen varalta. Antti neuvoi ottamaan illaksi lämpimän takin, koska kivimuurien sisällä on viileämpää kuin kaupungissa. Linu muisti, että hän oli jättänyt takkinsa hotelliin.',
        translation: 'No pátio do castelo, os funcionários preparavam o espetáculo da noite, e sobre o pátio havia uma grande cobertura, caso chovesse. O Antti aconselhou levar um casaco quente para a noite, porque dentro das muralhas de pedra faz mais frio do que na cidade. O Linu lembrou que tinha deixado o casaco no hotel.',
        choices: [
          { text: 'Linu kävi hakemassa takkinsa hotellista ennen esitystä.', translation: 'O Linu foi buscar o casaco no hotel antes do espetáculo.', next: 'final_bom' },
          { text: 'Linu päätti, ettei takkia tarvita heinäkuussa.', translation: 'O Linu decidiu que não se precisa de casaco em julho.', next: 'kylma' },
          {
            text: 'Linu ajatteli, että linnassa olisi illalla lämpimämpää kuin ulkona.',
            translation: 'O Linu pensou que à noite no castelo estaria mais quente do que lá fora.',
            wrong: 'O Antti disse o contrário: dentro das muralhas “on viileämpää kuin kaupungissa”, faz MAIS FRIO que na cidade. O -mpi (viileä → viileämpi) forma o comparativo, e “kuin” quer dizer “que”.',
          },
        ],
      },
      kylma: {
        emoji: '🥶',
        text: 'Illalla järveltä nousi kylmä tuuli, ja kivimuurit tuntuivat jäisiltä. Linu tärisi koko ensimmäisen näytöksen ajan eikä pystynyt keskittymään musiikkiin. Väliajalla hän osti villahuovan, joka oli kallein huopa, jonka hän oli koskaan ostanut.',
        translation: 'À noite, um vento frio subiu do lago, e as muralhas de pedra pareciam de gelo. O Linu tremeu o primeiro ato inteiro e não conseguiu se concentrar na música. No intervalo, comprou uma manta de lã, que foi a manta mais cara que ele já tinha comprado.',
        ending: { tone: 'neutro', title: 'Frio na ópera', message: 'O guia avisou: entre as muralhas faz mais frio. Até em julho, casaco na ópera de Savonlinna!' },
      },
      final_bom: {
        emoji: '✨',
        text: 'Illalla Linu istui lämpimässä takissaan linnan pihalla, kun orkesteri alkoi soittaa. Laulajien äänet kaikuivat vanhojen muurien välissä voimakkaammin kuin missään konserttisalissa. Esityksen jälkeen Linu sanoi, että tämä oli kaunein ilta, jonka hän oli viettänyt Suomessa.',
        translation: 'À noite, o Linu estava sentado com o casaco quentinho no pátio do castelo quando a orquestra começou a tocar. As vozes dos cantores ecoavam entre as muralhas antigas com mais força do que em qualquer sala de concerto. Depois do espetáculo, o Linu disse que aquela tinha sido a noite mais bonita que ele tinha passado na Finlândia.',
        ending: { tone: 'bom', title: 'Ópera entre muralhas', message: 'O Linu seguiu o conselho do guia e ouviu a ópera no castelo medieval, quentinho e encantado.' },
      },
    },
  },
  {
    id: 'fi-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Mustikkametsässä',
    emoji: '🫐',
    summary: 'No Parque Nacional de Nuuksio, perto de Helsinque, o Linu colhe mirtilos com a amiga Kaisa e aprende o que o “direito de todo mundo” permite.',
    cultural_context:
      'Na Finlândia vale o “direito de todo mundo” (jokamiehenoikeus): qualquer pessoa pode andar pela natureza e colher frutinhas silvestres e cogumelos, até em terra alheia, desde que não perto das casas e sem causar estragos; fogueira, porém, só nos lugares permitidos. O Parque Nacional de Nuuksio, pertinho de Helsinque, é conhecido pelo esquilo-voador (liito-orava), que sai sobretudo à noite.',
    start: 'start',
    glossary: [
      ['jokamiehenoikeus', 'o direito de todo mundo de andar e colher na natureza'],
      ['poimia marjoja', 'colher frutinhas (“poimia” + infinitivo)'],
      ['mustikka / vadelma', 'mirtilo / framboesa'],
      ['liito-orava', 'esquilo-voador'],
      ['pienempi kuin / houkuttelevin', 'menor que / o mais tentador'],
      ['joka / jota / jollaisia', 'que (pronomes relativos)'],
      ['nuotio / nuotiopaikka', 'fogueira / local de fogueira'],
      ['ämpäri', 'balde'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Elokuun lopussa Linu ja hänen ystävänsä Kaisa ajoivat Helsingistä Nuuksion kansallispuistoon. Kaisa oli ottanut mukaan kaksi ämpäriä, koska hän halusi poimia mustikoita. Hän kertoi, että Suomessa jokainen saa kulkea luonnossa ja poimia marjoja, vaikka maa olisi jonkun toisen.',
        translation: 'No fim de agosto, o Linu e a amiga dele, a Kaisa, foram de carro de Helsinque ao Parque Nacional de Nuuksio. A Kaisa tinha levado dois baldes, porque queria colher mirtilos. Ela contou que, na Finlândia, qualquer um pode andar na natureza e colher frutinhas, mesmo que a terra seja de outra pessoa.',
        choices: [
          { text: 'Linu lähti Kaisan kanssa metsään poimimaan marjoja.', translation: 'O Linu foi com a Kaisa para a floresta colher frutinhas.', next: 'metsa' },
          { text: 'Linu halusi ensin etsiä liito-oravaa.', translation: 'O Linu quis primeiro procurar o esquilo-voador.', next: 'orava' },
          {
            text: 'Linu kysyi, kenelle marjoista pitää maksaa.',
            translation: 'O Linu perguntou para quem se deve pagar pelas frutinhas.',
            wrong: 'A Kaisa disse que qualquer um “saa poimia marjoja”: PODE colher frutinhas, mesmo que a terra seja de outra pessoa. É o direito de todo mundo, e não se paga nada.',
          },
        ],
      },
      orava: {
        emoji: '🐿️',
        text: 'Kaisa kertoi, että Nuuksion metsissä elää liito-orava, joka on pienempi kuin tavallinen orava. Sitä on vaikea nähdä, koska se liikkuu enimmäkseen öisin. Päivällä voi etsiä sen jätöksiä, jotka ovat keltaisia ja muistuttavat riisinjyviä.',
        translation: 'A Kaisa contou que nas florestas de Nuuksio vive o esquilo-voador, que é menor que o esquilo comum. É difícil vê-lo, porque ele se movimenta sobretudo à noite. De dia, dá para procurar os cocôs dele, que são amarelos e parecem grãos de arroz.',
        choices: [
          { text: 'Linu etsi ison haavan juurelta keltaisia jätöksiä.', translation: 'O Linu procurou cocôs amarelos ao pé de um grande álamo.', next: 'jatos' },
          { text: 'Linu päätti mennä poimimaan marjoja.', translation: 'O Linu resolveu ir colher frutinhas.', next: 'metsa' },
        ],
      },
      jatos: {
        emoji: '🔎',
        text: 'Ison haavan juurelta Linu löysi pieniä keltaisia jyviä. Kaisa nauroi, että Linu oli ensimmäinen pingviini, joka oli koskaan löytänyt liito-oravan jätöksiä. Linu otti niistä ylpeänä kuvan.',
        translation: 'Ao pé de um grande álamo, o Linu achou grãozinhos amarelos. A Kaisa riu e disse que o Linu era o primeiro pinguim que já tinha achado cocô de esquilo-voador. O Linu tirou uma foto deles, todo orgulhoso.',
        choices: [{ text: 'Sitten he lähtivät marjametsään.', translation: 'Depois eles foram para o mato das frutinhas.', next: 'metsa' }],
      },
      metsa: {
        emoji: '🫐',
        text: 'Metsässä oli hiljaista, ja mättäillä kasvoi niin paljon mustikoita, että maa näytti siniseltä. Kaisa näytti, miten marjoja poimitaan nopeimmin: kämmen kupiksi ja varovasti varpua pitkin. Linu yritti, mutta puolet marjoista päätyi hänen suuhunsa.',
        translation: 'Na floresta estava silencioso, e nos montinhos cresciam tantos mirtilos que o chão parecia azul. A Kaisa mostrou o jeito mais rápido de colher: a mão em concha, passando com cuidado ao longo do galhinho. O Linu tentou, mas metade das frutinhas foi parar na boca dele.',
        choices: [
          { text: 'Linu jatkoi poimimista Kaisan vieressä.', translation: 'O Linu continuou colhendo ao lado da Kaisa.', next: 'ampari' },
          { text: 'Linu huomasi mäen päällä punaisen mökin, jonka pihalla kasvoi isoja vadelmia.', translation: 'O Linu notou no alto do morro uma casinha vermelha em cujo quintal cresciam framboesas grandes.', next: 'mokki' },
        ],
      },
      mokki: {
        emoji: '🏡',
        text: 'Mökin pihalla oli pyykkiä narulla ja lapsen polkupyörä. Kaisa sanoi, että jokamiehenoikeus ei koske pihoja: kodin lähelle ei saa mennä poimimaan mitään. Vadelmat olivat kuitenkin houkuttelevimmat marjat, jotka Linu oli koskaan nähnyt.',
        translation: 'No quintal da casinha havia roupa no varal e uma bicicleta de criança. A Kaisa disse que o direito de todo mundo não vale para quintais: não se pode chegar perto de uma casa para colher nada. Mas as framboesas eram as frutinhas mais tentadoras que o Linu já tinha visto.',
        choices: [
          { text: 'Linu kääntyi takaisin metsään.', translation: 'O Linu deu meia-volta para a floresta.', next: 'ampari' },
          { text: 'Linu hiipi pihalle poimimaan vadelmia.', translation: 'O Linu entrou de fininho no quintal para colher framboesas.', next: 'piha' },
        ],
      },
      piha: {
        emoji: '👵',
        text: 'Juuri kun Linu ojensi siipensä kohti vadelmapensasta, mökin ovi aukesi. Vanha rouva katsoi häntä tiukasti ja sanoi, että metsässä on marjoja kaikille, mutta nämä ovat hänen omiaan. Linu pyysi anteeksi ja palasi autolle häpeästä punaisena.',
        translation: 'Bem quando o Linu esticou a asa para o pé de framboesa, a porta da casinha se abriu. Uma senhora olhou para ele com severidade e disse que na floresta há frutinhas para todos, mas aquelas eram dela. O Linu pediu desculpas e voltou para o carro vermelho de vergonha.',
        ending: { tone: 'neutro', title: 'As framboesas da vizinha', message: 'O direito de todo mundo vale na floresta, não no quintal dos outros. A Kaisa tinha avisado!' },
      },
      ampari: {
        emoji: '🪣',
        text: 'Kahden tunnin päästä Kaisan ämpäri oli täynnä, ja Linunkin ämpäri oli puolillaan. Kaisa ehdotti, että he paistaisivat makkaraa, ja kertoi, että nuotion saa tehdä vain merkityllä nuotiopaikalla, jollaisia puistossa on monta. Lähin niistä oli järven rannalla.',
        translation: 'Duas horas depois, o balde da Kaisa estava cheio, e o do Linu estava pela metade. A Kaisa sugeriu que eles assassem linguiça e contou que fogueira só se pode fazer num local marcado, dos quais há vários no parque. O mais próximo ficava na beira do lago.',
        choices: [
          { text: 'He kävelivät järven rannan nuotiopaikalle.', translation: 'Eles foram a pé até o local de fogueira na beira do lago.', next: 'nuotio' },
          {
            text: 'Linu alkoi kerätä oksia nuotiota varten siihen paikkaan, jossa he seisoivat.',
            translation: 'O Linu começou a juntar galhos para fazer a fogueira ali mesmo, onde eles estavam.',
            wrong: 'A Kaisa explicou que fogueira “saa tehdä vain merkityllä nuotiopaikalla”: SÓ num local marcado. O direito de todo mundo vale para andar e colher, não para acender fogo em qualquer lugar.',
          },
        ],
      },
      nuotio: {
        emoji: '🔥',
        text: 'Nuotiopaikalla oli valmiina halkoja, ja pian makkarat paistuivat tulella. Järvi oli tyyni, ja sen pinnalla näkyi metsän kuva. Kaisa sanoi, että hänen mielestään tämä on parempaa kuin mikään ravintola Helsingissä.',
        translation: 'No local de fogueira já havia lenha, e logo as linguiças estavam assando no fogo. O lago estava parado, e na superfície dele aparecia o reflexo da floresta. A Kaisa disse que, para ela, aquilo era melhor que qualquer restaurante de Helsinque.',
        choices: [{ text: 'Linu oli samaa mieltä.', translation: 'O Linu concordou.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🥧',
        text: 'Illalla Kaisan keittiössä he leipoivat mustikkapiirakan, joka oli herkullisin piirakka, jota Linu oli koskaan maistanut. Linu sanoi, että hän haluaisi asua maassa, jossa metsä on kaikkien. Kaisa vastasi, että silloin hänen pitäisi oppia myös, mitä metsässä ei saa tehdä.',
        translation: 'À noite, na cozinha da Kaisa, eles assaram uma torta de mirtilo, que foi a torta mais gostosa que o Linu já tinha provado. O Linu disse que gostaria de morar num país onde a floresta é de todos. A Kaisa respondeu que, nesse caso, ele teria que aprender também o que não se pode fazer na floresta.',
        ending: { tone: 'bom', title: 'A floresta de todos', message: 'O Linu colheu mirtilos, respeitou as regras do direito de todo mundo e terminou o dia com torta.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'fi-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Porojen luona Inarissa',
    emoji: '🦌',
    summary: 'Em Inari, no norte da Lapônia, o Linu passa um dia com a família sámi do amigo Niila, entre renas, líquen e um joik.',
    cultural_context:
      'Inari, no norte da Lapônia, é o maior município da Finlândia em área e o único com quatro línguas oficiais: o finlandês e três línguas sámi (o sámi do norte, o sámi de Inari e o sámi skolt). O museu Siida apresenta ali a cultura sámi e a natureza do norte. O “joik” (joiku) é o canto tradicional sámi: não se canta SOBRE alguém, mas se “joika” a própria pessoa, um animal ou um lugar.',
    start: 'start',
    glossary: [
      ['saamelainen', 'sámi (pessoa do povo sámi)'],
      ['poro / porotokka', 'rena / rebanho de renas'],
      ['paimentaa', 'pastorear'],
      ['koko ikänsä paimentanut mies', 'um homem que pastoreou a vida inteira (particípio passado -nut)'],
      ['nauhoin koristeltu takki', 'casaco enfeitado com fitas (particípio passivo -ttu)'],
      ['joiku / joikata', 'o joik, canto sámi / cantar o joik de alguém'],
      ['jäkälä', 'líquen (comida das renas no inverno)'],
      ['kota', 'cabana cônica de madeira ou lona, com fogo no meio'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu oli saapunut Inariin, Suomen pinta-alaltaan suurimpaan kuntaan. Bussipysäkillä häntä odotti Niila, saamelainen nuori mies, jonka perhe on paimentanut poroja sukupolvien ajan. Niilalla oli yllään sininen, punaisin ja keltaisin nauhoin koristeltu takki.',
        translation: 'O Linu tinha chegado a Inari, o maior município da Finlândia em área. No ponto de ônibus, o Niila o esperava: um jovem sámi cuja família pastoreia renas há gerações. O Niila vestia um casaco azul enfeitado com fitas vermelhas e amarelas.',
        choices: [
          { text: 'Linu kysyi Niilan kauniista takista.', translation: 'O Linu perguntou sobre o casaco bonito do Niila.', next: 'takki' },
          { text: 'Linu halusi käydä ensin Siida-museossa.', translation: 'O Linu quis ir primeiro ao museu Siida.', next: 'siida' },
        ],
      },
      takki: {
        emoji: '🧥',
        text: 'Niila kertoi, että hänen äitinsä ompelemaa saamenpukua kutsutaan pohjoissaameksi nimellä gákti. Puvun väreistä ja koristeista voi päätellä, mistä sen kantaja on kotoisin. “Tänään on meille tärkeä päivä, koska vieras on tullut kaukaa”, hän sanoi hymyillen.',
        translation: 'O Niila contou que a roupa sámi costurada pela mãe dele se chama “gákti” em sámi do norte. Pelas cores e pelos enfeites da roupa, dá para saber de onde quem a veste é. “Hoje é um dia importante para nós, porque um visitante veio de longe”, ele disse sorrindo.',
        choices: [{ text: 'Linu lähti Niilan kanssa porotokan luo.', translation: 'O Linu foi com o Niila até o rebanho de renas.', next: 'porot' }],
      },
      siida: {
        emoji: '🏛️',
        text: 'Siidassa Linu kiersi näyttelyn, joka kertoi saamelaisten elämästä ja pohjoisen luonnosta. Eräällä videolla joikasi vanha, perinteiseen pukuun pukeutunut nainen. Niila selitti, että joiku on laulu, joka kuvaa ihmistä, eläintä tai paikkaa, eikä joikua lauleta jostakin, vaan joikataan joku.',
        translation: 'No Siida, o Linu percorreu a exposição, que falava da vida dos sámi e da natureza do norte. Num vídeo, uma senhora vestida com a roupa tradicional cantava um joik. O Niila explicou que o joik é um canto que retrata uma pessoa, um animal ou um lugar, e que não se canta um joik SOBRE alguém: se “joika” a própria pessoa.',
        choices: [
          { text: 'Museon jälkeen Linu lähti Niilan kanssa porojen luo.', translation: 'Depois do museu, o Linu foi com o Niila até as renas.', next: 'porot' },
          {
            text: 'Linu sanoi, että joiku on aina surullinen laulu kuolleista ihmisistä.',
            translation: 'O Linu disse que o joik é sempre um canto triste sobre pessoas mortas.',
            wrong: 'O Niila disse que o joik “kuvaa ihmistä, eläintä tai paikkaa”: RETRATA uma pessoa, um animal ou um lugar. Ele não falou em tristeza nem em mortos; e o joik não é “sobre” alguém: ele “é” a pessoa.',
          },
        ],
      },
      porot: {
        emoji: '🦌',
        text: 'Porotokka oli aitauksessa järven rannalla, ja satoja poroja kulki lumessa. Niilan isä, koko ikänsä poroja paimentanut mies, tervehti Linua nyökkäämällä. Hän kertoi, että jokaisella porolla on omistaja, jonka merkki on leikattu poron korvaan.',
        translation: 'O rebanho estava num cercado na beira do lago, e centenas de renas andavam pela neve. O pai do Niila, um homem que pastoreou renas a vida inteira, cumprimentou o Linu com um aceno de cabeça. Ele contou que cada rena tem um dono, cuja marca é cortada na orelha do animal.',
        choices: [
          { text: 'Linu pyysi saada auttaa porojen ruokinnassa.', translation: 'O Linu pediu para ajudar a alimentar as renas.', next: 'ruokinta' },
          { text: 'Linu yritti silittää lähintä poroa.', translation: 'O Linu tentou fazer carinho na rena mais próxima.', next: 'silitys' },
          {
            text: 'Linu kysyi, oliko Niilan isä vasta aloittanut porotyön.',
            translation: 'O Linu perguntou se o pai do Niila tinha começado a trabalhar com renas havia pouco tempo.',
            wrong: 'O pai do Niila é um “koko ikänsä poroja paimentanut mies”: um homem QUE PASTOREOU renas A VIDA INTEIRA. O particípio passado “paimentanut” funciona como uma oração relativa: “joka on paimentanut”.',
          },
        ],
      },
      silitys: {
        emoji: '💨',
        text: 'Poro säikähti ja juoksi pois, ja puolet tokasta lähti liikkeelle sen perässä. Niilan isä joutui kokoamaan pelästyneet porot takaisin. Hän sanoi rauhallisesti, että poro ei ole lemmikki, vaikka se elää ihmisten lähellä.',
        translation: 'A rena se assustou e saiu correndo, e metade do rebanho disparou atrás dela. O pai do Niila teve que juntar de novo as renas assustadas. Ele disse com calma que a rena não é bicho de estimação, mesmo vivendo perto das pessoas.',
        choices: [{ text: 'Linu pyysi anteeksi ja tarjoutui auttamaan ruokinnassa.', translation: 'O Linu pediu desculpas e se ofereceu para ajudar a alimentar os animais.', next: 'ruokinta' }],
      },
      ruokinta: {
        emoji: '🌿',
        text: 'Niila antoi Linulle säkin täynnä jäkälää, jota porot syövät talvella. Nälkäiset porot tungeksivat Linun ympärillä, ja yksi niistä nappasi jäkälän suoraan hänen siivestään. Ruokinnan päätyttyä Niilan isoäiti kutsui kaikki kotaan kahville.',
        translation: 'O Niila deu ao Linu um saco cheio de líquen, que as renas comem no inverno. As renas famintas se amontoavam em volta do Linu, e uma delas pegou o líquen direto da asa dele. Terminada a alimentação, a avó do Niila chamou todo mundo para tomar café na kota.',
        choices: [
          { text: 'Linu meni muiden kanssa kotaan.', translation: 'O Linu foi com os outros para a kota.', next: 'kota' },
          { text: 'Linu jäi vielä ruokkimaan poroja yksin.', translation: 'O Linu ficou mais um pouco alimentando as renas sozinho.', next: 'yksin' },
        ],
      },
      yksin: {
        emoji: '🌙',
        text: 'Linu jakoi jäkälää, kunnes säkki oli tyhjä ja siivet jäässä. Kun hän vihdoin tuli kotaan, kahvi oli juotu ja isoäiti oli jo lähtenyt kotiin. Niila kertoi isoäidin joikanneen illalla jokaisen vieraan, joka oli istunut tulen ääressä.',
        translation: 'O Linu distribuiu líquen até o saco ficar vazio e as asas congeladas. Quando ele finalmente entrou na kota, o café já tinha sido tomado e a avó já tinha ido para casa. O Niila contou que a avó tinha cantado o joik de cada visitante que estava sentado perto do fogo.',
        ending: { tone: 'neutro', title: 'O joik perdido', message: 'Era um convite para a kota, e o Linu ficou lá fora. A avó cantou para todos, menos para ele.' },
      },
      kota: {
        emoji: '🔥',
        text: 'Kodassa paloi tuli, ja savu nousi katon aukosta. Niilan isoäiti, kahdeksankymmentä vuotta täyttänyt nainen, kaatoi kahvia kuppeihin ja kysyi Linulta jotain saameksi. Niila käänsi: “Isoäiti kysyy, saako hän joikata sinut.”',
        translation: 'Na kota ardia o fogo, e a fumaça subia pela abertura do teto. A avó do Niila, uma senhora que já tinha feito oitenta anos, serviu café nas xícaras e perguntou alguma coisa ao Linu em sámi. O Niila traduziu: “A vovó está perguntando se pode cantar o seu joik.”',
        choices: [{ text: 'Linu nyökkäsi ilahtuneena.', translation: 'O Linu fez que sim, feliz.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Isoäiti sulki silmänsä ja alkoi laulaa hiljaa, puolelta toiselle keinuen. Joiussa Linu kuuli jotain, mikä muistutti meren aaltoja ja pingviinin keinuvaa kävelyä. Laulun loputtua hän tunsi saaneensa lahjan, jota hän ei unohtaisi koskaan.',
        translation: 'A avó fechou os olhos e começou a cantar baixinho, balançando de um lado para o outro. No joik, o Linu ouviu algo que lembrava as ondas do mar e o andar gingado de um pinguim. Quando o canto terminou, ele sentiu que tinha ganhado um presente que nunca esqueceria.',
        ending: { tone: 'bom', title: 'O joik do Linu', message: 'O Linu ajudou com as renas, entrou na kota e ganhou um joik só dele, um presente muito especial.' },
      },
    },
  },
  {
    id: 'fi-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Pyörällä Ahvenanmaalla',
    emoji: '🚲',
    summary: 'Nas ilhas Åland, onde só se fala sueco, o Linu pedala até as ruínas da fortaleza de Bomarsund e descobre por que o arquipélago não tem quartéis.',
    cultural_context:
      'As ilhas Åland (Ahvenanmaa, em finlandês), entre a Finlândia e a Suécia, são uma região autônoma da Finlândia onde a única língua oficial é o sueco. A fortaleza russa de Bomarsund foi destruída em 1854, na Guerra da Crimeia, por navios britânicos e franceses; a paz de 1856 proibiu novas fortificações nas ilhas, que continuam desmilitarizadas.',
    start: 'start',
    glossary: [
      ['Ahvenanmaa / Maarianhamina', 'Åland / Mariehamn, a capital'],
      ['Turusta lähtenyt lautta', 'a balsa que partiu de Turku (particípio passado ativo -nut)'],
      ['hänen lukemansa opas', 'o guia que ele leu (particípio agente -ma)'],
      ['näki pilven lähestyvän', 'viu a nuvem se aproximando (construção participial)'],
      ['sateen lakattua', 'depois que a chuva parou (construção temporal)'],
      ['rauniot', 'as ruínas'],
      ['linnoitus', 'fortaleza'],
      ['demilitarisoitu', 'desmilitarizado'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Turusta lähtenyt lautta saapui aamulla Maarianhaminaan, Ahvenanmaan pääkaupunkiin. Linu halusi vuokrata polkupyörän, koska hänen lukemansa matkaopas suositteli saarten kiertämistä pyörällä. Satamassa kaikki kyltit olivat ruotsiksi.',
        translation: 'A balsa que tinha saído de Turku chegou de manhã a Mariehamn, a capital de Åland. O Linu queria alugar uma bicicleta, porque o guia de viagem que ele tinha lido recomendava rodar as ilhas pedalando. No porto, todas as placas estavam em sueco.',
        choices: [
          { text: 'Linu kysyi pyörävuokraamossa neuvoa suomeksi.', translation: 'O Linu pediu informação em finlandês na loja de aluguel de bicicletas.', next: 'vuokraamo' },
          { text: 'Linu yritti puhua vähän ruotsia.', translation: 'O Linu tentou falar um pouco de sueco.', next: 'ruotsi' },
        ],
      },
      vuokraamo: {
        emoji: '🗺️',
        text: 'Myyjä, ruotsia äidinkielenään puhuva nuori nainen nimeltä Linnea, vastasi ystävällisesti hieman kankealla suomella. Hän kertoi, että Ahvenanmaalla ruotsi on ainoa virallinen kieli, vaikka saaret kuuluvat Suomeen. Hän suositteli Linulle pyöräretkeä Bomarsundin raunioille.',
        translation: 'A vendedora, uma moça chamada Linnea que tem o sueco como língua materna, respondeu com simpatia num finlandês meio travado. Ela contou que, em Åland, o sueco é a única língua oficial, embora as ilhas pertençam à Finlândia. Recomendou ao Linu um passeio de bicicleta até as ruínas de Bomarsund.',
        choices: [
          { text: 'Linu lähti pyöräilemään kohti Bomarsundia.', translation: 'O Linu saiu pedalando rumo a Bomarsund.', next: 'tie' },
          {
            text: 'Linu ajatteli, että Ahvenanmaa kuuluu Ruotsiin, koska siellä puhutaan ruotsia.',
            translation: 'O Linu pensou que Åland pertence à Suécia, porque lá se fala sueco.',
            wrong: 'A Linnea disse que as ilhas “kuuluvat Suomeen”: PERTENCEM À FINLÂNDIA, mesmo tendo o sueco como única língua oficial. Åland é uma região autônoma finlandesa.',
          },
        ],
      },
      ruotsi: {
        emoji: '💬',
        text: 'Linu sanoi “hej” ja “tack”, mutta sen jälkeen hänen ruotsinsa loppui. Pyörävuokraamon myyjä Linnea nauroi ja vaihtoi suomeen, jota hän oli opiskellut koulussa. Hän suositteli Linulle pyöräretkeä Bomarsundin raunioille.',
        translation: 'O Linu disse “hej” (oi) e “tack” (obrigado), mas aí o sueco dele acabou. A vendedora da loja de bicicletas, a Linnea, riu e mudou para o finlandês, que tinha estudado na escola. Ela recomendou ao Linu um passeio de bicicleta até as ruínas de Bomarsund.',
        choices: [{ text: 'Linu vuokrasi pyörän ja lähti matkaan.', translation: 'O Linu alugou a bicicleta e pegou a estrada.', next: 'tie' }],
      },
      tie: {
        emoji: '🌾',
        text: 'Tie kulki peltojen, punaisten talojen ja kallioisten rantojen ohi. Matkan puolivälissä Linu näki tumman pilven lähestyvän lännestä. Linnoitukselle oli vielä kymmenen kilometriä.',
        translation: 'A estrada passava por campos, casas vermelhas e costas de pedra. No meio do caminho, o Linu viu uma nuvem escura se aproximando do oeste. Ainda faltavam dez quilômetros até a fortaleza.',
        choices: [
          { text: 'Linu jatkoi matkaa sateesta välittämättä.', translation: 'O Linu seguiu viagem sem ligar para a chuva.', next: 'sade' },
          { text: 'Linu pysähtyi pieneen kahvilaan odottamaan sateen loppumista.', translation: 'O Linu parou num cafezinho para esperar a chuva passar.', next: 'kahvila' },
        ],
      },
      sade: {
        emoji: '🌧️',
        text: 'Sade alkoi niin rankkana, että tie muuttui hetkessä puroksi. Märkänä ja kylmissään Linu polki eteenpäin, kunnes pyörän ketju irtosi. Ohi ajanut maanviljelijä nosti Linun ja pyörän traktorin kyytiin ja vei heidät takaisin Maarianhaminaan.',
        translation: 'A chuva começou tão forte que a estrada virou um riacho num instante. Encharcado e com frio, o Linu continuou pedalando, até a corrente da bicicleta sair. Um agricultor que passava colocou o Linu e a bicicleta no trator e os levou de volta a Mariehamn.',
        ending: { tone: 'neutro', title: 'Carona de trator', message: 'O Linu viu a nuvem chegando e mesmo assim seguiu. As ruínas ficaram para outro dia, de preferência com sol.' },
      },
      kahvila: {
        emoji: '🥞',
        text: 'Kahvilassa tarjottiin ahvenanmaalaista pannukakkua, jonka päällä oli luumuhilloa ja kermavaahtoa. Kahvilan emäntä, koko ikänsä saarella asunut vanha rouva, kertoi Bomarsundista. Venäläisten rakentama linnoitus oli tuhottu vuonna 1854 Krimin sodassa, kun brittiläiset ja ranskalaiset laivat hyökkäsivät sitä vastaan.',
        translation: 'No café serviam a panqueca de forno de Åland, com geleia de ameixa e chantili por cima. A dona do café, uma senhora que morou a vida inteira na ilha, contou sobre Bomarsund. A fortaleza construída pelos russos tinha sido destruída em 1854, na Guerra da Crimeia, quando navios britânicos e franceses a atacaram.',
        choices: [
          { text: 'Sateen lakattua Linu jatkoi matkaa raunioille.', translation: 'Depois que a chuva parou, o Linu seguiu até as ruínas.', next: 'rauniot' },
          {
            text: 'Linu kysyi, oliko linnoitus tuhoutunut vasta muutama vuosi sitten.',
            translation: 'O Linu perguntou se a fortaleza tinha sido destruída havia só alguns anos.',
            wrong: 'A senhora disse que a fortaleza “oli tuhottu vuonna 1854”, na Guerra da Crimeia: há mais de 170 anos. “Venäläisten rakentama” (construída pelos russos) é o particípio agente: quem fez a ação vai no genitivo.',
          },
        ],
      },
      rauniot: {
        emoji: '🧱',
        text: 'Bomarsundin rauniot olivat suuremmat kuin Linu oli kuvitellut: sammaloituneita kivimuureja ja metsän keskelle jääneitä tornin jäänteitä. Emännän mukaan sodan jälkeen solmitussa rauhassa päätettiin, ettei saarille saa enää rakentaa linnoituksia. Siitä lähtien Ahvenanmaa on ollut demilitarisoitu.',
        translation: 'As ruínas de Bomarsund eram maiores do que o Linu tinha imaginado: muralhas de pedra cobertas de musgo e restos de uma torre que ficaram no meio da floresta. Segundo a dona do café, na paz assinada depois da guerra se decidiu que não se podia mais construir fortalezas nas ilhas. Desde então, Åland é desmilitarizada.',
        choices: [{ text: 'Linu istuutui muurille katselemaan merta.', translation: 'O Linu sentou na muralha para olhar o mar.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Auringon laskiessa Linu polki takaisin kaupunkiin sateesta kimaltelevien peltojen välissä. Hotellissa hän kirjoitti päiväkirjaansa: “Tänään opin, että Suomessa on saaria, joilla puhutaan vain ruotsia ja joilla rauha on ollut tärkeämpää kuin linnoitukset.” Hän nukahti hymyillen.',
        translation: 'Com o sol se pondo, o Linu pedalou de volta à cidade entre campos que brilhavam de chuva. No hotel, escreveu no diário: “Hoje aprendi que a Finlândia tem ilhas onde só se fala sueco e onde a paz valeu mais que as fortalezas.” Ele dormiu sorrindo.',
        ending: { tone: 'bom', title: 'Ilhas da paz', message: 'O Linu esperou a chuva passar, provou a panqueca de Åland e conheceu a história das ilhas desmilitarizadas.' },
      },
    },
  },
  {
    id: 'fi-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Sumu Kolin yllä',
    emoji: '🎨',
    summary: 'No Parque Nacional de Koli, o Linu sobe o morro com a estudante de arte Helmi, que quer pintar a vista mais famosa da Finlândia, mas a névoa não colabora.',
    cultural_context:
      'Koli, na Carélia do Norte, é um conjunto de morros sobre o lago Pielinen e uma das paisagens nacionais da Finlândia. No fim do século XIX, artistas como o pintor Eero Järnefelt subiram até lá para pintar a vista, que virou símbolo da identidade finlandesa. Os morros são o que resta de montanhas muito antigas, desgastadas ao longo de cerca de dois bilhões de anos.',
    start: 'start',
    glossary: [
      ['taidetta opiskeleva Helmi', 'a Helmi, que estuda arte (particípio presente -va)'],
      ['juurien peittämä polku', 'trilha coberta de raízes (particípio agente -ma)'],
      ['kertoi Kolin syntyneen', 'contava que Koli tinha surgido (construção participial)'],
      ['tunnin harhailtuaan', 'depois de vagar uma hora (construção temporal)'],
      ['maalausteline', 'cavalete'],
      ['sumu / hälvetä', 'névoa / dissipar-se'],
      ['kansallismaisema', 'paisagem nacional'],
      ['sivellin', 'pincel'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Syyskuun lopussa Linu ja taidetta opiskeleva Helmi saapuivat Kolille. Helmi halusi maalata saman maiseman, jota monet 1800-luvun lopun taiteilijat olivat maalanneet Ukko-Kolin huipulta. Parkkipaikalta huipulle johti jyrkkä, juurien peittämä polku.',
        translation: 'No fim de setembro, o Linu e a Helmi, que estuda arte, chegaram a Koli. A Helmi queria pintar a mesma paisagem que muitos artistas do fim do século XIX tinham pintado do alto do Ukko-Koli. Do estacionamento até o topo subia uma trilha íngreme, coberta de raízes.',
        choices: [
          { text: 'Linu kantoi Helmin raskaan maalaustelineen.', translation: 'O Linu carregou o cavalete pesado da Helmi.', next: 'teline' },
          { text: 'Linu halusi käydä ensin luontokeskuksessa.', translation: 'O Linu quis passar primeiro no centro de visitantes.', next: 'luontokeskus' },
        ],
      },
      teline: {
        emoji: '🖼️',
        text: 'Teline oli painavampi kuin Linu oli luullut, ja hänen siipensä alkoivat väsyä. Helmi kertoi, että Kolia maalanneet taiteilijat olivat kantaneet välineensä huipulle ilman kunnollisia polkuja. Linu päätti, ettei hän valittaisi enää.',
        translation: 'O cavalete era mais pesado do que o Linu tinha pensado, e as asas dele começaram a cansar. A Helmi contou que os artistas que pintaram Koli tinham levado o material até o topo sem trilhas de verdade. O Linu decidiu que não ia mais reclamar.',
        choices: [{ text: 'He jatkoivat nousua.', translation: 'Eles continuaram subindo.', next: 'polku' }],
      },
      luontokeskus: {
        emoji: '🏛️',
        text: 'Luontokeskuksen näyttely kertoi Kolin syntyneen noin kaksi miljardia vuotta sitten korkeista vuorista, jotka kuluivat vähitellen matalammiksi. Opas näytti Linulle Eero Järnefeltin maalaaman taulun kuvan, jossa Pielisen saaret hehkuivat syksyn väreissä. “Tätä maisemaa kutsutaan kansallismaisemaksi”, opas sanoi.',
        translation: 'A exposição do centro de visitantes contava que Koli surgiu há cerca de dois bilhões de anos, de montanhas altas que foram se desgastando e ficando mais baixas. O guia mostrou ao Linu a imagem de um quadro pintado por Eero Järnefelt, em que as ilhas do Pielinen brilhavam com as cores do outono. “Esta paisagem é chamada de paisagem nacional”, disse o guia.',
        choices: [
          { text: 'Linu lähti Helmin kanssa kohti huippua.', translation: 'O Linu partiu com a Helmi rumo ao topo.', next: 'polku' },
          {
            text: 'Linu sanoi, että Koli oli syntynyt vasta muutama tuhat vuotta sitten.',
            translation: 'O Linu disse que Koli tinha surgido só alguns milhares de anos atrás.',
            wrong: 'A exposição contava “Kolin syntyneen noin kaksi miljardia vuotta sitten”: que Koli surgiu há cerca de DOIS BILHÕES de anos. “Syntyneen” é a construção participial que substitui “että Koli oli syntynyt”.',
          },
        ],
      },
      polku: {
        emoji: '🥾',
        text: 'Polku oli liukas, ja sateen kastelemat kivet kiilsivät. Puolivälissä he tapasivat vanhan miehen, joka oli kiivennyt Kolille joka syksy viidenkymmenen vuoden ajan. Mies varoitti, että huipun peittävä sumu saattaa hälvetä vasta iltapäivällä.',
        translation: 'A trilha estava escorregadia, e as pedras molhadas pela chuva brilhavam. No meio do caminho, eles encontraram um senhor que subia Koli todo outono havia cinquenta anos. O homem avisou que a névoa que cobria o topo talvez só se dissipasse à tarde.',
        choices: [
          { text: 'He jatkoivat nousua ja päättivät odottaa huipulla.', translation: 'Eles continuaram subindo e resolveram esperar no topo.', next: 'huippu' },
          { text: 'Linu ehdotti oikotietä metsän läpi.', translation: 'O Linu sugeriu um atalho pela floresta.', next: 'oikotie' },
        ],
      },
      oikotie: {
        emoji: '🌲',
        text: 'Metsään johtava polku muuttui pian pelkäksi sammaleeksi, eikä kylttejä näkynyt missään. Tunnin harhailtuaan he löysivät tien takaisin parkkipaikalle, mutta Helmi oli liian väsynyt kiivetäkseen uudelleen. He söivät eväänsä autossa, sumun peittämää mäkeä katsellen.',
        translation: 'A trilha que entrava na floresta logo virou só musgo, e não se via placa em lugar nenhum. Depois de vagar uma hora, eles acharam o caminho de volta ao estacionamento, mas a Helmi estava cansada demais para subir de novo. Eles comeram o lanche no carro, olhando o morro coberto de névoa.',
        ending: { tone: 'neutro', title: 'O atalho mais longo', message: 'Em trilha desconhecida, atalho vira labirinto. A vista de Koli ficou para a próxima.' },
      },
      huippu: {
        emoji: '🌫️',
        text: 'Huipulla ei näkynyt mitään muuta kuin valkoista sumua. Helmi pystytti telineensä ja odotti kärsivällisesti, mutta Linua alkoi kyllästyttää. Hän kysyi, eikö Helmi voisi maalata maiseman jonkun toisen taiteilijan taulun mukaan.',
        translation: 'No topo não se via nada além de névoa branca. A Helmi montou o cavalete e esperou com paciência, mas o Linu começou a ficar entediado. Ele perguntou se a Helmi não poderia pintar a paisagem copiando o quadro de algum outro artista.',
        choices: [
          { text: 'Linu keitti retkikeittimellä kahvia ja jäi odottamaan.', translation: 'O Linu fez café no fogareiro e ficou esperando.', next: 'odotus' },
          {
            text: 'Linu sanoi, että vanha mies oli luvannut sumun häviävän heti aamulla.',
            translation: 'O Linu disse que o senhor tinha prometido que a névoa sumiria logo de manhã.',
            wrong: 'O homem disse que “huipun peittävä sumu saattaa hälvetä vasta iltapäivällä”: a névoa que cobre o topo talvez só se dissipe À TARDE. “Peittävä” é o particípio presente: “que cobre”.',
          },
        ],
      },
      odotus: {
        emoji: '☕',
        text: 'Kahvin jälkeen tuuli yltyi, ja sumu alkoi repeillä. Yhtäkkiä heidän allaan avautui Pielinen: sininen järvi täynnä metsäisiä saaria, joiden koivut hehkuivat keltaisina. Helmi tarttui siveltimeen sanomatta sanaakaan.',
        translation: 'Depois do café, o vento aumentou, e a névoa começou a se rasgar. De repente, o Pielinen se abriu embaixo deles: um lago azul cheio de ilhas cobertas de floresta, com bétulas que brilhavam amarelas. A Helmi pegou o pincel sem dizer uma palavra.',
        choices: [{ text: 'Linu istui hiljaa Helmin viereen.', translation: 'O Linu sentou em silêncio ao lado da Helmi.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Helmi maalasi kaksi tuntia, ja kankaalle syntyi sama maisema, jota taiteilijat olivat katselleet yli sata vuotta sitten. Alas laskeutuessaan Linu ajatteli, että hyvää näköalaa kannattaa odottaa. Helmi lupasi antaa ensimmäisen Kolilla maalaamansa taulun Linulle.',
        translation: 'A Helmi pintou por duas horas, e na tela nasceu a mesma paisagem que os artistas tinham contemplado mais de cem anos antes. Descendo, o Linu pensou que uma boa vista vale a espera. A Helmi prometeu dar ao Linu o primeiro quadro que pintou em Koli.',
        ending: { tone: 'bom', title: 'A paisagem nacional', message: 'O Linu teve paciência com a névoa e viu a Helmi pintar a vista que virou símbolo da Finlândia.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'fi-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Henkilötunnus, olkaa hyvä',
    emoji: '🪪',
    summary: 'Recém-mudado para Helsinque, o Linu enfrenta a repartição para registrar o endereço e receber o número de identidade finlandês.',
    cultural_context:
      'Quem vai morar na Finlândia registra o endereço no órgão público de registro da população e recebe um “henkilötunnus”, o número de identidade pessoal, pedido em bancos, na saúde e em quase todo serviço. Cartas e mensagens oficiais costumam usar o “te” de cortesia (“teititellä”), mas no balcão muitos finlandeses passam logo ao “sinä” (“sinutella”).',
    start: 'start',
    glossary: [
      ['virasto / virkailija', 'repartição / atendente de repartição'],
      ['Ottakaa mukaan passinne.', 'Traga o seu passaporte. (imperativo e possessivo do “te” de cortesia)'],
      ['mikäli', 'caso, se (formal)'],
      ['vuokrasopimus', 'contrato de aluguel'],
      ['vuoronumero', 'senha de atendimento'],
      ['teititellä / sinutella', 'tratar por “te” (formal) / tratar por “sinä”'],
      ['Hyvä vastaanottaja / Ystävällisin terveisin', 'Prezado(a) destinatário(a) / Atenciosamente'],
      ['liitteenä', 'em anexo'],
    ],
    nodes: {
      start: {
        emoji: '📧',
        text: 'Linu oli muuttanut Helsinkiin töihin, ja hänen piti rekisteröidä osoitteensa virastossa. Hän oli varannut ajan verkossa, ja vahvistusviestissä luki: “Ottakaa mukaan passinne ja vuokrasopimuksenne. Mikäli ette pääse paikalle, peruuttakaa aikanne viimeistään edellisenä päivänä.”',
        translation: 'O Linu tinha se mudado para Helsinque a trabalho e precisava registrar o endereço na repartição. Ele tinha marcado horário pela internet, e a mensagem de confirmação dizia: “Traga o seu passaporte e o seu contrato de aluguel. Caso não possa comparecer, cancele o seu horário até o dia anterior.”',
        choices: [
          { text: 'Linu tarkisti, että hänellä oli molemmat asiakirjat.', translation: 'O Linu conferiu se estava com os dois documentos.', next: 'paperit' },
          { text: 'Linu otti mukaan vain passin, koska se varmasti riittäisi.', translation: 'O Linu levou só o passaporte, porque com certeza bastaria.', next: 'vain_passi' },
          {
            text: 'Linu ajatteli, että viestissä häntä pyydettiin peruuttamaan aikansa.',
            translation: 'O Linu achou que a mensagem pedia para ele cancelar o horário.',
            wrong: 'A mensagem pede para cancelar SÓ “mikäli ette pääse paikalle”: CASO o senhor NÃO POSSA comparecer. “Mikäli” é um “se” formal, típico de textos oficiais, e “ette pääse” é a negação no “te” de cortesia.',
          },
        ],
      },
      paperit: {
        emoji: '📂',
        text: 'Passi oli laatikossa, mutta paperista vuokrasopimusta Linu ei löytänyt mistään. Sitten hän muisti, että vuokranantaja oli lähettänyt sopimuksen sähköpostilla. Aikaa virastoon oli enää tunti.',
        translation: 'O passaporte estava na gaveta, mas o contrato de aluguel em papel o Linu não achou em lugar nenhum. Então ele lembrou que o proprietário tinha mandado o contrato por e-mail. Faltava só uma hora para o horário na repartição.',
        choices: [
          { text: 'Linu tallensi sopimuksen puhelimeensa ja lähti.', translation: 'O Linu salvou o contrato no celular e saiu.', next: 'virasto' },
          { text: 'Linu lähti ilman sopimusta.', translation: 'O Linu saiu sem o contrato.', next: 'vain_passi' },
        ],
      },
      vain_passi: {
        emoji: '🛂',
        text: 'Virkailija katsoi passia ja sanoi kohteliaasti: “Valitettavasti tarvitsemme myös selvityksen asumisestanne, esimerkiksi vuokrasopimuksen. Voisitteko toimittaa sen meille?”',
        translation: 'A atendente olhou o passaporte e disse, educada: “Infelizmente, precisamos também de um comprovante da sua moradia, por exemplo o contrato de aluguel. O senhor poderia nos enviar?”',
        choices: [
          { text: 'Linu kysyi, voisiko hän lähettää sopimuksen sähköpostilla.', translation: 'O Linu perguntou se poderia mandar o contrato por e-mail.', next: 'sahkoposti' },
          { text: 'Linu vastasi, että hän tulee toisena päivänä uudelleen.', translation: 'O Linu respondeu que voltaria outro dia.', next: 'uusi_aika' },
        ],
      },
      uusi_aika: {
        emoji: '📅',
        text: 'Virkailija neuvoi varaamaan uuden ajan verkosta. Seuraava vapaa aika oli vasta kolmen viikon päästä, eikä Linu voinut sitä ennen avata pankkitiliä. Kotimatkalla hän päätti lukea viraston viestit jatkossa tarkemmin.',
        translation: 'A atendente orientou marcar um novo horário pela internet. O próximo horário livre era só dali a três semanas, e antes disso o Linu não poderia abrir conta no banco. No caminho de casa, ele decidiu ler com mais atenção as mensagens da repartição.',
        ending: { tone: 'neutro', title: 'Três semanas de espera', message: 'A mensagem pedia os DOIS documentos. Da próxima vez, o Linu lê o e-mail oficial até o fim.' },
      },
      sahkoposti: {
        emoji: '✉️',
        text: 'Virkailija antoi osoitteen ja pyysi kirjoittamaan viestin asiallisesti. Linu kirjoitti puhelimellaan: “Hyvä vastaanottaja, liitteenä lähetän vuokrasopimukseni. Ystävällisin terveisin, Linu.” Muutaman minuutin päästä virkailija nyökkäsi: viesti oli tullut perille.',
        translation: 'A atendente deu o endereço e pediu que ele escrevesse a mensagem em tom formal. O Linu escreveu no celular: “Prezada destinatária, envio em anexo o meu contrato de aluguel. Atenciosamente, Linu.” Alguns minutos depois, a atendente fez que sim: a mensagem tinha chegado.',
        choices: [{ text: 'Linu kiitti ja odotti jatkoa.', translation: 'O Linu agradeceu e esperou o próximo passo.', next: 'asia' }],
      },
      virasto: {
        emoji: '🔢',
        text: 'Virastossa Linu otti vuoronumeron automaatista ja odotti. Kun hänen numeronsa tuli näytölle, virkailija tervehti: “Hyvää päivää. Kuinka voin auttaa teitä?” Linu ojensi passinsa ja näytti vuokrasopimuksen puhelimestaan.',
        translation: 'Na repartição, o Linu tirou a senha na máquina e esperou. Quando o número dele apareceu no painel, a atendente cumprimentou: “Bom dia. Em que posso ajudar o senhor?” O Linu entregou o passaporte e mostrou o contrato de aluguel no celular.',
        choices: [
          { text: 'Linu vastasi: “Hyvää päivää. Haluaisin rekisteröidä osoitteeni.”', translation: 'O Linu respondeu: “Bom dia. Eu gostaria de registrar o meu endereço.”', next: 'asia' },
          { text: 'Linu vastasi: “Moi! Mä tarviin sen tunnuksen.”', translation: 'O Linu respondeu: “Oi! Eu preciso daquele número.” (língua falada)', next: 'puhekieli' },
        ],
      },
      puhekieli: {
        emoji: '😄',
        text: 'Virkailija hymyili ja vaihtoi hänkin rennompaan sävyyn: “Selvä, katsotaan. Sulla on passi ja sopimus, hyvä.” Linu huomasi, että suomalaiset sinuttelevat usein kasvokkain, vaikka viraston kirjeet kirjoitetaan yhä teititellen.',
        translation: 'A atendente sorriu e também passou para um tom mais descontraído: “Beleza, vamos ver. Você tem passaporte e contrato, ótimo.” O Linu percebeu que os finlandeses muitas vezes se tratam por “sinä” cara a cara, embora as cartas da repartição ainda sejam escritas com o “te” de cortesia.',
        choices: [{ text: 'Linu jatkoi asiointia.', translation: 'O Linu continuou o atendimento.', next: 'asia' }],
      },
      asia: {
        emoji: '💻',
        text: 'Virkailija tarkisti asiakirjat ja kirjasi tiedot järjestelmään. “Saatte henkilötunnuksenne heti, ja vahvistus lähetetään teille myös postitse”, hän sanoi. Lopuksi hän kysyi, haluaisiko Linu antaa sähköpostiosoitteensa viraston viestejä varten.',
        translation: 'A atendente conferiu os documentos e lançou os dados no sistema. “O senhor recebe o seu número de identidade na hora, e a confirmação também será enviada pelo correio”, ela disse. Por fim, perguntou se o Linu gostaria de informar o e-mail para as mensagens da repartição.',
        choices: [
          { text: 'Linu antoi sähköpostiosoitteensa.', translation: 'O Linu informou o e-mail.', next: 'final_bom' },
          {
            text: 'Linu kysyi, joutuuko hän odottamaan tunnusta kuukauden.',
            translation: 'O Linu perguntou se teria que esperar um mês pelo número.',
            wrong: 'A atendente disse “Saatte henkilötunnuksenne heti”: o senhor recebe o número NA HORA. O “-tte” de “saatte” e o “-nne” de “henkilötunnuksenne” são o “te” de cortesia: “o senhor recebe o seu número”.',
          },
        ],
      },
      final_bom: {
        emoji: '✨',
        text: 'Virastosta lähtiessään Linulla oli uusi henkilötunnus, jota hän tarvitsisi pankissa, terveyskeskuksessa ja työpaikallaan. Illalla hän sai sähköpostin, joka alkoi sanoilla “Arvoisa asiakas”. Linu hymyili: suomalainen byrokratia oli ollut nopeampaa kuin hän oli pelännyt.',
        translation: 'Ao sair da repartição, o Linu tinha um número de identidade novo, que ia precisar no banco, no posto de saúde e no trabalho. À noite, recebeu um e-mail que começava com “Prezado cliente”. O Linu sorriu: a burocracia finlandesa tinha sido mais rápida do que ele temia.',
        ending: { tone: 'bom', title: 'Registrado!', message: 'O Linu entendeu a mensagem formal, levou os documentos certos e saiu da repartição com o henkilötunnus.' },
      },
    },
  },
  {
    id: 'fi-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Hyvä koulutuskoordinaattori',
    emoji: '🎓',
    summary: 'Em Jyväskylä, o Linu precisa escrever um e-mail formal para conseguir uma vaga no curso de verão de finlandês da universidade.',
    cultural_context:
      'Jyväskylä, na Finlândia central, é uma cidade universitária: em 1863 abriu ali o primeiro seminário de formação de professores em língua finlandesa, no morro de Seminaarinmäki. O arquiteto Alvar Aalto (1898–1976) passou a juventude na cidade, projetou prédios do campus e tem ali um museu dedicado à sua obra.',
    start: 'start',
    glossary: [
      ['Hyvä… / Ystävällisin terveisin', 'Prezado(a)… / Atenciosamente'],
      ['Kiitos viestistänne.', 'Obrigado pela sua mensagem. (possessivo do “te” de cortesia)'],
      ['Mikäli haluatte…', 'Caso o senhor queira… (formal)'],
      ['perjantaihin mennessä', 'até sexta-feira (prazo)'],
      ['liitteenä oleva lomake', 'o formulário em anexo'],
      ['ilmoittautuminen', 'inscrição'],
      ['tiedustelut', 'informações, consultas'],
      ['asiallinen', 'objetivo, sóbrio, em tom adequado'],
    ],
    nodes: {
      start: {
        emoji: '💻',
        text: 'Linu halusi osallistua Jyväskylän yliopiston suomen kielen kesäkurssille, mutta ilmoittautuminen oli jo päättynyt. Kurssin verkkosivulla luki: “Tiedustelut koulutuskoordinaattorilta sähköpostitse.” Linu avasi sähköpostin ja mietti, miten aloittaisi viestin.',
        translation: 'O Linu queria participar do curso de verão de finlandês da Universidade de Jyväskylä, mas as inscrições já tinham encerrado. No site do curso estava escrito: “Informações com a coordenação de cursos, por e-mail.” O Linu abriu o e-mail e ficou pensando em como começar a mensagem.',
        choices: [
          { text: 'Linu kirjoitti: “Hyvä koulutuskoordinaattori,”', translation: 'O Linu escreveu: “Prezada coordenadora de cursos,”', next: 'viesti' },
          { text: 'Linu kirjoitti: “Moikka! Pääsiskö sinne kurssille vielä?”', translation: 'O Linu escreveu: “Oiê! Dá pra entrar ainda naquele curso?”', next: 'moikka' },
        ],
      },
      moikka: {
        emoji: '🙈',
        text: 'Ennen kuin Linu ehti lähettää viestin, hänen kämppäkaverinsa Eero luki sen olan yli ja pudisti päätään. “Tuntemattomalle virkailijalle ei kirjoiteta noin”, hän sanoi. “Aloita asiallisella tervehdyksellä ja kerro heti, mitä asiasi koskee.”',
        translation: 'Antes que o Linu conseguisse mandar a mensagem, o colega de apartamento dele, o Eero, leu por cima do ombro e balançou a cabeça. “Não se escreve assim para um funcionário que você não conhece”, disse ele. “Comece com uma saudação formal e diga logo do que se trata.”',
        choices: [
          { text: 'Linu kirjoitti viestin uudelleen asiallisesti.', translation: 'O Linu reescreveu a mensagem em tom formal.', next: 'viesti' },
          { text: 'Linu lähetti viestin sellaisenaan.', translation: 'O Linu mandou a mensagem do jeito que estava.', next: 'lahetti' },
        ],
      },
      lahetti: {
        emoji: '📭',
        text: 'Viikon päästä Linu sai lyhyen vastauksen: “Kurssi on täynnä. Ystävällisin terveisin, koulutuskoordinaattori.” Eero sanoi, ettei asiallinen viesti olisi taannut paikkaa, mutta se olisi antanut kirjoittajasta paremman kuvan. Linu päätti yrittää ensi vuonna ja kirjoittaa silloin toisin.',
        translation: 'Uma semana depois, o Linu recebeu uma resposta curta: “O curso está lotado. Atenciosamente, coordenação de cursos.” O Eero disse que uma mensagem formal não teria garantido a vaga, mas teria passado uma imagem melhor de quem escreveu. O Linu decidiu tentar no ano seguinte e, dessa vez, escrever de outro jeito.',
        ending: { tone: 'neutro', title: 'Resposta curta', message: 'Para um funcionário desconhecido, o e-mail finlandês pede saudação, assunto claro e “Ystävällisin terveisin”. Fica a lição para o ano que vem.' },
      },
      viesti: {
        emoji: '✍️',
        text: 'Linu kirjoitti: “Hyvä koulutuskoordinaattori, olen kiinnostunut suomen kielen kesäkurssista, mutta huomasin, että ilmoittautuminen on päättynyt. Olisiko kurssille vielä mahdollista päästä? Ystävällisin terveisin, Linu.” Seuraavana aamuna hän sai vastauksen.',
        translation: 'O Linu escreveu: “Prezada coordenadora de cursos, tenho interesse no curso de verão de finlandês, mas notei que as inscrições se encerraram. Ainda seria possível entrar no curso? Atenciosamente, Linu.” Na manhã seguinte, ele recebeu a resposta.',
        choices: [{ text: 'Linu avasi vastauksen jännittyneenä.', translation: 'O Linu abriu a resposta, ansioso.', next: 'vastaus' }],
      },
      vastaus: {
        emoji: '📨',
        text: 'Koordinaattori kirjoitti: “Kiitos viestistänne. Kurssilla on vielä yksi vapaa paikka. Mikäli haluatte varata sen, pyydän teitä täyttämään liitteenä olevan lomakkeen perjantaihin mennessä ja tuomaan kopion passistanne toimistoomme Seminaarinmäelle.”',
        translation: 'A coordenadora escreveu: “Obrigada pela sua mensagem. O curso ainda tem uma vaga livre. Caso o senhor queira reservá-la, peço que preencha o formulário em anexo até sexta-feira e traga uma cópia do seu passaporte ao nosso escritório no Seminaarinmäki.”',
        choices: [
          { text: 'Linu täytti lomakkeen heti.', translation: 'O Linu preencheu o formulário na hora.', next: 'lomake' },
          {
            text: 'Linu ajatteli, että lomakkeen voi palauttaa vasta ensi kuussa.',
            translation: 'O Linu pensou que o formulário só podia ser entregue no mês seguinte.',
            wrong: 'A coordenadora pediu o formulário “perjantaihin mennessä”: ATÉ SEXTA-FEIRA. “Mennessä” depois de uma data marca o prazo final, muito comum em textos oficiais.',
          },
        ],
      },
      lomake: {
        emoji: '📝',
        text: 'Lomakkeessa kysyttiin nimeä, syntymäaikaa, äidinkieltä ja aiempia suomen opintoja. Kohdassa “Miksi haluatte osallistua kurssille?” Linu mietti pitkään. Lopulta hän kirjoitti rehellisesti, että halusi ymmärtää suomalaisia ilman sanakirjaa.',
        translation: 'O formulário pedia nome, data de nascimento, língua materna e estudos anteriores de finlandês. No item “Por que o senhor quer participar do curso?”, o Linu pensou bastante. No fim, escreveu com sinceridade que queria entender os finlandeses sem dicionário.',
        choices: [{ text: 'Linu vei lomakkeen ja passikopion toimistoon.', translation: 'O Linu levou o formulário e a cópia do passaporte ao escritório.', next: 'toimisto' }],
      },
      toimisto: {
        emoji: '🏛️',
        text: 'Koordinaattori otti paperit vastaan ja kertoi, että osan kampuksen rakennuksista on suunnitellut arkkitehti Alvar Aalto, joka vietti nuoruutensa Jyväskylässä. “Teillä on vielä hyvin aikaa käydä Aalto-museossa ennen kurssin alkua”, hän sanoi. Museo oli vain lyhyen kävelymatkan päässä.',
        translation: 'A coordenadora recebeu os papéis e contou que parte dos prédios do campus foi projetada pelo arquiteto Alvar Aalto, que passou a juventude em Jyväskylä. “O senhor ainda tem bastante tempo para visitar o museu Aalto antes de o curso começar”, ela disse. O museu ficava a uma curta caminhada dali.',
        choices: [
          { text: 'Linu kävi Alvar Aalto -museossa.', translation: 'O Linu foi ao museu Alvar Aalto.', next: 'museo' },
          {
            text: 'Linu kiirehti pois, koska kurssi alkaisi koordinaattorin mukaan heti.',
            translation: 'O Linu saiu correndo, porque, segundo a coordenadora, o curso ia começar na hora.',
            wrong: 'Ela disse “Teillä on vielä hyvin aikaa”: O SENHOR AINDA TEM BASTANTE TEMPO antes de o curso começar. “Teillä on” é o “ter” no “te” de cortesia.',
          },
        ],
      },
      museo: {
        emoji: '🪑',
        text: 'Museossa Linu näki Aallon suunnittelemia huonekaluja ja lasimaljakoita, joiden aaltoilevat muodot muistuttivat järvien rantoja. Hän ajatteli, että Suomessa jopa tuoli voi kertoa luonnosta. Kotona hän kirjoitti koordinaattorille vielä lyhyen kiitosviestin.',
        translation: 'No museu, o Linu viu móveis e vasos de vidro projetados por Aalto, com formas onduladas que lembravam as margens dos lagos. Ele pensou que, na Finlândia, até uma cadeira pode falar da natureza. Em casa, ele ainda escreveu uma breve mensagem de agradecimento à coordenadora.',
        choices: [{ text: 'Linu odotti innolla kurssin alkua.', translation: 'O Linu esperou ansioso o começo do curso.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Kesäkuun ensimmäisenä maanantaina Linu istui luokassa kahdenkymmenen muun opiskelijan kanssa. Opettaja aloitti: “Tervetuloa! Tällä kurssilla sinutellaan, joten unohtakaa te-muoto.” Kaikki nauroivat, ja Linu tunsi olevansa oikeassa paikassa.',
        translation: 'Na primeira segunda-feira de junho, o Linu estava sentado na sala com outros vinte alunos. A professora começou: “Bem-vindos! Neste curso a gente se trata por ‘sinä’, então esqueçam o ‘te’.” Todos riram, e o Linu sentiu que estava no lugar certo.',
        ending: { tone: 'bom', title: 'Vaga garantida', message: 'Com um e-mail formal bem escrito e o prazo cumprido, o Linu entrou no curso de verão de Jyväskylä.' },
      },
    },
  },
  {
    id: 'fi-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Retki peruttu, arvoisa asiakas',
    emoji: '🏝️',
    summary: 'Em Vaasa, o passeio de barco do Linu pelo arquipélago de Kvarken é cancelado por causa do vento, e ele precisa resolver tudo em finlandês formal.',
    cultural_context:
      'O arquipélago de Kvarken (Merenkurkku), perto de Vaasa, é Patrimônio Mundial da UNESCO desde 2006, junto com a Costa Alta da Suécia. Depois da Era do Gelo, a terra ali continua subindo, cerca de 8 milímetros por ano: surgem ilhas novas e a costa muda a cada geração. A ponte de Replot (Raippaluodon silta), que liga o continente ao arquipélago, é a mais longa da Finlândia.',
    start: 'start',
    glossary: [
      ['Arvoisa asiakas', 'Prezado cliente'],
      ['pahoittelemme', 'lamentamos, pedimos desculpas'],
      ['joudutaan perumaan', 'terá que ser cancelado (passivo de “joutua”)'],
      ['Voitte valita…', 'O senhor pode escolher… (“te” de cortesia)'],
      ['rahojen palautus', 'reembolso'],
      ['maan kohoaminen', 'o soerguimento da terra'],
      ['maailmanperintökohde', 'patrimônio mundial'],
      ['palaute', 'avaliação, comentário do cliente'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: 'Linu oli varannut paikan veneretkelle Merenkurkun saaristoon Vaasasta. Retkipäivän aamuna hän sai tekstiviestin: “Arvoisa asiakas, pahoittelemme, että tämänpäiväinen veneretki joudutaan perumaan kovan tuulen vuoksi. Voitte valita joko rahojen palautuksen tai opastetun kävelyretken Raippaluodossa.”',
        translation: 'O Linu tinha reservado lugar num passeio de barco de Vaasa pelo arquipélago de Kvarken. Na manhã do passeio, ele recebeu uma mensagem de texto: “Prezado cliente, lamentamos que o passeio de barco de hoje tenha que ser cancelado por causa do vento forte. O senhor pode escolher entre o reembolso ou uma caminhada guiada em Replot.”',
        choices: [
          { text: 'Linu valitsi kävelyretken.', translation: 'O Linu escolheu a caminhada.', next: 'kavely' },
          { text: 'Linu soitti yritykseen ja pyysi siirtämään veneretken toiseen päivään.', translation: 'O Linu ligou para a empresa e pediu para passar o passeio de barco para outro dia.', next: 'soitto' },
          {
            text: 'Linu ajatteli, että veneretki oli vain siirretty iltapäivään.',
            translation: 'O Linu pensou que o passeio de barco só tinha sido adiado para a tarde.',
            wrong: 'A mensagem diz que o passeio “joudutaan perumaan”: TERÁ QUE SER CANCELADO por causa do vento forte. “Pahoittelemme” (lamentamos) e “Arvoisa asiakas” (prezado cliente) são típicos das mensagens formais.',
          },
        ],
      },
      soitto: {
        emoji: '☎️',
        text: 'Puhelimeen vastasi asiakaspalvelija, joka puhui kohteliaasti ja teititellen. “Valitettavasti huomisen retki on jo täynnä. Voisinko tarjota teille paikkaa ensi viikon tiistain retkelle?” Linu tiesi, että hän lähtisi Vaasasta jo sunnuntaina.',
        translation: 'Quem atendeu o telefone foi uma atendente que falava educadamente, usando o “te” de cortesia. “Infelizmente, o passeio de amanhã já está lotado. Eu poderia oferecer ao senhor um lugar no passeio da terça-feira da semana que vem?” O Linu sabia que ia embora de Vaasa já no domingo.',
        choices: [
          { text: 'Linu kiitti ja valitsi sittenkin kävelyretken.', translation: 'O Linu agradeceu e acabou escolhendo a caminhada.', next: 'kavely' },
          { text: 'Linu pyysi rahojen palautusta.', translation: 'O Linu pediu o reembolso.', next: 'palautus' },
          {
            text: 'Linu otti paikan tiistain retkeltä.',
            translation: 'O Linu ficou com a vaga no passeio de terça.',
            wrong: 'O Linu vai embora de Vaasa “jo sunnuntaina”, JÁ NO DOMINGO, e a vaga oferecida é para a terça da SEMANA QUE VEM (“ensi viikon tiistain”). Ele não estaria mais lá.',
          },
        ],
      },
      palautus: {
        emoji: '💸',
        text: 'Asiakaspalvelija lupasi palauttaa rahat tilille viiden arkipäivän kuluessa. Linu vietti päivän hotellissa sadetta ja tuulta katsellen. Illalla hän luki, että Merenkurkun maa kohoaa lähes sentin vuodessa, ja harmitteli, ettei ollut nähnyt saaristoa omin silmin.',
        translation: 'A atendente prometeu devolver o dinheiro na conta em até cinco dias úteis. O Linu passou o dia no hotel, olhando a chuva e o vento. À noite, leu que a terra em Kvarken sobe quase um centímetro por ano e ficou chateado por não ter visto o arquipélago com os próprios olhos.',
        ending: { tone: 'neutro', title: 'Dinheiro de volta', message: 'O reembolso veio, mas o arquipélago ficou sem visita. A caminhada guiada era a outra opção da mensagem!' },
      },
      kavely: {
        emoji: '🌉',
        text: 'Opas, harmaahiuksinen nainen nimeltä Kaarina, tervehti ryhmää Raippaluodon sillan luona. “Hyvät retkeläiset, tervetuloa maailmanperintökohteeseen”, hän aloitti. Hän kertoi, että silta on Suomen pisin ja että se yhdistää mantereen saaristoon.',
        translation: 'A guia, uma senhora de cabelos grisalhos chamada Kaarina, cumprimentou o grupo junto à ponte de Replot. “Caros participantes, sejam bem-vindos a um patrimônio mundial”, ela começou. Contou que a ponte é a mais longa da Finlândia e que liga o continente ao arquipélago.',
        choices: [{ text: 'Ryhmä lähti kävelemään luontopolkua.', translation: 'O grupo começou a percorrer a trilha.', next: 'polku' }],
      },
      polku: {
        emoji: '🪨',
        text: 'Polun varrella oli suuria kiviä ja matalia, pitkänomaisia harjuja, joita kutsutaan De Geer -moreeneiksi. Kaarina selitti, että jäätikkö oli aikoinaan painanut maata alaspäin ja että nyt maa kohoaa noin kahdeksan millimetriä vuodessa. “Siksi täällä syntyy koko ajan uutta maata”, hän sanoi.',
        translation: 'Ao longo da trilha havia pedras grandes e cristas baixas e compridas, chamadas morenas de De Geer. A Kaarina explicou que a geleira tinha empurrado a terra para baixo e que agora a terra sobe cerca de oito milímetros por ano. “Por isso aqui está sempre nascendo terra nova”, ela disse.',
        choices: [
          { text: 'Linu kysyi, näkyykö maan kohoaminen ihmisen eliniän aikana.', translation: 'O Linu perguntou se dá para ver a terra subir durante a vida de uma pessoa.', next: 'kohoaminen' },
          { text: 'Linu kiipesi näkötorniin katsomaan saaristoa.', translation: 'O Linu subiu na torre de observação para ver o arquipélago.', next: 'torni' },
        ],
      },
      kohoaminen: {
        emoji: '🛖',
        text: 'Kaarina näytti vanhaa venevajaa, joka oli aikanaan rakennettu aivan veden rajaan. Nyt vaja seisoi kaukana rannasta keskellä niittyä. “Isoisäni aikana tähän rantaan pääsi veneellä”, hän kertoi.',
        translation: 'A Kaarina mostrou uma velha casa de barcos, que tinha sido construída bem na beira da água. Agora a casinha ficava longe da margem, no meio de um campo. “No tempo do meu avô, dava para chegar aqui de barco”, ela contou.',
        choices: [{ text: 'Sen jälkeen Linu kiipesi näkötorniin.', translation: 'Depois disso, o Linu subiu na torre de observação.', next: 'torni' }],
      },
      torni: {
        emoji: '🔭',
        text: 'Näkötornista Linu näki tuhansia pieniä saaria ja luotoja, joiden välissä meri kimalteli harmaana. Tuuli oli niin kova, että hänen piti pidellä kaiteesta kiinni. Hän ymmärsi hyvin, miksi veneretki oli peruttu.',
        translation: 'Da torre, o Linu viu milhares de ilhotas e rochedos, entre os quais o mar brilhava cinzento. O vento era tão forte que ele tinha que se segurar no corrimão. Ele entendeu bem por que o passeio de barco tinha sido cancelado.',
        choices: [{ text: 'Linu laskeutui alas ryhmän luo.', translation: 'O Linu desceu e voltou para o grupo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Retken lopuksi Kaarina sanoi: “Kiitän teitä kaikkia mielenkiinnostanne ja toivotan teille hyvää matkan jatkoa.” Illalla Linu kirjoitti yritykselle palautteen: “Kiitos erinomaisesta retkestä. Vaikka veneretki peruttiin, kävelyretki oli matkani kohokohta.”',
        translation: 'No fim do passeio, a Kaarina disse: “Agradeço a todos pelo interesse e desejo a todos uma boa continuação de viagem.” À noite, o Linu escreveu uma avaliação para a empresa: “Obrigado pelo excelente passeio. Embora o passeio de barco tenha sido cancelado, a caminhada foi o ponto alto da minha viagem.”',
        ending: { tone: 'bom', title: 'Terra que cresce', message: 'O Linu entendeu a mensagem formal, escolheu bem e viu de perto o arquipélago que sobe do mar.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'fi-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Moro, Manse!',
    emoji: '🍩',
    summary: 'Em Tampere, o amigo Jussi mostra ao Linu a cidade no finlandês falado: chouriço preto na feira, sonhos na torre de Pyynikki e o famoso “nääs”.',
    cultural_context:
      'Tampere, a antiga cidade das fábricas têxteis, ganhou o apelido de “Manse” (de Manchester), e seus moradores cumprimentam com “moro”. O café da torre de observação de Pyynikki, no espinhaço entre os lagos Näsijärvi e Pyhäjärvi, é famoso pelos sonhos (munkit), e o chouriço preto (mustamakkara) se come com geleia de mirtilo-vermelho (puolukka).',
    start: 'start',
    glossary: [
      ['moro', 'oi (cumprimento típico de Tampere)'],
      ['mä / sä / oon / oot', 'minä / sinä / olen / olet no finlandês falado'],
      ['tehä, ekaks, sit, mut', 'tehdä, ensiksi, sitten, mutta (formas faladas)'],
      ['mennääks?', 'mennäänkö? (vamos?)'],
      ['mutsi', 'mãe (gíria)'],
      ['olla ihan poikki', 'estar morto de cansaço'],
      ['nääs', 'sabe, veja bem (bordão de Tampere)'],
      ['munkki', 'sonho, rosquinha frita'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'Linu saapuu junalla Tampereelle, ja asemalla häntä odottaa vanha kaveri Jussi. “Moro! Tervetuloo Manseen!” Jussi huutaa ja halaa häntä niin, että Linun reppu melkein putoaa. “Mitä sä haluut tehä ekaks?” hän kysyy. “Mennääks syömään mustaamakkaraa torille vai suoraan munkeille Pyynikille?”',
        translation: 'O Linu chega de trem a Tampere, e na estação o espera o velho amigo Jussi. “Moro! Bem-vindo a Manse!”, grita o Jussi, e o abraça tão forte que a mochila do Linu quase cai. “O que você quer fazer primeiro?”, ele pergunta. “Vamos comer chouriço preto na feira ou direto para os sonhos em Pyynikki?”',
        choices: [
          { text: '“Mustaamakkaraa, totta kai!”', translation: '“Chouriço preto, claro!”', next: 'tori' },
          { text: '“Munkeille! Mä oon kuullu niistä paljon.”', translation: '“Aos sonhos! Já ouvi falar muito deles.”', next: 'pyynikki' },
        ],
      },
      tori: {
        emoji: '🌭',
        text: 'Tammelan torilla myyjä nostaa kattilasta mustan, kiiltävän makkaran ja kysyy: “Puolukkaa päälle?” Jussi vastaa Linun puolesta: “Joo, ja paljon. Ilman puolukkaa se ei oo mitään.” Linu maistaa varovasti, ja maku on yllättävän pehmeä ja mausteinen. “No, mitä tykkäät?” Jussi kysyy suu täynnä.',
        translation: 'Na feira de Tammela, o vendedor tira da panela um chouriço preto e brilhante e pergunta: “Mirtilo-vermelho por cima?” O Jussi responde pelo Linu: “Sim, e bastante. Sem o mirtilo não é nada.” O Linu prova com cuidado, e o sabor é surpreendentemente macio e temperado. “E aí, gostou?”, pergunta o Jussi de boca cheia.',
        choices: [
          { text: '“Tosi hyvää! Mut nyt mä haluun munkin.”', translation: '“Muito bom! Mas agora quero um sonho.”', next: 'pyynikki' },
          {
            text: '“En syö, koska Jussi sanoi, että se ei ole hyvää.”',
            translation: '“Não vou comer, porque o Jussi disse que não é bom.”',
            wrong: 'O Jussi disse “ilman puolukkaa se ei oo mitään”: SEM a geleia de mirtilo-vermelho o chouriço “não é nada”. Ele não falou mal do chouriço; só quis bastante geleia por cima. “Ei oo” é o falado de “ei ole”.',
          },
        ],
      },
      pyynikki: {
        emoji: '🗼',
        text: 'Pyynikin näkötornin kahvilan edessä on pitkä jono. “Täällä on aina jonoo, mut munkit on sen arvosii”, Jussi sanoo. “Mä en oo koskaan syöny parempii.” Kun he vihdoin pääsevät tiskille, hän ostaa kaksi munkkia itselleen ja kuiskaa: “Älä sit kerro mun mutsille, et mä söin taas kolme. Se sanoo aina, et mä syön liikaa sokeria.”',
        translation: 'Na frente do café da torre de Pyynikki há uma fila comprida. “Aqui sempre tem fila, mas os sonhos valem a pena”, diz o Jussi. “Nunca comi melhores.” Quando enfim chegam ao balcão, ele compra dois sonhos para si e cochicha: “Depois não conta para a minha mãe que eu comi três de novo. Ela sempre diz que eu como açúcar demais.”',
        choices: [
          { text: '“Mä en sano mitään. Mennään ylös torniin!”', translation: '“Não digo nada. Vamos subir na torre!”', next: 'torni' },
          {
            text: '“Siis Jussin äiti leipoo nämä munkit?”',
            translation: '“Então é a mãe do Jussi que faz esses sonhos?”',
            wrong: '“Mutsi” é gíria para “äiti” (mãe), mas o Jussi não disse que ela faz os sonhos: pediu para o Linu NÃO contar à mãe dele que ele comeu três, porque ela reclama que ele come açúcar demais.',
          },
        ],
      },
      torni: {
        emoji: '🌅',
        text: 'Tornin huipulta näkyy kaksi järveä: toisella puolella Näsijärvi, toisella Pyhäjärvi, ja niiden välissä kaupunki. “Tampere on rakennettu kahden järven väliin, nääs”, Jussi selittää. Linu nauraa ja kysyy, miksi Jussi sanoo koko ajan “nääs”. “Kaikki tamperelaiset sanoo sitä, nääs. Se on vähän niinku "tiedätsä", mut meidän oma.”',
        translation: 'Do alto da torre se veem dois lagos: de um lado o Näsijärvi, do outro o Pyhäjärvi, e a cidade entre eles. “Tampere foi construída entre dois lagos, sabe”, explica o Jussi. O Linu ri e pergunta por que o Jussi diz “nääs” o tempo todo. “Todo mundo de Tampere diz isso, sabe. É meio como "sabe", só que é nosso.”',
        choices: [{ text: '“Tää on ihan huikee paikka, nääs!”', translation: '“Este lugar é incrível, sabe!”', next: 'ilta' }],
      },
      ilta: {
        emoji: '🥱',
        text: 'Illalla he ovat kävelleet koko keskustan läpi, vanhoista punatiilisistä tehdasrakennuksista Tammerkosken rannalle. Jussi istuu penkille ja huokaa: “Mä oon ihan poikki. Mut hei, vielä yks juttu: Rajaportin sauna. Se on Suomen vanhin yleinen sauna, joka on vieläkin käytössä.” Hän katsoo Linua kysyvästi.',
        translation: 'À noite eles já andaram pelo centro todo, dos antigos prédios de tijolo vermelho das fábricas até a beira da corredeira Tammerkoski. O Jussi senta num banco e suspira: “Estou morto de cansaço. Mas olha, mais uma coisa: a sauna de Rajaportti. É a sauna pública mais antiga da Finlândia que ainda funciona.” Ele olha para o Linu com cara de pergunta.',
        choices: [
          { text: '“Jos sä jaksat, niin mennään saunaan!”', translation: '“Se você aguentar, vamos à sauna!”', next: 'sauna' },
          { text: '“Sä oot poikki. Mennään kotiin nukkumaan.”', translation: '“Você está morto. Vamos para casa dormir.”', next: 'final_neutro' },
          {
            text: '“Voi ei! Mikä meni poikki? Tarvitsetko lääkäriä?”',
            translation: '“Ah, não! O que quebrou? Você precisa de médico?”',
            wrong: '“Poikki” pode querer dizer “quebrado, partido”, mas na expressão “olla ihan poikki” significa estar exausto, morto de cansaço. Nada quebrou: o Jussi só andou muito.',
          },
        ],
      },
      sauna: {
        emoji: '🧖',
        text: 'Rajaportin saunan puulämmitteisessä löylyhuoneessa istuu vanhoja miehiä, jotka juttelevat hitaasti ja ystävällisesti. Yksi heistä heittää kiukaalle vettä ja sanoo Linulle: “Ootsä ennen ollu suomalaisessa saunassa?” Linu vastaa rohkeasti puhekielellä, ja miehet nauravat hyväntahtoisesti. Jälkeenpäin he istuvat pihalla pyyhkeet harteilla ja katsovat, kuinka höyry nousee iltataivaalle.',
        translation: 'Na sala de vapor aquecida a lenha da sauna de Rajaportti estão sentados uns senhores que conversam devagar e com simpatia. Um deles joga água nas pedras quentes e diz ao Linu: “Você já esteve numa sauna finlandesa antes?” O Linu responde com coragem no finlandês falado, e os homens riem com bondade. Depois eles ficam sentados no pátio com a toalha nos ombros, olhando o vapor subir para o céu da noite.',
        choices: [{ text: '“Tää oli paras päivä ikinä.”', translation: '“Este foi o melhor dia de todos.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Kotimatkalla Jussi sanoo: “Sä puhut jo ihan ku tamperelainen.” Linu vastaa: “Kiitti, nääs!” ja molemmat nauravat niin, että ohikulkijat kääntyvät katsomaan. Linu päättää, että hän tulee Manseen uudestaan jo ensi kuussa. Ja Jussin mutsille hän ei kerro munkeista sanaakaan.',
        translation: 'No caminho de volta, o Jussi diz: “Você já fala igualzinho a alguém de Tampere.” O Linu responde: “Valeu, sabe!”, e os dois riem tanto que as pessoas que passam se viram para olhar. O Linu decide voltar a Manse já no mês que vem. E para a mãe do Jussi ele não conta nem uma palavra sobre os sonhos.',
        ending: { tone: 'bom', title: 'Quase um tamperelainen', message: 'Você entendeu o finlandês falado de Tampere — “moro”, “mutsi”, “ihan poikki” e o “nääs” — e ainda terminou o dia na sauna mais antiga do país.' },
      },
      final_neutro: {
        emoji: '🛏️',
        text: 'He kävelevät hitaasti Jussin kämppään, ja Jussi nukahtaa sohvalle heti. Linu makaa patjalla ja miettii, että Rajaportin sauna jäi näkemättä. Seuraavana aamuna Jussi sanoo: “Ens kerralla mennään, lupaan.” Linu kirjoittaa sen muistikirjaansa, ettei unohda.',
        translation: 'Eles andam devagar até o apartamento do Jussi, que dorme no sofá na hora. O Linu, deitado num colchão, pensa que ficou sem conhecer a sauna de Rajaportti. Na manhã seguinte o Jussi diz: “Na próxima a gente vai, prometo.” O Linu anota isso no caderninho para não esquecer.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'O dia foi ótimo, mas a sauna mais antiga da Finlândia ficou para outra visita.' },
      },
    },
  },
  {
    id: 'fi-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Muuttopäivä Kalliossa',
    emoji: '📦',
    summary: 'Em Kallio, bairro de Helsinque, o Linu ajuda a amiga Aino a fazer a mudança e aprende a gíria da capital: “kämppä”, “duuni”, “safka”, “himaan”.',
    cultural_context:
      'A gíria de Helsinque, o “Stadin slangi”, nasceu nos bairros operários como Kallio no fim do século XIX e início do XX, misturando finlandês e sueco: “stadi” (Helsinque) vem do sueco “stad” (cidade) e “himaan” (para casa) de “hem”. Muitas palavras dela, como “kämppä” e “duuni”, hoje se ouvem na Finlândia inteira.',
    start: 'start',
    glossary: [
      ['stadi', 'Helsinque (gíria, do sueco “stad”)'],
      ['kämppä', 'apartamento, cafofo'],
      ['duuni', 'trabalho, emprego'],
      ['safka', 'comida'],
      ['himaan / himassa', 'para casa / em casa (do sueco “hem”)'],
      ['fillari', 'bicicleta'],
      ['ihan sama', 'tanto faz'],
      ['ei oo totta!', 'não acredito!'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Lauantaiaamuna Linu seisoo kalliolaisen kerrostalon pihalla, ja hänen ympärillään on pahvilaatikoita. Aino, hänen ystävänsä, muuttaa uuteen kämppään kolmen korttelin päähän. “Kiitti et tulit! Mä en ois ikinä jaksanu yksin”, Aino sanoo. “Hissi ei tietenkään toimi, ja mun sohva on ihan hirveen painava.”',
        translation: 'Num sábado de manhã o Linu está no pátio de um prédio de apartamentos em Kallio, cercado de caixas de papelão. A Aino, amiga dele, está se mudando para um novo apê a três quarteirões dali. “Valeu por ter vindo! Eu nunca ia dar conta sozinha”, diz a Aino. “O elevador, claro, não funciona, e o meu sofá é pesado demais.”',
        choices: [
          { text: '“Aloitetaan sohvasta, niin se on pois alta.”', translation: '“Vamos começar pelo sofá, assim tiramos logo isso do caminho.”', next: 'sohva' },
          { text: '“Otetaan ensin kevyet laatikot.”', translation: '“Vamos primeiro com as caixas leves.”', next: 'laatikot' },
        ],
      },
      laatikot: {
        emoji: '📦',
        text: 'Laatikoissa lukee tussilla “keittiö”, “kirjat” ja “SÄRKYVÄÄ”. Aino kertoo, että hän sai uuden duunin kirjastosta ja siksi hän muuttaa lähemmäs. “Mä meen jatkossa fillarilla duuniin, ei tarvii enää istuu ratikassa”, hän sanoo tyytyväisenä. Viimeisen laatikon jälkeen jäljellä on enää sohva.',
        translation: 'Nas caixas está escrito com canetão “cozinha”, “livros” e “FRÁGIL”. A Aino conta que arranjou um trampo novo numa biblioteca e por isso vai morar mais perto. “Agora vou de bicicleta para o trabalho, não preciso mais ficar sentada no bonde”, ela diz, satisfeita. Depois da última caixa, só falta o sofá.',
        choices: [
          { text: '“No niin, sitten sohva.”', translation: '“Muito bem, agora o sofá.”', next: 'sohva' },
          {
            text: '“Siis sä muutat, koska sä ostit uuden fillarin?”',
            translation: '“Então você vai se mudar porque comprou uma bicicleta nova?”',
            wrong: 'A Aino se muda porque ganhou um “uusi duuni” (um trabalho novo) na biblioteca e quer morar mais perto. A “fillari” (bicicleta) é só o jeito como ela vai passar a ir para o “duuni”.',
          },
        ],
      },
      sohva: {
        emoji: '🛋️',
        text: 'Sohva on niin raskas, että he joutuvat pysähtymään joka kerroksessa. Kolmannessa kerroksessa naapurin mies avaa oven ja kysyy, tarvitaanko apua. Hänen nimensä on Pertti, ja hän on asunut Kalliossa koko ikänsä. “Mä oon syntyny stadissa, ja täällä puhuttiin ennen ihan omaa kieltä”, hän sanoo ja tarttuu sohvan toiseen päähän.',
        translation: 'O sofá é tão pesado que eles precisam parar em cada andar. No terceiro andar, o vizinho abre a porta e pergunta se precisam de ajuda. Ele se chama Pertti e morou em Kallio a vida inteira. “Eu nasci em Helsinque, e antigamente aqui se falava uma língua só nossa”, ele diz, e pega a outra ponta do sofá.',
        choices: [
          { text: '“Mitä kieltä? Kerro lisää!”', translation: '“Que língua? Conte mais!”', next: 'slangi' },
          { text: '“Kiitos avusta! Nyt tää on helppoo.”', translation: '“Obrigado pela ajuda! Agora ficou fácil.”', next: 'uusi' },
        ],
      },
      slangi: {
        emoji: '🗣️',
        text: 'Pertti kertoo, että vanha stadin slangi oli sekoitus suomea ja ruotsia. “Mä sanon vieläkin, et mä lähden himaan, enkä kotiin. Se tulee ruotsin sanasta hem”, hän selittää. “Ja stadi tulee sanasta stad, eli kaupunki.” Aino nauraa ja sanoo, että hänen mummonsa puhui samalla tavalla.',
        translation: 'O Pertti conta que a velha gíria de Helsinque era uma mistura de finlandês e sueco. “Até hoje eu digo que vou ‘himaan’, e não ‘kotiin’. Vem da palavra sueca ‘hem’”, ele explica. “E ‘stadi’ vem de ‘stad’, ou seja, cidade.” A Aino ri e diz que a avó dela falava do mesmo jeito.',
        choices: [{ text: '“Tosi siistiä! Mä opettelen näitä sanoja.”', translation: '“Que legal! Vou aprender essas palavras.”', next: 'uusi' }],
      },
      uusi: {
        emoji: '🔑',
        text: 'Uusi kämppä on pieni, mutta valoisa, ja ikkunasta näkyy Kallion kirkon torni. Kun viimeinenkin laatikko on sisällä, Aino istuu lattialle ja sanoo: “Mul on ihan hirvee nälkä. Mennäänks hakee safkaa?” Pertti on jo lähtenyt, mutta hän huikkaa rappukäytävästä, että kulman grillissä on kaupungin parhaat ranskalaiset.',
        translation: 'O apartamento novo é pequeno, mas claro, e da janela se vê a torre da igreja de Kallio. Quando até a última caixa já está lá dentro, a Aino senta no chão e diz: “Estou morrendo de fome. Vamos buscar comida?” O Pertti já foi embora, mas grita da escada que a lanchonete da esquina tem as melhores batatas fritas da cidade.',
        choices: [
          { text: '“Joo, mennään grilliin!”', translation: '“Sim, vamos à lanchonete!”', next: 'grilli' },
          { text: '“Tilataan pizza ja jäädään tänne.”', translation: '“Vamos pedir pizza e ficar aqui.”', next: 'pizza' },
          {
            text: '“Safka? Mä en tiedä, missä sun safka on. Etsitään laatikoista.”',
            translation: '“Safka? Não sei onde está a sua safka. Vamos procurar nas caixas.”',
            wrong: '“Safka” é gíria para “ruoka” (comida). A Aino está com fome e propõe “hakea safkaa”: ir buscar comida. Não é um objeto perdido nas caixas!',
          },
        ],
      },
      grilli: {
        emoji: '🍟',
        text: 'Grillin tiskillä Linu tilaa ranskalaiset ja yrittää puhua kuin paikallinen: “Moi, yhet ranskikset, kiitti!” Myyjä virnistää ja sanoo: “Ei oo totta, pingviini puhuu slangia!” Aino nauraa niin, että hänen täytyy nojata seinään. He syövät ranskalaiset puistonpenkillä ja katsovat, kun ihmiset kävelevät lauantai-illan valoissa.',
        translation: 'No balcão da lanchonete, o Linu pede batata frita e tenta falar como alguém do bairro: “Oi, uma batata, valeu!” O atendente sorri de lado e diz: “Não acredito, um pinguim falando gíria!” A Aino ri tanto que precisa se apoiar na parede. Eles comem as batatas num banco de praça, olhando as pessoas que passam nas luzes da noite de sábado.',
        choices: [{ text: '“Mennään himaan, eli sun uuteen himaan.”', translation: '“Vamos para casa, quer dizer, para a sua casa nova.”', next: 'final_bom' }],
      },
      pizza: {
        emoji: '🍕',
        text: 'Pizza tulee tunnin päästä ja on jo vähän kylmä. “Ihan sama, nälkä on niin kova”, Aino sanoo ja syö sitä suoraan laatikosta. He istuvat lattialla pahvilaatikoiden keskellä, koska tuolit ovat vielä vanhassa kämpässä. Ilta on hiljainen ja vähän liian lyhyt.',
        translation: 'A pizza chega uma hora depois e já está meio fria. “Tanto faz, a fome é grande demais”, diz a Aino, e come direto da caixa. Eles sentam no chão no meio das caixas de papelão, porque as cadeiras ainda estão no apê antigo. A noite é tranquila e um pouco curta demais.',
        ending: { tone: 'neutro', title: 'Pizza fria no chão', message: 'A mudança deu certo, mas vocês perderam a lanchonete da esquina e a chance de usar a gíria de Helsinque de verdade.' },
      },
      final_bom: {
        emoji: '🐧',
        text: 'Takaisin uudessa kämpässä Aino antaa Linulle vara-avaimen. “Tää on sulle. Täällä on aina safkaa ja sohva, jonka sä kannoit”, hän sanoo. Linu laittaa avaimen taskuunsa ja tuntee olevansa vähän stadilainen itsekin. Kotimatkalla hän toistaa hiljaa uusia sanojaan: kämppä, duuni, fillari, himaan.',
        translation: 'De volta ao apê novo, a Aino dá ao Linu uma chave reserva. “Esta é sua. Aqui sempre tem comida e o sofá que você carregou”, ela diz. O Linu põe a chave no bolso e se sente um pouco helsinquense também. No caminho de volta, repete baixinho as palavras novas: kämppä, duuni, fillari, himaan.',
        ending: { tone: 'bom', title: 'Chave de casa em Kallio', message: 'Você carregou o sofá, entendeu a gíria de Helsinque e ainda ganhou uma chave do apartamento novo.' },
      },
    },
  },
  {
    id: 'fi-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Herne nenässä Oulussa',
    emoji: '🚲',
    summary: 'Em Oulu, a cidade das bicicletas, a amiga Veera enche a conversa de expressões idiomáticas — e o Linu precisa entender cada uma para não ficar “pihalla kuin lumiukko”.',
    cultural_context:
      'Oulu, no norte do golfo de Bótnia, é conhecida como cidade de ciclistas: há ciclovias por toda parte e muita gente pedala o ano inteiro, até na neve. Na praça do mercado fica a estátua do “Toripolliisi”, um policial gordinho de bronze que virou símbolo da cidade.',
    start: 'start',
    glossary: [
      ['olla pihalla kuin lumiukko', 'não entender nada (lit.: estar no quintal como um boneco de neve)'],
      ['vetää herne nenään', 'ofender-se, ficar emburrado (lit.: puxar uma ervilha para o nariz)'],
      ['maksaa maltaita', 'custar os olhos da cara'],
      ['ei ole minun heiniäni', 'não é a minha praia (lit.: não é o meu feno)'],
      ['ottaa lusikka kauniiseen käteen', 'aceitar o jeito, conformar-se (lit.: pegar a colher com a mão bonita)'],
      ['nostaa kissa pöydälle', 'pôr o assunto delicado na mesa (lit.: levantar o gato para a mesa)'],
      ['toripolliisi', 'o “policial da praça”, estátua de Oulu'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu on vaihto-opiskelijana Oulussa, ja hänen tuutorinsa Veera on luvannut näyttää hänelle kaupunkia. “Täällä kaikki liikkuu fillarilla, talvellakin”, Veera sanoo ja ojentaa Linulle vanhan pyörän. “Tää on mun isoveljen, mutta se ei oo ajanu sillä vuosiin.” Linu katsoo pyörää epäillen, sillä sen satula on tosi korkealla.',
        translation: 'O Linu está fazendo intercâmbio em Oulu, e a tutora dele, Veera, prometeu mostrar a cidade. “Aqui todo mundo anda de bicicleta, até no inverno”, diz a Veera, estendendo ao Linu uma bicicleta velha. “É do meu irmão mais velho, mas faz anos que ele não anda nela.” O Linu olha a bicicleta desconfiado, porque o selim está altíssimo.',
        choices: [
          { text: 'Laskea satulaa ja lähteä ajamaan.', translation: 'Baixar o selim e sair pedalando.', next: 'tori' },
          { text: '“Voisinko mieluummin kävellä?”', translation: '“Será que eu poderia ir a pé?”', next: 'kavely' },
        ],
      },
      kavely: {
        emoji: '🚶',
        text: '“Kävellä? Oulussa?” Veera nauraa. “No, ota lusikka kauniiseen käteen ja kokeile edes. Pyörätiet on täällä tosi hyviä, ja mä ajan ihan hitaasti sun vieressä.” Linu huokaa, laskee satulan ja nousee pyörän selkään. Ensimmäiset metrit ovat huteria, mutta sitten matka alkaa sujua.',
        translation: '“A pé? Em Oulu?” A Veera ri. “Bom, aceita e pelo menos tenta. As ciclovias aqui são ótimas, e eu vou bem devagar do seu lado.” O Linu suspira, baixa o selim e sobe na bicicleta. Os primeiros metros são vacilantes, mas depois o passeio começa a fluir.',
        choices: [{ text: 'Ajaa Veeran perässä torille.', translation: 'Pedalar atrás da Veera até a praça do mercado.', next: 'tori' }],
      },
      tori: {
        emoji: '👮',
        text: 'Kauppatorilla seisoo pieni, pyöreä pronssipoliisi, ja Veera esittelee sen ylpeänä: “Tää on toripolliisi, Oulun tärkein asukas.” Torin laidalla myydään lohikeittoa, mutta hinta saa Linun silmät pyöreiksi. “Joo, täällä kesällä kaikki maksaa maltaita”, Veera sanoo. “Mut keitto on hyvää, se on pakko myöntää.”',
        translation: 'Na praça do mercado há um policial de bronze pequeno e rechonchudo, e a Veera o apresenta com orgulho: “Este é o toripolliisi, o morador mais importante de Oulu.” Na beira da praça vendem sopa de salmão, mas o preço deixa o Linu de olhos arregalados. “Pois é, aqui no verão tudo custa os olhos da cara”, diz a Veera. “Mas a sopa é boa, tenho que admitir.”',
        choices: [
          { text: '“Otetaan yksi keitto ja jaetaan se.”', translation: '“Vamos pegar uma sopa e dividir.”', next: 'keitto' },
          {
            text: '“Maltaita? Täällä myydään siis maltaita?”',
            translation: '“Malte? Então aqui vendem malte?”',
            wrong: '“Maksaa maltaita” é uma expressão: custar muito caro, “os olhos da cara”. Ninguém está vendendo malte (mallas); a Veera só comentou que no verão tudo na praça é caro.',
          },
        ],
      },
      keitto: {
        emoji: '🍲',
        text: 'Kun he syövät keittoa, Veeran puhelin piippaa, ja hänen ilmeensä muuttuu. “Mun kämppis veti taas herneen nenään, koska mä en tiskannu eilen”, hän sanoo. “Se on kyllä ihan kiva tyyppi, mutta tiskeistä se on tosi tarkka.” Veera katsoo Linua ja kysyy, mitä hänen pitäisi tehdä.',
        translation: 'Enquanto tomam a sopa, o celular da Veera apita e a cara dela muda. “Minha colega de apê ficou emburrada de novo porque eu não lavei a louça ontem”, ela diz. “Ela é bem legal, mas com a louça é muito exigente.” A Veera olha para o Linu e pergunta o que deveria fazer.',
        choices: [
          { text: '“Nosta kissa pöydälle ja puhukaa asiasta suoraan.”', translation: '“Ponha o assunto na mesa e conversem diretamente.”', next: 'kissa' },
          {
            text: '“Kämppis on sairas! Pitääkö sen mennä lääkäriin?”',
            translation: '“A colega está doente! Ela precisa ir ao médico?”',
            wrong: '“Vetää herne nenään” não tem nada a ver com uma ervilha de verdade no nariz: quer dizer ficar ofendido, emburrado. A colega da Veera ficou chateada porque a louça não foi lavada.',
          },
        ],
      },
      kissa: {
        emoji: '🐈',
        text: '“Nostaa kissa pöydälle, hah! Mistä sä oot oppinu tollasen?” Veera kysyy yllättyneenä. Linu kertoo, että hän luki sen kirjasta, jossa oli sata suomalaista sanontaa. Veera kirjoittaa kämppikselleen, että he voisivat illalla sopia yhdessä tiskivuoroista. Vastaus tulee heti: sydän ja peukku.',
        translation: '“Levantar o gato para a mesa, ha! Onde você aprendeu isso?”, pergunta a Veera, surpresa. O Linu conta que leu num livro com cem ditados finlandeses. A Veera escreve para a colega que à noite elas podiam combinar juntas os turnos da louça. A resposta vem na hora: um coração e um joinha.',
        choices: [
          { text: '“Mennään vielä Hupisaarille!”', translation: '“Vamos ainda às ilhas Hupisaaret!”', next: 'hupisaaret' },
          { text: '“Mä oon väsyny. Ajetaan kotiin.”', translation: '“Estou cansado. Vamos pedalar para casa.”', next: 'final_neutro' },
        ],
      },
      hupisaaret: {
        emoji: '🌳',
        text: 'Hupisaarten puistossa on siltoja, kanavia ja puroja, ja ihmiset makaavat nurmikolla auringossa. Veera ehdottaa, että he kävisivät vielä illalla karaokessa hänen kavereidensa kanssa. “Karaoke ei oo ihan mun heiniä”, Linu sanoo varovasti, “mutta voin tulla kuuntelemaan.” Veera nauraa: “Kyllä sä vielä laulat, katotaan vaan!”',
        translation: 'No parque das ilhas Hupisaaret há pontes, canais e riachos, e as pessoas deitam na grama ao sol. A Veera sugere que à noite eles ainda passem num karaokê com os amigos dela. “Karaokê não é muito a minha praia”, diz o Linu com cuidado, “mas posso ir para ouvir.” A Veera ri: “Você ainda vai cantar, é só esperar!”',
        choices: [{ text: '“Okei, mä tuun mukaan.”', translation: '“Tá bom, eu vou junto.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎤',
        text: 'Karaokebaarissa Linu istuu ensin nurkassa, mutta puolenyön aikaan hän laulaa jo vanhaa suomalaista iskelmää Veeran kämppiksen kanssa. Kukaan ei vedä hernettä nenään, vaikka hän laulaa väärin. Kotimatkalla he ajavat fillareilla valoisassa kesäyössä, jossa aurinko tuskin laskee. Linu ajattelee, että Oulu ei ole yhtään sellainen kuin hän odotti: se on paljon parempi.',
        translation: 'No bar de karaokê, o Linu primeiro fica num canto, mas lá pela meia-noite já está cantando um velho “iskelmä”, a canção popular finlandesa, com a colega de apê da Veera. Ninguém se ofende, mesmo ele cantando errado. Na volta, eles pedalam na noite clara de verão, em que o sol quase não se põe. O Linu pensa que Oulu não é nada do que ele esperava: é muito melhor.',
        ending: { tone: 'bom', title: 'Nada de boneco de neve', message: 'Você entendeu “maksaa maltaita”, “vetää herne nenään” e “nostaa kissa pöydälle” — e ainda terminou cantando no karaokê.' },
      },
      final_neutro: {
        emoji: '🛌',
        text: 'Linu ajaa asuntolaan ja nukahtaa heti. Seuraavana päivänä Veera lähettää kuvan Hupisaarilta ja karaokesta: kaikki näyttävät iloisilta. “Ens kerralla sä tuut mukaan, ei mitään selityksiä”, hän kirjoittaa. Linu vastaa, että ottaa lusikan kauniiseen käteen ja tulee.',
        translation: 'O Linu pedala até o alojamento e dorme na hora. No dia seguinte, a Veera manda uma foto das ilhas Hupisaaret e do karaokê: todos parecem felizes. “Da próxima vez você vem, sem desculpas”, ela escreve. O Linu responde que vai aceitar e ir.',
        ending: { tone: 'neutro', title: 'Cansado demais', message: 'Você entendeu as expressões, mas perdeu o parque e o karaokê. Fica para a próxima!' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'fi-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Kenen metsä?',
    emoji: '🫐',
    summary: 'Numa trilha no parque nacional de Nuuksio, o Linu assiste a um debate entre a guia e um proprietário de terras sobre o direito de todos à natureza — e precisa dar a própria opinião.',
    cultural_context:
      'Na Finlândia vale o “jokamiehenoikeus”, o direito de todos: qualquer pessoa pode andar pela natureza, colher frutinhas silvestres e cogumelos e acampar por pouco tempo, mesmo em terra alheia, desde que longe das casas e sem causar estragos; fazer fogueira, porém, exige permissão do dono. O parque nacional de Nuuksio, perto de Helsinque, fundado em 1994, é conhecido pelo esquilo-voador (liito-orava).',
    start: 'start',
    glossary: [
      ['jokamiehenoikeus', 'o direito de todos à natureza'],
      ['maanomistaja', 'proprietário de terras'],
      ['ensinnäkin… toiseksi…', 'em primeiro lugar… em segundo lugar…'],
      ['toisaalta', 'por outro lado'],
      ['siitä huolimatta', 'apesar disso'],
      ['näin ollen', 'sendo assim, portanto'],
      ['sen sijaan', 'em vez disso, em compensação'],
      ['avotuli / nuotio', 'fogo aberto / fogueira'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Nuuksion kansallispuistossa on syyskuinen aamu, ja Linu on mukana opastetulla retkellä. Opas Riikka kertoo, että puistossa asuu liito-orava, jota on kuitenkin hyvin vaikea nähdä, koska se liikkuu lähinnä öisin. Polun varrella on paljon mustikoita, ja muutama retkeläinen alkaa heti poimia niitä. Samaan aikaan metsäautotieltä kävelee heitä kohti vanhempi mies, jolla on kumisaappaat ja tiukka ilme.',
        translation: 'É uma manhã de setembro no parque nacional de Nuuksio, e o Linu está numa caminhada guiada. A guia Riikka conta que no parque vive o esquilo-voador, que no entanto é muito difícil de ver, porque se move principalmente à noite. Na beira da trilha há muitos mirtilos, e alguns participantes começam logo a colhê-los. Ao mesmo tempo, pela estradinha florestal vem na direção deles um homem mais velho, de galochas e cara fechada.',
        choices: [
          { text: 'Poimia muiden kanssa mustikoita.', translation: 'Colher mirtilos com os outros.', next: 'mies' },
          { text: 'Kysyä Riikalta, saako täällä poimia.', translation: 'Perguntar à Riikka se é permitido colher aqui.', next: 'oikeus' },
        ],
      },
      oikeus: {
        emoji: '📜',
        text: 'Riikka selittää, että jokamiehenoikeuden ansiosta marjoja ja sieniä saa poimia myös toisen maalta, eikä lupaa tarvitse kysyä. Sen sijaan puita ei saa kaataa, eikä nuotiota saa sytyttää ilman maanomistajan lupaa. “Oikeuteen liittyy siis myös velvollisuuksia”, hän tiivistää. Juuri silloin kumisaappainen mies pysähtyy ryhmän eteen.',
        translation: 'A Riikka explica que, graças ao direito de todos, é permitido colher frutinhas e cogumelos também em terra alheia, e não é preciso pedir licença. Em compensação, não se pode derrubar árvores nem acender fogueira sem permissão do proprietário. “Ou seja, o direito também traz deveres”, ela resume. Bem nessa hora, o homem de galochas para na frente do grupo.',
        choices: [{ text: 'Kuunnella, mitä mies sanoo.', translation: 'Escutar o que o homem diz.', next: 'mies' }],
      },
      mies: {
        emoji: '👨‍🌾',
        text: 'Mies esittäytyy Matiksi ja kertoo omistavansa metsän, joka alkaa puiston rajalta. “En vastusta jokamiehenoikeutta, päinvastoin”, hän sanoo. “Ensinnäkin olen itse poiminut marjoja naapureiden mailta koko ikäni. Toiseksi kävijöitä on kuitenkin nykyään niin paljon, että polut kuluvat, roskia jää metsään ja joku sytytti viime kesänä nuotion kallion päälle kesken metsäpalovaroituksen.”',
        translation: 'O homem se apresenta como Matti e conta que é dono da mata que começa na divisa do parque. “Não sou contra o direito de todos, pelo contrário”, ele diz. “Em primeiro lugar, eu mesmo colhi frutinhas nas terras dos vizinhos a vida inteira. Em segundo lugar, porém, hoje há tantos visitantes que as trilhas se desgastam, fica lixo no mato e alguém acendeu no verão passado uma fogueira em cima de uma rocha em pleno alerta de incêndio florestal.”',
        choices: [
          { text: '“Mitä te sitten ehdottaisitte?”', translation: '“E o que o senhor proporia, então?”', next: 'vaittely' },
          {
            text: '“Matti siis haluaa kieltää marjojen poimimisen.”',
            translation: '“Então o Matti quer proibir a colheita de frutinhas.”',
            wrong: 'O Matti disse o contrário: “En vastusta jokamiehenoikeutta, päinvastoin” — não é contra o direito de todos, pelo contrário. Com “ensinnäkin” ele conta que também colhe frutinhas; com “toiseksi… kuitenkin” ele apresenta o problema: o excesso de visitantes, o lixo e a fogueira irresponsável.',
          },
        ],
      },
      vaittely: {
        emoji: '⚖️',
        text: '“Mielestäni puistoon tarvittaisiin enemmän opasteita ja valvontaa, ja lisäksi suosituimmille reiteille voisi rajoittaa kävijämääriä”, Matti sanoo. Riikka on osittain samaa mieltä, mutta hän huomauttaa, että rajoitukset iskisivät ensimmäisenä niihin, joilla ei ole omaa mökkiä eikä autoa. “Toisaalta ymmärrän huolesi, mutta metsä on monelle kaupunkilaiselle ainoa paikka levätä”, hän sanoo. “Näin ollen parempi ratkaisu olisi mielestäni valistaa ihmisiä, ei sulkea polkuja.”',
        translation: '“Na minha opinião, o parque precisaria de mais placas e fiscalização, e além disso nas trilhas mais populares daria para limitar o número de visitantes”, diz o Matti. A Riikka concorda em parte, mas observa que as restrições atingiriam primeiro quem não tem chalé nem carro. “Por um lado, entendo a sua preocupação, mas a floresta é para muita gente da cidade o único lugar para descansar”, ela diz. “Sendo assim, na minha opinião a melhor solução seria educar as pessoas, não fechar trilhas.”',
        choices: [
          { text: 'Odottaa, mitä muut sanovat.', translation: 'Esperar o que os outros vão dizer.', next: 'linu' },
          {
            text: '“Riikka on siis kokonaan Matin kanssa samaa mieltä.”',
            translation: '“Então a Riikka concorda totalmente com o Matti.”',
            wrong: 'A Riikka está “osittain samaa mieltä” — concorda só em parte. Ela usa “toisaalta… mutta” para reconhecer a preocupação do Matti e depois discordar da solução dele: prefere educar as pessoas a limitar as trilhas.',
          },
        ],
      },
      linu: {
        emoji: '🐧',
        text: 'Yllättäen Riikka kääntyy Linun puoleen ja kysyy, mitä mieltä hän on vieraana ja ulkomaalaisena. Kaikki katsovat häntä, ja Matti nostaa kulmakarvojaan uteliaana. Linu miettii hetken ja muistaa, että hyvä perustelu tarvitsee väitteen, syyn ja esimerkin. Hän päättää sanoa mielipiteensä selkeästi, vaikka hänen äänensä vähän vapisee.',
        translation: 'De repente, a Riikka se vira para o Linu e pergunta o que ele acha, como visitante e estrangeiro. Todos olham para ele, e o Matti ergue as sobrancelhas, curioso. O Linu pensa um instante e lembra que um bom argumento precisa de uma tese, um motivo e um exemplo. Ele decide dizer sua opinião com clareza, mesmo com a voz tremendo um pouco.',
        choices: [
          {
            text: '“Mielestäni molemmat ovat oikeassa. Siksi ehdotan, että opasteita lisätään, mutta polkuja ei suljeta: esimerkiksi roskakorit ja nuotiopaikat ohjaisivat ihmisiä oikeisiin paikkoihin.”',
            translation: '“Acho que os dois têm razão. Por isso proponho que se ponham mais placas, mas sem fechar trilhas: por exemplo, lixeiras e áreas de fogueira levariam as pessoas aos lugares certos.”',
            next: 'kompromissi',
          },
          {
            text: '“En tiedä. Metsä on kaunis.”',
            translation: '“Não sei. A floresta é bonita.”',
            next: 'hiljaisuus',
          },
        ],
      },
      kompromissi: {
        emoji: '🤝',
        text: 'Hetken on hiljaista, ja sitten Matti nyökkää hitaasti. “Siitä huolimatta, että olet täällä vieraana, puhut järkeä”, hän sanoo. “Jos puistoon tulisi merkitty nuotiopaikka lähelle rajaani, ihmiset eivät ehkä tekisi tulia minun kallioilleni.” Riikka lupaa viedä ehdotuksen puiston henkilökunnalle, ja ryhmä jatkaa matkaa paljon rennommissa tunnelmissa.',
        translation: 'Por um momento fica tudo em silêncio, e então o Matti concorda devagar com a cabeça. “Apesar de você ser visitante aqui, fala com bom senso”, ele diz. “Se o parque tivesse uma área de fogueira marcada perto da minha divisa, talvez as pessoas não fizessem fogo nas minhas rochas.” A Riikka promete levar a proposta aos funcionários do parque, e o grupo segue o caminho num clima bem mais leve.',
        choices: [{ text: 'Jatkaa retkeä.', translation: 'Continuar a caminhada.', next: 'final_bom' }],
      },
      hiljaisuus: {
        emoji: '😶',
        text: 'Riikka hymyilee kohteliaasti, ja Matti kohauttaa olkapäitään. “Kaunis se on, mutta se ei ole argumentti”, hän sanoo kuivasti ja lähtee takaisin metsäautotielle. Keskustelu loppuu siihen, ja retki jatkuu hiljaisena. Linu harmittelee, ettei hän keksinyt perustelua ajoissa.',
        translation: 'A Riikka sorri educadamente, e o Matti dá de ombros. “Bonita ela é, mas isso não é argumento”, ele diz secamente, e volta para a estradinha florestal. A conversa termina ali, e a caminhada segue em silêncio. O Linu fica chateado por não ter pensado num argumento a tempo.',
        ending: { tone: 'neutro', title: 'Sem argumento', message: 'Você acompanhou o debate, mas faltou uma tese com motivo e exemplo. Conectores como “siksi” e “esimerkiksi” ajudam a montar a opinião.' },
      },
      final_bom: {
        emoji: '🐿️',
        text: 'Illan hämärtyessä Riikka vie ryhmän vanhan haavikon luo ja pyytää kaikkia olemaan aivan hiljaa. Hetken päästä harmaa pieni eläin liitää puusta toiseen kuin paperilennokki. “Liito-orava!” Linu kuiskaa, ja Riikka nyökkää hymyillen. Hän ajattelee, että metsä kuuluu kaikille juuri siksi, että kaikki pitävät siitä huolta.',
        translation: 'Quando a tarde escurece, a Riikka leva o grupo até um velho bosque de álamos e pede que todos fiquem em silêncio total. Pouco depois, um bichinho cinza plana de uma árvore a outra como um aviãozinho de papel. “Um esquilo-voador!”, cochicha o Linu, e a Riikka concorda sorrindo. Ele pensa que a floresta é de todos justamente porque todos cuidam dela.',
        ending: { tone: 'bom', title: 'A floresta de todos', message: 'Você acompanhou os conectores do debate e montou uma opinião com tese, motivo e exemplo — e ainda viu o raro esquilo-voador.' },
      },
    },
  },
  {
    id: 'fi-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Väittely Kuopiossa',
    emoji: '🎙️',
    summary: 'Num colégio de Kuopio, o Linu entra no clube de debate e precisa defender que as aulas comecem mais tarde — contra o afiado Eetu.',
    cultural_context:
      'Kuopio, à beira do lago Kallavesi, é a principal cidade da região de Savo, cujos moradores têm fama de falar com rodeios e humor. A cidade é conhecida pela torre de observação no morro de Puijo e pelo “kalakukko”, peixe miúdo e toucinho assados dentro de uma casca grossa de pão de centeio.',
    start: 'start',
    glossary: [
      ['väittely', 'debate'],
      ['väite / perustelu', 'tese / argumento, justificativa'],
      ['sitä paitsi', 'além do mais'],
      ['päinvastoin', 'pelo contrário'],
      ['toisin sanoen', 'em outras palavras'],
      ['tästä syystä', 'por esse motivo'],
      ['loppujen lopuksi', 'no fim das contas'],
      ['kalakukko', 'torta de peixe em pão de centeio, prato de Kuopio'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Linu on vaihto-oppilaana kuopiolaisessa lukiossa, ja hän on liittynyt koulun väittelykerhoon. Opettaja Sanna kertoo, että perjantain aihe on “Pitäisikö koulupäivän alkaa vasta kello kymmenen?”. Linun joukkue puolustaa väitettä, ja vastapuolella on Eetu, joka on voittanut kerhon kaikki väittelyt tänä syksynä. “Teillä on kolme päivää aikaa valmistautua”, Sanna sanoo, “joten käyttäkää ne hyvin.”',
        translation: 'O Linu está de intercâmbio num colégio de Kuopio e entrou no clube de debate da escola. A professora Sanna conta que o tema de sexta-feira é “O dia escolar deveria começar só às dez horas?”. O time do Linu defende a tese, e do outro lado está o Eetu, que ganhou todos os debates do clube neste outono. “Vocês têm três dias para se preparar”, diz a Sanna, “então usem-nos bem.”',
        choices: [
          { text: 'Etsiä tutkimustietoa kirjastosta.', translation: 'Procurar dados de pesquisa na biblioteca.', next: 'tutkimus' },
          { text: 'Kysyä luokkakavereiden mielipiteitä.', translation: 'Perguntar a opinião dos colegas de turma.', next: 'kysely' },
        ],
      },
      tutkimus: {
        emoji: '📚',
        text: 'Kirjastossa Linu lukee, että murrosiässä ihmisen vuorokausirytmi siirtyy myöhäisemmäksi. Toisin sanoen nuori ei yksinkertaisesti tule illalla väsyneeksi yhtä aikaisin kuin lapsi tai aikuinen. Tästä syystä aikainen herätys voi johtaa jatkuvaan univajeeseen, mikä puolestaan heikentää keskittymistä. Linu kirjoittaa vihkoonsa: väite, perustelu, esimerkki.',
        translation: 'Na biblioteca, o Linu lê que na adolescência o ritmo circadiano da pessoa se desloca para mais tarde. Em outras palavras, o jovem simplesmente não fica com sono à noite tão cedo quanto uma criança ou um adulto. Por esse motivo, acordar cedo pode levar a uma falta de sono constante, o que por sua vez prejudica a concentração. O Linu anota no caderno: tese, argumento, exemplo.',
        choices: [{ text: 'Mennä väittelyyn.', translation: 'Ir para o debate.', next: 'eetu' }],
      },
      kysely: {
        emoji: '🗳️',
        text: 'Linu kysyy kahdeltakymmeneltä oppilaalta, milloin he menevät nukkumaan ja miltä aamut tuntuvat. Suurin osa sanoo, että he eivät saa unta ennen puoltayötä, vaikka yrittäisivät. Toisaalta muutama kertoo, että he harrastavat urheilua iltaisin ja tarvitsevat siksi aikaisen koulupäivän. Linu päättää käyttää molempia vastauksia, koska hyvä väittelijä tuntee myös vastapuolen perustelut.',
        translation: 'O Linu pergunta a vinte alunos quando vão dormir e como se sentem de manhã. A maioria diz que não consegue pegar no sono antes da meia-noite, mesmo que tente. Por outro lado, alguns contam que praticam esporte à noite e por isso precisam de um dia escolar que comece cedo. O Linu decide usar as duas respostas, porque um bom debatedor também conhece os argumentos do outro lado.',
        choices: [{ text: 'Mennä väittelyyn.', translation: 'Ir para o debate.', next: 'eetu' }],
      },
      eetu: {
        emoji: '🗣️',
        text: 'Perjantaina Eetu aloittaa varmana. “Myöhäisempi aloitus kuulostaa mukavalta, mutta loppujen lopuksi se vain siirtäisi ongelman iltaan”, hän sanoo. “Koulupäivä loppuisi vasta viideltä, eikä harrastuksille jäisi aikaa. Sitä paitsi koulubussit kulkevat nykyisten aikataulujen mukaan, ja maaseudulta tulevat oppilaat joutuisivat odottamaan kaupungissa tuntikausia.”',
        translation: 'Na sexta, o Eetu começa confiante. “Começar mais tarde parece gostoso, mas no fim das contas só empurraria o problema para a noite”, ele diz. “O dia escolar só terminaria às cinco, e não sobraria tempo para as atividades. Além do mais, os ônibus escolares seguem os horários atuais, e os alunos que vêm do interior teriam que esperar horas na cidade.”',
        choices: [
          { text: 'Valmistautua vastaamaan.', translation: 'Preparar-se para responder.', next: 'vastaus' },
          {
            text: '“Eetu sanoo, että koulubusseja ei ole ollenkaan maaseudulla.”',
            translation: '“O Eetu diz que não existem ônibus escolares no interior.”',
            wrong: 'Com “sitä paitsi” (além do mais), o Eetu acrescenta outro argumento: os ônibus escolares SEGUEM os horários atuais (“nykyisten aikataulujen mukaan”). Se a aula começasse às dez, os alunos do interior chegariam cedo e teriam de esperar horas na cidade.',
          },
        ],
      },
      vastaus: {
        emoji: '🐧',
        text: 'Nyt on Linun vuoro, ja sali on hiljainen. Hän tietää, että hänen pitää ensin tunnustaa Eetun hyvä huomio ja sitten kumota se perusteluilla. Opettaja Sanna nyökkää hänelle rohkaisevasti takarivistä. Linu vetää syvään henkeä ja katsoo muistiinpanojaan.',
        translation: 'Agora é a vez do Linu, e a sala está em silêncio. Ele sabe que primeiro precisa reconhecer o bom ponto do Eetu e depois rebatê-lo com argumentos. A professora Sanna faz um sinal de encorajamento da última fileira. O Linu respira fundo e olha suas anotações.',
        choices: [
          {
            text: '“Eetu on oikeassa siinä, että bussiaikataulut ovat ongelma. Niitä voidaan kuitenkin muuttaa, kun taas nuorten vuorokausirytmiä ei voi. Päinvastoin kuin Eetu väittää, levänneet oppilaat jaksaisivat myös harrastaa paremmin.”',
            translation: '“O Eetu tem razão em que os horários dos ônibus são um problema. Mas eles podem ser mudados, ao passo que o ritmo circadiano dos jovens não pode. Ao contrário do que o Eetu afirma, alunos descansados também teriam mais disposição para suas atividades.”',
            next: 'tuomio',
          },
          {
            text: '“Eetu on väärässä, koska kaikki tietävät, että aamut ovat kamalia.”',
            translation: '“O Eetu está errado, porque todo mundo sabe que as manhãs são horríveis.”',
            next: 'heikko',
          },
        ],
      },
      tuomio: {
        emoji: '🏆',
        text: 'Tuomaristo neuvottelee pitkään, ja lopulta Sanna ilmoittaa, että voitto menee niukasti Linun joukkueelle. “Ratkaisevaa oli se, että Linu ei ohittanut vastapuolen perusteluja, vaan vastasi niihin suoraan”, hän perustelee. Eetu kättelee Linua ja myöntää, että bussiargumentti oli hänen vahvin korttinsa. “Ensi kerralla mä oon valmiimpi”, hän sanoo virnistäen.',
        translation: 'O júri discute por um bom tempo, e por fim a Sanna anuncia que a vitória vai, por pouco, para o time do Linu. “O decisivo foi que o Linu não ignorou os argumentos do outro lado, e sim respondeu a eles diretamente”, ela justifica. O Eetu aperta a mão do Linu e admite que o argumento dos ônibus era sua carta mais forte. “Da próxima vez vou estar mais preparado”, ele diz, sorrindo de lado.',
        choices: [{ text: 'Juhlia voittoa.', translation: 'Comemorar a vitória.', next: 'final_bom' }],
      },
      heikko: {
        emoji: '😬',
        text: 'Muutama oppilas nauraa, mutta tuomariston ilmeet pysyvät vakavina. Eetu nousee ja huomauttaa kohteliaasti, että “kaikki tietävät” ei ole perustelu vaan mielipide. Voitto menee hänen joukkueelleen selvästi. Sanna sanoo Linulle jälkeenpäin, että aihe oli hyvä, mutta ilman todisteita väite jää ilmaan.',
        translation: 'Alguns alunos riem, mas os jurados continuam sérios. O Eetu se levanta e observa educadamente que “todo mundo sabe” não é argumento, e sim opinião. A vitória vai com folga para o time dele. Depois, a Sanna diz ao Linu que o tema era bom, mas sem provas a tese fica solta no ar.',
        ending: { tone: 'neutro', title: 'Derrota com lição', message: 'Faltou um argumento de verdade. Reconhecer o ponto do outro e rebatê-lo com “kuitenkin” e “päinvastoin” teria virado o jogo.' },
      },
      final_bom: {
        emoji: '🐟',
        text: 'Illalla joukkue nousee Puijon torniin juhlimaan, ja Eetukin tulee mukaan. Ylhäältä näkyy Kallavesi, ja saaret näyttävät tummilta täpliltä kultaisessa vedessä. Eetun mummo on lähettänyt heille kalakukon, ja he syövät sitä ja väittelevät leikillään siitä, kumpi kukkoon kuuluu, muikku vai ahven. Linu ajattelee, että savolainen väittely on hauskinta, kun kukaan ei oikeasti halua voittaa.',
        translation: 'À noite, o time sobe à torre de Puijo para comemorar, e até o Eetu vai junto. Lá de cima se vê o Kallavesi, e as ilhas parecem manchas escuras na água dourada. A avó do Eetu mandou para eles um kalakukko, e eles comem e debatem de brincadeira qual peixe é o certo no kalakukko, o muikku ou a perca. O Linu pensa que debate à moda de Savo é mais divertido quando ninguém quer ganhar de verdade.',
        ending: { tone: 'bom', title: 'Vitória em Kuopio', message: 'Você acompanhou os conectores do Eetu e rebateu com “kuitenkin”, “kun taas” e “päinvastoin” — e ganhou o debate.' },
      },
    },
  },
  {
    id: 'fi-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Bussit ja mukulakivet',
    emoji: '🏘️',
    summary: 'Em Porvoo, o Linu cobre para o jornal local uma reunião de moradores: os ônibus de turismo devem ser proibidos na Cidade Velha?',
    cultural_context:
      'Porvoo, a leste de Helsinque, é uma das cidades mais antigas da Finlândia, com ruas de pedra, casas de madeira e os armazéns vermelhos na beira do rio. Na catedral de Porvoo, em 1809, reuniu-se a dieta em que o czar Alexandre I recebeu os estados da Finlândia; o poeta nacional J. L. Runeberg viveu na cidade, e a torta que leva seu nome se come em 5 de fevereiro.',
    start: 'start',
    glossary: [
      ['asukasilta', 'reunião de moradores'],
      ['mukulakivi', 'pedra de calçamento, paralelepípedo'],
      ['yhtäältä… toisaalta…', 'por um lado… por outro lado…'],
      ['vaikka', 'embora, mesmo que'],
      ['kun taas', 'ao passo que'],
      ['niin ollen', 'sendo assim'],
      ['puolueeton', 'imparcial'],
      ['ranta-aitta', 'armazém de madeira na beira do rio'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu tekee kesätöitä porvoolaisessa paikallislehdessä, ja päätoimittaja lähettää hänet illan asukasiltaan. Aiheena on ehdotus, jonka mukaan turistibussit kiellettäisiin Vanhan Porvoon kapeilla kaduilla. “Kirjoita juttu, jossa molemmat osapuolet saavat äänensä kuuluviin”, päätoimittaja sanoo. “Lukijat haluavat tietää, mistä riidellään, eivät sitä, mitä sinä ajattelet.”',
        translation: 'O Linu está num trabalho de verão num jornal local de Porvoo, e o editor-chefe o manda à reunião de moradores da noite. O tema é uma proposta segundo a qual os ônibus de turismo seriam proibidos nas ruas estreitas da Cidade Velha de Porvoo. “Escreva uma matéria em que os dois lados sejam ouvidos”, diz o editor-chefe. “Os leitores querem saber sobre o que é a briga, não o que você acha.”',
        choices: [
          { text: 'Kävellä vanhaankaupunkiin ennen kokousta.', translation: 'Caminhar pela Cidade Velha antes da reunião.', next: 'kavely' },
          { text: 'Mennä suoraan kokoukseen.', translation: 'Ir direto para a reunião.', next: 'kokous' },
        ],
      },
      kavely: {
        emoji: '🌉',
        text: 'Linu kävelee vanhan sillan yli, ja joen rannalla näkyvät punaiset ranta-aitat. Mukulakivikaduilla on paljon turisteja, ja yksi iso bussi yrittää kääntyä kapeassa risteyksessä. Talon portailla istuva vanha rouva huokaa: “Joka kesä sama juttu. Ikkunat tärisevät ja pakokaasu haisee.” Linu kirjoittaa lauseen muistiin ja jatkaa kohti kokousta.',
        translation: 'O Linu atravessa a ponte velha, e na beira do rio aparecem os armazéns vermelhos. Nas ruas de pedra há muitos turistas, e um ônibus enorme tenta virar num cruzamento estreito. Uma senhora sentada na escada de uma casa suspira: “Todo verão a mesma coisa. As janelas tremem e o cheiro de fumaça é horrível.” O Linu anota a frase e segue para a reunião.',
        choices: [{ text: 'Mennä kokoukseen.', translation: 'Ir para a reunião.', next: 'kokous' }],
      },
      kokous: {
        emoji: '🗣️',
        text: 'Kaupungintalon salissa ensimmäisenä puhuu Leif, joka asuu vanhassakaupungissa ja puhuu suomea ruotsalaisella korostuksella. “Yhtäältä ymmärrän, että matkailu tuo rahaa”, hän aloittaa. “Toisaalta raskaat bussit rikkovat mukulakiviä ja tärisyttävät satoja vuosia vanhoja puutaloja. Niin ollen ehdotan, että bussit pysäköisivät joen toiselle puolelle, ja turistit kävelisivät sillan yli.”',
        translation: 'No salão da prefeitura, o primeiro a falar é o Leif, que mora na Cidade Velha e fala finlandês com sotaque sueco. “Por um lado, entendo que o turismo traz dinheiro”, ele começa. “Por outro lado, os ônibus pesados quebram as pedras do calçamento e fazem tremer casas de madeira com centenas de anos. Sendo assim, proponho que os ônibus estacionem do outro lado do rio e os turistas atravessem a ponte a pé.”',
        choices: [
          { text: 'Kuunnella seuraavaa puhujaa.', translation: 'Ouvir o próximo orador.', next: 'kirsi' },
          {
            text: 'Kirjoittaa: “Leif haluaa kieltää turistit kokonaan.”',
            translation: 'Anotar: “O Leif quer proibir os turistas por completo.”',
            wrong: 'O Leif não quer proibir os turistas: ele reconhece (“yhtäältä”) que o turismo traz dinheiro e propõe só que os ÔNIBUS estacionem do outro lado do rio, com os turistas atravessando a ponte a pé. Uma matéria imparcial precisa reproduzir isso com precisão.',
          },
        ],
      },
      kirsi: {
        emoji: '🧁',
        text: 'Seuraavaksi puheenvuoron saa Kirsi, jolla on pieni kahvila joen rannassa. “Vaikka ymmärrän asukkaiden huolen, bussikielto olisi meille yrittäjille katastrofi”, hän sanoo. “Moni turisti on iäkäs, eikä jaksa kävellä mäkeä ylös sillalta. Kesällä ansaitsemme sen, millä selviämme talven yli, kun taas talvella kadut ovat lähes tyhjiä.” Salista kuuluu sekä taputuksia että mutinaa.',
        translation: 'Em seguida, a palavra vai para a Kirsi, que tem um pequeno café na beira do rio. “Embora eu entenda a preocupação dos moradores, proibir os ônibus seria uma catástrofe para nós, pequenos empresários”, ela diz. “Muitos turistas são idosos e não aguentam subir a ladeira desde a ponte. No verão ganhamos aquilo com que sobrevivemos ao inverno, ao passo que no inverno as ruas ficam quase vazias.” Da plateia vêm tanto aplausos quanto resmungos.',
        choices: [{ text: 'Mennä toimitukseen kirjoittamaan.', translation: 'Ir para a redação escrever.', next: 'kirjoitus' }],
      },
      kirjoitus: {
        emoji: '⌨️',
        text: 'Toimituksessa Linu istuu koneen ääreen, ja hänen edessään on kaksi muistiinpanosivua täynnä lainauksia. Hänen oma mielipiteensä on kallistumassa Leifin puolelle, sillä vanha rouva portailla jäi hänen mieleensä. Päätoimittaja kuitenkin muistutti, että jutun pitää olla puolueeton. Linu miettii, miten hän aloittaisi jutun.',
        translation: 'Na redação, o Linu senta diante do computador, com duas páginas de anotações cheias de citações. A opinião dele está pendendo para o lado do Leif, porque a senhora na escada ficou na sua cabeça. O editor-chefe, no entanto, lembrou que a matéria precisa ser imparcial. O Linu pensa em como vai começar o texto.',
        choices: [
          {
            text: '“Bussikielto jakaa porvoolaisia: asukkaat pelkäävät vanhojen talojen puolesta, kun taas yrittäjät pelkäävät menettävänsä kesän tulot.”',
            translation: '“A proibição dos ônibus divide Porvoo: os moradores temem pelas casas antigas, ao passo que os comerciantes temem perder a renda do verão.”',
            next: 'paatoimittaja',
          },
          {
            text: '“Ahneet yrittäjät tuhoavat Vanhan Porvoon.”',
            translation: '“Comerciantes gananciosos estão destruindo a Cidade Velha de Porvoo.”',
            next: 'huono',
          },
        ],
      },
      paatoimittaja: {
        emoji: '✅',
        text: 'Päätoimittaja lukee jutun ja nyökkää tyytyväisenä. “Hyvä. Kumpikin osapuoli tunnistaa itsensä, eikä kukaan voi syyttää meitä puolueellisuudesta”, hän sanoo. Hän ehdottaa vain, että loppuun lisättäisiin kaupungin virkamiehen kommentti siitä, milloin asiasta päätetään. Linu soittaa kaupungintalolle ja saa vastauksen: päätös tehdään syyskuussa.',
        translation: 'O editor-chefe lê a matéria e concorda, satisfeito. “Ótimo. Os dois lados se reconhecem, e ninguém pode nos acusar de parcialidade”, ele diz. Só sugere acrescentar no fim o comentário de um funcionário da prefeitura sobre quando o assunto será decidido. O Linu liga para a prefeitura e recebe a resposta: a decisão sai em setembro.',
        choices: [{ text: 'Lähettää juttu taittoon.', translation: 'Mandar a matéria para a diagramação.', next: 'final_bom' }],
      },
      huono: {
        emoji: '❌',
        text: 'Päätoimittaja lukee otsikon ja pudistaa päätään. “Tämä on mielipidekirjoitus, ei uutinen. Kirsi ei sanonut mitään ahneudesta, vaan puhui siitä, miten pienyrittäjä selviää talven yli”, hän sanoo. Juttu siirretään seuraavaan päivään, ja Linu joutuu kirjoittamaan sen kokonaan uudelleen. Illalla hän huomaa, että kilpaileva lehti ehti julkaista aiheesta ensin.',
        translation: 'O editor-chefe lê o título e balança a cabeça. “Isto é artigo de opinião, não notícia. A Kirsi não disse nada sobre ganância; falou de como um pequeno comerciante sobrevive ao inverno”, ele diz. A matéria é adiada para o dia seguinte, e o Linu precisa reescrevê-la inteira. À noite, ele vê que o jornal concorrente publicou sobre o assunto primeiro.',
        ending: { tone: 'neutro', title: 'Furo perdido', message: 'O texto tomou partido e deformou o que a Kirsi disse. Conectores como “kun taas” e “yhtäältä… toisaalta” ajudam a apresentar os dois lados.' },
      },
      final_bom: {
        emoji: '🐧',
        text: 'Seuraavana aamuna juttu on lehden etusivulla, ja Linun nimi on sen alla. Kun hän käy ostamassa Kirsin kahvilasta Runebergin tortun, Kirsi näyttää lehteä ja sanoo: “Sä kirjoitit reilusti, vaikka Leif puhui eilen tosi hyvin.” Myöhemmin Leif soittaa ja kiittää samasta asiasta. Linu ajattelee, että hyvä juttu on sellainen, josta kumpikaan osapuoli ei voi valittaa.',
        translation: 'Na manhã seguinte, a matéria está na primeira página, com o nome do Linu embaixo. Quando ele passa no café da Kirsi para comprar uma torta de Runeberg, ela mostra o jornal e diz: “Você escreveu com justiça, mesmo o Leif tendo falado muito bem ontem.” Mais tarde, o Leif liga e agradece pela mesma coisa. O Linu pensa que uma boa matéria é aquela da qual nenhum dos lados pode reclamar.',
        ending: { tone: 'bom', title: 'Primeira página', message: 'Você entendeu os argumentos dos dois lados e escreveu uma matéria imparcial com “kun taas” — e foi parar na capa.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'fi-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Mie, mää vai mä?',
    emoji: '🥧',
    summary: 'Na feira de Joensuu, entre pastéis carelianos, o Linu ouve três jeitos de dizer “eu”, uma saudação em carélio e as armadilhas entre finlandês e estoniano.',
    cultural_context:
      'Na Carélia do Norte, cuja capital é Joensuu, os dialetos orientais dizem “mie” e “sie” para “eu” e “você”, enquanto no oeste se ouve “mää” e “sää” e em Helsinque “mä” e “sä”. O carélio, parente próximo do finlandês, é reconhecido na Finlândia como língua minoritária desde 2009, e o estoniano, do outro lado do golfo, tem palavras que enganam: “hallitus” é “governo” em finlandês e “mofo” em estoniano.',
    start: 'start',
    glossary: [
      ['mie / sie', 'eu / você (dialetos do leste)'],
      ['mää / sää', 'eu / você (dialetos do oeste, como Turku e Tampere)'],
      ['karjalanpiirakka', 'pastel careliano de massa de centeio recheado de arroz'],
      ['munavoi', 'manteiga misturada com ovo cozido picado'],
      ['Terveh!', 'Olá! (em carélio)'],
      ['murre', 'dialeto'],
      ['sukukieli', 'língua aparentada'],
      ['väärä ystävä', 'falso amigo (palavra parecida com sentido diferente)'],
    ],
    nodes: {
      start: {
        emoji: '🧺',
        text: 'Joensuun torilla on lauantaiaamuna vilskettä, ja Linu seuraa ystäväänsä Kaisaa, joka opiskelee Itä-Suomen yliopistossa mutta on kotoisin Turusta. Pienen kojun takana seisoo iäkäs nainen, jonka edessä on pellillinen juuri paistettuja karjalanpiirakoita. “Mie oon leiponu nämä ite aamulla”, hän sanoo. “Ottaisitko sie yhen munavoin kanssa?”',
        translation: 'A feira de Joensuu ferve no sábado de manhã, e o Linu acompanha a amiga Kaisa, que estuda na Universidade da Finlândia Oriental mas é de Turku. Atrás de uma barraquinha está uma senhora com uma assadeira de pastéis carelianos recém-assados. “Eu mesma assei estes hoje de manhã”, ela diz. “Você vai querer um com manteiga de ovo?”',
        choices: [
          { text: '“Mielelläni! Kaksi, kiitos.”', translation: '“Com prazer! Dois, por favor.”', next: 'piirakka' },
          {
            text: '“Kuka nämä sitten leipoi, jos ette te?”',
            translation: '“Então quem assou estes, se não foi a senhora?”',
            wrong: 'A senhora disse “Mie oon leiponu nämä ite”: “mie” é o “minä” (eu) dos dialetos do leste, e “ite” é “itse” (mesma). Foi ELA mesma que assou os pastéis de manhã.',
          },
        ],
      },
      piirakka: {
        emoji: '🥧',
        text: 'Myyjä esittäytyy Anniksi ja kertoo tulleensa torille Ilomantsista, aivan itärajan tuntumasta. Kun Kaisa kiittää häntä ja sanoo “mää otan kans yhen”, Anni nauraa ja sanoo: “Sie oot länsisuomalainen, sen kuulee heti.” Hän selittää Linulle, että idässä sanotaan mie ja sie, lännessä mää ja sää ja Helsingissä mä ja sä. “Kaikki ne on suomea, mut jokainen kuulee, mistä toinen on kotoisin.”',
        translation: 'A vendedora se apresenta como Anni e conta que veio à feira de Ilomantsi, bem perto da fronteira leste. Quando a Kaisa agradece e diz “mää otan kans yhen” (eu também vou querer um), a Anni ri e diz: “Você é do oeste da Finlândia, dá para ouvir na hora.” Ela explica ao Linu que no leste se diz “mie” e “sie”, no oeste “mää” e “sää” e em Helsinque “mä” e “sä”. “Tudo isso é finlandês, mas cada um ouve de onde o outro é.”',
        choices: [
          { text: '“Entä kirjakielessä?”', translation: '“E na língua escrita?”', next: 'kirjakieli' },
          { text: '“Puhutteko te myös karjalaa?”', translation: '“A senhora também fala carélio?”', next: 'karjala' },
        ],
      },
      kirjakieli: {
        emoji: '📖',
        text: 'Kaisa vastaa, että kirjakielessä on vain minä ja sinä, ja niitä käytetään puheessa lähinnä juhlapuheissa ja uutisissa. “Jos sanot kaverille minä, kuulostat vähän runoilijalta tai robotilta”, hän sanoo virnistäen. Anni lisää, että hänen lapsuudessaan koulussa yritettiin kitkeä murteita, mutta nykyään niistä ollaan ylpeitä. Sitten hän kumartuu kojun alle ja nostaa esiin vanhan, kuluneen laulukirjan.',
        translation: 'A Kaisa responde que na língua escrita só existem “minä” e “sinä”, e que na fala eles aparecem sobretudo em discursos solenes e no noticiário. “Se você disser ‘minä’ para um amigo, vai soar um pouco como poeta ou como robô”, ela diz, sorrindo. A Anni acrescenta que na infância dela a escola tentava arrancar os dialetos, mas hoje as pessoas se orgulham deles. Então ela se abaixa debaixo da barraca e tira um velho livro de canções, todo gasto.',
        choices: [{ text: '“Mikä kirja tuo on?”', translation: '“Que livro é esse?”', next: 'karjala' }],
      },
      karjala: {
        emoji: '🪗',
        text: '“Miun äiti puhui karjalaa, ja tää oli hänen kirjansa”, Anni kertoo. Hän selittää, että karjala ei ole suomen murre vaan oma sukukielensä, jota puhutaan Suomessa ja Venäjän Karjalassa, ja että Suomi tunnusti sen vähemmistökieleksi vuonna 2009. “Karjalaksi tervehditään näin: Terveh!” hän sanoo. Linu toistaa sanan, ja Anni taputtaa häntä olalle kuin omaa lastenlastaan.',
        translation: '“Minha mãe falava carélio, e este era o livro dela”, conta a Anni. Ela explica que o carélio não é um dialeto do finlandês, e sim uma língua aparentada, falada na Finlândia e na Carélia russa, e que a Finlândia o reconheceu como língua minoritária em 2009. “Em carélio a gente cumprimenta assim: Terveh!”, ela diz. O Linu repete a palavra, e a Anni lhe dá um tapinha no ombro como se fosse um neto.',
        choices: [
          { text: '“Terveh! Kiitos, että opetitte.”', translation: '“Terveh! Obrigado por me ensinar.”', next: 'kadri' },
          {
            text: '“Karjala on siis vain vanhanaikainen tapa puhua suomea.”',
            translation: '“Então o carélio é só um jeito antiquado de falar finlandês.”',
            wrong: 'A Anni disse exatamente o contrário: “karjala ei ole suomen murre vaan oma sukukielensä” — o carélio NÃO é dialeto do finlandês, e sim uma língua própria, aparentada, reconhecida como língua minoritária.',
          },
        ],
      },
      kadri: {
        emoji: '🇪🇪',
        text: 'Samassa paikalle tulee Kaisan kurssikaveri Kadri, joka on vaihdossa Tartosta. Hän ostaa piirakan ja kertoo nauraen, että hänen ensimmäinen viikkonsa Suomessa oli täynnä väärinkäsityksiä. “Luin lehdestä, että Suomen hallitus kokoontuu, ja mietin, miksi homeesta kirjoitetaan etusivulla”, hän sanoo. “Viroksi hallitus tarkoittaa hometta.”',
        translation: 'Nesse momento chega a colega de curso da Kaisa, Kadri, que está de intercâmbio vinda de Tartu. Ela compra um pastel e conta, rindo, que a primeira semana dela na Finlândia foi cheia de mal-entendidos. “Li no jornal que o ‘hallitus’ da Finlândia ia se reunir e fiquei pensando por que estavam escrevendo sobre mofo na primeira página”, ela diz. “Em estoniano, ‘hallitus’ quer dizer mofo.”',
        choices: [
          { text: '“Onko muitakin tällaisia sanoja?”', translation: '“Existem mais palavras assim?”', next: 'raamat' },
          {
            text: '“Suomen hallituksessa on siis hometta?”',
            translation: '“Então tem mofo no governo finlandês?”',
            wrong: 'É um falso amigo: em finlandês “hallitus” é o governo; em estoniano, a mesma palavra quer dizer mofo. A Kadri riu justamente porque, no começo, leu a notícia com o sentido estoniano.',
          },
        ],
      },
      raamat: {
        emoji: '📚',
        text: '“Paljonkin”, Kadri sanoo. “Viroksi raamat on ihan tavallinen kirja, kun taas suomeksi raamattu on vain se yksi pyhä kirja.” Hän kertoo, että virolaiset ja suomalaiset ymmärtävät toisiaan osittain, mutta eivät ilman harjoittelua, ja että juuri samannäköiset sanat ovat vaarallisimpia. Anni nyökkää ja sanoo, että karjalan kanssa on samoin, vaikka se onkin suomea lähempänä. Kaisa ehdottaa, että he jatkaisivat keskustelua kahvilla.',
        translation: '“Um monte”, diz a Kadri. “Em estoniano, ‘raamat’ é um livro qualquer, ao passo que em finlandês ‘raamattu’ é só aquele livro sagrado, a Bíblia.” Ela conta que estonianos e finlandeses se entendem em parte, mas não sem prática, e que justamente as palavras parecidas são as mais perigosas. A Anni concorda e diz que com o carélio é igual, embora ele seja mais próximo do finlandês. A Kaisa sugere continuar a conversa tomando um café.',
        choices: [
          { text: '“Hyvä idea! Anni, tuletteko mukaan?”', translation: '“Boa ideia! Anni, a senhora vem junto?”', next: 'final_bom' },
          { text: '“Mun täytyy valitettavasti lähteä.”', translation: '“Infelizmente eu preciso ir.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Anni sulkee kojunsa ja tulee mukaan torikahvilaan, jossa kuuluu yhtä aikaa suomea, sen murteita ja kahta sen sukukieltä. Kadri opettaa virolaisia sanoja, Anni karjalaisia ja Kaisa turkulaisia, ja Linu kirjoittaa kaiken vihkoonsa kolmeen sarakkeeseen. Lähtiessään Anni antaa hänelle kaksi piirakkaa evääksi. “Terveh, poika, tule toistekin!” hän huikkaa.',
        translation: 'A Anni fecha a barraca e vai junto ao café da feira, onde se ouvem ao mesmo tempo o finlandês, seus dialetos e duas línguas aparentadas. A Kadri ensina palavras estonianas, a Anni carelianas e a Kaisa de Turku, e o Linu anota tudo no caderno em três colunas. Na saída, a Anni lhe dá dois pastéis para a viagem. “Terveh, rapaz, volte outra vez!”, ela grita.',
        ending: { tone: 'bom', title: 'Três jeitos de dizer “eu”', message: 'Você distinguiu “mie”, “mää” e “mä”, entendeu que o carélio é língua própria e escapou do falso amigo “hallitus”.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Linu kiittää ja lähtee bussille piirakka kädessään. Matkalla hän yrittää muistaa kaikki uudet sanat, mutta ne sekoittuvat päässä: oliko raamat kirja vai Raamattu, ja kumpi sanoi sie? Hän päättää palata torille seuraavana lauantaina. Anni ei silloin kuitenkaan ole paikalla, sillä hän käy torilla vain kerran kuussa.',
        translation: 'O Linu agradece e sai para pegar o ônibus com o pastel na mão. No caminho tenta lembrar todas as palavras novas, mas elas se misturam na cabeça: “raamat” era livro ou Bíblia, e quem é que dizia “sie”? Ele decide voltar à feira no sábado seguinte. Mas a Anni não está lá, porque só vem à feira uma vez por mês.',
        ending: { tone: 'neutro', title: 'Palavras embaralhadas', message: 'Você entendeu a conversa, mas saiu cedo e as diferenças entre dialetos e línguas irmãs ficaram meio misturadas.' },
      },
    },
  },
  {
    id: 'fi-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Hej vai moi?',
    emoji: '⛴️',
    summary: 'De balsa para as ilhas Åland, o Linu descobre que na Finlândia se fala sueco — e que em Mariehamn o seu finlandês nem sempre é a língua certa.',
    cultural_context:
      'A Finlândia tem duas línguas oficiais, finlandês e sueco, e cerca de 5% da população tem o sueco como língua materna. O arquipélago de Åland (Ahvenanmaa em finlandês) pertence à Finlândia, mas é autônomo, desmilitarizado e oficialmente só de língua sueca desde uma decisão da Liga das Nações de 1921; em Mariehamn fica o veleiro-museu “Pommern”, de quatro mastros.',
    start: 'start',
    glossary: [
      ['Ahvenanmaa / Maarianhamina', 'Åland / Mariehamn (nomes finlandeses)'],
      ['suomenruotsalainen', 'finlandês de língua sueca'],
      ['kaksikielinen', 'bilíngue'],
      ['itsehallinto', 'autonomia'],
      ['demilitarisoitu', 'desmilitarizado'],
      ['äidinkieli', 'língua materna'],
      ['hej / tack', 'oi / obrigado (em sueco)'],
      ['luumukiisseli', 'creme de ameixa-preta'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Turusta lähtevällä lautalla Linu istuu ikkunan ääressä ja katselee, kuinka saaristo liukuu ohi: tuhansia pieniä kallioisia saaria, joilla on punaisia mökkejä. Hänen viereensä istuu mies, joka puhuu puhelimessa ruotsia ja lopettaa puhelun sanomalla “hej hej”. Kun hän huomaa Linun katseen, hän sanoo suomeksi: “Anteeksi, olin äänekäs. Olen Johan, Helsingistä.” Linu hämmästyy, sillä mies puhuu suomea täysin ilman korostusta.',
        translation: 'Na balsa que sai de Turku, o Linu senta à janela e olha o arquipélago deslizar: milhares de ilhotas rochosas com chalés vermelhos. Ao lado dele senta um homem que fala sueco ao telefone e encerra a ligação dizendo “hej hej”. Quando nota o olhar do Linu, ele diz em finlandês: “Desculpe, falei alto. Sou o Johan, de Helsinque.” O Linu se espanta, porque o homem fala finlandês sem sotaque nenhum.',
        choices: [
          { text: '“Oletko ruotsalainen?”', translation: '“Você é sueco?”', next: 'johan' },
          { text: '“Puhut kahta kieltä yhtä hyvin!”', translation: '“Você fala duas línguas igualmente bem!”', next: 'johan' },
        ],
      },
      johan: {
        emoji: '🗣️',
        text: 'Johan hymyilee ja selittää, että hän on suomenruotsalainen: hänen äidinkielensä on ruotsi, mutta hän on yhtä lailla suomalainen kuin kuka tahansa muu. “Suomi on kaksikielinen maa, ja meitä ruotsinkielisiä on noin viisi prosenttia”, hän kertoo. “Useimmat meistä asuvat rannikolla, Pohjanmaalla, Uudellamaalla ja Turun seudulla, ja suomenruotsi kuulostaa aika erilaiselta kuin Ruotsin ruotsi.” Hän lisää, että Ahvenanmaalla tilanne on kuitenkin vielä toinen.',
        translation: 'O Johan sorri e explica que é um finlandês de língua sueca: a língua materna dele é o sueco, mas ele é tão finlandês quanto qualquer outro. “A Finlândia é um país bilíngue, e nós, os que falam sueco, somos uns cinco por cento”, ele conta. “A maioria mora no litoral, na Ostrobótnia, em Uusimaa e na região de Turku, e o sueco da Finlândia soa bem diferente do sueco da Suécia.” Ele acrescenta que em Åland, porém, a situação é outra ainda.',
        choices: [
          { text: '“Miten niin toinen?”', translation: '“Como assim, outra?”', next: 'ahvenanmaa' },
          {
            text: '“Johan on siis Ruotsin kansalainen, joka asuu Helsingissä.”',
            translation: '“Então o Johan é cidadão sueco que mora em Helsinque.”',
            wrong: 'O Johan é “suomenruotsalainen”: finlandês cuja língua materna é o sueco. Ele disse que é “yhtä lailla suomalainen kuin kuka tahansa muu” — tão finlandês quanto qualquer outro. Língua materna e nacionalidade são coisas diferentes.',
          },
        ],
      },
      ahvenanmaa: {
        emoji: '🏝️',
        text: '“Ahvenanmaa kuuluu Suomeen, mutta sillä on laaja itsehallinto, oma lippu ja omat postimerkit”, Johan selittää. “Kansainliitto päätti vuonna 1921, että saaret jäävät Suomelle, mutta ne ovat demilitarisoituja ja virallisesti ainoastaan ruotsinkielisiä.” Hän naurahtaa ja sanoo, että Maarianhaminassa suomella pärjää kyllä usein, mutta kaikki eivät osaa sitä, eivätkä kaikki halua käyttää sitä. “Kannattaa aloittaa ruotsiksi tai edes englanniksi, se on kohteliasta.”',
        translation: '“Åland pertence à Finlândia, mas tem ampla autonomia, bandeira própria e selos próprios”, explica o Johan. “A Liga das Nações decidiu em 1921 que as ilhas ficariam com a Finlândia, mas elas são desmilitarizadas e oficialmente só de língua sueca.” Ele dá uma risadinha e diz que em Mariehamn muitas vezes dá para se virar em finlandês, mas nem todos sabem, e nem todos querem usá-lo. “Vale a pena começar em sueco, ou pelo menos em inglês; é educado.”',
        choices: [
          { text: 'Opetella muutama ruotsin sana ennen satamaa.', translation: 'Aprender umas palavras em sueco antes do porto.', next: 'kahvila_hyva' },
          { text: 'Ajatella, että suomi riittää kyllä.', translation: 'Achar que o finlandês basta.', next: 'kahvila_huono' },
        ],
      },
      kahvila_hyva: {
        emoji: '🥞',
        text: 'Maarianhaminan satamassa Linu astuu pieneen kahvilaan ja sanoo rohkeasti “hej”, niin kuin Johan neuvoi. Tiskin takana oleva nuori nainen, Elin, vastaa ruotsiksi, ja kun hän huomaa Linun hämmennyksen, hän vaihtaa sujuvasti englantiin. Linu tilaa ahvenanmaalaista pannukakkua, jonka päällä on luumukiisseliä ja kermavaahtoa, ja kiittää sanomalla “tack”. Elin hymyilee leveästi ja kysyy, mistä päin maailmaa hän on tullut.',
        translation: 'No porto de Mariehamn, o Linu entra num cafezinho e diz com coragem “hej”, como o Johan aconselhou. A moça atrás do balcão, Elin, responde em sueco e, quando percebe a confusão do Linu, passa com naturalidade para o inglês. O Linu pede a panqueca de Åland, coberta de creme de ameixa-preta e chantili, e agradece dizendo “tack”. A Elin abre um sorriso largo e pergunta de que parte do mundo ele veio.',
        choices: [{ text: 'Kertoa matkastaan ja kysyä Elinin kielistä.', translation: 'Contar da viagem e perguntar sobre as línguas da Elin.', next: 'elin' }],
      },
      kahvila_huono: {
        emoji: '😅',
        text: 'Maarianhaminan satamassa Linu astuu pieneen kahvilaan ja sanoo reippaasti: “Moi! Saisinko kahvin ja pullan?” Tiskin takana oleva nuori nainen, Elin, katsoo häntä hetken ja vastaa ruotsiksi jotain, mitä Linu ei ymmärrä. Lopulta hän sanoo englanniksi, että hän osaa suomea vain vähän, koska koulussa se oli hänelle vieras kieli. Linu punastuu ja ymmärtää, mitä Johan tarkoitti.',
        translation: 'No porto de Mariehamn, o Linu entra num cafezinho e diz, animado: “Oi! Pode me ver um café e um pão doce?” A moça atrás do balcão, Elin, olha para ele um instante e responde em sueco algo que o Linu não entende. Por fim ela diz em inglês que sabe pouco finlandês, porque na escola era para ela uma língua estrangeira. O Linu fica vermelho e entende o que o Johan quis dizer.',
        choices: [
          { text: 'Pyytää anteeksi ja jatkaa englanniksi.', translation: 'Pedir desculpas e continuar em inglês.', next: 'elin' },
          {
            text: '“Elin on siis tänään vain huonolla tuulella.”',
            translation: '“Então a Elin só está de mau humor hoje.”',
            wrong: 'A Elin não está de mau humor: em Åland a única língua oficial é o sueco, e ela explicou que o finlandês foi para ela uma língua estrangeira na escola (“vieras kieli”). Por isso o Johan aconselhou começar em sueco ou em inglês.',
          },
        ],
      },
      elin: {
        emoji: '⚓',
        text: 'Elin kertoo, että Ahvenanmaalla lapset opiskelevat koulussa ruotsia äidinkielenään ja englantia ensimmäisenä vieraana kielenä, ja suomi on monelle valinnainen. “Mannersuomessa taas ruotsinkieliset opiskelevat suomea ja suomenkieliset ruotsia, ja siitä väitellään jatkuvasti”, hän sanoo. Hän osoittaa ikkunasta satamaan, jossa kohoaa vanhan nelimastoisen purjelaivan Pommernin masto. “Se kertoo, mistä täällä ennen elettiin: merestä.”',
        translation: 'A Elin conta que em Åland as crianças estudam na escola o sueco como língua materna e o inglês como primeira língua estrangeira, e o finlandês é optativo para muitos. “No continente, já os que falam sueco estudam finlandês e os que falam finlandês estudam sueco, e isso gera debate o tempo todo”, ela diz. Ela aponta pela janela para o porto, onde se ergue o mastro do velho veleiro de quatro mastros Pommern. “Ele conta do que se vivia aqui antigamente: do mar.”',
        choices: [
          { text: 'Mennä katsomaan Pommernia.', translation: 'Ir ver o Pommern.', next: 'final_bom' },
          { text: 'Palata lautalle ajoissa.', translation: 'Voltar para a balsa a tempo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '⛵',
        text: 'Pommernin kannella Linu kuuntelee opasta, joka puhuu vuorotellen ruotsia, suomea ja englantia, eikä kukaan ryhmässä ihmettele sitä. Linu ajattelee, kuinka monikerroksinen Suomi onkin: sama maa, kaksi virallista kieltä ja saaret, joilla toinen niistä on ainoa. Illalla hän lähettää Johanille viestin: “Tack för tipset!” Johan vastaa suomeksi: “Ole hyvä, ja tervetuloa kaksikieliseen Suomeen.”',
        translation: 'No convés do Pommern, o Linu ouve o guia, que fala alternando sueco, finlandês e inglês, e ninguém no grupo estranha. O Linu pensa em quantas camadas a Finlândia tem: o mesmo país, duas línguas oficiais e ilhas onde só uma delas vale. À noite ele manda uma mensagem ao Johan: “Tack för tipset!” (Valeu pela dica!) O Johan responde em finlandês: “De nada, e bem-vindo à Finlândia bilíngue.”',
        ending: { tone: 'bom', title: 'Duas línguas, um país', message: 'Você entendeu o que é um “suomenruotsalainen”, por que Åland fala sueco e como entrar numa conversa com educação.' },
      },
      final_neutro: {
        emoji: '🌊',
        text: 'Linu kiittää Eliniä ja kiirehtii takaisin satamaan, mutta paluulautta lähtee vasta tunnin päästä. Hän istuu laiturilla ja katselee Pommernia kaukaa, harmitellen, ettei mennyt sisään. Lautalla hän etsii Johania, mutta tämä on jäänyt saarille viikoksi. Linu päättää palata kesällä, ja silloin hän osaa jo ainakin kymmenen ruotsin sanaa.',
        translation: 'O Linu agradece à Elin e corre de volta ao porto, mas a balsa de volta só sai dali a uma hora. Ele senta no cais e olha o Pommern de longe, chateado por não ter entrado. Na balsa, procura o Johan, mas ele ficou nas ilhas por uma semana. O Linu decide voltar no verão, e aí já vai saber pelo menos dez palavras em sueco.',
        ending: { tone: 'neutro', title: 'O navio visto de longe', message: 'Você entendeu a situação das línguas em Åland, mas voltou cedo demais e ficou sem conhecer o Pommern.' },
      },
    },
  },
  {
    id: 'fi-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Kolme saamen kieltä',
    emoji: '🦌',
    summary: 'Em Inari, na Lapônia, a guia Elle mostra ao Linu que na Finlândia se falam três línguas sámi — e que uma palavra errada pode ferir.',
    cultural_context:
      'Os sámi são o único povo indígena da União Europeia; na Finlândia se falam três línguas sámi: o sámi setentrional, o sámi de Inari e o sámi skolt. Em Inari ficam o museu Siida e o centro cultural Sajos, sede do Parlamento Sámi da Finlândia, e o sámi de Inari, que quase desapareceu, foi revitalizado com os “ninhos de língua” (kielipesä) para crianças pequenas.',
    start: 'start',
    glossary: [
      ['saamelainen', 'sámi (pessoa ou coisa do povo sámi)'],
      ['lappalainen', 'morador da Lapônia; como nome para os sámi, é antiquado e pode ofender'],
      ['pohjoissaame / inarinsaame / koltansaame', 'sámi setentrional / de Inari / skolt'],
      ['kielipesä', 'ninho de língua, creche onde só se fala a língua ameaçada'],
      ['alkuperäiskansa', 'povo indígena'],
      ['joiku', 'canto tradicional sámi'],
      ['Bures!', 'Olá! (em sámi setentrional)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Inarissa on kirkas, pakkasinen aamu, ja Linu astuu Siida-museon lämpimään aulaan. Opas Elle tervehtii ryhmää ensin saameksi, “Bures!”, ja sitten suomeksi. Yksi turisteista, keski-ikäinen mies etelästä, kysyy heti innostuneena: “Oletko sinä siis oikea lappalainen?” Elle hymyilee, mutta Linu huomaa, että hymy on hieman kireä.',
        translation: 'Em Inari faz uma manhã clara e gelada, e o Linu entra no saguão quentinho do museu Siida. A guia Elle cumprimenta o grupo primeiro em sámi, “Bures!”, e depois em finlandês. Um dos turistas, um homem de meia-idade do sul, pergunta logo, empolgado: “Então você é uma lappalainen de verdade?” A Elle sorri, mas o Linu percebe que o sorriso está um pouco tenso.',
        choices: [
          { text: 'Kuunnella, mitä Elle vastaa.', translation: 'Ouvir o que a Elle responde.', next: 'sana' },
          { text: 'Kysyä hiljaa, mikä kysymyksessä oli vialla.', translation: 'Perguntar baixinho o que havia de errado na pergunta.', next: 'sana' },
        ],
      },
      sana: {
        emoji: '💬',
        text: '“Olen saamelainen”, Elle vastaa rauhallisesti. “Lappalainen tarkoittaa nykyään Lapin asukasta, ja moni Lapissa asuva on suomalainen, ei saamelainen. Saamelaisista sanaa on käytetty vanhastaan, mutta monen korvissa se kuulostaa vanhanaikaiselta ja jopa loukkaavalta.” Mies pyytää anteeksi, ja Elle sanoo ystävällisesti, ettei kukaan voi tietää kaikkea etukäteen. Sitten hän jatkaa kierrosta.',
        translation: '“Eu sou sámi”, responde a Elle com calma. “Lappalainen hoje quer dizer morador da Lapônia, e muita gente que mora na Lapônia é finlandesa, não sámi. A palavra foi usada para os sámi antigamente, mas para muitos ela soa antiquada e até ofensiva.” O homem pede desculpas, e a Elle diz com gentileza que ninguém pode saber tudo de antemão. Depois, ela continua a visita.',
        choices: [
          { text: 'Seurata Elleä näyttelyyn.', translation: 'Seguir a Elle até a exposição.', next: 'kielet' },
          {
            text: '“Kaikki Lapissa asuvat ovat siis saamelaisia.”',
            translation: '“Então todos que moram na Lapônia são sámi.”',
            wrong: 'A Elle disse o contrário: “moni Lapissa asuva on suomalainen, ei saamelainen” — muitos moradores da Lapônia são finlandeses, não sámi. Por isso “lappalainen” (morador da Lapônia) e “saamelainen” (sámi) não são a mesma coisa.',
          },
        ],
      },
      kielet: {
        emoji: '🗺️',
        text: 'Näyttelyssä on kartta, johon on merkitty saamelaisten asuinalue neljän valtion alueella: Norjassa, Ruotsissa, Suomessa ja Venäjällä. Elle kertoo, että Suomessa puhutaan kolmea saamen kieltä, pohjoissaamea, inarinsaamea ja koltansaamea, ja että ne eroavat toisistaan niin paljon, etteivät puhujat aina ymmärrä toisiaan. “Ne eivät siis ole saman kielen murteita, vaan eri kieliä, samalla tavalla kuin suomi ja viro”, hän painottaa. Hänen oma isoäitinsä puhuu inarinsaamea, jota puhutaan vain täällä Inarinjärven ympärillä.',
        translation: 'Na exposição há um mapa com a área onde vivem os sámi, no território de quatro países: Noruega, Suécia, Finlândia e Rússia. A Elle conta que na Finlândia se falam três línguas sámi, o setentrional, o de Inari e o skolt, e que elas diferem tanto entre si que os falantes nem sempre se entendem. “Então elas não são dialetos da mesma língua, e sim línguas diferentes, assim como o finlandês e o estoniano”, ela enfatiza. A avó dela fala o sámi de Inari, que só se fala aqui, em volta do lago Inari.',
        choices: [
          { text: '“Kuinka moni puhuu inarinsaamea?”', translation: '“Quantas pessoas falam o sámi de Inari?”', next: 'kielipesa' },
          {
            text: '“Kolme saamen murretta, joita kaikki saamelaiset ymmärtävät.”',
            translation: '“Três dialetos sámi, que todos os sámi entendem.”',
            wrong: 'A Elle frisou que são três LÍNGUAS diferentes, não dialetos (“eivät saman kielen murteita, vaan eri kieliä”), e que os falantes nem sempre se entendem entre si — como o finlandês e o estoniano.',
          },
        ],
      },
      kielipesa: {
        emoji: '🧒',
        text: 'Elle kertoo, että inarinsaamen puhujia on vain muutamia satoja ja että kieli oli jo lähellä kuolla, kun lapset alkoivat puhua kotona vain suomea. “Sitten perustettiin kielipesä: päiväkoti, jossa aikuiset puhuvat lapsille pelkästään inarinsaamea”, hän selittää. “Nyt on taas lapsia, jotka ajattelevat inarinsaameksi, ja jotkut heistä opettavat sitä jo omille vanhemmilleen.” Hänen äänessään kuuluu ylpeys.',
        translation: 'A Elle conta que o sámi de Inari tem apenas algumas centenas de falantes e que a língua esteve perto de morrer quando as crianças passaram a falar só finlandês em casa. “Aí foi criado o ninho de língua: uma creche onde os adultos falam com as crianças só em sámi de Inari”, ela explica. “Agora há de novo crianças que pensam em sámi de Inari, e algumas delas já ensinam a língua aos próprios pais.” Na voz dela se ouve orgulho.',
        choices: [
          { text: 'Kysyä joiusta.', translation: 'Perguntar sobre o joik.', next: 'joiku' },
          { text: 'Kiittää kierroksesta ja lähteä.', translation: 'Agradecer pela visita e ir embora.', next: 'final_neutro' },
        ],
      },
      joiku: {
        emoji: '🎶',
        text: 'Elle kertoo, että joiku on saamelaisten perinteinen laulutapa ja että sillä ei niinkään lauleta jostakin, vaan joiataan joku tai jokin: ihminen, paikka tai eläin. “Kun joikaan isoäitiäni, en kuvaile häntä, vaan yritän tehdä hänet läsnä olevaksi”, hän sanoo. Hän joikaa hiljaa muutaman säkeen, ja aulaan laskeutuu hiljaisuus. Etelästä tullut mies pyyhkii silmiään eikä sano mitään.',
        translation: 'A Elle conta que o joik é o jeito tradicional de cantar dos sámi e que com ele não se canta tanto SOBRE algo, e sim se “joika” alguém ou algo: uma pessoa, um lugar ou um animal. “Quando eu faço o joik da minha avó, não a descrevo; tento torná-la presente”, ela diz. Ela canta baixinho alguns versos, e o saguão fica em silêncio. O homem do sul enxuga os olhos e não diz nada.',
        choices: [{ text: 'Mennä Ellen kanssa Sajokseen.', translation: 'Ir com a Elle até o Sajos.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Iltapäivällä Elle vie Linun Sajokseen, kulttuurikeskukseen, jossa kokoontuu Saamelaiskäräjät, saamelaisten oma edustuselin. Aulassa on lapsia kielipesästä, ja yksi heistä tervehtii Linua inarinsaameksi, ja Elle kääntää hymyillen. Linu kirjoittaa vihkoonsa: saamelainen, ei lappalainen; kolme kieltä, ei kolme murretta. Hän ajattelee, että sanojen valinta on myös kunnioituksen valinta.',
        translation: 'À tarde, a Elle leva o Linu ao Sajos, o centro cultural onde se reúne o Saamelaiskäräjät, o parlamento próprio dos sámi. No saguão há crianças do ninho de língua, e uma delas cumprimenta o Linu em sámi de Inari, e a Elle traduz sorrindo. O Linu anota no caderno: “saamelainen”, não “lappalainen”; três línguas, não três dialetos. Ele pensa que escolher palavras também é escolher respeito.',
        ending: { tone: 'bom', title: 'Palavras com respeito', message: 'Você entendeu a diferença entre “saamelainen” e “lappalainen”, as três línguas sámi e o trabalho dos ninhos de língua.' },
      },
      final_neutro: {
        emoji: '❄️',
        text: 'Linu kiittää Elleä ja lähtee ulos pakkaseen katsomaan jäätynyttä Inarinjärveä. Illalla hän lukee, että museossa oli ollut joikuesitys vain vähän hänen lähtönsä jälkeen. Hän on tyytyväinen siihen, mitä oppi, mutta tuntee jääneensä jostakin tärkeästä paitsi. Seuraavana talvena hän aikoo palata helmikuussa, kansallispäivän aikaan.',
        translation: 'O Linu agradece à Elle e sai para o frio para ver o lago Inari congelado. À noite, lê que no museu houve uma apresentação de joik logo depois que ele saiu. Está contente com o que aprendeu, mas sente que perdeu algo importante. No inverno seguinte, pretende voltar em fevereiro, na época do dia nacional sámi.',
        ending: { tone: 'neutro', title: 'O joik que ficou para trás', message: 'Você entendeu as nuances das palavras e das línguas sámi, mas saiu antes de ouvir o joik.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'fi-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Turun palo 1827',
    emoji: '🔥',
    summary: 'Estagiando num museu de Turku, o Linu precisa escrever o texto de uma exposição sobre o grande incêndio de 1827 — no estilo acadêmico, cheio de nominalizações.',
    cultural_context:
      'Em setembro de 1827, um incêndio destruiu a maior parte de Turku, então a maior cidade da Finlândia; é considerado o maior incêndio urbano da história nórdica. No ano seguinte, a Academia Real de Turku mudou-se para Helsinque, que já era capital desde 1812, e o bairro de Luostarinmäki, que escapou do fogo, é hoje um museu a céu aberto de artesanato.',
    start: 'start',
    glossary: [
      ['jälleenrakennus', 'reconstrução'],
      ['-minen / -us', 'sufixos que transformam verbos em substantivos (nominalização)'],
      ['asemakaava', 'plano urbanístico'],
      ['tuhoutua', 'ser destruído'],
      ['siirtyminen', 'transferência, mudança'],
      ['lähde', 'fonte (de informação)'],
      ['aikalainen', 'contemporâneo (pessoa da mesma época)'],
      ['näyttelyteksti', 'texto de exposição'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'Linu on harjoittelijana Luostarinmäen käsityöläismuseossa, jonka puutalot ovat ainoa kokonainen kaupunginosa, joka säästyi Turun palosta vuonna 1827. Hänen ohjaajansa, tutkija Heidi, antaa hänelle tehtävän: kirjoittaa uuden näyttelyn johdantoteksti palosta ja sen seurauksista. “Muista, että näyttelyteksti on asiatyyliä, ei tarinankerrontaa”, Heidi sanoo. “Tiivis, täsmällinen ja lähteisiin perustuva.”',
        translation: 'O Linu é estagiário no museu de artesanato de Luostarinmäki, cujas casas de madeira formam o único bairro inteiro que escapou do incêndio de Turku em 1827. A orientadora dele, a pesquisadora Heidi, lhe dá uma tarefa: escrever o texto de introdução da nova exposição sobre o incêndio e suas consequências. “Lembre que texto de exposição é estilo informativo, não contação de histórias”, diz a Heidi. “Conciso, preciso e baseado em fontes.”',
        choices: [
          { text: 'Lukea ensin arkiston lähteet.', translation: 'Ler primeiro as fontes do arquivo.', next: 'arkisto' },
          { text: 'Kirjoittaa heti ensimmäinen luonnos.', translation: 'Escrever já um primeiro rascunho.', next: 'luonnos' },
        ],
      },
      arkisto: {
        emoji: '📜',
        text: 'Museon arkistossa Linu lukee aikalaisten kuvauksia palosta. Tuli sai alkunsa syyskuun alussa eräästä talosta Aninkaistenmäellä, ja kovan tuulen vuoksi se levisi nopeasti puutalojen yli. Vuorokauden kuluessa suurin osa kaupungista oli tuhoutunut, myös akatemian kirjasto ja tuomiokirkon katto. Linu tekee muistiinpanoja ja merkitsee jokaisen tiedon kohdalle lähteen.',
        translation: 'No arquivo do museu, o Linu lê descrições do incêndio feitas por contemporâneos. O fogo começou no início de setembro numa casa no morro de Aninkaistenmäki e, por causa do vento forte, se espalhou depressa pelas casas de madeira. Em um dia, a maior parte da cidade tinha sido destruída, inclusive a biblioteca da academia e o telhado da catedral. O Linu toma notas e marca a fonte ao lado de cada informação.',
        choices: [{ text: 'Kirjoittaa luonnos lähteiden pohjalta.', translation: 'Escrever o rascunho com base nas fontes.', next: 'luonnos' }],
      },
      luonnos: {
        emoji: '📝',
        text: 'Linun ensimmäinen luonnos alkaa näin: “Vuonna 1827 Turussa syttyi tulipalo, ja se poltti melkein koko kaupungin, ja sen jälkeen akatemia muutti Helsinkiin, koska täällä ei ollut enää rakennuksia.” Heidi lukee lauseen ja hymyilee. “Sisältö on oikein, mutta tyyli on puhekieltä. Asiatekstissä tapahtumat ilmaistaan usein substantiiveilla, eli nominalisoidaan.” Hän kirjoittaa paperille esimerkin: “Palon jälkeen akatemian siirtyminen Helsinkiin oli väistämätöntä.”',
        translation: 'O primeiro rascunho do Linu começa assim: “Em 1827 começou um incêndio em Turku, e ele queimou quase a cidade toda, e depois disso a academia se mudou para Helsinque, porque aqui não tinha mais prédios.” A Heidi lê a frase e sorri. “O conteúdo está certo, mas o estilo é de fala. Em texto informativo, os acontecimentos muitas vezes são expressos com substantivos, ou seja, nominalizados.” Ela escreve num papel um exemplo: “Após o incêndio, a transferência da academia para Helsinque foi inevitável.”',
        choices: [
          { text: 'Muokata tekstiä Heidin neuvon mukaan.', translation: 'Reescrever o texto segundo o conselho da Heidi.', next: 'muokkaus' },
          {
            text: '“Heidin mukaan akatemia siirtyi Helsinkiin ennen paloa.”',
            translation: '“Segundo a Heidi, a academia se mudou para Helsinque antes do incêndio.”',
            wrong: 'A frase da Heidi diz “Palon jälkeen akatemian siirtyminen Helsinkiin oli väistämätöntä”: DEPOIS do incêndio (“palon jälkeen”), a transferência (“siirtyminen”, substantivo formado de “siirtyä”) da academia para Helsinque foi inevitável. A nominalização muda a forma, não a ordem dos fatos.',
          },
        ],
      },
      muokkaus: {
        emoji: '✍️',
        text: 'Linu kirjoittaa tekstin uudelleen: “Syyskuussa 1827 syttynyt palo tuhosi valtaosan Turun kaupungista. Tuhon laajuuden vuoksi Turun akatemia siirrettiin seuraavana vuonna Helsinkiin, joka oli ollut Suomen suuriruhtinaskunnan pääkaupunki vuodesta 1812. Kaupungin jälleenrakennus toteutettiin Carl Ludvig Engelin laatiman asemakaavan pohjalta, jonka leveiden katujen tarkoituksena oli estää tulen leviäminen.” Heidi lukee tekstin kahdesti ja nyökkää.',
        translation: 'O Linu reescreve o texto: “O incêndio iniciado em setembro de 1827 destruiu a maior parte da cidade de Turku. Devido à extensão da destruição, a Academia de Turku foi transferida no ano seguinte para Helsinque, que era a capital do Grão-Ducado da Finlândia desde 1812. A reconstrução da cidade foi realizada com base no plano urbanístico elaborado por Carl Ludvig Engel, cujas ruas largas tinham por finalidade impedir a propagação do fogo.” A Heidi lê o texto duas vezes e concorda com a cabeça.',
        choices: [
          { text: '“Onko tämä nyt liian raskasta luettavaa?”', translation: '“Agora ficou pesado demais de ler?”', next: 'tasapaino' },
          {
            text: '“Leveät kadut rakennettiin siis, jotta palo leviäisi nopeammin.”',
            translation: '“Então as ruas largas foram construídas para que o fogo se espalhasse mais rápido.”',
            wrong: 'O texto diz que as ruas largas tinham por finalidade “estää tulen leviäminen” — IMPEDIR a propagação do fogo. “Leviäminen” é o substantivo de “levitä” (espalhar-se), e “estää” quer dizer impedir.',
          },
        ],
      },
      tasapaino: {
        emoji: '⚖️',
        text: '“Hyvä kysymys”, Heidi sanoo. “Liika nominalisointi tekee tekstistä jäykän, ja museokävijä ei ole tutkija.” Hän neuvoo pitämään johdannon asiatyylisenä mutta lyhyenä ja lisäämään loppuun yhden aikalaisen lainauksen, joka tuo tapahtuman lähelle. “Faktat antavat tekstille uskottavuuden, mutta ihmisen ääni saa lukijan pysähtymään”, hän tiivistää. Linu miettii, mikä lainaus sopisi parhaiten.',
        translation: '“Boa pergunta”, diz a Heidi. “Nominalização demais deixa o texto duro, e o visitante do museu não é pesquisador.” Ela aconselha manter a introdução em estilo informativo, mas curta, e acrescentar no fim uma citação de um contemporâneo, que aproxime o acontecimento. “Os fatos dão credibilidade ao texto, mas uma voz humana faz o leitor parar”, ela resume. O Linu pensa em qual citação serviria melhor.',
        choices: [
          { text: 'Etsiä arkistosta lyhyt ja varmennettu lainaus.', translation: 'Procurar no arquivo uma citação curta e verificada.', next: 'final_bom' },
          { text: 'Keksiä itse dramaattinen lainaus.', translation: 'Inventar ele mesmo uma citação dramática.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Linu löytää arkistosta erään käsityöläisen kirjeen, jossa tämä kertoo lyhyesti, kuinka hänen koko korttelinsa paloi yhdessä yössä, ja Heidi tarkistaa, että lainaus on oikein. Näyttelyn avajaisissa kävijät pysähtyvät Linun tekstin kohdalle, lukevat faktat ja jäävät katsomaan kirjeen kopiota. Heidi kuiskaa hänelle, että teksti on sekä täsmällinen että inhimillinen. Linu ajattelee, että hyvä asiateksti ei ole kylmä, vaan selkeä.',
        translation: 'O Linu encontra no arquivo a carta de um artesão, que conta em poucas linhas como o quarteirão inteiro dele queimou numa só noite, e a Heidi confere se a citação está correta. Na abertura da exposição, os visitantes param diante do texto do Linu, leem os fatos e ficam olhando a cópia da carta. A Heidi cochicha que o texto é ao mesmo tempo preciso e humano. O Linu pensa que um bom texto informativo não é frio, e sim claro.',
        ending: { tone: 'bom', title: 'Texto de museu', message: 'Você entendeu as nominalizações (“siirtyminen”, “jälleenrakennus”, “leviäminen”) e equilibrou estilo acadêmico e voz humana — com fontes verificadas.' },
      },
      final_neutro: {
        emoji: '⚠️',
        text: 'Linu kirjoittaa loppuun dramaattisen lainauksen, jonka hän kuvittelee palon silminnäkijän sanomaksi. Heidi lukee sen ja kysyy heti, mistä lähteestä se on. Kun Linu myöntää keksineensä sen, Heidi poistaa lauseen ja muistuttaa, että museo ei voi esittää keksittyä historiana. Teksti valmistuu ajoissa, mutta ilman sitä ihmisen ääntä, jota Heidi toivoi.',
        translation: 'O Linu põe no fim uma citação dramática que imagina ter sido dita por uma testemunha do incêndio. A Heidi lê e pergunta na hora de que fonte veio. Quando o Linu admite que a inventou, a Heidi apaga a frase e lembra que um museu não pode apresentar invenção como história. O texto fica pronto a tempo, mas sem a voz humana que a Heidi queria.',
        ending: { tone: 'neutro', title: 'Citação inventada', message: 'O estilo acadêmico ficou bom, mas em texto especializado toda informação precisa de fonte. Citação inventada não entra.' },
      },
    },
  },
  {
    id: 'fi-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Revontulet uutisena',
    emoji: '🌌',
    summary: 'Em Rovaniemi, depois de uma palestra no Arktikum, o Linu escreve para o jornal estudantil uma notícia científica sobre a aurora boreal — com manchete, lide e linguagem de jornal.',
    cultural_context:
      'A aurora boreal surge quando partículas do vento solar colidem com os gases da alta atmosfera; o verde vem sobretudo do oxigênio. O nome finlandês, “revontulet” (fogos da raposa), vem de uma lenda em que a cauda de uma raposa correndo pela neve solta faíscas no céu. Rovaniemi, quase toda queimada na Guerra da Lapônia em 1944, foi reconstruída com o plano “em chifre de rena” do arquiteto Alvar Aalto, e ali fica o centro de ciências Arktikum.',
    start: 'start',
    glossary: [
      ['otsikko / ingressi', 'manchete / lide (o parágrafo de abertura)'],
      ['aurinkotuuli', 'vento solar'],
      ['hiukkanen', 'partícula'],
      ['ilmakehä', 'atmosfera'],
      ['törmätä', 'colidir'],
      ['-essa / -essä (törmätessään)', 'ao / quando (construção temporal com o infinitivo)'],
      ['toteaa / kertoo', 'afirma / conta (verbos de citação no jornal)'],
      ['revontulet', 'aurora boreal (lit.: fogos da raposa)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Arktikumin auditoriossa fyysikko Tapani pitää yleisöluennon revontulista, ja Linu istuu eturivissä muistikirja kädessä. Opiskelijalehden toimittaja on pyytänyt häntä kirjoittamaan luennosta uutisen, joka julkaistaan jo huomenna. “Revontulet syntyvät, kun aurinkotuulen mukana kulkevat sähköisesti varautuneet hiukkaset törmäävät ilmakehän kaasuihin noin sadan kilometrin korkeudessa”, Tapani selittää. “Vihreä väri on peräisin hapesta, ja se on Lapissa yleisin.”',
        translation: 'No auditório do Arktikum, o físico Tapani dá uma palestra aberta sobre a aurora boreal, e o Linu está na primeira fila com o caderno na mão. O editor do jornal estudantil pediu que ele escrevesse sobre a palestra uma notícia que sai já amanhã. “A aurora surge quando partículas eletricamente carregadas trazidas pelo vento solar colidem com os gases da atmosfera, a uns cem quilômetros de altura”, explica o Tapani. “A cor verde vem do oxigênio, e é a mais comum na Lapônia.”',
        choices: [
          { text: 'Kirjoittaa ylös tarkat luvut ja lainaukset.', translation: 'Anotar os números exatos e as citações.', next: 'luento' },
          {
            text: 'Kirjoittaa: “Revontulet syntyvät, kun aurinko lämmittää lunta.”',
            translation: 'Anotar: “A aurora surge quando o sol esquenta a neve.”',
            wrong: 'O Tapani disse que a aurora surge quando partículas do vento solar (“aurinkotuulen hiukkaset”) colidem (“törmäävät”) com os gases da atmosfera, a cerca de cem quilômetros de altura. Neve não tem nada a ver com isso — ela só aparece na lenda da raposa!',
          },
        ],
      },
      luento: {
        emoji: '🦊',
        text: 'Luennon lopuksi Tapani kertoo, mistä revontulet ovat saaneet suomenkielisen nimensä. “Vanhan kansantarinan mukaan tunturien yli juokseva kettu lennättää hännällään lumesta kipinöitä taivaalle”, hän sanoo. “Nykyään tiedämme, että ilmiön voimakkuus riippuu auringon aktiivisuudesta, joka vaihtelee noin yhdentoista vuoden jaksoissa.” Yleisö taputtaa, ja Linu jää odottamaan, ehtisikö hän kysyä vielä yhden kysymyksen.',
        translation: 'No fim da palestra, o Tapani conta de onde a aurora tirou o nome finlandês. “Segundo uma velha lenda popular, uma raposa correndo pelos montes da Lapônia lança faíscas de neve ao céu com a cauda”, ele diz. “Hoje sabemos que a intensidade do fenômeno depende da atividade do Sol, que varia em ciclos de cerca de onze anos.” O público aplaude, e o Linu fica esperando para ver se dá tempo de fazer mais uma pergunta.',
        choices: [
          { text: 'Kysyä Tapanilta, voiko häntä lainata lehdessä.', translation: 'Perguntar ao Tapani se pode citá-lo no jornal.', next: 'lupa' },
          { text: 'Lähteä suoraan kirjoittamaan.', translation: 'Ir direto escrever.', next: 'kirjoitus' },
        ],
      },
      lupa: {
        emoji: '🎤',
        text: 'Tapani suostuu mielellään ja lisää vielä yhden yksityiskohdan: “Voit mainita, että korkeammalla, yli kahdensadan kilometrin korkeudessa, happi hehkuu punaisena. Punaisia revontulia näkee kuitenkin paljon harvemmin kuin vihreitä.” Hän antaa Linulle käyntikorttinsa ja pyytää lähettämään jutun tarkistettavaksi ennen julkaisua. Linu kiittää ja kiiruhtaa kirjoittamaan.',
        translation: 'O Tapani concorda de bom grado e acrescenta mais um detalhe: “Você pode mencionar que mais alto, a mais de duzentos quilômetros de altura, o oxigênio brilha em vermelho. Mas a aurora vermelha é vista bem mais raramente que a verde.” Ele dá o cartão de visita ao Linu e pede que mande a matéria para revisão antes da publicação. O Linu agradece e corre para escrever.',
        choices: [{ text: 'Aloittaa kirjoittaminen.', translation: 'Começar a escrever.', next: 'kirjoitus' }],
      },
      kirjoitus: {
        emoji: '📰',
        text: 'Opiskelijalehden toimituksessa päätoimittaja Minna muistuttaa uutisen rakenteesta: ensin otsikko, sitten ingressi, jossa tärkein tieto kerrotaan heti, ja vasta sen jälkeen taustat ja lainaukset. “Lukija päättää ensimmäisen virkkeen perusteella, lukeeko hän eteenpäin”, Minna sanoo. Linu kirjoittaa kaksi vaihtoehtoista alkua ja miettii, kumman hän valitsisi.',
        translation: 'Na redação do jornal estudantil, a editora-chefe Minna lembra a estrutura da notícia: primeiro a manchete, depois o lide, em que a informação principal vem logo, e só depois o contexto e as citações. “O leitor decide pela primeira frase se vai continuar lendo”, diz a Minna. O Linu escreve duas aberturas alternativas e pensa em qual escolheria.',
        choices: [
          {
            text: '“Kettu ei sytytä revontulia – aurinko sytyttää. Arktikumissa torstaina luennoinut fyysikko Tapani kertoo, että Lapin taivaan vihreä hehku syntyy aurinkotuulen hiukkasten törmätessä ilmakehän happeen.”',
            translation: '“Não é a raposa que acende a aurora — é o Sol. O físico Tapani, que deu palestra no Arktikum na quinta-feira, conta que o brilho verde do céu da Lapônia surge quando partículas do vento solar colidem com o oxigênio da atmosfera.”',
            next: 'tarkistus',
          },
          {
            text: '“Olin torstaina luennolla. Se oli tosi kiinnostava, ja opin paljon asioita revontulista ja ketuista.”',
            translation: '“Fui a uma palestra na quinta. Foi muito interessante, e aprendi muitas coisas sobre a aurora e as raposas.”',
            next: 'hylatty',
          },
        ],
      },
      tarkistus: {
        emoji: '📧',
        text: 'Linu lähettää jutun Tapanille, joka vastaa tunnin kuluttua: “Hyvä ja täsmällinen. Yksi korjaus: kirjoitit loppuun, että revontulia näkyy Lapissa joka yö. Kirjoita mieluummin, että niitä näkyy usein pimeinä ja kirkkaina öinä, sillä liian varmat lupaukset pettävät matkailijat.” Linu korjaa lauseen ja huomaa, kuinka paljon yksi “usein” muuttaa lauseen tarkkuutta. Minna lukee lopullisen version ja hyväksyy sen julkaistavaksi. Juttuun lisätään valokuva Rovaniemen yllä loimuavista revontulista.',
        translation: 'O Linu manda a matéria ao Tapani, que responde uma hora depois: “Bom e preciso. Uma correção: você escreveu no fim que na Lapônia a aurora aparece toda noite. Escreva, de preferência, que ela aparece com frequência nas noites escuras e limpas, porque promessas seguras demais decepcionam os viajantes.” O Linu corrige a frase e percebe o quanto um “usein” (com frequência) muda a precisão. A Minna lê a versão final e aprova para publicação. A matéria ganha uma foto da aurora brilhando sobre Rovaniemi.',
        choices: [{ text: 'Odottaa aamun lehteä.', translation: 'Esperar o jornal da manhã.', next: 'final_bom' }],
      },
      hylatty: {
        emoji: '🗑️',
        text: 'Minna lukee alun ja pudistaa päätään. “Tämä on päiväkirja, ei uutinen. Missä on tieto? Kuka sanoi mitä, ja miksi sen pitäisi kiinnostaa lukijaa?” hän kysyy. Juttu siirretään seuraavaan numeroon, ja sen paikalle laitetaan ilmoitus opiskelijoiden sitsijuhlista. Linu päättää lukea ensi viikolla muutaman oikean tiedeuutisen ja kopioida niiden rakenteen.',
        translation: 'A Minna lê a abertura e balança a cabeça. “Isto é diário, não notícia. Cadê a informação? Quem disse o quê, e por que isso interessaria ao leitor?”, ela pergunta. A matéria é adiada para a edição seguinte, e no lugar dela entra um anúncio da festa dos estudantes. O Linu decide ler na semana seguinte algumas notícias de ciência de verdade e copiar a estrutura delas.',
        ending: { tone: 'neutro', title: 'Diário, não notícia', message: 'Faltaram manchete, lide e fonte. No estilo jornalístico, a informação principal e quem a disse vêm logo na primeira frase.' },
      },
      final_bom: {
        emoji: '🐧',
        text: 'Aamulla opiskelijalehti on kampuksen kahvilan pöydillä, ja Linun juttu on sen sivulla kolme otsikolla “Kettu ei sytytä revontulia”. Illalla hän kävelee Ounasjoen rantaan, ja taivaalle leviää heikko vihreä kaari. Hän ei jaksa enää ajatella hiukkasia eikä ilmakehää. Hän vain katsoo ja ajattelee, että tarina ketusta on yhtä kaunis kuin fysiikka, vaikka se ei olekaan totta.',
        translation: 'De manhã, o jornal estudantil está nas mesas do café do campus, e a matéria do Linu está na página três com a manchete “Não é a raposa que acende a aurora”. À noite ele caminha até a beira do rio Ounasjoki, e no céu se abre um arco verde e fraco. Ele já não tem ânimo para pensar em partículas nem em atmosfera. Só olha e pensa que a história da raposa é tão bonita quanto a física, mesmo não sendo verdade.',
        ending: { tone: 'bom', title: 'Notícia publicada', message: 'Você entendeu a explicação científica, montou manchete e lide no estilo jornalístico e aprendeu o peso de um “usein”.' },
      },
    },
  },
  {
    id: 'fi-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Kinoksia norpille',
    emoji: '🦭',
    summary: 'Em Savonlinna, o Linu traduz para leigos um relatório científico sobre a foca-anelada-do-saimaa — e depois pega na pá para ajudá-la de verdade.',
    cultural_context:
      'A foca-anelada-do-saimaa (saimaannorppa) vive só no lago Saimaa e é uma das focas mais ameaçadas do mundo, com apenas algumas centenas de indivíduos. A fêmea pare o filhote num abrigo cavado na neve acumulada da margem; em invernos com pouca neve, voluntários erguem montes de neve artificiais com pás. Savonlinna, no meio do Saimaa, é conhecida pelo castelo de Olavinlinna, fundado em 1475.',
    start: 'start',
    glossary: [
      ['saimaannorppa', 'foca-anelada-do-saimaa'],
      ['kuutti', 'filhote de foca'],
      ['pesä / lumipesä', 'toca / toca na neve'],
      ['apukinos', 'monte de neve artificial (lit.: monte de ajuda)'],
      ['uhanalainen', 'ameaçado de extinção'],
      ['lumipeitteen väheneminen', 'a diminuição da cobertura de neve'],
      ['selviytyminen', 'sobrevivência'],
      ['tiivistelmä', 'resumo'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Savonlinnassa on helmikuu, ja Olavinlinnan muurit kohoavat jään keskeltä harmaina ja jylhinä. Linu tekee harjoittelua ympäristöjärjestössä, ja hänen ohjaajansa Riitta antaa hänelle tutkimusraportin norppakannan kehityksestä. “Tämä on kirjoitettu tutkijoille”, Riitta sanoo. “Sinun tehtäväsi on tehdä siitä lyhyt tiivistelmä järjestön verkkosivuille, niin että kuka tahansa ymmärtää sen.”',
        translation: 'Em Savonlinna é fevereiro, e as muralhas de Olavinlinna se erguem cinzentas e imponentes no meio do gelo. O Linu estagia numa organização ambiental, e a orientadora dele, Riitta, lhe entrega um relatório de pesquisa sobre a evolução da população de focas. “Isto foi escrito para pesquisadores”, diz a Riitta. “Sua tarefa é fazer dele um resumo curto para o site da organização, de modo que qualquer pessoa entenda.”',
        choices: [
          { text: 'Lukea raportin tiivistelmä ensin.', translation: 'Ler primeiro o resumo do relatório.', next: 'raportti' },
          { text: 'Kysyä Riitalta, miksi norppa on uhanalainen.', translation: 'Perguntar à Riitta por que a foca está ameaçada.', next: 'riitta' },
        ],
      },
      riitta: {
        emoji: '❄️',
        text: 'Riitta kertoo, että saimaannorppa jäi Saimaaseen jääkauden jälkeen, kun maa kohosi ja järvi erottui merestä, ja että se elää nykyään vain täällä. “Naaras synnyttää kuuttinsa rannalle kinokseen kaivettuun pesään”, hän selittää. “Jos lunta ei ole tarpeeksi, kuutti jää alttiiksi pakkaselle ja pedoille.” Hän lisää, että vaarallisia ovat myös kalaverkot, joihin nuoret norpat voivat sotkeutua ja hukkua.',
        translation: 'A Riitta conta que a foca do Saimaa ficou presa no lago depois da era do gelo, quando a terra subiu e o lago se separou do mar, e que hoje vive só ali. “A fêmea pare o filhote na margem, numa toca cavada num monte de neve”, ela explica. “Se não houver neve suficiente, o filhote fica exposto ao frio e aos predadores.” Ela acrescenta que as redes de pesca também são perigosas, porque as focas jovens podem se enroscar nelas e se afogar.',
        choices: [{ text: 'Lukea raportti.', translation: 'Ler o relatório.', next: 'raportti' }],
      },
      raportti: {
        emoji: '📄',
        text: 'Raportissa lukee: “Lumipeitteen vähenemisen seurauksena luonnollisten pesäpaikkojen määrä on laskenut. Apukinosten käyttöönoton myötä kuuttien selviytyminen on kuitenkin parantunut, ja kannan kasvu on jatkunut. Verkkokalastusrajoitusten ylläpitäminen on edelleen välttämätöntä kannan elinvoimaisuuden turvaamiseksi.” Linu lukee kappaleen kahdesti. Siinä ei ole yhtään ihmistä, joka tekisi jotakin, vain substantiiveja, jotka tapahtuvat.',
        translation: 'O relatório diz: “Em consequência da diminuição da cobertura de neve, o número de locais naturais de toca caiu. Com a introdução dos montes de neve artificiais, no entanto, a sobrevivência dos filhotes melhorou, e o crescimento da população continuou. A manutenção das restrições à pesca com rede segue indispensável para garantir a vitalidade da população.” O Linu lê o parágrafo duas vezes. Nele não há nenhuma pessoa fazendo algo, só substantivos que acontecem.',
        choices: [
          { text: 'Purkaa substantiivit tavallisiksi lauseiksi.', translation: 'Desmontar os substantivos em frases comuns.', next: 'purku' },
          {
            text: '“Raportin mukaan apukinokset ovat huonontaneet kuuttien tilannetta.”',
            translation: '“Segundo o relatório, os montes artificiais pioraram a situação dos filhotes.”',
            wrong: 'O relatório diz “apukinosten käyttöönoton myötä kuuttien selviytyminen on kuitenkin parantunut”: com a introdução dos montes artificiais, a sobrevivência dos filhotes MELHOROU. O que diminuiu foi a cobertura de neve natural (“lumipeitteen väheneminen”).',
          },
        ],
      },
      purku: {
        emoji: '✍️',
        text: 'Linu kirjoittaa: “Talvet ovat nykyään usein vähälumisia, joten norpat löytävät vähemmän paikkoja, joihin ne voivat kaivaa pesän. Siksi vapaaehtoiset lapioivat rannoille lumikasoja. Niiden ansiosta yhä useampi kuutti selviää, ja norppia on joka vuosi hieman enemmän. Keväällä verkoilla kalastaminen on kuitenkin yhä rajoitettua, jotta nuoret norpat eivät hukkuisi.” Riitta lukee tekstin ja hymyilee.',
        translation: 'O Linu escreve: “Hoje os invernos muitas vezes têm pouca neve, então as focas encontram menos lugares onde cavar a toca. Por isso, voluntários amontoam neve com pás nas margens. Graças a esses montes, cada vez mais filhotes sobrevivem, e a cada ano há um pouco mais de focas. Na primavera, porém, a pesca com rede continua restrita, para que as focas jovens não se afoguem.” A Riitta lê o texto e sorri.',
        choices: [
          { text: '“Onko teksti nyt liian yksinkertainen?”', translation: '“O texto ficou simples demais?”', next: 'palaute' },
          {
            text: '“Rajoitukset koskevat siis kaikkea kalastusta koko vuoden.”',
            translation: '“Então as restrições valem para toda pesca, o ano inteiro.”',
            wrong: 'O texto fala de “verkkokalastusrajoitukset”: restrições à pesca com REDE (“verkoilla kalastaminen”), e diz que valem na primavera (“keväällä”), quando as focas jovens correm risco. Não é toda pesca o ano inteiro.',
          },
        ],
      },
      palaute: {
        emoji: '💬',
        text: '“Ei ole”, Riitta vastaa. “Verkkosivujen lukija ei tarvitse sanaa käyttöönotto, hän tarvitsee kuvan lapiosta ja lumikasasta.” Hän kertoo, että tutkijoiden kieli on tiivistä, koska se säästää tilaa ja on täsmällistä, mutta yleisölle sama tieto kannattaa kertoa verbeillä ja ihmisillä. Sitten hän katsoo ikkunasta lumisateeseen ja sanoo, että huomenna tarvitaan vapaaehtoisia kinostalkoisiin Haukivedellä.',
        translation: '“Não”, responde a Riitta. “O leitor do site não precisa da palavra ‘käyttöönotto’ (introdução, adoção); ele precisa da imagem de uma pá e de um monte de neve.” Ela conta que a linguagem dos pesquisadores é concisa porque economiza espaço e é precisa, mas que para o público vale contar a mesma informação com verbos e pessoas. Então ela olha a neve caindo pela janela e diz que amanhã vão precisar de voluntários para o mutirão de montes de neve no Haukivesi.',
        choices: [
          { text: '“Minä tulen mukaan!”', translation: '“Eu vou junto!”', next: 'final_bom' },
          { text: '“Minulla on huomenna muuta, valitettavasti.”', translation: '“Amanhã tenho outro compromisso, infelizmente.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Aamulla Linu lapioi lunta jäällä kymmenen muun vapaaehtoisen kanssa, ja kaukana näkyy Olavinlinnan torni. Kasat tehdään rannan tuntumaan, ja jokaisen kohta merkitään tarkasti karttaan, jotta tutkijat voivat myöhemmin seurata niitä. Keväällä Riitta lähettää hänelle viestin: yhdessä heidän kinoksistaan oli syntynyt kuutti. Linu lisää verkkosivujen tiivistelmään yhden lauseen: “Kuutti syntyi talkoolaisten tekemään kinokseen.”',
        translation: 'De manhã, o Linu cava neve no gelo com outros dez voluntários, e ao longe se vê a torre de Olavinlinna. Os montes são feitos perto da margem, e o lugar de cada um é marcado com precisão no mapa, para que os pesquisadores possam acompanhá-los depois. Na primavera, a Riitta lhe manda uma mensagem: num dos montes deles tinha nascido um filhote. O Linu acrescenta uma frase ao resumo do site: “Um filhote nasceu num monte de neve feito pelos voluntários.”',
        ending: { tone: 'bom', title: 'Um filhote no monte de neve', message: 'Você desmontou as nominalizações do relatório (“lumipeitteen väheneminen”, “selviytyminen”) em frases claras — e ainda ajudou a foca de verdade.' },
      },
      final_neutro: {
        emoji: '💻',
        text: 'Linu viimeistelee tiivistelmän toimistolla, ja se julkaistaan järjestön sivuilla samana päivänä. Talkoista tulee illalla kuvia: punaposkisia ihmisiä lapioineen ja pitkä rivi lumikasoja jäällä. Teksti on hyvä ja selkeä, mutta Linu tuntee, että hän kirjoitti norpista näkemättä yhtään kinosta. Hän lupaa itselleen, että ensi talvena hän on mukana.',
        translation: 'O Linu termina o resumo no escritório, e ele é publicado no site da organização no mesmo dia. À noite chegam fotos do mutirão: gente de bochechas vermelhas com pás e uma fileira comprida de montes de neve no gelo. O texto está bom e claro, mas o Linu sente que escreveu sobre as focas sem ver um monte de neve sequer. Ele promete a si mesmo que no próximo inverno vai participar.',
        ending: { tone: 'neutro', title: 'Só no papel', message: 'O resumo ficou claro, mas você perdeu o mutirão no gelo. Fica para o próximo inverno.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'fi-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Mieleni minun tekevi',
    emoji: '📜',
    summary: 'No Dia do Kalevala, em Kajaani, onde Elias Lönnrot foi médico, o Linu lê os primeiros versos da epopeia com uma professora aposentada — e descobre as formas antigas e o paralelismo da poesia rúnica.',
    cultural_context:
      'Elias Lönnrot (1802–1884) foi médico distrital em Kajaani e, em viagens sobretudo pela Carélia, recolheu os cantos rúnicos que reuniu no Kalevala; o prefácio da primeira edição é datado de 28 de fevereiro de 1835, e essa data é hoje o Dia do Kalevala, dia da cultura finlandesa. A versão ampliada, de 1849, tem 50 cantos, no metro do Kalevala: versos de oito sílabas, aliteração e paralelismo.',
    start: 'start',
    glossary: [
      ['runo / runonlaulaja', 'canto épico / cantor de runos'],
      ['tekevi, ajattelevi', 'formas antigas de “tekee”, “ajattelee”'],
      ['laulamahan, sanelemahan', 'formas antigas de “laulamaan”, “sanelemaan” (para cantar, para dizer)'],
      ['kerto', 'paralelismo: o verso seguinte repete a ideia com outras palavras'],
      ['alkusointu', 'aliteração'],
      ['lienee', 'deve ser, provavelmente é (potencial de “olla”)'],
      ['ei oppi ojaan kaada', 'saber não ocupa lugar (lit.: o estudo não derruba ninguém na vala)'],
      ['vaka vanha Väinämöinen', 'o firme e velho Väinämöinen (epíteto do herói)'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'On helmikuun viimeinen päivä, ja Kajaanissa liputetaan Kalevalan päivän kunniaksi. Linu seisoo Kajaanin linnan raunioilla, joiden kivimuurit kohoavat jäätyneen joen keskeltä, ja lukee opastaulusta, että Elias Lönnrot toimi täällä piirilääkärinä kaksi vuosikymmentä. Hänen vieressään seisoo iäkäs nainen, joka on pysähtynyt lukemaan samaa taulua. “Täältä hän lähti runonkeruumatkoilleen, tohtori, joka hoiti kuumeisia päivällä ja kirjoitti lauluja öisin”, nainen sanoo kuin itsekseen, ja esittäytyy sitten Auneksi, eläkkeellä olevaksi äidinkielen opettajaksi.',
        translation: 'É o último dia de fevereiro, e Kajaani está de bandeiras hasteadas pelo Dia do Kalevala. O Linu está nas ruínas do castelo de Kajaani, cujas muralhas de pedra se erguem no meio do rio congelado, e lê numa placa que Elias Lönnrot trabalhou ali como médico distrital por duas décadas. Ao lado dele está uma senhora de idade que parou para ler a mesma placa. “Daqui ele partia para as viagens de coleta de runos, o doutor que tratava febres de dia e escrevia cantos à noite”, diz a senhora como que para si mesma, e depois se apresenta como Aune, professora aposentada de língua materna.',
        choices: [
          { text: '“Mistä hän lauluja keräsi?”', translation: '“De onde ele recolhia os cantos?”', next: 'viena' },
          { text: '“Voisitteko lukea minulle Kalevalan alun?”', translation: '“A senhora poderia ler para mim o começo do Kalevala?”', next: 'alku' },
        ],
      },
      viena: {
        emoji: '🛷',
        text: 'Aune kertoo, että Lönnrot kulki jalan, hiihtäen ja veneellä syrjäisiin kyliin, ennen kaikkea Vienan Karjalaan nykyisen itärajan taakse, missä vanha runolaulu eli vielä ihmisten suussa. “Siellä hän tapasi Arhippa Perttusen, vanhan laulajan, joka lauloi hänelle päiväkausia, ja moni säe olisi ilman häntä kadonnut”, hän sanoo. “Lönnrot ei kuitenkaan vain kirjoittanut ylös, vaan järjesti ja yhdisti runoja ja muokkasi niistä yhtenäisen kertomuksen.” Hän lisää, että siitä, kuinka paljon Kalevalassa on Lönnrotia ja kuinka paljon kansaa, on väitelty sen ilmestymisestä asti.',
        translation: 'A Aune conta que o Lönnrot viajava a pé, de esqui e de barco até aldeias remotas, sobretudo na Carélia do Mar Branco (Viena), além da atual fronteira leste, onde o velho canto rúnico ainda vivia na boca do povo. “Lá ele conheceu Arhippa Perttunen, um velho cantor que cantou para ele durante dias, e muitos versos teriam se perdido sem ele”, ela diz. “Mas o Lönnrot não só anotava: ele ordenava e juntava os cantos e fez deles uma narrativa contínua.” Ela acrescenta que se discute, desde que o livro saiu, quanto do Kalevala é do Lönnrot e quanto é do povo.',
        choices: [{ text: '“Kuulisin mielelläni, miten se alkaa.”', translation: '“Eu gostaria de ouvir como ele começa.”', next: 'alku' }],
      },
      alku: {
        emoji: '📖',
        text: 'Aune ottaa laukustaan pienen, kuluneen Kalevalan ja lukee hitaasti, painottaen jokaisen säkeen ensimmäistä tavua: “Mieleni minun tekevi, / aivoni ajattelevi / lähteäni laulamahan, / saa’ani sanelemahan.” Tuuli kuljettaa lunta raunioiden yli, ja hetken on aivan hiljaista. “Kuulitko, miten sama ajatus sanotaan kahdesti?” hän kysyy. “Ensin mieli tekee, sitten aivot ajattelevat, ja ensin laulamaan, sitten sanelemaan: se on kerto, runon sydän.”',
        translation: 'A Aune tira da bolsa um Kalevala pequeno e gasto e lê devagar, acentuando a primeira sílaba de cada verso: “Minha alma deseja, / minha mente pensa / em partir a cantar, / em pôr-me a dizer.” O vento leva neve por cima das ruínas, e por um momento tudo fica em silêncio. “Você ouviu como a mesma ideia é dita duas vezes?”, ela pergunta. “Primeiro a alma deseja, depois a mente pensa, e primeiro cantar, depois dizer: é o paralelismo, o coração do runo.”',
        choices: [
          { text: '“Siis laulaja haluaa aloittaa laulamisen, ja sanoo sen kahdella tavalla.”', translation: '“Então o cantor quer começar a cantar, e diz isso de dois jeitos.”', next: 'muodot' },
          {
            text: '“Siis ensimmäinen säe kertoo laulajasta ja toinen hänen veljestään.”',
            translation: '“Então o primeiro verso fala do cantor e o segundo, do irmão dele.”',
            wrong: 'Os dois versos falam da mesma pessoa, o cantor: “mieleni minun tekevi” (o meu espírito deseja) e “aivoni ajattelevi” (a minha mente pensa) repetem a mesma ideia com palavras diferentes. Esse paralelismo, a “kerto”, é a marca da poesia do Kalevala.',
          },
        ],
      },
      muodot: {
        emoji: '🔤',
        text: '“Juuri niin”, Aune sanoo tyytyväisenä. “Ja katso muotoja: tekevi on vanha tapa sanoa tekee, ja laulamahan on laulamaan, siinä vain on vielä säilynyt h, joka nykykielestä on kadonnut.” Hän selittää, että Kalevalan mitta on kahdeksantavuinen, että sanat alkavat usein samalla äänteellä, kuten lähteäni laulamahan, ja että siksi runoja oli helppo muistaa ilman kirjoitusta. “Lönnrotin aikaan suurin osa laulajista ei osannut lukea, mutta he muistivat tuhansia säkeitä.”',
        translation: '“Isso mesmo”, diz a Aune, satisfeita. “E olhe as formas: ‘tekevi’ é um jeito antigo de dizer ‘tekee’, e ‘laulamahan’ é ‘laulamaan’, só que ali ainda se conservou um ‘h’ que sumiu da língua atual.” Ela explica que o metro do Kalevala tem oito sílabas, que as palavras muitas vezes começam com o mesmo som, como em “lähteäni laulamahan”, e que por isso os cantos eram fáceis de guardar de cor sem escrita. “No tempo do Lönnrot, a maioria dos cantores não sabia ler, mas eles lembravam milhares de versos.”',
        choices: [
          { text: '“Opettaisitteko minulle vielä jotain vanhaa?”', translation: '“A senhora me ensinaria mais alguma coisa antiga?”', next: 'lienee' },
          { text: 'Kiittää ja lähteä lämmittelemään.', translation: 'Agradecer e ir se esquentar.', next: 'final_neutro' },
        ],
      },
      lienee: {
        emoji: '🕯️',
        text: 'Aune nauraa ja sanoo, että vanhaa riittää, mutta hänen varpaansa ovat jo jäässä, ja ehdottaa, että he jatkaisivat kirjaston Kalevala-illassa. Matkalla hän opettaa Linulle potentiaalin: “Jos sanon, että Lönnrot lienee ollut väsynyt palatessaan matkoiltaan, en väitä sitä varmaksi, vaan pidän sitä todennäköisenä.” Hän lisää, että nykykielessä lienee kuulostaa juhlavalta tai leikilliseltä, ja käyttää sitä heti itse: “Sinä lienet ensimmäinen pingviini, joka on lukenut Kalevalaa Kajaanin linnalla.” Linu ei tiedä, pitäisikö hänen olla ylpeä vai huolissaan.',
        translation: 'A Aune ri e diz que coisa antiga não falta, mas os dedos dos pés dela já estão congelados, e sugere continuar na noite do Kalevala da biblioteca. No caminho ela ensina ao Linu o potencial: “Se eu digo que o Lönnrot ‘lienee ollut’ cansado ao voltar das viagens, não afirmo com certeza; considero provável.” Ela acrescenta que na língua de hoje “lienee” soa solene ou brincalhão, e o usa logo: “Você deve ser o primeiro pinguim que leu o Kalevala no castelo de Kajaani.” O Linu não sabe se deve ficar orgulhoso ou preocupado.',
        choices: [{ text: 'Mennä Aunen kanssa kirjastoon.', translation: 'Ir com a Aune à biblioteca.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Kirjaston Kalevala-illassa soitetaan kannelta, ja nuori laulaja esittää vanhoja säkeitä niin, että sali hiljenee. Aune esittelee Linun ystävilleen, ja kaikki haluavat kuulla, miltä Kalevala kuulostaa pingviinin suusta. Linu lausuu neljä ensimmäistä säettä ja korostaa jokaisen säkeen alkua, kuten Aune neuvoi, ja saa raikuvat aplodit. “Ei oppi ojaan kaada”, Aune sanoo ja ojentaa hänelle vanhan Kalevalansa. “Pidä tämä. Minulla on kotona kolme muuta.”',
        translation: 'Na noite do Kalevala da biblioteca, toca-se o kantele, e um jovem cantor apresenta versos antigos de tal forma que o salão fica em silêncio. A Aune apresenta o Linu aos amigos, e todos querem ouvir como soa o Kalevala na boca de um pinguim. O Linu recita os quatro primeiros versos, acentuando o começo de cada um, como a Aune ensinou, e recebe aplausos calorosos. “Saber não ocupa lugar”, diz a Aune, estendendo-lhe o seu Kalevala velho. “Fique com este. Tenho outros três em casa.”',
        ending: { tone: 'bom', title: 'Um Kalevala de presente', message: 'Você entendeu o paralelismo do runo, as formas antigas “tekevi” e “laulamahan” e o potencial “lienee” — e ganhou um Kalevala de presente.' },
      },
      final_neutro: {
        emoji: '☕',
        text: 'Linu kiittää Aunea ja kiiruhtaa lähimpään kahvilaan lämmittelemään. Ikkunasta hän näkee linnan rauniot hämärtyvässä valossa ja toistaa mielessään: mieleni minun tekevi, aivoni ajattelevi. Illalla hän kuulee, että kirjastossa oli ollut Kalevala-ilta kanteleineen ja lausujineen. Hän harmittelee, ettei kysynyt Aunelta enempää, sillä vanhat sanat olisivat odottaneet häntä siellä.',
        translation: 'O Linu agradece à Aune e corre para o café mais próximo para se esquentar. Pela janela, ele vê as ruínas do castelo na luz que escurece e repete na cabeça: “mieleni minun tekevi, aivoni ajattelevi”. À noite, fica sabendo que houve na biblioteca uma noite do Kalevala, com kantele e recitadores. Ele se arrepende de não ter perguntado mais à Aune, porque as palavras antigas o teriam esperado lá.',
        ending: { tone: 'neutro', title: 'Versos no café', message: 'Você entendeu os primeiros versos do Kalevala, mas saiu antes de aprender o potencial e de ouvir o kantele.' },
      },
    },
  },
  {
    id: 'fi-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Jukolan talo',
    emoji: '🏡',
    summary: 'No dia de Aleksis Kivi, na casa natal do escritor em Nurmijärvi, o Linu lê a primeira frase de “Os sete irmãos” e descobre por que o primeiro grande romance em finlandês foi tão mal recebido — e tão amado depois.',
    cultural_context:
      'Aleksis Kivi (nome de batismo Alexis Stenvall) nasceu em 10 de outubro de 1834 em Nurmijärvi e morreu pobre em Tuusula no último dia de 1872; seu aniversário é hoje o dia da literatura finlandesa. “Seitsemän veljestä” (Os sete irmãos), publicado a partir de 1870, costuma ser chamado de primeiro romance em língua finlandesa; a crítica da época o atacou com dureza, e só depois ele virou um clássico.',
    start: 'start',
    glossary: [
      ['syntymäkoti', 'casa natal'],
      ['liki', 'perto de (forma antiga e literária de “lähellä”)'],
      ['rinne', 'encosta'],
      ['lukkari', 'sacristão que ensinava as crianças a ler'],
      ['aapinen', 'cartilha, livro do bê-á-bá'],
      ['arvostelu', 'crítica, resenha'],
      ['lienee', 'deve ser, provavelmente é (potencial)'],
      ['perimätieto', 'tradição oral'],
    ],
    nodes: {
      start: {
        emoji: '🍂',
        text: 'On lokakuun kymmenes päivä, ja Nurmijärven Palojoella, Aleksis Kiven syntymäkodin pihalla, lehtiä sataa hiljalleen punaisena ja keltaisena matalan hirsitalon katolle. Talon edessä on koululaisia, jotka valmistautuvat esittämään kohtauksen Seitsemästä veljeksestä, ja heidän keskellään seisoo opas Pentti, harmaapartainen mies, jolla on kirja kainalossa. “Tässä pienessä tuvassa syntyi räätälin poika, josta tuli suomenkielisen romaanin isä”, hän aloittaa. “Tänään on hänen syntymäpäivänsä ja samalla suomalaisen kirjallisuuden päivä.”',
        translation: 'É dia dez de outubro, e em Palojoki, Nurmijärvi, no pátio da casa natal de Aleksis Kivi, as folhas caem devagar, vermelhas e amarelas, sobre o telhado da casa baixa de toras. Na frente da casa há estudantes se preparando para encenar uma cena de “Os sete irmãos”, e no meio deles está o guia Pentti, um homem de barba grisalha com um livro debaixo do braço. “Nesta pequena casa nasceu o filho de um alfaiate que se tornou o pai do romance em língua finlandesa”, ele começa. “Hoje é o aniversário dele e também o dia da literatura finlandesa.”',
        choices: [
          { text: '“Mistä romaani kertoo?”', translation: '“Sobre o que é o romance?”', next: 'veljet' },
          { text: '“Miten kirja alkaa?”', translation: '“Como o livro começa?”', next: 'alku' },
        ],
      },
      veljet: {
        emoji: '👬',
        text: 'Pentti luettelee nimet kuin vanhan loitsun: Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri ja Eero, seitsemän orpoa veljestä, jotka perivät Jukolan talon mutta eivät jaksa totella ketään. “Kun lukkari yrittää opettaa heille lukemista, he pakenevat metsään, Impivaaraan, ja elävät siellä vuosia omien lakiensa mukaan”, hän kertoo. “Lopulta he palaavat, oppivat lukemaan ja tulevat kunnon kansalaisiksi, mutta matka sinne on täynnä tappeluita, huumoria ja surua.” Hän huomauttaa, että romaani on samalla kertomus koko kansasta, joka opetteli lukemaan omalla kielellään.',
        translation: 'O Pentti enumera os nomes como um velho encantamento: Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri e Eero, sete irmãos órfãos que herdam a casa de Jukola mas não aguentam obedecer a ninguém. “Quando o sacristão tenta lhes ensinar a ler, eles fogem para a floresta, para Impivaara, e vivem lá por anos segundo suas próprias leis”, ele conta. “No fim, eles voltam, aprendem a ler e se tornam cidadãos de bem, mas o caminho até lá é cheio de brigas, humor e tristeza.” Ele observa que o romance é ao mesmo tempo a história de um povo inteiro que aprendeu a ler na própria língua.',
        choices: [
          { text: '“Kuulisin mielelläni alun.”', translation: '“Eu gostaria de ouvir o começo.”', next: 'alku' },
          {
            text: '“Veljet siis pakenevat metsään, koska he ovat jo oppineet lukemaan.”',
            translation: '“Então os irmãos fogem para a floresta porque já aprenderam a ler.”',
            wrong: 'É o contrário: eles fogem para Impivaara QUANDO o sacristão tenta ensiná-los a ler (“kun lukkari yrittää opettaa heille lukemista”). Só no fim, depois de voltar, é que eles aprendem (“lopulta he palaavat, oppivat lukemaan”).',
          },
        ],
      },
      alku: {
        emoji: '📖',
        text: 'Pentti avaa kirjan ja lukee romaanin ensimmäisen virkkeen hitaasti, lähes juhlallisesti: “Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella rinteellä, liki Toukolan kylää.” Hän antaa lauseen hetken leijua ilmassa ja kysyy sitten, huomasiko Linu, mikä siinä on vanhanaikaista. “Liki on nykyään harvinainen, arkikielessä sanoisimme lähellä, mutta Kiven suussa se kuulostaa maalta ja vanhalta ajalta”, hän selittää. “Ja katso, miten lause pysähtyy välillä kuin kävelijä, joka katselee ympärilleen.”',
        translation: 'O Pentti abre o livro e lê a primeira frase do romance devagar, quase solene: “A casa de Jukola, no sul da Tavástia, fica na encosta norte de um morro, perto da aldeia de Toukola.” Ele deixa a frase flutuar no ar por um instante e depois pergunta se o Linu percebeu o que nela é antiquado. “"Liki" hoje é raro; no dia a dia diríamos "lähellä", mas na boca de Kivi soa a campo e a tempo antigo”, ele explica. “E veja como a frase para de vez em quando, como um caminhante que olha em volta.”',
        choices: [
          { text: '“Talo on siis mäen rinteellä, lähellä kylää.”', translation: '“Então a casa fica na encosta do morro, perto da aldeia.”', next: 'arvostelu' },
          {
            text: '“Talo on siis Toukolan kylän keskellä, mäen huipulla.”',
            translation: '“Então a casa fica no centro da aldeia de Toukola, no alto do morro.”',
            wrong: 'A frase diz que a casa fica “erään mäen pohjoisella rinteellä” — na ENCOSTA norte de um morro, não no alto — e “liki Toukolan kylää”, PERTO da aldeia de Toukola, não no meio dela. “Liki” é a forma antiga de “lähellä”.',
          },
        ],
      },
      arvostelu: {
        emoji: '🖋️',
        text: 'Pentti kertoo, että kun romaani ilmestyi, aikansa arvovaltaisin kriitikko tyrmäsi sen raa’aksi ja sivistymättömäksi, eikä kirjailija saanut elinaikanaan kunnollista tunnustusta. “Kivi lienee kärsinyt siitä enemmän kuin kukaan tiesi, sillä hän oli köyhä ja sairas ja uskoi työhönsä”, hän sanoo. “Hän kuoli Tuusulassa veljensä luona vuoden 1872 viimeisenä päivänä, vain kolmenkymmenenkahdeksan vuoden ikäisenä.” Perimätiedon mukaan hänen viimeiset sanansa olivat: “Minä elän.”',
        translation: 'O Pentti conta que, quando o romance saiu, o crítico de mais prestígio da época o arrasou como grosseiro e inculto, e o escritor não teve em vida um reconhecimento de verdade. “Kivi deve ter sofrido com isso mais do que alguém sabia, pois era pobre e doente e acreditava na própria obra”, ele diz. “Morreu em Tuusula, na casa do irmão, no último dia de 1872, com apenas trinta e oito anos.” Segundo a tradição, suas últimas palavras foram: “Eu vivo.”',
        choices: [
          { text: '“Mitä lienee tarkoittaa tuossa lauseessa?”', translation: '“O que quer dizer ‘lienee’ nessa frase?”', next: 'lienee' },
          { text: 'Katsoa koululaisten esitystä.', translation: 'Assistir à encenação dos estudantes.', next: 'esitys' },
        ],
      },
      lienee: {
        emoji: '🤔',
        text: '“Se on potentiaali, vanha tapaluokka”, Pentti selittää. “Kun sanon, että Kivi lienee kärsinyt, en väitä tietäväni sitä, koska hän ei kirjoittanut siitä suoraan, mutta pidän sitä hyvin todennäköisenä.” Hän lisää, että potentiaalia käytetään nykyään lähinnä kirjakielessä ja virallisissa teksteissä, mutta verbistä olla sitä kuulee joskus arkipuheessakin, usein leikillisesti. “Lienet nälkäinen, kun olet seissyt täällä tunnin”, hän sanoo Linulle ja ojentaa hänelle pullan.',
        translation: '“É o potencial, um modo verbal antigo”, explica o Pentti. “Quando digo que Kivi ‘lienee kärsinyt’ (deve ter sofrido), não afirmo que sei, porque ele não escreveu sobre isso diretamente, mas considero muito provável.” Ele acrescenta que o potencial hoje se usa sobretudo na língua escrita e em textos oficiais, mas que com o verbo “olla” às vezes se ouve também no dia a dia, muitas vezes de brincadeira. “Você deve estar com fome, depois de uma hora em pé aqui”, ele diz ao Linu, estendendo-lhe um pão doce.',
        choices: [{ text: 'Katsoa koululaisten esitystä pulla kädessä.', translation: 'Assistir à encenação com o pão doce na mão.', next: 'esitys' }],
      },
      esitys: {
        emoji: '🎭',
        text: 'Koululaiset esittävät kohtauksen, jossa veljet istuvat Jukolan pihalla ja kiistelevät siitä, lähtevätkö he lukkarin luo vai metsään. Juhania esittävä poika huutaa niin kovaa, että pihan harakat lentävät pois, ja yleisö nauraa. Pentti kuiskaa Linulle, että juuri tämä sekoitus kiivautta, huumoria ja hellyyttä tekee kirjasta elävän, vaikka sen kieli on yli sata vuotta vanhempaa kuin katsojien. Esityksen jälkeen opettaja kysyy, haluaisiko vieras sanoa jotain nuorille.',
        translation: 'Os estudantes encenam a cena em que os irmãos estão sentados no pátio de Jukola discutindo se vão até o sacristão ou para a floresta. O menino que faz o Juhani grita tão alto que as pegas do pátio voam para longe, e o público ri. O Pentti cochicha para o Linu que é justamente essa mistura de fúria, humor e ternura que mantém o livro vivo, mesmo com a língua mais de um século mais velha que a dos espectadores. Depois da cena, a professora pergunta se o visitante gostaria de dizer algo aos jovens.',
        choices: [
          { text: 'Lausua romaanin ensimmäinen virke ulkomuistista.', translation: 'Recitar de cor a primeira frase do romance.', next: 'final_bom' },
          { text: 'Kieltäytyä kohteliaasti ja kiittää.', translation: 'Recusar educadamente e agradecer.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Linu astuu esiin ja lausuu hitaasti, pysähtyen pilkkujen kohdalla kuin Pentti opetti: “Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella rinteellä, liki Toukolan kylää.” Koululaiset taputtavat, ja Juhania esittänyt poika sanoo, että pingviini lausui sen paremmin kuin heidän opettajansa. Pentti kirjoittaa Linun kirjaan omistuskirjoituksen: “Lukemaan oppinut ei ole koskaan yksin.” Kotimatkalla Linu ajattelee Kiven viimeisiä sanoja ja sitä, kuinka ne ovat osoittautuneet todeksi.',
        translation: 'O Linu se adianta e recita devagar, parando nas vírgulas como o Pentti ensinou: “A casa de Jukola, no sul da Tavástia, fica na encosta norte de um morro, perto da aldeia de Toukola.” Os estudantes aplaudem, e o menino que fez o Juhani diz que o pinguim recitou melhor que a professora deles. O Pentti escreve uma dedicatória no livro do Linu: “Quem aprendeu a ler nunca está sozinho.” Na volta, o Linu pensa nas últimas palavras de Kivi e em como elas se provaram verdadeiras.',
        ending: { tone: 'bom', title: '“Minä elän”', message: 'Você entendeu a primeira frase de Kivi, o antigo “liki” e o potencial “lienee” — e recitou o clássico na casa onde o autor nasceu.' },
      },
      final_neutro: {
        emoji: '🍂',
        text: 'Linu kiittää ja sanoo, ettei hän vielä uskalla puhua suomeksi niin monen kuulijan edessä. Opettaja hymyilee ymmärtäväisesti, ja koululaiset lähtevät bussiin. Pentti antaa hänelle kirjan mukaan ja sanoo, että ensi vuonna hän voi lukea sen alun täällä ääneen. Linu kävelee pellon laitaa asemalle ja lukee ensimmäisen virkkeen yhä uudelleen itsekseen.',
        translation: 'O Linu agradece e diz que ainda não tem coragem de falar finlandês na frente de tanta gente. A professora sorri com compreensão, e os estudantes vão para o ônibus. O Pentti lhe dá o livro para levar e diz que no ano que vem ele pode ler o começo em voz alta ali. O Linu anda pela beira do campo até a estação, relendo sozinho a primeira frase de novo e de novo.',
        ending: { tone: 'neutro', title: 'Para o ano que vem', message: 'Você entendeu Kivi e o potencial, mas ainda não teve coragem de recitar. No próximo dez de outubro, quem sabe.' },
      },
    },
  },
  {
    id: 'fi-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Ruislinnun laulu',
    emoji: '🌾',
    summary: 'No Dia da Poesia e do Verão, em Paltamo, terra natal de Eino Leino, o Linu passa a noite clara à beira do lago Oulujärvi entre versos de “Nocturne” e os provérbios de um velho agricultor.',
    cultural_context:
      'Eino Leino (1878–1926), nascido Armas Einar Leopold Lönnbohm em Paltamo, à beira do lago Oulujärvi, é um dos maiores poetas da Finlândia, autor dos “Helkavirsiä” (1903) e do poema “Nocturne”. Seu aniversário, 6 de julho, é comemorado com bandeiras como o Dia de Eino Leino, dia da poesia e do verão.',
    start: 'start',
    glossary: [
      ['ruislintu', 'codornizão, a ave que canta à noite nos campos de centeio'],
      ['tähkäpää', 'espiga'],
      ['täysi kuu', 'lua cheia'],
      ['yötön yö', 'noite sem noite, a noite clara do verão'],
      ['oma maa mansikka, muu maa mustikka', 'a nossa terra é morango, a dos outros é mirtilo (não há lugar como o nosso)'],
      ['joka kuuseen kurkottaa, se katajaan kapsahtaa', 'quem mira o abeto cai no zimbro (quem quer demais acaba sem nada)'],
      ['parempi pyy pivossa kuin kymmenen oksalla', 'mais vale um pássaro na mão que dez no galho'],
      ['hiljaa hyvä tulee', 'devagar se vai ao longe'],
    ],
    nodes: {
      start: {
        emoji: '🇫🇮',
        text: 'Heinäkuun kuudentena päivänä Paltamossa liputetaan, sillä on Eino Leinon päivä, runon ja suven päivä. Oulujärven rannalla on pieni lava, jolle kyläläiset ovat kantaneet penkkejä, kukkia ja kahvipannun, ja ilta on niin valoisa, ettei kukaan edes ajattele pimeää. Linu istuu takarivissä, ja hänen viereensä istahtaa vanha maanviljelijä, jonka kädet ovat karheat kuin koivun tuohi. “Veikko”, mies sanoo ja ojentaa kätensä, “ja sinä lienet se ulkomaan lintu, josta kauppias kertoi.”',
        translation: 'No dia seis de julho, Paltamo está de bandeiras hasteadas, porque é o Dia de Eino Leino, dia da poesia e do verão. À beira do lago Oulujärvi há um pequeno palco para onde os moradores carregaram bancos, flores e um bule de café, e a noite está tão clara que ninguém nem pensa no escuro. O Linu está na última fila, e ao lado dele se senta um velho agricultor de mãos ásperas como casca de bétula. “Veikko”, diz o homem, estendendo a mão, “e você deve ser aquele pássaro estrangeiro de quem o dono da venda falou.”',
        choices: [
          { text: '“Taidan olla. Kuka täällä tänään esiintyy?”', translation: '“Devo ser. Quem se apresenta aqui hoje?”', next: 'leino' },
          {
            text: '“En ole lintu, olen pingviini, ja kauppias ei tunne minua.”',
            translation: '“Não sou pássaro, sou pinguim, e o dono da venda não me conhece.”',
            wrong: 'O Veikko usou o potencial “lienet” (você deve ser), um jeito brincalhão e antigo de supor algo sem afirmar com certeza. “Se ulkomaan lintu” é uma brincadeira carinhosa: o pássaro estrangeiro de quem o comerciante falou — ou seja, a notícia de que o Linu estava na cidade já correu. Dá para entrar no jogo!',
          },
        ],
      },
      leino: {
        emoji: '🎩',
        text: 'Veikko kertoo, että lavalle nousee pian paikallinen lukiolainen lausumaan Leinoa ja että hän itse on kuullut samat runot joka kesä lapsesta asti. “Leino syntyi täällä suuren perheen poikana ja lähti nuorena Helsinkiin, missä hän eli kuin runoilija elää: velkaa, rakkautta ja liikaa punssia”, hän sanoo nauraen. “Hän kirjoitti Helkavirret ja kymmeniä muita kirjoja, mutta kuoli köyhänä Tuusulassa, vain neljänkymmenenseitsemän vuoden ikäisenä.” Veikko lisää, että Leinon oikea nimi oli Lönnbohm ja että Leino oli kirjailijanimi.',
        translation: 'O Veikko conta que logo vai subir ao palco uma aluna do colégio local para recitar Leino, e que ele próprio ouve os mesmos poemas todo verão desde criança. “Leino nasceu aqui, filho de uma família grande, e foi jovem para Helsinque, onde viveu como vive um poeta: dívidas, amor e ponche demais”, ele diz, rindo. “Escreveu os Helkavirsiä e dezenas de outros livros, mas morreu pobre em Tuusula, com apenas quarenta e sete anos.” O Veikko acrescenta que o nome verdadeiro de Leino era Lönnbohm e que “Leino” era um nome de escritor.',
        choices: [{ text: 'Kuunnella runonlausuntaa.', translation: 'Ouvir a recitação.', next: 'nocturne' }],
      },
      nocturne: {
        emoji: '🌕',
        text: 'Nuori tyttö astuu lavalle, ja kun hän alkaa, jopa lokit tuntuvat vaikenevan: “Ruislinnun laulu korvissani, / tähkäpäiden päällä täysi kuu.” Kuu näkyy todella järven yllä kalpeana, vaikka taivas on vielä vaalea, ja jostain pellon laidalta kuuluu narinaa, joka toistuu tasaisesti. Veikko kallistaa päätään ja kuiskaa: “Kuuletko? Se on ruislintu itse. Leino ei keksinyt mitään, hän vain kuunteli tarkemmin kuin me muut.” Tyttö lausuu runon loppuun, ja hetken kukaan ei taputa, koska kukaan ei halua rikkoa hiljaisuutta.',
        translation: 'Uma moça sobe ao palco e, quando começa, até as gaivotas parecem se calar: “O canto do codornizão nos meus ouvidos, / sobre as espigas a lua cheia.” A lua aparece de fato sobre o lago, pálida, mesmo com o céu ainda claro, e de algum lugar na beira do campo vem um rangido que se repete, regular. O Veikko inclina a cabeça e cochicha: “Está ouvindo? É o próprio codornizão. O Leino não inventou nada; só escutou com mais atenção do que nós.” A moça recita o poema até o fim, e por um instante ninguém aplaude, porque ninguém quer quebrar o silêncio.',
        choices: [
          { text: '“Runo ja ilta ovat kuin samaa kangasta.”', translation: '“O poema e a noite parecem do mesmo tecido.”', next: 'sananlaskut' },
          {
            text: '“Runossa on siis talviyö, ja pellot ovat lumen peitossa.”',
            translation: '“Então o poema fala de uma noite de inverno, com os campos cobertos de neve.”',
            wrong: 'O poema fala de “tähkäpäät” (espigas) e do “ruislintu”, a ave que canta nos campos de centeio: é uma noite de VERÃO, com o cereal crescendo e a lua cheia por cima. Não há neve nenhuma — é justamente a noite clara de julho que o Linu está vivendo.',
          },
        ],
      },
      sananlaskut: {
        emoji: '☕',
        text: 'Kahvin ääressä Linu kertoo Veikolle, että hän on miettinyt jäävänsä Suomeen pidemmäksi aikaa ja että hänelle on tarjottu töitä sekä Helsingistä että pieneltä kyläkoululta Kainuusta. Veikko sekoittaa kahviaan pitkään ennen kuin vastaa. “Oma maa mansikka, muu maa mustikka, sanotaan, mutta sinulle kumpikin on muuta maata”, hän sanoo. “Joka kuuseen kurkottaa, se katajaan kapsahtaa, mutta toisaalta parempi pyy pivossa kuin kymmenen oksalla. Sinun on itse tiedettävä, kumpi on pyy ja kumpi kuusi.”',
        translation: 'Tomando café, o Linu conta ao Veikko que anda pensando em ficar mais tempo na Finlândia e que lhe ofereceram trabalho tanto em Helsinque quanto numa escolinha de aldeia em Kainuu. O Veikko mexe o café por um bom tempo antes de responder. “A nossa terra é morango e a dos outros é mirtilo, dizem, mas para você as duas são terra dos outros”, ele diz. “Quem mira o abeto cai no zimbro, mas por outro lado mais vale um pássaro na mão que dez no galho. Você é que tem que saber qual é o pássaro e qual é o abeto.”',
        choices: [
          { text: '“Te siis neuvotte minua olemaan ahnehtimatta ja punnitsemaan itse, mitä minulla jo on.”', translation: '“Então o senhor me aconselha a não ser ganancioso e a pesar eu mesmo o que já tenho.”', next: 'paatos' },
          {
            text: '“Minun pitäisi siis ryhtyä marjanpoimijaksi ja metsästäjäksi.”',
            translation: '“Então eu deveria virar colhedor de frutinhas e caçador.”',
            wrong: 'Os provérbios não falam de frutinhas nem de caça de verdade. “Joka kuuseen kurkottaa, se katajaan kapsahtaa” adverte contra a ambição demais; “parempi pyy pivossa kuin kymmenen oksalla” diz que mais vale o certo na mão. O Veikko pede que o Linu pese as ofertas e decida sozinho.',
          },
        ],
      },
      paatos: {
        emoji: '🌅',
        text: 'Veikko nyökkää ja sanoo, että hyvä neuvonantaja ei päätä toisen puolesta, vaan antaa sanat, joiden avulla toinen ajattelee. Aurinko painuu hetkeksi Oulujärven taakse, mutta ei laske kokonaan, ja vesi hehkuu oranssina keskiyöllä. Linu miettii Helsingin kiirettä ja kylän hiljaisuutta, isoja mahdollisuuksia ja pientä koulua, jossa jokainen oppilas tuntee jokaisen. “Hiljaa hyvä tulee”, Veikko sanoo lopuksi ja nousee penkiltä, “mutta kyllä se tulee.”',
        translation: 'O Veikko concorda e diz que um bom conselheiro não decide pelo outro, e sim dá as palavras com que o outro pensa. O sol afunda por um instante atrás do Oulujärvi, mas não se põe de todo, e a água brilha laranja à meia-noite. O Linu pensa na pressa de Helsinque e no silêncio da aldeia, nas grandes oportunidades e na escolinha onde cada aluno conhece todos os outros. “Devagar se vai ao longe”, diz o Veikko por fim, levantando-se do banco, “mas se chega.”',
        choices: [
          { text: 'Valita kyläkoulu Kainuusta.', translation: 'Escolher a escolinha em Kainuu.', next: 'final_bom' },
          { text: 'Jättää päätös myöhemmäksi ja nukkua yön yli.', translation: 'Deixar a decisão para depois e dormir sobre o assunto.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Linu kertoo Veikolle valitsevansa kyläkoulun, ja vanha mies puristaa hänen siipeään niin lujasti, että se melkein rutisee. “Sitten sinusta tulee meidän kainuulainen pingviinimme, ja ensi kesänä sinä lausut Leinoa tuolla lavalla”, hän sanoo. Kotimatkalla ruislintu narisee yhä pellon laidalla, ja Linu toistaa hiljaa säkeitä, jotka ovat jääneet soimaan hänen korviinsa. Hän ymmärtää, että runo ei ollut vain kaunis: se oli kartta tähän paikkaan.',
        translation: 'O Linu conta ao Veikko que vai escolher a escolinha da aldeia, e o velho aperta a asa dele com tanta força que ela quase range. “Então você vai ser o nosso pinguim de Kainuu, e no verão que vem vai recitar Leino naquele palco”, ele diz. No caminho de volta, o codornizão ainda range na beira do campo, e o Linu repete baixinho os versos que ficaram soando nos seus ouvidos. Ele entende que o poema não era só bonito: era um mapa daquele lugar.',
        ending: { tone: 'bom', title: 'O pinguim de Kainuu', message: 'Você entendeu Leino, o potencial “lienet” e os provérbios do Veikko — e escolheu seu lugar na Finlândia com as palavras dele.' },
      },
      final_neutro: {
        emoji: '🌙',
        text: 'Linu kiittää Veikkoa ja sanoo, että hän haluaa vielä miettiä. Veikko hymyilee ja toteaa, että sekin on viisautta, sillä hätäinen päätös on harvoin hyvä. Linu kävelee majataloon valoisassa yössä ja kuulee ruislinnun narinan kaukaa. Aamulla hänellä ei ole vieläkään vastausta, mutta säkeet ovat yhä hänen korvissaan.',
        translation: 'O Linu agradece ao Veikko e diz que ainda quer pensar. O Veikko sorri e observa que isso também é sabedoria, porque decisão apressada raramente é boa. O Linu caminha até a pousada na noite clara e ouve de longe o rangido do codornizão. De manhã ainda não tem resposta, mas os versos continuam nos seus ouvidos.',
        ending: { tone: 'neutro', title: 'Decisão adiada', message: 'Você entendeu o poema e os provérbios, mas a escolha ficou para depois. Hiljaa hyvä tulee.' },
      },
    },
  },
];
