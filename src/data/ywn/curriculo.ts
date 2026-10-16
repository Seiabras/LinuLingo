import type { UnitSeed } from '../types';

/**
 * Trilha do yawanawá até o teto (A1): unidade 1 (A1.1) e unidade 2 (A1.2), cada uma com quatro lições de
 * seis palavras e uma prova. Siglas como em vocabulario (PAU04 = Paula 2004, citado em SD24/SD25 com a
 * página da tese; CT13 = Camargo-Tavares 2013, idem; PAU03 = Paula 2003; PAU08 = Paula 2008; CTY = livro
 * dos professores yawanawá, 2006; VAK = contos “Vakehu Shenipahu”, 2016; PV16 = Plano de Vida; GIL99 =
 * Pérez Gil 1999; ASJP; NL = native-languages.org).
 *
 * Origem de cada frase das lições (grafia prática pela regra de vocabulario; “montada” = feita pelo curso):
 * u1-l1: “Ē nukua.” (CT13 95); “Mĩ yawa retea.” e “Ē yawa retea.” (CT13 116); “A pakea.” (PAU04 206).
 * u1-l2: “Ewan vene.” (PAU08 ex. 13); “Ewan apa.” MONTADA (ewan + substantivo, regra de “ewan vene”);
 *        “Ha! Eve nanea, txai.” (VAK 21); “Txai!” (VAK 21; GIL99 60).
 * u1-l3: palavras sozinhas (NL, ASJP); “Mapu turu.” (PAU03 ex. 09b).
 * u1-l4: “Yuma pitxã.” (CTY 75); “Atsa shuy.” e “Sheki tuvã.” (CTY 80).
 * u1-l5: “Txai! Ē nukua.” (as duas falas acima, juntas).
 * u2-l1: “Ē nukua.” e “Ē itxua.” (CT13 95); “Tika itxua.” (CT13 97); “Ē nika.” (VAK 8).
 * u2-l2: “Ē yawa retea.” (CT13 116); “Tika tupĩka.” (CT13 129); “Tikan peshe pakea.” (CT13 132).
 * u2-l3: “Tikan yawa retea.” (CT13 97); “Misinensi katsu aka.” (PAU04 132); “Shawe.” (CTY 148–149).
 * u2-l4: “Mapu turu.” (PAU03 ex. 09b); “Peshe vena.” MONTADA (substantivo + adjetivo, regra de “mapu
 *        turu”); “Itxapama.” (PAU08 ex. 08); “Ē yawa reteama.” MONTADA (“-ma” depois do passado “-a”,
 *        como em “rete-a-ma”, PAU08 ex. 10–11).
 * u2-l5: “Mã awea waĩ?” e “Txashē, nũ iskuti ikirã.” (VAK 13).
 */
