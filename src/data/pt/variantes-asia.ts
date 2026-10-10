import type { LanguageVariant } from '../types';
import { ipaDe } from './tracos';

/**
 * Os dialetos do português na Ásia (decisão do dono, 09/10/2026): Timor-Leste, Macau e Goa. Todos
 * seguem a norma escrita de Portugal; o vocabulário vem no formato [Portugal, o lugar, explicação,
 * nota]. Nas histórias, o texto está no português de lá e a tradução no do Brasil.
 *
 * Fontes: Wikipédia em português («Português de Timor-Leste», «Português macaense», «Português de
 * Goa», consultadas em 09/10/2026) e o que elas citam: Albuquerque (2014) e Afonso & Goglia (2015)
 * para Timor; o censo de 2021 da DSEC para Macau; Marquilhas (1998) para Goa. Wikipédia em inglês
 * («Macanese Portuguese», «Goan Portuguese»).
 */
export const VARIANTS_PT_ASIA: LanguageVariant[] = [
  // ───────────────────────────── TIMOR-LESTE ─────────────────────────────
  {
    code: 'pt-TL',
    country: 'TLS',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: ipaDe('pt-TL', 'PT'),
    name: 'Português de Timor-Leste',
    flag: '🇹🇱',
    summary:
      'Língua oficial ao lado do tétum desde a independência, em 2002, depois de ter sido proibida durante a ocupação indonésia. Guarda palavras do português do século XVI, deu outros sentidos a muitas e tomou outras do tétum.',
    card: {
      id: 'pt-tl-c1',
      title: 'A língua da resistência',
      emoji: '🇹🇱',
      history:
        'O português chegou a Timor no século XVI e foi a língua da administração e da escola, ao lado do tétum e de outras línguas da ilha. Em 1975, a Indonésia ocupou o território e proibiu o português, impondo o indonésio: durante 24 anos, uma geração inteira estudou só nessa língua. O português sobreviveu como a língua da resistência, usada pela Fretilin e pelos outros movimentos nas comunicações internas e com o exterior. Com a independência, em 20 de maio de 2002, a Constituição o fez língua oficial, junto com o tétum. Segundo o censo de 2010, 23,5% dos timorenses falavam português; estimativas mais recentes falam em 30% a 40%. E 98% dos nomes próprios e 70% dos sobrenomes timorenses são portugueses.',
      culture_tip:
        'Em Timor, chama-se “maun” ao irmão ou amigo mais velho, e “mana” à irmã ou amiga mais velha: são palavras de respeito e carinho, vindas de “irmão” e “irmã”. O padre é o “amo”, e o professor da escola é o “mestre”. O tais, tecido tradicional feito à mão, é dado de presente nas cerimônias, posto ao pescoço de quem se quer homenagear.',
      grammar_why:
        'Os estudos de Albuquerque (2014) e de Afonso e Goglia (2015) mostram uma variedade nacional própria: o “já” antes do verbo como marca de aspecto (“Ele já chega muito cedo”), o “é que” usado de muitas formas, o “se” às vezes omitido e às vezes acrescentado, e preposições diferentes das de Portugal. O país não participou do Acordo Ortográfico de 1990, porque estava ocupado, mas aderiu em 2004 e ratificou-o em 2009; mesmo assim, o governo ainda usa a grafia de 1945 e segue a gramática europeia.',
      grammar_examples: [
        ['Bom dia, maun. Como está?', 'Bom dia, irmão. Como vai?'],
        ['O mestre deu-nos um bom valor no exame.', 'O professor nos deu uma boa nota na prova.'],
        ['Vamos ao bazar regatear um tais.', 'Vamos à feira pechinchar um tecido tradicional.'],
        ['O amo vai celebrar a missa no suco.', 'O padre vai celebrar a missa na aldeia.'],
        ['Ele já chega muito cedo.', 'Ele chega muito cedo (sempre).'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Vogais átonas menos reduzidas que em Lisboa: as sílabas fracas continuam a ouvir-se.',
      'Os sons chiados variam: o “ch” pode soar [s] ou [sʲ] (“bicho” [ˈbisu], “chá” [sʲa]); o “j” pode soar [z] ou [dʒ] (“ajuda” [aˈzuda] ou [aˈdʒuda]).',
      'O “lh” e o “nh” podem perder o som palatal: “velho” [ˈvelʲu], “vinho” [ˈvinʲu].',
      'Algumas palavras mudam de sílabas e de acento: “ouvir” pode soar [ˈovi], e “telemóvel” [telˈmɔvel].',
    ],
    vocab: [
      ['carro', 'carreta', 'carro; e também o arado', 'palavra do português do século XVI'],
      ['beleza', 'formosura', 'beleza', '“bonito” tem sentido mais atrevido'],
      ['pechinchar', 'regatear', 'pechinchar'],
      ['padre', 'amo', 'padre', '“amo-bispo” é o bispo'],
      ['feira, mercado popular', 'bazar', 'feira, mercado popular', '“mercado” é o supermercado'],
      ['trabalho', 'serviço', 'trabalho, profissão'],
      ['professor (da escola)', 'mestre', 'professor de escola', 'o da universidade é “docente”'],
      ['nota (do exame)', 'valor', 'nota de prova'],
      ['amigo íntimo', 'colega', 'amigo da mesma idade'],
      ['irmão mais velho', 'maun', 'irmão ou amigo mais velho (tratamento)'],
      ['tecido tradicional', 'tais', 'tecido tradicional tecido à mão', 'do tétum'],
      ['rei, chefe tradicional', 'liurai', 'rei, chefe tradicional', 'do tétum'],
      ['aldeia', 'suco', 'aldeia, divisão tradicional do território', 'do tétum'],
      ['vinho de palmeira', 'tua', 'vinho de palmeira', 'do tétum'],
      ['estrangeiro', 'malae', 'estrangeiro', 'do tétum'],
    ],
    stories: [
      {
        id: 'pt-tl-h1',
        variant: 'pt-TL',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Um tais no bazar de Díli',
        emoji: '🧣',
        summary: 'Em Díli, a mana Lúcia leva o Linu ao bazar para comprar um tais e ensina-o a regatear. No fim, sobem até ao Cristo Rei.',
        cultural_context:
          'Díli, a capital de Timor-Leste, fica à beira do mar, com montanhas atrás. Os tais são tecidos tradicionais feitos à mão, com desenhos diferentes em cada região; o tais é Patrimônio Cultural Imaterial em necessidade de salvaguarda urgente (UNESCO, 2021). No alto de um cabo, a leste da cidade, fica a grande estátua do Cristo Rei, a que se sobe por centenas de degraus.',
        start: 'start',
        glossary: [
          ['mana', 'irmã ou amiga mais velha'],
          ['bazar', 'feira, mercado popular'],
          ['tais', 'tecido tradicional'],
          ['regatear', 'pechinchar'],
          ['malae', 'estrangeiro'],
          ['formosura', 'beleza'],
        ],
        nodes: {
          start: {
            emoji: '🌄',
            text: 'De manhã, a mana Lúcia vem buscar o Linu. “Hoje vamos ao bazar. Queres levar um tais para casa? Mas atenção: no bazar, regateia-se sempre!”',
            translation: 'De manhã, a Lúcia vem buscar o Linu. “Hoje vamos à feira. Você quer levar um tecido tradicional para casa? Mas atenção: na feira, sempre se pechincha!”',
            choices: [
              { text: '“Quero! Ensinas-me a regatear?”', translation: '“Quero! Você me ensina a pechinchar?”', next: 'bazar' },
              {
                text: 'Linu pensa que vão a um supermercado.',
                translation: 'Linu pensa que vão a um supermercado.',
                wrong: 'Em Timor, “bazar” é a feira, o mercado popular ao ar livre. O supermercado é que se chama “mercado”!',
              },
            ],
          },
          bazar: {
            emoji: '🧺',
            text: 'O bazar está cheio de cor: frutas, peixe, legumes e bancas de tais pendurados. Uma vendedora sorri: “Bom dia, malae! Este tais é de Lospalos, feito à mão.”',
            translation: 'A feira está cheia de cor: frutas, peixe, legumes e barracas com tecidos pendurados. Uma vendedora sorri: “Bom dia, estrangeiro! Este tecido é de Lospalos, feito à mão.”',
            choices: [
              { text: 'Linu pergunta o preço.', translation: 'Linu pergunta o preço.', next: 'preco' },
              { text: 'Linu diz logo que fica com ele.', translation: 'Linu diz logo que vai levar.', next: 'logo' },
            ],
          },
          logo: {
            emoji: '😬',
            text: 'A mana Lúcia puxa-o pelo braço e cochicha: “Calma! Primeiro pergunta o preço e regateia. É assim que se faz, e a vendedora até gosta.”',
            translation: 'A Lúcia puxa o Linu pelo braço e cochicha: “Calma! Primeiro pergunte o preço e pechinche. É assim que se faz, e a vendedora até gosta.”',
            choices: [{ text: 'Linu pergunta o preço.', translation: 'Linu pergunta o preço.', next: 'preco' }],
          },
          preco: {
            emoji: '💵',
            text: '“Trinta dólares”, diz a vendedora. A mana Lúcia sussurra: “Oferece vinte.” O Linu oferece vinte, a vendedora ri-se e pede vinte e cinco. “Vinte e dois?”, tenta o Linu. “Está bem, malae!”',
            translation: '“Trinta dólares”, diz a vendedora. A Lúcia sussurra: “Ofereça vinte.” O Linu oferece vinte, a vendedora ri e pede vinte e cinco. “Vinte e dois?”, tenta o Linu. “Está bem, estrangeiro!”',
            choices: [
              { text: 'Linu compra o tais e põe-no ao pescoço.', translation: 'Linu compra o tecido e põe no pescoço.', next: 'cristo' },
              {
                text: 'Linu estranha que se pague em dólares.',
                translation: 'Linu estranha que se pague em dólares.',
                wrong: 'Não tem nada de estranho: a moeda oficial de Timor-Leste é mesmo o dólar dos Estados Unidos, usado desde 2000.',
              },
            ],
          },
          cristo: {
            emoji: '⛰️',
            text: 'À tarde, sobem os degraus até ao Cristo Rei. Lá de cima, o mar é azul-turquesa e a cidade fica pequenina. “Que formosura!”, diz a mana Lúcia. O Linu está cansado, mas feliz.',
            translation: 'À tarde, sobem os degraus até o Cristo Rei. Lá de cima, o mar é azul-turquesa e a cidade fica pequenininha. “Que beleza!”, diz a Lúcia. O Linu está cansado, mas feliz.',
            choices: [
              { text: 'Ficam a ver o pôr do sol.', translation: 'Ficam vendo o pôr do sol.', next: 'final_sol' },
              { text: 'Descem depressa porque o Linu tem calor.', translation: 'Descem depressa porque o Linu está com calor.', next: 'final_calor' },
            ],
          },
          final_sol: {
            emoji: '🌅',
            text: 'O sol desce sobre o mar de Timor. O Linu ajeita o tais ao pescoço. “Obrigado, mana”, diz ele. “Agora já sei regatear à timorense.”',
            translation: 'O sol desce sobre o mar de Timor. O Linu ajeita o tecido no pescoço. “Obrigado, Lúcia”, diz ele. “Agora já sei pechinchar do jeito timorense.”',
            ending: {
              tone: 'bom',
              title: 'Um tais de Lospalos',
              message: 'Você aprendeu “bazar”, “regatear”, “mana” e “malae”, e viu como o português de Timor guarda palavras antigas com sentidos próprios.',
            },
          },
          final_calor: {
            emoji: '🥵',
            text: 'O Linu desce a correr os degraus, à procura de sombra. Lá em baixo, compra uma água de coco e promete voltar ao Cristo Rei ao fim da tarde, quando refresca.',
            translation: 'O Linu desce correndo os degraus, procurando sombra. Lá embaixo, compra uma água de coco e promete voltar ao Cristo Rei no fim da tarde, quando esfria.',
            ending: {
              tone: 'neutro',
              title: 'Pinguim no trópico',
              message: 'O calor venceu desta vez. Em Timor, o melhor horário para subir é de manhã cedo ou no fim da tarde.',
            },
          },
        },
      },
      {
        id: 'pt-tl-h2',
        variant: 'pt-TL',
        level: 'B1.1',
        cefr: 'B1',
        title: 'Na escola do mestre Agostinho',
        emoji: '🏫',
        summary: 'Numa escola de Baucau, o Linu ajuda o mestre Agostinho numa aula de português e descobre por que a língua é tão importante em Timor.',
        cultural_context:
          'Baucau, no leste do país, é a segunda cidade de Timor-Leste. Nas escolas timorenses ensina-se em tétum e em português, as duas línguas oficiais; muitos professores vieram de Portugal e do Brasil depois da independência. Durante a ocupação indonésia (1975–1999), o português foi proibido no ensino.',
        start: 'start',
        glossary: [
          ['mestre', 'professor de escola'],
          ['aluno', 'estudante da escola'],
          ['valor', 'nota de prova'],
          ['serviço', 'trabalho'],
          ['maun', 'irmão mais velho (tratamento)'],
        ],
        nodes: {
          start: {
            emoji: '👨‍🏫',
            text: 'O mestre Agostinho recebe o Linu à porta da escola. “Bem-vindo! Hoje os alunos vão ler um texto em português. Podes ajudar-me?”',
            translation: 'O professor Agostinho recebe o Linu na porta da escola. “Bem-vindo! Hoje os alunos vão ler um texto em português. Você pode me ajudar?”',
            choices: [
              { text: '“Com muito gosto, mestre!”', translation: '“Com muito prazer, professor!”', next: 'aula' },
              {
                text: 'Linu acha que o mestre é um mestre de artes marciais.',
                translation: 'Linu acha que o mestre é um mestre de artes marciais.',
                wrong: 'Em Timor, “mestre” é o professor da escola. O professor da universidade é o “docente”.',
              },
            ],
          },
          aula: {
            emoji: '📖',
            text: 'Na sala, vinte alunos levantam-se e dizem em coro: “Bom dia, maun Linu!” O mestre explica: “Aqui, chamamos maun a quem é mais velho e merece respeito.” O Linu fica emocionado.',
            translation: 'Na sala, vinte alunos se levantam e dizem em coro: “Bom dia, irmão Linu!” O professor explica: “Aqui, a gente chama de maun quem é mais velho e merece respeito.” O Linu fica emocionado.',
            choices: [{ text: 'Começa a leitura.', translation: 'Começa a leitura.', next: 'leitura' }],
          },
          leitura: {
            emoji: '🗣️',
            text: 'Uma aluna, a Joana, lê em voz alta. Tropeça numa palavra difícil, mas continua. No fim, o mestre diz: “Muito bem! Se leres assim no exame, vais ter um bom valor.”',
            translation: 'Uma aluna, a Joana, lê em voz alta. Tropeça numa palavra difícil, mas continua. No fim, o professor diz: “Muito bem! Se você ler assim na prova, vai tirar uma boa nota.”',
            choices: [
              { text: 'Linu dá os parabéns à Joana.', translation: 'Linu dá os parabéns à Joana.', next: 'historia' },
              {
                text: 'Linu pensa que “valor” quer dizer dinheiro e que a Joana vai ser paga.',
                translation: 'Linu pensa que “valor” quer dizer dinheiro e que a Joana vai ganhar um pagamento.',
                wrong: 'Na escola timorense, “valor” é a nota da prova. O mestre está dizendo que a Joana vai tirar uma boa nota!',
              },
            ],
          },
          historia: {
            emoji: '🕯️',
            text: 'No intervalo, o mestre conta: “Quando eu era jovem, era proibido falar português na escola. Aprendi às escondidas, com o meu pai. A língua era um sinal de resistência. Hoje ensino-a aos meus alunos, livremente.”',
            translation: 'No intervalo, o professor conta: “Quando eu era jovem, era proibido falar português na escola. Aprendi escondido, com meu pai. A língua era um sinal de resistência. Hoje eu ensino para os meus alunos, livremente.”',
            choices: [
              { text: 'Linu pergunta como era a escola nesse tempo.', translation: 'Linu pergunta como era a escola naquela época.', next: 'final_bom' },
              { text: 'Linu volta para a sala para ajudar os alunos.', translation: 'Linu volta para a sala para ajudar os alunos.', next: 'final_sala' },
            ],
          },
          final_bom: {
            emoji: '🤝',
            text: 'O mestre fala dos anos difíceis e da alegria da independência, em 2002. “O meu serviço é este: dar aos miúdos as duas línguas, o tétum e o português.” O Linu promete voltar para mais uma aula.',
            translation: 'O professor fala dos anos difíceis e da alegria da independência, em 2002. “Meu trabalho é este: dar às crianças as duas línguas, o tétum e o português.” O Linu promete voltar para mais uma aula.',
            ending: {
              tone: 'bom',
              title: 'Duas línguas, um país',
              message: 'Você entendeu por que o português é tão simbólico em Timor-Leste, e aprendeu “mestre”, “valor” e “serviço” no sentido timorense.',
            },
          },
          final_sala: {
            emoji: '✏️',
            text: 'O Linu volta para a sala e ajuda os alunos com os exercícios. Não ouviu o resto da história do mestre, mas ganhou vinte amigos novos.',
            translation: 'O Linu volta para a sala e ajuda os alunos com os exercícios. Não ouviu o resto da história do professor, mas ganhou vinte amigos novos.',
            ending: {
              tone: 'neutro',
              title: 'Vinte amigos',
              message: 'Ajudar na aula foi bom. A história do mestre fica para outro intervalo.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── MACAU ─────────────────────────────
  {
    code: 'pt-MO',
    country: 'MAC',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    name: 'Português de Macau',
    flag: '🇲🇴',
    summary:
      'Língua oficial de Macau ao lado do chinês, nas placas das ruas, nos tribunais e nas leis, mas língua materna de só cerca de 4 mil pessoas. Muito parecido com o de Portugal, com palavras que só existem ali.',
    card: {
      id: 'pt-mo-c1',
      title: 'Placas em duas línguas',
      emoji: '🇲🇴',
      history:
        'Os portugueses fixaram-se em Macau, na costa sul da China, por volta de 1557, e o território ficou sob administração portuguesa até 20 de dezembro de 1999, quando passou para a China como Região Administrativa Especial. Mesmo durante esses quatro séculos, o português nunca foi a língua da maioria: em 1927, só 22 das 129 escolas de Macau o ensinavam. Desse contato nasceu também o patuá, um crioulo de base portuguesa dos macaenses, hoje quase extinto. Depois de 1999, o português continuou língua oficial, junto com o chinês, e no censo de 2021 cerca de 4 mil pessoas o tinham como língua materna. O número de estudantes de português, porém, cresce, porque Macau é uma ponte entre a China e os países de língua portuguesa.',
      culture_tip:
        'Em Macau, o português está por toda parte, mesmo para quem não o fala: as placas das ruas são bilíngues, em azulejo azul e branco (“Rua da Felicidade”, “Largo do Senado”), e o chão do centro é de calçada portuguesa em ondas pretas e brancas. Os macaenses, a comunidade de raízes portuguesas e asiáticas, têm uma cozinha própria, com pratos como o minchi e, no Natal, a alua.',
      grammar_why:
        'O português de Macau é muito próximo da norma europeia, e Macau não aderiu ao Acordo Ortográfico de 1990: mantém a grafia antiga (“facto”, “acção”). O que o distingue é o vocabulário da cidade, criado para coisas de lá: o “auto-silo”, a “casa de pasto”, o “panchão”. Entre quem o aprende tendo o cantonês como língua materna, ouvem-se traços próprios, como o “r” final do infinitivo que cai e o [ʒ] dito [ʃ].',
      grammar_examples: [
        ['Deixei o carro no auto-silo.', 'Deixei o carro no edifício-garagem.'],
        ['Almoçámos numa casa de pasto.', 'Almoçamos num restaurante simples.'],
        ['Vamos comer uma sopa de fitas.', 'Vamos comer uma sopa de macarrão.'],
        ['No Ano Novo Chinês rebentam os panchões.', 'No Ano-Novo Chinês estouram as bombinhas.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Entre os macaenses, a pronúncia é muito parecida com a de Portugal: vogais átonas reduzidas, “s” chiado e o “r” forte uvular.',
      'Entre quem tem o cantonês como língua materna, o “r” final do infinitivo cai (“comer” soa “comê”) e o [ʒ] passa a [ʃ] (“janela” soa “chanela”), um traço quase só de Macau.',
    ],
    vocab: [
      ['parque de estacionamento (edifício)', 'auto-silo', 'edifício-garagem'],
      ['tasca', 'casa de pasto', 'restaurante simples, de família'],
      ['sopa de massa', 'sopa de fitas', 'sopa de macarrão'],
      ['petardo, bombinha', 'panchão', 'bombinha chinesa'],
      ['agência imobiliária', 'fomento predial', 'imobiliária'],
      ['canja de arroz chinesa', 'canja', 'mingau de arroz salgado (o “congee”)'],
      ['quem vive num barco', 'tancareiro', 'quem vive e trabalha num barco'],
      ['bolo de Natal macaense', 'alua', 'doce macaense da ceia de Natal'],
      ['praça de alimentação', 'centro de comidas', 'praça de alimentação de mercado'],
    ],
    stories: [
      {
        id: 'pt-mo-h1',
        variant: 'pt-MO',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Calçada no Largo do Senado',
        emoji: '🌊',
        summary: 'Em Macau, a amiga Filomena mostra ao Linu as placas bilíngues, a calçada portuguesa do Largo do Senado e as Ruínas de São Paulo, com uma sopa de fitas no almoço.',
        cultural_context:
          'O Centro Histórico de Macau é Patrimônio Mundial da UNESCO desde 2005. O Largo do Senado, com a sua calçada portuguesa em ondas, leva às Ruínas de São Paulo, a fachada de pedra de uma igreja do século XVII que ardeu em 1835. As placas das ruas são em português e em chinês.',
        start: 'start',
        glossary: [
          ['auto-silo', 'edifício-garagem'],
          ['sopa de fitas', 'sopa de macarrão'],
          ['casa de pasto', 'restaurante simples'],
          ['calçada portuguesa', 'calçamento de pedras pretas e brancas'],
        ],
        nodes: {
          start: {
            emoji: '🚗',
            text: 'A Filomena estaciona o carro no auto-silo. “Daqui vamos a pé”, diz ela. Na rua, o Linu repara nas placas de azulejo: “Avenida de Almeida Ribeiro”, e por baixo, caracteres chineses.',
            translation: 'A Filomena estaciona o carro no edifício-garagem. “Daqui a gente vai a pé”, diz ela. Na rua, o Linu repara nas placas de azulejo: “Avenida de Almeida Ribeiro”, e embaixo, caracteres chineses.',
            choices: [
              { text: '“Todas as ruas têm nome em português?”', translation: '“Todas as ruas têm nome em português?”', next: 'placas' },
              {
                text: 'Linu acha que o auto-silo é uma fábrica de carros.',
                translation: 'Linu acha que o auto-silo é uma fábrica de carros.',
                wrong: 'Em Macau, “auto-silo” é o edifício-garagem, o estacionamento de vários andares. A Filomena só deixou o carro lá!',
              },
            ],
          },
          placas: {
            emoji: '🪧',
            text: '“Todas”, responde a Filomena. “O português é língua oficial, junto com o chinês. Mas pouca gente o fala em casa. Eu falo, porque a minha família é macaense.”',
            translation: '“Todas”, responde a Filomena. “O português é língua oficial, junto com o chinês. Mas pouca gente fala em casa. Eu falo, porque minha família é macaense.”',
            choices: [{ text: 'Seguem até ao Largo do Senado.', translation: 'Seguem até o Largo do Senado.', next: 'largo' }],
          },
          largo: {
            emoji: '⚫',
            text: 'No Largo do Senado, o chão é de calçada portuguesa, em ondas pretas e brancas, e os prédios são amarelos e verdes. “Parece Lisboa!”, diz o Linu. “Mas cheira a incenso e a bolinhos de peixe”, ri-se a Filomena.',
            translation: 'No Largo do Senado, o chão é de calçada portuguesa, em ondas pretas e brancas, e os prédios são amarelos e verdes. “Parece Lisboa!”, diz o Linu. “Mas tem cheiro de incenso e de bolinho de peixe”, ri a Filomena.',
            choices: [
              { text: 'Sobem até às Ruínas de São Paulo.', translation: 'Sobem até as Ruínas de São Paulo.', next: 'ruinas' },
              { text: 'Linu quer almoçar primeiro.', translation: 'Linu quer almoçar primeiro.', next: 'almoco' },
            ],
          },
          almoco: {
            emoji: '🍜',
            text: 'Numa casa de pasto pequena, comem uma sopa de fitas fumegante. “Em Portugal dizia-se sopa de massa”, explica a Filomena. “Aqui as fitas são compridas, como as da China.”',
            translation: 'Num restaurante pequeno, comem uma sopa de macarrão fumegante. “Em Portugal se diria sopa de massa”, explica a Filomena. “Aqui as fitas são compridas, como as da China.”',
            choices: [{ text: 'Depois do almoço, sobem às Ruínas.', translation: 'Depois do almoço, sobem até as Ruínas.', next: 'ruinas' }],
          },
          ruinas: {
            emoji: '⛪',
            text: 'No alto da escadaria, só resta a fachada de pedra de uma igreja enorme. “A igreja ardeu em 1835”, conta a Filomena. “Ficou só isto, e hoje é o símbolo de Macau.”',
            translation: 'No alto da escadaria, só sobrou a fachada de pedra de uma igreja enorme. “A igreja pegou fogo em 1835”, conta a Filomena. “Sobrou só isso, e hoje é o símbolo de Macau.”',
            choices: [
              { text: 'Linu tira uma fotografia com a Filomena.', translation: 'Linu tira uma foto com a Filomena.', next: 'final_foto' },
              { text: 'Linu está cansado da escadaria.', translation: 'Linu está cansado da escadaria.', next: 'final_cansado' },
              {
                text: 'Linu pergunta quando vão terminar de construir a igreja.',
                translation: 'Linu pergunta quando vão terminar de construir a igreja.',
                wrong: 'A igreja não está em obras: ela pegou fogo em 1835, e a fachada que ficou de pé é o que se visita hoje.',
              },
            ],
          },
          final_foto: {
            emoji: '📸',
            text: 'Tiram uma fotografia em frente à fachada. “Macau é assim”, diz a Filomena, “meio Portugal, meio China, e muito Macau.” O Linu concorda.',
            translation: 'Tiram uma foto na frente da fachada. “Macau é assim”, diz a Filomena, “meio Portugal, meio China, e muito Macau.” O Linu concorda.',
            ending: {
              tone: 'bom',
              title: 'Meio Portugal, meio China',
              message: 'Você conheceu o centro de Macau e palavras que só existem lá: auto-silo, casa de pasto, sopa de fitas.',
            },
          },
          final_cansado: {
            emoji: '🪜',
            text: 'O Linu senta-se nos degraus, sem fôlego. A Filomena traz-lhe um chá gelado: “São só umas dezenas de degraus, Linu!”',
            translation: 'O Linu se senta nos degraus, sem fôlego. A Filomena traz um chá gelado: “São só umas dezenas de degraus, Linu!”',
            ending: {
              tone: 'neutro',
              title: 'Degraus demais',
              message: 'A foto ficou para depois do descanso, mas as Ruínas de São Paulo não saem do lugar.',
            },
          },
        },
      },
      {
        id: 'pt-mo-h2',
        variant: 'pt-MO',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Minchi em casa da avó',
        emoji: '🥘',
        summary: 'A avó macaense da Filomena ensina o Linu a fazer minchi e fala do patuá, a língua antiga dos macaenses. Lá fora, rebentam os panchões do Ano Novo Chinês.',
        cultural_context:
          'Os macaenses são a comunidade de raízes portuguesas e asiáticas de Macau. A sua cozinha, que mistura sabores de Portugal, da China, da Índia e da Malásia, é Patrimônio Cultural Imaterial de Macau; o minchi, carne picada com batata e molho de soja, é o prato mais conhecido. O patuá macaense, um crioulo de base portuguesa, é hoje falado por muito poucas pessoas, quase todas idosas.',
        start: 'start',
        glossary: [
          ['minchi', 'prato macaense de carne picada com batata'],
          ['panchão', 'bombinha chinesa'],
          ['patuá', 'o crioulo dos macaenses'],
          ['macaense', 'da comunidade de raízes portuguesas e asiáticas de Macau'],
        ],
        nodes: {
          start: {
            emoji: '🧧',
            text: 'É Ano Novo Chinês. Na rua, rebentam panchões, e há envelopes vermelhos por todo o lado. Em casa, a avó da Filomena está na cozinha. “Entra, Linu! Hoje vais aprender a fazer minchi.”',
            translation: 'É Ano-Novo Chinês. Na rua, estouram bombinhas, e tem envelope vermelho por todo lado. Em casa, a avó da Filomena está na cozinha. “Entre, Linu! Hoje você vai aprender a fazer minchi.”',
            choices: [
              { text: '“O que leva o minchi?”', translation: '“O que vai no minchi?”', next: 'receita' },
              {
                text: 'Linu assusta-se com os panchões e pensa que é uma tempestade.',
                translation: 'Linu se assusta com as bombinhas e pensa que é uma tempestade.',
                wrong: 'Os “panchões” são as bombinhas chinesas. No Ano-Novo Chinês, estouram por toda a cidade para dar sorte!',
              },
            ],
          },
          receita: {
            emoji: '🥔',
            text: '“Carne picada, batata aos cubinhos frita, cebola e molho de soja”, enumera a avó. “E um ovo estrelado por cima, se quiseres. É comida de casa, de família macaense.”',
            translation: '“Carne moída, batata em cubinhos frita, cebola e molho de soja”, enumera a avó. “E um ovo frito por cima, se você quiser. É comida de casa, de família macaense.”',
            choices: [
              { text: 'Linu ajuda a cortar as batatas.', translation: 'Linu ajuda a cortar as batatas.', next: 'patua' },
              { text: 'Linu fica só a ver a avó cozinhar.', translation: 'Linu fica só olhando a avó cozinhar.', next: 'patua' },
            ],
          },
          patua: {
            emoji: '👵',
            text: 'Enquanto mexe a panela, a avó canta baixinho numa língua parecida com o português, mas diferente. “É o patuá”, explica a Filomena. “A língua dos macaenses antigos. Hoje quase ninguém a fala.”',
            translation: 'Enquanto mexe a panela, a avó canta baixinho numa língua parecida com o português, mas diferente. “É o patuá”, explica a Filomena. “A língua dos macaenses antigos. Hoje quase ninguém fala.”',
            choices: [
              { text: 'Linu pede à avó para lhe ensinar uma palavra.', translation: 'Linu pede à avó para ensinar uma palavra.', next: 'palavra' },
              {
                text: 'Linu conclui que o patuá é o mesmo que o cantonês.',
                translation: 'Linu conclui que o patuá é o mesmo que o cantonês.',
                wrong: 'O patuá é um crioulo de base portuguesa, nascido em Macau, com palavras do malaio, do cantonês e de outras línguas. O cantonês é outra língua!',
              },
            ],
          },
          palavra: {
            emoji: '💬',
            text: 'A avó sorri: “O patuá é a língua da minha avó. Eu já só me lembro das cantigas e de algumas palavras. Por isso é que é importante que alguém o estude e o guarde.”',
            translation: 'A avó sorri: “O patuá é a língua da minha avó. Eu só me lembro das cantigas e de algumas palavras. É por isso que é importante que alguém estude e guarde essa língua.”',
            choices: [
              { text: 'Sentam-se à mesa para comer o minchi.', translation: 'Sentam-se à mesa para comer o minchi.', next: 'final_mesa' },
              { text: 'Linu vai à janela ver os panchões.', translation: 'Linu vai à janela ver as bombinhas.', next: 'final_janela' },
            ],
          },
          final_mesa: {
            emoji: '🍽️',
            text: 'O minchi está salgadinho, com a batata estaladiça e o ovo a escorrer. “Bom apetite!”, diz a avó. O Linu promete nunca esquecer o sabor de Macau.',
            translation: 'O minchi está salgadinho, com a batata crocante e o ovo escorrendo. “Bom apetite!”, diz a avó. O Linu promete nunca esquecer o sabor de Macau.',
            ending: {
              tone: 'bom',
              title: 'O sabor macaense',
              message: 'Você conheceu a cozinha macaense e o patuá, uma língua de base portuguesa que hoje precisa de quem a guarde.',
            },
          },
          final_janela: {
            emoji: '🎆',
            text: 'Da janela, o Linu vê a rua cheia de fumo e de papel vermelho. Quando volta à mesa, o minchi já arrefeceu, mas a avó aquece-lhe outro prato com um sorriso.',
            translation: 'Da janela, o Linu vê a rua cheia de fumaça e de papel vermelho. Quando volta à mesa, o minchi já esfriou, mas a avó esquenta outro prato com um sorriso.',
            ending: {
              tone: 'neutro',
              title: 'Panchões à janela',
              message: 'Ver o Ano-Novo Chinês foi uma festa. O minchi quente ficou para o segundo prato.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── GOA ─────────────────────────────
  {
    code: 'pt-IN',
    country: 'IND',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    name: 'Português de Goa',
    flag: '🇮🇳',
    summary:
      'Durante mais de 450 anos, a língua da administração e da escola de Goa, na Índia. Hoje é falado por uma pequena comunidade, sobretudo católica e mais velha, e volta a ser estudado pelos jovens. Deixou a sua marca nos nomes, nas igrejas e na cozinha.',
    card: {
      id: 'pt-in-c1',
      title: 'Goa, a Roma do Oriente',
      emoji: '🇮🇳',
      history:
        'Afonso de Albuquerque conquistou Goa em 1510, e a cidade foi por mais de 450 anos a capital do Estado Português da Índia. Na administração e na escola usava-se o português, mas ele nunca se espalhou pela maioria da população: menos de 1,5% o tinha como língua materna, embora muitos o usassem como segunda língua. Em dezembro de 1961, a Índia anexou Goa, e o português perdeu o estatuto oficial; foi substituído pelo inglês e, desde 1987, pelo concani, a língua oficial do estado. O último jornal em português, “O Heraldo”, passou a sair em inglês em 1983. Hoje estimam-se cerca de 10 mil falantes, mas a Universidade de Goa tem mestrado em Estudos Portugueses desde 1988, e o número de jovens que aprendem a língua volta a crescer.',
      culture_tip:
        'Em Goa, o português é sinal de família antiga e de cultura: quem o fala, muitas vezes, aprendeu-o com os avós. A herança portuguesa está nos sobrenomes (Mascarenhas, Souza, Fernandes), nas casas com varandas e azulejos, nas igrejas brancas e na cozinha, que deu ao mundo o “vindalho”, da vinha-d’alhos portuguesa.',
      grammar_why:
        'A norma do português de Goa sempre foi a europeia, ensinada nas escolas até 1961, e há poucos estudos sobre a sua fala. Os linguistas discutem se chegou a formar-se em Goa um crioulo indo-português, como os de Damão, de Diu ou do Sri Lanka. Alguns acham que a pressão do português como língua oficial e de ensino o impediu; a linguista Rita Marquilhas (1998) fala de uma “descrioulização”, com vestígios na fala de algumas comunidades. O concani dos católicos, por sua vez, tem centenas de palavras portuguesas.',
      grammar_examples: [
        ['Bom dia, como está a senhora?', 'Bom dia, como a senhora vai?'],
        ['Ao domingo vamos à missa no Bom Jesus.', 'No domingo a gente vai à missa no Bom Jesus.'],
        ['A avó fez bebinca para o Natal.', 'A avó fez bebinca para o Natal.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A pronúncia de referência é a europeia, aprendida na escola e na família; há ainda poucos estudos sobre a pronúncia própria do português de Goa.',
      'Entre os falantes mais novos, que o aprendem como segunda ou terceira língua, a pronúncia mostra marcas do concani e do inglês.',
    ],
    vocab: [
      ['carne em vinha-d’alhos', 'vindalho', 'prato de porco em vinha-d’alhos e malagueta', 'deu o “vindaloo” dos restaurantes indianos do mundo todo'],
      ['sarrabulho', 'sorpotel', 'guisado de porco com miúdos', 'parente do sarapatel do Brasil'],
      ['caril', 'xacuti', 'caril com coco torrado'],
      ['aguardente', 'feni', 'aguardente de caju ou de coco'],
      ['doce de camadas', 'bebinca', 'doce de camadas com leite de coco e ovos', 'o doce do Natal goês'],
    ],
    stories: [
      {
        id: 'pt-in-h1',
        variant: 'pt-IN',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Domingo em Velha Goa',
        emoji: '⛪',
        summary: 'O Linu visita Velha Goa com a senhora Maria de Souza, que lhe mostra a Basílica do Bom Jesus e lhe fala da língua que aprendeu com os avós.',
        cultural_context:
          'Velha Goa foi a capital do Estado Português da Índia e chegou a ser chamada a “Roma do Oriente”. As suas igrejas e conventos são Patrimônio Mundial da UNESCO desde 1986. Na Basílica do Bom Jesus, do fim do século XVI, está o túmulo de São Francisco Xavier, o missionário jesuíta que morreu em 1552.',
        start: 'start',
        glossary: [
          ['Velha Goa', 'a antiga capital do Estado Português da Índia'],
          ['concani', 'a língua oficial de Goa'],
          ['bebinca', 'doce de camadas com leite de coco'],
        ],
        nodes: {
          start: {
            emoji: '🚌',
            text: 'É domingo. A senhora Maria de Souza, uma goesa de cabelos brancos, espera o Linu à porta da basílica. “Bom dia, menino! Fala português? Que alegria. Já ninguém fala comigo em português.”',
            translation: 'É domingo. Dona Maria de Souza, uma goesa de cabelo branco, espera o Linu na porta da basílica. “Bom dia, menino! Você fala português? Que alegria. Quase ninguém mais fala comigo em português.”',
            choices: [
              { text: '“Falo, sim! Onde aprendeu?”', translation: '“Falo, sim! Onde a senhora aprendeu?”', next: 'avos' },
              {
                text: 'Linu responde em inglês, achando que ninguém fala português em Goa.',
                translation: 'Linu responde em inglês, achando que ninguém fala português em Goa.',
                wrong: 'A dona Maria acabou de falar com o Linu em português! Em Goa ainda há uma pequena comunidade que fala a língua.',
              },
            ],
          },
          avos: {
            emoji: '👵',
            text: '“Com os meus avós”, conta ela. “Em casa falávamos português, e na rua concani. Depois de 1961, os meus filhos foram para a escola em inglês. Os netos já só sabem umas palavras.”',
            translation: '“Com os meus avós”, conta ela. “Em casa a gente falava português, e na rua concani. Depois de 1961, meus filhos foram para a escola em inglês. Os netos só sabem umas palavras.”',
            choices: [{ text: 'Entram na basílica.', translation: 'Entram na basílica.', next: 'basilica' }],
          },
          basilica: {
            emoji: '🕯️',
            text: 'Dentro, tudo brilha de ouro. A dona Maria aponta para um túmulo de prata: “Aqui está São Francisco Xavier. Vêm peregrinos de toda a Índia para o ver.”',
            translation: 'Lá dentro, tudo brilha de ouro. Dona Maria aponta para um túmulo de prata: “Aqui está São Francisco Xavier. Vêm peregrinos da Índia inteira para vê-lo.”',
            choices: [
              { text: 'Linu fica em silêncio, a olhar para o altar.', translation: 'Linu fica em silêncio, olhando para o altar.', next: 'saida' },
              { text: 'Linu pergunta quem foi São Francisco Xavier.', translation: 'Linu pergunta quem foi São Francisco Xavier.', next: 'xavier' },
            ],
          },
          xavier: {
            emoji: '⛵',
            text: '“Foi um missionário jesuíta que viajou pela Índia, pelo Japão e quase chegou à China. Morreu em 1552, numa ilha perto da costa chinesa, e trouxeram-no para cá.”',
            translation: '“Foi um missionário jesuíta que viajou pela Índia, pelo Japão e quase chegou à China. Morreu em 1552, numa ilha perto da costa chinesa, e o trouxeram para cá.”',
            choices: [{ text: 'Saem da basílica.', translation: 'Saem da basílica.', next: 'saida' }],
          },
          saida: {
            emoji: '🍰',
            text: 'Lá fora, a dona Maria tira da mala uma caixinha. “Fiz bebinca. Tem dezasseis camadas, leite de coco e muitos ovos. Prova!”',
            translation: 'Lá fora, dona Maria tira da bolsa uma caixinha. “Fiz bebinca. Tem dezesseis camadas, leite de coco e muitos ovos. Prove!”',
            choices: [
              { text: 'Linu prova e agradece em português.', translation: 'Linu prova e agradece em português.', next: 'final_bom' },
              { text: 'Linu diz que não gosta de coco.', translation: 'Linu diz que não gosta de coco.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '😊',
            text: '“Está deliciosa! Muito obrigado, dona Maria.” Ela sorri, comovida: “Obrigada eu, menino. Hoje falei a minha língua.”',
            translation: '“Está uma delícia! Muito obrigado, dona Maria.” Ela sorri, emocionada: “Obrigada eu, menino. Hoje eu falei a minha língua.”',
            ending: {
              tone: 'bom',
              title: 'A língua dos avós',
              message: 'Você conheceu Velha Goa e uma falante do português goês, uma língua que resiste nas famílias e volta a ser estudada.',
            },
          },
          final_neutro: {
            emoji: '🥥',
            text: 'A dona Maria guarda a bebinca, um pouco desapontada. “Então para a próxima faço-te um doce sem coco”, promete, com bondade.',
            translation: 'Dona Maria guarda a bebinca, um pouco desapontada. “Então da próxima vez eu faço um doce sem coco para você”, promete, com bondade.',
            ending: {
              tone: 'neutro',
              title: 'Sem coco',
              message: 'O Linu perdeu a bebinca, mas ganhou uma amiga em Goa.',
            },
          },
        },
      },
      {
        id: 'pt-in-h2',
        variant: 'pt-IN',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Fontainhas, o bairro latino',
        emoji: '🏘️',
        summary: 'Em Pangim, o estudante Rohan, que aprende português na universidade, leva o Linu pelas Fontainhas, o bairro das casas coloridas, até um restaurante de comida goesa.',
        cultural_context:
          'As Fontainhas, em Pangim (Panaji), a capital de Goa, são o bairro mais antigo da cidade, com casas pintadas de amarelo, azul e vermelho, varandas de madeira e nomes de rua em português. A Universidade de Goa tem mestrado em Estudos Portugueses desde 1988, e o Instituto Camões ensina a língua em Pangim.',
        start: 'start',
        glossary: [
          ['vindalho', 'prato de porco em vinha-d’alhos'],
          ['xacuti', 'caril com coco torrado'],
          ['feni', 'aguardente de caju'],
          ['concani', 'a língua oficial de Goa'],
        ],
        nodes: {
          start: {
            emoji: '🎓',
            text: 'O Rohan, estudante de Estudos Portugueses, espera o Linu numa esquina das Fontainhas. “Olá! Estou a aprender português há dois anos. A minha avó falava, mas eu só aprendi na universidade.”',
            translation: 'O Rohan, estudante de Estudos Portugueses, espera o Linu numa esquina das Fontainhas. “Oi! Estou aprendendo português há dois anos. Minha avó falava, mas eu só aprendi na universidade.”',
            choices: [
              { text: '“E porque decidiste aprender?”', translation: '“E por que você decidiu aprender?”', next: 'porque' },
              {
                text: 'Linu pensa que o Rohan é de Portugal.',
                translation: 'Linu pensa que o Rohan é de Portugal.',
                wrong: 'O Rohan é goês: aprendeu o português na Universidade de Goa, que tem um mestrado na língua desde 1988.',
              },
            ],
          },
          porque: {
            emoji: '💼',
            text: '“Para falar com a família, para ler os documentos antigos da minha aldeia, e para trabalhar com o Brasil e com Angola”, responde o Rohan. “E porque gosto: é a língua da história de Goa.”',
            translation: '“Para conversar com a família, para ler os documentos antigos da minha aldeia, e para trabalhar com o Brasil e com Angola”, responde o Rohan. “E porque eu gosto: é a língua da história de Goa.”',
            choices: [{ text: 'Passeiam pelo bairro.', translation: 'Passeiam pelo bairro.', next: 'bairro' }],
          },
          bairro: {
            emoji: '🎨',
            text: 'As casas são amarelas, azuis e vermelhas, com varandas de madeira. Nas esquinas, placas de azulejo dizem “Rua de Natal” e “Rua 31 de Janeiro”. Uma senhora rega as flores e cumprimenta-os em português.',
            translation: 'As casas são amarelas, azuis e vermelhas, com varandas de madeira. Nas esquinas, placas de azulejo dizem “Rua de Natal” e “Rua 31 de Janeiro”. Uma senhora rega as flores e cumprimenta os dois em português.',
            choices: [
              { text: 'Linu responde e conversa um pouco com ela.', translation: 'Linu responde e conversa um pouco com ela.', next: 'restaurante' },
              { text: 'Linu tira fotografias das casas.', translation: 'Linu tira fotos das casas.', next: 'restaurante' },
            ],
          },
          restaurante: {
            emoji: '🍛',
            text: 'Num pequeno restaurante, o Rohan pede vindalho e xacuti. “Sabes de onde vem a palavra vindalho? Da vinha-d’alhos portuguesa: carne em vinho e alho. Nós acrescentámos a malagueta!”',
            translation: 'Num pequeno restaurante, o Rohan pede vindalho e xacuti. “Sabe de onde vem a palavra vindalho? Da vinha-d’alhos portuguesa: carne no vinho com alho. A gente acrescentou a pimenta!”',
            choices: [
              { text: 'Linu prova o vindalho, que é bem picante.', translation: 'Linu prova o vindalho, que é bem apimentado.', next: 'final_picante' },
              { text: 'Linu prefere o xacuti, mais suave.', translation: 'Linu prefere o xacuti, mais suave.', next: 'final_suave' },
              {
                text: 'Linu acha que vindalho é uma palavra do inglês.',
                translation: 'Linu acha que vindalho é uma palavra do inglês.',
                wrong: 'O Rohan explicou: “vindalho” vem da vinha-d’alhos portuguesa. O inglês é que pegou a palavra de Goa, como “vindaloo”.',
              },
            ],
          },
          final_picante: {
            emoji: '🌶️',
            text: 'O vindalho queima a língua do pinguim, mas está delicioso. O Rohan ri-se e pede uma água: “Bem-vindo a Goa, Linu! Aqui o português também é picante.”',
            translation: 'O vindalho queima a língua do pinguim, mas está delicioso. O Rohan ri e pede uma água: “Bem-vindo a Goa, Linu! Aqui até o português é apimentado.”',
            ending: {
              tone: 'bom',
              title: 'Vinha-d’alhos com malagueta',
              message: 'Você conheceu as Fontainhas e viu como palavras portuguesas viajaram até Goa e voltaram ao mundo, como o “vindalho”.',
            },
          },
          final_suave: {
            emoji: '🥥',
            text: 'O xacuti é suave e cheira a coco torrado. O Linu gosta, mas fica curioso com o vindalho do Rohan. “Da próxima vez, provo o teu”, promete.',
            translation: 'O xacuti é suave e tem cheiro de coco torrado. O Linu gosta, mas fica curioso com o vindalho do Rohan. “Da próxima vez, eu provo o seu”, promete.',
            ending: {
              tone: 'bom',
              title: 'Xacuti para começar',
              message: 'Um começo suave na cozinha goesa. E o Linu aprendeu de onde vem o “vindalho”.',
            },
          },
        },
      },
    ],
  },
];
