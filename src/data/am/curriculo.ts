import type { UnitSeed } from '../types';

/**
 * Trilha do amárico: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 * Fontes: Wikipedia (artigo “Amharic” e “Amharic grammar” — fatos sobre a língua, o fidel, a
 * cerimônia do café, a tabela da cópula ነኝ/ነህ/ነሽ/ነው/ናት/ነን/ናችሁ/ናቸው), Omniglot (frases de
 * cumprimento e despedida, phrases/amharic.php), Wiktionary (gênero e sentido de cada palavra
 * usada nos exemplos).
 */
export const UNITS_AM: UnitSeed[] = [
  {
    id: 'am-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ሰላም! የመጀመሪያ እርምጃዎች',
    emoji: '👋',
    card: {
      id: 'am-c1',
      title: 'A língua do planalto etíope',
      emoji: '🇪🇹',
      history:
        'O amárico pertence ao ramo semítico-etiópico da família afro-asiática — é parente do árabe, do hebraico e do tigrínia; o oromo, também falado na Etiópia, é da mesma família afro-asiática, mas de outro ramo, o cuxítico (um parentesco bem mais distante). É a língua oficial de trabalho do governo federal etíope e a segunda língua semítica mais falada do mundo, atrás só do árabe, com cerca de 32 milhões de falantes nativos. A Etiópia nunca foi colonizada de fato (resistiu à invasão italiana de 1935–1941), e por isso o amárico manteve sua própria escrita, o fidel, em vez de adotar o alfabeto latino como quase toda a África.',
      culture_tip:
        'A cerimônia do café (buna) é um ritual social central: os grãos são torrados, moídos e coados na hora, em três rodadas sucessivas, enquanto os presentes conversam — recusar participar pode soar indelicado. Lembre-se: a palavra “café” em si veio do árabe/turco para o português, mas o amárico guardou seu próprio nome para a bebida, ቡና (buna), de uma raiz local.',
      grammar_why:
        'O amárico tem um “é” (a cópula) que muda com quem fala e com o gênero: “ነኝ” (eu sou), “ነህ” (tu és, para homem), “ነሽ” (tu és, para mulher), “ነው” (ele é / isto é) e “ናት” (ela é). “እሱ መምህር ነው” (Ele é professor) e “እሷ መምህር ናት” (Ela é professora) mudam só a cópula no fim.',
      grammar_examples: [
        ['ሰላም! ስሜ ሊኑ ነው።', 'Oi! Meu nome é Linu.'],
        ['እንደምን አለህ?', 'Como você está? (para homem)'],
        ['እሱ መምህር ነው።', 'Ele é professor.'],
        ['እሷ መምህር ናት።', 'Ela é professora.'],
      ],
      character_guide: [
        ['ቀ ጠ ጨ ጸ', 'ejetivas: um som seco, fechado na garganta antes de soltar o ar — o maior desafio de pronúncia para quem fala português', 'ቀይ (vermelho)'],
        ['ሀ / ሐ / ኀ', 'três sinais diferentes que hoje soam todos como “h”', 'ሰላም (olá)'],
        ['ሰ / ሠ', 'dois sinais diferentes que hoje soam ambos como “s”', 'ሰላም (olá)'],
        ['አ / ዐ', 'dois sinais diferentes para a mesma pausa glotal', 'ዓይን (olho)'],
        ['7 ordens', 'cada sinal muda de forma para cada uma das 7 vogais (ex.: ለ lä, ሉ lu, ሊ li, ላ la, ሌ le, ል lə, ሎ lo)', 'ልብ (coração)'],
      ],
    },
    lessons: [
      {
        id: 'am-u1-l1',
        title: 'ሰላም, አመሰግናለሁ, ቻው!',
        kind: 'licao',
        words: ['ሰላም', 'አመሰግናለሁ', 'እባክህ', 'ይቅርታ', 'ቻው', 'ደህና'],
        cloze: [
          { sentence: '___! ደህና ነህ?', answer: 'ሰላም', options: ['ሰላም', 'አመሰግናለሁ', 'ቻው'], translation: 'Oi! Você está bem?' },
          { sentence: 'ውሃ፣ ___!', answer: 'እባክህ', options: ['እባክህ', 'አመሰግናለሁ', 'ይቅርታ'], translation: 'Água, por favor!' },
          { sentence: '___! ደህና ሁን።', answer: 'ቻው', options: ['ቻው', 'ሰላም', 'ደህና'], translation: 'Tchau! Fique bem.' },
        ],
        voice: {
          bot: 'ሰላም! እንደምን አለህ?',
          botTranslation: 'Oi! Como você está?',
          expected: ['ደህና ነኝ፣ አመሰግናለሁ።', 'ደህና ነኝ', 'አመሰግናለሁ'],
          hint: 'Responda que está bem e agradeça: “ደህና ነኝ፣ አመሰግናለሁ።”.',
        },
        communityPrompt: 'Escreva três expressões em amárico: um cumprimento (“ሰላም”), um agradecimento (“አመሰግናለሁ”) e uma despedida (“ቻው”).',
      },
      {
        id: 'am-u1-l2',
        title: 'እኔ, አንተ, አንቺ, እሱ, እሷ',
        kind: 'licao',
        words: ['እኔ', 'አንተ', 'እሱ', 'እሷ', 'ስም', 'ነው'],
        cloze: [
          { sentence: '___ መምህር ነው።', answer: 'እሱ', options: ['እሱ', 'እሷ', 'እኔ'], translation: 'Ele é professor.' },
          { sentence: '___ መምህር ናት።', answer: 'እሷ', options: ['እሷ', 'እሱ', 'አንተ'], translation: 'Ela é professora.' },
          { sentence: 'ስምህ ማን ___?', answer: 'ነው', options: ['ነው', 'ናት', 'ነኝ'], translation: 'Qual é o seu nome? (lit. teu nome quem é?)' },
        ],
        voice: {
          bot: 'ሰላም! ስምህ ማን ነው?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['ስሜ ሊኑ ነው።', 'ስሜ', 'ነው'],
          hint: 'Diga seu nome com “ስሜ … ነው።”.',
        },
        communityPrompt: 'Apresente-se em amárico: diga seu nome com “ስሜ … ነው።”.',
      },
      {
        id: 'am-u1-l3',
        title: 'ፈተና: የመጀመሪያ እርምጃዎች',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ሰላም! ስምህ ማን ነው? እንደምን አለህ?',
          botTranslation: 'Oi! Qual é o seu nome? Como você está?',
          expected: ['ሰላም! ስሜ ሊኑ ነው። ደህና ነኝ፣ አመሰግናለሁ።', 'ስሜ', 'ደህና ነኝ', 'ሰላም'],
          hint: 'Devolva o cumprimento (“ሰላም!”), diga seu nome com “ስሜ … ነው።” e responda “ደህና ነኝ፣ አመሰግናለሁ።”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“ሰላም”), nome (“ስሜ … ነው”) e como você está (“ደህና ነኝ”).',
      },
    ],
  },
  {
    id: 'am-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ቤተሰብ እና ቡና',
    emoji: '☕',
    card: {
      id: 'am-c2',
      title: 'A família e a cerimônia do café',
      emoji: '👪',
      history:
        'A família extensa é a base da vida social etíope tradicional, e compartilhar comida e café é a forma mais comum de receber alguém. A capital, አዲስ አበባ (Addis Abeba, “nova flor”), fundada em 1886, é hoje uma das maiores cidades da África e sede da União Africana.',
      culture_tip:
        'Ao receber ቡና (café) ou ሻይ (chá) como visita, aceitar é visto como gentileza; a cerimônia do café tradicionalmente tem três rodadas, servidas do mesmo bule de barro.',
      grammar_why:
        'Para apresentar alguém com “este é/esta é”, o amárico usa o demonstrativo “ይህ” seguido da cópula que concorda em gênero: “ይህ አባት ነው” (Este é o pai) para masculino, “ይህ እናት ናት” (Esta é a mãe) para feminino — a cópula muda, não o substantivo.',
      grammar_examples: [
        ['ይህ አባት ነው።', 'Este é o pai.'],
        ['ይህ እናት ናት።', 'Esta é a mãe.'],
        ['ውሃ፣ እባክህ።', 'Água, por favor.'],
        ['ቡና ወይም ሻይ?', 'Café ou chá?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'am-u2-l1',
        title: 'ቤተሰቤ',
        kind: 'licao',
        words: ['እናት', 'አባት', 'ወንድም', 'እህት', 'ልጅ', 'ጓደኛ'],
        cloze: [
          { sentence: 'ይህ ___ ነው።', answer: 'አባት', options: ['አባት', 'ልጅ', 'ወንድም'], translation: 'Este é o pai.' },
          { sentence: 'ይህ ___ ናት።', answer: 'እናት', options: ['እናት', 'እህት', 'ጓደኛ'], translation: 'Esta é a mãe.' },
          { sentence: 'ይህ ___ ነው።', answer: 'ወንድም', options: ['ወንድም', 'እህት', 'እናት'], translation: 'Este é o irmão.' },
        ],
        voice: {
          bot: 'ይህ ማን ነው?',
          botTranslation: 'Quem é este/esta?',
          expected: ['ይህ ወንድም ነው።', 'ወንድም', 'እህት'],
          hint: 'Responda com “ይህ … ነው/ናት።” e o nome do parente (አባት, እናት, ወንድም, እህት).',
        },
        communityPrompt: 'Descreva sua família em amárico: apresente um parente com “ይህ … ነው።” ou “ይህ … ናት።”.',
      },
      {
        id: 'am-u2-l2',
        title: 'ውሃ, ቡና እና ሻይ',
        kind: 'licao',
        words: ['ውሃ', 'ቡና', 'ሻይ', 'ወተት', 'እንጀራ', 'ዳቦ'],
        cloze: [
          { sentence: '___ ወይም ሻይ?', answer: 'ቡና', options: ['ቡና', 'ውሃ', 'ወተት'], translation: 'Café ou chá?' },
          { sentence: '___፣ እባክህ!', answer: 'ውሃ', options: ['ውሃ', 'ቡና', 'እንጀራ'], translation: 'Água, por favor!' },
          { sentence: 'እንጀራ እና ___።', answer: 'ዳቦ', options: ['ዳቦ', 'ወተት', 'ሻይ'], translation: 'Injera e pão.' },
        ],
        voice: {
          bot: 'ቡና ወይም ሻይ?',
          botTranslation: 'Café ou chá?',
          expected: ['ቡና፣ እባክህ።', 'ቡና', 'ሻይ'],
          hint: 'Escolha “ቡና” ou “ሻይ” e peça com “እባክህ”.',
        },
        communityPrompt: 'Escreva o que você gosta de comer e beber, usando “ውሃ”, “ቡና”, “ሻይ”, “እንጀራ” e “ዳቦ”.',
      },
      {
        id: 'am-u2-l3',
        title: 'ፈተና: ቤተሰብ እና ቡና',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ይህ ማን ነው? ቡና ወይም ሻይ?',
          botTranslation: 'Quem é este/esta? Café ou chá?',
          expected: ['ይህ እናት ናት። ቡና፣ እባክህ።', 'ነው', 'ናት', 'ቡና'],
          hint: 'Apresente um parente com “ይህ … ነው/ናት።” e escolha “ቡና” ou “ሻይ” com “እባክህ”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e o que você come e bebe, usando “ይህ … ነው/ናት” e “እባክህ”.',
      },
    ],
  },
];
