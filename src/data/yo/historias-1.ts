import type { StorySeed } from '../types';

/** Histórias do A1.1 ao B1.3. */
export const STORIES_YO_1: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'yo-h01',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ẹ kú àárọ̀, Balógun!',
    emoji: '🍊',
    summary: 'No mercado de Balogun, em Lagos, o Linu cumprimenta uma vendedora do jeito certo e compra laranjas.',
    cultural_context:
      'O mercado de Balogun, na ilha de Lagos, é um dos maiores mercados de rua da Nigéria: são quarteirões inteiros de barracas de tecidos, sapatos, eletrônicos e comida. Entre os iorubás, cumprimentar é obrigatório, e com os mais velhos se usa «ẹ» (o senhor, a senhora) em vez de «o». Muitas vendedoras ainda põem uma fruta a mais no saco do freguês: é o «jara», o brinde da feira.',
    start: 'start',
    glossary: [
      ['Ẹ kú àárọ̀', 'Bom dia (com o «ẹ» de respeito: «é ku aarô»; o «ẹ» é aberto, como em «pé»)'],
      ['Ẹ káàbọ̀', 'Bem-vindo! (o «áà» é uma vogal longa que começa alta e desce)'],
      ['Ṣé dáadáa ni? / Dáadáa ni', 'Tudo bem? / Tudo bem (o «ṣ» soa como o «x» de «xícara»)'],
      ['Kí ni orúkọ rẹ? / Orúkọ mi ni…', 'Qual é o seu nome? / Meu nome é…'],
      ['ọsàn', 'laranja (o «ọ» é aberto, como o «ó» de «avó»)'],
      ['Mélòó?', 'Quantos? (tons: alto, baixo, baixo)'],
      ['ọ̀kan, méjì, mẹ́ta, mẹ́rin', 'um, dois, três, quatro'],
      ['ẹ̀bùn', 'presente'],
      ['Ẹ ṣé o! / Ó dìgbà!', 'Obrigado! / Até logo!'],
    ],
    nodes: {
      start: {
        emoji: '🌆',
        text: 'Èkó. Ọjà Balógun. Linu wà ní ọjà. Ọjà náà tóbi gan-an!',
        translation: 'Lagos. Mercado de Balogun. O Linu está no mercado. O mercado é enorme!',
        choices: [
          { text: 'Linu lọ sọ́dọ̀ ìyá ọlọ́sàn.', translation: 'O Linu vai até a vendedora de laranjas.', next: 'iya' },
          { text: 'Linu wo aṣọ.', translation: 'O Linu olha os tecidos.', next: 'aso' },
        ],
      },
      aso: {
        emoji: '🧵',
        text: 'Aṣọ pupa, aṣọ funfun, aṣọ dúdú… Ó lẹ́wà! Ṣùgbọ́n ebi ń pa Linu.',
        translation: 'Tecido vermelho, tecido branco, tecido preto… É lindo! Mas o Linu está com fome.',
        choices: [{ text: 'Linu lọ sọ́dọ̀ ìyá ọlọ́sàn.', translation: 'O Linu vai até a vendedora de laranjas.', next: 'iya' }],
      },
      iya: {
        emoji: '👩🏾',
        text: 'Ìyá ọlọ́sàn rẹ́rìn-ín: «Ẹ káàbọ̀! Ṣé dáadáa ni?»',
        translation: 'A vendedora de laranjas sorri: «Bem-vindo! Tudo bem?»',
        choices: [
          { text: '«Ẹ kú àárọ̀, ìyá! Dáadáa ni.»', translation: '«Bom dia, senhora! Tudo bem.»', next: 'oruko' },
          {
            text: '«Ó dìgbà, ìyá!»',
            translation: '«Até logo, senhora!»',
            wrong: 'A vendedora disse «Ẹ káàbọ̀» (bem-vindo) e perguntou «Ṣé dáadáa ni?» (tudo bem?). «Ó dìgbà» é despedida: o Linu iria embora sem comprar nada! Cumprimente: «Ẹ kú àárọ̀» e responda «Dáadáa ni».',
          },
        ],
      },
      oruko: {
        emoji: '🐧',
        text: '«Kí ni orúkọ rẹ?»',
        translation: '«Qual é o seu nome?»',
        choices: [{ text: '«Orúkọ mi ni Linu. Ẹyẹ ni mí!»', translation: '«Meu nome é Linu. Eu sou um pássaro!»', next: 'osan' }],
      },
      osan: {
        emoji: '🍊',
        text: '«Háà, ẹyẹ! Ọsàn mi dùn gan-an. Mélòó ni o fẹ́?»',
        translation: '«Olha só, um pássaro! Minhas laranjas são muito doces. Quantas você quer?»',
        choices: [
          { text: '«Mẹ́ta, ẹ jọ̀ọ́.»', translation: '«Três, por favor.»', next: 'ebun' },
          {
            text: '«Bẹ́ẹ̀ni, ọsàn!»',
            translation: '«Sim, laranja!»',
            wrong: 'Ela perguntou «Mélòó?» (quantas?), e não se ele queria laranja. A resposta é um número: ọ̀kan (uma), méjì (duas), mẹ́ta (três)…',
          },
        ],
      },
      ebun: {
        emoji: '🎁',
        text: 'Ìyá náà fún Linu ní ọsàn mẹ́ta. Ó sì fi ọ̀kan kún un: «Ẹ̀bùn ni!»',
        translation: 'A vendedora dá três laranjas ao Linu. E ainda põe mais uma: «É presente!»',
        choices: [
          { text: '«Ẹ ṣé o, ìyá! Ó dìgbà!»', translation: '«Obrigado, senhora! Até logo!»', next: 'final_bom' },
          { text: 'Linu jẹ ọsàn mẹ́rin lẹ́ẹ̀kan náà.', translation: 'O Linu come as quatro laranjas de uma vez.', next: 'final_ikun' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ìyá náà rẹ́rìn-ín: «Ó dìgbà o, Linu!» Linu ní ọ̀rẹ́ tuntun ní Balógun.',
        translation: 'A vendedora sorri: «Até logo, Linu!» O Linu tem uma amiga nova em Balogun.',
        ending: { tone: 'bom', title: 'Freguês de Balogun', message: 'O Linu cumprimentou com respeito, agradeceu e ganhou até uma laranja de brinde.' },
      },
      final_ikun: {
        emoji: '😵',
        text: 'Ọsàn mẹ́rin lẹ́ẹ̀kan náà! Nísisìyí inú ń run Linu.',
        translation: 'Quatro laranjas de uma vez! Agora o Linu está com dor de barriga.',
        ending: { tone: 'neutro', title: 'Laranja demais', message: 'Antes de devorar tudo, agradeça: «Ẹ ṣé o, ìyá!» E guarde uma laranja para depois.' },
      },
    },
  },
  {
    id: 'yo-h02',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ó wà!',
    emoji: '🚐',
    summary: 'O Linu pega um danfo, o micro-ônibus amarelo de Lagos, para ir à praia em Lekki, e precisa avisar a hora de descer.',
    cultural_context:
      'Os danfos são os micro-ônibus amarelos com faixas pretas que cortam Lagos. O cobrador vai pendurado na porta gritando o destino, e quem quer descer grita «Ó wà!» («tem gente aqui!»): sem esse grito, o motorista não para. Lekki é uma península a leste da ilha de Lagos, com praias no Atlântico. No trânsito lento da cidade, os lagosianos dizem «súnkẹrẹ-fàkẹrẹ», um nome que imita o carro andando aos trancos.',
    start: 'start',
    glossary: [
      ['ọkọ̀ dáńfó', 'o danfo, micro-ônibus de Lagos (ọkọ̀ = veículo; o «ọ» é aberto)'],
      ['kọ́ndọ́kítọ̀', 'cobrador (do inglês «conductor»)'],
      ['Ẹ jọ̀ọ́', 'Por favor (com respeito)'],
      ['Ṣé…?', 'partícula que abre uma pergunta de sim ou não'],
      ['Bẹ́ẹ̀ni / Rárá', 'Sim / Não'],
      ['wọlé / bọ́ sílẹ̀', 'entrar / descer (do veículo)'],
      ['Ó wà!', 'Vou descer aqui! (literalmente «há alguém», «tem»)'],
      ['òkun', 'mar, oceano (tons: baixo e médio)'],
    ],
    nodes: {
      start: {
        emoji: '🚐',
        text: 'Èkó. Ọkọ̀ dáńfó kan dé. Kọ́ndọ́kítọ̀ ń kígbe: «Lẹ́kí! Lẹ́kí! Ẹ wọlé!»',
        translation: 'Lagos. Chega um danfo. O cobrador grita: «Lekki! Lekki! Entrem!»',
        choices: [
          { text: '«Ẹ jọ̀ọ́, ṣé ọkọ̀ yìí ń lọ sí Lẹ́kí?»', translation: '«Por favor, este ônibus vai para Lekki?»', next: 'beere' },
          { text: 'Linu wọlé kíákíá.', translation: 'O Linu entra correndo.', next: 'inu' },
        ],
      },
      beere: {
        emoji: '🙋🏾',
        text: 'Kọ́ndọ́kítọ̀: «Bẹ́ẹ̀ni, Lẹ́kí ni! Wọlé, wọlé!»',
        translation: 'O cobrador: «Sim, é Lekki! Entra, entra!»',
        choices: [
          { text: 'Linu wọlé.', translation: 'O Linu entra.', next: 'inu' },
          {
            text: 'Linu dúró de ọkọ̀ mìíràn.',
            translation: 'O Linu espera outro ônibus.',
            wrong: 'O cobrador disse «Bẹ́ẹ̀ni» (sim) e «Lẹ́kí ni!» (é Lekki!). Este danfo vai exatamente para onde o Linu quer: é só entrar («wọlé»).',
          },
        ],
      },
      inu: {
        emoji: '🧳',
        text: 'Ọkọ̀ kún: ènìyàn méje, ẹrù púpọ̀, àti pẹ́ńgúìnì kan! Kọ́ndọ́kítọ̀: «Owó ọkọ̀ o!»',
        translation: 'O ônibus está lotado: sete pessoas, muita bagagem e um pinguim! O cobrador: «A passagem!»',
        choices: [{ text: 'Linu san owó ọkọ̀.', translation: 'O Linu paga a passagem.', next: 'ona' }],
      },
      ona: {
        emoji: '🚦',
        text: 'Ọkọ̀ ń lọ díẹ̀díẹ̀: súnkẹrẹ-fàkẹrẹ! Lẹ́yìn wákàtí kan, Linu rí òkun. Kọ́ndọ́kítọ̀: «Lẹ́kí nìyí! Ta ló ń bọ́ sílẹ̀?»',
        translation: 'O ônibus anda devagar: engarrafamento! Depois de uma hora, o Linu vê o mar. O cobrador: «Aqui é Lekki! Quem vai descer?»',
        choices: [
          { text: 'Linu kígbe: «Ó wà!»', translation: 'O Linu grita: «Vou descer!»', next: 'bosile' },
          { text: 'Ó rẹ Linu. Ó sùn.', translation: 'O Linu está cansado. Ele dorme.', next: 'final_sun' },
          {
            text: 'Linu kígbe: «Rárá!»',
            translation: 'O Linu grita: «Não!»',
            wrong: 'O cobrador perguntou «Ta ló ń bọ́ sílẹ̀?» (quem vai descer?). O Linu quer descer em Lekki, então deve gritar «Ó wà!». Gritando «Rárá» (não), o ônibus segue viagem.',
          },
        ],
      },
      bosile: {
        emoji: '🐚',
        text: 'Ọkọ̀ dúró. Linu bọ́ sílẹ̀. Òkun nìyí! Omi pọ̀, afẹ́fẹ́ sì tutù.',
        translation: 'O ônibus para. O Linu desce. Eis o mar! Muita água, e o vento está fresquinho.',
        choices: [{ text: 'Linu sáré lọ sí etí òkun.', translation: 'O Linu corre para a beira do mar.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌊',
        text: 'Linu wẹ̀ nínú òkun. «Omi yìí dára! Mo fẹ́ràn Èkó!»',
        translation: 'O Linu nada no mar. «Que água boa! Eu adoro Lagos!»',
        ending: { tone: 'bom', title: 'Parada certa', message: 'O Linu perguntou o destino, gritou «Ó wà!» na hora certa e chegou à praia.' },
      },
      final_sun: {
        emoji: '😴',
        text: 'Nígbà tí Linu jí, ọkọ̀ ti kọjá Lẹ́kí. Kọ́ndọ́kítọ̀ rẹ́rìn-ín: «Ẹyẹ, o ti kọjá!»',
        translation: 'Quando o Linu acorda, o ônibus já passou de Lekki. O cobrador ri: «Passarinho, você passou do ponto!»',
        ending: { tone: 'neutro', title: 'Passou do ponto', message: 'No danfo ninguém para se você não gritar «Ó wà!». Agora é pegar outro de volta.' },
      },
    },
  },
  {
    id: 'yo-h03',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Lórí Àpáta Olúmọ',
    emoji: '🪨',
    summary: 'Em Abeokutá, o Linu sobe a Rocha de Olumo com o guia Ṣọlá e vê a cidade inteira lá de cima.',
    cultural_context:
      'Abẹ́òkúta quer dizer «debaixo da rocha». A cidade foi fundada por volta de 1830 pelos egbás, que fugiam das guerras do século XIX e se abrigaram entre os rochedos do Olumo. Hoje a rocha, com cerca de 137 metros, tem degraus talhados na pedra, santuários e um elevador; lá de cima se veem os telhados da cidade e o rio Ogum (Ọ̀gùn). A quem está trabalhando, o iorubá diz «Ẹ kú iṣẹ́»: algo como «bom trabalho».',
    start: 'start',
    glossary: [
      ['àpáta', 'rocha (tons: baixo, alto, médio)'],
      ['Ẹ kú iṣẹ́', 'Bom trabalho! (cumprimento para quem está trabalhando)'],
      ['Ẹ kú alẹ́', 'Boa noite (cumprimento)'],
      ['ga', 'ser alto'],
      ['gun', 'subir, escalar'],
      ['àtẹ̀gùn', 'escada, degraus'],
      ['Ó rẹ̀ mí', 'Estou cansado («ó ré mí», com o «ẹ» aberto em tom baixo)'],
      ['odò', 'rio'],
      ['fò', 'voar'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Abẹ́òkúta. Àárọ̀ ni. Àpáta Olúmọ ga gan-an! Ọkùnrin kan wà níbẹ̀. Òun ni atọ́nà.',
        translation: 'Abeokutá. É de manhã. A Rocha de Olumo é altíssima! Há um homem ali. Ele é o guia.',
        choices: [
          { text: '«Ẹ kú iṣẹ́ o!»', translation: '«Bom trabalho!»', next: 'sola' },
          {
            text: '«Ẹ kú alẹ́!»',
            translation: '«Boa noite!»',
            wrong: '«Ẹ kú alẹ́» é cumprimento da noite, e o texto diz «Àárọ̀ ni» (é de manhã). Para quem está trabalhando, o certo é «Ẹ kú iṣẹ́» (bom trabalho) ou «Ẹ kú àárọ̀» (bom dia).',
          },
        ],
      },
      sola: {
        emoji: '🧑🏾',
        text: '«Ẹ ṣé o! Orúkọ mi ni Ṣọlá. Ẹ káàbọ̀ sí Olúmọ!»',
        translation: '«Obrigado! Meu nome é Ṣọlá. Bem-vindo ao Olumo!»',
        choices: [
          { text: 'Linu gun àtẹ̀gùn.', translation: 'O Linu sobe a escada.', next: 'ategun' },
          { text: 'Linu wo àpáta náà.', translation: 'O Linu olha a rocha.', next: 'wo' },
        ],
      },
      wo: {
        emoji: '👀',
        text: 'Àpáta náà ga, ó sì tóbi. Ọmọdé méjì ń gun ún.',
        translation: 'A rocha é alta e grande. Duas crianças estão subindo.',
        choices: [{ text: 'Linu náà gun àtẹ̀gùn.', translation: 'O Linu também sobe a escada.', next: 'ategun' }],
      },
      ategun: {
        emoji: '🪜',
        text: 'Ọ̀kan, méjì, mẹ́ta… Àtẹ̀gùn pọ̀! Ó rẹ Linu. Ṣọlá: «Ṣé o fẹ́ omi?»',
        translation: 'Um, dois, três… Quanto degrau! O Linu está cansado. Ṣọlá: «Você quer água?»',
        choices: [
          { text: '«Bẹ́ẹ̀ni, ẹ jọ̀ọ́!»', translation: '«Sim, por favor!»', next: 'omi' },
          { text: '«Rárá, mo wà dáadáa!»', translation: '«Não, estou bem!»', next: 'oke' },
        ],
      },
      omi: {
        emoji: '💧',
        text: 'Linu mu omi tútù. «Ẹ ṣé o, Ṣọlá!» Wọ́n tún ń gun.',
        translation: 'O Linu bebe água fresca. «Obrigado, Ṣọlá!» Eles voltam a subir.',
        choices: [{ text: 'Linu dé òkè.', translation: 'O Linu chega ao topo.', next: 'oke' }],
      },
      oke: {
        emoji: '🌅',
        text: 'Òkè nìyí! Linu rí gbogbo ìlú: ilé púpọ̀ àti odò Ọ̀gùn. Ṣọlá: «Ṣé o rí odò náà?»',
        translation: 'Chegamos ao topo! O Linu vê a cidade inteira: muitas casas e o rio Ogum. Ṣọlá: «Está vendo o rio?»',
        choices: [
          { text: '«Bẹ́ẹ̀ni! Ó lẹ́wà gan-an!»', translation: '«Sim! É muito bonito!»', next: 'final_bom' },
          { text: 'Linu fẹ́ fò sílẹ̀.', translation: 'O Linu quer voar lá para baixo.', next: 'final_fo' },
        ],
      },
      final_bom: {
        emoji: '📸',
        text: 'Ṣọlá ya fọ́tò Linu lórí Olúmọ. Linu dúpẹ́: «Ẹ ṣé o! Ó dìgbà!»',
        translation: 'Ṣọlá tira uma foto do Linu no alto do Olumo. O Linu agradece: «Obrigado! Até logo!»',
        ending: { tone: 'bom', title: 'No alto do Olumo', message: 'O Linu cumprimentou o guia do jeito certo e viu Abeokutá inteira lá de cima.' },
      },
      final_fo: {
        emoji: '🐧',
        text: 'Ṣọlá mú Linu: «Rárá o! Pẹ́ńgúìnì kò lè fò!» Wọ́n rẹ́rìn-ín, wọ́n sì gba àtẹ̀gùn sọ̀kalẹ̀.',
        translation: 'Ṣọlá segura o Linu: «Nada disso! Pinguim não voa!» Eles riem e descem pela escada.',
        ending: { tone: 'neutro', title: 'Pinguim não voa', message: 'Pássaro que não voa desce pela escada! Da próxima vez, aproveite a vista antes de descer.' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'yo-h04',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ọmọ Tuntun, Orúkọ Tuntun',
    emoji: '👶🏾',
    summary: 'Em Ogbomoxó, o Linu vai à cerimônia do nome do bebê da amiga Bímpé e aprende a responder aos votos do mais velho.',
    cultural_context:
      'Entre os iorubás, o bebê recebe o nome numa cerimônia, a ìsọmọlórúkọ, também chamada ìkọ̀mọjáde («a saída da criança»). Pela tradição, ela é feita no sétimo dia para as meninas, no nono para os meninos e no oitavo para os gêmeos; hoje quase todo mundo a faz no oitavo dia. Um mais velho encosta na boca do bebê mel (oyin), sal (iyọ̀), noz-de-cola (obì), orobô (orógbó) e água, com um voto para cada coisa, e todos respondem «Àṣẹ!», a palavra que o candomblé trouxe para o Brasil como «axé». O bebê costuma ganhar vários nomes, dados pelos pais, pelos avós e pelos tios.',
    start: 'start',
    glossary: [
      ['ìsọmọlórúkọ / ìkọ̀mọjáde', 'cerimônia do nome / «a saída da criança»'],
      ['ọmọ tuntun', 'bebê, recém-nascido (literalmente «criança nova»)'],
      ['O kú ìkúnlẹ̀!', 'Parabéns pelo parto! (dito à mãe; ìkúnlẹ̀ é o «ajoelhar-se», a antiga posição do parto)'],
      ['bàbá àgbà / ìyá àgbà', 'avô, ancião / avó, anciã (àgbà = mais velho)'],
      ['oyin / iyọ̀', 'mel / sal'],
      ['obì / orógbó', 'noz-de-cola / orobô (o mesmo «obi» e «orobô» do candomblé)'],
      ['Àṣẹ!', 'Assim seja! (a origem do nosso «axé»; o «ṣ» soa como «x»)'],
      ['Ayọ̀délé', 'nome: «a alegria chegou em casa» (ayọ̀ = alegria, dé = chegar, ilé = casa)'],
      ['ẹbí', 'família, parentes'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Ògbómọ̀ṣọ́. Ọ̀rẹ́ Linu, Bímpé, bí ọmọ tuntun. Ọjọ́ kẹjọ ni lónìí: ọjọ́ ìsọmọlórúkọ!',
        translation: 'Ogbomoxó. A amiga do Linu, a Bímpé, teve um bebê. Hoje é o oitavo dia: o dia da cerimônia do nome!',
        choices: [
          { text: 'Linu wọ aṣọ tuntun, ó sì lọ sí ilé Bímpé.', translation: 'O Linu veste uma roupa nova e vai à casa da Bímpé.', next: 'ile' },
          { text: 'Linu kọ́kọ́ ra ẹ̀bùn fún ọmọ náà.', translation: 'O Linu primeiro compra um presente para o bebê.', next: 'ebun' },
        ],
      },
      ebun: {
        emoji: '🎁',
        text: 'Linu ra aṣọ kékeré kan fún ọmọ náà. Aṣọ náà funfun, ó sì lẹ́wà.',
        translation: 'O Linu compra uma roupinha para o bebê. A roupa é branca e bonita.',
        choices: [{ text: 'Linu lọ sí ilé Bímpé.', translation: 'O Linu vai à casa da Bímpé.', next: 'ile' }],
      },
      ile: {
        emoji: '👨🏾‍👩🏾‍👧🏾',
        text: 'Ilé kún fún ènìyàn: bàbá Bímpé, màmá rẹ̀, ẹ̀gbọ́n rẹ̀, àbúrò rẹ̀… Bímpé jókòó pẹ̀lú ọmọ rẹ̀. Ọmọ náà ń sùn.',
        translation: 'A casa está cheia de gente: o pai da Bímpé, a mãe dela, o irmão mais velho, a irmã mais nova… A Bímpé está sentada com o bebê. O bebê está dormindo.',
        choices: [{ text: '«O kú ìkúnlẹ̀, Bímpé! Ọmọ rẹ lẹ́wà gan-an!»', translation: '«Parabéns pelo parto, Bímpé! Seu bebê é lindo demais!»', next: 'oyin' }],
      },
      oyin: {
        emoji: '🍯',
        text: 'Bàbá àgbà kan dìde. Ó fi oyin kan ẹnu ọmọ náà: «Ayé rẹ yóò dùn bí oyin!» Gbogbo ènìyàn dáhùn…',
        translation: 'Um senhor idoso se levanta. Ele encosta mel na boca do bebê: «Sua vida será doce como o mel!» Todo mundo responde…',
        choices: [
          { text: '«Àṣẹ!»', translation: '«Assim seja!»', next: 'oruko' },
          {
            text: '«Ẹ ṣé o, bàbá!»',
            translation: '«Obrigado, senhor!»',
            wrong: '«Ayé rẹ yóò dùn bí oyin» é um voto: «sua vida será doce como o mel!». A resposta a uma prece ou a um voto é «Àṣẹ!» (assim seja), e não «Ẹ ṣé o» (obrigado). É daí que vem o «axé» do candomblé.',
          },
        ],
      },
      oruko: {
        emoji: '📜',
        text: 'Lẹ́yìn iyọ̀, obì àti orógbó, bàbá àgbà bèèrè: «Kí ni orúkọ ọmọ yìí?» Bàbá ọmọ náà dáhùn: «Ayọ̀délé!» Ayọ̀ dé ilé!',
        translation: 'Depois do sal, da noz-de-cola e do orobô, o ancião pergunta: «Qual é o nome desta criança?» O pai do bebê responde: «Ayọ̀délé!» A alegria chegou em casa!',
        choices: [
          { text: '«Ayọ̀délé, o káàbọ̀ sí ayé!»', translation: '«Ayọ̀délé, bem-vindo ao mundo!»', next: 'ounje' },
          {
            text: '«Bímpé kékeré, o káàbọ̀!»',
            translation: '«Pequena Bímpé, bem-vinda!»',
            wrong: 'O pai disse que o nome do bebê é «Ayọ̀délé» (a alegria chegou em casa). Bímpé é o nome da mãe! «Kí ni orúkọ ọmọ yìí?» quer dizer «qual é o nome desta criança?».',
          },
        ],
      },
      ounje: {
        emoji: '🍛',
        text: 'Gbogbo ènìyàn ń kọrin, wọ́n sì ń jó. Oúnjẹ dé: ìrẹsì, dòdò àti ẹran. Màmá Bímpé sọ pé: «Linu, jẹun o!»',
        translation: 'Todo mundo canta e dança. A comida chega: arroz, banana-da-terra frita e carne. A mãe da Bímpé diz: «Linu, venha comer!»',
        choices: [
          { text: 'Linu jẹun, ó sì jó pẹ̀lú ẹbí náà.', translation: 'O Linu come e dança com a família.', next: 'final_bom' },
          { text: 'Linu gbé ọmọ náà, ó sì kọrin sókè.', translation: 'O Linu pega o bebê no colo e canta bem alto.', next: 'final_ekun' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Wọ́n jó títí di alẹ́. Bímpé sọ pé: «O ṣé o, Linu! Ìwọ náà ti di ẹbí wa.»',
        translation: 'Eles dançam até a noite. A Bímpé diz: «Obrigada, Linu! Agora você também é da família.»',
        ending: { tone: 'bom', title: 'Àṣẹ!', message: 'O Linu respondeu aos votos com «Àṣẹ!», gravou o nome do bebê e virou parte da família.' },
      },
      final_ekun: {
        emoji: '😭',
        text: 'Ayọ̀délé jí, ó sì bú sẹ́kún! Ìyá àgbà gbà á: «Ọmọ ń sùn, ẹyẹ!»',
        translation: 'O Ayọ̀délé acorda e cai no choro! A avó pega o bebê: «A criança estava dormindo, passarinho!»',
        ending: { tone: 'neutro', title: 'Choro de bebê', message: 'Um bebê de oito dias precisa de sossego. Da próxima vez, cante baixinho, ou vá dançar com a família.' },
      },
    },
  },
  {
    id: 'yo-h05',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Àmàlà ní Bódìjà',
    emoji: '🥘',
    summary: 'Em Ibadan, o Linu faz compras no mercado de Bodijá com a amiga Tọ́lá, aprende a pechinchar e termina num restaurante de amalá.',
    cultural_context:
      'O mercado de Bodijá é o grande mercado de alimentos de Ibadan, uma das maiores cidades da Nigéria. Ibadan é famosa pelo àmàlà, um purê escuro feito de farinha de inhame seco (èlùbọ́), servido com ewédú (sopa de folha de juta) e gbẹ̀gìrì (sopa de feijão): a trinca se chama àbùlà e se come com a mão direita. No iorubá, o àmàlà é a comida preferida de Xangô (Ṣàngó); no candomblé baiano, «amalá» virou o nome da comida de Xangô feita com quiabo. No mercado, pechinchar faz parte da conversa.',
    start: 'start',
    glossary: [
      ['ọjà', 'mercado'],
      ['èlùbọ́', 'farinha de inhame seco, com que se faz o àmàlà'],
      ['ata', 'pimenta'],
      ['Èló ni?', 'Quanto custa? (tons: baixo, alto, médio)'],
      ['Ó wọ́n jù!', 'Está caro demais!'],
      ['Ẹ dín in kù', 'Faça um desconto (literalmente «diminua»)'],
      ['ẹgbẹ̀rún méjì / ẹgbẹ̀rún kan ààbọ̀', 'dois mil / mil e quinhentos (ààbọ̀ = metade)'],
      ['àmàlà, ewédú, gbẹ̀gìrì', 'amalá, sopa de folha de juta, sopa de feijão («gb» se diz de uma vez, como um «g» e um «b» juntos)'],
      ['ọwọ́ ọ̀tún', 'mão direita'],
    ],
    nodes: {
      start: {
        emoji: '👩🏾‍🍳',
        text: 'Ìbàdàn. Linu wà ní ilé Tọ́lá. Màmá Tọ́lá sọ pé: «Linu, jọ̀ọ́, bá Tọ́lá lọ sí ọjà Bódìjà. Mo fẹ́ èlùbọ́ àti ata.»',
        translation: 'Ibadan. O Linu está na casa da Tọ́lá. A mãe da Tọ́lá diz: «Linu, por favor, vá com a Tọ́lá ao mercado de Bodijá. Eu quero farinha de inhame e pimenta.»',
        choices: [
          { text: 'Linu àti Tọ́lá lọ sí ọjà.', translation: 'O Linu e a Tọ́lá vão ao mercado.', next: 'oja' },
          {
            text: 'Linu lọ ra ẹja.',
            translation: 'O Linu vai comprar peixe.',
            wrong: 'A mãe da Tọ́lá pediu «èlùbọ́ àti ata»: farinha de inhame e pimenta. Peixe («ẹja») não está na lista!',
          },
        ],
      },
      oja: {
        emoji: '🧺',
        text: 'Ọjà Bódìjà kún fún oúnjẹ: iṣu, ẹ̀wà, tòmátì, ata pupa… Obìnrin kan ń ta èlùbọ́. «Ẹ káàbọ̀! Kí ni ẹ fẹ́?»',
        translation: 'O mercado de Bodijá está cheio de comida: inhame, feijão, tomate, pimenta vermelha… Uma mulher vende farinha de inhame. «Bem-vindos! O que vocês querem?»',
        choices: [{ text: '«Ẹ kú iṣẹ́, màmá! Mo fẹ́ èlùbọ́. Èló ni?»', translation: '«Bom trabalho, senhora! Quero farinha de inhame. Quanto custa?»', next: 'owo' }],
      },
      owo: {
        emoji: '💸',
        text: '«Ẹgbẹ̀rún méjì náírà ni.» Tọ́lá sọ kẹ́lẹ́ fún Linu: «Ó wọ́n jù!»',
        translation: '«São dois mil nairas.» A Tọ́lá cochicha para o Linu: «Está caro demais!»',
        choices: [
          { text: '«Ẹ jọ̀ọ́, màmá, ẹ dín in kù díẹ̀.»', translation: '«Por favor, senhora, faça um descontinho.»', next: 'dinku' },
          { text: 'Linu san ẹgbẹ̀rún méjì náírà.', translation: 'O Linu paga dois mil nairas.', next: 'ata' },
        ],
      },
      dinku: {
        emoji: '🤝🏾',
        text: 'Obìnrin náà rẹ́rìn-ín: «Ó dáa, ẹgbẹ̀rún kan ààbọ̀.» Linu san owó. Tọ́lá sọ pé: «O gbọ́n gan-an!»',
        translation: 'A mulher ri: «Está bem, mil e quinhentos.» O Linu paga. A Tọ́lá diz: «Você é esperto, hein!»',
        choices: [{ text: 'Wọ́n lọ ra ata.', translation: 'Eles vão comprar pimenta.', next: 'ata' }],
      },
      ata: {
        emoji: '🛒',
        text: 'Wọ́n ra ata pẹ̀lú. Nísisìyí ebi ń pa wọ́n. Tọ́lá sọ pé: «Jẹ́ ká jẹ àmàlà! Àmàlà Ìbàdàn ló dùn jù.»',
        translation: 'Eles compram a pimenta também. Agora estão com fome. A Tọ́lá diz: «Vamos comer amalá! O amalá de Ibadan é o mais gostoso.»',
        choices: [
          { text: '«Ó dáa! Jẹ́ ká lọ!»', translation: '«Beleza! Vamos!»', next: 'buka' },
          { text: '«Rárá, jẹ́ ká padà sí ilé.»', translation: '«Não, vamos voltar para casa.»', next: 'final_ile' },
        ],
      },
      buka: {
        emoji: '🍲',
        text: 'Ní búkà, Tọ́lá sọ pé: «Àmàlà, ewédú àti gbẹ̀gìrì, ẹ jọ̀ọ́.» Obìnrin búkà bèèrè: «Ṣé ẹ fẹ́ ẹran tàbí ẹja?»',
        translation: 'No restaurante popular, a Tọ́lá diz: «Amalá, ewédú e gbẹ̀gìrì, por favor.» A mulher do restaurante pergunta: «Vocês querem carne ou peixe?»',
        choices: [
          { text: '«Ẹja, ẹ jọ̀ọ́!»', translation: '«Peixe, por favor!»', next: 'final_bom' },
          { text: '«Ẹran, ẹ jọ̀ọ́!»', translation: '«Carne, por favor!»', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '😋',
        text: 'Linu fi ọwọ́ ọ̀tún jẹ àmàlà bí Tọ́lá. «Háà, ó dùn gan-an!» Lẹ́yìn náà, wọ́n gbé èlùbọ́ àti ata lọ fún Màmá.',
        translation: 'O Linu come o amalá com a mão direita, igual à Tọ́lá. «Nossa, que delícia!» Depois, eles levam a farinha e a pimenta para a mãe.',
        ending: { tone: 'bom', title: 'Àbùlà no ponto', message: 'O Linu fez as compras certas, pechinchou e provou o amalá mais famoso da Nigéria.' },
      },
      final_ile: {
        emoji: '🏠',
        text: 'Wọ́n padà sí ilé. Màmá Tọ́lá se àmàlà, ó sì dùn. Ṣùgbọ́n Linu kò rí búkà Ìbàdàn.',
        translation: 'Eles voltam para casa. A mãe da Tọ́lá faz amalá, e está gostoso. Mas o Linu não conheceu os restaurantes de Ibadan.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'O amalá de casa é ótimo, mas os restaurantes de Ibadan são uma instituição. Da próxima vez, diga «Jẹ́ ká lọ!».' },
      },
    },
  },
  {
    id: 'yo-h06',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Àkàrà ní Bàhíà',
    emoji: '🧆',
    summary: 'No Rio Vermelho, em Salvador, a amiga nigeriana Ṣadé reconhece num tabuleiro de baiana um velho conhecido: o àkàrà.',
    cultural_context:
      'O acarajé vem do àkàrà iorubá, o bolinho de feijão-fradinho descascado, batido e frito. O nome costuma ser explicado como «àkàrà» + «jẹ» (comer): «venha comer àkàrà!», como se anunciava na rua. Na Nigéria, o àkàrà é pequeno e se come no café da manhã com ẹ̀kọ (mingau de milho) ou pão; na Bahia, frito no dendê (epo pupa), aberto e recheado com vatapá, caruru e camarão seco, é também comida de Iansã (Ọya) no candomblé. O ofício das baianas de acarajé, com a roupa branca e o torço na cabeça, é patrimônio imaterial do Brasil, e o Rio Vermelho, bairro à beira-mar de Salvador, tem alguns dos tabuleiros mais famosos.',
    start: 'start',
    glossary: [
      ['àkàrà', 'bolinho de feijão frito, o pai do acarajé (tons: baixo, baixo, baixo)'],
      ['jẹ', 'comer (tom médio)'],
      ['ẹ̀wà', 'feijão'],
      ['epo pupa', 'azeite de dendê (literalmente «óleo vermelho»)'],
      ['din', 'fritar'],
      ['ede', 'camarão'],
      ['Ebi ń pa mí', 'Estou com fome (literalmente «a fome está me matando»)'],
      ['díẹ̀ / púpọ̀', 'pouco / muito'],
      ['gèlè', 'turbante, torço de pano na cabeça'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Bàhíà, ní Bùràsílì. Ìrọ̀lẹ́ ni. Linu àti ọ̀rẹ́ rẹ̀, Ṣadé, ń rìn ní etí òkun. Ṣadé wá láti Èkó.',
        translation: 'Bahia, no Brasil. É fim de tarde. O Linu e a amiga Ṣadé passeiam à beira-mar. A Ṣadé veio de Lagos.',
        choices: [
          { text: 'Wọ́n rí obìnrin kan tó wọ aṣọ funfun.', translation: 'Eles veem uma mulher vestida de branco.', next: 'baiana' },
          { text: 'Wọ́n jókòó, wọ́n sì wo òkun.', translation: 'Eles se sentam e olham o mar.', next: 'okun' },
        ],
      },
      okun: {
        emoji: '🌊',
        text: 'Òkun lẹ́wà. Ṣùgbọ́n Ṣadé sọ pé: «Ebi ń pa mí! Kí ni obìnrin yẹn ń tà?»',
        translation: 'O mar está lindo. Mas a Ṣadé diz: «Estou com fome! O que aquela mulher está vendendo?»',
        choices: [{ text: 'Wọ́n lọ sọ́dọ̀ obìnrin náà.', translation: 'Eles vão até a mulher.', next: 'baiana' }],
      },
      baiana: {
        emoji: '👩🏾',
        text: 'Obìnrin náà wọ aṣọ funfun àti gèlè funfun. Ó ń din nǹkan nínú epo pupa. Ṣadé kígbe: «Háà! Àkàrà nìyẹn!»',
        translation: 'A mulher está de roupa branca e torço branco. Ela está fritando alguma coisa no dendê. A Ṣadé exclama: «Não acredito! Isso é àkàrà!»',
        choices: [{ text: '«Bẹ́ẹ̀ni! Ní Bàhíà, orúkọ rẹ̀ ni àkàràjẹ.»', translation: '«Isso! Na Bahia, o nome dele é acarajé.»', next: 'oruko' }],
      },
      oruko: {
        emoji: '💡',
        text: 'Ṣadé rẹ́rìn-ín: «Àkàrà àti jẹ? Ìyẹn ni: wá jẹ àkàrà!» Obìnrin náà là àkàrà ńlá kan sí méjì, ó sì fi ede sí i. Ó bèèrè bóyá wọ́n fẹ́ ata.',
        translation: 'A Ṣadé ri: «Àkàrà e jẹ (comer)? Quer dizer: venha comer àkàrà!» A baiana abre um acarajé grande ao meio e põe camarão dentro. Ela pergunta se eles querem pimenta.',
        choices: [
          { text: '«Ata díẹ̀ fún mi, ẹ jọ̀ọ́.»', translation: '«Pouca pimenta para mim, por favor.»', next: 'jeun' },
          { text: '«Ata púpọ̀! Bí ti Ṣadé!»', translation: '«Muita pimenta! Igual à da Ṣadé!»', next: 'final_ata' },
          {
            text: '«Rárá, mi ò fẹ́ ede.»',
            translation: '«Não, eu não quero camarão.»',
            wrong: 'A baiana perguntou se eles querem pimenta («ata»), e não camarão («ede»). Responda sobre a pimenta: «díẹ̀» (pouca) ou «púpọ̀» (muita).',
          },
        ],
      },
      jeun: {
        emoji: '😋',
        text: 'Wọ́n jókòó, wọ́n sì jẹun. Ṣadé sọ pé: «Ó tóbi gan-an! Ní Èkó, àkàrà kéré. Ṣùgbọ́n ẹ̀wà ni, ó sì dùn bákan náà.»',
        translation: 'Eles se sentam e comem. A Ṣadé diz: «É enorme! Em Lagos, o àkàrà é pequeno. Mas é de feijão e é gostoso do mesmo jeito.»',
        choices: [{ text: '«Jẹ́ ká tún rà!»', translation: '«Vamos comprar mais um!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📱',
        text: 'Ṣadé pe màmá rẹ̀ ní Èkó: «Màmá, mo rí àkàrà ní Bùràsílì!» Màmá rẹ̀ kò gbàgbọ́.',
        translation: 'A Ṣadé liga para a mãe em Lagos: «Mãe, encontrei àkàrà no Brasil!» A mãe dela não acredita.',
        ending: { tone: 'bom', title: 'Parente de longe', message: 'O acarajé e o àkàrà são o mesmo bolinho, separados por um oceano. O Linu e a Ṣadé provaram os dois lados da história.' },
      },
      final_ata: {
        emoji: '🥵',
        text: 'Ata náà pọ̀ jù! Omi ń jáde ní ojú Linu. Ṣadé rẹ́rìn-ín: «Ẹyẹ, omi rèé!»',
        translation: 'Pimenta demais! Os olhos do Linu lacrimejam. A Ṣadé ri: «Passarinho, toma água!»',
        ending: { tone: 'neutro', title: 'Pimenta de baiana', message: 'A pimenta do tabuleiro não é brincadeira. Da próxima vez, peça «díẹ̀» (pouca)!' },
      },
    },
  },
];
