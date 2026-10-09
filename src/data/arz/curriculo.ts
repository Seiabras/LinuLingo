import type { UnitSeed } from '../types';

/**
 * Trilha do árabe egípcio: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). Da A2.1 ao C2 chega depois.
 *
 * Fontes (consultadas em 02/10/2026): Wikipédia «Egyptian Arabic» (classificação, pronomes,
 * negação, perda de caso, amostras izzayyak/khalaṣ/kefaya), Wikipédia «Coptic calendar» e «Ful
 * medames» (contexto cultural), Wikcionário (entradas individuais citadas em vocabulario.ts).
 */
export const UNITS_ARZ: UnitSeed[] = [
  {
    id: 'arz-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'إزيك؟ الخطوات الأولى',
    emoji: '👋',
    card: {
      id: 'arz-c1',
      title: 'إزيك؟ — nem toda “árabe” é a mesma língua',
      emoji: '🇪🇬',
      history:
        'O árabe egípcio tem código próprio na ISO 639-3, “arz”, diferente do código do árabe padrão moderno, “ar”. A Wikipédia em inglês resume o motivo: apesar de os dois serem chamados de “árabe”, o árabe egípcio é a língua falada do dia a dia, sem status oficial no Egito (quem tem status oficial por lei é o árabe padrão) — mas é, segundo a mesma fonte, “a variedade mais falada e, de longe, a mais estudada do árabe”, entendida em quase todo o mundo árabe graças ao cinema e à música egípcios. A classificação dele é Afro-asiático > Semítico > Semítico ocidental > Semítico central > Árabe — a mesma árvore genealógica do árabe padrão (são “primos”, não a mesma língua com nomes diferentes), parecido com outros casos de línguas próximas que a ISO trata como códigos separados por falta de inteligibilidade mútua na fala.',
      culture_tip:
        'O cumprimento mais comum no Egito não é uma palavra fixa de “olá”: é perguntar “إزيك؟” — literalmente “como você está?” — que já funciona como “oi”. Para agradecer, “شكرا” é a palavra de sempre, mas o próprio Wikcionário registra que no dia a dia também se ouve “مرسي”, emprestado do francês “merci”.',
      grammar_why:
        'Duas coisas aparecem já nesta unidade e voltam o curso inteiro: o prefixo بـ (bi-) grudado no verbo para marcar o presente do dia a dia (algo que o árabe padrão não tem do mesmo jeito), e a negação مش, usada antes de adjetivos e nomes sem precisar de verbo nenhum — diferente de como o árabe padrão nega.',
      grammar_examples: [
        ['إزيك؟', 'Como você está?'],
        ['كويس، شكرا.', 'Bem, obrigado.'],
        ['أنا مش مصري.', 'Eu não sou egípcio.'],
        ['إنتي بتفهمي؟', 'Você entende? (falando com uma mulher)'],
      ],
      character_guide: [
        ['ق', 'nesta variante, vira uma parada na garganta (uma pausa brusca, sem nenhum som de “q” ou “k”)', 'قهوة (“ahwa”, café) — o ق que no árabe padrão soa “q” simplesmente sumiu'],
        ['ج', 'soa como o “g” de “gato”, não como “j”', 'جمل (“gamal”, camelo) — a Wikipédia registra essa pronúncia até na recitação formal feita por cairotas'],
        ['ث / ذ', 'viram “t” e “d”', 'no Cairo, ث vira ت e ذ vira د (ex.: a palavra clássica para “raposa”, com ث, sai como “t” no Cairo)'],
      ],
    },
    lessons: [
      {
        id: 'arz-u1-l1',
        title: 'إزيك؟ أيوه ولأ',
        kind: 'licao',
        words: ['إزيك', 'معلش', 'أيوه', 'لأ', 'شكرا', 'مش'],
        cloze: [
          { sentence: '___ النهارده؟', answer: 'إزيك', options: ['إزيك', 'شكرا', 'معلش'], translation: 'Como você está hoje?' },
          { sentence: 'إنت كويس؟ ___، أنا كويس.', answer: 'أيوه', options: ['أيوه', 'لأ', 'شكرا'], translation: 'Você está bem? Sim, eu estou bem.' },
          { sentence: 'أنا ___ مصري.', answer: 'مش', options: ['مش', 'أيوه', 'لأ'], translation: 'Eu não sou egípcio.' },
        ],
        voice: {
          bot: 'إزيك؟',
          botTranslation: 'Como você está?',
          expected: ['كويس، شكرا.', 'كويس', 'أيوه'],
          hint: 'Responda que está bem com “كويس” e agradeça com “شكرا”.',
        },
        communityPrompt: 'Escreva uma troca de cumprimento em árabe egípcio: pergunte “إزيك؟”, responda “كويس، شكرا” (ou “مش كويس”, se for o caso) e use “معلش” se alguém se desculpar.',
      },
      {
        id: 'arz-u1-l2',
        title: 'أنا، إنت، هو، هي',
        kind: 'licao',
        words: ['أنا', 'إنت', 'إنتي', 'هو', 'هي', 'إحنا'],
        cloze: [
          { sentence: '___ كويس.', answer: 'أنا', options: ['أنا', 'هو', 'هي'], translation: 'Eu estou bem.' },
          { sentence: '___ مين؟', answer: 'إنت', options: ['إنت', 'إنتي', 'هو'], translation: 'Quem é você? (falando com um homem)' },
          { sentence: '___ مصرية.', answer: 'هي', options: ['هي', 'هو', 'إحنا'], translation: 'Ela é egípcia.' },
        ],
        voice: {
          bot: 'إنت مين؟',
          botTranslation: 'Quem é você? (falando com um homem)',
          expected: ['أنا...', 'أنا'],
          hint: 'Responda “أنا” e diga seu nome.',
        },
        communityPrompt: 'Apresente-se em árabe egípcio: diga quem você é com “أنا” e pergunte o nome de alguém com “إنت مين؟” (a um homem) ou “إنتي مين؟” (a uma mulher).',
      },
      {
        id: 'arz-u1-l3',
        title: 'Test: إزيك؟',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'إزيك؟ إنت مين؟',
          botTranslation: 'Como você está? Quem é você?',
          expected: ['كويس، شكرا. أنا...', 'كويس', 'أنا'],
          hint: 'Responda “كويس” (ou “مش كويس”) e depois diga quem você é com “أنا”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“إزيك؟”), resposta (“كويس”/“مش كويس”) e quem você é (“أنا...”).',
      },
    ],
  },
  {
    id: 'arz-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'عيش، عربية ووحش',
    emoji: '🥖',
    card: {
      id: 'arz-c2',
      title: 'عيش، عربية ووحش: palavras que mudam de sentido',
      emoji: '🥖',
      history:
        'Antes do árabe, o Egito falava egípcio antigo e, na sua fase final, copta — língua que a Igreja egípcia manteve viva na liturgia mesmo depois que o árabe virou a língua do dia a dia, entre os séculos VII e XVII. O copta deixou um substrato de cerca de 250 a 300 palavras no árabe egípcio, segundo a estimativa do linguista Peter Behnstedt citada pela Wikipédia, além de marcas na gramática e na fonologia. Um sinal disso que segue vivo: o calendário copta de doze meses (توت, بابه, هاتور...) continua em uso entre os fellahin, os agricultores egípcios, para marcar as estações do plantio.',
      culture_tip:
        'O فول (fava cozida) é tratado como o prato nacional do Egito: o nome completo do prato, فول مدمس (ful medames), quer dizer literalmente “favas enterradas” — tradicionalmente a panela ficava simmerando a noite toda enterrada em brasas quentes — e até hoje é vendido de manhã cedo nas ruas do Cairo.',
      grammar_why:
        'O árabe falado no Egito perdeu as terminações de caso que o árabe padrão ainda marca por escrito (o chamado i‘rāb). E boa parte do vocabulário do dia a dia simplesmente diverge: a mesma palavra que no árabe padrão quer dizer uma coisa, no Egito quer dizer outra.',
      grammar_examples: [
        ['عيش', 'pão (no árabe padrão, “vida”)'],
        ['عربية', 'carro (no árabe padrão, “mulher árabe” / “a língua árabe”)'],
        ['وحش', 'ruim, feio (no árabe padrão, “fera, monstro”)'],
        ['طوبة', 'tijolo (do copta ⲧⲱⲃⲉ)'],
      ],
      character_guide: [
        ['ة (tāʾ marbūṭa)', 'no final da palavra, marca o feminino; soa como um “a” sozinho', 'قطة (“otta”, gata) — vem de قط + ة'],
        ['ال', 'o artigo “o/a”, grudado antes do nome', 'البيت (“o/a casa”, de ال + بيت)'],
      ],
    },
    lessons: [
      {
        id: 'arz-u2-l1',
        title: 'البيت فين؟',
        kind: 'licao',
        words: ['فين', 'بيت', 'باب', 'شباك', 'كبير', 'صغير'],
        cloze: [
          { sentence: 'البيت ___؟', answer: 'فين', options: ['فين', 'كبير', 'صغير'], translation: 'Onde fica a casa?' },
          { sentence: 'الباب ___.', answer: 'كبير', options: ['كبير', 'صغير', 'فين'], translation: 'A porta é grande.' },
          { sentence: 'الشباك ___.', answer: 'صغير', options: ['صغير', 'كبير', 'فين'], translation: 'A janela é pequena.' },
        ],
        voice: {
          bot: 'البيت فين؟',
          botTranslation: 'Onde fica a casa?',
          expected: ['البيت هنا.', 'هنا'],
          hint: 'Responda “البيت هنا” (a casa é aqui).',
        },
        communityPrompt: 'Descreva uma casa em árabe egípcio: onde fica (“البيت فين؟”) e se é grande ou pequena (“كبير”/“صغير”), citando a porta (“باب”) e a janela (“شباك”).',
      },
      {
        id: 'arz-u2-l2',
        title: 'عايز عيش وقهوة',
        kind: 'licao',
        words: ['عايز', 'عيش', 'مية', 'قهوة', 'جبنة', 'فول'],
        cloze: [
          { sentence: '___ قهوة.', answer: 'عايز', options: ['عايز', 'عيش', 'مية'], translation: 'Eu quero um café.' },
          { sentence: 'عايز ___.', answer: 'عيش', options: ['عيش', 'مية', 'جبنة'], translation: 'Eu quero pão.' },
          { sentence: 'عايز ___.', answer: 'فول', options: ['فول', 'جبنة', 'مية'], translation: 'Eu quero fava (fuul).' },
        ],
        voice: {
          bot: 'عايز إيه؟',
          botTranslation: 'O que você quer?',
          expected: ['عايز مية.', 'عايز قهوة.', 'عايز'],
          hint: 'Responda “عايز” (ou “عايزة”, se você for mulher) e o que você quer: مية، قهوة، عيش...',
        },
        communityPrompt: 'Peça algo para comer ou beber em árabe egípcio usando “عايز” (ou “عايزة”): café (“قهوة”), pão (“عيش”) ou queijo (“جبنة”).',
      },
      {
        id: 'arz-u2-l3',
        title: 'Test: عيش وعربية',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'البيت فين؟ عايز إيه؟',
          botTranslation: 'Onde fica a casa? O que você quer?',
          expected: ['البيت هنا. عايز مية.', 'هنا', 'عايز'],
          hint: 'Diga onde a casa está (“هنا”) e o que você quer (“عايز...”).',
        },
        communityPrompt: 'Escreva uma cena completa: cumprimento, uma pergunta sobre a casa (“البيت فين؟”/“كبير؟”) e um pedido de comida ou bebida com “عايز”.',
      },
    ],
  },
  // ══════════════════ A2 ══════════════════
  // Fontes (consultadas em 09/10/2026): Wikipédia (inglês) «Egyptian Arabic» (sufixos possessivos,
  // plurais, demonstrativos, futuro com حـ); Wikcionário (inglês), Apêndice «Egyptian Arabic Swadesh
  // list» e entradas individuais citadas em vocabulario.ts.
  {
    id: 'arz-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'العيلة: ده مين؟',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'arz-c3',
      title: 'بيتي: a posse que se gruda no nome',
      emoji: '🏠',
      history:
        'Diferente do português, o árabe egípcio não usa uma palavra separada pra “meu”, “seu” ou “dele”: um sufixo gruda direto no final do nome. “بيت” (casa) vira “بيتي” (minha casa) só com o “-ي” no final — a mesma lógica que organiza praticamente toda a posse no egípcio falado, do “أبويا” (meu pai) ao “بيتنا” (nossa casa).',
      culture_tip:
        'Pra apresentar alguém da família, o egípcio usa o demonstrativo antes do nome da pessoa: “ده أبويا” (este é meu pai), “دي أمي” (esta é minha mãe). O gênero do demonstrativo (ده/دي) segue o gênero da pessoa apresentada, não o de quem fala.',
      grammar_why:
        'Dois mecanismos novos aparecem aqui: o sufixo possessivo colado no nome (بيتي، بيتك، بيته…) e os três demonstrativos do árabe egípcio — “ده” (masculino), “دي” (feminino) e “دول” (plural) — que, como o árabe egípcio não tem um verbo “ser” no presente, já fecham a frase sozinhos: “ده بيت” já quer dizer “isto é uma casa”.',
      grammar_examples: [
        ['ده أبويا. دي أمي.', 'Este é meu pai. Esta é minha mãe.'],
        ['ده اخ كويس.', 'Este é um bom irmão.'],
        ['انتو كويسين؟', 'Vocês estão bem?'],
        ['دول كويسين.', 'Estes estão bem.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'arz-u3-l1',
        title: 'أبويا وأمي',
        kind: 'licao',
        words: ['اب', 'أم', 'اخ', 'بنت', 'جوز', 'عيل'],
        cloze: [
          { sentence: '___ كويس.', answer: 'أبويا', options: ['أبويا', 'أمي', 'اخي'], translation: 'Meu pai está bem.' },
          { sentence: 'ده ___ كويس.', answer: 'اخ', options: ['اخ', 'بنت', 'جوز'], translation: 'Este é um bom irmão.' },
          { sentence: 'ده ___ صغير.', answer: 'عيل', options: ['عيل', 'بنت', 'اب'], translation: 'Esta é uma criança pequena.' },
        ],
        voice: {
          bot: 'ده مين؟',
          botTranslation: 'Quem é este?',
          expected: ['ده أبويا.', 'دي أمي.', 'أبويا'],
          hint: 'Apresente alguém da família: “ده أبويا” (este é meu pai) ou “دي أمي” (esta é minha mãe).',
        },
        communityPrompt: 'Apresente três pessoas da sua família em árabe egípcio, usando “ده” ou “دي” antes do nome: “ده أبويا”, “دي أمي”, “ده اخي”.',
      },
      {
        id: 'arz-u3-l2',
        title: 'ده، دي، ودول',
        kind: 'licao',
        words: ['ده', 'دي', 'دول', 'انتو', 'مين', 'ليه'],
        cloze: [
          { sentence: '___ بيت كبير.', answer: 'ده', options: ['ده', 'دي', 'دول'], translation: 'Isto é uma casa grande.' },
          { sentence: '___ قطة صغيرة.', answer: 'دي', options: ['دي', 'ده', 'دول'], translation: 'Isto é uma gata pequena.' },
          { sentence: '___ كويسين.', answer: 'دول', options: ['دول', 'ده', 'دي'], translation: 'Estes estão bem.' },
        ],
        voice: {
          bot: 'انتو كويسين؟',
          botTranslation: 'Vocês estão bem?',
          expected: ['أيوه، إحنا كويسين.', 'أيوه', 'كويسين'],
          hint: 'Responda por todo o grupo: “أيوه، إحنا كويسين” (sim, estamos bem).',
        },
        communityPrompt: 'Pergunte “ده مين؟” (quem é este?) e “ليه؟” (por quê?) sobre uma foto de família, e responda com “ده”/“دي”.',
      },
      {
        id: 'arz-u3-l3',
        title: 'Test: العيلة',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ده مين؟ انتو كويسين؟',
          botTranslation: 'Quem é este? Vocês estão bem?',
          expected: ['ده أبويا. إحنا كويسين.', 'أبويا', 'كويسين'],
          hint: 'Apresente alguém da família com “ده”/“دي” e responda “كويسين” pelo grupo.',
        },
        communityPrompt: 'Escreva uma apresentação de família completa: quem são três pessoas (“ده”/“دي” + palavra de família) e como elas estão (“كويسين”).',
      },
    ],
  },
  {
    id: 'arz-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'الجبل والبحر',
    emoji: '⛰️',
    card: {
      id: 'arz-c4',
      title: 'حيكتب: o futuro que troca de prefixo',
      emoji: '⏩',
      history:
        'No árabe egípcio, a mesma palavra, “بحر” (bahr), serve tanto pra “mar” quanto pra “rio” — é assim que o Apêndice do Wikcionário (Egyptian Arabic Swadesh list) registra as duas traduções lado a lado. Dá pra usar “بحر” tanto pro Mediterrâneo quanto pro rio Nilo, sem precisar de duas palavras diferentes.',
      culture_tip:
        'Descrever tamanho e distância é um dos primeiros jeitos de falar sobre lugares: “الجبل بعيد” (a montanha é longe), “البحر قريب” (o mar é perto). “طويل” e “قصير” servem tanto pra altura de pessoas quanto pro comprimento de coisas.',
      grammar_why:
        'O futuro do árabe egípcio troca o prefixo بـ (presente) por حـ: “بيكتب” (ele escreve) vira “حيكتب” (ele vai escrever). E o plural, aqui, aparece de dois jeitos — um sufixo regular (“-ين”, كويس→كويسين) e um plural “quebrado”, que muda o padrão interno da palavra sem fórmula fixa (كتاب→كتب).',
      grammar_examples: [
        ['الجبل بعيد. البحر قريب.', 'A montanha é longe. O mar é perto.'],
        ['هو حيكتب.', 'Ele vai escrever.'],
        ['ده كتاب تقيل.', 'Este é um livro pesado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'arz-u4-l1',
        title: 'في الطبيعة',
        kind: 'licao',
        words: ['جبل', 'شجرة', 'سمكة', 'نار', 'بحر', 'سما'],
        cloze: [
          { sentence: 'ال___ كبير.', answer: 'جبل', options: ['جبل', 'بحر', 'نار'], translation: 'A montanha é grande.' },
          { sentence: 'هو مسك ال___.', answer: 'سمكة', options: ['سمكة', 'شجرة', 'نار'], translation: 'Ele pegou o peixe.' },
          { sentence: 'ال___ كبير.', answer: 'بحر', options: ['بحر', 'سما', 'جبل'], translation: 'O mar é grande.' },
        ],
        voice: {
          bot: 'الجبل كبير ولا صغير؟',
          botTranslation: 'A montanha é grande ou pequena?',
          expected: ['الجبل كبير.', 'كبير', 'صغير'],
          hint: 'Responda com “كبير” (grande) ou “صغير” (pequena).',
        },
        communityPrompt: 'Descreva uma paisagem em árabe egípcio usando “جبل”, “بحر” e “شجرة”, dizendo se cada coisa é “كبير” ou “صغير”.',
      },
      {
        id: 'arz-u4-l2',
        title: 'طويل ولا قصير؟',
        kind: 'licao',
        words: ['طويل', 'قصير', 'أزرق', 'أخضر', 'أصفر', 'بعيد'],
        cloze: [
          { sentence: 'الراجل ___.', answer: 'طويل', options: ['طويل', 'قصير', 'بعيد'], translation: 'O homem é alto.' },
          { sentence: 'البحر ___.', answer: 'أزرق', options: ['أزرق', 'أخضر', 'أصفر'], translation: 'O mar é azul.' },
          { sentence: 'الجبل ___.', answer: 'بعيد', options: ['بعيد', 'قريب', 'طويل'], translation: 'A montanha é longe.' },
        ],
        voice: {
          bot: 'البحر بعيد ولا قريب؟',
          botTranslation: 'O mar é longe ou perto?',
          expected: ['البحر قريب.', 'قريب', 'بعيد'],
          hint: 'Responda com “قريب” (perto) ou “بعيد” (longe).',
        },
        communityPrompt: 'Descreva três coisas da natureza com cor e distância: “البحر أزرق وقريب”, “الجبل أخضر وبعيد”.',
      },
      {
        id: 'arz-u4-l3',
        title: 'Test: الجبل والبحر',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'الجبل بعيد؟ والبحر إزاي؟',
          botTranslation: 'A montanha é longe? E o mar, como é?',
          expected: ['الجبل بعيد. البحر قريب وأزرق.', 'بعيد', 'قريب'],
          hint: 'Diga se a montanha é longe (“بعيد”) e descreva o mar com uma cor e uma distância.',
        },
        communityPrompt: 'Descreva um lugar que você quer visitar (cor, tamanho e distância), usando “عايز” e as palavras de natureza desta unidade.',
      },
    ],
  },
];
