import type { UnitSeed } from '../types';

/**
 * Trilha do asháninka: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes de cada palavra e de cada frase em vocabulario.ts. Todas as frases
 * são citações (MINEDU 2021; Kindberg 1980, passado para o alfabeto oficial; Montoya e Ramos 2024).
 * Os únicos encaixes feitos aqui:
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
];
