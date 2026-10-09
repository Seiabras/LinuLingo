/**
 * Códigos (Cultura → Tipos de línguas → Secretas e cifras → Códigos): jeitos de passar as LETRAS de
 * uma língua por outro meio (sinal, toque, número) ou de embaralhá-las por uma regra. Nenhum deles é
 * uma língua: não têm vocabulário nem gramática, só uma tabela ou uma regra aplicada letra por letra.
 * Cada um tem um codificador (`codificar`), testado em codigos.test.ts.
 *
 * Fontes das notas históricas: Wikipédia (en/pt) dos verbetes “Morse code”, “NATO phonetic
 * alphabet”, “Braille”, “Caesar cipher”, “Atbash”, “Polybius square”, “Tap code”, “Bacon's cipher”
 * e “ASCII”.
 *
 * Fonte do semáforo de bandeiras (`SEMAFORO_TABLE`): as 26 posições (A–Z) nunca aparecem como texto
 * em nenhuma fonte encontrada, só como desenho — por isso cada posição foi lida direto das
 * coordenadas vetoriais dos desenhos oficiais da Wikipédia (commons.wikimedia.org, arquivos
 * “Semaphore_<letra>.svg”, con­feridos contra o ângulo de cada bandeira na imagem de referência do
 * dcode.fr (dcode.fr/semaphore-flags). As 26 letras estão confirmadas: A–O, Q–V e Z pela leitura
 * direta das coordenadas finais de cada bandeira; P, W, X e Y (bloqueadas por limite de taxa do
 * Wikimedia na sessão anterior) pela regra de rotação extraída da matriz/`rotate()` do braço (ângulo
 * da bandeira em graus = ângulo da matriz + 90°, regra calibrada e verificada contra 8 letras já
 * confirmadas antes de aplicar às 4 que faltavam) — ver PENDENTES.md para o detalhe da conferência.
 */

export type CodigoGrupo = 'sinal' | 'soletrar' | 'escrita' | 'cifra' | 'computador';

export const GRUPOS_CODIGO: Record<CodigoGrupo, string> = {
  sinal: 'Por sinal (som, luz, toque)',
  soletrar: 'Para soletrar sem erro',
  escrita: 'Escrita pelo tato',
  cifra: 'Cifras clássicas (para esconder)',
  computador: 'Do computador',
};

export interface Codigo {
  id: string;
  nome: string;
  grupo: CodigoGrupo;
  /** quando e quem */
  origem: string;
  texto: string;
  /** a tabela para mostrar: [letra, código] */
  tabela?: [string, string][];
  /** um exemplo pronto: [original, codificado, explicação] */
  exemplo: [string, string, string];
  codificar: (texto: string) => string;
  /** a fonte monoespaçada ajuda a ler o resultado (pontos e traços, números) */
  mono?: boolean;
  /** o resultado são celas de braille: desenhadas ponto a ponto (nem todo aparelho tem a fonte) */
  braille?: boolean;
}

/** Tira acentos e cedilha e passa para maiúsculas: os códigos clássicos só têm as 26 letras. */
export function semAcento(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
}

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const palavras = (texto: string) => semAcento(texto).split(/\s+/).filter(Boolean);

// ---------- morse ----------

export const MORSE_TABLE: [string, string][] = [
  ['A', '.-'], ['B', '-...'], ['C', '-.-.'], ['D', '-..'], ['E', '.'], ['F', '..-.'], ['G', '--.'], ['H', '....'],
  ['I', '..'], ['J', '.---'], ['K', '-.-'], ['L', '.-..'], ['M', '--'], ['N', '-.'], ['O', '---'], ['P', '.--.'],
  ['Q', '--.-'], ['R', '.-.'], ['S', '...'], ['T', '-'], ['U', '..-'], ['V', '...-'], ['W', '.--'], ['X', '-..-'],
  ['Y', '-.--'], ['Z', '--..'],
  ['0', '-----'], ['1', '.----'], ['2', '..---'], ['3', '...--'], ['4', '....-'], ['5', '.....'],
  ['6', '-....'], ['7', '--...'], ['8', '---..'], ['9', '----.'],
];
const MORSE = new Map(MORSE_TABLE);

/** Letras separadas por espaço, palavras por “ / ” (o jeito comum de escrever morse no papel). */
export function morse(texto: string): string {
  return palavras(texto)
    .map((p) => [...p].map((c) => MORSE.get(c)).filter(Boolean).join(' '))
    .filter(Boolean)
    .join(' / ');
}

