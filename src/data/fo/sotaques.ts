import type { Accent } from '../types';

// Nas Ilhas Faroé, a escrita é uma só: a ortografia etimológica de V. U. Hammershaimb (1846) não segue a
// pronúncia de nenhuma ilha, e por isso cada ilha lê a mesma palavra do seu jeito. As diferenças ficam
// na fala: as vogais, a melodia e algumas palavras. A grande divisão passa entre o norte e o sul.
// Aqui: sotaques (kind 'sotaque'), dialetos com traços próprios mais fortes (kind 'dialeto') e as
// línguas que convivem ou conviveram com o feroês (kind 'língua').
//
// Sem `subdivisions` nos sotaques daqui de propósito: não existe norma ISO 3166-2 publicada para
// as Ilhas Faroé (confirmado no pacote iso-codes e na ISO 3166 Maintenance Agency) — não há código
// nenhum para citar, nem para Tórshavn, nem para nenhuma ilha. A exceção é «fo-norn», cujo território
// (Shetland e Órcades) é do Reino Unido e tem código normal (GB-ZET, GB-ORK).

export const ACCENTS_FO: Accent[] = [
  // ───────────── SOTAQUES ─────────────
  {
    id: 'fo-havnarmal',
    name: 'Havnarmál (a fala de Tórshavn)',
    kind: 'sotaque',
    region: 'Tórshavn e o sul de Streymoy',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '⚓',
    summary: 'A fala da capital, que os ilhéus chamam só de «Havn». Como gente de todas as ilhas mora ali, é o sotaque mais misturado, e o que o aluno mais ouve no rádio, na TV e nas ruas.',
    features: [
      'Fica ao norte da grande divisão dos dialetos, e o «ó» soa [ɔu], quase o nosso «ou»: «Tórshavn» soa algo como [ˈtʰɔuʂhaun].',
      'Como a cidade junta gente de todas as ilhas, os traços mais marcados de cada ilha se diluem, e a fala da capital acaba soando «neutra» para o resto do país.',
      'Na fala informal entram palavras do dinamarquês e do inglês, mais que nas vilas pequenas.',
      'Quem é da capital é um «havnarmaður» (homem) ou uma «havnarkona» (mulher).',
    ],
    examples: [
      ['Góðan morgun!', 'Bom dia!', 'em Havn, o «ó» de «góðan» soa [ɔu], e o «ð» não soa: [ˈkɔuwan]'],
      ['Eg búgvi í Havn.', 'Eu moro em Tórshavn.', '«Havn» é o nome do dia a dia da capital'],
      ['Skulu vit hittast á Vaglinum?', 'Vamos nos encontrar no Vaglið?', 'o Vaglið é a praça do centro de Tórshavn'],
    ],
    words: [
      ['Havn', 'Tórshavn, no dia a dia'],
      ['havnarmaður', 'homem de Tórshavn'],
      ['býurin', 'a cidade, o centro'],
    ],
  },
  {
    id: 'fo-ungdomur',
    name: 'O feroês dos jovens',
    kind: 'sotaque',
    region: 'Todas as ilhas, sobretudo Tórshavn e Klaksvík',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '🎧',
    summary: 'Os jovens crescem com a internet, as séries e os jogos em inglês, e o inglês entra no meio do feroês. Ao mesmo tempo, as ilhas têm uma tradição forte de purismo: para cada coisa nova, alguém propõe uma palavra feroesa.',
    features: [
      'Palavras inglesas no meio da frase: «okey», «sorry», «nice».',
      'O purismo responde com palavras montadas com raízes feroesas: «telda» (computador), «fartelefon» (celular).',
      'Muita gente escreve mensagens sem os acentos e sem o «ð», mas na escola e no trabalho a ortografia completa continua valendo.',
      'Mesmo entre jovens, o dinamarquês ainda empresta palavras ao dia a dia, e o purismo tenta trocá-las por feroesas.',
    ],
    examples: [
      ['Tað var so nice!', 'Foi muito legal!', 'gíria: «nice» vem do inglês'],
      ['Okey, vit síggjast í morgin.', 'Beleza, a gente se vê amanhã.', '«okey» é a grafia feroesa do «OK» inglês'],
      ['Hevur tú teldu við?', 'Você trouxe o computador?', '«telda», palavra criada no feroês, e não um empréstimo'],
    ],
    words: [
      ['telda', 'computador'],
      ['fartelefon', 'celular'],
      ['stuttligt', 'divertido, legal'],
    ],
  },
  // ───────────── DIALETOS ─────────────
  {
    id: 'fo-nordur',
    name: 'O feroês do norte (Norðoyar e Eysturoy)',
    kind: 'dialeto',
    region: 'As ilhas do norte (Norðoyar), com Klaksvík, e Eysturoy, com vilas como Gjógv',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '🎣',
    summary: 'O grupo de dialetos ao norte da grande divisão do feroês. Klaksvík, a segunda maior cidade das ilhas e um porto pesqueiro forte, é o centro dessa fala.',
    features: [
      'O «ó» soa [œu], com os lábios arredondados já no começo: «bók» (livro) soa [pœuk], e não [pɔuk] como em Tórshavn.',
      'Quem é de lá se orgulha do jeito de falar, e a rivalidade entre Klaksvík e Tórshavn é assunto de piada e de futebol.',
      'Cada vila tem palavras e expressões próprias, sobretudo da pesca e do mar.',
    ],
    examples: [
      ['Góðan morgun!', 'Bom dia!', 'no norte, o «ó» soa [œu]: [ˈkœuwan]'],
      ['Í dag fari eg til Klaksvíkar.', 'Hoje eu vou para Klaksvík.', '«til» pede o genitivo: Klaksvík → Klaksvíkar'],
    ],
    words: [
      ['klaksvíkingur', 'pessoa de Klaksvík'],
      ['norðoyingur', 'pessoa das ilhas do norte'],
      ['bygd', 'vila, povoado'],
    ],
  },
  {
    id: 'fo-suduroy',
    name: 'Suðuroyarmál (o feroês de Suðuroy)',
    kind: 'dialeto',
    region: 'Suðuroy, a ilha mais ao sul, com as cidades de Tvøroyri e Vágur',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '⛴️',
    summary: 'O dialeto mais diferente do feroês. A ilha fica a umas duas horas de balsa de Tórshavn, e o resto do país costuma reconhecer um «suðuroyingur» logo na primeira frase.',
    features: [
      'Fica ao sul da grande divisão dos dialetos, que passa pelo Skopunarfjørður, o estreito entre Streymoy e Sandoy.',
      'As vogais longas e a melodia da frase soam diferentes das de Tórshavn e do norte.',
      'Tem palavras próprias que o resto das ilhas nem sempre entende.',
      'Como a ortografia não segue a fala de nenhuma ilha, um suðuroyingur escreve exatamente como alguém de Klaksvík.',
    ],
    examples: [
      ['Eg eri úr Suðuroy.', 'Eu sou de Suðuroy.', '«úr» pede o dativo, que em «Suðuroy» não muda a forma'],
      ['Ferjan fer til Suðuroyar klokkan átta.', 'A balsa sai para Suðuroy às oito.', '«til» pede o genitivo: Suðuroy → Suðuroyar'],
    ],
    words: [
      ['suðuroyingur', 'pessoa de Suðuroy'],
      ['ferja', 'balsa'],
    ],
  },
  {
    id: 'fo-sandoy',
    name: 'O feroês de Sandoy',
    kind: 'dialeto',
    region: 'Sandoy, com as vilas de Sandur e Skopun, e as ilhotas vizinhas, como Skúvoy',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '🏖️',
    summary: 'Sandoy, a «ilha da areia», fica logo ao sul de Streymoy e já do lado sul da grande divisão dos dialetos. É uma ilha rural, de ovelhas e praias de areia, coisa rara nas Faroé.',
    features: [
      'Fica ao sul do Skopunarfjørður, o estreito que separa os dialetos do norte e do sul: a fala tem mais em comum com Suðuroy que com Tórshavn.',
      'Por séculos, a balsa foi o único caminho; desde 2023, um túnel submarino liga a ilha a Streymoy, e a capital ficou a meia hora de carro.',
      'Como em toda ilha, a escrita é a mesma do resto do país: a diferença está só na fala.',
    ],
    examples: [
      ['Eg eri úr Sandoy.', 'Eu sou de Sandoy.', '«úr» pede o dativo, que em «Sandoy» não muda a forma'],
      ['Nú koyra vit gjøgnum tunnilin til Sandoyar.', 'Agora a gente vai de carro pelo túnel até Sandoy.', '«til» pede o genitivo: Sandoy → Sandoyar'],
    ],
    words: [
      ['sandoyingur', 'pessoa de Sandoy'],
      ['sandur', 'areia'],
      ['tunnil', 'túnel'],
    ],
  },
  {
    id: 'fo-vagar',
    name: 'O feroês de Vágar',
    kind: 'dialeto',
    region: 'Vágar, a ilha do aeroporto, com Sørvágur, Miðvágur e Sandavágur, e a vizinha Mykines',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '✈️',
    summary: 'Vágar, a oeste de Streymoy, é a porta de entrada das ilhas: ali fica o único aeroporto do país. Tem fala própria, que os vizinhos reconhecem, e de lá sai o barco para Mykines, a ilha dos papagaios-do-mar.',
    features: [
      'Fica ao norte da grande divisão dos dialetos, mas tem traços de vogal e de melodia que a separam de Tórshavn.',
      'Os nomes das vilas repetem «vágur» (enseada): Sørvágur, Miðvágur, Sandavágur. A própria ilha é «as enseadas»: Vágar.',
      'Quem é de lá é um «vágamaður»; o túnel submarino liga a ilha a Streymoy desde 2002.',
    ],
    examples: [
      ['Flogfarið lendir í Vágum.', 'O avião pousa em Vágar.', '«í» com lugar pede o dativo: Vágar → í Vágum'],
      ['Vit sigla til Mykinesar at síggja lundan.', 'A gente vai de barco a Mykines ver o papagaio-do-mar.', '«til» pede o genitivo: Mykines → Mykinesar'],
    ],
    words: [
      ['vágamaður', 'pessoa de Vágar'],
      ['flogvøllur', 'aeroporto'],
      ['lundi', 'papagaio-do-mar'],
    ],
  },
  {
    id: 'fo-kvaedamal',
    name: 'A língua das baladas (kvæði)',
    kind: 'dialeto',
    region: 'Todas as ilhas, na dança em roda, sobretudo na Ólavsøka e no inverno',
    country: 'FRO',
    variant: 'fo-FO',
    emoji: '💃',
    summary: 'As kvæði, baladas longas cantadas na dança em roda, guardam um feroês antigo, cheio de fórmulas que se repetem. Por séculos, quando a escola e a igreja usavam o dinamarquês, foram elas que mantiveram o feroês vivo.',
    features: [
      'Quem puxa o canto é o «skipari»; a roda inteira responde no refrão, o «niðurlag».',
      'Os passos são simples: dois para a esquerda e um para a direita, de mãos dadas.',
      'Formas antigas e palavras que ninguém usa mais na fala, além de trechos com cara de dinamarquês.',
      'O ciclo mais famoso conta a história de Sigurd, o matador do dragão: as «Sjúrðarkvæði».',
    ],
    examples: [
      ['Glymur dansur í høll, dans sláið í ring!', 'O baile ressoa no salão, fechem a roda da dança!', 'refrão de «Ormurin langi», de Jens Christian Djurhuus'],
      ['Glaðir ríða Noregs menn til Hildar ting.', 'Alegres cavalgam os homens da Noruega para a batalha.', '«Hildar ting», o encontro de Hild (a valquíria), é um jeito poético de dizer «batalha»'],
    ],
    words: [
      ['kvæði', 'balada tradicional'],
      ['skipari', 'quem puxa o canto na dança'],
      ['niðurlag', 'refrão'],
      ['føroyskur dansur', 'a dança em roda feroesa'],
    ],
  },

  // ───────────── LÍNGUAS ─────────────
  {
    id: 'fo-danskt',
    name: 'Dinamarquês nas Ilhas Faroé',
    kind: 'língua',
    region: 'Todas as ilhas: na escola, em documentos e com quem vem da Dinamarca',
    country: 'FRO',
    speechLocale: 'da-DK',
    emoji: '🇩🇰',
    summary: 'Desde a autonomia de 1948, o feroês é a língua principal das ilhas, mas o dinamarquês é ensinado a todos na escola e pode ser usado em assuntos oficiais. Por séculos foi a língua da igreja, da escola e da administração.',
    features: [
      'Os feroeses falam um dinamarquês com sotaque próprio, o «gøtudanskt», bem perto da escrita: o «d» de «hvad» e o «g» de «dag» costumam soar.',
      'Pouco ou nenhum stød, o «soluço» da garganta do dinamarquês de Copenhague.',
      'Muitas palavras dinamarquesas entraram no feroês falado; o purismo tenta trocá-las por palavras feroesas.',
    ],
    examples: [
      ['Hvad hedder du?', 'Como você se chama?', 'dinamarquês; nas Faroé, o «d» costuma ser pronunciado'],
      ['Tak for mad!', 'Obrigado pela comida!', 'dinamarquês; em feroês: «Takk fyri matin!»'],
    ],
    words: [
      ['danskt', 'o dinamarquês (em feroês)'],
      ['gøtudanskt', 'o dinamarquês «da rua», com sotaque feroês'],
    ],
  },
  {
    id: 'fo-norn',
    name: 'Norn, a língua extinta das Shetland e das Órcades',
    kind: 'língua',
    region: 'As ilhas Shetland e Órcades, no norte da Escócia',
    country: 'GBR',
    subdivisions: ['GB-ZET', 'GB-ORK'],
    speechLocale: 'en-GB',
    emoji: '🪦',
    summary: 'O norn veio do nórdico antigo dos vikings, como o feroês, e foi falado nas Shetland e nas Órcades até por volta do século XVIII, quando o escocês e o inglês tomaram o lugar dele. Era o parente mais próximo do feroês.',
    features: [
      'Sobrou pouca coisa escrita: orações, frases soltas e a balada «Hildina», anotada em 1774 na ilha de Foula.',
      'Centenas de palavras do norn sobrevivem no dialeto escocês das Shetland e das Órcades, sobretudo de pesca, barcos e lugares.',
      'Muitos nomes de lugar das duas ilhas têm primos feroeses: o «voe» das Shetland é o «vágur» do feroês.',
    ],
    examples: [
      ['voe', 'enseada, braço de mar', 'do nórdico «vágr»; em feroês, «vágur» (como em Vágur, em Suðuroy)'],
      ['noost', 'abrigo de barco na praia', 'do nórdico «naust»; em feroês, «neyst»'],
    ],
    words: [
      ['voe', 'enseada (feroês: vágur)'],
      ['noost', 'abrigo de barco (feroês: neyst)'],
    ],
  },
];
