import type { UnitSeed } from '../types';

/**
 * Trilha do bielorrusso: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_BE: UnitSeed[] = [
  {
    id: 'be-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Прывітанне! Першыя крокі',
    emoji: '👋',
    card: {
      id: 'be-c1',
      title: 'A língua entre o russo e o ucraniano',
      emoji: '🦬',
      history:
        'O bielorrusso (беларуская мова) é uma língua eslava oriental, parente próxima do russo e do ucraniano: as três vêm do eslavo oriental antigo falado na Rússia de Kiev. É língua oficial de Belarus desde a independência, em 1991, ao lado do russo — mas hoje a maioria da população usa o russo no dia a dia, e o bielorrusso é falado mais no campo e entre quem estuda a cultura nacional. A norma escrita usada aqui é a narkamaŭka, oficial desde a reforma ortográfica de 1933; existe também a taraškievica, a norma clássica de 1918, ainda usada em publicações fora de Belarus, mas não é a ensinada aqui.',
      culture_tip:
        '“Прывітанне” é o cumprimento informal de todo dia; “Добры дзень” é mais neutro e serve em qualquer situação. Para agradecer, “дзякуй”; para pedir ou responder “de nada”, “калі ласка”. Com desconhecidos e em situações formais, usa-se “вы”, com o verbo no plural, como em russo.',
      grammar_why:
        'O bielorrusso diz o nome com “мяне завуць”, literalmente “me chamam”: “Мяне завуць Ганна”, “Як цябе завуць?”. E o verbo “быць” (ser/estar) quase desaparece no presente: “я з Рыя-дэ-Жанэйра” já quer dizer “eu sou do Rio de Janeiro”, sem precisar de verbo.',
      grammar_examples: [
        ['Прывітанне! Мяне завуць Ганна.', 'Oi! Eu me chamo Ganna.'],
        ['Як цябе завуць?', 'Como você se chama?'],
        ['Адкуль ты?', 'De onde você é?'],
        ['Добра, дзякуй. А ты?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ў', 'um “u” curto, quase não silábico; não existe no russo', 'добра́ў (bem-aventurado), e no fim de sílaba como em сёння'],
        ['дз / дзь', 'como o “dj” antes de i/e, ou um “d” molhado', 'дзякуй (obrigado), дзе (onde)'],
        ['ц / ць', 'como o “ts” antes de i/e, ou um “t” molhado', 'цябе (a você), калі ласка'],
        ['і', 'sempre “i”, mesmo onde o russo usaria “и”', 'і́мя (nome)'],
        ['г', 'som de “h” aspirado, mais suave que o “g” russo', 'го́рад (cidade)'],
      ],
    },
    lessons: [
      {
        id: 'be-u1-l1',
        title: 'Прывітанне, дзякуй, да пабачэння!',
        kind: 'licao',
        words: ['прывіта́нне', 'до́бры дзень', 'до́бры ве́чар', 'до́брай но́чы', 'да пабачэ́ння', 'дзя́куй'],
        cloze: [
          { sentence: '___, Во́ля! Як спра́вы?', answer: 'Прывіта́нне', options: ['Прывіта́нне', 'Да пабачэ́ння', 'Дзя́куй'], translation: 'Oi, Volia! Como vai?' },
          { sentence: 'Ужо но́ч: ___!', answer: 'до́брай но́чы', options: ['до́брай но́чы', 'до́бры дзень', 'дзя́куй'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ вя́лікі!', answer: 'Дзя́куй', options: ['Дзя́куй', 'Прывіта́нне', 'Да пабачэ́ння'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Прывіта́нне! Як спра́вы?',
          botTranslation: 'Oi! Como vai?',
          expected: ['До́бра, дзя́куй! А ты?', 'до́бра', 'дзя́куй'],
          hint: 'Responda que vai bem e devolva a pergunta: “До́бра, дзя́куй! А ты?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em bielorrusso: um de dia (“До́бры дзень…”), um à noite (“До́бры ве́чар…”) e uma despedida (“Да пабачэ́ння”).',
      },
      {
        id: 'be-u1-l2',
        title: 'Я, ты, ён, яна́',
        kind: 'licao',
        words: ['я', 'ты', 'ён', 'яна́', 'мяне́ зва́ць', 'і́мя'],
        cloze: [
          { sentence: '___ зва́ць Ган́на.', answer: 'Мяне́', options: ['Мяне́', 'Ты', 'Ён'], translation: 'Eu me chamo Hanna.' },
          { sentence: 'Як цябе́ ___?', answer: 'зва́ць', options: ['зва́ць', 'ёсць', 'ма́ю'], translation: 'Como você se chama?' },
          { sentence: '___ з Го́меля.', answer: 'Ён', options: ['Ён', 'Я', 'Ты'], translation: 'Ele é de Gomel.' },
        ],
        voice: {
          bot: 'Прывіта́нне! Як цябе́ зва́ць?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Мяне́ зва́ць А́нна. Тако́сама, як цябе́?', 'мяне́ зва́ць'],
          hint: 'Diga o seu nome com “Мяне́ зва́ць…” e devolva a pergunta.',
        },
        communityPrompt: 'Apresente-se em bielorrusso: diga o seu nome com “Мяне́ зва́ць…” e a sua cidade com “Я з…”.',
      },
      {
        id: 'be-u1-l3',
        title: 'Тэст: першыя крокі',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Прывіта́нне! Мяне́ зва́ць Андрэ́й. Як цябе́ зва́ць? Адку́ль ты?',
          botTranslation: 'Oi! Eu me chamo Andrei. Como você se chama? De onde você é?',
          expected: ['Прывіта́нне! Мяне́ зва́ць Лю́сія і я з Сан-Паўлу.', 'мяне́ зва́ць', 'я з', 'прывіта́нне'],
          hint: 'Devolva o cumprimento (“Прывіта́нне!”), diga o nome com “Мяне́ зва́ць…” e a cidade com “Я з…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Мяне́ зва́ць…”, cidade com “Я з…” e uma despedida.',
      },
    ],
  },
  {
    id: 'be-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Сям’я́ і дом',
    emoji: '👪',
    card: {
      id: 'be-c2',
      title: 'Sem artigos, com um só verbo ter',
      emoji: '🧭',
      history:
        'Como o russo e o ucraniano, o bielorrusso não tem artigos (nem “o/a”, nem “um/uma”): “дом” pode ser “casa”, “a casa” ou “uma casa”, conforme o contexto. Belarus foi parte do Grão-Ducado da Lituânia e depois da Rzeczpospolita polaco-lituana por séculos, e o bielorrusso guarda bastante vocabulário em comum com o polonês e o lituano, além do núcleo eslavo que compartilha com o russo e o ucraniano.',
      culture_tip:
        'A letra “ў” é a marca mais famosa do bielorrusso: até existe um monumento a ela em Polatsk. Ela aparece onde o russo teria “в” ou “л” no fim de sílaba, e dá à língua um som mais suave, quase cantado.',
      grammar_why:
        'O bielorrusso não tem o verbo “ter” separado de “haver”: “мець” serve para os dois, e “ёсць” (há) aparece para dizer que algo existe: “у мяне ёсць сястра” (eu tenho uma irmã, lit. “em mim há irmã”). Para negar, “не” vai antes do verbo: “я не ве́даю” (eu não sei).',
      grammar_examples: [
        ['У мяне ёсць брат і сястра.', 'Tenho um irmão e uma irmã.'],
        ['Мая сям’я вялікая.', 'A minha família é grande.'],
        ['Малако белае.', 'O leite é branco.'],
        ['Я не ведаю.', 'Eu não sei.'],
      ],
      character_guide: [
        ['’', 'apóstrofo separa a consoante do som “i/e” seguinte', 'сям’я́ (família), і́мя (nome)'],
        ['ь', 'sinal mole: amolece a consoante anterior', 'дзень (dia), быць (ser)'],
      ],
    },
    lessons: [
      {
        id: 'be-u2-l1',
        title: 'Мая́ сям’я́',
        kind: 'licao',
        words: ['сям’я́', 'ма́ма', 'та́та', 'брат', 'сястра́', 'мець'],
        cloze: [
          { sentence: 'Маю́ ___ зва́ць Во́ля.', answer: 'ма́му', options: ['ма́му', 'та́ту', 'бра́та'], translation: 'A minha mãe se chama Volia.' },
          { sentence: 'У мяне́ ёсць ___.', answer: 'брат', options: ['брат', 'дом', 'ка́ва'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Мой ___ з Го́меля.', answer: 'та́та', options: ['та́та', 'сястра́', 'ма́ма'], translation: 'O meu pai é de Gomel.' },
        ],
        voice: {
          bot: 'У цябе́ ёсць бра́ты ці сёстры?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Так, у мяне́ ёсць брат і сястра́.', 'у мяне́ ёсць', 'брат', 'сястра́'],
          hint: 'Responda com “Так, у мяне́ ёсць…” ou “Не, у мяне́ няма́…”.',
        },
        communityPrompt: 'Descreva a sua família em bielorrusso: quantos irmãos e irmãs você tem, usando “у мяне́ ёсць”.',
      },
      {
        id: 'be-u2-l2',
        title: 'До́ма',
        kind: 'licao',
        words: ['дом', 'вада́', 'хлеб', 'малако́', 'сыр', 'любі́ць'],
        cloze: [
          { sentence: 'Мой ___ малы́.', answer: 'дом', options: ['дом', 'хлеб', 'сыр'], translation: 'A minha casa é pequena.' },
          { sentence: 'Я п’ю ___.', answer: 'ваду́', options: ['ваду́', 'хлеб', 'сыр'], translation: 'Eu bebo água.' },
          { sentence: 'Я ем хлеб з ___.', answer: 'сы́рам', options: ['сы́рам', 'ваду́', 'малако́'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Што ты еш?',
          botTranslation: 'O que você come?',
          expected: ['Я ем хлеб з сы́рам.', 'я ем', 'хлеб', 'сыр'],
          hint: 'Diga o que come com “Я ем…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Я ем…” e “Я п’ю…”.',
      },
      {
        id: 'be-u2-l3',
        title: 'Тэст: сям’я́ і дом',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'У цябе́ ёсць бра́ты ці сёстры? Што ты еш?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come?',
          expected: ['У мяне́ ёсць сястра́ і я ем хлеб з сы́рам.', 'у мяне́ ёсць', 'я ем'],
          hint: 'Diga quem você tem na família com “у мяне́ ёсць…” e o que come com “я ем…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “у мяне́ ёсць”, “зва́ць” e “ёсць”.',
      },
    ],
  },
];
