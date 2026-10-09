import type { UnitSeed } from '../types';

/**
 * Trilha do ainu: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas reconferidas em
 * 08/10/2026).
 */
export const UNITS_AIN: UnitSeed[] = [
  {
    id: 'ain-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Irankarapte! Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'ain-c1',
      title: 'Língua isolada, não parente do japonês',
      emoji: '🇯🇵',
      history:
        'O ainu é falado no norte do Japão, sobretudo em Hokkaido (e, historicamente, também em Sacalina e nas ilhas Curilas, hoje território russo). É uma língua isolada: apesar de séculos de contato e de empréstimos nos dois sentidos com o japonês, não se provou nenhum parentesco entre as duas. Está criticamente ameaçada — o Endangered Languages Project relatava em 2025 só duas falantes nativas conhecidas, embora existam hoje semifalantes e um número crescente de “neofalantes” (quem aprende a língua como segunda língua, sem transmissão entre gerações, em cursos de revitalização).',
      culture_tip:
        'A saudação “irankarapte” não é uma palavra qualquer: o Wikcionário em inglês mostra que ela nasce de “i-” (prefixo) + “ram” (peito, coração) + “karap” (tocar) + “-te” (causativo) — algo como “deixar tocar o coração”. Pode ser usada em qualquer hora do dia, diferente do japonês, que tem saudações diferentes para manhã/tarde/noite.',
      grammar_why:
        'O ainu é SOV (sujeito-objeto-verbo), como o japonês, e o verbo “ser/estar/tornar-se” (“ne”) sempre vem no fim da frase: “Kuani, Linu ne” é, ao pé da letra, “Eu, Linu [sou]” — “eu sou o Linu”. E, em vez de marcar a pessoa só no pronome, o ainu também marca no próprio verbo, com um prefixo: “ku-itak” é “eu falei” (ku- = eu).',
      grammar_examples: [
        ['Irankarapte, e-pirka?', 'Oi, você está bem?'],
        ['Kuani, Linu ne.', 'Eu sou o Linu.'],
        ['Somo ku-nukar.', 'Eu não vi.'],
        ['Seta pirka.', 'O cachorro é bom, bonito.'],
      ],
      character_guide: [
        ['ア, イ, ヌ (a, i, nu)', 'letras comuns do katakana, as mesmas do japonês', 'アイヌ (aynu) — “pessoa, povo aynu”'],
        ['ㇰ, ㇱ, ㇷ゚ (k, s, p pequenos)', 'katakana “estendido”, só do ainu: a letra pequena marca uma consoante no fim da sílaba, sem vogal depois', 'イランカラㇷ゚テ (irankarapte) — “oi”'],
        ['ㇼ (ru pequeno = r final)', 'outra letra estendida, marca o “r” no fim da sílaba', 'ピㇼカ (pirka) — “bom, bonito”'],
        ['ッ (tsu pequeno)', 'consoante dobrada/glotal, o mesmo sinal que o japonês já usa', 'ワッカ (wakka) — “água”'],
      ],
    },
    lessons: [
      {
        id: 'ain-u1-l1',
        title: 'Irankarapte, iyairaykere',
        kind: 'licao',
        words: ['irankarapte', 'iyairaykere', "hioy'oy", 'somo', 'pirka', 'ne'],
        cloze: [
          { sentence: '___, e-pirka?', answer: 'Irankarapte', options: ['Irankarapte', 'Iyairaykere', "Hioy'oy"], translation: 'Oi, você está bem?' },
          { sentence: '___ ku-nukar.', answer: 'Somo', options: ['Somo', 'Pirka', 'Ne'], translation: 'Eu não vi.' },
          { sentence: 'Seta ___.', answer: 'pirka', options: ['pirka', 'somo', 'ne'], translation: 'O cachorro é bom, bonito.' },
        ],
        voice: {
          bot: 'Irankarapte! E-pirka?',
          botTranslation: 'Oi! Você está bem?',
          expected: ['Irankarapte! Pirka!', 'Pirka!', 'Irankarapte'],
          hint: 'Devolva a saudação “Irankarapte!” e diga “Pirka!” (bem, bom).',
        },
        communityPrompt: "Escreva uma saudação (Irankarapte), um agradecimento (Iyairaykere ou Hioy'oy) e diga que algo é bom (Pirka).",
      },
      {
        id: 'ain-u1-l2',
        title: 'Kuani, eani, sinuma',
        kind: 'licao',
        words: ['kuani', 'eani', 'sinuma', 'aynu', 'ek', 'itak'],
        cloze: [
          { sentence: '___, Linu ne.', answer: 'Kuani', options: ['Kuani', 'Eani', 'Sinuma'], translation: 'Eu sou o Linu.' },
          { sentence: 'Aynu ___.', answer: 'ek', options: ['ek', 'itak', 'ne'], translation: 'Uma pessoa chegou.' },
          { sentence: 'Ku-___.', answer: 'itak', options: ['itak', 'ek', 'nukar'], translation: 'Eu falei.' },
        ],
        voice: {
          bot: 'Eani, Linu ne?',
          botTranslation: 'Você é o Linu?',
          expected: ['Somo. Kuani, Linu ne.', 'Kuani, Linu ne.', 'Somo'],
          hint: 'Corrija com “Somo” (não) e diga quem você é com “Kuani, … ne”.',
        },
        communityPrompt: 'Apresente-se com “Kuani, … ne” e pergunte o nome de alguém com “Eani, … ne?”.',
      },
      {
        id: 'ain-u1-l3',
        title: 'Prova: Irankarapte, kuani',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Irankarapte! Eani, Linu ne?',
          botTranslation: 'Oi! Você é o Linu?',
          expected: ['Irankarapte! Kuani, Linu ne.', 'Kuani, Linu ne.'],
          hint: 'Devolva a saudação e diga quem você é.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Irankarapte), nome (Kuani, … ne) e um agradecimento (Iyairaykere).',
      },
    ],
  },
  {
    id: 'ain-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cise, wakka, kamuy',
    emoji: '🏠',
    card: {
      id: 'ain-c2',
      title: 'Kamuy, aynu, mosir: a cosmologia por trás das palavras',
      emoji: '🐻',
      history:
        'Três palavras do vocabulário desta unidade contam a cosmologia tradicional aynu: “aynu” é a pessoa, o ser humano; “kamuy” é um deus ou espírito — e, por extensão, qualquer bicho considerado importante no dia a dia, como o urso, o mocho ou a foca; e “mosir” é a terra, o mundo. O Wikcionário em inglês registra que o urso (kimunkamuy, “deus da montanha”) era especialmente reverenciado, citando o ritual do iomante, em que um urso era sacrificado numa cerimônia — a mais conhecida das tradições aynu.',
      culture_tip:
        'Os números do ainu só têm raiz própria de 1 a 5 (sine, tu, re, ine, asikne) — do 6 ao 10, todos derivam dessas cinco raízes (um artigo acadêmico citado pelo Wikcionário nota isso explicitamente). É parecido com o que o português faz a partir do 11 (“onze” ainda é raiz própria, mas “dezesseis” já é “dez e seis”), só que no ainu a composição começa mais cedo.',
      grammar_why:
        'O verbo marca a pessoa com um prefixo, não um pronome separado: “ku-itak” (eu falei), “e-itak” (você falou), mas “itak” sozinho, sem prefixo nenhum, já é “ele/ela falou” — a 3ª pessoa não leva marca. E “pirka” (bom, bonito) é um verbo de estado: “wakka pirka” já é “a água é boa”, sem precisar do verbo “ne” (ser).',
      grammar_examples: [
        ['Ku-itak.', 'Eu falei.'],
        ['E-itak.', 'Você falou.'],
        ['Itak.', 'Ele/ela falou.'],
        ['Kamuy umma rayke.', 'Um urso matou um cavalo.'],
      ],
      character_guide: [
        ['シネ, トゥ, レ (sine, tu, re)', 'os números 1, 2 e 3 em katakana', 'シネ (sine) — “um”'],
        ['アシㇰネ (asikne)', '“cinco”: note o ㇰ pequeno, marcando o “k” sem vogal depois', 'アシㇰネ (asikne) — “cinco”'],
        ['ワン (wan)', '“dez”: a mesma sílaba “wa” do japonês, mais ン (n final)', 'ワン (wan) — “dez”'],
      ],
    },
    lessons: [
      {
        id: 'ain-u2-l1',
        title: 'Sine, tu, re…',
        kind: 'licao',
        words: ['sine', 'tu', 're', 'ine', 'asikne', 'iwan'],
        cloze: [
          { sentence: '___, tu, re.', answer: 'Sine', options: ['Sine', 'Tu', 'Wan'], translation: 'Um, dois, três.' },
          { sentence: 'Ine, ___, iwan.', answer: 'asikne', options: ['asikne', 'tu', 'wan'], translation: 'Quatro, cinco, seis.' },
          { sentence: 'Sine, tu, ___.', answer: 're', options: ['re', 'iwan', 'wan'], translation: 'Um, dois, três.' },
        ],
        voice: {
          bot: 'Sine, tu, re, ine...?',
          botTranslation: 'Um, dois, três, quatro...?',
          expected: ['Asikne, iwan.', 'Asikne', 'Iwan'],
          hint: 'Continue a contagem: depois de ine vem asikne, depois iwan.',
        },
        communityPrompt: 'Escreva os números de sine (1) a iwan (6) em ainu.',
      },
      {
        id: 'ain-u2-l2',
        title: 'Cise, wakka, kam',
        kind: 'licao',
        words: ['cise', 'wakka', 'kam', 'e', 'seta', 'kamuy'],
        cloze: [
          { sentence: 'Kam k-___.', answer: 'e', options: ['e', 'ne', 'ek'], translation: 'Eu como carne.' },
          { sentence: '___ pirka.', answer: 'Wakka', options: ['Wakka', 'Kam', 'Cise'], translation: 'A água é boa.' },
          { sentence: 'Seta ___.', answer: 'ne', options: ['ne', 'pirka', 'somo'], translation: 'É um cachorro.' },
        ],
        voice: {
          bot: 'Cise pirka?',
          botTranslation: 'A casa é boa?',
          expected: ['Pirka! Kam k-e.', 'Pirka'],
          hint: 'Responda “Pirka!” e fale sobre a comida com “Kam k-e” (eu como carne).',
        },
        communityPrompt: 'Descreva sua casa (cise) e o que você come (Kam k-e) em ainu.',
      },
      {
        id: 'ain-u2-l3',
        title: 'Prova: casa, comida e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kamuy ne?',
          botTranslation: 'É um deus, um espírito?',
          expected: ['Somo. Seta ne.', 'Somo', 'Seta ne.'],
          hint: 'Corrija com “Somo” e diga o que é de verdade.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa, a sua comida e um bicho, usando “ne” e “pirka”.',
      },
    ],
  },
];
