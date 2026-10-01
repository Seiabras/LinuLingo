import type { UnitSeed } from '../types';

/**
 * Trilha do aragonês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_AN: UnitSeed[] = [
  {
    id: 'an-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ola! Os primers pasos',
    emoji: '👋',
    card: {
      id: 'an-c1',
      title: 'A fabla dos Pirineus aragoneses',
      emoji: '🏔️',
      history:
        'O aragonés (chamado também “a fabla”) é uma língua românica que nasceu do latim falado nos Pirineus, na mesma época em que o castelhano nascia mais ao sul. Hoje é falado sobretudo nos vales do norte de Aragão (Espanha): Chistau, Tena, Benás, Echo, Ansó e arredores. As estimativas de falantes variam muito, de 10 mil a 30 mil, a maioria também fluente em espanhol. A norma gráfica usada aqui é a da Academia de l’Aragonés (EFA), fixada em 2010. Desde 2013 o aragonés é reconhecido como “língua própria histórica” de Aragão, mas sem o mesmo status oficial do catalão ou do basco em suas regiões.',
      culture_tip:
        '“Ola!” serve para o dia todo, de forma informal. Já “buen día”, “buena tardada” e “buena nuei” marcam a hora, meio formais. Para agradecer, “grazias”; para desculpar-se, “perdón”. Entre amigos usa-se “tu”; o tratamento mais distante some em grande parte do aragonés falado hoje, que prefere “tu” quase sempre.',
      grammar_why:
        'O aragonês diz o nome com o verbo “clamar-se”: “me clamo Ana”, literalmente algo como “eu me chamo Ana”. E o verbo “fablar” (falar) deu até o apelido carinhoso da própria língua: “a fabla”. O verbo “estar” cobre tanto o nosso “ser” quanto o nosso “estar”: “yo soi d’Uesca” (sou de Huesca) e “yo soi bien” (estou bem).',
      grammar_examples: [
        ['Ola! Me clamo Ana.', 'Oi! Eu me chamo Ana.'],
        ['Cómo te clamas?', 'Como você se chama?'],
        ["Er ye de Chaca, ella ye de Balbastro.", 'Ele é de Jaca, ela é de Barbastro.'],
        ['Bien, grazias. E tu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['f-', 'o aragonês conserva o F inicial do latim, que o espanhol perdeu', 'farina (farinha, esp. harina), fierro (ferro, esp. hierro)'],
        ['ch', 'como o “tch” de “tchau”, onde o espanhol tem “j”', 'chen (gente), chirmán (irmão)'],
        ['ll', 'como o “lh” do português', 'fillo (filho), chillar (gritar)'],
        ['pl-, cl-, fl-', 'conservados no começo da palavra, onde o espanhol vira “ll”', 'plorar (chorar, esp. llorar), clau (chave, esp. llave)'],
        ['z', 'som de “s” ou “ts”, onde o espanhol usa “c” antes de e/i', 'zinco (cinco), ziudá (cidade)'],
      ],
    },
    lessons: [
      {
        id: 'an-u1-l1',
        title: 'Ola, grazias, adiós!',
        kind: 'licao',
        words: ['ola', 'buen día', 'buena tardada', 'buena nuei', 'adiós', 'grazias'],
        cloze: [
          { sentence: '___, Ana! Cómo yes?', answer: 'Ola', options: ['Ola', 'Adiós', 'Grazias'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'Ya ye nuei: ___!', answer: 'buena nuei', options: ['buena nuei', 'buen día', 'grazias'], translation: 'Já é noite: boa noite!' },
          { sentence: 'Muitas ___!', answer: 'grazias', options: ['grazias', 'ola', 'adiós'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ola! Cómo yes?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bien, grazias! E tu?', 'bien', 'grazias'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bien, grazias! E tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em aragonês: um de dia (“Buen día…”), um à noite (“Buena nuei…”) e uma despedida (“Adiós”).',
      },
      {
        id: 'an-u1-l2',
        title: 'Yo, tu, er, ella',
        kind: 'licao',
        words: ['yo', 'tu', 'er', 'ella', 'clamar-se', 'nombre'],
        cloze: [
          { sentence: '___ soi d’Uesca.', answer: 'Yo', options: ['Yo', 'Tu', 'Er'], translation: 'Eu sou de Huesca.' },
          { sentence: 'Cómo te ___?', answer: 'clamas', options: ['clamas', 'yes', 'has'], translation: 'Como você se chama?' },
          { sentence: '___ ye de Chaca.', answer: 'Er', options: ['Er', 'Yo', 'Tu'], translation: 'Ele é de Jaca.' },
        ],
        voice: {
          bot: 'Ola! Cómo te clamas?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Me clamo Ana. E tu?', 'me clamo', 'e tu'],
          hint: 'Diga o seu nome com “Me clamo…” e devolva a pergunta com “E tu?”.',
        },
        communityPrompt: 'Apresente-se em aragonês: diga o seu nome com “Me clamo…” e a sua cidade com “Soi de…”.',
      },
      {
        id: 'an-u1-l3',
        title: 'Prova: os primers pasos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ola! Me clamo Chusé. Cómo te clamas e d’an yes?',
          botTranslation: 'Oi! Eu me chamo Chusé. Como você se chama e de onde você é?',
          expected: ['Ola! Me clamo Lucía e soi de Sant Paulo.', 'me clamo', 'soi de', 'ola'],
          hint: 'Devolva o cumprimento (“Ola!”), diga o nome com “Me clamo…” e a cidade com “Soi de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Me clamo…”, cidade com “Soi de…” e uma despedida.',
      },
    ],
  },
  {
    id: 'an-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A familia e a casa',
    emoji: '👪',
    card: {
      id: 'an-c2',
      title: 'O, a, os, as: os artigos que lembram o português',
      emoji: '🧭',
      history:
        'O aragonés e o português são parentes distantes — os dois vêm do latim, mas por caminhos diferentes —, e ainda assim coincidem num detalhe curioso: os dois dizem “o” e “a” em vez do “el” e “la” do espanhol. É uma herança comum do latim ille/illa que cada língua resolveu do seu jeito, sem uma influenciar a outra. Outra coincidência é a palavra “pai”, quase igual à portuguesa, ao lado de “mai”, bem diferente do espanhol “madre”.',
      culture_tip:
        'A família é o centro da vida nos vales aragoneses, e o queijo (queso) e o pão (pan) feitos em casa têm orgulho próprio em cada vale — o queso de Chistau é um dos mais conhecidos. Perguntar “d’an yes?” (de onde você é) quase sempre leva a uma resposta com o nome do vale.',
      grammar_why:
        'O artigo definido é “o” (masculino) e “a” (feminino), no plural “os” e “as” — igual ao português, diferente do espanhol “el/la/los/las”. O possessivo vai antes do nome: “o mío pai” (o meu pai), “a mía mai” (a minha mãe). Para negar, basta “no” antes do verbo: “no sé” (não sei).',
      grammar_examples: [
        ['A mía familia ye gran.', 'A minha família é grande.'],
        ['Yo he un chirmán e una chirmana.', 'Tenho um irmão e uma irmã.'],
        ['O leit ye blanco.', 'O leite é branco.'],
        ['No sé.', 'Não sei.'],
      ],
      character_guide: [
        ['o / a', 'o artigo definido, igual ao do português', 'o pai, a mai, os fillos, as fillas'],
        ['-it / -ueito', 'o grupo latino -ct- vira -it, como o -eite do português', 'leit (leite), ueito (oito, de octo)'],
      ],
    },
    lessons: [
      {
        id: 'an-u2-l1',
        title: 'A mía familia',
        kind: 'licao',
        words: ['familia', 'mai', 'pai', 'chirmán', 'chirmana', 'aber'],
        cloze: [
          { sentence: 'A mía ___ se clama Rosa.', answer: 'mai', options: ['mai', 'pai', 'chirmán'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Yo ___ un chirmán.', answer: 'he', options: ['he', 'soi', 'vo'], translation: 'Eu tenho um irmão.' },
          { sentence: 'O mío ___ ye de Chaca.', answer: 'pai', options: ['pai', 'chirmana', 'mai'], translation: 'O meu pai é de Jaca.' },
        ],
        voice: {
          bot: 'Has chirmans u chirmanas?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sí, he un chirmán e una chirmana.', 'he', 'chirmán', 'chirmana'],
          hint: 'Responda com “Sí, he…” ou “No, no he chirmans”.',
        },
        communityPrompt: 'Descreva a sua família em aragonês: quantos irmãos (chirmans) e irmãs (chirmanas) você tem e como se chamam os seus pais.',
      },
      {
        id: 'an-u2-l2',
        title: 'En casa',
        kind: 'licao',
        words: ['casa', 'augua', 'pan', 'leit', 'queso', 'querer'],
        cloze: [
          { sentence: 'A mía ___ ye chicota.', answer: 'casa', options: ['casa', 'augua', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Yo bebo ___.', answer: 'augua', options: ['augua', 'pan', 'queso'], translation: 'Eu bebo água.' },
          { sentence: 'Mincho pan e ___.', answer: 'queso', options: ['queso', 'augua', 'leit'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Qué minchas?',
          botTranslation: 'O que você come?',
          expected: ['Mincho pan e queso.', 'mincho', 'pan', 'queso'],
          hint: 'Diga o que come com “Mincho…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Mincho…” e “Bebo…”.',
      },
      {
        id: 'an-u2-l3',
        title: 'Prova: familia e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fabla’m d’a tuya familia: has chirmans u chirmanas?',
          botTranslation: 'Fale da sua família: você tem irmãos ou irmãs?',
          expected: ['Sí, he una chirmana. Se clama Maria.', 'he', 'se clama'],
          hint: 'Diga quantos irmãos tem (“he…”) e o nome deles (“se clama…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “he”, “se clama” e “ye”.',
      },
    ],
  },
];
