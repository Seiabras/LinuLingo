import type { LanguageVariant } from '../types';
import { lexiconIpa } from '@/services/ipa-lexicon';
import { IPA_ET } from './pronuncia';

/**
 * O estoniano padrão (eesti kirjakeel), o único ensinado na trilha. O võro e o seto, as falas das
 * ilhas e a do nordeste ficam nos sotaques.
 */
export const VARIANTS_ET: LanguageVariant[] = [
  {
    code: 'et-EE',
    country: 'EST',
    speechLocale: 'et-EE',
    ipa: (t) => lexiconIpa(t, IPA_ET),
    name: 'Estoniano da Estônia',
    flag: '🇪🇪',
    summary:
      'O padrão do app: o «eesti kirjakeel», o estoniano padrão, o mesmo na escola, na imprensa e no governo de todo o país.',
    card: {
      id: 'et-ee-c1',
      title: 'Por que o estoniano padrão?',
      emoji: '🇪🇪',
      history:
        'O estoniano é a língua materna de cerca de 1,1 milhão de pessoas e não é indo-europeu: é uma língua urálica do ramo fínico, parente próximo do finlandês e, mais de longe, do húngaro. O primeiro livro impresso com texto em estoniano é um catecismo de 1535. Por muito tempo houve duas línguas escritas, a do norte, em torno de Tallinn, e a do sul, em torno de Tartu; a primeira Bíblia completa, de 1739, saiu na variante do norte, e foi ela que virou a base do padrão. No século XIX, o despertar nacional trouxe jornais, poesia e a epopeia Kalevipoeg; no começo do século XX, a língua foi renovada com palavras novas e formas mais curtas. É a língua oficial da Estônia desde a independência, em 1918. Hoje quem cuida da norma é o Instituto da Língua Estoniana (Eesti Keele Instituut), que publica o dicionário ortográfico, o ÕS.',
      culture_tip:
        'O estoniano e o finlandês são parentes como o português e o espanhol? Mais ou menos: muitas palavras batem («kala», peixe, é igual nos dois), mas o estoniano perdeu vogais finais («linn» × o finlandês «linna», cidade), quase não tem harmonia vocálica, pegou muitas palavras do alemão e tem o «õ», que o finlandês não tem. Por isso, sem estudo, a compreensão entre os dois é só parcial, e há armadilhas famosas: «hallitus» é mofo em estoniano e governo em finlandês. E o país canta: desde 1869 existe a festa da canção, a «laulupidu», com dezenas de milhares de vozes num palco só; entre 1987 e 1991, os encontros para cantar deram nome à Revolução Cantada.',
      grammar_why:
        'Cinco marcas do estoniano que o app ensina: (1) a tônica cai sempre na primeira sílaba; (2) três quantidades de som, curta, longa e sobrelonga, que mudam o sentido: «sada» (cem) × «saada» (mande!) × «saada» (receber, com a vogal ainda mais comprida); (3) nada de gênero nem de artigo: «ta» é ele ou ela, e «maja» é casa, uma casa e a casa; (4) catorze casos, que fazem o papel das preposições do português: «majas» (na casa), «majja» (para dentro da casa), «majast» (de dentro da casa); (5) a negação «ei», que nunca muda: «ma ei tea», «nad ei tea». E o objeto muda de caso conforme a ação se completa ou não: «loen raamatut» (estou lendo o livro) × «loen raamatu läbi» (leio o livro até o fim).',
      grammar_examples: [
        ['Tere! Mina olen Linu.', 'Oi! Eu sou o Linu.'],
        ['Ta elab Tartus ja töötab Tallinnas.', 'Ele mora em Tartu e trabalha em Tallinn.'],
        ['Ma ei tea, kus pood on.', 'Eu não sei onde fica a loja.'],
        ['Ma loen raamatut.', 'Estou lendo o livro.'],
        ['Kas sa tuled homme meile?', 'Você vem à nossa casa amanhã?'],
      ],
      character_guide: [
        ['õ', 'um «i» dito com a língua para trás e os lábios soltos, sem arredondar (entre o «u» e o «e»)', 'õhtu (noite), sõber (amigo)'],
        ['ä', 'um «é» bem aberto, quase um «a»', 'päike (sol), tänav (rua)'],
        ['ö', 'um «ê» com os lábios arredondados, como se fosse dizer «ô»', 'öö (noite, madrugada), sööma (comer)'],
        ['ü', 'um «i» com os lábios arredondados, como se fosse dizer «u»', 'üks (um), tüdruk (menina)'],
        ['š', 'como o «ch» de «chave»; só aparece em palavras emprestadas', 'šokolaad (chocolate), duš (chuveiro)'],
        ['ž', 'como o «j» de «janela»; só aparece em palavras emprestadas', 'žurnaal (revista), garaaž (garagem)'],
        ['aa, ee, uu…', 'letra dobrada é som mais longo; entre sílabas, pode ser sobrelongo', 'kool (escola), saal (salão)'],
        ['g, b, d', 'sem vibração na garganta: soam entre o «g» e o «k», o «b» e o «p», o «d» e o «t»', 'aga (mas), kodu (casa, lar)'],
      ],
    },
  },
];
