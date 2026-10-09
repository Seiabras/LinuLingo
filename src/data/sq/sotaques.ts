import type { Accent } from '../types';

/**
 * Gheg, arbëresh e arvanítico não são línguas separadas do albanês nem pacotes novos — são
 * mutuamente inteligíveis (em grau variado) com o padrão albanês (tosk) já ensinado em `sq`, então
 * entram como sotaque/dialeto dentro do pacote existente (pedido do Matheus, ver PENDENTES.md,
 * "Idiomas naturais ainda não começados"). Conteúdo limitado ao que a Wikipédia (inglês) confirma
 * com fonte: diferenças de palavra isoladas, não frases completas inventadas (os três têm pouca
 * documentação de frases prontas em português, e o app nunca inventa conteúdo linguístico — ver a
 * decisão sobre o Simlish em PENDENTES.md). Fontes: Wikipédia (inglês) "Gheg Albanian", "Arbëresh
 * language" e "Arvanitika", consultadas em 08/10/2026.
 */
export const SOTAQUES_SQ: Accent[] = [
  {
    id: 'sq-gheg',
    name: 'Gheg (gegë)',
    kind: 'dialeto',
    region: 'Sobretudo no Kosovo, onde é a fala do dia a dia da maioria; também no norte e centro da Albânia, no noroeste da Macedônia do Norte, no sudeste de Montenegro e no sul da Sérvia',
    country: 'XKX',
    emoji: '🏔️',
    summary:
      'O grande dialeto do norte: separado do padrão (baseado no tosk, do sul) pelo rio Shkumbin. É a fala do dia a dia da maioria no Kosovo e na Macedônia do Norte, mas não tem estatuto oficial como língua escrita em nenhum país — a escola e os documentos usam o padrão.',
    features: [
      'Tem vogais nasais além das orais (ao todo, contando as duas séries, chega a 26 vogais), que o padrão não tem.',
      'No gheg do nordeste, os sons palatais do padrão — o “q” de “qen” (cão) e o “gj” de “gjumë” (sono) — saem como “tch” e “dj”.',
      'Alguns dialetos trocam o som “y” por “i”: “ylberi” (arco-íris) vira “ilberi”, “dy” (dois) vira “di”.',
      'Falantes do noroeste e do nordeste do gheg se entendem sem problema entre si; a inteligibilidade com o padrão varia mais.',
    ],
    examples: [
      ['Âsht', 'é (verbo “ser”, 3ª pessoa)', 'padrão: “është”'],
      ['Shpi', 'casa', 'padrão: “shtëpi”'],
    ],
    words: [
      ['nja, nji', 'um (padrão: “një”)'],
      ['ilberi', 'arco-íris, em dialetos que trocam “y” por “i” (padrão: “ylberi”)'],
    ],
  },
  {
    id: 'sq-arberesh',
    name: 'Arbëresh',
    kind: 'dialeto',
    region: 'Bolsões do sul da Itália: Calábria, Sicília, Abruzzo, Apúlia, Basilicata, Campânia e Molise',
    country: 'ITA',
    subdivisions: ['IT-78', 'IT-82'],
    emoji: '🇮🇹',
    summary:
      'A fala de comunidades albanesas na Itália, descendentes de mercenários que vieram a partir do século XI (o maior fluxo depois de 1448, quando o nobre Escanderbeg mandou tropas ao rei de Nápoles) e de novas ondas durante as invasões otomanas dos séculos XV e XVI. Vem do tosk antigo falado no sul da Albânia e na Grécia.',
    features: [
      'Mantém grupos consonantais que o padrão simplificou: “gluhë” (arbëresh) onde o padrão diz “gjuhë” (língua).',
      'O “h” se pronuncia mais forte que no padrão, e as consoantes finais perdem a sonoridade — um sistema arcaico que o padrão já perdeu.',
      'Tem palavras do siciliano (“ghranet”, dinheiro, do siciliano “grana”; “qaca”, praça) e do grego (“hora”, vila, povoado).',
      'A UNESCO classifica como “definitivamente em perigo”: hoje são cerca de 70 a 100 mil falantes, e as próprias variedades de arbëresh nem sempre são mutuamente inteligíveis entre si — às vezes usam o italiano ou o albanês padrão como ponte.',
    ],
    examples: [
      ['Gluhë', 'língua', 'padrão: “gjuhë”'],
      ['Ghranet', 'dinheiro', 'do siciliano “grana”'],
    ],
    words: [
      ['hora', 'vila, povoado (do grego)'],
      ['qaca', 'praça (do siciliano)'],
    ],
  },
  {
    id: 'sq-arvanitico',
    name: 'Arvanítico (arvanitika)',
    kind: 'dialeto',
    region: 'Sul da Grécia: Ática, Beócia, Peloponeso e ilhas vizinhas, com bolsões menores no noroeste e no nordeste do país',
    country: 'GRC',
    emoji: '🇬🇷',
    summary:
      'A fala de comunidades albanesas na Grécia, descendentes de colonos que chegaram ao sul do país a partir do fim da Idade Média, em várias ondas — mais de 500 aldeias tiveram população arvanita. Vem do tosk medieval e recebeu forte influência do grego.',
    features: [
      'Mantém grupos consonantais que o padrão simplificou, como o arbëresh: “gljuhë” onde o padrão diz “gjuhë” (língua).',
      'A inteligibilidade com o tosk padrão vai de razoável a só parcial, dependendo da aldeia.',
      'Tem palavras do grego: “dhrom” (estrada, do grego “δρόμος”), “ne” (sim, do grego “ναι”).',
      'A UNESCO classifica como “severamente em perigo”: as gerações mais novas trocam cada vez mais pelo grego, e a língua vem se aproximando da estrutura do grego (convergência estrutural acelerada, segundo linguistas).',
    ],
    examples: [
      ['Gljuhë', 'língua', 'padrão: “gjuhë”'],
      ['Ne', 'sim', 'do grego “ναι”'],
    ],
    words: [['dhrom', 'estrada, caminho (do grego “δρόμος”)']],
  },
];
