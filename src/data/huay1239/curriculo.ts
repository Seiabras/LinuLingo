import type { UnitSeed } from '../types';

/**
 * Trilha do quéchua de Áncash, do A1.1 ao A2.2 (curso completo até o teto). Fontes no cabeçalho de
 * vocabulario.ts: [WIKI], [OMNI] e, das lições extras do A1.1 em diante, [PAR] (a gramática de Parker,
 * 1976, com a página ao lado de cada frase).
 *
 * As frases são do [WIKI] (o “breve vocabulário” e os exemplos do verbo “ser” implícito do «Quechua de
 * Huaylas»: “Imanawllataq kaykanki?”, “Yamayllam kaykaa”, “Pitaq? — Nuqam”, “Imatan? — Allqum”,
 * “Allqupaqku? — Allqupaqmi”; e os exemplos de derivação e de enclíticos da «Gramática del quechua
 * ancashino»), com a tradução deles. Nenhuma frase com gramática nova foi montada por nós.
 *
 * As unidades 3 e 4 (A2) usam frases do [PAR], com a tradução de Parker passada para o português e a
 * grafia convertida pela única regra declarada em vocabulario.ts (e → i, o → u ao lado de q). Nenhuma
 * frase das unidades 3 e 4 foi montada por este curso.
 */
