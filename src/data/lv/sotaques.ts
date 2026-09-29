import type { Accent } from '../types';

// O letão padrão (latviešu literārā valoda) se apoia no dialeto médio, do centro do país. Os linguistas
// dividem os falares tradicionais em três dialetos: o médio, o livônio ou tâmico (no norte da Kurzeme e
// no noroeste de Vidzeme) e o alto-letão (no leste). O rádio, a TV e a escola aproximaram muito a fala de
// todos do padrão, mas os dialetos resistem no campo, sobretudo no leste.
// Aqui: sotaques (kind 'sotaque'), dialetos (kind 'dialeto') e as outras línguas faladas na Letônia (kind 'língua').

export const ACCENTS_LV: Accent[] = [
  // ───────────── SOTAQUES ─────────────
  {
    id: 'lv-riga',
    name: 'O falar de Riga',
    kind: 'sotaque',
    region: 'Riga, a capital, e os arredores',
    country: 'LVA',
    subdivisions: ['LV-RIX'],
    variant: 'lv-LV',
    speechLocale: 'lv-LV',
    emoji: '🏙️',
    summary: 'A fala da capital, onde mora perto de um terço da população do país. A pronúncia fica perto do padrão ouvido na rádio e na TV; o jeito jovem mistura gírias vindas do alemão, do inglês e do russo.',
    features: [
      'Pronúncia próxima do padrão: a tônica na 1ª sílaba e as vogais longas bem marcadas.',
      'Muita gente de Riga fala letão e russo, e na rua é comum ouvir as duas línguas na mesma conversa.',
      'Os livros descrevem três tons na sílaba longa do letão; muitos falantes da cidade distinguem só dois.',
      'Gírias: «forši» (legal), «čalis» (cara, rapaz), «čau» e «atā» (tchau), e o «davai» (bora!), emprestado do russo.',
    ],
    examples: [
      ['Čau! Kā iet?', 'Oi! Tudo bem?', 'cumprimento informal'],
      ['Tas bija forši!', 'Foi muito legal!', 'gíria: «forši» = legal'],
      ['Atā, līdz rītam!', 'Tchau, até amanhã!', '«atā» é o tchau informal'],
    ],
    words: [
      ['forši', 'legal, bacana'],
      ['čalis', 'cara, rapaz'],
      ['atā', 'tchau'],
      ['rīdzinieks', 'pessoa de Riga'],
    ],
  },
  {
    id: 'lv-brasil',
    name: 'O letão dos imigrantes no Brasil',
    kind: 'sotaque',
    region: 'As antigas colônias letãs no Brasil: Rio Novo (Santa Catarina), Nova Odessa e Varpa (São Paulo)',
    country: 'BRA',
    subdivisions: ['BR-SC', 'BR-SP'],
    variant: 'lv-LV',
    speechLocale: 'lv-LV',
    emoji: '🌎',
    summary: 'Letões chegaram ao Brasil a partir de 1890, muitos deles batistas, e fundaram colônias em Santa Catarina e no interior paulista. Os descendentes que ainda falam letão guardam um jeito de falar de antes da Segunda Guerra, com palavras do português no meio.',
    features: [
      'Rio Novo, em Santa Catarina, foi a primeira colônia (1890); Varpa, perto de Tupã (SP), nasceu nos anos 1920.',
      'Palavras do português entram na frase letã, como acontece em toda comunidade de imigrantes.',
      'Na escrita dos mais velhos às vezes aparece a ortografia antiga, com «ŗ» e «ō»: a Letônia soviética abandonou essas letras, mas a imprensa letã no exílio as manteve por décadas.',
      'Os corais e os hinos das igrejas batistas mantiveram a língua viva nas colônias.',
    ],
    examples: [
      ['Labdien! Kā jums klājas?', 'Bom dia! Como o senhor está?', 'cumprimento formal, comum entre os mais velhos'],
      ['Mani vecvecāki atbrauca no Latvijas.', 'Meus avós vieram da Letônia.', 'frase comum entre descendentes'],
    ],
    words: [
      ['kolonija', 'colônia'],
      ['draudze', 'congregação, comunidade da igreja'],
      ['koris', 'coral'],
    ],
  },

  // ───────────── DIALETOS ─────────────
  {
    id: 'lv-vidus',
    name: 'Dialeto médio (vidus dialekts)',
    kind: 'dialeto',
    region: 'O centro do país: Zemgale, o centro de Vidzeme e parte da Kurzeme',
    country: 'LVA',
    subdivisions: ['LV-JEL', 'LV-041', 'LV-016', 'LV-026', 'LV-088', 'LV-067', 'LV-022'],
    variant: 'lv-LV',
    speechLocale: 'lv-LV',
    emoji: '🌾',
    summary: 'O dialeto que serve de base ao letão padrão, falado nas planícies de Zemgale, o celeiro do país, e no centro da Letônia. Quem o fala soa quase como «o letão dos livros».',
    features: [
      'É o mais parecido com o padrão: a língua escrita do século XIX se apoiou nele.',
      'Mantém as vogais longas e curtas da escrita e as terminações inteiras das palavras.',
      'Nos falares tradicionais se ouvem os três tons da sílaba longa: o nivelado, o descendente e o quebrado, este com uma trava na garganta parecida com o stød do dinamarquês.',
      'Os linguistas o dividem em três grupos de falares: o de Vidzeme, o de Kurzeme e o de Zemgale.',
    ],
    examples: [
      ['Labdien! Kā jums iet?', 'Bom dia! Como vai o senhor?', 'quase igual ao padrão'],
      ['Jelgava ir lielākā pilsēta Zemgalē.', 'Jelgava é a maior cidade de Zemgale.', 'Zemgalē: locativo de Zemgale'],
      ['Rundāles pils atrodas Zemgalē.', 'O palácio de Rundāle fica em Zemgale.', '«pils» é castelo ou palácio'],
    ],
    words: [
      ['izloksne', 'falar local'],
      ['Zemgale', 'a região do centro-sul'],
      ['druva', 'campo de cereal'],
    ],
  },
  {
    id: 'lv-tamnieku',
    name: 'Dialeto livônio ou tâmico (lībiskais dialekts)',
    kind: 'dialeto',
    region: 'O norte da Kurzeme, perto do cabo Kolka, e o noroeste de Vidzeme, na costa do golfo de Riga',
    country: 'LVA',
    subdivisions: ['LV-097', 'LV-106', 'LV-VEN', 'LV-099', 'LV-054'],
    variant: 'lv-LV',
    speechLocale: 'lv-LV',
    emoji: '🌊',
    summary: 'O letão das terras onde antes se falava livônio. Os livônios foram passando para o letão, e a sua língua fínica deixou marcas fortes: para quem vem de Riga, é o dialeto que mais soa diferente.',
    features: [
      'As terminações encurtam ou caem: vogais finais somem, e as palavras ficam mais curtas.',
      'Em muitos falares, a forma da 3ª pessoa do verbo serve para todas as pessoas: «es ir» em vez de «es esmu» (eu sou, eu estou).',
      'Em vários falares o feminino se perde, e os adjetivos ficam na forma masculina.',
      'As vogais longas fora da sílaba tônica tendem a encurtar, como no livônio.',
    ],
    examples: [
      ['Es ir mājās.', 'Eu estou em casa.', 'tâmico; no padrão: «Es esmu mājās.»'],
      ['Mēs nāk rīt.', 'Nós vamos vir amanhã.', 'tâmico; no padrão: «Mēs nākam rīt.»'],
    ],
    words: [
      ['tāmnieki', 'os tâmi, gente do norte da Kurzeme'],
      ['izloksne', 'falar local'],
    ],
  },
  {
    id: 'lv-augszemnieku',
    name: 'Alto-letão (augšzemnieku dialekts)',
    kind: 'dialeto',
    region: 'O leste do país: a Latgália, o leste de Vidzeme e a Sēlija, ao longo do rio Daugava',
    country: 'LVA',
    subdivisions: ['LV-111', 'LV-042', 'LV-002', 'LV-059', 'LV-033', 'LV-007', 'LV-056'],
    variant: 'lv-LV',
    speechLocale: 'lv-LV',
    emoji: '🌲',
    summary: 'O dialeto do leste, a «terra de cima», rio acima no Daugava. É o que mais se afasta do padrão nos sons; na Latgália, ganhou até uma língua escrita própria, o latgaliano.',
    features: [
      'As vogais mudam de forma regular: o «a» costuma soar «o», o «ā» vira «uo» e o «ie» vira «ī».',
      'Os linguistas separam as falas «profundas» (dziļās), sobretudo na Latgália, das «não profundas» (nedziļās), mais perto do padrão.',
      'Do século XVII até 1917, a Latgália ficou separada do resto das terras letãs, sob a Polônia-Lituânia e depois dentro do Império Russo: daí mais palavras do polonês, do russo e do bielorrusso.',
      'A região é de maioria católica; a basílica de Aglona recebe peregrinos todo mês de agosto.',
    ],
    examples: [
      ['labs → lobs', 'bom', 'o «a» vira «o»'],
      ['māte → muote', 'mãe', 'o «ā» vira «uo»'],
      ['piens → pīns', 'leite', 'o «ie» vira «ī»'],
    ],
    words: [
      ['augšzemnieki', 'a gente do leste, «da terra de cima»'],
      ['Daugava', 'o grande rio que atravessa o país e deságua em Riga'],
    ],
  },

  // ───────────── OUTRAS LÍNGUAS DA LETÔNIA ─────────────
  {
    id: 'lv-latgaliano',
    name: 'Latgaliano (latgaļu volūda)',
    kind: 'língua',
    region: 'A Latgália, no leste da Letônia: Daugavpils, Rēzekne, Ludza, Preiļi, Krāslava, Balvi',
    country: 'LVA',
    subdivisions: ['LV-REZ', 'LV-077', 'LV-DGV', 'LV-111', 'LV-058', 'LV-073', 'LV-047', 'LV-015', 'LV-056', 'LV-102'],
    emoji: '📜',
    summary: 'A língua escrita da Latgália, nascida do alto-letão. A lei de línguas da Letônia (1999) a protege como «variante histórica do letão»; muitos falantes e linguistas a tratam como língua regional. Mais de cem mil pessoas disseram no censo de 2011 que a usam.',
    features: [
      'Ortografia própria, com a letra «y» (um «i» mais escuro, pronunciado mais atrás na boca) e o «ō».',
      'É escrita desde o século XVIII: o primeiro livro conhecido, «Evangelia toto anno», é de 1753.',
      'De 1865 a 1904, o Império Russo proibiu livros em alfabeto latino na Latgália, como na Lituânia; os livros circularam às escondidas.',
      'Hoje tem imprensa, rádio, poesia e bandas de rock em latgaliano, e é estudado na academia de Rēzekne.',
    ],
    examples: [
      ['Labdīn!', 'Bom dia!', 'latgaliano; no letão padrão: «Labdien!»'],
      ['Paļdis!', 'Obrigado!', 'latgaliano; no letão padrão: «Paldies!»'],
      ['Kai īt?', 'Como vai?', 'latgaliano; no letão padrão: «Kā iet?»'],
    ],
    words: [
      ['Latgola', 'a Latgália'],
      ['volūda', 'língua'],
    ],
  },
  {
    id: 'lv-livonio',
    name: 'Livônio (līvõ kēļ)',
    kind: 'língua',
    region: 'A Costa Livônia (Līvõd rānda), no norte da Kurzeme, perto do cabo Kolka',
    country: 'LVA',
    subdivisions: ['LV-097', 'LV-106'],
    emoji: '🐟',
    summary: 'Não é letão nem língua báltica: o livônio é uma língua fínica, parente do estoniano e do finlandês. A última pessoa que o tinha como língua materna morreu em 2013; hoje algumas dezenas de pessoas o aprendem e o mantêm vivo.',
    features: [
      'Por séculos foi falado em toda a costa do golfo de Riga; a Livônia medieval tomou o nome dos livônios.',
      'Deixou palavras no letão, como «puika» (garoto) e «laiva» (barco).',
      'Tem um tom quebrado, uma trava na garganta parecida com o stød do dinamarquês.',
      'A Costa Livônia é área protegida desde 1991, com as antigas aldeias de pescadores entre o mar e a floresta.',
    ],
    examples: [
      ['Tēriņtš!', 'Olá!', 'livônio'],
      ['Līvõd rānda', 'a Costa Livônia', 'livônio; o «õ» é uma vogal central, que não existe no letão'],
    ],
    words: [
      ['līvõ kēļ', 'a língua livônia'],
      ['lībieši', 'os livônios (em letão)'],
    ],
  },
  {
    id: 'lv-russo',
    name: 'Russo na Letônia',
    kind: 'língua',
    region: 'Sobretudo Riga, Daugavpils, Rēzekne e as cidades maiores',
    country: 'LVA',
    subdivisions: ['LV-RIX', 'LV-DGV', 'LV-REZ', 'LV-JUR', 'LV-LPX'],
    speechLocale: 'ru-RU',
    emoji: '🏘️',
    summary: 'A língua de casa de cerca de um terço dos moradores da Letônia. Muitas famílias chegaram na era soviética; outras vivem ali há séculos, como os velhos-crentes da Latgália. O letão é a única língua oficial do Estado.',
    features: [
      'Em Daugavpils, a maior cidade da Latgália, a maioria dos moradores fala russo em casa.',
      'Muita gente é bilíngue e passa do letão para o russo, e de volta, com naturalidade.',
      'Quem tem o russo como primeira língua costuma falar o letão com as vogais longas mais curtas e as consoantes mais «moles»: é sotaque, não erro de gramática.',
      'O letão coloquial pegou palavras do russo, como «davai» (bora!).',
    ],
    examples: [
      ['Привет! Как дела?', 'Oi! Tudo bem?', 'russo'],
      ['Labdien! Здравствуйте!', 'Bom dia!', 'em lojas de Riga, às vezes se cumprimenta nas duas línguas'],
    ],
    words: [
      ['krievvalodīgie', 'os falantes de russo (termo em letão)'],
      ['davai', 'bora, vamos (do russo, na gíria letã)'],
    ],
  },
];
