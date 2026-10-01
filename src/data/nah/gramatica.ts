import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do náuatle clássico — por enquanto só A1.1 e A1.2 (pacote incompleto). Os
 * exemplos vêm do artigo “Classical Nahuatl grammar” (Wikipédia em inglês) e do Wiktionary (seção
 * “Classical Nahuatl”); o exemplo de incorporação de substantivo (“nicchīhua cactli”) é citado tal
 * como aparece nessas fontes.
 */
export const GRAMMAR_NAH: GrammarTopic[] = [
  {
    id: 'nah-g1',
    level: 'A1.1',
    title: 'Pronúncia e a ortografia ACK',
    emoji: '🔤',
    summary:
      'Este curso usa a ortografia moderna ACK (Andrews–Campbell–Karttunen) para o náuatle clássico — a mesma do Wiktionary e do “An Analytical Dictionary of Nahuatl” de Frances Karttunen —, com macron para marcar vogal longa e “h” para o saltillo (oclusiva glotal).',
    sections: [
      {
        text:
          'Os textos coloniais (Molina, Sahagún) raramente marcavam vogais longas ou o saltillo, porque o espanhol do século XVI não precisava distinguir esses sons. A ortografia ACK, usada por linguistas desde a segunda metade do século XX, acrescenta essas marcas para deixar a pronúncia sem ambiguidade — é a convenção adotada neste curso.',
      },
      {
        heading: 'As letras e marcas que mais confundem quem já fala português',
        table: {
          head: ['Letra/marca', 'Som', 'Exemplo'],
          rows: [
            ['h (depois de vogal)', 'o saltillo: uma pequena parada no ar (como a pausa de “uh-oh”)', 'Ahmō (não)'],
            ['ā, ē, ī, ō', 'vogal longa — o mesmo som do português, só mais demorado', 'Nāntli (mãe)'],
            ['tl', 'um só som (consoante lateral africada), nunca “t” e “l” separados', 'Ātl (água)'],
            ['x', 'sempre “ch” do português de Portugal (“sh” do inglês)', 'Mēxihco (“MESH-ih-co”)'],
            ['cu / hu', 'soam como “kw”/“w”, quase uma semivogal grudada', 'Cualli (bom), Huītz (vir)'],
          ],
        },
        examples: [
          ['Ahmō.', 'Não. (o “h” marca o saltillo, uma parada real no ar)'],
          ['Nāntli.', 'Mãe. (o macron em “ā” alonga a vogal)'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “h” depois de vogal como se fosse mudo: ele marca o saltillo, um som consonantal real — “ahmō” e “amo” não soam igual.',
      'Ignorar o macron e pronunciar a vogal curta: em náuatle clássico, vogal longa e curta podem distinguir palavras diferentes.',
    ],
    quiz: [
      {
        question: 'O que o “h” depois de uma vogal representa na ortografia ACK do náuatle clássico?',
        options: ['O saltillo (uma pequena parada no ar)', 'Um acento tônico', 'Uma letra muda, só de enfeite'],
        answer: 'O saltillo (uma pequena parada no ar)',
        explanation: 'O “h” marca um som consonantal real, o saltillo (oclusiva glotal), como em “ahmō”.',
      },
      {
        question: 'Como soa a letra “x” no náuatle clássico?',
        options: ['Como “ch”/“sh” (ex.: Mēxihco)', 'Como “cs”', 'Como “z”'],
        answer: 'Como “ch”/“sh” (ex.: Mēxihco)',
        explanation: 'O “x” do náuatle clássico sempre soa como o “ch” do português de Portugal, nunca “cs” ou “z”.',
      },
    ],
  },
  {
    id: 'nah-g2',
    level: 'A1.1',
    title: 'Pronomes e prefixos de pessoa — sem verbo “ser”',
    emoji: '🙋',
    summary:
      'O náuatle clássico tem pronomes independentes (nehhuātl, tehhuātl, yehhuātl) usados para dar ênfase, e prefixos de pessoa (ni-, ti-, sem prefixo para “ele/ela”) que já transformam um substantivo ou adjetivo num predicado completo — sem precisar de nenhum verbo “ser”.',
    sections: [
      {
        heading: 'Pronomes independentes',
        text: 'Usados sozinhos ou para reforçar o prefixo de pessoa que já está no predicado.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['nehhuātl', 'eu'],
            ['tehhuātl', 'tu, você'],
            ['yehhuātl', 'ele, ela'],
          ],
        },
        examples: [
          ['Nehhuātl nicihuātl.', 'Eu, eu sou mulher.'],
          ['Tehhuātl ticonētl.', 'Você, você é uma criança.'],
        ],
      },
      {
        heading: 'Sem verbo “ser”: o prefixo de pessoa já faz o predicado',
        text:
          'Em vez de um verbo “ser”, o náuatle clássico prefixa o sujeito direto no substantivo ou adjetivo: “ni-” (eu), “ti-” (você) e nenhum prefixo para “ele/ela”. Por isso “titlācatl” (de um exemplo bem documentado da língua) já significa sozinho “você é uma pessoa” — sem nenhuma palavra a mais.',
        examples: [
          ['Nicualli.', 'Eu [sou/estou] bem. (ni- + cualli, sem verbo “ser”)'],
          ['Ticonētl.', 'Você é uma criança. (ti- + conētl)'],
          ['Oquichtli cualli.', 'O homem é bom. (sem prefixo = “ele”, 3ª pessoa)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “ser”/“estar” antes do predicado: no náuatle clássico ela não existe — o prefixo de pessoa já faz esse trabalho.',
      'Usar o pronome independente sozinho sem o prefixo correspondente no predicado: o normal é usar os dois juntos para dar ênfase (“Nehhuātl nicihuātl”), não só o pronome solto.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu [sou] bem/bom” em náuatle clássico, sem nenhum verbo “ser”?',
        options: ['Nicualli.', 'Ni cualli é.', 'Cualli soy.'],
        answer: 'Nicualli.',
        explanation: 'O prefixo “ni-” (eu) já transforma “cualli” (bom) num predicado completo, sem precisar de verbo “ser”.',
      },
    ],
  },
  {
    id: 'nah-g3',
    level: 'A1.2',
    title: 'Posse com no-/mo-/ī- e o sufixo absolutivo',
    emoji: '📘',
    summary:
      'A maioria dos substantivos do náuatle clássico termina num sufixo absolutivo (-tl, -tli ou -in), que cai quando o substantivo é possuído e dá lugar a um prefixo: no- (meu), mo- (teu/seu), ī- (dele/dela).',
    sections: [
      {
        heading: 'O sufixo absolutivo',
        text:
          'Um substantivo “nu” (não possuído) leva um sufixo absolutivo: “-tl” depois de vogal (ātl, água), “-tli” depois de consoante (tōchtli, coelho; calli, com o “l” final assimilado) e, numa classe menor, “-in” (ex.: michin, peixe). Esse sufixo não é parte da raiz — ele desaparece quando a palavra é possuída.',
      },
      {
        heading: 'Os prefixos possessivos',
        table: {
          head: ['Prefixo', 'Tradução', 'Exemplo'],
          rows: [
            ['no-', 'meu', 'nāntli (mãe) → nonān (minha mãe)'],
            ['mo-', 'teu, seu', 'tahtli (pai) → motah (seu pai)'],
            ['ī-', 'dele, dela', 'calli (casa) → īcal (a casa dele/dela)'],
          ],
        },
        examples: [
          ['Nonān cualli.', 'Minha mãe é boa.'],
          ['Notah cualli.', 'Meu pai é bom.'],
        ],
      },
    ],
    pitfalls: [
      'Manter o sufixo absolutivo na forma possuída: o certo é “nonān” (minha mãe), não “no-nāntli”.',
      'Confundir “no-” (meu, prefixo preso à palavra) com “nehhuātl” (eu, pronome independente): são formas relacionadas, mas com papéis diferentes na frase.',
    ],
    quiz: [
      {
        question: 'Como se diz “meu pai” em náuatle clássico?',
        options: ['notah', 'notahtli', 'tahtli no'],
        answer: 'notah',
        explanation: '“Tahtli” perde o sufixo absolutivo “-tli” quando possuído: “no-” (meu) + “tah” = “notah”.',
      },
    ],
  },
  {
    id: 'nah-g4',
    level: 'A1.2',
    title: 'Incorporação de substantivo no verbo',
    emoji: '🧩',
    summary:
      'O traço mais famoso do náuatle: um substantivo pode entrar dentro do próprio verbo, perdendo o sufixo absolutivo, para formar uma só palavra — o principal sinal de que o náuatle é uma língua polissintética.',
    sections: [
      {
        text:
          'Em vez de “eu faço sapatos” como duas ideias separadas (verbo + objeto), o náuatle clássico pode grudar o substantivo direto no verbo: “nicchīhua cactli” (eu-o-faço sapato, com o objeto fora) também se diz “nicaccchīhua” (eu-sapato-faço), com “cactli” (sapato) perdendo o “-tli” e entrando dentro do verbo “chīhua” (fazer). O mesmo princípio de “grudar peças” aparece em “tlahtoāni” (governante), literalmente “aquele que fala”, de “tlahtoā” (falar) + o sufixo “-ni”.',
        examples: [
          ['nicchīhua cactli → nicaccchīhua', '“eu faço sapato” com o objeto incorporado ao verbo'],
          ['tlahtoā + -ni → tlahtoāni', 'falar + “aquele que...” = governante (lit. “aquele que fala”)'],
        ],
      },
      {
        heading: 'O sufixo de respeito “-tzin”',
        text:
          'Outro traço bem documentado do náuatle clássico é o sistema de reverência: o sufixo “-tzin”, colado no fim da palavra, marca respeito por quem se fala ou de quem se fala — parecido com “senhor”/“senhora” em português, mas dentro da própria palavra.',
        examples: [
          ['Tlēn motōcatzin?', 'Qual é o seu nome? (forma de respeito)'],
          ['cihuātzintli', 'uma mulher, dita com respeito'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a incorporação de substantivo é só “juntar duas palavras”: o substantivo incorporado perde o próprio sufixo absolutivo, como um objeto deixa de ser “sapato” isolado e vira parte do verbo.',
      'Usar “-tzin” acreditando que muda o sentido da palavra: ele só acrescenta respeito, não muda o que a palavra significa.',
    ],
    quiz: [
      {
        question: 'O que significa literalmente “tlahtoāni”, o título do governante mexica?',
        options: ['“Aquele que fala”', '“O dono da terra”', '“O filho do sol”'],
        answer: '“Aquele que fala”',
        explanation: '“Tlahtoāni” vem do verbo “tlahtoā” (falar) mais o sufixo “-ni” (“aquele que costuma...”): “aquele que fala”.',
      },
      {
        question: 'O que acontece com o sufixo absolutivo de um substantivo quando ele é incorporado ao verbo?',
        options: ['Ele cai (ex.: cactli → -cac- em nicaccchīhua)', 'Ele dobra de tamanho', 'Ele vira um prefixo no verbo seguinte'],
        answer: 'Ele cai (ex.: cactli → -cac- em nicaccchīhua)',
        explanation: 'Ao entrar no verbo, o substantivo perde o sufixo absolutivo: “cactli” (sapato) vira só “-cac-” dentro de “nicaccchīhua”.',
      },
    ],
  },
];
