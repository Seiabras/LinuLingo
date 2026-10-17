import type { Clave } from '@/services/musica/notas';

/**
 * Os cursos de instrumento de corda, de lâminas e de teclado (pedido do dono, 17/10/2026: violão,
 * viola caipira, viola de arco, banjo de samba/cavaquinho, violoncelo, baixolão, kalimba e
 * sanfona/acordeão). Todos seguem o curso de clarinete: o desenho de onde tocar, a partitura e o
 * microfone conferindo. As melodias são as de domínio público de `melodias.ts`, no tom que cabe nas
 * primeiras casas de cada instrumento (`escolherTom`).
 *
 * Fontes (consultadas em 17/10/2026):
 * - Violão: Wikipédia, “Violão” (partes; a forma moderna de Antonio de Torres Jurado, 1817–1892) e
 *   “Guitar tunings” (mi2, lá2, ré3, sol3, si3, mi4; “music for guitars is notated one octave higher
 *   than the true pitch”). Wikipedia, “Transposing instrument”: violão e baixo “sound an octave lower
 *   than written”.
 * - Viola caipira: Wikipédia, “Viola caipira” (dez cordas em cinco pares; os dois pares mais agudos em
 *   uníssono, os outros em oitava; vem das violas portuguesas) e “Cebolão” (em mi: mi, si, sol♯, mi, si;
 *   em ré, um tom abaixo: ré, lá, fá♯, ré, lá). As oitavas do cebolão em mi vêm da tabela de
 *   frequências da escola Souza Lima (“Quais as frequências para afinar meu instrumento musical?”):
 *   329,6 / 246,9 / 208 e 416 / 164,8 / 123,45 Hz. A escrita na clave de sol com o 8 embaixo é a do
 *   violão; a viola caipira costuma ser ensinada por tablatura, e o curso usa a mesma pauta do violão.
 * - Viola de arco: Wikipedia, “Viola” (dó3, sol3, ré4, lá4, uma quinta abaixo do violino; clave de dó)
 *   e Wikipédia, “Viola (instrumento musical)” (arco, cavalete, espelho e alma; da viola da braccio).
 * - Cavaquinho e banjo de samba: Wikipédia, “Cavaquinho” (quatro cordas; no Brasil, ré-sol-si-ré; do
 *   Minho, em Portugal); as oitavas (ré4, sol4, si4, ré5) e as frequências são as de afinadores e da
 *   Souza Lima (293,6 / 393 / 493,8 / 587,2 Hz). O banjo de samba: Loja Open Stage, “Banjo americano x
 *   banjo de samba” (quatro cordas, a afinação do cavaquinho, corpo de banjo com braço de cavaquinho,
 *   criado por Almir Guineto, do Fundo de Quintal, nos anos 1970) e Wikipedia, “Almir Guineto” (“the
 *   man who introduced the banjo to samba”).
 * - Violoncelo: Wikipedia, “Cello” (dó2, sol2, ré3, lá3, uma oitava abaixo da viola; clave de fá; o
 *   espigão, de Adrien Servais, por volta de 1845; os mais antigos que sobraram são de Andrea Amati).
 * - Baixolão: Wikipedia, “Acoustic bass guitar” (mi, lá, ré, sol, uma oitava abaixo das quatro cordas
 *   graves do violão; o Ernie Ball Earthwood, de 1972) e “Bass guitar” (mi1, lá1, ré2, sol2, no New
 *   Grove); escrito uma oitava acima do som (“Transposing instrument”).
 * - Kalimba: Wikipedia, “Kalimba” (lamelofone de lâminas de metal; Hugh Tracey, nos anos 1950, a
 *   partir da mbira nyunga nyunga; a de 17 lâminas em dó maior, as mais graves no meio e a escala
 *   alternando para os lados) e Tonalics, “How to Tune a Kalimba” (de dó4 a mi6; ré4 logo à esquerda do
 *   meio, mi4 logo à direita).
 * - Sanfona/acordeão: Wikipédia, “Acordeão” (sanfona no Nordeste, gaita no Sul; fole, teclado e baixos;
 *   Cyrill Demian, Viena; Luiz Gonzaga e “Asa Branca”, 1947) e Wikipedia, “Piano accordion” (teclado de
 *   41 teclas de fá3 a lá6; baixos Stradella; o nome “piano accordion”, de 1910).
 */

