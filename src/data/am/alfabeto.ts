import type { AlphabetData } from '../types';

/**
 * O fidel (ፊደል) não é um alfabeto comum: é um silabário — cada sinal já traz a vogal junto
 * (consoante + vogal). Aqui treinamos 23 das 33 famílias de sinais (cada uma com as suas 7
 * “ordens”, isto é, as 7 vogais); ficam de fora algumas famílias raras, que hoje soam igual a
 * outra já listada (ex.: ሐ soa como ሀ) ou só aparecem em empréstimos (ex.: ቨ, para “v”).
 * «falsa»/«igual» não existem aqui: nenhum sinal do fidel parece uma letra latina, por isso todas
 * entram como «nova». Fontes: a própria tabela de regras do app (ipa-africa.ts, AM_ROWS — as
 * mesmas 7 ordens que geram a pronúncia automática) e Wiktionary (verbete de cada palavra de
 * exemplo, para confirmar grafia e sentido).
 */
export const ALPHABET_AM: AlphabetData = {
  letters: [
    { letter: 'ሀሁሂሃሄህሆ', ipa: '[h]', short: 'h', sound: '“h” suave de “hotel” (em inglês), com as 7 vogais: hä hu hi ha he hə ho', example: ['ሁለት', 'dois (começa na 2ª ordem, “hu”)'], group: 'nova' },
    { letter: 'ለሉሊላሌልሎ', ipa: '[l]', short: 'l', sound: '“l” de “lua”', example: ['ልብ', 'coração'], group: 'nova' },
    { letter: 'ሠሡሢሣሤሥሦ', ipa: '[s]', short: 's', sound: '“s” de “sapo” — soa exatamente como ሰ (a família seguinte); é a grafia “antiga”, usada em palavras específicas', example: ['ሥብ', 'gordura'], group: 'nova' },
    { letter: 'መሙሚማሜምሞ', ipa: '[m]', short: 'm', sound: '“m” de “mão”', example: ['መኪና', 'carro'], group: 'nova' },
    { letter: 'ረሩሪራሬርሮ', ipa: '[r]', short: 'r', sound: '“r” fraco, batido uma vez, como o “r” de “caro”', example: ['ረቡዕ', 'quarta-feira'], group: 'nova' },
    { letter: 'ሰሱሲሳሴስሶ', ipa: '[s]', short: 's', sound: '“s” de “sapo”', example: ['ሰላም', 'paz, olá'], group: 'nova' },
    { letter: 'ሸሹሺሻሼሽሾ', ipa: '[ʃ]', short: 'x/ch', sound: '“x” de “xadrez”', example: ['ሻይ', 'chá'], group: 'nova' },
    { letter: 'ቀቁቂቃቄቅቆ', ipa: '[kʼ]', short: 'k ejetivo', sound: 'um “k” seco, fechado na garganta antes de soltar o ar (ejetivo) — o traço mais marcante do amárico para um brasileiro', example: ['ቀይ', 'vermelho'], group: 'nova' },
    { letter: 'በቡቢባቤብቦ', ipa: '[b]', short: 'b', sound: '“b” de “bola”', example: ['ቡና', 'café (começa na 2ª ordem, “bu”)'], group: 'nova' },
    { letter: 'ተቱቲታቴትቶ', ipa: '[t]', short: 't', sound: '“t” de “tatu”, sem virar “tch”', example: ['ተማሪ', 'estudante'], group: 'nova' },
    { letter: 'ነኑኒናኔንኖ', ipa: '[n]', short: 'n', sound: '“n” de “navio”', example: ['ነገ', 'amanhã'], group: 'nova' },
    { letter: 'ዐዑዒዓዔዕዖ', ipa: '[ʔ]', short: '—', sound: 'oclusiva glotal — soa como a pausa de “uh-oh”; no amárico falado soa igual a አ (a próxima família é a mesma pausa)', example: ['ዓይን', 'olho'], group: 'nova' },
    { letter: 'ከኩኪካኬክኮ', ipa: '[k]', short: 'k', sound: '“k” comum de “kiwi”', example: ['ካርታ', 'mapa (começa na 4ª ordem, “ka”)'], group: 'nova' },
    { letter: 'ወዉዊዋዌውዎ', ipa: '[w]', short: 'w', sound: '“u” breve de “quase”', example: ['ውሃ', 'água (começa na 6ª ordem, quase sem vogal)'], group: 'nova' },
    { letter: 'ዘዙዚዛዜዝዞ', ipa: '[z]', short: 'z', sound: '“z” de “zebra”', example: ['ዝናብ', 'chuva (começa na 6ª ordem)'], group: 'nova' },
    { letter: 'የዩዪያዬይዮ', ipa: '[j]', short: 'i (semivogal)', sound: '“i” breve de “pai”', example: ['የት', 'onde'], group: 'nova' },
    { letter: 'ደዱዲዳዴድዶ', ipa: '[d]', short: 'd', sound: '“d” de “dado”', example: ['ደህና', 'bem'], group: 'nova' },
    { letter: 'ገጉጊጋጌግጎ', ipa: '[ɡ]', short: 'g', sound: '“g” de “gato”, sempre duro', example: ['ገበያ', 'mercado'], group: 'nova' },
    { letter: 'ጠጡጢጣጤጥጦ', ipa: '[tʼ]', short: 't ejetivo', sound: 'um “t” seco, fechado na garganta (ejetivo)', example: ['ጥሩ', 'bom (começa na 6ª ordem)'], group: 'nova' },
    { letter: 'ጨጩጪጫጬጭጮ', ipa: '[t͡ʃʼ]', short: 'tch ejetivo', sound: 'um “tch” seco, fechado na garganta (ejetivo)', example: ['ጨረቃ', 'lua'], group: 'nova' },
    { letter: 'ጸጹጺጻጼጽጾ', ipa: '[sʼ]', short: 's ejetivo', sound: 'um “s” seco, fechado na garganta (ejetivo)', example: ['ጸሐይ', 'sol'], group: 'nova' },
    { letter: 'ፈፉፊፋፌፍፎ', ipa: '[f]', short: 'f', sound: '“f” de “faca”', example: ['ፍቅር', 'amor'], group: 'nova' },
    { letter: 'ፐፑፒፓፔፕፖ', ipa: '[p]', short: 'p', sound: '“p” comum de “pato” (raro fora de empréstimos)', example: ['ፖሊስ', 'polícia (começa na 7ª ordem, “po”)'], group: 'nova' },
  ],
  // palavras «emprestadas» (sobretudo do italiano, do francês e do inglês): quem já lê o fidel reconhece o som
  readingWords: [
    ['ባንክ', '🏦', 'banco'],
    ['ሆስፒታል', '🏥', 'hospital'],
    ['ጋዜጣ', '📰', 'jornal (gazeta)'],
    ['ፖሊስ', '👮', 'polícia'],
    ['ካርታ', '🗺️', 'mapa (carta)'],
    ['ፖስታ', '✉️', 'correio (posta)'],
    ['አውሮፕላን', '✈️', 'avião'],
    ['መኪና', '🚗', 'carro (máquina)'],
  ],
};
