import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_NB } from './pronuncia';

/**
 * As duas escritas oficiais do norueguês: o bokmål, padrão do app, e o nynorsk, a variante.
 * Não há pronúncia oficial: a voz das duas é a do norueguês oriental urbano (Oslo).
 */
export const VARIANTS_NB: LanguageVariant[] = [
  {
    code: 'nb-NO',
    country: 'NOR',
    speechLocale: 'nb-NO',
    ipa: (t) => lexiconIpa(t, IPA_NB),
    name: 'Norueguês bokmål',
    flag: '🇳🇴',
    summary: 'O padrão do app: o bokmål, a escrita de 85 a 90% dos noruegueses, com a pronúncia do leste do país (Oslo) como referência.',
    card: {
      id: 'nb-no-c1',
      title: 'Por que o bokmål?',
      emoji: '🇳🇴',
      history:
        'O norueguês é a língua materna de cerca de 5 milhões de pessoas. Durante mais de quatro séculos, até 1814, a Noruega esteve unida à Dinamarca, e a língua escrita era o dinamarquês. Depois da separação, a escrita foi sendo “norueguesada” aos poucos, com as reformas de 1907, 1917 e 1938. Dessa linha nasceu o bokmål (“língua dos livros”), nome adotado em 1929 no lugar de “riksmål”. Hoje quem cuida da ortografia é o Conselho da Língua Norueguesa, o Språkrådet.',
      culture_tip:
        'Na Noruega, quase todo mundo se trata por “du” (você): o chefe, o médico, o professor. O “De” de cortesia hoje soa antiquado. A gentileza está em outras coisas: agradecer pela comida ao levantar da mesa (“Takk for maten!”) e, ao reencontrar alguém, agradecer pelo último encontro (“Takk for sist!”). E há duas palavras que explicam o país: “koselig” (aconchegante, gostoso de estar) e “friluftsliv” (a vida ao ar livre, com trilha, esqui e cabana no mato).',
      grammar_why:
        'Três marcas do norueguês que o app ensina: (1) ordem V2: o verbo conjugado é sempre o segundo elemento da oração principal; se a frase começa com outra coisa, o sujeito vai para depois do verbo: “I dag reiser jeg til Bergen”; (2) três gêneros, “en”, “ei” e “et”, com o artigo definido grudado no fim: “en bil → bilen”, “ei bok → boka”, “et hus → huset” (no bokmål, as palavras femininas também podem ir no masculino: “boken”); (3) dois tons, que distinguem palavras: “bønder” (fazendeiros) × “bønner” (feijões). Não existe pronúncia oficial; o app usa a do leste, de Oslo.',
      grammar_examples: [
        ['I dag reiser jeg til Bergen.', 'Hoje eu viajo para Bergen.'],
        ['Jeg har en bil. Bilen er rød.', 'Eu tenho um carro. O carro é vermelho.'],
        ['Boka ligger på bordet.', 'O livro está em cima da mesa.'],
        ['Takk for maten!', 'Obrigado pela comida!'],
        ['Så koselig det er her!', 'Que aconchegante que é aqui!'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'nn-NO',
    country: 'NOR',
    speechLocale: 'nb-NO',
    ipa: (t) => lexiconIpa(t, IPA_NB),
    name: 'Norueguês nynorsk',
    flag: '🇳🇴',
    summary:
      'A outra escrita oficial: o nynorsk (“novo norueguês”), feito a partir dos dialetos rurais e usado por 10 a 15% dos noruegueses, sobretudo no oeste, na terra dos fiordes.',
    card: {
      id: 'nn-no-c1',
      title: 'O norueguês dos fiordes',
      emoji: '🏔️',
      history:
        'O nynorsk é obra de Ivar Aasen, nascido em 1813 numa fazenda de Ørsta, no oeste. Nos anos 1840, ele percorreu o país anotando como as pessoas falavam e publicou uma gramática (1848) e um dicionário (1850) do que chamou de “landsmål”, a língua do campo. A ideia era escrever um norueguês que viesse dos dialetos e do nórdico antigo, e não do dinamarquês. Em 1885, o Parlamento deu ao landsmål o mesmo status da escrita de base dinamarquesa, e em 1929 ele passou a se chamar “nynorsk”.',
      culture_tip:
        'Cada município escolhe a sua forma escrita: nynorsk, bokmål ou “nøytral” (neutra). O nynorsk é a escrita da maioria das escolas em Vestland e em Møre og Romsdal e é forte nos vales do interior. Todo aluno do país aprende as duas escritas: a sua e a outra, o “sidemål”. A emissora pública, a NRK, tem de publicar pelo menos 25% do conteúdo em nynorsk, e em Oslo há um teatro inteiro que só encena em nynorsk, o Det Norske Teatret, fundado em 1912.',
      grammar_why:
        'A gramática de base é a mesma do bokmål (V2, forma definida no fim da palavra, dois tons), mas as formas mudam: “eg” no lugar de “jeg”, “ikkje” no lugar de “ikke”, palavras interrogativas com “kv-” (“kva”, “kven”, “kvifor”), o artigo “ein, ei, eit”, plural masculino em -ar (“bilar, bilane”), feminino em -er (“jenter”), passado dos verbos fracos em -a (“kasta”, “snakka”) e ditongos onde o bokmål tem vogal simples (“heim”, “draum”). O app ensina o bokmål; o nynorsk fica aqui para você ler placas, jornais e livros do oeste.',
      grammar_examples: [
        ['Eg heiter Linu. Kva heiter du?', 'Meu nome é Linu. Qual é o seu nome?'],
        ['Eg forstår ikkje.', 'Eu não entendo.'],
        ['Vi har to bilar. Bilane er raude.', 'Nós temos dois carros. Os carros são vermelhos.'],
        ['Korleis har du det?', 'Como você está?'],
        ['No går eg heim.', 'Agora eu vou para casa.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Não existe “pronúncia do nynorsk”: é uma escrita, e quem lê em voz alta costuma usar o próprio dialeto. A voz do app é a do bokmål de Oslo; no oeste, onde está a maioria dos usuários do nynorsk, você vai ouvir o “r” de garganta (uvular) do litoral.',
      '“eg” (eu) soa [eːɡ], com o “g” pronunciado; “ikkje” (não) soa [ˈɪçːə], com o chiado de “kj”, o mesmo de “kjøpe”.',
      'No nynorsk as perguntas começam com “kv-”, e o “k” se pronuncia: “kva” [kʋɑː], “kven” [kʋeːn]. No bokmål, o “h” de “hva”, “hvem” é mudo: [vɑː], [vɛmː].',
      'Mais ditongos: “heim” (casa, lar), “draum” (sonho), “høyre” (ouvir), onde o bokmål costuma ter vogal simples: “hjem”, “drøm”, “høre”.',
      'O nynorsk aceita o infinitivo em -a (“å vera”, “å snakka”), um reflexo de dialetos do oeste e do interior que terminam o verbo em “a”. No bokmål, o infinitivo termina sempre em -e.',
    ],
    vocab: [
      ['jeg', 'eg', 'eu'],
      ['ikke', 'ikkje', 'não'],
      ['hva', 'kva', 'o quê', 'o “hv-” do bokmål vira “kv-” no nynorsk'],
      ['hvem', 'kven', 'quem'],
      ['hvor', 'kvar', 'onde', 'no nynorsk, “kvar” também quer dizer “cada”'],
      ['hvordan', 'korleis', 'como'],
      ['hvorfor', 'kvifor', 'por quê'],
      ['hvit', 'kvit', 'branco'],
      ['noe', 'noko', 'algo, alguma coisa'],
      ['noen', 'nokon', 'alguém; alguns'],
      ['hun', 'ho', 'ela', 'no nynorsk, “ho” também substitui substantivo feminino: “Boka? Ho ligg der.”'],
      ['de, dem', 'dei', 'eles, elas', 'cuidado: no nynorsk, “de” quer dizer “vocês”'],
      ['dere', 'de, dykk', 'vocês', '“de” é o sujeito e “dykk” o objeto'],
      ['en, ei, et', 'ein, ei, eit', 'um, uma (artigo indefinido)'],
      ['å være', 'å vere', 'ser, estar', 'o particípio também muda: “har vært” × “har vore”'],
      ['å komme', 'å kome', 'vir', 'o nynorsk também aceita “komme”; no presente, “kommer” × “kjem”'],
      ['å si', 'å seie', 'dizer', 'no presente, “sier” × “seier”'],
      ['å gjøre', 'å gjere', 'fazer', 'no presente, “gjør” × “gjer”'],
      ['å se', 'å sjå', 'ver'],
      ['å bo', 'å bu', 'morar'],
      ['å høre', 'å høyre', 'ouvir'],
      ['å spørre', 'å spørje', 'perguntar'],
      ['å fortelle', 'å fortelje', 'contar, narrar'],
      ['å begynne', 'å byrje', 'começar'],
      ['å spise', 'å ete', 'comer', 'no presente, “spiser” × “et”'],
      ['snakket', 'snakka', 'falou', 'o nynorsk faz o passado de muitos verbos fracos em -a'],
      ['gikk', 'gjekk', 'foi, andou'],
      ['fikk', 'fekk', 'ganhou, recebeu'],
      ['hjem', 'heim', 'para casa', 'o bokmål também aceita “heim”'],
      ['hjemme', 'heime', 'em casa'],
      ['mye', 'mykje', 'muito'],
      ['også', 'òg', 'também', 'o bokmål também aceita “òg”'],
      ['bare', 'berre', 'só, apenas'],
      ['nå', 'no', 'agora'],
      ['fra', 'frå', 'de, desde (origem)'],
      ['selv', 'sjølv', 'mesmo, próprio (“eu mesmo”)'],
      ['sammen', 'saman', 'juntos'],
      ['derfor', 'difor', 'por isso'],
      ['hvis', 'viss, dersom', 'se (condição)', 'o bokmål também usa “dersom”'],
      ['biler, bilene', 'bilar, bilane', 'carros, os carros', 'plural masculino em -ar no nynorsk'],
      ['husene', 'husa', 'as casas', 'no singular é igual: “huset” nas duas escritas'],
      ['jente, jenta', 'jente, jenta', 'menina, a menina', 'igual nas duas escritas, também no plural: “jenter”'],
      ['boka', 'boka', 'o livro', 'igual; mas o bokmål aceita também “boken”, e o nynorsk só “boka”'],
      ['bøker', 'bøker', 'livros', 'igual nas duas escritas'],
      ['kirke', 'kyrkje', 'igreja'],
      ['skole', 'skule', 'escola'],
      ['vann', 'vatn', 'água'],
      ['uke', 'veke', 'semana'],
      ['syk', 'sjuk', 'doente', 'e “sykehus” × “sjukehus” (hospital)'],
      ['melk', 'mjølk', 'leite'],
      ['drøm', 'draum', 'sonho'],
      ['kjærlighet', 'kjærleik', 'amor', 'o sufixo “-het” do bokmål costuma virar “-leik”, “-dom” ou “-skap”: “frihet” × “fridom”'],
      ['hyggelig', 'hyggeleg', 'simpático, agradável', 'o “-lig” do bokmål vira “-leg”: “vanlig” × “vanleg”'],
    ],
    stories: [
      {
        id: 'nb-nn-h1',
        variant: 'nn-NO',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Ein dag på Voss',
        emoji: '🚆',
        summary: 'Linu pega o trem de Bergen para Voss, visita uma igreja medieval e uma cachoeira enorme com uma amiga e prova a comida da cidade.',
        cultural_context:
          'Voss fica no caminho da ferrovia entre Bergen e Oslo, a Bergensbanen, a pouco mais de uma hora de trem de Bergen. A igreja de pedra da cidade, a Vangskyrkja, foi consagrada em 1277, e a Tvindefossen, uma cachoeira de mais de cem metros, fica a poucos quilômetros ao norte. Em Voss, como em boa parte do oeste, escreve-se em nynorsk.',
        start: 'start',
        glossary: [
          ['Velkomen!', 'Bem-vindo! (bokmål: velkommen)'],
          ['Kva vil du gjere?', 'O que você quer fazer? (bokmål: Hva vil du gjøre?)'],
          ['ho er', 'ela é (bokmål: hun er)'],
          ['ein stor, kvit foss', 'uma cachoeira grande e branca (bokmål: en stor, hvit foss)'],
          ['vatnet', 'a água; o lago (bokmål: vannet)'],
          ['svolten', 'com fome (bokmål: sulten)'],
          ['dei høge fjella', 'as montanhas altas (bokmål: de høye fjellene)'],
          ['framleis', 'ainda (bokmål: fortsatt)'],
        ],
        nodes: {
          start: {
            emoji: '🚆',
            text: 'Linu tek toget frå Bergen til Voss. Turen tek litt over ein time. På stasjonen ventar venninna hans, Solveig: “Hei, Linu! Velkomen til Voss! Kva vil du gjere i dag?”',
            translation:
              'Linu pega o trem de Bergen para Voss. A viagem leva pouco mais de uma hora. Na estação, a amiga dele, Solveig, está esperando: “Oi, Linu! Bem-vindo a Voss! O que você quer fazer hoje?”',
            choices: [
              { text: '“Eg vil sjå kyrkja!”', translation: '“Quero ver a igreja!”', next: 'kyrkja' },
              { text: '“Eg vil sjå ein stor foss!”', translation: '“Quero ver uma cachoeira grande!”', next: 'foss' },
              {
                text: 'Linu tek toget tilbake, for Solveig er ikkje på stasjonen.',
                translation: 'Linu pega o trem de volta, porque a Solveig não está na estação.',
                wrong: 'A Solveig está lá, sim: “På stasjonen ventar venninna hans, Solveig” (na estação, a amiga dele, Solveig, está esperando).',
              },
            ],
          },
          kyrkja: {
            emoji: '⛪',
            text: 'Vangskyrkja ligg midt i sentrum, ved vatnet. Ho er ei gammal steinkyrkje frå 1200-talet. “Kyrkja er over sju hundre år gammal”, seier Solveig.',
            translation: 'A Vangskyrkja fica bem no centro, à beira do lago. Ela é uma igreja antiga de pedra, do século XIII. “A igreja tem mais de setecentos anos”, diz Solveig.',
            choices: [{ text: '“Ho er fin! Kan vi sjå ein foss òg?”', translation: '“Ela é linda! Podemos ver uma cachoeira também?”', next: 'foss' }],
          },
          foss: {
            emoji: '🏞️',
            text: 'Dei køyrer nordover med bil. Etter eit kvarter ser Linu ein stor, kvit foss: Tvindefossen. Vatnet fell over hundre meter ned.',
            translation: 'Eles vão de carro para o norte. Depois de quinze minutos, Linu vê uma cachoeira grande e branca: a Tvindefossen. A água cai de mais de cem metros de altura.',
            choices: [
              { text: '“Kan vi gå nærare?”', translation: '“Podemos chegar mais perto?”', next: 'naer' },
              {
                text: '“Fossen er liten, ikkje sant?”',
                translation: '“A cachoeira é pequena, não é?”',
                wrong: 'O texto diz o contrário: “ein stor, kvit foss” (uma cachoeira grande e branca), com mais de cem metros.',
              },
            ],
          },
          naer: {
            emoji: '💦',
            text: 'Dei går heilt bort til fossen. Det er kaldt og vått, og Linu får vatn over heile kroppen. “Eg er ein pingvin, eg elskar vatn!” ler han.',
            translation: 'Eles vão até bem perto da cachoeira. Está frio e molhado, e Linu fica com água pelo corpo todo. “Eu sou um pinguim, eu adoro água!”, ri ele.',
            choices: [{ text: '“No er eg svolten.”', translation: '“Agora estou com fome.”', next: 'mat' }],
          },
          mat: {
            emoji: '🍽️',
            text: 'På ein kafé i sentrum et dei middag. På menyen står det vossakorv med potetstappe. Solveig spør: “Vil du ha korv, eller vil du ha fisk?”',
            translation: 'Num café do centro, eles jantam. No cardápio tem vossakorv, a linguiça de Voss, com purê de batata. Solveig pergunta: “Você quer linguiça ou quer peixe?”',
            choices: [
              { text: '“Eg vil smake vossakorv!”', translation: '“Quero provar a vossakorv!”', next: 'final_korv' },
              { text: '“Eg vil ha fisk, takk!”', translation: '“Quero peixe, por favor!”', next: 'final_fisk' },
            ],
          },
          final_korv: {
            emoji: '🌄',
            text: 'Korven er god og salt. Etterpå går dei ein tur langs Vangsvatnet. Sola skin over dei høge fjella. “Eg kjem tilbake til Voss”, seier Linu.',
            translation: 'A linguiça é gostosa e salgada. Depois, eles dão uma volta pela beira do lago Vangsvatnet. O sol brilha sobre as montanhas altas. “Eu vou voltar a Voss”, diz Linu.',
            ending: { tone: 'bom', title: 'Um dia em Voss', message: 'Você acompanhou a ordem V2 (“Etterpå går dei”, “På menyen står det”) e os adjetivos (“ein stor, kvit foss”, “dei høge fjella”), tudo em nynorsk.' },
          },
          final_fisk: {
            emoji: '🐟',
            text: 'Kafeen har dessverre ikkje fisk i dag. Linu et ei skål suppe, men han er framleis svolten. “I morgon fiskar eg sjølv i vatnet!” seier han.',
            translation: 'Infelizmente, o café não tem peixe hoje. Linu toma uma tigela de sopa, mas continua com fome. “Amanhã eu mesmo vou pescar no lago!”, diz ele.',
            ending: { tone: 'neutro', title: 'Fome de pinguim', message: 'Sem peixe no cardápio! Da próxima vez, prove a vossakorv, a especialidade da cidade.' },
          },
        },
      },
      {
        id: 'nb-nn-h2',
        variant: 'nn-NO',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Frivillig på Førdefestivalen',
        emoji: '🎻',
        summary: 'Linu trabalha como voluntário num festival de música folclórica em Førde, precisa levar uma rabeca de Hardanger preciosa até o palco e escolher a próxima tarefa.',
        cultural_context:
          'A Førdefestivalen é um festival internacional de música folclórica que acontece todo verão em Førde, na região de Sunnfjord, no oeste da Noruega. A estrela da música tradicional do oeste é a “hardingfele”, a rabeca de Hardanger: além das quatro cordas tocadas com o arco, ela tem quatro ou cinco cordas por baixo, que vibram sozinhas e dão ao som o seu eco típico.',
        start: 'start',
        glossary: [
          ['frivillig', 'voluntário'],
          ['du må hente', 'você tem que buscar (bokmål: du må hente)'],
          ['Skund deg!', 'Apresse-se! (reflexivo; bokmål: Skynd deg!)'],
          ['ho er gammal', 'ela é velha (“ho” = a rabeca, palavra feminina)'],
          ['du kjem til å bli', 'você vai ser (futuro)'],
          ['Set deg!', 'Sente-se! (reflexivo; bokmål: Sett deg!)'],
          ['strengar', 'cordas (bokmål: strenger)'],
          ['kjøkenet', 'a cozinha (bokmål: kjøkkenet)'],
        ],
        nodes: {
          start: {
            emoji: '📋',
            text: 'Det er juli, og Linu er frivillig på Førdefestivalen, ein stor festival for folkemusikk. Sjefen, Ingrid, gjev han ein lapp: “I dag skal du hjelpe musikarane. Først må du hente ei hardingfele på hotellet. Skund deg, konserten byrjar klokka tolv!”',
            translation:
              'É julho, e Linu é voluntário na Førdefestivalen, um grande festival de música folclórica. A chefe, Ingrid, entrega a ele um bilhete: “Hoje você vai ajudar os músicos. Primeiro você tem que buscar uma rabeca de Hardanger no hotel. Apresse-se, o show começa ao meio-dia!”',
            choices: [
              { text: 'Linu spring til hotellet.', translation: 'Linu corre para o hotel.', next: 'hotell' },
              {
                text: 'Linu går rett til konserten for å høyre på musikken.',
                translation: 'Linu vai direto para o show para ouvir a música.',
                wrong: 'Primeiro ele tem que buscar a rabeca no hotel: “Først må du hente ei hardingfele på hotellet”. Sem a rabeca, nem tem show!',
              },
            ],
          },
          hotell: {
            emoji: '🏨',
            text: 'I resepsjonen sit ein eldre mann med ein felekasse. “Eg heiter Olav, og eg skal spele i dag”, seier han. “Kan du bere fela for meg? Ho er gammal og veldig verdifull, så du må vere forsiktig.”',
            translation: 'Na recepção está sentado um senhor com um estojo de rabeca. “Meu nome é Olav, e eu vou tocar hoje”, diz ele. “Você pode carregar a rabeca para mim? Ela é velha e muito valiosa, então você tem que tomar cuidado.”',
            choices: [
              { text: '“Sjølvsagt! Vi går til fots.”', translation: '“Claro! Vamos a pé.”', next: 'bere' },
              { text: '“Sjølvsagt! Skal vi ta drosje?”', translation: '“Claro! Vamos pegar um táxi?”', next: 'drosje' },
            ],
          },
          bere: {
            emoji: '🌧️',
            text: 'Linu ber fela gjennom sentrum. Det byrjar å regne, så han held kassen under jakka. Olav smiler: “Du kjem til å bli ein god frivillig.”',
            translation: 'Linu carrega a rabeca pelo centro. Começa a chover, então ele segura o estojo debaixo da jaqueta. Olav sorri: “Você vai ser um ótimo voluntário.”',
            choices: [{ text: 'Dei kjem fram til konsertsalen.', translation: 'Eles chegam à sala de concertos.', next: 'konsert' }],
          },
          drosje: {
            emoji: '🚕',
            text: 'Dei tek ein drosje, men han står fast i kø ved brua over Jølstra. “Vi må gå resten av vegen”, seier Olav. “Ta fela, og kom!”',
            translation: 'Eles pegam um táxi, mas ele fica preso no trânsito perto da ponte sobre o rio Jølstra. “Temos que fazer o resto do caminho a pé”, diz Olav. “Pegue a rabeca e venha!”',
            choices: [{ text: 'Dei spring til konsertsalen.', translation: 'Eles correm até a sala de concertos.', next: 'konsert' }],
          },
          konsert: {
            emoji: '⏱️',
            text: 'Dei kjem fram fem minutt før konserten. Ingrid seier: “Bra jobba! Set deg på første rad og lytt. Etter konserten må du hjelpe til på kjøkenet eller selje billettar.”',
            translation: 'Eles chegam cinco minutos antes do show. Ingrid diz: “Muito bem! Sente-se na primeira fila e escute. Depois do show, você tem que ajudar na cozinha ou vender ingressos.”',
            choices: [{ text: 'Linu set seg på første rad.', translation: 'Linu se senta na primeira fila.', next: 'musikk' }],
          },
          musikk: {
            emoji: '🎻',
            text: 'Olav spelar ein gammal slått, og Linu kjenner seg rørd. Etterpå forklarer Olav: “Hardingfela har fire strengar som du spelar på. Under dei ligg fire eller fem strengar til, og dei klingar med av seg sjølv.” Så spør Ingrid: “Kva vil du gjere no, Linu?”',
            translation:
              'Olav toca uma melodia antiga, e Linu fica emocionado. Depois, Olav explica: “A rabeca de Hardanger tem quatro cordas que você toca. Debaixo delas há mais quatro ou cinco cordas, e elas vibram sozinhas.” Então Ingrid pergunta: “O que você quer fazer agora, Linu?”',
            choices: [
              { text: '“Eg vil hjelpe til på kjøkenet.”', translation: '“Quero ajudar na cozinha.”', next: 'final_kjoken' },
              { text: '“Eg kan selje billettar.”', translation: '“Eu posso vender ingressos.”', next: 'final_billett' },
              {
                text: '“Så fela har berre fire strengar?”',
                translation: '“Então a rabeca só tem quatro cordas?”',
                wrong: 'O Olav disse que, debaixo das quatro cordas tocadas, há mais quatro ou cinco: “Under dei ligg fire eller fem strengar til”.',
              },
            ],
          },
          final_kjoken: {
            emoji: '🥣',
            text: 'På kjøkenet lagar dei rømmegraut til alle musikarane. Linu rører i gryta i to timar. Om kvelden kjem Olav og seier: “Neste år skal du lære å spele sjølv!”',
            translation: 'Na cozinha, eles fazem mingau de nata para todos os músicos. Linu mexe a panela por duas horas. À noite, Olav chega e diz: “No ano que vem, você vai aprender a tocar!”',
            ending: { tone: 'bom', title: 'Um convite para o palco', message: 'Você acompanhou os modais (“må”, “skal”, “kan”), o futuro com “kjem til å” e os reflexivos (“Skund deg!”, “Set deg!”), tudo em nynorsk.' },
          },
          final_billett: {
            emoji: '🎟️',
            text: 'Linu sel billettar, men han blandar saman to kassar med pengar, og Ingrid må telje alt på nytt. “Ikkje tenk på det”, seier ho. “I morgon skal du få ei enklare oppgåve.”',
            translation: 'Linu vende ingressos, mas mistura duas caixas de dinheiro, e a Ingrid tem que contar tudo de novo. “Não se preocupe”, diz ela. “Amanhã você vai ganhar uma tarefa mais fácil.”',
            ending: { tone: 'neutro', title: 'Contas trocadas', message: 'Nem todo voluntário nasce caixa. Amanhã tem outra chance!' },
          },
        },
      },
      {
        id: 'nb-nn-h3',
        variant: 'nn-NO',
        level: 'B1.2',
        cefr: 'B1',
        title: 'I fotspora til Ivar Aasen',
        emoji: '📜',
        summary: 'Linu vai a Ørsta, a cidade natal de Ivar Aasen, visita o museu dedicado ao criador do nynorsk e descobre por que ele percorreu o país anotando dialetos.',
        cultural_context:
          'Ivar Aasen nasceu em 1813 numa fazenda de Ørsta, em Sunnmøre. Ele criou o landsmål, que em 1929 passou a se chamar nynorsk, a partir dos dialetos que anotou pelo país. O Ivar Aasen-tunet, em Ørsta, é o centro cultural do nynorsk e fica junto da fazenda onde ele nasceu.',
        start: 'start',
        glossary: [
          ['då', 'quando (no passado; bokmål: da)'],
          ['han visste ikkje at…', 'ele não sabia que… (o “ikkje” antes do verbo na subordinada)'],
          ['han hadde lese', 'ele tinha lido (mais-que-perfeito)'],
          ['sjølv om', 'mesmo que, embora (bokmål: selv om)'],
          ['om du ikkje vil', 'se você não quiser'],
          ['vart fødd', 'nasceu (bokmål: ble født)'],
          ['garden', 'a fazenda (bokmål: gården)'],
          ['skodda', 'a neblina (bokmål: tåka)'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'Då Linu kom til Ørsta med bussen frå Ålesund, regna det. Han hadde lese om Ivar Aasen, men han visste ikkje at Aasen var fødd her. No ville han sjå Ivar Aasen-tunet, sjølv om det låg eit stykke utanfor sentrum.',
            translation:
              'Quando Linu chegou a Ørsta no ônibus de Ålesund, estava chovendo. Ele tinha lido sobre Ivar Aasen, mas não sabia que Aasen tinha nascido ali. Agora queria ver o Ivar Aasen-tunet, mesmo que ficasse um pouco fora do centro.',
            choices: [
              { text: 'Linu spurde ein mann på torget kvar tunet låg.', translation: 'Linu perguntou a um homem na praça onde ficava o museu.', next: 'vegen' },
              { text: 'Linu gjekk inn på ein kafé fordi det regna.', translation: 'Linu entrou num café porque estava chovendo.', next: 'kafe' },
              {
                text: 'Linu reiste tilbake, fordi han visste at Aasen ikkje var fødd i Ørsta.',
                translation: 'Linu voltou, porque sabia que Aasen não tinha nascido em Ørsta.',
                wrong: 'É o contrário: ele não sabia que Aasen tinha nascido ali (“han visste ikkje at Aasen var fødd her”), e agora queria justamente ver o museu.',
              },
            ],
          },
          vegen: {
            emoji: '🗺️',
            text: 'Mannen sa at tunet ikkje låg langt unna, men at vegen opp dit var bratt. “Om du ikkje vil gå, kan du ta drosje”, sa han. “Men når det sluttar å regne, er det fin utsikt over fjorden.”',
            translation: 'O homem disse que o museu não ficava longe, mas que a subida até lá era íngreme. “Se você não quiser ir a pé, pode pegar um táxi”, disse ele. “Mas, quando parar de chover, a vista do fiorde é bonita.”',
            choices: [
              { text: 'Linu gjekk til fots.', translation: 'Linu foi a pé.', next: 'bakken' },
              { text: 'Linu tok drosje.', translation: 'Linu pegou um táxi.', next: 'tunet' },
            ],
          },
          bakken: {
            emoji: '⛰️',
            text: 'Linu gjekk opp den bratte vegen. Då han var halvvegs, slutta det å regne, og han såg fjorden og dei høge fjella rundt Ørsta. Han var glad for at han ikkje hadde teke drosje.',
            translation: 'Linu subiu o caminho íngreme. Quando estava na metade, a chuva parou, e ele viu o fiorde e as montanhas altas em volta de Ørsta. Ficou contente por não ter pegado o táxi.',
            choices: [{ text: 'Linu gjekk vidare til tunet.', translation: 'Linu seguiu até o museu.', next: 'tunet' }],
          },
          kafe: {
            emoji: '☕',
            text: 'På kafeen sat ei eldre dame som heitte Marta. Ho fortalde at ho hadde vore guide på Aasen-tunet i mange år. “Aasen reiste rundt i landet og skreiv ned korleis folk snakka”, sa ho. “Han meinte at nordmenn burde skrive slik dei snakka, ikkje på dansk.”',
            translation:
              'No café estava sentada uma senhora chamada Marta. Ela contou que tinha sido guia no Aasen-tunet por muitos anos. “Aasen viajou pelo país e anotou como as pessoas falavam”, disse ela. “Ele achava que os noruegueses deviam escrever do jeito que falavam, e não em dinamarquês.”',
            choices: [{ text: '“Kan du vise meg vegen dit?”', translation: '“Você pode me mostrar o caminho até lá?”', next: 'tunet' }],
          },
          tunet: {
            emoji: '🏛️',
            text: 'Ivar Aasen-tunet ligg ved garden der Aasen vart fødd i 1813. I museet såg Linu at Aasen hadde skrive både ein grammatikk og ei ordbok. Guiden forklarte at han hadde gått frå bygd til bygd i fleire år før han gav dei ut.',
            translation:
              'O Ivar Aasen-tunet fica junto da fazenda onde Aasen nasceu, em 1813. No museu, Linu viu que Aasen tinha escrito uma gramática e um dicionário. O guia explicou que ele tinha andado de vilarejo em vilarejo por vários anos antes de publicá-los.',
            choices: [
              { text: '“Kvifor skreiv han ikkje på dansk, som alle andre?”', translation: '“Por que ele não escrevia em dinamarquês, como todo mundo?”', next: 'aasen' },
              {
                text: '“Så Aasen budde aldri i Ørsta?”',
                translation: '“Então Aasen nunca morou em Ørsta?”',
                wrong: 'O texto diz que o museu fica junto da fazenda onde Aasen nasceu: “ved garden der Aasen vart fødd i 1813”. Ele cresceu ali.',
              },
            ],
          },
          aasen: {
            emoji: '📚',
            text: 'Guiden svara at Noreg hadde vore under Danmark i over fire hundre år, og at skriftspråket difor var dansk. “Aasen ville vise at dialektane våre var eit eige språk”, sa ho. “Sjølv om ikkje alle var samde, vart landsmålet jamstilt med det dansk-norske skriftspråket i 1885.”',
            translation:
              'A guia respondeu que a Noruega tinha ficado sob a Dinamarca por mais de quatrocentos anos e que, por isso, a língua escrita era o dinamarquês. “Aasen queria mostrar que os nossos dialetos eram uma língua própria”, disse ela. “Embora nem todos concordassem, o landsmål ganhou o mesmo status da escrita dano-norueguesa em 1885.”',
            choices: [
              { text: 'Linu kjøpte ei bok med dikta til Aasen.', translation: 'Linu comprou um livro com os poemas de Aasen.', next: 'final_bok' },
              { text: 'Linu ville gå opp på eit fjell, sjølv om det byrja å regne igjen.', translation: 'Linu quis subir uma montanha, mesmo que tivesse voltado a chover.', next: 'final_fjell' },
            ],
          },
          final_bok: {
            emoji: '📖',
            text: 'På bussen tilbake las Linu diktet “Nordmannen”. Han forstod ikkje alle orda, men han kjende att mange av dei frå dialektane han hadde høyrt på turen. “Neste gong skal eg lese heile boka”, tenkte han.',
            translation: 'No ônibus de volta, Linu leu o poema “Nordmannen” (O norueguês). Ele não entendeu todas as palavras, mas reconheceu muitas delas dos dialetos que tinha ouvido na viagem. “Da próxima vez, vou ler o livro inteiro”, pensou.',
            ending: { tone: 'bom', title: 'Poesia na bagagem', message: 'Você entendeu as subordinadas (“at han ikkje hadde…”, “sjølv om”, “fordi”) e o mais-que-perfeito (“hadde lese”, “hadde vore”), em nynorsk.' },
          },
          final_fjell: {
            emoji: '🌫️',
            text: 'Linu gjekk opp i lia, men skodda låg tjukk over fjorden, og han såg ingenting. Då han kom ned att, var han våt og trøytt. “Eg skulle ha venta til det slutta å regne”, sa han.',
            translation: 'Linu subiu a encosta, mas a neblina estava densa sobre o fiorde, e ele não viu nada. Quando desceu, estava molhado e cansado. “Eu devia ter esperado a chuva parar”, disse ele.',
            ending: { tone: 'neutro', title: 'Neblina no fiorde', message: 'No oeste da Noruega, o tempo muda depressa. Da próxima vez, espere a chuva passar!' },
          },
        },
      },
    ],
  },
];
