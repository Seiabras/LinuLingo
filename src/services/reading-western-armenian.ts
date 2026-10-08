/**
 * Leitura do armênio OCIDENTAL (pacote hyw) em letras latinas, para quem ainda não lê o alfabeto.
 *
 * Não dá para reaproveitar `reading-armenian.ts` (o do armênio oriental, pacote hy): as duas
 * variantes trocam a sonoridade das oclusivas e africadas — no ocidental, բ soa [pʰ] e պ soa [b]
 * (Wikipédia em inglês, "Western Armenian", seção "Stop and Affricate System").
 *
 * Padrão escolhido: a romanização ALA-LC do armênio, na coluna própria do armênio ocidental (Library
 * of Congress, 1997; a tabela está em en.wikipedia.org/wiki/Romanization_of_Armenian). É o único
 * padrão documentado com os valores do ocidental: բ p, պ b, գ k, կ g, դ t, տ d, ձ ts, ծ dz, ջ ch,
 * ճ j — o resto igual ao oriental (խ kh, ղ gh, շ sh, ժ zh, չ ch, ց ts, ք k, թ t, փ p, հ h…).
 *
 * Por cima da tabela de letras, a leitura segue a pronúncia do ocidental que a mesma Wikipédia
 * ("Western Armenian", seções "Diphthongs" e "Other phonological differences") descreve para a
 * grafia clássica que o pacote usa — porque a ALA-LC translitera letra por letra e, sem isso, a
 * leitura mostraria um som que o ocidental não tem:
 * - ե no começo da palavra soa «ye» (երկու «yergu»), ո no começo soa «vo» (ոչ «voch»; a exceção é ով «ov», a
 *   mesma do BGN/PCGN para o oriental), յ no começo
 *   soa «h» (a própria ALA-LC já faz isso) e յ no fim de palavra de mais de uma sílaba cala (կը քնանայ
 *   «gë knana»; nos monossílabos como թէյ «tey» e հայ «hay» ele soa);
 * - ւ soa «v» (լաւ «lav»), եւ = «ev» («yev» no começo), իւ = «iu» (a vogal [ʏ], que o português não
 *   tem, fica com as duas letras que a formam: -ութիւն «-utiun»), ոյ antes de consoante = «uy»
 *   (քոյր «kuyr»), եա = «ya» (սենեակ «senyag»), եօ = «yo» (եօթ «yot»);
 * - ու é sempre «u», mas antes de vogal é a consoante «v» (կը տեսնուինք «desnvink»);
 * - ռ e ր são lidos os dois «r» (a Wikipédia nota que se fundiram num só som no ocidental).
 * Também ficam de fora os sinais que na ALA-LC só servem para a transliteração poder voltar ao
 * armênio, e que no ocidental não mudam o som: o ʿ das aspiradas (no ocidental TODA oclusiva surda é
 * aspirada — p de բ e de փ soam igual, [pʰ]), e o mácron de է (= ե, [ɛ]) e de օ (= ո, [o]). ը, a
 * vogal neutra [ə], fica «ë», a mesma letra da leitura do armênio oriental (pacote hy) e do próprio
 * vocabulário deste pacote («ëndanik», «ëllal»).
 * Marcas de entonação (՞ pergunta, ՜ exclamação, ՛ ênfase) não são letras e caem; ՝ e ։ (ou os
 * dois-pontos «:» que o pacote usa no lugar do ։) viram vírgula e ponto, e o apóstrofo ՚ (կ՚երթամ)
 * fica como apóstrofo.
 */

