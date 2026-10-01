import type { MinimalPairs } from '../types';

/** Pares mínimos do norueguês para quem fala português (pronúncia de referência: a do leste, de Oslo). */
export const PARES_NB: MinimalPairs = {
  contrasts: [
    {
      id: 'quantidade',
      name: 'vogal longa × vogal curta',
      sounds: ['ɑː', 'ɑ'],
      tip: 'Em norueguês o tamanho da vogal muda o sentido: vogal longa com uma consoante (tak, telhado) × vogal curta com consoante dupla (takk, obrigado). Estique a vogal de “tak” e corte a de “takk”, segurando o “k”.',
    },
    {
      id: 'tons',
      name: 'tom 1 × tom 2',
      sounds: ['¹', '²'],
      tip: 'O norueguês tem dois tons, e eles separam palavras que se escrevem quase igual. No leste do país, o tom 1 parte de baixo e sobe (bønder, fazendeiros); o tom 2 desce e depois sobe de novo, com duas “ondas” (bønner, “feijões” no plural). O português nunca usa tom para distinguir palavras, por isso o ouvido do brasileiro nem repara: escute a melodia da palavra inteira, e nunca apenas a sílaba forte.',
    },
    {
      id: 'y-i',
      name: 'y [y] × i',
      sounds: ['yː', 'iː'],
      tip: 'O “y” é um “i” com os lábios em bico, como o “u” do francês: ny (novo) × ni (nove); syn (vista) × sin (seu, sua).',
    },
    {
      id: 'u-o',
      name: 'u norueguês [ʉ] × o [u]',
      sounds: ['ʉː', 'uː'],
      tip: 'O “u” norueguês longo falta no português: fale “i” arredondando bem os lábios, com a língua no meio da boca (hus, casa). Já o “o” longo costuma soar como o nosso “u” (hos, na casa de).',
    },
    {
      id: 'aa-o',
      name: 'å [oː] × o [uː]',
      sounds: ['oː', 'uː'],
      tip: 'A escrita engana: “å” soa como o nosso “ô”, e o “o” longo soa como “u”: lå (ficava deitado) × lo (riu).',
    },
    {
      id: 'kj-sj',
      name: 'kj [ç] × sj/skj [ʃ]',
      sounds: ['ç', 'ʃ'],
      tip: 'O “kj” é um sopro feito com o meio da língua perto do céu da boca, como o “h” do inglês “huge”; o “sj” e o “skj” soam como o nosso “ch” de “chave”: kjære (querido) × skjære (cortar). Muitos jovens de Oslo já misturam os dois sons, mas na fala cuidada o contraste continua.',
    },
  ],
  pairs: [
    { contrast: 'quantidade', a: ['tak', 'telhado'], b: ['takk', 'obrigado'] },
    { contrast: 'quantidade', a: ['hat', 'ódio'], b: ['hatt', 'chapéu'] },
    { contrast: 'quantidade', a: ['mat', 'comida'], b: ['matt', 'fosco; cansado'] },
    { contrast: 'tons', a: ['bønder', 'fazendeiros (tom 1)'], b: ['bønner', 'feijões; orações (tom 2)'] },
    { contrast: 'tons', a: ['tanken', 'o tanque (tom 1)'], b: ['tanken', 'o pensamento (tom 2)'] },
    { contrast: 'y-i', a: ['ny', 'novo'], b: ['ni', 'nove'] },
    { contrast: 'y-i', a: ['syn', 'vista, visão'], b: ['sin', 'seu, sua (reflexivo)'] },
    { contrast: 'u-o', a: ['hus', 'casa'], b: ['hos', 'na casa de'] },
    { contrast: 'u-o', a: ['mur', 'muro'], b: ['mor', 'mãe'] },
    { contrast: 'aa-o', a: ['lå', 'ficava deitado'], b: ['lo', 'riu'] },
    { contrast: 'kj-sj', a: ['kjære', 'querido'], b: ['skjære', 'cortar'] },
    { contrast: 'kj-sj', a: ['kjøre', 'dirigir'], b: ['skjøre', 'frágeis'] },
  ],
  sameSound: [
    { words: [['hjul', 'roda'], ['jul', 'Natal']], note: 'O “h” antes de “j” é mudo: as duas palavras soam [jʉːl].' },
    { words: [['hver', 'cada'], ['vær', 'tempo (clima)']], note: 'O “h” antes de “v” também é mudo: as duas soam [ʋæːr].' },
  ],
};