export type TipoCurso = 'cordas' | 'kalimba' | 'teclado';

export interface CordaSolta {
  /** a nota em português, como se fala na aula */
  nome: string;
  midi: number;
  /** viola caipira: o par em uníssono ou com uma corda uma oitava acima */
  par?: 'unissono' | 'oitava';
}

export interface AfinacaoCordas {
  id: string;
  nome: string;
  sobre: string;
  /** da 1ª corda (a mais aguda) à última (a mais grave), como se conta no Brasil */
  cordas: CordaSolta[];
}

export interface CursoInstrumento {
  id: string;
  nome: string;
  /** o que aparece no cartão da Trilha */
  chamada: string;
  tipo: TipoCurso;
  afinacoes?: AfinacaoCordas[];
  /** cordas com trastes (as “casas”); sem trastes, a posição é contada em semitons */
  trastes?: boolean;
  /** a casa mais alta das lições (as primeiras posições) */
  casaMax?: number;
  /** a extensão das teclas ou lâminas (kalimba, sanfona) */
  extensao?: [number, number];
  clave: Clave;
  /** quantos semitons a escrita fica acima do som (12 no violão e no baixolão) */
  escritaAcima: number;
  /** aceitar a nota em qualquer oitava (graves que o microfone pega pelo harmônico, pares em oitava) */
  oitavaLivre?: boolean;
  conheca: string[];
  creditos: string;
}

