import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do aikewára — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 *   [L15] J. D. Lopes, “Esboço da morfologia da língua Suruí-Aikewára…”, Fragmentum n. 46 (2015,
 *         publ. 2016): 1.1.1.2 e Quadro 1 (prefixos de pessoa), p. 157-158 (paradigmas de “comer” e
 *         “vir”), Quadro 5 (pronomes), Tabela 2 (prefixos relacionais), Tabela 4 (vocativos),
 *         1.3.2.4 (negação do imperativo com “puhi”).
 *   [L14] J. D. Lopes, tese UnB 2014: cap. 6.2 (sintaxe, exemplos numerados 041-164: perguntas com
 *         pa'e, negação “na … -wi”) e o dicionário (cap. 10.3).
 * Todos os exemplos são citações dessas fontes, na grafia de [L14] (com ' no lugar de ’).
 *
 * Um cuidado: na tabela de prefixos de [L15] (p. 140), alguns exemplos vêm com glosa trocada
 * (“ɛɾɛ-kɛɾ ‘eu durmo’”, “pɛ-suka ‘eu mato’”); a própria matriz do Quadro 1 e os paradigmas da
 * p. 157-158 mostram que ere- é “você” e pe- é “vocês”, e é assim que ensinamos.
 */
export const GRAMMAR_MDZ: GrammarTopic[] = [
  {
    id: 'mdz-g1',
    level: 'A1.1',
    title: 'Pronomes e o prefixo de pessoa no verbo',
    emoji: '🙋',
    summary: 'O verbo começa com quem faz a ação: a- (eu), ere- (você), sa- e uru- (nós), pe- (vocês), u- (ele, ela).',
    sections: [
      {
        // [L15] Quadro 5 (pronomes da série I: isɛ, ɛnɛ, uɾɛ, sɛnɛ, pɛhɛ) e paradigma de “comer”
        // (p. 158: akaɾu, ɛɾɛkaɾu, uɾukaɾu, sakaɾu, pɛkaɾu, ukaɾu). Não há pronome da série I para a
        // 3ª pessoa no Quadro 5; nas frases, o papel de “ele” fica com um demonstrativo, como
        // “aikwesa” (aquele): [L14] ex. 044, “aikwesa ti asuron”, ele me abraçou.
        text: 'Os pronomes do aikewára são “ise” (eu), “ene” (você), “ure” (nós, sem você), “sene” (nós, com você) e “pehe” (vocês). Para “ele” ou “ela” não há um pronome à parte: usa-se uma palavra como “aikwesa” (aquele). O mais importante, porém, está no verbo, que começa com uma marca de quem faz a ação. Veja o verbo “comer”, que serve para o presente e para o passado:',
        table: {
          head: ['Pessoa', 'Pronome', 'Comer'],
          rows: [
            ['eu', 'ise', 'akaru'],
            ['você', 'ene', 'erekaru'],
            ['nós (sem você)', 'ure', 'urukaru'],
            ['nós (com você)', 'sene', 'sakaru'],
            ['vocês', 'pehe', 'pekaru'],
            ['ele, ela', 'aikwesa (aquele)', 'ukaru'],
          ],
        },
        examples: [
          ['Akaru.', 'Eu comi.'],
          ['Erekaru.', 'Você comeu.'],
          ["Ure uruapo 'oga.", 'Nós fizemos estas casas.'],
          ["Pehe puta pesuka ma'ea pesehow?", 'Vocês vão matar aquelas caças?'],
        ],
      },
      {
        // ure × sene: [L15] Quadro 5 (13 ‘nós excl.’, 12(3) ‘nós incl.’); [L14] ex. 084 e 124.
        text: 'O aikewára tem dois “nós”. “Ure” (com o prefixo uru-) deixa de fora a pessoa com quem se fala: “nós, mas não você”. “Sene” (com o prefixo sa-) inclui quem ouve: “nós, você junto”. Quem convida diz “sakaru” (vamos comer, nós todos); quem conta o que o grupo dele fez diz “ure uruapo ’oga” (nós fizemos estas casas).',
        examples: [
          ["Ikatua weraha 'ya sene upe.", 'Ikatu levou água para nós (você junto).'],
          ['Kopesor, sakaru.', 'Vem aqui, vamos comer.'],
          ["Uruse'engar.", 'Nós (sem você) cantamos.'],
        ],
      },
    ],
    pitfalls: [
      'Trocar ere- por a-: “ereker” é “você dormiu”; “eu dormi” é “aker”.',
      'Usar “ure” para convidar quem ouve: “nós, com você” é “sene” (e o verbo leva sa-).',
    ],
    quiz: [
      { question: 'Como se diz “você comeu”?', options: ['Erekaru.', 'Akaru.', 'Pekaru.'], answer: 'Erekaru.', explanation: 'Para “você”, o verbo leva ere-: erekaru.' },
      { question: 'Qual “nós” inclui a pessoa com quem você fala?', options: ['sene', 'ure', 'pehe'], answer: 'sene', explanation: '“Sene” é “nós, com você”; “ure” deixa quem ouve de fora; “pehe” é “vocês”.' },
    ],
  },
  {
    id: 'mdz-g2',
    level: 'A1.1',
    title: 'Perguntas com “pa’e”',
    emoji: '❓',
    summary: 'A pergunta é marcada pela partícula pa’e, logo depois da palavra perguntada.',
    sections: [
      {
        // [L14] 6.2.3.3 (pa'e e pe “seguem o constituinte perguntado”), 6.2.7 (ex. 145-155) e 5.5.3
        // (a escrita dos Aikewara não usa “?”, porque pa'e já marca a pergunta).
        text: 'Em aikewára, quem marca a pergunta é a partícula “pa’e”, que vem logo depois da palavra perguntada. Numa pergunta de sim ou não, ela vem depois do verbo: “ereker pa’e?” (você dormiu?). Com palavras como “awa” (quem?), “mume” (onde?) e “mo wi” (de onde?), ela vem logo depois delas. Por isso, quando os próprios Aikewara escrevem, nem usam o “?”. Às vezes aparece “pe” no lugar de “pa’e”: “awa pe utyryg?” (quem acordou?).',
        table: {
          head: ['Pergunta', 'Sentido'],
          rows: [
            ["ereker pa'e?", 'você dormiu?'],
            ["awa pa'e uso'o?", 'quem está chorando?'],
            ["mume pa'e 'ya?", 'onde tem água?'],
            ["mo wi pa'e eresor?", 'de onde você veio?'],
          ],
        },
        examples: [
          ["Ereker pa'e?", 'Você dormiu?'],
          ["Awa pa'e usekyj?", 'Quem morreu?'],
          ["Mume pa'e rekerehe?", 'Onde você dormiu?'],
          ['Awa pe utyryg?', 'Quem acordou?'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “pa’e” no começo da frase, como um “será que”: ele vem DEPOIS da palavra perguntada (“ereker pa’e?”).',
      'Esquecer o “pa’e”: são partículas como ele (ou “pe”) que mostram que a frase é uma pergunta.',
    ],
    quiz: [
      { question: 'Como se pergunta “você dormiu?”', options: ["Ereker pa'e?", "Pa'e ereker?", 'Ereker?'], answer: "Ereker pa'e?", explanation: '“Pa’e” vem depois do verbo perguntado.' },
      { question: 'O que quer dizer “awa pa’e uso’o?”', options: ['Quem está chorando?', 'Onde tem água?', 'Você dormiu?'], answer: 'Quem está chorando?', explanation: '“Awa” é “quem”, e “uso’o” é “chora”.' },
    ],
  },
  {
    id: 'mdz-g3',
    level: 'A1.2',
    title: 'Negação: “na … -wi” e “puhi”',
    emoji: '🙅',
    summary: 'Para negar, o verbo fica entre na- e -wi; para proibir, “puhi” vem depois do verbo.',
    sections: [
      {
        // [L14] 6.2.6.1-6.2.6.2 (ex. 083, 132, 133, 136, 138: n(a)…-(u)wi); s.v. “nawi” (adv. não).
        text: 'Para negar um verbo, o aikewára o “abraça”: “na” vem antes e “-wi” (ou “-uwi”) vem grudado no fim. Quando o verbo começa com u-, o “na” encurta e vira “n-”: “umur” (ele dá) → “numuruwi” (ele não dá). Sozinho, como resposta, o “não” é “nawi”.',
        table: {
          head: ['Afirmativo', 'Negativo'],
          rows: [
            ['amono (eu dou)', 'na amonowi (eu não dou)'],
            ['umur (ele dá)', 'numuruwi (ele não dá)'],
            ["use'engar (canta)", "nuse'engara uwi (não canta)"],
            ['uke (ele entra)', 'nukewi (ele não entra)'],
          ],
        },
        examples: [
          ['Aiko na amonowi ne upe.', 'Esse eu não dou para você.'],
          ['Muretama numuruwi kysea ti upe.', 'Muretama não me deu a faca.'],
          ["Ma'eramu pa'e kuso nuse'engara uwi?", 'Por que as mulheres não estão cantando?'],
        ],
      },
      {
        // [L15] 1.3.2.4 e [L14] 6.2.6.3 (ex. 140-141): ɛsuka puhi, ɛhɔ puhi, ɛmukuʔɔm puhi.
        text: 'Para dizer “não faça!”, usa-se o verbo na forma de ordem (com e-) e “puhi” depois: “eho” (vá!) → “eho puhi” (não vá!).',
        examples: [
          ['Eho puhi.', 'Não vá.'],
          ['Esuka puhi.', 'Não mate.'],
          ["Emuku'om puhi.", 'Não o levante.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o -wi do fim: “na amono” fica pela metade; o certo é “na amonowi”.',
      'Usar “nawi” para proibir: “não vá” é “eho puhi”.',
    ],
    quiz: [
      { question: 'Como se diz “esse eu não dou para você”?', options: ['Aiko na amonowi ne upe.', 'Aiko nawi amono ne upe.', 'Aiko amono puhi ne upe.'], answer: 'Aiko na amonowi ne upe.', explanation: 'O verbo fica entre “na” e “-wi”: na amonowi.' },
      { question: 'Como se diz “não vá!”?', options: ['Eho puhi.', 'Na ehowi.', 'Nawi eho.'], answer: 'Eho puhi.', explanation: 'Para proibir, “puhi” vem depois do verbo na forma de ordem.' },
    ],
  },
  {
    id: 'mdz-g4',
    level: 'A1.2',
    title: 'Posse e parentes: depende de quem fala',
    emoji: '👪',
    summary: 'O dono vem antes do nome (ti, ne, sene), e alguns parentes mudam conforme quem fala é homem ou mulher.',
    sections: [
      {
        // [L15] Tabela 2 (uw ‘pai’: t-uwa ‘pai dele’, ɾ-uwa com o dono antes; ɛha ‘olho’: h-ɛha /
        // ɾ-ɛha); Quadro 5 (série II: ti, nɛ, sɛnɛ, pɛ, ɾɛ); s.v. “tuwa2”, “eha” (sene reha), “memyra”.
        text: 'O dono vem antes do nome: “ti” (meu), “ne” (teu), “sene” (nosso, com você), “pe” (de vocês). Vários nomes ganham um “r-” depois do dono. O pai “de alguém” é “tuwa”, mas “meu pai” é “ti ruwa”; o olho é “eha”, mas “nosso olho” é “sene reha”. Outros nomes ficam iguais: “ti memyra” (meu filho), “ne memyra” (teu filho).',
        table: {
          head: ['Sem dono', 'Com dono', 'Sentido'],
          rows: [
            ['tuwa', 'ti ruwa', 'meu pai'],
            ['eha', 'sene reha', 'nosso olho'],
            ['memyra', 'ti memyra', 'meu filho'],
            ['iapina', 'ti apina', 'minha cabeça'],
          ],
        },
        examples: [
          ["Ti ruwa, eresuka pa'e ma'ea?", 'Meu pai, você matou algo?'],
          ['Ne memyra tipiw uapyg.', 'Teu filho sentou perto de mim.'],
          ['Ti apina hy.', 'Minha cabeça está doendo.'],
        ],
      },
      {
        // s.v. “a'yra” (filho, homem falando), “memyra” (filho/filha de mulher), “asyra” (filha de
        // homem), “emira” (irmã de homem), “ua” (voc. irmã, mulher falando); vocativos: [L15]
        // Tabela 4 (mitum, na, mihy, ine).
        text: 'Como em outras línguas tupi-guarani, alguns parentes dependem de quem fala. O homem chama o filho de “a’yra” e a filha de “asyra”; a mulher usa “memyra” para os dois. E na hora de chamar o pai ou a mãe, cada um tem sua palavra: o filho homem chama o pai de “na!” e a mãe de “ine!”; a filha chama o pai de “mitum!” e a mãe de “mihy!”.',
        table: {
          head: ['Parente', 'Homem falando', 'Mulher falando'],
          rows: [
            ['filho', 'a’yra', 'memyra'],
            ['filha', 'asyra', 'memyra'],
            ['pai! (chamando)', 'na!', 'mitum!'],
            ['mãe! (chamando)', 'ine!', 'mihy!'],
          ],
        },
        examples: [
          ["U'ar pa'e ne rasyra?", 'Já nasceu tua filha? (pergunta a um homem)'],
          ["U'ar pa'e ne memyra?", 'Já nasceu tua filha? (pergunta a uma mulher)'],
          ["Moron pa'e ne ra'yra?", 'Quantos filhos você tem? (pergunta a um homem)'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “ti tuwa” para “meu pai”: com o dono antes, o nome ganha r- — “ti ruwa”.',
      'Uma mulher dizer “a’yra” para o filho: para ela, filho e filha são “memyra”.',
    ],
    quiz: [
      { question: 'Como se diz “meu pai”?', options: ['Ti ruwa.', 'Ti tuwa.', 'Tuwa ti.'], answer: 'Ti ruwa.', explanation: 'O dono vem antes, e “tuwa” vira “ruwa” depois dele.' },
      { question: 'Uma mulher fala do filho dela. Qual palavra?', options: ['memyra', "a'yra", 'asyra'], answer: 'memyra', explanation: '“Memyra” é filho ou filha para a mulher; “a’yra” e “asyra” são como o homem fala.' },
    ],
  },
];
