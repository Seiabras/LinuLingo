import type { Accent } from '../types';

/**
 * Os falares regionais do romeno (em romeno, «graiuri»). Todos se entendem entre si; o padrão
 * escrito e o da televisão se apoiam no falar de Muntenia (Bucareste).
 */
export const ACCENTS_RO: Accent[] = [
  {
    id: 'ro-muntenesc',
    name: 'Muntênio (Bucareste)',
    kind: 'sotaque',
    region: 'Muntenia, no sul da Romênia, com Bucareste',
    country: 'ROU',
    subdivisions: ['RO-B', 'RO-IF', 'RO-AG', 'RO-DB', 'RO-PH', 'RO-BZ', 'RO-BR', 'RO-IL', 'RO-CL', 'RO-GR', 'RO-TR'],
    variant: 'ro-RO',
    emoji: '🏙️',
    summary: 'A base do romeno padrão: é a pronúncia que o app ensina e a que se ouve na televisão.',
    features: [
      'É o falar mais próximo da língua escrita, por isso serve de modelo nas escolas e na TV.',
      'Na fala popular de Bucareste, «pe» e «de» viram «pă» e «dă»: «pă bune» (de verdade), «dă ce?» (por quê?).',
      'O passado do dia a dia é o perfeito composto: «am mers» (fui), «am mâncat» (comi).',
    ],
    examples: [
      ['Dă ce nu vii?', 'Por que você não vem?', 'no padrão: «De ce nu vii?»'],
      ['Pă bune?', 'Sério? De verdade?', 'no padrão: «Pe bune?»'],
    ],
    words: [
      ['pă bune', 'sério, de verdade'],
      ['mișto', 'legal (gíria de origem romani)'],
      ['nașpa', 'ruim, chato (gíria)'],
    ],
  },
  {
    id: 'ro-moldovenesc',
    name: 'Moldavo',
    kind: 'dialeto',
    region: 'Moldávia romena (Iași, Suceava, Bacău…) e a República da Moldávia',
    country: 'ROU',
    subdivisions: ['RO-IS', 'RO-SV', 'RO-BT', 'RO-NT', 'RO-BC', 'RO-VS', 'RO-GL', 'RO-VN'],
    emoji: '🍇',
    summary: 'O falar do leste, dos dois lados do rio Prut: consoantes que «amolecem» e palavras que o resto do país estranha.',
    features: [
      '«ce, ci» soam [ʃ] e «ge, gi» soam [ʒ]: «cinci» vira «șinși», «ger» vira «jer».',
      'Consoantes labiais antes de «i» mudam: «bine» → «ghine», «piele» → «chele», «mie» → «nie», «fir» → «hir».',
      'O «e» átono se fecha em «i»: «venit» → «vinit».',
      'Palavras próprias: «poame» (uvas), «harbuz» (melancia), «păpușoi» (milho), «barabule» (batatas).',
    ],
    examples: [
      ['Ghine ai vinit!', 'Que bom que você veio!', 'no padrão: «Bine ai venit!»'],
      ['Am cumpărat poame și harbuz.', 'Comprei uvas e melancia.', 'no padrão: «struguri și pepene»'],
    ],
    words: [
      ['poame', 'uvas (padrão: struguri)'],
      ['harbuz', 'melancia (padrão: pepene verde)'],
      ['păpușoi', 'milho (padrão: porumb)'],
      ['barabule', 'batatas (padrão: cartofi)'],
    ],
  },
  {
    id: 'ro-ardelenesc',
    name: 'Transilvano',
    kind: 'dialeto',
    region: 'Transilvânia, no centro e noroeste da Romênia (Cluj, Sibiu, Brașov…)',
    country: 'ROU',
    subdivisions: ['RO-CJ', 'RO-SB', 'RO-BV', 'RO-MS', 'RO-AB', 'RO-HD', 'RO-BN', 'RO-SJ', 'RO-CV', 'RO-HR'],
    emoji: '🏔️',
    summary: 'Famoso na Romênia inteira pela fala lenta e arrastada, alvo de piadas carinhosas, e pelo «no» em toda frase.',
    features: [
      'Fala mais lenta, com vogais alongadas: a fama de «devagar» do transilvano é tema de piada no país inteiro.',
      '«No» como marcador em quase toda frase: «No, hai!» (Então, vamos!).',
      '«Îi» no lugar de «e» (é): «îi bine» (está bom).',
      'Palavras do húngaro e do alemão, vizinhos de séculos: «fain» (bonito, legal), «pită» (pão), «curechi» (repolho).',
    ],
    examples: [
      ['No, ce faci, măi?', 'E aí, como vai, cara?'],
      ['Îi fain afară.', 'Está bonito lá fora.', 'no padrão: «E frumos afară.»'],
    ],
    words: [
      ['fain', 'bonito, legal (do alemão «fein»)'],
      ['pită', 'pão (padrão: pâine)'],
      ['curechi', 'repolho (padrão: varză)'],
      ['no', 'então, bom… (marcador da conversa)'],
    ],
  },
  {
    id: 'ro-banatean',
    name: 'Banatense',
    kind: 'dialeto',
    region: 'Banat, no oeste da Romênia (Timișoara, Reșița, Arad)',
    country: 'ROU',
    subdivisions: ['RO-TM', 'RO-CS', 'RO-AR'],
    emoji: '🍅',
    summary: 'O falar do oeste, perto da Sérvia e da Hungria: «t» e «d» amolecidos e palavras vindas do alemão.',
    features: [
      '«t» e «d» antes de «e» e «i» amolecem, com a língua no céu da boca: «frate» soa quase «frace».',
      'Palavras do alemão e do sérvio: «paradaisă» (tomate, do alemão austríaco «Paradeiser»), «crumpi» (batatas), «cucuruz» (milho).',
      'Formas verbais próprias: «mânc» no lugar de «mănânc» (eu como).',
    ],
    examples: [['Mânc paradaisă cu crumpi.', 'Como tomate com batata.', 'no padrão: «Mănânc roșii cu cartofi.»']],
    words: [
      ['paradaisă', 'tomate (padrão: roșie)'],
      ['crumpi', 'batatas (padrão: cartofi)'],
      ['cucuruz', 'milho (padrão: porumb)'],
    ],
  },
  {
    id: 'ro-oltenesc',
    name: 'Oltênio',
    kind: 'dialeto',
    region: 'Oltênia, no sudoeste da Romênia (Craiova, Târgu Jiu…)',
    country: 'ROU',
    subdivisions: ['RO-DJ', 'RO-GJ', 'RO-MH', 'RO-OT', 'RO-VL'],
    emoji: '🗣️',
    summary: 'Onde o perfeito simples, que no resto do país só aparece nos livros, continua vivo na conversa.',
    features: [
      'O perfeito simples é usado para o que acabou de acontecer: «mă dusei» (fui agora há pouco), «făcui» (fiz), «mâncai» (comi).',
      'O poeta Marin Sorescu escreveu o ciclo «La Lilieci» no falar da sua aldeia natal, na Oltênia.',
    ],
    examples: [['Mă dusei la piață și cumpărai pâine.', 'Fui à feira e comprei pão (agora há pouco).', 'no padrão: «M-am dus la piață și am cumpărat pâine.»']],
    words: [
      ['mă dusei', 'fui (agora há pouco)'],
      ['făcui', 'fiz (agora há pouco)'],
    ],
  },
];
