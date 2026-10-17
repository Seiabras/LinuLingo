import type { GrammarTopic } from '../types';

/**
 * Gramática do quéchua de Áncash, do A1.1 ao B1.4. Fontes: [WIKI]
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
  // ══ B1 (17/10/2026): os tópicos g9 a g15 vêm de [PAR], com os paradigmas conferidos na imagem das
  // páginas 99–102, 111–114, 143–151 e 154–172. Grafia pela regra de sempre (e → i, o → u ao lado de q).
  // Nenhum exemplo foi montado por este curso.

  // [PAR] p. 99–100 (4.13.22, o agentivo -q: “mikoq” 'el que come', “papa mikuykaq” 'el que está comiendo
  // papas', “mikutseq” 'el que hace comer', “mikoq nuna” 'hombre que come'; o -q de propósito com verbo de
  // movimento: “Aywaa kamputam mikoq berdi paatsuta (Huailas)”, 'Voy al campo para comer el pasto verde';
  // “Maqashoqniki shamunqa”, 'Vendrá para pegarte') e p. 169–170 (7.4.1: “machaq nuna” 'hombre que se
  // emborracha', “machaq” 'el que se emborracha'; “Mas ratutash hukllana wiyarinaq waqaqta”, 'Un rato
  // después, de nuevo le oyó llorar'; “Tarinaq aqishkunata pununa hananchaw shunturaykaqta”, 'Encontró los
  // intestinos que se habían amontonado encima de la cama'). O contraste com -shqa: p. 170–171 (7.4.2).
  {
    id: 'huay1239-g9',
    level: 'B1.1',
    title: 'Quem faz: o -q',
    emoji: '🧑‍🍳',
    summary: 'mikuq (quem come), mikuq nuna (o homem que come), machaq (quem se embebeda).',
    sections: [
      {
        text: 'O -q faz do verbo “quem faz a ação”, como o “-dor” do português, mas cabe em qualquer verbo. Ele vem depois de tudo o que o verbo já tem: “papa mikuykaq” é “quem está comendo batatas”. Com um nome depois, vira uma oração relativa: “mikuq nuna”, o homem que come.',
        table: {
          head: ['Forma', 'Sentido'],
          rows: [
            ['mikuq', 'quem come'],
            ['papa mikuykaq', 'quem está comendo batatas'],
            ['mikutsiq', 'quem faz comer'],
            ['mikuq nuna', 'o homem que come'],
            ['machaq', 'quem se embebeda'],
          ],
        },
        examples: [
          ['Mas ratutash hukllana wiyarinaq waqaqta.', 'Pouco depois, dizem, ouviu-o chorar de novo.'],
          ['Tarinaq aqishkunata pununa hananchaw shunturaykaqta.', 'Encontrou as tripas amontoadas em cima da cama.'],
        ],
      },
      {
        text: 'Com um verbo de movimento (ir, vir), o -q diz para quê: “Maqashuqniki shamunqa”, ele vai vir para bater em você.',
        examples: [
          ['Aywaa kamputam mikuq berdi paatsuta.', 'Vou ao campo para comer o pasto verde.'],
          ['Maqashuqniki shamunqa.', 'Ele vai vir para bater em você.'],
        ],
      },
    ],
    pitfalls: [
      'Trocar -q por -shqa: “machaq” é quem se embebeda (de costume); “machashqa” é quem já está bêbado.',
      'Achar que o -q só vai em alguns verbos: ele cabe em qualquer um.',
    ],
    quiz: [
      { question: 'O que quer dizer “mikuq nuna”?', options: ['o homem que come', 'o homem que comeu', 'a comida do homem'], answer: 'o homem que come', explanation: '-q é quem faz a ação.' },
      { question: 'Em “Maqashuqniki shamunqa”, o -q diz…', options: ['para quê ele vem', 'quem bateu', 'quando ele vem'], answer: 'para quê ele vem', explanation: 'Com verbo de movimento, o -q diz o propósito: vem para bater em você.' },
    ],
  },
  // [PAR] p. 100–103 (4.13.23–25: “mikushqayki” 'que comiste; lo que comiste'; “Mikushqaykita yachantsik”,
  // 'Sabemos que has comido'; “rurashqan ponchu”; “qellay qoshqayki nuna”; “pishipashqa wamra”;
  // “mikunayki” 'que comerás; lo que comerás'; “Mikunaykita yachaa”, 'Yo sé que comerás'; “mikuna papa”;
  // “Upyanqayki manam allitsu”, 'Lo que tomas no es bueno'; “mikunqaa papa”, 'las papas que estoy comiendo;
  // las papas que he comido'; “Musyaatsu pi kanqanta”), p. 166 (“Tushushqanta musyaa”, 'Sé que bailó';
  // “Tushunqanta musyaa”, 'Sé que baila; Sé que ha bailado'; “Tushunanta musyaa”, 'Sé que bailará') e
  // p. 171–172 (7.4.2–4: “Mikushqaa papa pachaachaw kaykan”; “Purinqaa naani illakash”, 'El camino que yo
  // andaba ha desaparecido'; “Mikunqayki manam allitsu”).
  {
    id: 'huay1239-g10',
    level: 'B1.1',
    title: 'O que foi, o que vai ser: -shqa, -na, -nqa',
    emoji: '🧺',
    summary: 'mikushqayki (o que você comeu), mikunayki (o que você vai comer), mikunqayki (o que você come).',
    sections: [
      {
        text: 'Três finais transformam a frase inteira num nome, com a pessoa no fim. A diferença é o tempo da ação: já feita, ainda por fazer, ou começada.',
        table: {
          head: ['Final', 'A ação', 'Exemplo', 'Sentido'],
          rows: [
            ['-shqa', 'já feita', 'mikushqayki', 'o que você comeu; que você comeu'],
            ['-na', 'ainda por fazer, possível', 'mikunayki', 'o que você vai comer; que você pode comer'],
            ['-nqa', 'começada (agora, de costume ou já feita)', 'mikunqayki', 'o que você come; o que você comeu'],
          ],
        },
        examples: [
          ['Mikushqaa papa pachaachaw kaykan.', 'A batata que comi está na minha barriga.'],
          ['rurashqan ponchu', 'o poncho que ele fez'],
          ['qillay qushqaa nuna', 'o homem a quem dei o dinheiro'],
          ['parlashqantsik nuna', 'o homem de quem falamos'],
          ['mikuna papa', 'batata que se pode comer'],
          ['Mikunqayki manam allitsu.', 'O que você come não é bom.'],
          ['Purinqaa naani illakash.', 'O caminho que eu andava desapareceu.'],
        ],
      },
      {
        text: 'Com “yacha-” e “musya-” (saber), o mesmo nome diz o fato que se sabe:',
        examples: [
          ['Mikushqaykita yachantsik.', 'Sabemos que você comeu.'],
          ['Tushushqanta musyaa.', 'Sei que ele dançou.'],
          ['Tushunanta musyaa.', 'Sei que ele vai dançar.'],
          ['Musyaatsu pi kanqanta.', 'Não sei quem é.'],
        ],
      },
    ],
    pitfalls: [
      'Usar -na para o que já aconteceu: -na é o que ainda pode acontecer; o que já foi leva -shqa.',
      'Esquecer a pessoa: “mikushqaa” é “o que eu comi”, “mikushqayki”, “o que você comeu”.',
    ],
    quiz: [
      { question: 'Qual quer dizer “o que você vai comer”?', options: ['mikunayki', 'mikushqayki', 'mikuq'], answer: 'mikunayki', explanation: '-na é a ação ainda por fazer.' },
      { question: 'O que quer dizer “Tushushqanta musyaa”?', options: ['sei que ele dançou', 'sei que ele vai dançar', 'quero que ele dance'], answer: 'sei que ele dançou', explanation: '-shqa é a ação já feita.' },
    ],
  },
  // [PAR] p. 143–144 (5.3: -pti com a pessoa, “wiyaptii” 'si oigo', “wiyaptiki”, “wiyaptin”, “wiyaptintsik”,
  // “wiyashuptiki” 'si te oye', “wiyamaptin” 'si me oye'; -r só com a pessoa do objeto, “wiyamarnii” 'si me
  // oye', “wiyarniki” 'si te oigo'; -shpa só em Huaraz e Aija), p. 160 (7.2: a subordinada não leva tempo,
  // nem -tsu nem -ku; nega-se com mana; “Qamta chikishunki uushanta suwaptiki, noqata chikiman wawanta
  // kuyaptii”; “Anyarta pallaraykaptinshi, yana puma yuririn”), p. 161–162 (7.2.2: “Qoya waraqwan
  // shaarikurirnin, millwanta hichikur, intita shuyan”; “Mamayki tariramarqa shukshutam charaykachanqa”;
  // “Yanapamay uryar”) e p. 163 (7.2.3: “Aabasta mikushpa kuchita waharamushaq”).
  {
    id: 'huay1239-g11',
    level: 'B1.2',
    title: 'Quando, se, porque: -pti, -r e -shpa',
    emoji: '🔗',
    summary: 'wiyaptii (se eu ouço; outro sujeito), hichikur (cardando; o mesmo sujeito), mikushpa (em Huaraz e Aija).',
    sections: [
      {
        text: 'O português tem “quando”, “se”, “porque” e “enquanto”. O quéchua tem um final no verbo, e a escolha depende do sujeito. Se o sujeito da segunda ação é outro, o verbo leva -pti e a pessoa:',
        table: {
          head: ['Pessoa', '-pti', 'Sentido'],
          rows: [
            ['eu', 'wiyaptii', 'se eu ouço'],
            ['você', 'wiyaptiki', 'se você ouve'],
            ['ele, ela', 'wiyaptin', 'se ele ouve'],
            ['nós (eu e você)', 'wiyaptintsik', 'se nós ouvimos'],
            ['ele a você', 'wiyashuptiki', 'se ele ouve você'],
            ['ele a mim', 'wiyamaptin', 'se ele me ouve'],
          ],
        },
        examples: [
          ['Anyarta pallaraykaptinshi, yana puma yuririn.', 'Quando ela estava colhendo pitaia, apareceu um puma preto.'],
          ['Qamta chikishunki uushanta suwaptiki, nuqata chikiman wawanta kuyaptii.', 'Ele odeia você porque você roubou as ovelhas dele, e me odeia porque eu amo a filha dele.'],
        ],
      },
      {
        text: 'Se o sujeito é o mesmo, o verbo leva -r. A pessoa, aqui, só aparece quando há um objeto: “wiyarniki”, se eu ouço você. Depois do -r pode vir um -nin que não muda nada: “shaarikurirnin”.',
        examples: [
          ['Quya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan.', 'Levantando-se de madrugada, cardando a lã, ela espera o sol.'],
          ['Mamayki tariramarqa shukshutam charaykachanqa.', 'Se a sua mãe me encontrar, vai pegar um bastão.'],
          ['Yanapamay uryar!', 'Ajude-me a trabalhar!'],
        ],
      },
      {
        text: 'Nas províncias de Huaraz e Aija há ainda o -shpa, sem pessoa, que faz o papel do -r. Parker diz que é raro.',
        examples: [['Aabasta mikushpa kuchita waharamushaq.', 'Comendo as favas, vou pôr o porco para fora.']],
      },
      {
        text: 'A ação com -pti ou -r não leva tempo nem -tsu. Para negar, usa-se “mana”, quase sempre no começo.',
      },
    ],
    pitfalls: [
      'Usar -r quando o sujeito muda: aí o certo é -pti com a pessoa (“pallaraykaptin”, quando ela colhia, e o puma apareceu).',
      'Negar com -tsu dentro da oração com -pti ou -r: lá só vale “mana”.',
    ],
    quiz: [
      { question: 'Em “Anyarta pallaraykaptinshi, yana puma yuririn”, por que -pti?', options: ['porque quem colhe e quem aparece são diferentes', 'porque é passado', 'porque é pergunta'], answer: 'porque quem colhe e quem aparece são diferentes', explanation: 'Com sujeitos diferentes, -pti; com o mesmo, -r.' },
      { question: 'Como se diz “se você ouve”?', options: ['wiyaptiki', 'wiyarniki', 'wiyaptii'], answer: 'wiyaptiki', explanation: '-pti com o -ki de “você”. “Wiyarniki” é “se eu ouço você”.' },
    ],
  },
  // [PAR] p. 112–113 (5.1.8: “wiyaaman” 'yo oiría', “wiyankiman”, “wiyanman”, “wiyantsikman”, “wiyayaaman”,
  // “wiyayankiman”, “wiyayanman”; “wiyaqman” 'te oiría', “wiyamanman” 'me oiría'; a forma -shwan, -shway em
  // Llamellín; o condicional passado com karqan, “Mana tsay runata llullapaaman karqan, llapan uushaata
  // saanutami wayiiman chaatsiiman karqan”, registrado em Llamellín), p. 71 (“Itsa shamunman”) e p. 165
  // (“Tushuyta munankiman”, 'Querrías bailar'). O -man de caso: p. 83.
  {
    id: 'huay1239-g12',
    level: 'B1.3',
    title: 'Eu faria: o condicional -man',
    emoji: '🌈',
    summary: 'wiyaaman (eu ouviria), wiyankiman (você ouviria), e “… karqan” para o que teria sido.',
    sections: [
      {
        text: 'O condicional é o presente com -man no fim, depois da pessoa. Para “nós (eu e você)”, também se diz -shwan (em Llamellín, -shway).',
        table: {
          head: ['Pessoa', 'Condicional', 'Sentido'],
          rows: [
            ['eu', 'wiyaaman', 'eu ouviria'],
            ['você', 'wiyankiman', 'você ouviria'],
            ['ele, ela', 'wiyanman', 'ele ouviria'],
            ['nós (eu e você)', 'wiyantsikman, wiyashwan', 'nós ouviríamos'],
            ['eles, elas', 'wiyayanman', 'eles ouviriam'],
            ['eu a você', 'wiyaqman', 'eu ouviria você'],
            ['ele a mim', 'wiyamanman', 'ele me ouviria'],
          ],
        },
        examples: [
          ['Itsa shamunman.', 'Talvez ele viesse.'],
          ['Tushuyta munankiman.', 'Você ia querer dançar.'],
        ],
      },
      {
        text: 'Para o que teria acontecido, vem “karqan” depois. Parker registrou dois de uma vez numa frase de Llamellín, no leste:',
        examples: [['Mana tsay runata llullapaaman karqan, llapan uushaata saanutami wayiiman chaatsiiman karqan.', 'Se eu não tivesse mentido para aquele homem, teria levado todas as minhas ovelhas sãs para casa.']],
      },
    ],
    pitfalls: [
      'Confundir com o -man do nome: “Karasman” é “para Caraz”; no verbo, depois da pessoa, -man é “-ria”.',
      'Pôr o -man antes da pessoa: é “wiya-a-man”, “wiya-nki-man”, sempre no fim.',
    ],
    quiz: [
      { question: 'Como se diz “eu ouviria”?', options: ['wiyaaman', 'wiyanaa', 'wiyashaq'], answer: 'wiyaaman', explanation: 'O presente “wiyaa” com -man no fim.' },
      { question: 'O que o “karqan” acrescenta em “chaatsiiman karqan”?', options: ['o passado: eu teria levado', 'o futuro', 'a negação'], answer: 'o passado: eu teria levado', explanation: 'Condicional + karqan é o condicional passado.' },
    ],
  },
  // [PAR] p. 113–114 (5.1.9, o obrigatório -na: “wiyanaa” 'tengo que oír', “wiyanayki”, “wiyanan”,
  // “wiyanantsik”, “wiyayaanaa”, “wiyamaanayki” 'tienes que oírme'; “wiyanaa kanqa” 'tendré que oír',
  // “wiyanaa karqan” 'tuve que oír', “wiyanaa kanman” 'tendría que oír'; não confundir com o desiderativo
  // -naa, p. 122: “Pununaykaa”, 'Tengo ganas de dormir'), p. 165 (“Tushunaykita munaa”, “Tushunaata
  // munanki” 'Quieres que (yo) baile', “Tushunanta munan”; “Tushunaykita yachaa”, “Tushunaykita qonqarqaa”),
  // p. 167 (“"Takllata katay" nimanqa”; “"Shamushaqmi" nimarqaq”, 'Te dije que vendría'; “Pununanta ninki”)
  // e p. 168 (-na-paq: “Shipasta kachanaq irkaman anyarta pallamunampaq”; p. 101: “Tushunaykipaq tokashaq”).
  // Última seção: p. 167–168 (o infinitivo com caso: “puriypaq”, 'para la caminata'; “Kuyakuyman churaman”,
  // 'Me induce a amar'; “Unay taakunqanchawqa”), p. 90 (wayralla 'rápido', cf. wayra- 'aventar'; winaylla
  // 'de vez en cuando', cf. wina- 'crecer'), p. 82 (hama- 'respirar, descansar') e p. 149 (“Masqa kantsu”).
  {
    id: 'huay1239-g13',
    level: 'B1.3',
    title: 'Tenho que, quero que: o -na com a pessoa',
    emoji: '📌',
    summary: 'wiyanaa (tenho que ouvir), tushunaykita munaa (quero que você dance), tushunaykipaq (para você dançar).',
    sections: [
      {
        text: 'O -na com a pessoa diz o que alguém tem que fazer. Para mudar o tempo, entra “ka-” depois: “kanqa”, “karqan”, “kanman”.',
        table: {
          head: ['Forma', 'Sentido'],
          rows: [
            ['wiyanaa', 'tenho que ouvir'],
            ['wiyanayki', 'você tem que ouvir'],
            ['wiyanan', 'ele tem que ouvir'],
            ['wiyanantsik', 'nós (eu e você) temos que ouvir'],
            ['wiyanaa kanqa', 'vou ter que ouvir'],
            ['wiyanaa karqan', 'tive que ouvir'],
            ['wiyanaa kanman', 'eu teria que ouvir'],
          ],
        },
      },
      {
        text: 'O mesmo -na, com -ta, é o “que” de “quero que”, “sei que”, “esqueci que”, quando a outra ação é de outra pessoa. E com -paq é “para que”.',
        examples: [
          ['Tushunaykita munaa.', 'Quero que você dance.'],
          ['Tushunaata munanki.', 'Você quer que eu dance.'],
          ['Tushunaykita qunqarqaa.', 'Esqueci que você ia dançar.'],
          ['Tushunaykipaq tokashaq.', 'Vou tocar para você dançar.'],
          ['Shipasta kachanaq irkaman anyarta pallamunampaq.', 'Mandou a moça ao morro para colher pitaia.'],
        ],
      },
      {
        text: 'Para contar o que alguém disse, o quéchua prefere repetir a fala entre aspas, com “ni-” (dizer) depois:',
        examples: [
          ['“Shamushaqmi” nimarqaq.', 'Eu disse a você que viria.'],
          ['Pununanta ninki.', 'Você vai dizer a ele que ele vai dormir.'],
        ],
      },
      {
        text: 'O infinitivo em -y também leva os finais de caso: “kuyakuy” (o amor) vira “kuyakuyman”, para o amor; “puriy” (andar) vira “puriypaq”, para a caminhada. E alguns advérbios vêm de verbos: “wayralla” (rápido), de “wayra-” (abanar); “winaylla” (de vez em quando), de “wina-” (crescer). “Hama-” é respirar e descansar.',
        examples: [
          ['Kuyakuyman churaman.', 'Isso me leva a amar.'],
          ['Unay taakunqanchawqa…', 'Quando tinham vivido juntos muito tempo…'],
          ['Masqa kantsu.', 'Não tem mais.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o -na (ter que) com o -naa (ter vontade): “pununaykaa” é “estou com sono”, e não “tenho que dormir”.',
      'Usar o infinitivo quando a outra ação é de outra pessoa: “Tushuyta munaa” é “quero dançar”; “quero que você dance” é “Tushunaykita munaa”.',
    ],
    quiz: [
      { question: 'O que quer dizer “wiyanaa karqan”?', options: ['tive que ouvir', 'eu ouviria', 'vou ouvir'], answer: 'tive que ouvir', explanation: '-na (ter que) com “karqan” no passado.' },
      { question: 'Como se diz “quero que você dance”?', options: ['Tushunaykita munaa', 'Tushuyta munaa', 'Tushunaata munanki'], answer: 'Tushunaykita munaa', explanation: '-na com a pessoa “você” (-yki) e -ta.' },
    ],
  },
  // [PAR] p. 111–112 (5.1.7, o modo “delegatorio” -naq: não é tempo, mas modo; quem fala não presenciou a
  // ação ou não tinha se dado conta dela; a forma mais comum nos contos tradicionais; -ñaq em Corongo, -naa
  // em Antonio Raimondi e Huari, -sqa no sul; “wiyanaq kaa” 'yo había oído; oí sin darme cuenta', “wiyanaq
  // kanki”, “wiyanaq” 'él había oído; oyó (según me han dicho)', “wiyanaq kantsik”, “wiyayaanaq” 'habían
  // oído'), p. 150–151 (-shi “muy común en cuentos” com o -naq; “Huk kurash kriyadayoq kanaq wayinchaw”;
  // “Tsayshi tsaychawqa kima killa paarayaanaq”; -chi, “Qampischi imbitado aywaykanki”, e o -ch só na
  // província de Huaylas, “Tullullaatach tarinki”; -r 'pues': “Pununkimir”, “Qamchir tushunki”) e p. 156
  // (“Tsayshi kondorqa haytakacharqunaq i sheqikacharqunaq”, 'Dicen que entonces el cóndor la pateó y
  // golpeó'); o -sh perfeito das províncias do leste, p. 100, e “Llapanta apakayash i atoqqa hanapita
  // ishkimush pampaman”, 'Llevaron todo, y el zorro desde arriba cayó a la pampa' (p. 154).
  {
    id: 'huay1239-g14',
    level: 'B1.4',
    title: 'Dizem que: o -naq dos contos',
    emoji: '📜',
    summary: 'wiyanaq (ouviu, pelo que me contaram), com o -shi; e o -chi do palpite.',
    sections: [
      {
        text: 'O -naq não é um tempo: ele diz que quem fala não viu a coisa acontecer, ou não tinha se dado conta dela. Por isso é o verbo dos contos. Ele tem a mesma forma do passado de costume, com “ka-” para a pessoa.',
        table: {
          head: ['Pessoa', '-naq', 'Sentido'],
          rows: [
            ['eu', 'wiyanaq kaa', 'eu tinha ouvido; ouvi sem perceber'],
            ['você', 'wiyanaq kanki', 'você tinha ouvido'],
            ['ele, ela', 'wiyanaq', 'ele tinha ouvido; ouviu, pelo que me contaram'],
            ['nós (eu e você)', 'wiyanaq kantsik', 'nós tínhamos ouvido'],
            ['eles, elas', 'wiyayaanaq', 'eles tinham ouvido'],
          ],
        },
        examples: [
          ['Huk kurash kriyadayuq kanaq wayinchaw.', 'Dizem que um padre tinha uma criada em casa.'],
          ['Tsayshi tsaychawqa kima killa paarayaanaq.', 'Então viveram ali três meses.'],
          ['Tsayshi kondorqa haytakacharqunaq i shiqikacharqunaq.', 'Dizem que então o condor a chutou e a golpeou.'],
        ],
      },
      {
        text: 'O -naq muda de som pelo mapa: é -ñaq em Corongo e -naa em Antonio Raimondi e Huari, no leste. O quéchua do sul conta do mesmo jeito, com -sqa. E nas províncias do leste o -shqa fica só -sh: “ishkimush”, caiu.',
        examples: [['Llapanta apakayash i atuqqa hanapita ishkimush pampaman.', 'Levaram tudo, e a raposa caiu lá de cima no chão.']],
      },
      {
        text: 'Ao lado do -shi (me contaram) e do -mi (eu vi), o -chi é o palpite: “acho que”, “talvez”. Na província de Huaylas, depois de vogal breve, ele fica só -ch. E um -r no fim é como o “pois” de “dormirá, pois”.',
        examples: [
          ['Qampischi imbitado aywaykanki.', 'Acho que você também está indo como convidado.'],
          ['Tullullaatach tarinki.', 'Talvez você encontre só os meus ossos.'],
          ['Pununkimir.', 'Você vai dormir, então.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o -naq como um passado comum: ele diz que quem fala não viu. Para o que você viu, use -rqa (“wiyarqan”, ele ouviu).',
      'Contar com -mi o que só ouviu falar: nos contos, é -shi.',
    ],
    quiz: [
      { question: 'O que o -naq diz?', options: ['que quem fala não viu a ação', 'que a ação é futura', 'que a ação é uma ordem'], answer: 'que quem fala não viu a ação', explanation: 'Parker chama de “modo delegatório”: não é tempo, é o jeito de saber.' },
      { question: 'Qual final é um palpite?', options: ['-chi', '-mi', '-shi'], answer: '-chi', explanation: '“Qampischi imbitado aywaykanki”: acho que você também está indo como convidado.' },
    ],
  },
  // [PAR] p. 145–147 (6.1: -raq 'todavía', “Tsaychawran kaykan” e “Tsaychawraqmi kaykan”, 'Está allí
  // todavía'; “Uryaykanran”, 'Está trabajando todavía'; “¿Imanawraq?”, '¿Cómo será?'; -na 'ya', “Chakwasnam
  // kallaa”, 'Ya soy vieja', “Kantarillannam”, 'Ya está cantando', “Manana uryantsu”, 'Ya no trabaja',
  // “¿Aywakunnaku?”, '¿Ya se ha ido?'; -pis 'también, aun', “noqapis” 'yo también'; “kaymampis wakmampis”,
  // 'a este lado y al otro'; -taq para contradizer, “¡Noqataq kaa!”, '¡Soy yo!'), p. 148 (“Shamunraqtsu”,
  // 'Todavía no viene'), p. 150 (“Noqapismi aywayta munaa”, 'Yo también quiero ir') e p. 124 (o directivo
  // -paa: llakipaa-, asipaa-, pukllapaa- 'fastidiar (en broma), coquetear con', piñapaa- 'enojarse con';
  // “Llakipaashunki”, 'Te compadece'; “Tsay shipashta pukllaykan”, 'Está fastidiando a esa muchacha').
  {
    id: 'huay1239-g15',
    level: 'B1.4',
    title: 'Ainda, já, também: -raq, -na, -pis',
    emoji: '⏱️',
    summary: 'tsaychawraqmi (ainda ali), chakwasnam (já velha), nuqapis (eu também).',
    sections: [
      {
        text: 'Estes finais vêm antes do -mi, do -shi e do -tsu, e mudam o sentido da frase inteira.',
        table: {
          head: ['Final', 'Sentido', 'Exemplo', 'Tradução'],
          rows: [
            ['-raq', 'ainda', 'Tsaychawraqmi kaykan.', 'Ainda está ali.'],
            ['-raq … -tsu', 'ainda não', 'Shamunraqtsu.', 'Ainda não vem.'],
            ['-na', 'já', 'Chakwasnam kallaa.', 'Já sou velha.'],
            ['mana-na … -tsu', 'já não', 'Manana uryantsu.', 'Já não trabalha.'],
            ['-pis', 'também, até', 'Nuqapismi aywayta munaa.', 'Eu também quero ir.'],
            ['-taq', 'é sim (contra o que se pensava)', 'Nuqataq kaa!', 'Sou eu, sim!'],
          ],
        },
        examples: [
          ['Kantarillannam.', 'Já está cantando.'],
          ['Aywakunnaku?', 'Já foi embora?'],
          ['Uryaykanran.', 'Ainda está trabalhando.'],
        ],
      },
      {
        text: 'Com uma palavra de pergunta, o -raq faz uma pergunta no ar, de quem não espera resposta: “Imanawraq?”, como será?',
        examples: [['Imanawraq?', 'Como será?']],
      },
      {
        text: 'No verbo, o -paa leva a emoção para alguém: “llaki-” (ficar triste) vira “llakipaa-” (ter pena de); “asi-” (rir), “asipaa-” (rir de); “puklla-” (brincar), “pukllapaa-” (provocar, brincar com); “piña-” (ficar zangado), “piñapaa-” (ficar zangado com). Mas a pessoa pode vir com -ta mesmo sem o -paa.',
        examples: [
          ['Llakipaashunki.', 'Ele tem pena de você.'],
          ['Tsay shipashta pukllaykan.', 'Está provocando aquela moça.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o -na “já” com o -na do “ter que”: o “já” vem no fim da palavra, antes do -m (“chakwasnam”); o “ter que” vem no verbo, antes da pessoa (“wiyanaa”).',
    ],
    quiz: [
      { question: 'O que quer dizer “Shamunraqtsu”?', options: ['ainda não vem', 'já não vem', 'também vem'], answer: 'ainda não vem', explanation: '-raq (ainda) com -tsu (não).' },
      { question: 'Qual final quer dizer “também”?', options: ['-pis', '-raq', '-na'], answer: '-pis', explanation: '“Nuqapis”, eu também.' },
    ],
  },
];
