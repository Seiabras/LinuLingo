import type { UnitSeed } from '../types';

/**
 * Trilha do georgiano: A1.1 até A2.2 — ver `incomplete` em index.ts. Do B1 ao C2 chega depois.
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
  {
    id: 'ka-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ბათუმი: ზღვა და ბაზარი',
    emoji: '🌊',
    card: {
      id: 'ka-c3',
      title: 'A porta da Geórgia para o Mar Negro',
      emoji: '⚓',
      history:
        'Batumi, na região autônoma de Adjara, é o principal porto georgiano no Mar Negro e o maior centro turístico do país na costa. O Jardim Botânico de Batumi, fundado em 1912 pelo botânico russo Andrei Krasnov ao longo de um promontório com vista para o mar, reúne plantas de clima subtropical de várias partes do mundo e é uma das atrações mais visitadas da cidade.',
      culture_tip:
        'O calçadão (ბულვარი) de Batumi, com suas palmeiras e prédios modernos ao lado de construções mais antigas, é o point da cidade para passear à noite — bem diferente do clima mais seco de Tbilisi, já que Adjara é a região mais chuvosa da Geórgia.',
      grammar_why:
        'O futuro georgiano se forma acrescentando um preverbo ao presente, sem mudar mais nada: “ვწერ” (eu escrevo) vira “დავწერ” (eu vou escrever) só com “და-” na frente.',
      grammar_examples: [
        ['დავწერ წერილს.', 'Eu vou escrever uma carta.'],
        ['ეს მაღაზია დიდია.', 'Esta loja é grande.'],
        ['დღეს წვიმა არის.', 'Hoje tem chuva.'],
        ['მე მინდა ახალი ფეხსაცმელი.', 'Eu quero sapatos novos.'],
      ],
      character_guide: [
        ['შ', 'um “sh”, como em “show”', 'შარვალი (sharvali, “calça”)'],
        ['ფ', 'um “p” soprado', 'ფეხსაცმელი (pekhsatsmeli, “sapato”)'],
        ['ტ', 'ejetivo: um “t” seco, com um estalo de ar', 'ტანსაცმელი (tansatsmeli, “roupa”)'],
        ['ბ', 'como o “b” do português', 'ბაზარი (bazari, “mercado”)'],
        ['ღ', 'um som gutural sonoro, vibrado no fundo da garganta', 'ღრუბელი (ghrubeli, “nuvem”)'],
      ],
    },
    lessons: [
      {
        id: 'ka-u3-l1',
        title: 'ბაზარში',
        kind: 'licao',
        words: ['ბაზარი', 'მაღაზია', 'ქუჩა', 'ტანსაცმელი', 'პერანგი', 'ფეხსაცმელი'],
        cloze: [
          { sentence: 'ეს ___ დიდია.', answer: 'მაღაზია', options: ['მაღაზია', 'ბაზარი', 'ქუჩა'], translation: 'Esta loja é grande.' },
          { sentence: 'ეს ___ გრძელია.', answer: 'ქუჩა', options: ['ქუჩა', 'ბაზარი', 'მაღაზია'], translation: 'Esta rua é longa.' },
          { sentence: 'მე ახალი ___ მინდა.', answer: 'ფეხსაცმელი', options: ['ფეხსაცმელი', 'პერანგი', 'ტანსაცმელი'], translation: 'Eu quero sapatos novos.' },
        ],
        voice: {
          bot: 'რა გინდა?',
          botTranslation: 'O que você quer?',
          expected: ['მე მინდა ახალი ფეხსაცმელი.', 'მე მინდა', 'ფეხსაცმელი'],
          hint: 'Diga o que você quer com “მე მინდა …”.',
        },
        communityPrompt: 'Escreva três frases sobre ir ao bazar em Batumi, usando “ბაზარი”, “მაღაზია” e uma peça de roupa.',
      },
      {
        id: 'ka-u3-l2',
        title: 'ამინდი ბათუმში',
        kind: 'licao',
        words: ['ამინდი', 'წვიმა', 'სიცხე', 'სიცივე', 'ქარი', 'ღრუბელი'],
        cloze: [
          { sentence: 'დღეს ___ არის.', answer: 'წვიმა', options: ['წვიმა', 'სიცხე', 'ქარი'], translation: 'Hoje tem chuva.' },
          { sentence: 'დღეს დიდი ___ არის.', answer: 'სიცხე', options: ['სიცხე', 'სიცივე', 'ქარი'], translation: 'Hoje tem muito calor.' },
          { sentence: 'ცაზე ___ არის.', answer: 'ღრუბელი', options: ['ღრუბელი', 'ქარი', 'წვიმა'], translation: 'No céu há nuvem.' },
        ],
        voice: {
          bot: 'დღეს როგორი ამინდია?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['დღეს წვიმა არის.', 'წვიმა', 'სიცხე'],
          hint: 'Descreva o tempo com “დღეს … არის”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em georgiano, usando “ამინდი”, “წვიმა”, “სიცხე” ou “სიცივე”.',
      },
      {
        id: 'ka-u3-l3',
        title: 'ტესტი: ბაზარი და ამინდი',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'რა გინდა, და დღეს როგორი ამინდია?',
          botTranslation: 'O que você quer, e como está o tempo hoje?',
          expected: ['მე მინდა ახალი პერანგი, და დღეს წვიმა არის.', 'მინდა', 'წვიმა'],
          hint: 'Diga o que você quer (“მე მინდა …”) e descreva o tempo (“დღეს … არის”).',
        },
        communityPrompt: 'Escreva cinco frases sobre uma ida ao bazar em Batumi e o tempo do dia, usando o vocabulário novo.',
      },
    ],
  },
  {
    id: 'ka-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'კახეთში: გრძნობები და მომავალი',
    emoji: '🍇',
    card: {
      id: 'ka-c4',
      title: 'Vinho envelhecido debaixo da terra',
      emoji: '🏺',
      history:
        'Kakheti, no leste da Geórgia, concentra a maior parte dos vinhedos do país e é o berço do método de vinificação em “ქვევრი” (qvevri): grandes potes de barro, enterrados no chão, usados para fermentar e envelhecer o vinho há milhares de anos. A UNESCO reconheceu essa tradição georgiana como Patrimônio Cultural Imaterial da Humanidade em 2013.',
      culture_tip:
        'Numa supra (სუფრა) em Kakheti, não é raro o anfitrião oferecer o próprio vinho da casa, feito em qvevri — e perguntar como você está se sentindo (“როგორ ხარ?”) faz parte da conversa antes de qualquer brinde.',
      grammar_why:
        'Para comparar, o georgiano moderno usa “უფრო” (mais) antes do adjetivo e “ვიდრე” (que) antes do segundo termo: “ეს ღვინო უფრო კარგია, ვიდრე ის” (este vinho é melhor que aquele).',
      grammar_examples: [
        ['ეს ღვინო უფრო კარგია, ვიდრე ის.', 'Este vinho é melhor que aquele.'],
        ['ეს ყველაზე კარგი ღვინოა.', 'Este é o melhor vinho.'],
        ['მე ორმოცი წლის ვარ.', 'Eu tenho quarenta anos.'],
        ['ხვალ ვმუშაობ.', 'Amanhã eu trabalho.'],
      ],
      character_guide: [
        ['ჟ', 'um “zh” sonoro, como o “j” francês em “jour”', 'ინჟინერი (inzhineri, “engenheiro”)'],
        ['ზ', 'um “z” sonoro, como em “zebra”', 'გაბრაზებული (gabrazebuli, “bravo, com raiva”)'],
        ['დ', 'como o “d” do português', 'დაღლილი (daghlili, “cansado”)'],
        ['ლ', 'como o “l” do português', 'გლეხი (glekhi, “agricultor”)'],
        ['ნ', 'como o “n” do português', 'ნაღვლიანი (naghvliani, “triste”)'],
      ],
    },
    lessons: [
      {
        id: 'ka-u4-l1',
        title: 'პროფესია და გრძნობები',
        kind: 'licao',
        words: ['ექიმი', 'მასწავლებელი', 'ინჟინერი', 'გლეხი', 'ბედნიერი', 'ნაღვლიანი'],
        cloze: [
          { sentence: 'ჩემი დედა ___ არის.', answer: 'მასწავლებელი', options: ['მასწავლებელი', 'ექიმი', 'გლეხი'], translation: 'A minha mãe é professora.' },
          { sentence: 'ჩემი ძმა ___ არის.', answer: 'ინჟინერი', options: ['ინჟინერი', 'გლეხი', 'ექიმი'], translation: 'O meu irmão é engenheiro.' },
          { sentence: 'ის დღეს ძალიან ___ არის.', answer: 'ბედნიერი', options: ['ბედნიერი', 'ნაღვლიანი', 'დაღლილი'], translation: 'Ele/ela está muito feliz hoje.' },
        ],
        voice: {
          bot: 'მამაშენი რას მუშაობს?',
          botTranslation: 'O que o seu pai faz (de trabalho)?',
          expected: ['მამაჩემი ექიმია.', 'ექიმი', 'არის'],
          hint: 'Diga a profissão com “… არის” ou a forma contraída “-ია”.',
        },
        communityPrompt: 'Descreva a profissão de alguém da sua família e como você está se sentindo hoje, usando “ბედნიერი”, “ნაღვლიანი” ou “დაღლილი”.',
      },
      {
        id: 'ka-u4-l2',
        title: 'მომავალი და რიცხვები',
        kind: 'licao',
        words: ['ოცი', 'ორმოცი', 'ასი', 'მუშაობა', 'ყიდვა', 'თამაში'],
        cloze: [
          { sentence: 'მე ___ წლის ვარ.', answer: 'ოცი', options: ['ოცი', 'ორმოცი', 'ასი'], translation: 'Eu tenho vinte anos.' },
          { sentence: 'ეს წიგნი ___ ლარია.', answer: 'ორმოცი', options: ['ორმოცი', 'ოცი', 'ასი'], translation: 'Este livro custa quarenta laris.' },
          { sentence: 'ერთ საუკუნეში ___ წელია.', answer: 'ასი', options: ['ასი', 'ორმოცი', 'ოცი'], translation: 'Em um século há cem anos.' },
        ],
        voice: {
          bot: 'ხვალ რას გააკეთებ?',
          botTranslation: 'O que você vai fazer amanhã?',
          expected: ['ხვალ ვმუშაობ.', 'ვმუშაობ', 'ხვალ'],
          hint: 'Você pode responder com o presente (“ვმუშაობ”) para planos próximos, ou com o futuro e preverbo (“დავწერ”, “გავაკეთებ”).',
        },
        communityPrompt: 'Escreva três planos para o futuro em georgiano, usando o presente para planos próximos ou o futuro com preverbo, e um número de 20 a 100.',
      },
      {
        id: 'ka-u4-l3',
        title: 'ტესტი: გრძნობები და მომავალი',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ხვალ რას გააკეთებ, და დღეს როგორ ხარ?',
          botTranslation: 'O que você vai fazer amanhã, e como você está hoje?',
          expected: ['ხვალ ვმუშაობ, და დღეს ბედნიერი ვარ.', 'ვმუშაობ', 'ბედნიერი'],
          hint: 'Diga o seu plano e um sentimento, usando o vocabulário novo.',
        },
        communityPrompt: 'Escreva cinco frases sobre os seus planos de futuro e os seus sentimentos, usando “ბედნიერი”/“ნაღვლიანი”/“დაღლილი” e um número.',
      },
    ],
  },
];
