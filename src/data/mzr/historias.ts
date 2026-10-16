import type { StorySeed } from '../types';

/**
 * Histórias do marúbo, uma por subnível. Siglas como em vocabulario (CES17 = Cesarino, Marubo e Marubo
 * 2017, com a linha da narrativa; CES18 = Cesarino 2018; ANH10 = Anonby e Holbrook 2010).
 *
 * mzr-h1 (A1.1), origem das falas:
 * - “Txai!” (CES18 p. 48: os primos cruzados se tratam “por txai”);
 * - “Nokẽ shovo.”, “Ẽ shovo.”, “Nokẽ yora.” MONTADAS: possessivo + substantivo (regra de “ẽ yora”,
 *   CES17 75, e “nokẽ chinã”, CES17 25);
 * - “Shovo roaka.”, “Waka roaka.” MONTADAS: substantivo + adjetivo, como “vai roaka-ma” (caminho não
 *   bom, CES17 50) e “vana roaka” (fala bonita, CES18 p. 55);
 * - “Ẽ yora.” (CES17 75); “Kayã nachima.” (CES17 17); “Akarivi.” (CES17 105); “Vei Vai.” (CES17 28).
 *
 * mzr-h2 (A1.2), todas as falas são trechos da narrativa “Vei Vai yoã” de Armando Marubo (CES17):
 * “Nokẽ shenirasĩ.” (101); “Vari Nawavo.” (CES18 p. 48); “Ronorasĩ kenaiti.” (15); “Tenãseiti.” (19);
 * “Vei Vai shovimakĩ.” (36); “Vai roakama.” (50); “Rave nokoma, ravero nokoai.” (103–104);
 * “Akarivi.” (105); “Shovo roaka.” MONTADA (ver acima).
 */
