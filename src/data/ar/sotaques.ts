import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do árabe (10/10/2026): o curso ensina o árabe padrão moderno (fuṣḥā), e o que se fala em
 * casa varia por região. Fontes: Wikipédia em português, inglês e árabe («Varieties of Arabic»,
 * «Levantine Arabic», «Gulf Arabic», «Mesopotamian Arabic», «Maghrebi Arabic», «Sudanese Arabic»,
 * «Yemeni Arabic», consultadas em 10/10/2026). A lista propôs os grandes grupos (levantino, Golfo,
 * iraquiano, magrebino, sudanês, iemenita) como dialetos; a estrutura ficou como dúvida para o dono
 * (docs/duvidas-variedades.md), e por enquanto cada região entra como sotaque.
 */
const s = (id: string, name: string, region: string, country: string, emoji: string, summary: string, features: string[], examples: Accent['examples'], subdivisions?: string[]): Accent => ({
  id, name, kind: 'sotaque', region, country, subdivisions, emoji, summary, features, examples,
});

const BASE_AR: Accent[] = [
  s('ar-damasco', 'Levantino: Damasco', 'Damasco e a Síria', 'SYR', '🕌', 'O árabe de Damasco, do grupo levantino, muito ouvido nas novelas sírias, com o “ق” que vira uma parada na garganta.', ['“Shu?” para “o quê?” e “kīfak?” para “como vai?”.', 'O “ق” soa como uma parada na garganta: “ʾalb” (coração).'], [['كيفك؟', 'Como vai?']], ['SY-DI', 'SY-RD']),
  s('ar-beirute', 'Levantino: Beirute', 'Beirute e o Líbano', 'LBN', '🌲', 'O árabe do Líbano, do grupo levantino, famoso por misturar francês e inglês na mesma frase: “Hi, kīfak, ça va?”.', ['Mistura de árabe, francês e inglês: “Hi, kīfak, ça va?”.', '“Halla2” para “agora”.'], [['كيفك؟', 'Como vai?']], ['LB-BA', 'LB-JL']),
  s('ar-ama', 'Levantino: Jordânia', 'Amã e a Jordânia', 'JOR', '🏜️', 'O árabe da Jordânia, do grupo levantino, com o “ق” que soa “g” no campo e entre os beduínos, e “ʾ” na cidade.', ['“Hassa” para “agora”.', 'No campo e entre os beduínos, o “ق” soa “g”.'], [['هسّا', 'agora']]),
  s('ar-palestino', 'Levantino: Palestina', 'A Cisjordânia, Gaza e os palestinos de Israel e da diáspora', 'PSE', '🫒', 'O árabe palestino, do grupo levantino; no campo, o “ك” soa “tch”: “kalb” (cachorro) soa “tchalb”.', ['No campo, o “ك” soa “tch”: “tchalb” (cachorro).', 'Na cidade, o “ق” soa como uma parada na garganta.'], [['كلب', 'cachorro', 'no campo palestino, “tchalb”']]),
  s('ar-kuwait', 'Golfo: Kuwait e Bahrein', 'O Kuwait e o Bahrein', 'KWT', '⛵', 'O árabe do Golfo, do Kuwait, onde o “ج” muitas vezes soa “y”: “rayyāl” (homem), onde o padrão diz “rajul”.', ['O “ج” soa “y”: “rayyāl” (homem).', '“Shlōnak?” para “como vai?”.'], [['شلونك؟', 'Como vai?']]),
  s('ar-emirados', 'Golfo: Emirados e Catar', 'Os Emirados Árabes Unidos e o Catar', 'ARE', '🏙️', 'O árabe dos Emirados e do Catar, do grupo do Golfo, com cumprimentos próprios como “shḥālak?”.', ['“Shḥālak?” para “como vai?”.', 'Palavras do persa, do híndi e do inglês, de séculos de comércio.'], [['شحالك؟', 'Como vai?']]),
  s('ar-najd', 'Golfo: Najd (Riad)', 'O Najd, o centro da Arábia Saudita (Riad)', 'SAU', '🐪', 'O árabe do centro da Arábia Saudita, de Riad, de base beduína, com “wish?” para “o quê?” e o “ق” que soa “g”.', ['“Wish?” para “o quê?”.', 'O “ق” soa “g”, e o “ك” às vezes soa “ts”.'], [['وش؟', 'O quê?']]),
  s('ar-hejaz', 'Hejaz (Jidá, Meca)', 'O Hejaz, no oeste da Arábia Saudita: Jidá, Meca, Medina', 'SAU', '🕋', 'O árabe do Hejaz, de Jidá e Meca, cidades de peregrinos e de comércio, mais próximo do árabe urbano do Egito e do Levante.', ['“Ēsh?” para “o quê?”.', 'O “ق” soa “g”, mas o “ج” continua “j”.'], [['إيش؟', 'O quê?']]),
  s('ar-iraque', 'Iraquiano (Bagdá)', 'Bagdá e o Iraque', 'IRQ', '🌴', 'O árabe da Mesopotâmia, de Bagdá, com “hwāya” para “muito” e o “ق” que soa “g”: “gāl” (ele disse).', ['“Hwāya” para “muito”.', 'O “ق” soa “g” e o “ك” às vezes soa “tch”.'], [['هواية', 'muito']]),
  s('ar-marrocos', 'Magrebino: Marrocos', 'O Marrocos', 'MAR', '🍵', 'O árabe do Marrocos, a darija, com muitas palavras do berbere, do francês e do espanhol, e vogais que caem: “bghīt” (eu quero).', ['Vogais curtas que caem: “ktəb” (escreveu).', 'Palavras do berbere e do francês: “atāy” (chá).'], [['بغيت أتاي', 'eu quero chá']]),
  s('ar-argelia', 'Magrebino: Argélia', 'A Argélia', 'DZA', '🏜️', 'O árabe da Argélia, a darja, com muitas palavras do francês e do berbere, e o cumprimento “wāsh rāk?”.', ['“Wāsh rāk?” para “como vai?”.', 'Muitas palavras do francês no dia a dia.'], [['واش راك؟', 'Como vai?']]),
  s('ar-tunisia', 'Magrebino: Tunísia', 'A Tunísia', 'TUN', '🏖️', 'O árabe da Tunísia, com “barsha” para “muito” e palavras do francês e do italiano.', ['“Barsha” para “muito”.', '“Shnuwwa?” para “o quê?”.'], [['برشا', 'muito']]),
  s('ar-libia', 'Magrebino: Líbia', 'A Líbia', 'LBY', '🌅', 'O árabe da Líbia, entre o Magrebe e o Egito, com palavras do italiano, do tempo colonial, e “bāhi” para “bom, tudo bem”.', ['Palavras do italiano: “sbītār” (hospital).', '“Bāhi” para “bom, tudo bem”.'], [['باهي', 'bom, tudo bem']]),
  s('ar-sudao', 'Sudanês', 'O Sudão', 'SDN', '🌍', 'O árabe do Sudão, com o “ق” que soa “g” e palavras próprias como “zōl” (pessoa, cara).', ['“Zōl” para “pessoa, cara”.', 'O “ق” soa “g”.'], [['زول', 'pessoa, cara']]),
  s('ar-iemen', 'Iemenita (Sanaa)', 'O Iêmen', 'YEM', '☕', 'O árabe do Iêmen, de Sanaa, um dos mais conservadores, que guarda sons do árabe antigo que outros perderam.', ['O “ق” soa “g”.', 'Guarda sons e palavras antigas do árabe.'], [['صنعاء', 'Sanaa']]),
  {
    id: 'ar-egipcio',
    name: 'Árabe egípcio',
    kind: 'língua',
    region: 'O Egito',
    country: 'EGY',
    emoji: '🎬',
    summary: 'O árabe do Egito, o mais entendido do mundo árabe por causa do cinema e da música, com um curso próprio no app.',
    features: ['O “ج” soa “g”: “gamīl” (bonito).', 'O “ق” soa como uma parada na garganta: “ʾalb” (coração).'],
    examples: [['إزيك؟', 'Como vai?']],
    estudarMais: { curso: 'arz' },
  },
  {
    id: 'ar-maltes',
    name: 'Maltês',
    kind: 'língua',
    region: 'Malta',
    country: 'MLT',
    emoji: '🇲🇹',
    summary: 'A única língua de origem árabe oficial na União Europeia, escrita em alfabeto latino, com metade das palavras do italiano e do inglês.',
    features: ['Escrito em alfabeto latino.', 'Base árabe, com muito italiano, siciliano e inglês.'],
    examples: [['Bonġu!', 'Bom dia!']],
    estudarMais: { curso: 'mt' },
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_AR: Accent[] = noDialeto(BASE_AR, 'ar-fusha', { iguais: { 'ar-iraque': 'ar-iraquiano', 'ar-sudao': 'ar-sudanes', 'ar-iemen': 'ar-iemenita', 'ar-hejaz': 'ar-hejazi' }, outros: { 'ar-damasco': 'ar-levantino', 'ar-beirute': 'ar-levantino', 'ar-ama': 'ar-levantino', 'ar-palestino': 'ar-levantino', 'ar-kuwait': 'ar-golfo', 'ar-emirados': 'ar-golfo', 'ar-najd': 'ar-golfo', 'ar-marrocos': 'ar-magrebino', 'ar-argelia': 'ar-magrebino', 'ar-tunisia': 'ar-magrebino', 'ar-libia': 'ar-magrebino' } });
