import type { UnitSeed } from '../types';

/**
 * Trilha do amárico: por enquanto as unidades do A1.1 ao A2.2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As do B1 ao C1 chegam depois.
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
  /*
   * Unidades do A2 (A2.1 e A2.2). Fontes, todas consultadas em 11/10/2026:
   * - ELIAS — Ethiopian Languages Instruction and Assessment, Universidade Harvard
   *   (elias.fas.harvard.edu), “Beginning Amharic”: lição 10 (título “ሰዓት፤ ወቅት እና የኣየር ጸባይ”;
   *   o diálogo “ዝናቡ ቆሟል?” — “ኣዎ፤ ግን ማዕበል ኣለ።”, a chuva parou? — sim, mas há tempestade; “በክረምት
   *   ደግሞ ዝናብ ኣለ”, “ነገ ሻንጣ መግዛት እፈልጋለሁ”, “ትላንት ወደ ስራ ሄድኩ”; as estações በጋ, በልግ, ክረምት),
   *   lição 5 (“ስድስት ሺ አምስት መቶ”), lição 9 (“ሰላም፤ ምንድነው ችግርህ?”, “እግሬ ላይ ህመም ይሰማኛል”,
   *   “ትንሽ ራስ ኣለኝ”, “መድሃኒት ወሰድክ?”, “ዓይኔ ላይ ህመም ይሰማኛል”), lição 14 (“እኔ ነጋዴ ነኝ። ልብስና
   *   ጫማ እሸጣለሁ።”). O ELIAS escreve ኣ e ስራ; aqui ficou አ e ሥራ, a grafia do Wiktionary (mesmo som).
   * - Tatoeba nº 3640901 (“ወደ ትምህርት ቤት እሄዳለሁ”) e 3640896 (“እኔ ሐኪም ነኝ”); tmhrt.com, “English to
   *   Amharic phrases” (“በጣም ደክሞኛል”, ደክሞኛል, እርቦኛል, ጠምቶኛል).
   * - Omniglot, phrases/amharic.php (“ስንት ነው ዋጋው?”, “ጤና ይስጥልኝ” = “Good health!”); Wikivoyage,
   *   “Amharic phrasebook” (“አንድ ሰዓት ከጠዋቱ” = 7 da manhã; “ጤና ይስጥልኝ” é o “olá” formal e “ሰላም” o
   *   informal, e o guia pede respeito com os mais velhos).
   * - Wikipédia em inglês: “Time in Ethiopia” (o relógio etíope começa no amanhecer: 1 hora = 7h; basta
   *   tirar 6 horas), “Ethiopian calendar” (12 meses de 30 dias e um 13º de 5 ou 6 dias; ano novo
   *   “Enkutatash” em 11 de setembro, 12 no ano antes de um bissexto), “Climate of Ethiopia” (Bega,
   *   outubro a janeiro, a mais seca; Belg, fevereiro a maio; Kiremt, junho a setembro, a grande estação
   *   das chuvas), “Merkato” (o maior mercado a céu aberto da África; o produto principal é o café),
   *   “Black Lion Hospital” (ጥቁር አንበሳ ሆስፒታል, fundado em 1964, principal hospital-escola da Faculdade
   *   de Medicina da Universidade de Addis Abeba), “Amharic”, seção Grammar (“እሱ ወደ ከተማ መጣ”; o
   *   perfeito com -ሁ/-ኩ e o imperfeito composto com -አለሁ; “አለ” para “há” e “ter”).
   * - Wiktionary: ሐኪም (emprestada do árabe “ḥakīm”, etimologia ainda marcada para conferência),
   *   ሆስፒታል (emprestada do inglês “hospital”).
   * Frases MONTADAS (pelas regras documentadas em gramatica.ts e na Wikipédia): “ዛሬ ነፋስ አለ”, “አዎ፣ ግን
   * ነፋስ አለ” (o diálogo do ELIAS com ነፋስ no lugar de ማዕበል), “ይህ ውድ ነው”, “መቶ ብር”, “ምን መግዛት
   * ትፈልጋለህ?” (imperfeito composto de 2ª pessoa, ትፈልግ + -alläh), “ልብስ መግዛት እፈልጋለሁ”, “ምንድነው
   * ሥራህ?” (o padrão de “ምንድነው ችግርህ?” com ሥራ + -ህ, teu), “ወደ ትምህርት ቤት ሄድኩ”.
   */
  {
    id: 'am-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ሰዓት፣ የአየር ጸባይ እና ገበያ',
    emoji: '🌦️',
    card: {
      id: 'am-c3',
      title: 'O relógio etíope e as três estações',
      emoji: '🕐',
      history:
        'Na Etiópia, o relógio do dia a dia começa a contar no amanhecer, não à meia-noite. Por isso “አንድ ሰዓት ከጠዋቱ” (uma hora da manhã) são 7h no relógio internacional: é só tirar 6 horas. O calendário também é outro: tem 12 meses de 30 dias e um 13º mês de 5 ou 6 dias. O ano novo etíope, “Enkutatash”, cai em 11 de setembro (ou 12, no ano antes de um bissexto).',
      culture_tip:
        'O ano etíope tem três estações: “በጋ” (bega), a mais seca, de outubro a janeiro; “በልግ” (belg), de fevereiro a maio; e “ክረምት” (kiremt), a grande estação das chuvas, de junho a setembro. Para fazer compras, o lugar mais famoso de Addis Abeba é o Merkato, o maior mercado a céu aberto da África. O produto principal de lá é o café.',
      grammar_why:
        'Para dizer o que você faz ou vai fazer, o verbo ganha “እ-” no começo e “-አለሁ” no fim: “እሄዳለሁ” (vou, irei), “እፈልጋለሁ” (quero). A mesma forma serve para o presente e para o futuro. Para “há” e “tenho”, o amárico usa “አለ”: “ዝናብ አለ” (há chuva), “አለኝ” (tenho, lit. “há para mim”).',
      grammar_examples: [
        ['ወደ ትምህርት ቤት እሄዳለሁ።', 'Vou à escola.'],
        ['ነገ ሻንጣ መግዛት እፈልጋለሁ።', 'Amanhã quero comprar uma mala.'],
        ['በክረምት ደግሞ ዝናብ አለ።', 'E na estação das chuvas há chuva.'],
        ['አንድ ሰዓት ከጠዋቱ።', 'Uma hora da manhã (7h no relógio internacional).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'am-u3-l1',
        title: 'ሰዓት እና የአየር ጸባይ',
        kind: 'licao',
        words: ['ደመና', 'ነፋስ', 'ሙቀት', 'ቅዝቃዜ', 'ሰዓት', 'ክረምት'],
        cloze: [
          { sentence: 'ዛሬ ___ አለ።', answer: 'ነፋስ', options: ['ነፋስ', 'ሰዓት', 'ወር'], translation: 'Hoje está ventando. (lit. hoje há vento)' },
          { sentence: 'በ___ ደግሞ ዝናብ አለ።', answer: 'ክረምት', options: ['ክረምት', 'ደመና', 'ሳምንት'], translation: 'E na estação das chuvas há chuva.' },
          { sentence: 'አንድ ___ ከጠዋቱ።', answer: 'ሰዓት', options: ['ሰዓት', 'ወር', 'ሙቀት'], translation: 'Uma hora da manhã (7h no relógio internacional).' },
        ],
        voice: {
          bot: 'ዝናቡ ቆሟል?',
          botTranslation: 'A chuva parou?',
          expected: ['አዎ፣ ግን ነፋስ አለ።', 'ነፋስ አለ', 'አዎ'],
          hint: 'Responda “አዎ” (sim) e diga o que ainda tem lá fora: “ግን ነፋስ አለ” (mas está ventando).',
        },
        communityPrompt: 'Descreva o tempo de hoje onde você mora, com “… አለ።”: vento (“ነፋስ”), nuvens (“ደመና”), chuva (“ዝናብ”) ou gelo (“በረዶ”).',
      },
      {
        id: 'am-u3-l2',
        title: 'ስንት ነው ዋጋው?',
        kind: 'licao',
        words: ['ዋጋ', 'ውድ', 'ርካሽ', 'ሱቅ', 'መግዛት', 'መቶ'],
        cloze: [
          { sentence: 'ይህ ___ ነው።', answer: 'ውድ', options: ['ውድ', 'ሱቅ', 'መቶ'], translation: 'Isto é caro.' },
          { sentence: 'ነገ ሻንጣ ___ እፈልጋለሁ።', answer: 'መግዛት', options: ['መግዛት', 'ርካሽ', 'ሱቅ'], translation: 'Amanhã quero comprar uma mala.' },
          { sentence: 'ስድስት ሺ አምስት ___።', answer: 'መቶ', options: ['መቶ', 'ሰላሳ', 'አርባ'], translation: 'Seis mil e quinhentos.' },
        ],
        voice: {
          bot: 'ስንት ነው ዋጋው?',
          botTranslation: 'Quanto custa?',
          expected: ['መቶ ብር።', 'ብር', 'መቶ'],
          hint: 'Diga o preço em birr: “መቶ ብር” (cem birr), “አምሳ ብር” (cinquenta birr), “ሀያ ብር” (vinte birr).',
        },
        communityPrompt: 'Escreva o preço de três coisas que você comprou nesta semana, em birr (“ሀያ ብር”, “መቶ ብር”, “ሺ ብር”), e diga se cada uma foi cara (“ውድ”) ou barata (“ርካሽ”).',
      },
      {
        id: 'am-u3-l3',
        title: 'ፈተና: ሰዓት፣ የአየር ጸባይ እና ገበያ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ዝናቡ ቆሟል? ምን መግዛት ትፈልጋለህ?',
          botTranslation: 'A chuva parou? O que você quer comprar?',
          expected: ['አዎ፣ ግን ነፋስ አለ። ልብስ መግዛት እፈልጋለሁ።', 'መግዛት እፈልጋለሁ', 'ነፋስ አለ'],
          hint: 'Fale do tempo com “… አለ።” e diga o que quer comprar com “… መግዛት እፈልጋለሁ።”.',
        },
        communityPrompt: 'Escreva um diálogo curto numa loja (“ሱቅ”): quem vende (“መሸጥ”), quem compra (“መግዛት”), uma roupa (“ልብስ”) e o preço (“ዋጋ”).',
      },
    ],
  },
  {
    id: 'am-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ጤና፣ ከተማ እና ሥራ',
    emoji: '🩺',
    card: {
      id: 'am-c4',
      title: 'No médico e no trabalho',
      emoji: '🏥',
      history:
        'O hospital ጥቁር አንበሳ (Tikur Anbessa, “Leão Negro”), em Addis Abeba, foi fundado em 1964. É o principal hospital-escola da Faculdade de Medicina da Universidade de Addis Abeba. A palavra “ሆስፒታል” veio do inglês “hospital”, mas o médico tem um nome bem mais antigo: “ሐኪም” (hakim), que, segundo o Wiktionary, veio do árabe “ḥakīm”.',
      culture_tip:
        'Para cumprimentar com respeito, sobretudo gente mais velha ou que você não conhece, use “ጤና ይስጥልኝ”, que leva a palavra “ጤና” (saúde): o Omniglot traduz como “boa saúde!”. O “ሰላም” fica para os amigos.',
      grammar_why:
        'Para contar o que já aconteceu, o verbo ganha um final que mostra quem fez: “ሄድኩ” (eu fui), “ገዛሁ” (eu comprei), “መጣ” (ele veio). E para dizer “meu”, basta um final no substantivo: “እግር” (perna) vira “እግሬ” (minha perna), e “ዓይን” (olho) vira “ዓይኔ” (meu olho).',
      grammar_examples: [
        ['ትላንት ወደ ሥራ ሄድኩ።', 'Ontem fui ao trabalho.'],
        ['እሱ ወደ ከተማ መጣ።', 'Ele veio para a cidade.'],
        ['እግሬ ላይ ህመም ይሰማኛል።', 'Sinto dor na perna. (lit. na minha perna)'],
        ['እኔ ነጋዴ ነኝ።', 'Eu sou comerciante.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'am-u4-l1',
        title: 'ሰውነት እና ጤና',
        kind: 'licao',
        words: ['ራስ', 'እጅ', 'እግር', 'ሆድ', 'ዓይን', 'ሐኪም'],
        cloze: [
          { sentence: 'ትንሽ ___ አለኝ።', answer: 'ራስ', options: ['ራስ', 'ሐኪም', 'ጤና'], translation: 'Tenho a cabeça pequena.' },
          { sentence: 'እኔ ___ ነኝ።', answer: 'ሐኪም', options: ['ሐኪም', 'ሆድ', 'እጅ'], translation: 'Eu sou médico.' },
          { sentence: '___ ወሰድክ?', answer: 'መድሃኒት', options: ['መድሃኒት', 'ዓይን', 'እግር'], translation: 'Você tomou o remédio?' },
        ],
        voice: {
          bot: 'ሰላም፤ ምንድነው ችግርህ?',
          botTranslation: 'Olá. Qual é o seu problema?',
          expected: ['እግሬ ላይ ህመም ይሰማኛል።', 'ህመም ይሰማኛል', 'እግሬ'],
          hint: 'Diga onde dói com “… ላይ ህመም ይሰማኛል።” (sinto dor em …): “እግሬ” (minha perna), “ዓይኔ” (meu olho).',
        },
        communityPrompt: 'Escreva duas frases dizendo onde você sente dor, com “… ላይ ህመም ይሰማኛል።”, e uma frase com “ጤና” (saúde).',
      },
      {
        id: 'am-u4-l2',
        title: 'ከተማ እና ሥራ',
        kind: 'licao',
        words: ['ከተማ', 'መንገድ', 'ሥራ', 'ነጋዴ', 'ደስተኛ', 'ደክሞኛል'],
        cloze: [
          { sentence: 'ትላንት ወደ ___ ሄድኩ።', answer: 'ሥራ', options: ['ሥራ', 'ደስተኛ', 'ደክሞኛል'], translation: 'Ontem fui ao trabalho.' },
          { sentence: 'እኔ ___ ነኝ። ልብስና ጫማ እሸጣለሁ።', answer: 'ነጋዴ', options: ['ነጋዴ', 'መንገድ', 'ከተማ'], translation: 'Eu sou comerciante. Vendo roupas e sapatos.' },
          { sentence: 'በጣም ___።', answer: 'ደክሞኛል', options: ['ደክሞኛል', 'ነጋዴ', 'መንገድ'], translation: 'Estou muito cansado.' },
        ],
        voice: {
          bot: 'ምንድነው ሥራህ?',
          botTranslation: 'Qual é o seu trabalho?',
          expected: ['እኔ ነጋዴ ነኝ።', 'ነኝ', 'ነጋዴ'],
          hint: 'Diga a sua profissão com “እኔ … ነኝ።”: “ነጋዴ” (comerciante), “ሐኪም” (médico), “ተማሪ” (estudante).',
        },
        communityPrompt: 'Conte como foi o seu dia: aonde você foi (“ወደ ሥራ ሄድኩ”, “ወደ ትምህርት ቤት ሄድኩ”) e como está agora: cansado (“ደክሞኛል”), com fome (“እርቦኛል”) ou com sede (“ጠምቶኛል”).',
      },
      {
        id: 'am-u4-l3',
        title: 'ፈተና: ጤና፣ ከተማ እና ሥራ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ምንድነው ሥራህ? ምንድነው ችግርህ?',
          botTranslation: 'Qual é o seu trabalho? Qual é o seu problema?',
          expected: ['እኔ ነጋዴ ነኝ። እግሬ ላይ ህመም ይሰማኛል።', 'ነኝ', 'ህመም ይሰማኛል'],
          hint: 'Diga a sua profissão com “እኔ … ነኝ።” e onde dói com “… ላይ ህመም ይሰማኛል።”.',
        },
        communityPrompt: 'Escreva um parágrafo curto: a sua profissão (“እኔ … ነኝ”), aonde você foi ontem (“ትላንት ወደ … ሄድኩ”) e como está se sentindo (“ደስተኛ ነኝ”, “ደክሞኛል”).',
      },
    ],
  },
];
