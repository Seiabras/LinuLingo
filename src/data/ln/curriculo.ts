import type { UnitSeed } from '../types';

/**
 * Trilha do lingala: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Da A2 ao C2 chega depois.
 *
 * Fontes: https://en.wikipedia.org/wiki/Lingala (história, classes nominais, tons, verbos) e as
 * páginas do Wikcionário citadas em vocabulario.ts. Todas as frases de exemplo combinam só
 * palavras conferidas nessas fontes (o padrão possessivo “substantivo + na + pronome”, ex.
 * “mama na ngai”, vem direto da entrada de “na” no Wikcionário, que lista “of (before personal
 * pronouns)” entre os sentidos da palavra).
 */
export const UNITS_LN: UnitSeed[] = [
  {
    id: 'ln-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mbote na bino!',
    emoji: '👋',
    card: {
      id: 'ln-c1',
      title: 'A língua que nasceu do comércio no rio Congo',
      emoji: '🛶',
      history:
        'O lingala nasceu por volta de 1880–1884 como uma versão simplificada do bobangi, língua de comércio já usada havia séculos ao longo do rio Congo. Quando os primeiros europeus (com tropas africanas do oeste e do leste) fundaram postos do rei belga nesse trecho do rio, encontraram o bobangi já amplamente falado e prestigiado, e passaram a usar essa forma simplificada para se comunicar. Por volta de 1901–1902, missionários católicos (CICM) iniciaram um projeto para “purificar” essa língua de comércio (então chamada bangala), tirando traços de pidgin e padronizando-a para o ensino e a catequese: nascia assim o lingala como o conhecemos.',
      culture_tip:
        'Hoje o lingala é língua nacional tanto na República Democrática do Congo quanto na República do Congo, falado nas duas capitais (Kinshasa e Brazzaville) por cerca de 40 milhões de pessoas entre falantes nativos e de segunda língua. Ele também virou língua franca das forças armadas congolesas — e, mais conhecido no mundo todo, é a língua da rumba congolesa e do soukous, estilos de música que levaram o lingala para rádios de toda a África.',
      grammar_why:
        'Em vez de um artigo possessivo antes do substantivo (“o meu pai”), o lingala usa a palavra “na” depois dele: “tata na ngai” é, palavra por palavra, “pai de mim”. A mesma palavrinha “na” também quer dizer “com” e “em”: “nazali na mwana” (estou com filho) é como se diz “eu tenho um filho” — o lingala não tem um verbo “ter” separado, usa “kozala” (ser/estar) mais “na”.',
      grammar_examples: [
        ['Mbote! Nkombo na ngai Linu.', 'Oi! Meu nome é Linu.'],
        ['Mbote na yo!', 'Oi pra você!'],
        ['Nazali malamu.', 'Estou bem.'],
        ['Tata na ngai.', 'Meu pai. (lit. “pai de mim”)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ln-u1-l1',
        title: 'Mbote, melesi, nkombo',
        kind: 'licao',
        words: ['mbote', 'melesi', 'boni', 'ngai', 'yo', 'nkombo'],
        cloze: [
          { sentence: '___! Nazali malamu.', answer: 'Mbote', options: ['Mbote', 'Melesi', 'Boni'], translation: 'Oi! Estou bem.' },
          { sentence: 'Mbote na ___!', answer: 'yo', options: ['yo', 'ngai', 'boni'], translation: 'Oi pra você!' },
          { sentence: 'Mbote! ___?', answer: 'Boni', options: ['Boni', 'Melesi', 'Nkombo'], translation: 'Oi! Como vai?' },
        ],
        voice: {
          bot: 'Mbote! Nkombo na yo nini?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Mbote! Nkombo na ngai Ana.', 'nkombo na ngai', 'mbote'],
          hint: 'Devolva o cumprimento (“Mbote!”) e diga o seu nome com “Nkombo na ngai…”.',
        },
        communityPrompt: 'Apresente-se em lingala: diga “Mbote!”, o seu nome com “Nkombo na ngai…” e pergunte o nome de alguém com “Nkombo na yo nini?”.',
      },
      {
        id: 'ln-u1-l2',
        title: 'Mama, tata, ndeko',
        kind: 'licao',
        words: ['kozala', 'na', 'mama', 'tata', 'mwana', 'ndeko'],
        cloze: [
          { sentence: '___ na ndako.', answer: 'Kozala', options: ['Kozala', 'Kokende', 'Koloba'], translation: 'Estar em casa.' },
          { sentence: '___ na ngai.', answer: 'Tata', options: ['Tata', 'Mama', 'Ndeko'], translation: 'Meu pai.' },
          { sentence: 'Nazali ___ mwana.', answer: 'na', options: ['na', 'te', 'nini'], translation: 'Eu tenho um(a) filho(a).' },
        ],
        voice: {
          bot: 'Tata na yo nkombo nini?',
          botTranslation: 'Qual é o nome do seu pai?',
          expected: ['Tata na ngai nkombo Jean.', 'tata na ngai', 'nkombo'],
          hint: 'Diga o nome do seu pai com “Tata na ngai nkombo…”.',
        },
        communityPrompt: 'Apresente a sua família em lingala: “Mama na ngai…”, “Tata na ngai…” e diga se você tem “ndeko” (irmão, irmã ou amigo) ou “mwana” (filho, filha).',
      },
      {
        id: 'ln-u1-l3',
        title: 'Test: mbote na bino',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mbote! Nkombo na yo nini?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Mbote! Nkombo na ngai Lucia, mpe mama na ngai nkombo Rosa.', 'nkombo na ngai', 'mbote'],
          hint: 'Devolva o cumprimento, diga o seu nome com “Nkombo na ngai…” e cite uma pessoa da família com “na ngai”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em lingala: cumprimento (“Mbote!”), nome (“Nkombo na ngai…”) e uma pessoa da família (“Mama na ngai…” ou “Tata na ngai…”).',
      },
    ],
  },
  {
    id: 'ln-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na ndako na biso',
    emoji: '🏠',
    card: {
      id: 'ln-c2',
      title: 'Uma casa, duas casas: as classes do lingala',
      emoji: '🧩',
      history:
        'Como toda língua banta, o lingala não divide os substantivos em masculino e feminino: ele os organiza em até 15 classes, cada uma com seu prefixo. “Mwana” (criança, classe 1, prefixo mo-) vira “bana” no plural (classe 2, prefixo ba-); já palavras como “mbwa” (cachorro) ou “ngombe” (vaca) ficam com a mesma forma no singular e no plural, porque pertencem a uma classe (9/10) cujo prefixo nasal quase não muda. Para simplificar, este curso não varia o substantivo depois dos números — você só precisa aprender a contar.',
      culture_tip:
        'O lingala é tonal: além do tom baixo e do tom alto, existem dois tons compostos. Na escrita, o acento agudo marca o tom alto, o circunflexo o tom descendente e um sinal mais raro o tom ascendente — mas, na prática, a maioria dos textos marca os tons só de vez em quando (“de forma esporádica”, segundo a Wikipédia em inglês), porque o alfabeto de 35 letras e dígrafos do lingala já é grande sem eles.',
      grammar_why:
        'Os numerais vêm depois do substantivo: “ndako moko” é “uma casa”, “bana mibale” é “duas crianças”. E os verbos, como “kokende” (ir) e “kosala” (fazer, trabalhar), aparecem aqui no infinitivo (com o prefixo ko-), a forma que o Wikcionário lista como a forma de dicionário de cada verbo.',
      grammar_examples: [
        ['Ndako moko.', 'Uma casa.'],
        ['Bana mibale.', 'Duas crianças.'],
        ['Nazali na mai.', 'Eu tenho água.'],
        ['Kokende na mboka.', 'Ir à cidade, à aldeia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ln-u2-l1',
        title: 'Ndako, kiti, mesa',
        kind: 'licao',
        words: ['ndako', 'kiti', 'mesa', 'moko', 'mibale', 'misato'],
        cloze: [
          { sentence: 'Ndako ___.', answer: 'moko', options: ['moko', 'mibale', 'misato'], translation: 'Uma casa.' },
          { sentence: '___ na ndako.', answer: 'Kiti', options: ['Kiti', 'Mesa', 'Mboka'], translation: 'A cadeira da casa.' },
          { sentence: 'Bana ___.', answer: 'mibale', options: ['mibale', 'misato', 'moko'], translation: 'Duas crianças.' },
        ],
        voice: {
          bot: 'Ndako na yo wápi?',
          botTranslation: 'Onde é a sua casa?',
          expected: ['Ndako na ngai na mboka.', 'ndako na ngai', 'na mboka'],
          hint: 'Diga onde é a sua casa com “Ndako na ngai na…”.',
        },
        communityPrompt: 'Descreva a sua casa em lingala: diga quantos cômodos ela tem (moko, mibale, misato…) e o que tem nela (kiti, mesa).',
      },
      {
        id: 'ln-u2-l2',
        title: 'Mai, loso, kokende',
        kind: 'licao',
        words: ['mai', 'loso', 'mbuma', 'kolinga', 'kokende', 'kosala'],
        cloze: [
          { sentence: 'Nazali na ___.', answer: 'mai', options: ['mai', 'loso', 'mbuma'], translation: 'Eu tenho água.' },
          { sentence: '___ na mboka.', answer: 'Kokende', options: ['Kokende', 'Kosala', 'Kolinga'], translation: 'Ir à cidade, à aldeia.' },
          { sentence: '___ ndeko na yo.', answer: 'Kolinga', options: ['Kolinga', 'Kosala', 'Kokende'], translation: 'Gostar do seu amigo, da sua amiga.' },
        ],
        voice: {
          bot: 'Kolinga mai?',
          botTranslation: 'Quer água?',
          expected: ['Nazali na mai.', 'nazali na mai', 'mai'],
          hint: 'Responda que tem água com “Nazali na mai.”.',
        },
        communityPrompt: 'Escreva o que você tem para comer e beber em lingala, usando “Nazali na…” com mai, loso ou mbuma.',
      },
      {
        id: 'ln-u2-l3',
        title: 'Test: na ndako na biso',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ndako na yo wápi? Nkombo na yo nini?',
          botTranslation: 'Onde é a sua casa? Qual é o seu nome?',
          expected: ['Ndako na ngai na mboka. Nkombo na ngai Linu.', 'ndako na ngai', 'nkombo na ngai'],
          hint: 'Diga onde é a sua casa (“Ndako na ngai na…”) e repita o seu nome (“Nkombo na ngai…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre você em lingala: nome, família, casa e o que você tem para comer, sempre usando “na”.',
      },
    ],
  },
];
