import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_LT } from './pronuncia';

/**
 * O lituano padrão (bendrinė kalba), a única variante do app. Os jeitos regionais ficam nos sotaques:
 * o samogiciano (žemaičių) como «língua» (o status é debatido), o aukštaičių como dialeto, e o
 * polonês e o russo falados na Lituânia como «língua».
 */
export const VARIANTS_LT: LanguageVariant[] = [
  {
    code: 'lt-LT',
    country: 'LTU',
    speechLocale: 'lt-LT',
    ipa: (t) => lexiconIpa(t, IPA_LT),
    name: 'Lituano da Lituânia',
    flag: '🇱🇹',
    summary:
      'O padrão do app: a bendrinė kalba, o lituano padrão, a língua oficial da Lituânia, a mesma na escola, na TV e nos documentos.',
    card: {
      id: 'lt-lt-c1',
      title: 'Por que a bendrinė kalba?',
      emoji: '🇱🇹',
      history:
        'O lituano é a língua materna de cerca de 3 milhões de pessoas. O primeiro livro impresso em lituano é o catecismo de Martynas Mažvydas, publicado em 1547, em Königsberg. Entre 1864 e 1904, o Império Russo proibiu imprimir lituano com o alfabeto latino; os livros entravam escondidos, vindos da Prússia Oriental, levados pelos knygnešiai, os contrabandistas de livros. Foi nessa época que a língua padrão tomou forma, a partir dos falares do sudoeste, na região de Suvalkija, que pertencem ao grupo aukštaičių. A gramática de Jonas Jablonskis, de 1901, deu a base da norma que se usa até hoje. Desde 1990, com a restauração da independência, o lituano é a única língua oficial do país, e quem cuida da norma é a Comissão Estatal da Língua Lituana, a Valstybinė lietuvių kalbos komisija.',
      culture_tip:
        'Com quem você não conhece, use «Jūs» (o senhor, a senhora) e o sobrenome com «ponas» ou «ponia»; o «tu» é para amigos, família e crianças. Os sobrenomes mudam com a mulher: do pai Kazlauskas vêm a filha Kazlauskaitė e a esposa Kazlauskienė (e hoje também existe a forma neutra, Kazlauskė). Muita gente comemora o vardadienis, o dia do nome, que no calendário lituano cada nome tem. E ao entrar numa casa, espere o convite para tirar os sapatos: é o costume.',
      grammar_why:
        'O lituano é a língua indo-europeia viva mais conservadora: guarda formas muito parecidas com as do sânscrito e do latim. «Dievas» (Deus) lembra o latim «deus» e o sânscrito «deva»; «sūnus» (filho) é quase o sânscrito «sūnú». Quatro marcas que o app ensina: (1) sete casos, com o vocativo, e as terminações mudando no fim de cada nome: «Jonas» → «Jono», «Jonui», «Joną», «Jonu», «Jone», «Jonai!»; (2) não há artigos, e a negação gruda no verbo, pedindo o genitivo: «turiu laiko» × «neturiu laiko»; (3) a tônica é livre e móvel: pode cair em qualquer sílaba e mudar de lugar na mesma palavra: em «ranka» (mão) ela cai no fim, em «ranką» (a mão, no acusativo) cai no começo; (4) as vogais longas têm dois tons, o agudo (que desce) e o circunflexo (que sobe), marcados só nos dicionários. Na escrita comum, nenhum acento: é o ouvido que aprende.',
      grammar_examples: [
        ['Mano sūnus gyvena Kaune.', 'O meu filho mora em Kaunas.'],
        ['Dievas davė dantis, Dievas duos ir duonos.', 'Deus deu os dentes, Deus vai dar também o pão (provérbio).'],
        ['Aš neturiu laiko.', 'Eu não tenho tempo.'],
        ['Tai ponas Kazlauskas ir jo žmona, ponia Kazlauskienė.', 'Este é o senhor Kazlauskas e a esposa dele, a senhora Kazlauskienė.'],
        ['Labas rytas! Kaip sekasi?', 'Bom dia! Como vai?'],
      ],
      character_guide: null,
    },
  },
];
