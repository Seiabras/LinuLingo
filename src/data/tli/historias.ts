import type { StorySeed } from '../types';

/**
 * Histórias interativas do lingít — uma por unidade, não duas por unidade como no modelo padrão deste
 * app: as fontes abertas consultadas não trazem verbos de ação com forma de citação simples (ver
 * gramatica.ts e o cabeçalho de vocabulario.ts), então uma história de verdade, com diálogo fluido,
 * não é possível sem inventar conjugações que nenhuma fonte confirma. Por isso as duas histórias usam
 * só palavras isoladas, exclamações e o padrão atestado “ax̱ + substantivo inalienável” (“meu/minha
 * ___”, do Dictionary of Tlingit, Edwards 2009) — nunca uma frase com verbo montada por conta própria.
 */
export const STORIES_TLI: StorySeed[] = [
  {
    id: 'tli-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Gunalchéesh! Yéil ḵa chʼáakʼ',
    emoji: '🐦‍⬛',
    summary: 'Alguém agradece, você fala da sua família e, no caminho, vocês avistam os dois bichos-emblema do povo lingít: o corvo e a águia.',
    cultural_context:
      'O corvo (“yéil”) e a águia (associada a “chʼáakʼ”) são os emblemas das duas metades (moieties) da sociedade lingít, Raven e Eagle — um sistema social real, com descendência matrilinear, descrito na Wikipédia em inglês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Gunalchéesh!',
        translation: 'Obrigado(a)!',
        emoji: '🙏',
        choices: [
          { text: 'Aakʼé!', translation: 'Que bom!', next: 'familia' },
          { text: 'Tlagu.', translation: '(É) antigo, do passado.', wrong: 'Isso não responde a um agradecimento. Responda com “Aakʼé!” (que bom!).' },
        ],
      },
      familia: {
        text: 'Ax̱ tláa.',
        translation: 'Minha mãe.',
        emoji: '👩',
        choices: [
          { text: 'Ax̱ éesh.', translation: 'Meu pai.', next: 'bichos' },
          { text: 'Yéil.', translation: 'Corvo.', wrong: 'Isso muda de assunto: ainda se está falando de família. Fale do seu pai com “Ax̱ éesh.”.' },
        ],
      },
      bichos: {
        text: 'Yéil!',
        translation: 'Um corvo!',
        emoji: '🐦‍⬛',
        choices: [
          { text: 'Chʼáakʼ!', translation: 'Uma águia!', next: 'final' },
          { text: 'Ax̱ tláa.', translation: 'Minha mãe.', wrong: 'Já se falou da família; agora é hora de nomear o outro bicho-emblema. Diga “Chʼáakʼ!” (uma águia!).' },
        ],
      },
      final: {
        text: 'Yéil ḵa chʼáakʼ: aakʼé!',
        translation: 'Corvo e águia: que bom!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Corvo e águia',
          message: 'Você apresentou a sua família e avistou os dois bichos-emblema das metades do povo lingít, o corvo (Raven) e a águia (Eagle).',
        },
      },
    },
    glossary: [
      ['gunalchéesh', 'obrigado(a)'],
      ['ax̱ tláa / ax̱ éesh', 'minha mãe / meu pai'],
      ['yéil', 'corvo'],
      ['chʼáakʼ', 'águia-de-cabeça-branca'],
    ],
  },
  {
    id: 'tli-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'G̱agaan, héen ḵa guneit',
    emoji: '☀️',
    summary: 'Um dia claro: você conta o que vê sob o sol, perto da água, e reconhece os bichos no caminho — até um que quase confunde com outro.',
    cultural_context:
      'O corvo (“yéil”) e a águia (associada a “chʼáakʼ”) continuam no centro desta cena: são os emblemas das duas metades (moieties) da sociedade lingít, Raven e Eagle.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'G̱agaan!',
        translation: 'Sol!',
        emoji: '☀️',
        choices: [
          { text: 'Héen!', translation: 'Água!', next: 'conta' },
          { text: 'Tléixʼ.', translation: '(O número) um.', wrong: 'Isso é um número, não algo visto no caminho; aponte para a água: “Héen!”.' },
        ],
      },
      conta: {
        text: 'Tléixʼ, déix̱…',
        translation: 'Um, dois…',
        emoji: '🔢',
        choices: [
          { text: 'Násʼk!', translation: 'Três!', next: 'bicho1' },
          { text: 'G̱agaan.', translation: 'Sol.', wrong: 'Isso já foi dito; continue a contagem: diga “Násʼk!” (três).' },
        ],
      },
      bicho1: {
        text: 'Yéil!',
        translation: 'Um corvo!',
        emoji: '🐦‍⬛',
        choices: [
          { text: 'Chʼáakʼ!', translation: 'Uma águia!', next: 'bicho2' },
          { text: 'Keitl.', translation: 'Cachorro.', wrong: 'Ainda não é hora do cachorro: o próximo bicho-emblema é a águia. Diga “Chʼáakʼ!”.' },
        ],
      },
      bicho2: {
        text: 'G̱ooch?',
        translation: 'Um lobo?',
        emoji: '🐺',
        choices: [
          { text: 'Keitl!', translation: 'Não, um cachorro!', next: 'final' },
          { text: 'Gunalchéesh.', translation: 'Obrigado.', wrong: 'Isso não responde à pergunta sobre o bicho; diga que é um cachorro: “Keitl!”.' },
        ],
      },
      final: {
        text: 'Aakʼé! G̱agaan, héen, yéil, chʼáakʼ, g̱ooch, keitl.',
        translation: 'Que bom! Sol, água, corvo, águia, lobo, cachorro.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um dia claro',
          message: 'Você contou até três, reconheceu os dois bichos-emblema do povo lingít (corvo e águia) e não confundiu o lobo com o cachorro.',
        },
      },
    },
    glossary: [
      ['g̱agaan', 'sol'],
      ['héen', 'água'],
      ['g̱ooch', 'lobo'],
      ['keitl', 'cachorro'],
    ],
  },
];
