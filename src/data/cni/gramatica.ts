import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do asháninka, do A1.1 ao A2.2. O A2 (g5-g8) segue o apêndice de Willard
 * Kindberg, “Los afijos verbales del asháninca”, em Kindberg (1980, pp. 461-466, lido na imagem da
 * página), a Tabla 3 de Montoya e Ramos (2024, p. 94) e as frases do MINEDU (2021). Fontes do A1:
 * Montoya e Ramos (2024), “Ashaninka”, Enciclopedia de las lenguas indígenas u originarias del Perú en
 * el Bicentenario, vol. 1, pp. 93-97 (Tabla 4, afixos de pessoa: n(o)- / p(i)- / i-~y-~Ø- / o-~Ø- / a-;
 * “de verbo inicial”; posse marcada no nome possuído; substantivos alienáveis × inalienáveis; o
 * único caso é o locativo -ki); Kindberg (1980), introdução (p. 5: “los sustantivos normalmente
 * poseídos se dan con el prefijo posesivo de primera persona n- o no-… naco ‘mi mano’, acontsi
 * ‘huella digital’”) e verbetes citados; MINEDU (2021) para as frases. Todos os exemplos são frases
 * dessas fontes, no alfabeto oficial (ver vocabulario.ts).
 *
 * ojitari (‘chama-se’, 3ª pessoa feminina/não masculina): MINEDU 2021, entrada timarantapaintsiri
 * (“¿Jaoka ojitari ñakarontsi timarantapaintsiri?” — qual é o número que sobrou?) e o título da
 * cartilha da PUCP-RIDEI “¿Paita ojitari iñane Asháninka?” (como se chama a língua asháninka?).
 */
