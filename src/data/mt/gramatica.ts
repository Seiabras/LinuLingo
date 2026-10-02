import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do maltês — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * Wikipédia em inglês (“Maltese language”, “Maltese grammar”, “Maltese alphabet”, “Siculo-Arabic”)
 * e Wiktionary (verbetes individuais — ver os comentários de vocabulario.ts).
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
];
