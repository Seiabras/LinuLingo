import type { Accent } from '../types';

/**
 * Os falares regionais do catalão. A classificação em dois grandes blocos (oriental e ocidental)
 * foi proposta por Manuel Milà i Fontanals em 1861, com base sobretudo nas vogais átonas. O aranès
 * não é catalão — é uma variedade do occitano, oficial na Catalunha desde o Estatuto de 2006 — mas
 * entra aqui porque convive com o catalão dentro do mesmo território.
 */
export const ACCENTS_CA: Accent[] = [
  {
    id: 'ca-central',
    name: 'Central (Barcelona)',
    kind: 'sotaque',
    region: 'Barcelona e a maior parte da Catalunha central e oriental',
    country: 'ESP',
    subdivisions: ['ES-B', 'ES-GI', 'ES-T'],
    emoji: '🏙️',
    summary: 'A base do catalão padrão: é a pronúncia que o app ensina. Bloco oriental: o «a» e o «e» átonos caem os dois no som neutro [ə], e o «o» átono soa [u].',
    features: [
      'Vocalisme àton reduzido: «pare» soa [ˈpaɾə], «Barcelona» soa [bərsəˈlonə].',
      'Betacisme: «b» e «v» soam sempre igual, como o nosso «b» — «beu» e «veu» soam idênticos.',
      'É a pronúncia de referência da televisão e das escolas, mas não é «mais correta» que as outras: é só a que o padrão escrito escolheu para servir de modelo.',
    ],
    examples: [
      ['Anem cap a la plaça.', 'Vamos para a praça.'],
      ['La meva germana viu a Girona.', 'Minha irmã mora em Girona.'],
    ],
  },
  {
    id: 'ca-nordoccidental',
    name: 'Nord-occidental (Lleida)',
    kind: 'dialeto',
    region: 'Lleida e o oeste da Catalunha',
    country: 'ESP',
    subdivisions: ['ES-L'],
    emoji: '🌾',
    summary: 'Bloco ocidental: as vogais átonas continuam distintas (não caem em [ə]), e ainda se ouve o artigo antigo «lo», o mesmo de «Tirant lo Blanc».',
    features: [
      '«pare» soa [ˈpaɾe], «cosí» soa [koˈzi] — sem a redução do bloco oriental.',
      'O artigo «lo» (lo pare, lo gos) continua vivo na fala popular, ao lado de «el».',
      'A 1ª pessoa do presente é igual à do central: «jo parlo».',
    ],
    examples: [
      ['Lo meu germà viu a Lleida.', 'O meu irmão mora em Lleida.'],
      ['Cosí és a la vora del riu.', 'O primo está à beira do rio. (nota: cosí = [koˈzi], sem a redução do central)'],
    ],
  },
  {
    id: 'ca-valencia',
    name: 'Valenciano',
    kind: 'dialeto',
    region: 'Comunidade Valenciana',
    country: 'ESP',
    subdivisions: ['ES-VC'],
    emoji: '🍊',
    summary: 'O nome oficial da língua na Comunidade Valenciana. A norma própria (Acadèmia Valenciana de la Llengua, 1998) convive com a do Institut d\'Estudis Catalans, com formas próprias bem conhecidas: parle, este, la meua, eixir.',
    features: [
      '1ª pessoa do presente em «-e»: «jo parle», «jo cante» (o central diz «jo parlo»).',
      'Demonstrativos «este/eixe/aquell» ao lado de «aquest/aqueix/aquell», e possessivos sem contração: «la meua», «la teua».',
      'Vocabulário próprio do dia a dia: xiquet (menino), eixir (sair), hui (hoje), espill (espelho).',
    ],
    examples: [
      ['Hui eixim a sopar amb els xiquets.', 'Hoje vamos sair para jantar com as crianças.'],
      ['Esta és la meua casa.', 'Esta é a minha casa.'],
    ],
  },
  {
    id: 'ca-balear',
    name: 'Balear (Maiorca, Menorca, Ibiza)',
    kind: 'dialeto',
    region: 'Ilhas Baleares',
    country: 'ESP',
    subdivisions: ['ES-IB'],
    emoji: '🏝️',
    summary: 'O falar das ilhas, com o famoso «article salat» (es, sa, ses), herdado do latim «ipse» em vez de «ille». A 1ª pessoa do presente não leva terminação: «jo cant», «jo parl».',
    features: [
      'Artigo salat: es cotxe, sa casa, ses cases; antes de vogal, s\' (s\'aigua). Existe também em pontos da Costa Brava.',
      'Artigo pessoal «en/na»: en Joan, na Maria.',
      'Palavras próprias: al·lot (menino), moix (gato), ca (cachorro), horabaixa (fim de tarde), idò (então).',
    ],
    examples: [
      ['Idò, anam a sa platja?', 'Então, vamos à praia?'],
      ["S'al·lot juga amb es moix.", 'O menino brinca com o gato.'],
    ],
  },
  {
    id: 'ca-rossellones',
    name: 'Rossellonês (Catalunha do Norte)',
    kind: 'dialeto',
    region: 'Rosselló, no sul da França (Catalunha do Norte)',
    country: 'FRA',
    subdivisions: ['FR-66'],
    emoji: '🇫🇷',
    summary: 'O catalão que passou à França com o Tratado dos Pirenéus em 1659 e convive há séculos com o francês. Marca típica: a negação reforçada com «pas».',
    features: [
      'Negação com «pas»: «No ho sé pas» (não sei mesmo/de jeito nenhum).',
      'Muitos empréstimos do francês no vocabulário do dia a dia.',
      'Bloco oriental (como o central): mantém a redução das vogais átonas.',
    ],
    examples: [['No ho sé pas.', 'Eu não sei mesmo (de jeito nenhum).']],
  },
  {
    id: 'ca-alguerès',
    name: 'Alguerês',
    kind: 'dialeto',
    region: "L'Alguer (Alghero), na Sardenha, Itália",
    country: 'ITA',
    // sem `subdivisions`: l'Alguer é um único município (comune) dentro da província de Sassari, na
    // Sardenha — não há um código ISO 3166-2 desse tamanho, e usar o da região inteira (Sardenha)
    // pintaria no mapa uma área bem maior do que a real.
    emoji: '🏛️',
    summary: 'Uma ilha linguística: catalão levado por colonos no século XIV, cercado pelo sardo e pelo italiano há mais de seiscentos anos. Reconhecido como minoria linguística pela lei italiana de 1999.',
    features: [
      'Traços próprios de pronúncia, como o «l» entre vogais que pode soar como «r» (rotacismo).',
      'Vocabulário com empréstimos do italiano e do sardo.',
      'A Obra Cultural de l\'Alguer trabalha pela revitalização da língua entre os mais jovens.',
    ],
    examples: [['Bon dia, com estàs?', 'Bom dia, como você está? (a base é a mesma do catalão comum)']],
  },
  {
    id: 'ca-aranes',
    name: 'Aranês (occitano, não é catalão)',
    kind: 'língua',
    region: "Vall d'Aran, nos Pirenéus catalães",
    country: 'ESP',
    // sem `subdivisions`: a Vall d'Aran é uma comarca dentro da Catalunha, não uma subdivisão própria
    // no ISO 3166-2 — usar o código da Catalunha inteira (ES-CT) confundiria com o sotaque central.
    emoji: '🐐',
    summary: 'Não é um sotaque do catalão: é uma variedade do gascão, dialeto do occitano, a língua dos trovadores medievais do sul da França. Desde o Estatuto de 2006, é oficial na Catalunha ao lado do catalão e do castelhano.',
    features: [
      'Parece catalão em muitas palavras (as duas vêm do latim e são vizinhas), mas tem gramática e ortografia próprias.',
      '«Obrigado» é «mercés», não «gràcies».',
      'É ensinado nas escolas da Vall d\'Aran ao lado do catalão e do castelhano.',
    ],
    examples: [['Mercés plan!', 'Muito obrigado! (aranês, não catalão)']],
  },
];
