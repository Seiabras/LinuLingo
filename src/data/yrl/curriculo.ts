import type { UnitSeed } from '../types';

/**
 * Trilha do nheengatu: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois. Ver vocabulario.ts para
 * as fontes de cada palavra.
 */
export const UNITS_YRL: UnitSeed[] = [
  {
    id: 'yrl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Puranga ara!',
    emoji: '👋',
    card: {
      id: 'yrl-c1',
      title: 'A língua boa do rio Negro',
      emoji: '🇧🇷',
      history:
        'O nheengatu (“nheẽ-katú”, lit. “fala boa”, de “nheenga”, língua/palavra, + “katú”, bom) é uma língua indígena viva, descendente do tupinambá (o tupi antigo, extinto, código tpw aqui no app) — não é a mesma língua, é a sua herdeira moderna. Formou-se entre os séculos XVII e XVIII como língua de contato entre colonizadores, missionários jesuítas e povos indígenas na Amazônia, e por isso é chamada também de “língua geral amazônica”. Depois de perseguida pela política linguística do Marquês de Pombal no século XVIII, ressurgiu no século XIX no alto rio Negro, onde até hoje é falada por milhares de pessoas — a maioria dos povos Baré, Warekena e Baniwa da região já fala nheengatu como primeira língua, mais do que as próprias línguas de suas famílias originais. Desde 2002 é língua cooficial de São Gabriel da Cachoeira (AM), e desde 2023 é uma das línguas indígenas cooficiais reconhecidas pelo estado do Amazonas. Também é falada em comunidades da Colômbia e da Venezuela, na fronteira com o Brasil.',
      culture_tip:
        'Diferente do tupi antigo colonial, o nheengatu é uma língua viva: tem rádio, música e até aplicativos de celular na língua, além de ser ensinada nas escolas de São Gabriel da Cachoeira. Boa parte do vocabulário do dia a dia veio direto do português (“manha”, mãe; “paya”, pai; “mamãu”, mamão), ao lado de palavras herdeiras do tupi antigo mais antigo (“pirá”, peixe; “paraná”, rio; “yakaré”, jacaré) — um sinal de como as duas línguas convivem há séculos na região.',
      grammar_why:
        'O nheengatu não tem um verbo “ser”: para dizer quem alguém é, basta pôr as palavras lado a lado, como em “Ixé mira” (lit. “eu gente”, eu sou gente/uma pessoa). Os pronomes “ixé”, “indé”, “aé”, “yandé”, “penhẽ” e “aintá” servem tanto de sujeito quanto de objeto da frase.',
      grammar_examples: [
        ['Puranga ara, se mimbira!', 'Bom dia, meu filho!'],
        ['Ixé mira. Ixé asasá puranga.', 'Eu sou gente. Eu vou bem.'],
        ['Indé puranga retana!', 'Você é muito bonito(a)!'],
        ['Kwekatú reté!', 'Muito obrigado(a)!'],
      ],
      character_guide: [
        ['ã, ẽ, ĩ, ũ', 'vogal nasal: sai pelo nariz', 'kunhã (mulher), penhẽ (vocês), tĩ (nariz), yenũ (deitar-se)'],
        ['á, é, í, ó, ú', 'acento agudo: marca a sílaba tônica, como no português', 'puká (rir), esá (olho), yasí (lua), paraná (rio), igara (canoa)'],
        ['nh', 'som de “nh” do português, como em “ninho”', 'nheengatú (a língua), nheenga (palavra)'],
        ['y', 'som entre o “u” e o “i”, herdado do tupi antigo', 'presente em compostos como pirayawara'],
      ],
    },
    lessons: [
      {
        id: 'yrl-u1-l1',
        title: 'Puranga ara, puranga pituna',
        kind: 'licao',
        words: ['Puranga ara', 'Puranga pituna', 'Mayé taá indé resasá?', 'Asasá puranga', 'Kwekatú reté!', 'katú'],
        cloze: [
          { sentence: '___, se mimbira!', answer: 'Puranga ara', options: ['Puranga ara', 'Puranga pituna', 'Kwekatú reté!'], translation: 'Bom dia, meu filho!' },
          { sentence: 'Mayé taá indé resasá? — ___.', answer: 'Asasá puranga', options: ['Asasá puranga', 'Puranga pituna', 'Kwekatú reté!'], translation: 'Como você está? — Eu estou bem.' },
          { sentence: '___, Pedro!', answer: 'Puranga pituna', options: ['Puranga pituna', 'Puranga ara', 'Asasá puranga'], translation: 'Boa noite, Pedro!' },
        ],
        voice: {
          bot: 'Mayé taá indé resasá?',
          botTranslation: 'Como você está?',
          expected: ['Asasá puranga, kwekatú reté!', 'asasá puranga', 'kwekatú'],
          hint: 'Responda que você está bem com “Asasá puranga” e agradeça com “Kwekatú reté!”.',
        },
        communityPrompt: 'Escreva um cumprimento em nheengatu: “Puranga ara” ou “Puranga pituna”, a pergunta “Mayé taá indé resasá?” e a resposta “Asasá puranga”.',
      },
      {
        id: 'yrl-u1-l2',
        title: 'Ixé, indé, aé, yandé',
        kind: 'licao',
        words: ['ixé', 'indé', 'aé', 'yandé', 'penhẽ', 'aintá'],
        cloze: [
          { sentence: '___ se katú!', answer: 'Ixé', options: ['Ixé', 'Indé', 'Aé'], translation: 'Eu estou bem!' },
          { sentence: '___ puranga retana!', answer: 'Indé', options: ['Indé', 'Ixé', 'Aé'], translation: 'Você é muito bonito(a)!' },
          { sentence: '___ upuká yané resé.', answer: 'Aintá', options: ['Aintá', 'Yandé', 'Penhẽ'], translation: 'Eles riem de nós.' },
        ],
        voice: {
          bot: 'Indé puranga retana! Mayé taá era?',
          botTranslation: 'Você é muito bonito(a)! Qual é o seu nome?',
          expected: ['Se era Linu. Kwekatú!', 'se era', 'kwekatú'],
          hint: 'Diga o seu nome com “Se era…” (lit. “meu nome…”) e agradeça com “Kwekatú”.',
        },
        communityPrompt: 'Apresente-se em nheengatu: “Ixé…”, diga seu nome com “Se era…” e use “Indé” para perguntar o nome de alguém.',
      },
      {
        id: 'yrl-u1-l3',
        title: 'Test: puranga ara',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Puranga ara! Se era Rosa. Mayé taá indé resasá?',
          botTranslation: 'Bom dia! Meu nome é Rosa. Como você está?',
          expected: ['Puranga ara, Rosa! Se era Ana. Asasá puranga, kwekatú.', 'se era', 'asasá puranga'],
          hint: 'Devolva a saudação (“Puranga ara!”), diga seu nome com “Se era…” e responda como está com “Asasá puranga”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação, nome com “Se era…”, e um “Kwekatú reté!” de despedida.',
      },
    ],
  },
  {
    id: 'yrl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Se manha, se paya',
    emoji: '🛶',
    card: {
      id: 'yrl-c2',
      title: 'A família, o rio e a mata',
      emoji: '🌊',
      history:
        'No alto rio Negro, a vida de quem fala nheengatu está ligada ao rio: as comunidades se organizam às margens do Negro e de seus afluentes (o Uaupés, o Içana), e a canoa (“igara”) é o meio de transporte mais comum entre as aldeias e São Gabriel da Cachoeira, a “capital” regional da língua. Muitas palavras de parentesco do nheengatu vieram direto do português colonial, adaptadas à fonética da língua: “manha” (mãe) e “paya” (pai) vêm de “mãe” e “pai”, mostrando como o nheengatu se formou bem depois do contato — diferente do tupi antigo, cujas palavras de família (“sy”, “tuba”) são nativas, sem influência portuguesa.',
      culture_tip:
        'A fauna do rio Negro aparece bastante no vocabulário do dia a dia: “pirá” (peixe), “yakaré” (jacaré) e “yawara” — que hoje quer dizer “cachorro”, embora a mesma raiz, no tupi antigo, significasse “onça” (veja a etimologia de “yawara” na aba de vocabulário).',
      grammar_why:
        'Os verbos de ação do nheengatu ganham um pedacinho (prefixo) no começo para marcar quem faz a ação: a- (eu), re- (tu/você), u- (ele/ela), ya- (nós) e pe- (vocês) — o mesmo prefixo para qualquer verbo, como “ikú” (estar) e “semu” (sair): aikú/reikú/uikú/yaikú/peikú.',
      grammar_examples: [
        ['Se manha uikú uka upé.', 'Minha mãe está em casa.'],
        ['Yasemu igara upé.', 'Vamos (saindo) de canoa.'],
        ['Esá! Yakaré paraná upé!', 'Olha! Um jacaré no rio!'],
        ['Aputari mukũi pirá.', 'Eu quero dois peixes.'],
      ],
      character_guide: [
        ['a-, re-, u-, ya-, pe-', 'prefixos de pessoa nos verbos de ação: eu, tu, ele/ela, nós, vocês', 'aikú (eu estou), reikú (tu estás), uikú (ele está)'],
        ['se-', 'prefixo de 1ª pessoa usado com alguns adjetivos e substantivos possuídos, como “meu”', 'se manha (minha mãe), se katú (eu estou bem)'],
        ['-itá', 'sufixo de plural, grudado no final da palavra', 'pirá-itá (peixes), kariwa-itá (não indígenas)'],
      ],
    },
    lessons: [
      {
        id: 'yrl-u2-l1',
        title: 'Manha, paya, mena, membira',
        kind: 'licao',
        words: ['manha', 'paya', 'mena', 'imirikú', 'membira', 'era'],
        cloze: [
          { sentence: 'Se ___ uikú uka upé.', answer: 'manha', options: ['manha', 'paya', 'mena'], translation: 'Minha mãe está em casa.' },
          { sentence: 'Se ___ uikú paraná resé.', answer: 'paya', options: ['paya', 'manha', 'membira'], translation: 'Meu pai está perto do rio.' },
          { sentence: 'Se ___ supé.', answer: 'imirikú', options: ['imirikú', 'mena', 'membira'], translation: 'Para a minha esposa.' },
        ],
        voice: {
          bot: 'Mayé taá se era?',
          botTranslation: 'Qual é o meu nome? (brincando: “como é meu nome”)',
          expected: ['Se manha era Rosa. Se paya era Pedro.', 'se manha', 'se paya'],
          hint: 'Fale da sua família usando “se manha” (minha mãe) e “se paya” (meu pai) com um nome depois.',
        },
        communityPrompt: 'Escreva sobre sua família em nheengatu usando “se manha”, “se paya” e “se membira”.',
      },
      {
        id: 'yrl-u2-l2',
        title: 'Pirá, igara, yakaré, paraná',
        kind: 'licao',
        words: ['pirá', 'igara', 'yakaré', 'paraná', 'yawara', 'mukũi'],
        cloze: [
          { sentence: 'Yasemu ___ upé.', answer: 'igara', options: ['igara', 'paraná', 'uka'], translation: 'Vamos de canoa.' },
          { sentence: 'Esá! ___ paraná upé!', answer: 'Yakaré', options: ['Yakaré', 'Pirá', 'Yawara'], translation: 'Olha! Um jacaré no rio!' },
          { sentence: 'Aputari ___ pirá.', answer: 'mukũi', options: ['mukũi', 'musapiri', 'yepé'], translation: 'Eu quero dois peixes.' },
        ],
        voice: {
          bot: 'Yasemu igara upé, paraná resé?',
          botTranslation: 'Vamos de canoa, pelo rio?',
          expected: ['Puranga! Yasemu!', 'yasemu', 'puranga'],
          hint: 'Aceite o convite repetindo “Yasemu!” (vamos!) e dizendo “Puranga” (que bom).',
        },
        communityPrompt: 'Descreva um passeio de canoa (“igara”) pelo rio (“paraná”) e o que você viu: “pirá”, “yakaré” ou “yawara”.',
      },
      {
        id: 'yrl-u2-l3',
        title: 'Test: se manha, se paya, igara',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mayé taá se manha? Mayé taá se paraná?',
          botTranslation: 'Como é a minha mãe? Como é o meu rio? (brincando com as perguntas)',
          expected: ['Se manha uikú uka upé. Yasemu igara upé paraná resé.', 'se manha', 'yasemu igara'],
          hint: 'Fale da mãe com “se manha uikú uka upé” e do passeio de canoa com “yasemu igara upé”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e um passeio pelo rio, usando “se manha”, “se paya”, “igara” e “paraná”.',
      },
    ],
  },
];