export const STORIES_MZR: StorySeed[] = [
  {
    id: 'mzr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txai, na maloca',
    emoji: '🛖',
    summary: 'Você chega a uma maloca marúbo no alto rio Ituí, e um parente te recebe chamando de “txai”.',
    cultural_context:
      'Os Marúbo ainda vivem em malocas, as casas grandes coletivas (shovo), segundo Cesarino, Armando Marubo e Robson Marubo (2017). “Txai” é o termo para o cunhado e o primo cruzado: segundo Cesarino (2018), os primos cruzados se tratam “por txai”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Txai! Nokẽ shovo.',
        translation: 'Cunhado! Nossa maloca.',
        emoji: '🛖',
        choices: [
          { text: 'Txai! Shovo roaka.', translation: 'Cunhado! Maloca boa.', next: 'parentes' },
          {
            text: 'Vei Vai.',
            translation: 'Caminho-Morte.',
            wrong: 'Isso é o caminho dos mortos, não uma resposta para quem te recebe. Devolva o tratamento e elogie a maloca: “Txai! Shovo roaka.”.',
          },
        ],
      },
      parentes: {
        text: 'Ẽ yora.',
        translation: 'Meus parentes.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Nokẽ yora.', translation: 'Nossos parentes.', next: 'rio' },
          {
            text: 'Wapa.',
            translation: 'Cachorro.',
            wrong: 'Ele estava apresentando os parentes, não um cachorro. Mostre que agora são parentes de todos: “Nokẽ yora.” (nossos parentes).',
          },
        ],
      },
      rio: {
        text: 'Kayã nachima.',
        translation: 'Banhar no rio.',
        emoji: '🏞️',
        choices: [
          { text: 'Waka roaka.', translation: 'Água boa.', next: 'final' },
          {
            text: 'Kamã!',
            translation: 'Onça!',
            wrong: 'Ninguém viu onça: o convite era para tomar banho no rio. Responda elogiando a água: “Waka roaka.”.',
          },
        ],
      },
      final: {
        text: 'Akarivi.',
        translation: 'Assim mesmo é.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Txai, na maloca',
          message: 'Você foi recebido como “txai”, conheceu os parentes da maloca e foi tomar banho no rio. Uma chegada boa numa aldeia marúbo.',
        },
      },
    },
    glossary: [
      ['txai', 'cunhado; forma de tratamento'],
      ['shovo', 'maloca, casa grande'],
      ['yora', 'pessoa, gente, parentes'],
      ['roaka', 'bom'],
      ['kaya', 'rio'],
    ],
  },
  {
    id: 'mzr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Vei Maya e o caminho ruim',
    emoji: '🌫️',
    summary: 'Um velho pajé conta à noite, na maloca, como surgiu o Caminho-Morte. Você acompanha a história.',
    cultural_context:
      'Esta história segue a narrativa que o pajé Armando Mariano Marubo contou em 2007, na aldeia Alegria (alto Ituí), publicada com tradução por Cesarino, Armando Marubo e Robson Marubo (2017). Vei Maya morreu picada por uma cobra e mandou os povos-espíritos das árvores fazerem o Caminho-Morte (Vei Vai), um caminho ruim. Desde então, uns mortos chegam ao fim dele e outros não.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nokẽ shenirasĩ.',
        translation: 'Nossos antepassados.',
        emoji: '🔥',
        choices: [
          { text: 'Vari Nawavo.', translation: 'O Povo Sol.', next: 'cobras' },
          {
            text: 'Shovo roaka.',
            translation: 'Maloca boa.',
            wrong: 'O pajé está começando uma história dos antigos, não falando da maloca. Responda com um dos povos antigos: “Vari Nawavo.” (o Povo Sol).',
          },
        ],
      },
      cobras: {
        text: 'Ronorasĩ kenaiti.',
        translation: 'Ela chamava pelas cobras, há muito tempo.',
        emoji: '🐍',
        choices: [
          { text: 'Tenãseiti.', translation: 'E morreu, há muito tempo.', next: 'caminho' },
          {
            text: 'Akarivi.',
            translation: 'Assim mesmo é.',
            wrong: 'Ainda não é o fim da história. Conte o que aconteceu com Vei Maya, no passado remoto: “Tenãseiti.” (morreu, há muito tempo).',
          },
        ],
      },
      caminho: {
        text: 'Vei Vai shovimakĩ.',
        translation: 'Construíram o Caminho-Morte.',
        emoji: '🛤️',
        choices: [
          { text: 'Vai roakama.', translation: 'Um caminho ruim.', next: 'chegada' },
          {
            text: 'Vari Nawavo.',
            translation: 'O Povo Sol.',
            wrong: 'Quem fez o caminho foram os povos-espíritos das árvores. Diga como era esse caminho, com o “-ma” de negação: “Vai roakama.” (caminho não bom).',
          },
        ],
      },
      chegada: {
        text: 'Rave nokoma, ravero nokoai.',
        translation: 'Uns não chegavam, outros chegavam.',
        emoji: '🌫️',
        choices: [
          { text: 'Akarivi.', translation: 'Assim mesmo é.', next: 'final' },
          {
            text: 'Ronorasĩ kenaiti.',
            translation: 'Ela chamava pelas cobras, há muito tempo.',
            wrong: 'Essa parte já passou. O pajé terminou a história: feche como ele fecha, “Akarivi.” (assim mesmo é).',
          },
        ],
      },
      final: {
        text: 'Akarivi.',
        translation: 'Assim mesmo é.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Vei Maya e o caminho ruim',
          message: 'Você acompanhou a história do Caminho-Morte: Vei Maya chamou as cobras, morreu, e o caminho ruim foi feito. Desde então, só quem tem fala sabida chega ao fim dele.',
        },
      },
    },
    glossary: [
      ['sheni', 'antepassado'],
      ['-rasĩ', 'todos os…'],
      ['-ti', 'passado remoto'],
      ['vai', 'caminho'],
      ['-ma', 'não'],
      ['noko', 'chegar'],
    ],
  },
];
