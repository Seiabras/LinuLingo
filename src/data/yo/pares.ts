import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do iorubá para quem fala português (pronúncia de referência: o iorubá padrão, de base
 * oió). O coração da língua são os três tons: agudo = alto (á), grave = baixo (à), sem marca = médio.
 * Nos contrastes de tom, a voz é a do aparelho: a busca das gravações ignora o acento agudo e poderia
 * trocar uma palavra pela outra.
 */
export const PARES_YO: MinimalPairs = {
  contrasts: [
    {
      id: 'tom-alto-medio',
      name: 'tom alto × tom médio',
      sounds: ['á', 'ā'],
      tip: 'Em iorubá, a altura da voz em cada sílaba faz parte da palavra, como uma consoante: ọkọ́ (enxada) × ọkọ (marido); wá (vir) × wa (nós). O acento agudo não marca a sílaba tônica nem o “é” aberto do português: marca só que a voz sobe. O tom médio é a sua voz normal, sem subir nem descer. O brasileiro tende a pôr a voz alta na sílaba que sente como tônica e a baixar no fim da frase; aqui, cada sílaba mantém a sua altura do começo ao fim.',
      deviceVoice: true,
    },
    {
      id: 'tom-baixo-medio',
      name: 'tom baixo × tom médio',
      sounds: ['à', 'ā'],
      tip: 'O tom baixo (acento grave) é uma voz mais grave e relaxada, que tende a cair um pouco: ọkọ̀ (barco, veículo) × ọkọ (marido); lọ̀ (moer) × lọ (ir). O acento grave não é crase e não abre a vogal: “à” é só um “a” dito mais grave. Para treinar, diga as duas palavras como se fossem notas musicais: a do médio no meio da sua voz, a do baixo um degrau abaixo.',
      deviceVoice: true,
    },
    {
      id: 'tom-alto-baixo',
      name: 'tom alto × tom baixo',
      sounds: ['á', 'à'],
      tip: 'Entre o alto e o baixo a diferença é maior, mas o brasileiro ainda erra quando a palavra está no fim da frase, onde a nossa entonação faz a voz cair: ìlú (cidade) × ìlù (tambor); bàtá (o tambor batá) × bàtà (sapato). O tambor falante (dùndún) “fala” imitando exatamente esses altos e baixos. Não deixe a última sílaba cair se o tom dela é alto.',
      deviceVoice: true,
    },
    {
      id: 'e-aberto',
      name: 'ẹ [ɛ] × e [e]',
      sounds: ['ɛ', 'e'],
      tip: 'O “ẹ” com ponto embaixo é o nosso “é” aberto, de “pé”; o “e” sem ponto é o “ê” fechado, de “você”: sé (fechar) × sẹ́ (negar); gbé (carregar) × gbẹ́ (cavar). A armadilha é a escrita: em iorubá o acento agudo marca só o tom alto, então “é” é um “ê” fechado dito agudo, e o “é” aberto se escreve “ẹ́”, com o ponto.',
    },
    {
      id: 'o-aberto',
      name: 'ọ [ɔ] × o [o]',
      sounds: ['ɔ', 'o'],
      tip: 'O “ọ” com ponto é o nosso “ó” aberto, de “pó”; o “o” sem ponto é o “ô” fechado, de “avô”: ọkọ (marido) × oko (roça); ọwọ́ (mão) × owó (dinheiro), com os mesmos tons. De novo, o acento agudo não abre a vogal: “ó” é um “ô” dito agudo, e o “ó” aberto se escreve “ọ́”.',
    },
    {
      id: 'vogal-nasal',
      name: 'vogal oral × vogal nasal',
      sounds: ['a', 'ã'],
      tip: 'O “n” no fim da sílaba não é consoante: só avisa que a vogal sai pelo nariz, como no nosso “lã”: kà (ler, contar) × kàn (bater na porta); ìyà (sofrimento) × ìyàn (fome, escassez). Não feche a boca num “n” no fim. O brasileiro faz a vogal nasal com facilidade, mas costuma nasalizar demais as vogais orais antes de “m” e “n” (como em “cama”); em iorubá, “kà” é bem oral.',
    },
    {
      id: 'gb-b',
      name: 'gb [ɡ͡b] × b',
      sounds: ['ɡ͡b', 'b'],
      tip: 'O “gb” é um som só: a garganta faz o “g” e os lábios fazem o “b” ao mesmo tempo, com um pequeno estalo quando se soltam. Não é “g” seguido de “b”, nem “gu-b”: gbọ́ (ouvir) × bọ́ (cair, escapar); gbà (receber) × bà (pousar). Para achar o som, diga “g” e “b” juntos, com a boca fechada nos dois lugares, e solte tudo de uma vez.',
    },
    {
      id: 'kp-k',
      name: 'p [k͡p] × k',
      sounds: ['k͡p', 'k'],
      tip: 'O iorubá não tem o nosso “p”: a letra “p” é o par surdo do “gb”, o “k” e o “p” feitos ao mesmo tempo, [k͡p]. Se você disser um “p” brasileiro, o iorubá entende, mas soa estrangeiro; se disser só “k”, vira outra palavra: pé (estar completo; que) × ké (gritar); pọ̀ (ser muito) × kọ̀ (recusar).',
    },
  ],
  pairs: [
    { contrast: 'tom-alto-medio', a: ['ọkọ́', 'enxada'], b: ['ọkọ', 'marido'] },
    { contrast: 'tom-alto-medio', a: ['igbá', 'cabaça'], b: ['igba', 'duzentos'] },
    { contrast: 'tom-alto-medio', a: ['wá', 'vir'], b: ['wa', 'nós; nosso'] },
    { contrast: 'tom-alto-medio', a: ['fọ́', 'quebrar, estilhaçar'], b: ['fọ', 'lavar'] },
    { contrast: 'tom-alto-medio', a: ['kọ́', 'aprender; ensinar; construir'], b: ['kọ', 'escrever; cantar'] },
    { contrast: 'tom-baixo-medio', a: ['ọkọ̀', 'barco; veículo'], b: ['ọkọ', 'marido'] },
    { contrast: 'tom-baixo-medio', a: ['lọ̀', 'moer'], b: ['lọ', 'ir'] },
    { contrast: 'tom-baixo-medio', a: ['wà', 'estar, existir'], b: ['wa', 'nós; nosso'] },
    { contrast: 'tom-baixo-medio', a: ['ẹ̀wà', 'feijão'], b: ['ẹwà', 'beleza'] },
    { contrast: 'tom-baixo-medio', a: ['ọ̀bẹ̀', 'ensopado, molho'], b: ['ọ̀bẹ', 'faca'] },
    { contrast: 'tom-alto-baixo', a: ['ọkọ́', 'enxada'], b: ['ọkọ̀', 'barco; veículo'] },
    { contrast: 'tom-alto-baixo', a: ['ìlú', 'cidade'], b: ['ìlù', 'tambor'] },
    { contrast: 'tom-alto-baixo', a: ['bàtá', 'tambor batá'], b: ['bàtà', 'sapato'] },
    { contrast: 'tom-alto-baixo', a: ['rí', 'ver'], b: ['rì', 'afundar'] },
    { contrast: 'tom-alto-baixo', a: ['gbá', 'varrer; chutar'], b: ['gbà', 'receber, aceitar'] },
    { contrast: 'tom-alto-baixo', a: ['ẹrú', 'escravizado'], b: ['ẹrù', 'carga, bagagem'] },
    { contrast: 'e-aberto', a: ['sẹ́', 'negar'], b: ['sé', 'fechar, trancar'] },
    { contrast: 'e-aberto', a: ['gbẹ́', 'cavar; esculpir'], b: ['gbé', 'carregar; morar'] },
    { contrast: 'e-aberto', a: ['kẹ́', 'mimar'], b: ['ké', 'gritar, chamar'] },
    { contrast: 'e-aberto', a: ['ṣẹ', 'realizar-se (um sonho, uma prece)'], b: ['ṣe', 'fazer'] },
    { contrast: 'o-aberto', a: ['ọkọ', 'marido'], b: ['oko', 'roça, fazenda'] },
    { contrast: 'o-aberto', a: ['ọwọ́', 'mão'], b: ['owó', 'dinheiro'] },
    { contrast: 'o-aberto', a: ['ọ̀wọ̀', 'respeito'], b: ['òwò', 'comércio'] },
    { contrast: 'o-aberto', a: ['kọ́', 'aprender; ensinar'], b: ['kó', 'juntar, recolher'] },
    { contrast: 'o-aberto', a: ['lọ', 'ir'], b: ['lo', 'usar'] },
    { contrast: 'vogal-nasal', a: ['kà', 'ler; contar'], b: ['kàn', 'bater (na porta); tocar'] },
    { contrast: 'vogal-nasal', a: ['dá', 'criar; parar'], b: ['dán', 'brilhar; polir'] },
    { contrast: 'vogal-nasal', a: ['ìyà', 'sofrimento'], b: ['ìyàn', 'fome, escassez de comida'] },
    { contrast: 'gb-b', a: ['gbọ́', 'ouvir; entender'], b: ['bọ́', 'cair (de cima); escapar'] },
    { contrast: 'gb-b', a: ['gbà', 'receber, aceitar'], b: ['bà', 'pousar'] },
    { contrast: 'gb-b', a: ['gbẹ́', 'cavar; esculpir'], b: ['bẹ́', 'pular'] },
    { contrast: 'kp-k', a: ['pé', 'estar completo; que'], b: ['ké', 'gritar, chamar'] },
    { contrast: 'kp-k', a: ['pọ̀', 'ser muito, ser numeroso'], b: ['kọ̀', 'recusar'] },
    { contrast: 'kp-k', a: ['pẹ́', 'demorar'], b: ['kẹ́', 'mimar'] },
  ],
};
