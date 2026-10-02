import type { UnitSeed } from '../types';

/**
 * Trilha do navajo: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). As frases em navajo usadas aqui são só as saudações e fórmulas
 * atestadas em omniglot.com/language/phrases/navajo.php, mais listas de palavras isoladas
 * (numerais, bichos, natureza) confirmadas em vocabulario.ts — não há, nesta pesquisa, fontes com
 * frases completas de uso cotidiano que combinem substantivo e verbo conjugado fora dessas
 * fórmulas fixas, e o molde verbal navajo é complexo demais (ver gramatica.ts) para arriscar
 * inventar uma conjugação que nenhuma fonte confirmou.
 */
export const UNITS_NV: UnitSeed[] = [
  {
    id: 'nv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yáʼátʼééh! Saudações e o povo diné',
    emoji: '👋',
    card: {
      id: 'nv-c1',
      title: 'A língua indígena com mais falantes ao norte do México',
      emoji: '🏜️',
      history:
        'O navajo (Diné bizaad, “a língua do povo”) é falado por cerca de 170 mil pessoas na Nação Navajo, espalhada por partes do Arizona, do Novo México e de Utah — a língua indígena com mais falantes ao norte do México, segundo a Wikipédia em inglês. Pertence à família na-dené, no ramo atabascano, dentro do grupo atabascano meridional (também chamado apachiano), o mesmo do apache ocidental, língua com a qual compartilha mais de 92% do vocabulário. Durante a Segunda Guerra Mundial, falantes navajo serviram como “code talkers”: usaram a complexidade da própria língua, sem parentesco com nenhuma língua europeia, para criar um código que as forças do Eixo nunca conseguiram decifrar — um fato histórico bem documentado, com memorial dedicado em Window Rock, capital da Nação Navajo.',
      culture_tip:
        'O povo navajo chama a si mesmo de Diné (“o povo”) e à própria língua de Diné bizaad; o nome oficial da língua usado pelo governo da Nação Navajo também aparece como “Naabeehó bizaad”. A palavra “diné” vem do proto-atabascano *dəneˑ e tem parentes em outras línguas atabascanas, como “dëné” no chipewyan e “done” no dogrib — povos que, como os navajo, também se autodesignam simplesmente “o povo”.',
      grammar_why:
        'O navajo escreve alguns sons que não existem em português: o apóstrofo (ʼ) marca uma letra própria (uma pequena parada no ar ou uma consoante “ejetiva”), o “ł” é uma consoante lateral soprada, e o acento agudo marca o tom alto da sílaba — sem ele, a mesma sequência de letras pode ter um tom diferente e, por isso, um significado diferente. Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Yáʼátʼééh!', '“Está bem!” — a saudação mais comum do navajo; o Wiktionary registra que a mesma palavra também pode servir como despedida.'],
        ['Diné bizaad.', '“A língua do povo [diné].” — o nome que os próprios navajo dão à sua própria língua.'],
        ['Shí éí … yinishyé.', '“Eu, … me chamo.” — fórmula navajo para se apresentar (omniglot.com).'],
      ],
      character_guide: [
        ['ʼ', 'letra própria do navajo (oclusiva glotal ou consoante “ejetiva”), não é uma aspa', 'Yáʼátʼééh (“oi”)'],
        ['ł', 'consoante lateral surda, sem equivalente exato em português (como um “lh” soprado, sem vibrar a garganta)', 'Łééchąąʼí (“cachorro”)'],
        ['acento agudo (´)', 'marca o tom alto da sílaba', 'Yáʼátʼééh'],
        ['ą, ę, į, ǫ', 'vogais nasalizadas (o gancho embaixo da vogal marca a nasalização)', 'Dį́į́ʼ (“quatro”)'],
      ],
    },
    lessons: [
      {
        id: 'nv-u1-l1',
        title: 'Yáʼátʼééh! Ahéheeʼ!',
        kind: 'licao',
        words: ['Yáʼátʼééh', 'Hágoóneeʼ', 'Ahéheeʼ', 'Aooʼ', 'Dooda', 'Diné'],
        cloze: [
          { sentence: '“___!” — “Yáʼátʼééh!”', answer: 'Yáʼátʼééh', options: ['Yáʼátʼééh', 'Hágoóneeʼ', 'Dooda'], translation: '“Oi!” — “Oi!” — a mesma palavra serve para cumprimentar e para responder ao cumprimento.' },
          { sentence: 'Ahéheeʼ! ___!', answer: 'Hágoóneeʼ', options: ['Hágoóneeʼ', 'Aooʼ', 'Dooda'], translation: 'Obrigado(a)! Até logo!' },
          { sentence: '___ bizaad.', answer: 'Diné', options: ['Diné', 'Aooʼ', 'Dooda'], translation: '“A língua do povo [diné]” — o nome que os navajo dão à própria língua.' },
        ],
        voice: {
          bot: 'Yáʼátʼééh!',
          botTranslation: 'Oi!',
          expected: ['Yáʼátʼééh!', 'yáʼátʼééh'],
          hint: 'Responda com “Yáʼátʼééh!” — a mesma palavra serve para cumprimentar e para responder ao cumprimento.',
        },
        communityPrompt: 'Escreva a saudação e o agradecimento em navajo: “Yáʼátʼééh” e “Ahéheeʼ”.',
      },
      {
        id: 'nv-u1-l2',
        title: 'Shí, ní, nihí: as pessoas',
        kind: 'licao',
        words: ['Shí', 'Ní', 'Bí', 'Nihí', 'Asdzání', 'Hastiin'],
        cloze: [
          { sentence: 'Haash yinilyé? — “___ éí … yinishyé.”', answer: 'Shí', options: ['Shí', 'Ní', 'Bí'], translation: '“Qual é o seu nome?” — “Eu, … me chamo.”' },
          { sentence: '“___”: mulher.', answer: 'Asdzání', options: ['Asdzání', 'Hastiin', 'Bí'], translation: '“Asdzání”: mulher.' },
          { sentence: '“___”: homem (adulto).', answer: 'Hastiin', options: ['Hastiin', 'Asdzání', 'Ní'], translation: '“Hastiin”: homem (adulto).' },
        ],
        voice: {
          bot: 'Haash yinilyé?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Shí éí … yinishyé.', 'shí éí … yinishyé'],
          hint: 'Use a fórmula navajo para se apresentar: “Shí éí … yinishyé” (“eu, … me chamo”).',
        },
        communityPrompt: 'Escreva os pronomes “shí” (eu), “ní” (você) e “nihí” (nós) em navajo.',
      },
      {
        id: 'nv-u1-l3',
        title: 'Prova: saudações e pessoas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Yáʼátʼééh! Haash yinilyé?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Shí éí … yinishyé.', 'shí éí … yinishyé'],
          hint: 'Combine a saudação com a apresentação: “Yáʼátʼééh! Shí éí … yinishyé.”',
        },
        communityPrompt: 'Escreva uma pequena apresentação em navajo: cumprimente com “Yáʼátʼééh”, diga seu nome com a fórmula “Shí éí … yinishyé” e agradeça com “Ahéheeʼ”.',
      },
    ],
  },
  {
    id: 'nv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Números, bichos e o céu',
    emoji: '🌙',
    card: {
      id: 'nv-c2',
      title: 'Tom alto, tom baixo: a mesma palavra, dois sentidos',
      emoji: '🎵',
      history:
        'O navajo é uma língua tonal: a Wikipédia em inglês registra que marcas de tom distinguem palavras de tom alto e de tom baixo, e o próprio Wiktionary mostra o caso clássico de “azee’” (remédio, tom baixo) e “azéé’” (boca, tom alto) — a segunda vem da primeira, já que a maioria dos remédios tradicionais era tomada pela boca. Prestar atenção à melodia, não só às letras, é essencial para não trocar uma palavra por outra.',
      culture_tip:
        'Monument Valley (Tsé Biiʼ Ndzisgaii, “vale das rochas”) e Window Rock (Tségháhoodzání, “rocha perfurada”, a capital da Nação Navajo) são dois lugares reais dentro do território navajo, no Arizona e em Utah — não cenários de ficção, mas território vivido pelo povo diné há gerações.',
      grammar_why:
        'Em navajo, palavras que descrevem cor ou qualidade (como “é vermelho” ou “é grande”) não são adjetivos separados como em português: são verbos. Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Łééchąąʼí, łį́į́ʼ, mósí.', '“Cachorro, cavalo, gato.” — três bichos do dia a dia na Nação Navajo.'],
        ['Jóhonaaʼéí, ooljééʼ, sǫʼ.', '“Sol, lua, estrela.” — três palavras do céu.'],
        ['Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ, ashdlaʼ.', '“Um, dois, três, quatro, cinco.”'],
      ],
      character_guide: [
        ['acento agudo (´)', 'marca o tom alto', 'Sǫʼ (“estrela”) × azee’ (“remédio”, tom baixo) × azéé’ (“boca”, tom alto)'],
        ['vogal dobrada (aa, ii, oo…)', 'vogal longa', 'Łóóʼ (“peixe”)'],
        ['ʼ', 'oclusiva glotal/ejetiva, letra própria do navajo', 'Łį́į́ʼ (“cavalo”)'],
      ],
    },
    lessons: [
      {
        id: 'nv-u2-l1',
        title: 'Contando até cinco',
        kind: 'licao',
        words: ['Tʼááłáʼí', 'Naaki', 'Tááʼ', 'Dį́į́ʼ', 'Ashdlaʼ', 'Tó'],
        cloze: [
          { sentence: 'Tʼááłáʼí, naaki, ___.', answer: 'Tááʼ', options: ['Tááʼ', 'Dį́į́ʼ', 'Ashdlaʼ'], translation: 'Um, dois, três.' },
          { sentence: '___, ashdlaʼ.', answer: 'Dį́į́ʼ', options: ['Dį́į́ʼ', 'Tááʼ', 'Naaki'], translation: 'Quatro, cinco.' },
          { sentence: '“___”: água.', answer: 'Tó', options: ['Tó', 'Kǫʼ', 'Sǫʼ'], translation: '“Tó”: água.' },
        ],
        voice: {
          bot: 'Tʼááłáʼí, naaki, tááʼ…',
          botTranslation: 'Um, dois, três…',
          expected: ['Dį́į́ʼ', 'dį́į́ʼ'],
          hint: 'Complete a contagem: depois de “tááʼ” (três) vem “dį́į́ʼ” (quatro).',
        },
        communityPrompt: 'Conte de um a cinco em navajo: tʼááłáʼí, naaki, tááʼ, dį́į́ʼ, ashdlaʼ.',
      },
      {
        id: 'nv-u2-l2',
        title: 'Bichos e o céu',
        kind: 'licao',
        words: ['Łééchąąʼí', 'Łį́į́ʼ', 'Mósí', 'Jóhonaaʼéí', 'Ooljééʼ', 'Sǫʼ'],
        cloze: [
          { sentence: '“___”: cachorro.', answer: 'Łééchąąʼí', options: ['Łééchąąʼí', 'Łį́į́ʼ', 'Mósí'], translation: '“Łééchąąʼí”: cachorro.' },
          { sentence: '“___”: cavalo (antes, “bicho de estimação”).', answer: 'Łį́į́ʼ', options: ['Łį́į́ʼ', 'Mósí', 'Łééchąąʼí'], translation: '“Łį́į́ʼ”: cavalo.' },
          { sentence: 'Jóhonaaʼéí, ___, sǫʼ.', answer: 'Ooljééʼ', options: ['Ooljééʼ', 'Łį́į́ʼ', 'Mósí'], translation: 'Sol, lua, estrela.' },
        ],
        voice: {
          bot: 'Jóhonaaʼéí, ooljééʼ…',
          botTranslation: 'Sol, lua…',
          expected: ['Sǫʼ', 'sǫʼ'],
          hint: 'Complete com outra palavra do céu: “sǫʼ” (estrela).',
        },
        communityPrompt: 'Nomeie três bichos em navajo: cachorro (łééchąąʼí), cavalo (łį́į́ʼ) e gato (mósí).',
      },
      {
        id: 'nv-u2-l3',
        title: 'Prova: números, bichos e o céu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ…',
          botTranslation: 'Um, dois, três, quatro…',
          expected: ['Ashdlaʼ', 'ashdlaʼ'],
          hint: 'Complete a contagem até cinco: “ashdlaʼ”.',
        },
        communityPrompt: 'Escreva uma pequena cena em navajo: conte até cinco e nomeie um bicho e uma coisa do céu.',
      },
    ],
  },
];
