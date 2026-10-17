import type { UnitSeed } from '../types';

/**
 * Trilha do quéchua de Áncash, do A1.1 ao B1.4 (curso completo até o teto). Fontes no cabeçalho de
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
  // ══ B1 (17/10/2026). Todas as frases são do [PAR], com a página no comentário e a tradução de Parker
  // passada para o português, conferidas na imagem da página. Grafia pela mesma regra (e → i, o → u ao
  // lado de q). Nenhuma frase foi montada por este curso. Quando a frase é das províncias do leste
  // (Llamellín, Antonio Raimondi, Huari), o comentário avisa.
  {
    id: 'huay1239-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Mikuq nuna',
    emoji: '🍽️',
    card: {
      id: 'huay1239-c5',
      title: 'Quem come, o que comi',
      emoji: '🧀',
      // history: [PAR] p. 64–65 (os empréstimos: os já assimilados, que nem são sentidos como estrangeiros,
      // “kutsillu” 'cuchillo', “uusha”, “ashnu”; os só em parte assimilados, “trinchi” 'tenedor', “gomitay”
      // 'vomitar'; a proposta de escrevê-los com o alfabeto do quéchua mais b, d, g, f, e, ee, o).
      // culture_tip: p. 102 (derivados com -na: “pitsana” 'escoba', de pitsa- 'barrer'; “anka taakuna”,
      // 'peñasco de cierta forma, literalmente paradero del gavilán', de taa- 'sentarse; vivir') e p. 99
      // (“kayakuy”, 'fogata; vigilia de San Juan', de kaya- 'quemar'). grammar_why: p. 99 (“mikoq” 'el que
      // come', “mikoq nuna” 'hombre que come'), p. 101 (“machashqa nunakuna”, “mikuna papa”) e p. 171
      // (“Mikushqaa papa pachaachaw kaykan”). Exemplos: p. 171 e 172.
      history:
        'O quéchua de Áncash tem muitas palavras do espanhol. Parker conta que algumas foram tão bem assimiladas que ninguém mais as sente como estrangeiras: “kutsillu” (faca), “uusha” (ovelha), “ashnu” (burro). Outras foram só em parte, e mudaram de som ou de sentido: “trinchi” é o garfo, e “gomitay”, vomitar. Ele propõe escrever todas com o alfabeto do quéchua, mais as letras b, d, g, f, e, ee e o para os sons que o quéchua não tem. Por isso o livro escreve “keesu” (queijo) e “meesa” (mesa).',
      culture_tip:
        'Muitas coisas têm nome de verbo com -na, “o que serve para”: “pitsana”, a vassoura, vem de “pitsa-” (varrer). Um penhasco de certa forma se chama “anka taakuna”, “o pouso do gavião”. E “kayakuy”, de “kaya-” (queimar), é a fogueira e também a véspera de São João.',
      grammar_why:
        'Um final transforma o verbo em nome. Com -q, é quem faz: “mikuq nuna”, o homem que come. Com -shqa, o que já aconteceu: “mikushqaa papa”, a batata que comi; “machashqa nunakuna”, gente bêbada. Com -na, o que ainda pode acontecer: “mikuna papa”, batata que se pode comer.',
      grammar_examples: [
        ['Mikushqaa papa pachaachaw kaykan.', 'A batata que comi está na minha barriga.'],
        ['Partishqa keesu hitaraykan.', 'Tem um queijo partido jogado aí.'],
        ['Pununa hananchaw kaykan.', 'Está em cima da cama.'],
        ['Mikunqayki manam allitsu.', 'O que você come não é bom.'],
      ],
      character_guide: [
        ['-q', 'quem faz', 'mikuq (quem come)'],
        ['-shqa', 'o que já foi feito', 'mikushqayki (o que você comeu)'],
        ['-na', 'o que pode ser feito', 'mikuna (comestível)'],
        ['-nqa', 'o que se faz ou se fez', 'mikunqayki (o que você come)'],
      ],
    },
    lessons: [
      // [PAR] p. 101 e 171 (“Wamraqa taririnaq naanichaw huk kondor ratarishqata”); p. 101 (“pishipashqa
      // wamra”; “machashqa”); p. 170 (“machaq”, 'el que se emborracha'); p. 100 (“tushushqaa shipash”, 'la
      // muchacha con la cual bailé'). Voz: p. 147 (“¿Maytaq libru?”, '¿Dónde está el libro?') e p. 172
      // (“Pununa hananchaw kaykan”).
      {
        id: 'huay1239-u5-l1',
        title: 'Shipash, kondor, naani',
        kind: 'licao',
        words: ['shipash', 'kondor', 'naani', 'tariy', 'chaay', 'pishipashqa'],
        cloze: [
          { sentence: 'Wamraqa taririnaq naanichaw huk kondor ___.', answer: 'ratarishqata', options: ['ratarishqata', 'pishipashqa', 'machashqa'], translation: 'O menino encontrou no caminho um condor que tinha acabado de pousar.' },
          { sentence: '___ wamra.', answer: 'Pishipashqa', options: ['Pishipashqa', 'Mikuna', 'Machaq'], translation: 'Criança cansada.' },
          { sentence: 'Tushushqaa ___.', answer: 'shipash', options: ['shipash', 'papa', 'ponchu'], translation: 'A moça com quem eu dancei.' },
        ],
        voice: {
          bot: 'Maytaq libru?',
          botTranslation: 'Onde está o livro?',
          expected: ['Pununa hananchaw kaykan.', 'Pununa hananchaw kaykan', 'pununa hananchaw kaykan'],
          hint: 'Diga que está em cima da cama: “Pununa hananchaw kaykan”.',
        },
        communityPrompt:
          'Com -shqa, o verbo diz como alguém ficou: “pishipashqa wamra” (criança cansada), “machashqa nunakuna” (gente bêbada). Copie as duas e a frase do condor: “Wamraqa taririnaq naanichaw huk kondor ratarishqata”.',
      },
      // [PAR] p. 171 (“Partishqa keesu hitaraykan”; “mikuna trinchi”); p. 172 (“Pununa hananchaw kaykan”;
      // “mikuna meesa”). Voz: p. 74 (“¿Imataq qawarqayki?”, '¿Qué miraste?'), com a resposta da p. 171.
      {
        id: 'huay1239-u5-l2',
        title: 'Keesu, trinchi, meesa',
        kind: 'licao',
        words: ['keesu', 'trinchi', 'meesa', 'pununa', 'mikuna', 'pitsana'],
        cloze: [
          { sentence: 'Partishqa ___ hitaraykan.', answer: 'keesu', options: ['keesu', 'trinchi', 'meesa'], translation: 'Tem um queijo partido jogado aí.' },
          { sentence: 'Mikuna ___.', answer: 'trinchi', options: ['trinchi', 'ponchu', 'pitsana'], translation: 'Garfo para comer.' },
          { sentence: '___ hananchaw kaykan.', answer: 'Pununa', options: ['Pununa', 'Mikuna', 'Pitsana'], translation: 'Está em cima da cama.' },
        ],
        voice: {
          bot: 'Imataq qawarqayki?',
          botTranslation: 'O que você olhou?',
          expected: ['Partishqa keesu hitaraykan.', 'Partishqa keesu hitaraykan', 'partishqa keesu'],
          hint: 'Diga que viu um queijo partido jogado: “Partishqa keesu hitaraykan”.',
        },
        communityPrompt:
          'Com -na, o verbo vira “o que serve para”: “pununa” (cama, o que serve para dormir), “pitsana” (vassoura, o que serve para varrer), “mikuna meesa” (mesa para comer). Escreva as coisas da sua casa que você já sabe dizer.',
      },
      // [PAR] p. 84 e 101 (“Tushunaykipaq tokashaq”, 'Tocaré para que bailes'); p. 164 (“Tushuyta munaa”).
      {
        id: 'huay1239-u5-l3',
        title: 'Prova: Mikuq nuna',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tushunaykipaq tokashaq.',
          botTranslation: 'Vou tocar para você dançar.',
          expected: ['Tushuyta munaa.', 'Tushuyta munaa', 'tushuyta munaa'],
          hint: 'Diga que quer dançar: “Tushuyta munaa”.',
        },
        communityPrompt:
          'Copie três frases de Parker, uma com cada final: “mikuq nuna” (o homem que come), “Mikushqaa papa pachaachaw kaykan” (a batata que comi está na minha barriga) e “Mikunqayki manam allitsu” (o que você come não é bom).',
      },
    ],
  },
  {
    id: 'huay1239-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Yana puma yuririn',
    emoji: '🌵',
    card: {
      id: 'huay1239-c6',
      title: 'Quando, se, porque: -pti e -r',
      emoji: '🔗',
      // history: [PAR] p. 156–157 (os exemplos das orações coordenadas tirados de contos: o puma que cuidava
      // da moça, “Tsaychawmi waatakunaq, uushata apaq, wallpata apaq, imayka aytsata faltatseqtsu”, 'Allí (el
      // puma) la cuidó, llevaba ovejas, llevaba gallinas, no dejaba faltar ninguna clase de carne', com
      // shipash 'la muchacha' como objeto; e, de outro conto, a bruxa, achikay, que procura o menino, e o
      // condor que a ataca). culture_tip: p. 144 e 163 (o -shpa só em Huaraz e Aija, pouco frequente;
      // “Aabasta mikushpa kuchita waharamushaq”, com as três traduções de Parker). grammar_why: p. 160–161.
      history:
        'Muitas frases do capítulo de Parker sobre as orações compostas vêm de contos tradicionais. Num deles, um puma leva uma moça para a caverna, e o livro conta que ali ele cuidava dela: levava ovelhas, levava galinhas, não deixava faltar carne de nenhum tipo. Em outro, uma bruxa, a “achikay”, procura um menino e o chama, e um condor a ataca. Os dois são contados com o -naq, o verbo mais comum dos contos tradicionais.',
      culture_tip:
        'O -r e o -pti se usam em todo Áncash. O -shpa, que faz o papel do -r, só foi registrado nas províncias de Huaraz e Aija, e é raro: “Aabasta mikushpa kuchita waharamushaq” é “comendo as favas, vou pôr o porco para fora”, e Parker diz que pode ser enquanto, antes ou depois de comer.',
      grammar_why:
        'Quando duas ações têm o mesmo sujeito, a primeira leva -r: “Quya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan”, levantando-se de madrugada e cardando a lã, ela espera o sol. Quando o sujeito muda, ela leva -pti e a pessoa: “Anyarta pallaraykaptinshi, yana puma yuririn”, quando ela estava colhendo pitaia, apareceu um puma preto.',
      grammar_examples: [
        ['Anyarta pallaraykaptinshi, yana puma yuririn.', 'Quando ela estava colhendo pitaia, apareceu um puma preto.'],
        ['Qamta chikishunki uushanta suwaptiki.', 'Ele odeia você porque você roubou as ovelhas dele.'],
        ['Yanapamay uryar!', 'Ajude-me a trabalhar!'],
        ['Quya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan.', 'Levantando-se de madrugada, cardando a lã, ela espera o sol.'],
      ],
      character_guide: [
        ['-pti + pessoa', 'quando, se, porque (outro sujeito)', 'wiyaptii (se eu ouço)'],
        ['-r', 'quando, se (o mesmo sujeito)', 'hichikur (cardando)'],
        ['-r-nin', 'o mesmo -r, com uma sílaba a mais', 'shaarikurirnin (levantando-se)'],
        ['-shpa', 'o -r de Huaraz e Aija', 'mikushpa (comendo)'],
      ],
    },
    lessons: [
      // [PAR] p. 160 (“Anyarta pallaraykaptinshi, yana puma yuririn”); p. 168 (“Shipasta kachanaq irkaman
      // anyarta pallamunampaq”, 'Mandó a la muchacha al cerro para recoger pitahaya'; “irka” sem o h, como no
      // livro); p. 161 (“Yuririrninqa katakurkur heqatsikurin kweebanman”). As cores erradas são do pacote
      // (A2). Voz: p. 162 e 167 (“Takllata katay”); a resposta “Awmi”, 'Sí' (p. 150).
      {
        id: 'huay1239-u6-l1',
        title: 'Anyar, yana puma',
        kind: 'licao',
        words: ['anyar', 'pallay', 'yana', 'yuririy', 'kweeba', 'katay'],
        cloze: [
          { sentence: 'Anyarta pallaraykaptinshi, ___ puma yuririn.', answer: 'yana', options: ['yana', 'puka', 'yuraq'], translation: 'Quando ela estava colhendo pitaia, apareceu um puma preto.' },
          { sentence: 'Shipasta kachanaq irkaman anyarta ___.', answer: 'pallamunampaq', options: ['pallamunampaq', 'pallaraykaptinshi', 'yuririn'], translation: 'Mandou a moça ao morro para colher pitaia.' },
          { sentence: 'Yuririrninqa katakurkur hiqatsikurin ___.', answer: 'kweebanman', options: ['kweebanman', 'wayinchaw', 'naanichaw'], translation: 'Quando apareceu, pôs a moça no ombro e a levou para a caverna dele.' },
        ],
        voice: {
          bot: 'Takllata katay!',
          botTranslation: 'Carregue o arado!',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Aw'],
          hint: 'Diga que sim: “Awmi”.',
        },
        communityPrompt:
          'O -pti leva a pessoa de quem faz a outra ação: “pallaraykaptin”, quando ela estava colhendo. Copie a frase do puma, “Anyarta pallaraykaptinshi, yana puma yuririn”, e sublinhe o -pti.',
      },
      // [PAR] p. 161 (“Qoya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan”; “Tsaychawmi
      // kawakullan asikurirnin, waqakurirnin, shunqun rurinchaw llakikurirpis”); p. 162 (“Yanapamay uryar”;
      // “shuyamay”, p. 101; “wiyamay”, p. 114). Voz: p. 162; resposta “Awmi” (p. 150).
      {
        id: 'huay1239-u6-l2',
        title: 'Shuyay, asiy, llakiy',
        kind: 'licao',
        words: ['millwa', 'shuyay', 'shaariy', 'asiy', 'llakiy', 'yanapay'],
        cloze: [
          { sentence: 'Quya waraqwan shaarikurirnin, millwanta hichikur, intita ___.', answer: 'shuyan', options: ['shuyan', 'shuyamay', 'yuririn'], translation: 'Levantando-se de madrugada, cardando a lã, ela espera o sol.' },
          { sentence: 'Tsaychawmi kawakullan ___, waqakurirnin, shunqun rurinchaw llakikurirpis.', answer: 'asikurirnin', options: ['asikurirnin', 'shaarikurirnin', 'pallaraykaptin'], translation: 'Ali ela vive, rindo, chorando e com pena dentro do coração.' },
          { sentence: '___ uryar!', answer: 'Yanapamay', options: ['Yanapamay', 'Shuyamay', 'Wiyamay'], translation: 'Ajude-me a trabalhar!' },
        ],
        voice: {
          bot: 'Yanapamay uryar!',
          botTranslation: 'Ajude-me a trabalhar!',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Aw'],
          hint: 'Aceite: “Awmi” (sim).',
        },
        communityPrompt:
          'O -r junta ações de quem é o mesmo: “asikurirnin, waqakurirnin” (rindo, chorando). Escreva o que a moça do conto faz de manhã: “Quya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan”.',
      },
      // [PAR] p. 148 (“¡Ama shuyamaytsu!”, '¡No me esperes!'); p. 137 (“Imanantsu”, 'No importa').
      {
        id: 'huay1239-u6-l3',
        title: 'Prova: Yana puma yuririn',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ama shuyamaytsu!',
          botTranslation: 'Não me espere!',
          expected: ['Imanantsu.', 'Imanantsu', 'imanantsu'],
          hint: 'Diga que não tem importância: “Imanantsu”.',
        },
        communityPrompt:
          'Copie duas frases de Parker, uma com -pti e uma com -r: “Qamta chikishunki uushanta suwaptiki” (ele odeia você porque você roubou as ovelhas dele) e “Yanapamay uryar!” (ajude-me a trabalhar!).',
      },
    ],
  },
  {
    id: 'huay1239-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Llulla kayniipa',
    emoji: '🐑',
    card: {
      id: 'huay1239-c7',
      title: 'Eu faria, eu tenho que: -man e -na',
      emoji: '🤥',
      // history: [PAR] p. 122 (as províncias “situadas al este de la Cordillera Blanca”), p. 110 (Antonio
      // Raimondi entre as “provincias orientales”), p. 113 (Llamellín: a forma -shway onde as outras dizem -shwan; o condicional passado
      // registrado em Llamellín), p. 151 (-chaa “con la mayor frecuencia en las provincias orientales”;
      // exemplos de Llamellín), p. 158–159 (“itsan”, 'en cambio, pero', de itsa 'quizás', só nas
      // províncias orientais) e p. 99, 113, 159 (as frases de Llamellín e do leste dizem “runa”; as do resto
      // do livro, “nuna”: “mikoq nuna”, p. 99; “machaq nuna”, p. 170). culture_tip: p. 159 (as falas do
      // homem e do menino). grammar_why: p. 112–114.
      history:
        'Parker também registrou o quéchua das províncias do leste, a leste da Cordilheira Branca, como Llamellín e a província de Antonio Raimondi. Lá, “nós faríamos” termina em -shway, onde o resto de Áncash diz -shwan; o -chaa (“com certeza”) é mais usado; e existe uma palavra para “mas”, “itsan”, que vem de “itsa” (talvez). Nas frases de Llamellín, “pessoa” é “runa”; no resto do livro, “nuna”.',
      culture_tip:
        'Nas frases que Parker registrou no leste, um homem cansa de ouvir um menino chamar de mentira: “Agora, se ele chamar, mesmo que morra, não volto”. E o menino lamenta: “Kananmi itsanqa llulla kayniipa, llapan uushaata uqraykuu”, mas agora, por ser mentiroso, perdi todas as minhas ovelhas.',
      grammar_why:
        'O -man depois da pessoa faz o condicional: “wiyaaman”, eu ouviria; “shamunman”, ele viria. Com “karqan” depois, vira passado: “chaatsiiman karqan”, eu teria levado. E o -na com a pessoa diz o que se tem que fazer: “wiyanaa”, tenho que ouvir; “wiyanaa kanqa”, vou ter que ouvir.',
      grammar_examples: [
        ['Itsa shamunman.', 'Talvez ele viesse.'],
        ['Tushuyta munankiman.', 'Você ia querer dançar.'],
        ['Wiyanaa kanqa.', 'Vou ter que ouvir.'],
        ['Mana tsay runata llullapaaman karqan, llapan uushaata saanutami wayiiman chaatsiiman karqan.', 'Se eu não tivesse mentido para aquele homem, teria levado todas as minhas ovelhas sãs para casa.'],
      ],
      character_guide: [
        ['-man (depois da pessoa)', 'faria', 'wiyaaman (eu ouviria)'],
        ['… karqan', 'teria feito', 'chaatsiiman karqan (eu teria levado)'],
        ['-shwan', 'nós (eu e você) faríamos', 'wiyashwan (ouviríamos)'],
        ['-na + pessoa', 'ter que', 'wiyanaa (tenho que ouvir)'],
      ],
    },
    lessons: [
      // [PAR] p. 159 (frase do leste: “Wamraqa yarpachakun i nin "kananmi itsanqa llulla kayniipa, llapan
      // uushaata oqraykuu"”); p. 165 (“Tushunaykita qonqarqaa”, 'Olvidé que bailarías'; “Tushunaykita
      // munaa”; “Tushunaykita musyaa”); p. 167 (“Pununanta ninki”, 'Le dirás que dormirá'). Voz: p. 151
      // (“Pununkimir”, 'Dormirás pues'); resposta “Awmi” (p. 150).
      {
        id: 'huay1239-u7-l1',
        title: 'Llulla, yarpachakuy',
        kind: 'licao',
        words: ['llulla', 'yarpachakuy', 'niy', 'uqraykuy', 'qunqay', 'musyay'],
        cloze: [
          { sentence: 'Wamraqa yarpachakun i nin “kananmi itsanqa ___ kayniipa, llapan uushaata uqraykuu”.', answer: 'llulla', options: ['llulla', 'alli', 'hatun'], translation: 'O menino pensa e diz: “Mas agora, por ser mentiroso, perdi todas as minhas ovelhas”.' },
          { sentence: 'Tushunaykita ___.', answer: 'qunqarqaa', options: ['qunqarqaa', 'munaa', 'musyaa'], translation: 'Esqueci que você ia dançar.' },
          { sentence: 'Pununanta ___.', answer: 'ninki', options: ['ninki', 'munaa', 'musyaa'], translation: 'Você vai dizer a ele que ele vai dormir.' },
        ],
        voice: {
          bot: 'Pununkimir.',
          botTranslation: 'Você vai dormir, então.',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Aw'],
          hint: 'Concorde: “Awmi”.',
        },
        communityPrompt:
          'Em quéchua, o que alguém disse vem entre aspas, com “ni-” (dizer) depois: “"Takllata katay" nimanqa”, ele vai me dizer: “Carregue o arado!”. Copie a frase do menino mentiroso e marque o “nin” (ele diz).',
      },
      // [PAR] p. 165 (“Tushuyta qallarqan”, 'Comenzó a bailar'; “Tushuyta pweediitsu”; “Tushuyta yachanki”);
      // p. 98 (“Serbesa upyay gustamantsu”, 'No me gusta tomar cerveza'; “¿Upyaynin gustashunkiku?”, '¿Te
      // gusta cómo bebe?'); p. 148 (“¿Gustashunkiku?”); p. 71 (“Itsa shamunman”, 'Quizás vendría'). Voz:
      // p. 98; respostas “Manam”, 'No', e “Awmi” (p. 150). Prompt: aswa 'chicha' e aswakU- 'hacer chicha'
      // (p. 140); utsu 'ají' e utsurkU- 'agregar ají' (p. 141); shapash 'zapallo' (p. 97).
      {
        id: 'huay1239-u7-l2',
        title: 'Tushuyta qallarqan',
        kind: 'licao',
        words: ['qallay', 'pweediy', 'tokay', 'gustay', 'serbesa', 'itsa'],
        cloze: [
          { sentence: 'Tushuyta ___.', answer: 'qallarqan', options: ['qallarqan', 'pweediitsu', 'yachanki'], translation: 'Ele começou a dançar.' },
          { sentence: 'Serbesa upyay ___.', answer: 'gustamantsu', options: ['gustamantsu', 'gustashunkiku', 'munaa'], translation: 'Não gosto de beber cerveja.' },
          { sentence: '___ shamunman.', answer: 'Itsa', options: ['Itsa', 'Ama', 'Kanan'], translation: 'Talvez ele viesse.' },
        ],
        voice: {
          bot: 'Upyaynin gustashunkiku?',
          botTranslation: 'Você gosta do jeito como ele bebe?',
          expected: ['Manam.', 'Manam', 'manam', 'Awmi.', 'Awmi'],
          hint: 'Responda “Manam” (não) ou “Awmi” (sim).',
        },
        communityPrompt:
          'Com “qalla-” (começar), “pweedi-” (poder) e “yacha-” (saber fazer), o outro verbo fica no infinitivo com -ta: “Tushuyta qallarqan” (começou a dançar). Na festa de Áncash bebe-se “aswa” (chicha) ou “serbesa” (cerveja), e na comida vão “utsu” (pimenta) e “shapash” (abóbora); Parker registra até os verbos “aswaku-” (fazer chicha) e “utsurku-” (pôr pimenta). Escreva do que você gosta, como “Serbesa upyay gustamantsu” (não gosto de beber cerveja).',
      },
      // [PAR] p. 148 (“¿Gustashunkiku?”, '¿Te gusta?'); respostas da p. 150.
      {
        id: 'huay1239-u7-l3',
        title: 'Prova: Llulla kayniipa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Gustashunkiku?',
          botTranslation: 'Você gosta?',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Manam.', 'Manam'],
          hint: 'Responda “Awmi” (sim) ou “Manam” (não).',
        },
        communityPrompt:
          'Copie a frase de Llamellín com o condicional passado: “Mana tsay runata llullapaaman karqan, llapan uushaata saanutami wayiiman chaatsiiman karqan” (se eu não tivesse mentido para aquele homem, teria levado todas as minhas ovelhas sãs para casa), e marque os dois -man.',
      },
    ],
  },
  {
    id: 'huay1239-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Kima kabra huk pumash kanaq',
    emoji: '🐐',
    card: {
      id: 'huay1239-c8',
      title: 'Dizem que: -mi, -shi, -chi e o -naq',
      emoji: '📜',
      // history: Incubadora Wikimedia (consultada em 17/10/2026): a Wikipédia em teste (Wp/qwh), o Wikcionário
      // (Wt/qwh) e o Wikilibros (Wb/qwh), com os contos “Atuqwan kuntur”, “Atuqwan kakash” (kakash 'gallo',
      // no Wikcionário), “Atuqwan puma” e “Intiwan wayra”, sem tradução. culture_tip: [PAR] p. 170 (“¿Imallakash,
      // imallakash, shimimpa ishpaq?”, '¿Qué será, qué será, que por su boca orina? (La respuesta correcta es
      // la botella)'). grammar_why: p. 150–151 (-mi, -shi, -chi; “Wayinqa yuraqmi”; “Kima kabra huk pumash
      // kanaq”; “Tullullaatach tarinki”, da província de Huaylas). Exemplos: p. 94, 150, 151, 146.
      history:
        'Hoje o quéchua de Áncash também se escreve na internet. Na Incubadora da Wikimedia, onde nascem as Wikipédias novas, há uma Wikipédia em teste, um Wikcionário com fotos e um Wikilibros com contos tradicionais: a raposa e o condor, a raposa e o galo, a raposa e os pumas, o sol e o vento. Os contos estão sem tradução, com o -naq e o -sh em quase toda frase: boa leitura para quem terminar este curso.',
      culture_tip:
        'Uma adivinha que Parker registrou: “Imallakash, imallakash, shimimpa ishpaq?”, o que será, o que será, que faz xixi pela boca? A resposta é a garrafa.',
      grammar_why:
        'O -mi diz que quem fala viu ou sabe: “Wayinqa yuraqmi”, a casa dele é branca. O -shi diz que contaram: “Kima kabra huk pumash kanaq”, dizem que havia três cabras e um puma. O -chi é um palpite: “Tullullaatach tarinki”, talvez você encontre só os meus ossos. Nos contos, o -shi anda junto com o verbo em -naq.',
      grammar_examples: [
        ['Huk kurash kriyadayuq kanaq wayinchaw.', 'Dizem que um padre tinha uma criada em casa.'],
        ['Tsayshi tsaychawqa kima killa paarayaanaq.', 'Então viveram ali três meses.'],
        ['Qampischi imbitado aywaykanki.', 'Acho que você também está indo como convidado.'],
        ['Chakwasnam kallaa.', 'Já sou velha.'],
      ],
      character_guide: [
        ['-mi, -m', 'eu vi, eu sei', 'nuqam (sou eu)'],
        ['-shi, -sh', 'me contaram', 'pumash (um puma, dizem)'],
        ['-chi, -ch', 'talvez, acho que', 'tullullaatach (talvez só os meus ossos)'],
        ['-naq', 'sem ter visto', 'kanaq (havia)'],
        ['-raq', 'ainda', 'tsaychawraqmi (ainda ali)'],
        ['-na', 'já', 'chakwasnam (já velha)'],
      ],
    },
    lessons: [
      // [PAR] p. 170 (“Tayta Dyos pishqukunata llapan paareqkunata huk banketeman imbitanaa”, 'Dios invitó a
      // un banquete a todas las aves, a las que vuelan'); p. 155 (“Pishqukunata llapan paareqkunata huk
      // banketeman imbitanaq”); p. 84 (“wamrakunapita”); p. 150 (“Kima kabra huk pumash kanaq”). Voz:
      // p. 146 (“Kantarillannam”, 'Ya está cantando'); resposta “Awmi” (p. 150).
      {
        id: 'huay1239-u8-l1',
        title: 'Pishqu, winchus, tumpush',
        kind: 'licao',
        words: ['pishqu', 'paariy', 'winchus', 'tumpush', 'tarush', 'arash'],
        cloze: [
          { sentence: 'Tayta Dyos ___ llapan paariqkunata huk banketeman imbitanaa.', answer: 'pishqukunata', options: ['pishqukunata', 'wamrakunata', 'nunakunata'], translation: 'Deus convidou para um banquete todas as aves, todas as que voam.' },
          { sentence: 'Pishqukunata llapan ___ huk banketeman imbitanaq.', answer: 'paariqkunata', options: ['paariqkunata', 'wamrakunata', 'machashqa'], translation: 'Convidou para um banquete as aves, todas as que voam.' },
          { sentence: 'Kima ___ huk pumash kanaq.', answer: 'kabra', options: ['kabra', 'tarush', 'arash'], translation: 'Dizem que havia três cabras e um puma.' },
        ],
        voice: {
          bot: 'Kantarillannam.',
          botTranslation: 'Já está cantando.',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Aw'],
          hint: 'Concorde: “Awmi”.',
        },
        communityPrompt:
          'Muitos nomes de bichos e plantas de Áncash terminam em -s ou -sh: “winchus” (beija-flor), “tumpush” (abelha), “tarush” (veado), “arash” (lagartixa). Escreva os que você aprendeu e diga, com o -shi, uma coisa que contaram: “Kima kabra huk pumash kanaq”.',
      },
      // [PAR] p. 161 (“Bruha aywaraykaptinqa, kordelqa rachikurinaq”; “Yaykuykaptinqa anasqa ishpapuykamunaq
      // nawichaw”); p. 150 (“Chaarirninqa tapurinaq”); p. 101 (“kondor”). Voz: p. 146 (“¿Aywakunnaku?”, '¿Ya
      // se ha ido?'); respostas da p. 150.
      {
        id: 'huay1239-u8-l2',
        title: 'Achikay, anas, ukush',
        kind: 'licao',
        words: ['achikay', 'anas', 'ukush', 'kordel', 'tapuy', 'ishkiy'],
        cloze: [
          { sentence: 'Bruha aywaraykaptinqa, ___ rachikurinaq.', answer: 'kordelqa', options: ['kordelqa', 'ukushqa', 'anasqa'], translation: 'Enquanto a bruxa ia embora, a corda se rompeu.' },
          { sentence: 'Yaykuykaptinqa ___ ishpapuykamunaq nawichaw.', answer: 'anasqa', options: ['anasqa', 'kordelqa', 'kondorqa'], translation: 'Quando a bruxa entrou, o zorrilho fez xixi nos olhos dela.' },
          { sentence: '___ tapurinaq.', answer: 'Chaarirninqa', options: ['Chaarirninqa', 'Yaykuykaptinqa', 'Pishipashqa'], translation: 'Quando chegou, perguntou.' },
        ],
        voice: {
          bot: 'Aywakunnaku?',
          botTranslation: 'Já foi embora?',
          expected: ['Awmi.', 'Awmi', 'awmi', 'Manam.', 'Manam'],
          hint: 'Responda “Awmi” (sim) ou “Manam” (não).',
        },
        communityPrompt:
          'Nos contos, quase todo verbo termina em -naq: “rachikurinaq” (rompeu-se), “tapurinaq” (perguntou). Copie as duas frases da bruxa e marque o -naq.',
      },
      // [PAR] p. 147 (“¿Pitaq shamurqun?”, '¿Quién ha venido?'); respostas do pacote (“Nuqam”, “Nuqallaa”).
      {
        id: 'huay1239-u8-l3',
        title: 'Prova: Kima kabra huk pumash kanaq',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Pitaq shamurqun?',
          botTranslation: 'Quem veio?',
          expected: ['Nuqam.', 'Nuqam', 'nuqam', 'Nuqallaa'],
          hint: 'Diga que foi você: “Nuqam” ou, com respeito, “Nuqallaa”.',
        },
        communityPrompt:
          'Escreva o começo de um conto com o -shi e o -naq, como nos livros: “Huk kurash kriyadayuq kanaq wayinchaw” (dizem que um padre tinha uma criada em casa) ou “Kima kabra huk pumash kanaq” (dizem que havia três cabras e um puma).',
      },
    ],
  },
];
