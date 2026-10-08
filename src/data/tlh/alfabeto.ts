import type { AlphabetData } from '../types';

/**
 * A romanização padrão do klingon, criada pelo próprio Marc Okrand (não é uma transliteração feita
 * por outra pessoa): usa só letras latinas, mas maiúscula e minúscula marcam SONS DIFERENTES, não
 * "a mesma letra com e sem caixa alta" como no português — por isso "q" e "Q", ou "D" e a ausência
 * de um "d" minúsculo próprio, não são a mesma letra em dois tamanhos. O klingon também tem uma
 * escrita própria de ficção chamada pIqaD (26 símbolos, um som por símbolo), mas ela nunca chegou a
 * ganhar um desenho oficial e detalhado de Okrand: nas produções de Star Trek, o pIqaD aparece só
 * como decoração nos cenários, sem valor fonético aplicado de verdade — por isso este curso ensina
 * a romanização, que é o sistema realmente usado para estudar a língua. Letras do nosso alfabeto que
 * o klingon NÃO usa: c, f, x, z — e também não existem "d", "g", "h", "i", "s" sozinhos minúsculos
 * (só "D", "H", "I", "S" maiúsculos, e "g" só aparece dentro de "gh"/"ng"). Fontes: klingonska.org/
 * piqad/ (Klingonska Akademien, academia sueca de referência para o klingon canônico, junto com o
 * KLI); "The Klingon Dictionary" (Marc Okrand, 1985/1992); Wikipedia, "Klingon language".
 */
