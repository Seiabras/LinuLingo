import type { Accent } from '../types';

/**
 * Os falares do georgiano (10/10/2026) e as outras línguas cartvelianas. Fontes: Wikipédia em
 * português, inglês e georgiano («Georgian dialects», «Ingiloy dialect», «Fereydani dialect», «Mingrelian
 * language», «Svan language», «Laz language», consultadas em 10/10/2026).
 */
const reg = (id: string, name: string, region: string, sub: string[], emoji: string, summary: string, features: string[], ex: [string, string]): Accent => ({
  id, name, kind: 'sotaque', region, country: 'GEO', subdivisions: sub, emoji, summary, features, examples: [ex],
});

export const ACCENTS_KA: Accent[] = [
  reg('ka-tbilisi', 'Tbilisi (Kartli)', 'Tbilisi e Kartli, o centro do país', ['GE-TB', 'GE-SK', 'GE-KK'], '🏙️', 'O georgiano de Tbilisi e de Kartli, a base do padrão.', ['A base do padrão.', 'Muitas palavras do russo na fala da cidade.'], ['გამარჯობა!', 'Olá!']),
  reg('ka-imereti', 'Imereti (Kutaisi)', 'Imereti, no oeste: Kutaisi', ['GE-IM'], '🍇', 'O georgiano de Imereti, de Kutaisi, com melodia própria e formas verbais diferentes das do leste.', ['Melodia própria, reconhecível no resto do país.', 'Formas verbais próprias do oeste.'], ['ქუთაისი', 'Kutaisi']),
  reg('ka-guria', 'Guria', 'Guria, no oeste, perto do mar Negro', ['GE-GU'], '🎶', 'O georgiano da Guria, terra do canto polifônico e do humor, com palavras próprias.', ['A terra do canto polifônico gurian, patrimônio da UNESCO com o canto georgiano.', 'Palavras e formas próprias do oeste.'], ['გურია', 'Guria']),
  reg('ka-ajara', 'Ajara (Batumi)', 'Ajara, no sudoeste: Batumi', ['GE-AJ'], '⚓', 'O georgiano de Ajara, região que foi otomana até 1878, com muitas palavras do turco.', ['Muitas palavras do turco.', 'Parte da população é muçulmana, herança do tempo otomano.'], ['აჭარა', 'Ajara']),
  reg('ka-kakheti', 'Kakheti', 'Kakheti, no leste: Telavi, Sighnaghi', ['GE-KA'], '🍷', 'O georgiano de Kakheti, a terra do vinho feito em ânforas de barro (qvevri), próximo do padrão.', ['Próximo do padrão, com palavras próprias.', 'O vinho em qvevri é patrimônio da UNESCO.'], ['კახეთი', 'Kakheti']),
  reg('ka-racha', 'Racha', 'Racha, nas montanhas do noroeste', ['GE-RL'], '⛰️', 'O georgiano de Racha, das montanhas, conservador, com formas antigas.', ['Formas antigas da língua.', 'Isolado pelas montanhas por séculos.'], ['რაჭა', 'Racha']),
  {
    id: 'ka-ingilo',
    name: 'Ingilo (Azerbaijão)',
    kind: 'sotaque',
    region: 'Os ingilos do noroeste do Azerbaijão (Qax, Zaqatala)',
    country: 'AZE',
    subdivisions: ['AZ-QAX'],
    emoji: '🇦🇿',
    summary: 'O georgiano dos ingilos, no Azerbaijão, com muitas palavras do azerbaijano.',
    features: ['Muitas palavras do azerbaijano.', 'Parte dos ingilos é muçulmana, parte cristã.'],
    examples: [['ინგილო', 'ingilo']],
  },
  {
    id: 'ka-fereydani',
    name: 'Fereydani (Irã)',
    kind: 'sotaque',
    region: 'Fereydunshahr, na província de Isfahan, no Irã',
    country: 'IRN',
    subdivisions: ['IR-10'],
    emoji: '🇮🇷',
    summary: 'O georgiano dos descendentes dos georgianos levados para o Irã pelo xá Abbas no século XVII, com muitas palavras do persa.',
    features: ['Muitas palavras do persa.', 'Guarda formas do georgiano do século XVII.'],
    examples: [['ფერეიდანი', 'Fereydan']],
  },
  {
    id: 'ka-megrelo',
    name: 'Mingreliano',
    kind: 'língua',
    region: 'A Mingrélia (Samegrelo), no oeste',
    country: 'GEO',
    subdivisions: ['GE-SZ'],
    emoji: '🌽',
    summary: 'A língua da Mingrélia, irmã do georgiano na família cartveliana, falada em casa e escrita no alfabeto georgiano, sem norma oficial.',
    features: ['Escrita no alfabeto georgiano, sem estatuto oficial.', 'Irmã próxima do laz.'],
    examples: [['მარგალური', 'margaluri, o nome da língua']],
  },
  {
    id: 'ka-svan',
    name: 'Svan',
    kind: 'língua',
    region: 'A Svanécia, nas montanhas do Cáucaso',
    country: 'GEO',
    subdivisions: ['GE-SZ', 'GE-RL'],
    emoji: '🗼',
    summary: 'A língua da Svanécia, a região das torres de pedra nas montanhas, a mais distante do georgiano na família cartveliana, considerada ameaçada pela UNESCO.',
    features: ['A mais distante do georgiano entre as línguas cartvelianas.', 'Vogais longas e umlaut, que o georgiano não tem.'],
    examples: [['ლუშნუ ნინ', 'lušnu nin, o nome da língua']],
  },
  {
    id: 'ka-laz',
    name: 'Laz',
    kind: 'língua',
    region: 'A costa do mar Negro, quase toda na Turquia, e Sarpi, na Geórgia',
    country: 'TUR',
    subdivisions: ['TR-53', 'TR-08'],
    emoji: '🌊',
    summary: 'A língua dos lazes, irmã do mingreliano, falada quase toda na Turquia, onde se escreve em alfabeto latino.',
    features: ['Irmã do mingreliano.', 'Na Turquia, escrita em alfabeto latino.'],
    examples: [['Lazuri', 'laz, o nome da língua']],
  },
];
