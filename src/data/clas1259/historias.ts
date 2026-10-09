import type { StorySeed } from '../types';

/**
 * Histórias interativas do árabe clássico/corânico — uma por nível (A1.1 e A1.2), pacote incompleto.
 * Cenários históricos reais, não inventados: a compilação escrita do Alcorão por Zayd ibn Thabit, sob
 * os califas Abu Bakr e Uthman (Wikipédia em inglês, "Uthmanic codex"), e a tradição oral de
 * memorização (hifz) que veio antes dela, com memorizadores citados nas fontes islâmicas como Ubayy
 * ibn Ka'b, Abdullah ibn Mas'ud, Mu'adh ibn Jabal e o próprio Zayd ibn Thabit (fontes citadas via
 * WebSearch em 09/10/2026: resumo de WikiShia/al-Suyuti sobre os memorizadores do tempo do profeta).
 *
 * Diferente de outros pacotes históricos deste app, NENHUMA linha em árabe destas histórias foi
 * inventada: cada frase dita por um personagem (inclusive o Linu) é um versículo real ou um
 * fragmento real de um versículo, já citado em vocabulario.ts/gramatica.ts/curriculo.ts. As escolhas
 * "erradas" também são versículos REAIS do pacote, só usados fora de contexto (igual outros pacotes
 * históricos já fazem com frases gramaticalmente corretas, mas fora de lugar) — nenhuma é uma frase
 * sem sentido ou gramaticalmente inválida.
 */
export const STORIES_CLAS1259: StorySeed[] = [
  {
    id: 'clas1259-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Com Zayd ibn Thabit, confirmando a Fátiha',
    emoji: '✍️',
    summary: 'Você ajuda Zayd ibn Thabit a confirmar, versículo por versículo, a sura Al-Fátiha para a compilação oficial do Alcorão.',
    cultural_context:
      'Zayd ibn Thabit (c. 611-665) foi um dos escribas do profeta Muhammad e liderou a compilação escrita do Alcorão sob os califas Abu Bakr e, depois, Uthman. Seu método era rigoroso: só aceitava um versículo por escrito com o testemunho de duas pessoas que o tivessem memorizado E visto escrito diretamente a partir do profeta (Wikipédia em inglês, "Uthmanic codex").',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'Em nome de Deus, o Misericordioso, o Clemente (1:1).',
        emoji: '📜',
        choices: [
          { text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'Louvado seja Deus, Senhor dos mundos (1:2 — o versículo seguinte).', next: 'meio' },
          { text: 'قُلْ هُوَ اللَّهُ أَحَدٌ', translation: 'Diz: Ele é Deus, o Único (112:1).', wrong: 'Esse é o início de OUTRA sura, Al-Ikhlás — não o versículo seguinte da Fátiha. Continue com "الْحَمْدُ لِلَّهِ..." (1:2).' },
        ],
      },
      meio: {
        text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'Louvado seja Deus, Senhor dos mundos (1:2).',
        emoji: '📖',
        choices: [
          { text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guia-nos ao caminho reto (1:6 — mais adiante na mesma sura).', next: 'final_bom' },
          { text: 'وَالشَّمْسِ وَضُحَاهَا', translation: 'Pelo sol e seu brilho matinal (91:1).', wrong: 'Esse versículo é de OUTRA sura, Ash-Shams — não continua a Fátiha. Tente "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" (1:6).' },
        ],
      },
      final_bom: {
        text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translation: 'Guia-nos ao caminho reto (1:6).',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Versículo confirmado!',
          message: 'Zayd ibn Thabit aceita a confirmação: dois versículos da Fátiha, verificados e prontos para o exemplar oficial.',
        },
      },
    },
    glossary: [
      ['بسم الله الرحمن الرحيم', 'em nome de Deus, o Misericordioso, o Clemente (1:1)'],
      ['الحمد لله رب العالمين', 'louvado seja Deus, Senhor dos mundos (1:2)'],
      ['اهدنا الصراط المستقيم', 'guia-nos ao caminho reto (1:6)'],
    ],
  },
  {
    id: 'clas1259-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Recitando com Ubayy ibn Ka\'b',
    emoji: '🎙️',
    summary: 'Você pratica a memorização (hifz) de An-Nas e Al-Qadr com Ubayy ibn Ka\'b, um dos primeiros e mais respeitados memorizadores do Alcorão.',
    cultural_context:
      'Ubayy ibn Ka\'b foi um dos companheiros do profeta Muhammad mais citados nas fontes islâmicas como memorizador e professor do Alcorão, ao lado de Abdullah ibn Mas\'ud, Mu\'adh ibn Jabal e Zayd ibn Thabit. A tradição de memorização oral (hifz) veio ANTES da compilação escrita, e suras curtas como An-Nas e Al-Qadr eram — e ainda são — algumas das primeiras que se ensina a recitar de cor.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        translation: 'Diz: busco refúgio no Senhor das pessoas (114:1).',
        emoji: '🗣️',
        choices: [
          { text: 'مَلِكِ النَّاسِ', translation: 'O Rei das pessoas (114:2 — continua a cadeia de idafa).', next: 'meio' },
          { text: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', translation: 'Em verdade, Nós o revelamos na Noite do Decreto (97:1).', wrong: 'Esse versículo é de OUTRA sura, Al-Qadr — não continua An-Nas. A cadeia "رَبِّ النَّاسِ" continua com "مَلِكِ النَّاسِ" (114:2).' },
        ],
      },
      meio: {
        text: 'مَلِكِ النَّاسِ',
        translation: 'O Rei das pessoas (114:2).',
        emoji: '👑',
        choices: [
          { text: 'إِلٰهِ النَّاسِ', translation: 'O Deus das pessoas (114:3 — a terceira e última palavra da cadeia).', next: 'final_bom' },
          { text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'Louvado seja Deus, Senhor dos mundos (1:2).', wrong: 'Esse versículo é da Fátiha, não de An-Nas. A cadeia desta sura termina com "إِلٰهِ النَّاسِ" (114:3).' },
        ],
      },
      final_bom: {
        text: 'إِلٰهِ النَّاسِ',
        translation: 'O Deus das pessoas (114:3).',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Uma sura inteira, de cor!',
          message: 'Ubayy ibn Ka\'b sorri: você recitou a cadeia "رَبِّ، مَلِكِ، إِلٰهِ النَّاسِ" sem errar — a mesma técnica usada para ensinar crianças há mais de catorze séculos.',
        },
      },
    },
    glossary: [
      ['قل أعوذ برب الناس', 'diz: busco refúgio no Senhor das pessoas (114:1)'],
      ['ملك الناس', 'o Rei das pessoas (114:2)'],
      ['إله الناس', 'o Deus das pessoas (114:3)'],
    ],
  },
];
