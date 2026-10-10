import type { LanguageVariant } from '../types';

/**
 * Os dialetos nacionais do persa (10/10/2026): o do Irã (fārsi), padrão do curso, e o do Afeganistão
 * (dari), língua oficial do país ao lado do pachto. Fontes: Wikipédia em português, inglês e persa
 * («Dari», «Língua persa», «Persian phonology», «Kabuli Persian», consultadas em 10/10/2026). A
 * gramática e a escrita são as mesmas; mudam a pronúncia (as vogais “majhul” ē e ō, o “w”) e palavras
 * do dia a dia (bādrang, kachālū, motar, pohantun, shafākhāna). O tadjique (Tadjiquistão, em cirílico)
 * é dúvida para o dono (docs/duvidas-variedades.md) e por enquanto é sotaque.
 */
export const VARIANTS_FA: LanguageVariant[] = [
  {
    code: 'fa-IR',
    country: 'IRN',
    kind: 'dialeto',
    speechLocale: 'fa-IR',
    name: 'Persa do Irã (fārsi)',
    flag: '🇮🇷',
    summary: 'O padrão do curso: o persa do Irã, com a pronúncia de Teerã como referência, o da escola, da TV e dos livros.',
  },
  {
    code: 'fa-AF',
    country: 'AFG',
    kind: 'dialeto',
    speechLocale: 'fa-IR',
    name: 'Persa do Afeganistão (dari)',
    flag: '🇦🇫',
    summary:
      'O persa do Afeganistão, o dari, língua oficial do país ao lado do pachto e a língua comum entre os povos afegãos. A escrita e a gramática são as do Irã; mudam as vogais, que guardam sons do persa clássico, e palavras do dia a dia: “motar” (carro), “kachālū” (batata), “tashakor” (obrigado).',
    card: {
      id: 'fa-af-c1',
      title: 'Tashakor, motar, pohantun',
      emoji: '🇦🇫',
      history:
        'O persa é falado no Afeganistão há mais de mil anos: foi a língua da corte dos samânidas e dos gaznévidas, e Rumi, segundo a tradição, nasceu em Balkh, hoje no Afeganistão. A Constituição afegã de 1964 deu à língua o nome oficial de “dari”, que, na explicação mais aceita, vem de “darbār”, a corte. Hoje é a língua materna de cerca de metade dos afegãos (tadjiques, hazaras e outros) e a língua comum entre os povos do país. O dari de Cabul é a variedade de prestígio.',
      culture_tip:
        'No Afeganistão, o chá verde, servido com doces e frutas secas, acompanha toda visita. O Nowruz, o ano-novo persa, em 21 de março, é festa grande também lá, e o buzkashi, um jogo a cavalo em que os cavaleiros disputam uma carcaça de cabra, é o esporte nacional. Para agradecer, a palavra de todo dia é “تشکر” (tashakor), mais que o “ممنون” do Irã.',
      grammar_why:
        'A gramática é a do persa do Irã; mudam a pronúncia e as palavras: (1) as vogais “majhul”: o dari distingue “shēr” (leão) de “shir” (leite), que no Irã soam iguais; (2) o “و” soa “w”, e não “v”: “wa” (e); (3) palavras próprias, muitas do pachto, do inglês ou do híndi: “موتر” (motar, carro), “کچالو” (kachālū, batata), “بادرنگ” (bādrang, pepino), “شفاخانه” (shafākhāna, hospital), “پوهنتون” (pohantun, universidade); (4) “بلی” (balē) para “sim”, onde o Irã escreve “بله”.',
      grammar_examples: [
        ['بلی، تشکر!', 'Sim, obrigado! (no Irã: بله، ممنون!)'],
        ['موتر من آبی است.', 'O meu carro é azul. (no Irã: ماشین من آبی است.)'],
        ['یک کیلو کچالو می‌خواهم.', 'Eu quero um quilo de batata. (no Irã: سیب‌زمینی)'],
        ['پوهنتونِ کابل بزرگ است.', 'A Universidade de Cabul é grande. (no Irã: دانشگاه)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'As vogais “majhul” do persa clássico continuam vivas: “ē” e “ō” separados de “i” e “u” (“shēr”, leão × “shir”, leite).',
      'O “و” soa “w”, como no persa antigo: “wa” (e), onde o Irã diz “va”.',
      'As vogais curtas “e” e “o” do Irã soam “i” e “u”: “dil” (coração), onde Teerã diz “del”.',
      'O “ق” (q) e o “غ” (gh) são dois sons diferentes, que no Irã se juntaram num só.',
    ],
    vocab: [
      ['ماشین', 'موتر', 'carro', 'motar, do inglês “motor”'],
      ['سیب‌زمینی', 'کچالو', 'batata', 'kachālū'],
      ['خیار', 'بادرنگ', 'pepino', 'bādrang'],
      ['بیمارستان', 'شفاخانه', 'hospital', 'shafākhāna'],
      ['دانشگاه', 'پوهنتون', 'universidade', 'pohantun, do pachto'],
      ['دستشویی', 'تشناب', 'banheiro', 'tashnāb'],
      ['ممنون، مرسی', 'تشکر', 'obrigado', 'tashakor'],
      ['بله', 'بلی', 'sim', 'balē'],
      ['ریال', 'افغانی', 'a moeda', 'o afegane, a moeda do Afeganistão'],
    ],
    stories: [
      {
        id: 'fa-h5',
        variant: 'fa-AF',
        level: 'A2.1',
        cefr: 'A2',
        title: 'در بازارِ کابل',
        emoji: '🥒',
        summary: 'Num bazar de Cabul, Linu compra batatas e pepinos e aprende as palavras do dari.',
        cultural_context:
          'Nos bazares de Cabul se paga em afeganes (افغانی), a moeda do país. No dari, a batata é “کچالو” (kachālū) e o pepino é “بادرنگ” (bādrang); para agradecer, diz-se “تشکر” (tashakor).',
        start: 'inicio',
        nodes: {
          inicio: {
            text: 'سلام! خوش آمدید. چه می‌خواهید؟',
            translation: 'Oi! Bem-vindo. O que você quer (formal)?',
            emoji: '🧑‍🌾',
            choices: [
              { text: 'سلام! یک کیلو کچالو و دو بادرنگ می‌خواهم.', translation: 'Oi! Eu quero um quilo de batata e dois pepinos.', next: 'preco' },
              { text: 'من یک موتر دارم.', translation: 'Eu tenho um carro.', wrong: 'O vendedor perguntou o que você quer comprar. Peça as batatas (کچالو) e os pepinos (بادرنگ).' },
            ],
          },
          preco: {
            text: 'بلی، این کچالو خیلی خوب است. پنجاه افغانی می‌شود.',
            translation: 'Sim, esta batata é muito boa. Fica cinquenta afeganes.',
            emoji: '🥔',
            choices: [
              { text: 'تشکر! بفرمایید، پنجاه افغانی.', translation: 'Obrigado! Aqui está, cinquenta afeganes.', next: 'final' },
              { text: 'پوهنتون کجاست؟', translation: 'Onde fica a universidade?', wrong: 'O vendedor disse o preço: pague primeiro e agradeça com “تشکر”.' },
            ],
          },
          final: {
            text: 'تشکر از شما! خدا حافظ.',
            translation: 'Obrigado a você! Tchau.',
            emoji: '🎉',
            ending: { tone: 'bom', title: 'خرید خوب!', message: 'Você fez as compras no bazar de Cabul usando as palavras do dari.' },
          },
        },
        glossary: [
          ['کچالو', 'batata (no Irã: سیب‌زمینی)'],
          ['بادرنگ', 'pepino (no Irã: خیار)'],
          ['افغانی', 'afegane, a moeda'],
          ['تشکر', 'obrigado'],
          ['بلی', 'sim (no Irã: بله)'],
        ],
      },
      {
        id: 'fa-h6',
        variant: 'fa-AF',
        level: 'A2.2',
        cefr: 'A2',
        title: 'با موتر به پوهنتون',
        emoji: '🚗',
        summary: 'Zahra oferece carona até a Universidade de Cabul e pergunta o que Linu estuda.',
        cultural_context:
          'A Universidade de Cabul, fundada em 1931, é a mais antiga do Afeganistão. No dari, universidade é “پوهنتون” (pohantun), palavra que vem do pachto, e carro é “موتر” (motar), do inglês “motor”.',
        start: 'inicio',
        nodes: {
          inicio: {
            text: 'سلام! من به پوهنتونِ کابل می‌روم. با موترِ من می‌آیی؟',
            translation: 'Oi! Eu vou para a Universidade de Cabul. Você vem no meu carro?',
            emoji: '👩',
            choices: [
              { text: 'بلی، تشکر! من هم به پوهنتون می‌روم.', translation: 'Sim, obrigado! Eu também vou para a universidade.', next: 'rua' },
              { text: 'نه، من کچالو نمی‌خورم.', translation: 'Não, eu não como batata.', wrong: 'Zahra ofereceu uma carona de carro (موتر). Responda se você vai com ela.' },
            ],
          },
          rua: {
            text: 'خوب! پوهنتون نزدیکِ اینجاست. تو چه می‌خوانی؟',
            translation: 'Bom! A universidade é perto daqui. O que você estuda?',
            emoji: '🏫',
            choices: [
              { text: 'من زبانِ دری می‌خوانم.', translation: 'Eu estudo a língua dari.', next: 'final' },
              { text: 'بادرنگ سبز است.', translation: 'O pepino é verde.', wrong: 'Zahra perguntou o que você estuda. Use “من … می‌خوانم”.' },
            ],
          },
          final: {
            text: 'چه خوب! دری زبانِ مادریِ من است.',
            translation: 'Que bom! O dari é a minha língua materna.',
            emoji: '🎉',
            ending: { tone: 'bom', title: 'رفیقِ نو!', message: 'Você chegou à Universidade de Cabul com uma amiga nova, que fala dari desde pequena.' },
          },
        },
        glossary: [
          ['پوهنتون', 'universidade (no Irã: دانشگاه)'],
          ['موتر', 'carro (no Irã: ماشین)'],
          ['می‌خوانم', 'eu estudo, eu leio'],
          ['زبانِ مادری', 'língua materna'],
        ],
      },
    ],
  },
];
