import type { UnitSeed } from '../types';

/**
 * Trilha do marúbo: UMA única unidade (bem menor que o modelo padrão deste app — 2 unidades de 2 lições
 * + prova cada). Com só 11 palavras conferidas (ver vocabulario.ts) não dá para montar duas lições de 6
 * palavras DIFERENTES cada, e muito menos duas unidades — por isso esta unidade tem uma lição (6
 * palavras) e uma prova (revisão, sem palavras novas), e cinco das onze palavras do vocabulário (take,
 * kenchintxô, shokó, tanaméa, Roka) ficam de fora da lição, mas continuam na aba de vocabulário. Ver
 * `incomplete` em index.ts para a explicação completa da escassez de fontes.
 *
 * As frases dos exercícios de voz e os itens de preenchimento usam só palavras isoladas ou os dois
 * compostos realmente citados pelo Instituto Socioambiental (ISA) — “Yové Vai” (caminho dos espíritos) e
 * “Vei Vai” (caminho da névoa) — nunca uma combinação de palavras inventada por este curso.
 */
export const UNITS_MZR: UnitSeed[] = [
  {
    id: 'mzr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Koka, kakáya, romeyá',
    emoji: '🏞️',
    card: {
      id: 'mzr-c1',
      title: 'Marúbo: o povo do Vale do Javari',
      emoji: '🏞️',
      history:
        'O marúbo é uma língua pano falada por cerca de 1.250 pessoas (dado de 2006, segundo a Wikipédia em inglês), no alto curso dos rios Curuçá e Ituí/Ipixuna, na bacia do Javari, e também junto aos rios Javari e Curuçá e às cidades de Atalaia do Norte e Cruzeiro do Sul (Amazonas/Acre). O povo marúbo somava cerca de 1.043 pessoas em 2008, segundo o Instituto Socioambiental (ISA) — um crescimento frente às 918 registradas em 1998. Segundo o etnólogo Júlio César Melatti, citado pelo ISA, “o povo marúbo parece resultar da reorganização de sociedades indígenas dizimadas e fragmentadas por caucheiros e seringueiros”, no período da borracha. “Marúbo” não é uma autodenominação: é um nome atribuído por povos não indígenas, segundo o próprio ISA — e “dizem os Marúbo que sua língua é a dos Chaináwavo”, uma de suas dezoito seções familiares, hoje extinta.',
      culture_tip:
        'Os Marúbo vivem na Terra Indígena Vale do Javari, no oeste do Amazonas — uma área maior que a Áustria. Segundo Fabricio Amorim, da Funai, citado pela Wikipédia em inglês, a região reúne “a maior concentração de grupos isolados da Amazônia e do mundo”: mais de 2.000 pessoas sem contato, de pelo menos 14 povos diferentes, distribuídas por cerca de 19 aldeias identificadas por sobrevoo. Além dos Marúbo, vivem ali povos como os Matsés, os Matis, os Kanamari e os Korubo.',
      grammar_why:
        'O marúbo é uma língua aglutinante de ordem Sujeito-Objeto-Verbo (SOV), com um sistema de tempo verbal que muda conforme a distância entre o momento da fala e o momento do acontecimento — e, diferente da maioria das línguas pano, não tem prefixos de partes do corpo (veja a aba Gramática). As fontes consultadas não registram uma frase marúbo completa com essa gramática; o que existe são os títulos sociais e termos cosmológicos vistos nesta unidade, e dois compostos — “Yové Vai” e “Vei Vai” — que mostram uma palavra, “vai” (caminho), se repetindo e formando palavras novas.',
      grammar_examples: [
        ['Yové Vai.', 'Caminho dos espíritos.'],
        ['Vei Vai.', 'Caminho da névoa.'],
        ['Kakáya.', 'Dono de maloca respeitado, procurado como conselheiro.'],
        ['Romeyá.', 'Pajé, xamã.'],
      ],
      character_guide: [
        ['á, é, í, ó', 'acento agudo — nas palavras marúbo encontradas, marca a sílaba tônica', 'kakáya, romeyá, yové, shokó'],
        ['ô', 'acento circunflexo', 'kenchintxô'],
        ['tx', 'dígrafo para uma africada parecida com o “tch” de “tchau”, igual ao “tx” de outras línguas pano já neste app (como o huni kuĩ)', 'kenchintxô'],
        [
          'ã, ĩ, ũ, ɨ (não atestadas nas palavras aqui)',
          'a fonologia abstrata do marúbo (sem exemplo de palavra escrita) descrita pela Wikipédia em inglês lista vogais nasais e uma vogal central — mas nenhuma das onze palavras conferidas nesta fonte usa essa grafia, por isso elas não entram no teclado adaptado deste curso',
          '(fonologia, não vocabulário atestado)',
        ],
      ],
    },
    lessons: [
      {
        id: 'mzr-u1-l1',
        title: 'Koka, kakáya, romeyá, yové, vai, vei',
        kind: 'licao',
        words: ['koka', 'kakáya', 'romeyá', 'yové', 'vai', 'vei'],
        cloze: [
          {
            sentence: '___.',
            answer: 'koka',
            options: ['koka', 'kakáya', 'romeyá'],
            translation: 'Tio materno (categoria de parentesco; a filha do koka era o casamento preferencial entre os Marúbo, segundo o ISA).',
          },
          {
            sentence: 'Yové ___.',
            answer: 'vai',
            options: ['vai', 'vei', 'koka'],
            translation: 'Caminho dos espíritos (composto citado pelo ISA: “um caminho chamado Yové Vai”).',
          },
          {
            sentence: '___ Vai.',
            answer: 'Vei',
            options: ['Vei', 'Yové', 'kakáya'],
            translation: 'Caminho da névoa (composto citado pelo ISA: “encaminhada para o Caminho da Névoa (Vei Vai)”).',
          },
        ],
        voice: {
          bot: 'Yové Vai.',
          botTranslation: 'Caminho dos espíritos.',
          expected: ['Vei Vai.', 'vei vai'],
          hint: 'Diga o outro caminho citado pelo ISA, trocando só a primeira palavra: “Vei Vai.” (caminho da névoa).',
        },
        communityPrompt:
          'Explique em português quem é o “kakáya” (dono de maloca respeitado) e o “romeyá” (pajé) na organização social marúbo, e qual a diferença entre os dois caminhos “Yové Vai” e “Vei Vai”.',
      },
      {
        id: 'mzr-u1-l2',
        title: 'Revisão: os dois caminhos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vei Vai.',
          botTranslation: 'Caminho da névoa.',
          expected: ['Yové Vai.', 'yové vai'],
          hint: 'Diga o outro caminho citado pelo ISA, trocando só a primeira palavra: “Yové Vai.” (caminho dos espíritos).',
        },
        communityPrompt:
          'Escreva, em português, o que você aprendeu sobre o “koka” (tio materno), o “kakáya” (dono de maloca respeitado) e o “romeyá” (pajé) na organização social marúbo, segundo o Instituto Socioambiental.',
      },
    ],
  },
];
