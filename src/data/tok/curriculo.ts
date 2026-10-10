import type { UnitSeed } from '../types';

/**
 * Trilha do toki pona: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts) — a segunda língua construída do app com curso de verdade (depois do esperanto, pedido
 * do Matheus, 08/10/2026). Fontes: Sonja Lang, "Toki Pona: The Language of Good" (2014);
 * tokipona.org; Wikipédia ("Toki Pona").
 */
export const UNITS_TOK: UnitSeed[] = [
  {
    id: 'tok-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'toki! Mi en sina',
    emoji: '👋',
    card: {
      id: 'tok-c1',
      title: 'Uma língua de só ~120 palavras — de propósito',
      emoji: '🌱',
      history:
        'O toki pona foi criado em 2001 pela tradutora e linguista canadense Sonja Lang (Sonja Elen Kisa), que começou a desenvolvê-lo durante um período de depressão, como um jeito de simplificar os próprios pensamentos. Ela já falava esperanto e se inspirou nele, além do taoismo e da hipótese de Sapir-Whorf (a ideia de que a língua que falamos molda como pensamos). O projeto ganhou forma on-line ainda em 2001, mas só em 2014 Lang publicou o livro oficial, "Toki Pona: The Language of Good", com as palavras centrais da língua.',
      culture_tip:
        'A comunidade do toki pona separa o vocabulário em camadas: "nimi pu" são as ~120 palavras do livro oficial de 2014 (contando 3 sinônimos, o total listado costuma dar 123) — é o núcleo que este curso ensina quase por completo. Em 2021, Lang publicou um dicionário, o "Toki Pona Dictionary" (apelidado "ku"), com mais palavras de uso comum da comunidade ("nimi ku suli") e outras bem raras ("nimi ku lili"); juntando pu e as ku suli mais aceitas, dá cerca de 137 palavras — por isso fontes diferentes falam de "120 a 137 palavras" pro toki pona. As três palavras de ku suli mais aceitas pela comunidade são "tonsi" (pessoa trans/não-binária), "n" (uma interjeição, "hum"/"é") e "soko" (fungo/cogumelo) — nenhuma das três entra no vocabulário deste curso, que ensina só o núcleo pu. O rótulo de "língua taoísta" pegou mais do que Lang pretendia: ela citou o Tao Te Ching como uma das inspirações no livro de 2014, mas em dezembro de 2024 ela mesma esclareceu que a ligação começou como um comentário solto, não como um projeto filosófico.',
      grammar_why:
        'No toki pona, a partícula "li" marca o predicado (o verbo) de qualquer sujeito — MENOS quando o sujeito é "mi" (eu/nós) ou "sina" (você/vocês): nesses dois casos, "li" desaparece. Por isso "mi pona" e "sina pona" não têm "li", mas "jan li pona" (a pessoa é boa) precisa dele.',
      grammar_examples: [
        ['mi pona. sina pona.', 'Eu estou bem. Você está bem. (sem "li")'],
        ['jan li pona. ona li pona.', 'A pessoa é boa. Ele/ela é bom(a). (com "li")'],
      ],
      character_guide: [
        ['j', '"i" curto e deslizado, o "y" do inglês "yes"', 'jan ("ian", pessoa)'],
        ['w', 'deslize rápido, o "w" do inglês "water"', 'waso ("UAH-so", pássaro)'],
        ['e/o', 'sempre abertos, como "é"/"ó" — nunca reduzem no fim da palavra', 'pona ("PÓ-na", bom), toki ("TÓ-ki", falar)'],
      ],
    },
    lessons: [
      {
        id: 'tok-u1-l1',
        title: 'toki, pona, ike',
        kind: 'licao',
        words: ['toki', 'pona', 'ike', 'mi', 'sina', 'nimi'],
        cloze: [
          { sentence: '___! nimi mi li Ana.', answer: 'toki', options: ['toki', 'pona', 'ike'], translation: 'Oi! Meu nome é Ana.' },
          { sentence: 'mi ___. sina pona anu seme?', answer: 'pona', options: ['pona', 'ike', 'toki'], translation: 'Eu estou bem. Você está bem, ou não?' },
          { sentence: '___ sina li seme?', answer: 'nimi', options: ['nimi', 'mi', 'sina'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'toki! nimi sina li seme?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['nimi mi li Ana.', 'nimi mi li', 'mi pona'],
          hint: 'Diga seu nome com "nimi mi li…" (meu nome é…).',
        },
        communityPrompt: 'Se apresente em toki pona: diga "toki!" e depois "nimi mi li…" com o seu nome.',
      },
      {
        id: 'tok-u1-l2',
        title: 'jan, ni, seme',
        kind: 'licao',
        words: ['jan', 'ni', 'seme', 'wile', 'moku', 'telo'],
        cloze: [
          { sentence: '___ li lon tomo.', answer: 'jan', options: ['jan', 'ni', 'seme'], translation: 'A pessoa está em casa.' },
          { sentence: 'sina wile e ___?', answer: 'seme', options: ['seme', 'ni', 'jan'], translation: 'O que você quer?' },
          { sentence: 'mi ___ moku.', answer: 'wile', options: ['wile', 'moku', 'telo'], translation: 'Eu quero comer.' },
        ],
        voice: {
          bot: 'sina wile e seme?',
          botTranslation: 'O que você quer?',
          expected: ['mi wile moku.', 'mi wile e telo.', 'mi wile'],
          hint: 'Responda com "mi wile…" (eu quero…) e um verbo, como "moku" (comer).',
        },
        communityPrompt: 'Diga o que você quer com "mi wile e…" ou "mi wile…" e um verbo.',
      },
      {
        id: 'tok-u1-l3',
        title: 'sona: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'toki! nimi mi li Petro. nimi sina li seme?',
          botTranslation: 'Oi! Meu nome é Petro. Qual é o seu nome?',
          expected: ['toki! nimi mi li Ana. mi pona.', 'nimi mi li', 'mi wile toki pona'],
          hint: 'Responda a saudação, diga seu nome e diga como você está.',
        },
        communityPrompt: 'Escreva uma apresentação curta em toki pona: saudação, seu nome e como você está.',
      },
    ],
  },
  {
    id: 'tok-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mama, tomo, kili',
    emoji: '👪',
    card: {
      id: 'tok-c2',
      title: 'Uma palavra só, muitos sentidos',
      emoji: '🧩',
      history:
        'O toki pona não tem uma palavra pra "irmão" ou "irmã" — no vocabulário oficial, "mama" cobre pai, mãe, criador(a) e cuidador(a), sem distinguir de jeito nenhum. Pra falar de irmãos, quem fala toki pona precisa improvisar uma frase inteira (algo como "jan mama sama", "pessoa de mesmo pai/mãe"). Isso não é uma falha: é o próprio projeto da língua — ter poucas raízes e deixar o contexto (e a criatividade de quem fala) preencher o resto.',
      culture_tip:
        'O toki pona vive sobretudo on-line: a comunidade se reúne em grupos do Facebook, servidores de Discord e no Reddit, e Sonja Lang estimou, em 2007, pelo menos 100 falantes fluentes; estimativas de 2021 falam de 500 a 5.000 pessoas com algum domínio da língua. Já houve até encontros presenciais em cidades como Berlim, Viena e Seattle, e cursos informais de uma hora no MIT, durante a semana de atividades livres da escola (IAP).',
      grammar_why:
        'A partícula "e" marca o objeto direto — a coisa que recebe a ação do verbo. "mi moku" (eu como) já é uma frase completa sem objeto; só quando se diz O QUE se come entra o "e": "mi moku e kili" (eu como fruta). Esquecer o "e" antes do objeto é o erro mais comum de quem começa.',
      grammar_examples: [
        ['mi olin e mama mi.', 'Eu amo meus pais. (mama mi = "meus pais", sem posse marcada por outra palavra)'],
        ['mi moku e pan, taso mi wile ala e kili.', 'Eu como pão, mas eu não quero fruta.'],
      ],
      character_guide: [
        ['n', 'nasaliza a vogal antes, igual o português já faz em "tempo"', 'tenpo ("TEN-po", tempo)'],
        ['s', 'sempre surdo, como em "sapo" — nunca "z"', 'suli ("SU-li", grande)'],
      ],
    },
    lessons: [
      {
        id: 'tok-u2-l1',
        title: 'mama, olin, kulupu',
        kind: 'licao',
        words: ['mama', 'meli', 'mije', 'olin', 'kulupu', 'lon'],
        cloze: [
          { sentence: '___ mi li pona.', answer: 'mama', options: ['mama', 'meli', 'mije'], translation: 'Meu pai/minha mãe é bom(a).' },
          { sentence: 'mi ___ e mama mi.', answer: 'olin', options: ['olin', 'lon', 'kulupu'], translation: 'Eu amo meus pais.' },
          { sentence: 'mi ___ kulupu.', answer: 'lon', options: ['lon', 'olin', 'mama'], translation: 'Eu estou no grupo.' },
        ],
        voice: {
          bot: 'mama sina li pona anu seme?',
          botTranslation: 'Seus pais estão bem, ou não?',
          expected: ['mama mi li pona. mi olin e mama mi.', 'mama mi li pona', 'mi olin e mama mi'],
          hint: 'Responda com "mama mi li pona" (ou "ike") e diga que você os ama com "mi olin e…".',
        },
        communityPrompt: 'Fale da sua família em toki pona com "mama mi li…" e "mi olin e…".',
      },
      {
        id: 'tok-u2-l2',
        title: 'tomo, kili, pan',
        kind: 'licao',
        words: ['tomo', 'kili', 'pan', 'suwi', 'poki', 'jo'],
        cloze: [
          { sentence: '___ mi li suli.', answer: 'tomo', options: ['tomo', 'kili', 'pan'], translation: 'Minha casa é grande.' },
          { sentence: 'mi ___ e pan.', answer: 'jo', options: ['jo', 'poki', 'suwi'], translation: 'Eu tenho pão.' },
          { sentence: 'pan li lon ___.', answer: 'poki', options: ['poki', 'kili', 'tomo'], translation: 'O pão está na caixa.' },
        ],
        voice: {
          bot: 'tomo sina li lon ma seme?',
          botTranslation: 'Sua casa fica em que lugar?',
          expected: ['tomo mi li lon ma mi, li lili taso li pona.', 'tomo mi li lon ma mi', 'tomo mi li lili'],
          hint: 'Diga onde sua casa fica com "tomo mi li lon…" e como ela é com "li suli/lili/pona".',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: "tomo mi li…" (grande, pequena, boa) e o que tem dentro (pan, kili…).',
      },
      {
        id: 'tok-u2-l3',
        title: 'sona: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'mi wile lukin e tomo sina! o pana e nasin tawa tomo sina!',
          botTranslation: 'Eu quero ver sua casa! Me diz o caminho até sua casa!',
          expected: ['tomo mi li lon ma mi. mama mi li lon tomo.', 'tomo mi li lon', 'mama mi li lon tomo'],
          hint: 'Diga onde sua casa fica e quem mora nela, com "tomo mi li lon…" e "mama mi li lon tomo".',
        },
        communityPrompt: 'Escreva um parágrafo curto em toki pona sobre sua família e sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'tok-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'jan Petro o!',
    emoji: '📣',
    card: {
      id: 'tok-c3',
      title: 'Chamar alguém pelo nome: "jan Petro o"',
      emoji: '🙋',
      history:
        'O toki pona tem um jeito fixo de apresentar nomes próprios: a palavra "jan" (pessoa) antes do nome emprestado, como "jan Petro" ou "jan Ana" — a mesma prática já usada desde a A1.1 nas histórias deste curso. É também a base do vocativo: "jan Petro o" chama Petro antes de falar com ele.',
      culture_tip:
        'O toki pona tem uma escrita própria não-oficial, o "sitelen pona" (cada palavra com um desenho/símbolo só dela), criada pela própria Sonja Lang e publicada junto com o livro oficial de 2014. Em dezembro de 2021, ela liberou os desenhos originais em licença CC0 (domínio público), e a comunidade logo fez fontes de computador com eles — mas este curso ensina só a escrita latina.',
      grammar_why:
        'O vocativo chama alguém com "o" DEPOIS do nome, antes da frase principal: "jan Petro o, sina pona ala pona?" é "Petro, você está bem?".',
      grammar_examples: [
        ['jan Petro o, sina pona ala pona?', 'Petro, você está bem?'],
        ['jan Ana o, mi olin e sina.', 'Ana, eu te amo.'],
      ],
      character_guide: [['nomes próprios', 'sempre com maiúscula, mesmo dentro da frase', 'jan Petro (nunca "jan petro")']],
    },
    lessons: [
      {
        id: 'tok-u3-l1',
        title: 'jan … o',
        kind: 'licao',
        words: ['jan', 'toki', 'seme', 'sina', 'mi', 'nimi'],
        cloze: [
          { sentence: 'jan Ana ___, sina pona ala pona?', answer: 'o', options: ['o', 'e', 'la'], translation: 'Ana, você está bem?' },
          { sentence: 'jan Petro ___, mi wile toki.', answer: 'o', options: ['o', 'pi', 'la'], translation: 'Petro, eu quero falar.' },
          { sentence: 'jan pona ___ li lon tomo.', answer: 'mute', options: ['mute', 'pona', 'seme'], translation: 'Muitas pessoas boas estão na casa.' },
        ],
        voice: {
          bot: 'jan Ana o, sina lon seme?',
          botTranslation: 'Ana, onde você está?',
          expected: ['mi lon tomo.', 'mi lon', 'tomo'],
          hint: 'Responda com "mi lon…" e o lugar onde você está.',
        },
        communityPrompt: 'Chame um amigo pelo nome antes de falar com ele, em toki pona: "jan [nome] o, …".',
      },
      {
        id: 'tok-u3-l2',
        title: 'soweli utala, utala soweli',
        kind: 'licao',
        words: ['soweli', 'utala', 'jan', 'pona', 'suli', 'ike'],
        cloze: [
          { sentence: 'jan pi pona ___ li lon tomo.', answer: 'mute', options: ['mute', 'pona', 'seme'], translation: 'Uma pessoa muito boa está na casa.' },
          { sentence: 'mi jo e ___ utala.', answer: 'soweli', options: ['soweli', 'jan', 'pona'], translation: 'Eu tenho um animal de luta.' },
          { sentence: '___ soweli li ike.', answer: 'utala', options: ['utala', 'pona', 'mute'], translation: 'A guerra entre animais é má.' },
        ],
        voice: {
          bot: 'sina jo e soweli utala anu utala soweli?',
          botTranslation: 'Você tem um animal de luta ou uma guerra entre animais?',
          expected: ['mi jo e soweli utala.', 'mi jo e soweli utala', 'soweli utala'],
          hint: 'Escolha "soweli utala" (animal de luta) ou "utala soweli" (guerra entre animais), com cuidado na ordem.',
        },
        communityPrompt: 'Explique a diferença entre "jan pona mute" e "jan pi pona mute" pra um amigo, em toki pona ou em português.',
      },
      {
        id: 'tok-u3-l3',
        title: 'sona: chamados e modificadores',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'jan Ana o, jan pi pona mute li lon ma mi. sina wile kama?',
          botTranslation: 'Ana, uma pessoa muito boa está no meu país. Você quer vir?',
          expected: ['jan pona a! mi wile kama.', 'mi wile kama', 'jan pona'],
          hint: 'Responda com "mi wile kama" (eu quero vir) e chame a pessoa pelo nome, se quiser.',
        },
        communityPrompt: 'Escreva um parágrafo curto em toki pona chamando alguém pelo nome (jan … o) e descrevendo uma pessoa ou animal com modificadores em cadeia.',
      },
    ],
  },
  {
    id: 'tok-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'poki sina li suli',
    emoji: '⚖️',
    card: {
      id: 'tok-c4',
      title: 'Comparar sem palavra de comparação',
      emoji: '📏',
      history:
        'O toki pona, de propósito, não tem uma palavra pronta pra "mais...que" ou "o mais": a comunidade documenta formas de comparar reaproveitando partículas já conhecidas (la, tawa, nanpa, sama) em vez de criar uma raiz nova só pra isso — a mesma filosofia minimalista de toda a língua.',
      culture_tip:
        'Por não ter grau comparativo nem superlativo "de fábrica", o toki pona obriga quem fala a pensar em referências concretas pra comparar: "esta bola é grande" só faz sentido comparada a alguma coisa (minha caixa, sua mão, outra bola), nunca em termos absolutos.',
      grammar_why:
        'Colocando uma referência antes de "la", o resto da frase é entendido relativo a ela: "poki mi la sike sina li suli" (perto da minha caixa, sua bola é grande). "nanpa wan" depois de um adjetivo marca o superlativo.',
      grammar_examples: [
        ['poki mi la sike sina li suli.', 'Perto da minha caixa, sua bola é grande.'],
        ['poki sina li suli nanpa wan.', 'Sua caixa é a maior.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'tok-u4-l1',
        title: 'X la Y li suli',
        kind: 'licao',
        words: ['poki', 'sike', 'suli', 'tawa', 'tomo', 'mi'],
        cloze: [
          { sentence: 'poki mi ___ sike sina li suli.', answer: 'la', options: ['la', 'pi', 'e'], translation: 'Perto da minha caixa, sua bola é grande.' },
          { sentence: 'sike sina li suli ___ poki mi.', answer: 'tawa', options: ['tawa', 'lon', 'sama'], translation: 'Sua bola é grande do ponto de vista da minha caixa.' },
          { sentence: 'poki mi li ___.', answer: 'lili', options: ['lili', 'suli', 'pona'], translation: 'Minha caixa é pequena.' },
        ],
        voice: {
          bot: 'tomo mi la tomo sina li suli anu seme?',
          botTranslation: 'Perto da minha casa, sua casa é grande, ou não?',
          expected: ['tomo sina li suli.', 'tomo sina li suli', 'li lili'],
          hint: 'Responda comparando: "tomo sina li suli" (é grande) ou "li lili" (é pequena).',
        },
        communityPrompt: 'Compare duas coisas em toki pona usando "X la Y li suli/lili" ou "Y li suli tawa X".',
      },
      {
        id: 'tok-u4-l2',
        title: 'nanpa wan, sama',
        kind: 'licao',
        words: ['nanpa', 'wan', 'ante', 'wawa', 'suli', 'poki'],
        cloze: [
          { sentence: 'poki sina li suli ___ wan.', answer: 'nanpa', options: ['nanpa', 'sama', 'ante'], translation: 'Sua caixa é a maior.' },
          { sentence: 'wawa mi li ___ wawa sina.', answer: 'sama', options: ['sama', 'nanpa', 'ante'], translation: 'Minha força é igual à sua.' },
          { sentence: 'poki sina li suli. poki ___ ale li lili.', answer: 'ante', options: ['ante', 'sama', 'nanpa'], translation: 'Sua caixa é grande. As outras caixas são pequenas.' },
        ],
        voice: {
          bot: 'sina wawa sama mi anu seme?',
          botTranslation: 'Você é tão forte quanto eu, ou não?',
          expected: ['mi wawa sama sina.', 'wawa sama', 'mi sama sina'],
          hint: 'Responda com "mi wawa sama sina" (eu sou tão forte quanto você).',
        },
        communityPrompt: 'Diga que algo é "o maior" (nanpa wan) ou "igual" (sama) a outra coisa, em toki pona.',
      },
      {
        id: 'tok-u4-l3',
        title: 'sona: comparações',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'poki mi li suli nanpa wan lon tomo mi. sina jo e poki suli anu seme?',
          botTranslation: 'Minha caixa é a maior na minha casa. Você tem uma caixa grande, ou não?',
          expected: ['mi jo e poki suli. poki mi li sama poki sina.', 'mi jo e poki suli', 'sama'],
          hint: 'Responda sobre sua caixa e compare com "sama" se forem parecidas.',
        },
        communityPrompt: 'Escreva um parágrafo curto em toki pona comparando dois objetos ou pessoas, usando pelo menos uma construção desta unidade (la/tawa/nanpa wan/sama).',
      },
    ],
  },
];
