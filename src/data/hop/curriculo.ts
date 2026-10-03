import type { UnitSeed } from '../types';

/**
 * Trilha do hopi (hopílavayi) — só as duas unidades do nível A1 (pacote incompleto, ver `incomplete`
 * em `index.ts`). As 55 palavras do vocabulário (ver `vocabulario.ts`) dão pra cobrir pessoas, pronomes,
 * natureza, cores e bichos — por isso a trilha chega a duas unidades, como o apache ocidental deste
 * app —, mas não mais que isso: o hopi tem só 11 verbos catalogados no Wiktionary em inglês (8 usados
 * aqui, sempre na forma citada do dicionário, nunca conjugados — a própria Wikipédia em inglês registra
 * que “os verbos também são marcados por sufixos, mas eles não são usados de um jeito regular”, ver a
 * aba Gramática) e nenhuma fonte consultada traz uma frase interrogativa, uma marca de tempo verbal ou
 * uma saudação fixa. A maior parte do vocabulário (números, alimentação, corpo, casa, verbos e palavras
 * da categoria “Essenciais”/“Expressões”) fica de fora das lições por falta de gramática pra combiná-las
 * em frases novas sem inventar — mas continua disponível na aba de vocabulário.
 *
 * As frases usadas nas lições, no cloze e nos desafios de voz são as mesmas frases de exemplo já
 * verificadas em `vocabulario.ts` (combinações originais, só com palavras confirmadas, na ordem
 * sujeito-objeto-verbo e no padrão substantivo+adjetivo sem verbo de ligação, ambos documentados no
 * artigo “Hopi language” da Wikipédia em inglês) — nunca uma frase nova fora desse padrão.
 */
