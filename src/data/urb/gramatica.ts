import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ka'apor — por enquanto só A1.1 e A1.2 (pacote incompleto). Fonte: a
 * seção IV, “Perfil da gramática da língua kaapor”, do dicionário por tópicos de Kakumasu &
 * Kakumasu (SIL Brasil, 2007, pp. 199-210): B.1 (prefixos de pessoa, verbo “estar deitado” aju/
 * ereju/ou/jaju/peju), E (substantivos das subclasses H, I e X; posse), H (ênfase e ordem); e as
 * seções D.2.6 (“ym”, não), D.2.9 (cumprimentos, imperativos) e D.1.7.2 (tabela de parentesco,
 * homem falando × mulher falando) do mesmo dicionário. Todos os exemplos são citações dessas
 * seções, na grafia do dicionário.
 */
export const GRAMMAR_URB: GrammarTopic[] = [
  {
    id: 'urb-g1',
    level: 'A1.1',
    title: 'Pronomes e o prefixo de pessoa no verbo',
    emoji: '🙋',
    summary: 'O verbo começa com uma marca de quem faz a ação: a- (eu), ere- (você), ja- (nós), pe- (vocês).',
    sections: [
      {
        text: 'Os pronomes livres do ka’apor são “ihẽ” (eu), “nde” (você), “a’e” (ele ou ela — a mesma palavra para os dois), “jande” (nós), “pehẽ” (vocês) e “a’eta” (eles, elas). Mas quem faz a ação também aparece grudado no começo do verbo: “a-” para eu, “ere-” para você, “ja-” para nós, “pe-” para vocês e “u-”/“o-” (ou nada) para ele e eles. O verbo “estar deitado”, que o ka’apor também usa para dizer que uma ação continua, mostra bem a série inteira.',
        table: {
          head: ['Pessoa', 'Pronome', 'Estar deitado'],
          rows: [
            ['eu', 'ihẽ', 'aju'],
            ['você', 'nde', 'ereju'],
            ['ele, ela', 'a’e', 'ou'],
            ['nós', 'jande', 'jaju'],
            ['vocês', 'pehẽ', 'peju'],
            ['eles, elas', 'a’eta', 'ou'],
          ],
        },
        examples: [
          ['Ko ihẽ ajur.', 'Eu vim aqui.'],
          ['Ko nde erejur.', 'Você veio para cá.'],
          ['Aker aju.', 'Estou dormindo.'],
          ['Jaker jaju.', 'Estamos dormindo.'],
        ],
      },
      {
        text: 'A ordem mais comum da frase deixa o verbo para o fim: primeiro quem faz, depois o objeto, e o verbo fecha — mas o objeto também pode vir na frente. E como o prefixo já diz a pessoa, o pronome muitas vezes cai: “aho ta” já é “eu vou”. A partícula “ta”, depois do verbo, marca o futuro.',
        examples: [
          ['Koĩ ihẽ aho ta.', 'Amanhã eu vou.'],
          ['Mokõi mytun ihẽ ajuka.', 'Eu matei dois mutuns.'],
          ['Aho ta ihẽ.', 'Eu vou.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo: com “ihẽ” o verbo leva “a-” (ihẽ aho), com “nde” leva “ere-” (nde ereho).',
      'Procurar uma palavra para “ela” diferente de “ele”: “a’e” serve para os dois.',
    ],
    quiz: [
      { question: 'Como se diz “você veio para cá”?', options: ['Ko nde erejur.', 'Ko nde ajur.', 'Ko ihẽ erejur.'], answer: 'Ko nde erejur.', explanation: 'Com “nde” (você), o verbo leva o prefixo “ere-”: erejur.' },
      { question: 'Qual prefixo vai no verbo quando o sujeito é “jande” (nós)?', options: ['ja-', 'a-', 'pe-'], answer: 'ja-', explanation: '“ja-” é o prefixo de “nós”: jande jaho (nós fomos), jaker jaju (estamos dormindo).' },
    ],
  },
  {
    id: 'urb-g2',
    level: 'A1.1',
    title: 'Negação: “ym” depois do verbo',
    emoji: '🙅',
    summary: 'Para negar, “ym” vem logo depois do verbo; sozinho, “não!” é “anĩ!”.',
    sections: [
      {
        text: 'O ka’apor nega com a partícula “ym”, que vem DEPOIS da palavra negada — ao contrário do português, onde o “não” vem antes. “Aho” é “eu vou”; “aho ym” é “eu não vou”. Funciona também com palavras como “katu” (bom): “katu ym”, não é bom. Para responder “não!” sozinho, usa-se “anĩ!”, e para dizer que algo não existe ou que não se tem, “nixói” (não há, não tem). “Ainda não” é “ym we rĩ”.',
        table: {
          head: ['Afirmativo', 'Negativo'],
          rows: [
            ['aho (eu vou)', 'aho ym (eu não vou)'],
            ['katu (é bom)', 'katu ym (não é bom)'],
            ['uhyk (ele chegou)', 'uhyk ym we rĩ (ainda não chegou)'],
            ['ema’e (mexa!)', 'ema’e ym! (não mexa!)'],
          ],
        },
        examples: [
          ['Aho ym.', 'Eu não vou.'],
          ['Katu ym.', 'Não é bom.'],
          ['Uhyk ym we rĩ.', 'Ainda não chegou.'],
          ['Epyhyk ym!', 'Não pegue!'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “não” antes do verbo, como em português: o certo é “aho ym”, não “ym aho”.',
      'Responder uma pergunta só com “ym”: sozinho, o “não!” é “anĩ!”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não vou”?', options: ['Aho ym.', 'Ym aho.', 'Anĩ aho.'], answer: 'Aho ym.', explanation: '“Ym” vem depois do verbo: aho ym.' },
      { question: 'Qual palavra serve de “não!” sozinha, como resposta?', options: ['Anĩ', 'Ym', 'Ere'], answer: 'Anĩ', explanation: '“Anĩ” é o “não!” solto; “ym” só aparece depois de outra palavra, e “ere” quer dizer “sim, está bem”.' },
    ],
  },
  {
    id: 'urb-g3',
    level: 'A1.2',
    title: 'Posse: “ihẽ rok”, minha casa',
    emoji: '🏡',
    summary: 'O dono vem antes do nome (ihẽ, nde, jande…), e muitos nomes mudam a primeira letra.',
    sections: [
      {
        text: 'Para dizer de quem é uma coisa, o dono vem ANTES do nome: “ihẽ” (meu), “nde” (teu), “jande” (nosso), “pehẽ” (de vocês) ou o nome de uma pessoa (sawa’e ramũi, o avô do homem). Muitos nomes, porém, mudam a primeira letra conforme o dono. Num grupo, o “h” do começo vira “r” quando o dono não é “ele”: “hok” (a casa dele) → “ihẽ rok” (minha casa); “hamũi” (o avô dele) → “ihẽ ramũi” (meu avô). Em outro grupo, o “i” do começo cai: “iankã” (a cabeça dele) → “ihẽ ankã” (minha cabeça); “ipy” (o pé dele) → “nde py” (teu pé). E há nomes que nem têm dono, como “ka’a” (mato), “awaxi” (milho) e “kupixa” (roça).',
        table: {
          head: ['Dele, dela', 'Meu, minha', 'Sentido'],
          rows: [
            ['hok', 'ihẽ rok', 'casa'],
            ['hamũi', 'ihẽ ramũi', 'avô'],
            ['hãi', 'ihẽ rãi', 'dente'],
            ['iankã', 'ihẽ ankã', 'cabeça'],
            ['ipy', 'ihẽ py', 'pé'],
          ],
        },
        examples: [
          ['Ihẽ rok.', 'Minha casa.'],
          ['Ne rãi.', 'Teu dente.'],
          ['Jande ramũi.', 'Nosso avô.'],
          ['Nde py.', 'Teu pé.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “ihẽ hok” para “minha casa”: com dono que não é “ele”, o h vira r — “ihẽ rok”.',
      'Manter o “i” de “iankã” com outro dono: “minha cabeça” é “ihẽ ankã”.',
    ],
    quiz: [
      { question: 'Como se diz “minha casa”?', options: ['Ihẽ rok.', 'Ihẽ hok.', 'Hok ihẽ.'], answer: 'Ihẽ rok.', explanation: 'O dono vem antes, e o “h” de “hok” vira “r”: ihẽ rok.' },
      { question: '“Hamũi” é “o avô dele”. E “meu avô”?', options: ['Ihẽ ramũi.', 'Ihẽ hamũi.', 'Ihẽ amũi.'], answer: 'Ihẽ ramũi.', explanation: 'Mesmo grupo de “hok”: o h vira r — ihẽ ramũi.' },
    ],
  },
  {
    id: 'urb-g4',
    level: 'A1.2',
    title: 'Parentes: depende de quem fala',
    emoji: '👪',
    summary: '“Meu filho” e “meu irmão” mudam conforme quem fala é homem ou mulher.',
    sections: [
      {
        text: 'Como no tupi antigo (ta’yra × membyra), alguns nomes de parentes dependem de quem fala. Um homem chama o filho de “ihẽ ra’yr” e a filha de “ihẽ rajyr”; uma mulher usa a mesma palavra para os dois, “ihẽ membyr” (e, se quiser especificar, “membyr sawa’e”, filho homem, ou “membyr kunjã”, filha mulher). Com irmãos é igual: o homem diz “ihẽ mu” (meu irmão) e “ihẽ rendyr” (minha irmã); a mulher diz “ihẽ kywyr” (meu irmão) e “ihẽ anam” (minha irmã). Não há palavras separadas para irmão mais velho e mais novo.',
        table: {
          head: ['Parente', 'Homem falando', 'Mulher falando'],
          rows: [
            ['meu filho', 'ihẽ ra’yr', 'ihẽ membyr'],
            ['minha filha', 'ihẽ rajyr', 'ihẽ membyr'],
            ['meu irmão', 'ihẽ mu', 'ihẽ kywyr'],
            ['minha irmã', 'ihẽ rendyr', 'ihẽ anam'],
            ['meu pai', 'ihẽ pái (ou ihẽ ru)', 'ihẽ pái'],
            ['minha mãe', 'ihẽ mãi', 'ihẽ mãi'],
          ],
        },
        examples: [
          ["Ihẽ ra'yr.", 'Meu filho (diz um homem).'],
          ['Ihẽ membyr.', 'Meu filho, minha filha (diz uma mulher).'],
          ['Ihẽ kywyr.', 'Meu irmão (diz uma mulher).'],
          ['Ihẽ rendyr.', 'Minha irmã (diz um homem).'],
        ],
      },
    ],
    pitfalls: [
      'Uma mulher dizer “ihẽ ra’yr”: para ela, “meu filho” é “ihẽ membyr”.',
      'Usar “ihẽ mu” para o irmão de uma mulher: ela diz “ihẽ kywyr”.',
    ],
    quiz: [
      { question: 'Uma mulher apresenta o filho. O que ela diz?', options: ['Ihẽ membyr.', "Ihẽ ra'yr.", 'Ihẽ mu.'], answer: 'Ihẽ membyr.', explanation: 'Para a mulher, filho e filha são “membyr”; “ihẽ ra’yr” é como o homem fala.' },
      { question: 'Um homem fala da irmã dele. Qual palavra?', options: ['Ihẽ rendyr.', 'Ihẽ anam.', 'Ihẽ kywyr.'], answer: 'Ihẽ rendyr.', explanation: 'Homem falando: “ihẽ rendyr” (minha irmã). “Ihẽ anam” é como a mulher fala.' },
    ],
  },
];