export const CURSOS_DE_INSTRUMENTO: CursoInstrumento[] = [
  {
    id: 'violao',
    nome: 'Violão',
    chamada: 'Seis cordas, as primeiras casas e as primeiras músicas.',
    tipo: 'cordas',
    trastes: true,
    casaMax: 4,
    clave: 'sol8',
    escritaAcima: 12,
    afinacoes: [
      {
        id: 'padrao',
        nome: 'Padrão (mi-lá-ré-sol-si-mi)',
        sobre: 'A afinação de quase todo método de violão.',
        cordas: [
          { nome: 'mi', midi: 64 },
          { nome: 'si', midi: 59 },
          { nome: 'sol', midi: 55 },
          { nome: 'ré', midi: 50 },
          { nome: 'lá', midi: 45 },
          { nome: 'mi', midi: 40 },
        ],
      },
    ],
    conheca: [
      'O violão tem seis cordas. A mais fina, a mais aguda, é a 1ª; a mais grossa, a mais grave, é a 6ª. Da 6ª para a 1ª: mi, lá, ré, sol, si, mi.',
      'O som nasce na corda e ganha corpo no tampo, a frente do violão, com a boca no meio. As cordas vão das tarraxas, na cabeça, até o cavalete, colado no tampo; o rastilho, uma peça de osso, apoia as cordas e decide a altura delas.',
      'No braço ficam os trastes, filetes de metal. O espaço entre dois trastes é a casa: apertar a corda na 1ª casa sobe a nota meio tom; na 2ª, um tom.',
      'A forma de hoje vem da Espanha, do século XIX, do luthier Antonio de Torres Jurado (1817–1892), que aumentou o corpo do violão.',
      'Na partitura, o violão é escrito uma oitava acima do som, na clave de sol com um 8 embaixo: assim as notas graves não precisam de tantas linhas suplementares.',
    ],
    creditos: 'Afinação e escrita: Wikipedia, “Guitar tunings” e “Transposing instrument”. Partes e história: Wikipédia, “Violão”.',
  },
  {
    id: 'viola-caipira',
    nome: 'Viola caipira',
    chamada: 'Dez cordas em cinco pares, no cebolão em mi ou em ré.',
    tipo: 'cordas',
    trastes: true,
    casaMax: 4,
    clave: 'sol8',
    escritaAcima: 12,
    oitavaLivre: true,
    afinacoes: [
      {
        id: 'cebolao-mi',
        nome: 'Cebolão em mi',
        sobre: 'Uma das afinações mais comuns da viola: as cordas soltas formam o acorde de mi maior.',
        cordas: [
          { nome: 'mi', midi: 64, par: 'unissono' },
          { nome: 'si', midi: 59, par: 'unissono' },
          { nome: 'sol♯', midi: 56, par: 'oitava' },
          { nome: 'mi', midi: 52, par: 'oitava' },
          { nome: 'si', midi: 47, par: 'oitava' },
        ],
      },
      {
        id: 'cebolao-re',
        nome: 'Cebolão em ré',
        sobre: 'O mesmo cebolão um tom abaixo, com as cordas menos esticadas: as cordas soltas formam ré maior.',
        cordas: [
          { nome: 'ré', midi: 62, par: 'unissono' },
          { nome: 'lá', midi: 57, par: 'unissono' },
          { nome: 'fá♯', midi: 54, par: 'oitava' },
          { nome: 'ré', midi: 50, par: 'oitava' },
          { nome: 'lá', midi: 45, par: 'oitava' },
        ],
      },
    ],
    conheca: [
      'A viola caipira tem dez cordas em cinco pares: você toca as duas cordas de um par juntas, como se fossem uma só.',
      'Os dois pares mais agudos (o 1º e o 2º) têm as duas cordas na mesma nota. Nos três pares mais graves, uma das cordas soa uma oitava acima da outra: é isso que dá o brilho da viola.',
      'Ela veio das violas portuguesas, parentes do alaúde árabe, e se espalhou pelo Brasil no tempo da colônia, com madeiras daqui.',
      'A viola tem muitas afinações. O cebolão é uma das mais comuns: com as cordas soltas, a viola já toca um acorde maior.',
      'Neste curso a partitura é escrita como a do violão, uma oitava acima do som. Muita gente aprende a viola por tablatura; a pauta aqui é para você ligar o som ao nome das notas.',
    ],
    creditos: 'Pares e afinações: Wikipédia, “Viola caipira” e “Cebolão”. Oitavas: tabela de frequências da escola Souza Lima.',
  },
  {
    id: 'viola-de-arco',
    nome: 'Viola de arco',
    chamada: 'A irmã mais grave do violino, lida na clave de dó.',
    tipo: 'cordas',
    trastes: false,
    casaMax: 6,
    clave: 'do3',
    escritaAcima: 0,
    afinacoes: [
      {
        id: 'padrao',
        nome: 'Lá-ré-sol-dó',
        sobre: 'As quatro cordas em quintas, uma quinta abaixo do violino.',
        cordas: [
          { nome: 'lá', midi: 69 },
          { nome: 'ré', midi: 62 },
          { nome: 'sol', midi: 55 },
          { nome: 'dó', midi: 48 },
        ],
      },
    ],
    conheca: [
      'A viola de arco parece um violino, um pouco maior, com som mais grave e mais encorpado. A técnica é quase a mesma do violino.',
      'As quatro cordas, da mais aguda para a mais grave: lá, ré, sol e dó. Três são as mesmas do violino; o dó grave é só da viola.',
      'O arco, de madeira e crina, faz a corda vibrar. O cavalete segura as cordas e passa a vibração para o tampo; por dentro, a alma, um cilindro de madeira, liga o tampo ao fundo. O espelho é onde os dedos apertam as cordas.',
      'A viola não tem trastes: o lugar de cada nota é aprendido de ouvido. Por isso, neste curso, a posição aparece em semitons acima da corda solta, e o desenho marca onde o dedo vai, como as fitinhas que muitos professores colam no espelho.',
      'A partitura da viola usa a clave de dó: o dó central fica na linha do meio da pauta.',
    ],
    creditos: 'Afinação e clave: Wikipedia, “Viola”. Partes e história: Wikipédia, “Viola (instrumento musical)”.',
  },
  {
    id: 'cavaquinho',
    nome: 'Cavaquinho e banjo de samba',
    chamada: 'Quatro cordas em ré-sol-si-ré, as mesmas no cavaco e no banjo.',
    tipo: 'cordas',
    trastes: true,
    casaMax: 4,
    clave: 'sol',
    escritaAcima: 0,
    afinacoes: [
      {
        id: 'brasil',
        nome: 'Ré-sol-si-ré',
        sobre: 'A afinação do Brasil, do choro, do samba e do pagode. O banjo de samba usa a mesma.',
        cordas: [
          { nome: 'ré', midi: 74 },
          { nome: 'si', midi: 71 },
          { nome: 'sol', midi: 67 },
          { nome: 'ré', midi: 62 },
        ],
      },
    ],
    conheca: [
      'O cavaquinho tem quatro cordas e um corpo pequeno, em forma de oito. Nasceu no Minho, em Portugal, e no Brasil virou o coração do choro e do samba.',
      'No Brasil ele se afina ré-sol-si-ré, da corda mais grave (a 4ª) para a mais aguda (a 1ª). A 1ª corda soa uma oitava acima da 4ª.',
      'O banjo de samba tem o braço e a afinação do cavaquinho e o corpo de banjo, com uma pele esticada, que soa mais forte numa roda cheia de percussão. Quem levou o banjo para o samba, nos anos 1970, foi Almir Guineto, do Fundo de Quintal.',
      'Como as cordas e as casas são as mesmas, tudo deste curso vale para os dois: escolha o seu e toque junto.',
    ],
    creditos: 'Cavaquinho: Wikipédia, “Cavaquinho”. Oitavas: tabela de frequências da escola Souza Lima. Banjo de samba: Loja Open Stage, “Banjo americano x banjo de samba”, e Wikipedia, “Almir Guineto”.',
  },
  {
    id: 'violoncelo',
    nome: 'Violoncelo',
    chamada: 'Quatro cordas graves, o arco e a clave de fá.',
    tipo: 'cordas',
    trastes: false,
    casaMax: 6,
    clave: 'fa',
    escritaAcima: 0,
    oitavaLivre: true,
    afinacoes: [
      {
        id: 'padrao',
        nome: 'Lá-ré-sol-dó',
        sobre: 'As mesmas notas da viola de arco, uma oitava abaixo.',
        cordas: [
          { nome: 'lá', midi: 57 },
          { nome: 'ré', midi: 50 },
          { nome: 'sol', midi: 43 },
          { nome: 'dó', midi: 36 },
        ],
      },
    ],
    conheca: [
      'O violoncelo se toca sentado, apoiado no chão pelo espigão, uma haste que Adrien Servais introduziu por volta de 1845.',
      'As quatro cordas, da mais aguda para a mais grave: lá, ré, sol e dó, as mesmas notas da viola de arco, uma oitava abaixo.',
      'Como na viola, o cavalete passa a vibração das cordas para o tampo, e a alma, por dentro, liga o tampo ao fundo. O arco é de madeira, tradicionalmente pau-brasil, com crina de cavalo.',
      'O violoncelo surgiu por volta de 1660, a partir do baixo de violino. Os mais antigos que sobraram são de Andrea Amati.',
      'Ele não tem trastes: a posição aparece em semitons acima da corda solta. A partitura usa a clave de fá, a das notas graves.',
      'O microfone às vezes ouve as notas mais graves uma oitava acima (pelo harmônico); por isso, neste curso, vale a nota certa em qualquer oitava.',
    ],
    creditos: 'Afinação, clave, partes e história: Wikipedia, “Cello”.',
  },
  {
    id: 'baixolao',
    nome: 'Baixolão',
    chamada: 'O baixo acústico: as quatro cordas graves do violão, uma oitava abaixo.',
    tipo: 'cordas',
    trastes: true,
    casaMax: 4,
    clave: 'fa',
    escritaAcima: 12,
    oitavaLivre: true,
    afinacoes: [
      {
        id: 'padrao',
        nome: 'Mi-lá-ré-sol',
        sobre: 'Uma oitava abaixo das quatro cordas mais graves do violão.',
        cordas: [
          { nome: 'sol', midi: 43 },
          { nome: 'ré', midi: 38 },
          { nome: 'lá', midi: 33 },
          { nome: 'mi', midi: 28 },
        ],
      },
    ],
    conheca: [
      'O baixolão é o baixo acústico: um corpo oco, como o do violão, só que maior, com quatro cordas grossas.',
      'As cordas, da mais grave (a 4ª) para a mais aguda (a 1ª): mi, lá, ré, sol, uma oitava abaixo das quatro cordas graves do violão.',
      'Um dos primeiros baixos acústicos modernos foi o Earthwood, da Ernie Ball, de 1972. Ele ficou famoso nos anos 1980, nos shows acústicos da televisão.',
      'O som é tão grave que, numa roda com outros instrumentos, muitas vezes o baixolão precisa de amplificador.',
      'A partitura usa a clave de fá, uma oitava acima do som. E, como no violoncelo, o microfone pode ouvir as notas graves uma oitava acima: vale a nota certa em qualquer oitava.',
    ],
    creditos: 'Afinação e história: Wikipedia, “Acoustic bass guitar” e “Bass guitar”. Escrita: “Transposing instrument”.',
  },
  {
    id: 'kalimba',
    nome: 'Kalimba',
    chamada: '17 lâminas em dó maior, tocadas com os polegares.',
    tipo: 'kalimba',
    extensao: [60, 88],
    clave: 'sol',
    escritaAcima: 0,
    conheca: [
      'A kalimba é um instrumento de lâminas de metal presas numa caixa de madeira. Você segura com as duas mãos e belisca as lâminas com os polegares.',
      'Ela vem da mbira, da África. Nos anos 1950, o etnomusicólogo Hugh Tracey criou a kalimba a partir da mbira nyunga nyunga e a levou para o mundo.',
      'A mais comum hoje tem 17 lâminas afinadas em dó maior, do dó4 ao mi6: só as notas “brancas” do piano.',
      'A lâmina mais comprida, no meio, é a mais grave: o dó4. A escala vai alternando para os lados: o ré4 logo à esquerda, o mi4 logo à direita, o fá4 de novo à esquerda, e assim por diante. As lâminas curtinhas das pontas são as mais agudas.',
    ],
    creditos: 'Wikipedia, “Kalimba”. A afinação de 17 lâminas: Tonalics, “How to Tune a Kalimba”.',
  },
  {
    id: 'sanfona',
    nome: 'Sanfona (acordeão)',
    chamada: 'O teclado da mão direita, o fole e as primeiras melodias.',
    tipo: 'teclado',
    extensao: [53, 93],
    clave: 'sol',
    escritaAcima: 0,
    conheca: [
      'Sanfona, acordeão, acordeom, gaita: no Nordeste é sanfona, no Sul é gaita. É o instrumento do forró e do baião; Luiz Gonzaga, o Rei do Baião, gravou “Asa Branca” em 1947.',
      'A sanfona tem um fole no meio, aberto e fechado pelo braço esquerdo, e palhetas de metal que vibram com o ar. A mão direita toca a melodia num teclado como o do piano; a esquerda toca os baixos, botões que fazem a nota grave e os acordes.',
      'O acordeão moderno nasceu em Viena, com Cyrill Demian (1829), que deu o nome por causa dos acordes da mão esquerda. A cidade italiana de Castelfidardo virou um grande centro de fabricação.',
      'Um acordeão de 120 baixos tem 41 teclas na mão direita, do fá3 ao lá6. Este curso é dessa mão: as teclas brancas e pretas são as mesmas do piano, e o desenho mostra qual apertar.',
      'Sem o fole, não sai som: abra e feche devagar, sem mudar de direção no meio de uma nota.',
    ],
    creditos: 'Wikipédia, “Acordeão”, e Wikipedia, “Piano accordion”.',
  },
];

