import type { StorySeed } from '../types';

/**
 * Histórias do aleúte — uma por subnível, do A1.1 ao B1.4 (B1: ver o comentário antes de ale-h5). As do A2 (ale-h3 e ale-h4) só usam frases
 * atkanas de Knut Bergsland, “Aleut Dictionary” (1994) [BERG94] e “Aleut Grammar” (1997) [BERG97], com a
 * página no comentário de cada nó, e as do [OMNI]. [DIRKS78]: Moses Dirks e Lydia Dirks, “Niiĝuĝim
 * Qalgadangis / Atkan Food” (Universidade do Alasca, 1978; archive.org/details/micro_IA41153602_0457). Nenhuma frase foi montada; quando duas frases das
 * fontes aparecem juntas no mesmo balão, cada uma é citada.
 *
 * A1.1 e A1.2: Ambientadas em Atka, a ilha do
 * dialeto padrão do curso. Falas do [OMNI] (“Aang!”, “Alqutaxt?”, “Qaĝaasakung huzuu haqakux̂”, “Kiin
 * asax̂tax̂t?”, “… asax̂takuq”, “Ukuĝaan ix̂amnakux̂”, “Ukudigada”, “Qaatunaxt”, “Qanaang uma ii?”,
 * “Tutalagakuq”) e da sintaxe do [WIKI] (“Tayaĝux̂ awakux̂”), com a tradução deles.
 */