export const MORSE_SOS = {
  signal: '... --- ...',
  text: 'SOS: fácil de bater e de reconhecer mesmo sem experiência — por isso virou o sinal internacional de socorro em 1906, e continua sendo, mesmo hoje.',
};

// ---------- semáforo de bandeiras ----------

/**
 * A posição de cada bandeira é uma de 8 direções (como as horas de um relógio), aqui escrita como
 * seta: ao redor do corpo, braço esticado na direção indicada. Cada letra usa duas setas (a bandeira
 * da esquerda de quem sinaliza, depois a da direita) — ver a nota de fonte no topo do arquivo: as 26
 * letras foram confirmadas contra 2 fontes independentes.
 */
const SETA_DIRECAO: Record<string, string> = { N: '↑', NE: '↗', E: '→', SE: '↘', S: '↓', SW: '↙', W: '←', NW: '↖' };

/** [letra, [bandeira esquerda, bandeira direita]] — direções em graus de 45° (N/NE/E/SE/S/SW/W/NW). */
const SEMAFORO_DIRECOES: [string, [string, string]][] = [
  ['A', ['S', 'SW']], ['B', ['S', 'W']], ['C', ['S', 'NW']], ['D', ['S', 'N']],
  ['E', ['NE', 'S']], ['F', ['E', 'S']], ['G', ['SE', 'S']], ['H', ['SW', 'W']],
  ['I', ['SW', 'NW']], ['J', ['E', 'N']], ['K', ['N', 'SW']], ['L', ['NE', 'SW']],
  ['M', ['E', 'SW']], ['N', ['SE', 'SW']], ['O', ['NW', 'W']], ['Q', ['NE', 'W']],
  ['R', ['E', 'W']], ['S', ['SE', 'W']], ['T', ['N', 'NW']], ['U', ['NE', 'NW']],
  ['V', ['SE', 'N']], ['Z', ['E', 'SE']],
  ['P', ['N', 'W']], ['W', ['E', 'NE']], ['X', ['SE', 'NE']], ['Y', ['E', 'NW']],
];

export const SEMAFORO_TABLE: [string, string][] = SEMAFORO_DIRECOES.map(([l, [a, b]]) => [l, SETA_DIRECAO[a] + SETA_DIRECAO[b]]);
const SEMAFORO = new Map(SEMAFORO_TABLE);

/** Letras separadas por espaço, palavras por “ / ”. */
export function semaforo(texto: string): string {
  return palavras(texto)
    .map((p) => [...p].map((c) => SEMAFORO.get(c)).filter(Boolean).join(' '))
    .filter(Boolean)
    .join(' / ');
}

// ---------- alfabeto fonético da OTAN (ICAO) ----------

export const OTAN: [string, string][] = [
  ['A', 'Alfa'], ['B', 'Bravo'], ['C', 'Charlie'], ['D', 'Delta'], ['E', 'Echo'], ['F', 'Foxtrot'], ['G', 'Golf'],
  ['H', 'Hotel'], ['I', 'India'], ['J', 'Juliett'], ['K', 'Kilo'], ['L', 'Lima'], ['M', 'Mike'], ['N', 'November'],
  ['O', 'Oscar'], ['P', 'Papa'], ['Q', 'Quebec'], ['R', 'Romeo'], ['S', 'Sierra'], ['T', 'Tango'], ['U', 'Uniform'],
  ['V', 'Victor'], ['W', 'Whiskey'], ['X', 'X-ray'], ['Y', 'Yankee'], ['Z', 'Zulu'],
];
const OTAN_MAP = new Map(OTAN);

export function otan(texto: string): string {
  return palavras(texto)
    .map((p) => [...p].map((c) => OTAN_MAP.get(c) ?? (/[0-9]/.test(c) ? c : undefined)).filter(Boolean).join(' '))
    .filter(Boolean)
    .join(' · ');
}

// ---------- braille ----------

// as celas de 6 pontos em Unicode (U+2800…): a–j usam só os pontos de cima; k–t somam o ponto 3;
// u, v, x, y, z somam os pontos 3 e 6 — o w ficou de fora porque o francês de 1829 não o usava
const BRAILLE_LETRAS = '⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵';
export const BRAILLE_TABLE: [string, string][] = [...LETRAS].map((l, i) => [l, BRAILLE_LETRAS[i]]);
/** o sinal de número: depois dele, a–j valem 1–9 e 0 */
export const BRAILLE_NUMERO = '⠼';