const MAIUSCULA = /[Ա-Ֆ]/;
const PALAVRA_COM_APOSTROFO = /[Ա-Ֆա-և]+(?:'[Ա-Ֆա-և]+)*/g;

/** Valor de cada letra minúscula (ALA-LC ocidental, sem os sinais que não mudam o som). */
const LETRA: Record<string, string> = {
  ա: 'a', բ: 'p', գ: 'k', դ: 't', ե: 'e', զ: 'z', է: 'e', ը: 'ë', թ: 't', ժ: 'zh', ի: 'i', լ: 'l',
  խ: 'kh', ծ: 'dz', կ: 'g', հ: 'h', ձ: 'ts', ղ: 'gh', ճ: 'j', մ: 'm', յ: 'y', ն: 'n', շ: 'sh',
  ո: 'o', չ: 'ch', պ: 'b', ջ: 'ch', ռ: 'r', ս: 's', վ: 'v', տ: 'd', ր: 'r', ց: 'ts', ւ: 'v',
  փ: 'p', ք: 'k', օ: 'o', ֆ: 'f', և: 'ev',
};
const VOGAIS = new Set(['ա', 'ե', 'է', 'ը', 'ի', 'ո', 'օ', 'ու']);

function minuscula(ch: string): string {
  const cp = ch.codePointAt(0)!;
  return cp >= 0x0531 && cp <= 0x0556 ? String.fromCodePoint(cp + 0x30) : ch;
}

/**
 * Lê uma palavra. `meio`: a palavra vem colada depois de um apóstrofo (կ՚երթամ), então o ե/ո do
 * começo dela não está no começo da palavra falada.
 */
function lerPalavra(palavra: string, meio = false): string {
  // ով «quem» é a exceção da regra do ո inicial (BGN/PCGN 1981, citado na mesma página da Wikipédia)
  if (palavra === 'ով' || palavra === 'Ով') return palavra === 'Ով' ? 'Ov' : 'ov';
  const l = [...palavra].map(minuscula);
  // junta ու num dígrafo só, para as regras de vogal
  const u: string[] = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] === 'ո' && l[i + 1] === 'ւ') {
      u.push('ու');
      i++;
    } else u.push(l[i]);
  }
  const vogal = (x: string | undefined) => x !== undefined && VOGAIS.has(x);
  let out = '';
  for (let i = 0; i < u.length; i++) {
    const c = u[i];
    const prox = u[i + 1];
    const inicio = i === 0 && !meio;
    if (c === 'ու') {
      out += vogal(prox) ? 'v' : 'u';
      continue;
    }
    if (c === 'ե') {
      if (prox === 'ւ') {
        out += inicio ? 'yev' : 'ev';
        i++;
      } else if (prox === 'ա' || prox === 'օ') {
        out += prox === 'ա' ? 'ya' : 'yo';
        i++;
      } else out += inicio ? 'ye' : 'e';
      continue;
    }
    if (c === 'ի' && prox === 'ւ') {
      out += 'iu';
      i++;
      continue;
    }
    if (c === 'ո') {
      if (prox === 'յ' && u[i + 2] !== undefined && !vogal(u[i + 2])) {
        out += 'uy';
        i++;
      } else out += inicio ? 'vo' : 'o';
      continue;
    }
    if (c === 'յ') {
      if (inicio) out += 'h';
      else if (i === u.length - 1 && u.filter(vogal).length >= 2) out += ''; // յ final cala (քնանայ), menos em monossílabos (հայ, թէյ)
      else out += 'y';
      continue;
    }
    if (c === 'և') {
      out += inicio ? 'yev' : 'ev';
      continue;
    }
    out += LETRA[c] ?? '';
  }
  return MAIUSCULA.test(palavra[0]) && out ? out[0].toUpperCase() + out.slice(1) : out;
}

/** Texto em armênio ocidental em letras latinas; pontuação, números e português passam intactos. */
export function toReadingHyw(texto: string): string {
  if (!/[԰-֏]/.test(texto)) return '';
  return texto
    .normalize('NFC')
    .replace(/[՞՜՛]/g, '')
    .replace(/՝/g, ',')
    .replace(/։/g, '.')
    // o pacote escreve o ponto final armênio (։) com os dois-pontos do teclado latino
    .replace(/([Ա-և])\s*:/g, '$1.')
    .replace(/՚/g, "'")
    .replace(PALAVRA_COM_APOSTROFO, (p) => p.split("'").map((parte, k) => lerPalavra(parte, k > 0)).join("'"));
}
