import type { GrammarTopic } from '../types';

/**
 * Gramática do quéchua de Áncash, do A1.1 ao A2.2. Fontes: [WIKI]
 * Wikipédia em espanhol, «Gramática del quechua ancashino» (pronomes, o “nós” inclusivo e o exclusivo,
 * os enclíticos, a derivação, o infinitivo em -y), «Quechua de Huaylas» (o verbo “ser” implícito, os
 * enclíticos com “yaykurqan”) e «Clasificación del quechua ancashino»; [OMNI] (os números). Todos os
 * exemplos são frases das fontes, com a tradução delas.
 *
 * Os tópicos do A2 (g5 a g8) vêm de [PAR] (Parker, 1976; ver vocabulario.ts), com a página ao lado: os
 * paradigmas foram conferidos na imagem das páginas 80–81, 105–108 e 114. A grafia segue a única
 * conversão declarada (e → i, o → u ao lado de q). Nenhum exemplo foi montado por este curso.
 */
export const GRAMMAR_HUAY1239: GrammarTopic[] = [
  {
    id: 'huay1239-g1',
    level: 'A1.1',
    title: 'Os pronomes e os dois “nós”',
    emoji: '🙋',
    summary: 'nuqa, qam, pay; e dois “nós”: nuqantsik (eu e você) e nuqakuna (nós, sem você).',
    sections: [
      {
        text: 'O plural se faz com -kuna: “qam” (você), “qamkuna” (vocês). Mas o “nós” tem duas formas: “nuqantsik”, quando inclui quem escuta (eu e você), e “nuqakuna”, quando o deixa de fora (nós, mas não você).',
        table: {
          head: ['Pessoa', 'Singular', 'Plural'],
          rows: [
            ['1ª', 'nuqa (eu)', 'nuqantsik (eu e você) / nuqakuna (nós, sem você)'],
            ['2ª', 'qam (você)', 'qamkuna (vocês)'],
            ['3ª', 'pay (ele, ela)', 'paykuna (eles, elas)'],
          ],
        },
        examples: [
          ['Pitaq? — Nuqam.', 'Quem é? — Sou eu.'],
          ['Qammi.', 'É você.'],
          ['Paytsuraq?', 'Será ele?'],
        ],
      },
    ],
    pitfalls: ['Usar “nuqantsik” quando quem escuta não está incluído: aí o certo é “nuqakuna”.'],
    quiz: [
      { question: 'Qual “nós” inclui quem escuta?', options: ['nuqantsik', 'nuqakuna', 'paykuna'], answer: 'nuqantsik', explanation: '“Nuqantsik” é “eu e você”.' },
    ],
  },
  {
    id: 'huay1239-g2',
    level: 'A1.1',
    title: 'Como eu sei: -mi, -shi, -chaa, -tsu, -ku',
    emoji: '🔎',
    summary: 'Um final na palavra diz se eu vi, se me contaram, se acho, se é “não” ou se é pergunta.',
    sections: [
      {
        text: 'O quéchua mostra, com um final, como quem fala sabe da coisa. Veja “yaykurqan” (ele, ela entrou) com cada um:',
        table: {
          head: ['Final', 'Sentido', 'Exemplo'],
          rows: [
            ['-mi', 'eu vi, eu sei', 'yaykurqanmi'],
            ['-shi', 'me contaram', 'yaykurqanshi'],
            ['-chaa', 'com certeza deve ter', 'yaykurqanchaa'],
            ['-tsu', 'não', 'yaykurqantsu'],
            ['-ku', 'pergunta', 'yaykurqanku'],
          ],
        },
        examples: [
          ['Allqupaqku? — Allqupaqmi.', 'É para o cachorro? — É para o cachorro, sim.'],
          ['Manam paytatsu.', 'Não é a ele.'],
        ],
      },
    ],
    pitfalls: ['Usar -mi para o que só ouviu falar: aí o certo é -shi.'],
    quiz: [
      { question: 'Qual final quer dizer “me contaram”?', options: ['-shi', '-mi', '-ku'], answer: '-shi', explanation: '“Yaykurqanshi”: dizem que entrou.' },
    ],
  },
  {
    id: 'huay1239-g3',
    level: 'A1.2',
    title: 'Palavras novas com finais: -yuq, -lla, -sapa, -nnaq',
    emoji: '🧩',
    summary: '-yuq (quem tem), -lla (só), -sapa (muito, grande), -nnaq (sem).',
    sections: [
      {
        text: 'Com um final, uma palavra vira outra. “Allqu” (cachorro) vira “allquyuq” (quem tem cachorro) e “allqulla” (só o cachorro); “ñawi” (olho) vira “ñawisapa” (de olhos muito grandes); “wasi” (casa) vira “wasinnaq” (quem não tem casa).',
        table: {
          head: ['Final', 'Sentido', 'Exemplo'],
          rows: [
            ['-yuq', 'quem tem', 'waakayuq (dono de vacas)'],
            ['-lla', 'só', 'allqulla (só o cachorro)'],
            ['-sapa', 'muito, grande', 'ñawisapa (de olhos grandes)'],
            ['-nnaq', 'sem', 'wasinnaq (quem não tem casa)'],
            ['-wan', 'com', 'allqunwan (com o cachorro dele)'],
          ],
        },
        examples: [['Payqa allquyuq.', 'Ele tem cachorro.']],
      },
    ],
    pitfalls: ['Trocar -yuq (com) por -nnaq (sem): “wasinnaq” é quem NÃO tem casa.'],
    quiz: [
      { question: 'O que quer dizer “waakayuq”?', options: ['dono de vacas', 'sem vacas', 'só a vaca'], answer: 'dono de vacas', explanation: '-yuq é “quem tem”.' },
    ],
  },
  {
    id: 'huay1239-g4',
    level: 'A1.2',
    title: 'O verbo no infinitivo e os números',
    emoji: '🔢',
    summary: 'O infinitivo termina em -y (mikuy, comer); os números vão de dez em dez (chunka).',
    sections: [
      {
        text: 'A raiz do verbo sozinha não anda: precisa de um final. O infinitivo termina em -y: “miku-” vira “mikuy” (comer), “wiya-” vira “wiyay” (ouvir). E o mesmo -y transforma palavras em verbos: “llampu” (macio) vira “llampuy” (ficar macio).',
        examples: [
          ['mikuy', 'comer'],
          ['llampuy', 'ser, ficar macio'],
        ],
      },
      {
        text: 'Os números contam em dez: depois de “chunka” (dez), vem “chunka huk” (onze), e 20 é “ishkay chunka”, dois dez.',
        table: {
          head: ['Número', 'Áncash'],
          rows: [
            ['1, 2, 3, 4, 5', 'huk, ishkay, kima, chusku, pitsqa'],
            ['6, 7, 8, 9, 10', 'huqta, qanchis, puwaq, isqun, chunka'],
            ['20', 'ishkay chunka'],
            ['100', 'pachak'],
          ],
        },
      },
    ],
    pitfalls: ['Dizer “kimsa” para três, como no quéchua do sul: em Áncash é “kima”.'],
    quiz: [
      { question: 'Como se diz “três” no quéchua de Áncash?', options: ['kima', 'kimsa', 'ishkay'], answer: 'kima', explanation: '“Kima”; o quéchua do sul diz “kimsa”, e no leste de Áncash (Pomabamba, Llamellín, Huari) também se ouve “kimsa” (Parker, 1976, p. 78).' },
    ],
  },
  // [PAR] p. 105–106 (presente: wiyaa, wiyanki, wiyan, wiyantsik; o plural -yaa: wiyayaa, wiyayanki,
  // wiyayan, “sólo en Ancash”), p. 107 (pretérito -rqa: wiyarqaa, wiyarqayki, wiyarqan, wiyarqantsik),
  // p. 109 (o pasado reciente -rqu: wiyarqunki; a única diferença formal é a 2ª pessoa) e p. 128 (o
  // durativo -ykaa: “Qawaykantsik”, 'Estamos mirando'; “Qawaykarqan”, 'Estaba mirando'). Exemplos: p. 67
  // (“Pedro papatam mikuykan”), p. 68 (“Tamyaykanmi”), p. 117 (“Pedro yamtata aparqan”), p. 124 (“Mamanta
  // waqaykan”), p. 147 (“¿Imataq ruraykanki?”).
  {
    id: 'huay1239-g5',
    level: 'A2.1',
    title: 'O verbo: presente, passado e o -yka',
    emoji: '⏳',
    summary: 'wiyaa (ouço), wiyarqaa (ouvi), e o -yka do “estar fazendo”: qawaykantsik (estamos olhando).',
    sections: [
      {
        text: 'O presente é a raiz com a pessoa: “wiya-” (ouvir) vira “wiyaa” (ouço), com a vogal longa do “eu”. O passado põe -rqa antes da pessoa. Para o plural, Áncash põe -yaa antes da pessoa, um final que, segundo Parker, é próprio de Áncash (com poucas exceções nas bordas): “wiyayan”, eles ouvem.',
        table: {
          head: ['Pessoa', 'Presente', 'Passado'],
          rows: [
            ['eu', 'wiyaa (ouço)', 'wiyarqaa (ouvi)'],
            ['você', 'wiyanki (ouve)', 'wiyarqayki (ouviu)'],
            ['ele, ela', 'wiyan (ouve)', 'wiyarqan (ouviu)'],
            ['nós (eu e você)', 'wiyantsik (ouvimos)', 'wiyarqantsik (ouvimos)'],
            ['eles, elas', 'wiyayan (ouvem)', 'wiyayarqan (ouviram)'],
          ],
        },
        examples: [
          ['Pedro yamtata aparqan.', 'Pedro levou a lenha.'],
          ['Allita rurarqan.', 'Ele fez bem.'],
        ],
      },
      {
        text: 'O -yka diz que a ação está em andamento, como o “estar + -ndo” do português. Ele cabe em qualquer tempo: “qawaykantsik” (estamos olhando), “qawaykarqan” (estava olhando). Até a chuva: “Tamyaykanmi”, está chovendo.',
        examples: [
          ['Pedro papatam mikuykan.', 'Pedro está comendo batatas.'],
          ['Mamanta waqaykan.', 'Está chorando pela mãe.'],
          ['Imataq ruraykanki?', 'O que você está fazendo?'],
          ['Tamyaykanmi.', 'Está chovendo.'],
        ],
      },
    ],
    pitfalls: [
      'O “você” do passado é -rqayki, e não -rqanki: “wiyarqayki”, você ouviu. O -rqunki é de outro tempo, “você acabou de ouvir”.',
      'Esquecer a vogal longa do “eu”: “wiyaa” (ouço) não é “wiya”.',
    ],
    quiz: [
      { question: 'Como se diz “ouvi”?', options: ['wiyarqaa', 'wiyaa', 'wiyarqayki'], answer: 'wiyarqaa', explanation: '-rqa (passado) com a vogal longa do “eu”.' },
      { question: 'O que quer dizer “qawaykantsik”?', options: ['estamos olhando', 'olhamos ontem', 'vamos olhar'], answer: 'estamos olhando', explanation: '-yka é a ação em andamento; -ntsik, “nós (eu e você)”.' },
    ],
  },
  // [PAR] p. 83–86 (os sufixos de caso: -ta, “objeto directo; objeto indirecto; destinación”, “Warasta
  // aywanki”; -man 'a, hacia', “Karasman kutimunqa”, “Yakuman aywashaq”, “nunca se usa para indicar el
  // objeto indirecto en Ancash”; -chaw locativo, “Wayintsikchaw punun”, e o -pi do sul; -pa 'por, a través
  // de', “Punkupa yarqurqan”; -paq 'para', “Wawqiipaq apapushaq”; -pita 'de, desde', “Chakrapita
  // shamurqun”; -yaq e -kama 'hasta', “Waraskama aywarqan”; -wan 'con', “Huk rumiwan mankata pakirqaa”).
  // O objeto indireto com -ta: “Taytanta qorqayki”, 'Se lo diste a su papá' (p. 83).
  {
    id: 'huay1239-g6',
    level: 'A2.1',
    title: 'Para onde, onde, de onde: os casos',
    emoji: '🧭',
    summary: '-ta, -man, -chaw, -pita, -pa, -paq, -wan, -kama: os finais que fazem o papel das preposições.',
    sections: [
      {
        text: 'O quéchua não tem preposições: o final do nome diz o papel dele na frase. O sujeito fica sem final; o resto ganha um. Áncash tem treze desses finais. Estes são os do dia a dia:',
        table: {
          head: ['Final', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['-ta', 'o objeto; para onde', 'Warasta aywanki.', 'Você vai a Huaraz.'],
            ['-man', 'para, rumo a', 'Karasman kutimunqa.', 'Vai voltar para Caraz.'],
            ['-chaw', 'em', 'Wayintsikchaw punun.', 'Dorme na nossa casa.'],
            ['-pita', 'de, desde', 'Chakrapita shamurqun.', 'Veio da roça.'],
            ['-pa', 'por, através de', 'Punkupa yarqurqan.', 'Saiu pela porta.'],
            ['-paq', 'para (alguém)', 'Wawqiipaq apapushaq.', 'Vou levar para o meu irmão.'],
            ['-wan', 'com', 'Huk rumiwan mankata pakirqaa.', 'Quebrei a panela com uma pedra.'],
            ['-kama', 'até', 'Waraskama aywarqan.', 'Foi até Huaraz.'],
          ],
        },
      },
      {
        text: 'O -man também quer dizer “buscar”: “Yakuman aywashaq” é “vou buscar água”. E quem recebe uma coisa leva -ta, igual ao objeto: “Taytanta qurqayki”, você deu ao pai dele.',
        examples: [
          ['Yakuman aywashaq.', 'Vou buscar água.'],
          ['Taytanta qurqayki.', 'Você deu (isso) ao pai dele.'],
        ],
      },
    ],
    pitfalls: [
      'Usar -man para “dar a alguém”: em Áncash, quem recebe leva -ta (“Taytanta qurqayki”).',
      'Dizer “em” com -pi, como no quéchua do sul: em Áncash é -chaw (“wayichaw”).',
    ],
    quiz: [
      { question: 'Como se diz “da roça”?', options: ['chakrapita', 'chakraman', 'chakrachaw'], answer: 'chakrapita', explanation: '-pita é “de, desde”.' },
      { question: 'Qual final quer dizer “com”?', options: ['-wan', '-man', '-paq'], answer: '-wan', explanation: '“Rumiwan”, com uma pedra.' },
    ],
  },
  // [PAR] p. 108 (futuro: wiyashaq, wiyanki, wiyanqa, wiyashun; “la segunda persona … es idéntica a la del
  // presente”; plural wiyayaashaq, wiyayanki, wiyayanqa), p. 114 (imperativo: wiyay, wiyatsun, wiyashun,
  // wiyamay), p. 148 (a ordem negativa com ama e -tsu: “¡Ama shuyamaytsu!”, '¡No me esperes!'), p. 164–165
  // (“Tushuyta munaa”, “Tushuyta munanki”, “Tushuyta munan”; “Tushunaykita munaa”, 'Quiero que bailes';
  // “Tushuyta yachanki”, 'Sabes bailar'; “Tushuyta pweediitsu”, 'No puedo bailar'). Exemplos: p. 83
  // (“Yakuman aywashaq”), p. 69 (“¡Punuy!”, “¡Yakuta upyay!”), p. 126 (“¡Upyarkushun!”).
  {
    id: 'huay1239-g7',
    level: 'A2.2',
    title: 'O futuro, as ordens e o “querer fazer”',
    emoji: '🔮',
    summary: 'wiyashaq (vou ouvir), wiyay (ouça!), ama … -tsu (não!), e tushuyta munaa (quero dançar).',
    sections: [
      {
        text: 'O futuro tem finais próprios, menos no “você”, que é igual ao presente: “wiyanki” é “você ouve” e “você vai ouvir”.',
        table: {
          head: ['Pessoa', 'Futuro', 'Ordem'],
          rows: [
            ['eu', 'wiyashaq (vou ouvir)', '—'],
            ['você', 'wiyanki (vai ouvir)', 'wiyay (ouça!)'],
            ['ele, ela', 'wiyanqa (vai ouvir)', 'wiyatsun (que ele ouça!)'],
            ['nós (eu e você)', 'wiyashun (vamos ouvir)', 'wiyashun (ouçamos!)'],
          ],
        },
        examples: [
          ['Yakuman aywashaq.', 'Vou buscar água.'],
          ['Punuy!', 'Durma!'],
          ['Upyarkushun!', 'Saúde! (Vamos brindar!)'],
        ],
      },
      {
        text: 'A ordem negativa usa “ama” e -tsu no verbo: “Ama shuyamaytsu!”, não me espere! E “querer fazer” é o infinitivo com -ta antes de “munay”: “Tushuyta munaa”, quero dançar. Se quem dança é outra pessoa, o verbo leva -na e a pessoa dela: “Tushunaykita munaa”, quero que você dance.',
        examples: [
          ['Ama shuyamaytsu!', 'Não me espere!'],
          ['Tushuyta munaa.', 'Quero dançar.'],
          ['Tushunaykita munaa.', 'Quero que você dance.'],
          ['Tushuyta yachanki.', 'Você sabe dançar.'],
          ['Tushuyta pweediitsu.', 'Não consigo dançar.'],
        ],
      },
    ],
    pitfalls: [
      'Proibir com “mana”: a ordem negativa é com “ama” (“Ama shuyamaytsu!”); “mana” é o “não” das outras frases.',
      'Procurar um futuro próprio para “você”: é a mesma forma do presente, “wiyanki”.',
    ],
    quiz: [
      { question: 'Como se diz “vou ouvir”?', options: ['wiyashaq', 'wiyanqa', 'wiyarqaa'], answer: 'wiyashaq', explanation: '-shaq é o futuro do “eu”.' },
      { question: 'O que quer dizer “Tushuyta munaa”?', options: ['quero dançar', 'quero que você dance', 'dancei'], answer: 'quero dançar', explanation: 'O infinitivo “tushuy” com -ta, e “munaa”, quero.' },
    ],
  },
  // [PAR] p. 80–81 (sufixos pessoais do nome, lidos na imagem da página: wayii, wayiki, wayin, wayintsik;
  // yawarnii, yawarniki, yawarnin, yawarnintsik, com -ni depois de consoante; em Huaylas e Yungay o “eu”
  // soa “wayee”, e em Huaylas o “seu” depois de i é -k: p. 81), p. 82–83 (-kuna depois da pessoa: wayinkuna) e p. 91 (a frase possessiva com -pa: “noqapa
  // chakraa”, “qampa chakrayki”, “taqay nunapa chakran”, 'la chacra de aquel hombre'). Exemplos: p. 128
  // (“Uushaata atoq ushaskin”, de Conchucos, com o -ski de lá) e p. 151 (“Ashnunkunachaa okupaykan”, de Llamellín, no leste).
  {
    id: 'huay1239-g8',
    level: 'A2.2',
    title: 'De quem é: wayii, wayiki, wayin',
    emoji: '🏠',
    summary: 'O dono vem no fim do nome: wayii (minha casa), wayiki (sua casa), wayin (casa dele).',
    sections: [
      {
        text: 'O “meu” é só a última vogal mais longa: “wayi” (casa) vira “wayii” (minha casa). Depois de consoante entra um -ni: “yawar” (sangue) vira “yawarnii” (meu sangue).',
        table: {
          head: ['Dono', 'wayi (casa)', 'yawar (sangue)'],
          rows: [
            ['meu', 'wayii', 'yawarnii'],
            ['seu', 'wayiki', 'yawarniki'],
            ['dele, dela', 'wayin', 'yawarnin'],
            ['nosso (eu e você)', 'wayintsik', 'yawarnintsik'],
          ],
        },
        examples: [
          ['Wayinqa yuraqmi.', 'A casa dele é branca.'],
          ['Uushaata atuq ushaskin.', 'A raposa pode acabar com as minhas ovelhas.'],
          ['Ashnunkunachaa okupaykan.', 'Com certeza os burros dele estão ocupados.'],
        ],
      },
      {
        text: 'Parker anota duas pronúncias locais: nas províncias de Huaylas e Yungay, o “meu” soa com “e” ou “o” longos (“wayee”, minha casa); e na de Huaylas o “seu” depois de i é só -k (“wayik”, sua casa). O curso escreve a forma geral de Áncash, “wayii” e “wayiki”.',
      },
      {
        text: 'Para dizer de quem, o dono leva -pa e a coisa leva o final do dono: “nuqapa chakraa” (a minha roça), “qampa chakrayki” (a sua roça), “taqay nunapa chakran” (a roça daquele homem).',
        examples: [
          ['taqay nunapa chakran', 'a roça daquele homem'],
          ['qampa chakrayki', 'a sua roça'],
        ],
      },
    ],
    pitfalls: [
      'Pôr -kuna antes do dono: o plural vem depois, “wayinkuna” (as casas dele).',
      'Esquecer o final do dono na frase com -pa: é “taqay nunapa chakran”, e não “taqay nunapa chakra”.',
    ],
    quiz: [
      { question: 'Como se diz “a sua casa”?', options: ['wayiki', 'wayii', 'wayin'], answer: 'wayiki', explanation: '-ki depois de i; -yki depois de a e u (“urkuyki”, a sua testa).' },
      { question: 'O que quer dizer “yawarnii”?', options: ['meu sangue', 'seu sangue', 'sem sangue'], answer: 'meu sangue', explanation: 'Depois de consoante, o “meu” é -nii.' },
    ],
  },
];
