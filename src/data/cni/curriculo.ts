import type { UnitSeed } from '../types';

/**
 * Trilha do asháninka, do A1.1 ao A2.2 (o teto do curso). Fontes de cada palavra e de cada frase em
 * vocabulario.ts e nos comentários abaixo. Todas as frases
 * são citações (MINEDU 2021; Kindberg 1980, passado para o alfabeto oficial; Montoya e Ramos 2024).
 * No A2, as frases são citações inteiras de Kindberg (1980) e do MINEDU (2021); a única frase cortada é
 * “Osaitekera nojate noñeri sheripiyari”, a primeira oração de uma frase do MINEDU (2021, p. 68), que
 * continua “ari nonkobakoyetantero iyoyetiri” (allí investigaré sobre sus conocimientos).
 * Os únicos encaixes feitos no A1:
 *   - “¿Pokajimpi? — Nopokake.”: pergunta e resposta vêm do MESMO verbete de Kindberg (1980, p. 456,
 *     “venir”), que dá “¿pocajimpi?” como saudação (você veio?) e “nopocaque” como “eu vim”.
 *   - “Nojita Linu.”: troca só o nome em “Nojita Capeshi.” (Kindberg 1980, p. 109).
 */
export const UNITS_CNI: UnitSeed[] = [
  {
    id: 'cni-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kitaiteri! ¿Pokajimpi?',
    emoji: '👋',
    card: {
      id: 'cni-c1',
      title: 'Ashaninka, o povo da Selva Central',
      emoji: '🌳',
      // números: Montoya e Ramos (2024, pp. 88-90; Censo 2017: 73 567 falantes, a língua amazônica mais
      // falada do Peru) e ISA, “Povos Indígenas no Brasil — Ashaninka” (Brasil: 1.720 pessoas, Siasi/Sesai
      // 2020; TI Kampa do Rio Amônia, aldeia Apiwtxa, Marechal Thaumaturgo)
      history:
        'O asháninka é uma língua indígena viva da família aruak, falada por mais de 73 mil pessoas no Peru (censo de 2017): é a língua amazônica mais falada do país. Os asháninka vivem na Selva Central peruana, ao longo dos rios Ene, Tambo, Apurímac, Perené e Bajo Urubamba, em cerca de 400 comunidades. Do outro lado da fronteira, no Acre, vivem cerca de 1.700 Ashaninka (2020), sobretudo na Terra Indígena Kampa do Rio Amônia, perto de Marechal Thaumaturgo, onde a aldeia Apiwtxa ficou conhecida pelo manejo da floresta. O nome antigo “campa” é visto pelos próprios asháninka como ofensivo; eles dizem “ashaninka”, que também quer dizer “patrício, gente nossa”. Este curso usa o alfabeto oficial do Peru, o das escolas bilíngues.',
      // Kindberg 1980, p. 456 (¿pocajimpi?, saudação); p. 298 (quitaiteri, bom dia); p. 11 (Tsame amaye,
      // despedida); ISA (piyarentsi, kitharentsi)
      culture_tip:
        'O dicionário asháninka registra como cumprimento uma pergunta, não um “oi”: “¿Pokajimpi?” — você veio? —, que se responde com “Nopokake” (vim). De manhã também se diz “Kitaiteri” (bom dia; “kitaiteri” é “dia”). À noite, a despedida é um convite: “Tsame amaye”, vamos dormir. No Acre, os Ashaninka do rio Amônia fazem com frequência o “piyarentsi”, a festa da bebida de mandioca (o masato, “piarentsi”, na grafia peruana), e vestem a cushma, a túnica de algodão tecida à mão.',
      // Montoya e Ramos 2024, p. 95, Tabla 4 (n(o)-, p(i)-, i-/y-, o-, a-); exemplos: Kindberg 1980,
      // p. 109 (nojita / pijitari), PUCP-RIDEI e MINEDU 2021 (ojitari)
      grammar_why:
        'No asháninka, quem faz a ação fica num prefixo grudado no verbo: no- é “eu”, pi- é “você”, i- é “ele” e o- é “ela”. Por isso “eu me chamo” é “nojita” e “você se chama” aparece em “¿Jaoka pijitari?”. Os pronomes soltos — naro (eu), abiro (você) — existem, mas aparecem mais para dar ênfase.',
      grammar_examples: [
        ['¿Pokajimpi? — Nopokake.', 'Você veio? — Vim.'],
        ['¿Jaoka pijitari? — Nojita Kapeshi.', 'Como você se chama? — Eu me chamo Kapeshi.'],
        ['Tsame ayea.', 'Vamos comer.'],
        ['Kametsa abetsikantyaro karamina abanko.', 'É bom cobrir a nossa casa com zinco.'],
      ],
      // MINEDU 2021, pp. 13-17 (alfabeto oficial); valores fonéticos: Montoya e Ramos 2024, p. 93
      // (/tʲ/ <ty>, /tʃ/ <ch>, /ʃ/ <sh>, /h/ <j>, /ɲ/ <ñ>, /ɾ/ <r>, /β/ <b>, /j/ <y>)
      character_guide: [
        ['j', 'um sopro, como o “rr” de “carro” em boa parte do Brasil', 'jananeki (criança), Je (sim)'],
        ['sh', 'como o “ch” de “chave”', 'shima (peixe), osheki (muito)'],
        ['ch', 'como o “tch” de “tchau”', 'chorito (papagaio), charine (avô)'],
        ['ts', 'um t seguido de s, como em “tsé-tsé”', 'tsinane (mulher), Tsame (vamos)'],
        ['ty', 'um t molhado, quase “tch”, como o “t” de “tia” no Rio', 'tyapa (galinha)'],
        ['b', 'mais solto que o b do português: os lábios quase não se fecham', 'abiro (você), nobante (minha boca)'],
        ['ñ', 'como o “nh” de “ninho”', 'ñakarontsi (número)'],
      ],
    },
    lessons: [
      {
        id: 'cni-u1-l1',
        title: 'Kitaiteri! ¿Pokajimpi?',
        kind: 'licao',
        words: ['Kitaiteri', '¿Pokajimpi?', 'Nopokake', 'Pasonki', 'Kametsa', 'Tsame'],
        cloze: [
          { sentence: '___ Nopokake.', answer: '¿Pokajimpi?', options: ['¿Pokajimpi?', 'Pasonki.', 'Tsame amaye.'], translation: 'Você veio? Vim.' },
          { sentence: '___ ayea.', answer: 'Tsame', options: ['Tsame', 'Kametsa', 'Pasonki'], translation: 'Vamos comer.' },
          { sentence: '___ abetsikantyaro karamina abanko.', answer: 'Kametsa', options: ['Kametsa', 'Tsame', 'Nopokake'], translation: 'É bom cobrir a nossa casa com zinco.' },
        ],
        voice: {
          bot: '¿Pokajimpi?',
          botTranslation: 'Você veio?',
          expected: ['Nopokake.', 'nopokake'],
          hint: 'Responda com “Nopokake.” (vim).',
        },
        communityPrompt: 'Cumprimente alguém com “Kitaiteri!” e “¿Pokajimpi?”, responda “Nopokake” e agradeça com “Pasonki!”.',
      },
      {
        id: 'cni-u1-l2',
        title: 'Je, te: naro, abiro',
        kind: 'licao',
        words: ['Je', 'Te', 'Naro', 'Abiro', '¿Jaoka pijitari?', 'Nojita'],
        cloze: [
          { sentence: '¿Jaoka ___?', answer: 'pijitari', options: ['pijitari', 'nojita', 'abiro'], translation: 'Como você se chama?' },
          { sentence: '___ Kapeshi.', answer: 'Nojita', options: ['Nojita', 'Naro', 'Je'], translation: 'Eu me chamo Kapeshi.' },
          { sentence: '___ nokomityaro namenakotero okantakotiri shiyakantsi.', answer: 'Te', options: ['Te', 'Je', 'Naro'], translation: 'Não tenho dificuldade em ler a legenda da imagem.' },
        ],
        voice: {
          bot: '¿Jaoka pijitari?',
          botTranslation: 'Como você se chama?',
          expected: ['Nojita Linu.', 'nojita'],
          hint: 'Diga “Nojita” (eu me chamo) e o seu nome: “Nojita Linu.”',
        },
        communityPrompt: 'Pergunte o nome de alguém com “¿Jaoka pijitari?” e responda “Je” (sim) ou “Te” (não) a uma pergunta.',
      },
      {
        // lição extra (17/10/2026): pessoas e os pronomes de 3ª pessoa; frases de Montoya e Ramos 2024,
        // p. 97 (Ikotsitakenero…), MINEDU 2021, entradas paperi (p. 32) e oitsokatsiri (p. 69)
        id: 'cni-u1-l4',
        title: 'Shirampari, tsinane, jananeki: as pessoas',
        kind: 'licao',
        words: ['Atiri', 'Shirampari', 'Tsinane', 'Jananeki', 'Irinti', 'Irointi'],
        cloze: [
          { sentence: 'Ikotsitakenero Joa oka kaniri ___.', answer: 'tsinane', options: ['tsinane', 'jananeki', 'atiri'], translation: 'O João cozinhou esta mandioca para a mulher.' },
          { sentence: 'Icheriakero ___ paperi.', answer: 'jananeki', options: ['jananeki', 'tsinane', 'shirampari'], translation: 'O menino rasgou o papel.' },
          { sentence: 'Opempe ___ oitsokatsiri.', answer: 'irinti', options: ['irinti', 'irointi', 'naro'], translation: 'O tucano, ele é ovíparo.' },
        ],
        voice: {
          bot: 'Ikotsitakenero Joa oka kaniri tsinane.',
          botTranslation: 'O João cozinhou esta mandioca para a mulher.',
          expected: ['Ikotsitakenero Joa oka kaniri tsinane.', 'tsinane'],
          hint: 'Repita a frase: “tsinane” é “mulher”, e o verbo vem primeiro.',
        },
        communityPrompt: 'Escreva quem você vê na sua rua com shirampari (homem), tsinane (mulher) e jananeki (criança), e use irinti (ele) e irointi (ela).',
      },
      {
        // lição extra (17/10/2026): números de 1 a 3 e “muito”; frases do MINEDU 2021, entradas kiribiro
        // (p. 27), sankenarentsipana (p. 37) e anakarojaniki (p. 42)
        id: 'cni-u1-l5',
        title: 'Aparoni, apite, maba: contar até três',
        kind: 'licao',
        words: ['Aparoni', 'Apite', 'Maba', 'Osheki', 'Kiribiro', 'Kiteriri'],
        cloze: [
          { sentence: 'Pamakena ___ kiribiro.', answer: 'apite', options: ['apite', 'maba', 'aparoni'], translation: 'Me dê dois livros.' },
          { sentence: 'Pamanante ___ sankenarentsipana irashi pitomi.', answer: 'maba', options: ['maba', 'apite', 'osheki'], translation: 'Compre três cadernos para o seu filho.' },
          { sentence: 'Pimpotsotantyaro kiteriri ___ anakarojaniki.', answer: 'aparoni', options: ['aparoni', 'apite', 'maba'], translation: 'Pinte de amarelo um retangulozinho.' },
        ],
        voice: {
          bot: 'Pamakena apite kiribiro.',
          botTranslation: 'Me dê dois livros.',
          expected: ['Pamakena apite kiribiro.', 'apite'],
          hint: 'Repita o pedido: “apite” é “dois”.',
        },
        communityPrompt: 'Conte coisas da sua casa até três em asháninka: aparoni (um), apite (dois), maba (três). E diga do que você tem “osheki” (muito).',
      },
      {
        id: 'cni-u1-l3',
        title: 'Teste: ¿Pokajimpi?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kitaiteri. ¿Jaoka pijitari?',
          botTranslation: 'Bom dia. Como você se chama?',
          expected: ['Kitaiteri. Nojita Linu.', 'kitaiteri', 'nojita'],
          hint: 'Devolva o “Kitaiteri” e diga o seu nome com “Nojita”: “Kitaiteri. Nojita Linu.”',
        },
        communityPrompt: 'Escreva uma conversa curta em asháninka: o bom dia, o “você veio?”, o seu nome e um “Tsame amaye” para se despedir.',
      },
    ],
  },
  {
    id: 'cni-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Apa, ina, notomi: a família e o corpo',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'cni-c2',
      title: 'Minha casa, tua casa: os prefixos de dono',
      emoji: '🏠',
      // casas: Kindberg 1980, p. 6 (pancotsiqui) e p. 107 (Nojate novancoqui); MINEDU 2021 (pibanko,
      // ibanko, abanko); corpo: Kindberg 1980, pp. 5, 299 (naco; iitontsi / noito); -ki: Montoya e
      // Ramos 2024, p. 94
      history:
        'Os mesmos prefixos que dizem quem faz a ação dizem também de quem é a coisa: no- (meu), pi- (teu), i- (dele), o- (dela), a- (nosso). A casa, “pankotsi” quando não é de ninguém em especial, vira “nobanko” (minha casa), “pibanko” (tua casa), “ibanko” (a casa dele) e “abanko” (a nossa casa). Partes do corpo e parentes quase nunca aparecem sem dono: o dicionário dá “noito” (minha cabeça), “nako” (minha mão), “noki” (meu olho). Sem dono, a palavra ganha o final -tsi: a cabeça de alguém em geral é “iitontsi”.',
      // MINEDU 2021, pp. 124-127 (termos que mudam conforme quem fala); ISA (kitharentsi, cushma)
      culture_tip:
        'Na família asháninka, várias palavras de parentesco dependem de quem fala: um homem chama o irmão de “iye” e a irmã de “choki” (ou “tsio”), mas uma mulher chama o irmão de “aari” e a irmã de “entyo”; o avô é “charine” na boca de um homem e “api” na de uma mulher. E a roupa de todo dia é a cushma, túnica de algodão tecida à mão — “noitsare” é “a minha cushma, a minha roupa”.',
      grammar_why:
        'Para dizer “em” ou “para” um lugar, o asháninka gruda -ki no fim do nome, que não muda de outro jeito: “nobanko” (minha casa) → “nobankoki” (para a minha casa); “noiti” (meu pé) → “noitiki” (no meu pé). É a única marca de caso do substantivo.',
      grammar_examples: [
        ['Nojate nobankoki.', 'Vou para a minha casa.'],
        ['Yamanantake apa aparoni tyobirimento.', 'Meu pai comprou uma motosserra.'],
        ['Nojempatake noitiki.', 'Estou com o pé dormente.'],
        ['Notomi, pisankenate aparoni koakotantsipana.', 'Filho, escreva um pedido.'],
      ],
      character_guide: [
        ['no-', 'meu, minha; eu', 'nobanko (minha casa), notomi (meu filho), nojita (eu me chamo)'],
        ['pi-', 'teu, tua; você', 'pibanko (tua casa), pitomi (teu filho)'],
        ['i-', 'dele; ele', 'ibanko (a casa dele)'],
        ['o-', 'dela; ela', 'oitsare (a roupa dela)'],
        ['a-', 'nosso, nossa; nós', 'abanko (a nossa casa)'],
        ['-ki', 'em, para (lugar)', 'nobankoki (para a minha casa), otishiki (nos morros)'],
      ],
    },
    lessons: [
      {
        id: 'cni-u2-l1',
        title: 'Apa, ina, isha',
        kind: 'licao',
        words: ['Apa', 'Ina', 'Isha', 'Notomi', 'Noshinto', 'Iye'],
        cloze: [
          { sentence: 'Yamanantake ___ aparoni tyobirimento.', answer: 'apa', options: ['apa', 'isha', 'notomi'], translation: 'Meu pai comprou uma motosserra.' },
          { sentence: 'Pimpero ___ intarori itasakotapake tyopiki.', answer: 'isha', options: ['isha', 'apa', 'iye'], translation: 'Dê à avó o pintinho que nasceu primeiro.' },
          { sentence: 'Aretapaja ___ otsipatirori.', answer: 'iye', options: ['iye', 'ina', 'isha'], translation: 'O meu quarto irmão já chegou.' },
        ],
        voice: {
          bot: 'Notomi, pisankenate aparoni koakotantsipana.',
          botTranslation: 'Filho, escreva um pedido.',
          expected: ['Notomi, pisankenate aparoni koakotantsipana.', 'notomi'],
          hint: 'Repita a frase: “notomi” é “meu filho” — o no- é o “meu”.',
        },
        communityPrompt: 'Apresente a sua família: apa (pai), ina (mãe), isha (avó), notomi (meu filho), noshinto (minha filha).',
      },
      {
        id: 'cni-u2-l2',
        title: 'Noito, nako, noki: o corpo',
        kind: 'licao',
        words: ['Noito', 'Nako', 'Noki', 'Nobante', 'Noiti', 'Noishi'],
        cloze: [
          { sentence: 'Nojempatake ___.', answer: 'noitiki', options: ['noitiki', 'nobankoki', 'otishiki'], translation: 'Estou com o pé dormente (lit. no meu pé).' },
          { sentence: 'Karatakotaji ___, nokaratanaje.', answer: 'nokiki', options: ['nokiki', 'noitiki', 'nobankoki'], translation: 'Meus olhos sararam, estou curado.' },
          { sentence: 'Nojate ___.', answer: 'nobankoki', options: ['nobankoki', 'noitiki', 'nokiki'], translation: 'Vou para a minha casa.' },
        ],
        voice: {
          bot: 'Nojempatake noitiki.',
          botTranslation: 'Estou com o pé dormente.',
          expected: ['Nojempatake noitiki.', 'noitiki'],
          hint: 'Repita a frase: “noiti” é “meu pé”, e o -ki quer dizer “em”.',
        },
        communityPrompt: 'Aponte para partes do seu corpo e diga a forma com “meu/minha”: noito (minha cabeça), nako (minha mão), noki (meu olho), noiti (meu pé).',
      },
      {
        id: 'cni-u2-l3',
        title: 'Teste: Apa, ina, nobanko',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¿Pokajimpi?',
          botTranslation: 'Você veio?',
          expected: ['Nopokake. Nojate nobankoki.', 'nopokake', 'nobankoki'],
          hint: 'Diga que veio (“Nopokake.”) e que vai para a sua casa: “Nojate nobankoki.”',
        },
        communityPrompt: 'Escreva sobre a sua família com apa, ina, isha e notomi, e diga para onde vai: “Nojate nobankoki.”',
      },
    ],
  },
  {
    id: 'cni-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Nojate, impoke: o hoje e o amanhã',
    emoji: '🏫',
    card: {
      id: 'cni-c3',
      title: 'Yotantsipanko: a escola em asháninka',
      emoji: '🏫',
      // Andina, “Diversidad cultural: Minedu presenta el manual oficial de escritura ashaninka”, 26/05/2022
      // (1003 escolas EIB, 39 386 alunos, 2853 professores bilíngues); MINEDU 2021, pp. 7-11 (como o
      // vocabulário pedagógico foi feito e validado por professores) e p. 17 (yotantsipanko, tyapapanko:
      // compostos), p. 39 (yotantsi: conocimiento); CPI-Acre, página “Ashaninka”, seção “Educação
      // Escolar” (Escola Samuel Piãnko, aulas em ashaninka, material didático próprio)
      history:
        'No Peru, a escola das comunidades asháninka é bilíngue. Em 2022 eram 1.003 escolas de educação intercultural bilíngue, com mais de 39 mil alunos e 2.853 professores bilíngues. Para elas, o Ministério da Educação publicou em 2021 um vocabulário pedagógico, com palavras novas que professores asháninka discutiram e aprovaram em grupos, e em 2022 um manual oficial de escrita. A palavra “yotantsipanko”, escola, junta “yotantsi” (conhecimento) e “panko” (casa), como “tyapapanko” (galinheiro) junta “tyapa” (galinha) e “panko”. No Acre, a aldeia Apiwtxa tem a sua própria escola, a Escola Samuel Piãnko: as aulas são em asháninka, o português também se aprende, e a comunidade faz o seu material didático.',
      // CPI-Acre, página “Ashaninka”, seções “Língua Ashaninka” e “Educação Escolar”
      culture_tip:
        'Para os Ashaninka do rio Amônia, a educação de verdade acontece na prática: as crianças aprendem as tarefas do dia a dia fazendo junto com os mais velhos. A escola serve para outra coisa: dominar a escrita e conhecer os direitos, para lidar com o mundo de fora e cuidar do território. E a primeira língua de toda criança é o asháninka; o espanhol, no Peru, e o português, no Brasil, vêm depois.',
      // Montoya e Ramos 2024, p. 94 (realis × irrealis, Tabla 3); Kindberg 1980, p. 461 (ipoqui / impoque;
      // ijati / irijate), pp. 464-465 (-a, -i: acción empezada; -ea, -e: acción no empezada)
      grammar_why:
        'O verbo asháninka não tem um “passado” e um “presente” como o português. Ele separa o que já é real (aconteceu ou está acontecendo) do que ainda não é: o futuro, o talvez e o que não aconteceu. “Ipoki” é “ele vem” ou “ele veio”; “impoke”, com um m na frente e e no fim, é “ele virá”. Para dizer quando, entram palavras como “oshaite” (ontem), “meka” (agora) e “osaitekera” (amanhã).',
      grammar_examples: [
        ['Ipoki. — Impoke.', 'Ele vem. — Ele virá.'],
        ['Ijati. — Irijate.', 'Ele vai. — Ele irá.'],
        ['¿Impokempa? — Impokerika, te nioteji.', 'Será que ele vem? — Talvez venha, não sei.'],
        ['Te nojateji.', 'Eu não fui.'],
      ],
      // Kindberg 1980, apêndice, pp. 461 (-n-/-m-, -ri- futuro), 465 (te…-ji, eiro…-tsi) e 466 (-rica,
      // -mpa)
      character_guide: [
        ['n- / m- (antes da raiz)', 'futuro: o que ainda não aconteceu', 'impoke (virá), de ipoki (vem)'],
        ['iri-', 'ele, no futuro', 'irijate (irá), de ijati (vai)'],
        ['te … -ji', 'não, no passado e no presente', 'te nojateji (não fui)'],
        ['eiro … -tsi', 'não, no futuro e nas ordens', 'eiro pijatitsi (não vá)'],
        ['-rika', 'talvez', 'impokerika (talvez venha)'],
        ['-mpa', 'será que…?', '¿Impokempa? (será que vem?)'],
      ],
    },
    lessons: [
      {
        id: 'cni-u3-l1',
        title: 'Nojate, nomai, nantabeti: os verbos do dia',
        kind: 'licao',
        words: ['Nojate', 'Ipoki', 'Nomai', 'Nantabeti', 'Nokatea', 'Niraaka'],
        cloze: [
          { sentence: '___ nobankoki.', answer: 'Nojate', options: ['Nojate', 'Nomai', 'Nokatea'], translation: 'Vou para a minha casa.' },
          { sentence: 'Noneaperota ___ apaniro.', answer: 'nantabeti', options: ['nantabeti', 'niraaka', 'nojate'], translation: 'Estou orgulhoso porque posso trabalhar sozinho.' },
          { sentence: 'Nomajerete ___ osheki.', answer: 'niraaka', options: ['niraaka', 'nantabeti', 'nomai'], translation: 'Estou calma depois de chorar muito.' },
        ],
        // Kindberg 1980, p. 466: “¿Jaoca pijateri? ¿Adónde vas?”; resposta: p. 107 (Nojate novancoqui)
        voice: {
          bot: '¿Jaoka pijateri?',
          botTranslation: 'Aonde você vai?',
          expected: ['Nojate nobankoki.', 'nojate'],
          hint: 'Diga que vai para a sua casa: “Nojate nobankoki.”',
        },
        communityPrompt: 'Conte o seu dia com os verbos da lição: nojate (ir), nomai (dormir), nantabeti (trabalhar), nokatea (tomar banho).',
      },
      {
        id: 'cni-u3-l2',
        title: 'Meka, oshaite, osaitekera: quando, quem, por quê',
        kind: 'licao',
        words: ['Meka', 'Oshaite', 'Osaitekera', 'Kaari', 'Janika', 'Paita'],
        cloze: [
          // MINEDU 2021, p. 68 (só a primeira oração da frase)
          { sentence: '___ nojate noñeri sheripiyari.', answer: 'Osaitekera', options: ['Osaitekera', 'Oshaite', 'Meka'], translation: 'Amanhã vou visitar o curandeiro.' },
          // Kindberg 1980, p. 462
          { sentence: '¿___ ipokashitiri?', answer: 'Paita', options: ['Paita', 'Janika', 'Meka'], translation: 'Por que ele veio?' },
          { sentence: 'Opari inkani ___ nopokanta.', answer: 'kaari', options: ['kaari', 'paita', 'meka'], translation: 'Choveu; por isso não vim.' },
        ],
        voice: {
          bot: '¿Paita ipokashitiri?',
          botTranslation: 'Por que ele veio?',
          expected: ['¿Paita ipokashitiri?', 'paita'],
          hint: 'Repita a pergunta: “paita” é “por quê”, e o -ri no fim fecha a pergunta.',
        },
        communityPrompt: 'Escreva três frases sobre o tempo: uma com oshaite (ontem), uma com meka (agora) e uma com osaitekera (amanhã). Conte o que você e o seu ayompari (amigo) vão fazer na sua comunidade (nonampi: minha comunidade).',
      },
      {
        id: 'cni-u3-l3',
        title: 'Teste: ¿Impokempa?',
        kind: 'prova',
        words: [],
        cloze: [],
        // Kindberg 1980, p. 466 (“¿Impoquempa? ¿Vendrá?”; “Impoquerica, te nioteji. Pueda ser que venga,
        // no sé.”)
        voice: {
          bot: '¿Impokempa?',
          botTranslation: 'Será que ele vem?',
          expected: ['Impokerika, te nioteji.', 'impokerika', 'te nioteji'],
          hint: 'Diga que talvez venha e que você não sabe: “Impokerika, te nioteji.”',
        },
        communityPrompt: 'Escreva uma conversa curta em asháninka sobre alguém que não veio: pergunte “¿Impokempa?”, responda com “Impokerika” e explique com “Opari inkani kaari nopokanta”.',
      },
    ],
  },
  {
    id: 'cni-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Nojate nomanabete: a mata e os bichos',
    emoji: '🏹',
    card: {
      id: 'cni-c4',
      title: 'Antami: a mata que alimenta',
      emoji: '🏹',
      // ISA, Povos Indígenas no Brasil, “Ashaninka” (José Pimenta): rotação das áreas de caça desde 1992,
      // zonas de refúgio, proibição do veneno waakashi (timbó) na pesca; CPI-Acre, página “Ashaninka”,
      // seção “Desafios da Gestão Territorial e Ambiental” (“Tem caça? Peixe? Fruta?”)
      history:
        'A mata, “antami”, é a despensa dos asháninka: dela vêm a caça, o peixe e as frutas. Antigamente, quando um grupo chegava a uma região nova, a primeira pergunta era: tem caça? Tem peixe? Tem fruta? Sem isso, ninguém ficava. No rio Amônia, no Acre, a associação Apiwtxa faz desde 1992 um rodízio das áreas de caça e criou zonas de refúgio para os bichos; também proibiu o veneno de pescar, o timbó, para não acabar com os peixes do rio.',
      // MINEDU 2021, Parte III (pp. 93-131): espécies de mandioca (p. 100), de milho (p. 99), de perdiz (p.
      // 108), armadilhas de pesca e caça (p. 109), técnicas de pesca (p. 120)
      culture_tip:
        'O vocabulário escolar asháninka tem uma lista própria para cada coisa da mata e da roça: sete tipos de mandioca, seis de milho, várias perdizes, cada palmeira e cada cipó com o seu nome. Na mata vivem a paca (“samani”), o tatu (“etini”), a tartaruga (“konoya”), a rã (“karaba”) e o gavião (“pakitsa”); da roça vêm a abóbora (“kemi”), o mamão (“mapocha”) e o abacate (“akapa”). Para pescar, há palavras para o anzol (“akacharontsi”), a flecha (“chakopi”), a tarrafa (“kitsari”) e para cada jeito de pescar: “kitsatantsi” é jogar a tarrafa, “kachatantsi” é pescar de anzol.',
      // plural -pe: frases do MINEDU 2021 (tsitsipe p. 36, kantiripe p. 57, shimape p. 58, atiripe p. 33,
      // jananekipe p. 23); -jei-: Kindberg 1980, p. 464 (“Ijajeitaque. Se fueron todos.”)
      grammar_why:
        'Para falar de muitas coisas, o nome ganha -pe no fim: “tsitsi” (lenha) vira “tsitsipe” (as lenhas); “kantiri” (cesto) vira “kantiripe” (os cestos). E quando todos fazem a ação, o verbo ganha -jei-: “ijajeitake”, foram todos. As perguntas usam “paita” (o quê, por quê), “jaoka” (onde, como, quando) e “janika” (quem).',
      grammar_examples: [
        ['Pobametsatero tsitsipe.', 'Arrume as lenhas.'],
        ['Pashitakotantyaro shonkaro kantiripe.', 'Faça um círculo em volta dos cestos.'],
        ['Ijajeitake.', 'Foram todos.'],
        ['¿Paita pikisantari?', 'Por que você está zangado?'],
      ],
      // Kindberg 1980, pp. 462 (-ashi-, -ant-), 464 (-jei-), 466 (-ri: desconocimiento; razón); MINEDU 2021
      // (plurais em -pe); p. 422 (janica)
      character_guide: [
        ['-pe', 'plural do nome', 'tsitsipe (as lenhas), kantiripe (os cestos)'],
        ['-jei-', 'todos (no verbo)', 'ijajeitake (foram todos)'],
        ['paita', 'o quê? por quê?', '¿Paita pikisantari? (por que está zangado?)'],
        ['janika', 'quem?', '¿Janika? (quem?)'],
        ['-ri (no fim)', 'fecha a pergunta com jaoka e paita', '¿Jaoka pijateri? (aonde vai?)'],
        ['-ant-', 'por isso; com o quê; quando', 'kaari nopokanta (por isso não vim)'],
      ],
    },
    lessons: [
      {
        id: 'cni-u4-l1',
        title: 'Nomanabete: caçar na mata',
        kind: 'licao',
        words: ['Nomanabete', 'Kemari', 'Shintori', 'Chakopi', 'Tsimeri', 'Maranki'],
        cloze: [
          // Kindberg 1980, p. 112
          { sentence: 'Nojate ___.', answer: 'nomanabete', options: ['nomanabete', 'nokatea', 'nomai'], translation: 'Vou caçar.' },
          // Kindberg 1980, p. 118
          { sentence: 'Nomotonkakeri ___ te naberiji.', answer: 'kemari', options: ['kemari', 'tsimeri', 'maranki'], translation: 'Atiro a flecha na anta, mas não a pego.' },
          // Kindberg 1980, p. 122
          { sentence: 'Noneapakeri ___.', answer: 'shintori', options: ['shintori', 'chakopi', 'tsimeri'], translation: 'Quando cheguei, vi o cateto.' },
        ],
        voice: {
          bot: 'Nojate nomanabete.',
          botTranslation: 'Vou caçar.',
          expected: ['Tsame.', 'tsame'],
          hint: 'Diga que vai junto: “Tsame!” (vamos).',
        },
        communityPrompt: 'Diga que bichos da mata você já viu (noneri: ver) com as palavras em asháninka: kemari (anta), shintori (cateto), maranki (cobra), tsimeri (pássaro), samani (paca), etini (tatu).',
      },
      {
        id: 'cni-u4-l2',
        title: 'Tsitsipe, kantiripe: muitas coisas',
        kind: 'licao',
        words: ['Tsitsi', 'Kantiri', 'Pitotsi', 'Akacharontsi', 'Kisaka', 'Tsaroba'],
        cloze: [
          // Kindberg 1980, p. 118
          { sentence: 'Nomorekiro ___.', answer: 'tsitsi', options: ['tsitsi', 'kantiri', 'pitotsi'], translation: 'Acendi a lenha.' },
          // MINEDU 2021, p. 57
          { sentence: 'Pashitakotantyaro shonkaro ___.', answer: 'kantiripe', options: ['kantiripe', 'tsitsipe', 'shimape'], translation: 'Faça um círculo em volta dos cestos.' },
          // MINEDU 2021, p. 47
          { sentence: 'Pimpotsotero ___ konitirori oisotakota.', answer: 'pitotsi', options: ['pitotsi', 'kantiri', 'tsitsi'], translation: 'Pinte a canoa amarrada no quinto lugar.' },
        ],
        // Kindberg 1980, p. 466
        voice: {
          bot: '¿Paita pikisantari?',
          botTranslation: 'Por que você está zangado?',
          expected: ['¿Paita pikisantari?', 'pikisantari'],
          hint: 'Repita a pergunta: “paita” é “por quê”, e “kisa” é a raiz de “zangar-se” (“kisaka”, zangado).',
        },
        communityPrompt: 'Escreva o plural de três coisas da lição com -pe: tsitsipe (as lenhas), kantiripe (os cestos)… e diga como você se sente hoje: kimoshire, bashire, kisaka ou tsaroba?',
      },
      {
        id: 'cni-u4-l3',
        title: 'Teste: Nojate nomanabete',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¿Jaoka pijateri?',
          botTranslation: 'Aonde você vai?',
          expected: ['Nojate nomanabete.', 'nomanabete'],
          hint: 'Diga que vai caçar: “Nojate nomanabete.”',
        },
        communityPrompt: 'Conte um dia na mata em asháninka: aonde você vai (“Nojate nomanabete”), que bicho viu (“Noneapakeri shintori”) e o que levou (chakopi, kantiri, akacharontsi).',
      },
    ],
  },
];
