import type { Accent } from '../types';
import { toIpaRuBelarus, toIpaRuUcrania } from './tracos';

/**
 * Falares regionais do russo. As diferenças são menores que as do espanhol ou do italiano:
 * o grande contraste é entre o norte (que diz o «о» átono como [o]) e o sul (com o «г» fricativo).
 * Todo texto russo leva a tônica marcada (U+0301), como no resto do app.
 *
 * Pela regra do app (decisão do dono, 09/10/2026), os dialetos são os países onde o russo é oficial:
 * Rússia (o padrão), Belarus e Cazaquistão (variantes.ts). Os falares da Rússia são sotaques do padrão;
 * Belarus e Cazaquistão aparecem como o próprio dialeto (sameAsVariant). Odessa e Kharkiv são sotaques
 * do russo da Ucrânia (decisão do dono, 10/10/2026).
 */
export const ACCENTS_RU: Accent[] = [
  {
    id: 'ru-moscou',
    name: 'Moscou (russo central)',
    kind: 'sotaque',
    variant: 'ru-RU',
    region: 'Moscou e o centro da Rússia europeia',
    country: 'RUS',
    subdivisions: ['RU-MOW', 'RU-MOS', 'RU-TUL', 'RU-KLU', 'RU-VLA'],
    emoji: '🏛️',
    summary: 'A base do russo padrão: o “а́канье”, em que o “о” átono soa como “a”.',
    features: [
      '“А́канье”: o “о” átono soa [ɐ] ou [ə]: “молоко́” → [məɫɐˈko].',
      'A pronúncia antiga de Moscou ainda vive em “коне́чно” e “ску́чно”, ditos com [ʂn]: [kɐˈnʲeʂnə].',
      'Nas palavras do dia a dia, Moscou e São Petersburgo não combinam: veja o sotaque de Petersburgo.',
    ],
    examples: [
      ['Коне́чно, приходи́!', 'Claro, venha!', '[kɐˈnʲeʂnə prʲɪxɐˈdʲi]'],
      ['Ма́ма пьёт молоко́.', 'A mamãe bebe leite.', '[ˈmamə pʲjɵt məɫɐˈko]'],
    ],
    words: [
      ['бордю́р', 'meio-fio'],
      ['подъе́зд', 'a entrada do prédio'],
      ['шаурма́', 'o churrasquinho no pão sírio'],
    ],
  },
  {
    id: 'ru-petersburgo',
    name: 'São Petersburgo',
    kind: 'sotaque',
    variant: 'ru-RU',
    region: 'São Petersburgo e a região de Leningrado',
    country: 'RUS',
    subdivisions: ['RU-SPE', 'RU-LEN'],
    emoji: '🌉',
    summary: 'A pronúncia é quase a de Moscou; o que muda são as palavras do dia a dia, tema de brincadeira eterna entre as duas cidades.',
    features: [
      'Meio-fio: “поре́брик” em Petersburgo, “бордю́р” em Moscou.',
      'Entrada do prédio: “пара́дная” em Petersburgo, “подъе́зд” em Moscou.',
      'O churrasquinho no pão sírio: “шаве́рма” em Petersburgo, “шаурма́” em Moscou.',
      'Frango na fala coloquial: “ку́ра” em Petersburgo, “ку́рица” no resto do país.',
    ],
    examples: [
      ['Встре́тимся у пара́дной.', 'A gente se encontra na entrada do prédio.', 'em Moscou: “у подъе́зда”'],
      ['Возьму́ шаве́рму.', 'Vou pegar uma shawarma.', 'em Moscou: “шаурму́”'],
    ],
    words: [
      ['поре́брик', 'meio-fio (Moscou: бордю́р)'],
      ['пара́дная', 'entrada do prédio (Moscou: подъе́зд)'],
      ['шаве́рма', 'shawarma (Moscou: шаурма́)'],
      ['ку́ра', 'frango (Moscou: ку́рица)'],
    ],
  },
  {
    id: 'ru-norte',
    name: 'Russo do norte',
    kind: 'sotaque',
    variant: 'ru-RU',
    region: 'Norte da Rússia europeia: Arcangel, Vologda, Carélia, Komi',
    country: 'RUS',
    subdivisions: ['RU-ARK', 'RU-VLG', 'RU-KR', 'RU-KO', 'RU-KOS', 'RU-YAR'],
    emoji: '🌲',
    summary: 'O russo das florestas e do mar Branco: o “о” átono dito com todas as letras e partículas que funcionam como artigo.',
    features: [
      '“О́канье”: o “о” átono soa [o] cheio: “молоко́” → [moloˈko].',
      'Em alguns falares, “ц” e “ч” se confundem (“цо́канье”): “чай” vira “цай”.',
      'Partículas coladas depois do substantivo, parecidas com um artigo: “дом-от”, “кни́га-та”.',
    ],
    examples: [['Молоко́ на столе́.', 'O leite está na mesa.', 'no norte: [moloˈko na stoˈlʲe]; em Moscou: [məɫɐˈko nə stɐˈlʲe]']],
    words: [['баско́й', 'bonito (no falar do norte)']],
  },
  {
    id: 'ru-sul',
    name: 'Russo do sul',
    kind: 'sotaque',
    variant: 'ru-RU',
    region: 'Sul da Rússia: Vorónej, Bélgorod, Kursk, Rostov, Krasnodar',
    country: 'RUS',
    subdivisions: ['RU-VOR', 'RU-BEL', 'RU-KRS', 'RU-ROS', 'RU-KDA', 'RU-ORL', 'RU-LIP', 'RU-TAM', 'RU-BRY'],
    emoji: '🌻',
    summary: 'O russo das estepes e do Don: o “г” sai como um sopro, parecido com o do ucraniano.',
    features: [
      '“г” fricativo [ɣ], em vez do [ɡ] do padrão: “го́род” → [ˈɣorət].',
      '“Я́канье”: o “я” e o “е” átonos viram [a]: “весна́” → [vʲasˈna].',
      'O “т” da 3ª pessoa amolece: “идёт” vira “идёть”, “живёт” vira “живёть”.',
      '“Шо” no lugar de “что” na fala popular.',
    ],
    examples: [['Шо ты говори́шь?', 'O que você está dizendo?', 'no padrão: “Что ты говори́шь?” [ʂto]']],
    words: [
      ['шо', 'o quê (padrão: что)'],
      ['ба́лка', 'vale seco, ravina na estepe'],
    ],
  },
  {
    id: 'ru-siberia',
    name: 'Sibéria e Urais',
    kind: 'sotaque',
    variant: 'ru-RU',
    region: 'Urais e Sibéria: Iekaterinburgo, Novossibirsk, Omsk, Irkutsk',
    country: 'RUS',
    subdivisions: ['RU-SVE', 'RU-CHE', 'RU-PER', 'RU-TYU', 'RU-OMS', 'RU-NVS', 'RU-TOM', 'RU-KEM', 'RU-ALT', 'RU-KYA', 'RU-IRK'],
    emoji: '❄️',
    summary: 'Pronúncia perto do padrão, mas com palavras que só se entendem a leste dos Urais.',
    features: [
      'Nos Urais, “дак” e “чё” abrem muitas frases na fala coloquial.',
      'Palavras próprias: “вехо́тка” (bucha de banho; no padrão, “моча́лка”) e “мультифо́ра” (a capinha plástica de folhas).',
    ],
    examples: [['Дак чё, пойдём?', 'Então, vamos?', 'coloquial dos Urais']],
    words: [
      ['вехо́тка', 'bucha de banho (padrão: моча́лка)'],
      ['мультифо́ра', 'capinha plástica para folhas (padrão: файл)'],
    ],
  },
  {
    id: 'ru-odessa',
    name: 'Russo de Odessa',
    kind: 'sotaque',
    variant: 'ru-UA',
    region: 'Odessa, no sul da Ucrânia',
    country: 'UKR',
    subdivisions: ['UA-51'],
    emoji: '⚓',
    summary: 'O russo da cidade portuária, cheio de humor e de construções vindas do iídiche e do ucraniano. Hoje Odessa é bilíngue, e a língua oficial da Ucrânia é o ucraniano.',
    features: [
      'Construções do iídiche: “Вы та́ки…” (O senhor por acaso…), “Я вас умоля́ю!” (Ora, por favor!).',
      '“Шо” no lugar de “что”, como no ucraniano e no sul da Rússia.',
      'Perguntas respondidas com outra pergunta, marca do humor da cidade.',
    ],
    examples: [
      ['Я вас умоля́ю!', 'Ora, faça-me o favor!'],
      ['Шо вы говори́те?', 'Não diga! (lit.: O que o senhor está dizendo?)'],
    ],
  },
  {
    id: 'ru-kharkiv',
    name: 'Russo de Kharkiv',
    kind: 'sotaque',
    variant: 'ru-UA',
    region: 'Kharkiv e o leste da Ucrânia',
    country: 'UKR',
    subdivisions: ['UA-63'],
    emoji: '🏢',
    summary: 'O russo da segunda maior cidade da Ucrânia, onde 78% dos moradores diziam falar russo em casa numa pesquisa de 2023. Tem o “г” aspirado do ucraniano e palavras de lá, e hoje convive com o ucraniano no trabalho e na escola.',
    features: [
      'O “г” aspirado, como no ucraniano: “го́род” soa quase “horod”.',
      'Palavras do russo da Ucrânia: “тре́мпель” (cabide), “буря́к” (beterraba).',
      'Desde 2022, muita gente passou a usar o ucraniano fora de casa, e é comum a família falar as duas línguas.',
    ],
    examples: [
      ['Пове́сь пальто́ на тре́мпель.', 'Pendure o casaco no cabide.', 'padrão: “на ве́шалку”'],
    ],
    words: [['тре́мпель', 'cabide (padrão: ве́шалка)']],
  },
  {
    id: 'ru-belarus',
    name: 'Russo de Belarus',
    kind: 'sotaque',
    variant: 'ru-BY',
    sameAsVariant: 'ru-BY',
    region: 'Belarus, onde o russo é oficial ao lado do bielorrusso',
    country: 'BLR',
    emoji: '🌾',
    summary: 'O russo com a pronúncia do bielorrusso: “р” e “ч” duros e o “г” fricativo.',
    features: [
      '“р” e “ч” sempre duros: “четы́ре” → [t͡ʂɛˈtɨrɛ].',
      '“г” fricativo [ɣ], como no sul da Rússia.',
      'Na fala popular, a “трася́нка” mistura russo e bielorrusso.',
    ],
    examples: [['Четы́ре гру́ши.', 'Quatro peras.', '[t͡ʂɛˈtɨrɛ ˈɣruʂɨ]']],
    words: [['трася́нка', 'a mistura popular de russo e bielorrusso']],
  },
  {
    id: 'ru-cazaquistao',
    name: 'Russo do Cazaquistão',
    kind: 'sotaque',
    variant: 'ru-KZ',
    sameAsVariant: 'ru-KZ',
    region: 'Cazaquistão, onde o russo é usado oficialmente ao lado do cazaque',
    country: 'KAZ',
    emoji: '🐎',
    summary: 'Pronúncia perto do padrão, com palavras do cazaque no dia a dia.',
    features: [
      'Palavras do cazaque no russo de todo dia: “той” (festa grande), “апа́” (tratamento respeitoso para uma mulher mais velha), “баурса́к” (bolinho frito).',
      'Em Almaty e Astana, muita gente passa do russo ao cazaque no meio da conversa.',
    ],
    examples: [['Приглаша́ю на той!', 'Convido você para a festa!']],
    words: [
      ['той', 'festa grande (casamento, aniversário)'],
      ['баурса́к', 'bolinho de massa frita'],
      ['апа́', 'tratamento respeitoso para uma mulher mais velha'],
    ],
  },
];

// a IPA de Belarus com os traços de lá (tracos.ts)
const belarus = ACCENTS_RU.find((a) => a.id === 'ru-belarus');
if (belarus) belarus.ipa = toIpaRuBelarus;
for (const a of ACCENTS_RU) if (a.variant === 'ru-UA') a.ipa = toIpaRuUcrania;
