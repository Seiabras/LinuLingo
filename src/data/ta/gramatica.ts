import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tâmil — A1.1 ao A2.2 (pacote incompleto, falta do B1 em diante). O tâmil é
 * dravídico meridional (não indo-ariano como o hindi, e num ramo diferente do télugo, que é
 * dravídico centro-meridional): a morfologia é aglutinante, só com sufixos, a ordem é
 * sujeito-objeto-verbo (SOV), e os casos são marcados por sufixos pospostos, não por preposições.
 * Fontes: Wikipédia em inglês («Tamil language», «Tamil grammar», «Tamil script», «Tamil
 * phonology») e Wiktionary em inglês (verbete de cada palavra citada). Nível A2.1/A2.2: as formas
 * locativas (நகரத்தில், கடையில், பள்ளியில்) vêm das tabelas de declinação do Wiktionary de cada
 * palavra; o futuro de “இரு” (இருப்பேன், இருக்கும்…) vem da tabela de conjugação do Wiktionary.
 */
export const GRAMMAR_TA: GrammarTopic[] = [
  {
    id: 'ta-g1',
    level: 'A1.1',
    title: 'O alfabeto tâmil',
    emoji: '🔤',
    summary: 'Uma escrita silábica (abugida) com só 12 vogais e 18 consoantes — e uma letra que soa de um jeito diferente conforme o lugar na palavra.',
    sections: [
      {
        text: 'O tâmil se escreve da esquerda para a direita, num alfabeto próprio (não o télugo, nem o devanágari do hindi): descende do brahmi por meio da escrita Pallava, e os traços curvos vêm de uma época em que se escrevia em folha de palmeira, onde um traço reto rasgaria a folha. É uma abugida: cada consoante já soa com um “a” embutido, e sinais ao redor dela trocam essa vogal. O alfabeto tem só 12 vogais (உயிரெழுத்து, “letras-alma”), 18 consoantes (மெய்யெழுத்து, “letras-corpo”) e um caractere à parte, o ஃ (āytam) — bem menos letras do que o télugo ou o hindi, que têm símbolos separados para consoantes aspiradas e sonoras.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['அ', 'um “a” curto, como em “casa”', 'வணக்கம் (vaṇakkam, “olá”)'],
            ['வ', 'como o “v” do português', 'வணக்கம் (vaṇakkam)'],
            ['க', 'no início soa [k]; no meio da palavra costuma amolecer para [g] ou [x]', 'வணக்கம் (o “க” do meio soa como [g], não como [k])'],
            ['ந', 'um “n” dental, com a língua tocando os dentes', 'நன்றி (naṉṟi, “obrigado”)'],
          ],
        },
        examples: [['வணக்கம்! நீங்கள் எப்படி இருக்கின்றீர்கள்?', 'Olá! Como você está? (formal)']],
      },
      {
        heading: 'Uma letra, vários sons',
        text: 'A característica mais famosa da escrita tâmil: ao contrário de todas as outras escritas brahmicas (como o devanágari ou o télugo), ela não tem letras separadas para consoantes sonoras e surdas, nem para aspiradas e não aspiradas. A mesma letra க், por exemplo, pode soar [k], [g] ou [x] dependendo da posição na palavra — quem lê tâmil precisa saber essas regras de cor, porque a escrita não marca a diferença. Já o grupo de letras grantha (ஜ, ஶ, ஷ, ஸ, ஹ e a combinação க்ஷ) foi acrescentado depois, só para escrever palavras emprestadas do sânscrito.',
        examples: [],
      },
    ],
    pitfalls: [
      'Tentar ler o tâmil letra por letra, como o alfabeto latino: cada consoante já soa com um “a” embutido, e sinais grudados ao redor mudam essa vogal.',
      'Ler க், ட், ப் e as outras consoantes “duras” sempre do mesmo jeito: o som muda conforme a posição na palavra, e a escrita não avisa.',
    ],
    quiz: [
      {
        question: 'Comparado com o devanágari do hindi ou o alfabeto télugo, o alfabeto tâmil tem…',
        options: ['menos letras, sem símbolos separados para consoantes sonoras/surdas ou aspiradas', 'mais letras, com símbolos extras para tons', 'o mesmo número de letras, só com formas diferentes'],
        answer: 'menos letras, sem símbolos separados para consoantes sonoras/surdas ou aspiradas',
        explanation: 'O tâmil tem só 18 consoantes; a mesma letra pode soar sonora ou surda dependendo da posição na palavra.',
      },
      {
        question: 'Para que servem as letras grantha (ஜ, ஷ, ஸ, ஹ…)?',
        options: ['Para escrever palavras emprestadas do sânscrito', 'Para marcar o plural', 'Para marcar o tempo verbal'],
        answer: 'Para escrever palavras emprestadas do sânscrito',
        explanation: 'O alfabeto tâmil nativo não tem esses sons; as letras grantha foram acrescentadas depois, só para empréstimos.',
      },
    ],
  },
  {
    id: 'ta-g2',
    level: 'A1.1',
    title: 'நீ, நீங்கள்: o “você” e o “nós”',
    emoji: '🙇',
    summary: 'O tâmil distingue “tu” informal de “você/vocês” respeitoso — e tem dois “nós” diferentes.',
    sections: [
      {
        text: '“நீ” é o pronome informal do dia a dia, usado com amigos, colegas e crianças. “நீங்கள்” — formado de நீ mais o sufixo de plural -கள் — é ao mesmo tempo o tratamento respeitoso para uma pessoa só (desconhecidos, pessoas mais velhas, qualquer figura de autoridade) e o plural comum, “vocês”.',
        table: {
          head: ['Pronome', 'Nível', 'Uso'],
          rows: [
            ['நீ', 'informal, íntimo', 'amigos, colegas, crianças'],
            ['நீங்கள்', 'formal (singular) e plural', 'desconhecidos, mais velhos, respeito — e “vocês”'],
          ],
        },
        examples: [
          ['நீ எங்கே?', 'Onde você está? (informal)'],
          ['நீங்கள் எப்படி இருக்கின்றீர்கள்?', 'Como você está? (formal)'],
        ],
      },
      {
        heading: 'Dois “nós”',
        text: 'O tâmil também separa dois tipos de “nós”: “நாங்கள்” exclui a pessoa com quem se fala (“nós, mas não você”), e “நாம்” inclui quem ouve (“nós, inclusive você”). O português não faz essa diferença — tem só um “nós” para os dois casos.',
        examples: [['நாங்கள் ஒரு குடும்பம்.', 'Nós somos uma família. (“nós” não inclui necessariamente quem ouve)']],
      },
    ],
    pitfalls: [
      'Usar “நீ” com um desconhecido ou alguém mais velho: soa informal demais, como usar “tu” com o chefe no primeiro encontro.',
      'Traduzir “nós” sem pensar se inclui ou não quem ouve: o tâmil tem uma palavra para cada caso (நாங்கள் × நாம்), e o português só tem uma.',
    ],
    quiz: [
      {
        question: 'Para falar pela primeira vez com um professor desconhecido, o pronome mais seguro é…',
        options: ['நீங்கள்', 'நீ', 'நாம்'],
        answer: 'நீங்கள்',
        explanation: '“நீங்கள்” é o tratamento respeitoso, certo para desconhecidos e pessoas mais velhas — e também serve de plural.',
      },
      {
        question: 'Qual “nós” inclui a pessoa com quem você está falando?',
        options: ['நாம்', 'நாங்கள்', 'நீங்கள்'],
        answer: 'நாம்',
        explanation: '“நாம்” é o “nós” inclusivo; “நாங்கள்” exclui quem ouve.',
      },
    ],
  },
  {
    id: 'ta-g3',
    level: 'A1.2',
    title: 'Ordem SOV e os sufixos de caso',
    emoji: '🧩',
    summary: 'O tâmil é aglutinante (só sufixos) e sujeito-objeto-verbo (SOV); quem faz o quê é marcado por sufixos de caso, não por preposições — e frases de identidade não usam verbo nenhum.',
    sections: [
      {
        text: 'No tâmil, as relações gramaticais (quem faz, quem recebe, onde, com quem, de onde) são marcadas por sufixos grudados no fim da palavra. A ordem da frase é sujeito-objeto-verbo (SOV): o verbo, quando existe, fecha a frase. Mas quando o predicado é um substantivo (um nome, um parentesco), o tâmil não usa verbo nenhum — é o chamado predicado de cópula zero: “அவள் என் அக்கா” é, ao pé da letra, “ela minha irmã-mais-velha”, sem nada equivalente a “é”.',
        table: {
          head: ['Caso', 'Sufixo', 'Exemplo'],
          rows: [
            ['Acusativo', '-ai', 'பூனையை (o gato, como objeto)'],
            ['Dativo', '-ukku / -kku', 'எனக்கு (para mim, a mim)'],
            ['Instrumental', '-āl', 'கையால் (com a mão)'],
            ['Sociativo', '-ōṭu / -uṭaṉ', 'நாயோடு (com o cachorro)'],
            ['Ablativo', '-iliruntu', 'வீட்டிலிருந்து (de casa, a partir de casa)'],
            ['Locativo', '-il / -iṭam', 'வீட்டில் (em casa, na casa)'],
          ],
        },
        examples: [
          ['அவள் என் அக்கா.', 'Ela é minha irmã mais velha. (sem verbo: o predicado é um substantivo)'],
          ['எனக்கு தண்ணீர் வேண்டும்.', 'Eu quero água.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” em frases como “அவள் என் அக்கா”: o tâmil não usa verbo nenhum quando o predicado é um substantivo.',
      'Colocar o verbo no meio da frase, como em português: no tâmil o verbo, quando existe, é sempre a última palavra.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele é meu pai”, sem nenhum verbo “ser”?',
        options: ['அவன் என் அப்பா.', 'அவன் இருக்கிறான் என் அப்பா.', 'என் அப்பா அவன் ஆகிறான்.'],
        answer: 'அவன் என் அப்பா.',
        explanation: 'Quando o predicado é um substantivo (um parentesco, um nome), o tâmil usa cópula zero: não precisa de verbo nenhum.',
      },
      {
        question: 'Qual sufixo marca o caso dativo, como em “para mim”?',
        options: ['-க்கு (எனக்கு)', '-ஆல்', '-இல்'],
        answer: '-க்கு (எனக்கு)',
        explanation: 'O dativo tâmil usa -க்கு/-உக்கு: நான் (eu) vira எனக்கு (para mim, a mim).',
      },
    ],
  },
  {
    id: 'ta-g4',
    level: 'A1.2',
    title: 'இல்லை × அல்ல: uma negação só na fala, duas na escrita',
    emoji: '🚫',
    summary: 'No tâmil literário há dois “nãos” diferentes; na fala cotidiana, os dois viraram um só — um exemplo claro da diglossia do tâmil.',
    sections: [
      {
        text: 'O tâmil tem uma diglossia bem documentada: de um lado o tâmil literário/formal (செந்தமிழ், centamiḻ), de outro o tâmil falado no dia a dia (கொடுந்தமிழ், koṭuntamiḻ), com diferenças de gramática entre eles — não é só “sotaque”. A negação é um exemplo direto: no tâmil literário, “அல்ல” nega identidade (“X não é Y”) e “இல்லை” nega existência ou posse (“não há”, “não tenho”). Mas no tâmil falado essa distinção quase desapareceu: “இல்லை” sozinho passou a negar os dois casos, e “அல்ல” ficou restrito à escrita formal.',
        table: {
          head: ['Negação', 'Registro', 'Usa para'],
          rows: [
            ['அல்ல', 'só tâmil literário/formal', 'negar identidade: “X não é Y”'],
            ['இல்லை', 'tâmil literário (existência/posse) e tâmil falado (tudo)', 'negar existência, posse — e, na fala, também identidade'],
          ],
        },
        examples: [
          ['எனக்கு ஒரு அண்ணன் உண்டு.', 'Eu tenho um irmão mais velho.'],
          ['எனக்கு ஒரு அண்ணன் இல்லை.', 'Eu não tenho irmão mais velho. (negação de உண்டு, no falado também serviria para negar identidade)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar ouvir “அல்ல” na conversa do dia a dia: na fala, quase tudo se nega com “இல்லை”, mesmo frases de identidade.',
      'Achar que “literário” e “falado” no tâmil são só uma questão de sotaque: a diglossia tâmil muda também a gramática, não só a pronúncia.',
    ],
    quiz: [
      {
        question: 'No tâmil falado do dia a dia, qual palavra nega tanto “não ser” quanto “não ter/não existir”?',
        options: ['இல்லை', 'அல்ல', 'கிடையாது (só numa variante)'],
        answer: 'இல்லை',
        explanation: 'Na fala cotidiana, “இல்லை” tomou o lugar de “அல்ல”: virou o “não” de uso geral.',
      },
      {
        question: 'O nome do tâmil literário formal, usado sobretudo por escrito, é…',
        options: ['செந்தமிழ் (centamiḻ)', 'கொடுந்தமிழ் (koṭuntamiḻ)', 'பிராகிருதம்'],
        answer: 'செந்தமிழ் (centamiḻ)',
        explanation: 'செந்தமிழ் é o tâmil literário, baseado no tâmil médio do século 13; கொடுந்தமிழ் é a forma falada do dia a dia.',
      },
    ],
  },
  {
    id: 'ta-g5',
    level: 'A1.2',
    title: 'எனக்கு … வேண்டும்: pedir e precisar com o caso dativo',
    emoji: '🤲',
    summary: 'Para querer ou precisar de algo, o tâmil põe quem deseja no caso dativo e usa um verbo que nunca se conjuga.',
    sections: [
      {
        text: 'Para dizer que quer ou precisa de algo, o tâmil põe quem deseja no caso dativo (எனக்கு, “para mim”) e usa “வேண்டும்”, uma forma que não muda por pessoa, número ou gênero — vale para todo mundo, sempre igual. Quem deseja nunca é o sujeito gramatical: o sujeito é a própria coisa desejada. O mesmo padrão dativo aparece para dizer que se tem algo, só que com o verbo invariável “உண்டு” (“há, existe”) no lugar de வேண்டும்.',
        table: {
          head: ['Pronome', 'Dativo', 'Exemplo'],
          rows: [
            ['நான் (eu)', 'எனக்கு', 'எனக்கு தண்ணீர் வேண்டும். (eu quero água)'],
            ['நீங்கள் (você, formal)', 'உங்களுக்கு', 'உங்களுக்கு என்ன வேண்டும்? (o que você quer?)'],
          ],
        },
        examples: [
          ['எனக்கு பால் வேண்டும்.', 'Eu quero leite.'],
          ['எனக்கு ஒரு அண்ணன் உண்டு.', 'Eu tenho um irmão mais velho. (mesma estrutura dativa, com உண்டு no lugar de வேண்டும்)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar conjugar “வேண்டும்” como um verbo comum: ele não muda com a pessoa, o número ou o gênero — fica sempre “வேண்டும்”.',
      'Colocar quem quer no caso reto (sujeito): o certo é usar o dativo (எனக்கு), não “நான் வேண்டும்”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu quero água”?',
        options: ['எனக்கு தண்ணீர் வேண்டும்.', 'நான் தண்ணீர் வேண்டும்.', 'தண்ணீர் எனக்கு வேண்டுமா.'],
        answer: 'எனக்கு தண்ணீர் வேண்டும்.',
        explanation: 'Quem quer vai no dativo (எனக்கு), e “வேண்டும்” não se conjuga.',
      },
      {
        question: 'Qual é o dativo de “நான்” (eu)?',
        options: ['எனக்கு', 'என்', 'நானே'],
        answer: 'எனக்கு',
        explanation: '“எனக்கு” é a forma dativa de “நான்”, usada em pedidos, necessidades e posse (com உண்டு/இல்லை).',
      },
    ],
  },
  {
    id: 'ta-g6',
    level: 'A2.1',
    title: 'O caso locativo: -இல்/-இடம்',
    emoji: '📍',
    summary: 'O tâmil marca “em, dentro de” com o sufixo locativo “-இல்” (ou “-இடம்”), grudado na forma declinada do substantivo.',
    sections: [
      {
        text: 'Alguns substantivos ganham um pedaço extra antes do sufixo locativo (“நகரம்” vira “நகரத்தில்”, com um “த” a mais), enquanto outros só acrescentam “-இல்” direto (“கடை” vira “கடையில்”, “பள்ளி” vira “பள்ளியில்”).',
        table: {
          head: ['Substantivo', 'Locativo “-இல்”', 'Tradução'],
          rows: [
            ['நகரம் (cidade)', 'நகரத்தில்', 'na cidade'],
            ['கடை (loja)', 'கடையில்', 'na loja'],
            ['பள்ளி (escola)', 'பள்ளியில்', 'na escola'],
          ],
        },
        examples: [
          ['நான் நகரத்தில் இருக்கின்றேன்.', 'Eu estou na cidade.'],
          ['நான் கடையில் இருக்கின்றேன்.', 'Eu estou na loja.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o substantivo puro sem o sufixo “-இல்”: “நகரம் இருக்கின்றேன்” não faz sentido — precisa de “நகரத்தில்”.',
      'Esperar que o sufixo grude sem nenhuma mudança: alguns substantivos (como “நகரம்”) ganham um “த” extra antes do “-இல்”, enquanto outros (como “கடை”, “பள்ளி”) só acrescentam “-இல்” direto.',
    ],
    quiz: [
      { question: 'Como se diz “na loja”?', options: ['கடையில்', 'கடை', 'கடைக்கு'], answer: 'கடையில்', explanation: 'O sufixo locativo “-இல்” grudado em “கடை” dá “கடையில்” (na loja).' },
      { question: 'O que “நகரத்தில்” significa?', options: ['na cidade', 'a cidade (objeto)', 'para a cidade'], answer: 'na cidade', explanation: '“நகரத்தில்” é “நகரம்” (cidade) com o sufixo locativo “-இல்”.' },
    ],
  },
  {
    id: 'ta-g7',
    level: 'A2.1',
    title: 'Sentimentos também usam o dativo: எனக்கு … உண்டு',
    emoji: '😨',
    summary: 'Assim como posse e parentesco, sensações e emoções usam o caso dativo com “உண்டு” — quem sente nunca é o sujeito gramatical.',
    sections: [
      {
        text: 'A mesma construção de “எனக்கு ஒரு அண்ணன் உண்டு” (eu tenho um irmão mais velho) serve para fome, sede, medo e outros sentimentos: a pessoa que sente vai no dativo (எனக்கு), e o próprio sentimento é o sujeito gramatical da frase.',
        examples: [
          ['எனக்கு பசி உண்டு.', 'Estou com fome. (lit. “a mim fome existe”)'],
          ['எனக்கு தாகம் உண்டு.', 'Estou com sede.'],
          ['எனக்கு பயம் உண்டு.', 'Estou com medo.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr quem sente como sujeito, como em português: “நான் பசி” está errado — o certo é “எனக்கு பசி உண்டு”.',
      'Esquecer “உண்டு” no final: sem ele, a frase fica incompleta.',
    ],
    quiz: [
      { question: 'Como se diz “estou com medo”?', options: ['எனக்கு பயம் உண்டு.', 'நான் பயம் உண்டு.', 'பயம் நான் உண்டு.'], answer: 'எனக்கு பயம் உண்டு.', explanation: 'Sentimentos usam o dativo “எனக்கு” com “உண்டு”, igual à posse.' },
      { question: 'Em “எனக்கு தாகம் உண்டு”, qual é o sujeito gramatical da frase?', options: ['தாகம் (a sede)', 'எனக்கு (eu)', 'உண்டு'], answer: 'தாகம் (a sede)', explanation: 'O sujeito gramatical é a própria sensação; quem sente é marcado com o dativo “எனக்கு”.' },
    ],
  },
  {
    id: 'ta-g8',
    level: 'A2.2',
    title: 'O futuro de இரு: இருப்பேன், இருக்கும்…',
    emoji: '🔮',
    summary: 'O futuro de “இரு” (ser/estar/existir) tem uma raiz própria, com uma forma para cada pessoa — incluindo uma forma neutra, “இருக்கும்”, usada para o clima.',
    sections: [
      {
        table: {
          head: ['Pessoa', 'Futuro de “இரு”'],
          rows: [
            ['நான் (eu)', 'இருப்பேன்'],
            ['நீ (tu)', 'இருப்பாய்'],
            ['அவன் (ele)', 'இருப்பான்'],
            ['அவள் (ela)', 'இருப்பாள்'],
            ['அது (isso, o clima)', 'இருக்கும்'],
          ],
        },
        examples: [
          ['நாளை மழை இருக்கும்.', 'Vai chover amanhã.'],
          ['நான் நாளை நகரத்தில் இருப்பேன்.', 'Eu vou estar na cidade amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “இருக்கின்றேன்” (presente) para falar do futuro: o futuro tem raiz própria, “இருப்பேன்/இருக்கும்…”.',
      'Esquecer que o clima usa a forma neutra “இருக்கும்”, não “இருப்பேன்” ou “இருப்பான்”.',
    ],
    quiz: [
      { question: 'Como se diz “vai chover amanhã”?', options: ['நாளை மழை இருக்கும்.', 'நாளை மழை இருக்கின்றது.', 'நாளை மழை இருந்தது.'], answer: 'நாளை மழை இருக்கும்.', explanation: '“இருக்கும்” é o futuro neutro de “இரு”, usado para o clima.' },
      { question: 'Qual é o futuro de “இரு” na 1ª pessoa (eu)?', options: ['இருப்பேன்', 'இருப்பாய்', 'இருக்கும்'], answer: 'இருப்பேன்', explanation: '“இருப்பேன்” é “eu serei/estarei”, a forma de 1ª pessoa do futuro de “இரு”.' },
    ],
  },
];
