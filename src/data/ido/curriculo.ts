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
  {
    id: 'ido-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vetero e tempo',
    emoji: '🌦️',
    card: {
      id: 'ido-c3',
      title: 'Números que somam: a regularidade do Ido',
      emoji: '🔢',
      history:
        'Os números compostos do Ido somam as partes com "e": 11 é "dek-e-un" (dez-e-um), 20 é "duadek" (dois-dez), 21 é "duadek-e-un". É uma regra bem mais regular que a de muitas línguas naturais (como o português, que tem "onze" e "doze" sem relação sonora óbvia com "um" e "dois") — a mesma busca por regularidade que guiou a reforma de 1907 inteira.',
      culture_tip:
        'Como o Ido não tem Wikipédia escrita majoritariamente por pessoas (boa parte dos verbetes vem de geração automática), o vocabulário de clima e tempo deste nível foi conferido no Wikcionário, verbete por verbete, e no vocabulário inglês-Ido da Ido-España/Uniono por la Linguo Internaciona Ido.',
      grammar_why:
        'A A2 soma dois correlativos novos: "kande" (quando) e "quanta" (quanto/quantos). "Kande vu lernas Ido?" pergunta POR QUANDO; "Quanta semano esas en yaro?" pergunta por quantidade.',
      grammar_examples: [
        ['Kande vu lernas Ido?', 'Quando você aprende Ido?'],
        ['Quanta semano esas en yaro?', 'Quantas semanas há num ano?'],
      ],
      character_guide: [
        ['st (grupo consonantal)', 'as duas consoantes se pronunciam, como no inglês "storm"', 'sturmo ("STUR-mo", tempestade)'],
      ],
    },
    lessons: [
      {
        id: 'ido-u3-l1',
        title: 'Pluvo e vento',
        kind: 'licao',
        words: ['pluvo', 'nivo', 'vento', 'kolda', 'varmega', 'nubo'],
        cloze: [
          { sentence: 'La aquo esas ___.', answer: 'kolda', options: ['kolda', 'varmega', 'granda'], translation: 'A água está fria.' },
          { sentence: 'La ___ esas blanka.', answer: 'nivo', options: ['nivo', 'pluvo', 'nubo'], translation: 'A neve é branca.' },
          { sentence: 'La suno esas ___.', answer: 'varmega', options: ['varmega', 'kolda', 'mikra'], translation: 'O sol está quente.' },
        ],
        voice: {
          bot: 'Ka la vento esas granda?',
          botTranslation: 'O vento está forte?',
          expected: ['Yes, la vento esas granda.', 'yes, la vento', 'no, la vento esas mikra'],
          hint: 'Responda com "Yes…" ou "No…" e descreva o vento.',
        },
        communityPrompt: 'Descreva o clima de hoje em Ido: "la pluvo", "la vento" ou "la nivo" com "esas" e um adjetivo.',
      },
      {
        id: 'ido-u3-l2',
        title: 'Sturmo e tempo',
        kind: 'licao',
        words: ['sturmo', 'matino', 'nokto', 'horo', 'semano', 'yaro'],
        cloze: [
          { sentence: 'La ___ esas longa.', answer: 'nokto', options: ['nokto', 'matino', 'horo'], translation: 'A noite é longa.' },
          { sentence: 'Quanta ___ esas en yaro?', answer: 'semano', options: ['semano', 'horo', 'matino'], translation: 'Quantas semanas há num ano?' },
          { sentence: 'La ___ esas mala.', answer: 'sturmo', options: ['sturmo', 'matino', 'yaro'], translation: 'A tempestade é má (ruim).' },
        ],
        voice: {
          bot: 'Kande vu lernas Ido?',
          botTranslation: 'Quando você aprende Ido?',
          expected: ['Me lernas Ido en la matino.', 'me lernas', 'matino'],
          hint: 'Responda com "Me lernas Ido en…" e diga quando (matino, nokto...).',
        },
        communityPrompt: 'Diga quando você estuda Ido: "Me lernas Ido en la matino/nokto" ou fale de quanto tempo (horo, semano, yaro).',
      },
      {
        id: 'ido-u3-l3',
        title: 'Prova: clima e tempo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hodie, la pluvo esas mala e la vento esas granda. Quale esas la vetero en vua urbo?',
          botTranslation: 'Hoje, a chuva está má e o vento está forte. Como está o tempo (clima) na sua cidade?',
          expected: ['La suno esas varmega en mea urbo.', 'la suno', 'varmega'],
          hint: 'Descreva o clima da sua cidade com "la suno/pluvo/nivo esas…".',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o clima e o tempo (manhã, noite, semana) na sua região, em Ido.',
      },
    ],
  },
  {
    id: 'ido-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mediko e kompra',
    emoji: '🛍️',
    card: {
      id: 'ido-c4',
      title: 'Vocabulário fácil de reconhecer',
      emoji: '🧩',
      history:
        'Como o Ido herdou a maior parte do vocabulário do esperanto, que já tinha escolhido raízes latinas e românicas, palavras do dia a dia como "mediko" (médico), "chera" (caro) e "pekunio" (dinheiro) continuam fáceis de reconhecer por quem fala português — a mesma proximidade que a A1 já mostrou com "familio", "granda" e "aquo".',
      culture_tip:
        'Os sufixos -ulo/-ino continuam opcionais também nas profissões: "mediko" sozinho já serve pra médico ou médica, sem precisar marcar o sexo — só "medikulo" ou "medikino" se isso realmente importar na frase.',
      grammar_why:
        'A comparação usa "plu [adjetivo] kam" (mais... que): "La vino esas plu chera kam la pano" (o vinho é mais caro que o pão). O adjetivo nunca muda de forma, só as palavras "plu" e "kam" entram em volta dele.',
      grammar_examples: [
        ['La vino esas plu chera kam la pano.', 'O vinho é mais caro que o pão.'],
        ['Mea kapo esas plu granda kam mea manuo.', 'Minha cabeça é maior que minha mão.'],
      ],
      character_guide: [
        ['ch (dígrafo, já visto na A1)', 'sempre "tch", como em "chanco"', 'chipa ("TCHI-pa", barato)'],
      ],
    },
    lessons: [
      {
        id: 'ido-u4-l1',
        title: 'Mediko e kompra',
        kind: 'licao',
        words: ['mediko', 'policisto', 'soldato', 'komprar', 'vendar', 'pekunio'],
        cloze: [
          { sentence: 'Mea ___ esas bona.', answer: 'mediko', options: ['mediko', 'policisto', 'soldato'], translation: 'Meu médico é bom.' },
          { sentence: 'Me ___ pano.', answer: 'kompras', options: ['kompras', 'vendas', 'havas'], translation: 'Eu compro pão.' },
          { sentence: 'Me havas ___.', answer: 'pekunio', options: ['pekunio', 'mediko', 'soldato'], translation: 'Eu tenho dinheiro.' },
        ],
        voice: {
          bot: 'Ka vu havas pekunio?',
          botTranslation: 'Você tem dinheiro?',
          expected: ['Yes, me havas pekunio.', 'yes, me havas', 'no, me ne havas'],
          hint: 'Responda com "Yes, me havas…" ou "No, me ne havas…".',
        },
        communityPrompt: 'Fale de uma profissão (mediko, policisto, soldato) e de uma compra (me kompras…) em Ido.',
      },
      {
        id: 'ido-u4-l2',
        title: 'Chera e kapo',
        kind: 'licao',
        words: ['chipa', 'chera', 'kapo', 'manuo', 'okulo', 'boko'],
        cloze: [
          { sentence: 'La vino esas ___.', answer: 'chera', options: ['chera', 'chipa', 'granda'], translation: 'O vinho é caro.' },
          { sentence: 'Mea ___ esas blua.', answer: 'okulo', options: ['okulo', 'kapo', 'boko'], translation: 'Meu olho é azul.' },
          { sentence: 'Mea ___ esas mikra.', answer: 'manuo', options: ['manuo', 'kapo', 'boko'], translation: 'Minha mão é pequena.' },
        ],
        voice: {
          bot: 'Quale esas vua kapo, granda o mikra?',
          botTranslation: 'Como é sua cabeça, grande ou pequena?',
          expected: ['Mea kapo esas granda.', 'mea kapo', 'granda'],
          hint: 'Descreva sua cabeça com "Mea kapo esas…".',
        },
        communityPrompt: 'Descreva seu corpo em Ido: "mea kapo", "mea manuo" ou "mea okulo", com "esas" e um adjetivo.',
      },
      {
        id: 'ido-u4-l3',
        title: 'Prova: compras e corpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'La pano esas chipa, ma la vino esas chera. Ka vu kompras vino?',
          botTranslation: 'O pão é barato, mas o vinho é caro. Você compra vinho?',
          expected: ['No, me kompras pano.', 'no, me kompras', 'yes, me kompras'],
          hint: 'Responda "Yes" ou "No" e diga o que você compra.',
        },
        communityPrompt: 'Escreva um parágrafo curto em Ido sobre uma compra e seu corpo/saúde, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
