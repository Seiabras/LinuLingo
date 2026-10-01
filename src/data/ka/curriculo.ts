import type { UnitSeed } from '../types';

/**
 * Trilha do georgiano: por enquanto só as duas unidades do nível A1 — ver `incomplete` em
 * index.ts. As de A2 ao C2 chegam depois.
 */
export const UNITS_KA: UnitSeed[] = [
  {
    id: 'ka-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'გამარჯობა! პირველი ნაბიჯები',
    emoji: '👋',
    card: {
      id: 'ka-c1',
      title: 'Uma língua sem parentes, com um alfabeto só seu',
      emoji: '🏔️',
      history:
        'O georgiano é a língua caucasiana meridional (família kartveliana) mais falada, com cerca de 3,8 milhões de falantes nativos — e, sozinha, não tem parentesco comprovado com nenhuma outra família de línguas do mundo, nem com o indo-europeu (não é parente do armênio nem do grego, que têm seus próprios ramos dentro do indo-europeu). Escreve-se com o alfabeto mkhedruli, de 33 letras, sem distinção entre maiúsculas e minúsculas. Tbilisi, a capital, tem mais de 1500 anos: segundo a lenda, o rei Vakhtang Gorgasali fundou a cidade no século V ao encontrar fontes de água quente onde hoje fica o bairro de Abanotubani — por isso “tbilisi” vem da palavra georgiana para “quente”.',
      culture_tip:
        '“გამარჯობა” (gamarjoba) é o “oi” de qualquer hora do dia — e vem, literalmente, de “vitória”: um jeito antigo de desejar sucesso a quem você encontra. De manhã, também se diz “დილა მშვიდობისა” (dila mshvidobisa, “manhã de paz”); à noite, ao se despedir, “ღამე მშვიდობისა” (ghame mshvidobisa, “noite de paz”).',
      grammar_why:
        'O georgiano não tem um verbo isolado no infinitivo para usar como citação: os dicionários citam o “masdar”, um substantivo derivado do verbo (como “ყოფნა”, qopna, literalmente “o ser”). E a cópula “ser/estar” tem uma forma reduzida: “ეს კარგია” (es kargia) já é “isto é bom”, com o “-ა” grudado no final da palavra em vez de um “é” separado.',
      grammar_examples: [
        ['გამარჯობა! როგორ ხარ?', 'Oi! Como vai?'],
        ['ჩემი სახელია ლინუ.', 'O meu nome é Linu.'],
        ['თბილისი დიდი ქალაქი არის.', 'Tbilisi é uma cidade grande.'],
        ['ეს კარგია.', 'Isto é bom.'],
      ],
      character_guide: [
        ['გ', 'como o “g” de “gato”', 'გამარჯობა (gamarjoba, “oi”)'],
        ['კ / ქ', 'კ é ejetivo (seco, com um estalo), ქ é soprado como o “k” inglês', 'კატა (k’at’a, “gato”) × ქალაქი (kalaki, “cidade”)'],
        ['წ / ც', 'წ é ejetivo, ც é soprado, os dois soam “ts”', 'წყალი (ts’q’ali, “água”) × ცუდი (tsudi, “ruim”)'],
        ['ყ', 'um som gutural só do georgiano, sem equivalente em português', 'ყავა (q’ava, “café”)'],
        ['ხ', 'um “kh” gutural, como o “j” espanhol', 'ხვალ (khval, “amanhã”)'],
      ],
    },
    lessons: [
      {
        id: 'ka-u1-l1',
        title: 'გამარჯობა, მადლობა, ნახვამდის!',
        kind: 'licao',
        words: ['გამარჯობა', 'დილა მშვიდობისა', 'ღამე მშვიდობისა', 'ნახვამდის', 'მადლობა', 'გთხოვთ'],
        cloze: [
          { sentence: '___! როგორ ხარ?', answer: 'გამარჯობა', options: ['გამარჯობა', 'ნახვამდის', 'მადლობა'], translation: 'Oi! Como vai?' },
          { sentence: '___, დედა!', answer: 'დილა მშვიდობისა', options: ['დილა მშვიდობისა', 'ღამე მშვიდობისა', 'ნახვამდის'], translation: 'Bom dia, mãe!' },
          { sentence: 'დიდი ___!', answer: 'მადლობა', options: ['მადლობა', 'ბოდიში', 'გთხოვთ'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'გამარჯობა! როგორ ხარ?',
          botTranslation: 'Oi! Como vai?',
          expected: ['კარგად ვარ, გმადლობთ. შენ?', 'კარგად ვარ', 'გმადლობთ'],
          hint: 'Responda que vai bem com “კარგად ვარ” e devolva a pergunta.',
        },
        communityPrompt: 'Escreva três cumprimentos em georgiano: um de qualquer hora (“გამარჯობა”), um de manhã (“დილა მშვიდობისა”) e um “até logo” (“ნახვამდის”).',
      },
      {
        id: 'ka-u1-l2',
        title: 'მე, შენ, ის',
        kind: 'licao',
        words: ['მე', 'შენ', 'ის', 'სახელი', 'ყოფნა', 'ქალაქი'],
        cloze: [
          { sentence: '___ ბრაზილიელი ვარ.', answer: 'მე', options: ['მე', 'შენ', 'ის'], translation: 'Eu sou brasileiro(a).' },
          { sentence: 'რა არის შენი ___?', answer: 'სახელი', options: ['სახელი', 'ქალაქი', 'მეგობარი'], translation: 'Qual é o seu nome?' },
          { sentence: 'თბილისი დიდი ___ არის.', answer: 'ქალაქი', options: ['ქალაქი', 'სახლი', 'ოჯახი'], translation: 'Tbilisi é uma cidade grande.' },
        ],
        voice: {
          bot: 'გამარჯობა! რა გქვია?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['ჩემი სახელია ლინუ. შენ?', 'ჩემი სახელია', 'მე ვარ'],
          hint: 'Diga o seu nome com “ჩემი სახელია …” e devolva a pergunta com “შენ?”.',
        },
        communityPrompt: 'Apresente-se em georgiano: diga o seu nome com “ჩემი სახელია …” e de onde você é com “მე … ვარ”.',
      },
      {
        id: 'ka-u1-l3',
        title: 'ტესტი. პირველი ნაბიჯები',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'გამარჯობა, ჩემი სახელია გიორგი. შენ რა გქვია და საიდან ხარ?',
          botTranslation: 'Oi, meu nome é Giorgi. Qual é o seu nome e de onde você é?',
          expected: ['გამარჯობა, ჩემი სახელია …, და მე ბრაზილიადან ვარ.', 'ჩემი სახელია', 'მე … ვარ'],
          hint: 'Devolva o cumprimento, diga o nome (“ჩემი სახელია …”) e de onde você é (“მე … ვარ”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em georgiano: cumprimento, nome com “ჩემი სახელია …”, cidade ou país com “მე … ვარ” e uma despedida.',
      },
    ],
  },
  {
    id: 'ka-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ოჯახი და საჭმელი',
    emoji: '👪',
    card: {
      id: 'ka-c2',
      title: 'Quem “tem”, em georgiano, não é bem o sujeito',
      emoji: '🧭',
      history:
        'Tbilisi ficou no cruzamento da Rota da Seda, entre o Mar Negro, a Pérsia e o resto do Cáucaso — por isso sua Cidade Velha, perto da fortaleza de Narikala (erguida no século IV e ampliada por invasores árabes nos séculos VII e VIII), tem mesquitas, igrejas armênias, uma sinagoga e os banhos de enxofre de Abanotubani lado a lado. A avenida Rustaveli, no centro, leva o nome do poeta medieval Shota Rustaveli, autor de “O Cavaleiro com a Pele de Tigre”, um clássico da literatura georgiana.',
      culture_tip:
        'A “სუფრა” (supra) é o banquete georgiano: uma mesa farta, guiada por um “თამადა” (tamada, mestre de brindes) que propõe um brinde de cada vez — à Geórgia, aos convidados, à família, à paz. Todos levantam o copo e dizem “გაუმარჯოს!” (gaumarjos, “saúde!”, literalmente “que vença”).',
      grammar_why:
        'Em português, quem “tem” algo é o sujeito da frase (“eu tenho um irmão”). Em georgiano, o verbo “ter” vira do avesso: quem possui vai para o caso dativo (“მე”, “eu”, sem mudar de forma) e o que é possuído fica no nominativo, concordando com o verbo — “მე მყავს ძმა” é, palavra por palavra, “a-mim é-tido irmão”. Há até dois verbos “ter” diferentes: “მაქვს” (makvs) para coisas, “მყავს” (mqavs) para gente e bichos.',
      grammar_examples: [
        ['მე მყავს ერთი ძმა.', 'Eu tenho um irmão.'],
        ['მე მაქვს წიგნი.', 'Eu tenho um livro.'],
        ['მე მინდა ხაჭაპური.', 'Eu quero khachapuri.'],
        ['მე ქართული ყავა მიყვარს.', 'Eu gosto de café georgiano.'],
      ],
      character_guide: [
        ['ძ', 'como o “dz” de “pizza”', 'ძმა (dzma, “irmão”)'],
        ['ჭ', 'ejetivo, um “tch” seco e expelido', 'ხაჭაპური (khach’ap’uri)'],
        ['ყ', 'o som gutural só do georgiano, de novo aqui', 'ყველი (q’veli, “queijo”)'],
        ['ჯ', 'como o “j” de “jogo” em inglês (não o “j” do português)', 'ოჯახი (ojakhi, “família”)'],
      ],
    },
    lessons: [
      {
        id: 'ka-u2-l1',
        title: 'ჩემი ოჯახი',
        kind: 'licao',
        words: ['ოჯახი', 'მამა', 'დედა', 'ძმა', 'და', 'მყავს'],
        cloze: [
          { sentence: 'ჩემი ___ დიდია.', answer: 'ოჯახი', options: ['ოჯახი', 'სახლი', 'ქალაქი'], translation: 'A minha família é grande.' },
          { sentence: 'მე ერთი ___ მყავს.', answer: 'ძმა', options: ['ძმა', 'და', 'მეგობარი'], translation: 'Eu tenho um irmão.' },
          { sentence: 'ჩემი ___ ბათუმიდან არის.', answer: 'მამა', options: ['მამა', 'დედა', 'და'], translation: 'O meu pai é de Batumi.' },
        ],
        voice: {
          bot: 'და ან ძმა გყავს?',
          botTranslation: 'Você tem irmã ou irmão?',
          expected: ['კი, მე ერთი ძმა და ერთი და მყავს.', 'მყავს', 'ძმა', 'და'],
          hint: 'Responda com “კი, მყავს …” ou “არა, არ მყავს”.',
        },
        communityPrompt: 'Descreva a sua família em georgiano: quantos irmãos (ძმა) e irmãs (და) você tem, usando “მე … მყავს”.',
      },
      {
        id: 'ka-u2-l2',
        title: 'საჭმელი და სახლი',
        kind: 'licao',
        words: ['სახლი', 'წყალი', 'პური', 'ყველი', 'ხაჭაპური', 'მაქვს'],
        cloze: [
          { sentence: 'ჩემი ___ პატარაა.', answer: 'სახლი', options: ['სახლი', 'ოჯახი', 'ქალაქი'], translation: 'A minha casa é pequena.' },
          { sentence: 'ერთი ___, გთხოვთ.', answer: 'წყალი', options: ['წყალი', 'ყავა', 'ჩაი'], translation: 'Uma água, por favor.' },
          { sentence: 'მე მინდა ___.', answer: 'ხაჭაპური', options: ['ხაჭაპური', 'წყალი', 'სახლი'], translation: 'Eu quero khachapuri.' },
        ],
        voice: {
          bot: 'რა გინდა ჭამა?',
          botTranslation: 'O que você quer comer?',
          expected: ['მე მინდა ხაჭაპური და ყველი.', 'მე მინდა', 'ხაჭაპური'],
          hint: 'Diga o que quer comer com “მე მინდა …”.',
        },
        communityPrompt: 'Escreva o que você quer comer e beber em georgiano, usando “მე მინდა …”.',
      },
      {
        id: 'ka-u2-l3',
        title: 'ტესტი. ოჯახი და საჭმელი',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'და ან ძმა გყავს? და რა გინდა ჭამა?',
          botTranslation: 'Você tem irmã ou irmão? E o que você quer comer?',
          expected: ['კი, მე ერთი და მყავს. და მე მინდა ხაჭაპური.', 'მყავს', 'მინდა'],
          hint: 'Diga quantos irmãos tem (“მყავს”) e algo sobre a sua casa ou comida favorita.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua comida favorita, usando “მყავს”, “მაქვს” e “მინდა”.',
      },
    ],
  },
];