export function braille(texto: string): string {
  return palavras(texto)
    .map((p) => {
      let out = '';
      let emNumero = false;
      for (const c of p) {
        const i = LETRAS.indexOf(c);
        if (i >= 0) {
          out += BRAILLE_LETRAS[i];
          emNumero = false;
        } else if (/[0-9]/.test(c)) {
          if (!emNumero) out += BRAILLE_NUMERO;
          emNumero = true;
          out += BRAILLE_LETRAS[c === '0' ? 9 : Number(c) - 1];
        }
      }
      return out;
    })
    .filter(Boolean)
    .join(' ');
}

/** Os pontos (1 a 6) de uma cela de braille em Unicode: o bit k de (código − U+2800) é o ponto k + 1. */
export function pontosBraille(cela: string): number[] {
  const n = cela.codePointAt(0)! - 0x2800;
  return [1, 2, 3, 4, 5, 6].filter((p) => n & (1 << (p - 1)));
}

// ---------- cifras clássicas ----------

/** Cifra de César: cada letra anda `passo` casas no alfabeto (Júlio César usava 3). */
export function cesar(texto: string, passo = 3): string {
  const p = ((passo % 26) + 26) % 26;
  return [...semAcento(texto)].map((c) => {
    const i = LETRAS.indexOf(c);
    return i < 0 ? c : LETRAS[(i + p) % 26];
  }).join('');
}

/** Atbash: o alfabeto espelhado (A↔Z, B↔Y…). Aplicar duas vezes devolve o original. */
export function atbash(texto: string): string {
  return [...semAcento(texto)].map((c) => {
    const i = LETRAS.indexOf(c);
    return i < 0 ? c : LETRAS[25 - i];
  }).join('');
}

// a versão de 26 letras únicas (a mais usada hoje): é a contagem binária de 0 a 25 escrita em a/b
export const BACON_TABLE: [string, string][] = [...LETRAS].map((l, i) => [l, i.toString(2).padStart(5, '0').replace(/0/g, 'a').replace(/1/g, 'b')]);
const BACON = new Map(BACON_TABLE);

/** Cifra de Bacon: cada letra vira um grupo de 5 "a"/"b" (esteganografia: a mensagem se esconde na forma do texto, não no conteúdo). */
export function bacon(texto: string): string {
  return palavras(texto)
    .map((p) => [...p].map((c) => BACON.get(c)).filter(Boolean).join(' '))
    .filter(Boolean)
    .join(' / ');
}

// o quadrado de Políbio com o alfabeto latino: 25 casas, então I e J dividem a mesma
const POLIBIO = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
export const POLIBIO_GRADE: string[] = [0, 1, 2, 3, 4].map((r) => POLIBIO.slice(r * 5, r * 5 + 5));

/** Quadrado de Políbio: cada letra vira dois números, a linha e a coluna (I e J = 24). */
export function polibio(texto: string): string {
  return palavras(texto)
    .map((p) =>
      [...p]
        .map((c) => {
          const i = POLIBIO.indexOf(c === 'J' ? 'I' : c);
          return i < 0 ? '' : `${Math.floor(i / 5) + 1}${(i % 5) + 1}`;
        })
        .filter(Boolean)
        .join(' '),
    )
    .filter(Boolean)
    .join(' / ');
}

// o código de batidas tira o K (que vira C) em vez de juntar I e J
const BATIDAS = 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
export const BATIDAS_GRADE: string[] = [0, 1, 2, 3, 4].map((r) => BATIDAS.slice(r * 5, r * 5 + 5));

/** Código de batidas: batidas da linha, uma pausa, batidas da coluna (• = uma batida). */
export function batidas(texto: string): string {
  return palavras(texto)
    .map((p) =>
      [...p]
        .map((c) => {
          const i = BATIDAS.indexOf(c === 'K' ? 'C' : c);
          return i < 0 ? '' : `${'•'.repeat(Math.floor(i / 5) + 1)} ${'•'.repeat((i % 5) + 1)}`;
        })
        .filter(Boolean)
        .join('  |  '),
    )
    .filter(Boolean)
    .join('  //  ');
}

// ---------- computador ----------

