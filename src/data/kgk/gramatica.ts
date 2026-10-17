import type { GrammarTopic } from '../types';

/**
 * Gramática do kaiowá, do A1.1 ao A2.2. Revisão de 17/10/2026: tópicos conferidos no capítulo 3 de Eliane
 * B. L. de Barros, «Dicionário bilíngue kaiwá-português» (dissertação, UFMS, 2014, pp. 85–118), que resume
 * Valéria F. Cardoso, «Aspectos morfossintáticos da língua Kaiowá (Guarani)» (tese, Unicamp, 2008) e
 * apostilas de Loraine Bridgeman (SIL), e nos verbetes do dicionário (pp. 144–224). Páginas: as impressas.
 * Todos os exemplos são frases do dicionário. Correções da revisão: g2 (o adjetivo predicado leva i- na 3ª
 * pessoa: «óga porã» é “casa bonita”, não “a casa é bonita”) e g3 (os demonstrativos de Bridgeman: ko/kóa
 * perto de quem fala, pe/péa perto de quem ouve, upe/upéa longe dos dois; Barros 2014, p. 105, Quadro 9).
 */
export const GRAMMAR_KGK: GrammarTopic[] = [
  {
    id: 'kgk-g1',
    level: 'A1.1',
    title: 'As letras do kaiowá',
    emoji: '🔤',
    summary: 'Seis vogais orais e seis nasais, o “y” do guarani, uma parada na garganta marcada por apóstrofo e letras como x, nh, kw e gw.',
    sections: [
      {
        // Barros 2014, p. 88 (Quadro 2, vogais, segundo Cardoso), pp. 90–91 (ortografia de Bridgeman 2002) e
        // pp. 141–142 (pronúncia e acento)
        text: 'O kaiowá tem seis vogais orais (a, e, i, o, u, y) e as mesmas seis nasais (ã, ẽ, ĩ, õ, ũ, ỹ). O til vai só na última vogal nasal, e a nasalidade se espalha para as vogais de antes. O “y” é uma vogal do guarani, entre o “i” e o “u”. O apóstrofo marca uma pequena parada entre as vogais. O “b” é sempre “mb”, o “d” é sempre “nd”, o “j” soa “dj” e o “x” soa como em “xícara”. O acento cai quase sempre na última sílaba; por isso só se marca quando cai em outra, como em “óga” (casa).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['y', 'vogal própria do guarani', 'y (água), yvy (terra)'],
            ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal', 'peẽ (vocês), peteĩ (um)'],
            ['\'', 'pequena parada entre vogais', 'ha\'e (ele), ju\'i (sapo)'],
            ['x', 'como em “xícara”', 'xe (eu)'],
            ['nh', 'como em “ninho”', 'nhane (nós)'],
            ['kw, gw', 'como em “quarto” e “guarda”', 'kwarahy (sol), gwyra (pássaro)'],
          ],
        },
        examples: [
          // Benites 2022, grafia convertida; Barros 2014, p. 196
          ['Agwyjevete!', 'Muito obrigado(a)!'],
          ['Aju jevy xe róga-py.', 'Eu vim de novo para a minha casa.'],
        ],
      },
      {
        // Barros 2014, p. 91 (Quadro 5) e p. 92 (Cardoso 2008, pp. 19–20: as escolas da Grande Dourados usam a
        // convenção ortográfica do guarani do Paraguai)
        text: 'Há duas maneiras de escrever o kaiowá. A do SIL, usada neste curso, em cartilhas e no dicionário de Barros, escreve nh, gw, kw e x. Muitas escolas da região de Dourados usam a do guarani do Paraguai, que escreve ñ, gu, ku e ch. É a mesma língua: “nhe\'ẽ” e “ñe\'ẽ” são a mesma palavra.',
        table: {
          head: ['SIL (este curso)', 'Convenção paraguaia'],
          rows: [
            ['nh', 'ñ'],
            ['gw', 'gu'],
            ['kw', 'ku'],
            ['x', 'ch'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ignorar o apóstrofo: ele é uma consoante, uma parada de verdade no meio da palavra.',
      'Ler o “x” como em “táxi”: no kaiowá ele soa sempre como em “xícara”.',
      'Achar que “nhe\'ẽ” e “ñe\'ẽ” são palavras diferentes: é a mesma palavra em duas grafias.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo (\') marca no kaiowá?',
        options: ['Uma pequena parada entre as vogais', 'Que a vogal é nasal', 'Nada'],
        answer: 'Uma pequena parada entre as vogais',
        explanation: 'É a oclusiva glotal, como em “ha\'e” (ele, ela).',
      },
      {
        question: 'Na grafia paraguaia, como se escreve o “gw” do curso?',
        options: ['gu', 'ch', 'ñ'],
        answer: 'gu',
        explanation: '“Gwyra” (pássaro) aparece também como “guyra”.',
      },
    ],
  },
  {
    id: 'kgk-g2',
    level: 'A1.1',
    title: 'Pronomes: nhane × ore',
    emoji: '🙋',
    summary: 'Um “nós” que inclui quem ouve (nhane, nhande) e outro que não inclui (ore); o nome descreve sem verbo “ser”, e o adjetivo predicado leva i- na 3ª pessoa.',
    sections: [
      {
        // Barros 2014, p. 102 (Quadro 8, adaptado de Cardoso 2008, p. 104)
        text: 'Os pronomes pessoais do kaiowá distinguem dois “nós”: “nhande” ou “nhane” inclui a pessoa com quem se fala; “ore” não inclui. Os mesmos pronomes servem para “meu”, “teu”, “nosso”: “xe sy” é “minha mãe”.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['xe', 'eu; meu, minha'],
            ['nde, ne', 'tu, você; teu, tua'],
            ['ha\'e', 'ele, ela'],
            ['nhande, nhane', 'nós, nosso (com quem ouve)'],
            ['ore', 'nós, nosso (sem quem ouve)'],
            ['peẽ, pende, pene', 'vocês; de vocês'],
            ['ha\'e kwéry, hikwái', 'eles, elas'],
          ],
        },
        examples: [
          // Barros 2014, p. 192 e p. 196
          ['Ou nhane pytygwõ.', 'Eles vieram nos ajudar (a todos nós, com você).'],
          ['Orojapo ore kyha.', 'Nós (sem você) fazíamos nossas redes.'],
        ],
      },
      {
        // Barros 2014, p. 99 (adjetivo atributivo: avati morotĩ; predicativo: nde pohýi eterei), p. 112 (Quadro 16:
        // i- na 3ª pessoa), p. 199 (Pene mitã) e p. 217 (Ituja-ma óga)
        text: 'Não há verbo “ser”: pronome e nome lado a lado já formam a frase, como em “Pene mitã” (vocês são crianças). O adjetivo logo depois do nome o descreve: “avati morotĩ” é “milho branco”. Para dizer que algo “é” ou “está” de um jeito, o adjetivo funciona como verbo: com “xe”, “nde” etc. nas pessoas do diálogo e com o prefixo i- na 3ª pessoa: “Ituja-ma óga”, “a casa já estava velha”.',
        examples: [
          ['Pene mitã.', 'Vocês são crianças.'],
          ['Avati morotĩ.', 'Milho branco.'],
          // Barros 2014, p. 201
          ['Xe pohýi.', 'Eu sou pesado.'],
          ['Ituja-ma óga.', 'A casa já estava velha.'],
        ],
      },
    ],
    pitfalls: [
      'Trocar “nhane” por “ore”: muda quem está incluído no “nós”.',
      'Traduzir “óga porã” como “a casa é bonita”: é “casa bonita”. Para “é bonita”, o adjetivo leva i-: “iporã”.',
    ],
    quiz: [
      { question: '“Nhane” é usado quando…', options: ['quem ouve está incluído no “nós”', 'quem ouve não está incluído', 'se fala de uma pessoa só'], answer: 'quem ouve está incluído no “nós”', explanation: 'Para deixar quem ouve de fora, usa-se “ore”.' },
      { question: 'Como se diz “a casa já estava velha”?', options: ['Ituja-ma óga.', 'Óga tuja.', 'Óga ha\'e tuja.'], answer: 'Ituja-ma óga.', explanation: 'Na 3ª pessoa, o adjetivo que funciona como predicado leva i-. “Óga tuja” seria só “casa velha”.' },
    ],
  },
  {
    id: 'kgk-g3',
    level: 'A1.2',
    title: 'Sem artigos: demonstrativos e a ordem das palavras',
    emoji: '👉',
    summary: 'O kaiowá não tem “o, a, um”: os demonstrativos dizem se a coisa está perto de quem fala, de quem ouve ou longe dos dois; o numeral vem antes do nome e o adjetivo, depois.',
    sections: [
      {
        // Barros 2014, p. 102 (ko yvy, upe va'e), p. 105 (Quadro 9, de Bridgeman: kóa perto de 1, péa perto de 2,
        // upéa distante de 1 e 2), p. 173 (ko1), p. 198 (pe2) e p. 218 (upe, upéa); p. 100 (ordem)
        text: 'Não há palavras para “o, a, um, uma”. Os demonstrativos marcam a distância: “ko” (este) aponta para perto de quem fala, “pe” (esse) para perto de quem ouve e “upe” (aquele) para longe dos dois. Sozinhos, sem o nome, aparecem como “kóa” (isto), “péa” (isso) e “upéa” (aquilo). O numeral vem antes do nome (“mokõi jasy”, dois meses); o adjetivo vem depois (“gwyra porã”, pássaro bonito).',
        table: {
          head: ['Com o nome', 'Sozinho', 'Distância'],
          rows: [
            ['ko', 'kóa', 'perto de quem fala (este, isto)'],
            ['pe', 'péa', 'perto de quem ouve (esse, isso)'],
            ['upe', 'upéa', 'longe dos dois (aquele, aquilo)'],
          ],
        },
        examples: [
          // Barros 2014, p. 102, p. 175, p. 155 e p. 187
          ['Ko yvy.', 'Esta terra.'],
          ['Pe kunhataĩ-rehe ojepota mborevi.', 'A anta se apaixonou por essa moça.'],
          ['Ndahasýiry erejapo upéa.', 'Não é difícil fazer isso.'],
          ['Mokõi jasy oky.', 'Choveu por dois meses.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “o, a, um”: use um demonstrativo só quando quiser apontar.',
      'Pôr o adjetivo antes do nome: no kaiowá ele vem depois. O numeral, ao contrário, vem antes.',
    ],
    quiz: [
      { question: 'Qual é a ordem certa para “dois meses”?', options: ['Mokõi jasy.', 'Jasy mokõi.', 'Jasy porã mokõi.'], answer: 'Mokõi jasy.', explanation: 'O numeral vem antes do nome.' },
      { question: '“Upe” aponta para algo…', options: ['longe de quem fala e de quem ouve', 'perto de quem fala', 'perto de quem ouve'], answer: 'longe de quem fala e de quem ouve', explanation: 'Perto de quem fala é “ko”; perto de quem ouve, “pe”.' },
    ],
  },
  {
    id: 'kgk-g4',
    level: 'A1.2',
    title: 'Tempo no nome: -kwe e -rã',
    emoji: '⏳',
    summary: 'O nome também tem passado e futuro: “xe rogakwe” é “minha antiga casa” e “xe rogarã”, “minha futura casa”.',
    sections: [
      {
        // Barros 2014, p. 95 (xe rogakwe, xe rogarã, -re), p. 99 (citando Cardoso 2008, pp. 47–48: hogakwe, xe
        // mba'erãgwe) e p. 176 (-kwe)
        text: 'No kaiowá, o nome pode ter tempo. O sufixo “-kwe” diz que algo já foi o que o nome diz, mas não é mais: “xe rogakwe” é “minha antiga casa”. O sufixo “-rã” diz que algo ainda vai ser: “xe rogarã” é “minha futura casa”. Cardoso (2008) registra também “-rãgwe”, o que ia ser e não foi: “xe mba\'erãgwe”, “a coisa que seria minha”.',
        table: {
          head: ['Sufixo', 'Sentido', 'Exemplo'],
          rows: [
            ['-kwe', 'já foi, não é mais', 'xe rogakwe (minha antiga casa)'],
            ['-rã', 'ainda vai ser', 'xe rogarã (minha futura casa)'],
            ['-rãgwe', 'ia ser, mas não foi', 'xe mba\'erãgwe (a coisa que seria minha)'],
          ],
        },
        examples: [
          ['Xe rogakwe.', 'Minha antiga casa.'],
          ['Nde kwatiarã.', 'Teu futuro livro.'],
          // Barros 2014, p. 166
          ['Gwogarã ojapo pindo-gwi.', 'Ele fez a sua futura casa de folha de coqueiro.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que só o verbo tem passado e futuro: no kaiowá o nome também tem.',
      'Traduzir “-kwe” como um passado qualquer: ele diz que algo deixou de ser o que era (uma antiga casa).',
    ],
    quiz: [
      { question: 'O que “-rã” indica num nome?', options: ['Que algo ainda vai ser', 'Que algo já foi', 'Plural'], answer: 'Que algo ainda vai ser', explanation: '“Xe rogarã” é “minha futura casa”.' },
      { question: '“Xe rogakwe” quer dizer…', options: ['minha antiga casa', 'minha futura casa', 'minhas casas'], answer: 'minha antiga casa', explanation: '“-kwe” é o passado do nome.' },
    ],
  },
  {
    id: 'kgk-g5',
    level: 'A2.1',
    title: 'O verbo: a-, ere-, o-, ja-, oro-, pe-',
    emoji: '🏃',
    summary: 'O verbo muda no começo, com um prefixo para cada pessoa; ir, vir e dizer são irregulares.',
    sections: [
      {
        // Barros 2014, p. 107 (Quadro 10) e p. 108 (Quadro 11); nha- com verbos nasais, p. 106–107
        text: 'Um prefixo diz quem faz a ação. O prefixo de “nós com você” é “ja-” nos verbos orais e “nha-” nos nasais (“nhamba\'apo”). O mesmo “o-” serve para ele, ela, eles e elas.',
        table: {
          head: ['Pessoa', 'Prefixo', 'comer (karu)', 'trabalhar (mba\'apo)'],
          rows: [
            ['eu', 'a-', 'akaru', 'amba\'apo'],
            ['você', 'ere-', 'erekaru', 'eremba\'apo'],
            ['nós, com você', 'ja- / nha-', 'jakaru', 'nhamba\'apo'],
            ['nós, sem você', 'oro-', 'orokaru', 'oromba\'apo'],
            ['vocês', 'pe-', 'pekaru', 'pemba\'apo'],
            ['ele(s), ela(s)', 'o-', 'okaru', 'omba\'apo'],
          ],
        },
        examples: [
          // Barros 2014, p. 174, p. 180 e p. 173
          ['Kokwe-py omba\'apo.', 'Ele trabalha na roça.'],
          ['Nhamba\'apo pohýi ave opa mba\'e.', 'Trabalhamos duro também em todas as coisas.'],
          ['Oroke arã ore kyha-py.', 'Dormiremos nas nossas redes.'],
        ],
      },
      {
        // Barros 2014, p. 111 (Quadro 15, adaptado de Guasch 1944), p. 170 (ju: 3ª pessoa ou) e p. 160 (ho)
        text: 'Três verbos muito usados são irregulares: ir, vir e dizer.',
        table: {
          head: ['Pessoa', 'ir', 'vir', 'dizer'],
          rows: [
            ['eu', 'aha', 'aju', 'ha\'e'],
            ['você', 'ereho', 'ereju', 'ere'],
            ['nós, com você', 'jaha', 'jaju', 'ja\'e'],
            ['nós, sem você', 'oroho', 'oroju', 'oro\'e'],
            ['vocês', 'peho', 'peju', 'peje'],
            ['ele(s), ela(s)', 'oho', 'ou', 'he\'i'],
          ],
        },
        examples: [
          // Barros 2014, p. 170 e p. 160
          ['Xe sy ndive aju.', 'Eu vim com minha mãe.'],
          ['Oroju oroporahéi.', 'Nós viemos e cantamos.'],
          ['Upéi oho osy ha-py.', 'Então ele foi para a casa da mãe dele.'],
        ],
      },
      {
        // Barros 2014, p. 108–109 (classe Ai: aipyhy) e p. 109 (Quadro 13: ahexa, ahendu); p. 176 (kwaa: aikwaa)
        text: 'Alguns verbos põem um “i” depois do prefixo: “aikwaa” (eu sei), “oipyhy” (ele pega). Outros começam por “h”: “ahexa” (eu vejo), “ahendu” (eu ouço).',
        table: {
          head: ['Pessoa', 'saber (kwaa)', 'ver (hexa)', 'ouvir (hendu)'],
          rows: [
            ['eu', 'aikwaa', 'ahexa', 'ahendu'],
            ['ele(s), ela(s)', 'oikwaa', 'ohexa', 'ohendu'],
            ['nós, sem você', 'oroikwaa', 'orohexa', 'orohendu'],
          ],
        },
        examples: [
          // Barros 2014, p. 158
          ['Ha\'e kwéry ohendu mombyry-gwi.', 'Eles ouvem de longe.'],
          // Barros 2014, p. 159
          ['Kagware ohexa ranhe jagwarete-pe.', 'O tamanduá viu a onça primeiro.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar a terminação do verbo, como no português: no kaiowá a pessoa vem no começo.',
      'Dizer “aho” para “eu vou”: “ir” é irregular, e “eu vou” é “aha”.',
      'Trocar “ja-” por “oro-”: “jakaru” inclui quem ouve, “orokaru” não inclui.',
    ],
    quiz: [
      { question: 'Como se diz “eu trabalho”?', options: ['amba\'apo', 'omba\'apo', 'nhamba\'apo'], answer: 'amba\'apo', explanation: 'a- é o prefixo de “eu”.' },
      { question: 'Qual é a forma de “ele vem”?', options: ['ou', 'oju', 'aju'], answer: 'ou', explanation: '“Vir” é irregular na 3ª pessoa: “ou”.' },
      { question: '“Oroju” quer dizer…', options: ['nós viemos (sem você)', 'nós viemos (com você)', 'vocês vieram'], answer: 'nós viemos (sem você)', explanation: 'oro- é o “nós” que deixa quem ouve de fora.' },
    ],
  },
  {
    id: 'kgk-g6',
    level: 'A2.1',
    title: 'De quem é? xe róga, hóga, gwóga',
    emoji: '🏠',
    summary: 'Muitos nomes ganham um r- depois do dono (xe róga) e um h- na 3ª pessoa (hóga); e o kaiowá separa “a casa dele mesmo” (gwóga) de “a casa de outro” (hóga).',
    sections: [
      {
        // Barros 2014, p. 94 (sy, nde sy, isy, osy; óga, xe róga, Elídio róga, hóga, gwóga) e p. 97 (Quadro 6:
        // nomes de posse obrigatória, como sy e hesa)
        text: 'Para dizer de quem é, o dono vem antes: “xe sy” (minha mãe). Nomes como “óga” (casa) ganham um r- depois do dono: “xe róga” (minha casa), “Elídio róga” (a casa do Elídio). Na 3ª pessoa, “óga” vira “hóga” e “sy” vira “isy”. Alguns nomes, como “sy” (mãe) e “tesa” (olho), quase nunca aparecem sem dono.',
        table: {
          head: ['Dono', 'casa', 'mãe'],
          rows: [
            ['eu', 'xe róga', 'xe sy'],
            ['você', 'nde róga', 'nde sy'],
            ['o Elídio', 'Elídio róga', '—'],
            ['ele (outra pessoa)', 'hóga', 'isy'],
            ['ele mesmo (o sujeito)', 'gwóga', 'osy'],
          ],
        },
        examples: [
          // Barros 2014, p. 196, p. 166 e p. 160
          ['Aju jevy xe róga-py.', 'Eu vim de novo para a minha casa.'],
          ['Ajevy jari róga-gwi.', 'Voltei da casa da vovó.'],
          ['Upéi oho osy ha-py.', 'Então ele foi para a casa da (própria) mãe.'],
        ],
      },
      {
        // Barros 2014, p. 94 e nota 79 (a marca de correferência não aparece nas outras línguas guarani), p. 98
        // (Quadro 7; tembireko: xe rembireko, gwembireko, hembireko), p. 151 (gw-) e p. 154 (h-)
        text: 'Em português, “ele levou a casa dele” pode ser a casa dele mesmo ou a de outra pessoa. O kaiowá separa as duas coisas: gw- (ou o-) quando o dono é o próprio sujeito da frase, h- (ou i-) quando é outra pessoa. Segundo Barros (2014), essa distinção é própria do kaiowá entre as línguas guarani.',
        table: {
          head: ['Forma', 'Sentido'],
          rows: [
            ['xe rembireko', 'minha esposa'],
            ['gwembireko', 'a esposa dele mesmo (do sujeito)'],
            ['hembireko', 'a esposa dele (de outra pessoa)'],
          ],
        },
        examples: [
          // Barros 2014, p. 151, p. 151 e p. 154
          ['Ha\'e ogweraha gwóga.', 'Ele levou a própria casa.'],
          ['He\'i gwembireko-pe: aha-ta anhemitỹ.', 'Ele disse à própria esposa: vou plantar.'],
          ['Ha hembireko katu he\'i íxupe.', 'Mas a esposa dele lhe respondeu.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o r- depois do dono: é “xe róga”, não “xe óga”.',
      'Usar “hóga” quando a casa é do próprio sujeito: “ele mora na própria casa” leva “gwóga”.',
    ],
    quiz: [
      { question: 'Como se diz “minha casa”?', options: ['xe róga', 'xe óga', 'hóga'], answer: 'xe róga', explanation: '“Óga” ganha r- depois do dono.' },
      { question: 'Em “Oiko xe sy gwóga-py”, de quem é a casa?', options: ['da própria mãe', 'de outra pessoa', 'minha'], answer: 'da própria mãe', explanation: 'gw- indica que o dono é o sujeito da frase, a mãe.' },
      { question: 'O que “hembireko” quer dizer?', options: ['a esposa dele (de outra pessoa)', 'a esposa dele mesmo', 'minha esposa'], answer: 'a esposa dele (de outra pessoa)', explanation: 'h- marca um dono que não é o sujeito; “gwembireko” é a esposa do próprio sujeito.' },
    ],
  },
  {
    id: 'kgk-g7',
    level: 'A2.2',
    title: 'Dizer não: nd(a)-…-i, ani, naháni',
    emoji: '🙅',
    summary: 'O verbo negado fica entre nd(a)- e -i; numa ordem, o não é “ani”; como resposta, “naháni”.',
    sections: [
      {
        // Barros 2014, p. 117 (Quadro 20: n(d)(a)-...-i, Ndaipukúi), p. 189 (nd- -i, n- -i), p. 89 (ikatu →
        // ndaikatúi); Cardoso 2008, seção 4.2.5.4 (morfema descontínuo de negação na-...-i)
        text: 'Para negar um verbo, ele fica no meio de duas partes: nd- (ou nda-, n-) no começo e -i no fim. Quando o -i é a vogal tônica, ganha acento: “ndaikatúi”. Com o “xe” dos verbos de estado, a negação também envolve o pronome: “naxe mandu\'a porãi” (não me lembro bem).',
        table: {
          head: ['Afirmativo', 'Negativo'],
          rows: [
            ['ikatu (é possível)', 'ndaikatúi (não consigo)'],
            ['ogwata (andam)', 'ndogwatáiry (não andam; o -ry final não muda o sentido)'],
            ['oikwaa (sabem)', 'ndoikwaái (não sabem)'],
            ['ha\'u (eu como)', 'nda\'úi (não como)'],
            ['omano (morreram)', 'nomanói (não morreram)'],
            ['ome\'ẽ (dão)', 'nome\'ẽi (não dão)'],
          ],
        },
        examples: [
          // Barros 2014, p. 211, p. 163, p. 150 e p. 179
          ['Xe nda\'úi so\'o.', 'Eu não como carne.'],
          ['Ndoroikwaái mba\'e pa orojapo-ta.', 'Não sabíamos o que fazer.'],
          ['Nome\'ẽi íxupe so\'o eterei.', 'Não lhe dão muita carne.'],
          ['Naxe mandu\'a porãi-ma.', 'Já não me lembro bem.'],
        ],
      },
      {
        // Barros 2014, p. 146 (ani: ordens negativas), p. 177 (Ani erekyhyje), p. 193 (Ani erenheapirõ eterei), p. 189
        // (naháni), p. 181 (mba'eve) e p. 149 (avave)
        text: 'Numa ordem ou proibição, o “não” é “ani”, antes do verbo: “Ani erekyhyje” (não tenha medo). Como resposta a uma pergunta, o “não” é “naháni”. “Nada” é “mba\'eve” e “ninguém” é “avave”, e aparecem com o verbo negado.',
        examples: [
          ['Ani erekyhyje.', 'Não tenha medo.'],
          ['Ani pende are.', 'Não demorem.'],
          ['Naháni, he\'i.', '“Não”, ele respondeu.'],
          ['Nda\'úi arã mba\'eve.', 'Não vou comer nada.'],
          ['Ndaiporivéi avave.', 'Não havia mais ninguém.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr só o começo ou só o fim: a negação tem duas partes, nd(a)- e -i.',
      'Usar nd-…-i numa ordem: “não tenha medo” é “Ani erekyhyje”, com “ani”.',
    ],
    quiz: [
      { question: 'Como se nega “ikatu” (é possível)?', options: ['ndaikatúi', 'ani ikatu', 'ikatu naháni'], answer: 'ndaikatúi', explanation: 'O verbo fica entre nd(a)- e -i.' },
      { question: 'Como se diz “não tenha medo”?', options: ['Ani erekyhyje.', 'Nderekyhyjéi naháni.', 'Erekyhyje-ma.'], answer: 'Ani erekyhyje.', explanation: 'Nas ordens negativas usa-se “ani”.' },
      { question: 'Qual “não” serve de resposta a uma pergunta?', options: ['naháni', 'ani', 'nd-…-i'], answer: 'naháni', explanation: '“Naháni, he\'i”: “não”, ele respondeu.' },
    ],
  },
  {
    id: 'kgk-g8',
    level: 'A2.2',
    title: 'Perguntas com pa; -ta (vou), -ma (já) e -se (quero)',
    emoji: '❓',
    summary: 'A palavra de pergunta vem no começo, muitas vezes com “pa”; pequenos sufixos dizem “vou”, “já” e “quero”.',
    sections: [
      {
        // Barros 2014, p. 103 (pronomes interrogativos), p. 114 (Quadro 17: advérbios interrogativos), p. 117
        // (Quadro 20: pa, tipo, nipo), p. 198 (pa) e p. 216 (tipo)
        text: 'A palavra de pergunta vem no começo, e muitas vezes logo depois dela vem “pa”, que marca a pergunta. Para perguntas de sim ou não, há “tipo”: “Ere\'use tipo ka\'ay?” (você quer beber mate?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['mamo', 'onde, aonde', 'Mamo nde sy oho?'],
            ['kipy', 'aonde, onde (lugar certo)', 'Kipy ereho-ta nde?'],
            ['máva', 'quem', 'Máva pa a-py oĩ-ma?'],
            ['mba\'e', 'o quê', 'Mba\'e pa ojehu nde-vy?'],
            ['mba\'éixa', 'como', 'Mba\'éixa pa ereiko?'],
            ['mbovy', 'quantos', 'Mbovy ánho erereko ko\'ánga?'],
            ['ma\'erã', 'por quê', 'Ma\'erã erekyhyje xéhegwi?'],
          ],
        },
        examples: [
          // Barros 2014, p. 184 e p. 218
          ['Mbovy ánho erereko ko\'ánga?', 'Quantos anos você tem agora?'],
          ['Ere\'use tipo ka\'ay?', 'Você quer beber mate?'],
        ],
      },
      {
        // Barros 2014, p. 117 (Quadro 20: -ta, -ma), p. 213 (ta), p. 179 (ma), p. 95 (-se: ho'use) e p. 211 (-se),
        // p. 219 (va'ekwe) e p. 147 (arã)
        text: 'Depois do verbo, pequenos sufixos mudam o sentido: “-ta” diz o que se vai fazer (“amombe\'u-ta”, vou contar); “-ma” diz que já aconteceu (“ereju-ma”, você já veio); “-se” diz que se quer (“ho\'use”, ele quer comer). “Va\'ekwe” marca o passado e “arã”, um futuro menos certo.',
        table: {
          head: ['Marca', 'Sentido', 'Exemplo'],
          rows: [
            ['-ta', 'vou fazer (intenção)', 'amombe\'u-ta (vou contar)'],
            ['-ma', 'já', 'ereju-ma (você já veio)'],
            ['-se', 'querer', 'ho\'use (ele quer comer)'],
            ['va\'ekwe', 'passado', 'oiko va\'ekwe (nasceram)'],
            ['arã', 'futuro, intenção', 'ajogwa arã (pretendo comprar)'],
          ],
        },
        examples: [
          // Barros 2014, p. 174, p. 179, p. 211, p. 185 e p. 169
          ['Ko\'ẽ ramo aha-ta Tanambi-py.', 'Amanhã vou para Tanambi.'],
          ['Ore gwaigwĩ-ma.', 'Já somos mulheres velhas.'],
          ['Amombe\'use kóa ko nhe\'ẽ.', 'Quero contar esta história.'],
          ['Ahapeko meme voi xe sy-pe.', 'Eu sempre visito minha mãe.'],
          ['Ajogwa arã kure.', 'Pretendo comprar porco.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr a palavra de pergunta no fim, como em “você vai aonde?”: no kaiowá ela vem no começo.',
      'Confundir “-ta” (vou fazer) com “-ma” (já fiz).',
    ],
    quiz: [
      { question: 'O que “pa” faz em “Mba\'éixa pa ereiko?”', options: ['Marca a pergunta', 'Nega o verbo', 'Indica o futuro'], answer: 'Marca a pergunta', explanation: 'Vem logo depois da palavra de pergunta.' },
      { question: '“Aha-ta” quer dizer…', options: ['vou', 'já fui', 'quero ir'], answer: 'vou', explanation: '“-ta” marca a intenção, o que se vai fazer.' },
      { question: 'Como se pergunta “quem estava aqui?”', options: ['Máva pa a-py oĩ-ma?', 'Mamo pa a-py oĩ-ma?', 'A-py oĩ-ma máva?'], answer: 'Máva pa a-py oĩ-ma?', explanation: '“Máva” é “quem”, no começo, seguido de “pa”.' },
    ],
  },
];
