import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do catalão para quem fala português. As palavras entram também na busca de
 * gravações (scripts/baixar-audios.mjs).
 */
export const PARES_CA: MinimalPairs = {
  contrasts: [
    {
      id: 'a-e-atona',
      name: 'à/é acentuado × a/e átono (vocal neutra)',
      sounds: ['a', 'ə'],
      tip: 'No catalão central, o «a» e o «e» sem acento tônico caem todos no mesmo som neutro [ə] (um «â» fraco, parecido com o final de «casa» dito rápido). Quando a palavra leva acento gráfico (à, è, é), a vogal fica plena e é isso que separa palavras que se escrevem quase igual: «pèl» (pelo) × «pel» (contração de «per el»).',
    },
    {
      id: 'o-atona',
      name: 'ò/ó acentuado × o átono',
      sounds: ['ɔ', 'u'],
      tip: 'O «o» sem acento tônico soa [u], como o «o» final de «carro» no Brasil. Com acento (ò aberto, ó fechado), a vogal fica plena: «sòl» (chão, o aberto) × «sol» (sozinho/sol, o fechado) — as duas soam diferente uma da outra, mas nenhuma das duas vira [u], porque as duas são tônicas.',
    },
    {
      id: 'l-ll',
      name: 'l × ll',
      sounds: ['l', 'ʎ'],
      tip: 'O «ll» é o nosso «lh» de «filho» [ʎ]. O «l» sozinho é sempre o «l» comum, mesmo no fim da palavra (nunca vira «u» como no português do Rio ou de São Paulo).',
    },
    {
      id: 'l-l·l',
      name: 'l × l·l (ela geminada)',
      sounds: ['l', 'lː'],
      tip: 'O «l·l» (com o ponto no meio, chamado «ela geminada») é um «l» comum, só que mais longo, dito com um pouquinho mais de duração. Não tem som de «lh»: é bem diferente do «ll».',
    },
    {
      id: 'ny',
      name: 'ny',
      sounds: ['ɲ', 'n'],
      tip: 'O «ny» é o nosso «nh» de «ninho» [ɲ]. O «n» sozinho é sempre o «n» comum, mesmo antes de outra consoante.',
    },
    {
      id: 'x-ss',
      name: 'x/ix × s/ss',
      sounds: ['ʃ', 's'],
      tip: 'O «x» (e o «ix» depois de vogal) é o «x» de «xícara» [ʃ]. O «s» entre vogais é [z] («casa» soa «caza»), e «ss» é sempre [s]. Não confunda: em catalão, «caixa» tem o som de «x», nunca de «ks».',
    },
  ],
  pairs: [
    { contrast: 'a-e-atona', a: ['pèl', 'pelo (do corpo)'], b: ['pel', 'pelo (per + el)'] },
    { contrast: 'a-e-atona', a: ['mà', 'mão'], b: ['ma', 'minha (arcaico, ex.: «l\'esposa ma»)'] },
    { contrast: 'a-e-atona', a: ['té', 'tem (de tenir)'], b: ['te', 'chá / te (pronome)'] },
    { contrast: 'a-e-atona', a: ['parlà', 'falou (passat simple)'], b: ['parla', 'fala / ele fala'] },
    { contrast: 'o-atona', a: ['sòl', 'chão, solo'], b: ['sol', 'sozinho / sol'] },
    { contrast: 'o-atona', a: ['món', 'mundo'], b: ['mon', 'meu (arcaico, ex.: «mon pare»)'] },
    { contrast: 'l-ll', a: ['mala', 'má (feminino)'], b: ['malla', 'malha'] },
    { contrast: 'l-ll', a: ['vela', 'vela (de barco/de cera)'], b: ['vella', 'velha'] },
    { contrast: 'l-ll', a: ['cala', 'enseada'], b: ['calla', 'cala-se (de callar)'] },
    { contrast: 'l-l·l', a: ['vila', 'vila, cidade pequena'], b: ['vil·la', 'mansão, vila (residência luxuosa)'] },
    { contrast: 'ny', a: ['canya', 'cana, bengala'], b: ['cana', 'medida antiga de comprimento'] },
    { contrast: 'ny', a: ['banys', 'banheiros, banhos'], b: ['bans', 'éditos, pregões municipais'] },
    { contrast: 'x-ss', a: ['caixa', 'caixa'], b: ['cassa', 'panela (de onde vem "cassola")'] },
  ],
  sameSound: [
    {
      words: [
        ['beu', 'bebe'],
        ['veu', 'voz / vê'],
      ],
      note: 'No catalão central, «b» e «v» soam igual, sempre como o nosso «b» (betacisme). «Beu» (bebe) e «veu» (voz, ou «ele vê») soam exatamente iguais: [bɛw].',
    },
    {
      words: [
        ['baca', 'bagageiro de carro'],
        ['vaca', 'vaca'],
      ],
      note: 'Outro par que prova o betacisme: «baca» e «vaca» soam igual, [ˈbakə], embora se escrevam diferente.',
    },
    {
      words: [
        ['despatx', 'escritório (grafado com -tx)'],
        ['goig', 'alegria (grafado com -ig)'],
      ],
      note: 'No fim da palavra, «-tx» e «-ig» soam igual, [tʃ] («tch»): «despatx» e «goig» terminam com o mesmo som, apesar da grafia diferente.',
    },
  ],
};
