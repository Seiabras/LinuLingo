import type { UnitSeed } from '../types';

/**
 * Trilha do novial: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts).
 * Fontes: Otto Jespersen, "An International Language" (1928, archive.org, item AILjespersen);
 * "Novial Lexike" (1930, via Wayback Machine de blahedo.org/novial); Wikipédia e Wikibooks
 * "Novial" (cross-check e exemplos de frase, fiéis à gramática de Jespersen).
 */
export const UNITS_NOV: UnitSeed[] = [
  {
    id: 'nov-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon jorne! Li prim passus',
    emoji: '🧭',
    card: {
      id: 'nov-c1',
      title: 'A língua que tentou corrigir o esperanto e o ido',
      emoji: '🧭',
      history:
        'Otto Jespersen foi um dos linguistas mais respeitados do início do século XX — professor em Copenhague, autor de obras importantes sobre a gramática inglesa — e também apoiou o ido, a reforma de 1907 do esperanto. Em 1928, insatisfeito com os dois, publicou "An International Language" com sua própria proposta: o novial ("NOV" + "I" + "A" + "L" = novo + internacional + auxiliar + língua). Ele queria um vocabulário ainda mais parecido com as línguas europeias (sobretudo o inglês, o francês e o alemão) e uma gramática sem acento nem letra especial nenhuma.',
      culture_tip:
        'O próprio Jespersen chamava o circunflexo do esperanto (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ) de "o maior erro na história das línguas auxiliares" — o novial usa só as 26 letras comuns, sem nenhum acento. Em 1930 ele publicou o "Novial Lexike", um dicionário novial-inglês-francês-alemão com milhares de palavras.',
      grammar_why:
        'Como no esperanto e na interlíngua, o verbo do novial NUNCA muda pela pessoa: "me es", "vu es", "lo es" usam todos a mesma forma "es". Por isso o pronome de sujeito nunca pode ser omitido.',
      grammar_examples: [
        ['Me es Ana.', 'Eu sou a Ana.'],
        ['Lo es men patro.', 'Ele é meu pai.'],
      ],
      character_guide: [
        ['j', 'som de "j" português, de "já"', 'jorne ("JOR-ne", dia)'],
        ['u', 'sempre "u" de "uva", nunca "v"', 'urbe ("UR-be", cidade)'],
        ['ch', 'som de "tch" (varia um pouco entre falantes)', '— sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'nov-u1-l1',
        title: 'Bon jorne, danka!',
        kind: 'licao',
        words: ['bon jorne', 'danka', 'yes', 'non', 'nome', 'pardona'],
        cloze: [
          { sentence: '___, Petro!', answer: 'Bon jorne', options: ['Bon jorne', 'Danka', 'Pardona'], translation: 'Olá, Petro!' },
          { sentence: '___ por li pane!', answer: 'Danka', options: ['Danka', 'Bon jorne', 'Non'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Qui es vun ___?', answer: 'nome', options: ['nome', 'danka', 'yes'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Bon jorne! Qui es vun nome?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Men nome es Ana.', 'men nome es', 'me es'],
          hint: 'Diga seu nome com "Men nome es…" ou "Me es…".',
        },
        communityPrompt: 'Apresente-se em novial: diga seu nome com "Men nome es…" ou "Me es…".',
      },
      {
        id: 'nov-u1-l2',
        title: 'Me, vu, lo, la',
        kind: 'licao',
        words: ['me', 'vu', 'lo', 'la', 'es', 'amike'],
        cloze: [
          { sentence: '___ es Ana.', answer: 'Me', options: ['Me', 'Vu', 'La'], translation: 'Eu sou a Ana.' },
          { sentence: '___ es men patro.', answer: 'Lo', options: ['Lo', 'Me', 'Nus'], translation: 'Ele é meu pai.' },
          { sentence: 'Vu ___ men amike.', answer: 'es', options: ['es', 'have', 'vada'], translation: 'Você é meu amigo.' },
        ],
        voice: {
          bot: 'Bon jorne! Ob vu es Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['Non, me es Petro.', 'non, me es', 'yes, me es'],
          hint: 'Responda com "Yes, me es…" ou "Non, me es…" e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com "Qui es vun nome?".',
      },
      {
        id: 'nov-u1-l3',
        title: 'Prova: li prim passus',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bon jorne! Me es Petro. E vu, kel es vu?',
          botTranslation: 'Olá! Eu sou o Petro. E você, quem é você?',
          expected: ['Bon jorne! Me es Ana. Danka!', 'me es', 'danka'],
          hint: 'Responda a saudação, diga quem você é e agradeça com "Danka".',
        },
        communityPrompt: 'Escreva uma apresentação curta em novial: saudação, seu nome e uma despedida ("Adie").',
      },
    ],
  },
  {
    id: 'nov-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Men familie e men hause',
    emoji: '👪',
    card: {
      id: 'nov-c2',
      title: 'Uma raiz, um sufixo, os dois sexos',
      emoji: '👪',
      history:
        'Diferente da interlíngua (que usa raízes totalmente diferentes para "patre"/"matre"), o novial segue mais perto do esperanto: a mesma raiz ganha -o para o masculino e -a para o feminino — "filio"/"filia" (filho/filha), "amiko"/"amika" (amigo/amiga). A entrada "fratre" do dicionário de 1930 nem distingue sexo (serve pra "irmão ou irmã"); "fratro"/"fratra" usam essa mesma regra de sufixo pra separar os dois.',
      culture_tip:
        'Jespersen também propôs, pro quem quisesse, uma forma "comum" sem marcar sexo nenhum (a raiz pura, como "amike"): o novial dava a opção de dizer "amigo", sem precisar escolher -o ou -a, quase um século antes de isso virar debate em várias línguas naturais.',
      grammar_why:
        'O genitivo do novial é o sufixo -n (-en depois de consoante): "patro" (pai) → "patron" (do pai). É assim que se diz "o nome DO PAI": "men patron nome" (o nome do meu pai).',
      grammar_examples: [
        ['Men patron nome es Johan.', 'O nome do meu pai é Johan.'],
        ['Me have un fratro e un fratra.', 'Eu tenho um irmão e uma irmã.'],
      ],
      character_guide: [
        ['au', 'ditongo "au", como em "mau"', 'hause ("HAU-se", casa)'],
        ['qu', 'sempre "kw"', '— sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'nov-u2-l1',
        title: 'Men familie',
        kind: 'licao',
        words: ['familie', 'patro', 'matra', 'fratro', 'fratra', 'have'],
        cloze: [
          { sentence: 'Men ___n nome es Johan.', answer: 'patro', options: ['patro', 'matra', 'fratro'], translation: 'O nome do meu pai é Johan.' },
          { sentence: 'Me ___ un fratro.', answer: 'have', options: ['have', 'es', 'vada'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Men ___ es grandi.', answer: 'familie', options: ['familie', 'hause', 'nome'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Ob vu have fratros?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Yes, me have un fratro e un fratra.', 'me have', 'fratro'],
          hint: 'Responda com "Yes, me have…" ou "Non, me non have fratros."',
        },
        communityPrompt: 'Descreva sua família em novial: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'nov-u2-l2',
        title: 'In men hause',
        kind: 'licao',
        words: ['hause', 'pane', 'aque', 'grandi', 'mikri', 'boni'],
        cloze: [
          { sentence: 'Men ___ es mikri.', answer: 'hause', options: ['hause', 'pane', 'aque'], translation: 'Minha casa é pequena.' },
          { sentence: 'Me drinka ___.', answer: 'aque', options: ['aque', 'pane', 'hause'], translation: 'Eu bebo água.' },
          { sentence: 'Li ___ es boni.', answer: 'pane', options: ['pane', 'hause', 'aque'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Ob men hause es grandi o mikri?',
          botTranslation: 'Minha casa é grande ou pequena?',
          expected: ['Vun hause es grandi.', 'hause es grandi', 'hause es mikri'],
          hint: 'Use "Vun hause es…" pra descrever a casa.',
        },
        communityPrompt: 'Descreva sua casa em novial: se é grande (grandi) ou pequena (mikri), e o que tem nela.',
      },
      {
        id: 'nov-u2-l3',
        title: 'Prova: familie e hause',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nusen hause es grandi. Ob vun hause es grandi o mikri?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Men hause es mikri, ma men familie es grandi.', 'men hause', 'men familie'],
          hint: 'Diga como é sua casa com "Men hause es…" e fale da família com "Men familie es…".',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em novial, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
