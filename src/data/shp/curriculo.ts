import type { UnitSeed } from '../types';

/**
 * Trilha do shipibo-konibo (shp) — por enquanto só as duas unidades do nível A1 (pacote incompleto).
 * Ver vocabulario.ts para a lista completa de fontes. Todas as frases destas lições são citações diretas
 * das fontes (1) e (6) listadas no cabeçalho de vocabulario.ts, OU recombinações de palavras e sufixos já
 * atestados sob um padrão de frase também atestado (pronome + "-a"/"-n" + "-ra" + verbo + "-ai"/"-ke", ou
 * pronome/substantivo + "-n" + substantivo) — nunca uma palavra, sufixo ou padrão novo inventado. Como
 * nenhuma fonte consultada mostra como se forma uma pergunta em shipibo-konibo, nenhuma frase abaixo é
 * uma interrogativa: os desafios de voz alternam entre afirmações.
 */
export const UNITS_SHP: UnitSeed[] = [
  {
    id: 'shp-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jakon! Ɨ-a, mi-a',
    emoji: '🙋',
    card: {
      id: 'shp-c1',
      title: 'Shipibo-konibo, o povo do rio Ucayali',
      emoji: '🏞️',
      history:
        'O shipibo-konibo é uma língua indígena viva da família pano-tacana (ramo pano, grupo nawa), falada por cerca de 34.152 pessoas (censo de 2017) nas regiões de Ucayali e Loreto, no leste do Peru, às margens do rio Ucayali. O nome do povo e da língua vem da junção de “shipi-” (que designa o macaco pichico) com “koni-” (que designa a enguia ou o muçum) e o morfema de plural “-bo” — “shipibo” e “konibo” eram, originalmente, dois grupos que se uniram ao longo da história.',
      culture_tip:
        'O povo shipibo-konibo é mundialmente conhecido pelo “kené”, o desenho geométrico tradicional que decora cerâmicas, tecidos e a pintura corporal. Na cosmologia shipibo-konibo, a sucuri “rono”/“ronin” é considerada a “mãe dos desenhos” — a origem mítica dos padrões kené.',
      grammar_why:
        'O shipibo-konibo tem ordem SOV (sujeito-objeto-verbo) com alinhamento ergativo CONSISTENTE — diferente de outras línguas pano, que misturam ergatividade com outros padrões. Nas frases afirmativas simples desta unidade, o pronome (já na sua forma “absolutiva”, como “ɨ-a”, “mi-a”) recebe a partícula “-ra” e o verbo termina em “-ai” no presente: “Ɨ-a-ra isin-ai” (eu estou doente). Repare que “ha” (ele/ela), “noa” (nós), “mato” (vocês) e “hato” (eles/elas) não levam o “-a” extra — só “ɨ” e “mi” (eu, tu/você) aparecem com essa marca nas frases citadas.',
      grammar_examples: [
        ['Ɨ-a-ra isin-ai.', 'Eu estou doente.'],
        ['Ha-ra isin-ai.', 'Ele, ela está doente.'],
        ['Noa-ra ka-ai.', 'Nós vamos, estamos indo.'],
        ['Jakon!', 'Bom!, tudo bem! (cumprimento)'],
      ],
      character_guide: [
        ['ɨ', 'vogal central alta, como um “i” pronunciado com a língua mais recuada', 'ɨ-a (eu), βakɨ (filho, filha)'],
        ['ɨ̃, ã, ĩ, ũ (til)', 'vogais nasais — a língua distingue vogais orais e nasais', 'ɨ̃hɨ̃ (sim), βɨ̃βo (homem), awĩ (esposa)'],
        ['š', 'como o “x” de “xícara”', 'šobo (casa, maloca)'],
        ['β', 'fricativa bilabial, entre o “b” e o “v” do português', 'βari (sol), aĩβo (mulher)'],
      ],
    },
    lessons: [
      {
        id: 'shp-u1-l1',
        title: 'Jakon, hɨɨ, ɨ̃hɨ̃, yama',
        kind: 'licao',
        words: ['jakon', 'hɨɨ', 'ɨ̃hɨ̃', 'yama', 'ɨ-a', 'mi-a'],
        cloze: [
          { sentence: '___!', answer: 'Jakon', options: ['Jakon', 'Hɨɨ', 'Yama'], translation: 'Bom!, tudo bem! (cumprimento)' },
          { sentence: '___.', answer: 'Ɨ̃hɨ̃', options: ['Ɨ̃hɨ̃', 'Yama', 'Hɨɨ'], translation: 'Sim.' },
          { sentence: '___-ra isin-ai.', answer: 'Mi-a', options: ['Mi-a', 'Ɨ-a', 'Ha'], translation: 'Você está doente.' },
        ],
        voice: {
          bot: 'Jakon!',
          botTranslation: 'Bom!, tudo bem! (cumprimento)',
          expected: ['Hɨɨ!', 'hɨɨ'],
          hint: 'Devolva o cumprimento com “Hɨɨ!”, a outra palavra para “bom” usada aqui como agradecimento.',
        },
        communityPrompt: 'Cumprimente alguém com “Jakon!” e responda “Hɨɨ!”; depois diga “Ɨ̃hɨ̃.” (sim) ou, se for o caso, “Ɨ-a-ra isin-ai.” (eu estou doente).',
      },
      {
        id: 'shp-u1-l2',
        title: 'Ha, noa, mato, hato, honi, nawa',
        kind: 'licao',
        words: ['ha', 'noa', 'mato', 'hato', 'honi', 'nawa'],
        cloze: [
          { sentence: '___-ra ka-ai.', answer: 'Noa-ra', options: ['Noa-ra', 'Mato-ra', 'Hato-ra'], translation: 'Nós vamos, estamos indo.' },
          { sentence: '___-ra ka-ai.', answer: 'Hato-ra', options: ['Hato-ra', 'Noa-ra', 'Mato-ra'], translation: 'Eles, elas vão, estão indo.' },
          { sentence: '___.', answer: 'Honi', options: ['Honi', 'Nawa', 'Ha'], translation: 'Pessoa, gente, ser humano.' },
        ],
        voice: {
          bot: 'Mato-ra ka-ai.',
          botTranslation: 'Vocês vão, estão indo.',
          expected: ['Noa-ra ka-ai.', 'ka-ai'],
          hint: 'Diga que vocês vão junto: “Noa-ra ka-ai.” (nós vamos).',
        },
        communityPrompt: 'Pratique os pronomes dizendo quem vai: “Noa-ra ka-ai.” (nós vamos), “Mato-ra ka-ai.” (vocês vão) e “Hato-ra ka-ai.” (eles vão).',
      },
      {
        id: 'shp-u1-l3',
        title: 'Ɨ-n papa, ɨ-n tita',
        kind: 'licao',
        words: ['papa', 'tita', 'aĩβo', 'βɨ̃βo', 'βakɨ', 'awĩ'],
        cloze: [
          { sentence: 'Ɨ-n ___.', answer: 'papa', options: ['papa', 'tita', 'βakɨ'], translation: 'Meu pai.' },
          { sentence: 'Ɨ-n ___.', answer: 'tita', options: ['tita', 'papa', 'awĩ'], translation: 'Minha mãe.' },
          { sentence: 'Ɨ-n ___.', answer: 'βakɨ', options: ['βakɨ', 'awĩ', 'tita'], translation: 'Meu filho, minha filha.' },
        ],
        voice: {
          bot: 'Ɨ-n papa.',
          botTranslation: 'Meu pai.',
          expected: ['Ɨ-n tita.', 'tita'],
          hint: 'Agora fale da sua mãe: “Ɨ-n tita.”.',
        },
        communityPrompt: 'Apresente sua família usando “Ɨ-n” antes da palavra: “Ɨ-n papa” (meu pai), “Ɨ-n tita” (minha mãe), “Ɨ-n βakɨ” (meu filho, minha filha).',
      },
      {
        id: 'shp-u1-l4',
        title: 'Test: Jakon, ɨ-n papa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jakon! Ɨ-a-ra isin-ai. Ɨ-n papa, ɨ-n tita.',
          botTranslation: 'Bom! Eu estou doente. Meu pai, minha mãe.',
          expected: ['Hɨɨ! Noa-ra ka-ai.', 'hɨɨ'],
          hint: 'Responda ao cumprimento com “Hɨɨ!” e diga que vocês vão: “Noa-ra ka-ai.”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: cumprimento (“Jakon!”), como você está (“Ɨ-a-ra isin-ai.” ou “Ɨ̃hɨ̃.”) e sua família (“Ɨ-n papa”, “Ɨ-n tita”).',
      },
    ],
  },
  {
    id: 'shp-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ɨ-n maṣ̌po, wɨstiora, rabɨ',
    emoji: '✋',
    card: {
      id: 'shp-c2',
      title: 'O corpo, os números e o cachorro do mestiço',
      emoji: '🔢',
      history:
        'A maior parte do vocabulário de corpo e números deste curso vem do dicionário shipibo-conibo publicado na Intercontinental Dictionary Series (Key, Mary Ritchie, 2023), do Max Planck Institute for Evolutionary Anthropology, numa transcrição fonética padronizada para as línguas pano preparada por Miller e List (2024) a partir desse mesmo acervo.',
      culture_tip:
        'O desenho geométrico “kené” não é só decoração: segundo Favarón e Bensho (2022), ele está ligado ao “kano”, o vínculo da pessoa com o “jakon nete” — o “mundo bom”, uma terra sem maldade — e a cantos sagrados chamados “besho”.',
      grammar_why:
        'O mesmo sufixo “-n” marca DUAS coisas em shipibo-konibo: a posse (“ɨ-n papa”, meu pai; “ɨ-n maṣ̌po”, minha cabeça) e também o sujeito de um verbo transitivo, no caso ergativo (“E-n-ra”, eu, em “eu chutei o cachorro”). Compare com a unidade anterior: lá, “ɨ-a” (eu) aparecia sem “-n” porque era sujeito de um verbo intransitivo (“estar doente”) ou ia embora sozinho; aqui, quando “eu” pratica uma ação sobre outra coisa, o pronome muda de forma. A língua também usa posposições (não preposições): em “E-a-ra Kako-nko ka-iba-ke” (fui ao Caco ontem), “-nko” (“para”, “até”) vem DEPOIS do nome do lugar, não antes.',
      grammar_examples: [
        ['Ɨ-n maṣ̌po.', 'Minha cabeça.'],
        ['E-a-ra Kako-nko ka-iba-ke.', 'Fui ao Caco ontem. (posposição “-nko”, “para”, depois do nome do lugar)'],
        ['Nawa-n ochíti-nin natex-ke.', 'O cachorro do mestiço me mordeu.'],
        ['E-n-ra nawa-n ochíti jamá-ke.', 'Eu chutei o cachorro do mestiço.'],
      ],
      character_guide: [
        ['ṣ̌', 'consoante retroflexa, sem equivalente no português', 'maṣ̌po (cabeça), ṣ̌ɨki (milho)'],
        ['č', 'como o “tch” de “tchau”', 'kãčis (sete), čii (fogo)'],
        ['-n', 'sufixo preso ao pronome ou substantivo: marca posse (“ɨ-n papa”, meu pai) e também o sujeito de um verbo transitivo (“E-n-ra”, eu, em “eu chutei…”)', 'ɨ-n, nawa-n, E-n'],
        ['-ra', 'partícula presa logo após o sujeito, presente em todas as frases citadas', 'ɨ-a-ra, mi-a-ra, E-n-ra'],
      ],
    },
    lessons: [
      {
        id: 'shp-u2-l1',
        title: 'Ɨ-n maṣ̌po, βɨro, kɨṣ̌a',
        kind: 'licao',
        words: ['maṣ̌po', 'βɨro', 'kɨṣ̌a', 'mɨkɨ̃', 'taɨ', 'šobo'],
        cloze: [
          { sentence: 'Ɨ-n ___.', answer: 'maṣ̌po', options: ['maṣ̌po', 'βɨro', 'taɨ'], translation: 'Minha cabeça.' },
          { sentence: 'Ɨ-n ___.', answer: 'mɨkɨ̃', options: ['mɨkɨ̃', 'kɨṣ̌a', 'βɨro'], translation: 'Minha mão.' },
          { sentence: 'Ɨ-n ___.', answer: 'šobo', options: ['šobo', 'taɨ', 'maṣ̌po'], translation: 'Minha casa, minha maloca.' },
        ],
        voice: {
          bot: 'Ɨ-n βɨro.',
          botTranslation: 'Meu olho.',
          expected: ['Ɨ-n taɨ.', 'taɨ'],
          hint: 'Agora fale do seu pé: “Ɨ-n taɨ.”.',
        },
        communityPrompt: 'Aponte para partes do corpo usando “Ɨ-n” antes da palavra: “Ɨ-n maṣ̌po” (cabeça), “Ɨ-n βɨro” (olho), “Ɨ-n kɨṣ̌a” (boca).',
      },
      {
        id: 'shp-u2-l2',
        title: 'Wɨstiora, rabɨ, kimiša, pičika, sokota, kãčis',
        kind: 'licao',
        words: ['wɨstiora', 'rabɨ', 'kimiša', 'pičika', 'sokota', 'kãčis'],
        cloze: [
          { sentence: '___, rabɨ, kimiša…', answer: 'Wɨstiora', options: ['Wɨstiora', 'Rabɨ', 'Kimiša'], translation: 'Um, dois, três…' },
          { sentence: 'Rabɨ, kimiša, ___…', answer: 'pičika', options: ['pičika', 'sokota', 'kãčis'], translation: 'Dois, três, cinco… (nenhuma fonte consultada registra uma forma simples para “quatro”)' },
          { sentence: 'Pičika, sokota, ___…', answer: 'kãčis', options: ['kãčis', 'rabɨ', 'wɨstiora'], translation: 'Cinco, seis, sete…' },
        ],
        voice: {
          bot: 'Wɨstiora, rabɨ, kimiša…',
          botTranslation: 'Um, dois, três…',
          expected: ['Pičika, sokota, kãčis.', 'pičika'],
          hint: 'Continue a contagem com “Pičika, sokota, kãčis.” (cinco, seis, sete — não há forma simples atestada para “quatro”).',
        },
        communityPrompt: 'Conte em shipibo-konibo o quanto conseguir: “Wɨstiora, rabɨ, kimiša, pičika, sokota, kãčis…”.',
      },
      {
        id: 'shp-u2-l3',
        title: 'Nawa-n ochíti-nin natex-ke',
        kind: 'licao',
        words: ['ka', 'pi', 'ṣ̌ɨati', 'isin', 'natex', 'jama'],
        cloze: [
          { sentence: 'Ɨ-a-ra yapa ___.', answer: 'pi-ai', options: ['pi-ai', 'ka-ai', 'isin-ai'], translation: 'Eu como peixe.' },
          { sentence: 'Ɨ-a-ra hɨnɨ ___.', answer: 'ṣ̌ɨa-ai', options: ['ṣ̌ɨa-ai', 'pi-ai', 'ka-ai'], translation: 'Eu bebo água.' },
          { sentence: 'Nawa-n ochíti-nin ___.', answer: 'natex-ke', options: ['natex-ke', 'jamá-ke', 'isin-ai'], translation: 'O cachorro do mestiço mordeu. (frase citada, sobre morder a quem fala)' },
        ],
        voice: {
          bot: 'Nawa-n ochíti-nin natex-ke.',
          botTranslation: 'O cachorro do mestiço me mordeu.',
          expected: ['E-n-ra nawa-n ochíti jamá-ke.', 'jamá-ke'],
          hint: 'Revide contando o que você fez: “E-n-ra nawa-n ochíti jamá-ke.” (eu chutei o cachorro do mestiço) — repare que “eu” agora leva “-n”, não “-a”, porque é quem pratica a ação.',
        },
        communityPrompt: 'Compare as duas frases citadas: “Nawa-n ochíti-nin natex-ke.” (o cachorro do mestiço me mordeu) e “E-n-ra nawa-n ochíti jamá-ke.” (eu chutei o cachorro do mestiço) — repare que o “eu” muda de forma conforme sofre ou pratica a ação.',
      },
      {
        id: 'shp-u2-l4',
        title: 'Test: ɨ-n maṣ̌po, wɨstiora, rabɨ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ɨ-n maṣ̌po. Wɨstiora, rabɨ, kimiša. Nawa-n ochíti-nin natex-ke.',
          botTranslation: 'Minha cabeça. Um, dois, três. O cachorro do mestiço me mordeu.',
          expected: ['E-n-ra nawa-n ochíti jamá-ke.', 'jamá-ke'],
          hint: 'Conte o que você fez de volta: “E-n-ra nawa-n ochíti jamá-ke.” (eu chutei o cachorro do mestiço).',
        },
        communityPrompt: 'Escreva uma cena curta: uma parte do corpo (“Ɨ-n maṣ̌po”), uma contagem (“Wɨstiora, rabɨ, kimiša”) e as duas frases do cachorro (“Nawa-n ochíti-nin natex-ke.” e “E-n-ra nawa-n ochíti jamá-ke.”).',
      },
    ],
  },
];
