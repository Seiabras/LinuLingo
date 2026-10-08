import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_DA } from './pronuncia';

/**
 * O dinamarquês padrão (rigsdansk), com a pronúncia de Copenhague, e o dinamarquês da minoria
 * dinamarquesa do Schleswig do Sul, na Alemanha. A escrita é a mesma; a voz das duas é a de Copenhague.
 */
export const VARIANTS_DA: LanguageVariant[] = [
  {
    code: 'da-DK',
    country: 'DNK',
    kind: 'dialeto',
    speechLocale: 'da-DK',
    ipa: (t) => lexiconIpa(t, IPA_DA),
    name: 'Dinamarquês da Dinamarca',
    flag: '🇩🇰',
    summary: 'O padrão do app: o rigsdansk, o dinamarquês padrão, com a pronúncia de Copenhague como referência.',
    card: {
      id: 'da-dk-c1',
      title: 'Por que o rigsdansk?',
      emoji: '🇩🇰',
      history:
        'O dinamarquês é a língua materna de cerca de 6 milhões de pessoas. A língua escrita padrão se firmou a partir do século XVI, com a imprensa e a primeira Bíblia completa em dinamarquês, de 1550, e tomou como base a fala da região de Copenhague e da Zelândia. A grande reforma de 1948 trouxe duas mudanças que você vê em qualquer texto antigo: os substantivos deixaram de ter inicial maiúscula e a letra “å” substituiu o “aa”. Hoje quem cuida da ortografia é o Conselho da Língua Dinamarquesa, o Dansk Sprognævn, que publica o dicionário ortográfico oficial, a Retskrivningsordbogen.',
      culture_tip:
        'Na Dinamarca, quase todo mundo se trata por “du” (você): o chefe, o médico, o professor. O “De” de cortesia hoje só aparece em contextos muito solenes. A gentileza está em outras coisas: agradecer pela comida ao levantar da mesa (“Tak for mad!”) e, ao reencontrar alguém, agradecer pelo último encontro (“Tak for sidst!”). E há uma palavra que explica o país: “hygge”, o aconchego de estar junto, com velas, café, bolo e conversa sem pressa.',
      grammar_why:
        'Quatro marcas do dinamarquês que o app ensina: (1) ordem V2: o verbo conjugado é sempre o segundo elemento da oração principal: “I dag rejser jeg til Aarhus”; (2) dois gêneros, “en” e “et”, com o artigo definido grudado no fim: “en bil → bilen”, “et hus → huset”; com adjetivo, o artigo vai para a frente e sai do fim: “den store bil” (diferente do norueguês e do sueco, que dizem “den store bilen”); (3) o stød, uma espécie de “trancada” na garganta que distingue palavras: “hun” (ela) × “hund” (cachorro); (4) as dezenas de base 20: “halvtreds” (50), “tres” (60), “firs” (80). E a fala engole muitas letras da escrita: “mad” (comida) soa quase como “mé”, com um “d” suave no fim.',
      grammar_examples: [
        ['I dag rejser jeg til Aarhus.', 'Hoje eu viajo para Aarhus.'],
        ['Jeg har en bil. Bilen er rød.', 'Eu tenho um carro. O carro é vermelho.'],
        ['Den store bil holder foran huset.', 'O carro grande está parado na frente da casa.'],
        ['Tak for mad!', 'Obrigado pela comida!'],
        ['Hvor er her hyggeligt!', 'Que aconchegante que é aqui!'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'da-DE',
    country: 'DEU',
    kind: 'dialeto',
    speechLocale: 'da-DK',
    ipa: (t) => lexiconIpa(t, IPA_DA),
    name: 'Dinamarquês do Schleswig do Sul',
    flag: '🇩🇪',
    summary:
      'O dinamarquês da minoria dinamarquesa do norte da Alemanha, em Flensburg e arredores: a mesma escrita do rigsdansk, aprendida na escola e falada ao lado do alemão.',
    card: {
      id: 'da-de-c1',
      title: 'O dinamarquês do outro lado da fronteira',
      emoji: '🤝',
      history:
        'Durante séculos, o ducado de Schleswig (em dinamarquês, Slesvig) esteve ligado à coroa dinamarquesa, com uma população que falava dinamarquês, alemão e frísio. Depois da guerra de 1864, a região passou à Prússia e, mais tarde, ao Império Alemão. Em 1920, depois da Primeira Guerra Mundial, houve plebiscitos: na zona norte, cerca de 75% votaram pela Dinamarca, e a região passou a ser dinamarquesa; na zona central, com Flensburg, cerca de 80% votaram pela Alemanha. A fronteira de 1920 é a de hoje, e ficaram minorias dos dois lados: a dinamarquesa no Schleswig do Sul, na Alemanha, e a alemã no sul da Jutlândia, na Dinamarca. Em 1955, as Declarações de Bonn e Copenhague garantiram os direitos das duas minorias, com um princípio famoso: pertencer à minoria é uma escolha livre, e as autoridades não podem contestá-la nem verificá-la.',
      culture_tip:
        'Estima-se que a minoria dinamarquesa tenha cerca de 50 mil pessoas. Ela tem escolas e creches próprias, igrejas, bibliotecas, clubes esportivos, um jornal diário, o Flensborg Avis (fundado em 1869), e um partido, o SSW, que nas eleições do estado de Schleswig-Holstein está dispensado da cláusula de barreira de 5%. Todo ano, no fim da primavera, a minoria se reúne nos “årsmøderne”, os encontros anuais, com discursos, música e muito bolo. Os lugares têm dois nomes: Flensburg é “Flensborg”, Schleswig é “Slesvig”, Eckernförde é “Egernførde”. E todo mundo, em alemão ou em dinamarquês, cumprimenta com “Moin!”, a qualquer hora do dia.',
      grammar_why:
        'A gramática é a do rigsdansk: é ele que se ensina nas escolas dinamarquesas da região e que se escreve no jornal. Muita gente da minoria fala alemão em casa e dinamarquês na escola e nas associações, então a fala do dia a dia traz marcas do alemão: palavras emprestadas (“handy” para o celular), decalques (“det giver” por “der er”, do alemão “es gibt”) e a troca de língua no meio da frase. O app ensina o rigsdansk; esta variante mostra como ele vive do outro lado da fronteira.',
      grammar_examples: [
        ['Moin! Hvordan går det?', 'Oi! Tudo bem?'],
        ['Jeg bor i Flensborg og går i dansk skole.', 'Eu moro em Flensburg e estudo numa escola dinamarquesa.'],
        ['Derhjemme taler vi tysk, men i skolen taler vi dansk.', 'Em casa a gente fala alemão, mas na escola a gente fala dinamarquês.'],
        ['Jeg føler mig både dansk og tysk.', 'Eu me sinto dinamarquês e alemão ao mesmo tempo.'],
        ['Vi ses til årsmøderne!', 'A gente se vê nos encontros anuais!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A escrita é a mesma do rigsdansk, e a voz do app é a de Copenhague. No Schleswig do Sul, muitos falantes cresceram com o alemão em casa, e a melodia, as vogais e o “r” costumam soar mais alemães.',
      'O stød, a “trancada” na garganta de palavras como “hund” (cachorro), costuma ser mais fraco ou faltar na fala de muitos falantes da região.',
      'O “d” suave [ð̞] de “mad” (comida) e “gade” (rua) às vezes sai mais firme, como um “d” comum, e as consoantes que o dinamarquês de Copenhague engole tendem a ser mais pronunciadas.',
      '“Moin!” (oi) soa [mɔɪ̯n]: é o cumprimento de toda a costa do norte da Alemanha, usado também do lado dinamarquês da fronteira.',
    ],
    vocab: [
      ['hej', 'moin', 'oi, olá', 'o cumprimento do norte da Alemanha, a qualquer hora do dia; também se ouve no sul da Jutlândia'],
      ['mobil, mobiltelefon', 'handy', 'celular', 'do alemão “Handy”; comum na fala, não na escrita formal'],
      ['der er', 'det giver', 'há, existe', 'decalque do alemão “es gibt”; na escola e no jornal se escreve “der er”'],
      ['glæde sig til', 'glæde sig på', 'estar ansioso por, aguardar com alegria', 'decalque do alemão “sich freuen auf”'],
      ['en aftale', 'en termin', 'hora marcada (no médico, no cabeleireiro)', 'do alemão “Termin”; no rigsdansk, “termin” é prazo, período'],
      ['Flensborg', 'Flensborg', 'Flensburg', 'a cidade tem nome dinamarquês e alemão; o mesmo vale para Slesvig (Schleswig), Egernførde (Eckernförde) e Frederiksstad (Friedrichstadt)'],
      ['et mindretal', 'mindretallet', 'uma minoria; a minoria', 'na região, “mindretallet” é a minoria dinamarquesa'],
      ['en sydslesviger', 'en sydslesviger', 'um morador do Schleswig do Sul', 'muitas vezes, alguém da minoria dinamarquesa'],
      ['dansksindet', 'dansksindet', 'que se sente dinamarquês', 'pertencer à minoria depende da escolha, não da origem: “sindelaget er frit” (a mentalidade é livre)'],
      ['grænsen', 'grænsen', 'a fronteira', 'a de 1920, entre o sul da Jutlândia e o Schleswig do Sul'],
      ['grænselandet', 'grænselandet', 'a região da fronteira', 'os dois lados juntos, com as duas minorias'],
      ['årsmøde', 'årsmøderne', 'encontro anual; os encontros anuais', 'a grande festa da minoria, com eventos em toda a região'],
      ['en dansk skole', 'en dansk skole', 'uma escola dinamarquesa', 'nas escolas da minoria, as aulas são em dinamarquês, e o alemão também é matéria obrigatória'],
      ['en dansk forening', 'en dansk forening', 'uma associação dinamarquesa', 'coral, clube esportivo, grupo de teatro: a vida da minoria passa pelas associações'],
    ],
    stories: [
      {
        id: 'da-de-h1',
        variant: 'da-DE',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Årsmøde i Flensborg',
        emoji: '🎪',
        summary: 'Linu visita a amiga Frederikke em Flensburg, no dia dos encontros anuais da minoria dinamarquesa, e descobre como é crescer entre duas línguas.',
        cultural_context:
          'Flensburg (Flensborg, em dinamarquês) fica a poucos quilômetros da fronteira com a Dinamarca. Durante séculos, a cidade pertenceu ao ducado de Schleswig, ligado à coroa dinamarquesa, e no século XVIII seus navios faziam comércio com as Índias Ocidentais Dinamarquesas, de onde vinham açúcar e rum. Hoje é o centro da minoria dinamarquesa na Alemanha, que todo ano, no fim da primavera, se reúne nos “årsmøderne”, os encontros anuais.',
        start: 'start',
        glossary: [
          ['Moin!', 'Oi! (o cumprimento do norte da Alemanha)'],
          ['Skynd dig!', 'Apresse-se! (imperativo reflexivo)'],
          ['vi skal til årsmøde', 'nós vamos ao encontro anual (futuro com “skal”)'],
          ['et mindretal', 'uma minoria'],
          ['derhjemme', 'em casa'],
          ['jeg føler mig', 'eu me sinto'],
          ['Sæt jer bare ned!', 'Podem se sentar! (para vocês)'],
          ['jeg glæder mig', 'estou ansioso, mal posso esperar'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: 'Linu står på banegården i Flensborg. Hans veninde Frederikke går i en dansk skole her i byen. Hun vinker: “Moin, Linu! I dag skal vi til årsmøde. Skynd dig, bussen kører om ti minutter!”',
            translation:
              'Linu está na estação de trem de Flensburg. A amiga dele, Frederikke, estuda numa escola dinamarquesa aqui na cidade. Ela acena: “Oi, Linu! Hoje a gente vai ao encontro anual. Apresse-se, o ônibus sai em dez minutos!”',
            choices: [
              { text: '“Jeg kommer! Hvor skal vi hen?”', translation: '“Estou indo! Aonde a gente vai?”', next: 'bus' },
              { text: '“Kan vi ikke lige se havnen først?”', translation: '“A gente não pode dar uma olhada no porto antes?”', next: 'havn' },
              {
                text: 'Linu bliver på banegården, fordi Frederikke ikke kan tale dansk.',
                translation: 'Linu fica na estação, porque a Frederikke não sabe falar dinamarquês.',
                wrong: 'Ela fala dinamarquês, sim: estuda numa escola dinamarquesa (“går i en dansk skole”) e acabou de convidar o Linu em dinamarquês.',
              },
            ],
          },
          havn: {
            emoji: '⚓',
            text: 'De løber ned til havnen. Frederikke peger på de gamle skibe: “I 1700-tallet hørte byen under den danske konge. Skibene sejlede til Vestindien og kom hjem med sukker og rom.” Så ser hun på uret: “Nu må vi skynde os!”',
            translation:
              'Eles correm até o porto. Frederikke aponta para os navios antigos: “No século XVIII, a cidade pertencia ao rei da Dinamarca. Os navios iam até as Índias Ocidentais e voltavam com açúcar e rum.” Aí ela olha o relógio: “Agora a gente tem que correr!”',
            choices: [{ text: 'De når bussen i sidste øjeblik.', translation: 'Eles pegam o ônibus no último minuto.', next: 'bus' }],
          },
          bus: {
            emoji: '🚌',
            text: 'I bussen sætter Linu sig ved vinduet. Frederikke fortæller: “Vi er et mindretal. Derhjemme taler vi tit tysk, men i skolen taler vi dansk. Jeg føler mig både dansk og tysk.”',
            translation:
              'No ônibus, Linu se senta perto da janela. Frederikke conta: “Nós somos uma minoria. Em casa a gente fala muitas vezes alemão, mas na escola a gente fala dinamarquês. Eu me sinto dinamarquesa e alemã ao mesmo tempo.”',
            choices: [
              { text: '“Spændende! Hvad skal vi lave til årsmødet?”', translation: '“Que interessante! O que a gente vai fazer no encontro?”', next: 'fest' },
              {
                text: '“Så du kan ikke lide dansk?”',
                translation: '“Então você não gosta de dinamarquês?”',
                wrong: 'Ela não disse isso: fala dinamarquês na escola e se sente dinamarquesa e alemã (“både dansk og tysk”).',
              },
            ],
          },
          fest: {
            emoji: '🇩🇰',
            text: 'Bussen stopper ved en stor park. Der er et telt, flag, musik og mange mennesker. En mand siger: “Velkommen! Sæt jer bare ned. Om lidt skal vi synge.” Frederikke spørger: “Vil du synge med, eller vil du hellere have noget at spise?”',
            translation:
              'O ônibus para num parque grande. Tem uma tenda, bandeiras, música e muita gente. Um homem diz: “Bem-vindos! Podem se sentar. Daqui a pouco a gente vai cantar.” Frederikke pergunta: “Você quer cantar junto ou prefere comer alguma coisa?”',
            choices: [
              { text: '“Jeg vil gerne synge med!”', translation: '“Quero cantar junto!”', next: 'final_sang' },
              { text: '“Jeg vil have kage!”', translation: '“Eu quero bolo!”', next: 'final_kage' },
            ],
          },
          final_sang: {
            emoji: '🎶',
            text: 'Alle får en sangbog. Linu kan ikke alle ordene, men han synger med alligevel. Bagefter siger Frederikke: “Næste år skal du komme igen!” Linu smiler: “Det vil jeg gerne. Jeg glæder mig allerede.”',
            translation:
              'Todo mundo ganha um livro de canções. Linu não sabe todas as palavras, mas canta junto mesmo assim. Depois, Frederikke diz: “No ano que vem você tem que voltar!” Linu sorri: “Eu quero, sim. Já estou ansioso.”',
            ending: {
              tone: 'bom',
              title: 'Um pinguim no årsmøde',
              message: 'Você acompanhou os modais e o futuro (“skal”, “vil”, “kan”, “må”), o imperativo (“Skynd dig!”) e os reflexivos (“sætter sig”, “føler mig”, “glæder mig”).',
            },
          },
          final_kage: {
            emoji: '🍰',
            text: 'Ved kaffebordet er der lagkage, wienerbrød og kaffe. Linu spiser fire stykker kage. Så bliver han træt og falder i søvn under talerne. “Vågn op, Linu!” griner Frederikke.',
            translation:
              'Na mesa do café tem bolo em camadas, folhados e café. Linu come quatro pedaços de bolo. Aí fica cansado e dorme durante os discursos. “Acorda, Linu!”, ri Frederikke.',
            ending: { tone: 'neutro', title: 'Bolo demais', message: 'Nos encontros anuais o bolo é bom, mas os discursos e as canções também fazem parte da festa. No ano que vem, cante junto!' },
          },
        },
      },
      {
        id: 'da-de-h2',
        variant: 'da-DE',
        level: 'B1.4',
        cefr: 'B1',
        title: 'Vikinger ved Slien',
        emoji: '🛡️',
        summary: 'Linu passa um dia perto da cidade de Schleswig com Jonas, que trabalha num museu, e conhece a cidade viking de Hedeby e a muralha do Dannevirke.',
        cultural_context:
          'Hedeby (Haithabu, em alemão), às margens do fiorde de Schlei (Slien), foi um dos centros comerciais mais importantes do norte da Europa na era viking. O Dannevirke é um sistema de muralhas de terra, pedra e madeira que atravessa a base da península da Jutlândia, construído e ampliado em várias etapas, as primeiras delas anteriores à era viking. Desde 2018, os dois formam juntos um Patrimônio Mundial da UNESCO. Uma lenda antiga atribui a muralha à rainha Thyra, mulher do rei Gorm, o Velho.',
        start: 'start',
        glossary: [
          ['en af de vigtigste', 'uma das mais importantes (superlativo)'],
          ['endnu ældre', 'ainda mais antigo (comparativo)'],
          ['Jonas, som arbejder…', 'Jonas, que trabalha… (relativo “som”)'],
          ['en vold, der går…', 'uma muralha que vai… (relativo “der”, só como sujeito)'],
          ['Thyra, hvis mand…', 'Thyra, cujo marido… (relativo “hvis”)'],
          ['Guiden fortæller, at…', 'O guia conta que… (discurso indireto)'],
          ['han spørger, om…', 'ele pergunta se…'],
          ['sagnet', 'a lenda'],
        ],
        nodes: {
          start: {
            emoji: '🏰',
            text: 'Linu er i Slesvig by. Han møder Jonas, som arbejder på et museum i nærheden. “Hedeby var en af de vigtigste handelsbyer i vikingetiden”, siger Jonas. “Og Dannevirke, som ligger lige ved siden af, er endnu ældre. Hvad vil du se først?”',
            translation:
              'Linu está na cidade de Schleswig. Ele encontra Jonas, que trabalha num museu ali perto. “Hedeby foi uma das cidades comerciais mais importantes da era viking”, diz Jonas. “E o Dannevirke, que fica bem ao lado, é ainda mais antigo. O que você quer ver primeiro?”',
            choices: [
              { text: '“Vikingebyen Hedeby!”', translation: '“A cidade viking de Hedeby!”', next: 'hedeby' },
              { text: '“Volden! Den er jo den ældste.”', translation: '“A muralha! Ela é a mais antiga, afinal.”', next: 'vold' },
              {
                text: 'Linu siger, at Hedeby er en ny by fra 1900-tallet.',
                translation: 'Linu diz que Hedeby é uma cidade nova, do século XX.',
                wrong: 'Jonas acabou de dizer o contrário: Hedeby foi uma das cidades comerciais mais importantes da era viking (“i vikingetiden”).',
              },
            ],
          },
          hedeby: {
            emoji: '🛖',
            text: 'Ved vandet står nogle vikingehuse, som arkæologerne har bygget op igen. Guiden fortæller, at købmændene kom langvejs fra, og at de handlede med sølv, pelse og glas. Det hus, Linu kan lide bedst, er et lille værksted, hvor en kvinde laver perler.',
            translation:
              'À beira da água há algumas casas vikings que os arqueólogos reconstruíram. O guia conta que os comerciantes vinham de longe e que negociavam prata, peles e vidro. A casa de que Linu mais gosta é uma pequena oficina, onde uma mulher faz contas de vidro.',
            choices: [{ text: '“Er volden langt herfra?”', translation: '“A muralha fica longe daqui?”', next: 'vold' }],
          },
          vold: {
            emoji: '⛰️',
            text: 'Dannevirke er en lang vold af jord, sten og træ, der går tværs over landet. Jonas forklarer, at de ældste dele er fra før vikingetiden, og at volden blev gjort større mange gange. “Ifølge sagnet var det dronning Thyra, hvis mand var Gorm den Gamle, der byggede den”, siger han.',
            translation:
              'O Dannevirke é uma muralha comprida de terra, pedra e madeira, que atravessa o país. Jonas explica que as partes mais antigas são de antes da era viking e que a muralha foi aumentada muitas vezes. “Segundo a lenda, foi a rainha Thyra, cujo marido era Gorm, o Velho, que a construiu”, diz ele.',
            choices: [
              { text: '“Hvem har ret: sagnet eller arkæologerne?”', translation: '“Quem tem razão: a lenda ou os arqueólogos?”', next: 'sagn' },
              {
                text: '“Så volden er yngre end Hedeby?”',
                translation: '“Então a muralha é mais nova que Hedeby?”',
                wrong: 'Não: Jonas disse que o Dannevirke é ainda mais antigo (“endnu ældre”) e que as partes mais antigas são de antes da era viking.',
              },
            ],
          },
          sagn: {
            emoji: '📜',
            text: 'Jonas griner: “Arkæologerne, selvfølgelig! De ældste dele er meget ældre end Thyra. Men sagnet er smukkere.” Så spørger han, om Linu vil se vikingemuseet, eller om han hellere vil have en kop kaffe først.',
            translation:
              'Jonas ri: “Os arqueólogos, é claro! As partes mais antigas são muito mais velhas que a Thyra. Mas a lenda é mais bonita.” Então ele pergunta se o Linu quer ver o museu viking ou se prefere tomar um café antes.',
            choices: [
              { text: '“Museet! Det er vigtigere end kaffe.”', translation: '“O museu! É mais importante que café.”', next: 'final_museum' },
              { text: '“En kop kaffe, tak. Jeg er træt.”', translation: '“Um café, por favor. Estou cansado.”', next: 'final_kaffe' },
            ],
          },
          final_museum: {
            emoji: '⛵',
            text: 'Museet er større, end Linu troede. Det flotteste, han ser, er resterne af et vikingeskib, som blev fundet i havnen ved Hedeby. “Det er den bedste dag, jeg har haft i Tyskland”, siger han til Jonas.',
            translation:
              'O museu é maior do que Linu imaginava. A coisa mais bonita que ele vê são os restos de um navio viking que foi encontrado no porto de Hedeby. “É o melhor dia que eu já tive na Alemanha”, diz ele ao Jonas.',
            ending: {
              tone: 'bom',
              title: 'Mais antigo, maior, melhor',
              message: 'Você acompanhou o comparativo e o superlativo (“ældre”, “større”, “den bedste”), os relativos “som”, “der” e “hvis” e o discurso indireto (“Jonas forklarer, at…”, “han spørger, om…”).',
            },
          },
          final_kaffe: {
            emoji: '☕',
            text: 'Kaffen er god, og de sidder længe og snakker. Men da de endelig kommer hen til museet, er det lukket. “Det var den længste kaffepause i vikingernes historie”, sukker Linu.',
            translation:
              'O café é bom, e eles ficam muito tempo sentados conversando. Mas, quando finalmente chegam ao museu, ele está fechado. “Foi a pausa para o café mais longa da história dos vikings”, suspira Linu.',
            ending: { tone: 'neutro', title: 'Museu fechado', message: 'O café foi bom, mas o navio viking vai ter de esperar. Da próxima vez, museu primeiro!' },
          },
        },
      },
      {
        id: 'da-de-h3',
        variant: 'da-DE',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Praktikant i Flensborg',
        emoji: '📧',
        summary: 'Linu consegue um estágio numa biblioteca dinamarquesa em Flensburg, responde a um e-mail formal do RH e enfrenta a repartição alemã onde precisa registrar o endereço.',
        cultural_context:
          'A minoria dinamarquesa tem em Flensburg a sua biblioteca central, o Dansk Centralbibliotek for Sydslesvig. Quem se muda para a Alemanha precisa registrar o novo endereço na prefeitura, em geral no “Bürgerbüro” (em dinamarquês, “borgerkontoret”), em até duas semanas, levando uma confirmação assinada pelo senhorio. Nos e-mails formais em dinamarquês, o tom é simples: “Kære” (prezado) ou até “Hej” no começo, “Med venlig hilsen” no fim, e “du” no lugar do antigo “De”.',
        start: 'start',
        glossary: [
          ['en praktikplads', 'uma vaga de estágio'],
          ['Vi bekræfter hermed, at…', 'Confirmamos por meio desta que…'],
          ['Vi beder dig venligst…', 'Pedimos a gentileza de que você…'],
          ['samt', 'bem como, e (formal)'],
          ['senest fredag', 'até sexta, no máximo'],
          ['vedhæftet', 'em anexo'],
          ['Med venlig hilsen', 'Atenciosamente'],
          ['melde sig', 'registrar-se'],
          ['sagsbehandleren', 'o funcionário que cuida do caso'],
          ['Deres', 'seu, sua (tratamento formal “De”, hoje raro)'],
        ],
        nodes: {
          start: {
            emoji: '📨',
            text: 'Linu har fået en praktikplads på Dansk Centralbibliotek for Sydslesvig i Flensborg. En dag får han en e-mail: “Kære Linu. Vi bekræfter hermed, at dit praktikophold begynder den 1. marts. Vi beder dig venligst sende os en kopi af dit pas samt dit svar senest fredag. Med venlig hilsen, Mette Holm, personaleafdelingen.”',
            translation:
              'Linu conseguiu uma vaga de estágio na biblioteca central dinamarquesa do Schleswig do Sul, em Flensburg. Um dia, ele recebe um e-mail: “Prezado Linu, confirmamos por meio desta que o seu estágio começa no dia 1º de março. Pedimos a gentileza de nos enviar uma cópia do seu passaporte, bem como a sua resposta, até sexta-feira. Atenciosamente, Mette Holm, departamento de pessoal.”',
            choices: [
              { text: 'Linu sætter sig og svarer med det samme.', translation: 'Linu se senta e responde na hora.', next: 'svar' },
              {
                text: 'Linu venter til næste måned med at svare.',
                translation: 'Linu espera até o mês que vem para responder.',
                wrong: 'O prazo é sexta-feira: “senest fredag” (até sexta, no máximo).',
              },
            ],
          },
          svar: {
            emoji: '⌨️',
            text: 'Linu åbner et nyt vindue og tænker sig om. Hvordan skal han indlede en formel e-mail på dansk?',
            translation: 'Linu abre uma janela nova e pensa um pouco. Como ele deve começar um e-mail formal em dinamarquês?',
            choices: [
              { text: '“Kære Mette Holm”', translation: '“Prezada Mette Holm”', next: 'mail' },
              { text: '“Højtærede Frue!”', translation: '“Honradíssima Senhora!”', next: 'frue' },
              {
                text: '“Hej skat!”',
                translation: '“Oi, querida!”',
                wrong: '“Skat” é “querida, amor” (e também “imposto”!): íntimo demais para o departamento de pessoal.',
              },
            ],
          },
          frue: {
            emoji: '🎩',
            text: 'Linu viser udkastet til sin nabo, Birthe. Hun griner og forklarer, at sådan skrev man for hundrede år siden. I dag skriver man bare “Kære” eller “Hej”, og man siger du, også til en chef.',
            translation:
              'Linu mostra o rascunho para a vizinha, Birthe. Ela ri e explica que era assim que se escrevia cem anos atrás. Hoje se escreve só “Kære” ou “Hej”, e se trata todo mundo por “du”, até um chefe.',
            choices: [{ text: 'Linu retter e-mailen.', translation: 'Linu corrige o e-mail.', next: 'mail' }],
          },
          mail: {
            emoji: '✍️',
            text: 'Linu skriver: “Kære Mette Holm. Tak for din mail. Jeg bekræfter hermed, at jeg begynder den 1. marts. Vedhæftet finder du en kopi af mit pas. Skal jeg selv melde min adresse til myndighederne? Med venlig hilsen, Linu.” To timer senere svarer Mette, at han skal melde sig på borgerkontoret inden for to uger, og at han skal have en bekræftelse fra sin udlejer med.',
            translation:
              'Linu escreve: “Prezada Mette Holm, obrigado pelo seu e-mail. Confirmo por meio desta que começo no dia 1º de março. Em anexo segue uma cópia do meu passaporte. Eu mesmo devo registrar o meu endereço junto às autoridades? Atenciosamente, Linu.” Duas horas depois, Mette responde que ele tem que se registrar no Bürgerbüro em até duas semanas e que precisa levar uma confirmação do senhorio.',
            choices: [{ text: 'Linu går på borgerkontoret.', translation: 'Linu vai ao Bürgerbüro.', next: 'kontor' }],
          },
          kontor: {
            emoji: '🏛️',
            text: 'På borgerkontoret trækker Linu et nummer. Sagsbehandleren taler tysk, men da hun hører, at han skal være praktikant på det danske bibliotek, skifter hun til dansk: “Jeg gik selv i dansk skole her i byen. Må jeg se Deres pas? Undskyld, dit pas! På et tysk kontor siger man jo Sie. Og har du bekræftelsen fra udlejeren?”',
            translation:
              'No Bürgerbüro, Linu tira uma senha. A atendente fala alemão, mas, quando ouve que ele vai ser estagiário na biblioteca dinamarquesa, muda para o dinamarquês: “Eu também estudei numa escola dinamarquesa aqui na cidade. Posso ver o passaporte do senhor? Desculpe, o seu passaporte! Numa repartição alemã a gente trata todo mundo por Sie. E você tem a confirmação do senhorio?”',
            choices: [
              { text: 'Linu giver hende papiret.', translation: 'Linu entrega o papel a ela.', next: 'final_ok' },
              { text: 'Linu leder i tasken, men papiret ligger derhjemme.', translation: 'Linu procura na bolsa, mas o papel ficou em casa.', next: 'final_glemt' },
            ],
          },
          final_ok: {
            emoji: '✅',
            text: 'Efter ti minutter er alt i orden. Sagsbehandleren giver ham en bekræftelse på tilmeldingen og siger: “Velkommen til Flensborg, og held og lykke med praktikken!” Samme aften skriver Linu en kort mail til Mette: “Nu er jeg officielt flensborger.”',
            translation:
              'Depois de dez minutos, está tudo certo. A atendente entrega a ele o comprovante de registro e diz: “Bem-vindo a Flensburg, e boa sorte no estágio!” Na mesma noite, Linu escreve um e-mail curto para a Mette: “Agora sou oficialmente morador de Flensburg.”',
            ending: {
              tone: 'bom',
              title: 'Oficialmente flensborger',
              message: 'Você acompanhou o registro formal (“Vi bekræfter hermed”, “Vi beder dig venligst”, “Vedhæftet finder du”, “Med venlig hilsen”) e a linguagem de repartição, dos dois lados da fronteira.',
            },
          },
          final_glemt: {
            emoji: '📄',
            text: 'Sagsbehandleren smiler venligt, men siger, at hun desværre ikke kan registrere ham uden bekræftelsen. Han må bestille en ny tid. “Bureaukrati er det samme på begge sider af grænsen”, tænker Linu.',
            translation:
              'A atendente sorri com simpatia, mas diz que infelizmente não pode registrá-lo sem a confirmação. Ele vai ter de marcar outro horário. “A burocracia é a mesma dos dois lados da fronteira”, pensa Linu.',
            ending: { tone: 'neutro', title: 'Volte com o papel', message: 'Faltou a confirmação do senhorio. Na repartição, confira os documentos antes de sair de casa!' },
          },
        },
      },
    ],
  },
];
