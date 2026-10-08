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
        'A comunidade do toki pona separa o vocabulário em camadas: "nimi pu" são as ~120 palavras do livro oficial de 2014 (contando 3 sinônimos, o total listado costuma dar 123) — é o núcleo que este curso ensina quase por completo. Em 2021, Lang publicou um dicionário, o "Toki Pona Dictionary" (apelidado "ku"), com mais palavras de uso comum da comunidade ("nimi ku suli") e outras bem raras ("nimi ku lili"); juntando pu e as ku suli mais aceitas, dá around 137 palavras — por isso fontes diferentes falam de "120 a 137 palavras" pro toki pona. Quase todo o resto deste curso usa só o núcleo pu.',
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
];
