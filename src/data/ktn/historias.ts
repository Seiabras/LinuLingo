import type { StorySeed } from '../types';

/**
 * Histórias interativas do karitiana — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas combinam frases atestadas em pt.wikipedia.org/wiki/Língua_caritiana (citando Storto 1999,
 * Everett 2007 e Rocha 2014) com a regra documentada de que frases nominais em karitiana respondem a
 * uma pergunta com um substantivo “nu”, sem artigo — ver o cabeçalho de vocabulario.ts para a
 * explicação completa do método (nunca uma palavra ou regra nova inventada). Ambientadas na aldeia
 * Kyõwã e às margens do rio Candeias, na Terra Indígena Karitiana (RO).
 */
export const STORIES_KTN: StorySeed[] = [
  {
    id: 'ktn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Go i haap, Kyõwã!',
    emoji: '🏞️',
    summary: 'De manhã na aldeia Kyõwã, alguém cumprimenta você e pergunta pela sua família.',
    cultural_context:
      'Kyõwã, a maior e mais antiga aldeia Karitiana, significa “boca (sorriso) de criança” — fica a cerca de 100 km de Porto Velho e é dividida ao meio pelo igarapé Sapoti, afluente do rio Candeias. É comum cumprimentar quem chega com “Go i haap!” (bom dia) ou “Go i mõnh!” (boa noite).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Go i haap!',
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: 'Go i haap! Yryhon.', translation: 'Bom dia! Obrigado.', next: 'familia' },
          { text: 'Go i mõnh!', translation: 'Boa noite!', wrong: '“Go i mõnh” é a saudação da noite — de manhã, responda com “Go i haap!”.' },
        ],
      },
      familia: {
        text: 'Mãn. I sojt?',
        translation: 'Marido. A esposa dele?',
        emoji: '🤵',
        choices: [
          { text: 'I sojt.', translation: 'A esposa dele.', next: 'bicho' },
          { text: 'Ombyj.', translation: 'Avô, avó.', wrong: 'A pergunta foi sobre a esposa (sojt), não sobre o avô (ombyj). Responda “I sojt.”.' },
        ],
      },
      bicho: {
        text: 'Mõrãmõn onỹ?',
        translation: 'O que é aquilo ali?',
        emoji: '🤔',
        choices: [
          { text: 'Omãky.', translation: 'Onça.', next: 'final' },
          { text: "Pyse'an.", translation: 'Está bom.', wrong: 'Isso não nomeia o bicho. Responda só com o substantivo, sem artigo: “Omãky” (onça).' },
        ],
      },
      final: {
        text: "My'ari!",
        translation: 'Vamos!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Yryhon, Kyõwã!',
          message: 'Você cumprimentou, falou da família (marido e esposa) e nomeou um bicho à distância, sem artigo — uma conversa simples de manhã na aldeia Kyõwã.',
        },
      },
    },
    glossary: [
      ['Go i haap', 'bom dia'],
      ['Sojt', 'esposa'],
      ['Mõrãmõn', 'o quê?, quem?'],
      ['Omãky', 'onça'],
    ],
  },
  {
    id: 'ktn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Yj pyt ip, ese Candeias',
    emoji: '🐟',
    summary: 'Às margens do rio Candeias, depois de comer mandioca, você conta até cinco e nomeia um peixe.',
    cultural_context:
      'O rio Candeias é piscoso, e um dos principais rituais karitiana é a festa da jatuarana, celebrando a fartura desse peixe muito apreciado — pescado com rede, anzol, arco-e-flecha e também com timbó, um cipó que entorpece os peixes. A mandioca (gok), plantada em roças de coivara, é a base da alimentação do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ãn i-y gok-o hỹ?',
        translation: 'Você comeu a mandioca?',
        emoji: '🥔',
        choices: [
          { text: 'Ỹn naka-y-t gok.', translation: 'Eu comi a mandioca.', next: 'contagem' },
          { text: 'Yj pyt.', translation: 'Cinco (lit. “uma mão”).', wrong: 'Isso é um número, não responde se você comeu a mandioca. Responda “Ỹn naka-y-t gok.”.' },
        ],
      },
      contagem: {
        text: 'Mỹhĩn, sypõm, mỹnhỹm…?',
        translation: 'Um, dois, três… (pedindo para continuar a contagem)',
        emoji: '🖐️',
        choices: [
          { text: 'Otannỹmỹn, yj pyt.', translation: 'Quatro, cinco.', next: 'bicho' },
          { text: 'Omãky.', translation: 'Onça.', wrong: 'Isso é um bicho, não um número. Continue a contagem com “otannỹmỹn, yj pyt” (quatro, cinco).' },
        ],
      },
      bicho: {
        text: 'Mõrãmõn ka?',
        translation: 'O que é isso? (apontando um peixe)',
        emoji: '🐟',
        choices: [
          { text: 'Ip.', translation: 'Peixe.', next: 'final' },
          { text: 'Moroja.', translation: 'Cobra.', wrong: 'Isso é uma cobra (moroja), não o peixe. Responda “Ip.”.' },
        ],
      },
      final: {
        text: "My'ari!",
        translation: 'Vamos!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Yj pyt ip!',
          message: 'Você contou até cinco, falou que comeu mandioca (gok) e nomeou um peixe (ip) às margens do rio Candeias — onde os Karitiana celebram a fartura de peixe na festa da jatuarana.',
        },
      },
    },
    glossary: [
      ['Gok', 'mandioca'],
      ['Mỹhĩn', 'um'],
      ['Yj pyt', 'cinco (lit. “uma mão”)'],
      ['Ip', 'peixe'],
    ],
  },
];