export const cursoDeInstrumento = (id: string) => CURSOS_DE_INSTRUMENTO.find((c) => c.id === id);

/** Onde tocar uma nota nas cordas: a corda (índice de `cordas`, da 1ª) e a casa (0 = corda solta). */
export interface PosicaoCorda {
  corda: number;
  casa: number;
}

/** A posição mais baixa no braço (a casa menor) que dá a nota, até `casaMax`; null se não cabe. */
export function posicaoNasCordas(midi: number, cordas: CordaSolta[], casaMax: number): PosicaoCorda | null {
  let melhor: PosicaoCorda | null = null;
  cordas.forEach((c, i) => {
    const casa = midi - c.midi;
    if (casa < 0 || casa > casaMax) return;
    if (!melhor || casa < melhor.casa) melhor = { corda: i, casa };
  });
  return melhor;
}

/** As notas da escala maior (o modelo de dó: tom, tom, semitom, tom, tom, tom, semitom). */
const ESCALA_MAIOR = [0, 2, 4, 5, 7, 9, 11, 12];

/** Os tons das lições: dó, sol, ré, lá, mi e fá (poucos sustenidos), em qualquer oitava. */
const TONS = [0, 7, 2, 9, 4, 5];

/**
 * Leva a melodia (escrita em dó, a partir do dó4) para um tom em que todas as notas cabem no
 * instrumento, preferindo o tom mais perto do meio da extensão. Devolve o deslocamento em semitons,
 * ou null se nenhum tom serve.
 */
