import type { StorySeed } from '../types';

/**
 * Histórias interativas do tapiete — uma por nível (A1.1 e A1.2), pacote incompleto. O artigo-fonte
 * (González, Hebe 2010, LIAMES 8) é um estudo de fonologia, não um livro de diálogos: por isso, ao
 * contrário de outros pacotes de língua indígena deste app, aqui TODAS as frases (inclusive os caminhos
 * “certos”) foram montadas combinando só palavras e prefixos atestados no artigo (o prefixo de 1ª
 * pessoa “a-”, o pronome demonstrativo “ampo”, os pronomes “nde”/“ha'e” e as duas frases completas
 * citadas de verdade no artigo, “Ha'e ñi-mbo'e.” e “Heta o-ĩ.”) — nenhuma palavra nova foi inventada,
 * mas a sintaxe das frases combinadas (além das duas citadas) não está confirmada pela fonte, já que o
 * artigo não cobre sintaxe. Ver o cabeçalho de vocabulario.ts para a lista completa de fontes.
 */
export const STORIES_TPJ: StorySeed[] = [
  {
    id: 'tpj-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Wähe! Nde tapiete?',
    emoji: '🏞️',
    summary: 'Alguém chega à aldeia, perto do rio Pilcomayo, e descobre que vocês dois são tapietes.',
    cultural_context: 'A comunidade tapiete documentada neste pacote vive em “Misión Los Tapietes”, em Tartagal, província de Salta (Argentina), perto do rio Pilcomayo e da fronteira com a Bolívia — uma das poucas comunidades onde o tapiete ainda é falado, mesmo que cada vez menos pelas crianças.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wähe!',
        translation: 'Chegou!',
        emoji: '🚶',
        choices: [
          { text: "Nde tapiete?", translation: 'Você é tapiete?', next: 'identidade' },
          { text: 'Ampo tata.', translation: 'Isto é fogo.', wrong: 'A pessoa acabou de chegar; ainda não se falou de fogo. Pergunte quem ela é, com “Nde tapiete?” (você é tapiete?).' },
        ],
      },
      identidade: {
        text: "Ha'e tapiete. Nde tapiete?",
        translation: 'Eu sou tapiete. E você, é tapiete?',
        emoji: '🧑',
        choices: [
          { text: "Ha'e tapiete.", translation: 'Eu sou tapiete.', next: 'comida' },
          { text: 'Wewe.', translation: 'Voa.', wrong: 'Isso muda de assunto: a pessoa perguntou se você também é tapiete. Responda com “Ha\'e tapiete.” (eu sou tapiete).' },
        ],
      },
      comida: {
        text: "A-pota so'o. Nde?",
        translation: 'Eu quero carne. E você?',
        emoji: '🍖',
        choices: [
          { text: 'A-pota awati.', translation: 'Eu quero milho.', next: 'final' },
          { text: "A-hesha.", translation: 'Eu vejo.', wrong: 'Isso não responde à pergunta sobre o que você quer comer. Diga “A-pota ___.” com algo da comida, como “awati” (milho).' },
        ],
      },
      final: {
        text: "Pörä! Ampo tenta.",
        translation: 'Que bonito! Esta é a aldeia.',
        emoji: '🏘️',
        ending: { tone: 'bom', title: 'Tapietes, os dois', message: 'Você encontrou alguém que também é tapiete, perto do rio Pilcomayo, e já combinaram a comida: carne para um, milho para o outro.' },
      },
    },
    glossary: [
      ['wähe', 'chega'],
      ['tapiete', 'tapiete (pessoa do povo)'],
      ["so'o", 'carne'],
      ['awati', 'milho'],
    ],
  },
  {
    id: 'tpj-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ɨ, kãwĩ, tata',
    emoji: '🍶',
    summary: 'Um dia comum: buscar água, preparar chicha de milho e acender o fogo.',
    cultural_context: 'A chicha (“kãwĩ”), uma bebida fermentada de milho, é uma das palavras mais bem documentadas do tapiete — um sinal de como o milho (“awati”) é importante na vida da comunidade do Chaco.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "A-wata. A-pota ɨ.",
        translation: 'Eu ando. Eu quero água.',
        emoji: '💧',
        choices: [
          { text: 'Ampo ɨ.', translation: 'Esta é a água.', next: 'milho' },
          { text: 'Ampo tata.', translation: 'Isto é fogo.', wrong: 'Você estava procurando água (“ɨ”), não fogo. Responda apontando a água: “Ampo ɨ.”.' },
        ],
      },
      milho: {
        text: 'A-pota awati, kãwĩ-pe.',
        translation: 'Eu quero milho, para a chicha.',
        emoji: '🌽',
        choices: [
          { text: 'Ampo awati.', translation: 'Este é o milho.', next: 'fogo' },
          { text: "A-karu so'o.", translation: 'Eu como carne.', wrong: 'A pessoa pediu milho (“awati”) para a chicha, não carne. Mostre o milho: “Ampo awati.”.' },
        ],
      },
      fogo: {
        text: 'Heta o-ĩ. Ampo tata.',
        translation: 'Há muito. Isto é fogo.',
        emoji: '🔥',
        choices: [
          { text: "Pörä! Ha'e tapiete.", translation: 'Que bonito! Ele/ela é tapiete.', next: 'final' },
          { text: 'Minshi.', translation: '(É) pequeno.', wrong: 'A frase anterior falou de muito fogo (“heta o-ĩ”), não de algo pequeno. Responda com “Pörä!” (que bonito!).' },
        ],
      },
      final: {
        text: 'Ampo kãwĩ.',
        translation: 'Esta é a chicha.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Água, milho e fogo', message: 'Com água, milho e fogo reunidos, a chicha (“kãwĩ”) ficou pronta — um dia comum na aldeia tapiete.' },
      },
    },
    glossary: [
      ['ɨ', 'água'],
      ['awati', 'milho'],
      ['tata', 'fogo'],
      ['kãwĩ', 'chicha'],
    ],
  },
];
