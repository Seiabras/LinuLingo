import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do maltês — A1 (mt-g1 a mt-g4) e A2 (mt-g5 a mt-g8; pacote ainda incompleto,
 * falta do B1 ao C1). Fontes do A1: Wikipédia em inglês (“Maltese language”, “Maltese grammar”,
 * “Maltese alphabet”, “Siculo-Arabic”) e Wiktionary (verbetes individuais — ver os comentários de
 * vocabulario.ts). Fontes novas do A2: Wiktionary em inglês, verbete por verbete (kiel, xorob,
 * xtara, raqad, ħadem, huwa, mhux, dan, dak, ta') — ver a lista completa no cabeçalho de
 * vocabulario.ts.
 */
export const GRAMMAR_MT: GrammarTopic[] = [
  {
    id: 'mt-g1',
    level: 'A1.1',
    title: 'O alfabeto latino com letras próprias: ċ, ġ, ħ, ż, għ',
    emoji: '🔤',
    summary: 'O maltês é a única língua semítica padronizada do mundo escrita só em alfabeto latino, com letras extras para sons que o latim não tinha.',
    sections: [
      {
        text: 'Apesar de descender do árabe siciliano, o maltês nunca usou o alfabeto árabe: desde que começou a ser escrito, usa o alfabeto latino, com ortografia padronizada oficialmente em 1924. Para os sons que faltavam no latim, ganhou letras novas: ċ, ġ, ħ, ż e o dígrafo għ. A letra ċ foi usada pela primeira vez por Martin Cannolo no Evangelho maltês de 1822; o ġ começou como um “g” com trema (g̈) e foi reduzido a um ponto só em 1843.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ċ', '“tch” de “tchau”', 'jiddispjaċini (sinto muito)'],
            ['ġ', '“dj” de “adjetivo”', 'bonġu (bom dia)'],
            ['ħ', 'h soprado, mais forte que o h do inglês', 'ħobż (pão)'],
            ['ż', '“z” sempre sonoro (nunca som de “s”)', 'żgħir (pequeno)'],
            ['għ', 'quase sempre muda — vira uma pausa na garganta (glotal)', 'għajn (olho)'],
          ],
        },
        examples: [
          ['Bonġu!', 'Bom dia!'],
          ['Żgħir.', 'Pequeno.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o maltês se escreve em alfabeto árabe por ser uma língua semítica: na verdade é a única língua semítica padronizada do mundo escrita só em latim.',
      'Pronunciar “għ” como se fosse uma letra comum: ela quase sempre não tem som próprio, só muda a vogal ao lado.',
    ],
    quiz: [
      { question: 'Em que alfabeto se escreve o maltês?', options: ['Alfabeto latino', 'Alfabeto árabe', 'Alfabeto hebraico'], answer: 'Alfabeto latino', explanation: 'O maltês é a única língua semítica padronizada do mundo escrita só em alfabeto latino, com letras extras como ċ, ġ, ħ, ż e għ.' },
      { question: 'Como soa a letra “ħ” em “ħobż”?', options: ['Um h soprado, mais forte que o inglês', 'Como “k”', 'Como “r”'], answer: 'Um h soprado, mais forte que o inglês', explanation: '“Ħ” é uma fricativa faríngea: um h bem mais forte que o do inglês.' },
    ],
  },
  {
    id: 'mt-g2',
    level: 'A1.1',
    title: 'Raízes de três letras: o esqueleto semítico por trás do latim',
    emoji: '🧬',
    summary: 'Por baixo da escrita latina, o maltês guarda a morfologia semítica de raízes com três consoantes, a mesma lógica do árabe.',
    sections: [
      {
        text: 'Como no árabe, muitas palavras do núcleo semítico do maltês compartilham uma raiz de três consoantes, que muda de sentido conforme as vogais e os afixos ao redor. A raiz x-m-x (sol) dá xemx (sol), xemxi (ensolarado) e nixxemmex (eu tomo sol). Substantivos coletivos seguem lógica parecida: ħobż é “pão” (em geral), e ħobża é “um pão” (uma unidade). Alguns plurais mudam as vogais por dentro, sem sufixo — o chamado “plural quebrado”: ktieb (livro) vira kotba (livros).',
        table: {
          head: ['Raiz/forma', 'Palavra', 'Sentido'],
          rows: [
            ['x-m-x', 'xemx', 'sol'],
            ['x-m-x', 'xemxi', 'ensolarado'],
            ['x-m-x', 'nixxemmex', 'eu tomo sol'],
            ['ħ-b-ż', 'ħobż / ħobża', 'pão / um pão'],
          ],
        },
        examples: [
          ['Ix-xemx.', 'O sol.'],
          ['Il-ħobż.', 'O pão.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um sufixo regular para o plural, como em português: muitos plurais do maltês mudam as vogais de dentro da palavra (kotba, não um suposto “ktiebs”).',
      'Achar que, por ter uma camada de palavras italianas por cima, o maltês perdeu a lógica semítica de raízes: ela continua viva nas palavras do núcleo, mesmo escritas em latim.',
    ],
    quiz: [
      { question: 'O que liga “xemx” (sol) e “xemxi” (ensolarado)?', options: ['A mesma raiz de três consoantes: x-m-x', 'Nada, são palavras diferentes', 'Um sufixo italiano'], answer: 'A mesma raiz de três consoantes: x-m-x', explanation: 'Trocando as vogais e acrescentando afixos em volta da raiz x-m-x, o maltês forma uma família de palavras ligadas ao sol.' },
      { question: 'Qual é o plural de “ktieb” (livro)?', options: ['kotba', 'ktiebs', 'kotbiet'], answer: 'kotba', explanation: 'É um “plural quebrado”: as vogais de dentro da palavra mudam, sem precisar de um sufixo.' },
    ],
  },
  {
    id: 'mt-g3',
    level: 'A1.2',
    title: '“Il-” que vira “id-”, “ix-”, “in-”: as consoantes solares',
    emoji: '☀️',
    summary: 'O artigo definido il- se cola nas consoantes seguintes e muda de forma: as chamadas “consoantes solares”, herdadas do árabe.',
    sections: [
      {
        text: 'O artigo definido do maltês é il- (“o”, “a”). Antes de vogal, ele vira l-: l-omm (a mãe), l-ilma (a água). Mas antes de nove consoantes chamadas de konsonanti xemxin (“consoantes solares”) — Ċ, D, N, R, S, T, X, Ż, Z —, o l do artigo desaparece e vira a própria consoante da palavra: id-dar (a casa, com d), ix-xemx (o sol, com x), in-nar (o fogo, com n), is-siġra (a árvore, com s). A troca é quase idêntica à das letras solares do árabe, herdada junto com a gramática semítica do maltês.',
        table: {
          head: ['Palavra', 'Com artigo', 'Consoante solar?'],
          rows: [
            ['dar (casa)', 'id-dar', 'sim (d)'],
            ['xemx (sol)', 'ix-xemx', 'sim (x)'],
            ['nar (fogo)', 'in-nar', 'sim (n)'],
            ['siġra (árvore)', 'is-siġra', 'sim (s)'],
            ['qamar (lua)', 'il-qamar', 'não — fica il-'],
            ['kelb (cachorro)', 'il-kelb', 'não — fica il-'],
          ],
        },
        examples: [
          ['Id-dar.', 'A casa.'],
          ['Ix-xemx.', 'O sol.'],
          ['Il-qamar.', 'A lua.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar prever a consoante solar pela escrita portuguesa: são nove consoantes específicas do maltês (Ċ, D, N, R, S, T, X, Ż, Z), para decorar de cor.',
      'Manter o l do artigo antes de uma consoante solar (“il-dar” em vez de “id-dar”).',
    ],
    quiz: [
      { question: 'Como fica “il-” antes de “dar” (casa)?', options: ['id-dar', 'il-dar', 'idar'], answer: 'id-dar', explanation: '“D” é uma consoante solar: o l do artigo vira d, dobrando a consoante da palavra.' },
      { question: 'Qual destas NÃO é uma consoante solar do maltês?', options: ['k', 'd', 's'], answer: 'k', explanation: 'As consoantes solares são Ċ, D, N, R, S, T, X, Ż e Z — “k” não está na lista, então o artigo fica “il-” (il-kelb).' },
    ],
  },
  {
    id: 'mt-g4',
    level: 'A1.2',
    title: 'Palavras árabes e palavras italianas: duas camadas, um idioma',
    emoji: '🌍',
    summary: 'O vocabulário do maltês tem uma base semítica e uma grande camada do italiano/siciliano por cima — e um pouco de inglês.',
    sections: [
      {
        text: 'Cerca de um terço do vocabulário maltês vem do núcleo semítico herdado do árabe siciliano (palavras do dia a dia, como dar “casa”, tajjeb “bom”, ħobż “pão”), pouco mais da metade vem do italiano e do siciliano (como familja “família”, kamra “quarto”, grazzi “obrigado”), e entre 6% e 20% vem do inglês, a outra língua oficial de Malta. A origem às vezes surpreende: “missier” (pai) parece uma palavra de parentesco bem antiga, mas veio do siciliano antigo “misseri” e substituiu a palavra semítica nativa “bu” — enquanto “ħu” (irmão) e “oħt” (irmã) continuam semíticos, herdados do árabe.',
        table: {
          head: ['Palavra', 'Camada', 'Vem de'],
          rows: [
            ['dar', 'semítica', 'árabe dār'],
            ['tajjeb', 'semítica', 'árabe ṭayyib'],
            ['missier', 'românica', 'siciliano antigo misseri'],
            ['familja', 'românica', 'italiano famiglia'],
            ['grazzi', 'românica', 'siciliano grazzi'],
          ],
        },
        examples: [
          ['Grazzi!', 'Obrigado! (do siciliano)'],
          ['Tajjeb.', 'Bom. (do árabe)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que toda palavra parecida com italiano é recente ou “menos maltesa”: grazzi e familja são maltês há séculos, tanto quanto dar ou tajjeb.',
      'Achar que o maltês é “árabe com sotaque”: a camada românica é maior em número de palavras (pouco mais da metade do vocabulário vem do italiano/siciliano) do que o núcleo semítico (cerca de um terço).',
    ],
    quiz: [
      { question: 'De onde vem “familja” (família)?', options: ['Do italiano “famiglia”', 'Do árabe', 'Do inglês'], answer: 'Do italiano “famiglia”', explanation: '“Familja” foi emprestada do italiano, assim como “kamra” (quarto) e “grazzi” (obrigado).' },
      { question: 'Qual camada do vocabulário maltês é a maior?', options: ['A românica (italiano/siciliano)', 'A semítica (árabe)', 'A inglesa'], answer: 'A românica (italiano/siciliano)', explanation: 'Pouco mais da metade do vocabulário vem do italiano e do siciliano — mais que o núcleo semítico, de cerca de um terço.' },
    ],
  },
  {
    id: 'mt-g5',
    level: 'A2.1',
    title: 'O presente (imperfeito): os prefixos n-, t-, j-',
    emoji: '🔁',
    summary: 'O maltês marca a pessoa do presente com um prefixo antes do radical — n- para “eu”/“nós”, t- para “você”/“ela”/“vocês”, j- para “ele”/“eles” — e ainda acrescenta um sufixo no plural.',
    sections: [
      {
        text: 'As tabelas do Wiktionary para os verbos kiel (comer), xorob (beber), xtara (comprar), raqad (dormir) e ħadem (trabalhar) mostram o mesmo padrão: o presente (chamado de “imperfeito”, porque também serve para o futuro e o hábito) troca a forma de citação por um radical com um prefixo de pessoa — n-, t- ou j- — e, no plural, também um sufixo.',
        table: {
          head: ['Pessoa', 'kiel (comer)', 'xtara (comprar)', 'raqad (dormir)'],
          rows: [
            ['jien (eu)', 'niekol', 'nixtri', 'norqod'],
            ['int (você)', 'tiekol', 'tixtri', 'torqod'],
            ['hu (ele)', 'jiekol', 'jixtri', 'jorqod'],
            ['hi (ela)', 'tiekol', 'tixtri', 'torqod'],
            ['aħna (nós)', 'nieklu', 'nixtru', 'norqdu'],
            ['intom (vocês)', 'tieklu', 'tixtru', 'torqdu'],
            ['huma (eles)', 'jieklu', 'jixtru', 'jorqdu'],
          ],
        },
        examples: [
          ['Jien nixtri ħobż.', 'Eu compro pão.'],
          ['Jien norqod.', 'Eu durmo.'],
        ],
      },
      {
        heading: 'Um padrão, três prefixos',
        text: 'Repare que “você” (int) e “ela” (hi) sempre levam o mesmo prefixo t-, e por isso a mesma forma — só o contexto (ou um pronome explícito) diz qual das duas é. “Ele” (hu) e “eles” (huma) usam j-; “eu” (jien) e “nós” (aħna) usam n-, com um sufixo -u a mais no plural.',
      },
    ],
    pitfalls: [
      'Achar que “você” e “ela” têm formas diferentes no presente: as duas usam o prefixo t- e por isso a mesma forma (tiekol, tixtri, torqod).',
      'Esquecer o sufixo -u do plural: “nós comemos” é “nieklu”, não “niekol”.',
    ],
    quiz: [
      { question: 'Qual prefixo marca “ele” e “eles” no presente do maltês?', options: ['j-', 'n-', 't-'], answer: 'j-', explanation: '“Hu” (ele) e “huma” (eles) usam o prefixo j-: jiekol, jixtri, jorqod (no plural, jieklu, jixtru, jorqdu).' },
      { question: 'Como se diz “eu compro” em maltês?', options: ['Nixtri.', 'Tixtri.', 'Jixtri.'], answer: 'Nixtri.', explanation: '“Jien” (eu) usa o prefixo n-: nixtri.' },
    ],
  },
  {
    id: 'mt-g6',
    level: 'A2.1',
    title: 'Dizer “é” sem um verbo “ser”: huwa, hija e mhux',
    emoji: '🧩',
    summary: 'O maltês não tem um verbo “ser” conjugado no presente: o pronome (huwa “ele/isso”, hija “ela/isso”) pode fazer esse papel entre sujeito e predicado, e a negação dessas frases usa “mhux”, não um verbo negado.',
    sections: [
      {
        text: 'Como o A1 deste pacote já avisava, o maltês não tem uma fonte própria e confirmada para um verbo “ser” no presente. O que existe — e agora entra neste pacote — é o uso do pronome de terceira pessoa (huwa, “ele”/“isso”; hija, “ela”/“isso”) ligando um sujeito a um predicado, como em “Ix-xogħol huwa tajjeb” (o trabalho é bom, literalmente “o trabalho ele bom”). Com outras pessoas, a frase continua sem nenhum verbo, só sujeito e predicado lado a lado, como já aparecia no A1 (“Il-kelb... Tajjeb!”).',
        examples: [
          ['Ix-xogħol huwa tajjeb.', 'O trabalho é bom.'],
          ['Il-belt hija kbira.', 'A cidade é grande.'],
          ['Jien rrid ilma.', '(frase com verbo de verdade, pra comparar) Eu quero água.'],
        ],
      },
      {
        heading: 'A negação: “mhux”',
        text: 'O Wiktionary mostra que “mhux” nasceu da junção “ma” (não) + “hu” (ele) + “-x” (marca de negação) e hoje nega justamente esse tipo de frase sem verbo: nomes, adjetivos e advérbios. Por isso “o pão não é caro” não nega um verbo “ser” — nega a frase inteira com “mhux” na frente.',
        examples: [['Il-ħobż mhux għali.', 'O pão não é caro.']],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser” pra conjugar: no maltês, “huwa”/“hija” são pronomes, não um verbo — e muitas vezes a frase fica sem nenhum deles, só sujeito e predicado.',
      'Tentar negar com “ma…x” em volta de um adjetivo isolado: quem nega esse tipo de frase sem verbo é “mhux”.',
    ],
    quiz: [
      { question: 'Em “Ix-xogħol huwa tajjeb”, o que é “huwa”?', options: ['Um pronome (“ele”), não um verbo', 'O verbo “ser” conjugado', 'Um adjetivo'], answer: 'Um pronome (“ele”), não um verbo', explanation: 'O maltês não tem verbo “ser” no presente; “huwa” é o pronome de terceira pessoa, usado aqui pra ligar sujeito e predicado.' },
      { question: 'Como se diz “o pão não é caro”?', options: ['Il-ħobż mhux għali.', 'Il-ħobż ma għalix.', 'Il-ħobż le għali.'], answer: 'Il-ħobż mhux għali.', explanation: '“Mhux” nega frases sem verbo (nome, adjetivo, advérbio) — aqui, o adjetivo “għali”.' },
    ],
  },
  {
    id: 'mt-g7',
    level: 'A2.2',
    title: 'Este e aquele: dan, din, dawn / dak, dik, dawk',
    emoji: '👉',
    summary: 'Seis demonstrativos, conforme a distância (perto/longe) e o género/número do substantivo: dan/din/dawn para “este/esta/estes” e dak/dik/dawk para “aquele/aquela/aqueles”.',
    sections: [
      {
        table: {
          head: ['', 'Masculino singular', 'Feminino singular', 'Plural'],
          rows: [
            ['perto (“este”)', 'dan', 'din', 'dawn'],
            ['longe (“aquele”)', 'dak', 'dik', 'dawk'],
          ],
        },
        text: 'O Wiktionary confirma os dois conjuntos completos: dan (masculino singular “este”), com din (feminino) e dawn (plural) citados na mesma entrada; e dak (masculino singular “aquele”), com dik (feminino) e dawk (plural) citados na entrada de “dak”. O demonstrativo acompanha um substantivo com o artigo definido — não troca o artigo por ele: “dan il-ktieb” (este livro), nunca “dan ktieb” sozinho.',
        examples: [
          ['Dan il-ktieb.', 'Este livro.'],
          ['Dak il-ktieb.', 'Aquele livro.'],
        ],
      },
      {
        heading: 'A contração com o artigo',
        text: 'No maltês falado e escrito, “dan”/“din”/“dawn” costumam se colar à vogal do artigo que vem depois: dan ir-raġel pode virar dar-raġel (este homem), e dan ix-xahar pode virar dax-xahar (este mês) em expressões fixas — mas a forma separada (“dan il-…”) é a mais comum e nunca está errada.',
      },
    ],
    pitfalls: [
      'Usar “dan” pra tudo, sem checar género e número: feminino é “din”, plural é “dawn” (e, pra “aquele”, dik/dawk).',
      'Tirar o artigo definido depois do demonstrativo: o maltês mantém o artigo (“dan il-ktieb”), diferente do português, que não usa artigo depois de “este”.',
    ],
    quiz: [
      { question: 'Como se diz “esta cidade” (belt, feminino)?', options: ['din il-belt', 'dan il-belt', 'dawn il-belt'], answer: 'din il-belt', explanation: '“Belt” é feminino singular, então o demonstrativo certo é “din”.' },
      { question: 'Qual é o plural de “dak” (aquele)?', options: ['dawk', 'dawn', 'dik'], answer: 'dawk', explanation: '“Dawk” é o plural de “dak”; “dik” é o feminino singular, e “dawn” é o plural do outro conjunto (dan/este).' },
    ],
  },
  {
    id: 'mt-g8',
    level: 'A2.2',
    title: 'De quem é: o possessivo com “ta\'”',
    emoji: '🔗',
    summary: '“Ta’” (“de”) se junta ao pronome pra formar o possessivo: tiegħi (meu), tiegħek (teu), tiegħu (dele), tagħha (dela), tagħna (nosso), tagħkom (de vocês), tagħhom (deles) — sempre depois do substantivo com artigo.',
    sections: [
      {
        table: {
          head: ['Pessoa', 'Singular', 'Plural'],
          rows: [
            ['1ª', 'tiegħi (meu)', 'tagħna (nosso)'],
            ['2ª', 'tiegħek (teu)', 'tagħkom (de vocês)'],
            ['3ª', 'tiegħu (dele) / tagħha (dela)', 'tagħhom (deles)'],
          ],
        },
        text: 'O Wiktionary mostra a preposição “ta\'” (“de”, posse) já flexionada pra cada pessoa nessa tabela, com o exemplo “il-fehma tiegħu” (a opinião dele, literalmente “a opinião de ele”). O padrão pra qualquer substantivo é: artigo + substantivo + a forma de “ta\'” que combina com o possuidor.',
        examples: [
          ['Il-karozza hija tiegħi.', 'O carro é meu.'],
          ['Il-flus tagħna.', 'O nosso dinheiro.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar “tiegħi”/“tiegħek”/etc. antes do substantivo, como em português (“meu carro”): no maltês a ordem é substantivo primeiro, possessivo depois (“il-karozza tiegħi”).',
      'Confundir “tiegħu” (dele) com “tagħha” (dela): a 3ª pessoa do singular troca de forma conforme o género de quem possui, não de quem é possuído.',
    ],
    quiz: [
      { question: 'Como se diz “o carro é meu”?', options: ['Il-karozza hija tiegħi.', 'Tiegħi il-karozza.', 'Il-karozza hija tagħna.'], answer: 'Il-karozza hija tiegħi.', explanation: '“Tiegħi” (meu) vem depois do substantivo com artigo, ligado pelo pronome “hija”.' },
      { question: '“Tagħhom” quer dizer…', options: ['deles, delas', 'de vocês', 'nosso'], answer: 'deles, delas', explanation: '“Tagħhom” é a forma de “ta\'” pra 3ª pessoa do plural (huma, eles/elas).' },
    ],
  },
];
