import type { UnitSeed } from '../types';

/**
 * Trilha do guarani antigo/colonial: por enquanto só as duas unidades do nível A1 (pacote
 * incompleto — ver `incomplete` em index.ts). As frases descrevem a vida numa redução jesuítica do
 * Paraguai colonial, já que a língua documentada por Montoya não tem mais falantes — é a forma
 * ancestral do guarani paraguaio moderno (`gn`), não a própria língua de hoje.
 */
export const UNITS_OLDP1258: UnitSeed[] = [
  {
    id: 'oldp1258-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ereyupa? As primeiras palavras',
    emoji: '👋',
    card: {
      id: 'oldp1258-c1',
      title: 'A língua das reduções',
      emoji: '⛪',
      history:
        'O guarani antigo (também chamado guarani missioneiro, jesuítico ou “clássico”) é a forma da língua documentada pelos padres da Companhia de Jesus nas reduções do Paraguai colonial, entre os séculos XVI e XVIII. O principal responsável por essa documentação foi o padre Antonio Ruiz de Montoya (1585–1652), autor do “Vocabulario de la lengua guaraní” (1640) e do “Tesoro de la lengua guaraní” (1639) — dois dicionários que registraram milhares de palavras ouvidas diretamente de intérpretes indígenas. O próprio Montoya conta que “guaraní” era o nome que os índios guerreiros do Paraguai davam a si mesmos (de “guariní”, guerra) — o nome não nasceu para batizar a língua, e sim o povo. Com a expulsão dos jesuítas em 1767, essa forma específica da língua, moldada pela catequese e pela vida nas reduções, deixou de existir — mas a língua seguiu viva e se transformou no guarani paraguaio falado hoje.',
      culture_tip:
        'O cumprimento mais documentado por Montoya não é uma palavra solta como “oi”: é a pergunta “Ereyupa?” (algo como “você vem?”), registrada no próprio dicionário sob o verbete “saludar al que viene” (cumprimentar quem chega) — o mesmo tipo de cumprimento por pergunta de chegada que aparece em outras línguas da família tupi-guarani, como o tupi antigo (“Ereîúrype?”).',
      grammar_why:
        'Repare que o dicionário de Montoya registra duas palavras diferentes para “sim”, uma para cada gênero de quem fala: um homem responde “Tã”, uma mulher responde “Heẽ”. É uma fala diferenciada por gênero do locutor — não do ouvinte —, um traço de verdade documentado em 1639, que a gramática desta unidade explica melhor.',
      grammar_examples: [
        ['Ereyupa?', '“Você vem?” — o cumprimento documentado por Montoya para quem chega.'],
        ['Tã, che Abá.', '“Sim, eu [sou] homem.” (resposta de um homem)'],
        ['Heẽ, che Cuña.', '“Sim, eu [sou] mulher.” (resposta de uma mulher)'],
        ['Aany.', '“Não.”'],
      ],
      character_guide: [
        ['c, qu', 'o “c” soa /k/ antes de a/o/u (“catupiri”); o “qu” soa /k/ antes de a (“Quarací”, com um leve /u/ grudado)', 'Catupiri (“ka-tu-pi-RI”, bonito)'],
        ['ç', 'sempre /s/, mesmo antes de a/o/u — onde o “c” sozinho soaria /k/', 'Çoó (“so-Ó”, carne)'],
        ['vogal + vogal (sem acento circunflexo)', 'duas vogais juntas marcam uma pequena parada no ar entre elas, sem precisar de apóstrofo', 'Çoó (“so-Ó”, com uma pausa entre os dois “ó”)'],
        ['ẽ, ã, õ, ũ, ĩ', 'vogal nasalada, como em “mãe”; o próprio scan do dicionário de 1876 perde esse til com frequência', 'Heẽ (“he-Ẽ”, sim, dito por mulher)'],
        ['y', 'o “y” jesuítico cobre o que o guarani de hoje escreve com “j” (jagua, jasy): aqui o cachorro é “Yagua”, não “Jagua”', 'Yagua (“ya-GUA”, cachorro)'],
      ],
    },
    lessons: [
      {
        id: 'oldp1258-u1-l1',
        title: 'Ereyupa? Tã, Heẽ, Aany',
        kind: 'licao',
        words: ['Ereyupa?', 'Tã', 'Heẽ', 'Aany', 'Aguiyevete', 'Mbae'],
        cloze: [
          { sentence: '“___?” “Tã, che Abá.”', answer: 'Ereyupa', options: ['Ereyupa', 'Mbae', 'Aany'], translation: '“Você vem?” “Sim, eu [sou] homem.”' },
          { sentence: 'Tã, che Abá. — ___, che Cuña.', answer: 'Heẽ', options: ['Heẽ', 'Tã', 'Aany'], translation: '“Sim [homem], eu [sou] homem.” “Sim [mulher], eu [sou] mulher.”' },
          { sentence: '___, che Mitã.', answer: 'Aany', options: ['Aany', 'Tã', 'Heẽ'], translation: '“Não, eu [sou] criança.”' },
        ],
        voice: {
          bot: 'Ereyupa?',
          botTranslation: 'Você vem?',
          expected: ['Tã', 'Heẽ', 'tã, che abá', 'heẽ, che cuña'],
          hint: 'Responda com “Tã” (se você for homem) ou “Heẽ” (se for mulher) — as duas formas documentadas de dizer “sim”.',
        },
        communityPrompt: 'Escreva o cumprimento documentado por Montoya e as duas respostas de “sim”: “Ereyupa?”, “Tã” (homem) e “Heẽ” (mulher).',
      },
      {
        id: 'oldp1258-u1-l2',
        title: 'Che, nde, hae: as pessoas',
        kind: 'licao',
        words: ['Che', 'Nde', 'Hae', 'Oré', 'Ñandé', 'Pee'],
        cloze: [
          { sentence: '___ Abá.', answer: 'Che', options: ['Che', 'Nde', 'Hae'], translation: 'Eu [sou] homem.' },
          { sentence: '___ guasu.', answer: 'Hae', options: ['Hae', 'Che', 'Nde'], translation: 'Ele/ela [é] grande.' },
          { sentence: '___ año.', answer: 'Oré', options: ['Oré', 'Ñandé', 'Pee'], translation: 'Nós (sem quem ouve), sozinhos.' },
        ],
        voice: {
          bot: 'Mbae nde Tera?',
          botTranslation: 'O que [é] o seu nome? (lit. “coisa teu nome”)',
          expected: ['Che Tera…', 'che tera'],
          hint: 'Responda com “Che Tera…” (meu nome é…) e diga o seu nome.',
        },
        communityPrompt: 'Apresente-se em guarani antigo: diga “Che Tera…” (meu nome é…) usando o pronome “Che” (eu).',
      },
      {
        id: 'oldp1258-u1-l3',
        title: 'Prova: primeiras palavras',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ereyupa? Mbae nde Tera?',
          botTranslation: 'Você vem? Qual é o seu nome?',
          expected: ['Tã, che Tera…', 'heẽ, che tera', 'che tera'],
          hint: 'Confirme que você veio (“Tã” ou “Heẽ”, conforme seu gênero) e diga o seu nome (“Che Tera…”).',
        },
        communityPrompt: 'Escreva uma pequena apresentação em guarani antigo: cumprimento, confirmação de “sim” e o seu nome.',
      },
    ],
  },
  {
    id: 'oldp1258-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família, a aldeia e a comida',
    emoji: '👪',
    card: {
      id: 'oldp1258-c2',
      title: 'Tuba, membi, taíra: uma família documentada',
      emoji: '🏡',
      history:
        'Boa parte do que sabemos sobre a vida de família guarani no século XVII vem do próprio esforço de Montoya para traduzir o catecismo: tio, sobrinho, genro, cada grau de parentesco precisou de uma entrada no dicionário para que os padres pudessem pregar sobre a família cristã. Um detalhe sobrevive até hoje nos dois verbetes para “filho”: a mesma criança é chamada de um jeito pela mãe (“membi”) e de outro pelo pai (“taíra”) — a palavra muda conforme quem fala, não conforme quem é falado.',
      culture_tip:
        'O dicionário de Montoya nasceu da vida nas reduções: aldeias organizadas pelos jesuítas, onde dezenas de milhares de guarani viviam agrupados ao redor de uma igreja, cultivando milho (“abatí”) e mandioca (“mandiog”) em roças comunitárias. É desse mundo colonial que vem até uma palavra como “Mbuyapé” (pão): o pão de trigo europeu não existia antes do contato, e a língua precisou de uma palavra nova para batizá-lo.',
      grammar_why:
        'O guarani antigo, como as outras línguas da família tupi-guarani, só tinha numerais nativos para contar de um a quatro (“peteĩ”, “mocõî”, “mbohapy”, “yrundy”). O próprio dicionário de Montoya mostra isso na entrada de “cinco”, formada compondo “yrundy” (quatro) com “mais um” — não um numeral novo, e sim uma soma. A gramática desta unidade mostra esse detalhe com mais calma.',
      grammar_examples: [
        ['Che Tuba.', 'Meu pai. (lit. “eu pai”, sem palavra para “ser”)'],
        ['Che Membi.', 'Meu filho/minha filha. (dito pela mãe)'],
        ['Che Taíra.', 'Meu filho. (dito pelo pai)'],
        ['Mitã mirĩ.', 'Uma criança pequena.'],
      ],
      character_guide: [
        ['ñ', 'som de “nh” do português, como em “ninho” — no scan de 1876 às vezes sai como “ä” ou “fí”', 'Ñandé (“nhan-DÉ”, nós, com quem ouve)'],
        ['g', 'som de “g” duro, como em “gato”, nunca como “j”', 'Guasu (“gua-SU”, grande)'],
        ['ĩ, ã, ẽ, õ, ũ', 'vogal nasalada', 'Tãi (“TÃ-i”, dentes)'],
      ],
    },
    lessons: [
      {
        id: 'oldp1258-u2-l1',
        title: 'A família (abá reko)',
        kind: 'licao',
        words: ['Abá', 'Cuña', 'Tuba', 'Membi', 'Taíra', 'Mitã'],
        cloze: [
          { sentence: 'Che ___.', answer: 'Tuba', options: ['Tuba', 'Membi', 'Cuña'], translation: 'Meu pai.' },
          { sentence: 'Che Tuba, che ___.', answer: 'Taíra', options: ['Taíra', 'Membi', 'Mitã'], translation: 'Meu pai, eu [sou seu] filho — forma usada pelo pai para falar do filho.' },
          { sentence: '___ mirĩ.', answer: 'Mitã', options: ['Mitã', 'Abá', 'Cuña'], translation: 'Uma criança pequena.' },
        ],
        voice: {
          bot: 'Nde Tuba, nde Cuña?',
          botTranslation: 'Seu pai, sua mãe? (pergunta sobre a família)',
          expected: ['Che Tuba…', 'che membi', 'che taíra'],
          hint: 'Fale da sua família com “Che Tuba” (meu pai), “Che Membi” ou “Che Taíra” (meu filho/filha, conforme quem fala).',
        },
        communityPrompt: 'Fale da sua família em guarani antigo: cite o pai (Tuba) e, se tiver, o filho ou a filha (Membi, se você for mulher; Taíra, se for homem).',
      },
      {
        id: 'oldp1258-u2-l2',
        title: 'Comida e natureza',
        kind: 'licao',
        words: ['Y', 'Pirá', 'Abatí', 'Tembiú', 'Tatá', 'Caá'],
        cloze: [
          { sentence: 'Che Tembiú: ___.', answer: 'Pirá', options: ['Pirá', 'Y', 'Tatá'], translation: 'Minha comida: peixe.' },
          { sentence: '___ catupiri.', answer: 'Y', options: ['Y', 'Caá', 'Tatá'], translation: 'A água [é] boa.' },
          { sentence: '___ guasu.', answer: 'Caá', options: ['Caá', 'Abatí', 'Y'], translation: 'O mato [é] grande.' },
        ],
        voice: {
          bot: 'Pota Pirá?',
          botTranslation: 'Você quer peixe?',
          expected: ['Tã, pota pirá', 'heẽ, pota pirá', 'aany'],
          hint: 'Responda com “Tã/Heẽ, pota Pirá” (sim, eu quero peixe, conforme o seu gênero) ou “Aany” (não).',
        },
        communityPrompt: 'Descreva o que você come e onde você está, usando pelo menos três palavras desta lição.',
      },
      {
        id: 'oldp1258-u2-l3',
        title: 'Prova: família e aldeia',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mbae nde Tera? Nde Tuba?',
          botTranslation: 'Qual é o seu nome? [E] seu pai?',
          expected: ['Che Tera…', 'che tera, che tuba'],
          hint: 'Diga o seu nome com “Che Tera…” e, se quiser, fale do seu pai com “Che Tuba…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em guarani antigo contando sobre a sua família e o que você come, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
