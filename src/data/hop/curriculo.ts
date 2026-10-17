import type { UnitSeed } from '../types';

/**
 * Trilha do hopi (hopílavayi), do A1.1 ao B1.4, o teto do curso.
 *
 * Unidades 1 e 2 (A1): vocabulário do Wiktionary em inglês (dicionário da Terceira Mesa) e sintaxe do
 * artigo “Hopi language” da Wikipédia em inglês. As frases dessas lições (sem as duas lições extras do
 * A1.1) são montadas com palavras confirmadas, na ordem sujeito-objeto-verbo e no padrão
 * substantivo+adjetivo sem verbo de ligação, os dois documentados pela Wikipédia.
 *
 * Lições extras do A1.1 (hop-u1-l4 e hop-u1-l5) e unidades 3 a 8 (A2.1 a B1.4): todas as frases são de
 * [KAL] — Milo Kalectaca, “Lessons in Hopi”, ed. Ronald W. Langacker, University of Arizona Press, 1978
 * (ERIC ED 226 942; archive.org/details/micro_IA41153428_0700) —, com a página impressa e a tradução do
 * livro, conferidas na imagem da página. Nenhuma frase com gramática nova foi montada por nós. O livro
 * segue a fala de Songoopavi, na Segunda Mesa (introdução, p. vi); a conversão de grafia (apóstrofo → “ʼ”,
 * o acento agudo da tônica fora da regra fica, como no livro) está declarada em vocabulario.ts.
 *
 * Nada de conteúdo cerimonial: o Escritório de Preservação Cultural Hopi (Hopi Cultural Preservation
 * Office) registra que rituais e informações sagradas foram expostos “fora de contexto e sem a
 * permissão dos hopis”. Por isso o curso fica no cotidiano (família, casa, bichos, escola, perguntas)
 * e deixa de fora as frases do livro sobre cerimônias (por exemplo, o casamento do Diálogo 2, a
 * Leitura 1, a “tiihu”, dança ou cerimônia, da Lição 24, e o Diálogo 9, com a dança em Munqapi).
 *
 * B1 (unidades 5 a 8): Lições 22 a 30, Diálogos 7, 8 e 10 e Leituras 2 e 3 de [KAL]. [CT] “Coyote Tales. Hopi
 * Version” (Roy Albert e outros, 1970, ERIC ED 046 612) entra só no card do B1.4, com a tradição de contar no
 * inverno; vários contos (de Roy Albert e de Charlie Talawepi) se passam em Orayvi, Terceira Mesa. [JEA] LaVerne Masayesva Jeanne,
 * “Aspects of Hopi Grammar”, tese de doutorado, MIT, 1978 (dspace.mit.edu/handle/1721.1/16325), descreve a
 * Terceira Mesa e confere o sistema de orações (p. 67–68 e 183–184) e a marca da Segunda Mesa “hevni” × “hepni”
 * (p. 62).
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
  {
    id: 'hop-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Maana wárikqa lolma: quem fez o quê',
    emoji: '🐕',
    card: {
      id: 'hop-c5',
      title: 'Um livro escrito em Songoopavi',
      emoji: '📗',
      // [KAL] Introdução, p. iii–iv e vi (30 lições, 10 diálogos, 3 leituras; “reflete a fala do autor, que
      // representa a vila de Songoopavi, na Segunda Mesa”); Apêndice 3, p. 176 (vilas por mesa, com o
      // sentido dos nomes). Diálogo 7, p. 131 (“Homol'omi”, traduzido por Winslow).
      history:
        'Todo o B1 deste curso vem das últimas lições do livro “Lessons in Hopi”, de Milo Kalectaca (1978): trinta lições, dez diálogos e três leituras curtas. Kalectaca é de Songoopavi, na Segunda Mesa, e o livro segue a fala dele. O próprio livro lista as vilas de cada mesa e o que o nome quer dizer: Songoopavi é “o lugar da água onde crescem os juncos”; Walpi, na Primeira Mesa, “o lugar da fenda”; Orayvi, na Terceira, “o lugar da pedra oray”. No Diálogo 7, duas mulheres combinam uma ida a Winslow, a cidade fora da reserva: “Uma as nuy Homolʼomi wikni?”, vocês dois me levam a Winslow?',
      culture_tip:
        'Para dizer “o cachorro branco”, o hopi não põe o adjetivo solto: junta adjetivo e nome numa palavra só. “Qöötsa” (branco) + “pooko” (cachorro) dá “qötsávoko”. Alguns adjetivos encurtam: “paalangpu” (vermelho) vira “pala-”, e “wuuyoqʼa” (grande) vira “wuko-”. E o composto pode mudar de sentido: “wukonavna”, “camisa grande”, quer dizer casaco.',
      grammar_why:
        'O hopi faz a oração relativa (“a menina que correu”) com “-qa” no verbo, sem palavra como “que”: “Maana wárikqa lolma”, a menina que correu é bonita. O mesmo “-qa” transforma verbo em quem faz a ação: “tawlawngwuqa” é quem sempre canta, o cantor. Quando a oração descreve um objeto, a terminação muda para “-qe” ou “-qat”.',
      grammar_examples: [
        ['Qötsavoko waha.', 'O cachorro branco latiu. (Kalectaca, p. 121)'],
        ['Maana wárikqa lolma.', 'A menina que correu é bonita. (Kalectaca, p. 126)'],
        ['Pam tiyo waayaqa nima.', 'O menino que fugiu foi para casa. (Kalectaca, p. 127 e 130)'],
        ['Nuʼ maanat wárikqat tsootsona.', 'Eu beijei a menina que correu. (Kalectaca, p. 128)'],
      ],
      character_guide: [
        ['p → v', 'no meio de um composto, “p” vira “v”', 'pooko → qötsávoko (cachorro branco)'],
        ['-qa', 'quem faz; a oração relativa (que...)', 'wárikqa (que correu), tawlawngwuqa (cantor)'],
        ['-qe / -qat', 'a mesma oração, quando descreve um objeto', 'naawaknaqe (que eu gosto), wárikqat (que correu)'],
      ],
    },
    lessons: [
      {
        id: 'hop-u5-l1',
        title: 'Muki, wuuyoqʼa, lolma: adjetivos e compostos',
        kind: 'licao',
        words: ['Muki', 'Wuuyoqʼa', 'Poyo', 'Moʼa', 'Nuʼan', 'Waha'],
        cloze: [
          // [KAL] Lição 22, p. 123: “I' poyo wuuyoq'a.” ‘This knife is big.’
          {
            sentence: 'Iʼ poyo ___.',
            answer: 'wuuyoqʼa',
            options: ['wuuyoqʼa', 'muki', 'komo'],
            translation: 'Esta faca é grande.',
          },
          // [KAL] Lição 22, p. 123: “Pam tiyo nu'an wuupa.” ‘The boy is very tall.’
          {
            sentence: 'Pam tiyo ___ wuupa.',
            answer: 'nuʼan',
            options: ['nuʼan', 'qa', 'yaw'],
            translation: 'O menino é muito alto.',
          },
          // [KAL] Lição 22, p. 121: “Qötsavoko waha.” ‘The white dog barked.’
          {
            sentence: 'Qötsavoko ___.',
            answer: 'waha',
            options: ['waha', 'muki', 'mooki'],
            translation: 'O cachorro branco latiu.',
          },
        ],
        // [KAL] Lição 22, p. 123: “Wukokihu nu'an paalangpu.” ‘The big house is very red.’ — “Palakihu nu'an
        // wuuyoq'a.” ‘The red house is very big.’
        voice: {
          bot: 'Wukokihu nuʼan paalangpu.',
          botTranslation: 'A casa grande é muito vermelha.',
          expected: ['Palakihu nuʼan wuuyoqʼa.', 'palakihu nuʼan wuuyoqʼa', 'palakihu'],
          hint: 'Troque os papéis, como no livro: a casa vermelha é muito grande, “Palakihu nuʼan wuuyoqʼa.”',
        },
        communityPrompt: 'Monte compostos com adjetivo e nome, como no livro: “qötsávoko” (cachorro branco), “wukovoko” (cachorro grande), “palakihu” (casa vermelha). O que mudou em cada palavra?',
      },
      {
        id: 'hop-u5-l2',
        title: 'Maana wárikqa: a menina que correu',
        kind: 'licao',
        words: ['Lolma', 'Mooki', 'Waaya', 'Puuyalti', 'Tawlawu', 'Puuwi'],
        cloze: [
          // [KAL] Lição 23, p. 126: “Maana wárikqa lolma.” ‘The girl that ran is pretty.’
          {
            sentence: 'Maana wárikqa ___.',
            answer: 'lolma',
            options: ['lolma', 'muki', 'mooki'],
            translation: 'A menina que correu é bonita.',
          },
          // [KAL] Lição 23, p. 127 e 130: “Pam taaqa sikwit nösqa mooki.” ‘The man who ate the meat died.’
          {
            sentence: 'Pam taaqa sikwit nösqa ___.',
            answer: 'mooki',
            options: ['mooki', 'waaya', 'lolma'],
            translation: 'O homem que comeu a carne morreu.',
          },
          // [KAL] Lição 23, p. 127 e 130: “Pam tiyo waayaqa nima.” ‘The boy who ran away went home.’
          {
            sentence: 'Pam tiyo ___ nima.',
            answer: 'waayaqa',
            options: ['waayaqa', 'waaya', 'waayaqat'],
            translation: 'O menino que fugiu foi para casa.',
          },
        ],
        // [KAL] Lição 23, p. 130: “Pam maana naaniqa iqöqa.” ‘The girl who laughed is my older sister.’ —
        // “Kwaahu puuyaltingwuqa.” ‘The eagle is a flier.’
        voice: {
          bot: 'Pam maana naaniqa iqöqa.',
          botTranslation: 'A menina que riu é a minha irmã mais velha.',
          expected: ['Kwaahu puuyaltingwuqa.', 'kwaahu puuyaltingwuqa', 'puuyaltingwuqa'],
          hint: 'Agora diga quem voa sempre, com “-ngwuqa”: “Kwaahu puuyaltingwuqa” (a águia é voadora).',
        },
        communityPrompt: 'Escreva duas frases do livro com “-qa”: “Maana wárikqa lolma” (a menina que correu é bonita) e “Pam tiyo waayaqa nima” (o menino que fugiu foi para casa). Sublinhe o verbo com “-qa”.',
      },
      {
        id: 'hop-u5-l3',
        title: 'Prova: compostos e orações relativas',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Diálogo 7, p. 131: “Haqami uukongya?” ‘Where is your husband?’ — “Pam pay se'el tumala'tato.”
        // ‘He went to work very early.’
        voice: {
          bot: 'Haqami uukongya?',
          botTranslation: 'Onde está o seu marido?',
          expected: ['Pam pay seʼel tumalaʼtato.', 'pam pay seʼel tumalaʼtato', 'seʼel tumalaʼtato'],
          hint: 'Responda como a Mary do Diálogo 7: ele foi trabalhar bem cedo, “Pam pay seʼel tumalaʼtato.”',
        },
        communityPrompt: 'Conte o plano do Diálogo 7 com as frases do livro: “Uma as nuy Homolʼomi wikni?” (vocês me levam a Winslow?) e “Itam qa tsöngmokyani” (para a gente não ficar com fome).',
      },
    ],
  },
  {
    id: 'hop-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Taawi yukilti: a passiva, o “e” e o “ou”',
    emoji: '🎶',
    card: {
      id: 'hop-c6',
      title: 'Brincadeira de areia',
      emoji: '🏖️',
      // [KAL] Diálogo 8, p. 142 (as crianças fazem uma “homoki”, hogan, com areia e água); Lição 25, p. 137
      // (“nöq”, também dito “niqw”: “use the pronunciation your teacher uses”). Jeanne (MIT 1978), p. 62, sobre o
      // v antes de consoante na Segunda Mesa (“hevnuma”, “hevto” no livro).
      history:
        'No Diálogo 8 do livro, três crianças brincam na areia: Prunie cava, Angie tem pressa e Tristan chega procurando as duas. Elas estão fazendo uma “homoki”, a casa redonda dos navajos (o hogan), e mandam o amigo buscar água e areia. A conversa usa o “sen” (talvez) e ordens com a vogal repetida, como “wárikuʼu!” (corra!). Repare em “hevnuma” (estive procurando): a linguista hopi LaVerne Masayesva Jeanne (MIT, 1978) registra que a Segunda Mesa mantém o “v” antes de consoante, onde a Terceira Mesa diz “p”.',
      culture_tip:
        'O “e” do hopi muda conforme o que liga. Entre sujeitos ou frases, é “nöq” (alguns falantes dizem “niqw”, e o livro pede para seguir o jeito do seu professor). Entre objetos, é “nit”, e todos ficam na forma de objeto: “pookot nit moosat”, um cachorro e um gato. O “ou” é “sen”, que também quer dizer “talvez”.',
      grammar_why:
        'O hopi tem vários jeitos de fazer a voz passiva, e é preciso aprender qual vale para cada verbo. “-ilti” no verbo põe o objeto como sujeito: “Taawi yukilti”, a canção ficou pronta. “-iwa” faz o mesmo em alguns verbos: “tiitiwa”, nascer. E um verbo no plural sem sujeito também vale como passiva: “Sikwit tuupeya”, a carne foi assada.',
      grammar_examples: [
        ['Taawi yukilti.', 'A canção ficou pronta. (Kalectaca, p. 132–133)'],
        ['Tiposi taavok tiitiwa.', 'O bebê nasceu ontem. (Kalectaca, p. 133)'],
        ['Sikwit tuupeya.', 'A carne foi assada. (Kalectaca, p. 134–135)'],
        ['Nuʼ pookot nit moosat tuwa.', 'Eu achei um cachorro e um gato. (Kalectaca, p. 138 e 140)'],
      ],
      character_guide: [
        ['-ilti', 'passiva: o objeto vira sujeito', 'yukilti (ficou pronto), peenilti (foi pintado)'],
        ['-iwa', 'outra passiva', 'tiitiwa (nascer), nguʼiwa (ser pego)'],
        ['nöq / nit', '“e” entre sujeitos / “e” entre objetos', 'pooko nöq moosa; pookot nit moosat'],
      ],
    },
    lessons: [
      {
        id: 'hop-u6-l1',
        title: 'Taawi yukilti: a voz passiva',
        kind: 'licao',
        words: ['Tiposi', 'Tiitiwa', 'Tuupe', 'Taawi', 'Yuku', 'Aama'],
        cloze: [
          // [KAL] Lição 24, p. 133: “Tiposi taavok tiitiwa.” ‘The child was born yesterday.’
          {
            sentence: 'Tiposi taavok ___.',
            answer: 'tiitiwa',
            options: ['tiitiwa', 'yukilti', 'tuupeya'],
            translation: 'O bebê nasceu ontem.',
          },
          // [KAL] Lição 24, p. 132–133 e 135: “Taawi yukilti.” ‘The song was finished.’
          {
            sentence: '___ yukilti.',
            answer: 'Taawi',
            options: ['Taawi', 'Tiposi', 'Siivut'],
            translation: 'A canção ficou pronta.',
          },
          // [KAL] Lição 24, p. 134–135: “Sikwit tuupeya.” ‘The meat was roasted.’
          {
            sentence: 'Sikwit ___.',
            answer: 'tuupeya',
            options: ['tuupeya', 'tiitiwa', 'amya'],
            translation: 'A carne foi assada.',
          },
        ],
        // [KAL] Lição 24, p. 135–136: “Pam hisat tiitiwa?” ‘When was she born?’; a resposta aceita é a frase da
        // p. 133, “Tiposi taavok tiitiwa” (nenhuma resposta montada).
        voice: {
          bot: 'Pam hisat tiitiwa?',
          botTranslation: 'Quando ela nasceu?',
          expected: ['Tiposi taavok tiitiwa.', 'tiposi taavok tiitiwa', 'taavok tiitiwa'],
          hint: 'Responda com a frase do livro: o bebê nasceu ontem, “Tiposi taavok tiitiwa.”',
        },
        communityPrompt: 'Escreva três passivas do livro, uma de cada tipo: “Taawi yukilti” (a canção ficou pronta), “Tiposi taavok tiitiwa” (o bebê nasceu ontem) e “Siivut amya” (enterraram a panela).',
      },
      {
        id: 'hop-u6-l2',
        title: 'Nöq, nit, sen: e, e, ou',
        kind: 'licao',
        words: ['Nöq', 'Nit', 'Sen', 'Ngöyva', 'Novna', 'Tuʼi'],
        cloze: [
          // [KAL] Lição 25, p. 138 e 140: “Pooko nöq moosa taavot ngöyva.” ‘The dog and the cat chased a cottontail.’
          {
            sentence: 'Pooko ___ moosa taavot ngöyva.',
            answer: 'nöq',
            options: ['nöq', 'nit', 'sen'],
            translation: 'O cachorro e o gato perseguiram um coelho.',
          },
          // [KAL] Lição 25, p. 138 e 140: “Nu' pookot nit moosat tuwa.” ‘I found a dog and a cat.’
          {
            sentence: 'Nuʼ pookot ___ moosat tuwa.',
            answer: 'nit',
            options: ['nit', 'nöq', 'sen'],
            translation: 'Eu achei um cachorro e um gato.',
          },
          // [KAL] Lição 25, p. 139–140: “Sen yooyoki sen nuvalawu.” ‘Either it is raining or it is snowing.’
          {
            sentence: '___ yooyoki sen nuvalawu.',
            answer: 'Sen',
            options: ['Sen', 'Nöq', 'Nit'],
            translation: 'Ou está chovendo, ou está nevando.',
          },
        ],
        // [KAL] Lição 25, p. 138 e 140: “Hak kawayot nit waakasit novnani?” ‘Who will feed the horse and the
        // cow?’; p. 138–139: “Sen Milo kawayot novnani sen LouVina waakasit novnani.” ‘Either Milo will feed the
        // horse or LouVina will feed the cow.’
        voice: {
          bot: 'Hak kawayot nit waakasit novnani?',
          botTranslation: 'Quem vai dar de comer ao cavalo e à vaca?',
          expected: ['Sen Milo kawayot novnani sen LouVina waakasit novnani.', 'sen milo kawayot novnani sen louvina waakasit novnani', 'sen milo kawayot novnani'],
          hint: 'Responda com o “ou” do livro: “Sen Milo kawayot novnani sen LouVina waakasit novnani” (ou o Milo dá de comer ao cavalo, ou a LouVina à vaca).',
        },
        communityPrompt: 'Copie uma frase do livro com cada palavra: “nöq” (Ina sayti nöq inöma naani, meu pai sorriu e minha esposa riu), “nit” (Pam wuuti kwasat nit pitanaktsit tuʼi, a mulher comprou um vestido e um chapéu) e “sen”.',
      },
      {
        id: 'hop-u6-l3',
        title: 'Prova: passiva e conjunções',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Diálogo 8, p. 142: “Uma hintsaki? Nu' umuy teevev hevnuma.” ‘What are you doing? I've been looking
        // for you two all day.’ — “Itam homokit yuyku. Sen um itamuy pa'angwani?” ‘We are making a hogan. Perhaps
        // you can help us?’
        voice: {
          bot: 'Uma hintsaki? Nuʼ umuy teevev hevnuma.',
          botTranslation: 'O que vocês estão fazendo? Estive procurando vocês o dia todo.',
          expected: ['Itam homokit yuyku. Sen um itamuy paʼangwani?', 'itam homokit yuyku', 'sen um itamuy paʼangwani'],
          hint: 'Responda como a Prunie: estamos fazendo um hogan, será que você ajuda? “Itam homokit yuyku. Sen um itamuy paʼangwani?”',
        },
        communityPrompt: 'Escreva duas frases do livro, uma na passiva e uma com “nit”: “Kawayo nguʼiwa” (o cavalo foi pego) e “Pam pooko itamöy nit imay kuuki” (o cachorro mordeu meu joelho e minha mão).',
      },
    ],
  },
  {
    id: 'hop-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Yaw, kus, as: dizem, parece, quase',
    emoji: '💧',
    card: {
      id: 'hop-c7',
      title: 'Tsölö, o menino de Songoopavi',
      emoji: '💧',
      // [KAL] Leitura 2, p. 181 (“Tsölö yaw so'oy amum Songoopave qatu”, a busca pela beira da mesa e pelo
      // pomar de pêssego). Lição 26, p. 143–146 (as, yaw, kus). Jeanne (MIT 1978), p. 67–68 e 183–184 (os
      // sufixos -t, -kyang, -q, -e', -qe: “proximate” quando o sujeito é o mesmo, “obviative” quando muda).
      history:
        'A Leitura 2 do livro conta a história de Tsölö (Gota de Chuva), um menino que morava com a avó na vila de Songoopavi, a vila do autor. Um dia a avó não o achou: procurou pela vila, perguntou às crianças, desceu da beira da mesa até o pomar de pêssegos e o encontrou dormindo debaixo de um pessegueiro. Ele tinha ido caçar passarinho. A história é contada quase toda com “yaw”, o “dizem que” de quem não viu a cena.',
      culture_tip:
        'Em hopi, quem conta diz de onde sabe. “Pam put tuku” é “ele cortou”, e quem fala viu. “Pam put yaw tuku” é “dizem que ele cortou”. “Pam put kus kuuki” é “pelo visto ele a mordeu”: quem fala deduziu. E “as” põe a cena no passado ou diz que a intenção não se cumpriu: “Nuʼ as kuyto” é “fui buscar água” (e não consegui).',
      grammar_why:
        'Para ligar duas ações, o hopi marca o primeiro verbo. Se o sujeito é o mesmo, “-t” diz que uma ação veio antes da outra (“Nuʼ pakít puʼ qatuvtu”, entrei e sentei) e “-kyang” diz que foram ao mesmo tempo. Se o sujeito muda, usa-se “-q”: “Nuʼ pakíq puʼ pam qatuvtu”, eu entrei e ela sentou. A linguista hopi LaVerne Jeanne (MIT, 1978) descreve o mesmo sistema na fala da Terceira Mesa.',
      grammar_examples: [
        ['Kuuyi as muki.', 'A água estava quente. (Kalectaca, p. 143)'],
        ['Pooko ung yaw kuuki.', 'Dizem que um cachorro mordeu você. (Kalectaca, p. 145 e 147)'],
        ['Nuʼ pakít puʼ qatuvtu.', 'Eu entrei e sentei. (Kalectaca, p. 149)'],
        ['Nuʼ pakíq puʼ pam qatuvtu.', 'Eu entrei e ela sentou. (Kalectaca, p. 150)'],
      ],
      character_guide: [
        ['yaw', 'dizem que, ouvi dizer', 'Pooko ung yaw kuuki.'],
        ['kus (no fim: kurá)', 'pelo visto, evidentemente', 'Wikoro as sakwa kurá.'],
        ['-t / -kyang / -q', 'antes (mesmo sujeito) / ao mesmo tempo / sujeito diferente', 'pakít, tuumoykyang, pakíq'],
      ],
    },
    lessons: [
      {
        id: 'hop-u7-l1',
        title: 'As, yaw, kus: quem viu?',
        kind: 'licao',
        words: ['As', 'Yaw', 'Kus', 'Oomaw', 'Komo', 'Wikoro'],
        cloze: [
          // [KAL] Lição 26, p. 143: “Kuuyi as muki.” ‘The water was hot.’
          {
            sentence: 'Kuuyi ___ muki.',
            answer: 'as',
            options: ['as', 'yaw', 'kus'],
            translation: 'A água estava quente.',
          },
          // [KAL] Lição 26, p. 145 e 147: “Pooko ung yaw kuuki.” ‘A dog bit you, I hear.’
          {
            sentence: 'Pooko ung ___ kuuki.',
            answer: 'yaw',
            options: ['yaw', 'as', 'nöq'],
            translation: 'Dizem que um cachorro mordeu você.',
          },
          // [KAL] Lição 26, p. 144 e 146: “Pam hoonaw as komo.” ‘The bear was brown.’
          {
            sentence: 'Pam hoonaw as ___.',
            answer: 'komo',
            options: ['komo', 'muki', 'lolma'],
            translation: 'O urso era marrom.',
          },
        ],
        // [KAL] Lição 26, p. 146–147: “Oomaw qö́mavi.” ‘The cloud is black.’ → “Oomaw as qö́mavi.” ‘The cloud was black.’
        voice: {
          bot: 'Oomaw qö́mavi.',
          botTranslation: 'A nuvem está preta.',
          expected: ['Oomaw as qö́mavi.', 'oomaw as qö́mavi', 'oomaw as qömavi'],
          hint: 'Ponha no passado com “as”: “Oomaw as qö́mavi” (a nuvem estava preta).',
        },
        communityPrompt: 'Escreva a mesma frase do livro com cada partícula: “Oomaw qö́mavi” (a nuvem está preta), “Oomaw as qö́mavi” (estava), “Oomaw kus yaw qö́mavi” (pelo visto está, dizem). O que cada uma acrescenta?',
      },
      {
        id: 'hop-u7-l2',
        title: 'Nuʼ pakít puʼ qatuvtu: entrei e sentei',
        kind: 'licao',
        words: ['Paki', 'Paklawu', 'Haawi', 'Taatayi', 'Heeve', 'Suus'],
        cloze: [
          // [KAL] Lição 27, p. 149: “Nu' pakít pu' qatuvtu.” ‘I came in and sat down.’
          {
            sentence: 'Nuʼ ___ puʼ qatuvtu.',
            answer: 'pakít',
            options: ['pakít', 'pakíq', 'paki'],
            translation: 'Eu entrei e sentei.',
          },
          // [KAL] Lição 27, p. 149 e 152: “Pam maana naanit pu' paklawu.” ‘The girl laughed then cried.’
          {
            sentence: 'Pam maana naanit puʼ ___.',
            answer: 'paklawu',
            options: ['paklawu', 'paki', 'haawi'],
            translation: 'A menina riu e depois chorou.',
          },
          // [KAL] Leitura 2, p. 181: “Suus yaw put so'at qa tuwa.” ‘One day his grandmother couldn't find him.’
          {
            sentence: '___ yaw put soʼat qa tuwa.',
            answer: 'Suus',
            options: ['Suus', 'Satnöq', 'Sutsev'],
            translation: 'Um dia, a avó não o encontrou.',
          },
        ],
        // [KAL] Leitura 2, p. 181: “Tsölö, taatayi'i, nu' ung teevev hevnuma.” ‘Raindrop, wake up, I've been
        // looking for you all day.’ — “Ta'á, itam tus nima.” ‘Okay, let's go home.’
        voice: {
          bot: 'Tsölö, taatayiʼi, nuʼ ung teevev hevnuma.',
          botTranslation: 'Tsölö, acorde, estive procurando você o dia todo.',
          expected: ['Taʼá, itam tus nima.', 'taʼá, itam tus nima', 'itam tus nima'],
          hint: 'Responda como no fim da Leitura 2: “Taʼá, itam tus nima” (está bem, vamos para casa).',
        },
        communityPrompt: 'Escreva duas frases do livro com o mesmo par de verbos: “Nuʼ pakít puʼ qatuvtu” (entrei e sentei) e “Nuʼ pakíq puʼ pam qatuvtu” (entrei e ela sentou). Por que uma tem “-t” e a outra “-q”?',
      },
      {
        id: 'hop-u7-l3',
        title: 'Prova: partículas e orações de tempo',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Leitura 2, p. 181: “Uma qa haqam Tsölöt aw yorikya?” ‘Have you seen Raindrop anywhere?’ —
        // “Pam pay seelaq moorot akw kwiniweq'a.” ‘He was going north a long time ago on a donkey.’
        voice: {
          bot: 'Uma qa haqam Tsölöt aw yorikya?',
          botTranslation: 'Vocês não viram o Tsölö por aí?',
          expected: ['Pam pay seelaq moorot akw kwiniweqʼa.', 'pam pay seelaq moorot akw kwiniweqʼa', 'kwiniweqʼa'],
          hint: 'Responda como a menininha da Leitura 2: ele foi para o norte faz tempo, num burro, “Pam pay seelaq moorot akw kwiniweqʼa.”',
        },
        communityPrompt: 'Reconte a Leitura 2 com três frases do livro: “Tsölö yaw soʼoy amum Songoopave qatu” (Tsölö morava com a avó em Songoopavi), “Yaw pam soosovik kiinawit heeva” (ela procurou pela vila toda) e “Put yaw sipaltsokit atpipaq puwqat tuwa” (achou-o dormindo debaixo de um pessegueiro).',
      },
    ],
  },
  {
    id: 'hop-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Um tuutuyteʼ: se, porque e o coiote',
    emoji: '🐺',
    card: {
      id: 'hop-c8',
      title: 'Histórias de coiote nas noites de inverno',
      emoji: '❄️',
      // [KAL] Leitura 3, p. 183–185 (“Haliksa'i! Yaw hisat Songoopavit atkyave iisaw ki'ta”). [CT] Roy Albert e
      // outros, “Coyote Tales. Hopi Version”, Northern Arizona Supplementary Education Center, 1970 (ERIC ED 046 612,
      // aberto no archive.org): resumo do ERIC (“20 stories ... These stories normally serve to entertain as well as
      // to instruct both children and adults during the winter nights”); contadores Roy Albert e Charlie Talawepi;
      // as histórias abrem com “Aliksa'i”, e muitas, dos dois contadores, se passam em Orayvi (“Aliksa'i. Yaw Orayve yesiwa”;
      // de Charlie Talawepi, “Aliksa'i. Yaw pay piw Orayve yaniwti”, p. 22 do PDF, conferida na
      // imagem), em Orayvi, na Terceira Mesa, numa grafia mais antiga.
      history:
        'O livro de Kalectaca termina com uma história de coiote que se passa logo abaixo de Songoopavi: o coiote quer aprender a voar com os passarinhos, ganha penas emprestadas e cai quando eles as tomam de volta. Em 1970, um centro de educação de Flagstaff, no norte do Arizona (Northern Arizona Supplementary Education Center), publicou 20 histórias assim, contadas em hopi por Roy Albert e Charlie Talawepi (“Coyote Tales”, ERIC ED 046 612). Muitas se passam em Orayvi, na Terceira Mesa, e usam uma grafia mais antiga. Tanto as do projeto quanto a do livro começam do mesmo jeito: “Aliksaʼi” ou “Haliksaʼi”, escute!',
      culture_tip:
        'Pela tradição hopi, as histórias do coiote são contadas nas noites de inverno: o próprio resumo da coleção de 1970 diz que elas servem para divertir e ensinar crianças e adultos nessas noites. O coiote é o esperto que se enrola no próprio plano, e a história quase nunca diz a moral: quem escuta tira a conclusão.',
      grammar_why:
        'Para dizer “se”, o hopi muda o fim do verbo: “-eʼ” quando o sujeito é o mesmo (“Um tuutuyteʼ um mokni”, se você ficar doente, vai morrer) e “-q” quando muda. Para “porque”, usa “-qe” com o mesmo sujeito e “-q” com sujeito diferente, muitas vezes com “oovi” (por isso). Com “as”, a condição é contrária ao fato: “Pam as wuupaneʼ haalayni”, se ele fosse alto, seria feliz.',
      grammar_examples: [
        ['Um tuutuyteʼ um mokni.', 'Se você ficar doente, vai morrer. (Kalectaca, p. 160)'],
        ['Pam nuy tuwáq oovi nuʼ waaya.', 'Porque ele me viu, eu fugi. (Kalectaca, p. 158 e 160)'],
        ['Pam sutsev nánanngwu.', 'Ele sempre ri. (Kalectaca, p. 163)'],
        ['Haliksaʼi! Yaw hisat Songoopavit atkyave iisaw kiʼta.', 'Escute! Dizem que, há muito tempo, um coiote morava lá embaixo de Songoopavi. (Kalectaca, p. 183)'],
      ],
      character_guide: [
        ['-eʼ', 'se (mesmo sujeito)', 'tuutuyteʼ (se ficar doente)'],
        ['-qe ... oovi', 'porque (mesmo sujeito) ... por isso', 'nímaqe oovi (porque foi para casa)'],
        ['-ngwu', 'sempre, de costume', 'nánanngwu (sempre ri)'],
        ['-to', 'ir fazer', 'kuyto (ir buscar água), huuyato (ir comprar)'],
      ],
    },
    lessons: [
      {
        id: 'hop-u8-l1',
        title: 'Um tuutuyteʼ: se e porque',
        kind: 'licao',
        words: ['Itsivuti', 'Tuutuyti', 'Súhimu', 'Hiikyaʼta', 'Haalayi', 'Oovi'],
        cloze: [
          // [KAL] Lição 28, p. 158 e 160: “Um tuutuyte' um mokni.” ‘If you get sick you will die.’
          {
            sentence: 'Um ___ um mokni.',
            answer: 'tuutuyteʼ',
            options: ['tuutuyteʼ', 'tuutuyti', 'tuutuytiq'],
            translation: 'Se você ficar doente, vai morrer.',
          },
          // [KAL] Lição 28, p. 158 e 160: “Pam nuy tuwáq oovi nu' waaya.” ‘Because he saw me I ran away.’
          {
            sentence: 'Pam nuy tuwáq ___ nuʼ waaya.',
            answer: 'oovi',
            options: ['oovi', 'sen', 'nit'],
            translation: 'Porque ele me viu, eu fugi.',
          },
          // [KAL] Lição 28, p. 158 e 160: “Kawayo qa hiikya'taq oovi nu' put tu'i.” ‘Since the horse wasn't expensive I bought it.’
          {
            sentence: 'Kawayo qa ___ oovi nuʼ put tuʼi.',
            answer: 'hiikyaʼtaq',
            options: ['hiikyaʼtaq', 'hiikyaʼta', 'súhimu'],
            translation: 'Como o cavalo não era caro, eu o comprei.',
          },
        ],
        // [KAL] Lição 28, p. 160: “Pam nuy niinaq nu' itsivutini.” ‘If she kills me I will get angry.’ — “Pam nuy
        // niinaq so'on nu' itsivutini.” ‘If she kills me I will not get angry.’
        voice: {
          bot: 'Pam nuy niinaq nuʼ itsivutini.',
          botTranslation: 'Se ela me matar, eu vou ficar com raiva.',
          expected: ['Pam nuy niinaq soʼon nuʼ itsivutini.', 'pam nuy niinaq soʼon nuʼ itsivutini', 'soʼon nuʼ itsivutini'],
          hint: 'Faça a negativa da condicional com “soʼon”, como no livro: “Pam nuy niinaq soʼon nuʼ itsivutini.”',
        },
        communityPrompt: 'Escreva uma frase do livro com “se” e uma com “porque”: “Um tuutuyteʼ um mokni” (se você ficar doente, vai morrer) e “Pam nímaqe oovi haalayi” (porque foi para casa, ele está feliz).',
      },
      {
        id: 'hop-u8-l2',
        title: 'Haqami tsaatsayomya?: onde estão as crianças?',
        kind: 'licao',
        words: ['Tsaatsayom', 'Ayata', 'Naʼöna', 'Kaphe', 'Yaavo', 'Haak'],
        cloze: [
          // [KAL] Diálogo 10, p. 166: “Ta'á, haqami tsaatsayomya?” ‘All right, where are the kids?’
          {
            sentence: 'Taʼá, haqami ___?',
            answer: 'tsaatsayomya',
            options: ['tsaatsayomya', 'tsaatsayom', 'kaphe'],
            translation: 'Muito bem, onde estão as crianças?',
          },
          // [KAL] Diálogo 10, p. 166: “Pay so'on naat pas yaavo haqamiya.” ‘They couldn't have gone too far yet.’
          {
            sentence: 'Pay soʼon naat pas ___ haqamiya.',
            answer: 'yaavo',
            options: ['yaavo', 'haak', 'yev'],
            translation: 'Eles ainda não podem ter ido muito longe.',
          },
          // [KAL] Diálogo 10, p. 166–167: “Yev kaphet hiiko'o.” ‘Have some coffee here.’
          {
            sentence: 'Yev ___ hiikoʼo.',
            answer: 'kaphet',
            options: ['kaphet', 'kaphe', 'kuuyi'],
            translation: 'Tome um café aqui.',
          },
        ],
        // [KAL] Diálogo 10, p. 166–167: “Tus nu' ungem pumuy hevto.” ‘I will go look for them for you.’ — “Antsa'a.”
        // ‘That is good.’ — “Pev haak qátu'u.” ‘Sit here for a while.’
        voice: {
          bot: 'Tus nuʼ ungem pumuy hevto.',
          botTranslation: 'Vou procurá-los para você.',
          expected: ['Antsaʼa.', 'antsaʼa', 'Antsaʼa'],
          hint: 'Aprove, como o tio do Diálogo 10: “Antsaʼa” (que bom).',
        },
        communityPrompt: 'Use as falas do Diálogo 10 para convidar alguém: “Pev haak qátuʼu” (sente-se aqui um pouco) e “Yev kaphet hiikoʼo” (tome um café aqui).',
      },
      {
        id: 'hop-u8-l3',
        title: 'Prova: o curso inteiro',
        kind: 'prova',
        words: [],
        cloze: [],
        // [KAL] Lição 30, p. 168–169 e 171: “Nu' qa navoti'ta sen tumala'taniqa'e.” ‘I don't know whether I'll be
        // working.’; p. 168: “Sen pam tumala'ta.” ‘Perhaps he's working.’
        voice: {
          bot: 'Sen pam tumalaʼta.',
          botTranslation: 'Será que ele está trabalhando?',
          expected: ['Nuʼ qa navotiʼta sen tumalaʼtaniqaʼe.', 'nuʼ qa navotiʼta', 'qa navotiʼta'],
          hint: 'Diga que você não sabe se vai trabalhar, com a frase do livro: “Nuʼ qa navotiʼta sen tumalaʼtaniqaʼe.”',
        },
        communityPrompt: 'Reconte a Leitura 3 com três frases do livro: “Yaw hisat Songoopavit atkyave iisaw kiʼta” (há muito tempo, um coiote morava embaixo de Songoopavi), “Um ngasta homasaʼta, um kus hin puuyaltini” (você não tem penas, não consegue voar) e “Pantani, pantani, itam súʼantsatsna!” (perfeito, fizemos certo!).',
      },
    ],
  },
];
