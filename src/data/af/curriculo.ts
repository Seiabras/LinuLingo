import type { UnitSeed } from '../types';

/**
 * Trilha do africâner: as duas unidades do A1 e, agora, as duas do A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_AF: UnitSeed[] = [
  {
    id: 'af-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo! Die eerste treë',
    emoji: '👋',
    card: {
      id: 'af-c1',
      title: 'A língua germânica da África',
      emoji: '🌍',
      history:
        'O africâner nasceu do neerlandês levado para o Cabo da Boa Esperança a partir de 1652, quando a Companhia Holandesa das Índias Orientais montou ali um posto de abastecimento. Na colônia, o neerlandês conviveu com as línguas dos khoikhoi, com o malaio e o português crioulo falados por escravizados trazidos da Ásia e da África, e com o alemão e o francês de outros colonos, e foi se simplificando até virar uma língua própria. Em 1925 foi reconhecido como língua oficial da África do Sul, ao lado do inglês, no lugar do neerlandês; hoje é uma das várias línguas oficiais do país e também é muito falado na Namíbia. São cerca de 7 milhões de falantes nativos e muitos outros que o usam como segunda língua (as estimativas variam).',
      culture_tip:
        'O africâner é falado por pessoas de origens muito diversas: a maioria dos falantes nativos não é de ascendência europeia. Entre amigos se usa “jy” (você); com pessoas mais velhas e em situações formais, “u”. E “lekker” (gostoso, bom, agradável) é talvez a palavra mais sul-africana de todas.',
      grammar_why:
        'O verbo do africâner não muda com a pessoa: “ek is”, “jy is”, “hy is”, “ons is”. Para dizer o nome há duas formas: “My naam is Anna” (o meu nome é Anna) e “Ek heet Anna” (eu me chamo Anna). E a origem se diz com “kom van … af”: “Ek kom van São Paulo af”.',
      grammar_examples: [
        ['Hallo! My naam is Anna.', 'Oi! O meu nome é Anna.'],
        ['Wat is jou naam?', 'Qual é o seu nome?'],
        ['Hy kom van Durban af, sy kom van Pretoria af.', 'Ele é de Durban, ela é de Pretória.'],
        ['Goed, dankie. En met jou?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['g', 'um som raspado no fundo da garganta, parecido com o “r” carioca', 'goed (bom), agt (oito)'],
        ['v / w', 'v soa “f”; w soa “v”', 'vyf (cinco), wit (branco)'],
        ['oe / ie', 'oe soa “u”; ie soa “i”', 'broer (irmão), drie (três)'],
        ['y / ei', 'os dois soam igual, parecido com “âi”', 'wyn (vinho), klein (pequeno)'],
        ['ê / ô / û', 'o acento circunflexo indica uma vogal longa e aberta', 'hê (ter), môre (amanhã)'],
        ["'n", 'o artigo “um, uma”, dito com um “â” fraco', "'n hond (um cachorro)"],
      ],
    },
    lessons: [
      {
        id: 'af-u1-l1',
        title: 'Hallo, dankie, totsiens!',
        kind: 'licao',
        words: ['hallo', 'goeiemôre', 'goeienaand', 'goeienag', 'totsiens', 'dankie'],
        cloze: [
          { sentence: '___, Anna! Hoe gaan dit?', answer: 'Hallo', options: ['Hallo', 'Totsiens', 'Dankie'], translation: 'Oi, Anna! Como vai?' },
          { sentence: 'Dit is laat: ___!', answer: 'goeienag', options: ['goeienag', 'goeiemôre', 'dankie'], translation: 'Já é tarde: boa noite!' },
          { sentence: 'Baie ___!', answer: 'dankie', options: ['dankie', 'hallo', 'totsiens'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Hallo! Hoe gaan dit?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Goed, dankie! En met jou?', 'goed', 'dankie'],
          hint: 'Responda que vai bem e devolva a pergunta: “Goed, dankie! En met jou?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em africâner: um de manhã (“Goeiemôre…”), um à noite (“Goeienaand…”) e uma despedida (“Totsiens”).',
      },
      {
        id: 'af-u1-l2',
        title: 'Ek, jy, hy, sy',
        kind: 'licao',
        words: ['ek', 'jy', 'hy', 'sy', 'heet', 'naam'],
        cloze: [
          { sentence: '___ heet Sara.', answer: 'Ek', options: ['Ek', 'Jy', 'Hy'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Wat is jou ___?', answer: 'naam', options: ['naam', 'huis', 'hond'], translation: 'Qual é o seu nome?' },
          { sentence: '___ kom van Durban af.', answer: 'Hy', options: ['Hy', 'Ek', 'Jy'], translation: 'Ele é de Durban.' },
        ],
        voice: {
          bot: 'Hallo! Wat is jou naam?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['My naam is Ana. En jy?', 'my naam is', 'ek heet', 'en jy'],
          hint: 'Diga o seu nome com “My naam is…” ou “Ek heet…” e devolva a pergunta com “En jy?”.',
        },
        communityPrompt: 'Apresente-se em africâner: diga o seu nome com “My naam is…” e pergunte o nome de alguém com “Wat is jou naam?”.',
      },
      {
        id: 'af-u1-l3',
        title: 'Toets: die eerste treë',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hallo! My naam is Pieter. Wat is jou naam en waar kom jy vandaan?',
          botTranslation: 'Oi! O meu nome é Pieter. Qual é o seu nome e de onde você é?',
          expected: ['Hallo! My naam is Lucia en ek kom van São Paulo af.', 'my naam is', 'ek kom van', 'hallo'],
          hint: 'Devolva o cumprimento (“Hallo!”), diga o nome com “My naam is…” e a cidade com “Ek kom van … af”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “My naam is…”, cidade com “Ek kom van … af” e uma despedida.',
      },
    ],
  },
  {
    id: 'af-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familie en tuis',
    emoji: '👪',
    card: {
      id: 'af-c2',
      title: 'Die, \'n e o “nie… nie”',
      emoji: '🧭',
      history:
        'O africâner guarda algumas palavras vindas do português, que era a língua de contato dos portos do Oceano Índico nos séculos XVII e XVIII: “mielie” (milho) vem do português “milho”, e “kraal” (curral, cercado para o gado) de “curral”. Entre os primeiros textos escritos em africâner, no século XIX, estão livros religiosos de muçulmanos da Cidade do Cabo, escritos em letras árabes.',
      culture_tip:
        'O “braai”, o churrasco sul-africano, é uma instituição: família e amigos se reúnem em volta do fogo para assar carne, linguiça (“boerewors”) e espigas de milho. Ser convidado para um braai é sinal de amizade.',
      grammar_why:
        'O africâner não tem gênero gramatical: o artigo definido é sempre “die” (o, a, os, as) e o indefinido, “\'n” (um, uma). Para negar, a língua usa duas vezes a palavra “nie”: uma depois do verbo e outra no fim da frase: “Ek praat nie Afrikaans nie” (eu não falo africâner). E a posse se faz com “se”: “my ma se naam” (o nome da minha mãe).',
      grammar_examples: [
        ['My familie is groot.', 'A minha família é grande.'],
        ["Ek het 'n broer en 'n suster.", 'Tenho um irmão e uma irmã.'],
        ['My ma se naam is Rosa.', 'O nome da minha mãe é Rosa.'],
        ['Die huis is nie groot nie.', 'A casa não é grande.'],
      ],
      character_guide: [
        ['die', 'artigo definido único, para tudo', 'die hond, die kat, die huis'],
        ['se', 'marca de posse, entre o dono e a coisa', 'my pa se huis (a casa do meu pai)'],
      ],
    },
    lessons: [
      {
        id: 'af-u2-l1',
        title: 'My familie',
        kind: 'licao',
        words: ['familie', 'ma', 'pa', 'broer', 'suster', 'hê'],
        cloze: [
          { sentence: 'My ___ se naam is Rosa.', answer: 'ma', options: ['ma', 'pa', 'broer'], translation: 'O nome da minha mãe é Rosa.' },
          { sentence: "Ek ___ 'n broer.", answer: 'het', options: ['het', 'is', 'gaan'], translation: 'Eu tenho um irmão.' },
          { sentence: 'My ___ kom van Durban af.', answer: 'pa', options: ['pa', 'suster', 'ma'], translation: 'O meu pai é de Durban.' },
        ],
        voice: {
          bot: 'Het jy broers of susters?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ["Ja, ek het 'n broer en 'n suster.", 'ek het', 'broer', 'suster'],
          hint: 'Responda com “Ja, ek het…” ou “Nee, ek het nie broers of susters nie”.',
        },
        communityPrompt: 'Descreva a sua família em africâner: quantos irmãos (broers) e irmãs (susters) você tem e como se chamam os seus pais.',
      },
      {
        id: 'af-u2-l2',
        title: 'Tuis',
        kind: 'licao',
        words: ['huis', 'water', 'brood', 'melk', 'kaas', 'eet'],
        cloze: [
          { sentence: 'My ___ is klein.', answer: 'huis', options: ['huis', 'water', 'brood'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ek drink ___.', answer: 'water', options: ['water', 'brood', 'kaas'], translation: 'Eu bebo água.' },
          { sentence: 'Ek eet brood met ___.', answer: 'kaas', options: ['kaas', 'water', 'melk'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Wat eet jy vir ontbyt?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Ek eet brood met kaas.', 'ek eet', 'brood', 'kaas'],
          hint: 'Diga o que come com “Ek eet…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ek eet…” e “Ek drink…”.',
      },
      {
        id: 'af-u2-l3',
        title: 'Toets: familie en tuis',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vertel my van jou familie: het jy broers of susters?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ["Ja, ek het 'n suster. Haar naam is Maria.", 'ek het', 'naam is'],
          hint: 'Diga quantos irmãos tem (“ek het…”) e o nome deles (“sy/haar naam is…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ek het”, “se naam is” e “is”.',
      },
    ],
  },
  {
    id: 'af-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Die weer en die klere',
    emoji: '🌦️',
    card: {
      id: 'af-c3',
      title: 'Um passado bem mais simples',
      emoji: '🕰️',
      history:
        'Quando o neerlandês virou africâner no Cabo, séculos de contato entre falantes de línguas diferentes simplificaram demais a gramática — inclusive o passado. Em vez de dezenas de particípios irregulares como no neerlandês (gekocht, gedacht), o africâner regularizou quase tudo num padrão só: “het” + “ge-” + o radical do verbo.',
      culture_tip:
        'Com o verão sul-africano quente e seco e o inverno do Cabo chuvoso, falar do tempo (“die weer”) é tão comum ali quanto em qualquer lugar: “Dit is warm vandag, nè?” é uma abertura de conversa fácil.',
      grammar_why:
        "Para contar o que já aconteceu, basta “het” mais o verbo com “ge-” na frente, sem mudar para cada pessoa: “dit het gereën” (choveu), “ek het 'n jas gekoop” (eu comprei uma jaqueta). Os verbos modais “kan”, “moet”, “wil” e “mag” também não conjugam, e vêm direto antes do infinitivo, sem “te”: “ek moet 'n trui koop” (eu tenho que comprar um suéter).",
      grammar_examples: [
        ['Dit het gister gereën.', 'Choveu ontem.'],
        ["Ek het 'n nuwe jas gekoop.", 'Eu comprei uma jaqueta nova.'],
        ["Ek moet 'n trui dra: dit is koud.", 'Eu tenho que usar um suéter: está frio.'],
        ['Mag ek \'n vraag vra?', 'Posso fazer uma pergunta?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'af-u3-l1',
        title: 'Wat vir weer is dit?',
        kind: 'licao',
        words: ['reën', 'son', 'wind', 'sneeu', 'warm', 'koud'],
        cloze: [
          { sentence: 'Dit het gister baie ___.', answer: 'gereën', options: ['gereën', 'gesneeu', 'wind'], translation: 'Choveu muito ontem.' },
          { sentence: 'Vandag is dit baie ___.', answer: 'warm', options: ['warm', 'koud', 'wind'], translation: 'Hoje está muito quente.' },
          { sentence: 'Die ___ skyn vandag.', answer: 'son', options: ['son', 'sneeu', 'reën'], translation: 'O sol está brilhando hoje.' },
        ],
        voice: {
          bot: 'Hoe is die weer vandag?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Dit is warm en die son skyn.', 'warm', 'son'],
          hint: 'Descreva o tempo com “Dit is…” e o que o sol faz com “die son skyn”.',
        },
        communityPrompt: 'Descreva o tempo de hoje e de ontem em africâner, usando “dit is…” e “dit het… gereën/gesneeu”.',
      },
      {
        id: 'af-u3-l2',
        title: 'Klere koop',
        kind: 'licao',
        words: ['jas', 'broek', 'skoen', 'trui', 'koop', 'moet'],
        cloze: [
          { sentence: "Ek het 'n nuwe ___ gekoop.", answer: 'jas', options: ['jas', 'broek', 'skoen'], translation: 'Eu comprei uma jaqueta nova.' },
          { sentence: 'Dit is koud: ek ___ \'n trui dra.', answer: 'moet', options: ['moet', 'kan', 'mag'], translation: 'Está frio: eu tenho que usar um suéter.' },
          { sentence: 'Hierdie ___ is te groot.', answer: 'broek', options: ['broek', 'jas', 'trui'], translation: 'Esta calça é grande demais.' },
        ],
        voice: {
          bot: 'Wat het jy gekoop?',
          botTranslation: 'O que você comprou?',
          expected: ["Ek het 'n trui gekoop.", 'ek het', 'gekoop'],
          hint: 'Diga o que você comprou com “Ek het… gekoop”.',
        },
        communityPrompt: 'Escreva o que você comprou recentemente e o que você tem que fazer hoje, usando o passado (“ek het… gekoop”) e “moet”.',
      },
      {
        id: 'af-u3-l3',
        title: 'Toets: die weer en die klere',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Het dit vandag gereën? Wat moet jy dra as dit koud is?',
          botTranslation: 'Choveu hoje? O que você tem que usar quando está frio?',
          expected: ["Nee, dit is warm. As dit koud is, moet ek 'n jas dra.", 'moet', 'gedra'],
          hint: 'Diga como está o tempo e use “moet” para dizer o que você precisa usar.',
        },
        communityPrompt: 'Escreva cinco frases sobre o tempo e as roupas, usando o passado com “het… ge-” e pelo menos um verbo modal.',
      },
    ],
  },
  {
    id: 'af-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Liggaam, beroepe en gevoelens',
    emoji: '🧑‍⚕️',
    card: {
      id: 'af-c4',
      title: 'Diminutivos por todo canto',
      emoji: '🤏',
      history:
        'O africâner usa o diminutivo (-ie, -tjie, -etjie) muito mais do que o neerlandês: não é só para dizer que algo é pequeno, mas também para soar mais afetuoso ou informal — um gatinho é “katjie”, mas até uma xícara de café pode virar “koffietjie” numa conversa carinhosa.',
      culture_tip:
        'Perguntar “Hoe voel jy?” (como você se sente?) é comum entre amigos; “lekker” aparece de novo aqui, dessa vez para dizer que algo faz bem ou é agradável, até para falar de saúde.',
      grammar_why:
        'Para comparar, o africâner acrescenta -er ao adjetivo (comparativo) e -ste (superlativo, com “die”), usando “as” para “do que”: “groter as” (maior do que), “die grootste” (o maior). O diminutivo muda a terminação da palavra conforme o final dela: “huis” → “huisie”, “kat” → “katjie”.',
      grammar_examples: [
        ['My kop is seer.', 'Minha cabeça está doendo.'],
        ['Die dokter is baie vriendelik.', 'O médico é muito gentil.'],
        ['Ek is banger vir honde as jy.', 'Eu tenho mais medo de cachorros do que você.'],
        ['Sy is die beste verpleegkundige in die hospitaal.', 'Ela é a melhor enfermeira do hospital.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'af-u4-l1',
        title: 'Kop, hand en voet',
        kind: 'licao',
        words: ['kop', 'hand', 'voet', 'oog', 'oor', 'dokter'],
        cloze: [
          { sentence: 'My ___ is seer.', answer: 'kop', options: ['kop', 'hand', 'voet'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Sy het blou ___.', answer: 'oë', options: ['oë', 'ore', 'hande'], translation: 'Ela tem olhos azuis.' },
          { sentence: 'Die ___ is baie vriendelik.', answer: 'dokter', options: ['dokter', 'kop', 'oor'], translation: 'O médico é muito gentil.' },
        ],
        voice: {
          bot: 'Wat is seer?',
          botTranslation: 'O que está doendo?',
          expected: ['My kop is seer.', 'my', 'seer'],
          hint: 'Diga o que dói com “My… is seer”.',
        },
        communityPrompt: 'Descreva partes do corpo em africâner e diga ao médico o que está doendo, usando “my… is seer”.',
      },
      {
        id: 'af-u4-l2',
        title: 'Beroepe en gevoelens',
        kind: 'licao',
        words: ['onderwyser', 'kok', 'bly', 'kwaad', 'bang', 'moeg'],
        cloze: [
          { sentence: 'My pa is ___.', answer: 'onderwyser', options: ['onderwyser', 'kok', 'bly'], translation: 'Meu pai é professor.' },
          { sentence: 'Ek is vandag baie ___.', answer: 'bly', options: ['bly', 'kwaad', 'bang'], translation: 'Eu estou muito feliz hoje.' },
          { sentence: 'Ek is ___ vir honde.', answer: 'bang', options: ['bang', 'moeg', 'kwaad'], translation: 'Eu tenho medo de cachorros.' },
        ],
        voice: {
          bot: 'Hoe voel jy vandag?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Ek voel bly, maar ook \'n bietjie moeg.', 'ek voel', 'bly'],
          hint: 'Diga como você se sente com “Ek voel…”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de alguém da família) e como você se sente hoje, usando “ek voel…”.',
      },
      {
        id: 'af-u4-l3',
        title: 'Toets: liggaam, beroepe en gevoelens',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Wat is jou beroep en hoe voel jy vandag?',
          botTranslation: 'Qual é a sua profissão e como você está se sentindo hoje?',
          expected: ['Ek is onderwyser en ek voel bly.', 'ek is', 'ek voel'],
          hint: 'Diga a sua profissão com “ek is…” e como se sente com “ek voel…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre o corpo, as profissões e os sentimentos, usando pelo menos um comparativo (“…er as…”).',
      },
    ],
  },
];
