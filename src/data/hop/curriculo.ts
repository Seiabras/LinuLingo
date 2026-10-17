import type { UnitSeed } from '../types';

/**
 * Trilha do hopi (hopílavayi), do A1.1 ao A2.2, o teto do curso.
 *
 * Unidades 1 e 2 (A1): vocabulário do Wiktionary em inglês (dicionário da Terceira Mesa) e sintaxe do
 * artigo “Hopi language” da Wikipédia em inglês. As frases dessas lições (sem as duas lições extras do
 * A1.1) são montadas com palavras confirmadas, na ordem sujeito-objeto-verbo e no padrão
 * substantivo+adjetivo sem verbo de ligação, os dois documentados pela Wikipédia.
 *
 * Lições extras do A1.1 (hop-u1-l4 e hop-u1-l5) e unidades 3 e 4 (A2.1 e A2.2): todas as frases são de
 * [KAL] — Milo Kalectaca, “Lessons in Hopi”, ed. Ronald W. Langacker, University of Arizona Press, 1978
 * (ERIC ED 226 942; archive.org/details/micro_IA41153428_0700) —, com a página impressa e a tradução do
 * livro, conferidas na imagem da página. Nenhuma frase com gramática nova foi montada por nós. O livro
 * segue a fala de Songoopavi, na Segunda Mesa (introdução, p. vi); a conversão de grafia (apóstrofo → “ʼ”,
 * o acento agudo da tônica fora da regra fica, como no livro) está declarada em vocabulario.ts.
 *
 * Nada de conteúdo cerimonial: o Escritório de Preservação Cultural Hopi (Hopi Cultural Preservation
 * Office) registra que rituais e informações sagradas foram expostos “fora de contexto e sem a
 * permissão dos hopis”. Por isso o curso fica no cotidiano (família, casa, bichos, escola, perguntas)
 * e deixa de fora as frases do livro sobre cerimônias (por exemplo, o casamento do Diálogo 2 e a
 * Leitura 1).
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
        ['à, ù (acento grave)', 'tom descendente (uma informação de melodia, não de força de voz como o acento do português)', 'Pàayom, Wùuti'],
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
        id: 'hop-u1-l4',
        title: 'Um waynuma? Owí!: o cumprimento hopi',
        kind: 'licao',
        words: ['Owí', 'Qaʼé', 'Taʼá', 'Kwakwhá', 'Askwali', 'Waynuma'],
        cloze: [
          // [KAL] Diálogo 1, p. 16: “Um waynuma? […] — Owí, nu' waynuma.”
          {
            sentence: 'Um waynuma? — ___, nuʼ waynuma.',
            answer: 'Owí',
            options: ['Owí', 'Qaʼé', 'Kwakwhá'],
            translation: 'Você está por aí? — Sim, estou por aí.',
          },
          // [KAL] Diálogo 6, p. 112: “Ta'á. Nu' pas put naawakna. Kwakwhá.”
          {
            sentence: 'Taʼá. Nuʼ pas put naawakna. ___.',
            answer: 'Kwakwhá',
            options: ['Kwakwhá', 'Owí', 'Qaʼé'],
            translation: 'Está bem. Eu queria muito isso. Obrigado.',
          },
          // [KAL] Lição 19, p. 103: “Taapalo paalangpu? […] Qa'é, taapalo qa paalangpu.”
          {
            sentence: 'Taapalo paalangpu? — ___, taapalo qa paalangpu.',
            answer: 'Qaʼé',
            options: ['Qaʼé', 'Owí', 'Taʼá'],
            translation: 'O cobertor é vermelho? — Não, o cobertor não é vermelho.',
          },
        ],
        // [KAL] Diálogo 1, p. 16
        voice: {
          bot: 'Um waynuma?',
          botTranslation: 'Você está por aí? (é assim que o diálogo do livro começa um encontro)',
          expected: ['Owí, nuʼ waynuma.', 'owí, nuʼ waynuma', 'owí'],
          hint: 'Responda que sim, você está por aí: “Owí, nuʼ waynuma.”',
        },
        communityPrompt:
          'Escreva um encontro curto em hopi, com as falas do livro: alguém pergunta “Um waynuma?”, o outro responde “Owí, nuʼ waynuma” e, no fim, agradece com “Kwakwhá” (se for homem) ou “Askwali” (se for mulher).',
      },
      {
        id: 'hop-u1-l5',
        title: 'Pooko, moosa, kawayo: os bichos da casa',
        kind: 'licao',
        words: ['Pooko', 'Moosa', 'Kawayo', 'Paalangpu', 'Wuupa', 'Hiisayhoya'],
        cloze: [
          // [KAL] Lição 4, p. 18: “Pooko qöötsa. ‘The dog is white.’”
          {
            sentence: '___ qöötsa.',
            answer: 'Pooko',
            options: ['Pooko', 'Moosa', 'Kawayo'],
            translation: 'O cachorro é branco.',
          },
          // [KAL] Lição 4, p. 18: “Maana wuupa. ‘The girl is tall.’”
          {
            sentence: 'Maana ___.',
            answer: 'wuupa',
            options: ['wuupa', 'hiisayhoya', 'paalangpu'],
            translation: 'A menina é alta.',
          },
          // [KAL] Lição 4, p. 19, e a resposta na p. 21: “Kiihu paalangpu.” ‘The house is red.’
          {
            sentence: 'Kiihu ___.',
            answer: 'paalangpu',
            options: ['paalangpu', 'wuupa', 'hiisayhoya'],
            translation: 'A casa é vermelha.',
          },
        ],
        // [KAL] Lição 4, p. 20–21: “Kawayo wari” ‘The horse ran’; “Pooko hiisayhoya” ‘The dog is small’
        voice: {
          bot: 'Kawayo wari.',
          botTranslation: 'O cavalo correu.',
          expected: ['Pooko hiisayhoya.', 'pooko hiisayhoya'],
          hint: 'Diga que o cachorro é pequeno, sem verbo de ligação: “Pooko hiisayhoya.”',
        },
        communityPrompt: 'Descreva um bicho da sua casa ou da rua com as frases do livro: “Pooko qöötsa” (o cachorro é branco), “Pooko hiisayhoya” (o cachorro é pequeno) ou “Moosa tuumoyta” (o gato está comendo).',
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
  {
    id: 'hop-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ina, iqöqa: a família, o que é meu e o “não”',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'hop-c3',
      title: 'Os parentes já vêm com dono',
      emoji: '🏘️',
      history:
        'Os hopis se organizam em clãs que passam pela mãe: “as crianças nascem no clã da mãe”, e os clãs atravessam todas as vilas, segundo o artigo “Hopi” da Wikipédia em inglês. As vilas ficam no alto de três mesas, no norte do Arizona. A língua mostra o peso da família de outro jeito: no livro “Lessons in Hopi” (Milo Kalectaca, 1978), cada parente aparece em três formas — com “meu” (ina, meu pai), com “dele” (naʼat, o pai dele) e a forma de chamar (taata, “pai!”). O próprio livro avisa que a sua lista de parentes está “longe de ser uma descrição completa do sistema de parentesco hopi”.',
      culture_tip:
        'O material desta unidade vem de Kalectaca, falante de Songoopavi, na Segunda Mesa. O começo do curso usa o dicionário da Terceira Mesa. As duas falas se entendem, mas há palavras com outra forma: Kalectaca escreve “qö́mavi” para preto, onde o Wiktionary (Terceira Mesa) tem “qömvi”. O próprio livro, ao falar de formas que mudam de falante para falante, aconselha o aluno: “use a forma que o seu professor usa” (p. 82).',
      grammar_why:
        'Em hopi, “meu” e “seu” não são palavras soltas: grudam no nome. “I-” na frente é “meu” (ipooko, meu cachorro), “uu-” é “seu”, e “-ʼat” no fim é “dele, dela” (pookoʼat). Quem recebe a ação ganha “-t” (maanat, a menina, como objeto), e o “não” é “qa”, logo antes do verbo. Para “ter”, não há verbo: o nome da coisa ganha “-ʼta” (waakasiʼta, ter uma vaca).',
      grammar_examples: [
        ['Maana tiyot tsootsona.', 'A menina beijou o menino. (Kalectaca, p. 34)'],
        ['Tiyot ngahuʼat taskyavi.', 'O remédio do menino é amarelo. (Kalectaca, p. 48)'],
        ['Nuʼ put qa paʼangwa.', 'Eu não a ajudei. (Kalectaca, p. 39)'],
        ['Cecilia waakasiʼta.', 'A Cecília tem uma vaca. (Kalectaca, p. 85)'],
      ],
      character_guide: [
        ['i- (na frente)', '“meu”: gruda no começo do nome', 'ina (meu pai), ipooko (meu cachorro)'],
        ['-ʼat (no fim)', '“dele, dela”: gruda no fim, com a oclusiva glotal', 'naʼat (o pai dele), pookoʼat (o cachorro dele)'],
        ['-t (no fim)', 'marca o objeto, quem recebe a ação', 'maanat, tiyot, pöösat'],
      ],
    },
    lessons: [
      {
        id: 'hop-u3-l1',
        title: 'Ina, ingu, iqöqa: a família',
        kind: 'licao',
        words: ['Ina', 'Ingu', 'Iqöqa', 'Ituvko', 'Tiyo', 'Iso'],
        cloze: [
          // [KAL] Lição 13, p. 69 e 72: “Ituvko yev wunu.” ‘My younger brother is standing here.’
          {
            sentence: '___ yev wunu.',
            answer: 'Ituvko',
            options: ['Ituvko', 'Ingu', 'Iso'],
            translation: 'Meu irmão mais novo está em pé aqui.',
          },
          // [KAL] Lição 8, p. 41: “Ina qa waynuma.” ‘My father isn't around.’
          {
            sentence: '___ qa waynuma.',
            answer: 'Ina',
            options: ['Ina', 'Iqöqa', 'Tiyo'],
            translation: 'Meu pai não está por aí.',
          },
          // [KAL] Lição 16, p. 90–91: “Iso pootalawni.” ‘My grandmother will weave a basket.’
          {
            sentence: '___ pootalawni.',
            answer: 'Iso',
            options: ['Iso', 'Ina', 'Ituvko'],
            translation: 'Minha avó vai tecer um cesto.',
          },
        ],
        // [KAL] Diálogo 2, p. 37: “Haqami so'o?” ‘Where is grandmother?’ — “Pam piw naato piklawu.”
        // ‘She is making piki as usual.’ (piki: o pão fino de milho; “so'o” é a forma de chamar a avó)
        voice: {
          bot: 'Haqami soʼo?',
          botTranslation: 'Onde está a vovó?',
          expected: ['Pam piw naato piklawu.', 'pam piw naato piklawu', 'piklawu'],
          hint: 'Diga que ela está fazendo piki, como sempre: “Pam piw naato piklawu.”',
        },
        communityPrompt:
          'Apresente três parentes seus com as formas do livro: “ina” (meu pai), “ingu” (minha mãe), “iqöqa” (minha irmã mais velha), “ituvko” (meu irmão mais novo) ou “iso” (minha avó).',
      },
      {
        id: 'hop-u3-l2',
        title: 'Nuy, ung, put: quem fez o quê',
        kind: 'licao',
        words: ['Pöösa', 'Kwaahu', 'Kuuki', 'Maqa', 'Tsootsona', 'Paʼangwa'],
        cloze: [
          // [KAL] Lição 7, p. 33: “Pöösa nuy kuuki.” ‘The mouse bit me.’
          {
            sentence: 'Pöösa nuy ___.',
            answer: 'kuuki',
            options: ['kuuki', 'maqa', 'tsootsona'],
            translation: 'O rato me mordeu.',
          },
          // [KAL] Lição 7, p. 34: “Taaqa nuy kiihut maqa.” ‘The man gave me a house.’
          {
            sentence: 'Taaqa nuy kiihut ___.',
            answer: 'maqa',
            options: ['maqa', 'kuuki', 'paʼangwa'],
            translation: 'O homem me deu uma casa.',
          },
          // [KAL] Lição 8, p. 39: “Nu' put qa pa'angwa.” ‘I didn't help her.’
          {
            sentence: 'Nuʼ put qa ___.',
            answer: 'paʼangwa',
            options: ['paʼangwa', 'tsootsona', 'kuuki'],
            translation: 'Eu não a ajudei.',
          },
        ],
        // [KAL] Lição 7, p. 34–35: “Kwaahu itamuy kuuki” ‘The eagle bit us’; p. 35–36: “Pam kwaahu pöösat
        // tuwa” ‘The eagle saw the mouse’
        voice: {
          bot: 'Kwaahu itamuy kuuki.',
          botTranslation: 'A águia nos mordeu.',
          expected: ['Pam kwaahu pöösat tuwa.', 'pam kwaahu pöösat tuwa', 'pöösat tuwa'],
          hint: 'Agora a águia vê o rato: o rato, como objeto, ganha “-t” — “Pam kwaahu pöösat tuwa.”',
        },
        communityPrompt: 'Escreva duas frases do livro trocando quem faz e quem recebe: “Maana tiyot tsootsona” (a menina beijou o menino) e “Tiyo maanat tsootsona” (o menino beijou a menina). O que mudou?',
      },
      {
        id: 'hop-u3-l3',
        title: 'Prova: família, objeto e negação',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Lição 8, p. 39 e 41: “Nu' pu' Hopilavayit tutuqayi” ‘I am studying Hopi now’ → “Nu' pu'
        // Hopilavayit qa tutuqayi” ‘I am not studying Hopi now’
        voice: {
          bot: 'Nuʼ puʼ Hopilavayit tutuqayi.',
          botTranslation: 'Eu estou estudando hopi agora.',
          expected: ['Nuʼ puʼ Hopilavayit qa tutuqayi.', 'nuʼ puʼ hopilavayit qa tutuqayi', 'qa tutuqayi'],
          hint: 'Ponha a frase na negativa, com “qa” logo antes do verbo: “Nuʼ puʼ Hopilavayit qa tutuqayi.”',
        },
        communityPrompt: 'Escreva duas frases sobre a sua família com as formas do livro, uma afirmativa e uma com “qa” (não), como “Ina qa waynuma” (meu pai não está por aí).',
      },
    ],
  },
  {
    id: 'hop-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Haqam? Hisat? Perguntas, o amanhã e as ordens',
    emoji: '❓',
    card: {
      id: 'hop-c4',
      title: 'Hopilavayi no rádio e na escola',
      emoji: '📻',
      history:
        'Em 1998, uma pesquisa do Escritório de Preservação Cultural Hopi achou fluência em 100% dos idosos (60 anos ou mais), 84% dos adultos de 40 a 59, 50% dos de 20 a 39 e só 5% das crianças e jovens de 2 a 19 anos, segundo a revista Cultural Survival (2013). Desde 2000, a rádio KUYI 88.1 FM, em Keams Canyon, tem programas em hopi; um deles se alinha ao currículo de hopi do Head Start, a pré-escola. Em 2018, a Tribo Hopi aplicou pela primeira vez uma prova de proficiência para certificar professores de hopi, com quatro partes: compreensão, leitura, fala e gramática.',
      culture_tip:
        'Em hopi, uma pergunta de sim ou não pode ser igual à afirmação: só a entonação muda, com a voz mais alta no predicado (Kalectaca, p. 102). “Taapalo paalangpu” é “o cobertor é vermelho”; “Taapalo paalangpu?”, “o cobertor é vermelho?”. Alguns falantes põem “ya” no começo da pergunta; outros usam “ha”, “haw” ou “yaw”. A resposta é “Owí” (sim) ou “Qaʼé” (não), sozinhas ou com a frase inteira repetida.',
      grammar_why:
        'As palavras de pergunta (haqam, onde; hisat, quando; hin, como; hinoq, por quê) costumam vir no começo, mas “um” (você) quase sempre vem antes delas: “Um hin maatsiwa?”. O futuro é só um “-ni” no fim do verbo (yokvani, vai chover). A ordem acrescenta uma oclusiva glotal e repete a última vogal (qátuʼu, sente-se!); para proibir, usa-se o futuro com “qa”: “Um qa wárikni!”, não corra!',
      grammar_examples: [
        ['Um hin maatsiwa?', 'Como você se chama? (Kalectaca, p. 104)'],
        ['Masaʼtaqa hisat pituni?', 'Quando o avião vai chegar? (Kalectaca, p. 106)'],
        ['Yokvani.', 'Vai chover. (Kalectaca, p. 90)'],
        ['Um qa wárikni!', 'Não corra! (Kalectaca, p. 99)'],
      ],
      character_guide: [
        ['-ni (no fim)', 'futuro: “vai”', 'yokvani (vai chover), hikwni (vai beber)'],
        ['-ʼ + vogal repetida', 'ordem (imperativo)', 'qátuʼu (sente-se!), tsoʼomtiʼi (pule!)'],
        ['?', 'em hopi, a pergunta de sim ou não pode ser só entonação', 'Yooyoki? (está chovendo?)'],
      ],
    },
    lessons: [
      {
        id: 'hop-u4-l1',
        title: 'Haqam? Hisat? Hin?: as perguntas',
        kind: 'licao',
        words: ['Haqam', 'Hisat', 'Hin', 'Hinoq', 'Hak', 'Maatsiwa'],
        cloze: [
          // [KAL] Lição 19, p. 104 e 106: “Um hin maatsiwa?” ‘What is your name? (Literally: How are you called?)’
          {
            sentence: 'Um ___ maatsiwa?',
            answer: 'hin',
            options: ['hin', 'haqam', 'hisat'],
            translation: 'Como você se chama? (literalmente: como você é chamado?)',
          },
          // [KAL] Lição 19, p. 105–106: “Masa'taqa hisat pituni?” ‘When will the airplane arrive?’
          {
            sentence: 'Masaʼtaqa ___ pituni?',
            answer: 'hisat',
            options: ['hisat', 'hinoq', 'hin'],
            translation: 'Quando o avião vai chegar?',
          },
          // [KAL] Lição 19, p. 104 e 106: “Moosa haqam pöösat nöösa?” ‘Where did the cat eat the mouse?’
          {
            sentence: 'Moosa ___ pöösat nöösa?',
            answer: 'haqam',
            options: ['haqam', 'hak', 'hinoq'],
            translation: 'Onde o gato comeu o rato?',
          },
        ],
        // [KAL] Lição 19, p. 104–106: “Um hin maatsiwa?” → “Nu' Cecilia yan maatsiwa.” ‘My name is Cecilia.’
        voice: {
          bot: 'Um hin maatsiwa?',
          botTranslation: 'Como você se chama?',
          expected: ['Nuʼ Cecilia yan maatsiwa.', 'yan maatsiwa'],
          hint: 'Responda com o modelo do livro, trocando “Cecilia” pelo seu nome: “Nuʼ Cecilia yan maatsiwa.”',
        },
        communityPrompt: 'Escreva três perguntas do livro e responda a uma delas: “Um hin maatsiwa?” (como você se chama?), “Um taavok tumalta?” (você trabalhou ontem?) e “Hak wárikiwta?” (quem está correndo?).',
      },
      {
        id: 'hop-u4-l2',
        title: 'Taavok, puʼ, qaavoʼ: ontem, hoje e amanhã',
        kind: 'licao',
        words: ['Taavok', 'Qaavoʼ', 'Puʼ', 'Yokva', 'Pitu', 'Nima'],
        cloze: [
          // [KAL] Lição 6, p. 29: “Pam taavok pitu.” ‘That arrived yesterday.’
          {
            sentence: 'Pam ___ pitu.',
            answer: 'taavok',
            options: ['taavok', 'qaavoʼ', 'puʼ'],
            translation: 'Aquele chegou ontem.',
          },
          // [KAL] Lição 17, p. 94–95: “Nu' naala qaavo' momoslawni.” ‘I will swim alone tomorrow.’
          {
            sentence: 'Nuʼ naala ___ momoslawni.',
            answer: 'qaavoʼ',
            options: ['qaavoʼ', 'taavok', 'puʼ'],
            translation: 'Eu vou nadar sozinho amanhã.',
          },
          // [KAL] Lição 5, p. 26: “Itam nima.” ‘We went home.’
          {
            sentence: 'Itam ___.',
            answer: 'nima',
            options: ['nima', 'pitu', 'yokva'],
            translation: 'Nós fomos para casa.',
          },
        ],
        // [KAL] Lição 19, p. 103 e 106: “Yooyoki?” ‘Is it raining?’ — “Owí, yooyoki.” / “Qa'é, qa yooyoki.”
        voice: {
          bot: 'Yooyoki?',
          botTranslation: 'Está chovendo?',
          expected: ['Owí, yooyoki.', 'Qaʼé, qa yooyoki.', 'owí, yooyoki', 'qaʼé, qa yooyoki'],
          hint: 'Responda com a frase inteira, como no livro: “Owí, yooyoki” (sim, está chovendo) ou “Qaʼé, qa yooyoki” (não, não está chovendo).',
        },
        communityPrompt: 'Use “taavok” (ontem), “puʼ” (agora) e “qaavoʼ” (amanhã) com frases do livro, como “Pam taavok pitu” (aquele chegou ontem) e “Yokvani” (vai chover).',
      },
      {
        id: 'hop-u4-l3',
        title: 'Prova: perguntas, futuro e ordens',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Lição 19, p. 103 e 106: “Ya pam kuuyit kwálaknani?” ‘Will he make the water boil?’ —
        // “Owí, pam kuuyit kwálaknani.” (com o agudo do livro, ver vocabulario.ts)
        voice: {
          bot: 'Ya pam kuuyit kwálaknani?',
          botTranslation: 'Ele vai fazer a água ferver?',
          expected: ['Owí, pam kuuyit kwálaknani.', 'Qaʼé, pam kuuyit qa kwálaknani.', 'owí, pam kuuyit kwálaknani', 'qaʼé, pam kuuyit qa kwálaknani'],
          hint: 'Responda com a frase inteira, no futuro: “Owí, pam kuuyit kwálaknani” ou, na negativa, “Qaʼé, pam kuuyit qa kwálaknani.”',
        },
        communityPrompt: 'Escreva um mini diálogo com uma pergunta (“Um taavok tumalta?”, você trabalhou ontem?), uma resposta com “Owí” ou “Qaʼé” e uma ordem do livro, como “Qátuʼu!” (sente-se!).',
      },
    ],
  },
];