export const UNITS_YWN: UnitSeed[] = [
  {
    id: 'ywn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txai! Ē nukua',
    emoji: '🐗',
    card: {
      id: 'ywn-c1',
      title: 'Yawa nawa: o povo do queixada',
      emoji: '🐗',
      // SD25 (Camargo-Tavares 2013, p. 38; IBGE 2022); SD24 p. 134–136 (aldeias, demarcação de 2023);
      // CTY 12 (língua falada pelos anciões e alguns jovens); CTY 163 (proibidos de falar a língua antes
      // de 1973); PV16 42–43 (Raimundo Sales: começou a falar a língua depois de adulto; “muitos adultos
      // Yawanawa estão falando, outros estão tentando”).
      history:
        'O yawanawá é uma língua da família pano, falada na Terra Indígena Rio Gregório, em Tarauacá (Acre). “Yawanawá” quer dizer “povo do queixada”. O povo vive em sete aldeias, entre elas Mutum e Nova Esperança, e soma 960 pessoas no censo de 2022. A língua está em risco: em 2010, das 565 pessoas da terra indígena, só 160 a usavam no dia a dia, segundo Camargo-Tavares (2013). No tempo dos patrões da borracha, os Yawanawá chegaram a ser proibidos de falar a língua. Hoje, segundo o Plano de Vida Yawanawa (2016), muitos adultos aprenderam a falar a língua depois de crescidos, e outros estão tentando.',
      // PV16 41 (Mariri Yawanawá, desde 2008–2009, todo mês de julho; celebração anual desde 2002);
      // GIL99 (mariri: festa em que a comunidade toma ayahuasca); CTY 143 (festa “sayti”, à noite).
      culture_tip:
        'O Mariri Yawanawá reúne todas as aldeias, com poucas pessoas de fora. Segundo o Plano de Vida Yawanawa, o primeiro foi no fim de 2008 e em 2009, e ele acontece todo mês de julho. Antes, em 2002, o povo tinha criado uma grande festa anual, a semana da celebração do canto, da dança, da arte e da cura, porque percebeu que muitos costumes estavam “adormecidos”.',
      grammar_why:
        'O yawanawá põe o verbo no fim e cola sufixos nas palavras. O “eu” e o “você” têm duas formas: “Ē” e “mĩ” quando a pessoa faz a ação, “ea” e “mia” quando recebe. O “meu” vem antes da coisa: “ewan vene”, meu marido.',
      grammar_examples: [
        ['Ē nukua.', 'Eu cheguei.'],
        ['Mĩ yawa retea.', 'Você matou o queixada.'],
        ['Ewan vene.', 'Meu marido.'],
        ['Yawa nawa.', 'Povo do queixada.'],
      ],
      character_guide: [
        ['e', 'vogal do meio da boca, entre o “i” e o “u”', 'rete (matar), peshe (casa)'],
        ['v', '“v” feito com os dois lábios, quase um “b” soprado', 'vake (criança), vari (sol)'],
        ['sh, x', 'como o “x” de “xícara”', 'shawe (jabuti), kixa (boca)'],
        ['tx', 'como o “tch” de “tchau”', 'txai (primo), itxu (correr)'],
        ['ã, ĩ, ũ, ē', 'vogais nasais e o “ē” dos livros da comunidade', 'mĩ (você), nũ (nós), Ē (eu)'],
      ],
    },
    lessons: [
      {
        id: 'ywn-u1-l1',
        title: 'Ē, mĩ, nũ',
        kind: 'licao',
        words: ['ē', 'mĩ', 'a', 'nũ', 'matu', 'atu'],
        cloze: [
          { sentence: '___ nukua.', answer: 'Ē', options: ['Ē', 'Atu', 'Matu'], translation: 'Eu cheguei.' },
          { sentence: '___ yawa retea.', answer: 'Mĩ', options: ['Mĩ', 'Nũ', 'A'], translation: 'Você matou o queixada.' },
          { sentence: '___ pakea.', answer: 'A', options: ['A', 'Mĩ', 'Matu'], translation: 'Ele caiu.' },
        ],
        voice: {
          bot: 'Mĩ yawa retea.',
          botTranslation: 'Você matou o queixada.',
          expected: ['Ē yawa retea.', 'ē yawa retea', 'e yawa retea'],
          hint: 'Responda que foi você mesmo: troque “mĩ” (você) por “Ē” (eu): “Ē yawa retea.”.',
        },
        communityPrompt: 'Escreva “eu”, “você”, “ele”, “nós”, “vocês” e “eles” em yawanawá.',
      },
      {
        id: 'ywn-u1-l2',
        title: 'Txai, apa, vake',
        kind: 'licao',
        words: ['txai', 'apa', 'vake', 'vene', 'utxin', 'ewan'],
        cloze: [
          { sentence: 'Ewan ___.', answer: 'vene', options: ['vene', 'txai', 'vake'], translation: 'Meu marido.' },
          { sentence: 'Ewan ___.', answer: 'apa', options: ['apa', 'utxin', 'ewan'], translation: 'Meu pai.' },
          { sentence: 'Ha! Eve nanea, ___.', answer: 'txai', options: ['txai', 'apa', 'vene'], translation: 'Meus primos!' },
        ],
        voice: {
          bot: 'Txai!',
          botTranslation: 'Primo! (forma de tratamento)',
          expected: ['Txai!', 'txai'],
          hint: 'Devolva o tratamento: “Txai!”. Entre os Yawanawá, “txai” é o primo cruzado; a prima cruzada é “tsave”.',
        },
        communityPrompt: 'Use “ewan” (meu) antes de uma palavra da família, como “ewan apa” (meu pai).',
      },
      {
        id: 'ywn-u1-l3',
        title: 'Mapu, viru, pahinki',
        kind: 'licao',
        words: ['mapu', 'viru', 'rekin', 'pahinki', 'kixa', 'imi'],
        cloze: [
          { sentence: '___ turu.', answer: 'Mapu', options: ['Mapu', 'Viru', 'Imi'], translation: 'Cabeça redonda.' },
          { sentence: '___.', answer: 'rekin', options: ['rekin', 'pahinki', 'kixa'], translation: 'Nariz.' },
          { sentence: '___.', answer: 'pahinki', options: ['pahinki', 'viru', 'mapu'], translation: 'Orelha.' },
        ],
        voice: {
          bot: 'Mapu.',
          botTranslation: 'Cabeça.',
          expected: ['Mapu turu.', 'mapu turu'],
          hint: 'Diga como é a cabeça, com o adjetivo depois: “Mapu turu.” (cabeça redonda).',
        },
        communityPrompt: 'Escreva em yawanawá: cabeça, olho, nariz, orelha, boca e sangue.',
      },
      {
        id: 'ywn-u1-l4',
        title: 'Yuma, atsa, sheki',
        kind: 'licao',
        words: ['yuma', 'atsa', 'sheki', 'mãnyã', 'pitxã', 'shuy'],
        cloze: [
          { sentence: 'Yuma ___.', answer: 'pitxã', options: ['pitxã', 'shuy', 'sheki'], translation: 'Peixe cozido.' },
          { sentence: 'Atsa ___.', answer: 'shuy', options: ['shuy', 'pitxã', 'mãnyã'], translation: 'Macaxeira assada.' },
          { sentence: '___ tuvã.', answer: 'Sheki', options: ['Sheki', 'Yuma', 'Atsa'], translation: 'Milho torrado.' },
        ],
        voice: {
          bot: 'Atsa shuy.',
          botTranslation: 'Macaxeira assada.',
          expected: ['Yuma pitxã.', 'yuma pitxã', 'yuma pitxa'],
          hint: 'Ofereça outro prato da cozinha yawanawá: “Yuma pitxã.” (peixe cozido).',
        },
        communityPrompt: 'Escreva o nome de dois pratos yawanawá que você aprendeu e diga o que são.',
      },
      {
        id: 'ywn-u1-l5',
        title: 'Prova: Txai!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Txai! Ē nukua.',
          botTranslation: 'Primo! Eu cheguei.',
          expected: ['Txai!', 'txai'],
          hint: 'Receba quem chegou devolvendo o tratamento: “Txai!”.',
        },
        communityPrompt: 'Escreva uma chegada curta: um tratamento (“Txai!”), uma frase com “Ē” (eu) e o nome de uma comida.',
      },
    ],
  },
  {
    id: 'ywn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ē nika: os contos dos antigos',
    emoji: '🐢',
    card: {
      id: 'ywn-c2',
      title: 'Os contos do pajé Tata',
      emoji: '🐢',
      // VAK 2–5 (texto do pajé Tata, só em yawanawá e sem tradução; créditos; apresentação de Tashka e
      // Laura Yawanawa: 103 anos, desenhos das crianças, “a nossa própria língua como o Pajé Tata descreve
      // acima”); CTY 167 (as histórias são contadas pelos velhos de madrugada ou à noite).
      history:
        'Em 2016, a Associação Sociocultural Yawanawa publicou “Vakehu Shenipahu”, sete contos infantis contados pelo pajé Tata Txanu Natasheni, então com 103 anos, em yawanawá e português. As ilustrações foram feitas pelas crianças das aldeias, depois de ouvirem as histórias na língua. O livro abre com um texto do pajé, só em yawanawá. Na apresentação, Tashka e Laura Yawanawa dizem que o livro quer valorizar as histórias tradicionais e “a nossa própria língua como o Pajé Tata descreve acima”.',
      // CTY 162 e 167 (educação tradicional; histórias de madrugada, às 7 e 8 da noite, ou ao tomar uni).
      culture_tip:
        'Segundo o livro dos professores yawanawá, a educação começa pelos pais e continua com os mais velhos, contadores de histórias e pajés. As histórias são contadas pelos velhos de madrugada ou às 7 ou 8 da noite, e também na pescaria, na caçada e no trabalho. Cada história traz um exemplo de como viver.',
      grammar_why:
        'Na frase, o verbo vem no fim, e quem faz a ação num verbo com objeto ganha “-n”: “Tikan yawa retea”, Tika matou o queixada. O verbo diz quando foi: “-a” é agora há pouco. E o “-ma” no fim nega: “itxapama”, pouco mesmo.',
      grammar_examples: [
        ['Tikan yawa retea.', 'Tika matou o queixada.'],
        ['Tika tupĩka.', 'Tika nadou.'],
        ['Itxapama.', 'Pouco mesmo.'],
        ['Mã awea waĩ?', 'O que vocês estão fazendo?'],
      ],
      character_guide: [
        ['-n', 'quem faz a ação (e também “de” e “com”)', 'Tikan peshe (a casa do Tika)'],
        ['-a', 'passado de agora há pouco', 'nukua (cheguei), retea (matou)'],
        ['-hu', 'plural', 'vakehu (crianças)'],
        ['-ma', 'negação, no fim', 'itxapama (pouco mesmo)'],
      ],
    },
    lessons: [
      {
        id: 'ywn-u2-l1',
        title: 'Nuku, itxu, nika',
        kind: 'licao',
        words: ['nuku', 'itxu', 'nika', 'ũĩ', 'pi', 'aya'],
        cloze: [
          { sentence: 'Ē ___a.', answer: 'nuku', options: ['nuku', 'pi', 'aya'], translation: 'Eu cheguei.' },
          { sentence: 'Tika ___a.', answer: 'itxu', options: ['itxu', 'nika', 'ũĩ'], translation: 'Tika correu.' },
          { sentence: 'Ē ___.', answer: 'nika', options: ['nika', 'nuku', 'itxu'], translation: 'Assim eu escutei.' },
        ],
        voice: {
          bot: 'Ē nukua.',
          botTranslation: 'Eu cheguei.',
          expected: ['Ē itxua.', 'ē itxua', 'itxua'],
          hint: 'Agora diga que você correu: “Ē itxua.” (eu corri).',
        },
        communityPrompt: 'Escreva duas coisas que você fez hoje com os verbos da lição, como “Ē nukua” (eu cheguei).',
      },
      {
        id: 'ywn-u2-l2',
        title: 'Rete, pake, tupĩk',
        kind: 'licao',
        words: ['rete', 'pake', 'tupĩk', 'munu', 'puta', 'tsau'],
        cloze: [
          { sentence: 'Ē yawa ___a.', answer: 'rete', options: ['rete', 'munu', 'tsau'], translation: 'Eu matei o queixada.' },
          { sentence: 'Tika ___a.', answer: 'tupĩk', options: ['tupĩk', 'puta', 'rete'], translation: 'Tika nadou.' },
          { sentence: 'Tikan peshe ___a.', answer: 'pake', options: ['pake', 'tupĩk', 'munu'], translation: 'Tika derrubou a casa.' },
        ],
        voice: {
          bot: 'Tika tupĩka.',
          botTranslation: 'Tika nadou.',
          expected: ['Tika itxua.', 'tika itxua', 'itxua'],
          hint: 'Conte o que Tika fez depois: “Tika itxua.” (Tika correu).',
        },
        communityPrompt: 'Escreva uma frase com “Tikan” (Tika fazendo algo com um objeto) e outra sem o “-n”.',
      },
      {
        id: 'ywn-u2-l3',
        title: 'Shawe, yumãi, katsu',
        kind: 'licao',
        words: ['shawe', 'yumãi', 'katsu', 'kape', 'yawa', 'kaman'],
        cloze: [
          { sentence: 'Tikan ___ retea.', answer: 'yawa', options: ['yawa', 'shawe', 'kaman'], translation: 'Tika matou o queixada.' },
          { sentence: 'Misinensi ___ aka.', answer: 'katsu', options: ['katsu', 'kape', 'yumãi'], translation: 'Só o Misi matou veado.' },
          { sentence: '___.', answer: 'shawe', options: ['shawe', 'yumãi', 'kape'], translation: 'Jabuti.' },
        ],
        voice: {
          bot: 'Yumãi!',
          botTranslation: 'Onça!',
          expected: ['Shawe.', 'shawe'],
          hint: 'Diga o nome do bicho que engana a onça nos contos do pajé Tata: “Shawe.” (jabuti).',
        },
        communityPrompt: 'Escolha um bicho da lição (jabuti, onça, veado, jacaré, queixada ou cachorro) e escreva o nome dele em yawanawá.',
      },
      {
        id: 'ywn-u2-l4',
        title: 'Itxapa, vena, turu',
        kind: 'licao',
        words: ['itxapa', 'rama', 'vena', 'kuru', 'turu', 'hui'],
        cloze: [
          { sentence: 'Mapu ___.', answer: 'turu', options: ['turu', 'vena', 'hui'], translation: 'Cabeça redonda.' },
          { sentence: 'Peshe ___.', answer: 'vena', options: ['vena', 'kuru', 'rama'], translation: 'Casa nova.' },
          { sentence: '___ma.', answer: 'Itxapa', options: ['Itxapa', 'Rama', 'Kuru'], translation: 'Pouco mesmo.' },
        ],
        voice: {
          bot: 'Ē yawa retea.',
          botTranslation: 'Eu matei o queixada.',
          expected: ['Ē yawa reteama.', 'ē yawa reteama', 'reteama'],
          hint: 'Diga o contrário, com o “-ma” no fim do verbo: “Ē yawa reteama.” (eu não matei o queixada).',
        },
        communityPrompt: 'Descreva duas coisas com um adjetivo depois do nome, como “peshe vena” (casa nova).',
      },
      {
        id: 'ywn-u2-l5',
        title: 'Prova: os jabutis e a onça',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mã awea waĩ?',
          botTranslation: 'O que vocês estão fazendo?',
          expected: ['Txashē, nũ iskuti ikirã.', 'nũ iskuti ikirã', 'iskuti'],
          hint: 'Responda como os jabutis do conto: “Txashē, nũ iskuti ikirã.” (estamos brincando de balanço).',
        },
        communityPrompt: 'Conte em português, com três palavras em yawanawá, o que aconteceu com a onça que quis brincar no balanço dos jabutis.',
      },
    ],
  },
];