export const STORIES_ALE: StorySeed[] = [
  {
    id: 'ale-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aang!',
    emoji: '🛬',
    summary: 'O Linu chega à ilha de Atka, nas Aleutas, e é recebido em aleúte.',
    cultural_context:
      'Atka fica no meio da corrente das ilhas Aleutas. É a ilha que dá nome ao dialeto ocidental do aleúte, o atkan, o da gramática de conversa “How the Atkans Talk”, de Anna Berge e Moses Dirks.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aang! Qaĝaasakung huzuu haqakux̂!',
        translation: 'Olá! Obrigado a todos por virem!',
        emoji: '👋',
        choices: [
          { text: 'Aang! Qaĝaasakung!', translation: 'Olá! Obrigado!', next: 'nome' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Cumprimente: “Aang!”.' },
        ],
      },
      nome: {
        text: 'Kiin asax̂tax̂t?',
        translation: 'Qual é o seu nome?',
        emoji: '🏷️',
        choices: [
          { text: 'Linu asax̂takuq.', translation: 'Meu nome é Linu.', next: 'final' },
          { text: 'Qanaang uma ii?', translation: 'Quanto custa isto?', wrong: 'Perguntaram o seu nome. Diga “Linu asax̂takuq”.' },
        ],
      },
      final: {
        text: 'Ukuĝaan ix̂amnakux̂!',
        translation: 'Que bom te ver!',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você cumprimentou, agradeceu e disse o seu nome em aleúte logo na chegada a Atka.' },
      },
    },
    glossary: [
      ['Aang', 'olá; sim'],
      ['Qaĝaasakung', 'obrigado'],
      ['Kiin asax̂tax̂t?', 'qual é o seu nome?'],
      ['Ukuĝaan ix̂amnakux̂', 'que bom te ver'],
    ],
  },
  {
    id: 'ale-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Qaatunaxt!',
    emoji: '🐟',
    summary: 'Na casa de uma família de Atka, o Linu é convidado para comer peixe.',
    cultural_context:
      'Nas ilhas Aleutas, a comida vem do mar: salmão, linguado, bacalhau. E muitas palavras da cozinha vieram do russo, como “chaasxix̂” (xícara) e “yaavlukax̂” (maçã).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Tayaĝux̂ awakux̂. Qaatunaxt!',
        translation: 'O homem está trabalhando. Bom apetite!',
        emoji: '🍽️',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'peixe' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: 'Desejaram bom apetite! Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      peixe: {
        text: 'Adgayux? Chagix̂?',
        translation: 'Salmão? Linguado?',
        emoji: '🐟',
        choices: [
          { text: 'Adgayux. Qaĝaasakung!', translation: 'Salmão. Obrigado!', next: 'final' },
          { text: 'Sabaakax̂.', translation: 'Cachorro.', wrong: 'Ofereceram peixe. Escolha um: “Adgayux” ou “Chagix̂”.' },
        ],
      },
      final: {
        text: 'Ukudigal!',
        translation: 'Boa sorte!',
        emoji: '🍀',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você agradeceu o “Qaatunaxt!” e escolheu o salmão — e se despediram com um “Ukudigal!”.' },
      },
    },
    glossary: [
      ['Qaatunaxt', 'bom apetite'],
      ['adgayux', 'salmão'],
      ['chagix̂', 'linguado'],
      ['Ukudigal', 'boa sorte'],
    ],
  },
  {
    id: 'ale-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Qanayiim haqanax̂t?',
    emoji: '☔',
    summary: 'O Linu volta a Atka num dia de chuva e conta quando chegou.',
    // [BERG94] General Introduction (os Niiĝuĝis, das ilhas Andreanof); [DIRKS78] Introduction (a coleta na
    // maré baixa: ouriços-do-mar, mexilhões).
    cultural_context:
      'Os aleútes de Atka são os Niiĝuĝis, a gente das ilhas Andreanof. Na maré baixa, desciam à praia para colher ouriços-do-mar e mexilhões entre as pedras.',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 90: “qanayiim haqanax̂t ‘when did you come?’”; [BERG94] p. 322 (qilagan).
      inicio: {
        text: 'Aang! Qanayiim haqanax̂t?',
        translation: 'Olá! Quando você veio?',
        emoji: '🛬',
        choices: [
          { text: 'Qilagan.', translation: 'Ontem.', next: 'chuva' },
          { text: 'Qilam qaa.', translation: 'Café da manhã.', wrong: 'Perguntaram quando você chegou. Responda “Qilagan”: ontem.' },
        ],
      },
      // [BERG94] p. 86: “chix̂tal angalikux̂ A 1950- it is raining today”.
      chuva: {
        text: 'Chix̂tal angalikux̂.',
        translation: 'Está chovendo hoje.',
        emoji: '🌧️',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'cha' },
          { text: 'Qilachxizax̂!', translation: 'Bom dia!', wrong: 'Ela falou da chuva. Concorde: “Aang”.' },
        ],
      },
      // [OMNI] “Qaatunaxt”; [BERG94] p. 133: “chaayukuq A 1950 I'm drinking tea”.
      cha: {
        text: 'Qaatunaxt!',
        translation: 'Bom apetite!',
        emoji: '🍵',
        choices: [
          { text: 'Qaĝaasakung! Chaayukuq.', translation: 'Obrigado! Estou tomando chá.', next: 'final' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: '“Qaatunaxt” é bom apetite. Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 94: “txin ukux̂tahliinaq ‘I'll see you again later’”.
      final: {
        text: 'Txin ukux̂tahliinaq.',
        translation: 'Vou te ver de novo mais tarde.',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Ukudigada!', message: 'Você disse quando chegou (“qilagan”), falou da chuva e tomou chá na casa de uma família de Atka.' },
      },
    },
    glossary: [
      ['qilagan', 'amanhã; (com o verbo em -l) ontem'],
      ['chix̂tal angalikux̂', 'está chovendo hoje'],
      ['chaayukuq', 'estou tomando chá'],
      ['txin ukux̂tahliinaq', 'vou te ver de novo mais tarde'],
    ],
  },
  {
    id: 'ale-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Isuĝix̂ qankul saĝanaq',
    emoji: '🦭',
    summary: 'Na praia de Atka, um pescador conta a caçada de ontem.',
    // [DIRKS78] Introduction (a pesca de linguado e bacalhau no verão); [BERG97] §2.1.5.1, p. 64 (“All the
    // lower numerals are also verbal […] transitive in the sense of ‘to make, get - (game)’”).
    cultural_context:
      'Em Atka, os homens pescavam linguado e bacalhau no verão e secavam o peixe para o inverno. Em aleúte, os números também viram verbo: “qankul”, de “qankus” (três), é pegar três na caça.',
    start: 'inicio',
    nodes: {
      // [OMNI] “Alqutaxt?”; [BERG94] p. 535: “asx̂aaĝinaaĝikuq A 1952 I feel sick”.
      inicio: {
        text: 'Aang! Alqutaxt?',
        translation: 'Olá! Como vai?',
        emoji: '🏝️',
        choices: [
          { text: 'Aang! Qaĝaasakung!', translation: 'Oi! Obrigado!', next: 'focas' },
          { text: 'Asx̂aaĝinaaĝikuq.', translation: 'Estou me sentindo mal.', next: 'medico' },
        ],
      },
      // [BERG94] p. 161 (duuxturax̂, médico); [BERG97] p. 94: “Piitrax̂ waaĝaaĝan amukux̂ ‘Peter will come
      // soon’”.
      medico: {
        text: 'Duuxturax̂? Piitrax̂ waaĝaaĝan amukux̂.',
        translation: 'Médico? O Pedro vai chegar logo.',
        emoji: '🩺',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'focas' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Ainda não é hora de ir embora. Agradeça a ajuda: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 64: “A 1978 isuĝix̂ qankul saĝanaq ‘I got three seals yesterday’”.
      focas: {
        text: 'Isuĝix̂ qankul saĝanaq.',
        translation: 'Peguei três focas ontem.',
        emoji: '🦭',
        choices: [
          { text: 'Qankus?', translation: 'Três?', next: 'linguado' },
          { text: 'Algidim hatix̂?', translation: 'Vinte?', wrong: 'Ele disse “qankul”: é o “qankus” (três) usado como verbo, pegar três.' },
        ],
      },
      // [BERG97] p. 90: “tayaĝux̂ chagix̂ asx̂atnax̂ ‘the man killed (caught) a halibut’”.
      linguado: {
        text: 'Aang. Tayaĝux̂ chagix̂ asx̂atnax̂.',
        translation: 'Sim. O homem pegou um linguado.',
        emoji: '🐠',
        choices: [
          { text: 'Ukudigal!', translation: 'Boa sorte!', next: 'final' },
          { text: 'Sabaakax̂.', translation: 'Cachorro.', wrong: 'Ele falou da pesca. Deseje boa sorte: “Ukudigal!”.' },
        ],
      },
      // [BERG94] p. 322: “qilagan haqaaĝan saĝanax̂ A 1952 he will come tomorrow”.
      final: {
        text: 'Qilagan haqaaĝan saĝanax̂.',
        translation: 'Ele vai chegar amanhã.',
        emoji: '🌅',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu a caçada de ontem (“isuĝix̂ qankul saĝanaq”), o linguado do homem e quem chega amanhã.' },
      },
    },
    glossary: [
      ['isuĝix̂ qankul saĝanaq', 'peguei três focas ontem'],
      ['chagix̂', 'linguado'],
      ['duuxturax̂', 'médico'],
      ['Ukudigal', 'boa sorte'],
    ],
  },
  // ══ B1 (entrega de 16/10/2026). Cada fala em aleúte é uma frase atkana de [BERG97] ou [BERG94] (com o ano
  // que Bergsland dá), de Cedor L. Snigaroff (1952, citada em [BERG97] como “N.M.”) ou de [DIRKS78], com
  // a página no comentário do nó e a tradução da fonte. Duas frases no mesmo balão são duas citações.
  {
    id: 'ale-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Qanglaaĝix̂',
    emoji: '🐦‍⬛',
    summary: 'Um passeio pela ilha de Atka num dia de vento: o corvo, a colina, os patos e a volta para casa.',
    // [BERG94] p. 304 (qanglaaĝix̂, raven), p. 342 (sax̂, “bird (in general), especially duck”); [BERG97]
    // p. 87 (A “haqal qada ‘come and eat!’”).
    cultural_context:
      'Na ilha de Atka, o corvo (“qanglaaĝix̂”) está em toda parte, e “sax̂” quer dizer pássaro, sobretudo pato. Nesta história, quase todo verbo puxa outro: “haqal qada”, venha comer.',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 234 (A 1978): “qanglaaĝix̂ ulux̂ kixtal igax̂takux̂ ‘the raven is flying with a piece of
      // meat in his mouth’”.
      inicio: {
        text: 'Qanglaaĝix̂ ulux̂ kixtal igax̂takux̂.',
        translation: 'O corvo está voando com um pedaço de carne no bico.',
        emoji: '🐦‍⬛',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'vento' },
          { text: 'Qaatunaxt!', translation: 'Bom apetite!', wrong: 'Ninguém está comendo: é o corvo que leva a carne no bico. Concorde: “Aang!”.' },
        ],
      },
      // [BERG97] p. 234 (A 1973): “slaĝux̂ kayutul humsikux̂ ‘the wind is blowing hard’”; p. 125 (A):
      // “achunax̂ malgahlikux̂ ‘it is still windy’”.
      vento: {
        text: 'Slaĝux̂ kayutul humsikux̂.',
        translation: 'O vento está soprando forte.',
        emoji: '💨',
        choices: [
          { text: 'Achunax̂ malgahlikux̂.', translation: 'Ainda está ventando.', next: 'colina' },
          { text: 'Qaatukuq.', translation: 'Estou com fome.', wrong: 'Falaram do vento. Diga que ainda venta: “Achunax̂ malgahlikux̂”.' },
        ],
      },
      // [BERG97] p. 233 (A 1978): “qayax̂ hangal kangakux̂ ‘she climbed right to the top of the hill’”; p. 292
      // (A 1952): “qayam ilidan anax̂ yaagikux̂ ‘there is something moving on the hillside’”; p. 233
      // (A 1978): “sax̂ iĝas iganikuq ‘I scared the duck into flight’”.
      colina: {
        text: 'Qayax̂ hangal kangakux̂.',
        translation: 'Ela subiu até o alto da colina.',
        emoji: '⛰️',
        choices: [
          { text: 'Qayam ilidan anax̂ yaagikux̂.', translation: 'Tem alguma coisa se mexendo na encosta.', next: 'raposa' },
          { text: 'Sax̂ iĝas iganikuq.', translation: 'Assustei o pato, e ele levantou voo.', next: 'gaivotas' },
        ],
      },
      // [BERG97] p. 151 (A 1971): “uuquchiingikuchax̂ hunaam ilagaan iganax̂ ‘a little fox ran out of its
      // hole’”.
      raposa: {
        text: 'Uuquchiingikuchax̂ hunaam ilagaan iganax̂.',
        translation: 'Uma raposinha saiu correndo da toca.',
        emoji: '🦊',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'casa' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'O passeio ainda não acabou. Concorde: “Aang!”.' },
        ],
      },
      // [BERG97] p. 133 (A 1980): “slukam hakangis quhmakux̂ ‘the sea gull has white feathers’”.
      gaivotas: {
        text: 'Slukam hakangis quhmakux̂.',
        translation: 'A gaivota tem penas brancas.',
        emoji: '🕊️',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'casa' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: '“Sluka” é a gaivota, e “quhma-”, branco: a gaivota tem penas brancas. Concorde: “Aang!”.' },
        ],
      },
      // [BERG97] p. 233 (A 1978): “tayaĝux̂ ixs tanaaĝakux̂ ‘the man returned’, lit. ‘the man going homeward
      // got to his place’”.
      casa: {
        text: 'Tayaĝux̂ ixs tanaaĝakux̂.',
        translation: 'O homem voltou para casa.',
        emoji: '🏠',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'final' },
          { text: 'Qilachxizax̂!', translation: 'Bom dia!', wrong: 'Vocês já estão voltando. Concorde: “Aang!”.' },
        ],
      },
      // [BERG97] p. 87 (A): “haqal qada ‘come and eat!’”.
      final: {
        text: 'Haqal qada!',
        translation: 'Venha comer!',
        emoji: '🍲',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu o passeio inteiro, com os verbos que puxam outros verbos: “ixs tanaaĝakux̂” (voltou para casa) e “haqal qada” (venha comer).' },
      },
    },
    glossary: [
      ['qanglaaĝix̂', 'corvo'],
      ['qayax̂', 'colina'],
      ['sax̂', 'pássaro, pato'],
      ['slukax̂', 'gaivota'],
      ['haqal qada', 'venha comer'],
    ],
  },
  {
    id: 'ale-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Qanguda!',
    emoji: '🏘️',
    summary: 'O navio chega a Atka, e o Linu é recebido numa casa da aldeia.',
    // [BERG94] p. 377 (sunax̂, ship, A 1840-), p. 372 (stuulux̂), p. 464 (yaasikax̂).
    cultural_context:
      'Em Atka, o navio (“sunax̂”) trazia gente e mercadorias. Dentro de casa, muita coisa tem nome russo: a mesa (“stuulux̂”), a caixa (“yaasikax̂”), a chaleira (“chaanikax̂”).',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 87 (A): “sunax̂ haqakux̂ ‘the ship is coming’”.
      inicio: {
        text: 'Sunax̂ haqakux̂.',
        translation: 'O navio está chegando.',
        emoji: '🚢',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'porta' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'O navio está chegando: é hora de receber, não de ir embora. Diga “Aang!”.' },
        ],
      },
      // [BERG97] p. 96: “E, A qanguda […] ‘(please) come in!’”; [OMNI] “Qaĝaasakung”.
      porta: {
        text: 'Qanguda!',
        translation: 'Entre, por favor!',
        emoji: '🚪',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'caixa' },
          { text: 'Hichada!', translation: 'Saia!', wrong: 'Convidaram você a entrar. Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 158 (A 1971): “Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂ ‘Peter put the candies in a
      // box’”; p. 159 (1971): “hingan furaaskix̂ adagan ngaan aĝiqaa ‘that cap, his father gave him’”.
      caixa: {
        text: 'Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂.',
        translation: 'O Pedro pôs as balas numa caixa.',
        emoji: '📦',
        choices: [
          { text: 'Hingan furaaskix̂ adagan ngaan aĝiqaa.', translation: 'Aquele boné, foi o pai dele que deu.', next: 'mesa' },
          { text: 'Aang.', translation: 'Sim.', next: 'mesa' },
        ],
      },
      // [BERG97] p. 62 (A 1971): “asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂ ‘the pot was too full and
      // ran over on the table’”; [OMNI] “Amtal”.
      mesa: {
        text: 'Asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂.',
        translation: 'A panela encheu demais e transbordou na mesa.',
        emoji: '🫕',
        choices: [
          { text: 'Amtal!', translation: 'Desculpe!', next: 'cha' },
          { text: 'Qaatunaxt!', translation: 'Bom apetite!', wrong: 'A panela transbordou na mesa! Peça desculpa: “Amtal!”.' },
        ],
      },
      // [BERG97] p. 158 (1950): “chaanikam nagan taangax̂ hyutikuq ‘I am pouring water in the kettle’”;
      // p. 159 (A 1950): “anagan xliibam ilaa ngaan aĝikuu ‘his mother gave him a piece of bread’”.
      cha: {
        text: 'Chaanikam nagan taangax̂ hyutikuq.',
        translation: 'Estou pondo água na chaleira.',
        emoji: '🫖',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'pao' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: '“Chaanikam nagan” é “dentro da chaleira”: ela está pondo água para o chá. Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      pao: {
        text: 'Anagan xliibam ilaa ngaan aĝikuu.',
        translation: 'A mãe dele deu a ele um pedaço de pão.',
        emoji: '🍞',
        choices: [
          { text: 'Aang!', translation: 'Sim!', next: 'final' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Ainda é hora do lanche. Diga “Aang!”.' },
        ],
      },
      // [BERG97] p. 96: “A more politely qadá”.
      final: {
        text: 'Qadá!',
        translation: 'Coma, por favor!',
        emoji: '🍽️',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu onde estava cada coisa: as balas dentro da caixa (“yaasikam nagan”), a panela em cima da mesa (“stuuluĝim kugan”) e a água na chaleira.' },
      },
    },
    glossary: [
      ['sunax̂', 'navio'],
      ['yaasikam nagan', 'dentro da caixa'],
      ['stuuluĝim kugan', 'em cima da mesa'],
      ['chaanikax̂', 'chaleira'],
      ['xliibax̂', 'pão'],
    ],
  },
  {
    id: 'ale-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Qam suupaa',
    emoji: '🥣',
    summary: 'Na cozinha de uma casa de Atka, o Linu aprende a sopa, o café e as regras da mesa.',
    // [DIRKS78] p. 5 (“Taaĝan’gis chadum angan qalgaa qaatunazax̂”, “Wild parsnips are good with seal oil”);
    // [BERG94] p. 124 (chadux̂), p. 90 (aangsux̂).
    cultural_context:
      'No livro “Atkan Food” (1978), Moses Dirks conta que a pastinaca selvagem é boa com óleo de foca (“chadux̂”) e que com as frutinhas silvestres (“aangsus”) se faz geleia para comer no pão.',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 158 (1950): “chakin taangam qinganagan ilaan chamĝut? ‘do you wash your hands in cold
      // water?’”.
      inicio: {
        text: 'Chakin taangam qinganagan ilaan chamĝut?',
        translation: 'Você lava as mãos em água fria?',
        emoji: '🧽',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'sopa' },
          { text: 'Qada!', translation: 'Coma!', wrong: 'Ela perguntou se você lava as mãos em água fria. Responda: “Aang”.' },
        ],
      },
      // [BERG97] p. 171 (A 1980) e [DIRKS78] p. 7: “ulum suupaa ilax̂taa pitruuskis ngaan angaĝazax̂ ‘wild
      // parsley is added to meat soup, too’”.
      sopa: {
        text: 'Ulum suupaa ilax̂taa pitruuskis ngaan angaĝazax̂.',
        translation: 'Na sopa de carne também se põe salsa selvagem.',
        emoji: '🥣',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'aviso' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'A sopa ainda vai para a mesa. Diga “Aang”.' },
        ],
      },
      // [BERG97] p. 96: “A hyutlagada ‘don't spill it’”; [OMNI] “Amtal”.
      aviso: {
        text: 'Hyutlagada!',
        translation: 'Não derrame!',
        emoji: '🫗',
        choices: [
          { text: 'Amtal.', translation: 'Desculpe.', next: 'carne' },
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'carne' },
        ],
      },
      // [BERG97] p. 62 (A 1981): “ulux̂ uhlii qalakan qax̂ ilax̂taa qada ‘don't eat only meat, eat fish
      // also’”.
      carne: {
        text: 'Ulux̂ uhlii qalakan qax̂ ilax̂taa qada.',
        translation: 'Não coma só carne, coma peixe também.',
        emoji: '🐟',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'bebida' },
          { text: 'Hichada!', translation: 'Saia!', wrong: 'Ela está oferecendo peixe. Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 87 (A): “chaayuutut ii? ‘do you want (to drink) tea?’ (possible answer aang, makuq ‘yes, I
      // do’)”; p. 222 (A 1978): “kuufyang saaxarax̂ ngaan angax̂tal taangazaq ‘I drink my coffee with sugar
      // added’”.
      bebida: {
        text: 'Chaayuutut ii?',
        translation: 'Você quer chá?',
        emoji: '🍵',
        choices: [
          { text: 'Aang, makuq.', translation: 'Sim, quero.', next: 'final' },
          { text: 'Kuufyang saaxarax̂ ngaan angax̂tal taangazaq.', translation: 'Eu tomo o meu café com açúcar.', next: 'final_cafe' },
        ],
      },
      // [BERG97] p. 87 (A 1950): “haqahlilix ‘come again!’”.
      final: {
        text: 'Haqahlilix!',
        translation: 'Volte sempre!',
        emoji: '🍵',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu as ordens da cozinha (“hyutlagada”, não derrame; “qada”, coma) e aceitou o chá: “Aang, makuq”.' },
      },
      // [BERG97] p. 87 (A 1950): “ukudigalix ‘live well!’”.
      final_cafe: {
        text: 'Ukudigalix!',
        translation: 'Viva bem!',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você entendeu as ordens da cozinha e ainda disse como toma o café: com açúcar, “saaxarax̂ ngaan angax̂tal”.' },
      },
    },
    glossary: [
      ['suupax̂', 'sopa'],
      ['hyutlagada', 'não derrame'],
      ['qada', 'coma'],
      ['kuufyax̂', 'café'],
      ['chadux̂', 'óleo, gordura (de foca)'],
      ['aangsux̂', 'fruta silvestre'],
    ],
  },
  {
    id: 'ale-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Kadim hadagaan',
    emoji: '📜',
    summary: 'Um velho de Atka conta como se vivia na ilha no tempo dos russos, com as palavras de Cedor L. Snigaroff (1952).',
    // [NM] resumo do ERIC (gravado em 1952; a primeira parte é a vida no tempo dos russos); [BERG97] p. 10
    // (Cedor L. Snigaroff, 1890–1965).
    cultural_context:
      'Cedor L. Snigaroff (1890–1965) contou em 1952 como se vivia em Atka no tempo dos russos. Ele não viu tudo o que conta: ouviu dos mais velhos, e por isso termina muitas frases com “hiilax̂tazas”, dizem.',
    start: 'inicio',
    nodes: {
      // [BERG97] p. 249 (A 1952, N.M. 2:25): “hlax̂ a-ku-q-aang hiilax̂takus tutaza-qa-ning ‘when I was a boy I
      // heard people telling about it’”.
      inicio: {
        text: 'Hlax̂ akuqaang hiilax̂takus tutazaqaning.',
        translation: 'Quando eu era menino, ouvi as pessoas contarem.',
        emoji: '👴',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'antes' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Ele está começando a contar. Escute e diga “Aang”.' },
        ],
      },
      // [BERG97] p. 237 e p. 202 (A 1952, N.M. 1:1): “kadim hadagaan malgaliin udang anĝaĝiqas ax̂tanas
      // ‘how people (passive) lived here in the early days’”.
      antes: {
        text: 'Kadim hadagaan malgaliin udang anĝaĝiqas ax̂tanas.',
        translation: 'Como as pessoas viviam aqui antigamente.',
        emoji: '📜',
        // escolhas: [BERG97] p. 195 (A 1952, N.M. 1:9, 15, 16): “qalgadax̂, qax̂, ulux̂, huzuugizaa ‘food,
        // fish, meat, all of it’”; “haakus Unangam chux̂taqangis uliigis, igluqas, an’gim chigdaĝanangis
        // ‘those Aleut clothes, boots, hides, gut parkas’”.
        choices: [
          { text: 'Qalgadax̂, qax̂, ulux̂, huzuugizaa.', translation: 'Comida, peixe, carne, tudo.', next: 'casa' },
          { text: 'Haakus Unangam chux̂taqangis uliigis, igluqas, an’gim chigdaĝanangis.', translation: 'Aquelas roupas aleútes: botas, couros, capas de tripa.', next: 'aves' },
        ],
      },
      // [BERG97] p. 295 (A 1952, N.M. 1:15): “ulam angunagan, ilan anĝaĝilgaayulax, qalgadas qulihlingiin
      // aguĝal ‘a big house in which no one (passive) lived being built just for food’”.
      casa: {
        text: 'Ulam angunagan, ilan anĝaĝilgaayulax, qalgadas qulihlingiin aguĝal.',
        translation: 'Uma casa grande, em que ninguém morava, construída só para a comida.',
        emoji: '🏚️',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'peixe' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: '“Ulam angunagan” é “uma casa grande”, e “qalgadas qulihlingiin”, “só para a comida”. Diga “Aang” e siga a história.' },
        ],
      },
      // [BERG97] p. 90 (A 1952, N.M. 1:43): “Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.
      // ‘Fish were salted and dried, and all of them were put away.’”.
      peixe: {
        text: 'Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.',
        translation: 'O peixe era salgado e seco, e tudo era guardado.',
        emoji: '🐟',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'inverno' },
          { text: 'Qaatunaxt!', translation: 'Bom apetite!', wrong: 'Ninguém está comendo agora: ele conta como se guardava o peixe. Diga “Aang”.' },
        ],
      },
      // [BERG97] p. 292 (A 1952, N.M. 1:36): “haakus tanam ilan sam azanagan huzungis slumaan lazaqas ‘all
      // those (kinds of) birds that stay on the ground were caught during the summer’”.
      aves: {
        text: 'Haakus tanam ilan sam azanagan huzungis slumaan lazaqas.',
        translation: 'Todos aqueles pássaros que ficam em terra eram caçados no verão.',
        emoji: '🦆',
        choices: [
          { text: 'Aang.', translation: 'Sim.', next: 'inverno' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'A história ainda não acabou. Diga “Aang”.' },
        ],
      },
      // [BERG97] p. 125 (A 1952, N.M. 1:19): “inax̂tahliĝulagaan qan’gix̂ ikaaĝazaqaa ‘it (the food) did not end
      // before the winter was over’”; escolha errada: p. 234 (A 1952, N.M. 3:111) “haagal asx̂alanas ‘they
      // starved to death’”.
      inverno: {
        text: 'Inax̂tahliĝulagaan qan’gix̂ ikaaĝazaqaa.',
        translation: 'A comida não acabava antes de o inverno passar.',
        emoji: '❄️',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'final' },
          { text: 'Haagal asx̂alanas.', translation: 'Morreram de fome.', wrong: 'Ao contrário: a comida durava o inverno todo. Agradeça a história: “Qaĝaasakung!”.' },
        ],
      },
      // [BERG97] p. 207 (A 1952, N.M. 1:54): “hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas ‘in that
      // way the people lived through the winter without starving, it is said’”.
      final: {
        text: 'Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas.',
        translation: 'Assim as pessoas passavam o inverno sem fome, dizem.',
        emoji: '🔥',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você ouviu a história de Atka com as palavras de Cedor Snigaroff: a casa da comida, o peixe salgado e seco, e o inverno sem fome — “hiilax̂tadas”, dizem.' },
      },
    },
    glossary: [
      ['kadim hadagaan', 'antigamente'],
      ['anĝaĝinas', 'as pessoas'],
      ['qas sulilgal, qakasxal', 'o peixe era salgado e seco'],
      ['hiilax̂tadas', 'dizem, conta-se'],
      ['qan’gix̂', 'inverno'],
    ],
  },
];
