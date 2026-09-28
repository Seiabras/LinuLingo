import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao feroês padrão, da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_FO: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O feroês se escreve quase como o nórdico antigo e se fala de outro jeito: o «ð» não soa («góður» [ˈkɔuːwʊɹ]), o «á» soa [ɔa], o «ó» [ɔu], o «ei» [ai], o «hv» [kv], o «ll» [tl] e o «rn» [tn]. A tônica cai sempre na primeira sílaba, e o acento agudo marca outra vogal, não a sílaba forte.',
    sections: [
      {
        heading: 'As vogais: a mesma letra, dois sons',
        text: 'Toda vogal tônica é longa antes de uma consoante só ou no fim da palavra, e curta antes de duas consoantes. O detalhe que confunde o brasileiro: a longa e a curta muitas vezes são sons diferentes. O «a» longo é o ditongo [ɛa] («dagur» [ˈtɛaːvʊɹ]), e o curto é o nosso «a» («takk» [tʰaʰk]). O «á» longo é [ɔa], como um «óa» («bátur» [ˈpɔaːtʊɹ]). O «í» e o «ý» soam igual, [ʊi], quase um «ui»: «ís» [ʊiːs]. O «ó» longo é [ɔu], e o «ú» longo é [ʉu], um «u» com os lábios de «i» no começo: «hús» [hʉuːs]. O «ei» é [ai], como no nosso «pai»: «nei» [naiː].',
        table: {
          head: ['Letra', 'Longa (IPA)', 'Exemplo', 'Curta (IPA)', 'Exemplo'],
          rows: [
            ['a', '[ɛaː]', 'dagur [ˈtɛaːvʊɹ] dia', '[a]', 'takk [tʰaʰk] obrigado'],
            ['á', '[ɔaː]', 'bátur [ˈpɔaːtʊɹ] barco', '[ɔ]', 'átta [ˈɔʰta] oito'],
            ['e', '[eː]', 'vera [ˈveːɹa] ser, estar', '[ɛ]', 'kenna [ˈtʃʰɛnːa] conhecer'],
            ['i, y', '[iː]', 'skip [ʃiːp] navio', '[ɪ]', 'fimm [fɪmː] cinco'],
            ['í, ý', '[ʊiː]', 'ís [ʊiːs] gelo, sorvete', '[ʊi]', 'hvítt [kvʊiʰt] branco (neutro)'],
            ['o', '[oː]', 'koma [ˈkʰoːma] vir', '[ɔ]', 'gott [kɔʰt] bom (neutro)'],
            ['ó', '[ɔuː]', 'sól [sɔuːl] sol', '[œ]', 'stórt [stœɹt] grande (neutro)'],
            ['ú', '[ʉuː]', 'hús [hʉuːs] casa', '[ʏ]', '(mais rara)'],
            ['æ', '[ɛaː]', 'læra [ˈlɛaːɹa] aprender', '[a]', '(como o a curto)'],
            ['ø', '[øː]', 'Føroyar [ˈføːɹjaɹ] Ilhas Faroé', '[œ]', '(como o ó curto)'],
            ['ei', '[aiː]', 'nei [naiː] não', '[ai]', 'eitt [aiʰt] um (neutro)'],
          ],
        },
        examples: [
          ['Báturin er stórur.', 'O barco é grande: [ˈpɔaːtʊɹɪn]'],
          ['Sólin skínur.', 'O sol brilha: [ˈsɔuːlɪn]'],
          ['Nei, takk!', 'Não, obrigado: [naiː], [tʰaʰk]'],
        ],
      },
      {
        heading: 'O «ð» que não soa e os sons de ponte',
        text: 'O «ð» está na escrita porque estava no nórdico antigo, mas o feroês não o pronuncia (o islandês pronuncia). No fim da palavra, ele simplesmente some: «tað» [tʰɛaː]. Entre duas vogais, some e deixa no lugar um som de ponte, um glide: [j] depois de i, í, ei, ey e oy; [w] ou [v] depois de u, ú, ó e o; e depois de «a», o glide depende da vogal seguinte. O «g» entre vogais faz o mesmo: «dagur» [ˈtɛaːvʊɹ]. No começo da palavra, o «g» nunca some: «góður» [ˈkɔuːwʊɹ].',
        table: {
          head: ['Palavra', 'IPA', 'O que aconteceu', 'Português'],
          rows: [
            ['góður', '[ˈkɔuːwʊɹ]', 'ð vira [w]', 'bom'],
            ['maður', '[ˈmɛaːvʊɹ]', 'ð vira [v]', 'homem, pessoa'],
            ['dagur', '[ˈtɛaːvʊɹ]', 'g vira [v]', 'dia'],
            ['seyður', '[ˈsɛiːjʊɹ]', 'ð vira [j]', 'ovelha'],
            ['tað', '[tʰɛaː]', 'ð some', 'isso'],
            ['eg', '[eː]', 'g some', 'eu'],
          ],
        },
        examples: [
          ['Tað er ein góður dagur.', 'É um dia bom: [tʰɛaː], [ˈkɔuːwʊɹ], [ˈtɛaːvʊɹ]'],
          ['Seyðurin er hvítur.', 'A ovelha é branca: [ˈsɛiːjʊɹɪn]'],
          ['Góðan morgun!', 'Bom dia! [ˈkɔuːwan]'],
        ],
      },
      {
        heading: 'Consoantes: o sopro, o «hv» e o «ll» [tl]',
        text: 'O «b», o «d» e o «g» soam como «p», «t» e «k» sem sopro; o «p», o «t» e o «k» levam um sopro forte, [pʰ tʰ kʰ]. Para o brasileiro, «bátur» soa quase «póatur». Depois de vogal curta, o sopro vem ANTES da consoante dobrada, a pré-aspiração: «takk» [tʰaʰk], «átta» [ˈɔʰta]. O «k» e o «g» antes de e, i, y e ey viram [tʃʰ] e [tʃ]: «kenna» [ˈtʃʰɛnːa], «gera» [ˈtʃeːɹa]. O «sk» nessa posição e o «sj» soam [ʃ]: «skip» [ʃiːp]. O «hv» soa [kv], o «hj» soa [tʃ], o «ll» soa [tl] e o «rn» soa [tn]. O «r» é o [ɹ] do inglês, parecido com o «r» caipira.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo', 'Português'],
          rows: [
            ['b, d, g', '[p], [t], [k]', 'bátur [ˈpɔaːtʊɹ]', 'barco'],
            ['pp, tt, kk', '[ʰp], [ʰt], [ʰk]', 'takk [tʰaʰk]', 'obrigado'],
            ['hv', '[kv]', 'hvat [kvɛaːt]', 'o quê'],
            ['hj', '[tʃ]', 'hjá [tʃɔaː]', 'na casa de, com'],
            ['k, g + e, i, y, ey', '[tʃʰ], [tʃ]', 'kenna [ˈtʃʰɛnːa], gera [ˈtʃeːɹa]', 'conhecer, fazer'],
            ['sk + e, i, y', '[ʃ]', 'skip [ʃiːp]', 'navio'],
            ['ll', '[tl]', 'fjall [fjatl]', 'montanha'],
            ['rn', '[tn]', 'barn [patn]', 'criança'],
          ],
        },
        examples: [
          ['Hvat eitur tú?', 'Como você se chama? [kvɛaːt ˈaiːtʊɹ tʰʉuː]'],
          ['Barnið er á fjallinum.', 'A criança está na montanha: [ˈpatnɪ], [ˈfjatlɪnʊn]'],
          ['Takk fyri!', 'Obrigado! [tʰaʰk ˈfiːɹɪ]'],
        ],
      },
      {
        heading: 'A «skerping»: quando o «ú» vira [ɪkv]',
        text: 'Antes de «gg», «ggj» e «gv», algumas vogais longas viram um som curto bem diferente. Os feroeses chamam isso de «skerping», a afiação. O «ggj» soa [tʃː], e as vogais que vêm antes dele mudam: «oyggj» (ilha) soa [ɔtʃː], «nýggjur» (novo) [ˈnʊtʃːʊɹ]. Antes de «gv», o «ú» vira [ɪ] e o «ó» vira [ɛ]: «kúgv» (vaca) soa [kʰɪkv], «sjógvur» (mar) [ˈʃɛkvʊɹ]. É um dos lugares onde a escrita mais esconde a fala.',
        table: {
          head: ['Palavra', 'IPA', 'Português'],
          rows: [
            ['oyggj', '[ɔtʃː]', 'ilha'],
            ['nýggjur', '[ˈnʊtʃːʊɹ]', 'novo'],
            ['tríggir', '[ˈtɹʊtʃːɪɹ]', 'três (masculino)'],
            ['kúgv', '[kʰɪkv]', 'vaca'],
            ['sjógvur', '[ˈʃɛkvʊɹ]', 'mar'],
          ],
        },
        examples: [
          ['Tað eru átjan oyggjar.', 'São dezoito ilhas.'],
          ['Kúgvin gevur mjólk.', 'A vaca dá leite: [ˈkʰɪkvɪn]'],
          ['Sjógvurin er kaldur.', 'O mar está frio.'],
        ],
      },
    ],
    topics: ['fo-g1'],
    quiz: [
      {
        question: 'Como soa o «ð» de «góður»?',
        options: ['[ð], como o inglês «this»', 'Não soa: entra um glide [w]', '[d], como o nosso d', '[θ], como o inglês «think»'],
        answer: 'Não soa: entra um glide [w]',
        explanation: 'O feroês não pronuncia o ð: «góður» soa [ˈkɔuːwʊɹ]. Quem pronuncia o ð é o islandês.',
      },
      {
        question: 'Como soa o «á» longo de «bátur»?',
        options: ['[aː], um a forte', '[ɔa], um «óa»', '[au]', '[ɛ]'],
        answer: '[ɔa], um «óa»',
        explanation: 'O acento agudo marca outra vogal, não a tônica: «bátur» soa [ˈpɔaːtʊɹ].',
      },
      {
        question: 'Como soa o «hv» de «hvat»?',
        options: ['[v]', '[kv]', '[hw]', '[f]'],
        answer: '[kv]',
        explanation: '«hvat» soa [kvɛaːt], como «kveat». O mesmo vale para «hvar», «hvussu» e «hvør».',
      },
      {
        question: 'Como soa o «ll» de «fjall»?',
        options: ['[ʎ], como o «lh»', '[lː], um l longo', '[tl], com um t antes do l', '[j]'],
        answer: '[tl], com um t antes do l',
        explanation: '«fjall» soa [fjatl]. Do mesmo jeito, o «rn» de «barn» soa [tn]: [patn].',
      },
      {
        question: 'O que é a «skerping»?',
        options: ['O acento na primeira sílaba', 'A mudança de vogal antes de «gg», «ggj» e «gv»', 'A queda do «ð»', 'O sopro antes do «kk»'],
        answer: 'A mudança de vogal antes de «gg», «ggj» e «gv»',
        explanation: 'Antes desses grupos, vogais longas viram sons curtos diferentes: «kúgv» [kʰɪkv], «oyggj» [ɔtʃː].',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'A fonologia feroesa é a distância entre a escrita etimológica de 1846 e a fala: a vogal é longa ou curta conforme as consoantes que vêm depois, o «ð» e o «g» somem entre vogais, as ilhas pronunciam a mesma escrita de jeitos diferentes, e o feroês se afastou do islandês na fala muito mais do que na escrita.',
    sections: [
      {
        heading: 'Longa ou curta: a regra das consoantes',
        text: 'No feroês, a duração da vogal não é livre: ela depende do que vem depois. Vogal tônica antes de uma consoante só, ou no fim da palavra, é longa; antes de duas ou mais consoantes, é curta. Por isso o mesmo adjetivo muda de som no feminino e no neutro: «stór» [stɔuːɹ] (grande, feminino), com «ó» longo, e «stórt» [stœɹt], com «ó» curto e outro timbre. Como no islandês, antes de grupos como «pr», «tr» e «kr» a vogal costuma continuar longa.',
        table: {
          head: ['Forma', 'IPA', 'Vogal', 'Português'],
          rows: [
            ['stór', '[stɔuːɹ]', 'ó longo', 'grande (fem.)'],
            ['stórt', '[stœɹt]', 'ó curto', 'grande (neutro)'],
            ['hvítur', '[ˈkvʊiːtʊɹ]', 'í longo', 'branco (masc.)'],
            ['hvítt', '[kvʊiʰt]', 'í curto', 'branco (neutro)'],
            ['góður', '[ˈkɔuːwʊɹ]', 'ó longo', 'bom (masc.)'],
            ['gott', '[kɔʰt]', 'o curto', 'bom (neutro)'],
          ],
        },
        examples: [
          ['Húsið er stórt og hvítt.', 'A casa é grande e branca.'],
          ['Kaffið er gott.', 'O café está bom.'],
          ['Hon er stór og sterk.', 'Ela é grande e forte.'],
        ],
      },
      {
        heading: 'Uma escrita, muitas falas',
        text: 'A ortografia que V. U. Hammershaimb publicou em 1846 não segue nenhuma ilha: ela olha para o nórdico antigo e para o islandês. A vantagem é que todo mundo escreve igual; o preço é que cada região lê a mesma palavra do seu jeito. O falar de Tórshavn, o «havnarmál», é o mais ouvido na mídia. O de Suðuroy, no sul, é o mais fácil de reconhecer, com vogais e melodia bem marcadas. O do norte (Klaksvík e as Norðoyggjar) tem vogais longas próprias. As diferenças estão sobretudo nas vogais; todos se entendem sem esforço.',
        table: {
          head: ['Região', 'Onde', 'O que chama a atenção'],
          rows: [
            ['norte', 'Norðoyggjar (Klaksvík), Eysturoy, norte de Streymoy', 'vogais longas próprias, melodia reconhecível'],
            ['centro', 'Tórshavn e o sul de Streymoy, Vágar', 'o havnarmál, o mais ouvido na mídia'],
            ['sul', 'Sandoy e sobretudo Suðuroy', 'vogais e melodia bem marcadas'],
          ],
        },
        examples: [
          ['Skriftmálið er tað sama í øllum oyggjunum.', 'A língua escrita é a mesma em todas as ilhas.'],
          ['Í Havn tosa nógv fólk havnarmál.', 'Em Tórshavn, muita gente fala o havnarmál.'],
          ['Tað hoyrist beinanvegin, at hon er úr Suðuroy.', 'Dá para ouvir na hora que ela é de Suðuroy.'],
        ],
      },
      {
        heading: 'Por que a escrita parece islandês',
        text: 'Na Idade Média, o feroês e o islandês eram quase a mesma língua. Na fala, o feroês mudou muito: os ditongos novos, a queda do «ð», a «skerping», o «þ» que virou «t». Na escrita, Hammershaimb recolocou as letras antigas para mostrar o parentesco: por isso um islandês lê um jornal feroês com alguma facilidade, mas entende pouco da conversa. Com o norueguês ocidental acontece o contrário em alguns pontos: palavras como «eg» (eu) e «tysdag» (terça) são mais parecidas na fala.',
        table: {
          head: ['Feroês', 'IPA', 'Islandês', 'Português'],
          rows: [
            ['hús', '[hʉuːs]', 'hús [ˈhuːs]', 'casa'],
            ['góður', '[ˈkɔuːwʊɹ]', 'góður [ˈkouːðʏr]', 'bom'],
            ['tú', '[tʰʉuː]', 'þú [ˈθuː]', 'você'],
            ['dagur', '[ˈtɛaːvʊɹ]', 'dagur [ˈtaːɣʏr]', 'dia'],
          ],
        },
        examples: [
          ['Føroyskt og íslendskt eru skyld mál.', 'O feroês e o islandês são línguas aparentadas.'],
          ['Skriftmálini líkjast, men talumálini eru ólík.', 'As línguas escritas se parecem, mas as faladas são diferentes.'],
          ['Hammershaimb skrivaði ð, hóast tað ikki hoyrist.', 'Hammershaimb escreveu o ð, embora ele não se ouça.'],
        ],
      },
    ],
    topics: ['fo-g30'],
    quiz: [
      {
        question: 'Em «stórt» [stœɹt], por que o «ó» é curto?',
        options: ['Porque está no fim da frase', 'Porque vem antes de duas consoantes', 'Porque é neutro', 'Por acaso'],
        answer: 'Porque vem antes de duas consoantes',
        explanation: 'Vogal tônica antes de duas consoantes é curta: «stór» [stɔuːɹ], mas «stórt» [stœɹt].',
      },
      {
        question: 'Em que se baseou a ortografia de Hammershaimb (1846)?',
        options: ['Na fala de Tórshavn', 'Na fala de Suðuroy', 'No nórdico antigo e no islandês', 'No dinamarquês'],
        answer: 'No nórdico antigo e no islandês',
        explanation: 'É uma escrita etimológica, igual para todas as ilhas, que mostra o parentesco com o islandês.',
      },
      {
        question: 'O que é o «havnarmál»?',
        options: ['O falar de Tórshavn', 'A língua das baladas', 'O dinamarquês das Faroé', 'O falar de Suðuroy'],
        answer: 'O falar de Tórshavn',
        explanation: '«Havn» é o nome curto de Tórshavn, e o «havnarmál» é o falar mais ouvido na mídia.',
      },
      {
        question: 'Um islandês entende melhor o feroês…',
        options: ['falado', 'escrito', 'igual nos dois', 'cantado'],
        answer: 'escrito',
        explanation: 'A escrita guarda as letras antigas; a fala feroesa mudou muito mais que a islandesa.',
      },
      {
        question: 'Em «dagur» [ˈtɛaːvʊɹ], o que aconteceu com o «g»?',
        options: ['Soou [ɣ]', 'Sumiu e deixou um glide [v]', 'Virou [k]', 'Virou [tʃ]'],
        answer: 'Sumiu e deixou um glide [v]',
        explanation: 'Entre vogais, o «g» e o «ð» costumam sumir, e um som de ponte ocupa o lugar.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O feroês tem 3 gêneros e 4 casos (o genitivo quase só na escrita), artigo definido grudado no fim do nome (bátur → báturin), adjetivos fortes e fracos, verbos fortes que mudam a vogal (fara, fór) e compostos longos escritos juntos.',
    sections: [
      {
        heading: 'Três gêneros e o artigo no fim',
        text: 'Todo substantivo é masculino, feminino ou neutro, e muitas vezes a terminação ajuda: «-ur» costuma ser masculino (bátur), «-a» feminino (kona) e a palavra sem terminação, neutro (hús). O artigo definido não vem antes, vem grudado no fim: «bátur» → «báturin» (o barco), «kona» → «konan» (a mulher), «hús» → «húsið» (a casa). No plural: «bátarnir», «konurnar», «húsini». O indefinido vem antes e concorda: «ein bátur», «ein kona», «eitt hús».',
        table: {
          head: ['Gênero', 'Indefinido', 'Definido', 'Plural definido'],
          rows: [
            ['masculino', 'ein bátur', 'báturin', 'bátarnir'],
            ['feminino', 'ein kona', 'konan', 'konurnar'],
            ['neutro', 'eitt hús', 'húsið', 'húsini'],
          ],
        },
        examples: [
          ['Báturin liggur í havnini.', 'O barco está no porto.'],
          ['Konan býr í Gjógv.', 'A mulher mora em Gjógv.'],
          ['Húsini í Saksun eru gomul.', 'As casas de Saksun são antigas.'],
        ],
      },
      {
        heading: 'Os casos no nome e no artigo',
        text: 'O nome muda conforme a função: nominativo (sujeito), acusativo (objeto direto e depois de certas preposições), dativo (objeto indireto, lugar, depois de muitas preposições) e genitivo, que a fala troca quase sempre por «hjá» ou por preposições. O artigo pospositivo muda junto, e é nele que o caso mais aparece.',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['nominativo', 'báturin', 'konan', 'húsið'],
            ['acusativo', 'bátin', 'konuna', 'húsið'],
            ['dativo', 'bátinum', 'konuni', 'húsinum'],
            ['genitivo', 'bátsins', 'konunnar', 'hússins'],
          ],
        },
        examples: [
          ['Eg síggi bátin.', 'Eu vejo o barco. (acusativo)'],
          ['Vit eru í húsinum.', 'Nós estamos na casa. (dativo)'],
          ['Hon gav konuni bókina.', 'Ela deu o livro à mulher. (dativo + acusativo)'],
        ],
      },
      {
        heading: 'Adjetivos fortes e fracos',
        text: 'O adjetivo tem duas séries de terminações. Com o indefinido ou sem artigo, usa a forte, que muda por gênero: «ein stórur bátur», «ein stór kona», «eitt stórt hús». Com o definido, o adjetivo pede o artigo solto «tann/tað/tey» na frente e passa para a fraca: «tann stóri báturin», «tann stóra konan», «tað stóra húsið». O comparativo termina em «-ari» ou «-ri» e o superlativo em «-astur» ou «-stur»; alguns são irregulares: «góður, betri, bestur».',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['forte', 'ein stórur bátur', 'ein stór kona', 'eitt stórt hús'],
            ['fraca', 'tann stóri báturin', 'tann stóra konan', 'tað stóra húsið'],
            ['grau', 'ríkur, ríkari, ríkastur', 'stórur, størri, størstur', 'góður, betri, bestur'],
          ],
        },
        examples: [
          ['Tað stóra húsið er okkara.', 'A casa grande é nossa.'],
          ['Klaksvík er størri enn Gjógv.', 'Klaksvík é maior que Gjógv.'],
          ['Hetta er besti dagurin í árinum.', 'Este é o melhor dia do ano.'],
        ],
      },
      {
        heading: 'Verbos fortes, fracos e as pessoas',
        text: 'O verbo muda conforme a pessoa no presente: «eg tosi, tú tosar, hann tosar, vit tosa». O plural tem uma forma só para todas as pessoas. Os verbos fracos fazem o passado com «-aði», «-di» ou «-ti» («tosaði», «hoyrdi», «keypti»); os fortes mudam a vogal, como o inglês «sing, sang»: «fara, fór», «koma, kom», «síggja, sá». O perfeito usa «hava» + supino: «eg havi verið», «hon hevur tosað». O particípio passado concorda como adjetivo: «húsið er bygt», «báturin er bygdur».',
        table: {
          head: ['Verbo', 'Presente (eg / hann)', 'Passado', 'Supino'],
          rows: [
            ['tosa (falar)', 'tosi / tosar', 'tosaði', 'tosað'],
            ['keypa (comprar)', 'keypi / keypir', 'keypti', 'keypt'],
            ['fara (ir)', 'fari / fer', 'fór', 'farið'],
            ['koma (vir)', 'komi / kemur', 'kom', 'komið'],
            ['vera (ser, estar)', 'eri / er', 'var', 'verið'],
          ],
        },
        examples: [
          ['Í gjár fór eg til Tórshavnar.', 'Ontem eu fui para Tórshavn.'],
          ['Hon hevur keypt ein nýggjan bil.', 'Ela comprou um carro novo.'],
          ['Vit tosaðu leingi saman.', 'Nós conversamos muito tempo juntos.'],
        ],
      },
      {
        heading: 'Compostos: tudo junto e o gênero do fim',
        text: 'O feroês junta palavras numa só, e o último elemento manda no gênero e no sentido: «sjúkrahús» (sjúkur + hús, neutro, o hospital), «fótbóltur» (masculino), «teldupostur» (o e-mail). Entre as partes muitas vezes aparece uma letra de ligação, que é um resto do genitivo: «landsstýri» (governo, com «-s-»), «teldupostur» (com «-u-», de «teldu»). É por esse caminho que o purismo cria palavras novas com peças antigas.',
        table: {
          head: ['Composto', 'Partes', 'Gênero', 'Português'],
          rows: [
            ['sjúkrahús', 'sjúkra + hús', 'neutro', 'hospital'],
            ['landsstýri', 'lands + stýri', 'neutro', 'governo das Faroé'],
            ['teldupostur', 'teldu + postur', 'masculino', 'e-mail'],
            ['flogfar', 'flog + far', 'neutro', 'avião'],
          ],
        },
        examples: [
          ['Hon arbeiðir á sjúkrahúsinum.', 'Ela trabalha no hospital.'],
          ['Eg sendi tær ein teldupost.', 'Eu te mando um e-mail.'],
          ['Flogfarið lendir í Vágum.', 'O avião pousa em Vágar.'],
        ],
      },
    ],
    topics: ['fo-g3', 'fo-g5', 'fo-g6', 'fo-g9', 'fo-g10', 'fo-g11', 'fo-g17', 'fo-g18', 'fo-g19', 'fo-g27'],
    quiz: [
      {
        question: 'Qual é a forma definida de «hús» (casa)?',
        options: ['hin hús', 'húsin', 'húsið', 'húsan'],
        answer: 'húsið',
        explanation: 'Neutro leva «-ið» no fim: «húsið». Masculino «báturin», feminino «konan».',
      },
      {
        question: 'Como fica «grande» em «tann ___ báturin»?',
        options: ['stórur', 'stóri', 'stórt', 'stór'],
        answer: 'stóri',
        explanation: 'Com o definido, o adjetivo vai para a forma fraca: «tann stóri báturin».',
      },
      {
        question: 'Qual é o passado de «fara» (ir)?',
        options: ['faraði', 'fór', 'fardi', 'fer'],
        answer: 'fór',
        explanation: '«fara» é verbo forte: muda a vogal no passado, «eg fór», «vit fóru».',
      },
      {
        question: 'Em «Vit eru í húsinum», em que caso está «húsinum»?',
        options: ['Nominativo', 'Acusativo', 'Dativo', 'Genitivo'],
        answer: 'Dativo',
        explanation: '«í» com ideia de lugar (sem movimento) pede dativo: «í húsinum».',
      },
      {
        question: 'Em «sjúkrahús», o que decide o gênero?',
        options: ['A primeira parte', 'A última parte', 'A letra de ligação', 'O plural'],
        answer: 'A última parte',
        explanation: '«hús» é neutro, então «sjúkrahús» também é: «sjúkrahúsið».',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A frase feroesa segue o V2 (o verbo em segundo lugar: «Í dag fari eg…»), põe o «ikki» depois do verbo na principal e muitas vezes antes dele na subordinada, faz o futuro com «fara at» ou «skal», a passiva com «verða» e a voz média com «-st».',
    sections: [
      {
        heading: 'V2: o verbo sempre em segundo',
        text: 'Na oração principal, o verbo conjugado ocupa a segunda posição. Se a frase começa com outra coisa que não o sujeito (um advérbio, um objeto, uma oração), o sujeito vai para depois do verbo. O brasileiro tende a dizer «Í dag eg fari», que está errado: o certo é «Í dag fari eg». Nas perguntas sem palavra interrogativa, o verbo vem primeiro: «Kemur tú?».',
        table: {
          head: ['Posição 1', 'Verbo', 'Sujeito', 'Resto'],
          rows: [
            ['Eg', 'fari', '', 'til Klaksvíkar í dag.'],
            ['Í dag', 'fari', 'eg', 'til Klaksvíkar.'],
            ['Hvar', 'býrt', 'tú', '?'],
            ['', 'Kemur', 'tú', 'í kvøld?'],
          ],
        },
        examples: [
          ['Í morgin fara vit til Nólsoyar.', 'Amanhã nós vamos para Nólsoy.'],
          ['Hvussu gamal ert tú?', 'Quantos anos você tem?'],
          ['Dámar tær kaffi?', 'Você gosta de café?'],
        ],
      },
      {
        heading: 'O «ikki» na principal e na subordinada',
        text: 'Na principal, «ikki» vem depois do verbo: «Hann kemur ikki». Na subordinada (depois de «at», «um», «tí», «sum»), o padrão escrito põe o «ikki» ANTES do verbo: «Eg veit, at hann ikki kemur». Na fala, a ordem «at hann kemur ikki» também se ouve. Advérbios como «altíð» e «ongantíð» fazem o mesmo caminho.',
        table: {
          head: ['Tipo', 'Ordem', 'Exemplo'],
          rows: [
            ['principal', 'verbo + ikki', 'Hann kemur ikki.'],
            ['subordinada', 'ikki + verbo', '…, at hann ikki kemur.'],
            ['subordinada (fala)', 'verbo + ikki', '…, at hann kemur ikki.'],
          ],
        },
        examples: [
          ['Eg veit, at hann ikki kemur í dag.', 'Eu sei que ele não vem hoje.'],
          ['Hon segði, at hon var trøtt.', 'Ela disse que estava cansada.'],
          ['Maðurin, sum býr her, er fiskimaður.', 'O homem que mora aqui é pescador.'],
        ],
      },
      {
        heading: 'Preposições e casos: parado ou em movimento',
        text: 'Algumas preposições pedem sempre o mesmo caso: «til» pede genitivo, mesmo na fala («til Tórshavnar», «til lækna»); «frá», «hjá» e «úr» pedem dativo; «um» pede acusativo. Outras mudam conforme o sentido: «í» e «á» levam acusativo com movimento (para onde?) e dativo sem movimento (onde?). Alguns verbos pedem dativo no objeto, como «hjálpa»: «Eg hjálpi honum». E «dáma» (gostar) tem o sujeito lógico no dativo: «Mær dámar…».',
        table: {
          head: ['Pergunta', 'Caso', 'Exemplo', 'Português'],
          rows: [
            ['para onde?', 'acusativo', 'Eg fari í býin.', 'Eu vou para a cidade.'],
            ['onde?', 'dativo', 'Eg eri í býnum.', 'Eu estou na cidade.'],
            ['til', 'genitivo', 'Vit fara til Føroya.', 'Nós vamos para as Faroé.'],
            ['hjá', 'dativo', 'Eg búgvi hjá mammu míni.', 'Eu moro com a minha mãe.'],
          ],
        },
        examples: [
          ['Eg hjálpi honum við heimaarbeiðinum.', 'Eu ajudo ele com o dever de casa.'],
          ['Mær dámar ikki regn.', 'Eu não gosto de chuva.'],
          ['Vit fara til Tórshavnar í morgin.', 'Nós vamos para Tórshavn amanhã.'],
        ],
      },
      {
        heading: 'Futuro, passiva e voz média',
        text: 'Para o futuro, o feroês usa o presente com um advérbio de tempo, ou «fara at» + infinitivo («Eg fari at lesa»), ou «skal» para plano e obrigação. A passiva se faz com «verða» + particípio (a ação: «Húsið varð bygt í fjør») ou «vera» + particípio (o resultado: «Húsið er bygt»). A voz média com «-st» expressa reciprocidade («Vit síggjast!», a gente se vê) ou vem fixa no verbo («minnast», lembrar-se).',
        table: {
          head: ['Construção', 'Exemplo', 'Português'],
          rows: [
            ['fara at + inf.', 'Eg fari at lesa í kvøld.', 'Vou ler hoje à noite.'],
            ['skal + inf.', 'Vit skulu til Suðuroyar.', 'Nós vamos (temos que ir) a Suðuroy.'],
            ['verða + part.', 'Húsið varð bygt.', 'A casa foi construída.'],
            ['-st (recíproco)', 'Vit hittast í morgin.', 'A gente se encontra amanhã.'],
          ],
        },
        examples: [
          ['Tað fer at regna seinnapartin.', 'Vai chover à tarde.'],
          ['Vit síggjast!', 'A gente se vê!'],
          ['Eg minnist ikki, hvat hann eitur.', 'Eu não me lembro de como ele se chama.'],
        ],
      },
      {
        heading: 'Condicional e subjuntivo',
        text: 'Para hipóteses, o feroês usa o passado: «Um eg hevði pening, keypti eg ein bát». Para o irreal no passado, «hevði» + supino: «Um eg hevði vitað tað, hevði eg komið». A condição pode vir sem «um», com o verbo na frente: «Hevði eg vitað tað…». O subjuntivo antigo sobrevive em fórmulas e orações, como «Komi ríki títt» (venha a nós o vosso reino) no Pai-Nosso.',
        table: {
          head: ['Tipo', 'Exemplo', 'Português'],
          rows: [
            ['hipótese', 'Um eg hevði tíð, fór eg við.', 'Se eu tivesse tempo, eu iria junto.'],
            ['irreal passado', 'Um eg hevði vitað tað, hevði eg komið.', 'Se eu soubesse, eu teria vindo.'],
            ['sem «um»', 'Hevði eg vitað tað, hevði eg komið.', 'Tivesse eu sabido, teria vindo.'],
            ['subjuntivo fixo', 'Komi ríki títt.', 'Venha o teu reino.'],
          ],
        },
        examples: [
          ['Um veðrið var gott, fóru vit til Nólsoyar.', 'Se o tempo estivesse bom, iríamos a Nólsoy.'],
          ['Kundi tú hjálpa mær?', 'Você poderia me ajudar?'],
          ['Hevði eg vitað tað, hevði eg sagt tær tað.', 'Se eu soubesse, teria te contado.'],
        ],
      },
    ],
    topics: ['fo-g4', 'fo-g7', 'fo-g8', 'fo-g12', 'fo-g13', 'fo-g14', 'fo-g15', 'fo-g16', 'fo-g20', 'fo-g21', 'fo-g22'],
    quiz: [
      {
        question: 'Qual frase respeita o V2?',
        options: ['Í dag eg fari til Klaksvíkar.', 'Í dag fari eg til Klaksvíkar.', 'Eg í dag fari til Klaksvíkar.', 'Fari í dag eg til Klaksvíkar.'],
        answer: 'Í dag fari eg til Klaksvíkar.',
        explanation: 'Começou com «Í dag», então o verbo vem em segundo e o sujeito vai para depois dele.',
      },
      {
        question: 'Onde fica o «ikki» na subordinada, no padrão escrito?',
        options: ['Depois do verbo', 'Antes do verbo', 'No fim da frase', 'Antes do «at»'],
        answer: 'Antes do verbo',
        explanation: '«Eg veit, at hann ikki kemur.» Na principal, ao contrário: «Hann kemur ikki».',
      },
      {
        question: 'Qual caso vem depois de «til»?',
        options: ['Nominativo', 'Acusativo', 'Dativo', 'Genitivo'],
        answer: 'Genitivo',
        explanation: '«til» pede genitivo mesmo na fala: «til Tórshavnar», «til Føroya», «til lækna».',
      },
      {
        question: 'O que quer dizer «Vit síggjast!»?',
        options: ['Nós vemos.', 'A gente se vê!', 'Nós fomos vistos.', 'Vejam!'],
        answer: 'A gente se vê!',
        explanation: 'O «-st» da voz média aqui é recíproco: um vê o outro.',
      },
      {
        question: 'Como se diz «Eu estou na cidade»?',
        options: ['Eg eri í býin.', 'Eg eri í býnum.', 'Eg eri í býsins.', 'Eg eri í býur.'],
        answer: 'Eg eri í býnum.',
        explanation: 'Sem movimento, «í» pede dativo: «í býnum». Com movimento, acusativo: «Eg fari í býin».',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário feroês é nórdico antigo com camadas de dinamarquês; o purismo cria palavras novas com raízes da casa (telda, tyrla, sjónvarp), os nomes de lugar descrevem a paisagem (vík, fjørður, gjógv) e muitas palavras têm sentidos que o brasileiro não espera (ferð é viagem, vez e velocidade).',
    sections: [
      {
        heading: 'O purismo: palavras feitas em casa',
        text: 'Desde o século XIX, o movimento nacional tenta tirar os dinamarquismos e criar palavras com raízes nórdicas. Muitas deram certo: «telda» (computador, de «telja», contar), «tyrla» (helicóptero, a que gira), «sjónvarp» (televisão), «útvarp» (rádio), «flogfar» (avião), «alnet» (internet). Outras convivem com o dinamarquismo da fala: no dia a dia, muita gente ainda diz palavras dinamarquesas que a escola e a mídia evitam. O islandês faz o mesmo, e muitas vezes os dois criam a mesma palavra.',
        table: {
          head: ['Feroês', 'Formação', 'Dinamarquês', 'Português'],
          rows: [
            ['telda', 'de telja (contar)', 'computer', 'computador'],
            ['tyrla', 'de tyrla (girar)', 'helikopter', 'helicóptero'],
            ['sjónvarp', 'sjón + varp', 'fjernsyn', 'televisão'],
            ['flogfar', 'flog + far', 'fly', 'avião'],
            ['alnet', 'al- + net', 'internet', 'internet'],
          ],
        },
        examples: [
          ['Teldan hjá mær er ov gomul.', 'O meu computador é velho demais.'],
          ['Tyrlan flýgur til Suðuroyar.', 'O helicóptero voa para Suðuroy.'],
          ['Hevur tú alnet heima?', 'Você tem internet em casa?'],
        ],
      },
      {
        heading: 'Uma palavra, vários sentidos',
        text: 'Algumas palavras básicas cobrem mais de um sentido, e o contexto decide. «Ferð» é viagem, vez e velocidade: «Góða ferð!» (boa viagem), «ein ferð» (uma vez), «á fullari ferð» (a toda velocidade). «Vatn» é água e lago. «Epli» é maçã, mas na fala é sobretudo a batata. E «vakur» quer dizer bonito, embora o islandês «vakur» seja alerta.',
        table: {
          head: ['Palavra', 'Sentido 1', 'Sentido 2', 'Sentido 3'],
          rows: [
            ['ferð', 'viagem', 'vez', 'velocidade'],
            ['vatn', 'água', 'lago', ''],
            ['epli', 'maçã', 'batata (na fala)', ''],
            ['mál', 'língua', 'meta, objetivo', 'assunto'],
          ],
        },
        examples: [
          ['Góða ferð til Føroya!', 'Boa viagem para as Faroé!'],
          ['Eg havi verið har eina ferð.', 'Eu estive lá uma vez.'],
          ['Sørvágsvatn er størsta vatnið í Føroyum.', 'Sørvágsvatn é o maior lago das Faroé.'],
        ],
      },
      {
        heading: 'Os nomes de lugar: ler a paisagem',
        text: 'Quase todo nome de lugar nas Faroé é uma descrição da paisagem em nórdico antigo. Klaksvík tem «vík» (enseada); Gjógv é a fenda na rocha que serve de porto; Kirkjubøur é a «fazenda da igreja»; Tórshavn, o «porto de Thor»; Suðuroy, Eysturoy e Streymoy são a ilha do sul, a do leste e a da correnteza. Quem aprende essas peças lê o mapa como um texto.',
        table: {
          head: ['Peça', 'Sentido', 'Exemplo'],
          rows: [
            ['-vík', 'enseada', 'Klaksvík'],
            ['-havn', 'porto', 'Tórshavn'],
            ['-bøur', 'fazenda, campo cercado', 'Kirkjubøur'],
            ['-oy', 'ilha', 'Suðuroy, Eysturoy, Streymoy'],
            ['-dalur', 'vale', 'Mikladalur'],
          ],
        },
        examples: [
          ['Eysturoy er oyggin í eystri.', 'Eysturoy é a ilha do leste.'],
          ['Kirkjubøur liggur sunnast á Streymoy.', 'Kirkjubøur fica no extremo sul de Streymoy.'],
          ['Í Mykinesi eru nógvir lundar.', 'Em Mykines há muitos papagaios-do-mar.'],
        ],
      },
      {
        heading: 'Expressões feitas',
        text: 'Muitas expressões do dia a dia não se traduzem ao pé da letra. «Takk fyri seinast» é o obrigado pela última vez que nos vimos, dito ao reencontrar alguém. «Væl bekomi» é o bom proveito, dito depois da refeição, quando alguém agradece a comida. «Mær dámar» (eu gosto) tem quem gosta no dativo: literalmente, «a mim agrada».',
        table: {
          head: ['Expressão', 'Ao pé da letra', 'Quando se usa'],
          rows: [
            ['Takk fyri seinast!', 'Obrigado pela última vez!', 'ao reencontrar alguém'],
            ['Væl bekomi!', 'Que faça bem!', 'depois da refeição'],
            ['Mær dámar…', 'A mim agrada…', 'para dizer do que gosta'],
            ['Ver so góður!', 'Seja tão bom!', 'por favor, ao oferecer algo'],
          ],
        },
        examples: [
          ['Takk fyri seinast! Tað var stuttligt.', 'Obrigado pela última vez! Foi divertido.'],
          ['Takk fyri matin! Væl bekomi!', 'Obrigado pela comida! Bom proveito!'],
          ['Mær dámar væl at ganga á fjallinum.', 'Eu gosto muito de caminhar na montanha.'],
        ],
      },
    ],
    topics: ['fo-g25', 'fo-g26', 'fo-g33', 'fo-g35'],
    quiz: [
      {
        question: 'De onde vem «telda» (computador)?',
        options: ['Do inglês «tell»', 'Do verbo «telja», contar', 'Do dinamarquês «computer»', 'Do latim'],
        answer: 'Do verbo «telja», contar',
        explanation: 'É uma criação purista com raiz nórdica, no lugar do dinamarquês «computer».',
      },
      {
        question: 'O que quer dizer «ferð» em «eina ferð»?',
        options: ['viagem', 'vez', 'velocidade', 'caminho'],
        answer: 'vez',
        explanation: '«ferð» é viagem, vez e velocidade; «eina ferð» é «uma vez».',
      },
      {
        question: 'O que é «Eysturoy»?',
        options: ['A ilha do sul', 'A ilha do leste', 'A ilha da correnteza', 'A ilha das ovelhas'],
        answer: 'A ilha do leste',
        explanation: '«eystur» (leste) + «oy» (ilha). Suðuroy é a do sul; Streymoy, a da correnteza.',
      },
      {
        question: 'Quando se diz «Takk fyri seinast»?',
        options: ['Ao se despedir para sempre', 'Ao reencontrar alguém', 'Antes de comer', 'Ao pedir desculpa'],
        answer: 'Ao reencontrar alguém',
        explanation: 'Agradece a última vez em que as pessoas estiveram juntas.',
      },
      {
        question: 'Em «Mær dámar kaffi», quem gosta está em que caso?',
        options: ['Nominativo', 'Acusativo', 'Dativo', 'Genitivo'],
        answer: 'Dativo',
        explanation: '«mær» é o dativo de «eg»: literalmente, «a mim agrada café».',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O feroês é uma língua de comunidade pequena: todo mundo se trata por «tú», o nome de batismo basta, a cortesia vem mais do tom e das perguntas («Kundi tú…?») do que de fórmulas, e o dinamarquês ainda aparece na escola, na igreja e em papéis oficiais.',
    sections: [
      {
        heading: 'Saudações e o «tú» de todo mundo',
        text: 'Numa comunidade de cerca de 50 mil pessoas, onde quase todos se conhecem, a língua é informal. «Tú» serve para todo mundo, inclusive para o médico e o chefe do governo, e as pessoas se chamam pelo primeiro nome. A forma de respeito «tygum» existe, mas soa antiga: aparece em textos formais e na fala de gente mais velha. «Hey!» é o oi de todo dia, «Góðan morgun» e «Góðan dag» são mais formais, e «Farvæl» é o adeus.',
        table: {
          head: ['Situação', 'Feroês', 'Português'],
          rows: [
            ['cumprimento', 'Hey! / Góðan dag!', 'Oi! / Bom dia!'],
            ['como vai', 'Hvussu gongur?', 'Como vai?'],
            ['resposta', 'Tað gongur væl, takk.', 'Vai bem, obrigado.'],
            ['despedida', 'Farvæl! / Vit síggjast!', 'Tchau! / A gente se vê!'],
          ],
        },
        examples: [
          ['Hey! Hvussu gongur?', 'Oi! Como vai?'],
          ['Tað gongur væl, takk. Og hjá tær?', 'Vai bem, obrigado. E com você?'],
          ['Farvæl, og góða ferð!', 'Tchau, e boa viagem!'],
        ],
      },
      {
        heading: 'Pedir com jeito',
        text: 'O feroês não tem uma palavra tão automática quanto o nosso «por favor». A cortesia está na pergunta e no tempo verbal: «Kanst tú hjálpa mær?» (pode me ajudar?) fica mais gentil como «Kundi tú hjálpa mær?» (poderia me ajudar?). Para oferecer, «Ver so góður» / «Ver so góð» (seja tão bom/boa). Para desculpar-se, «Orsaka!». E o «takk» aparece o tempo todo, inclusive depois da refeição: «Takk fyri matin!».',
        table: {
          head: ['Função', 'Feroês', 'Português'],
          rows: [
            ['pedido direto', 'Kanst tú hjálpa mær?', 'Pode me ajudar?'],
            ['pedido gentil', 'Kundi tú hjálpa mær?', 'Poderia me ajudar?'],
            ['oferecer', 'Ver so góður!', 'Fique à vontade! / Por favor!'],
            ['desculpa', 'Orsaka!', 'Desculpe!'],
          ],
        },
        examples: [
          ['Kanst tú siga mær, nær bussurin fer?', 'Pode me dizer quando o ônibus sai?'],
          ['Orsaka, eg skilji ikki.', 'Desculpe, eu não entendo.'],
          ['Takk fyri matin!', 'Obrigado pela comida!'],
        ],
      },
      {
        heading: 'Nas repartições e por escrito',
        text: 'Nos e-mails e nas cartas, o tom também é direto: «Góðan dag» ou «Hey» na abertura, o assunto logo em seguida e «Vinarliga» (cordialmente) no fim. Na «kommunan» (a prefeitura), no médico ou no banco, o atendimento é por «tú», e o genitivo e as palavras longas aparecem mais nos formulários do que na fala.',
        table: {
          head: ['Parte', 'Feroês', 'Português'],
          rows: [
            ['abertura', 'Góðan dag, Jógvan', 'Bom dia, Jógvan'],
            ['pedido', 'Eg skrivi viðvíkjandi…', 'Escrevo a respeito de…'],
            ['fecho', 'Vinarliga', 'Cordialmente'],
          ],
        },
        examples: [
          ['Eg skrivi viðvíkjandi umsóknini.', 'Escrevo a respeito do pedido.'],
          ['Eg havi tíð hjá lækna klokkan tvey.', 'Eu tenho consulta com o médico às duas.'],
          ['Vinarliga, Rakul', 'Cordialmente, Rakul'],
        ],
      },
      {
        heading: 'Dar opinião e discordar',
        text: 'Para opinar, «Eg haldi, at…» (eu acho que…). Para concordar, «Eg eri samdur» (concordo; «samd» no feminino). Para discordar com cuidado, primeiro se reconhece o outro: «Tú hevur rætt, men…» (você tem razão, mas…). Em debate, o tom costuma ser calmo: numa sociedade pequena, os adversários de hoje são os vizinhos de amanhã.',
        table: {
          head: ['Função', 'Feroês', 'Português'],
          rows: [
            ['opinar', 'Eg haldi, at…', 'Eu acho que…'],
            ['concordar', 'Eg eri samdur / samd.', 'Eu concordo.'],
            ['discordar', 'Tú hevur rætt, men…', 'Você tem razão, mas…'],
          ],
        },
        examples: [
          ['Eg haldi, at tað er eitt gott hugskot.', 'Eu acho que é uma boa ideia.'],
          ['Eg eri ikki heilt samd.', 'Eu não concordo totalmente.'],
          ['Tú hevur rætt, men tað kostar nógv.', 'Você tem razão, mas custa caro.'],
        ],
      },
      {
        heading: 'O dinamarquês nas Faroé',
        text: 'Por séculos, o dinamarquês foi a língua da igreja, da escola e da administração, e o feroês ficou na fala e nas baladas. O feroês se tornou a língua principal do arquipélago com a autonomia de 1948, mas o dinamarquês continua obrigatório na escola, e os feroeses o leem com facilidade. O «gøtudanskt», o «dinamarquês de rua», é o dinamarquês falado com pronúncia feroesa. Na fala, muitas palavras dinamarquesas convivem com as feroesas: saber quando usar cada uma é parte da competência pragmática.',
        table: {
          head: ['Fala com dinamarquismo', 'Forma purista', 'Português'],
          rows: [
            ['bilur', '(sem alternativa comum)', 'carro'],
            ['strikka', 'binda', 'tricotar'],
            ['musik', 'tónleikur', 'música'],
          ],
        },
        examples: [
          ['Í skúlanum læra børnini eisini danskt.', 'Na escola, as crianças também aprendem dinamarquês.'],
          ['Føroyskt er høvuðsmálið í Føroyum.', 'O feroês é a língua principal das Faroé.'],
          ['Hon bindur eina troyggju.', 'Ela tricota uma blusa.'],
        ],
      },
    ],
    topics: ['fo-g2', 'fo-g23', 'fo-g24', 'fo-g28', 'fo-g32'],
    quiz: [
      {
        question: 'Como se trata o médico nas Faroé?',
        options: ['Por «tygum»', 'Por «tú»', 'Pelo sobrenome', 'Por «hann»'],
        answer: 'Por «tú»',
        explanation: '«tú» serve para todo mundo; «tygum» soa antigo.',
      },
      {
        question: 'Qual é o pedido mais gentil?',
        options: ['Hjálp mær!', 'Kanst tú hjálpa mær?', 'Kundi tú hjálpa mær?', 'Tú hjálpir mær.'],
        answer: 'Kundi tú hjálpa mær?',
        explanation: 'O passado do modal («kundi») suaviza o pedido, como o nosso «poderia».',
      },
      {
        question: 'O que se diz depois da refeição a quem cozinhou?',
        options: ['Farvæl!', 'Takk fyri matin!', 'Orsaka!', 'Góða ferð!'],
        answer: 'Takk fyri matin!',
        explanation: 'E quem cozinhou responde «Væl bekomi!».',
      },
      {
        question: 'O que é o «gøtudanskt»?',
        options: ['Um dialeto de Suðuroy', 'O dinamarquês falado com pronúncia feroesa', 'Uma balada', 'O feroês escrito'],
        answer: 'O dinamarquês falado com pronúncia feroesa',
        explanation: 'Literalmente «dinamarquês de rua»: é o dinamarquês como os feroeses o falam.',
      },
      {
        question: 'Como se discorda com cuidado?',
        options: ['Tú hevur rætt, men…', 'Eg eri samdur.', 'Takk fyri seinast.', 'Ver so góður.'],
        answer: 'Tú hevur rætt, men…',
        explanation: 'Primeiro se reconhece o ponto do outro, depois vem o «men» (mas).',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O estilo feroês vai das baladas (kvæði) cantadas na dança em roda, que guardaram a língua por séculos, à prosa nominal dos relatórios e da pesca, passando pelos conectores que organizam o texto e pelos provérbios que guardam gramática antiga.',
    sections: [
      {
        heading: 'As baladas e a dança em roda',
        text: 'As «kvæði» são baladas longas, com dezenas ou centenas de estrofes, sobre heróis, reis e as sagas nórdicas. Elas se cantam na dança em roda: as pessoas dão as mãos, dão passos para a esquerda e para a direita, e um puxador, o «skipari», canta as estrofes, enquanto todos repetem o refrão, o «niðurlag». A mais famosa é «Ormurin langi» (A Serpente Longa), de Jens Christian Djurhuus, sobre a batalha naval do rei Olavo Tryggvason. Foi assim, cantando, que o feroês atravessou os séculos em que a escrita era dinamarquesa.',
        table: {
          head: ['Termo', 'Sentido'],
          rows: [
            ['kvæði', 'balada longa, cantada'],
            ['skipari', 'o puxador, quem canta as estrofes'],
            ['niðurlag', 'o refrão, que todos cantam'],
            ['føroyskur dansur', 'a dança em roda feroesa'],
          ],
        },
        examples: [
          ['Glymur dansur í høll, dans slá í ring.', 'Ressoa a dança no salão, formem a roda. (refrão de «Ormurin langi»)'],
          ['Á Ólavsøku dansa fólk í Havn.', 'Na Ólavsøka, o povo dança em Tórshavn.'],
          ['Skiparin kvøður, og øll taka undir.', 'O puxador canta e todos acompanham.'],
        ],
      },
      {
        heading: 'Svabo, Hammershaimb e a escrita',
        text: 'Jens Christian Svabo (1746–1824) foi o primeiro a anotar as baladas e a fazer um dicionário do feroês, numa grafia que seguia a fala. V. U. Hammershaimb (1819–1909) criou em 1846 a ortografia atual, etimológica, que aproximou o feroês do islandês e deu a todas as ilhas uma escrita comum. No século XX veio a literatura moderna: Janus Djurhuus (1881–1948) publicou em 1914 «Yrkingar», o primeiro livro de poemas líricos em feroês.',
        table: {
          head: ['Nome', 'Datas', 'Contribuição'],
          rows: [
            ['Jens Christian Svabo', '1746–1824', 'anotou baladas, fez o primeiro dicionário'],
            ['V. U. Hammershaimb', '1819–1909', 'criou a ortografia etimológica (1846)'],
            ['Janus Djurhuus', '1881–1948', 'primeiro livro de poemas líricos (1914)'],
          ],
        },
        examples: [
          ['Svabo skrivaði kvæðini upp, sum hann hoyrdi tey.', 'Svabo anotou as baladas como as ouvia.'],
          ['Hammershaimb gav føroyingum eitt skriftmál.', 'Hammershaimb deu aos feroeses uma língua escrita.'],
          ['Janus Djurhuus var ein stórur yrkjari.', 'Janus Djurhuus foi um grande poeta.'],
        ],
      },
      {
        heading: 'O estilo nominal: relatórios, ciência e pesca',
        text: 'Nos textos técnicos, o feroês prefere substantivos compostos e o genitivo, que quase some da fala: «fiskiveiðan» (a pesca), «landsstýrið» (o governo), «Føroya Løgting». A frase fica mais densa e impessoal, com passivas e «-st»: «Tað verður mett, at…» (estima-se que…). Os termos técnicos seguem o purismo: se pode, cria-se uma palavra com raiz feroesa.',
        table: {
          head: ['Fala', 'Estilo nominal', 'Português'],
          rows: [
            ['Teir fiska minni nú.', 'Minking í fiskiveiðuni', 'A diminuição da pesca'],
            ['Landsstýrið avgjørdi…', 'Avgerð landsstýrisins…', 'A decisão do governo…'],
            ['Vit halda, at…', 'Tað verður mett, at…', 'Estima-se que…'],
          ],
        },
        examples: [
          ['Fiskiveiðan er ein av høvuðsvinnunum í Føroyum.', 'A pesca é uma das principais atividades das Faroé.'],
          ['Tað verður mett, at fleiri ferðafólk koma í ár.', 'Estima-se que mais turistas venham este ano.'],
          ['Løgtingið samtykti lógina.', 'O parlamento aprovou a lei.'],
        ],
      },
      {
        heading: 'Conectores e provérbios',
        text: 'Os conectores organizam a argumentação e, quando abrem a frase, puxam o verbo para a segunda posição: «Harafturat eru…» (além disso, há…), «Kortini fóru vit út» (mesmo assim, saímos), «Tessvegna eri eg trøttur» (por isso estou cansado). Os provérbios, «málshættir», guardam formas antigas, como o dativo e a ordem de palavras mais livre, e dão um toque de sabedoria popular ao texto.',
        table: {
          head: ['Conector', 'Função', 'Português'],
          rows: [
            ['harafturat', 'adição', 'além disso'],
            ['kortini', 'concessão', 'mesmo assim'],
            ['tessvegna', 'consequência', 'por isso'],
            ['tí', 'causa', 'porque'],
          ],
        },
        examples: [
          ['Tað regnaði, kortini fóru vit út.', 'Chovia; mesmo assim, saímos.'],
          ['Tessvegna eri eg so trøttur í dag.', 'Por isso estou tão cansado hoje.'],
          ['Harafturat er veðrið gott.', 'Além disso, o tempo está bom.'],
        ],
      },
    ],
    topics: ['fo-g29', 'fo-g31', 'fo-g34', 'fo-g36', 'fo-g37', 'fo-g38', 'fo-g39', 'fo-g40'],
    quiz: [
      {
        question: 'Quem canta as estrofes na dança em roda?',
        options: ['O niðurlag', 'O skipari', 'O kvæði', 'O løgmaður'],
        answer: 'O skipari',
        explanation: 'O «skipari» puxa as estrofes; todos juntos cantam o refrão, o «niðurlag».',
      },
      {
        question: 'Quem criou a ortografia feroesa atual, em 1846?',
        options: ['Jens Christian Svabo', 'V. U. Hammershaimb', 'Janus Djurhuus', 'Jens Christian Djurhuus'],
        answer: 'V. U. Hammershaimb',
        explanation: 'Svabo anotou as baladas antes, numa grafia que seguia a fala; Hammershaimb criou a escrita etimológica.',
      },
      {
        question: 'Qual frase respeita o V2 depois do conector?',
        options: ['Kortini vit fóru út.', 'Kortini fóru vit út.', 'Vit kortini út fóru.', 'Fóru kortini út vit.'],
        answer: 'Kortini fóru vit út.',
        explanation: 'O conector ocupa a primeira posição, e o verbo vem em segundo.',
      },
      {
        question: 'Onde o genitivo aparece mais?',
        options: ['Na conversa em casa', 'Nos textos técnicos e oficiais', 'Nas saudações', 'Nas perguntas'],
        answer: 'Nos textos técnicos e oficiais',
        explanation: 'Na fala ele é trocado por «hjá» e preposições; o estilo nominal o usa bastante.',
      },
      {
        question: 'Por que as baladas foram importantes para a língua?',
        options: ['Eram lidas na escola', 'Guardaram o feroês oral quando a escrita era dinamarquesa', 'Foram escritas por Hammershaimb', 'Eram cantadas em islandês'],
        answer: 'Guardaram o feroês oral quando a escrita era dinamarquesa',
        explanation: 'Cantadas na dança em roda, elas passaram a língua de geração em geração sem escrita.',
      },
    ],
  },
];
