import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do burushaski — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: o
 * dicionário anotado de G. Starostin (cita Berger 1974/1998) e a Wikipédia em inglês ("Burushaski"),
 * reconferidas em 09/10/2026. Os exemplos de prefixo de pessoa (seção G1 e G4) e de classe nominal
 * (G2) vêm literalmente da Wikipédia, que por sua vez cita Berger/Lorimer para cada forma.
 */
export const GRAMMAR_BSK: GrammarTopic[] = [
  {
    id: 'bsk-g1',
    level: 'A1.1',
    title: 'Pronomes livres × prefixos de posse',
    emoji: '🧩',
    summary: 'Além dos pronomes livres (ja, un, in…), o burushaski marca “de quem” um substantivo é com um PREFIXO preso à palavra — e alguns substantivos nunca aparecem sem esse prefixo.',
    sections: [
      {
        text: 'Pronomes como “ja” (eu) e “un” (tu/você) existem como palavras soltas, mas pra dizer “a mãe DELE” ou “a mãe DELA” o burushaski não usa um pronome separado: prende um prefixo de pessoa direto na palavra. A Wikipédia em inglês atesta a família inteira pra “mãe” (=mi, raiz presa): i-mi “a mãe dele”, mu-mi “a mãe dela”, u-mi “a mãe deles”. Esse mesmo conjunto de prefixos (i-, mu-, u-, entre outros) também marca a PESSOA DO OBJETO nos verbos — ver o tópico sobre os verbos, mais abaixo.',
        table: {
          head: ['Prefixo', 'Pessoa', 'Exemplo (com “=mi”, mãe)'],
          rows: [
            ['i-', 'dele (3ª pessoa, masculino)', 'i-mi — “a mãe dele”'],
            ['mu-', 'dela (3ª pessoa, feminino)', 'mu-mi — “a mãe dela”'],
            ['u-', 'deles/delas (3ª pessoa, plural)', 'u-mi — “a mãe deles”'],
          ],
        },
        examples: [
          ['Ja.', 'Eu. (pronome livre)'],
          ['Imi.', 'Mãe (citada já com o prefixo que a fonte atesta; a forma sem prefixo nenhum não aparece nas fontes consultadas).'],
        ],
      },
    ],
    pitfalls: ['Achar que todo substantivo do burushaski pode ficar “sozinho”, sem prefixo: vários termos de parentesco são de posse obrigatória — algo que o português não tem (dizemos só “mãe”, sem precisar encaixar “de quem” na própria palavra).'],
    quiz: [
      { question: 'Como o burushaski diz “a mãe dele”?', options: ['i-mi', 'u-mi', 'mu-mi'], answer: 'i-mi', explanation: 'O prefixo “i-” marca a 3ª pessoa masculina: “i-mi”, a mãe dele.' },
      { question: 'Pronomes como “ja” (eu) e os prefixos de posse (i-, mu-, u-) são a mesma coisa?', options: ['Não, são dois sistemas diferentes', 'Sim, são idênticos', 'Só no plural'], answer: 'Não, são dois sistemas diferentes', explanation: 'Pronomes livres (ja, un, in…) e prefixos presos (i-, mu-, u-…) marcam pessoa de jeitos diferentes, e um substantivo de posse obrigatória só usa o segundo.' },
    ],
  },
  {
    id: 'bsk-g2',
    level: 'A1.1',
    title: 'Classes nominais: mais que “gênero”',
    emoji: '🗂️',
    summary: 'O burushaski divide os substantivos em quatro ou cinco classes gramaticais (hm, hf, x, y, z) — e a MESMA raiz pode mudar de classe conforme o sentido.',
    sections: [
      {
        text: 'Duas classes seguem o gênero natural de pessoas (hm, humano-masculino; hf, humano-feminino). As outras — x, y e z, na tradição de Lorimer e Berger — organizam o resto do vocabulário por critérios que não têm equivalente direto em português: x costuma ser objetos contáveis, y inclui muita coisa em massa (líquidos, grãos) ou em grupo, e z fica com conceitos abstratos. O exemplo clássico, citado pela Wikipédia: a palavra pra “sal” muda de classe conforme a FORMA do sal — sal em pedaços é uma classe, sal em pó é outra, com a mesma raiz.',
        examples: [
          ['Matúm.', 'Preto. (adjetivo; concorda em classe com o substantivo, mas este pacote ainda não cobre a concordância completa)'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir as classes hm/hf/x/y/z como “um gênero masculino e um feminino”, à moda do português: só duas delas seguem o sexo das pessoas — as outras organizam objetos, massas e abstrações por critérios próprios do burushaski.'],
    quiz: [
      { question: 'As classes x, y e z do burushaski correspondem a quê?', options: ['Objetos, massas/grupos e abstrações — sem equivalente direto no português', 'Masculino, feminino e neutro', 'Passado, presente e futuro'], answer: 'Objetos, massas/grupos e abstrações — sem equivalente direto no português', explanation: 'Só as classes hm e hf seguem o sexo das pessoas; x, y e z organizam o resto do vocabulário por outros critérios.' },
      { question: 'Uma mesma raiz de palavra pode pertencer a mais de uma classe?', options: ['Sim — “sal em pedaços” e “sal em pó” são classes diferentes', 'Não, cada raiz tem uma classe fixa', 'Só nos substantivos de parentesco'], answer: 'Sim — “sal em pedaços” e “sal em pó” são classes diferentes', explanation: 'A Wikipédia cita exatamente esse exemplo: a forma física do sal decide a classe gramatical.' },
    ],
  },
  {
    id: 'bsk-g3',
    level: 'A1.2',
    title: 'Números: base 20 a partir do 20',
    emoji: '🔢',
    summary: 'De 1 a 10 os números do burushaski são palavras próprias — mas de 20 em diante o sistema é vigesimal (base 20), como o francês “quatre-vingts” (80, “quatro-vintes”).',
    sections: [
      {
        text: 'De 1 a 10 (han, altó, isko, walto, čindó, mishíndo, thaló, altámbo, hunchó, tóorumo), cada número tem uma palavra própria. De 11 a 19, soma-se o número ao “10” (tóorumo-han, 11). Mas 20 vira uma palavra nova, “altár” — e dali em diante o sistema conta em MÚLTIPLOS DE 20: 40 é “alto-altár” (dois-vintes), 60 é “iski-altár” (três-vintes), 80 é “waltó-altár” (quatro-vintes). O francês faz exatamente a mesma coisa com “quatre-vingts” (80, literalmente “quatro-vintes”) — um sistema vigesimal escondido dentro de uma língua que, fora isso, conta em base 10.',
        table: {
          head: ['Número', 'Burushaski', 'Por quê'],
          rows: [
            ['20', 'altár', 'palavra própria, o novo “degrau”'],
            ['40', 'alto-altár', '“dois-vintes” (2 × 20)'],
            ['60', 'iski-altár', '“três-vintes” (3 × 20)'],
          ],
        },
        examples: [
          ['Han, altó, isko, walto.', 'Um, dois, três, quatro.'],
        ],
      },
    ],
    pitfalls: ['Esperar que o sistema de base 10 continue depois do 20: a partir daí, os números se constroem em torno de múltiplos de 20, não de 10.'],
    quiz: [
      { question: 'A partir de que número o burushaski passa a contar em base 20?', options: ['20', '10', '100'], answer: '20', explanation: '“Altár” (20) é o novo “degrau”: 40, 60, 80 se constroem como múltiplos dele.' },
      { question: 'Que outra língua europeia tem um resquício do mesmo sistema vigesimal?', options: ['O francês, em “quatre-vingts” (80)', 'O alemão', 'O italiano'], answer: 'O francês, em “quatre-vingts” (80)', explanation: '“Quatre-vingts” é literalmente “quatro-vintes” — o mesmo princípio de contar em múltiplos de 20.' },
    ],
  },
  {
    id: 'bsk-g4',
    level: 'A1.2',
    title: 'O verbo marca a pessoa do OBJETO',
    emoji: '🔗',
    summary: 'Muitos verbos do burushaski levam, presos antes da raiz, um prefixo que marca a pessoa do OBJETO da frase — não (só) a do sujeito, como o português faz com as terminações do verbo.',
    sections: [
      {
        text: 'A Wikipédia em inglês atesta a conjugação do verbo “phus-” (atar) com o mesmo conjunto de prefixos já visto nos substantivos de posse obrigatória (i-, mu-, u-, mi-, gu-): “i-phus-i-m-a” é “eu ato ele”, “mu-phus-i-m-i” é “ele/ela ata ela”. O prefixo muda com quem é AMARRADO (o objeto), não com quem amarra (o sujeito) — um sistema bem diferente do português, que marca pessoa e número do SUJEITO na terminação do verbo (“eu ato”, “ele ata”).',
        table: {
          head: ['Prefixo no verbo', 'Objeto marcado', 'Exemplo'],
          rows: [
            ['i-', 'ele (objeto)', 'i-phus-i-m-a — “eu ato ele”'],
            ['mu-', 'ela (objeto)', 'mu-phus-i-m-i — “ele/ela ata ela”'],
            ['gu-', 'você (objeto)', 'gu-phus-i-m-a — “eu ato você”'],
          ],
        },
        examples: [
          ['Barenas.', 'Ver. (forma citada sem o prefixo de objeto, que varia conforme quem é visto)'],
        ],
      },
    ],
    pitfalls: ['Procurar, no verbo burushaski, uma terminação que marque o SUJEITO (como “-o” em “ato” ou “-a” em “ata”, no português): o prefixo mais importante do verbo marca o OBJETO, não o sujeito.'],
    quiz: [
      { question: 'O prefixo “i-”/“mu-”/“gu-” no verbo “phus-” (atar) marca a pessoa de quem?', options: ['Do objeto (quem é amarrado)', 'Do sujeito (quem amarra)', 'Do tempo verbal'], answer: 'Do objeto (quem é amarrado)', explanation: '“i-phus-i-m-a” (eu ato ELE) muda o prefixo conforme quem é o objeto, não conforme quem é o sujeito.' },
      { question: 'Esse mesmo conjunto de prefixos (i-, mu-, u-…) também aparece em outro lugar da língua. Onde?', options: ['Nos substantivos de posse obrigatória, como “=mi” (mãe)', 'Só nos números', 'Só nas cores'], answer: 'Nos substantivos de posse obrigatória, como “=mi” (mãe)', explanation: 'O mesmo prefixo “i-” que marca “dele” em “i-mi” (a mãe dele) marca o objeto “ele” em “i-phus-i-m-a” (eu ato ele).' },
    ],
  },
];
