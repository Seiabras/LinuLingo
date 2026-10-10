import type { LanguageVariant } from '../types';

/**
 * Os dialetos do malaio (decisão do dono, 10/10/2026): a Malásia (o padrão do curso, o Bahasa
 * Malaysia) e o Brunei, onde o malaio-padrão é oficial e o malaio bruneano é a língua de todo dia.
 * Singapura ficou como sotaque, por ter pouca diferença documentada (dúvida guardada em
 * docs/duvidas-variedades.md). Vocabulário no formato [padrão, Brunei, explicação, nota]; nas
 * histórias, a narração segue o padrão e as falas trazem as palavras do Brunei. Como o curso ainda vai
 * até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em inglês («Brunei Malay», «Malaysian Malay», «Ambuyat», «Kampong Ayer», «Melayu
 * Islam Beraja», consultadas em 10/10/2026); o Dewan Bahasa dan Pustaka (Malásia) para o padrão.
 */
export const VARIANTS_MS: LanguageVariant[] = [
  {
    code: 'ms-MY',
    country: 'MYS',
    kind: 'dialeto',
    speechLocale: 'ms-MY',
    name: 'Malaio da Malásia (Bahasa Malaysia)',
    flag: '🇲🇾',
    summary: 'O padrão do curso: o malaio-padrão da Malásia, cuidado pelo Dewan Bahasa dan Pustaka, o da escola, do governo e da TV.',
    card: {
      id: 'ms-my-c1',
      title: 'Por que o malaio da Malásia?',
      emoji: '🇲🇾',
      history:
        'O malaio foi por séculos a língua do comércio nos portos do Sudeste Asiático, de Malaca às Molucas. Hoje é a língua nacional da Malásia, do Brunei e de Singapura, e a base do indonésio. Na Malásia, o padrão é cuidado desde 1956 pelo Dewan Bahasa dan Pustaka (Instituto de Língua e Literatura), e tem como base o falar de Johor e das ilhas Riau. A Malásia e a Indonésia combinaram uma ortografia comum em 1972, mas cada país tem as suas palavras e a sua pronúncia.',
      culture_tip:
        'Na Malásia, a mesa é de três tradições: malaia, chinesa e indiana, e o nasi lemak (arroz no leite de coco) é o prato nacional. Na festa do fim do Ramadã, o Hari Raya Aidilfitri, as famílias abrem as casas para os vizinhos de todas as religiões (o “rumah terbuka”). E ao apontar, usa-se o polegar, não o indicador.',
      grammar_why:
        'O padrão do curso: “saya” (eu), “tidak” (não), “ini” e “itu” (este, aquele), “ya” (sim), e o “a” do fim da palavra dito quase como um [ə] no falar de Kuala Lumpur e de Johor (“saya” soa “sayə”). No Brunei, muitas dessas palavras mudam.',
      grammar_examples: [
        ['Saya tidak tahu.', 'Eu não sei.'],
        ['Ini rumah saya.', 'Esta é a minha casa.'],
        ['Ya, kita pergi sekarang.', 'Sim, vamos agora.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── BRUNEI ─────────────────────────────
  {
    code: 'ms-BN',
    country: 'BRN',
    kind: 'dialeto',
    speechLocale: 'ms-MY',
    name: 'Malaio do Brunei',
    flag: '🇧🇳',
    summary:
      'O malaio do Brunei: o padrão é a língua oficial, mas a fala de todo dia é o malaio bruneano, com cerca de 320 mil falantes nativos, três vogais e palavras próprias: inda (não), awu (sim), ani (este), kitani (nós).',
    card: {
      id: 'ms-bn-c1',
      title: 'Inda, awu, kitani',
      emoji: '🕌',
      history:
        'O Brunei é um sultanato pequeno no norte da ilha de Bornéu, com uma das monarquias mais antigas do mundo ainda no poder. A língua oficial é o malaio-padrão, mas a língua de todo dia, falada por cerca de 320 mil pessoas como língua materna, é o malaio bruneano (Bahasa Melayu Brunei), que partilha cerca de 84% das palavras com o padrão. O país tem como filosofia oficial o MIB, “Melayu Islam Beraja” (malaio, islâmico e monárquico), e a língua malaia é parte central dessa identidade. O bruneano tem três variedades: a principal, a de Kampong Ayer e o kedayan.',
      culture_tip:
        'O prato nacional é o ambuyat, uma goma de amido de sagu que se enrola num garfo de bambu de duas pontas, o “candas”, e se mergulha num molho azedo e picante. Na capital, Bandar Seri Begawan, fica o Kampong Ayer, uma vila inteira construída sobre palafitas no rio, com escolas, mesquitas e lojas, ligada por barcos-táxi. E com o sultão e a família real usa-se uma linguagem de respeito própria, com palavras especiais.',
      grammar_why:
        'A gramática é a do malaio; mudam as palavras de todo dia e a pronúncia: (1) “inda” no lugar de “tidak” (não); (2) “awu” no lugar de “ya” (sim); (3) “ani” e “atu” no lugar de “ini” e “itu” (este, aquele); (4) os pronomes: “aku” (eu), “kitani” (nós, incluindo quem ouve), “awda” (você, formal); (5) palavras próprias: “siuk” (gostar, curtir), “cali” (engraçado), “kabat” (fechar).',
      grammar_examples: [
        ['Aku inda tahu.', 'Eu não sei. (padrão: Saya tidak tahu.)'],
        ['Ani rumah kitani.', 'Esta é a nossa casa. (padrão: Ini rumah kita.)'],
        ['Awu, siuk!', 'Sim, que legal! (padrão: Ya, seronok!)'],
        ['Kabat pintu atu.', 'Feche aquela porta. (padrão: Tutup pintu itu.)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O bruneano tem só três vogais, “i”, “a” e “u”: o [ə] do padrão vira “a” ou “u”.',
      'O “h” do começo da palavra cai: “hutan” (floresta) soa “utan”, “hitam” (preto) soa “itam”.',
      'O “r” é vibrado ou some no fim da sílaba, conforme a região.',
      'A melodia é própria, e um malaio da Malásia reconhece um bruneano logo.',
    ],
    vocab: [
      ['tidak', 'inda', 'não', 'a palavra mais conhecida do bruneano'],
      ['ya', 'awu', 'sim'],
      ['ini', 'ani', 'este, isto'],
      ['itu', 'atu', 'aquele, aquilo'],
      ['kita', 'kitani', 'nós (incluindo você)'],
      ['anda', 'awda', 'você (formal)', 'usado também nos documentos oficiais do Brunei'],
      ['dia', 'ia', 'ele, ela'],
      ['tutup', 'kabat', 'fechar'],
      ['lawak', 'cali', 'engraçado'],
      ['seronok, syok', 'siuk', 'legal, gostar'],
      ['hutan', 'utan', 'floresta', 'o “h” do começo cai'],
    ],
    stories: [
      {
        id: 'ms-h5',
        variant: 'ms-BN',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Ambuyat di Bandar',
        emoji: '🥢',
        summary: 'Em Bandar Seri Begawan, a amiga Aqilah convida Linu para comer ambuyat, o prato nacional do Brunei, e ensina as palavras do bruneano.',
        cultural_context:
          'O ambuyat é o prato nacional do Brunei: uma goma de amido de sagu que se enrola num garfo de bambu de duas pontas, o “candas”, e se mergulha num molho azedo, o “cacah”. No Brunei, a fala do dia a dia é o malaio bruneano: “inda” (não), “awu” (sim), “ani” (este).',
        start: 'start',
        glossary: [
          ['ambuyat', 'goma de sagu, o prato nacional'],
          ['candas', 'o garfo de bambu de duas pontas'],
          ['inda', 'não (padrão: tidak)'],
          ['awu', 'sim (padrão: ya)'],
          ['ani', 'este (padrão: ini)'],
          ['siuk', 'legal, gostar'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: 'Linu ada di Bandar Seri Begawan. Kawannya, Aqilah, bertanya: “Linu, awda sudah makan ambuyat?”',
            translation: 'Linu está em Bandar Seri Begawan. A amiga dele, Aqilah, pergunta: “Linu, você já comeu ambuyat?”',
            choices: [
              { text: '“Belum. Apa itu ambuyat?”', translation: '“Ainda não. O que é ambuyat?”', next: 'ambuyat' },
            ],
          },
          ambuyat: {
            emoji: '🥣',
            text: 'Aqilah ketawa: “Ani makanan kitani di Brunei! Mari, kitani makan.” Di restoran, pelayan membawa ambuyat dan sepasang candas.',
            translation: 'Aqilah ri: “É a nossa comida no Brunei! Vem, vamos comer.” No restaurante, o garçom traz o ambuyat e um par de candas.',
            choices: [
              { text: 'Linu memusing ambuyat dengan candas.', translation: 'Linu enrola o ambuyat no candas.', next: 'come' },
              {
                text: 'Linu makan ambuyat dengan sudu.',
                translation: 'Linu come o ambuyat de colher.',
                wrong: 'O ambuyat se come com o “candas”, o garfo de bambu de duas pontas: a goma se enrola nele e se mergulha no molho.',
              },
            ],
          },
          come: {
            emoji: '😋',
            text: 'Aqilah bertanya: “Sedap? Awda siuk?” Linu menjawab: “Sedap! Tapi inda mudah!”',
            translation: 'Aqilah pergunta: “Gostoso? Você gostou?” Linu responde: “Gostoso! Mas não é fácil!”',
            choices: [
              { text: '“Awu, aku siuk!”', translation: '“Sim, eu gostei!” (em bruneano)', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🇧🇳',
            text: 'Aqilah ketawa: “Bah, awda sudah pandai cakap Brunei!”',
            translation: 'Aqilah ri: “Olha, você já sabe falar bruneano!”',
            ending: {
              tone: 'bom',
              title: 'Awu, siuk!',
              message: 'Você comeu ambuyat e aprendeu o bruneano: awda, ani, kitani, inda, awu e siuk.',
            },
          },
        },
      },
      {
        id: 'ms-h6',
        variant: 'ms-BN',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Ke Kampong Ayer',
        emoji: '🛶',
        summary: 'Linu pega um barco-táxi para visitar a família de Aqilah no Kampong Ayer, a vila sobre a água de Bandar Seri Begawan.',
        cultural_context:
          'O Kampong Ayer é uma vila inteira sobre palafitas no rio Brunei, com casas, escolas e mesquitas ligadas por passarelas de madeira. Para chegar, pega-se um barco-táxi no cais. O Kampong Ayer tem até uma variedade própria do malaio bruneano.',
        start: 'start',
        glossary: [
          ['Kampong Ayer', 'a vila sobre a água'],
          ['perahu', 'barco'],
          ['atu', 'aquele (padrão: itu)'],
          ['inda', 'não'],
          ['kabat', 'fechar'],
        ],
        nodes: {
          start: {
            emoji: '🛶',
            text: 'Linu dan Aqilah naik perahu ke Kampong Ayer. Aqilah menunjuk: “Rumah nenek aku atu, yang warna biru.”',
            translation: 'Linu e Aqilah pegam um barco para o Kampong Ayer. Aqilah aponta: “A casa da minha avó é aquela, a azul.”',
            choices: [
              { text: 'Linu melihat rumah biru atas air.', translation: 'Linu olha a casa azul sobre a água.', next: 'avo' },
              {
                text: 'Linu fikir “atu” nama nenek Aqilah.',
                translation: 'Linu acha que “atu” é o nome da avó da Aqilah.',
                wrong: '“Atu” é “aquele”, como o “itu” do padrão. A Aqilah está apontando qual é a casa da avó.',
              },
            ],
          },
          avo: {
            emoji: '👵',
            text: 'Nenek Aqilah menunggu di jambatan kayu. Dia berkata: “Masuk, masuk! Kabat pintu, angin kuat.”',
            translation: 'A avó da Aqilah espera na passarela de madeira. Ela diz: “Entrem, entrem! Fechem a porta, o vento está forte.”',
            choices: [
              { text: 'Linu kabat pintu.', translation: 'Linu fecha a porta.', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🏘️',
            text: 'Nenek memberi kuih dan teh. Dia bertanya: “Awda siuk Kampong Ayer?” Linu menjawab: “Awu, siuk banar!”',
            translation: 'A avó serve doces e chá. Ela pergunta: “Você gostou do Kampong Ayer?” Linu responde: “Sim, gostei muito!”',
            ending: {
              tone: 'bom',
              title: 'Siuk banar!',
              message: 'Você visitou o Kampong Ayer e usou o bruneano: atu, kabat, awda, awu e siuk.',
            },
          },
        },
      },
    ],
  },
];
