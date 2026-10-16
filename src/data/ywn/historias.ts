import type { StorySeed } from '../types';

/**
 * Histórias do yawanawá, uma por subnível. Siglas como em vocabulario.
 *
 * ywn-h1 (A1.1), origem das falas:
 * - “Txai!” (VAK 21; GIL99 60: txai é o primo cruzado); “Txai! Ē nukua.” junta essa fala a “Ē nukua”
 *   (CT13 95, eu cheguei);
 * - “Ewan peshe.” MONTADA: possessivo + substantivo (regra de “e-wan vene”, PAU08 ex. 13);
 * - “Peshe vena.” MONTADA: substantivo + adjetivo (regra de “mapu turu”, PAU03 ex. 09);
 * - “Atsa shuy.”, “Yuma pitxã.” (CTY 74 e 79); “Mariri!” (palavra do ISA e de GIL99).
 *
 * ywn-h2 (A1.2): reconta o primeiro conto de VAK (os jabutis, o balanço de cipó e a onça). Todas as falas
 * em yawanawá são citadas do livro, com a tradução do próprio livro: “Ē nika.” (p. 8); “Hukãwe!” (p. 10,
 * “Vamos!”); “Mã awea waĩ?” (p. 13); “Txashē, nũ iskuti ikirã.” (p. 13); “Ha! Eve nanea, txai.” (p. 21);
 * “Txashē, nũ tsua ũĩyama.” (p. 21); “Txashē, nuke tetxiwe!” (p. 28, “venha nos emendar”). As respostas
 * erradas reaproveitam essas mesmas falas fora de lugar.
 */
export const STORIES_YWN: StorySeed[] = [
  {
    id: 'ywn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txai, no rio Gregório',
    emoji: '🛶',
    summary: 'Você chega de canoa a uma aldeia yawanawá no rio Gregório, e um morador te recebe chamando de “txai”.',
    cultural_context:
      'Os Yawanawá vivem na Terra Indígena Rio Gregório, em Tarauacá (Acre). “Txai” é a palavra para o primo cruzado, segundo a antropóloga Laura Pérez Gil (1999), e também uma forma de tratamento: o livro dos professores yawanawá chama de “txai” Terri Aquino, que passou pela aldeia em 1973 e falou do direito do povo à sua terra. A macaxeira assada e o peixe cozido estão entre as comidas descritas no mesmo livro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Txai!',
        translation: 'Primo!',
        emoji: '🛶',
        choices: [
          { text: 'Txai! Ē nukua.', translation: 'Primo! Eu cheguei.', next: 'casa' },
          {
            text: 'Yumãi!',
            translation: 'Onça!',
            wrong: 'Não tem onça nenhuma: o morador só te cumprimentou. Devolva o tratamento e diga que chegou: “Txai! Ē nukua.”.',
          },
        ],
      },
      casa: {
        text: 'Ewan peshe.',
        translation: 'Minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'Peshe vena.', translation: 'Casa nova.', next: 'comida' },
          {
            text: 'Ē nukua.',
            translation: 'Eu cheguei.',
            wrong: 'Isso você já disse. Ele está mostrando a casa: elogie, com o adjetivo depois do nome, “Peshe vena.” (casa nova).',
          },
        ],
      },
      comida: {
        text: 'Atsa shuy.',
        translation: 'Macaxeira assada.',
        emoji: '🍠',
        choices: [
          { text: 'Yuma pitxã.', translation: 'Peixe cozido.', next: 'final' },
          {
            text: 'Ewan peshe.',
            translation: 'Minha casa.',
            wrong: 'A casa é dele, e agora ele está oferecendo comida. Responda com outro prato: “Yuma pitxã.” (peixe cozido).',
          },
        ],
      },
      final: {
        text: 'Mariri!',
        translation: 'Festa!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Txai, no rio Gregório',
          message: 'Você foi recebido como “txai”, conheceu a casa e comeu macaxeira assada e peixe cozido. À noite tem mariri, a festa de canto e dança.',
        },
      },
    },
    glossary: [
      ['txai', 'primo cruzado; forma de tratamento'],
      ['ē nukua', 'eu cheguei'],
      ['ewan', 'meu, minha'],
      ['peshe', 'casa'],
      ['vena', 'novo'],
      ['atsa shuy', 'macaxeira assada'],
      ['yuma pitxã', 'peixe cozido'],
    ],
  },
  {
    id: 'ywn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Os jabutis e a onça',
    emoji: '🐢',
    summary: 'Um velho conta à noite o conto dos jabutis que brincavam de balanço de cipó, e da onça que quis brincar também.',
    cultural_context:
      'Este é o primeiro conto do livro “Vakehu Shenipahu” (2016), contado pelo pajé Tata Txanu Natasheni. Os jabutis andavam em bando e brincavam de balanço de cipó num penhasco, batendo os cascos num pé de tucum. A onça pintada quis brincar, se espetou nos espinhos e morreu. O irmão dela veio perguntar, e os jabutis mentiram. Desde então, diz o conto, cada jabuti anda sozinho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ē nika.',
        translation: 'Assim eu escutei.',
        emoji: '🔥',
        choices: [
          { text: 'Hukãwe!', translation: 'Vamos! (os jabutis, indo para o balanço)', next: 'balanco' },
          {
            text: 'Txashē, nũ tsua ũĩyama.',
            translation: 'Txashē, nós não vimos.',
            wrong: 'Essa fala é do fim do conto. Comece com os jabutis indo brincar: “Hukãwe!” (vamos!).',
          },
        ],
      },
      balanco: {
        text: 'Mã awea waĩ?',
        translation: 'O que vocês estão fazendo? (pergunta a onça)',
        emoji: '🐆',
        choices: [
          { text: 'Txashē, nũ iskuti ikirã.', translation: 'Txashē, estamos brincando de balanço.', next: 'irmao' },
          {
            text: 'Hukãwe!',
            translation: 'Vamos!',
            wrong: 'A onça fez uma pergunta. Responda como os jabutis: “Txashē, nũ iskuti ikirã.” (estamos brincando de balanço).',
          },
        ],
      },
      irmao: {
        text: 'Ha! Eve nanea, txai.',
        translation: 'Meus primos! (o irmão da onça, procurando por ela)',
        emoji: '🐾',
        choices: [
          { text: 'Txashē, nũ tsua ũĩyama.', translation: 'Txashē, nós não vimos.', next: 'final' },
          {
            text: 'Mã awea waĩ?',
            translation: 'O que vocês estão fazendo?',
            wrong: 'Quem pergunta agora é a onça. No conto, os jabutis disfarçam: “Txashē, nũ tsua ũĩyama.” (nós não vimos).',
          },
        ],
      },
      final: {
        text: 'Txashē, nuke tetxiwe!',
        translation: 'Txashē, venha nos emendar! (os jabutis, pedindo ajuda ao maribondo)',
        emoji: '🐢',
        ending: {
          tone: 'bom',
          title: 'Os jabutis e a onça',
          message: 'A onça descobriu a mentira e desmontou os jabutis, mas o maribondo os emendou, com as partes trocadas. Desde então, diz o conto, cada jabuti anda sozinho na mata.',
        },
      },
    },
    glossary: [
      ['shawe', 'jabuti'],
      ['yumãi', 'onça'],
      ['txashē', 'como os jabutis se chamam no conto'],
      ['nũ', 'nós'],
      ['ũĩ', 'ver'],
      ['-ma', 'não'],
      ['txai', 'primo'],
    ],
  },
];