export const ALPHABET_TLH: AlphabetData = {
  letters: [
    { letter: 'a', ipa: '[ɑ]', short: 'a', sound: '“a” aberto, como em “pá”', example: ['batlh', 'honra'], group: 'igual' },
    { letter: 'b', ipa: '[b]', short: 'b', sound: '“b” normal, como em português', example: ['bIQ', 'água'], group: 'igual' },
    { letter: 'ch', ipa: '[t͜ʃ]', short: 'tch', sound: '“tch” de “tchau” — sempre junto, nunca “c” e “h” separados', example: ['chal', 'céu'], group: 'nova' },
    { letter: 'D', ipa: '[ɖ]', short: 'd', sound: 'FALSA AMIGA: não existe “d” minúsculo sozinho no klingon — “D” maiúsculo é um “d” retroflexo, com a língua dobrada bem para trás', example: ['Duj', 'navio'], group: 'falsa' },
    { letter: 'e', ipa: '[ɛ]', short: 'é', sound: '“é” aberto, como em “pé”', example: ['legh', 'ver'], group: 'igual' },
    { letter: 'gh', ipa: '[ɣ]', short: 'rh', sound: 'som vibrado no fundo da garganta, sem equivalente em português — como o “g” fraco do espanhol em “lago”, mas mais raspado', example: ["ghobe'", 'não'], group: 'nova' },
    { letter: 'H', ipa: '[x]', short: 'rr', sound: 'FALSA AMIGA: NUNCA é mudo como no português — é um som raspado na garganta, como o “ch” alemão de “Bach”, o jota espanhol forte ou o “r” carioca raspado', example: ['Hov', 'estrela'], group: 'falsa' },
    { letter: 'I', ipa: '[ɪ]', short: 'i', sound: 'FALSA AMIGA: só existe maiúsculo — é a vogal “i”, parecida com o “i” curto do inglês “fish”, mais aberta que o “i” do português. Não há “i” minúsculo isolado', example: ['jIH', 'eu'], group: 'falsa' },
    { letter: 'j', ipa: '[d͜ʒ]', short: 'dj', sound: 'FALSA AMIGA: soa “dj”, como o “j” do inglês “jump” — nunca o som do “j” em português', example: ['jup', 'amigo(a)'], group: 'falsa' },
    { letter: 'l', ipa: '[l]', short: 'l', sound: '“l” normal, como em português', example: ['loD', 'homem'], group: 'igual' },
    { letter: 'm', ipa: '[m]', short: 'm', sound: '“m” normal, como em português', example: ['maH', 'nós'], group: 'igual' },
    { letter: 'n', ipa: '[n]', short: 'n', sound: '“n” normal, como em português', example: ['nuqneH', 'oi/olá'], group: 'igual' },
    { letter: 'ng', ipa: '[ŋ]', short: 'ng', sound: 'som nasal do fundo da garganta, como o final de “sing” em inglês — nunca pronuncie o “g” separado', example: ['tlhIngan', 'klingon (pessoa)'], group: 'nova' },
    { letter: 'o', ipa: '[o]', short: 'o', sound: '“o” fechado, como em “bolo”', example: ['Soj', 'comida'], group: 'igual' },
    { letter: 'p', ipa: '[pʰ]', short: 'p', sound: '“p” soprado, com uma rajada de ar mais forte que o “p” do português', example: ['puq', 'filho(a)/criança'], group: 'igual' },
    { letter: 'q', ipa: '[qʰ]', short: 'k', sound: 'FALSA AMIGA: som de “k” produzido bem no fundo da garganta (uvular), bem mais atrás do que o “c”/“qu” do português', example: ['qan', 'ser velho'], group: 'falsa' },
    { letter: 'Q', ipa: '[qχ]', short: 'kr', sound: 'FALSA AMIGA ainda mais forte: é o mesmo ponto do “q” minúsculo, mas combinado com um som raspado de garganta — “q” e “Q” são letras DIFERENTES, uma não é maiúscula da outra', example: ['QaQ', 'ser bom'], group: 'falsa' },
    { letter: 'r', ipa: '[r]', short: 'r', sound: '“r” vibrado/rolado, como o “r” do espanhol ou do italiano', example: ["parHa'", 'gostar (de)'], group: 'igual' },
    { letter: 'S', ipa: '[ʂ]', short: 'x', sound: 'FALSA AMIGA: não existe “s” minúsculo sozinho no klingon — “S” maiúsculo é retroflexo, entre o “s” e o “x” de “xampu”', example: ['SoS', 'mãe'], group: 'falsa' },
    { letter: 't', ipa: '[tʰ]', short: 't', sound: '“t” soprado, com uma rajada de ar mais forte que o “t” do português', example: ['tIn', 'ser grande'], group: 'igual' },
    { letter: 'tlh', ipa: '[t͜ɬ]', short: 'tl', sound: 'som que não existe em português: tente dizer “t” e “l” quase ao mesmo tempo, deixando o ar escapar pelos lados da língua — é a letra que dá nome à própria língua, “tlhIngan Hol”', example: ['tlhutlh', 'beber'], group: 'nova' },
    { letter: 'u', ipa: '[u]', short: 'u', sound: '“u” fechado, como em “lua”', example: ['Suv', 'lutar'], group: 'igual' },
    { letter: 'v', ipa: '[v]', short: 'v', sound: '“v” normal, como em português', example: ['vav', 'pai'], group: 'igual' },
    { letter: 'w', ipa: '[w]', short: 'u', sound: '“u” semivogal, como em “quando”', example: ['wej', 'três'], group: 'igual' },
    { letter: 'y', ipa: '[j]', short: 'i', sound: '“i” semivogal, como em “iogurte”', example: ['yaj', 'entender'], group: 'igual' },
    { letter: "'", ipa: '[ʔ]', short: "'", sound: 'FALSA AMIGA: não é um sinal de pontuação — é uma CONSOANTE de verdade, a parada glotal (a pausa seca de “uh-oh” em inglês), que corta o som anterior', example: ["qatlho'", 'obrigado(a)'], group: 'nova' },
  ],
  readingWords: [
    ['jIH', '🙋', 'eu'],
    ['SoH', '🫵', 'você'],
    ['vav', '👨', 'pai'],
    ['SoS', '👩', 'mãe'],
    ['Duj', '🚀', 'navio'],
    ['bIQ', '💧', 'água'],
    ['Hov', '⭐', 'estrela'],
    ['puq', '🧒', 'filho(a)/criança'],
    ['nuqneH', '👋', 'oi/olá'],
    ["Qapla'", '🏆', 'sucesso!/tchau'],
  ],
};