export const UNITS_HOP: UnitSeed[] = [
  {
    id: 'hop-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nuʼ, um, pam: as pessoas e os pronomes',
    emoji: '🙋',
    card: {
      id: 'hop-c1',
      title: 'Hopílavayi: a língua da Reserva Hopi, no Arizona',
      emoji: '🏜️',
      history:
        'O hopi (hopílavayi) é uma língua uto-asteca do ramo setentrional, falada na Reserva Hopi, no nordeste do Arizona (Estados Unidos) — 6.100 pessoas declararam falar hopi no censo americano de 2015, segundo a Wikipédia em inglês, mas só 40 delas eram monolíngues; em 1990, mais de 5.000 pessoas (cerca de 75% da população) ainda falavam hopi como língua materna. A Unesco classifica o hopi como “vulnerável” no seu Atlas das Línguas em Perigo no Mundo. O próprio nome “Hopi” vem de uma palavra que significa algo como “bom em todo sentido, ser sábio ou sensato” (como em “Hopituu sinom”, “o povo hopi”), segundo o Wiktionary em inglês — nome popularizado pelo antropólogo J. Walter Fewkes para substituir o antigo exônimo “Moqui”, ofensivo por soar como a palavra hopi “mooki” (“morre, está morto”). E a própria palavra “hopi”, dentro da língua, é também um substantivo comum: o Wiktionary a define como “pessoa civilizada, bem-comportada; alguém que segue o modo de vida hopi; educada, pacífica”, além de nomear um integrante do povo ou, de forma mais geral, “pessoa” — com o exemplo de uso “Pam pas hopi; pam pas qa hisat hakyi yuuyùyna” (“ele é muito bem-comportado; ele nunca incomodou ninguém”).',
      culture_tip:
        'O hopi se fala em pelo menos três variantes regionais — a da Primeira Mesa, a da Segunda Mesa (aldeias de Mishongnovi e Shipaulovi) e a da Terceira Mesa —, segundo a Wikipédia em inglês, que não aponta nenhuma delas como “a” variante padrão. O principal dicionário publicado da língua, porém, descreve especificamente a variante da Terceira Mesa: “Hopi Dictionary: Hopìikwa Lavàytutuveni” (University of Arizona Press, 1998), organizado por Emory Sekaquaptewa e outros.',
      grammar_why:
        'O hopi é uma língua sujeito-objeto-verbo (SOV), segundo a Wikipédia em inglês — o verbo sempre fecha a frase. E um adjetivo predicativo não precisa de um verbo como “ser”/“estar”: ele vem direto depois do sujeito, como no exemplo “maana wuupa” (“a moça [é] alta”), também da Wikipédia. Os pronomes, além disso, mudam de forma segundo a função: “nuʼ” (eu) é a forma de sujeito, e “nuy” é a forma de objeto — volta com mais detalhe na aba de gramática.',
      grammar_examples: [
        ['Maana wuupa.', 'A moça é alta. (exemplo do artigo “Hopi language” da Wikipédia em inglês)'],
        ['Pam pas hopi; pam pas qa hisat hakyi yuuyùyna.', 'Ele é muito bem-comportado; ele nunca incomodou ninguém. (exemplo de uso do Wiktionary em inglês, verbete “hopi”)'],
        ['Nuʼ taawa tuwa.', 'Eu vejo o sol.'],
        ['Um hoonaw tuwa.', 'Você vê o urso.'],
      ],
      character_guide: [
        ['ʼ', 'letra própria: uma oclusiva glotal (parada no ar), não uma aspa', 'Nuʼ, Suukyaʼ'],
        ['vogal dobrada (öö, uu, ii...)', 'vogal longa: a mesma vogal se escreve duas vezes seguidas', 'Qöötsa, Kuuyi, Tuukwi'],
        ['à, ù (acento grave)', 'tom descendente (uma informação de melodia, não de força de voz como o acento do português)', 'Pàayoʼ, Wùuti'],
      ],
    },
    lessons: [
      {
        id: 'hop-u1-l1',
        title: 'Taaqa, wùuti, maana: as pessoas',
        kind: 'licao',
        words: ['Taaqa', 'Wùuti', 'Maana', 'Nuʼ', 'Um', 'Pam'],
        cloze: [
          {
            sentence: '“___”: homem (adulto).',
            answer: 'Taaqa',
            options: ['Taaqa', 'Wùuti', 'Maana'],
            translation: '“Taaqa”: homem (adulto).',
          },
          {
            sentence: '“___”: mulher (adulta).',
            answer: 'Wùuti',
            options: ['Wùuti', 'Maana', 'Pam'],
            translation: '“Wùuti”: mulher (adulta).',
          },
          {
            sentence: 'Nuʼ taawa tuwa. ___ hoonaw tuwa.',
            answer: 'Um',
            options: ['Um', 'Pam', 'Itam'],
            translation: 'Eu vejo o sol. Você vê o urso.',
          },
        ],
        voice: {
          bot: 'Nuʼ taawa tuwa.',
          botTranslation: 'Eu vejo o sol.',
          expected: ['Um hoonaw tuwa.', 'um hoonaw tuwa.'],
          hint: 'Troque o pronome e o substantivo: diga “você vê o urso” — “Um hoonaw tuwa.”',
        },
        communityPrompt: 'Escreva três palavras para pessoas em hopílavayi: “Taaqa” (homem), “Wùuti” (mulher) e “Maana” (moça, menina).',
      },
      {
        id: 'hop-u1-l2',
        title: 'Itam, puma, e o sol, a lua, as estrelas',
        kind: 'licao',
        words: ['Itam', 'Puma', 'Taawa', 'Muuyaw', 'Soohu', 'Nuva'],
        cloze: [
          {
            sentence: '“___”: nós.',
            answer: 'Itam',
            options: ['Itam', 'Puma', 'Um'],
            translation: '“Itam”: nós.',
          },
          {
            sentence: '“___”: sol.',
            answer: 'Taawa',
            options: ['Taawa', 'Muuyaw', 'Soohu'],
            translation: '“Taawa”: sol.',
          },
          {
            sentence: 'Itam soohu tuwa. ___ mongwu tuwa.',
            answer: 'Puma',
            options: ['Puma', 'Itam', 'Pam'],
            translation: 'Nós vemos as estrelas. Eles veem a coruja-grande.',
          },
        ],
        voice: {
          bot: 'Itam soohu tuwa.',
          botTranslation: 'Nós vemos as estrelas.',
          expected: ['Puma mongwu tuwa.', 'puma mongwu tuwa.'],
          hint: 'Troque o pronome e o substantivo: diga “eles veem a coruja-grande” — “Puma mongwu tuwa.”',
        },
        communityPrompt:
          'Escreva as formas de sujeito dos cinco pronomes hopi documentadas pela Wikipédia em inglês: “Nuʼ” (eu), “Um” (você), “Pam” (ele/ela), “Itam” (nós) e “Puma” (eles/elas).',
      },
      {
        id: 'hop-u1-l3',
        title: 'Prova: pessoas e pronomes',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Wùuti qaaʼö nöösa.',
          botTranslation: 'A mulher come milho.',
          expected: ['Taaqa sikwi nöösa.', 'taaqa sikwi nöösa.'],
          hint: 'Troque o sujeito e o objeto: diga “o homem come carne” — “Taaqa sikwi nöösa.”',
        },
        communityPrompt: 'Escreva uma pequena cena: nomeie duas pessoas (por exemplo “Taaqa” e “Maana”) e diga quem vê o quê, usando “tuwa” (ver).',
      },
    ],
  },
  {
    id: 'hop-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Qöötsa, qömvi, sakwa: cores, pedra e bichos',
    emoji: '⚪',
    card: {
      id: 'hop-c2',
      title: 'Vogal longa, tom descendente: como soa o hopi',
      emoji: '🎵',
      history:
        'Segundo a Wikipédia em inglês, uma vogal escrita duas vezes seguidas (como em “qöötsa” ou “kuuyi”) marca uma vogal longa — mais tempo de duração, não outra letra. A variante da Terceira Mesa, segundo a mesma fonte (citando o linguista Benjamin Lee Whorf), “desenvolveu tom nas vogais longas”, com tons descendentes ou nivelados; esse tom descendente é marcado, na escrita, com um acento grave — o exemplo dado pela própria Wikipédia é “tsirò” (“pássaros”), o plural de “tsiro” (pássaro).',
      culture_tip:
        'O hopi forma o plural de substantivos e verbos “entre outros meios, por reduplicação parcial”, segundo a Wikipédia em inglês, que dá um exemplo completo: “taa~taqt nöö~nösa” (“vários homens comeram”) — o til (~) marca, só na transcrição da própria fonte, a parte repetida (“taaqa”, homem, vira “taataqt”; “nöösa”, comer, vira “nöönösa”). Mais detalhes na aba de gramática.',
      grammar_why:
        'As cores do hopi funcionam como adjetivos predicativos, no mesmo padrão sem verbo de ligação visto na primeira unidade: “owa qömvi” é “a pedra [é] preta”, sem nenhuma palavra para “é”. E os bichos vistos aqui entram na mesma frase sujeito-objeto-verbo com o verbo “tuwa” (ver), já usada com pessoas e com o céu.',
      grammar_examples: [
        ['Owa qömvi.', 'A pedra é preta.'],
        ['Paahu sakwa.', 'A água é azul.'],
        ['Taa~taqt nöö~nösa.', '“Vários homens comeram” — exemplo do artigo “Hopi language” da Wikipédia em inglês.'],
        ['Puma mongwu tuwa.', 'Eles veem a coruja-grande.'],
      ],
      character_guide: [
        ['vogal dobrada (öö, uu...)', 'vogal longa', 'Qöötsa (branco), Kuuyi (água engarrafada)'],
        ['ò (acento grave)', 'tom descendente — achado por Whorf especificamente na variante da Terceira Mesa', 'tsirò (“pássaros”, exemplo da Wikipédia; não é uma palavra deste vocabulário)'],
        ['~ (til, só na transcrição da fonte)', 'marca a parte repetida numa reduplicação de plural — não é uma letra do alfabeto hopi', 'taa~taqt, nöö~nösa'],
      ],
    },
    lessons: [
      {
        id: 'hop-u2-l1',
        title: 'Qöötsa, qömvi, sakwa: as cores',
        kind: 'licao',
        words: ['Qöötsa', 'Qömvi', 'Sakwa', 'Owa', 'Tuukwi', 'Paahu'],
        cloze: [
          {
            sentence: '“___”: branco.',
            answer: 'Qöötsa',
            options: ['Qöötsa', 'Qömvi', 'Sakwa'],
            translation: '“Qöötsa”: branco.',
          },
          {
            sentence: '“___”: pedra, rocha.',
            answer: 'Owa',
            options: ['Owa', 'Tuukwi', 'Paahu'],
            translation: '“Owa”: pedra, rocha.',
          },
          {
            sentence: 'Owa qömvi. Paahu ___.',
            answer: 'Sakwa',
            options: ['Sakwa', 'Qöötsa', 'Qömvi'],
            translation: 'A pedra é preta. A água é azul.',
          },
        ],
        voice: {
          bot: 'Owa qömvi.',
          botTranslation: 'A pedra é preta.',
          expected: ['Paahu sakwa.', 'paahu sakwa.'],
          hint: 'Diga “a água é azul”, com o mesmo padrão substantivo+adjetivo, sem verbo de ligação: “Paahu sakwa.”',
        },
        communityPrompt:
          'Escreva as três cores hopi vistas aqui: “Qöötsa” (branco), “Qömvi” (preto) e “Sakwa” (azul) — e diga uma coisa de cada cor, como “Owa qömvi” (a pedra é preta).',
      },
      {
        id: 'hop-u2-l2',
        title: 'Hoonaw, kwewu, iisaw: os bichos',
        kind: 'licao',
        words: ['Hoonaw', 'Kwewu', 'Iisaw', 'Tsiro', 'Mongwu', 'Koyongo'],
        cloze: [
          {
            sentence: '“___”: urso.',
            answer: 'Hoonaw',
            options: ['Hoonaw', 'Kwewu', 'Iisaw'],
            translation: '“Hoonaw”: urso.',
          },
          {
            sentence: '“___”: pássaro.',
            answer: 'Tsiro',
            options: ['Tsiro', 'Mongwu', 'Koyongo'],
            translation: '“Tsiro”: pássaro.',
          },
          {
            sentence: 'Puma mongwu tuwa. Maana ___ tuwa.',
            answer: 'Koyongo',
            options: ['Koyongo', 'Hoonaw', 'Kwewu'],
            translation: 'Eles veem a coruja-grande. A moça vê o peru.',
          },
        ],
        voice: {
          bot: 'Puma mongwu tuwa.',
          botTranslation: 'Eles veem a coruja-grande.',
          expected: ['Maana koyongo tuwa.', 'maana koyongo tuwa.'],
          hint: 'Troque o sujeito e o bicho: diga “a moça vê o peru” — “Maana koyongo tuwa.”',
        },
        communityPrompt: 'Nomeie três bichos hopi: “Hoonaw” (urso), “Kwewu” (lobo) e “Iisaw” (coiote) — qual deles mais parece um bicho que existe onde você mora?',
      },
      {
        id: 'hop-u2-l3',
        title: 'Prova: cores e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Taaqa sowi tuwa.',
          botTranslation: 'O homem vê a lebre.',
          expected: ['Wùuti angwusi tuwa.', 'wùuti angwusi tuwa.'],
          hint: 'Troque o sujeito e o bicho: diga “a mulher vê o corvo” — “Wùuti angwusi tuwa.”',
        },
        communityPrompt: 'Escreva uma pequena cena: diga a cor de uma pedra ou da água (“Owa qömvi” ou “Paahu sakwa”) e nomeie um bicho que você viu hoje.',
      },
    ],
  },
];
