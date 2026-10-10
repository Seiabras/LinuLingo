import type { LanguageVariant } from '../types';

/**
 * Os dialetos do bengali (decisão do dono, 10/10/2026): Bangladesh (o padrão do curso, que usa a
 * bandeira do país) e a Índia (Bengala Ocidental, com Calcutá). A língua escrita é a mesma; mudam
 * palavras do dia a dia (muitas de origem árabe e persa em Bangladesh, de origem sânscrita na Índia),
 * os cumprimentos e os nomes da família. Vocabulário no formato [Bangladesh, Índia, explicação,
 * nota]. Como o curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em inglês e em bengali («Bengali language», «Bengali dialects», «Bengali Language
 * Movement», «International Mother Language Day», «Durga Puja», consultadas em 10/10/2026).
 */
export const VARIANTS_BN: LanguageVariant[] = [
  {
    code: 'bn-BD',
    country: 'BGD',
    kind: 'dialeto',
    name: 'Bengali de Bangladesh',
    flag: '🇧🇩',
    summary: 'O padrão do curso: o bengali de Bangladesh, a língua oficial do país, com a mesma escrita e a mesma gramática da Índia e as palavras do dia a dia de Daca.',
    card: {
      id: 'bn-bd-c1',
      title: 'A língua que tem um dia no mundo',
      emoji: '🇧🇩',
      history:
        'O bengali é a língua de cerca de 270 milhões de pessoas, em Bangladesh e no leste da Índia. Quando Bangladesh ainda era o Paquistão Oriental, o governo quis fazer do urdu a única língua oficial; em 21 de fevereiro de 1952, estudantes de Daca que protestavam pelo bengali foram mortos pela polícia. O Movimento da Língua levou à independência de 1971, e em 1999 a UNESCO fez do 21 de fevereiro o Dia Internacional da Língua Materna. A língua escrita padrão é a mesma dos dois lados da fronteira.',
      culture_tip:
        'Em Bangladesh, o cumprimento mais comum é “আসসালামু আলাইকুম” (assalamu alaikum), e a despedida, “আল্লাহ হাফেজ” (Allah hafez). No ano-novo bengali, o Pohela Boishakh (14 de abril), Daca se enche de roupas vermelhas e brancas e da Mangal Shobhajatra, a procissão que a UNESCO reconheceu em 2016.',
      grammar_why:
        'As palavras de Bangladesh que o curso usa: পানি (pani, água), গোসল (gosol, banho), দাওয়াত (dawat, convite), খালা (khala, tia materna). Na Índia, cada uma tem outra palavra, de origem sânscrita.',
      grammar_examples: [
        ['এক গ্লাস পানি দিন।', 'Me dê um copo de água. (ek glas pani din)'],
        ['আসসালামু আলাইকুম!', 'Olá! (que a paz esteja com você)'],
        ['আমার খালা ঢাকায় থাকেন।', 'A minha tia mora em Daca. (amar khala Dhakay thaken)'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── ÍNDIA ─────────────────────────────
  {
    code: 'bn-IN',
    country: 'IND',
    kind: 'dialeto',
    speechLocale: 'bn-IN',
    name: 'Bengali da Índia (Bengala Ocidental)',
    flag: '🇮🇳',
    summary:
      'O bengali da Índia, de Calcutá e de Bengala Ocidental: a mesma escrita e a mesma gramática de Bangladesh, com palavras de origem sânscrita no lugar das árabes e persas (জল × পানি, স্নান × গোসল) e outros nomes para a família.',
    card: {
      id: 'bn-in-c1',
      title: 'জল ou পানি?',
      emoji: '🪔',
      history:
        'Bengala foi dividida em 1947: a parte oeste ficou com a Índia (hoje o estado de Bengala Ocidental) e a leste virou o Paquistão Oriental, depois Bangladesh. A língua escrita padrão, o “চলিত ভাষা”, tem como base o falar de Calcutá e da região de Nadia, e é a mesma nos dois países. Rabindranath Tagore, de Calcutá, primeiro não europeu a ganhar o Nobel de Literatura (1913), escreveu os hinos nacionais da Índia e de Bangladesh. Na Índia, o bengali é uma das 22 línguas reconhecidas pela Constituição e a segunda mais falada do país.',
      culture_tip:
        'A grande festa de Calcutá é a Durga Puja, em outubro, quando a cidade se enche de “প্যান্ডেল” (pandal), templos temporários com imagens da deusa Durga; a UNESCO a reconheceu em 2021. O cumprimento mais comum é “নমস্কার” (nomoshkar), com as mãos juntas, e o doce mais famoso, o “রসগোল্লা” (roshogolla).',
      grammar_why:
        'A gramática é a mesma de Bangladesh; mudam palavras do dia a dia: (1) জল (jol, água) no lugar de পানি; (2) স্নান (snan, banho) no lugar de গোসল; (3) নিমন্ত্রণ (nimontron, convite) no lugar de দাওয়াত; (4) os nomes da família: মাসি (mashi, tia materna) no lugar de খালা, পিসি (pishi, tia paterna) no lugar de ফুপু, বৌদি (boudi, cunhada) no lugar de ভাবি; (5) o cumprimento নমস্কার no lugar de আসসালামু আলাইকুম.',
      grammar_examples: [
        ['এক গ্লাস জল দিন।', 'Me dê um copo de água. (ek glas jol din) (Bangladesh: পানি)'],
        ['নমস্কার! কেমন আছেন?', 'Olá! Como vai? (nomoshkar! kemon achhen?)'],
        ['আমার মাসি কলকাতায় থাকেন।', 'A minha tia mora em Calcutá. (amar mashi Kolkatay thaken) (Bangladesh: খালা)'],
        ['আমি স্নান করব।', 'Vou tomar banho. (ami snan korbo) (Bangladesh: গোসল করব)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A pronúncia-padrão da Índia é a de Calcutá, base da língua escrita.',
      'Em Bangladesh, muitos falares regionais pronunciam o “চ” e o “ছ” perto de “ts” e “s”; em Calcutá, são “tch” e “tchh”.',
      'As palavras árabes e persas são menos usadas na Índia, e as sânscritas, mais.',
      'A voz do app é a do bengali da Índia, o que ajuda a ouvir o sotaque de Calcutá.',
    ],
    vocab: [
      ['পানি', 'জল', 'água', 'pani × jol'],
      ['গোসল', 'স্নান', 'banho', 'gosol × snan'],
      ['দাওয়াত', 'নিমন্ত্রণ', 'convite', 'dawat × nimontron'],
      ['খালা', 'মাসি', 'tia materna', 'khala × mashi'],
      ['ফুপু', 'পিসি', 'tia paterna', 'phupu × pishi'],
      ['ভাবি', 'বৌদি', 'cunhada (mulher do irmão mais velho)', 'bhabi × boudi'],
      ['দুলাভাই', 'জামাইবাবু', 'cunhado (marido da irmã)', 'dulabhai × jamaibabu'],
      ['মরিচ', 'লঙ্কা', 'pimenta', 'morich × lonka'],
      ['আসসালামু আলাইকুম', 'নমস্কার', 'olá', 'o cumprimento muçulmano × o hindu'],
    ],
    stories: [
      {
        id: 'bn-h5',
        variant: 'bn-IN',
        level: 'A2.1',
        cefr: 'A2',
        title: 'কলকাতায় এক গ্লাস জল',
        emoji: '💧',
        summary: 'Em Calcutá, Linu visita a família da amiga Rina e pede “পানি”, como aprendeu em Daca; a família ri e ensina o “জল” de Bengala Ocidental.',
        cultural_context:
          'O bengali de Bangladesh e o da Índia são a mesma língua, mas algumas palavras do dia a dia mudam: água é পানি (pani) em Bangladesh e জল (jol) em Calcutá; tia é খালা (khala) de um lado e মাসি (mashi) do outro.',
        start: 'start',
        glossary: [
          ['জল', 'água, na Índia (jol)'],
          ['পানি', 'água, em Bangladesh (pani)'],
          ['মাসি', 'tia materna, na Índia (mashi)'],
          ['নমস্কার', 'olá (nomoshkar)'],
        ],
        nodes: {
          start: {
            emoji: '🏠',
            text: 'লিনু কলকাতায় রিনার বাড়িতে গেল। রিনার মাসি বললেন, “নমস্কার! এসো, বসো।”',
            translation: 'Linu foi à casa da Rina em Calcutá. A tia da Rina disse: “Olá! Entre, sente-se.”',
            choices: [
              { text: '“নমস্কার! এক গ্লাস পানি পাব?”', translation: '“Olá! Posso tomar um copo de água?”', next: 'pani' },
            ],
          },
          pani: {
            emoji: '😄',
            text: 'রিনা হাসল। “এখানে আমরা ‘জল’ বলি। ঢাকায় বলে ‘পানি’।” মাসি এক গ্লাস জল আনলেন।',
            translation: 'Rina riu. “Aqui a gente diz ‘jol’. Em Daca dizem ‘pani’.” A tia trouxe um copo de água.',
            choices: [
              { text: '“ধন্যবাদ, মাসি! জল খুব ঠান্ডা।”', translation: '“Obrigado, tia! A água está bem gelada.”', next: 'final_bom' },
              {
                text: '“জল কী? আমি পানি চাই!”',
                translation: '“O que é jol? Eu quero pani!”',
                wrong: 'জল (jol) e পানি (pani) são a mesma coisa: água. Em Calcutá se diz জল.',
              },
            ],
          },
          final_bom: {
            emoji: '🪔',
            text: 'মাসি খুশি হলেন। “তুমি তো কলকাতার মতো কথা বলছ!” রিনা রসগোল্লা নিয়ে এল।',
            translation: 'A tia ficou contente. “Você já está falando como alguém de Calcutá!” Rina trouxe roshogolla.',
            ending: {
              tone: 'bom',
              title: 'জল আর পানি',
              message: 'Você aprendeu a diferença entre o bengali de Bangladesh e o da Índia: পানি × জল, খালা × মাসি e o cumprimento নমস্কার.',
            },
          },
        },
      },
      {
        id: 'bn-h6',
        variant: 'bn-IN',
        level: 'A2.2',
        cefr: 'A2',
        title: 'দুর্গাপূজার প্যান্ডেল',
        emoji: '🎉',
        summary: 'Na Durga Puja, Linu sai com Rina e a cunhada dela, Boudi, para visitar os pandais de Calcutá à noite.',
        cultural_context:
          'A Durga Puja, em outubro, é a maior festa de Calcutá: centenas de “প্যান্ডেল” (pandais), templos temporários com imagens da deusa Durga, enchem a cidade, e as famílias passam a noite visitando um por um. A UNESCO reconheceu a festa como Patrimônio Imaterial em 2021.',
        start: 'start',
        glossary: [
          ['দুর্গাপূজা', 'Durga Puja, a festa da deusa Durga'],
          ['প্যান্ডেল', 'pandal, templo temporário'],
          ['বৌদি', 'cunhada, na Índia (boudi)'],
          ['ঠাকুর', 'imagem da deusa (thakur)'],
        ],
        nodes: {
          start: {
            emoji: '🌃',
            text: 'আজ দুর্গাপূজা। রিনা বলল, “চলো, বৌদির সঙ্গে প্যান্ডেল দেখতে যাই!”',
            translation: 'Hoje é Durga Puja. Rina disse: “Vamos ver os pandais com a minha cunhada!”',
            choices: [
              { text: '“বৌদি কে?”', translation: '“Quem é Boudi?”', next: 'boudi' },
            ],
          },
          boudi: {
            emoji: '👩',
            text: 'রিনা বলল, “বৌদি আমার দাদার স্ত্রী। ঢাকায় বলে ‘ভাবি’।” তারা অনেক প্যান্ডেলে গেল। একটা প্যান্ডেলে খুব বড় ঠাকুর।',
            translation: 'Rina disse: “Boudi é a mulher do meu irmão mais velho. Em Daca dizem ‘bhabi’.” Eles foram a muitos pandais. Num deles, a imagem da deusa é enorme.',
            choices: [
              {
                text: '“বৌদি মানে দাদার স্ত্রী!”',
                translation: '“Boudi quer dizer a mulher do irmão mais velho!”',
                next: 'final_bom',
              },
              {
                text: '“বৌদি মানে রিনার মা!”',
                translation: '“Boudi quer dizer a mãe da Rina!”',
                wrong: 'বৌদি (boudi) é a cunhada, a mulher do irmão mais velho; em Bangladesh se diz ভাবি (bhabi).',
              },
            ],
          },
          final_bom: {
            emoji: '🪔',
            text: 'রাত দুটোয় তারা বাড়ি ফিরল। বৌদি বলল, “কাল আরও প্যান্ডেল দেখব!”',
            translation: 'Às duas da manhã eles voltaram para casa. Boudi disse: “Amanhã a gente vê mais pandais!”',
            ending: {
              tone: 'bom',
              title: 'Uma noite de pandais',
              message: 'Você viveu a Durga Puja de Calcutá e aprendeu প্যান্ডেল, ঠাকুর e বৌদি (cunhada), o ভাবি de Bangladesh.',
            },
          },
        },
      },
    ],
  },
];
