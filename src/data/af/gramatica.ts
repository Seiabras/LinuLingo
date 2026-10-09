import type { GrammarTopic } from '../types';

/** Tópicos de gramática do africâner — A1.1 ao A2.2 (pacote incompleto; B1 em diante ainda falta). */
export const GRAMMAR_AF: GrammarTopic[] = [
  {
    id: 'af-g1',
    level: 'A1.1',
    title: 'Pronúncia: g, v, w, oe, y e os acentos',
    emoji: '🔤',
    summary: 'A escrita do africâner é bem regular; algumas letras soam diferente do português.',
    sections: [
      {
        text: 'Quem aprende as regras abaixo consegue ler quase qualquer palavra. O acento circunflexo (ê, ô, û) marca vogais longas.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['g', 'raspado na garganta, como o “r” carioca', 'goed (bom)'],
            ['v', '“f”', 'vyf (cinco), vriend (amigo)'],
            ['w', '“v”', 'water (água), wit (branco)'],
            ['oe', '“u”', 'broer (irmão)'],
            ['ie', '“i”', 'drie (três)'],
            ['y / ei', 'parecido com “âi”', 'wyn (vinho), klein'],
          ],
        },
        examples: [
          ['Goeiemôre!', 'Bom dia!'],
          ['Ek drink water.', 'Eu bebo água.'],
        ],
      },
    ],
    pitfalls: ['Ler o “v” como o nosso “v”: “vyf” (cinco) começa com som de “f”.', 'Ler o “y” como “i”: em “wyn” ele soa parecido com “âi”.'],
    quiz: [
      { question: 'Como começa o som de “vyf” (cinco)?', options: ['com “f”', 'com “v”', 'com “u”'], answer: 'com “f”', explanation: 'Em africâner, o “v” soa como o nosso “f”.' },
      { question: 'Como soa o “oe” de “broer”?', options: ['“u”', '“ô”', '“oê”'], answer: '“u”', explanation: '“oe” sempre soa como o nosso “u”.' },
    ],
  },
  {
    id: 'af-g2',
    level: 'A1.1',
    title: 'Os pronomes e um verbo que não muda',
    emoji: '🙋',
    summary: 'Os pronomes pessoais e a grande facilidade do africâner: o verbo é igual para todas as pessoas.',
    sections: [
      {
        text: 'Em africâner, o verbo não se conjuga pela pessoa. “Wees” (ser, estar) fica “is” no presente para todo mundo, e qualquer verbo segue a mesma ideia: “ek praat”, “jy praat”, “hulle praat”. O pronome, por isso, é obrigatório.',
        table: {
          head: ['Pronome', 'Tradução', 'wees (presente)'],
          rows: [
            ['ek', 'eu', 'is'],
            ['jy / u', 'tu, você / o senhor, a senhora', 'is'],
            ['hy / sy', 'ele / ela', 'is'],
            ['ons', 'nós', 'is'],
            ['julle', 'vocês', 'is'],
            ['hulle', 'eles, elas', 'is'],
          ],
        },
        examples: [
          ["Ek is 'n student.", 'Sou estudante.'],
          ['Ons is vriende.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar como em português ou neerlandês (“ek ben”, “hy heeft”): em africâner é sempre “is” e “het”.', 'Confundir “sy” (ela) com o “zij” neerlandês, que também quer dizer “eles”.'],
    quiz: [
      { question: 'Complete: “Ons ___ vriende.”', options: ['is', 'sind', 'zijn'], answer: 'is', explanation: 'No presente, “wees” é “is” para todas as pessoas.' },
      { question: 'Qual pronome quer dizer “eles”?', options: ['hulle', 'julle', 'ons'], answer: 'hulle', explanation: '“hulle” = eles, elas; “julle” = vocês; “ons” = nós.' },
    ],
  },
  {
    id: 'af-g3',
    level: 'A1.2',
    title: "Die, 'n e a posse com “se”",
    emoji: '👪',
    summary: 'Sem gênero gramatical: um artigo definido só, um indefinido só, e a posse com a palavrinha “se”.',
    sections: [
      {
        text: 'O africâner perdeu o gênero gramatical do neerlandês: tudo é “die” (o, a, os, as) e “\'n” (um, uma). O plural costuma acrescentar -e ou -s: hond → honde, broer → broers. Para dizer “de alguém”, põe-se “se” entre o dono e a coisa: “my pa se huis”, a casa do meu pai.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['definido', 'die hond', 'die honde'],
            ['indefinido', "'n hond", '—'],
            ['posse', 'my ma se naam', 'my broers se huis'],
          ],
        },
        examples: [
          ['My huis is klein.', 'A minha casa é pequena.'],
          ['My ma se naam is Rosa.', 'O nome da minha mãe é Rosa.'],
        ],
      },
    ],
    pitfalls: ['Procurar o gênero da palavra: em africâner não existe; é sempre “die”.', 'Traduzir palavra por palavra “o nome da minha mãe” (“die naam van my ma”): o mais natural é “my ma se naam”.'],
    quiz: [
      { question: 'Qual é o artigo definido de “kat” (gato)?', options: ['die', 'het', 'de'], answer: 'die', explanation: 'Em africâner o artigo definido é sempre “die”.' },
      { question: 'Como se diz “a casa do meu pai”?', options: ['my pa se huis', 'my huis se pa', 'die pa huis'], answer: 'my pa se huis', explanation: 'O dono vem primeiro, depois “se” e depois a coisa possuída.' },
    ],
  },
  {
    id: 'af-g4',
    level: 'A1.2',
    title: 'O verbo hê e a negação dupla “nie… nie”',
    emoji: '🚫',
    summary: '“hê” (ter) vira “het” no presente, e a negação usa “nie” duas vezes.',
    sections: [
      {
        text: 'O africâner nega com dois “nie”: o primeiro depois do verbo, o segundo no fim da frase. Quando o verbo já está no fim, basta um: “Ek weet nie” (eu não sei). O verbo “hê” (ter) é “het” no presente, para todas as pessoas.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução'],
          rows: [
            ["Ek het 'n kat.", "Ek het nie 'n kat nie.", 'Eu (não) tenho um gato.'],
            ['Ek praat Afrikaans.', 'Ek praat nie Afrikaans nie.', 'Eu (não) falo africâner.'],
            ['Die huis is groot.', 'Die huis is nie groot nie.', 'A casa (não) é grande.'],
            ['Ek weet.', 'Ek weet nie.', 'Eu (não) sei.'],
          ],
        },
        examples: [
          ["Ek het 'n hond.", 'Eu tenho um cachorro.'],
          ['Ek praat nie Engels nie.', 'Eu não falo inglês.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o segundo “nie” no fim da frase: “Ek praat nie Afrikaans” soa incompleto.', 'Usar “hê” no presente: o presente é “het” (“ek het”); “hê” é o infinitivo.'],
    quiz: [
      { question: 'Como se diz “eu não falo africâner”?', options: ['Ek praat nie Afrikaans nie.', 'Ek nie praat Afrikaans.', 'Ek praat Afrikaans nie nie.'], answer: 'Ek praat nie Afrikaans nie.', explanation: 'O primeiro “nie” vem depois do verbo e o segundo fecha a frase.' },
      { question: "Complete: “Hy ___ 'n broer.”", options: ['het', 'hê', 'is'], answer: 'het', explanation: 'No presente, “hê” é “het” para todas as pessoas.' },
    ],
  },
  {
    id: 'af-g5',
    level: 'A2.1',
    title: 'O passado: het + ge-',
    emoji: '🕰️',
    summary: 'O africâner simplificou quase todo o passado do neerlandês num padrão só: “het” mais o verbo com “ge-” na frente, igual para qualquer pessoa.',
    sections: [
      {
        text: 'Enquanto o neerlandês guardou muitos verbos irregulares (gekocht, gedacht), o africâner regularizou quase tudo: basta pôr “ge-” antes do radical do verbo. O particípio fica no fim da frase, depois de “het”.',
        table: {
          head: ['Verbo', 'Passado', 'Exemplo'],
          rows: [
            ['werk (trabalhar)', 'het gewerk', 'Ek het gister gewerk.'],
            ['koop (comprar)', 'het gekoop', "Ek het 'n jas gekoop."],
            ['sien (ver)', 'het gesien', "Ek het 'n fliek gesien."],
            ['dink (pensar)', 'het gedink', 'Ek het so gedink.'],
          ],
        },
        examples: [
          ['Dit het gister gereën.', 'Choveu ontem.'],
          ["Ek het 'n jas gekoop.", 'Eu comprei uma jaqueta.'],
        ],
      },
      {
        heading: 'A excepção: prefixos inseparáveis',
        text: 'Verbos com os prefixos be-, er-, her-, ont- e ver- NÃO recebem “ge-”: “verkoop” (vender) no passado é “het verkoop”, nunca “het geverkoop”.',
        examples: [['Ek het die huis verkoop.', 'Eu vendi a casa.']],
      },
    ],
    pitfalls: ['Tentar formas irregulares como no neerlandês (“het gekoch”): em africâner é sempre “ge-” + radical, “het gekoop”.', 'Pôr “ge-” em verbos com prefixo inseparável: “verkoop” fica “het verkoop”, sem “ge-”.'],
    quiz: [
      { question: 'Como se diz “eu comprei uma jaqueta”?', options: ["Ek het 'n jas gekoop.", "Ek het 'n jas gekoch.", "Ek het gekoop 'n jas."], answer: "Ek het 'n jas gekoop.", explanation: 'O passado regular de “koop” é “gekoop”, no fim da frase.' },
      { question: 'Qual é o passado de “verkoop” (vender)?', options: ['het verkoop', 'het geverkoop', 'het verkoopte'], answer: 'het verkoop', explanation: 'Verbos com prefixo inseparável (ver-, be-, ont-…) não recebem “ge-”.' },
    ],
  },
  {
    id: 'af-g6',
    level: 'A2.1',
    title: 'Os verbos modais: kan, moet, wil, mag',
    emoji: '💭',
    summary: 'Quatro verbos modais, que também não mudam com a pessoa, seguidos direto do infinitivo, sem “te”.',
    sections: [
      {
        text: 'Igual a “wees” e “hê”, os modais não se conjugam: a mesma forma serve para “ek”, “jy”, “hulle”. O verbo principal vem logo depois, no infinitivo, sem nenhuma palavra entre eles.',
        table: {
          head: ['Modal', 'Sentido', 'Exemplo'],
          rows: [
            ['kan', 'poder, conseguir', 'Ek kan goed swem.'],
            ['moet', 'ter que, dever', "Ek moet 'n jas koop."],
            ['wil', 'querer', 'Ek wil huis toe gaan.'],
            ['mag', 'ter permissão', "Mag ek 'n vraag vra?"],
          ],
        },
        examples: [
          ["Ek moet 'n trui koop.", 'Eu tenho que comprar um suéter.'],
          ['Dit mag nie.', 'Não é permitido.'],
        ],
      },
    ],
    pitfalls: ['Pôr “te” antes do infinitivo depois do modal: diferente do neerlandês, em africâner não se usa nada entre os dois verbos.', 'Tentar conjugar o modal: “ek kan”, “jy kan” e “hulle kan” usam exatamente a mesma forma.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar um suéter”?', options: ["Ek moet 'n trui koop.", "Ek moet te koop 'n trui.", "Ek moet koop 'n trui."], answer: "Ek moet 'n trui koop.", explanation: 'O modal “moet” vem antes, e o infinitivo “koop” fica direto depois, sem “te”.' },
      { question: '“Mag ek…?” pergunta sobre…', options: ['permissão', 'capacidade', 'obrigação'], answer: 'permissão', explanation: '“Mag” expressa permissão, como “posso…?” em português.' },
    ],
  },
  {
    id: 'af-g7',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -er e -ste',
    emoji: '📈',
    summary: 'Para comparar, o africâner acrescenta -er ao adjetivo (e -ste no superlativo), com “as” para “do que”.',
    sections: [
      {
        text: 'A maioria dos adjetivos ganha -er no comparativo e -ste no superlativo (com “die” antes). “As” liga a comparação. Alguns adjetivos frequentes são irregulares.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['groot (grande)', 'groter', 'die grootste'],
            ['klein (pequeno)', 'kleiner', 'die kleinste'],
            ['goed (bom)', 'beter', 'die beste'],
            ['mooi (bonito)', 'mooier', 'die mooiste'],
          ],
        },
        examples: [
          ['My broer is groter as ek.', 'Meu irmão é mais alto do que eu.'],
          ['Sy is die beste verpleegkundige.', 'Ela é a melhor enfermeira.'],
        ],
      },
    ],
    pitfalls: ['Usar “as” em vez de “dan” como em neerlandês: em africâner a comparação usa “as”, não “dan”.', '“Goed” é irregular: não é “goeder”, e sim “beter”.'],
    quiz: [
      { question: 'Como se diz “meu irmão é mais alto do que eu”?', options: ['My broer is groter as ek.', 'My broer is groter dan ek.', 'My broer is meer groot as ek.'], answer: 'My broer is groter as ek.', explanation: 'O comparativo regular é “groter”, com “as” para “do que”.' },
      { question: 'Qual é o comparativo de “goed” (bom)?', options: ['beter', 'goeder', 'meer goed'], answer: 'beter', explanation: '“Goed” é irregular: beter, die beste.' },
    ],
  },
  {
    id: 'af-g8',
    level: 'A2.2',
    title: 'O diminutivo: -ie, -tjie e -etjie',
    emoji: '🤏',
    summary: 'O africâner usa muito o diminutivo, para dizer que algo é pequeno ou para soar mais afetuoso — bem mais do que o neerlandês.',
    sections: [
      {
        text: 'A terminação do diminutivo depende do fim da palavra: depois de certas consoantes e vogais usa-se “-ie”; depois de outras, “-tjie” ou “-etjie”. É preciso aprender caso a caso, mas alguns exemplos são muito comuns.',
        table: {
          head: ['Palavra', 'Diminutivo', 'Tradução'],
          rows: [
            ['huis (casa)', 'huisie', 'casinha'],
            ['boom (árvore)', 'boompie', 'arvorezinha'],
            ['kat (gato)', 'katjie', 'gatinho'],
            ['man (homem)', 'mannetjie', 'homenzinho'],
          ],
        },
        examples: [
          ['Die katjie is baie klein.', 'O gatinho é bem pequeno.'],
          ["Ons het 'n huisie by die see.", 'Nós temos uma casinha perto do mar.'],
        ],
      },
    ],
    pitfalls: ['Achar que o diminutivo só fala de tamanho: muitas vezes ele só torna a palavra mais afetuosa ou informal, sem o objeto ser pequeno de verdade.', 'Tentar adivinhar a terminação sem aprender palavra por palavra: as regras têm muitas excepções.'],
    quiz: [
      { question: 'Qual é o diminutivo de “kat” (gato)?', options: ['katjie', 'katie', 'katetjie'], answer: 'katjie', explanation: '“Kat” forma o diminutivo com “-jie”: katjie.' },
      { question: 'O diminutivo africâner serve para…', options: ['tamanho pequeno ou afeto', 'só o plural', 'só o tratamento formal'], answer: 'tamanho pequeno ou afeto', explanation: 'Além do tamanho, o diminutivo costuma soar carinhoso ou informal.' },
    ],
  },
];
