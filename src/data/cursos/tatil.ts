import type { MiniCourse, MiniItem } from './tipos';

/** Os pontos de cada letra no Braille (a cela tem 6 pontos: 1-2-3 à esquerda, de cima para baixo; 4-5-6 à direita). */
export const BRAILLE: Record<string, string> = {
  a: '1', b: '12', c: '14', d: '145', e: '15', f: '124', g: '1245', h: '125', i: '24', j: '245',
  k: '13', l: '123', m: '134', n: '1345', o: '135', p: '1234', q: '12345', r: '1235', s: '234', t: '2345',
  u: '136', v: '1236', x: '1346', y: '13456', z: '1356', w: '2456',
  // acentos do português (Grafia Braille para a Língua Portuguesa)
  ç: '12346', á: '12356', é: '123456', í: '34', ó: '346', ú: '23456', à: '1246', â: '16', ê: '126', ô: '1456', ã: '345', õ: '246',
};
export const BRAILLE_NUMBER = '3456';
export const BRAILLE_CAPITAL = '46';

const letters = (s: string): MiniItem[] => [...s].map((c) => ({ term: c, meaning: `letra ${c.toUpperCase()}`, braille: BRAILLE[c], how: `pontos ${[...BRAILLE[c]].join('-')}` }));

/** Braille e comunicação tátil: ler com os dedos e conversar pelo toque. */
export const CURSO_TATIL: MiniCourse = {
  id: 'tatil',
  name: 'Braille e comunicação tátil',
  emoji: '⠃',
  kind: 'tatil',
  summary: 'O Braille (a escrita que se lê com os dedos), com as letras, os números e os acentos do português, e as formas de conversar pelo toque que as pessoas surdocegas usam.',
  sources: [
    { label: 'Instituto Benjamin Constant (Braille no Brasil)', url: 'https://www.gov.br/ibc/pt-br' },
    { label: 'Grafia Braille para a Língua Portuguesa (MEC)', url: 'http://portal.mec.gov.br/' },
  ],
  lessons: [
    {
      id: 'cela',
      title: 'A cela e as letras de A a J',
      emoji: '⠁',
      intro: [
        'O Braille não é uma língua: é um sistema de escrita, lido com as pontas dos dedos. Cada caractere é uma cela de 6 pontos em relevo, em duas colunas de três. Os pontos são numerados: 1, 2 e 3 na coluna da esquerda, de cima para baixo; 4, 5 e 6 na da direita.',
        'Louis Braille se feriu num olho aos 3 anos e ficou totalmente cego por volta dos 5; aos 15, em 1824, adaptou um código militar de “escrita noturna” de 12 pontos, de Charles Barbier. O sistema dele, publicado em 1829, cabe inteiro debaixo de uma ponta de dedo.',
        'As 10 primeiras letras usam só os 4 pontos de cima (1, 2, 4 e 5). Aprenda estas, porque o resto do alfabeto é construído a partir delas.',
      ],
      items: letters('abcdefghij'),
      quiz: [
        { q: 'Que letra é esta?', braille: '125', options: ['h', 'f', 'j'], answer: 0 },
        { q: 'Que letra é esta?', braille: '14', options: ['b', 'c', 'e'], answer: 1 },
        { q: 'Que letra é esta?', braille: '245', options: ['i', 'd', 'j'], answer: 2 },
        { q: 'O Braille é uma língua?', options: ['Sim', 'Não: é um sistema de escrita'], answer: 1, why: 'Com ele se escreve português, inglês, japonês… e até música e matemática.' },
      ],
    },
    {
      id: 'k-t',
      title: 'De K a T: some o ponto 3',
      emoji: '⠅',
      intro: ['Truque: as letras de K a T são as de A a J com o ponto 3 a mais. K = A + 3, L = B + 3, M = C + 3… até T = J + 3.'],
      items: letters('klmnopqrst'),
      quiz: [
        { q: 'Que letra é esta?', braille: '123', options: ['l', 'k', 'b'], answer: 0 },
        { q: 'Se o “c” tem os pontos 1-4, o “m” tem…', options: ['1-3-4', '1-4-5', '1-2-4'], answer: 0 },
        { q: 'Que letra é esta?', braille: '234', options: ['t', 's', 'r'], answer: 1 },
      ],
    },
    {
      id: 'u-z',
      title: 'De U a Z, e o W diferente',
      emoji: '⠥',
      intro: [
        'As letras U, V, X, Y e Z são as de A a E com os pontos 3 e 6 a mais.',
        'O W ficou de fora do padrão: o francês do tempo de Louis Braille quase não usava essa letra, e ela entrou depois, com os pontos 2-4-5-6.',
      ],
      items: letters('uvxyzw'),
      quiz: [
        { q: 'Por que o W não segue o padrão?', options: ['Porque o francês da época quase não o usava', 'Porque foi esquecido', 'Porque é um número'], answer: 0 },
        { q: 'Que letra é esta?', braille: '136', options: ['u', 'k', 'v'], answer: 0 },
        { q: 'Que letra é esta?', braille: '1356', options: ['y', 'z', 'x'], answer: 1 },
      ],
    },
    {
      id: 'numeros',
      title: 'Maiúsculas e números',
      emoji: '🔢',
      intro: [
        'O Braille não tem letras maiúsculas diferentes: um sinal antes da letra avisa que ela é maiúscula — os pontos 4-6.',
        'Os números também não têm celas próprias: o sinal de número (pontos 3-4-5-6) antes das letras de A a J as transforma em algarismos. A = 1, B = 2… I = 9 e J = 0.',
      ],
      items: [
        { term: 'maiúscula', meaning: 'sinal de maiúscula (vem antes da letra)', braille: BRAILLE_CAPITAL, how: 'pontos 4-6' },
        { term: 'número', meaning: 'sinal de número (vem antes)', braille: BRAILLE_NUMBER, how: 'pontos 3-4-5-6' },
        { term: '1', meaning: 'sinal de número + a', braille: BRAILLE.a, how: 'sinal de número, depois o “a”' },
        { term: '2', meaning: 'sinal de número + b', braille: BRAILLE.b, how: 'sinal de número, depois o “b”' },
        { term: '0', meaning: 'sinal de número + j', braille: BRAILLE.j, how: 'sinal de número, depois o “j”' },
      ],
      quiz: [
        { q: 'Depois do sinal de número, a cela do “c” (1-4) vale…', options: ['3', '4', '7'], answer: 0 },
        { q: 'E a do “j”?', options: ['10', '0', '9'], answer: 1 },
        { q: 'Que cela avisa que a próxima letra é maiúscula?', braille: '46', options: ['Esta, a dos pontos 4-6', 'A do ponto 1', 'Não existe'], answer: 0 },
      ],
    },
    {
      id: 'acentos',
      title: 'Os acentos do português',
      emoji: '🇧🇷',
      intro: [
        'Cada língua acrescenta as suas letras. No português, cada letra acentuada tem uma cela própria, segundo a Grafia Braille para a Língua Portuguesa.',
        'O Braille chegou ao Brasil por volta de 1850, trazido por José Álvares de Azevedo, um jovem cego que tinha estudado em Paris. Em 1854 ele foi adotado pelo recém-fundado Imperial Instituto dos Meninos Cegos, hoje Instituto Benjamin Constant, no Rio.',
      ],
      items: [...'çáéíóúâêôãõà'].map((c) => ({ term: c, meaning: `letra ${c}`, braille: BRAILLE[c], how: `pontos ${[...BRAILLE[c]].join('-')}` })),
      quiz: [
        { q: 'Que letra é esta?', braille: '12346', options: ['ç', 'é', 'q'], answer: 0 },
        { q: 'Que letra é esta?', braille: '123456', options: ['é', 'á', 'ô'], answer: 0 },
        { q: 'Quem trouxe o Braille ao Brasil?', options: ['José Álvares de Azevedo', 'D. Pedro I', 'Louis Braille'], answer: 0 },
      ],
    },
    {
      id: 'surdocegueira',
      title: 'Conversar pelo toque',
      emoji: '🤲',
      intro: [
        'Pessoas surdocegas — que não ouvem e não enxergam, ou quase — se comunicam de vários jeitos, conforme quando perderam a audição e a visão e o que aprenderam.',
        'Etiqueta: ao chegar perto de uma pessoa surdocega, toque de leve no ombro ou no braço e se identifique (pelo seu sinal-nome, por exemplo). Avise quando for sair, para ela não ficar falando sozinha.',
      ],
      items: [
        { term: 'Libras tátil', meaning: 'a Libras sentida com as mãos', how: 'A pessoa surdocega apoia as mãos sobre as mãos de quem sinaliza e sente a configuração, o lugar e o movimento.' },
        { term: 'Protactile', meaning: 'uma língua do toque, criada por surdocegos nos EUA', how: 'Usa o toque no corpo — mãos, braços, costas — também para dar retorno (“estou entendendo”), no lugar do rosto que não se vê.' },
        { term: 'Tadoma', meaning: 'sentir a fala pelo rosto', how: 'O polegar nos lábios e os outros dedos na bochecha e na garganta de quem fala: sente-se a vibração e o movimento. Helen Keller aprendeu a falar assim.' },
        { term: 'Escrita na palma', meaning: 'letras desenhadas na mão', how: 'Letras de fôrma escritas com o dedo na palma da mão; no alfabeto de Lorm, cada letra é um ponto ou um traço num lugar da mão.' },
        { term: 'Braille', meaning: 'para ler e escrever', how: 'Também em linhas Braille ligadas ao computador e ao celular, que levantam os pontos eletronicamente.' },
      ],
      quiz: [
        { q: 'Como se chega perto de uma pessoa surdocega?', options: ['Falando alto', 'Com um toque leve e se identificando', 'Esperando que ela perceba'], answer: 1 },
        { q: 'No Tadoma, onde ficam as mãos?', options: ['No rosto e na garganta de quem fala', 'Nas mãos de quem sinaliza', 'Num papel'], answer: 0 },
        { q: 'Quem criou o Protactile?', options: ['Pessoas surdocegas nos EUA', 'Um médico francês', 'O governo brasileiro'], answer: 0 },
      ],
    },
  ],
};

/**
 * As celas de um texto: «Brasil» → sinal de maiúscula + b r a s i l; «2026» → sinal de número + b j b f.
 * Devolve as celas separadas por espaço (o formato de MiniItem.braille).
 */
export function brailleOf(text: string): string {
  const out: string[] = [];
  let inNumber = false;
  for (const ch of text) {
    if (/[0-9]/.test(ch)) {
      if (!inNumber) out.push(BRAILLE_NUMBER);
      inNumber = true;
      out.push(BRAILLE['jabcdefghi'[Number(ch)]]);
      continue;
    }
    inNumber = false;
    const lower = ch.toLowerCase();
    if (!BRAILLE[lower]) throw new Error(`sem Braille para “${ch}”`);
    if (ch !== lower) out.push(BRAILLE_CAPITAL);
    out.push(BRAILLE[lower]);
  }
  return out.join(' ');
}
