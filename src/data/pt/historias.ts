import type { StorySeed } from '../types';

/** Histórias interativas em português de Portugal: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_PT: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'pt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Uma bica em Alfama',
    emoji: '☕',
    summary: 'Numa pastelaria de Alfama, em Lisboa, o Linu pede o primeiro café e conhece a Inês.',
    cultural_context:
      'Alfama é o bairro mais antigo de Lisboa, com ruas estreitas que descem até o rio Tejo. Em Lisboa, o cafezinho expresso se chama “bica”, e o fado, cantado nas casas do bairro, é Patrimônio Cultural Imaterial da Humanidade pela UNESCO desde 2011.',
    start: 'start',
    glossary: [
      ['Bom dia! / Boa noite!', 'Bom dia! / Boa noite!'],
      ['uma bica', 'um cafezinho (expresso, em Lisboa)'],
      ['a pastelaria', 'a confeitaria, a padaria com doces'],
      ['o cêntimo', 'o centavo (do euro)'],
      ['Aqui tem.', 'Aqui está. (ao entregar algo)'],
      ['tu / o senhor', 'você (informal) / o senhor (formal)'],
      ['a rapariga', 'a moça, a garota (sem nenhum sentido ofensivo em Portugal)'],
      ['Vens?', 'Você vem?'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Lisboa, Alfama. São oito da manhã. Uma pastelaria!',
        translation: 'Lisboa, Alfama. São oito da manhã. Uma confeitaria!',
        choices: [
          { text: '“Bom dia!”', translation: '“Bom dia!”', next: 'balcao' },
          {
            text: '“Boa noite!”',
            translation: '“Boa noite!”',
            wrong: 'São oito da manhã (“São oito da manhã”)! De manhã, em Portugal e no Brasil, se diz “Bom dia!”.',
          },
        ],
      },
      balcao: {
        emoji: '🧁',
        text: '“Bom dia! O que deseja?”, pergunta a senhora do balcão.',
        translation: '“Bom dia! O que o senhor deseja?”, pergunta a senhora do balcão.',
        choices: [
          { text: '“Uma bica, por favor.”', translation: '“Um cafezinho, por favor.”', next: 'bica' },
          { text: '“Um pastel de nata, por favor.”', translation: '“Um pastel de nata, por favor.”', next: 'pastel' },
        ],
      },
      bica: {
        emoji: '☕',
        text: '“Aqui está. Uma bica: oitenta cêntimos.”',
        translation: '“Aqui está. Um cafezinho: oitenta centavos.”',
        choices: [
          { text: '“Obrigado! Aqui tem.”', translation: '“Obrigado! Aqui está.”', next: 'ines' },
          {
            text: '“Oito euros? Aqui tem.”',
            translation: '“Oito euros? Aqui está.”',
            wrong: 'A bica custa “oitenta cêntimos” (80 centavos de euro), não oito euros. Em Portugal, o centavo do euro se chama “cêntimo”.',
          },
        ],
      },
      pastel: {
        emoji: '🥧',
        text: '“Um pastel de nata. Quer canela?”',
        translation: '“Um pastel de nata. Quer canela?”',
        choices: [{ text: '“Sim, obrigado!”', translation: '“Quero, obrigado!”', next: 'ines' }],
      },
      ines: {
        emoji: '👧',
        text: 'Entra uma rapariga. “Olá! Sou a Inês. E tu?”',
        translation: 'Entra uma moça. “Oi! Eu sou a Inês. E você?”',
        choices: [{ text: '“Sou o Linu. Sou do Brasil.”', translation: '“Eu sou o Linu. Sou do Brasil.”', next: 'fado' }],
      },
      fado: {
        emoji: '🎸',
        text: '“Esta noite há fado aqui em Alfama. Vens?”',
        translation: '“Hoje à noite tem fado aqui em Alfama. Você vem?”',
        choices: [
          { text: '“Vou, sim! Até logo, Inês.”', translation: '“Vou, sim! Até mais tarde, Inês.”', next: 'final_bom' },
          { text: '“Hoje não. Estou cansado.”', translation: '“Hoje não. Estou cansado.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'À noite, uma guitarra portuguesa e uma voz. O Linu ouve fado pela primeira vez.',
        translation: 'À noite, uma guitarra portuguesa e uma voz. O Linu ouve fado pela primeira vez.',
        ending: { tone: 'bom', title: 'Noite de fado', message: 'Bica de manhã, fado à noite e uma amiga nova em Alfama. Que dia lisboeta!' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'O Linu volta para o hotel e dorme. E o fado? Fica para amanhã.',
        translation: 'O Linu volta para o hotel e dorme. E o fado? Fica para amanhã.',
        ending: { tone: 'neutro', title: 'Fado adiado', message: 'O Linu descansou, mas perdeu a noite de fado com a Inês. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Noite de São João',
    emoji: '🔨',
    summary: 'Na Ribeira do Porto, o Linu vive a noite de São João, com martelinhos, sardinhas e um amigo novo.',
    cultural_context:
      'Na noite de 23 para 24 de junho, o Porto festeja o São João, um dos santos populares: as pessoas batem de leve na cabeça umas das outras com martelinhos de plástico, comem sardinha assada e, à meia-noite, veem fogos de artifício sobre o rio Douro. A Ribeira, na beira do rio, fica lotada.',
    start: 'start',
    glossary: [
      ['Boa noite!', 'Boa noite!'],
      ['o martelinho', 'o martelinho (de plástico, do São João)'],
      ['a sardinha assada', 'a sardinha assada'],
      ['o rapaz', 'o rapaz, o garoto'],
      ['Como te chamas?', 'Como você se chama?'],
      ['dois / doze', 'dois / doze'],
      ['o fogo de artifício', 'os fogos de artifício'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Porto, Ribeira. É noite de São João! Há música e muita gente.',
        translation: 'Porto, Ribeira. É noite de São João! Tem música e muita gente.',
        choices: [
          { text: 'O Linu quer um martelinho.', translation: 'O Linu quer um martelinho.', next: 'martelo' },
          { text: 'O Linu tem fome.', translation: 'O Linu está com fome.', next: 'sardinhas' },
        ],
      },
      martelo: {
        emoji: '🔨',
        text: 'Um senhor vende martelinhos. “Boa noite! São dois euros.”',
        translation: 'Um senhor vende martelinhos. “Boa noite! São dois euros.”',
        choices: [
          { text: '“Boa noite! Aqui tem dois euros.”', translation: '“Boa noite! Aqui estão dois euros.”', next: 'tiago' },
          {
            text: '“Aqui tem doze euros.”',
            translation: '“Aqui estão doze euros.”',
            wrong: 'O senhor disse “dois euros” (2), não doze (12). Cuidado: em Portugal, a vogal átona some um pouco, e “dois” e “doze” podem soar parecidos. Preste atenção!',
          },
        ],
      },
      sardinhas: {
        emoji: '🐟',
        text: 'Cheira a sardinha assada! “Boa noite! Uma sardinha no pão?”',
        translation: 'Tem cheiro de sardinha assada! “Boa noite! Uma sardinha no pão?”',
        choices: [{ text: '“Sim, por favor! Obrigado.”', translation: '“Sim, por favor! Obrigado.”', next: 'tiago' }],
      },
      tiago: {
        emoji: '👦',
        text: 'Pim! Um martelinho na cabeça do Linu! “Olá! Sou o Tiago. Como te chamas?”',
        translation: 'Pim! Um martelinho na cabeça do Linu! “Oi! Eu sou o Tiago. Como você se chama?”',
        choices: [
          { text: '“Sou o Linu! Pim!”', translation: '“Eu sou o Linu! Pim!”', next: 'meia_noite' },
          {
            text: '“Chamo-me Tiago.”',
            translation: '“Meu nome é Tiago.”',
            wrong: 'Tiago é o nome do rapaz! Ele perguntou “Como te chamas?” (Como você se chama?). Responda com o seu nome: “Sou o Linu” ou “Chamo-me Linu”.',
          },
        ],
      },
      meia_noite: {
        emoji: '🕛',
        text: '“À meia-noite há fogo de artifício. Vamos?”',
        translation: '“À meia-noite tem fogos de artifício. Vamos?”',
        choices: [
          { text: '“Vamos!”', translation: '“Vamos!”', next: 'final_bom' },
          { text: '“Não, obrigado. Vou dormir.”', translation: '“Não, obrigado. Vou dormir.”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎆',
        text: 'Meia-noite. Bum! Luzes sobre o rio Douro. “Viva o São João!”',
        translation: 'Meia-noite. Bum! Luzes sobre o rio Douro. “Viva São João!”',
        ending: { tone: 'bom', title: 'Viva o São João!', message: 'Martelinho na mão, amigo novo e fogos sobre o Douro: o Linu viveu a maior festa do Porto.' },
      },
      final_neutro: {
        emoji: '🛏️',
        text: 'O Linu está no hotel. Pim, pim, pim… há martelinhos até de manhã!',
        translation: 'O Linu está no hotel. Pim, pim, pim… tem martelinho até de manhã!',
        ending: { tone: 'neutro', title: 'Festa pela janela', message: 'No São João, quase ninguém dorme no Porto! O Linu perdeu os fogos. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'A vila da rainha',
    emoji: '🏰',
    summary: 'Em Óbidos, o Linu conhece o Rui numa livraria e uma guia na muralha.',
    cultural_context:
      'Óbidos é uma vila medieval cercada de muralhas, com casas brancas de barras azuis e amarelas. Em 1282, o rei D. Dinis deu a vila de presente de casamento à rainha Isabel, e ela passou a pertencer às rainhas de Portugal por séculos. Hoje a vila tem livrarias até dentro de uma igreja antiga.',
    start: 'start',
    glossary: [
      ['a vila', 'a cidadezinha (pequena cidade)'],
      ['a muralha', 'a muralha'],
      ['Boa tarde!', 'Boa tarde!'],
      ['O senhor é…? / Tu és…?', 'O senhor é…? / Você é…?'],
      ['o miúdo', 'o menino, o garoto'],
      ['giro / Que giro!', 'legal, bonito / Que legal!'],
      ['a rainha', 'a rainha'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Óbidos. Uma vila pequena, com casas brancas e muralhas.',
        translation: 'Óbidos. Uma cidadezinha pequena, com casas brancas e muralhas.',
        choices: [
          { text: 'O Linu sobe à muralha.', translation: 'O Linu sobe na muralha.', next: 'muralha' },
          { text: 'O Linu entra numa livraria.', translation: 'O Linu entra numa livraria.', next: 'livraria' },
        ],
      },
      livraria: {
        emoji: '📚',
        text: 'A livraria é uma igreja antiga! Há livros até ao teto.',
        translation: 'A livraria é uma igreja antiga! Tem livro até o teto.',
        choices: [
          { text: 'O Linu fala com um miúdo.', translation: 'O Linu fala com um menino.', next: 'rui' },
          { text: 'O Linu compra três livros.', translation: 'O Linu compra três livros.', next: 'final_livros' },
        ],
      },
      rui: {
        emoji: '👦',
        text: '“Olá! Eu sou o Rui. Tu és um pinguim?”',
        translation: '“Oi! Eu sou o Rui. Você é um pinguim?”',
        choices: [
          { text: '“Sou! Sou o Linu. Vamos à muralha?”', translation: '“Sou! Eu sou o Linu. Vamos na muralha?”', next: 'muralha' },
          {
            text: '“Não, eu sou o Rui.”',
            translation: '“Não, eu sou o Rui.”',
            wrong: 'O Rui é o menino! Ele se apresentou: “Eu sou o Rui”. Diga o seu nome: “Eu sou o Linu”.',
          },
        ],
      },
      muralha: {
        emoji: '🧱',
        text: 'Na muralha, uma senhora sorri. “Boa tarde! O senhor é turista?”',
        translation: 'Na muralha, uma senhora sorri. “Boa tarde! O senhor é turista?”',
        choices: [
          { text: '“Boa tarde! Sou, sim.”', translation: '“Boa tarde! Sou, sim.”', next: 'rainha' },
          {
            text: '“Não, obrigado. Não quero.”',
            translation: '“Não, obrigado. Não quero.”',
            wrong: 'A senhora não ofereceu nada: ela perguntou “O senhor é turista?”. Em Portugal, “o senhor” é o tratamento educado — ela está falando com você!',
          },
        ],
      },
      rainha: {
        emoji: '👑',
        text: '“Sou guia. Óbidos foi um presente para uma rainha!”',
        translation: '“Eu sou guia. Óbidos foi um presente para uma rainha!”',
        choices: [{ text: '“Que giro! Obrigado, minha senhora.”', translation: '“Que legal! Obrigado, senhora.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌇',
        text: 'O Linu anda na muralha até ao pôr do sol. Óbidos é linda!',
        translation: 'O Linu anda pela muralha até o pôr do sol. Óbidos é linda!',
        ending: { tone: 'bom', title: 'Uma vila de rainha', message: 'O Linu descobriu que Óbidos foi um presente de casamento e viu a vila inteira do alto da muralha.' },
      },
      final_livros: {
        emoji: '📖',
        text: 'O Linu lê os três livros num banco. E a muralha? Fica para amanhã.',
        translation: 'O Linu lê os três livros num banco. E a muralha? Fica para amanhã.',
        ending: { tone: 'neutro', title: 'Rato de biblioteca', message: 'Boa leitura, mas o Linu não conheceu a história da vila. Tente de novo!' },
      },
    },
  },

  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'pt-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Morcegos na biblioteca',
    emoji: '🦇',
    summary: 'O Linu apanha o comboio para Coimbra e descobre os guardiões noturnos da Biblioteca Joanina.',
    cultural_context:
      'A Biblioteca Joanina, da Universidade de Coimbra, é do século XVIII e toda decorada com ouro e madeira. Uma pequena colônia de morcegos vive lá dentro e, à noite, come os insetos que estragariam os livros; por isso, as mesas são cobertas todas as noites.',
    start: 'start',
    glossary: [
      ['o comboio', 'o trem'],
      ['apanhar (o comboio)', 'pegar (o trem) — sem o sentido de “levar uma surra”'],
      ['o pequeno-almoço', 'o café da manhã'],
      ['a casa de banho', 'o banheiro'],
      ['estar a subir', 'estar subindo'],
      ['o morcego', 'o morcego'],
      ['fixe', 'legal (informal)'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'O Linu está em Lisboa, na estação. Apanha o comboio para Coimbra.',
        translation: 'O Linu está em Lisboa, na estação. Pega o trem para Coimbra.',
        choices: [
          { text: 'No comboio, o Linu toma o pequeno-almoço.', translation: 'No trem, o Linu toma o café da manhã.', next: 'estudante' },
          {
            text: 'O Linu vai a pé para Coimbra.',
            translation: 'O Linu vai a pé para Coimbra.',
            wrong: '“Apanha o comboio” quer dizer “pega o trem”. Em Portugal, “apanhar” é pegar (o autocarro, o comboio, uma gripe); não tem o sentido brasileiro de levar uma surra.',
          },
        ],
      },
      estudante: {
        emoji: '🎓',
        text: 'Em Coimbra, uma estudante está a subir a rua. Usa uma capa preta.',
        translation: 'Em Coimbra, uma estudante está subindo a rua. Usa uma capa preta.',
        choices: [
          { text: '“Olá! Onde é a biblioteca?”', translation: '“Oi! Onde fica a biblioteca?”', next: 'biblioteca' },
          { text: '“Olá! Onde é a casa de banho?”', translation: '“Oi! Onde fica o banheiro?”', next: 'casa_banho' },
        ],
      },
      casa_banho: {
        emoji: '🚻',
        text: '“A casa de banho? É ali, ao lado do café.”',
        translation: '“O banheiro? É ali, do lado do café.”',
        choices: [{ text: 'O Linu agradece e vai à biblioteca.', translation: 'O Linu agradece e vai à biblioteca.', next: 'biblioteca' }],
      },
      biblioteca: {
        emoji: '📚',
        text: 'A Biblioteca Joanina tem ouro e madeira. Um guarda está a fechar as janelas.',
        translation: 'A Biblioteca Joanina tem ouro e madeira. Um guarda está fechando as janelas.',
        choices: [{ text: '“Boa tarde! O que está a fazer?”', translation: '“Boa tarde! O que o senhor está fazendo?”', next: 'morcegos' }],
      },
      morcegos: {
        emoji: '🦇',
        text: '“À noite, os morcegos comem os insetos. Eles protegem os livros!”',
        translation: '“De noite, os morcegos comem os insetos. Eles protegem os livros!”',
        choices: [
          { text: '“Que fixe! Fico lá fora para ver.”', translation: '“Que legal! Vou ficar lá fora para ver.”', next: 'final_bom' },
          { text: '“Obrigado! Agora vou jantar.”', translation: '“Obrigado! Agora vou jantar.”', next: 'final_jantar' },
          {
            text: '“Os morcegos comem os livros?”',
            translation: '“Os morcegos comem os livros?”',
            wrong: 'Ao contrário! Os morcegos “comem os insetos” e assim “protegem os livros”. São os guardiões da biblioteca.',
          },
        ],
      },
      final_bom: {
        emoji: '🌙',
        text: 'São dez da noite. O Linu está a olhar para as janelas… e os morcegos voam!',
        translation: 'São dez da noite. O Linu está olhando para as janelas… e os morcegos voam!',
        ending: { tone: 'bom', title: 'Os guardiões dos livros', message: 'O Linu viu os morcegos que protegem os livros de Coimbra há séculos. Que biblioteca!' },
      },
      final_jantar: {
        emoji: '🍲',
        text: 'O Linu janta uma sopa quente. Os morcegos? Amanhã, talvez.',
        translation: 'O Linu janta uma sopa quente. Os morcegos? Amanhã, talvez.',
        ending: { tone: 'neutro', title: 'Jantar em Coimbra', message: 'Sopa gostosa, mas o Linu não viu os morcegos da Joanina. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ovos moles e moliceiros',
    emoji: '🛶',
    summary: 'Num dia frio em Aveiro, o Linu passeia de moliceiro e prova os ovos moles.',
    cultural_context:
      'Aveiro é cortada por canais da ria, onde navegam os moliceiros, barcos coloridos que antigamente recolhiam o moliço (algas usadas como adubo) e hoje levam turistas. O doce típico da cidade são os ovos moles: creme de gema e açúcar dentro de uma casquinha de hóstia em forma de peixes e conchas.',
    start: 'start',
    glossary: [
      ['a camisola', 'a blusa de frio, o suéter (falso amigo: não é a camisola brasileira!)'],
      ['estar a chover', 'estar chovendo'],
      ['o gelado', 'o sorvete'],
      ['o sumo', 'o suco'],
      ['a montra', 'a vitrine'],
      ['o telemóvel', 'o celular'],
      ['três e meia', 'três e meia'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'O Linu está em Aveiro. Está a chover e está frio.',
        translation: 'O Linu está em Aveiro. Está chovendo e está frio.',
        choices: [
          { text: 'O Linu veste uma camisola de lã.', translation: 'O Linu veste um suéter de lã.', next: 'ria' },
          {
            text: 'O Linu compra um gelado e vai à praia.',
            translation: 'O Linu compra um sorvete e vai para a praia.',
            wrong: 'Está chovendo e está frio (“Está a chover e está frio”). Não é dia de sorvete na praia! Em Portugal, sorvete é “gelado”.',
          },
        ],
      },
      ria: {
        emoji: '⛵',
        text: 'Na ria há barcos coloridos: são os moliceiros. Um barqueiro está a chamar os turistas.',
        translation: 'Na ria tem barcos coloridos: são os moliceiros. Um barqueiro está chamando os turistas.',
        choices: [
          { text: 'O Linu fala com o barqueiro.', translation: 'O Linu fala com o barqueiro.', next: 'barco' },
          { text: 'O Linu vai à pastelaria.', translation: 'O Linu vai à confeitaria.', next: 'pastelaria' },
        ],
      },
      barco: {
        emoji: '🕞',
        text: '“O barco sai às três e meia. Agora são três e vinte.”',
        translation: '“O barco sai às três e meia. Agora são três e vinte.”',
        choices: [
          { text: '“Ótimo! Espero dez minutos.”', translation: '“Ótimo! Espero dez minutos.”', next: 'passeio' },
          {
            text: '“Uma hora? É muito tempo.”',
            translation: '“Uma hora? É muito tempo.”',
            wrong: 'O barco sai às 3h30 e agora são 3h20: faltam só dez minutos, não uma hora.',
          },
        ],
      },
      passeio: {
        emoji: '📱',
        text: 'O barco passa por baixo das pontes. O Linu tira fotografias com o telemóvel.',
        translation: 'O barco passa por baixo das pontes. O Linu tira fotos com o celular.',
        choices: [{ text: 'Depois, o Linu vai à pastelaria.', translation: 'Depois, o Linu vai à confeitaria.', next: 'pastelaria' }],
      },
      pastelaria: {
        emoji: '🐚',
        text: 'Na montra há ovos moles em forma de peixes e conchas. A senhora pergunta: “Quer um sumo também?”',
        translation: 'Na vitrine tem ovos moles em forma de peixes e conchas. A senhora pergunta: “Quer um suco também?”',
        choices: [
          { text: '“Sim, um sumo de laranja e dois ovos moles.”', translation: '“Sim, um suco de laranja e dois ovos moles.”', next: 'final_bom' },
          { text: '“Não, obrigado. Quero doze ovos moles!”', translation: '“Não, obrigado. Quero doze ovos moles!”', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍊',
        text: 'O Linu come os ovos moles ao pé da ria. Que doce!',
        translation: 'O Linu come os ovos moles perto da ria. Que doce!',
        ending: { tone: 'bom', title: 'Doce Aveiro', message: 'Passeio de moliceiro, suco e ovos moles: o Linu conheceu Aveiro pelos canais e pelo paladar.' },
      },
      final_neutro: {
        emoji: '🤢',
        text: 'O Linu come os doze ovos moles… e fica com dores de barriga!',
        translation: 'O Linu come os doze ovos moles… e fica com dor de barriga!',
        ending: { tone: 'neutro', title: 'Doce demais', message: 'Ovos moles são muito doces: um ou dois já bastam! Tente de novo.' },
      },
    },
  },
  {
    id: 'pt-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Os cavalos-marinhos da ria',
    emoji: '🐴',
    summary: 'Em Faro, o Linu sai de barco com uma bióloga para procurar cavalos-marinhos na Ria Formosa.',
    cultural_context:
      'A Ria Formosa, junto de Faro, no Algarve, é um parque natural de lagoas, canais e ilhas de areia. Ela abriga uma das maiores populações de cavalos-marinhos do mundo, que vivem escondidos entre as algas e as plantas do fundo.',
    start: 'start',
    glossary: [
      ['o autocarro / a paragem', 'o ônibus / o ponto de ônibus'],
      ['o fato de banho', 'o maiô, a sunga (roupa de banho)'],
      ['o fato', 'o terno (falso amigo: não é “fato”, acontecimento!)'],
      ['o cavalo-marinho', 'o cavalo-marinho'],
      ['castanho', 'marrom'],
      ['estar a preparar', 'estar preparando'],
      ['a fotografia', 'a foto'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'São nove horas. O Linu está na paragem do autocarro, em Faro.',
        translation: 'São nove horas. O Linu está no ponto de ônibus, em Faro.',
        choices: [
          { text: 'O Linu apanha o autocarro para o cais.', translation: 'O Linu pega o ônibus para o cais.', next: 'cais' },
          { text: 'O Linu vai primeiro à praia.', translation: 'O Linu vai primeiro para a praia.', next: 'praia' },
        ],
      },
      praia: {
        emoji: '🏖️',
        text: 'Na praia, o Linu veste o fato de banho. A água está fria!',
        translation: 'Na praia, o Linu põe a sunga. A água está fria!',
        choices: [
          { text: 'Depois, o Linu vai ao cais.', translation: 'Depois, o Linu vai ao cais.', next: 'cais' },
          {
            text: 'O Linu põe gravata para nadar.',
            translation: 'O Linu põe gravata para nadar.',
            wrong: 'Em Portugal, “fato de banho” é a roupa de banho (maiô ou sunga). Sozinho, “fato” é o terno — mas ninguém nada de terno e gravata!',
          },
        ],
      },
      cais: {
        emoji: '⚓',
        text: 'No cais, a bióloga Marta está a preparar o barco. “Bom dia! Hoje vamos ver cavalos-marinhos.”',
        translation: 'No cais, a bióloga Marta está preparando o barco. “Bom dia! Hoje vamos ver cavalos-marinhos.”',
        choices: [{ text: '“Bom dia! Vamos!”', translation: '“Bom dia! Vamos!”', next: 'ria' }],
      },
      ria: {
        emoji: '🌿',
        text: 'Na ria, a Marta mostra as algas. “Os cavalos-marinhos vivem aqui. São pequenos e castanhos.”',
        translation: 'Na ria, a Marta mostra as algas. “Os cavalos-marinhos vivem aqui. São pequenos e marrons.”',
        choices: [
          { text: 'O Linu mergulha e procura.', translation: 'O Linu mergulha e procura.', next: 'mergulho' },
          {
            text: 'O Linu procura um cavalo grande e branco.',
            translation: 'O Linu procura um cavalo grande e branco.',
            wrong: 'A Marta disse que eles são “pequenos e castanhos” (pequenos e marrons). Em Portugal, “castanho” é a cor marrom.',
          },
        ],
      },
      mergulho: {
        emoji: '🤿',
        text: 'Ali! Um cavalo-marinho está a comer no meio das algas.',
        translation: 'Ali! Um cavalo-marinho está comendo no meio das algas.',
        choices: [
          { text: 'O Linu fica quieto e olha.', translation: 'O Linu fica quieto e olha.', next: 'final_bom' },
          { text: 'O Linu quer apanhar o cavalo-marinho.', translation: 'O Linu quer pegar o cavalo-marinho.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '💙',
        text: 'O cavalo-marinho nada devagar, com a cauda nas algas. Que dia bonito!',
        translation: 'O cavalo-marinho nada devagar, com o rabo nas algas. Que dia bonito!',
        ending: { tone: 'bom', title: 'Olhar e guardar na memória', message: 'O Linu viu um cavalo-marinho de verdade na Ria Formosa, sem incomodar o bichinho.' },
      },
      final_neutro: {
        emoji: '🫧',
        text: 'A Marta diz: “Não se toca nos animais!” E o cavalo-marinho foge.',
        translation: 'A Marta diz: “Não pode tocar nos animais!” E o cavalo-marinho foge.',
        ending: { tone: 'neutro', title: 'Olhar sem tocar', message: 'Na natureza, a regra é olhar sem tocar. Tente de novo!' },
      },
    },
  },

  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'pt-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'As ondas da Nazaré',
    emoji: '🌊',
    summary: 'Na Nazaré, o Linu prova peixe seco com uma senhora de sete saias e descobre de onde vêm as ondas gigantes.',
    cultural_context:
      'Na Praia do Norte, na Nazaré, formam-se algumas das maiores ondas já surfadas no mundo. Elas nascem de um cânion submarino, o “canhão da Nazaré”, um vale profundo no fundo do mar que concentra a energia das ondas perto da costa. Na vila, algumas senhoras ainda vestem as tradicionais sete saias e secam peixe ao sol na praia.',
    start: 'start',
    glossary: [
      ['pergunta-lhe', 'pergunta para ele / lhe pergunta'],
      ['Dê-me… / Dá-me…', 'Me dê… / Me dá… (formal / informal)'],
      ['dá-lho (lhe + o)', 'dá para ele'],
      ['vendo-o', 'vendo ele / eu o vendo'],
      ['Explica-me!', 'Me explica!'],
      ['empresto-te', 'eu te empresto'],
      ['o canhão (da Nazaré)', 'o cânion submarino'],
      ['a prancha', 'a prancha (de surfe)'],
    ],
    nodes: {
      start: {
        emoji: '🐟',
        text: 'O Linu chega à Nazaré de manhã. Na praia, uma senhora de sete saias seca peixe ao sol. “Olá, menino! Queres provar?”, pergunta-lhe ela.',
        translation: 'O Linu chega à Nazaré de manhã. Na praia, uma senhora de sete saias seca peixe ao sol. “Oi, menino! Quer provar?”, ela pergunta para ele.',
        choices: [
          { text: '“Quero, sim! Dê-me um bocadinho, por favor.”', translation: '“Quero, sim! Me dê um pedacinho, por favor.”', next: 'peixe' },
          { text: '“Obrigado, mas quero ver as ondas.”', translation: '“Obrigado, mas quero ver as ondas.”', next: 'forte' },
        ],
      },
      peixe: {
        emoji: '🧺',
        text: 'A senhora dá-lho num papel. “É carapau seco. Gostas?”',
        translation: 'A senhora dá o peixe para ele num papel. “É carapau seco. Você gosta?”',
        choices: [
          { text: '“Gosto muito! A senhora vende-o todos os dias?”', translation: '“Gosto muito! A senhora vende isso todo dia?”', next: 'saias' },
        ],
      },
      saias: {
        emoji: '👗',
        text: '“Vendo-o, sim. E sabes porque é que uso sete saias? Há muitas histórias: os sete dias da semana, as sete ondas…”',
        translation: '“Vendo, sim. E você sabe por que eu uso sete saias? Tem muitas histórias: os sete dias da semana, as sete ondas…”',
        choices: [{ text: '“Que giro! Agora vou ao forte ver as ondas.”', translation: '“Que legal! Agora vou ao forte ver as ondas.”', next: 'forte' }],
      },
      forte: {
        emoji: '🏰',
        text: 'Do forte, o Linu vê a Praia do Norte. As ondas são enormes! Um rapaz com uma prancha diz-lhe: “Estas ondas vêm do canhão da Nazaré, um vale enorme debaixo do mar.”',
        translation: 'Do forte, o Linu vê a Praia do Norte. As ondas são enormes! Um rapaz com uma prancha diz para ele: “Essas ondas vêm do cânion da Nazaré, um vale enorme debaixo do mar.”',
        choices: [
          { text: '“Um vale no mar? Explica-me melhor!”', translation: '“Um vale no mar? Me explica melhor!”', next: 'canhao' },
          {
            text: '“Há um canhão de guerra no mar? Que medo!”',
            translation: '“Tem um canhão de guerra no mar? Que medo!”',
            wrong: 'O rapaz explicou: o “canhão da Nazaré” é “um vale enorme debaixo do mar” — um cânion submarino, não uma arma!',
          },
        ],
      },
      canhao: {
        emoji: '🏄',
        text: '“O vale é muito fundo e aponta para esta praia. As ondas passam por lá e ficam gigantes. Queres experimentar? Empresto-te uma prancha.”',
        translation: '“O vale é muito fundo e aponta para esta praia. As ondas passam por ali e ficam gigantes. Quer experimentar? Eu te empresto uma prancha.”',
        choices: [
          { text: '“Obrigado, mas hoje não. Prefiro ver-te daqui!”', translation: '“Obrigado, mas hoje não. Prefiro te ver daqui!”', next: 'final_bom' },
          { text: '“Sim! Dá-ma!”', translation: '“Sim! Me dá!”', next: 'final_agua' },
          {
            text: '“Não, eu não te empresto nada!”',
            translation: '“Não, eu não te empresto nada!”',
            wrong: 'Quem vai emprestar é o rapaz: “Empresto-te uma prancha” = “Eu te empresto uma prancha”. O “te” é você, o Linu. Em Portugal, o pronome vem depois do verbo, com hífen.',
          },
        ],
      },
      final_bom: {
        emoji: '⛰️',
        text: 'O Linu fica no forte a tarde toda. Cada onda parece uma montanha, e o rapaz acena-lhe lá de baixo.',
        translation: 'O Linu fica no forte a tarde toda. Cada onda parece uma montanha, e o rapaz acena para ele lá de baixo.',
        ending: { tone: 'bom', title: 'Montanhas de água', message: 'O Linu entendeu de onde vêm as ondas gigantes da Nazaré e assistiu a tudo em segurança.' },
      },
      final_agua: {
        emoji: '💦',
        text: 'O Linu entra na água… e uma onda pequena atira-o logo para a areia! O rapaz ri-se: “Amanhã tentamos outra vez.”',
        translation: 'O Linu entra na água… e uma onda pequena já joga ele na areia! O rapaz ri: “Amanhã a gente tenta de novo.”',
        ending: { tone: 'neutro', title: 'Caldo de onda', message: 'Na Nazaré, até as ondas pequenas são fortes! O Linu ganhou um amigo, mas levou um caldo.' },
      },
    },
  },
  {
    id: 'pt-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'O elevador que anda a água',
    emoji: '🚡',
    summary: 'No Bom Jesus, em Braga, o Linu e a Sofia descobrem um elevador que funciona só com o peso da água.',
    cultural_context:
      'O santuário do Bom Jesus do Monte, em Braga, tem uma enorme escadaria barroca e é Patrimônio Mundial da UNESCO desde 2019. Ao lado, o elevador do Bom Jesus, de 1882, funciona com contrapeso de água: enche-se de água o tanque da cabine de cima, que fica mais pesada, desce e puxa a outra para cima. É considerado o mais antigo do mundo desse tipo ainda em funcionamento.',
    start: 'start',
    glossary: [
      ['pergunta-lhe / diz-lhe', 'pergunta para ele / diz para ele'],
      ['Mostra-mo! (me + o)', 'Me mostra (ele)!'],
      ['Não te apetece…?', 'Você não está com vontade de…? (próclise depois de “não”)'],
      ['apanhá-lo', 'pegar ele'],
      ['esvaziamo-la', 'a gente esvazia ela'],
      ['Mando-ta? (te + a)', 'Te mando (ela)?'],
      ['a cabina', 'a cabine'],
      ['a escadaria / o degrau', 'a escadaria / o degrau'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'O Linu está em Braga, ao pé do santuário do Bom Jesus. Há uma escadaria enorme e um pequeno elevador. A amiga Sofia pergunta-lhe: “Sobes a pé ou de elevador?”',
        translation: 'O Linu está em Braga, perto do santuário do Bom Jesus. Tem uma escadaria enorme e um elevador pequeno. A amiga Sofia pergunta para ele: “Você sobe a pé ou de elevador?”',
        choices: [
          { text: '“De elevador! Mostra-mo, por favor.”', translation: '“De elevador! Me mostra, por favor.”', next: 'elevador' },
          { text: '“A pé! Preciso de exercício.”', translation: '“A pé! Preciso fazer exercício.”', next: 'escadas' },
        ],
      },
      escadas: {
        emoji: '🪜',
        text: 'O Linu sobe os degraus. Em cada patamar há uma fonte. A meio, está cansadíssimo, e a Sofia pergunta-lhe: “Não te apetece mais o elevador?”',
        translation: 'O Linu sobe os degraus. Em cada patamar tem uma fonte. No meio do caminho, está cansadíssimo, e a Sofia pergunta para ele: “Agora você não prefere o elevador?”',
        choices: [
          { text: 'O Linu respira fundo e continua até ao topo.', translation: 'O Linu respira fundo e continua até o topo.', next: 'topo' },
          { text: '“Apetece! Vamos descer e apanhá-lo.”', translation: '“Prefiro! Vamos descer e pegar ele.”', next: 'elevador' },
        ],
      },
      elevador: {
        emoji: '💧',
        text: 'O elevador tem duas cabinas. O guarda explica: “Enchemos de água a cabina de cima. Ela fica pesada, desce e puxa a outra para cima.”',
        translation: 'O elevador tem duas cabines. O guarda explica: “A gente enche de água a cabine de cima. Ela fica pesada, desce e puxa a outra para cima.”',
        choices: [
          { text: '“Que engenhoso! E lá em baixo, o que fazem à água?”', translation: '“Que engenhoso! E lá embaixo, o que vocês fazem com a água?”', next: 'agua' },
          {
            text: '“Então funciona com eletricidade, não é?”',
            translation: '“Então funciona com eletricidade, né?”',
            wrong: 'Nada de eletricidade! O guarda explicou que a cabine de cima se enche de água (“Enchemos de água a cabina de cima”), fica pesada e desce, puxando a outra.',
          },
        ],
      },
      agua: {
        emoji: '⚙️',
        text: '“Lá em baixo, esvaziamo-la, e a outra cabina recebe água no topo. Este elevador funciona assim desde 1882!”',
        translation: '“Lá embaixo, a gente esvazia ela, e a outra cabine recebe água lá em cima. Esse elevador funciona assim desde 1882!”',
        choices: [{ text: 'O Linu e a Sofia entram na cabina.', translation: 'O Linu e a Sofia entram na cabine.', next: 'subida' }],
      },
      subida: {
        emoji: '📸',
        text: 'A cabina sobe devagar entre as árvores. A Sofia diz: “Tirei-te uma fotografia tão gira! Mando-ta pelo telemóvel?”',
        translation: 'A cabine sobe devagar entre as árvores. A Sofia diz: “Tirei uma foto tão bonita de você! Te mando pelo celular?”',
        choices: [
          { text: '“Manda-ma, sim! Obrigado.”', translation: '“Manda, sim! Obrigado.”', next: 'topo' },
          {
            text: '“Tiraste uma fotografia ao elevador? Mostra.”',
            translation: '“Você tirou uma foto do elevador? Mostra.”',
            wrong: 'A Sofia tirou uma foto de você: “Tirei-te uma fotografia” = “Tirei uma foto de você”. O “te” é o Linu, e “ta” (te + a) quer dizer “ela, para você”.',
          },
        ],
      },
      topo: {
        emoji: '🏞️',
        text: 'Lá em cima, vê-se Braga inteira. A Sofia aponta para a escadaria: “Descemos a pé ou apanhamos outra vez o elevador?”',
        translation: 'Lá em cima, dá para ver Braga inteira. A Sofia aponta para a escadaria: “A gente desce a pé ou pega o elevador de novo?”',
        choices: [
          { text: '“A pé! A descer é fácil.”', translation: '“A pé! Descendo é fácil.”', next: 'final_bom' },
          { text: '“O elevador, claro! Já o adoro.”', translation: '“O elevador, claro! Já adoro ele.”', next: 'final_elevador' },
        ],
      },
      final_bom: {
        emoji: '⛲',
        text: 'Os dois descem os degraus a conversar e a rir. Em cada fonte, o Linu molha as barbatanas.',
        translation: 'Os dois descem os degraus conversando e rindo. Em cada fonte, o Linu molha as nadadeiras.',
        ending: { tone: 'bom', title: 'Subir com água, descer a pé', message: 'O Linu entendeu a física do elevador do Bom Jesus e ainda desceu a escadaria com a amiga.' },
      },
      final_elevador: {
        emoji: '🔁',
        text: 'O Linu desce e sobe de elevador três vezes. O guarda já o conhece e cumprimenta-o: “Outra vez, pinguim?”',
        translation: 'O Linu desce e sobe de elevador três vezes. O guarda já conhece ele e cumprimenta: “De novo, pinguim?”',
        ending: { tone: 'neutro', title: 'Fã do elevador', message: 'Três viagens no elevador de água! Divertido, mas a Sofia ficou esperando lá embaixo.' },
      },
    },
  },
  {
    id: 'pt-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'O guarda-redes de Guimarães',
    emoji: '⚽',
    summary: 'Em Guimarães, uma bola perdida transforma o Linu no guarda-redes de três miúdos.',
    cultural_context:
      'Guimarães é chamada de “berço da nação”: a tradição diz que ali nasceu D. Afonso Henriques, o primeiro rei de Portugal, e numa torre da antiga muralha está escrito “Aqui nasceu Portugal”. No futebol de Portugal, goleiro é “guarda-redes”, gol é “golo” e a trave com a rede é a “baliza”.',
    start: 'start',
    glossary: [
      ['devolve-a', 'devolve ela / a devolve'],
      ['connosco', 'com a gente, conosco'],
      ['o guarda-redes', 'o goleiro'],
      ['a baliza / o golo', 'o gol (a trave) / o gol (o ponto)'],
      ['Ensinam-me?', 'Vocês me ensinam?'],
      ['agarra-a', 'segura ela'],
      ['mostrar-te', 'te mostrar'],
      ['Mostrem-mo!', 'Me mostrem!'],
    ],
    nodes: {
      start: {
        emoji: '🏯',
        text: 'No centro de Guimarães, numa torre antiga, está escrito “Aqui nasceu Portugal”. O Linu fotografa-a. De repente, uma bola de futebol cai-lhe aos pés.',
        translation: 'No centro de Guimarães, numa torre antiga, está escrito “Aqui nasceu Portugal”. O Linu tira uma foto dela. De repente, uma bola de futebol cai nos pés dele.',
        choices: [{ text: 'O Linu apanha a bola e devolve-a.', translation: 'O Linu pega a bola e devolve.', next: 'miudos' }],
      },
      miudos: {
        emoji: '👦',
        text: 'Três miúdos correm para ele. “Obrigado! Queres jogar connosco? Falta-nos um guarda-redes.”',
        translation: 'Três meninos correm até ele. “Valeu! Quer jogar com a gente? Está faltando um goleiro.”',
        choices: [
          { text: '“Quero! Onde é a baliza?”', translation: '“Quero! Onde é o gol?”', next: 'jogo' },
          { text: '“Não sei jogar… Ensinam-me?”', translation: '“Não sei jogar… Vocês me ensinam?”', next: 'ensinar' },
          {
            text: '“Vou marcar muitos golos lá à frente!”',
            translation: '“Vou fazer muitos gols lá na frente!”',
            wrong: 'Os meninos precisam de um “guarda-redes”: o goleiro! Ele fica na baliza (o gol) e defende; não vai lá na frente marcar gols.',
          },
        ],
      },
      ensinar: {
        emoji: '🧤',
        text: 'O Duarte, o mais pequeno, explica-lhe: “É fácil. Ficas aqui e não deixas a bola entrar. Quando ela vem, agarra-a!”',
        translation: 'O Duarte, o menorzinho, explica para ele: “É fácil. Você fica aqui e não deixa a bola entrar. Quando ela vier, segura!”',
        choices: [{ text: '“Percebi! Vamos a isso.”', translation: '“Entendi! Vamos lá.”', next: 'jogo' }],
      },
      jogo: {
        emoji: '🥅',
        text: 'O jogo começa no largo. O Duarte chuta com força… e o Linu defende com a barriga! Os miúdos gritam: “Grande defesa!”',
        translation: 'O jogo começa na praça. O Duarte chuta com força… e o Linu defende com a barriga! Os meninos gritam: “Que defesa!”',
        choices: [{ text: 'O Linu devolve-lhes a bola, a rir.', translation: 'O Linu devolve a bola para eles, rindo.', next: 'castelo' }],
      },
      castelo: {
        emoji: '🏰',
        text: '“Agora vamos mostrar-te o castelo”, diz o Duarte. “Dizem que D. Afonso Henriques, o primeiro rei, nasceu aqui.”',
        translation: '“Agora a gente vai te mostrar o castelo”, diz o Duarte. “Dizem que D. Afonso Henriques, o primeiro rei, nasceu aqui.”',
        choices: [
          { text: '“Mostrem-mo! Vamos!”', translation: '“Me mostrem! Vamos!”', next: 'final_bom' },
          { text: '“Hoje não posso. Encontro-vos aqui amanhã?”', translation: '“Hoje não posso. Encontro vocês aqui amanhã?”', next: 'final_amanha' },
          {
            text: '“Tu nasceste no castelo, Duarte?”',
            translation: '“Você nasceu no castelo, Duarte?”',
            wrong: 'Quem nasceu lá, segundo a tradição, foi D. Afonso Henriques, o primeiro rei de Portugal — não o menino! “Dizem que D. Afonso Henriques […] nasceu aqui.”',
          },
        ],
      },
      final_bom: {
        emoji: '👑',
        text: 'No castelo, os miúdos contam-lhe histórias de reis e de golos. O Linu tem três amigos novos em Guimarães.',
        translation: 'No castelo, os meninos contam para ele histórias de reis e de gols. O Linu tem três amigos novos em Guimarães.',
        ending: { tone: 'bom', title: 'Onde nasceu Portugal', message: 'Uma bola perdida, uma defesa de barriga e três amigos: o Linu conheceu o berço de Portugal com os melhores guias.' },
      },
      final_amanha: {
        emoji: '🌤️',
        text: 'No dia seguinte, os miúdos estão à espera dele no largo, com a bola. “Chegou o nosso guarda-redes!”',
        translation: 'No dia seguinte, os meninos estão esperando ele na praça, com a bola. “Chegou o nosso goleiro!”',
        ending: { tone: 'bom', title: 'Goleiro oficial', message: 'O castelo ficou para depois, mas o Linu virou o goleiro oficial do largo.' },
      },
    },
  },

  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'pt-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'O cante de Évora',
    emoji: '🎤',
    summary: 'Em Évora, o Linu segue vozes sem instrumentos até descobrir o cante alentejano.',
    cultural_context:
      'O cante alentejano é um canto em coro, sem instrumentos, que os trabalhadores do campo do Alentejo cantavam; foi reconhecido como Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2014. O centro histórico de Évora, com seu templo romano, é Patrimônio Mundial desde 1986. Um prato típico da região é a açorda alentejana: sopa de pão, alho, coentro e ovo.',
    start: 'start',
    glossary: [
      ['Queria…', 'Eu queria… (pedido educado)'],
      ['se faz favor', 'por favor'],
      ['o empregado (de mesa)', 'o garçom'],
      ['O senhor já a provou?', 'O senhor já provou?'],
      ['tenho ouvido', 'tenho ouvido (ultimamente, várias vezes)'],
      ['os coentros', 'o coentro'],
      ['o ovo escalfado', 'o ovo pochê'],
      ['connosco', 'com a gente, conosco'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Évora, ao fim da tarde. O Linu passeia ao pé do Templo Romano e ouve vozes de homens a cantar, sem instrumentos.',
        translation: 'Évora, no fim da tarde. O Linu passeia perto do Templo Romano e ouve vozes de homens cantando, sem instrumentos.',
        choices: [
          { text: 'O Linu segue as vozes.', translation: 'O Linu segue as vozes.', next: 'taberna' },
          { text: 'O Linu tem fome e entra num restaurante.', translation: 'O Linu está com fome e entra num restaurante.', next: 'restaurante' },
        ],
      },
      restaurante: {
        emoji: '🍽️',
        text: 'O empregado aproxima-se da mesa. “Boa noite. O que é que o senhor deseja?”',
        translation: 'O garçom se aproxima da mesa. “Boa noite. O que o senhor deseja?”',
        choices: [{ text: '“Boa noite. Queria uma açorda alentejana, se faz favor.”', translation: '“Boa noite. Eu queria uma açorda alentejana, por favor.”', next: 'acorda' }],
      },
      acorda: {
        emoji: '🥣',
        text: '“É uma sopa de pão, alho, coentros e ovo escalfado. O senhor já a provou?”',
        translation: '“É uma sopa de pão, alho, coentro e ovo pochê. O senhor já provou?”',
        choices: [{ text: '“Nunca a provei, mas tenho ouvido falar muito dela!”', translation: '“Nunca provei, mas tenho ouvido falar muito dela!”', next: 'jantar' }],
      },
      jantar: {
        emoji: '🎶',
        text: 'A açorda chega a fumegar. Na mesa ao lado, um grupo de homens levanta-se e começa a cantar devagar.',
        translation: 'A açorda chega fumegando. Na mesa do lado, um grupo de homens se levanta e começa a cantar devagar.',
        choices: [{ text: 'O Linu pergunta ao senhor mais velho o que é.', translation: 'O Linu pergunta ao senhor mais velho o que é aquilo.', next: 'cante' }],
      },
      taberna: {
        emoji: '🍷',
        text: 'As vozes vêm de uma taberna. Lá dentro, oito homens cantam lado a lado. O mais velho, o senhor Joaquim, cumprimenta o Linu com a cabeça.',
        translation: 'As vozes vêm de uma taverna. Lá dentro, oito homens cantam lado a lado. O mais velho, o seu Joaquim, cumprimenta o Linu com a cabeça.',
        choices: [{ text: '“Boa noite. O que é que os senhores estão a cantar?”', translation: '“Boa noite. O que vocês estão cantando?”', next: 'cante' }],
      },
      cante: {
        emoji: '🌾',
        text: '“É cante alentejano. Os nossos avós cantavam-no nos campos, a trabalhar. Em 2014, a UNESCO reconheceu-o como património da humanidade.”',
        translation: '“É o cante alentejano. Nossos avós cantavam ele nos campos, trabalhando. Em 2014, a UNESCO o reconheceu como patrimônio da humanidade.”',
        choices: [
          { text: '“Que bonito! Tenho ouvido fado em Lisboa, mas isto é diferente.”', translation: '“Que lindo! Tenho ouvido fado em Lisboa, mas isso é diferente.”', next: 'convite' },
          {
            text: '“Então o cante começou em 2014?”',
            translation: '“Então o cante começou em 2014?”',
            wrong: 'Não! Os avós já cantavam o cante nos campos (“cantavam-no nos campos”); em 2014 a UNESCO só o reconheceu como patrimônio. O cante é muito mais antigo.',
          },
        ],
      },
      convite: {
        emoji: '🤝',
        text: 'O senhor Joaquim sorri: “O senhor quer cantar connosco? Só tem de repetir o último verso.”',
        translation: 'O seu Joaquim sorri: “O senhor quer cantar com a gente? Só tem que repetir o último verso.”',
        choices: [
          { text: '“Queria muito! Mas não sei a letra…”', translation: '“Eu queria muito! Mas não sei a letra…”', next: 'final_bom' },
          { text: '“Obrigado, mas prefiro ouvir.”', translation: '“Obrigado, mas prefiro ouvir.”', next: 'final_ouvir' },
          {
            text: '“Quem? O senhor ali da porta?”',
            translation: '“Quem? Aquele senhor da porta?”',
            wrong: 'O senhor Joaquim estava falando com você! Em Portugal, “O senhor quer…?” é a forma educada de dizer “você quer…?”, dirigida à própria pessoa com quem se fala.',
          },
        ],
      },
      final_bom: {
        emoji: '🎵',
        text: '“Não faz mal, ensinamos-lha!” O Linu repete o último verso, um pouco desafinado, e os homens batem-lhe nas costas: “Já é alentejano!”',
        translation: '“Não tem problema, a gente ensina para o senhor!” O Linu repete o último verso, meio desafinado, e os homens dão tapinhas nas costas dele: “Já é alentejano!”',
        ending: { tone: 'bom', title: 'Uma voz no coro', message: 'O Linu cantou com um grupo de cante alentejano. Ninguém esquece a primeira vez!' },
      },
      final_ouvir: {
        emoji: '🌙',
        text: 'O Linu fica sentado a ouvir até à meia-noite. Nunca tinha ouvido vozes assim.',
        translation: 'O Linu fica sentado ouvindo até meia-noite. Nunca tinha ouvido vozes assim.',
        ending: { tone: 'neutro', title: 'Só ouvidos', message: 'Uma noite linda de cante, mas o Linu não se arriscou a cantar. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Travesseiros no nevoeiro',
    emoji: '🌫️',
    summary: 'Em Sintra, o Linu reencontra a Beatriz, prova os doces da vila e decide se sobe à Pena no nevoeiro.',
    cultural_context:
      'Sintra é famosa pelo nevoeiro da serra, pelos palácios românticos e pelos doces: os travesseiros (massa folhada com creme de amêndoa e ovo) e as queijadas (tortinhas de queijo fresco). O Palácio da Pena, amarelo e vermelho, foi construído no século XIX por ordem do rei D. Fernando II, e a Paisagem Cultural de Sintra é Patrimônio Mundial desde 1995.',
    start: 'start',
    glossary: [
      ['o nevoeiro', 'a neblina, a cerração'],
      ['O que tens feito?', 'O que você tem feito?'],
      ['tenho trabalhado', 'tenho trabalhado (ultimamente, sem parar)'],
      ['cheguei ontem', 'cheguei ontem'],
      ['Queria…, se faz favor.', 'Eu queria…, por favor.'],
      ['A menina já os provou?', 'A moça já provou? (formal, na 3ª pessoa)'],
      ['a dentada', 'a mordida'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: 'Sintra está coberta de nevoeiro. Numa rua estreita, o Linu encontra a Beatriz, uma amiga de Lisboa.',
        translation: 'Sintra está coberta de neblina. Numa rua estreita, o Linu encontra a Beatriz, uma amiga de Lisboa.',
        choices: [{ text: '“Beatriz! Há tanto tempo! O que tens feito?”', translation: '“Beatriz! Quanto tempo! O que você tem feito?”', next: 'beatriz' }],
      },
      beatriz: {
        emoji: '👩',
        text: '“Tenho trabalhado muito, mas este mês tenho vindo a Sintra todos os fins de semana. E tu? Quando chegaste?”',
        translation: '“Tenho trabalhado muito, mas neste mês tenho vindo a Sintra todo fim de semana. E você? Quando chegou?”',
        choices: [
          { text: '“Cheguei ontem à noite, de comboio.”', translation: '“Cheguei ontem à noite, de trem.”', next: 'pastelaria' },
          {
            text: '“Tenho chegado ontem.”',
            translation: '“Tenho chegado ontem.”',
            wrong: 'A chegada aconteceu uma vez só, ontem: use o pretérito perfeito, “Cheguei ontem”. Em Portugal (como no Brasil), “tenho chegado” indica algo que se repete até agora, e não combina com “ontem”.',
          },
        ],
      },
      pastelaria: {
        emoji: '🥐',
        text: 'A Beatriz leva-o a uma pastelaria antiga. Ao balcão, há travesseiros e queijadas ainda quentes.',
        translation: 'A Beatriz leva ele a uma confeitaria antiga. No balcão, tem travesseiros e queijadas ainda quentes.',
        choices: [
          { text: '“Bom dia. Queria dois travesseiros, se faz favor.”', translation: '“Bom dia. Eu queria dois travesseiros, por favor.”', next: 'travesseiros' },
          { text: '“Bom dia. Queria uma queijada e uma bica.”', translation: '“Bom dia. Eu queria uma queijada e um cafezinho.”', next: 'queijada' },
        ],
      },
      travesseiros: {
        emoji: '🥮',
        text: '“São de massa folhada com creme de amêndoa e ovo”, explica a senhora. Depois, vira-se para a Beatriz: “A menina já os provou?”',
        translation: '“São de massa folhada com creme de amêndoa e ovo”, explica a senhora. Depois, ela se vira para a Beatriz: “A moça já provou?”',
        choices: [
          { text: 'A Beatriz responde: “Já os provei muitas vezes!”', translation: 'A Beatriz responde: “Já provei muitas vezes!”', next: 'pena' },
          {
            text: '“Não, a menina não sou eu. Eu sou o Linu.”',
            translation: '“Não, a moça não sou eu. Eu sou o Linu.”',
            wrong: 'A senhora perguntou à Beatriz, não ao Linu: “vira-se para a Beatriz”. Em Portugal, “a menina” é um jeito educado de tratar uma moça, na 3ª pessoa.',
          },
        ],
      },
      queijada: {
        emoji: '🧀',
        text: '“A queijada é de queijo fresco, açúcar e canela”, diz a senhora. O Linu come-a em duas dentadas.',
        translation: '“A queijada é de queijo fresco, açúcar e canela”, diz a senhora. O Linu come em duas mordidas.',
        choices: [{ text: '“Que delícia! Nunca comi nada assim.”', translation: '“Que delícia! Nunca comi nada igual.”', next: 'pena' }],
      },
      pena: {
        emoji: '🏰',
        text: '“Vamos à Pena?”, pergunta a Beatriz. “Com este nevoeiro, se calhar não se vê nada lá de cima.”',
        translation: '“Vamos na Pena?”, pergunta a Beatriz. “Com essa neblina, talvez não dê para ver nada lá de cima.”',
        choices: [
          { text: '“Não faz mal. Quero ver o palácio!”', translation: '“Não tem problema. Quero ver o palácio!”', next: 'final_pena' },
          { text: '“Então fico aqui e peço mais seis travesseiros.”', translation: '“Então eu fico aqui e peço mais seis travesseiros.”', next: 'final_doce' },
        ],
      },
      final_pena: {
        emoji: '🌈',
        text: 'No alto da serra, o nevoeiro abre de repente. O palácio aparece, amarelo e vermelho, como num sonho.',
        translation: 'No alto da serra, a neblina abre de repente. O palácio aparece, amarelo e vermelho, como num sonho.',
        ending: { tone: 'bom', title: 'O palácio entre as nuvens', message: 'Reencontro, doces de Sintra e o Palácio da Pena saindo da neblina. Dia perfeito!' },
      },
      final_doce: {
        emoji: '📦',
        text: 'O Linu leva uma caixa de travesseiros para Lisboa. A Pena fica para a próxima!',
        translation: 'O Linu leva uma caixa de travesseiros para Lisboa. A Pena fica para a próxima!',
        ending: { tone: 'neutro', title: 'Sintra de barriga cheia', message: 'Muitos doces, mas nenhum palácio. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'A Festa dos Tabuleiros',
    emoji: '🍞',
    summary: 'Em Tomar, o Linu assiste ao cortejo dos tabuleiros ao lado de uma senhora que já levou um.',
    cultural_context:
      'A Festa dos Tabuleiros acontece em Tomar de quatro em quatro anos, no começo do verão. No cortejo, moças levam na cabeça tabuleiros de pães e flores de papel, mais ou menos da altura delas, com uma coroa e uma pomba no topo, acompanhadas por um rapaz. Na cidade fica também o Convento de Cristo, dos Templários, Patrimônio Mundial desde 1983.',
    start: 'start',
    glossary: [
      ['a rapariga', 'a moça (em Portugal, sem nenhum sentido ofensivo)'],
      ['o tabuleiro', 'a bandeja (aqui, a torre de pães da festa)'],
      ['Os senhores já visitaram…?', 'Vocês já visitaram…? (formal)'],
      ['tenho visto', 'tenho visto (várias vezes, até hoje)'],
      ['levei', 'carreguei (pretérito perfeito)'],
      ['à cabeça', 'na cabeça'],
      ['manda-lha (lhe + a)', 'manda para ela'],
    ],
    nodes: {
      start: {
        emoji: '🌸',
        text: 'É verão e Tomar está cheia de flores de papel. Hoje há o cortejo da Festa dos Tabuleiros, que só se faz de quatro em quatro anos.',
        translation: 'É verão e Tomar está cheia de flores de papel. Hoje tem o cortejo da Festa dos Tabuleiros, que só acontece a cada quatro anos.',
        choices: [
          { text: 'O Linu procura um lugar na rua.', translation: 'O Linu procura um lugar na rua.', next: 'rua' },
          { text: 'O Linu sobe primeiro ao Convento de Cristo.', translation: 'O Linu sobe primeiro ao Convento de Cristo.', next: 'convento' },
        ],
      },
      convento: {
        emoji: '⛪',
        text: 'No convento dos Templários, um guia fala para o grupo: “Os senhores já visitaram a Charola? É a igreja redonda dos cavaleiros.”',
        translation: 'No convento dos Templários, um guia fala para o grupo: “Vocês já visitaram a Charola? É a igreja redonda dos cavaleiros.”',
        choices: [
          { text: '“Ainda não, mas o cortejo vai começar! Volto depois.”', translation: '“Ainda não, mas o cortejo vai começar! Volto depois.”', next: 'rua' },
          {
            text: '“Os senhores? Mas eu estou sozinho… Onde estão eles?”',
            translation: '“Os senhores? Mas eu estou sozinho… Cadê eles?”',
            wrong: 'O guia está falando com o grupo inteiro, Linu incluído! Em Portugal, “os senhores” é a forma educada de dizer “vocês”.',
          },
        ],
      },
      rua: {
        emoji: '👵',
        text: 'Na rua, uma senhora idosa dá-lhe um lugar à sombra. “Tenho visto esta festa desde pequena”, conta ela. “Nunca falhei nenhuma!”',
        translation: 'Na rua, uma senhora idosa dá um lugar na sombra para ele. “Venho vendo essa festa desde pequena”, ela conta. “Nunca perdi nenhuma!”',
        choices: [{ text: '“E a senhora já levou um tabuleiro?”', translation: '“E a senhora já carregou um tabuleiro?”', next: 'senhora' }],
      },
      senhora: {
        emoji: '💐',
        text: '“Levei, sim! Há muitos anos, quando era rapariga. Pesava muito, mas fui a sorrir o caminho todo.”',
        translation: '“Carreguei, sim! Há muitos anos, quando eu era moça. Pesava muito, mas fui sorrindo o caminho todo.”',
        choices: [
          { text: '“Que honra! A senhora deve ter ficado linda.”', translation: '“Que honra! A senhora deve ter ficado linda.”', next: 'cortejo' },
          {
            text: '“Que feio! Porque diz isso de si mesma?”',
            translation: '“Que feio! Por que a senhora fala isso de si mesma?”',
            wrong: 'Em Portugal, “rapariga” quer dizer simplesmente “moça”, sem nenhum sentido ofensivo. A senhora só contou que carregou o tabuleiro quando era moça.',
          },
        ],
      },
      cortejo: {
        emoji: '👑',
        text: 'Começa o cortejo. Cada rapariga leva à cabeça um tabuleiro de pães e flores, quase tão alto como ela, com uma pomba no topo. Ao lado, um rapaz ajuda-a.',
        translation: 'Começa o cortejo. Cada moça carrega na cabeça um tabuleiro de pães e flores, quase tão alto quanto ela, com uma pomba no topo. Do lado, um rapaz ajuda ela.',
        choices: [
          { text: 'O Linu tira uma fotografia à senhora com o cortejo atrás.', translation: 'O Linu tira uma foto da senhora com o cortejo atrás.', next: 'final_bom' },
          { text: 'O Linu despede-se e segue o cortejo.', translation: 'O Linu se despede e segue o cortejo.', next: 'final_perdido' },
        ],
      },
      final_bom: {
        emoji: '📷',
        text: 'A senhora pede-lhe: “O senhor manda-me essa fotografia?” Nessa noite, o Linu manda-lha, com um grande obrigado.',
        translation: 'A senhora pede para ele: “O senhor me manda essa foto?” Nessa noite, o Linu manda a foto para ela, com um grande obrigado.',
        ending: { tone: 'bom', title: 'Uma foto para a senhora', message: 'O Linu viu o cortejo dos tabuleiros ao lado de quem já levou um. Uma lembrança para os dois!' },
      },
      final_perdido: {
        emoji: '🗺️',
        text: 'O Linu segue o cortejo pelas ruas floridas… e perde-se. Só encontra o hotel à noite!',
        translation: 'O Linu segue o cortejo pelas ruas floridas… e se perde. Só encontra o hotel à noite!',
        ending: { tone: 'neutro', title: 'Perdido nas flores', message: 'Um cortejo lindo, mas o Linu se perdeu em Tomar. Tente de novo!' },
      },
    },
  },

  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'pt-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'A sopa da vida',
    emoji: '🔬',
    summary: 'Em Cascais, o Linu acompanha uma investigadora que recolhe plâncton perto da Boca do Inferno.',
    cultural_context:
      'A Boca do Inferno, em Cascais, é uma formação de rochas à beira-mar criada pelo desabamento do teto de uma gruta: em dias de tempestade, as ondas entram com força e fazem um barulho enorme. O plâncton marinho inclui algas microscópicas que produzem uma grande parte do oxigênio do planeta.',
    start: 'start',
    glossary: [
      ['encontrar-nos-emos', 'nós nos encontraremos, a gente vai se encontrar'],
      ['levar-lhe-ei', 'eu lhe levarei, vou levar para você'],
      ['ficaríamos', 'ficaríamos, a gente ficaria'],
      ['contar-lhe-ei', 'eu lhe contarei, vou te contar'],
      ['chamar-lhes-ia', 'eu os chamaria'],
      ['analisá-las-emos', 'nós as analisaremos, a gente vai analisar'],
      ['à porta / às oito', 'na porta / às oito (crase)'],
      ['a investigadora', 'a pesquisadora'],
    ],
    nodes: {
      start: {
        emoji: '📩',
        text: 'Cascais, sete da manhã. O Linu recebe uma mensagem da investigadora Leonor: “Encontrar-nos-emos às oito, à porta da marina. Levar-lhe-ei um colete e umas botas.” O Linu ri-se: nunca tinha visto uma mesóclise tão cedo!',
        translation: 'Cascais, sete da manhã. O Linu recebe uma mensagem da pesquisadora Leonor: “Vamos nos encontrar às oito, na porta da marina. Vou levar um colete e umas botas para você.” O Linu ri: nunca tinha visto uma mesóclise tão cedo!',
        choices: [
          { text: 'O Linu toma o pequeno-almoço e vai à marina às oito.', translation: 'O Linu toma café da manhã e vai à marina às oito.', next: 'marina' },
          {
            text: 'O Linu sai a correr, porque a Leonor já está à espera dele.',
            translation: 'O Linu sai correndo, porque a Leonor já está esperando por ele.',
            wrong: 'A Leonor marcou para as oito (“às oito, à porta da marina”), e agora são sete. “Encontrar-nos-emos” é futuro: nós nos encontraremos — mais tarde, não agora.',
          },
        ],
      },
      marina: {
        emoji: '🚤',
        text: 'A Leonor está à espera dele junto a um barco pequeno. “Hoje iremos à Boca do Inferno recolher plâncton”, explica. “Com mar bravo, ficaríamos em terra, mas hoje está calmo.”',
        translation: 'A Leonor está esperando por ele perto de um barco pequeno. “Hoje vamos à Boca do Inferno recolher plâncton”, explica. “Com o mar bravo, a gente ficaria em terra, mas hoje está calmo.”',
        choices: [
          { text: '“Porque é que aquilo se chama Boca do Inferno?”', translation: '“Por que aquilo se chama Boca do Inferno?”', next: 'boca' },
          { text: '“E para que serve o plâncton?”', translation: '“E para que serve o plâncton?”', next: 'plancton' },
        ],
      },
      boca: {
        emoji: '🪨',
        text: '“Era uma gruta cujo teto desabou, e ficou aberta para o mar”, diz a Leonor. “Nos dias de tempestade, as ondas entram com uma força tremenda. O barulho parece vir do fundo da terra — daí o nome.”',
        translation: '“Era uma gruta cujo teto desabou, e ela ficou aberta para o mar”, diz a Leonor. “Nos dias de tempestade, as ondas entram com uma força tremenda. O barulho parece vir do fundo da terra — daí o nome.”',
        choices: [{ text: 'O Linu olha para as rochas, impressionado.', translation: 'O Linu olha para as rochas, impressionado.', next: 'amostra' }],
      },
      plancton: {
        emoji: '🦠',
        text: '“O plâncton são seres minúsculos que vivem à deriva no mar”, explica ela. “Uma grande parte do oxigénio que respiramos vem de algas microscópicas. Contar-lhe-ei tudo no laboratório.”',
        translation: '“O plâncton são seres minúsculos que vivem à deriva no mar”, ela explica. “Uma grande parte do oxigênio que a gente respira vem de algas microscópicas. Vou te contar tudo no laboratório.”',
        choices: [{ text: '“Fascinante! Vamos a isso.”', translation: '“Fascinante! Vamos lá.”', next: 'amostra' }],
      },
      amostra: {
        emoji: '🧪',
        text: 'Perto da Boca do Inferno, a Leonor mergulha uma rede muito fina na água. Passados dez minutos, puxa-a e mostra ao Linu um frasco cheio de pontinhos verdes. “Eu chamar-lhes-ia a sopa da vida”, diz ela, a sorrir.',
        translation: 'Perto da Boca do Inferno, a Leonor mergulha uma rede muito fina na água. Depois de dez minutos, ela puxa a rede e mostra para o Linu um frasco cheio de pontinhos verdes. “Eu chamaria isso de sopa da vida”, diz ela, sorrindo.',
        choices: [
          { text: '“E agora, o que se fará com as amostras?”', translation: '“E agora, o que vai ser feito com as amostras?”', next: 'laboratorio' },
          {
            text: 'O Linu abre o frasco e bebe um gole de “sopa”.',
            translation: 'O Linu abre o frasco e toma um gole de “sopa”.',
            wrong: '“Sopa da vida” é uma metáfora: com o condicional “chamar-lhes-ia” (eu os chamaria), a Leonor deu um nome poético ao plâncton. Não é para tomar!',
          },
        ],
      },
      laboratorio: {
        emoji: '🧫',
        text: '“Analisá-las-emos ao microscópio e enviaremos os dados à universidade”, responde a Leonor. “Seria uma grande ajuda ter mais um par de olhos. O Linu gostaria de vir à tarde?”',
        translation: '“A gente vai analisar as amostras no microscópio e mandar os dados para a universidade”, responde a Leonor. “Seria uma grande ajuda ter mais um par de olhos. Você gostaria de vir à tarde?”',
        choices: [
          { text: '“Gostaria muito! Às duas estarei lá.”', translation: '“Adoraria! Às duas eu estou lá.”', next: 'final_bom' },
          { text: '“Hoje não posso: irei à praia com uns amigos.”', translation: '“Hoje não posso: vou à praia com uns amigos.”', next: 'final_praia' },
        ],
      },
      final_bom: {
        emoji: '🔭',
        text: 'À tarde, o Linu passa três horas ao microscópio e vê algas em forma de estrela e de caixinha. “Um dia escrever-se-á um artigo sobre isto”, brinca a Leonor. “E o seu nome estará lá.”',
        translation: 'À tarde, o Linu passa três horas no microscópio e vê algas em forma de estrela e de caixinha. “Um dia vão escrever um artigo sobre isso”, brinca a Leonor. “E o seu nome vai estar lá.”',
        ending: { tone: 'bom', title: 'Cientista por um dia', message: 'O Linu recolheu plâncton, olhou no microscópio e entendeu por que o mar é a “sopa da vida”.' },
      },
      final_praia: {
        emoji: '🌅',
        text: 'O Linu passa a tarde à beira-mar com os amigos. Ao pôr do sol, olha para as ondas e pensa nos milhões de seres minúsculos que vivem ali. “Amanhã irei ao laboratório”, promete a si mesmo.',
        translation: 'O Linu passa a tarde na beira do mar com os amigos. No pôr do sol, olha para as ondas e pensa nos milhões de seres minúsculos que vivem ali. “Amanhã eu vou ao laboratório”, promete para si mesmo.',
        ending: { tone: 'neutro', title: 'Ciência adiada', message: 'Dia de praia gostoso, mas o microscópio ficou para outro dia. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'O avô do ukulele',
    emoji: '🪕',
    summary: 'No Funchal, um artesão mostra ao Linu o machete madeirense, o instrumento que deu origem ao ukulele.',
    cultural_context:
      'O machete (ou braguinha) é um pequeno instrumento de quatro cordas tradicional da Madeira. Imigrantes madeirenses o levaram para o Havaí a partir de 1879, e ali ele deu origem ao ukulele. Na Madeira são típicos a espetada em pau de louro, o bolo do caco com manteiga de alho e a descida do Monte nos carros de cesto, trenós de vime guiados por dois homens de chapéu de palha.',
    start: 'start',
    glossary: [
      ['Dir-me-á…?', 'O senhor vai me dizer…? / Me dirá…?'],
      ['levaram-no', 'levaram ele, o levaram'],
      ['poderia', 'poderia (condicional)'],
      ['tocá-lo-ia', 'tocaria ele, o tocaria'],
      ['Vendia-me…?', 'O senhor me venderia…? (pedido educado)'],
      ['vendo-lho (lhe + o)', 'vendo para o senhor'],
      ['pô-lo-ei', 'vou colocar ele, eu o porei'],
      ['o carro de cesto', 'o trenó de vime do Monte'],
    ],
    nodes: {
      start: {
        emoji: '🛠️',
        text: 'No Funchal, perto do Mercado dos Lavradores, o Linu entra numa pequena oficina de instrumentos. Um velho artesão, o senhor Agostinho, está a afinar uma guitarra minúscula de quatro cordas. “Sabe o que é isto?”, pergunta-lhe.',
        translation: 'No Funchal, perto do Mercado dos Lavradores, o Linu entra numa pequena oficina de instrumentos. Um velho artesão, o seu Agostinho, está afinando um violão minúsculo de quatro cordas. “O senhor sabe o que é isso?”, ele pergunta.',
        choices: [
          { text: '“É um ukulele, não é?”', translation: '“É um ukulele, né?”', next: 'machete' },
          { text: '“Não faço ideia. Dir-me-á o senhor?”', translation: '“Não faço ideia. O senhor me diz?”', next: 'machete' },
        ],
      },
      machete: {
        emoji: '🌺',
        text: '“É um machete, ou braguinha. Em 1879, uns madeirenses levaram-no para o Havai, e lá nasceu o ukulele.” O artesão entrega-lhe o instrumento com todo o cuidado.',
        translation: '“É um machete, ou braguinha. Em 1879, uns madeirenses levaram ele para o Havaí, e lá nasceu o ukulele.” O artesão entrega o instrumento para ele com todo o cuidado.',
        choices: [
          { text: '“Então o ukulele é neto da Madeira! Poderia tocá-lo?”', translation: '“Então o ukulele é neto da Madeira! Eu poderia tocar?”', next: 'tocar' },
          {
            text: '“Então o ukulele chegou à Madeira vindo do Havai?”',
            translation: '“Então o ukulele chegou à Madeira vindo do Havaí?”',
            wrong: 'Foi o contrário: os madeirenses levaram o machete para o Havaí (“levaram-no para o Havai”), e lá ele deu origem ao ukulele.',
          },
        ],
      },
      tocar: {
        emoji: '🎵',
        text: 'O Linu toca três notas desafinadas. O senhor Agostinho ri-se: “Com uma semana de aulas, tocá-lo-ia muito bem. Amanhã há um arraial no Monte, e os meus alunos tocarão lá.”',
        translation: 'O Linu toca três notas desafinadas. O seu Agostinho ri: “Com uma semana de aula, o senhor tocaria muito bem. Amanhã tem uma festa no Monte, e meus alunos vão tocar lá.”',
        choices: [
          { text: '“Irei com todo o gosto! Como se chega ao Monte?”', translation: '“Vou com todo o prazer! Como se chega ao Monte?”', next: 'monte' },
          { text: '“Amanhã parto para Lisboa, infelizmente. Vendia-me um?”', translation: '“Amanhã vou embora para Lisboa, infelizmente. O senhor me venderia um?”', next: 'comprar' },
        ],
      },
      comprar: {
        emoji: '🎁',
        text: '“Vendo-lho com todo o gosto”, responde o artesão. “Pô-lo-ei numa caixa e dar-lhe-ei um livrinho de acordes.” O Linu paga e despede-se, feliz.',
        translation: '“Vendo para o senhor com todo o prazer”, responde o artesão. “Vou colocar numa caixa e dar para o senhor um livrinho de acordes.” O Linu paga e se despede, feliz.',
        choices: [{ text: 'O Linu volta para Lisboa com o machete.', translation: 'O Linu volta para Lisboa com o machete.', next: 'final_machete' }],
      },
      monte: {
        emoji: '🚠',
        text: '“Sobe-se de teleférico”, explica o senhor Agostinho. “E, para descer, há os carros de cesto: dois homens de chapéu de palha guiam-nos pelas ruas, a deslizar. Ninguém se esquecerá de uma descida assim!”',
        translation: '“A gente sobe de teleférico”, explica o seu Agostinho. “E, para descer, tem os carros de cesto: dois homens de chapéu de palha guiam os carros pelas ruas, deslizando. Ninguém esquece uma descida assim!”',
        choices: [
          { text: 'No dia seguinte, o Linu apanha o teleférico para o Monte.', translation: 'No dia seguinte, o Linu pega o teleférico para o Monte.', next: 'arraial' },
          {
            text: '“Então subirei a pé, já que não há transporte.”',
            translation: '“Então vou subir a pé, já que não tem transporte.”',
            wrong: 'O seu Agostinho disse “Sobe-se de teleférico” (a gente sobe de teleférico). Há transporte, sim! O “se” ali é impessoal.',
          },
        ],
      },
      arraial: {
        emoji: '🍢',
        text: 'No arraial, há espetadas em pau de louro e bolo do caco com manteiga de alho. Os alunos tocam machetes e rajões numa roda. De repente, um deles estende o instrumento ao Linu: “Toque connosco!”',
        translation: 'Na festa, tem espetinhos em galho de louro e bolo do caco com manteiga de alho. Os alunos tocam machetes e rajões numa roda. De repente, um deles estende o instrumento para o Linu: “Toque com a gente!”',
        choices: [
          { text: 'O Linu aceita e toca as suas três notas.', translation: 'O Linu aceita e toca as suas três notas.', next: 'final_bom' },
          { text: '“Obrigado, mas prefiro ouvir e comer.”', translation: '“Obrigado, mas prefiro ouvir e comer.”', next: 'final_ouvir' },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Os músicos repetem as três notas com ele, e aquilo transforma-se numa canção. No fim, o senhor Agostinho diz-lhe: “Voltará para as aulas, não voltará?” O Linu promete que sim.',
        translation: 'Os músicos repetem as três notas com ele, e aquilo vira uma canção. No fim, o seu Agostinho diz para ele: “O senhor vai voltar para as aulas, não vai?” O Linu promete que sim.',
        ending: { tone: 'bom', title: 'Três notas, uma canção', message: 'O Linu tocou machete num arraial madeirense e descobriu o avô português do ukulele.' },
      },
      final_ouvir: {
        emoji: '🧺',
        text: 'O Linu fica a ouvir até tarde, com um bolo do caco na mão. No dia seguinte, desce do Monte num carro de cesto, aos gritos de alegria. Mas o machete ficou na oficina.',
        translation: 'O Linu fica ouvindo até tarde, com um bolo do caco na mão. No dia seguinte, desce do Monte num carro de cesto, gritando de alegria. Mas o machete ficou na oficina.',
        ending: { tone: 'neutro', title: 'Só ouvinte', message: 'Uma festa ótima e uma descida inesquecível, mas o Linu não tocou. Tente de novo!' },
      },
      final_machete: {
        emoji: '🏠',
        text: 'Em Lisboa, o Linu treina todas as noites com o livrinho de acordes. Um dia voltará à Madeira — e, nessa altura, tocará no arraial.',
        translation: 'Em Lisboa, o Linu treina todas as noites com o livrinho de acordes. Um dia vai voltar à Madeira — e, nessa época, vai tocar na festa.',
        ending: { tone: 'neutro', title: 'Um machete na bagagem', message: 'O Linu levou o machete para casa, mas perdeu o arraial do Monte. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'O vigia das baleias',
    emoji: '🐋',
    summary: 'Em Ponta Delgada, nos Açores, o Linu sai para ver cachalotes guiado por um vigia no alto de uma falésia.',
    cultural_context:
      'Nos Açores, a caça à baleia terminou nos anos 1980. As antigas torres de vigia, no alto das falésias, de onde se avistavam as baleias para os baleeiros, hoje servem para orientar por rádio os barcos de observação. O cachalote, que mergulha a mais de mil metros para caçar lulas, é uma das espécies mais vistas no arquipélago.',
    start: 'start',
    glossary: [
      ['dir-nos-á', 'vai nos dizer, nos dirá'],
      ['o vigia', 'o vigia (quem observa o mar de uma torre)'],
      ['a caça à baleia', 'a caça à baleia (crase nos dois países)'],
      ['convosco', 'com vocês'],
      ['estaremos', 'vamos estar, estaremos'],
      ['aproximar-nos-íamos', 'a gente chegaria mais perto'],
      ['visitá-lo-ei', 'vou visitar ele, eu o visitarei'],
      ['o cachalote', 'o cachalote'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Ponta Delgada, ilha de São Miguel. O Linu chega à marina às nove em ponto para a sua primeira observação de baleias. A bióloga do barco, a Carolina, avisa: “Sairemos daqui a pouco; primeiro, o vigia dir-nos-á onde elas estão.”',
        translation: 'Ponta Delgada, ilha de São Miguel. O Linu chega à marina às nove em ponto para a sua primeira observação de baleias. A bióloga do barco, a Carolina, avisa: “Vamos sair daqui a pouco; primeiro, o vigia vai nos dizer onde elas estão.”',
        choices: [
          { text: '“O vigia? Quem é?”', translation: '“O vigia? Quem é?”', next: 'vigia' },
          {
            text: 'O Linu salta para o barco e pede para partirem já.',
            translation: 'O Linu pula no barco e pede para eles saírem agora mesmo.',
            wrong: 'A Carolina disse que primeiro o vigia vai dizer onde as baleias estão (“primeiro, o vigia dir-nos-á onde elas estão”). Só depois o barco sai.',
          },
        ],
      },
      vigia: {
        emoji: '🔭',
        text: '“É um senhor que passa o dia numa torre, no alto da falésia, com binóculos muito potentes”, explica ela. “Antigamente, os vigias avisavam os baleeiros; hoje, avisam os barcos de observação.” A caça à baleia acabou nos Açores há quase quarenta anos.',
        translation: '“É um senhor que passa o dia numa torre, no alto da falésia, com binóculos muito potentes”, ela explica. “Antigamente, os vigias avisavam os baleeiros; hoje, avisam os barcos de observação.” A caça à baleia acabou nos Açores há quase quarenta anos.',
        choices: [
          { text: '“E como é que ele comunica convosco?”', translation: '“E como ele se comunica com vocês?”', next: 'radio' },
          { text: '“Coitadas das baleias, antigamente…”', translation: '“Coitadas das baleias, antigamente…”', next: 'historia' },
        ],
      },
      historia: {
        emoji: '🛶',
        text: '“Pois, e foi uma vida muito dura para os baleeiros também”, diz a Carolina. “Iam em botes a remos e à vela, com arpões de mão. No Museu dos Baleeiros, na ilha do Pico, poderá ver os botes antigos.”',
        translation: '“Pois é, e foi uma vida muito dura para os baleeiros também”, diz a Carolina. “Eles iam em botes a remo e a vela, com arpões de mão. No Museu dos Baleeiros, na ilha do Pico, você vai poder ver os botes antigos.”',
        choices: [{ text: '“Visitá-lo-ei um dia, de certeza.”', translation: '“Vou visitar um dia, com certeza.”', next: 'radio' }],
      },
      radio: {
        emoji: '📻',
        text: 'De repente, o rádio faz barulho. “Cachalotes a sul, a três milhas!”, diz a voz do vigia. A Carolina sorri: “Vamos já. Dentro de vinte minutos, estaremos junto deles.”',
        translation: 'De repente, o rádio faz barulho. “Cachalotes ao sul, a três milhas!”, diz a voz do vigia. A Carolina sorri: “Vamos agora. Em vinte minutos, vamos estar perto deles.”',
        choices: [
          { text: 'O Linu veste o colete e senta-se à proa.', translation: 'O Linu veste o colete e se senta na proa.', next: 'mar' },
          {
            text: '“Vinte milhas? Então é muito longe!”',
            translation: '“Vinte milhas? Então é muito longe!”',
            wrong: 'O vigia disse “a três milhas”. Os vinte são minutos: “Dentro de vinte minutos, estaremos junto deles” = “Em vinte minutos, vamos estar perto deles”.',
          },
        ],
      },
      mar: {
        emoji: '🐳',
        text: 'O barco para longe dos animais e o motor desliga-se. Um cachalote sopra, e um jato de água sobe no ar. “Aproximar-nos-íamos mais”, explica a Carolina, “mas as regras mandam guardar distância, para não os incomodar.”',
        translation: 'O barco para longe dos animais e o motor é desligado. Um cachalote sopra, e um jato de água sobe no ar. “A gente chegaria mais perto”, explica a Carolina, “mas as regras mandam manter distância, para não incomodar os animais.”',
        choices: [
          { text: '“Faz todo o sentido. Ficaremos aqui a observar.”', translation: '“Faz todo o sentido. A gente fica aqui observando.”', next: 'cauda' },
          { text: '“Poderia tirar uma fotografia?”', translation: '“Eu poderia tirar uma foto?”', next: 'foto' },
        ],
      },
      cauda: {
        emoji: '🌊',
        text: 'Minutos depois, o cachalote mergulha e mostra a cauda enorme. “Só voltará à superfície daqui a uns quarenta minutos”, diz a Carolina. “Descerá a mais de mil metros, à procura de lulas.”',
        translation: 'Minutos depois, o cachalote mergulha e mostra o rabo enorme. “Ele só vai voltar à superfície daqui a uns quarenta minutos”, diz a Carolina. “Vai descer a mais de mil metros, atrás de lulas.”',
        choices: [{ text: 'O Linu fica em silêncio, maravilhado.', translation: 'O Linu fica em silêncio, maravilhado.', next: 'final_bom' }],
      },
      foto: {
        emoji: '📸',
        text: '“Claro, mas sem gritar, está bem?” O Linu tira a fotografia no momento em que o cachalote levanta a cauda. “Esta, pô-la-ei na parede do meu quarto!”, sussurra ele.',
        translation: '“Claro, mas sem gritar, tá bom?” O Linu tira a foto no momento em que o cachalote levanta o rabo. “Essa eu vou pôr na parede do meu quarto!”, ele sussurra.',
        choices: [{ text: 'O Linu mostra a fotografia à Carolina.', translation: 'O Linu mostra a foto para a Carolina.', next: 'final_foto' }],
      },
      final_bom: {
        emoji: '💙',
        text: 'No regresso, o Linu olha para a torre do vigia lá no alto e acena-lhe. “Um dia, voltarei aos Açores”, promete. “E trarei os meus amigos.”',
        translation: 'Na volta, o Linu olha para a torre do vigia lá no alto e acena para ele. “Um dia, eu volto aos Açores”, promete. “E vou trazer meus amigos.”',
        ending: { tone: 'bom', title: 'Silêncio no Atlântico', message: 'O Linu viu um cachalote mergulhar rumo ao fundo do oceano, guiado pelos olhos do vigia.' },
      },
      final_foto: {
        emoji: '🖼️',
        text: '“Que fotografia! Mandá-la-ei ao museu, se o Linu deixar”, brinca a Carolina. O Linu ri-se e promete enviar-lha nessa noite.',
        translation: '“Que foto! Vou mandar para o museu, se você deixar”, brinca a Carolina. O Linu ri e promete enviar para ela nessa noite.',
        ending: { tone: 'bom', title: 'A cauda na parede', message: 'Uma foto do cachalote e uma lembrança para sempre dos Açores.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'pt-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Vindima no Pinhão',
    emoji: '🍇',
    summary: 'No Douro, o Linu chega ao Pinhão para ajudar na vindima de uma quinta e descobre a pisa das uvas no lagar.',
    cultural_context:
      'O Alto Douro Vinhateiro é Patrimônio Mundial da UNESCO desde 2001, e o Douro é uma das regiões vinícolas demarcadas mais antigas do mundo (1756). A estação de trem do Pinhão é famosa pelos painéis de azulejos azuis com cenas do rio e das vindimas.',
    start: 'start',
    glossary: [
      ['a vindima', 'a colheita da uva'],
      ['o comboio', 'o trem'],
      ['chegar a (cheguei ao Pinhão)', 'chegar a (na fala do Brasil é comum “cheguei no”)'],
      ['preferir X a Y', 'preferir X a Y (a norma culta evita “preferir X do que Y”)'],
      ['obedecer a uma regra', 'obedecer a uma regra'],
      ['assistir a (um espetáculo)', 'assistir a (ver, presenciar)'],
      ['o lagar', 'o tanque de pedra onde se pisam as uvas'],
      ['o socalco', 'o terraço de cultivo na encosta'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Setembro. O Linu chega ao Pinhão de comboio, ao fim da manhã. Na estação, olha para os azulejos azuis com cenas de vindimas. A Dona Rosa, que o convidou para a quinta, está à espera dele no cais.',
        translation: 'Setembro. O Linu chega ao Pinhão de trem, no fim da manhã. Na estação, ele olha os azulejos azuis com cenas de vindima. A dona Rosa, que o convidou para a quinta, está esperando por ele na plataforma.',
        choices: [
          { text: '“Bom dia, Dona Rosa! Cheguei ao Pinhão há cinco minutos.”', translation: '“Bom dia, dona Rosa! Cheguei ao Pinhão faz cinco minutos.”', next: 'quinta' },
          {
            text: '“Bom dia! Ainda estou no Porto, à espera do comboio.”',
            translation: '“Bom dia! Ainda estou no Porto, esperando o trem.”',
            wrong: 'O texto diz que o Linu já “chega ao Pinhão de comboio” e está na estação. Repare na regência: “chegar A um lugar” (cheguei ao Pinhão) é a forma da norma culta nos dois países; no Brasil, na fala, é comum “cheguei no”.',
          },
        ],
      },
      quinta: {
        emoji: '🏡',
        text: '“Bem-vindo! Hoje vamos à vinha: os vindimadores começaram às sete.” Da varanda da quinta, os socalcos descem até ao rio, cheios de videiras. “Preferes apanhar uvas a ficar na adega?”, pergunta a Dona Rosa.',
        translation: '“Bem-vindo! Hoje vamos para o vinhedo: os colhedores começaram às sete.” Da varanda da quinta, os terraços descem até o rio, cheios de parreiras. “Você prefere colher uvas a ficar na adega?”, pergunta a dona Rosa.',
        choices: [
          { text: '“Prefiro apanhar uvas a ficar parado!”', translation: '“Prefiro colher uvas a ficar parado!”', next: 'vinha' },
          { text: '“Prefiro a adega. Quero ver o lagar.”', translation: '“Prefiro a adega. Quero ver o lagar.”', next: 'adega' },
        ],
      },
      vinha: {
        emoji: '✂️',
        text: 'Na vinha, o Sr. Joaquim dá-lhe uma tesoura e um balde. “Aqui toda a gente obedece a uma regra: corta-se o cacho pelo pé, sem esmagar as uvas.” Os baldes cheios vão depois para os cestos grandes, à beira do caminho.',
        translation: 'No vinhedo, o seu Joaquim dá a ele uma tesoura e um balde. “Aqui todo mundo obedece a uma regra: corta-se o cacho pelo cabo, sem amassar as uvas.” Os baldes cheios vão depois para os cestos grandes, na beira do caminho.',
        choices: [
          { text: 'O Linu corta os cachos com cuidado, um a um.', translation: 'O Linu corta os cachos com cuidado, um por um.', next: 'almoco' },
          {
            text: 'O Linu arranca os cachos com as asas, o mais depressa possível.',
            translation: 'O Linu arranca os cachos com as asas, o mais rápido possível.',
            wrong: 'O seu Joaquim explicou a regra a que todos obedecem: cortar o cacho pelo cabo, com a tesoura, sem amassar as uvas. E note a regência: “obedecer A uma regra”, na norma culta dos dois países.',
          },
        ],
      },
      almoco: {
        emoji: '🫒',
        text: 'Ao meio-dia, os vindimadores param para almoçar debaixo de uma oliveira. Há pão, azeitonas, bacalhau e vinho da casa. O Sr. Joaquim pergunta: “Já assististe a uma pisa a pé no lagar? É hoje à noite!”',
        translation: 'Ao meio-dia, os colhedores param para almoçar embaixo de uma oliveira. Tem pão, azeitonas, bacalhau e vinho da casa. O seu Joaquim pergunta: “Você já assistiu a uma pisa a pé no lagar? É hoje à noite!”',
        choices: [
          { text: '“Nunca assisti a nenhuma! Quero ir.”', translation: '“Nunca assisti a nenhuma! Quero ir.”', next: 'pisa' },
          { text: '“Estou cansado. Prefiro dormir cedo.”', translation: '“Estou cansado. Prefiro dormir cedo.”', next: 'final_cansado' },
        ],
      },
      adega: {
        emoji: '🍷',
        text: 'Na adega, o enólogo mostra-lhe os lagares de granito. “Aqui as uvas são pisadas a pé, como antigamente. À noite, quando os vindimadores chegam da vinha, entram no lagar.” O cheiro a mosto enche a sala.',
        translation: 'Na adega, o enólogo mostra a ele os lagares de granito. “Aqui as uvas são pisadas a pé, como antigamente. À noite, quando os colhedores chegam do vinhedo, eles entram no lagar.” O cheiro de mosto enche a sala.',
        choices: [
          { text: '“Posso assistir à pisa hoje à noite?”', translation: '“Posso assistir à pisa hoje à noite?”', next: 'pisa' },
          {
            text: '“Então as uvas são pisadas de manhã, antes de irem à vinha?”',
            translation: '“Então as uvas são pisadas de manhã, antes de irem ao vinhedo?”',
            wrong: 'O enólogo disse que a pisa é “à noite”, quando os colhedores “chegam da vinha”, ou seja, depois do trabalho no vinhedo, e não de manhã.',
          },
        ],
      },
      pisa: {
        emoji: '🪗',
        text: 'À noite, a adega enche-se de gente. Os vindimadores entram no lagar, de braços dados, e pisam as uvas ao som de uma concertina. A Dona Rosa pergunta ao Linu se quer juntar-se a eles.',
        translation: 'À noite, a adega se enche de gente. Os colhedores entram no lagar, de braços dados, e pisam as uvas ao som de uma sanfona. A dona Rosa pergunta ao Linu se ele quer se juntar a eles.',
        choices: [
          { text: 'O Linu lava as patas e entra no lagar.', translation: 'O Linu lava as patas e entra no lagar.', next: 'lagar' },
          { text: 'O Linu prefere ficar de fora a tirar fotografias.', translation: 'O Linu prefere ficar de fora tirando fotos.', next: 'final_fotos' },
        ],
      },
      lagar: {
        emoji: '🦶',
        text: 'O mosto chega-lhe aos joelhos e está fresquinho. Os vindimadores cantam e o Linu tenta acompanhar o passo. Ao fim de uma hora, todos aplaudem o pinguim mais pequeno do Douro.',
        translation: 'O mosto chega aos joelhos dele e está fresquinho. Os colhedores cantam e o Linu tenta acompanhar o passo. Depois de uma hora, todos aplaudem o menor pinguim do Douro.',
        choices: [{ text: '“Obrigado! Nunca me diverti tanto.”', translation: '“Obrigado! Nunca me diverti tanto.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'No dia seguinte, a Dona Rosa oferece-lhe uma garrafa com o nome dele escrito à mão. “É para abrires daqui a uns anos”, diz ela. O Linu vai para a estação com o coração cheio de Douro.',
        translation: 'No dia seguinte, a dona Rosa dá a ele uma garrafa com o nome dele escrito à mão. “É para você abrir daqui a alguns anos”, diz ela. O Linu vai para a estação com o coração cheio de Douro.',
        ending: { tone: 'bom', title: 'Pinguim vindimador', message: 'O Linu colheu, pisou uvas no lagar e ganhou um vinho com o próprio nome. E aprendeu: chega-se AO Pinhão e prefere-se uma coisa A outra.' },
      },
      final_cansado: {
        emoji: '😴',
        text: 'O Linu vai para o quarto às nove e adormece logo. De manhã, os vindimadores contam-lhe que a pisa foi a mais animada do ano. Fica para a próxima vindima!',
        translation: 'O Linu vai para o quarto às nove e pega no sono na hora. De manhã, os colhedores contam a ele que a pisa foi a mais animada do ano. Fica para a próxima vindima!',
        ending: { tone: 'neutro', title: 'Dormiu a festa', message: 'Descansar também é bom, mas o Linu perdeu a pisa no lagar. Tente de novo e aceite o convite!' },
      },
      final_fotos: {
        emoji: '📸',
        text: 'O Linu fica ao lado do lagar e tira dezenas de fotografias. As fotos ficam lindas, mas as patas continuam limpas. Talvez para o ano tenha coragem de entrar!',
        translation: 'O Linu fica ao lado do lagar e tira dezenas de fotos. As fotos ficam lindas, mas as patas continuam limpas. Talvez no ano que vem ele tenha coragem de entrar!',
        ending: { tone: 'neutro', title: 'Só de fora', message: 'Belas fotos, mas a graça da pisa é entrar no lagar. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'O cão da Serra',
    emoji: '🐕',
    summary: 'Na Serra da Estrela, o Linu passa um dia com um pastor, o seu rebanho e um enorme cão da Serra.',
    cultural_context:
      'O cão da Serra da Estrela é uma das raças de cães mais antigas de Portugal, criada para proteger os rebanhos dos lobos. O queijo Serra da Estrela, feito com leite cru de ovelha e coalhado com flor de cardo, tem Denominação de Origem Protegida.',
    start: 'start',
    glossary: [
      ['o rebanho', 'o rebanho'],
      ['o pastor', 'o pastor'],
      ['o chocalho', 'o sino que se pendura no pescoço dos animais'],
      ['o nevoeiro', 'a neblina, a cerração'],
      ['obedecer a (obedece a mim)', 'obedecer a (obedece a mim)'],
      ['ir ao encontro de', 'ir ao encontro de (encontrar alguém)'],
      ['o curral', 'o curral'],
      ['o queijo amanteigado', 'o queijo cremoso que se come de colher'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Madrugada na Serra da Estrela. O Linu vai com o pastor Manuel ao curral, perto de Manteigas. O cão Lobo, enorme e peludo, levanta-se e cheira o pinguim com desconfiança.',
        translation: 'Madrugada na Serra da Estrela. O Linu vai com o pastor Manuel até o curral, perto de Manteigas. O cachorro Lobo, enorme e peludo, se levanta e cheira o pinguim com desconfiança.',
        choices: [
          { text: '“Bom dia, Lobo. Sou amigo!”', translation: '“Bom dia, Lobo. Sou amigo!”', next: 'curral' },
          {
            text: '“Um lobo a sério? Manuel, temos de fugir!”',
            translation: '“Um lobo de verdade? Manuel, temos que fugir!”',
            wrong: '“Lobo” é o NOME do cachorro: o texto diz “O cão Lobo, enorme e peludo”. Os cães da Serra são justamente os que protegem o rebanho dos lobos de verdade.',
          },
        ],
      },
      curral: {
        emoji: '🐑',
        text: '“O Lobo só obedece a mim e à Inês, a minha filha”, diz o Manuel. “Guarda as ovelhas contra os lobos há seis anos.” Depois abre a cancela e pergunta: “Vens ao monte com o rebanho?”',
        translation: '“O Lobo só obedece a mim e à Inês, minha filha”, diz o Manuel. “Ele protege as ovelhas dos lobos faz seis anos.” Depois abre a porteira e pergunta: “Você vem para o morro com o rebanho?”',
        choices: [
          { text: '“Vou! Nunca fui ao monte com um rebanho.”', translation: '“Vou! Nunca fui para o morro com um rebanho.”', next: 'monte' },
          { text: '“Prefiro ficar na queijaria a subir ao monte.”', translation: '“Prefiro ficar na queijaria a subir o morro.”', next: 'queijaria' },
        ],
      },
      monte: {
        emoji: '⛰️',
        text: 'O rebanho sobe devagar por entre os penedos e a urze. As trezentas ovelhas vão atrás da ovelha mais velha, que usa um chocalho. O Lobo anda sempre à volta delas, atento a tudo.',
        translation: 'O rebanho sobe devagar entre as pedras grandes e a urze. As trezentas ovelhas vão atrás da ovelha mais velha, que usa um sino. O Lobo anda sempre em volta delas, atento a tudo.',
        choices: [{ text: '“Porque é que só a ovelha mais velha tem chocalho?”', translation: '“Por que só a ovelha mais velha tem sino?”', next: 'chocalho' }],
      },
      chocalho: {
        emoji: '🔔',
        text: '“Porque as outras vão atrás dela”, responde o Manuel. “Quando ouço o chocalho, sei onde está o rebanho, mesmo no nevoeiro.” De repente, o nevoeiro sobe do vale e já não se vê nada.',
        translation: '“Porque as outras vão atrás dela”, responde o Manuel. “Quando ouço o sino, sei onde está o rebanho, mesmo na neblina.” De repente, a neblina sobe do vale e já não se vê nada.',
        choices: [
          { text: 'O Linu fica quieto e escuta o chocalho.', translation: 'O Linu fica quieto e escuta o sino.', next: 'nevoeiro' },
          {
            text: 'O Linu corre pelo monte, à procura das ovelhas com os olhos.',
            translation: 'O Linu corre pelo morro, procurando as ovelhas com os olhos.',
            wrong: 'Com neblina não se vê nada! O Manuel acabou de explicar que acha o rebanho pelo SOM: “Quando ouço o chocalho, sei onde está o rebanho”.',
          },
        ],
      },
      nevoeiro: {
        emoji: '🌫️',
        text: 'O Linu ouve o chocalho à esquerda, perto de um riacho. Mas uma ovelha pequena afastou-se e bale muito longe. O Lobo olha para o Manuel, à espera de uma ordem.',
        translation: 'O Linu ouve o sino à esquerda, perto de um riacho. Mas uma ovelha pequena se afastou e bale muito longe. O Lobo olha para o Manuel, esperando uma ordem.',
        choices: [
          { text: '“Manuel, manda o Lobo buscar a ovelha!”', translation: '“Manuel, mande o Lobo buscar a ovelha!”', next: 'resgate' },
          { text: '“Eu vou buscá-la sozinho.”', translation: '“Eu vou buscar a ovelha sozinho.”', next: 'final_perdido' },
        ],
      },
      resgate: {
        emoji: '🐕',
        text: '“Lobo, vai!”, diz o Manuel. O cão desaparece no nevoeiro e, dez minutos depois, volta com a ovelha pequena à frente dele. O Linu aplaude com as asas.',
        translation: '“Lobo, vai!”, diz o Manuel. O cachorro desaparece na neblina e, dez minutos depois, volta com a ovelha pequena na frente dele. O Linu aplaude com as asas.',
        choices: [{ text: '“Bravo, Lobo! És o melhor cão da Serra!”', translation: '“Bravo, Lobo! Você é o melhor cachorro da Serra!”', next: 'final_bom' }],
      },
      queijaria: {
        emoji: '🧀',
        text: 'Na queijaria, a Inês mostra-lhe como se faz o queijo: leite de ovelha, sal e flor de cardo. “O queijo precisa de pelo menos um mês de cura”, explica ela. Nas prateleiras, os queijos amarelos estão todos alinhados.',
        translation: 'Na queijaria, a Inês mostra a ele como se faz o queijo: leite de ovelha, sal e flor de cardo. “O queijo precisa de pelo menos um mês de maturação”, explica ela. Nas prateleiras, os queijos amarelos estão todos alinhados.',
        choices: [
          { text: '“Posso provar um queijo amanteigado?”', translation: '“Posso provar um queijo cremoso?”', next: 'prova' },
          {
            text: '“Então o queijo leva leite de vaca e fica pronto amanhã?”',
            translation: '“Então o queijo leva leite de vaca e fica pronto amanhã?”',
            wrong: 'A Inês disse que o queijo é de leite de OVELHA e que precisa de “pelo menos um mês de cura” (maturação). Não fica pronto de um dia para o outro.',
          },
        ],
      },
      prova: {
        emoji: '🥄',
        text: 'A Inês corta a casca por cima e o queijo, cremoso, come-se à colher. O Linu nunca provou nada assim. “À tarde, o meu pai e o Lobo chegam do monte. Queres ir ao encontro deles?”',
        translation: 'A Inês corta a casca por cima e o queijo, cremoso, se come de colher. O Linu nunca provou nada assim. “De tarde, meu pai e o Lobo voltam do morro. Quer ir ao encontro deles?”',
        choices: [{ text: '“Quero! Vamos ao encontro deles.”', translation: '“Quero! Vamos ao encontro deles.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ao pôr do sol, o rebanho regressa ao curral e o Lobo deita-se aos pés do Linu. O Manuel sorri: “Ele já te aceitou.” O Linu promete voltar à Serra na primavera.',
        translation: 'No pôr do sol, o rebanho volta ao curral e o Lobo se deita aos pés do Linu. O Manuel sorri: “Ele já aceitou você.” O Linu promete voltar à Serra na primavera.',
        ending: { tone: 'bom', title: 'Amigo do Lobo', message: 'O Linu ganhou a confiança de um cão da Serra e conheceu a vida dos pastores. E praticou a regência: obedece-se A alguém, vai-se AO monte.' },
      },
      final_perdido: {
        emoji: '😳',
        text: 'O Linu entra sozinho no nevoeiro e perde-se entre os penedos. Só o encontram uma hora depois, graças ao faro do Lobo. “Na serra, obedece-se ao pastor”, diz o Manuel, a rir.',
        translation: 'O Linu entra sozinho na neblina e se perde entre as pedras. Só o encontram uma hora depois, graças ao faro do Lobo. “Na serra, a gente obedece ao pastor”, diz o Manuel, rindo.',
        ending: { tone: 'neutro', title: 'Perdido na neblina', message: 'Quem salvou o dia foi o Lobo. Na próxima, deixe o cão fazer o trabalho dele!' },
      },
    },
  },
  {
    id: 'pt-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'As âncoras do Barril',
    emoji: '⚓',
    summary: 'Em Tavira, o Linu vai com uma amiga à Praia do Barril e ouve as histórias de um antigo pescador de atum.',
    cultural_context:
      'Na Praia do Barril, na Ilha de Tavira, centenas de âncoras antigas enfileiradas nas dunas lembram a pesca do atum com armações, que existiu ali até os anos 1960. Para chegar à praia, atravessa-se a ria por uma ponte e segue-se a pé ou num pequeno trem turístico.',
    start: 'start',
    glossary: [
      ['o autocarro', 'o ônibus'],
      ['a rapariga', 'a moça (em Portugal, sem sentido pejorativo)'],
      ['ir à praia', 'ir à praia (na fala do Brasil também “ir na praia”)'],
      ['lembrar-se de', 'lembrar-se de, lembrar de'],
      ['a armação', 'a armadilha fixa de redes para pescar atum'],
      ['o caranguejo-violinista', 'o chama-maré'],
      ['a esplanada', 'as mesas ao ar livre de um café'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Tavira acorda com sol. O Linu atravessa a ponte romana e vai ao mercado comprar fruta. Lá encontra a Beatriz, uma rapariga de Tavira, que o convida a ir à Praia do Barril.',
        translation: 'Tavira acorda com sol. O Linu atravessa a ponte romana e vai ao mercado comprar fruta. Lá ele encontra a Beatriz, uma moça de Tavira, que o convida para ir à Praia do Barril.',
        choices: [{ text: '“Vamos à praia! Como se chega lá?”', translation: '“Vamos à praia! Como se chega lá?”', next: 'caminho' }],
      },
      caminho: {
        emoji: '🚌',
        text: '“Vamos de autocarro até Pedras d’El Rei e depois atravessamos a ponte sobre a ria”, explica a Beatriz. “Do outro lado, há um comboio pequenino que vai até à praia.” E acrescenta: “Ou preferes ir a pé?”',
        translation: '“Vamos de ônibus até Pedras d’El Rei e depois atravessamos a ponte sobre a ria”, explica a Beatriz. “Do outro lado, tem um trenzinho que vai até a praia.” E acrescenta: “Ou você prefere ir a pé?”',
        choices: [
          { text: '“Vamos no comboio pequenino!”', translation: '“Vamos no trenzinho!”', next: 'comboio' },
          { text: '“Prefiro ir a pé a esperar pelo comboio.”', translation: '“Prefiro ir a pé a esperar o trem.”', next: 'a_pe' },
          {
            text: '“Então apanhamos o barco em Tavira e vamos direitos à praia.”',
            translation: '“Então pegamos o barco em Tavira e vamos direto para a praia.”',
            wrong: 'A Beatriz não falou de barco: disse ônibus (“autocarro”) até Pedras d’El Rei, depois a ponte sobre a ria e, do outro lado, o trenzinho (“comboio pequenino”) ou a pé.',
          },
        ],
      },
      comboio: {
        emoji: '🚂',
        text: 'O comboio é lento e barulhento, e as crianças acenam aos caranguejos na lama. A Beatriz aponta para as dunas. “Lá ao fundo, vês? É o cemitério das âncoras.”',
        translation: 'O trenzinho é lento e barulhento, e as crianças dão tchau para os caranguejos na lama. A Beatriz aponta para as dunas. “Lá no fundo, está vendo? É o cemitério das âncoras.”',
        choices: [{ text: '“Quero ver as âncoras de perto!”', translation: '“Quero ver as âncoras de perto!”', next: 'ancoras' }],
      },
      a_pe: {
        emoji: '🦀',
        text: 'O caminho a pé tem mais de um quilómetro, entre pinheiros e sapais. O Linu vê um caranguejo-violinista a agitar a pinça gigante. Chegam às dunas com calor e muita sede.',
        translation: 'O caminho a pé tem mais de um quilômetro, entre pinheiros e mangues salgados. O Linu vê um chama-maré balançando a pinça gigante. Eles chegam às dunas com calor e muita sede.',
        choices: [{ text: '“Olha! O que são aquelas âncoras todas?”', translation: '“Olha! O que são todas aquelas âncoras?”', next: 'ancoras' }],
      },
      ancoras: {
        emoji: '⚓',
        text: 'Na areia, centenas de âncoras enferrujadas estão alinhadas nas dunas. O avô da Beatriz, o Sr. Custódio, está lá sentado a olhar para o mar. “Antigamente, pescava-se aqui o atum”, conta ele. “Eu próprio trabalhei na armação, quando era rapaz.”',
        translation: 'Na areia, centenas de âncoras enferrujadas estão enfileiradas nas dunas. O avô da Beatriz, seu Custódio, está sentado ali olhando o mar. “Antigamente, pescava-se atum aqui”, conta ele. “Eu mesmo trabalhei na armação, quando era moço.”',
        choices: [
          { text: '“Sr. Custódio, lembra-se bem desse tempo?”', translation: '“Seu Custódio, o senhor se lembra bem daquela época?”', next: 'atum' },
          {
            text: '“Então o senhor ainda vem pescar atum aqui todos os dias?”',
            translation: '“Então o senhor ainda vem pescar atum aqui todo dia?”',
            wrong: 'O seu Custódio disse “Antigamente, pescava-se aqui o atum” e que trabalhou na armação “quando era rapaz” (moço). É coisa do passado: a pesca acabou, e as âncoras ficaram como lembrança.',
          },
        ],
      },
      atum: {
        emoji: '🐟',
        text: '“Lembro-me de tudo! Os atuns eram maiores do que eu”, ri-se o Sr. Custódio. “As famílias dos pescadores viviam naquelas casinhas brancas, ao pé das dunas.” Hoje, as casas dos pescadores são cafés e restaurantes.',
        translation: '“Lembro de tudo! Os atuns eram maiores do que eu”, ri o seu Custódio. “As famílias dos pescadores moravam naquelas casinhas brancas, perto das dunas.” Hoje, as casas dos pescadores são cafés e restaurantes.',
        choices: [{ text: '“Obrigado por me contar esta história.”', translation: '“Obrigado por me contar essa história.”', next: 'praia' }],
      },
      praia: {
        emoji: '🏖️',
        text: 'Depois, o Linu e a Beatriz vão ao mar. A água está fria, mas o Linu adora. A Beatriz pergunta-lhe se prefere nadar a apanhar sol.',
        translation: 'Depois, o Linu e a Beatriz vão para o mar. A água está fria, mas o Linu adora. A Beatriz pergunta se ele prefere nadar a tomar sol.',
        choices: [
          { text: '“Prefiro nadar a apanhar sol, claro!”', translation: '“Prefiro nadar a tomar sol, claro!”', next: 'final_bom' },
          { text: '“Tenho fome. Vamos à esplanada comer qualquer coisa?”', translation: '“Estou com fome. Vamos às mesinhas do café comer alguma coisa?”', next: 'final_tarde' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'O Linu nada até se cansar, feliz como em casa. Ao fim do dia, regressam no comboio com o Sr. Custódio, que conta mais histórias do mar. Tavira fica no coração do Linu.',
        translation: 'O Linu nada até se cansar, feliz como se estivesse em casa. No fim do dia, eles voltam no trenzinho com o seu Custódio, que conta mais histórias do mar. Tavira fica no coração do Linu.',
        ending: { tone: 'bom', title: 'Histórias do mar', message: 'O Linu conheceu o cemitério das âncoras e a memória da pesca do atum. E praticou a regência: vai-se À praia, lembra-se DE alguma coisa.' },
      },
      final_tarde: {
        emoji: '🌅',
        text: 'Ficam tanto tempo na esplanada que perdem o último comboio. Voltam a pé, ao pôr do sol, cheios de areia. Pelo menos, o caminho é bonito!',
        translation: 'Eles ficam tanto tempo no café que perdem o último trenzinho. Voltam a pé, no pôr do sol, cheios de areia. Pelo menos o caminho é bonito!',
        ending: { tone: 'neutro', title: 'O último trenzinho', message: 'Boa conversa, mas o trenzinho foi embora. Tente de novo e aproveite o mar!' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'pt-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Aves da Berlenga',
    emoji: '🐦',
    summary: 'Em Peniche, o Linu apanha o barco para a Berlenga e ajuda uma bióloga a contar ninhos de aves marinhas.',
    cultural_context:
      'O arquipélago das Berlengas, em frente a Peniche, é Reserva da Biosfera da UNESCO desde 2011. Na ilha da Berlenga fazem ninho aves marinhas como a gaivota-de-patas-amarelas e a cagarra, cujo canto noturno lembra o choro de um bebê; o Forte de São João Baptista fica sobre uma rocha junto ao mar.',
    start: 'start',
    glossary: [
      ['Espero que não enjoes.', 'Espero que você não enjoe.'],
      ['É importante que fales baixo.', 'É importante que você fale baixo.'],
      ['antes de os barcos chegarem', 'antes de os barcos chegarem (infinitivo pessoal)'],
      ['quando escurecer', 'quando escurecer (futuro do conjuntivo/subjuntivo)'],
      ['a cagarra', 'a cagarra (ave marinha, parente do albatroz)'],
      ['um bocadinho', 'um pouquinho'],
      ['o cais', 'o cais, o píer'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'O porto de Peniche cheira a peixe e a mar. A bióloga Marta espera o Linu junto ao barco para a Berlenga. “Espero que não enjoes”, diz ela. “Hoje o mar está um bocadinho agitado.”',
        translation: 'O porto de Peniche tem cheiro de peixe e de mar. A bióloga Marta espera o Linu perto do barco para a Berlenga. “Espero que você não enjoe”, diz ela. “Hoje o mar está um pouquinho agitado.”',
        choices: [
          { text: '“Nunca enjoo! Vamos embora.”', translation: '“Eu nunca enjoo! Vamos lá.”', next: 'travessia' },
          {
            text: '“Ainda bem que o mar está tão calmo hoje!”',
            translation: '“Ainda bem que o mar está tão calmo hoje!”',
            wrong: 'A Marta disse o contrário: o mar está “um bocadinho agitado” (um pouquinho agitado). Por isso ela diz “Espero que não enjoes”, com o conjuntivo (subjuntivo) depois de “esperar que”.',
          },
        ],
      },
      travessia: {
        emoji: '🌊',
        text: 'O barco salta nas ondas durante quase uma hora. Quando a ilha aparece, milhares de gaivotas voam por cima das rochas. A Marta avisa: “Na ilha, é importante que fales baixo e que não saias dos trilhos.”',
        translation: 'O barco pula nas ondas por quase uma hora. Quando a ilha aparece, milhares de gaivotas voam por cima das pedras. A Marta avisa: “Na ilha, é importante que você fale baixo e não saia das trilhas.”',
        choices: [{ text: '“Combinado. Falo baixinho e fico no trilho.”', translation: '“Combinado. Falo baixinho e fico na trilha.”', next: 'ilha' }],
      },
      ilha: {
        emoji: '🏝️',
        text: 'Na Berlenga, a Marta abre um caderno cheio de números. “Preciso que me ajudes a contar os ninhos desta encosta”, explica. “Temos de acabar antes de os barcos dos turistas chegarem.” Lá em baixo, na rocha, vê-se o forte.',
        translation: 'Na Berlenga, a Marta abre um caderno cheio de números. “Preciso que você me ajude a contar os ninhos desta encosta”, explica. “Temos que terminar antes que os barcos dos turistas cheguem.” Lá embaixo, na rocha, dá para ver o forte.',
        choices: [
          { text: '“Claro! Começamos por onde?”', translation: '“Claro! Começamos por onde?”', next: 'ninhos' },
          { text: '“Posso primeiro ir espreitar o forte?”', translation: '“Posso primeiro dar uma espiada no forte?”', next: 'forte' },
        ],
      },
      ninhos: {
        emoji: '🥚',
        text: 'O Linu conta sessenta e dois ninhos, alguns com ovos cheios de manchas. De repente, uma gaivota grita-lhe muito perto da cabeça. A Marta ri-se: “Talvez ela ache que és um concorrente!”',
        translation: 'O Linu conta sessenta e dois ninhos, alguns com ovos cheios de manchas. De repente, uma gaivota grita bem perto da cabeça dele. A Marta ri: “Talvez ela ache que você é um rival!”',
        choices: [
          { text: 'O Linu afasta-se devagar do ninho.', translation: 'O Linu se afasta devagar do ninho.', next: 'cagarras' },
          {
            text: '“Ela gritou porque gosta de mim, não é?”',
            translation: '“Ela gritou porque gosta de mim, né?”',
            wrong: 'A Marta brincou que a gaivota talvez ache que o Linu é um “concorrente” (um rival): ela grita para defender o ninho. O “ache”, no conjuntivo, aparece porque vem depois de “talvez”.',
          },
        ],
      },
      forte: {
        emoji: '🏰',
        text: 'O Linu desce a escadaria até ao Forte de São João Baptista, construído sobre uma rocha no mar. Lá dentro, uma senhora diz-lhe: “Se quiseres, podes subir ao terraço.” E acrescenta: “Mas não te esqueças de voltar antes que o último barco parta!”',
        translation: 'O Linu desce a escadaria até o Forte de São João Baptista, construído sobre uma rocha no mar. Lá dentro, uma senhora diz a ele: “Se quiser, pode subir ao terraço.” E acrescenta: “Mas não se esqueça de voltar antes que o último barco saia!”',
        choices: [
          { text: '“Só vou espreitar e depois volto para ajudar a Marta.”', translation: '“Só vou dar uma olhada e depois volto para ajudar a Marta.”', next: 'ninhos' },
          { text: '“Vou ficar no terraço a tarde toda, ao sol.”', translation: '“Vou ficar no terraço a tarde inteira, no sol.”', next: 'final_barco' },
        ],
      },
      cagarras: {
        emoji: '🌇',
        text: 'Ao fim da tarde, a Marta, que dorme na casa dos investigadores, leva-o a um sítio especial. “Quando escurecer, as cagarras voltam do mar”, sussurra. “Quero que as oiças: parecem bebés a chorar!”',
        translation: 'No fim da tarde, a Marta, que dorme na casa dos pesquisadores, leva o Linu a um lugar especial. “Quando escurecer, as cagarras voltam do mar”, sussurra. “Quero que você as ouça: parecem bebês chorando!”',
        choices: [
          { text: '“Fico contigo até escurecer.”', translation: '“Fico com você até escurecer.”', next: 'noite' },
          {
            text: '“Então vamos ouvi-las já, enquanto há sol.”',
            translation: '“Então vamos ouvir as cagarras agora, enquanto tem sol.”',
            wrong: 'A Marta disse que as cagarras voltam “quando escurecer” (futuro do conjuntivo/subjuntivo): é preciso esperar a noite. De dia elas estão no mar.',
          },
        ],
      },
      noite: {
        emoji: '🌌',
        text: 'O céu fica cor de laranja e depois escuro. De repente, ouvem-se gritos estranhos por cima do mar: são as cagarras a voltar aos ninhos. O Linu fica todo arrepiado.',
        translation: 'O céu fica cor de laranja e depois escuro. De repente, ouvem-se gritos estranhos por cima do mar: são as cagarras voltando para os ninhos. O Linu fica todo arrepiado.',
        choices: [{ text: '“Que som incrível! Obrigado, Marta.”', translation: '“Que som incrível! Obrigado, Marta.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'A Marta escreve no caderno: “Ajudante: Linu, pinguim-de-barbicha.” No dia seguinte, o Linu apanha o primeiro barco para Peniche. “Espero que voltes na primavera”, diz ela, a acenar do cais.',
        translation: 'A Marta escreve no caderno: “Ajudante: Linu, pinguim-de-barbicha.” No dia seguinte, o Linu pega o primeiro barco para Peniche. “Espero que você volte na primavera”, diz ela, acenando do cais.',
        ending: { tone: 'bom', title: 'Ajudante de bióloga', message: 'O Linu contou ninhos e ouviu as cagarras. E usou o conjuntivo: espero que voltes, quando escurecer, antes de os barcos chegarem.' },
      },
      final_barco: {
        emoji: '😴',
        text: 'O Linu adormece ao sol, no terraço do forte, e acorda com a buzina do último barco já ao longe. A senhora do forte arranja-lhe uma cama para a noite. Afinal, uma noite na Berlenga não é castigo nenhum!',
        translation: 'O Linu pega no sono no sol, no terraço do forte, e acorda com a buzina do último barco já longe. A senhora do forte arruma uma cama para ele passar a noite. Afinal, uma noite na Berlenga não é castigo nenhum!',
        ending: { tone: 'neutro', title: 'Preso na ilha', message: 'O forte é lindo, mas o Linu não ajudou a Marta nem ouviu as cagarras com ela. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Primeira onda na Ericeira',
    emoji: '🏄',
    summary: 'Na Ericeira, o Linu tem a primeira aula de surfe e tenta ficar de pé numa onda do Atlântico.',
    cultural_context:
      'Em 2011, a Ericeira se tornou a primeira Reserva Mundial de Surfe da Europa, pela qualidade e variedade de suas ondas. A antiga vila de pescadores é conhecida pelas casas brancas com barras azuis e pelos frutos do mar.',
    start: 'start',
    glossary: [
      ['Embora as ondas estejam pequenas…', 'Embora as ondas estejam pequenas…'],
      ['é melhor começarmos', 'é melhor a gente começar (infinitivo pessoal)'],
      ['antes de eu gritar', 'antes de eu gritar'],
      ['o fato de surf', 'a roupa de borracha, o long john (“fato” em Portugal = roupa, terno)'],
      ['a prancha', 'a prancha'],
      ['remar', 'remar'],
      ['o paredão', 'o muro à beira-mar'],
      ['É pena que não fiques.', 'Pena que você não fique.'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Sete da manhã na Ericeira. O Linu chega à escola de surf com uma prancha emprestada. O instrutor Tiago olha para o mar e diz: “Embora as ondas estejam pequenas, é melhor começarmos na areia.”',
        translation: 'Sete da manhã na Ericeira. O Linu chega à escola de surfe com uma prancha emprestada. O instrutor Tiago olha para o mar e diz: “Embora as ondas estejam pequenas, é melhor a gente começar na areia.”',
        choices: [
          { text: '“Está bem, começamos na areia.”', translation: '“Tudo bem, começamos na areia.”', next: 'areia' },
          {
            text: '“Ótimo! As ondas estão enormes, vamos já para a água!”',
            translation: '“Ótimo! As ondas estão enormes, vamos logo para a água!”',
            wrong: 'O Tiago disse que as ondas “estejam pequenas” (estão pequenas) e, mesmo assim, que é melhor começar NA AREIA. Repare: “embora” pede o conjuntivo (subjuntivo) nos dois países.',
          },
        ],
      },
      areia: {
        emoji: '🏖️',
        text: '“Deita-te na prancha e rema com as asas”, explica o Tiago. “Quando eu disser ‘já’, levantas-te de um salto.” O Linu treina dez vezes, até os outros alunos baterem palmas.',
        translation: '“Deite na prancha e reme com as asas”, explica o Tiago. “Quando eu disser ‘já’, você se levanta num pulo.” O Linu treina dez vezes, até os outros alunos baterem palmas.',
        choices: [
          { text: '“Acho que estou pronto para o mar.”', translation: '“Acho que estou pronto para o mar.”', next: 'mar' },
          { text: '“Tenho frio. Posso ir buscar um fato mais grosso?”', translation: '“Estou com frio. Posso pegar uma roupa de borracha mais grossa?”', next: 'fato' },
        ],
      },
      fato: {
        emoji: '🩱',
        text: 'Na loja da escola, a Sofia dá-lhe um fato de quatro milímetros. “Talvez fique um pouco largo, mas aquece bem”, diz ela. Quando o Linu volta à praia, os outros alunos já estão na água.',
        translation: 'Na loja da escola, a Sofia dá a ele uma roupa de borracha de quatro milímetros. “Talvez fique um pouco larga, mas esquenta bem”, diz ela. Quando o Linu volta à praia, os outros alunos já estão na água.',
        choices: [{ text: '“Espera por mim, Tiago!”', translation: '“Espere por mim, Tiago!”', next: 'mar' }],
      },
      mar: {
        emoji: '🌊',
        text: 'A água do Atlântico está gelada, mas para um pinguim é perfeita. O Tiago segura a prancha e explica: “Quando vier a onda certa, eu empurro-te.” Depois avisa: “Não te levantes antes de eu gritar!”',
        translation: 'A água do Atlântico está gelada, mas para um pinguim é perfeita. O Tiago segura a prancha e explica: “Quando vier a onda certa, eu te empurro.” Depois avisa: “Não se levante antes de eu gritar!”',
        choices: [
          { text: 'O Linu espera, deitado na prancha, pelo grito do Tiago.', translation: 'O Linu espera, deitado na prancha, pelo grito do Tiago.', next: 'onda' },
          {
            text: 'O Linu levanta-se logo que vê a primeira espuma.',
            translation: 'O Linu se levanta assim que vê a primeira espuma.',
            wrong: 'O Tiago pediu que o Linu NÃO se levantasse “antes de eu gritar” (infinitivo pessoal: o sujeito de “gritar” é “eu”). Primeiro vem o grito, depois o salto.',
          },
        ],
      },
      onda: {
        emoji: '🏄',
        text: '“Já!” O Linu salta para cima da prancha e, por uns segundos, desliza na onda. Depois cai, rebola na espuma e sai da água a rir. O Tiago levanta os braços: “Conseguiste!”',
        translation: '“Já!” O Linu pula em cima da prancha e, por alguns segundos, desliza na onda. Depois cai, rola na espuma e sai da água rindo. O Tiago levanta os braços: “Você conseguiu!”',
        choices: [
          { text: '“Quero apanhar outra antes que a maré suba!”', translation: '“Quero pegar outra antes que a maré suba!”', next: 'outra' },
          { text: '“Chega por hoje. Vamos almoçar?”', translation: '“Chega por hoje. Vamos almoçar?”', next: 'almoco' },
        ],
      },
      outra: {
        emoji: '💪',
        text: 'A segunda onda é maior e o Linu cai logo. Na terceira, também. À quarta, fica de pé até à areia, e as pessoas no paredão aplaudem.',
        translation: 'A segunda onda é maior e o Linu cai logo. Na terceira, também. Na quarta, ele fica de pé até a areia, e as pessoas no muro da praia aplaudem.',
        choices: [{ text: '“Acho que nasci para isto!”', translation: '“Acho que nasci para isso!”', next: 'final_bom' }],
      },
      almoco: {
        emoji: '🐟',
        text: 'Na vila, o Tiago leva-o a uma tasca com vista para a Praia dos Pescadores. Pedem peixe grelhado e salada. “É pena que não fiques mais dias”, diz o Tiago. “Amanhã as ondas vão estar ótimas.”',
        translation: 'Na vila, o Tiago leva o Linu a um botequim com vista para a Praia dos Pescadores. Eles pedem peixe grelhado e salada. “Pena que você não fique mais dias”, diz o Tiago. “Amanhã as ondas vão estar ótimas.”',
        choices: [
          { text: '“Então fico mais um dia, para voltarmos juntos ao mar.”', translation: '“Então fico mais um dia, para a gente voltar junto para o mar.”', next: 'final_fica' },
          { text: '“Não posso. Tenho de apanhar o autocarro para Lisboa.”', translation: '“Não posso. Tenho que pegar o ônibus para Lisboa.”', next: 'final_parte' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ao fim da manhã, o Linu sai da água cansado e feliz. O Tiago escreve-lhe no certificado: “Primeira onda: conseguida.” O Linu promete que, quando voltar, traz a sua própria prancha.',
        translation: 'No fim da manhã, o Linu sai da água cansado e feliz. O Tiago escreve no certificado dele: “Primeira onda: conquistada.” O Linu promete que, quando voltar, vai trazer a própria prancha.',
        ending: { tone: 'bom', title: 'Surfista de barbicha', message: 'O Linu ficou de pé numa onda da Ericeira. E praticou o conjuntivo: embora estejam, quando vier, antes de eu gritar.' },
      },
      final_fica: {
        emoji: '🏄',
        text: 'No dia seguinte, as ondas estão perfeitas, como o Tiago tinha dito. O Linu apanha seis ondas seguidas sem cair. “Se continuares assim, daqui a um ano és tu o instrutor!”, brinca o Tiago.',
        translation: 'No dia seguinte, as ondas estão perfeitas, como o Tiago tinha dito. O Linu pega seis ondas seguidas sem cair. “Se você continuar assim, daqui a um ano o instrutor é você!”, brinca o Tiago.',
        ending: { tone: 'bom', title: 'Mais um dia de mar', message: 'Ficar valeu a pena: ondas perfeitas e um pinguim surfista. E o conjuntivo apareceu de novo: se continuares, quando voltar.' },
      },
      final_parte: {
        emoji: '🚌',
        text: 'O Linu apanha o autocarro da tarde para Lisboa. Pela janela, vê as ondas perfeitas a chegar à praia. Fica com vontade de voltar.',
        translation: 'O Linu pega o ônibus da tarde para Lisboa. Pela janela, vê as ondas perfeitas chegando à praia. Fica com vontade de voltar.',
        ending: { tone: 'neutro', title: 'Até a próxima onda', message: 'Uma onda só, e a vontade de mais. Tente de novo e fique mais um dia!' },
      },
    },
  },
  {
    id: 'pt-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'As máscaras de Bragança',
    emoji: '👺',
    summary: 'Em Bragança, o Linu conhece um artesão de máscaras e vai com ele a uma festa de inverno numa aldeia de Trás-os-Montes.',
    cultural_context:
      'Em Bragança, o Museu Ibérico da Máscara e do Traje reúne máscaras das festas de inverno de Trás-os-Montes e da vizinha província de Zamora, na Espanha. Nas Festas dos Rapazes, entre o Natal e o Dia de Reis, os jovens de várias aldeias saem às ruas mascarados, com roupas coloridas e chocalhos.',
    start: 'start',
    glossary: [
      ['Se quiseres…', 'Se você quiser… (futuro do conjuntivo/subjuntivo)'],
      ['Quero que escolhas.', 'Quero que você escolha.'],
      ['para ires mascarado', 'para você ir mascarado (infinitivo pessoal)'],
      ['quando os rapazes saírem', 'quando os rapazes saírem'],
      ['o careto', 'o mascarado das festas de inverno de Trás-os-Montes'],
      ['a lata', 'a folha de metal fino'],
      ['um frio de rachar', 'um frio de rachar'],
      ['o largo', 'a pracinha'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Dezembro em Bragança. Está um frio de rachar e o castelo amanheceu coberto de geada. O Linu entra no Museu Ibérico da Máscara e do Traje, onde as máscaras coloridas parecem olhar para ele.',
        translation: 'Dezembro em Bragança. Está um frio de rachar e o castelo amanheceu coberto de geada. O Linu entra no Museu Ibérico da Máscara e do Traje, onde as máscaras coloridas parecem olhar para ele.',
        choices: [{ text: '“Que máscaras tão bonitas… e tão assustadoras!”', translation: '“Que máscaras bonitas… e assustadoras!”', next: 'museu' }],
      },
      museu: {
        emoji: '🎨',
        text: 'Num canto, um senhor de boina, o Sr. Albino, está a pintar uma máscara de lata. “Fui eu que fiz metade destas máscaras”, diz, com orgulho. “Se quiseres, amanhã levo-te à festa da minha aldeia.”',
        translation: 'Num canto, um senhor de boina, o seu Albino, está pintando uma máscara de lata. “Fui eu que fiz metade destas máscaras”, diz, com orgulho. “Se você quiser, amanhã te levo à festa da minha aldeia.”',
        choices: [
          { text: '“Aceito! E posso ver como se faz uma máscara?”', translation: '“Aceito! E posso ver como se faz uma máscara?”', next: 'oficina' },
          {
            text: '“Hoje à noite? Ótimo, vou já buscar o casaco!”',
            translation: '“Hoje à noite? Ótimo, vou já pegar o casaco!”',
            wrong: 'O seu Albino disse “amanhã levo-te à festa”, não hoje à noite. E ofereceu com o futuro do conjuntivo (subjuntivo): “Se quiseres” (se você quiser).',
          },
        ],
      },
      oficina: {
        emoji: '🔨',
        text: 'Na oficina, cheira a tinta e a madeira. O Sr. Albino corta a lata, dobra-a e pinta-a de vermelho e amarelo. “Quero que escolhas as cores da tua máscara, para ires mascarado amanhã.”',
        translation: 'Na oficina, tem cheiro de tinta e de madeira. O seu Albino corta a lata, dobra e pinta de vermelho e amarelo. “Quero que você escolha as cores da sua máscara, para ir mascarado amanhã.”',
        choices: [{ text: '“Verde e azul, como o mar da Antártida!”', translation: '“Verde e azul, como o mar da Antártida!”', next: 'aldeia' }],
      },
      aldeia: {
        emoji: '🔥',
        text: 'No dia seguinte, chegam à aldeia ao fim da tarde. Há uma fogueira enorme no largo e cheira a castanhas assadas. O Sr. Albino avisa: “Quando os rapazes saírem com os chocalhos, é melhor que não fiques no meio da rua.”',
        translation: 'No dia seguinte, eles chegam à aldeia no fim da tarde. Tem uma fogueira enorme na pracinha e cheiro de castanha assada. O seu Albino avisa: “Quando os rapazes saírem com os chocalhos, é melhor que você não fique no meio da rua.”',
        choices: [
          { text: 'O Linu encosta-se à parede, perto da fogueira.', translation: 'O Linu se encosta na parede, perto da fogueira.', next: 'desfile' },
          {
            text: 'O Linu vai para o meio da rua, porque o Sr. Albino disse que era o melhor lugar.',
            translation: 'O Linu vai para o meio da rua, porque o seu Albino disse que era o melhor lugar.',
            wrong: 'Ele disse o contrário: “é melhor que NÃO fiques no meio da rua”. Os rapazes correm pela aldeia com chocalhos, e o meio da rua é o caminho deles.',
          },
        ],
      },
      desfile: {
        emoji: '🔔',
        text: 'De repente, ouvem-se chocalhos por todo o lado. Os rapazes mascarados correm pela aldeia, saltam e fazem barulho para espantar o inverno. Um deles detém-se à frente do Linu e estende-lhe a mão.',
        translation: 'De repente, ouvem-se chocalhos por toda parte. Os rapazes mascarados correm pela aldeia, pulam e fazem barulho para espantar o inverno. Um deles para na frente do Linu e estende a mão para ele.',
        choices: [
          { text: 'O Linu põe a máscara e corre com eles.', translation: 'O Linu põe a máscara e corre com eles.', next: 'corrida' },
          { text: 'O Linu prefere ficar a ver, encostado à parede.', translation: 'O Linu prefere ficar olhando, encostado na parede.', next: 'final_ver' },
        ],
      },
      corrida: {
        emoji: '🏃',
        text: 'O Linu corre pela aldeia com a máscara verde e azul, a tocar um chocalho pequenino. As pessoas riem-se e aplaudem o careto mais baixo de que há memória. Talvez ninguém acredite, mas este ano um pinguim entrou na festa!',
        translation: 'O Linu corre pela aldeia com a máscara verde e azul, tocando um chocalhinho. As pessoas riem e aplaudem o mascarado mais baixinho de que se tem notícia. Talvez ninguém acredite, mas este ano um pinguim entrou na festa!',
        choices: [{ text: '“Que noite! Agora estou cheio de fome.”', translation: '“Que noite! Agora estou morrendo de fome.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Em casa do Sr. Albino, a família serve caldo quente e fumeiro da terra. “Espero que voltes no próximo inverno”, diz ele, e oferece-lhe a máscara. O Linu promete pendurá-la na parede do iglu.',
        translation: 'Na casa do seu Albino, a família serve caldo quente e embutidos defumados da região. “Espero que você volte no próximo inverno”, diz ele, e dá a máscara de presente. O Linu promete pendurá-la na parede do iglu.',
        ending: { tone: 'bom', title: 'Careto de barbicha', message: 'O Linu correu com os mascarados numa festa de inverno transmontana. E ouviu muito conjuntivo: se quiseres, quando saírem, espero que voltes.' },
      },
      final_ver: {
        emoji: '👀',
        text: 'O Linu fica encostado à parede, a ver os rapazes passar. É bonito, mas fica com pena de não ter entrado na festa. A máscara verde e azul volta para a mochila, sem estreia.',
        translation: 'O Linu fica encostado na parede, vendo os rapazes passarem. É bonito, mas ele fica com pena de não ter entrado na festa. A máscara verde e azul volta para a mochila, sem estreia.',
        ending: { tone: 'neutro', title: 'Máscara na mochila', message: 'O Linu viu a festa, mas não participou. Tente de novo e aceite a mão do mascarado!' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'pt-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Letreiros na Batalha',
    emoji: '⛪',
    summary: 'No Mosteiro da Batalha, o Linu ajuda a revisar as placas novas e aprende o que o Acordo Ortográfico mudou em Portugal.',
    cultural_context:
      'O Mosteiro de Santa Maria da Vitória, na Batalha, foi mandado construir por D. João I depois da batalha de Aljubarrota (1385) e é Patrimônio Mundial da UNESCO desde 1983. As chamadas Capelas Imperfeitas nunca foram concluídas e continuam sem teto até hoje.',
    start: 'start',
    glossary: [
      ['a receção', 'a recepção (em Portugal o “p” caiu porque não se pronuncia)'],
      ['bem-vindo', 'bem-vindo (com hífen nos dois países)'],
      ['abril, setembro', 'abril, setembro (meses com minúscula; em Portugal, desde o Acordo)'],
      ['o fim de semana', 'o fim de semana (sem hífen depois do Acordo)'],
      ['o letreiro', 'a placa, o letreiro'],
      ['as Capelas Imperfeitas', 'as Capelas Imperfeitas (nome próprio, com maiúscula)'],
      ['aflito', 'aflito, preocupado'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'O Linu chega à Batalha numa manhã de outubro. À porta do mosteiro, a Leonor, que trabalha na receção, está aflita. “Os letreiros novos vão para a gráfica amanhã e ainda ninguém reviu os textos”, diz ela. “Ajudas-me?”',
        translation: 'O Linu chega à Batalha numa manhã de outubro. Na porta do mosteiro, a Leonor, que trabalha na recepção, está aflita. “As placas novas vão para a gráfica amanhã e ninguém revisou os textos ainda”, diz ela. “Você me ajuda?”',
        choices: [
          { text: '“Claro! Adoro ortografia.”', translation: '“Claro! Adoro ortografia.”', next: 'balcao' },
          {
            text: '“Os letreiros já estão impressos? Então vamos pendurá-los.”',
            translation: '“As placas já estão impressas? Então vamos pendurá-las.”',
            wrong: 'A Leonor disse que as placas “vão para a gráfica amanhã” e que ninguém revisou os textos: ainda não foram impressas. O trabalho agora é revisar a ortografia.',
          },
        ],
      },
      balcao: {
        emoji: '📝',
        text: 'No balcão, há uma folha com o primeiro letreiro: “Recepção” — “Bem vindo ao Mosteiro”. A Leonor suspira: “Isto foi escrito à moda antiga.” Depois explica que, em Portugal, desde o Acordo de 1990, o p de receção caiu, porque não se lê.',
        translation: 'No balcão, tem uma folha com a primeira placa: “Recepção” — “Bem vindo ao Mosteiro”. A Leonor suspira: “Isto foi escrito do jeito antigo.” Depois explica que, em Portugal, desde o Acordo de 1990, o p de “receção” caiu, porque não se pronuncia.',
        choices: [
          { text: '“Então fica ‘Receção — Bem-vindo ao Mosteiro’, com hífen.”', translation: '“Então fica ‘Receção — Bem-vindo ao Mosteiro’, com hífen.”', next: 'capelas' },
          {
            text: 'O Linu diz que fica como está, porque em Portugal o p de “recepção” se mantém sempre.',
            translation: 'O Linu diz que fica como está, porque em Portugal o p de “recepção” se mantém sempre.',
            wrong: 'A Leonor explicou o contrário: em Portugal o p CAIU (“receção”), porque não se pronuncia. No Brasil, onde o p é pronunciado, a grafia continua “recepção”. E “bem-vindo” leva hífen nos dois países.',
          },
        ],
      },
      capelas: {
        emoji: '🏚️',
        text: 'O segundo letreiro diz: “As capelas imperfeitas nunca foram acabadas.” A Leonor explica que “Capelas Imperfeitas” é um nome próprio e, por isso, leva maiúsculas. O Linu corrige, e ela sorri: “Estás a aprender depressa!”',
        translation: 'A segunda placa diz: “As capelas imperfeitas nunca foram acabadas.” A Leonor explica que “Capelas Imperfeitas” é um nome próprio e, por isso, leva maiúsculas. O Linu corrige, e ela sorri: “Você está aprendendo rápido!”',
        choices: [{ text: '“E o letreiro do horário?”', translation: '“E a placa do horário?”', next: 'datas' }],
      },
      datas: {
        emoji: '📅',
        text: 'O letreiro do horário tem outro problema: “Horário de verão: de Abril a Setembro”. A Leonor pergunta ao Linu o que é que o Acordo mudou nos meses. Ele pensa um bocadinho antes de responder.',
        translation: 'A placa do horário tem outro problema: “Horário de verão: de Abril a Setembro”. A Leonor pergunta ao Linu o que o Acordo mudou nos meses. Ele pensa um pouquinho antes de responder.',
        choices: [
          { text: '“Os meses passaram a escrever-se com minúscula: abril, setembro.”', translation: '“Os meses passaram a ser escritos com minúscula: abril, setembro.”', next: 'guia' },
          {
            text: '“Nada: em Portugal, os meses continuam com maiúscula.”',
            translation: '“Nada: em Portugal, os meses continuam com maiúscula.”',
            wrong: 'Com o Acordo de 1990, em Portugal os meses passaram a ser escritos com minúscula: “abril”, “setembro”. No Brasil já era assim antes do Acordo.',
          },
        ],
      },
      guia: {
        emoji: '🧑‍🎓',
        text: 'À tarde, chega à receção um grupo de estudantes brasileiros. Um deles lê o letreiro novo e pergunta, espantado, porque é que em Portugal se escreve “receção” sem p, se no Brasil a palavra leva p. O Linu olha para a Leonor, que lhe faz sinal para responder.',
        translation: 'De tarde, chega à recepção um grupo de estudantes brasileiros. Um deles lê a placa nova e pergunta, espantado, por que em Portugal se escreve “receção” sem p, se no Brasil é “recepção”. O Linu olha para a Leonor, que faz sinal para ele responder.',
        choices: [
          { text: 'O Linu explica a diferença aos estudantes.', translation: 'O Linu explica a diferença para os estudantes.', next: 'explica' },
          { text: 'O Linu encolhe os ombros e vai ver as Capelas Imperfeitas.', translation: 'O Linu dá de ombros e vai ver as Capelas Imperfeitas.', next: 'final_capelas' },
        ],
      },
      explica: {
        emoji: '🗣️',
        text: '“Em Portugal, o p caiu porque ninguém o pronuncia; no Brasil, fica, porque se diz”, explica o Linu. “As duas grafias estão certas, cada uma no seu país.” Os estudantes batem palmas ao pinguim professor.',
        translation: '“Em Portugal, o p caiu porque ninguém o pronuncia; no Brasil, fica, porque é falado”, explica o Linu. “As duas grafias estão certas, cada uma no seu país.” Os estudantes aplaudem o pinguim professor.',
        choices: [{ text: '“E ainda há mais diferenças para descobrir!”', translation: '“E ainda tem mais diferenças para descobrir!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ao fim do dia, os letreiros estão todos corrigidos. A Leonor escreve um último, só para ele: “Obrigada, Linu. Voltas no fim de semana?” Sem hífen, porque o Acordo também mudou isso.',
        translation: 'No fim do dia, as placas estão todas corrigidas. A Leonor escreve uma última, só para ele: “Obrigada, Linu. Volta no fim de semana?” Sem hífen, porque o Acordo também mudou isso.',
        ending: { tone: 'bom', title: 'Revisor do mosteiro', message: 'O Linu corrigiu as placas do Mosteiro da Batalha: receção sem p, bem-vindo com hífen, meses com minúscula e fim de semana sem hífen.' },
      },
      final_capelas: {
        emoji: '🌤️',
        text: 'O Linu deixa a Leonor responder e vai sozinho às Capelas Imperfeitas. Por cima dele, só há céu: seis séculos sem teto. É lindo, mas perdeu a oportunidade de brilhar como professor!',
        translation: 'O Linu deixa a Leonor responder e vai sozinho às Capelas Imperfeitas. Em cima dele, só tem céu: seis séculos sem teto. É lindo, mas ele perdeu a chance de brilhar como professor!',
        ending: { tone: 'neutro', title: 'Céu em vez de aula', message: 'As Capelas Imperfeitas são lindas, mas os estudantes ficaram sem a explicação. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'O tapete de Viana',
    emoji: '🌸',
    summary: 'Na Romaria d’Agonia, em Viana do Castelo, o Linu ajuda os vizinhos de uma amiga a fazer um tapete de sal colorido na rua.',
    cultural_context:
      'A Romaria de Nossa Senhora da Agonia, em Viana do Castelo, acontece em agosto e é famosa pelos trajes tradicionais, pelo ouro em filigrana usado pelas mordomas e pelos tapetes de sal colorido e flores feitos nas ruas da Ribeira durante a noite. O coração de Viana, em filigrana de ouro, é um dos símbolos da cidade.',
    start: 'start',
    glossary: [
      ['o fato', 'a roupa, o terno (“fato” em Portugal é roupa)'],
      ['o facto', 'o fato (acontecimento; em Portugal o c se pronuncia)'],
      ['pinguim-de-barbicha, erva-doce', 'pinguim-de-barbicha, erva-doce (espécies mantêm o hífen)'],
      ['a mordoma', 'a moça que desfila com o traje e o ouro da romaria'],
      ['o coração de Viana', 'a joia em forma de coração, em filigrana'],
      ['o sal tingido', 'o sal colorido'],
      ['um bocadinho', 'um pouquinho'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: 'Agosto em Viana do Castelo. A cidade está cheia de música e de gente vestida de vermelho, preto e ouro. A Carolina, amiga do Linu, manda-lhe uma mensagem: “Esta noite fazemos o tapete da nossa rua. Traz um fato velho, que o sal colorido suja tudo!”',
        translation: 'Agosto em Viana do Castelo. A cidade está cheia de música e de gente vestida de vermelho, preto e dourado. A Carolina, amiga do Linu, manda uma mensagem para ele: “Hoje à noite a gente faz o tapete da nossa rua. Traga uma roupa velha, porque o sal colorido suja tudo!”',
        choices: [
          { text: 'O Linu procura uma roupa velha na mala.', translation: 'O Linu procura uma roupa velha na mala.', next: 'rua' },
          {
            text: '“Um facto velho? Que notícia antiga queres que eu leve?”',
            translation: '“Um fato velho? Que notícia antiga você quer que eu leve?”',
            wrong: 'Em Portugal, “fato” (sem c) é ROUPA — terno, macacão, roupa de trabalho. “Facto” (com c, que lá se pronuncia) é o que no Brasil se escreve “fato” (acontecimento). A Carolina pediu uma roupa velha, porque o sal suja.',
          },
        ],
      },
      rua: {
        emoji: '🪣',
        text: 'À meia-noite, a rua da Carolina enche-se de vizinhos com baldes de sal tingido e cestos de pétalas. Com giz, desenham no chão um enorme coração de Viana. A avó da Carolina entrega ao Linu um cartão e pede-lhe que escreva quem fez o tapete.',
        translation: 'À meia-noite, a rua da Carolina se enche de vizinhos com baldes de sal colorido e cestos de pétalas. Com giz, eles desenham no chão um enorme coração de Viana. A avó da Carolina entrega ao Linu um cartão e pede que ele escreva quem fez o tapete.',
        choices: [{ text: '“Vou já escrever, com a minha letra mais bonita!”', translation: '“Vou escrever agora, com a minha letra mais bonita!”', next: 'cartao' }],
      },
      cartao: {
        emoji: '✍️',
        text: 'O Linu escreve: “Feito pelos vizinhos da rua e por um pinguim de barbicha”. A Carolina lê por cima do ombro e sorri: “Está quase.” Depois explica que os nomes de animais e de plantas mantêm o hífen, como erva-doce ou bem-me-quer.',
        translation: 'O Linu escreve: “Feito pelos vizinhos da rua e por um pinguim de barbicha”. A Carolina lê por cima do ombro e sorri: “Está quase.” Depois explica que os nomes de animais e de plantas mantêm o hífen, como erva-doce ou bem-me-quer.',
        choices: [
          { text: '“Então corrijo: pinguim-de-barbicha, com hífen.”', translation: '“Então corrijo: pinguim-de-barbicha, com hífen.”', next: 'tapete' },
          {
            text: '“Então o Acordo tirou o hífen de todas as palavras compostas, certo?”',
            translation: '“Então o Acordo tirou o hífen de todas as palavras compostas, certo?”',
            wrong: 'Não! A Carolina disse que os nomes de espécies de animais e de plantas MANTÊM o hífen: pinguim-de-barbicha, erva-doce, bem-me-quer. O Acordo tirou o hífen de algumas locuções, como “fim de semana”, mas não destas.',
          },
        ],
      },
      tapete: {
        emoji: '🎨',
        text: 'Durante a noite toda, trabalham de joelhos no chão. O sal verde, amarelo e azul forma flores, ondas e um barco. Às cinco da manhã, o tapete está pronto e a rua parece um quadro.',
        translation: 'Durante a noite inteira, eles trabalham de joelhos no chão. O sal verde, amarelo e azul forma flores, ondas e um barco. Às cinco da manhã, o tapete está pronto e a rua parece um quadro.',
        choices: [
          { text: '“Não durmo! Quero ver a procissão passar.”', translation: '“Não vou dormir! Quero ver a procissão passar.”', next: 'cortejo' },
          { text: '“Vou só descansar um bocadinho antes da procissão.”', translation: '“Vou só descansar um pouquinho antes da procissão.”', next: 'final_dormir' },
        ],
      },
      cortejo: {
        emoji: '🚶',
        text: 'De manhã, a procissão passa por cima do tapete e o desenho desaparece debaixo dos pés. O Linu fica triste, mas a avó explica: “É assim todos os anos. O tapete é feito para durar uma manhã.” Ao longe, já se ouvem os tambores do cortejo.',
        translation: 'De manhã, a procissão passa por cima do tapete e o desenho some debaixo dos pés. O Linu fica triste, mas a avó explica: “É assim todo ano. O tapete é feito para durar uma manhã.” Lá longe, já se ouvem os tambores do desfile.',
        choices: [{ text: '“Vamos ver o cortejo!”', translation: '“Vamos ver o desfile!”', next: 'mordomas' }],
      },
      mordomas: {
        emoji: '💛',
        text: 'As mordomas desfilam com trajes bordados e colares de ouro que passam de mães para filhas. A Carolina é uma delas e acena ao Linu. Um senhor ao lado explica que algumas peças têm mais de cem anos.',
        translation: 'As mordomas desfilam com trajes bordados e colares de ouro que passam de mãe para filha. A Carolina é uma delas e acena para o Linu. Um senhor ao lado explica que algumas peças têm mais de cem anos.',
        choices: [{ text: '“Que brilho! Quantos corações de Viana!”', translation: '“Que brilho! Quantos corações de Viana!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'À tarde, a Carolina oferece-lhe um coração de Viana pequenino, em filigrana. “É para te lembrares de nós”, diz ela. O Linu guarda-o no bolso do fato velho, ainda cheio de sal colorido.',
        translation: 'De tarde, a Carolina dá a ele um coraçãozinho de Viana, em filigrana. “É para você se lembrar da gente”, diz ela. O Linu guarda o coração no bolso da roupa velha, ainda cheia de sal colorido.',
        ending: { tone: 'bom', title: 'Coração de Viana', message: 'O Linu fez um tapete de sal numa noite de romaria e aprendeu: em Portugal, fato é roupa, facto é acontecimento, e pinguim-de-barbicha tem hífen.' },
      },
      final_dormir: {
        emoji: '😴',
        text: 'O Linu deita-se “só cinco minutos” e acorda ao meio-dia. Quando chega à rua, do tapete só restam algumas pétalas. Os vizinhos mostram-lhe as fotografias, a rir.',
        translation: 'O Linu se deita “só cinco minutinhos” e acorda ao meio-dia. Quando chega à rua, do tapete só sobraram algumas pétalas. Os vizinhos mostram as fotos para ele, rindo.',
        ending: { tone: 'neutro', title: 'Só as pétalas', message: 'O Linu fez o tapete, mas perdeu a procissão e o desfile das mordomas. Tente de novo e aguente acordado!' },
      },
    },
  },
  {
    id: 'pt-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'O pincel de Mértola',
    emoji: '🏺',
    summary: 'Em Mértola, o Linu entra numa escavação arqueológica, encontra um fragmento de cerâmica e aprende a preencher a ficha do achado.',
    cultural_context:
      'Mértola, à beira do rio Guadiana, é conhecida como “vila-museu”: tem vestígios romanos, islâmicos e medievais espalhados pelo centro histórico. A igreja matriz foi uma mesquita e ainda conserva, no interior, o mihrab, o nicho que indicava a direção de Meca.',
    start: 'start',
    glossary: [
      ['o objeto', 'o objeto (em Portugal, sem c desde o Acordo)'],
      ['setor / sector', 'setor (em Portugal as duas grafias são aceitas)'],
      ['registar', 'registrar'],
      ['a equipa', 'a equipe'],
      ['a exceção', 'a exceção'],
      ['o achado', 'o achado, a descoberta'],
      ['a esplanada', 'as mesas ao ar livre de um café'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Julho em Mértola. O sol queima as muralhas e o rio Guadiana brilha lá em baixo. O Linu junta-se a uma equipa de arqueólogos que está a escavar perto do castelo.',
        translation: 'Julho em Mértola. O sol queima as muralhas e o rio Guadiana brilha lá embaixo. O Linu se junta a uma equipe de arqueólogos que está escavando perto do castelo.',
        choices: [{ text: '“Bom dia! Onde posso ajudar?”', translation: '“Bom dia! Onde posso ajudar?”', next: 'escavacao' }],
      },
      escavacao: {
        emoji: '🖌️',
        text: 'A arqueóloga Filipa dá-lhe uma pá pequena e um pincel. “Aqui é tudo devagar: um objeto pode ter mil anos”, explica. “Se encontrares alguma coisa, não lhe toques; chama-me.”',
        translation: 'A arqueóloga Filipa dá a ele uma pazinha e um pincel. “Aqui é tudo devagar: um objeto pode ter mil anos”, explica. “Se você encontrar alguma coisa, não toque; me chame.”',
        choices: [
          { text: 'O Linu limpa a terra com o pincel, devagarinho.', translation: 'O Linu limpa a terra com o pincel, devagarinho.', next: 'achado' },
          {
            text: '“Se encontrar alguma coisa, tiro-a logo e levo-a para a tenda.”',
            translation: '“Se eu encontrar alguma coisa, tiro logo e levo para a barraca.”',
            wrong: 'A Filipa pediu o contrário: “não lhe toques; chama-me” (não toque, me chame). Na arqueologia, a posição exata do objeto na terra também é informação.',
          },
        ],
      },
      achado: {
        emoji: '✨',
        text: 'Duas horas depois, o pincel bate em qualquer coisa dura. É um fragmento de cerâmica verde e branca, com desenhos geométricos. O Linu não lhe toca e chama a Filipa.',
        translation: 'Duas horas depois, o pincel bate em alguma coisa dura. É um fragmento de cerâmica verde e branca, com desenhos geométricos. O Linu não toca nele e chama a Filipa.',
        choices: [{ text: '“Filipa! Encontrei uma coisa!”', translation: '“Filipa! Encontrei uma coisa!”', next: 'filipa' }],
      },
      filipa: {
        emoji: '🧐',
        text: '“É cerâmica islâmica, provavelmente do século XII”, diz a Filipa, emocionada. “Agora tens de registar o achado na ficha.” E avisa: “Escreve com atenção, porque estas fichas vão para o arquivo.”',
        translation: '“É cerâmica islâmica, provavelmente do século XII”, diz a Filipa, emocionada. “Agora você tem que registrar o achado na ficha.” E avisa: “Escreva com atenção, porque estas fichas vão para o arquivo.”',
        choices: [{ text: '“Vou preencher a ficha já.”', translation: '“Vou preencher a ficha agora.”', next: 'ficha' }],
      },
      ficha: {
        emoji: '📋',
        text: 'Na ficha, há espaços para o objeto, o local e a descrição. O Linu escreve “setor 3” e depois hesita: num cartaz antigo leu “sector”. A Filipa tranquiliza-o: “Em Portugal, as duas grafias estão certas; é uma dupla grafia.”',
        translation: 'Na ficha, tem espaços para o objeto, o local e a descrição. O Linu escreve “setor 3” e depois hesita: num cartaz antigo ele leu “sector”. A Filipa o tranquiliza: “Em Portugal, as duas grafias estão certas; é uma dupla grafia.”',
        choices: [
          { text: '“Que bom! Então deixo ‘setor’, como está.”', translation: '“Que bom! Então deixo ‘setor’, como está.”', next: 'museu' },
          {
            text: '“Então tenho de riscar ‘setor’ e escrever ‘sector’.”',
            translation: '“Então tenho que riscar ‘setor’ e escrever ‘sector’.”',
            wrong: 'A Filipa disse que as DUAS grafias estão certas em Portugal: é uma dupla grafia, porque há quem pronuncie o c e quem não pronuncie. Não é preciso riscar nada.',
          },
        ],
      },
      museu: {
        emoji: '🕌',
        text: 'À tarde, a Filipa leva-o à igreja matriz, que antes foi uma mesquita. Lá dentro, ainda se vê o nicho decorado que indicava a direção de Meca. “É uma exceção rara em Portugal”, diz ela.',
        translation: 'De tarde, a Filipa leva o Linu à igreja matriz, que antes foi uma mesquita. Lá dentro, ainda se vê o nicho decorado que indicava a direção de Meca. “É uma exceção rara em Portugal”, diz ela.',
        choices: [{ text: '“Aqui, a história vê-se em cada parede!”', translation: '“Aqui, a história aparece em cada parede!”', next: 'rio' }],
      },
      rio: {
        emoji: '🌅',
        text: 'Ao pôr do sol, a equipa desce ao rio para jantar numa esplanada. A Filipa pergunta ao Linu se quer voltar amanhã, às seis da manhã, antes de o calor apertar.',
        translation: 'No pôr do sol, a equipe desce até o rio para jantar nas mesinhas de um café. A Filipa pergunta ao Linu se ele quer voltar amanhã, às seis da manhã, antes que o calor aperte.',
        choices: [
          { text: '“Às seis estou lá, com o meu pincel!”', translation: '“Às seis estou lá, com o meu pincel!”', next: 'final_bom' },
          { text: '“Às seis? Talvez durma até mais tarde…”', translation: '“Às seis? Talvez eu durma até mais tarde…”', next: 'final_dorme' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'No dia seguinte, o Linu escava ao lado da Filipa e encontra uma moeda pequenina. Desta vez, preenche a ficha sozinho, sem um único erro. Na tenda, a equipa passa a chamar-lhe “o pinguim arqueólogo”.',
        translation: 'No dia seguinte, o Linu escava ao lado da Filipa e encontra uma moedinha. Desta vez, preenche a ficha sozinho, sem um único erro. Na barraca, a equipe passa a chamá-lo de “o pinguim arqueólogo”.',
        ending: { tone: 'bom', title: 'Pinguim arqueólogo', message: 'O Linu achou cerâmica islâmica e uma moeda, e preencheu as fichas sem erro: objeto sem c, setor ou sector, equipa e registar à portuguesa.' },
      },
      final_dorme: {
        emoji: '😴',
        text: 'O Linu acorda às dez, com o sol já alto. Quando chega ao castelo, a equipa já parou por causa do calor. Fica a conversar à sombra, mas sem achados novos.',
        translation: 'O Linu acorda às dez, com o sol já alto. Quando chega ao castelo, a equipe já parou por causa do calor. Ele fica conversando na sombra, mas sem descobertas novas.',
        ending: { tone: 'neutro', title: 'Sol demais', message: 'No verão alentejano, a escavação começa cedo. Tente de novo e acorde às seis!' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'pt-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'O barro do Corval',
    emoji: '🏺',
    summary: 'Perto de Monsaraz, o Linu visita uma olaria de São Pedro do Corval, experimenta a roda de oleiro e pinta a sua primeira peça.',
    cultural_context:
      'São Pedro do Corval, no município de Reguengos de Monsaraz, é um dos maiores centros de olaria de Portugal, com dezenas de oficinas de cerâmica pintada à mão. A vila medieval de Monsaraz, cercada de muralhas, fica no alto de um morro com vista para o grande lago de Alqueva.',
    start: 'start',
    glossary: [
      ['Faz três dias que…', 'Faz três dias que… (fazer impessoal: sempre no singular)'],
      ['Há peças que…', 'Há peças que… (haver impessoal: sempre no singular)'],
      ['cujo nome / cujas cores', 'cujo nome / cujas cores (concorda com a coisa possuída)'],
      ['Aonde vais?', 'Aonde você vai? (aonde = para onde, com verbo de movimento)'],
      ['a roda de oleiro', 'o torno de oleiro'],
      ['o alguidar', 'a bacia de barro'],
      ['partido', 'quebrado'],
      ['a papoila', 'a papoula'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Faz três dias que o Linu está no Alentejo e ainda não viu uma única nuvem. Do alto das muralhas de Monsaraz, olha para o lago de Alqueva, onde se refletem as oliveiras. Ali perto há uma aldeia cujas olarias são famosas em todo o país: São Pedro do Corval.',
        translation: 'Faz três dias que o Linu está no Alentejo e ainda não viu uma única nuvem. Do alto das muralhas de Monsaraz, ele olha o lago de Alqueva, onde as oliveiras se refletem. Ali perto tem uma aldeia cujas olarias são famosas no país inteiro: São Pedro do Corval.',
        choices: [
          { text: '“Vou ao Corval hoje mesmo.”', translation: '“Vou ao Corval hoje mesmo.”', next: 'corval' },
          {
            text: '“Com três dias de chuva, é melhor ficar em casa.”',
            translation: '“Com três dias de chuva, é melhor ficar em casa.”',
            wrong: 'O texto diz o contrário: o Linu “ainda não viu uma única nuvem”. E repare: “Faz três dias” fica no singular — o verbo “fazer” indicando tempo é impessoal, na norma culta de Portugal e do Brasil (“fazem três dias” é erro nos dois países).',
          },
        ],
      },
      corval: {
        emoji: '👩‍🎨',
        text: 'A Dona Graça, uma oleira de mãos cheias de barro, recebe-o à porta da oficina. “Aonde é que um pinguim vai com este calor? Entra, que lá dentro está fresco.” Na oficina, há centenas de pratos e alguidares a secar, a maioria pintados à mão.',
        translation: 'A dona Graça, uma oleira de mãos cheias de barro, recebe o Linu na porta da oficina. “Aonde um pinguim vai com esse calor? Entra, que lá dentro está fresco.” Na oficina, tem centenas de pratos e bacias secando, a maioria pintados à mão.',
        choices: [
          { text: '“Posso ver a roda a trabalhar?”', translation: '“Posso ver o torno funcionando?”', next: 'roda' },
          { text: '“Quem pintou todas estas peças?”', translation: '“Quem pintou todas essas peças?”', next: 'pintura' },
        ],
      },
      roda: {
        emoji: '🌀',
        text: 'A Dona Graça senta-se à roda, carrega no pedal e o barro começa a subir como se tivesse vida. “Esta roda era do meu avô, cujo nome ainda está gravado na madeira”, conta ela. “Queres experimentar?”',
        translation: 'A dona Graça se senta ao torno, pisa no pedal e o barro começa a subir como se tivesse vida. “Este torno era do meu avô, cujo nome ainda está gravado na madeira”, conta ela. “Quer experimentar?”',
        choices: [
          { text: 'O Linu senta-se à roda, cheio de coragem.', translation: 'O Linu se senta ao torno, cheio de coragem.', next: 'experimenta' },
          {
            text: '“O nome gravado na madeira é o seu, Dona Graça?”',
            translation: '“O nome gravado na madeira é o seu, dona Graça?”',
            wrong: '“cujo nome” se refere ao AVÔ: “a roda era do meu avô, cujo nome está gravado” = o nome do avô está gravado. O relativo “cujo” liga o dono (avô) à coisa possuída (nome) e concorda com ela.',
          },
        ],
      },
      experimenta: {
        emoji: '🥣',
        text: 'O primeiro vaso do Linu tomba para o lado. O segundo parece um chapéu. Ao terceiro, com a ajuda da Dona Graça, sai uma tigela torta mas inteira, e ele fica orgulhosíssimo.',
        translation: 'O primeiro vaso do Linu tomba para o lado. O segundo parece um chapéu. No terceiro, com a ajuda da dona Graça, sai uma tigela torta mas inteira, e ele fica orgulhosíssimo.',
        choices: [{ text: '“E agora? Já pode ir ao forno?”', translation: '“E agora? Já pode ir para o forno?”', next: 'forno' }],
      },
      pintura: {
        emoji: '🖌️',
        text: '“Aqui pintamos eu e as minhas filhas”, responde a Dona Graça. “São flores, pássaros e cenas do campo, desenhos cujas cores lembram a terra do Alentejo.” Em cima da mesa, há um prato por pintar.',
        translation: '“Aqui pintamos eu e as minhas filhas”, responde a dona Graça. “São flores, pássaros e cenas do campo, desenhos cujas cores lembram a terra do Alentejo.” Em cima da mesa, tem um prato ainda sem pintura.',
        choices: [{ text: '“Posso pintar aquele prato?”', translation: '“Posso pintar aquele prato?”', next: 'prato' }],
      },
      prato: {
        emoji: '🐧',
        text: 'O Linu pinta um pinguim no meio de um campo de papoilas. A filha mais nova, a Rita, ri-se: “Nunca houve pinguins no Alentejo, mas agora há um!” A Dona Graça pendura o prato ao lado dos outros, para secar.',
        translation: 'O Linu pinta um pinguim no meio de um campo de papoulas. A filha mais nova, a Rita, ri: “Nunca houve pinguins no Alentejo, mas agora tem um!” A dona Graça pendura o prato ao lado dos outros, para secar.',
        choices: [{ text: '“Quando é que fica pronto?”', translation: '“Quando fica pronto?”', next: 'forno' }],
      },
      forno: {
        emoji: '🔥',
        text: '“Tudo o que se faz hoje vai ao forno amanhã, onde fica mais de dez horas”, explica a Dona Graça. “Podes vir buscar a tua peça depois de amanhã, ou envio-ta pelo correio.” Lá fora, faz um calor de quarenta graus.',
        translation: '“Tudo o que se faz hoje vai para o forno amanhã, onde fica mais de dez horas”, explica a dona Graça. “Você pode vir buscar sua peça depois de amanhã, ou eu mando pelo correio.” Lá fora, faz um calor de quarenta graus.',
        choices: [
          { text: '“Venho buscá-la depois de amanhã!”', translation: '“Venho buscar depois de amanhã!”', next: 'final_bom' },
          { text: '“Prefiro que ma envie pelo correio.”', translation: '“Prefiro que a senhora mande pelo correio.”', next: 'final_correio' },
          {
            text: '“Então amanhã à tarde já a posso levar.”',
            translation: '“Então amanhã à tarde já posso levar.”',
            wrong: 'A peça só vai ao forno AMANHÃ e fica lá mais de dez horas; por isso a dona Graça disse para buscar “depois de amanhã”.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Dois dias depois, a peça do Linu sai do forno, dura e brilhante. A Dona Graça embrulha-a em jornal e diz: “Há peças que valem pelo trabalho que deram.” O Linu leva-a nos braços como se fosse de ouro.',
        translation: 'Dois dias depois, a peça do Linu sai do forno, dura e brilhante. A dona Graça embrulha em jornal e diz: “Tem peças que valem pelo trabalho que deram.” O Linu leva nos braços como se fosse de ouro.',
        ending: { tone: 'bom', title: 'Oleiro por um dia', message: 'O Linu fez sua primeira peça no Corval. E praticou a concordância difícil: faz três dias, há peças, nunca houve pinguins, o avô cujo nome.' },
      },
      final_correio: {
        emoji: '📦',
        text: 'Um mês depois, chega-lhe uma caixa com a peça bem embrulhada. Infelizmente, veio partida em dois bocados. Houve todo o cuidado a embrulhar, mas a viagem foi mais forte!',
        translation: 'Um mês depois, chega uma caixa para ele com a peça bem embrulhada. Infelizmente, veio quebrada em dois pedaços. Houve todo o cuidado na embalagem, mas a viagem foi mais forte!',
        ending: { tone: 'neutro', title: 'Peça em dois pedaços', message: 'O correio não perdoou. Da próxima vez, o Linu vai buscar a peça pessoalmente!' },
      },
    },
  },
  {
    id: 'pt-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Cegonhas no Cabo Sardão',
    emoji: '🪶',
    summary: 'Na Costa Vicentina, o Linu caminha pelo Trilho dos Pescadores e descobre cegonhas que fazem ninho nas falésias sobre o mar.',
    cultural_context:
      'No Cabo Sardão, na Costa Vicentina, cegonhas-brancas fazem ninho nas falésias sobre o oceano, um caso raríssimo no mundo. O Trilho dos Pescadores, da Rota Vicentina, acompanha o litoral pelos caminhos que os pescadores usavam para chegar aos pontos de pesca.',
    start: 'start',
    glossary: [
      ['Há dois dias que…', 'Faz dois dias que… (haver impessoal, no singular)'],
      ['Existem duas setas.', 'Existem duas setas. (“existir” concorda com o sujeito)'],
      ['cujos donos', 'cujos donos (concorda com “donos”)'],
      ['aonde / onde', 'aonde (para onde, com movimento) / onde (lugar fixo)'],
      ['a falésia', 'o penhasco à beira-mar'],
      ['o cantil', 'o cantil'],
      ['a boleia', 'a carona'],
      ['o sumo', 'o suco'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Há dois dias que o Linu caminha pelo Trilho dos Pescadores. A areia solta cansa as patas, mas a vista compensa: falésias, ondas e praias vazias. Hoje, o destino é o Cabo Sardão, onde o espera o Duarte, um guia da região.',
        translation: 'Faz dois dias que o Linu caminha pelo Trilho dos Pescadores. A areia fofa cansa as patas, mas a vista compensa: penhascos, ondas e praias vazias. Hoje, o destino é o Cabo Sardão, onde o Duarte, um guia da região, está esperando por ele.',
        choices: [{ text: '“Duarte! Cheguei ao farol!”', translation: '“Duarte! Cheguei ao farol!”', next: 'farol' }],
      },
      farol: {
        emoji: '🗼',
        text: 'Junto ao farol, o Duarte aponta para as rochas lá em baixo. “Estás a ver aqueles ninhos enormes, cujos donos andam a voar por cima do mar? São de cegonhas!” O Linu não acredita: sempre pensou que as cegonhas faziam ninho em chaminés e em torres de igreja.',
        translation: 'Perto do farol, o Duarte aponta para as rochas lá embaixo. “Está vendo aqueles ninhos enormes, cujos donos estão voando por cima do mar? São de cegonhas!” O Linu não acredita: sempre achou que as cegonhas faziam ninho em chaminés e em torres de igreja.',
        choices: [
          { text: '“Cegonhas por cima do mar? Nunca tinha visto nada assim!”', translation: '“Cegonhas em cima do mar? Nunca tinha visto nada assim!”', next: 'cegonhas' },
          {
            text: '“Ah, então são ninhos de gaivotas.”',
            translation: '“Ah, então são ninhos de gaivotas.”',
            wrong: 'O Duarte disse que os ninhos são de CEGONHAS: “aqueles ninhos, cujos donos andam a voar […]? São de cegonhas!”. O “cujos” liga os ninhos aos donos deles, as cegonhas.',
          },
        ],
      },
      cegonhas: {
        emoji: '🌬️',
        text: '“Aqui sempre houve poucas árvores e muito vento”, explica o Duarte. “A maioria das cegonhas prefere as torres, mas algumas escolheram as falésias, onde nenhum predador chega.” Depois pergunta ao Linu aonde quer ir a seguir.',
        translation: '“Aqui sempre houve poucas árvores e muito vento”, explica o Duarte. “A maioria das cegonhas prefere as torres, mas algumas escolheram os penhascos, onde nenhum predador chega.” Depois pergunta ao Linu aonde ele quer ir em seguida.',
        choices: [
          { text: '“Quero descer à praia lá em baixo.”', translation: '“Quero descer até a praia lá embaixo.”', next: 'descida' },
          { text: '“Prefiro seguir o trilho até à próxima aldeia.”', translation: '“Prefiro seguir a trilha até a próxima vila.”', next: 'trilho' },
        ],
      },
      descida: {
        emoji: '⚠️',
        text: 'O caminho até à praia é estreito e escorregadio. “Existem aqui duas setas pintadas nas rochas”, avisa o Duarte. “Segue a azul, que desce até à areia; a vermelha, cuja tinta já está a desaparecer, acaba num pesqueiro perigoso.”',
        translation: 'O caminho até a praia é estreito e escorregadio. “Existem aqui duas setas pintadas nas rochas”, avisa o Duarte. “Siga a azul, que desce até a areia; a vermelha, cuja tinta já está sumindo, termina num ponto de pesca perigoso.”',
        choices: [
          { text: 'O Linu segue a seta azul, com cuidado.', translation: 'O Linu segue a seta azul, com cuidado.', next: 'praia' },
          {
            text: 'O Linu segue a seta vermelha, porque é a mais antiga.',
            translation: 'O Linu segue a seta vermelha, porque é a mais antiga.',
            wrong: 'O Duarte disse que a seta vermelha, “cuja tinta já está a desaparecer”, termina “num pesqueiro perigoso”. A segura, que desce até a areia, é a AZUL.',
          },
        ],
      },
      praia: {
        emoji: '🌊',
        text: 'Na praia não há ninguém, só pegadas de gaivotas. O Linu mergulha na água fria e sente-se em casa. Fazia meses que não nadava num mar tão limpo.',
        translation: 'Na praia não tem ninguém, só pegadas de gaivotas. O Linu mergulha na água fria e se sente em casa. Fazia meses que ele não nadava num mar tão limpo.',
        choices: [{ text: '“Duarte, anda nadar também!”', translation: '“Duarte, vem nadar também!”', next: 'final_bom' }],
      },
      trilho: {
        emoji: '🌼',
        text: 'O trilho segue pela falésia, entre plantas rasteiras e flores amarelas. Ao fim de duas horas, já restam poucas forças e não há uma gota de água no cantil. Ao longe, vê-se a Zambujeira do Mar, onde há cafés e sombra.',
        translation: 'A trilha segue pelo penhasco, entre plantas rasteiras e flores amarelas. Depois de duas horas, já restam poucas forças e não tem uma gota de água no cantil. Lá longe, dá para ver a Zambujeira do Mar, onde tem cafés e sombra.',
        choices: [
          { text: '“Vamos até lá, devagar.”', translation: '“Vamos até lá, devagar.”', next: 'final_zambujeira' },
          { text: '“Descansamos aqui e voltamos para trás?”', translation: '“A gente descansa aqui e volta?”', next: 'final_volta' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'O Duarte ri-se e fica na areia, a ver. Mais tarde, sobem de novo ao farol para ver o pôr do sol, com as cegonhas a regressar aos ninhos. O Linu escreve no caderno: “Houve dias bons nesta viagem, mas nenhum como este.”',
        translation: 'O Duarte ri e fica na areia, olhando. Mais tarde, eles sobem de novo ao farol para ver o pôr do sol, com as cegonhas voltando para os ninhos. O Linu escreve no caderno: “Houve dias bons nesta viagem, mas nenhum como este.”',
        ending: { tone: 'bom', title: 'Ninhos sobre o mar', message: 'O Linu viu as cegonhas das falésias e nadou numa praia deserta. E praticou: há dois dias, houve dias bons, a maioria prefere, os ninhos cujos donos.' },
      },
      final_zambujeira: {
        emoji: '🧃',
        text: 'Chegam à Zambujeira ao pôr do sol, cansados e cheios de sede. No café, bebem dois sumos de laranja de seguida. O Linu adormece a pensar nas cegonhas que vivem por cima das ondas.',
        translation: 'Eles chegam à Zambujeira no pôr do sol, cansados e morrendo de sede. No café, tomam dois sucos de laranja em seguida. O Linu pega no sono pensando nas cegonhas que vivem em cima das ondas.',
        ending: { tone: 'bom', title: 'Trilho cumprido', message: 'Mais uma etapa do Trilho dos Pescadores! O Linu chegou à Zambujeira com as cegonhas na memória.' },
      },
      final_volta: {
        emoji: '🚗',
        text: 'Voltam ao farol sem pressa e apanham boleia de um pescador até à vila. O Linu não chega à Zambujeira, mas guarda uma fotografia das cegonhas. Amanhã, talvez, continue o trilho.',
        translation: 'Eles voltam ao farol sem pressa e pegam carona com um pescador até a vila. O Linu não chega à Zambujeira, mas guarda uma foto das cegonhas. Amanhã, talvez, ele continue a trilha.',
        ending: { tone: 'neutro', title: 'Fica para amanhã', message: 'Faltou fôlego para a etapa inteira. Tente de novo e leve mais água no cantil!' },
      },
    },
  },
  {
    id: 'pt-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Cavalos-marinhos da Ria',
    emoji: '🐴',
    summary: 'Em Olhão, o Linu ajuda uma bióloga a contar cavalos-marinhos na Ria Formosa e conhece as mariscadoras da ria.',
    cultural_context:
      'A Ria Formosa, entre Faro e Olhão, é um sistema de lagunas protegido como parque natural e abriga uma das maiores populações de cavalos-marinhos do mundo, com duas espécies: a de focinho comprido e a de focinho curto. Em Olhão, os dois mercados de tijolo vermelho à beira da ria são um símbolo da cidade.',
    start: 'start',
    glossary: [
      ['Há menos do que havia.', 'Tem menos do que tinha. (haver impessoal, no singular)'],
      ['Faltam poucos minutos.', 'Faltam poucos minutos. (sujeito posposto, no plural)'],
      ['a maioria esconde-se', 'a maioria se esconde'],
      ['cujo trabalho', 'cujo trabalho'],
      ['a mariscadora', 'a catadora de mariscos'],
      ['a amêijoa', 'o vôngole, a amêijoa'],
      ['dezanove', 'dezenove'],
      ['vazar (a maré)', 'baixar, secar (a maré)'],
    ],
    nodes: {
      start: {
        emoji: '🧺',
        text: 'Às sete da manhã, o mercado de Olhão já cheira a peixe fresco e a laranjas. O Linu encontra a Joana, uma bióloga cujo trabalho é contar cavalos-marinhos na Ria Formosa. “Há hoje muito menos cavalos-marinhos do que havia há vinte anos”, explica ela. “Por isso, contamo-los todos os anos.”',
        translation: 'Às sete da manhã, o mercado de Olhão já tem cheiro de peixe fresco e de laranja. O Linu encontra a Joana, uma bióloga cujo trabalho é contar cavalos-marinhos na Ria Formosa. “Hoje tem muito menos cavalos-marinhos do que tinha vinte anos atrás”, explica ela. “Por isso, a gente conta todos eles todo ano.”',
        choices: [
          { text: '“Posso ajudar na contagem?”', translation: '“Posso ajudar na contagem?”', next: 'barco' },
          {
            text: '“Que bom que agora há mais cavalos-marinhos do que antes!”',
            translation: '“Que bom que agora tem mais cavalos-marinhos do que antes!”',
            wrong: 'A Joana disse o contrário: há “muito MENOS” cavalos-marinhos do que havia vinte anos atrás. Por isso eles são contados todo ano. E note o “haver” impessoal, no singular: “há”, “havia”.',
          },
        ],
      },
      barco: {
        emoji: '🚤',
        text: 'Vão de barco até um prado de ervas marinhas, onde a água é baixa e transparente. “Existem duas espécies na ria: a de focinho comprido e a de focinho curto”, explica a Joana. “A maioria esconde-se nas ervas; é preciso olhar com paciência e nunca lhes tocar.”',
        translation: 'Eles vão de barco até um campo de ervas marinhas, onde a água é rasa e transparente. “Existem duas espécies na ria: a de focinho comprido e a de focinho curto”, explica a Joana. “A maioria se esconde nas ervas; é preciso olhar com paciência e nunca tocar neles.”',
        choices: [
          { text: 'O Linu põe a máscara e mergulha.', translation: 'O Linu põe a máscara e mergulha.', next: 'mergulho' },
          { text: 'O Linu fica no barco para tomar notas.', translation: 'O Linu fica no barco para anotar.', next: 'anotar' },
        ],
      },
      mergulho: {
        emoji: '🤿',
        text: 'Debaixo de água, tudo parece verde e dourado. Ao princípio, o Linu não vê nada; depois, repara num focinho comprido agarrado a uma erva. Faltam poucos minutos para a maré começar a vazar.',
        translation: 'Debaixo da água, tudo parece verde e dourado. No começo, o Linu não vê nada; depois, repara num focinho comprido agarrado a uma erva. Faltam poucos minutos para a maré começar a baixar.',
        choices: [
          { text: 'O Linu conta-o e sobe para avisar a Joana.', translation: 'O Linu conta o cavalo-marinho e sobe para avisar a Joana.', next: 'mare' },
          {
            text: 'O Linu pega no cavalo-marinho para o mostrar à Joana.',
            translation: 'O Linu pega o cavalo-marinho para mostrar à Joana.',
            wrong: 'A Joana avisou que é preciso olhar com paciência e “nunca lhes tocar” (nunca tocar neles). Os cavalos-marinhos são frágeis: conta-se sem tirar da água.',
          },
        ],
      },
      anotar: {
        emoji: '📋',
        text: 'A Joana mergulha e o Linu fica no barco, com a prancheta. Ela sobe de vez em quando e dita os números: “Três de focinho comprido, um de focinho curto.” Ao fim de uma hora, há dezanove cavalos-marinhos na folha.',
        translation: 'A Joana mergulha e o Linu fica no barco, com a prancheta. Ela sobe de vez em quando e dita os números: “Três de focinho comprido, um de focinho curto.” Depois de uma hora, são dezenove cavalos-marinhos na folha.',
        choices: [{ text: '“Dezanove! E ainda faltam as ervas do outro lado.”', translation: '“Dezenove! E ainda faltam as ervas do outro lado.”', next: 'mare' }],
      },
      mare: {
        emoji: '🌊',
        text: 'A maré começa a vazar e a água desce depressa. A Joana diz que é hora de voltar, antes que o barco fique preso na lama. No caminho, passam por mariscadoras que apanham amêijoas nos viveiros, dobradas sobre a areia.',
        translation: 'A maré começa a baixar e a água desce rápido. A Joana diz que é hora de voltar, antes que o barco fique preso na lama. No caminho, eles passam por catadoras que colhem vôngoles nos viveiros, curvadas sobre a areia.',
        choices: [
          { text: '“Podemos parar um bocadinho para falar com elas?”', translation: '“Podemos parar um pouquinho para falar com elas?”', next: 'mariscadoras' },
          { text: '“Vamos direitos ao porto.”', translation: '“Vamos direto para o porto.”', next: 'final_bom' },
        ],
      },
      mariscadoras: {
        emoji: '🐚',
        text: 'Uma das mariscadoras, a Dona Fátima, mostra-lhes o balde cheio. “Faz quarenta anos que trabalho nesta ria, onde já a minha mãe trabalhava.” Convida-os a ficar para provar amêijoas à Bulhão Pato, mas a água continua a baixar.',
        translation: 'Uma das catadoras, a dona Fátima, mostra para eles o balde cheio. “Faz quarenta anos que trabalho nesta ria, onde minha mãe já trabalhava.” Ela os convida para ficar e provar vôngoles à Bulhão Pato, mas a água continua baixando.',
        choices: [
          { text: '“Obrigado, fica para outra vez: a maré está a vazar!”', translation: '“Obrigado, fica para outra vez: a maré está baixando!”', next: 'final_bom' },
          { text: '“Ficamos! Umas amêijoas nunca fizeram mal a ninguém.”', translation: '“A gente fica! Uns vôngoles nunca fizeram mal a ninguém.”', next: 'final_lama' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Chegam ao porto de Olhão com pouca água debaixo do barco, mesmo a tempo. A Joana soma os números do dia: vinte e três cavalos-marinhos, mais do que no ano passado. “Houve boas notícias hoje”, diz ela, e o Linu sorri de orgulho.',
        translation: 'Eles chegam ao porto de Olhão com pouca água embaixo do barco, bem a tempo. A Joana soma os números do dia: vinte e três cavalos-marinhos, mais do que no ano passado. “Houve boas notícias hoje”, diz ela, e o Linu sorri de orgulho.',
        ending: { tone: 'bom', title: 'Contagem feita', message: 'O Linu ajudou a contar os cavalos-marinhos da Ria Formosa. E praticou: há menos do que havia, faltam poucos minutos, houve boas notícias.' },
      },
      final_lama: {
        emoji: '🦀',
        text: 'As amêijoas estão deliciosas, mas, quando voltam ao barco, ele está assente na lama. Têm de esperar horas pela maré seguinte. O Linu aproveita para contar caranguejos, que não faltam.',
        translation: 'Os vôngoles estão deliciosos, mas, quando eles voltam ao barco, ele está encalhado na lama. Eles têm que esperar horas pela maré seguinte. O Linu aproveita para contar caranguejos, que não faltam.',
        ending: { tone: 'neutro', title: 'Encalhados na ria', message: 'Vôngoles deliciosos, barco encalhado. Na Ria Formosa, quem manda é a maré. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'pt-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Golfinhos do Sado',
    emoji: '🐬',
    summary: 'Em Setúbal, o Linu escreve um e-mail formal para se candidatar como voluntário na observação dos golfinhos do Sado.',
    cultural_context:
      'O estuário do Sado, junto a Setúbal, tem uma das poucas comunidades residentes de golfinhos-nariz-de-garrafa (em Portugal, “roazes”) da Europa. A Serra da Arrábida, entre Setúbal e Sesimbra, é parque natural desde 1976 e cai a pique sobre praias de água turquesa. Em Portugal, é comum tratar por “doutor” ou “doutora” quem tem curso superior.',
    start: 'start',
    glossary: [
      ['Exma. Senhora Dr.ª', 'Prezada Senhora Doutora (Excelentíssima Senhora Doutora)'],
      ['Venho, por este meio…', 'Venho por meio deste(a)…'],
      ['a candidatura', 'a candidatura, a inscrição'],
      ['Com os melhores cumprimentos', 'Atenciosamente / Cordialmente'],
      ['o correio eletrónico', 'o correio eletrônico, o e-mail'],
      ['fico ao dispor', 'fico à disposição'],
      ['o roaz', 'o golfinho-nariz-de-garrafa'],
      ['o prazo', 'o prazo'],
    ],
    nodes: {
      start: {
        emoji: '📌',
        text: 'Na marina de Setúbal, o Linu lê um anúncio: “Procuram-se voluntários para a observação de golfinhos no estuário do Sado. As candidaturas devem ser enviadas por correio eletrónico à Dr.ª Helena Vaz até sexta-feira.” Hoje é quarta-feira. O Linu decide candidatar-se.',
        translation: 'Na marina de Setúbal, o Linu lê um anúncio: “Procuram-se voluntários para a observação de golfinhos no estuário do Sado. As inscrições devem ser enviadas por e-mail à Dra. Helena Vaz até sexta-feira.” Hoje é quarta-feira. O Linu decide se candidatar.',
        choices: [
          { text: '“Tenho dois dias. Escrevo o e-mail hoje mesmo.”', translation: '“Tenho dois dias. Escrevo o e-mail hoje mesmo.”', next: 'esplanada' },
          {
            text: '“Tenho uma semana inteira; não há pressa.”',
            translation: '“Tenho uma semana inteira; não tem pressa.”',
            wrong: 'O prazo termina “até sexta-feira” e hoje é quarta: são só dois dias, não uma semana. Em textos administrativos, o prazo é a primeira coisa a conferir.',
          },
        ],
      },
      esplanada: {
        emoji: '☕',
        text: 'Numa esplanada da Avenida Luísa Todi, o amigo Miguel lê o rascunho do Linu: “Oi, Helena! Quero muito ver os golfinhos. Beijinhos.” O Miguel quase se engasga com o café. “Linu, isto é uma candidatura, não uma mensagem para a tua avó!”',
        translation: 'Nas mesinhas de um café da Avenida Luísa Todi, o amigo Miguel lê o rascunho do Linu: “Oi, Helena! Quero muito ver os golfinhos. Beijinhos.” O Miguel quase engasga com o café. “Linu, isso é uma candidatura, não uma mensagem para a sua avó!”',
        choices: [{ text: '“Tens razão. Como é que se começa?”', translation: '“Você tem razão. Como se começa?”', next: 'saudacao' }],
      },
      saudacao: {
        emoji: '✉️',
        text: '“Numa carta formal, começa-se por ‘Exma. Senhora Dr.ª Helena Vaz’, ou seja, Excelentíssima Senhora Doutora”, explica o Miguel. “Em Portugal, quem tem licenciatura é muitas vezes tratado por doutor ou doutora, mesmo sem doutoramento.” O Linu apaga o “Oi” e escreve a primeira linha.',
        translation: '“Numa carta formal, começa-se com ‘Exma. Senhora Dr.ª Helena Vaz’, ou seja, Excelentíssima Senhora Doutora”, explica o Miguel. “Em Portugal, quem tem graduação muitas vezes é tratado como doutor ou doutora, mesmo sem doutorado.” O Linu apaga o “Oi” e escreve a primeira linha.',
        choices: [
          { text: '“E depois da saudação, o que escrevo?”', translation: '“E depois da saudação, o que eu escrevo?”', next: 'corpo' },
          {
            text: '“Então escrevo ‘Exmo. Senhor Dr.’, que é mais formal.”',
            translation: '“Então escrevo ‘Exmo. Senhor Dr.’, que é mais formal.”',
            wrong: '“Exmo. Senhor Dr.” é a forma MASCULINA. A destinatária é uma mulher, a Helena Vaz: por isso o Miguel ensinou “Exma. Senhora Dr.ª” (Excelentíssima Senhora Doutora). O formal concorda com a pessoa.',
          },
        ],
      },
      corpo: {
        emoji: '⌨️',
        text: 'O Miguel dita: “Venho, por este meio, apresentar a minha candidatura ao programa de voluntariado. Junto envio o meu currículo e fico ao dispor para qualquer esclarecimento.” O Linu acrescenta que nada muito bem e que não enjoa em barcos.',
        translation: 'O Miguel dita: “Venho, por meio deste, apresentar minha candidatura ao programa de voluntariado. Envio em anexo meu currículo e fico à disposição para qualquer esclarecimento.” O Linu acrescenta que nada muito bem e que não enjoa em barco.',
        choices: [{ text: '“E como é que termino?”', translation: '“E como eu termino?”', next: 'despedida' }],
      },
      despedida: {
        emoji: '🖋️',
        text: '“Terminas com ‘Com os melhores cumprimentos’ e o teu nome completo”, diz o Miguel. “Nada de beijinhos.” O Linu relê tudo e pergunta-se se deve enviar já ou deixar para mais tarde.',
        translation: '“Você termina com ‘Atenciosamente’ e o seu nome completo”, diz o Miguel. “Nada de beijinhos.” O Linu relê tudo e se pergunta se deve enviar agora ou deixar para mais tarde.',
        choices: [
          { text: 'O Linu carrega em “enviar” logo ali.', translation: 'O Linu clica em “enviar” ali mesmo.', next: 'resposta' },
          { text: '“Envio no sábado de manhã, com calma.”', translation: '“Envio no sábado de manhã, com calma.”', next: 'final_tarde' },
        ],
      },
      resposta: {
        emoji: '📩',
        text: 'Na quinta-feira, chega a resposta: “Caro Linu, agradecemos o seu interesse. Teremos todo o gosto em recebê-lo no sábado, às 8h00, no cais de Setúbal.” E, mais abaixo: “Solicitamos que traga protetor solar e um casaco impermeável.”',
        translation: 'Na quinta-feira, chega a resposta: “Prezado Linu, agradecemos seu interesse. Teremos muito prazer em recebê-lo no sábado, às 8h, no cais de Setúbal.” E, mais abaixo: “Pedimos que traga protetor solar e uma jaqueta impermeável.”',
        choices: [
          { text: 'No sábado, às oito, o Linu está no cais, de casaco impermeável.', translation: 'No sábado, às oito, o Linu está no cais, de jaqueta impermeável.', next: 'barco' },
          {
            text: 'No sábado à tarde, o Linu aparece no cais sem casaco, porque está calor.',
            translation: 'No sábado à tarde, o Linu aparece no cais sem jaqueta, porque está calor.',
            wrong: 'A resposta marcava “sábado, às 8h00” (de manhã, não à tarde) e pedia que ele levasse “um casaco impermeável”. Numa mensagem formal, cada detalhe conta.',
          },
        ],
      },
      barco: {
        emoji: '⛵',
        text: 'O barco sai do cais com a Dr.ª Helena, dois estudantes e um pinguim. Ao passar a Arrábida, a serra verde cai a pique sobre a água turquesa. De repente, três barbatanas cinzentas cortam a superfície: são roazes, a nadar ao lado do barco.',
        translation: 'O barco sai do cais com a Dra. Helena, dois estudantes e um pinguim. Ao passar pela Arrábida, a serra verde cai a pique sobre a água turquesa. De repente, três nadadeiras cinzentas cortam a superfície: são golfinhos, nadando ao lado do barco.',
        choices: [{ text: '“Que maravilha! Posso tomar nota?”', translation: '“Que maravilha! Posso anotar?”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'A Dr.ª Helena entrega-lhe a prancheta: “Registe a hora, o número de animais e o comportamento, por favor.” O Linu escreve com a letra mais bonita que tem. À noite, envia-lhe um e-mail de agradecimento, com todas as regras do Miguel.',
        translation: 'A Dra. Helena entrega a prancheta a ele: “Registre a hora, o número de animais e o comportamento, por favor.” O Linu escreve com a letra mais bonita que tem. À noite, ele manda para ela um e-mail de agradecimento, com todas as regras do Miguel.',
        ending: { tone: 'bom', title: 'Voluntário do Sado', message: 'Com um e-mail formal impecável (Exma. Senhora Dr.ª, Venho por este meio, Com os melhores cumprimentos), o Linu foi observar os golfinhos do Sado.' },
      },
      final_tarde: {
        emoji: '📭',
        text: 'No sábado, o Linu envia o e-mail, perfeito do princípio ao fim. A resposta chega na segunda-feira: “Lamentamos informar que o prazo de candidatura terminou na sexta-feira.” O Linu aprende que, nas cartas formais, a data conta tanto como as palavras.',
        translation: 'No sábado, o Linu envia o e-mail, perfeito do começo ao fim. A resposta chega na segunda-feira: “Lamentamos informar que o prazo de inscrição terminou na sexta-feira.” O Linu aprende que, nas cartas formais, a data conta tanto quanto as palavras.',
        ending: { tone: 'neutro', title: 'Fora do prazo', message: 'O e-mail estava perfeito, mas chegou tarde. Tente de novo e envie dentro do prazo!' },
      },
    },
  },
  {
    id: 'pt-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Um requerimento em Marvão',
    emoji: '🌰',
    summary: 'Em Marvão, o Linu ajuda uma senhora a escrever um requerimento à Câmara Municipal para ter uma banca na Feira da Castanha.',
    cultural_context:
      'Marvão é uma vila cercada de muralhas no alto da Serra de São Mamede, a mais de 800 metros de altitude, perto da fronteira com a Espanha. Em novembro, a vila recebe a Feira da Castanha, que celebra o castanheiro e os produtos da serra. Em Portugal, a “Câmara Municipal” corresponde à prefeitura.',
    start: 'start',
    glossary: [
      ['o requerimento', 'o requerimento'],
      ['a requerente', 'a requerente'],
      ['V. Exa. (Vossa Excelência)', 'V. Exa. (Vossa Excelência)'],
      ['Pede deferimento.', 'Pede deferimento. (fórmula final do requerimento, igual nos dois países)'],
      ['deferido / indeferido', 'aprovado / negado'],
      ['a Câmara Municipal', 'a prefeitura'],
      ['o cartão de cidadão', 'a carteira de identidade portuguesa'],
      ['ficar-lhe-á reservada', 'ficará reservada para a senhora'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Em outubro, o Linu passa uns dias em Marvão, em casa da Dona Lurdes, que faz os melhores bolos de castanha da serra. Ao pequeno-almoço, ela suspira: “Este ano queria uma banca na Feira da Castanha.” E explica que os pedidos têm de ser feitos por escrito, e ela já não tem paciência para papéis.',
        translation: 'Em outubro, o Linu passa uns dias em Marvão, na casa da dona Lurdes, que faz os melhores bolos de castanha da serra. No café da manhã, ela suspira: “Este ano eu queria uma barraca na Feira da Castanha.” E explica que os pedidos têm que ser feitos por escrito, e ela já não tem paciência para papelada.',
        choices: [{ text: '“Eu ajudo! Escrevemos o pedido juntos.”', translation: '“Eu ajudo! A gente escreve o pedido junto.”', next: 'requerimento' }],
      },
      requerimento: {
        emoji: '📄',
        text: 'A neta, a Sara, que trabalha numa repartição em Portalegre, explica que o pedido se chama requerimento. Dirige-se ao “Exmo. Senhor Presidente da Câmara Municipal de Marvão” e escreve-se na terceira pessoa, mesmo que seja a própria interessada a assiná-lo. O Linu estranha: “Na terceira pessoa? Mas é ela que pede!”',
        translation: 'A neta, a Sara, que trabalha numa repartição pública em Portalegre, explica que o pedido se chama requerimento. Ele é dirigido ao “Excelentíssimo Senhor Prefeito de Marvão” e escrito na terceira pessoa, mesmo que seja a própria interessada a assinar. O Linu estranha: “Na terceira pessoa? Mas é ela que está pedindo!”',
        choices: [
          { text: '“Então escrevo: ‘Maria de Lurdes Correia, residente em Marvão, vem requerer…’”', translation: '“Então escrevo: ‘Maria de Lurdes Correia, residente em Marvão, vem requerer…’”', next: 'texto' },
          {
            text: '“Então escrevo: ‘Eu, a Lurdes, queria muito uma banca, se faz favor.’”',
            translation: '“Então escrevo: ‘Eu, a Lurdes, queria muito uma barraca, por favor.’”',
            wrong: 'A Sara explicou que o requerimento se escreve na TERCEIRA pessoa (“Maria de Lurdes Correia […] vem requerer”), mesmo quando é a própria pessoa que assina. O “eu” e o tom de conversa não servem para esse gênero de texto, nem em Portugal nem no Brasil.',
          },
        ],
      },
      texto: {
        emoji: '🖊️',
        text: 'Duas horas depois, o requerimento está pronto: “…vem requerer a V. Exa. que se digne autorizar a instalação de uma banca de doçaria na Feira da Castanha. Pede deferimento.” A Dona Lurdes lê-o em voz alta e fica impressionada. “Parece escrito por um advogado!”',
        translation: 'Duas horas depois, o requerimento está pronto: “…vem requerer a V. Exa. que se digne autorizar a instalação de uma barraca de doces na Feira da Castanha. Pede deferimento.” A dona Lurdes lê em voz alta e fica impressionada. “Parece escrito por um advogado!”',
        choices: [{ text: '“E até quando temos de o entregar?”', translation: '“E até quando temos que entregar?”', next: 'prazo' }],
      },
      prazo: {
        emoji: '📢',
        text: 'A Sara consulta o edital: “Os requerimentos deverão ser entregues nos serviços da Câmara até ao dia 20 de outubro, acompanhados de cópia do documento de identificação.” Hoje é dia 18. Não há tempo a perder.',
        translation: 'A Sara consulta o edital: “Os requerimentos deverão ser entregues nos serviços da prefeitura até o dia 20 de outubro, acompanhados de cópia do documento de identidade.” Hoje é dia 18. Não há tempo a perder.',
        choices: [
          { text: '“Vamos amanhã de manhã, com a cópia do cartão de cidadão da Dona Lurdes.”', translation: '“Vamos amanhã de manhã, com a cópia do documento de identidade da dona Lurdes.”', next: 'camara' },
          {
            text: '“Entregamos só o requerimento; o resto não é preciso.”',
            translation: '“Entregamos só o requerimento; o resto não precisa.”',
            wrong: 'O edital diz que o requerimento deve ir “acompanhado de cópia do documento de identificação”. Sem a cópia, o pedido pode não ser aceito.',
          },
        ],
      },
      camara: {
        emoji: '🏛️',
        text: 'No balcão de atendimento, a funcionária confere tudo com atenção. “Falta a assinatura da requerente”, diz, com simpatia. “A senhora pode assinar aqui, por favor? Será notificada da decisão por escrito.” A Dona Lurdes assina com letra tremida e orgulhosa.',
        translation: 'No balcão de atendimento, a funcionária confere tudo com atenção. “Falta a assinatura da requerente”, diz, com simpatia. “A senhora pode assinar aqui, por favor? A senhora vai ser notificada da decisão por escrito.” A dona Lurdes assina com letra tremida e orgulhosa.',
        choices: [{ text: '“Agora é esperar pela resposta.”', translation: '“Agora é esperar a resposta.”', next: 'espera' }],
      },
      espera: {
        emoji: '📬',
        text: 'Uma semana depois, chega uma carta da Câmara: “Informa-se V. Exa. de que o seu pedido foi deferido. A banca n.º 12 ficar-lhe-á reservada durante os dias da feira.” A Dona Lurdes chora de alegria e começa logo a encomendar castanhas.',
        translation: 'Uma semana depois, chega uma carta da prefeitura: “Informamos a Vossa Excelência que o seu pedido foi aprovado. A barraca nº 12 ficará reservada para a senhora durante os dias da feira.” A dona Lurdes chora de alegria e começa na hora a encomendar castanhas.',
        choices: [
          { text: '“Vou ajudar na banca todos os dias!”', translation: '“Vou ajudar na barraca todos os dias!”', next: 'feira' },
          { text: '“Ajudo um bocadinho, mas quero ver o castelo durante a feira.”', translation: '“Ajudo um pouquinho, mas quero ver o castelo durante a feira.”', next: 'final_castelo' },
          {
            text: '“Indeferido? Que pena, Dona Lurdes…”',
            translation: '“Negado? Que pena, dona Lurdes…”',
            wrong: '“Deferido” quer dizer APROVADO; “indeferido” é que seria negado. A carta diz que o pedido “foi deferido” e que a barraca 12 “ficar-lhe-á reservada” (mesóclise: ficará reservada para ela).',
          },
        ],
      },
      feira: {
        emoji: '🌰',
        text: 'No dia da feira, as ruas de Marvão enchem-se de gente, de fumo de castanhas assadas e de música. Na banca n.º 12, os bolos da Dona Lurdes esgotam antes do almoço. O Linu, de avental, ainda vende o último a um senhor espanhol.',
        translation: 'No dia da feira, as ruas de Marvão se enchem de gente, de fumaça de castanha assada e de música. Na barraca nº 12, os bolos da dona Lurdes esgotam antes do almoço. O Linu, de avental, ainda vende o último a um senhor espanhol.',
        choices: [{ text: '“Dona Lurdes, acabou tudo!”', translation: '“Dona Lurdes, acabou tudo!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ao fim do dia, a Dona Lurdes conta o dinheiro e ri-se. “Para o ano, és tu que escreves o requerimento sozinho”, diz ela. O Linu responde, muito formal: “Com todo o gosto, minha senhora.”',
        translation: 'No fim do dia, a dona Lurdes conta o dinheiro e ri. “No ano que vem, é você que escreve o requerimento sozinho”, diz ela. O Linu responde, muito formal: “Com todo o prazer, minha senhora.”',
        ending: { tone: 'bom', title: 'Pedido deferido', message: 'O Linu escreveu um requerimento de verdade: terceira pessoa, V. Exa., que se digne autorizar, Pede deferimento. E a banca foi um sucesso!' },
      },
      final_castelo: {
        emoji: '🏯',
        text: 'O Linu sobe ao castelo e passa a tarde a olhar para a Espanha, lá em baixo. Quando volta à banca, já não sobra um único bolo para ele provar. A vista era linda, mas os bolos ficam para o ano.',
        translation: 'O Linu sobe ao castelo e passa a tarde olhando a Espanha, lá embaixo. Quando volta à barraca, não sobrou nem um bolo para ele provar. A vista era linda, mas os bolos ficam para o ano que vem.',
        ending: { tone: 'neutro', title: 'Sem bolo', message: 'Vista linda, barriga vazia. Tente de novo e fique na barraca!' },
      },
    },
  },
  {
    id: 'pt-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Reclamação em Lagos',
    emoji: '🛶',
    summary: 'Em Lagos, o passeio de caiaque do Linu é cancelado e ele precisa fazer uma reclamação formal para receber o dinheiro de volta.',
    cultural_context:
      'Em Portugal, todos os estabelecimentos que atendem o público são obrigados a ter um Livro de Reclamações, em papel e também em formato eletrônico. Em Lagos, a Ponta da Piedade é famosa pelas grutas e pelos rochedos dourados, que se visitam de barco ou de caiaque.',
    start: 'start',
    glossary: [
      ['o Livro de Reclamações', 'o livro oficial de reclamações dos estabelecimentos'],
      ['o reembolso', 'o reembolso'],
      ['integralmente', 'integralmente, por inteiro'],
      ['por conseguinte', 'por conseguinte, portanto'],
      ['Proceder-se-á ao reembolso.', 'O reembolso será feito.'],
      ['o sucedido', 'o ocorrido'],
      ['o bilhete', 'o ingresso, o bilhete'],
      ['aldrabão', 'trapaceiro, enganador'],
    ],
    nodes: {
      start: {
        emoji: '🌬️',
        text: 'Lagos, nove da manhã. O Linu chega ao quiosque dos passeios de caiaque, na marina, com o bilhete que pagou na véspera. O funcionário informa-o de que o passeio das dez à Ponta da Piedade foi cancelado por causa do vento.',
        translation: 'Lagos, nove da manhã. O Linu chega ao quiosque dos passeios de caiaque, na marina, com o ingresso que pagou na véspera. O funcionário informa que o passeio das dez para a Ponta da Piedade foi cancelado por causa do vento.',
        choices: [
          { text: '“Compreendo. Nesse caso, peço o reembolso, por favor.”', translation: '“Entendo. Nesse caso, peço o reembolso, por favor.”', next: 'reembolso' },
          {
            text: '“Ótimo! Então saímos às dez em ponto.”',
            translation: '“Ótimo! Então saímos às dez em ponto.”',
            wrong: 'O funcionário disse que o passeio das dez “foi cancelado por causa do vento”. Não vai haver saída às dez.',
          },
        ],
      },
      reembolso: {
        emoji: '🎫',
        text: '“Lamento, mas não fazemos reembolsos”, responde o funcionário. “Posso oferecer-lhe um passeio amanhã, à mesma hora.” O Linu olha para o bilhete, onde está escrito: “Em caso de cancelamento pela empresa, o valor será integralmente devolvido.”',
        translation: '“Sinto muito, mas não fazemos reembolso”, responde o funcionário. “Posso oferecer ao senhor um passeio amanhã, no mesmo horário.” O Linu olha o ingresso, onde está escrito: “Em caso de cancelamento pela empresa, o valor será devolvido integralmente.”',
        choices: [
          { text: '“Nesse caso, peço o Livro de Reclamações.”', translation: '“Nesse caso, peço o Livro de Reclamações.”', next: 'livro' },
          { text: '“Está bem, aceito o passeio de amanhã.”', translation: '“Tudo bem, aceito o passeio de amanhã.”', next: 'final_amanha' },
          {
            text: '“Pois, o bilhete diz que não há devolução. Paciência.”',
            translation: '“É, o ingresso diz que não tem devolução. Paciência.”',
            wrong: 'O ingresso diz o contrário: “em caso de cancelamento pela empresa, o valor será integralmente devolvido”. Foi a empresa que cancelou, então o Linu tem direito ao reembolso total.',
          },
        ],
      },
      livro: {
        emoji: '📕',
        text: 'O funcionário fica sério e entrega-lhe o livro, como a lei obriga. O Linu senta-se num banco e pensa no que há de escrever. Lembra-se dos conselhos da amiga Beatriz, que é jurista: frases curtas, factos, datas e um pedido claro.',
        translation: 'O funcionário fica sério e entrega o livro a ele, como a lei exige. O Linu se senta num banco e pensa no que vai escrever. Ele se lembra dos conselhos da amiga Beatriz, que é advogada: frases curtas, fatos, datas e um pedido claro.',
        choices: [
          { text: 'O Linu escreve com calma, só com factos.', translation: 'O Linu escreve com calma, só com fatos.', next: 'escrita' },
          { text: 'O Linu, furioso, começa por fazer um rascunho num guardanapo.', translation: 'O Linu, furioso, começa fazendo um rascunho num guardanapo.', next: 'raiva' },
        ],
      },
      raiva: {
        emoji: '😤',
        text: 'No guardanapo, o Linu escreve: “Vocês são uns aldrabões e eu nunca mais cá volto!!!” Depois pousa a caneta, respira fundo e relê. Uma reclamação zangada não resolve nada; o que conta são os factos.',
        translation: 'No guardanapo, o Linu escreve: “Vocês são uns trapaceiros e eu nunca mais volto aqui!!!” Depois larga a caneta, respira fundo e relê. Uma reclamação raivosa não resolve nada; o que conta são os fatos.',
        choices: [{ text: 'O Linu rasga o guardanapo e recomeça, com calma.', translation: 'O Linu rasga o guardanapo e recomeça, com calma.', next: 'escrita' }],
      },
      escrita: {
        emoji: '✍️',
        text: 'No livro, o Linu escreve: “No dia de hoje, dirigi-me a este estabelecimento para o passeio das 10h00, pago na véspera. O passeio foi cancelado pela empresa, que recusou a devolução do valor, contrariando o que consta do bilhete. Solicito, por conseguinte, o reembolso integral.” Depois assina, põe a data e guarda o duplicado.',
        translation: 'No livro, o Linu escreve: “Na data de hoje, dirigi-me a este estabelecimento para o passeio das 10h, pago na véspera. O passeio foi cancelado pela empresa, que recusou a devolução do valor, contrariando o que consta no ingresso. Solicito, portanto, o reembolso integral.” Depois assina, põe a data e guarda a cópia.',
        choices: [{ text: 'O Linu devolve o livro ao balcão.', translation: 'O Linu devolve o livro no balcão.', next: 'resposta' }],
      },
      resposta: {
        emoji: '🤝',
        text: 'O gerente, que ouviu tudo do escritório, aparece ao balcão. “Tem toda a razão, e peço-lhe desculpa pelo sucedido”, diz ele. “O nosso funcionário é novo e desconhecia as condições. Proceder-se-á ao reembolso de imediato.”',
        translation: 'O gerente, que ouviu tudo do escritório, aparece no balcão. “O senhor tem toda a razão, e peço desculpas pelo ocorrido”, diz ele. “Nosso funcionário é novo e não conhecia as condições. O reembolso será feito imediatamente.”',
        choices: [{ text: '“Agradeço a sua atenção.”', translation: '“Agradeço a sua atenção.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'O Linu recebe o dinheiro e, à tarde, quando o vento acalma, o gerente oferece-lhe um lugar no passeio das cinco, sem custos. As grutas da Ponta da Piedade brilham em tons de ouro e a água é verde-esmeralda. “Valeu a pena não desistir”, pensa o Linu, a remar.',
        translation: 'O Linu recebe o dinheiro e, à tarde, quando o vento acalma, o gerente oferece a ele um lugar no passeio das cinco, de graça. As grutas da Ponta da Piedade brilham em tons dourados e a água é verde-esmeralda. “Valeu a pena não desistir”, pensa o Linu, remando.',
        ending: { tone: 'bom', title: 'Reclamação atendida', message: 'Com uma reclamação formal e objetiva (factos, datas, “Solicito, por conseguinte…”), o Linu recebeu o reembolso e ainda ganhou o passeio.' },
      },
      final_amanha: {
        emoji: '🚆',
        text: 'O Linu aceita o passeio de amanhã, mas só depois se lembra de que tem comboio marcado para Lisboa logo de manhã. Perde o passeio e o dinheiro. Às vezes, vale a pena ler o que está escrito no bilhete!',
        translation: 'O Linu aceita o passeio de amanhã, mas só depois lembra que tem trem marcado para Lisboa logo de manhã. Perde o passeio e o dinheiro. Às vezes, vale a pena ler o que está escrito no ingresso!',
        ending: { tone: 'neutro', title: 'Passeio perdido', message: 'O ingresso garantia o reembolso, mas o Linu não fez valer o direito dele. Tente de novo e peça o Livro de Reclamações!' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'pt-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Sardinhas em Paris',
    emoji: '🐟',
    summary: 'Em Paris, o Linu ajuda uma associação portuguesa a salvar o arraial de Santo António e decifra, uma a uma, as expressões idiomáticas de Portugal.',
    cultural_context:
      'Entre os anos 1960 e o começo dos anos 1970, centenas de milhares de portugueses emigraram para a França, muitos deles “a salto”, isto é, atravessando as fronteiras clandestinamente, a pé, pelos Pireneus. Hoje a comunidade de origem portuguesa na região de Paris é uma das maiores fora de Portugal, com associações que mantêm vivas festas como os Santos Populares de junho, com sardinha assada e manjerico.',
    start: 'start',
    glossary: [
      ['estar com os azeites', 'estar de mau humor, estar de lua'],
      ['meter água', 'pisar na bola, fazer besteira'],
      ['estar-se nas tintas', 'não estar nem aí'],
      ['ir aos arames', 'ficar uma fera, perder a paciência'],
      ['a dar com um pau', 'à beça, aos montes'],
      ['dar graxa', 'puxar o saco, bajular'],
      ['ter lata', 'ser cara de pau'],
      ['levar uma tampa', 'levar um fora'],
    ],
    nodes: {
      start: {
        emoji: '🎉',
        text: 'Em junho, o Linu passa uma semana em Paris e é convidado para o arraial de Santo António de uma associação portuguesa. Quando chega ao pátio da sede, encontra a Dona Fernanda, a presidente, com cara de poucos amigos. “Nem me fales, que hoje estou com os azeites!”, diz ela, de telemóvel na mão. “As sardinhas ainda não chegaram e a festa começa às oito.”',
        translation: 'Em junho, o Linu passa uma semana em Paris e é convidado para a festa de Santo Antônio de uma associação portuguesa. Quando chega ao pátio da sede, encontra a dona Fernanda, a presidente, com cara de poucos amigos. “Nem me fale, que hoje eu estou de mau humor!”, diz ela, com o celular na mão. “As sardinhas ainda não chegaram e a festa começa às oito.”',
        choices: [
          { text: '“O que aconteceu, Dona Fernanda? Posso ajudar?”', translation: '“O que aconteceu, dona Fernanda? Posso ajudar?”', next: 'problema' },
          {
            text: '“Faltam azeites? Eu vou já comprar duas garrafas.”',
            translation: '“Está faltando azeite? Eu vou agora comprar duas garrafas.”',
            wrong: '“Estar com os azeites” é uma expressão de Portugal que quer dizer estar de mau humor, irritado — não tem nada a ver com azeite de verdade. No Brasil, diríamos “estar de mau humor” ou “estar de lua”. O que falta na festa são as sardinhas.',
          },
        ],
      },
      problema: {
        emoji: '📦',
        text: 'O fornecedor meteu água: em vez de dez quilos de sardinhas, mandou dez quilos de carapaus. O neto da Dona Fernanda, o Tiago, encolhe os ombros: “Eu cá estou-me nas tintas, ninguém dá pela diferença.” A avó vai aos arames: “Um arraial de Santo António sem sardinhas? Nem pensar!” O Tiago, que tem dezasseis anos, decide não abrir mais a boca.',
        translation: 'O fornecedor pisou na bola: em vez de dez quilos de sardinhas, mandou dez quilos de carapaus. O neto da dona Fernanda, o Tiago, dá de ombros: “Eu não estou nem aí, ninguém vai perceber a diferença.” A avó fica uma fera: “Uma festa de Santo Antônio sem sardinha? Nem pensar!” O Tiago, que tem dezesseis anos, decide não abrir mais a boca.',
        choices: [
          { text: '“Tiago, vamos os dois à mercearia portuguesa procurar sardinhas.”', translation: '“Tiago, vamos nós dois à mercearia portuguesa procurar sardinhas.”', next: 'mercearia' },
          { text: '“Eu fico cá a ajudar a Dona Fernanda com o grelhador.”', translation: '“Eu fico aqui ajudando a dona Fernanda com a churrasqueira.”', next: 'grelha' },
        ],
      },
      mercearia: {
        emoji: '🛒',
        text: 'A mercearia do Sr. Armando fica a duas ruas e cheira a bacalhau e a chouriço. “Sardinhas? Hoje tenho-as a dar com um pau”, diz o Sr. Armando, “mas custam os olhos da cara, que vieram de avião.” O Tiago começa logo a dar-lhe graxa: “O senhor é o melhor comerciante de Paris, toda a gente o diz!” O Sr. Armando olha para ele de sobrolho levantado.',
        translation: 'A mercearia do seu Armando fica a duas ruas e tem cheiro de bacalhau e de linguiça. “Sardinha? Hoje eu tenho à beça”, diz o seu Armando, “mas custam os olhos da cara, porque vieram de avião.” O Tiago começa logo a puxar o saco dele: “O senhor é o melhor comerciante de Paris, todo mundo diz isso!” O seu Armando olha para ele com a sobrancelha levantada.',
        choices: [
          { text: '“Sr. Armando, é para o arraial da associação. Pode fazer-nos um preço de amigo?”', translation: '“Seu Armando, é para a festa da associação. O senhor pode fazer um preço camarada para a gente?”', next: 'desconto' },
          {
            text: '“Só lhe restam uma ou duas? Então levamos essas.”',
            translation: '“Só sobraram uma ou duas? Então levamos essas.”',
            wrong: '“A dar com um pau” quer dizer em grande quantidade — no Brasil, “à beça” ou “aos montes”. O seu Armando tem sardinhas de sobra; o problema é o preço, que “custa os olhos da cara” (expressão igual nos dois países).',
          },
        ],
      },
      desconto: {
        emoji: '🤝',
        text: '“Tens cá uma lata, pinguim!”, ri-se o Sr. Armando. “Mas gosto de quem fala pão, pão, queijo, queijo, e não de graxistas.” Faz-lhes metade do preço e ainda junta um saco de pão. No caminho de volta, o Tiago admite: “Pronto, meti água. Da próxima vez, falo a sério.”',
        translation: '“Que cara de pau, pinguim!”, ri o seu Armando. “Mas eu gosto de quem é direto, pão, pão, queijo, queijo, e não de puxa-saco.” Ele faz metade do preço e ainda põe um saco de pão. No caminho de volta, o Tiago admite: “Tá bom, pisei na bola. Da próxima vez, falo sério.”',
        choices: [{ text: '“Vamos depressa, que a festa está quase a começar!”', translation: '“Vamos rápido, que a festa está quase começando!”', next: 'festa' }],
      },
      grelha: {
        emoji: '🔥',
        text: 'Enquanto o Tiago vai sozinho à mercearia, o Linu ajuda a Dona Fernanda a acender o grelhador. Ela conta-lhe que chegou a França em 1966, “a salto”, atravessando os Pirenéus a pé, com uma mala e dezanove anos. “Trabalhei a dias, depois numa fábrica, e criei aqui três filhos”, diz, já mais calma. “Mas o Santo António nunca o deixei de festejar.”',
        translation: 'Enquanto o Tiago vai sozinho à mercearia, o Linu ajuda a dona Fernanda a acender a churrasqueira. Ela conta que chegou à França em 1966, “a salto”, atravessando os Pireneus a pé, com uma mala e dezenove anos. “Trabalhei de diarista, depois numa fábrica, e criei aqui três filhos”, diz, já mais calma. “Mas nunca deixei de festejar Santo Antônio.”',
        choices: [
          { text: '“Que história! Vamos pôr as mesas enquanto o Tiago não chega?”', translation: '“Que história! Vamos arrumar as mesas enquanto o Tiago não chega?”', next: 'festa' },
          { text: '“Vou só dar uma volta à beira do Sena e já volto.”', translation: '“Vou só dar uma volta na beira do Sena e já volto.”', next: 'final_passeio' },
        ],
      },
      festa: {
        emoji: '🪅',
        text: 'Às oito em ponto, as sardinhas já estão na brasa e o pátio está cheio de gente, de manjericos e de bandeirinhas. Um conjunto toca música popular e os mais velhos dançam o vira. O Tiago, encostado à parede, não tira os olhos da Léa, uma rapariga da associação. “Quero convidá-la para dançar, mas tenho medo de levar uma tampa”, confessa ele ao Linu.',
        translation: 'Às oito em ponto, as sardinhas já estão na brasa e o pátio está cheio de gente, de vasinhos de manjericão e de bandeirinhas. Uma banda toca música popular e os mais velhos dançam o vira. O Tiago, encostado na parede, não tira os olhos da Léa, uma moça da associação. “Quero chamar ela para dançar, mas tenho medo de levar um fora”, confessa ele ao Linu.',
        choices: [
          { text: '“Arrisca! Quem não arrisca não petisca.”', translation: '“Arrisca! Quem não arrisca não petisca.”', next: 'final_bom' },
          { text: '“Espera mais um bocadinho, que ainda é cedo.”', translation: '“Espera mais um pouquinho, que ainda é cedo.”', next: 'final_parede' },
          {
            text: '“Uma tampa? Queres que te vá buscar uma panela à cozinha?”',
            translation: '“Uma tampa? Quer que eu vá buscar uma panela na cozinha?”',
            wrong: '“Levar uma tampa” é ser rejeitado — no Brasil, “levar um fora”. O Tiago tem medo de que a Léa diga não ao convite para dançar; ninguém precisa de panela.',
          },
        ],
      },
      final_bom: {
        emoji: '💃',
        text: 'O Tiago respira fundo e atravessa o pátio. A Léa sorri e aceita, e os dois dançam o vira ao lado da Dona Fernanda, que já está muito bem-disposta. Ao fim da noite, a presidente da associação dá um abraço ao Linu: “Salvaste-me o arraial, pinguim.” O Linu volta para o hotel com cheiro a sardinha nas penas e um sorriso enorme.',
        translation: 'O Tiago respira fundo e atravessa o pátio. A Léa sorri e aceita, e os dois dançam o vira ao lado da dona Fernanda, que já está de ótimo humor. No fim da noite, a presidente da associação dá um abraço no Linu: “Você salvou a minha festa, pinguim.” O Linu volta para o hotel com cheiro de sardinha nas penas e um sorriso enorme.',
        ending: { tone: 'bom', title: 'Arraial salvo', message: 'O Linu entendeu cada expressão (estar com os azeites, meter água, a dar com um pau, ter lata, levar uma tampa) e ajudou a salvar a festa de Santo Antônio em Paris!' },
      },
      final_parede: {
        emoji: '🧱',
        text: 'O Tiago fica encostado à parede até à meia-noite, a ver os outros dançar. A Léa acaba por ir embora com as amigas, sem saber de nada. “Para o ano é que é”, suspira ele. O Linu come a última sardinha e pensa que devia ter dado um conselho melhor.',
        translation: 'O Tiago fica encostado na parede até a meia-noite, vendo os outros dançarem. A Léa acaba indo embora com as amigas, sem saber de nada. “Ano que vem vai ser”, suspira ele. O Linu come a última sardinha e pensa que devia ter dado um conselho melhor.',
        ending: { tone: 'neutro', title: 'Encostado à parede', message: 'A festa foi boa, mas o Tiago não teve coragem. Às vezes, quem não arrisca não petisca! Tente de novo.' },
      },
      final_passeio: {
        emoji: '🌉',
        text: 'O Linu passeia à beira do Sena e perde a noção do tempo. Quando volta, já passa da meia-noite e só restam espinhas no grelhador. A Dona Fernanda, agora bem-disposta, guardou-lhe uma tigela de caldo verde. “Chegaste tarde, mas ao menos chegaste”, diz ela.',
        translation: 'O Linu passeia na beira do Sena e perde a noção do tempo. Quando volta, já passa da meia-noite e só sobraram espinhas na churrasqueira. A dona Fernanda, agora de bom humor, guardou para ele uma tigela de caldo verde. “Você chegou tarde, mas pelo menos chegou”, diz ela.',
        ending: { tone: 'neutro', title: 'Só sobraram espinhas', message: 'O Linu ouviu uma história bonita, mas perdeu o arraial. Tente de novo e fique na festa!' },
      },
    },
  },
  {
    id: 'pt-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Golo ou gol?',
    emoji: '⚽',
    summary: 'No Maracanã, o Linu vê um clássico ao lado de um amigo do Porto e de uma amiga carioca, e traduz o futebol de um lado para o outro do Atlântico.',
    cultural_context:
      'O Maracanã foi inaugurado para a Copa do Mundo de 1950, cuja partida decisiva o Uruguai venceu por 2 a 1 diante do Brasil, no episódio que ficou conhecido como “Maracanaço”. O vocabulário do futebol é um dos campos em que o português de Portugal e o do Brasil mais se afastam: golo e gol, guarda-redes e goleiro, relvado e gramado, descontos e acréscimos.',
    start: 'start',
    glossary: [
      ['o golo / o guarda-redes', 'o gol / o goleiro'],
      ['o relvado', 'o gramado'],
      ['a claque / os adeptos', 'a torcida organizada / os torcedores'],
      ['estar feito ao bife', 'estar frito, estar em apuros'],
      ['é canja', 'é moleza, é fácil'],
      ['encher chouriços', 'encher linguiça'],
      ['os descontos (no futebol)', 'os acréscimos'],
      ['bué fixe', 'muito legal, muito maneiro'],
    ],
    nodes: {
      start: {
        emoji: '🚇',
        text: 'Domingo de sol no Rio de Janeiro. O Linu vai ao Maracanã com dois amigos: o Rui, um rapaz do Porto que está a fazer um estágio no Rio, e a Bia, carioca de gema. No metro, o Rui não se cala: “Isto vai ser bué fixe, pá! Nunca vi um jogo num estádio tão grande.” A Bia ri-se e corrige-o: “Aqui não é ‘bué fixe’, é ‘muito maneiro’!”',
        translation: 'Domingo de sol no Rio de Janeiro. O Linu vai ao Maracanã com dois amigos: o Rui, um rapaz do Porto que está fazendo estágio no Rio, e a Bia, carioca da gema. No metrô, o Rui não para de falar: “Isso vai ser muito legal, cara! Nunca vi um jogo num estádio tão grande.” A Bia ri e corrige: “Aqui não é ‘bué fixe’, é ‘muito maneiro’!”',
        choices: [
          { text: '“Então ‘bué fixe’, ‘muito legal’ e ‘muito maneiro’ são a mesma coisa?”', translation: '“Então ‘bué fixe’, ‘muito legal’ e ‘muito maneiro’ são a mesma coisa?”', next: 'estadio' },
        ],
      },
      estadio: {
        emoji: '🏟️',
        text: 'À entrada da bancada, o Rui fica de boca aberta. “Olha-me para este relvado! E a claque do outro lado, que já está a cantar?” A Bia explica que no Brasil se diz “gramado” e “torcida organizada”, e que os adeptos, ali, se chamam “torcedores”. O Linu toma notas num guardanapo, porque já percebeu que vai precisar de um dicionário.',
        translation: 'Na entrada da arquibancada, o Rui fica de boca aberta. “Olha só este ‘relvado’! E a ‘claque’ do outro lado, que já está cantando?” A Bia explica que no Brasil se diz “gramado” e “torcida organizada”, e que os “adeptos”, ali, se chamam “torcedores”. O Linu anota tudo num guardanapo, porque já percebeu que vai precisar de um dicionário.',
        choices: [
          { text: '“Vou comprar pipocas antes de o jogo começar. Querem alguma coisa?”', translation: '“Vou comprar pipoca antes de o jogo começar. Vocês querem alguma coisa?”', next: 'pipocas' },
          {
            text: '“Claque? São aqueles jogadores que estão a aquecer no relvado?”',
            translation: '“Claque? São aqueles jogadores que estão aquecendo no gramado?”',
            wrong: 'O Rui disse que a claque “já está a cantar” do outro lado: “claque”, em Portugal, é a torcida organizada, e não um grupo de jogadores. A Bia acabou de traduzir: claque = torcida organizada; adeptos = torcedores.',
          },
        ],
      },
      pipocas: {
        emoji: '🍿',
        text: 'O Linu vai ao bar e volta mesmo a tempo do apito inicial. O vendedor, ao ouvi-lo pedir “um pacote pequenino, se faz favor”, pergunta-lhe logo se é português. “Sou um pinguim que aprendeu português em Lisboa”, responde o Linu, e o vendedor acha imensa graça. A Bia explica-lhe que o “se faz favor” e os diminutivos a meio da frase soam logo a Portugal.',
        translation: 'O Linu vai até a lanchonete e volta bem a tempo do apito inicial. O vendedor, ao ouvir o pedido “um pacote pequenino, se faz favor”, pergunta na hora se ele é português. “Sou um pinguim que aprendeu português em Lisboa”, responde o Linu, e o vendedor acha muita graça. A Bia explica que o “se faz favor” (por favor) e os diminutivos no meio da frase soam logo como Portugal.',
        choices: [{ text: '“Vamos lá, que o jogo vai começar!”', translation: '“Vamos lá, que o jogo vai começar!”', next: 'jogo' }],
      },
      jogo: {
        emoji: '⚽',
        text: 'O jogo começa bem para a equipa da Bia, que marca aos dez minutos. Mas, antes do intervalo, o guarda-redes deixa passar uma bola fácil por entre as pernas, e o adversário empata. O Rui, que só para provocar a amiga torce pela outra equipa, leva as mãos à cabeça: “Com um frango destes, o guarda-redes está feito ao bife!” A Bia olha para o Linu, sem perceber o que tem o bife a ver com futebol.',
        translation: 'O jogo começa bem para o time da Bia, que faz um gol aos dez minutos. Mas, antes do intervalo, o goleiro deixa passar uma bola fácil entre as pernas, e o adversário empata. O Rui, que só para provocar a amiga torce pelo outro time, põe as mãos na cabeça: “Com um frango desses, o goleiro está frito!” A Bia olha para o Linu, sem entender o que o bife tem a ver com futebol.',
        choices: [
          { text: '“Bia, ‘estar feito ao bife’ é ‘estar frito’: o guarda-redes vai ouvir das boas.”', translation: '“Bia, ‘estar feito ao bife’ é ‘estar frito’: o goleiro vai ouvir poucas e boas.”', next: 'intervalo' },
          {
            text: '“O Rui está com fome: quer comer um bife ao intervalo.”',
            translation: '“O Rui está com fome: quer comer um bife no intervalo.”',
            wrong: '“Estar feito ao bife” é uma expressão de Portugal que quer dizer estar em apuros — no Brasil, “estar frito”. O Rui está falando do goleiro, que engoliu um frango, e não de comida.',
          },
        ],
      },
      intervalo: {
        emoji: '🥤',
        text: 'Ao intervalo, os três vão buscar bebidas. O Rui pede “um sumo de laranja”, e o vendedor, simpático, corrige-o: “Um suco, né?” A Bia sugere mate gelado com limão, que se bebe nas praias do Rio, e o Rui acha-o delicioso. “Isto é canja de fazer em casa?”, pergunta ele, e a Bia volta a olhar para o Linu à espera de tradução.',
        translation: 'No intervalo, os três vão buscar bebida. O Rui pede “um sumo de laranja”, e o vendedor, simpático, corrige: “Um suco, né?” A Bia sugere mate gelado com limão, que se toma nas praias do Rio, e o Rui acha delicioso. “Isso é moleza de fazer em casa?”, pergunta ele, e a Bia volta a olhar para o Linu esperando a tradução.',
        choices: [{ text: '“‘É canja’ quer dizer ‘é moleza’, Bia. Fácil, fácil.”', translation: '“‘É canja’ quer dizer ‘é moleza’, Bia. Fácil, fácil.”', next: 'segundo' }],
      },
      segundo: {
        emoji: '⏱️',
        text: 'Na segunda parte, o jogo arrasta-se e ninguém arrisca. Aos noventa minutos, o árbitro dá seis minutos de descontos, e o Rui resmunga: “Agora andam todos a encher chouriços até ao apito final.” A Bia percebe esta à primeira: “Ah, encher linguiça! Essa eu conheço.” De repente, no último minuto, há uma falta à entrada da área.',
        translation: 'No segundo tempo, o jogo se arrasta e ninguém arrisca. Aos noventa minutos, o juiz dá seis minutos de acréscimo, e o Rui resmunga: “Agora todo mundo vai ficar enchendo linguiça até o apito final.” A Bia entende essa de primeira: “Ah, encher linguiça! Essa eu conheço.” De repente, no último minuto, sai uma falta na entrada da área.',
        choices: [
          { text: '“Silêncio, que vão marcar o livre!”', translation: '“Silêncio, que vão cobrar a falta!”', next: 'final_bom' },
          { text: '“Vamos sair já, para fugir à confusão no metro.”', translation: '“Vamos sair agora, para fugir da confusão no metrô.”', next: 'final_metro' },
          {
            text: '“Descontos? Então os bilhetes do próximo jogo vão ficar mais baratos!”',
            translation: '“Descontos? Então os ingressos do próximo jogo vão ficar mais baratos!”',
            wrong: 'No futebol de Portugal, “descontos” é o tempo extra que o árbitro dá no fim de cada tempo — no Brasil, “acréscimos”. Não tem nada a ver com o preço dos ingressos.',
          },
        ],
      },
      final_bom: {
        emoji: '🥅',
        text: 'A bola passa por cima da barreira e entra no ângulo. O Maracanã explode, a Bia abraça o Linu e até o Rui acaba a aplaudir. “Pronto, dou o braço a torcer: foi um golaço”, admite ele. Antes do jogo, tinham combinado que quem perdesse pagava o jantar, e o Rui, claro, paga o pato.',
        translation: 'A bola passa por cima da barreira e entra no ângulo. O Maracanã explode, a Bia abraça o Linu e até o Rui acaba aplaudindo. “Tá bom, dou o braço a torcer: foi um golaço”, admite ele. Eles tinham combinado que quem perdesse pagava o jantar, e o Rui, claro, paga o pato.',
        ending: { tone: 'bom', title: 'Golaço no Maracanã', message: 'O Linu traduziu o futebol dos dois lados do Atlântico: golo e gol, guarda-redes e goleiro, descontos e acréscimos, feito ao bife e frito. E ainda viu um golaço no Maracanã!' },
      },
      final_metro: {
        emoji: '🚉',
        text: 'O Linu e o Rui saem antes do fim, para apanhar o metro vazio. Já na estação, ouvem um rugido enorme vindo do estádio. A Bia manda-lhes uma mensagem: “Golaço no último minuto! Vocês perderam!” O Rui suspira: “Fomos embora cedo demais, que azar.”',
        translation: 'O Linu e o Rui saem antes do fim, para pegar o metrô vazio. Já na estação, ouvem um rugido enorme vindo do estádio. A Bia manda uma mensagem para eles: “Golaço no último minuto! Vocês perderam!” O Rui suspira: “A gente foi embora cedo demais, que azar.”',
        ending: { tone: 'neutro', title: 'Golo pelo telemóvel', message: 'No futebol, o jogo só acaba no apito final! O Linu perdeu o golaço. Tente de novo e fique até o fim.' },
      },
    },
  },
  {
    id: 'pt-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ficar a ver navios',
    emoji: '⛵',
    summary: 'Na Horta, na ilha do Faial, o Linu chega de veleiro e tem de deixar a sua pintura no cais, como manda a tradição dos velejadores.',
    cultural_context:
      'A marina da Horta, na ilha do Faial, é uma escala clássica dos veleiros que atravessam o Atlântico, e os velejadores têm o costume de deixar uma pintura com o nome do barco nos muros e no chão do cais: diz a tradição que quem não pinta não tem sorte no resto da viagem. Do outro lado do canal fica a ilha do Pico, com a montanha mais alta de Portugal (2351 metros) e vinhas cercadas por muros de pedra vulcânica, Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['chover a potes', 'chover canivetes, cair um toró'],
      ['tirar nabos da púcara', 'sondar, arrancar uma informação com jeito'],
      ['como quem não quer a coisa', 'como quem não quer nada'],
      ['pôr-se a pau', 'ficar esperto, ficar atento'],
      ['ficar a ver navios', 'ficar a ver navios, ficar sem nada (existe também no Brasil)'],
      ['dar corda aos sapatos', 'apressar o passo, sair correndo'],
      ['à grande e à francesa', 'com luxo, sem economizar'],
      ['o galão', 'café com leite servido em copo alto'],
    ],
    nodes: {
      start: {
        emoji: '⛵',
        text: 'Depois de dois dias no mar, o veleiro da Marta entra na marina da Horta ao fim da tarde. Do outro lado do canal, o Pico ergue-se com o cume escondido nas nuvens. O pai da Marta, o Sr. Álvaro, que já atravessou o Atlântico três vezes, dá uma palmada no ombro do Linu. “Agora vem a parte mais importante da viagem: pintar o nosso quadro no cais.”',
        translation: 'Depois de dois dias no mar, o veleiro da Marta entra na marina da Horta no fim da tarde. Do outro lado do canal, o Pico se ergue com o cume escondido nas nuvens. O pai da Marta, o seu Álvaro, que já atravessou o Atlântico três vezes, dá um tapinha no ombro do Linu. “Agora vem a parte mais importante da viagem: pintar o nosso quadro no cais.”',
        choices: [{ text: '“Pintar um quadro? Porquê, Sr. Álvaro?”', translation: '“Pintar um quadro? Por quê, seu Álvaro?”', next: 'tradicao' }],
      },
      tradicao: {
        emoji: '🎨',
        text: '“Diz-se que o barco que passa pela Horta sem deixar a sua pintura não tem sorte no resto da viagem”, explica o Sr. Álvaro. “Eu cá não sou supersticioso, mas também não vou tentar a sorte.” A Marta ri-se: “O meu pai diz isso e depois benze-se sempre que vê uma nuvem escura.” Ao longo do cais, há milhares de pinturas coloridas, com nomes de barcos, datas e bandeiras de todo o mundo, e o Linu acha tudo giríssimo.',
        translation: '“Dizem que o barco que passa pela Horta sem deixar a sua pintura não tem sorte no resto da viagem”, explica o seu Álvaro. “Eu não sou supersticioso, mas também não vou arriscar.” A Marta ri: “Meu pai diz isso e depois faz o sinal da cruz toda vez que vê uma nuvem escura.” Ao longo do cais, há milhares de pinturas coloridas, com nomes de barcos, datas e bandeiras do mundo todo, e o Linu acha tudo lindíssimo.',
        choices: [
          { text: '“Então mãos à obra, antes que escureça!”', translation: '“Então mãos à obra, antes que escureça!”', next: 'tintas' },
          {
            text: '“Então não pintamos nada: o Sr. Álvaro disse que isso é que dá sorte.”',
            translation: '“Então a gente não pinta nada: o seu Álvaro disse que é isso que dá sorte.”',
            wrong: 'O seu Álvaro disse o contrário: segundo a tradição, o barco que NÃO deixa a pintura “não tem sorte no resto da viagem”. Por isso eles vão pintar.',
          },
        ],
      },
      tintas: {
        emoji: '🖌️',
        text: 'Compram tintas numa loja perto da marina e escolhem um canto livre no chão do cais. A Marta desenha o veleiro, o Linu pinta as ondas e o Sr. Álvaro escreve a data com letra de professor primário. Mas, a meio do trabalho, o céu fecha-se e começa a chover a potes. “Ora bolas, isto está tudo a escorrer!”, queixa-se a Marta.',
        translation: 'Eles compram tinta numa loja perto da marina e escolhem um canto livre no chão do cais. A Marta desenha o veleiro, o Linu pinta as ondas e o seu Álvaro escreve a data com letra de professor primário. Mas, no meio do trabalho, o céu fecha e começa a chover canivetes. “Poxa, está tudo escorrendo!”, reclama a Marta.',
        choices: [
          { text: '“Tapamos a pintura com um oleado e esperamos no café que a chuva passe.”', translation: '“Cobrimos a pintura com uma lona e esperamos no café a chuva passar.”', next: 'abrigo' },
          { text: '“Deixamos tudo como está e acabamos amanhã de manhã.”', translation: '“Deixamos tudo como está e terminamos amanhã de manhã.”', next: 'manha' },
        ],
      },
      abrigo: {
        emoji: '☕',
        text: 'Abrigam-se num café do porto, cheio de velejadores de todas as nacionalidades. O Sr. Álvaro pede três galões e começa a tirar nabos da púcara ao dono do café, que conhece todos os barcos e horários da ilha. “Então amanhã há barco para o Pico às nove?”, pergunta ele, como quem não quer a coisa. O dono do café pisca o olho ao Linu: “O seu amigo passa a vida a arrancar-me informações.”',
        translation: 'Eles se abrigam num café do porto, cheio de velejadores de todas as nacionalidades. O seu Álvaro pede três cafés com leite e começa a sondar o dono do café, que conhece todos os barcos e horários da ilha. “Então amanhã tem barco para o Pico às nove?”, pergunta ele, como quem não quer nada. O dono do café pisca para o Linu: “O seu amigo vive tentando arrancar informações de mim.”',
        choices: [
          { text: '“Vamos ao Pico amanhã? Quero ver a montanha de perto.”', translation: '“Vamos ao Pico amanhã? Quero ver a montanha de perto.”', next: 'manha' },
          {
            text: '“O Sr. Álvaro quer plantar nabos no Pico?”',
            translation: '“O seu Álvaro quer plantar nabos no Pico?”',
            wrong: '“Tirar nabos da púcara” é uma expressão de Portugal que quer dizer arrancar uma informação de alguém com jeito, sem dar na vista — no Brasil, algo como “sondar” ou “jogar verde para colher maduro”. O seu Álvaro só quer saber o horário do barco.',
          },
        ],
      },
      manha: {
        emoji: '🌅',
        text: 'No dia seguinte, o sol volta a brilhar e os três regressam ao cais para acabar a pintura. Há um barco para a Madalena do Pico às nove em ponto, e já são oito e meia. “Põe-te a pau com as horas, Linu”, avisa a Marta, “se te atrasas, ficas a ver navios.” O Linu ainda quer retocar as ondas, que ficaram um bocadinho tortas.',
        translation: 'No dia seguinte, o sol volta a brilhar e os três voltam ao cais para terminar a pintura. Tem um barco para a Madalena do Pico às nove em ponto, e já são oito e meia. “Fica esperto com o horário, Linu”, avisa a Marta, “se você se atrasar, vai ficar a ver navios.” O Linu ainda quer retocar as ondas, que ficaram um pouquinho tortas.',
        choices: [
          { text: '“Acabamos depressa e damos corda aos sapatos até ao barco.”', translation: '“Terminamos rápido e saímos correndo até o barco.”', next: 'pico' },
          { text: '“Eu fico a acabar as ondas com calma; vocês vão andando.”', translation: '“Eu fico terminando as ondas com calma; vocês vão indo.”', next: 'final_navios' },
          {
            text: '“Ver navios? Ótimo, adoro barcos!”',
            translation: '“Ver navios? Ótimo, adoro barcos!”',
            wrong: '“Ficar a ver navios” quer dizer ficar sem nada, perder a oportunidade — a expressão existe também no Brasil. A Marta está avisando que, se o Linu se atrasar, o barco para o Pico vai embora sem ele.',
          },
        ],
      },
      pico: {
        emoji: '🍇',
        text: 'Apanham o barco com um minuto de folga e, meia hora depois, desembarcam na Madalena. Um primo do Sr. Álvaro leva-os a ver as vinhas, plantadas entre muros de pedra negra que protegem as videiras do vento e do sal. “Isto aqui não se faz à grande e à francesa: é tudo à mão, pedra a pedra”, diz o primo, orgulhoso. O Linu olha para o Faial, do outro lado do canal, e tenta adivinhar onde fica a pintura deles.',
        translation: 'Eles pegam o barco com um minuto de folga e, meia hora depois, desembarcam na Madalena. Um primo do seu Álvaro leva os três para ver as vinhas, plantadas entre muros de pedra preta que protegem as parreiras do vento e do sal. “Aqui nada se faz com luxo: é tudo à mão, pedra por pedra”, diz o primo, orgulhoso. O Linu olha para o Faial, do outro lado do canal, e tenta adivinhar onde fica a pintura deles.',
        choices: [{ text: '“Obrigado pelo passeio! Foi uma viagem de sorte.”', translation: '“Obrigado pelo passeio! Foi uma viagem de sorte.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ao fim da tarde, voltam à Horta e passam pelo cais para ver o quadro já seco: um veleiro azul, três nomes e a data do dia. A Marta tira uma fotografia e manda-a à mãe, em Lisboa. “Agora sim, a travessia de regresso vai correr bem”, diz o Sr. Álvaro, muito sério. O Linu não sabe se acredita na lenda, mas também não vai tentar a sorte.',
        translation: 'No fim da tarde, eles voltam à Horta e passam pelo cais para ver o quadro já seco: um veleiro azul, três nomes e a data do dia. A Marta tira uma foto e manda para a mãe, em Lisboa. “Agora sim, a travessia de volta vai correr bem”, diz o seu Álvaro, muito sério. O Linu não sabe se acredita na lenda, mas também não vai arriscar.',
        ending: { tone: 'bom', title: 'Uma pintura na Horta', message: 'O Linu deixou a sua marca na marina mais pintada do Atlântico e entendeu as expressões do caminho: chover a potes, tirar nabos da púcara, pôr-se a pau, dar corda aos sapatos.' },
      },
      final_navios: {
        emoji: '🚢',
        text: 'O Linu fica a acabar as ondas com todo o cuidado, e a pintura fica lindíssima. Quando chega ao cais de embarque, o barco já vai a meio do canal. Da popa, a Marta acena-lhe e grita qualquer coisa que o vento leva. O Linu passa o dia na Horta a ver navios, literalmente.',
        translation: 'O Linu fica terminando as ondas com todo o cuidado, e a pintura fica lindíssima. Quando chega ao cais de embarque, o barco já está no meio do canal. Da popa, a Marta acena para ele e grita alguma coisa que o vento leva. O Linu passa o dia na Horta vendo navios, literalmente.',
        ending: { tone: 'neutro', title: 'A ver navios', message: 'A pintura ficou perfeita, mas o Linu perdeu o barco para o Pico. Tente de novo e dê corda aos sapatos!' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'pt-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'As vírgulas da Cabra',
    emoji: '🔔',
    summary: 'Em Coimbra, na noite da Serenata, o Linu ajuda uma estudante a rever a pontuação de um texto sobre a torre da Universidade antes do prazo.',
    cultural_context:
      'A torre da Universidade de Coimbra, construída no século XVIII, é o símbolo da cidade; o seu sino é conhecido pelos estudantes como “a Cabra”, apelido que tem várias explicações populares. Em maio, na Queima das Fitas, a festa dos estudantes que terminam o curso, a Serenata Monumental reúne à meia-noite milhares de pessoas nas escadarias da Sé Velha para ouvir o fado de Coimbra.',
    start: 'start',
    glossary: [
      ['há três séculos × daqui a três dias', 'faz três séculos (tempo passado) × daqui a três dias (futuro), igual nos dois países'],
      ['Porque é que…? / … porquê?', 'Por que…? / … por quê? (grafia do Brasil)'],
      ['mau × mal', 'mau (contrário de bom) × mal (contrário de bem)'],
      ['no entanto, porém, contudo', 'no entanto, porém, contudo (um de cada vez)'],
      ['o caloiro', 'o calouro'],
      ['a capa e batina', 'o traje acadêmico tradicional de Coimbra'],
      ['o ecrã', 'a tela'],
      ['no sítio', 'no lugar certo'],
    ],
    nodes: {
      start: {
        emoji: '🎓',
        text: 'Maio em Coimbra. O Linu atravessa a Porta Férrea e encontra, no Paço das Escolas, a Inês, uma estudante de Letras com a capa preta pelos ombros. Ela está aflita: tem de entregar até às onze e meia um texto sobre a torre da Universidade ao jornal dos estudantes. “Escrevi tudo à pressa e a pontuação está um desastre”, diz ela. “Ajudas-me a rever, antes da Serenata?”',
        translation: 'Maio em Coimbra. O Linu atravessa a Porta Férrea e encontra, no Paço das Escolas, a Inês, uma estudante de Letras com a capa preta nos ombros. Ela está aflita: tem que entregar até as onze e meia um texto sobre a torre da Universidade para o jornal dos estudantes. “Escrevi tudo às pressas e a pontuação está um desastre”, diz ela. “Você me ajuda a revisar, antes da Serenata?”',
        choices: [
          { text: '“Claro que sim! Mostra-me o texto.”', translation: '“Claro! Me mostra o texto.”', next: 'rascunho' },
          { text: '“Vou só espreitar a Sé Velha e volto daqui a uma hora.”', translation: '“Vou só dar uma olhada na Sé Velha e volto daqui a uma hora.”', next: 'final_sozinha' },
        ],
      },
      rascunho: {
        emoji: '📝',
        text: 'Sentam-se num degrau, e a Inês abre o portátil. A primeira frase diz: “A torre da Universidade, domina a cidade à quase três séculos.” O Linu franze o bico e aponta para o ecrã. “Aqui há dois problemas: um é de pontuação, o outro é a velha troca entre ‘há’ e ‘a’.”',
        translation: 'Eles se sentam num degrau, e a Inês abre o notebook. A primeira frase diz: “A torre da Universidade, domina a cidade à quase três séculos.” O Linu franze o bico e aponta para a tela. “Aqui tem dois problemas: um é de pontuação, o outro é a velha confusão entre ‘há’ e ‘a’.”',
        choices: [
          { text: '“Tira-se a vírgula entre o sujeito e o verbo e escreve-se ‘há quase três séculos’.”', translation: '“Tira-se a vírgula entre o sujeito e o verbo e escreve-se ‘há quase três séculos’.”', next: 'porques' },
          {
            text: '“Basta tirar a vírgula: ‘à quase três séculos’ está certo, porque indica tempo.”',
            translation: '“Basta tirar a vírgula: ‘à quase três séculos’ está certo, porque indica tempo.”',
            wrong: 'Tempo que já passou se escreve com o verbo haver: “há quase três séculos” (= faz quase três séculos). “A”, sem h, fica para o futuro e para a distância (“daqui a dois dias”, “a cem metros”), e “à”, com crase, não cabe aqui. A regra é a mesma em Portugal e no Brasil — assim como a de nunca separar o sujeito do verbo com vírgula.',
          },
        ],
      },
      porques: {
        emoji: '❓',
        text: 'O segundo parágrafo começa assim: “Porque é que os estudantes chamam ‘Cabra’ ao sino da torre? Há várias explicações, mas ninguém sabe ao certo porquê.” A Inês hesita: “No Brasil, não se escreveria separado?” O Linu explica que, nas perguntas, Portugal escreve “porque” junto e, no fim da frase, “porquê”; o Brasil escreve “por que”, separado, e, no fim, “por quê”. Nos dois países, “porque” sem acento é a conjunção da causa e “o porquê” é o substantivo.',
        translation: 'O segundo parágrafo começa assim: “Porque é que os estudantes chamam o sino da torre de ‘Cabra’? Há várias explicações, mas ninguém sabe ao certo porquê.” A Inês hesita: “No Brasil, não se escreveria separado?” O Linu explica que, nas perguntas, Portugal escreve “porque” junto e, no fim da frase, “porquê”; o Brasil escreve “por que”, separado, e, no fim, “por quê”. Nos dois países, “porque” sem acento é a conjunção de causa e “o porquê” é o substantivo.',
        choices: [{ text: '“Então o teu parágrafo está certinho, à maneira de Portugal.”', translation: '“Então o seu parágrafo está certinho, do jeito de Portugal.”', next: 'caloiros' }],
      },
      caloiros: {
        emoji: '🕰️',
        text: 'O terceiro parágrafo conta uma das explicações populares: o sino tocava de madrugada, para acordar os estudantes, e à noite, para os mandar recolher. A Inês escreveu: “Chegar depois da Cabra era um mal hábito, e o caloiro que se portava mau arriscava-se a ouvir das boas.” O Linu sublinha duas palavras a lápis. “Estas duas trocaram de lugar uma com a outra”, diz ele, a sorrir.',
        translation: 'O terceiro parágrafo conta uma das explicações populares: o sino tocava de madrugada, para acordar os estudantes, e à noite, para mandá-los de volta para casa. A Inês escreveu: “Chegar depois da Cabra era um mal hábito, e o calouro que se comportava mau corria o risco de ouvir poucas e boas.” O Linu sublinha duas palavras a lápis. “Essas duas trocaram de lugar”, diz ele, sorrindo.',
        choices: [
          { text: '“Fica ‘um mau hábito’ e ‘se portava mal’: mau é o contrário de bom, mal é o contrário de bem.”', translation: '“Fica ‘um mau hábito’ e ‘se comportava mal’: mau é o contrário de bom, mal é o contrário de bem.”', next: 'conectores' },
          {
            text: '“Está tudo certo: ‘mal’ vem antes do substantivo e ‘mau’ depois do verbo.”',
            translation: '“Está tudo certo: ‘mal’ vem antes do substantivo e ‘mau’ depois do verbo.”',
            wrong: 'É justamente o contrário. “Mau” é adjetivo, o oposto de “bom”, e acompanha substantivo: “um mau hábito” (um bom hábito). “Mal” é advérbio, o oposto de “bem”, e modifica o verbo: “portar-se mal” (portar-se bem). Um truque que funciona nos dois países: troque por bom/bem e veja qual cabe.',
          },
        ],
      },
      conectores: {
        emoji: '🔗',
        text: 'Para acabar, a Inês escreveu: “Hoje, o sino já não manda ninguém para casa. Porém, contudo, a tradição mantém-se, e os estudantes ainda falam da Cabra com carinho.” O Linu ri-se: “Dois conectores com o mesmo sentido, lado a lado, é como pôr dois chapéus na mesma cabeça.” A Inês concorda, envergonhada, e pede-lhe uma sugestão.',
        translation: 'Para terminar, a Inês escreveu: “Hoje, o sino já não manda ninguém para casa. Porém, contudo, a tradição se mantém, e os estudantes ainda falam da Cabra com carinho.” O Linu ri: “Dois conectores com o mesmo sentido, lado a lado, é como pôr dois chapéus na mesma cabeça.” A Inês concorda, sem graça, e pede uma sugestão a ele.',
        choices: [{ text: '“‘No entanto, a tradição mantém-se’: um conector só, seguido de vírgula, chega bem.”', translation: '“‘No entanto, a tradição se mantém’: um conector só, seguido de vírgula, já basta.”', next: 'envio' }],
      },
      envio: {
        emoji: '📧',
        text: 'São onze e vinte e cinco, e a Inês escreve o e-mail ao diretor do jornal: “Caro diretor segue em anexo o texto sobre a torre obrigada Inês.” O Linu tapa o ecrã com a asa: “Espera! Sem vírgulas nem pontos, isto parece um telegrama.” Lá fora, já se ouvem as guitarras a afinar para a Serenata. A Inês olha para o relógio, depois para o Linu.',
        translation: 'São onze e vinte e cinco, e a Inês escreve o e-mail para o diretor do jornal: “Caro diretor segue em anexo o texto sobre a torre obrigada Inês.” O Linu cobre a tela com a asa: “Espera! Sem vírgula nem ponto, isso parece um telegrama.” Lá fora, já se ouvem as guitarras sendo afinadas para a Serenata. A Inês olha para o relógio, depois para o Linu.',
        choices: [
          { text: '“Escreve: ‘Caro Diretor, segue em anexo o texto sobre a torre. Obrigada, Inês.’”', translation: '“Escreve: ‘Caro Diretor, segue em anexo o texto sobre a torre. Obrigada, Inês.’”', next: 'final_bom' },
          { text: '“Não há tempo. Envia assim e vamos para a Serenata!”', translation: '“Não dá tempo. Manda assim e vamos para a Serenata!”', next: 'final_telegrama' },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'O e-mail parte às onze e vinte e oito, com todas as vírgulas no sítio. À meia-noite, na escadaria da Sé Velha, milhares de estudantes de capa preta ouvem a Serenata em silêncio, e a Inês aperta a asa do Linu. No dia seguinte, o texto sai no jornal sem uma única emenda. “Para a próxima, és tu o meu revisor oficial”, promete ela.',
        translation: 'O e-mail sai às onze e vinte e oito, com todas as vírgulas no lugar. À meia-noite, na escadaria da Sé Velha, milhares de estudantes de capa preta ouvem a Serenata em silêncio, e a Inês aperta a asa do Linu. No dia seguinte, o texto sai no jornal sem nenhuma correção. “Da próxima vez, você é o meu revisor oficial”, promete ela.',
        ending: { tone: 'bom', title: 'Texto sem emendas', message: 'Nada de vírgula entre sujeito e verbo, “há” para o tempo passado, porque/porquê, mau × mal, um conector de cada vez e vírgula no vocativo: o texto da Inês ficou impecável.' },
      },
      final_telegrama: {
        emoji: '📠',
        text: 'A Inês carrega em “enviar” e os dois correm para a Sé Velha. A Serenata é inesquecível, mas no dia seguinte o diretor responde: “Recebi o telegrama. Texto excelente, pontuação do e-mail por rever.” A Inês fica corada e o Linu promete que, da próxima vez, não deixa passar nem uma vírgula.',
        translation: 'A Inês clica em “enviar” e os dois correm para a Sé Velha. A Serenata é inesquecível, mas no dia seguinte o diretor responde: “Recebi o telegrama. Texto excelente, pontuação do e-mail a revisar.” A Inês fica vermelha e o Linu promete que, da próxima vez, não deixa passar nem uma vírgula.',
        ending: { tone: 'neutro', title: 'O telegrama', message: 'O texto estava bom, mas o e-mail sem vírgula nem ponto pegou mal. O vocativo (“Caro Diretor,”) e o fecho (“Obrigada, Inês”) pedem vírgula nos dois países.' },
      },
      final_sozinha: {
        emoji: '⏰',
        text: 'O Linu perde-se nas ruelas da Alta e só volta passada uma hora e meia. A Inês já tinha enviado o texto, com a vírgula entre o sujeito e o verbo e tudo. “O diretor devolveu-mo cheio de emendas a vermelho”, conta ela, a rir. Ao menos, a Serenata ainda está para começar.',
        translation: 'O Linu se perde nas ruelas da Alta e só volta depois de uma hora e meia. A Inês já tinha enviado o texto, com vírgula entre o sujeito e o verbo e tudo. “O diretor me devolveu cheio de correções em vermelho”, conta ela, rindo. Pelo menos, a Serenata ainda vai começar.',
        ending: { tone: 'neutro', title: 'Revisão perdida', message: 'A Inês precisava de ajuda com a pontuação, e o Linu foi passear. Tente de novo e revise o texto com ela!' },
      },
    },
  },
  {
    id: 'pt-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Um folheto para Belém',
    emoji: '🏛️',
    summary: 'Em Belém, o Linu acompanha um guia reformado que prepara um folheto para uma visita de estudo e revê com ele vírgulas, conectores, há × a e onde × aonde.',
    cultural_context:
      'O Mosteiro dos Jerónimos e a Torre de Belém, construídos no começo do século XVI, no reinado de D. Manuel I, são Patrimônio Mundial da UNESCO desde 1983. O Padrão dos Descobrimentos, na forma que hoje se vê, foi inaugurado em 1960, quando se assinalavam os quinhentos anos da morte do Infante D. Henrique.',
    start: 'start',
    glossary: [
      ['reformado', 'aposentado'],
      ['a visita de estudo', 'a excursão da escola'],
      ['a oração explicativa entre vírgulas', 'a oração explicativa entre vírgulas (igual no Brasil)'],
      ['a um quilómetro × há três séculos', 'a um quilômetro (distância) × há três séculos (tempo passado)'],
      ['aonde vão? × onde estão?', 'aonde vão? (movimento) × onde estão? (lugar)'],
      ['mas × mais', 'mas (oposição) × mais (quantidade)'],
      ['daqui a duas semanas', 'daqui a duas semanas (nunca “daqui há”)'],
      ['a chávena', 'a xícara'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Manhã de primavera em Belém. No jardim em frente ao Mosteiro dos Jerónimos, o Linu encontra o Sr. Henrique, um guia reformado que está a preparar um folheto para uma visita de estudo do 6.º ano. “Escrevo bem de cabeça, mas a pontuação foge-me”, confessa ele. “Vens comigo fazer o percurso e rever o texto pelo caminho?”',
        translation: 'Manhã de primavera em Belém. No jardim em frente ao Mosteiro dos Jerónimos, o Linu encontra o seu Henrique, um guia aposentado que está preparando um folheto para uma excursão do 6º ano. “Escrevo bem de cabeça, mas a pontuação me escapa”, confessa ele. “Você vem comigo fazer o percurso e revisar o texto pelo caminho?”',
        choices: [{ text: '“Com todo o gosto! Por onde começamos?”', translation: '“Com todo o prazer! Por onde começamos?”', next: 'jeronimos' }],
      },
      jeronimos: {
        emoji: '⛪',
        text: 'Diante da fachada de pedra trabalhada, o Sr. Henrique lê a primeira frase: “O Mosteiro dos Jerónimos, que D. Manuel I mandou construir no início do século XVI guarda os túmulos de Vasco da Gama e de Luís de Camões.” O Linu repara que falta qualquer coisa. “A oração ‘que D. Manuel I mandou construir…’ está no meio da frase”, diz ele. “Abriu-se a vírgula, mas ninguém a fechou.”',
        translation: 'Diante da fachada de pedra trabalhada, o seu Henrique lê a primeira frase: “O Mosteiro dos Jerónimos, que D. Manuel I mandou construir no início do século XVI guarda os túmulos de Vasco da Gama e de Luís de Camões.” O Linu percebe que falta alguma coisa. “A oração ‘que D. Manuel I mandou construir…’ está no meio da frase”, diz ele. “Abriram a vírgula, mas ninguém fechou.”',
        choices: [
          { text: '“Põe-se outra vírgula depois de ‘século XVI’, antes de ‘guarda’.”', translation: '“Coloca-se outra vírgula depois de ‘século XVI’, antes de ‘guarda’.”', next: 'torre' },
          {
            text: '“Então tira-se também a primeira vírgula, e fica tudo seguido.”',
            translation: '“Então tira-se também a primeira vírgula, e fica tudo corrido.”',
            wrong: 'A oração “que D. Manuel I mandou construir no início do século XVI” é explicativa, um comentário no meio da frase: vai entre DUAS vírgulas, uma para abrir e outra para fechar. Sem vírgula nenhuma, ela viraria restritiva, como se houvesse vários mosteiros dos Jerónimos. A regra é igual em Portugal e no Brasil.',
          },
        ],
      },
      torre: {
        emoji: '🏰',
        text: 'Caminham ao longo do rio até à Torre de Belém, que parece pousada na água. O Sr. Henrique tira outra folha do bolso e lê: “A torre fica há pouco mais de um quilómetro do mosteiro. Onde vão os alunos a seguir?” O Linu sorri, porque já sabe o que vai dizer. Uma gaivota pousa no muro, como quem também quer ouvir a resposta.',
        translation: 'Eles caminham ao longo do rio até a Torre de Belém, que parece pousada na água. O seu Henrique tira outra folha do bolso e lê: “A torre fica há pouco mais de um quilómetro do mosteiro. Onde vão os alunos a seguir?” O Linu sorri, porque já sabe o que vai dizer. Uma gaivota pousa no muro, como se também quisesse ouvir a resposta.',
        choices: [
          { text: '“‘Fica a pouco mais de um quilómetro’, que é distância, e ‘Aonde vão os alunos’, que é movimento.”', translation: '“‘Fica a pouco mais de um quilômetro’, que é distância, e ‘Aonde vão os alunos’, que é movimento.”', next: 'padrao' },
          {
            text: '“Está certo: ‘há’ indica distância e ‘onde’ serve bem com o verbo ir.”',
            translation: '“Está certo: ‘há’ indica distância e ‘onde’ combina bem com o verbo ir.”',
            wrong: '“Há” é do verbo haver e indica tempo passado (“há três séculos”); a distância leva “a” (“a um quilômetro”). E com verbos de movimento, como “ir”, a norma culta dos dois países pede “aonde” (ir a algum lugar); “onde” fica para “estar”, “ficar”, “morar”.',
          },
        ],
      },
      padrao: {
        emoji: '🧭',
        text: 'Do outro lado da avenida, o Padrão dos Descobrimentos ergue-se como a proa de uma caravela, com dezenas de figuras esculpidas. No chão, uma enorme rosa-dos-ventos em calçada mostra as rotas dos navegadores. O Sr. Henrique escreveu: “Os alunos vão querer subir ao miradouro, mais convém chegar cedo, porque há sempre fila.” O Linu aponta para a palavra “mais” e pergunta-lhe se é mesmo de quantidade que ali se trata.',
        translation: 'Do outro lado da avenida, o Padrão dos Descobrimentos se ergue como a proa de uma caravela, com dezenas de figuras esculpidas. No chão, uma enorme rosa dos ventos em pedra portuguesa mostra as rotas dos navegadores. O seu Henrique escreveu: “Os alunos vão querer subir ao mirante, mais convém chegar cedo, porque sempre tem fila.” O Linu aponta para a palavra “mais” e pergunta se ali se trata mesmo de quantidade.',
        choices: [
          { text: '“Tem de ser ‘mas’: é uma oposição, não uma quantidade.”', translation: '“Tem que ser ‘mas’: é uma oposição, não uma quantidade.”', next: 'pausa' },
          { text: '“Deixe estar, Sr. Henrique. Ninguém repara nisso.”', translation: '“Deixa pra lá, seu Henrique. Ninguém repara nisso.”', next: 'final_folheto' },
        ],
      },
      pausa: {
        emoji: '🥧',
        text: 'Já passa do meio-dia, e o Sr. Henrique propõe uma pausa para um pastel de nata e um café. “Conta-se que a receita saiu do mosteiro, no século XIX, quando as ordens religiosas foram extintas”, diz ele, a polvilhar o pastel com canela. Ao lado da chávena, relê o parágrafo final: “Visitem o mosteiro a torre e o padrão e no fim provem um pastel de nata.” O Linu pega na caneta sem dizer nada.',
        translation: 'Já passa do meio-dia, e o seu Henrique propõe uma pausa para um pastel de nata e um café. “Dizem que a receita saiu do mosteiro, no século XIX, quando as ordens religiosas foram extintas”, diz ele, polvilhando canela no pastel. Ao lado da xícara, ele relê o parágrafo final: “Visitem o mosteiro a torre e o padrão e no fim provem um pastel de nata.” O Linu pega a caneta sem dizer nada.',
        choices: [{ text: 'O Linu escreve: “Visitem o mosteiro, a torre e o padrão e, no fim, provem um pastel de nata.”', translation: 'O Linu escreve: “Visitem o mosteiro, a torre e o padrão e, no fim, provem um pastel de nata.”', next: 'professora' }],
      },
      professora: {
        emoji: '📞',
        text: 'Ao sair da pastelaria, o Sr. Henrique telefona à professora, a Dra. Lúcia, para confirmar a data. Depois acrescenta a última linha do folheto: “A visita é daqui há duas semanas, às nove e meia, junto à entrada do mosteiro.” O Linu já nem precisa de dizer nada: basta-lhe levantar uma sobrancelha. O Sr. Henrique suspira e pega outra vez na caneta.',
        translation: 'Ao sair da confeitaria, o seu Henrique liga para a professora, a doutora Lúcia, para confirmar a data. Depois acrescenta a última linha do folheto: “A visita é daqui há duas semanas, às nove e meia, junto à entrada do mosteiro.” O Linu nem precisa dizer nada: basta levantar uma sobrancelha. O seu Henrique suspira e pega a caneta de novo.',
        choices: [
          { text: '“‘Daqui a duas semanas’: o futuro escreve-se com ‘a’.”', translation: '“‘Daqui a duas semanas’: o futuro se escreve com ‘a’.”', next: 'final_bom' },
          {
            text: '“Fica ‘há’, porque a visita já aconteceu.”',
            translation: '“Fica ‘há’, porque a visita já aconteceu.”',
            wrong: 'A visita ainda vai acontecer: “daqui a duas semanas” é futuro, e o futuro se escreve com “a”. “Há” (verbo haver) é para o tempo que já passou: “a visita foi há duas semanas”.',
          },
        ],
      },
      final_bom: {
        emoji: '🎒',
        text: 'Duas semanas depois, vinte e seis alunos seguem o folheto de ponta a ponta, do mosteiro à torre e da torre ao padrão. No fim, sentados na relva, comem pastéis de nata com canela. A Dra. Lúcia elogia o texto: “Claro, bem pontuado, sem uma gralha!” O Sr. Henrique pisca o olho ao Linu, que finge estar muito interessado numa gaivota.',
        translation: 'Duas semanas depois, vinte e seis alunos seguem o folheto de ponta a ponta, do mosteiro à torre e da torre ao padrão. No fim, sentados na grama, comem pastéis de nata com canela. A doutora Lúcia elogia o texto: “Claro, bem pontuado, sem nenhum erro de digitação!” O seu Henrique pisca para o Linu, que finge estar muito interessado numa gaivota.',
        ending: { tone: 'bom', title: 'Folheto sem gralhas', message: 'Oração explicativa entre duas vírgulas, “a” para distância e futuro, “há” para o passado, “aonde” com movimento, “mas” × “mais” e vírgulas na enumeração: o folheto de Belém ficou perfeito.' },
      },
      final_folheto: {
        emoji: '🙈',
        text: 'O folheto vai para a gráfica com o “mais” no lugar do “mas”. Na visita, uma aluna de onze anos levanta o dedo: “Sr. Henrique, aqui não devia ser ‘mas’?” O guia fica vermelho como um tomate. O Linu promete a si mesmo nunca mais dizer “ninguém repara”.',
        translation: 'O folheto vai para a gráfica com o “mais” no lugar do “mas”. Na visita, uma aluna de onze anos levanta a mão: “Seu Henrique, aqui não devia ser ‘mas’?” O guia fica vermelho como um tomate. O Linu promete a si mesmo nunca mais dizer “ninguém repara”.',
        ending: { tone: 'neutro', title: 'Alguém reparou', message: 'Sempre tem alguém que repara! “Mas” indica oposição; “mais”, quantidade. Tente de novo e corrija o folheto.' },
      },
    },
  },
  {
    id: 'pt-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'A caça ao tesouro de Macau',
    emoji: '🏮',
    summary: 'Em Macau, o Linu entra na caça ao tesouro de uma família macaense, em que cada pista depende de uma vírgula, de um conector ou de um porquê.',
    cultural_context:
      'Macau esteve sob administração portuguesa até 20 de dezembro de 1999, e o português continua a ser língua oficial ao lado do chinês; as placas das ruas são bilíngues. As Ruínas de São Paulo são a fachada da antiga igreja da Madre de Deus, destruída por um incêndio em 1835, e fazem parte do Centro Histórico de Macau, Patrimônio Mundial da UNESCO desde 2005. A comunidade macaense tem uma culinária própria, como o minchi, e um crioulo, o patuá, hoje em perigo de extinção.',
    start: 'start',
    glossary: [
      ['a pista', 'a pista (o bilhete da caça ao tesouro)'],
      ['não está em A, mas em B', 'não está em A, mas em B (a vírgula antes de “mas”)'],
      ['o porquê × porque', 'o motivo (substantivo) × porque (conjunção)'],
      ['contudo', 'contudo, mas, porém'],
      ['Vamos comer, avó!', 'Vamos comer, vó! (vírgula do vocativo)'],
      ['o minchi', 'prato macaense de carne picada com batata'],
      ['o largo', 'a pracinha'],
      ['a tia (tratamento)', 'a tia (tratamento carinhoso para uma senhora mais velha)'],
    ],
    nodes: {
      start: {
        emoji: '🎂',
        text: 'Domingo à tarde em Macau. O Linu é convidado para o aniversário da Tia Beatriz, uma senhora macaense de oitenta anos que prepara sempre uma caça ao tesouro para os netos. Este ano, o Martinho, o neto mais novo, escolheu o Linu para a sua equipa. As pistas estão escritas à mão, e a pontuação, avisa a Tia Beatriz, “conta tanto como as palavras”.',
        translation: 'Domingo à tarde em Macau. O Linu é convidado para o aniversário da tia Beatriz, uma senhora macaense de oitenta anos que sempre prepara uma caça ao tesouro para os netos. Este ano, o Martinho, o neto mais novo, escolheu o Linu para a equipe dele. As pistas estão escritas à mão, e a pontuação, avisa a tia Beatriz, “conta tanto quanto as palavras”.',
        choices: [{ text: '“Estamos prontos, Tia Beatriz! Onde está a primeira pista?”', translation: '“Estamos prontos, tia Beatriz! Cadê a primeira pista?”', next: 'pista1' }],
      },
      pista1: {
        emoji: '⛲',
        text: 'A primeira pista está debaixo do prato do bolo: “A próxima pista não está na fonte do Largo do Senado, mas na porta da igreja de São Domingos, onde o largo acaba.” O Martinho sai a correr em direção à fonte, entre turistas e ondas de calçada preta e branca. O Linu relê o papel com atenção. “Espera, Martinho! Lê outra vez a parte depois da vírgula.”',
        translation: 'A primeira pista está embaixo do prato do bolo: “A próxima pista não está na fonte do Largo do Senado, mas na porta da igreja de São Domingos, onde o largo acaba.” O Martinho sai correndo em direção à fonte, entre turistas e ondas de calçada preta e branca. O Linu relê o papel com atenção. “Espera, Martinho! Lê de novo a parte depois da vírgula.”',
        choices: [
          { text: '“A pista está na porta da igreja de São Domingos, ao fundo do largo.”', translation: '“A pista está na porta da igreja de São Domingos, no fundo do largo.”', next: 'sdomingos' },
          {
            text: '“Vamos procurar à volta da fonte, como diz a pista.”',
            translation: '“Vamos procurar em volta da fonte, como diz a pista.”',
            wrong: 'A pista diz que a próxima pista NÃO está na fonte, “mas na porta da igreja de São Domingos”. Com “não… mas…”, a segunda parte, depois da vírgula, é a que vale: é ela que corrige a primeira.',
          },
        ],
      },
      sdomingos: {
        emoji: '⛪',
        text: 'À porta da igreja amarela, um senhor idoso, amigo da família, entrega-lhes um envelope. A pista diz: “Subam até às Ruínas de São Paulo e descubram porque é que só resta a fachada. Quando souberem o porquê, perguntem pelo senhor dos postais.” O Martinho coça a cabeça: “Porque é que aqui há ‘porque’ junto e depois ‘o porquê’ com acento?” O Linu explica-lhe que “porque” liga a pergunta à causa e que “o porquê”, com artigo, é um substantivo, igual a “o motivo”.',
        translation: 'Na porta da igreja amarela, um senhor idoso, amigo da família, entrega um envelope para eles. A pista diz: “Subam até as Ruínas de São Paulo e descubram por que só resta a fachada. Quando souberem o porquê, procurem o senhor dos cartões-postais.” O Martinho coça a cabeça: “Por que aqui tem ‘porque’ junto e depois ‘o porquê’ com acento?” O Linu explica que “porque” liga a pergunta à causa e que “o porquê”, com artigo, é um substantivo, igual a “o motivo”.',
        choices: [{ text: '“Vamos às Ruínas! Lá deve haver uma placa com a história.”', translation: '“Vamos às Ruínas! Lá deve ter uma placa com a história.”', next: 'ruinas' }],
      },
      ruinas: {
        emoji: '🧱',
        text: 'Sobem a escadaria larga até à fachada de pedra, que se ergue sozinha contra o céu. Numa placa, o Linu lê que a igreja da Madre de Deus e o colégio ao lado foram destruídos por um incêndio em 1835 e que só a fachada resistiu. Ao lado, o senhor dos postais espera-os de braços cruzados. “Então, meninos, porquê?”',
        translation: 'Eles sobem a escadaria larga até a fachada de pedra, que se ergue sozinha contra o céu. Numa placa, o Linu lê que a igreja da Madre de Deus e o colégio ao lado foram destruídos por um incêndio em 1835 e que só a fachada resistiu. Ao lado, o senhor dos cartões-postais espera os dois de braços cruzados. “E então, crianças, por quê?”',
        choices: [
          { text: '“Porque houve um incêndio em 1835, e só a fachada ficou de pé.”', translation: '“Porque teve um incêndio em 1835, e só a fachada ficou de pé.”', next: 'pista3' },
          {
            text: '“Porque foi construída assim de propósito, só com a fachada, para as fotografias.”',
            translation: '“Porque foi construída assim de propósito, só com a fachada, para as fotos.”',
            wrong: 'A placa conta outra história: a igreja e o colégio “foram destruídos por um incêndio em 1835”, e só a fachada resistiu. Ela nunca foi construída sozinha.',
          },
        ],
      },
      pista3: {
        emoji: '✉️',
        text: 'O senhor dos postais sorri e entrega-lhes a última pista: “O tesouro está onde se come; contudo, não está na mesa. Procura-o, Martinho, antes do jantar.” O Martinho quer ir logo a um restaurante da Rua da Felicidade, que fica ali perto. O Linu lembra-lhe que “contudo” é um “mas” mais elegante e que as vírgulas à volta de “Martinho” só servem para chamar por ele.',
        translation: 'O senhor dos cartões-postais sorri e entrega a última pista: “O tesouro está onde se come; contudo, não está na mesa. Procure-o, Martinho, antes do jantar.” O Martinho quer ir direto para um restaurante da Rua da Felicidade, que fica ali perto. O Linu lembra que “contudo” é um “mas” mais elegante e que as vírgulas em volta de “Martinho” só servem para chamá-lo.',
        choices: [
          { text: '“Onde se come, mas não na mesa… Na cozinha da tua avó!”', translation: '“Onde se come, mas não na mesa… Na cozinha da sua avó!”', next: 'cozinha' },
          { text: '“Tens razão, vamos procurar nos restaurantes.”', translation: '“Você tem razão, vamos procurar nos restaurantes.”', next: 'final_restaurante' },
        ],
      },
      cozinha: {
        emoji: '🍲',
        text: 'Voltam a casa a correr, e o cheiro do minchi já enche o corredor. Na cozinha, dentro da panela maior, que está vazia, encontram um caderno antigo, embrulhado num lenço de seda. São as receitas da família, escritas à mão pela bisavó, em português, com algumas palavras em patuá. O Martinho, radiante, grita: “Vamos comer avó!”',
        translation: 'Eles voltam correndo para casa, e o cheiro do minchi já enche o corredor. Na cozinha, dentro da panela maior, que está vazia, encontram um caderno antigo, embrulhado num lenço de seda. São as receitas da família, escritas à mão pela bisavó, em português, com algumas palavras em patuá. O Martinho, radiante, grita: “Vamos comer vó!”',
        choices: [{ text: '“Martinho, falta a vírgula: ‘Vamos comer, avó!’”', translation: '“Martinho, faltou a vírgula: ‘Vamos comer, vó!’”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'A Tia Beatriz ri-se até às lágrimas: “Sem a vírgula, quem ia para a panela era eu!” Depois explica que o caderno é o verdadeiro tesouro da família e que, a partir de hoje, fica guardado pelo Martinho. Ao jantar, comem o minchi da receita da bisavó, e o Linu repete duas vezes. “Para o ano, as pistas são tuas”, diz a Tia Beatriz ao pinguim.',
        translation: 'A tia Beatriz ri até chorar: “Sem a vírgula, quem ia para a panela era eu!” Depois explica que o caderno é o verdadeiro tesouro da família e que, a partir de hoje, fica guardado com o Martinho. No jantar, eles comem o minchi da receita da bisavó, e o Linu repete duas vezes. “No ano que vem, as pistas são suas”, diz a tia Beatriz ao pinguim.',
        ending: { tone: 'bom', title: 'O tesouro da bisavó', message: 'O Linu leu cada pista com atenção: “não… mas”, porque × o porquê, “contudo”, a vírgula do vocativo. E salvou a avó da panela!' },
      },
      final_restaurante: {
        emoji: '🥢',
        text: 'Passam uma hora a espreitar restaurantes e a perguntar pelo tesouro a empregados cada vez mais confusos. Quando voltam a casa, a prima Sofia já encontrou o caderno na cozinha. “Onde se come, mas não na mesa”, repete a Tia Beatriz. O Martinho percebe, tarde demais, que devia ter lido a pista até ao fim.',
        translation: 'Eles passam uma hora espiando restaurantes e perguntando pelo tesouro a garçons cada vez mais confusos. Quando voltam para casa, a prima Sofia já achou o caderno na cozinha. “Onde se come, mas não na mesa”, repete a tia Beatriz. O Martinho percebe, tarde demais, que devia ter lido a pista até o fim.',
        ending: { tone: 'neutro', title: 'Tesouro alheio', message: 'O “contudo” avisava: não era na mesa de um restaurante, era na cozinha de casa. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'pt-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Mata-bicho em Luanda',
    emoji: '🌴',
    summary: 'Em Luanda, o Linu passa um dia com um amigo angolano e descobre o vocabulário, a sintaxe e o ritmo do português de Angola.',
    cultural_context:
      'Em Luanda, o português é a primeira língua de grande parte da população, e convive com línguas nacionais como o quimbundo, falado tradicionalmente na região da capital, o umbundo e o quicongo. O português de Angola tem palavras próprias, muitas vindas dessas línguas (kota, kamba, maka), e é comum a próclise na fala (“me dá”), como no Brasil. A Fortaleza de São Miguel, construída pelos portugueses no século XVI, domina a baía de Luanda.',
    start: 'start',
    glossary: [
      ['o mata-bicho (Angola, Moçambique)', 'o café da manhã'],
      ['o kamba (Angola)', 'o amigo, o parceiro'],
      ['o/a kota (Angola)', 'a pessoa mais velha (com respeito); também pai ou mãe'],
      ['a maka (Angola)', 'o problema, a confusão'],
      ['o candongueiro (Angola)', 'a van de transporte coletivo, azul e branca'],
      ['a zungueira (Angola)', 'a vendedora ambulante que anda pelas ruas'],
      ['bazar (Angola; gíria também em Portugal)', 'ir embora, vazar'],
      ['“Me passa o açúcar” (Angola)', 'Me passa o açúcar (próclise como no Brasil; em Portugal, “Passa-me”)'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Manhã quente em Luanda. À porta do hotel, o Nelson, um estudante de Letras que o Linu conheceu num curso de verão em Lisboa, recebe-o com um abraço. “Então, kamba, estás bem? Antes de mais nada, vamos matar o bicho em casa da minha avó.” O Linu fica a pensar que bicho será esse. O Nelson ri-se, porque já conhece aquela cara de estrangeiro.',
        translation: 'Manhã quente em Luanda. Na porta do hotel, o Nelson, um estudante de Letras que o Linu conheceu num curso de verão em Lisboa, recebe o amigo com um abraço. “E aí, parceiro, tudo bem? Antes de mais nada, vamos tomar café da manhã na casa da minha avó.” O Linu fica pensando que bicho será esse. O Nelson ri, porque já conhece aquela cara de estrangeiro.',
        choices: [
          { text: '“Matar o bicho é tomar o pequeno-almoço, não é? Vamos a isso!”', translation: '“Matar o bicho é tomar café da manhã, né? Vamos lá!”', next: 'matabicho' },
          {
            text: '“Um bicho? Eu não tenho coragem de fazer mal a um animal.”',
            translation: '“Um bicho? Eu não tenho coragem de machucar um animal.”',
            wrong: '“Matar o bicho” e “o mata-bicho”, em Angola e Moçambique, querem dizer a primeira refeição do dia — o café da manhã. Nenhum animal corre perigo! Em Portugal, a expressão também existe no registro popular, para um gole ou um petisco logo cedo.',
          },
        ],
      },
      matabicho: {
        emoji: '☕',
        text: 'Na casa da avó, no bairro de Alvalade, a mesa já está posta: pão, manteiga, café forte e um pratinho de ginguba torrada. A Dona Esperança, uma senhora de setenta anos, cumprimenta o Linu com cerimónia e depois vira-se para o neto: “Me passa o açúcar, Nelson, e não fiques aí parado.” O Nelson explica ao Linu que em Angola, como no Brasil, é comum pôr o pronome antes do verbo na conversa. “Aqui a minha kota é que manda”, acrescenta, “e com a kota não há maka.”',
        translation: 'Na casa da avó, no bairro de Alvalade, a mesa já está posta: pão, manteiga, café forte e um pratinho de amendoim torrado. A dona Esperança, uma senhora de setenta anos, cumprimenta o Linu com cerimônia e depois se vira para o neto: “Me passa o açúcar, Nelson, e não fica aí parado.” O Nelson explica ao Linu que em Angola, como no Brasil, é comum colocar o pronome antes do verbo na conversa. “Aqui quem manda é a minha avó”, acrescenta, “e com ela não tem confusão.”',
        choices: [
          { text: '“Vamos à Ilha de candongueiro, para eu ver a cidade como vocês a veem?”', translation: '“Vamos para a Ilha de candongueiro, para eu ver a cidade como vocês veem?”', next: 'candongueiro' },
          { text: '“Prefiro ir a pé pela Marginal e ver a baía com calma.”', translation: '“Prefiro ir a pé pela Marginal e ver a baía com calma.”', next: 'marginal' },
        ],
      },
      candongueiro: {
        emoji: '🚐',
        text: 'Na paragem, as carrinhas azuis e brancas passam umas atrás das outras. De cada janela, um cobrador grita o destino a toda a velocidade: “Ilha, Ilha, Ilha!” O Nelson puxa o Linu para dentro de uma delas, onde já vão catorze pessoas, um cesto de peixe e uma rádio a tocar semba. “É bué apertado, mas chega-se depressa”, diz o Nelson, enquanto o motorista se mete entre dois camiões.',
        translation: 'No ponto, as vans azuis e brancas passam uma atrás da outra. De cada janela, um cobrador grita o destino a toda a velocidade: “Ilha, Ilha, Ilha!” O Nelson puxa o Linu para dentro de uma delas, onde já estão catorze pessoas, um cesto de peixe e um rádio tocando semba. “É muito apertado, mas se chega rápido”, diz o Nelson, enquanto o motorista se enfia entre dois caminhões.',
        choices: [{ text: '“Não sabia que ‘bué’ também se usava em Angola!”', translation: '“Eu não sabia que ‘bué’ também se usava em Angola!”', next: 'ilha' }],
      },
      marginal: {
        emoji: '🏰',
        text: 'Pela Marginal, o Linu e o Nelson caminham entre palmeiras, com a baía à esquerda e a Fortaleza de São Miguel lá no alto. Uma zungueira passa por eles com uma bacia de fruta à cabeça e chama: “Mais-velho, quer múcua? Está docinha!” O Nelson explica que “mais-velho” é uma forma de respeito e que a múcua é o fruto do imbondeiro, a grande árvore de tronco largo que é símbolo de Angola. O Linu prova-a e acha-lhe um sabor ácido e cremoso ao mesmo tempo.',
        translation: 'Pela Marginal, o Linu e o Nelson caminham entre palmeiras, com a baía à esquerda e a Fortaleza de São Miguel lá no alto. Uma vendedora ambulante passa por eles com uma bacia de frutas na cabeça e chama: “Mais-velho, quer múcua? Está docinha!” O Nelson explica que “mais-velho” é uma forma de respeito e que a múcua é o fruto do imbondeiro, o baobá, a grande árvore de tronco largo que é símbolo de Angola. O Linu prova e acha o sabor ácido e cremoso ao mesmo tempo.',
        choices: [{ text: '“Que delícia! Agora vamos à Ilha?”', translation: '“Que delícia! Agora vamos para a Ilha?”', next: 'ilha' }],
      },
      ilha: {
        emoji: '🏖️',
        text: 'Na Ilha de Luanda, uma língua de areia que fecha a baía, almoçam muamba de galinha com funje numa esplanada à beira-mar. O Nelson, que está a escrever um trabalho sobre variação linguística, fala com entusiasmo: “O português de Angola não é português mal falado, é o nosso português.” Dá exemplos: “garina” é rapariga, “bazar” é ir embora, e há palavras que vieram do quimbundo, como “kamba” e “maka”. O Linu pergunta-lhe se os portugueses percebem tudo, e o Nelson encolhe os ombros: “Algumas já foram parar a Lisboa, pela boca dos jovens.”',
        translation: 'Na Ilha de Luanda, uma faixa de areia que fecha a baía, eles almoçam muamba de galinha com funje num restaurante de mesas ao ar livre à beira-mar. O Nelson, que está fazendo um trabalho sobre variação linguística, fala com entusiasmo: “O português de Angola não é português mal falado, é o nosso português.” Ele dá exemplos: “garina” é moça, “bazar” é ir embora, e há palavras que vieram do quimbundo, como “kamba” e “maka”. O Linu pergunta se os portugueses entendem tudo, e o Nelson dá de ombros: “Algumas já foram parar em Lisboa, na boca dos jovens.”',
        choices: [
          { text: '“Então o português de Angola tem norma própria, tal como o de Portugal e o do Brasil.”', translation: '“Então o português de Angola tem norma própria, assim como o de Portugal e o do Brasil.”', next: 'musica' },
          {
            text: '“Então ‘garina’ é uma palavra que os jovens de Lisboa inventaram.”',
            translation: '“Então ‘garina’ é uma palavra que os jovens de Lisboa inventaram.”',
            wrong: 'O Nelson disse o contrário: “garina” (moça) é do português de Angola, e algumas palavras angolanas é que “foram parar a Lisboa, pela boca dos jovens”. A influência, aqui, vai de Luanda para Lisboa.',
          },
        ],
      },
      musica: {
        emoji: '🎶',
        text: 'Ao fim da tarde, num bar da Ilha, um grupo toca semba ao vivo e os pares enchem a pista. Os amigos do Nelson chegam, cumprimentam o Linu com um “estás fixe, kamba?” e puxam-no para a roda. Às dez, o Nelson olha para o relógio: “Amanhã tenho aulas cedo. Vamos bazar daqui a meia hora?” O Linu está a divertir-se imenso, mas também está cansado da viagem.',
        translation: 'No fim da tarde, num bar da Ilha, um grupo toca semba ao vivo e os casais enchem a pista. Os amigos do Nelson chegam, cumprimentam o Linu com um “tudo certo, parceiro?” e puxam ele para a roda. Às dez, o Nelson olha para o relógio: “Amanhã tenho aula cedo. Vamos vazar daqui a meia hora?” O Linu está se divertindo muito, mas também está cansado da viagem.',
        choices: [
          { text: '“Combinado: danço mais meia hora e depois bazamos.”', translation: '“Combinado: danço mais meia hora e depois a gente vaza.”', next: 'final_bom' },
          { text: '“Eu vou já para o hotel, estou morto de sono.”', translation: '“Vou agora para o hotel, estou morrendo de sono.”', next: 'final_cedo' },
          {
            text: '“Bazar? Mas a esta hora as lojas já estão todas fechadas.”',
            translation: '“Bazar? Mas a essa hora as lojas já estão todas fechadas.”',
            wrong: 'Em Angola, “bazar” é um verbo: ir embora. Não tem a ver com o “bazar” do Brasil, a loja de miudezas. O Nelson está propondo sair do bar daqui a meia hora.',
          },
        ],
      },
      final_bom: {
        emoji: '💃',
        text: 'Na última meia hora, uma amiga do Nelson ensina ao Linu os passos básicos do semba, e o pinguim até arranca aplausos. Quando saem, a baía brilha com as luzes da Marginal. No caminho, o Linu vai repetindo as palavras novas: kamba, kota, maka, garina, bazar. “Já falas angolano”, diz o Nelson, a rir, “só te falta o sotaque.”',
        translation: 'Na última meia hora, uma amiga do Nelson ensina ao Linu os passos básicos do semba, e o pinguim até arranca aplausos. Quando eles saem, a baía brilha com as luzes da Marginal. No caminho, o Linu vai repetindo as palavras novas: kamba, kota, maka, garina, bazar. “Você já fala angolano”, diz o Nelson, rindo, “só falta o sotaque.”',
        ending: { tone: 'bom', title: 'Kamba de Luanda', message: 'O Linu conheceu o português de Angola por dentro: mata-bicho, kamba, kota, maka, bazar, a próclise da fala e o orgulho de uma norma própria.' },
      },
      final_cedo: {
        emoji: '😴',
        text: 'O Linu apanha um táxi e adormece mal encosta a cabeça à almofada. No dia seguinte, o Nelson manda-lhe um vídeo: os amigos a dançar semba até à meia-noite. “Faltaste tu, kamba”, escreve ele. O Linu promete que, da próxima vez, só bazam juntos.',
        translation: 'O Linu pega um táxi e dorme assim que encosta a cabeça no travesseiro. No dia seguinte, o Nelson manda um vídeo para ele: os amigos dançando semba até a meia-noite. “Só faltou você, parceiro”, escreve ele. O Linu promete que, da próxima vez, eles só vão embora juntos.',
        ending: { tone: 'neutro', title: 'Semba pelo vídeo', message: 'Descanso merecido, mas o Linu perdeu a noite de semba. Tente de novo e fique mais meia hora!' },
      },
    },
  },
  {
    id: 'pt-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Maningue nice',
    emoji: '🦐',
    summary: 'Em Maputo, o Linu anda de chapa, vai ao Mercado do Peixe e ouve como o português de Moçambique mistura palavras do changana e do inglês.',
    cultural_context:
      'Em Moçambique, o português é a língua oficial, mas a maioria da população tem como língua materna uma língua bantu; no sul, em Maputo, falam-se sobretudo o changana e o ronga. O país faz fronteira com vários países de língua inglesa, e o português moçambicano tem empréstimos das duas fontes, como na expressão “maningue nice” (muito bom). A capital chamou-se Lourenço Marques até 1976.',
    start: 'start',
    glossary: [
      ['maningue (Moçambique)', 'muito'],
      ['nice (Moçambique, do inglês)', 'legal, bom'],
      ['o chapa (Moçambique)', 'a van de transporte coletivo'],
      ['o machimbombo (Moçambique)', 'o ônibus'],
      ['a mamana (Moçambique)', 'a senhora; também mãe'],
      ['a matapa', 'o prato de folhas de mandioca com amendoim e coco'],
      ['a xima', 'a massa espessa de farinha de milho, que acompanha pratos com molho'],
      ['o changana', 'uma das línguas bantu do sul de Moçambique'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Sábado de manhã em Maputo. O Carlitos, um guia que o Linu conheceu na véspera, aparece no hotel de chinelos e óculos escuros. “Hoje vamos de chapa até ao Mercado do Peixe”, anuncia. “Compras o peixe, eles grelham-te ali mesmo, e comes à beira da baía. É maningue nice!” O Linu sorri, sem ter a certeza de ter percebido tudo.',
        translation: 'Sábado de manhã em Maputo. O Carlitos, um guia que o Linu conheceu na véspera, aparece no hotel de chinelo e óculos escuros. “Hoje vamos de van até o Mercado do Peixe”, anuncia. “Você compra o peixe, eles grelham ali mesmo, e você come na beira da baía. É muito bom!” O Linu sorri, sem ter certeza de ter entendido tudo.',
        choices: [
          { text: '“Se é maningue nice, eu vou! Onde se apanha o chapa?”', translation: '“Se é tão bom assim, eu vou! Onde se pega a van?”', next: 'chapa' },
          {
            text: '“Maningue? Não conheço esse restaurante.”',
            translation: '“Maningue? Não conheço esse restaurante.”',
            wrong: '“Maningue” não é nome de lugar: é um advérbio do português de Moçambique que quer dizer “muito”. E “nice” é empréstimo do inglês. “Maningue nice” = muito bom, muito legal. O Carlitos está falando do passeio.',
          },
        ],
      },
      chapa: {
        emoji: '🚐',
        text: 'O chapa é uma carrinha branca que para em qualquer esquina, com um cobrador pendurado na porta a gritar o percurso. O Linu senta-se entre uma mamana com um saco de laranjas e um estudante de uniforme. “Chapa é isto; machimbombo é o autocarro grande”, explica o Carlitos. O Linu conta-lhe que em Portugal se diz “autocarro” e no Brasil “ônibus”, e o Carlitos ri-se: “Três países, três palavras, e todos percebemos a mesma coisa.” O cobrador bate duas vezes no teto, e o chapa arranca.',
        translation: 'O chapa é uma van branca que para em qualquer esquina, com um cobrador pendurado na porta gritando o itinerário. O Linu se senta entre uma senhora com um saco de laranjas e um estudante de uniforme. “Chapa é isto; machimbombo é o ônibus grande”, explica o Carlitos. O Linu conta que em Portugal se diz “autocarro” e no Brasil “ônibus”, e o Carlitos ri: “Três países, três palavras, e todo mundo entende a mesma coisa.” O cobrador bate duas vezes no teto, e o chapa arranca.',
        choices: [
          { text: '“Podemos descer na estação dos caminhos de ferro? Dizem que é linda.”', translation: '“Podemos descer na estação de trem? Dizem que é linda.”', next: 'estacao' },
          { text: '“Vamos direto ao mercado, que já tenho fome.”', translation: '“Vamos direto para o mercado, que já estou com fome.”', next: 'mercado' },
        ],
      },
      estacao: {
        emoji: '🚉',
        text: 'A estação central dos caminhos de ferro, do início do século XX, tem uma grande cúpula e paredes verdes e brancas. O Carlitos conta que o avô trabalhou ali a vida inteira, a carregar mercadorias que vinham do interior e dos países vizinhos. “Em casa, o meu avô falava changana com a minha avó e português com os chefes”, lembra ele. “Eu cresci no meio das duas línguas, e hoje ainda misturo sem dar por isso.” O Linu repara que, a seu lado, dois ferroviários conversam precisamente assim, a saltar de uma língua para a outra.',
        translation: 'A estação central de trem, do início do século XX, tem uma grande cúpula e paredes verdes e brancas. O Carlitos conta que o avô trabalhou ali a vida inteira, carregando mercadorias que vinham do interior e dos países vizinhos. “Em casa, meu avô falava changana com a minha avó e português com os chefes”, lembra ele. “Eu cresci no meio das duas línguas, e hoje ainda misturo sem perceber.” O Linu nota que, ao lado deles, dois ferroviários conversam exatamente assim, pulando de uma língua para a outra.',
        choices: [{ text: '“Isso tem nome: alternância de código. Agora, vamos ao peixe?”', translation: '“Isso tem nome: alternância de código. Agora, vamos ao peixe?”', next: 'mercado' }],
      },
      mercado: {
        emoji: '🐟',
        text: 'O Mercado do Peixe cheira a mar e a carvão. Nas bancas, há camarões enormes, lulas, garoupas e caranguejos, e as vendedoras chamam os clientes em português e em changana. O Carlitos escolhe um quilo de camarão e começa a regatear: “Mamana, faz preço bom, é para o meu amigo que veio de longe.” A vendedora olha para o Linu, ri-se e responde: “Para o pinguim faço desconto, mas só porque é maningue bonito.”',
        translation: 'O Mercado do Peixe tem cheiro de mar e de carvão. Nas bancas, há camarões enormes, lulas, garoupas e caranguejos, e as vendedoras chamam os clientes em português e em changana. O Carlitos escolhe um quilo de camarão e começa a pechinchar: “Senhora, faz um preço bom, é para o meu amigo que veio de longe.” A vendedora olha para o Linu, ri e responde: “Para o pinguim eu faço desconto, mas só porque ele é muito fofo.”',
        choices: [
          { text: '“Obrigado, mamana! Agora, onde o grelham?”', translation: '“Obrigado, senhora! Agora, onde ele é grelhado?”', next: 'almoco' },
          {
            text: '“O Carlitos chamou ‘mamana’ à vendedora porque ela é mãe dele?”',
            translation: '“O Carlitos chamou a vendedora de ‘mamana’ porque ela é mãe dele?”',
            wrong: '“Mamana”, em Moçambique, é também uma forma respeitosa de tratar uma senhora, mesmo desconhecida — como “senhora” ou “dona”. A vendedora não é mãe do Carlitos: ele só está sendo educado enquanto pechincha.',
          },
        ],
      },
      almoco: {
        emoji: '🍤',
        text: 'Num dos restaurantes ao lado do mercado, grelham os camarões com piripíri e trazem-nos com arroz e um prato de matapa, feita com folhas de mandioca, amendoim e leite de coco. O Carlitos explica que em casa se come muito xima, uma massa de farinha de milho que acompanha os caris. Entre duas garfadas, fala do português de Moçambique: “Temos palavras do changana, do inglês, de Portugal… e estamos sempre a inventar outras.” O Linu repara que o Carlitos pronuncia todas as vogais com clareza, muito mais do que em Lisboa.',
        translation: 'Num dos restaurantes ao lado do mercado, eles grelham os camarões com pimenta piripíri e trazem com arroz e um prato de matapa, feita com folhas de mandioca, amendoim e leite de coco. O Carlitos explica que em casa se come muita xima, uma massa de farinha de milho que acompanha os molhos de caril. Entre duas garfadas, ele fala do português de Moçambique: “Temos palavras do changana, do inglês, de Portugal… e estamos sempre inventando outras.” O Linu nota que o Carlitos pronuncia todas as vogais com clareza, muito mais do que em Lisboa.',
        choices: [
          { text: '“Vamos ver o pôr do sol à Costa do Sol?”', translation: '“Vamos ver o pôr do sol na Costa do Sol?”', next: 'praia' },
          { text: '“Estou tão cheio que preciso de uma sesta no hotel.”', translation: '“Estou tão cheio que preciso tirar um cochilo no hotel.”', next: 'final_sesta' },
        ],
      },
      praia: {
        emoji: '🌇',
        text: 'Na Costa do Sol, a marginal enche-se de famílias, de vendedores de cajus e de música que sai dos carros. O céu fica laranja e depois cor-de-rosa sobre a baía. Uma miúda aproxima-se do Linu e pergunta-lhe, muito séria, se ele é da Antártida. “Sou de muito longe, mas hoje sou de Maputo”, responde o pinguim. A miúda corre a contar à mãe, que acena de longe.',
        translation: 'Na Costa do Sol, a avenida da praia se enche de famílias, de vendedores de castanha de caju e de música saindo dos carros. O céu fica laranja e depois cor-de-rosa sobre a baía. Uma menininha se aproxima do Linu e pergunta, muito séria, se ele é da Antártida. “Sou de muito longe, mas hoje sou de Maputo”, responde o pinguim. A menina corre para contar à mãe, que acena de longe.',
        choices: [{ text: '“Carlitos, este dia foi maningue nice.”', translation: '“Carlitos, este dia foi muito bom.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Voltam de chapa, já de noite, espremidos entre um grupo de estudantes que cantam. Ao despedir-se, o Carlitos dá ao Linu uma lista escrita num guardanapo: chapa, machimbombo, mamana, maningue, xima, matapa. “Para não te esqueceres de nós”, diz. O Linu guarda o guardanapo na mochila, ao lado do dicionário, onde ele merece estar.',
        translation: 'Eles voltam de van, já de noite, espremidos entre um grupo de estudantes cantando. Na despedida, o Carlitos dá ao Linu uma lista escrita num guardanapo: chapa, machimbombo, mamana, maningue, xima, matapa. “Para você não se esquecer de nós”, diz. O Linu guarda o guardanapo na mochila, ao lado do dicionário, onde ele merece estar.',
        ending: { tone: 'bom', title: 'Dia maningue nice', message: 'O Linu ouviu o português de Moçambique na rua: palavras do changana e do inglês, a alternância entre línguas e as vogais bem abertas. Maningue nice!' },
      },
      final_sesta: {
        emoji: '😴',
        text: 'O Linu volta ao hotel e dorme até ao anoitecer. Quando acorda, o Carlitos manda-lhe uma fotografia do pôr do sol na Costa do Sol, laranja e cor-de-rosa. “Perdeste o melhor do dia, pá”, escreve ele. O Linu promete que amanhã não há sesta que o segure.',
        translation: 'O Linu volta para o hotel e dorme até anoitecer. Quando acorda, o Carlitos manda uma foto do pôr do sol na Costa do Sol, laranja e cor-de-rosa. “Você perdeu o melhor do dia, cara”, escreve ele. O Linu promete que amanhã não vai ter cochilo que o segure.',
        ending: { tone: 'neutro', title: 'Pôr do sol pela fotografia', message: 'O almoço foi ótimo, mas o Linu perdeu o fim de tarde em Maputo. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ondas do mar de Vigo',
    emoji: '🐚',
    summary: 'Em Santiago de Compostela, no fim do Caminho, o Linu conversa com uma estudante galega e descobre como o galego e o português são parentes próximos.',
    cultural_context:
      'O galego é língua cooficial da Galiza, ao lado do castelhano, e tem a mesma origem medieval do português: o galego-português, a língua das cantigas trovadorescas dos séculos XII a XIV, como as cantigas de amigo de Martim Codax. O Dia das Letras Galegas, em 17 de maio, lembra a publicação de “Cantares gallegos”, de Rosalía de Castro, em 1863.',
    start: 'start',
    glossary: [
      ['Bo día! / Grazas (galego)', 'Bom dia! / Obrigado'],
      ['chegaches (galego)', 'chegaste, você chegou'],
      ['imos (galego)', 'vamos'],
      ['xa (galego)', 'já'],
      ['o polbo á feira (galego)', 'o polvo cozido com páprica e azeite'],
      ['o galego-português', 'a língua medieval de onde vêm o galego e o português'],
      ['a cantiga de amigo', 'a cantiga medieval em que uma moça fala do amado ausente'],
      ['vistes / verrá (galego-português)', 'viste (vós) / virá'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Depois de cento e vinte quilómetros a pé, o Linu entra na Praza do Obradoiro com a mochila às costas e a credencial cheia de carimbos. A catedral ergue-se à sua frente, cinzenta e dourada ao sol da manhã. Uma rapariga de caracóis acena-lhe: é a Uxía, a amiga de uma amiga, estudante de Filologia. “Bo día! Ti es o Linu? Chegaches moi cedo!”, diz ela, em galego. O Linu percebe quase tudo à primeira.',
        translation: 'Depois de cento e vinte quilômetros a pé, o Linu entra na Praça do Obradoiro com a mochila nas costas e a credencial cheia de carimbos. A catedral se ergue na frente dele, cinza e dourada no sol da manhã. Uma moça de cabelo cacheado acena para ele: é a Uxía, amiga de uma amiga, estudante de Letras. “Bom dia! Você é o Linu? Chegou muito cedo!”, diz ela, em galego. O Linu entende quase tudo de primeira.',
        choices: [
          { text: '“Bom dia, Uxía! Cheguei cedo, sim: saí às seis.”', translation: '“Bom dia, Uxía! Cheguei cedo, sim: saí às seis.”', next: 'cafe' },
          {
            text: '“Desculpa o atraso, Uxía. Perdi-me no caminho.”',
            translation: '“Desculpa o atraso, Uxía. Eu me perdi no caminho.”',
            wrong: 'A Uxía disse “Chegaches moi cedo!”: em galego, “chegaches” é “chegaste” e “moi” é “muito”. Ela está elogiando o Linu por ter chegado CEDO, não reclamando de atraso.',
          },
        ],
      },
      cafe: {
        emoji: '☕',
        text: 'Num café da Rúa do Franco, a Uxía pede dois cafés e uma fatia de tarta de Santiago. O Linu lê o quadro da parede: “polbo á feira”, “queixo”, “empanada de xoubas”. “Em galego, escreve-se com x muita palavra que o português escreve com j ou g, como ‘xente’”, explica ela, “e ‘queixo’, cá, quer dizer queijo.” O Linu ri-se: em Portugal, queixo é outra coisa! A Uxía conta-lhe que o galego e o português foram uma só língua na Idade Média e que depois cada um seguiu o seu caminho.',
        translation: 'Num café da Rua do Franco, a Uxía pede dois cafés e uma fatia de torta de Santiago. O Linu lê o quadro na parede: “polbo á feira”, “queixo”, “empanada de xoubas”. “Em galego, muita palavra que o português escreve com j ou g se escreve com x, como ‘xente’”, explica ela, “e ‘queixo’, aqui, quer dizer queijo.” O Linu ri: em Portugal, queixo é outra coisa! A Uxía conta que o galego e o português foram uma língua só na Idade Média e que depois cada um seguiu o seu caminho.',
        choices: [
          { text: '“Quero ver o botafumeiro na catedral.”', translation: '“Quero ver o botafumeiro na catedral.”', next: 'catedral' },
          { text: '“Mostras-me a tua faculdade? Quero ver os livros antigos.”', translation: '“Você me mostra a sua faculdade? Quero ver os livros antigos.”', next: 'faculdade' },
          {
            text: '“Então o galego é só espanhol com sotaque português.”',
            translation: '“Então o galego é só espanhol com sotaque português.”',
            wrong: 'A Uxía explicou que o galego e o português “foram uma só língua na Idade Média”, o galego-português. O galego é uma língua própria, cooficial na Galiza, e muito mais próxima do português do que do castelhano — tanto que o Linu entende quase tudo.',
          },
        ],
      },
      catedral: {
        emoji: '⛪',
        text: 'Ao meio-dia, a catedral está cheia de peregrinos, de botas e de mochilas. Por sorte, é dia de botafumeiro: oito homens de túnica vermelha puxam a corda, e o enorme incensário atravessa a nave de um lado ao outro, a soltar fumo perfumado. O Linu segue-o com os olhos, de bico aberto. À saída, a Uxía repara que ele leu as placas em galego sem pedir ajuda. “Vês? Para um lusófono, o galego é quase transparente”, diz ela.',
        translation: 'Ao meio-dia, a catedral está cheia de peregrinos, de botas e de mochilas. Por sorte, é dia de botafumeiro: oito homens de túnica vermelha puxam a corda, e o enorme incensário atravessa a nave de um lado ao outro, soltando fumaça perfumada. O Linu acompanha com os olhos, de bico aberto. Na saída, a Uxía percebe que ele leu as placas em galego sem pedir ajuda. “Viu? Para um falante de português, o galego é quase transparente”, diz ela.',
        choices: [{ text: '“E a poesia antiga, também percebo?”', translation: '“E a poesia antiga, também vou entender?”', next: 'cantiga' }],
      },
      faculdade: {
        emoji: '📚',
        text: 'Na biblioteca da faculdade, a Uxía mostra-lhe um fac-símile do Pergaminho Vindel, uma folha medieval com sete cantigas de amigo de Martim Codax, quase todas com a notação musical. As letras são antigas e apertadas, mas a Uxía lê-as em voz alta. “Isto não é galego nem português: é os dois ao mesmo tempo”, explica. O Linu aproxima o bico do vidro, fascinado. “Então este pergaminho é avô das duas línguas”, murmura ele.',
        translation: 'Na biblioteca da faculdade, a Uxía mostra ao Linu um fac-símile do Pergaminho Vindel, uma folha medieval com sete cantigas de amigo de Martim Codax, quase todas com a notação musical. As letras são antigas e apertadas, mas a Uxía lê em voz alta. “Isto não é galego nem português: é os dois ao mesmo tempo”, explica. O Linu aproxima o bico do vidro, fascinado. “Então este pergaminho é avô das duas línguas”, murmura ele.',
        choices: [{ text: '“Lês-me uma delas devagar?”', translation: '“Você lê uma delas devagar para mim?”', next: 'cantiga' }],
      },
      cantiga: {
        emoji: '🌊',
        text: 'A Uxía recita a primeira cantiga de Martim Codax: “Ondas do mar de Vigo, / se vistes meu amigo? / E ai Deus, se verrá cedo!” Explica que “vistes” é a forma de “vós” e que “verrá” é o antigo futuro de “vir”. Quem fala é uma rapariga à beira-mar, à espera do namorado que partiu. O Linu repete os versos baixinho e sente que atravessaram oito séculos quase sem mudar.',
        translation: 'A Uxía recita a primeira cantiga de Martim Codax: “Ondas do mar de Vigo, / se vistes meu amigo? / E ai Deus, se verrá cedo!” Ela explica que “vistes” é a forma de “vós” e que “verrá” é o antigo futuro de “vir”. Quem fala é uma moça na beira do mar, esperando o namorado que partiu. O Linu repete os versos baixinho e sente que eles atravessaram oito séculos quase sem mudar.',
        choices: [
          { text: '“Ela pergunta às ondas se viram o amigo e se ele voltará em breve.”', translation: '“Ela pergunta às ondas se viram o amigo e se ele vai voltar logo.”', next: 'rosalia' },
          {
            text: '“Ela pede às ondas que levem o amigo para bem longe.”',
            translation: '“Ela pede às ondas que levem o amigo para bem longe.”',
            wrong: 'É o contrário: a moça pergunta às ondas “se vistes meu amigo” (se vocês viram meu amado) e suspira “se verrá cedo” (se ele virá logo). Ela quer que ele VOLTE — é o tema clássico da cantiga de amigo, a espera do amado ausente.',
          },
        ],
      },
      rosalia: {
        emoji: '📖',
        text: 'Enquanto passeiam pela Alameda, a Uxía fala de Rosalía de Castro, que em 1863 publicou “Cantares gallegos” e ajudou a devolver ao galego a dignidade de língua literária. “Por isso, no dia 17 de maio, a Galiza inteira festeja as suas letras”, diz ela. O Linu repara que a Uxía pronuncia as vogais átonas com clareza, sem as “engolir” como em Lisboa, e que o seu “x” soa como o “ch” português. “Ouvir galego é como ouvir o português com outra música”, conclui ele.',
        translation: 'Enquanto passeiam pela Alameda, a Uxía fala de Rosalía de Castro, que em 1863 publicou “Cantares gallegos” e ajudou a devolver ao galego a dignidade de língua literária. “Por isso, no dia 17 de maio, a Galiza inteira festeja as suas letras”, diz ela. O Linu nota que a Uxía pronuncia as vogais átonas com clareza, sem “engolir” como em Lisboa, e que o “x” dela soa como o “ch” português. “Ouvir galego é como ouvir o português com outra música”, conclui ele.',
        choices: [
          { text: '“Imos comer polbo á feira?”, arrisca o Linu, em galego.', translation: '“Vamos comer polvo à galega?”, arrisca o Linu, em galego.', next: 'final_bom' },
          { text: '“Estou estafado do Caminho. Vou dormir ao albergue.”', translation: '“Estou exausto do Caminho. Vou dormir no albergue.”', next: 'final_cansado' },
        ],
      },
      final_bom: {
        emoji: '🐙',
        text: 'A Uxía bate palmas: “Xa falas galego!” Numa taberna de pedra, dividem um prato de polbo á feira, servido numa tábua de madeira, com páprica e azeite. Ao despedir-se, ela escreve-lhe na credencial, por baixo do último carimbo: “Ondas do mar de Vigo, se vistes o Linu…” O pinguim guarda a credencial como quem guarda um pergaminho.',
        translation: 'A Uxía bate palmas: “Já fala galego!” Numa taverna de pedra, eles dividem um prato de polvo à galega, servido numa tábua de madeira, com páprica e azeite. Na despedida, ela escreve na credencial dele, embaixo do último carimbo: “Ondas do mar de Vigo, se vistes o Linu…” O pinguim guarda a credencial como quem guarda um pergaminho.',
        ending: { tone: 'bom', title: 'Irmãos de língua', message: 'O Linu terminou o Caminho descobrindo que galego e português têm a mesma raiz, o galego-português das cantigas medievais. Grazas, Uxía!' },
      },
      final_cansado: {
        emoji: '🛏️',
        text: 'O Linu despede-se da Uxía e vai para o albergue, onde adormece antes das oito. No dia seguinte, ela manda-lhe uma mensagem em galego: “Onte había polbo e música na taberna. Outra vez será!” O Linu percebe a mensagem inteira sem dicionário, e isso já é uma pequena vitória.',
        translation: 'O Linu se despede da Uxía e vai para o albergue, onde dorme antes das oito. No dia seguinte, ela manda uma mensagem em galego: “Ontem tinha polvo e música na taverna. Fica para a próxima!” O Linu entende a mensagem inteira sem dicionário, e isso já é uma pequena vitória.',
        ending: { tone: 'neutro', title: 'Outra vez será', message: 'O Caminho cansa! O Linu entendeu o galego, mas perdeu o polvo com a Uxía. Tente de novo.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'pt-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Tartarugas na primeira página',
    emoji: '🐢',
    summary: 'Em São Tomé, o Linu acompanha uma jornalista numa noite de desova de tartarugas e ajuda-a a transformar a experiência numa notícia bem escrita.',
    cultural_context:
      'As praias de São Tomé e Príncipe são locais de desova de várias espécies de tartarugas marinhas, entre elas a tartaruga-de-couro, a maior de todas; na época da desova, equipes de conservação patrulham as praias à noite para proteger os ninhos. No começo do século XX, o arquipélago chegou a ser um dos maiores produtores de cacau do mundo. A expressão “leve-leve”, com o sentido de “com calma, sem pressa”, é quase um lema do país.',
    start: 'start',
    glossary: [
      ['a desova', 'a postura dos ovos'],
      ['o lead / o lide', 'o primeiro parágrafo da notícia (quem, o quê, quando, onde, como, porquê)'],
      ['a pirâmide invertida', 'a ordem da notícia: o mais importante primeiro'],
      ['a nominalização', 'transformar um verbo em substantivo (desovar → a desova)'],
      ['segundo X / afirmou X', 'segundo X / afirmou X (atribuição da fonte)'],
      ['registar-se (Portugal)', 'registrar-se, ocorrer'],
      ['leve-leve (São Tomé)', 'devagar, com calma'],
      ['a equipa (Portugal)', 'a equipe'],
    ],
    nodes: {
      start: {
        emoji: '🌴',
        text: 'Em São Tomé, o calor húmido cola as penas do Linu ao corpo. No cais, espera-o a Jacinta, jornalista de um semanário da capital, que o convidou para uma reportagem. “Esta noite vamos com a equipa de conservação a uma praia do norte, onde as tartarugas vêm desovar”, explica ela. “Levamos lanternas vermelhas, paciência e um caderno. Aqui tudo se faz leve-leve.” O Linu nunca viu uma tartaruga marinha fora de um aquário.',
        translation: 'Em São Tomé, o calor úmido cola as penas do Linu no corpo. No cais, está esperando por ele a Jacinta, jornalista de um semanário da capital, que o convidou para uma reportagem. “Esta noite vamos com a equipe de conservação a uma praia do norte, onde as tartarugas vêm pôr ovos”, explica ela. “Levamos lanternas vermelhas, paciência e um caderno. Aqui tudo se faz com calma.” O Linu nunca viu uma tartaruga marinha fora de um aquário.',
        choices: [{ text: '“Conta comigo. A que horas partimos?”', translation: '“Pode contar comigo. Que horas a gente sai?”', next: 'praia' }],
      },
      praia: {
        emoji: '🌙',
        text: 'À meia-noite, a praia está escura e só se ouve o mar. O Sr. Ambrósio, biólogo da equipa, dá as regras em voz baixa: nada de luz branca nem de flash, silêncio absoluto e distância de pelo menos dez passos. “A luz branca desorienta as fêmeas, e elas podem voltar para o mar sem pôr os ovos”, explica. De repente, uma sombra enorme sai da água e arrasta-se pela areia: é uma tartaruga-de-couro, maior do que uma mesa de jantar. A Jacinta aperta o braço do Linu.',
        translation: 'À meia-noite, a praia está escura e só se ouve o mar. O seu Ambrósio, biólogo da equipe, passa as regras em voz baixa: nada de luz branca nem de flash, silêncio absoluto e distância de pelo menos dez passos. “A luz branca desorienta as fêmeas, e elas podem voltar para o mar sem pôr os ovos”, explica. De repente, uma sombra enorme sai da água e se arrasta pela areia: é uma tartaruga-de-couro, maior do que uma mesa de jantar. A Jacinta aperta o braço do Linu.',
        choices: [
          { text: 'O Linu fica imóvel, com a lanterna vermelha apontada para a areia.', translation: 'O Linu fica imóvel, com a lanterna vermelha apontada para a areia.', next: 'desova' },
          {
            text: 'O Linu tira uma fotografia com flash, para a notícia ter uma boa imagem.',
            translation: 'O Linu tira uma foto com flash, para a notícia ter uma boa imagem.',
            wrong: 'O biólogo acabou de explicar: “nada de luz branca nem de flash”, porque a luz “desorienta as fêmeas”, que podem voltar para o mar sem pôr os ovos. Uma foto não vale um ninho perdido.',
          },
        ],
      },
      desova: {
        emoji: '🥚',
        text: 'A tartaruga escava um buraco fundo com as barbatanas traseiras e começa a desovar, como se estivesse em transe. O Sr. Ambrósio conta os ovos em voz baixa e, no fim, marca o ninho com uma estaca numerada. “É o terceiro ninho desta noite”, sussurra ele à Jacinta, que escreve tudo à luz vermelha. “Daqui a uns dois meses, as crias saem da areia e correm para o mar.” Quando a tartaruga volta à água, já passa das duas da manhã.',
        translation: 'A tartaruga cava um buraco fundo com as nadadeiras traseiras e começa a pôr os ovos, como se estivesse em transe. O seu Ambrósio conta os ovos em voz baixa e, no fim, marca o ninho com uma estaca numerada. “É o terceiro ninho desta noite”, sussurra ele para a Jacinta, que anota tudo na luz vermelha. “Daqui a uns dois meses, os filhotes saem da areia e correm para o mar.” Quando a tartaruga volta para a água, já passa das duas da manhã.',
        choices: [{ text: '“Amanhã escrevemos a notícia juntos?”', translation: '“Amanhã a gente escreve a notícia junto?”', next: 'redacao' }],
      },
      redacao: {
        emoji: '📝',
        text: 'Na manhã seguinte, na redação, a Jacinta mostra-lhe o primeiro parágrafo: “Ontem à noite fui a uma praia e foi uma experiência incrível. Estava muito escuro e a certa altura vimos uma coisa a sair do mar, e era uma tartaruga enorme.” Ela própria faz uma careta. “Parece um diário, não uma notícia”, admite. “O meu editor vai dizer que o essencial está enterrado no fim.” O Linu lembra-se da regra da pirâmide invertida.',
        translation: 'Na manhã seguinte, na redação, a Jacinta mostra o primeiro parágrafo: “Ontem à noite fui a uma praia e foi uma experiência incrível. Estava muito escuro e em certo momento vimos uma coisa saindo do mar, e era uma tartaruga enorme.” Ela mesma faz uma careta. “Parece um diário, não uma notícia”, admite. “Meu editor vai dizer que o essencial está enterrado no fim.” O Linu se lembra da regra da pirâmide invertida.',
        choices: [
          {
            text: '“Começa pelo essencial: ‘Uma tartaruga-de-couro desovou na madrugada de ontem numa praia do norte da ilha, onde a equipa de conservação registou três ninhos.’”',
            translation: '“Começa pelo essencial: ‘Uma tartaruga-de-couro pôs ovos na madrugada de ontem numa praia do norte da ilha, onde a equipe de conservação registrou três ninhos.’”',
            next: 'titulo',
          },
          {
            text: '“Mantém a ordem da noite; o leitor gosta de suspense e descobre a tartaruga no fim.”',
            translation: '“Mantém a ordem da noite; o leitor gosta de suspense e descobre a tartaruga no fim.”',
            wrong: 'Na notícia, vale a pirâmide invertida: o mais importante vem primeiro. O primeiro parágrafo (o lide) responde logo a quem, o quê, quando e onde. Suspense e ordem cronológica cabem na crônica ou na reportagem literária, não na notícia — nos dois países.',
          },
        ],
      },
      titulo: {
        emoji: '📰',
        text: 'Falta o título. A Jacinta propõe: “Fomos à praia e vimos coisas lindas.” O Linu sugere outro caminho: um título informativo, curto, com o verbo no presente e, se possível, uma nominalização. Escrevem juntos: “Tartaruga-de-couro volta a desovar no norte de São Tomé.” A Jacinta relê-o em voz alta e sorri: “Conciso, factual e no presente, como se faz nos jornais de cá e de lá.”',
        translation: 'Falta o título. A Jacinta propõe: “Fomos à praia e vimos coisas lindas.” O Linu sugere outro caminho: um título informativo, curto, com o verbo no presente e, se possível, uma nominalização. Eles escrevem juntos: “Tartaruga-de-couro volta a desovar no norte de São Tomé.” A Jacinta relê em voz alta e sorri: “Conciso, factual e no presente, como se faz nos jornais daqui e de lá.”',
        choices: [{ text: '“Agora falta a voz do biólogo.”', translation: '“Agora falta a voz do biólogo.”', next: 'citacao' }],
      },
      citacao: {
        emoji: '🎙️',
        text: 'A Jacinta tinha escrito: “O biólogo disse que achava que as tartarugas estão a voltar e que isso é ótimo e que as pessoas deviam ajudar.” O Linu propõe separar a citação direta da indireta e atribuir cada informação à sua fonte. A nova versão fica assim: “Segundo Ambrósio Neto, biólogo da equipa, o número de ninhos tem aumentado nas últimas épocas. ‘A proteção das praias depende das comunidades’, afirmou.” A Jacinta acha que ainda falta uma frase a dizer o que ela pensa do assunto.',
        translation: 'A Jacinta tinha escrito: “O biólogo disse que achava que as tartarugas estão voltando e que isso é ótimo e que as pessoas deviam ajudar.” O Linu propõe separar a citação direta da indireta e atribuir cada informação à sua fonte. A nova versão fica assim: “Segundo Ambrósio Neto, biólogo da equipe, o número de ninhos tem aumentado nas últimas temporadas. ‘A proteção das praias depende das comunidades’, afirmou.” A Jacinta acha que ainda falta uma frase dizendo o que ela pensa do assunto.',
        choices: [
          { text: '“Na notícia, a opinião é do entrevistado. A tua fica para uma crónica assinada.”', translation: '“Na notícia, a opinião é do entrevistado. A sua fica para uma crônica assinada.”', next: 'final_bom' },
          { text: '“Acrescenta no fim: ‘Na minha opinião, toda a gente devia ir ver as tartarugas.’”', translation: '“Acrescenta no fim: ‘Na minha opinião, todo mundo devia ir ver as tartarugas.’”', next: 'final_opiniao' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'A notícia sai no sábado, na primeira página, com a fotografia de um rasto de tartaruga na areia, tirada sem flash ao amanhecer. O editor elogia o lide e o título, e pede à Jacinta uma crónica pessoal para a edição seguinte, “onde aí, sim, cabe a emoção”. O Sr. Ambrósio telefona a agradecer: desde a publicação, três escolas pediram para visitar a praia. O Linu recorta a página e cola-a no caderno de viagem.',
        translation: 'A notícia sai no sábado, na primeira página, com a foto de um rastro de tartaruga na areia, tirada sem flash ao amanhecer. O editor elogia o lide e o título, e pede à Jacinta uma crônica pessoal para a edição seguinte, “onde aí, sim, cabe a emoção”. O seu Ambrósio liga para agradecer: desde a publicação, três escolas pediram para visitar a praia. O Linu recorta a página e cola no caderno de viagem.',
        ending: { tone: 'bom', title: 'Primeira página', message: 'Pirâmide invertida, lide completo, título nominal no presente e fontes bem atribuídas: o Linu ajudou a escrever uma notícia de verdade — e a proteger as tartarugas.' },
      },
      final_opiniao: {
        emoji: '✂️',
        text: 'O editor lê o texto, risca a última frase a vermelho e escreve na margem: “Opinião é na página de opinião.” A notícia sai na página cinco, sem a frase e sem destaque. A Jacinta suspira, mas admite que o editor tem razão. “Para a próxima, a minha opinião vai numa crónica assinada”, promete.',
        translation: 'O editor lê o texto, risca a última frase de vermelho e escreve na margem: “Opinião é na página de opinião.” A notícia sai na página cinco, sem a frase e sem destaque. A Jacinta suspira, mas admite que o editor tem razão. “Da próxima vez, minha opinião vai numa crônica assinada”, promete.',
        ending: { tone: 'neutro', title: 'Cortada pelo editor', message: 'A notícia era boa, mas misturou informação e opinião. No texto jornalístico, a opinião do repórter vai em outro gênero. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Um resumo em Díli',
    emoji: '☕',
    summary: 'Em Díli, o Linu ajuda uma professora timorense a escrever o resumo académico de um estudo sobre as palavras portuguesas no tétum.',
    cultural_context:
      'Timor-Leste restaurou a independência em 20 de maio de 2002, e a Constituição define o tétum e o português como línguas oficiais. O tétum tem muitos empréstimos do português, como “obrigadu” e “eskola”. O café é um dos principais produtos de exportação do país, e as “tais”, tecidos tradicionais feitos à mão, estão na lista do patrimônio cultural imaterial da UNESCO que necessita de salvaguarda urgente.',
    start: 'start',
    glossary: [
      ['o resumo (académico)', 'o resumo, o abstract'],
      ['o presente trabalho analisa…', 'este trabalho analisa… (registro impessoal)'],
      ['os dados sugerem que…', 'os dados sugerem que… (afirmação prudente)'],
      ['analisámos × analisamos (Portugal)', 'analisamos (passado) × analisamos (presente); no Brasil, sem acento nos dois'],
      ['o empréstimo (linguístico)', 'a palavra que uma língua toma de outra'],
      ['bondia / obrigadu (tétum)', 'bom dia / obrigado'],
      ['o tétum', 'a língua oficial e mais falada de Timor-Leste, ao lado do português'],
      ['académico (Portugal)', 'acadêmico'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Seis da manhã em Díli, e o sol já brilha sobre a baía. Na universidade, a professora Natália recebe o Linu com um sorriso e um “Bondia!” em tétum. Tem até à meia-noite para enviar o resumo de uma comunicação a um congresso de linguística em Lisboa, e o texto ainda está em bruto. “O estudo está feito; falta escrevê-lo como deve ser”, diz ela, a pousar duas chávenas de café timorense na mesa. “Ajudas-me a pô-lo em registo académico?”',
        translation: 'Seis da manhã em Díli, e o sol já brilha sobre a baía. Na universidade, a professora Natália recebe o Linu com um sorriso e um “Bondia!” em tétum. Ela tem até a meia-noite para enviar o resumo de uma apresentação para um congresso de linguística em Lisboa, e o texto ainda está bruto. “O estudo está pronto; falta escrever do jeito certo”, diz ela, pondo duas xícaras de café timorense na mesa. “Você me ajuda a passar para o registro acadêmico?”',
        choices: [{ text: '“Obrigadu pelo café! Vamos a isso: mostre-me os dados.”', translation: '“Obrigado pelo café! Vamos lá: me mostre os dados.”', next: 'dados' }],
      },
      dados: {
        emoji: '📊',
        text: 'A professora abre uma folha de cálculo com centenas de palavras recolhidas em mercados, escolas e programas de rádio. O Linu lê em voz alta: “obrigadu”, “eskola”, “semana”, “kareta”. “São todas empréstimos do português, adaptados à pronúncia e à ortografia do tétum”, explica ela. “O ‘k’ e o ‘u’ final não são erros: são as regras da escrita do tétum.” O Linu repara que muitas são palavras do dia a dia, e não só termos técnicos.',
        translation: 'A professora abre uma planilha com centenas de palavras coletadas em mercados, escolas e programas de rádio. O Linu lê em voz alta: “obrigadu”, “eskola”, “semana”, “kareta”. “São todas empréstimos do português, adaptados à pronúncia e à ortografia do tétum”, explica ela. “O ‘k’ e o ‘u’ final não são erros: são as regras da escrita do tétum.” O Linu nota que muitas são palavras do dia a dia, e não só termos técnicos.',
        choices: [
          { text: '“Então o estudo mostra como o português entrou no vocabulário comum do tétum.”', translation: '“Então o estudo mostra como o português entrou no vocabulário comum do tétum.”', next: 'rascunho' },
          {
            text: '“Temos de corrigir ‘obrigadu’ e ‘eskola’ antes de enviar o resumo.”',
            translation: '“Temos que corrigir ‘obrigadu’ e ‘eskola’ antes de enviar o resumo.”',
            wrong: 'A professora explicou que “o ‘k’ e o ‘u’ final não são erros”: são as regras da ortografia do tétum, que adaptou as palavras vindas do português. Corrigi-las seria apagar justamente o objeto do estudo.',
          },
        ],
      },
      rascunho: {
        emoji: '📝',
        text: 'O rascunho começa assim: “Neste trabalho eu vou falar das palavras que eu acho que vieram do português e vou mostrar que são muitas.” A professora ri-se: “Escrevi isto às duas da manhã, confesso.” O Linu lembra-lhe que o resumo académico costuma ser impessoal, direto e sem marcas de oralidade. Propõe começar pelo objetivo, depois o método, os resultados e a conclusão, numa sequência clara.',
        translation: 'O rascunho começa assim: “Neste trabalho eu vou falar das palavras que eu acho que vieram do português e vou mostrar que são muitas.” A professora ri: “Escrevi isso às duas da manhã, confesso.” O Linu lembra que o resumo acadêmico costuma ser impessoal, direto e sem marcas de oralidade. Ele propõe começar pelo objetivo, depois o método, os resultados e a conclusão, numa sequência clara.',
        choices: [
          { text: '“Que tal: ‘O presente trabalho analisa os empréstimos do português no tétum falado em Díli.’”', translation: '“Que tal: ‘Este trabalho analisa os empréstimos do português no tétum falado em Díli.’”', next: 'metodo' },
          {
            text: '“Deixe o ‘eu acho’: mostra humildade, e os avaliadores gostam disso.”',
            translation: '“Deixa o ‘eu acho’: mostra humildade, e os avaliadores gostam disso.”',
            wrong: 'No resumo acadêmico, a prudência se mostra com verbos e expressões como “os dados sugerem”, “parece indicar”, e não com “eu acho”, que é marca de conversa. O Linu acabou de lembrar: o registro é impessoal, direto e sem marcas de oralidade.',
          },
        ],
      },
      metodo: {
        emoji: '🔬',
        text: 'Para o método e os resultados, a professora tinha escrito: “Fomos a sítios e ouvimos pessoas a falar e vimos que usam muitas palavras portuguesas, o que prova tudo.” O Linu sugere nominalizar e precisar: “A recolha de dados decorreu em mercados, escolas e emissões de rádio de Díli.” Depois discutem o verbo “prova”. “Com um corpus de uma só cidade, podemos provar tudo?”, pergunta o Linu, e a professora abana a cabeça. Fica: “Os resultados sugerem uma presença significativa de empréstimos no léxico do quotidiano.”',
        translation: 'Para o método e os resultados, a professora tinha escrito: “Fomos a lugares e ouvimos pessoas falando e vimos que usam muitas palavras portuguesas, o que prova tudo.” O Linu sugere nominalizar e ser mais preciso: “A coleta de dados foi feita em mercados, escolas e programas de rádio de Díli.” Depois eles discutem o verbo “prova”. “Com um corpus de uma cidade só, dá para provar tudo?”, pergunta o Linu, e a professora balança a cabeça. Fica: “Os resultados sugerem uma presença significativa de empréstimos no léxico do cotidiano.”',
        choices: [{ text: '“Agora, a conclusão.”', translation: '“Agora, a conclusão.”', next: 'conclusao' }],
      },
      conclusao: {
        emoji: '✅',
        text: 'Na conclusão, a professora escreve: “Analisámos os dados e concluímos que o português permanece vivo no tétum.” O Linu repara no acento de “analisámos” e ela explica: em Portugal e em Timor, o acento distingue muitas vezes o passado (“analisámos ontem”) do presente (“analisamos hoje”), enquanto o Brasil escreve “analisamos” nos dois casos. Por fim, trocam “vivo”, demasiado poético, por “presente e produtivo”. São onze e meia da noite, e o resumo tem exatamente duzentas e cinquenta palavras.',
        translation: 'Na conclusão, a professora escreve: “Analisámos os dados e concluímos que o português permanece vivo no tétum.” O Linu nota o acento de “analisámos” e ela explica: em Portugal e em Timor, o acento muitas vezes distingue o passado (“analisámos ontem”) do presente (“analisamos hoje”), enquanto o Brasil escreve “analisamos” nos dois casos. Por fim, eles trocam “vivo”, poético demais, por “presente e produtivo”. São onze e meia da noite, e o resumo tem exatamente duzentas e cinquenta palavras.',
        choices: [
          { text: '“Enviamos já, e amanhã de manhã subimos ao Cristo Rei para celebrar.”', translation: '“Enviamos agora, e amanhã de manhã subimos até o Cristo Rei para comemorar.”', next: 'cristo' },
          { text: '“Vamos rever tudo mais uma vez, palavra a palavra.”', translation: '“Vamos revisar tudo mais uma vez, palavra por palavra.”', next: 'final_prazo' },
        ],
      },
      cristo: {
        emoji: '⛰️',
        text: 'Na manhã seguinte, sobem as centenas de degraus que levam à estátua do Cristo Rei, no alto de um cabo sobre o mar. Lá em cima, a água é de um azul impossível, e ao longe veem-se barcos de pesca. A professora recebe uma mensagem no telemóvel e dá um grito de alegria: a comunicação foi aceite. “Obrigada, Linu”, diz ela, e depois repete em tétum, a rir: “Obrigada barak!”',
        translation: 'Na manhã seguinte, eles sobem as centenas de degraus que levam à estátua do Cristo Rei, no alto de um cabo sobre o mar. Lá em cima, a água é de um azul impossível, e ao longe se veem barcos de pesca. A professora recebe uma mensagem no celular e dá um grito de alegria: a apresentação foi aceita. “Obrigada, Linu”, diz ela, e depois repete em tétum, rindo: “Obrigada barak!” (muito obrigada)',
        choices: [{ text: '“Obrigadu barak, professora!”', translation: '“Muito obrigado, professora!”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Três meses depois, a professora Natália apresenta o estudo em Lisboa, perante uma sala cheia de linguistas. No fim, uma investigadora brasileira pergunta-lhe se o tétum também recebeu palavras do português do Brasil, e começa uma conversa animada entre três variedades da mesma língua. Na primeira fila, o Linu aplaude com as duas asas. O resumo, impessoal e preciso, abriu-lhe a porta; o resto foi mérito dela.',
        translation: 'Três meses depois, a professora Natália apresenta o estudo em Lisboa, diante de uma sala cheia de linguistas. No fim, uma pesquisadora brasileira pergunta se o tétum também recebeu palavras do português do Brasil, e começa uma conversa animada entre três variedades da mesma língua. Na primeira fila, o Linu aplaude com as duas asas. O resumo, impessoal e preciso, abriu a porta para ela; o resto foi mérito dela.',
        ending: { tone: 'bom', title: 'Comunicação aceite', message: 'Registro impessoal, estrutura objetivo–método–resultados–conclusão, nominalização e afirmações prudentes: o Linu ajudou a escrever um resumo acadêmico de verdade.' },
      },
      final_prazo: {
        emoji: '⏰',
        text: 'Releem o texto frase a frase, trocam uma vírgula aqui e um adjetivo ali. Quando a professora carrega em “enviar”, o relógio marca meia-noite e dois minutos. O sistema do congresso responde, frio: “O prazo de submissão terminou.” A professora suspira: “O ótimo é inimigo do bom.”',
        translation: 'Eles releem o texto frase por frase, trocam uma vírgula aqui e um adjetivo ali. Quando a professora clica em “enviar”, o relógio marca meia-noite e dois minutos. O sistema do congresso responde, frio: “O prazo de submissão terminou.” A professora suspira: “O ótimo é inimigo do bom.”',
        ending: { tone: 'neutro', title: 'Fora do prazo', message: 'O resumo já estava pronto; revisar demais custou o prazo. Tente de novo e envie a tempo!' },
      },
    },
  },
  {
    id: 'pt-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'O relatório do caju',
    emoji: '🥜',
    summary: 'Em Bissau, o Linu ajuda a coordenadora de uma cooperativa de mulheres a escrever um relatório sobre a campanha do caju, na norma culta e com dados claros.',
    cultural_context:
      'A castanha de caju é, de longe, o principal produto de exportação da Guiné-Bissau, e a campanha de comercialização mobiliza boa parte do país todos os anos. O português é a língua oficial, mas a língua mais falada no dia a dia é o crioulo guineense, de base portuguesa. O arquipélago dos Bijagós, ao largo da costa, é reserva da biosfera da UNESCO desde 1996.',
    start: 'start',
    glossary: [
      ['mantenhas (Guiné-Bissau)', 'cumprimentos, lembranças'],
      ['o djumbai (Guiné-Bissau)', 'a conversa em roda, o bate-papo'],
      ['o ano em que (e não “onde”)', 'o ano em que (a norma culta usa “onde” só para lugar)'],
      ['houve problemas / faz dois anos', 'houve problemas / faz dois anos (haver e fazer impessoais)'],
      ['a descida dos preços', 'a queda dos preços (nominalização)'],
      ['relativamente a / quanto a', 'em relação a (em vez de “a nível de”)'],
      ['o pedúnculo do caju', 'a parte carnosa do caju, que se come'],
      ['o crioulo guineense', 'a língua crioula de base portuguesa falada na Guiné-Bissau'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Em Bissau, o Linu atravessa o Mercado de Bandim entre bancas de peixe seco, tecidos coloridos e montes de castanha de caju. À sombra de um mangueiro, espera-o a Fatumata, coordenadora de uma cooperativa de mulheres que descascam e vendem castanha. “Mantenhas, Linu! Chegaste na hora certa”, diz ela, em português, antes de trocar umas palavras em crioulo com uma vendedora. O financiador da cooperativa pediu um relatório da campanha deste ano, e ela precisa de o entregar na sexta-feira.',
        translation: 'Em Bissau, o Linu atravessa o Mercado de Bandim entre bancas de peixe seco, tecidos coloridos e montes de castanha de caju. À sombra de uma mangueira, a Fatumata está esperando por ele: ela é coordenadora de uma cooperativa de mulheres que descascam e vendem castanha. “Saudações, Linu! Você chegou na hora certa”, diz ela, em português, antes de trocar umas palavras em crioulo com uma vendedora. O financiador da cooperativa pediu um relatório da campanha deste ano, e ela precisa entregar na sexta-feira.',
        choices: [{ text: '“Mantenhas, Fatumata! Primeiro, quero ver a cooperativa a trabalhar.”', translation: '“Saudações, Fatumata! Primeiro, quero ver a cooperativa trabalhando.”', next: 'cooperativa' }],
      },
      cooperativa: {
        emoji: '🥜',
        text: 'No armazém da cooperativa, vinte mulheres descascam castanhas com pequenas máquinas manuais, a conversar e a cantar em crioulo. A Fatumata mostra ao Linu um caju inteiro: a parte carnosa e amarela, o pedúnculo, dá sumo e vinho, e a castanha fica pendurada por fora, na ponta. “A castanha é que dá dinheiro”, explica ela, “mas quase nada se perde.” Este ano, a cooperativa processou mais castanha do que nunca, apesar de o preço ter baixado.',
        translation: 'No galpão da cooperativa, vinte mulheres descascam castanhas com pequenas máquinas manuais, conversando e cantando em crioulo. A Fatumata mostra ao Linu um caju inteiro: a parte carnosa e amarela, o pedúnculo, dá suco e vinho, e a castanha fica pendurada por fora, na ponta. “É a castanha que dá dinheiro”, explica ela, “mas quase nada se perde.” Este ano, a cooperativa processou mais castanha do que nunca, apesar de o preço ter caído.',
        choices: [
          { text: '“Então a castanha cresce fora da parte que se come. Que fruto curioso!”', translation: '“Então a castanha cresce fora da parte que se come. Que fruta curiosa!”', next: 'rascunho' },
          {
            text: '“Então é preciso abrir a parte amarela para tirar a castanha lá de dentro.”',
            translation: '“Então é preciso abrir a parte amarela para tirar a castanha lá de dentro.”',
            wrong: 'A Fatumata mostrou que a castanha “fica pendurada por fora, na ponta” do pedúnculo amarelo. Não está dentro: é só separar uma parte da outra.',
          },
        ],
      },
      rascunho: {
        emoji: '📝',
        text: 'À tarde, sentados no escritório, a Fatumata lê o início do relatório: “2025 foi o ano onde a cooperativa cresceu mais, onde houveram muitos desafios a nível de preços.” O Linu pede-lhe licença para sublinhar três coisas. “A norma culta, cá e no Brasil, usa ‘onde’ só para lugares”, explica ele. “E o verbo ‘haver’, no sentido de existir, não vai para o plural.” A Fatumata franze a testa e pega num lápis.',
        translation: 'À tarde, sentados no escritório, a Fatumata lê o começo do relatório: “2025 foi o ano onde a cooperativa cresceu mais, onde houveram muitos desafios a nível de preços.” O Linu pede licença para sublinhar três coisas. “A norma culta, aqui e no Brasil, usa ‘onde’ só para lugares”, explica ele. “E o verbo ‘haver’, no sentido de existir, não vai para o plural.” A Fatumata franze a testa e pega um lápis.',
        choices: [
          { text: '“Fica: ‘2025 foi o ano em que a cooperativa mais cresceu, apesar dos numerosos desafios relativos aos preços.’”', translation: '“Fica: ‘2025 foi o ano em que a cooperativa mais cresceu, apesar dos numerosos desafios relativos aos preços.’”', next: 'estrutura' },
          {
            text: '“Basta pôr ‘houve’ no lugar de ‘houveram’; o ‘onde’ pode ficar.”',
            translation: '“Basta pôr ‘houve’ no lugar de ‘houveram’; o ‘onde’ pode ficar.”',
            wrong: 'O Linu apontou três problemas, não um só. Além do “houveram” (o certo é “houve”), a norma culta pede “o ano EM QUE”, porque “onde” é para lugar. E “a nível de” costuma ser evitado no texto formal: “relativos aos preços”, “quanto aos preços”.',
          },
        ],
      },
      estrutura: {
        emoji: '🏗️',
        text: 'Depois, organizam o relatório em três partes: introdução, com o objetivo e o período; desenvolvimento, com os dados e as causas; e conclusões, com recomendações. A Fatumata tinha escrito: “Como os preços baixaram, as mulheres venderam menos castanha em bruto e começaram a vender mais castanha descascada, e isso foi bom.” O Linu propõe nominalizar: “A descida dos preços da castanha em bruto levou a cooperativa a apostar na venda de castanha descascada, de maior valor.” A frase fica mais curta, mais precisa e mais própria de um relatório.',
        translation: 'Depois, eles organizam o relatório em três partes: introdução, com o objetivo e o período; desenvolvimento, com os dados e as causas; e conclusões, com recomendações. A Fatumata tinha escrito: “Como os preços baixaram, as mulheres venderam menos castanha bruta e começaram a vender mais castanha descascada, e isso foi bom.” O Linu propõe nominalizar: “A queda dos preços da castanha bruta levou a cooperativa a investir na venda de castanha descascada, de maior valor.” A frase fica mais curta, mais precisa e mais adequada a um relatório.',
        choices: [{ text: '“Agora, os números e as conclusões.”', translation: '“Agora, os números e as conclusões.”', next: 'precisao' }],
      },
      precisao: {
        emoji: '🔢',
        text: 'Na parte dos números, a Fatumata escreveu: “Fazem dois anos que a cooperativa tem máquinas novas.” O Linu explica que “fazer”, quando indica tempo decorrido, é impessoal e fica no singular: “Faz dois anos”. Revistas as últimas linhas, o relatório está pronto, e a Fatumata quer enviá-lo já. O Linu pede mais dez minutos para ler as conclusões em voz alta, porque um erro no último parágrafo é o que o leitor mais recorda.',
        translation: 'Na parte dos números, a Fatumata escreveu: “Fazem dois anos que a cooperativa tem máquinas novas.” O Linu explica que “fazer”, quando indica tempo decorrido, é impessoal e fica no singular: “Faz dois anos”. Revisadas as últimas linhas, o relatório está pronto, e a Fatumata quer enviar agora mesmo. O Linu pede mais dez minutos para ler as conclusões em voz alta, porque um erro no último parágrafo é o que o leitor mais lembra.',
        choices: [
          { text: '“Dez minutos, e depois enviamos.”', translation: '“Dez minutos, e depois enviamos.”', next: 'djumbai' },
          { text: '“Esquece, envia assim. Já está bom.”', translation: '“Deixa pra lá, manda assim. Já está bom.”', next: 'final_pressa' },
        ],
      },
      djumbai: {
        emoji: '🫖',
        text: 'Na leitura em voz alta, o Linu apanha ainda um “a cooperativa pretendem” e corrige-o para “pretende”. O relatório segue por e-mail às seis da tarde, com dados, causas e recomendações bem arrumados. À noite, as mulheres da cooperativa fazem um djumbai debaixo do mangueiro, com chá verde servido em copinhos pequenos, e ensinam ao Linu umas palavras de crioulo. A Fatumata traduz tudo e ri-se da pronúncia do pinguim.',
        translation: 'Na leitura em voz alta, o Linu ainda pega um “a cooperativa pretendem” e corrige para “pretende”. O relatório sai por e-mail às seis da tarde, com dados, causas e recomendações bem organizados. À noite, as mulheres da cooperativa fazem uma roda de conversa embaixo da mangueira, com chá verde servido em copinhos pequenos, e ensinam ao Linu umas palavras de crioulo. A Fatumata traduz tudo e ri da pronúncia do pinguim.',
        choices: [{ text: '“Obrigado pelo djumbai! Para a próxima campanha, volto.”', translation: '“Obrigado pela roda de conversa! Na próxima campanha, eu volto.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Duas semanas depois, o financiador responde: o relatório foi considerado exemplar e a cooperativa vai receber uma nova máquina de descasque. A Fatumata manda uma fotografia das mulheres à volta da máquina, todas a sorrir. Por baixo, escreve: “Mantenhas do caju para o Linu!” O pinguim guarda a mensagem como quem guarda um diploma.',
        translation: 'Duas semanas depois, o financiador responde: o relatório foi considerado exemplar e a cooperativa vai receber uma nova máquina de descascar. A Fatumata manda uma foto das mulheres em volta da máquina, todas sorrindo. Embaixo, escreve: “Lembranças do caju para o Linu!” O pinguim guarda a mensagem como quem guarda um diploma.',
        ending: { tone: 'bom', title: 'Relatório exemplar', message: '“O ano em que”, “houve”, “faz dois anos”, nominalização e estrutura clara: com a norma culta, o relatório da cooperativa convenceu o financiador.' },
      },
      final_pressa: {
        emoji: '📤',
        text: 'O relatório segue sem a última leitura. Uma semana depois, o financiador responde com elogios aos dados, mas assinala, com delicadeza, um “a cooperativa pretendem” no último parágrafo. A Fatumata ri-se, meio envergonhada. “Tinhas razão: é sempre no fim que o erro se esconde”, admite.',
        translation: 'O relatório vai sem a última leitura. Uma semana depois, o financiador responde elogiando os dados, mas aponta, com delicadeza, um “a cooperativa pretendem” no último parágrafo. A Fatumata ri, meio sem graça. “Você tinha razão: é sempre no fim que o erro se esconde”, admite.',
        ending: { tone: 'neutro', title: 'O erro do fim', message: 'Um bom relatório, com um erro de concordância na conclusão. Revisar em voz alta vale os dez minutos. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'pt-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Camões na Ilha',
    emoji: '📜',
    summary: 'Na Ilha de Moçambique, o Linu lê Os Lusíadas e os sonetos de Camões com uma professora reformada e os seus alunos, descobrindo o hipérbato, a perífrase e a antítese.',
    cultural_context:
      'A Ilha de Moçambique foi a capital da colônia portuguesa de Moçambique até 1898 e é Patrimônio Mundial da UNESCO desde 1991, com a sua “cidade de pedra e cal” e a sua “cidade de macúti” (de casas cobertas de folhas de palmeira). Luís de Camões passou pela ilha por volta de 1567–1569, e o cronista Diogo do Couto, que o encontrou ali, conta que vivia na pobreza. No Canto I d’Os Lusíadas (1572), a armada de Vasco da Gama faz escala em Moçambique.',
    start: 'start',
    glossary: [
      ['o hipérbato', 'a inversão da ordem normal das palavras na frase'],
      ['a perífrase', 'dizer algo por meio de uma expressão (a ocidental praia Lusitana = Portugal)'],
      ['a metonímia', 'nomear uma coisa por outra ligada a ela (as armas = a guerra, os guerreiros)'],
      ['os barões (em Camões)', 'os varões, os homens ilustres (não o título de nobreza)'],
      ['assinalados', 'notáveis, famosos'],
      ['a antítese / o paradoxo', 'a oposição de ideias / a contradição aparente'],
      ['a anáfora', 'a repetição de palavras no começo de versos ou frases'],
      ['o macúti', 'a folha de palmeira usada para cobrir as casas'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'O Linu atravessa de carro a longa ponte que liga o continente à Ilha de Moçambique, com o Índico verde-claro de um lado e do outro. À chegada, espera-o a Dona Amélia, professora de Português reformada, que todas as tardes reúne um grupo de alunos do secundário para ler clássicos. “Hoje é dia de Camões”, anuncia ela, com o livro gasto debaixo do braço, “e não há sítio melhor para o ler do que esta ilha, onde ele próprio viveu.” Pelas ruas estreitas, ouve-se falar macua e português, às vezes na mesma frase. O Linu segue-a até à fortaleza, onde os alunos já estão sentados à sombra das muralhas.',
        translation: 'O Linu atravessa de carro a longa ponte que liga o continente à Ilha de Moçambique, com o Índico verde-claro dos dois lados. Na chegada, a dona Amélia está esperando por ele: ela é professora de Português aposentada e toda tarde reúne um grupo de alunos do ensino médio para ler clássicos. “Hoje é dia de Camões”, anuncia ela, com o livro gasto embaixo do braço, “e não há lugar melhor para ler Camões do que esta ilha, onde ele mesmo viveu.” Pelas ruas estreitas, ouve-se falar macua e português, às vezes na mesma frase. O Linu vai com ela até a fortaleza, onde os alunos já estão sentados à sombra das muralhas.',
        choices: [{ text: '“Que privilégio ler Camões aqui! Por onde começamos?”', translation: '“Que privilégio ler Camões aqui! Por onde começamos?”', next: 'fortaleza' }],
      },
      fortaleza: {
        emoji: '🏰',
        text: 'A Dona Amélia abre o livro na primeira estância e lê devagar: “As armas e os barões assinalados, / Que da ocidental praia Lusitana, / Por mares nunca de antes navegados, / Passaram ainda além da Taprobana”. Uma aluna, a Zainabo, confessa que se perde a meio da frase. A professora explica que Camões inverte a ordem habitual das palavras, o hipérbato, e que é preciso “desembrulhar” o verso para o perceber. Depois pergunta à turma o que será a “ocidental praia Lusitana”. Todos os olhos se viram para o Linu.',
        translation: 'A dona Amélia abre o livro na primeira estrofe e lê devagar: “As armas e os barões assinalados, / Que da ocidental praia Lusitana, / Por mares nunca de antes navegados, / Passaram ainda além da Taprobana”. Uma aluna, a Zainabo, confessa que se perde no meio da frase. A professora explica que Camões inverte a ordem habitual das palavras, o hipérbato, e que é preciso “desembrulhar” o verso para entender. Depois pergunta à turma o que seria a “ocidental praia Lusitana”. Todos os olhos se voltam para o Linu.',
        choices: [
          { text: '“É uma perífrase para Portugal: a costa ocidental da antiga Lusitânia, de onde partiram os navegadores.”', translation: '“É uma perífrase para Portugal: a costa ocidental da antiga Lusitânia, de onde partiram os navegadores.”', next: 'baroes' },
          {
            text: '“É o nome de uma praia aqui da ilha, onde a armada desembarcou.”',
            translation: '“É o nome de uma praia aqui da ilha, onde a armada desembarcou.”',
            wrong: '“A ocidental praia Lusitana” é uma perífrase: um jeito elaborado de dizer Portugal, a terra da antiga Lusitânia, no extremo ocidental da Europa. É DE LÁ que os barões partiram (“Que da ocidental praia Lusitana […] passaram”), e não uma praia da ilha.',
          },
        ],
      },
      baroes: {
        emoji: '⚔️',
        text: '“Muito bem”, diz a Dona Amélia, e passa ao primeiro verso. “E quem são estes ‘barões’? Algum de vocês conhece um barão?” O Momade, o mais brincalhão da turma, diz que o único barão que conhece é o dono do barco de pesca do tio. A professora ri-se e explica que, em Camões, “barões” são os varões, os homens ilustres, e que “as armas” nomeiam a guerra e os feitos militares por metonímia. “Reordenado, o verso diz: canto os homens notáveis que, partindo de Portugal por mares nunca navegados, foram além da Taprobana, o atual Sri Lanka.”',
        translation: '“Muito bem”, diz a dona Amélia, e passa para o primeiro verso. “E quem são esses ‘barões’? Algum de vocês conhece um barão?” O Momade, o mais brincalhão da turma, diz que o único barão que conhece é o dono do barco de pesca do tio. A professora ri e explica que, em Camões, “barões” são os varões, os homens ilustres, e que “as armas” nomeiam a guerra e os feitos militares por metonímia. “Reordenado, o verso diz: canto os homens notáveis que, partindo de Portugal por mares nunca navegados, foram além da Taprobana, o atual Sri Lanka.”',
        choices: [
          { text: '“Então ‘barões assinalados’ são heróis famosos, e não nobres com título.”', translation: '“Então ‘barões assinalados’ são heróis famosos, e não nobres com título.”', next: 'couto' },
          {
            text: '“Então o poema fala só dos nobres que tinham o título de barão.”',
            translation: '“Então o poema fala só dos nobres que tinham o título de barão.”',
            wrong: 'A professora explicou que, em Camões, “barões” são os VARÕES, os homens ilustres, e “assinalados” quer dizer notáveis. Não se trata do título de nobreza: é um sentido antigo da palavra, comum na língua do século XVI.',
          },
        ],
      },
      couto: {
        emoji: '📖',
        text: 'Enquanto o sol desce, a Dona Amélia conta que Camões esteve na ilha por volta de 1567, a caminho de Lisboa, e que o cronista Diogo do Couto o encontrou ali tão pobre que vivia da ajuda de amigos. “Foi nesta ilha que ele continuou a trabalhar no poema que seria publicado em 1572”, diz ela. Conta também a tradição de que, anos antes, num naufrágio, Camões salvou o manuscrito a nado, com o livro erguido fora de água. Os alunos ficam em silêncio, a olhar para o mar. O calor aperta, e alguns já pensam na praia.',
        translation: 'Enquanto o sol desce, a dona Amélia conta que Camões esteve na ilha por volta de 1567, a caminho de Lisboa, e que o cronista Diogo do Couto o encontrou ali tão pobre que vivia da ajuda de amigos. “Foi nesta ilha que ele continuou a trabalhar no poema que seria publicado em 1572”, diz ela. Conta também a tradição de que, anos antes, num naufrágio, Camões salvou o manuscrito a nado, com o livro erguido fora da água. Os alunos ficam em silêncio, olhando para o mar. O calor aperta, e alguns já pensam na praia.',
        choices: [
          { text: '“Professora, lê-nos agora um soneto?”', translation: '“Professora, a senhora lê um soneto para nós agora?”', next: 'soneto' },
          { text: '“Está muito calor. E se fôssemos dar um mergulho?”', translation: '“Está muito calor. E se a gente fosse dar um mergulho?”', next: 'final_mergulho' },
        ],
      },
      soneto: {
        emoji: '❤️‍🔥',
        text: 'A Dona Amélia fecha Os Lusíadas e recita de cor: “Amor é fogo que arde sem se ver; / É ferida que dói, e não se sente”. A Zainabo franze a testa: como pode um fogo arder sem se ver, ou uma ferida doer sem se sentir? “É esse o segredo”, responde a professora. “Camões junta ideias que se contradizem, antítese sobre antítese, até chegar ao paradoxo: o amor é justamente aquilo que não cabe na lógica.” O Momade, pela primeira vez, não faz nenhuma piada.',
        translation: 'A dona Amélia fecha Os Lusíadas e recita de cor: “Amor é fogo que arde sem se ver; / É ferida que dói, e não se sente”. A Zainabo franze a testa: como pode um fogo arder sem se ver, ou uma ferida doer sem se sentir? “É esse o segredo”, responde a professora. “Camões junta ideias que se contradizem, antítese sobre antítese, até chegar ao paradoxo: o amor é justamente aquilo que não cabe na lógica.” O Momade, pela primeira vez, não faz nenhuma piada.',
        choices: [{ text: '“E há algum poema de Camões sobre a mudança? Esta ilha mudou tanto…”', translation: '“E tem algum poema de Camões sobre a mudança? Esta ilha mudou tanto…”', next: 'mudanca' }],
      },
      mudanca: {
        emoji: '🏚️',
        text: 'À noite, a professora leva-os pela cidade de pedra e cal, onde palácios de fachadas coloridas convivem com casas em ruínas, sem telhado. “Esta ilha já foi capital”, lembra ela, “e hoje vive da pesca, do turismo e da memória.” Depois, parada numa esquina, recita: “Mudam-se os tempos, mudam-se as vontades, / Muda-se o ser, muda-se a confiança”. O Linu repara na repetição do verbo no início de cada oração, a anáfora, que dá ao verso o ritmo de um sino. A Dona Amélia pergunta-lhe o que quer dizer o poema.',
        translation: 'À noite, a professora leva todos pela cidade de pedra e cal, onde palácios de fachadas coloridas convivem com casas em ruínas, sem telhado. “Esta ilha já foi capital”, lembra ela, “e hoje vive da pesca, do turismo e da memória.” Depois, parada numa esquina, recita: “Mudam-se os tempos, mudam-se as vontades, / Muda-se o ser, muda-se a confiança”. O Linu nota a repetição do verbo no início de cada oração, a anáfora, que dá ao verso o ritmo de um sino. A dona Amélia pergunta a ele o que o poema quer dizer.',
        choices: [{ text: '“Que tudo muda, as coisas e as pessoas, e que a própria mudança é a única regra.”', translation: '“Que tudo muda, as coisas e as pessoas, e que a própria mudança é a única regra.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌙',
        text: 'A Dona Amélia sorri e fecha o livro: “Tens alma de leitor, pinguim.” Os alunos combinam ler o Canto I até à semana seguinte, para procurar as estâncias em que a armada chega a Moçambique. O Momade promete descobrir quantos hipérbatos há na primeira página, e a Zainabo quer decorar o soneto do amor. No regresso, pela ponte iluminada pela lua, o Linu repete baixinho “mudam-se os tempos, mudam-se as vontades”. Pela primeira vez, sente que percebe Camões por dentro.',
        translation: 'A dona Amélia sorri e fecha o livro: “Você tem alma de leitor, pinguim.” Os alunos combinam ler o Canto I até a semana seguinte, para procurar as estrofes em que a armada chega a Moçambique. O Momade promete descobrir quantos hipérbatos há na primeira página, e a Zainabo quer decorar o soneto do amor. Na volta, pela ponte iluminada pela lua, o Linu repete baixinho “mudam-se os tempos, mudam-se as vontades”. Pela primeira vez, ele sente que entende Camões por dentro.',
        ending: { tone: 'bom', title: 'Leitor de Camões', message: 'Hipérbato, perífrase, metonímia, antítese, paradoxo e anáfora: o Linu leu Camões onde o próprio Camões viveu, e entendeu por que ele ainda fala conosco.' },
      },
      final_mergulho: {
        emoji: '🏊',
        text: 'Metade da turma corre para a praia, e o Linu vai atrás. A água está morna e cristalina, e passam uma hora a mergulhar entre peixes coloridos. Quando voltam à fortaleza, a Dona Amélia já está a arrumar o livro. “O soneto fica para amanhã”, diz ela, sem zanga. O Linu seca as penas ao sol e pensa que Camões, que também conheceu o mar, talvez lhe perdoasse.',
        translation: 'Metade da turma corre para a praia, e o Linu vai atrás. A água está morna e cristalina, e eles passam uma hora mergulhando entre peixes coloridos. Quando voltam à fortaleza, a dona Amélia já está guardando o livro. “O soneto fica para amanhã”, diz ela, sem bronca. O Linu seca as penas ao sol e pensa que Camões, que também conheceu o mar, talvez o perdoasse.',
        ending: { tone: 'neutro', title: 'Camões fica para amanhã', message: 'Um mergulho delicioso, mas o Linu perdeu os sonetos. Tente de novo e fique para a leitura!' },
      },
    },
  },
  {
    id: 'pt-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Ao vencedor, as batatas',
    emoji: '📚',
    summary: 'Em Salvador, num sebo do Pelourinho, o Linu entra num clube de leitura que põe frente a frente Machado de Assis, Eça de Queirós e Castro Alves.',
    cultural_context:
      'Salvador foi a primeira capital do Brasil, de 1549 a 1763, e o seu centro histórico, o Pelourinho, é Patrimônio Mundial da UNESCO desde 1985. O poeta Castro Alves, nascido na Bahia e morto em Salvador em 1871, ficou conhecido como “o poeta dos escravos” por poemas como “O Navio Negreiro”. Em 1878, Machado de Assis publicou uma crítica severa a “O Primo Basílio”, de Eça de Queirós.',
    start: 'start',
    glossary: [
      ['o alfarrabista (Portugal)', 'o sebo'],
      ['o defunto autor', 'o morto que escreve (e não o escritor que morreu)'],
      ['a ironia', 'dizer uma coisa para dar a entender outra, muitas vezes o contrário'],
      ['o quiasmo', 'o cruzamento de termos em ordem inversa (autor defunto × defunto autor)'],
      ['a campa', 'a sepultura, o túmulo'],
      ['o manto diáfano', 'o véu transparente'],
      ['dir-se-ia (mesóclise)', 'se diria (a mesóclise era comum na escrita culta do Brasil no século XIX)'],
      ['a apóstrofe', 'a figura em que se interpela diretamente alguém ou algo'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'No Pelourinho, as casas pintadas de azul, amarelo e cor-de-rosa descem pela ladeira de pedra até ao Largo. O Linu entra num alfarrabista estreito, onde os livros se empilham até ao teto e cheira a papel antigo e a café. Ao fundo, à volta de uma mesa, reúne-se o clube de leitura do Seu Otávio, um senhor baiano de chapéu de palha que passou a vida a dar aulas de Literatura. Entre os leitores está a Leonor, uma estudante de Lisboa em intercâmbio na Universidade Federal da Bahia. “Hoje, Machado contra Eça!”, anuncia o Seu Otávio, a bater com a mão na mesa, e toda a gente ri.',
        translation: 'No Pelourinho, as casas pintadas de azul, amarelo e cor-de-rosa descem pela ladeira de pedra até o Largo. O Linu entra num sebo estreito, onde os livros se empilham até o teto e há cheiro de papel antigo e de café. No fundo, em volta de uma mesa, se reúne o clube de leitura do seu Otávio, um senhor baiano de chapéu de palha que passou a vida dando aula de Literatura. Entre os leitores está a Leonor, uma estudante de Lisboa em intercâmbio na Universidade Federal da Bahia. “Hoje, Machado contra Eça!”, anuncia o seu Otávio, batendo com a mão na mesa, e todo mundo ri.',
        choices: [{ text: '“Posso juntar-me a vocês? Prometo não tomar partido… logo de início.”', translation: '“Posso me juntar a vocês? Prometo não tomar partido… logo de cara.”', next: 'defunto' }],
      },
      defunto: {
        emoji: '⚰️',
        text: 'O Seu Otávio abre as “Memórias Póstumas de Brás Cubas”, de 1881, e lê o começo em voz alta: o narrador avisa que não é “propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço”. A Leonor sorri: “Isto, em 1881, era uma ousadia.” O Seu Otávio explica que a inversão das palavras, um quiasmo, muda tudo: não se trata de um escritor que morreu, mas de um morto que resolveu escrever. “E quem já morreu”, acrescenta ele, “pode falar da vida sem medo de nada.” Depois vira-se para o Linu e pede-lhe que resuma a diferença por palavras suas.',
        translation: 'O seu Otávio abre as “Memórias Póstumas de Brás Cubas”, de 1881, e lê o começo em voz alta: o narrador avisa que não é “propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço”. A Leonor sorri: “Isso, em 1881, era uma ousadia.” O seu Otávio explica que a inversão das palavras, um quiasmo, muda tudo: não se trata de um escritor que morreu, mas de um morto que resolveu escrever. “E quem já morreu”, acrescenta ele, “pode falar da vida sem medo de nada.” Depois se vira para o Linu e pede que ele resuma a diferença com as próprias palavras.',
        choices: [
          { text: '“Brás Cubas é um morto que escreve as suas memórias depois de morrer, e não um escritor que já faleceu.”', translation: '“Brás Cubas é um morto que escreve as suas memórias depois de morrer, e não um escritor que já faleceu.”', next: 'batatas' },
          {
            text: '“Brás Cubas é um escritor famoso que morreu e cujos livros foram publicados depois.”',
            translation: '“Brás Cubas é um escritor famoso que morreu e cujos livros foram publicados depois.”',
            wrong: 'Essa seria a definição de “autor defunto” — justamente o que o narrador diz NÃO ser. Ele é um “defunto autor”: um morto que, do além, resolve escrever. O quiasmo (autor defunto × defunto autor) inverte os termos e o sentido.',
          },
        ],
      },
      batatas: {
        emoji: '🥔',
        text: '“E agora, a frase mais famosa de Machado”, diz o Seu Otávio, a folhear o “Quincas Borba”, de 1891. Lê a fórmula do filósofo louco do romance, que explica a vida como uma luta pela sobrevivência: “Ao vencedor, as batatas!” A Leonor ri-se alto: “Um sistema filosófico inteiro reduzido a um prato de batatas!” O Seu Otávio explica que a ironia de Machado está precisamente aí: uma teoria grandiosa que, afinal, serve para justificar a lei do mais forte. O Linu escreve no caderno: ironia é dizer uma coisa para dar a entender outra.',
        translation: '“E agora, a frase mais famosa de Machado”, diz o seu Otávio, folheando o “Quincas Borba”, de 1891. Ele lê a fórmula do filósofo louco do romance, que explica a vida como uma luta pela sobrevivência: “Ao vencedor, as batatas!” A Leonor ri alto: “Um sistema filosófico inteiro reduzido a um prato de batatas!” O seu Otávio explica que a ironia de Machado está exatamente aí: uma teoria grandiosa que, no fim, serve para justificar a lei do mais forte. O Linu escreve no caderno: ironia é dizer uma coisa para dar a entender outra.',
        choices: [{ text: '“E o Eça? A Leonor ainda não disse nada em defesa dele.”', translation: '“E o Eça? A Leonor ainda não disse nada em defesa dele.”', next: 'primo' }],
      },
      primo: {
        emoji: '🎭',
        text: 'A Leonor não se faz rogada. Lembra que, em 1878, Machado criticou com dureza “O Primo Basílio”, acusando Eça de exagerar no realismo, mas que o português não parou por aí. Abre “A Relíquia”, de 1887, e lê a epígrafe: “Sobre a nudez forte da verdade — o manto diáfano da fantasia.” “Vejam a antítese”, diz ela: “a verdade é nua e forte; a fantasia é um véu transparente, que cobre sem esconder.” O Seu Otávio aplaude devagar: “Touché, menina. Machado ter-lhe-ia dado os parabéns.”',
        translation: 'A Leonor não se faz de rogada. Lembra que, em 1878, Machado criticou duramente “O Primo Basílio”, acusando Eça de exagerar no realismo, mas que o português não parou por aí. Ela abre “A Relíquia”, de 1887, e lê a epígrafe: “Sobre a nudez forte da verdade — o manto diáfano da fantasia.” “Vejam a antítese”, diz ela: “a verdade é nua e forte; a fantasia é um véu transparente, que cobre sem esconder.” O seu Otávio aplaude devagar: “Touché, menina. Machado teria dado os parabéns a você.”',
        choices: [
          { text: '“Então, para Eça, a fantasia não apaga a verdade: veste-a, deixando-a ver.”', translation: '“Então, para Eça, a fantasia não apaga a verdade: veste a verdade, deixando que ela apareça.”', next: 'mesoclise' },
          {
            text: '“Então Eça defende que a verdade deve ficar escondida, sem nenhuma fantasia.”',
            translation: '“Então Eça defende que a verdade deve ficar escondida, sem nenhuma fantasia.”',
            wrong: 'A epígrafe diz o contrário: sobre a verdade vai “o manto diáfano da fantasia” — um véu TRANSPARENTE. A fantasia cobre a verdade sem escondê-la; as duas andam juntas.',
          },
        ],
      },
      mesoclise: {
        emoji: '✒️',
        text: 'A Leonor repara na frase do Seu Otávio: “Ter-lhe-ia? No Brasil também se diz assim?” Ele ri-se e explica que, na fala, nenhum baiano diria aquilo, mas que Machado escrevia com toda a naturalidade “dir-se-ia” e “far-me-á”, como se escrevia então dos dois lados do Atlântico. “A norma escrita do século XIX estava muito mais perto da de Portugal”, diz ele. “Foi a língua falada no Brasil que foi puxando o pronome para antes do verbo.” Lá fora, o céu começa a ficar alaranjado, e o Seu Otávio propõe acabar a sessão na Praça Castro Alves, a ver o pôr do sol sobre a baía.',
        translation: 'A Leonor repara na frase do seu Otávio: “‘Ter-lhe-ia’? No Brasil também se fala assim?” Ele ri e explica que, na fala, nenhum baiano diria aquilo, mas que Machado escrevia com toda a naturalidade “dir-se-ia” e “far-me-á”, como se escrevia na época dos dois lados do Atlântico. “A norma escrita do século XIX estava muito mais perto da de Portugal”, diz ele. “Foi a língua falada no Brasil que foi puxando o pronome para antes do verbo.” Lá fora, o céu começa a ficar alaranjado, e o seu Otávio propõe terminar a sessão na Praça Castro Alves, vendo o pôr do sol sobre a baía.',
        choices: [
          { text: '“Vamos! Quero ouvir Castro Alves na praça dele.”', translation: '“Vamos! Quero ouvir Castro Alves na praça dele.”', next: 'castro' },
          { text: '“Eu fico aqui mais um bocado, a folhear estes livros antigos.”', translation: '“Eu fico aqui mais um pouco, folheando esses livros antigos.”', next: 'final_sebo' },
        ],
      },
      castro: {
        emoji: '🌅',
        text: 'Na Praça Castro Alves, a estátua do poeta ergue o braço sobre a Baía de Todos os Santos, dourada pelo pôr do sol. O Seu Otávio tira o chapéu e declama o primeiro verso de “O Navio Negreiro”: “’Stamos em pleno mar…” Explica que o poema, escrito contra o tráfico de africanos escravizados, alterna a beleza do mar com o horror do porão, e que Castro Alves interpela diretamente o céu, o mar e a própria pátria, numa sucessão de apóstrofes. “Foi a poesia a tomar partido”, diz ele, em voz baixa. A Leonor e o Linu ficam calados durante muito tempo, a olhar para a baía.',
        translation: 'Na Praça Castro Alves, a estátua do poeta ergue o braço sobre a Baía de Todos os Santos, dourada pelo pôr do sol. O seu Otávio tira o chapéu e declama o primeiro verso de “O Navio Negreiro”: “’Stamos em pleno mar…” Ele explica que o poema, escrito contra o tráfico de africanos escravizados, alterna a beleza do mar com o horror do porão, e que Castro Alves interpela diretamente o céu, o mar e a própria pátria, numa sequência de apóstrofes. “Foi a poesia tomando partido”, diz ele, em voz baixa. A Leonor e o Linu ficam calados por muito tempo, olhando para a baía.',
        choices: [{ text: '“Seu Otávio, na próxima sessão, posso trazer Fernando Pessoa?”', translation: '“Seu Otávio, na próxima sessão, posso trazer Fernando Pessoa?”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Pode e deve”, responde o Seu Otávio, a apertar-lhe a asa. A Leonor promete trazer “Os Maias”, para provar de uma vez por todas que Eça é o maior romancista da língua, e o Seu Otávio responde que trará “Dom Casmurro” e os “olhos de ressaca” de Capitu. A discussão continua pela ladeira abaixo, entre risos, até ao Largo do Pelourinho. O Linu percebe que não há vencedor nesta disputa, e que ainda bem. Ao vencedor, as batatas; aos leitores, os livros todos.',
        translation: '“Pode e deve”, responde o seu Otávio, apertando a asa dele. A Leonor promete trazer “Os Maias”, para provar de uma vez por todas que Eça é o maior romancista da língua, e o seu Otávio responde que vai trazer “Dom Casmurro” e os “olhos de ressaca” de Capitu. A discussão continua ladeira abaixo, entre risos, até o Largo do Pelourinho. O Linu percebe que não há vencedor nessa disputa, e que ainda bem. Ao vencedor, as batatas; aos leitores, todos os livros.',
        ending: { tone: 'bom', title: 'Machado, Eça e Castro Alves', message: 'Quiasmo, ironia, antítese, apóstrofe e a mesóclise literária do século XIX: o Linu leu os clássicos dos dois lados do Atlântico — sem precisar escolher um vencedor.' },
      },
      final_sebo: {
        emoji: '🕯️',
        text: 'O Linu fica sozinho entre as estantes e perde-se numa edição antiga de poemas, com dedicatórias a lápis de leitores desconhecidos. Quando levanta os olhos, a loja já está a fechar e o céu lá fora escureceu. Na mesa, o Seu Otávio deixou-lhe um bilhete: “Castro Alves esperou por ti. Fica para sábado.” O Linu compra o livro e sai para a ladeira iluminada. Leu muito, mas perdeu o melhor verso da tarde.',
        translation: 'O Linu fica sozinho entre as estantes e se perde numa edição antiga de poemas, com dedicatórias a lápis de leitores desconhecidos. Quando levanta os olhos, a loja já está fechando e o céu lá fora escureceu. Na mesa, o seu Otávio deixou um bilhete para ele: “Castro Alves esperou por você. Fica para sábado.” O Linu compra o livro e sai para a ladeira iluminada. Leu muito, mas perdeu o melhor verso da tarde.',
        ending: { tone: 'neutro', title: 'Preso no sebo', message: 'Bons livros, mas o Linu perdeu Castro Alves na praça ao pôr do sol. Tente de novo!' },
      },
    },
  },
  {
    id: 'pt-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Sodade no Mindelo',
    emoji: '🎻',
    summary: 'No Mindelo, numa tertúlia à beira da baía, o Linu lê Fernando Pessoa ao som da morna e aprende a distinguir apóstrofe, pergunta retórica e paradoxo, entre provérbios e formas antigas.',
    cultural_context:
      'O Mindelo, na ilha de São Vicente, é a capital cultural de Cabo Verde: ali foi fundada, em 1936, a revista “Claridade”, marco da literatura cabo-verdiana moderna. A morna, gênero musical que canta a “sodade”, a saudade em crioulo, foi inscrita pela UNESCO no Patrimônio Cultural Imaterial da Humanidade em 2019. “Morabeza” é a palavra cabo-verdiana para a hospitalidade e a gentileza no trato.',
    start: 'start',
    glossary: [
      ['a sodade (crioulo de Cabo Verde)', 'a saudade'],
      ['a morabeza (Cabo Verde)', 'a hospitalidade, a gentileza cabo-verdiana'],
      ['Nha / Nhô (Cabo Verde)', 'dona / seu (tratamento de respeito)'],
      ['a tertúlia', 'o encontro informal para conversar sobre literatura e arte'],
      ['a apóstrofe', 'a interpelação direta a alguém ou algo (Ó mar salgado)'],
      ['a pergunta retórica', 'a pergunta que não espera resposta'],
      ['deveras', 'de verdade, realmente'],
      ['Quem vos avisa vosso amigo é.', 'Quem avisa amigo é. (forma antiga com “vós”)'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Do alto da estrada, o Linu vê o Mindelo espalhado à volta da Baía do Porto Grande, com o Monte Cara ao fundo, deitado como um rosto a olhar para o céu. Na praça, junto ao coreto, espera-o a Nha Titina, professora de Literatura reformada, que dá aulas há quarenta anos no antigo liceu da cidade. Recebe-o com um abraço cheio de morabeza e um convite: “Sexta à noite há tertúlia no bar do Zé, à beira da baía. Lemos Pessoa e ouvimos morna.” O Linu hesita, porque nunca leu poesia em voz alta diante de desconhecidos. A Nha Titina ri-se: “Aqui ninguém é desconhecido mais do que uma noite.”',
        translation: 'Do alto da estrada, o Linu vê o Mindelo espalhado em volta da Baía do Porto Grande, com o Monte Cara ao fundo, deitado como um rosto olhando para o céu. Na praça, perto do coreto, a Nha Titina está esperando por ele: ela é professora de Literatura aposentada e deu aula por quarenta anos no antigo liceu da cidade. Ela o recebe com um abraço cheio de hospitalidade e um convite: “Sexta à noite tem tertúlia no bar do Zé, na beira da baía. A gente lê Pessoa e ouve morna.” O Linu hesita, porque nunca leu poesia em voz alta diante de desconhecidos. A Nha Titina ri: “Aqui ninguém é desconhecido por mais de uma noite.”',
        choices: [{ text: '“Então lá estarei, Nha Titina, com o coração nas mãos.”', translation: '“Então vou estar lá, Nha Titina, com o coração na mão.”', next: 'tertulia' }],
      },
      tertulia: {
        emoji: '🌊',
        text: 'Na sexta-feira, o bar do Zé está cheio: estudantes, pescadores, uma cantora de morna com um xaile ao ombro e um violinista de cabelos brancos. A Nha Titina abre a “Mensagem”, de 1934, e lê o início de “Mar Português”: “Ó mar salgado, quanto do teu sal / São lágrimas de Portugal!” Depois pergunta à sala que figuras encontram naqueles dois versos. Um rapaz lembra que o poeta fala diretamente com o mar, como se ele o pudesse ouvir. A Nha Titina acena e olha para o Linu, à espera do resto.',
        translation: 'Na sexta-feira, o bar do Zé está cheio: estudantes, pescadores, uma cantora de morna com um xale no ombro e um violinista de cabelos brancos. A Nha Titina abre a “Mensagem”, de 1934, e lê o começo de “Mar Português”: “Ó mar salgado, quanto do teu sal / São lágrimas de Portugal!” Depois pergunta à plateia que figuras aparecem naqueles dois versos. Um rapaz lembra que o poeta fala diretamente com o mar, como se o mar pudesse ouvi-lo. A Nha Titina concorda com a cabeça e olha para o Linu, esperando o resto.',
        choices: [
          { text: '“Isso é a apóstrofe. E há uma hipérbole: o sal do mar feito das lágrimas de quem ficou e de quem partiu.”', translation: '“Isso é a apóstrofe. E há uma hipérbole: o sal do mar feito das lágrimas de quem ficou e de quem partiu.”', next: 'valeu' },
          {
            text: '“Pessoa está a explicar, cientificamente, de onde vem o sal da água do mar.”',
            translation: '“Pessoa está explicando, cientificamente, de onde vem o sal da água do mar.”',
            wrong: 'Não há nada de científico aqui: é uma hipérbole, um exagero expressivo. O poeta diz que o sal do mar são “lágrimas de Portugal” — o sofrimento de quem partiu nas navegações e de quem ficou esperando. E o “Ó mar salgado” é uma apóstrofe: ele fala com o mar.',
          },
        ],
      },
      valeu: {
        emoji: '❓',
        text: 'A Nha Titina continua a ler, até aos versos mais célebres do poema: “Valeu a pena? Tudo vale a pena / Se a alma não é pequena.” Explica que a pergunta é retórica, porque o próprio poeta lhe responde logo a seguir, com uma condição. Uma estudante, a Lúcia, discorda com veemência: “Valeu a pena para quem? Para as mães que ficaram no cais?” A sala agita-se, e a Nha Titina, encantada, deixa a discussão correr. No fim, remata com um provérbio antigo: “Quem vos avisa vosso amigo é: um poema bom nunca dá uma resposta só.”',
        translation: 'A Nha Titina continua lendo, até os versos mais famosos do poema: “Valeu a pena? Tudo vale a pena / Se a alma não é pequena.” Ela explica que a pergunta é retórica, porque o próprio poeta responde logo em seguida, com uma condição. Uma estudante, a Lúcia, discorda com veemência: “Valeu a pena para quem? Para as mães que ficaram no cais?” A plateia se agita, e a Nha Titina, encantada, deixa a discussão correr. No fim, ela conclui com um provérbio antigo: “Quem avisa amigo é: um poema bom nunca dá uma resposta só.”',
        choices: [{ text: '“‘Quem vos avisa vosso amigo é’ — que bonito ouvir o ‘vós’ ainda vivo nos provérbios!”', translation: '“‘Quem vos avisa vosso amigo é’ — que bonito ouvir o ‘vós’ ainda vivo nos provérbios!”', next: 'fingidor' }],
      },
      fingidor: {
        emoji: '🎭',
        text: 'Depois de uma morna, a Nha Titina lê outro Pessoa, a “Autopsicografia”: “O poeta é um fingidor. / Finge tão completamente / Que chega a fingir que é dor / A dor que deveras sente.” A cantora de xaile protesta, a rir: “Na morna ninguém finge! Quando canto a sodade, é sodade verdadeira.” A Nha Titina pede ao Linu que desfaça o nó: afinal, o poeta sente ou não sente a dor? O Linu relê os versos devagar, sobretudo o último, e repara na palavra “deveras”.',
        translation: 'Depois de uma morna, a Nha Titina lê outro Pessoa, a “Autopsicografia”: “O poeta é um fingidor. / Finge tão completamente / Que chega a fingir que é dor / A dor que deveras sente.” A cantora de xale protesta, rindo: “Na morna ninguém finge! Quando eu canto a sodade, é saudade de verdade.” A Nha Titina pede ao Linu que desate o nó: afinal, o poeta sente ou não sente a dor? O Linu relê os versos devagar, sobretudo o último, e repara na palavra “deveras”.',
        choices: [
          { text: '“Sente, e deveras. Mas, ao transformá-la em poema, dá-lhe forma, e essa forma já é fingimento: é o paradoxo do poeta.”', translation: '“Sente, e de verdade. Mas, ao transformar a dor em poema, dá forma a ela, e essa forma já é fingimento: é o paradoxo do poeta.”', next: 'morna' },
          {
            text: '“Não sente nada: o poeta é só um mentiroso que inventa as dores.”',
            translation: '“Não sente nada: o poeta é só um mentiroso que inventa as dores.”',
            wrong: 'O último verso desmente isso: o poeta finge “a dor que DEVERAS sente” — ou seja, a dor que sente de verdade. O paradoxo está aí: a dor é real, mas ao virar poema ela ganha forma, e essa forma é uma espécie de fingimento.',
          },
        ],
      },
      morna: {
        emoji: '🎶',
        text: 'A cantora aplaude o Linu e canta uma morna lenta, sobre um homem que embarcou num navio e uma mulher que ficou à janela a ver o mar. A Nha Titina explica, em voz baixa, que a sodade da morna e a saudade de Pessoa são irmãs: nasceram do mesmo mar, de partidas e de esperas. Conta também que, em 1936, ali mesmo no Mindelo, um grupo de escritores fundou a revista “Claridade”, para escrever Cabo Verde a partir das suas próprias ilhas. Quando a morna acaba, a Nha Titina estende ao Linu uma folha com provérbios. “Agora é a tua vez de ler”, diz ela.',
        translation: 'A cantora aplaude o Linu e canta uma morna lenta, sobre um homem que embarcou num navio e uma mulher que ficou na janela olhando o mar. A Nha Titina explica, em voz baixa, que a sodade da morna e a saudade de Pessoa são irmãs: nasceram do mesmo mar, de partidas e de esperas. Conta também que, em 1936, ali mesmo no Mindelo, um grupo de escritores fundou a revista “Claridade”, para escrever Cabo Verde a partir das suas próprias ilhas. Quando a morna termina, a Nha Titina entrega ao Linu uma folha com provérbios. “Agora é a sua vez de ler”, diz ela.',
        choices: [
          { text: 'O Linu levanta-se, respira fundo e pega na folha.', translation: 'O Linu se levanta, respira fundo e pega a folha.', next: 'proverbios' },
          { text: '“Hoje não, Nha Titina. Fico só a ouvir.”', translation: '“Hoje não, Nha Titina. Vou só ouvir.”', next: 'final_timido' },
        ],
      },
      proverbios: {
        emoji: '📜',
        text: 'Com a voz a tremer, o Linu lê: “Devagar se vai ao longe. De grão em grão enche a galinha o papo. Quem vos avisa vosso amigo é.” A cada provérbio, a sala responde com um murmúrio, e alguém repete o mesmo ditado em crioulo, com outra música. A Nha Titina explica que os provérbios guardam formas que a língua do dia a dia já esqueceu, como o “vós”, e uma ordem de palavras que parece tirada de um poema antigo. Por fim, pede ao Linu que feche a noite com um verso de Pessoa à sua escolha. O Linu escolhe o que mais lhe ficou no ouvido.',
        translation: 'Com a voz trêmula, o Linu lê: “Devagar se vai ao longe. De grão em grão a galinha enche o papo. Quem avisa amigo é.” A cada provérbio, a plateia responde com um murmúrio, e alguém repete o mesmo ditado em crioulo, com outra música. A Nha Titina explica que os provérbios guardam formas que a língua do dia a dia já esqueceu, como o “vós”, e uma ordem de palavras que parece tirada de um poema antigo. Por fim, ela pede ao Linu que feche a noite com um verso de Pessoa à escolha dele. O Linu escolhe o que mais ficou no seu ouvido.',
        choices: [{ text: '“Tudo vale a pena / Se a alma não é pequena.”', translation: '“Tudo vale a pena / Se a alma não é pequena.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'O bar inteiro aplaude, e o violinista toca umas notas de morna só para ele. A Nha Titina abraça-o: “Já não és desconhecido, pinguim; agora és do Mindelo.” Ficam até tarde, entre mornas, poemas e discussões sobre Pessoa, até a baía se encher de luzes de barcos. De madrugada, a caminho do hotel, o Linu repete baixinho os versos e os provérbios da noite. Sente uma coisa nova no peito, e percebe que já tem sodade de uma noite que ainda nem acabou.',
        translation: 'O bar inteiro aplaude, e o violinista toca umas notas de morna só para ele. A Nha Titina o abraça: “Você já não é desconhecido, pinguim; agora é do Mindelo.” Eles ficam até tarde, entre mornas, poemas e discussões sobre Pessoa, até a baía se encher de luzes de barcos. De madrugada, a caminho do hotel, o Linu repete baixinho os versos e os provérbios da noite. Ele sente uma coisa nova no peito e percebe que já tem saudade de uma noite que ainda nem acabou.',
        ending: { tone: 'bom', title: 'Sodade', message: 'Apóstrofe, hipérbole, pergunta retórica, paradoxo, o “vós” dos provérbios e a sodade da morna: o Linu leu Pessoa em voz alta e ganhou uma casa no Mindelo.' },
      },
      final_timido: {
        emoji: '🤐',
        text: 'O Linu fica sentado a ouvir, e a Nha Titina passa a folha a uma estudante, que lê os provérbios com uma voz firme e bonita. A noite é linda, cheia de mornas e de poemas. Mas, ao sair, o Linu sente uma pontinha de arrependimento por não se ter levantado. A Nha Titina, que percebe tudo, dá-lhe uma palmadinha na asa: “Devagar se vai ao longe. Na próxima tertúlia, lês tu.” O Linu promete que sim.',
        translation: 'O Linu fica sentado ouvindo, e a Nha Titina passa a folha para uma estudante, que lê os provérbios com uma voz firme e bonita. A noite é linda, cheia de mornas e de poemas. Mas, na saída, o Linu sente uma pontinha de arrependimento por não ter se levantado. A Nha Titina, que percebe tudo, dá um tapinha na asa dele: “Devagar se vai ao longe. Na próxima tertúlia, você lê.” O Linu promete que sim.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Uma noite bonita, mas o Linu não teve coragem de ler. Tente de novo e leia os provérbios em voz alta!' },
      },
    },
  },
];
