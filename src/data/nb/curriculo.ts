import type { UnitSeed } from '../types';

/** Trilha do norueguês: uma unidade por subnível (A1.1 → C2). */
export const UNITS_NB: UnitSeed[] = [
  {
    id: 'nb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hei! Os sons do norueguês',
    emoji: '👋',
    card: {
      id: 'nb-c1',
      title: 'Uma língua de duas escritas e duas melodias',
      emoji: '🎵',
      history:
        'O norueguês é uma língua germânica do norte: descende do nórdico antigo, a língua dos vikings, e é prima próxima do sueco e do dinamarquês, tanto que noruegueses, suecos e dinamarqueses muitas vezes se entendem cada um falando a sua língua. Por mais de quatro séculos, até 1814, a Noruega esteve unida à Dinamarca, e a língua escrita do país era o dinamarquês. Dessa herança nasceram as duas escritas oficiais de hoje: o bokmål, que adaptou a escrita dinamarquesa à fala norueguesa e é usado por cerca de 85 a 90% das pessoas, e o nynorsk, criado no século XIX por Ivar Aasen a partir dos dialetos do país, forte no oeste, na região dos fiordes. O alfabeto tem 29 letras: depois do z vêm æ, ø e å, e é nessa ordem que elas aparecem no dicionário. Não existe uma pronúncia oficial; aqui usamos como referência a fala do leste, a de Oslo.',
      culture_tip:
        '“Hei” serve para todo mundo, a qualquer hora: para a vizinha, para o chefe, para a médica. Os noruegueses tratam quase todos por “du” (você); o “De” de cortesia hoje soa antiquado. “Takk” aparece o tempo todo: ao receber o troco, ao sair da mesa (“takk for maten”) e até ao rever alguém com quem você esteve na última vez (“takk for sist”). Cuidado com o falso amigo: em norueguês, “oi!” é um susto, não um cumprimento. Ao ser apresentado, dê um aperto de mão firme, olhe nos olhos e diga o seu nome.',
      grammar_why:
        'Boa notícia: o verbo norueguês não muda com a pessoa. Em português dizemos “eu sou, você é, nós somos, eles são”; em norueguês é “er” para todo mundo: jeg er, du er, han er, hun er, vi er, dere er, de er. Os pronomes são jeg (eu, pronuncia-se “jæi”), du (você), han (ele), hun (ela), vi (nós), dere (vocês) e de (eles, elas), que se pronuncia “di”. Na pronúncia, duas coisas mudam o sentido: a duração da vogal (tak, teto, tem o “a” longo; takk, obrigado, tem o “a” curto e o k segura um instante) e o tom: “bønder” (fazendeiros) tem o tom 1, uma melodia simples, e “bønner” (feijões) tem o tom 2, que desce e volta a subir, como se cantasse. Nos números, repare nos sons novos: sju (7) começa com o “sj” de “chá”, e tjue (20) com um “ch” soprado, o mesmo do “kj”.',
      grammar_examples: [
        ['Jeg er fra Brasil.', 'Eu sou do Brasil.'],
        ['Hun er i Bergen i dag.', 'Ela está em Bergen hoje.'],
        ['Vi er trøtte, men glade.', 'Nós estamos cansados, mas contentes.'],
        ['De er fra Tromsø, og dere?', 'Eles são de Tromsø, e vocês?'],
      ],
      character_guide: [
        ['æ', '“é” aberto de “café”; antes de r fica ainda mais aberto, quase um “a”', 'lære, været, bær'],
        ['ø', 'faça a boca de “ô” e diga “ê”: o som de “eu” do francês ou do “ö” alemão', 'øl, søster, brød'],
        ['å', '“ô” fechado de “avô” quando é longo; “ó” aberto de “avó” quando é curto', 'år, båt (longo); hånd, gått (curto)'],
        ['o', 'muitas vezes soa “u” de “uva”; às vezes, sobretudo quando é curto, soa “ó”', 'bok, god, to (“u”); komme, godt (“ó”)'],
        ['u', 'som que não existe em português: lábios em bico bem apertado e a língua lá na frente; nunca o “u” de “uva”', 'du, hus, ut'],
        ['y', 'diga “i” com os lábios em bico, como o “u” do francês', 'ny, by, sytten'],
        ['ei, øy, au', 'ditongos: “ei” soa quase “éi”; “øy” junta o “ø” com um “i”; “au” soa quase “æu”', 'hei, øy, sau'],
        ['vogal longa × curta', 'a vogal é longa antes de uma consoante só e curta antes de consoante dupla, que então segura um instante', 'tak (teto) × takk (obrigado); hat (ódio) × hatt (chapéu)'],
        ['kj, tj, k + i, y, ei', '[ç]: um “ch” soprado e suave, com o meio da língua subindo, como o “ch” do alemão “ich”', 'kjøre, tjue, kino, kirke'],
        ['sj, skj, sk + i, y, øy', '[ʃ]: o “ch” de “chá”', 'sju, skje, ski, skyer'],
        ['rs, rt, rd, rn, rl', 'no leste, o r some e a ponta da língua dobra para trás (som retroflexo); “rs” soa quase como “ch”', 'norsk, kart, barn, ferdig'],
        ['ng', 'um n feito no fundo da boca, sem soar o g, como no inglês “sing”', 'ung, lang, penger'],
        ['j, gj, hj, lj, g + i, y, ei', 'soam [j], como o “i” de “iate”: o g, o h e o l ficam mudos', 'ja, gjest, hjelp, gi, geit'],
        ['d no fim', 'depois de vogal longa, o d final quase sempre é mudo', 'god, rød, med'],
        ['r', 'em Oslo, batido com a ponta da língua, como o “r” de “caro”; no oeste e no sul (Bergen, Stavanger, Kristiansand), raspado na garganta', 'rød, tre, fire'],
        ['tom 1 × tom 2', 'palavras de duas sílabas podem ter duas melodias: o tom 1 é uma subida simples; o tom 2 desce e volta a subir, como se cantasse', 'bønder (fazendeiros, 1) × bønner (feijões, 2); tanken (o tanque, 1) × tanken (o pensamento, 2)'],
      ],
    },
    lessons: [
      {
        id: 'nb-u1-l1',
        title: 'Hei, ha det!',
        kind: 'licao',
        words: ['hei', 'ha det bra', 'takk', 'god morgen', 'hvordan går det', 'bra, takk'],
        cloze: [
          { sentence: 'Hei, Ingrid! Hvordan ___ det? — Bra, takk!', answer: 'går', options: ['går', 'er', 'heter'], translation: 'Oi, Ingrid! Como vai? — Bem, obrigado!' },
          { sentence: 'Klokka er sju, og det er morgen: god ___, mamma!', answer: 'morgen', options: ['morgen', 'natt', 'kveld'], translation: 'São sete horas e é de manhã: bom dia, mãe!' },
          { sentence: 'Ha det ___, vi ses i morgen!', answer: 'bra', options: ['bra', 'god', 'takk'], translation: 'Tchau, até amanhã!' },
        ],
        voice: {
          bot: 'Hei! Hvordan går det?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bra, takk! Og du?', 'bra', 'takk', 'og du'],
          hint: 'Responda que está bem e devolva a pergunta: “Bra, takk! Og du?”. O “og” se pronuncia “å”, e o “u” de “du” é aquele de bico apertado.',
        },
        communityPrompt: 'Escreva dois cumprimentos em norueguês: um de manhã, para uma vizinha (“God morgen…”), e um de despedida para um amigo (“Ha det bra…”). Use “Hvordan går det?” em um deles.',
      },
      {
        id: 'nb-u1-l2',
        title: 'Eu, você, ele, ela',
        kind: 'licao',
        words: ['jeg', 'du', 'han', 'hun', 'vi', 'dere'],
        cloze: [
          { sentence: 'Jeg ___ fra Brasil.', answer: 'er', options: ['er', 'være', 'heter'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Dette er Kari. ___ er fra Trondheim.', answer: 'Hun', options: ['Hun', 'Han', 'Det'], translation: 'Esta é a Kari. Ela é de Trondheim.' },
          { sentence: 'Ola og Kari? ___ er i Tromsø nå.', answer: 'De', options: ['De', 'Dem', 'Dere'], translation: 'O Ola e a Kari? Eles estão em Tromsø agora.' },
        ],
        voice: {
          bot: 'Hei! Jeg heter Ola, og jeg er fra Bergen. Og du?',
          botTranslation: 'Oi! Eu me chamo Ola e sou de Bergen. E você?',
          expected: ['Hei, Ola! Jeg heter Ana, og jeg er fra Brasil.', 'jeg heter', 'jeg er fra', 'Brasil'],
          hint: 'Diga o seu nome com “Jeg heter…” e a origem com “Jeg er fra…”. O “jeg” se pronuncia “jæi”.',
        },
        communityPrompt: 'Apresente três pessoas em norueguês, uma frase para cada, usando “er”: você (“Jeg er…”), um amigo (“Han er…”) e uma amiga (“Hun er…”). Repare que o verbo não muda!',
      },
      {
        id: 'nb-u1-l3',
        title: 'Desafio de voz: prazer em conhecer',
        kind: 'voz',
        words: ['jeg heter', 'hyggelig å treffe deg', 'sju', 'tolv', 'sytten', 'tjue'],
        cloze: [
          { sentence: 'Fem, seks, ___, åtte.', answer: 'sju', options: ['sju', 'sytten', 'tjue'], translation: 'Cinco, seis, sete, oito.' },
          { sentence: 'Ti pluss ti er ___.', answer: 'tjue', options: ['tjue', 'tolv', 'sytten'], translation: 'Dez mais dez são vinte.' },
          { sentence: 'Vi ___ i Lofoten nå.', answer: 'er', options: ['er', 'være', 'heter'], translation: 'Nós estamos em Lofoten agora.' },
        ],
        voice: {
          bot: 'Hei, jeg heter Silje. Hva heter du? Hvor gammel er du?',
          botTranslation: 'Oi, eu me chamo Silje. Como você se chama? Quantos anos você tem?',
          expected: ['Hei, Silje! Jeg heter Paulo, og jeg er tjue år. Hyggelig å treffe deg!', 'jeg heter', 'år', 'hyggelig å treffe deg'],
          hint: 'A idade vem com “er”: “Jeg er tjue år” (eu tenho vinte anos). O “tj” de “tjue” é um “ch” soprado; o “sj” de “sju” é o “ch” de “chá”.',
        },
        communityPrompt: 'Escreva um diálogo curto em que duas pessoas se apresentam, dizem a idade com números até 20 (“Jeg er sytten år”) e terminam com “Hyggelig å treffe deg!”.',
      },
      {
        id: 'nb-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'God morgen, og velkommen til Oslo! Hva heter du, og hvor kommer du fra?',
          botTranslation: 'Bom dia e bem-vindo a Oslo! Como você se chama, e de onde você é?',
          expected: [
            'God morgen! Jeg heter Marta, og jeg kommer fra Brasil, fra Recife. Hyggelig å treffe deg!',
            'god morgen',
            'jeg heter',
            'jeg kommer fra',
            'hyggelig å treffe deg',
          ],
          hint: 'Devolva o cumprimento (“God morgen!”), diga o nome com “Jeg heter…”, a origem com “Jeg kommer fra…” e feche com “Hyggelig å treffe deg!”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em norueguês: cumprimento, nome, de onde você é, a sua idade, duas pessoas da sua vida com “han er” / “hun er” e uma despedida.',
      },
    ],
  },
  {
    id: 'nb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Frokost: pão, queijo e brunost',
    emoji: '🧀',
    card: {
      id: 'nb-c2',
      title: 'O artigo que vai no fim',
      emoji: '🥪',
      history:
        'Na Noruega, o pão com alguma coisa em cima, o “pålegg”, aparece em três refeições do dia: no café da manhã, na matpakke do almoço e no “kveldsmat”, o lanche da noite; a refeição quente, a “middag”, é cedo, por volta das quatro ou cinco da tarde. O brunost, o queijo marrom, é feito com o soro do leite fervido por horas, até o açúcar caramelizar, o que lhe dá a cor e o gosto adocicado. No século XIX, a leiteira Anne Hov, do vale de Gudbrandsdalen, teve a ideia de juntar creme ao soro e criou a versão mais cremosa. Para cortá-lo em fatias finíssimas, usa-se o “ostehøvel”, o fatiador de queijo patenteado em 1925 por Thor Bjørklund, de Lillehammer.',
      culture_tip:
        'A matpakke é o lanche que quase todo norueguês leva de casa para a escola ou o trabalho: fatias de pão com pålegg, embrulhadas em papel e separadas por uma folhinha para não grudar. Ao se levantar da mesa, agradeça sempre com “takk for maten” (obrigado pela comida); o anfitrião responde “vel bekomme”. E, se alguém disser “forsyn deg”, é para você se servir à vontade.',
      grammar_why:
        'Todo substantivo norueguês tem um gênero: masculino (en), feminino (ei) ou neutro (et): en ost (um queijo), ei skive (uma fatia), et brød (um pão). No bokmål, as femininas também podem usar “en” (en bok ou ei bok), mas aqui usamos “ei”. A grande surpresa para brasileiros: o artigo definido (o, a) não vem antes, e sim grudado no fim da palavra: osten (o queijo), boka (o livro), brødet (o pão). No plural, a maioria ganha -er (en ost → oster), mas os neutros de uma sílaba não mudam (et egg → egg); no plural definido, todos terminam em -ene: ostene, eggene, brødene. No presente, o verbo tem uma forma só, terminada em -r: jeg spiser, du spiser, vi spiser. Para dizer que algo existe, use “det finnes”; para dizer que gosta, “jeg liker”, sem preposição: jeg liker kaffe (eu gosto de café).',
      grammar_examples: [
        ['Vi har et brød. Brødet er ferskt.', 'Nós temos um pão. O pão está fresco.'],
        ['Hun leser ei bok, og boka er norsk.', 'Ela lê um livro, e o livro é norueguês.'],
        ['Jeg liker ost, men jeg liker ikke brunost.', 'Eu gosto de queijo, mas não gosto de queijo marrom.'],
        ['Det finnes mange typer pålegg i Norge.', 'Existem muitos tipos de pålegg na Noruega.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u2-l1',
        title: 'Pão, queijo e leite',
        kind: 'licao',
        words: ['brød', 'ost', 'brunost', 'melk', 'egg', 'smør'],
        cloze: [
          { sentence: 'Jeg har et brød. ___ er ferskt.', answer: 'Brødet', options: ['Brødet', 'Brøden', 'Brøda'], translation: 'Eu tenho um pão. O pão está fresco.' },
          { sentence: 'Hun spiser ___ egg til frokost.', answer: 'et', options: ['et', 'en', 'ei'], translation: 'Ela come um ovo no café da manhã.' },
          { sentence: 'Jeg ___ melk hver morgen.', answer: 'drikker', options: ['drikker', 'drikke', 'drakk'], translation: 'Eu bebo leite toda manhã.' },
        ],
        voice: {
          bot: 'God morgen! Liker du ost eller brunost på brødskiva?',
          botTranslation: 'Bom dia! Você gosta de queijo comum ou de queijo marrom no pão?',
          expected: ['Jeg liker brunost! Brunosten er søt og god.', 'jeg liker', 'brunost', 'ost'],
          hint: 'Responda com “Jeg liker…”, sem preposição. Se quiser falar do queijo de novo, use a forma definida: brunost → brunosten.',
        },
        communityPrompt: 'Escreva três frases sobre o seu café da manhã: o que você come (“Jeg spiser…”), o que você bebe (“Jeg drikker…”) e uma coisa de que você não gosta (“Jeg liker ikke…”).',
      },
      {
        id: 'nb-u2-l2',
        title: 'A matpakke',
        kind: 'licao',
        words: ['frokost', 'matpakke', 'pålegg', 'brødskive', 'kaffe', 'kopp'],
        cloze: [
          { sentence: 'Jeg har en kopp. ___ er ny.', answer: 'Koppen', options: ['Koppen', 'Koppet', 'Koppene'], translation: 'Eu tenho uma xícara. A xícara é nova.' },
          { sentence: 'Ole ___ kaffe til frokost.', answer: 'drikker', options: ['drikker', 'drikke', 'drikk'], translation: 'O Ole bebe café no café da manhã.' },
          { sentence: 'Det ___ mange typer pålegg i butikken.', answer: 'finnes', options: ['finnes', 'finner', 'finne'], translation: 'Existem muitos tipos de pålegg no mercado.' },
        ],
        voice: {
          bot: 'Hei! Hva har du i matpakka i dag?',
          botTranslation: 'Oi! O que você tem na marmita hoje?',
          expected: ['Jeg har to brødskiver med ost og et eple.', 'brødskiver', 'jeg har', 'med ost'],
          hint: 'Comece com “Jeg har…” e lembre o plural: ei brødskive → to brødskiver. “Med” (com) liga o pão ao pålegg.',
        },
        communityPrompt: 'Monte a sua matpakke ideal em norueguês: diga quantas fatias de pão você leva, o que vai em cima de cada uma e o que você bebe. Use pelo menos um plural (brødskiver, epler…).',
      },
      {
        id: 'nb-u2-l3',
        title: 'Desafio de voz: no café',
        kind: 'voz',
        words: ['kake', 'vaffel', 'syltetøy', 'eple', 'juice', 'te'],
        cloze: [
          { sentence: 'Vi har to ___ i kurven.', answer: 'epler', options: ['epler', 'eple', 'eplet'], translation: 'Nós temos duas maçãs na cesta.' },
          { sentence: 'Liker du vafler? — Ja, jeg ___ vafler!', answer: 'liker', options: ['liker', 'like', 'likte'], translation: 'Você gosta de waffles? — Sim, eu gosto de waffles!' },
          { sentence: 'Hun drikker te, og han drikker ___.', answer: 'juice', options: ['juice', 'kake', 'syltetøy'], translation: 'Ela bebe chá, e ele bebe suco.' },
        ],
        voice: {
          bot: 'Hei, hei! Hva kan jeg gi deg i dag?',
          botTranslation: 'Oi, oi! O que eu posso te servir hoje?',
          expected: ['Kan jeg få en vaffel med syltetøy og en kopp te, takk?', 'kan jeg få', 'vaffel', 'takk'],
          hint: 'Para pedir, “Kan jeg få…?” (me vê…?) é o jeito mais natural. “En vaffel” é masculino; “en kopp te” é uma xícara de chá. Termine com “takk”.',
        },
        communityPrompt: 'Escreva um pedido num café norueguês: peça duas coisas de comer e uma de beber, com os artigos certos (en, ei ou et), e agradeça no final.',
      },
      {
        id: 'nb-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'God morgen! Frokosten er klar. Hva liker du å spise og drikke til frokost?',
          botTranslation: 'Bom dia! O café da manhã está pronto. O que você gosta de comer e beber no café da manhã?',
          expected: [
            'Jeg liker brød med ost og syltetøy, og jeg drikker kaffe med melk. Brunosten liker jeg ikke!',
            'jeg liker',
            'brød',
            'jeg drikker',
          ],
          hint: 'Use “Jeg liker…” para o que você gosta e “Jeg drikker…” para a bebida. Se falar de uma coisa já conhecida, use a forma definida: osten, brødet, kaka.',
        },
        communityPrompt: 'Descreva uma mesa de café da manhã norueguesa em 5 frases: o que existe na mesa (“Det er…”, “Det finnes…”), com pelo menos duas palavras na forma definida (brødet, osten…) e dois plurais.',
      },
    ],
  },
  {
    id: 'nb-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'De trem, de Oslo a Bergen',
    emoji: '🚆',
    card: {
      id: 'nb-c3',
      title: 'O verbo em segundo lugar',
      emoji: '🏔️',
      history:
        'A ferrovia de Bergen, a “Bergensbanen”, foi inaugurada em 1909 e liga Oslo a Bergen em cerca de sete horas de viagem, atravessando o planalto de Hardangervidda. No caminho fica Finse, a 1.222 metros de altitude, a estação mais alta da rede ferroviária norueguesa, cercada de neve boa parte do ano. Em Myrdal sai um ramal, a “Flåmsbana”, que desce a montanha até Flåm, na beira de um braço do Sognefjord, o fiorde mais longo e profundo da Noruega. No fim da linha está Bergen, a segunda maior cidade do país, que foi um importante porto da Liga Hanseática: o cais de Bryggen, com as suas casas de madeira coloridas, é Patrimônio Mundial da UNESCO desde 1979.',
      culture_tip:
        'Compre a passagem antes de embarcar: nos trens noruegueses se viaja com bilhete já comprado, quase sempre pelo celular. No transporte público, os noruegueses falam baixo e não costumam se sentar ao lado de um desconhecido se houver um banco duplo vazio: não é antipatia, é respeito ao espaço de cada um. E leve um guarda-chuva para Bergen: é uma das cidades mais chuvosas da Europa.',
      grammar_why:
        'A regra de ouro do norueguês é a ordem V2: na oração principal, o verbo fica sempre em segundo lugar. Se a frase começa com outra coisa (um tempo, um lugar), o sujeito passa para depois do verbo: “I dag reiser vi til Bergen” (hoje viajamos para Bergen), nunca “I dag vi reiser”. Nas perguntas de sim ou não, o verbo vem primeiro: “Reiser du med tog?”; com palavra interrogativa, ela vem antes do verbo: “Når går toget?”. As preposições mais comuns: “i” para cidades, países e lugares fechados (i Bergen, i Norge, i bilen), “på” para superfícies, ilhas e muitos lugares públicos (på stasjonen, på toget, på Finse), “til” (para) e “fra” (de). O adjetivo concorda com o substantivo: sem nada com masculino e feminino (en stor by), com -t no neutro (et stort fjell) e com -e no plural (store fjell).',
      grammar_examples: [
        ['I morgen reiser vi til Bergen med tog.', 'Amanhã nós viajamos para Bergen de trem.'],
        ['Når går toget fra Oslo?', 'Quando sai o trem de Oslo?'],
        ['Bergen er en vakker by med et stort fisketorg.', 'Bergen é uma cidade bonita com um grande mercado de peixe.'],
        ['Fra toget ser vi høye fjell og blå fjorder.', 'Do trem nós vemos montanhas altas e fiordes azuis.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u3-l1',
        title: 'Na estação',
        kind: 'licao',
        words: ['tog', 'jernbanestasjon', 'billett', 'perrong', 'avgang', 'forsinkelse'],
        cloze: [
          { sentence: 'I dag ___ til Bergen.', answer: 'reiser vi', options: ['reiser vi', 'vi reiser', 'reise vi'], translation: 'Hoje nós viajamos para Bergen.' },
          { sentence: 'Toget står ___ perrong 3.', answer: 'på', options: ['på', 'i', 'til'], translation: 'O trem está na plataforma 3.' },
          { sentence: 'Jeg kjøper en billett ___ Oslo til Bergen.', answer: 'fra', options: ['fra', 'på', 'i'], translation: 'Eu compro uma passagem de Oslo para Bergen.' },
        ],
        voice: {
          bot: 'Hei! Hva kan jeg hjelpe deg med?',
          botTranslation: 'Oi! Em que posso ajudar?',
          expected: ['Jeg vil gjerne ha en billett til Bergen. Når går toget?', 'billett', 'til Bergen', 'når går toget'],
          hint: 'Peça a passagem com “Jeg vil gjerne ha en billett til…” e pergunte o horário com “Når går toget?”: a palavra interrogativa vem primeiro, e logo depois o verbo.',
        },
        communityPrompt: 'Escreva três perguntas que você faria na estação de trem: uma de sim ou não (verbo primeiro: “Går toget…?”), uma com “når” e uma com “hvor”.',
      },
      {
        id: 'nb-u3-l2',
        title: 'Pela janela: fiordes e montanhas',
        kind: 'licao',
        words: ['fjord', 'bru', 'tunnel', 'ferje', 'utsikt', 'isbre'],
        cloze: [
          { sentence: 'Fra toget ser vi en ___ isbre.', answer: 'stor', options: ['stor', 'stort', 'store'], translation: 'Do trem nós vemos uma geleira grande.' },
          { sentence: 'Utsikten er fin, og været er ___ i dag.', answer: 'fint', options: ['fint', 'fin', 'fine'], translation: 'A vista é bonita, e o tempo está bom hoje.' },
          { sentence: 'Det finnes mange lange ___ i Norge.', answer: 'tunneler', options: ['tunneler', 'tunnel', 'tunnelen'], translation: 'Existem muitos túneis longos na Noruega.' },
        ],
        voice: {
          bot: 'Se ut av vinduet! Hva ser du?',
          botTranslation: 'Olhe pela janela! O que você está vendo?',
          expected: ['Jeg ser et stort fjell, en blå fjord og ei lang bru.', 'jeg ser', 'stort', 'fjord'],
          hint: 'Faça o adjetivo concordar: et stort fjell (neutro, com -t), en blå fjord, ei lang bru. No plural, o adjetivo ganha -e: høye fjell.',
        },
        communityPrompt: 'Descreva em 4 frases a paisagem de uma viagem de trem ou de ônibus que você já fez, com adjetivos no masculino, no neutro e no plural (en stor by, et høyt fjell, fine hus).',
      },
      {
        id: 'nb-u3-l3',
        title: 'Desafio de voz: chegando a Bergen',
        kind: 'voz',
        words: ['hotell', 'kart', 'koffert', 'turistinformasjon', 'severdighet', 'buss'],
        cloze: [
          { sentence: 'Hotellet ligger ___ sentrum.', answer: 'i', options: ['i', 'på', 'til'], translation: 'O hotel fica no centro.' },
          { sentence: 'Hvor ___ turistinformasjonen?', answer: 'er', options: ['er', 'det er', 'du er'], translation: 'Onde fica o posto de informação turística?' },
          { sentence: 'Etter frokost ___ til Bryggen.', answer: 'går vi', options: ['går vi', 'vi går', 'gå vi'], translation: 'Depois do café da manhã, nós vamos a pé até Bryggen.' },
        ],
        voice: {
          bot: 'Velkommen til Bergen! Hva vil du se i byen?',
          botTranslation: 'Bem-vindo a Bergen! O que você quer ver na cidade?',
          expected: ['I dag vil jeg se Bryggen og fisketorget. Har du et kart?', 'i dag vil jeg', 'Bryggen', 'kart'],
          hint: 'Comece com o tempo e mantenha o verbo em segundo lugar: “I dag vil jeg se…”. Depois peça um mapa com uma pergunta de sim ou não: “Har du et kart?”.',
        },
        communityPrompt: 'Planeje um dia em Bergen em 4 frases, cada uma começando com uma expressão de tempo (Først, Etter frokost, I ettermiddag, I kveld) e com o verbo logo em seguida.',
      },
      {
        id: 'nb-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hei! Hvor reiser du i morgen, og hvordan reiser du?',
          botTranslation: 'Oi! Para onde você viaja amanhã, e como você vai?',
          expected: [
            'I morgen reiser jeg til Flåm med tog. Der tar jeg båten på fjorden, og utsikten er sikkert fantastisk!',
            'i morgen reiser jeg',
            'med tog',
            'fjorden',
          ],
          hint: 'Comece com “I morgen” e ponha o verbo antes do sujeito: “I morgen reiser jeg…”. Use “til” para o destino, “med” para o transporte e um adjetivo concordando.',
        },
        communityPrompt: 'Escreva um pequeno roteiro de viagem pela Noruega: de onde você sai, para onde vai, com que transporte e o que vê no caminho. Comece pelo menos duas frases com tempo ou lugar (V2!) e use três adjetivos concordando.',
      },
    ],
  },
  {
    id: 'nb-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: '17 de maio: a festa em família',
    emoji: '🇳🇴',
    card: {
      id: 'nb-c4',
      title: 'O que aconteceu no dia 17',
      emoji: '🎉',
      history:
        'O 17 de maio, “syttende mai”, é o dia nacional da Noruega: lembra a Constituição assinada em Eidsvoll em 17 de maio de 1814, uma das constituições escritas mais antigas do mundo ainda em vigor. A festa não tem desfile militar: quem desfila são as crianças, no “barnetog”, com bandeirinhas, as bandas escolares, os “korps”, e muitos gritos de “hurra!”. O primeiro desfile das crianças em Oslo, que então se chamava Christiania, aconteceu em 1870. Em Oslo, o desfile passa diante do palácio real, e a família real acena da sacada; muita gente veste o “bunad”, o traje típico da sua região, com bordados e enfeites de prata.',
      culture_tip:
        'No 17 de maio, diga “Gratulerer med dagen!” (parabéns pelo dia) a todo mundo, como se fosse o aniversário do país. As pessoas se vestem com a melhor roupa ou o bunad, tomam café da manhã festivo com os amigos e, no resto do dia, as crianças comem quantos sorvetes e cachorros-quentes quiserem. Se for convidado, leve algo pequeno para a casa e pergunte se deve tirar os sapatos na porta.',
      grammar_why:
        'O pretérito dos verbos fracos ganha -et, -te, -de ou -dde: snakke → snakket, spise → spiste, leve → levde, bo → bodde. Os verbos fortes mudam a vogal, como os nossos irregulares: gå → gikk, se → så, komme → kom, være → var. O perfeito é “har” + particípio (har snakket, har spist, har gått, har sett) e serve para o que ainda vale agora ou para experiências: “Jeg har vært i Bergen” (já estive em Bergen); para um momento terminado, com “i går” ou “i fjor”, use o pretérito. Com “den, det, de” antes do adjetivo, a palavra fica duas vezes definida e o adjetivo ganha -e: den store bunaden, det store flagget, de store flaggene. O possessivo costuma vir DEPOIS do substantivo, que fica na forma definida: bilen min, boka mi, huset mitt, barna mine. E “sin” é o possessivo que volta ao sujeito: “Ola tar med søsteren sin” (a irmã do próprio Ola), mas “Ola tar med søsteren hans” (a irmã de outro homem).',
      grammar_examples: [
        ['I går gikk barna i barnetoget med flagg.', 'Ontem as crianças desfilaram no desfile infantil com bandeiras.'],
        ['Har du spist is i dag? — Ja, jeg har spist tre!', 'Você já tomou sorvete hoje? — Já, tomei três!'],
        ['Den gamle bunaden min er fra Hardanger.', 'O meu traje típico antigo é de Hardanger.'],
        ['Ola feiret dagen med kona si og barna sine.', 'O Ola comemorou o dia com a esposa e os filhos (dele mesmo).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u4-l1',
        title: 'A minha família',
        kind: 'licao',
        words: ['mor', 'far', 'bror', 'søster', 'bestemor', 'bestefar'],
        cloze: [
          { sentence: 'Broren ___ bor i Tromsø.', answer: 'min', options: ['min', 'mi', 'mitt'], translation: 'O meu irmão mora em Tromsø.' },
          { sentence: 'Barnet ___ er fem år.', answer: 'mitt', options: ['mitt', 'min', 'mine'], translation: 'O meu filho tem cinco anos.' },
          { sentence: 'I går ___ bestemor og bestefar på besøk.', answer: 'kom', options: ['kom', 'kommer', 'kommet'], translation: 'Ontem a vovó e o vovô vieram fazer uma visita.' },
        ],
        voice: {
          bot: 'Hvem var med deg på 17. mai i fjor?',
          botTranslation: 'Quem estava com você no 17 de maio do ano passado?',
          expected: ['Moren min, faren min og broren min var med. Vi spiste is og så på barnetoget.', 'var med', 'spiste', 'min'],
          hint: 'Ponha o possessivo depois do substantivo definido: moren min, faren min, søsteren min. Como é um dia terminado (i fjor), use o pretérito: var, spiste, så.',
        },
        communityPrompt: 'Apresente quatro pessoas da sua família em norueguês com o possessivo depois do substantivo (broren min, søsteren min…) e conte uma coisa que cada uma fez no último fim de semana, no pretérito.',
      },
      {
        id: 'nb-u4-l2',
        title: 'Bandeiras, bandas e bunad',
        kind: 'licao',
        words: ['syttende', 'flagg', 'bunad', 'barnetog', 'korps', 'nasjonaldag'],
        cloze: [
          { sentence: 'Barna ___ i barnetoget i går.', answer: 'gikk', options: ['gikk', 'går', 'gått'], translation: 'As crianças desfilaram no desfile infantil ontem.' },
          { sentence: 'Korpset har ___ hele dagen.', answer: 'spilt', options: ['spilt', 'spilte', 'spiller'], translation: 'A banda tocou o dia inteiro.' },
          { sentence: 'Hun har på seg ___ bunaden fra Hardanger.', answer: 'den fine', options: ['den fine', 'det fine', 'den fin'], translation: 'Ela está usando o lindo traje típico de Hardanger.' },
        ],
        voice: {
          bot: 'Gratulerer med dagen! Hva har du gjort i dag?',
          botTranslation: 'Parabéns pelo dia! O que você fez hoje?',
          expected: ['Gratulerer med dagen! Jeg har sett barnetoget og hørt korpset.', 'gratulerer med dagen', 'har sett', 'barnetoget'],
          hint: 'Devolva o cumprimento e responda no perfeito, porque o dia ainda não acabou: “Jeg har sett…”, “Jeg har hørt…”, “Jeg har spist…”.',
        },
        communityPrompt: 'Escreva 4 frases sobre um feriado de que você gosta no Brasil, comparando com o 17 de maio: o que você fez no último (pretérito) e o que você já fez alguma vez na vida (perfeito, “Jeg har…”).',
      },
      {
        id: 'nb-u4-l3',
        title: 'Desafio de voz: como foi o feriado?',
        kind: 'voz',
        words: ['is', 'pølse', 'feiring', 'hurra', 'onkel', 'tante'],
        cloze: [
          { sentence: 'I går ___ vi fem is!', answer: 'spiste', options: ['spiste', 'spiser', 'spist'], translation: 'Ontem nós tomamos cinco sorvetes!' },
          { sentence: 'Tante Liv tok med hunden ___ til feiringen.', answer: 'sin', options: ['sin', 'hans', 'hennes'], translation: 'A tia Liv levou o próprio cachorro para a comemoração.' },
          { sentence: 'Onkelen min har ___ i Bergen på 17. mai.', answer: 'vært', options: ['vært', 'var', 'være'], translation: 'O meu tio já passou um 17 de maio em Bergen.' },
        ],
        voice: {
          bot: 'Hei! Hvordan var 17. mai? Hva gjorde dere?',
          botTranslation: 'Oi! Como foi o 17 de maio? O que vocês fizeram?',
          expected: ['Det var kjempegøy! Vi gikk i barnetoget, spiste pølser og is og ropte hurra.', 'vi gikk', 'spiste', 'hurra'],
          hint: 'O dia já passou, então use o pretérito: var, gikk (de “gå”, forte), spiste, ropte. Uma dica: “det var kjempegøy” (foi superdivertido).',
        },
        communityPrompt: 'Conte, em 5 frases no pretérito, uma festa de família que você viveu: quem estava lá (onkelen min, tanten min…), o que vocês comeram e o que cada um fez. Use “sin” pelo menos uma vez.',
      },
      {
        id: 'nb-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fortell om familien din og om en fin dag dere har hatt sammen!',
          botTranslation: 'Conte sobre a sua família e sobre um dia bom que vocês passaram juntos!',
          expected: [
            'Familien min er ikke så stor. I fjor feiret vi 17. mai i Oslo: vi så barnetoget, og broren min spiste sju is!',
            'familien min',
            'feiret',
            'broren min',
          ],
          hint: 'Apresente a família com o possessivo depois do substantivo (familien min, søsteren min) e conte o dia no pretérito: feiret, så, spiste, gikk. Se quiser, use a dupla definição: “den fine dagen”.',
        },
        communityPrompt: 'Escreva um pequeno relato (6 a 8 frases) de um dia especial com a sua família: use o pretérito para o que aconteceu, o perfeito para uma experiência (“Vi har aldri…”), dois possessivos depois do substantivo, um “sin” e uma dupla definição (den store…).',
      },
    ],
  },
  {
    id: 'nb-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Na montanha: as regras de ouro',
    emoji: '⛰️',
    card: {
      id: 'nb-c5',
      title: 'Pode, deve, vai: os verbos modais',
      emoji: '🧭',
      history:
        'A palavra “friluftsliv”, a vida ao ar livre, ficou conhecida graças a Henrik Ibsen, que a usou no poema “Paa Vidderne” (“Nos planaltos”), de 1859; hoje ela resume uma paixão nacional. A “allemannsretten”, o direito de todos, permite caminhar, esquiar e acampar até em terra alheia, fora das áreas cultivadas, e foi posta em lei em 1957, na lei da vida ao ar livre, a “friluftsloven”. Na Páscoa, muitos noruegueses sobem para a montanha para esquiar, e foi depois de vários acidentes nessas férias que surgiram, em 1952, as “fjellvettreglene”, as regras de bom senso na montanha, que todo norueguês conhece. A montanha mais alta do país é o Galdhøpiggen, com 2.469 metros, no maciço de Jotunheimen.',
      culture_tip:
        'Pela allemannsretten, você pode montar a barraca por até duas noites no mesmo lugar sem pedir licença, desde que fique a pelo menos 150 metros da casa ou cabana habitada mais próxima. Leve todo o lixo de volta e respeite a proibição de fogueira na floresta, que vale de 15 de abril a 15 de setembro. Na trilha, é costume cumprimentar quem passa com um “hei”; e, na mochila, não pode faltar a matpakke, uma garrafa térmica e uma laranja.',
      grammar_why:
        'Os verbos modais vêm seguidos do infinitivo SEM “å”: jeg kan svømme, du må gå, vi vil telte. “Kan” é poder ou saber; “må” é ter de; “vil” é querer; “skal” é o que está combinado ou planejado; “bør” é o conselho (“você deveria”). Atenção à armadilha: “du må ikke” é proibição (você não pode), e “não precisa” é “du trenger ikke”. Para o futuro, “skal” expressa plano ou decisão (“I morgen skal vi gå på tur”), e “kommer til å” expressa previsão (“Det kommer til å regne”). O imperativo é o infinitivo sem o -e final: gå! (vá), ta med! (leve), kle deg! (vista-se); “komme” perde também um m: kom! Os reflexivos mudam o pronome como em português (“eu me visto, você se veste”): jeg kler på meg, du kler på deg, han kler på seg, vi kler på oss, dere kler på dere, de kler på seg.',
      grammar_examples: [
        ['Du bør ta med kart og kompass.', 'Você deveria levar mapa e bússola.'],
        ['Vi skal gå til toppen i morgen, men det kommer til å snø.', 'Nós vamos subir até o topo amanhã, mas vai nevar.'],
        ['Vend i tide – det er ingen skam å snu.', 'Volte a tempo: não é vergonha nenhuma dar meia-volta.'],
        ['Kle deg godt, og skynd deg ikke!', 'Agasalhe-se bem e não se apresse!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u5-l1',
        title: 'Rumo ao topo',
        kind: 'licao',
        words: ['fjell', 'topp', 'vidde', 'tjern', 'stein', 'sti'],
        cloze: [
          { sentence: 'Vi kan ___ i teltet ved tjernet i natt.', answer: 'sove', options: ['sove', 'å sove', 'sover'], translation: 'Nós podemos dormir na barraca perto da lagoinha esta noite.' },
          { sentence: 'Stien er bratt, så dere må ___ forsiktige.', answer: 'være', options: ['være', 'er', 'å være'], translation: 'A trilha é íngreme, então vocês precisam tomar cuidado.' },
          { sentence: 'Se på skyene! Det ___ til å regne.', answer: 'kommer', options: ['kommer', 'kan', 'må'], translation: 'Olhe as nuvens! Vai chover.' },
        ],
        voice: {
          bot: 'Vi skal gå til Galdhøpiggen i morgen. Hva må vi ta med?',
          botTranslation: 'Nós vamos subir o Galdhøpiggen amanhã. O que precisamos levar?',
          expected: ['Vi må ta med kart, kompass, vann og varme klær. Vi bør også ha mat i sekken.', 'vi må ta med', 'kart', 'bør'],
          hint: 'Use “må” para o que é obrigatório e “bør” para o que é aconselhável, sempre com o infinitivo sem “å”: “Vi må ta med…”, “Vi bør ha…”.',
        },
        communityPrompt: 'Escreva uma lista de 5 conselhos para uma trilha na montanha, cada um com um modal diferente ou com “trenger ikke”: “Du må…”, “Du bør…”, “Du kan…”, “Du må ikke…”, “Du trenger ikke…”.',
      },
      {
        id: 'nb-u5-l2',
        title: 'O tempo muda depressa',
        kind: 'licao',
        words: ['vær', 'vind', 'tåke', 'regn', 'lue', 'vott'],
        cloze: [
          { sentence: 'Det er kaldt. Kle ___ godt, og ta på deg lua!', answer: 'deg', options: ['deg', 'seg', 'meg'], translation: 'Está frio. Agasalhe-se bem e ponha o gorro!' },
          { sentence: 'Vi må skynde ___, tåka kommer!', answer: 'oss', options: ['oss', 'seg', 'vi'], translation: 'Temos de nos apressar, a neblina está chegando!' },
          { sentence: '___ i tide! Det er ingen skam å snu.', answer: 'Vend', options: ['Vend', 'Vender', 'Vende'], translation: 'Volte a tempo! Não é vergonha nenhuma dar meia-volta.' },
        ],
        voice: {
          bot: 'Vinden er sterk, og tåka kommer. Hva gjør vi nå?',
          botTranslation: 'O vento está forte, e a neblina está chegando. O que fazemos agora?',
          expected: ['Vi må snu nå. Kle deg godt og ta på deg lua! Vi kan gå til toppen en annen dag.', 'vi må snu', 'kle deg', 'lua'],
          hint: 'Decida com um modal (“Vi må snu”) e dê ordens no imperativo com o reflexivo: “Kle deg godt!”, “Ta på deg vottene!”.',
        },
        communityPrompt: 'Imagine que o tempo virou no meio da trilha. Escreva 4 ordens no imperativo para o seu grupo, pelo menos duas com verbo reflexivo (kle deg, skynd dere, sett dere…).',
      },
      {
        id: 'nb-u5-l3',
        title: 'Desafio de voz: acampando',
        kind: 'voz',
        words: ['telt', 'fottur', 'ryggsekk', 'allemannsrett', 'bål', 'kompass'],
        cloze: [
          { sentence: 'Takket være allemannsretten ___ vi sette opp teltet her.', answer: 'kan', options: ['kan', 'kommer', 'liker'], translation: 'Graças ao direito de livre acesso, nós podemos montar a barraca aqui.' },
          { sentence: 'I morgen kommer det ___ regne.', answer: 'til å', options: ['til å', 'å', 'til'], translation: 'Amanhã vai chover.' },
          { sentence: 'Jeg gleder ___ til fotturen!', answer: 'meg', options: ['meg', 'seg', 'jeg'], translation: 'Estou ansioso pela caminhada!' },
        ],
        voice: {
          bot: 'Hei! Kan vi sette opp teltet her? Hva sier allemannsretten?',
          botTranslation: 'Oi! Podemos montar a barraca aqui? O que diz o direito de livre acesso?',
          expected: ['Ja, vi kan telte her, men teltet må stå minst 150 meter fra nærmeste hus.', 'vi kan', 'må', '150 meter'],
          hint: 'Responda com “kan” para a permissão e “må” para a condição: a barraca precisa ficar a pelo menos 150 metros da casa mais próxima.',
        },
        communityPrompt: 'Escreva o plano de um acampamento de fim de semana: o que vocês vão fazer (“Vi skal…”), uma previsão do tempo (“Det kommer til å…”) e duas frases com “glede seg” ou “grue seg” em pessoas diferentes.',
      },
      {
        id: 'nb-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi skal på fjelltur i påsken. Hvilke råd kan du gi meg?',
          botTranslation: 'Nós vamos fazer uma trilha na montanha na Páscoa. Que conselhos você pode me dar?',
          expected: [
            'Du bør ta med kart og kompass, og du må kle deg godt. Si fra hvor du går, og vend i tide!',
            'du bør',
            'du må',
            'kle deg',
            'vend i tide',
          ],
          hint: 'Misture modais (“du bør”, “du må”, “du kan”), imperativos (“si fra”, “vend i tide”, “ta med”) e um reflexivo (“kle deg godt”). Se quiser, faça uma previsão: “Det kommer til å bli kaldt”.',
        },
        communityPrompt: 'Escreva as suas próprias “regras de ouro” para um passeio na natureza no Brasil (praia, serra ou trilha), em 6 frases: use pelo menos três modais diferentes, dois imperativos, um reflexivo e uma previsão com “kommer til å”.',
      },
    ],
  },
  {
    id: 'nb-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Friluftsliv: natureza em qualquer tempo',
    emoji: '🥾',
    card: {
      id: 'nb-c6',
      title: 'A vida ao ar livre e o direito de andar por aí',
      emoji: '🏕️',
      history:
        'A palavra “friluftsliv” (vida ao ar livre) aparece num poema de Henrik Ibsen, “Paa Vidderne”, do fim da década de 1850, e virou quase um valor nacional. A allemannsretten, o direito de todos de caminhar, acampar e colher frutinhas na natureza não cultivada, é um costume antigo que entrou na lei de vida ao ar livre, a friluftsloven, em 1957. O pico mais alto da Noruega e do norte da Europa é o Galdhøpiggen, com 2469 metros, no maciço de Jotunheimen. Nas montanhas, as trilhas são marcadas com um T vermelho pintado nas pedras e com vardene, os montes de pedra empilhada.',
      culture_tip:
        'Pela allemannsretten, você pode armar a barraca por até duas noites no mesmo lugar, desde que fique a pelo menos 150 metros da casa habitada mais próxima e não deixe lixo. Fazer fogueira na mata ou perto dela é proibido de 15 de abril a 15 de setembro. Os noruegueses saem para caminhar com chuva, neve ou vento, e repetem: “Det finnes ikke dårlig vær, bare dårlige klær” (não existe tempo ruim, só roupa ruim). No domingo, a “søndagstur” é quase um ritual.',
      grammar_why:
        'Na oração principal, o “ikke” vem depois do verbo: “Jeg har ikke tid”. Mas na subordinada (depois de at, fordi, når, om, hvis, selv om) o “ikke” e advérbios como “aldri” e “alltid” vêm ANTES do verbo: “fordi jeg ikke har tid”. É a mesma ordem do português (“porque eu não tenho tempo”), por isso ajuda pensar no português. Se a subordinada abre a frase, a principal inverte por causa do V2: “Når det regner, tar vi på regntøy”. Atenção: “når” é para o presente e para o que se repete, “da” para uma vez só no passado; “om” é “se” de pergunta indireta (“Jeg vet ikke om…”), “hvis” é “se” de condição. O mais-que-perfeito é “hadde” + particípio, como o “tinha feito”: “Vi hadde gått i fem timer da vi kom fram”.',
      grammar_examples: [
        ['Vi går på tur selv om det regner.', 'A gente sai para caminhar mesmo que esteja chovendo.'],
        ['Hun sier at hun ikke har vært på Galdhøpiggen.', 'Ela diz que não foi ao Galdhøpiggen.'],
        ['Når sola skinner, drar alle ut i skogen.', 'Quando faz sol, todo mundo vai para a mata.'],
        ['Vi hadde gått i fem timer da vi kom fram til hytta.', 'A gente tinha andado cinco horas quando chegou à cabana.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u6-l1',
        title: 'Na trilha da montanha',
        kind: 'licao',
        words: ['fjelltur', 'sti', 'varde', 'tregrense', 'vidde', 'turisthytte'],
        cloze: [
          {
            sentence: 'Jeg tar med kart, fordi jeg ___ stien så godt.',
            answer: 'ikke kjenner',
            options: ['ikke kjenner', 'kjenner ikke', 'ikke kjent'],
            translation: 'Eu levo mapa, porque não conheço a trilha tão bem.',
          },
          {
            sentence: 'Følg vardene ___ du ikke ser stien i tåka.',
            answer: 'hvis',
            options: ['hvis', 'at', 'om'],
            translation: 'Siga os montes de pedra se você não enxergar a trilha na neblina.',
          },
          {
            sentence: 'Vi ___ allerede gått over tregrensen da det begynte å snø.',
            answer: 'hadde',
            options: ['hadde', 'har', 'var'],
            translation: 'A gente já tinha passado do limite das árvores quando começou a nevar.',
          },
        ],
        voice: {
          bot: 'Hei! Skal du også opp til turisthytta i dag?',
          botTranslation: 'Oi! Você também vai subir até a cabana de trilha hoje?',
          expected: [
            'Ja, men jeg går sakte, fordi jeg ikke har gått så langt før.',
            'fordi jeg ikke',
            'går sakte',
            'har gått',
          ],
          hint: 'Explique com “fordi” e lembre: na subordinada o “ikke” vem antes do verbo (fordi jeg ikke har…).',
        },
        communityPrompt:
          'Descreva uma trilha que você fez ou gostaria de fazer em 3 frases: uma com “fordi … ikke”, uma com “når” e uma no mais-que-perfeito (hadde + particípio).',
      },
      {
        id: 'nb-u6-l2',
        title: 'Acampar com a allemannsrett',
        kind: 'licao',
        words: ['allemannsrett', 'telt', 'sovepose', 'bål', 'telttur', 'villmark'],
        cloze: [
          {
            sentence: 'Du kan sette opp teltet der du vil, bare du ___ nærmere enn 150 meter fra et hus.',
            answer: 'ikke er',
            options: ['ikke er', 'er ikke', 'ikke var'],
            translation: 'Você pode armar a barraca onde quiser, desde que não esteja a menos de 150 metros de uma casa.',
          },
          {
            sentence: 'Vi visste ikke ___ det var lov å tenne bål i skogen i juli.',
            answer: 'om',
            options: ['om', 'at', 'hvis'],
            translation: 'A gente não sabia se era permitido acender fogueira na mata em julho.',
          },
          {
            sentence: 'Da vi kom fram, hadde det allerede ___ mørkt.',
            answer: 'blitt',
            options: ['blitt', 'bli', 'ble'],
            translation: 'Quando a gente chegou, já tinha escurecido.',
          },
        ],
        voice: {
          bot: 'Er det lov å overnatte i telt her?',
          botTranslation: 'É permitido pernoitar de barraca aqui?',
          expected: [
            'Ja, det er lov, så lenge teltet ikke står nærmere enn 150 meter fra et hus.',
            'det er lov',
            'så lenge',
            'ikke står',
          ],
          hint: 'Responda com “så lenge” (desde que) e ponha o “ikke” antes do verbo da subordinada.',
        },
        communityPrompt:
          'Escreva 3 regras da allemannsretten para um amigo brasileiro, cada uma com uma subordinada (hvis, så lenge, selv om) e pelo menos um “ikke” na posição certa.',
      },
      {
        id: 'nb-u6-l3',
        title: 'Desafio de voz: quando o tempo vira',
        kind: 'voz',
        words: ['det finnes ikke dårlig vær, bare dårlige klær', 'ut på tur, aldri sur', 'friluftsliv', 'gå seg vill', 'kompass', 'snøskred'],
        cloze: [
          {
            sentence: '___ vi var i Lofoten i fjor, regnet det hver dag.',
            answer: 'Da',
            options: ['Da', 'Når', 'Om'],
            translation: 'Quando a gente esteve em Lofoten no ano passado, choveu todo dia.',
          },
          {
            sentence: 'Vi hadde ___ oss vill, men heldigvis hadde vi kompass.',
            answer: 'gått',
            options: ['gått', 'gikk', 'gå'],
            translation: 'A gente tinha se perdido, mas por sorte tinha bússola.',
          },
          {
            sentence: 'Guiden sa at vi ___ gå opp til toppen på grunn av faren for snøskred.',
            answer: 'ikke skulle',
            options: ['ikke skulle', 'skulle ikke', 'skal ikke'],
            translation: 'O guia disse que a gente não devia subir até o cume por causa do risco de avalanche.',
          },
        ],
        voice: {
          bot: 'Det har begynt å regne. Skal vi snu og gå hjem?',
          botTranslation: 'Começou a chover. Vamos dar meia-volta e ir para casa?',
          expected: [
            'Nei, vi går videre selv om det regner. Det finnes ikke dårlig vær, bare dårlige klær!',
            'selv om det regner',
            'går videre',
            'dårlige klær',
          ],
          hint: 'Use “selv om” (mesmo que) e feche com o ditado sobre o tempo e a roupa.',
        },
        communityPrompt:
          'Grave-se contando um passeio em que o tempo mudou: o que vocês tinham feito antes (hadde + particípio), o que aconteceu “da…” e por que vocês continuaram “selv om…”.',
      },
      {
        id: 'nb-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fortell om den beste turen du har vært på. Hva hadde skjedd før dere kom fram?',
          botTranslation: 'Conte sobre o melhor passeio que você já fez. O que tinha acontecido antes de vocês chegarem?',
          expected: [
            'Vi hadde gått i seks timer da vi kom fram til hytta, og selv om vi var slitne, var vi glade, fordi vi ikke hadde gått oss vill.',
            'hadde gått',
            'da vi kom fram',
            'selv om',
            'fordi vi ikke',
          ],
          hint: 'Junte o mais-que-perfeito (hadde gått), “da” para o passado e uma subordinada com “ikke” antes do verbo.',
        },
        communityPrompt:
          'Escreva um relato de 5 frases de um dia de friluftsliv: use at, når ou da, fordi, selv om e hvis, com pelo menos dois “ikke” em subordinadas e um verbo no mais-que-perfeito.',
      },
    ],
  },
  {
    id: 'nb-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Saúde: fastlege, legevakt e apotek',
    emoji: '🩺',
    card: {
      id: 'nb-c7',
      title: 'Cuidar da saúde à norueguesa',
      emoji: '💊',
      history:
        'O Rikshospitalet, o hospital nacional em Oslo, abriu as portas em 1826. Desde 2001, todo morador da Noruega tem direito a um fastlege, um médico de família fixo, que é a porta de entrada do sistema: é ele quem manda para o especialista com uma henvisning (encaminhamento). À noite e nos fins de semana, quem atende é a legevakt, pelo número 116 117; em emergência, o número da ambulância é o 113. O paciente paga uma parte das consultas, a egenandel, até um teto anual; depois disso recebe o frikort e não paga mais pelo resto do ano.',
      culture_tip:
        'Com febre ou resfriado, o conselho costuma ser ficar em casa, beber água e descansar: antibiótico não se receita à toa. Para faltar poucos dias ao trabalho, basta a egenmelding, uma autodeclaração, sem atestado. No inverno escuro, muita gente toma tran, o óleo de fígado de bacalhau, por causa da vitamina D. E, para desejar melhoras, diga “God bedring!”.',
      grammar_why:
        'O norueguês tem muitos verbos com partícula, como o inglês: a partícula (av, opp, ut, over, på) é tônica e muda o sentido. “Ta” é pegar, mas “ta av” é tirar e “ta vare på” é cuidar; “skrive” é escrever, e “skrive ut” é receitar (ou imprimir); “gå over” é passar (“hodepinen går over”); “kaste opp” é vomitar. A voz passiva tem duas formas. O -s colado ao infinitivo ou ao presente é típico de regras, rotinas e bulas: “Tablettene skal tas med vann”, “Blodprøver tas om morgenen”. No passado, o bokmål quase sempre usa “bli + particípio”: “Han ble operert i går” (ele foi operado ontem) — diferente do sueco, o “skrevs” soa estranho no norueguês falado. O particípio funciona como adjetivo: en forstuet ankel, et brukket bein.',
      grammar_examples: [
        ['Legen skrev ut en resept til meg.', 'O médico me passou uma receita.'],
        ['Blodprøver tas om morgenen.', 'Os exames de sangue são colhidos de manhã.'],
        ['Han ble operert i kneet i forrige uke.', 'Ele foi operado no joelho na semana passada.'],
        ['Jeg har en forstuet ankel og et brukket bein.', 'Estou com um tornozelo torcido e uma perna quebrada.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u7-l1',
        title: 'Com o médico de família',
        kind: 'licao',
        words: ['fastlege', 'bestille time', 'legekontor', 'venterom', 'henvisning', 'blodprøve'],
        cloze: [
          {
            sentence: 'På legekontoret ___ blodprøver hver morgen mellom åtte og ti.',
            answer: 'tas',
            options: ['tas', 'tar', 'tatt'],
            translation: 'No consultório, os exames de sangue são colhidos toda manhã, entre oito e dez.',
          },
          {
            sentence: 'I går ___ jeg sendt til en spesialist med en henvisning fra fastlegen.',
            answer: 'ble',
            options: ['ble', 'blir', 'bli'],
            translation: 'Ontem fui mandado a um especialista com um encaminhamento do médico de família.',
          },
          {
            sentence: 'Fastlegen sier at hodepinen vil gå ___ av seg selv.',
            answer: 'over',
            options: ['over', 'ut', 'av'],
            translation: 'O médico de família diz que a dor de cabeça vai passar sozinha.',
          },
        ],
        voice: {
          bot: 'Legekontoret, god morgen! Hva kan jeg hjelpe deg med?',
          botTranslation: 'Consultório médico, bom dia! Em que posso ajudar?',
          expected: [
            'God morgen! Jeg vil gjerne bestille time, for hosten min går ikke over.',
            'bestille time',
            'går ikke over',
            'vil gjerne',
          ],
          hint: 'Explique o problema com um verbo de partícula: “gå over” (passar).',
        },
        communityPrompt:
          'Escreva uma mensagem ao consultório marcando consulta, com dois verbos de partícula (gå over, kaste opp, ta vare på…) e uma passiva com -s.',
      },
      {
        id: 'nb-u7-l2',
        title: 'Na farmácia',
        kind: 'licao',
        words: ['apotek', 'resept', 'bivirkning', 'smertestillende', 'dose', 'plaster'],
        cloze: [
          {
            sentence: 'Denne medisinen ___ bare på resept.',
            answer: 'selges',
            options: ['selges', 'selger', 'solgt'],
            translation: 'Este remédio só é vendido com receita.',
          },
          {
            sentence: 'Tablettene skal ___ med et glass vann.',
            answer: 'tas',
            options: ['tas', 'ta', 'tatt'],
            translation: 'Os comprimidos devem ser tomados com um copo de água.',
          },
          {
            sentence: 'Ta ___ plasteret forsiktig etter to dager.',
            answer: 'av',
            options: ['av', 'opp', 'ut'],
            translation: 'Tire o curativo com cuidado depois de dois dias.',
          },
        ],
        voice: {
          bot: 'Hei! Har du resept, eller trenger du noe reseptfritt?',
          botTranslation: 'Oi! Você tem receita ou precisa de algo sem receita?',
          expected: [
            'Jeg har vondt i hodet, så jeg trenger noe smertestillende. Har det noen bivirkninger?',
            'vondt i hodet',
            'smertestillende',
            'bivirkninger',
          ],
          hint: 'Diga o que você sente (“ha vondt i”) e pergunte pelos efeitos colaterais (“bivirkninger”).',
        },
        communityPrompt:
          'Imagine a bula de um remédio: escreva 3 instruções na passiva com -s (“Tabletten tas med vann”, “Salven skal smøres…”) e um aviso com “bli + particípio”.',
      },
      {
        id: 'nb-u7-l3',
        title: 'Desafio de voz: na legevakt',
        kind: 'voz',
        words: ['legevakt', 'forstue', 'brudd', 'gips', 'røntgen', 'krykke'],
        cloze: [
          {
            sentence: 'I går ___ foten min røntget på legevakten.',
            answer: 'ble',
            options: ['ble', 'blitt', 'bli'],
            translation: 'Ontem meu pé foi radiografado no pronto atendimento.',
          },
          {
            sentence: 'Det var ikke brudd, bare en ___ ankel.',
            answer: 'forstuet',
            options: ['forstuet', 'forstue', 'forstuer'],
            translation: 'Não era fratura, só um tornozelo torcido.',
          },
          {
            sentence: 'Legen sa at jeg måtte ta det med ro og passe ___ foten.',
            answer: 'på',
            options: ['på', 'opp', 'av'],
            translation: 'O médico disse que eu tinha que ir com calma e cuidar do pé.',
          },
        ],
        voice: {
          bot: 'Hva har skjedd? Hvordan skadet du deg?',
          botTranslation: 'O que aconteceu? Como você se machucou?',
          expected: [
            'Jeg skled på isen og forstuet foten, og nå må den røntges.',
            'forstuet foten',
            'på isen',
            'røntges',
          ],
          hint: 'Conte o acidente no pretérito e use a passiva: “den må røntges” (precisa ser radiografado).',
        },
        communityPrompt:
          'Grave-se contando uma ida à legevakt: o que aconteceu, o que foi feito com você (passiva com -s ou bli + particípio) e como você está agora.',
      },
      {
        id: 'nb-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du har vært syk en hel uke. Fortell hva som skjedde og hva legen gjorde.',
          botTranslation: 'Você ficou doente uma semana inteira. Conte o que aconteceu e o que o médico fez.',
          expected: [
            'Jeg ble undersøkt av fastlegen på mandag og fikk en resept, men feberen gikk ikke over før på fredag. Nå tar jeg godt vare på meg selv.',
            'ble undersøkt',
            'gikk ikke over',
            'resept',
            'tar vare på',
          ],
          hint: 'Use “bli + particípio” (ble undersøkt) e verbos de partícula (gå over, ta vare på).',
        },
        communityPrompt:
          'Escreva 5 frases sobre uma semana doente: dois verbos de partícula, uma passiva com -s, uma com “bli + particípio” e um particípio usado como adjetivo (en forstuet ankel, et brukket bein).',
      },
    ],
  },
  {
    id: 'nb-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Exploradores polares: Nansen e Amundsen',
    emoji: '❄️',
    card: {
      id: 'nb-c8',
      title: 'Rumo aos polos',
      emoji: '🧭',
      history:
        'Em 1888, Fridtjof Nansen liderou a primeira travessia da calota de gelo da Groenlândia, de esqui. Entre 1893 e 1896, o navio Fram ficou preso no gelo do Ártico de propósito, à deriva, para provar que o gelo se movia de leste para oeste; o casco arredondado fazia o gelo empurrar o navio para cima em vez de esmagá-lo. Roald Amundsen foi o primeiro a atravessar a Passagem do Noroeste (1903–1906) e chegou ao Polo Sul em 14 de dezembro de 1911, cerca de cinco semanas antes da equipe do britânico Robert Scott. Nansen recebeu o Nobel da Paz em 1922 pelo trabalho com refugiados, e o Fram hoje fica num museu na península de Bygdøy, em Oslo.',
      culture_tip:
        'Os noruegueses dizem que nascem “med ski på beina” (com esquis nos pés), e as histórias de Nansen e Amundsen são contadas nas escolas como aventuras nacionais. Mesmo assim, contar vantagem pega mal: a chamada “janteloven”, do romance de Aksel Sandemose (1933), resume a regra não escrita de não se achar melhor que os outros. Ao comparar, prefira o tom modesto: “Jeg er ikke så flink, men…”.',
      grammar_why:
        'O comparativo se faz com -ere e o superlativo com -est: kald, kaldere, kaldest. Alguns são irregulares, como no português (bom, melhor, o melhor): god, bedre, best; stor, større, størst; liten, mindre, minst; gammel, eldre, eldst; lang, lengre, lengst. Adjetivos longos usam “mer” e “mest”: mer interessant, mest interessant. “Do que” é “enn”: “Grønland er større enn Norge”. O superlativo com artigo leva a dupla definição: “den lengste turen”. O pronome relativo é “som” (que), invariável; “hvis” (cujo) existe, mas é formal. No discurso indireto, depois de “sa at”, o tempo recua e o “ikke” vem antes do verbo: “Han sa at han ikke hadde sett isbjørn”.',
      grammar_examples: [
        ['Amundsen kom fram til Sørpolen fem uker før Scott.', 'Amundsen chegou ao Polo Sul cinco semanas antes de Scott.'],
        ['Grønland er mye større enn Norge.', 'A Groenlândia é muito maior que a Noruega.'],
        ['Nansen var en forsker som også ble diplomat.', 'Nansen foi um cientista que também virou diplomata.'],
        ['Guiden fortalte at Fram hadde ligget fast i isen i nesten tre år.', 'O guia contou que o Fram tinha ficado preso no gelo por quase três anos.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u8-l1',
        title: 'A travessia da Groenlândia',
        kind: 'licao',
        words: ['oppdagelse', 'utforske', 'isbre', 'skitur', 'kjelke', 'overleve'],
        cloze: [
          {
            sentence: 'Grønland er mye ___ enn Norge.',
            answer: 'større',
            options: ['større', 'størst', 'stor'],
            translation: 'A Groenlândia é muito maior que a Noruega.',
          },
          {
            sentence: 'Nansen ledet den første ekspedisjonen ___ krysset Grønland på ski.',
            answer: 'som',
            options: ['som', 'hvis', 'at'],
            translation: 'Nansen liderou a primeira expedição que atravessou a Groenlândia de esqui.',
          },
          {
            sentence: 'Det var den ___ skituren vi noen gang hadde gått.',
            answer: 'lengste',
            options: ['lengste', 'lengre', 'lang'],
            translation: 'Foi a travessia de esqui mais longa que a gente já tinha feito.',
          },
        ],
        voice: {
          bot: 'Hvorfor ville Nansen krysse Grønland, tror du?',
          botTranslation: 'Por que Nansen quis atravessar a Groenlândia, você acha?',
          expected: [
            'Jeg tror han ville utforske isen som ingen hadde krysset før, og vise at ski var bedre enn alt annet.',
            'som ingen hadde',
            'bedre enn',
            'utforske',
          ],
          hint: 'Use uma oração com “som” e um comparativo com “enn” (bedre enn).',
        },
        communityPrompt:
          'Compare dois lugares frios que você conhece (ou imagina) em 3 frases: um comparativo com “enn”, um superlativo com “den … -este” e uma oração com “som”.',
      },
      {
        id: 'nb-u8-l2',
        title: 'O Fram e o gelo do Ártico',
        kind: 'licao',
        words: ['forskning', 'observasjon', 'måling', 'isfjell', 'teori', 'bevis'],
        cloze: [
          {
            sentence: 'Nansen hadde en teori ___ mange forskere ikke trodde på.',
            answer: 'som',
            options: ['som', 'hvis', 'hva'],
            translation: 'Nansen tinha uma teoria em que muitos cientistas não acreditavam.',
          },
          {
            sentence: 'Forskeren skrev i dagboka at isen ___ tykkere enn hun hadde trodd.',
            answer: 'var',
            options: ['var', 'blir', 'vært'],
            translation: 'A cientista escreveu no diário que o gelo era mais grosso do que ela tinha pensado.',
          },
          {
            sentence: 'Fram var et skip ___ skrog var bygd for å tåle trykket fra isen.',
            answer: 'hvis',
            options: ['hvis', 'som', 'sitt'],
            translation: 'O Fram era um navio cujo casco foi construído para aguentar a pressão do gelo.',
          },
        ],
        voice: {
          bot: 'Hva gjorde forskerne om bord på Fram hele dagen?',
          botTranslation: 'O que os cientistas faziam a bordo do Fram o dia inteiro?',
          expected: [
            'De gjorde målinger og observasjoner som skulle bevise at isen drev fra øst mot vest.',
            'målinger',
            'observasjoner',
            'som skulle',
          ],
          hint: 'Ligue as ideias com “som” (que) e conte o objetivo com “bevise at…”.',
        },
        communityPrompt:
          'Conte em discurso indireto o que um cientista disse sobre uma descoberta: “Hun sa at…”, “Han forklarte at…”, com o tempo recuado e um “ikke” antes do verbo.',
      },
      {
        id: 'nb-u8-l3',
        title: 'Desafio de voz: a corrida ao Polo Sul',
        kind: 'voz',
        words: ['hundekjøring', 'konkurrere', 'seier', 'nå', 'flagg', 'sammenligne'],
        cloze: [
          {
            sentence: 'Amundsen brukte hunder, og derfor gikk det ___ for ham enn for Scott.',
            answer: 'raskere',
            options: ['raskere', 'raskest', 'rask'],
            translation: 'Amundsen usou cães, e por isso foi mais rápido para ele do que para Scott.',
          },
          {
            sentence: 'Guiden på museet sa at Amundsens menn ___ plantet et norsk flagg på polen.',
            answer: 'hadde',
            options: ['hadde', 'har', 'var'],
            translation: 'O guia do museu disse que os homens de Amundsen tinham fincado uma bandeira norueguesa no polo.',
          },
          {
            sentence: 'Sørpolen er et av de ___ stedene på jorda.',
            answer: 'kaldeste',
            options: ['kaldeste', 'kaldere', 'kaldest'],
            translation: 'O Polo Sul é um dos lugares mais frios da Terra.',
          },
        ],
        voice: {
          bot: 'Hvem var best forberedt, Amundsen eller Scott?',
          botTranslation: 'Quem estava mais bem preparado, Amundsen ou Scott?',
          expected: [
            'Jeg tror Amundsen var bedre forberedt enn Scott, fordi han brukte hunder og ski.',
            'bedre forberedt',
            'enn Scott',
            'hunder',
          ],
          hint: 'Compare com “bedre … enn” e justifique com “fordi”.',
        },
        communityPrompt:
          'Grave-se comparando as duas expedições ao Polo Sul: um comparativo, um superlativo e uma frase em discurso indireto (“Jeg har lest at…”).',
      },
      {
        id: 'nb-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du har vært på Frammuseet. Fortell hva guiden sa, og sammenlign de to oppdagerne.',
          botTranslation: 'Você foi ao Museu do Fram. Conte o que o guia disse e compare os dois exploradores.',
          expected: [
            'Guiden sa at Fram hadde vært både i nord og i sør, og at Amundsen, som nådde Sørpolen i 1911, kom dit før Scott. Jeg synes Nansen var den mest interessante av de to.',
            'guiden sa at',
            'som nådde',
            'hadde vært',
            'den mest interessante',
          ],
          hint: 'Junte discurso indireto (sa at … hadde), uma oração com “som” e um superlativo com “mest”.',
        },
        communityPrompt:
          'Escreva 5 frases sobre um explorador ou cientista norueguês: dois comparativos (um irregular: bedre, større, eldre…), um superlativo, uma oração com “som” e uma frase em discurso indireto.',
      },
    ],
  },
  {
    id: 'nb-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'E se…? Petróleo, energia e sonhos',
    emoji: '🛢️',
    card: {
      id: 'nb-c9',
      title: 'A aventura do petróleo',
      emoji: '🌊',
      history:
        'No fim de 1969, foi encontrado o campo de Ekofisk, no mar do Norte, e a produção começou em 1971; os noruegueses chamam esse período de “oljeeventyret”, a aventura (ou o conto de fadas) do petróleo. Em 1990, o Parlamento criou um fundo para guardar a renda do petróleo, que recebeu o primeiro dinheiro em 1996 e hoje se chama Statens pensjonsfond utland, mais conhecido como Oljefondet; ele é um dos maiores fundos soberanos do mundo. Uma regra fiscal de 2001, a handlingsregelen, limita quanto o governo pode tirar do fundo por ano (hoje, em torno de 3% do valor). Curiosamente, quase toda a eletricidade do país vem de usinas hidrelétricas, e a Noruega tem a maior proporção de carros elétricos entre os carros novos do mundo.',
      culture_tip:
        'Os noruegueses gostam de pedir e oferecer com o condicional, que soa mais gentil: “Jeg skulle gjerne hatt en kaffe” (eu queria um café), “Kunne du hjulpet meg?” (você poderia me ajudar?). Falar de dinheiro pessoal pode ser delicado, mas a renda e o imposto de cada pessoa são públicos na Noruega e podem ser consultados. Em conversa, discutir “hva hvis vi ikke hadde funnet olje?” é um clássico, e rende opiniões bem diferentes.',
      grammar_why:
        'O condicional se faz com “ville” + infinitivo, como o nosso futuro do pretérito: “Jeg ville reise” (eu viajaria). Para uma hipótese no presente, a oração com “hvis” vai para o pretérito, igual ao imperfeito do subjuntivo em português: “Hvis jeg hadde tid, ville jeg lære meg å seile” (se eu tivesse tempo, aprenderia a velejar). Para o passado que não aconteceu, use “hadde” + particípio e “ville ha” + particípio: “Hvis jeg hadde visst det, ville jeg ha kommet” (se eu soubesse, teria vindo). Dá para tirar o “hvis” e inverter: “Hadde jeg visst det, ville jeg ha kommet”. Na fala é muito comum cortar o “ha” e dizer “ville kommet”, e “skulle” aparece em pedidos e desejos: “Jeg skulle gjerne hatt…”.',
      grammar_examples: [
        ['Hvis jeg hadde mer tid, ville jeg lære meg å seile.', 'Se eu tivesse mais tempo, aprenderia a velejar.'],
        ['Hvis Norge ikke hadde funnet olje, ville landet ha vært fattigere i dag.', 'Se a Noruega não tivesse encontrado petróleo, o país seria mais pobre hoje.'],
        ['Hadde jeg visst det, ville jeg ha kommet tidligere.', 'Se eu soubesse disso, teria vindo mais cedo.'],
        ['Jeg skulle gjerne hatt en kopp kaffe.', 'Eu queria uma xícara de café.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u9-l1',
        title: 'O fundo do petróleo',
        kind: 'licao',
        words: ['oljefond', 'økonomi', 'rikdom', 'investere', 'aksje', 'overskudd'],
        cloze: [
          {
            sentence: 'Hvis Norge ikke ___ funnet olje, ville landet ha vært fattigere.',
            answer: 'hadde',
            options: ['hadde', 'har', 'ville'],
            translation: 'Se a Noruega não tivesse encontrado petróleo, o país seria mais pobre.',
          },
          {
            sentence: 'Hvis jeg hadde mye penger, ___ jeg investere mer i aksjer.',
            answer: 'ville',
            options: ['ville', 'vil', 'skal'],
            translation: 'Se eu tivesse muito dinheiro, investiria mais em ações.',
          },
          {
            sentence: '___ jeg visst det før, ville jeg ha spart mer.',
            answer: 'Hadde',
            options: ['Hadde', 'Har', 'Hvis'],
            translation: 'Se eu soubesse disso antes, teria economizado mais.',
          },
        ],
        voice: {
          bot: 'Hva ville du gjort hvis du fikk en million kroner?',
          botTranslation: 'O que você faria se ganhasse um milhão de coroas?',
          expected: [
            'Hvis jeg fikk en million kroner, ville jeg investert litt og reist rundt i Norge.',
            'hvis jeg fikk',
            'ville jeg',
            'reist',
          ],
          hint: 'Comece com “Hvis jeg fikk…” (pretérito) e continue com “ville jeg…”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre o que você faria com o dinheiro de um fundo como o Oljefondet: uma com “hvis” + pretérito, uma com “ville ha” + particípio e uma com a inversão “Hadde jeg…”.',
      },
      {
        id: 'nb-u9-l2',
        title: 'Energia limpa e carro elétrico',
        kind: 'licao',
        words: ['elbil', 'ladestasjon', 'fornybar', 'utslipp', 'kraft', 'bompenger'],
        cloze: [
          {
            sentence: 'Hvis alle kjørte elbil, ___ utslippene bli mye mindre.',
            answer: 'ville',
            options: ['ville', 'vil', 'hadde'],
            translation: 'Se todo mundo dirigisse carro elétrico, as emissões seriam bem menores.',
          },
          {
            sentence: 'Jeg ___ gjerne hatt en elbil, men de er for dyre for meg.',
            answer: 'skulle',
            options: ['skulle', 'skal', 'må'],
            translation: 'Eu queria ter um carro elétrico, mas são caros demais para mim.',
          },
          {
            sentence: 'Hvis det ___ flere ladestasjoner på fjellet, ville jeg kjørt elbil på hyttetur.',
            answer: 'fantes',
            options: ['fantes', 'finnes', 'funnet'],
            translation: 'Se houvesse mais postos de recarga na montanha, eu iria de carro elétrico para a cabana.',
          },
        ],
        voice: {
          bot: 'Ville du kjøpt elbil hvis du bodde i Norge?',
          botTranslation: 'Você compraria um carro elétrico se morasse na Noruega?',
          expected: [
            'Ja, hvis jeg bodde i Norge, ville jeg kjøpt elbil, fordi strømmen kommer fra fornybar vannkraft.',
            'hvis jeg bodde',
            'ville jeg',
            'fornybar',
          ],
          hint: 'Repita a estrutura da pergunta: “hvis jeg bodde…, ville jeg…”, e dê um motivo com “fordi”.',
        },
        communityPrompt:
          'Escreva o que mudaria na sua cidade se ela funcionasse como Oslo: 3 frases com “hvis” + pretérito e “ville” + infinitivo, sobre transporte, energia e trânsito.',
      },
      {
        id: 'nb-u9-l3',
        title: 'Desafio de voz: e se eu morasse na Noruega?',
        kind: 'voz',
        words: ['flytte', 'savne', 'drømme', 'forestille seg', 'angre', 'ombestemme seg'],
        cloze: [
          {
            sentence: 'Hvis jeg ___ i Tromsø, ville jeg sett nordlys hver vinter.',
            answer: 'bodde',
            options: ['bodde', 'bor', 'har bodd'],
            translation: 'Se eu morasse em Tromsø, veria a aurora boreal todo inverno.',
          },
          {
            sentence: 'Hvis jeg hadde flyttet til Norge for ti år siden, ville jeg ___ savnet familien min.',
            answer: 'ha',
            options: ['ha', 'hatt', 'å'],
            translation: 'Se eu tivesse me mudado para a Noruega há dez anos, teria sentido falta da minha família.',
          },
          {
            sentence: 'Kunne du ___ deg et liv uten sol i to måneder?',
            answer: 'forestille',
            options: ['forestille', 'forestilte', 'forestilt'],
            translation: 'Você conseguiria imaginar uma vida sem sol por dois meses?',
          },
        ],
        voice: {
          bot: 'Tenk deg at du hadde flyttet til Norge. Hva ville du savnet mest?',
          botTranslation: 'Imagine que você tivesse se mudado para a Noruega. Do que você sentiria mais falta?',
          expected: [
            'Hvis jeg hadde flyttet til Norge, ville jeg ha savnet familien min og sola, men jeg ville ikke ha angret.',
            'hvis jeg hadde flyttet',
            'ville jeg ha savnet',
            'ikke ha angret',
          ],
          hint: 'Hipótese no passado: “hvis jeg hadde + particípio”, depois “ville jeg ha + particípio”.',
        },
        communityPrompt:
          'Grave-se imaginando sua vida em Bergen ou Tromsø: do que você sentiria falta, o que faria no inverno escuro e se você se arrependeria (ville ha angret).',
      },
      {
        id: 'nb-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hva ville vært annerledes i livet ditt hvis du var født i Norge?',
          botTranslation: 'O que seria diferente na sua vida se você tivesse nascido na Noruega?',
          expected: [
            'Hvis jeg var født i Norge, ville jeg ha gått på ski før jeg kunne gå, og hadde jeg vokst opp i Bergen, ville jeg vært vant til regn.',
            'hvis jeg var født',
            'ville jeg ha',
            'hadde jeg vokst opp',
          ],
          hint: 'Misture as três formas: “hvis” + pretérito, “ville ha” + particípio e a inversão sem “hvis” (hadde jeg…).',
        },
        communityPrompt:
          'Escreva 5 frases sobre “e se a Noruega nunca tivesse encontrado petróleo?”: duas com “hvis … hadde”, uma com a inversão “Hadde …”, uma com “ville ha” + particípio e um pedido gentil com “skulle gjerne”.',
      },
    ],
  },
  {
    id: 'nb-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Registro formal: e-mails e repartições',
    emoji: '📨',
    card: {
      id: 'nb-c10',
      title: 'A Noruega das repartições',
      emoji: '🏛️',
      history:
        'O fødselsnummer, o número de identidade de onze dígitos (seis da data de nascimento e cinco de controle), existe desde 1964 e aparece em quase tudo: banco, médico, imposto, aluguel. Estrangeiros que ficam pouco tempo recebem um D-nummer no lugar dele. Em 2006, os serviços de emprego, de previdência e parte da assistência social foram juntados num só órgão, a NAV. A declaração de imposto, a skattemelding, já chega preenchida na primavera, e quem precisa corrigir algo costuma ter até 30 de abril.',
      culture_tip:
        'Na Noruega, até cartas oficiais tratam o leitor por “du”: o “De” de cortesia caiu em desuso com a chamada “du-reformen”, nos anos 1970, e hoje soa antiquado ou irônico. Um e-mail formal pode começar só com “Hei,” ou “Hei, Kari,” e termina quase sempre com “Med vennlig hilsen” (atenciosamente), muitas vezes abreviado “mvh”. Não se usam títulos como “doutor” ou “senhor”: o formal está na clareza, nas fórmulas fixas e no respeito aos prazos (frister).',
      grammar_why:
        'O registro formal norueguês não muda o pronome, e sim as fórmulas e as construções. Algumas fixas: “Jeg viser til…” (refiro-me a…), “Vedlagt følger…” (segue em anexo…), “Jeg ber om…” (solicito…), “Ta gjerne kontakt” (fique à vontade para entrar em contato), “Jeg ser fram til å høre fra deg” (aguardo seu retorno). A passiva com -s é muito usada em instruções oficiais: “Skjemaet må fylles ut” (o formulário deve ser preenchido), “Søknaden sendes innen fristen”. “Vennligst” + imperativo é o “favor” dos avisos: “Vennligst skriv under”. Em textos antigos você ainda vai ver o “De” com maiúscula e o possessivo “Deres”: “Har De mottatt vårt brev?”.',
      grammar_examples: [
        ['Jeg viser til brevet deres av 3. mars.', 'Refiro-me à carta de vocês de 3 de março.'],
        ['Vedlagt følger en kopi av arbeidskontrakten.', 'Segue em anexo uma cópia do contrato de trabalho.'],
        ['Søknaden må sendes innen fristen.', 'O requerimento deve ser enviado dentro do prazo.'],
        ['Har De mottatt vårt brev?', 'O senhor recebeu a nossa carta?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u10-l1',
        title: 'E-mails de trabalho',
        kind: 'licao',
        words: ['e-post', 'frist', 'bekrefte', 'avtale', 'utsette', 'kontakte'],
        cloze: [
          {
            sentence: 'Jeg viser ___ e-posten din av 12. mai.',
            answer: 'til',
            options: ['til', 'på', 'om'],
            translation: 'Refiro-me ao seu e-mail de 12 de maio.',
          },
          {
            sentence: 'Takk for svaret. ___ hilsen Kari Nordmann',
            answer: 'Med vennlig',
            options: ['Med vennlig', 'Vennlig med', 'Med god'],
            translation: 'Obrigada pela resposta. Atenciosamente, Kari Nordmann',
          },
          {
            sentence: 'Vi må dessverre ___ møtet til neste uke.',
            answer: 'utsette',
            options: ['utsette', 'avlyse', 'bekrefte'],
            translation: 'Infelizmente precisamos adiar a reunião para a semana que vem.',
          },
        ],
        voice: {
          bot: 'Hei! Jeg har ikke fått svar på e-posten min om møtet. Har du lest den?',
          botTranslation: 'Oi! Não recebi resposta ao meu e-mail sobre a reunião. Você leu?',
          expected: [
            'Beklager at jeg svarer så sent. Jeg kan bekrefte at torsdag passer fint.',
            'beklager',
            'bekrefte',
            'passer',
          ],
          hint: 'Peça desculpas com “Beklager at…” e confirme com “Jeg kan bekrefte at…”.',
        },
        communityPrompt:
          'Escreva um e-mail curto a um colega adiando uma reunião: comece com “Jeg viser til…”, use uma passiva com -s e termine com “Med vennlig hilsen”.',
      },
      {
        id: 'nb-u10-l2',
        title: 'Formulários e documentos',
        kind: 'licao',
        words: ['skattemelding', 'fødselsnummer', 'trygd', 'byråkrati', 'fylle ut', 'skrive under'],
        cloze: [
          {
            sentence: 'Skjemaet må ___ ut og sendes innen 30. april.',
            answer: 'fylles',
            options: ['fylles', 'fyller', 'fylt'],
            translation: 'O formulário deve ser preenchido e enviado até 30 de abril.',
          },
          {
            sentence: 'Vennligst ___ under på side to.',
            answer: 'skriv',
            options: ['skriv', 'skrive', 'skriver'],
            translation: 'Favor assinar na página dois.',
          },
          {
            sentence: 'Jeg ber ___ en bekreftelse på at søknaden er mottatt.',
            answer: 'om',
            options: ['om', 'for', 'på'],
            translation: 'Solicito uma confirmação de que o requerimento foi recebido.',
          },
        ],
        voice: {
          bot: 'God dag. Har du fødselsnummer eller D-nummer?',
          botTranslation: 'Bom dia. Você tem número de identidade ou D-nummer?',
          expected: [
            'God dag. Jeg har ikke fødselsnummer ennå, men her er D-nummeret mitt.',
            'D-nummer',
            'fødselsnummer',
            'ennå',
          ],
          hint: 'Explique que ainda (“ennå”) não tem fødselsnummer e mostre o D-nummer.',
        },
        communityPrompt:
          'Escreva 3 instruções de um formulário oficial na passiva com -s (“Skjemaet fylles ut…”, “Dokumentene sendes…”) e um aviso com “Vennligst” + imperativo.',
      },
      {
        id: 'nb-u10-l3',
        title: 'Desafio de voz: a reclamação',
        kind: 'voz',
        words: ['klage', 'beklage', 'forklare', 'avgjøre', 'vedtak', 'forslag'],
        cloze: [
          {
            sentence: 'Jeg vil klage ___ vedtaket fra kommunen.',
            answer: 'på',
            options: ['på', 'om', 'til'],
            translation: 'Quero recorrer da decisão do município.',
          },
          {
            sentence: 'Vi ___ at saken har tatt så lang tid.',
            answer: 'beklager',
            options: ['beklager', 'klager', 'forklarer'],
            translation: 'Lamentamos que o caso tenha demorado tanto.',
          },
          {
            sentence: 'Klagen ___ behandlet innen tre uker.',
            answer: 'vil bli',
            options: ['vil bli', 'ville', 'har'],
            translation: 'A reclamação será analisada em até três semanas.',
          },
        ],
        voice: {
          bot: 'Du har fått avslag på søknaden om barnehageplass. Hva vil du gjøre?',
          botTranslation: 'Seu pedido de vaga na creche foi negado. O que você vai fazer?',
          expected: [
            'Jeg vil klage på vedtaket og forklare hvorfor vi trenger plassen.',
            'klage på vedtaket',
            'forklare',
            'trenger plassen',
          ],
          hint: 'Use “klage på vedtaket” (recorrer da decisão) e explique o motivo com “forklare hvorfor…”.',
        },
        communityPrompt:
          'Grave-se lendo uma reclamação formal ao município: “Jeg viser til…”, o motivo, uma passiva com -s ou “bli” e o fecho com “Med vennlig hilsen”.',
      },
      {
        id: 'nb-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Les opp en formell e-post til kommunen der du klager på et vedtak.',
          botTranslation: 'Leia em voz alta um e-mail formal ao município em que você recorre de uma decisão.',
          expected: [
            'Hei. Jeg viser til vedtaket av 3. mars og vil klage på det. Vedlagt følger dokumentasjon. Jeg ser fram til å høre fra dere. Med vennlig hilsen',
            'jeg viser til',
            'vedlagt følger',
            'ser fram til',
            'med vennlig hilsen',
          ],
          hint: 'Use as fórmulas fixas: “Jeg viser til…”, “Vedlagt følger…”, “Jeg ser fram til…” e “Med vennlig hilsen”.',
        },
        communityPrompt:
          'Escreva um e-mail formal completo à NAV ou ao município (6 a 8 frases): fórmula de abertura, referência a um documento, pedido com “Jeg ber om…”, uma passiva com -s, anexo com “Vedlagt følger…” e fecho.',
      },
    ],
  },
  // ───────────────────────── nb-u11 · B2.3 ─────────────────────────
  {
    id: 'nb-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Idiomas, compostos e a gíria de Oslo',
    emoji: '🧊',
    card: {
      id: 'nb-c11',
      title: 'Ha is i magen: o norueguês figurado',
      emoji: '🐱',
      history:
        'O norueguês junta palavras sem espaço para criar compostos quase infinitos: “skjerm” + “tid” dá “skjermtid”, e “arbeid” + “miljø” dá “arbeidsmiljø”, com um -s- de ligação. Separar o composto (særskriving) é um erro clássico e às vezes engraçado: “røykfritt” quer dizer “livre de fumaça, proibido fumar”, mas “røyk fritt” parece um convite para fumar à vontade. Desde os anos 1990, nos bairros multiculturais do leste de Oslo, os jovens criaram um jeito próprio de falar, que a imprensa apelidou de “kebabnorsk”; os linguistas preferem o termo “multietnoleto”. Palavras dessa fala, como “wallah” (juro) e “jalla” (vamos, anda), vindas do árabe, se espalharam por todo o país.',
      culture_tip:
        'Use a gíria só com quem você conhece e nunca imite sotaque, porque pode soar como deboche. Os idiomas, ao contrário, estão em toda parte: no jornal, no trabalho, na TV. “Det er ingen ku på isen” (“não tem vaca no gelo”) quer dizer “não há problema nenhum”, e “det er ikke mitt bord” (“não é a minha mesa”) quer dizer “não é problema meu”.',
      grammar_why:
        'No composto norueguês, a última palavra manda: ela dá o sentido principal e o gênero. “Et miljø” faz “et arbeidsmiljø”; “ei/en tid” faz “skjermtida/skjermtiden”. Entre as partes pode aparecer um -s- ou um -e- de ligação (arbeidsplass, barnehage), e tudo se escreve junto, sem espaço nem hífen. A tônica costuma cair na primeira parte, o contrário do português, em que “guarda-chuva” tem a tônica no fim. Os idiomas são blocos fixos: não se troca “katta” por “katten” em “kjøpe katta i sekken”, mas o verbo se conjuga normalmente (han kjøpte katta i sekken).',
      grammar_examples: [
        ['Hun hadde is i magen under hele eksamen.', 'Ela manteve a calma durante a prova inteira.'],
        ['Han kjøpte katta i sekken da han kjøpte den gamle bilen.', 'Ele comprou gato por lebre quando comprou o carro velho.'],
        ['Skjermtida til barna har økt mye de siste årene.', 'O tempo de tela das crianças aumentou muito nos últimos anos.'],
        ['Konserten var sykt bra, wallah!', 'O show foi bom demais, juro!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u11-l1',
        title: 'Idiomas do dia a dia',
        kind: 'licao',
        words: ['ha is i magen', 'slå to fluer i en smekk', 'kjøpe katta i sekken', 'snakk om sola', 'på bærtur', 'smaken er som baken'],
        cloze: [
          {
            sentence: 'Hvis jeg tar toget til Bergen, kan jeg besøke mormor og se fjordene samtidig. Da slår jeg to fluer i en ___.',
            answer: 'smekk',
            options: ['smekk', 'smell', 'slag'],
            translation: 'Se eu pegar o trem para Bergen, posso visitar a vovó e ver os fiordes ao mesmo tempo. Assim mato dois coelhos com uma cajadada só.',
          },
          {
            sentence: 'Han var helt på ___ da læreren spurte om leksene.',
            answer: 'bærtur',
            options: ['bærtur', 'fjelltur', 'sykkeltur'],
            translation: 'Ele estava completamente por fora quando o professor perguntou sobre a lição de casa.',
          },
          {
            sentence: 'Selgeren lovte at bilen var som ny, men vi ___ katta i sekken.',
            answer: 'kjøpte',
            options: ['kjøpte', 'kjøper', 'kjøpt'],
            translation: 'O vendedor prometeu que o carro estava como novo, mas nós compramos gato por lebre.',
          },
        ],
        voice: {
          bot: 'Snakk om sola! Vi snakket akkurat om deg. Hvordan gikk jobbintervjuet i går? Var du nervøs?',
          botTranslation: 'Falando no diabo! A gente estava falando de você agorinha. Como foi a entrevista de emprego ontem? Você ficou nervoso?',
          expected: [
            'Nei, jeg hadde is i magen hele tiden. Jeg svarte rolig på alle spørsmålene, og jeg tror det gikk bra.',
            'is i magen',
            'rolig',
            'gikk bra',
          ],
          hint: 'Use “ha is i magen” no passado (hadde is i magen) e conte com calma como foi a entrevista.',
        },
        communityPrompt: 'Escreva 4 frases em norueguês contando uma situação em que você “kjøpte katta i sekken” ou “slo to fluer i en smekk”. Conjugue o verbo do idioma no passado.',
      },
      {
        id: 'nb-u11-l2',
        title: 'Compostos: a última palavra manda',
        kind: 'licao',
        words: ['skjermtid', 'strømmetjeneste', 'hjemlengsel', 'arbeidsmiljø', 'kildesortering', 'kjempebra'],
        cloze: [
          {
            sentence: 'Det nye ___ på kontoret er mye bedre enn det gamle.',
            answer: 'arbeidsmiljøet',
            options: ['arbeidsmiljøet', 'arbeids miljøet', 'arbeidmiljøet'],
            translation: 'O novo ambiente de trabalho no escritório é muito melhor que o antigo.',
          },
          {
            sentence: 'Foreldrene vil redusere ___ til barna.',
            answer: 'skjermtida',
            options: ['skjermtida', 'skjermtidet', 'skjerm tida'],
            translation: 'Os pais querem reduzir o tempo de tela das crianças.',
          },
          {
            sentence: 'Etter tre måneder i Tromsø fikk Ana ___ og savnet familien i Brasil.',
            answer: 'hjemlengsel',
            options: ['hjemlengsel', 'hjem lengsel', 'hjem-lengsel'],
            translation: 'Depois de três meses em Tromsø, a Ana ficou com saudade de casa e sentiu falta da família no Brasil.',
          },
        ],
        voice: {
          bot: 'Du har bodd i Norge en stund nå. Hvilke norske ord synes du er morsomme eller rare?',
          botTranslation: 'Você já mora na Noruega há um tempo. Que palavras norueguesas você acha engraçadas ou esquisitas?',
          expected: [
            'Jeg synes de sammensatte ordene er morsomme, for eksempel “kildesortering” og “strømmetjeneste”. Man setter bare ordene sammen, og så har man et nytt ord!',
            'kildesortering',
            'strømmetjeneste',
            'setter sammen',
          ],
          hint: 'Dê dois exemplos de compostos e explique como eles se formam; lembre que se escrevem juntos, sem espaço.',
        },
        communityPrompt: 'Invente 3 compostos noruegueses com palavras que você já conhece (ex.: “kaffe” + “kopp”) e escreva uma frase com cada um, usando a forma definida com o gênero da última palavra.',
      },
      {
        id: 'nb-u11-l3',
        title: 'Desafio de voz: a gíria de Oslo',
        kind: 'voz',
        words: ['digg', 'sykt', 'drittlei', 'kult', 'fy søren', 'jøss'],
        cloze: [
          {
            sentence: 'Konserten på Grønland i går var ___ bra!',
            answer: 'sykt',
            options: ['sykt', 'syk', 'syke'],
            translation: 'O show em Grønland (bairro de Oslo) ontem foi bom demais!',
          },
          {
            sentence: 'Jeg er ___ av alt dette regnet.',
            answer: 'drittlei',
            options: ['drittlei', 'drittsyk', 'drittkult'],
            translation: 'Estou de saco cheio de toda essa chuva.',
          },
          {
            sentence: '___, så mye folk det er her i kveld!',
            answer: 'Jøss',
            options: ['Jøss', 'Æsj', 'Au'],
            translation: 'Nossa, quanta gente tem aqui hoje à noite!',
          },
        ],
        voice: {
          bot: 'Jalla, bror! Skal vi ta en kebab på Grønland etterpå? Den er sykt digg, wallah.',
          botTranslation: 'Bora, mano! Vamos comer um kebab em Grønland depois? É bom demais, juro.',
          expected: [
            'Ja, det høres kult ut! Jeg er sykt sulten, så jalla, vi drar!',
            'kult',
            'sykt',
            'jalla',
          ],
          hint: 'Responda no mesmo tom descontraído, com duas gírias da lição, sem exagerar nem imitar sotaque.',
        },
        communityPrompt: 'Reescreva em norueguês padrão a mensagem “Jalla, konserten var sykt digg, wallah!” e explique em português, em 2 frases, quando cada versão é adequada.',
      },
      {
        id: 'nb-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jeg skriver en artikkel om hvordan ungdom i Oslo snakker. Hva tenker du om slang og nye ord i norsk?',
          botTranslation: 'Estou escrevendo um artigo sobre como os jovens de Oslo falam. O que você pensa sobre gíria e palavras novas no norueguês?',
          expected: [
            'Jeg synes det er spennende. Språket forandrer seg hele tiden, og ord som “jalla” og “digg” viser at mange kulturer har påvirket norsk. Men på jobben og på skolen er det lurt å bruke et mer nøytralt språk.',
            'forandrer seg',
            'kulturer',
            'på jobben',
          ],
          hint: 'Dê a sua opinião, cite exemplos de gíria e mostre que sabe em que situações cada registro cabe.',
        },
        communityPrompt: 'Escreva em norueguês um diálogo de 6 falas entre dois amigos de Oslo usando pelo menos 2 idiomas, 2 compostos e 2 gírias desta unidade.',
      },
    ],
  },

  // ───────────────────────── nb-u12 · B2.4 ─────────────────────────
  {
    id: 'nb-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Na minha opinião…',
    emoji: '🗣️',
    card: {
      id: 'nb-c12',
      title: 'Debater à norueguesa',
      emoji: '⚖️',
      history:
        'A liberdade de expressão está garantida no artigo 100 da Constituição norueguesa, a Grunnloven de 1814, uma das constituições escritas mais antigas do mundo ainda em vigor. O debate público (samfunnsdebatt) é levado a sério: os jornais publicam muitos artigos de opinião de leitores, e na escola os alunos treinam o texto argumentativo, o “drøftende tekst”, em que é preciso pesar os dois lados antes de concluir. Um tema clássico é o fundo do petróleo: criado em 1990, recebeu o primeiro depósito em 1996 e se tornou um dos maiores fundos soberanos do mundo; uma regra fiscal (handlingsregelen) limita quanto do dinheiro o governo pode gastar por ano.',
      culture_tip:
        'Os noruegueses discordam de forma calma e objetiva: levantar a voz ou interromper pega mal. É comum começar reconhecendo o outro lado (“Jeg skjønner hva du mener, men…”). E depois da discussão ninguém fica de mal: o consenso é um valor forte, e o objetivo costuma ser chegar a um acordo.',
      grammar_why:
        'Os conectores dão estrutura ao argumento: “dessuten” (além disso) soma, “derimot” (por outro lado, já) contrasta, “likevel” (mesmo assim) concede, e “altså” (ou seja, portanto) conclui. Quando um deles abre a frase, vale a regra V2: o verbo vem logo em seguida e o sujeito depois dele — “Dessuten er det dyrt”, nunca “Dessuten det er dyrt”. “Derimot” e “likevel” também podem vir depois do verbo: “I Lofoten er det derimot rolig”. Na pontuação, o norueguês pede vírgula depois de uma oração subordinada que abre a frase (Hvis det regner, blir vi hjemme) e antes de “men”, mas nunca antes de “at” (Jeg mener at…). “Etter min mening” e “på den ene siden” também contam como primeiro elemento: “Etter min mening bør vi spare”.',
      grammar_examples: [
        ['Bilen er praktisk. Dessuten bor vi langt fra byen.', 'O carro é prático. Além disso, moramos longe da cidade.'],
        ['Det regnet hele dagen. Likevel gikk vi på tur.', 'Choveu o dia inteiro. Mesmo assim, fomos fazer trilha.'],
        ['I Oslo er det mye trafikk; i Lofoten er det derimot rolig.', 'Em Oslo há muito trânsito; já em Lofoten é tranquilo.'],
        ['Hvis vi bruker mer av oljefondet nå, blir det mindre igjen til barna våre.', 'Se usarmos mais do fundo do petróleo agora, vai sobrar menos para os nossos filhos.'],
        ['Du er altså enig med meg?', 'Então você concorda comigo?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u12-l1',
        title: 'Dar e defender a opinião',
        kind: 'licao',
        words: ['samfunnsdebatt', 'meningsmåling', 'skeptisk', 'overtale', 'kritisere', 'uenig'],
        cloze: [
          {
            sentence: 'Etter min mening ___ starte senere om morgenen.',
            answer: 'bør skolen',
            options: ['bør skolen', 'skolen bør', 'skolen å bør'],
            translation: 'Na minha opinião, a escola deveria começar mais tarde de manhã.',
          },
          {
            sentence: 'Ifølge den siste ___ er flertallet for forslaget.',
            answer: 'meningsmålingen',
            options: ['meningsmålingen', 'meningsmålinger', 'meningsmålingens'],
            translation: 'Segundo a última pesquisa de opinião, a maioria é a favor da proposta.',
          },
          {
            sentence: 'Jeg er ___ med deg, men jeg respekterer meningen din.',
            answer: 'uenig',
            options: ['uenig', 'uenige', 'uenighet'],
            translation: 'Eu discordo de você, mas respeito a sua opinião.',
          },
        ],
        voice: {
          bot: 'Mange mener at mobilen bør forbys i skolen. Hva synes du?',
          botTranslation: 'Muita gente acha que o celular deveria ser proibido na escola. O que você acha?',
          expected: [
            'Jeg er delvis enig. Etter min mening bør elevene ikke bruke mobilen i timene, men jeg er skeptisk til et totalforbud. Dessuten kan mobilen være nyttig i undervisningen.',
            'etter min mening',
            'skeptisk',
            'dessuten',
          ],
          hint: 'Dê sua posição com “etter min mening” e a inversão (bør elevene), mostre uma ressalva com “skeptisk til” e some um argumento com “dessuten”.',
        },
        communityPrompt: 'Escreva em norueguês um comentário de 5 frases para a seção de leitores de um jornal sobre a semana de quatro dias de trabalho, usando “etter min mening”, “dessuten” e “likevel”, sempre com o verbo na segunda posição.',
      },
      {
        id: 'nb-u12-l2',
        title: 'Conectores e vírgulas',
        kind: 'licao',
        words: ['dessuten', 'derimot', 'på den ene siden', 'på den andre siden', 'komma', 'uansett'],
        cloze: [
          {
            sentence: 'Det er dyrt å bo i Oslo. Dessuten ___ vanskelig å finne en leilighet.',
            answer: 'er det',
            options: ['er det', 'det er', 'det'],
            translation: 'É caro morar em Oslo. Além disso, é difícil encontrar um apartamento.',
          },
          {
            sentence: 'Bergen har mye regn; Oslo har ___ flere dager med sol.',
            answer: 'derimot',
            options: ['derimot', 'dessuten', 'altså'],
            translation: 'Bergen tem muita chuva; já Oslo tem mais dias de sol.',
          },
          {
            sentence: 'Det var kaldt og vått. ___ badet vi i fjorden.',
            answer: 'Likevel',
            options: ['Likevel', 'Dessuten', 'Fordi'],
            translation: 'Estava frio e molhado. Mesmo assim, tomamos banho no fiorde.',
          },
        ],
        voice: {
          bot: 'Er det bedre å bo i byen eller på landet, synes du?',
          botTranslation: 'Você acha melhor morar na cidade ou no interior?',
          expected: [
            'På den ene siden er det mer å gjøre i byen. På den andre siden er det roligere på landet, og dessuten er boligene billigere. Uansett kommer det an på hva man trenger.',
            'på den ene siden',
            'på den andre siden',
            'dessuten',
          ],
          hint: 'Pese os dois lados com “på den ene siden… på den andre siden…” e lembre da inversão: o verbo vem logo depois do conector.',
        },
        communityPrompt: 'Escreva em norueguês 4 frases que comecem com uma oração subordinada (Hvis…, Når…, Selv om…, Fordi…) e ponha a vírgula no lugar certo; depois explique em português por que o verbo vem antes do sujeito na segunda parte.',
      },
      {
        id: 'nb-u12-l3',
        title: 'Desafio de voz: o debate do fundo do petróleo',
        kind: 'voz',
        words: ['oljefond', 'bærekraftig', 'forslag', 'vurdere', 'innlegg', 'ytringsfrihet'],
        cloze: [
          {
            sentence: 'Fondet er enormt. Politikerne kan ___ ikke bruke så mye de vil.',
            answer: 'likevel',
            options: ['likevel', 'fordi', 'selv om'],
            translation: 'O fundo é enorme. Mesmo assim, os políticos não podem gastar quanto quiserem.',
          },
          {
            sentence: 'Regjeringen skal ___ forslaget før jul.',
            answer: 'vurdere',
            options: ['vurdere', 'vurderer', 'vurdert'],
            translation: 'O governo vai avaliar a proposta antes do Natal.',
          },
          {
            sentence: 'I går skrev jeg et ___ i avisen om ytringsfrihet.',
            answer: 'innlegg',
            options: ['innlegg', 'innlegget', 'innleggs'],
            translation: 'Ontem escrevi um artigo de opinião no jornal sobre liberdade de expressão.',
          },
        ],
        voice: {
          bot: 'Noen vil bruke mer av oljefondet nå, andre vil spare pengene til fremtidige generasjoner. Hva mener du?',
          botTranslation: 'Uns querem gastar mais do fundo do petróleo agora, outros querem guardar o dinheiro para as gerações futuras. O que você acha?',
          expected: [
            'Jeg mener at vi bør spare mesteparten av pengene. Olje er ikke bærekraftig i det lange løp, og derfor må fondet vare. Likevel kan man vurdere å bruke litt mer på skole og helse.',
            'bærekraftig',
            'derfor',
            'likevel',
          ],
          hint: 'Defenda uma posição, justifique com “derfor” (e a inversão) e faça uma concessão com “likevel”.',
        },
        communityPrompt: 'Escreva em norueguês um artigo de leitor (leserinnlegg) de 6 frases sobre um tema da sua cidade, com tese, dois argumentos (dessuten), um contra-argumento (likevel) e uma conclusão (altså).',
      },
      {
        id: 'nb-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Velkommen til debatten! Kveldens spørsmål er: Bør privatbiler forbys i sentrum av norske byer? Du har ett minutt.',
          botTranslation: 'Bem-vindo ao debate! A pergunta da noite é: os carros particulares deveriam ser proibidos no centro das cidades norueguesas? Você tem um minuto.',
          expected: [
            'På den ene siden gir færre biler renere luft og tryggere gater. Dessuten blir byen hyggeligere å gå i. På den andre siden er mange avhengige av bilen, særlig folk som bor langt unna. Etter min mening bør vi likevel redusere biltrafikken, altså satse mer på buss og trikk.',
            'på den ene siden',
            'dessuten',
            'likevel',
            'altså',
          ],
          hint: 'Estruture: os dois lados, um argumento a mais, a sua posição com concessão e a conclusão. Cuide da inversão depois de cada conector.',
        },
        communityPrompt: 'Escreva em norueguês um texto argumentativo (drøftende tekst) de 8 frases sobre o fundo do petróleo ou outro tema, com todos estes conectores: på den ene siden, på den andre siden, dessuten, derimot, likevel, altså. Revise as vírgulas: depois de subordinada inicial, antes de “men” e nunca antes de “at”.',
      },
    ],
  },

  // ───────────────────────── nb-u13 · C1.1 ─────────────────────────
  {
    id: 'nb-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Duas escritas, mil dialetos',
    emoji: '🗺️',
    card: {
      id: 'nb-c13',
      title: 'Bokmål, nynorsk, dialetos e sámi',
      emoji: '🏔️',
      history:
        'Durante a união com a Dinamarca, que terminou em 1814, a língua escrita da Noruega era o dinamarquês. No século XIX surgiram dois caminhos: Knud Knudsen quis “norueguesar” aos poucos o dinamarquês escrito, o que deu origem ao riksmål e, mais tarde, ao bokmål; Ivar Aasen, filho de agricultores de Ørsta, em Sunnmøre, percorreu o país estudando os dialetos e criou o landsmål, com uma gramática publicada em 1848 e um dicionário em 1850. Em 1885, o Storting deu ao landsmål o mesmo status da língua escrita oficial, e em 1929 os nomes mudaram para “bokmål” e “nynorsk”. Hoje pouco mais de 10% dos alunos têm o nynorsk como escrita principal, sobretudo no oeste, e todos estudam a outra forma como “sidemål”. No norte vivem os sámi, o povo indígena da Noruega, cujo parlamento, o Sametinget, foi inaugurado em 1989 em Karasjok; o kven, língua próxima do finlandês falada no norte, é reconhecido como língua minoritária desde 2005.',
      culture_tip:
        'Na Noruega, falar dialeto é normal em qualquer lugar: no telejornal, no Storting, na universidade. Não existe uma pronúncia oficial, e pedir a alguém que “fale direito” é falta de educação; neste app, a pronúncia de referência é o norueguês oriental de Oslo. Ao falar dos sámi, use “samer” e “samisk”: o termo antigo “lapp” é considerado ofensivo. O dia nacional sámi é 6 de fevereiro.',
      grammar_why:
        'Bokmål e nynorsk são duas normas escritas da mesma língua e se leem sem esforço; as diferenças estão em palavras frequentes e em algumas terminações. Compare: “jeg / eg”, “ikke / ikkje”, “hva / kva”, “hun / ho”, “hjemme / heime”, “bare / berre”, “mye / mykje”. No nynorsk, muitos verbos fazem o presente em -ar (snakkar, kastar), e o feminino é obrigatório (ei bok, boka), enquanto o bokmål aceita também “en bok, boken”. Na fala, os dialetos vão além: em Bergen não existe o gênero feminino, em Trøndelag se diz “itj” por “ikke”, e em boa parte do norte se diz “æ” por “jeg”. Entre as línguas escandinavas a intercompreensão é alta: o bokmål escrito é muito parecido com o dinamarquês, e a fala norueguesa costuma ser a mais fácil de entender para suecos e dinamarqueses.',
      grammar_examples: [
        ['Eg bur i Førde og skriv nynorsk.', 'Eu moro em Førde e escrevo nynorsk. (nynorsk; em bokmål: Jeg bor i Førde og skriver nynorsk.)'],
        ['Kva heiter du? – Hva heter du?', 'Como você se chama? (nynorsk – bokmål)'],
        ['Ivar Aasen reiste rundt i landet og samlet inn dialektene.', 'Ivar Aasen viajou pelo país e fez o levantamento dos dialetos.'],
        ['Samene er Norges urfolk, og Sametinget ligger i Karasjok.', 'Os sámi são o povo indígena da Noruega, e o Sametinget fica em Karasjok.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u13-l1',
        title: 'Do dinamarquês às duas escritas',
        kind: 'licao',
        words: ['rettskriving', 'ordbok', 'historisk', 'selvstendig', 'bonde', 'nasjonal'],
        cloze: [
          {
            sentence: 'I 1850 ga Ivar Aasen ut en ___ over det norske folkespråket.',
            answer: 'ordbok',
            options: ['ordbok', 'ordboka', 'ordbøker'],
            translation: 'Em 1850, Ivar Aasen publicou um dicionário da língua popular norueguesa.',
          },
          {
            sentence: 'Etter at unionen med Sverige ble oppløst i 1905, var Norge et helt ___ land.',
            answer: 'selvstendig',
            options: ['selvstendig', 'selvstendige', 'selvstendigt'],
            translation: 'Depois que a união com a Suécia foi dissolvida, em 1905, a Noruega era um país totalmente independente.',
          },
          {
            sentence: 'Knud Knudsen ville fornorske den danske ___ steg for steg.',
            answer: 'rettskrivingen',
            options: ['rettskrivingen', 'rettskriving', 'rettskrivinger'],
            translation: 'Knud Knudsen queria “norueguesar” a ortografia dinamarquesa passo a passo.',
          },
        ],
        voice: {
          bot: 'Hvorfor har Norge egentlig to skriftspråk? Mange utlendinger lurer på det.',
          botTranslation: 'Por que, afinal, a Noruega tem duas línguas escritas? Muitos estrangeiros se perguntam isso.',
          expected: [
            'Fordi Norge skrev dansk i flere hundre år. På 1800-tallet laget Ivar Aasen landsmålet ut fra dialektene, og det ble til nynorsk, mens bokmålet utviklet seg fra dansk.',
            'dansk',
            'Ivar Aasen',
            'nynorsk',
          ],
          hint: 'Explique a origem das duas escritas: o dinamarquês, Aasen e os dialetos, e o caminho que levou ao bokmål.',
        },
        communityPrompt: 'Escreva em norueguês 4 frases resumindo a história das duas escritas, com os anos 1814, 1885 e 1929, usando o pretérito e a passiva com “ble”.',
      },
      {
        id: 'nb-u13-l2',
        title: 'Dialetos e vizinhos',
        kind: 'licao',
        words: ['uttale', 'ligne', 'uforståelig', 'tolk', 'oversette', 'stolt'],
        cloze: [
          {
            sentence: 'I Bergen sier man “boken” og ikke “boka”, fordi dialekten ikke har ___.',
            answer: 'hunkjønn',
            options: ['hunkjønn', 'hankjønn', 'intetkjønn'],
            translation: 'Em Bergen se diz “boken”, e não “boka”, porque o dialeto não tem gênero feminino.',
          },
          {
            sentence: 'Norsk ___ på svensk, men dansk uttale er vanskeligere å forstå.',
            answer: 'ligner',
            options: ['ligner', 'ligne', 'lignes'],
            translation: 'O norueguês se parece com o sueco, mas a pronúncia dinamarquesa é mais difícil de entender.',
          },
          {
            sentence: 'Dialekten fra Setesdal var nesten ___ for meg.',
            answer: 'uforståelig',
            options: ['uforståelig', 'uforståelige', 'uforståeligt'],
            translation: 'O dialeto de Setesdal era quase incompreensível para mim.',
          },
        ],
        voice: {
          bot: 'Eg e fra Bergen, og eg snakke bergensk. Forstår du ka eg seie?',
          botTranslation: '(em dialeto de Bergen) Eu sou de Bergen e falo o dialeto de Bergen. Você entende o que eu estou dizendo?',
          expected: [
            'Ja, jeg forstår det meste! Uttalen din er annerledes enn i Oslo, men mange ord ligner. Jeg synes det er fint at du er stolt av dialekten din.',
            'uttalen',
            'ligner',
            'stolt',
          ],
          hint: 'Responda em bokmål: comente a pronúncia e as semelhanças, sempre com respeito pelo dialeto.',
        },
        communityPrompt: 'Compare em norueguês (4 frases) o jeito de falar de duas regiões do Brasil com dois dialetos noruegueses desta unidade, tratando todos como formas legítimas de falar.',
      },
      {
        id: 'nb-u13-l3',
        title: 'Desafio de voz: sámi e kven',
        kind: 'voz',
        words: ['same', 'urfolk', 'sameting', 'joik', 'reindrift', 'minoritet'],
        cloze: [
          {
            sentence: 'Samene er Norges ___, og de har levd i nord i tusenvis av år.',
            answer: 'urfolk',
            options: ['urfolk', 'urfolket', 'urfolks'],
            translation: 'Os sámi são o povo indígena da Noruega e vivem no norte há milhares de anos.',
          },
          {
            sentence: '___ ble åpnet i Karasjok i 1989.',
            answer: 'Sametinget',
            options: ['Sametinget', 'Sameting', 'Sametingets'],
            translation: 'O Sametinget (parlamento sámi) foi inaugurado em Karasjok em 1989.',
          },
          {
            sentence: 'En ___ er ikke en sang om noen: man joiker en person, et dyr eller et sted.',
            answer: 'joik',
            options: ['joik', 'joiken', 'joike'],
            translation: 'Um joik não é uma canção sobre alguém: a gente “joika” uma pessoa, um animal ou um lugar.',
          },
        ],
        voice: {
          bot: 'Buorre beaivi! Det betyr “god dag” på nordsamisk. Hva vet du om samene?',
          botTranslation: 'Buorre beaivi! Isso quer dizer “bom dia” em sámi do norte. O que você sabe sobre os sámi?',
          expected: [
            'Samene er et urfolk som bor i Norge, Sverige, Finland og Russland. I Norge har de sitt eget folkevalgte organ, Sametinget, og joik og reindrift er viktige deler av kulturen.',
            'urfolk',
            'Sametinget',
            'reindrift',
          ],
          hint: 'Use “samene”, “samisk” e “urfolk”, com respeito, e cite pelo menos um traço da cultura (a língua, o joik, a criação de renas).',
        },
        communityPrompt: 'Escreva em norueguês 4 frases sobre uma minoria linguística da Noruega (os sámi ou os kvener): onde vive, que língua fala e como o país protege essa língua.',
      },
      {
        id: 'nb-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi lager et radioprogram om språk i Norge. Hvordan ville du forklare den norske språksituasjonen for brasilianere?',
          botTranslation: 'Estamos fazendo um programa de rádio sobre as línguas da Noruega. Como você explicaria a situação linguística norueguesa para brasileiros?',
          expected: [
            'Jeg ville si at Norge har to skriftspråk, bokmål og nynorsk, og at nesten alle snakker dialekt i hverdagen. I tillegg har samene sine egne språk, og kvensk er et anerkjent minoritetsspråk. Det viser at språklig mangfold er en del av den norske identiteten.',
            'bokmål og nynorsk',
            'dialekt',
            'samene',
            'mangfold',
          ],
          hint: 'Organize a resposta: as duas escritas, os dialetos no dia a dia e as línguas minoritárias, com respeito.',
        },
        communityPrompt: 'Escreva em norueguês um texto de 7 frases para brasileiros sobre a paisagem linguística da Noruega: as duas escritas, os dialetos, a intercompreensão escandinava, o sámi e o kven. Inclua uma frase em nynorsk.',
      },
    ],
  },

  // ───────────────────────── nb-u14 · C1.2 ─────────────────────────
  {
    id: 'nb-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Repartições, jornais e teses',
    emoji: '📑',
    card: {
      id: 'nb-c14',
      title: 'Do byråkratspråk ao klarspråk',
      emoji: '🏛️',
      history:
        'Por muito tempo, os órgãos públicos noruegueses escreveram num estilo pesado, cheio de substantivos e passivas. A partir de 2009, o Språkrådet e a agência estatal de gestão pública conduziram um grande programa de linguagem clara no Estado, e a Lei da Língua (språklova), em vigor desde 2022, determina que os órgãos públicos usem uma linguagem clara, correta e adaptada ao leitor. A imprensa norueguesa segue desde 1936 um código de ética, a “Vær Varsom-plakaten” (“o cartaz do tenha cuidado”), e a lei de acesso à informação (offentleglova) dá a qualquer pessoa o direito de ver documentos públicos. Nas universidades, o doutorado termina numa defesa pública, a “disputas”, em que dois oponentes questionam a tese diante da plateia.',
      culture_tip:
        'Se uma carta do NAV, da Receita (Skatteetaten) ou do município parecer difícil, ligue e peça explicação: os funcionários estão acostumados, e muitos órgãos têm textos em linguagem simples e em outras línguas. No trabalho, prefira o estilo claro também nos seus e-mails: frases curtas, verbos no lugar de substantivos e “du” no lugar de “søkeren”.',
      grammar_why:
        'A nominalização transforma verbos em substantivos: “vedta” vira “vedtak”, “søke” vira “søknad”, “behandle” vira “behandling”, “gjennomføre” vira “gjennomføring”. O texto fica compacto e impessoal, mas pesado: “Etter gjennomført behandling av søknaden er det fattet vedtak om avslag” é puro byråkratspråk; em klarspråk fica “Vi har behandlet søknaden din, men du får dessverre ikke tillatelse”. Repare nas marcas desse estilo: particípio antes do substantivo (gjennomført behandling), passiva com -s (søknaden behandles), “det” formal como sujeito (det er fattet vedtak) e verbos vazios como “foreta” e “fatte”. No jornalismo, o essencial vem primeiro (a pirâmide invertida), e as fontes aparecem com “sier”, “opplyser” e “ifølge”; no texto acadêmico, dominam a passiva ou o “vi” e fórmulas como “Formålet med denne studien er å…” — note que, diferente do sueco, o “denne” norueguês pede a forma definida.',
      grammar_examples: [
        ['Søknaden må være mottatt innen 1. mars.', 'O requerimento precisa ter sido recebido até 1º de março. (estilo burocrático)'],
        ['Send søknaden innen 1. mars.', 'Mande o requerimento até 1º de março. (klarspråk)'],
        ['Ifølge politiet ble ingen skadet i ulykken.', 'Segundo a polícia, ninguém ficou ferido no acidente.'],
        ['Formålet med denne studien er å undersøke hvordan barn lærer to skriftspråk.', 'O objetivo deste estudo é investigar como as crianças aprendem duas escritas.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u14-l1',
        title: 'Cartas de repartição e klarspråk',
        kind: 'licao',
        words: ['myndighet', 'byråkrati', 'søknad', 'vedtak', 'åpenhet', 'behandle'],
        cloze: [
          {
            sentence: 'Når søknaden er ___, får du et brev fra kommunen.',
            answer: 'behandlet',
            options: ['behandlet', 'behandles', 'behandling'],
            translation: 'Quando o requerimento tiver sido analisado, você recebe uma carta do município.',
          },
          {
            sentence: 'Kommunen har fattet et ___ i saken din.',
            answer: 'vedtak',
            options: ['vedtak', 'vedta', 'vedtatt'],
            translation: 'O município tomou uma decisão no seu caso.',
          },
          {
            sentence: 'Saken din ___ innen tre uker.',
            answer: 'avgjøres',
            options: ['avgjøres', 'avgjør', 'avgjort'],
            translation: 'O seu caso será decidido em até três semanas.',
          },
        ],
        voice: {
          bot: 'Jeg fikk et brev fra kommunen: “Det er fattet vedtak om avslag på Deres søknad om utvidet åpningstid.” Hva betyr det egentlig?',
          botTranslation: 'Recebi uma carta do município: “Foi tomada decisão de indeferimento do seu requerimento de ampliação do horário de funcionamento.” O que isso quer dizer, afinal?',
          expected: [
            'Det betyr at kommunen har sagt nei. Du får ikke lov til å ha åpent lenger. Sagt på klart språk: “Vi har behandlet søknaden din, men svaret er nei.”',
            'sagt nei',
            'søknaden din',
            'klart språk',
          ],
          hint: 'Traduza o byråkratspråk para frases curtas, com verbos e “du”; repare no “Deres”, o tratamento formal antigo.',
        },
        communityPrompt: 'Reescreva em klarspråk, em norueguês, esta frase burocrática: “Det foretas en vurdering av hvorvidt vilkårene for innvilgelse er oppfylt.” Depois explique em português quais substantivos você trocou por verbos.',
      },
      {
        id: 'nb-u14-l2',
        title: 'A pirâmide invertida',
        kind: 'licao',
        words: ['journalist', 'intervju', 'kilde', 'pressefrihet', 'nyhet', 'publisere'],
        cloze: [
          {
            sentence: '___ politiet ble ingen skadet i brannen.',
            answer: 'Ifølge',
            options: ['Ifølge', 'Etter', 'Om'],
            translation: 'Segundo a polícia, ninguém ficou ferido no incêndio.',
          },
          {
            sentence: 'En god journalist sjekker alltid ___ sine.',
            answer: 'kildene',
            options: ['kildene', 'kilder', 'kildenes'],
            translation: 'Um bom jornalista sempre confere as suas fontes.',
          },
          {
            sentence: 'Saken ble ___ på nettet i går kveld.',
            answer: 'publisert',
            options: ['publisert', 'publiserte', 'publisere'],
            translation: 'A matéria foi publicada na internet ontem à noite.',
          },
        ],
        voice: {
          bot: 'Du er journalist og har tretti sekunder på radio. Et steinras har stengt en vei i Hardanger i natt. Hvordan begynner du?',
          botTranslation: 'Você é jornalista e tem trinta segundos no rádio. Um deslizamento de pedras fechou uma estrada em Hardanger esta noite. Como você começa?',
          expected: [
            'Et steinras har stengt veien langs Hardangerfjorden i natt. Ifølge politiet ble ingen skadet. Veien blir trolig stengt til i morgen, opplyser Statens vegvesen.',
            'ifølge politiet',
            'ble ingen skadet',
            'opplyser',
          ],
          hint: 'Comece pelo mais importante (o quê, onde, quando), cite a fonte com “ifølge” ou “opplyser” e use a passiva.',
        },
        communityPrompt: 'Escreva em norueguês uma notícia curta (5 frases) sobre um acontecimento da sua cidade, na ordem da pirâmide invertida, com uma fonte citada por “ifølge” e uma fala com “sier”.',
      },
      {
        id: 'nb-u14-l3',
        title: 'Desafio de voz: a defesa da tese',
        kind: 'voz',
        words: ['forskning', 'avhandling', 'fagfellevurdering', 'hypotese', 'konklusjon', 'empirisk'],
        cloze: [
          {
            sentence: 'Formålet med denne ___ er å undersøke hvordan ungdom bruker nynorsk.',
            answer: 'avhandlingen',
            options: ['avhandlingen', 'avhandling', 'avhandlingens'],
            translation: 'O objetivo desta tese é investigar como os jovens usam o nynorsk.',
          },
          {
            sentence: 'Artikkelen ble publisert etter en grundig ___.',
            answer: 'fagfellevurdering',
            options: ['fagfellevurdering', 'fagfellevurderingen', 'fagfellevurderinger'],
            translation: 'O artigo foi publicado depois de uma revisão por pares rigorosa.',
          },
          {
            sentence: 'Resultatene støtter ___ om at dialekten styrker identiteten.',
            answer: 'hypotesen',
            options: ['hypotesen', 'hypotese', 'hypotesens'],
            translation: 'Os resultados confirmam a hipótese de que o dialeto fortalece a identidade.',
          },
        ],
        voice: {
          bot: 'Takk for prøveforelesningen. Som førsteopponent vil jeg spørre: Hva er den viktigste konklusjonen i avhandlingen din?',
          botTranslation: 'Obrigado pela aula de prova. Como primeiro oponente, quero perguntar: qual é a principal conclusão da sua tese?',
          expected: [
            'Den viktigste konklusjonen er at hypotesen får støtte i det empiriske materialet. Likevel trengs det mer forskning før vi kan generalisere resultatene.',
            'konklusjonen',
            'hypotesen',
            'mer forskning',
          ],
          hint: 'Responda em registro acadêmico: conclusão, base empírica e uma ressalva sobre os limites do estudo.',
        },
        communityPrompt: 'Escreva em norueguês um resumo acadêmico de 5 frases sobre uma pesquisa imaginária, com “Formålet med denne studien er å…”, uma passiva com -s e uma conclusão com ressalva.',
      },
      {
        id: 'nb-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du jobber i kommunen og skal skrive om et brev. Originalen lyder: “Ved manglende innbetaling innen fristens utløp vil saken bli oversendt til inkasso.” Hvordan skriver du det på klarspråk, og hvorfor?',
          botTranslation: 'Você trabalha no município e precisa reescrever uma carta. O original diz: “Em caso de ausência de pagamento até o término do prazo, o caso será encaminhado para cobrança.” Como você escreve isso em linguagem clara, e por quê?',
          expected: [
            'Jeg ville skrive: “Hvis du ikke betaler innen fristen, sender vi saken til inkasso.” Det er bedre fordi setningen er kortere, bruker verb i stedet for substantiver og snakker direkte til leseren.',
            'hvis du ikke betaler',
            'verb',
            'direkte',
          ],
          hint: 'Transforme os substantivos em verbos, use “du” e “vi” e explique as mudanças com “fordi”.',
        },
        communityPrompt: 'Escreva em norueguês três versões da mesma informação (por exemplo, o fechamento de uma estrada ou uma regra nova): uma em byråkratspråk, uma em klarspråk e uma como notícia de jornal. Depois explique em português, em 2 frases, as diferenças de estilo.',
      },
    ],
  },

  // ───────────────────────── nb-u15 · C2 ─────────────────────────
  {
    id: 'nb-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Ibsen, Bjørnson, Undset e o norueguês antigo',
    emoji: '📚',
    card: {
      id: 'nb-c15',
      title: 'O norueguês da literatura',
      emoji: '🪶',
      history:
        'Henrik Ibsen (1828–1906), nascido em Skien, é um dos dramaturgos mais encenados do mundo: “Et dukkehjem” (1879), em que Nora deixa o marido e os filhos no fim, causou escândalo em toda a Europa, e “Peer Gynt” (1867) ganhou música de Edvard Grieg. Bjørnstjerne Bjørnson (1832–1910) escreveu contos camponeses como “Synnøve Solbakken” (1857) e a letra do hino nacional, “Ja, vi elsker dette landet”, e em 1903 foi o primeiro norueguês a receber o Prêmio Nobel de Literatura. Sigrid Undset (1882–1949) recebeu o Nobel em 1928; sua trilogia “Kristin Lavransdatter” (1920–1922) se passa na Noruega do século XIV, e ela viveu em Bjerkebæk, em Lillehammer. Ibsen e Bjørnson escreviam num dinamarquês-norueguês: a reforma de 1907 trocou as consoantes brandas pelas duras (bog → bok, gade → gate), e em 1917 o “aa” deu lugar ao “å”.',
      culture_tip:
        'Os provérbios (ordtak) aparecem na conversa do dia a dia, muitas vezes com um sorriso: “borte bra, men hjemme best” na volta de uma viagem, “bedre sent enn aldri” para quem chega atrasado. Nomes de pessoas e lugares ainda guardam a grafia antiga, como o próprio “Aasen”. E o hino de Bjørnson é cantado em todo 17 de maio, o dia da Constituição.',
      grammar_why:
        'Até o começo do século XX, o norueguês escrito era quase dinamarquês: consoantes brandas depois de vogal longa (bog, gade, kage, løbe), “aa” no lugar de “å”, “efter” por “etter” e grafias como “mand” e “stærk”. Ibsen escrevia assim, e as edições modernas costumam atualizar a grafia. Nos diálogos antigos, o tratamento de cortesia é “De” (objeto “Dem”, possessivo “Deres”), que hoje soa solene ou distante. Os provérbios guardam uma sintaxe enxuta e imagens do campo: “Liten tue kan velte stort lass” dispensa os artigos, e “Borte bra, men hjemme best” dispensa o verbo. Para ler os clássicos, vale reconhecer essas formas sem usá-las na escrita de hoje.',
      grammar_examples: [
        ['Peer, du lyver!', 'Peer, você está mentindo! (a primeira fala de “Peer Gynt”, dita por Åse, a mãe)'],
        ['Tar De livsløgnen fra et gjennomsnittsmenneske, så tar De lykken fra ham med det samme.', 'Se o senhor tira a mentira vital de uma pessoa comum, tira dela a felicidade ao mesmo tempo. (Ibsen, “Vildanden”, grafia atualizada)'],
        ['Ja, vi elsker dette landet, som det stiger frem.', 'Sim, nós amamos esta terra, tal como ela se ergue. (Bjørnson, o hino nacional)'],
        ['Liten tue kan velte stort lass.', 'Um pequeno torrão pode virar uma grande carga. (coisas pequenas podem ter grandes efeitos)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nb-u15-l1',
        title: 'Ibsen no palco',
        kind: 'licao',
        words: ['teater', 'skuespiller', 'forestilling', 'lyve', 'hemmelighet', 'sannhet'],
        cloze: [
          {
            sentence: '“Peer, du ___!” sier Åse i den første scenen.',
            answer: 'lyver',
            options: ['lyver', 'løy', 'lyve'],
            translation: '“Peer, você está mentindo!”, diz Åse na primeira cena.',
          },
          {
            sentence: 'Nora har en ___ som hun skjuler for mannen sin.',
            answer: 'hemmelighet',
            options: ['hemmelighet', 'hemmeligheten', 'hemmelig'],
            translation: 'Nora tem um segredo que ela esconde do marido.',
          },
          {
            sentence: 'Ibsen skrev “efter”, men i dag skriver vi “___”.',
            answer: 'etter',
            options: ['etter', 'efter', 'eter'],
            translation: 'Ibsen escrevia “efter”, mas hoje escrevemos “etter” (depois).',
          },
        ],
        voice: {
          bot: 'Vi har akkurat sett “Et dukkehjem” på Nationaltheatret. Hva syntes du om slutten, da Nora går?',
          botTranslation: 'Acabamos de ver “Casa de Bonecas” no Teatro Nacional. O que você achou do final, quando a Nora vai embora?',
          expected: [
            'Jeg syntes slutten var sterk. Nora forlater hjemmet fordi hun vil finne sannheten om seg selv, og det må ha vært sjokkerende for publikum i 1879.',
            'sannheten',
            'forlater',
            'må ha vært',
          ],
          hint: 'Dê a sua opinião no passado (syntes), explique a decisão da Nora com “fordi” e pense no público da época com “det må ha vært”.',
        },
        communityPrompt: 'Escreva em norueguês 5 frases sobre uma peça ou um filme que você viu, usando o pretérito, uma subordinada com “fordi” e um modal no passado (“det må ha vært…”).',
      },
      {
        id: 'nb-u15-l2',
        title: 'Bjørnson, Undset e o Nobel',
        kind: 'licao',
        words: ['forfatter', 'nobelpris', 'nasjonaldag', 'kjærlighet', 'flagg', 'slekt'],
        cloze: [
          {
            sentence: 'Bjørnson var den første nordmannen som ___ nobelprisen i litteratur.',
            answer: 'fikk',
            options: ['fikk', 'får', 'fått'],
            translation: 'Bjørnson foi o primeiro norueguês a receber o Prêmio Nobel de Literatura.',
          },
          {
            sentence: 'Bjørnsons nasjonalsang synges over hele landet på ___.',
            answer: 'nasjonaldagen',
            options: ['nasjonaldagen', 'nasjonaldag', 'nasjonaldagens'],
            translation: 'O hino nacional de Bjørnson é cantado no país inteiro no dia nacional.',
          },
          {
            sentence: '“Kristin Lavransdatter” handler om ___, tro og skyld i middelalderen.',
            answer: 'kjærlighet',
            options: ['kjærlighet', 'kjærlig', 'elske'],
            translation: '“Kristin Lavransdatter” fala de amor, fé e culpa na Idade Média.',
          },
        ],
        voice: {
          bot: 'Hvem av de norske klassikerne ville du lese først, og hvorfor?',
          botTranslation: 'Qual dos clássicos noruegueses você leria primeiro, e por quê?',
          expected: [
            'Jeg ville lese Sigrid Undset først, fordi “Kristin Lavransdatter” handler om kjærlighet og slekt i middelalderen. Dessuten fikk hun nobelprisen i 1928.',
            'Sigrid Undset',
            'fordi',
            'nobelprisen',
          ],
          hint: 'Escolha um autor, justifique com “fordi” e acrescente um fato com “dessuten” (e a inversão).',
        },
        communityPrompt: 'Escreva em norueguês 5 frases comparando Bjørnson e Undset: época, temas e prêmios. Use pelo menos um comparativo e uma oração relativa com “som”.',
      },
      {
        id: 'nb-u15-l3',
        title: 'Desafio de voz: provérbios e a grafia antiga',
        kind: 'voz',
        words: ['borte bra, men hjemme best', 'bedre sent enn aldri', 'ingen røyk uten ild', 'det finnes ikke dårlig vær, bare dårlige klær', 'gammeldags', 'stave'],
        cloze: [
          {
            sentence: 'Før 1907 skrev man “bog”; i dag skriver vi “___”.',
            answer: 'bok',
            options: ['bok', 'bog', 'bokk'],
            translation: 'Antes de 1907 se escrevia “bog”; hoje escrevemos “bok” (livro).',
          },
          {
            sentence: 'Du kom for sent, men bedre sent enn ___!',
            answer: 'aldri',
            options: ['aldri', 'alltid', 'ofte'],
            translation: 'Você chegou atrasado, mas antes tarde do que nunca!',
          },
          {
            sentence: 'Det finnes ikke dårlig vær, bare dårlige ___.',
            answer: 'klær',
            options: ['klær', 'klærne', 'klesplagg'],
            translation: 'Não existe tempo ruim, só roupa inadequada.',
          },
        ],
        voice: {
          bot: 'Du kom en time for sent til middagen, men du tok med kake! Har du et norsk ordtak for det?',
          botTranslation: 'Você chegou uma hora atrasado para o jantar, mas trouxe bolo! Tem algum provérbio norueguês para isso?',
          expected: [
            'Bedre sent enn aldri! Og nå skjønner jeg hvorfor folk sier “borte bra, men hjemme best”: her er det så koselig.',
            'bedre sent enn aldri',
            'borte bra',
            'koselig',
          ],
          hint: 'Use um provérbio para se desculpar com bom humor e outro para elogiar a casa.',
        },
        communityPrompt: 'Escolha dois provérbios noruegueses e escreva em norueguês uma situação de 4 frases em que cada um se encaixe. Depois explique em português o sentido literal de cada um.',
      },
      {
        id: 'nb-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du skal holde en kort tale om norsk litteratur på 17. mai. Hvordan begynner du?',
          botTranslation: 'Você vai fazer um discurso curto sobre literatura norueguesa no 17 de maio. Como você começa?',
          expected: [
            'Kjære alle sammen! I dag feirer vi Grunnloven, og da passer det å minnes Bjørnson, som skrev “Ja, vi elsker dette landet”. Ibsen lærte oss å stille spørsmål, og Sigrid Undset førte oss tilbake til middelalderen. Litteraturen har formet språket vårt, helt fra “bog” til “bok”.',
            'Bjørnson',
            'Ibsen',
            'Sigrid Undset',
          ],
          hint: 'Faça um discurso em registro elevado: saudação, a data, os três autores e uma frase sobre a história da língua.',
        },
        communityPrompt: 'Escreva em norueguês um pequeno ensaio (8 frases) sobre um dos três autores desta unidade: vida, obra principal, contexto histórico e por que ainda é lido. Inclua uma citação curta e comente uma grafia antiga.',
      },
    ],
  },
];
