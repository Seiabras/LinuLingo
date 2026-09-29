import type { StorySeed } from '../types';

/** Histórias interativas em letão, C1.1 a C2 (lv-h38 … lv-h45): variação, notícia, ciência e literatura. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'lv-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Līvu krastā, kur valoda neaizmirst',
    emoji: '🌊',
    summary: 'Em Mazirbe, na Costa Livônia, o Linu chega para a Festa dos Livônios e conversa com uma professora que ensina uma língua que já não tem falantes nativos.',
    cultural_context:
      'Os livônios são um povo fínico que viveu por séculos nas costas do golfo de Riga; a língua deles é parente do estoniano e do finlandês, não do letão. A última pessoa que tinha o livônio como língua materna morreu em 2013, mas descendentes e estudiosos mantêm a língua viva em cursos, livros e canções. Em Mazirbe fica a Casa do Povo Livônio, inaugurada em 1939, e no começo de agosto acontece ali a Festa dos Livônios. A bandeira livônia é verde, branca e azul: a floresta, a areia e o mar.',
    start: 'start',
    glossary: [
      ['lībieši', 'os livônios'],
      ['lībiešu valoda', 'a língua livônia'],
      ['Līvu krasts', 'a Costa Livônia'],
      ['dzimtā valoda', 'língua materna'],
      ['atdzīvināt', 'revitalizar, fazer reviver'],
      ['somugru valodas', 'línguas fino-úgricas'],
      ['Tēriņtš!', 'Olá! (em livônio)'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Mazirbē, pie Līvu tautas nama, plīvoja zaļi baltzils karogs. Kāda sieviete, izdzirdējusi Linu jautājam ceļu, pasmaidīja un teica: «Tēriņtš! Tā sveicinās lībiski. Es te vasarās mācu bērniem lībiešu valodu.»',
        translation: 'Em Mazirbe, diante da Casa do Povo Livônio, tremulava uma bandeira verde, branca e azul. Uma mulher, ao ouvir o Linu pedir informação, sorriu e disse: «Tēriņtš! É assim que se cumprimenta em livônio. Eu ensino a língua livônia às crianças aqui no verão.»',
        choices: [
          { text: 'Linu jautāja, vai lībiešu valoda ir latviešu valodas dialekts.', translation: 'O Linu perguntou se o livônio é um dialeto do letão.', next: 'dialekts' },
          { text: 'Linu jautāja, kas vēl šodien runā lībiski.', translation: 'O Linu perguntou quem ainda fala livônio hoje.', next: 'runataji' },
        ],
      },
      dialekts: {
        emoji: '🧬',
        text: '«Nē, nepavisam», viņa atbildēja. «Lībiešu valoda pieder pie somugru valodām, tā ir radniecīga igauņu un somu valodai, nevis latviešu. Taču gadsimtiem ilgi abas valodas dzīvoja blakus, un latviešu valodā ir palikuši lībiešu vārdi, piemēram, «laiva» un «puika».»',
        translation: '«Não, de jeito nenhum», respondeu ela. «O livônio pertence às línguas fino-úgricas; é parente do estoniano e do finlandês, não do letão. Mas durante séculos as duas línguas viveram lado a lado, e no letão ficaram palavras livônias, como «laiva» (barco) e «puika» (garoto).»',
        choices: [{ text: 'Linu jautāja, kas vēl šodien runā lībiski.', translation: 'O Linu perguntou quem ainda fala livônio hoje.', next: 'runataji' }],
      },
      runataji: {
        emoji: '📚',
        text: '«Pēdējais cilvēks, kura dzimtā valoda bija lībiešu, nomira divtūkstoš trīspadsmitajā gadā», sieviete teica klusi. «Taču valoda nav mirusi, kamēr to mācās. Mums ir vārdnīcas, grāmatas un dziesmas, un daži jaunieši jau runā diezgan brīvi.»',
        translation: '«A última pessoa que tinha o livônio como língua materna morreu em 2013», disse a mulher baixinho. «Mas uma língua não morre enquanto alguém a aprende. Temos dicionários, livros e canções, e alguns jovens já falam com bastante fluência.»',
        choices: [
          { text: 'Linu jautāja, kā viņa pati iemācījusies valodu.', translation: 'O Linu perguntou como ela mesma aprendeu a língua.', next: 'vecmamina' },
          {
            text: 'Linu secināja, ka lībiešu valodu vairs neviens nemācās.',
            translation: 'O Linu concluiu que ninguém mais estuda o livônio.',
            wrong: 'Ela disse o contrário: a língua «nav mirusi, kamēr to mācās» (não morre enquanto alguém a aprende), há livros e canções, e alguns jovens já falam bem.',
          },
        ],
      },
      vecmamina: {
        emoji: '👵',
        text: '«Mana vecmāmiņa runāja lībiski ar savu māti, bet ar mani vairs ne», viņa stāstīja. «Padomju laikā piekrasti slēdza kā robežzonu, zvejnieku ciemi iztukšojās, un bērni mācījās tikai latviski un krieviski. Es valodu apguvu pieaugusi, no grāmatām un no vecajiem ierakstiem.»',
        translation: '«A minha avó falava livônio com a mãe dela, mas comigo já não», contou ela. «Na época soviética, a costa foi fechada como zona de fronteira, as aldeias de pescadores se esvaziaram, e as crianças só aprendiam letão e russo. Eu aprendi a língua adulta, pelos livros e pelas gravações antigas.»',
        choices: [
          { text: 'Linu palūdza iemācīt viņam dažus vārdus.', translation: 'O Linu pediu que ela lhe ensinasse algumas palavras.', next: 'vardi' },
          { text: 'Linu pateicās un devās uz jūru.', translation: 'O Linu agradeceu e foi para o mar.', next: 'final_neutro' },
        ],
      },
      vardi: {
        emoji: '✍️',
        text: 'Viņa uzrakstīja uz lapiņas dažus vārdus un paskaidroja, ka lībiešu valodā ir skaņas, kādu latviešu valodā nav, un ka tai ir arī tā sauktais lauztais tonis. Linu atkārtoja, cik labi varēja, un bērni, kas stāvēja apkārt, smējās un laboja viņa izrunu.',
        translation: 'Ela escreveu num papelzinho algumas palavras e explicou que no livônio há sons que o letão não tem, e que ele tem também o chamado tom quebrado. O Linu repetiu como pôde, e as crianças em volta riam e corrigiam a pronúncia dele.',
        choices: [{ text: 'Linu palika uz svētku koncertu.', translation: 'O Linu ficou para o concerto da festa.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Vakarā pie jūras skanēja dziesmas lībiski, un Linu saprata tikai dažus vārdus. Tomēr viņš juta, ka piedalās kaut kā svarīgā: valoda, kuru vēl pirms pusgadsimta uzskatīja par nolemtu, joprojām skanēja pār kāpām.',
        translation: 'À noite, junto ao mar, soavam canções em livônio, e o Linu entendia só algumas palavras. Mesmo assim, sentiu que participava de algo importante: uma língua que meio século antes era dada como condenada ainda soava sobre as dunas.',
        ending: { tone: 'bom', title: 'Tēriņtš, Līvõd rānda!', message: 'O Linu entendeu que o livônio não é letão, mas faz parte da história da Letônia — e que uma língua vive enquanto alguém a aprende.' },
      },
      final_neutro: {
        emoji: '🌅',
        text: 'Pie jūras bija tukšs un kluss. Linu domāja, cik daudz valodu pasaulē ir pazudušas bez neviena, kas tās pierakstītu. Viņš nožēloja, ka nebija palicis ilgāk un iemācījies vismaz vienu vārdu.',
        translation: 'Na praia estava vazio e silencioso. O Linu pensou em quantas línguas no mundo desapareceram sem ninguém que as registrasse. Arrependeu-se de não ter ficado mais e aprendido pelo menos uma palavra.',
        ending: { tone: 'neutro', title: 'Silêncio na praia', message: 'Boa conversa, mas faltou o melhor: ouvir e repetir as palavras de uma língua que resiste.' },
      },
    },
  },
  {
    id: 'lv-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Varpā, Sanpaulu štatā',
    emoji: '🇧🇷',
    summary: 'De volta ao Brasil, o Linu visita Varpa, no interior de São Paulo, onde descendentes de imigrantes letões ainda cantam em letão e misturam palavras portuguesas na conversa.',
    cultural_context:
      'Os primeiros imigrantes letões chegaram ao Brasil no fim do século XIX e se instalaram sobretudo em Santa Catarina. No começo dos anos 1920, cerca de dois mil letões batistas vieram para o interior de São Paulo e fundaram a colônia de Varpa, perto de Tupã. Durante décadas, a comunidade manteve a língua, os coros e as igrejas; hoje muitos descendentes falam só português, mas o letão ainda aparece nas canções, nas receitas e em palavras soltas no meio das frases.',
    start: 'start',
    glossary: [
      ['imigranti', 'imigrantes'],
      ['pēcteči', 'descendentes'],
      ['baptisti', 'batistas'],
      ['kolonija', 'colônia'],
      ['vecvecāki', 'avós'],
      ['aizguvums', 'empréstimo (palavra de outra língua)'],
      ['jaukt valodas', 'misturar as línguas'],
    ],
    nodes: {
      start: {
        emoji: '🌾',
        text: 'Varpā, mazā baznīcā starp kafijas laukiem, sirms kungs vārdā Pēteris sagaidīja Linu latviski: «Labdien, labdien! Nāciet iekšā, mums tūlīt sāksies kora mēģinājums.» Viņa latviešu valoda skanēja mazliet savādi, it kā no vecas grāmatas.',
        translation: 'Em Varpa, numa igrejinha entre cafezais, um senhor grisalho chamado Pēteris recebeu o Linu em letão: «Boa tarde, boa tarde! Entre, o ensaio do coro já vai começar.» O letão dele soava um pouco diferente, como se saísse de um livro antigo.',
        choices: [
          { text: 'Linu jautāja, kā Pēteris iemācījās latviešu valodu.', translation: 'O Linu perguntou como o Pēteris aprendeu o letão.', next: 'vesture' },
          { text: 'Linu apsēdās un klausījās kori.', translation: 'O Linu sentou e ouviu o coro.', next: 'koris' },
        ],
      },
      vesture: {
        emoji: '📜',
        text: '«No vecvecākiem», viņš atbildēja. «Viņi atbrauca divdesmitajos gados, kad Latvijā daudzi baptisti meklēja jaunu dzīvi. Mājās runājām latviski, skolā portugāliski. Mani mazbērni latviski saprot tikai dziesmās.»',
        translation: '«Com os meus avós», respondeu ele. «Eles vieram nos anos vinte, quando muitos batistas na Letônia procuravam uma vida nova. Em casa falávamos letão; na escola, português. Os meus netos só entendem letão nas canções.»',
        choices: [{ text: 'Linu gāja uz kora mēģinājumu.', translation: 'O Linu foi para o ensaio do coro.', next: 'koris' }],
      },
      koris: {
        emoji: '🎼',
        text: 'Koris dziedāja garīgu dziesmu četrās balsīs, un Linu pamanīja, ka jaunākie dziedātāji tekstu lasa no lapām, kur latviešu vārdiem blakus bija uzrakstīta izruna portugāliski. Pēc mēģinājuma kāda sieviete teica: «Nāciet uz kafiju, man ir cukura kūka un arī kukurūzas kūka!»',
        translation: 'O coro cantava um hino religioso a quatro vozes, e o Linu reparou que os cantores mais jovens liam a letra em folhas onde, ao lado das palavras letãs, a pronúncia estava escrita à moda portuguesa. Depois do ensaio, uma senhora disse: «Venham tomar café, tenho bolo de açúcar e também bolo de fubá!» (kukurūzas kūka, bolo de milho)',
        choices: [
          { text: 'Linu jautāja, kāpēc viņi joprojām dzied latviski.', translation: 'O Linu perguntou por que eles ainda cantam em letão.', next: 'kapec' },
          {
            text: 'Linu brīnījās, ka visi jaunie koristi runā latviski bez akcenta.',
            translation: 'O Linu se admirou de que todos os coristas jovens falassem letão sem sotaque.',
            wrong: 'O texto diz o contrário: os mais jovens liam a letra com a pronúncia escrita à moda portuguesa ao lado — sinal de que o letão já não é a língua do dia a dia deles.',
          },
        ],
      },
      kapec: {
        emoji: '💬',
        text: 'Pie kafijas galda sarunā jaucās abas valodas: «Mans mazdēls strādā Sanpaulu, un viņam ir laba alga», teica sieviete, un Pēteris piebilda, ka dažiem vārdiem, piemēram, «mandioka», latviski neesot bijis cita nosaukuma. «Dziedam, lai neaizmirstu, no kurienes nākam», viņa beigās teica.',
        translation: 'À mesa do café, as duas línguas se misturavam: «O meu neto trabalha em São Paulo e tem um bom salário», disse a senhora, e o Pēteris acrescentou que para certas palavras, como «mandioca», o letão deles nunca teve outro nome. «Cantamos para não esquecer de onde viemos», disse ela no fim.',
        choices: [
          { text: 'Linu apsolīja atvest viņiem latviešu grāmatas.', translation: 'O Linu prometeu trazer livros em letão para eles.', next: 'final_bom' },
          { text: 'Linu labojā viņu «nepareizo» latviešu valodu.', translation: 'O Linu corrigiu o letão «errado» deles.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📚',
        text: 'Pēc mēneša Linu atgriezās ar kasti bērnu grāmatu no Rīgas. Pēteris tās šķirstīja un teica, ka mazbērni varēs lasīt kopā ar viņu. «Valoda dzīvo, kamēr ir kāds, ar ko runāt», viņš sacīja.',
        translation: 'Um mês depois, o Linu voltou com uma caixa de livros infantis de Riga. O Pēteris os folheou e disse que os netos poderiam ler junto com ele. «Uma língua vive enquanto há com quem falar», disse.',
        ending: { tone: 'bom', title: 'Livros para Varpa', message: 'O Linu entendeu que a variedade de Varpa não é «erro», mas a história de uma comunidade — e ajudou a mantê-la viva.' },
      },
      final_neutro: {
        emoji: '😶',
        text: 'Pēteris klusēja un tad mierīgi teica, ka viņu valoda ir tāda, kādu viņi to saņēma no vecvecākiem pirms simt gadiem. Linu saprata, ka nebija izturējies pieklājīgi, un atvainojās.',
        translation: 'O Pēteris ficou em silêncio e então disse, calmo, que a língua deles é do jeito que a receberam dos avós cem anos atrás. O Linu entendeu que não tinha sido educado e pediu desculpas.',
        ending: { tone: 'neutro', title: 'Corrigir ou ouvir?', message: 'Uma língua de imigração guarda palavras antigas e empréstimos: ouvi-la vale mais do que corrigi-la.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'lv-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Barikāžu ugunskuri',
    emoji: '🔥',
    summary: 'No museu das barricadas de 1991, em Riga, o Linu ouve o relato de uma senhora que estava lá e aprende a contar, no modo relatado, o que outros viveram.',
    cultural_context:
      'Em janeiro de 1991, depois de ataques de forças especiais soviéticas em Vilnius e em Riga, dezenas de milhares de letões ergueram barricadas no centro de Riga para proteger o Conselho Supremo, a rádio, a televisão e outros prédios importantes. As pessoas passaram dias e noites em volta de fogueiras, e alguns defensores morreram nos ataques. O episódio, conhecido como «as barricadas», é lembrado todo ano em janeiro, e um museu na Cidade Velha conta essa história.',
    start: 'start',
    glossary: [
      ['barikādes', 'barricadas'],
      ['aizstāvji', 'defensores'],
      ['Augstākā padome', 'o Conselho Supremo'],
      ['esot bijis', 'teria sido, dizem que foi'],
      ['atstāstījuma izteiksme', 'modo relatado'],
      ['piemiņa', 'memória, lembrança'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Barikāžu muzejā Vecrīgā bija maz apmeklētāju. Pie vitrīnas ar vecu termosu stāvēja kāda vecāka kundze. «Šis termoss bija mans», viņa teica Linu. «Tajā janvārī es katru nakti vedu tēju vīriem pie ugunskuriem.»',
        translation: 'No Museu das Barricadas, na Cidade Velha, havia poucos visitantes. Diante de uma vitrine com uma garrafa térmica velha estava uma senhora idosa. «Esta garrafa térmica era minha», disse ela ao Linu. «Naquele janeiro, eu levava chá toda noite para os homens junto às fogueiras.»',
        choices: [
          { text: 'Linu palūdza, lai viņa pastāsta vairāk.', translation: 'O Linu pediu que ela contasse mais.', next: 'stasts' },
          { text: 'Linu jautāja muzeja darbiniecei, vai tā ir taisnība.', translation: 'O Linu perguntou à funcionária do museu se aquilo era verdade.', next: 'darbiniece' },
        ],
      },
      darbiniece: {
        emoji: '🗂️',
        text: 'Darbiniece pasmaidīja: «Jā, kundze ir mūsu brīvprātīgā. Daudzi priekšmeti šeit ir no cilvēkiem, kas paši stāvēja pie barikādēm.» Viņa ieteica Linu parunāt ar kundzi, jo neviens stāsts nav tik dzīvs kā aculiecinieka stāsts.',
        translation: 'A funcionária sorriu: «Sim, a senhora é nossa voluntária. Muitos objetos aqui vieram de pessoas que estiveram nas barricadas.» Ela aconselhou o Linu a conversar com a senhora, porque nenhum relato é tão vivo quanto o de uma testemunha.',
        choices: [{ text: 'Linu atgriezās pie kundzes.', translation: 'O Linu voltou até a senhora.', next: 'stasts' }],
      },
      stasts: {
        emoji: '🧣',
        text: '«Bija ļoti auksts», kundze stāstīja. «Pa radio aicināja cilvēkus nākt uz Doma laukumu. Lauku ļaudis atbrauca ar kravas mašīnām un traktoriem un ar tiem nobloķēja ielas. Neviens nezināja, vai naktī neuzbruks.»',
        translation: '«Fazia muito frio», contava a senhora. «Pelo rádio, chamavam as pessoas para a praça da Catedral. Gente do campo veio com caminhões e tratores e bloqueou as ruas com eles. Ninguém sabia se haveria um ataque à noite.»',
        choices: [
          { text: 'Linu jautāja, kā beidzās tās dienas.', translation: 'O Linu perguntou como terminaram aqueles dias.', next: 'beigas' },
          {
            text: 'Linu jautāja, kāpēc cilvēki bija atbraukuši ar kuģiem.',
            translation: 'O Linu perguntou por que as pessoas tinham vindo de navio.',
            wrong: 'A senhora falou de caminhões e tratores («kravas mašīnas un traktori»), usados para bloquear as ruas, não de navios.',
          },
        ],
      },
      beigas: {
        emoji: '🕯️',
        text: '«Divdesmitajā janvārī pie Iekšlietu ministrijas šāva, un bojā gāja cilvēki», viņa teica klusāk. «Pēc dažām nedēļām barikādes nojauca, bet mēs vairs nebijām tie paši. Tā gada augustā Latvijas neatkarību atzina arī citas valstis.»',
        translation: '«No dia vinte de janeiro atiraram perto do Ministério do Interior, e pessoas morreram», disse ela, mais baixo. «Algumas semanas depois, as barricadas foram desmontadas, mas nós já não éramos os mesmos. Em agosto daquele ano, outros países também reconheceram a independência da Letônia.»',
        choices: [
          { text: 'Linu pierakstīja stāstu, lai to pastāstītu draugiem.', translation: 'O Linu anotou a história para contá-la aos amigos.', next: 'atstasta' },
          { text: 'Linu pateicās un aizgāja, jo bija aizkustināts.', translation: 'O Linu agradeceu e saiu, porque estava emocionado.', next: 'final_neutro' },
        ],
      },
      atstasta: {
        emoji: '📝',
        text: 'Vakarā Linu rakstīja draugam: «Kāda kundze man stāstīja, ka tajā janvārī esot bijis ļoti auksts un ka cilvēki no laukiem esot atbraukuši ar traktoriem. Viņa katru nakti esot vedusi tēju aizstāvjiem.» Rakstot viņš saprata, kāpēc latviešu valodā ir īpaša forma citu cilvēku stāstiem.',
        translation: 'À noite, o Linu escreveu a um amigo: «Uma senhora me contou que naquele janeiro fazia muito frio e que gente do campo veio com tratores. Ela levava chá aos defensores toda noite.» Enquanto escrevia, entendeu por que o letão tem uma forma especial para as histórias dos outros.',
        choices: [{ text: 'Linu nosūtīja vēstuli.', translation: 'O Linu enviou a mensagem.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✉️',
        text: 'Draugs atbildēja, ka nekad nebija dzirdējis par barikādēm. Nākamajā gadā, divdesmitajā janvārī, abi stāvēja Doma laukumā pie piemiņas ugunskura un klusēja kopā ar citiem.',
        translation: 'O amigo respondeu que nunca tinha ouvido falar das barricadas. No ano seguinte, no dia vinte de janeiro, os dois estavam na praça da Catedral, junto à fogueira em memória, em silêncio junto com os outros.',
        ending: { tone: 'bom', title: 'A memória passada adiante', message: 'Com o modo relatado (esot bijis, esot atbraukuši), o Linu recontou com fidelidade o que ouviu de uma testemunha.' },
      },
      final_neutro: {
        emoji: '❄️',
        text: 'Ārā sniga. Linu gāja pa Vecrīgas ielām un domāja par ugunskuriem, kas te dega pirms daudziem gadiem. Viņš nožēloja, ka nebija pierakstījis kundzes vārdus.',
        translation: 'Lá fora nevava. O Linu andava pelas ruas da Cidade Velha pensando nas fogueiras que arderam ali muitos anos antes. Lamentou não ter anotado as palavras da senhora.',
        ending: { tone: 'neutro', title: 'Palavras que se vão', message: 'Emoção compreensível, mas o relato ficou sem registro. Recontar é também um jeito de lembrar.' },
      },
    },
  },
  {
    id: 'lv-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Roku rokā no Tallinas līdz Viļņai',
    emoji: '🤝',
    summary: 'Para um trabalho de jornalismo, o Linu escreve uma reportagem sobre a Via Báltica de 1989 e precisa separar os fatos confirmados das lembranças e dos boatos.',
    cultural_context:
      'Em 23 de agosto de 1989, cerca de dois milhões de pessoas deram as mãos numa corrente humana de mais de 600 quilômetros, ligando Tallinn, Riga e Vilnius. A data marcava os cinquenta anos do pacto Molotov-Ribbentrop, que dividira a região entre a União Soviética e a Alemanha nazista. O protesto pacífico, conhecido como Via Báltica, está no registro Memória do Mundo da UNESCO.',
    start: 'start',
    glossary: [
      ['Baltijas ceļš', 'a Via Báltica'],
      ['dzīvā ķēde', 'corrente humana'],
      ['aculiecinieks', 'testemunha ocular'],
      ['avots', 'fonte'],
      ['baumas', 'boatos'],
      ['esot piedalījušies', 'teriam participado, dizem que participaram'],
      ['apstiprināts fakts', 'fato confirmado'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Žurnālistikas kursa pasniedzēja uzdeva Linu uzrakstīt rakstu par Baltijas ceļu. «Atcerieties», viņa teica, «faktus rakstiet īstenības izteiksmē, bet to, ko Jums kāds stāstīja un ko nevar pārbaudīt, atstāstījuma izteiksmē.»',
        translation: 'A professora do curso de jornalismo pediu ao Linu que escrevesse uma matéria sobre a Via Báltica. «Lembre-se», disse ela, «escreva os fatos no modo indicativo, mas o que alguém lhe contou e não pode ser verificado, no modo relatado.»',
        choices: [
          { text: 'Linu vispirms devās uz bibliotēku meklēt avotus.', translation: 'O Linu foi primeiro à biblioteca procurar fontes.', next: 'biblioteka' },
          { text: 'Linu vispirms aprunājās ar kaimiņu, kurš tur bija bijis.', translation: 'O Linu primeiro conversou com um vizinho que esteve lá.', next: 'kaimins' },
        ],
      },
      biblioteka: {
        emoji: '📚',
        text: 'Bibliotēkā Linu atrada, ka ķēde stiepās vairāk nekā sešsimt kilometru un ka, pēc dažādiem avotiem, tajā piedalījās aptuveni divi miljoni cilvēku. Viņš pierakstīja: «Divdesmit trešajā augustā Baltijas valstu iedzīvotāji sadevās rokās.»',
        translation: 'Na biblioteca, o Linu descobriu que a corrente se estendia por mais de seiscentos quilômetros e que, segundo várias fontes, participaram cerca de dois milhões de pessoas. Ele anotou: «Em 23 de agosto, os habitantes dos países bálticos deram-se as mãos.»',
        choices: [{ text: 'Tad Linu aprunājās ar kaimiņu.', translation: 'Então o Linu conversou com o vizinho.', next: 'kaimins' }],
      },
      kaimins: {
        emoji: '👨‍🦳',
        text: 'Kaimiņš Jānis stāstīja, ka tovakar viņš ar ģimeni braucis uz Siguldas šoseju un ka ceļš bijis pilns ar mašīnām. «Mans brālis apgalvoja, ka ķēdi redzējis pat no lidmašīnas», viņš piebilda, «bet to es nevaru apstiprināt.»',
        translation: 'O vizinho Jānis contou que naquela noite tinha ido com a família até a rodovia de Sigulda e que a estrada estava cheia de carros. «O meu irmão afirmava ter visto a corrente até de um avião», acrescentou, «mas isso eu não posso confirmar.»',
        choices: [
          { text: 'Linu uzrakstīja: «Kāds aculiecinieks stāsta, ka ķēdi esot redzējis pat no lidmašīnas.»', translation: 'O Linu escreveu: «Uma testemunha conta que teria visto a corrente até de um avião.»', next: 'redaktors' },
          { text: 'Linu uzrakstīja: «Ķēde bija redzama no lidmašīnas.»', translation: 'O Linu escreveu: «A corrente era visível de um avião.»', next: 'kluda' },
        ],
      },
      kluda: {
        emoji: '✏️',
        text: 'Pasniedzēja apvilka teikumu ar sarkanu pildspalvu. «Vai tas ir apstiprināts fakts?» viņa jautāja. «Ja nē, lasītājam jāredz, ka tā ir kāda cilvēka liecība.» Linu izlaboja teikumu, lietojot atstāstījuma izteiksmi.',
        translation: 'A professora circulou a frase com caneta vermelha. «Isto é um fato confirmado?», perguntou. «Se não for, o leitor precisa ver que é o depoimento de alguém.» O Linu corrigiu a frase usando o modo relatado.',
        choices: [{ text: 'Linu iesniedza izlaboto rakstu.', translation: 'O Linu entregou a matéria corrigida.', next: 'redaktors' }],
      },
      redaktors: {
        emoji: '🗞️',
        text: 'Pasniedzēja izlasīja rakstu un teica, ka tas ir līdzsvarots: fakti ir pārbaudīti, bet atmiņas ir skaidri nošķirtas. «Tikai virsraksts vēl ir garlaicīgs», viņa piebilda. «Kā Jūs to nosauktu?»',
        translation: 'A professora leu a matéria e disse que estava equilibrada: os fatos verificados e as lembranças claramente separadas. «Só o título ainda está sem graça», acrescentou. «Como o senhor a chamaria?»',
        choices: [
          { text: '«Divi miljoni roku: Baltijas ceļš.»', translation: '«Dois milhões de mãos: a Via Báltica.»', next: 'final_bom' },
          {
            text: '«Baltijas ceļš: seši miljoni cilvēku no Eiropas.»',
            translation: '«A Via Báltica: seis milhões de pessoas da Europa.»',
            wrong: 'As fontes falam em cerca de dois milhões de pessoas, dos três países bálticos. Um título jornalístico não pode inventar números.',
          },
          { text: '«Raksts par vēsturi.»', translation: '«Uma matéria sobre história.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏅',
        text: 'Raksts tika publicēts kursa avīzē. Kaimiņš Jānis to izlasīja un atnesa Linu vecu fotogrāfiju: cilvēki uz šosejas, roku rokā, un saulriets aiz viņiem. «Tas ir fakts», viņš smaidot teica.',
        translation: 'A matéria foi publicada no jornal do curso. O vizinho Jānis a leu e trouxe ao Linu uma foto antiga: pessoas na rodovia, de mãos dadas, com o pôr do sol atrás. «Isto é um fato», disse ele, sorrindo.',
        ending: { tone: 'bom', title: 'Fato e memória', message: 'O Linu separou o que foi verificado do que foi contado — exatamente o que o modo relatado permite em letão.' },
      },
      final_neutro: {
        emoji: '📄',
        text: 'Pasniedzēja nopūtās: «Pareizi, bet neviens to neizlasīs.» Raksts palika labots, bet nepublicēts. Linu nolēma, ka nākamreiz padomās par virsrakstu jau pašā sākumā.',
        translation: 'A professora suspirou: «Correto, mas ninguém vai ler.» A matéria ficou corrigida, mas não publicada. O Linu decidiu que da próxima vez pensaria no título logo de início.',
        ending: { tone: 'neutro', title: 'Sem manchete', message: 'O conteúdo estava certo, mas no jornalismo o título também é parte do trabalho.' },
      },
    },
  },
  {
    id: 'lv-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Slepenā antena Irbenes mežā',
    emoji: '📡',
    summary: 'Na floresta de Irbene, o Linu visita o radiotelescópio que o exército soviético escondia e ajuda uma pesquisadora a escrever o resumo de um artigo científico.',
    cultural_context:
      'Perto de Ventspils, na floresta de Irbene, fica um radiotelescópio de 32 metros de diâmetro construído pelo exército soviético durante a Guerra Fria. A base era secreta e não aparecia nos mapas. Quando as tropas deixaram a Letônia, nos anos 1990, a antena foi entregue aos cientistas letões, que a restauraram; hoje ela é usada pelo Centro Internacional de Radioastronomia de Ventspils para observar o Sol, estrelas e galáxias.',
    start: 'start',
    glossary: [
      ['radioteleskops', 'radiotelescópio'],
      ['antena', 'antena'],
      ['kopsavilkums', 'resumo'],
      ['novērojumi', 'observações'],
      ['tika konstatēts', 'foi constatado'],
      ['var secināt', 'pode-se concluir'],
      ['pētniece', 'pesquisadora'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Pēc garas braukšanas pa meža ceļu starp priedēm parādījās milzīga balta antena. Pētniece Ilze sagaidīja Linu pie vārtiem. «Padomju laikā šī vieta nebija atzīmēta nevienā kartē», viņa stāstīja. «Tagad šeit strādā zinātnieki no dažādām valstīm.»',
        translation: 'Depois de muito tempo de carro por uma estrada na floresta, surgiu entre os pinheiros uma enorme antena branca. A pesquisadora Ilze recebeu o Linu no portão. «Na época soviética, este lugar não aparecia em mapa nenhum», contou. «Agora trabalham aqui cientistas de vários países.»',
        choices: [
          { text: 'Linu jautāja, kam antena bija paredzēta toreiz.', translation: 'O Linu perguntou para que a antena servia naquela época.', next: 'toreiz' },
          { text: 'Linu jautāja, ko ar to pēta tagad.', translation: 'O Linu perguntou o que se pesquisa com ela agora.', next: 'tagad' },
        ],
      },
      toreiz: {
        emoji: '🕵️',
        text: '«Precīzi to zina tikai tie, kas šeit strādāja», Ilze atbildēja. «Parasti uzskata, ka ar to varēja uztvert signālus no citām valstīm. Kad karaspēks aizgāja, daudz iekārtu bija izpostītas, un zinātniekiem visu vajadzēja atjaunot.»',
        translation: '«Com precisão, só sabem os que trabalharam aqui», respondeu a Ilze. «Em geral se considera que com ela era possível captar sinais de outros países. Quando as tropas foram embora, muitos equipamentos estavam destruídos, e os cientistas tiveram de restaurar tudo.»',
        choices: [{ text: 'Linu jautāja, ko ar to pēta tagad.', translation: 'O Linu perguntou o que se pesquisa com ela agora.', next: 'tagad' }],
      },
      tagad: {
        emoji: '☀️',
        text: 'Ilze paskaidroja, ka radioteleskops uztver radioviļņus no Saules, zvaigznēm un tālām galaktikām. «Šobrīd es rakstu rakstu par Saules novērojumiem», viņa teica. «Vai Jūs man palīdzētu ar kopsavilkumu? Tam jābūt īsam, precīzam un bezpersoniskam.»',
        translation: 'A Ilze explicou que o radiotelescópio capta ondas de rádio do Sol, das estrelas e de galáxias distantes. «Neste momento estou escrevendo um artigo sobre observações do Sol», disse. «O senhor me ajudaria com o resumo? Ele tem de ser curto, preciso e impessoal.»',
        choices: [
          { text: 'Linu piekrita un apsēdās pie datora.', translation: 'O Linu aceitou e sentou-se ao computador.', next: 'kopsavilkums' },
          {
            text: 'Linu teica, ka radioteleskops redz tikai Mēnesi.',
            translation: 'O Linu disse que o radiotelescópio só vê a Lua.',
            wrong: 'A Ilze disse que ele capta ondas de rádio do Sol, das estrelas e de galáxias distantes («no Saules, zvaigznēm un tālām galaktikām») — a Lua nem foi mencionada.',
          },
        ],
      },
      kopsavilkums: {
        emoji: '⌨️',
        text: 'Linu uzrakstīja: «Mēs skatījāmies uz Sauli, un mums likās, ka tā bija ļoti aktīva.» Ilze pasmaidīja un parādīja, kā to pārrakstīt zinātniskā stilā.',
        translation: 'O Linu escreveu: «Nós olhamos para o Sol, e nos pareceu que ele estava muito ativo.» A Ilze sorriu e mostrou como reescrever aquilo em estilo científico.',
        choices: [
          { text: '«Novērojumu laikā tika konstatēta paaugstināta Saules aktivitāte.»', translation: '«Durante as observações, foi constatada atividade solar elevada.»', next: 'final_bom' },
          { text: '«Saule bija forša un ļoti aktīva!»', translation: '«O Sol estava massa e muito ativo!»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🔭',
        text: '«Tieši tā», teica Ilze. «Pasīvā forma un precīzi termini.» Kopā viņi pabeidza kopsavilkumu: «No iegūtajiem datiem var secināt, ka…» Vakarā antena lēni pagriezās pret debesīm, un Linu jutās mazliet kā zinātnieks.',
        translation: '«Exatamente», disse a Ilze. «Voz passiva e termos precisos.» Juntos, terminaram o resumo: «Dos dados obtidos, pode-se concluir que…» À noite, a antena girou devagar para o céu, e o Linu se sentiu um pouco cientista.',
        ending: { tone: 'bom', title: 'Estilo científico', message: 'Passiva, impessoal e termos exatos: o Linu passou do relato pessoal para a linguagem da ciência.' },
      },
      final_neutro: {
        emoji: '😅',
        text: 'Ilze iesmējās: «Tas derētu vēstulei draugam, bet ne zinātniskam žurnālam.» Kopsavilkumu viņa pabeidza pati, un Linu saprata, ka katram tekstam ir savs stils.',
        translation: 'A Ilze riu: «Isso serviria para uma mensagem a um amigo, mas não para uma revista científica.» Ela mesma terminou o resumo, e o Linu entendeu que cada texto tem o seu estilo.',
        ending: { tone: 'neutro', title: 'Registro trocado', message: 'Gíria não cabe em artigo científico: ali se usa a passiva e o impessoal.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'lv-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Dainu skapja atvilktnes',
    emoji: '🗄️',
    summary: 'Na Biblioteca Nacional, diante do armário em que Krišjānis Barons guardou as dainas, o Linu tenta entender a linguagem antiga das quadras populares.',
    cultural_context:
      'Krišjānis Barons (1835–1923) passou décadas organizando as quadras populares letãs, as dainas, que milhares de pessoas enviaram de todo o país. Ele guardava cada texto em tirinhas de papel num armário de gavetas, o Dainu skapis, e publicou a coleção em vários volumes, com mais de duzentos mil textos, entre 1894 e 1915. O armário está no registro Memória do Mundo da UNESCO e hoje fica na Biblioteca Nacional da Letônia, em Riga.',
    start: 'start',
    glossary: [
      ['Dainu skapis', 'o armário das dainas'],
      ['atvilktne', 'gaveta'],
      ['papīra strēmele', 'tira de papel'],
      ['pantmērs', 'métrica (do verso)'],
      ['deminutīvs', 'diminutivo'],
      ['Dieviņš', 'Deus (diminutivo carinhoso)'],
      ['mūžu nodzīvot', 'viver a vida inteira'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Nacionālās bibliotēkas stikla telpā stāvēja neliels koka skapis ar daudzām atvilktnēm. Bibliotekāre paskaidroja, ka Barons tajā gadu desmitiem kārtojis dainas, kas uzrakstītas uz šaurām papīra strēmelēm. «Katra strēmele ir kāda cilvēka balss», viņa teica.',
        translation: 'Na sala de vidro da Biblioteca Nacional havia um armário de madeira não muito grande, cheio de gavetas. A bibliotecária explicou que nele Barons organizou por décadas as dainas escritas em tiras estreitas de papel. «Cada tira é a voz de alguém», disse ela.',
        choices: [
          { text: 'Linu palūdza parādīt kādu dainu.', translation: 'O Linu pediu que lhe mostrassem uma daina.', next: 'daina' },
          { text: 'Linu jautāja, kā Barons tās savāca.', translation: 'O Linu perguntou como Barons as coletou.', next: 'savaca' },
        ],
      },
      savaca: {
        emoji: '✉️',
        text: '«Viņš pats visas nepierakstīja», bibliotekāre stāstīja. «Tūkstošiem cilvēku — skolotāji, studenti, zemnieki — pierakstīja dziesmas savos ciemos un sūtīja tās Baronam. Viņš tās salīdzināja, sagrupēja pēc tēmām un meklēja variantus.»',
        translation: '«Ele não anotou todas pessoalmente», contou a bibliotecária. «Milhares de pessoas — professores, estudantes, camponeses — anotavam as canções nas suas aldeias e as enviavam a Barons. Ele as comparava, agrupava por temas e procurava as variantes.»',
        choices: [{ text: 'Linu palūdza parādīt kādu dainu.', translation: 'O Linu pediu que lhe mostrassem uma daina.', next: 'daina' }],
      },
      daina: {
        emoji: '📜',
        text: 'Bibliotekāre atvēra grāmatu un nolasīja: «Dziedot dzimu, dziedot augu, / Dziedot mūžu nodzīvoju.» Linu pamanīja, ka katrā rindā ir četras uzsvērtas zilbes un ka vārds «dziedot» atkārtojas kā refrēns.',
        translation: 'A bibliotecária abriu um livro e leu: «Cantando nasci, cantando cresci, / Cantando vivi a vida inteira.» O Linu reparou que cada verso tem quatro sílabas tônicas e que a palavra «dziedot» (cantando) se repete como um refrão.',
        choices: [
          { text: 'Linu jautāja, kāpēc «dziedot» ir tik svarīgs.', translation: 'O Linu perguntou por que «dziedot» é tão importante.', next: 'nozime' },
          {
            text: 'Linu secināja, ka daina stāsta par cilvēku, kurš nekad nav dziedājis.',
            translation: 'O Linu concluiu que a daina fala de alguém que nunca cantou.',
            wrong: 'É o oposto: «Dziedot dzimu, dziedot augu» — a pessoa nasceu, cresceu e viveu cantando. O particípio «dziedot» (cantando) acompanha a vida inteira.',
          },
        ],
      },
      nozime: {
        emoji: '💭',
        text: '«Divdabis «dziedot» parāda, ka dziesma pavada visu dzīvi, no dzimšanas līdz nāvei», bibliotekāre skaidroja. «Dainās dziesma nav izklaide, tā ir dzīves veids. Tāpēc arī Dziesmu svētki latviešiem nozīmē tik daudz.»',
        translation: '«O particípio «dziedot» mostra que o canto acompanha a vida inteira, do nascimento à morte», explicou a bibliotecária. «Nas dainas, a canção não é diversão, é um modo de vida. Por isso a Festa da Canção significa tanto para os letões.»',
        choices: [
          { text: 'Linu mēģināja pats sacerēt četrrindi dainu stilā.', translation: 'O Linu tentou compor uma quadra no estilo das dainas.', next: 'raksta' },
          { text: 'Linu nofotografēja skapi un devās prom.', translation: 'O Linu fotografou o armário e foi embora.', next: 'final_neutro' },
        ],
      },
      raksta: {
        emoji: '✍️',
        text: 'Linu ilgi skaitīja zilbes un beidzot uzrakstīja: «Peldēdams jūrā nācu, / Peldēdams dziesmu dzirdu.» Bibliotekāre izlasīja un pasmaidīja: «Pantmērs ir pareizs. Un divdabji — tieši kā dainās.»',
        translation: 'O Linu contou as sílabas por muito tempo e finalmente escreveu: «Nadando vim pelo mar, / Nadando ouço a canção.» A bibliotecária leu e sorriu: «A métrica está correta. E os particípios — igualzinho às dainas.»',
        choices: [{ text: 'Linu atstāja savu četrrindi bibliotēkai.', translation: 'O Linu deixou a sua quadra para a biblioteca.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Bibliotekāre ielika Linu papīra strēmelīti mazā kastītē pie ieejas, kur apmeklētāji atstāj savas dziesmas. «Barons priecātos», viņa teica. «Viņa skapis nekad nav bijis pabeigts, tas aug ar katru jaunu balsi.»',
        translation: 'A bibliotecária pôs a tirinha de papel do Linu numa caixinha perto da entrada, onde os visitantes deixam as suas canções. «Barons ficaria feliz», disse. «O armário dele nunca ficou pronto: ele cresce com cada nova voz.»',
        ending: { tone: 'bom', title: 'Uma tira a mais', message: 'O Linu leu a daina com atenção à métrica e aos particípios, e ainda compôs a sua própria quadra.' },
      },
      final_neutro: {
        emoji: '📷',
        text: 'Fotogrāfija sanāca skaista, bet vēlāk, skatoties uz to, Linu saprata, ka bija redzējis tikai skapi, nevis dziesmas tajā. Nākamajā dienā viņš nopirka dainu grāmatu.',
        translation: 'A foto ficou bonita, mas depois, olhando para ela, o Linu percebeu que tinha visto só o armário, não as canções dentro dele. No dia seguinte, comprou um livro de dainas.',
        ending: { tone: 'neutro', title: 'O armário por fora', message: 'A foto guarda o móvel; o tesouro são os versos. Vale voltar para lê-los com calma.' },
      },
    },
  },
  {
    id: 'lv-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Pastāvēs, kas pārvērtīsies',
    emoji: '🖋️',
    summary: 'Na casa de veraneio de Rainis e Aspazija, em Jūrmala, o Linu discute com uma guia o sentido de um dos versos mais citados da literatura letã.',
    cultural_context:
      'Rainis (Jānis Pliekšāns, 1865–1929) e Aspazija (Elza Rozenberga, 1865–1943) foram o casal mais célebre da literatura letã. Os dois participaram do movimento social do começo do século XX, viveram exilados na Suíça de 1905 a 1920 e voltaram para a Letônia independente. Rainis escreveu peças simbólicas sobre a liberdade do seu povo, e Aspazija, poesia e teatro. A casa de veraneio onde passaram os últimos verões, em Jūrmala, hoje é museu. O verso de Rainis «Pastāvēs, kas pārvērtīsies» (perdurará o que se transformar) é citado até hoje.',
    start: 'start',
    glossary: [
      ['vasarnīca', 'casa de veraneio'],
      ['trimdā', 'no exílio'],
      ['pārvērsties', 'transformar-se'],
      ['pastāvēt', 'perdurar, continuar existindo'],
      ['paradokss', 'paradoxo'],
      ['simbolisks', 'simbólico'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Jūrmalā, starp priedēm, stāvēja koka vasarnīca ar lielu verandu. Gide rādīja Raiņa rakstāmgaldu un Aspazijas cepuru kārbas. Uz sienas bija uzrakstīts: «Pastāvēs, kas pārvērtīsies.» «Kā Jūs šo rindu saprotat?» viņa jautāja Linu.',
        translation: 'Em Jūrmala, entre os pinheiros, havia uma casa de veraneio de madeira com uma grande varanda. A guia mostrava a escrivaninha de Rainis e as caixas de chapéu de Aspazija. Na parede estava escrito: «Pastāvēs, kas pārvērtīsies.» «Como o senhor entende este verso?», perguntou ela ao Linu.',
        choices: [
          { text: '«Paliks tas, kas spēj mainīties.»', translation: '«Fica aquilo que é capaz de mudar.»', next: 'paradokss' },
          { text: '«Viss beigsies, jo viss mainās.»', translation: '«Tudo vai acabar, porque tudo muda.»', next: 'parpratums' },
        ],
      },
      parpratums: {
        emoji: '🤔',
        text: '«Tā var izlasīt, bet Rainis domāja drīzāk pretējo», gide pasmaidīja. «Pastāvēs — tātad turpinās dzīvot. Bet ne tas, kas sastingst, gan tas, kas pārvēršas. Tas ir paradokss: lai paliktu, jāmainās.»',
        translation: '«Dá para ler assim, mas Rainis quis dizer antes o contrário», sorriu a guia. «Pastāvēs — ou seja, vai continuar vivendo. Mas não o que fica imóvel, e sim o que se transforma. É um paradoxo: para permanecer, é preciso mudar.»',
        choices: [{ text: 'Linu lūdza pastāstīt vairāk par Raini.', translation: 'O Linu pediu que ela contasse mais sobre Rainis.', next: 'trimda' }],
      },
      paradokss: {
        emoji: '♾️',
        text: '«Tieši tā», gide piekrita. «Tas ir paradokss: lai paliktu, jāmainās. Rainis to attiecināja gan uz cilvēku, gan uz tautu. Viņš pats daudz mainījās — no jaunības idejām līdz dzejai par brīvību.»',
        translation: '«Exatamente», concordou a guia. «É um paradoxo: para permanecer, é preciso mudar. Rainis aplicava isso tanto à pessoa quanto ao povo. Ele mesmo mudou muito — das ideias da juventude até a poesia sobre a liberdade.»',
        choices: [{ text: 'Linu lūdza pastāstīt vairāk par Raini.', translation: 'O Linu pediu que ela contasse mais sobre Rainis.', next: 'trimda' }],
      },
      trimda: {
        emoji: '🏔️',
        text: '«Pēc tūkstoš deviņsimt piektā gada notikumiem Rainis un Aspazija piecpadsmit gadus dzīvoja trimdā Šveicē», stāstīja gide. «Tur viņš uzrakstīja lugas, kurās vēsture un mīts saplūst ar brīvības ilgām. Kad viņi atgriezās, Latvija jau bija neatkarīga.»',
        translation: '«Depois dos acontecimentos de 1905, Rainis e Aspazija viveram quinze anos exilados na Suíça», contou a guia. «Lá ele escreveu peças em que a história e o mito se fundem com o anseio de liberdade. Quando voltaram, a Letônia já era independente.»',
        choices: [
          { text: 'Linu jautāja, vai Aspazija bija tikpat nozīmīga.', translation: 'O Linu perguntou se Aspazija era igualmente importante.', next: 'aspazija' },
          {
            text: 'Linu jautāja, kāpēc viņi Šveicē pavadīja tikai vienu vasaru.',
            translation: 'O Linu perguntou por que eles passaram só um verão na Suíça.',
            wrong: 'A guia disse «piecpadsmit gadus» — quinze anos de exílio, de 1905 a 1920, não um verão.',
          },
        ],
      },
      aspazija: {
        emoji: '👒',
        text: '«Protams», gide atbildēja. «Aspazija bija drosmīga dzejniece un dramaturģe, kas rakstīja par sievietes brīvību laikā, kad tas nebija pieņemts. Viņas luga «Sidraba šķidrauts» kļuva ļoti populāra. Daudzi viņus lasa kopā, jo viņu darbi viens otru papildina.»',
        translation: '«Claro», respondeu a guia. «Aspazija foi uma poeta e dramaturga corajosa, que escrevia sobre a liberdade da mulher numa época em que isso não era aceito. A peça dela «O véu de prata» ficou muito popular. Muitos os leem juntos, porque as obras de um completam as do outro.»',
        choices: [
          { text: 'Linu nopirka abu dzejas izlasi muzeja veikaliņā.', translation: 'O Linu comprou uma antologia de poemas dos dois na lojinha do museu.', next: 'final_bom' },
          { text: 'Linu nolēma, ka dzeja viņam tomēr ir par grūtu.', translation: 'O Linu decidiu que a poesia ainda era difícil demais para ele.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📖',
        text: 'Uz verandas Linu atvēra grāmatu un lasīja lēnām, ar vārdnīcu blakus. Daudz ko viņš vēl nesaprata, bet «pastāvēs, kas pārvērtīsies» tagad izklausījās kā solījums arī viņam pašam — pingvīnam, kurš mācās jaunu valodu.',
        translation: 'Na varanda, o Linu abriu o livro e leu devagar, com o dicionário ao lado. Muita coisa ele ainda não entendia, mas «perdurará o que se transformar» agora soava como uma promessa também para ele — um pinguim aprendendo uma língua nova.',
        ending: { tone: 'bom', title: 'Transformar-se para ficar', message: 'O Linu entendeu o paradoxo de Rainis e o levou para a própria vida: aprender é se transformar.' },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'Gide pamāja ar galvu un teica, ka arī latvieši Raini skolā lasa ar grūtībām. «Varbūt pēc gada pamēģiniet vēlreiz», viņa ieteica. Linu to pierakstīja.',
        translation: 'A guia assentiu e disse que até os letões leem Rainis com dificuldade na escola. «Talvez tente de novo daqui a um ano», sugeriu. O Linu anotou.',
        ending: { tone: 'neutro', title: 'Fica para depois', message: 'Poesia simbólica é difícil até para nativos. Voltar a ela com mais vocabulário faz parte do caminho.' },
      },
    },
  },
  {
    id: 'lv-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Lāčplēša ausis',
    emoji: '🐻',
    summary: 'Em Lielvārde, às margens do Daugava, o Linu ouve a história do herói Lāčplēsis, o matador de ursos, e descobre como uma epopeia do século XIX virou símbolo nacional.',
    cultural_context:
      'O poeta Andrejs Pumpurs (1841–1902) publicou em 1888 a epopeia «Lāčplēsis», sobre um herói filho de um homem e de uma ursa, que tinha orelhas de urso e uma força imensa. Na história, ele luta contra os invasores e, no fim, cai no rio Daugava abraçado ao Cavaleiro Negro; a lenda diz que a luta continua e que um dia ele vencerá. Pumpurs nasceu perto de Lielvārde, onde há um museu dedicado a ele. O dia 11 de novembro, Dia de Lāčplēsis, homenageia os soldados que lutaram pela independência da Letônia.',
    start: 'start',
    glossary: [
      ['eposs', 'epopeia'],
      ['varonis', 'herói'],
      ['Melnais bruņinieks', 'o Cavaleiro Negro'],
      ['lāča ausis', 'orelhas de urso'],
      ['iegrimt', 'afundar, cair (na água)'],
      ['simbols', 'símbolo'],
      ['Lāčplēša diena', 'o Dia de Lāčplēsis (11 de novembro)'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Lielvārdē, uz Daugavas krasta, stāvēja liels akmens. Vietējais skolotājs Andris paskaidroja Linu: «Leģenda stāsta, ka šeit Lāčplēsis cīnījies ar Melno bruņinieku. Abi esot iekrituši Daugavā, un cīņa vēl neesot beigusies.»',
        translation: 'Em Lielvārde, na margem do Daugava, havia uma grande pedra. O professor local, Andris, explicou ao Linu: «A lenda conta que aqui Lāčplēsis lutou com o Cavaleiro Negro. Os dois teriam caído no Daugava, e a luta ainda não teria terminado.»',
        choices: [
          { text: 'Linu jautāja, kas bija Lāčplēsis.', translation: 'O Linu perguntou quem era Lāčplēsis.', next: 'varonis' },
          { text: 'Linu jautāja, kāpēc Andris runā «esot» formā.', translation: 'O Linu perguntou por que o Andris falava com a forma «esot».', next: 'esot' },
        ],
      },
      esot: {
        emoji: '🧐',
        text: 'Andris iesmējās: «Jo tā ir leģenda! Es nevaru teikt, ka tas tiešām notika. Atstāstījuma izteiksme man ļauj stāstīt, bet neapgalvot.» Linu atzina, ka šī forma ir ļoti noderīga, runājot par mītiem.',
        translation: 'O Andris riu: «Porque é uma lenda! Não posso dizer que isso realmente aconteceu. O modo relatado me deixa contar sem afirmar.» O Linu admitiu que essa forma é muito útil para falar de mitos.',
        choices: [{ text: 'Linu jautāja, kas bija Lāčplēsis.', translation: 'O Linu perguntou quem era Lāčplēsis.', next: 'varonis' }],
      },
      varonis: {
        emoji: '💪',
        text: '«Pēc Andreja Pumpura eposa viņš bija lāča un cilvēka dēls», stāstīja Andris. «Viņam bija lāča ausis, un tajās slēpās viņa spēks. Kad ienaidnieki to uzzināja, Melnais bruņinieks cīņā viņam nocirta ausis, un abi iekrita upē.»',
        translation: '«Segundo a epopeia de Andrejs Pumpurs, ele era filho de uma ursa e de um homem», contou o Andris. «Tinha orelhas de urso, e nelas se escondia a sua força. Quando os inimigos descobriram isso, o Cavaleiro Negro, na luta, cortou-lhe as orelhas, e os dois caíram no rio.»',
        choices: [
          { text: 'Linu jautāja, kāpēc šis stāsts ir tik svarīgs latviešiem.', translation: 'O Linu perguntou por que essa história é tão importante para os letões.', next: 'simbols' },
          {
            text: 'Linu jautāja, kāpēc Lāčplēsis uzvarēja, nocērtot bruņiniekam ausis.',
            translation: 'O Linu perguntou por que Lāčplēsis venceu cortando as orelhas do cavaleiro.',
            wrong: 'Foi o contrário: o Cavaleiro Negro cortou as orelhas de Lāčplēsis («viņam nocirta ausis»), onde estava a força do herói — e os dois caíram no rio, sem vencedor.',
          },
        ],
      },
      simbols: {
        emoji: '🎖️',
        text: '«Pumpurs rakstīja laikā, kad latvieši meklēja savu vēsturi un savus varoņus», Andris paskaidroja. «Vēlāk Lāčplēsis kļuva par brīvības simbolu. Vienpadsmitajā novembrī, Lāčplēša dienā, pieminam karavīrus, kas cīnījās par Latvijas neatkarību, un Rīgā gar Daugavu deg tūkstošiem svecīšu.»',
        translation: '«Pumpurs escreveu numa época em que os letões procuravam a sua história e os seus heróis», explicou o Andris. «Mais tarde, Lāčplēsis virou símbolo de liberdade. Em 11 de novembro, o Dia de Lāčplēsis, lembramos os soldados que lutaram pela independência da Letônia, e em Riga milhares de velinhas ardem ao longo do Daugava.»',
        choices: [
          { text: 'Linu apsolīja izlasīt eposu oriģinālā.', translation: 'O Linu prometeu ler a epopeia no original.', next: 'final_bom' },
          { text: 'Linu teica, ka tā ir tikai pasaka bērniem.', translation: 'O Linu disse que era só um conto de fadas para crianças.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🕯️',
        text: 'Novembrī Linu stāvēja Rīgā pie Daugavas un lika uz krastmalas mūra savu svecīti. Kabatā bija Pumpura grāmata ar daudzām atzīmēm malās. Viņš domāja, ka katra tauta stāsta sev stāstus, lai atcerētos, kas tā ir.',
        translation: 'Em novembro, o Linu estava em Riga, junto ao Daugava, pondo a sua velinha no muro do cais. No bolso levava o livro de Pumpurs, cheio de anotações nas margens. Pensava que cada povo conta histórias a si mesmo para lembrar quem é.',
        ending: { tone: 'bom', title: 'Uma vela no cais', message: 'O Linu entendeu o mito, a sua gramática (o relatado das lendas) e o seu papel na memória de um país.' },
      },
      final_neutro: {
        emoji: '🤐',
        text: 'Andris brīdi klusēja un tad pieklājīgi teica, ka katrai tautai ir savas pasakas, kas nozīmē vairāk, nekā izskatās. Linu saprata, ka bija pasteidzies ar spriedumu.',
        translation: 'O Andris ficou um instante calado e depois disse, educado, que cada povo tem os seus contos, que significam mais do que parecem. O Linu entendeu que tinha julgado depressa demais.',
        ending: { tone: 'neutro', title: 'Mais que um conto', message: 'Uma epopeia nacional é também símbolo e memória — vale ouvir antes de julgar.' },
      },
    },
  },
];
