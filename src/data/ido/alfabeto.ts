import type { AlphabetData } from '../types';

/**
 * O alfabeto do Ido: as mesmas 26 letras do alfabeto latino comum (a-z), SEM NENHUM diacrítico —
 * ao contrário do esperanto, que tem 6 letras com acento (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ). A Wikipédia (“Ido”)
 * resume assim: “Ido uses the same 26 letters as the English (Latin) alphabet, with no diacritics
 * ... three digraphs [ch, qu, sh] and no ligatures or diacritics.” Essa escolha foi deliberada: o
 * comitê de 1907 (Louis Couturat e Louis de Beaufront, com a colaboração inicial do linguista
 * dinamarquês Otto Jespersen) queria um alfabeto que qualquer máquina de escrever ou computador em
 * inglês já suportasse, sem precisar de teclas extras — por isso não precisamos de teclado especial
 * para o Ido (`specialChars` fica vazio). Cada letra mantém só um som, sempre (mesmo princípio do
 * esperanto, herdado dele). Valores sonoros conferidos contra a tabela de ortografia da Wikipédia
 * (“Ido”, seção de fonologia/ortografia) e contra o Wikcionário (verbetes individuais, citados
 * palavra a palavra nos exemplos abaixo). O “w” também existe no alfabeto oficial (valor /w/, raro,
 * mais usado em nomes estrangeiros e empréstimos recentes) — não achamos, nas fontes consultadas,
 * uma palavra do núcleo A1 que o use, por isso ele fica de fora da lista de letras com exemplo (gap
 * documentado, não inventamos uma palavra pra preencher a lacuna).
 */