export const GRAMMAR_CNI: GrammarTopic[] = [
  {
    id: 'cni-g1',
    level: 'A1.1',
    title: 'No-, pi-, i-, o-: quem fala está no começo do verbo',
    emoji: '🙋',
    summary: 'O asháninka marca quem faz a ação com um prefixo no verbo; os pronomes soltos servem para dar ênfase.',
    sections: [
      {
        text: 'No asháninka, o verbo leva na frente um prefixo que diz quem faz a ação: no- (eu), pi- (você), i- (ele; y- antes de vogal), o- (ela) e a- (nós). Com o verbo “chamar-se”, dá para ver três pessoas em frases reais: nojita (eu me chamo), pijitari (você se chama, na pergunta) e ojitari (ela/isso se chama).',
        table: {
          head: ['Pessoa', 'Prefixo', 'Exemplo'],
          rows: [
            ['eu', 'no-', 'Nojita Kapeshi. (eu me chamo Kapeshi)'],
            ['você', 'pi-', '¿Jaoka pijitari? (como você se chama?)'],
            ['ele', 'i- / y-', 'Yamanantake apa… (o pai comprou…)'],
            ['ela', 'o-', '¿Jaoka ojitari…? (como se chama…?)'],
            ['nós', 'a-', 'Tsame ayea. (vamos comer)'],
          ],
        },
        examples: [
          ['¿Jaoka pijitari? — Nojita Kapeshi.', 'Como você se chama? — Eu me chamo Kapeshi.'],
          ['¿Pokajimpi? — Nopokake.', 'Você veio? — Vim.'],
          ['Icheriakero jananeki paperi.', 'O menino rasgou o papel.'],
        ],
      },
      {
        text: 'Os pronomes soltos existem — naro (eu), abiro (você), irinti (ele), irointi (ela) —, mas a pessoa já está no verbo, e por isso eles aparecem sobretudo para destacar alguém: “Meka abirori…”, agora é VOCÊ que… Repare também que o asháninka começa a frase pelo verbo: “Yamanantake apa aparoni tyobirimento” é, palavra por palavra, “comprou o pai uma motosserra”.',
        examples: [
          ['Meka abirori poimishitobero ora pankenatantsi jenokiniri.', 'Agora, você resolve o problema de cima.'],
          ['Yamanantake apa aparoni tyobirimento.', 'Meu pai comprou uma motosserra.'],
          ['Opempe irinti oitsokatsiri.', 'O tucano, ele é ovíparo.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “Pijita Linu” para falar de si: pi- é “você”; para “eu me chamo”, use no-: “Nojita Linu.”',
      'Usar “naro” e “abiro” em toda frase, como “eu” e “você” no português: a pessoa já está no prefixo do verbo, e o pronome solto soa como ênfase.',
    ],
    quiz: [
      { question: 'Como se diz “eu me chamo Linu”?', options: ['Nojita Linu.', 'Pijitari Linu.', 'Ojitari Linu.'], answer: 'Nojita Linu.', explanation: 'O prefixo no- é “eu”; pi- é “você” e o- é “ela”.' },
      { question: 'Qual prefixo quer dizer “você”?', options: ['pi-', 'no-', 'o-'], answer: 'pi-', explanation: '“¿Jaoka pijitari?” — como VOCÊ se chama?' },
    ],
  },
  {
    id: 'cni-g2',
    level: 'A1.1',
    title: 'Je, te, eiro e as perguntas com jaoka',
    emoji: '❓',
    summary: '“Je” é sim, “te” nega a frase, “eiro” nega uma ordem, e “jaoka” abre perguntas de onde, como e qual.',
    sections: [
      {
        // Kindberg 1980, pp. 395 (no: caari, eiro, te; no hay: te catsi), 437 (sí: iri, je), 275 (adonde:
        // ¿jaoca?); MINEDU 2021, entradas okantakotiri e pitetsitok
        text: '“Je” quer dizer sim. Para negar, “te” vem antes do verbo. Para dizer “não faça!”, o asháninka usa outra palavra, “eiro”. E “jaoka” é a palavra de pergunta que serve para onde, como e qual: “¿Jaoka pijitari?” (como você se chama?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['je', 'sim', 'Je. (sim)'],
            ['te', 'não', 'Te nokomityaro… (não tenho dificuldade…)'],
            ['eiro', 'não (em ordens)', 'Eiro pipiakotaro… (não se esqueça…)'],
            ['jaoka', 'onde? como? qual?', '¿Jaoka pijitari? (como você se chama?)'],
          ],
        },
        examples: [
          ['Te nokomityaro namenakotero okantakotiri shiyakantsi.', 'Não tenho dificuldade em ler a legenda da imagem.'],
          ['Eiro pipiakotaro poyero pitetsitok.', 'Não se esqueça de pôr os dois-pontos.'],
          ['¿Jaoka ojitari ñakarontsi timarantapaintsiri?', 'Qual é o número que sobrou?'],
        ],
      },
    ],
    pitfalls: [
      'Usar “te” para proibir: numa ordem negativa (“não faça”), o asháninka usa “eiro”.',
      'Confundir “ari” com “aari”: “ari” é uma afirmação, “aari” é “irmão” na boca de uma mulher — é um dos poucos casos em que a escrita dobra a vogal.',
    ],
    quiz: [
      { question: 'Como se diz “não” numa frase comum (não numa ordem)?', options: ['te', 'eiro', 'je'], answer: 'te', explanation: '“Eiro” é para ordens negativas (“não faça”); “je” é sim.' },
      { question: 'Qual palavra abre a pergunta “como você se chama?”', options: ['jaoka', 'je', 'naro'], answer: 'jaoka', explanation: '“¿Jaoka pijitari?”' },
    ],
  },
  {
    id: 'cni-g3',
    level: 'A1.2',
    title: 'Nobanko, pibanko, ibanko: de quem é',
    emoji: '🏠',
    summary: 'Os mesmos prefixos do verbo marcam o dono no nome: no- meu, pi- teu, i- dele, o- dela, a- nosso.',
    sections: [
      {
        // Montoya e Ramos 2024, p. 95 (“Los prefijos también se unen a los sustantivos para referir a la
        // persona poseedora”); nobanko: Kindberg 1980, p. 107; pibanko, ibanko, abanko, pitomi, oitsare:
        // MINEDU 2021 (entradas pitsirekero, kipatsipetoki, karamina, sankenarentsipana, pintsereakotero)
        text: 'Para dizer de quem é uma coisa, o asháninka usa no nome os mesmos prefixos do verbo. Com “casa” dá para ver quase todos, em frases reais: nobanko (minha casa), pibanko (tua casa), ibanko (a casa dele), abanko (a nossa casa). Note que “pankotsi” (casa, de ninguém em especial) perde o final -tsi e troca o p por b quando ganha dono.',
        table: {
          head: ['Dono', 'Prefixo', 'Exemplo'],
          rows: [
            ['meu', 'no-', 'nobanko (minha casa), notomi (meu filho)'],
            ['teu', 'pi-', 'pibanko (tua casa), pitomi (teu filho)'],
            ['dele', 'i-', 'ibanko (a casa dele)'],
            ['dela', 'o-', 'oitsare (a roupa dela)'],
            ['nosso', 'a-', 'abanko (a nossa casa)'],
          ],
        },
        examples: [
          ['Nojate nobankoki.', 'Vou para a minha casa.'],
          ['Pitsirekero shiyakantsi ashitakoroki pibanko.', 'Cole o desenho na porta da sua casa.'],
          ['Itantotaro kipatsipetoki ibanko koki.', 'A parede da casa do meu sogro é de adobe.'],
          ['Kametsa abetsikantyaro karamina abanko.', 'É bom cobrir a nossa casa com zinco.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “Nojate pankotsiki” para “vou para a MINHA casa”: com dono, a palavra muda — “nobankoki”.',
      'Achar que i- e o- são só “ele” e “ela” do verbo: no nome, eles são “dele” e “dela” (ibanko, oitsare).',
    ],
    quiz: [
      { question: 'Como se diz “a tua casa”?', options: ['pibanko', 'nobanko', 'abanko'], answer: 'pibanko', explanation: 'pi- é “teu”; no- é “meu” e a- é “nosso”.' },
      { question: '“Notomi” quer dizer…', options: ['meu filho', 'teu filho', 'filho dela'], answer: 'meu filho', explanation: 'no- é “meu”; “teu filho” é “pitomi”.' },
    ],
  },
  {
    id: 'cni-g4',
    level: 'A1.2',
    title: 'Noito, nako: o corpo sempre tem dono, e o -ki do lugar',
    emoji: '✋',
    summary: 'Partes do corpo e parentes vêm com dono; sem dono, ganham -tsi. E -ki marca o lugar.',
    sections: [
      {
        // Kindberg 1980, p. 5 (naco / acontsi), p. 299 (iitontsi / noito); Montoya e Ramos 2024, p. 94
        // (alienáveis × inalienáveis); Cushimariano e Sebastián 2008 (“-tsi suf. Se añade a sustantivos
        // no poseídos”)
        text: 'Partes do corpo e parentes são “de alguém” por natureza, e o dicionário os dá já com dono: noito (minha cabeça), nako (minha mão), noki (meu olho), noiti (meu pé), noishi (meu cabelo). Quando é preciso falar de uma parte do corpo sem dono, a palavra ganha o final -tsi: a cabeça, em geral, é “iitontsi”; e “akontsi”, da mesma raiz de “nako”, é a impressão digital.',
        examples: [
          ['noito → iitontsi', 'minha cabeça → cabeça (de ninguém em especial)'],
          ['nako → akontsi', 'minha mão → impressão digital'],
        ],
      },
      {
        // Montoya e Ramos 2024, p. 94: “los sustantivos no reciben marcas de caso, excepto el sufijo
        // locativo -ki”; frases: Kindberg 1980, pp. 107-108; MINEDU 2021, entrada tipitsaro
        text: 'O substantivo asháninka não muda para sujeito ou objeto; a única marca que ele recebe é -ki, que diz “em” ou “para” um lugar.',
        examples: [
          ['Nojempatake noitiki.', 'Estou com o pé dormente (lit. no meu pé).'],
          ['Ijajenkatake otishiki ikajemi.', 'Faz eco nos morros quando ele chama.'],
          ['Pishiyakante kipatsiki aparoni tipitsaro antaro.', 'Desenhe no chão uma linha aberta grande.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra “solta” para “mão” ou “olho” ao falar do próprio corpo: use a forma com dono (nako, noki).',
      'Esquecer o -ki: “Nojate nobanko” fica sem o “para”; o certo é “Nojate nobankoki”.',
    ],
    quiz: [
      { question: 'Como se diz “minha cabeça”?', options: ['noito', 'iitontsi', 'noiti'], answer: 'noito', explanation: '“Iitontsi” é a cabeça sem dono; “noiti” é “meu pé”.' },
      { question: 'O que o final -ki faz em “nobankoki”?', options: ['diz “para” (o lugar)', 'faz o plural', 'diz “meu”'], answer: 'diz “para” (o lugar)', explanation: '“Nojate nobankoki” — vou PARA a minha casa; o “meu” é o no-.' },
    ],
  },
  {
    id: 'cni-g5',
    level: 'A2.1',
    title: 'Ipoki, impoke: o que já é e o que ainda não é',
    emoji: '⏳',
    summary: 'O verbo separa o real (aconteceu ou acontece) do que ainda não aconteceu: o futuro e o talvez.',
    sections: [
      {
        // Montoya e Ramos 2024, p. 94, Tabla 3 (realis -i ~ -e, este “después de sufijos -ak, -aj” / -a;
        // irrealis -e / -ea; verbos de conjugação I e A); Kindberg 1980, p. 461 (“-n-/-m- futuro incompleto: ipoqui viene / impoque
        // vendrá”; “-ri-/-r- futuro incompleto: irijate él irá, iramene él verá”; ijati él se va) e pp.
        // 464-465 (“-a acción empezada: yoa él come/él ya ha comido”; “-i: ijati él se va/él ya se ha
        // ido”; “-ea acción no empezada: te iroyea(ji) él no comió”; “-e: te irijateji él no se fue”)
        text: 'Todo verbo asháninka diz se a ação é real ou não. Real é o que aconteceu ou está acontecendo: o verbo termina em -i ou -a (“ipoki”, ele vem ou veio; “ijati”, ele vai ou foi; “yoa”, ele come ou comeu). Cuidado com uma exceção: depois do pedaço -ak-, o real também termina em -e — é o caso de “nopokake” (vim) e “ijajeitake” (foram todos). O que ainda não é real — o futuro, o talvez, o que não aconteceu — termina em -e ou -ea, e no futuro ganha ainda um n ou m antes da raiz (“impoke”, ele virá) ou, em alguns verbos, um -ri- ou -r- (“irijate”, ele irá; “iramene”, ele verá).',
        table: {
          head: ['Verbo', 'Real (já é)', 'Ainda não'],
          rows: [
            ['vir', 'ipoki (vem, veio)', 'impoke (virá)'],
            ['ir', 'ijati (vai, foi)', 'irijate (irá)'],
            ['comer', 'yoa (come, comeu)', 'te iroyea (não comeu)'],
          ],
        },
        examples: [
          ['Ipoki. — Impoke.', 'Ele vem. — Ele virá.'],
          ['Ijati. — Irijate.', 'Ele vai. — Ele irá.'],
        ],
      },
      {
        // Kindberg 1980, p. 466 (“-mpa duda: ¿Impoquempa? ¿Vendrá?”; “-rica quizás: Impoquerica, te
        // nioteji. Pueda ser que venga, no sé.”); MINEDU 2021, p. 68 (Osaitekera nojate…) e p. 70 (Nokoi
        // nojate…). As duas frases do MINEDU estão CORTADAS na primeira oração: a da p. 68 continua “ari
        // nonkobakoyetantero iyoyetiri”; a da p. 70, “noyotantyari jaoka okantari ariorika nametapakia”
        // (‘Quiero ir en la zona fría para comprobar cómo es y si me puedo acostumbrar’).
        text: 'O futuro também serve para a dúvida: com -mpa no fim, “¿impokempa?” é “será que ele vem?”; com -rika, “impokerika” é “talvez ele venha”. Para dizer quando, o asháninka usa palavras soltas: “oshaite” (ontem), “meka” (agora) e “osaitekera” (amanhã). Repare que, nas frases do Ministério da Educação, “nojate” aparece tanto com “amanhã” quanto com “quero”: o contexto diz o tempo.',
        examples: [
          ['¿Impokempa? — Impokerika, te nioteji.', 'Será que ele vem? — Talvez venha, não sei.'],
          ['Osaitekera nojate noñeri sheripiyari.', 'Amanhã vou visitar o curandeiro.'],
          ['Nokoi nojate okatsinkaiti.', 'Quero ir para a zona fria.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um passado separado: “ipoki” serve para “vem” e para “veio”. O que muda a forma é se a ação é real ou ainda não.',
      'Esquecer o n ou m do futuro: “ipoke” não é “virá”; o certo é “impoke”, com o m antes do p.',
    ],
    quiz: [
      { question: 'Como se diz “ele virá”?', options: ['impoke', 'ipoki', 'nopokake'], answer: 'impoke', explanation: '“Ipoki” é “vem” ou “veio”; o futuro ganha m na frente e e no fim.' },
      { question: 'O que quer dizer “¿Impokempa?”?', options: ['Será que ele vem?', 'Ele veio.', 'Venha!'], answer: 'Será que ele vem?', explanation: 'O -mpa no fim marca a dúvida.' },
      { question: 'Qual palavra quer dizer “amanhã”?', options: ['osaitekera', 'oshaite', 'meka'], answer: 'osaitekera', explanation: '“Oshaite” é ontem e “meka” é agora.' },
    ],
  },
  {
    id: 'cni-g6',
    level: 'A2.1',
    title: 'Te … -ji, eiro … -tsi: dizer que não',
    emoji: '🚫',
    summary: '“Te” com -ji nega o que aconteceu; “eiro” com -tsi nega o futuro e as ordens; “kaari” nega dentro da frase.',
    sections: [
      {
        // Kindberg 1980, p. 465 (“te…-ji pasado negativo: te nojateji no me fui; te nomayeji no estoy
        // durmiendo”; “eiro…-tsi (-chi) futuro o mandato negativo: eiro nojatitsi no iré; eiro pijatitsi no
        // irás/no te vas”; “-e acción no empezada: te irijateji”) e p. 383 (“malo: te incameetsateji”)
        text: 'No A1 você viu que “te” nega e “eiro” proíbe. Agora a regra completa: depois de “te”, o verbo vai para a forma do “ainda não” e ganha -ji no fim. Assim, “nojate” (vou) vira “te nojateji” (não fui). Com “eiro”, o verbo ganha -tsi: “eiro nojatitsi” é “não irei”, e “eiro pijatitsi”, “não vá”. Até “mau” se diz assim: “te inkametsateji”, literalmente “não é bom”, de “kametsa” (bom).',
        table: {
          head: ['Negação', 'Para quê', 'Exemplo'],
          rows: [
            ['te … -ji', 'o que não aconteceu', 'te nojateji (não fui)'],
            ['te … -ji', 'o que não acontece agora', 'te nomayeji (não estou dormindo)'],
            ['eiro … -tsi', 'o que não vai acontecer', 'eiro nojatitsi (não irei)'],
            ['eiro … -tsi', 'ordem negativa', 'eiro pijatitsi (não vá)'],
          ],
        },
        examples: [
          ['Te irijateji.', 'Ele não foi.'],
          ['Te inkametsateji.', 'É mau (não é bom).'],
          ['Nomotonkakeri kemari te naberiji.', 'Atiro a flecha na anta, mas não a pego.'],
        ],
      },
      {
        // Kindberg 1980, p. 462 (“-ant- consecuencia: Oparii incani caari nopocanta. Cayó lluvia; por eso no
        // vine.”) e p. 395 (no: caari, eiro, te)
        text: '“Kaari” é outro “não”, que aparece dentro da frase, ligando uma coisa à outra. Junto com o -ant- (“por isso”) no verbo, explica por que algo não aconteceu.',
        examples: [
          ['Opari inkani kaari nopokanta.', 'Choveu; por isso não vim.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “te nojate” para “não fui”: com “te”, o verbo leva -ji no fim — “te nojateji”.',
      'Usar “te” para “não vá!”: ordem negativa é com “eiro” e -tsi — “eiro pijatitsi”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não fui”?', options: ['te nojateji', 'eiro nojatitsi', 'te nojate'], answer: 'te nojateji', explanation: '“Te” pede -ji no fim; “eiro nojatitsi” é “não irei”.' },
      { question: 'Como se diz “não vá!”?', options: ['eiro pijatitsi', 'te pijateji', 'kaari pijate'], answer: 'eiro pijatitsi', explanation: 'Ordens negativas usam “eiro” e -tsi.' },
      { question: '“Te inkametsateji” quer dizer…', options: ['é mau', 'é muito bom', 'não sei'], answer: 'é mau', explanation: 'Literalmente “não é bom”, de “kametsa” (bom).' },
    ],
  },
  {
    id: 'cni-g7',
    level: 'A2.2',
    title: 'Tsitsipe, ijajeitake: muitos e todos',
    emoji: '🧺',
    summary: 'O nome faz o plural com -pe; o verbo diz “todos” com -jei- e “vários” com -ye-.',
    sections: [
      {
        // plurais em -pe nas frases do MINEDU 2021 (traduções do próprio livro): tsitsipe ‘las leñas’ (p.
        // 36), kantiripe ‘las canastas’ (p. 57), shimape ‘los peces’ (p. 58), atiripe ‘las personas’ (p.
        // 33), jananekipe ‘los niños’ (p. 44), tsimeripe ‘las aves’ (p. 32)
        text: 'Quando são muitas coisas ou muitas pessoas, o nome ganha -pe no fim. As frases do vocabulário escolar asháninka mostram isso com todo tipo de palavra: lenhas, cestos, peixes, pessoas, crianças, pássaros.',
        table: {
          head: ['Um', 'Muitos', 'Sentido'],
          rows: [
            ['tsitsi', 'tsitsipe', 'lenha → as lenhas'],
            ['kantiri', 'kantiripe', 'cesto → os cestos'],
            ['shima', 'shimape', 'peixe → os peixes'],
            ['atiri', 'atiripe', 'pessoa → as pessoas'],
            ['jananeki', 'jananekipe', 'criança → as crianças'],
          ],
        },
        examples: [
          ['Pobametsatero tsitsipe.', 'Arrume as lenhas.'],
          ['Pishintsaitri shimape inkarate aparoni tsapaye pipimantantyariri.', 'Enfie os peixes de dez em dez, para vender.'],
          ['Pijikoyeteri atiripe shiyakantakotainchari.', 'Indique as pessoas que estão no desenho.'],
        ],
      },
      {
        // Kindberg 1980, p. 464 (“-jei- todos: Ijajeitaque. Se fueron todos.”; “-ye- varios: icantayetanari,
        // lo (varias cosas) que me dijo”) e p. 463 (“Ipocajeitapaaque. Vinieron muchos/todos.”); MINEDU 2021,
        // p. 44 (“Shitoajeitake jananekipe apitetirori yotaneri.”) e p. 23 (“Maroni jananekipe isankenajeiti
        // aparoni apiapitachari ñantsi.”)
        text: 'No verbo, “todos” é -jei-: “ijati” (ele vai) → “ijajeitake” (foram todos); “ipokajeitapake”, vieram muitos, vieram todos. E “vários” é -ye-: “ikantayetanari”, o que (várias coisas) ele me disse. Muitas vezes o nome no plural e o verbo com -jei- andam juntos.',
        examples: [
          ['Ijajeitake.', 'Foram todos.'],
          ['Ipokajeitapake.', 'Vieram muitos (todos).'],
          ['Shitoajeitake jananekipe apitetirori yotaneri.', 'Já saíram as crianças do segundo ano.'],
          ['Maroni jananekipe isankenajeiti aparoni apiapitachari ñantsi.', 'Todas as crianças escrevem uma rima.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o -pe no verbo: o plural do nome é -pe (kantiripe); no verbo, “todos” é -jei- (ijajeitake).',
      'Achar que o -pe é obrigatório como o “-s” do português: com um número ou com “osheki” (muito), as frases do curso trazem o nome sem -pe (“maba sankenarentsipana”, três cadernos).',
    ],
    quiz: [
      { question: 'Como se diz “os cestos”?', options: ['kantiripe', 'kantirijei', 'kantiri'], answer: 'kantiripe', explanation: 'O plural do nome é -pe.' },
      { question: 'O que quer dizer “ijajeitake”?', options: ['foram todos', 'ele vai', 'não fui'], answer: 'foram todos', explanation: '-jei- no verbo é “todos”.' },
    ],
  },
  {
    id: 'cni-g8',
    level: 'A2.2',
    title: 'Paita, jaoka, janika: perguntar e explicar',
    emoji: '❔',
    summary: 'As perguntas começam por paita, jaoka ou janika e fecham com -ri no verbo; -ant- diz “por isso”.',
    sections: [
      {
        // Kindberg 1980, p. 465 (“-ri tercera persona, masculino o animado… objeto: Icamantiri”, um afixo à
        // parte), p. 466 (“-ri desconocimiento; razón: ¿Jaoca pijateri? ¿Adónde vas? ¿Jaoca pipajitari?
        // ¿Cómo te llamas? ¿Paita piquisantari? ¿Por qué estás enojado?”), p. 462 (“¿paita ipocashitiri? ¿Por
        // qué vino?”; “¿Jaoca icarati pipocantari? ¿Cuándo viniste?”), p. 422 (quién: janica), p. 320
        // (cuándo: jaoca)
        text: 'As palavras de pergunta vêm no começo: “paita” (o quê? por quê?), “jaoka” (onde? como? quando?) e “janika” (quem?). O verbo da pergunta costuma fechar com -ri, a marca do “não sei”: “¿Jaoka pijateri?” (aonde você vai?), “¿Paita pikisantari?” (por que você está zangado?). Você já conhece um caso: “¿Jaoka pijitari?”.',
        table: {
          head: ['Palavra', 'Pergunta', 'Exemplo'],
          rows: [
            ['paita', 'o quê? por quê?', '¿Paita ipokashitiri? (por que ele veio?)'],
            ['jaoka', 'onde? como? quando?', '¿Jaoka pijateri? (aonde vai?)'],
            ['janika', 'quem?', '¿Janika? (quem?)'],
          ],
        },
        examples: [
          ['¿Jaoka pijateri?', 'Aonde você vai?'],
          ['¿Jaoka ikarati pipokantari?', 'Quando você veio?'],
          ['¿Paita pikisantari?', 'Por que você está zangado?'],
        ],
      },
      {
        // Kindberg 1980, p. 462 (“-ant-: 1. razón: Iquishiri, irootaque itoncantariri. Estaba enojado con él,
        // por eso le disparó. 2. consecuencia: Oparii incani caari nopocanta. 3. hora: ¿Jaoca icarati
        // pipocantari? 4. instrumento”)
        text: 'Para responder “por quê”, o verbo ganha -ant-, que quer dizer “por isso”, e também “com o quê” e “quando”. É o mesmo pedaço que aparece em “¿Jaoka ikarati pipokantari?” (quando você veio?).',
        examples: [
          ['Opari inkani kaari nopokanta.', 'Choveu; por isso não vim.'],
          ['Ikishiri, irotake itonkantariri.', 'Estava zangado com ele; por isso atirou nele.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “paita” e “jaoka”: “paita” pergunta o quê ou por quê; “jaoka”, onde, como ou quando.',
      'Confundir o -ri da pergunta com o -ri de “ele” (objeto): Kindberg lista os dois em separado, e em “¿Jaoka pijateri?” (aonde você vai?) não há objeto nenhum; o -ri é a marca do “não sei”.',
    ],
    quiz: [
      { question: 'Como se pergunta “aonde você vai?”', options: ['¿Jaoka pijateri?', '¿Paita pijateri?', '¿Janika pijateri?'], answer: '¿Jaoka pijateri?', explanation: '“Jaoka” pergunta onde; “paita”, o quê ou por quê; “janika”, quem.' },
      { question: 'Qual palavra pergunta “quem?”', options: ['janika', 'paita', 'jaoka'], answer: 'janika', explanation: '“Janika” é “quem”.' },
      { question: 'O que o -ant- faz em “kaari nopokanta”?', options: ['diz “por isso”', 'faz o plural', 'marca o futuro'], answer: 'diz “por isso”', explanation: '“Opari inkani kaari nopokanta”: choveu; POR ISSO não vim.' },
    ],
  },
];
