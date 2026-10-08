import type { UnitSeed } from '../types';

/**
 * Trilha do Ido: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts) — a
 * segunda língua construída do app com curso de verdade, depois do esperanto (pedido do Matheus:
 * “cria o equivalente (A1) para os outros idiomas artificiais”). Fontes: Wikipédia (“Ido”, “Ido
 * grammar”, “Comparison between Esperanto and Ido”); Wikcionário (verbetes individuais);
 * idolinguo.org.uk/engido.htm (vocabulário básico inglês-Ido da Ido-España/Uniono por la Linguo
 * Internaciona Ido); omniglot.com/language/phrases/ido.htm (frases).
 */
export const UNITS_IDO: UnitSeed[] = [
  {
    id: 'ido-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Saluto! Unesma pasi',
    emoji: '👋',
    card: {
      id: 'ido-c1',
      title: 'Uma reforma do esperanto, vinte anos depois',
      emoji: '🧩',
      history:
        'O Ido nasceu em 1907, vinte anos depois do esperanto, da mesma preocupação: achar uma língua internacional que todo mundo pudesse aprender fácil. Um comitê — a “Delegação para a Adoção de uma Língua Auxiliar Internacional”, liderada pelo matemático francês Louis Couturat — decidiu reformar o esperanto em vez de criar algo do zero, com a colaboração inicial do linguista dinamarquês Otto Jespersen. O autor principal do projeto foi, na verdade, Louis de Beaufront — só revelado depois da morte de Couturat, num acidente de carro em 1914. O nome “Ido” vem do próprio esperanto: o sufixo “-id-” marca descendência (“fratido” seria “sobrinho”, filho do irmão), então “Ido” quer dizer, literalmente, “descendente” — a língua se apresenta como filha do esperanto.',
      culture_tip:
        'Desde 1908 existe a “Progreso”, a revista oficial da Uniono por la Linguo Internaciona Ido, fundada por Louis Couturat — ainda publicada hoje. A comunidade do Ido é pequena (estimativas de 1.000 a 5.000 falantes) e vive sobretudo online, em fóruns e grupos de redes sociais.',
      grammar_why:
        'Como no esperanto, o verbo do Ido NUNCA muda de forma pela pessoa (“esas” serve pra “eu sou”, “você é”, “ele é”...), então o pronome de sujeito nunca pode ser omitido — sem ele, ninguém saberia quem é o sujeito da frase.',
      grammar_examples: [
        ['Me esas Ana.', 'Eu sou Ana.'],
        ['El esas mea matro.', 'Ela é minha mãe.'],
      ],
      character_guide: [
        ['y', '“i” curto/deslizado, como o “y” do inglês “yes”', 'yes (“iéss”, sim)'],
        ['j', 'o “j” do português, de “já” — CUIDADO: é diferente do “j” do esperanto!', 'fromajo (“fro-MA-jo”, queijo)'],
        ['qu', '“kw”, como em “quick” do inglês', 'aquo (“A-kwo”, água)'],
      ],
    },
    lessons: [
      {
        id: 'ido-u1-l1',
        title: 'Saluto, danko!',
        kind: 'licao',
        words: ['saluto', 'adio', 'danko', 'yes', 'no', 'nomo'],
        cloze: [
          { sentence: '___, Petro!', answer: 'Saluto', options: ['Saluto', 'Adio', 'Danko'], translation: 'Olá, Petro!' },
          { sentence: '___ pro la pano!', answer: 'Danko', options: ['Danko', 'Saluto', 'No'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Quo esas vua ___?', answer: 'nomo', options: ['nomo', 'saluto', 'yes'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Saluto! Quo esas vua nomo?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Mea nomo esas Ana.', 'mea nomo esas', 'me nomesas'],
          hint: 'Diga seu nome com “Mea nomo esas…” ou “Me nomesas…”.',
        },
        communityPrompt: 'Apresente-se em Ido: diga seu nome com “Mea nomo esas…” ou “Me nomesas…”.',
      },
      {
        id: 'ido-u1-l2',
        title: 'Me, vu, il, el',
        kind: 'licao',
        words: ['me', 'vu', 'il', 'el', 'esar', 'nomesar'],
        cloze: [
          { sentence: '___ esas Ana.', answer: 'Me', options: ['Me', 'Vu', 'El'], translation: 'Eu sou Ana.' },
          { sentence: '___ nomesas Petro.', answer: 'Il', options: ['Il', 'Me', 'Ni'], translation: 'Ele se chama Petro.' },
          { sentence: 'Ka vu ___ Ana?', answer: 'esas', options: ['esas', 'havas', 'iras'], translation: 'Você é a Ana?' },
        ],
        voice: {
          bot: 'Saluto! Ka vu esas Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['No, me esas Petro.', 'no, me esas', 'yes, me esas'],
          hint: 'Responda com “Yes, me esas…” ou “No, me esas…” e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Ka vu nomesas…?” e responda “Yes” ou “No”.',
      },
      {
        id: 'ido-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Saluto! Me esas Petro. E vu, qua vu esas?',
          botTranslation: 'Olá! Eu sou Petro. E você, quem é você?',
          expected: ['Saluto! Me esas Ana. Danko!', 'me esas', 'danko'],
          hint: 'Responda a saudação, diga quem você é e agradeça com “Danko”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em Ido: saudação, seu nome e uma despedida (“Adio”).',
      },
    ],
  },
  {
    id: 'ido-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mea familio e mea domo',
    emoji: '👪',
    card: {
      id: 'ido-c2',
      title: 'Nem sempre “irmão”: raízes que nascem neutras',
      emoji: '🏠',
      history:
        'Uma das reformas mais marcantes do Ido em relação ao esperanto está bem aqui, na família: no esperanto, “frato” já significa “irmão” (masculino por padrão), e “irmã” precisa do sufixo -ino (“fratino”). No Ido, a raiz “frato” não assume nenhum sexo — “irmão” é “fratulo” (com o sufixo masculino -ulo) e “irmã” é “fratino” (com o sufixo feminino -ino), os dois igualmente opcionais. E “pai”/“mãe” nem usam a mesma raiz: são “patro” e “matro”, duas palavras independentes (do latim “pater” e “mater”), diferente do esperanto, que deriva “patrino” (mãe) de “patro” (pai).',
      culture_tip:
        'A “Progreso”, revista oficial do Ido desde 1908, ainda circula hoje entre a pequena comunidade de falantes — majoritariamente online, em fóruns e grupos de redes sociais dedicados à língua.',
      grammar_why:
        'O Ido não tem o caso acusativo obrigatório do esperanto (o “-n” no objeto direto): na ordem normal da frase (sujeito-verbo-objeto), o substantivo fica igual, seja sujeito ou objeto. É a ordem das palavras que já diz quem faz o quê.',
      grammar_examples: [
        ['Me havas un fratulo e un fratino.', 'Eu tenho um irmão e uma irmã.'],
        ['Me drinkas aquo.', 'Eu bebo água. (sem -n em “aquo”)'],
      ],
      character_guide: [
        ['g', 'sempre duro, nunca como o “j” do português em “gelo”', 'granda (“GRAN-da”, grande)'],
        ['h', 'aspirado, pronunciado de verdade — nunca mudo como no português', 'hundo (“HUN-do”, cachorro)'],
      ],
    },
    lessons: [
      {
        id: 'ido-u2-l1',
        title: 'Mea familio',
        kind: 'licao',
        words: ['patro', 'matro', 'fratulo', 'fratino', 'familio', 'havar'],
        cloze: [
          { sentence: 'Mea ___ nomesas Johano.', answer: 'patro', options: ['patro', 'matro', 'fratulo'], translation: 'Meu pai se chama Johano.' },
          { sentence: 'Me ___ un fratulo.', answer: 'havas', options: ['havas', 'esas', 'parolas'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mea ___ esas granda.', answer: 'familio', options: ['familio', 'domo', 'nomo'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Ka vu havas fratuli?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Yes, me havas un fratulo e un fratino.', 'me havas', 'fratulo'],
          hint: 'Responda com “Yes, me havas…” ou “No, me ne havas fratuli.”',
        },
        communityPrompt: 'Descreva sua família em Ido: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'ido-u2-l2',
        title: 'Interne mea domo',
        kind: 'licao',
        words: ['domo', 'hundo', 'kato', 'aquo', 'pano', 'granda'],
        cloze: [
          { sentence: 'Mea ___ esas mikra.', answer: 'domo', options: ['domo', 'hundo', 'pano'], translation: 'Minha casa é pequena.' },
          { sentence: 'Me drinkas ___.', answer: 'aquo', options: ['aquo', 'pano', 'vino'], translation: 'Eu bebo água.' },
          { sentence: '___ esas bona.', answer: 'Pano', options: ['Pano', 'Hundo', 'Kato'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Ka vu havas hundo o kato?',
          botTranslation: 'Você tem um cachorro ou um gato?',
          expected: ['Me havas hundo.', 'me havas', 'e kato'],
          hint: 'Use “Me havas…” — sem precisar de nenhuma marca extra no final da palavra.',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: se é grande (granda) ou pequena (mikra), e o que tem nela.',
      },
      {
        id: 'ido-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nia domo esas granda. Ka vua domo esas granda o mikra?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Mea domo esas mikra, ma mea familio esas granda.', 'mea domo', 'mea familio'],
          hint: 'Diga como é sua casa com “Mea domo esas…” e fale da família com “Mea familio esas…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em Ido, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