/** ASCII: cada letra é um número (A = 65, a = 97), escrito aqui em 8 bits. Só as letras sem acento. */
export function ascii(texto: string): string {
  return [...texto.normalize('NFD').replace(/[̀-ͯ]/g, '')]
    .filter((c) => c.charCodeAt(0) < 128)
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

export const CODIGOS_INTRO =
  'Código não é língua: ninguém “fala” morse nem braille. É um jeito de passar as LETRAS de uma língua por outro meio — bipe, luz, toque no papel, número — ou de embaralhá-las por uma regra, para esconder a mensagem. Por isso nenhum código traduz uma frase: ele troca letra por letra. Experimente: escreva uma palavra e veja como ela fica em cada um.';

export const CODIGOS: Codigo[] = [
  {
    id: 'morse',
    nome: 'Código morse',
    grupo: 'sinal',
    origem: 'Samuel Morse e Alfred Vail, EUA, anos 1830–40; padrão internacional de 1865',
    texto:
      'Criado para o telégrafo elétrico. O morse que se usa hoje vem de uma revisão de Friedrich Gerke, de 1848, padronizada numa conferência em Paris em 1865 — diferente do morse original americano. Ponto e traço viram bipe curto e longo no som, lampejo curto e longo na luz, ou toque curto e longo no ombro.',
    tabela: MORSE_TABLE,
    exemplo: ['SOS', MORSE_SOS.signal, MORSE_SOS.text],
    codificar: morse,
    mono: true,
  },
  {
    id: 'batidas',
    nome: 'Código de batidas',
    grupo: 'sinal',
    origem: 'prisioneiros de guerra americanos no Vietnã, a partir de 1965',
    texto:
      'Presos em celas separadas, sem poder falar, os prisioneiros batiam na parede: primeiro o número da LINHA da letra numa grade de 5 × 5, uma pausa, depois o número da COLUNA. A grade é a do quadrado de Políbio, mas sem o K (o C faz as vezes dele). Quem o espalhou entre os presos foi o piloto Carlyle “Smitty” Harris, que tinha aprendido a ideia num treinamento.',
    tabela: BATIDAS_GRADE.map((linha, r) => [`${r + 1}`, [...linha].join(' ')]),
    exemplo: ['OI', batidas('OI'), 'O fica na linha 3, coluna 4; o I, na linha 2, coluna 4.'],
    codificar: batidas,
    mono: true,
  },
  {
    id: 'semaforo',
    nome: 'Semáforo de bandeiras',
    grupo: 'sinal',
    origem: 'marinhas europeias, século XIX, a partir do telégrafo óptico de Claude Chappe (França, 1790s)',
    texto:
      'Quem sinaliza segura uma bandeira em cada mão e estica os braços; cada letra é uma combinação de duas das 8 posições possíveis (como as horas de um relógio). Foi criado para navios se comunicarem à distância, antes do rádio, e ainda é usado hoje em treinamento naval. As setas abaixo mostram a posição de cada bandeira (↑ para cima, ↘ para baixo e para o lado…). As 26 letras estão confirmadas contra duas fontes independentes (ver a nota no topo de `codigos.ts`).',
    tabela: SEMAFORO_TABLE,
    exemplo: ['SINAL', semaforo('SINAL'), 'Cada letra usa duas setas: a posição da bandeira da esquerda de quem sinaliza, depois a da direita.'],
    codificar: semaforo,
    mono: true,
  },
  {
    id: 'otan',
    nome: 'Alfabeto fonético da OTAN',
    grupo: 'soletrar',
    origem: 'Organização da Aviação Civil Internacional (ICAO), em vigor desde 1956',
    texto:
      'Pelo rádio, “B”, “D”, “P” e “T” soam quase iguais. A solução foi dar a cada letra uma palavra-código fácil de entender em inglês, francês e espanhol — testada com falantes de várias línguas antes de ser adotada. É usado na aviação, no mar, pelos militares e em centrais de atendimento. A grafia oficial é “Alfa” e “Juliett” (com f e com dois t), para quem não fala inglês pronunciar certo.',
    tabela: OTAN,
    exemplo: ['LINU', otan('LINU'), 'Soletrando o nome do Linu pelo rádio.'],
    codificar: otan,
  },
  {
    id: 'braille',
    nome: 'Braille',
    grupo: 'escrita',
    origem: 'Louis Braille, França, 1829',
    texto:
      'Louis Braille, cego desde criança, tinha 15 anos quando criou o sistema, adaptando a “escrita noturna” de Charles Barbier, feita para soldados lerem mensagens no escuro. Cada letra é uma cela de até 6 pontos em relevo, lida com a ponta do dedo. De a a j, só os pontos de cima; de k a t, soma-se um ponto embaixo; de u a z, mais um — menos o w, que não existia no francês da época. O Brasil foi o primeiro país da América Latina a adotá-lo, em 1854, no Imperial Instituto dos Meninos Cegos (hoje Instituto Benjamin Constant). O português tem celas próprias para as letras com acento (á, ç, ã…), que este codificador ainda não mostra.',
    tabela: BRAILLE_TABLE,
    exemplo: ['LINU', braille('LINU'), 'Os números usam as mesmas celas de a a j, depois do sinal de número ⠼.'],
    codificar: braille,
    braille: true,
  },
  {
    id: 'cesar',
    nome: 'Cifra de César',
    grupo: 'cifra',
    origem: 'Roma antiga, século I a.C.',
    texto:
      'O historiador Suetônio conta que Júlio César escrevia as cartas secretas trocando cada letra pela que vem três casas depois no alfabeto: A vira D, B vira E… e, no fim, X, Y e Z voltam para A, B e C. Para ler, anda-se três casas para trás. Hoje é a primeira cifra que se aprende — e a mais fácil de quebrar: só há 25 passos possíveis para testar.',
    exemplo: ['LINU', cesar('LINU'), 'Cada letra andou 3 casas: L→O, I→L, N→Q, U→X.'],
    codificar: (t) => cesar(t, 3),
    mono: true,
  },
  {
    id: 'atbash',
    nome: 'Atbash',
    grupo: 'cifra',
    origem: 'hebraico antigo; aparece na Bíblia, no livro de Jeremias',
    texto:
      'O alfabeto é espelhado: a primeira letra troca com a última, a segunda com a penúltima, e assim por diante. O nome vem disso: álef ↔ tav, bet ↔ shin (a-t-b-sh). No livro de Jeremias, “Sesaque” é Babel escrita em atbash. Com o nosso alfabeto, A ↔ Z, B ↔ Y, C ↔ X — e cifrar duas vezes devolve o texto original.',
    exemplo: ['LINU', atbash('LINU'), 'L↔O, I↔R, N↔M, U↔F.'],
    codificar: atbash,
    mono: true,
  },
  {
    id: 'bacon',
    nome: 'Cifra de Bacon',
    grupo: 'cifra',
    origem: 'Francis Bacon, Inglaterra, 1605',
    texto:
      'O filósofo e estadista inglês Francis Bacon criou essa esteganografia: a mensagem se esconde na FORMA do texto, não no conteúdo. Cada letra vira um grupo de 5 "a"/"b"; na ideia original, Bacon escondia esse padrão num texto comum, usando dois estilos de letra sutilmente diferentes (uma fonte "a", outra "b") — por fora, o texto parecia inofensivo. Na versão original, I/J e U/V dividiam o mesmo código, porque o alfabeto da época tratava cada par como uma letra só; a tabela abaixo é a versão mais usada hoje, com 26 códigos únicos (a contagem binária de 0 a 25).',
    tabela: BACON_TABLE,
    exemplo: ['OI', bacon('OI'), 'O = "abbba", I = "abaaa": cada grupo de 5 letras a/b é uma letra do alfabeto comum.'],
    codificar: bacon,
    mono: true,
  },
  {
    id: 'polibio',
    nome: 'Quadrado de Políbio',
    grupo: 'cifra',
    origem: 'Políbio, historiador grego, século II a.C.',
    texto:
      'Políbio descreveu um jeito de mandar mensagens de longe com tochas: as letras ficam numa grade de 5 × 5, e cada uma é dada por dois números, o da linha e o da coluna (com tochas, era o número de tochas erguidas à esquerda e à direita). O grego tinha 24 letras; com o nosso alfabeto de 26, I e J dividem uma casa. A mesma grade deu origem ao código de batidas.',
    tabela: POLIBIO_GRADE.map((linha, r) => [`${r + 1}`, [...linha].join(' ')]),
    exemplo: ['LINU', polibio('LINU'), 'L = linha 3, coluna 1; I = 2,4; N = 3,3; U = 4,5.'],
    codificar: polibio,
    mono: true,
  },
  {
    id: 'ascii',
    nome: 'ASCII (os números das letras no computador)',
    grupo: 'computador',
    origem: 'Estados Unidos, 1963',
    texto:
      'O computador só guarda números. O ASCII combinou um número para cada letra, algarismo e sinal do inglês: A = 65, B = 66… e a minúscula a = 97. Em binário (só 0 e 1, como a máquina guarda), A é 01000001. Letras com acento ficaram de fora — para elas veio depois o Unicode, que hoje tem números para as letras de quase todas as escritas do mundo, inclusive as deste app.',
    exemplo: ['Oi', ascii('Oi'), 'O = 79, i = 105, em binário de 8 dígitos.'],
    codificar: ascii,
    mono: true,
  },
];
