import type { StorySeed } from '../types';

/**
 * Histórias interativas do awetí, uma por subnível, do A1.1 ao A2.2 (o teto). As do A2 têm as fontes
 * no comentário antes de awe-h3.
 * As falas são citações das fontes (siglas do cabeçalho de vocabulario.ts): “Pejut!” e “Jotup!”, [R]
 * ex. (39) e (33); “Tehe!” e “Atsy!”, [R] ex. (127) e (125); “Jumem a'uteju”, [R] (frase de uma
 * narrativa, “quero comer beiju”); “Ikatu”, [R] ex. (20); “an”/“ehẽ”, [O] ex. 128-129; “itok”,
 * “eok”, “ite'inĩ”, “ajatuktuju”, [O] ex. 21, 32, 13 e 110. “Wiw! Pejut!” está assim mesmo em [R]
 * ex. (129). O único arranjo meu é pôr essas falas em sequência num diálogo (às vezes duas numa
 * fala só, como “Jotup! Itok.” e “Eok? Tehe!”).
 *
 * Cenários de [ISA] e [L]: o beiju de mandioca feito por todas as casas, a praça da aldeia e o
 * “portinho de banho” no rio Tuatuari, perto da aldeia principal, Tazu'jyt tetam.
 */
export const STORIES_AWE: StorySeed[] = [
  {
    id: 'awe-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jumem!',
    emoji: '🫓',
    summary: 'Na aldeia Tazu’jyt tetam, uma família chama o Linu para ver o beiju saindo da chapa.',
    cultural_context:
      'A base da comida no Alto Xingu é a mandioca, sobretudo na forma de beiju, feito no centro de cada casa, entre os esteios, numa chapa sobre o fogo — e repartido entre todos os moradores. O processamento da mandioca é tarefa e privilégio das mulheres.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wiw! Pejut!',
        translation: 'Ei! Venham!',
        emoji: '📣',
        choices: [
          { text: 'Ehẽ!', translation: 'Sim!', next: 'olhe' },
          { text: 'An.', translation: 'Não.', wrong: 'É um convite! Aceite com “Ehẽ!” (sim).' },
        ],
      },
      olhe: {
        text: 'Jotup!',
        translation: 'Olhe!',
        emoji: '👀',
        choices: [
          { text: 'Tehe!', translation: 'Que lindo!', next: 'beiju' },
          { text: 'Atsy!', translation: 'Que nojo!', wrong: '“Atsy!” é para coisa nojenta — e o beiju está ótimo. Elogie com “Tehe!”.' },
        ],
      },
      beiju: {
        text: 'Jomem.',
        translation: 'Beiju.',
        emoji: '🫓',
        choices: [
          { text: "Jumem a'uteju.", translation: 'Quero comer beiju.', next: 'final' },
          { text: 'An atuwyka.', translation: 'Não vejo.', wrong: 'O beiju está bem na sua frente! Diga que quer comer: “Jumem a’uteju”.' },
        ],
      },
      final: {
        text: 'Ikatu.',
        translation: 'Está bom.',
        emoji: '😋',
        ending: {
          tone: 'bom',
          title: 'Ikatu!',
          message: 'Você aceitou o convite com “Ehẽ!”, elogiou com “Tehe!” e pediu o beiju com “Jumem a’uteju” — “jomem” e “jumem” são as duas grafias certas.',
        },
      },
    },
    glossary: [
      ['Pejut!', 'venham!'],
      ['Jotup!', 'olhe!'],
      ['Tehe!', 'que lindo!'],
      ["Jumem a'uteju", 'quero comer beiju'],
    ],
  },
  {
    id: 'awe-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A casa do menino',
    emoji: '🏠',
    summary: 'Um menino awetí mostra ao Linu a casa dele e a rede dele — e depois chama todo mundo para o banho de rio.',
    cultural_context:
      'As casas da aldeia ficam em círculo em volta da praça, e dentro delas as redes de cada família ficam juntas, em volta do seu fogo. O banho é no “portinho” do rio Tuatuari, a uns 200 metros da aldeia principal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jotup! Itok.',
        translation: 'Olhe! Minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'Eok? Tehe!', translation: 'Tua casa? Que linda!', next: 'rede' },
          { text: 'Itok? Tehe!', translation: 'Minha casa? Que linda!', wrong: '“Itok” é “minha casa” — e a casa é dele! Para “tua casa”, diga “eok”.' },
        ],
      },
      rede: {
        text: "Ite'inĩ.",
        translation: 'Minha rede.',
        emoji: '🛏️',
        choices: [
          { text: 'Ikatu!', translation: 'É boa!', next: 'banho' },
          { text: 'Atsy!', translation: 'Que nojo!', wrong: 'Que grosseria! Elogie a rede dele: “Ikatu!”.' },
        ],
      },
      banho: {
        text: 'Ajatuktuju.',
        translation: 'Quero tomar banho.',
        emoji: '🏊',
        choices: [
          { text: 'Ehẽ!', translation: 'Sim!', next: 'final' },
          { text: 'An.', translation: 'Não.', wrong: 'O rio está logo ali. Que tal aceitar com “Ehẽ!”?' },
        ],
      },
      final: {
        text: 'Pejut!',
        translation: 'Venham!',
        emoji: '💧',
        ending: {
          tone: 'bom',
          title: 'Pejut!',
          message: 'Você usou “eok” (tua casa) no lugar de “itok” (minha casa), elogiou a rede com “Ikatu!” e topou o banho de rio com “Ehẽ!”.',
        },
      },
    },
    glossary: [
      ['Itok / Eok', 'minha casa / tua casa'],
      ["Ite'inĩ", 'minha rede'],
      ['Ajatuktuju', 'quero tomar banho'],
      ['Pejut!', 'venham!'],
    ],
  },

  // ══ A2.1 e A2.2 (16/10/2026) ══ Todas as falas são frases das fontes (siglas e páginas: cabeçalho
  // de vocabulario.ts), só juntando os pedaços que [R] separa com hífen ou “=” ([O] p. 17-18):
  //   awe-h3: “Kapatsoa tut 'etotu me?”, [R] p. 147, ex. (98), com a glotal de [O] p. 10, ex. (49);
  //     “Ato itatukaw”, “Ko'jem tut itotu” e “Atet tepe”, [T] p. 3-4; “Otet ne”, “Atak nge” e
  //     “Oteju”, [O] p. 12-13, ex. (85), (88) e (96); “Kari'aw?”, [R] p. 102, ex. (13); “Mimo
  //     itantu”, [T] p. 3; “Ehẽ”, [O] p. 17, ex. (129). Cenário: o porto de banho e as crianças que
  //     brincam ali, [ISA] (“Ciclo de vida: fabricando pessoas”).
  //   awe-h4: “Ujaza moretatawuza, ta'i'atu otwaw ta'itepytu pepi'ingkap ywo”, [R] p. 112, ex. (3),
  //     na linha ortográfica do próprio [R] (é fala de mulher, com “ujaza”); “Koj mẽpyt jatã? An
  //     akwawawyka 'en.” e “Ito akwawap 'en a'yn ne.”, [R] p. 258, ex. (281) (a primeira fala é de
  //     um homem, a resposta de uma mulher; “mẽpyt” conferido na imagem da p. 106); “Itejo'yk”, [T]
  //     p. 2; “Takup”, [T] p. 3; “Ta'ẽ u'ãzãtu”, [R] p. 130, ex. (60a), conferido na imagem; “Kut,
  //     kut, kut. Nã'y'utu ti 'y ete me.”, [R] p. 173, ex. (141) (“kut” é o ideofone de beber, p.
  //     228). Cenário: o Jawari, retomado pelos Awetí em 2002 com os Nahukwá como convidados ([ISA],
  //     “Ritual, cosmologia e xamanismo”), festa “para tirar tristeza ou luto” ([EEC] p. 83); a praça
  //     é onde se recebem os visitantes ([ISA], “A aldeia e o cotidiano”).
  {
    id: 'awe-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Atet tepe',
    emoji: '🥱',
    summary: 'A caminho do banho de rio, o Linu encontra um amigo que vai deixar o banho para amanhã.',
    cultural_context:
      'Na aldeia, as crianças passam boa parte do dia brincando na praça, perto das casas ou no porto de banho do rio. Os meninos acompanham o pai, os tios e os avôs na pesca, e o arco e flecha é o brinquedo preferido deles.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Kapatsoa tut 'etotu me?",
        translation: 'Para onde você vai?',
        emoji: '🧭',
        choices: [
          { text: 'Ato itatukaw.', translation: 'Vou tomar banho.', next: 'amanha' },
          { text: 'Otet ne.', translation: 'Ele dorme.', wrong: '“Otet ne” quer dizer “ele dorme”. A pergunta é para onde você vai: responda “Ato itatukaw” (vou tomar banho).' },
        ],
      },
      amanha: {
        text: "Ko'jem tut itotu.",
        translation: 'Eu vou amanhã.',
        emoji: '🗓️',
        choices: [
          { text: "Kari'aw?", translation: 'Por quê?', next: 'cansado' },
          { text: 'Mimo itantu.', translation: 'Ontem eu corri.', wrong: 'O seu amigo falou de amanhã, não de ontem. Pergunte o motivo: “Kari’aw?” (por quê?).' },
        ],
      },
      cansado: {
        text: 'Atet tepe.',
        translation: 'Dormi à toa: continuo cansado.',
        emoji: '🥱',
        choices: [
          { text: 'Ehẽ.', translation: 'Sim. (entendi)', next: 'final' },
          { text: 'Atak nge.', translation: 'Eu chorei.', wrong: '“Atak nge” é “eu chorei”. O seu amigo só está cansado: concorde com “Ehẽ”.' },
        ],
      },
      final: {
        text: 'Oteju.',
        translation: 'Está dormindo.',
        emoji: '😴',
        ending: {
          tone: 'bom',
          title: 'Atet tepe!',
          message: 'Você respondeu “Ato itatukaw” (vou tomar banho), perguntou “Kari’aw?” e entendeu “atet tepe”: o seu amigo dormiu à toa e continua cansado. Tanto que voltou a dormir: “oteju”, está dormindo.',
        },
      },
    },
    glossary: [
      ["Kapatsoa tut 'etotu me?", 'para onde você vai?'],
      ['Ato itatukaw', 'vou tomar banho'],
      ["Ko'jem tut itotu", 'amanhã eu vou'],
      ['Atet tepe', 'dormi à toa'],
    ],
  },
  {
    id: 'awe-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pepi’ingkap ywo',
    emoji: '🎉',
    summary: 'Os convidados chegam cantando à praça para a festa. Um velho não reconhece você, a noite esfria e as panelas enchem.',
    cultural_context:
      'Em 2002, os Awetí voltaram a festejar o Jawari, uma competição alegre de dardos, e convidaram os Nahukwá, outro povo do Alto Xingu. Segundo um professor do Xingu, essa festa serve para tirar a tristeza e o luto. Os visitantes de outras aldeias são sempre recebidos na praça, o centro da aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Ujaza moretatawuza, ta'i'atu otwaw ta'itepytu pepi'ingkap ywo.",
        translation: 'Estes são os convidados: estão chegando e cantando na praça.',
        emoji: '🎶',
        choices: [
          { text: 'Tehe!', translation: 'Que lindo!', next: 'velho' },
          { text: 'Atsy!', translation: 'Que nojo!', wrong: 'Que desfeita com os convidados! Admire a chegada deles com “Tehe!”.' },
        ],
      },
      velho: {
        text: "Koj mẽpyt jatã? An akwawawyka 'en.",
        translation: 'De quem você é filha? Não conheço você.',
        emoji: '🧓',
        choices: [
          { text: "Ito akwawap 'en a'yn ne.", translation: 'Eu conheço você. (mulher falando)', next: 'frio' },
          { text: "Ita'ok.", translation: 'Estou com raiva.', wrong: 'Não precisa se zangar! Diga que você o conhece: “Ito akwawap ’en a’yn ne”.' },
        ],
      },
      frio: {
        text: "Itejo'yk.",
        translation: 'Estou com frio.',
        emoji: '🥶',
        choices: [
          { text: "Itejo'yk.", translation: 'Estou com frio. (eu também)', next: 'panela' },
          { text: 'Takup.', translation: 'Quente.', wrong: '“Takup” é “quente”, e a noite está fria. Diga que você também está com frio: “Itejo’yk”.' },
        ],
      },
      panela: {
        text: "Ta'ẽ u'ãzãtu.",
        translation: 'As panelas estão ficando cheias.',
        emoji: '🍲',
        choices: [
          { text: 'Ikatu!', translation: 'Que bom!', next: 'final' },
          { text: 'An atuwyka.', translation: 'Não vejo.', wrong: 'As panelas estão bem ali, perto do fogo. Diga “Ikatu!” (que bom!).' },
        ],
      },
      final: {
        text: "Kut, kut, kut. Nã'y'utu ti 'y ete me.",
        translation: 'Glub, glub, glub. Ele bebeu água, dizem.',
        emoji: '💧',
        ending: {
          tone: 'bom',
          title: 'Kut, kut, kut!',
          message: 'Você recebeu os convidados com “Tehe!”, respondeu ao velho com “Ito akwawap ’en a’yn ne” e disse “itejo’yk”. No fim, um “kut, kut, kut”: o awetí tem palavras que imitam o som das coisas, como esse gole de água.',
        },
      },
    },
    glossary: [
      ['Moretatawuza', 'os convidados'],
      ["Ito akwawap 'en", 'eu conheço você (mulher falando)'],
      ["Itejo'yk", 'estou com frio'],
      ['Kut, kut, kut', 'o som de beber'],
    ],
  },
];