export const UNITS_HUAY1239: UnitSeed[] = [
  {
    id: 'huay1239-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yaw! Imanawllataq kaykanki?',
    emoji: '👋',
    card: {
      id: 'huay1239-c1',
      title: 'O quéchua da Cordilheira Branca',
      emoji: '🏔️',
      // [WIKI] «Quechua ancashino» (cerca de um milhão de falantes; ramo Quéchua I; Áncash e o oeste de
      // Huánuco; oficial onde predomina, pela Constituição de 1993; o alfabeto de 1975, as vogais e e o
      // tiradas em 1985, o ⟨ćh⟩ de 2014; o “s” que vira “h” em Huaylas: wasi → wahi → wai; o “q” só
      // oclusivo no Callejón de Huaylas).
      history:
        'O quéchua de Áncash é falado na serra do norte do Peru, no departamento de Áncash e no oeste de Huánuco, por cerca de um milhão de pessoas. É do ramo Quéchua I, o quéchua central, diferente do quéchua do sul de Cusco e da Bolívia, e pela Constituição peruana é oficial onde predomina, ao lado do espanhol. Ele tem um jeito próprio de soar: no Callejón de Huaylas, aos pés da Cordilheira Branca, o antigo “s” do começo das sílabas virou “h” ou até sumiu — a palavra “wasi” (casa) virou “wahi” e depois “wai”. O alfabeto oficial veio em 1975, e em 1985 ficou só com três vogais: a, i, u, e as longas, dobradas.',
      culture_tip:
        'Para chamar alguém, diz-se “Yaw!”, que também serve de “olá”. E quando batem à porta e perguntam “Pitaq?” (quem é?), a resposta é “Nuqam!” (sou eu) — ou, com mais respeito, “Nuqallaa”.',
      grammar_why:
        'O quéchua de Áncash nem sempre precisa do verbo “ser”: basta o final -m (ou -mi) na palavra. “Nuqam” é “sou eu”; “Allqum” é “é um cachorro”; “Yamayllam kaykaa” é “estou bem”. E as vogais longas mudam a pessoa do verbo: “kaykaa” é “eu estou”, e “kaykanki”, “você está”.',
      grammar_examples: [
        ['Pitaq? — Nuqam.', 'Quem é? — Sou eu.'],
        ['Imatan? — Allqum.', 'O que é? — É um cachorro.'],
        ['Yamayllam kaykaa.', 'Estou bem.'],
      ],
      character_guide: [
        ['aa, ii, uu', 'vogal dobrada é vogal longa', 'kaykaa (eu estou)'],
        ['q', 'um “k” do fundo da garganta (fora de Huaylas, um som raspado)', 'qam (você)'],
        ['ts', 'um “t” e um “s” juntos', 'tsay (isso)'],
        ['sh', 'o “ch” do português, de “chá”', 'shunqu (coração)'],
        ['ll', 'o “lh” do português', 'llampu (macio)'],
        ['ñ', 'o “nh” do português', 'ñawi (olho)'],
      ],
    },
    lessons: [
      {
        id: 'huay1239-u1-l1',
        title: 'Yaw!',
        kind: 'licao',
        words: ['Yaw', 'Imanawllataq kaykanki?', 'Yamayllaku kaykanki?', 'Yamayllam kaykaa', 'aw', 'mana'],
        cloze: [
          { sentence: '___ kaykaa.', answer: 'Yamayllam', options: ['Yamayllam', 'Imanawllataq', 'Yaw'], translation: 'Estou bem.' },
          { sentence: 'Imanawllataq ___?', answer: 'kaykanki', options: ['kaykanki', 'kaykaa', 'nuqam'], translation: 'Como você está?' },
          { sentence: 'Yamayllaku ___?', answer: 'kaykanki', options: ['kaykanki', 'allqum', 'awmi'], translation: 'Você está bem?' },
        ],
        voice: {
          bot: 'Imanawllataq kaykanki?',
          botTranslation: 'Como você está?',
          expected: ['Yamayllam kaykaa.', 'Yamayllam kaykaa', 'yamayllam kaykaa'],
          hint: 'Diga que está bem: “Yamayllam kaykaa”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Yaw!”), a pergunta “Imanawllataq kaykanki?” e a resposta.',
      },
      {
        id: 'huay1239-u1-l2',
        title: 'Pitaq? — Nuqam',
        kind: 'licao',
        words: ['Pitaq?', 'Nuqallaa', 'nuqa', 'qam', 'pay', 'nuqantsik'],
        cloze: [
          { sentence: 'Pitaq? — ___.', answer: 'Nuqam', options: ['Nuqam', 'Allqum', 'Yaw'], translation: 'Quem é? — Sou eu.' },
          { sentence: '___.', answer: 'Qammi', options: ['Qammi', 'Nuqam', 'Paytsuraq'], translation: 'É você.' },
          { sentence: 'Manam ___tsu.', answer: 'payta', options: ['payta', 'nuqam', 'allqu'], translation: 'Não é a ele.' },
        ],
        voice: {
          bot: 'Pitaq?',
          botTranslation: 'Quem é?',
          expected: ['Nuqam.', 'Nuqam', 'nuqam', 'Nuqallaa'],
          hint: 'Diga que é você: “Nuqam!” ou, com respeito, “Nuqallaa”.',
        },
        communityPrompt: 'Escreva o diálogo da porta: “Pitaq?” — “Nuqam!”.',
      },
      // Lições extras do A1.1 (17/10/2026). As palavras de cortesia vêm de [PAR], p. 72 (“Yosulpaaki”,
      // 'Gracias'; “Winchis”, 'Buenos días'; “¡Achacháw!”, '¡Qué pena!'; lidas na imagem da página), p. 88
      // (o -y de respeito: “mamay”, 'señora'; “taytay”, 'señor') e p. 137 (“Imanantsu”, 'No importa').
      // Os números são os do [OMNI], já no pacote (e os mesmos de [PAR], p. 78); a pergunta “Ayka?” é o
      // interrogativo de “¿Ayka watayoqtaq kanki?” (p. 147), só a palavra; “ishkay chunka” (20) e “chunka huk” (11) são de [PAR],
      // p. 78–79. As lacunas só pedem a palavra, sem frase montada.
      {
        id: 'huay1239-u1-l4',
        title: 'Winchis! Yosulpaaki!',
        kind: 'licao',
        words: ['Winchis', 'Yosulpaaki', 'Achacháw!', 'taytay', 'mamay', 'Imanantsu'],
        cloze: [
          { sentence: '“___”: bom dia.', answer: 'Winchis', options: ['Winchis', 'Yosulpaaki', 'Imanantsu'], translation: '“Winchis”: bom dia.' },
          { sentence: '“___”: obrigado.', answer: 'Yosulpaaki', options: ['Yosulpaaki', 'Winchis', 'Achacháw'], translation: '“Yosulpaaki”: obrigado.' },
          { sentence: '“___”: não tem importância.', answer: 'Imanantsu', options: ['Imanantsu', 'Achacháw', 'Winchis'], translation: '“Imanantsu”: não tem importância.' },
        ],
        voice: {
          bot: 'Winchis!',
          botTranslation: 'Bom dia!',
          expected: ['Winchis!', 'Winchis', 'winchis'],
          hint: 'Devolva o bom-dia: “Winchis!”.',
        },
        communityPrompt:
          'Para chamar alguém com respeito, o quéchua de Áncash põe um -y no fim: “tayta” (pai) vira “taytay” (senhor), e “mama” (mãe) vira “mamay” (senhora). Escreva um bom-dia respeitoso: “Winchis, taytay!” ou “Winchis, mamay!”, e um obrigado: “Yosulpaaki”.',
      },
      {
        id: 'huay1239-u1-l5',
        title: 'Huk, ishkay, kima',
        kind: 'licao',
        words: ['huk', 'ishkay', 'kima', 'chusku', 'pitsqa', 'chunka'],
        cloze: [
          { sentence: '“___”: três.', answer: 'kima', options: ['kima', 'ishkay', 'chusku'], translation: '“Kima”: três.' },
          { sentence: '“___”: cinco.', answer: 'pitsqa', options: ['pitsqa', 'huk', 'kima'], translation: '“Pitsqa”: cinco.' },
          { sentence: '“Ishkay ___”: vinte (dois dez).', answer: 'chunka', options: ['chunka', 'pachak', 'pitsqa'], translation: '“Ishkay chunka”: vinte.' },
        ],
        voice: {
          bot: 'Ayka?',
          botTranslation: 'Quanto?',
          expected: ['Kima.', 'Kima', 'kima', 'Huk', 'Ishkay', 'Chusku', 'Pitsqa', 'Chunka'],
          hint: 'Responda com um número de um a cinco, ou dez: “huk”, “ishkay”, “kima”, “chusku”, “pitsqa”, “chunka”.',
        },
        communityPrompt:
          'Os números de Áncash contam em dez: 11 é “chunka huk” (dez e um) e 20 é “ishkay chunka” (dois dez). Escreva de um a cinco e depois o 20.',
      },
      {
        id: 'huay1239-u1-l3',
        title: 'Prova: Yaw!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Yamayllaku kaykanki?',
          botTranslation: 'Você está bem?',
          expected: ['Yamayllam kaykaa.', 'Yamayllam kaykaa', 'Yamayllam', 'Awmi'],
          hint: 'Responda que sim: “Yamayllam kaykaa”.',
        },
        communityPrompt: 'Escreva um encontro: “Yaw!”, “Imanawllataq kaykanki?”, “Yamayllam kaykaa”.',
      },
    ],
  },
  {
    id: 'huay1239-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Imatan? — Allqum',
    emoji: '🐕',
    card: {
      id: 'huay1239-c2',
      title: 'Huaylas e Conchucos',
      emoji: '🗻',
      // [WIKI] «Clasificación del quechua ancashino» (os dois dialetos; aw > oo, ay > ee, uy > ii em
      // Huaylas: chawpi > choopi, tsay > tsee, mikuy > mikii; o -ski de Conchucos: mikuskin “acaba de
      // comer”; o “q” que some no fim da palavra no sul de Conchucos: mikushaq > mikushaa “comerei”).
      history:
        'O quéchua de Áncash tem dois grandes dialetos, separados pela Cordilheira Branca: o de Huaylas, a oeste, e o de Conchucos, a leste. Em Huaylas, os ditongos viram vogais longas: “chawpi” (meio) soa “choopi”, “tsay” (isso) soa “tsee” e “mikuy” (comer) soa “mikii”. Conchucos tem um final que Huaylas não usa, o -ski: “mikuskin” é “acaba de comer”. E no sul de Conchucos o “q” do fim da palavra some e alonga a vogal: “mikushaq” (comerei) vira “mikushaa”.',
      culture_tip:
        'Quando faz frio na serra, diz-se “Alalaw!”. Quando algo é feio, “Atataw!”. E quando se está cansado, “Ananaw!”.',
      grammar_why:
        'O quéchua cola finais nas palavras para mudar o sentido. Com -yuq, “quem tem”: “waakayuq” é o dono de vacas, e “payqa allquyuq”, ele tem cachorro. Com -lla, “só”: “allqulla”, só o cachorro. E com -paq, “para”: “Allqupaqku?”, é para o cachorro? — “Allqupaqmi”, é para o cachorro, sim.',
      grammar_examples: [
        ['Payqa allquyuq.', 'Ele tem cachorro.'],
        ['Allqupaqku? — Allqupaqmi.', 'É para o cachorro? — É para o cachorro, sim.'],
        ['Allqunwan.', 'Com o cachorro dele.'],
      ],
      character_guide: [
        ['-yuq', 'quem tem', 'waakayuq (dono de vacas)'],
        ['-lla', 'só, apenas', 'allqulla (só o cachorro)'],
        ['-paq', 'para', 'allqupaq (para o cachorro)'],
        ['-chaw', 'em, no, na', 'wayichaw (na casa)'],
      ],
    },
    lessons: [
      {
        id: 'huay1239-u2-l1',
        title: 'Allqu, waaka, wayi',
        kind: 'licao',
        words: ['allqu', 'waaka', 'wayi', 'hirka', 'yaku', 'rumi'],
        cloze: [
          { sentence: 'Imatan? — ___.', answer: 'Allqum', options: ['Allqum', 'Nuqam', 'Qammi'], translation: 'O que é? — É um cachorro.' },
          { sentence: 'Payqa ___.', answer: 'allquyuq', options: ['allquyuq', 'allqulla', 'allqum'], translation: 'Ele tem cachorro.' },
          { sentence: '___mi kaykaa.', answer: 'Hirkachaw', options: ['Hirkachaw', 'Wayi', 'Allqu'], translation: 'Estou no morro.' },
        ],
        voice: {
          bot: 'Imatan?',
          botTranslation: 'O que é?',
          expected: ['Allqum.', 'Allqum', 'allqum'],
          hint: 'Diga que é um cachorro: “Allqum”.',
        },
        communityPrompt: 'Escreva o que você vê, com o -m: “Allqum”, “Rumim”…',
      },
      {
        id: 'huay1239-u2-l2',
        title: 'Alalaw!',
        kind: 'licao',
        words: ['Alalaw!', 'Atataw!', 'Ananaw!', 'mikuy', 'yaykuy', 'waaka'],
        cloze: [
          { sentence: 'Allqupaqku? — ___.', answer: 'Allqupaqmi', options: ['Allqupaqmi', 'Allqum', 'Nuqam'], translation: 'É para o cachorro? — É para o cachorro, sim.' },
          { sentence: '___!', answer: 'Alalaw', options: ['Alalaw', 'Ananaw', 'Atataw'], translation: 'Que frio!' },
          { sentence: 'Yaykurqan___.', answer: 'mi', options: ['mi', 'tsu', 'ku'], translation: 'Ele entrou (eu vi).' },
        ],
        voice: {
          bot: 'Alalaw!',
          botTranslation: 'Que frio!',
          expected: ['Aw!', 'Aw', 'aw', 'Awmi', 'Ananaw'],
          hint: 'Concorde: “Awmi!” (sim).',
        },
        communityPrompt: 'Escreva o que você diz quando faz frio, quando algo é feio e quando está cansado.',
      },
      {
        id: 'huay1239-u2-l3',
        title: 'Prova: Imatan? — Allqum',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ayka?',
          botTranslation: 'Quanto?',
          expected: ['Pitsqa.', 'Pitsqa', 'pitsqa', 'Kima', 'Ishkay', 'Huk', 'Chunka'],
          hint: 'Responda com um número: “Pitsqa” (cinco), “Kima” (três)…',
        },
        communityPrompt: 'Conte de um a cinco no quéchua de Áncash: “huk, ishkay, kima, chusku, pitsqa”.',
      },
    ],
  },
  {
    id: 'huay1239-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Pitaq shamuykan?',
    emoji: '🏡',
    card: {
      id: 'huay1239-c3',
      title: 'A gramática de 1976',
      emoji: '📗',
      // [PAR], prólogo de Alberto Escobar (p. 11–12: a Lei 21156, de 27/05/1975, que oficializou o quéchua;
      // o projeto das seis gramáticas e seis dicionários: Ancash-Huailas, Ayacucho-Chanca, Cajamarca-
      // Cañaris, Cuzco-Collao, Junín-Huanca e San Martín) e introdução de Parker (p. 24: o quéchua de Áncash
      // não é mutuamente inteligível com o de Cusco e Ayacucho, e é “al menos tan diferente” deles “como lo
      // es el español en relación con el portugués”). culture_tip: p. 84 (o locativo -chaw; o -pi do sul só
      // sobra em Áncash em palavras fixas como “kaypi”, aqui). grammar_why: p. 107 (o pretérito com -rqa,
      // “wiyarqaa”, “wiyarqayki”, “wiyarqan”) e p. 71 (“Pablo yakutam upyaykan”, 'Pablo está tomando agua').
      history:
        'Em 27 de maio de 1975, a Lei 21156 tornou o quéchua língua oficial do Peru, ao lado do espanhol. Logo depois, o Ministério da Educação e o Instituto de Estudos Peruanos publicaram seis gramáticas e seis dicionários, um para cada grande variedade do quéchua peruano: Áncash-Huaylas, Ayacucho, Cajamarca, Cusco, Junín e San Martín. A de Áncash é de Gary Parker (1976), e dela vêm as frases desta unidade. Parker conta que o quéchua de Áncash não se entende de cara com o de Cusco ou o de Ayacucho: é tão diferente deles quanto o espanhol é do português.',
      culture_tip:
        'Para dizer “em”, o quéchua de Áncash usa -chaw: “wayichaw”, na casa. O quéchua do sul, de Cusco e da Bolívia, diz -pi. Em Áncash, o -pi só sobrou em palavras fixas, como “kaypi” (aqui).',
      grammar_why:
        'O passado leva -rqa antes da pessoa: “wiyarqaa” (ouvi), “wiyarqayki” (você ouviu), “wiyarqan” (ele ouviu). E o -yka diz que a ação está acontecendo agora: “Pablo yakutam upyaykan”, o Pablo está bebendo água.',
      grammar_examples: [
        ['Chakrapita shamurqun.', 'Ele veio da roça.'],
        ['Warasta aywanki.', 'Você vai a Huaraz.'],
        ['Pablo yakutam upyaykan.', 'O Pablo está bebendo água.'],
      ],
      character_guide: [
        ['-rqa', 'passado', 'wiyarqaa (ouvi)'],
        ['-yka', 'estar fazendo', 'upyaykan (está bebendo)'],
        ['-ta', 'o objeto; para onde se vai', 'Warasta (a Huaraz)'],
        ['-man', 'para, rumo a', 'Karasman (para Caraz)'],
        ['-pita', 'de, desde', 'chakrapita (da roça)'],
        ['-wan', 'com', 'Pablowan (com o Pablo)'],
      ],
    },
    lessons: [
      // Frases do [PAR]: “Taytanta rikarqayki”, 'Viste a su papá' (p. 83); “Tsurinwan taakuykan”, 'Está
      // viviendo con su hijo' (p. 86); “Wawa mamanta waqapaykan”, 'El bebe está llorando a su mamá'
      // (p. 124); a pergunta “¿Imatam rikarqayki?”, '¿Qué cosa viste?', e a resposta “Wayintam”, 'Su casa'
      // (p. 70). As opções erradas também são formas do livro: “rikarqaa” (p. 75), “rikaa” (p. 80).
      {
        id: 'huay1239-u3-l1',
        title: 'Tayta, mama, wawa',
        kind: 'licao',
        words: ['tayta', 'mama', 'wamra', 'wawa', 'tsuri', 'wawqi'],
        cloze: [
          { sentence: 'Taytanta ___.', answer: 'rikarqayki', options: ['rikarqayki', 'rikarqaa', 'rikaa'], translation: 'Você viu o pai dele.' },
          { sentence: '___nwan taakuykan.', answer: 'Tsuri', options: ['Tsuri', 'Wawqi', 'Tayta'], translation: 'Está morando com o filho.' },
          { sentence: 'Wawa ___nta waqapaykan.', answer: 'mama', options: ['mama', 'tayta', 'wawqi'], translation: 'O bebê está chorando pela mãe.' },
        ],
        voice: {
          bot: 'Imatam rikarqayki?',
          botTranslation: 'O que você viu?',
          expected: ['Wayintam.', 'Wayintam', 'wayintam'],
          hint: 'Diga que viu a casa dele: “Wayintam”.',
        },
        communityPrompt:
          'Em Áncash, “filho” muda com quem fala: a mãe diz “wawa”, o pai diz “tsuri”. E “wawqi” é o irmão de um homem. Escreva as palavras da sua família: “tayta” (pai), “mama” (mãe), “wawqi”…',
      },
      // Frases do [PAR]: “Warasta aywanki”, 'Irás a Huaraz' (p. 83; “aywaa”, p. 100; “aywanqa”, p. 122);
      // “Karasman kutimunqa”, 'Regresará a Caraz' (p. 83; “kutimunki”, p. 122; “shamurqan”, p. 70);
      // “¡Yakuta upyay!”, '¡Toma agua!' (p. 69). A resposta da voz é do [WIKI] (“Hirkachawmi kaykaa”) e a
      // pergunta, do [PAR], p. 147 (“¿Maytan kanki?”, '¿Dónde estás?').
      {
        id: 'huay1239-u3-l2',
        title: 'Ayway, shamuy, kutiy',
        kind: 'licao',
        words: ['ayway', 'shamuy', 'kutiy', 'upyay', 'punuy', 'tanta'],
        cloze: [
          { sentence: 'Warasta ___.', answer: 'aywanki', options: ['aywanki', 'aywaa', 'aywanqa'], translation: 'Você vai a Huaraz.' },
          { sentence: 'Karasman ___.', answer: 'kutimunqa', options: ['kutimunqa', 'kutimunki', 'shamurqan'], translation: 'Ele vai voltar para Caraz.' },
          { sentence: 'Yakuta ___!', answer: 'upyay', options: ['upyay', 'punuy', 'mikuy'], translation: 'Beba água!' },
        ],
        voice: {
          bot: 'Maytan kanki?',
          botTranslation: 'Onde você está?',
          expected: ['Hirkachawmi kaykaa.', 'Hirkachawmi kaykaa', 'hirkachawmi kaykaa'],
          hint: 'Diga que está no morro: “Hirkachawmi kaykaa”.',
        },
        communityPrompt:
          'Com -mu, o verbo vem para cá: “kutimunki” é “você volta para cá”, e “kutinki”, “você volta para lá”. Escreva para onde você vai, com o -ta ou o -man: “Warasta aywanki” (você vai a Huaraz).',
      },
      // [PAR], p. 70: “¿Pitaq shamuykan?”, '¿Quién está viniendo?', com a resposta “Pablom”, 'Pablo'.
      {
        id: 'huay1239-u3-l3',
        title: 'Prova: Pitaq shamuykan?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Pitaq shamuykan?',
          botTranslation: 'Quem está vindo?',
          expected: ['Pablom.', 'Pablom', 'pablom'],
          hint: 'Responda só com o nome e o -m: “Pablom” (é o Pablo).',
        },
        communityPrompt:
          'Escreva três frases do livro de Parker com o passado e o -yka: “Chakrapita shamurqun” (ele veio da roça), “Pablo yakutam upyaykan” (o Pablo está bebendo água) e “Allita rurarqan” (ele fez bem).',
      },
    ],
  },
  {
    id: 'huay1239-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Tushuyta munaa',
    emoji: '💃',
    card: {
      id: 'huay1239-c4',
      title: 'Dizem que…: o -naq dos contos',
      emoji: '🦊',
      // [PAR], p. 111–112 (o “modo delegatorio” -naq: a forma mais comum nos contos tradicionais; não é
      // tempo, mas modo: “el hablante no ha presenciado la acción”, ou não tinha se dado conta dela;
      // “wiyanaq”, 'él había oído', 'oyó (según me han dicho)'; no sul o sufixo é -sqa); p. 150 (-shi, -sh
      // depois de vogal breve, “muy común en cuentos”; “Kima kabra huk pumash kanaq”, 'Dicen que había tres
      // cabras y un puma'). culture_tip: p. 126 (“¡Upyarkushun!”, '¡Brindemos!', '¡Salud!') e p. 94
      // (“ichikllapa”, 'apenas, un poco'). grammar_why: p. 108 (futuro), p. 114 (imperativo) e p. 164
      // (“Tushuyta munaa”, 'Quiero bailar').
      history:
        'Nos contos tradicionais de Áncash, o verbo mais comum termina em -naq, e muitas frases levam -shi (ou só -sh): “Kima kabra huk pumash kanaq”, dizem que havia três cabras e um puma. Parker mostrou que o -naq não é um tempo do passado. Ele diz que quem fala não viu a coisa acontecer, ou não tinha se dado conta dela. Por isso “wiyanaq” pode ser “ele tinha ouvido” ou “ele ouviu, pelo que me contaram”. O quéchua do sul conta do mesmo jeito, mas com outro final: -sqa.',
      culture_tip:
        'Na hora do brinde, diz-se “Upyarkushun!”: saúde, vamos beber! E “ichikllapa” quer dizer “só um pouquinho”, “apenas”.',
      grammar_why:
        'O futuro tem finais próprios: “wiyashaq” (vou ouvir), “wiyanqa” (ele vai ouvir), “wiyashun” (vamos ouvir). Só o “você” é igual ao presente: “wiyanki”. A ordem usa o -y do infinitivo: “Wiyay!”, ouça! E “querer fazer” é o infinitivo com -ta: “Tushuyta munaa”, quero dançar.',
      grammar_examples: [
        ['Yakuman aywashaq.', 'Vou buscar água.'],
        ['Tushuyta munaa.', 'Quero dançar.'],
        ['Ama shuyamaytsu!', 'Não me espere!'],
      ],
      character_guide: [
        ['-shaq', 'eu vou (futuro)', 'aywashaq (vou)'],
        ['-nqa', 'ele vai (futuro)', 'kutimunqa (vai voltar)'],
        ['-shun', 'vamos (nós, com você)', 'upyarkushun (vamos brindar)'],
        ['-y', 'ordem para você', 'upyay (beba)'],
        ['-naq', 'sem ter visto', 'kanaq (havia, dizem)'],
        ['-shi, -sh', 'me contaram', 'pumash (um puma, dizem)'],
      ],
    },
    lessons: [
      // Frases do [PAR]: “Hunaq-hunaq tsaychaw uryan”, 'Trabaja allí todos los días' (p. 88); “Ishkay chunka
      // watayoq kaa”, 'Tengo veinte años' (p. 94); “paqasta”, 'de noche' (p. 90); a pergunta “¿Ayka
      // watayoqtaq kanki?”, '¿Cuántos años tienes?' (p. 147), lida na imagem da página.
      {
        id: 'huay1239-u4-l1',
        title: 'Hunaq, paqas, quya',
        kind: 'licao',
        words: ['hunaq', 'paqas', 'quya', 'kanan', 'inti', 'killa'],
        cloze: [
          { sentence: '___-hunaq tsaychaw uryan.', answer: 'Hunaq', options: ['Hunaq', 'Paqas', 'Killa'], translation: 'Trabalha ali todos os dias.' },
          { sentence: 'Ishkay chunka ___yuq kaa.', answer: 'wata', options: ['wata', 'killa', 'hunaq'], translation: 'Tenho vinte anos.' },
          { sentence: '___ta.', answer: 'Paqas', options: ['Paqas', 'Inti', 'Kanan'], translation: 'De noite.' },
        ],
        voice: {
          bot: 'Ayka watayuqtaq kanki?',
          botTranslation: 'Quantos anos você tem?',
          expected: ['Ishkay chunka watayuq kaa.', 'Ishkay chunka watayuq kaa', 'watayuq kaa'],
          hint: 'A idade se diz com -yuq, “quem tem”: “Ishkay chunka watayuq kaa” (tenho vinte anos).',
        },
        communityPrompt:
          'Em quéchua, a idade é uma coisa que se tem: “Ishkay chunka watayuq kaa” é “sou quem tem vinte anos”. Escreva a sua idade com “… watayuq kaa”, usando os números de dez em dez.',
      },
      // Frases do [PAR]: “Tushuyta munaa”, 'Quiero bailar' (p. 164; “munanki”, “munan”, na mesma página);
      // “Wayiqa pukam”, 'La casa es roja' (p. 68); “Wayinqa yuraqmi”, 'Su casa es blanca' (p. 150);
      // “Tushunaykita munaa”, 'Quiero que bailes', e “Tushuyta pweediitsu”, 'No puedo bailar' (p. 165).
      // A ordem dos adjetivos: “allí hatun mushoq puka wayi”, 'casa roja nueva grande y buena' (p. 76).
      {
        id: 'huay1239-u4-l2',
        title: 'Puka wayi, yuraq wayi',
        kind: 'licao',
        words: ['tushuy', 'yachay', 'puka', 'yuraq', 'hatun', 'mushuq'],
        cloze: [
          { sentence: 'Tushuyta ___.', answer: 'munaa', options: ['munaa', 'munanki', 'munan'], translation: 'Quero dançar.' },
          { sentence: 'Wayiqa ___m.', answer: 'puka', options: ['puka', 'yuraq', 'hatun'], translation: 'A casa é vermelha.' },
          { sentence: 'Wayinqa ___mi.', answer: 'yuraq', options: ['yuraq', 'puka', 'mushuq'], translation: 'A casa dele é branca.' },
        ],
        voice: {
          bot: 'Tushunaykita munaa.',
          botTranslation: 'Quero que você dance.',
          expected: ['Tushuyta munaa.', 'Tushuyta munaa', 'Tushuyta pweediitsu.', 'Tushuyta pweediitsu'],
          hint: 'Diga que quer dançar, “Tushuyta munaa”, ou que não consegue, “Tushuyta pweediitsu”.',
        },
        communityPrompt:
          'O adjetivo vem antes do nome, numa ordem fixa: “alli hatun mushuq puka wayi” é “casa boa, grande, nova e vermelha”. Descreva uma casa com “hatun”, “mushuq”, “puka” ou “yuraq”.',
      },
      // [PAR], p. 126: “¡Upyarkushun!”, '¡Brindemos!', '¡Salud!'; p. 94: “ichikllapa”, 'apenas, un poco'.
      {
        id: 'huay1239-u4-l3',
        title: 'Prova: Tushuyta munaa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Upyarkushun!',
          botTranslation: 'Saúde! (Vamos brindar!)',
          expected: ['Upyarkushun!', 'Upyarkushun', 'upyarkushun', 'Ichikllapa', 'ichikllapa'],
          hint: 'Responda ao brinde com o mesmo “Upyarkushun!”, ou peça só um pouquinho: “Ichikllapa”.',
        },
        communityPrompt:
          'Escreva o que você vai fazer na festa, com o futuro do livro de Parker: “Yakuman aywashaq” (vou buscar água) e “Tushuyta munaa” (quero dançar).',
      },
    ],
  },
];
