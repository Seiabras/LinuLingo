import type { GrammarTopic } from '../types';

/**
 * Gramática do kaiowá, do A1.1 ao B1.4 (o B1 entrou em 17/10/2026; ver o bloco B1 no fim). Revisão de 17/10/2026: tópicos conferidos no capítulo 3 de Eliane
 * B. L. de Barros, «Dicionário bilíngue kaiwá-português» (dissertação, UFMS, 2014, pp. 85–118), que resume
 * Valéria F. Cardoso, «Aspectos morfossintáticos da língua Kaiowá (Guarani)» (tese, Unicamp, 2008) e
 * apostilas de Loraine Bridgeman (SIL), e nos verbetes do dicionário (pp. 144–224). Páginas: as impressas.
 * Todos os exemplos são frases do dicionário. Correções da revisão: g2 (o adjetivo predicado leva i- na 3ª
 * pessoa: «óga porã» é “casa bonita”, não “a casa é bonita”) e g3 (os demonstrativos: ko/kóa perto de quem
 * fala; no Quadro 9 de Barros 2014, p. 105, tirado de Bridgeman, péa e upéa ficam os dois na linha “perto de
 * quem ouve” e a linha “distante de 1 e 2” está vazia — conferido na imagem da página; “lá longe” é amo).
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
          // Benites 2021, grafia convertida; Barros 2014, p. 196
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
    summary: 'O kaiowá não tem “o, a, um”: os demonstrativos dizem se a coisa está perto de quem fala ou perto de quem ouve, e “amo” aponta para longe; o numeral vem antes do nome e o adjetivo, depois.',
    sections: [
      {
        // Barros 2014, p. 102 (ko yvy, upe va'e), p. 105 (Quadro 9, de Bridgeman: kóa e ko va'e “perto 1”; péa e
        // upéa “perto 2”; a linha “distante do 1, 2” está vazia), p. 173 (ko1: próximo ao falante), p. 198 (pe2:
        // esse), p. 218 (upe: aquele; upéa: isso, aquilo), p. 146 (amo: lá longe, com gesto); p. 100 (ordem)
        text: 'Não há palavras para “o, a, um, uma”. Os demonstrativos apontam: “ko” (este) é o que está perto de quem fala; “pe” (esse) e “upe” (esse, aquele) apontam para fora do lugar de quem fala. Sozinhos, sem o nome, aparecem como “kóa” (isto), “péa” (isso) e “upéa” (isso, aquilo). No quadro de Loraine Bridgeman que Barros reproduz, “péa” e “upéa” ficam os dois do lado de quem ouve. Para “lá longe”, apontando com a mão, usa-se “amo”: “Amo ou jagwarete” (lá longe vem a onça). O numeral vem antes do nome (“mokõi jasy”, dois meses); o adjetivo vem depois (“gwyra porã”, pássaro bonito).',
        table: {
          head: ['Com o nome', 'Sozinho', 'Para onde aponta'],
          rows: [
            ['ko', 'kóa', 'perto de quem fala (este, isto)'],
            ['pe', 'péa', 'perto de quem ouve (esse, isso)'],
            ['upe', 'upéa', 'esse, aquele (do lado de quem ouve, no quadro de Bridgeman)'],
            ['amo', '—', 'lá longe (com um gesto da mão)'],
          ],
        },
        examples: [
          // Barros 2014, p. 102, p. 175, p. 155, p. 146 e p. 187
          ['Ko yvy.', 'Esta terra.'],
          ['Pe kunhataĩ-rehe ojepota mborevi.', 'A anta se apaixonou por essa moça.'],
          ['Ndahasýiry erejapo upéa.', 'Não é difícil fazer isso.'],
          ['Amo ou jagwarete.', 'Lá longe vem a onça.'],
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
      { question: '“Ko” aponta para algo…', options: ['perto de quem fala', 'lá longe, com um gesto', 'perto de quem ouve'], answer: 'perto de quem fala', explanation: '“Ko yvy” é “esta terra”, a terra de quem fala. Perto de quem ouve é “pe”; lá longe é “amo”.' },
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
          // Barros 2014, p. 166 (Barros traduz “Ele fez a sua casa de folha de coqueiro”; o -rã marca a casa ainda
          // por fazer, como em xe rogarã)
          ['Gwogarã ojapo pindo-gwi.', 'Ele fez a sua casa (gwogarã: a casa que ia existir) de folha de coqueiro.'],
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
        // Barros 2014, p. 94 e nota 79 (para ela, a marca de correferência não aparece nas outras línguas guarani;
        // Cardoso 2008, p. 39, Quadro 6, monta o prefixo o- “de modo similar” a Seki, para o kamaiurá, e a
        // Velazquez, para o guarani paraguaio), p. 98
        // (Quadro 7; tembireko: xe rembireko, gwembireko, hembireko), p. 151 (gw-) e p. 154 (h-)
        text: 'Em português, “ele levou a casa dele” pode ser a casa dele mesmo ou a de outra pessoa. O kaiowá separa as duas coisas: gw- (ou o-) quando o dono é o próprio sujeito da frase, h- (ou i-) quando é outra pessoa. Barros (2014) chega a dizer que isso não existe nos outros guaranis; Cardoso (2008), porém, descreve esses prefixos em paralelo com o kamaiurá e o guarani paraguaio.',
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
            ['ogwata (andam)', 'ndogwatáiry (não andam; nos relatos do dicionário o -i aparece muitas vezes como -iry)'],
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
          // Barros 2014, p. 174, p. 179, p. 191–192 (oração tirada de “Upe peve xe amombe'use kóa ko nhe'ẽ”, “até aí
        // que quero contar essa história”), p. 185 e p. 169
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

  // ═══ B1 (17/10/2026). Tópicos de Cardoso (2008), caps. 4.2.4–4.2.5, 4.6 e 6.2, com os exemplos do dicionário de
  // Barros (2014), que já estão na grafia do curso. Os exemplos de Cardoso ficam de fora: estão em transcrição
  // fonológica, e a conversão para a grafia do SIL não é segura. Páginas de Cardoso: as impressas na tese. ═══
  {
    id: "kgk-g9",
    level: "B1.1",
    title: "Quando, se, depois, para: ramo, rire, mboyve, jave, hagwã",
    emoji: "🔗",
    summary: "A palavra que liga as orações vem no fim da oração que depende, depois do verbo: “Ko'ẽ jevy ramo oho”, quando amanheceu de novo, ele foi.",
    sections: [
      {
        // Barros 2014, pp. 115–116 (Quadro 19, conjunções subordinativas, e os exemplos); Cardoso 2008, p. 122
        // (as partículas interclausais vêm “após o predicado da oração dependente”)
        text: "Em português, “quando”, “depois que” e “para” abrem a oração. No kaiowá, a palavra que liga vem no fim da oração que depende, logo depois do verbo. “Ko'ẽ jevy ramo oho” é, palavra por palavra, “amanhecer de novo quando, ele foi”. A oração que depende costuma vir primeiro, e a principal depois.",
        table: {
          head: ["Palavra", "Sentido", "Exemplo"],
          rows: [
            ["ramo", "quando; se", "Ko'ẽ jevy ramo oho."],
            ["jave", "enquanto, quando (ao mesmo tempo)", "Otopa jave ha'e oĩ-ma y mbyte-py."],
            ["rire", "depois de", "Peteĩ jasy rire ha'e kwéry ojapo kagwĩ."],
            ["mboyve", "antes de", "Ohupyty y mboyve, ke'y-pe jakare oporandu jevy."],
            ["hagwã", "para, a fim de", "Ogwejy ko yvy ári opyta hagwã."],
            ["jepe", "embora, mesmo que", "Ojo'o ramo jepe ndikatúi ha'e onheresende."],
            ["-gwi", "porque, por causa de", "Isy hasy-gwi, oho pya'e eterei."],
          ],
        },
        examples: [
          // Barros 2014, p. 206, p. 167, p. 209, p. 184, p. 155 e p. 168
          ["Ko'ẽ jevy ramo oho.", "Quando amanheceu de novo, ele foi embora."],
          ["Otopa jave ha'e oĩ-ma y mbyte-py.", "Quando a encontraram, ela já estava no meio do rio."],
          ["Upéi peteĩ jasy rire ha'e kwéry ojapo kagwĩ.", "Então, depois de um mês, eles faziam a chicha."],
          ["Ohupyty y mboyve, ke'y-pe jakare oporandu jevy.", "Antes de chegar à água, o jacaré perguntou de novo ao irmão mais velho."],
          ["Ogwejy ko yvy ári opyta hagwã.", "Desceram para ficar aqui na terra."],
          ["Ojo'o ramo jepe ndikatúi ha'e onheresende.", "Mesmo que ele cave, não consegue se salvar."],
        ],
      },
      {
        // Barros 2014, p. 206 (ramo1: “se” e “quando”) e p. 224 (yvytu); Cardoso 2008, p. 158 (ramo marca o subjuntivo
        // e forma orações de tempo, causa e condição) e pp. 158–159 (jave, “quando, no momento que”, não leva o verbo
        // para o subjuntivo)
        text: "“Ramo” serve para “quando” e para “se”: quem decide é o contexto. Para Valéria Cardoso, “ramo” marca o modo subjuntivo e aparece em orações de tempo, de causa e de condição. “Jave” também diz “quando”, mas no sentido de “no momento em que”, e não muda o modo do verbo.",
        examples: [
          // Barros 2014, p. 206 (dois exemplos), p. 224 (Barros traduz “Se matarmos a borboleta…”, mas o verbete xirino,
          // p. 221, é “beija-flor”), p. 194 e p. 211
          ["Ndereipotái ramo xiripa, ame'ẽ-ta xe poxíto.", "Se você não quiser o cinto, eu te darei meu poncho."],
          ["Jy'y ojekwaa-ma ramo.", "Se o arco-íris aparecer para você (você fica feliz)."],
          ["Jajuka ramo xirino ou yvytugwasu oity nhande róga.", "Se matarmos o beija-flor, vem um vento forte derrubar a nossa casa."],
          ["Kyha orojapo ramo oronheno.", "Quando fazemos as redes, deitamos nelas."],
          ["Xe oky eterei jave ndikatúi asẽ xe róga-gwi.", "Eu, quando chove demais, não consigo sair de casa."],
        ],
      },
    ],
    pitfalls: [
      "Pôr “ramo” no começo, como o “quando” do português: ele vem depois do verbo da oração que depende.",
      "Confundir “rire” (depois de) com “mboyve” (antes de).",
      "Achar que “ramo” é só “quando”: “Ndereipotái ramo xiripa” é “se você não quiser o cinto”.",
    ],
    quiz: [
      { question: "Onde fica “ramo” na oração?", options: ["Depois do verbo da oração que depende", "No começo da frase", "Antes do sujeito"], answer: "Depois do verbo da oração que depende", explanation: "“Ko'ẽ jevy ramo oho”: amanhecer de novo quando, ele foi." },
      { question: "O que quer dizer “Peteĩ jasy rire”?", options: ["Depois de um mês", "Antes de um mês", "Durante um mês"], answer: "Depois de um mês", explanation: "“Rire” é “depois de”; “antes de” é “mboyve”." },
      { question: "Qual palavra diz “para, a fim de”?", options: ["hagwã", "jave", "jepe"], answer: "hagwã", explanation: "“Ogwejy ko yvy ári opyta hagwã”: desceram para ficar aqui na terra." },
    ],
  },
  {
    id: "kgk-g10",
    level: "B1.1",
    title: "-vy: fazendo, enquanto vai",
    emoji: "🔄",
    summary: "Depois do verbo, -vy diz que a ação acontece junto com outra, ou o jeito de fazer: “Xe aripara aju-vy”, eu vim correndo.",
    sections: [
      {
        // Barros 2014, p. 219 (vy2: depois do verbo, ação contínua; com outro verbo, ação simultânea ou maneira), p. 208
        // (ripara), p. 165 (jahe'o) e p. 186 (moirũ)
        text: "Ligado ao verbo com hífen, -vy diz que a ação continua ou acontece ao mesmo tempo que outra, ou o jeito de fazer: “Ojeroky oje'ói-vy”, eles foram dançando. Nos exemplos do dicionário, “oĩ-vy” (estando) depois de um verbo mostra alguém no meio da ação: “Ojahe'o oĩ-vy xe ruvanga”, meu padrasto estava chorando.",
        examples: [
          // Barros 2014, p. 219 (dois exemplos), p. 208, p. 165 e p. 186
          ["Ojeroky oje'ói-vy.", "Eles foram dançando."],
          ["Upe-py ogwapy oĩ-vy.", "Ali ela ficou sentada."],
          ["Xe aripara aju-vy.", "Eu vim correndo."],
          ["Ojahe'o oĩ-vy xe ruvanga.", "Meu padrasto estava chorando."],
          ["Xe memby oiko íxupe omoirũ-vy.", "Meu filho está fazendo companhia a ela."],
        ],
      },
      {
        // Cardoso 2008, p. 119 (partícula hína, “continuativo”: depois do verbo, um evento que começou no passado e
        // continua no momento da fala; pode ser traduzida por “ainda”)
        text: "Valéria Cardoso descreve ainda “hína”, depois do verbo: uma ação que começou antes e continua no momento em que se fala. Pode ser traduzida por “ainda”.",
      },
    ],
    pitfalls: [
      "Confundir o -vy do verbo com o “-vy” depois de pronome: “xe-vy” é “para mim” (Barros 2014, p. 219).",
      "Pôr a pessoa no -vy: o prefixo de pessoa fica no verbo (aripara, eu corro), e o -vy vem depois do outro verbo.",
    ],
    quiz: [
      { question: "O que quer dizer “Xe aripara aju-vy”?", options: ["Eu vim correndo", "Eu vou correr", "Corra para mim"], answer: "Eu vim correndo", explanation: "-vy marca a ação que acontece junto: vim, correndo." },
      { question: "Em “Ome'ẽ kwatia xe-vy”, o “xe-vy” quer dizer…", options: ["para mim", "enquanto eu", "eu mesmo"], answer: "para mim", explanation: "Depois de pronome, “-vy” é “para”: “ele me deu o livro” (Barros 2014, p. 102)." },
    ],
  },
  {
    id: "kgk-g11",
    level: "B1.2",
    title: "Quem faz, o que se faz: va'e, -ha, -pyre, tembi-",
    emoji: "🏷️",
    summary: "Va'e vem depois do verbo e faz da oração um nome (“oho va'e”, quem vai); -ha, -pyre e tembi- fazem nomes de verbos.",
    sections: [
      {
        // Barros 2014, p. 104 (pronomes relativos: Oho va'e, va'ekwe, va'erã; Ojapoha, ojapo hagwe, ojapo hagwã, citando
        // Bridgeman), p. 219 (va'e, va'ekwe, va'erã), p. 204 (pyhare) e p. 145 (ajaka); Cardoso 2008, pp. 156–158 (a
        // relativa é feita com a partícula nominalizadora va'e, com o tempo do nome: va'e, va'ekwe, va'erã)
        text: "Em português, o “que” vem antes: “a rede que ninguém usou”. No kaiowá, “va'e” vem depois do verbo e faz da oração um nome: “oho va'e”, quem vai. Como os nomes, ele tem tempo: “va'ekwe” para o passado e “va'erã” para o futuro. Do mesmo jeito, “-ha” forma “aquilo que ele faz”, com “hagwe” no passado e “hagwã” no futuro. Loraine Bridgeman, citada por Barros, avisa que essas formas são iguais às marcas de tempo do verbo e que quem não é falante custa a perceber a diferença.",
        table: {
          head: ["Forma", "Sentido"],
          rows: [
            ["oho va'e", "(aquele) que vai"],
            ["oho va'ekwe", "(aquele) que foi"],
            ["oho va'erã", "(aquele) que irá"],
            ["ojapoha", "(aquilo) que ele faz"],
            ["ojapo hagwe", "(aquilo) que ele fez"],
            ["ojapo hagwã", "(aquilo) que ele fará"],
          ],
        },
        examples: [
          // Barros 2014, p. 219 (dois exemplos), p. 204, p. 155, p. 145 e p. 180
          ["Nhande ru ogwereko mokõi tajýry kunhataĩ ojeroky va'e.", "Nosso pai tinha duas filhas moças que dançavam."],
          ["Kyha ijapopyre avave ndoiporúi va'e.", "A rede que ninguém tinha usado."],
          ["Pyhare xe agwata va'e, he'i jagwarete.", "“Eu sou o que anda à noite”, disse a onça."],
          ["Oikwaa ava tape ojapo hagwe.", "O índio sabia o caminho que tinha feito."],
          ["Onhomi hagwe ojaho'i ajaka-py.", "O que ele tinha escondido, ele cobriu com o cesto."],
          ["Ãgwéry omoĩ mba'asy ivai va'e.", "A assombração põe doença ruim."],
        ],
      },
      {
        // Barros 2014, p. 95 (omono'õha, ojapo va'e, ojapopyre; tembi'u, tembireko, tembiapo), p. 154 (-ha: “aquele que”),
        // p. 204 (-pyre), p. 147 (apoha), p. 182 (mbo'eháry) e p. 216 (tembiapo)
        text: "Outros pedaços fazem nomes a partir de verbos. “-ha” dá quem faz ou o que se faz: “omono'õha”, a colheita; “apoha”, aquele que faz; “mbo'eháry”, o professor, de “mbo'e”, ensinar. “-pyre” dá aquilo que foi feito: “ojapopyre”, o que é feito. E “tembi-” dá o que se faz com algo: “tembi'u”, a comida (de “'u”, comer), e “tembiapo”, o trabalho (de “apo”, fazer).",
        table: {
          head: ["Pedaço", "Faz", "Exemplo"],
          rows: [
            ["-ha", "quem faz; o que se faz", "omono'õha (a colheita), apoha (aquele que faz)"],
            ["-pyre", "aquilo que foi feito", "ojapopyre (aquilo que é feito)"],
            ["tembi-", "o que se faz com algo", "tembi'u (comida), tembiapo (trabalho)"],
          ],
        },
        examples: [
          // Barros 2014, p. 154, p. 204, p. 147 e p. 216
          ["Ko va'e ko marandu mombe'uha ou, he'i xirino-rehe.", "“Este é aquele que conta a notícia”, eles disseram sobre o beija-flor."],
          ["Ko va'e nhemombe'upyre kaja'a nhepyrũ rehegwa.", "Isto é aquilo que se conta sobre o início da sereia."],
          ["Ha'e monde apoha tekotevẽ omoĩ pe monde gwy rupigwa yvyra.", "E aquele que faz o mundéu tem que colocar uma madeira embaixo dele."],
          ["Ojapo te'ýi rembiapokwe voi.", "Eles fizeram a antiga obra dos índios."],
        ],
      },
    ],
    pitfalls: [
      "Pôr “va'e” antes do verbo, como o “que” do português: ele vem depois.",
      "Esquecer o tempo: “va'ekwe” é “que foi”, “va'erã”, “que irá”.",
      "Confundir “hagwã” de “para” (B1.1) com o “hagwã” de “o que ele fará”: os dois aparecem depois do verbo, e o sentido vem da frase.",
    ],
    quiz: [
      { question: "O que quer dizer “oho va'ekwe”?", options: ["(aquele) que foi", "(aquele) que irá", "ele vai"], answer: "(aquele) que foi", explanation: "“Va'e” faz um nome da oração; “-kwe” põe no passado." },
      { question: "“Tembi'u” (comida) vem de…", options: ["“'u”, comer, com tembi-", "“tembe”, beira", "“'u” com -pyre"], answer: "“'u”, comer, com tembi-", explanation: "Tembi- forma “o que se faz com algo”: o que se come." },
      { question: "Como se diz “aquele que faz”?", options: ["apoha", "ojapopyre", "tembiapo"], answer: "apoha", explanation: "“-pyre” é “o que foi feito”; “tembiapo” é “o trabalho”." },
    ],
  },
  {
    id: "kgk-g12",
    level: "B1.3",
    title: "Fazer fazer: mbo- (mo-) e -uka",
    emoji: "🫱",
    summary: "Mbo- faz alguém ficar ou fazer (“mbovy'a”, alegrar alguém); -uka, depois do verbo, manda outro fazer (“ohexa uka”, mostrar).",
    sections: [
      {
        // Barros 2014, p. 182 (mbo-: “indica que alguém causa a ação em outro”; variante mo-), p. 93 (omonhe'ẽ; oike →
        // omoinge, oiko → omoingo; a mudança de nasalidade, “um fato interessante, mas não explicado”), p. 184 (mbovy'a),
        // p. 182 (mbogwera), p. 188 (mongaru, com nota “veja também karu”) e p. 183 (mbopy'agwapy); Cardoso 2008, p. 93
        // (o causativo mo- torna transitivos os verbos intransitivos e acrescenta quem causa a ação)
        text: "Na frente do verbo, “mbo-” (ou “mo-”) diz que alguém faz outra pessoa ficar de um jeito ou fazer algo. “Vy'a” é “estar alegre”; “mbovy'a” é “alegrar alguém”. Valéria Cardoso explica que esse prefixo acrescenta à frase quem causa a ação. Às vezes o verbo muda de som: “oike” (ele entra) vira “omoinge” (ele faz entrar), o que Barros chama de “um fato interessante, mas não explicado”.",
        table: {
          head: ["Sem mbo-", "Com mbo- (mo-)"],
          rows: [
            ["vy'a (estar alegre)", "mbovy'a (alegrar alguém)"],
            ["kwera (sarar)", "mbogwera (curar, fazer sarar)"],
            ["karu (comer)", "mongaru (dar de comer)"],
            ["py'agwapy (calma)", "mbopy'agwapy (acalmar alguém)"],
            ["oike (ele entra)", "omoinge (ele faz entrar)"],
            ["oiko (ele vive)", "omoingo (ele torna, faz ficar)"],
            ["nhe'ẽ (falar)", "omonhe'ẽ (ele lê)"],
          ],
        },
        examples: [
          // Barros 2014, p. 182, p. 203, p. 188 e p. 182
          ["Ko'ánga embovy'a katu nhamói.", "Agora faça o vovô ficar alegre de fato."],
          ["Nhambopy'agwapy jevy nhamói.", "Nós fizemos o vovô ficar calmo de novo."],
          ["Aikwaapa kunumi amongaru hagwã.", "Sei tudo de como dar comida aos meninos."],
          ["Nhande va'ekwe nhambogwera va'ekwe Ilda-pe.", "Um tempo atrás, curamos a Hilda."],
        ],
      },
      {
        // Barros 2014, p. 218 (uka: “faz com que o sujeito não seja aquele que faz a ação, mas faz ou manda outro fazer”)
        // e p. 159 (hexa uka); Cardoso 2008, pp. 94–95 (-uka com verbos transitivos: quem causa vira o sujeito, quem fazia
        // a ação passa a dativo, e o objeto fica onde estava)
        text: "Com verbos que já têm objeto, o kaiowá usa “uka” depois do verbo: quem fala manda ou faz outro fazer. “Ohexa” é “ele vê”; “ohexa uka” é “ele faz ver”, mostra. Barros escreve “uka” separado; Cardoso, que o trata como sufixo, escreve junto.",
        examples: [
          // Barros 2014, p. 218 (dois exemplos) e p. 159
          ["Ogweru ohexa uka yvagwasu.", "Ele trouxe e mostrou a eles (fez eles verem) a fruta grande."],
          ["Pejapo uka, he'i upe-py ou-vy.", "“Mandem eles fazerem”, disse aos que vinham ali."],
          ["Erehose ramo ahexa uka-ne nde-vy.", "Se você quiser ir, eu te mostro (o caminho)."],
        ],
      },
    ],
    pitfalls: [
      "Achar que todo verbo com “mo-” ou “mbo-” vem de outro: “moĩ” (pôr), “mondo” (enviar) e “mboty” (fechar) são verbetes próprios no dicionário.",
      "Usar “mbo-” para mandar alguém fazer algo com objeto: aí Cardoso descreve o “-uka” (ohexa uka, mostrar).",
    ],
    quiz: [
      { question: "O que “mbovy'a” quer dizer?", options: ["alegrar alguém", "ficar alegre sozinho", "alegria"], answer: "alegrar alguém", explanation: "mbo- + vy'a (estar alegre): fazer alguém ficar alegre." },
      { question: "“Pejapo uka” quer dizer…", options: ["mandem (outros) fazer", "façam vocês mesmos", "vocês fizeram"], answer: "mandem (outros) fazer", explanation: "“Uka” depois do verbo: quem fala manda outro fazer." },
      { question: "“Mongaru” (dar de comer) se liga a qual verbo?", options: ["karu, comer", "mano, morrer", "kwera, sarar"], answer: "karu, comer", explanation: "Barros remete “mongaru” a “karu”." },
    ],
  },
  {
    id: "kgk-g13",
    level: "B1.3",
    title: "A si mesmo, um ao outro: je- (nhe-) e jo- (nho-)",
    emoji: "🪞",
    summary: "Je- volta a ação para quem faz (“onhemondýi”, ele se assustou); jo- faz a ação ir de um para o outro (“onhopytygwõ”, eles se ajudam).",
    sections: [
      {
        // Barros 2014, p. 104 (je-, nhe- reflexivo; jo-, nho- recíproco; Onhemondýi, Ojepyhy, Onhomboaty), p. 109 (o -i- dos
        // verbos ai- desaparece com je- e jo-: oikutu → ojekutu; oipytygwõ → onhopytygwõ; je- “reflexivo/passivo”: ojeity,
        // ojeiko), p. 93 (prefixos com forma oral e nasal) e p. 188 (mongeta: “forma mais comum: nhomongeta”); Cardoso 2008,
        // p. 93 (reflexivo e recíproco diminuem o número de participantes do verbo)
        text: "“Je-” (nhe- nos verbos nasais) entra entre o prefixo de pessoa e o verbo e volta a ação para quem faz: “onhemondýi”, ele se assustou. “Jo-” (nho-) faz a ação ir de um para o outro: “onhopytygwõ”, eles ajudam uns aos outros. Nos verbos que põem um “i” depois do prefixo, esse “i” cai: “oikutu” (ele feriu alguém) vira “ojekutu” (ele se feriu). Barros chama “je-” também de passivo: “ojeity”, ele foi derrubado.",
        table: {
          head: ["Verbo", "Com je- (nhe-)", "Com jo- (nho-)"],
          rows: [
            ["oikutu (ele fere alguém)", "ojekutu (ele se feriu)", "—"],
            ["omondýi (ele assusta)", "onhemondýi (ele se assustou)", "—"],
            ["oipytygwõ (ele ajuda)", "—", "onhopytygwõ (eles se ajudam)"],
            ["omboaty (ele reúne)", "—", "onhomboaty (eles se reuniram)"],
            ["mongeta (conversar)", "—", "nhomongeta (conversar um com o outro)"],
          ],
        },
        examples: [
          // Barros 2014, p. 171, p. 193, p. 205, p. 194, p. 183 e p. 167
          ["Kagware onhemondýi.", "O tamanduá ficou assustado."],
          ["Onhemi jagwarete-gwi.", "Ele se escondeu da onça."],
          ["Upéixa ore oronhopytygwõmba.", "Assim nós nos ajudamos."],
          ["Eju ko'a-py nhanhomongeta.", "Venha aqui, vamos conversar um com o outro."],
          ["Onhombojaru.", "Eles acariciam um ao outro."],
          ["Erehexa ramo xirino ndojejukái voite.", "Quando você vê um beija-flor, ele não deve ser morto mesmo."],
        ],
      },
    ],
    pitfalls: [
      "Manter o “i” dos verbos como “oikutu”: com je- e jo- ele cai (ojekutu).",
      "Trocar je- (a si mesmo) por jo- (um ao outro): “onhemondýi” é “ele se assustou”, não “eles se assustaram um ao outro”.",
    ],
    quiz: [
      { question: "O que quer dizer “onhemondýi”?", options: ["ele se assustou", "ele assustou alguém", "eles se assustaram um ao outro"], answer: "ele se assustou", explanation: "nhe- volta a ação para quem faz." },
      { question: "Qual forma quer dizer “eles ajudam uns aos outros”?", options: ["onhopytygwõ", "oipytygwõ", "ojepytygwõ"], answer: "onhopytygwõ", explanation: "nho- é o recíproco, e o “i” de “oipytygwõ” cai." },
    ],
  },
  {
    id: "kgk-g14",
    level: "B1.4",
    title: "Dizem que, eu acho, será?: jeko, araka'e, ko, niko, ra'e, nipo",
    emoji: "🗣️",
    summary: "Pequenas palavras dizem de onde vem o que se conta: jeko (dizem que), araka'e (num passado que não se viu), ko (eu acho), niko (com certeza), ra'e (talvez), nipo (será?).",
    sections: [
      {
        // Barros 2014, p. 168 (jeko: “dizem, ouvi dizer; refere-se a algo dito por outra pessoa”), p. 148 (araka'e: “passado
        // remoto, geralmente não presenciado pelo falante”) e pp. 116–117 (citando Cardoso 2008, p. 116: as partículas
        // incluem “marcas de modalidade, de tempo/aspecto, de negação, evidencialidade e ênfase”)
        text: "Ao contar, o falante kaiowá pode marcar de onde vem o que diz. “Jeko” é “dizem, ouvi dizer”: o que foi dito por outra pessoa. “Araka'e” marca um passado distante, que quem fala geralmente não viu. Nas histórias do dicionário de Barros, os dois aparecem juntos: “Yma jeko araka'e ovu y”, muito tempo atrás, dizem, a água subiu. Valéria Cardoso inclui essas marcas, a evidencialidade, entre as partículas da língua.",
        table: {
          head: ["Palavra", "Diz que…", "Exemplo"],
          rows: [
            ["jeko", "foi outra pessoa que contou", "Yma jeko oiko araka'e nhande ru."],
            ["araka'e", "foi há muito tempo, e quem fala não viu", "Ko yvy ojapo hagwã onhomongeta araka'e."],
            ["ko", "é a opinião de quem fala (eu acho)", "Ha'e kwéry ko araporukwe-py rei oiko, he'i nhamói."],
            ["niko", "é certo (com certeza)", "Ore niko ndorogwereko hetáiry."],
            ["ra'e", "é uma dúvida (talvez)", "Oikove ra'e, he'i."],
            ["nipo", "é uma pergunta à espera da resposta certa (será?)", "Ma'erã nipo ndoipotái imemby omenda?"],
          ],
        },
        examples: [
          // Barros 2014, p. 168, p. 148 (dois exemplos), p. 159, p. 173, p. 190, p. 206 e p. 190
          ["Yma jeko oiko araka'e nhande ru.", "Antigamente, dizem, viveu nosso pai."],
          ["Yma jeko araka'e ovu y.", "Muito tempo atrás, dizem, a água subiu."],
          ["Ko yvy ojapo hagwã onhomongeta araka'e.", "Para fazer a terra, eles conversaram, no passado."],
          ["Yma rupigwa hexakáry oĩ araka'e irundy.", "No passado existiam quatro pajés."],
          ["Ha'e kwéry ko araporukwe-py rei oiko, he'i nhamói.", "“Eles, eu acho, só usam as coisas”, disse o vovô."],
          ["Ore niko ndorogwereko hetáiry.", "Com certeza, não temos muitas coisas."],
          ["Oikove ra'e, he'i.", "“Talvez ele sobreviva”, ele disse."],
          ["Ma'erã nipo ndoipotái imemby omenda?", "Por que será que ela não quer que a filha se case?"],
        ],
      },
      {
        // Cardoso 2008, p. 121 (tipo e pa implicam probabilidade e dúvida; nipo “implica expectativa de resposta
        // verdadeira”)
        text: "Nas perguntas, Valéria Cardoso separa “pa” e “tipo”, que trazem dúvida, de “nipo”, que espera uma resposta verdadeira.",
      },
    ],
    pitfalls: [
      "Traduzir “jeko” como “eu sei”: é o contrário, é o que outros contaram.",
      "Usar “araka'e” para ontem: ele é para um passado distante. Ontem é “kwehe”.",
    ],
    quiz: [
      { question: "O que “jeko” indica?", options: ["que quem fala ouviu de outra pessoa", "que quem fala viu com os próprios olhos", "uma ordem"], answer: "que quem fala ouviu de outra pessoa", explanation: "“Dizem, ouvi dizer” (Barros 2014, p. 168)." },
      { question: "“Araka'e” marca…", options: ["um passado distante, que quem fala não viu", "o futuro", "o que aconteceu hoje"], answer: "um passado distante, que quem fala não viu", explanation: "Por isso aparece nas histórias dos antigos." },
      { question: "O que “ra'e” acrescenta em “Oikove ra'e”?", options: ["dúvida: talvez", "certeza", "passado"], answer: "dúvida: talvez", explanation: "“Talvez ele sobreviva.”" },
    ],
  },
  {
    id: "kgk-g15",
    level: "B1.4",
    title: "Contar o que se disse e como a ação termina: he'i, -pa, -ma, kuri",
    emoji: "💬",
    summary: "A fala de alguém vem como foi dita, com “he'i” (disse); -pa diz que a ação foi completa, -ma que já aconteceu, e “kuri”, que foi há pouco.",
    sections: [
      {
        // Barros 2014, p. 111 (Quadro 15: dizer, irregular), p. 156 (he'i), p. 154 (ha'e2), p. 150 (ere), p. 159 (hesarái) e
        // p. 151 (He'i gwembireko-pe: aha-ta anhemitỹ, já no tópico kgk-g6)
        text: "Para contar o que alguém disse, a fala vem como foi dita, e “he'i” (disse, dizem) vem depois, muitas vezes com quem disse: “Ipohýi xe rekove, he'i tatu”. Também pode vir antes, com quem ouviu: “He'i gwembireko-pe: aha-ta anhemitỹ”. O verbo “dizer” é irregular: “ha'e” (eu digo), “ere” (você diz), “he'i” (ele diz).",
        examples: [
          // Barros 2014, p. 156 (dois exemplos), p. 154, p. 150 e p. 159
          ["Tapeho peru nhande-vy y jay'u hagwã, he'i.", "“Vão e tragam água para bebermos”, ele disse."],
          ["Ipohýi xe rekove, he'i tatu.", "“Minha vida é difícil”, diz o tatu."],
          ["Ha'e íxupe.", "Eu lhe disse."],
          ["Ndojehúi mba'eve, ere arã ereho-vy.", "“Não aconteceu nada”, você dirá quando for."],
          ["Ogwahẽ-vy ykwa-py [...] hesarái itúvy he'i va'ekwe-rehe.", "Chegando à fonte de água, esqueceram o que o pai lhes tinha dito."],
        ],
      },
      {
        // Cardoso 2008, pp. 90–92 (Quadro 11, aspecto: ma “já”, -pa ~ -mba “acabar, terminar”, -pota “quase”, -katu
        // “poder”, mi “por favor”) e p. 123 (kuri); Barros 2014, p. 198 (-pa), p. 117 (Quadro 20: Ohopa), p. 175 (kuri),
        // p. 188 (mopotĩ) e p. 183 (mbopapa, mborahéi)
        text: "Valéria Cardoso mostra que o kaiowá marca o aspecto, o jeito como a ação se desenrola, com vários pedaços diferentes. Depois do verbo, “-pa” (ou “-mba”) diz que a ação foi completa, “todos” ou “tudo”: “Ohopa”, eles foram todos. “-ma” diz que já aconteceu. “Kuri” diz que foi há pouco. Cardoso descreve também “-pota”, de algo que está quase acontecendo, e “katu”, de permissão.",
        table: {
          head: ["Marca", "Sentido", "Exemplo"],
          rows: [
            ["-pa, -mba", "tudo, todos, completamente", "Ohopa (eles foram todos)"],
            ["-ma", "já", "Opa-ma ka'agwy (a mata acabou)"],
            ["kuri", "há pouco", "Oho-ma kuri (já foram há pouco)"],
          ],
        },
        examples: [
          // Barros 2014, p. 117, p. 198, p. 183, p. 188, p. 175 e p. 183
          ["Ohopa.", "Eles foram todos."],
          ["Yvy okaipa rire ae ombovu y.", "Depois que a terra queimou toda, ele fez subir a água."],
          ["Mborahéi ogwerekopa.", "Os cantos, eles tinham todos."],
          ["Omopotĩ-ma.", "Ele já limpou toda ela."],
          ["Oho-ma kuri.", "Eles já foram há pouco tempo."],
          ["Upe peve nhambopapa.", "Até aí terminamos (de contar)."],
        ],
      },
    ],
    pitfalls: [
      "Conjugar “dizer” como regular: é “ha'e”, “ere”, “he'i”.",
      "Confundir “-pa” (tudo, completamente) com a pergunta “pa” (Mba'éixa pa ereiko?): um vem grudado ao verbo, o outro depois da palavra de pergunta.",
    ],
    quiz: [
      { question: "Em “Ipohýi xe rekove, he'i tatu”, quem fala?", options: ["o tatu", "eu", "você"], answer: "o tatu", explanation: "A fala vem primeiro; “he'i tatu” é “disse o tatu”." },
      { question: "O que “Ohopa” quer dizer?", options: ["eles foram todos", "eles vão?", "ele não foi"], answer: "eles foram todos", explanation: "-pa diz que a ação foi completa." },
      { question: "Qual é a forma de “eu digo”?", options: ["ha'e", "he'i", "ere"], answer: "ha'e", explanation: "“Dizer” é irregular: ha'e, ere, he'i." },
    ],
  },
];
