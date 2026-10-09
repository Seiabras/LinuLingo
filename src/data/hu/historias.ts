import type { StorySeed } from '../types';

/**
 * Histórias interativas do húngaro — uma por subnível de A1.1 a A2.2 (pacote incompleto, falta do
 * B1 em diante — ver index.ts). Lugares e fatos culturais conferidos na Wikipédia («Great Market
 * Hall», «Hungarian names», «Hungarian forint», «Széchenyi thermal bath»); palavras conferidas no
 * Wiktionary (szia, tessék, friss, Bodri, kérem, köszönöm, fürdő etc., e os verbos no passado usados
 * nas unidades 3 e 4 de curriculo.ts).
 */
export const STORIES_HU: StorySeed[] = [
  {
    id: 'hu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Szia, Nagyvásárcsarnok!',
    emoji: '🧺',
    summary: 'No Grande Mercado Coberto de Budapeste, você conhece a Zsófia e escolhe entre pão ou fruta fresca.',
    cultural_context:
      'A Nagyvásárcsarnok (Grande Mercado Coberto) abriu em 1897 em Budapeste, projetada por Samu Pecz, com um telhado de telhas coloridas Zsolnay (de Pécs). É o maior e mais antigo mercado coberto da cidade, perto da Ponte da Liberdade.',
    start: 'start',
    nodes: {
      start: {
        text: 'Budapest, Nagyvásárcsarnok. Itt van sok kenyér és gyümölcs.',
        translation: 'Budapeste, Grande Mercado Coberto. Aqui tem muito pão e fruta.',
        emoji: '🏛️',
        choices: [
          { text: 'Szia! A nevem Linu.', translation: 'Oi! Meu nome é Linu.', next: 'talalkozas' },
          {
            text: 'Viszlát!',
            translation: 'Tchau!',
            wrong: 'Ninguém te cumprimentou ainda, então se despedir agora seria estranho. Comece com “Szia!”.',
          },
        ],
      },
      talalkozas: {
        text: '“Szia! A nevem Zsófia. Mi a neved?”',
        translation: '“Oi! Meu nome é Zsófia. Qual é o seu nome?”',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'A nevem Linu.', translation: 'Meu nome é Linu.', next: 'kerdes' },
          {
            text: 'Kenyeret kérek.',
            translation: 'Eu queria pão.',
            wrong: 'A Zsófia perguntou o seu nome (“Mi a neved?”): responda com “A nevem…”.',
          },
        ],
      },
      kerdes: {
        text: '“Szép név! Mit szeretnél: kenyeret vagy gyümölcsöt?”',
        translation: '“Nome bonito! O que você gostaria: pão ou fruta?”',
        emoji: '🤔',
        choices: [
          { text: 'Kenyeret kérek.', translation: 'Eu queria pão.', next: 'kenyer' },
          { text: 'Gyümölcsöt kérek.', translation: 'Eu queria fruta.', next: 'gyumolcs' },
        ],
      },
      kenyer: {
        text: '“Tessék, friss kenyér!”',
        translation: '“Aqui está, pão fresco!”',
        emoji: '🍞',
        choices: [{ text: 'Köszönöm! Nagyon szeretem a kenyeret.', translation: 'Obrigado! Eu gosto muito de pão.', next: 'final_kenyer' }],
      },
      gyumolcs: {
        text: '“Tessék, friss gyümölcs!”',
        translation: '“Aqui está, fruta fresca!”',
        emoji: '🍇',
        choices: [{ text: 'Köszönöm! Nagyon szeretem a gyümölcsöt.', translation: 'Obrigado! Eu gosto muito de fruta.', next: 'final_gyumolcs' }],
      },
      final_kenyer: {
        text: '“Viszlát, Linu!”',
        translation: '“Até logo, Linu!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss kenyér', message: 'Você comprou pão fresco na Nagyvásárcsarnok e fez uma amiga, a Zsófia.' },
      },
      final_gyumolcs: {
        text: '“Viszlát, Linu!”',
        translation: '“Até logo, Linu!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss gyümölcs', message: 'Você experimentou fruta fresca na Nagyvásárcsarnok e fez uma amiga, a Zsófia.' },
      },
    },
    glossary: [
      ['szia', 'oi; tchau (informal)'],
      ['a nevem…', 'meu nome é…'],
      ['tessék', 'aqui está (ao entregar algo, com educação)'],
      ['friss', 'fresco (do alemão “frisch”)'],
      ['köszönöm', 'obrigado'],
    ],
  },
  {
    id: 'hu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Zsófia otthonában',
    emoji: '🏠',
    summary: 'A Zsófia convida você para a casa dela e apresenta a família: a mãe, o pai e o cachorro, Bodri.',
    cultural_context:
      'Os húngaros escrevem o nome de família antes do nome próprio: “Molnár Ferenc”, não “Ferenc Molnár”. É a chamada ordem oriental de nomes, rara na Europa. E “Bodri” é um nome de cachorro tão comum na Hungria quanto “Rex” em português.',
    start: 'start',
    nodes: {
      start: {
        text: '“Szia! Gyere, ez az én házam!”',
        translation: '“Oi! Vem, esta é a minha casa!”',
        emoji: '🏠',
        choices: [
          { text: 'Szia! Nagy a házad!', translation: 'Oi! Sua casa é grande!', next: 'bemutatkozas' },
          {
            text: 'Viszlát!',
            translation: 'Tchau!',
            wrong: 'A Zsófia acabou de te convidar para entrar: despedir-se agora seria estranho. Responda ao cumprimento primeiro.',
          },
        ],
      },
      bemutatkozas: {
        text: '“Köszönöm! Ez az anyám, ez az apám, és ez a testvérem.”',
        translation: '“Obrigada! Esta é a minha mãe, este é o meu pai, e este é o meu irmão (esta é a minha irmã).”',
        emoji: '👪',
        choices: [
          { text: 'Szia mindenkinek! Van egy kutyátok is?', translation: 'Oi, todo mundo! Vocês também têm um cachorro?', next: 'valasztas' },
          {
            text: 'Kenyeret kérek.',
            translation: 'Eu queria pão.',
            wrong: 'A Zsófia acabou de apresentar a família: cumprimente antes de pedir comida.',
          },
        ],
      },
      valasztas: {
        text: '“Igen! És van kenyerünk is. Mit szeretnél?”',
        translation: '“Sim! E nós também temos pão. O que você gostaria?”',
        emoji: '🐕',
        choices: [
          { text: 'Szeretem a kutyát.', translation: 'Eu gosto do cachorro.', next: 'kutya' },
          { text: 'Kérek kenyeret.', translation: 'Eu queria pão.', next: 'kenyer' },
        ],
      },
      kutya: {
        text: '“Ő Bodri! Nagyon jó kutya.”',
        translation: '“Este é o Bodri! É um cachorro muito bom.”',
        emoji: '🐕',
        choices: [{ text: 'Szia, Bodri! Jó kutya vagy.', translation: 'Oi, Bodri! Você é um bom cachorro.', next: 'final_kutya' }],
      },
      kenyer: {
        text: '“Tessék, friss kenyér!”',
        translation: '“Aqui está, pão fresco!”',
        emoji: '🍞',
        choices: [{ text: 'Köszönöm! A kenyér nagyon jó.', translation: 'Obrigado! O pão está muito bom.', next: 'final_kenyer' }],
      },
      final_kutya: {
        text: '“Bodri szeret téged!”',
        translation: '“O Bodri gosta de você!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Új barát', message: 'Você brincou com o Bodri e ganhou um novo amigo canino em Budapeste.' },
      },
      final_kenyer: {
        text: '“Örülök!”',
        translation: '“Que bom!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss kenyér', message: 'Você experimentou pão fresco feito em casa, com a família da Zsófia.' },
      },
    },
    glossary: [
      ['anya, apa', 'mãe, pai'],
      ['testvér', 'irmão, irmã (de “test” = corpo + “vér” = sangue)'],
      ['van', 'há, existe; também serve para “ter” (van egy kutyám = eu tenho um cachorro)'],
      ['tessék', 'aqui está (ao entregar algo)'],
    ],
  },
  {
    id: 'hu-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Tegnap a piacon',
    emoji: '🧺',
    summary: 'Você encontra a Zsófia de novo na Nagyvásárcsarnok e conta o que fez ontem, enquanto compra pão.',
    cultural_context:
      'O forint, a moeda da Hungria, nasceu em 1º de agosto de 1946, para estabilizar a economia depois da pior hiperinflação já registrada no mundo (a da moeda anterior, o pengő). O nome “forint” é bem mais antigo que 1946: vem de Florença, da moeda de ouro “fiorino d’oro”, cunhada ali desde 1252, e já era usado na Hungria desde 1325.',
    start: 'start',
    nodes: {
      start: {
        text: 'Szia! Tegnap dolgoztam reggel. És te?',
        translation: 'Oi! Ontem eu trabalhei de manhã. E você?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Én is dolgoztam tegnap.', translation: 'Eu também trabalhei ontem.', next: 'piac' },
          {
            text: 'Harminc kenyeret kérek.',
            translation: 'Eu queria trinta pães.',
            wrong: 'A Zsófia perguntou o que você fez ontem, não o que você quer agora. Responda com um verbo no passado, como “dolgoztam” ou “tanultam”.',
          },
        ],
      },
      piac: {
        text: 'Szép! Fáradt vagy most?',
        translation: 'Legal! Você está cansado agora?',
        emoji: '😴',
        choices: [
          { text: 'Igen, fáradt vagyok, és éhes is.', translation: 'Sim, estou cansado, e também com fome.', next: 'comida' },
          { text: 'Nem, boldog vagyok!', translation: 'Não, estou feliz!', next: 'comida' },
        ],
      },
      comida: {
        text: 'Van friss kenyér. Mit szeretnél?',
        translation: 'Tem pão fresco. O que você gostaria?',
        emoji: '🍞',
        choices: [
          { text: 'Harminc kenyeret kérek.', translation: 'Eu queria trinta pães.', next: 'final_muito' },
          { text: 'Egy kenyeret kérek.', translation: 'Eu queria um pão.', next: 'final_um' },
        ],
      },
      final_muito: {
        text: 'Harminc?! Az sok!',
        translation: 'Trinta?! Isso é muito!',
        emoji: '😲',
        ending: { tone: 'bom', title: 'Sok kenyér', message: 'Você contou o seu dia em húngaro usando o passado, e praticou os números pedindo trinta pães!' },
      },
      final_um: {
        text: 'Tessék, friss kenyér!',
        translation: 'Aqui está, pão fresco!',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Egy kenyér', message: 'Um pão só, mas você contou certinho o seu dia em húngaro, usando o passado.' },
      },
    },
    glossary: [
      ['tegnap', 'ontem'],
      ['dolgoztam', 'eu trabalhei'],
      ['fáradt, éhes, boldog', 'cansado, com fome, feliz'],
      ['van', 'há, existe'],
    ],
  },
  {
    id: 'hu-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Holnap a fürdőben',
    emoji: '♨️',
    summary: 'A Zsófia e você planejam ir ao balneário termal Széchenyi amanhã e decidem o que vestir, de acordo com o tempo.',
    cultural_context:
      'O balneário termal Széchenyi, em Budapeste, abriu em 13 de junho de 1913 no Parque da Cidade (Városliget) e recebe água de duas fontes termais, a 74°C e a 77°C: por isso as piscinas ao ar livre funcionam bem mesmo no frio do inverno húngaro.',
    start: 'start',
    nodes: {
      start: {
        text: 'Szia! Holnap a Széchenyi fürdőbe megyünk. Milyen lesz az idő?',
        translation: 'Oi! Amanhã vamos ao balneário Széchenyi. Como vai estar o tempo?',
        emoji: '♨️',
        choices: [
          { text: 'Holnap hideg lesz, de a fürdő meleg!', translation: 'Vai estar frio amanhã, mas o balneário é quente!', next: 'roupa' },
          {
            text: 'Boldog vagyok.',
            translation: 'Estou feliz.',
            wrong: 'Isso não responde como vai estar o tempo amanhã. Use “lesz” para o futuro, como em “hideg lesz”.',
          },
        ],
      },
      roupa: {
        text: 'Igaz! Nagyobb kabát kell.',
        translation: 'Verdade! Precisa de um casaco maior.',
        emoji: '🧥',
        choices: [
          { text: 'A kabát nagyobb, mint a sapka.', translation: 'O casaco é maior do que o boné.', next: 'final_kabat' },
          { text: 'Szomjas vagyok.', translation: 'Estou com sede.', next: 'final_szomjas' },
        ],
      },
      final_kabat: {
        text: 'Tessék, ez a kabát jó lesz!',
        translation: 'Aqui está, este casaco vai servir bem!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Jó kabát', message: 'Você escolheu o casaco certo para o frio, comparando tamanhos com “nagyobb, mint” e usando “lesz” para o futuro.' },
      },
      final_szomjas: {
        text: 'A fürdőben sok víz van!',
        translation: 'No balneário tem bastante água!',
        emoji: '💧',
        ending: { tone: 'neutro', title: 'Sok víz', message: 'Sede também é um sentimento válido — pelo menos no balneário não vai faltar água.' },
      },
    },
    glossary: [
      ['holnap', 'amanhã'],
      ['lesz', 'vai ser, vai estar (futuro de “van”)'],
      ['mint', 'do que, como (em comparações)'],
      ['fürdő', 'balneário, banho'],
    ],
  },
];
