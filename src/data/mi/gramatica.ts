import type { GrammarTopic } from '../types';

/** Tópicos de gramática do maori — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_MI: GrammarTopic[] = [
  {
    id: 'mi-g1',
    level: 'A1.1',
    title: 'Pronúncia: wh, ng e o mácron',
    emoji: '🔤',
    summary: 'O maori se escreve quase como se lê, mas duas combinações de letras e o mácron (traço sobre a vogal) têm regras próprias, diferentes do português.',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['wh', 'na maioria dos dialetos, como o “f” do português', 'whānau [ˈfaːnaʉ] (família)'],
            ['ng', 'som nasal único, como o “ng” de “sing” em inglês, nunca “n” + “g” separados', 'ngahere [ˈŋahere] (floresta)'],
            ['ā, ē, ī, ō, ū', 'vogal longa: o mesmo som da vogal curta, mas sustentado por mais tempo', 'ā em “kōrero” não existe, mas em “kā” (incendiar) o a é longo'],
          ],
        },
        examples: [
          ['Kia ora! Kei te pēhea koe?', 'Oi! Como você está?'],
          ['He whare nui tērā.', 'Aquela é uma casa grande.'],
        ],
      },
      {
        heading: 'O mácron muda o sentido',
        text: 'Vogal longa e vogal curta são sons diferentes em maori, não só uma questão de sotaque: trocar uma pela outra pode trocar a palavra inteira. “Keke” (um empréstimo do inglês “cake”) é bolo; “kēkē”, com o “e” longo, é axila.',
        examples: [['keke', 'bolo'], ['kēkē', 'axila']],
      },
    ],
    pitfalls: [
      'Ler “wh” como o “w” do inglês ou como “u”: na maioria dos dialetos do maori soa “f”.',
      'Ignorar o mácron por parecer só um detalhe de acento: ele pode trocar o sentido da palavra inteira.',
    ],
    quiz: [
      { question: 'Como soa o “wh” em “whānau” (família), na maioria dos dialetos?', options: ['como “f”', 'como “w” do inglês', 'como “u”'], answer: 'como “f”', explanation: 'Na maioria dos dialetos do maori, “wh” soa como o “f” do português.' },
    ],
  },
  {
    id: 'mi-g2',
    level: 'A1.1',
    title: 'Verbo primeiro, e partículas em vez de conjugação',
    emoji: '🧩',
    summary: 'O maori começa a frase pelo verbo (ordem verbo-sujeito-objeto) e marca o tempo com uma partícula antes do verbo — o verbo nunca muda de forma.',
    sections: [
      {
        text: 'Diferente do português, o maori é uma língua VSO: o verbo vem primeiro na frase, depois o sujeito, depois o objeto. E o verbo nunca se conjuga — quem marca o tempo é uma partícula colocada antes dele.',
        table: {
          head: ['Partícula', 'Marca', 'Exemplo', 'Tradução'],
          rows: [
            ['kei te', 'presente (ação acontecendo agora)', 'Kei te kai au.', 'Eu estou comendo.'],
            ['i', 'passado', 'I haere au.', 'Eu fui / eu fui embora.'],
            ['ka', 'futuro (ou a próxima ação de uma sequência)', 'Ka haere rātou.', 'Eles vão (ir).'],
            ['kua', 'ação já concluída', 'Kua kai au.', 'Eu já comi.'],
          ],
        },
        examples: [
          ['Kei te noho au ki Rotorua.', 'Eu estou morando em Rotorua.'],
          ['Kei te pīrangi au ki te kai.', 'Eu quero comida.'],
        ],
      },
      {
        heading: 'Negar a frase: kāore',
        text: 'Para negar, “kāore” vai no início da frase, e a partícula de tempo muda: depois de “kāore”, o presente “kei te” vira “i te”, e o futuro “ka” vira “e”.',
        examples: [
          ['Kāore au i te mōhio.', 'Eu não sei. (kei te → i te depois de kāore)'],
          ['Kāore rātou e haere.', 'Eles não vão (ir). (ka → e depois de kāore)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação diferente para cada pessoa, como no português: o verbo maori nunca conjuga, só a partícula na frente muda.',
      'Tentar negar só colocando “kāore” sem trocar a partícula de tempo: depois de “kāore”, “kei te” vira “i te” e “ka” vira “e”.',
    ],
    quiz: [
      { question: 'Qual partícula marca uma ação acontecendo agora, como “kei te kai au” (eu estou comendo)?', options: ['kei te', 'i', 'ka'], answer: 'kei te', explanation: '“Kei te” marca o presente contínuo; “i” marca o passado e “ka” o futuro.' },
    ],
  },
  {
    id: 'mi-g3',
    level: 'A1.2',
    title: 'Eu, nós dois, nós todos: os três números do pronome',
    emoji: '🙌',
    summary: 'Além de singular e plural, o maori tem um número dual (para exatamente duas pessoas) — e distingue um “nós” que inclui quem ouve de um “nós” que exclui.',
    sections: [
      {
        text: 'O pronome maori marca três números: singular (uma pessoa), dual (exatamente duas) e plural (três ou mais). E no dual e no plural da primeira pessoa, existe uma forma que INCLUI a pessoa com quem você fala e outra que a EXCLUI — uma distinção que o português não faz.',
        table: {
          head: ['Número', 'Inclusivo (com quem ouve)', 'Exclusivo (sem quem ouve)', 'Você (2ª)', 'Eles (3ª)'],
          rows: [
            ['Singular', '—', 'au / ahau (eu)', 'koe', 'ia'],
            ['Dual (2 pessoas)', 'tāua', 'māua', 'kōrua', 'rāua'],
            ['Plural (3+)', 'tātou', 'mātou', 'koutou', 'rātou'],
          ],
        },
        examples: [
          ['Haere tātou!', 'Vamos (nós, incluindo você)!'],
          ['Kei te kōrero mātou.', 'Nós (eu e mais gente, sem você) estamos conversando.'],
          ['Kia ora koutou!', 'Oi, pessoal (três ou mais)!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir qualquer “nós” por “tātou”: se a pessoa com quem você fala está de fora do grupo, o certo é “mātou” (ou “māua”, para duas pessoas).',
      'Esquecer o dual: para falar de exatamente duas pessoas (“nós dois”, “vocês dois”, “eles dois”), o maori tem uma forma própria (tāua/māua, kōrua, rāua), diferente do plural.',
    ],
    quiz: [
      { question: 'Qual “nós” inclui a pessoa com quem você está falando?', options: ['tātou', 'mātou', 'rātou'], answer: 'tātou', explanation: '“Tātou” inclui quem ouve; “mātou” o exclui. O mesmo vale no dual: “tāua” inclui, “māua” exclui.' },
    ],
  },
  {
    id: 'mi-g4',
    level: 'A1.2',
    title: 'A categoria a/o: dois jeitos de dizer “meu”',
    emoji: '🔗',
    summary: 'O maori escolhe entre duas formas de posse — a categoria “a” e a categoria “o” — conforme você controla ou não aquilo que possui.',
    sections: [
      {
        text: 'Como a maioria das línguas polinésias, o maori tem duas séries de palavras possessivas: a categoria A (tāku, tāu, tāna… “meu”, “teu”, “dele” — relação de controle) e a categoria O (tōku, tōu, tōna… — relação sem controle). A regra prática: é mais fácil decorar a lista curta, a da categoria A, e tudo que não estiver nela vai para a categoria O.',
        table: {
          head: ['Categoria A (controle)', 'Categoria O (sem controle)'],
          rows: [
            ['filhos, afilhados', 'pais, irmãos, parentes em geral'],
            ['cônjuge (esposa/marido)', 'amigos, namorados(as) (sem ser cônjuge)'],
            ['animais de estimação', 'sentimentos, pensamentos, qualidades'],
            ['objetos e ferramentas (menos roupa)', 'transporte (carro, waka, avião)'],
            ['comida e bebida (menos água)', 'casa, abrigo, prédios grandes'],
            ['ações e atividades', 'água de beber, remédio, roupas, partes do corpo'],
          ],
        },
        examples: [
          ['He kurī pai tāku.', 'Tenho um cachorro bom. (kurī: categoria a, animal de estimação)'],
          ['Tōku māmā, tōku whānau.', 'Minha mãe, minha família. (categoria o: parentes)'],
          ['Kei tōku kāinga au.', 'Estou no meu lar. (kāinga: categoria o, abrigo)'],
          ['He wai tōku, he kai tāku.', 'Tenho água (o), tenho comida (a). (água é o; comida é a)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “tāku” para tudo, como se fosse só “meu”: pais, casa e água usam a categoria o (tōku), não a (tāku).',
      'Achar que a categoria é sobre valor ou importância: na verdade é sobre controle — por isso o próprio filho é categoria a (você é responsável por ele) mas os pais são categoria o.',
    ],
    quiz: [
      { question: 'Qual destes é da categoria A (tāku), e não da categoria O (tōku)?', options: ['tāku kurī (meu cachorro)', 'tōku māmā (minha mãe)', 'tōku kāinga (meu lar)'], answer: 'tāku kurī (meu cachorro)', explanation: 'Animais de estimação são categoria a; pais e moradia são categoria o.' },
    ],
  },
];