export const ALPHABET_IDO: AlphabetData = {
  letters: [
    { letter: 'A a', ipa: '[a]', short: 'a', sound: '“a” aberto, como em “casa”', example: ['patro', 'pai'], group: 'igual' },
    { letter: 'B b', ipa: '[b]', short: 'b', sound: '“b” de “bola”', example: ['bona', 'bom'], group: 'igual' },
    { letter: 'C c', ipa: '[ts]', short: 'ts', sound: 'sempre “ts”, como em “tsunami” — NUNCA “k” nem “s” sozinho (mesma regra do esperanto)', example: ['cent', 'cem'], group: 'falsa' },
    { letter: 'D d', ipa: '[d]', short: 'd', sound: '“d” de “dado”', example: ['danko', 'obrigado'], group: 'igual' },
    { letter: 'E e', ipa: '[e]', short: 'e', sound: '“e” fechado, como em “mesa”', example: ['esar', 'ser/estar'], group: 'igual' },
    { letter: 'F f', ipa: '[f]', short: 'f', sound: '“f” de “faca”', example: ['familio', 'família'], group: 'igual' },
    { letter: 'G g', ipa: '[g]', short: 'g', sound: 'sempre “g” duro (de “gato”), MESMO antes de e/i — nunca o “j” que o português faz em “gelo”', example: ['granda', 'grande'], group: 'falsa' },
    { letter: 'H h', ipa: '[h]', short: 'h', sound: '“h” aspirado, pronunciado de verdade — nunca mudo como no português', example: ['hundo', 'cachorro'], group: 'falsa' },
    { letter: 'I i', ipa: '[i]', short: 'i', sound: '“i” de “vida”', example: ['libro', 'livro'], group: 'igual' },
    // j: ATENÇÃO quem já estudou esperanto no app — aqui o som é o OPOSTO. No Ido, “j” soa como o
    // “j” do português (“já”); no esperanto, “j” soa como “y” do inglês “yes” (esse glide é o “y” do
    // Ido). Fonte: Wikipédia “Ido” (tabela de ortografia: j = [ʒ]) e Wikcionário “fromajo” ([froˈmaʒo]).
    { letter: 'J j', ipa: '[ʒ]', short: 'j', sound: 'igual ao “j” do português, de “já” — CUIDADO: no esperanto o “j” soa diferente (é o “y” de “yes”)', example: ['fromajo', 'queijo'], group: 'igual' },
    { letter: 'K k', ipa: '[k]', short: 'k', sound: '“k” de “casa” (nunca “s”)', example: ['kato', 'gato'], group: 'igual' },
    { letter: 'L l', ipa: '[l]', short: 'l', sound: '“l” de “lua”', example: ['libro', 'livro'], group: 'igual' },
    { letter: 'M m', ipa: '[m]', short: 'm', sound: '“m” de “mão”', example: ['matro', 'mãe'], group: 'igual' },
    { letter: 'N n', ipa: '[n]', short: 'n', sound: '“n” de “nave”', example: ['nomo', 'nome'], group: 'igual' },
    { letter: 'O o', ipa: '[o]', short: 'o', sound: '“o” fechado, como em “bolo”', example: ['bona', 'bom'], group: 'igual' },
    { letter: 'P p', ipa: '[p]', short: 'p', sound: '“p” de “pato”', example: ['pano', 'pão'], group: 'igual' },
    { letter: 'Q q', ipa: '[k]', short: 'k', sound: 'só aparece no dígrafo “qu” (veja mais abaixo) — sozinho é raríssimo', example: ['aquo', 'água'], group: 'nova' },
    { letter: 'R r', ipa: '[ɾ]', short: 'r', sound: '“r” batido/vibrado simples, como o “r” do espanhol em “pero” — NUNCA o “r” gutural do português (de “carro”)', example: ['urbo', 'cidade'], group: 'falsa' },
    { letter: 'S s', ipa: '[s]', short: 's', sound: 'sempre “s” surdo, como em “sapo” — nunca o “z” que o português faz entre vogais (em “casa”)', example: ['sis', 'seis'], group: 'falsa' },
    { letter: 'T t', ipa: '[t]', short: 't', sound: '“t” de “touro”', example: ['tri', 'três'], group: 'igual' },
    { letter: 'U u', ipa: '[u]', short: 'u', sound: '“u” de “uva”', example: ['urbo', 'cidade'], group: 'igual' },
    { letter: 'V v', ipa: '[v]', short: 'v', sound: '“v” de “vaca”', example: ['vino', 'vinho'], group: 'igual' },
    { letter: 'X x', ipa: '[ks]', short: 'ks', sound: '“ks”, como em “táxi” — sempre esse valor, nunca “z” ou “ch” como às vezes faz o “x” português', example: ['exemplo', 'exemplo'], group: 'falsa' },
    // y: o glide “i” curto que o esperanto escreve com “j” — no Ido esse som tem letra própria.
    { letter: 'Y y', ipa: '[j]', short: 'i curto', sound: '“i” bem curto, um deslize — o “y” do inglês “yes” (no esperanto, esse som é escrito com “j”)', example: ['yes', 'sim'], group: 'nova' },
    { letter: 'Z z', ipa: '[z]', short: 'z', sound: '“z” de “zebra”', example: ['zono', 'zona/cinto'], group: 'igual' },
    // Os três dígrafos oficiais do Ido (nenhuma letra nova, nenhum acento — só duas letras juntas
    // valendo um som só). São eles que substituem os 6 acentos do esperanto.
    { letter: 'Ch ch', ipa: '[tʃ]', short: 'tch', sound: '“tch” de “tchau” — o mesmo som do “ĉ” do esperanto, só que escrito com duas letras', example: ['chanco', 'sorte'], group: 'nova' },
    { letter: 'Sh sh', ipa: '[ʃ]', short: 'x', sound: '“x”/“ch” de “xícara”/“chá” — o mesmo som do “ŝ” do esperanto', example: ['shuo', 'sapato'], group: 'nova' },
    { letter: 'Qu qu', ipa: '[kw]', short: 'kw', sound: '“kw”, como em “quick” do inglês — nunca o “k” mudo do “que”/“qui” português', example: ['aquo', 'água'], group: 'nova' },
  ],
  readingWords: [
    ['me', '🙋', 'eu'],
    ['vu', '🫵', 'você'],
    ['el', '👩', 'ela'],
    ['patro', '👨', 'pai'],
    ['hundo', '🐕', 'cachorro'],
    ['kato', '🐈', 'gato'],
    ['pano', '🍞', 'pão'],
    ['aquo', '💧', 'água'],
    ['domo', '🏠', 'casa'],
    ['granda', '📏', 'grande'],
  ],
};
