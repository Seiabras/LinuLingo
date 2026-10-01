import type { MinimalPairs } from '../types';

/**
 * Pares mínimos do coreano para quem fala português (pronúncia de referência: o coreano padrão de Seul).
 * O grande desafio são as três séries de consoantes (lisa, tensa e aspirada), que o português não separa,
 * e as consoantes do fim da sílaba, que o brasileiro engole ou transforma em vogal nasal.
 */
export const PARES_KO: MinimalPairs = {
  contrasts: [
    {
      id: 'lisa-tensa',
      name: 'lisa × tensa (ㅂ × ㅃ, ㄷ × ㄸ, ㄱ × ㄲ, ㅈ × ㅉ)',
      sounds: ['p', 'p͈'],
      tip: 'O coreano tem três “p”, três “t”, três “k” e três “tch”. A lisa (ㅂ ㄷ ㄱ ㅈ) sai frouxa, com um sopro leve, e a sílaba começa em tom baixo; a tensa (ㅃ ㄸ ㄲ ㅉ) não solta ar nenhum, a garganta aperta e o tom sobe. A tensa é quase o nosso “p” de “pato” dito com firmeza; o erro do brasileiro é fazer a lisa igual a ela. Capriche no “p” frouxo e grave de 불 (fogo) e no “p” firme e agudo de 뿔 (chifre).',
    },
    {
      id: 'lisa-aspirada',
      name: 'lisa × aspirada (ㅂ × ㅍ, ㄷ × ㅌ, ㄱ × ㅋ, ㅈ × ㅊ)',
      sounds: ['p', 'pʰ'],
      tip: 'A aspirada (ㅍ ㅌ ㅋ ㅊ) solta um sopro forte, como no inglês “pen”; a lisa solta pouco ar. Na fala de Seul de hoje, o que mais separa as duas é o tom: a lisa começa grave, a aspirada começa aguda. Ponha a mão na frente da boca: em 풀 (grama) você sente o vento, em 불 (fogo) quase nada, e a voz começa mais baixa.',
    },
    {
      id: 'tensa-aspirada',
      name: 'tensa × aspirada (ㅃ × ㅍ, ㄸ × ㅌ, ㄲ × ㅋ, ㅉ × ㅊ)',
      sounds: ['p͈', 'pʰ'],
      tip: 'As duas começam em tom agudo; o que muda é o ar. A tensa não deixa escapar sopro nenhum (a garganta fecha), a aspirada solta um jato de ar. Diga 딸 (filha) com o “t” seco de “tatu” e 탈 (máscara) como quem apaga uma vela.',
    },
    {
      id: 's-ss',
      name: 'ㅅ × ㅆ',
      sounds: ['s', 's͈'],
      tip: 'O ㅅ é um “s” suave, com um fiozinho de ar e tom baixo; o ㅆ é um “s” tenso, comprido e sibilante, com tom alto. 살 (carne; anos de idade) × 쌀 (arroz cru): errar aqui muda a compra no mercado. Muitos falantes do sudeste do país (o dialeto de Gyeongsang, de Busan e Daegu) não fazem essa diferença, por isso o treino usa a voz do aparelho.',
      deviceVoice: true,
    },
    {
      id: 'eo-o',
      name: 'ㅓ × ㅗ',
      sounds: ['ʌ', 'o'],
      tip: 'O ㅓ soa como um “ó” aberto, mas com os lábios relaxados, sem bico; o ㅗ é um “ô” fechado, com os lábios bem arredondados. A romanização “eo” engana: o ㅓ não tem “e” nenhum. Diga 거리 (rua) com a boca aberta e solta, e 고리 (argola) fazendo biquinho.',
    },
    {
      id: 'eu-u',
      name: 'ㅡ × ㅜ',
      sounds: ['ɯ', 'u'],
      tip: 'Nos dois, a língua fica recuada; só muda a boca. No ㅜ os lábios fazem bico, como no nosso “u”; no ㅡ eles ficam esticados, como num sorriso. Diga “u” sorrindo e sai o ㅡ: 글 (texto, escrita) × 굴 (ostra).',
    },
    {
      id: 'finais-surdas',
      name: 'final ㅂ × ㄷ × ㄱ',
      sounds: ['p̚', 'k̚'],
      tip: 'No fim da sílaba, o coreano não solta a consoante: a boca fecha e o ar fica preso. Por isso o brasileiro nem percebe que tem consoante ali, ou acrescenta um “i” (“bapi”). O que muda é onde a boca fecha: nos lábios para o ㅂ (밥, arroz), na ponta da língua para o ㄷ (밭, horta), no fundo da boca para o ㄱ (박, cabaça). Não ponha vogal nenhuma depois.',
    },
    {
      id: 'n-ng',
      name: 'final ㄴ × ㅇ',
      sounds: ['n', 'ŋ'],
      tip: 'Em português, o “n” do fim da sílaba vira só uma vogal nasal (“som”, “lã”). No coreano, a consoante existe: no ㄴ, a ponta da língua encosta atrás dos dentes (반, metade); no ㅇ, o fundo da língua sobe e fecha a passagem, como no “ng” do inglês “sing” (방, quarto). Termine a palavra com a língua no lugar certo.',
    },
    {
      id: 'm-n',
      name: 'final ㅁ × ㄴ',
      sounds: ['m', 'n'],
      tip: 'O ㅁ final fecha os lábios de verdade; o ㄴ encosta a língua nos dentes, com a boca entreaberta. O brasileiro faz os dois como vogal nasal, e 감 (caqui) fica igual a 간 (fígado). Feche a boca no fim de 밤 (noite), e não no de 반 (metade).',
    },
    {
      id: 'r-ll',
      name: 'ㄹ × ㄹㄹ',
      sounds: ['ɾ', 'lː'],
      tip: 'Um ㄹ só, entre vogais, é o “r” de “caro”: a língua bate uma vez. Dois ㄹ seguidos (o fim de uma sílaba e o começo da outra) viram um “l” comprido, com a língua parada no céu da boca. 머리 (cabeça) soa “meori”, com o “r” de “caro”; 멀리 (longe) soa “meolli”, com o “l” esticado.',
    },
  ],
  pairs: [
    { contrast: 'lisa-tensa', a: ['불', 'fogo'], b: ['뿔', 'chifre'] },
    { contrast: 'lisa-tensa', a: ['달', 'lua'], b: ['딸', 'filha'] },
    { contrast: 'lisa-tensa', a: ['자다', 'dormir'], b: ['짜다', 'ser salgado'] },
    { contrast: 'lisa-tensa', a: ['굴', 'ostra'], b: ['꿀', 'mel'] },
    { contrast: 'lisa-tensa', a: ['방', 'quarto'], b: ['빵', 'pão'] },
    { contrast: 'lisa-aspirada', a: ['불', 'fogo'], b: ['풀', 'grama; cola'] },
    { contrast: 'lisa-aspirada', a: ['달', 'lua'], b: ['탈', 'máscara'] },
    { contrast: 'lisa-aspirada', a: ['자다', 'dormir'], b: ['차다', 'chutar; ser frio'] },
    { contrast: 'lisa-aspirada', a: ['발', 'pé'], b: ['팔', 'braço'] },
    { contrast: 'lisa-aspirada', a: ['비', 'chuva'], b: ['피', 'sangue'] },
    { contrast: 'tensa-aspirada', a: ['뿔', 'chifre'], b: ['풀', 'grama; cola'] },
    { contrast: 'tensa-aspirada', a: ['딸', 'filha'], b: ['탈', 'máscara'] },
    { contrast: 'tensa-aspirada', a: ['짜다', 'ser salgado'], b: ['차다', 'chutar; ser frio'] },
    { contrast: 'tensa-aspirada', a: ['깨다', 'acordar; quebrar'], b: ['캐다', 'desenterrar (raízes)'] },
    { contrast: 's-ss', a: ['살', 'carne; anos de idade'], b: ['쌀', 'arroz (cru)'] },
    { contrast: 's-ss', a: ['사다', 'comprar'], b: ['싸다', 'ser barato; embrulhar'] },
    { contrast: 's-ss', a: ['시', 'poema; hora'], b: ['씨', 'semente; sr., sra.'] },
    { contrast: 'eo-o', a: ['거리', 'rua; distância'], b: ['고리', 'argola, elo'] },
    { contrast: 'eo-o', a: ['서리', 'geada'], b: ['소리', 'som, barulho'] },
    { contrast: 'eo-o', a: ['벌', 'abelha; castigo'], b: ['볼', 'bochecha'] },
    { contrast: 'eo-o', a: ['섬', 'ilha'], b: ['솜', 'algodão'] },
    { contrast: 'eo-o', a: ['덜', 'menos'], b: ['돌', 'pedra'] },
    { contrast: 'eu-u', a: ['글', 'texto, escrita'], b: ['굴', 'ostra'] },
    { contrast: 'eu-u', a: ['들', 'campo'], b: ['둘', 'dois'] },
    { contrast: 'eu-u', a: ['그', 'ele; aquele'], b: ['구', 'nove'] },
    { contrast: 'eu-u', a: ['은', 'prata'], b: ['운', 'sorte'] },
    { contrast: 'finais-surdas', a: ['밥', 'arroz cozido; refeição'], b: ['박', 'cabaça'] },
    { contrast: 'finais-surdas', a: ['밥', 'arroz cozido; refeição'], b: ['밭', 'horta, roça'] },
    { contrast: 'finais-surdas', a: ['곧', 'logo, já já'], b: ['곡', 'música, peça musical'] },
    { contrast: 'finais-surdas', a: ['국', 'sopa'], b: ['굽', 'salto (do sapato); casco'] },
    { contrast: 'n-ng', a: ['반', 'metade; turma'], b: ['방', 'quarto'] },
    { contrast: 'n-ng', a: ['간', 'fígado; tempero'], b: ['강', 'rio'] },
    { contrast: 'n-ng', a: ['산', 'montanha'], b: ['상', 'prêmio; mesa'] },
    { contrast: 'n-ng', a: ['전', 'antes; panqueca'], b: ['정', 'afeto'] },
    { contrast: 'm-n', a: ['감', 'caqui'], b: ['간', 'fígado; tempero'] },
    { contrast: 'm-n', a: ['밤', 'noite; castanha'], b: ['반', 'metade; turma'] },
    { contrast: 'm-n', a: ['섬', 'ilha'], b: ['선', 'linha'] },
    { contrast: 'r-ll', a: ['머리', 'cabeça; cabelo'], b: ['멀리', 'longe'] },
    { contrast: 'r-ll', a: ['다리', 'perna; ponte'], b: ['달리', 'de outro jeito'] },
    { contrast: 'r-ll', a: ['부리', 'bico (de ave)'], b: ['불리', 'desvantagem'] },
  ],
  sameSound: [
    {
      words: [
        ['개', 'cachorro'],
        ['게', 'caranguejo'],
      ],
      note: 'Na escrita, ㅐ e ㅔ são vogais diferentes, e a IPA de dicionário ainda marca [ɛ] × [e]. Mas na fala de Seul as duas se fundiram num “ê” médio, e quase ninguém com menos de sessenta anos as separa. Quem decide é o contexto; na dúvida, os coreanos perguntam “아이 애? 어이 에?” (o ㅐ, feito de ㅏ + ㅣ, ou o ㅔ, feito de ㅓ + ㅣ?) para saber como se escreve.',
    },
    {
      words: [
        ['낫', 'foice'],
        ['낮', 'dia (o período claro)'],
      ],
      note: 'No fim da sílaba só existem sete sons: ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ. ㅅ, ㅈ, ㅊ, ㅌ e ㅎ viram todos um “t” preso, e 낫, 낮 e 낯 (rosto) soam iguais: [nat̚]. A diferença volta quando vem uma vogal depois: 낮에 soa [나제] (de dia), e 낫으로, [나스로] (com a foice).',
    },
    {
      words: [
        ['입', 'boca'],
        ['잎', 'folha'],
      ],
      note: 'ㅂ e ㅍ no fim da sílaba são o mesmo “p” preso: 입 e 잎 soam [ip̚]. Com uma vogal depois, o ㅍ reaparece: 잎이 soa [이피], e 입이, [이비].',
    },
    {
      words: [
        ['같이', 'juntos'],
        ['가치', 'valor'],
      ],
      note: 'O ㅌ de 같 seguido de 이 vira ㅊ (a palatalização): 같이 soa exatamente como 가치 [kat͡ɕʰi]. É por isso que tanta gente escreve “가치 가요” por engano nas mensagens.',
    },
    {
      words: [
        ['반드시', 'sem falta'],
        ['반듯이', 'retinho, direito'],
      ],
      note: 'O ㅅ do fim de 듯 passa para a sílaba seguinte (a ligação), e 반듯이 soa igual a 반드시. Só o sentido separa: “반드시 오세요” (venha sem falta) × “반듯이 누우세요” (deite-se reto). É uma das pegadinhas de ortografia favoritas dos próprios coreanos.',
    },
    {
      words: [
        ['왜', 'por quê'],
        ['외', 'fora; além de (como em 외국, exterior)'],
      ],
      note: 'ㅙ, ㅚ e ㅞ se fundiram num mesmo “uê” na fala de hoje (a IPA de dicionário ainda separa [wɛ] de [we]). 왜 (por quê) e o 외 de 외국 (exterior) soam iguais.',
    },
  ],
};