export function escolherTom(melodia: number[], cabe: (midi: number) => boolean, meio: number): number | null {
  let melhor: { d: number; dist: number } | null = null;
  for (let d = -48; d <= 36; d++) {
    if (!TONS.includes(((d % 12) + 12) % 12)) continue;
    if (!melodia.every((m) => cabe(m + d))) continue;
    const media = melodia.reduce((a, m) => a + m + d, 0) / melodia.length;
    const dist = Math.abs(media - meio);
    if (!melhor || dist < melhor.dist) melhor = { d, dist };
  }
  return melhor ? melhor.d : null;
}

/** A escala maior a partir de uma tônica (as 8 notas, com a oitava). */
export const escalaMaior = (tonica: number) => ESCALA_MAIOR.map((s) => tonica + s);

/** Se a nota cabe no curso: nas primeiras casas das cordas, ou na extensão das teclas/lâminas. */
export function cabeNoCurso(curso: CursoInstrumento, afinacao: AfinacaoCordas | undefined, midi: number): boolean {
  if (curso.tipo === 'cordas') return !!afinacao && posicaoNasCordas(midi, afinacao.cordas, curso.casaMax ?? 4) !== null;
  const [de, ate] = curso.extensao!;
  // a kalimba de 17 lâminas só tem as notas de dó maior
  if (curso.tipo === 'kalimba' && [1, 3, 6, 8, 10].includes(((midi % 12) + 12) % 12)) return false;
  return midi >= de && midi <= ate;
}

/** O meio do instrumento, para o tom das músicas ficar confortável. */
export function meioDoCurso(curso: CursoInstrumento, afinacao: AfinacaoCordas | undefined): number {
  if (curso.tipo === 'cordas' && afinacao) {
    const notas = afinacao.cordas.map((c) => c.midi);
    return (Math.min(...notas) + Math.max(...notas) + (curso.casaMax ?? 4)) / 2;
  }
  const [de, ate] = curso.extensao!;
  return (de + ate) / 2 - 4;
}

/**
 * As lâminas da kalimba de 17 em dó maior, da esquerda para a direita: a mais grave (dó4) no meio, e a
 * escala alternando ré4 à esquerda, mi4 à direita, e assim até ré6 e mi6 nas pontas.
 */
export function laminasDaKalimba(): number[] {
  const escala = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84, 86, 88];
  const esquerda: number[] = [];
  const direita: number[] = [];
  escala.slice(1).forEach((m, i) => (i % 2 === 0 ? esquerda : direita).push(m));
  return [...esquerda.reverse(), 60, ...direita];
}
