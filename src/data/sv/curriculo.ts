import type { UnitSeed } from '../types';

/** Trilha do sueco: uma unidade por subnível (A1.1 → C2). */
export const UNITS_SV: UnitSeed[] = [
  {
    id: 'sv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hej! Os sons do sueco',
    emoji: '👋',
    card: {
      id: 'sv-c1',
      title: 'Uma língua que canta',
      emoji: '🎵',
      history:
        'O sueco é uma língua germânica do norte: descende do nórdico antigo, a língua dos vikings, e é prima próxima do norueguês e do dinamarquês, tanto que suecos, noruegueses e dinamarqueses muitas vezes se entendem cada um falando a sua língua. É a língua de cerca de 10 milhões de pessoas e é oficial na Suécia e na Finlândia, onde é uma das duas línguas nacionais; nas ilhas Åland, é a única língua oficial. O alfabeto tem 29 letras: depois do z vêm å, ä e ö, e é nessa ordem que elas aparecem no dicionário. Ao longo da Idade Média, os comerciantes alemães da Liga Hanseática deixaram no sueco centenas de palavras, e mais tarde vieram muitas do francês.',
      culture_tip:
        '“Hej” serve para todo mundo, a qualquer hora: para a vizinha, para o chefe e até para o rei. Desde a “du-reformen”, a reforma do tratamento do fim dos anos 1960, os suecos tratam quase todos por “du” (você), sem título nem sobrenome. “Tack” (obrigado) aparece o tempo todo: ao receber o troco, ao sair de um jantar (“tack för maten”) e até ao pedir (“en kaffe, tack”). Ao ser apresentado, dê um aperto de mão firme, olhe nos olhos e diga o seu nome.',
      grammar_why:
        'Boa notícia: o verbo sueco não muda com a pessoa. Em português dizemos “eu sou, você é, nós somos, eles são”; em sueco é “är” para todo mundo: jag är, du är, han är, hon är, vi är, ni är, de är. Os pronomes são jag (eu), du (você), han (ele), hon (ela), vi (nós), ni (vocês) e de (eles, elas), que se pronuncia “dom”. Na pronúncia, duas coisas mudam o sentido: a duração da vogal (glas, copo, tem vogal longa; glass, sorvete, tem vogal curta e o s segura) e o tom: “anden” com o acento 1 é “o pato”, com o acento 2, cantado com dois picos de melodia, é “o espírito”. Nos números, preste atenção aos sons novos: sju (7) começa com o “sj” soprado e tjugo (20) com o “tj” chiado.',
      grammar_examples: [
        ['Jag är från Brasilien.', 'Eu sou do Brasil.'],
        ['Hon är i Malmö i dag.', 'Ela está em Malmö hoje.'],
        ['Vi är trötta, men glada.', 'Nós estamos cansados, mas contentes.'],
        ['De är från Göteborg, och ni?', 'Eles são de Gotemburgo, e vocês?'],
      ],
      character_guide: [
        ['å', '“ô” fechado de “avô” quando é longa; “ó” de “avó” quando é curta', 'år, båt (longo); åtta (curto)'],
        ['ä', '“é” aberto de “café”; antes de r fica ainda mais aberto, quase um “a”', 'äta, ägg, här'],
        ['ö', 'faça a boca de “ô” e diga “ê”: o som de “eu” do francês ou do “ö” alemão', 'öl, höst, dörr'],
        ['o', 'quase sempre soa “u” de “uva”', 'bo, sol, ko'],
        ['u', 'som que não existe em português: lábios em bico bem apertado e a língua lá na frente; nunca o “u” de “uva”', 'du, hus, ut'],
        ['y', 'diga “i” com os lábios em bico, como o “u” francês', 'ny, by, syster'],
        ['vogal longa × curta', 'a vogal é longa antes de uma consoante só e curta antes de consoante dupla, que então segura um instante', 'glas (copo) × glass (sorvete); tak (teto) × tack (obrigado)'],
        ['sj, skj, stj, sk + e, i, y, ä, ö', 'o “sj” [ɧ]: um sopro chiado feito com os lábios um pouco para fora, entre o “ch” de “chá” e o “f”; não existe em português', 'sju, sjö, stjärna, sked'],
        ['tj, kj, k + e, i, y, ä, ö', '[ɕ], um “ch” suave, com a ponta da língua baixa e o meio da língua subindo, quase um “tchi” sem o t', 'tjugo, tjej, kök, kyrka'],
        ['g + e, i, y, ä, ö', 'soa como o “i” de “iate” [j]', 'ge, gärna, göra'],
        ['j, dj, gj, hj, lj', 'também soam [j], como o “i” de “iate”: o d, o g, o h e o l ficam mudos', 'ja, djur, hjälp, ljus'],
        ['rd, rt, rs, rn, rl', 'o r desaparece e a ponta da língua dobra para trás (som retroflexo); “rs” soa quase como “ch”', 'bord, kort, mars, barn'],
        ['ng, gn', '“ng” é um n feito no fundo da boca, sem soar o g, como no inglês “sing”; em “gn”, o g vira esse mesmo som', 'lång, sjunga, regn'],
        ['r', 'batido com a ponta da língua, como o “r” de “caro”; no sul, em Skåne, é raspado na garganta', 'röd, tre, resa'],
        ['acento 1 × acento 2', 'palavras de duas sílabas podem ter duas melodias: o acento 1 é uma batida só; o acento 2 desce e volta a subir, com dois picos, como se cantasse', 'anden (o pato, 1) × anden (o espírito, 2); tomten (o terreno, 1) × tomten (o Papai Noel, 2)'],
      ],
    },
    lessons: [
      {
        id: 'sv-u1-l1',
        title: 'Hej, hej då!',
        kind: 'licao',
        words: ['hej', 'hej då', 'tack', 'god morgon', 'hur mår du', 'bra, tack'],
        cloze: [
          { sentence: 'Hej, Anna! Hur ___ du? — Bra, tack!', answer: 'mår', options: ['mår', 'är', 'heter'], translation: 'Oi, Anna! Como você está? — Bem, obrigado!' },
          { sentence: 'Klockan är sju och det är morgon: god ___, mamma!', answer: 'morgon', options: ['morgon', 'natt', 'kväll'], translation: 'São sete horas e é de manhã: bom dia, mãe!' },
          { sentence: 'Hej ___, vi ses i morgon!', answer: 'då', options: ['då', 'dag', 'så'], translation: 'Tchau, até amanhã!' },
        ],
        voice: {
          bot: 'Hej! Hur mår du?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Bra, tack! Och du?', 'bra', 'tack', 'och du'],
          hint: 'Responda que está bem e devolva a pergunta: “Bra, tack! Och du?”. O “och” se pronuncia quase “ó”, e o “du” tem aquele “u” de bico apertado.',
        },
        communityPrompt: 'Escreva dois cumprimentos em sueco: um de manhã, para uma vizinha (“God morgon…”), e um de despedida para um amigo (“Hej då…”). Use “Hur mår du?” em um deles.',
      },
      {
        id: 'sv-u1-l2',
        title: 'Eu, você, ele, ela',
        kind: 'licao',
        words: ['jag', 'du', 'han', 'hon', 'vi', 'de'],
        cloze: [
          { sentence: 'Jag ___ från Brasilien.', answer: 'är', options: ['är', 'vara', 'heter'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Det här är Anna. ___ är från Uppsala.', answer: 'Hon', options: ['Hon', 'Han', 'Den'], translation: 'Esta é a Anna. Ela é de Uppsala.' },
          { sentence: 'Erik och Lisa? ___ är i Kiruna nu.', answer: 'De', options: ['De', 'Dem', 'Vi'], translation: 'O Erik e a Lisa? Eles estão em Kiruna agora.' },
        ],
        voice: {
          bot: 'Hej! Jag heter Erik och jag är från Göteborg. Och du?',
          botTranslation: 'Oi! Eu me chamo Erik e sou de Gotemburgo. E você?',
          expected: ['Hej, Erik! Jag heter Ana och jag är från Brasilien.', 'jag heter', 'jag är från', 'Brasilien'],
          hint: 'Diga o seu nome com “Jag heter…” e a origem com “Jag är från…”. O “jag” se pronuncia quase “ja”, sem o g.',
        },
        communityPrompt: 'Apresente três pessoas em sueco, uma frase para cada, usando “är”: você (“Jag är…”), um amigo (“Han är…”) e uma amiga (“Hon är…”). Repare que o verbo não muda!',
      },
      {
        id: 'sv-u1-l3',
        title: 'Desafio de voz: prazer em conhecer',
        kind: 'voz',
        words: ['jag heter', 'trevligt att träffas', 'sju', 'tolv', 'sjutton', 'tjugo'],
        cloze: [
          { sentence: 'Fem, sex, ___, åtta.', answer: 'sju', options: ['sju', 'sjutton', 'tjugo'], translation: 'Cinco, seis, sete, oito.' },
          { sentence: 'Tio plus tio är ___.', answer: 'tjugo', options: ['tjugo', 'tolv', 'sjutton'], translation: 'Dez mais dez são vinte.' },
          { sentence: 'Ni ___ välkomna till Visby!', answer: 'är', options: ['är', 'vara', 'varit'], translation: 'Vocês são bem-vindos a Visby!' },
        ],
        voice: {
          bot: 'Hej, jag heter Karin. Vad heter du? Hur gammal är du?',
          botTranslation: 'Oi, eu me chamo Karin. Como você se chama? Quantos anos você tem?',
          expected: ['Hej, Karin! Jag heter Paulo och jag är tjugo år. Trevligt att träffas!', 'jag heter', 'år', 'trevligt att träffas'],
          hint: 'A idade vem com “är”: “Jag är tjugo år” (eu tenho vinte anos). O “tj” de “tjugo” é um “ch” suave, e o “sj” de “sju” e “sjutton” é um sopro chiado.',
        },
        communityPrompt: 'Escreva um diálogo curto em que duas pessoas se apresentam, dizem a idade com números até 20 (“Jag är sjutton år”) e terminam com “Trevligt att träffas!”.',
      },
      {
        id: 'sv-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'God morgon och välkommen till Uppsala! Vad heter du, och var kommer du ifrån?',
          botTranslation: 'Bom dia e bem-vindo a Uppsala! Como você se chama, e de onde você é?',
          expected: [
            'God morgon! Jag heter Marta och jag kommer från Brasilien, från Recife. Trevligt att träffas!',
            'god morgon',
            'jag heter',
            'jag kommer från',
            'trevligt att träffas',
          ],
          hint: 'Devolva o cumprimento (“God morgon!”), diga o nome com “Jag heter…”, a origem com “Jag kommer från…” e feche com “Trevligt att träffas!”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em sueco: cumprimento, nome, de onde você é, a sua idade, duas pessoas da sua vida com “han är” / “hon är” e uma despedida.',
      },
    ],
  },
  {
    id: 'sv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Fika: café, pão e bolo',
    emoji: '☕',
    card: {
      id: 'sv-c2',
      title: 'O artigo que vai no fim',
      emoji: '🥐',
      history:
        'A fika é a pausa para o café com alguma coisa doce, e na Suécia ela é quase sagrada: em casa, com os amigos e no trabalho, muitas vezes duas vezes por dia. Segundo a explicação mais aceita, a palavra nasceu no século XIX invertendo as sílabas de “kaffi”, forma antiga de “kaffe”. Curiosamente, no século XVIII o café chegou a ser proibido várias vezes por decreto real, e mesmo assim os suecos viraram alguns dos maiores bebedores de café do mundo. Desde 1999, o 4 de outubro é o dia do pãozinho de canela, o “kanelbullens dag”.',
      culture_tip:
        'Se um colega sueco disser “Ska vi fika?”, é um convite para conversar sem pressa, não só para beber café. Na fika é comum pegar uma segunda xícara, a “påtår”, e muitos cafés já incluem essa recarga no preço. Ao entrar na casa de alguém, tire os sapatos na porta: é o costume em quase todo o país. E não pegue o último doce do prato sem oferecer antes: os suecos gostam de tudo “lagom”, nem demais, nem de menos.',
      grammar_why:
        'Em sueco, todo substantivo é “en” (gênero comum) ou “ett” (neutro): en kopp (uma xícara), ett bröd (um pão). Não há regra segura, então aprenda cada palavra junto com o seu artigo; a maioria é “en”. A grande surpresa para brasileiros: o artigo definido (o, a) não vem antes, mas grudado no fim da palavra: en kopp → koppen (a xícara), ett bröd → brödet (o pão), ett äpple → äpplet (a maçã). No plural há cinco modelos: kaka → kakor, bil → bilar, banan → bananer, äpple → äpplen, e palavras que não mudam, como ägg e hus. No presente, o verbo tem uma forma só para todas as pessoas, terminada em -ar, -er ou -r: jag dricker, du dricker, vi dricker. Para dizer “tem” ou “há”, use “det finns”, nunca “har”; e para gostar, “jag gillar” ou “jag tycker om”.',
      grammar_examples: [
        ['Jag har en kopp. Koppen är ny.', 'Eu tenho uma xícara. A xícara é nova.'],
        ['Hon äter ett äpple, och äpplet är gott.', 'Ela come uma maçã, e a maçã está gostosa.'],
        ['Det finns kaffe och två kakor i köket.', 'Tem café e dois bolinhos na cozinha.'],
        ['Jag gillar fika, men jag tycker inte om te.', 'Eu gosto de fika, mas não gosto de chá.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u2-l1',
        title: 'Ska vi fika?',
        kind: 'licao',
        words: ['kaffe', 'te', 'mjölk', 'kaka', 'kopp', 'socker'],
        cloze: [
          { sentence: 'Här är en kopp. ___ är ren.', answer: 'Koppen', options: ['Koppen', 'Koppet', 'Koppan'], translation: 'Aqui está uma xícara. A xícara está limpa.' },
          { sentence: 'Hon ___ kaffe med mjölk.', answer: 'dricker', options: ['dricker', 'dricka', 'drick'], translation: 'Ela toma café com leite.' },
          { sentence: 'Det ___ kaffe och te i köket.', answer: 'finns', options: ['finns', 'har', 'är'], translation: 'Tem café e chá na cozinha.' },
        ],
        voice: {
          bot: 'Hej! Kaffe eller te?',
          botTranslation: 'Oi! Café ou chá?',
          expected: ['Kaffe, tack! Med mjölk, men utan socker.', 'kaffe', 'tack', 'med mjölk', 'utan socker'],
          hint: 'Escolha a bebida e agradeça: “Kaffe, tack!”. Depois diga como quer, com “med” (com) e “utan” (sem). E o “ö” de “mjölk”: boca de “ô”, som de “ê”.',
        },
        communityPrompt: 'Descreva a sua fika ideal em três frases no presente: o que você bebe (jag dricker…), o que você come (jag äter…) e o que tem na mesa (det finns…).',
      },
      {
        id: 'sv-u2-l2',
        title: 'En ou ett?',
        kind: 'licao',
        words: ['äpple', 'banan', 'ost', 'ägg', 'smör', 'bröd'],
        cloze: [
          { sentence: 'Jag köper ___ äpple och en banan.', answer: 'ett', options: ['ett', 'en', 'et'], translation: 'Eu compro uma maçã e uma banana.' },
          { sentence: 'Här är ett bröd från bageriet. ___ är varmt.', answer: 'Brödet', options: ['Brödet', 'Bröden', 'Brödan'], translation: 'Aqui está um pão da padaria. O pão está quentinho.' },
          { sentence: 'Vi köper tre ___.', answer: 'bananer', options: ['bananer', 'bananar', 'bananor'], translation: 'Nós compramos três bananas.' },
        ],
        voice: {
          bot: 'Hej! Vad köper du i dag?',
          botTranslation: 'Oi! O que você compra hoje?',
          expected: ['Jag köper ett bröd, en ost och tre äpplen.', 'jag köper', 'ett bröd', 'en ost', 'äpplen'],
          hint: 'Use o presente “köper” e o artigo certo: ett bröd, ett ägg, ett äpple, mas en ost e en banan. No plural, äpple vira “äpplen”.',
        },
        communityPrompt: 'Escreva a sua lista de compras em sueco com seis itens, metade “en” e metade “ett”, e depois uma frase com a forma definida de cada tipo (osten…, brödet…).',
      },
      {
        id: 'sv-u2-l3',
        title: 'Desafio de voz: do que você gosta?',
        kind: 'voz',
        words: ['gilla', 'tycka om', 'fisk', 'lax', 'potatis', 'köttbulle'],
        cloze: [
          { sentence: 'Jag ___ om fisk, särskilt lax.', answer: 'tycker', options: ['tycker', 'gillar', 'tycka'], translation: 'Eu gosto de peixe, principalmente de salmão.' },
          { sentence: 'Erik ___ köttbullar med potatis.', answer: 'gillar', options: ['gillar', 'gilla', 'gillat'], translation: 'O Erik gosta de almôndegas com batata.' },
          { sentence: 'Det ___ lax i dag, men inga köttbullar.', answer: 'finns', options: ['finns', 'har', 'är'], translation: 'Hoje tem salmão, mas não tem almôndegas.' },
        ],
        voice: {
          bot: 'Vad gillar du att äta? Tycker du om fisk?',
          botTranslation: 'O que você gosta de comer? Você gosta de peixe?',
          expected: ['Ja, jag tycker om fisk. Jag gillar lax med potatis!', 'jag tycker om', 'jag gillar', 'jag tycker inte om', 'lax'],
          hint: 'Os dois jeitos de gostar: “jag gillar” ou “jag tycker om”. Na negativa, o “inte” vem logo depois do verbo: “jag tycker inte om fisk”.',
        },
        communityPrompt: 'Escreva quatro frases sobre comida: duas com coisas de que você gosta (“jag gillar…”, “jag tycker om…”) e duas de que não gosta, com o “inte” no lugar certo.',
      },
      {
        id: 'sv-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hej och välkommen! Det finns kaffe, te och kanelbullar. Vad tar du?',
          botTranslation: 'Oi e bem-vindo! Tem café, chá e pãozinho de canela. O que você vai querer?',
          expected: [
            'Jag tar en kaffe och en kanelbulle, tack. Jag gillar kanelbullar!',
            'jag tar',
            'en kaffe',
            'tack',
            'jag gillar',
          ],
          hint: 'Peça no presente com “Jag tar…” (eu pego, eu vou querer), use o artigo certo e termine com “tack”. No café, “en kaffe” é “um café” (uma xícara).',
        },
        communityPrompt: 'Escreva um diálogo numa confeitaria de Estocolmo: o atendente diz o que tem (det finns…), você pede com “en” e “ett”, diz do que gosta e do que não gosta e pergunta o preço.',
      },
    ],
  },
  {
    id: 'sv-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'De trem pela Suécia',
    emoji: '🚆',
    card: {
      id: 'sv-c3',
      title: 'O verbo sempre em segundo lugar',
      emoji: '🚉',
      history:
        'O metrô de Estocolmo, a “tunnelbana”, foi inaugurado em 1950 e é chamado de a maior galeria de arte do mundo: a maioria das suas estações tem pinturas, esculturas ou instalações, e muitas foram escavadas direto na rocha. Desde 2000, a ponte do Öresund liga Malmö a Copenhague, na Dinamarca, com uma ponte e um túnel submerso por onde passam carros e trens. No extremo norte, o trem noturno chega a Kiruna e Abisko, acima do Círculo Polar Ártico. E cuidado com as distâncias: uma “mil” sueca vale 10 quilômetros!',
      culture_tip:
        'Na escada rolante, fique à direita e deixe a esquerda livre para quem tem pressa. Nos trens de longa distância costuma haver vagões silenciosos, onde não se fala ao telefone. Nas lojas, farmácias e repartições, pegue a senha na maquininha (a “kölapp”) e espere a sua vez: furar fila é uma das piores gafes na Suécia.',
      grammar_why:
        'A regra de ouro do sueco é a V2: numa frase afirmativa, o verbo conjugado fica SEMPRE em segundo lugar. Em português dizemos “Hoje eu vou para Malmö”; em sueco, se a frase começa com “i dag”, o sujeito passa para depois do verbo: “I dag åker jag till Malmö”. Nas perguntas de sim ou não, o verbo vem primeiro: “Åker du till Malmö?”; com palavra interrogativa, ela vem antes do verbo: “Var bor du?”, “När går tåget?”. Nas preposições, use “i” para cidades e países (i Stockholm, i Sverige), “på” para ilhas e muitos lugares (på Gotland, på stationen), “till” para o destino e “från” para a origem. O adjetivo concorda com o substantivo: en stor bil, ett stort hus, stora bilar; e alguns são irregulares: en liten stuga, ett litet hus, små hus.',
      grammar_examples: [
        ['I morgon åker jag till Göteborg.', 'Amanhã eu vou para Gotemburgo.'],
        ['På sommaren bor vi på Gotland.', 'No verão nós moramos em Gotland.'],
        ['När går tåget från Uppsala?', 'Quando sai o trem de Uppsala?'],
        ['en stor bil, ett stort hus, två stora bilar', 'um carro grande, uma casa grande, dois carros grandes'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u3-l1',
        title: 'Na estação',
        kind: 'licao',
        words: ['tåg', 'station', 'biljett', 'perrong', 'avgång', 'tidtabell'],
        cloze: [
          { sentence: 'I dag ___ till Malmö med tåget.', answer: 'åker jag', options: ['åker jag', 'jag åker', 'jag åka'], translation: 'Hoje eu vou para Malmö de trem.' },
          { sentence: 'Tåget går ___ spår fyra.', answer: 'från', options: ['från', 'till', 'i'], translation: 'O trem sai da plataforma quatro.' },
          { sentence: 'Jag köper en biljett ___ Uppsala.', answer: 'till', options: ['till', 'i', 'på'], translation: 'Eu compro uma passagem para Uppsala.' },
        ],
        voice: {
          bot: 'Hej! Vart åker du i dag?',
          botTranslation: 'Oi! Para onde você vai hoje?',
          expected: ['I dag åker jag till Uppsala. En enkelbiljett, tack!', 'i dag åker jag', 'till', 'biljett'],
          hint: 'Comece com “I dag” e lembre da V2: o verbo vem logo depois, antes do “jag”: “I dag åker jag…”. O destino vem com “till”.',
        },
        communityPrompt: 'Escreva três frases sobre uma viagem de trem, cada uma começando com uma expressão de tempo (“I dag…”, “I morgon…”, “På fredag…”) e com o verbo em segundo lugar.',
      },
      {
        id: 'sv-u3-l2',
        title: 'Grande, pequeno, novo, velho',
        kind: 'licao',
        words: ['stor', 'liten', 'ny', 'gammal', 'snabb', 'billig'],
        cloze: [
          { sentence: 'Vi bor i ett ___ hus i Visby.', answer: 'stort', options: ['stort', 'stor', 'stora'], translation: 'Nós moramos numa casa grande em Visby.' },
          { sentence: 'Biljetterna till Kiruna är ___.', answer: 'billiga', options: ['billiga', 'billig', 'billigt'], translation: 'As passagens para Kiruna são baratas.' },
          { sentence: 'Vi har ett ___ rum på hotellet.', answer: 'litet', options: ['litet', 'liten', 'små'], translation: 'Nós temos um quarto pequeno no hotel.' },
        ],
        voice: {
          bot: 'Hur ser din stad ut? Är den stor eller liten?',
          botTranslation: 'Como é a sua cidade? Ela é grande ou pequena?',
          expected: ['Min stad är ganska stor. Den har ett gammalt centrum och många nya hus.', 'stor', 'gammalt', 'nya', 'den är'],
          hint: 'O adjetivo concorda: “en” fica sem nada (en stor stad), “ett” ganha -t (ett gammalt centrum) e o plural ganha -a (nya hus). “Stad” é en-ord, então é “den”: “Den är stor”.',
        },
        communityPrompt: 'Descreva a sua cidade em quatro frases com adjetivos concordando: um com palavra “en”, um com palavra “ett” e dois no plural (stora parker, nya hus…).',
      },
      {
        id: 'sv-u3-l3',
        title: 'Desafio de voz: onde fica?',
        kind: 'voz',
        words: ['karta', 'hotell', 'hållplats', 'buss', 'tunnelbana', 'ö'],
        cloze: [
          { sentence: 'Hotellet ligger ___ Gotland, nära havet.', answer: 'på', options: ['på', 'i', 'till'], translation: 'O hotel fica em Gotland, perto do mar.' },
          { sentence: '___ går bussen? — Klockan åtta.', answer: 'När', options: ['När', 'Var', 'Vart'], translation: 'Quando sai o ônibus? — Às oito.' },
          { sentence: 'Vi bor ___ Stockholm, nära tunnelbanan.', answer: 'i', options: ['i', 'på', 'till'], translation: 'Nós moramos em Estocolmo, perto do metrô.' },
        ],
        voice: {
          bot: 'Välkommen till hotellet! Var kommer du ifrån, och vart åker du sedan?',
          botTranslation: 'Bem-vindo ao hotel! De onde você é, e para onde vai depois?',
          expected: ['Jag kommer från Brasilien. I dag är jag i Stockholm, och på fredag åker jag till Gotland.', 'jag kommer från', 'i Stockholm', 'på fredag åker jag', 'till Gotland'],
          hint: 'Cidade com “i” (i Stockholm), ilha com “på” (på Gotland), destino com “till”. E se a frase começa com “på fredag”, o verbo vem antes do “jag”.',
        },
        communityPrompt: 'Escreva um roteiro de três dias pela Suécia: em que cidade ou ilha você está cada dia (i / på), como você viaja e para onde vai (till), começando cada frase com o dia da semana.',
      },
      {
        id: 'sv-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hej! Vart åker du i sommar, och hur reser du?',
          botTranslation: 'Oi! Para onde você vai neste verão, e como você viaja?',
          expected: [
            'I sommar åker jag till Kiruna. Jag tar nattåget från Stockholm, för det är billigt och bekvämt.',
            'i sommar åker jag',
            'till',
            'från',
            'tåget',
          ],
          hint: 'Comece com “I sommar” e ponha o verbo em segundo lugar. Use “till” e “från” e dois adjetivos com a concordância certa.',
        },
        communityPrompt: 'Escreva um cartão-postal de uma viagem pela Suécia: onde você está (i / på), de onde veio e para onde vai, uma pergunta para quem vai ler e três adjetivos concordando. Comece pelo menos duas frases com uma expressão de tempo.',
      },
    ],
  },
  {
    id: 'sv-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Como foi o Midsommar?',
    emoji: '🌼',
    card: {
      id: 'sv-c4',
      title: 'O “seu” que é dele mesmo',
      emoji: '🌸',
      history:
        'O Midsommar, a festa do solstício de verão, é para muitos suecos a data mais importante do ano depois do Natal. Desde 1953, a véspera, a “midsommarafton”, cai sempre numa sexta-feira entre 19 e 25 de junho, e é nela que se faz a festa. Levanta-se um mastro enfeitado com folhas e flores, a “midsommarstång”, e todos dançam em volta dele, até imitando sapinhos na dança “små grodorna”. Na mesa não faltam arenque, batata nova com endro, aguardente com canções e morangos. Segundo a tradição, quem colhe sete tipos de flores e as põe debaixo do travesseiro sonha com o futuro amor.',
      culture_tip:
        'Se alguém te convidar para o Midsommar, leve alguma coisa para a mesa, como morangos ou uma sobremesa. Na próxima vez que encontrar o anfitrião, diga “Tack för senast!” (obrigado pela última vez): é uma gentileza que os suecos esperam. E prepare-se para cantar: as “snapsvisor”, canções curtas antes de cada gole de aguardente, fazem parte da festa, mesmo para quem só bebe refrigerante.',
      grammar_why:
        'No passado há dois tempos principais. O pretérito conta o que aconteceu num momento definido: os verbos fracos ganham -ade, -de ou -te (dansade, bodde, köpte) e os fortes mudam a vogal, como em português “fazer → fiz”: dricka → drack, äta → åt, sjunga → sjöng. O perfeito, com “har” + supino, fala de experiência ou de resultado, sem momento definido: “jag har ätit sill” (já comi arenque); com “i går”, use o pretérito. Com “den”, “det” e “de” antes do adjetivo, o substantivo leva também a terminação definida (dupla definição): den röda stugan, det gamla huset, de nya husen; e liten vira “lilla”. Os possessivos concordam com a coisa possuída: min kopp, mitt hus, mina barn. E aqui o sueco é mais claro que o português: “sin” é o “seu” que pertence ao próprio sujeito, “hans” e “hennes” são de outra pessoa. “Erik ringde sin mamma” é a mãe do próprio Erik; “Erik ringde hans mamma” é a mãe de outro homem.',
      grammar_examples: [
        ['I går åt vi sill och färskpotatis.', 'Ontem nós comemos arenque e batata nova.'],
        ['Har du dansat runt midsommarstången?', 'Você já dançou em volta do mastro de Midsommar?'],
        ['Det gamla huset ligger vid sjön.', 'A casa velha fica à beira do lago.'],
        ['Anna ringde sin mamma, och sedan ringde hon hans mamma.', 'A Anna ligou para a própria mãe, e depois ligou para a mãe dele.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u4-l1',
        title: 'A família reunida',
        kind: 'licao',
        words: ['mormor', 'farfar', 'syster', 'bror', 'kusin', 'familj'],
        cloze: [
          { sentence: 'Det här är ___ syster, Lina.', answer: 'min', options: ['min', 'mitt', 'mina'], translation: 'Esta é a minha irmã, a Lina.' },
          { sentence: 'Här är ___ kusiner från Malmö.', answer: 'mina', options: ['mina', 'min', 'mitt'], translation: 'Aqui estão os meus primos de Malmö.' },
          { sentence: 'Johan besökte ___ mormor i Dalarna.', answer: 'sin', options: ['sin', 'hans', 'hennes'], translation: 'O Johan visitou a avó (dele mesmo) em Dalarna.' },
        ],
        voice: {
          bot: 'Vem firade du midsommar med i år?',
          botTranslation: 'Com quem você comemorou o Midsommar este ano?',
          expected: ['Jag firade midsommar med min familj: min mormor, min bror och mina kusiner.', 'jag firade', 'min', 'mina', 'familj'],
          hint: 'Use o pretérito “firade” (de “fira”, comemorar) e o possessivo certo: “min” para en-ord, “mitt” para ett-ord e “mina” no plural. Repare: “mormor” é a mãe da mãe e “farfar”, o pai do pai.',
        },
        communityPrompt: 'Descreva a sua família em cinco frases com min / mitt / mina, e escreva uma frase com “sin” e outra com “hans” ou “hennes”, explicando a diferença.',
      },
      {
        id: 'sv-u4-l2',
        title: 'Na festa',
        kind: 'licao',
        words: ['midsommarstång', 'sill', 'färskpotatis', 'jordgubbe', 'sjunga', 'dansa'],
        cloze: [
          { sentence: 'I går ___ vi runt midsommarstången.', answer: 'dansade', options: ['dansade', 'dansar', 'dansat'], translation: 'Ontem nós dançamos em volta do mastro de Midsommar.' },
          { sentence: 'Före maten ___ alla en snapsvisa.', answer: 'sjöng', options: ['sjöng', 'sjungde', 'sjungit'], translation: 'Antes da comida, todo mundo cantou uma canção de brinde.' },
          { sentence: 'Jag har aldrig ___ sill förut.', answer: 'ätit', options: ['ätit', 'åt', 'äta'], translation: 'Eu nunca comi arenque antes.' },
        ],
        voice: {
          bot: 'Hur var midsommar? Vad gjorde ni?',
          botTranslation: 'Como foi o Midsommar? O que vocês fizeram?',
          expected: ['Det var jättekul! Vi åt sill och färskpotatis, och sedan dansade vi runt stången.', 'det var', 'vi åt', 'dansade', 'sjöng'],
          hint: 'Conte no pretérito: “vi åt” (comemos, verbo forte), “vi drack”, “vi sjöng”, “vi dansade” (fraco, em -ade). Depois de “sedan”, lembre da V2: “sedan dansade vi”.',
        },
        communityPrompt: 'Conte uma festa de que você participou, em cinco frases no pretérito, com pelo menos dois verbos fortes (åt, drack, sjöng…) e dois fracos (dansade, köpte…).',
      },
      {
        id: 'sv-u4-l3',
        title: 'Desafio de voz: a casinha vermelha',
        kind: 'voz',
        words: ['sommarstuga', 'sjö', 'bastu', 'båt', 'röd', 'skog'],
        cloze: [
          { sentence: 'Vi bodde i den ___ stugan vid sjön.', answer: 'röda', options: ['röda', 'röd', 'rött'], translation: 'Nós ficamos na casinha vermelha à beira do lago.' },
          { sentence: 'Det ___ huset ligger mitt i skogen.', answer: 'gamla', options: ['gamla', 'gammal', 'gammalt'], translation: 'A casa velha fica no meio da floresta.' },
          { sentence: 'Har du ___ i sjön i dag?', answer: 'badat', options: ['badat', 'badade', 'bada'], translation: 'Você já nadou no lago hoje?' },
        ],
        voice: {
          bot: 'Var bodde ni i somras? Hur var stugan?',
          botTranslation: 'Onde vocês ficaram no verão passado? Como era a casinha?',
          expected: ['Vi bodde i en röd stuga vid sjön. Den lilla stugan hade en bastu, och vi badade varje dag.', 'vi bodde', 'den lilla stugan', 'hade', 'badade'],
          hint: 'Com “den” antes do adjetivo, o adjetivo ganha -a e o substantivo fica definido: “den röda stugan”, “den lilla stugan” (liten vira “lilla”). Conte no pretérito: bodde, hade, badade.',
        },
        communityPrompt: 'Descreva uma casa de férias onde você ficou (ou imaginou ficar): três frases no pretérito e duas com a dupla definição (den stora sjön, det lilla huset…).',
      },
      {
        id: 'sv-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tack för senast! Vad har du gjort sedan midsommar?',
          botTranslation: 'Obrigado pela última vez! O que você fez desde o Midsommar?',
          expected: [
            'Tack själv! Jag har varit på Öland med min syster, och vi har badat varje dag. I går åkte vi hem till Stockholm.',
            'tack själv',
            'jag har varit',
            'min syster',
            'i går åkte vi',
          ],
          hint: 'Responda o “Tack för senast” com “Tack själv!”. Use o perfeito (har varit, har badat) para o que você fez nesse período e o pretérito com “i går” (i går åkte vi…).',
        },
        communityPrompt: 'Escreva uma mensagem para uma amiga sueca contando o seu verão: o que você já fez (har + supino), o que fez num dia definido (pretérito), com quem (min / mitt / mina, sin) e um lugar descrito com dupla definição.',
      },
    ],
  },
  {
    id: 'sv-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Na natureza, rumo ao norte',
    emoji: '🌲',
    card: {
      id: 'sv-c5',
      title: 'Pode, deve, vai: os verbos modais',
      emoji: '⛺',
      history:
        'A “allemansrätten”, o direito de todos, permite caminhar, acampar por uma noite ou duas e colher frutinhas silvestres e cogumelos até em terra alheia, desde que longe das casas e sem estragar nada; desde 1994 ela é citada na Constituição sueca. No extremo norte, a trilha Kungsleden atravessa uns 440 quilômetros de montanhas entre Abisko e Hemavan. Essa é também a terra dos sámi, o povo indígena de Sápmi, região que se estende pela Noruega, Suécia, Finlândia e Rússia; na Suécia, a criação de renas é um direito reservado aos sámi, e o seu parlamento, o Sametinget, fica em Kiruna. Lá em cima, no inverno, o céu se enche de aurora boreal, e no verão o sol da meia-noite não se põe.',
      culture_tip:
        'O lema da allemansrätten é “Inte störa – inte förstöra”: não incomodar, não destruir. Leve todo o lixo de volta, não acenda fogueira quando houver alerta de incêndio e mantenha distância das renas, que pertencem aos criadores sámi. E, depois de uma trilha, nada é mais sueco que uma fika ao ar livre, com café da garrafa térmica numa “kåsa”, a caneca de madeira tradicional.',
      grammar_why:
        'Os verbos modais vêm seguidos do infinitivo SEM “att”: jag kan simma, du måste gå, vi vill tälta. “Får” é o “pode” de permissão (“Får man tälta här?”) e “får inte” é proibição; já “måste inte” não é proibição, e sim “não precisa”, uma armadilha para quem pensa no inglês “must not”. Para o futuro, “ska” é plano ou decisão (“I morgon ska vi vandra”), e “kommer att” é previsão (“Det kommer att regna”). O imperativo é o radical do verbo, sem a terminação do presente: stäng! (feche), köp! (compre), ta med! (leve); verbos em -a ficam iguais: vandra! Os reflexivos mudam o pronome como em português (“eu me sento, você se senta”): jag sätter mig, du sätter dig, han sätter sig, vi sätter oss; jag känner mig trött (eu me sinto cansado).',
      grammar_examples: [
        ['Får man tälta här? — Ja, en natt går bra.', 'Pode acampar aqui? — Pode, uma noite tudo bem.'],
        ['I morgon ska vi vandra på Kungsleden.', 'Amanhã nós vamos fazer trilha na Kungsleden.'],
        ['Det kommer att regna i kväll, så ta med regnjackan!', 'Vai chover hoje à noite, então leve a capa de chuva!'],
        ['Sätt dig vid elden, du känner dig säkert trött.', 'Senta perto do fogo, você deve estar cansado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u5-l1',
        title: 'Pode acampar aqui?',
        kind: 'licao',
        words: ['tälta', 'tält', 'sovsäck', 'allemansrätten', 'lägereld', 'plocka'],
        cloze: [
          { sentence: 'Man ___ tälta alldeles bredvid någons hus.', answer: 'får inte', options: ['får inte', 'måste inte', 'vill'], translation: 'Não se pode acampar bem ao lado da casa de alguém.' },
          { sentence: 'Jag vill ___ vid sjön i natt.', answer: 'tälta', options: ['tälta', 'tältar', 'att tälta'], translation: 'Eu quero acampar à beira do lago esta noite.' },
          { sentence: 'Du ___ släcka lägerelden innan du går.', answer: 'måste', options: ['måste', 'får inte', 'vill inte'], translation: 'Você precisa apagar a fogueira antes de ir embora.' },
        ],
        voice: {
          bot: 'Hej! Ni har ett tält. Ska ni sova här i skogen i natt?',
          botTranslation: 'Oi! Vocês têm uma barraca. Vão dormir aqui na floresta esta noite?',
          expected: ['Ja, vi ska tälta här en natt. Får man göra upp eld här?', 'vi ska', 'får man', 'tälta', 'kan vi'],
          hint: 'Diga o plano com “ska” e peça permissão com “Får man…?” ou “Kan vi…?”. Depois do modal vem o infinitivo sem “att”: “vi ska tälta”.',
        },
        communityPrompt: 'Escreva as regras da allemansrätten para um amigo brasileiro: três coisas que se pode fazer (“man får…”, “man kan…”) e duas que não se pode (“man får inte…”), mais uma com “man måste”.',
      },
      {
        id: 'sv-u5-l2',
        title: 'Rumo à Lapônia',
        kind: 'licao',
        words: ['fjäll', 'norrsken', 'midnattssol', 'vandringsled', 'fjällstuga', 'kompass'],
        cloze: [
          { sentence: 'I kväll kommer det ___ bli kallt på fjället.', answer: 'att', options: ['att', 'och', 'till'], translation: 'Hoje à noite vai fazer frio na montanha.' },
          { sentence: 'I morgon ___ vi vandra till fjällstugan: det har vi redan bestämt.', answer: 'ska', options: ['ska', 'kommer', 'blir'], translation: 'Amanhã nós vamos caminhar até o refúgio: isso já decidimos.' },
          { sentence: 'Titta upp! Där är ___!', answer: 'norrskenet', options: ['norrskenet', 'norrskenen', 'norrskenan'], translation: 'Olha para cima! Lá está a aurora boreal!' },
        ],
        voice: {
          bot: 'Vad ska du göra i Lappland i vinter?',
          botTranslation: 'O que você vai fazer na Lapônia neste inverno?',
          expected: ['Jag ska åka till Abisko och se norrskenet. Det kommer att bli kallt, men jag vill vandra på fjället.', 'jag ska', 'kommer att', 'norrskenet', 'jag vill'],
          hint: 'O plano vai com “ska” (jag ska åka…) e a previsão com “kommer att” (det kommer att bli kallt). “Norrsken” é ett-ord: “norrskenet”.',
        },
        communityPrompt: 'Planeje uma viagem ao norte da Suécia: três frases com “ska” (o que você decidiu fazer) e duas com “kommer att” (o que provavelmente vai acontecer: o tempo, a luz, o frio).',
      },
      {
        id: 'sv-u5-l3',
        title: 'Desafio de voz: senta perto do fogo',
        kind: 'voz',
        words: ['sätta sig', 'vila', 'frysa', 'termos', 'kåsa', 'vandra'],
        cloze: [
          { sentence: 'Du ser trött ut. Sätt ___ här vid elden!', answer: 'dig', options: ['dig', 'sig', 'du'], translation: 'Você parece cansado. Senta aqui perto do fogo!' },
          { sentence: 'Jag känner ___ lite sjuk i dag.', answer: 'mig', options: ['mig', 'sig', 'jag'], translation: 'Eu estou me sentindo um pouco doente hoje.' },
          { sentence: '___ lägerelden innan ni somnar!', answer: 'Släck', options: ['Släck', 'Släcka', 'Släcker'], translation: 'Apaguem a fogueira antes de dormir!' },
        ],
        voice: {
          bot: 'Oj, du fryser! Hur känner du dig?',
          botTranslation: 'Nossa, você está com frio! Como você está se sentindo?',
          expected: ['Jag känner mig trött och jag fryser lite. Kan jag sätta mig vid elden?', 'jag känner mig', 'sätta mig', 'jag fryser', 'kan jag'],
          hint: 'O reflexivo muda com a pessoa, como em português: “jag känner mig”, “jag sätter mig” (eu me sinto, eu me sento). Depois de “kan”, o infinitivo: “kan jag sätta mig…?”.',
        },
        communityPrompt: 'Escreva as instruções de um guia no acampamento, com cinco imperativos (Sätt er!, Ta med…!, Släck…!, Vila!, Drick…!) e duas frases com verbos reflexivos.',
      },
      {
        id: 'sv-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'I morgon ska vi vandra tjugo kilometer. Vad måste vi ta med, och vad gör vi om det börjar regna?',
          botTranslation: 'Amanhã vamos caminhar vinte quilômetros. O que precisamos levar, e o que fazemos se começar a chover?',
          expected: [
            'Vi måste ta med tältet, sovsäckarna och en termos med kaffe. Om det regnar kan vi vila i fjällstugan. Och glöm inte regnjackan!',
            'vi måste',
            'ta med',
            'kan vi',
            'glöm inte',
          ],
          hint: 'Junte tudo: “måste” para o necessário, “kan” para a possibilidade, e um imperativo no fim (“Glöm inte…!”, não esqueça). Depois de “Om det regnar”, o verbo vem logo em seguida: “kan vi”.',
        },
        communityPrompt: 'Escreva um e-mail para amigos que vão com você à Kungsleden: o plano (ska), a previsão do tempo (kommer att), o que cada um precisa levar (måste), o que não se pode fazer (får inte) e dois conselhos no imperativo, um deles com verbo reflexivo.',
      },
    ],
  },
  {
    id: 'sv-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Natureza e allemansrätten',
    emoji: '🌲',
    card: {
      id: 'sv-c6',
      title: 'O direito de todos à natureza',
      emoji: '🏕️',
      history:
        'Em 1909 a Suécia foi o primeiro país da Europa a criar parques nacionais: nove de uma vez, entre eles Sarek e Abisko, na Lapônia. A allemansrätten, o “direito de todos”, permite andar, acampar por uma noite e colher frutinhas silvestres e cogumelos mesmo em terra alheia, desde que não se perturbe nem se destrua nada. Desde 1994 esse direito é citado na constituição sueca (Regeringsformen). E a trilha Kungsleden, a “Trilha do Rei”, atravessa cerca de 440 km de montanhas entre Abisko e Hemavan.',
      culture_tip:
        'O lema é “inte störa – inte förstöra” (não perturbar, não destruir). Acampar uma noite é permitido, mas longe das casas e fora da vista dos moradores. Fogueira só onde não houver risco: no verão seco, as autoridades muitas vezes proíbem o fogo ao ar livre. Nos parques nacionais e nas reservas naturais valem regras próprias, então leia a placa na entrada.',
      grammar_why:
        'Na oração principal o verbo vem em segundo lugar e o “inte” vem depois dele: “Jag kan inte simma”. Na oração subordinada (depois de att, när, om, eftersom, fast, som) não há V2: o sujeito vem logo depois da conjunção, e o “inte” (e advérbios como alltid, aldrig, redan) vai ANTES do verbo: “…att jag inte kan simma”. É um erro típico de brasileiro, porque em português a ordem não muda. Se a subordinada vem primeiro, ela ocupa o primeiro lugar da frase, e o verbo principal vem logo depois dela: “När det regnar, stannar vi i tältet”. Repare também: “om” é “se” e “fast” é “embora”. O mais-que-perfeito se forma com “hade” + supino, como o nosso “tinha feito”: “Vi hade redan ätit”.',
      grammar_examples: [
        ['Jag vet att man inte får göra upp eld här.', 'Eu sei que não se pode fazer fogueira aqui.'],
        ['Eftersom det regnade, stannade vi i tältet.', 'Como estava chovendo, ficamos na barraca.'],
        ['Vi gick vidare fast vi inte orkade.', 'Seguimos em frente, embora não tivéssemos mais forças.'],
        ['När vi kom fram hade solen redan gått ner.', 'Quando chegamos, o sol já tinha se posto.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u6-l1',
        title: 'Acampar em terra alheia',
        kind: 'licao',
        words: ['allemansrätten', 'naturreservat', 'tält', 'vildmark', 'orörd', 'fjällstuga'],
        cloze: [
          {
            sentence: 'Jag tror att man ___ tälta här i naturreservatet.',
            answer: 'inte får',
            options: ['inte får', 'får inte', 'får ej'],
            translation: 'Acho que não se pode acampar aqui na reserva natural.',
          },
          {
            sentence: 'När vi kom fram till fjällstugan, ___ någon redan tänt en brasa.',
            answer: 'hade',
            options: ['hade', 'har', 'ha'],
            translation: 'Quando chegamos ao refúgio de montanha, alguém já tinha acendido o fogo.',
          },
          {
            sentence: 'Vi gick vidare genom vildmarken, ___ vi var trötta.',
            answer: 'fast',
            options: ['fast', 'eftersom', 'att'],
            translation: 'Seguimos pela natureza selvagem, embora estivéssemos cansados.',
          },
        ],
        voice: {
          bot: 'Vet du vad allemansrätten säger om att tälta?',
          botTranslation: 'Você sabe o que a allemansrätten diz sobre acampar?',
          expected: [
            'Ja, jag vet att man får tälta en natt, om man inte stör någon och inte förstör naturen.',
            'att man får tälta',
            'om man inte stör',
            'inte förstör',
          ],
          hint: 'Use “att” e “om” e lembre: na subordinada o “inte” vem antes do verbo (“om man inte stör”).',
        },
        communityPrompt:
          'Escreva 3 regras da allemansrätten começando com “Jag har lärt mig att…”, com pelo menos uma negação dentro da subordinada (“…att man inte får…”).',
      },
      {
        id: 'sv-u6-l2',
        title: 'De canoa pelo arquipélago',
        kind: 'licao',
        words: ['skärgård', 'fjärd', 'kanot', 'paddla', 'vik', 'badplats'],
        cloze: [
          {
            sentence: 'Vi hyrde en kanot, fast vi ___ paddlat förut.',
            answer: 'aldrig hade',
            options: ['aldrig hade', 'hade aldrig', 'har aldrig'],
            translation: 'Alugamos uma canoa, embora nunca tivéssemos remado antes.',
          },
          {
            sentence: 'Vet du ___ det finns en badplats i viken?',
            answer: 'om',
            options: ['om', 'att', 'eftersom'],
            translation: 'Você sabe se tem um lugar para nadar na enseada?',
          },
          {
            sentence: 'Vi stannade på en ö ___ det började blåsa på fjärden.',
            answer: 'eftersom',
            options: ['eftersom', 'fast', 'om'],
            translation: 'Paramos numa ilha porque começou a ventar no braço de mar.',
          },
        ],
        voice: {
          bot: 'Hur var kanotturen i skärgården i går?',
          botTranslation: 'Como foi o passeio de canoa pelo arquipélago ontem?',
          expected: [
            'Den var fin, men eftersom det blåste mycket paddlade vi in i en lugn vik.',
            'eftersom det blåste',
            'paddlade vi',
            'vik',
          ],
          hint: 'Comece a subordinada com “eftersom” e, se ela vier antes, inverta a principal: “…paddlade vi”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre um passeio de barco ou de canoa usando “eftersom”, “fast” e “när”, e uma com o mais-que-perfeito (hade + supino).',
      },
      {
        id: 'sv-u6-l3',
        title: 'Desafio de voz: na trilha Kungsleden',
        kind: 'voz',
        words: ['vandringsled', 'trädgräns', 'myr', 'glaciär', 'dal', 'topp'],
        cloze: [
          {
            sentence: 'När vi kom upp över trädgränsen, ___ vi redan gått i fem timmar.',
            answer: 'hade',
            options: ['hade', 'har', 'skulle'],
            translation: 'Quando subimos acima da linha das árvores, já tínhamos andado cinco horas.',
          },
          {
            sentence: 'Guiden sa att vi ___ gå över myren.',
            answer: 'inte skulle',
            options: ['inte skulle', 'skulle inte', 'skulle ej'],
            translation: 'O guia disse que não era para atravessarmos a turfeira.',
          },
          {
            sentence: 'Vi vände i dalen, ___ vi inte hann upp på toppen.',
            answer: 'eftersom',
            options: ['eftersom', 'fast', 'att'],
            translation: 'Demos meia-volta no vale, porque não deu tempo de subir até o cume.',
          },
        ],
        voice: {
          bot: 'Varför gick ni inte ända upp till glaciären?',
          botTranslation: 'Por que vocês não foram até a geleira?',
          expected: [
            'Vi gick inte upp eftersom vi inte hade tillräckligt med tid och vädret blev sämre.',
            'eftersom vi inte hade',
            'vädret blev sämre',
            'inte hann',
          ],
          hint: 'Justifique com “eftersom” e ponha o “inte” antes do verbo: “eftersom vi inte hade tid”.',
        },
        communityPrompt:
          'Grave-se contando uma trilha que você fez: o que vocês já tinham feito quando chegaram (hade + supino) e por que não foram mais longe (eftersom … inte …).',
      },
      {
        id: 'sv-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Berätta om en gång när du var ute i naturen. Vad hade du planerat, och vad hände?',
          botTranslation: 'Conte sobre uma vez em que você estava na natureza. O que tinha planejado, e o que aconteceu?',
          expected: [
            'Jag hade planerat att tälta vid en sjö, men eftersom det regnade sov vi i en fjällstuga.',
            'jag hade planerat',
            'eftersom',
            'fast',
            'när',
          ],
          hint: 'Junte o mais-que-perfeito (hade planerat) com subordinadas (när, eftersom, fast); nelas, o “inte” vem antes do verbo.',
        },
        communityPrompt:
          'Escreva 5 frases sobre um fim de semana na natureza sueca: uma com “att … inte”, uma com “eftersom”, uma com “fast”, uma com “om” (= se) e uma com o mais-que-perfeito.',
      },
    ],
  },
  {
    id: 'sv-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Saúde: vårdcentral e farmácia',
    emoji: '🩺',
    card: {
      id: 'sv-c7',
      title: 'Cuidar da saúde à sueca',
      emoji: '💊',
      history:
        'O primeiro hospital civil de Estocolmo, o Serafimerlasarettet, foi aberto em 1752 na ilha de Kungsholmen. O Karolinska Institutet, fundado em 1810, é uma das universidades de medicina mais conhecidas do mundo, e é uma assembleia ligada a ele que escolhe todo ano o prêmio Nobel de Fisiologia ou Medicina. Na Suécia, quem cuida da saúde pública são as regiões, e o primeiro contato costuma ser o posto de saúde do bairro, a vårdcentral. De 1970 a 2009, todas as farmácias do país pertenciam ao Estado.',
      culture_tip:
        'Antes de ir ao posto, muita gente liga para o 1177, o serviço público de orientação, onde uma enfermeira avalia o caso. Com febre ou resfriado leve, o conselho costuma ser ficar em casa e descansar: antibiótico não se receita à toa. Nos primeiros dias de doença não é preciso atestado (ele só é exigido a partir do oitavo dia), e pais e mães podem “vabba”, ou seja, faltar ao trabalho para cuidar de filho doente.',
      grammar_why:
        'O sueco tem muitos verbos com partícula, como o inglês: a partícula (bort, ut, upp, på, över) é tônica e muda o sentido. “Ta” é pegar, mas “ta bort” é tirar; “skriva” é escrever, e “skriva ut” é receitar (ou imprimir); “hälsa” é cumprimentar, e “hälsa på” é visitar. Diferente do inglês, a partícula vem antes do objeto, mesmo que ele seja pronome: “ta bort den”, “ringa upp dig”. A voz passiva tem duas formas: o -s colado ao verbo (“Receptet skrivs ut av läkaren” = a receita é passada pelo médico), comum em regras, rotinas e instruções; e “bli + particípio”, mais usada para acontecimentos (“Han blev opererad i går” = ele foi operado ontem). O particípio concorda como um adjetivo: en stukad fot, ett brutet ben, stukade fötter.',
      grammar_examples: [
        ['Läkaren skrev ut en salva till mig.', 'O médico me receitou uma pomada.'],
        ['Blodprov tas på morgonen.', 'Os exames de sangue são colhidos de manhã.'],
        ['Han blev opererad i knät förra veckan.', 'Ele foi operado no joelho na semana passada.'],
        ['Jag har en stukad fot och ett brutet finger.', 'Estou com um pé torcido e um dedo quebrado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u7-l1',
        title: 'No posto de saúde',
        kind: 'licao',
        words: ['vårdcentral', 'boka tid', 'väntrum', 'remiss', 'undersökning', 'blodprov'],
        cloze: [
          {
            sentence: 'På vårdcentralen ___ blodprov varje morgon mellan åtta och tio.',
            answer: 'tas',
            options: ['tas', 'tar', 'tagit'],
            translation: 'No posto de saúde, os exames de sangue são colhidos todas as manhãs, entre oito e dez.',
          },
          {
            sentence: 'Efter undersökningen ___ jag till en hudläkare med en remiss.',
            answer: 'blev skickad',
            options: ['blev skickad', 'skickade', 'har skickat'],
            translation: 'Depois do exame, fui mandado a um dermatologista com um encaminhamento.',
          },
          {
            sentence: 'Sköterskan ringer ___ dig när provsvaren har kommit.',
            answer: 'upp',
            options: ['upp', 'på', 'ut'],
            translation: 'A enfermeira liga para você quando os resultados dos exames chegarem.',
          },
        ],
        voice: {
          bot: 'Vårdcentralen, hej! Vad kan jag hjälpa dig med?',
          botTranslation: 'Posto de saúde, olá! Em que posso ajudar?',
          expected: [
            'Hej, jag skulle vilja boka tid, för min hosta går inte över.',
            'boka tid',
            'går inte över',
            'skulle vilja',
          ],
          hint: 'Explique o problema com um verbo de partícula: “gå över” (passar), “må illa” (estar enjoado).',
        },
        communityPrompt:
          'Escreva uma mensagem ao posto de saúde marcando consulta, com dois verbos de partícula (gå över, ringa upp, ta bort…) e uma passiva com -s.',
      },
      {
        id: 'sv-u7-l2',
        title: 'Na farmácia',
        kind: 'licao',
        words: ['läkemedel', 'receptfri', 'biverkning', 'värktablett', 'salva', 'apotekare'],
        cloze: [
          {
            sentence: 'Det här läkemedlet ___ bara mot recept.',
            answer: 'säljs',
            options: ['säljs', 'säljer', 'sålt'],
            translation: 'Este medicamento só é vendido com receita.',
          },
          {
            sentence: 'Salvan ska ___ på huden två gånger om dagen.',
            answer: 'smörjas',
            options: ['smörjas', 'smörjs', 'smörja'],
            translation: 'A pomada deve ser passada na pele duas vezes por dia.',
          },
          {
            sentence: 'Ta ___ plåstret försiktigt efter två dagar.',
            answer: 'bort',
            options: ['bort', 'upp', 'ut'],
            translation: 'Tire o curativo com cuidado depois de dois dias.',
          },
        ],
        voice: {
          bot: 'Hej! Har du ett recept, eller vill du ha något receptfritt?',
          botTranslation: 'Olá! Você tem uma receita ou quer algo sem receita?',
          expected: [
            'Jag har ont i huvudet, så jag vill ha en receptfri värktablett. Finns det några biverkningar?',
            'receptfri',
            'värktablett',
            'biverkningar',
          ],
          hint: 'Diga o que você sente e pergunte pelos efeitos colaterais (“biverkningar”).',
        },
        communityPrompt:
          'Imagine a bula de um remédio: escreva 3 instruções na passiva com -s (“Tabletten tas med vatten”, “Salvan ska smörjas…”) e um aviso com “bli + particípio”.',
      },
      {
        id: 'sv-u7-l3',
        title: 'Desafio de voz: no pronto-socorro',
        kind: 'voz',
        words: ['akutmottagning', 'stuka', 'gips', 'röntgen', 'yrsel', 'må illa'],
        cloze: [
          {
            sentence: 'I går ___ min fot röntgad på akutmottagningen.',
            answer: 'blev',
            options: ['blev', 'blivit', 'bli'],
            translation: 'Ontem meu pé foi radiografado no pronto-socorro.',
          },
          {
            sentence: 'Det var ingen fraktur, bara en ___ fot.',
            answer: 'stukad',
            options: ['stukad', 'stukat', 'stukade'],
            translation: 'Não era fratura, só um pé torcido.',
          },
          {
            sentence: 'Jag mår ___ och har haft yrsel sedan i morse.',
            answer: 'illa',
            options: ['illa', 'ont', 'sjuk'],
            translation: 'Estou enjoado e com tontura desde hoje de manhã.',
          },
        ],
        voice: {
          bot: 'Vad har hänt? Hur skadade du dig?',
          botTranslation: 'O que aconteceu? Como você se machucou?',
          expected: [
            'Jag halkade på isen och stukade foten, och nu måste den röntgas.',
            'stukade foten',
            'röntgas',
            'halkade',
          ],
          hint: 'Conte o acidente no pretérito e use a passiva: “den måste röntgas” (precisa ser radiografado).',
        },
        communityPrompt:
          'Grave-se contando uma ida ao pronto-socorro: o que aconteceu, o que foi feito com você (passiva com -s ou bli + particípio) e como você se sente agora (må illa, känna sig…).',
      },
      {
        id: 'sv-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du har varit sjuk en hel vecka. Berätta vad som hände och vad läkaren gjorde.',
          botTranslation: 'Você ficou doente uma semana inteira. Conte o que aconteceu e o que o médico fez.',
          expected: [
            'Jag blev undersökt i måndags och fick en medicin som skrevs ut av läkaren, men febern gick inte över förrän i fredags.',
            'blev undersökt',
            'skrevs ut',
            'gick över',
            'ta hand om',
          ],
          hint: 'Use as duas passivas (skrevs ut, blev undersökt) e verbos de partícula (gå över, ta hand om).',
        },
        communityPrompt:
          'Escreva 5 frases sobre uma semana doente: dois verbos de partícula, uma passiva com -s, uma com “bli + particípio” e um particípio usado como adjetivo (en stukad fot, ett brutet ben).',
      },
    ],
  },
  {
    id: 'sv-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Ciência sueca: Nobel, Linné e Celsius',
    emoji: '🔬',
    card: {
      id: 'sv-c8',
      title: 'De Uppsala para o mundo',
      emoji: '🏅',
      history:
        'Alfred Nobel (1833–1896), químico nascido em Estocolmo, patenteou a dinamite em 1867 e deixou em testamento a fortuna para os prêmios que levam seu nome, entregues desde 1901. Em Uppsala, Carl von Linné (1707–1778) consagrou o sistema que dá a cada espécie dois nomes em latim, como Homo sapiens, usado até hoje. Também em Uppsala, Anders Celsius (1701–1744) propôs em 1742 sua escala de temperatura; no original, 0 era a água fervendo e 100 a água congelando, e a escala foi invertida pouco depois da morte dele. Os prêmios Nobel são entregues em 10 de dezembro, aniversário da morte de Nobel: em Estocolmo, e o da Paz em Oslo.',
      culture_tip:
        'Na noite de 10 de dezembro, o banquete do Nobel na Prefeitura de Estocolmo (Stadshuset) passa na TV sueca, e muita gente comenta os vestidos e o cardápio. Os suecos gostam de lembrar as invenções do país, mas sem exagero: a jantelagen faz o gabar-se pegar mal, e o comparativo mais ouvido é o modesto “lite bättre” (um pouco melhor).',
      grammar_why:
        'Adjetivos curtos fazem o comparativo com -are e o superlativo com -ast: snabb, snabbare, snabbast. Alguns mudam a vogal ou são irregulares: stor, större, störst; gammal, äldre, äldst; bra, bättre, bäst. Adjetivos longos, os terminados em -isk e os particípios usam “mer” e “mest”: mer praktisk, mest känd. Antes do substantivo, o superlativo ganha -e, como na forma definida: “den snabbaste vägen”, “Nobels viktigaste uppfinning”. O pronome relativo quase sempre é “som”, que não varia (en forskare som…, ett ämne som…); para posse usa-se “vars” (cujo): “Linné, vars system används än i dag”. No discurso indireto o verbo recua no tempo, como em português, e o “inte” vem antes do verbo, porque é uma subordinada: “Han sa: Jag har inte tid” → “Han sa att han inte hade tid”.',
      grammar_examples: [
        ['Uppsala universitet är det äldsta universitetet i Norden.', 'A Universidade de Uppsala é a universidade mais antiga dos países nórdicos.'],
        ['Linné var en forskare vars namn alla svenskar känner till.', 'Linné foi um cientista cujo nome todos os suecos conhecem.'],
        ['Den bästa idén är ofta den som är enklast.', 'A melhor ideia muitas vezes é a mais simples.'],
        ['Professorn sa att experimentet inte hade fungerat.', 'O professor disse que o experimento não tinha funcionado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u8-l1',
        title: 'Nobel e as invenções',
        kind: 'licao',
        words: ['nobelpris', 'upptäckt', 'uppfinning', 'uppfinna', 'forskning', 'laboratorium'],
        cloze: [
          {
            sentence: 'Dynamiten var Nobels ___ uppfinning.',
            answer: 'viktigaste',
            options: ['viktigaste', 'viktigast', 'viktigare'],
            translation: 'A dinamite foi a invenção mais importante de Nobel.',
          },
          {
            sentence: 'Forskaren ___ fick nobelpriset arbetade i ett litet laboratorium.',
            answer: 'som',
            options: ['som', 'vars', 'vilken'],
            translation: 'A pesquisadora que ganhou o prêmio Nobel trabalhava num laboratório pequeno.',
          },
          {
            sentence: 'Hon berättade att upptäckten ___ publicerats ännu.',
            answer: 'inte hade',
            options: ['inte hade', 'hade inte', 'har inte'],
            translation: 'Ela contou que a descoberta ainda não tinha sido publicada.',
          },
        ],
        voice: {
          bot: 'Vilken uppfinning tycker du är viktigast?',
          botTranslation: 'Qual invenção você acha a mais importante?',
          expected: [
            'Jag tycker att Celsius skala är viktigast, eftersom den är enklare än Fahrenheit.',
            'viktigast',
            'enklare än',
            'mer',
          ],
          hint: 'Use o superlativo depois de “är” (viktigast) e compare com “än” (enklare än…).',
        },
        communityPrompt:
          'Escreva 3 frases comparando invenções ou descobertas (större, bättre, mer praktisk, viktigast) e uma com o relativo “som”.',
      },
      {
        id: 'sv-u8-l2',
        title: 'Linné e as espécies',
        kind: 'licao',
        words: ['art', 'evolution', 'ekosystem', 'mikroskop', 'observera', 'fossil'],
        cloze: [
          {
            sentence: 'Linné var en botaniker ___ system används än i dag.',
            answer: 'vars',
            options: ['vars', 'som', 'hans'],
            translation: 'Linné foi um botânico cujo sistema é usado até hoje.',
          },
          {
            sentence: 'Fjällräven är en av Sveriges ___ hotade arter.',
            answer: 'mest',
            options: ['mest', 'mer', 'mycket'],
            translation: 'A raposa-do-ártico é uma das espécies mais ameaçadas da Suécia.',
          },
          {
            sentence: 'Hon sa att hon ___ en ny art i mikroskopet.',
            answer: 'hade observerat',
            options: ['hade observerat', 'observerar', 'observera'],
            translation: 'Ela disse que tinha observado uma espécie nova no microscópio.',
          },
        ],
        voice: {
          bot: 'Vad sa läraren om fossilen som ni hittade på Gotland?',
          botTranslation: 'O que a professora disse sobre os fósseis que vocês acharam em Gotland?',
          expected: [
            'Hon sa att fossilen var över fyrahundra miljoner år gamla och att de var äldre än dinosaurierna.',
            'hon sa att',
            'var',
            'äldre än',
          ],
          hint: 'Recue o tempo do verbo no discurso indireto (“hon sa att fossilen var…”) e compare com “äldre än”.',
        },
        communityPrompt:
          'Escreva 3 frases contando o que um cientista disse numa entrevista (discurso indireto com “att”), uma delas com negação (“…att de inte hade…”).',
      },
      {
        id: 'sv-u8-l3',
        title: 'Desafio de voz: energia e clima',
        kind: 'voz',
        words: ['klimatförändring', 'förnybar', 'vindkraft', 'kärnkraft', 'koldioxid', 'växthuseffekt'],
        cloze: [
          {
            sentence: 'Vindkraft blir ___ och billigare för varje år.',
            answer: 'vanligare',
            options: ['vanligare', 'vanligast', 'vanlig'],
            translation: 'A energia eólica fica mais comum e mais barata a cada ano.',
          },
          {
            sentence: 'Sverige får mycket el från vattenkraft och kärnkraft, ___ inte släpper ut mycket koldioxid.',
            answer: 'som',
            options: ['som', 'vars', 'vad'],
            translation: 'A Suécia tira muita eletricidade das usinas hidrelétricas e nucleares, que não emitem muito dióxido de carbono.',
          },
          {
            sentence: 'Förnybar energi är ___ för klimatet än olja.',
            answer: 'bättre',
            options: ['bättre', 'bäst', 'godare'],
            translation: 'A energia renovável é melhor para o clima do que o petróleo.',
          },
        ],
        voice: {
          bot: 'Vad är bäst för klimatet, tycker du: vindkraft eller kärnkraft?',
          botTranslation: 'Na sua opinião, o que é melhor para o clima: energia eólica ou nuclear?',
          expected: [
            'Båda släpper ut mindre koldioxid än olja, men vindkraft är förnybar och snabbare att bygga.',
            'mindre',
            'än',
            'snabbare',
          ],
          hint: 'Compare com “mindre … än”, “snabbare”, “mer … än” e dê sua opinião com “jag tycker att”.',
        },
        communityPrompt:
          'Grave-se comparando duas fontes de energia (billigare, renare, mer hållbar, bäst) e repetindo o que um especialista disse (“Hon sa att…”).',
      },
      {
        id: 'sv-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vilken svensk forskare tycker du är mest intressant, och varför?',
          botTranslation: 'Qual cientista sueco você acha o mais interessante, e por quê?',
          expected: [
            'Jag tycker att Linné är mest intressant, eftersom han var en forskare som gav namn åt tusentals arter.',
            'mest intressant',
            'som',
            'vars',
            'sa att',
          ],
          hint: 'Junte superlativo (mest intressant), relativo (som, vars) e, se puder, discurso indireto (“han skrev att…”).',
        },
        communityPrompt:
          'Escreva 5 frases sobre uma descoberta científica: dois comparativos, um superlativo, uma oração com “som” ou “vars” e uma frase em discurso indireto.',
      },
    ],
  },
  {
    id: 'sv-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Norrland e Lapônia: e se…?',
    emoji: '🌌',
    card: {
      id: 'sv-c9',
      title: 'Acima do Círculo Polar',
      emoji: '🦌',
      history:
        'Kiruna, a cidade mais ao norte da Suécia, cresceu no começo do século XX em volta de uma enorme mina de ferro; como a mina avança por baixo do terreno, o centro da cidade está sendo transferido alguns quilômetros para leste. Acima do Círculo Polar, o sol não se põe por semanas no verão (o sol da meia-noite), e em dezembro quase não aparece. Os sámi, povo indígena da região, vivem em Sápmi, território que se estende pela Noruega, Suécia, Finlândia e Rússia; na Suécia eles têm um parlamento próprio, o Sametinget, desde 1993, e a criação de renas é, em grande parte, reservada a eles. O dia nacional sámi é 6 de fevereiro.',
      culture_tip:
        'Não trate os sámi como atração turística: peça licença antes de fotografar pessoas, casas e renas, e não use a roupa tradicional (gákti) como fantasia. No inverno, a aurora boreal aparece melhor em noite sem nuvens, longe das luzes da cidade. E se cruzar com renas na estrada, diminua a velocidade: elas não saem da frente com pressa.',
      grammar_why:
        'Para o que não é real, o sueco usa “skulle + infinitivo”, como o nosso futuro do pretérito: “Jag skulle flytta till Kiruna” = eu me mudaria para Kiruna. A hipótese no presente leva o pretérito depois de “om”: “Om jag hade mer tid, skulle jag åka norrut” (se eu tivesse…). Como a oração com “om” vem primeiro, o verbo principal vem logo depois dela (V2): “…, skulle jag”. Para o passado que não aconteceu, usa-se “hade + supino” nas duas partes ou “skulle ha + supino”: “Om vi hade åkt i mars, hade vi sett norrskenet”. O antigo subjuntivo sobrevive em “vore” (de vara: fosse, seria) — “Det vore roligt”, “om jag vore du” — e em fórmulas fixas como “Leve kungen!” (viva o rei!) e “Gud bevare…” (Deus guarde…).',
      grammar_examples: [
        ['Om jag vore du, skulle jag ta nattåget till Kiruna.', 'Se eu fosse você, pegaria o trem noturno para Kiruna.'],
        ['Det vore fantastiskt att se norrskenet.', 'Seria fantástico ver a aurora boreal.'],
        ['Om vi hade åkt i februari, hade vi sett mer snö.', 'Se tivéssemos ido em fevereiro, teríamos visto mais neve.'],
        ['Jag skulle gärna vilja åka hundspann en dag.', 'Eu adoraria andar de trenó puxado por cães um dia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u9-l1',
        title: 'Inverno em Kiruna',
        kind: 'licao',
        words: ['norrsken', 'midnattssol', 'mörker', 'minusgrader', 'snöskoter', 'hundspann'],
        cloze: [
          {
            sentence: 'Om det ___ molnfritt i kväll, skulle vi se norrskenet.',
            answer: 'vore',
            options: ['vore', 'är', 'blir'],
            translation: 'Se o céu estivesse limpo hoje à noite, veríamos a aurora boreal.',
          },
          {
            sentence: 'Om jag bodde i Kiruna, ___ jag köpa en snöskoter.',
            answer: 'skulle',
            options: ['skulle', 'ska', 'kommer'],
            translation: 'Se eu morasse em Kiruna, compraria uma moto de neve.',
          },
          {
            sentence: 'Om vi hade åkt i juni, ___ vi sett midnattssolen.',
            answer: 'hade',
            options: ['hade', 'har', 'ha'],
            translation: 'Se tivéssemos ido em junho, teríamos visto o sol da meia-noite.',
          },
        ],
        voice: {
          bot: 'Vad skulle du göra om du fick en vecka i Kiruna i januari?',
          botTranslation: 'O que você faria se ganhasse uma semana em Kiruna em janeiro?',
          expected: [
            'Om jag fick en vecka i Kiruna, skulle jag åka hundspann och försöka se norrskenet.',
            'skulle jag',
            'om jag fick',
            'hundspann',
          ],
          hint: 'Responda com “Om jag fick…, skulle jag…” e lembre da inversão depois da oração com “om”.',
        },
        communityPrompt:
          'Escreva 3 frases começando com “Om jag bodde i Norrland…” e uma com “vore” (“Det vore…”).',
      },
      {
        id: 'sv-u9-l2',
        title: 'Sápmi: renas e joik',
        kind: 'licao',
        words: ['renskötsel', 'jojk', 'minoritetsspråk', 'järv', 'lodjur', 'fjällräv'],
        cloze: [
          {
            sentence: 'Om det inte fanns så många rovdjur, ___ renskötseln lättare.',
            answer: 'vore',
            options: ['vore', 'är', 'varit'],
            translation: 'Se não houvesse tantos predadores, a criação de renas seria mais fácil.',
          },
          {
            sentence: 'Jag ___ gärna vilja lära mig att jojka.',
            answer: 'skulle',
            options: ['skulle', 'ska', 'vore'],
            translation: 'Eu gostaria muito de aprender a cantar joik.',
          },
          {
            sentence: 'Om lodjuret inte ___ sprungit iväg, hade vi fått ett bra foto.',
            answer: 'hade',
            options: ['hade', 'har', 'skulle'],
            translation: 'Se o lince não tivesse fugido, teríamos conseguido uma boa foto.',
          },
        ],
        voice: {
          bot: 'Om du fick träffa en samisk renskötare, vad skulle du fråga?',
          botTranslation: 'Se você pudesse conhecer um criador de renas sámi, o que perguntaria?',
          expected: [
            'Jag skulle fråga hur renskötseln fungerar på vintern och om hen kan jojka.',
            'jag skulle fråga',
            'renskötseln',
            'om hen',
          ],
          hint: 'Comece com “Jag skulle fråga…” e use “om” (= se) na pergunta indireta.',
        },
        communityPrompt:
          'Escreva 3 frases hipotéticas sobre uma viagem a Sápmi, com respeito à cultura sámi (“Om jag…, skulle jag…”, “Jag skulle aldrig…”).',
      },
      {
        id: 'sv-u9-l3',
        title: 'Desafio de voz: o trem noturno para o norte',
        kind: 'voz',
        words: ['nattåg', 'åka skidor', 'pulka', 'kyla', 'reseförsäkring', 'resmål'],
        cloze: [
          {
            sentence: 'Det ___ skönt att sova hela vägen till Abisko med nattåget.',
            answer: 'vore',
            options: ['vore', 'är', 'varit'],
            translation: 'Seria gostoso dormir o caminho inteiro até Abisko no trem noturno.',
          },
          {
            sentence: 'Om jag inte ___ så rädd för kyla, skulle jag åka skidor varje dag.',
            answer: 'vore',
            options: ['vore', 'är', 'blir'],
            translation: 'Se eu não tivesse tanto medo do frio, esquiaria todo dia.',
          },
          {
            sentence: 'Om vi hade tagit en reseförsäkring, ___ vi inte behövt betala själva.',
            answer: 'hade',
            options: ['hade', 'har', 'ha'],
            translation: 'Se tivéssemos feito um seguro-viagem, não teríamos precisado pagar do nosso bolso.',
          },
        ],
        voice: {
          bot: 'Om du kunde välja vilket resmål som helst i Norrland, vart skulle du åka?',
          botTranslation: 'Se você pudesse escolher qualquer destino em Norrland, para onde iria?',
          expected: [
            'Jag skulle ta nattåget till Abisko och åka skidor, om det inte vore för kallt.',
            'jag skulle',
            'nattåget',
            'om det inte vore',
          ],
          hint: 'Use “skulle” + infinitivo e, para a condição, “om det inte vore…”.',
        },
        communityPrompt:
          'Grave-se descrevendo a viagem dos sonhos ao norte da Suécia com três formas hipotéticas: “skulle + infinitivo”, “om + pretérito” e “vore”.',
      },
      {
        id: 'sv-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tänk dig att du hade bott i Kiruna i ett år. Vad skulle du ha saknat, och vad hade du tyckt mest om?',
          botTranslation: 'Imagine que você tivesse morado em Kiruna por um ano. Do que teria sentido falta, e do que teria gostado mais?',
          expected: [
            'Jag skulle ha saknat solen i december, men jag hade älskat norrskenet och midnattssolen.',
            'skulle ha saknat',
            'hade',
            'om jag',
            'vore',
          ],
          hint: 'Para o passado irreal, use “skulle ha + supino” ou “hade + supino”; para o presente, “om + pretérito” e “vore”.',
        },
        communityPrompt:
          'Escreva 5 frases sobre como seria a sua vida no norte da Suécia: duas com “om + pretérito, skulle…”, uma com o passado irreal (hade + supino), uma com “vore” e um conselho com “Om jag vore du…”.',
      },
    ],
  },
  {
    id: 'sv-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Escritório e repartição: o sueco formal',
    emoji: '🗂️',
    card: {
      id: 'sv-c10',
      title: 'A du-reformen e o sueco de repartição',
      emoji: '📨',
      history:
        'Até os anos 1960, o sueco tinha um sistema de tratamento complicado: evitava-se dizer “ni” e chamava-se a pessoa pelo título, na terceira pessoa (“Vill direktören ha kaffe?”). Em 1967, Bror Rexed, ao assumir a direção do órgão nacional de saúde, anunciou que trataria todos os funcionários por “du”, e em poucos anos o costume se espalhou pelo país: é a “du-reformen”. O personnummer, o número pessoal usado para quase tudo, existe desde 1947. E a Suécia teve, em 1766, a primeira lei de liberdade de imprensa do mundo, que também garantiu o acesso do público aos documentos oficiais (offentlighetsprincipen).',
      culture_tip:
        'Hoje até e-mails para órgãos públicos e empresas começam com “Hej” e tratam o leitor por “du”; o “ni” de cortesia para uma só pessoa soa antiquado ou até distante para muitos suecos, embora alguns atendentes ainda o usem. A formalidade aparece no vocabulário e na estrutura: frases completas, passiva com -s (“Ansökan skickas till…”) e a despedida “Med vänlig hälsning”. Os órgãos públicos seguem a lei da língua (språklagen, de 2009), que exige uma linguagem cuidada, simples e compreensível: o klarspråk.',
      grammar_why:
        'O registro formal sueco não depende do pronome, e sim do vocabulário e da sintaxe. No lugar do verbo comum entra um mais “de papel”: få → erhålla, köpa → införskaffa, börja → påbörja, e a preposição “om” vira “angående” (a respeito de). A passiva com -s tira a pessoa do centro (“Blanketten ska fyllas i och skickas in”), e aparecem fórmulas fixas: “Tack för ditt mejl”, “Jag återkommer så snart som möjligt”, “Se bifogad fil”, “Vänligen kontakta…”. Mesmo no e-mail formal vale o V2: “Härmed bekräftar vi…”, “Enligt avtalet ska…”. E o “ni” hoje é quase só plural (vocês): para uma pessoa, use “du”.',
      grammar_examples: [
        ['Tack för ditt mejl. Jag återkommer så snart som möjligt.', 'Obrigado pelo seu e-mail. Retorno assim que possível.'],
        ['Härmed bekräftar vi att vi har tagit emot din ansökan.', 'Pela presente, confirmamos que recebemos a sua solicitação.'],
        ['Blanketten ska fyllas i och skickas till Skatteverket.', 'O formulário deve ser preenchido e enviado à Skatteverket (a Receita sueca).'],
        ['Vänligen kontakta oss om du har frågor angående fakturan.', 'Por gentileza, entre em contato conosco se tiver dúvidas sobre a fatura.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u10-l1',
        title: 'O e-mail formal',
        kind: 'licao',
        words: ['e-post', 'bilaga', 'bifoga', 'meddela', 'jag ber om ursäkt', 'informera'],
        cloze: [
          {
            sentence: 'Härmed ___ vi att mötet flyttas till torsdag.',
            answer: 'meddelar',
            options: ['meddelar', 'meddela', 'meddelat'],
            translation: 'Pela presente, comunicamos que a reunião foi transferida para quinta-feira.',
          },
          {
            sentence: 'Se ___ fil för mer information.',
            answer: 'bifogad',
            options: ['bifogad', 'bifogat', 'bifoga'],
            translation: 'Veja o arquivo anexo para mais informações.',
          },
          {
            sentence: 'Vi vill ___ er om att kontoret är stängt under julen.',
            answer: 'informera',
            options: ['informera', 'berätta', 'säga'],
            translation: 'Gostaríamos de informar a vocês que o escritório fica fechado durante o Natal.',
          },
        ],
        voice: {
          bot: 'Du har missat ett möte med en kund. Hur börjar du ditt mejl till henne?',
          botTranslation: 'Você perdeu uma reunião com uma cliente. Como começa o seu e-mail para ela?',
          expected: [
            'Hej! Jag ber om ursäkt för att jag inte kunde komma till mötet i går. Kan vi boka en ny tid?',
            'jag ber om ursäkt',
            'inte kunde',
            'ny tid',
          ],
          hint: 'Comece com “Hej” + nome, peça desculpas de forma formal (“Jag ber om ursäkt för att…”) e proponha outro horário.',
        },
        communityPrompt:
          'Escreva um e-mail curto a uma empresa pedindo uma informação: “Hej”, uma fórmula formal (Härmed…, Vänligen…, angående…), um anexo (“Jag bifogar…”) e a despedida “Med vänlig hälsning”.',
      },
      {
        id: 'sv-u10-l2',
        title: 'Na repartição pública',
        kind: 'licao',
        words: ['personnummer', 'folkbokföring', 'blankett', 'fylla i', 'myndighet', 'tjänsteman'],
        cloze: [
          {
            sentence: 'Blanketten ska ___ i och skickas till Skatteverket.',
            answer: 'fyllas',
            options: ['fyllas', 'fylls', 'fylla'],
            translation: 'O formulário deve ser preenchido e enviado à Skatteverket.',
          },
          {
            sentence: 'För att få ett personnummer måste man vara ___ i Sverige.',
            answer: 'folkbokförd',
            options: ['folkbokförd', 'folkbokföring', 'folkbokfört'],
            translation: 'Para conseguir um personnummer, é preciso estar registrado na população da Suécia.',
          },
          {
            sentence: 'Ansökan ska lämnas in senast den 30 juni, ___ myndighetens regler.',
            answer: 'enligt',
            options: ['enligt', 'angående', 'trots'],
            translation: 'A solicitação deve ser entregue até 30 de junho, segundo as regras do órgão.',
          },
        ],
        voice: {
          bot: 'Välkommen till Skatteverket. Vad gäller ärendet?',
          botTranslation: 'Bem-vindo à Skatteverket. Do que se trata?',
          expected: [
            'Hej, jag har flyttat till Sverige och vill bli folkbokförd, så att jag kan få ett personnummer.',
            'folkbokförd',
            'personnummer',
            'jag har flyttat',
          ],
          hint: 'Explique o assunto em frases completas: “Jag vill bli folkbokförd…”, “Jag skulle behöva…”.',
        },
        communityPrompt:
          'Escreva 3 frases formais sobre um trâmite (registro, autorização de residência) com a passiva -s (“Ansökan skickas…”, “Blanketten ska fyllas i…”).',
      },
      {
        id: 'sv-u10-l3',
        title: 'Desafio de voz: a conversa sobre salário',
        kind: 'voz',
        words: ['lönesamtal', 'kollektivavtal', 'flextid', 'övertid', 'distansarbete', 'befordran'],
        cloze: [
          {
            sentence: 'Enligt kollektivavtalet ___ all övertid.',
            answer: 'ersätts',
            options: ['ersätts', 'ersätter', 'ersatt'],
            translation: 'Segundo o acordo coletivo, todas as horas extras são compensadas.',
          },
          {
            sentence: 'Jag skulle vilja ta ___ frågan om distansarbete på vårt lönesamtal.',
            answer: 'upp',
            options: ['upp', 'ut', 'bort'],
            translation: 'Eu gostaria de levantar a questão do trabalho remoto na nossa conversa sobre salário.',
          },
          {
            sentence: '___ jag har tagit på mig fler uppgifter, anser jag att en befordran vore rimlig.',
            answer: 'Eftersom',
            options: ['Eftersom', 'Fast', 'Om'],
            translation: 'Como assumi mais tarefas, considero que uma promoção seria razoável.',
          },
        ],
        voice: {
          bot: 'Välkommen till ditt lönesamtal. Hur ser du på det senaste året?',
          botTranslation: 'Bem-vindo à sua conversa sobre salário. Como você avalia o último ano?',
          expected: [
            'Jag har tagit på mig fler uppgifter och arbetat övertid, så jag anser att en löneökning vore rimlig.',
            'jag anser att',
            'vore rimlig',
            'uppgifter',
          ],
          hint: 'Seja formal e objetivo: “Jag anser att…”, “…vore rimlig”, e cite o que você fez.',
        },
        communityPrompt:
          'Grave-se pedindo ao seu chefe, com educação e registro formal, horário flexível ou trabalho remoto: use “Jag skulle vilja…”, “Jag anser att…” e uma frase com “enligt”.',
      },
      {
        id: 'sv-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'En kund har mejlat och klagat på att fakturan var fel. Hur svarar du?',
          botTranslation: 'Um cliente mandou um e-mail reclamando que a fatura estava errada. Como você responde?',
          expected: [
            'Tack för ditt mejl. Jag ber om ursäkt för felet. En ny faktura skickas till dig i dag. Med vänlig hälsning.',
            'tack för ditt mejl',
            'jag ber om ursäkt',
            'skickas',
            'med vänlig hälsning',
          ],
          hint: 'Agradeça, peça desculpas, diga o que será feito com a passiva -s (“skickas”, “rättas”) e feche com “Med vänlig hälsning”.',
        },
        communityPrompt:
          'Escreva um e-mail formal completo a um órgão público ou empresa: saudação, assunto com “angående”, um pedido com “vänligen” ou “jag skulle vilja”, uma passiva com -s, um anexo e a despedida.',
      },
    ],
  },
  // ───────────────────────── sv-u11 · B2.3 ─────────────────────────
  {
    id: 'sv-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Vacas no gelo e palavras-trem',
    emoji: '🐄',
    card: {
      id: 'sv-c11',
      title: 'O sueco das imagens',
      emoji: '🦐',
      history:
        'O sueco adora expressões com imagens do campo, do inverno e da mesa. “Ingen ko på isen” vem de uma frase mais longa, “det är ingen ko på isen så länge rumpan är på land”: enquanto o traseiro da vaca estiver em terra firme, não há perigo. A “räkmacka”, o sanduíche aberto de camarão, sempre teve fama de luxo, e quem “glider in på en räkmacka” chega lá deslizando, sem esforço. Outra marca da língua são as palavras compostas, escritas juntas e quase sem limite de tamanho: fredagsmys, kontorslandskap, trängselskatt. E nos bairros de periferia das cidades grandes nasceu uma gíria jovem, às vezes chamada de “förortssvenska”, com palavras vindas de línguas de imigrantes, como “guss” (garota), do turco.',
      culture_tip:
        'Expressão idiomática é tempero: uma por conversa soa natural, cinco soam como livro didático. “Ingen ko på isen” é perfeita para tranquilizar um colega que pede desculpas por um atraso pequeno. Gírias como “taggad” e “kanon” ficam ótimas entre amigos, mas fora de um e-mail para uma repartição. E cuidado com a “särskrivning”, o erro de separar os compostos: “rökfritt” quer dizer “proibido fumar”, mas “rök fritt” vira “fume à vontade”.',
      grammar_why:
        'Três coisas marcam este nível. Primeiro, as expressões fixas não se traduzem palavra por palavra e se conjugam como qualquer frase: “hon har is i magen”, “du är ute och cyklar”, “han gled in på en räkmacka” (glida, gled, glidit). Segundo, os compostos: o sueco junta as palavras numa só, e a ÚLTIMA parte decide o gênero e o plural (ett kontor + ett landskap = ett kontorslandskap; en fredag + ett mys = ett fredagsmys, fredagsmyset). Muitas vezes entra um -s- de ligação entre as partes (arbete + plats = arbetsplats; trängsel + skatt = trängselskatt), coisa que o português não tem. Terceiro, a gíria segue a gramática normal: “jag är så taggad!”, “det var kanon!”. Separar um composto muda o sentido, então a regra de ouro é: junto!',
      grammar_examples: [
        ['Ingen ko på isen – vi hinner till tåget ändå.', 'Não tem problema nenhum: a gente alcança o trem mesmo assim.'],
        ['Han har verkligen is i magen: han blev inte nervös en enda gång.', 'Ele tem mesmo sangue-frio: não ficou nervoso nem uma vez.'],
        ['Vårt kontorslandskap är ljust men ganska bullrigt.', 'Nosso escritório aberto é claro, mas bem barulhento.'],
        ['Jag är så taggad inför fredagsmyset!', 'Estou muito empolgado com o fredagsmys de hoje!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u11-l1',
        title: 'Vacas, porcos e panquequinhas',
        kind: 'licao',
        words: ['ingen ko på isen', 'glida in på en räkmacka', 'lätt som en plätt', 'köpa grisen i säcken', 'slå två flugor i en smäll', 'hungrig som en varg'],
        cloze: [
          {
            sentence: 'Provet var lätt som en ___: jag var klar efter tjugo minuter.',
            answer: 'plätt',
            options: ['plätt', 'pannkaka', 'macka'],
            translation: 'A prova foi moleza: terminei em vinte minutos.',
          },
          {
            sentence: 'Han fick jobbet utan att ens söka det – han gled in på en ___.',
            answer: 'räkmacka',
            options: ['räkmacka', 'räka', 'smörgås'],
            translation: 'Ele conseguiu o emprego sem nem se candidatar: se deu bem sem esforço nenhum.',
          },
          {
            sentence: 'Om vi cyklar till jobbet slår vi två flugor i en ___: vi motionerar och sparar pengar.',
            answer: 'smäll',
            options: ['smäll', 'slag', 'gång'],
            translation: 'Se formos de bicicleta para o trabalho, matamos dois coelhos com uma cajadada só: fazemos exercício e economizamos dinheiro.',
          },
        ],
        voice: {
          bot: 'Förlåt att jag är sen! Tåget stod stilla i en halvtimme utanför Uppsala.',
          botTranslation: 'Desculpe o atraso! O trem ficou parado meia hora perto de Uppsala.',
          expected: [
            'Ingen ko på isen! Filmen börjar inte förrän om tio minuter, så vi hinner köpa popcorn.',
            'ingen ko på isen',
            'vi hinner',
            'om tio minuter',
          ],
          hint: 'Tranquilize o amigo com “ingen ko på isen” e diga por que o atraso não atrapalhou nada.',
        },
        communityPrompt: 'Escreva em sueco uma historinha de 4 frases em que uma pessoa “glider in på en räkmacka” e outra “köper grisen i säcken”. Depois diga qual expressão do português combina com cada uma.',
      },
      {
        id: 'sv-u11-l2',
        title: 'Gelo na barriga e touca de dormir',
        kind: 'licao',
        words: ['ha is i magen', 'ha tummen mitt i handen', 'vara ute och cykla', 'prata i nattmössan', 'taggad', 'kanon'],
        cloze: [
          {
            sentence: 'Om du tror att det är varmt i Kiruna i januari, så ___ du ute och cyklar.',
            answer: 'är',
            options: ['är', 'har', 'går'],
            translation: 'Se você acha que faz calor em Kiruna em janeiro, está redondamente enganado.',
          },
          {
            sentence: 'Min bror kan inte ens byta en glödlampa – han har tummen mitt i ___.',
            answer: 'handen',
            options: ['handen', 'hand', 'händerna'],
            translation: 'Meu irmão não consegue nem trocar uma lâmpada: é um desastre com as mãos.',
          },
          {
            sentence: 'Kirurgen hade is i ___ när strömmen plötsligt gick mitt under operationen.',
            answer: 'magen',
            options: ['magen', 'huvudet', 'hjärtat'],
            translation: 'O cirurgião manteve o sangue-frio quando a luz caiu de repente no meio da operação.',
          },
        ],
        voice: {
          bot: 'Tjena! På lördag spelar vi innebandy, och sedan blir det middag hos mig. Hänger du med?',
          botTranslation: 'E aí! No sábado a gente vai jogar floorball e depois tem jantar lá em casa. Você vem junto?',
          expected: ['Kanon! Jag är så taggad, jag kommer direkt efter jobbet.', 'kanon', 'taggad', 'jag kommer'],
          hint: 'É um amigo: responda com entusiasmo e gíria (“kanon”, “taggad”).',
        },
        communityPrompt: 'Descreva em sueco duas pessoas que você conhece: uma que “har is i magen” e outra que “har tummen mitt i handen”. Dê um exemplo concreto de cada, contado no pretérito.',
      },
      {
        id: 'sv-u11-l3',
        title: 'Desafio de voz: palavras-trem',
        kind: 'voz',
        words: ['fredagsmys', 'kontorslandskap', 'trängselskatt', 'skärmtid', 'älgvarning', 'sopsortering'],
        cloze: [
          {
            sentence: 'Barnen längtar hela veckan efter ___ med chips och film.',
            answer: 'fredagsmyset',
            options: ['fredagsmyset', 'fredagsmysen', 'fredagsmysets'],
            translation: 'As crianças esperam a semana inteira pelo fredagsmys com salgadinho e filme.',
          },
          {
            sentence: 'I Stockholm och Göteborg betalar bilisterna ___ när de kör in i eller ut ur centrum.',
            answer: 'trängselskatt',
            options: ['trängselskatt', 'trängsel skatt', 'trängselsskatt'],
            translation: 'Em Estocolmo e Gotemburgo, os motoristas pagam taxa de congestionamento quando entram no centro ou saem dele.',
          },
          {
            sentence: 'Längs vägen norrut står det ofta skyltar med ___: sakta ner i skymningen!',
            answer: 'älgvarning',
            options: ['älgvarning', 'älg varning', 'älgsvarning'],
            translation: 'Ao longo da estrada rumo ao norte há muitas placas de alerta de alce: diminua a velocidade ao anoitecer!',
          },
        ],
        voice: {
          bot: 'Hur ser en vanlig arbetsdag ut för dig? Jobbar du i ett kontorslandskap eller hemifrån?',
          botTranslation: 'Como é um dia de trabalho normal para você? Você trabalha num escritório aberto ou de casa?',
          expected: [
            'Jag jobbar i ett kontorslandskap i centrum, men på fredagar jobbar jag hemifrån, och på kvällen blir det fredagsmys.',
            'kontorslandskap',
            'hemifrån',
            'fredagsmys',
          ],
          hint: 'Use pelo menos dois compostos (kontorslandskap, fredagsmys, skärmtid) e lembre que “ett kontorslandskap” é neutro.',
        },
        communityPrompt: 'Invente em sueco três palavras compostas para coisas do Brasil (por exemplo, a fila da padaria de domingo) e explique a formação de cada uma: gênero, -s- de ligação e sentido.',
      },
      {
        id: 'sv-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du har bott i Sverige ett tag nu. Vilka svenska uttryck tycker du är roligast, och varför?',
          botTranslation: 'Você já mora na Suécia há algum tempo. Quais expressões suecas você acha mais engraçadas, e por quê?',
          expected: [
            'Jag tycker att “glida in på en räkmacka” är roligast, för en räkmacka är ju lyx. Och “ingen ko på isen” säger jag hela tiden på jobbet.',
            'räkmacka',
            'ingen ko på isen',
            'jag tycker att',
          ],
          hint: 'Cite pelo menos duas expressões, explique a imagem por trás de uma delas e diga em que situação você a usa.',
        },
        communityPrompt: 'Escreva em sueco uma mensagem de 6 frases para um amigo contando sua semana de trabalho: use duas expressões idiomáticas, duas gírias e três compostos, sem nenhuma “särskrivning”.',
      },
    ],
  },

  // ───────────────────────── sv-u12 · B2.4 ─────────────────────────
  {
    id: 'sv-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Argumentar à sueca',
    emoji: '⚖️',
    card: {
      id: 'sv-c12',
      title: 'Debate e consenso',
      emoji: '🗣️',
      history:
        'A política sueca tem fama de buscar o consenso: antes das grandes leis, costuma haver comissões de estudo e consultas amplas a órgãos e entidades. Todo verão, em Visby, na ilha de Gotland, acontece a Almedalsveckan, uma semana de debates abertos com partidos, organizações e cidadãos; a tradição remonta a 1968, quando Olof Palme discursou no parque de Almedalen de cima da carroceria de um caminhão. Na escola, os alunos treinam desde cedo o texto argumentativo, com tese, argumentos, contra-argumento e conclusão. Temas que rendem bons debates: o trabalho remoto, a energia nuclear e os limites do allemansrätten.',
      culture_tip:
        'Numa discussão, os suecos costumam falar um de cada vez, sem interromper, e uma pausa antes da resposta é sinal de que a pessoa está pensando, não de desinteresse. Discordar é normal, mas com calma: “jag förstår hur du tänker, men…” é bem mais sueco do que um “você está errado!”. Levantar a voz costuma fazer você perder a discussão, mesmo tendo razão.',
      grammar_why:
        'Os conectores suecos são de dois tipos, e isso muda a ordem das palavras. Advérbios como “dessutom” (além disso), “däremot” (em compensação), “därför” (por isso), “ändå” (mesmo assim), “alltså” (portanto) e expressões como “å andra sidan” ocupam o primeiro lugar da frase e empurram o verbo para antes do sujeito, pela regra V2: “Därför tycker jag…”, “Dessutom är det billigare”. Já as conjunções “och”, “men”, “för” e “eller” não contam como primeiro lugar: “…men jag tycker…”. E “trots att”, “eftersom” e “fastän” abrem uma oração subordinada, em que o “inte” vem ANTES do verbo: “trots att det inte är billigt”. Na pontuação, o sueco usa menos vírgulas que o português: não se põe vírgula antes de “att”, mas se recomenda vírgula depois de uma subordinada que abre a frase, e aí vem a inversão: “Eftersom det regnar, stannar vi hemma”.',
      grammar_examples: [
        ['Distansarbete sparar tid. Dessutom är det bättre för miljön.', 'O trabalho remoto economiza tempo. Além disso, é melhor para o meio ambiente.'],
        ['Min syster älskar storstaden. Jag trivs däremot bäst på landet.', 'Minha irmã adora a cidade grande. Eu, em compensação, me sinto melhor no interior.'],
        ['Trots att kärnkraft inte släpper ut koldioxid, är många oroliga för avfallet.', 'Embora a energia nuclear não emita dióxido de carbono, muita gente se preocupa com os resíduos.'],
        ['Jag gillar kontoret, men jag jobbar hellre hemifrån på fredagar.', 'Gosto do escritório, mas prefiro trabalhar de casa às sextas.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u12-l1',
        title: 'Por um lado, por outro',
        kind: 'licao',
        words: ['å ena sidan', 'å andra sidan', 'däremot', 'dessutom', 'framför allt', 'tvärtom'],
        cloze: [
          {
            sentence: 'Distansarbete är skönt. ___ blir man lätt ensam hemma.',
            answer: 'Å andra sidan',
            options: ['Å andra sidan', 'Å ena sidan', 'Framför allt'],
            translation: 'Trabalhar de casa é gostoso. Por outro lado, é fácil se sentir sozinho.',
          },
          {
            sentence: 'Kärnkraft ger stabil el. Dessutom ___ nästan ingen koldioxid.',
            answer: 'släpper den ut',
            options: ['släpper den ut', 'den släpper ut', 'släpper ut den'],
            translation: 'A energia nuclear fornece eletricidade estável. Além disso, quase não emite dióxido de carbono.',
          },
          {
            sentence: 'Tror du att svenskar är tysta på möten? ___! De kan diskutera i timmar för att nå konsensus.',
            answer: 'Tvärtom',
            options: ['Tvärtom', 'Däremot', 'Framför allt'],
            translation: 'Você acha que os suecos ficam calados nas reuniões? Pelo contrário! Eles conseguem discutir por horas para chegar a um consenso.',
          },
        ],
        voice: {
          bot: 'Vad tycker du om distansarbete? Är det bra eller dåligt?',
          botTranslation: 'O que você acha do trabalho remoto? É bom ou ruim?',
          expected: [
            'Å ena sidan sparar man tid och pengar. Å andra sidan saknar man kollegorna, så jag jobbar helst hemifrån två dagar i veckan.',
            'å ena sidan',
            'å andra sidan',
            'saknar man',
          ],
          hint: 'Pese os dois lados com “å ena sidan… å andra sidan” e lembre a inversão: “Å andra sidan saknar man…”.',
        },
        communityPrompt: 'Escreva 4 frases em sueco sobre morar na cidade grande × no interior, cada uma começando por um conector diferente (å ena sidan, å andra sidan, dessutom, däremot), com o verbo logo em seguida, como manda a regra V2.',
      },
      {
        id: 'sv-u12-l2',
        title: 'Apesar de tudo',
        kind: 'licao',
        words: ['trots', 'fastän', 'ändå', 'därför', 'i så fall', 'det beror på'],
        cloze: [
          {
            sentence: 'Vi badade i sjön, trots att vattnet ___ särskilt varmt.',
            answer: 'inte var',
            options: ['inte var', 'var inte', 'inte varit'],
            translation: 'Nadamos no lago, embora a água não estivesse muito quente.',
          },
          {
            sentence: 'Det regnade hela dagen. Vi åkte ___ ut till skärgården.',
            answer: 'ändå',
            options: ['ändå', 'fastän', 'trots'],
            translation: 'Choveu o dia inteiro. Mesmo assim, fomos para o arquipélago.',
          },
          {
            sentence: 'Är tåget inställt? ___ tar jag bussen.',
            answer: 'I så fall',
            options: ['I så fall', 'Fastän', 'Trots att'],
            translation: 'O trem foi cancelado? Nesse caso, eu pego o ônibus.',
          },
        ],
        voice: {
          bot: 'Borde alla svenska städer införa trängselskatt, som Stockholm och Göteborg?',
          botTranslation: 'Todas as cidades suecas deveriam adotar a taxa de congestionamento, como Estocolmo e Gotemburgo?',
          expected: [
            'Det beror på. I stora städer minskar den trafiken, och därför tycker jag att den är bra. I små städer behövs den däremot inte, eftersom det inte finns så mycket trafik.',
            'det beror på',
            'därför tycker jag',
            'eftersom det inte finns',
          ],
          hint: 'Comece com “det beror på”, dê um argumento com “därför” (e inversão) e um contra-argumento. Atenção: “eftersom det inte finns”, com o “inte” antes do verbo.',
        },
        communityPrompt: 'Escreva 3 frases em sueco sobre um hábito seu que tem desvantagens, usando “trots att”, “fastän” e “ändå”. Atenção à posição do “inte” nas orações com “trots att” e “fastän”.',
      },
      {
        id: 'sv-u12-l3',
        title: 'Desafio de voz: debate em Almedalen',
        kind: 'voz',
        words: ['debatt', 'konsensus', 'jag håller med', 'med andra ord', 'det vill säga', 'hur som helst'],
        cloze: [
          {
            sentence: 'Jag håller ___ dig om att vi behöver fler cykelbanor.',
            answer: 'med',
            options: ['med', 'på', 'till'],
            translation: 'Concordo com você que precisamos de mais ciclovias.',
          },
          {
            sentence: 'Förslaget är för dyrt. Med andra ord ___ vänta ett år till.',
            answer: 'måste vi',
            options: ['måste vi', 'vi måste', 'att vi måste'],
            translation: 'A proposta é cara demais. Em outras palavras, temos que esperar mais um ano.',
          },
          {
            sentence: 'Vi ses i Visby vecka 27, ___ i början av juli.',
            answer: 'det vill säga',
            options: ['det vill säga', 'hur som helst', 'å andra sidan'],
            translation: 'A gente se vê em Visby na semana 27, ou seja, no começo de julho.',
          },
        ],
        voice: {
          bot: 'Välkommen till vår debatt i Almedalen! Vissa menar att allemansrätten borde begränsas för stora turistgrupper. Vad tycker du?',
          botTranslation: 'Bem-vindo ao nosso debate em Almedalen! Algumas pessoas acham que o direito de livre acesso à natureza deveria ser limitado para grandes grupos de turistas. O que você acha?',
          expected: [
            'Jag håller delvis med. Allemansrätten är viktig, men stora grupper sliter på naturen. Med andra ord behöver vi tydligare regler, inte ett förbud.',
            'jag håller delvis med',
            'med andra ord',
            'behöver vi',
          ],
          hint: 'Mostre concordância parcial (“jag håller delvis med”), dê um argumento e resuma com “med andra ord” + inversão.',
        },
        communityPrompt: 'Escreva um mini-artigo de opinião em sueco (5 frases) sobre um tema sueco à sua escolha: tese, dois argumentos ligados por “dessutom”, um contra-argumento com “däremot” e uma conclusão com “med andra ord”.',
      },
      {
        id: 'sv-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Många menar att man ska få jobba hemifrån så mycket man vill. Vad anser du?',
          botTranslation: 'Muita gente acha que a pessoa deveria poder trabalhar de casa o quanto quiser. Qual é a sua opinião?',
          expected: [
            'Det beror på. Å ena sidan sparar man tid, och dessutom slipper man trängseln i kollektivtrafiken. Å andra sidan blir man lätt ensam, trots att man har kontakt med kollegorna på nätet. Därför tycker jag att två dagar hemma i veckan är lagom.',
            'å ena sidan',
            'å andra sidan',
            'därför tycker jag',
          ],
          hint: 'Organize a resposta: posição, argumento, contra-argumento e conclusão. Use pelo menos quatro conectores e cuide da inversão depois de cada um.',
        },
        communityPrompt: 'Escreva um texto argumentativo de 7 frases em sueco com todos estes conectores: å ena sidan, å andra sidan, dessutom, däremot, trots att, därför. Depois revise a pontuação: vírgula depois de subordinada inicial e nenhuma antes de “att”.',
      },
    ],
  },

  // ───────────────────────── sv-u13 · C1.1 ─────────────────────────
  {
    id: 'sv-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Uma língua, muitas vozes',
    emoji: '🗺️',
    card: {
      id: 'sv-c13',
      title: 'Dialetos, vizinhos e minorias',
      emoji: '🦌',
      history:
        'O Skåne foi dinamarquês até o Tratado de Roskilde, de 1658, e o skånska tem até hoje o r gutural e vogais que viram ditongos; no Norrland, a melodia da fala é outra; em Gotland, o antigo gutnisk ainda deixa marcas. Na Finlândia, o sueco é língua nacional ao lado do finlandês, e a região autônoma de Åland fala sueco como única língua oficial. Desde 2000, a Suécia reconhece cinco línguas minoritárias nacionais: o sámi, o finlandês, o meänkieli, o romani chib e o ídiche. Os sámi são o povo indígena do norte da Noruega, da Suécia e da Finlândia e da península de Kola, na Rússia; o parlamento sámi da Suécia, o Sametinget, tem sede em Kiruna, e o dia nacional sámi é 6 de fevereiro.',
      culture_tip:
        'Nunca trate um dialeto como sueco “errado”: muitos suecos têm orgulho do seu jeito regional de falar, que faz parte da identidade local. Ao falar do povo sámi, use “samer” e “samisk”; o termo antigo “lapp” é considerado ofensivo por muitos. E o joik não é um canto “sobre” alguém: diz-se que se “jojkar” uma pessoa, um lugar ou um animal, como se o canto os tornasse presentes.',
      grammar_why:
        'No C1 a meta é reconhecer as variantes e continuar escrevendo o padrão. No skånska, o r é pronunciado no fundo da garganta, parecido com o r de “carro” no Rio, e as vogais longas viram ditongos. O sueco da Finlândia (finlandssvenska) quase não tem os dois acentos tonais, tem um ritmo mais regular e palavras próprias, como “kiva” (legal), vinda do finlandês. Entre as línguas escandinavas a intercompreensão é alta, sobretudo na escrita, mas há armadilhas: “rolig” é “engraçado” em sueco e “calmo” em norueguês e dinamarquês. Para falar de línguas e povos, capriche na concordância: “ett minoritetsspråk”, “samisk kultur” mas “den samiska kulturen”, “samerna”, e “lik” concordando com o sujeito (danskan är lik svenskan; språken är lika).',
      grammar_examples: [
        ['I Skåne låter r:et nästan som i Rio de Janeiro.', 'No Skåne, o r soa quase como no Rio de Janeiro.'],
        ['Samerna är Sveriges urfolk, och samiska är ett av fem nationella minoritetsspråk.', 'Os sámi são o povo indígena da Suécia, e o sámi é uma das cinco línguas minoritárias nacionais.'],
        ['På Åland talar man svenska, fast ögruppen tillhör Finland.', 'Em Åland se fala sueco, embora o arquipélago pertença à Finlândia.'],
        ['En norrman som säger att filmen var rolig menar kanske att den var lugn.', 'Um norueguês que diz que o filme foi “rolig” talvez queira dizer que ele foi calmo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u13-l1',
        title: 'Do Skåne ao Norrland',
        kind: 'licao',
        words: ['uttal', 'landskap', 'glesbygd', 'kust', 'invånare', 'generation'],
        cloze: [
          {
            sentence: 'Skåne var danskt fram till 1658, och det hörs fortfarande i ___.',
            answer: 'uttalet',
            options: ['uttalet', 'uttalen', 'uttals'],
            translation: 'O Skåne foi dinamarquês até 1658, e isso ainda se ouve na pronúncia.',
          },
          {
            sentence: 'I Norrlands ___ bor det få människor på stora ytor.',
            answer: 'glesbygd',
            options: ['glesbygd', 'glesbygden', 'glesbygds'],
            translation: 'Nas regiões pouco povoadas do Norrland, poucas pessoas vivem em áreas enormes.',
          },
          {
            sentence: 'Varje svenskt ___ har sin egen dialekt, sitt eget landskapsdjur och sin egen landskapsblomma.',
            answer: 'landskap',
            options: ['landskap', 'landskapet', 'landskaps'],
            translation: 'Cada província histórica sueca tem seu dialeto, seu animal símbolo e sua flor símbolo.',
          },
        ],
        voice: {
          bot: 'Jag hör att du inte är härifrån. Vilken svensk dialekt tycker du är svårast att förstå?',
          botTranslation: 'Estou percebendo que você não é daqui. Qual dialeto sueco você acha mais difícil de entender?',
          expected: [
            'Skånskan är svårast för mig, eftersom r:et låter annorlunda och vokalerna blir diftonger. Men jag gillar den!',
            'skånskan',
            'eftersom',
            'låter annorlunda',
          ],
          hint: 'Diga qual dialeto e explique o motivo com “eftersom” (pronúncia, melodia, palavras), sem tratá-lo como “errado”.',
        },
        communityPrompt: 'Compare em sueco (4 frases) dois sotaques do Brasil com dois dialetos suecos desta unidade, tratando todos como jeitos legítimos de falar.',
      },
      {
        id: 'sv-u13-l2',
        title: 'O sámi e as línguas minoritárias',
        kind: 'licao',
        words: ['minoritetsspråk', 'renskötsel', 'jojk', 'modersmål', 'mångfald', 'respekt'],
        cloze: [
          {
            sentence: 'Sverige har fem nationella ___: samiska, finska, meänkieli, romani chib och jiddisch.',
            answer: 'minoritetsspråk',
            options: ['minoritetsspråk', 'minoritetsspråken', 'minoritetsspråks'],
            translation: 'A Suécia tem cinco línguas minoritárias nacionais: sámi, finlandês, meänkieli, romani chib e ídiche.',
          },
          {
            sentence: 'Barn som har samiska som ___ har rätt till undervisning i språket i skolan.',
            answer: 'modersmål',
            options: ['modersmål', 'modersmålet', 'modersmålen'],
            translation: 'Crianças que têm o sámi como língua materna têm direito a aulas da língua na escola.',
          },
          {
            sentence: 'Renskötseln har i århundraden format den ___ kulturen.',
            answer: 'samiska',
            options: ['samiska', 'samisk', 'samiskt'],
            translation: 'Há séculos a criação de renas dá forma à cultura sámi.',
          },
        ],
        voice: {
          bot: 'Vad vet du om samerna och deras språk?',
          botTranslation: 'O que você sabe sobre os sámi e sua língua?',
          expected: [
            'Samerna är ett urfolk som bor i norra Sverige, Norge och Finland och på Kolahalvön i Ryssland. Samiska är ett av Sveriges minoritetsspråk, och jojken är en viktig del av kulturen.',
            'urfolk',
            'minoritetsspråk',
            'jojken',
          ],
          hint: 'Use “samerna”, “samiska” e “urfolk”, com respeito, e cite pelo menos um traço da cultura (a língua, o joik, a criação de renas).',
        },
        communityPrompt: 'Pesquise uma das cinco línguas minoritárias nacionais da Suécia e escreva em sueco 4 frases sobre ela: onde é falada, por quem e como a sociedade a protege.',
      },
      {
        id: 'sv-u13-l3',
        title: 'Desafio de voz: sueco, norueguês e dinamarquês',
        kind: 'voz',
        words: ['likna', 'lik', 'främmande', 'tolk', 'översätta', 'gräns'],
        cloze: [
          {
            sentence: 'Norska ___ svenska så mycket att de flesta svenskar förstår en norrman utan tolk.',
            answer: 'liknar',
            options: ['liknar', 'liknas', 'likna'],
            translation: 'O norueguês se parece tanto com o sueco que a maioria dos suecos entende um norueguês sem intérprete.',
          },
          {
            sentence: 'I skrift är danskan ganska ___ svenskan, men uttalet är svårare att förstå.',
            answer: 'lik',
            options: ['lik', 'likt', 'lika'],
            translation: 'Na escrita, o dinamarquês é bem parecido com o sueco, mas a pronúncia é mais difícil de entender.',
          },
          {
            sentence: 'På mötet i Oslo behövde vi ingen ___: alla pratade sitt eget språk.',
            answer: 'tolk',
            options: ['tolk', 'tolken', 'tolkar'],
            translation: 'Na reunião em Oslo não precisamos de intérprete: cada um falou a sua própria língua.',
          },
        ],
        voice: {
          bot: 'Hei! Jeg heter Ingrid og kommer fra Bergen. Forstår du hva jeg sier?',
          botTranslation: '(em norueguês) Oi! Eu me chamo Ingrid e sou de Bergen. Você entende o que eu estou dizendo?',
          expected: [
            'Ja, jag förstår nästan allt! Norska liknar svenska, fast vissa ord är främmande för mig.',
            'jag förstår',
            'liknar',
            'främmande',
          ],
          hint: 'Responda em sueco: numa conversa escandinava cada um costuma falar a própria língua. Use “liknar” e “fast”.',
        },
        communityPrompt: 'Encontre um par de palavras que confunde suecos e noruegueses ou dinamarqueses (como “rolig”) e explique em sueco, em 3 frases, o que cada um entende.',
      },
      {
        id: 'sv-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi gör ett radioprogram om språklig mångfald i Norden. Vad tycker du att Sverige ska göra för sina minoritetsspråk?',
          botTranslation: 'Estamos fazendo um programa de rádio sobre a diversidade linguística nos países nórdicos. O que você acha que a Suécia deve fazer pelas suas línguas minoritárias?',
          expected: [
            'Jag tycker att barn ska få undervisning på sitt modersmål, oavsett om det är samiska, finska eller meänkieli. Språklig mångfald är en rikedom, och dialekterna förtjänar samma respekt som rikssvenskan.',
            'modersmål',
            'mångfald',
            'respekt',
          ],
          hint: 'Dê uma opinião fundamentada, cite línguas concretas e fale das minorias e dos dialetos com respeito.',
        },
        communityPrompt: 'Escreva em sueco um texto de 6 frases, para brasileiros, explicando a paisagem linguística do Norte: dialetos, finlandssvenska, intercompreensão escandinava e línguas minoritárias, em tom respeitoso.',
      },
    ],
  },

  // ───────────────────────── sv-u14 · C1.2 ─────────────────────────
  {
    id: 'sv-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Repartições, jornais e teses',
    emoji: '📑',
    card: {
      id: 'sv-c14',
      title: 'Da myndighetssvenska ao klarspråk',
      emoji: '🏛️',
      history:
        'A Suécia tem uma das leis de imprensa mais antigas do mundo: a Tryckfrihetsförordningen, de 1766, garantiu a liberdade de imprensa e criou o princípio da publicidade (offentlighetsprincipen), que dá a qualquer pessoa o direito de ler documentos oficiais. Por muito tempo, os órgãos públicos escreveram num estilo pesado, cheio de substantivos e passivas, que ganhou o apelido de “myndighetssvenska”. Desde os anos 1970 o governo trabalha pela linguagem clara, e a Lei da Língua de 2009 (språklagen) determina que a linguagem do setor público seja “vårdat, enkelt och begripligt”. Antes de uma grande reforma, o governo costuma encomendar uma investigação (utredning), cujo parecer (betänkande) é enviado a órgãos e entidades para comentários.',
      culture_tip:
        'Se uma carta de uma repartição sueca parecer difícil, você pode ligar e pedir explicação: os funcionários estão acostumados. Muitos órgãos públicos oferecem textos em “lättläst svenska” e em outras línguas. No trabalho, prefira o estilo claro também nos seus e-mails: frases curtas, verbos no lugar de substantivos e “du” no lugar de “den sökande”.',
      grammar_why:
        'A nominalização transforma verbos em substantivos: “besluta” vira “beslut”, “genomföra” vira “genomförande”, “ansöka” vira “ansökan”. O texto fica compacto e impessoal, mas também mais difícil: “Efter genomförd granskning av ansökan har beslut fattats om avslag” é pura myndighetssvenska; em klarspråk fica “Vi har läst din ansökan, men du får tyvärr inte tillståndet”. Repare nas marcas desse estilo: particípios antes do substantivo (genomförd granskning), passiva com -s (ansökan skickas), substantivos sem artigo (beslut fattas) e “denna” com a forma indefinida (denna avhandling). No jornalismo, o essencial vem primeiro (a pirâmide invertida) e as fontes aparecem com “uppger”, “säger” e “enligt”; no texto acadêmico, dominam o “vi” ou a passiva e fórmulas como “Syftet med studien är att…”.',
      grammar_examples: [
        ['Ansökan ska ha inkommit till myndigheten senast den 1 mars.', 'O requerimento deve ter dado entrada no órgão até 1º de março. (myndighetssvenska)'],
        ['Skicka din ansökan till oss senast den 1 mars.', 'Mande o seu requerimento até 1º de março. (klarspråk)'],
        ['Ingen skadades vid branden, uppger polisen.', 'Ninguém ficou ferido no incêndio, informa a polícia. (estilo jornalístico)'],
        ['Syftet med studien är att undersöka hur ungdomar använder sociala medier.', 'O objetivo do estudo é investigar como os jovens usam as redes sociais.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u14-l1',
        title: 'Myndighetssvenska e klarspråk',
        kind: 'licao',
        words: ['myndighet', 'klarspråk', 'blankett', 'tillstånd', 'ansökan', 'folkbokföring'],
        cloze: [
          {
            sentence: 'Myndighetssvenska: “Efter ___ av ansökan har beslut fattats.”',
            answer: 'granskning',
            options: ['granskning', 'granska', 'granskat'],
            translation: 'Estilo de repartição: “Após a análise do requerimento, foi tomada uma decisão.”',
          },
          {
            sentence: 'Klarspråk: “Vi har ___ din ansökan, och du får tillståndet.”',
            answer: 'granskat',
            options: ['granskat', 'granskning', 'granskats'],
            translation: 'Linguagem clara: “Analisamos o seu requerimento, e você vai receber a autorização.”',
          },
          {
            sentence: 'Blanketten ___ in till myndigheten inom tre veckor.',
            answer: 'ska skickas',
            options: ['ska skickas', 'ska skicka', 'skickas ska'],
            translation: 'O formulário deve ser enviado ao órgão em até três semanas.',
          },
        ],
        voice: {
          bot: 'Hej, du har kommit till Skatteverkets kundtjänst. Hur kan jag hjälpa dig?',
          botTranslation: 'Olá, você ligou para o atendimento da Receita sueca. Como posso ajudar?',
          expected: [
            'Hej! Jag har fått ett brev om min folkbokföring, men jag förstår inte språket. Kan du förklara vad jag ska göra?',
            'folkbokföring',
            'förstår inte',
            'kan du förklara',
          ],
          hint: 'Diga que carta recebeu, que não entendeu o texto e peça uma explicação em linguagem simples.',
        },
        communityPrompt: 'Reescreva em klarspråk esta frase de repartição: “Inlämnande av blanketten ska ske senast den 30 juni av den sökande.” Depois explique em português o que você mudou (nominalização, verbo vazio “ske”, “den sökande” → “du”).',
      },
      {
        id: 'sv-u14-l2',
        title: 'O estilo jornalístico',
        kind: 'licao',
        words: ['journalist', 'rapportera', 'tryckfrihet', 'yttrandefrihet', 'källa', 'publicera'],
        cloze: [
          {
            sentence: 'Enligt en ___ på departementet kommer beslutet redan i dag.',
            answer: 'källa',
            options: ['källa', 'källan', 'källor'],
            translation: 'Segundo uma fonte no ministério, a decisão sai ainda hoje.',
          },
          {
            sentence: 'Tidningen valde att inte ___ namnet på den misstänkte.',
            answer: 'publicera',
            options: ['publicera', 'publicerade', 'publiceras'],
            translation: 'O jornal decidiu não publicar o nome do suspeito.',
          },
          {
            sentence: 'Olyckan ___ av flera tidningar under morgonen.',
            answer: 'rapporterades',
            options: ['rapporterades', 'rapporterade', 'rapporterats'],
            translation: 'O acidente foi noticiado por vários jornais durante a manhã.',
          },
        ],
        voice: {
          bot: 'Du är journalist på en lokaltidning i Malmö. Berätta kort om dagens viktigaste nyhet, som i en radiosändning.',
          botTranslation: 'Você é jornalista de um jornal local de Malmö. Conte em poucas palavras a notícia mais importante do dia, como numa transmissão de rádio.',
          expected: [
            'Flera tåg mellan Malmö och Köpenhamn ställdes in i morse på grund av ett tekniskt fel, uppger tågbolaget. Resenärer uppmanas att ta bussen.',
            'ställdes in',
            'uppger',
            'uppmanas',
          ],
          hint: 'Comece pelo fato principal (pirâmide invertida), cite a fonte com “uppger” ou “enligt” e use a passiva com -s.',
        },
        communityPrompt: 'Escreva em sueco uma notícia curta (4 frases) sobre algo que aconteceu na sua cidade, em estilo de jornal: o essencial no começo, uma fonte com “enligt” e pelo menos duas passivas com -s.',
      },
      {
        id: 'sv-u14-l3',
        title: 'Desafio de voz: a defesa de tese',
        kind: 'voz',
        words: ['avhandling', 'forskning', 'utredning', 'betänkande', 'analys', 'statistik'],
        cloze: [
          {
            sentence: 'Syftet med denna ___ är att undersöka hur klimatförändringen påverkar renskötseln.',
            answer: 'avhandling',
            options: ['avhandling', 'avhandlingen', 'avhandlingar'],
            translation: 'O objetivo desta tese é investigar como a mudança climática afeta a criação de renas.',
          },
          {
            sentence: 'Utredningen lämnade sitt ___ till regeringen i december.',
            answer: 'betänkande',
            options: ['betänkande', 'betänkandet', 'betänkanden'],
            translation: 'A comissão de investigação entregou seu parecer ao governo em dezembro.',
          },
          {
            sentence: 'Materialet ___ med statistiska metoder.',
            answer: 'har analyserats',
            options: ['har analyserats', 'har analyserat', 'analyserade har'],
            translation: 'O material foi analisado com métodos estatísticos.',
          },
        ],
        voice: {
          bot: 'Välkommen till disputationen. Kan du kort sammanfatta din avhandling för oss?',
          botTranslation: 'Bem-vindo à defesa de doutorado. Você pode resumir brevemente a sua tese para nós?',
          expected: [
            'Min avhandling handlar om flerspråkiga elever i svenska skolor. Studien bygger på intervjuer och statistik, och min analys tyder på att modersmålsundervisning stärker elevernas självförtroende.',
            'min avhandling handlar om',
            'studien bygger på',
            'analys',
          ],
          hint: 'Apresente o tema (“handlar om”), o método (“bygger på”) e o resultado (“min analys tyder på att…”), em registro acadêmico.',
        },
        communityPrompt: 'Escreva em sueco o resumo (abstract) de 5 frases de uma pesquisa imaginária, com “Syftet med studien är att…”, uma frase de método na passiva e uma conclusão com nominalização.',
      },
      {
        id: 'sv-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi skriver en rapport om hur myndigheter kommunicerar med nyanlända. Vilka råd skulle du ge?',
          botTranslation: 'Estamos escrevendo um relatório sobre como os órgãos públicos se comunicam com os recém-chegados. Que conselhos você daria?',
          expected: [
            'Jag skulle rekommendera klarspråk: korta meningar, verb i stället för substantiv och “du” i stället för “den sökande”. Dessutom borde viktig information publiceras på flera språk.',
            'klarspråk',
            'i stället för',
            'publiceras',
          ],
          hint: 'Dê conselhos concretos de linguagem clara, com exemplos, e use ao menos uma passiva com -s.',
        },
        communityPrompt: 'Invente um parágrafo em myndighetssvenska (com três nominalizações e duas passivas) e reescreva-o em klarspråk. Depois escreva uma frase jornalística e uma acadêmica sobre o mesmo assunto.',
      },
    ],
  },

  // ───────────────────────── sv-u15 · C2 ─────────────────────────
  {
    id: 'sv-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Clássicos, provérbios e o sueco antigo',
    emoji: '📚',
    card: {
      id: 'sv-c15',
      title: 'O sueco da literatura',
      emoji: '🪶',
      history:
        'August Strindberg (1849–1912) publicou em 1879 “Röda rummet”, muitas vezes chamado de o primeiro romance moderno sueco, e retratou o arquipélago de Estocolmo em “Hemsöborna” (1887). Selma Lagerlöf (1858–1940) foi, em 1909, a primeira mulher a receber o Prêmio Nobel de Literatura; seu “Nils Holgerssons underbara resa genom Sverige” nasceu como livro de leitura sobre a geografia sueca para as escolas e conta a viagem de um menino, encolhido por um tomte, nas costas de um ganso. Hjalmar Söderberg (1869–1941) escreveu “Doktor Glas” (1905), e Karin Boye (1900–1941) é lembrada pela distopia “Kallocain” (1940) e pelo poema “Ja visst gör det ont”. Em 1906, uma reforma ortográfica trocou “hv” por “v” e “dt” por “t” ou “tt”: “hvad” virou “vad”, e “godt” virou “gott”.',
      culture_tip:
        'Os provérbios suecos (ordspråk) aparecem nas conversas do dia a dia, muitas vezes com um sorriso: “borta bra men hemma bäst” depois de uma viagem, “bättre sent än aldrig” para quem chega atrasado. Na literatura antiga você vai encontrar formas que ninguém mais fala, como “vi äro” e “de voro”; lidas em voz alta hoje, soam solenes ou até engraçadas. E o hino “Du gamla, du fria”, escrito no século XIX, ainda é cantado com essa linguagem antiga.',
      grammar_why:
        'Até o começo do século XX, a língua escrita flexionava o verbo no plural: “jag är”, mas “vi äro”; “han var”, mas “de voro”; “de gingo”, “vi hava”. A fala já tinha abandonado essas formas havia muito tempo, e a escrita foi largando-as ao longo da primeira metade do século XX; a tradução oficial da Bíblia de 1917 ainda as usa, assim como a negação solene “icke”. Restos de casos antigos sobrevivem em expressões fixas: o genitivo depois de “till” em “till bords”, “till fots” e “till sjöss”, e o dativo em “i sinom tid” (no devido tempo) e “man ur huse” (todo mundo, sem exceção). Os provérbios guardam uma sintaxe concisa: “Tala är silver, tiga är guld” usa infinitivos como sujeito, sem “att”, e “Borta bra men hemma bäst” dispensa o verbo.',
      grammar_examples: [
        ['De gingo ut i skogen, och de voro glada.', 'Saíram para a floresta e estavam felizes. (hoje: de gick, de var)'],
        ['Vi äro fattiga, men vi hava varandra.', 'Somos pobres, mas temos uns aos outros. (plural verbal antigo)'],
        ['Man vill bli älskad, i brist därpå beundrad, i brist därpå fruktad, i brist därpå avskydd och föraktad.', 'A gente quer ser amado; na falta disso, admirado; na falta disso, temido; na falta disso, odiado e desprezado. (Söderberg, “Doktor Glas”)'],
        ['Tala är silver, tiga är guld.', 'Falar é prata, calar é ouro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sv-u15-l1',
        title: 'Lagerlöf, Strindberg e o arquipélago',
        kind: 'licao',
        words: ['författare', 'nobelpris', 'gås', 'tomte', 'skärgård', 'teater'],
        cloze: [
          {
            sentence: 'Selma Lagerlöf var den första kvinnan som ___ nobelpriset i litteratur.',
            answer: 'fick',
            options: ['fick', 'får', 'fått'],
            translation: 'Selma Lagerlöf foi a primeira mulher a receber o Prêmio Nobel de Literatura.',
          },
          {
            sentence: 'Nils Holgersson flyger över hela Sverige på ___ rygg.',
            answer: 'gåsens',
            options: ['gåsens', 'gåsen', 'gåsets'],
            translation: 'Nils Holgersson voa sobre a Suécia inteira nas costas do ganso.',
          },
          {
            sentence: 'Strindbergs “Hemsöborna” utspelar sig i Stockholms ___.',
            answer: 'skärgård',
            options: ['skärgård', 'skärgården', 'skärgårds'],
            translation: '“Hemsöborna”, de Strindberg, se passa no arquipélago de Estocolmo.',
          },
        ],
        voice: {
          bot: 'Har du läst något av Selma Lagerlöf? Vad handlar det om?',
          botTranslation: 'Você já leu alguma coisa de Selma Lagerlöf? Sobre o que é?',
          expected: [
            'Ja, jag har läst “Nils Holgerssons underbara resa”. Den handlar om en pojke som förtrollas av en tomte och blir pytteliten, och sedan flyger han över Sverige med vildgässen.',
            'Nils Holgersson',
            'handlar om',
            'vildgässen',
          ],
          hint: 'Diga o título, resuma o enredo com “den handlar om…” e lembre o plural irregular: en gås, gässen.',
        },
        communityPrompt: 'Escreva em sueco 4 frases apresentando um clássico brasileiro de autor morto há mais de 70 anos (por exemplo, Machado de Assis) a um clube de leitura sueco.',
      },
      {
        id: 'sv-u15-l2',
        title: 'Ordspråk: a sabedoria em poucas palavras',
        kind: 'licao',
        words: ['smaken är som baken', 'borta bra men hemma bäst', 'bättre sent än aldrig', 'ingen rök utan eld', 'tala är silver, tiga är guld', 'ont krut förgås inte så lätt'],
        cloze: [
          {
            sentence: 'Efter tre månader i Brasilien sa farmor bara: “Borta bra men hemma ___.”',
            answer: 'bäst',
            options: ['bäst', 'bättre', 'bra'],
            translation: 'Depois de três meses no Brasil, a avó só disse: “Lugar melhor que a nossa casa não há.”',
          },
          {
            sentence: 'Du kom till slut! Bättre sent än ___.',
            answer: 'aldrig',
            options: ['aldrig', 'inte', 'ingenting'],
            translation: 'Você veio, afinal! Antes tarde do que nunca.',
          },
          {
            sentence: 'Alla viskar om att fabriken ska läggas ner. Ingen rök utan ___.',
            answer: 'eld',
            options: ['eld', 'brand', 'ljus'],
            translation: 'Todo mundo cochicha que a fábrica vai fechar. Onde há fumaça, há fogo.',
          },
        ],
        voice: {
          bot: 'Min kompis säger att surströmming är världens godaste mat. Vad säger du om det?',
          botTranslation: 'Meu amigo diz que o surströmming é a comida mais gostosa do mundo. O que você diz disso?',
          expected: [
            'Smaken är som baken – delad! Själv tycker jag att lukten är för stark, men jag respekterar hans åsikt.',
            'smaken är som baken',
            'själv tycker jag',
            'respekterar',
          ],
          hint: 'Responda com o provérbio “smaken är som baken” e dê a sua opinião com educação.',
        },
        communityPrompt: 'Escolha três provérbios suecos desta lição, encontre o equivalente em português e escreva em sueco uma situação curta em que cada um caberia.',
      },
      {
        id: 'sv-u15-l3',
        title: 'Desafio de voz: vi äro, de voro',
        kind: 'voz',
        words: ['kärlek', 'sorg', 'död', 'drömma', 'stjärna', 'hemlängtan'],
        cloze: [
          {
            sentence: '“Vi ___ unga då, och vår kärlek var stor”, skrev poeten på gammalt vis.',
            answer: 'voro',
            options: ['voro', 'äro', 'vore'],
            translation: '“Nós éramos jovens então, e nosso amor era grande”, escreveu o poeta à moda antiga.',
          },
          {
            sentence: 'Förr skrev man “icke” där vi i dag skriver “___”.',
            answer: 'inte',
            options: ['inte', 'ingen', 'aldrig'],
            translation: 'Antigamente se escrevia “icke” onde hoje escrevemos “inte”.',
          },
          {
            sentence: 'Före stavningsreformen 1906 skrev man: “___ drömde du om i natt?”',
            answer: 'Hvad',
            options: ['Hvad', 'Vadt', 'Hvadt'],
            translation: 'Antes da reforma ortográfica de 1906, escrevia-se: “Com o que você sonhou esta noite?”',
          },
        ],
        voice: {
          bot: 'Karin Boye skrev: “Ja visst gör det ont när knoppar brister.” Vad tror du att hon menar?',
          botTranslation: 'Karin Boye escreveu: “Sim, claro que dói quando os botões se abrem.” O que você acha que ela quer dizer?',
          expected: [
            'Jag tror att hon menar att förändring gör ont, precis som när våren kommer. Det nya växer fram, men det kostar något.',
            'jag tror att hon menar',
            'förändring',
            'gör ont',
          ],
          hint: 'Interprete a imagem (a primavera, os botões que se abrem) e ligue-a a mudança, crescimento ou dor.',
        },
        communityPrompt: 'Escreva em sueco uma estrofe de 4 versos “på gammalt vis”, com pelo menos duas formas verbais antigas (äro, voro, hava) e o “icke”, sobre hemlängtan. Depois reescreva-a em sueco moderno.',
      },
      {
        id: 'sv-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi har en litteraturcirkel om svenska klassiker. Vilken författare skulle du vilja läsa, och varför?',
          botTranslation: 'Temos um círculo de leitura sobre clássicos suecos. Que autor você gostaria de ler, e por quê?',
          expected: [
            'Jag skulle vilja läsa Hjalmar Söderbergs “Doktor Glas”, eftersom den handlar om kärlek, moral och ensamhet i Stockholm för över hundra år sedan. Dessutom är språket vackert, fast det är lite gammaldags.',
            'skulle vilja läsa',
            'handlar om',
            'gammaldags',
          ],
          hint: 'Escolha um autor, justifique com o tema e comente a linguagem da época, em frases longas e bem ligadas.',
        },
        communityPrompt: 'Escreva em sueco uma resenha de 7 frases de uma obra de Strindberg, Lagerlöf, Söderberg ou Boye (pode ser a partir de um resumo), com uma citação curta, um provérbio sueco e um comentário sobre a linguagem antiga do texto.',
      },
    ],
  },
];
