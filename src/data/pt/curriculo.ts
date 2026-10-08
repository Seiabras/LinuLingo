import type { UnitSeed } from '../types';

/** Trilha do português de Portugal: uma unidade por subnível (A1.1 → C2). */
export const UNITS_PT: UnitSeed[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'pt-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Olá! Os sons de Portugal',
    emoji: '👋',
    card: {
      id: 'pt-c1',
      title: 'A mesma língua, outra música',
      emoji: '🗣️',
      history:
        'O português nasceu do latim falado no noroeste da Península Ibérica, onde hoje ficam a Galiza e o norte de Portugal: na Idade Média, galego e português eram uma língua só, o galego-português. Portugal virou reino independente no século XII, e Lisboa passou a ser a capital no século XIII. A língua chegou ao Brasil em 1500 e, desde então, cada lado do Atlântico seguiu o seu caminho na pronúncia: em Portugal, sobretudo a partir do século XVIII, as vogais átonas foram encolhendo até quase sumir, enquanto o Brasil manteve vogais mais abertas e claras. É por isso que o brasileiro às vezes tem a impressão de que o português de Lisboa “só tem consoantes”: as palavras são as mesmas, o ritmo é que mudou.',
      culture_tip:
        'Em Portugal, “olá” é o cumprimento de todo dia (o “oi” quase não se usa) e “adeus” é a despedida normal, sem nada de definitivo. “Bom dia” vale até a hora do almoço; depois é “boa tarde” e, quando escurece, “boa noite”, tanto para chegar como para sair. Com desconhecidos, idosos, numa loja ou num balcão, use “o senhor” e “a senhora”, ou só o verbo na 3ª pessoa (“Como está?”). Entre amigos e família o normal é “tu”. E cuidado com o “você”: existe, mas dito a alguém na cara pode soar distante ou até brusco.',
      grammar_why:
        'Em Portugal o “tu” está vivo e usa o verbo na 2ª pessoa, sem mistura: “tu és”, “tu estás”, “como estás?”, “como te chamas?”. No Brasil, mesmo onde se diz “tu”, é comum o verbo na 3ª pessoa (“tu é”, “tu vai”), o que em Portugal soa errado. No formal, o português europeu prefere evitar o pronome: diz “o senhor”, “a senhora”, o nome da pessoa (“A Ana quer um café?”) ou só o verbo na 3ª pessoa (“Quer um café?”). No plural, “vocês” serve para todo mundo. Nos números, a grafia e o som mudam: “catorze”, “dezasseis”, “dezassete” e “dezanove”, com “a”; e o 6 é sempre “seis”, nunca “meia”, nem ao telefone.',
      grammar_examples: [
        ['Olá, Rita! Como estás?', 'Oi, Rita! Tudo bem? / Como você está?'],
        ['Bom dia, senhor Almeida. Como está?', 'Bom dia, seu Almeida. Como o senhor vai?'],
        ['A Ana é de Coimbra?', 'Você é de Coimbra, Ana? (formal, sem pronome: o nome faz as vezes de “você”)'],
        ['O meu irmão tem dezasseis anos e a minha irmã tem dezanove.', 'Meu irmão tem dezesseis anos e minha irmã tem dezenove.'],
      ],
      character_guide: [
        ['e átono (no meio da palavra)', 'som muito curto e fechado, [ɨ], quase um “i” engolido; muitas vezes some', 'telefone (soa “tlfón”), pequeno (“pkénu”), menino (“mnínu”)'],
        ['e final', 'quase mudo: nunca vira “i” como no Brasil', 'noite (“nôit”), sete (“sét”), leite (“lâit”)'],
        ['o átono', 'vira “u”, não só no fim, mas também antes da tônica', 'bonito (“bunítu”), morar (“murár”), Portugal (“purtugál”)'],
        ['a átono', 'fechado, [ɐ], como o “a” de “cama” dito sem nasalizar', 'casa (o último “a” bem fechado), falar (“fâlár”)'],
        ['s, z no fim da sílaba', 'chiado: “x” de “xícara” antes de consoante surda e no fim; “j” de “já” antes de consoante sonora; “z” antes de vogal', 'três (“trêx”), festa (“féxta”), mesmo (“mêjmu”), os amigos (“uz amígux”)'],
        ['r inicial, rr, r depois de n, l, s', 'forte, raspado na garganta em Lisboa, como o “r” carioca de “rua”; no Norte e no campo também vibrado com a ponta da língua', 'rua, carro, Rita, honra'],
        ['r entre vogais e no fim da palavra', 'sempre o “r” fraco, batido com a ponta da língua, como em “caro”; o “r” final é pronunciado, nunca cai', 'caro, falar (“falár”), mar'],
        ['l no fim da sílaba', '“l” escuro, com o fundo da língua levantado: nunca vira “u”', 'Brasil (não “Brasiu”), Portugal, sol, mal × mau'],
        ['ei', 'no padrão de Lisboa soa “âi”, [ɐj]', 'leite (“lâit”), primeiro (“primâiru”), dinheiro'],
        ['-em, -ém, -ens, -ãe', 'nasal “âin”, [ɐ̃j̃], mais aberto e mais anasalado que no Brasil', 'bem (“bâin”), também, tem, mãe'],
        ['e tônico antes de lh, nh, ch, j, x', 'em Lisboa soa “â”, [ɐ]', 'espelho (“espâlhu”), venho, fecho, vejo'],
        ['lh', 'o “lh” palatal cheio, com a língua colada no céu da boca: nunca vira “li” nem “i”', 'filho, trabalho, mulher'],
        ['nh', '“nh” pleno, com a língua no céu da boca: nunca vira um “i” nasal', 'vinho, amanhã, senhor'],
        ['t, d + e, i', 'sempre “t” e “d” secos, nunca “tchi” e “dji”', 'tia, dia, noite, cidade'],
        ['d, b, g entre vogais', 'macios, quase sem encostar a língua ou os lábios; o “d” lembra o “th” do inglês “this”', 'cidade, obrigado, sábado'],
        ['de, que, me, te, se', 'palavrinhas átonas quase reduzidas à consoante', 'de (“d”), que (“k”), chamo-me (“châmum”)'],
      ],
    },
    lessons: [
      {
        id: 'pt-u1-l1',
        title: 'Olá, bom dia!',
        kind: 'licao',
        words: ['olá', 'bom dia', 'adeus', 'até já', 'se faz favor', 'obrigada'],
        cloze: [
          { sentence: 'Olá, Rita! Como ___ tu? — Bem, obrigada!', answer: 'estás', options: ['estás', 'está', 'estão'], translation: 'Oi, Rita! Como você está? — Bem, obrigada!' },
          { sentence: 'Bom dia, senhor Almeida! Como ___? — Bem, obrigado.', answer: 'está', options: ['está', 'estás', 'estão'], translation: 'Bom dia, seu Almeida! Como o senhor vai? — Bem, obrigado.' },
          { sentence: 'Tenho de ir. ___, até amanhã!', answer: 'Adeus', options: ['Adeus', 'Olá', 'Oi'], translation: 'Tenho que ir. Tchau, até amanhã!' },
        ],
        voice: {
          bot: 'Olá! Bom dia! Como estás?',
          botTranslation: 'Oi! Bom dia! Tudo bem com você?',
          expected: ['Bom dia! Estou bem, obrigado. E tu?', 'bem', 'obrigado', 'obrigada', 'e tu'],
          hint: 'Responda com “tu”, como entre amigos: “Estou bem, obrigado (ou obrigada). E tu?”. O “o” átono vira “u” e o “e” final quase some: “obrigado” soa “ubrigádu” e “bom dia”, “bõ día”.',
        },
        communityPrompt: 'Escreva dois cumprimentos à moda de Portugal: um para uma amiga (“Olá! Como estás?”) e outro para um vizinho idoso, com “Bom dia” ou “Boa tarde” e “Como está?”, sem “você”. Termine os dois com uma despedida (“adeus”, “até já” ou “até amanhã”).',
      },
      {
        id: 'pt-u1-l2',
        title: 'Tu, o senhor ou você?',
        kind: 'licao',
        words: ['tu', 'o senhor', 'a senhora', 'vocês', 'chamo-me', 'como te chamas?'],
        cloze: [
          { sentence: 'Olá! Eu ___ Ana. E tu, como te chamas?', answer: 'chamo-me', options: ['chamo-me', 'me chamo', 'chama-me'], translation: 'Oi! Eu me chamo Ana. E você, como se chama?' },
          { sentence: 'Dona Graça, a senhora ___ de Évora?', answer: 'é', options: ['é', 'és', 'são'], translation: 'Dona Graça, a senhora é de Évora?' },
          { sentence: 'Pedro e Marta, vocês ___ brasileiros?', answer: 'são', options: ['são', 'sois', 'é'], translation: 'Pedro e Marta, vocês são brasileiros?' },
        ],
        voice: {
          bot: 'Olá! Eu sou o Tiago. Como te chamas? És do Brasil?',
          botTranslation: 'Oi! Eu sou o Tiago. Como você se chama? Você é do Brasil?',
          expected: ['Olá, Tiago! Chamo-me Carla e sou do Brasil, de Belo Horizonte.', 'chamo-me', 'sou do brasil', 'sou brasileiro', 'sou brasileira'],
          hint: 'Em Portugal o pronome vem depois do verbo: “Chamo-me…”, nunca começando por “me”. Para responder “sim”, repita o verbo: “Sou, sim, sou do Brasil”.',
        },
        communityPrompt: 'Apresente-se à portuguesa (“Chamo-me… Sou de…”) e escreva a mesma pergunta de três jeitos: para um amigo (com “tu”), para uma senhora idosa (com “a senhora”) e para um grupo (com “vocês”).',
      },
      {
        id: 'pt-u1-l3',
        title: 'Desafio de voz: o meu número é…',
        kind: 'voz',
        words: ['seis', 'catorze', 'dezasseis', 'dezassete', 'dezanove', 'zero'],
        cloze: [
          { sentence: 'Dez, onze, doze, treze, ___.', answer: 'catorze', options: ['catorze', 'quatorze', 'quinze'], translation: 'Dez, onze, doze, treze, quatorze.' },
          { sentence: 'O meu número é nove, dois, ___, zero… (o 6)', answer: 'seis', options: ['seis', 'meia', 'sete'], translation: 'Meu número é nove, dois, seis, zero… (o 6)' },
          { sentence: 'O número da porta é o ___ (16).', answer: 'dezasseis', options: ['dezasseis', 'dezesseis', 'dezassete'], translation: 'O número da casa é o dezesseis (16).' },
        ],
        voice: {
          bot: 'Boa tarde! Diga-me o seu número de telemóvel, se faz favor.',
          botTranslation: 'Boa tarde! Me diga o seu número de celular, por favor.',
          expected: ['É o nove, um, seis, catorze, dezasseis, dezanove.', 'nove', 'seis', 'catorze', 'dezanove'],
          hint: 'O 6 é sempre “seis”, nunca “meia”. Diga “catorze” (e não “quatorze”), “dezasseis” e “dezanove”, com “a”. O “s” final chia: “seis” soa “sâix”.',
        },
        communityPrompt: 'Escreva por extenso, à moda de Portugal, um número de telemóvel inventado com 6, 14, 16, 17 e 19, e a idade de três pessoas da sua família (“O meu primo tem dezassete anos”).',
      },
      {
        id: 'pt-u1-l4',
        title: 'Com licença, não tem de quê',
        kind: 'licao',
        words: ['com licença', 'desculpe', 'não tem de quê', 'sim', 'não', 'até breve'],
        cloze: [
          { sentence: '___, posso passar?', answer: 'Com licença', options: ['Com licença', 'Desculpe', 'Até breve'], translation: 'Com licença, posso passar?' },
          { sentence: 'Obrigada pela ajuda. — ___!', answer: 'Não tem de quê', options: ['Não tem de quê', 'Com licença', 'Desculpe'], translation: 'Obrigada pela ajuda. — Não há de quê!' },
          { sentence: 'Queres vir à festa? — ___, claro.', answer: 'Sim', options: ['Sim', 'Não', 'Desculpe'], translation: 'Queres vir à festa? — Sim, claro.' },
        ],
        voice: {
          bot: 'Desculpe, onde fica a estação?',
          botTranslation: 'Desculpe, onde fica a estação?',
          expected: ['Não sei, desculpe.', 'não sei', 'é já ali', 'fica ali'],
          hint: 'Responda dizendo que não sabe (“Não sei, desculpe”) ou indicando o caminho (“É já ali”).',
        },
        communityPrompt: 'Escreva um mini diálogo: pede passagem com “Com licença”, alguém agradece algo e você responde “Não tem de quê”, e despeçam-se com “Até breve”.',
      },
      {
        id: 'pt-u1-l5',
        title: 'Números de um a dez',
        kind: 'licao',
        words: ['um', 'dois', 'três', 'quatro', 'cinco', 'dez'],
        cloze: [
          { sentence: 'Tenho ___ gatos.', answer: 'dois', options: ['dois', 'três', 'quatro'], translation: 'Tenho dois gatos.' },
          { sentence: 'Somos ___ à mesa.', answer: 'quatro', options: ['quatro', 'cinco', 'três'], translation: 'Somos quatro à mesa.' },
          { sentence: 'São ___ euros, se faz favor.', answer: 'dez', options: ['dez', 'cinco', 'um'], translation: 'São dez euros, se faz favor.' },
        ],
        voice: {
          bot: 'Quantos gatos tens?',
          botTranslation: 'Quantos gatos tens?',
          expected: ['Tenho dois gatos.', 'tenho três gatos', 'tenho um gato', 'não tenho gatos'],
          hint: 'Responda com “Tenho” + um número + “gatos” (ou “Não tenho gatos” se não tiver nenhum).',
        },
        communityPrompt: 'Conte, em português europeu, quantos animais de estimação ou irmãos tem, usando um número de 1 a 10 (“Tenho um/dois/três… gatos”).',
      },
      {
        id: 'pt-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Boa noite! O senhor é brasileiro? Como se chama? E qual é o seu número de telemóvel?',
          botTranslation: 'Boa noite! O senhor é brasileiro? Como o senhor se chama? E qual é o seu número de celular?',
          expected: [
            'Boa noite! Sou, sim. Chamo-me Pedro e sou do Brasil. O meu número é o nove, três, seis, catorze, dezasseis, dezanove.',
            'boa noite',
            'chamo-me',
            'sou brasileiro',
            'sou do brasil',
            'seis',
          ],
          hint: 'Cumprimente de acordo com a hora (“Boa noite”), confirme repetindo o verbo (“Sou, sim”), diga o nome com “Chamo-me” e dite o número sem “meia” e com “catorze”, “dezasseis” e “dezanove”.',
        },
        communityPrompt: 'Escreva um diálogo curto num balcão de Lisboa: você cumprimenta de acordo com a hora, trata a funcionária por “a senhora”, diz como se chama (“Chamo-me…”), dita o seu número de telemóvel com pelo menos três números entre 11 e 19 e se despede com “adeus” ou “até já”.',
      },
    ],
  },

  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'pt-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Um dia em Lisboa',
    emoji: '🚋',
    card: {
      id: 'pt-c2',
      title: 'Pequeno-almoço, autocarro e telemóvel',
      emoji: '🥐',
      history:
        'Em Lisboa, os elétricos circulam desde 1901, quando substituíram os “americanos”, carros puxados por cavalos sobre trilhos; a linha 28 ainda sobe e desce as colinas da Graça, de Alfama e da Estrela. O Metropolitano de Lisboa abriu em 1959, e o Metro do Porto, que corre sobretudo à superfície, em 2002. As palavras mudaram junto com as coisas: “comboio” vem do francês “convoi” (comboio, fila de veículos), “autocarro” junta “auto” e “carro”, e “telemóvel” é o telefone “móvel”. O Brasil ficou com “trem”, do francês “train”, e com “ônibus”, do francês “omnibus”, palavra latina que quer dizer “para todos”.',
      culture_tip:
        'Em Portugal, “um café” é um expresso curto; em Lisboa também se chama “bica”. Quem quer café com leite pede um “galão” (em copo alto) ou uma “meia de leite” (em xícara). O pequeno-almoço costuma ser leve e muitas vezes é tomado de pé, ao balcão da pastelaria: uma bica e uma torrada ou um bolo. E se precisar do banheiro, pergunte pela “casa de banho”: em Portugal, “banheiro” é o salva-vidas da praia.',
      grammar_why:
        'Para falar do que está acontecendo agora, Portugal usa “estar a + infinitivo”: “Estou a trabalhar”, “O que estás a fazer?”. O Brasil usa o gerúndio: “estou trabalhando”. As duas formas são corretas, cada uma na sua norma; no Alentejo e no Algarve ainda se ouve o gerúndio, mas no padrão de Lisboa ele soa brasileiro. O presente simples serve para hábitos e rotina, como no Brasil: “Todos os dias apanho o autocarro”. Com “tu”, o verbo tem a sua forma própria: “tu tomas”, “tu queres”, “tu vais”. E há verbos que mudam de lugar: em Portugal “apanha-se” o autocarro (no Brasil, “pega-se” o ônibus) e “toma-se o pequeno-almoço”.',
      grammar_examples: [
        ['Estou a tomar o pequeno-almoço.', 'Estou tomando café da manhã.'],
        ['O que estás a fazer? — Estou a estudar.', 'O que você está fazendo? — Estou estudando.'],
        ['Todos os dias apanho o autocarro na paragem da esquina.', 'Todo dia eu pego o ônibus no ponto da esquina.'],
        ['Tu vais de comboio ou de metro?', 'Você vai de trem ou de metrô?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u2-l1',
        title: 'O pequeno-almoço',
        kind: 'licao',
        words: ['pequeno-almoço', 'bica', 'galão', 'torrada', 'sumo', 'pastelaria'],
        cloze: [
          { sentence: 'Eu ___ o pequeno-almoço todos os dias na pastelaria.', answer: 'tomo', options: ['tomo', 'tomas', 'tomam'], translation: 'Eu tomo café da manhã todo dia na padaria.' },
          { sentence: 'Tu ___ uma bica ou um galão?', answer: 'queres', options: ['queres', 'quer', 'querem'], translation: 'Você quer um cafezinho ou um café com leite?' },
          { sentence: 'O Miguel está ___ beber um sumo de laranja.', answer: 'a', options: ['a', 'em', 'de'], translation: 'O Miguel está tomando um suco de laranja.' },
        ],
        voice: {
          bot: 'Bom dia! O que vai ser?',
          botTranslation: 'Bom dia! O que vai querer?',
          expected: ['Bom dia! Uma bica e uma torrada, se faz favor.', 'bica', 'torrada', 'galão', 'se faz favor'],
          hint: 'Peça ao balcão, curto e educado: “Uma bica e uma torrada, se faz favor”. Em Portugal, “se faz favor” é o jeito mais comum de dizer “por favor”.',
        },
        communityPrompt: 'Descreva o seu pequeno-almoço de hoje com palavras de Portugal (bica, galão, torrada, sumo) e diga o que está fazendo agora com “estou a + infinitivo”.',
      },
      {
        id: 'pt-u2-l2',
        title: 'De autocarro ou de comboio?',
        kind: 'licao',
        words: ['autocarro', 'comboio', 'elétrico', 'metro', 'paragem', 'bilhete'],
        cloze: [
          { sentence: 'Estou ___ esperar o autocarro há vinte minutos.', answer: 'a', options: ['a', 'de', 'em'], translation: 'Estou esperando o ônibus há vinte minutos.' },
          { sentence: 'Nós ___ de comboio para o Porto no sábado.', answer: 'vamos', options: ['vamos', 'vão', 'vou'], translation: 'Nós vamos de trem para o Porto no sábado.' },
          { sentence: 'O elétrico 28 ___ por Alfama e pela Graça.', answer: 'passa', options: ['passa', 'passam', 'passas'], translation: 'O bonde 28 passa por Alfama e pela Graça.' },
        ],
        voice: {
          bot: 'Olá! Onde estás? Estás à espera do autocarro?',
          botTranslation: 'Oi! Onde você está? Está esperando o ônibus?',
          expected: ['Estou na paragem, estou a esperar o autocarro. Mas hoje vou de metro.', 'estou a esperar', 'estou à espera', 'autocarro', 'metro'],
          hint: 'Em Portugal não se diz “estou esperando”: diga “estou a esperar” ou “estou à espera”. O ponto de ônibus é a “paragem”.',
        },
        communityPrompt: 'Conte como você vai para o trabalho ou para a escola usando as palavras de Portugal (autocarro, comboio, metro, paragem, bilhete) e uma frase com “estou a + infinitivo”.',
      },
      {
        id: 'pt-u2-l3',
        title: 'Desafio de voz: o que estás a fazer?',
        kind: 'voz',
        words: ['telemóvel', 'casa de banho', 'frigorífico', 'trabalhar', 'estudar', 'duche'],
        cloze: [
          { sentence: 'Agora não posso atender: estou a ___ duche.', answer: 'tomar', options: ['tomar', 'tomando', 'tomo'], translation: 'Agora não posso atender: estou tomando banho.' },
          { sentence: 'Os meus pais estão a ___ no Porto este mês.', answer: 'trabalhar', options: ['trabalhar', 'trabalhando', 'trabalham'], translation: 'Meus pais estão trabalhando no Porto este mês.' },
          { sentence: 'Tu ___ em Coimbra ou em Braga?', answer: 'estudas', options: ['estudas', 'estuda', 'estudam'], translation: 'Você estuda em Coimbra ou em Braga?' },
        ],
        voice: {
          bot: 'Estou? Olá! Então, o que estás a fazer agora?',
          botTranslation: 'Alô? Oi! E aí, o que você está fazendo agora?',
          expected: ['Olá! Estou a estudar em casa e depois vou tomar duche.', 'estou a estudar', 'estou a trabalhar', 'estou a', 'agora'],
          hint: 'Responda com “estou a + infinitivo”: “Estou a estudar”, “Estou a trabalhar”. Em Portugal, ao telefone se atende com “Estou?” ou “Está?”, e o banho de chuveiro é o “duche”.',
        },
        communityPrompt: 'Escreva uma mensagem de telemóvel a um amigo contando três coisas que as pessoas da sua casa estão a fazer agora, com “estar a + infinitivo” (sem gerúndio!).',
      },
      {
        id: 'pt-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bom dia! Conta-me: como é o teu dia? E o que estás a fazer agora?',
          botTranslation: 'Bom dia! Me conta: como é o seu dia? E o que você está fazendo agora?',
          expected: [
            'De manhã tomo o pequeno-almoço na pastelaria, apanho o autocarro e vou trabalhar. Agora estou a beber uma bica.',
            'tomo o pequeno-almoço',
            'apanho o autocarro',
            'estou a',
            'comboio',
            'metro',
          ],
          hint: 'Use o presente para a rotina (“tomo”, “apanho”, “vou”) e “estou a + infinitivo” para o que está acontecendo agora. Nada de “café da manhã”, “ônibus” nem gerúndio!',
        },
        communityPrompt: 'Descreva um dia seu como se você morasse em Lisboa: o pequeno-almoço, o transporte (autocarro, comboio, metro ou elétrico), o que você faz à tarde e o que está a fazer neste momento, com pelo menos duas frases com “estar a + infinitivo”.',
      },
    ],
  },

  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'pt-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Diz-me uma coisa: onde fica o pronome',
    emoji: '🧲',
    card: {
      id: 'pt-c3',
      title: 'Dá-me ou me dá?',
      emoji: '🔀',
      history:
        'Em Portugal, a ênclise (o pronome depois do verbo) é natural até na fala das crianças: “Dá-me”, “Diz-me”, “Chamo-me”. No Brasil, a fala espontânea põe o pronome antes do verbo, mesmo no começo da frase: “Me dá”, “Me diz”. O poeta Oswald de Andrade brincou com essa diferença no poema “Pronominais”, do livro “Pau Brasil” (1925): começa com “Dê-me um cigarro / Diz a gramática” e termina com o brasileiro de todo dia dizendo “Me dá um cigarro”. Na norma culta escrita dos dois países, porém, a regra é a mesma: a frase não começa por pronome átono.',
      culture_tip:
        'Nada denuncia tanto um brasileiro em Portugal quanto começar a frase pelo pronome: “Me dá um café” soa estranho aos ouvidos portugueses, que esperam “Dá-me um café” ou, ainda mais educado, “Queria um café”. Por outro lado, os portugueses dizem “Não me digas!” (com o pronome antes, por causa do “não”) para mostrar surpresa, como o nosso “Não diga!”. E “perceber” é o verbo normal para “entender”: “Percebes?”, “Não percebi”.',
      grammar_why:
        'Em Portugal, na frase afirmativa simples, o pronome átono vem depois do verbo, ligado por hífen: “Vejo-te amanhã”, “Ajudo-o já”. Certas palavras “puxam” o pronome para antes do verbo (próclise obrigatória): a negação (não, nunca), alguns advérbios (já, também, ainda, só), as palavras interrogativas (quem, onde, como, porque), o relativo “que” e conjunções como “quando” e “se”: “Não te ouço”, “Já te disse”, “Quem me deu isto?”. O objeto direto é “o, a, os, as” e o indireto é “lhe, lhes”: “Vi-a”, “Disse-lhe”. Depois de verbo terminado em -r, -s ou -z, “o” vira “lo” e a consoante cai (“comprá-lo”, “fi-lo”); depois de som nasal, vira “no” (“dão-no”). E os pronomes se juntam: me + o = “mo”, te + o = “to”, lhe + o = “lho” (“Dás-mo?”). No Brasil falado, “lhe” às vezes vira objeto direto e “o” é trocado por “ele” (“vi ele”); a norma culta dos dois países pede “vi-o” e “vi-a”.',
      grammar_examples: [
        ['Diz-me uma coisa: onde fica a estação?', 'Me diz uma coisa: onde fica a estação?'],
        ['Não te preocupes, já te ajudo.', 'Não se preocupe, já te ajudo.'],
        ['Viste a Marta? — Vi-a ontem e disse-lhe tudo.', 'Você viu a Marta? — Vi ela ontem e contei tudo pra ela. (culto: vi-a / disse-lhe)'],
        ['Emprestas-me o livro? — Empresto-to amanhã.', 'Você me empresta o livro? — Te empresto amanhã.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u3-l1',
        title: 'Diz-me, dá-me, senta-te',
        kind: 'licao',
        words: ['diz-me', 'dá-me', 'deixa-me ver', 'sentar-se', 'chamar-se', 'mostrar'],
        cloze: [
          { sentence: 'Olha, diz-___ uma coisa: onde fica a estação?', answer: 'me', options: ['me', 'lhe', 'te'], translation: 'Olha, me diz uma coisa: onde fica a estação?' },
          { sentence: 'Sentem-___, por favor: o jantar está pronto!', answer: 'se', options: ['se', 'nos', 'me'], translation: 'Sentem-se, por favor: o jantar está pronto!' },
          { sentence: 'A tua irmã ___ Leonor, não é?', answer: 'chama-se', options: ['chama-se', 'se chama', 'chamas-te'], translation: 'Sua irmã se chama Leonor, não é?' },
        ],
        voice: {
          bot: 'Olá! Senta-te aqui. Diz-me: como te chamas e de onde és?',
          botTranslation: 'Oi! Senta aqui. Me diz: como você se chama e de onde você é?',
          expected: ['Chamo-me Beatriz e sou de Salvador. Muito gosto!', 'chamo-me', 'sou de', 'muito gosto', 'muito prazer'],
          hint: 'Frase afirmativa começa pelo verbo, com o pronome depois: “Chamo-me…”. Repare na pergunta do bot: “como te chamas” tem o pronome antes, porque “como” é palavra interrogativa.',
        },
        communityPrompt: 'Escreva cinco pedidos curtos a um amigo português usando a ênclise: “Diz-me…”, “Dá-me…”, “Mostra-me…”, “Deixa-me ver…” e “Senta-te…”.',
      },
      {
        id: 'pt-u3-l2',
        title: 'Não me digas!',
        kind: 'licao',
        words: ['não me digas', 'não te preocupes', 'perceber', 'conhecer', 'ajudar', 'esperar'],
        cloze: [
          { sentence: 'Desculpa, há muito barulho: não ___ bem.', answer: 'te ouço', options: ['te ouço', 'ouço-te', 'ouço te'], translation: 'Desculpa, tem muito barulho: não estou te ouvindo direito.' },
          { sentence: 'Já ___ que o comboio parte às oito!', answer: 'te disse', options: ['te disse', 'disse-te', 'disse te'], translation: 'Já te disse que o trem sai às oito!' },
          { sentence: 'Quem ___ a chave do carro?', answer: 'me deu', options: ['me deu', 'deu-me', 'deu me'], translation: 'Quem me deu a chave do carro?' },
        ],
        voice: {
          bot: 'Não te preocupes, eu ajudo-te! Já conheces o Porto?',
          botTranslation: 'Não se preocupe, eu te ajudo! Você já conhece o Porto?',
          expected: ['Obrigada! Ainda não o conheço, mas já me disseram que é lindo.', 'ainda não o conheço', 'não o conheço', 'já o conheço', 'obrigado', 'obrigada'],
          hint: 'Depois de “não”, “já” e “ainda”, o pronome vai antes do verbo: “Ainda não o conheço”, “Já me disseram”. Sem essas palavras, volta para depois: “Conheço-o bem”.',
        },
        communityPrompt: 'Escreva quatro frases com próclise obrigatória, uma para cada gatilho: “não”, “já”, uma pergunta com “quem” ou “onde” e uma frase com “que” (“o amigo que me ajudou…”). Depois reescreva uma delas sem o gatilho, com ênclise.',
      },
      {
        id: 'pt-u3-l3',
        title: 'Desafio de voz: empresto-to amanhã',
        kind: 'voz',
        words: ['emprestar', 'oferecer', 'prenda', 'fazer anos', 'telefonar', 'perguntar'],
        cloze: [
          { sentence: 'Viste a Marta? — Sim, vi-___ ontem no café.', answer: 'a', options: ['a', 'lhe', 'ela'], translation: 'Você viu a Marta? — Vi sim, vi ela ontem no café.' },
          { sentence: 'Emprestas-me o livro? — Claro, empresto-___ amanhã.', answer: 'to', options: ['to', 'te', 'lho'], translation: 'Você me empresta o livro? — Claro, te empresto amanhã.' },
          { sentence: 'Telefonei ao senhor Costa e disse-___ que o comboio está atrasado.', answer: 'lhe', options: ['lhe', 'o', 'a'], translation: 'Liguei para o seu Costa e disse a ele que o trem está atrasado.' },
        ],
        voice: {
          bot: 'Olha, a Sofia faz anos amanhã! Já lhe compraste uma prenda?',
          botTranslation: 'Olha, a Sofia faz aniversário amanhã! Você já comprou um presente pra ela?',
          expected: ['Ainda não lhe comprei nada, mas vou oferecer-lhe um livro.', 'ainda não lhe comprei', 'vou oferecer-lhe', 'oferecer-lhe', 'comprei-lhe'],
          hint: 'A Sofia recebe o presente: é objeto indireto, então use “lhe”. Depois de “ainda não”, o pronome vem antes (“Ainda não lhe comprei”); com “vou + infinitivo”, ele se prende ao infinitivo (“vou oferecer-lhe”).',
        },
        communityPrompt: 'Escreva um pequeno diálogo em que alguém pede algo emprestado e a outra pessoa responde com as formas juntas: “Dás-mo?”, “Empresto-to”, “Dei-lho”. Explique, entre parênteses, o que cada uma quer dizer.',
      },
      {
        id: 'pt-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Preciso da tua ajuda: o meu irmão pediu-me o teu portátil emprestado. Emprestas-lho?',
          botTranslation: 'Preciso da sua ajuda: meu irmão me pediu seu notebook emprestado. Você empresta pra ele?',
          expected: [
            'Claro, empresto-lho! Mas diz-lhe que tem de devolver-mo amanhã.',
            'empresto-lho',
            'claro',
            'diz-lhe',
            'devolver-mo',
          ],
          hint: '“Lho” é “lhe” (ao irmão) + “o” (o portátil). Na afirmativa, o pronome vai depois do verbo: “Empresto-lho”, “Diz-lhe”. Para pedir que o devolvam a você, junte “me” + “o”: “devolver-mo”.',
        },
        communityPrompt: 'Escreva uma mensagem a um colega português pedindo três favores (emprestar, mostrar e dizer alguma coisa). Use pelo menos uma ênclise (“Mostra-me…”), uma próclise obrigatória (“Não te esqueças…”) e uma forma contraída (mo, to ou lho).',
      },
    ],
  },

  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'pt-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'No café: queria um galão',
    emoji: '☕',
    card: {
      id: 'pt-c4',
      title: 'Queria um café, se faz favor',
      emoji: '🥮',
      history:
        'A tradição diz que o pastel de nata nasceu no Mosteiro dos Jerónimos, em Belém, onde, conta-se, os monges aproveitavam as gemas que sobravam das claras usadas para engomar a roupa. Com a extinção das ordens religiosas, em 1834, a receita saiu do convento e passou a ser vendida ali perto. No século XX, boa parte do café bebido em Portugal vinha de Angola, de São Tomé e Príncipe e de Timor, então territórios coloniais portugueses. A pastelaria e o café de bairro continuam a ser o lugar de encontro de todos os dias: ali se toma a bica em pé, se lê o jornal e se conversa com o empregado.',
      culture_tip:
        'Para chamar o garçom, diga “Faz favor!”. Para pedir, o normal é o imperfeito: “Queria um galão”, ou até “Era uma bica”; “Quero um café” soa seco. Não trate o empregado nem o cliente por “você”: em Portugal se diz “o senhor”, “a senhora”, “a menina” (para uma moça) ou só o verbo: “Deseja mais alguma coisa?”. E, na hora de pagar, o cartão de débito é o “multibanco”.',
      grammar_why:
        'O pretérito perfeito simples conta uma ação acabada: “Ontem almocei em Alfama”. O pretérito perfeito composto (“tenho feito”) não é o “I have done” do inglês nem o “he hecho” do espanhol: indica algo que vem se repetindo ou durando até agora, como no Brasil — “Tenho trabalhado muito” é “ando trabalhando muito”. Em Portugal ele é muito comum na fala (“Tens estado bem?”, “Tenho andado a estudar”). Na 1ª pessoa do plural dos verbos em -ar, Portugal distingue o passado com acento, “visitámos”, do presente, “visitamos”; o Acordo de 1990 deixou o acento facultativo, e no Brasil ele não se usa. O imperfeito de cortesia (“queria”, “podia”) suaviza o pedido nos dois países, mas em Portugal é a regra ao balcão. E o tratamento formal usa a 3ª pessoa com “o senhor”, “a senhora”, o nome ou o título: “O Dr. Costa já almoçou?”.',
      grammar_examples: [
        ['Queria um galão e uma torrada, se faz favor.', 'Eu queria um café com leite e uma torrada, por favor.'],
        ['Ontem almoçámos numa tasca em Alfama.', 'Ontem a gente almoçou num boteco em Alfama.'],
        ['Tenho trabalhado muito ultimamente.', 'Tenho trabalhado muito ultimamente. / Ando trabalhando muito.'],
        ['O senhor já escolheu? A menina quer açúcar?', 'O senhor já escolheu? A moça quer açúcar? (você quer açúcar?)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u4-l1',
        title: 'Faz favor!',
        kind: 'licao',
        words: ['queria', 'empregado de mesa', 'ementa', 'prato do dia', 'esplanada', 'faz favor'],
        cloze: [
          { sentence: 'Boa tarde! ___ uma sopa e o prato do dia, se faz favor.', answer: 'Queria', options: ['Queria', 'Quero', 'Queira'], translation: 'Boa tarde! Eu queria uma sopa e o prato do dia, por favor.' },
          { sentence: 'O senhor ___ ver a ementa?', answer: 'quer', options: ['quer', 'queres', 'querem'], translation: 'O senhor quer ver o cardápio?' },
          { sentence: 'Está sol: vamos sentar-nos na ___.', answer: 'esplanada', options: ['esplanada', 'ementa', 'conta'], translation: 'Está sol: vamos sentar nas mesas lá fora.' },
        ],
        voice: {
          bot: 'Boa tarde! O senhor já escolheu? Hoje o prato do dia é bacalhau à Brás.',
          botTranslation: 'Boa tarde! O senhor já escolheu? Hoje o prato do dia é bacalhau à Brás.',
          expected: ['Queria o prato do dia e uma água, se faz favor.', 'queria', 'prato do dia', 'se faz favor', 'era'],
          hint: 'Peça com o imperfeito de cortesia: “Queria…”. Em Portugal também se ouve “Era o prato do dia”, com o mesmo sentido.',
        },
        communityPrompt: 'Escreva o seu pedido completo num restaurante do Porto: chame o empregado (“Faz favor!”), peça a ementa e faça o pedido com “Queria…”, tratando-o por “o senhor”.',
      },
      {
        id: 'pt-u4-l2',
        title: 'O que fizeste no fim de semana?',
        kind: 'licao',
        words: ['almoçar', 'jantar', 'visitar', 'passear', 'fim de semana', 'miradouro'],
        cloze: [
          { sentence: 'Ontem ___ numa tasca em Alfama.', answer: 'almocei', options: ['almocei', 'tenho almoçado', 'almoçava'], translation: 'Ontem almocei num boteco em Alfama.' },
          { sentence: 'Desde que cheguei a Lisboa, ___ muito: todos os dias um bairro novo.', answer: 'tenho passeado', options: ['tenho passeado', 'passeei', 'passeio'], translation: 'Desde que cheguei a Lisboa, tenho passeado muito: todo dia um bairro novo.' },
          { sentence: 'No fim de semana passado, nós ___ o Castelo de Guimarães.', answer: 'visitámos', options: ['visitámos', 'visitamos', 'temos visitado'], translation: 'No fim de semana passado, nós visitamos o Castelo de Guimarães.' },
        ],
        voice: {
          bot: 'Então, o que fizeste no fim de semana?',
          botTranslation: 'E aí, o que você fez no fim de semana?',
          expected: ['Visitei Sintra com uns amigos e almoçámos numa esplanada.', 'visitei', 'almocei', 'almoçámos', 'passeei', 'jantei'],
          hint: 'Ação acabada vai no perfeito simples: “visitei”, “passeei”, “jantei”. Com “nós”, o passado é “almoçámos”, com acento e o “a” aberto, para não confundir com o presente “almoçamos”.',
        },
        communityPrompt: 'Conte o seu último fim de semana com três verbos no perfeito simples (um deles com “nós”: visitámos, jantámos…) e diga uma coisa que você tem feito ultimamente, com “tenho + particípio”.',
      },
      {
        id: 'pt-u4-l3',
        title: 'Desafio de voz: mais alguma coisa?',
        kind: 'voz',
        words: ['mais alguma coisa?', 'a conta, se faz favor', 'é tudo', 'fique com o troco', 'multibanco', 'talão'],
        cloze: [
          { sentence: 'A senhora ___ mais alguma coisa? — Não, obrigada, é tudo.', answer: 'deseja', options: ['deseja', 'desejas', 'desejam'], translation: 'A senhora deseja mais alguma coisa? — Não, obrigada, é só isso.' },
          { sentence: 'Ultimamente ___ muitos pastéis de nata!', answer: 'tenho comido', options: ['tenho comido', 'comi', 'tinha comido'], translation: 'Ultimamente ando comendo muito pastel de nata!' },
          { sentence: 'Paga em dinheiro? — Não, ___ pagar com multibanco.', answer: 'queria', options: ['queria', 'quis', 'quererei'], translation: 'Vai pagar em dinheiro? — Não, eu queria pagar no débito.' },
        ],
        voice: {
          bot: 'O senhor deseja mais alguma coisa?',
          botTranslation: 'O senhor deseja mais alguma coisa?',
          expected: ['Não, obrigado, é tudo. Queria a conta, se faz favor.', 'é tudo', 'a conta', 'queria', 'se faz favor'],
          hint: 'Recuse com educação (“Não, obrigado, é tudo”) e peça a conta com o imperfeito de cortesia: “Queria a conta, se faz favor”.',
        },
        communityPrompt: 'Escreva o fim de uma refeição em Portugal: o empregado pergunta se o cliente deseja mais alguma coisa (tratando-o na 3ª pessoa), o cliente pede a conta com “queria”, paga com multibanco ou em dinheiro e diz “fique com o troco”.',
      },
      {
        id: 'pt-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Boa noite, senhor Rui! Há muito tempo que não o vejo cá! O que tem feito? Já jantou?',
          botTranslation: 'Boa noite, seu Rui! Faz tempo que não vejo o senhor por aqui! O que o senhor tem feito? Já jantou?',
          expected: [
            'Boa noite! Tenho trabalhado muito. Hoje ainda não jantei: queria o prato do dia, se faz favor.',
            'tenho trabalhado',
            'ainda não jantei',
            'queria',
            'prato do dia',
          ],
          hint: 'Use o “tenho + particípio” para o que vem acontecendo (“Tenho trabalhado muito”), o perfeito simples com “ainda não” para o jantar de hoje e o “queria” para pedir.',
        },
        communityPrompt: 'Escreva um diálogo num café de bairro entre você e o dono, que o trata por “o senhor” ou “a senhora”. Ele pergunta o que você tem feito (responda com “tenho + particípio”), o que fez no fim de semana (perfeito simples) e o que deseja (responda com “queria”).',
      },
    ],
  },

  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'pt-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Dir-lhe-ei amanhã: mesóclise e crase',
    emoji: '✉️',
    card: {
      id: 'pt-c5',
      title: 'O pronome no meio do verbo',
      emoji: '🧩',
      history:
        'O futuro do latim clássico (“cantabo”) desapareceu do latim falado, que passou a dizer “cantare habeo”, algo como “tenho de cantar”. Com o tempo, as duas palavras se colaram e viraram o nosso “cantarei”: o “-ei” final é o antigo “hei”, do verbo “haver”. O condicional nasceu do mesmo jeito, com o imperfeito de “haver” (“cantaria”). Como no português antigo as duas partes ainda eram sentidas como separáveis, o pronome podia entrar entre elas: “dir-lhe-ei” é “dir + lhe + hei”. Já a palavra “crase” vem do grego “krâsis”, “mistura”: é a fusão da preposição “a” com o artigo “a”.',
      culture_tip:
        'Em Portugal a mesóclise aparece na escrita formal, nas notícias, nos discursos e na fala de muita gente escolarizada; no dia a dia, porém, a maioria prefere fugir dela com “vou dizer-lhe” ou com o presente (“Digo-lhe amanhã”). No Brasil ela ficou restrita a textos muito formais e costuma soar pomposa. A crase, por sua vez, se ouve em Portugal: “à” tem o “a” aberto e o artigo “a”, fechado, o que ajuda os portugueses a acertar o acento.',
      grammar_why:
        'No futuro e no condicional, o pronome átono não pode vir depois do verbo: nunca “direi-lhe”, nunca “faria-se”. Se não houver palavra que puxe o pronome para antes, ele entra no meio, antes da terminação: “Dir-lhe-ei”, “Far-se-ia”, “Avisá-lo-emos” (o “r” cai e “o” vira “lo”). Com um gatilho de próclise (não, já, que, quem…), o pronome vai antes e não há mesóclise: “Não lhe direi”, “Disse que nos mandaria”. A norma culta dos dois países é a mesma; o Brasil falado resolve com a próclise (“Lhe direi”, “Te conto amanhã”), e a fala portuguesa, com “vou + infinitivo”. Crase é “a” (preposição) + “a” (artigo): “Vou à praia”, “às oito”. O teste vale nos dois países: troque por uma palavra masculina — se virar “ao”, há crase (“vou ao mercado” → “vou à farmácia”). Em Portugal a crase aparece ainda mais porque o artigo antes de nome próprio é normal: “Dei o livro à Ana”.',
      grammar_examples: [
        ['Dir-lhe-ei a verdade amanhã.', 'Eu lhe direi a verdade amanhã. / Vou dizer a verdade a ele amanhã.'],
        ['Não lhe direi nada, prometo.', 'Não lhe direi nada, prometo. / Não vou falar nada pra ele, prometo.'],
        ['Far-se-ia tudo para ganhar o prémio.', 'Se faria tudo para ganhar o prêmio. (culto: far-se-ia)'],
        ['Vou à praia às dez e depois vou ao mercado.', 'Vou à praia às dez e depois vou ao mercado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u5-l1',
        title: 'Avisá-lo-ei hoje',
        kind: 'licao',
        words: ['prometer', 'avisar', 'reunião', 'e-mail', 'chefe', 'marcar'],
        cloze: [
          { sentence: 'Não se preocupe: ___ o relatório amanhã de manhã.', answer: 'enviar-lhe-ei', options: ['enviar-lhe-ei', 'enviarei-lhe', 'lhe enviarei'], translation: 'Não se preocupe: vou lhe enviar o relatório amanhã de manhã.' },
          { sentence: 'A chefe disse que ___ o resultado da reunião por e-mail.', answer: 'nos mandaria', options: ['nos mandaria', 'mandar-nos-ia', 'mandaria-nos'], translation: 'A chefe disse que nos mandaria o resultado da reunião por e-mail.' },
          { sentence: 'A reunião? ___ para quinta-feira às dez.', answer: 'Marcá-la-emos', options: ['Marcá-la-emos', 'Marcaremos-la', 'A marcaremos'], translation: 'A reunião? Vamos marcá-la para quinta-feira às dez.' },
        ],
        voice: {
          bot: 'O diretor ainda não sabe da reunião de amanhã. Pode avisá-lo, se faz favor?',
          botTranslation: 'O diretor ainda não sabe da reunião de amanhã. O senhor pode avisá-lo, por favor?',
          expected: ['Com certeza. Avisá-lo-ei hoje e enviar-lhe-ei um e-mail.', 'avisá-lo-ei', 'enviar-lhe-ei', 'dir-lhe-ei', 'vou avisá-lo'],
          hint: 'No futuro, sem palavra que puxe o pronome, use a mesóclise: “Avisá-lo-ei” (avisar + o + ei) e “enviar-lhe-ei”. Na fala, “Vou avisá-lo” também é aceito.',
        },
        communityPrompt: 'Escreva um e-mail formal curto ao seu chefe prometendo três coisas para a próxima semana, com mesóclise (“Enviar-lhe-ei…”, “Marcá-la-ei…”) e uma frase com próclise por causa de “não” ou “que”.',
      },
      {
        id: 'pt-u5-l2',
        title: 'Com mais tempo, viajaria',
        kind: 'licao',
        words: ['férias', 'viagem', 'reservar', 'hotel', 'praia', 'aeroporto'],
        cloze: [
          { sentence: 'Com mais tempo, ___ pelos Açores de barco.', answer: 'viajaria', options: ['viajaria', 'viajarei', 'viajasse'], translation: 'Com mais tempo, eu viajaria pelos Açores de barco.' },
          { sentence: 'Eu, no teu lugar, ___ o hotel hoje mesmo.', answer: 'reservaria', options: ['reservaria', 'reservarei', 'reserve'], translation: 'Eu, no seu lugar, reservaria o hotel hoje mesmo.' },
          { sentence: 'Sem o mapa, ___ facilmente nas ruas de Alfama.', answer: 'perder-nos-íamos', options: ['perder-nos-íamos', 'nos perderíamos', 'perderíamos-nos'], translation: 'Sem o mapa, a gente se perderia facilmente nas ruas de Alfama.' },
        ],
        voice: {
          bot: 'Se pudesses escolher, onde passarias as férias?',
          botTranslation: 'Se você pudesse escolher, onde passaria as férias?',
          expected: ['Passaria as férias na Madeira: reservaria um hotel perto do mar e iria à praia todos os dias.', 'passaria', 'reservaria', 'gostaria', 'iria'],
          hint: 'Responda no condicional, que tem a mesma terminação nos dois países: “passaria”, “reservaria”, “iria”. Se usar pronome sem gatilho, lembre a mesóclise: “levar-te-ia”.',
        },
        communityPrompt: 'Descreva as férias dos seus sonhos em Portugal com quatro verbos no condicional (iria, ficaria, visitaria…) e uma mesóclise (“Levar-te-ia a…”, “Mostrar-lhe-ia…”).',
      },
      {
        id: 'pt-u5-l3',
        title: 'Desafio de voz: vou à praia, vou ao mar',
        kind: 'voz',
        words: ['às', 'às vezes', 'à frente de', 'até à próxima', 'vire à direita', 'à vontade'],
        cloze: [
          { sentence: 'Amanhã vou ___ praia da Nazaré.', answer: 'à', options: ['à', 'a', 'na'], translation: 'Amanhã vou à praia da Nazaré.' },
          { sentence: 'O comboio para Faro parte ___ oito e meia.', answer: 'às', options: ['às', 'as', 'nas'], translation: 'O trem para Faro sai às oito e meia.' },
          { sentence: 'Esta tarde vou ___ mercado e depois à farmácia.', answer: 'ao', options: ['ao', 'à', 'no'], translation: 'Hoje à tarde vou ao mercado e depois à farmácia.' },
        ],
        voice: {
          bot: 'Olá! Vou à Baixa esta tarde. Queres vir comigo? A que horas podes?',
          botTranslation: 'Oi! Vou para a Baixa hoje à tarde. Quer vir comigo? Que horas você pode?',
          expected: ['Vou contigo! Posso às cinco: encontramo-nos à frente da estação.', 'às cinco', 'à frente da', 'encontramo-nos', 'vou contigo'],
          hint: 'Horas levam crase: “às cinco”. Lugar feminino depois de “ir” e de “à frente de” também: “à frente da estação”. Em Portugal diz-se “à frente de” (no Brasil, “na frente de”).',
        },
        communityPrompt: 'Escreva as instruções para um amigo chegar à sua casa: horário (às…), dois lugares femininos com crase (à praça, à farmácia) e dois masculinos com “ao”, para mostrar o teste da troca.',
      },
      {
        id: 'pt-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Boa tarde, daqui fala a receção do hotel. A que horas chegará amanhã? E poderia confirmar-nos a hora da reunião?',
          botTranslation: 'Boa tarde, aqui é da recepção do hotel. A que horas o senhor vai chegar amanhã? E poderia nos confirmar o horário da reunião?',
          expected: [
            'Chegarei ao hotel às três e irei à reunião às cinco. Confirmar-lhe-ei tudo por e-mail.',
            'chegarei',
            'às três',
            'à reunião',
            'confirmar-lhe-ei',
            'enviar-lhe-ei',
          ],
          hint: 'Use o futuro (“chegarei”, “irei”), a crase das horas e de “ir a + a reunião” (“às três”, “à reunião”) e feche com uma mesóclise: “Confirmar-lhe-ei tudo por e-mail”.',
        },
        communityPrompt: 'Escreva um e-mail formal a um hotel de Évora confirmando a sua reserva: diga a que horas chegará (com “às”), o que fará no primeiro dia (com pelo menos uma crase e um “ao”) e prometa enviar os dados com uma mesóclise (“Enviar-lhes-ei…”). Termine com “Com os melhores cumprimentos”.',
      },
    ],
  },
  {
    id: 'pt-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Fim de semana em Portugal: ir ao cinema, assistir ao jogo',
    emoji: '🎭',
    card: {
      id: 'pt-c6',
      title: 'Do Teatro Nacional à casa de fados: o lazer português',
      emoji: '🎬',
      history:
        'O Teatro Nacional D. Maria II, no Rossio, em Lisboa, foi inaugurado em 1846. Em 1896, no Porto, Aurélio da Paz dos Reis filmou a “Saída do Pessoal Operário da Fábrica Confiança”, considerado o primeiro filme português. O fado entrou em 2011 na lista do Patrimônio Cultural Imaterial da Humanidade da UNESCO. E o Estádio Nacional, no Jamor, perto de Lisboa, inaugurado em 1944, recebe tradicionalmente a final da Taça de Portugal.',
      culture_tip:
        'Em Portugal, os filmes estrangeiros passam quase sempre legendados; só os filmes infantis costumam ser dobrados (dublados). Você compra “bilhetes”, não “ingressos”, e escolhe a “sessão” das nove e meia. Numa casa de fados, quando a luz baixa e a fadista começa, faz-se silêncio absoluto: conversar durante o fado é falta de educação.',
      grammar_why:
        'Regência é a preposição que o verbo ou o nome pede, e a norma culta é a mesma nos dois países. “Assistir a” (= ver um espetáculo) leva “a”: “assisti ao jogo”. Em Portugal isso sai natural na fala; no Brasil é comum ouvir “assisti o jogo”, que é coloquial. “Assistir” sem preposição significa “ajudar” (“o médico assistiu o doente”). Com verbos de movimento, a norma culta dos dois lados pede “ir a” e “chegar a” (“cheguei ao estádio”); “cheguei no estádio” e “fui no cinema” são da fala brasileira. Em Portugal, “ir a” é para idas curtas e “ir para” para ficar muito tempo. “Preferir” pede “a”, sem “mais” nem “do que”: “prefiro o teatro ao cinema”. Na concordância verbal básica, o sujeito composto antes do verbo leva o verbo ao plural (“a Rita e o irmão foram”), e em “fomos nós que pagámos” o verbo concorda com “nós”, nos dois países.',
      grammar_examples: [
        ['Ontem assistimos a um concerto no Porto.', 'Ontem assistimos a um show no Porto.'],
        ['Prefiro o teatro ao cinema.', 'Prefiro teatro a cinema. (na fala: “prefiro teatro do que cinema”)'],
        ['Chegámos ao estádio mesmo antes do apito inicial.', 'Chegamos ao estádio bem na hora do apito inicial.'],
        ['A Rita e o irmão foram ao teatro no sábado.', 'A Rita e o irmão foram ao teatro no sábado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u6-l1',
        title: 'No cinema: legendado ou dobrado?',
        kind: 'licao',
        words: ['assistir', 'realizador', 'legendas', 'dobrado', 'estrear', 'cartaz'],
        cloze: [
          {
            sentence: 'Ontem à noite assistimos ___ um filme português com o meu irmão.',
            answer: 'a',
            options: ['a', 'em', 'de'],
            translation: 'Ontem à noite assistimos a um filme português com meu irmão.',
          },
          {
            sentence: 'Prefiro os filmes com legendas ___ filmes dobrados.',
            answer: 'aos',
            options: ['aos', 'do que os', 'que os'],
            translation: 'Prefiro filmes legendados a filmes dublados.',
          },
          {
            sentence: 'O realizador e a atriz ___ a Lisboa para a estreia do filme.',
            answer: 'vieram',
            options: ['vieram', 'veio', 'vinha'],
            translation: 'O diretor e a atriz vieram a Lisboa para a estreia do filme.',
          },
        ],
        voice: {
          bot: 'Então, a que filme assististe no fim de semana? Estava dobrado ou tinha legendas?',
          botTranslation: 'E aí, que filme você viu no fim de semana? Era dublado ou legendado?',
          expected: [
            'Assisti a um filme francês com legendas. Prefiro as legendas à dobragem.',
            'assisti a',
            'legendas',
            'prefiro',
          ],
          hint: 'Use “assistir a”, com a preposição que a norma culta pede nos dois países, e “preferir… a…”. Em Portugal, “dobragem” é a dublagem.',
        },
        communityPrompt:
          'Escreva 3 frases sobre filmes a que você assistiu, usando “assistir a”, “preferir… a…” e um sujeito composto (o realizador e a atriz…).',
      },
      {
        id: 'pt-u6-l2',
        title: 'Domingo de futebol: na bancada',
        kind: 'licao',
        words: ['adepto', 'claque', 'bancada', 'árbitro', 'jornada', 'empate'],
        cloze: [
          {
            sentence: 'Os adeptos chegaram ___ estádio uma hora antes do jogo.',
            answer: 'ao',
            options: ['ao', 'no', 'pelo'],
            translation: 'Os torcedores chegaram ao estádio uma hora antes do jogo.',
          },
          {
            sentence: 'Os jogadores têm de obedecer ___ árbitro, mesmo quando não concordam.',
            answer: 'ao',
            options: ['ao', 'o', 'pelo'],
            translation: 'Os jogadores têm de obedecer ao árbitro, mesmo quando não concordam.',
          },
          {
            sentence: 'Nesta jornada, a claque e os jogadores ___ o empate como uma vitória.',
            answer: 'festejaram',
            options: ['festejaram', 'festejou', 'festejava'],
            translation: 'Nesta rodada, a torcida organizada e os jogadores comemoraram o empate como uma vitória.',
          },
        ],
        voice: {
          bot: 'Vais ao estádio no domingo ou ficas em casa a ver o jogo?',
          botTranslation: 'Você vai ao estádio no domingo ou vai ficar em casa vendo o jogo?',
          expected: [
            'Vou ao estádio com uns amigos. Prefiro a bancada ao sofá!',
            'vou ao estádio',
            'prefiro',
            'ao sofá',
          ],
          hint: 'Em Portugal, “ir a” para idas curtas (“vou ao estádio”) e “ir para” quando se vai ficar muito tempo; “ir no” é só da fala brasileira. E “preferir… a…”, sem “do que”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre um jogo com “chegar a”, “obedecer a” e “ir a”, e diga como elas soariam no português coloquial do Brasil (“cheguei no estádio”).',
      },
      {
        id: 'pt-u6-l3',
        title: 'Desafio de voz: uma noite de fado',
        kind: 'voz',
        words: ['casa de fados', 'fadista', 'guitarra portuguesa', 'palco', 'aplaudir', 'concerto'],
        cloze: [
          {
            sentence: 'Quando chegámos ___ casa de fados, a fadista já estava a cantar.',
            answer: 'à',
            options: ['à', 'na', 'a'],
            translation: 'Quando chegamos à casa de fado, a cantora já estava cantando.',
          },
          {
            sentence: 'A fadista e o guitarrista ___ ao palco e o público aplaudiu de pé.',
            answer: 'subiram',
            options: ['subiram', 'subiu', 'sobe'],
            translation: 'A cantora de fado e o guitarrista subiram ao palco e o público aplaudiu de pé.',
          },
          {
            sentence: 'Fomos nós que ___ os bilhetes para o concerto de guitarra portuguesa.',
            answer: 'comprámos',
            options: ['comprámos', 'compraram', 'comprou'],
            translation: 'Fomos nós que compramos os ingressos para o show de guitarra portuguesa.',
          },
        ],
        voice: {
          bot: 'Boa noite! Já alguma vez assistiu a um espetáculo de fado? Prefere o fado de Lisboa ou o de Coimbra?',
          botTranslation: 'Boa noite! O senhor já assistiu alguma vez a um show de fado? Prefere o fado de Lisboa ou o de Coimbra?',
          expected: [
            'Já assisti a um concerto de fado em Alfama e prefiro o fado de Lisboa ao de Coimbra.',
            'assisti a',
            'prefiro',
            'ao de Coimbra',
          ],
          hint: 'Responda com “assistir a” e “preferir… a…”. Note que o bot trata você na 3ª pessoa (“assistiu”, “prefere”), sem “você”: é o formal de Portugal.',
        },
        communityPrompt:
          'Grave-se contando uma noite de música: a que concerto assistiu, a que horas chegou ao local e que estilo prefere a qual.',
      },
      {
        id: 'pt-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'O que costumas fazer ao fim de semana? Vais ao cinema, ao teatro ou a um jogo de futebol?',
          botTranslation: 'O que você costuma fazer no fim de semana? Vai ao cinema, ao teatro ou a um jogo de futebol?',
          expected: [
            'Ao sábado vou ao cinema com a minha namorada; preferimos os filmes legendados aos dobrados. Ao domingo assistimos a um jogo no estádio.',
            'vou ao',
            'assistimos a',
            'preferimos',
            'aos dobrados',
          ],
          hint: 'Junte tudo: “ir a”, “assistir a”, “preferir… a…” e o verbo no plural com sujeito composto. Em Portugal diz-se “ao sábado”, no Brasil “no sábado”.',
        },
        communityPrompt:
          'Escreva 5 frases sobre o seu fim de semana ideal com “ir a”, “chegar a”, “assistir a”, “preferir… a…” e um sujeito composto no plural. Depois reescreva uma delas como se fala no Brasil informal e compare com a norma culta.',
      },
    ],
  },
  {
    id: 'pt-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Saúde: do centro de saúde à farmácia',
    emoji: '🩺',
    card: {
      id: 'pt-c7',
      title: 'O Serviço Nacional de Saúde e a cruz verde',
      emoji: '⚕️',
      history:
        'Em 1563, em Goa, o médico português Garcia de Orta publicou os “Colóquios dos Simples e Drogas da Índia”, um dos primeiros livros europeus sobre as plantas medicinais da Ásia. Em 1949, o neurologista Egas Moniz recebeu o primeiro Prêmio Nobel português, de Fisiologia ou Medicina, pela leucotomia, técnica hoje abandonada. O Serviço Nacional de Saúde (SNS), público e universal, foi criado em 1979; o SUS brasileiro nasceu da Constituição de 1988. Nos dois sistemas, a porta de entrada é o atendimento de proximidade: em Portugal, o centro de saúde e o médico de família.',
      culture_tip:
        'Em Portugal, o pronto-socorro são as “urgências”, e o número de emergência é o 112, o mesmo de toda a União Europeia. A farmácia tem a cruz verde, e à noite há sempre uma “farmácia de serviço” aberta. Cuidado com o falso amigo: “estar constipado” é estar resfriado, não com o intestino preso. E, a quem está doente, deseja-se “as melhoras!”.',
      grammar_why:
        'O conjuntivo de Portugal é o nosso subjuntivo: o nome muda, as formas e as regras da norma culta são as mesmas nos dois países (“espero que melhores”, “quando puderes”). A diferença está no uso: como Portugal conjuga muito o “tu”, você vai ouvir “quando puderes”, “se tiveres febre”, onde o Brasil diz “quando você puder”. O infinitivo pessoal (flexionado) é uma marca do português (o galego também o tem): “é melhor tomares o xarope”, “antes de irmos ao médico”. A norma culta dos dois lados o recomenda quando o sujeito do infinitivo é diferente do da oração principal ou precisa ficar claro; em Portugal ele é muito vivo na fala, e no Brasil a fala prefere “é melhor você tomar”. Repare também no conselho: em Portugal, “se eu fosse a ti”; no Brasil, “se eu fosse você”.',
      grammar_examples: [
        ['Espero que te sintas melhor amanhã.', 'Espero que você se sinta melhor amanhã.'],
        ['Quando puderes, marca uma consulta no centro de saúde.', 'Quando você puder, marca uma consulta no posto de saúde.'],
        ['O médico disse para descansarmos uns dias.', 'O médico disse para a gente descansar uns dias.'],
        ['Se eu fosse a ti, ia já à farmácia.', 'Se eu fosse você, ia agora mesmo à farmácia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u7-l1',
        title: 'No centro de saúde: marcar uma consulta',
        kind: 'licao',
        words: ['centro de saúde', 'médico de família', 'marcar uma consulta', 'utente', 'sala de espera', 'cartão de utente'],
        cloze: [
          {
            sentence: 'Quando ___ tempo, liga para o centro de saúde e marca uma consulta.',
            answer: 'tiveres',
            options: ['tiveres', 'tens', 'tivesses'],
            translation: 'Quando você tiver tempo, liga para o posto de saúde e marca uma consulta.',
          },
          {
            sentence: 'A médica de família pede que os utentes ___ sempre o cartão de utente.',
            answer: 'tragam',
            options: ['tragam', 'trazem', 'trouxeram'],
            translation: 'A médica de família pede que os pacientes sempre tragam o cartão de utente (parecido com o cartão do SUS).',
          },
          {
            sentence: 'É melhor ___ cedo: a sala de espera enche depressa.',
            answer: 'chegarmos',
            options: ['chegarmos', 'chegamos', 'chegássemos'],
            translation: 'É melhor a gente chegar cedo: a sala de espera enche rápido.',
          },
        ],
        voice: {
          bot: 'Bom dia. Tem o cartão de utente? Para quando quer marcar a consulta?',
          botTranslation: 'Bom dia. O senhor tem o cartão de utente? Para quando quer marcar a consulta?',
          expected: [
            'Tenho, sim. Queria marcar uma consulta com a médica de família para quando ela puder, de preferência de manhã.',
            'queria marcar',
            'quando ela puder',
            'tenho, sim',
          ],
          hint: 'Peça com o imperfeito de cortesia (“queria”) e use o futuro do conjuntivo (“quando ela puder”). Em Portugal, responde-se repetindo o verbo: “Tenho, sim”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre uma ida ao médico com o futuro do conjuntivo (“quando puder”, “se tiver”) e uma com o infinitivo pessoal (“é melhor irmos…”).',
      },
      {
        id: 'pt-u7-l2',
        title: 'Na farmácia: receita e conselhos',
        kind: 'licao',
        words: ['receita', 'xarope', 'comprimido', 'folheto informativo', 'penso rápido', 'analgésico'],
        cloze: [
          {
            sentence: 'O farmacêutico recomendou que eu ___ o folheto informativo antes de tomar o xarope.',
            answer: 'lesse',
            options: ['lesse', 'leia', 'leio'],
            translation: 'O farmacêutico recomendou que eu lesse a bula antes de tomar o xarope.',
          },
          {
            sentence: 'Tome um comprimido de oito em oito horas, a não ser que ___ dores de estômago.',
            answer: 'tenha',
            options: ['tenha', 'tem', 'tivera'],
            translation: 'Tome um comprimido a cada oito horas, a não ser que tenha dor de estômago.',
          },
          {
            sentence: 'A farmacêutica deu-nos um analgésico para ___ dormir melhor.',
            answer: 'conseguirmos',
            options: ['conseguirmos', 'conseguimos', 'consigamos'],
            translation: 'A farmacêutica nos deu um analgésico para a gente conseguir dormir melhor.',
          },
        ],
        voice: {
          bot: 'Boa tarde. Traz receita? Para que é o medicamento?',
          botTranslation: 'Boa tarde. A senhora trouxe receita? O remédio é para quê?',
          expected: [
            'Não trago receita. Queria um xarope para a tosse que não me dê sono, se for possível.',
            'xarope',
            'que não me dê',
            'se for possível',
          ],
          hint: 'Use o conjuntivo em “um xarope que não me dê sono” e o futuro do conjuntivo em “se for possível”. Depois de “que” e de “não”, o pronome vem antes do verbo: “que não me dê”.',
        },
        communityPrompt:
          'Escreva 3 conselhos de farmacêutico: um com “é importante que…”, um com “a não ser que…” e um com o infinitivo pessoal (“para tomares…”).',
      },
      {
        id: 'pt-u7-l3',
        title: 'Desafio de voz: constipado em casa',
        kind: 'voz',
        words: ['constipado', 'baixa médica', 'repouso', 'sarar', 'dor de garganta', 'nariz entupido'],
        cloze: [
          {
            sentence: 'Se ___ febre amanhã, pede baixa médica e fica em casa.',
            answer: 'tiveres',
            options: ['tiveres', 'tens', 'tivesses'],
            translation: 'Se você estiver com febre amanhã, pede afastamento médico e fica em casa.',
          },
          {
            sentence: 'Espero que ___ depressa, para irmos à praia no sábado.',
            answer: 'sares',
            options: ['sares', 'saras', 'sarasses'],
            translation: 'Espero que você sare logo, para a gente ir à praia no sábado.',
          },
          {
            sentence: 'Se eu ___ a ti, ficava em repouso: estás muito constipado.',
            answer: 'fosse',
            options: ['fosse', 'for', 'era'],
            translation: 'Se eu fosse você, ficava de repouso: você está muito resfriado.',
          },
        ],
        voice: {
          bot: 'Estou tão constipado! Tenho o nariz entupido e dor de garganta. O que me aconselhas?',
          botTranslation: 'Estou tão resfriado! Estou com o nariz entupido e dor de garganta. O que você me aconselha?',
          expected: [
            'Se eu fosse a ti, ficava em repouso. É melhor tomares um chá quente e, se tiveres febre, vai ao médico.',
            'se eu fosse a ti',
            'é melhor tomares',
            'se tiveres',
          ],
          hint: 'Aconselhe com “se eu fosse a ti” (no Brasil, “se eu fosse você”), com o infinitivo pessoal (“é melhor tomares”) e com o futuro do conjuntivo (“se tiveres”).',
        },
        communityPrompt:
          'Grave-se dando três conselhos a um amigo constipado: “se eu fosse a ti…”, “é melhor + infinitivo pessoal” e “quando + futuro do conjuntivo”.',
      },
      {
        id: 'pt-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Amanhã tenho uma consulta no hospital e estou nervoso. Achas que vai correr tudo bem?',
          botTranslation: 'Amanhã tenho uma consulta no hospital e estou nervoso. Você acha que vai dar tudo certo?',
          expected: [
            'Espero que corra tudo bem! Quando saíres da consulta, liga-me. É importante descansares e, se precisares de alguma coisa, avisa.',
            'espero que corra',
            'quando saíres',
            'é importante descansares',
            'se precisares',
          ],
          hint: 'Junte o conjuntivo presente (“espero que corra”), o futuro do conjuntivo (“quando saíres”, “se precisares”) e o infinitivo pessoal (“é importante descansares”). No imperativo afirmativo, ênclise: “liga-me”.',
        },
        communityPrompt:
          'Escreva 5 frases para um amigo doente: um desejo (espero que…), um conselho (se eu fosse a ti…), o futuro do conjuntivo (quando…, se…), o infinitivo pessoal (é melhor…) e o imperfeito do conjuntivo. Diga qual delas soaria diferente no Brasil.',
      },
    ],
  },
  {
    id: 'pt-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Na universidade: as grafias de cá e de lá',
    emoji: '🎓',
    card: {
      id: 'pt-c8',
      title: 'Coimbra, a universidade e o Acordo Ortográfico',
      emoji: '📜',
      history:
        'A universidade portuguesa foi fundada em 1290 pelo rei D. Dinis, em Lisboa; mudou-se várias vezes entre Lisboa e Coimbra até se fixar em Coimbra em 1537, no reinado de D. João III. A Biblioteca Joanina, construída no começo do século XVIII, no reinado de D. João V, é uma das mais belas bibliotecas barrocas da Europa, e desde 2013 a Universidade de Coimbra é Patrimônio Mundial da UNESCO. O Acordo Ortográfico da Língua Portuguesa foi assinado em Lisboa em 1990; tornou-se obrigatório em Portugal em 2015 e no Brasil em 2016.',
      culture_tip:
        'Em Coimbra, os estudantes usam o traje académico, de capa e batina, e em maio festejam o fim do ano letivo na Queima das Fitas. Os caloiros (calouros) passam pela praxe, as tradições de recepção aos novos alunos, em que a participação é voluntária. As notas vão de 0 a 20 “valores”, e passa-se com 10; uma “cadeira” é uma disciplina, e as “propinas” são as taxas pagas à universidade.',
      grammar_why:
        'O Acordo de 1990 unificou quase toda a ortografia, e o critério para as consoantes mudas é a pronúncia de cada país. Onde ninguém pronuncia, elas caíram dos dois lados: “ação”, “ótimo”, “diretor”, “letivo” (antes, em Portugal, “acção”, “óptimo”, “director”, “lectivo”). Onde a pronúncia difere, a grafia também difere: Portugal pronuncia e escreve “facto” e “contacto”, e o Brasil “fato” e “contato”; o Brasil pronuncia e escreve “recepção”, e Portugal “receção”. Nos acentos há dupla grafia oficial, porque a vogal é aberta em Portugal e fechada no Brasil: “económico/econômico”, “académico/acadêmico”, “António/Antônio”, “bebé/bebê”. O hífen segue as mesmas regras nos dois países: “dia a dia” e “fim de semana” sem hífen, “micro-ondas” com hífen (prefixo terminado na mesma vogal que começa a palavra seguinte). E os meses se escrevem com minúscula nos dois países: em Portugal, antes do Acordo, escrevia-se “Setembro”.',
      grammar_examples: [
        ['O ano letivo começa em setembro.', 'O ano letivo começa em setembro. (antes do Acordo, em Portugal: “lectivo” e “Setembro”)'],
        ['De facto, a receção da faculdade fecha às seis.', 'De fato, a recepção da faculdade fecha às seis.'],
        ['O António ganhou uma bolsa de mérito académico.', 'O Antônio ganhou uma bolsa de mérito acadêmico.'],
        ['No dia a dia, aqueço o almoço no micro-ondas da cantina.', 'No dia a dia, esquento o almoço no micro-ondas do refeitório.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u8-l1',
        title: 'Coimbra: caloiros, praxe e Queima das Fitas',
        kind: 'licao',
        words: ['caloiro', 'praxe', 'traje académico', 'Queima das Fitas', 'residência universitária', 'licenciatura'],
        cloze: [
          {
            sentence: 'O caloiro vestiu o traje ___ pela primeira vez.',
            answer: 'académico',
            options: ['académico', 'acadêmico', 'acádemico'],
            translation: 'O calouro vestiu o traje acadêmico pela primeira vez.',
          },
          {
            sentence: 'A Queima das Fitas acontece em maio, no fim do ano ___.',
            answer: 'letivo',
            options: ['letivo', 'lectivo', 'létivo'],
            translation: 'A Queima das Fitas acontece em maio, no fim do ano letivo.',
          },
          {
            sentence: 'De ___, na residência universitária os caloiros conhecem estudantes de todo o país.',
            answer: 'facto',
            options: ['facto', 'fato', 'fáto'],
            translation: 'De fato, na moradia estudantil os calouros conhecem estudantes do país inteiro. (em Portugal, “fato” é o terno)',
          },
        ],
        voice: {
          bot: 'Então, és caloiro? Já vestiste o traje académico? Vais à Queima das Fitas?',
          botTranslation: 'E aí, você é calouro? Já vestiu o traje acadêmico? Vai à Queima das Fitas?',
          expected: [
            'Sou caloiro, sim. Já vesti o traje académico e vou à Queima das Fitas em maio, no fim do ano letivo.',
            'traje académico',
            'em maio',
            'ano letivo',
          ],
          hint: 'Na escrita: “académico” com acento agudo (em Portugal a vogal é aberta), “maio” com minúscula e “letivo” sem o c antigo. Na fala, repare no “a” aberto de “académico”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre a vida universitária usando “académico”, “ano letivo” e um mês do ano, e reescreva-as com a grafia do Brasil, marcando o que muda.',
      },
      {
        id: 'pt-u8-l2',
        title: 'Aulas, exames e notas',
        kind: 'licao',
        words: ['cadeira', 'exame nacional', 'propina', 'pauta', 'apontamentos', 'sebenta'],
        cloze: [
          {
            sentence: 'Tive dezasseis valores na cadeira de Economia: foi ___!',
            answer: 'ótimo',
            options: ['ótimo', 'óptimo', 'ôtimo'],
            translation: 'Tirei dezesseis (de vinte) na disciplina de Economia: foi ótimo!',
          },
          {
            sentence: 'O ___ do departamento afixou a pauta com as notas do exame.',
            answer: 'diretor',
            options: ['diretor', 'director', 'dirétor'],
            translation: 'O diretor do departamento publicou no mural a lista com as notas da prova.',
          },
          {
            sentence: 'No ___, estudo pelos apontamentos e pela sebenta.',
            answer: 'dia a dia',
            options: ['dia a dia', 'dia-a-dia', 'dia à dia'],
            translation: 'No dia a dia, estudo pelas anotações e pela apostila.',
          },
        ],
        voice: {
          bot: 'Como correu o exame? Já saiu a pauta com as notas?',
          botTranslation: 'Como foi a prova? Já saiu a lista com as notas?',
          expected: [
            'Correu bem! A pauta já saiu e tive catorze valores, graças aos apontamentos e à sebenta.',
            'correu bem',
            'valores',
            'apontamentos',
          ],
          hint: 'Em Portugal as notas vão de 0 a 20 “valores”, e a “sebenta” é a apostila do curso. Diga “correu bem” para “foi bem”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre um exame com “ótimo”, “diretor” e “dia a dia”, e explique por que o Acordo tirou o c e o p de palavras como “óptimo” e “director”.',
      },
      {
        id: 'pt-u8-l3',
        title: 'Desafio de voz: ciência no laboratório',
        kind: 'voz',
        words: ['investigação', 'laboratório', 'cientista', 'descoberta', 'eletrão', 'microscópio'],
        cloze: [
          {
            sentence: 'Este ___ explica-se com a física quântica.',
            answer: 'fenómeno',
            options: ['fenómeno', 'fenômeno', 'fenoméno'],
            translation: 'Esse fenômeno se explica pela física quântica.',
          },
          {
            sentence: 'No laboratório, a equipa estuda a carga do ___.',
            answer: 'eletrão',
            options: ['eletrão', 'elétron', 'electrão'],
            translation: 'No laboratório, a equipe estuda a carga do elétron.',
          },
          {
            sentence: 'A cientista aqueceu a amostra no ___ do laboratório.',
            answer: 'micro-ondas',
            options: ['micro-ondas', 'microondas', 'micro ondas'],
            translation: 'A cientista esquentou a amostra no micro-ondas do laboratório.',
          },
        ],
        voice: {
          bot: 'Trabalhas num laboratório de investigação? Qual foi a descoberta que mais te entusiasmou?',
          botTranslation: 'Você trabalha num laboratório de pesquisa? Qual foi a descoberta que mais te empolgou?',
          expected: [
            'Trabalho, sim. A descoberta que mais me entusiasmou foi ver ao microscópio um fenómeno que ninguém tinha observado.',
            'trabalho, sim',
            'microscópio',
            'fenómeno',
          ],
          hint: 'Em Portugal, “investigação” é a pesquisa científica e o “investigador” é o pesquisador. Pronuncie “fenómeno” com o o aberto, como se escreve.',
        },
        communityPrompt:
          'Grave-se falando de uma descoberta científica que você admira, usando “investigação”, “fenómeno” e “facto”, e depois diga como essas palavras se escrevem no Brasil.',
      },
      {
        id: 'pt-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Imagina que escreves ao reitor sobre a tua licenciatura. Que palavras escreverias de maneira diferente de um estudante brasileiro?',
          botTranslation: 'Imagine que você está escrevendo ao reitor sobre a sua graduação. Que palavras você escreveria de maneira diferente de um estudante brasileiro?',
          expected: [
            'Escreveria “facto”, “contacto”, “receção” e “académico”, enquanto um estudante brasileiro escreve “fato”, “contato”, “recepção” e “acadêmico”. Mas “ação”, “ótimo” e “diretor” escrevem-se da mesma maneira.',
            'facto',
            'contacto',
            'académico',
            'da mesma maneira',
          ],
          hint: 'Separe os três casos: o que o Acordo igualou (ação, ótimo), o que muda pela pronúncia (facto × fato, receção × recepção) e a dupla grafia dos acentos (académico × acadêmico).',
        },
        communityPrompt:
          'Escreva 5 frases sobre a sua faculdade que tenham: uma palavra com dupla grafia (económico/econômico), uma consoante que caiu com o Acordo (ação, ótimo), uma que Portugal mantém (facto, contacto), um hífen (micro-ondas) e um mês com minúscula.',
      },
    ],
  },
  {
    id: 'pt-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Natureza e ambiente: da planície às ilhas',
    emoji: '🌳',
    card: {
      id: 'pt-c9',
      title: 'Montado, laurissilva e fogo: a natureza portuguesa',
      emoji: '🌿',
      history:
        'Portugal produz cerca de metade da cortiça do mundo, e o sobreiro foi declarado árvore nacional pela Assembleia da República em 2011. Na Madeira, as levadas, canais de irrigação construídos desde o século XV, atravessam a floresta laurissilva, Patrimônio Mundial da UNESCO desde 1999. Os Açores têm nove ilhas vulcânicas, e a montanha do Pico, com 2351 metros, é o ponto mais alto de Portugal. Nos verões secos, os incêndios florestais são um problema grave: em 2017, os grandes incêndios causaram mais de cem mortos no país.',
      culture_tip:
        'Nas levadas da Madeira, siga os trilhos sinalizados e leve lanterna: alguns percursos passam por túneis. No verão, fazer fogo no campo é proibido nos dias de risco, e as multas são altas. Na reciclagem, os ecopontos portugueses têm três cores: amarelo para plástico e metal, azul para papel e verde para vidro.',
      grammar_why:
        'A concordância difícil segue as mesmas regras na norma culta dos dois países. “Haver” no sentido de existir é impessoal e fica no singular: “houve incêndios”, nunca “houveram”; e o auxiliar acompanha: “deve haver soluções”, não “devem haver”. Na fala do Brasil, o “ter” toma esse lugar (“teve incêndios”); em Portugal, o “haver” continua vivo na fala. “Fazer” indicando tempo ou clima também é impessoal: “faz três anos”, “fazia quarenta graus”. Com “a maioria de” + plural, a norma aceita o verbo no singular ou no plural nos dois países (“a maioria dos habitantes votou/votaram”). Com o sujeito depois do verbo, o verbo concorda com ele: “chegaram os bombeiros”. Nos relativos, “cujo” concorda com o que vem depois e nunca leva artigo (“a serra cujas encostas”); “onde” é lugar fixo (“a aldeia onde moro”) e “aonde” é movimento com “ir”, “chegar” (“aonde vais?”), uma distinção da norma culta que a fala dos dois países costuma misturar.',
      grammar_examples: [
        ['Houve muitos incêndios florestais neste verão.', 'Houve muitos incêndios florestais neste verão. (na fala do Brasil: “teve muitos incêndios”)'],
        ['Faz três anos que não chove assim no Alentejo.', 'Faz três anos que não chove assim no Alentejo.'],
        ['Chegaram os bombeiros de todas as aldeias vizinhas.', 'Chegaram os bombeiros de todos os povoados vizinhos.'],
        ['A Madeira, cujas levadas atravessam a laurissilva, é ótima para caminhadas.', 'A Madeira, cujos canais atravessam a floresta de laurissilva, é ótima para trilhas.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u9-l1',
        title: 'Verão na serra: fogo e bombeiros',
        kind: 'licao',
        words: ['incêndio florestal', 'bombeiros', 'eucalipto', 'pinhal', 'seca', 'proteção civil'],
        cloze: [
          {
            sentence: 'Este verão ___ vários incêndios florestais no centro do país.',
            answer: 'houve',
            options: ['houve', 'houveram', 'tiveram'],
            translation: 'Neste verão houve vários incêndios florestais no centro do país.',
          },
          {
            sentence: 'Depois do alerta da proteção civil, ___ os bombeiros de três concelhos.',
            answer: 'chegaram',
            options: ['chegaram', 'chegou', 'chegava'],
            translation: 'Depois do alerta da defesa civil, chegaram os bombeiros de três municípios.',
          },
          {
            sentence: 'Já ___ quatro meses que não chove, e o pinhal está muito seco.',
            answer: 'faz',
            options: ['faz', 'fazem', 'fizeram'],
            translation: 'Já faz quatro meses que não chove, e o pinheiral está muito seco.',
          },
        ],
        voice: {
          bot: 'Ouvi dizer que houve um incêndio perto da tua aldeia. O que aconteceu?',
          botTranslation: 'Ouvi dizer que teve um incêndio perto do seu povoado. O que aconteceu?',
          expected: [
            'Houve um incêndio no pinhal, mas os bombeiros chegaram depressa. Fazia muito calor e já havia meses de seca.',
            'houve',
            'fazia',
            'havia',
          ],
          hint: '“Haver” no sentido de existir e “fazer” no sentido de tempo ficam sempre no singular: “houve incêndios”, “fazia quarenta graus”, “havia meses de seca”.',
        },
        communityPrompt:
          'Escreva 3 frases sobre um verão quente com “houve”, “faz… que” e um sujeito posposto no plural (“arderam muitos hectares”).',
      },
      {
        id: 'pt-u9-l2',
        title: 'O Alentejo: montado e cortiça',
        kind: 'licao',
        words: ['montado', 'sobreiro', 'cortiça', 'azinheira', 'planície', 'albufeira'],
        cloze: [
          {
            sentence: 'O sobreiro, ___ casca é a cortiça, é a árvore nacional de Portugal.',
            answer: 'cuja',
            options: ['cuja', 'cuja a', 'que a'],
            translation: 'O sobreiro, cuja casca é a cortiça, é a árvore nacional de Portugal.',
          },
          {
            sentence: 'Grande parte da cortiça do mundo ___ do montado alentejano.',
            answer: 'vem',
            options: ['vem', 'vêm', 'veem'],
            translation: 'Grande parte da cortiça do mundo vem dos bosques de sobreiros do Alentejo.',
          },
          {
            sentence: 'A albufeira ___ vamos no domingo fica no meio da planície.',
            answer: 'aonde',
            options: ['aonde', 'onde', 'cuja'],
            translation: 'A represa aonde vamos no domingo fica no meio da planície.',
          },
        ],
        voice: {
          bot: 'Nunca fui ao Alentejo. O que há lá para ver?',
          botTranslation: 'Nunca fui ao Alentejo. O que tem lá para ver?',
          expected: [
            'Há planícies enormes onde crescem sobreiros e azinheiras. O sobreiro, cuja casca é a cortiça, está por todo o lado.',
            'há',
            'onde crescem',
            'cuja',
          ],
          hint: 'Use “há” para dizer o que existe (nunca “hão” nem “têm”), “onde” para lugar fixo e “cujo/cuja” sem artigo depois.',
        },
        communityPrompt:
          'Escreva 3 frases sobre uma paisagem de que você gosta usando “cujo/cuja”, “onde” e “aonde”, cada um no lugar certo.',
      },
      {
        id: 'pt-u9-l3',
        title: 'Desafio de voz: levadas e vulcões',
        kind: 'voz',
        words: ['laurissilva', 'levada', 'vulcão', 'caldeira', 'fajã', 'trilho'],
        cloze: [
          {
            sentence: 'Nos Açores ___ nove ilhas, todas de origem vulcânica.',
            answer: 'há',
            options: ['há', 'hão', 'existe'],
            translation: 'Nos Açores há nove ilhas, todas de origem vulcânica.',
          },
          {
            sentence: 'A levada ___ caminhámos ontem atravessa a laurissilva.',
            answer: 'por onde',
            options: ['por onde', 'aonde', 'cuja'],
            translation: 'O canal por onde caminhamos ontem atravessa a floresta de laurissilva.',
          },
          {
            sentence: 'Deve ___ trilhos fechados depois das chuvas.',
            answer: 'haver',
            options: ['haver', 'haverem', 'ter'],
            translation: 'Deve haver trilhas fechadas depois das chuvas.',
          },
        ],
        voice: {
          bot: 'Vais à Madeira ou aos Açores nas férias? Aonde queres ir primeiro?',
          botTranslation: 'Você vai para a Madeira ou para os Açores nas férias? Aonde quer ir primeiro?',
          expected: [
            'Quero ir primeiro aos Açores, onde há caldeiras e fajãs lindíssimas. Depois vou à Madeira, cujas levadas quero percorrer.',
            'aos Açores',
            'onde há',
            'cujas levadas',
          ],
          hint: 'Use “onde há” para o que existe no lugar e “cujas” concordando com “levadas”. “Aonde” vai com verbo de movimento, como na pergunta.',
        },
        communityPrompt:
          'Grave-se descrevendo um passeio numa ilha: “há” + plural, um “aonde” com verbo de movimento, um “onde” de lugar fixo e um “cujo”.',
      },
      {
        id: 'pt-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Há quem diga que o clima está a mudar em Portugal. Qual é a tua opinião?',
          botTranslation: 'Tem gente que diz que o clima está mudando em Portugal. Qual é a sua opinião?',
          expected: [
            'Acho que sim: há cada vez mais secas e houve incêndios enormes nos últimos anos. Faz muito mais calor do que há vinte anos, e a maioria das pessoas já sente a diferença.',
            'há cada vez mais',
            'houve',
            'faz',
            'a maioria das pessoas',
          ],
          hint: 'Mantenha “haver” e “fazer” no singular (“houve incêndios”, “faz calor”). Com “a maioria das pessoas”, o verbo pode ir ao singular ou ao plural.',
        },
        communityPrompt:
          'Escreva 5 frases sobre o ambiente em Portugal ou no Brasil com: “houve”, “faz… anos”, “a maioria dos…” (diga se usou singular ou plural), um sujeito posposto e “cujo”.',
      },
    ],
  },
  {
    id: 'pt-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Cartas e e-mails formais: trabalho e burocracia',
    emoji: '✉️',
    card: {
      id: 'pt-c10',
      title: 'Do “Exmo. Senhor” ao “Com os melhores cumprimentos”',
      emoji: '🖋️',
      history:
        'O “você” nasceu de um tratamento de cerimônia: “vossa mercê” passou a “vosmecê” e depois a “você”. Talvez por isso, em Portugal, ele ainda pode soar distante, e o formal prefere “o senhor”, o título ou a 3ª pessoa sem pronome. No fim dos anos 1990 surgiram as primeiras Lojas do Cidadão, que juntam vários serviços públicos num só lugar, e em 2007 o Cartão de Cidadão começou a substituir o antigo bilhete de identidade. No Brasil, o Manual de Redação da Presidência da República aboliu fórmulas como “digníssimo” e simplificou a correspondência oficial.',
      culture_tip:
        'Em Portugal, quem tem licenciatura é tratado por “Senhor Doutor” ou “Senhora Doutora”, e os engenheiros por “Senhor Engenheiro”; numa carta, escreve-se “Exmo. Senhor Dr. Rui Costa” ou “Exma. Senhora Eng.ª Ana Lopes”. O e-mail formal termina com “Com os melhores cumprimentos”, onde no Brasil se usaria “Atenciosamente”. Nas repartições, tira-se uma “senha” e espera-se a vez.',
      grammar_why:
        'As formas de tratamento, como “Vossa Excelência” (V. Ex.ª), pedem o verbo e os pronomes na 3ª pessoa, embora comecem por “vossa”: “V. Ex.ª sabe”, “venho solicitar a V. Ex.ª que se digne…”. Essa regra de concordância vale nos dois países. A diferença está no uso: em Portugal, “V. Ex.ª” aparece em quase toda a correspondência formal; no Brasil, fica para altas autoridades, e para as demais pessoas se usa “Vossa Senhoria” ou simplesmente “o senhor”. A carta portuguesa usa fórmulas fixas: “venho por este meio” (no Brasil, “venho por meio desta”), “segue em anexo”, “agradeço desde já” e, no requerimento, “pede deferimento”. Os pronomes seguem a colocação europeia: ênclise (“envio-lhe”, “agradeço-lhe”) e, no registro mais cuidado, mesóclise (“enviá-lo-ei”). Datas e meses levam minúscula nos dois países: “Braga, 3 de março de 2026”.',
      grammar_examples: [
        ['Exma. Senhora Dra. Helena Marques,', 'Prezada Senhora Dra. Helena Marques, (no Brasil, “Prezada” é o vocativo mais comum)'],
        ['Venho, por este meio, solicitar a V. Ex.ª uma reunião.', 'Venho, por meio desta, solicitar a V. Sa. uma reunião.'],
        ['Agradeço-lhe desde já a atenção dispensada.', 'Agradeço desde já a atenção dispensada.'],
        ['Com os melhores cumprimentos,', 'Atenciosamente,'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u10-l1',
        title: 'A candidatura a um emprego',
        kind: 'licao',
        words: ['candidatura', 'currículo', 'entrevista', 'estágio', 'contrato a prazo', 'formação'],
        cloze: [
          {
            sentence: 'Exmo. Senhor Diretor, venho por este meio apresentar a minha ___ ao estágio.',
            answer: 'candidatura',
            options: ['candidatura', 'candidato', 'candidatar'],
            translation: 'Prezado Senhor Diretor, venho por meio desta apresentar minha candidatura ao estágio.',
          },
          {
            sentence: 'Caso V. Ex.ª o ___ necessário, poderei enviar os certificados de formação.',
            answer: 'considere',
            options: ['considere', 'considereis', 'consideres'],
            translation: 'Caso V. Sa. considere necessário, posso enviar os certificados dos cursos.',
          },
          {
            sentence: 'Quanto ao contrato a prazo, ___ assim que o receber.',
            answer: 'assiná-lo-ei',
            options: ['assiná-lo-ei', 'assinarei-o', 'o assinarei'],
            translation: 'Quanto ao contrato temporário, vou assiná-lo assim que o receber. (no Brasil culto também se escreve “o assinarei”)',
          },
        ],
        voice: {
          bot: 'Bom dia. Obrigada por ter vindo à entrevista. Fale-me um pouco da sua formação.',
          botTranslation: 'Bom dia. Obrigada por ter vindo à entrevista. Fale um pouco da sua formação.',
          expected: [
            'Bom dia, Senhora Doutora. Tenho uma licenciatura em Gestão e fiz um estágio de seis meses numa empresa do Porto.',
            'Senhora Doutora',
            'licenciatura',
            'estágio',
          ],
          hint: 'Numa entrevista em Portugal, trate a entrevistadora por “a senhora” ou pelo título (“Senhora Doutora”), nunca por “você”. “Licenciatura” é a graduação.',
        },
        communityPrompt:
          'Escreva o primeiro parágrafo de uma carta de candidatura com vocativo formal (Exmo./Exma.), “venho por este meio” e o verbo na 3ª pessoa para “V. Ex.ª”.',
      },
      {
        id: 'pt-u10-l2',
        title: 'Na Loja do Cidadão: requerimentos e papelada',
        kind: 'licao',
        words: ['requerimento', 'Loja do Cidadão', 'senha', 'autorização de residência', 'preencher', 'carimbo'],
        cloze: [
          {
            sentence: 'Para pedir a autorização de residência, é necessário ___ este requerimento.',
            answer: 'preencher',
            options: ['preencher', 'preenchimento', 'preenchido'],
            translation: 'Para pedir a autorização de residência, é necessário preencher este requerimento.',
          },
          {
            sentence: 'O requerente vem requerer a V. Ex.ª que ___ digne conceder-lhe a autorização de residência.',
            answer: 'se',
            options: ['se', 'vos', 'te'],
            translation: 'O requerente vem requerer a V. Sa. que se digne conceder-lhe a autorização de residência.',
          },
          {
            sentence: 'Queira tirar uma ___ e aguardar pela sua vez.',
            answer: 'senha',
            options: ['senha', 'ficha', 'carimbo'],
            translation: 'Por gentileza, retire uma senha e aguarde a sua vez.',
          },
        ],
        voice: {
          bot: 'Bom dia. Em que posso ajudar? Já preencheu o requerimento?',
          botTranslation: 'Bom dia. Em que posso ajudar? O senhor já preencheu o requerimento?',
          expected: [
            'Bom dia. Já o preenchi, sim. Venho entregar o requerimento da autorização de residência.',
            'já o preenchi',
            'venho entregar',
            'requerimento',
          ],
          hint: 'Depois de “já”, o pronome vem antes do verbo: “já o preenchi”. Diga o que vem fazer com “venho + infinitivo”, fórmula comum no atendimento formal.',
        },
        communityPrompt:
          'Escreva um requerimento curto com a fórmula portuguesa: “[Nome], residente em…, vem requerer a V. Ex.ª se digne…” e o fecho “Pede deferimento.”.',
      },
      {
        id: 'pt-u10-l3',
        title: 'Desafio de voz: reunião e e-mail formal',
        kind: 'voz',
        words: ['reunião', 'anexo', 'prazo', 'relatório', 'assinatura', 'orçamento'],
        cloze: [
          {
            sentence: 'Segue em ___ o relatório pedido na última reunião.',
            answer: 'anexo',
            options: ['anexo', 'anexa', 'anexos'],
            translation: 'Segue em anexo o relatório pedido na última reunião.',
          },
          {
            sentence: 'Seguem ___ o orçamento e a fatura, conforme combinado.',
            answer: 'anexos',
            options: ['anexos', 'anexo', 'anexas'],
            translation: 'Seguem anexos o orçamento e a nota fiscal, conforme combinado.',
          },
          {
            sentence: 'Informamos V. Ex.ª ___ que o prazo termina na próxima sexta-feira.',
            answer: 'de',
            options: ['de', 'a', 'em'],
            translation: 'Informamos V. Sa. de que o prazo termina na próxima sexta-feira.',
          },
        ],
        voice: {
          bot: 'Senhor Engenheiro, o prazo do relatório termina amanhã. Já tem tudo pronto?',
          botTranslation: 'Senhor Engenheiro, o prazo do relatório termina amanhã. O senhor já está com tudo pronto?',
          expected: [
            'Tenho, sim, Senhora Doutora. Envio-lhe hoje o relatório em anexo, com o orçamento e a minha assinatura.',
            'envio-lhe',
            'em anexo',
            'assinatura',
          ],
          hint: 'Use os títulos (Senhor Engenheiro, Senhora Doutora), a ênclise “envio-lhe” e a expressão fixa “em anexo”, que não varia.',
        },
        communityPrompt:
          'Grave-se lendo um e-mail formal completo: vocativo (Exmo. Senhor…), um pedido com “venho por este meio”, “segue em anexo” e o fecho “Com os melhores cumprimentos”.',
      },
      {
        id: 'pt-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Precisa de escrever à câmara municipal a pedir licença para uma esplanada. Como começaria e como terminaria o e-mail?',
          botTranslation: 'Você precisa escrever à prefeitura pedindo licença para pôr mesas na calçada. Como começaria e como terminaria o e-mail?',
          expected: [
            'Começaria por “Exmo. Senhor Presidente da Câmara Municipal”, escreveria “venho por este meio solicitar a V. Ex.ª a licença” e terminaria com “Com os melhores cumprimentos”.',
            'Exmo. Senhor',
            'venho por este meio',
            'V. Ex.ª',
            'com os melhores cumprimentos',
          ],
          hint: 'Vocativo com “Exmo.”, pedido com “venho por este meio” e “V. Ex.ª” (com o verbo na 3ª pessoa) e o fecho português. A “câmara municipal” é a prefeitura.',
        },
        communityPrompt:
          'Escreva um e-mail formal completo à câmara municipal: vocativo, apresentação, pedido com “V. Ex.ª” e o verbo na 3ª pessoa, um anexo mencionado e o fecho. Depois diga o que mudaria numa versão para uma prefeitura brasileira (Prezado Senhor, Atenciosamente).',
      },
    ],
  },
  {
    id: 'pt-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Gíria e expressões de Portugal',
    emoji: '😎',
    card: {
      id: 'pt-c11',
      title: 'Fixe, giro e bué',
      emoji: '🗣️',
      history:
        'A fala informal de Portugal muda de região para região: no Porto pede-se um “fino” e um “cimbalino”; em Lisboa, a mesma cerveja de pressão é uma “imperial” e o café expresso é uma “bica”. A gíria de Lisboa recebeu muitas palavras da fala de jovens ligados a Angola e a Cabo Verde, e “bué” (muito), que costuma ser associado ao português de Angola, é o exemplo mais citado. Há também expressões que parecem conhecidas e querem dizer outra coisa: em Portugal, “meter água” é fazer besteira, e “estar-se nas tintas” é não estar nem aí.',
      culture_tip:
        'Algumas palavras mudam de peso ao atravessar o Atlântico: em Portugal, “rapariga” é só moça, e “miúdo” ou “puto” é garoto, sem nenhuma carga ofensiva na boca de pais e avós. Já a gíria jovem (“bué”, “ya”, “bazar”) fica bem entre amigos, mas soa estranha numa reunião ou num e-mail formal. Na dúvida, “fixe” e “giro” são seguros em quase qualquer conversa do dia a dia.',
      grammar_why:
        'Gíria também tem gramática. Os adjetivos concordam normalmente: “um tipo porreiro”, “uma rapariga gira”, “uns amigos fixes”; já “bué” não varia (“bué de gente”, “bué da fixe”). As expressões com pronome seguem a colocação europeia: “Ele está-se nas tintas”, com o pronome depois do verbo, mas “Acho que ele se está nas tintas” e “Não te rales”, com o pronome antes, porque “que” e “não” puxam o pronome. Na 1ª pessoa do plural, o “s” cai antes de “-nos”: “desenrascamo-nos”. No Brasil diríamos “ele não está nem aí” e “a gente dá um jeito” — o sentido é o mesmo, mas a imagem muda.',
      grammar_examples: [
        ['O concerto foi bué da fixe!', 'O show foi muito legal!'],
        ['Acho que ele se está nas tintas para as notas.', 'Acho que ele não está nem aí para as notas.'],
        ['Meteste água ao mandar a mensagem ao grupo errado.', 'Você fez besteira ao mandar a mensagem para o grupo errado.'],
        ['Não te rales: a malta desenrasca-se.', 'Não esquenta: a galera dá um jeito.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u11-l1',
        title: 'Fixe, giro, brutal',
        kind: 'licao',
        words: ['fixe', 'porreiro', 'bué da fixe', 'giro', 'brutal', 'bestial'],
        cloze: [
          {
            sentence: 'Os teus amigos são mesmo ___: ajudaram-me nas mudanças.',
            answer: 'fixes',
            options: ['fixes', 'fixe', 'fixas'],
            translation: 'Seus amigos são muito legais: me ajudaram na mudança.',
          },
          {
            sentence: 'Que camisola tão ___! Onde a compraste?',
            answer: 'gira',
            options: ['gira', 'giro', 'giras'],
            translation: 'Que blusa mais bonita! Onde você comprou?',
          },
          {
            sentence: 'O teu primo é um tipo ___: está sempre pronto a ajudar.',
            answer: 'porreiro',
            options: ['porreiro', 'porreira', 'porreiros'],
            translation: 'Seu primo é um cara gente boa: está sempre pronto para ajudar.',
          },
        ],
        voice: {
          bot: 'Então, como foi o festival no fim de semana? Conta-me tudo!',
          botTranslation: 'E aí, como foi o festival no fim de semana? Me conta tudo!',
          expected: [
            'Foi brutal! A música era bué da fixe e a malta era toda porreira.',
            'brutal',
            'bué da fixe',
            'porreira',
          ],
          hint: 'Elogie com gíria de Portugal: “brutal”, “bué da fixe”, “porreiro” (e faça “porreiro” concordar com “a malta”).',
        },
        communityPrompt:
          'Escreva uma mensagem informal de 4 frases para um amigo de Lisboa contando um passeio, usando “fixe”, “giro” e “bué”, com a concordância certa (fixes, gira).',
      },
      {
        id: 'pt-u11-l2',
        title: 'Estar-se nas tintas',
        kind: 'licao',
        words: ['estar-se nas tintas', 'que seca', 'que chatice', 'estou farto', 'já cá faltava', 'tem piada'],
        cloze: [
          {
            sentence: 'O Rui ___ nas tintas para o que os outros pensam.',
            answer: 'está-se',
            options: ['está-se', 'se está', 'estás-te'],
            translation: 'O Rui não está nem aí para o que os outros pensam.',
          },
          {
            sentence: 'Acho que a Inês ___ nas tintas para a reunião de amanhã.',
            answer: 'se está',
            options: ['se está', 'está-se', 'está-lhe'],
            translation: 'Acho que a Inês não está nem aí para a reunião de amanhã.',
          },
          {
            sentence: 'A aula de ontem foi uma ___: duas horas a ouvir a mesma coisa.',
            answer: 'seca',
            options: ['seca', 'seco', 'secura'],
            translation: 'A aula de ontem foi um tédio: duas horas ouvindo a mesma coisa.',
          },
        ],
        voice: {
          bot: 'O comboio para o Porto foi cancelado outra vez. Vais ter de esperar mais duas horas.',
          botTranslation: 'O trem para o Porto foi cancelado de novo. Você vai ter que esperar mais duas horas.',
          expected: ['Já cá faltava! Que chatice, estou farto de esperar.', 'já cá faltava', 'que chatice', 'estou farto'],
          hint: 'Reaja com ironia (“já cá faltava” = era só o que faltava) e desabafe com “que chatice” e “estou farto”.',
        },
        communityPrompt:
          'Escreva um diálogo de 4 falas em que alguém reclama de um dia chato usando “que seca”, “estou farto” e “estar-se nas tintas” nas duas posições: depois do verbo (“está-se”) e antes, depois de “que” ou “não” (“se está”).',
      },
      {
        id: 'pt-u11-l3',
        title: 'Desafio de voz: desenrascar-se à portuguesa',
        kind: 'voz',
        words: ['desenrascar-se', 'baldar-se', 'à rasca', 'de borla', 'à pinha', 'a malta'],
        cloze: [
          {
            sentence: 'Não sabia a resposta, mas ___ e ninguém percebeu.',
            answer: 'desenrasquei-me',
            options: ['desenrasquei-me', 'me desenrasquei', 'desenrascou-me'],
            translation: 'Eu não sabia a resposta, mas dei um jeito e ninguém percebeu.',
          },
          {
            sentence: 'Ontem o Pedro ___ à aula de Matemática e foi ao cinema.',
            answer: 'baldou-se',
            options: ['baldou-se', 'se baldou', 'baldou-lhe'],
            translation: 'Ontem o Pedro matou a aula de Matemática e foi ao cinema.',
          },
          {
            sentence: 'Estou ___: o exame é amanhã e ainda não abri o livro.',
            answer: 'à rasca',
            options: ['à rasca', 'à pinha', 'de borla'],
            translation: 'Estou ferrado: a prova é amanhã e eu ainda nem abri o livro.',
          },
        ],
        voice: {
          bot: 'Epá, amanhã há um concerto de borla no Parque da Cidade, mas vai estar à pinha. Vens com a malta?',
          botTranslation: 'Nossa, amanhã tem um show de graça no Parque da Cidade, mas vai estar lotado. Você vem com a galera?',
          expected: ['Claro que vou! Se estiver à pinha, desenrascamo-nos.', 'claro que vou', 'à pinha', 'desenrascamo-nos'],
          hint: 'Aceite o convite e diga que vocês dão um jeito com “desenrascar-se”: na 1ª pessoa do plural fica “desenrascamo-nos”, sem o “s” antes de “-nos”.',
        },
        communityPrompt:
          'Conte em 4 frases uma situação em que você teve que improvisar, usando “desenrascar-se”, “à rasca” e “de borla”, com os pronomes na posição europeia.',
      },
      {
        id: 'pt-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Imagina que um amigo brasileiro chega a Lisboa e não percebe nada do que a malta diz. Explica-lhe três expressões.',
          botTranslation: 'Imagine que um amigo brasileiro chega a Lisboa e não entende nada do que a galera fala. Explique para ele três expressões.',
          expected: [
            'Olha, “fixe” é o nosso “legal”, “estar-se nas tintas” é “não estar nem aí” e “desenrascar-se” é “dar um jeito”.',
            'fixe',
            'estar-se nas tintas',
            'desenrascar-se',
          ],
          hint: 'Dê o equivalente brasileiro de cada expressão, tratando o amigo por “tu” (“Olha, …”).',
        },
        communityPrompt:
          'Escreva um pequeno glossário de 5 expressões informais de Portugal para brasileiros, com o equivalente no Brasil e uma frase de exemplo em português europeu para cada uma; diga também em que situação cada uma NÃO deve ser usada.',
      },
    ],
  },
  {
    id: 'pt-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Pontuação e coesão',
    emoji: '✒️',
    card: {
      id: 'pt-c12',
      title: 'Os porquês de cada lado do Atlântico',
      emoji: '❓',
      history:
        'O Acordo Ortográfico de 1990 aproximou a grafia de Portugal e do Brasil, mas deixou intactos vários hábitos de escrita, como a forma de escrever os porquês. Em Portugal, a pergunta direta usa “porque” junto (“Porque não vens?”), e o “porquê” acentuado aparece no fim da pergunta ou como substantivo; no Brasil, a pergunta começa com “por que” separado. Outras regras valem igualmente nos dois países: a vírgula não separa o sujeito do verbo, “mau” é o contrário de “bom” e “mal” é o contrário de “bem”. Na tipografia portuguesa, as aspas tradicionais são as angulares, « », enquanto no Brasil predominam as aspas curvas.',
      culture_tip:
        'Nos e-mails e cartas em Portugal, a despedida mais comum é “Cumprimentos,” ou “Com os melhores cumprimentos,”, seguida do nome. O vocativo vem sempre entre vírgulas: “Olá, Joana,” ou “Caro Miguel,”. Nas datas, escreve-se “Braga, 3 de março de 2026”, com vírgula depois do lugar, como no Brasil.',
      grammar_why:
        'Em Portugal: “Porque é que chegaste tarde?” e “Porque não vens?” (pergunta com “porque” junto); “Chegaste tarde porquê?” (no fim, com acento); “o porquê da decisão” (substantivo); “Cheguei tarde porque perdi o comboio” (resposta). O “por que” separado fica para “por que razão” e para o relativo (“o caminho por que passei” = pelo qual). No Brasil, a pergunta pede “por que”, e no fim “por quê”. Nos dois países: “há” indica tempo passado (“há dois anos”) e “a” indica futuro ou distância (“daqui a dois dias”, “a cem metros”); “aonde” vai com verbos de movimento (“Aonde vais?”) e “onde” com lugar fixo (“Onde estás?”). Conectores como “contudo”, “no entanto” e “além disso” ligam as frases e vêm entre vírgulas no meio do período.',
      grammar_examples: [
        ['Porque é que chegaste tão tarde?', 'Por que você chegou tão tarde?'],
        ['Chegaste tarde porquê?', 'Você chegou tarde por quê?'],
        ['Há dois anos que não o vejo, mas daqui a um mês vou visitá-lo.', 'Faz dois anos que não o vejo, mas daqui a um mês vou visitá-lo.'],
        ['Não é mau rapaz; só se portou mal.', 'Não é um mau menino; só se comportou mal.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u12-l1',
        title: 'A vírgula no sítio certo',
        kind: 'licao',
        words: ['vírgula', 'composição', 'sublinhar', 'rever', 'corrigir', 'já agora'],
        cloze: [
          {
            sentence: 'A professora de Português ___ a composição com cuidado.',
            answer: 'reviu',
            options: ['reviu', ', reviu', 'reveu'],
            translation: 'A professora de Português revisou a redação com cuidado.',
          },
          {
            sentence: 'Ó Marta___ podes sublinhar os erros a vermelho?',
            answer: ',',
            options: [',', ':', ';'],
            translation: 'Ô Marta, você pode sublinhar os erros de vermelho?',
          },
          {
            sentence: 'O texto está bem escrito; ___, falta corrigir a pontuação do último parágrafo.',
            answer: 'contudo',
            options: ['contudo', 'portanto', 'porque'],
            translation: 'O texto está bem escrito; contudo, falta corrigir a pontuação do último parágrafo.',
          },
        ],
        voice: {
          bot: 'Já corrigi a tua composição. Está bem escrita, mas puseste uma vírgula entre o sujeito e o verbo. Sabes qual é o problema?',
          botTranslation: 'Já corrigi a sua redação. Está bem escrita, mas você colocou uma vírgula entre o sujeito e o verbo. Sabe qual é o problema?',
          expected: [
            'Sei: a vírgula não separa o sujeito do verbo, por isso vou rever a frase.',
            'não separa o sujeito do verbo',
            'vou rever',
            'vírgula',
          ],
          hint: 'Explique a regra (sem vírgula entre sujeito e verbo) e diga que vai revisar a frase com “rever”.',
        },
        communityPrompt:
          'Escreva um parágrafo de 4 frases sobre a sua cidade usando “contudo”, “além disso” e “por isso”, com as vírgulas nos lugares certos e nenhuma entre sujeito e verbo.',
      },
      {
        id: 'pt-u12-l2',
        title: 'Porquês, mal e mau',
        kind: 'licao',
        words: ['porquê', 'mal', 'mau', 'mal-educado', 'maldisposto', 'mau feitio'],
        cloze: [
          {
            sentence: '___ é que não vieste ao jantar?',
            answer: 'Porque',
            options: ['Porque', 'Porquê', 'Por quê'],
            translation: 'Por que você não veio ao jantar?',
          },
          {
            sentence: 'Não vieste ao jantar ___?',
            answer: 'porquê',
            options: ['porquê', 'porque', 'por que'],
            translation: 'Você não veio ao jantar por quê?',
          },
          {
            sentence: 'Dormi ___ e acordei maldisposto.',
            answer: 'mal',
            options: ['mal', 'mau', 'má'],
            translation: 'Dormi mal e acordei indisposto.',
          },
        ],
        voice: {
          bot: 'O teu colega disse que foste mal-educado na reunião. Porquê?',
          botTranslation: 'Seu colega disse que você foi grosseiro na reunião. Por quê?',
          expected: [
            'Porque estava maldisposto e falei mal, mas não sou mau colega.',
            'porque estava maldisposto',
            'falei mal',
            'mau colega',
          ],
          hint: 'Responda com “porque” junto; use “mal” (advérbio, contrário de “bem”) e “mau” (adjetivo, contrário de “bom”).',
        },
        communityPrompt:
          'Escreva 4 frases em português europeu: uma pergunta com “Porque é que…?”, uma pergunta terminada em “porquê?”, uma frase com “mal” e outra com “mau”. Depois reescreva as duas perguntas como se escreveriam no Brasil.',
      },
      {
        id: 'pt-u12-l3',
        title: 'Desafio de voz: há, a, onde e aonde',
        kind: 'voz',
        words: ['onde', 'pelos vistos', 'por acaso', 'ao contrário', 'a propósito', 'apontamentos'],
        cloze: [
          {
            sentence: 'Vivo em Coimbra ___ cinco anos.',
            answer: 'há',
            options: ['há', 'a', 'à'],
            translation: 'Moro em Coimbra há cinco anos.',
          },
          {
            sentence: 'O exame de Português é daqui ___ duas semanas.',
            answer: 'a',
            options: ['a', 'há', 'à'],
            translation: 'A prova de Português é daqui a duas semanas.',
          },
          {
            sentence: '___ vais com esses apontamentos todos?',
            answer: 'Aonde',
            options: ['Aonde', 'Onde', 'Donde'],
            translation: 'Aonde você vai com todas essas anotações?',
          },
        ],
        voice: {
          bot: 'Há quanto tempo estudas em Braga? E quando acabas o curso?',
          botTranslation: 'Há quanto tempo você estuda em Braga? E quando termina a faculdade?',
          expected: [
            'Estudo em Braga há três anos e acabo o curso daqui a um ano.',
            'há três anos',
            'daqui a um ano',
            'estudo em Braga',
          ],
          hint: 'Tempo passado com “há”; tempo futuro com “daqui a”.',
        },
        communityPrompt:
          'Escreva 4 frases sobre a sua vida: duas com “há” (tempo passado), uma com “daqui a” e uma pergunta com “aonde”. Use também um conector: “pelos vistos”, “por acaso” ou “a propósito”.',
      },
      {
        id: 'pt-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Estou a rever o teu texto e encontrei três erros: “Não vieste porque?”, “um aluno mal” e “Moro aqui a dois anos”. Como se corrigem?',
          botTranslation: 'Estou revisando o seu texto e encontrei três erros: “Não vieste porque?”, “um aluno mal” e “Moro aqui a dois anos”. Como se corrigem?',
          expected: [
            'Deve ser “Não vieste porquê?”, “um mau aluno” e “Moro aqui há dois anos”.',
            'porquê',
            'mau aluno',
            'há dois anos',
          ],
          hint: '“Porquê” no fim da pergunta leva acento; “mau” acompanha substantivo; tempo passado pede “há”.',
        },
        communityPrompt:
          'Escreva um e-mail de 5 frases em português europeu para um professor de Lisboa explicando por que você faltou a uma aula. Use “porque”, “porquê”, “há”, “daqui a”, “mal” ou “mau” e dois conectores, com vocativo e despedida pontuados corretamente.',
      },
    ],
  },
  {
    id: 'pt-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'A lusofonia e as suas variedades',
    emoji: '🌍',
    card: {
      id: 'pt-c13',
      title: 'Uma língua, muitas vozes',
      emoji: '🗺️',
      history:
        'O português é língua oficial em nove países — Portugal, Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste e Guiné Equatorial — e é também língua oficial em Macau, ao lado do chinês. A Comunidade dos Países de Língua Portuguesa (CPLP) foi criada em Lisboa, em 1996. O português e o galego nasceram do mesmo tronco, o galego-português medieval, a língua das cantigas de amigo. Em Cabo Verde e na Guiné-Bissau, boa parte da vida cotidiana acontece em crioulos de base portuguesa, que são línguas próprias, e em Timor-Leste o português divide o estatuto de língua oficial com o tétum.',
      culture_tip:
        'Nenhuma variedade é “a verdadeira”: cada país tem sua norma, seu sotaque e seu vocabulário. Em Luanda, o “candongueiro” é a van de transporte coletivo e os “mais-velhos” são tratados com grande respeito; em Maputo, o ônibus é o “machimbombo”; em Cabo Verde, a “morabeza” é a hospitalidade de que o país se orgulha. Ao conversar com alguém de outro país lusófono, não corrija o sotaque: pergunte o sentido das palavras novas.',
      grammar_why:
        'As variedades diferem em vários níveis. Na pronúncia, o português de Lisboa reduz muito as vogais átonas (“telefone” soa quase “tlfone”), enquanto o do Brasil as mantém abertas, e as variedades africanas costumam ficar num meio-termo. Na sintaxe, Portugal usa a ênclise (“Diz-me”) e “estar a + infinitivo”, e o Brasil prefere a próclise (“Me diz”) e o gerúndio — que, aliás, também se ouve no Alentejo e no Algarve. No tratamento, o Brasil generalizou “você”, e Portugal distingue “tu”, “você” e “o senhor”. No vocabulário, cada país guarda termos próprios e empréstimos das línguas locais (quimbundo em Angola, ronga e changana em Moçambique). Nada disso é erro: são normas diferentes da mesma língua.',
      grammar_examples: [
        ['Estou a escrever ao meu primo de Luanda.', 'Estou escrevendo para o meu primo de Luanda.'],
        ['Em Maputo apanha-se o machimbombo; em Lisboa, o autocarro.', 'Em Maputo se pega o “machimbombo”; em Lisboa, o “autocarro”; no Brasil, o ônibus.'],
        ['Diz-me como se diz isto em crioulo cabo-verdiano.', 'Me diz como se fala isso em crioulo cabo-verdiano.'],
        ['O galego e o português partilham a mesma origem medieval.', 'O galego e o português compartilham a mesma origem medieval.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u13-l1',
        title: 'Um idioma, muitas pátrias',
        kind: 'licao',
        words: ['comunidade', 'imigrante', 'emigrante', 'língua', 'pronunciar', 'cultura'],
        cloze: [
          {
            sentence: 'Em Portugal diz-se “estou a estudar”; no Brasil, “estou ___”.',
            answer: 'estudando',
            options: ['estudando', 'a estudar', 'estudar'],
            translation: 'Em Portugal se diz “estou a estudar”; no Brasil, “estou estudando”.',
          },
          {
            sentence: 'Uma colega de Maputo ___ que lá o autocarro se chama “machimbombo”.',
            answer: 'disse-me',
            options: ['disse-me', 'me disse', 'disse-mo'],
            translation: 'Uma colega de Maputo me disse que lá o ônibus se chama “machimbombo”.',
          },
          {
            sentence: 'Em Portugal, a um desconhecido mais velho, é mais delicado perguntar: “O ___ quer um café?”',
            answer: 'senhor',
            options: ['senhor', 'você', 'tu'],
            translation: 'Em Portugal, para um desconhecido mais velho, é mais delicado perguntar: “O senhor quer um café?”',
          },
        ],
        voice: {
          bot: 'És do Brasil, não és? Na tua terra, como se diz “casa de banho” e “rapariga”?',
          botTranslation: 'Você é do Brasil, não é? Na sua terra, como se diz “casa de banho” e “rapariga”?',
          expected: ['Sou, sim. No Brasil diz-se “banheiro” e “moça”.', 'banheiro', 'moça', 'no Brasil diz-se'],
          hint: 'Responda com a ênclise europeia (“diz-se”) e dê as palavras brasileiras.',
        },
        communityPrompt:
          'Escreva 5 frases comparando o português de Portugal, o do Brasil e o de um país africano lusófono (pronúncia, uma palavra, uma construção), sem dizer que algum deles é “mais correto”.',
      },
      {
        id: 'pt-u13-l2',
        title: 'Ritmos da lusofonia',
        kind: 'licao',
        words: ['morna', 'funaná', 'semba', 'kizomba', 'marrabenta', 'timbila'],
        cloze: [
          {
            sentence: 'A morna, ___ melancolia lembra o fado, é Património Cultural Imaterial da Humanidade desde 2019.',
            answer: 'cuja',
            options: ['cuja', 'cujo', 'que a sua'],
            translation: 'A morna, cuja melancolia lembra o fado, é Patrimônio Cultural Imaterial da Humanidade desde 2019.',
          },
          {
            sentence: 'Se ___ a Maputo, não percas um concerto de marrabenta.',
            answer: 'fores',
            options: ['fores', 'ires', 'for'],
            translation: 'Se você for a Maputo, não perca um show de marrabenta.',
          },
          {
            sentence: 'A timbila, ___ pelos chopes no sul de Moçambique, é música de orquestras de xilofones de madeira.',
            answer: 'tocada',
            options: ['tocada', 'tocado', 'tocadas'],
            translation: 'A timbila, tocada pelos chopes no sul de Moçambique, é música de orquestras de xilofones de madeira.',
          },
        ],
        voice: {
          bot: 'Vamos a uma festa lusófona em Lisboa: vai haver morna, funaná e semba. Sabes de onde vem cada um?',
          botTranslation: 'Vamos a uma festa lusófona em Lisboa: vai ter morna, funaná e semba. Você sabe de onde vem cada um?',
          expected: ['A morna e o funaná vêm de Cabo Verde, e o semba vem de Angola.', 'Cabo Verde', 'Angola', 'semba'],
          hint: 'Morna e funaná são cabo-verdianos; semba e kizomba, angolanos; marrabenta e timbila, moçambicanas.',
        },
        communityPrompt:
          'Escolha um ritmo da lusofonia (morna, funaná, semba, kizomba ou marrabenta) e escreva 4 frases em português europeu apresentando-o, com uma oração com “cujo/cuja” e uma com o futuro do conjuntivo (“quando fores…”).',
      },
      {
        id: 'pt-u13-l3',
        title: 'Desafio de voz: do mar às comunidades',
        kind: 'voz',
        words: ['Descobrimentos', 'caravela', 'navegador', 'retornado', 'oceano', 'traduzir'],
        cloze: [
          {
            sentence: 'Em 1498, a armada de Vasco da Gama chegou ___ Calecute, na Índia.',
            answer: 'a',
            options: ['a', 'em', 'na'],
            translation: 'Em 1498, a armada de Vasco da Gama chegou a Calicute, na Índia.',
          },
          {
            sentence: 'Entre 1974 e 1976, centenas de milhares de retornados ___ a Portugal vindos de Angola e de Moçambique.',
            answer: 'regressaram',
            options: ['regressaram', 'regressou', 'regressassem'],
            translation: 'Entre 1974 e 1976, centenas de milhares de retornados voltaram a Portugal vindos de Angola e de Moçambique.',
          },
          {
            sentence: 'O português que se fala em Luanda ou em Díli não ___ de imitar o de Lisboa para ser legítimo.',
            answer: 'precisa',
            options: ['precisa', 'precisam', 'precise'],
            translation: 'O português que se fala em Luanda ou em Díli não precisa imitar o de Lisboa para ser legítimo.',
          },
        ],
        voice: {
          bot: 'No museu, um visitante pergunta-te: “Porque é que se fala português em tantos continentes?” O que lhe respondes?',
          botTranslation: 'No museu, um visitante te pergunta: “Por que se fala português em tantos continentes?” O que você responde?',
          expected: [
            'Porque, a partir dos Descobrimentos, Portugal fundou colónias em África, na América e na Ásia; a língua ficou e ganhou formas próprias em cada lugar.',
            'Descobrimentos',
            'colónias',
            'formas próprias',
          ],
          hint: 'Explique em tom neutro: navegações, colonização e, depois, variedades com vida própria. Em Portugal escreve-se “colónias” e diz-se “em África”.',
        },
        communityPrompt:
          'Escreva um parágrafo de 5 frases, em tom neutro e factual, sobre como o português chegou a um país de fora da Europa e como é falado lá hoje.',
      },
      {
        id: 'pt-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Um colega de Coimbra diz que o português do Brasil e o de Angola são “português mal falado”. Como lhe respondes, com argumentos?',
          botTranslation: 'Um colega de Coimbra diz que o português do Brasil e o de Angola são “português mal falado”. Como você responde a ele, com argumentos?',
          expected: [
            'Não concordo: são variedades com normas próprias, tão legítimas como a de Portugal; diferem na pronúncia, no vocabulário e na colocação dos pronomes, não na correção.',
            'variedades',
            'tão legítimas',
            'pronúncia',
          ],
          hint: 'Discorde com educação e dê pelo menos dois níveis de variação (pronúncia, vocabulário, sintaxe).',
        },
        communityPrompt:
          'Escreva um texto de 6 frases em português europeu defendendo que todas as variedades do português são legítimas, com exemplos de pelo menos três países e um conector de oposição (“no entanto”, “contudo”).',
      },
    ],
  },
  {
    id: 'pt-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Redação na norma culta',
    emoji: '📝',
    card: {
      id: 'pt-c14',
      title: 'Da dissertação à notícia',
      emoji: '🎓',
      history:
        'A Universidade de Coimbra foi fundada em 1290, no reinado de D. Dinis, e, depois de alternar entre Lisboa e Coimbra, fixou-se definitivamente em Coimbra em 1537; desde 2013, a Alta e a Sofia da universidade são Patrimônio Mundial da UNESCO. O mesmo D. Dinis é lembrado por ter adotado o português, no lugar do latim, nos documentos da sua chancelaria. O primeiro periódico noticioso português, a “Gazeta”, começou a circular em Lisboa em 1641. Hoje, o jornalismo e a escrita acadêmica dos dois países seguem normas muito próximas, com diferenças de vocabulário e de colocação dos pronomes.',
      culture_tip:
        'Em Portugal, o título de “Dr.” é usado para qualquer pessoa licenciada, e não só para médicos ou doutores. Na universidade, fala-se em “investigação” (pesquisa), “doutoramento” (doutorado) e “júri” (banca), e a defesa da tese chama-se “provas públicas”. Nos jornais portugueses, os títulos costumam vir no presente (“Governo aprova…”) e sem artigo inicial, como no Brasil.',
      grammar_why:
        'A escrita culta prefere a nominalização (“a análise dos dados” em vez de “analisar os dados”) e a impessoalidade com “se” (“Importa referir que…”, “Conclui-se que…”). Algumas armadilhas valem nos dois países: “trata-se de” não vai ao plural (“Trata-se de questões”); “haver” no sentido de existir é impessoal (“Há muitos leitores”); “implicar” no sentido de acarretar não pede “em” (“implica mudanças”); “preferir” constrói-se com “a” (“preferir isto àquilo”); “cujo” não leva artigo depois; e “onde” fica para lugares (“o relatório em que”, não “onde”). A diferença de Portugal está sobretudo nos pronomes: a mesóclise ainda é viva no registo formal (“realizar-se-á”), enquanto no Brasil é mais comum “será realizada” ou “se realizará”.',
      grammar_examples: [
        ['Trata-se de questões complexas, que exigem investigação rigorosa.', 'Trata-se de questões complexas, que exigem pesquisa rigorosa.'],
        ['A subida dos preços implica mudanças no orçamento das famílias.', 'A alta dos preços implica mudanças no orçamento das famílias.'],
        ['Importa referir que a análise dos dados se fará em duas fases.', 'Cabe mencionar que a análise dos dados será feita em duas fases.'],
        ['Governo aprova novo plano para a habitação', 'Governo aprova novo plano para a moradia (título de jornal)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u14-l1',
        title: 'Da tese ao júri',
        kind: 'licao',
        words: ['tese', 'dissertação', 'orientador', 'júri', 'doutoramento', 'catedrático'],
        cloze: [
          {
            sentence: 'Na presente dissertação, ___ de analisar a variação lexical no Alentejo.',
            answer: 'trata-se',
            options: ['trata-se', 'tratam-se', 'tratar-se-ão'],
            translation: 'Nesta dissertação, trata-se de analisar a variação lexical no Alentejo.',
          },
          {
            sentence: 'A defesa da tese de doutoramento ___ perante um júri presidido por um catedrático.',
            answer: 'realizar-se-á',
            options: ['realizar-se-á', 'realizará-se', 'realizar-se-ão'],
            translation: 'A defesa da tese de doutorado será realizada perante uma banca presidida por um professor titular.',
          },
          {
            sentence: 'O orientador sugeriu a ___ do capítulo teórico antes da entrega.',
            answer: 'revisão',
            options: ['revisão', 'rever', 'revisto'],
            translation: 'O orientador sugeriu a revisão do capítulo teórico antes da entrega.',
          },
        ],
        voice: {
          bot: 'Sou o presidente do júri. Pode apresentar, numa frase, o objetivo da sua dissertação?',
          botTranslation: 'Sou o presidente da banca. O senhor pode apresentar, numa frase, o objetivo da sua dissertação?',
          expected: [
            'O objetivo da presente dissertação é a análise da colocação dos pronomes na imprensa portuguesa e brasileira.',
            'o objetivo',
            'a análise',
            'presente dissertação',
          ],
          hint: 'Use o registro acadêmico: “a presente dissertação” e uma nominalização (“a análise de…”).',
        },
        communityPrompt:
          'Escreva o resumo de uma dissertação imaginária em 4 frases, em português europeu, com duas nominalizações, “trata-se de” e um verbo na mesóclise (“apresentar-se-ão”, “discutir-se-á”).',
      },
      {
        id: 'pt-u14-l2',
        title: 'A escrita jornalística',
        kind: 'licao',
        words: ['comunicação social', 'reportagem', 'manchete', 'imprensa', 'sondagem', 'jornalista'],
        cloze: [
          {
            sentence: 'Título do jornal: “Câmara do Porto ___ obras no centro histórico”.',
            answer: 'anuncia',
            options: ['anuncia', 'anunciou', 'anunciará'],
            translation: 'Título do jornal: “Prefeitura do Porto anuncia obras no centro histórico”.',
          },
          {
            sentence: 'Segundo uma sondagem publicada ontem, ___ cada vez mais leitores que preferem a imprensa digital.',
            answer: 'há',
            options: ['há', 'hão', 'haviam'],
            translation: 'Segundo uma pesquisa publicada ontem, há cada vez mais leitores que preferem a imprensa digital.',
          },
          {
            sentence: 'A reportagem, ___ autora recebeu um prémio, mostra a vida nas aldeias de Trás-os-Montes.',
            answer: 'cuja',
            options: ['cuja', 'cuja a', 'que a sua'],
            translation: 'A reportagem, cuja autora recebeu um prêmio, mostra a vida nas aldeias de Trás-os-Montes.',
          },
        ],
        voice: {
          bot: 'É jornalista numa rádio de Faro. Dê a notícia, em duas frases, da abertura de uma nova biblioteca na cidade.',
          botTranslation: 'O senhor é jornalista numa rádio de Faro. Dê a notícia, em duas frases, da abertura de uma nova biblioteca na cidade.',
          expected: [
            'Faro inaugura hoje uma nova biblioteca municipal. Segundo a Câmara, o espaço terá mais de vinte mil livros.',
            'inaugura',
            'biblioteca',
            'segundo a Câmara',
          ],
          hint: 'Lide de notícia: lugar e verbo no presente (“inaugura”), depois a fonte (“Segundo a Câmara…”).',
        },
        communityPrompt:
          'Transforme um fato da sua cidade numa notícia à portuguesa: um título no presente e um lide de 3 frases com uma fonte (“segundo…”), “haver” impessoal e uma oração com “cujo”.',
      },
      {
        id: 'pt-u14-l3',
        title: 'Desafio de voz: argumentar com dados',
        kind: 'voz',
        words: ['investigação', 'investigador', 'dados', 'estatística', 'observação', 'relatório'],
        cloze: [
          {
            sentence: 'Os resultados da investigação implicam ___ revisão da hipótese inicial.',
            answer: 'uma',
            options: ['uma', 'numa', 'em uma'],
            translation: 'Os resultados da pesquisa implicam uma revisão da hipótese inicial.',
          },
          {
            sentence: 'O relatório ___ foram apresentadas as conclusões será publicado em março.',
            answer: 'em que',
            options: ['em que', 'onde', 'que'],
            translation: 'O relatório em que foram apresentadas as conclusões será publicado em março.',
          },
          {
            sentence: 'A investigadora preferiu os métodos qualitativos ___ quantitativos.',
            answer: 'aos',
            options: ['aos', 'do que os', 'que os'],
            translation: 'A pesquisadora preferiu os métodos qualitativos aos quantitativos.',
          },
        ],
        voice: {
          bot: 'Os dados do seu relatório mostram que os jovens leem menos jornais em papel. Que conclusão tira daí?',
          botTranslation: 'Os dados do seu relatório mostram que os jovens leem menos jornais impressos. Que conclusão o senhor tira disso?',
          expected: [
            'Os dados indicam uma mudança de hábitos: a leitura não diminuiu, passou para o digital, o que implica repensar a imprensa.',
            'os dados indicam',
            'mudança de hábitos',
            'implica',
          ],
          hint: 'Apoie a conclusão nos dados e use “implicar” sem preposição (“implica repensar”).',
        },
        communityPrompt:
          'Escreva um parágrafo argumentativo de 5 frases em português europeu, a partir de uma estatística inventada, com “trata-se de”, “implicar” sem “em”, “preferir… a” e o conector “por conseguinte”.',
      },
      {
        id: 'pt-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tem de escrever para um jornal de Coimbra um artigo de opinião sobre o ensino da norma culta. Diga-me a sua tese e dois argumentos.',
          botTranslation: 'O senhor precisa escrever para um jornal de Coimbra um artigo de opinião sobre o ensino da norma culta. Diga a sua tese e dois argumentos.',
          expected: [
            'Defendo que a norma culta deve ser ensinada sem desvalorizar as variedades; em primeiro lugar, dá acesso aos textos oficiais; em segundo lugar, facilita a comunicação entre os países lusófonos.',
            'defendo que',
            'em primeiro lugar',
            'em segundo lugar',
          ],
          hint: 'Enuncie a tese (“Defendo que…”) e organize os argumentos com conectores (“em primeiro lugar”, “em segundo lugar”).',
        },
        communityPrompt:
          'Escreva uma dissertação curta (8 frases) em português europeu sobre um tema atual: introdução com a tese, dois argumentos com dados, uma objeção refutada com “não obstante” e uma conclusão com “por conseguinte”. Use ao menos uma nominalização e uma mesóclise.',
      },
    ],
  },
  {
    id: 'pt-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Literatura em língua portuguesa',
    emoji: '📜',
    card: {
      id: 'pt-c15',
      title: 'Minha pátria é a língua portuguesa',
      emoji: '🪶',
      history:
        'Luís de Camões publicou “Os Lusíadas” em 1572: dez cantos em oitava rima que narram a viagem de Vasco da Gama à Índia; o Dia de Portugal, a 10 de junho, lembra a data da sua morte, em 1580. Eça de Queirós retratou com ironia a sociedade lisboeta em “Os Maias” (1888), e Machado de Assis, primeiro presidente da Academia Brasileira de Letras, fundada em 1897, pôs um narrador morto a contar a própria vida em “Memórias Póstumas de Brás Cubas” (1881). Fernando Pessoa escreveu sob vários heterônimos, como Alberto Caeiro, Ricardo Reis e Álvaro de Campos, e “Mensagem” (1934) foi o único livro de poemas em português que publicou em vida.',
      culture_tip:
        'Em Portugal, versos de Camões e de Pessoa aparecem em placas, muros e discursos, e muita gente sabe de cor o começo de “Os Lusíadas”. Em Lisboa, a Casa Fernando Pessoa, no bairro de Campo de Ourique, funciona na casa onde o poeta viveu os últimos quinze anos de vida. Os provérbios também mudam um pouco de um lado para o outro: “Mais vale um pássaro na mão do que dois a voar” tem, no Brasil, “voando” no final.',
      grammar_why:
        'O texto literário usa recursos que a fala evita. A metáfora identifica duas coisas sem “como” (“Amor é fogo que arde sem se ver”); o paradoxo junta ideias opostas (“ferida que dói e não se sente”); a anáfora repete o início das frases (“Mudam-se os tempos, mudam-se as vontades”); o hipérbato inverte a ordem normal (“As armas e os barões assinalados… cantando espalharei”); e a apóstrofe chama alguém ou algo (“Ó mar salgado”). Na gramática, a literatura conserva o “vós” com a sua conjugação própria (“vós tendes”, “vós sois”), que hoje só sobrevive em textos antigos, orações e alguns falares do Norte de Portugal, e a mesóclise literária (“dir-se-ia”, “far-lhe-ei”), que no Brasil praticamente só aparece na escrita formal.',
      grammar_examples: [
        ['As armas e os barões assinalados, / Que da ocidental praia Lusitana, / Por mares nunca de antes navegados, / Passaram ainda além da Taprobana,', 'As armas e os barões ilustres que, da praia ocidental lusitana, por mares nunca antes navegados, passaram até além do Ceilão (Camões, “Os Lusíadas”, canto I)'],
        ['Mudam-se os tempos, mudam-se as vontades.', 'Mudam os tempos, mudam as vontades (Camões; anáfora).'],
        ['O poeta é um fingidor. / Finge tão completamente / Que chega a fingir que é dor / A dor que deveras sente.', 'O poeta é um fingidor: finge tão completamente que chega a fingir que é dor a dor que realmente sente (Pessoa, “Autopsicografia”).'],
        ['Mais vale um pássaro na mão do que dois a voar.', 'Mais vale um pássaro na mão do que dois voando.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pt-u15-l1',
        title: 'Camões e o mar',
        kind: 'licao',
        words: ['literatura', 'horizonte', 'navegar', 'cais', 'maresia', 'destino'],
        cloze: [
          {
            sentence: 'Mudam-se os tempos, ___ as vontades.',
            answer: 'mudam-se',
            options: ['mudam-se', 'se mudam', 'muda-se'],
            translation: 'Mudam os tempos, mudam as vontades.',
          },
          {
            sentence: 'Amor é fogo que arde sem se ___.',
            answer: 'ver',
            options: ['ver', 'vê', 'veja'],
            translation: 'O amor é um fogo que arde sem ser visto.',
          },
          {
            sentence: 'E ___, Tágides minhas, pois criado / Tendes em mi um novo engenho ardente…',
            answer: 'vós',
            options: ['vós', 'vocês', 'tu'],
            translation: 'E vocês, ninfas do Tejo, já que criaram em mim um novo talento ardente…',
          },
        ],
        voice: {
          bot: 'Estamos no cais de Belém, a olhar para o Tejo. Recita o primeiro verso de “Os Lusíadas” e diz-me o que Camões vai cantar.',
          botTranslation: 'Estamos no cais de Belém, olhando para o Tejo. Recite o primeiro verso de “Os Lusíadas” e me diga o que Camões vai cantar.',
          expected: [
            'As armas e os barões assinalados: Camões vai cantar os feitos dos navegadores portugueses.',
            'as armas e os barões assinalados',
            'navegadores',
            'feitos',
          ],
          hint: '“Barões assinalados” são os homens ilustres; o poema canta os feitos das navegações portuguesas.',
        },
        communityPrompt:
          'Escolha um verso de Camões citado nesta unidade e escreva 4 frases em português europeu explicando o sentido dele e a figura de linguagem que usa (metáfora, paradoxo, anáfora ou hipérbato).',
      },
      {
        id: 'pt-u15-l2',
        title: 'Eça e Machado: a arte da ironia',
        kind: 'licao',
        words: ['escritor', 'irónico', 'vaidoso', 'ingénuo', 'boémio', 'romântico'],
        cloze: [
          {
            sentence: 'Sobre a nudez forte da verdade — o manto ___ da fantasia.',
            answer: 'diáfano',
            options: ['diáfano', 'diáfana', 'diáfanos'],
            translation: 'Sobre a nudez forte da verdade, o manto transparente da fantasia (epígrafe de “A Relíquia”, de Eça).',
          },
          {
            sentence: 'Não tive filhos, não ___ a nenhuma criatura o legado da nossa miséria.',
            answer: 'transmiti',
            options: ['transmiti', 'transmitiu', 'transmitia'],
            translation: 'Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria (Machado, “Memórias Póstumas de Brás Cubas”).',
          },
          {
            sentence: 'No fim de “Os Maias”, Ega desabafa com Carlos: “___ a vida, menino!”',
            answer: 'Falhámos',
            options: ['Falhámos', 'Falhamos', 'Falharemos'],
            translation: 'No fim de “Os Maias”, Ega desabafa com Carlos: “Fracassamos na vida, menino!” (em Portugal, o pretérito leva acento: “falhámos”)',
          },
        ],
        voice: {
          bot: 'Diz-se que Eça e Machado eram mestres da ironia. Dá-me um exemplo de uma frase irónica de Machado de Assis.',
          botTranslation: 'Dizem que Eça e Machado eram mestres da ironia. Me dê um exemplo de uma frase irônica de Machado de Assis.',
          expected: [
            'Em “Quincas Borba”, Machado escreve “Ao vencedor, as batatas!”, uma frase irónica sobre a luta pela sobrevivência.',
            'ao vencedor, as batatas',
            'irónica',
            'Quincas Borba',
          ],
          hint: 'Lembre o lema do Humanitismo, a filosofia inventada em “Quincas Borba”: “Ao vencedor, as batatas!”.',
        },
        communityPrompt:
          'Compare em 5 frases a ironia de Eça de Queirós e a de Machado de Assis, escrevendo em português europeu e usando pelo menos uma mesóclise (“dir-se-ia”, “poder-se-ia”).',
      },
      {
        id: 'pt-u15-l3',
        title: 'Desafio de voz: Pessoa e a saudade',
        kind: 'voz',
        words: ['saudade', 'melancolia', 'mágoa', 'sonhar', 'imaginar', 'solidão'],
        cloze: [
          {
            sentence: 'Ó mar salgado, quanto do teu sal / São ___ de Portugal!',
            answer: 'lágrimas',
            options: ['lágrimas', 'ondas', 'saudades'],
            translation: 'Ó mar salgado, quanto do teu sal são lágrimas de Portugal! (Pessoa, “Mar Português”)',
          },
          {
            sentence: 'Valeu a pena? Tudo vale a pena / Se a alma não é ___.',
            answer: 'pequena',
            options: ['pequena', 'grande', 'serena'],
            translation: 'Valeu a pena? Tudo vale a pena se a alma não é pequena. (Pessoa, “Mar Português”)',
          },
          {
            sentence: 'Se o poeta ainda fosse vivo, ___ uma carta em verso.',
            answer: 'escrever-lhe-ia',
            options: ['escrever-lhe-ia', 'escreveria-lhe', 'lhe escrever-ia'],
            translation: 'Se o poeta ainda estivesse vivo, eu lhe escreveria uma carta em verso.',
          },
        ],
        voice: {
          bot: 'Pessoa escreveu, pela voz de Bernardo Soares: “Minha pátria é a língua portuguesa.” Que queria ele dizer, na tua opinião?',
          botTranslation: 'Pessoa escreveu, pela voz de Bernardo Soares: “Minha pátria é a língua portuguesa.” O que ele queria dizer, na sua opinião?',
          expected: [
            'Queria dizer que a sua pátria era a língua, mais do que o território: onde se fala português, ele sentia-se em casa.',
            'a língua',
            'mais do que o território',
            'em casa',
          ],
          hint: 'Interprete a frase do “Livro do Desassossego”: a língua como pátria, acima das fronteiras.',
        },
        communityPrompt:
          'Escreva um pequeno texto de 5 frases em português europeu sobre a saudade, com uma metáfora, uma apóstrofe (“Ó…”) e um verbo na mesóclise do condicional (“dir-se-ia”, “chamar-lhe-ia”).',
      },
      {
        id: 'pt-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Escolhe um verso de Camões ou de Pessoa, recita-o e identifica uma figura de linguagem.',
          botTranslation: 'Escolha um verso de Camões ou de Pessoa, recite-o e identifique uma figura de linguagem.',
          expected: [
            'Amor é fogo que arde sem se ver: é uma metáfora, porque identifica o amor com o fogo sem usar “como”.',
            'metáfora',
            'amor é fogo',
            'sem usar',
          ],
          hint: 'Cite o verso exato e nomeie a figura: metáfora, paradoxo, anáfora, hipérbato ou apóstrofe.',
        },
        communityPrompt:
          'Escreva um comentário de 8 frases em português europeu sobre um dos trechos desta unidade (Camões, Eça, Pessoa ou Machado): contexto da obra, sentido do trecho, duas figuras de linguagem e um provérbio que dialogue com ele.',
      },
    ],
  },
];
