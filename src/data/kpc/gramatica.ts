import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do baniwa, do A1.1 ao A2.2 (o A2 tem cabeçalho próprio, mais abaixo). Fontes do A1: ver o
 * cabeçalho de vocabulario.ts, sobretudo pt.wikipedia.org/wiki/Língua_baniwa (citando Henri Ramirez,
 * “Línguas Arawak da Amazônia Setentrional”, 2001, e “Dicionário da língua baniwa”, 2001) e
 * en.wikipedia.org/wiki/Baniwa_of_Içana_language.
 */
export const GRAMMAR_KPC: GrammarTopic[] = [
  {
    id: 'kpc-g1',
    level: 'A1.1',
    title: 'Pronomes independentes: identidade sem verbo “ser”',
    emoji: '🙋',
    summary: 'O baniwa usa os pronomes independentes sozinhos, sem um verbo “ser”, para dizer quem alguém é.',
    sections: [
      {
        text: 'O baniwa marca a pessoa gramatical de dois jeitos: afixos (prefixos e sufixos) que acompanham o verbo, e pronomes INDEPENDENTES (nhúa, phía, lhía, rhúa, wháa, hía, nháa), usados sozinhos quando não há um verbo de apoio — por exemplo, ao responder uma pergunta ou ao se apresentar. É por isso que “Nhúa Walimanai” (lit. “eu, walimanai”) já vale como “eu sou baniwa”: não existe, nessa construção, um verbo equivalente a “ser”.',
        table: {
          head: ['Pessoa', 'Pronome independente', 'Prefixo verbal'],
          rows: [
            ['1ª singular (eu)', 'nhúa', 'nu-'],
            ['2ª singular (tu/você)', 'phía', 'pi-'],
            ['3ª singular não-feminina (ele)', 'lhía', 'li-'],
            ['3ª singular feminina (ela)', 'rhúa', 'ru-'],
            ['1ª plural (nós)', 'wháa', 'wa-'],
            ['3ª plural (eles/elas)', 'nháa', 'na-'],
          ],
        },
        examples: [
          ['Nhúa Walimanai.', 'Eu sou walimanai (baniwa).'],
          ['Nukápa.', 'Eu vejo. (nu- + kápa, “ver”)'],
          ['Pikápa nhua.', 'Tu me vês. (pi- + kápa + -nhua, “me”)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser”/“estar” para traduzir frases como “eu sou baniwa”: o baniwa simplesmente justapõe o pronome independente à palavra que identifica a pessoa, sem verbo.',
      'Confundir “lhía” (ele) com “rhúa” (ela): a 3ª pessoa do singular muda de forma conforme o referente é feminino ou não-feminino — é a única distinção de gênero gramatical da língua.',
    ],
    quiz: [
      { question: 'Como se diz “eu sou baniwa” em baniwa?', options: ['Nhúa Walimanai.', 'Nhúa nii Walimanai.', 'Walimanai sou nhúa.'], answer: 'Nhúa Walimanai.', explanation: 'O pronome independente “nhúa” (eu) é usado sozinho, sem verbo “ser”, para identificar quem fala.' },
      { question: 'Qual pronome independente quer dizer “ela”?', options: ['rhúa', 'lhía', 'nháa'], answer: 'rhúa', explanation: '“Lhía” é “ele” (não-feminino); “nháa” é “eles/elas” (plural).' },
    ],
  },
  {
    id: 'kpc-g2',
    level: 'A1.1',
    title: 'Perguntas: “káphaa” e as palavras interrogativas',
    emoji: '❓',
    summary: 'As perguntas de sim/não começam com “káphaa”; as perguntas abertas usam “kúa” e suas variações.',
    sections: [
      {
        text: 'No baniwa, as sentenças interrogativas se dividem em dois tipos. As de resposta sim/não começam pela partícula “káphaa”. As de resposta variada (quem?, o quê?, onde?, quando?, por quê?, quantos?) começam pelo morfema “kúa” ou por uma de suas variações: “kúame” (como?), “kuawada” (por quê?), “kalhe” (onde?) e “kenakuda” (quantos?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['káphaa', 'pergunta de sim/não', 'káphaa lideeka mukawa? (ele trouxe a espingarda?)'],
            ['kúa', 'o quê?, quem?', 'kúa íinaiwatsa núawa? (com quem irei?)'],
            ['kuamekawali', 'quando?', 'kuamekawali rúukawa (quando ela chegou?)'],
            ['kalhe', 'onde?', 'kalhe pihániri? (onde está o seu pai?)'],
          ],
        },
        examples: [
          ['Káphaa phía Walimanai?', 'Você é walimanai?'],
          ['Kúa íinaiwatsa núawa?', 'Com quem irei?'],
        ],
      },
    ],
    pitfalls: [
      'Fazer uma pergunta de sim/não só pela entonação, como em português: o baniwa marca essas perguntas com a partícula “káphaa” no início da frase.',
      'Usar “kúa” para tudo: cada pergunta aberta tem sua própria variação (“kalhe”, onde; “kenakuda”, quantos…), não é uma palavra única para todas as perguntas.',
    ],
    quiz: [
      { question: 'Qual palavra abre uma pergunta de sim/não em baniwa?', options: ['Káphaa', 'Kúa', 'Ñame'], answer: 'Káphaa', explanation: '“Káphaa” marca especificamente as perguntas de resposta sim/não.' },
      { question: 'O que “kalhe” pergunta?', options: ['Onde?', 'Quando?', 'Quantos?'], answer: 'Onde?', explanation: '“Kenakuda” pergunta “quantos?” e “kuamekawali” pergunta “quando?”.' },
    ],
  },
  {
    id: 'kpc-g3',
    level: 'A1.2',
    title: 'Classificadores e numerais: contando pelas mãos',
    emoji: '🖐️',
    summary: 'Os numerais do baniwa vão de 1 a 4 com raízes próprias; a partir de 5, a língua conta pelas mãos.',
    sections: [
      {
        text: 'O baniwa tem classificadores: morfemas que marcam a forma física das coisas e se prendem a substantivos, numerais e adjetivos. Alguns exemplos: “-aápa” (forma oblonga: aves, tubérculos, bananas), “-da” (forma redonda: animais, frutos), “-iíta” (achatado ou forma humana) e “-áanhaa” (líquidos). Os numerais cardinais de 1 a 4 têm raízes próprias (apaa-, dzama-, madali-, likua-) que podem vir com um classificador, como em “dzama-ápa palána” (duas bananas, com o classificador de forma oblonga). A partir de 5, o baniwa usa as mãos como base: “apeéma pakáapi” (uma mão) é cinco, e “dzameéma pakáapi” (duas mãos) é dez.',
        table: {
          head: ['Classificador', 'Forma', 'Exemplo de classe'],
          rows: [
            ['-aápa', 'oblonga', 'aves, tubérculos, bananas'],
            ['-da', 'redonda', 'animais, frutos'],
            ['-iíta', 'achatada/humana', 'macacos, pessoas'],
            ['-áanhaa', 'líquida', 'água, lágrimas'],
          ],
        },
        examples: [
          ['Apá íita.', 'Uma canoa.'],
          ['Dzamaápa palána.', 'Duas bananas.'],
          ['Apeéma pakáapi.', 'Cinco (lit. “uma mão”).'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra própria para cada número, como em português: acima de quatro, o baniwa conta por múltiplos da mão (“pakáapi”), não por raízes numéricas novas.',
      'Esquecer o classificador em certos numerais: “duas bananas” leva o classificador “-ápa” (dzamaápa), enquanto “uma canoa” não leva esse mesmo classificador (apá íita) — cada substantivo combina com o classificador que descreve a sua forma.',
    ],
    quiz: [
      { question: 'Como se diz “cinco” em baniwa?', options: ['Apeéma pakáapi (uma mão)', 'Likua', 'Dzameéma pakáapi'], answer: 'Apeéma pakáapi (uma mão)', explanation: '“Dzameéma pakáapi” (duas mãos) é dez, não cinco.' },
      { question: 'O que o classificador “-aápa” marca?', options: ['Forma oblonga (aves, tubérculos, bananas)', 'Forma redonda', 'Líquidos'], answer: 'Forma oblonga (aves, tubérculos, bananas)', explanation: '“-da” marca forma redonda, e “-áanhaa” marca líquidos.' },
    ],
  },
  {
    id: 'kpc-g4',
    level: 'A1.2',
    title: 'Nomes dependentes: a família sempre “de alguém”',
    emoji: '👨‍👩‍👧',
    summary: 'Termos de parentesco e partes do corpo são nomes dependentes: exigem sempre um prefixo possessivo.',
    sections: [
      {
        text: 'O baniwa distingue nomes INDEPENDENTES, que funcionam sozinhos (“tsíinu”, cão; “Péduru”, Pedro), de nomes DEPENDENTES, que precisam de um prefixo pessoal indicando o possuidor: partes do corpo (“-káapi”, mão de…), anatomia animal/vegetal (“-ke”, galho de…) e termos de parentesco (“-hániri”, pai de…). Por isso, embora os dicionários citem a forma de parentesco sem prefixo (“hániri”, pai), na fala real ela sempre aparece acompanhada: “nu-hániri” (meu pai), “pi-hadua” (tua mãe).',
        table: {
          head: ['Prefixo', 'Pessoa', 'Exemplo'],
          rows: [
            ['nu-', 'meu', 'nu-hániri (meu pai)'],
            ['pi-', 'teu', 'pi-hadua (tua mãe)'],
            ['wa-', 'nosso', 'wa-iri (nosso filho)'],
          ],
        },
        examples: [
          ['Nu-hániri.', 'Meu pai.'],
          ['Nu-hadua.', 'Minha mãe.'],
          ['Runáapa.', 'O braço dela. (ru- + náapa, braço)'],
        ],
      },
    ],
    pitfalls: [
      'Usar um termo de parentesco sozinho, sem prefixo, esperando que funcione como em português (“pai” sem “meu”/“seu”): no baniwa, esses nomes são dependentes e soam incompletos sem o prefixo possessivo.',
      'Confundir nomes dependentes (parentesco, partes do corpo) com nomes independentes (como “tsíinu”, cão, ou nomes próprios): só os dependentes exigem prefixo.',
    ],
    quiz: [
      { question: 'Como se diz “meu pai” em baniwa?', options: ['Nu-hániri.', 'Hániri.', 'Phía hániri.'], answer: 'Nu-hániri.', explanation: '“Hániri” é um nome dependente: precisa do prefixo possessivo “nu-” (meu) na fala real.' },
      { question: 'Qual destas palavras é um nome INDEPENDENTE (funciona sem prefixo pessoal)?', options: ['Tsíinu (cão)', 'Hániri (pai)', 'Hadua (mãe)'], answer: 'Tsíinu (cão)', explanation: '“Hániri” e “hadua” são nomes dependentes de parentesco; “tsíinu” funciona sozinho.' },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes: Henri Ramirez, “Dicionário da Língua Baniwa” (2001), R01b, “Alguns Pontos Gramaticais”,
  // p. 8–24; e “Línguas Arawak da Amazônia Setentrional” (2001), R01a, p. 100–176. Formas conferidas na
  // imagem da página. Grafia: o “o” do dicionário vira “u” (mesma vogal; R01a p. 73–74), como no resto
  // do curso. Todas as frases são do livro, menos as marcadas como montadas.
  {
    id: 'kpc-g5',
    level: 'A2.1',
    title: 'Verbos dependentes: o prefixo diz quem faz',
    emoji: '🔨',
    summary: 'O verbo baniwa não anda sozinho: leva na frente um prefixo que diz quem faz a ação.',
    sections: [
      {
        // R01b p. 9–11 (-déenhi; quadro do verbo -dia); R01a p. 104–105
        text: 'Ramirez divide as palavras do baniwa em quatro classes. Os verbos de ação (“verbos dependentes”) precisam sempre de um prefixo pessoal, que diz quem faz a ação. São os mesmos prefixos que marcam o dono de uma parte do corpo ou de um parente: “nu-” (eu, meu), “pi-” (tu, teu) e assim por diante. Quando o sujeito é um nome, como “Péduru” (Pedro), o verbo leva o prefixo “i-”.',
        table: {
          head: ['Pessoa', 'Voltar (-dia)', 'Braço (-náapa)'],
          rows: [
            ['eu', 'núdia (volto)', 'nunáapa (meu braço)'],
            ['tu', 'pídia (voltas)', 'pináapa (teu braço)'],
            ['ele', 'lídia (ele volta)', 'lináapa (o braço dele)'],
            ['ela', 'rúdia (ela volta)', 'runáapa (o braço dela)'],
            ['nós', 'wádia (voltamos)', 'wanáapa (nossos braços)'],
            ['vocês', 'ídia (vocês voltam)', 'ináapa (os braços de vocês)'],
            ['eles, elas', 'nádia (eles voltam)', 'nanáapa (os braços deles)'],
            ['a gente', 'pádia (a gente volta)', 'panáapa (o braço da gente)'],
            ['Pedro', 'Péduru ídia (Pedro volta)', 'Péduru ináapa (o braço de Pedro)'],
          ],
        },
        examples: [
          ['Nudéenhi.', 'Eu trabalho. (R01b p. 10)'],
          ['Wárha wádiawa!', 'Vamos voltar! (R01b p. 66)'],
          ['Lidéenhika mátsia.', 'Ele trabalha bem. (R01b p. 212)'],
        ],
      },
      {
        // R01b p. 14–16 (regras de fusão vocálica)
        text: 'Quando a raiz começa com vogal ou com “h”, o prefixo se funde com ela. Com “-ímaa” (dormir), “nu-” + “ímaa” dá “nímaa” (alguns falantes dizem “númaa”), e “wa-” + “ímaa” dá “wémaa”. Com raízes em “h”, o “h” pula para antes da vogal: “nu-” + “híipa” (pé) dá “nhúipa” (meu pé).',
        table: {
          head: ['Raiz', 'eu', 'tu', 'nós'],
          rows: [
            ['-ímaa (dormir)', 'nímaa / númaa', 'pímaa', 'wémaa'],
            ['-íidza (chorar)', 'núidza', 'píidza', 'wáidza'],
            ['-uúma (querer)', 'nuúma', 'piúma', 'waáma'],
            ['-híipa (pé)', 'nhúipa', 'phíipa', 'wháipa'],
            ['-héeni (orelha)', 'nhúeni', 'phíeni', 'whéeni'],
            ['-húurhi (joelho)', 'nhúurhi', 'phíurhi', 'wháarhi'],
          ],
        },
        examples: [
          ['Nímheeni mátsia.', 'Dormi bem. (R01b p. 137)'],
          ['Nuúma núiñhaka.', 'Quero comer. (R01b p. 127)'],
        ],
      },
    ],
    pitfalls: [
      'Usar o verbo sem prefixo, como um infinitivo: “déenhi” sozinho não existe na fala; é sempre “nudéenhi”, “pidéenhi” etc.',
      'Juntar o prefixo e a raiz sem a fusão: não é “nu-ímaa”, é “nímaa” (ou “númaa”); não é “nu-híipa”, é “nhúipa”.',
    ],
    quiz: [
      { question: 'Como se diz “nós voltamos”?', options: ['wádia', 'núdia', 'nádia'], answer: 'wádia', explanation: '“Wa-” é o prefixo de “nós”. “Núdia” é “eu volto” e “nádia”, “eles voltam”.' },
      { question: 'Qual é “eu durmo”?', options: ['nímaa', 'pímaa', 'wémaa'], answer: 'nímaa', explanation: '“Nu-” se funde com “-ímaa”: “nímaa” (ou “númaa”, conforme o falar). “Pímaa” é “tu dormes”.' },
      { question: 'Como fica “meu pé”, da raiz “-híipa”?', options: ['nhúipa', 'nuhíipa', 'phíipa'], answer: 'nhúipa', explanation: 'O “h” da raiz pula para depois do “n” do prefixo: “nhúipa”. “Phíipa” é “teu pé”.' },
    ],
  },
  {
    id: 'kpc-g6',
    level: 'A2.1',
    title: 'Sufixos pessoais: “me vês” e “estou triste”',
    emoji: '😞',
    summary: 'Um segundo jogo de marcas, depois da palavra, diz quem é visto e quem está triste.',
    sections: [
      {
        // R01b p. 10–12; R01a p. 106
        text: 'Além dos prefixos, o baniwa tem um jogo de sufixos pessoais. Eles vêm depois da palavra e marcam duas coisas: o objeto do verbo (quem é visto) e quem tem a qualidade de um adjetivo (quem está triste). Os adjetivos não levam prefixo: “iinúnaa” (triste) vem primeiro, e quem está triste vem depois. As formas de duas vogais se escrevem separadas: “iinúnaa nhua”.',
        table: {
          head: ['Pessoa', 'Ver alguém (-kápa)', 'Estar triste (iinúnaa)'],
          rows: [
            ['me / eu', 'pikápa nhua (tu me vês)', 'iinúnaa nhua (estou triste)'],
            ['te / tu', 'nukápa phia (eu te vejo)', 'iinúnaa phia (estás triste)'],
            ['o / ele', 'nukápani (eu o vejo)', 'iinúnaani (ele está triste)'],
            ['a / ela', 'nukápanu (eu a vejo)', 'iinúnaanu (ela está triste)'],
            ['nos / nós', 'pikápa whaa (tu nos vês)', 'iinúnaa whaa (estamos tristes)'],
            ['vocês', 'nukápa hia (eu vejo vocês)', 'iinúnaa hia (vocês estão tristes)'],
            ['os / eles', 'nukápana (eu os vejo)', 'iinúnaana (eles estão tristes)'],
          ],
        },
        examples: [
          ['Iinúnaaka Péduru.', 'Pedro está triste. (R01b p. 17: adjetivo antes, sujeito depois)'],
          ['Matsiádeenee nhua.', 'Já estou bom (de saúde). (R01b p. 212)'],
          ['Wawáakuka hamíña kánheetsa háiku wheekúdza.', 'Carregamos paus pesados demais ontem. (R01b p. 161)'],
        ],
      },
      {
        // R01b p. 20–22 (adjetivo epíteto com classificador e -i, -li, -ro)
        text: 'Quando o adjetivo descreve um nome, ele vem depois do nome e leva o classificador desse nome e um final “-i”, “-li” ou “-ru” (“-ru” para mulheres). Por isso “bom” muda de forma: “atsíanli matsiádali” (homem bom), mas “íinaru matsiádaru” (mulher boa).',
        examples: [
          ['Atsíanli matsiádali.', 'Homem bom. (R01b p. 212)'],
          ['Íinaru matsiádaru.', 'Mulher boa, bonita. (R01b p. 212)'],
          ['Aapá-ma íinaru haalé-da-ru.', 'Uma mulher branca. (R01b p. 22)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o sujeito antes do adjetivo, como em português: em baniwa o adjetivo vem primeiro (“iinúnaaka Péduru”, Pedro está triste).',
      'Confundir o prefixo com o sufixo: em “pikápa nhua” (tu me vês), “pi-” é quem vê e “nhua” é quem é visto.',
    ],
    quiz: [
      { question: 'Como se diz “estou triste”?', options: ['Iinúnaa nhua.', 'Nhúa iinúnaa.', 'Nuiinúnaa.'], answer: 'Iinúnaa nhua.', explanation: 'O adjetivo não leva prefixo: vem primeiro, e o sufixo “nhua” diz quem está triste.' },
      { question: 'O que quer dizer “nukápa phia”?', options: ['Eu te vejo.', 'Tu me vês.', 'Eu o vejo.'], answer: 'Eu te vejo.', explanation: '“Nu-” é quem vê (eu) e “phia” é quem é visto (te). “Tu me vês” é “pikápa nhua”.' },
      { question: 'Qual forma de “bom” vai com “íinaru” (mulher)?', options: ['matsiádaru', 'matsiádali', 'mátsia nhua'], answer: 'matsiádaru', explanation: 'O final “-ru” é o das mulheres: “íinaru matsiádaru”. Com homem, “atsíanli matsiádali”.' },
    ],
  },
  {
    id: 'kpc-g7',
    level: 'A2.2',
    title: 'Hoje, ontem, amanhã: o tempo nas palavras e no “-watsa”',
    emoji: '⏰',
    summary: 'O baniwa marca o tempo com advérbios e com o sufixo “-watsa”, de futuro.',
    sections: [
      {
        // R01a p. 162–163 (advérbios de tempo; +wa(tsa) futuro; -pia passado); R01b p. 216, 244, 254, 286
        text: 'O tempo vem de três jeitos, segundo Ramirez. Primeiro, por advérbios. O baniwa tem dois “hoje”: “pándza” é o hoje que ainda vai acontecer (e também “agora”), e “úupiika” é o hoje que já passou. Segundo, pelo sufixo “-watsa”, de futuro, que entra no verbo ou na palavra de tempo: “núawatsawa” (irei). Terceiro, pelo sufixo “-pia”, do passado distante, de coisas que não fazem mais parte do mundo de hoje; ele é muito usado para contar histórias antigas.',
        table: {
          head: ['Palavra', 'Quando', 'Exemplo'],
          rows: [
            ['pándza', 'agora; hoje (ainda vai acontecer)', 'Pándza líukakawa. (Ele vai chegar hoje.)'],
            ['úupiika', 'hoje (já aconteceu)', 'Línuka úupiika. (Veio hoje.)'],
            ['théewa', 'amanhã', 'Nuakawátsa nuitsaléta théewa. (Vou pescar amanhã.)'],
            ['wheekúdza', 'ontem', 'Nuirá panali wheekúdza. (Bebi um pouco ontem.)'],
            ['meédzami', 'anteontem', 'Meédzami líukawa. (Chegou anteontem.)'],
            ['meédzattua', 'depois de amanhã', 'Meédzattuawatsa líukawa. (Ele chegará depois de amanhã.)'],
          ],
        },
        examples: [
          ['Núawatsawa.', 'Irei. (R01a p. 163)'],
          ['Pándza ñámeetsa pakápa dzáawi.', 'Não se veem mais onças em nossa época. (R01b p. 254)'],
          ['Pándzanialihi, wáa wáiñha!', 'Agora, vamos comer! (R01b p. 254)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “pándza” para um “hoje” que já passou: para o que já aconteceu hoje, o baniwa diz “úupiika” (“línuka úupiika”, veio hoje).',
      'Esquecer o “-watsa” no futuro: “meédzattuawatsa líukawa” (ele chegará depois de amanhã) leva o sufixo colado na palavra de tempo.',
    ],
    quiz: [
      { question: 'Qual palavra é o “hoje” que já passou?', options: ['úupiika', 'pándza', 'théewa'], answer: 'úupiika', explanation: '“Pándza” é o hoje que ainda vai acontecer (e “agora”); “théewa” é amanhã.' },
      { question: 'O que o sufixo “-watsa” marca?', options: ['futuro', 'passado distante', 'plural'], answer: 'futuro', explanation: '“Núawatsawa” é “irei”. O passado distante é marcado por “-pia”.' },
      { question: 'Como se diz “anteontem”?', options: ['meédzami', 'meédzattua', 'wheekúdza'], answer: 'meédzami', explanation: '“Meédzattua” é depois de amanhã, e “wheekúdza” é ontem.' },
    ],
  },
  {
    id: 'kpc-g8',
    level: 'A2.2',
    title: 'Este, esse, aquele: quatro distâncias',
    emoji: '👇',
    summary: 'Os demonstrativos baniwa dividem o espaço em quatro zonas, do mais perto ao mais longe.',
    sections: [
      {
        // R01b p. 22–24 (quadro dos demonstrativos e os exemplos com atsíanli); p. 8 (áahã, aátahã)
        text: 'O português tem três distâncias (este, esse, aquele). O baniwa tem quatro. A primeira é perto de quem fala e de quem ouve; a segunda, perto de quem ouve; a terceira, longe dos dois; a quarta, mais longe ainda. A forma também muda para ela (“rhúa-”) e para o plural (“nháa-”). Os mesmos quatro graus valem para os lugares: “áahã” (aqui) e “aátahã” (lá).',
        table: {
          head: ['Zona', 'Ele / isto', 'Ela', 'Eles, elas', 'Lugar'],
          rows: [
            ['1ª: perto de nós dois', 'lhíehe (este)', 'rhúahã (esta)', 'nháahã (estes)', 'áahã (aqui)'],
            ['2ª: perto de você', 'lhíerahã (esse)', 'rhúarahã (essa)', 'nháarahã (esses)', 'áarahã (aí)'],
            ['3ª: longe de nós dois', 'lhiénahã (aquele ali)', 'rhuánahã (aquela ali)', 'nhaánahã (aqueles ali)', 'aánahã (ali)'],
            ['4ª: mais longe ainda', 'lhiétahã (aquele lá)', 'rhuátahã (aquela lá)', 'nhaátahã (aqueles lá)', 'aátahã (lá)'],
          ],
        },
        examples: [
          ['Lhíehe atsíanli.', 'Este homem. (R01b p. 22)'],
          ['Lhiétahã atsíanli.', 'Aquele homem lá. (R01b p. 23)'],
          ['Rhúahã íinaru.', 'Esta mulher. (R01b p. 24)'],
          ['Nháahã newíki.', 'Estas pessoas. (R01b p. 24)'],
        ],
      },
      {
        // R01b p. 23 (anafóricos sem o final -hã)
        text: 'Sem o final “-hã”, as mesmas palavras retomam o que já foi dito na conversa: “lhíe atsíanli” é “o homem (de que acabamos de falar)”, e “lhiéna atsíanli” é “aquele homem (de que falamos antes)”.',
        examples: [
          ['Rhúa íinaru.', 'A mulher (mencionada agora). (R01b p. 23)'],
          ['Nhaána newíki.', 'Aquelas pessoas (mencionadas antes). (R01b p. 23)'],
        ],
      },
    ],
    pitfalls: [
      'Contar só três distâncias, como em português: “lhiénahã” (aquele ali) e “lhiétahã” (aquele lá, mais longe) são palavras diferentes.',
      'Usar a forma de “ele” para uma mulher: “esta mulher” é “rhúahã íinaru”, não “lhíehe íinaru”.',
    ],
    quiz: [
      { question: 'Qual demonstrativo aponta para o mais longe de todos?', options: ['lhiétahã', 'lhiénahã', 'lhíehe'], answer: 'lhiétahã', explanation: '“Lhiénahã” é “aquele ali”, longe de nós dois; “lhiétahã” é ainda mais longe.' },
      { question: 'Como se diz “esta mulher”?', options: ['rhúahã íinaru', 'lhíehe íinaru', 'nháahã íinaru'], answer: 'rhúahã íinaru', explanation: 'Para mulheres, a forma é “rhúa-”. “Nháahã” é plural.' },
      { question: 'O que é “áahã”?', options: ['aqui', 'lá', 'ali'], answer: 'aqui', explanation: '“Aátahã” é lá, e “aánahã” é ali.' },
    ],
  },
];
